// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// Every redesign patch and recut lesson, by lesson slug (see patch.ts, recut.ts).
import type { LessonPatch } from "./patch";
import type { Recut } from "./recut";
import { A1_PATCHES } from "./a1";
import { A1_RECUTS } from "./recuts-a1";
import { MISC_PATCHES } from "./patches-misc";
import { GAP_RECUTS } from "./recuts-gaps";

export const ES_PATCHES: Record<string, LessonPatch> = { ...A1_PATCHES, ...MISC_PATCHES };
export const ES_RECUTS: Recut[] = [...A1_RECUTS, ...GAP_RECUTS];
export { applyPatch, checkPatch } from "./patch";
export { buildRecut } from "./recut";
export { redesignLesson, redesignParts, autoPatch } from "./auto";
export { CONCEPT_TABLES } from "./concept-tables";
export { splitLesson, MAX_CONCEPT_CARDS } from "./split";
export { withWarmUp, warmUpFor, WARM_UP_HEADING } from "./warmup";
