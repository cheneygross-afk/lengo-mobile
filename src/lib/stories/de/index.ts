// Synced from cheneygross-afk/lengo:src/lib/stories/de/index.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { DE_A1_STORIES } from "./de-a1";
import { DE_A2_STORIES } from "./de-a2";
import { DE_B1_STORIES } from "./de-b1";
import { DE_B2_STORIES } from "./de-b2";
import { DE_C1_STORIES } from "./de-c1";
import { DE_C2_STORIES } from "./de-c2";

// The German course's stories (an invite-only beta with the rest of the course):
// read at /lessons/de/stories/<level>/<slug>, listed at /lessons/de/stories.
// Story levelPaths are "de/a1" ... "de/c2" (see ../storyPaths.ts).

export type GermanStoryLevel = {
  /** URL segment: "a1" ... "c2". */
  path: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  /** "A1" ... "C2". */
  label: string;
  name: string;
  stories: Story[];
};

export const DE_STORY_LEVELS: GermanStoryLevel[] = [
  { path: "a1", label: "A1", name: "Beginner", stories: DE_A1_STORIES },
  { path: "a2", label: "A2", name: "Elementary", stories: DE_A2_STORIES },
  { path: "b1", label: "B1", name: "Intermediate", stories: DE_B1_STORIES },
  { path: "b2", label: "B2", name: "Upper-intermediate", stories: DE_B2_STORIES },
  { path: "c1", label: "C1", name: "Advanced", stories: DE_C1_STORIES },
  { path: "c2", label: "C2", name: "Mastery", stories: DE_C2_STORIES },
];

export function germanStoryLevel(path: string): GermanStoryLevel | undefined {
  return DE_STORY_LEVELS.find((l) => l.path === path);
}
