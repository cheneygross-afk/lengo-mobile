// Synced from cheneygross-afk/lengo:src/lib/stories/pt/pt-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { PT_B1_S01_STORIES, PT_B1_S01_GLOSSES } from "./batches/pt-b1-s01";
import { PT_B1_S02_STORIES, PT_B1_S02_GLOSSES } from "./batches/pt-b1-s02";
import { PT_B1_S03_STORIES, PT_B1_S03_GLOSSES } from "./batches/pt-b1-s03";
import { PT_B1_S04_STORIES, PT_B1_S04_GLOSSES } from "./batches/pt-b1-s04";
import { PT_B1_S05_STORIES, PT_B1_S05_GLOSSES } from "./batches/pt-b1-s05";
import { PT_B1_S06_STORIES, PT_B1_S06_GLOSSES } from "./batches/pt-b1-s06";
import { PT_B1_S07_STORIES, PT_B1_S07_GLOSSES } from "./batches/pt-b1-s07";
import { PT_B1_S08_STORIES, PT_B1_S08_GLOSSES } from "./batches/pt-b1-s08";

// Brazilian Portuguese course: PT-B1 stories (conventions in ./pt-a1.ts).
export const PT_B1_STORIES: Story[] = [
  ...PT_B1_S01_STORIES,
  ...PT_B1_S02_STORIES,
  ...PT_B1_S03_STORIES,
  ...PT_B1_S04_STORIES,
  ...PT_B1_S05_STORIES,
  ...PT_B1_S06_STORIES,
  ...PT_B1_S07_STORIES,
  ...PT_B1_S08_STORIES,
];

export const PT_B1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...PT_B1_S01_GLOSSES,
  ...PT_B1_S02_GLOSSES,
  ...PT_B1_S03_GLOSSES,
  ...PT_B1_S04_GLOSSES,
  ...PT_B1_S05_GLOSSES,
  ...PT_B1_S06_GLOSSES,
  ...PT_B1_S07_GLOSSES,
  ...PT_B1_S08_GLOSSES,
};
