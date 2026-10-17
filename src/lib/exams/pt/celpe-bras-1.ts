// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { CELPE_BRAS_1_COLETIVA } from "./celpe-bras-1-coletiva";
import { CELPE_BRAS_1_INDIVIDUAL } from "./celpe-bras-1-individual";

// Celpe-Bras practice exam 1 (city life). The real exam is taken in this
// order: the Parte Coletiva (four integrated writing tasks, 3 hours) on
// the first day, the Parte Individual (a 20-minute conversation) on its
// own appointment. One exam for every candidate; level "B2" stands for
// the range it certifies (see ./index.ts).
export const CELPE_BRAS_1: Exam = {
  slug: "celpe-bras-1",
  level: "B2",
  title: "Celpe-Bras practice exam 1",
  description:
    "Celpe-Bras practice exam 1, on city life: a TV report on a community garden, a radio interview on noise, a news story on a disputed cycle lane and an article on street markets, each turned into a text for a stated reader, then the 20-minute oral with three \"elementos provocadores\" (hybrid work, street art, pets in flats).",
  papers: [CELPE_BRAS_1_COLETIVA, CELPE_BRAS_1_INDIVIDUAL],
};
