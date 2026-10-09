import { useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet, type StyleProp, type TextStyle } from "react-native";
import type { Exercise } from "@/lib/lessons/types";
import { speak, SPANISH_LANG, type SpeechLang } from "@/lib/speech";
import TapText, { voiceFor } from "@/components/TapText";
import {
  gradeFillBlank,
  gradeTranslate,
  isWordOrderCorrect,
  optionOrder,
  seededShuffle,
  splitOnBlank,
} from "@/lib/grading";
import { listenFirstAudio } from "@/lib/listenFirst";
import { Dictation, ListenButtons, ListenChoose, Speak, Write } from "@/components/SkillExercises";
import { AnswerCompare } from "@/components/AnswerCompare";

// Mobile port of the web app's ExerciseBlock -- same grading and option
// shuffling (src/lib/grading.ts, identical in both repos), same "check
// answer -> show correct/incorrect + explanation" interaction model,
// rebuilt with RN primitives instead of DOM/Tailwind.

function Feedback({
  correct,
  explanation,
  lang,
  title,
}: {
  correct: boolean;
  explanation: string;
  lang: SpeechLang;
  title?: string;
}) {
  return (
    <View style={[fb.box, correct ? fb.boxCorrect : fb.boxWrong]}>
      <TapText
        text={title ?? (correct ? "Correct!" : "Not quite.")}
        lang={lang}
        mode="english"
        style={[fb.title, correct ? fb.titleCorrect : fb.titleWrong]}
      />
      <TapText text={explanation} lang={lang} style={fb.body} />
    </View>
  );
}

const fb = StyleSheet.create({
  box: { borderRadius: 8, padding: 10, marginTop: 10 },
  boxCorrect: { backgroundColor: "#16a34a1a" },
  boxWrong: { backgroundColor: "#dc26261a" },
  title: { fontWeight: "600", fontSize: 14 },
  titleCorrect: { color: "#15803d" },
  titleWrong: { color: "#b91c1c" },
  body: { fontSize: 14, color: "#000000cc", marginTop: 2 },
});

// Every word of a question is tap-to-hear -- see TapText.
function SpeakableText({
  text,
  lang,
  style,
}: {
  text: string;
  lang: SpeechLang;
  style?: StyleProp<TextStyle>;
}) {
  return <TapText text={text} lang={lang} style={style} />;
}

