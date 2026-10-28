// Synced from cheneygross-afk/lengo:src/lib/stories/it/index.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { IT_A1_STORIES } from "./it-a1";
import { IT_A2_STORIES } from "./it-a2";
import { IT_B1_STORIES } from "./it-b1";
import { IT_B2_STORIES } from "./it-b2";
import { IT_C1_STORIES } from "./it-c1";
import { IT_C2_STORIES } from "./it-c2";

// The Italian course's stories (private beta, owner-only like the rest of
// /lessons/it): read at /lessons/it/stories/<level>/<slug>, listed at
// /lessons/it/stories. Story levelPaths are "it/a1" ... "it/c2" (see
// ../storyPaths.ts).

export type ItalianStoryLevel = {
  /** URL segment: "a1" ... "c2". */
  path: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  /** What the story levels show: "Beginner" ... "Mastery". */
  label: string;
  name: string;
  stories: Story[];
};

export const IT_STORY_LEVELS: ItalianStoryLevel[] = [
  { path: "a1", label: "Beginner", name: "Beginner", stories: IT_A1_STORIES },
  { path: "a2", label: "Elementary", name: "Elementary", stories: IT_A2_STORIES },
  { path: "b1", label: "Intermediate", name: "Intermediate", stories: IT_B1_STORIES },
  { path: "b2", label: "Upper-intermediate", name: "Upper-intermediate", stories: IT_B2_STORIES },
  { path: "c1", label: "Advanced", name: "Advanced", stories: IT_C1_STORIES },
  { path: "c2", label: "Mastery", name: "Mastery", stories: IT_C2_STORIES },
];

export function italianStoryLevel(path: string): ItalianStoryLevel | undefined {
  return IT_STORY_LEVELS.find((l) => l.path === path);
}
