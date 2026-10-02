// Synced from cheneygross-afk/lengo:src/lib/exams/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The DELE practice exams (see types.ts). Shared by the website's /exams
// pages and the app's Exam practice screens.
import type { Exam } from "./types";
import { DELE_A1 } from "./dele-a1";
import { DELE_A2 } from "./dele-a2";
import { DELE_B1 } from "./dele-b1";
import { DELE_B2 } from "./dele-b2";
import { DELE_C1 } from "./dele-c1";
import { DELE_C2 } from "./dele-c2";

export type * from "./types";

export const EXAMS: Exam[] = [DELE_A1, DELE_A2, DELE_B1, DELE_B2, DELE_C1, DELE_C2];

export function getExam(slug: string): Exam | undefined {
  return EXAMS.find((e) => e.slug === slug);
}
