import type { Lesson } from "@/lib/lessons/types";
import { LESSON_SOURCES } from "@/lib/lessons/registry";
import { lessonNumberOf } from "@/lib/lessons/weave";

// The web app's Lesson data has no explicit "module" field -- lessons are
// just a flat, numbered sequence per level (see a1.ts). But within a
// level they DO fall into clear thematic clusters (a run of new-content
// lessons, then a "Review:"/"Mastery Check:" lesson; a block of "Extra
// Practice" drills; a long tail of short reading stories) -- these
// ranges group A1's lessons into that same shape for display, without
// touching the shared lesson data files. Each range (inclusive, by
// lesson `number`) is derived from the slug of the lesson that opens the
// module, looked up in the woven A1 list (see registry.ts / weave.ts) --
// never hard-coded, since weaving in reinforcement lessons renumbers the
// whole level. A reinforcement lesson anchored after a module's last
// lesson lands before the next module's first lesson, so it stays in the
// module it reinforces.
export type LessonModule = {
  title: string;
  range: [number, number];
};

// "Reading Practice" (lessons 60-119: a Spanish story passage followed by
// English-only comprehension questions) is deliberately left out of the
// Lessons module list. It's the same content shape as the dedicated
// Readings feature's stories (src/lib/stories/a1.ts) -- a Spanish
// narrative plus English comprehension questions -- so it duplicates that
// feature rather than drilling grammar/vocab the way every other lesson
// here does, and its questions aren't independent of one another (they
// all depend on the same passage). See LessonListScreen, which filters
// A1_LESSONS down to this module's total range before grouping.
const a1Number = (slug: string) => lessonNumberOf(LESSON_SOURCES.a1.lessons, slug);

// Highest lesson `number` that belongs to a real drill/grammar module
// (i.e. everything covered by A1_MODULES below). Lessons numbered past
// this are the excluded Reading Practice block, which opens with
// "school-day-math-test".
export const A1_MAX_DRILL_LESSON_NUMBER = a1Number("school-day-math-test") - 1;

export const A1_MODULES: LessonModule[] = [
  { title: "The Basics", range: [1, a1Number("possessives-prepositions") - 1] },
  { title: "Everyday Essentials", range: [a1Number("possessives-prepositions"), a1Number("ser-vs-estar-drill-1") - 1] },
  { title: "Extra Practice", range: [a1Number("ser-vs-estar-drill-1"), A1_MAX_DRILL_LESSON_NUMBER] },
];

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
