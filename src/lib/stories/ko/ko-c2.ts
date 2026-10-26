// Synced from cheneygross-afk/lengo:src/lib/stories/ko/ko-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { KO_C2_S01_STORIES, KO_C2_S01_GLOSSES } from "./batches/ko-c2-s01";
import { KO_C2_S02_STORIES, KO_C2_S02_GLOSSES } from "./batches/ko-c2-s02";
import { KO_C2_S03_STORIES, KO_C2_S03_GLOSSES } from "./batches/ko-c2-s03";
import { KO_C2_S04_STORIES, KO_C2_S04_GLOSSES } from "./batches/ko-c2-s04";
import { KO_C2_S05_STORIES, KO_C2_S05_GLOSSES } from "./batches/ko-c2-s05";
import { KO_C2_S06_STORIES, KO_C2_S06_GLOSSES } from "./batches/ko-c2-s06";
import { KO_C2_S07_STORIES, KO_C2_S07_GLOSSES } from "./batches/ko-c2-s07";
import { KO_C2_S08_STORIES, KO_C2_S08_GLOSSES } from "./batches/ko-c2-s08";

// Korean course: KO-C2 stories (conventions in ./ko-a1.ts).
export const KO_C2_STORIES: Story[] = [
  ...KO_C2_S01_STORIES,
  ...KO_C2_S02_STORIES,
  ...KO_C2_S03_STORIES,
  ...KO_C2_S04_STORIES,
  ...KO_C2_S05_STORIES,
  ...KO_C2_S06_STORIES,
  ...KO_C2_S07_STORIES,
  ...KO_C2_S08_STORIES,
];

export const KO_C2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...KO_C2_S01_GLOSSES,
  ...KO_C2_S02_GLOSSES,
  ...KO_C2_S03_GLOSSES,
  ...KO_C2_S04_GLOSSES,
  ...KO_C2_S05_GLOSSES,
  ...KO_C2_S06_GLOSSES,
  ...KO_C2_S07_GLOSSES,
  ...KO_C2_S08_GLOSSES,
};
