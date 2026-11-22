// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/split.ts by scripts/sync-content.mjs -- edit it there, not here.
// Splits a redesigned lesson whose Concept step runs past 8 cards into
// parts of at most 8 (curriculum redesign, steps 4-5). Nothing is cut or
// rewritten: sections keep their order and their own checks, and each
// practice question goes with the part that teaches it (its `meta.section`),
// or, when it isn't tied to a section, is dealt out in order so the parts
// get an even share. A lesson within the limit comes back unchanged.
import { lessonFlow } from "../lessonFlow";
import type { Exercise, Lesson } from "../types";

export const MAX_CONCEPT_CARDS = 8;

const cardsIn = (l: Lesson) => lessonFlow(l, { checkEvery: 2 }).filter((s) => s.kind === "learn").length;

export function splitLesson(l: Lesson, maxCards = MAX_CONCEPT_CARDS): Lesson[] {
  const total = cardsIn(l);
  if (total <= maxCards || l.sections.length < 2) return [l];
  // Cards per section, counted one section at a time.
  const per = l.sections.map((s) => Math.max(1, cardsIn({ ...l, sections: [s], exercises: [] })));
  const parts = Math.ceil(total / maxCards);
  const target = total / parts;
  // Cut at section boundaries, closing a part once it reaches its share.
  const groups: number[][] = [[]];
  let run = 0;
  per.forEach((n, i) => {
    const g = groups[groups.length - 1];
    const left = l.sections.length - i;
    const partsLeft = parts - groups.length;
    if (g.length && groups.length < parts && (run + n > maxCards || run + n / 2 > target || left <= partsLeft)) {
      groups.push([i]);
      run = n;
    } else {
      g.push(i);
      run += n;
    }
  });
  const partOf = new Map<number, number>();
  groups.forEach((g, gi) => g.forEach((si) => partOf.set(si, gi)));
  const buckets: Exercise[][] = groups.map(() => []);
  const loose: Exercise[] = [];
  for (const e of l.exercises) {
    const si = e.meta?.section;
    if (si !== undefined && partOf.has(si)) {
      const gi = partOf.get(si)!;
      buckets[gi].push({ ...e, meta: { ...e.meta, section: si - groups[gi][0] } });
    } else loose.push(e);
  }
  // Loose questions in order, a contiguous run per part, sized so every
  // part ends with about the same number of questions.
  const each = Math.ceil(l.exercises.length / groups.length);
  let at = 0;
  buckets.forEach((b, gi) => {
    const want = gi === groups.length - 1 ? loose.length - at : Math.max(0, Math.min(loose.length - at, each - b.length));
    b.push(...loose.slice(at, at + want));
    at += want;
  });
  return groups.map((g, gi) => ({
    ...l,
    slug: gi === 0 ? l.slug : `${l.slug}--${gi + 1}`,
    title: `${l.title} (${gi + 1} of ${groups.length})`,
    sections: g.map((si) => l.sections[si]),
    exercises: buckets[gi],
  }));
}
