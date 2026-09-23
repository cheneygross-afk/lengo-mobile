import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, Animated } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { getMissedQuestions, removeMissedQuestions, type MissedQuestion } from "@/lib/lessons/missedQuestions";
import { markReviewBatchDone } from "@/lib/lessons/reviewCadence";
import ExerciseBlock from "@/components/ExerciseBlock";
import { langForLevelPath } from "@/lib/speech";

type Props = NativeStackScreenProps<AppStackParamList, "ReviewDrill">;

// A student misses this question 3 times IN THIS REVIEW SESSION (not
// lifetime) and it's dropped for good, per "unless they miss a specific
// question 3 times, then just forget it."
const FORGET_AFTER_MISSES = 3;

type Phase = "loading" | "intro" | "drilling" | "complete";

// Screen reached from LessonList when reviewCadence.ts says a batch is
// due (every 4th completed lesson). Pulls every question the student
// got wrong, or flagged, across those 4 lessons (missedQuestions.ts) and
// drills them: a wrong answer sends the question to the back of the
// queue to try again, right up until either it's answered correctly (it
// leaves the pool for good) or it's been missed FORGET_AFTER_MISSES
// times in this session (it also leaves the pool for good, just without
// ever being gotten right -- "then just forget it").
export default function ReviewDrillScreen({ route, navigation }: Props) {
  const { levelPath, batch, slugs } = route.params;

  const [phase, setPhase] = useState<Phase>("loading");
  const [queue, setQueue] = useState<MissedQuestion[]>([]);
  const [missCounts, setMissCounts] = useState<Record<string, number>>({});
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);
  const [forgottenCount, setForgottenCount] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string; forgotten: boolean } | null>(null);
  const resolvedIdsRef = useRef<Set<string>>(new Set());

  const sheetAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(sheetAnim, { toValue: feedback ? 1 : 0, duration: 240, useNativeDriver: true }).start();
  }, [feedback, sheetAnim]);

  useEffect(() => {
    let cancelled = false;
    const slugSet = new Set(slugs);
    getMissedQuestions(levelPath).then((all) => {
      if (cancelled) return;
      const pool = all.filter((q) => slugSet.has(q.lessonSlug));
      setQueue(pool);
      setTotalQuestions(pool.length);
      setPhase("intro");
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelPath]);

  async function finishSession() {
    await removeMissedQuestions(levelPath, Array.from(resolvedIdsRef.current));
    await markReviewBatchDone(levelPath, batch);
    setPhase("complete");
  }

  function startDrilling() {
    if (queue.length === 0) {
      void finishSession();
    } else {
      setPhase("drilling");
    }
  }

  function handleChecked(current: MissedQuestion, correct: boolean, explanation: string) {
    if (correct) {
      resolvedIdsRef.current.add(current.id);
      setMasteredCount((c) => c + 1);
      setFeedback({ correct: true, explanation, forgotten: false });
      return;
    }
    const nextMiss = (missCounts[current.id] ?? 0) + 1;
    setMissCounts((prev) => ({ ...prev, [current.id]: nextMiss }));
    const forgotten = nextMiss >= FORGET_AFTER_MISSES;
    if (forgotten) {
      resolvedIdsRef.current.add(current.id);
      setForgottenCount((c) => c + 1);
    }
    setFeedback({ correct: false, explanation, forgotten });
  }

  function goNext() {
    const current = queue[0];
    const forgotten = feedback?.forgotten ?? false;
    const wasCorrect = feedback?.correct ?? false;
    setFeedback(null);
    setQueue((prev) => {
      const rest = prev.slice(1);
      // Recycle: goes back on the end of the queue unless it was just
      // answered correctly or just got forgotten.
      if (!wasCorrect && !forgotten && current) return [...rest, current];
      return rest;
    });
  }

  useEffect(() => {
    if (phase === "drilling" && queue.length === 0 && !feedback) {
      void finishSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, queue.length, feedback]);

  const current = queue[0];
  const sheetTranslateY = sheetAnim.interpolate({ inputRange: [0, 1], outputRange: [260, 0] });

  if (phase === "loading") return <View style={s.screen} />;

  return (
    <View style={s.screen}>
      <ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
        {phase === "intro" && (
          <View>
            <Text style={s.kicker}>Review · Lessons {batch * 4 - 3}–{batch * 4}</Text>
            <Text style={s.title}>Catch-up drill</Text>
            {totalQuestions > 0 ? (
              <Text style={s.body}>
                {totalQuestions} question{totalQuestions === 1 ? "" : "s"} from your last 4 lessons -- missed
                answers or ones you flagged. Get one wrong and it comes back around; miss the same one 3 times
                and it's dropped so it stops repeating.
              </Text>
            ) : (
              <Text style={s.body}>Nothing to review -- you got everything right in your last 4 lessons.</Text>
            )}
            <Pressable style={s.bigBtn} onPress={startDrilling}>
              <Text style={s.bigBtnText}>{totalQuestions > 0 ? "Start review" : "Continue"}</Text>
            </Pressable>
          </View>
        )}

        {phase === "drilling" && current && (
          <View>
            <Text style={s.badge}>{queue.length} left · from Lesson {current.lessonNumber}</Text>
            <ExerciseBlock
              key={`${current.id}-${missCounts[current.id] ?? 0}`}
              exercise={current.exercise}
              index={0}
              hideIndexLabel
              showInlineFeedback={false}
              lang={langForLevelPath(levelPath)}
              onChecked={(correct, explanation) => handleChecked(current, correct, explanation)}
            />
          </View>
        )}

        {phase === "complete" && (
          <View style={s.completeWrap}>
            <View style={s.completeBadge}>
              <Text style={{ fontSize: 38 }}>✅</Text>
            </View>
            <Text style={s.title}>Review complete</Text>
            {totalQuestions > 0 ? (
              <Text style={s.body}>
                {masteredCount} mastered{forgottenCount > 0 ? `, ${forgottenCount} set aside` : ""} out of{" "}
                {totalQuestions}.
              </Text>
            ) : (
              <Text style={s.body}>Nothing needed reviewing this time.</Text>
            )}
            <Pressable style={s.bigBtn} onPress={() => navigation.goBack()}>
              <Text style={s.bigBtnText}>Back to lessons</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>

      {feedback && phase === "drilling" && (
        <Animated.View
          style={[
            s.feedbackSheet,
            feedback.correct ? s.feedbackSheetCorrect : s.feedbackSheetWrong,
            { transform: [{ translateY: sheetTranslateY }] },
          ]}
        >
          <Text style={[s.feedbackTitle, feedback.correct ? s.feedbackTitleCorrect : s.feedbackTitleWrong]}>
            {feedback.correct ? "Correct!" : feedback.forgotten ? "Not quite -- moving on." : "Not quite -- try again later."}
          </Text>
          <Text style={s.feedbackBody}>{feedback.explanation}</Text>
          <Pressable
            style={[s.bigBtn, { backgroundColor: feedback.correct ? "#16a34a" : "#dc2626" }]}
            onPress={goNext}
          >
            <Text style={s.bigBtnText}>Continue</Text>
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1" },
  content: { padding: 20, paddingBottom: 40 },
  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#7A1F1F", marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 10 },
  body: { fontSize: 15, lineHeight: 22, color: "#000000cc", marginBottom: 10 },
  badge: { fontSize: 12, color: "#00000066", textTransform: "uppercase", marginBottom: 4, fontWeight: "600" },
  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 18 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  completeWrap: { alignItems: "center", paddingTop: 40 },
  completeBadge: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#7A1F1F",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  feedbackSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 28,
    borderTopWidth: 2,
  },
  feedbackSheetCorrect: { backgroundColor: "#16a34a1a", borderTopColor: "#16a34a" },
  feedbackSheetWrong: { backgroundColor: "#dc26261a", borderTopColor: "#dc2626" },
  feedbackTitle: { fontSize: 16, fontWeight: "800", marginBottom: 4 },
  feedbackTitleCorrect: { color: "#15803d" },
  feedbackTitleWrong: { color: "#b91c1c" },
  feedbackBody: { fontSize: 13.5, color: "#000000cc", lineHeight: 19 },
});
