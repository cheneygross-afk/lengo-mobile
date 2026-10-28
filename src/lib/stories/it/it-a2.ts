// Synced from cheneygross-afk/lengo:src/lib/stories/it/it-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { IT_A2_S01_STORIES, IT_A2_S01_GLOSSES } from "./batches/it-a2-s01";
import { IT_A2_S02_STORIES, IT_A2_S02_GLOSSES } from "./batches/it-a2-s02";
import { IT_A2_S03_STORIES, IT_A2_S03_GLOSSES } from "./batches/it-a2-s03";
import { IT_A2_S04_STORIES, IT_A2_S04_GLOSSES } from "./batches/it-a2-s04";

// Italian course: IT-A2 stories (conventions in ./it-a1.ts). Batches
// it-a2-s01 ... it-a2-s04 are imported as they're written.
export const IT_A2_STORIES: Story[] = [
  ...IT_A2_S01_STORIES,
  ...IT_A2_S02_STORIES,
  ...IT_A2_S03_STORIES,
  ...IT_A2_S04_STORIES,
];

export const IT_A2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...IT_A2_S01_GLOSSES,
  ...IT_A2_S02_GLOSSES,
  ...IT_A2_S03_GLOSSES,
  ...IT_A2_S04_GLOSSES,
};
