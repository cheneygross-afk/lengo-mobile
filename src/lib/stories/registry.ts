import type { Story } from "./types";
import type { Reading } from "@/lib/readings/types";
import { A1_STORIES_BY_EASE } from "./byLevel";
import { A2_STORIES } from "./a2";
import { B1_STORIES } from "./b1";
import { B2_STORIES } from "./b2";
import { C1C2_STORIES } from "./c1c2";
import { A1_READINGS } from "@/lib/readings/a1";
import { A2_READINGS } from "@/lib/readings/a2";
import { B1_READINGS } from "@/lib/readings/b1";
import { B2_READINGS } from "@/lib/readings/b2";
import { C1C2_READINGS } from "@/lib/readings/c1c2";

// Mobile port of the website's /readings index (src/app/readings/page.tsx):
// one entry per reading level, each with its free original stories plus
// the curated book picks. levelPath matches the website's route folders
// (/readings/a1 ... /readings/c1c2) and the levelPath highlights are saved
// under, so the two stay interchangeable.
export type ReadingLevelPath = "a1" | "a2" | "b1" | "b2" | "c1c2";

export type ReadingLevel = {
  levelPath: ReadingLevelPath;
  code: string;
  name: string;
  description: string;
  stories: Story[];
  readings: Reading[];
};

export const READING_LEVELS: ReadingLevel[] = [
  {
    levelPath: "a1",
    code: "A1",
    name: "Beginner",
    description: "Purpose-written and gently adapted books for brand-new readers.",
    // Easiest first, like the website's /readings/a1.
    stories: A1_STORIES_BY_EASE,
    readings: A1_READINGS,
  },
  {
    levelPath: "a2",
    code: "A2",
    name: "Elementary",
    description: "A step up into short, accessible original works.",
    stories: A2_STORIES,
    readings: A2_READINGS,
  },
  {
    levelPath: "b1",
    code: "B1",
    name: "Intermediate",
    description: "Full-length stories and plays with natural pacing and dialogue.",
    stories: B1_STORIES,
    readings: B1_READINGS,
  },
  {
    levelPath: "b2",
    code: "B2",
    name: "Upper Intermediate",
    description: "Real, unabridged novels meant to be read for pleasure.",
    stories: B2_STORIES,
    readings: B2_READINGS,
  },
  {
    levelPath: "c1c2",
    code: "C1/C2",
    name: "Advanced",
    description: "Dense, literary Spanish -- the same books native speakers read.",
    stories: C1C2_STORIES,
    readings: C1C2_READINGS,
  },
];

export function getReadingLevel(levelPath: ReadingLevelPath): ReadingLevel {
  return READING_LEVELS.find((l) => l.levelPath === levelPath) ?? READING_LEVELS[0];
}

// Story slugs are unique across every level, so StoryReader only needs
// the slug to find the story, its level, and the next story in that level.
export function findStory(slug: string): { story: Story; level: ReadingLevel; next?: Story } | null {
  for (const level of READING_LEVELS) {
    const index = level.stories.findIndex((s) => s.slug === slug);
    if (index !== -1) return { story: level.stories[index], level, next: level.stories[index + 1] };
  }
  return null;
}
