// The pieces of a DELE practice paper on mobile -- ports of the website's
// src/components/exams: reading texts, recordings read aloud with two
// voices (two plays in timed mode, transcript once marked), the
// auto-marked questions, a speaking cue card with timers, the writing
// task (the course's "write" exercise, with feedback when available) and
// the 1-5 mark picker for writing and speaking.
import { useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import TapText from "@/components/TapText";
import { Write } from "@/components/SkillExercises";
import { readAloud, speak, speechChunks, stopReadAloud, SPANISH_LANG, ENGLISH_LANG } from "@/lib/speech";
import { useExamCourse } from "./examCourse";
import type { PronunciationVoice } from "@/lib/pronunciationVoice";
import { itemKey, type ExamAnswers } from "@/lib/exams/scoring";
import type { ExamAudio, ExamItem, ExamSpeakTask, ExamTask, ExamText, ExamWriteOption } from "@/lib/exams/types";
import type { WriteExercise } from "@/lib/lessons/types";

// The Spanish exams' language; components take theirs from the exam course
// (useExamCourse, examCourse.ts), which is Spanish unless a French exam
// screen says otherwise.
export const LANG = SPANISH_LANG;
export const BRAND = "#7A1F1F";
export const EXAM_PLAYS = 2;
const LETTERS = "abcdefghijklmnopqrstuvwxyz";

export function TextBlock({ text }: { text: ExamText }) {
  const exam = useExamCourse();
  const LANG = exam.lang;
  return (
    <View style={s.card}>
      {text.label || text.title ? (
        <TapText text={[text.label, text.title].filter(Boolean).join(" · ")} lang={LANG} mode="target" style={s.cardTitle} />
      ) : null}
      <TapText text={text.body} lang={LANG} mode="target" style={s.body} />
    </View>
  );
}

// ---- listening ---------------------------------------------------------

function audioScript(audio: ExamAudio): { chunks: string[]; voices: (PronunciationVoice | undefined)[] } {
  const chunks: string[] = [];
  const voices: (PronunciationVoice | undefined)[] = [];
  for (const line of audio.lines) {
    const voice: PronunciationVoice | undefined = line.voice === "f" ? "female" : line.voice === "m" ? "male" : undefined;
    for (const chunk of speechChunks(line.text)) {
      chunks.push(chunk);
      voices.push(voice);
    }
  }
  return { chunks, voices };
}

export function ExamAudioPlayer({
  audio,
  limitPlays,
  showTranscript,
}: {
  audio: ExamAudio;
  limitPlays: boolean;
  showTranscript: boolean;
}) {
  const exam = useExamCourse();
  const LANG = exam.lang;
  const script = useMemo(() => audioScript(audio), [audio]);
  const [playing, setPlaying] = useState(false);
  const [plays, setPlays] = useState(0);
  const used = limitPlays && plays >= EXAM_PLAYS;

  useEffect(() => () => stopReadAloud(), []);

  function play() {
    setPlays((n) => n + 1);
    setPlaying(true);
    readAloud(script.chunks, LANG, (i) => i === null && setPlaying(false), script.voices);
  }

  return (
    <View style={s.card}>
      <View style={s.rowCenter}>
        {audio.label ? <Text style={s.audioLabel}>{audio.label}</Text> : null}
        {playing ? (
          <Pressable
            style={s.secondaryBtn}
            onPress={() => {
              stopReadAloud();
              setPlaying(false);
            }}
          >
            <Text style={s.secondaryBtnText}>■ Stop</Text>
          </Pressable>
        ) : (
          <Pressable style={[s.primaryBtn, used && s.disabled]} disabled={used} onPress={play}>
            <Text style={s.primaryBtnText}>▶ {plays === 0 ? "Play" : "Play again"}</Text>
          </Pressable>
        )}
        {limitPlays ? (
          <Text style={s.muted}>
            {Math.min(plays, EXAM_PLAYS)} of {EXAM_PLAYS} plays
          </Text>
        ) : null}
      </View>
      {showTranscript ? (
        <View style={s.transcript}>
          <Text style={s.overline}>{exam.transcript}</Text>
          {audio.lines.map((line, i) => (
            <Text key={i} style={s.body}>
              {audio.lines.length > 1 && line.voice ? <Text style={s.muted}>{line.voice === "f" ? exam.she : exam.he}</Text> : null}
              <TapText text={line.text} lang={LANG} mode="target" style={s.body} />
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}

// ---- auto-marked questions -------------------------------------------

function Explanation({ item, chosen }: { item: ExamItem; chosen: number | undefined }) {
  const exam = useExamCourse();
  const LANG = exam.lang;
  const right = chosen === item.answer;
  return (
    <View style={[s.explain, right ? s.explainRight : s.explainWrong]}>
      <Text style={s.explainTitle}>
        {right ? "✓ Correct" : chosen === undefined ? "✗ Not answered" : "✗ Not quite"} — answer:{" "}
        <TapText text={item.options[item.answer]} lang={LANG} mode="target" style={s.explainTitle} />
      </Text>
      {item.explanation ? <TapText text={item.explanation} lang={LANG} style={s.explainBody} /> : null}
    </View>
  );
}

export function ExamItems({
  task,
  taskIndex,
  answers,
  marked,
  onAnswer,
}: {
  task: ExamTask;
  taskIndex: number;
  answers: ExamAnswers;
  marked: boolean;
  onAnswer: (key: string, option: number) => void;
}) {
  const exam = useExamCourse();
  const LANG = exam.lang;
  const items = task.items ?? [];
  if (!items.length) return null;

  if (task.layout === "select") {
    // Matching and gaps: every item offers the same lettered options, so
    // list them once and answer each item with a row of letters.
    const shared = items[0].options;
    const sameOptions = items.every((it) => it.options.join("\n") === shared.join("\n"));
    return (
      <View style={s.gap12}>
        {sameOptions ? (
          <View style={s.sharedBox}>
            {shared.map((opt, i) => (
              <TapText key={i} text={opt} lang={LANG} mode="target" style={s.body} />
            ))}
          </View>
        ) : null}
        {items.map((item) => {
          const key = itemKey(taskIndex, item);
          const chosen = answers[key];
          return (
            <View key={key} style={s.gap6}>
              <Text style={s.question}>
                {item.n}. {item.question ? <TapText text={item.question} lang={LANG} mode="target" style={s.question} /> : null}
              </Text>
              <View style={s.chips}>
                {item.options.map((opt, i) => {
                  const label = sameOptions ? opt.split(/[.)]/)[0].trim() || opt : opt;
                  const style = marked
                    ? i === item.answer
                      ? s.optionCorrect
                      : chosen === i
                        ? s.optionWrong
                        : null
                    : chosen === i
                      ? s.optionSelected
                      : null;
                  return (
                    <Pressable key={i} disabled={marked} onPress={() => onAnswer(key, i)} style={[sameOptions ? s.chip : s.option, style]}>
                      <Text style={s.optionText}>{label}</Text>
                    </Pressable>
                  );
                })}
              </View>
              {marked ? <Explanation item={item} chosen={chosen} /> : null}
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View style={s.gap16}>
      {items.map((item) => {
        const key = itemKey(taskIndex, item);
        const chosen = answers[key];
        return (
          <View key={key} style={s.gap6}>
            <Text style={s.question}>
              {item.n}. {item.question ? <TapText text={item.question} lang={LANG} mode="target" style={s.question} /> : null}
            </Text>
            {item.options.map((opt, i) => {
              const style = marked
                ? i === item.answer
                  ? s.optionCorrect
                  : chosen === i
                    ? s.optionWrong
                    : null
                : chosen === i
                  ? s.optionSelected
                  : null;
              return (
                <Pressable
                  key={i}
                  disabled={marked}
                  onPress={() => {
                    // As in the lessons: tapping an option both chooses it and says it.
                    speak(opt, LANG);
                    onAnswer(key, i);
                  }}
                  style={[s.option, style]}
                >
                  <Text style={s.optionText}>
                    <Text style={s.muted}>{LETTERS[i]}) </Text>
                    {opt}
                  </Text>
                </Pressable>
              );
            })}
            {marked ? <Explanation item={item} chosen={chosen} /> : null}
          </View>
        );
      })}
    </View>
  );
}

// ---- speaking ----------------------------------------------------------

type Phase = { kind: "idle" } | { kind: "prep" | "speak"; endsAt: number } | { kind: "done" };

function clock(ms: number): string {
  const sec = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const ss = String(sec % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
}

export { clock };

export function SpeakTask({ task }: { task: ExamSpeakTask }) {
  const exam = useExamCourse();
  const LANG = exam.lang;
  const [phase, setPhase] = useState<Phase>({ kind: "idle" });
  const [now, setNow] = useState(() => Date.now());
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (phase.kind !== "prep" && phase.kind !== "speak") return;
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (t >= phase.endsAt) {
        if (phase.kind === "prep") setPhase({ kind: "speak", endsAt: t + task.speakMinutes * 60_000 });
        else setPhase({ kind: "done" });
      }
    }, 250);
    return () => clearInterval(id);
  }, [phase, task.speakMinutes]);

  function start() {
    const t = Date.now();
    setNow(t);
    setPhase(
      task.prepMinutes > 0 ? { kind: "prep", endsAt: t + task.prepMinutes * 60_000 } : { kind: "speak", endsAt: t + task.speakMinutes * 60_000 }
    );
  }

  return (
    <View style={s.gap12}>
      <View style={s.card}>
        <TapText text={task.prompt} lang={LANG} mode="target" style={s.cardTitle} />
        {task.material?.map((m, i) => (
          <View key={i} style={s.sharedBox}>
            {m.label || m.title ? (
              <TapText text={[m.label, m.title].filter(Boolean).join(" · ")} lang={LANG} mode="target" style={s.question} />
            ) : null}
            <TapText text={m.body} lang={LANG} mode="target" style={s.body} />
          </View>
        ))}
        {task.points.map((p, i) => (
          <TapText key={i} text={`• ${p}`} lang={LANG} mode="target" style={s.body} />
        ))}
      </View>

      <View style={s.rowCenter}>
        {phase.kind === "idle" || phase.kind === "done" ? (
          <Pressable style={s.primaryBtn} onPress={start}>
            <Text style={s.primaryBtnText}>
              {phase.kind === "done"
                ? "Start again"
                : task.prepMinutes > 0
                  ? `Prepare (${task.prepMinutes} min)`
                  : `Start speaking (${task.speakMinutes} min)`}
            </Text>
          </Pressable>
        ) : (
          <>
            <Text style={[s.timer, phase.kind === "speak" && s.timerHot]}>{clock(phase.endsAt - now)}</Text>
            <Pressable
              style={s.secondaryBtn}
              onPress={() =>
                phase.kind === "prep" ? setPhase({ kind: "speak", endsAt: Date.now() + task.speakMinutes * 60_000 }) : setPhase({ kind: "done" })
              }
            >
              <Text style={s.secondaryBtnText}>{phase.kind === "prep" ? "Start speaking now" : "Finish"}</Text>
            </Pressable>
          </>
        )}
      </View>
      {phase.kind === "prep" ? <Text style={s.muted}>{"Preparation: make notes, don't write full sentences."}</Text> : null}
      {phase.kind === "speak" ? <Text style={s.muted}>Speak now, out loud.</Text> : null}
      {phase.kind === "done" ? <Text style={s.good}>{"Time's up."}</Text> : null}

      {task.examinerQuestions?.length ? (
        <View style={s.gap6}>
          <Text style={s.muted}>The examiner may ask:</Text>
          {task.examinerQuestions.map((q, i) => (
            <View key={i} style={s.rowTop}>
              <Pressable onPress={() => speak(q, LANG)} accessibilityLabel="Hear the question" hitSlop={8}>
                <Text style={s.speaker}>🔊</Text>
              </Pressable>
              <TapText text={q} lang={LANG} mode="target" style={[s.body, s.flex1]} />
            </View>
          ))}
        </View>
      ) : null}

      <Pressable onPress={() => setShowModel((v) => !v)}>
        <Text style={s.link}>{showModel ? "Hide the model answer" : "Show a model answer"}</Text>
      </Pressable>
      {showModel ? (
        <View style={s.sharedBox}>
          <TapText text={task.modelAnswer} lang={LANG} mode="target" style={s.body} />
        </View>
      ) : null}
    </View>
  );
}

// ---- marks and writing -------------------------------------------------

export function MarkPicker({ value, onChange, suggested }: { value?: number; onChange: (m: number) => void; suggested?: number }) {
  const exam = useExamCourse();
  return (
    <View style={s.card}>
      <Text style={s.muted}>
        {suggested ? `The feedback gave this ${suggested}/5. Keep it or change it:` : "Compare with the model answer and mark this task honestly:"}
      </Text>
      <View style={s.chips}>
        {exam.taskMarks.map((m) => (
          <Pressable key={m.mark} onPress={() => onChange(m.mark)} style={[s.markBtn, value === m.mark && s.markBtnOn]}>
            <Text style={[s.optionText, value === m.mark && s.markTextOn]}>{m.label}</Text>
          </Pressable>
        ))}
      </View>
      {value ? <TapText text={exam.taskMarks[value - 1].hint} lang={ENGLISH_LANG} mode="english" style={s.muted} /> : null}
    </View>
  );
}

function toWriteExercise(opt: ExamWriteOption): WriteExercise {
  return {
    type: "write",
    prompt: opt.prompt,
    minWords: opt.minWords,
    maxWords: opt.maxWords,
    rubric: opt.rubric,
    modelAnswer: opt.modelAnswer,
    explanation: "",
  };
}

export function WriteTask({
  options,
  level,
  mark,
  onMark,
}: {
  options: ExamWriteOption[];
  level: string;
  mark?: number;
  onMark: (m: number) => void;
}) {
  const exam = useExamCourse();
  const LANG = exam.lang;
  const [choice, setChoice] = useState(options.length === 1 ? 0 : -1);
  const [done, setDone] = useState(false);
  const [suggested, setSuggested] = useState<number | undefined>();
  const opt = choice >= 0 ? options[choice] : null;
  return (
    <View style={s.gap12}>
      {options.length > 1
        ? options.map((o, i) => (
            <View key={i} style={[s.card, choice === i && s.cardChosen]}>
              {o.label ? <Text style={s.cardTitle}>{o.label}</Text> : null}
              <TapText text={o.prompt} lang={LANG} mode="target" style={s.body} />
              {!done ? (
                <Pressable style={s.secondaryBtn} onPress={() => setChoice(i)}>
                  <Text style={s.secondaryBtnText}>{choice === i ? "✓ Chosen" : "Choose this option"}</Text>
                </Pressable>
              ) : null}
            </View>
          ))
        : null}
      {opt ? (
        <>
          {opt.input?.text ? <TextBlock text={opt.input.text} /> : null}
          {opt.input?.audio ? <ExamAudioPlayer audio={opt.input.audio} limitPlays={false} showTranscript={done} /> : null}
          <Write
            key={choice}
            exercise={toWriteExercise(opt)}
            lang={LANG}
            level={exam.writeLevel(level)}
            checked={done}
            submit={() => setDone(true)}
            onFeedback={(f) => {
              if (f) {
                setSuggested(f.score);
                onMark(f.score);
              }
            }}
          />
          {done ? <MarkPicker value={mark} onChange={onMark} suggested={suggested} /> : null}
        </>
      ) : null}
    </View>
  );
}

export const s = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 12, borderWidth: 1, borderColor: "#00000014", padding: 14, gap: 8 },
  cardChosen: { borderColor: BRAND },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#000" },
  body: { fontSize: 15, lineHeight: 22, color: "#000" },
  muted: { fontSize: 13, color: "#00000099", lineHeight: 18 },
  good: { fontSize: 13, color: "#15803d" },
  overline: { fontSize: 11, letterSpacing: 1, color: "#00000066" },
  question: { fontSize: 15, fontWeight: "600", color: "#000", lineHeight: 21 },
  rowCenter: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 10 },
  rowTop: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  flex1: { flex: 1 },
  gap6: { gap: 6 },
  gap12: { gap: 12 },
  gap16: { gap: 16 },
  audioLabel: { fontSize: 14, fontWeight: "600", color: "#000" },
  transcript: { borderTopWidth: 1, borderTopColor: "#00000014", paddingTop: 8, gap: 4 },
  sharedBox: { backgroundColor: "#0000000a", borderRadius: 10, padding: 12, gap: 4 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { minWidth: 40, alignItems: "center", borderWidth: 1, borderColor: "#00000022", borderRadius: 8, paddingVertical: 8, paddingHorizontal: 10 },
  option: { borderWidth: 1, borderColor: "#00000022", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 12 },
  optionSelected: { borderColor: BRAND, backgroundColor: "#7A1F1F14" },
  optionCorrect: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  optionWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  optionText: { fontSize: 15, color: "#000" },
  explain: { borderRadius: 8, padding: 10, gap: 4 },
  explainRight: { backgroundColor: "#16a34a1a" },
  explainWrong: { backgroundColor: "#dc26261a" },
  explainTitle: { fontSize: 14, fontWeight: "600", color: "#000" },
  explainBody: { fontSize: 13, color: "#000000aa", lineHeight: 18 },
  primaryBtn: { backgroundColor: BRAND, borderRadius: 999, paddingVertical: 9, paddingHorizontal: 16, alignSelf: "flex-start" },
  primaryBtnText: { color: "#fff", fontWeight: "700" },
  secondaryBtn: { borderWidth: 1, borderColor: "#00000030", borderRadius: 999, paddingVertical: 8, paddingHorizontal: 14, alignSelf: "flex-start" },
  secondaryBtnText: { fontSize: 14, color: "#000" },
  disabled: { opacity: 0.4 },
  timer: { fontSize: 24, fontWeight: "700", color: "#000", fontVariant: ["tabular-nums"] },
  timerHot: { color: "#b91c1c" },
  speaker: { fontSize: 16 },
  link: { color: BRAND, fontWeight: "700", fontSize: 14 },
  markBtn: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: "#00000030", alignItems: "center", justifyContent: "center" },
  markBtnOn: { backgroundColor: BRAND, borderColor: BRAND },
  markTextOn: { color: "#fff", fontWeight: "700" },
});
