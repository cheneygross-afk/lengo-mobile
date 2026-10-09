// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { DELF_B2_CO } from "./delf-b2-co";
import { DELF_B2_CE } from "./delf-b2-ce";
import { DELF_B2_PE } from "./delf-b2-pe";
import { DELF_B2_PO } from "./delf-b2-po";

export const DELF_B2: Exam = {
  slug: "delf-b2",
  level: "B2",
  title: "DELF B2 practice exam",
  description:
    "A full-length DELF B2 practice exam: listening with an interview, a radio column and short news items, reading with two long texts, an argued formal letter with feedback, and the oral exposé and debate with timers and model answers.",
  papers: [DELF_B2_CO, DELF_B2_CE, DELF_B2_PE, DELF_B2_PO],
};
