// The attempts log, the app side (the website's src/lib/attempts.ts):
// every graded answer and lesson pass, append-only, in AsyncStorage,
// synced to the lesson_attempts table when signed in and the unified
// review is on. Mastery per concept and the unified review queue are
// derived from it (lib/curriculum/memory.ts, queue.ts -- synced).
//
// Logging always happens, so the scheduler has history the day it's
// switched on. Using the log for review sits behind
// unifiedReviewEnabled(), the rollout flag (off unless
// EXPO_PUBLIC_UNIFIED_REVIEW=1 or this device has opted in).
import type { Exercise, Lesson } from "@/lib/lessons/types";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { courseOfLevelPath } from "@/lib/courses";
import {
  attemptsFromLegacy,
  conceptCourse,
  dueConcepts,
  gradeFromCorrect,
  masteryFromAttempts,
  mergeAttempts,
  type Attempt,
  type AttemptContext,
  type DueConcept,
  type Grade,
} from "@/lib/curriculum/memory";
import { RECENT_ITEM_DAYS, composeReview, type ReviewCandidate } from "@/lib/curriculum/queue";
import { attemptConcepts, itemIdOf, lessonConceptId, lessonItems } from "@/lib/curriculum/items";
import { curriculumFor } from "@/lib/lessons/curricula";
import { LESSON_SOURCES, type LessonModuleKey } from "@/lib/lessons/registry";
import { getMissedQuestions, isMissedQuestionDue } from "@/lib/lessons/missedQuestions";
import { MIX_STORAGE_KEY, SPACED_INTERVAL_DAYS, type SpacedSchedule } from "@/lib/dailyReview";
import { supabase } from "@/lib/supabase/client";

const LOG_KEY = "deepend-attempts";
const DEVICE_KEY = "deepend-device-id";
const MIGRATED_KEY = "deepend-attempts-migrated";
const SYNCED_KEY = "deepend-attempts-synced-at";
const FLAG_KEY = "deepend-unified-review";
const MAX_ATTEMPTS = 20000;
const SPANISH_TRACKS = ["a1", "a2", "b1", "b2", "c1", "c2", "cosas-coloquiales"];

let flagCache: boolean | null = null;

/** The rollout flag (see the file comment). */
export async function unifiedReviewEnabled(): Promise<boolean> {
  if (process.env.EXPO_PUBLIC_UNIFIED_REVIEW === "1") return true;
  if (flagCache === null) flagCache = (await readJSON<string>(FLAG_KEY, "")) === "1";
  return flagCache;
}

export async function setUnifiedReviewOptIn(on: boolean): Promise<void> {
  flagCache = on;
  await writeJSON(FLAG_KEY, on ? "1" : "");
}

async function deviceId(): Promise<string> {
  let id = await readJSON<string>(DEVICE_KEY, "");
  if (!id) {
    id = `app-${Math.random().toString(36).slice(2, 10)}`;
    await writeJSON(DEVICE_KEY, id);
  }
  return id;
}

export async function loadAttempts(): Promise<Attempt[]> {
  const list = await readJSON<Attempt[]>(LOG_KEY, []);
  return Array.isArray(list) ? list : [];
}

async function saveAttempts(list: Attempt[]): Promise<void> {
  await writeJSON(LOG_KEY, list.slice(-MAX_ATTEMPTS));
}

// Appends are serialised, so two quick answers can't overwrite each other.
let chain: Promise<void> = Promise.resolve();
let counter = 0;
function append(entries: Omit<Attempt, "id">[]): Promise<void> {
  if (!entries.length) return chain;
  chain = chain.then(async () => {
    const dev = await deviceId();
    const list = await loadAttempts();
    for (const e of entries) list.push({ ...e, id: `${dev}-${e.at}-${counter++}` });
    await saveAttempts(list);
  });
  return chain;
}

