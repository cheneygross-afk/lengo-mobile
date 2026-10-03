// Synced from cheneygross-afk/lengo:src/lib/lessons/en-units.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";

// Shared plumbing for the English for Spanish speakers levels (see
// en-course.ts): a level is a list of units, each one a run of lessons
// from its own file, numbered in course order across the whole level.

export type EnglishUnitDef = { id: string; title: string; description: string; lessons: Lesson[] };

export type EnglishLevelContent = { lessons: Lesson[]; units: UnitOutline[] };

export function buildEnglishLevel(levelPath: string, defs: EnglishUnitDef[]): EnglishLevelContent {
  const lessons = defs.flatMap((u) => u.lessons).map((lesson, i) => ({ ...lesson, number: i + 1 }));
  const units: UnitOutline[] = defs
    .filter((u) => u.lessons.length > 0)
    .map((u, i) => ({
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
