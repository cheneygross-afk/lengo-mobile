// Synced from cheneygross-afk/lengo:src/lib/lessons/extra-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";
import { EXTRA_DRILLS_A1 } from "./extra-drills-a1";
import { EXTRA_DRILLS_A2 } from "./extra-drills-a2";
import { EXTRA_DRILLS_B1 } from "./extra-drills-b1";
import { EXTRA_DRILLS_B2 } from "./extra-drills-b2";
import { EXTRA_DRILLS_C1 } from "./extra-drills-c1";
import { EXTRA_DRILLS_C2 } from "./extra-drills-c2";

// Extra drilling for the Spanish course (user ask, 2026-10-12: the course
// should be 400+ hours, with real drilling that tests exactly what each
// lesson teaches, longer at higher levels). Each level file maps a lesson
// slug to extra exercises appended to that lesson's own practice. They use
// only that lesson's grammar and vocabulary (plus what came before), mostly
// English-to-Spanish production, easy to hard.

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const EXTRA_DRILLS: Record<Level, Record<string, Exercise[]>> = {
  A1: EXTRA_DRILLS_A1,
  A2: EXTRA_DRILLS_A2,
  B1: EXTRA_DRILLS_B1,
  B2: EXTRA_DRILLS_B2,
  C1: EXTRA_DRILLS_C1,
  C2: EXTRA_DRILLS_C2,
};

/** Appends each lesson's extra drills to its exercises. */
export function withExtraDrills(level: Level, lessons: Lesson[]): Lesson[] {
  const extra = EXTRA_DRILLS[level];
  return lessons.map((l) => (extra[l.slug]?.length ? { ...l, exercises: [...l.exercises, ...extra[l.slug]] } : l));
}
