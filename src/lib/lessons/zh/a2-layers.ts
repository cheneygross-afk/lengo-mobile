// A2 reinforce and drill lessons, drafted from their specs in specs.ts
// (one file per unit). assemble.ts places each after its teach lesson.

import type { Lesson } from "../types";
import { ZH_A2_LAYERS_U1 } from "./a2-layers-u1";
import { ZH_A2_LAYERS_U2 } from "./a2-layers-u2";
import { ZH_A2_LAYERS_U3 } from "./a2-layers-u3";
import { ZH_A2_LAYERS_U4 } from "./a2-layers-u4";
import { ZH_A2_LAYERS_U5 } from "./a2-layers-u5";

export const ZH_A2_LAYERS: Lesson[] = [...ZH_A2_LAYERS_U1, ...ZH_A2_LAYERS_U2, ...ZH_A2_LAYERS_U3, ...ZH_A2_LAYERS_U4, ...ZH_A2_LAYERS_U5];
