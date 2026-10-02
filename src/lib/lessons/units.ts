// Synced from cheneygross-afk/lengo:src/lib/lessons/units.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { A1_LESSONS } from "./a1";
import { A2_LESSONS } from "./a2";
import { B1_LESSONS } from "./b1";
import { B2_LESSONS } from "./b2";
import { C1_LESSONS } from "./c1";
import { C2_LESSONS } from "./c2";
import { COSAS_COLOQUIALES_LESSONS } from "./c1c2-cosas-coloquiales";
import { UNIT_DEFS, type UnitDef } from "./unit-defs";
import {
  SPANISH_LEVELS,
  firstIncompleteRequired,
  pickFurthestNext,
  type CompletedSlugs,
  type SpanishLevelPath,
} from "./levels";

// Units: each Spanish level's lessons grouped into short, named runs of
// roughly 8-15 required lessons ("Unit 4 · Ser vs. estar"), so a level of
// 120-460 lessons reads as ~10-35 units instead of one flat list. Both
// apps show them (the website's level pages, the app's lesson lists) and
// a learner can test out of a unit.
//
// Units follow the final course order from sequencing.ts. A unit is
// defined by the required lesson it starts with; it runs up to the next
// unit's start, so required lessons are always contiguous and none can
// fall between units. Optional Extra Practice lessons (one block per
// level, see sequencing.ts) come in drill groups -- a "*-drill-1" lesson
// and everything up to the next one -- and each group joins the unit
// whose topic it drills (`extras`), or, if no unit claims it, the unit
// just before the block. They're folded away under "Extra practice" in
// both apps.
//
// Everything is looked up by slug and throws on an unknown one, so a
// renamed lesson fails the build (as sequencing.ts does), and the content
// check (scripts/content-check) runs checkUnits() on every level.
//
// This file imports every level's lessons: fine on the server and in the
// app, but website client components should take unit outlines as props
// (unitOutlines) instead of importing it.

export type UnitLevelPath = SpanishLevelPath | "cosas-coloquiales";

/** The levels that have units, in course order (Cosas Coloquiales last). */
export const UNIT_LEVEL_PATHS: UnitLevelPath[] = ["a1", "a2", "b1", "b2", "c1", "c2", "cosas-coloquiales"];

const LESSONS: Record<UnitLevelPath, Lesson[]> = {
  a1: A1_LESSONS,
  a2: A2_LESSONS,
  b1: B1_LESSONS,
  b2: B2_LESSONS,
  c1: C1_LESSONS,
  c2: C2_LESSONS,
  "cosas-coloquiales": COSAS_COLOQUIALES_LESSONS,
};

export type CourseUnit = {
  /** Stable id: "<levelPath>-<slug of its first lesson>". */
  id: string;
  levelPath: UnitLevelPath;
  /** 1-based within the level. */
  number: number;
  /** "Ser vs. estar" */
  title: string;
  /** "Unit 3 · Ser vs. estar" */
  label: string;
  description: string;
  /** The unit's required lessons, in course order. */
  required: Lesson[];
  /** Its optional Extra Practice lessons, in course order. */
  optional: Lesson[];
};

/** A unit without its lesson objects, small enough to pass to a website
 * client component that already has the level's lessons. */
export type UnitOutline = Omit<CourseUnit, "required" | "optional"> & {
  requiredSlugs: string[];
  optionalSlugs: string[];
};

/** Longest a unit may run (in required lessons) before it must be split. */
export const UNIT_MAX_REQUIRED = 15;
export const UNIT_MIN_REQUIRED = 6;

function buildUnits(levelPath: UnitLevelPath, lessons: Lesson[], defs: UnitDef[]): CourseUnit[] {
  const fail = (msg: string): never => {
    throw new Error(`units (${levelPath}): ${msg}`);
  };
  const required = lessons.filter((l) => !l.optional);
  const starts = defs.map((d) => {
    const i = required.findIndex((l) => l.slug === d.start);
    if (i === -1) fail(`"${d.start}" is not a required lesson of the level`);
    return i;
  });
  if (starts[0] !== 0) fail(`the first unit must start at "${required[0]?.slug}"`);
  starts.forEach((s, i) => {
    if (i > 0 && s <= starts[i - 1]) fail(`"${defs[i].start}" starts before the unit above it`);
  });

  const units: CourseUnit[] = defs.map((d, i) => ({
    id: `${levelPath}-${d.start}`,
    levelPath,
    number: i + 1,
    title: d.title,
    label: `Unit ${i + 1} · ${d.title}`,
    description: d.description,
    required: required.slice(starts[i], i + 1 < starts.length ? starts[i + 1] : required.length),
    optional: [],
  }));
  const unitOfRequired = new Map<string, CourseUnit>();
  for (const unit of units) for (const l of unit.required) unitOfRequired.set(l.slug, unit);

  // Optional drill groups: each "*-drill-N" run plus the lessons after it.
  const claimedBy = new Map<string, CourseUnit>();
  defs.forEach((d, i) => {
    for (const head of d.extras ?? []) {
      const lesson = lessons.find((l) => l.slug === head);
      if (!lesson || !lesson.optional) fail(`extra "${head}" is not an optional lesson of the level`);
      if (claimedBy.has(head)) fail(`extra "${head}" is claimed twice`);
      claimedBy.set(head, units[i]);
    }
  });
  let home: CourseUnit | undefined;
  let lastRequired: CourseUnit | undefined;
  for (const lesson of lessons) {
    if (!lesson.optional) {
      lastRequired = unitOfRequired.get(lesson.slug);
      home = undefined;
      continue;
    }
    if (!home || /-drill-1$/.test(lesson.slug)) {
      home = claimedBy.get(lesson.slug) ?? lastRequired ?? units[0];
    }
    home.optional.push(lesson);
  }
  return units;
}

