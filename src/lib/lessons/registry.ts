// Central lookup across every lesson track the app ships -- Spanish A1
// (the only Spanish level wired up so far -- see LessonListScreen) plus
// the invite-only Japanese beta's four modules. Introduced so screens
// that used to hardcode A1_LESSONS (LessonRunner, Review) work for any
// track without knowing which one a given slug belongs to, now that the
// app has more than one.
import type { Lesson } from "./types";
import { A1_LESSONS } from "./a1";
import { JA_ALPHABETS_LESSONS } from "./ja-alphabets";
import { JA_A1_LESSONS } from "./ja-a1";
import { JA_A2_LESSONS } from "./ja-a2";
import { JA_B1_LESSONS } from "./ja-b1";

export type LessonModuleKey = "a1" | "ja-alphabets" | "ja-a1" | "ja-a2" | "ja-b1";

export type LessonSource = {
  moduleKey: LessonModuleKey;
  // The `deepend-${levelPath}-*` storage namespace for completion/review
  // tracking (lessons/completion.ts, lessons/review.ts) -- same string as
  // moduleKey today, kept as its own field since that's an implementation
  // detail LessonRunner/Review shouldn't need to know is the same thing.
  levelPath: string;
  title: string;
  lessons: Lesson[];
};

export const LESSON_SOURCES: Record<LessonModuleKey, LessonSource> = {
  "a1": { moduleKey: "a1", levelPath: "a1", title: "Lessons", lessons: A1_LESSONS },
  "ja-alphabets": {
    moduleKey: "ja-alphabets",
    levelPath: "ja-alphabets",
    title: "Hiragana & Katakana",
    lessons: JA_ALPHABETS_LESSONS,
  },
  "ja-a1": { moduleKey: "ja-a1", levelPath: "ja-a1", title: "Japanese · A1 Foundations", lessons: JA_A1_LESSONS },
  "ja-a2": { moduleKey: "ja-a2", levelPath: "ja-a2", title: "Japanese · A2 Building Fluency", lessons: JA_A2_LESSONS },
  "ja-b1": { moduleKey: "ja-b1", levelPath: "ja-b1", title: "Japanese · B1 Independent Use", lessons: JA_B1_LESSONS },
};

export const ALL_LEVEL_PATHS: LessonModuleKey[] = ["a1", "ja-alphabets", "ja-a1", "ja-a2", "ja-b1"];

/** Which module a lesson belongs to, from its own `level` field -- lets a
 * caller that only has a Lesson object (not the moduleKey it came from,
 * e.g. after a review-list lookup) still find its levelPath. */
export function moduleKeyForLesson(lesson: Lesson): LessonModuleKey {
  switch (lesson.level) {
    case "JA-Alphabets":
      return "ja-alphabets";
    case "JA-A1":
      return "ja-a1";
    case "JA-A2":
      return "ja-a2";
    case "JA-B1":
      return "ja-b1";
    default:
      return "a1";
  }
}

/** Searches every track for a lesson by slug -- slugs are unique across
 * the whole app, so the caller never needs to know which track a slug
 * came from (LessonRunner, Review). */
export function findLessonBySlug(slug: string): Lesson | undefined {
  for (const key of ALL_LEVEL_PATHS) {
    const found = LESSON_SOURCES[key].lessons.find((l) => l.slug === slug);
    if (found) return found;
  }
  return undefined;
}
