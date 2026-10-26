// Synced from cheneygross-afk/lengo:src/lib/stories/ko/ko-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { KO_A1_S01_STORIES, KO_A1_S01_GLOSSES } from "./batches/ko-a1-s01";
import { KO_A1_S02_STORIES, KO_A1_S02_GLOSSES } from "./batches/ko-a1-s02";
import { KO_A1_S03_STORIES, KO_A1_S03_GLOSSES } from "./batches/ko-a1-s03";
import { KO_A1_S04_STORIES, KO_A1_S04_GLOSSES } from "./batches/ko-a1-s04";

// Korean course: KO-A1 stories. Conventions for every file in this folder
// (checked by scripts/check-korean-stories.ts; writers' brief in
// docs/korean-course/story-brief.md):
// - `slug` starts with "ko-" and is lowercase ASCII with hyphens (stories
//   share the read-tracking and highlight records with the other courses'
//   stories, keyed by slug);
// - `level` is the file's level ("KO-A1" ... "KO-C2");
// - `title` and `paragraphs` are KOREAN in Hangul, Seoul standard spelling
//   and spacing: no Hanja, no romanization (Latin letters only for a few
//   brand names or abbreviations such as KTX); dialogue in “curly quotes”
//   inside the narrative paragraphs, never "straight quotes";
// - `subtitle`, every question, option and explanation are ENGLISH, with
//   any Korean quoted from the story in "double quotes";
// - 3-4 questions, `correctIndex` pointing at the one right option;
// - glosses (Korean word -> English meaning) live in the same batch file.
//   Korean writes a word and its particles or endings as one spaced unit
//   (어절), so each of `forms` is a whole whitespace-separated token of the
//   text with its punctuation stripped ("학교에", "먹었어요"). There is no
//   whole-text translation: readers tap a word for its meaning (user
//   decision, 2026-10-12).
export const KO_A1_STORIES: Story[] = [
  ...KO_A1_S01_STORIES,
  ...KO_A1_S02_STORIES,
  ...KO_A1_S03_STORIES,
  ...KO_A1_S04_STORIES,
];

export const KO_A1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...KO_A1_S01_GLOSSES,
  ...KO_A1_S02_GLOSSES,
  ...KO_A1_S03_GLOSSES,
  ...KO_A1_S04_GLOSSES,
};
