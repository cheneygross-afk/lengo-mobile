// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { GOETHE_A2_LESEN } from "./goethe-a2-lesen";
import { GOETHE_A2_HOEREN } from "./goethe-a2-hoeren";
import { GOETHE_A2_SCHREIBEN } from "./goethe-a2-schreiben";
import { GOETHE_A2_SPRECHEN } from "./goethe-a2-sprechen";

export const GOETHE_A2: Exam = {
  slug: "goethe-a2",
  level: "A2",
  title: "Goethe-Zertifikat A2 practice exam",
  description:
    "A full-length Goethe-Zertifikat A2 practice exam: Lesen with an article, a store directory, an email and ads, Hören with radio texts, dialogues and an interview, a text message and an email with feedback, and the three-part Sprechen with model answers. Each of the four parts is marked out of 25, and you pass with 60 of the 100 points, as in the real exam.",
  papers: [GOETHE_A2_LESEN, GOETHE_A2_HOEREN, GOETHE_A2_SCHREIBEN, GOETHE_A2_SPRECHEN],
};
