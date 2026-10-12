// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { DE_A1_STORY_GLOSSES } from "./de-a1-glosses";
import { DE_A2_STORY_GLOSSES } from "./de-a2-glosses";
import { DE_B1_STORY_GLOSSES } from "./de-b1-glosses";
import { DE_B2_STORY_GLOSSES } from "./de-b2-glosses";
import { DE_C1_STORY_GLOSSES } from "./de-c1-glosses";
import { DE_C2_STORY_GLOSSES } from "./de-c2-glosses";

// Glosses for every German-course story, keyed by slug (see
// de-a1-glosses.ts for the shape).
export const DE_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...DE_A1_STORY_GLOSSES,
  ...DE_A2_STORY_GLOSSES,
  ...DE_B1_STORY_GLOSSES,
  ...DE_B2_STORY_GLOSSES,
  ...DE_C1_STORY_GLOSSES,
  ...DE_C2_STORY_GLOSSES,
};

export function germanStoryGlosses(slug: string): StoryGloss[] {
  return DE_STORY_GLOSSES[slug] ?? [];
}
