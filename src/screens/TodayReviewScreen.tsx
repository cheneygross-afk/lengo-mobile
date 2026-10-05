import { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, Animated } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import {
  addMissedQuestion,
  getMissedQuestions,
  isMissedQuestionDue,
  recordMissedQuestionReviews,
  removeMissedQuestions,
} from "@/lib/lessons/missedQuestions";
import { authoredQuestions } from "@/lib/lessons/drill";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import type { Exercise } from "@/lib/lessons/types";
import ExerciseBlock from "@/components/ExerciseBlock";
import StudyCreditNote from "@/components/StudyCreditNote";
import { getSpanishVariety, loadSpanishVariety } from "@/lib/spanishVariety";
import { requiresVosotros } from "@/lib/vosotros";
import {
  applyMixResult,
  pickDailyMix,
  pickLessonQuestions,
  spacedKey,
  todaysReviewBreakdown,
  todaysReviewTotal,
  type TodaysReviewCounts,
} from "@/lib/dailyReview";
import {
  SPANISH_REVIEW_TRACKS,
  getTodaysReviewCounts,
  loadSchedule,
  saveSchedule,
  seedScheduleFromCompletions,
} from "@/lib/todaysReview";
import { creditStudy, type CreditResult } from "@/lib/studyDays";
import { QUESTION_MINUTES, STREAK_MIN_REVIEW_QUESTIONS } from "@/lib/studyCredit";
import { buildUnifiedReview, recordAttempt, syncAttempts, unifiedReviewEnabled } from "@/lib/attempts";
import { lessonConceptId } from "@/lib/curriculum/items";
import { langForLevelPath } from "@/lib/speech";

type Props = NativeStackScreenProps<AppStackParamList, "TodayReview">;

// "Today's review" (dailyReview.ts, shared with the website): one drill of
// everything due today -- questions missed in lessons, from every Spanish
// track, then the daily mix of questions from lessons finished earlier --
// and then the flashcards due today. A missed question goes round again
// until it's right (or missed FORGET_AFTER_MISSES times this session); a
// daily-mix question is asked once, and a miss adds it to the missed
// questions and starts its lesson's schedule over.
const FORGET_AFTER_MISSES = 3;
const LANG = "es-ES";

type Item = {
  // "concept": the unified review (rollout flag) -- asked for a concept
  // the per-concept scheduler says is due (lib/attempts.ts).
  kind: "missed" | "mix" | "concept";
  id: string;
  levelPath: string;
  lessonSlug: string;
  lessonNumber: number;
  lessonTitle: string;
  exercise: Exercise;
  mixKey?: string;
  concepts?: string[];
};

/** The unified review's queue, as drill items. */
async function buildUnifiedQueue(): Promise<Item[]> {
  await syncAttempts().catch(() => null);
  const variety = getSpanishVariety();
  const picked = await buildUnifiedReview();
  return picked
    .filter((c) => !(variety === "latam" && requiresVosotros(c.exercise)))
    .map((c) => {
      const missed = /^missed:([^:]+):(.+)$/.exec(c.id);
      return {
        kind: missed ? ("missed" as const) : ("concept" as const),
        id: missed ? missed[2] : c.id,
        levelPath: missed ? missed[1] : c.levelPath ?? "a1",
        lessonSlug: (missed ? missed[2] : c.id).split("#")[0],
        lessonNumber: 0,
        lessonTitle: "",
        exercise: c.exercise,
        concepts: c.concepts,
      };
    });
}

type Phase = "loading" | "intro" | "drilling" | "complete";

async function buildQueue(): Promise<{ items: Item[]; mixLeft: Record<string, { left: number; allCorrect: boolean }> }> {
  const variety = await Promise.race([
    loadSpanishVariety(),
    new Promise<string>((resolve) => setTimeout(() => resolve(getSpanishVariety()), 1500)),
  ]).catch(() => getSpanishVariety());
  const skip = (e: Exercise) => variety === "latam" && requiresVosotros(e);
  const now = Date.now();
  const items: Item[] = [];
  const pools = await Promise.all(SPANISH_REVIEW_TRACKS.map((lp) => getMissedQuestions(lp)));
  SPANISH_REVIEW_TRACKS.forEach((levelPath, t) => {
    for (const q of pools[t]
      .filter((q) => isMissedQuestionDue(q, now) && !skip(q.exercise))
      .sort((a, b) => (a.dueAt ?? 0) - (b.dueAt ?? 0))) {
      items.push({ kind: "missed", id: q.id, levelPath, lessonSlug: q.lessonSlug, lessonNumber: q.lessonNumber, lessonTitle: q.lessonTitle, exercise: q.exercise });
    }
  });

  const mixLeft: Record<string, { left: number; allCorrect: boolean }> = {};
  let schedule = await loadSchedule();
  const before = schedule;
  for (const entry of pickDailyMix(schedule, now)) {
    const key = spacedKey(entry.levelPath, entry.slug);
    const source = LESSON_SOURCES[entry.levelPath as LessonModuleKey];
    const lesson = source?.lessons.find((l) => l.slug === entry.slug);
    if (!lesson) {
      // Content gone: drop it from the schedule.
      const { [key]: _gone, ...rest } = schedule;
      schedule = rest;
      continue;
    }
    const questions = authoredQuestions(lesson);
    const t = SPANISH_REVIEW_TRACKS.indexOf(entry.levelPath);
    const inPool = new Set((t >= 0 ? pools[t] : []).map((q) => q.id));
    const indices = pickLessonQuestions(questions, entry.turns, (i) => inPool.has(`${lesson.slug}#${i}`) || skip(questions[i]));
    if (!indices.length) {
      schedule = { ...schedule, [key]: applyMixResult(entry, true, now) };
      continue;
    }
    mixLeft[key] = { left: indices.length, allCorrect: true };
    for (const i of indices) {
      items.push({
        kind: "mix",
        id: `${lesson.slug}#${i}`,
        levelPath: entry.levelPath,
        lessonSlug: lesson.slug,
        lessonNumber: lesson.number,
        lessonTitle: lesson.title,
        exercise: questions[i],
        mixKey: key,
      });
    }
  }
  if (schedule !== before) await saveSchedule(schedule);
  return { items, mixLeft };
}

