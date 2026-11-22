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
import { A1_UNIT7_PATCHES } from "./a1-unit7";
import { A2_UNIT1_PATCHES } from "./a2-unit1";
import { A2_UNIT2_PATCHES } from "./a2-unit2";
import { A2_UNIT3_PATCHES } from "./a2-unit3";
import { A2_UNIT4_PATCHES } from "./a2-unit4";
import { A2_UNIT5_PATCHES } from "./a2-unit5";
import { A2_UNIT6_PATCHES } from "./a2-unit6";
import { A2_UNIT7_PATCHES } from "./a2-unit7";
import { B1_UNIT1_PATCHES } from "./b1-unit1";
import { B1_UNIT2_PATCHES } from "./b1-unit2";
import { B1_UNIT3_PATCHES } from "./b1-unit3";
import { B1_UNIT4_PATCHES } from "./b1-unit4";
import { B1_UNIT5_PATCHES } from "./b1-unit5";
import { B1_UNIT6_PATCHES } from "./b1-unit6";
import { B1_UNIT7_PATCHES } from "./b1-unit7";
import { B2_UNIT1_PATCHES } from "./b2-unit1";
import { B2_UNIT2_PATCHES } from "./b2-unit2";
import { B2_UNIT3_PATCHES } from "./b2-unit3";
import { B2_UNIT4_PATCHES } from "./b2-unit4";
import { B2_UNIT5_PATCHES } from "./b2-unit5";
import { B2_UNIT6_PATCHES } from "./b2-unit6";
import { B2_UNIT7_PATCHES } from "./b2-unit7";
import { C2_UNIT5_PATCHES } from "./c2-unit5";
import { C2_UNIT4_PATCHES } from "./c2-unit4";
import { C2_UNIT3_PATCHES } from "./c2-unit3";
import { C2_UNIT2_PATCHES } from "./c2-unit2";
import { C2_UNIT1_PATCHES } from "./c2-unit1";
import { C1_UNIT7_PATCHES } from "./c1-unit7";
import { C1_UNIT6_PATCHES } from "./c1-unit6";
import { C1_UNIT5_PATCHES } from "./c1-unit5";
import { C1_UNIT4_PATCHES } from "./c1-unit4";
import { C1_UNIT3_PATCHES } from "./c1-unit3";
import { C1_UNIT2_PATCHES } from "./c1-unit2";
import { C1_UNIT1_PATCHES } from "./c1-unit1";

/** Two patches for one lesson, the second one winning (sections merged one by one). */
function mergePatch(a: LessonPatch | undefined, b: LessonPatch): LessonPatch {
  if (!a) return b;
  const sections = { ...(a.sections ?? {}) };
  for (const [i, sp] of Object.entries(b.sections ?? {})) sections[+i] = { ...sections[+i], ...sp };
  // Questions and rewordings add up too, so a later fix to one question keeps the earlier ones.
  const exercises = a.exercises && b.exercises
    ? {
        ...a.exercises,
        ...b.exercises,
        replace: { ...(a.exercises.replace ?? {}), ...(b.exercises.replace ?? {}) },
        section: { ...(a.exercises.section ?? {}), ...(b.exercises.section ?? {}) },
        drop: [...(a.exercises.drop ?? []), ...(b.exercises.drop ?? [])],
        add: [...(a.exercises.add ?? []), ...(b.exercises.add ?? [])],
      }
    : b.exercises ?? a.exercises;
  const reword = a.reword && b.reword ? [...a.reword, ...b.reword] : b.reword ?? a.reword;
  return { ...a, ...b, sections, exercises, reword, optionNotes: { ...(a.optionNotes ?? {}), ...(b.optionNotes ?? {}) }, alts: { ...(a.alts ?? {}), ...(b.alts ?? {}) } };
}
const mergeAll = (base: Record<string, LessonPatch>, more: Record<string, LessonPatch>) =>
  Object.fromEntries([...new Set([...Object.keys(base), ...Object.keys(more)])].map((k) => [k, more[k] ? mergePatch(base[k], more[k]) : base[k]]));

