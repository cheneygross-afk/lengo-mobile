import type { Lesson, Exercise } from "./types";
import type { MissedQuestion } from "./missedQuestions";

// The review questions that follow a lesson's own questions in the
// mobile lesson player (LessonRunnerScreen). Every lesson drills at least
// MIN_DRILL_QUESTIONS questions; when a lesson's own checkpoints and
// exercises fall short, the rest are review:
//   1. questions this learner missed or flagged earlier in the track that
//      are due again (missedQuestions.ts spaces them out over days), then
//   2. hand-written questions from the lessons just before this one, so
//      earlier material keeps coming back while it's still fresh.
// This replaced generated vocabulary multiple choice, which padded most
// lessons with questions unrelated to the lesson's topic.

export type ReviewQuestion = {
  exercise: Exercise;
  // The question's id in its own lesson (`${slug}#${i}`), so answers feed
  // the same missed-questions entry wherever the question is asked.
  id: string;
  fromLessonNumber: number;
  fromLessonTitle: string;
  // True when it came from the missed-questions pool, so the answer
  // should advance or reset its spaced-review schedule.
  fromMissedPool: boolean;
};

// How many lessons back to draw hand-written review questions from.
const LOOKBACK_LESSONS = 10;

/** A lesson's hand-authored questions in drill order: each section's
 * checkpoints, then the end-of-lesson exercises. */
export function authoredQuestions(lesson: Lesson): Exercise[] {
  return [...lesson.sections.flatMap((section) => section.checkpoint ?? []), ...lesson.exercises];
}

// Deterministic shuffle so the same lesson draws the same review
// questions in the same order on every run -- same algorithm as
// ExerciseBlock's seededShuffle.
function seededShuffle<T>(arr: T[], seed: string): T[] {
  const a = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildReviewQuestions(
  lesson: Lesson,
  trackLessons: Lesson[],
  dueMissed: MissedQuestion[],
  need: number
): ReviewQuestion[] {
  if (need <= 0) return [];
  const out: ReviewQuestion[] = [];
  const used = new Set<string>();

  for (const q of dueMissed) {
    if (out.length >= need) break;
    if (q.lessonSlug === lesson.slug || used.has(q.id)) continue;
    used.add(q.id);
    out.push({
      exercise: q.exercise,
      id: q.id,
      fromLessonNumber: q.lessonNumber,
      fromLessonTitle: q.lessonTitle,
      fromMissedPool: true,
    });
  }

  const index = trackLessons.findIndex((l) => l.slug === lesson.slug);
  const earlier = index > 0 ? trackLessons.slice(Math.max(0, index - LOOKBACK_LESSONS), index) : [];
  const candidates = earlier.flatMap((l) =>
    authoredQuestions(l).map((exercise, i) => ({
      exercise,
      id: `${l.slug}#${i}`,
      fromLessonNumber: l.number,
      fromLessonTitle: l.title,
      fromMissedPool: false,
    }))
  );
  for (const c of seededShuffle(candidates, lesson.slug)) {
    if (out.length >= need) break;
    if (used.has(c.id)) continue;
    used.add(c.id);
    out.push(c);
  }
  return out;
}
