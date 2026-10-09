// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { DELF_A1_CO } from "./delf-a1-co";
import { DELF_A1_CE } from "./delf-a1-ce";
import { DELF_A1_PE } from "./delf-a1-pe";
import { DELF_A1_PO } from "./delf-a1-po";

export const DELF_A1: Exam = {
  slug: "delf-a1",
  level: "A1",
  title: "DELF A1 practice exam",
  description:
    "A full-length DELF A1 practice exam: listening with audio, reading everyday documents, a form and a short message with feedback, and a three-part speaking test with timers and model answers. Each of the four papers is marked out of 25, as in the real exam.",
  papers: [DELF_A1_CO, DELF_A1_CE, DELF_A1_PE, DELF_A1_PO],
};
