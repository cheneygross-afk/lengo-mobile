// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-4.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { CELPE_BRAS_4_COLETIVA } from "./celpe-bras-4-coletiva";
import { CELPE_BRAS_4_INDIVIDUAL } from "./celpe-bras-4-individual";

// Celpe-Bras practice exam 4 (work, education and culture). The real exam is taken in this
// order: the Parte Coletiva (four integrated writing tasks, 3 hours) on
// the first day, the Parte Individual (a 20-minute conversation) on its
// own appointment. One exam for every candidate; level "B2" stands for
// the range it certifies (see ./index.ts).
export const CELPE_BRAS_4: Exam = {
  slug: "celpe-bras-4",
  level: "B2",
  title: "Celpe-Bras practice exam 4",
  description:
    "Celpe-Bras practice exam 4, on work, education and culture: a TV report on app delivery workers, a radio interview on a community library, an article on the four-day week and one on the \"festas juninas\", then the oral on online classes, older students and women's soccer.",
  papers: [CELPE_BRAS_4_COLETIVA, CELPE_BRAS_4_INDIVIDUAL],
};
