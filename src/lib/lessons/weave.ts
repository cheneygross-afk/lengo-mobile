import type { Lesson } from "./types";

// A reinforcement lesson authored separately from its level's base file
// (see a1-reinforcement.ts and friends) plus the slug of the existing
// lesson it should appear right after. Anchoring by slug rather than by
// number means the base files never have to be touched or renumbered by
// hand when lessons are added, and completion tracking -- which is keyed
// by slug -- is unaffected.
export type AnchoredLesson = {
  after: string;
  lesson: Omit<Lesson, "number">;
};

/**
 * Splices each anchored lesson into `base` directly after its anchor (in
 * declaration order when several share one anchor), then renumbers the
 * whole level sequentially from 1. Throws on an unknown anchor or a
 * duplicate slug so a typo fails the build instead of silently dropping
 * a lesson.
 */
export function weaveLessons(base: Lesson[], extras: AnchoredLesson[]): Lesson[] {
  const byAnchor = new Map<string, Omit<Lesson, "number">[]>();
  const baseSlugs = new Set(base.map((l) => l.slug));
  const seen = new Set(baseSlugs);
  for (const { after, lesson } of extras) {
    if (!baseSlugs.has(after)) throw new Error(`weaveLessons: unknown anchor "${after}" for "${lesson.slug}"`);
    if (seen.has(lesson.slug)) throw new Error(`weaveLessons: duplicate slug "${lesson.slug}"`);
    seen.add(lesson.slug);
    const list = byAnchor.get(after) ?? [];
    list.push(lesson);
    byAnchor.set(after, list);
  }

  const out: Lesson[] = [];
  for (const lesson of base) {
    out.push({ ...lesson, number: out.length + 1 });
    for (const extra of byAnchor.get(lesson.slug) ?? []) {
      out.push({ ...extra, number: out.length + 1 } as Lesson);
    }
  }
  return out;
}

/** The (post-weave) number of the lesson with this slug -- for code that
 * needs a number cutoff (e.g. "everything up to the final review") without
 * hard-coding a value that shifts whenever lessons are woven in. */
export function lessonNumberOf(lessons: Lesson[], slug: string): number {
  const found = lessons.find((l) => l.slug === slug);
  if (!found) throw new Error(`lessonNumberOf: unknown slug "${slug}"`);
  return found.number;
}
