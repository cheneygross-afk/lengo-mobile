// The Korean course in the app (private beta, lib/koreanBeta.ts): the
// Hangul module, then Beginner ... Mastery, loaded one level at a time the
// same way as the Brazilian Portuguese course (lessons/portuguese.ts).
// Only the beta account sees any of it: every Korean screen is reached
// from Home's Korean pill, which only that account gets, and
// RootNavigator's withKoreanBeta turns everyone else away.
//
// The lesson files are synced from the website (ko-hangul.ts, ko-a1.ts ...
// ko-c2.ts, assembled there into ko-course.ts). Each level is a dynamic
// import(), evaluated the first time a screen asks for it, so nobody
// else's app ever builds a Korean lesson.
//
// levelPaths are the website's ("ko/hangul", "ko/a1" ... "ko/c2",
// "ko/culture"), so completions, highlights, missed questions and
// flashcards line up across both.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import type { ModuleUnit } from "./registry";
import { firstIncompleteRequired } from "./levels";

export type KoreanLevelKey = "hangul" | "a1" | "a2" | "b1" | "b2" | "c1" | "c2" | "culture";
export type KoreanLevelPath = `ko/${KoreanLevelKey}`;

export type KoreanLevelInfo = {
  key: KoreanLevelKey;
  levelPath: KoreanLevelPath;
  /** The learner-visible name: "Hangul", "Beginner" ... "Mastery". Never the CEFR code. */
  label: string;
  /** The TOPIK level shown beside the name ("TOPIK 1" ...); null for Hangul and Culture. */
  topik: string | null;
  description: string;
  /** "intro" (Hangul, before Beginner), "level", or "bonus" (the optional Culture module). */
  kind: "intro" | "level" | "bonus";
  /** False while the level's lesson files haven't been synced into the app yet. */
  available: boolean;
};

// Names and descriptions as the website's ko-course.ts and /lessons/ko page
// have them (ko-course.ts imports every level's lessons, so the app can't
// import it just for these).
export const KOREAN_LEVELS: KoreanLevelInfo[] = [
  {
    key: "hangul",
    levelPath: "ko/hangul",
    label: "Hangul",
    topik: null,
    kind: "intro",
    available: true,
    description:
      "Read and type Korean in a few hours: every letter, the syllable blocks, the sounds they make and the Korean keyboard. Start here.",
  },
  {
    key: "a1",
    levelPath: "ko/a1",
    label: "Beginner",
    topik: "TOPIK 1",
    kind: "level",
    available: true,
    description:
      "Greetings and introductions, this and that, both number systems, there is and there isn't, verb stems and the polite 해요 ending, places and times, negatives and questions, the past tense, describing things, wants and plans, and polite requests.",
  },
  {
    key: "a2",
    levelPath: "ko/a2",
    label: "Elementary",
    topik: "TOPIK 2",
    kind: "level",
    available: true,
    description:
      "Formal and casual speech, linking actions and reasons, can and must, the irregular verbs, noun modifiers, suggestions, experience and comparisons, if and when, honorifics and favours, guessing, and everyday life in Korea.",
  },
  {
    key: "b1",
    levelPath: "ko/b1",
    label: "Intermediate",
    topik: "TOPIK 3",
    kind: "level",
    available: true,
    description:
      "Reported speech, the written style, remembering and contrast, purpose and reasons, passive and causative verbs, regret and guessing, honorifics at work, health, work, housing, opinions and storytelling, and the first TOPIK II writing tasks.",
  },
  {
    key: "b2",
    levelPath: "ko/b2",
    label: "Upper-intermediate",
    topik: "TOPIK 4",
    kind: "level",
    available: true,
    description:
      "Concession and formal connectives, the noun phrases of written Korean, Sino-Korean word building, idioms and proverbs, the news, graphs and the argumentative essay, Korean society and work culture, fast spoken Korean and politeness strategies.",
  },
  {
    key: "c1",
    levelPath: "ko/c1",
    label: "Advanced",
    topik: "TOPIK 5",
    kind: "level",
    available: true,
    description:
      "Advanced connectives and literary endings, topic and subject in discourse, academic and business Korean, fine-grained honorifics, law, economics, science, politics and history, lectures and broadcasts, modern fiction and register.",
  },
  {
    key: "c2",
    levelPath: "ko/c2",
    label: "Mastery",
    topik: "TOPIK 6 and beyond",
    kind: "level",
    available: true,
    description:
      "Modern and traditional literature, old speech levels and a glimpse of Middle Korean, the dialects and North Korean standard, slang and humour, legal, medical and broadcast Korean, translation precision, rhetoric and writing with style.",
  },
  {
    key: "culture",
    levelPath: "ko/culture",
    label: "Korean Culture & Everyday Life",
    topik: null,
    kind: "bonus",
    // The website's ko-culture.ts isn't in the app's content sync yet; once
    // it is, add its case to importLevel() below and set this to true.
    available: false,
    description:
      "Age and how to address people, 눈치 and saying things indirectly, food and drinking etiquette, holidays and family rites, school and work life, internet culture, Konglish, K-culture words, regional Korea and Korean history in brief. Opens from Elementary.",
  },
];

