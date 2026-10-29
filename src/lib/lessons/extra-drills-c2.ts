// Synced from cheneygross-afk/lengo:src/lib/lessons/extra-drills-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { DRILLS_C2_1 } from "./extra-drills-c2-1";
import { DRILLS_C2_2 } from "./extra-drills-c2-2";
import { DRILLS_C2_3 } from "./extra-drills-c2-3";
import { DRILLS_C2_4 } from "./extra-drills-c2-4";
import { DRILLS_C2_5 } from "./extra-drills-c2-5";
import { DRILLS_C2_6 } from "./extra-drills-c2-6";
import { DRILLS_C2_7 } from "./extra-drills-c2-7";

// Extra drills for C2 lessons, by lesson slug (see extra-drills.ts). Each
// batch file is spread in here.

export const EXTRA_DRILLS_C2: Record<string, Exercise[]> = { ...DRILLS_C2_1, ...DRILLS_C2_2, ...DRILLS_C2_3, ...DRILLS_C2_4, ...DRILLS_C2_5, ...DRILLS_C2_6, ...DRILLS_C2_7 };
