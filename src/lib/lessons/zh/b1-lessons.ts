// Chinese B1 teach lessons (≈ HSK 3), one file per unit; specs.ts holds
// the units and assemble.ts builds the level from them.

import type { Lesson } from "../types";
import { ZH_B1_LESSONS_U1 } from "./b1-lessons-u1";
import { ZH_B1_LESSONS_U2 } from "./b1-lessons-u2";
import { ZH_B1_LESSONS_U3 } from "./b1-lessons-u3";
import { ZH_B1_LESSONS_U4 } from "./b1-lessons-u4";
import { ZH_B1_LESSONS_U5 } from "./b1-lessons-u5";

export const ZH_B1_LESSONS: Lesson[] = [...ZH_B1_LESSONS_U1, ...ZH_B1_LESSONS_U2, ...ZH_B1_LESSONS_U3, ...ZH_B1_LESSONS_U4, ...ZH_B1_LESSONS_U5];
