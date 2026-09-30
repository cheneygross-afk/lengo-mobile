// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "./types";
import { DELE_C1_LECTURA } from "./dele-c1-lectura";
import { DELE_C1_AUDITIVA } from "./dele-c1-auditiva";
import { DELE_C1_ESCRITA } from "./dele-c1-escrita";
import { DELE_C1_ORAL } from "./dele-c1-oral";

// At C1 the groups differ from A2-B2: group 1 is reading (Prueba 1) plus
// speaking (Prueba 4), group 2 is listening (Prueba 2) plus writing
// (Prueba 3).
export const DELE_C1: Exam = {
  slug: "dele-c1",
  level: "C1",
  title: "DELE C1 practice exam",
  description:
    "A full-length DELE C1 practice exam: reading and use of language, listening and use of language with audio, integrated writing from a recorded talk, and an integrated speaking paper with timers and model answers.",
  papers: [DELE_C1_LECTURA, DELE_C1_AUDITIVA, DELE_C1_ESCRITA, DELE_C1_ORAL],
};
