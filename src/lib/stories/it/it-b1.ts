// Synced from cheneygross-afk/lengo:src/lib/stories/it/it-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { IT_B1_S01_STORIES, IT_B1_S01_GLOSSES } from "./batches/it-b1-s01";
import { IT_B1_S02_STORIES, IT_B1_S02_GLOSSES } from "./batches/it-b1-s02";
import { IT_B1_S03_STORIES, IT_B1_S03_GLOSSES } from "./batches/it-b1-s03";
import { IT_B1_S04_STORIES, IT_B1_S04_GLOSSES } from "./batches/it-b1-s04";
import { IT_B1_S05_STORIES, IT_B1_S05_GLOSSES } from "./batches/it-b1-s05";
import { IT_B1_S06_STORIES, IT_B1_S06_GLOSSES } from "./batches/it-b1-s06";
import { IT_B1_S07_STORIES, IT_B1_S07_GLOSSES } from "./batches/it-b1-s07";
import { IT_B1_S08_STORIES, IT_B1_S08_GLOSSES } from "./batches/it-b1-s08";

// Italian course: IT-B1 stories (conventions in ./it-a1.ts). Batches
// it-b1-s01 ... it-b1-s08 are imported as they're written.
export const IT_B1_STORIES: Story[] = [
  ...IT_B1_S01_STORIES,
  ...IT_B1_S02_STORIES,
  ...IT_B1_S03_STORIES,
  ...IT_B1_S04_STORIES,
  ...IT_B1_S05_STORIES,
  ...IT_B1_S06_STORIES,
  ...IT_B1_S07_STORIES,
  ...IT_B1_S08_STORIES,
];

export const IT_B1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...IT_B1_S01_GLOSSES,
  ...IT_B1_S02_GLOSSES,
  ...IT_B1_S03_GLOSSES,
  ...IT_B1_S04_GLOSSES,
  ...IT_B1_S05_GLOSSES,
  ...IT_B1_S06_GLOSSES,
  ...IT_B1_S07_GLOSSES,
  ...IT_B1_S08_GLOSSES,
};
