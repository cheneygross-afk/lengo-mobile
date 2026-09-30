// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "./types";
import { DELE_B1_LECTURA } from "./dele-b1-lectura";
import { DELE_B1_AUDITIVA } from "./dele-b1-auditiva";
import { DELE_B1_ESCRITA } from "./dele-b1-escrita";
import { DELE_B1_ORAL } from "./dele-b1-oral";

export const DELE_B1: Exam = {
  slug: "dele-b1",
  level: "B1",
  title: "DELE B1 practice exam",
  description:
    "A full-length DELE B1 practice exam: five reading tasks, five listening tasks with audio, two writing tasks with feedback and four speaking tasks with timers and model answers.",
  papers: [DELE_B1_LECTURA, DELE_B1_AUDITIVA, DELE_B1_ESCRITA, DELE_B1_ORAL],
};
