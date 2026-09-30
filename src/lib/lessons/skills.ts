// Synced from cheneygross-afk/lengo:src/lib/lessons/skills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";
import type { AnchoredLesson } from "./weave";
import { SOUNDS_OF_SPANISH } from "./sounds-of-spanish";
import { convertDictados } from "./skills-dictation";
import { A1_SKILLS } from "./skills-a1";
import { A2_SKILLS } from "./skills-a2";
import { B1_SKILLS } from "./skills-b1";
import { B2_SKILLS } from "./skills-b2";
import { C1_SKILLS } from "./skills-c1";
import { C2_SKILLS } from "./skills-c2";

// Listening, speaking and writing across the course (linguist review
// E1-E3), applied by buildLevel() in sequencing.ts so no level file has
// to be edited:
//   - SKILL_LESSONS: whole new lessons woven in like the reinforcement
//     lessons (A1's "Sounds of Spanish" unit, sounds-of-spanish.ts),
//   - the Dictado lessons' word-order puzzles become real dictations
//     (skills-dictation.ts),
//   - skills-<level>.ts: listen-choose, dictation, speak and write
//     exercises appended to existing lessons' final reviews, by slug.
// Everything is keyed by slug and throws on an unknown one, so a renamed
// lesson fails the build.

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** New lessons for each level, anchored after an existing lesson. */
export const SKILL_LESSONS: Record<Level, AnchoredLesson[]> = {
  A1: SOUNDS_OF_SPANISH,
  A2: [],
  B1: [],
  B2: [],
  C1: [],
  C2: [],
};

const EXTRA_EXERCISES: Record<Level, Record<string, Exercise[]>> = {
  A1: A1_SKILLS,
  A2: A2_SKILLS,
  B1: B1_SKILLS,
  B2: B2_SKILLS,
  C1: C1_SKILLS,
  C2: C2_SKILLS,
};

/** `lessons` with the Dictado lessons converted and the extra skill
 * exercises appended to their lessons' final reviews. */
export function withSkills(level: Level, lessons: Lesson[]): Lesson[] {
  const extra = EXTRA_EXERCISES[level];
  const known = new Set(lessons.map((l) => l.slug));
  for (const slug of Object.keys(extra)) {
    if (!known.has(slug)) throw new Error(`withSkills (${level}): unknown lesson "${slug}"`);
  }
  return convertDictados(level, lessons).map((l) => (extra[l.slug] ? { ...l, exercises: [...l.exercises, ...extra[l.slug]] } : l));
}
