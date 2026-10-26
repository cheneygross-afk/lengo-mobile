// Synced from cheneygross-afk/lengo:src/lib/stories/ko/ko-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { KO_A2_S01_STORIES, KO_A2_S01_GLOSSES } from "./batches/ko-a2-s01";
import { KO_A2_S02_STORIES, KO_A2_S02_GLOSSES } from "./batches/ko-a2-s02";
import { KO_A2_S03_STORIES, KO_A2_S03_GLOSSES } from "./batches/ko-a2-s03";
import { KO_A2_S04_STORIES, KO_A2_S04_GLOSSES } from "./batches/ko-a2-s04";

// Korean course: KO-A2 stories (conventions in ./ko-a1.ts).
export const KO_A2_STORIES: Story[] = [
  ...KO_A2_S01_STORIES,
  ...KO_A2_S02_STORIES,
  ...KO_A2_S03_STORIES,
  ...KO_A2_S04_STORIES,
];

export const KO_A2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...KO_A2_S01_GLOSSES,
  ...KO_A2_S02_GLOSSES,
  ...KO_A2_S03_GLOSSES,
  ...KO_A2_S04_GLOSSES,
};
