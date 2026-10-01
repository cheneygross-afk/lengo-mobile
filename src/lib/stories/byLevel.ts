// Synced from cheneygross-afk/lengo:src/lib/stories/byLevel.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "./types";
import { A1_STORIES } from "./a1";
import { A2_STORIES } from "./a2";
import { B1_STORIES } from "./b1";
import { B2_STORIES } from "./b2";
import { C1C2_STORIES } from "./c1c2";
import { sortStoriesByEase } from "./pickStory";

/** The A1 stories in reading-list order: easiest first. */
export const A1_STORIES_BY_EASE: Story[] = sortStoriesByEase(A1_STORIES);

export const STORIES_BY_LEVEL_PATH: Record<string, Story[]> = {
  a1: A1_STORIES_BY_EASE,
  a2: A2_STORIES,
  b1: B1_STORIES,
  b2: B2_STORIES,
  c1c2: C1C2_STORIES,
};

// A handful of other stories at the same level, shown as always-visible
// links at the bottom of every story (and on grammar guides). Search
// engines only follow links that are in the page's HTML, and the "Next"
// button on a story only appears after the comprehension check -- without
// these, most stories were dead ends for crawlers. Picks the stories right
// after this one (wrapping around) so every story gets linked from a few
// neighbors, not just the first few in the list.
export function relatedStories(stories: Story[], slug: string | null, count = 4): Story[] {
  if (stories.length === 0) return [];
  const index = slug ? stories.findIndex((s) => s.slug === slug) : -1;
  const picks: Story[] = [];
  for (let i = 1; picks.length < Math.min(count, stories.length - (index === -1 ? 0 : 1)); i++) {
    picks.push(stories[(index + i + stories.length) % stories.length]);
  }
  return picks;
}
