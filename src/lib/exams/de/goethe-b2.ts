// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { GOETHE_B2_LESEN } from "./goethe-b2-lesen";
import { GOETHE_B2_HOEREN } from "./goethe-b2-hoeren";
import { GOETHE_B2_SCHREIBEN } from "./goethe-b2-schreiben";
import { GOETHE_B2_SPRECHEN } from "./goethe-b2-sprechen";

// The real Goethe-Zertifikat B2 is modular and taken in this order:
// Lesen, Hören, Schreiben, then Sprechen.
export const GOETHE_B2: Exam = {
  slug: "goethe-b2",
  level: "B2",
  title: "Goethe-Zertifikat B2 practice exam",
  description:
    "A full-length Goethe-Zertifikat B2 practice exam: Lesen with forum posts, a gapped article, a long article, readers' comments and library rules, Hören with audio from short texts to an interview, a discussion and a lecture, a forum post and a work message with feedback, and the Sprechen talk and discussion with model answers. Each module is marked out of 25 and passed with 60 %, as in the real exam.",
  papers: [GOETHE_B2_LESEN, GOETHE_B2_HOEREN, GOETHE_B2_SCHREIBEN, GOETHE_B2_SPRECHEN],
};