// Some Beginner lessons gained a warm-up card (and lost, moved or changed a
// few questions) in the old course after their patches here were written
// (a1-unit6-fixes.ts to a1-unit10-fixes.ts). Their patches' section and
// question numbers move to match: sections by `sec` (default +1), and old
// question number → new (null: gone). An added warm-up card itself leaves:
// the new course opens every lesson with its own warm-up, and the old one
// looks back at old-course units (possessives, gustar) the new course
// teaches later. Patches written after those changes (a1-unit7.ts on) use
// the new numbers and are added after this step.
const REINDEX: Record<string, { sec?: number; ex?: Record<number, number | null> }> = {
  "numbers-0-100-1": { ex: { 0: null, 6: 5 } },
  "numbers-0-100-2": { ex: { 20: null } },
  "telling-time-1": { ex: { 4: 3, 21: null, 22: 18, 23: 19 } },
  "telling-time-2": {},
  "days-months-dates": { ex: { 17: 15, 21: 19, 22: 20 } },
  "question-words": { ex: { 19: null } },
  "demonstratives-1": { ex: { 6: null, 12: 11, 15: null, 17: 15, 19: 17, 20: 18, 21: null } },
  "a1-word-web-clothes": { ex: { 3: 2, 5: 4, 23: 20, 24: 21, 25: 22 } },
  "a1r-transform-demonstratives": { sec: 0, ex: { 23: null, 24: 23, 25: 24 } },
};
function reindex(p: LessonPatch, r: (typeof REINDEX)[string]): LessonPatch {
  const sec = r.sec ?? 1;
  const move = <T,>(o: Record<number, T> | undefined): Record<number, T> | undefined =>
    o && Object.fromEntries(Object.entries(o).flatMap(([k, v]) => { const to = r.ex && +k in r.ex ? r.ex[+k] : +k; return to === null ? [] : [[to, v]]; }));
  return {
    ...p,
    sections: p.sections && Object.fromEntries(Object.entries(p.sections).map(([k, v]) => [+k + sec, v])),
    optionNotes: move(p.optionNotes),
    exercises: p.exercises && { ...p.exercises, replace: move(p.exercises.replace) },
    ...(sec ? { dropSections: [0] } : {}),
  };
}
const merged: Record<string, LessonPatch> = mergeAll(mergeAll(mergeAll(mergeAll(mergeAll(mergeAll({ ...A1_PATCHES, ...MISC_PATCHES }, A1_UNIT1_PATCHES), A1_UNIT2_PATCHES), A1_UNIT3_PATCHES), A1_UNIT4_PATCHES), A1_UNIT5_PATCHES), A1_UNIT6_PATCHES);
const realigned: Record<string, LessonPatch> = Object.fromEntries(Object.entries(merged).map(([k, p]) => [k, REINDEX[k] ? reindex(p, REINDEX[k]) : p]));
export const ES_PATCHES: Record<string, LessonPatch> = [A1_UNIT7_PATCHES, A2_UNIT1_PATCHES, A2_UNIT2_PATCHES, A2_UNIT3_PATCHES, A2_UNIT4_PATCHES, A2_UNIT5_PATCHES, A2_UNIT6_PATCHES, A2_UNIT7_PATCHES, B1_UNIT1_PATCHES, B1_UNIT2_PATCHES, B1_UNIT3_PATCHES, B1_UNIT4_PATCHES, B1_UNIT5_PATCHES, B1_UNIT6_PATCHES, B1_UNIT7_PATCHES, B2_UNIT1_PATCHES, B2_UNIT2_PATCHES, B2_UNIT3_PATCHES, B2_UNIT4_PATCHES, B2_UNIT5_PATCHES, B2_UNIT6_PATCHES, B2_UNIT7_PATCHES, C1_UNIT1_PATCHES, C1_UNIT2_PATCHES, C1_UNIT3_PATCHES, C1_UNIT4_PATCHES, C1_UNIT5_PATCHES, C1_UNIT6_PATCHES, C1_UNIT7_PATCHES, C2_UNIT1_PATCHES, C2_UNIT2_PATCHES, C2_UNIT3_PATCHES, C2_UNIT4_PATCHES, C2_UNIT5_PATCHES].reduce(mergeAll, realigned);
export const ES_RECUTS: Recut[] = [...A1_RECUTS, ...GAP_RECUTS];
export { applyPatch, checkPatch } from "./patch";
export { buildRecut } from "./recut";
export { redesignLesson, redesignParts, autoPatch } from "./auto";
export { CONCEPT_TABLES } from "./concept-tables";
export { splitLesson, MAX_CONCEPT_CARDS } from "./split";
export { withWarmUp, warmUpFor, WARM_UP_HEADING } from "./warmup";
