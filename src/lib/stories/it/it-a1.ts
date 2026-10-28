// Synced from cheneygross-afk/lengo:src/lib/stories/it/it-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { IT_A1_S01_STORIES, IT_A1_S01_GLOSSES } from "./batches/it-a1-s01";
import { IT_A1_S02_STORIES, IT_A1_S02_GLOSSES } from "./batches/it-a1-s02";
import { IT_A1_S03_STORIES, IT_A1_S03_GLOSSES } from "./batches/it-a1-s03";
import { IT_A1_S04_STORIES, IT_A1_S04_GLOSSES } from "./batches/it-a1-s04";

// Italian course: IT-A1 stories. Conventions for every file in this folder
// (checked by scripts/check-italian-stories.ts):
// - `slug` starts with "it-" (stories share the read-tracking and
//   highlight records with the other courses' stories, keyed by slug);
// - `level` is the file's level ("IT-A1" ... "IT-C2");
// - `title` and `paragraphs` are STANDARD ITALIAN, dialogue in
//   “curly quotes” inside the narrative paragraphs, never "straight quotes"
//   or «guillemets»; elision with a straight apostrophe (l'acqua, un po');
// - `subtitle`, every question, option and explanation are ENGLISH, with
//   any Italian quoted from the story in "double quotes";
// - 4 questions, `correctIndex` pointing at the one right option;
// - 8-12 glosses (Italian word -> English meaning, `forms` the exact
//   lowercase spellings in the text) live in the same batch file. There
//   is no whole-text translation: readers tap a word for its meaning
//   (user decision, 2026-10-12).
// Batches it-a1-s01 ... it-a1-s04 are imported as they're written.
export const IT_A1_STORIES: Story[] = [
  ...IT_A1_S01_STORIES,
  ...IT_A1_S02_STORIES,
  ...IT_A1_S03_STORIES,
  ...IT_A1_S04_STORIES,
];

export const IT_A1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...IT_A1_S01_GLOSSES,
  ...IT_A1_S02_GLOSSES,
  ...IT_A1_S03_GLOSSES,
  ...IT_A1_S04_GLOSSES,
};
