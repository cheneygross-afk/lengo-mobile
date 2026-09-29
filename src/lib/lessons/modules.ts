import type { Lesson } from "@/lib/lessons/types";
import { LESSON_SOURCES } from "@/lib/lessons/registry";
import { lessonNumberOf } from "@/lib/lessons/weave";

// The web app's Lesson data has no explicit "module" field -- lessons are
// just a flat, numbered sequence per level (see a1.ts). But within a
// level they DO fall into clear thematic clusters (a run of new-content
// lessons, then a "Review:"/"Mastery Check:" lesson; a block of "Extra
// Practice" drills; then the final review) -- these
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

// A1's Reading Practice stories aren't lessons any more: sequencing.ts
// drops them from the level (they're the same stories the Readings
// feature serves from src/lib/stories), so the Final Review module runs
// to the end of the level, ending with the exit test.
const a1Number = (slug: string) => lessonNumberOf(LESSON_SOURCES.a1.lessons, slug);

export const A1_MODULES: LessonModule[] = [
  { title: "The Basics", range: [1, a1Number("possessives-prepositions") - 1] },
  { title: "Everyday Essentials", range: [a1Number("possessives-prepositions"), a1Number("ser-vs-estar-drill-1") - 1] },
  { title: "Extra Practice · optional", range: [a1Number("ser-vs-estar-drill-1"), a1Number("a1-final-review-1") - 1] },
  { title: "Final Review", range: [a1Number("a1-final-review-1"), LESSON_SOURCES.a1.lessons.length] },
];

export type LessonSection = {
  title: string;
  data: Lesson[];
};

/** Groups a level with no hand-defined modules into runs of required and
 * optional lessons (see sequencing.ts): the core lessons under the
 * level's own title, the optional Extra Practice block, then whatever
 * required lessons follow it (the level's final review). */
export function groupLessonsByOptional(lessons: Lesson[], title: string): LessonSection[] {
  const sections: LessonSection[] = [];
  for (const lesson of lessons) {
    const optional = !!lesson.optional;
    const last = sections[sections.length - 1];
    if (last && !!last.data[0].optional === optional) {
      last.data.push(lesson);
      continue;
    }
    const sectionTitle = optional ? "Extra Practice · optional" : sections.length === 0 ? title : "Final Review";
    sections.push({ title: sectionTitle, data: [lesson] });
  }
  return sections;
}

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
