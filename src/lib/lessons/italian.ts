// The Italian course in the app (private beta, lib/italianBeta.ts):
// Beginner ... Mastery and the optional Culture module, loaded one level
// at a time the same way as the Korean course (lessons/korean.ts) and the
// Brazilian Portuguese course (lessons/portuguese.ts). Only the beta
// accounts see any of it: every Italian screen is reached from Home's
// Italian pill, which only they get, and RootNavigator's withItalianBeta
// turns everyone else away.
//
// The lesson files are synced from the website (it-a1.ts ... it-c2.ts,
// it-culture.ts, assembled there into it-course.ts). Each level is a
// dynamic import(), evaluated the first time a screen asks for it, so
// nobody else's app ever builds an Italian lesson.
//
// levelPaths are the website's ("it/a1" ... "it/c2", "it/culture"), so
// completions, highlights, missed questions and flashcards line up across
// both.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import type { ModuleUnit } from "./registry";
import { firstIncompleteRequired } from "./levels";

export type ItalianLevelKey = "a1" | "a2" | "b1" | "b2" | "c1" | "c2" | "culture";
export type ItalianLevelPath = `it/${ItalianLevelKey}`;

export type ItalianLevelInfo = {
  key: ItalianLevelKey;
  levelPath: ItalianLevelPath;
  /** The learner-visible name: "Beginner" ... "Mastery". Never the CEFR code. */
  label: string;
  /** The CILS exam shown beside the name ("CILS A1" ... "CILS QUATTRO"); null for Culture. */
  exam: string | null;
  description: string;
  /** "level", or "bonus" (the optional Culture module). */
  kind: "level" | "bonus";
  /** False while the level's lesson files haven't been synced into the app yet. */
  available: boolean;
};

// Names, exams and descriptions as the website's it-course.ts has them
// (that file imports every level's lessons, so the app can't import it
// just for these).
export const ITALIAN_LEVELS: ItalianLevelInfo[] = [
  {
    key: "a1",
    levelPath: "it/a1",
    label: "Beginner",
    exam: "CILS A1",
    kind: "level",
    available: true,
    description:
      "Greetings and tu or Lei, the sounds of Italian, people and things, articles, numbers, prices and time, the present tense, the bar and the restaurant, where things are, the everyday irregular verbs, likes and dislikes, your daily routine and possessives.",
  },
  {
    key: "a2",
    levelPath: "it/a2",
    label: "Elementary",
    exam: "CILS A2",
    kind: "level",
    available: true,
    description:
      "The passato prossimo with avere and essere, the imperfetto, object pronouns, ci and ne, the future and the conditional, comparisons, commands, articulated prepositions, relative pronouns, health, shopping, travel and everyday life in Italy.",
  },
  {
    key: "b1",
    levelPath: "it/b1",
    label: "Intermediate",
    exam: "CILS UNO",
    kind: "level",
    available: true,
    description:
      "Combined pronouns, the trapassato, the subjunctive in all its main uses, the past conditional, real if-sentences, reading the passato remoto, the gerund, the passive and impersonal si, reported speech, connectors, work, housing, health, the news and opinions.",
  },
  {
    key: "b2",
    levelPath: "it/b2",
    label: "Upper-intermediate",
    exam: "CILS DUE",
    kind: "level",
    available: true,
    description:
      "The imperfect and pluperfect subjunctive, the sequence of tenses, hypothetical if-sentences, implicit clauses, concession and cause, the hard prepositions, idioms, spoken and regional Italian, formal and argumentative writing, the economy, politics, science, law and the arts.",
  },
  {
    key: "c1",
    levelPath: "it/c1",
    label: "Advanced",
    exam: "CILS TRE",
    kind: "level",
    available: true,
    description:
      "Writing with the passato remoto, literary syntax, bureaucratic, academic and business Italian, journalism, nuance with mood and modals, proverbs, shifting register, regional Italian, literature, history through texts, film and theatre, rhetoric and translation.",
  },
  {
    key: "c2",
    levelPath: "it/c2",
    label: "Mastery",
    exam: "CILS QUATTRO",
    kind: "level",
    available: true,
    description:
      "Dante, Petrarca, Boccaccio and Leopardi, the questione della lingua, dialects and regional languages, fine shades of meaning, irony and humour, slang, legal, medical and financial Italian, philosophy, style and editing, translation, and near-native listening, speaking and writing.",
  },
  {
    key: "culture",
    levelPath: "it/culture",
    label: "Italian Culture & Everyday Life",
    exam: null,
    kind: "bonus",
    available: true,
    description:
      "The regions and their rivalries, the rhythm of the Italian day, food by region, festivals and saints' days, gestures, art, music, cinema, calcio and the practical side of living in Italy. Opens from Intermediate.",
  },
];

