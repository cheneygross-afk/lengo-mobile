// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b1-layers.ts by scripts/sync-content.mjs -- edit it there, not here.
// B1 reinforce and drill lessons, drafted from their specs in specs.ts
// (one file per unit). assemble.ts places each after its teach lesson.

import type { Lesson } from "../types";
import { ZH_B1_LAYERS_U1 } from "./b1-layers-u1";
import { ZH_B1_LAYERS_U2 } from "./b1-layers-u2";
import { ZH_B1_LAYERS_U3 } from "./b1-layers-u3";
import { ZH_B1_LAYERS_U4 } from "./b1-layers-u4";
import { ZH_B1_LAYERS_U5 } from "./b1-layers-u5";

export const ZH_B1_LAYERS: Lesson[] = [...ZH_B1_LAYERS_U1, ...ZH_B1_LAYERS_U2, ...ZH_B1_LAYERS_U3, ...ZH_B1_LAYERS_U4, ...ZH_B1_LAYERS_U5];
