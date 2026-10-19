// Synced from cheneygross-afk/lengo:src/lib/lessons/extra-drills-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { DRILLS_B2_1 } from "./extra-drills-b2-1";
import { DRILLS_B2_2 } from "./extra-drills-b2-2";
import { DRILLS_B2_3 } from "./extra-drills-b2-3";
import { DRILLS_B2_4 } from "./extra-drills-b2-4";
import { DRILLS_B2_5 } from "./extra-drills-b2-5";
import { DRILLS_B2_6 } from "./extra-drills-b2-6";
import { DRILLS_B2_7 } from "./extra-drills-b2-7";
import { DRILLS_B2_8 } from "./extra-drills-b2-8";
import { DRILLS_B2_9 } from "./extra-drills-b2-9";
import { DRILLS_B2_10 } from "./extra-drills-b2-10";

// Extra drills for B2 lessons, by lesson slug (see extra-drills.ts). Each
// batch file is spread in here.
export const EXTRA_DRILLS_B2: Record<string, Exercise[]> = { ...DRILLS_B2_1, ...DRILLS_B2_2, ...DRILLS_B2_3, ...DRILLS_B2_4, ...DRILLS_B2_5, ...DRILLS_B2_6, ...DRILLS_B2_7, ...DRILLS_B2_8, ...DRILLS_B2_9, ...DRILLS_B2_10 };
