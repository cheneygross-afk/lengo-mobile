// Synced from cheneygross-afk/lengo:src/lib/lessons/extra-drills-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { DRILLS_A1_1 } from "./extra-drills-a1-1";
import { DRILLS_A1_2 } from "./extra-drills-a1-2";
import { DRILLS_A1_3 } from "./extra-drills-a1-3";
import { DRILLS_A1_4 } from "./extra-drills-a1-4";

// Extra drills for A1 lessons, by lesson slug (see extra-drills.ts).
export const EXTRA_DRILLS_A1: Record<string, Exercise[]> = { ...DRILLS_A1_1, ...DRILLS_A1_2, ...DRILLS_A1_3, ...DRILLS_A1_4, };
