// The Brazilian Portuguese beta in the app: its levels (A1-C2), loaded one
// level at a time, the same way as the German course (lessons/german.ts).
// Only the beta accounts see it (lib/portugueseBeta.ts, the website's
// allowlist): every Portuguese screen is reached from Home's Portuguese
// pill, which only those accounts get.
//
// The lesson files are synced from the website (pt-a1.ts ... pt-c2.ts,
// assembled there into pt-course.ts). Each level is a dynamic import(),
// evaluated the first time a screen asks for it and kept in memory after
// that, so nobody else's app ever builds a Portuguese lesson.
//
// levelPaths are the website's ("pt/a1" ... "pt/c2"), so completions,
// highlights, missed questions and flashcards line up across both.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import type { ModuleUnit } from "./registry";
import { firstIncompleteRequired } from "./levels";

export type PortugueseLevelKey = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
export type PortugueseLevelPath = `pt/${PortugueseLevelKey}`;

export type PortugueseLevelInfo = {
  key: PortugueseLevelKey;
  levelPath: PortugueseLevelPath;
  /** "A1" ... "C2". */
  code: string;
  name: string;
  /** What the level cards show: "Beginner (A1)". */
  label: string;
  exam: string | null;
  description: string;
};

// Names and descriptions as the website's pt-course.ts has them (that file
// imports every level's lessons, so the app can't import it just for these).
export const PORTUGUESE_LEVELS: PortugueseLevelInfo[] = [
  {
    key: "a1",
    levelPath: "pt/a1",
    code: "A1",
    name: "Beginner",
    label: "Beginner (A1)",
    exam: null,
    description:
      "Greetings, ser and estar, the sounds of Brazilian Portuguese, articles and gender, present-tense verbs and ter, questions, numbers and time, family, places and the present progressive.",
  },
  {
    key: "a2",
    levelPath: "pt/a2",
    code: "A2",
    name: "Elementary",
    label: "Elementary (A2)",
    exam: null,
    description:
      "The pretérito perfeito and imperfeito, object pronouns the Brazilian way, comparisons and diminutives, the future, commands, por and para, daily routines, health, shopping and travel.",
  },
  {
    key: "b1",
    levelPath: "pt/b1",
    code: "B1",
    name: "Intermediate",
    label: "Intermediate (B1)",
    exam: "Celpe-Bras Intermediário",
    description:
      "The present subjunctive, the conditional, compound and pluperfect tenses, the personal infinitive, relative clauses, reported speech, the passive, connectors, opinions, formal Portuguese and how Brazilians really talk.",
  },
  {
    key: "b2",
    levelPath: "pt/b2",
    code: "B2",
    name: "Upper-intermediate",
    label: "Upper-intermediate (B2)",
    exam: "Celpe-Bras Intermediário Superior",
    description:
      "The imperfect and future subjunctive, hypothetical conditions, compound tenses, pronouns in writing, regência and crase, register, Brazil's varieties, idioms, the dissertative essay and professional Portuguese.",
  },
  {
    key: "c1",
    levelPath: "pt/c1",
    code: "C1",
    name: "Advanced",
    label: "Advanced (C1)",
    exam: "Celpe-Bras Avançado",
    description:
      "Fine mood distinctions, reduced clauses, academic and official Portuguese, the ENEM-style essay, Brazil and Portugal, nuance and pragmatic particles, word order, the media, literature and history.",
  },
  {
    key: "c2",
    levelPath: "pt/c2",
    code: "C2",
    name: "Mastery",
    label: "Mastery (C2)",
    exam: "Celpe-Bras Avançado Superior",
    description:
      "Style and figures of speech, humour and wordplay, proverbs and cultural references, poetry and song, translation and mediation, rhetoric, specialist registers, sociolinguistics and near-native precision.",
  },
];

/** Every Portuguese levelPath, in course order. */
export const PORTUGUESE_LEVEL_PATHS: PortugueseLevelPath[] = PORTUGUESE_LEVELS.map((l) => l.levelPath);

/** "pt/a1" -> "a1"; null for anything that isn't a Portuguese level. */
export function portugueseLevelKeyOf(levelPath: string): PortugueseLevelKey | null {
  const level = PORTUGUESE_LEVELS.find((l) => l.levelPath === levelPath);
  return level ? level.key : null;
}

