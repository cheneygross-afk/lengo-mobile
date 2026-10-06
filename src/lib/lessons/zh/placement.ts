// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/placement.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Chinese placement test's questions: one short stage per module,
// pinyin to C2, each drawn from that module's item bank (placementItems in
// src/lib/curriculum/assess.ts). Used by the website's
// /lessons/zh/placement (drawn on the server) and the app's placement
// screen (drawn on the device).

import type { Exercise, Lesson } from "../types";
import { placementItems } from "../../curriculum/assess";
import { ZH_MODULES } from "./index";
import { ZH_PLUGIN } from "./plugin";

export type PlacementStage = {
  code: string;
  name: string;
  /** Route segment under the course root ("b1"). */
  path: string;
  /** Lesson level value ("ZH-B1"), for exercise feedback. */
  level: Lesson["level"];
  items: { id: string; concepts: string[]; exercise: Exercise }[];
};

/** Every stage, drawn with `seed` (pass a fresh one per attempt). */
export function drawPlacementStages(seed: string): PlacementStage[] {
  return ZH_MODULES.map((m) => ({
    code: m.code,
    name: m.name,
    path: m.path,
    level: m.lessons[0]?.level ?? "ZH-A1",
    items: placementItems(m.lessons, ZH_PLUGIN, `${m.path}-placement-${seed}`).map((i) => ({
      id: i.id,
      concepts: i.concepts,
      exercise: i.exercise,
    })),
  })).filter((s) => s.items.length > 0);
}
