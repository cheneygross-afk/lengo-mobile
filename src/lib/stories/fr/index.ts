// Synced from cheneygross-afk/lengo:src/lib/stories/fr/index.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { FR_A1_STORIES } from "./fr-a1";
import { FR_A2_STORIES } from "./fr-a2";
import { FR_B1_STORIES } from "./fr-b1";
import { FR_B2_STORIES } from "./fr-b2";
import { FR_C1_STORIES } from "./fr-c1";
import { FR_C2_STORIES } from "./fr-c2";

// The French course's stories (free to everyone, like the Spanish readings):
// read at /lessons/fr/stories/<level>/<slug>, listed at /lessons/fr/stories.
// Story levelPaths are "fr/a1" ... "fr/c2" (see ../storyPaths.ts).

export type FrenchStoryLevel = {
  /** URL segment: "a1" ... "c2". */
  path: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  /** "A1" ... "C2". */
  label: string;
  name: string;
  stories: Story[];
};

export const FR_STORY_LEVELS: FrenchStoryLevel[] = [
  { path: "a1", label: "Beginner", name: "Beginner", stories: FR_A1_STORIES },
  { path: "a2", label: "Elementary", name: "Elementary", stories: FR_A2_STORIES },
  { path: "b1", label: "Intermediate", name: "Intermediate", stories: FR_B1_STORIES },
  { path: "b2", label: "Upper-intermediate", name: "Upper-intermediate", stories: FR_B2_STORIES },
  { path: "c1", label: "Advanced", name: "Advanced", stories: FR_C1_STORIES },
  { path: "c2", label: "Mastery", name: "Mastery", stories: FR_C2_STORIES },
];

export function frenchStoryLevel(path: string): FrenchStoryLevel | undefined {
  return FR_STORY_LEVELS.find((l) => l.path === path);
}
