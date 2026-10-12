// The German course in the app: its levels (A1-C2, then the Colloquial
// German & Culture module), loaded one level at a time.
//
// The lesson files are synced from the website (de-a1.ts ... de-culture.ts,
// assembled there into de-course.ts) and come to about 23 MB of source, more
// than the whole Spanish course. Importing them at startup, the way
// registry.ts imports Spanish, would build every German lesson before Home
// even draws, for every learner. So each level is a dynamic import() (the
// same pattern as the frequency decks in lib/decks), evaluated the first
// time a screen asks for it and kept in memory after that. Screens that
// show German lessons await loadGermanLevel(); code that only needs to know
// whether a lesson is loaded can use germanLevelIfLoaded().
//
// levelPaths are the website's ("de/a1" ... "de/culture"), so completions,
// highlights, missed questions and flashcards line up across both.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import type { ModuleUnit } from "./registry";
import { firstIncompleteRequired } from "./levels";

export type GermanLevelKey = "a1" | "a2" | "b1" | "b2" | "c1" | "c2" | "culture";
export type GermanLevelPath = `de/${GermanLevelKey}`;

export type GermanLevelInfo = {
  key: GermanLevelKey;
  levelPath: GermanLevelPath;
  /** "A1" ... "C2", "Culture". */
  code: string;
  name: string;
  /** What the level cards show: "Beginner (A1)". */
  label: string;
  exam: string | null;
  description: string;
};

// Names and descriptions as the website's de-course.ts has them (that file
// imports every level's lessons, so the app can't import it just for these).
export const GERMAN_LEVELS: GermanLevelInfo[] = [
  {
    key: "a1",
    levelPath: "de/a1",
    code: "A1",
    name: "Beginner",
    label: "Beginner (A1)",
    exam: "Goethe-Zertifikat A1",
    description:
      "Sein and haben, der/die/das and noun plurals, the sounds of German, present-tense verbs and modal verbs, questions, word order, the accusative, numbers, time and everyday conversations.",
  },
  {
    key: "a2",
    levelPath: "de/a2",
    code: "A2",
    name: "Elementary",
    label: "Elementary (A2)",
    exam: "Goethe-Zertifikat A2",
    description:
      "The Perfekt and Präteritum, the dative case, reflexive verbs, two-way prepositions, adjective endings, weil/dass clauses, the future and survival situations from restaurants to the Bürgeramt.",
  },
  {
    key: "b1",
    levelPath: "de/b1",
    code: "B1",
    name: "Intermediate",
    label: "Intermediate (B1)",
    exam: "Goethe-Zertifikat B1",
    description:
      "Konjunktiv II and wenn-clauses, the Plusquamperfekt, relative and infinitive clauses, the passive, verbs with prepositions, the genitive, spoken German and real situations at the bank, the office and home.",
  },
  {
    key: "b2",
    levelPath: "de/b2",
    code: "B2",
    name: "Upper-intermediate",
    label: "Upper-intermediate (B2)",
    exam: "Goethe-Zertifikat B2",
    description:
      "Konjunktiv I and indirect speech, past hypotheticals, passive alternatives, extended participles, nominal style, concessive and causal clauses, connectors for arguing a point, and word order for emphasis.",
  },
  {
    key: "c1",
    levelPath: "de/c1",
    code: "C1",
    name: "Advanced",
    label: "Advanced (C1)",
    exam: "Goethe-Zertifikat C1",
    description:
      "Advanced Konjunktiv, nominal and academic style, literary narration, registers from formal to Umgangssprache, Austrian and Swiss German, formal letters and academic writing.",
  },
  {
    key: "c2",
    levelPath: "de/c2",
    code: "C2",
    name: "Mastery",
    label: "Mastery (C2)",
    exam: "Goethe-Zertifikat C2",
    description:
      "Legal, medical and business German, idioms and proverbs, humour and wordplay, rhetoric, debate and negotiation, and writing about history, science, art and ideas.",
  },
  {
    key: "culture",
    levelPath: "de/culture",
    code: "Culture",
    name: "Colloquial German & Culture",
    label: "Colloquial German & Culture",
    exam: null,
    description:
      "Festivals and food culture, football, film and music, du and Sie etiquette, punctuality, Sunday quiet and the unwritten rules of German social life.",
  },
];

/** Every German levelPath, in course order. */
export const GERMAN_LEVEL_PATHS: GermanLevelPath[] = GERMAN_LEVELS.map((l) => l.levelPath);

