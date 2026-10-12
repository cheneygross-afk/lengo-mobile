// Synced from cheneygross-afk/lengo:src/lib/lessons/lessonTime.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Honest lesson times: estimated from what is actually in a lesson
// (reading, examples, each exercise at a normal pace), never from a
// hand-written "12 min". Shared by the course pages and the business tracks.

/** Seconds a learner at a normal pace spends on each kind of item. */
const EXERCISE_SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15,
  "multi-select": 20,
  "listen-choose": 20,
  "fill-blank": 20,
  translate: 30,
  "word-order": 25,
  matching: 30,
  dictation: 30,
  speak: 25,
  write: 240,
};
const EXAMPLE_SECONDS = 6;
const READING_WORDS_PER_MINUTE = 200;

export const exerciseSeconds = (e: Exercise) => EXERCISE_SECONDS[e.type] ?? 20;

/** Realistic seconds for one lesson. */
export function lessonSeconds(lesson: Lesson): number {
  let s = 0;
  for (const sec of lesson.sections) {
    const words = sec.body.join(" ").split(/\s+/).filter(Boolean).length;
    s += (words / READING_WORDS_PER_MINUTE) * 60;
    s += (sec.examples?.length ?? 0) * EXAMPLE_SECONDS;
    s += (sec.checkpoint ?? []).reduce((n, e) => n + exerciseSeconds(e), 0);
  }
  return s + lesson.exercises.reduce((n, e) => n + exerciseSeconds(e), 0);
}

export function estimatedMinutes(lesson: Lesson): number {
  return Math.max(1, Math.round(lessonSeconds(lesson) / 60));
}

/** The lesson with its duration replaced by the honest estimate. */
export function withHonestDuration(lesson: Lesson): Lesson {
  return { ...lesson, duration: `${estimatedMinutes(lesson)} min` };
}
