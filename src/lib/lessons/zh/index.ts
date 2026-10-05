// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Chinese (Mandarin) track for English speakers: every module, in
// course order, with the metadata the level pages show. This file is the
// one entry point the rest of the app imports. See README.md.
//
// Each module's lessons are assembled (src/lib/curriculum/assemble.ts)
// from its spec (specs.ts): the authored teach lessons in unit order, the
// reinforce/drill lessons drafted from the spec after each one, and the
// spaced reviews, unit reviews and level test generated from the item
// bank. Assembly is pure and seeded, so the result is the same on every
// build and on the website and in the app.

import type { Lesson } from "../types";
import { assembleCourse, type AssembledUnit } from "../../curriculum/assemble";
import type { Finding } from "../../curriculum/types";
import { ZH_PINYIN_LESSONS } from "./pinyin-lessons";
import { ZH_A1_LESSONS } from "./a1-lessons";
import { ZH_PINYIN_LAYERS } from "./pinyin-drills";
import { ZH_A1_LAYERS } from "./a1-layers";
import { ZH_A2_LESSONS } from "./a2-lessons";
import { ZH_A2_LAYERS } from "./a2-layers";
import { ZH_B1_LESSONS } from "./b1-lessons";
import { ZH_CONCEPTS } from "./concepts";
import { ZH_PLUGIN } from "./plugin";
import { ZH_SPECS } from "./specs";
import { ZH_CAN_DO } from "./canDo";
import type { CanDoStatement } from "../../curriculum/assess";

export type ZhModule = {
  /** Short code shown on the level card ("Pinyin", "A1"). */
  code: string;
  name: string;
  /** Route segment under the course root, e.g. "pinyin" -> /lessons/zh/pinyin. */
  path: string;
  description: string;
  lessons: Lesson[];
  units: AssembledUnit[];
  /** Can-do statements, each linked to concepts taught in this module. */
  canDo: CanDoStatement[];
};

const META: Omit<ZhModule, "lessons" | "units" | "canDo">[] = [
  {
    code: "Pinyin",
    name: "Pinyin & Tones",
    path: "pinyin",
    description:
      "How Mandarin sounds and how pinyin writes it: the four tones and the neutral tone, every initial and final, tone changes, spelling rules, and how characters are built -- before A1.",
  },
  {
    code: "A1",
    name: "Foundations",
    path: "a1",
    description:
      "Greetings and introductions, 是 sentences, questions with 吗 and question words, numbers and money, measure words, family, dates and time, places, wanting and ability, and finished actions with 了 -- about 300 HSK 1-level words.",
  },
  {
    code: "A2",
    name: "Everyday Chinese",
    path: "a2",
    description:
      "Experiences with 过 and actions in progress, comparisons with 比, how well you do things with 得, result and direction complements, 把, reasons and conditions, time and sequence, directions, health and hobbies -- about HSK 2.",
  },
  {
    code: "B1",
    name: "Independent Chinese",
    path: "b1",
    description:
      "Opinions and comparisons, 是…的, potential complements and 起来, the 被 passive and more 把, linking ideas with 不但…而且, 除了, 连…都, 只要 and 只有, feelings, work, travel and study -- about HSK 3.",
  },
];

/** Every authored or drafted lesson, before assembly (what the validator checks). */
export const ZH_SOURCE_LESSONS: Lesson[] = [...ZH_PINYIN_LESSONS, ...ZH_PINYIN_LAYERS, ...ZH_A1_LESSONS, ...ZH_A1_LAYERS, ...ZH_A2_LESSONS, ...ZH_A2_LAYERS, ...ZH_B1_LESSONS];

const assembly = assembleCourse({
  specs: ZH_SPECS,
  lessons: ZH_SOURCE_LESSONS,
  concepts: ZH_CONCEPTS,
  plugin: ZH_PLUGIN,
  language: {
    exampleMeaning: (e) => e.en?.split(" -- ")[1]?.trim() ?? "",
    exampleInline: (e) => `${e.es} (${e.en?.split(" -- ")[0]?.trim() ?? ""})`,
  },
});

/** Problems found while assembling (reported by check.ts). */
export const ZH_ASSEMBLY_FINDINGS: Finding[] = assembly.findings;

export const ZH_MODULES: ZhModule[] = META.map((m) => {
  const built = assembly.levels.find((l) => l.path === m.path);
  return { ...m, lessons: built?.lessons ?? [], units: built?.units ?? [], canDo: ZH_CAN_DO[m.path] ?? [] };
});

/** Every Chinese lesson in course order. */
export const ZH_ALL_LESSONS: Lesson[] = ZH_MODULES.flatMap((m) => m.lessons);
