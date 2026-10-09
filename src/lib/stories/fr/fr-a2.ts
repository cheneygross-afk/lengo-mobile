// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { FR_A2_S01_STORIES } from "./batches/fr-a2-s01";
import { FR_A2_S02_STORIES } from "./batches/fr-a2-s02";
import { FR_A2_S03_STORIES } from "./batches/fr-a2-s03";
import { FR_A2_S04_STORIES } from "./batches/fr-a2-s04";

// French course: FR-A2 stories. Conventions for every file in this
// folder (checked by scripts/check-french-stories.ts):
// - `slug` starts with "fr-" (stories share the read-tracking and
//   highlight records with the other courses' stories, keyed by slug);
// - `level` is the file's level ("FR-A1" ... "FR-C2");
// - `title` and `paragraphs` are FRENCH (metropolitan French, dialogue in
//   «guillemets», straight apostrophes); A1: present tense, 80-180 words;
//   A2: passé composé, imparfait, futur proche, 150-300 words;
// - `subtitle`, every question, option and explanation are ENGLISH, with
//   any French quoted from the story in "double quotes";
// - 3-4 questions, `correctIndex` pointing at the one right option;
// - every story has an English translation of each paragraph and glosses
//   (French word -> English meaning, `forms` the exact lowercase
//   spellings in the text), kept in the same batch file.
export const FR_A2_STORIES: Story[] = [
  ...FR_A2_S01_STORIES,
  ...FR_A2_S02_STORIES,
  ...FR_A2_S03_STORIES,
  ...FR_A2_S04_STORIES,
];
