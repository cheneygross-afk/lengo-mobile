// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-3.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { CELPE_BRAS_3_COLETIVA } from "./celpe-bras-3-coletiva";
import { CELPE_BRAS_3_INDIVIDUAL } from "./celpe-bras-3-individual";

// Celpe-Bras practice exam 3 (the environment and consumption). The real exam is taken in this
// order: the Parte Coletiva (four integrated writing tasks, 3 hours) on
// the first day, the Parte Individual (a 20-minute conversation) on its
// own appointment. One exam for every candidate; level "B2" stands for
// the range it certifies (see ./index.ts).
export const CELPE_BRAS_3: Exam = {
  slug: "celpe-bras-3",
  level: "B2",
  title: "Celpe-Bras practice exam 3",
  description:
    "Celpe-Bras practice exam 3, on the environment and consumption: a TV report on a recycling cooperative, a radio bulletin on a water shortage, an article on second-hand clothes and one on community tourism in the Amazon, then the oral on plastic bags, electric cars and food waste.",
  papers: [CELPE_BRAS_3_COLETIVA, CELPE_BRAS_3_INDIVIDUAL],
};
