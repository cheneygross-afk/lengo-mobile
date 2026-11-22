// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/recut.ts by scripts/sync-content.mjs -- edit it there, not here.
// A recut lesson (curriculum redesign, step 3): a new lesson put together
// from the sections and questions of existing ones. The old course often
// taught several ideas in one lesson (tener, ir, hacer and hay together);
// the new course gives each concept its own lessons, so those lessons are
// cut along their sections instead of being rewritten. Sections keep their
// own checks. Questions are picked by number, or by a pattern matched
// against the whole question (prompt, options and answer).

import type { Exercise, Lesson, LessonSection } from "../types";
import { applyPatch, type LessonPatch } from "./patch";

export type RecutSource = {
  lesson: string;
  /** Section indexes to take, in this order. Leave out for none. */
  sections?: number[];
  /** Questions to take: indexes, or a pattern (and an optional pattern
   * that rules a question out). Leave out for none. */
  exercises?: number[] | { match: string; not?: string };
};

export type Recut = {
  slug: string;
  title: string;
  summary: string;
  /** The concept (es-concepts.ts) this lesson belongs to. */
  concept: string;
  /** Old required lessons this one takes the place of in the core path
   * (they stay as extra practice). */
  replaces?: string[];
  from: RecutSource[];
  /** Questions written for this lesson, where the old course had too few
   * on the concept. They follow the ones taken from `from`. */
  add?: Exercise[];
  patch?: LessonPatch;
};

const textOf = (e: Exercise) => JSON.stringify(e);

export function buildRecut(r: Recut, find: (slug: string) => Lesson | undefined): Lesson | null {
  const sections: LessonSection[] = [];
  const exercises: Exercise[] = [];
  let base: Lesson | undefined;
  for (const src of r.from) {
    const l = find(src.lesson);
    if (!l) return null;
    base ??= l;
    for (const i of src.sections ?? []) if (l.sections[i]) sections.push(l.sections[i]);
    const pick = src.exercises;
    if (Array.isArray(pick)) for (const i of pick) { if (l.exercises[i]) exercises.push(l.exercises[i]); }
    else if (pick) {
      const yes = new RegExp(pick.match, "i");
      const no = pick.not ? new RegExp(pick.not, "i") : null;
      for (const e of l.exercises) if (yes.test(textOf(e)) && !(no && no.test(textOf(e)))) exercises.push(e);
    }
  }
  if (!base) return null;
  exercises.push(...(r.add ?? []));
  const lesson: Lesson = { ...base, slug: r.slug, title: r.title, summary: r.summary, sections, exercises, continues: undefined, optional: undefined, unitReview: undefined };
  return applyPatch(lesson, r.patch);
}
