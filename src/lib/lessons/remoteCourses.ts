// The Japanese, Chinese and English courses in the app (Deep End
// Languages): their levels, and their lessons loaded one level at a time
// from the website (remoteLevels.ts), the same way as French, German,
// Portuguese, Korean and Italian (lessons/french.ts ...), written once for
// all three.
//
// levelPaths are the website's ("ja/alphabets", "ja/a1" ... "zh/pinyin",
// "zh/a1" ... "en/a1" ...), so completions, highlights, missed questions
// and flashcards line up across both. Names and descriptions are the
// website's (ja-course.ts, zh/index.ts, en-course.ts): those files import
// every lesson, so the app can't import them just for these.
//
// (The app's older built-in Japanese and Chinese lessons, levelPaths
// "ja-a1", "zh-a1" ... in registry.ts, are no longer offered.)
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import type { ModuleUnit } from "./registry";
import { firstIncompleteRequired } from "./levels";
import { loadRemoteLevel } from "./remoteLevels";

export type RemoteCourseId = "ja" | "zh" | "en";

export type RemoteLevelInfo = {
  course: RemoteCourseId;
  key: string;
  levelPath: string;
  /** "A1", "Pinyin", "Kana". */
  code: string;
  name: string;
  /** What the level cards show: "Beginner". */
  label: string;
  /** The exam the level prepares for ("JLPT N5"), if any. */
  exam: string | null;
  description: string;
  /** A starter module before the levels (kana, pinyin): not part of the
   * A1-C2 path the "Continue" card follows unless nothing is done yet. */
  starter?: boolean;
};

const level = (
  course: RemoteCourseId,
  key: string,
  code: string,
  name: string,
  exam: string | null,
  description: string,
  starter = false
): RemoteLevelInfo => ({
  course,
  key,
  levelPath: `${course}/${key}`,
  code,
  name,
  label: starter ? name : `${name} (${code})`,
  exam,
  description,
  starter,
});

export const REMOTE_COURSE_LEVELS: Record<RemoteCourseId, RemoteLevelInfo[]> = {
  ja: [
    level("ja", "alphabets", "Kana", "Hiragana & Katakana", null, "The two phonetic scripts every other Japanese lesson assumes you can read. Start here.", true),
    level("ja", "a1", "A1", "Beginner", "JLPT N5", "です and ます sentences, the core particles, numbers, time and prices, verbs and adjectives in the present and past, and your first 100 kanji."),
    level("ja", "a2", "A2", "Elementary", "JLPT N4", "The te-form and plain forms, casual speech, giving and receiving, potential, volitional and conditional forms, and everyday situations from shopping to travel."),
    level("ja", "b1", "B1", "Intermediate", "JLPT N3", "Passive and causative in use, hearsay and inference, keigo for work and service, and the grammar and kanji to follow news, opinions and real conversations."),
    level("ja", "b2", "B2", "Upper-intermediate", "JLPT N2", "The full N2 grammar, business honorifics, formal written style, and articles, reports and discussions on society, work and culture."),
    level("ja", "c1", "C1", "Advanced", "JLPT N1", "The full N1 grammar, editorials and essays, academic Japanese, four-character idioms, and nuanced keigo for negotiation and formal writing."),
    level("ja", "c2", "C2", "Mastery", "Beyond N1", "Classical grammar, literary and poetic Japanese, dialects, irony and wordplay, broadcast and specialist Japanese, and translation-level precision."),
  ],
  zh: [
    level("zh", "pinyin", "Pinyin", "Pinyin & Tones", null, "How Mandarin sounds and how pinyin writes it: the four tones and the neutral tone, every initial and final, tone changes and spelling rules. Start here.", true),
    level("zh", "a1", "A1", "Foundations", "HSK 1", "Greetings and introductions, 是 sentences, questions, numbers and money, measure words, family, dates and time, places, food, getting around, and actions finished with 了."),
    level("zh", "a2", "A2", "Everyday Chinese", "HSK 2", "Experiences with 过, comparisons, 得 and 地, shopping, result and direction complements, 把 and 让, because/although/if, opinions, health, school and work."),
    level("zh", "b1", "B1", "Independent Chinese", "HSK 3", "Giving opinions and comparing, telling stories about the past, the 被 passive and more 把, conditions, emphasis with 连…都, work, travel, study, money and society."),
    level("zh", "b2", "B2", "Upper-Intermediate Chinese", "HSK 4", "Even if, no matter what, since and otherwise, formal written Chinese, debate, trends and statistics, everyday 成语, and topics from family and health to work and the arts."),
    level("zh", "c1", "C1", "Advanced Chinese", "HSK 5–6", "Building an argument, the classical elements of written Chinese, law and public notices, Chinese at work, money, the news, society, science and the arts."),
    level("zh", "c2", "C2", "Proficient Chinese", "HSK 7–9", "Classical function words, rhetoric, 成语 and sayings, register, dialects, internet language, business and academic Chinese, classical poetry, modern literature, debate and translation."),
  ],
  // English for Spanish speakers: its text is in Spanish, the learners' own language.
  en: [
    level("en", "a1", "A1", "Fundamentos", null, "Saludos, el verbo to be, el presente simple y el continuo, los sonidos del inglés, números, fechas, la hora y las preguntas básicas."),
    level("en", "a2", "A2", "Ganando fluidez", null, "El pasado simple, el futuro con going to y will, comparativos, contables e incontables, y los primeros phrasal verbs."),
    level("en", "b1", "B1", "Independencia", null, "El present perfect, el pasado continuo, condicionales, la voz pasiva, verbos modales y el estilo indirecto."),
    level("en", "b2", "B2", "Intermedio alto", null, "Tiempos perfectos continuos, condicionales mixtos, verbos con preposición, matices de los modales y escritura formal."),
    level("en", "c1", "C1", "Avanzado", null, "Inversión, cleft sentences, registro académico y profesional, colocaciones y modismos."),
    level("en", "c2", "C2", "Maestría", null, "Matices de estilo, variedades del inglés, humor, ironía y lenguaje literario."),
  ],
};

