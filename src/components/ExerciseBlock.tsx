import { useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet, type StyleProp, type TextStyle } from "react-native";
import type { Exercise } from "@/lib/lessons/types";
import { speak, SPANISH_LANG, type SpeechLang } from "@/lib/speech";
import { targetSpans } from "@/lib/targetSpans";

// Mobile port of the web app's ExerciseBlock -- same matching/shuffle
// logic (normalize(), seededShuffle()), same "check answer -> show
// correct/incorrect + explanation" interaction model, rebuilt with RN
// primitives instead of DOM/Tailwind.

function splitOnBlank(sentence: string): [string, string] {
  const match = sentence.match(/_{3,}/);
  if (!match || match.index === undefined) return [sentence, ""];
  return [sentence.slice(0, match.index), sentence.slice(match.index + match[0].length)];
}

// Case/punctuation-normalized, accents and n/ñ collapsed to their plain
// letter -- the loose form used for the primary correct/incorrect check.
function normalize(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[¿?¡!.,]/g, "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Same cleanup, but keeps accents/ñ -- used only to tell "this typed
// answer is identical once you ignore an accent mark" apart from "this is
// a different word/a real typo", so that distinction can be pointed out
// instead of silently accepted or wrongly rejected.
function normalizeKeepAccents(s: string) {
  return s.trim().toLowerCase().replace(/[¿?¡!.,]/g, "");
}

// Damerau-Levenshtein edit distance (optimal-string-alignment variant) --
// small pure-JS implementation, fine at the length of a single word or
// short phrase. Counting an adjacent-letter swap ("camoin" for "camión")
// as ONE edit rather than two, same as a plain insert/delete/substitute,
// matters here: that's one of the single most common typing slips, and
// plain Levenshtein would otherwise price it out of typoTolerance().
function editDistance(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
      }
    }
  }
  return dp[a.length][b.length];
}

// How many edits still read as "just a typo" for a word/phrase this
// long -- conservative on purpose. Very short answers get zero tolerance
// (a 2-3 letter word off by one is often a genuinely different word --
// "no"/"lo", "sí"/"si"), longer ones get a little more room.
function typoTolerance(len: number): number {
  if (len <= 3) return 0;
  if (len <= 7) return 1;
  return 2;
}

type GradeResult = { correct: boolean; note?: string };

// Shared free-text grading for FillBlank/Translate. Grading was too
// strict before this: any difference at all -- including a single typo,
// a missing accent, or a plain "n" typed for "ñ" -- counted as wrong.
// Now: an exact match (accents included) is correct with no note; a
// difference that's ONLY accents/ñ is accepted but flagged, so the
// gap is still pointed out rather than silently ignored; a small typo
// within typoTolerance() is accepted the same way; anything further off
// is still marked wrong.
function gradeFreeText(value: string, candidatesRaw: string[]): GradeResult {
  const typedLoose = normalize(value);
  const typedAccented = normalizeKeepAccents(value);

  let bestDistance = Infinity;
  let bestAccented = "";

  for (const raw of candidatesRaw) {
    const candidateAccented = normalizeKeepAccents(raw);
    if (typedAccented === candidateAccented) {
      return { correct: true };
    }
    const candidateLoose = normalize(raw);
    if (typedLoose === candidateLoose) {
      // Identical once accents/ñ are ignored -- as close a match as this
      // can get without being exact, so no need to keep checking others.
      return { correct: true, note: `Correct -- just watch the accent mark: "${raw}".` };
    }
    const dist = editDistance(typedLoose, candidateLoose);
    if (dist < bestDistance) {
      bestDistance = dist;
      bestAccented = raw;
    }
  }

  const tolerance = typoTolerance(typedLoose.length);
  if (bestDistance <= tolerance) {
    return { correct: true, note: `Correct -- small typo, the answer is "${bestAccented}".` };
  }
  return { correct: false };
}

