// Synced from cheneygross-afk/lengo:src/lib/lessons/level-tests.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";
import type { LevelTest } from "./level-test-authoring";
import { LEVEL_TEST_A1 } from "./level-test-a1";
import { LEVEL_TEST_A2 } from "./level-test-a2";
import { LEVEL_TEST_B1 } from "./level-test-b1";
import { LEVEL_TEST_B2 } from "./level-test-b2";
import { LEVEL_TEST_C1 } from "./level-test-c1";
import { LEVEL_TEST_C2 } from "./level-test-c2";

// Level tests: the last lesson of each core level (its exit test, see
// LEVEL_EXIT_SLUGS in sequencing.ts) is a 40-60 question, four-skill test
// of what that level teaches:
//   Part 1 reading -- two texts, five questions each;
//   Part 2 listening -- two recordings (the course's text-to-speech), four
//          questions each, plus two dictations;
//   Part 3 grammar and vocabulary -- typed Spanish from English (the
//          [bracketed] fill-blank format), plus some multiple choice at C2;
//   Part 4 writing -- one task, with AI feedback when available, otherwise
//          the rubric and model answer as a self-check.
// It runs in the normal lesson player, so it passes at LESSON_PASS_PERCENT
// like any lesson, and keeps the exit lesson's slug so progress carries over.
// Each level file holds the content; sequencing.ts swaps it in.

export type LevelTestLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type { LevelTest };

export const LEVEL_TESTS: Record<LevelTestLevel, LevelTest> = {
  A1: LEVEL_TEST_A1,
  A2: LEVEL_TEST_A2,
  B1: LEVEL_TEST_B1,
  B2: LEVEL_TEST_B2,
  C1: LEVEL_TEST_C1,
  C2: LEVEL_TEST_C2,
};

/** Replaces the exit lesson's content with the level test, keeping its slug, number and place. */
export function withLevelTest(level: LevelTestLevel, lessons: Lesson[], exitSlug: string): Lesson[] {
  const test = LEVEL_TESTS[level];
  return lessons.map((l) => (l.slug === exitSlug ? { ...l, ...test } : l));
}

/** Every question in a level test, in order. */
export function levelTestExercises(test: Pick<Lesson, "sections" | "exercises">): Exercise[] {
  return [...test.sections.flatMap((s) => s.checkpoint ?? []), ...test.exercises];
}
