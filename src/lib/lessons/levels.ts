// Synced from cheneygross-afk/lengo:src/lib/lessons/levels.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { LEVEL_EXIT_SLUGS } from "./sequencing";

// The six core Spanish levels as both apps name and count them: the
// lessons page and level headers on the website, the level cards and
// lesson lists in the mobile app. One copy, so the two can't disagree on
// a level's name or on which lessons count toward its progress.

export type SpanishLevelPath = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type SpanishLevelInfo = {
  levelPath: SpanishLevelPath;
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  name: string;
  /** The plain-English name ("Advanced"), shown everywhere a level is named to learners.
   *  The CEFR `code` stays on the record for URLs, data, and search-engine markup, but is
   *  deliberately not part of the label. */
  label: string;
  description: string;
};

const level = (
  levelPath: SpanishLevelPath,
  code: SpanishLevelInfo["code"],
  name: string,
  description: string
): SpanishLevelInfo => ({ levelPath, code, name, label: name, description });

export const SPANISH_LEVELS: SpanishLevelInfo[] = [
  level(
    "a1",
    "A1",
    "Beginner",
    "The building blocks: greetings, pronouns, ser vs. estar, present-tense verbs, questions, and everyday vocabulary."
  ),
  level("a2", "A2", "Elementary", "Past tenses, comparisons, direct/indirect object pronouns, and more everyday situations."),
  level("b1", "B1", "Intermediate", "Subjunctive mood basics, future and conditional tenses, and more complex storytelling."),
  level(
    "b2",
    "B2",
    "Advanced",
    "Advanced subjunctive, reported speech, and nuanced connectors for fluent conversation."
  ),
  level(
    "c1",
    "C1",
    "Mastery",
    "Advanced grammar mastery: subjunctive nuance, nominalization, gerund vs. infinitive, and native-level passive constructions."
  ),
  level(
    "c2",
    "C2",
    "Professional & Academic",
    "Specialized registers, idiomatic fluency, and precision for professional and academic Spanish."
  ),
];

export function spanishLevel(levelPath: SpanishLevelPath): SpanishLevelInfo {
  const found = SPANISH_LEVELS.find((l) => l.levelPath === levelPath);
  if (!found) throw new Error(`levels: unknown level "${levelPath}"`);
  return found;
}

/** The lessons that count toward a level's progress: everything but the
 * optional Extra Practice block (see sequencing.ts). */
export function requiredLessons(lessons: Lesson[]): Lesson[] {
  return lessons.filter((l) => !l.optional);
}

const EXIT_SLUGS = new Set<string>(Object.values(LEVEL_EXIT_SLUGS));

/** The lesson to offer after lessons[index], or null when it ends the
 * level (its exit test), which shows the level-complete ending instead.
 * Optional Extra Practice lessons are skipped unless the learner is
 * already in them. */
export function nextLessonInPath(lessons: Lesson[], index: number): Lesson | null {
  const lesson = lessons[index];
  if (!lesson || EXIT_SLUGS.has(lesson.slug)) return null;
  return lessons.slice(index + 1).find((l) => lesson.optional || !l.optional) ?? null;
}

// ---- Display titles ---------------------------------------------------

const PART_SUFFIX = /,?\s*(?:Part|Parte) (\d+) (?:of|de) (\d+)$/;
const INNER_PART = /\s*\((?:Part|Parte) (\d+) (?:of|de) (\d+)\)/;
const ENGLISH_TITLE_LEVELS = new Set<Lesson["level"]>(["A1", "A2"]);

const ENGLISH_WORDS =
  /\b(the|and|of|with|to|in|practice|review|vocabulary|tense|verbs|present|past|perfect|commands|clauses|if|simple|relative|pronouns|passive|voice|expressions|formation|conditional|mastery|check|challenge|comprehensive|extra)\b|&/gi;
const SPANISH_WORDS = /\b(de|del|la|el|los|las|y|con|en|para|por|que|práctica|repaso|subjuntivo|pretérito|imperativo|pronombres|verbos|prueba)\b/gi;

/** Whether a title reads as English: by its function words, or, when
 * that's a tie, by the level's instruction language (English at A1/A2,
 * Spanish from B1 up). */
function isEnglishTitle(title: string, level: Lesson["level"]): boolean {
  const en = title.match(ENGLISH_WORDS)?.length ?? 0;
  const es = title.match(SPANISH_WORDS)?.length ?? 0;
  return en === es ? ENGLISH_TITLE_LEVELS.has(level) : en > es;
}

/**
 * A lesson title cleaned up for lists, headers and next-lesson links. The
 * stored titles stay as they are (they key nothing, but content is edited
 * only in the lesson files); this only changes what's shown:
 *   - one "Part X of Y" instead of two: "Español Jurídico (Parte 1 de 2),
 *     Part 3 of 3" becomes "Español Jurídico, Parte 3 de 7" when the
 *     level's lessons are passed in (the parts are counted across both
 *     halves), or "Español Jurídico 1, Parte 3 de 3" without them,
 *   - the part numbering is in the title's own language: "Subjuntivo en
 *     Cláusulas Adjetivas, Parte 1 de 2", not "..., Part 1 of 2",
 *   - an optional drill titled exactly like the lesson it drills gets
 *     "práctica extra" added, so the two don't read as the same lesson.
 */
