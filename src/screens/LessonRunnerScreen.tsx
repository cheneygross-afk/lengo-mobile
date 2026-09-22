import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Animated,
  Alert,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { findLessonBySlug, moduleKeyForLesson, LESSON_SOURCES } from "@/lib/lessons/registry";
import type { Exercise } from "@/lib/lessons/types";
import { generateVocabDrills } from "@/lib/lessons/drill";
import ExerciseBlock from "@/components/ExerciseBlock";
import { markLessonCompleted } from "@/lib/lessons/completion";
import { addToReview } from "@/lib/lessons/review";
import { addMissedQuestion } from "@/lib/lessons/missedQuestions";
import { autoEnrollLessonVocabulary } from "@/lib/flashcards/store";

type Props = NativeStackScreenProps<AppStackParamList, "LessonRunner">;

const MIN_DRILL_QUESTIONS = 15;

// Screen 4's lesson player: the whole concept goes on one screen up front
// (every section's reading, however long that runs), then every
// successive screen is a single independent drill question -- no more
// interleaving reading and checkpoints section by section. Each lesson's
// hand-authored checkpoint + review exercises are padded with generated
// vocabulary drills (see lib/lessons/drill.ts) so every lesson drills at
// least MIN_DRILL_QUESTIONS questions.
type Step =
  | { kind: "intro" }
  | { kind: "exercise"; exercise: Exercise; id: string; key: string; number: number }
  | { kind: "complete" };

