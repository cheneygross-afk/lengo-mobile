// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { DELF_A2_CO } from "./delf-a2-co";
import { DELF_A2_CE } from "./delf-a2-ce";
import { DELF_A2_PE } from "./delf-a2-pe";
import { DELF_A2_PO } from "./delf-a2-po";

export const DELF_A2: Exam = {
  slug: "delf-a2",
  level: "A2",
  title: "DELF A2 practice exam",
  description:
    "A full-length DELF A2 practice exam: listening to announcements, radio and everyday dialogues, reading ads, emails, rules and a magazine article, two 60-word writing tasks with feedback, and a three-part speaking test with timers and model answers. Each of the four papers is marked out of 25, as in the real exam.",
  papers: [DELF_A2_CO, DELF_A2_CE, DELF_A2_PE, DELF_A2_PO],
};
