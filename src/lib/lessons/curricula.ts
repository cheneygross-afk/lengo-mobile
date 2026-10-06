// Synced from cheneygross-afk/lengo:src/lib/lessons/curricula.ts by scripts/sync-content.mjs -- edit it there, not here.
// The courses that run on the curriculum engine (src/lib/curriculum):
// their plugin and concept names, looked up from a lesson list's level
// path. Shared UI (test-out, the lesson runner's results, can-do lists)
// uses this to switch to bank-drawn questions and concept-level results;
// a course without an entry keeps the older behaviour.

import type { CoursePlugin } from "../curriculum/types";
import { ZH_CONCEPTS } from "./zh/concepts";
import { ZH_PLUGIN } from "./zh/plugin";

export type Curriculum = {
  course: string;
  plugin: CoursePlugin;
  /** A concept's display name ("吗 questions"); the id if unknown. */
  conceptName: (id: string) => string;
};

const ZH_NAMES = new Map(ZH_CONCEPTS.map((c) => [c.id, c.name]));

const ZH: Curriculum = {
  course: "zh",
  plugin: ZH_PLUGIN,
  conceptName: (id) => ZH_NAMES.get(id) ?? id,
};

/** "zh/a1" on the website, "zh-a1" in the app. */
export function curriculumFor(levelPath: string): Curriculum | null {
  return levelPath.startsWith("zh/") || levelPath.startsWith("zh-") ? ZH : null;
}
