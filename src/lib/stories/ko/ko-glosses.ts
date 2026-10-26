// Synced from cheneygross-afk/lengo:src/lib/stories/ko/ko-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { KO_A1_STORY_GLOSSES } from "./ko-a1";
import { KO_A2_STORY_GLOSSES } from "./ko-a2";
import { KO_B1_STORY_GLOSSES } from "./ko-b1";
import { KO_B2_STORY_GLOSSES } from "./ko-b2";
import { KO_C1_STORY_GLOSSES } from "./ko-c1";
import { KO_C2_STORY_GLOSSES } from "./ko-c2";

// Glosses for every Korean-course story, keyed by slug. `es` holds the
// KOREAN dictionary form (verbs and adjectives in the -다 form: "먹다",
// "조용하다"; nouns bare: "학교"; the field name is historical), `en` its
// English meaning in the story, and `forms` the exact tokens in the text:
// whole whitespace-separated 어절 with particles and endings attached
// ("학교에", "먹었어요"), without surrounding punctuation.
export const KO_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...KO_A1_STORY_GLOSSES,
  ...KO_A2_STORY_GLOSSES,
  ...KO_B1_STORY_GLOSSES,
  ...KO_B2_STORY_GLOSSES,
  ...KO_C1_STORY_GLOSSES,
  ...KO_C2_STORY_GLOSSES,
};

export function koreanStoryGlosses(slug: string): StoryGloss[] {
  return KO_STORY_GLOSSES[slug] ?? [];
}
