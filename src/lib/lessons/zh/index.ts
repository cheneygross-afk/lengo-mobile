// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Chinese (Mandarin) track for English speakers: every module, in
// course order, with the metadata the level pages show. This file is the
// one entry point the rest of the app imports. See README.md.

import type { Lesson } from "../types";
import { ZH_PINYIN_LESSONS } from "./pinyin-lessons";
import { ZH_A1_LESSONS } from "./a1-lessons";

export { ZH_PINYIN_LESSONS, ZH_A1_LESSONS };

export type ZhModule = {
  /** Short code shown on the level card ("Pinyin", "A1"). */
  code: string;
  name: string;
  /** Route segment under the course root, e.g. "pinyin" -> /lessons/zh/pinyin. */
  path: string;
  description: string;
  lessons: Lesson[];
};

export const ZH_MODULES: ZhModule[] = [
  {
    code: "Pinyin",
    name: "Pinyin & Tones",
    path: "pinyin",
    description:
      "How Mandarin sounds and how pinyin writes it: the four tones and the neutral tone, every initial and final, tone changes, spelling rules, and how characters are built -- before A1.",
    lessons: ZH_PINYIN_LESSONS,
  },
  {
    code: "A1",
    name: "Foundations",
    path: "a1",
    description:
      "Greetings and introductions, 是 sentences, questions with 吗 and question words, numbers and money, measure words, family, dates and time, places, wanting and ability, and finished actions with 了 -- about 300 HSK 1-level words.",
    lessons: ZH_A1_LESSONS,
  },
];

/** Every Chinese lesson in course order. */
export const ZH_ALL_LESSONS: Lesson[] = ZH_MODULES.flatMap((m) => m.lessons);
