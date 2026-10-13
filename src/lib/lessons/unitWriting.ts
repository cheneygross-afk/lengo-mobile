// Synced from cheneygross-afk/lengo:src/lib/lessons/unitWriting.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Extra writing tasks inside a unit's ordinary lessons, so every unit asks
// the learner to write at least three times: the unit review's task plus
// these. Each level keeps them in its own file (writing-tasks-<level>.ts for
// Spanish, <course>-<level>-writing.ts for the other courses, and
// zh/writing-<level>.ts for Chinese), keyed by the slug of the lesson
// they're added to the end of. Kept apart from the lesson files so the
// course threads can keep editing those freely.

/** Writing tasks by the slug of the lesson they end. */
export type UnitWriting = Record<string, WriteExercise[]>;

/** The lessons, with each lesson's extra writing tasks added after its exercises. */
export function withUnitWriting(lessons: Lesson[], writing: UnitWriting): Lesson[] {
  return lessons.map((lesson) => {
    const extra = writing[lesson.slug];
    return extra?.length ? { ...lesson, exercises: [...lesson.exercises, ...extra] } : lesson;
  });
}
