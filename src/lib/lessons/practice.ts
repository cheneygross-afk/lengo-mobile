// Synced from cheneygross-afk/lengo:src/lib/lessons/practice.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Extra practice appended to existing lessons, keyed by slug.
//
// Many C1 and C2 lessons came from splitting a long base lesson into
// "Part X of 6" pieces, and the questions were divided between the pieces,
// so some ended up with one or two. Rather than merging the pieces back
// (which would change slugs, and completion is stored by slug), each thin
// lesson gets new questions here, written for its own content: mostly
// English-to-Spanish prompts, so every required C1/C2 lesson has at least
// PRACTICE_MIN_ITEMS questions and PRACTICE_MIN_PRODUCTION of them ask the
// learner to type Spanish from English (see c1-practice.ts, c2-practice.ts,
// and the check in scripts/content-check).

/** Fewest questions (checkpoints plus the final exercises) a required C1/C2 lesson may have. */
export const PRACTICE_MIN_ITEMS = 5;
/** Fewest English-to-Spanish questions a required C1/C2 lesson may have. */
export const PRACTICE_MIN_PRODUCTION = 2;

/** Every question in a lesson: section checkpoints, then the final exercises. */
export function lessonItems(lesson: Lesson): Exercise[] {
  return [...lesson.sections.flatMap((s) => s.checkpoint ?? []), ...lesson.exercises];
}

/** True for a question that asks for typed Spanish from English: an
 * en-es translation, or a fill-blank asked as a translation (`en`). */
export function isEnglishToSpanish(e: Exercise): boolean {
  return (e.type === "translate" && e.direction === "en-es") || (e.type === "fill-blank" && !!e.en);
}

/** Appends each lesson's extra questions to its exercises. Throws on a
 * slug that isn't in the level, so a renamed lesson fails the build. */
export function addPractice(lessons: Lesson[], practice: Record<string, Exercise[]>): Lesson[] {
  const slugs = new Set(lessons.map((l) => l.slug));
  for (const slug of Object.keys(practice)) {
    if (!slugs.has(slug)) throw new Error(`addPractice: unknown slug "${slug}"`);
  }
  return lessons.map((l) => (practice[l.slug] ? { ...l, exercises: [...l.exercises, ...practice[l.slug]] } : l));
}
