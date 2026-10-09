// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-units.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";
import type { UnitOutline } from "./units";
import { buildFrenchUnitReview, type FrenchLevelCode } from "./fr-unit-reviews";

// Shared plumbing for the French course levels (see fr-course.ts): a level
// is a list of units, each built from its own files (fr-<level>-u<NN>.ts:
// the main lessons and the review's writing task; fr-<level>-u<NN>-extra.ts:
// optional Extra Practice). A unit runs: its main lessons, its generated
// review (fr-unit-reviews.ts), then its extra practice, folded away on the
// level page. Lessons are numbered in course order across the whole level.
// Authoring conventions: docs/french-course/authoring.md.

export type FrenchUnitDef = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  extra?: Lesson[];
  writing?: WriteExercise;
};

export type FrenchLevelContent = { lessons: Lesson[]; units: UnitOutline[] };

// French puts a space before ? ! : ; and inside « ». Writers type an
// ordinary space (or none); it becomes a no-break space here so the mark
// never wraps onto a line of its own.
const NBSP = " ";
function frenchSpacing(text: string): string {
  return text
    .replace(/(\S) ([?!:;»])/g, `$1${NBSP}$2`)
    .replace(/« /g, `«${NBSP}`);
}

function spaced<T>(value: T): T {
  if (typeof value === "string") return frenchSpacing(value) as T;
  if (Array.isArray(value)) return value.map(spaced) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = spaced(v);
    return out as T;
  }
  return value;
}

export function buildFrenchLevel(levelCode: FrenchLevelCode, defs: FrenchUnitDef[]): FrenchLevelContent {
  const levelPath = `fr/${levelCode.toLowerCase()}`;
  const built = defs
    .filter((u) => u.lessons.length > 0)
    .map((u, i) => {
      const main = u.lessons.filter((l) => !l.optional).map(spaced);
      const review = buildFrenchUnitReview(levelCode, { number: i + 1, title: u.title, lessons: main }, u.writing && spaced(u.writing));
      const extra = [...u.lessons.filter((l) => l.optional), ...(u.extra ?? [])].map((l) => ({ ...spaced(l), optional: true }));
      return { def: u, number: i + 1, lessons: [...main, ...(review ? [review] : []), ...extra] };
    });
  const lessons = built.flatMap((u) => u.lessons).map((lesson, i) => ({ ...lesson, number: i + 1 }));
  const units: UnitOutline[] = built.map(({ def, number, lessons: unitLessons }) => ({
    id: `fr-${levelCode.toLowerCase()}-${def.id}`,
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