/** The main path, Hangul through Mastery, in course order (Culture is a bonus outside it). */
export const KOREAN_PATH_LEVELS: KoreanLevelInfo[] = KOREAN_LEVELS.filter((l) => l.kind !== "bonus" && l.available);

/** Every Korean levelPath, in course order. */
export const KOREAN_LEVEL_PATHS: KoreanLevelPath[] = KOREAN_LEVELS.map((l) => l.levelPath);

/** "ko/a1" -> "a1"; null for anything that isn't a Korean level the app has. */
export function koreanLevelKeyOf(levelPath: string): KoreanLevelKey | null {
  const level = KOREAN_LEVELS.find((l) => l.levelPath === levelPath && l.available);
  return level ? level.key : null;
}

export function koreanLevelInfo(key: KoreanLevelKey): KoreanLevelInfo {
  return KOREAN_LEVELS.find((l) => l.key === key) ?? KOREAN_LEVELS[0];
}

export type KoreanLevelData = {
  key: KoreanLevelKey;
  levelPath: KoreanLevelPath;
  lessons: Lesson[];
  /** Units as the lesson list shows them, every one with a "Test out"; none for Hangul. */
  units: ModuleUnit[];
};

async function importLevel(key: KoreanLevelKey): Promise<{ lessons: Lesson[]; units: UnitOutline[] }> {
  switch (key) {
    case "hangul": {
      const m = await import("./ko-hangul");
      return { lessons: m.KO_HANGUL_LESSONS, units: [] };
    }
    case "a1": {
      const m = await import("./ko-a1");
      return { lessons: m.KO_A1_LESSONS, units: m.KO_A1_UNITS };
    }
    case "a2": {
      const m = await import("./ko-a2");
      return { lessons: m.KO_A2_LESSONS, units: m.KO_A2_UNITS };
    }
    case "b1": {
      const m = await import("./ko-b1");
      return { lessons: m.KO_B1_LESSONS, units: m.KO_B1_UNITS };
    }
    case "b2": {
      const m = await import("./ko-b2");
      return { lessons: m.KO_B2_LESSONS, units: m.KO_B2_UNITS };
    }
    case "c1": {
      const m = await import("./ko-c1");
      return { lessons: m.KO_C1_LESSONS, units: m.KO_C1_UNITS };
    }
    case "c2": {
      const m = await import("./ko-c2");
      return { lessons: m.KO_C2_LESSONS, units: m.KO_C2_UNITS };
    }
    case "culture":
      // Not synced yet (see KOREAN_LEVELS); never reached while available is false.
      return { lessons: [], units: [] };
  }
}

const loaded = new Map<KoreanLevelKey, KoreanLevelData>();
const loading = new Map<KoreanLevelKey, Promise<KoreanLevelData>>();

/** One Korean level's lessons and units, imported on first use. */
export function loadKoreanLevel(key: KoreanLevelKey): Promise<KoreanLevelData> {
  const done = loaded.get(key);
  if (done) return Promise.resolve(done);
  let pending = loading.get(key);
  if (!pending) {
    pending = importLevel(key).then(({ lessons, units }) => {
      const bySlug = new Map(lessons.map((l) => [l.slug, l]));
      const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((l): l is Lesson => !!l);
      const data: KoreanLevelData = {
        key,
        levelPath: `ko/${key}`,
        lessons,
        units: units.map((u) => ({
          id: u.id,
          label: u.label,
          description: u.description ?? "",
          required: pick(u.requiredSlugs),
          optional: pick(u.optionalSlugs),
          testOut: true,
        })),
      };
      loaded.set(key, data);
      loading.delete(key);
      return data;
    });
    pending.catch(() => loading.delete(key));
    loading.set(key, pending);
  }
  return pending;
}

/** The level if it's been loaded already, without loading it. */
export function koreanLevelIfLoaded(key: KoreanLevelKey): KoreanLevelData | undefined {
  return loaded.get(key);
}

/** Where to pick up in the Korean course (Hangul, then Beginner ... Mastery),
 * the way the Portuguese course does it: in the furthest level with
 * anything done, its first unfinished required lesson; that level finished,
 * the next one's. Loads only the levels it looks in. null once all are done. */
export async function nextKoreanLesson(
  completedByLevel: Partial<Record<KoreanLevelPath, Record<string, boolean>>>
): Promise<{ level: KoreanLevelInfo; lesson: Lesson; unit: ModuleUnit | undefined } | null> {
  const levels = KOREAN_PATH_LEVELS;
  let start = 0;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (Object.values(completedByLevel[levels[i].levelPath] ?? {}).some(Boolean)) {
      start = i;
      break;
    }
  }
  for (const level of levels.slice(start)) {
    const data = await loadKoreanLevel(level.key);
    const lesson = firstIncompleteRequired(data.lessons, completedByLevel[level.levelPath] ?? {});
    if (lesson) return { level, lesson, unit: data.units.find((u) => u.required.some((r) => r.slug === lesson.slug)) };
  }
  return null;
}
