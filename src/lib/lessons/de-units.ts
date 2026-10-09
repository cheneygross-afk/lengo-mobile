// Synced from cheneygross-afk/lengo:src/lib/lessons/de-units.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";
import type { UnitOutline } from "./units";
import { buildGermanUnitReview, type GermanLevelCode } from "./de-unit-reviews";

// Shared plumbing for the German course levels (see de-course.ts): a level
// is a list of units, each built from its own files (de-<level>-u<NN>.ts:
// the main lessons and the review's writing task; de-<level>-u<NN>-extra.ts:
// optional Extra Practice). A unit runs: its main lessons, its generated
// review (de-unit-reviews.ts), then its extra practice, folded away on the
// level page. Lessons are numbered in course order across the whole level.
// Authoring conventions: docs/german-course/authoring.md.

export type GermanUnitDef = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  extra?: Lesson[];
  writing?: WriteExercise;
};

export type GermanLevelContent = { lessons: Lesson[]; units: UnitOutline[] };

export function buildGermanLevel(levelCode: GermanLevelCode, defs: GermanUnitDef[]): GermanLevelContent {
  const levelPath = `de/${levelCode.toLowerCase()}`;
  const built = defs
    .filter((u) => u.lessons.length > 0)
    .map((u, i) => {
      const main = u.lessons.filter((l) => !l.optional);
      const review = buildGermanUnitReview(levelCode, { number: i + 1, title: u.title, lessons: main }, u.writing);
      const extra = [...u.lessons.filter((l) => l.optional), ...(u.extra ?? [])].map((l) => ({ ...l, optional: true }));
      return { def: u, number: i + 1, lessons: [...main, ...(review ? [review] : []), ...extra] };
    });
  const lessons = built.flatMap((u) => u.lessons).map((lesson, i) => ({ ...lesson, number: i + 1 }));
  const units: UnitOutline[] = built.map(({ def, number, lessons: unitLessons }) => ({
    id: `de-${levelCode.toLowerCase()}-${def.id}`,
    // UnitLevelPath only lists the Spanish levels; LessonList never reads
    // this field (it takes levelPath as its own prop).
    levelPath: levelPath as unknown as UnitOutline["levelPath"],
    number,
    label: `Unit ${number} · ${def.title}`,
    title: def.title,
    description: def.description,
    requiredSlugs: unitLessons.filter((l) => !l.optional).map((l) => l.slug),
    optionalSlugs: unitLessons.filter((l) => l.optional).map((l) => l.slug),
  }));
  return { lessons, units };
}
