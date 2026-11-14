// Synced from cheneygross-afk/lengo:src/lib/lessons/practiceCap.ts by scripts/sync-content.mjs -- edit it there, not here.
// Every lesson asks at most MAX_CORE_QUESTIONS questions (owner rule,
// 2026-11-14: "lessons don't ask more than 20 questions ever"). After the
// last of them the learner chooses: keep practicing the idea (a round of
// 4-6 more questions) or move on. Shared by the website and the app (this
// file syncs to lengo-mobile, so it imports only lesson code).
//
// - capLesson keeps every section and as many of its checkpoints as fit,
//   then picks the practice evenly across the lesson's practice order
//   (warm-up, guided, on your own), so the 20 keep the same climb and mix.
//   The items left out become the lesson's extra practice: new questions
//   on the same idea.
// - practiceRound deals the next round: those unseen items first, then
//   the questions the learner missed, then the rest of the lesson's own
//   questions (guided and on-your-own ones first), never one already
//   practiced in an earlier round.
//
// Lessons are still authored and split as before (questionCap.ts, up to
// 30 per part); this cap is applied where a lesson is shown.

import type { Exercise, Lesson } from "./types";
import { keepsAuthoredOrder, stageOf, type Stage } from "./lessonFlow";

export const MAX_CORE_QUESTIONS = 20;
export const ROUND_MIN = 4;
export const ROUND_SIZE = 5;
export const ROUND_MAX = 6;

const rank: Record<Stage, number> = { crawl: 0, walk: 1, run: 2 };

/** `n` of `count` positions spread evenly, first and last included. */
function spread(count: number, n: number): number[] {
  if (n >= count) return Array.from({ length: count }, (_, i) => i);
  if (n <= 0) return [];
  if (n === 1) return [count - 1];
  const out = new Set<number>();
  for (let i = 0; i < n; i++) out.add(Math.round((i * (count - 1)) / (n - 1)));
  // Rounding can land two picks on one position: fill from the start.
  for (let i = 0; out.size < n; i++) out.add(i);
  return [...out].sort((a, b) => a - b);
}

export type CappedLesson = { core: Lesson; extras: Exercise[] };

const cache = new WeakMap<Lesson, CappedLesson>();

export function capLesson(lesson: Lesson, max = MAX_CORE_QUESTIONS): CappedLesson {
  const hit = cache.get(lesson);
  if (hit && max === MAX_CORE_QUESTIONS) return hit;
  const result = capLessonUncached(lesson, max);
  if (max === MAX_CORE_QUESTIONS) cache.set(lesson, result);
  return result;
}

function capLessonUncached(lesson: Lesson, max: number): CappedLesson {
  const checkpoints = lesson.sections.reduce((n, s) => n + (s.checkpoint?.length ?? 0), 0);
  if (checkpoints + lesson.exercises.length <= max) return { core: lesson, extras: [] };

  const extras: Exercise[] = [];
  let sections = lesson.sections;
  if (checkpoints > max) {
    // Rare: the checkpoints alone are over the cap. Every section keeps its
    // first checkpoint, the rest are shared out in turn.
    const keep = lesson.sections.map((s) => Math.min(1, s.checkpoint?.length ?? 0));
    let left = max - keep.reduce((a, b) => a + b, 0);
    for (let round = 1; left > 0; round++) {
      let added = false;
      lesson.sections.forEach((s, i) => {
        if (left > 0 && (s.checkpoint?.length ?? 0) > round) {
          keep[i]++;
          left--;
          added = true;
        }
      });
      if (!added) break;
    }
    sections = lesson.sections.map((s, i) => {
      if (!s.checkpoint?.length) return s;
      extras.push(...s.checkpoint.slice(keep[i]));
      return { ...s, checkpoint: s.checkpoint.slice(0, keep[i]) };
    });
  }
  const kept = sections.reduce((n, s) => n + (s.checkpoint?.length ?? 0), 0);
  const room = Math.max(0, max - kept);

  // Pick practice evenly along the order it is practiced in (by stage,
  // or as authored for reviews and tests), then keep the authored order.
  const order = lesson.exercises.map((exercise, index) => ({ exercise, index, stage: stageOf(exercise) }));
  if (!keepsAuthoredOrder(lesson)) order.sort((a, b) => rank[a.stage] - rank[b.stage] || a.index - b.index);
  const picked = new Set(spread(order.length, room).map((i) => order[i].index));
  const exercises = lesson.exercises.filter((_, i) => picked.has(i));
  // Left-out practice, easiest first, after any left-out checkpoints.
  for (const p of order) if (!picked.has(p.index)) extras.push(p.exercise);
  return { core: { ...lesson, sections, exercises }, extras };
}

/** Every question of a lesson as shown (checkpoints, then practice). */
export function coreQuestions(core: Lesson): Exercise[] {
  return [...core.sections.flatMap((s) => s.checkpoint ?? []), ...core.exercises];
}

/** The next keep-practicing round: 4-6 questions not practiced in an
 * earlier round (`done`), or none when the lesson has nothing left. */
export function practiceRound(
  extras: Exercise[],
  core: Exercise[],
  missed: ReadonlySet<Exercise>,
  done: ReadonlySet<Exercise>,
): Exercise[] {
  const fresh = (e: Exercise) => !done.has(e);
  const retry = core.filter((e) => missed.has(e));
  // The rest of the lesson's questions, harder ones first: a second go
  // at producing the language is better practice than re-recognising it.
  const again = core
    .filter((e) => !missed.has(e))
    .map((e, i) => ({ e, i, s: rank[stageOf(e)] }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .map((x) => x.e);
  const pool = [...new Set([...extras, ...retry, ...again])].filter(fresh);
  if (pool.length <= ROUND_MAX) return pool;
  // Don't leave a last round shorter than ROUND_MIN.
  const left = pool.length - ROUND_SIZE;
  const size = left > 0 && left < ROUND_MIN ? Math.min(ROUND_MAX, pool.length - ROUND_MIN) : ROUND_SIZE;
  return pool.slice(0, Math.max(ROUND_MIN, size));
}

/** Whether a lesson has any keep-practicing questions left. */
export function hasMorePractice(extras: Exercise[], core: Exercise[], done: ReadonlySet<Exercise>): boolean {
  return [...extras, ...core].some((e) => !done.has(e));
}