function contextFor(lesson: Lesson): AttemptContext {
  if (lesson.kind === "level-test") return "level-test";
  if (lesson.kind === "review" || lesson.kind === "unit-review") return "review";
  return "lesson";
}

/** One graded answer to a question from `lesson` (LessonRunner). */
export function recordLessonAttempt(levelPath: string, lesson: Lesson, exercise: Exercise, correct: boolean): Promise<void> {
  if (exercise.type === "speak" || exercise.type === "write") return chain;
  return append([
    {
      item: itemIdOf(lesson, exercise),
      concepts: attemptConcepts(levelPath, lesson, exercise),
      grade: gradeFromCorrect(correct),
      context: contextFor(lesson),
      at: Date.now(),
    },
  ]);
}

/** A passed lesson: a successful review of what it teaches (or reviews). */
export function recordLessonPass(levelPath: string, lesson: Lesson): Promise<void> {
  return append([{ item: lesson.slug, concepts: attemptConcepts(levelPath, lesson), grade: "good", context: "lesson-pass", at: Date.now() }]);
}

/** An answer outside a lesson: review drill, test-out. */
export function recordAttempt(item: string, concepts: string[], grade: Grade, context: AttemptContext): Promise<void> {
  if (!concepts.length) return chain;
  return append([{ item, concepts, grade, context, at: Date.now() }]);
}

/** Once per device, when the unified review is first used: missed
 * questions and the daily-mix schedule become attempts (design 8.5). */
export async function migrateLegacyOnce(): Promise<void> {
  if (await readJSON<number>(MIGRATED_KEY, 0)) return;
  const schedule = await readJSON<SpacedSchedule>(MIX_STORAGE_KEY, {});
  const missed = (
    await Promise.all(
      SPANISH_TRACKS.map(async (lp) =>
        (await getMissedQuestions(lp)).map((q) => ({
          item: `${lp}:${q.id}`,
          concepts: q.exercise.meta?.concepts ?? [lessonConceptId(lp, q.lessonSlug)],
          addedAt: q.addedAt,
        }))
      )
    )
  ).flat();
  const migrated = attemptsFromLegacy({
    missed,
    lessons: Object.values(schedule ?? {}).map((e) => ({
      item: e.slug,
      concepts: [lessonConceptId(e.levelPath, e.slug)],
      box: Math.min(e.box, SPACED_INTERVAL_DAYS.length - 1),
      dueAt: e.dueAt,
    })),
    cards: [],
  });
  await saveAttempts(mergeAttempts(await loadAttempts(), migrated));
  await writeJSON(MIGRATED_KEY, Date.now());
}

/** Two-way sync with lesson_attempts, as on the website; a quiet no-op
 * without a session, the table, or the flag. */
export async function syncAttempts(): Promise<void> {
  if (!(await unifiedReviewEnabled())) return;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  const local = await loadAttempts();
  const since = await readJSON<number>(SYNCED_KEY, 0);
  const fresh = local.filter((a) => a.at > since || a.context === "migrated");
  if (fresh.length) {
    const { error } = await supabase.from("lesson_attempts").upsert(
      fresh.map((a) => ({
        user_id: user.id,
        id: a.id,
        item: a.item,
        concepts: a.concepts,
        grade: a.grade,
        context: a.context,
        at: new Date(a.at).toISOString(),
        ms: a.ms ?? null,
        seed_stability: a.seedStability ?? null,
      })),
      { onConflict: "user_id,id", ignoreDuplicates: true }
    );
    if (error) return;
  }
  const { data, error } = await supabase
    .from("lesson_attempts")
    .select("id, item, concepts, grade, context, at, ms, seed_stability")
    .eq("user_id", user.id)
    .order("at", { ascending: true })
    .limit(MAX_ATTEMPTS);
  if (error || !data) return;
  const remote: Attempt[] = data.map((r) => ({
    id: r.id as string,
    item: r.item as string,
    concepts: r.concepts as string[],
    grade: r.grade as Grade,
    context: r.context as AttemptContext,
    at: Date.parse(r.at as string),
    ...(r.ms != null ? { ms: r.ms as number } : {}),
    ...(r.seed_stability != null ? { seedStability: r.seed_stability as number } : {}),
  }));
  await saveAttempts(mergeAttempts(await loadAttempts(), remote));
  await writeJSON(SYNCED_KEY, Date.now());
}

