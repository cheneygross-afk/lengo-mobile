// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/check.ts by scripts/sync-content.mjs -- edit it there, not here.
// Checks for the Chinese course: the shared curriculum validator
// (src/lib/curriculum/validate.ts -- structure, self-grading, duplicates,
// answer-visible, hedging, concept leaks, coverage) run with this
// course's concept graph and plugin. Run with:
//   node --experimental-strip-types scripts/zh-curriculum.mjs check

import { validateCourse } from "../../curriculum/validate";
import type { Finding } from "../../curriculum/types";
import { ZH_CONCEPTS } from "./concepts";
import { ZH_PLUGIN } from "./plugin";
import { ZH_MODULES } from "./index";

export { pinyinMarkProblems } from "./pinyin";

/** Every finding for the whole Chinese course. */
export function checkCourse(): Finding[] {
  return validateCourse(ZH_MODULES, ZH_CONCEPTS, ZH_PLUGIN).findings;
}
