// Synced from cheneygross-afk/lengo:src/lib/curriculum/select.ts by scripts/sync-content.mjs -- edit it there, not here.
// Seeded, constrained selection from the item bank: the one routine
// behind generated spaced reviews, unit reviews, level tests and test-outs
// (docs/curriculum-architecture.md, section 7). Everything is seeded, so a
// generated lesson is identical on every build, on the website and in the
// app.

import type { Exercise } from "../lessons/types";
import type { Item } from "./items";
import { promptText } from "./items";

export function seeded(seed: string): () => number {
  let h = 1779033703;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 3432918353) >>> 0;
  // mulberry32
  return () => {
    h = (h + 0x6d2b79f5) >>> 0;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffled<T>(arr: readonly T[], random: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type Constraints = {
  count: number;
  /** Cover each of these concepts at least once, as far as the pool allows. */
  cover?: string[];
  minDifficulty?: number;
  maxDifficulty?: number;
  /** At least this many production items (typed or spoken target language). */
  minProduction?: number;
  /** At most this many items per concept (by the item's first concept). */
  perConceptMax?: number;
  /** Exercise types allowed (default: all). */
  types?: Exercise["type"][];
  /** Item ids already used elsewhere (e.g. by another generated review). */
  exclude?: Set<string>;
};

/**
 * Picks `count` items: first one per concept in `cover` (production items
 * first, so coverage isn't all multiple choice), then production items up
 * to `minProduction`, then the rest at random. Never two items with the
 * same prompt. Returns fewer than `count` only if the pool runs out.
 */
export function selectItems(pool: Item[], c: Constraints, seed: string): Item[] {
  const random = seeded(seed);
  const ok = (i: Item) =>
    (c.minDifficulty === undefined || i.difficulty >= c.minDifficulty) &&
    (c.maxDifficulty === undefined || i.difficulty <= c.maxDifficulty) &&
    (!c.types || c.types.includes(i.exercise.type)) &&
    !c.exclude?.has(i.id);
  const candidates = shuffled(pool.filter(ok), random);
  const picked: Item[] = [];
  const prompts = new Set<string>();
  const perConcept = new Map<string, number>();
  const key = (i: Item) => promptText(i.exercise).trim().toLowerCase();
  const take = (i: Item): boolean => {
    if (picked.length >= c.count || picked.includes(i) || prompts.has(key(i))) return false;
    const main = i.concepts[0] ?? "";
    if (c.perConceptMax !== undefined && (perConcept.get(main) ?? 0) >= c.perConceptMax) return false;
    picked.push(i);
    prompts.add(key(i));
    perConcept.set(main, (perConcept.get(main) ?? 0) + 1);
    return true;
  };

  for (const concept of c.cover ?? []) {
    const has = candidates.filter((i) => i.concepts.includes(concept) && !picked.includes(i));
    const first = has.find((i) => i.production) ?? has[0];
    if (first) take(first);
  }
  for (const i of candidates) {
    if (picked.filter((p) => p.production).length >= (c.minProduction ?? 0)) break;
    if (i.production) take(i);
  }
  for (const i of candidates) take(i);
  return picked;
}

/** A copy of an item's exercise that remembers where it came from. */
export function copyOf(item: Item): Exercise {
  return {
    ...item.exercise,
    meta: { ...item.exercise.meta, concepts: item.concepts, skill: item.skill, difficulty: item.difficulty, from: item.exercise.meta?.from ?? item.id },
  } as Exercise;
}
