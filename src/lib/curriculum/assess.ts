// Synced from cheneygross-afk/lengo:src/lib/curriculum/assess.ts by scripts/sync-content.mjs -- edit it there, not here.
// Assessment from the item bank (docs/curriculum-architecture.md, section
// 7): test-out quizzes drawn with constraints, results broken down by
// concept, and can-do statements measured from what has been learned.
// Unit quizzes and level tests are built at assembly time (assemble.ts);
// these are the run-time pieces.

import type { Exercise, Lesson } from "../lessons/types";
import { lessonItems, type Item } from "./items";
import { selectItems } from "./select";
import type { CoursePlugin } from "./types";

/** Questions in a unit test-out. */
export const TEST_OUT_ITEMS = 10;

/**
 * A unit test-out: questions from the unit's own taught and practice
 * lessons (never its generated reviews), covering each concept the unit
 * teaches, at difficulty 2+, at least 4 of them typed. Speaking and
 * writing are self-assessed, so they can't test anyone out. `seed` makes
 * the draw repeatable; pass a fresh one for each attempt.
 */
export function testOutItems(unitLessons: Lesson[], plugin: Pick<CoursePlugin, "typedInTarget">, seed: string, count = TEST_OUT_ITEMS): Item[] {
  const sources = unitLessons.filter((l) => !l.optional && !l.unitReview && !l.source?.startsWith("assembled:"));
  const pool = sources.flatMap((l) => lessonItems(l, plugin.typedInTarget));
  const taught = [...new Set(sources.flatMap((l) => l.teaches ?? []))];
  return selectItems(
    pool,
    {
      count,
      cover: taught,
      minDifficulty: 2,
      minProduction: 4,
      perConceptMax: 3,
      types: ["multiple-choice", "multi-select", "fill-blank", "translate", "word-order", "matching", "listen-choose", "dictation"],
    },
    seed
  );
}

export type ConceptResult = { concept: string; right: number; total: number };

/** The concepts an exercise tests: its own tags, else the lesson's. */
export function exerciseConcepts(e: Exercise, lesson?: Pick<Lesson, "teaches" | "reviews">): string[] {
  return e.meta?.concepts ?? [...(lesson?.teaches ?? []), ...(lesson?.reviews ?? [])];
}

/** Per-concept right/total over a set of answered questions. */
export function conceptResults(answers: { exercise: Exercise; correct: boolean }[], lesson?: Pick<Lesson, "teaches" | "reviews">): ConceptResult[] {
  const by = new Map<string, ConceptResult>();
  for (const { exercise, correct } of answers) {
    for (const concept of exerciseConcepts(exercise, lesson)) {
      const r = by.get(concept) ?? { concept, right: 0, total: 0 };
      r.total++;
      if (correct) r.right++;
      by.set(concept, r);
    }
  }
  return [...by.values()];
}

/**
 * Concepts that need work: answered wrong more often than right (or every
 * time, for a concept met once). Worst first. A pass mark on the whole
 * test can hide these, which is why the result screen lists them.
 */
export function weakConcepts(results: ConceptResult[]): string[] {
  return results
    .filter((r) => r.right / r.total < 0.5 || (r.total === 1 && r.right === 0))
    .sort((a, b) => a.right / a.total - b.right / b.total)
    .map((r) => r.concept);
}

/** A can-do statement, measurable through the concepts it depends on. */
export type CanDoStatement = {
  id: string;
  skill: "listening" | "reading" | "speaking" | "writing" | "interaction";
  /** "I can introduce myself and ask someone's name." */
  text: string;
  concepts: string[];
};

/** Statements whose every concept is in `learned`. */
export function canDoAchieved(statements: CanDoStatement[], learned: Set<string>): CanDoStatement[] {
  return statements.filter((s) => s.concepts.every((c) => learned.has(c)));
}

/** Concepts taught by the lessons marked complete. */
export function learnedConcepts(lessons: Lesson[], completed: Record<string, boolean>): Set<string> {
  const out = new Set<string>();
  for (const l of lessons) if (completed[l.slug]) for (const c of l.teaches ?? []) out.add(c);
  return out;
}

/** Questions per level in a placement test. */
export const PLACEMENT_ITEMS = 6;
/** Share of a level's questions to get right to move on to the next. */
export const PLACEMENT_PASS = 2 / 3;

/** Of those, how many are recognition (choose, arrange, listen). */
export const PLACEMENT_RECOGNISE = 2;

/**
 * One level's stage of a placement test: questions from the level's
 * taught and practice lessons (never its generated reviews), one per
 * concept as far as they go. Recognition first (PLACEMENT_RECOGNISE of
 * them: choose, arrange or listen), then typed answers at difficulty 2+.
 * Speaking and writing are self-assessed, so they're left out.
 */
export function placementItems(levelLessons: Lesson[], plugin: Pick<CoursePlugin, "typedInTarget">, seed: string, count = PLACEMENT_ITEMS): Item[] {
  const sources = levelLessons.filter((l) => !l.optional && !l.unitReview && !l.source?.startsWith("assembled:"));
  const pool = sources.flatMap((l) => lessonItems(l, plugin.typedInTarget));
  const taught = [...new Set(sources.flatMap((l) => l.teaches ?? []))];
  const recognise = selectItems(
    pool.filter((i) => !i.production),
    { count: Math.min(PLACEMENT_RECOGNISE, count), cover: taught, perConceptMax: 1, types: ["multiple-choice", "multi-select", "word-order", "matching", "listen-choose"] },
    `${seed}-recognise`
  );
  const used = new Set(recognise.map((i) => i.id));
  const produce = selectItems(
    pool.filter((i) => i.production),
    { count: count - recognise.length, cover: taught, minDifficulty: 2, perConceptMax: 1, exclude: used, types: ["fill-blank", "translate", "dictation"] },
    `${seed}-produce`
  );
  return [...recognise, ...produce];
}

/** True if a placement stage was passed: PLACEMENT_PASS of it right. */
export function placementPassed(right: number, total: number): boolean {
  return total > 0 && right >= Math.ceil(total * PLACEMENT_PASS - 1e-9);
}

/**
 * Where to start, from the stages taken in course order (the test stops
 * at the first one failed): the index of the first level not passed, or
 * `results.length` if every stage taken was passed.
 */
export function placementStart(results: { right: number; total: number }[]): number {
  const failed = results.findIndex((r) => !placementPassed(r.right, r.total));
  return failed === -1 ? results.length : failed;
}
