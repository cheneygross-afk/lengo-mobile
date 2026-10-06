// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/c1-lessons.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese C1 teach lessons (≈ HSK 5), one file per unit, written entirely
// in Chinese; specs.ts holds the units and assemble.ts builds the level.

import type { Lesson } from "../types";
import { ZH_C1_LESSONS_U1 } from "./c1-lessons-u1";
import { ZH_C1_LESSONS_U2 } from "./c1-lessons-u2";
import { ZH_C1_LESSONS_U3 } from "./c1-lessons-u3";
import { ZH_C1_LESSONS_U4 } from "./c1-lessons-u4";
import { ZH_C1_LESSONS_U5 } from "./c1-lessons-u5";

export const ZH_C1_LESSONS: Lesson[] = [...ZH_C1_LESSONS_U1, ...ZH_C1_LESSONS_U2, ...ZH_C1_LESSONS_U3, ...ZH_C1_LESSONS_U4, ...ZH_C1_LESSONS_U5];
