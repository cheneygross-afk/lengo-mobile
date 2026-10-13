// Synced from cheneygross-afk/lengo:src/lib/lessons/pt-units.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";
import type { UnitOutline } from "./units";
import { buildPortugueseUnitReview, type PortugueseLevelCode } from "./pt-unit-reviews";

// Shared plumbing for the Brazilian Portuguese course levels (see pt-course.ts): a level
// is a list of units, each built from its own files (pt-<level>-u<NN>.ts:
// the main lessons and the review's writing task; pt-<level>-u<NN>-extra.ts:
// optional Extra Practice). A unit runs: its main lessons, its generated
// review (pt-unit-reviews.ts), then its extra practice, folded away on the
// level page. Lessons are numbered in course order across the whole level.
// Authoring conventions: docs/portuguese-course/authoring.md.

export type PortugueseUnitDef = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  extra?: Lesson[];
  writing?: WriteExercise;
};

export type PortugueseLevelContent = { lessons: Lesson[]; units: UnitOutline[] };

export function buildPortugueseLevel(levelCode: PortugueseLevelCode, defs: PortugueseUnitDef[]): PortugueseLevelContent {
  const levelPath = `pt/${levelCode.toLowerCase()}`;
  const built = defs
    .filter((u) => u.lessons.length > 0)
    .map((u, i) => {
      const main = u.lessons.filter((l) => !l.optional);
      const review = buildPortugueseUnitReview(levelCode, { number: i + 1, title: u.title, lessons: main }, u.writing);
      const extra = [...u.lessons.filter((l) => l.optional), ...(u.extra ?? [])].map((l) => ({ ...l, optional: true }));
      return { def: u, number: i + 1, lessons: [...main, ...(review ? [review] : []), ...extra] };
    });
  const lessons = built.flatMap((u) => u.lessons).map((lesson, i) => ({ ...lesson, number: i + 1 }));
  const units: UnitOutline[] = built.map(({ def, number, lessons: unitLessons }) => ({
    id: `pt-${levelCode.toLowerCase()}-${def.id}`,
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