export function portugueseLevelInfo(key: PortugueseLevelKey): PortugueseLevelInfo {
  return PORTUGUESE_LEVELS.find((l) => l.key === key) ?? PORTUGUESE_LEVELS[0];
}

/** A lesson's own level ("PT-A1") -> its level key. */
export function portugueseKeyForLessonLevel(level: string): PortugueseLevelKey | null {
  if (!level.startsWith("PT-")) return null;
  const key = level.slice(3).toLowerCase();
  return PORTUGUESE_LEVELS.some((l) => l.key === key) ? (key as PortugueseLevelKey) : null;
}

export type PortugueseLevelData = {
  key: PortugueseLevelKey;
  levelPath: PortugueseLevelPath;
  lessons: Lesson[];
  /** Units as the lesson list shows them, every one with a "Test out". */
  units: ModuleUnit[];
};

async function importLevel(key: PortugueseLevelKey): Promise<{ lessons: Lesson[]; units: UnitOutline[] }> {
  switch (key) {
    case "a1": {
      const m = await import("./pt-a1");
      return { lessons: m.PT_A1_LESSONS, units: m.PT_A1_UNITS };
    }
    case "a2": {
      const m = await import("./pt-a2");
      return { lessons: m.PT_A2_LESSONS, units: m.PT_A2_UNITS };
    }
    case "b1": {
      const m = await import("./pt-b1");
      return { lessons: m.PT_B1_LESSONS, units: m.PT_B1_UNITS };
    }
    case "b2": {
      const m = await import("./pt-b2");
      return { lessons: m.PT_B2_LESSONS, units: m.PT_B2_UNITS };
    }
    case "c1": {
      const m = await import("./pt-c1");
      return { lessons: m.PT_C1_LESSONS, units: m.PT_C1_UNITS };
    }
    case "c2": {
      const m = await import("./pt-c2");
      return { lessons: m.PT_C2_LESSONS, units: m.PT_C2_UNITS };
    }
  }
}

const loaded = new Map<PortugueseLevelKey, PortugueseLevelData>();
const loading = new Map<PortugueseLevelKey, Promise<PortugueseLevelData>>();

/** One Portuguese level's lessons and units, imported on first use. */
export function loadPortugueseLevel(key: PortugueseLevelKey): Promise<PortugueseLevelData> {
  const done = loaded.get(key);
  if (done) return Promise.resolve(done);
  let pending = loading.get(key);
  if (!pending) {
    pending = importLevel(key).then(({ lessons, units }) => {
      const bySlug = new Map(lessons.map((l) => [l.slug, l]));
      const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((l): l is Lesson => !!l);
      const data: PortugueseLevelData = {
        key,
        levelPath: `pt/${key}`,
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
export function portugueseLevelIfLoaded(key: PortugueseLevelKey): PortugueseLevelData | undefined {
  return loaded.get(key);
}

/** A Portuguese lesson by its levelPath and slug. */
export async function findPortugueseLesson(levelPath: string, slug: string): Promise<Lesson | undefined> {
  const key = portugueseLevelKeyOf(levelPath);
  if (!key) return undefined;
  return (await loadPortugueseLevel(key)).lessons.find((l) => l.slug === slug);
}

/** Where to pick up in the Portuguese course, the way the Spanish levels do
 * it (levels.ts pickFurthestNext): in the furthest level with anything
 * done, its first unfinished required lesson; that level finished, the next
 * one's. Loads only the levels it looks in. null once A1-C2 are done. */
export async function nextPortugueseLesson(
  completedByLevel: Partial<Record<PortugueseLevelPath, Record<string, boolean>>>
): Promise<{ level: PortugueseLevelInfo; lesson: Lesson; unit: ModuleUnit | undefined } | null> {
  const levels = PORTUGUESE_LEVELS;
  let start = 0;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (Object.values(completedByLevel[levels[i].levelPath] ?? {}).some(Boolean)) {
      start = i;
      break;
    }
  }
  for (const level of levels.slice(start)) {
    const data = await loadPortugueseLevel(level.key);
    const lesson = firstIncompleteRequired(data.lessons, completedByLevel[level.levelPath] ?? {});
    if (lesson) return { level, lesson, unit: data.units.find((u) => u.required.some((r) => r.slug === lesson.slug)) };
  }
  return null;
}
