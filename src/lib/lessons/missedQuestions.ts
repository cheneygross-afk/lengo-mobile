// Per-track pool of individual QUESTIONS (not whole lessons -- see
// lessons/review.ts for that) that need another look: ones a student
// answered wrong during a normal lesson, plus ones they explicitly
// flagged with the "send to review" button on the question screen
// (LessonRunnerScreen). This pool is what the every-4th-lesson Review
// Drill (reviewCadence.ts, ReviewDrillScreen) pulls its questions from.
//
// A full snapshot of the exercise is stored, not just a reference back
// into the lesson's static content -- generated drill questions
// (drill.ts) aren't part of that static content at all, and storing the
// snapshot means the review drill keeps working even if lesson content
// changes later.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import type { Exercise } from "./types";

export type MissedQuestion = {
  // `${lessonSlug}#${index within that lesson's drill run}` -- stable
  // for every hand-authored question (checkpoint + exercises always
  // build in the same order); generated padding questions can shift
  // across runs, which just means a re-flag of one of those occasionally
  // creates a near-duplicate pool entry instead of deduping perfectly --
  // an acceptable rough edge for a beta feature.
  id: string;
  lessonSlug: string;
  lessonNumber: number;
  lessonTitle: string;
  exercise: Exercise;
  addedAt: number;
};

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
  const list = await getMissedQuestions(levelPath);
  if (list.some((q) => q.id === entry.id)) return;
  await writeJSON(storageKey(levelPath), [...list, { ...entry, addedAt: Date.now() }]);
}

// Used both when a question is finally answered right in a review drill
// (it's done, drop it) and when it's been missed 3 times in a single
// review drill pass (the student asked to just forget it -- see
// ReviewDrillScreen).
export async function removeMissedQuestions(levelPath: string, ids: string[]): Promise<void> {
  if (!ids.length) return;
  const list = await getMissedQuestions(levelPath);
  const idSet = new Set(ids);
  await writeJSON(
    storageKey(levelPath),
    list.filter((q) => !idSet.has(q.id))
  );
}
