// Synced from cheneygross-afk/lengo:src/lib/lessons/extra-drills-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { DRILLS_C1_1 } from "./extra-drills-c1-1";
import { DRILLS_C1_2 } from "./extra-drills-c1-2";

// Extra drills for C1 lessons, by lesson slug (see extra-drills.ts). Each
// batch file is spread in here.

export const EXTRA_DRILLS_C1: Record<string, Exercise[]> = { ...DRILLS_C1_1, ...DRILLS_C1_2 };
