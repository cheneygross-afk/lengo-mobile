// Synced from cheneygross-afk/lengo:src/lib/exams/ko/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The TOPIK practice tests of the Korean course (see ../types.ts and
// ./scoring.ts), shown under the Korean Study Tools at
// /lessons/ko/tools/topik: two full TOPIK I tests (listening and reading,
// levels 1-2) and two full TOPIK II tests (listening, writing and reading,
// levels 3-6). Imports only exam data, never lesson content, so the exam
// pages stay small in the server bundle.
import type { Exam } from "../types";
import { topikKind } from "./scoring";
import { TOPIK_I_1, TOPIK_I_2, TOPIK_II_1, TOPIK_II_2 } from "./topik-tests";

export type * from "../types";

export const KO_EXAMS: Exam[] = [TOPIK_I_1, TOPIK_I_2, TOPIK_II_1, TOPIK_II_2];

export function getKoExam(slug: string): Exam | undefined {
  return KO_EXAMS.find((e) => e.slug === slug);
}

/** "TOPIK I" or "TOPIK II". */
export function koDiploma(exam: Exam): string {
  return `TOPIK ${topikKind(exam)}`;
}
