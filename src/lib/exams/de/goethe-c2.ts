// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { GOETHE_C2_LESEN } from "./goethe-c2-lesen";
import { GOETHE_C2_HOEREN } from "./goethe-c2-hoeren";
import { GOETHE_C2_SCHREIBEN } from "./goethe-c2-schreiben";
import { GOETHE_C2_SPRECHEN } from "./goethe-c2-sprechen";

// The Goethe-Zertifikat C2 is also called the Großes Deutsches
// Sprachdiplom. Like B1 to C1 it is modular: Lesen, Hören, Schreiben and
// Sprechen are separate modules, each passed on its own.
export const GOETHE_C2: Exam = {
  slug: "goethe-c2",
  level: "C2",
  title: "Goethe-Zertifikat C2 practice exam",
  description:
    "A full-length Goethe-Zertifikat C2 (Großes Deutsches Sprachdiplom) practice exam: Lesen with an idiomatic gapped essay, missing sentences, a long essay and a commentary; Hören with five short radio pieces, a long radio conversation and part of a lecture, with audio; Schreiben with an argued essay on one of two topics and a rewrite from colloquial to formal German, with feedback; and Sprechen with a talk and a discussion with the examiner, with model answers. Each module is marked out of 25 and passed on its own, as in the real exam.",
  papers: [GOETHE_C2_LESEN, GOETHE_C2_HOEREN, GOETHE_C2_SCHREIBEN, GOETHE_C2_SPRECHEN],
};
