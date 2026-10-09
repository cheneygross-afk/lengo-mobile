// The French course in the app: its levels (A1-C2, then the Colloquial
// French & Culture module), loaded one level at a time.
//
// The lesson files are synced from the website (fr-a1.ts ... fr-culture.ts,
// assembled there into fr-course.ts) and come to about 20 MB of source, more
// than the whole Spanish course. Importing them at startup, the way
// registry.ts imports Spanish, would build every French lesson before Home
// even draws, for every learner. So each level is a dynamic import() (the
// same pattern as the frequency decks in lib/decks), evaluated the first
// time a screen asks for it and kept in memory after that. Screens that
// show French lessons await loadFrenchLevel(); code that only needs to know
// whether a lesson is loaded can use frenchLevelIfLoaded().
//
// levelPaths are the website's ("fr/a1" ... "fr/culture"), so completions,
// highlights, missed questions and flashcards line up across both.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import type { ModuleUnit } from "./registry";
import { firstIncompleteRequired } from "./levels";

export type FrenchLevelKey = "a1" | "a2" | "b1" | "b2" | "c1" | "c2" | "culture";
export type FrenchLevelPath = `fr/${FrenchLevelKey}`;

export type FrenchLevelInfo = {
  key: FrenchLevelKey;
  levelPath: FrenchLevelPath;
  /** "A1" ... "C2", "Culture". */
  code: string;
  name: string;
  /** What the level cards show: "Beginner (A1)". */
  label: string;
  exam: string | null;
  description: string;
};

// Names and descriptions as the website's fr-course.ts has them (that file
// imports every level's lessons, so the app can't import it just for these).
export const FRENCH_LEVELS: FrenchLevelInfo[] = [
  {
    key: "a1",
    levelPath: "fr/a1",
    code: "A1",
    name: "Beginner",
    label: "Beginner (A1)",
    exam: "DELF A1",
    description:
      "Être and avoir, articles and gender, the sounds of French, present-tense verbs, questions and negation, numbers, time and dates, and everyday conversations.",
  },
  {
    key: "a2",
    levelPath: "fr/a2",
    code: "A2",
    name: "Elementary",
    label: "Elementary (A2)",
    exam: "DELF A2",
    description:
      "The passé composé and imparfait, object pronouns, y and en, pronominal verbs, comparisons, the future, the imperative, and survival situations from restaurants to doctors.",
  },
  {
    key: "b1",
    levelPath: "fr/b1",
    code: "B1",
    name: "Intermediate",
    label: "Intermediate (B1)",
    exam: "DELF B1",
    description:
      "The subjunctive, the conditional and si-clauses, the plus-que-parfait, relative pronouns, the passive, spoken French, and real situations at the bank, the office and home.",
  },
  {
    key: "b2",
    levelPath: "fr/b2",
    code: "B2",
    name: "Upper-intermediate",
    label: "Upper-intermediate (B2)",
    exam: "DELF B2",
    description:
      "Subjunctive after conjunctions and in relative clauses, past hypotheticals, reported speech, the gérondif, causative faire, connectors for arguing a point, and emphasis.",
  },
  {
    key: "c1",
    levelPath: "fr/c1",
    code: "C1",
    name: "Advanced",
    label: "Advanced (C1)",
    exam: "DALF C1",
    description:
      "Concession, nominalization, literary tenses, registers from soutenu to argot and verlan, French around the world, formal letters and academic writing.",
  },
  {
    key: "c2",
    levelPath: "fr/c2",
    code: "C2",
    name: "Mastery",
    label: "Mastery (C2)",
    exam: "DALF C2",
    description:
      "Legal, medical and business French, idioms and proverbs, humour and wordplay, rhetoric, debate and negotiation, and writing about history, science, art and ideas.",
  },
  {
    key: "culture",
    levelPath: "fr/culture",
    code: "Culture",
    name: "Colloquial French & Culture",
    label: "Colloquial French & Culture",
    exam: null,
    description:
      "Festivals and food culture, football, cinema and chanson, la bise, tu and vous etiquette, superstitions and the unwritten rules of French social life.",
  },
];

/** Every French levelPath, in course order. */
export const FRENCH_LEVEL_PATHS: FrenchLevelPath[] = FRENCH_LEVELS.map((l) => l.levelPath);

/** "fr/a1" -> "a1"; null for anything that isn't a French level. */
export function frenchLevelKeyOf(levelPath: string): FrenchLevelKey | null {
  const level = FRENCH_LEVELS.find((l) => l.levelPath === levelPath);
  return level ? level.key : null;
}

