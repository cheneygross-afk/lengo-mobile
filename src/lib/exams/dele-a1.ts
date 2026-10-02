// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "./types";
import { DELE_A1_LECTURA } from "./dele-a1-lectura";
import { DELE_A1_AUDITIVA } from "./dele-a1-auditiva";
import { DELE_A1_ESCRITA } from "./dele-a1-escrita";
import { DELE_A1_ORAL } from "./dele-a1-oral";

export const DELE_A1: Exam = {
  slug: "dele-a1",
  level: "A1",
  title: "DELE A1 practice exam",
  description:
    "A full-length DELE A1 practice exam: reading, listening with audio, a form and a short message with feedback, and a speaking paper with timers and model answers, marked the way the Instituto Cervantes marks it.",
  papers: [DELE_A1_LECTURA, DELE_A1_AUDITIVA, DELE_A1_ESCRITA, DELE_A1_ORAL],
};
