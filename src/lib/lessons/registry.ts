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
import { JA_C2_LESSONS } from "./ja-c2";
import { ZH_MODULES } from "./zh";
import type { CanDoStatement } from "../curriculum/assess";
import { spanishLevel } from "./levels";

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
  | "ja-c1"
  | "ja-c2"
  | "zh-pinyin"
  | "zh-a1"
  | "zh-a2"
  | "zh-b1"
  | "zh-b2";

export type LessonSource = {
  moduleKey: LessonModuleKey;
  // The `deepend-${levelPath}-*` storage namespace for completion/review
  // tracking (lessons/completion.ts, lessons/review.ts) -- same string as
  // moduleKey today, kept as its own field since that's an implementation
  // detail LessonRunner/Review shouldn't need to know is the same thing.
  levelPath: string;
  title: string;
  lessons: Lesson[];
  // Units for a track that isn't covered by units.ts (the Chinese beta's
  // assembled units, see lessons/zh/index.ts). Spanish levels get theirs
  // from units.ts instead.
  units?: ModuleUnit[];
  // Can-do statements linked to concepts (curriculum-engine courses).
  canDo?: CanDoStatement[];
};

/** A unit as the lesson list shows it, whichever track it comes from. */
export type ModuleUnit = {
  id: string;
  label: string;
  description: string;
  required: Lesson[];
  optional: Lesson[];
  /** Whether the unit offers a "Test out" quiz (the UnitTest screen). */
  testOut: boolean;
};

function zhSource(moduleKey: "zh-pinyin" | "zh-a1" | "zh-a2" | "zh-b1" | "zh-b2", path: string, title: string): LessonSource {
  const mod = ZH_MODULES.find((m) => m.path === path);
  if (!mod) throw new Error(`no Chinese module "${path}"`);
  const bySlug = new Map(mod.lessons.map((l) => [l.slug, l]));
  const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((l): l is Lesson => !!l);
  return {
    moduleKey,
    levelPath: moduleKey,
    title,
    lessons: mod.lessons,
    canDo: mod.canDo,
    units: mod.units.map((u) => ({
      id: u.id,
      label: u.label,
      description: u.description,
      required: pick(u.requiredSlugs),
      optional: pick(u.optionalSlugs),
      testOut: true,
    })),
  };
}

// Every lesson file here is synced from the website repo by
// scripts/sync-content.mjs, so each level's export (A1_LESSONS, etc.) is
// already the finished course: reinforcement and drill lessons woven in,
// the Reading Practice stories dropped and the course order applied,
// exactly as the website builds it. Level names (with their CEFR codes)
// come from the synced levels.ts too.

export const LESSON_SOURCES: Record<LessonModuleKey, LessonSource> = {
  "a1": { moduleKey: "a1", levelPath: "a1", title: spanishLevel("a1").label, lessons: A1_LESSONS },
  "a2": { moduleKey: "a2", levelPath: "a2", title: spanishLevel("a2").label, lessons: A2_LESSONS },
  "b1": { moduleKey: "b1", levelPath: "b1", title: spanishLevel("b1").label, lessons: B1_LESSONS },
  "b2": { moduleKey: "b2", levelPath: "b2", title: spanishLevel("b2").label, lessons: B2_LESSONS },
  "c1": { moduleKey: "c1", levelPath: "c1", title: spanishLevel("c1").label, lessons: C1_LESSONS },
  "c2": { moduleKey: "c2", levelPath: "c2", title: spanishLevel("c2").label, lessons: C2_LESSONS },
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
  "ja-c2": { moduleKey: "ja-c2", levelPath: "ja-c2", title: "Japanese · C2 Mastery", lessons: JA_C2_LESSONS },
  // The Chinese (Mandarin) beta -- see lessons/zh (synced from the website).
  "zh-pinyin": zhSource("zh-pinyin", "pinyin", "Chinese · Pinyin & Tones"),
  "zh-a1": zhSource("zh-a1", "a1", "Chinese · A1 Foundations"),
  "zh-a2": zhSource("zh-a2", "a2", "Chinese · A2 Everyday Chinese"),
  "zh-b1": zhSource("zh-b1", "b1", "Chinese · B1 Independent Chinese"),
  "zh-b2": zhSource("zh-b2", "b2", "Chinese · B2 Upper-Intermediate Chinese"),
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
  "ja-c2",
  "zh-pinyin",
  "zh-a1",
  "zh-a2",
  "zh-b1",
  "zh-b2",
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
    case "JA-C2":
      return "ja-c2";
    case "ZH-Pinyin":
      return "zh-pinyin";
    case "ZH-A1":
      return "zh-a1";
    case "ZH-A2":
      return "zh-a2";
    case "ZH-B1":
      return "zh-b1";
    case "ZH-B2":
      return "zh-b2";
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

/** True for a lesson from the Spanish course (not the Japanese or Chinese
 * betas) -- gates Spanish-only features like vosotros handling and
 * listen-first. */
export function isSpanishLessonLevel(level: string): boolean {
  return !level.startsWith("JA") && !level.startsWith("ZH");
}
