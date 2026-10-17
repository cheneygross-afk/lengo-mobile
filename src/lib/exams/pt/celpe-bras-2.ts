// Synced from cheneygross-afk/lengo:src/lib/exams/pt/celpe-bras-2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { CELPE_BRAS_2_COLETIVA } from "./celpe-bras-2-coletiva";
import { CELPE_BRAS_2_INDIVIDUAL } from "./celpe-bras-2-individual";

// Celpe-Bras practice exam 2 (health and wellbeing). The real exam is taken in this
// order: the Parte Coletiva (four integrated writing tasks, 3 hours) on
// the first day, the Parte Individual (a 20-minute conversation) on its
// own appointment. One exam for every candidate; level "B2" stands for
// the range it certifies (see ./index.ts).
export const CELPE_BRAS_2: Exam = {
  slug: "celpe-bras-2",
  level: "B2",
  title: "Celpe-Bras practice exam 2",
  description:
    "Celpe-Bras practice exam 2, on health and wellbeing: a TV report on teenagers' sleep, a radio interview on ultra-processed food, a hospital volunteering programme and an advice column on children and screens, then the oral on outdoor gyms, self-medication and meditation at work.",
  papers: [CELPE_BRAS_2_COLETIVA, CELPE_BRAS_2_INDIVIDUAL],
};
