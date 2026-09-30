// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "./types";
import { DELE_A2_LECTURA } from "./dele-a2-lectura";
import { DELE_A2_AUDITIVA } from "./dele-a2-auditiva";
import { DELE_A2_ESCRITA } from "./dele-a2-escrita";
import { DELE_A2_ORAL } from "./dele-a2-oral";

export const DELE_A2: Exam = {
  slug: "dele-a2",
  level: "A2",
  title: "DELE A2 practice exam",
  description:
    "A full-length DELE A2 practice exam: reading, listening with audio, writing with feedback and a speaking paper with timers and model answers, marked the way the Instituto Cervantes marks it.",
  papers: [DELE_A2_LECTURA, DELE_A2_AUDITIVA, DELE_A2_ESCRITA, DELE_A2_ORAL],
};
