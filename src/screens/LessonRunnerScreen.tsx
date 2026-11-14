import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  Alert,
  ActivityIndicator,
  Keyboard,
  Platform,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";
import { findLessonBySlug, isSpanishLessonLevel, moduleKeyForLesson, LESSON_SOURCES } from "@/lib/lessons/registry";
import LessonNextSteps from "@/components/LessonNextSteps";
import TryItYourself from "@/components/TryItYourself";
import type { Exercise, Lesson } from "@/lib/lessons/types";
import { displayTitle } from "@/lib/lessons/levels";
import { unitOf } from "@/lib/lessons/units";
import { LEVEL_EXIT_SLUGS } from "@/lib/lessons/sequencing";
import { authoredQuestions, buildReviewQuestions } from "@/lib/lessons/drill";
import { lessonFlow, stageOf, type BodyPiece, type Stage } from "@/lib/lessons/lessonFlow";
import { capLesson, coreQuestions, practiceRound } from "@/lib/lessons/practiceCap";
import { trackEvent } from "@/lib/analytics";
import ExerciseBlock from "@/components/ExerciseBlock";
import HighlightableText from "@/components/HighlightableText";
import LessonVideoLink from "@/components/LessonVideoLink";
import TapText from "@/components/TapText";
import { isSpanishText, loadSpanishVoiceLists } from "@/lib/spanishVoice";
import {
  langForLevel,
  langForLevelPath,
  preloadSpeech,
  stopAllAudio,
  warmSpeech,
  ENGLISH_LANG,
  type SpeechItem,
} from "@/lib/speech";
import { exerciseSpeech, textSpeech } from "@/lib/lessonAudio";
import { markLessonCompleted } from "@/lib/lessons/completion";
import { creditStudy } from "@/lib/studyDays";
import { loadPrefsLocal } from "@/lib/learnerPrefs";
import { levelColor, colors, fonts } from "@/ui/theme";
import { Confetti, Medal, ScoreRing, TodayStats } from "@/components/LessonCelebration";
import { COURSE_GLYPHS } from "@/lib/courseGlyphs";
import LessonBackdrop from "@/ui/LessonBackdrop";
import { LEVEL_COLORS } from "@/ui/theme";
import { scheduleLessonForReview } from "@/lib/todaysReview";
import { recordLessonAttempt, recordLessonPass } from "@/lib/attempts";
import { parseDurationMinutes } from "@/lib/duration";
import { addToReview } from "@/lib/lessons/review";
import {
  addMissedQuestion,
  getDueMissedQuestions,
  recordMissedQuestionReviews,
  type MissedQuestion,
} from "@/lib/lessons/missedQuestions";
import { autoEnrollLessonVocabulary } from "@/lib/flashcards/store";
import { planCovers, useAuth } from "@/lib/auth/AuthContext";
import { freeSlugs } from "@/lib/freeLessons";
import { courseOfLevelPath } from "@/lib/courses";
import PlanLock from "@/components/PlanLock";
import { NotepadChip, NotepadSheet, useLessonNotepad } from "@/components/LessonNotepad";
import { SPANISH_LEVELS } from "@/lib/lessons/levels";
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
import { setListenFirst, useListenFirst } from "@/lib/listenFirstPref";
import { isLazyLevelPath, lazyLevelIfLoaded, loadLazyLevel, type LazyLevelData } from "@/lib/lessons/lazyLevels";

type Props = NativeStackScreenProps<AppStackParamList, "LessonRunner">;

const LEVEL_TEST_SLUGS = new Set<string>(Object.values(LEVEL_EXIT_SLUGS));

const MIN_DRILL_QUESTIONS = 15;
// The up-front audio wait (see audioReady): "Start now" after a few
// seconds, and never longer than this in all.
const AUDIO_SKIP_AFTER_MS = 5_000;
const AUDIO_MAX_WAIT_MS = 20_000;

// Crawl, walk, run (lessonFlow.ts), as on the website.
const STAGE_LABELS: Record<Stage | "try", string> = {
  try: "✏️ Try it",
  crawl: "🐢 Warm-up",
  walk: "🚶 Guided practice",
  run: "🏃 On your own",
};

// Screen 4's lesson player, section by section like the website's
// LessonRunner: each section's reading gets its own screen, followed by
// that section's checkpoint questions one per screen, so a concept is
// checked right after it's taught. Then come the lesson's end-of-lesson
// exercises, then review questions from earlier lessons (see
// lib/lessons/drill.ts) so every lesson drills at least
// MIN_DRILL_QUESTIONS questions.
type QuestionSource = { slug: string; number: number; title: string };
type Step =
  | {
      kind: "teach";
      sectionIndex: number | null;
      first: boolean;
      // One short card of the section (lessonFlow.ts): its share of the
      // body and of the examples (indexes into section.examples).
      card?: { part: number; parts: number; body: BodyPiece[]; examples: number[] };
    }
  | {
      kind: "exercise";
      exercise: Exercise;
      id: string;
      key: string;
      number: number;
      source: QuestionSource;
      // Set on review questions drawn from earlier lessons.
      review?: { fromMissedPool: boolean };
      // A level test's reading question: the text it asks about, shown
      // above the question since the text has its own screen.
      passage?: string[];
      // A unit review's closing quiz (unit-reviews.ts).
      unitQuiz?: boolean;
      // Where it sits on crawl, walk, run (lessonFlow.ts); "try" = straight
      // after the card it tests.
      stage?: Stage | "try";
      // A keep-practicing question after the lesson's last one
      // (practiceCap.ts): practice on top, not part of the score.
      extra?: boolean;
    }
  // After the last question (at most 20): keep practicing or move on.
  | { kind: "choice" }
  | { kind: "complete" };

