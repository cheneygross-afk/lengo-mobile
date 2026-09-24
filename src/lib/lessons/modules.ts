import type { Lesson } from "@/lib/lessons/types";
import { A1_LESSONS } from "./a1";
import { lessonNumberOf } from "./weave";

// The web app's Lesson data has no explicit "module" field -- lessons are
// just a flat, numbered sequence per level (see a1.ts). But within a
// level they DO fall into clear thematic clusters (a run of new-content
// lessons, then a "Review:"/"Mastery Check:" lesson; a block of "Extra
// Practice" drills; a long tail of short reading stories) -- these
// ranges group A1's lessons into that same shape for display, without
// touching the shared lesson data files. Grouping itself is by lesson
// `number` range (inclusive).
//
// Each module is anchored to the slug of its first lesson and runs up to
// the lesson before the next module's first lesson, so the numeric ranges
// are derived rather than hard-coded -- lesson numbers shift whenever
// reinforcement lessons are woven into a1.ts (see weave.ts), and a
// reinforcement lesson placed after a module's last base lesson belongs
// to that module.
export type LessonModule = {
  title: string;
  range: [number, number];
};

// "Reading Practice" (the tail of a1.ts: a Spanish story passage followed by
// English-only comprehension questions) is deliberately left out of the
// Lessons module list. It's the same content shape as the dedicated
// Readings feature's stories (src/lib/stories/a1.ts) -- a Spanish
// narrative plus English comprehension questions -- so it duplicates that
// feature rather than drilling grammar/vocab the way every other lesson
// here does, and its questions aren't independent of one another (they
// all depend on the same passage). See LessonListScreen, which filters
// A1_LESSONS down to this module's total range before grouping.
//
// Highest lesson `number` that belongs to a real drill/grammar module
// (i.e. everything covered by A1_MODULES below). Lessons numbered past
// this are the excluded Reading Practice block, which starts at
// "school-day-math-test".
export const A1_MAX_DRILL_LESSON_NUMBER = lessonNumberOf(A1_LESSONS, "school-day-math-test") - 1;

const A1_MODULE_STARTS: { title: string; firstSlug: string }[] = [
  { title: "The Basics", firstSlug: "greetings-pronouns-ser-1" },
  { title: "Everyday Essentials", firstSlug: "possessives-prepositions" },
  { title: "Extra Practice", firstSlug: "ser-vs-estar-drill-1" },
];

export const A1_MODULES: LessonModule[] = A1_MODULE_STARTS.map((m, i) => {
  const next = A1_MODULE_STARTS[i + 1];
  const end = next ? lessonNumberOf(A1_LESSONS, next.firstSlug) - 1 : A1_MAX_DRILL_LESSON_NUMBER;
  return { title: m.title, range: [lessonNumberOf(A1_LESSONS, m.firstSlug), end] };
});

export type LessonSection = {
  title: string;
  data: Lesson[];
};

/** Groups lessons into modules by lesson.number, in module order. Any
 * lesson that falls outside every defined range is dropped into a
 * trailing "More" section instead of silently disappearing, so adding
 * lessons without updating the ranges fails loud, not silent. */
export function groupLessonsByModule(
  lessons: Lesson[],
  modules: LessonModule[]
): LessonSection[] {
  const sections: LessonSection[] = modules.map((m) => ({
    title: m.title,
    data: lessons.filter((l) => l.number >= m.range[0] && l.number <= m.range[1]),
  }));
  const grouped = new Set(sections.flatMap((s) => s.data.map((l) => l.slug)));
  const leftover = lessons.filter((l) => !grouped.has(l.slug));
  if (leftover.length > 0) sections.push({ title: "More", data: leftover });
  return sections.filter((s) => s.data.length > 0);
}
