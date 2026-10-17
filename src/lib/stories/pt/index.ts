// Synced from cheneygross-afk/lengo:src/lib/stories/pt/index.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { PT_A1_STORIES } from "./pt-a1";
import { PT_A2_STORIES } from "./pt-a2";
import { PT_B1_STORIES } from "./pt-b1";
import { PT_B2_STORIES } from "./pt-b2";
import { PT_C1_STORIES } from "./pt-c1";
import { PT_C2_STORIES } from "./pt-c2";

// The Brazilian Portuguese course's stories (private beta, like the rest
// of /lessons/pt): read at /lessons/pt/stories/<level>/<slug>, listed at
// /lessons/pt/stories. Story levelPaths are "pt/a1" ... "pt/c2" (see
// ../storyPaths.ts).

export type PortugueseStoryLevel = {
  /** URL segment: "a1" ... "c2". */
  path: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  /** What the story levels show: "Beginner" ... "Mastery". */
  label: string;
  name: string;
  stories: Story[];
};

export const PT_STORY_LEVELS: PortugueseStoryLevel[] = [
  { path: "a1", label: "Beginner", name: "Beginner", stories: PT_A1_STORIES },
  { path: "a2", label: "Elementary", name: "Elementary", stories: PT_A2_STORIES },
  { path: "b1", label: "Intermediate", name: "Intermediate", stories: PT_B1_STORIES },
  { path: "b2", label: "Upper-intermediate", name: "Upper-intermediate", stories: PT_B2_STORIES },
  { path: "c1", label: "Advanced", name: "Advanced", stories: PT_C1_STORIES },
  { path: "c2", label: "Mastery", name: "Mastery", stories: PT_C2_STORIES },
];

export function portugueseStoryLevel(path: string): PortugueseStoryLevel | undefined {
  return PT_STORY_LEVELS.find((l) => l.path === path);
}
