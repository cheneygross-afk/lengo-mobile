import { useCallback, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import ExerciseBlock from "@/components/ExerciseBlock";
import { buildUnifiedReview, getDueConcepts, recordAttempt, syncAttempts } from "@/lib/attempts";
import type { ReviewCandidate } from "@/lib/curriculum/queue";
import { curriculumFor } from "@/lib/lessons/curricula";
import { CHINESE_LANG } from "@/lib/speech";
import { creditStudy } from "@/lib/studyDays";
import { QUESTION_MINUTES, STREAK_MIN_REVIEW_QUESTIONS } from "@/lib/studyCredit";

type Props = NativeStackScreenProps<AppStackParamList, "ChineseReview">;

// The Chinese beta's own daily review -- separate from the Spanish
// "Today's review" (TodayReviewScreen). The per-concept scheduler
// (lib/curriculum/memory.ts) says which Chinese topics are due; each is
// asked with a question from the course's bank (lib/attempts.ts,
// buildUnifiedReview), and every answer goes back into the attempts log.
type Phase = "loading" | "intro" | "drilling" | "complete";

const curriculum = curriculumFor("zh-a1");

export default function ChineseReviewScreen({ navigation }: Props) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [due, setDue] = useState(0);
  const [queue, setQueue] = useState<ReviewCandidate[]>([]);
  const [index, setIndex] = useState(0);
  const [right, setRight] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null);

  const refresh = useCallback(async () => {
    await syncAttempts().catch(() => null);
    setDue((await getDueConcepts("zh")).length);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void refresh().then(() => setPhase((p) => (p === "loading" ? "intro" : p)));
    }, [refresh])
  );

  async function start() {
    const items = await buildUnifiedReview("zh");
    setQueue(items);
    setIndex(0);
    setRight(0);
    setFeedback(null);
    setPhase(items.length ? "drilling" : "complete");
  }

  function handleChecked(item: ReviewCandidate, correct: boolean, explanation: string) {
    void recordAttempt(item.id, item.concepts, correct ? "good" : "again", "review");
    void creditStudy(QUESTION_MINUTES, { counts: index + 1 >= STREAK_MIN_REVIEW_QUESTIONS });
    if (correct) setRight((n) => n + 1);
    setFeedback({ correct, explanation });
  }

  async function goNext() {
    setFeedback(null);
    if (index + 1 >= queue.length) {
      await creditStudy(0, { counts: true });
      await refresh();
      setPhase("complete");
      return;
    }
    setIndex((i) => i + 1);
  }

  if (phase === "loading") return <View style={s.screen} />;
  const current = queue[index];

  return (
    <View style={s.screen}>
      <ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
        {phase !== "drilling" && (
          <View>
            {phase === "complete" && queue.length > 0 && (
              <View style={s.doneBox}>
                <Text style={s.doneTitle}>Review complete</Text>
                <Text style={s.body}>
                  {right} right out of {queue.length}.
                </Text>
              </View>
            )}
            <Text style={s.kicker}>Chinese · Today&apos;s review</Text>
            {due === 0 ? (
              <>
                <Text style={s.title}>All caught up</Text>
                <Text style={s.body}>Finish a lesson and its topics will come back here when they&apos;re due.</Text>
                <Pressable style={s.bigBtn} onPress={() => navigation.navigate("ChineseLevels")}>
                  <Text style={s.bigBtnText}>Go to the lessons</Text>
                </Pressable>
              </>
            ) : (
              <>
                <Text style={s.title}>
                  {due} topic{due === 1 ? "" : "s"} due today
                </Text>
                <Text style={s.body}>
                  Topics from lessons you&apos;ve finished, back just as you&apos;re likely to start forgetting them --
                  sooner if you miss them, at longer gaps when you don&apos;t.
                </Text>
                <Pressable style={s.bigBtn} onPress={() => void start()}>
                  <Text style={s.bigBtnText}>Start review</Text>
                </Pressable>
              </>
            )}
          </View>
        )}

        {phase === "drilling" && current && (
          <View>
            <Text style={s.badge}>
              {queue.length - index} left
              {curriculum ? ` · ${current.concepts.slice(0, 2).map(curriculum.conceptName).join(", ")}` : ""}
            </Text>
            <ExerciseBlock
              key={`${current.id}-${index}`}
              exercise={current.exercise}
              index={0}
              hideIndexLabel
              showInlineFeedback={false}
              lang={CHINESE_LANG}
              onChecked={(correct, explanation) => handleChecked(current, correct, explanation)}
            />
            {feedback && (
              <View style={[s.feedback, feedback.correct ? s.feedbackRight : s.feedbackWrong]}>
                <Text style={s.feedbackTitle}>{feedback.correct ? "Correct!" : "Not quite -- this topic comes back sooner."}</Text>
                <Text style={s.body}>{feedback.explanation}</Text>
                <Pressable style={s.bigBtn} onPress={() => void goNext()}>
                  <Text style={s.bigBtnText}>Continue</Text>
                </Pressable>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 60 },
  kicker: { fontSize: 12, fontWeight: "700", color: "#7A1F1F", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 8 },
  body: { fontSize: 15, color: "#000000cc", lineHeight: 21, marginBottom: 12 },
  badge: { fontSize: 12, color: "#00000080", textTransform: "uppercase", marginBottom: 10 },
  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 12, paddingVertical: 14, alignItems: "center", marginTop: 4 },
  bigBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  doneBox: { backgroundColor: "#16a34a14", borderRadius: 12, padding: 14, marginBottom: 18 },
  doneTitle: { fontSize: 16, fontWeight: "700", color: "#15803d", marginBottom: 4 },
  feedback: { marginTop: 16, borderRadius: 12, padding: 14 },
  feedbackRight: { backgroundColor: "#16a34a14" },
  feedbackWrong: { backgroundColor: "#dc262614" },
  feedbackTitle: { fontSize: 16, fontWeight: "700", marginBottom: 6, color: "#000" },
});
