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
import LessonNextSteps from "@/components/LessonNextSteps";
import type { Exercise, Lesson } from "@/lib/lessons/types";
import { displayTitle } from "@/lib/lessons/levels";
import { unitOf } from "@/lib/lessons/units";
import { authoredQuestions, buildReviewQuestions } from "@/lib/lessons/drill";
import ExerciseBlock from "@/components/ExerciseBlock";
import HighlightableText from "@/components/HighlightableText";
import LessonVideoLink from "@/components/LessonVideoLink";
import TapText from "@/components/TapText";
import { langForLevel, langForLevelPath, ENGLISH_LANG } from "@/lib/speech";
import { markLessonCompleted } from "@/lib/lessons/completion";
import { recordStudyActivity } from "@/lib/streak";
import { addStudyMinutes } from "@/lib/learnerPrefs";
import { parseDurationMinutes } from "@/lib/duration";
import { addToReview } from "@/lib/lessons/review";
import {
  addMissedQuestion,
  getDueMissedQuestions,
  recordMissedQuestionReviews,
  type MissedQuestion,
} from "@/lib/lessons/missedQuestions";
import { autoEnrollLessonVocabulary } from "@/lib/flashcards/store";
import { useAuth } from "@/lib/auth/AuthContext";
import { supabase } from "@/lib/supabase/client";
import {
  deleteLessonHighlight,
  loadLessonHighlights,
  saveLessonHighlight,
  type LessonHighlight,
} from "@/lib/highlights";
import { highlightMarkColor } from "@/lib/highlightColors";
import { LESSON_PASS_PERCENT, lessonPassed } from "@/lib/grading";
import { getSpanishVariety, loadSpanishVariety, type SpanishVariety } from "@/lib/spanishVariety";
import { isVosotrosFocused, requiresVosotros, vosotrosNote } from "@/lib/vosotros";

type Props = NativeStackScreenProps<AppStackParamList, "LessonRunner">;

const MIN_DRILL_QUESTIONS = 15;

// Screen 4's lesson player, section by section like the website's
// LessonRunner: each section's reading gets its own screen, followed by
// that section's checkpoint questions one per screen, so a concept is
// checked right after it's taught. Then come the lesson's end-of-lesson
// exercises, then review questions from earlier lessons (see
// lib/lessons/drill.ts) so every lesson drills at least
// MIN_DRILL_QUESTIONS questions.
type QuestionSource = { slug: string; number: number; title: string };
type Step =
  | { kind: "teach"; sectionIndex: number | null; first: boolean }
  | {
      kind: "exercise";
      exercise: Exercise;
      id: string;
      key: string;
      number: number;
      source: QuestionSource;
      // Set on review questions drawn from earlier lessons.
      review?: { fromMissedPool: boolean };
    }
  | { kind: "complete" };

