// Synced from cheneygross-afk/lengo:src/lib/lessons/listLessons.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Test-out asks UNIT_TEST_QUESTIONS (10) questions round-robin over a
// unit's 6-15 required lessons, so a few per lesson is plenty; a fresh
// random few on each page load keeps retakes varied.
const PER_LESSON = 6;
const testable = (e: Exercise) => e.type !== "speak" && e.type !== "write";
function sample(exercises: Exercise[]): Exercise[] {
  const pool = exercises.filter(testable);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, PER_LESSON);
}

/**
 * A level's lessons trimmed to what the lesson list (LessonList) needs:
 * titles and flags for the rows, and the exercises the unit test-out can
 * draw from (UnitTestOut). Lesson text is dropped -- the whole level used
 * to ship to the browser with its index page (2 MB of HTML for B1).
 * Test-out draws from required lessons only (pickUnitTestQuestions,
 * testOutItems), so optional practice and unit reviews keep no exercises,
 * and the rest keep a random few. The Chinese course's test-out
 * (testOutItems) picks by concept coverage, so it keeps them all.
 */
export function listLessons(lessons: readonly Lesson[]): Lesson[] {
  return lessons.map((l) => {
    const source = !l.optional && !l.unitReview && !l.source?.startsWith("assembled:");
    if (!source) return { ...l, sections: [], exercises: [] };
    if (!l.level.startsWith("ZH-")) return { ...l, sections: [], exercises: sample(l.exercises) };
    return {
      ...l,
      sections: l.sections.filter((s) => s.checkpoint?.length).map((s) => ({ heading: s.heading, body: [], checkpoint: s.checkpoint })),
      exercises: l.exercises,
    };
  });
}
