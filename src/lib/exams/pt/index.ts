// Synced from cheneygross-afk/lengo:src/lib/exams/pt/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Celpe-Bras practice exams of the Brazilian Portuguese course (see
// ../types.ts and ./scoring.ts), shown under the Portuguese Study Tools at
// /lessons/pt/tools/celpe-bras, plus one shorter Deep End practice test
// at A2 in the same integrated style (not a Celpe-Bras exam). Imports
// only exam data, never lesson content, so the exam pages stay small in
// the server bundle.
//
// The real Celpe-Bras is one exam for every candidate, with no CEFR
// level of its own; its four practice exams carry level "B2" (the middle
// of the range it certifies, Intermediário to Avançado Superior), which is
// the level the writing feedback judges them at. The practice test is A2.
import type { Exam } from "../types";
import { isPractice } from "./scoring";
import { CELPE_BRAS_1 } from "./celpe-bras-1";
import { CELPE_BRAS_2 } from "./celpe-bras-2";
import { CELPE_BRAS_3 } from "./celpe-bras-3";
import { CELPE_BRAS_4 } from "./celpe-bras-4";
import { PT_PRATICA_A2 } from "./pt-pratica-a2";

export type * from "../types";

export const PT_EXAMS: Exam[] = [CELPE_BRAS_1, CELPE_BRAS_2, CELPE_BRAS_3, CELPE_BRAS_4, PT_PRATICA_A2];

export function getPtExam(slug: string): Exam | undefined {
  return PT_EXAMS.find((e) => e.slug === slug);
}

/** "Celpe-Bras", or "Deep End A2 practice" for the practice test. */
export function ptDiploma(exam: Exam): string {
  return isPractice(exam) ? "Deep End A2 practice (not Celpe-Bras)" : "Celpe-Bras";
}
