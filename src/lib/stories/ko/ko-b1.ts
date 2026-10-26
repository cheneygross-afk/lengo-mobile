// Synced from cheneygross-afk/lengo:src/lib/stories/ko/ko-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { KO_B1_S01_STORIES, KO_B1_S01_GLOSSES } from "./batches/ko-b1-s01";
import { KO_B1_S02_STORIES, KO_B1_S02_GLOSSES } from "./batches/ko-b1-s02";
import { KO_B1_S03_STORIES, KO_B1_S03_GLOSSES } from "./batches/ko-b1-s03";
import { KO_B1_S04_STORIES, KO_B1_S04_GLOSSES } from "./batches/ko-b1-s04";
import { KO_B1_S05_STORIES, KO_B1_S05_GLOSSES } from "./batches/ko-b1-s05";
import { KO_B1_S06_STORIES, KO_B1_S06_GLOSSES } from "./batches/ko-b1-s06";
import { KO_B1_S07_STORIES, KO_B1_S07_GLOSSES } from "./batches/ko-b1-s07";
import { KO_B1_S08_STORIES, KO_B1_S08_GLOSSES } from "./batches/ko-b1-s08";

// Korean course: KO-B1 stories (conventions in ./ko-a1.ts).
export const KO_B1_STORIES: Story[] = [
  ...KO_B1_S01_STORIES,
  ...KO_B1_S02_STORIES,
  ...KO_B1_S03_STORIES,
  ...KO_B1_S04_STORIES,
  ...KO_B1_S05_STORIES,
  ...KO_B1_S06_STORIES,
  ...KO_B1_S07_STORIES,
  ...KO_B1_S08_STORIES,
];

export const KO_B1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...KO_B1_S01_GLOSSES,
  ...KO_B1_S02_GLOSSES,
  ...KO_B1_S03_GLOSSES,
  ...KO_B1_S04_GLOSSES,
  ...KO_B1_S05_GLOSSES,
  ...KO_B1_S06_GLOSSES,
  ...KO_B1_S07_GLOSSES,
  ...KO_B1_S08_GLOSSES,
};