/** The main path, Beginner through Mastery, in course order (Culture is a bonus outside it). */
export const ITALIAN_PATH_LEVELS: ItalianLevelInfo[] = ITALIAN_LEVELS.filter((l) => l.kind !== "bonus" && l.available);

/** Every Italian levelPath the app has, in course order (Culture included). */
export const ITALIAN_LEVEL_PATHS: ItalianLevelPath[] = ITALIAN_LEVELS.filter((l) => l.available).map((l) => l.levelPath);

/** "it/a1" -> "a1"; null for anything that isn't an Italian level the app has. */
export function italianLevelKeyOf(levelPath: string): ItalianLevelKey | null {
  const level = ITALIAN_LEVELS.find((l) => l.levelPath === levelPath && l.available);
  return level ? level.key : null;
}

export function italianLevelInfo(key: ItalianLevelKey): ItalianLevelInfo {
  return ITALIAN_LEVELS.find((l) => l.key === key) ?? ITALIAN_LEVELS[0];
}

export type ItalianLevelData = {
  key: ItalianLevelKey;
  levelPath: ItalianLevelPath;
  lessons: Lesson[];
  /** Units as the lesson list shows them, every one with a "Test out". */
  units: ModuleUnit[];
};

async function importLevel(key: ItalianLevelKey): Promise<{ lessons: Lesson[]; units: UnitOutline[] }> {
  switch (key) {
    case "a1": {
      const m = await import("./it-a1");
      return { lessons: m.IT_A1_LESSONS, units: m.IT_A1_UNITS };
    }
    case "a2": {
      const m = await import("./it-a2");
      return { lessons: m.IT_A2_LESSONS, units: m.IT_A2_UNITS };
    }
    case "b1": {
      const m = await import("./it-b1");
      return { lessons: m.IT_B1_LESSONS, units: m.IT_B1_UNITS };
    }
    case "b2": {
      const m = await import("./it-b2");
      return { lessons: m.IT_B2_LESSONS, units: m.IT_B2_UNITS };
    }
    case "c1": {
      const m = await import("./it-c1");
      return { lessons: m.IT_C1_LESSONS, units: m.IT_C1_UNITS };
    }
    case "c2": {
      const m = await import("./it-c2");
      return { lessons: m.IT_C2_LESSONS, units: m.IT_C2_UNITS };
    }
    case "culture": {
      const m = await import("./it-culture");
      return { lessons: m.IT_CULTURE_LESSONS, units: m.IT_CULTURE_UNITS };
    }
  }
}

const loaded = new Map<ItalianLevelKey, ItalianLevelData>();
const loading = new Map<ItalianLevelKey, Promise<ItalianLevelData>>();

/** One Italian level's lessons and units, imported on first use. */
export function loadItalianLevel(key: ItalianLevelKey): Promise<ItalianLevelData> {
  const done = loaded.get(key);
  if (done) return Promise.resolve(done);
  let pending = loading.get(key);
  if (!pending) {
    pending = importLevel(key).then(({ lessons, units }) => {
      const bySlug = new Map(lessons.map((l) => [l.slug, l]));
      const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((l): l is Lesson => !!l);
      const data: ItalianLevelData = {
        key,
        levelPath: `it/${key}`,
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
export function italianLevelIfLoaded(key: ItalianLevelKey): ItalianLevelData | undefined {
  return loaded.get(key);
}

/** Where to pick up in the Italian course (Beginner ... Mastery), the way
 * the Korean and Portuguese courses do it: in the furthest level with
 * anything done, its first unfinished required lesson; that level
 * finished, the next one's. Loads only the levels it looks in. null once
 * all are done. */
export async function nextItalianLesson(
  completedByLevel: Partial<Record<ItalianLevelPath, Record<string, boolean>>>
): Promise<{ level: ItalianLevelInfo; lesson: Lesson; unit: ModuleUnit | undefined } | null> {
  const levels = ITALIAN_PATH_LEVELS;
  let start = 0;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (Object.values(completedByLevel[levels[i].levelPath] ?? {}).some(Boolean)) {
      start = i;
      break;
    }
  }
  for (const level of levels.slice(start)) {
    const data = await loadItalianLevel(level.key);
    const lesson = firstIncompleteRequired(data.lessons, completedByLevel[level.levelPath] ?? {});
    if (lesson) return { level, lesson, unit: data.units.find((u) => u.required.some((r) => r.slug === lesson.slug)) };
  }
  return null;
}
