// The listening, speaking and writing exercise types (listen-choose,
// dictation, speak, write), rendered inside ExerciseBlock, which owns the
// checked/feedback state. Mobile port of the website's
// src/components/lessons/SkillExercises.tsx.

import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import {
  createAudioPlayer,
  requestRecordingPermissionsAsync,
  RecordingPresets,
  useAudioRecorder,
  type AudioPlayer,
} from "expo-audio";
import type { DictationExercise, ListenChooseExercise, SpeakExercise, WriteExercise } from "@/lib/lessons/types";
import { setRecordingMode, speak, stopSpeaking, type SpeechLang } from "@/lib/speech";
import { AnswerCompare } from "@/components/AnswerCompare";
import TapText, { voiceFor } from "@/components/TapText";
import { dictationAnswer, gradeDictation, optionOrder } from "@/lib/grading";
import { countWords, parseWritingFeedback, type WritingFeedback } from "@/lib/writingFeedback";
import { supabase } from "@/lib/supabase/client";

// `title` replaces the feedback's "Correct!" / "Not quite." heading.
type Submit = (correct: boolean, note?: string, title?: string) => void;

const SLOW_RATE = 0.7;
const WRITING_FEEDBACK_API_URL = "https://deependspanish.com/api/writing-feedback";

/** Play / slow-play buttons for a piece of Spanish the learner can't see yet. */
export function ListenButtons({ text, lang, slow = false }: { text: string; lang: SpeechLang; slow?: boolean }) {
  return (
    <View style={s.row}>
      <Pressable style={s.secondaryBtn} onPress={() => speak(text, lang)}>
        <Text style={s.secondaryBtnText}>🔊 Play</Text>
      </Pressable>
      {slow && (
        <Pressable style={s.secondaryBtn} onPress={() => speak(text, lang, SLOW_RATE)}>
          <Text style={s.secondaryBtnText}>🐢 Slow</Text>
        </Pressable>
      )}
    </View>
  );
}

// ---- listen-choose ---------------------------------------------------