export default function TodayReviewScreen({ navigation }: Props) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [counts, setCounts] = useState<TodaysReviewCounts | null>(null);
  const [queue, setQueue] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);
  const [missCounts, setMissCounts] = useState<Record<string, number>>({});
  const [right, setRight] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string; forgotten: boolean } | null>(null);
  const [credit, setCredit] = useState<CreditResult | null>(null);
  const mixLeftRef = useRef<Record<string, { left: number; allCorrect: boolean }>>({});
  const answeredRef = useRef(0);

  const sheetAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(sheetAnim, { toValue: feedback ? 1 : 0, duration: 240, useNativeDriver: true }).start();
  }, [feedback, sheetAnim]);

  const refreshCounts = useCallback(async () => {
    await seedScheduleFromCompletions();
    setCounts(await getTodaysReviewCounts());
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Fresh counts each time the screen comes back into view (e.g.
      // after the flashcards).
      void refreshCounts().then(() => setPhase((p) => (p === "loading" ? "intro" : p)));
    }, [refreshCounts])
  );

  async function start() {
    const { items, mixLeft } = (await unifiedReviewEnabled()) ? { items: await buildUnifiedQueue(), mixLeft: {} } : await buildQueue();
    mixLeftRef.current = mixLeft;
    answeredRef.current = 0;
    setQueue(items);
    setTotal(items.length);
    setRight(0);
    setMissCounts({});
    setCredit(null);
    if (items.length === 0) {
      await finish();
      return;
    }
    setPhase("drilling");
  }

  async function finish() {
    if (answeredRef.current > 0) setCredit(await creditStudy(0, { counts: true }));
    await refreshCounts();
    setPhase("complete");
  }

  function handleChecked(current: Item, correct: boolean, explanation: string) {
    answeredRef.current += 1;
    // Each answer toward today's goal; the fifth also counts the day.
    void creditStudy(QUESTION_MINUTES, { counts: answeredRef.current >= STREAK_MIN_REVIEW_QUESTIONS });
    if (correct) setRight((n) => n + 1);
    // Every review answer goes in the attempts log.
    void recordAttempt(
      current.kind === "concept" ? current.id : `${current.levelPath}:${current.id}`,
      current.concepts ?? current.exercise.meta?.concepts ?? [lessonConceptId(current.levelPath, current.lessonSlug)],
      correct ? "good" : "again",
      "review"
    );

    if (current.kind === "concept") {
      setFeedback({ correct, explanation, forgotten: false });
      return;
    }

    if (current.kind === "mix" && current.mixKey) {
      const key = current.mixKey;
      const before = mixLeftRef.current[key] ?? { left: 1, allCorrect: true };
      const now = { left: before.left - 1, allCorrect: before.allCorrect && correct };
      mixLeftRef.current = { ...mixLeftRef.current, [key]: now };
      void (async () => {
        if (!correct) {
          await addMissedQuestion(current.levelPath, {
            id: current.id,
            lessonSlug: current.lessonSlug,
            lessonNumber: current.lessonNumber,
            lessonTitle: current.lessonTitle,
            exercise: current.exercise,
          });
        }
        if (now.left <= 0) {
          const schedule = await loadSchedule();
          const entry = schedule[key];
          if (entry) await saveSchedule({ ...schedule, [key]: applyMixResult(entry, now.allCorrect) });
        }
      })();
      setFeedback({ correct, explanation, forgotten: false });
      return;
    }

    if (correct) {
      void recordMissedQuestionReviews(current.levelPath, [{ id: current.id, correct: true }]);
      setFeedback({ correct: true, explanation, forgotten: false });
      return;
    }
    const misses = (missCounts[current.id] ?? 0) + 1;
    setMissCounts((prev) => ({ ...prev, [current.id]: misses }));
    const forgotten = misses >= FORGET_AFTER_MISSES;
    if (forgotten) void removeMissedQuestions(current.levelPath, [current.id]);
    setFeedback({ correct: false, explanation, forgotten });
  }

  function goNext() {
    const current = queue[0];
    const again = current?.kind === "missed" && feedback && !feedback.correct && !feedback.forgotten;
    setFeedback(null);
    const rest = queue.slice(1);
    const nextQueue = again && current ? [...rest, current] : rest;
    setQueue(nextQueue);
    if (nextQueue.length === 0) void finish();
  }

  const current = queue[0];
  const sheetTranslateY = sheetAnim.interpolate({ inputRange: [0, 1], outputRange: [260, 0] });
  const questionCount = counts ? counts.missed + counts.mix : 0;

  if (phase === "loading") return <View style={s.screen} />;

  return (
    <View style={s.screen}>
      <ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
        {(phase === "intro" || phase === "complete") && counts && (
          <View>
            {phase === "complete" && (
              <View style={s.doneBox}>
                <Text style={s.doneTitle}>Review complete</Text>
                <Text style={s.body}>
                  {right} right out of {total}.
                </Text>
                <StudyCreditNote result={credit} />
              </View>
            )}
            <Text style={s.kicker}>Today&apos;s review</Text>
            {todaysReviewTotal(counts) === 0 ? (
              <>
                <Text style={s.title}>All caught up</Text>
                <Text style={s.body}>
                  Finish a lesson or save words to your flashcards, and they&apos;ll come back here when they&apos;re due.
                </Text>
              </>
            ) : (
              <>
                <Text style={s.title}>{todaysReviewTotal(counts)} due today</Text>
                <Text style={s.body}>{todaysReviewBreakdown(counts)}</Text>
                <Text style={s.muted}>
                  Questions you missed, plus a few from lessons you finished earlier, so older grammar keeps coming
                  back at longer and longer gaps. Then your flashcards.
                </Text>
                {questionCount > 0 && (
                  <Pressable style={s.bigBtn} onPress={() => void start()}>
                    <Text style={s.bigBtnText}>Start questions ({questionCount})</Text>
                  </Pressable>
                )}
                {counts.cards > 0 && (
                  <Pressable
                    style={questionCount > 0 ? s.outlineBtn : s.bigBtn}
                    onPress={() => navigation.navigate("Flashcards", { lang: "es" })}
                  >
                    <Text style={questionCount > 0 ? s.outlineBtnText : s.bigBtnText}>
                      {questionCount > 0 ? "Then" : "Start"} flashcards ({counts.cards}) →
                    </Text>
                  </Pressable>
                )}
              </>
            )}
            <Pressable style={s.linkRow} onPress={() => navigation.navigate("Review", { lang: "es" })}>
              <Text style={s.link}>Lessons you saved to try again →</Text>
            </Pressable>
          </View>
        )}

        {phase === "drilling" && current && (
          <View>
            <Text style={s.badge}>
              {queue.length} left · {current.kind === "missed" ? "missed question" : "earlier lesson"}
              {current.lessonNumber ? ` · Lesson ${current.lessonNumber}` : ""}
            </Text>
            <ExerciseBlock
              key={`${current.id}-${current.kind}-${missCounts[current.id] ?? 0}`}
              exercise={current.exercise}
              index={0}
              hideIndexLabel
              showInlineFeedback={false}
              lang={current.kind === "concept" ? langForLevelPath(current.levelPath) : LANG}
              onChecked={(correct, explanation) => handleChecked(current, correct, explanation)}
            />
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
            {feedback.correct
              ? "Correct!"
              : current?.kind === "mix"
                ? "Not quite -- added to your missed questions."
                : feedback.forgotten
                  ? "Not quite -- moving on."
                  : "Not quite -- try again later."}
          </Text>
          <Text style={s.feedbackBody}>{feedback.explanation}</Text>
          <Pressable style={[s.bigBtn, { backgroundColor: feedback.correct ? "#16a34a" : "#dc2626" }]} onPress={goNext}>
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
  title: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 6 },
  body: { fontSize: 15, lineHeight: 22, color: "#000000cc", marginBottom: 6 },
  muted: { fontSize: 13.5, lineHeight: 19, color: "#00000080", marginBottom: 6 },
  badge: { fontSize: 12, color: "#00000066", textTransform: "uppercase", marginBottom: 4, fontWeight: "600" },
  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 18 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  outlineBtn: { borderWidth: 1.5, borderColor: "#7A1F1F", borderRadius: 999, paddingVertical: 13, alignItems: "center", marginTop: 12 },
  outlineBtnText: { color: "#7A1F1F", fontWeight: "700", fontSize: 15 },
  linkRow: { marginTop: 22, alignItems: "center" },
  link: { color: "#00000080", fontSize: 14, textDecorationLine: "underline" },
  doneBox: { borderRadius: 14, borderWidth: 1, borderColor: "#16a34a55", backgroundColor: "#16a34a12", padding: 14, marginBottom: 20 },
  doneTitle: { fontSize: 16, fontWeight: "800", color: "#15803d", marginBottom: 4 },
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
