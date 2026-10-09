// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { DALF_C1_CO } from "./dalf-c1-co";
import { DALF_C1_CE } from "./dalf-c1-ce";
import { DALF_C1_PE } from "./dalf-c1-pe";
import { DALF_C1_PO } from "./dalf-c1-po";

export const DALF_C1: Exam = {
  slug: "dalf-c1",
  level: "C1",
  title: "DALF C1 practice exam",
  description:
    "A full-length DALF C1 practice exam: a long radio interview and short radio documents with audio, a long article and three opinion texts to read, a synthesis of documents and an argued essay with feedback, and an exposé from a dossier followed by a discussion with the jury, with timers and model answers.",
  papers: [DALF_C1_CO, DALF_C1_CE, DALF_C1_PE, DALF_C1_PO],
};
