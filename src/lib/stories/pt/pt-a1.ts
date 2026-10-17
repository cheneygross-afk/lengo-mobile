// Synced from cheneygross-afk/lengo:src/lib/stories/pt/pt-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { PT_A1_S01_STORIES, PT_A1_S01_GLOSSES } from "./batches/pt-a1-s01";
import { PT_A1_S02_STORIES, PT_A1_S02_GLOSSES } from "./batches/pt-a1-s02";
import { PT_A1_S03_STORIES, PT_A1_S03_GLOSSES } from "./batches/pt-a1-s03";
import { PT_A1_S04_STORIES, PT_A1_S04_GLOSSES } from "./batches/pt-a1-s04";

// Brazilian Portuguese course: PT-A1 stories. Conventions for every file in
// this folder (checked by scripts/check-portuguese-stories.ts):
// - `slug` starts with "pt-" (stories share the read-tracking and
//   highlight records with the other courses' stories, keyed by slug);
// - `level` is the file's level ("PT-A1" ... "PT-C2");
// - `title` and `paragraphs` are BRAZILIAN PORTUGUESE, dialogue in
//   “curly quotes” inside the narrative paragraphs, never "straight quotes";
// - `subtitle`, every question, option and explanation are ENGLISH, with
//   any Portuguese quoted from the story in "double quotes";
// - 3-4 questions, `correctIndex` pointing at the one right option;
// - glosses (Portuguese word -> English meaning, `forms` the exact
//   lowercase spellings in the text) live in the same batch file. There
//   is no whole-text translation: readers tap a word for its meaning
//   (user decision, 2026-10-12).
export const PT_A1_STORIES: Story[] = [
  ...PT_A1_S01_STORIES,
  ...PT_A1_S02_STORIES,
  ...PT_A1_S03_STORIES,
  ...PT_A1_S04_STORIES,
];

export const PT_A1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...PT_A1_S01_GLOSSES,
  ...PT_A1_S02_GLOSSES,
  ...PT_A1_S03_GLOSSES,
  ...PT_A1_S04_GLOSSES,
};