/** Due concepts for one course only ("es", "zh"): the Spanish and Chinese
 * reviews never mix. */
export async function getDueConcepts(course: string, now: number = Date.now()): Promise<DueConcept[]> {
  return dueConcepts(masteryFromAttempts(await loadAttempts()), now).filter((d) => conceptCourse(d.concept, courseOfLevelPath) === course);
}

/** The question bank by concept, built once from the content the app ships. */
let bank: Map<string, ReviewCandidate[]> | null = null;
function localBank(): Map<string, ReviewCandidate[]> {
  if (bank) return bank;
  bank = new Map();
  for (const key of Object.keys(LESSON_SOURCES) as LessonModuleKey[]) {
    const source = LESSON_SOURCES[key];
    const curriculum = curriculumFor(source.levelPath);
    // Untagged courses: target-language typing as on the website's route.
    const typed = curriculum?.plugin.typedInTarget ?? ((e: Exercise) => e.type === "fill-blank" || e.type === "dictation" || (e.type === "translate" && e.direction === "en-es"));
    for (const lesson of source.lessons) {
      if (lesson.source?.startsWith("assembled:")) continue;
      for (const item of lessonItems(lesson, typed)) {
        if (item.exercise.type === "speak" || item.exercise.type === "write") continue;
        const concepts = item.concepts.length ? item.concepts : [lessonConceptId(source.levelPath, lesson.slug)];
        const candidate: ReviewCandidate = { id: item.id, concepts, exercise: item.exercise, difficulty: item.difficulty, production: item.production, levelPath: source.levelPath };
        for (const c of concepts) bank.set(c, [...(bank.get(c) ?? []), candidate]);
      }
    }
  }
  return bank;
}

/**
 * Today's unified review, composed on the device (the app ships the
 * lesson content, so no server round trip): due concepts, the learner's
 * own due missed questions first for their concept, bank items for the
 * rest, interleaved -- for one course only (TodayReviewScreen for
 * Spanish, behind the flag; ChineseReviewScreen for Chinese).
 */
export async function buildUnifiedReview(course: string, now: number = Date.now()): Promise<ReviewCandidate[]> {
  if (course === "es") await migrateLegacyOnce();
  const due = (await getDueConcepts(course, now)).slice(0, 40);
  const dueSet = new Set(due.map((d) => d.concept));
  const candidates = new Map<string, ReviewCandidate[]>();
  for (const lp of course === "es" ? SPANISH_TRACKS : [])
    for (const q of await getMissedQuestions(lp)) {
      if (!isMissedQuestionDue(q, now)) continue;
      const concepts = q.exercise.meta?.concepts ?? [lessonConceptId(lp, q.lessonSlug)];
      const concept = concepts.find((c) => dueSet.has(c));
      if (concept)
        candidates.set(concept, [...(candidates.get(concept) ?? []), { id: `missed:${lp}:${q.id}`, concepts, exercise: q.exercise, difficulty: 2, production: false, missed: true, levelPath: lp }]);
    }
  const b = localBank();
  for (const d of due) candidates.set(d.concept, [...(candidates.get(d.concept) ?? []), ...(b.get(d.concept) ?? [])]);
  const since = now - RECENT_ITEM_DAYS * 24 * 60 * 60 * 1000;
  const recent = new Set((await loadAttempts()).filter((a) => a.at >= since).map((a) => a.item));
  return composeReview(due, candidates, recent, new Date(now).toDateString());
}