/** "de/a1" -> "a1"; null for anything that isn't a German level. */
export function germanLevelKeyOf(levelPath: string): GermanLevelKey | null {
  const level = GERMAN_LEVELS.find((l) => l.levelPath === levelPath);
  return level ? level.key : null;
}

export function germanLevelInfo(key: GermanLevelKey): GermanLevelInfo {
  return GERMAN_LEVELS.find((l) => l.key === key) ?? GERMAN_LEVELS[0];
}

/** A lesson's own level ("DE-A1", "DE-Culture") -> its level key. */
export function germanKeyForLessonLevel(level: string): GermanLevelKey | null {
  if (!level.startsWith("DE-")) return null;
  const key = level.slice(3).toLowerCase();
  return GERMAN_LEVELS.some((l) => l.key === key) ? (key as GermanLevelKey) : null;
}

export type GermanLevelData = {
  key: GermanLevelKey;
  levelPath: GermanLevelPath;
  lessons: Lesson[];
  /** Units as the lesson list shows them, every one with a "Test out". */
  units: ModuleUnit[];
};

async function importLevel(key: GermanLevelKey): Promise<{ lessons: Lesson[]; units: UnitOutline[] }> {
  switch (key) {
    case "a1": {
      const m = await import("./de-a1");
      return { lessons: m.DE_A1_LESSONS, units: m.DE_A1_UNITS };
    }
    case "a2": {
      const m = await import("./de-a2");
      return { lessons: m.DE_A2_LESSONS, units: m.DE_A2_UNITS };
    }
    case "b1": {
      const m = await import("./de-b1");
      return { lessons: m.DE_B1_LESSONS, units: m.DE_B1_UNITS };
    }
    case "b2": {
      const m = await import("./de-b2");
      return { lessons: m.DE_B2_LESSONS, units: m.DE_B2_UNITS };
    }
    case "c1": {
      const m = await import("./de-c1");
      return { lessons: m.DE_C1_LESSONS, units: m.DE_C1_UNITS };
    }
    case "c2": {
      const m = await import("./de-c2");
      return { lessons: m.DE_C2_LESSONS, units: m.DE_C2_UNITS };
    }
    case "culture": {
      const m = await import("./de-culture");
      return { lessons: m.DE_CULTURE_LESSONS, units: m.DE_CULTURE_UNITS };
    }
  }
}

const loaded = new Map<GermanLevelKey, GermanLevelData>();
const loading = new Map<GermanLevelKey, Promise<GermanLevelData>>();

/** One German level's lessons and units, imported on first use. */
export function loadGermanLevel(key: GermanLevelKey): Promise<GermanLevelData> {
  const done = loaded.get(key);
  if (done) return Promise.resolve(done);
  let pending = loading.get(key);
  if (!pending) {
    pending = importLevel(key).then(({ lessons, units }) => {
      const bySlug = new Map(lessons.map((l) => [l.slug, l]));
      const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((l): l is Lesson => !!l);
      const data: GermanLevelData = {
        key,
        levelPath: `de/${key}`,
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
export function germanLevelIfLoaded(key: GermanLevelKey): GermanLevelData | undefined {
  return loaded.get(key);
}

/** A German lesson by its levelPath and slug (slugs repeat across courses:
 * German "a1-final-review-1" is not the Spanish one). */
export async function findGermanLesson(levelPath: string, slug: string): Promise<Lesson | undefined> {
  const key = germanLevelKeyOf(levelPath);
  if (!key) return undefined;
  return (await loadGermanLevel(key)).lessons.find((l) => l.slug === slug);
}

/** Where to pick up in the German course, the way the Spanish levels do it
 * (levels.ts pickFurthestNext): in the furthest level with anything done,
 * its first unfinished required lesson; that level finished, the next
 * one's. The Culture module is separate, as on the website. Loads only the
 * levels it looks in. null once A1-C2 are done. */
export async function nextGermanLesson(
  completedByLevel: Partial<Record<GermanLevelPath, Record<string, boolean>>>
): Promise<{ level: GermanLevelInfo; lesson: Lesson; unit: ModuleUnit | undefined } | null> {
  const levels = GERMAN_LEVELS.filter((l) => l.key !== "culture");
  let start = 0;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (Object.values(completedByLevel[levels[i].levelPath] ?? {}).some(Boolean)) {
      start = i;
      break;
    }
  }
  for (const level of levels.slice(start)) {
    const data = await loadGermanLevel(level.key);
    const lesson = firstIncompleteRequired(data.lessons, completedByLevel[level.levelPath] ?? {});
    if (lesson) return { level, lesson, unit: data.units.find((u) => u.required.some((r) => r.slug === lesson.slug)) };
  }
  return null;
}
