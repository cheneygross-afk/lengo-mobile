// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { DALF_C2_CO } from "./dalf-c2-co";
import { DALF_C2_CE } from "./dalf-c2-ce";
import { DALF_C2_PE } from "./dalf-c2-pe";
import { DALF_C2_PO } from "./dalf-c2-po";

// The real DALF C2 has two combined épreuves, each marked out of 50:
// "Compréhension et production orales" (a long recording heard twice,
// then a compte rendu, a personal argument and a debate with the jury)
// and "Compréhension et production écrites" (a dossier of about 2,000
// words, then a structured text of about 700 words, 3 h 30). Here each
// épreuve is split in two so the exam fits the same four-paper layout
// and marking as the DELF levels: the oral épreuve becomes co + po (on
// the same recording), the written one ce + pe (on the same dossier).
export const DALF_C2: Exam = {
  slug: "dalf-c2",
  level: "C2",
  title: "DALF C2 practice exam",
  description:
    "A full DALF C2 practice exam. The real exam has two combined papers, oral and written; here each is split in two. Oral: a long radio interview with audio and comprehension questions, then a compte rendu, a personal argument and a debate with the jury on the same recording. Written: a five-document dossier with comprehension questions, then a 700-word editorial built from the same dossier, with feedback, timers and model answers.",
  papers: [DALF_C2_CO, DALF_C2_CE, DALF_C2_PE, DALF_C2_PO],
};
