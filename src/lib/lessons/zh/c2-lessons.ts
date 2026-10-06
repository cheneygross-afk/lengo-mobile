// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/c2-lessons.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese C2 teach lessons (≈ HSK 6 and beyond), one file per unit,
// written entirely in Chinese; specs.ts holds the units.

import type { Lesson } from "../types";
import { ZH_C2_LESSONS_U1 } from "./c2-lessons-u1";
import { ZH_C2_LESSONS_U2 } from "./c2-lessons-u2";
import { ZH_C2_LESSONS_U3 } from "./c2-lessons-u3";
import { ZH_C2_LESSONS_U4 } from "./c2-lessons-u4";
import { ZH_C2_LESSONS_U5 } from "./c2-lessons-u5";

export const ZH_C2_LESSONS: Lesson[] = [...ZH_C2_LESSONS_U1, ...ZH_C2_LESSONS_U2, ...ZH_C2_LESSONS_U3, ...ZH_C2_LESSONS_U4, ...ZH_C2_LESSONS_U5];
