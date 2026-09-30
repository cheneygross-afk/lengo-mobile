// Per-track pool of individual QUESTIONS (not whole lessons -- see
// lessons/review.ts for that) that need another look: ones a student
// answered wrong during a normal lesson, plus ones they explicitly
// flagged with the "send to review" button on the question screen
// (LessonRunnerScreen). This pool is what the every-4th-lesson Review
// Drill (reviewCadence.ts, ReviewDrillScreen) and the review questions at
// the end of each lesson (drill.ts) pull from.
//
// A full snapshot of the exercise is stored, not just a reference back
// into the lesson's static content, so the review drill keeps working
// even if lesson content changes later.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import type { Exercise } from "./types";

export type MissedQuestion = {
  // `${lessonSlug}#${index among that lesson's authored questions}` --
  // stable because checkpoints + exercises always build in the same
  // order. A question reused as review in a later lesson keeps the id
  // from its own lesson, so it dedupes here.
  id: string;
  lessonSlug: string;
  lessonNumber: number;
  lessonTitle: string;
  exercise: Exercise;
  addedAt: number;
  // Spaced-review state. A question that's answered right in review
  // isn't done yet -- it comes back after 1, 3, 7 and then 14 days
  // (REVIEW_INTERVAL_DAYS) and only leaves the pool after the last of
  // those. Missing it again puts it back at the start. Entries saved
  // before this existed have neither field and read as box 0, due now.
  box?: number;
  dueAt?: number;
};

const REVIEW_INTERVAL_DAYS = [1, 3, 7, 14];
const DAY_MS = 24 * 60 * 60 * 1000;

export function isMissedQuestionDue(q: MissedQuestion, now: number = Date.now()): boolean {
  return q.dueAt == null || q.dueAt <= now;
}

function storageKey(levelPath: string): string {
  return `deepend-${levelPath}-missed-questions`;
}

export async function getMissedQuestions(levelPath: string): Promise<MissedQuestion[]> {
  return readJSON<MissedQuestion[]>(storageKey(levelPath), []);
}

export async function addMissedQuestion(
  levelPath: string,
  entry: Omit<MissedQuestion, "addedAt">
): Promise<void> {
  // Speaking is self-assessed and writing isn't graded: nothing to drill.
  if (entry.exercise.type === "speak" || entry.exercise.type === "write") return;
  const list = await getMissedQuestions(levelPath);
  const existing = list.find((q) => q.id === entry.id);
  if (existing) {
    // Missed (or flagged) again -- back to the start of the schedule.
    await writeJSON(
      storageKey(levelPath),
      list.map((q) => (q.id === entry.id ? { ...q, box: 0, dueAt: Date.now() } : q))
    );
    return;
  }
  await writeJSON(storageKey(levelPath), [...list, { ...entry, addedAt: Date.now(), box: 0, dueAt: Date.now() }]);
}

/** Questions from this track that are due for review now, most overdue first. */
export async function getDueMissedQuestions(levelPath: string, now: number = Date.now()): Promise<MissedQuestion[]> {
  const list = await getMissedQuestions(levelPath);
  return list.filter((q) => isMissedQuestionDue(q, now)).sort((a, b) => (a.dueAt ?? 0) - (b.dueAt ?? 0));
}

/**
 * Records review answers. A right answer moves a question one step along
 * REVIEW_INTERVAL_DAYS (and drops it once it's past the last step); a
 * wrong one sends it back to the start, due again right away.
 */
export async function recordMissedQuestionReviews(
  levelPath: string,
  results: { id: string; correct: boolean }[]
): Promise<void> {
  if (!results.length) return;
  const byId = new Map(results.map((r) => [r.id, r.correct]));
  const now = Date.now();
  const list = await getMissedQuestions(levelPath);
  const next: MissedQuestion[] = [];
  for (const q of list) {
    const correct = byId.get(q.id);
    if (correct === undefined) {
      next.push(q);
    } else if (!correct) {
      next.push({ ...q, box: 0, dueAt: now });
    } else {
      const box = (q.box ?? 0) + 1;
      if (box > REVIEW_INTERVAL_DAYS.length) continue;
      next.push({ ...q, box, dueAt: now + REVIEW_INTERVAL_DAYS[box - 1] * DAY_MS });
    }
  }
  await writeJSON(storageKey(levelPath), next);
}

// Used when a question has been missed 3 times in a single review drill
// pass (the student asked to just forget it -- see ReviewDrillScreen).
// Right answers go through recordMissedQuestionReviews instead, which
// spaces the question out rather than dropping it.
export async function removeMissedQuestions(levelPath: string, ids: string[]): Promise<void> {
  if (!ids.length) return;
  const list = await getMissedQuestions(levelPath);
  const idSet = new Set(ids);
  await writeJSON(
    storageKey(levelPath),
    list.filter((q) => !idSet.has(q.id))
  );
}
