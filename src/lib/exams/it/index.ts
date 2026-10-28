// Synced from cheneygross-afk/lengo:src/lib/exams/it/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The CILS practice exams of the Italian course (see ../types.ts and
// ./scoring.ts), shown under the Italian Study Tools at
// /lessons/it/tools/cils: two full practice exams for each CILS level,
// CILS A1 and A2, CILS UNO (B1), DUE (B2), TRE (C1) and QUATTRO (C2),
// each with the real exam's five sections. Imports only exam data, never
// lesson content, so the exam pages stay small in the server bundle.
import type { Exam } from "../types";
import { cilsLevel } from "./scoring";
import { CILS_A1_1 } from "./cils-a1-1";
import { CILS_A1_2 } from "./cils-a1-2";
import { CILS_A2_1 } from "./cils-a2-1";
import { CILS_A2_2 } from "./cils-a2-2";
import { CILS_UNO_1 } from "./cils-uno-1";
import { CILS_UNO_2 } from "./cils-uno-2";
import { CILS_DUE_1 } from "./cils-due-1";
import { CILS_DUE_2 } from "./cils-due-2";
import { CILS_TRE_1 } from "./cils-tre-1";
import { CILS_TRE_2 } from "./cils-tre-2";
import { CILS_QUATTRO_1 } from "./cils-quattro-1";
import { CILS_QUATTRO_2 } from "./cils-quattro-2";

export type * from "../types";

export const IT_EXAMS: Exam[] = [
  CILS_A1_1,
  CILS_A1_2,
  CILS_A2_1,
  CILS_A2_2,
  CILS_UNO_1,
  CILS_UNO_2,
  CILS_DUE_1,
  CILS_DUE_2,
  CILS_TRE_1,
  CILS_TRE_2,
  CILS_QUATTRO_1,
  CILS_QUATTRO_2,
];

export function getItExam(slug: string): Exam | undefined {
  return IT_EXAMS.find((e) => e.slug === slug);
}

/** "CILS UNO", the exam's own name. */
export function itDiploma(exam: Exam): string {
  return cilsLevel(exam.level).exam;
}
