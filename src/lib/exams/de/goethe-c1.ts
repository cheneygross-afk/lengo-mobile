// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { GOETHE_C1_LESEN } from "./goethe-c1-lesen";
import { GOETHE_C1_HOEREN } from "./goethe-c1-hoeren";
import { GOETHE_C1_SCHREIBEN } from "./goethe-c1-schreiben";
import { GOETHE_C1_SPRECHEN } from "./goethe-c1-sprechen";

export const GOETHE_C1: Exam = {
  slug: "goethe-c1",
  level: "C1",
  title: "Goethe-Zertifikat C1 practice exam",
  description:
    "A full-length Goethe-Zertifikat C1 practice exam: Lesen with a gapped text, a long article, four opinions and a popular-science text; Hören with an information call, a radio interview and part of a talk, with audio; Schreiben with a forum post and a formal letter, with feedback; and Sprechen with a short talk and a discussion, with model answers. Each module is marked out of 25 and passed on its own, as in the real exam.",
  papers: [GOETHE_C1_LESEN, GOETHE_C1_HOEREN, GOETHE_C1_SCHREIBEN, GOETHE_C1_SPRECHEN],
};