export default function LessonRunnerScreen({ route, navigation }: Props) {
  const { slug } = route.params;
  // Slugs are unique across every track (Spanish A1 + the Japanese
  // beta's modules), so this resolves regardless of which one the
  // learner came from -- LessonList, Review, or the Japanese level
  // picker.
  const lesson = useMemo(() => findLessonBySlug(slug), [slug]);
  const levelPath = useMemo(() => (lesson ? LESSON_SOURCES[moduleKeyForLesson(lesson)].levelPath : "a1"), [lesson]);
  const lang = useMemo(() => langForLevelPath(levelPath), [levelPath]);
  // The title as the lesson list shows it (one "Part X of Y", see
  // levels.ts displayTitle), and the unit it belongs to.
  const shownTitle = useMemo(
    () => (lesson ? displayTitle(lesson, LESSON_SOURCES[moduleKeyForLesson(lesson)].lessons) : ""),
    [lesson]
  );
  const unitLabel = useMemo(() => (lesson ? unitOf(levelPath, lesson.slug)?.label : undefined), [lesson, levelPath]);

  // Missed questions from this track that are due again, read once when
  // the lesson opens so the review questions don't shift mid-lesson.
  const [dueMissed, setDueMissed] = useState<MissedQuestion[] | null>(null);
  // The learner's Spanish variety, also read once when the lesson opens:
  // Latin America learners skip questions that need a vosotros form (see
  // vosotros.ts), and the question list mustn't change mid-lesson.
  const [variety, setVariety] = useState<SpanishVariety | null>(null);
  useEffect(() => {
    let cancelled = false;
    setDueMissed(null);
    // Don't hold the lesson up for long on a slow connection -- the value
    // saved on this device is almost always already right.
    const varietyLoad = Promise.race([
      loadSpanishVariety(),
      new Promise<SpanishVariety>((resolve) => setTimeout(() => resolve(getSpanishVariety()), 1500)),
    ]).catch(() => getSpanishVariety());
    Promise.all([getDueMissedQuestions(levelPath).catch(() => [] as MissedQuestion[]), varietyLoad]).then(
      ([due, v]) => {
        if (cancelled) return;
        setVariety(v);
        setDueMissed(due);
      }
    );
    return () => {
      cancelled = true;
    };
  }, [levelPath, slug]);

  const skipExercise = useMemo(
    () => (variety === "latam" && lesson && !lesson.level.startsWith("JA") ? requiresVosotros : () => false),
    [variety, lesson]
  );
  const steps = useMemo<Step[]>(() => {
    if (!lesson || dueMissed === null || variety === null) return [];
    const own: QuestionSource = { slug: lesson.slug, number: lesson.number, title: lesson.title };
    const out: Step[] = [];
    // q numbers the questions shown; authored counts every question in
    // the lesson, skipped or not, so ids stay the same as
    // authoredQuestions() order (see missedQuestions.ts).
    let q = 0;
    let authored = 0;
    const pushOwn = (exercise: Exercise) => {
      const index = authored++;
      if (skipExercise(exercise)) return;
      out.push({ kind: "exercise", exercise, id: `${lesson.slug}#${index}`, key: `q-${index}`, number: q + 1, source: own });
      q++;
    };
    if (lesson.sections.length === 0) out.push({ kind: "teach", sectionIndex: null, first: true });
    lesson.sections.forEach((section, si) => {
      out.push({ kind: "teach", sectionIndex: si, first: si === 0 });
      section.checkpoint?.forEach(pushOwn);
    });
    lesson.exercises.forEach(pushOwn);
    const trackLessons = LESSON_SOURCES[moduleKeyForLesson(lesson)].lessons;
    const review = buildReviewQuestions(
      lesson,
      trackLessons,
      dueMissed,
      MIN_DRILL_QUESTIONS - authoredQuestions(lesson).filter((ex) => !skipExercise(ex)).length,
      skipExercise
    );
    review.forEach((r, i) => {
      out.push({
        kind: "exercise",
        exercise: r.exercise,
        id: r.id,
        key: `review-${i}`,
        number: q + 1,
        source: { slug: r.id.slice(0, r.id.lastIndexOf("#")), number: r.fromLessonNumber, title: r.fromLessonTitle },
        review: { fromMissedPool: r.fromMissedPool },
      });
      q++;
    });
    out.push({ kind: "complete" });
    return out;
  }, [lesson, dueMissed, variety, skipExercise]);
  const lessonNote =
    variety === "latam" && lesson && !lesson.level.startsWith("JA") && isVosotrosFocused(lesson)
      ? vosotrosNote(lesson.level)
      : null;
  const questionCount = steps.filter((st) => st.kind === "exercise").length;
  // The lesson after this one in its track, for "continue anyway" when
  // the learner didn't reach the pass mark.
  const nextLesson = useMemo(() => {
    if (!lesson) return null;
    const trackLessons = LESSON_SOURCES[moduleKeyForLesson(lesson)].lessons;
    const i = trackLessons.findIndex((l) => l.slug === lesson.slug);
    return i >= 0 ? trackLessons[i + 1] ?? null : null;
  }, [lesson]);
  // Answers to review questions that came from the missed-questions
  // pool, written back in one go when the lesson finishes.
  const poolResultsRef = useRef<Map<string, boolean>>(new Map());

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

  // Highlighting is an account feature (see src/lib/highlights.ts) --
  // mirrors the website's LessonRunner.tsx: the learner's chosen color
  // is read from profiles.highlight_color once per session/account (same
  // table+column SettingsScreen writes to), and this lesson's saved
  // highlights are (re)loaded whenever the lesson or login state changes.
  const { session } = useAuth();
  const loggedIn = !!session?.user?.id;
  const [highlightColor, setHighlightColor] = useState<string | null>(null);
  const [highlights, setHighlights] = useState<LessonHighlight[]>([]);
  const highlightMark = highlightMarkColor(highlightColor);

  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) {
      setHighlightColor(null);
      return;
    }
    let cancelled = false;
    supabase
      .from("profiles")
      .select("highlight_color")
      .eq("id", userId)
      .single()
      .then(({ data }) => {
        if (!cancelled) setHighlightColor(data?.highlight_color ?? null);
      });
    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  useEffect(() => {
    if (!loggedIn || !lesson) {
      setHighlights([]);
      return;
    }
    loadLessonHighlights(lesson.slug).then(setHighlights);
  }, [lesson?.slug, loggedIn]);

  function highlightsFor(blockKey: string): LessonHighlight[] {
    return highlights.filter((h) => h.blockKey === blockKey);
  }

  async function addHighlight(blockKey: string, blockText: string, start: number, end: number, text: string) {
    if (!lesson) return;
    const saved = await saveLessonHighlight({
      lessonSlug: lesson.slug,
      levelPath,
      blockKey,
      start,
      end,
      text,
      blockText,
      existing: highlightsFor(blockKey),
    });
    if (saved) {
      // Re-fetch rather than patch local state -- a save can merge with
      // and delete other overlapping rows server-side, and re-fetching is
      // the simplest way to stay in sync with what actually landed.
      const fresh = await loadLessonHighlights(lesson.slug);
      setHighlights(fresh);
    }
  }

  async function removeHighlight(id: string) {
    const ok = await deleteLessonHighlight(id);
    if (ok) {
      setHighlights((prev) => prev.filter((h) => h.id !== id));
    }
  }

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
  if (steps.length === 0) return <View style={s.screen} />;

  async function finish() {
    if (!lesson) return;
    setFinishing(true);
    const poolResults = Array.from(poolResultsRef.current, ([id, correct]) => ({ id, correct }));
    poolResultsRef.current = new Map();
    await recordMissedQuestionReviews(levelPath, poolResults);
    // Finishing a lesson, passed or not, counts as studying today: the
    // streak, and the lesson's length toward the daily goal.
    await recordStudyActivity();
    await addStudyMinutes(parseDurationMinutes(lesson.duration));
    // Each question is answered once per run, so this is the first-try
    // score. Below the pass mark the lesson isn't marked complete.
    if (!lessonPassed(correctCount, questionCount)) {
      setFinishing(false);
      return;
    }
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
    poolResultsRef.current = new Map();
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
    // A missed-pool review question is rescheduled at the end of the
    // lesson instead (recordMissedQuestionReviews), not re-added here.
    if (step.review?.fromMissedPool) {
      poolResultsRef.current.set(step.id, false);
      return;
    }
    await addMissedQuestion(levelPath, {
      id: step.id,
      lessonSlug: step.source.slug,
      lessonNumber: step.source.number,
      lessonTitle: step.source.title,
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
        {currentStep?.kind === "teach" && (
          <TeachStep
            lesson={{ ...lesson, title: shownTitle }}
            unitLabel={unitLabel}
            sectionIndex={currentStep.sectionIndex}
            first={currentStep.first}
            note={lessonNote}
            nextIsQuestion={steps[stepIndex + 1]?.kind === "exercise"}
            onContinue={goNext}
            highlightsFor={highlightsFor}
            onAddHighlight={addHighlight}
            onRemoveHighlight={removeHighlight}
            highlightsEnabled={loggedIn}
            markColor={highlightMark}
          />
        )}

        {currentStep?.kind === "exercise" && (
          <View>
            <Text style={s.badge}>
              Question {currentStep.number} of {questionCount}
              {currentStep.review ? ` · Review from lesson ${currentStep.source.number}` : ""}
            </Text>
            <ExerciseBlock
              key={currentStep.key}
              exercise={currentStep.exercise}
              index={0}
              hideIndexLabel
              showInlineFeedback={false}
              lang={lang}
              onChecked={(correct, explanation) => {
                if (correct) setCorrectCount((c) => c + 1);
                if (correct && currentStep.review?.fromMissedPool && !poolResultsRef.current.has(currentStep.id)) {
                  poolResultsRef.current.set(currentStep.id, true);
                }
                if (!correct) void handleFlagQuestion(currentStep);
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
            lessonTitle={shownTitle}
            correctCount={correctCount}
            totalExercises={questionCount}
            passed={lessonPassed(correctCount, questionCount)}
            nextLessonTitle={nextLesson ? displayTitle(nextLesson, LESSON_SOURCES[moduleKeyForLesson(nextLesson)].lessons) : null}
            onNextLesson={() => nextLesson && navigation.replace("LessonRunner", { slug: nextLesson.slug })}
            elapsedMs={Date.now() - startedAt.current}
            finishing={finishing}
            addedToReview={addedToReview}
            onDone={() => navigation.goBack()}
            onRedo={handleRedo}
            onAddToReview={handleAddToReview}
            nextSteps={
              <LessonNextSteps
                levelPath={levelPath}
                lessonSlug={lesson.slug}
                lessonNumber={lesson.number}
                onOpenStory={(storySlug) => navigation.navigate("StoryReader", { slug: storySlug })}
                onOpenGuide={(guideSlug) => navigation.navigate("GrammarGuide", { slug: guideSlug })}
              />
            }
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
          <TapText
            text={feedback.correct ? "Correct!" : "Not quite."}
            lang={lang}
            mode="english"
            style={[s.feedbackTitle, feedback.correct ? s.feedbackTitleCorrect : s.feedbackTitleWrong]}
          />
          <TapText text={feedback.explanation} lang={lang} style={s.feedbackBody} />
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

function TeachStep({
  lesson,
  sectionIndex,
  first,
  note,
  nextIsQuestion,
  onContinue,
  highlightsFor,
  onAddHighlight,
  onRemoveHighlight,
  highlightsEnabled,
  markColor,
  unitLabel,
}: {
  unitLabel?: string;
  lesson: { level: Lesson["level"]; slug: string; number: number; title: string; optional?: boolean; sections: { heading: string; body: string[]; examples?: { es: string; en?: string }[] }[] };
  // Which section this screen teaches; null for a lesson with no sections
  // (a pure review), which just gets the title screen.
  sectionIndex: number | null;
  first: boolean;
  // Shown under the title on the first screen (the Latin America vosotros note).
  note: string | null;
  nextIsQuestion: boolean;
  onContinue: () => void;
  highlightsFor: (blockKey: string) => LessonHighlight[];
  onAddHighlight: (blockKey: string, blockText: string, start: number, end: number, text: string) => void;
  onRemoveHighlight: (id: string) => void;
  highlightsEnabled: boolean;
  markColor: string;
}) {
  const lang = langForLevel(lesson.level);
  return (
    <View>
      {first ? (
        <>
          <Text style={s.kicker}>
            {unitLabel ?? lesson.level} · Lesson {lesson.number}
            {lesson.optional ? " · optional" : ""}
          </Text>
          <TapText text={lesson.title} lang={lang} style={s.introTitle} />
          <LessonVideoLink level={lesson.level} slug={lesson.slug} />
          {note ? (
            <View style={s.noteBox}>
              <TapText text={note} lang={lang} style={s.noteText} />
            </View>
          ) : null}
        </>
      ) : null}
      {(sectionIndex === null ? [] : [sectionIndex]).map((si) => {
        const section = lesson.sections[si];
        return (
        <View key={si} style={s.introSection}>
          <TapText text={section.heading} lang={lang} style={s.teachHeading} />
          {section.body.map((p, pi) => {
            // Same blockKey scheme as the website's LessonRunner.tsx
            // (`sec${i}-body${j}`) -- highlights saved here read back
            // correctly on deependspanish.com and vice versa.
            const blockKey = `sec${si}-body${pi}`;
            return (
              <HighlightableText
                key={pi}
                text={p}
                blockKey={blockKey}
                highlights={highlightsFor(blockKey)}
                enabled={highlightsEnabled}
                markColor={markColor}
                lang={lang}
                textStyle={s.teachBody}
                style={s.teachBodyBlock}
                onAdd={(start, end, selected) => onAddHighlight(blockKey, p, start, end, selected)}
                onRemove={onRemoveHighlight}
              />
            );
          })}
          {section.examples?.map((ex, ei) => {
            // Matches the website's `sec${i}-ex${k}-es` / `-en` keys.
            const esKey = `sec${si}-ex${ei}-es`;
            const enKey = `sec${si}-ex${ei}-en`;
            return (
              <View key={ei} style={s.example}>
                <HighlightableText
                  text={ex.es}
                  blockKey={esKey}
                  highlights={highlightsFor(esKey)}
                  enabled={highlightsEnabled}
                  markColor={markColor}
                  lang={lang}
                  textStyle={s.exampleEs}
                  onAdd={(start, end, selected) => onAddHighlight(esKey, ex.es, start, end, selected)}
                  onRemove={onRemoveHighlight}
                />
                {ex.en ? (
                  <HighlightableText
                    text={ex.en}
                    blockKey={enKey}
                    highlights={highlightsFor(enKey)}
                    enabled={highlightsEnabled}
                    markColor={markColor}
                    lang={ENGLISH_LANG}
                    textStyle={s.exampleEn}
                    style={s.exampleEnBlock}
                    onAdd={(start, end, selected) => onAddHighlight(enKey, ex.en ?? "", start, end, selected)}
                    onRemove={onRemoveHighlight}
                  />
                ) : null}
              </View>
            );
          })}
        </View>
        );
      })}
      <Pressable style={s.bigBtn} onPress={onContinue}>
        <Text style={s.bigBtnText}>{nextIsQuestion ? "Check yourself" : "Continue"}</Text>
      </Pressable>
    </View>
  );
}

function CompleteStep({
  lessonTitle,
  correctCount,
  totalExercises,
  passed,
  nextLessonTitle,
  onNextLesson,
  elapsedMs,
  finishing,
  addedToReview,
  onDone,
  onRedo,
  onAddToReview,
  nextSteps,
}: {
  lessonTitle: string;
  correctCount: number;
  totalExercises: number;
  passed: boolean;
  nextLessonTitle: string | null;
  onNextLesson: () => void;
  elapsedMs: number;
  finishing: boolean;
  addedToReview: boolean;
  onDone: () => void;
  onRedo: () => void;
  onAddToReview: () => void;
  // Links shown once the lesson is passed (see LessonNextSteps).
  nextSteps?: React.ReactNode;
}) {
  const totalSeconds = Math.max(1, Math.round(elapsedMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeLabel = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <View style={s.completeWrap}>
      <View style={[s.completeBadge, !passed && s.completeBadgeRetry]}>
        <Text style={{ fontSize: 38 }}>{passed ? "🎉" : "💪"}</Text>
      </View>
      <Text style={s.completeTitle}>{passed ? "Lesson complete!" : "Not quite there yet"}</Text>
      <Text style={s.completeSub}>
        {passed
          ? lessonTitle
          : `You need ${LESSON_PASS_PERCENT}% to complete ${lessonTitle}. Try it again, or move on and come back later.`}
      </Text>
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

      {passed ? (
        <>
          {nextSteps}
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
        </>
      ) : (
        <>
          <Pressable style={[s.bigBtn, s.completeBtn]} disabled={finishing} onPress={onRedo}>
            <Text style={s.bigBtnText}>↻ Try again</Text>
          </Pressable>
          <View style={[s.secondaryRow, s.retryRow]}>
            {nextLessonTitle ? (
              <Pressable style={s.secondaryBtn} disabled={finishing} onPress={onNextLesson}>
                <Text style={s.secondaryBtnText}>Continue to next lesson</Text>
              </Pressable>
            ) : null}
            <Pressable style={s.secondaryBtn} disabled={finishing} onPress={onDone}>
              <Text style={s.secondaryBtnText}>Back to lessons</Text>
            </Pressable>
          </View>
          <Pressable onPress={onAddToReview} disabled={addedToReview} hitSlop={8}>
            <Text style={s.retryLink}>{addedToReview ? "✓ Added to review" : "+ Add to review"}</Text>
          </Pressable>
        </>
      )}
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
  noteBox: {
    borderWidth: 1,
    borderColor: "#00000018",
    backgroundColor: "#00000008",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: -6,
    marginBottom: 18,
  },
  noteText: { fontSize: 14, lineHeight: 20, color: "#000000cc" },
  teachHeading: { fontSize: 18, fontWeight: "700", color: "#000", marginBottom: 8 },
  // Split from a single Text style so HighlightableText can apply the
  // font styling per word (teachBody) while the paragraph spacing lives
  // on the block's own container (teachBodyBlock) instead of repeating
  // on every word.
  teachBody: { fontSize: 15, lineHeight: 22, color: "#000000dd" },
  teachBodyBlock: { marginBottom: 10 },
  example: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#00000012",
  },
  exampleEs: { fontSize: 15, fontWeight: "700", color: "#000" },
  exampleEn: { fontSize: 13, color: "#00000099" },
  exampleEnBlock: { marginTop: 2 },

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
  completeBadgeRetry: { backgroundColor: "#00000022" },
  retryRow: { marginTop: 14, flexWrap: "wrap", justifyContent: "center" },
  retryLink: { color: "#00000066", fontSize: 13, textDecorationLine: "underline", marginTop: 14 },
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
