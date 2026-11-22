// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// Every redesign patch and recut lesson, by lesson slug (see patch.ts, recut.ts).
import type { LessonPatch } from "./patch";
import type { Recut } from "./recut";
import { A1_PATCHES } from "./a1";
import { A1_RECUTS } from "./recuts-a1";
import { MISC_PATCHES } from "./patches-misc";
import { GAP_RECUTS } from "./recuts-gaps";
import { A1_UNIT1_PATCHES } from "./a1-unit1";
import { A1_UNIT2_PATCHES } from "./a1-unit2";
import { A1_UNIT3_PATCHES } from "./a1-unit3";
import { A1_UNIT4_PATCHES } from "./a1-unit4";

/** Two patches for one lesson, the second one winning (sections merged one by one). */
function mergePatch(a: LessonPatch | undefined, b: LessonPatch): LessonPatch {
  if (!a) return b;
  const sections = { ...(a.sections ?? {}) };
  for (const [i, sp] of Object.entries(b.sections ?? {})) sections[+i] = { ...sections[+i], ...sp };
  return { ...a, ...b, sections, optionNotes: { ...(a.optionNotes ?? {}), ...(b.optionNotes ?? {}) } };
}
const mergeAll = (base: Record<string, LessonPatch>, more: Record<string, LessonPatch>) =>
  Object.fromEntries([...new Set([...Object.keys(base), ...Object.keys(more)])].map((k) => [k, more[k] ? mergePatch(base[k], more[k]) : base[k]]));

export const ES_PATCHES: Record<string, LessonPatch> = mergeAll(mergeAll(mergeAll(mergeAll({ ...A1_PATCHES, ...MISC_PATCHES }, A1_UNIT1_PATCHES), A1_UNIT2_PATCHES), A1_UNIT3_PATCHES), A1_UNIT4_PATCHES);
export const ES_RECUTS: Recut[] = [...A1_RECUTS, ...GAP_RECUTS];
export { applyPatch, checkPatch } from "./patch";
export { buildRecut } from "./recut";
export { redesignLesson, redesignParts, autoPatch } from "./auto";
export { CONCEPT_TABLES } from "./concept-tables";
export { splitLesson, MAX_CONCEPT_CARDS } from "./split";
export { withWarmUp, warmUpFor, WARM_UP_HEADING } from "./warmup";
