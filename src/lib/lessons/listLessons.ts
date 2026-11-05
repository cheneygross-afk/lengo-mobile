// Synced from cheneygross-afk/lengo:src/lib/lessons/listLessons.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Test-out takes one exercise from each required lesson in turn
// (pickUnitTestQuestions, UNIT_TEST_QUESTIONS = 10), so the list needs only
// one random exercise per lesson: units have 8-31 required lessons, so a
// second round is rarely used, and every exercise sent here is repeated in
// the page HTML (the C2 index was 2 MB with 6 per lesson). A fresh random
// pick on each page load keeps retakes varied.
const PER_LESSON = 1;
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
