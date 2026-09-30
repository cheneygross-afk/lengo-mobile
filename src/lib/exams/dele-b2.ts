// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "./types";
import { DELE_B2_LECTURA } from "./dele-b2-lectura";
import { DELE_B2_AUDITIVA } from "./dele-b2-auditiva";
import { DELE_B2_ESCRITA } from "./dele-b2-escrita";
import { DELE_B2_ORAL } from "./dele-b2-oral";

export const DELE_B2: Exam = {
  slug: "dele-b2",
  level: "B2",
  title: "DELE B2 practice exam",
  description:
    "A full-length DELE B2 practice exam: four reading tasks, five listening tasks with audio, a letter based on a recording plus an opinion or narrative text with feedback, and three speaking tasks with timers and model answers.",
  papers: [DELE_B2_LECTURA, DELE_B2_AUDITIVA, DELE_B2_ESCRITA, DELE_B2_ORAL],
};
