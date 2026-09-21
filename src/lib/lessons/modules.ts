import type { Lesson } from "@/lib/lessons/types";

// The web app's Lesson data has no explicit "module" field -- lessons are
// just a flat, numbered sequence per level (see a1.ts). But within a
// level they DO fall into clear thematic clusters (a run of new-content
// lessons, then a "Review:"/"Mastery Check:" lesson; a block of "Extra
// Practice" drills; a long tail of short reading stories) -- these
// ranges group A1's lessons into that same shape for display, without
// touching the shared lesson data files. Defined by lesson `number`
// range (inclusive) rather than slug, so this can't drift out of sync
// with a lesson being renamed.
//
// Ranges below reflect the post-10-minute-cap lesson numbering (every
// lesson that used to run over 10 minutes was split into "Part N of M"
// lessons, which shifted every number after it -- see the a1.ts commit
// that did the split). If a1.ts changes again, re-derive these with the
// same slug-boundary lookup used to generate them the first time.
export type LessonModule = {
  title: string;
  range: [number, number];
};

export const A1_MODULES: LessonModule[] = [
  { title: "The Basics", range: [1, 13] },
  { title: "Everyday Essentials", range: [14, 28] },
  { title: "Extra Practice", range: [29, 59] },
  { title: "Reading Practice", range: [60, 119] },
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
