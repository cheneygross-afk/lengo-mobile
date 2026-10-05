// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/check.ts by scripts/sync-content.mjs -- edit it there, not here.
// Checks for the Chinese course:
//   - the shared curriculum validator (src/lib/curriculum/validate.ts --
//     structure, self-grading, duplicates, answer-visible, hedging,
//     concept leaks, coverage) on every authored and drafted lesson, in
//     its assembled course order;
//   - every drafted reinforce/drill lesson against its spec (specs.ts);
//   - what assembly found (unit sizes, placement, graph order).
// Run with:
//   node --experimental-strip-types scripts/zh-curriculum.mjs check

import { checkLayer } from "../../curriculum/spec";
import { validateCourse } from "../../curriculum/validate";
import type { Finding } from "../../curriculum/types";
import { ZH_CONCEPTS } from "./concepts";
import { ZH_PLUGIN } from "./plugin";
import { ZH_SPECS } from "./specs";
import { ZH_ASSEMBLY_FINDINGS, ZH_MODULES } from "./index";

export { pinyinMarkProblems } from "./pinyin";

/** Every finding for the whole Chinese course. */
export function checkCourse(): Finding[] {
  // Assembled lessons are copies of checked items; validate the rest in
  // the order learners meet them.
  const modules = ZH_MODULES.map((m) => ({
    code: m.code,
    path: m.path,
    lessons: m.lessons.filter((l) => !l.source?.startsWith("assembled:")),
  }));
  const findings = [...ZH_ASSEMBLY_FINDINGS, ...validateCourse(modules, ZH_CONCEPTS, ZH_PLUGIN).findings];

  const bySlug = new Map(modules.flatMap((m) => m.lessons).map((l) => [l.slug, l]));
  for (const level of ZH_SPECS)
    for (const spec of level.layers) {
      const l = bySlug.get(spec.slug);
      if (!l) findings.push({ level: "warning", where: spec.slug, message: "specified but not written yet" });
      else for (const p of checkLayer(l, spec, ZH_PLUGIN)) findings.push({ level: "error", where: spec.slug, message: p });
    }
  return findings;
}