const ALL_LEVELS: RemoteLevelInfo[] = Object.values(REMOTE_COURSE_LEVELS).flat();
const BY_PATH = new Map(ALL_LEVELS.map((l) => [l.levelPath, l]));

/** "ja/a1" -> its level; null for anything that isn't one of these courses' levels. */
export function remoteLevelInfo(levelPath: string | null | undefined): RemoteLevelInfo | null {
  return (levelPath && BY_PATH.get(levelPath)) || null;
}

export type RemoteLevelData = {
  levelPath: string;
  lessons: Lesson[];
  /** Units as the lesson list shows them, every one with a "Test out". */
  units: ModuleUnit[];
};

const loaded = new Map<string, RemoteLevelData>();
const loading = new Map<string, Promise<RemoteLevelData>>();

/** One level's lessons and units, downloaded (or read from the phone) on first use. */
export function loadRemoteCourseLevel(levelPath: string): Promise<RemoteLevelData> {
  const done = loaded.get(levelPath);
  if (done) return Promise.resolve(done);
  let pending = loading.get(levelPath);
  if (!pending) {
    pending = loadRemoteLevel(levelPath).then(({ lessons, units }) => {
      const bySlug = new Map(lessons.map((l) => [l.slug, l]));
      const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((l): l is Lesson => !!l);
      const data: RemoteLevelData = {
        levelPath,
        lessons,
        units: (units as UnitOutline[]).map((u) => ({
          id: u.id,
          label: u.label,
          description: u.description ?? "",
          required: pick(u.requiredSlugs),
          optional: pick(u.optionalSlugs),
          testOut: true,
        })),
      };
      loaded.set(levelPath, data);
      loading.delete(levelPath);
      return data;
    });
    pending.catch(() => loading.delete(levelPath));
    loading.set(levelPath, pending);
  }
  return pending;
}

/** The level if it's been loaded already, without loading it. */
export function remoteCourseLevelIfLoaded(levelPath: string): RemoteLevelData | undefined {
  return loaded.get(levelPath);
}

/** Where to pick up in a course, the way the Spanish levels do it
 * (levels.ts pickFurthestNext): in the furthest level with anything done,
 * its first unfinished required lesson; that level finished, the next
 * one's. Loads only the levels it looks in. null once everything is done. */
export async function nextRemoteCourseLesson(
  course: RemoteCourseId,
  completedByLevel: Record<string, Record<string, boolean>>
): Promise<{ level: RemoteLevelInfo; lesson: Lesson; unit: ModuleUnit | undefined } | null> {
  const levels = REMOTE_COURSE_LEVELS[course];
  let start = 0;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (Object.values(completedByLevel[levels[i].levelPath] ?? {}).some(Boolean)) {
      start = i;
      break;
    }
  }
  for (const info of levels.slice(start)) {
    const data = await loadRemoteCourseLevel(info.levelPath);
    const lesson = firstIncompleteRequired(data.lessons, completedByLevel[info.levelPath] ?? {});
    if (lesson) return { level: info, lesson, unit: data.units.find((u) => u.required.some((r) => r.slug === lesson.slug)) };
  }
  return null;
}
