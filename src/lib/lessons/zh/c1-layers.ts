// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/c1-layers.ts by scripts/sync-content.mjs -- edit it there, not here.
// C1 reinforce and drill lessons, drafted from their specs in specs.ts
// (one file per unit), written entirely in Chinese like the teach lessons.

import type { Lesson } from "../types";
import { ZH_C1_LAYERS_U1 } from "./c1-layers-u1";
import { ZH_C1_LAYERS_U2 } from "./c1-layers-u2";
import { ZH_C1_LAYERS_U3 } from "./c1-layers-u3";
import { ZH_C1_LAYERS_U4 } from "./c1-layers-u4";
import { ZH_C1_LAYERS_U5 } from "./c1-layers-u5";

export const ZH_C1_LAYERS: Lesson[] = [...ZH_C1_LAYERS_U1, ...ZH_C1_LAYERS_U2, ...ZH_C1_LAYERS_U3, ...ZH_C1_LAYERS_U4, ...ZH_C1_LAYERS_U5];