export function ListenChoose({
  exercise,
  lang,
  checked,
  submit,
}: {
  exercise: ListenChooseExercise;
  lang: SpeechLang;
  checked: boolean;
  submit: Submit;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const order = useMemo(() => optionOrder(exercise.audio, exercise.options), [exercise.audio, exercise.options]);
  useEffect(() => {
    speak(exercise.audio, lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <TapText text={exercise.question} lang={lang} style={s.question} />
      <ListenButtons text={exercise.audio} lang={lang} />
      <View style={s.options}>
        {order.map((i) => {
          const opt = exercise.options[i];
          const isSelected = selected === i;
          return (
            <Pressable
              key={i}
              disabled={checked}
              onPress={() => {
                speak(opt, voiceFor(opt, lang));
                setSelected(i);
              }}
              style={[
                s.option,
                isSelected && s.optionSelected,
                checked && isSelected && i !== exercise.correctIndex && s.optionWrong,
                checked && i === exercise.correctIndex && s.optionCorrect,
              ]}
            >
              <Text style={s.optionText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>
      {checked && (
        <View style={s.revealed}>
          <Text style={s.muted}>You heard: </Text>
          <TapText text={exercise.audio} lang={lang} mode="target" style={s.revealedText} />
        </View>
      )}
      {!checked && (
        <PrimaryButton
          label="Check"
          disabled={selected === null}
          onPress={() => selected !== null && submit(selected === exercise.correctIndex)}
        />
      )}
    </View>
  );
}

// ---- dictation -------------------------------------------------------

export function Dictation({
  exercise,
  lang,
  checked,
  correct,
  submit,
}: {
  exercise: DictationExercise;
  lang: SpeechLang;
  checked: boolean;
  correct: boolean;
  submit: Submit;
}) {
  const [value, setValue] = useState("");
  useEffect(() => {
    speak(exercise.audio, lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Text style={s.question}>Listen and type what you hear.</Text>
      <ListenButtons text={exercise.audio} lang={lang} slow />
      {/* No autocorrect: it would "fix" Spanish into English words. */}
      <TextInput
        value={value}
        onChangeText={setValue}
        editable={!checked}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        textContentType="none"
        placeholder="Escribe lo que oyes…"
        style={[s.textInput, checked && (correct ? s.inputCorrect : s.inputWrong)]}
      />
      {checked && !correct && (
        <AnswerCompare given={value} expected={dictationAnswer(exercise)} correct={correct} lang={lang} />
      )}
      {checked && correct && (
        <View style={s.revealed}>
          <Text style={s.muted}>Answer: </Text>
          <TapText text={dictationAnswer(exercise)} lang={lang} mode="target" style={s.revealedText} />
        </View>
      )}
      {!checked && (
        <PrimaryButton
          label="Check"
          disabled={!value.trim()}
          onPress={() => {
            const result = gradeDictation(value, exercise, lang);
            submit(result.correct, result.note);
          }}
        />
      )}
    </View>
  );
}

// ---- speak -----------------------------------------------------------

const MAX_RECORDING_MS = 15000;

type MicState = "idle" | "starting" | "recording" | "recorded" | "unavailable";

export function Speak({
  exercise,
  lang,
  checked,
  submit,
}: {
  exercise: SpeakExercise;
  lang: SpeechLang;
  checked: boolean;
  submit: Submit;
}) {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const [mic, setMic] = useState<MicState>("idle");
  const [recordingUri, setRecordingUri] = useState<string | null>(null);
  // Respond aloud (`prompt` set): the model answer stays hidden until the
  // learner has recorded their own, or asks to see it.
  const respond = !!exercise.prompt;
  const [shown, setShown] = useState(false);
  const reveal = !respond || shown || mic === "recorded" || checked;
  const playerRef = useRef<AudioPlayer | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const micRef = useRef<MicState>("idle");
  micRef.current = mic;

  // The recording is only ever played back here: never uploaded or kept.
  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      playerRef.current?.remove();
      if (micRef.current === "recording") {
        try {
          void recorder.stop().catch(() => {});
        } catch {
          // Already released with the component.
        }
      }
      void setRecordingMode(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  async function startRecording() {
    setMic("starting");
    try {
      const permission = await requestRecordingPermissionsAsync();
      if (!permission.granted) {
        setMic("unavailable");
        return;
      }
      stopSpeaking();
      playerRef.current?.remove();
      playerRef.current = null;
      await setRecordingMode(true);
      await recorder.prepareToRecordAsync();
      recorder.record();
      setMic("recording");
      timerRef.current = setTimeout(() => void stopRecording(), MAX_RECORDING_MS);
    } catch {
      await setRecordingMode(false);
      setMic("unavailable");
    }
  }

  async function stopRecording() {
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      await recorder.stop();
    } catch {
      // Falls through to whatever uri the recorder has.
    }
    await setRecordingMode(false);
    const uri = recorder.uri;
    setRecordingUri(uri);
    setMic(uri ? "recorded" : "idle");
  }

  function playMine() {
    if (!recordingUri) return;
    stopSpeaking();
    playerRef.current?.remove();
    try {
      const player = createAudioPlayer(recordingUri);
      playerRef.current = player;
      player.play();
    } catch {
      // Nothing to play.
    }
  }

  return (
    <View>
      {respond ? (
        <TapText text={exercise.prompt!} lang={lang} style={s.question} />
      ) : (
        <Text style={s.question}>Listen, then record yourself saying it.</Text>
      )}
      {reveal ? (
        <TapText text={exercise.text} lang={lang} mode="target" style={s.speakText} />
      ) : (
        <View>
          <Text style={s.muted}>Say your answer out loud and record it, then compare it with the model.</Text>
          <Pressable style={s.linkButton} onPress={() => setShown(true)}>
            <Text style={s.linkButtonText}>Show the answer</Text>
          </Pressable>
        </View>
      )}
      {exercise.tip && <TapText text={`Tip: ${exercise.tip}`} lang={lang} style={s.tip} />}
      <View style={s.row}>
        {reveal && (
          <Pressable style={s.secondaryBtn} onPress={() => speak(exercise.text, lang)}>
            <Text style={s.secondaryBtnText}>🔊 Listen</Text>
          </Pressable>
        )}
        {!checked && mic !== "unavailable" && (
          <Pressable
            disabled={mic === "starting"}
            style={[s.recordBtn, mic === "recording" && s.recordBtnActive]}
            onPress={() => (mic === "recording" ? void stopRecording() : void startRecording())}
          >
            <Text style={s.recordBtnText}>
              {mic === "recording" ? "■ Stop" : mic === "recorded" ? "🎙 Record again" : "🎙 Record"}
            </Text>
          </Pressable>
        )}
      </View>
      {recordingUri && mic !== "recording" && (
        <View style={s.row}>
          <Pressable style={s.secondaryBtn} onPress={playMine}>
            <Text style={s.secondaryBtnText}>▶ Play mine</Text>
          </Pressable>
          <Pressable style={s.secondaryBtn} onPress={() => speak(exercise.text, lang)}>
            <Text style={s.secondaryBtnText}>▶ Play model</Text>
          </Pressable>
        </View>
      )}
      {mic === "recording" && (
        <Text style={s.recording}>
          {respond ? "Recording… say it in Spanish, then tap Stop." : "Recording… say the sentence, then tap Stop."}
        </Text>
      )}
      {mic === "unavailable" && !checked && (
        <Text style={s.muted}>
          The microphone isn&apos;t available. You can still listen and say it out loud, or skip this one -- skipping
          doesn&apos;t count against you.
        </Text>
      )}
      {!checked && mic === "recorded" && (
        <View>
          <Text style={[s.muted, { marginTop: 10 }]}>
            {respond ? "Did you say the same thing (or something just as right)?" : "How did it sound next to the model?"}
          </Text>
          <View style={s.row}>
            <Pressable style={[s.primaryBtn, s.flex]} onPress={() => submit(true, undefined, "Nice work!")}>
              <Text style={s.primaryBtnText}>{respond ? "I got it" : "I sounded close"}</Text>
            </Pressable>
            <Pressable style={[s.secondaryBtn, s.flex]} onPress={() => submit(false, undefined, "Keep practising.")}>
              <Text style={[s.secondaryBtnText, { textAlign: "center" }]}>Needs work</Text>
            </Pressable>
          </View>
        </View>
      )}
      {!checked && (
        // Not graded: counts as done so skipping never costs a pass.
        <Pressable style={s.linkButton} onPress={() => submit(true, undefined, "Skipped -- not graded.")}>
          <Text style={s.linkButtonText}>Skip</Text>
        </Pressable>
      )}
    </View>
  );
}

// ---- write -----------------------------------------------------------

type WriteState =
  | { kind: "editing" }
  | { kind: "sending" }
  | { kind: "feedback"; feedback: WritingFeedback }
  | { kind: "selfcheck" };

async function fetchWritingFeedback(exercise: WriteExercise, level: string, text: string): Promise<WritingFeedback | null> {
  try {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return null;
    const res = await fetch(WRITING_FEEDBACK_API_URL, {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        level,
        prompt: exercise.prompt,
        rubric: exercise.rubric,
        minWords: exercise.minWords,
        maxWords: exercise.maxWords,
        text,
      }),
    });
    const json = await res.json().catch(() => null);
    if (!res.ok || !json?.ok) return null;
    return parseWritingFeedback(json.feedback);
  } catch {
    return null;
  }
}

export function Write({
  exercise,
  lang,
  level,
  checked,
  submit,
  onFeedback,
}: {
  exercise: WriteExercise;
  lang: SpeechLang;
  level: string;
  checked: boolean;
  submit: Submit;
  /** Called with the feedback (null when it couldn't be fetched) once the text is sent. */
  onFeedback?: (feedback: WritingFeedback | null) => void;
}) {
  const [text, setText] = useState("");
  const [state, setState] = useState<WriteState>({ kind: "editing" });
  const [ticked, setTicked] = useState<Set<number>>(new Set());
  const words = countWords(text);
  const inRange = words >= exercise.minWords && words <= exercise.maxWords;

  async function send() {
    setState({ kind: "sending" });
    const feedback = await fetchWritingFeedback(exercise, level, text);
    setState(feedback ? { kind: "feedback", feedback } : { kind: "selfcheck" });
    onFeedback?.(feedback);
    // Submitting counts as done; the score is shown but never gates.
    submit(true, undefined, "Submitted.");
  }

  return (
    <View>
      <TapText text={exercise.prompt} lang={lang} style={s.question} />
      {exercise.rubric.map((r, i) => (
        <TapText key={i} text={`• ${r}`} lang={lang} style={s.rubricLine} />
      ))}
      <TextInput
        value={text}
        onChangeText={setText}
        editable={!checked && state.kind !== "sending"}
        multiline
        autoCapitalize="sentences"
        autoCorrect={false}
        placeholder="Escribe aquí…"
        style={[s.textInput, s.textArea]}
      />
      <Text style={[s.wordCount, !inRange && s.wordCountOff]}>
        {words} {words === 1 ? "word" : "words"} · aim for {exercise.minWords}–{exercise.maxWords}
      </Text>
      {!checked && (
        <PrimaryButton
          label={state.kind === "sending" ? "Checking…" : "Submit"}
          disabled={words === 0 || state.kind === "sending"}
          onPress={() => void send()}
        />
      )}
      {state.kind === "sending" && <ActivityIndicator style={{ marginTop: 10 }} />}

      {state.kind === "feedback" && <FeedbackView feedback={state.feedback} lang={lang} />}

      {state.kind === "selfcheck" && (
        <View style={s.panel}>
          <Text style={s.muted}>Check your text yourself against this list:</Text>
          {exercise.rubric.map((r, i) => (
            <Pressable
              key={i}
              style={s.checkRow}
              onPress={() =>
                setTicked((prev) => {
                  const next = new Set(prev);
                  if (next.has(i)) next.delete(i);
                  else next.add(i);
                  return next;
                })
              }
            >
              <Text style={s.checkBox}>{ticked.has(i) ? "☑" : "☐"}</Text>
              <TapText text={r} lang={lang} style={s.flexText} />
            </Pressable>
          ))}
        </View>
      )}
      {(state.kind === "feedback" || state.kind === "selfcheck") && (
        <View style={s.panel}>
          <Text style={s.muted}>A model answer:</Text>
          <TapText text={exercise.modelAnswer} lang={lang} mode="target" style={s.revealedText} />
        </View>
      )}
    </View>
  );
}

function FeedbackView({ feedback, lang }: { feedback: WritingFeedback; lang: SpeechLang }) {
  return (
    <View style={s.panel}>
      <Text style={s.score}>
        {"★".repeat(feedback.score)}
        <Text style={s.scoreOff}>{"★".repeat(5 - feedback.score)}</Text> {feedback.score}/5
      </Text>
      {!!feedback.comment && <TapText text={feedback.comment} lang={lang} style={s.body} />}
      <Text style={[s.muted, { marginTop: 8 }]}>Corrected version:</Text>
      <TapText text={feedback.corrected} lang={lang} mode="target" style={s.revealedText} />
      {feedback.corrections.map((c, i) => (
        <View key={i} style={{ marginTop: 8 }}>
          <Text>
            <TapText text={c.original} lang={lang} mode="target" style={s.strike} />
            <Text> → </Text>
            <TapText text={c.correction} lang={lang} mode="target" style={s.fixed} />
          </Text>
          <TapText text={c.reason} lang={lang} style={s.reason} />
        </View>
      ))}
      {feedback.rubric.map((r, i) => (
        <View key={i} style={s.checkRow}>
          <Text style={r.met ? s.met : s.unmet}>{r.met ? "✓" : "✗"}</Text>
          <View style={{ flex: 1 }}>
            <TapText text={r.item} lang={lang} style={s.body} />
            {!!r.comment && <TapText text={r.comment} lang={lang} style={s.reason} />}
          </View>
        </View>
      ))}
    </View>
  );
}

function PrimaryButton({ label, disabled, onPress }: { label: string; disabled: boolean; onPress: () => void }) {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={[s.submit, disabled && s.submitDisabled]}>
      <Text style={s.primaryBtnText}>{label}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  question: { fontSize: 16, fontWeight: "600", color: "#000", marginBottom: 10 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  flex: { flex: 1, alignItems: "center" },
  flexText: { flex: 1, fontSize: 14, color: "#000" },
  options: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 12 },
  option: { borderWidth: 1, borderColor: "#00000022", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 14 },
  optionSelected: { borderColor: "#7A1F1F", backgroundColor: "#7A1F1F14" },
  optionCorrect: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  optionWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  optionText: { fontSize: 15, color: "#000" },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: "#00000030",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  secondaryBtnText: { fontSize: 14, color: "#000" },
  primaryBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 8, paddingHorizontal: 14 },
  primaryBtnText: { color: "#fff", fontWeight: "600" },
  recordBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 8, paddingHorizontal: 14 },
  recordBtnActive: { backgroundColor: "#dc2626" },
  recordBtnText: { color: "#fff", fontWeight: "600", fontSize: 14 },
  recording: { color: "#dc2626", fontSize: 13, marginTop: 8 },
  speakText: { fontSize: 20, color: "#000", marginBottom: 6 },
  tip: { fontSize: 13, color: "#00000099", marginBottom: 4 },
  muted: { fontSize: 13, color: "#00000099" },
  revealed: { marginTop: 10 },
  revealedText: { fontSize: 15, color: "#000", marginTop: 2 },
  textInput: {
    borderWidth: 1,
    borderColor: "#00000030",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 12,
  },
  textArea: { minHeight: 120, textAlignVertical: "top" },
  inputCorrect: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  inputWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  rubricLine: { fontSize: 14, color: "#000000cc", marginBottom: 2 },
  wordCount: { fontSize: 12, color: "#00000066", marginTop: 4 },
  wordCountOff: { color: "#b45309" },
  panel: { borderWidth: 1, borderColor: "#00000015", borderRadius: 10, padding: 12, marginTop: 12 },
  checkRow: { flexDirection: "row", gap: 8, alignItems: "flex-start", marginTop: 6 },
  checkBox: { fontSize: 16 },
  score: { fontSize: 16, fontWeight: "700", color: "#b45309" },
  scoreOff: { color: "#00000022" },
  body: { fontSize: 14, color: "#000000cc" },
  strike: { textDecorationLine: "line-through", color: "#b91c1c" },
  fixed: { color: "#15803d", fontWeight: "600" },
  reason: { fontSize: 12.5, color: "#00000099" },
  met: { color: "#15803d", fontWeight: "700" },
  unmet: { color: "#b91c1c", fontWeight: "700" },
  submit: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 10, alignItems: "center", marginTop: 12 },
  submitDisabled: { opacity: 0.4 },
  linkButton: { marginTop: 12 },
  linkButtonText: { color: "#00000066", fontSize: 13, textDecorationLine: "underline" },
});
