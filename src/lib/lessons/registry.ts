// Central lookup across every lesson track the app ships -- the full
// Spanish A1-C2 course (plus the standalone Cosas Coloquiales culture
// module) and the invite-only Japanese beta's four modules. Introduced
// so screens that used to hardcode A1_LESSONS (LessonRunner, Review)
// work for any track without knowing which one a given slug belongs to,
// now that the app has more than one.
import type { Lesson } from "./types";
import { A1_LESSONS } from "./a1";
import { A2_LESSONS } from "./a2";
import { B1_LESSONS } from "./b1";
import { B2_LESSONS } from "./b2";
import { C1_LESSONS } from "./c1";
import { C2_LESSONS } from "./c2";
import { COSAS_COLOQUIALES_LESSONS } from "./c1c2-cosas-coloquiales";
import { JA_ALPHABETS_LESSONS } from "./ja-alphabets";
import { JA_A1_LESSONS } from "./ja-a1";
import { JA_A2_LESSONS } from "./ja-a2";
import { JA_B1_LESSONS } from "./ja-b1";
import { JA_B2_LESSONS } from "./ja-b2";
import { JA_C1_LESSONS } from "./ja-c1";

export type LessonModuleKey =
  | "a1"
  | "a2"
  | "b1"
  | "b2"
  | "c1"
  | "c2"
  | "cosas-coloquiales"
  | "ja-alphabets"
  | "ja-a1"
  | "ja-a2"
  | "ja-b1"
  | "ja-b2"
  | "ja-c1";

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
  "a2": { moduleKey: "a2", levelPath: "a2", title: "Spanish · A2 Elementary", lessons: A2_LESSONS },
  "b1": { moduleKey: "b1", levelPath: "b1", title: "Spanish · B1 Intermediate", lessons: B1_LESSONS },
  "b2": { moduleKey: "b2", levelPath: "b2", title: "Spanish · B2 Upper Intermediate", lessons: B2_LESSONS },
  "c1": { moduleKey: "c1", levelPath: "c1", title: "Spanish · C1 Advanced", lessons: C1_LESSONS },
  "c2": { moduleKey: "c2", levelPath: "c2", title: "Spanish · C2 Mastery", lessons: C2_LESSONS },
  "cosas-coloquiales": {
    moduleKey: "cosas-coloquiales",
    levelPath: "cosas-coloquiales",
    title: "Cosas Coloquiales",
    lessons: COSAS_COLOQUIALES_LESSONS,
  },
  "ja-alphabets": {
    moduleKey: "ja-alphabets",
    levelPath: "ja-alphabets",
    title: "Hiragana & Katakana",
    lessons: JA_ALPHABETS_LESSONS,
  },
  "ja-a1": { moduleKey: "ja-a1", levelPath: "ja-a1", title: "Japanese · A1 Foundations", lessons: JA_A1_LESSONS },
  "ja-a2": { moduleKey: "ja-a2", levelPath: "ja-a2", title: "Japanese · A2 Building Fluency", lessons: JA_A2_LESSONS },
  "ja-b1": { moduleKey: "ja-b1", levelPath: "ja-b1", title: "Japanese · B1 Independent Use", lessons: JA_B1_LESSONS },
  "ja-b2": { moduleKey: "ja-b2", levelPath: "ja-b2", title: "Japanese · B2 Upper Intermediate", lessons: JA_B2_LESSONS },
  "ja-c1": { moduleKey: "ja-c1", levelPath: "ja-c1", title: "Japanese · C1 Advanced", lessons: JA_C1_LESSONS },
};

export const ALL_LEVEL_PATHS: LessonModuleKey[] = [
  "a1",
  "a2",
  "b1",
  "b2",
  "c1",
  "c2",
  "cosas-coloquiales",
  "ja-alphabets",
  "ja-a1",
  "ja-a2",
  "ja-b1",
  "ja-b2",
  "ja-c1",
];

/** Which module a lesson belongs to, from its own `level` field -- lets a
 * caller that only has a Lesson object (not the moduleKey it came from,
 * e.g. after a review-list lookup) still find its levelPath. */
export function moduleKeyForLesson(lesson: Lesson): LessonModuleKey {
  switch (lesson.level) {
    case "A2":
      return "a2";
    case "B1":
      return "b1";
    case "B2":
      return "b2";
    case "C1":
      return "c1";
    case "C2":
      return "c2";
    case "C1/C2":
      return "cosas-coloquiales";
    case "JA-Alphabets":
      return "ja-alphabets";
    case "JA-A1":
      return "ja-a1";
    case "JA-A2":
      return "ja-a2";
    case "JA-B1":
      return "ja-b1";
    case "JA-B2":
      return "ja-b2";
    case "JA-C1":
      return "ja-c1";
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
