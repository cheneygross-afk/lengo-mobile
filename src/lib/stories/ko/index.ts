// Synced from cheneygross-afk/lengo:src/lib/stories/ko/index.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { KO_A1_STORIES } from "./ko-a1";
import { KO_A2_STORIES } from "./ko-a2";
import { KO_B1_STORIES } from "./ko-b1";
import { KO_B2_STORIES } from "./ko-b2";
import { KO_C1_STORIES } from "./ko-c1";
import { KO_C2_STORIES } from "./ko-c2";

// The Korean course's stories (free to everyone and listed in the sitemap):
// read at /lessons/ko/stories/<level>/<slug>,
// listed at /lessons/ko/stories. Story levelPaths are "ko/a1" ... "ko/c2"
// (see ../storyPaths.ts).

export type KoreanStoryLevel = {
  /** URL segment: "a1" ... "c2". */
  path: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  /** What the story levels show: "Beginner" ... "Mastery". */
  label: string;
  name: string;
  stories: Story[];
};

export const KO_STORY_LEVELS: KoreanStoryLevel[] = [
  { path: "a1", label: "Beginner", name: "Beginner", stories: KO_A1_STORIES },
  { path: "a2", label: "Elementary", name: "Elementary", stories: KO_A2_STORIES },
  { path: "b1", label: "Intermediate", name: "Intermediate", stories: KO_B1_STORIES },
  { path: "b2", label: "Upper-intermediate", name: "Upper-intermediate", stories: KO_B2_STORIES },
  { path: "c1", label: "Advanced", name: "Advanced", stories: KO_C1_STORIES },
  { path: "c2", label: "Mastery", name: "Mastery", stories: KO_C2_STORIES },
];

export function koreanStoryLevel(path: string): KoreanStoryLevel | undefined {
  return KO_STORY_LEVELS.find((l) => l.path === path);
}
