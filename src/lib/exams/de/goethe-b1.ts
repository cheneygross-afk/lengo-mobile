// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { GOETHE_B1_LESEN } from "./goethe-b1-lesen";
import { GOETHE_B1_HOEREN } from "./goethe-b1-hoeren";
import { GOETHE_B1_SCHREIBEN } from "./goethe-b1-schreiben";
import { GOETHE_B1_SPRECHEN } from "./goethe-b1-sprechen";

// The real Goethe-Zertifikat B1 is modular and taken in this order:
// Lesen, Hören, Schreiben, then Sprechen.
export const GOETHE_B1: Exam = {
  slug: "goethe-b1",
  level: "B1",
  title: "Goethe-Zertifikat B1 practice exam",
  description:
    "A full-length Goethe-Zertifikat B1 practice exam: Lesen with a blog, press articles, ads, readers' letters and house rules, Hören with audio from short announcements to a radio discussion, three writing tasks with feedback, and the three-part Sprechen with model answers. Each module is marked out of 25 and passed with 60 %, as in the real exam.",
  papers: [GOETHE_B1_LESEN, GOETHE_B1_HOEREN, GOETHE_B1_SCHREIBEN, GOETHE_B1_SPRECHEN],
};
