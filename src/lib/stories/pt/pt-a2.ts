// Synced from cheneygross-afk/lengo:src/lib/stories/pt/pt-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { PT_A2_S01_STORIES, PT_A2_S01_GLOSSES } from "./batches/pt-a2-s01";
import { PT_A2_S02_STORIES, PT_A2_S02_GLOSSES } from "./batches/pt-a2-s02";
import { PT_A2_S03_STORIES, PT_A2_S03_GLOSSES } from "./batches/pt-a2-s03";
import { PT_A2_S04_STORIES, PT_A2_S04_GLOSSES } from "./batches/pt-a2-s04";

// Brazilian Portuguese course: PT-A2 stories (conventions in ./pt-a1.ts).
export const PT_A2_STORIES: Story[] = [
  ...PT_A2_S01_STORIES,
  ...PT_A2_S02_STORIES,
  ...PT_A2_S03_STORIES,
  ...PT_A2_S04_STORIES,
];

export const PT_A2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...PT_A2_S01_GLOSSES,
  ...PT_A2_S02_GLOSSES,
  ...PT_A2_S03_GLOSSES,
  ...PT_A2_S04_GLOSSES,
};
