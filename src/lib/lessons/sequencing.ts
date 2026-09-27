import type { Lesson } from "./types";
import { weaveLessons, type AnchoredLesson } from "./weave";

// Course order on top of weave.ts. weaveLessons can only place a lesson
// right after another one, so the reordering that came out of the
// curriculum review happens here instead, as a final pass over each
// level's woven list:
//   - a few topics move earlier (the present perfect opens B1 instead of
//     arriving after 79 lessons of subjunctive; A1's Word Web lessons sit
//     next to the grammar that needs their vocabulary),
//   - each level's Vocabulary Practice parts are spread through the core
//     lessons instead of arriving as one long block at the end,
//   - each level's "Extra Practice" block is marked optional, so the
//     required path is the core lessons plus the level's final review.
// Every step works on slugs, never numbers, and throws on an unknown slug
// so a renamed lesson fails the build. Completion is keyed by slug, so
// moving a lesson doesn't lose anyone's progress. The whole level is
// renumbered from 1 at the end.

type Unit = Lesson[];

function indexOf(lessons: Lesson[], slug: string): number {
  const i = lessons.findIndex((l) => l.slug === slug);
  if (i === -1) throw new Error(`sequencing: unknown slug "${slug}"`);
  return i;
}

/** Cuts lessons[from slug .. before endSlug) out of the list. */
function cut(lessons: Lesson[], fromSlug: string, endSlug: string): Unit {
  const start = indexOf(lessons, fromSlug);
  const end = indexOf(lessons, endSlug);
  if (end <= start) throw new Error(`sequencing: "${endSlug}" is not after "${fromSlug}"`);
  return lessons.splice(start, end - start);
}

/** Moves lessons[fromSlug .. before endSlug) so they sit right before beforeSlug. */
function moveBlock(lessons: Lesson[], fromSlug: string, endSlug: string, beforeSlug: string): void {
  const block = cut(lessons, fromSlug, endSlug);
  lessons.splice(indexOf(lessons, beforeSlug), 0, ...block);
}

/** Moves one lesson so it sits right before beforeSlug. */
function moveLesson(lessons: Lesson[], slug: string, beforeSlug: string): void {
  const [lesson] = lessons.splice(indexOf(lessons, slug), 1);
  lessons.splice(indexOf(lessons, beforeSlug), 0, lesson);
}

const LATER_PART = /(Part|Parte) ([2-9]|\d{2,}) (of|de) \d+/;

/**
 * Cuts the block of numbered parts (partSlugs, in order, each carrying
 * the reinforcement lessons woven after it) that ends right before
 * blockEndSlug, and spreads those parts evenly through the core lessons
 * that come before coreEndSlug. A part only ever lands right before the
 * start of a new topic (a base lesson that isn't "Part 2" or later), so
 * it never splits a topic from its own practice.
 */
function spreadParts(
  lessons: Lesson[],
  baseSlugs: Set<string>,
  partSlugs: string[],
  blockEndSlug: string,
  coreEndSlug: string
): void {
  const units: Unit[] = [];
  partSlugs.forEach((slug, i) => {
    units.push(cut(lessons, slug, i + 1 < partSlugs.length ? partSlugs[i + 1] : blockEndSlug));
  });
  const coreEnd = indexOf(lessons, coreEndSlug);
  const topicStarts: string[] = [];
  for (let i = 1; i < coreEnd; i++) {
    const l = lessons[i];
    if (baseSlugs.has(l.slug) && !LATER_PART.test(l.title)) topicStarts.push(l.slug);
  }
  // Evenly spaced topic starts; the last unit goes right before coreEnd.
  const targets = units.map((_, j) => {
    if (j === units.length - 1 || topicStarts.length === 0) return coreEndSlug;
    return topicStarts[Math.min(topicStarts.length - 1, Math.round(((j + 1) * topicStarts.length) / units.length))];
  });
  units.forEach((unit, j) => {
    lessons.splice(indexOf(lessons, targets[j]), 0, ...unit);
  });
}

/** Marks every lesson from fromSlug up to (not including) endSlug optional. */
function markOptional(lessons: Lesson[], fromSlug: string, endSlug: string): void {
  const start = indexOf(lessons, fromSlug);
  const end = indexOf(lessons, endSlug);
  for (let i = start; i < end; i++) lessons[i] = { ...lessons[i], optional: true };
}

function renumber(lessons: Lesson[]): Lesson[] {
  return lessons.map((l, i) => ({ ...l, number: i + 1 }));
}

function partSlugs(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${prefix}-${i + 1}`);
}

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** Weaves a level's extra lessons into its base lessons, then applies the
 * course order above. Use this instead of calling weaveLessons directly
 * for the six core Spanish levels. */
export function buildLevel(level: Level, base: Lesson[], extras: AnchoredLesson[]): Lesson[] {
  const baseSlugs = new Set(base.map((l) => l.slug));
  const lessons = [...weaveLessons(base, extras)];

  switch (level) {
    case "A1":
      // Word Webs go next to the grammar that uses their words.
      moveLesson(lessons, "a1r-word-web-jobs", "ser-vs-estar-1");
      moveLesson(lessons, "a1r-word-web-family-people", "question-words");
      moveLesson(lessons, "a1r-word-web-food", "tener-ir-hacer-hay-1");
      moveLesson(lessons, "a1r-word-web-house", "demonstratives-1");
      moveLesson(lessons, "a1r-word-web-places", "ser-vs-estar-drill-1");
      moveLesson(lessons, "a1r-word-web-feelings", "ser-vs-estar-drill-1");
      spreadParts(lessons, baseSlugs, partSlugs("vocabulary-practice", 4), "a1-final-review-1", "ser-vs-estar-drill-1");
      markOptional(lessons, "ser-vs-estar-drill-1", "a1-final-review-1");
      break;
    case "A2":
      spreadParts(lessons, baseSlugs, partSlugs("a2-vocabulary-practice", 5), "a2-comprehensive-review-1", "preterite-drill-1");
      markOptional(lessons, "preterite-drill-1", "a2-comprehensive-review-1");
      break;
    case "B1":
      // Present perfect first: easier and far more frequent than the
      // subjunctive, and A2-level in the Instituto Cervantes syllabus.
      moveBlock(lessons, "present-perfect-1", "past-perfect-1", "present-subjunctive-formation-1");
      spreadParts(lessons, baseSlugs, partSlugs("b1-vocabulary-practice", 10), "b1-comprehensive-review-1", "subjunctive-formation-drill-1");
      markOptional(lessons, "subjunctive-formation-drill-1", "b1-comprehensive-review-1");
      break;
    case "B2":
      spreadParts(lessons, baseSlugs, partSlugs("b2-vocabulary-practice", 10), "b2-comprehensive-review-1", "subjunctive-adjective-clauses-drill-1");
      markOptional(lessons, "subjunctive-adjective-clauses-drill-1", "b2-comprehensive-review-1");
      break;
    case "C1":
      markOptional(lessons, "subjunctive-advanced-nuances-drill-1", "c1r-challenge-big-error-hunt");
      break;
    case "C2":
      spreadParts(lessons, baseSlugs, partSlugs("c1c2-vocabulary-practice", 30), "c1c2-comprehensive-review-1", "modismos-expresiones-idiomaticas-drill-1");
      markOptional(lessons, "modismos-expresiones-idiomaticas-drill-1", "c1c2-comprehensive-review-1");
      break;
  }

  return renumber(lessons);
}
