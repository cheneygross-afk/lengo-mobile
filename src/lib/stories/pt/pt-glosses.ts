// Synced from cheneygross-afk/lengo:src/lib/stories/pt/pt-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { PT_A1_STORY_GLOSSES } from "./pt-a1";
import { PT_A2_STORY_GLOSSES } from "./pt-a2";
import { PT_B1_STORY_GLOSSES } from "./pt-b1";
import { PT_B2_STORY_GLOSSES } from "./pt-b2";
import { PT_C1_STORY_GLOSSES } from "./pt-c1";
import { PT_C2_STORY_GLOSSES } from "./pt-c2";

// Glosses for every Portuguese-course story, keyed by slug. `es` holds the
// PORTUGUESE dictionary form ("acordar", "a padaria"; the field name is
// historical), `en` its English meaning in the story, and `forms` the exact
// lowercase spellings in the text ("acordou", "padaria"), without
// surrounding punctuation.
export const PT_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...PT_A1_STORY_GLOSSES,
  ...PT_A2_STORY_GLOSSES,
  ...PT_B1_STORY_GLOSSES,
  ...PT_B2_STORY_GLOSSES,
  ...PT_C1_STORY_GLOSSES,
  ...PT_C2_STORY_GLOSSES,
};

export function portugueseStoryGlosses(slug: string): StoryGloss[] {
  return PT_STORY_GLOSSES[slug] ?? [];
}
