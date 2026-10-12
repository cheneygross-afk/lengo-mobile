// Synced from cheneygross-afk/lengo:src/lib/exams/de/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Goethe-Zertifikat practice exams of the German course (see
// ../types.ts and ./scoring.ts), shown under the German Study Tools at
// /lessons/de/tools/goethe. Imports only exam data, never lesson content,
// so the exam pages stay small in the server bundle.
import type { Exam } from "../types";
import { GOETHE_A1 } from "./goethe-a1";
import { GOETHE_A2 } from "./goethe-a2";
import { GOETHE_B1 } from "./goethe-b1";
import { GOETHE_B2 } from "./goethe-b2";
import { GOETHE_C1 } from "./goethe-c1";
import { GOETHE_C2 } from "./goethe-c2";

export type * from "../types";

export const DE_EXAMS: Exam[] = [GOETHE_A1, GOETHE_A2, GOETHE_B1, GOETHE_B2, GOETHE_C1, GOETHE_C2];

export const DE_EXAM_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export function getDeExam(slug: string): Exam | undefined {
  return DE_EXAMS.find((e) => e.slug === slug);
}

/** "Goethe-Zertifikat A1" ... "Goethe-Zertifikat C2". */
export function deDiploma(exam: Exam): string {
  return `Goethe-Zertifikat ${exam.level}`;
}
