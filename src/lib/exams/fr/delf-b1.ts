// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { DELF_B1_CO } from "./delf-b1-co";
import { DELF_B1_CE } from "./delf-b1-ce";
import { DELF_B1_PE } from "./delf-b1-pe";
import { DELF_B1_PO } from "./delf-b1-po";

export const DELF_B1: Exam = {
  slug: "delf-b1",
  level: "B1",
  title: "DELF B1 practice exam",
  description:
    "A full-length DELF B1 practice exam: listening with three recordings, reading with three documents, an argued forum post with feedback, and the three-part oral exam with timers and model answers.",
  papers: [DELF_B1_CO, DELF_B1_CE, DELF_B1_PE, DELF_B1_PO],
};
