// Synced from cheneygross-afk/lengo:src/lib/lessons/en-units.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { withEnglishUnitReview, type EnglishLevelCode } from "./en-unit-reviews";

// Shared plumbing for the English for Spanish speakers levels (see
// en-course.ts): a level is a list of units, each one a run of lessons
// from its own file, numbered in course order across the whole level.
//
// Each unit gets a required review lesson after its last required lesson
// (en-unit-reviews.ts; before the exit test in the unit that ends the
// level), so unit files never write one themselves.
//
// Extra practice (optional) lessons: give a lesson `optional: true` and
// put it at the END of its unit's array (in the unit file, after the
// required lessons, or as a separate export appended in en-<level>.ts:
// `lessons: [...EN_B1_U07, ...EN_B1_U07_EXTRA]`). Optional lessons are
// listed under «Práctica extra (opcional)» in that unit, and don't count
// toward progress, the lesson counts or the "next lesson" path.

export type EnglishUnitDef = { id: string; title: string; description: string; lessons: Lesson[] };

export type EnglishLevelContent = { lessons: Lesson[]; units: UnitOutline[] };

export function buildEnglishLevel(levelPath: string, defs: EnglishUnitDef[]): EnglishLevelContent {
  const code = levelPath.split("/")[1].toUpperCase() as EnglishLevelCode;
  const withReviews = defs
    .filter((u) => u.lessons.length > 0)
    .map((u, i) => ({ ...u, lessons: withEnglishUnitReview(code, { id: u.id, number: i + 1, title: u.title, lessons: u.lessons }) }));
  const lessons = withReviews.flatMap((u) => u.lessons).map((lesson, i) => ({ ...lesson, number: i + 1 }));
  const units: UnitOutline[] = withReviews.map((u, i) => ({
    id: `${levelPath.replace("/", "-")}-${u.id}`,
    // UnitLevelPath only lists the Spanish levels; LessonList never reads
    // this field (it takes levelPath as its own prop).
    levelPath: levelPath as unknown as UnitOutline["levelPath"],
    number: i + 1,
    label: `Unidad ${i + 1} · ${u.title}`,
    title: u.title,
    description: u.description,
    requiredSlugs: u.lessons.filter((l) => !l.optional).map((l) => l.slug),
    optionalSlugs: u.lessons.filter((l) => l.optional).map((l) => l.slug),
  }));
  return { lessons, units };
}
