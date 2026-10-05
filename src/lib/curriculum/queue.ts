// Synced from cheneygross-afk/lengo:src/lib/curriculum/queue.ts by scripts/sync-content.mjs -- edit it there, not here.
// Composing today's review from the scheduler (docs/curriculum-
// architecture.md, section 8.3): due concepts, most overdue first, each
// asked with an item from the bank at the learner's level for it; the
// learner's own missed questions first for their concept; interleaved so
// no two neighbours share a concept and listening comes round regularly.
// Pure functions; the caller supplies the candidates (the website asks
// its server, the app reads its local content).

import type { Exercise } from "../lessons/types";
import type { DueConcept } from "./memory";
import { seeded, shuffled } from "./select";

/** Items in a day's review, by default. */
export const DAILY_BUDGET = 20;
/** Don't ask an item again within this many days. */
export const RECENT_ITEM_DAYS = 7;

export type ReviewCandidate = {
  id: string;
  concepts: string[];
  exercise: Exercise;
  difficulty: number;
  production: boolean;
  /** The learner's own missed question (asked first, exactly as stored). */
  missed?: boolean;
  /** Where it came from, for the result screen ("zh/a1" ...). */
  levelPath?: string;
};

const LISTENING = new Set<Exercise["type"]>(["listen-choose", "dictation"]);

/**
 * Picks the items for each due concept: its missed questions first, then
 * bank items nearest the concept's level (production preferred from
 * level 3), one per concept, two for one that lapsed recently. Items
 * answered in the last week are left out by the caller via `recent`.
 */
export function pickForConcepts(
  due: DueConcept[],
  candidates: Map<string, ReviewCandidate[]>,
  recent: Set<string>,
  seed: string,
  budget = DAILY_BUDGET
): { concept: string; item: ReviewCandidate }[] {
  const random = seeded(seed);
  const out: { concept: string; item: ReviewCandidate }[] = [];
  const used = new Set<string>();
  for (const d of due) {
    if (out.length >= budget) break;
    const pool = (candidates.get(d.concept) ?? []).filter((c) => !used.has(c.id) && (c.missed || !recent.has(c.id)));
    const missed = pool.filter((c) => c.missed);
    const rest = shuffled(
      pool.filter((c) => !c.missed),
      random
    ).sort((a, b) => score(a, d.level) - score(b, d.level));
    const want = d.lapsedRecently ? 2 : 1;
    for (const item of [...missed, ...rest].slice(0, Math.min(want, budget - out.length))) {
      out.push({ concept: d.concept, item });
      used.add(item.id);
    }
  }
  return out;
}

/** Lower is better: distance from the target level, production favoured from level 3. */
function score(c: ReviewCandidate, level: number): number {
  return Math.abs(c.difficulty - level) + (level >= 3 && !c.production ? 0.5 : 0);
}

/**
 * Orders the picks: no two consecutive items sharing a concept where it
 * can be avoided, and a listening item at least every five when there's
 * one left to place.
 */
export function interleave(picks: { concept: string; item: ReviewCandidate }[]): ReviewCandidate[] {
  const left = [...picks];
  const out: { concept: string; item: ReviewCandidate }[] = [];
  let sinceListening = 0;
  while (left.length) {
    // Neighbours share no concept at all, where it can be avoided (items
    // often test several, e.g. 名字 for both names and question words).
    const last = out[out.length - 1];
    const prev = new Set(last ? [last.concept, ...last.item.concepts] : []);
    const ok = (p: { concept: string; item: ReviewCandidate }) => !prev.has(p.concept) && !p.item.concepts.some((c) => prev.has(c));
    let i = -1;
    if (sinceListening >= 4) i = left.findIndex((p) => ok(p) && LISTENING.has(p.item.exercise.type));
    if (i < 0) i = left.findIndex(ok);
    if (i < 0) i = 0;
    const [p] = left.splice(i, 1);
    out.push(p);
    sinceListening = LISTENING.has(p.item.exercise.type) ? 0 : sinceListening + 1;
  }
  return out.map((p) => p.item);
}

/** Today's review: pick, then interleave. */
export function composeReview(
  due: DueConcept[],
  candidates: Map<string, ReviewCandidate[]>,
  recent: Set<string>,
  seed: string,
  budget = DAILY_BUDGET
): ReviewCandidate[] {
  return interleave(pickForConcepts(due, candidates, recent, seed, budget));
}
