// Synced from cheneygross-afk/lengo:src/lib/lessons/ko-course.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { KO_A1_LESSONS, KO_A1_UNITS } from "./ko-a1";
import { KO_A2_LESSONS, KO_A2_UNITS } from "./ko-a2";
import { KO_B1_LESSONS, KO_B1_UNITS } from "./ko-b1";
import { KO_B2_LESSONS, KO_B2_UNITS } from "./ko-b2";
import { KO_C1_LESSONS, KO_C1_UNITS } from "./ko-c1";
import { KO_C2_LESSONS, KO_C2_UNITS } from "./ko-c2";

// The Korean course (beta): the Hangul module (ko-hangul.ts, shown at
// /lessons/ko/hangul) and then these A1-C2 levels in order, as the
// /lessons/ko page lists them (the same shape as the Portuguese course).
// Each level is shown by its name and its TOPIK level ("Beginner",
// "TOPIK 1"), never the code. Scope and authoring conventions:
// docs/korean-course/. The beta is visible to one account only
// (lib/koreanBeta.ts).
export type KoreanLevel = {
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  /** "a1" ... "c2": the URL segment under /lessons/ko. */
  path: string;
  name: string;
  /** What the level cards show: "Beginner". */
  label: string;
  /** The TOPIK level it lines up with: "TOPIK 1" ... "TOPIK 6 and beyond". */
  topik: string;
  description: string;
  lessons: Lesson[];
  units: UnitOutline[];
};

export const KO_COURSE_LEVELS: KoreanLevel[] = [
  {
    code: "A1",
    path: "a1",
    name: "Beginner",
    label: "Beginner",
    topik: "TOPIK 1",
    description:
      "Greetings and introductions, this and that, both number systems, there is and there isn't, verb stems and the polite 해요 ending, places and times, negatives and questions, the past tense, describing things, wants and plans, and polite requests.",
    lessons: KO_A1_LESSONS,
    units: KO_A1_UNITS,
  },
  {
    code: "A2",
    path: "a2",
    name: "Elementary",
    label: "Elementary",
    topik: "TOPIK 2",
    description:
      "Formal and casual speech, linking actions and reasons, can and must, the irregular verbs, noun modifiers, suggestions, experience and comparisons, if and when, honorifics and favours, guessing, and everyday life in Korea.",
    lessons: KO_A2_LESSONS,
    units: KO_A2_UNITS,
  },
  {
    code: "B1",
    path: "b1",
    name: "Intermediate",
    label: "Intermediate",
    topik: "TOPIK 3",
    description:
      "Reported speech, the written style, remembering and contrast, purpose and reasons, passive and causative verbs, regret and guessing, honorifics at work, health, work, housing, opinions and storytelling, and the first TOPIK II writing tasks.",
    lessons: KO_B1_LESSONS,
    units: KO_B1_UNITS,
  },
  {
    code: "B2",
    path: "b2",
    name: "Upper-intermediate",
    label: "Upper-intermediate",
    topik: "TOPIK 4",
    description:
      "Concession and formal connectives, the noun phrases of written Korean, Sino-Korean word building, idioms and proverbs, the news, graphs and the argumentative essay, Korean society and work culture, fast spoken Korean and politeness strategies.",
    lessons: KO_B2_LESSONS,
    units: KO_B2_UNITS,
  },
  {
    code: "C1",
    path: "c1",
    name: "Advanced",
    label: "Advanced",
    topik: "TOPIK 5",
    description:
      "Advanced connectives and literary endings, topic and subject in discourse, academic and business Korean, fine-grained honorifics, law, economics, science, politics and history, lectures and broadcasts, modern fiction and register.",
    lessons: KO_C1_LESSONS,
    units: KO_C1_UNITS,
  },
  {
    code: "C2",
    path: "c2",
    name: "Mastery",
    label: "Mastery",
    topik: "TOPIK 6 and beyond",
    description:
      "Modern and traditional literature, old speech levels and a glimpse of Middle Korean, the dialects and North Korean standard, slang and humour, legal, medical and broadcast Korean, translation precision, rhetoric and writing with style.",
    lessons: KO_C2_LESSONS,
    units: KO_C2_UNITS,
  },
];

/** "a1" -> the A1 level, or undefined. */
export function koreanLevel(path: string): KoreanLevel | undefined {
  return KO_COURSE_LEVELS.find((l) => l.path === path.toLowerCase());
}
