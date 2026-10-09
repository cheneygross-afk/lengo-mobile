// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-a1-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { FR_A1_S01_GLOSSES } from "./batches/fr-a1-s01";
import { FR_A1_S02_GLOSSES } from "./batches/fr-a1-s02";
import { FR_A1_S03_GLOSSES } from "./batches/fr-a1-s03";
import { FR_A1_S04_GLOSSES } from "./batches/fr-a1-s04";

// Glosses for the FR-A1 stories, keyed by story slug. In this course `es`
// holds the FRENCH dictionary form ("se lever", "la boulangerie"), `en` its
// English meaning, and `forms` the exact lowercase spellings in the story
// text ("lève", "l'école"), without surrounding punctuation.
export const FR_A1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...FR_A1_S01_GLOSSES,
  ...FR_A1_S02_GLOSSES,
  ...FR_A1_S03_GLOSSES,
  ...FR_A1_S04_GLOSSES,
};