const cache = new Map<UnitLevelPath, CourseUnit[]>();

/** A level's units, in course order. */
export function unitsFor(levelPath: UnitLevelPath): CourseUnit[] {
  let units = cache.get(levelPath);
  if (!units) {
    units = buildUnits(levelPath, LESSONS[levelPath], UNIT_DEFS[levelPath]);
    cache.set(levelPath, units);
  }
  return units;
}

export function isUnitLevelPath(levelPath: string): levelPath is UnitLevelPath {
  return (UNIT_LEVEL_PATHS as string[]).includes(levelPath);
}

/** The unit a lesson belongs to (by slug), if its level has units. */
export function unitOf(levelPath: string, slug: string): CourseUnit | undefined {
  if (!isUnitLevelPath(levelPath)) return undefined;
  return unitsFor(levelPath).find((u) => u.required.some((l) => l.slug === slug) || u.optional.some((l) => l.slug === slug));
}

export function findUnit(levelPath: string, unitId: string): CourseUnit | undefined {
  if (!isUnitLevelPath(levelPath)) return undefined;
  return unitsFor(levelPath).find((u) => u.id === unitId);
}

export function unitOutlines(levelPath: UnitLevelPath): UnitOutline[] {
  return unitsFor(levelPath).map(({ required, optional, ...rest }) => ({
    ...rest,
    requiredSlugs: required.map((l) => l.slug),
    optionalSlugs: optional.map((l) => l.slug),
  }));
}

export type NextLesson = { levelPath: UnitLevelPath; lesson: Lesson; unit: CourseUnit };

/** The next required lesson the learner hasn't completed in a level, in
 * course order, with its unit; null when the level's required path is done. */
export function nextRequiredLesson(level: UnitLevelPath, completedSlugs: CompletedSlugs): NextLesson | null {
  const lesson = firstIncompleteRequired(LESSONS[level], completedSlugs);
  if (!lesson) return null;
  return { levelPath: level, lesson, unit: unitOf(level, lesson.slug)! };
}

/** Where to continue across A1-C2: the next required lesson in the
 * furthest level the learner has started (or the next level, once that
 * one is done; A1's first lesson for a new learner). Cosas Coloquiales
 * is a side module and never counts. Null when all of A1-C2 is done.
 * Slugs are unique across levels, so one merged set of every level's
 * completions is fine. */
export function furthestLevelNext(completedSlugs: CompletedSlugs): NextLesson | null {
  const found = pickFurthestNext(
    SPANISH_LEVELS.map((l) => ({ levelPath: l.levelPath as UnitLevelPath, lessons: LESSONS[l.levelPath] })),
    completedSlugs
  );
  if (!found) return null;
  return { ...found, unit: unitOf(found.levelPath, found.lesson.slug)! };
}

/**
 * Everything the content check verifies about units, as a list of
 * problems (empty when all is well): every lesson of every level is in
 * exactly one unit, units' required lessons are contiguous and in course
 * order, and every unit has a sensible number of required lessons.
 */
export function checkUnits(): string[] {
  const problems: string[] = [];
  for (const levelPath of UNIT_LEVEL_PATHS) {
    let units: CourseUnit[];
    try {
      units = unitsFor(levelPath);
    } catch (e) {
      problems.push((e as Error).message);
      continue;
    }
    const lessons = LESSONS[levelPath];
    const seen = new Map<string, number>();
    for (const unit of units) for (const l of [...unit.required, ...unit.optional]) seen.set(l.slug, (seen.get(l.slug) ?? 0) + 1);
    for (const l of lessons) {
      const n = seen.get(l.slug) ?? 0;
      if (n !== 1) problems.push(`units (${levelPath}): "${l.slug}" is in ${n} units`);
    }
    if (seen.size !== lessons.length) problems.push(`units (${levelPath}): units hold lessons that aren't in the level`);
    const order = units.flatMap((unit) => unit.required.map((l) => l.slug)).join(" ");
    if (order !== lessons.filter((l) => !l.optional).map((l) => l.slug).join(" ")) {
      problems.push(`units (${levelPath}): required lessons aren't contiguous in course order`);
    }
    for (const unit of units) {
      if (unit.optional.some((l) => !l.optional) || unit.required.some((l) => l.optional)) {
        problems.push(`units (${levelPath}): ${unit.label} mixes up required and optional lessons`);
      }
      // The unit's closing review (unit-reviews.ts) doesn't count: it
      // teaches nothing new.
      const n = unit.required.filter((l) => !l.unitReview).length;
      const min = levelPath === "cosas-coloquiales" ? 4 : UNIT_MIN_REQUIRED;
      if (n < min || n > UNIT_MAX_REQUIRED) {
        problems.push(`units (${levelPath}): ${unit.label} has ${n} required lessons (keep it ${min}-${UNIT_MAX_REQUIRED})`);
      }
      const last = unit.required[unit.required.length - 1];
      const review = unit.required.filter((l) => l.unitReview);
      if (levelPath !== "cosas-coloquiales") {
        // Every A1-C2 unit ends with its review; the last unit's comes
        // just before the level test.
        const ok = review.length === 1 && (last.unitReview || unit.required[unit.required.length - 2]?.unitReview);
        if (!ok) problems.push(`units (${levelPath}): ${unit.label} doesn't end with its unit review`);
      }
      if (!unit.required.some((l) => l.exercises.length > 0)) {
        problems.push(`units (${levelPath}): ${unit.label} has no exercises to test out with`);
      }
    }
  }
  return problems;
}
