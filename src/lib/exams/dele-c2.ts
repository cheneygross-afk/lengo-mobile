// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "./types";
import { DELE_C2_LECTURA } from "./dele-c2-lectura";
import { DELE_C2_AUDITIVA } from "./dele-c2-auditiva";
import { DELE_C2_ESCRITA } from "./dele-c2-escrita";
import { DELE_C2_ORAL } from "./dele-c2-oral";

// The real DELE C2 has three papers: Prueba 1 (use of language, reading
// and listening), Prueba 2 (integrated writing) and Prueba 3 (integrated
// speaking). Here Prueba 1 is split into a reading and a listening paper
// so the exam fits the same four-paper layout and marking as the others:
// group 1 is Prueba 1 (reading + listening), group 2 Pruebas 2 and 3.
export const DELE_C2: Exam = {
  slug: "dele-c2",
  level: "C2",
  title: "DELE C2 practice exam",
  description:
    "A full DELE C2 practice exam: use of language and reading, listening with audio, integrated writing from a recorded talk and a report, and an integrated speaking paper with timers and model answers.",
  papers: [DELE_C2_LECTURA, DELE_C2_AUDITIVA, DELE_C2_ESCRITA, DELE_C2_ORAL],
};
