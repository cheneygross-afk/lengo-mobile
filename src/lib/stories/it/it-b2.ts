// Synced from cheneygross-afk/lengo:src/lib/stories/it/it-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { IT_B2_S01_STORIES, IT_B2_S01_GLOSSES } from "./batches/it-b2-s01";
import { IT_B2_S02_STORIES, IT_B2_S02_GLOSSES } from "./batches/it-b2-s02";
import { IT_B2_S03_STORIES, IT_B2_S03_GLOSSES } from "./batches/it-b2-s03";
import { IT_B2_S04_STORIES, IT_B2_S04_GLOSSES } from "./batches/it-b2-s04";
import { IT_B2_S05_STORIES, IT_B2_S05_GLOSSES } from "./batches/it-b2-s05";
import { IT_B2_S06_STORIES, IT_B2_S06_GLOSSES } from "./batches/it-b2-s06";
import { IT_B2_S07_STORIES, IT_B2_S07_GLOSSES } from "./batches/it-b2-s07";
import { IT_B2_S08_STORIES, IT_B2_S08_GLOSSES } from "./batches/it-b2-s08";

// Italian course: IT-B2 stories (conventions in ./it-a1.ts). Batches
// it-b2-s01 ... it-b2-s08 are imported as they're written.
export const IT_B2_STORIES: Story[] = [
  ...IT_B2_S01_STORIES,
  ...IT_B2_S02_STORIES,
  ...IT_B2_S03_STORIES,
  ...IT_B2_S04_STORIES,
  ...IT_B2_S05_STORIES,
  ...IT_B2_S06_STORIES,
  ...IT_B2_S07_STORIES,
  ...IT_B2_S08_STORIES,
];

export const IT_B2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...IT_B2_S01_GLOSSES,
  ...IT_B2_S02_GLOSSES,
  ...IT_B2_S03_GLOSSES,
  ...IT_B2_S04_GLOSSES,
  ...IT_B2_S05_GLOSSES,
  ...IT_B2_S06_GLOSSES,
  ...IT_B2_S07_GLOSSES,
  ...IT_B2_S08_GLOSSES,
};
