// Synced from cheneygross-afk/lengo:src/lib/lessons/extra-drills-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { DRILLS_B1_1 } from "./extra-drills-b1-1";
import { DRILLS_B1_2 } from "./extra-drills-b1-2";
import { DRILLS_B1_3 } from "./extra-drills-b1-3";
import { DRILLS_B1_4 } from "./extra-drills-b1-4";
import { DRILLS_B1_5 } from "./extra-drills-b1-5";
import { DRILLS_B1_6 } from "./extra-drills-b1-6";

// Extra drills for B1 lessons, by lesson slug (see extra-drills.ts). Each
// batch file is spread in here.
export const EXTRA_DRILLS_B1: Record<string, Exercise[]> = { ...DRILLS_B1_1, ...DRILLS_B1_2, ...DRILLS_B1_3, ...DRILLS_B1_4, ...DRILLS_B1_5, ...DRILLS_B1_6 };
