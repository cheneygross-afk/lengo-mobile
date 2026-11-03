// The "Try it yourself" box on the lesson-complete screen, as on the
// website (lengo src/components/lessons/TryItYourself.tsx): the learner
// writes a sentence or two with what the lesson taught, and "Check my
// writing" sends it to the website's /api/writing-feedback with the
// lesson's title and summary as its focus. Claude scores it mostly on
// correctness (grammar, spelling, accents, use of the lesson's structure)
// and partly on content (on topic, does what was asked); the feedback
// shows in a green box. The text is saved per lesson on the device, in
// the same shape as the website's lessonNotes. The score never gates the
// lesson.
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FeedbackView, postWritingFeedback } from "@/components/SkillExercises";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { englishTaughtName, type SpeechLang } from "@/lib/speech";
import { countWords, type WritingFeedback } from "@/lib/writingFeedback";

const STORAGE_KEY = "deepend-lesson-notes";
type LessonNote = { text: string; updatedAt: number };

type State =
  | { kind: "editing" }
  | { kind: "sending" }
  | { kind: "feedback"; feedback: WritingFeedback; text: string }
  | { kind: "failed"; reason: string };

const RUBRIC = ["Correct grammar, spelling and accents", "Uses what this lesson taught", "On topic: does what was asked"];

export default function TryItYourself({
  lessonSlug,
  level,
  title,
  summary,
  lang,
  accent,
}: {
  lessonSlug: string;
  level: string;
  title: string;
  summary: string;
  lang: SpeechLang;
  accent: string;
}) {
  const [text, setText] = useState("");
  const [state, setState] = useState<State>({ kind: "editing" });
  const loaded = useRef(false);
  const words = countWords(text);
  const stale = state.kind === "feedback" && state.text !== text;

  useEffect(() => {
    void readJSON<Record<string, LessonNote>>(STORAGE_KEY, {}).then((all) => {
      loaded.current = true;
      if (all[lessonSlug]?.text) setText(all[lessonSlug].text);
    });
  }, [lessonSlug]);

  // Save shortly after the learner stops typing.
  useEffect(() => {
    if (!loaded.current) return;
    const t = setTimeout(() => {
      void readJSON<Record<string, LessonNote>>(STORAGE_KEY, {}).then((all) => {
        if (text.trim()) all[lessonSlug] = { text, updatedAt: Date.now() };
        else delete all[lessonSlug];
        return writeJSON(STORAGE_KEY, all);
      });
    }, 600);
    return () => clearTimeout(t);
  }, [text, lessonSlug]);

  async function check() {
    const sent = text;
    setState({ kind: "sending" });
    const result = await postWritingFeedback({
      level,
      prompt: `Write a sentence or two of your own using what the lesson "${title}" taught.`,
      rubric: RUBRIC,
      minWords: 1,
      maxWords: 120,
      focus: [title, summary].map((x) => x.trim()).filter(Boolean).join(": ").slice(0, 600),
      text: sent,
    });
    setState("reason" in result ? { kind: "failed", reason: result.reason } : { kind: "feedback", feedback: result.feedback, text: sent });
  }

  const canSend = words > 0 && state.kind !== "sending" && (state.kind !== "feedback" || stale);

  return (
    <View style={s.wrap}>
      <Text style={s.title}>Try it yourself</Text>
      <Text style={s.intro}>
        Write a sentence or two using what this lesson covered, then check it: you get a score and quick feedback on what's right and
        what to fix.
      </Text>
      <TextInput
        value={text}
        onChangeText={setText}
        editable={state.kind !== "sending"}
        multiline
        autoCapitalize="sentences"
        autoCorrect={false}
        placeholder={englishTaughtName(lang) ? "Write here…" : "Escribe aquí…"}
        style={s.input}
      />
      {(state.kind !== "feedback" || stale) && (
        <Pressable disabled={!canSend} onPress={() => void check()} style={[s.btn, { backgroundColor: accent }, !canSend && s.btnOff]}>
          <Text style={s.btnText}>{state.kind === "sending" ? "Checking…" : stale ? "Check again" : "Check my writing"}</Text>
        </Pressable>
      )}
      {state.kind === "sending" && <ActivityIndicator style={{ marginTop: 10 }} />}
      {state.kind === "feedback" && (
        <View style={stale && { opacity: 0.6 }}>
          <FeedbackView feedback={state.feedback} lang={lang} green />
        </View>
      )}
      {state.kind === "failed" && (
        <Text style={s.failed}>The AI feedback didn't come through ({state.reason}). Your text is saved; try again.</Text>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { alignSelf: "stretch", marginTop: 22, paddingTop: 18, borderTopWidth: 1, borderTopColor: "#2A151315" },
  title: { fontSize: 20, fontWeight: "700", color: "#2A1513" },
  intro: { fontSize: 13, color: "#2A151399", marginTop: 4, lineHeight: 18 },
  input: {
    borderWidth: 1,
    borderColor: "#2A151330",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 10,
    minHeight: 90,
    textAlignVertical: "top",
    backgroundColor: "#fff",
    color: "#2A1513",
  },
  btn: { alignSelf: "flex-start", borderRadius: 999, paddingVertical: 10, paddingHorizontal: 18, marginTop: 10 },
  btnOff: { opacity: 0.4 },
  btnText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  failed: { marginTop: 10, fontSize: 13, color: "#92400e", backgroundColor: "#fffbeb", borderRadius: 8, padding: 10 },
});
