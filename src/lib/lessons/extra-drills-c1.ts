// Synced from cheneygross-afk/lengo:src/lib/lessons/extra-drills-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { DRILLS_C1_1 } from "./extra-drills-c1-1";
import { DRILLS_C1_2 } from "./extra-drills-c1-2";
import { DRILLS_C1_3 } from "./extra-drills-c1-3";
import { DRILLS_C1_4 } from "./extra-drills-c1-4";
import { DRILLS_C1_5 } from "./extra-drills-c1-5";
import { DRILLS_C1_6 } from "./extra-drills-c1-6";
import { DRILLS_C1_7 } from "./extra-drills-c1-7";
import { DRILLS_C1_8 } from "./extra-drills-c1-8";
import { DRILLS_C1_9 } from "./extra-drills-c1-9";
import { DRILLS_C1_10 } from "./extra-drills-c1-10";
import { DRILLS_C1_11 } from "./extra-drills-c1-11";
import { DRILLS_C1_12 } from "./extra-drills-c1-12";

// Extra drills for C1 lessons, by lesson slug (see extra-drills.ts). Each
// batch file is spread in here.

export const EXTRA_DRILLS_C1: Record<string, Exercise[]> = { ...DRILLS_C1_1, ...DRILLS_C1_2, ...DRILLS_C1_3, ...DRILLS_C1_4, ...DRILLS_C1_5, ...DRILLS_C1_6, ...DRILLS_C1_7, ...DRILLS_C1_8, ...DRILLS_C1_9, ...DRILLS_C1_10, ...DRILLS_C1_11, ...DRILLS_C1_12 };
