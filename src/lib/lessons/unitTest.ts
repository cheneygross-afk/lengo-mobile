// Synced from cheneygross-afk/lengo:src/lib/lessons/unitTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Testing out of a unit (UnitTestOut), and the quiz in each unit's review
// lesson (unit-reviews.ts). Re-exported from levels.ts.

/** Share of a unit test's questions that must be right to test out of the unit. */
export const UNIT_TEST_PASS_PERCENT = 80;
export const UNIT_TEST_QUESTIONS = 10;

export function unitTestPassed(correct: number, total: number): boolean {
  return total > 0 && correct * 100 >= total * UNIT_TEST_PASS_PERCENT;
}

export type UnitTestQuestion = { exercise: Exercise; lessonSlug: string; lessonNumber: number };

/**
 * Draws a unit test from the unit's required lessons' final-review
 * exercises: lessons are shuffled, then one random exercise is taken
 * from each in turn (so the test spreads over the whole unit) until
 * `count` are picked or the pool runs out. `random` is Math.random by
 * default; pass a seeded one for a repeatable draw.
 */
export function pickUnitTestQuestions(
  lessons: readonly Lesson[],
  count = UNIT_TEST_QUESTIONS,
  random: () => number = Math.random
): UnitTestQuestion[] {
  const shuffle = <T>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // Speaking and free writing are self-assessed or ungraded, so they
  // can't test anyone out of a unit.
  const testable = (e: Exercise) => e.type !== "speak" && e.type !== "write";
  const pools = shuffle(
    lessons
      .filter((l) => !l.optional && !l.unitReview)
      .map((l) => ({ lesson: l, exercises: shuffle(l.exercises.filter(testable)) }))
      .filter((p) => p.exercises.length > 0)
  );
  const picked: UnitTestQuestion[] = [];
  for (let round = 0; picked.length < count; round++) {
    let any = false;
    for (const { lesson, exercises } of pools) {
      if (round >= exercises.length || picked.length >= count) continue;
      picked.push({ exercise: exercises[round], lessonSlug: lesson.slug, lessonNumber: lesson.number });
      any = true;
    }
    if (!any) break;
  }
  return shuffle(picked);
}
