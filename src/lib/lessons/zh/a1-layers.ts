// A1 reinforce and drill lessons, drafted from their specs in specs.ts
// (one file per unit). assemble.ts places each after its teach lesson.

import type { Lesson } from "../types";
import { ZH_A1_LAYERS_U1 } from "./a1-layers-u1";
import { ZH_A1_LAYERS_U2 } from "./a1-layers-u2";
import { ZH_A1_LAYERS_U3 } from "./a1-layers-u3";
import { ZH_A1_LAYERS_U4 } from "./a1-layers-u4";
import { ZH_A1_LAYERS_U5 } from "./a1-layers-u5";
import { ZH_A1_LAYERS_U6 } from "./a1-layers-u6";
import { ZH_A1_LAYERS_U7 } from "./a1-layers-u7";

export const ZH_A1_LAYERS: Lesson[] = [...ZH_A1_LAYERS_U1, ...ZH_A1_LAYERS_U2, ...ZH_A1_LAYERS_U3, ...ZH_A1_LAYERS_U4, ...ZH_A1_LAYERS_U5, ...ZH_A1_LAYERS_U6, ...ZH_A1_LAYERS_U7];