export default function LessonRunnerScreen({ route, navigation }: Props) {
  const { slug } = route.params;
  // A French, German, Portuguese, Korean or Italian lesson comes with its levelPath ("fr/a1", "de/a1", "pt/a1", "it/a1"):
  // their slugs can repeat a Spanish one, and its level is loaded on demand
  // (see lessons/lazyLevels.ts) -- until it is, the screen shows a spinner.
  const lazyPath = isLazyLevelPath(route.params.levelPath) ? route.params.levelPath : null;
  const [lazyData, setLazyData] = useState<LazyLevelData | null>(() =>
    lazyPath ? lazyLevelIfLoaded(lazyPath) ?? null : null
  );
  useEffect(() => {
    if (!lazyPath || lazyData?.levelPath === lazyPath) return;
    let cancelled = false;
    loadLazyLevel(lazyPath)?.then((data) => {
      if (!cancelled) setLazyData(data);
    });
    return () => {
      cancelled = true;
    };
  }, [lazyPath, lazyData?.levelPath]);
  // Every other track's slugs are unique across the Spanish, Japanese and
  // Chinese courses, so the slug alone finds the lesson regardless of which
  // one the learner came from -- LessonList, Review, or a level picker.
  // The track is the lesson's level: its levelPath and lessons.
  const track = useMemo<{ levelPath: string; lessons: Lesson[] } | null>(() => {
    if (lazyPath) return lazyData && lazyData.levelPath === lazyPath ? lazyData : null;
    const found = findLessonBySlug(slug);
    if (!found) return null;
    const source = LESSON_SOURCES[moduleKeyForLesson(found)];
    return { levelPath: source.levelPath, lessons: source.lessons };
  }, [slug, lazyPath, lazyData]);
  const lesson = useMemo(
    () => (lazyPath ? track?.lessons.find((l) => l.slug === slug) : findLessonBySlug(slug)),
    [slug, lazyPath, track]
  );
  const levelPath = track?.levelPath ?? "a1";
  const trackLessons = useMemo(() => track?.lessons ?? [], [track]);
  const lang = useMemo(() => langForLevelPath(levelPath), [levelPath]);
  // The level's colour (saffron at the start, deep red at the top), as on
  // the website's lesson pages; sea for modules off the six-level path.
  const levelStep = ["a1", "a2", "b1", "b2", "c1", "c2"].indexOf(levelPath.split("/").pop() ?? "");
  const accent = levelStep < 0 ? colors.sea : levelColor(levelStep);
  // A lesson from this track by slug (the lesson a review question came from).
  const lessonInTrack = (s: string) => (lazyPath ? trackLessons.find((l) => l.slug === s) : findLessonBySlug(s));
  // The title as the lesson list shows it (one "Part X of Y", see
  // levels.ts displayTitle), and the unit it belongs to.
  const shownTitle = useMemo(() => (lesson ? displayTitle(lesson, trackLessons) : ""), [lesson, trackLessons]);
  const unitLabel = useMemo(
    () =>
      lesson
        ? lazyData && lazyPath
          ? lazyData.units.find((u) => [...u.required, ...u.optional].some((l) => l.slug === lesson.slug))?.label
          : unitOf(levelPath, lesson.slug)?.label
        : undefined,
    [lesson, levelPath, lazyData, lazyPath]
  );

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
    () => (variety === "latam" && lesson && isSpanishLessonLevel(lesson.level) ? requiresVosotros : () => false),
    [variety, lesson]
  );
  // At most 20 questions (practiceCap.ts, shared with the website); the
  // rest wait as keep-practicing questions. Same question objects as the
  // full lesson, so ids still follow its authoredQuestions() order.
  const capped = useMemo(() => (lesson ? capLesson(lesson) : null), [lesson]);
  const baseSteps = useMemo<Step[]>(() => {
    if (!lesson || !capped || dueMissed === null || variety === null) return [];
    const core = capped.core;
    const idOf = new Map(authoredQuestions(lesson).map((e, i) => [e, i] as const));
    const own: QuestionSource = { slug: lesson.slug, number: lesson.number, title: lesson.title };
    const out: Step[] = [];
    // q numbers the questions shown; authored counts every question in
    // the lesson, skipped or not, so ids stay the same as
    // authoredQuestions() order (see missedQuestions.ts).
    let q = 0;
    let authored = 0;
    const pushOwn = (exercise: Exercise, passage?: string[], unitQuiz?: boolean, at?: number, stage?: Stage | "try") => {
      const index = at ?? idOf.get(exercise) ?? authored;
      authored++;
      if (skipExercise(exercise)) return;
      out.push({
        kind: "exercise",
        exercise,
        id: `${lesson.slug}#${index}`,
        key: `q-${index}`,
        number: q + 1,
        source: own,
        passage,
        unitQuiz,
        stage,
      });
      q++;
    };
    // Level tests keep their reading screens; every other lesson goes in
    // short portions, each tried straight away, then practice from
    // warm-up to on your own (lessonFlow.ts, shared with the website).
    if (LEVEL_TEST_SLUGS.has(lesson.slug) || core.sections.length === 0) {
      if (core.sections.length === 0) out.push({ kind: "teach", sectionIndex: null, first: true });
      core.sections.forEach((section, si) => {
        out.push({ kind: "teach", sectionIndex: si, first: si === 0 });
        // Level tests (level-tests.ts): a reading text's questions show the text.
        const passage =
          LEVEL_TEST_SLUGS.has(lesson.slug) && section.body.length > 1 && section.checkpoint?.every((e) => e.type === "multiple-choice")
            ? section.body.slice(1)
            : undefined;
        section.checkpoint?.forEach((e) => pushOwn(e, passage));
      });
      core.exercises.forEach((e) => pushOwn(e, undefined, lesson.unitReview));
    } else {
      // Question ids follow the full lesson's authoredQuestions() order
      // (idOf), whichever of its questions the cap keeps.
      for (const st of lessonFlow(core)) {
        if (st.kind === "learn") {
          const all = core.sections[st.section].examples ?? [];
          out.push({
            kind: "teach",
            sectionIndex: st.section,
            first: st.section === 0 && st.part === 0,
            card: { part: st.part, parts: st.parts, body: st.body, examples: st.examples.map((e) => all.indexOf(e)) },
          });
        } else {
          pushOwn(st.exercise, undefined, lesson.unitReview, idOf.get(st.exercise), st.stage);
        }
      }
    }
    const review = buildReviewQuestions(
      lesson,
      trackLessons,
      dueMissed,
      MIN_DRILL_QUESTIONS - authoredQuestions(core).filter((ex) => !skipExercise(ex)).length,
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
    return out;
  }, [lesson, capped, trackLessons, dueMissed, variety, skipExercise]);
  // Keep-practicing rounds the learner chose, inserted before the choice.
  const [extraSteps, setExtraSteps] = useState<Step[]>([]);
  const practiced = useRef(new Set<Exercise>());
  const missedRef = useRef(new Set<Exercise>());
  const steps = useMemo<Step[]>(
    () => (baseSteps.length ? [...baseSteps, ...extraSteps, { kind: "choice" }, { kind: "complete" }] : []),
    [baseSteps, extraSteps]
  );
  const lessonNote =
    variety === "latam" && lesson && isSpanishLessonLevel(lesson.level) && isVosotrosFocused(lesson)
      ? vosotrosNote(lesson.level)
      : null;
  const questionCount = steps.filter((st) => st.kind === "exercise" && !st.extra).length;
  // The lesson after this one in its track, for "continue anyway" when
  // the learner didn't reach the pass mark.
  const nextLesson = useMemo(() => {
    if (!lesson) return null;
    const i = trackLessons.findIndex((l) => l.slug === lesson.slug);
    return i >= 0 ? trackLessons[i + 1] ?? null : null;
  }, [lesson, trackLessons]);
  // Answers to review questions that came from the missed-questions
  // pool, written back in one go when the lesson finishes.
  const poolResultsRef = useRef<Map<string, boolean>>(new Map());

  const [stepIndex, setStepIndex] = useState(0);
  const nextRound = useMemo(
    () => (capped ? practiceRound(capped.extras, coreQuestions(capped.core), missedRef.current, practiced.current) : []),
    // practiced/missed change with each round and answer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [capped, extraSteps, stepIndex]
  );
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string; title?: string } | null>(null);
  // Listen-first mode (Spanish only): questions play their Spanish instead
  // of showing it until answered. Remembered on this device.
  const listenFirstPref = useListenFirst();
  const [correctCount, setCorrectCount] = useState(0);
  const [finishing, setFinishing] = useState(false);
  const [addedToReview, setAddedToReview] = useState(false);
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  // Right answers in a row (the "🔥 3" cheer), and today's streak and
  // minutes for the end screen.
  const [inARow, setInARow] = useState(0);
  // A short cheer at halfway and with one question to go.
  const [cheer, setCheer] = useState<string | null>(null);
  const cheerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [today, setToday] = useState<{ streak: number; minutes: number; goal: number } | null>(null);
  // The round mark on the feedback sheet: pops for right, shakes for wrong.
  const markAnim = useRef(new Animated.Value(0)).current;
  const finishedRef = useRef(false);
  const startedAt = useRef(Date.now());

  const progressAnim = useRef(new Animated.Value(0)).current;
  const sheetAnim = useRef(new Animated.Value(0)).current;

  // Highlighting is an account feature (see src/lib/highlights.ts) --
  // mirrors the website's LessonRunner.tsx: the learner's chosen color
  // is read from profiles.highlight_color once per session/account (same
  // table+column SettingsScreen writes to), and this lesson's saved
  // highlights are (re)loaded whenever the lesson or login state changes.
  const { session, lessonsCourses } = useAuth();
  const loggedIn = !!session?.user?.id;
  // Free opening (lib/freeLessons.ts), or a plan covering the course.
  const course = courseOfLevelPath(levelPath);
  const allowed =
    !lesson ||
    planCovers(lessonsCourses, course) ||
    freeSlugs(levelPath, trackLessons, lazyPath ? lazyData?.units : undefined).has(lesson.slug);
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
    loadHighlights(lesson.slug).then(setHighlights);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.slug, loggedIn, levelPath]);

  // A French, German, Portuguese, Korean or Italian lesson's highlights are its levelPath's; a
  // Spanish one never shows one of theirs that happens to share its slug.
  async function loadHighlights(lessonSlug: string): Promise<LessonHighlight[]> {
    if (lazyPath) return loadLessonHighlights(lessonSlug, levelPath);
    return (await loadLessonHighlights(lessonSlug)).filter(
      (h) =>
        !h.levelPath.startsWith("fr/") &&
        !h.levelPath.startsWith("de/") &&
        !h.levelPath.startsWith("pt/") &&
        !h.levelPath.startsWith("ko/") &&
        !h.levelPath.startsWith("it/")
    );
  }

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
      const fresh = await loadHighlights(lesson.slug);
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

  // The answer sheet covers the bottom of the screen, so once an answer is
  // checked the exercise scrolls up to sit just above it (otherwise a
  // fill-in-the-blank's typed answer and the correction under it were
  // hidden behind the sheet). The keyboard goes away first.
  const scrollRef = useRef<ScrollView>(null);
  const [sheetHeight, setSheetHeight] = useState(300);
  // Room under the step for an open keyboard on Android, so a typed answer
  // can scroll above it (iOS insets the scroll view itself, below).
  const [androidKeyboard, setAndroidKeyboard] = useState(0);
  useEffect(() => {
    if (Platform.OS !== "android") return;
    const show = Keyboard.addListener("keyboardDidShow", (e) => setAndroidKeyboard(e.endCoordinates.height));
    const hide = Keyboard.addListener("keyboardDidHide", () => setAndroidKeyboard(0));
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);
  useEffect(() => {
    if (!feedback) return;
    Keyboard.dismiss();
    const t = setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 120);
    return () => clearTimeout(t);
  }, [feedback, sheetHeight]);

  useEffect(() => {
    if (!feedback) return;
    markAnim.setValue(0);
    Animated.timing(markAnim, { toValue: 1, duration: 420, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
  }, [feedback, markAnim]);

  const currentStep = steps[stepIndex];

  // Every sound a step can make (lib/lessonAudio.ts).
  const stepSpeech = (step: Step | undefined): SpeechItem[] => {
    if (!lesson || !step) return [];
    if (step.kind === "exercise") {
      return [...(step.passage ?? []).flatMap((p) => textSpeech(p, lang)), ...exerciseSpeech(step.exercise, lang)];
    }
    if (step.kind !== "teach") return [];
    const out: SpeechItem[] = [...textSpeech(shownTitle, lang)];
    if (step.first) {
      out.push(...textSpeech(lesson.title, lang));
      if (lesson.summary) out.push(...textSpeech(lesson.summary, lang));
    }
    if (step.sectionIndex === null) return out;
    const section = lesson.sections[step.sectionIndex];
    if (!section) return out;
    out.push(...textSpeech(section.heading, lang));
    const body = step.card ? step.card.body.map((b) => b.text) : section.body;
    for (const text of body) out.push(...textSpeech(text, lang));
    section.examples?.forEach((ex, ei) => {
      if (step.card && !step.card.examples.includes(ei)) return;
      out.push(...textSpeech(ex.es, lang, true));
      if (ex.en && isSpanishText(ex.en)) out.push(...textSpeech(ex.en, lang));
    });
    return out;
  };

  // Every clip the lesson needs is made ready before it starts (a short
  // "Getting the audio ready" wait, at most AUDIO_MAX_WAIT_MS), so no tap
  // inside the lesson waits on a recording or a download.
  const [audioReady, setAudioReady] = useState(false);
  const [audioProgress, setAudioProgress] = useState({ done: 0, total: 0 });
  const [audioSkip, setAudioSkip] = useState(false);
  const audioKey = lesson && steps.length > 0 ? `${levelPath}/${lesson.slug}/${variety}` : null;
  useEffect(() => {
    if (!audioKey) return;
    let live = true;
    setAudioReady(false);
    setAudioSkip(false);
    setAudioProgress({ done: 0, total: 0 });
    const skip = setTimeout(() => live && setAudioSkip(true), AUDIO_SKIP_AFTER_MS);
    const giveUp = setTimeout(() => live && setAudioReady(true), AUDIO_MAX_WAIT_MS);
    void (async () => {
      if (lang === "es-ES" || lang === "es-US") await loadSpanishVoiceLists().catch(() => {});
      if (!live) return;
      const items = steps.flatMap((st) => stepSpeech(st));
      await preloadSpeech(items, (done, total) => live && setAudioProgress({ done, total }), () => !live);
      if (live) setAudioReady(true);
    })();
    return () => {
      live = false;
      clearTimeout(skip);
      clearTimeout(giveUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioKey]);

  // The step on screen and the next one are loaded into players, so their
  // taps play at once.
  const startedTracked = useRef<string | null>(null);
  useEffect(() => {
    if (!audioReady || !lesson || startedTracked.current === lesson.slug) return;
    startedTracked.current = lesson.slug;
    trackEvent("lesson_started", { level: levelPath, lesson_slug: lesson.slug }, `/lessons/${levelPath}/${lesson.slug}`);
  }, [audioReady, lesson, levelPath]);

  useEffect(() => {
    if (!audioReady) return;
    warmSpeech([...stepSpeech(steps[stepIndex]), ...stepSpeech(steps[stepIndex + 1])]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioReady, stepIndex, steps]);

  useEffect(() => {
    // The lesson counts as done at the choice after its last question;
    // keep-practicing rounds are on top.
    if ((currentStep?.kind === "choice" || currentStep?.kind === "complete") && !finishedRef.current && lesson) {
      finishedRef.current = true;
      void finish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, lesson]);

  // The lesson's notepad: kept here, above the steps, so the same note
  // stays with the learner from step to step (components/LessonNotepad).
  const notepad = useLessonNotepad({
    levelPath,
    lessonSlug: lesson?.slug ?? "",
    lessonTitle: shownTitle,
    levelLabel:
      SPANISH_LEVELS.find((l) => l.levelPath === levelPath)?.name ?? (lesson ? shortLevel(lesson.level) : ""),
  });
  const [notepadOpen, setNotepadOpen] = useState(false);

  if (lazyPath && !track) {
    return (
      <View style={s.center}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!lesson) {
    return (
      <View style={s.center}>
        <Text>Lesson not found.</Text>
      </View>
    );
  }
  if (!allowed) return <PlanLock title={shownTitle} course={course} />;
  if (steps.length === 0) return <View style={s.screen} />;

  async function finish() {
    if (!lesson) return;
    setFinishing(true);
    const poolResults = Array.from(poolResultsRef.current, ([id, correct]) => ({ id, correct }));
    poolResultsRef.current = new Map();
    await recordMissedQuestionReviews(levelPath, poolResults);
    // Finishing a lesson, passed or not, counts as studying today: the
    // streak, and the lesson's length toward the daily goal.
    const credit = await creditStudy(parseDurationMinutes(lesson.duration), { counts: true });
    const prefs = await loadPrefsLocal();
    setToday({ streak: credit.streak.current, minutes: credit.minutesToday, goal: prefs.dailyGoalMinutes });
    // Each question is answered once per run, so this is the first-try
    // score. Below the pass mark the lesson isn't marked complete.
    if (!lessonPassed(correctCount, questionCount)) {
      setFinishing(false);
      return;
    }
    trackEvent("lesson_completed", { level: levelPath, lesson_slug: lesson.slug }, `/lessons/${levelPath}/${lesson.slug}`);
    const { wasAlreadyDone } = await markLessonCompleted(levelPath, lesson.slug, lesson.number);
    await recordLessonPass(levelPath, lesson);
    // Into the daily review mix, so this lesson's grammar comes back in a
    // few days and then at longer and longer gaps.
    await scheduleLessonForReview(levelPath, lesson.slug);
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
    // Nothing from this step may be heard on the next one.
    stopAllAudio();
    setFeedback(null);
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  // Keep practicing: a round of 4-6 questions (practiceCap.ts) slotted in
  // where the choice is now, so the next screen is its first question.
  function keepPracticing() {
    if (!nextRound.length) return;
    stopAllAudio();
    for (const e of nextRound) practiced.current.add(e);
    const roundNo = extraSteps.filter((st) => st.kind === "exercise" && st.number === 1).length + 1;
    const round: Step[] = nextRound.map((exercise, i) => ({
      kind: "exercise",
      exercise,
      id: `${lesson?.slug}#extra`,
      key: `extra-${roundNo}-${i}`,
      number: i + 1,
      source: { slug: lesson?.slug ?? "", number: lesson?.number ?? 0, title: lesson?.title ?? "" },
      stage: stageOf(exercise),
      extra: true,
    }));
    setExtraSteps((prev) => [...prev, ...round]);
  }
  function moveOn() {
    stopAllAudio();
    setFeedback(null);
    setStepIndex(steps.length - 1);
  }

  function handleRedo() {
    stopAllAudio();
    finishedRef.current = false;
    setExtraSteps([]);
    practiced.current = new Set();
    missedRef.current = new Set();
    setCorrectCount(0);
    setInARow(0);
    setToday(null);
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
    if (stepIndex === 0 || currentStep?.kind === "complete" || currentStep?.kind === "choice" || finishedRef.current) {
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
      <LessonBackdrop accent={accent} glyph={COURSE_GLYPHS[course][0]} />
      <NotepadSheet
        visible={notepadOpen}
        onClose={() => setNotepadOpen(false)}
        onOpenAll={async () => {
          await notepad.flush();
          setNotepadOpen(false);
          // Pushed on top: this lesson stays as it is underneath, so going
          // back lands on the same step with the same answers.
          navigation.navigate("Notes", {
            course,
            fromLesson: lesson ? { slug: lesson.slug, levelPath } : undefined,
          });
        }}
        lessonTitle={shownTitle}
        accent={accent}
        pad={notepad}
      />
      <View style={s.topbar}>
        <Pressable hitSlop={12} onPress={handleExit}>
          <Text style={s.closeBtn}>✕</Text>
        </Pressable>
        <View style={s.progressTrack}>
          <Animated.View style={[s.progressFill, { width: progressWidth, backgroundColor: accent }]} />
        </View>
        {inARow >= 3 && currentStep?.kind !== "complete" && (
          <View style={s.inARow} accessibilityLabel={`${inARow} right in a row`}>
            <Text style={s.inARowText}>🔥 {inARow}</Text>
          </View>
        )}
        <NotepadChip onPress={() => setNotepadOpen(true)} hasText={notepad.hasText} accent={accent} />
        {isSpanishLessonLevel(lesson.level) && (
          <Pressable
            hitSlop={10}
            onPress={() => void setListenFirst(!listenFirstPref)}
            style={[s.listenToggle, listenFirstPref && s.listenToggleOn]}
            accessibilityRole="switch"
            accessibilityState={{ checked: listenFirstPref }}
            accessibilityLabel="Listen first: hide the Spanish in questions and play it instead"
          >
            <Text style={[s.listenToggleText, listenFirstPref && s.listenToggleTextOn]}>🎧 Listen</Text>
          </Pressable>
        )}
      </View>
      {/* Where the learner is, on every step: the lesson's level and name. */}
      <View style={s.lessonHeader} accessibilityLabel={`Level ${shortLevel(lesson.level)}, ${shownTitle}`}>
        <View style={[s.levelBadge, { backgroundColor: accent }]}>
          <Text style={s.levelBadgeText}>{shortLevel(lesson.level)}</Text>
        </View>
        <View style={s.lessonHeaderTitle}>
          <TapText text={shownTitle} lang={lang} style={s.lessonHeaderTitleText} />
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        style={s.stepArea}
        contentContainerStyle={[
          s.stepContent,
          feedback ? { paddingBottom: sheetHeight + 24 } : androidKeyboard > 0 && { paddingBottom: androidKeyboard + 40 },
        ]}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
      >
        {!audioReady && (
          <View style={s.audioCard} accessibilityLiveRegion="polite">
            <Text style={s.audioIcon}>🎧</Text>
            <Text style={s.audioTitle}>Getting the audio ready…</Text>
            <Text style={s.audioSub}>So every word plays instantly once you're in the lesson.</Text>
            <View style={s.audioTrack}>
              <View
                style={[
                  s.audioFill,
                  {
                    backgroundColor: accent,
                    width: `${audioProgress.total > 0 ? Math.round((audioProgress.done / audioProgress.total) * 100) : 0}%`,
                  },
                ]}
              />
            </View>
            {audioProgress.total > 0 ? (
              <Text style={s.audioCount}>
                {audioProgress.done} / {audioProgress.total}
              </Text>
            ) : null}
            {audioSkip ? (
              <Pressable hitSlop={10} onPress={() => setAudioReady(true)}>
                <Text style={s.audioSkip}>Start now</Text>
              </Pressable>
            ) : null}
          </View>
        )}
        {audioReady && currentStep?.kind === "teach" && (
          <TeachStep
            accent={accent}
            glyph={COURSE_GLYPHS[course][2]}
            levelStep={levelStep}
            lesson={{ ...lesson, title: shownTitle }}
            unitLabel={unitLabel}
            sectionIndex={currentStep.sectionIndex}
            first={currentStep.first}
            card={currentStep.card}
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

        {audioReady && currentStep?.kind === "exercise" && (
          <View>
            <Text style={s.badge}>
              {currentStep.extra
                ? `🔁 Extra practice · ${currentStep.number} of ${nextRoundSize(extraSteps)}`
                : `${currentStep.stage ? `${STAGE_LABELS[currentStep.stage]} · ` : ""}Question ${currentStep.number} of ${questionCount}`}
              {currentStep.review ? ` · Review from lesson ${currentStep.source.number}` : ""}
              {currentStep.unitQuiz ? " · Unit quiz" : ""}
            </Text>
            {currentStep.passage && (
              <View style={s.passage}>
                {currentStep.passage.map((p, pi) => (
                  <TapText key={pi} text={p} lang={lang} style={s.passageText} />
                ))}
              </View>
            )}
            <ExerciseBlock
              key={currentStep.key}
              exercise={currentStep.exercise}
              index={0}
              hideIndexLabel
              showInlineFeedback={false}
              lang={lang}
              level={lesson.level}
              listenFirst={listenFirstPref && isSpanishLessonLevel(lesson.level)}
              onChecked={(correct, explanation, title) => {
                if (currentStep.extra) {
                  if (correct) missedRef.current.delete(currentStep.exercise);
                  else missedRef.current.add(currentStep.exercise);
                  setInARow((n) => (correct ? n + 1 : 0));
                  const from = lesson;
                  if (from) void recordLessonAttempt(lazyPath ? levelPath : LESSON_SOURCES[moduleKeyForLesson(from)].levelPath, from, currentStep.exercise, correct);
                  setFeedback({ correct, explanation, title });
                  return;
                }
                if (!correct && currentStep.source.slug === lesson?.slug) missedRef.current.add(currentStep.exercise);
                if (correct) setCorrectCount((c) => c + 1);
                setInARow((n) => (correct ? n + 1 : 0));
                if (questionCount >= 6) {
                  const text =
                    currentStep.number === Math.ceil(questionCount / 2)
                      ? "Halfway there!"
                      : currentStep.number === questionCount - 1
                        ? "One to go!"
                        : null;
                  if (text) {
                    setCheer(text);
                    if (cheerTimer.current) clearTimeout(cheerTimer.current);
                    cheerTimer.current = setTimeout(() => setCheer(null), 2200);
                  }
                }
                // The attempts log (lib/attempts.ts), against the lesson the
                // question came from (review questions can be older ones).
                const from = currentStep.source.slug === lesson?.slug ? lesson : lessonInTrack(currentStep.source.slug);
                if (from)
                  void recordLessonAttempt(
                    lazyPath ? levelPath : LESSON_SOURCES[moduleKeyForLesson(from)].levelPath,
                    from,
                    currentStep.exercise,
                    correct
                  );
                if (correct && currentStep.review?.fromMissedPool && !poolResultsRef.current.has(currentStep.id)) {
                  poolResultsRef.current.set(currentStep.id, true);
                }
                if (!correct) void handleFlagQuestion(currentStep);
                setFeedback({ correct, explanation, title });
              }}
            />
            {!currentStep.extra && (
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
            )}
          </View>
        )}

        {audioReady && currentStep?.kind === "choice" && (
          <PracticeChoice
            accent={accent}
            moreCount={nextRound.length}
            afterRound={extraSteps.length > 0}
            onKeepPracticing={keepPracticing}
            onMoveOn={moveOn}
          />
        )}

        {audioReady && currentStep?.kind === "complete" && !loggedIn && (
          // Tried a lesson before making an account (Login's "Try a lesson
          // first"): the account is what saves it and opens the next one.
          <View style={s.choiceCard}>
            <Text style={s.choiceTitle}>Save your progress</Text>
            <Text style={s.choiceBody}>Create your free account to keep this lesson and go on to the next one.</Text>
            <Pressable style={[s.choicePrimary, { backgroundColor: accent }]} onPress={() => navigation.navigate("Signup" as never)}>
              <Text style={s.choicePrimaryText}>Create my free account →</Text>
            </Pressable>
          </View>
        )}

        {audioReady && currentStep?.kind === "complete" && (
          <CompleteStep
            lessonTitle={shownTitle}
            correctCount={correctCount}
            totalExercises={questionCount}
            passed={lessonPassed(correctCount, questionCount)}
            nextLessonTitle={nextLesson ? displayTitle(nextLesson, trackLessons) : null}
            onNextLesson={() =>
              nextLesson &&
              navigation.replace("LessonRunner", lazyPath ? { slug: nextLesson.slug, levelPath } : { slug: nextLesson.slug })
            }
            elapsedMs={Date.now() - startedAt.current}
            accent={accent}
            today={today}
            tryIt={
              // A unit review already has its own writing task.
              lesson.unitReview ? undefined : (
                <TryItYourself
                  lessonSlug={lesson.slug}
                  level={lesson.level}
                  title={shownTitle}
                  summary={lesson.summary}
                  lang={lang}
                  accent={accent}
                />
              )
            }
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

      {cheer && (
        <View style={s.cheerWrap} pointerEvents="none" accessibilityLiveRegion="polite">
          <View style={[s.cheer, { borderColor: accent }]}>
            <Text style={s.cheerText}>✨ {cheer}</Text>
          </View>
        </View>
      )}

      {feedback && (
        <Animated.View
          style={[
            s.feedbackSheet,
            feedback.correct ? s.feedbackSheetCorrect : s.feedbackSheetWrong,
            { transform: [{ translateY: sheetTranslateY }] },
          ]}
          onLayout={(e) => setSheetHeight(Math.round(e.nativeEvent.layout.height))}
        >
          <View style={s.feedbackHead}>
            <Animated.View
              style={[
                s.feedbackMark,
                { backgroundColor: feedback.correct ? "#16a34a" : "#dc2626" },
                {
                  transform: feedback.correct
                    ? [{ scale: markAnim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.4, 1.2, 1] }) }]
                    : [{ translateX: markAnim.interpolate({ inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1], outputRange: [0, -5, 5, -3, 3, 0] }) }],
                },
              ]}
            >
              <Text style={s.feedbackMarkText}>{feedback.correct ? "✓" : "✗"}</Text>
            </Animated.View>
            <TapText
              text={feedback.title ?? (feedback.correct ? "Correct!" : "Not quite.")}
              lang={lang}
              mode="english"
              style={[s.feedbackTitle, feedback.correct ? s.feedbackTitleCorrect : s.feedbackTitleWrong]}
            />
            {feedback.correct && (
              <Animated.View style={[s.plusOne, { transform: [{ scale: markAnim.interpolate({ inputRange: [0, 0.6, 1], outputRange: [0.3, 1.15, 1] }) }] }]}>
                <Text style={s.plusOneText}>+1</Text>
              </Animated.View>
            )}
          </View>
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
  card,
  note,
  nextIsQuestion,
  onContinue,
  highlightsFor,
  onAddHighlight,
  onRemoveHighlight,
  highlightsEnabled,
  markColor,
  unitLabel,
  accent,
  glyph,
  levelStep,
}: {
  unitLabel?: string;
  // The level's colour, a big letter of the language and the level's place
  // on the six-level path, for the first screen's banner.
  accent: string;
  glyph: string;
  levelStep: number;
  lesson: { level: Lesson["level"]; slug: string; number: number; title: string; summary?: string; optional?: boolean; sections: { heading: string; body: string[]; examples?: { es: string; en?: string }[] }[] };
  // Which section this screen teaches; null for a lesson with no sections
  // (a pure review), which just gets the title screen.
  sectionIndex: number | null;
  first: boolean;
  // One short card of the section; the whole section when absent.
  card?: { part: number; parts: number; body: BodyPiece[]; examples: number[] };
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
  // Example glosses that may be Spanish definitions (B2 and up).
  const spanishGlosses = (lang === "es-ES" || lang === "es-US") && !/^(A1|A2|B1)$/.test(lesson.level);
  return (
    <View>
      {first ? (
        <>
          {/* The lesson's banner: a wash of the level's colour, a big letter of
              the language as artwork and the six-level path, as on the website. */}
          <View style={[s.banner, { backgroundColor: `${accent}1F`, borderColor: `${accent}40` }]}>
            <View style={[s.bannerStripe, { backgroundColor: accent }]} />
            <Text style={[s.bannerGlyph, { color: `${accent}38` }]} accessible={false} importantForAccessibility="no">
              {glyph}
            </Text>
            <Text style={[s.kicker, { color: colors.ink }]}>
              {unitLabel ?? lesson.level} · Lesson {lesson.number}
              {lesson.optional ? " · optional" : ""}
            </Text>
            <TapText text={lesson.title} lang={lang} style={s.introTitle} />
            {lesson.summary ? <TapText text={lesson.summary} lang={lang} style={s.introSummary} /> : null}
            {levelStep >= 0 && (
              <View style={s.pathRow} accessible={false}>
                {LEVEL_COLORS.map((c, li) => (
                  <View
                    key={c}
                    style={[
                      s.pathDot,
                      li === levelStep && s.pathDotNow,
                      { backgroundColor: li <= levelStep ? c : colors.ink, opacity: li === levelStep ? 1 : li < levelStep ? 0.5 : 0.15 },
                    ]}
                  />
                ))}
              </View>
            )}
          </View>
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
          <View style={s.teachHeadingRow}>
            <View style={[s.teachHeadingBar, { backgroundColor: accent }]} />
            <TapText text={section.heading} lang={lang} style={s.teachHeading} />
          </View>
          {card && card.parts > 1 ? (
            <Text style={s.cardCount}>
              {card.part + 1} / {card.parts}
            </Text>
          ) : null}
          {(card ? card.body : section.body.map((text, from) => ({ text, from, whole: true }))).map((piece, pi) => {
            // Same blockKey scheme as the website's LessonRunner.tsx
            // (`sec${i}-body${j}`) -- highlights saved here read back
            // correctly on deependspanish.com and vice versa. A paragraph
            // split across cards can't hold highlights.
            const p = piece.text;
            const blockKey = piece.whole ? `sec${si}-body${piece.from}` : `sec${si}-body${piece.from}-part${pi}`;
            return (
              <HighlightableText
                key={pi}
                text={p}
                blockKey={blockKey}
                highlights={piece.whole ? highlightsFor(blockKey) : []}
                enabled={highlightsEnabled && piece.whole}
                markColor={markColor}
                lang={lang}
                mixed
                textStyle={s.teachBody}
                style={s.teachBodyBlock}
                onAdd={(start, end, selected) => onAddHighlight(blockKey, p, start, end, selected)}
                onRemove={onRemoveHighlight}
              />
            );
          })}
          {section.examples?.map((ex, ei) => {
            if (card && !card.examples.includes(ei)) return null;
            // Matches the website's `sec${i}-ex${k}-es` / `-en` keys.
            const esKey = `sec${si}-ex${ei}-es`;
            const enKey = `sec${si}-ex${ei}-en`;
            return (
              <View key={ei} style={[s.example, { borderLeftColor: accent }]}>
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
                    // The learner's own language, not voiced; but from B2 up
                    // many Spanish-course glosses are Spanish definitions,
                    // which are tap-to-hear like the body (word by word, so
                    // English stays plain). Below B2 glosses are English by
                    // design and short ones ("It's 3:10.") fool the detector.
                    lang={spanishGlosses && isSpanishText(ex.en) ? lang : null}
                    mixed
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
  accent,
  today,
  tryIt,
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
  accent: string;
  today: { streak: number; minutes: number; goal: number } | null;
  // The "Try it yourself" writing box (see TryItYourself).
  tryIt?: React.ReactNode;
}) {
  const totalSeconds = Math.max(1, Math.round(elapsedMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeLabel = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <View style={s.completeWrap}>
      {passed && <Confetti />}
      <View>
        <ScoreRing
          percent={totalExercises ? Math.round((correctCount / totalExercises) * 100) : 100}
          color={passed ? accent : "#dc2626"}
        />
        {passed && <Medal percent={totalExercises ? Math.round((correctCount / totalExercises) * 100) : 100} />}
      </View>
      <Text style={s.completeTitle}>{passed ? "🎉 Lesson complete!" : "💪 Not quite there yet"}</Text>
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

      {passed && today && <TodayStats streak={today.streak} minutesToday={today.minutes} goal={today.goal} color={accent} />}

      {tryIt}

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

// How many questions the latest keep-practicing round has.
function nextRoundSize(extra: Step[]): number {
  for (let i = extra.length - 1; i >= 0; i--) {
    const st = extra[i];
    if (st.kind === "exercise" && st.number === 1) return extra.length - i;
  }
  return extra.length;
}

// After the lesson's last question: keep practicing the idea (a round of
// 4-6 more) or move on to the end of the lesson.
function PracticeChoice({
  accent,
  moreCount,
  afterRound,
  onKeepPracticing,
  onMoveOn,
}: {
  accent: string;
  moreCount: number;
  afterRound: boolean;
  onKeepPracticing: () => void;
  onMoveOn: () => void;
}) {
  return (
    <View style={s.choiceCard}>
      <Text style={s.choiceTitle}>{afterRound ? "Nice work. More practice?" : "Want more practice on this?"}</Text>
      <Text style={s.choiceBody}>
        {moreCount > 0
          ? `Do ${moreCount} more questions on the same idea, or move on when you feel ready.`
          : "That's all the practice this lesson has. On to the next one!"}
      </Text>
      {moreCount > 0 && (
        <Pressable style={[s.choiceSecondary, { borderColor: accent }]} onPress={onKeepPracticing}>
          <Text style={[s.choiceSecondaryText, { color: accent }]}>🔁 Keep practicing ({moreCount} more)</Text>
        </Pressable>
      )}
      <Pressable style={[s.choicePrimary, { backgroundColor: accent }]} onPress={onMoveOn}>
        <Text style={s.choicePrimaryText}>I&apos;m ready to move on →</Text>
      </Pressable>
    </View>
  );
}

// The level as the learner knows it: "A1" for "FR-A1", "Pinyin" for "ZH-Pinyin".
function shortLevel(level: string): string {
  return level.replace(/^[A-Z]{2}-/, "");
}

const s = StyleSheet.create({
  audioCard: {
    marginTop: 24,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.92)",
    borderWidth: 1,
    borderColor: "rgba(42,21,19,0.08)",
    alignItems: "center",
  },
  audioIcon: { fontSize: 30 },
  audioTitle: { marginTop: 8, fontSize: 20, color: "#2A1513", fontFamily: fonts.display, textAlign: "center" },
  audioSub: { marginTop: 4, fontSize: 14, color: "rgba(42,21,19,0.65)", textAlign: "center" },
  audioTrack: {
    marginTop: 18,
    height: 8,
    width: "80%",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "rgba(42,21,19,0.12)",
  },
  audioFill: { height: "100%", borderRadius: 4 },
  audioCount: { marginTop: 8, fontSize: 12, color: "rgba(42,21,19,0.5)", fontVariant: ["tabular-nums"] },
  audioSkip: { marginTop: 14, fontSize: 14, color: "rgba(42,21,19,0.6)", textDecorationLine: "underline" },
  passage: { borderWidth: 1, borderColor: "#2A151318", borderRadius: 10, padding: 12, backgroundColor: "#fff", marginBottom: 14, gap: 8 },
  passageText: { fontSize: 15, lineHeight: 22, color: "#2A1513dd" },
  screen: { flex: 1, backgroundColor: "#FAF7F2", overflow: "hidden" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  topbar: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 18, paddingTop: 8, paddingBottom: 12 },
  closeBtn: { fontSize: 20, color: "#2A151355", width: 22, textAlign: "center" },
  progressTrack: { flex: 1, height: 10, backgroundColor: "#2A151314", borderRadius: 999, overflow: "hidden" },
  progressFill: { height: "100%", backgroundColor: "#8B0000", borderRadius: 999 },
  lessonHeader: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 18, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#2A151310" },
  levelBadge: { backgroundColor: "#8B0000", borderRadius: 6, paddingHorizontal: 7, paddingVertical: 2 },
  levelBadgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },
  lessonHeaderTitle: { flex: 1 },
  lessonHeaderTitleText: { fontSize: 14, fontWeight: "600", color: "#2A1513cc" },

  stepArea: { flex: 1 },
  cardCount: { fontSize: 12, color: colors.ink, opacity: 0.55, marginBottom: 8, fontVariant: ["tabular-nums"] },
  stepContent: { padding: 20, paddingBottom: 40 },
  // Room to scroll a long answer (writing feedback) clear of the sheet.

  kicker: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase", color: "#8B0000", marginBottom: 6 },
  introTitle: { fontSize: 28, lineHeight: 34, fontFamily: fonts.display, color: "#2A1513", marginBottom: 10 },
  introSummary: { fontSize: 15, lineHeight: 22, color: "#2A1513B3", marginBottom: 16 },
  introSection: { marginBottom: 22 },
  noteBox: {
    borderWidth: 1,
    borderColor: "#2A151318",
    backgroundColor: "#2A151308",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: -6,
    marginBottom: 18,
  },
  noteText: { fontSize: 14, lineHeight: 20, color: "#2A1513cc" },
  banner: { borderRadius: 24, borderWidth: 1, padding: 20, paddingTop: 26, marginBottom: 22, overflow: "hidden" },
  bannerStripe: { position: "absolute", top: 0, left: 0, right: 0, height: 5 },
  bannerGlyph: { position: "absolute", right: -6, top: -18, fontFamily: fonts.display, fontSize: 120, lineHeight: 140, transform: [{ rotate: "-8deg" }] },
  pathRow: { flexDirection: "row", gap: 5, marginTop: 4 },
  pathDot: { width: 18, height: 6, borderRadius: 3 },
  pathDotNow: { width: 34 },
  teachHeadingRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 8 },
  teachHeadingBar: { width: 4, alignSelf: "stretch", borderRadius: 2 },
  cheerWrap: { position: "absolute", top: 70, left: 0, right: 0, alignItems: "center" },
  cheer: { backgroundColor: "#2A1513", borderRadius: 999, borderWidth: 3, paddingHorizontal: 16, paddingVertical: 8 },
  cheerText: { color: "#fff", fontWeight: "800", fontSize: 14 },
  teachHeading: { fontSize: 19, fontFamily: fonts.display, color: "#2A1513", flexShrink: 1 },
  // Split from a single Text style so HighlightableText can apply the
  // font styling per word (teachBody) while the paragraph spacing lives
  // on the block's own container (teachBodyBlock) instead of repeating
  // on every word.
  teachBody: { fontSize: 15, lineHeight: 22, color: "#2A1513dd" },
  teachBodyBlock: { marginBottom: 10 },
  // Example cards: white, with a stripe in the level's colour down the
  // left edge (as on the website).
  example: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    paddingLeft: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderColor: "#2A151312",
    shadowColor: "#2A1513",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  exampleEs: { fontSize: 16, fontWeight: "700", color: "#2A1513" },
  exampleEn: { fontSize: 13, color: "#2A151399" },
  exampleEnBlock: { marginTop: 2 },

  badge: { fontSize: 12, color: "#2A151366", textTransform: "uppercase", marginBottom: 4, fontWeight: "600" },
  choiceCard: { backgroundColor: "#fff", borderRadius: 20, borderWidth: 1, borderColor: "#2A15131A", padding: 20, marginTop: 12 },
  choiceTitle: { fontFamily: fonts.display, fontSize: 24, color: "#2A1513", marginBottom: 6 },
  choiceBody: { fontSize: 15, lineHeight: 22, color: "#2A1513B3", marginBottom: 6 },
  choicePrimary: { borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 12 },
  choicePrimaryText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  choiceSecondary: { borderRadius: 999, borderWidth: 2, paddingVertical: 13, alignItems: "center", marginTop: 12 },
  choiceSecondaryText: { fontWeight: "700", fontSize: 16 },
  flagBtn: { alignSelf: "flex-start", marginTop: 22, paddingVertical: 6, paddingHorizontal: 4 },
  flagBtnText: { fontSize: 12.5, color: "#2A151366", fontWeight: "600" },

  bigBtn: { backgroundColor: "#8B0000", borderRadius: 999, paddingVertical: 15, alignItems: "center", marginTop: 18 },
  bigBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  listenToggle: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#2A151322",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  listenToggleOn: { backgroundColor: "#8B0000", borderColor: "#8B0000" },
  listenToggleText: { fontSize: 14, opacity: 0.5 },
  listenToggleTextOn: { opacity: 1 },
  // The answer sheet slides up with rounded top corners and a soft shadow.
  feedbackSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
    borderTopWidth: 3,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: "#2A1513",
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: -4 },
    elevation: 8,
  },
  feedbackSheetCorrect: { backgroundColor: "#EEF8F0", borderTopColor: "#16a34a" },
  feedbackSheetWrong: { backgroundColor: "#FCEEEE", borderTopColor: "#dc2626" },
  plusOne: { marginLeft: "auto", backgroundColor: "#16a34a", borderRadius: 999, paddingHorizontal: 9, paddingVertical: 2 },
  plusOneText: { color: "#fff", fontWeight: "800", fontSize: 13 },
  feedbackHead: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 6 },
  feedbackMark: { width: 26, height: 26, borderRadius: 13, alignItems: "center", justifyContent: "center" },
  feedbackMarkText: { color: "#fff", fontWeight: "800", fontSize: 14 },
  feedbackTitle: { fontSize: 16, fontWeight: "800" },
  inARow: { backgroundColor: "#FCEFD6", borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3 },
  inARowText: { fontSize: 13, fontWeight: "800", color: "#2A1513" },
  feedbackTitleCorrect: { color: "#15803d" },
  feedbackTitleWrong: { color: "#b91c1c" },
  feedbackBody: { fontSize: 13.5, color: "#2A1513cc", lineHeight: 19 },

  completeWrap: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 60 },
  retryRow: { marginTop: 14, flexWrap: "wrap", justifyContent: "center" },
  retryLink: { color: "#2A151366", fontSize: 13, textDecorationLine: "underline", marginTop: 14 },
  completeTitle: { fontFamily: fonts.display, fontSize: 26, color: "#2A1513", marginBottom: 6 },
  completeSub: { fontSize: 14, color: "#2A151399", marginBottom: 22, textAlign: "center" },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 20 },
  statPill: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#2A151312", borderRadius: 12, paddingVertical: 10, paddingHorizontal: 18, alignItems: "center" },
  statNum: { fontSize: 18, fontWeight: "800", color: "#8B0000" },
  statLabel: { fontSize: 11, color: "#2A151366", textTransform: "uppercase", marginTop: 2 },
  secondaryRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 4 },
  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: "#8B0000",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  secondaryBtnText: { color: "#8B0000", fontWeight: "700", fontSize: 13 },
  completeBtn: { width: 220 },
});
