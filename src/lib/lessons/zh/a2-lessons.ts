// Chinese A2 teach lessons (≈ HSK 2), one file per unit; specs.ts holds
// the units and assemble.ts builds the level from them.

import type { Lesson } from "../types";
import { ZH_A2_LESSONS_U1 } from "./a2-lessons-u1";
import { ZH_A2_LESSONS_U2 } from "./a2-lessons-u2";
import { ZH_A2_LESSONS_U3 } from "./a2-lessons-u3";
import { ZH_A2_LESSONS_U4 } from "./a2-lessons-u4";
import { ZH_A2_LESSONS_U5 } from "./a2-lessons-u5";

export const ZH_A2_LESSONS: Lesson[] = [...ZH_A2_LESSONS_U1, ...ZH_A2_LESSONS_U2, ...ZH_A2_LESSONS_U3, ...ZH_A2_LESSONS_U4, ...ZH_A2_LESSONS_U5];
