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
import { A1_UNIT5_PATCHES } from "./a1-unit5";
import { A1_UNIT6_PATCHES } from "./a1-unit6";

/** Two patches for one lesson, the second one winning (sections merged one by one). */
function mergePatch(a: LessonPatch | undefined, b: LessonPatch): LessonPatch {
  if (!a) return b;
  const sections = { ...(a.sections ?? {}) };
  for (const [i, sp] of Object.entries(b.sections ?? {})) sections[+i] = { ...sections[+i], ...sp };
  return { ...a, ...b, sections, optionNotes: { ...(a.optionNotes ?? {}), ...(b.optionNotes ?? {}) } };
}
const mergeAll = (base: Record<string, LessonPatch>, more: Record<string, LessonPatch>) =>
  Object.fromEntries([...new Set([...Object.keys(base), ...Object.keys(more)])].map((k) => [k, more[k] ? mergePatch(base[k], more[k]) : base[k]]));

// Four Beginner lessons gained a warm-up card (and lost or moved a few
// questions) in the old course after their patches here were written
// (a1-unit6-fixes.ts). Their patches' section and question numbers move to
// match: +1 for every section, and old question number → new (null: gone).
// The added warm-up card itself leaves: the new course opens every lesson
// with its own warm-up, and the possessives one would come before Unit 6
// teaches possessives.
const REINDEX: Record<string, { ex?: Record<number, number | null> }> = {
  "numbers-0-100-1": { ex: { 0: null, 6: 5 } },
  "numbers-0-100-2": { ex: { 20: null } },
  "telling-time-1": { ex: { 4: 3, 21: null, 22: 18, 23: 19 } },
  "telling-time-2": {},
};
function reindex(p: LessonPatch, r: (typeof REINDEX)[string]): LessonPatch {
  const move = <T,>(o: Record<number, T> | undefined): Record<number, T> | undefined =>
    o && Object.fromEntries(Object.entries(o).flatMap(([k, v]) => { const to = r.ex && +k in r.ex ? r.ex[+k] : +k; return to === null ? [] : [[to, v]]; }));
  return {
    ...p,
    sections: p.sections && Object.fromEntries(Object.entries(p.sections).map(([k, v]) => [+k + 1, v])),
    optionNotes: move(p.optionNotes),
    exercises: p.exercises && { ...p.exercises, replace: move(p.exercises.replace) },
    dropSections: [0],
  };
}
const merged: Record<string, LessonPatch> = mergeAll(mergeAll(mergeAll(mergeAll(mergeAll(mergeAll({ ...A1_PATCHES, ...MISC_PATCHES }, A1_UNIT1_PATCHES), A1_UNIT2_PATCHES), A1_UNIT3_PATCHES), A1_UNIT4_PATCHES), A1_UNIT5_PATCHES), A1_UNIT6_PATCHES);
export const ES_PATCHES: Record<string, LessonPatch> = Object.fromEntries(Object.entries(merged).map(([k, p]) => [k, REINDEX[k] ? reindex(p, REINDEX[k]) : p]));
export const ES_RECUTS: Recut[] = [...A1_RECUTS, ...GAP_RECUTS];
export { applyPatch, checkPatch } from "./patch";
export { buildRecut } from "./recut";
export { redesignLesson, redesignParts, autoPatch } from "./auto";
export { CONCEPT_TABLES } from "./concept-tables";
export { splitLesson, MAX_CONCEPT_CARDS } from "./split";
export { withWarmUp, warmUpFor, WARM_UP_HEADING } from "./warmup";
