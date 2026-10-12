// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { DE_A1_S01_STORIES } from "./batches/de-a1-s01";
import { DE_A1_S02_STORIES } from "./batches/de-a1-s02";
import { DE_A1_S03_STORIES } from "./batches/de-a1-s03";
import { DE_A1_S04_STORIES } from "./batches/de-a1-s04";

// German course: DE-A1 stories. Conventions for every file in this
// folder (checked by scripts/check-german-stories.ts):
// - `slug` starts with "de-" (stories share the read-tracking and
//   highlight records with the other courses' stories, keyed by slug);
// - `level` is the file's level ("DE-A1" ... "DE-C2");
// - `title` and `paragraphs` are GERMAN (standard German as used in
//   Germany, dialogue in „German quotes“, current spelling); A1: present
//   tense, modal verbs, 80-180 words; A2: Perfekt, Präteritum of sein,
//   haben and the modals, weil/dass clauses, 150-300 words;
// - `subtitle`, every question, option and explanation are ENGLISH, with
//   any German quoted from the story in "double quotes";
// - 3-4 questions, `correctIndex` pointing at the one right option;
// - every story has an English translation of each paragraph and glosses
//   (German word -> English meaning, `forms` the exact lowercase
//   spellings in the text), kept in the same batch file.
export const DE_A1_STORIES: Story[] = [
  ...DE_A1_S01_STORIES,
  ...DE_A1_S02_STORIES,
  ...DE_A1_S03_STORIES,
  ...DE_A1_S04_STORIES,
];