export function frenchLevelInfo(key: FrenchLevelKey): FrenchLevelInfo {
  return FRENCH_LEVELS.find((l) => l.key === key) ?? FRENCH_LEVELS[0];
}

/** A lesson's own level ("FR-A1", "FR-Culture") -> its level key. */
export function frenchKeyForLessonLevel(level: string): FrenchLevelKey | null {
  if (!level.startsWith("FR-")) return null;
  const key = level.slice(3).toLowerCase();
  return FRENCH_LEVELS.some((l) => l.key === key) ? (key as FrenchLevelKey) : null;
}

export type FrenchLevelData = {
  key: FrenchLevelKey;
  levelPath: FrenchLevelPath;
  lessons: Lesson[];
  /** Units as the lesson list shows them, every one with a "Test out". */
  units: ModuleUnit[];
};

async function importLevel(key: FrenchLevelKey): Promise<{ lessons: Lesson[]; units: UnitOutline[] }> {
  switch (key) {
    case "a1": {
      const m = await import("./fr-a1");
      return { lessons: m.FR_A1_LESSONS, units: m.FR_A1_UNITS };
    }
    case "a2": {
      const m = await import("./fr-a2");
      return { lessons: m.FR_A2_LESSONS, units: m.FR_A2_UNITS };
    }
    case "b1": {
      const m = await import("./fr-b1");
      return { lessons: m.FR_B1_LESSONS, units: m.FR_B1_UNITS };
    }
    case "b2": {
      const m = await import("./fr-b2");
      return { lessons: m.FR_B2_LESSONS, units: m.FR_B2_UNITS };
    }
    case "c1": {
      const m = await import("./fr-c1");
      return { lessons: m.FR_C1_LESSONS, units: m.FR_C1_UNITS };
    }
    case "c2": {
      const m = await import("./fr-c2");
      return { lessons: m.FR_C2_LESSONS, units: m.FR_C2_UNITS };
    }
    case "culture": {
      const m = await import("./fr-culture");
      return { lessons: m.FR_CULTURE_LESSONS, units: m.FR_CULTURE_UNITS };
    }
  }
}

const loaded = new Map<FrenchLevelKey, FrenchLevelData>();
const loading = new Map<FrenchLevelKey, Promise<FrenchLevelData>>();

/** One French level's lessons and units, imported on first use. */
export function loadFrenchLevel(key: FrenchLevelKey): Promise<FrenchLevelData> {
  const done = loaded.get(key);
  if (done) return Promise.resolve(done);
  let pending = loading.get(key);
  if (!pending) {
    pending = importLevel(key).then(({ lessons, units }) => {
      const bySlug = new Map(lessons.map((l) => [l.slug, l]));
      const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((l): l is Lesson => !!l);
      const data: FrenchLevelData = {
        key,
        levelPath: `fr/${key}`,
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
export function frenchLevelIfLoaded(key: FrenchLevelKey): FrenchLevelData | undefined {
  return loaded.get(key);
}

/** A French lesson by its levelPath and slug (slugs repeat across courses:
 * French "a1-final-review-1" is not the Spanish one). */
export async function findFrenchLesson(levelPath: string, slug: string): Promise<Lesson | undefined> {
  const key = frenchLevelKeyOf(levelPath);
  if (!key) return undefined;
  return (await loadFrenchLevel(key)).lessons.find((l) => l.slug === slug);
}

/** Where to pick up in the French course, the way the Spanish levels do it
 * (levels.ts pickFurthestNext): in the furthest level with anything done,
 * its first unfinished required lesson; that level finished, the next
 * one's. The Culture module is separate, as on the website. Loads only the
 * levels it looks in. null once A1-C2 are done. */
export async function nextFrenchLesson(
  completedByLevel: Partial<Record<FrenchLevelPath, Record<string, boolean>>>
): Promise<{ level: FrenchLevelInfo; lesson: Lesson; unit: ModuleUnit | undefined } | null> {
  const levels = FRENCH_LEVELS.filter((l) => l.key !== "culture");
  let start = 0;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (Object.values(completedByLevel[levels[i].levelPath] ?? {}).some(Boolean)) {
      start = i;
      break;
    }
  }
  for (const level of levels.slice(start)) {
    const data = await loadFrenchLevel(level.key);
    const lesson = firstIncompleteRequired(data.lessons, completedByLevel[level.levelPath] ?? {});
    if (lesson) return { level, lesson, unit: data.units.find((u) => u.required.some((r) => r.slug === lesson.slug)) };
  }
  return null;
}