export default function LessonRunnerScreen({ route, navigation }: Props) {
  const { slug } = route.params;
  // Slugs are unique across every track (Spanish A1 + the Japanese
  // beta's modules), so this resolves regardless of which one the
  // learner came from -- LessonList, Review, or the Japanese level
  // picker.
  const lesson = useMemo(() => findLessonBySlug(slug), [slug]);
  const levelPath = useMemo(() => (lesson ? LESSON_SOURCES[moduleKeyForLesson(lesson)].levelPath : "a1"), [lesson]);

  const drill = useMemo<Exercise[]>(() => {
    if (!lesson) return [];
    const authored: Exercise[] = [];
    lesson.sections.forEach((section) => {
      section.checkpoint?.forEach((ex) => authored.push(ex));
    });
    lesson.exercises.forEach((ex) => authored.push(ex));
    // Pads from the rest of this lesson's own module (registry.ts) when
    // the lesson's own vocabulary isn't enough to reach the minimum on
    // its own -- see generateVocabDrills.
    const trackLessons = LESSON_SOURCES[moduleKeyForLesson(lesson)].lessons;
    const generated = generateVocabDrills(lesson, MIN_DRILL_QUESTIONS - authored.length, trackLessons);
    return [...authored, ...generated];
  }, [lesson]);

  const steps = useMemo<Step[]>(() => {
    if (!lesson) return [];
    const out: Step[] = [{ kind: "intro" }];
    drill.forEach((exercise, i) => {
      // Stable per-question id -- see missedQuestions.ts for why it's
      // built this way and where the "generated questions can shift
      // across runs" caveat comes from.
      out.push({ kind: "exercise", exercise, id: `${lesson.slug}#${i}`, key: `drill-${i}`, number: i + 1 });
    });
    out.push({ kind: "complete" });
    return out;
  }, [lesson, drill]);

  const [stepIndex, setStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finishing, setFinishing] = useState(false);
  const [addedToReview, setAddedToReview] = useState(false);
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  const finishedRef = useRef(false);
  const startedAt = useRef(Date.now());

  const progressAnim = useRef(new Animated.Value(0)).current;
  const sheetAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: steps.length > 1 ? stepIndex / (steps.length - 1) : 1,
      duration: 280,
      useNativeDriver: false,
    }).start();
  }, [stepIndex, steps.length, progressAnim]);

  useEffect(() => {
    Animated.timing(sheetAnim, {
      toValue: feedback ? 1 : 0,
      duration: 240,
      useNativeDriver: true,
    }).start();
  }, [feedback, sheetAnim]);

  const currentStep = steps[stepIndex];

  useEffect(() => {
    if (currentStep?.kind === "complete" && !finishedRef.current && lesson) {
      finishedRef.current = true;
      void finish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, lesson]);

  if (!lesson) {
    return (
      <View style={s.center}>
        <Text>Lesson not found.</Text>
      </View>
    );
  }

  async function finish() {
    if (!lesson) return;
    setFinishing(true);
    const { wasAlreadyDone } = await markLessonCompleted(levelPath, lesson.slug, lesson.number);
    if (!wasAlreadyDone) {
      const examples = lesson.sections.flatMap((sec) => sec.examples ?? []);
      if (examples.length > 0) {
        await autoEnrollLessonVocabulary({
          lessonSlug: lesson.slug,
          level: lesson.level,
          levelPath,
          lessonTitle: lesson.title,
          examples,
        });
      }
    }
    setFinishing(false);
  }

  function goNext() {
    setFeedback(null);
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function handleRedo() {
    finishedRef.current = false;
    setCorrectCount(0);
    setFeedback(null);
    setAddedToReview(false);
    setFlaggedIds(new Set());
    startedAt.current = Date.now();
    setStepIndex(0);
  }

  async function handleAddToReview() {
    if (!lesson) return;
    setAddedToReview(true);
    await addToReview(levelPath, lesson.slug);
  }

  // The little flag under each question -- sends just THIS question to
  // the missed-questions pool (missedQuestions.ts), independent of
  // whether it was answered right or wrong. That pool is also what
  // wrong answers feed automatically (see the exercise step's
  // onChecked below); either way in, the every-4th-lesson Review Drill
  // is what surfaces it again.
  async function handleFlagQuestion(step: Extract<Step, { kind: "exercise" }>) {
    if (!lesson) return;
    setFlaggedIds((prev) => new Set(prev).add(step.id));
    await addMissedQuestion(levelPath, {
      id: step.id,
      lessonSlug: lesson.slug,
      lessonNumber: lesson.number,
      lessonTitle: lesson.title,
      exercise: step.exercise,
    });
  }

  function handleExit() {
    if (stepIndex === 0 || currentStep?.kind === "complete") {
      navigation.goBack();
      return;
    }
    Alert.alert("Exit lesson?", "Your progress in this lesson won't be saved.", [
      { text: "Keep going", style: "cancel" },
      { text: "Exit", style: "destructive", onPress: () => navigation.goBack() },
    ]);
  }

  const progressWidth = progressAnim.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] });
  const sheetTranslateY = sheetAnim.interpolate({ inputRange: [0, 1], outputRange: [260, 0] });

  return (
    <View style={s.screen}>
      <View style={s.topbar}>
        <Pressable hitSlop={12} onPress={handleExit}>
          <Text style={s.closeBtn}>✕</Text>
        </Pressable>
        <View style={s.progressTrack}>
          <Animated.View style={[s.progressFill, { width: progressWidth }]} />
        </View>
      </View>

      <ScrollView style={s.stepArea} contentContainerStyle={s.stepContent} keyboardShouldPersistTaps="handled">
        {currentStep?.kind === "intro" && <IntroStep lesson={lesson} onContinue={goNext} />}

        {currentStep?.kind === "exercise" && (
          <View>
            <Text style={s.badge}>
              Question {currentStep.number} of {drill.length}
            </Text>
            <ExerciseBlock
              key={currentStep.key}
              exercise={currentStep.exercise}
              index={0}
              hideIndexLabel
              showInlineFeedback={false}
              onChecked={(correct, explanation) => {
                if (correct) setCorrectCount((c) => c + 1);
                else void handleFlagQuestion(currentStep);
                setFeedback({ correct, explanation });
              }}
            />
            <Pressable
              style={s.flagBtn}
              hitSlop={8}
              disabled={flaggedIds.has(currentStep.id)}
              onPress={() => handleFlagQuestion(currentStep)}
            >
              <Text style={s.flagBtnText}>
                {flaggedIds.has(currentStep.id) ? "🚩 Sent to review" : "🏳 Send to review"}
              </Text>
            </Pressable>
          </View>
        )}

        {currentStep?.kind === "complete" && (
          <CompleteStep
            lessonTitle={lesson.title}
            correctCount={correctCount}
            totalExercises={drill.length}
            elapsedMs={Date.now() - startedAt.current}
            finishing={finishing}
            addedToReview={addedToReview}
            onDone={() => navigation.goBack()}
            onRedo={handleRedo}
            onAddToReview={handleAddToReview}
          />
        )}
      </ScrollView>

      {feedback && (
        <Animated.View
          style={[
            s.feedbackSheet,
            feedback.correct ? s.feedbackSheetCorrect : s.feedbackSheetWrong,
            { transform: [{ translateY: sheetTranslateY }] },
          ]}
        >
          <Text style={[s.feedbackTitle, feedback.correct ? s.feedbackTitleCorrect : s.feedbackTitleWrong]}>
            {feedback.correct ? "Correct!" : "Not quite."}
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

function IntroStep({
  lesson,
  onContinue,
}: {
  lesson: { level: string; number: number; title: string; sections: { heading: string; body: string[]; examples?: { es: string; en?: string }[] }[] };
  onContinue: () => void;
}) {
  return (
    <View>
      <Text style={s.kicker}>
        {lesson.level} · Lesson {lesson.number}
      </Text>
      <Text style={s.introTitle}>{lesson.title}</Text>
      {lesson.sections.map((section, si) => (
        <View key={si} style={s.introSection}>
          <Text style={s.teachHeading}>{section.heading}</Text>
          {section.body.map((p, pi) => (
            <Text key={pi} style={s.teachBody}>
              {p}
            </Text>
          ))}
          {section.examples?.map((ex, ei) => (
            <View key={ei} style={s.example}>
              <Text style={s.exampleEs}>{ex.es}</Text>
              {ex.en ? <Text style={s.exampleEn}>{ex.en}</Text> : null}
            </View>
          ))}
        </View>
      ))}
      <Pressable style={s.bigBtn} onPress={onContinue}>
        <Text style={s.bigBtnText}>Start drill</Text>
      </Pressable>
    </View>
  );
}

function CompleteStep({
  lessonTitle,
  correctCount,
  totalExercises,
  elapsedMs,
  finishing,
  addedToReview,
  onDone,
  onRedo,
  onAddToReview,
}: {
  lessonTitle: string;
  correctCount: number;
  totalExercises: number;
  elapsedMs: number;
  finishing: boolean;
  addedToReview: boolean;
  onDone: () => void;
  onRedo: () => void;
  onAddToReview: () => void;
}) {
  const totalSeconds = Math.max(1, Math.round(elapsedMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeLabel = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <View style={s.completeWrap}>
      <View style={s.completeBadge}>
        <Text style={{ fontSize: 38 }}>🎉</Text>
      </View>
      <Text style={s.completeTitle}>Lesson complete!</Text>
      <Text style={s.completeSub}>{lessonTitle}</Text>
      <View style={s.statsRow}>
        <View style={s.statPill}>
          <Text style={s.statNum}>
            {correctCount}/{totalExercises}
          </Text>
          <Text style={s.statLabel}>Correct</Text>
        </View>
        <View style={s.statPill}>
          <Text style={s.statNum}>{timeLabel}</Text>
          <Text style={s.statLabel}>Time</Text>
        </View>
      </View>

      <View style={s.secondaryRow}>
        <Pressable style={s.secondaryBtn} onPress={onRedo}>
          <Text style={s.secondaryBtnText}>↻ Redo lesson</Text>
        </Pressable>
        <Pressable style={s.secondaryBtn} onPress={onAddToReview} disabled={addedToReview}>
          <Text style={s.secondaryBtnText}>{addedToReview ? "✓ Added to review" : "+ Add to review"}</Text>
        </Pressable>
      </View>

      <Pressable style={[s.bigBtn, s.completeBtn]} disabled={finishing} onPress={onDone}>
        <Text style={s.bigBtnText}>{finishing ? "Saving…" : "Back to lessons"}</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF6F1", overflow: "hidden" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  topbar: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 18, paddingTop: 8, paddingBottom: 12 },
  closeBtn: { fontSize: 20, color: "#00000055", width: 22, textAlign: "center" },
  progressTrack: { flex: 1, height: 10, backgroundColor: "#00000014", borderRadius: 999, overflow: "hidden" },
  progressFill: { height: "100%", backgroundColor: "#7A1F1F", borderRadius: 999 },

  stepArea: { flex: 1 },
  stepContent: { padding: 20, paddingBottom: 40 },

  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#7A1F1F", marginBottom: 6 },
  introTitle: { fontSize: 24, fontWeight: "800", color: "#000", marginBottom: 18 },
  introSection: { marginBottom: 22 },
  teachHeading: { fontSize: 18, fontWeight: "700", color: "#000", marginBottom: 8 },
  teachBody: { fontSize: 15, lineHeight: 22, color: "#000000dd", marginBottom: 10 },
  example: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#00000012",
  },
  exampleEs: { fontSize: 15, fontWeight: "700", color: "#000" },
  exampleEn: { fontSize: 13, color: "#00000099", marginTop: 2 },

  badge: { fontSize: 12, color: "#00000066", textTransform: "uppercase", marginBottom: 4, fontWeight: "600" },
  flagBtn: { alignSelf: "flex-start", marginTop: 22, paddingVertical: 6, paddingHorizontal: 4 },
  flagBtnText: { fontSize: 12.5, color: "#00000066", fontWeight: "600" },

  bigBtn: { backgroundColor: "#7A1F1F", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 18 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },

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

  completeWrap: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 60 },
  completeBadge: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#7A1F1F",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  completeTitle: { fontSize: 22, fontWeight: "800", color: "#000", marginBottom: 6 },
  completeSub: { fontSize: 14, color: "#00000099", marginBottom: 22, textAlign: "center" },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 20 },
  statPill: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#00000012", borderRadius: 12, paddingVertical: 10, paddingHorizontal: 18, alignItems: "center" },
  statNum: { fontSize: 18, fontWeight: "800", color: "#7A1F1F" },
  statLabel: { fontSize: 11, color: "#00000066", textTransform: "uppercase", marginTop: 2 },
  secondaryRow: { flexDirection: "row", gap: 10, marginBottom: 4 },
  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: "#7A1F1F",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  secondaryBtnText: { color: "#7A1F1F", fontWeight: "700", fontSize: 13 },
  completeBtn: { width: 220 },
});