export function displayTitle(
  lesson: Pick<Lesson, "title" | "level" | "slug"> & { optional?: boolean },
  levelLessons?: Pick<Lesson, "title">[]
): string {
  let title = lesson.title.trim();
  const suffix = PART_SUFFIX.exec(title);
  let base = suffix ? title.slice(0, suffix.index).trim() : title;
  let x = suffix ? Number(suffix[1]) : 0;
  let y = suffix ? Number(suffix[2]) : 0;

  const inner = INNER_PART.exec(base);
  if (inner) {
    const stem = base.replace(INNER_PART, "").trim();
    if (suffix && levelLessons) {
      // Count this lesson's place among every part of every half.
      const parts = levelLessons
        .map((l) => {
          const s = PART_SUFFIX.exec(l.title);
          const b = s ? l.title.slice(0, s.index).trim() : l.title;
          const i = INNER_PART.exec(b);
          if (!s || !i || b.replace(INNER_PART, "").trim() !== stem) return null;
          return { half: Number(i[1]), n: Number(s[1]), title: l.title };
        })
        .filter((p): p is { half: number; n: number; title: string } => p !== null)
        .sort((a, b) => a.half - b.half || a.n - b.n);
      const at = parts.findIndex((p) => p.title === lesson.title);
      if (at !== -1) {
        x = at + 1;
        y = parts.length;
        base = stem;
      }
    }
    if (base !== stem) base = `${stem} ${inner[1]}`;
  }

  if (lesson.optional && /-drill-\d+$/.test(lesson.slug) && !/extra|intensiv/i.test(base)) {
    base = `${base}: ${isEnglishTitle(base, lesson.level) ? "extra practice" : "práctica extra"}`;
  }
  const [part, of] = isEnglishTitle(base, lesson.level) ? ["Part", "of"] : ["Parte", "de"];
  title = suffix ? `${base}, ${part} ${x} ${of} ${y}` : base;
  return title;
}

// ---- Progress helpers ----------------------------------------------------

/** Completed lesson slugs, however the caller holds them: the per-level
 * `{ slug: true }` map both apps store, a Set, or a list. */
export type CompletedSlugs = ReadonlySet<string> | readonly string[] | Readonly<Record<string, boolean>>;

export function completedChecker(completed: CompletedSlugs): (slug: string) => boolean {
  if (completed instanceof Set) return (slug) => completed.has(slug);
  if (Array.isArray(completed)) {
    const set = new Set(completed);
    return (slug) => set.has(slug);
  }
  const map = completed as Readonly<Record<string, boolean>>;
  return (slug) => !!map[slug];
}

/** The first required lesson not yet completed, in course order, or null
 * when every required lesson is done. A unit review (unit-reviews.ts) the
 * learner has already moved past -- some later required lesson is done --
 * is skipped, so the reviews added to units people had finished don't
 * pull them back (they're still in the list to take any time). */
export function firstIncompleteRequired<L extends { slug: string; optional?: boolean; unitReview?: boolean }>(
  lessons: readonly L[],
  completed: CompletedSlugs
): L | null {
  const done = completedChecker(completed);
  let lastDone = -1;
  lessons.forEach((l, i) => {
    if (!l.optional && done(l.slug)) lastDone = i;
  });
  return lessons.find((l, i) => !l.optional && !done(l.slug) && !(l.unitReview && i < lastDone)) ?? null;
}

/**
 * The level a learner is furthest into and the lesson to continue with
 * there: the highest level (in the order given) with any required lesson
 * done, at its first unfinished required lesson; if that level is
 * finished, the first lesson of the next level. With nothing done
 * anywhere, the first level's first lesson. Null when everything is done.
 */
export function pickFurthestNext<P extends string, L extends { slug: string; optional?: boolean }>(
  levels: readonly { levelPath: P; lessons: readonly L[] }[],
  completed: CompletedSlugs
): { levelPath: P; lesson: L } | null {
  const done = completedChecker(completed);
  let start = 0;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (levels[i].lessons.some((l) => !l.optional && done(l.slug))) {
      start = i;
      break;
    }
  }
  for (let i = start; i < levels.length; i++) {
    const lesson = firstIncompleteRequired(levels[i].lessons, completed);
    if (lesson) return { levelPath: levels[i].levelPath, lesson };
  }
  return null;
}

// ---- Testing out of a unit -------------------------------------------------
// In unitTest.ts, which imports no lesson data, so sequencing.ts can use
// pickUnitTestQuestions for the end-of-unit quizzes (unit-reviews.ts).

export {
  UNIT_TEST_PASS_PERCENT,
  UNIT_TEST_QUESTIONS,
  pickUnitTestQuestions,
  unitTestPassed,
  type UnitTestQuestion,
} from "./unitTest";