function seededShuffle<T>(arr: T[], seed: string): T[] {
  const a = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Feedback({ correct, explanation }: { correct: boolean; explanation: string }) {
  return (
    <View style={[fb.box, correct ? fb.boxCorrect : fb.boxWrong]}>
      <Text style={[fb.title, correct ? fb.titleCorrect : fb.titleWrong]}>
        {correct ? "Correct!" : "Not quite."}
      </Text>
      <Text style={fb.body}>{explanation}</Text>
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

// Small tap-to-hear button dropped next to already-visible target-language
// text (an option, a word-order chip, a matching pair's left side...).
// Never placed on anything that would still reveal a hidden answer -- see
// each exercise type below for what's actually safe to attach this to.
function SpeakerButton({ text, lang }: { text: string; lang: SpeechLang }) {
  return (
    <Pressable
      hitSlop={8}
      onPress={(e) => {
        e.stopPropagation();
        speak(text, lang);
      }}
      style={s.speakerBtn}
    >
      <Text style={s.speakerIcon}>🔊</Text>
    </Pressable>
  );
}

// Wraps a block of text, making tappable-to-hear just its target-language
// portions (see lib/targetSpans) rather than the whole English sentence
// around them -- e.g. only the quoted Spanish word, or only the embedded
// Japanese phrase, in an otherwise-English multiple-choice question.
// Falls back to plain, non-interactive text when nothing in it reads as
// target-language (most often a plain-English comprehension question).
function SpeakableText({
  text,
  lang,
  style,
}: {
  text: string;
  lang: SpeechLang;
  style?: StyleProp<TextStyle>;
}) {
  const spans = useMemo(() => targetSpans(text, lang), [text, lang]);
  if (spans.length === 0) return <Text style={style}>{text}</Text>;
  const nodes: React.ReactNode[] = [];
  let pos = 0;
  spans.forEach((sp, i) => {
    if (sp.start > pos) nodes.push(<Text key={`t${i}`}>{text.slice(pos, sp.start)}</Text>);
    nodes.push(
      <Text key={`s${i}`} style={s.speakableSpan} onPress={() => speak(sp.text, lang)}>
        {sp.text}
      </Text>
    );
    pos = sp.end;
  });
  if (pos < text.length) nodes.push(<Text key="tail">{text.slice(pos)}</Text>);
  return <Text style={style}>{nodes}</Text>;
}

export default function ExerciseBlock({
  exercise,
  index,
  onAnswered,
  showInlineFeedback = true,
  onChecked,
  hideIndexLabel = false,
  lang = SPANISH_LANG,
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
  onChecked?: (correct: boolean, explanation: string) => void;
  hideIndexLabel?: boolean;
  // Target language for pronunciation (flashcards/highlighting already
  // pronounce in this same language elsewhere -- see src/lib/speech.ts).
  // Defaults to Spanish so any caller that hasn't been updated yet still
  // gets correct (if not level-accurate) pronunciation rather than none.
  lang?: SpeechLang;
}) {
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [shownExplanation, setShownExplanation] = useState("");

  // `note` is only ever set by FillBlank/Translate's gradeFreeText() --
  // e.g. "correct, but that's a typo" or "correct, but watch the accent"
  // -- and gets folded into the explanation text shown below (both the
  // inline Feedback box and whatever onChecked's caller does with it)
  // rather than needing its own prop threaded through every caller.
  function report(isCorrect: boolean, note?: string) {
    setCorrect(isCorrect);
    setChecked(true);
    onAnswered?.(isCorrect);
    const baseExplanation = (exercise as { explanation: string }).explanation;
    const explanation = note ? `${note} ${baseExplanation}` : baseExplanation;
    setShownExplanation(explanation);
    onChecked?.(isCorrect, explanation);
  }

  return (
    <View style={s.container}>
      {!hideIndexLabel && <Text style={s.index}>Question {index + 1}</Text>}
      {exercise.type === "multiple-choice" && (
        <MultipleChoice exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "multi-select" && (
        <MultiSelect exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "fill-blank" && (
        <FillBlank exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "translate" && (
        <Translate exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "word-order" && (
        <WordOrder exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {exercise.type === "matching" && (
        <Matching exercise={exercise} checked={checked} correct={correct} onSubmit={report} lang={lang} />
      )}
      {checked && showInlineFeedback && <Feedback correct={correct} explanation={shownExplanation} />}
    </View>
  );
}

type SubProps<E> = {
  exercise: E;
  checked: boolean;
  correct: boolean;
  onSubmit: (c: boolean, note?: string) => void;
  lang: SpeechLang;
};

function MultipleChoice({
  exercise,
  checked,
  onSubmit,
  lang,
}: SubProps<Extract<Exercise, { type: "multiple-choice" }>>) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <View>
      <SpeakableText text={exercise.question} lang={lang} style={s.question} />
      <View style={s.options}>
        {exercise.options.map((opt, i) => {
          const isSelected = selected === i;
          const showState = checked && isSelected;
          return (
            <Pressable
              key={i}
              disabled={checked}
              onPress={() => setSelected(i)}
              style={[
                s.option,
                isSelected && s.optionSelected,
                showState && (i === exercise.correctIndex ? s.optionCorrect : s.optionWrong),
                checked && i === exercise.correctIndex && s.optionCorrect,
              ]}
            >
              <View style={s.optionRow}>
                <Text style={s.optionText}>{opt}</Text>
                {/* Every option is the target-language vocabulary itself
                    (same reasoning as Matching's pair.left below) --
                    already fully visible before a choice is made, so
                    hearing it doesn't give away the answer. */}
                <SpeakerButton text={opt} lang={lang} />
              </View>
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
        {exercise.options.map((opt, i) => {
          const isSelected = selected.has(i);
          const shouldBeSelected = exercise.correctIndexes.includes(i);
          return (
            <Pressable
              key={i}
              disabled={checked}
              onPress={() => toggle(i)}
              style={[
                s.option,
                isSelected && s.optionSelected,
                checked && shouldBeSelected && s.optionCorrect,
                checked && isSelected && !shouldBeSelected && s.optionWrong,
              ]}
            >
              <View style={s.optionRow}>
                <Text style={s.optionText}>{opt}</Text>
                <SpeakerButton text={opt} lang={lang} />
              </View>
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
// answer that should pass -- exactly or via the typo/accent tolerance above
// -- look wrong for reasons that have nothing to do with the student's
// Spanish. autoCapitalize="none" is belt-and-suspenders (normalize() already
// lowercases), kept mainly so the student sees exactly what they typed.
function FillBlank({
  exercise,
  checked,
  correct,
  onSubmit,
  lang,
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
      <Text style={s.question}>{exercise.prompt}</Text>
      <View style={s.blankRow}>
        <Text style={s.blankText}>{before}</Text>
        <TextInput
          value={checked ? exercise.answer : value}
          onChangeText={setValue}
          editable={!checked}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          textContentType="none"
          style={[s.blankInput, checked && (correct ? s.inputCorrect : s.inputWrong)]}
          placeholder="..."
        />
        <Text style={s.blankText}>{after}</Text>
        {checked && <SpeakerButton text={`${before}${exercise.answer}${after}`} lang={lang} />}
      </View>
      {exercise.hint && !checked && <Text style={s.hint}>Hint: {exercise.hint}</Text>}
      {!checked && (
        <SubmitButton
          disabled={!value.trim()}
          onPress={() => {
            const result = gradeFreeText(value, [exercise.answer]);
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
      <Text style={s.question}>{exercise.prompt}</Text>
      <View style={s.sourceRow}>
        <Text style={s.sourceText}>{exercise.source}</Text>
        {sourceIsTarget && <SpeakerButton text={exercise.source} lang={lang} />}
      </View>
      <TextInput
        value={checked ? exercise.answer : value}
        onChangeText={setValue}
        editable={!checked}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        textContentType="none"
        style={[s.textInput, checked && (correct ? s.inputCorrect : s.inputWrong)]}
        placeholder={exercise.direction === "es-en" ? "Translate to English…" : "Traduce al español…"}
      />
      {checked && !sourceIsTarget && (
        <View style={s.answerAudioRow}>
          <SpeakerButton text={exercise.answer} lang={lang} />
        </View>
      )}
      {!checked && (
        <SubmitButton
          disabled={!value.trim()}
          onPress={() => {
            const result = gradeFreeText(value, [exercise.answer, ...(exercise.altAnswers ?? [])]);
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
      <Text style={s.question}>{exercise.prompt}</Text>
      <View style={s.builtRow}>
        {built.length === 0 && <Text style={s.hint}>Tap the words below in order.</Text>}
        {built.map((w, i) => (
          <View key={i} style={s.chipBuilt}>
            <Text style={s.chipText}>{w}</Text>
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
              onPress={() => setUsed((prev) => [...prev, i])}
              style={[s.chip, isUsed && s.chipUsed]}
            >
              <Text style={s.chipText}>{w}</Text>
              <SpeakerButton text={w} lang={lang} />
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
        <View style={s.answerAudioRow}>
          <SpeakerButton text={correctSentence} lang={lang} />
        </View>
      )}
      {!checked && (
        <SubmitButton
          disabled={built.length !== exercise.words.length}
          onPress={() => onSubmit(built.join(" ") === exercise.words.join(" "))}
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
  const [matches, setMatches] = useState<Record<number, string>>({}); // left index -> chosen right value
  const [activeLeft, setActiveLeft] = useState<number | null>(null);

  function chooseRight(right: string) {
    if (activeLeft === null || checked) return;
    setMatches((prev) => ({ ...prev, [activeLeft]: right }));
    setActiveLeft(null);
  }

  const usedRights = new Set(Object.values(matches));
  const allMatched = Object.keys(matches).length === exercise.pairs.length;

  return (
    <View>
      <Text style={s.question}>{exercise.instructions}</Text>
      <View style={s.matchingCols}>
        <View style={s.matchingCol}>
          {exercise.pairs.map((pair, i) => {
            const chosen = matches[i];
            const isCorrect = checked && chosen === pair.right;
            const isWrong = checked && chosen !== undefined && chosen !== pair.right;
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
                <Text style={s.optionText}>
                  {pair.left}
                  {chosen ? ` → ${chosen}` : ""}
                </Text>
                {/* `left` is always target-language vocabulary (see
                    lib/lessons/*.ts), already fully visible before a
                    match is made -- hearing it doesn't give away which
                    right-hand item it pairs with. */}
                <SpeakerButton text={pair.left} lang={lang} />
              </Pressable>
            );
          })}
        </View>
        <View style={s.matchingCol}>
          {rightShuffled.map((right, i) => (
            <Pressable
              key={i}
              disabled={checked || usedRights.has(right)}
              onPress={() => chooseRight(right)}
              style={[s.matchPill, usedRights.has(right) && s.chipUsed]}
            >
              <Text style={s.optionText}>{right}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      {!checked && (
        <SubmitButton
          disabled={!allMatched}
          onPress={() => {
            const allCorrect = exercise.pairs.every((p, i) => matches[i] === p.right);
            onSubmit(allCorrect);
          }}
        />
      )}
    </View>
  );
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
  index: { fontSize: 11, color: "#00000066", textTransform: "uppercase", marginBottom: 6 },
  question: { fontSize: 16, fontWeight: "600", color: "#000", marginBottom: 10 },
  sourceText: { fontSize: 15, color: "#000", fontStyle: "italic", flexShrink: 1 },
  sourceRow: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 10 },
  answerAudioRow: { flexDirection: "row", marginTop: 8 },
  speakerBtn: { padding: 4 },
  speakerIcon: { fontSize: 15 },
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
  optionRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 6, flex: 1 },
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
  hint: { fontSize: 13, color: "#00000066", marginTop: 6, fontStyle: "italic" },
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