export default function ExerciseBlock({
  exercise,
  index,
  onAnswered,
  showInlineFeedback = true,
  onChecked,
  hideIndexLabel = false,
  lang = SPANISH_LANG,
  level = "A1",
  listenFirst = false,
}: {
  exercise: Exercise;
  index: number;
  onAnswered?: (correct: boolean) => void;
  // The new step-by-step lesson player shows feedback as a bottom sheet
  // instead of an inline box (and doesn't want the "Question N" label,
  // since its own step header already says "Checkpoint"/"Review"). Both
  // default to the original inline behavior so StoryReaderScreen, which
  // doesn't pass these, is unaffected.
  showInlineFeedback?: boolean;
  // `title`, when set, replaces "Correct!" / "Not quite." (e.g. "Skipped
  // -- not graded." for a skipped speaking exercise).
  onChecked?: (correct: boolean, explanation: string, title?: string) => void;
  hideIndexLabel?: boolean;
  // Target language for pronunciation (flashcards/highlighting already
  // pronounce in this same language elsewhere -- see src/lib/speech.ts).
  // Defaults to Spanish so any caller that hasn't been updated yet still
  // gets correct (if not level-accurate) pronunciation rather than none.
  lang?: SpeechLang;
  // CEFR level, for "write" feedback ("A1" ... "C2").
  level?: string;
  // Listen-first mode (see lib/listenFirst.ts): the Spanish is played
  // instead of shown until the learner answers or taps "Show text".
  listenFirst?: boolean;
}) {
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [shownExplanation, setShownExplanation] = useState("");
  const [feedbackTitle, setFeedbackTitle] = useState<string | undefined>(undefined);
  const [revealed, setRevealed] = useState(false);
  const listenAudio = listenFirst ? listenFirstAudio(exercise, lang) : null;
  const hideText = listenAudio !== null && !checked && !revealed;

  // One step per screen, so the hidden Spanish plays as the question
  // appears (es-en Translate already plays its source itself).
  useEffect(() => {
    if (listenAudio && exercise.type !== "translate") speak(listenAudio, lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // `note` is only ever set by FillBlank/Translate's gradeFreeText() --
  // e.g. "correct, but that's a typo" or "correct, but watch the accent"
  // -- and gets folded into the explanation text shown below (both the
  // inline Feedback box and whatever onChecked's caller does with it)
  // rather than needing its own prop threaded through every caller.
  function report(isCorrect: boolean, note?: string, title?: string) {
    setFeedbackTitle(title);
    setCorrect(isCorrect);
    setChecked(true);
    onAnswered?.(isCorrect);
    const baseExplanation = (exercise as { explanation: string }).explanation;
    const explanation = note ? `${note} ${baseExplanation}` : baseExplanation;
    setShownExplanation(explanation);
    onChecked?.(isCorrect, explanation, title);
  }

  return (
    <View style={s.container}>
      {!hideIndexLabel && <Text style={s.index}>Question {index + 1}</Text>}
      {hideText && listenAudio && (
        <View style={s.listenRow}>
          <Text style={s.listenLabel}>🎧 Listen first</Text>
          <ListenButtons text={listenAudio} lang={lang} />
          <Pressable style={s.linkButton} onPress={() => setRevealed(true)}>
            <Text style={s.linkButtonText}>Show text</Text>
          </Pressable>
        </View>
      )}
      {exercise.type === "multiple-choice" && (
        <MultipleChoice
          exercise={exercise}
          checked={checked}
          correct={correct}
          onSubmit={report}
          lang={lang}
          hidden={hideText}
        />
      )}
      {exercise.type === "multi-select" && (
        <MultiSelect exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "fill-blank" && (
        <FillBlank
          exercise={exercise}
          checked={checked}
          correct={correct}
          onSubmit={report}
          lang={lang}
          hidden={hideText}
        />
      )}
      {exercise.type === "translate" && (
        <Translate
          exercise={exercise}
          checked={checked}
          correct={correct}
          onSubmit={report}
          lang={lang}
          hidden={hideText}
        />
      )}
      {exercise.type === "word-order" && (
        <WordOrder exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "matching" && (
        <Matching exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "listen-choose" && (
        <ListenChoose exercise={exercise} lang={lang} checked={checked} submit={report} />
      )}
      {exercise.type === "dictation" && (
        <Dictation exercise={exercise} lang={lang} checked={checked} correct={correct} submit={report} />
      )}
      {exercise.type === "speak" && <Speak exercise={exercise} lang={lang} checked={checked} submit={report} />}
      {exercise.type === "write" && (
        <Write exercise={exercise} lang={lang} level={level} checked={checked} submit={report} />
      )}
      {checked && showInlineFeedback && (
        <Feedback correct={correct} explanation={shownExplanation} lang={lang} title={feedbackTitle} />
      )}
    </View>
  );
}

type SubProps<E> = {
  exercise: E;
  checked: boolean;
  correct: boolean;
  onSubmit: (c: boolean, note?: string) => void;
  lang: SpeechLang;
  // Listen-first mode: the Spanish is hidden (played instead) for now.
  hidden?: boolean;
};

function MultipleChoice({
  exercise,
  checked,
  onSubmit,
  lang,
  hidden,
}: SubProps<Extract<Exercise, { type: "multiple-choice" }>>) {
  const [selected, setSelected] = useState<number | null>(null);
  // Shown shuffled; `order` holds authored indexes, so selection and
  // grading stay in terms of correctIndex.
  const order = useMemo(() => optionOrder(exercise.question, exercise.options), [exercise.question, exercise.options]);
  return (
    <View>
      {hidden ? (
        <Text style={s.question}>Listen and choose.</Text>
      ) : (
        <SpeakableText text={exercise.question} lang={lang} style={s.question} />
      )}
      <View style={s.options}>
        {order.map((i) => {
          const opt = exercise.options[i];
          const isSelected = selected === i;
          const showState = checked && isSelected;
          return (
            <Pressable
              key={i}
              disabled={checked}
              onPress={() => {
                // Every option is the target-language vocabulary itself
                // (same reasoning as Matching's pair.left below) --
                // already fully visible before a choice is made, so
                // hearing it doesn't give away the answer. Speaking and
                // selecting on the same tap means every word in a lesson
                // is heard the same way: tap it.
                speak(opt, voiceFor(opt, lang));
                setSelected(i);
              }}
              style={[
                s.option,
                isSelected && s.optionSelected,
                showState && (i === exercise.correctIndex ? s.optionCorrect : s.optionWrong),
                checked && i === exercise.correctIndex && s.optionCorrect,
              ]}
            >
              <Text style={s.optionText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>
      {!checked && (
        <SubmitButton
          disabled={selected === null}
          onPress={() => selected !== null && onSubmit(selected === exercise.correctIndex)}
        />
      )}
    </View>
  );
}

function MultiSelect({
  exercise,
  checked,
  onSubmit,
  lang,
}: SubProps<Extract<Exercise, { type: "multi-select" }>>) {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const order = useMemo(() => optionOrder(exercise.question, exercise.options), [exercise.question, exercise.options]);
  function toggle(i: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }
  return (
    <View>
      <SpeakableText text={exercise.question} lang={lang} style={s.question} />
      <View style={s.options}>
        {order.map((i) => {
          const opt = exercise.options[i];
          const isSelected = selected.has(i);
          const shouldBeSelected = exercise.correctIndexes.includes(i);
          return (
            <Pressable
              key={i}
              disabled={checked}
              onPress={() => {
                speak(opt, voiceFor(opt, lang));
                toggle(i);
              }}
              style={[
                s.option,
                isSelected && s.optionSelected,
                checked && shouldBeSelected && s.optionCorrect,
                checked && isSelected && !shouldBeSelected && s.optionWrong,
              ]}
            >
              <Text style={s.optionText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>
      {!checked && (
        <SubmitButton
          disabled={selected.size === 0}
          onPress={() => {
            const correctSet = new Set(exercise.correctIndexes);
            const isCorrect =
              selected.size === correctSet.size && [...selected].every((i) => correctSet.has(i));
            onSubmit(isCorrect);
          }}
        />
      )}
    </View>
  );
}

// Neither input below lets the OS "help": autoCorrect can silently swap a
// correctly-typed (or near-miss) Spanish word for an English dictionary
// suggestion before gradeFreeText ever sees it (especially likely when the
// device's keyboard has no Spanish dictionary loaded), which would make an
// answer that should pass -- exactly or via the typo/accent tolerance in lib/grading.ts
// -- look wrong for reasons that have nothing to do with the student's
// Spanish. autoCapitalize="none" is belt-and-suspenders (cleanAnswer() already
// lowercases), kept mainly so the student sees exactly what they typed.
function FillBlank({
  exercise,
  checked,
  correct,
  onSubmit,
  lang,
  hidden,
}: SubProps<Extract<Exercise, { type: "fill-blank" }>>) {
  const [value, setValue] = useState("");
  const [before, after] = useMemo(() => splitOnBlank(exercise.sentence), [exercise.sentence]);

  // The blank hides the answer, so this can't safely auto-play (or offer
  // tap-to-hear on) the sentence until after checking -- only then is the
  // completed sentence something the learner is allowed to have heard.
  useEffect(() => {
    if (checked) speak(`${before}${exercise.answer}${after}`, lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <View>
      <SpeakableText text={exercise.prompt} lang={lang} style={s.question} />
      {exercise.en && (
        <TapText text={exercise.en} lang={lang} mode="english" boldBrackets style={s.blankEnglish} />
      )}
      <View style={s.blankRow}>
        {hidden ? null : checked ? (
          <Text
            style={[s.blankText, s.speakableSpan]}
            onPress={() => speak(`${before}${exercise.answer}${after}`, lang)}
          >
            {before}
          </Text>
        ) : (
          <TapText text={before} lang={lang} mode="target" style={s.blankText} />
        )}
        <TextInput
          value={value}
          onChangeText={setValue}
          editable={!checked}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          textContentType="none"
          style={[s.blankInput, checked && (correct ? s.inputCorrect : s.inputWrong)]}
          placeholder="..."
        />
        {hidden ? null : checked ? (
          <Text
            style={[s.blankText, s.speakableSpan]}
            onPress={() => speak(`${before}${exercise.answer}${after}`, lang)}
          >
            {after}
          </Text>
        ) : (
          <TapText text={after} lang={lang} mode="target" style={s.blankText} />
        )}
      </View>
      {checked && <AnswerCompare given={value} expected={exercise.answer} correct={correct} lang={lang} />}
      {exercise.hint && !checked && <TapText text={`Hint: ${exercise.hint}`} lang={lang} style={s.hint} />}
      {!checked && (
        <SubmitButton
          disabled={!value.trim()}
          onPress={() => {
            const result = gradeFillBlank(value, exercise, lang);
            onSubmit(result.correct, result.note);
          }}
        />
      )}
    </View>
  );
}

function Translate({
  exercise,
  checked,
  correct,
  onSubmit,
  lang,
  hidden,
}: SubProps<Extract<Exercise, { type: "translate" }>>) {
  const [value, setValue] = useState("");
  const sourceIsTarget = exercise.direction === "es-en";

  // es-en: `source` IS the target-language phrase this drill question is
  // asking about, and it's on screen from the moment the question
  // appears -- so this is the literal "phrase in the target language
  // pronounced when a drill question is given" case. en-es: `source` is
  // English (nothing to pronounce yet), and `answer` is the target-
  // language phrase, but it stays hidden until checked -- speaking it
  // early would just hand over the answer.
  useEffect(() => {
    if (sourceIsTarget) speak(exercise.source, lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (checked && !sourceIsTarget) speak(exercise.answer, lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <View>
      <SpeakableText text={exercise.prompt} lang={lang} style={s.question} />
      <View style={[s.sourceRow, hidden && s.hiddenRow]}>
        {sourceIsTarget ? (
          <Text
            style={[s.sourceText, s.speakableSpan]}
            onPress={() => speak(exercise.source, lang)}
          >
            {exercise.source}
          </Text>
        ) : (
          <TapText text={exercise.source} lang={lang} mode="english" style={s.sourceText} />
        )}
      </View>
      <TextInput
        value={value}
        onChangeText={setValue}
        editable={!checked}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        textContentType="none"
        style={[s.textInput, checked && (correct ? s.inputCorrect : s.inputWrong)]}
        placeholder={exercise.direction === "es-en" ? "Translate to English…" : "Traduce al español…"}
      />
      {checked && (
        <AnswerCompare
          given={value}
          expected={exercise.answer}
          correct={correct}
          lang={lang}
          alwaysShowCorrect
          correctLabel={correct ? "Model answer:" : "Correct answer:"}
        />
      )}
      {!checked && (
        <SubmitButton
          disabled={!value.trim()}
          onPress={() => {
            const result = gradeTranslate(value, exercise, lang);
            onSubmit(result.correct, result.note);
          }}
        />
      )}
    </View>
  );
}

function WordOrder({
  exercise,
  checked,
  correct,
  onSubmit,
  lang,
}: SubProps<Extract<Exercise, { type: "word-order" }>>) {
  const shuffled = useMemo(
    () => seededShuffle(exercise.words, exercise.prompt),
    [exercise.words, exercise.prompt]
  );
  const [used, setUsed] = useState<number[]>([]); // indexes into `shuffled`, in tap order
  const built = used.map((i) => shuffled[i]);
  const correctSentence = exercise.words.join(" ");

  // Each scrambled chip is already a real, fully-visible target-language
  // word -- hearing one doesn't give away where it goes, so tap-to-hear
  // is safe pre-check. The full sentence (in the right order) is the
  // actual answer, so that only plays once checked.
  useEffect(() => {
    if (checked) speak(correctSentence, lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <View>
      <SpeakableText text={exercise.prompt} lang={lang} style={s.question} />
      <View style={s.builtRow}>
        {built.length === 0 && <Text style={s.hint}>Tap the words below in order.</Text>}
        {built.map((w, i) => (
          <View key={i} style={s.chipBuilt}>
            <Text style={s.chipText} onPress={() => speak(w, lang)}>
              {w}
            </Text>
          </View>
        ))}
      </View>
      <View style={s.options}>
        {shuffled.map((w, i) => {
          const isUsed = used.includes(i);
          return (
            <Pressable
              key={i}
              disabled={checked || isUsed}
              onPress={() => {
                speak(w, lang);
                setUsed((prev) => [...prev, i]);
              }}
              style={[s.chip, isUsed && s.chipUsed]}
            >
              <Text style={s.chipText}>{w}</Text>
            </Pressable>
          );
        })}
      </View>
      {built.length > 0 && !checked && (
        <Pressable style={s.linkButton} onPress={() => setUsed([])}>
          <Text style={s.linkButtonText}>Clear</Text>
        </Pressable>
      )}
      {checked && (
        <AnswerCompare given={built.join(" ")} expected={correctSentence} correct={correct} lang={lang} alwaysShowCorrect />
      )}
      {!checked && (
        <SubmitButton
          disabled={built.length !== exercise.words.length}
          onPress={() => onSubmit(isWordOrderCorrect(built, exercise))}
        />
      )}
    </View>
  );
}

function Matching({
  exercise,
  checked,
  onSubmit,
  lang,
}: SubProps<Extract<Exercise, { type: "matching" }>>) {
  const rightShuffled = useMemo(
    () => seededShuffle(exercise.pairs.map((p) => p.right), exercise.instructions),
    [exercise.pairs, exercise.instructions]
  );
  // left index -> index into rightShuffled. Tiles are tracked by position,
  // not label: a right-hand label can repeat (sorting situations into
  // "ser" / "estar"), and disabling every tile with a used label left the
  // other "ser" rows impossible to match.
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [activeLeft, setActiveLeft] = useState<number | null>(null);

  function chooseRight(tile: number) {
    if (activeLeft === null || checked) return;
    setMatches((prev) => ({ ...prev, [activeLeft]: tile }));
    setActiveLeft(null);
  }

  const usedTiles = new Set(Object.values(matches));
  const allMatched = Object.keys(matches).length === exercise.pairs.length;
  const chosenLabel = (i: number) => (matches[i] === undefined ? undefined : rightShuffled[matches[i]]);
  // Rows with the same left-hand item are interchangeable: either of their
  // right-hand items is right for either row, as long as each is used once.
  const rightsFor = (left: string) => exercise.pairs.filter((p) => p.left === left).map((p) => p.right);

  return (
    <View>
      <SpeakableText text={exercise.instructions} lang={lang} style={s.question} />
      <View style={s.matchingCols}>
        <View style={s.matchingCol}>
          {exercise.pairs.map((pair, i) => {
            const chosen = chosenLabel(i);
            const isCorrect = checked && chosen !== undefined && rightsFor(pair.left).includes(chosen);
            const isWrong = checked && chosen !== undefined && !isCorrect;
            return (
              <Pressable
                key={i}
                disabled={checked}
                onPress={() => setActiveLeft(i)}
                style={[
                  s.matchPill,
                  activeLeft === i && s.optionSelected,
                  isCorrect && s.optionCorrect,
                  isWrong && s.optionWrong,
                ]}
              >
                <Text
                  style={[s.optionText, s.shrinkText]}
                  onPress={(e) => {
                    // `left` is always target-language vocabulary (see
                    // lib/lessons/*.ts), already fully visible before a
                    // match is made -- hearing it doesn't give away which
                    // right-hand item it pairs with. Kept tappable even
                    // after checking (stopPropagation so it doesn't also
                    // re-trigger the now-disabled parent Pressable).
                    e.stopPropagation();
                    speak(pair.left, lang);
                  }}
                >
                  {pair.left}
                  {chosen ? ` → ${chosen}` : ""}
                </Text>
                {/* A wrong match shows the right one under the learner's pick. */}
                {isWrong && <Text style={s.matchCorrect}>Correct answer: {pair.right}</Text>}
              </Pressable>
            );
          })}
        </View>
        <View style={s.matchingCol}>
          {rightShuffled.map((right, i) => (
            <Pressable
              key={i}
              disabled={checked || usedTiles.has(i)}
              onPress={() => {
                speak(right, voiceFor(right, lang));
                chooseRight(i);
              }}
              style={[s.matchPill, usedTiles.has(i) && s.chipUsed]}
            >
              <Text style={[s.optionText, s.shrinkText]}>{right}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      {!checked && (
        <SubmitButton
          disabled={!allMatched}
          onPress={() => onSubmit(matchingAllCorrect(exercise.pairs, exercise.pairs.map((_, i) => chosenLabel(i))))}
        />
      )}
    </View>
  );
}

/** Whether every row got a right-hand item that belongs to it. Rows that
 * share a left-hand item may take each other's answers; each answer still
 * counts once (compared as multisets per left-hand item). */
function matchingAllCorrect(pairs: { left: string; right: string }[], chosen: (string | undefined)[]): boolean {
  const groups = new Map<string, { want: string[]; got: string[] }>();
  pairs.forEach((p, i) => {
    const g = groups.get(p.left) ?? { want: [], got: [] };
    g.want.push(p.right);
    g.got.push(chosen[i] ?? "");
    groups.set(p.left, g);
  });
  return [...groups.values()].every(({ want, got }) => want.sort().join("\u0000") === got.sort().join("\u0000"));
}

function SubmitButton({ disabled, onPress }: { disabled: boolean; onPress: () => void }) {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={[s.submit, disabled && s.submitDisabled]}>
      <Text style={s.submitText}>Check</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#00000012",
    marginBottom: 12,
  },
  listenRow: { marginBottom: 10, gap: 4 },
  listenLabel: { fontSize: 12, color: "#00000080", fontWeight: "600" },
  hiddenRow: { display: "none" },
  index: { fontSize: 11, color: "#00000066", textTransform: "uppercase", marginBottom: 6 },
  question: { fontSize: 16, fontWeight: "600", color: "#000", marginBottom: 10 },
  sourceText: { fontSize: 15, color: "#000", fontStyle: "italic", flexShrink: 1 },
  sourceRow: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 10 },
  answerAudioRow: { flexDirection: "row", marginTop: 8 },
  options: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  option: {
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  optionSelected: { borderColor: "#7A1F1F", backgroundColor: "#7A1F1F14" },
  optionCorrect: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  optionWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  optionText: { fontSize: 15, color: "#000" },
  // Text inside a flexDirection: "row" parent doesn't shrink by default in
  // React Native, so long answers would run past the row's edge.
  shrinkText: { flexShrink: 1 },
  speakableSpan: { textDecorationLine: "underline", color: "#7A1F1F" },
  blankRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 4 },
  blankText: { fontSize: 16, color: "#000" },
  blankInput: {
    borderWidth: 1,
    borderColor: "#00000030",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 90,
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#00000030",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 4,
  },
  inputCorrect: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  inputWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  matchCorrect: { fontSize: 12, color: "#15803d", fontWeight: "600", marginTop: 4 },
  hint: { fontSize: 13, color: "#00000066", marginTop: 6, fontStyle: "italic" },
  blankEnglish: { fontSize: 16, color: "#000000cc", marginBottom: 10, lineHeight: 22 },
  builtRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, minHeight: 36, marginBottom: 10 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  chipBuilt: {
    borderWidth: 1,
    borderColor: "#7A1F1F",
    backgroundColor: "#7A1F1F14",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  chipUsed: { opacity: 0.3 },
  chipText: { fontSize: 15, color: "#000" },
  linkButton: { marginTop: 8 },
  linkButtonText: { color: "#00000066", fontSize: 13, textDecorationLine: "underline" },
  matchingCols: { flexDirection: "row", gap: 10 },
  matchingCol: { flex: 1, gap: 8 },
  matchPill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  submit: {
    backgroundColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 12,
  },
  submitDisabled: { opacity: 0.4 },
  submitText: { color: "#fff", fontWeight: "600" },
});
