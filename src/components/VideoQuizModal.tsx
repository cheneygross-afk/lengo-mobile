import { useState } from "react";
import { Modal, View, Text, Pressable, ScrollView, Linking, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TapText, { voiceFor } from "@/components/TapText";
import { speak, SPANISH_LANG } from "@/lib/speech";
import { optionOrder } from "@/lib/grading";
import { videoUrlFor, type LessonVideo } from "@/lib/lessons/lessonVideos";
import { displayTitle } from "@/lib/lessons/videoTopics";
import {
  formatTimestamp,
  isTrueFalse,
  quizFor,
  quizInEnglish,
  quizPassed,
  quizStrings,
  videoUrlAt,
} from "@/lib/lessons/videoQuizzes";
import { saveVideoQuizResult } from "@/lib/videoQuizProgress";

// A video's "Check your understanding" quiz (videoQuizzes.ts), as a sheet
// over the screen -- the app's version of the website's VideoQuizPanel.
// One question at a time: tapping an option hears it and answers it, then
// the green/red feedback box gives the explanation and, where the question
// has a timestamp, a link back into the video at that moment. The score is
// saved on this device. Every word of the quiz is tap-to-hear.

const LANG = SPANISH_LANG;

export default function VideoQuizModal({ video, onClose }: { video: LessonVideo | null; onClose: () => void }) {
  return (
    <Modal visible={!!video} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      {/* A modal is its own native root, so it needs its own provider. */}
      <SafeAreaProvider>{video ? <Quiz key={video.videoId} video={video} onClose={onClose} /> : null}</SafeAreaProvider>
    </Modal>
  );
}

function Quiz({ video, onClose }: { video: LessonVideo; onClose: () => void }) {
  const quiz = quizFor(video.videoId);
  const english = quizInEnglish(video.videoId);
  const t = quizStrings(english);
  const textMode = english ? "mixed" : "target";
  const uiMode = english ? "english" : "target";
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz?.questions[index];
  if (!quiz || !q) return null;
  const total = quiz.questions.length;
  const trueFalse = isTrueFalse(q);
  // Multiple-choice options shuffled the way lessons shuffle theirs
  // (deterministic per question); True/False stays in order.
  const order = trueFalse ? [0, 1] : optionOrder(q.question, q.options);
  const isRight = picked === q.answerIndex;
  const passed = quizPassed({ correct, total, finishedAt: 0 });

  function pick(i: number) {
    if (picked !== null || !q) return;
    speak(q.options[i], voiceFor(q.options[i], LANG));
    setPicked(i);
    if (i === q.answerIndex) setCorrect((c) => c + 1);
  }

  function next() {
    if (index + 1 < total) {
      setIndex(index + 1);
      setPicked(null);
    } else {
      saveVideoQuizResult(video.videoId, correct, total);
      setDone(true);
    }
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  }

  return (
    <SafeAreaView style={s.screen} edges={["top", "bottom"]}>
      <View style={s.header}>
        <View style={s.headerText}>
          <TapText text={t.heading} lang={LANG} mode={uiMode} style={s.kicker} />
          <Text style={s.title} numberOfLines={2}>
            {displayTitle(video.title)}
          </Text>
        </View>
        <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel={t.close} hitSlop={10} style={s.close}>
          <Text style={s.closeText}>×</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={s.body}>
        {done ? (
          <View>
            <Text style={s.score}>
              {passed ? <Text style={s.scorePassed}>✓ </Text> : null}
              {correct}/{total}
            </Text>
            <TapText
              text={`${t.score(correct, total)} ${passed ? t.passed : t.notPassed}`}
              lang={LANG}
              mode={textMode}
              style={s.scoreText}
            />
            <View style={s.row}>
              <Pressable onPress={restart} accessibilityRole="button" style={s.outlineBtn}>
                <Text style={s.outlineBtnText}>{t.retry}</Text>
              </Pressable>
              <Pressable
                onPress={() => void Linking.openURL(videoUrlFor(video.videoId))}
                accessibilityRole="link"
                style={s.outlineBtn}
              >
                <Text style={s.outlineBtnText}>YouTube ↗</Text>
              </Pressable>
              <Pressable onPress={onClose} accessibilityRole="button" style={s.primaryBtn}>
                <Text style={s.primaryBtnText}>{t.close}</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View>
            <View style={s.progressRow}>
              <Text style={s.progressText}>{t.questionOf(index + 1, total)}</Text>
              <View style={s.progressTrack}>
                <View style={[s.progressFill, { width: `${(index / total) * 100}%` }]} />
              </View>
            </View>

            {trueFalse ? <TapText text={t.trueFalse} lang={LANG} mode={uiMode} style={s.tfLabel} /> : null}
            <TapText text={q.question} lang={LANG} mode={textMode} style={s.question} />

            <View style={[s.options, trueFalse && s.optionsTF]}>
              {order.map((i) => {
                const showCorrect = picked !== null && i === q.answerIndex;
                const showWrong = picked === i && i !== q.answerIndex;
                return (
                  <Pressable
                    key={i}
                    disabled={picked !== null}
                    onPress={() => pick(i)}
                    accessibilityRole="button"
                    style={[
                      s.option,
                      trueFalse && s.optionTF,
                      showCorrect && s.optionCorrect,
                      showWrong && s.optionWrong,
                    ]}
                  >
                    <Text style={s.optionText}>{q.options[i]}</Text>
                  </Pressable>
                );
              })}
            </View>

            {picked !== null ? (
              <>
                <View style={[s.feedback, isRight ? s.feedbackRight : s.feedbackWrong]} accessibilityLiveRegion="polite">
                  <TapText
                    text={isRight ? t.correct : t.wrong}
                    lang={LANG}
                    mode={uiMode}
                    style={[s.feedbackTitle, isRight ? s.feedbackTitleRight : s.feedbackTitleWrong]}
                  />
                  <TapText text={q.explanation} lang={LANG} mode={textMode} style={s.feedbackBody} />
                  {q.atSeconds !== undefined ? (
                    <Pressable
                      onPress={() => void Linking.openURL(videoUrlAt(video.videoId, q.atSeconds!))}
                      accessibilityRole="link"
                      hitSlop={6}
                    >
                      <Text style={s.rewatch}>
                        {t.rewatch} {formatTimestamp(q.atSeconds)} ↗
                      </Text>
                    </Pressable>
                  ) : null}
                </View>
                <Pressable onPress={next} accessibilityRole="button" style={[s.primaryBtn, s.nextBtn]}>
                  <Text style={s.primaryBtnText}>{index + 1 < total ? t.next : t.finish} →</Text>
                </Pressable>
              </>
            ) : null}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#00000014",
  },
  headerText: { flex: 1 },
  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#7A1F1F" },
  title: { fontSize: 15, fontWeight: "600", color: "#000", marginTop: 2, lineHeight: 20 },
  close: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  closeText: { fontSize: 24, lineHeight: 26, color: "#00000099" },
  body: { padding: 16, paddingBottom: 40 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  progressText: { fontSize: 12, color: "#00000080" },
  progressTrack: { flex: 1, height: 4, borderRadius: 2, backgroundColor: "#0000001a", overflow: "hidden" },
  progressFill: { height: 4, backgroundColor: "#7A1F1F" },
  tfLabel: { marginTop: 16, fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#00000080" },
  question: { fontSize: 17, fontWeight: "600", color: "#000", marginTop: 14, lineHeight: 23 },
  options: { marginTop: 14, gap: 8 },
  optionsTF: { flexDirection: "row" },
  option: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#00000022",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  optionTF: { flex: 1 },
  optionCorrect: { borderColor: "#16a34a", backgroundColor: "#16a34a1a" },
  optionWrong: { borderColor: "#dc2626", backgroundColor: "#dc26261a" },
  optionText: { fontSize: 15, color: "#000" },
  feedback: { borderRadius: 8, padding: 10, marginTop: 12 },
  feedbackRight: { backgroundColor: "#16a34a1a" },
  feedbackWrong: { backgroundColor: "#dc26261a" },
  feedbackTitle: { fontWeight: "600", fontSize: 14 },
  feedbackTitleRight: { color: "#15803d" },
  feedbackTitleWrong: { color: "#b91c1c" },
  feedbackBody: { fontSize: 14, color: "#000000cc", marginTop: 2 },
  rewatch: { fontSize: 14, color: "#000000cc", textDecorationLine: "underline", marginTop: 6 },
  primaryBtn: {
    backgroundColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  primaryBtnText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  nextBtn: { marginTop: 14 },
  outlineBtn: {
    borderWidth: 1,
    borderColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  outlineBtnText: { color: "#7A1F1F", fontWeight: "700", fontSize: 15 },
  score: { fontSize: 34, fontWeight: "800", color: "#000" },
  scorePassed: { color: "#15803d" },
  scoreText: { fontSize: 15, color: "#000000cc", marginTop: 4, lineHeight: 21 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 18 },
});
