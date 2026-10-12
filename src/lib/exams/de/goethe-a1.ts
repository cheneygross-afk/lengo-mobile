// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { GOETHE_A1_HOEREN } from "./goethe-a1-hoeren";
import { GOETHE_A1_LESEN } from "./goethe-a1-lesen";
import { GOETHE_A1_SCHREIBEN } from "./goethe-a1-schreiben";
import { GOETHE_A1_SPRECHEN } from "./goethe-a1-sprechen";

// The real Start Deutsch 1 starts with Hören, then Lesen; from A2 on,
// Lesen comes first.
export const GOETHE_A1: Exam = {
  slug: "goethe-a1",
  level: "A1",
  title: "Goethe-Zertifikat A1 practice exam",
  description:
    "A full-length Goethe-Zertifikat A1 (Start Deutsch 1) practice exam: Hören with audio, Lesen with messages, web pages and signs, a form and a short email with feedback, and the three-part Sprechen with model answers. Each of the four parts is marked out of 25, and you pass with 60 of the 100 points, as in the real exam.",
  papers: [GOETHE_A1_HOEREN, GOETHE_A1_LESEN, GOETHE_A1_SCHREIBEN, GOETHE_A1_SPRECHEN],
};
