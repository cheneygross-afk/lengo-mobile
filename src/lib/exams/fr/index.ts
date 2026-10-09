// Synced from cheneygross-afk/lengo:src/lib/exams/fr/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The DELF and DALF practice exams of the French course (see ../types.ts
// and docs/french-course/exam-brief.md), shown under the French Study
// Tools at /lessons/fr/tools/delf. Imports only exam data, never lesson
// content, so the exam pages stay small in the server bundle.
import type { Exam } from "../types";
import { DELF_A1 } from "./delf-a1";
import { DELF_A2 } from "./delf-a2";
import { DELF_B1 } from "./delf-b1";
import { DELF_B2 } from "./delf-b2";
import { DALF_C1 } from "./dalf-c1";
import { DALF_C2 } from "./dalf-c2";

export type * from "../types";

export const FR_EXAMS: Exam[] = [DELF_A1, DELF_A2, DELF_B1, DELF_B2, DALF_C1, DALF_C2];

export function getFrExam(slug: string): Exam | undefined {
  return FR_EXAMS.find((e) => e.slug === slug);
}

/** "DELF A1" ... "DALF C2". */
export function frDiploma(exam: Exam): string {
  return `${exam.level.startsWith("C") ? "DALF" : "DELF"} ${exam.level}`;
}
