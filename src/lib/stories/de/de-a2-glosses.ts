// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-a2-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { DE_A2_S01_GLOSSES } from "./batches/de-a2-s01";
import { DE_A2_S02_GLOSSES } from "./batches/de-a2-s02";
import { DE_A2_S03_GLOSSES } from "./batches/de-a2-s03";
import { DE_A2_S04_GLOSSES } from "./batches/de-a2-s04";

// Glosses for the DE-A2 stories, keyed by story slug. In this course `es`
// holds the GERMAN dictionary form ("aufstehen", "die Bäckerei"), `en` its
// English meaning, and `forms` the exact lowercase spellings in the story
// text ("stehe", "bäckerei"), without surrounding punctuation.
export const DE_A2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...DE_A2_S01_GLOSSES,
  ...DE_A2_S02_GLOSSES,
  ...DE_A2_S03_GLOSSES,
  ...DE_A2_S04_GLOSSES,
};
