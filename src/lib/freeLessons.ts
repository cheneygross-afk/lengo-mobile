// The free opening of every course, the same rule as the website's
// src/lib/freeLessons.ts: anyone with an account can take
//
//   - every lesson of A1 Unit 1 (required and its optional extras), and
//   - the first lesson of every level (the kana and pinyin modules too;
//     not Cosas Coloquiales).
//
// Everything else needs a plan covering the course (AuthContext's
// lessonsCourses). Worked out from the app's own lessons, since its
// Japanese and Chinese courses are its own copies: the Japanese A1, which
// has no units here, counts its first two topics (greetings, then です)
// as its first unit.
import type { Lesson } from "./lessons/types";
import { isUnitLevelPath, unitsFor } from "./lessons/units";
import { LESSON_SOURCES, type LessonModuleKey } from "./lessons/registry";

type Unit = { required: Lesson[]; optional: Lesson[] };

const A1_PATHS = new Set(["a1", "fr/a1", "de/a1", "pt/a1", "it/a1", "ja-a1", "zh-a1"]);

/** A level's units: given (a loaded French, German, Portuguese or Italian level), from units.ts
 * (Spanish), or from the lesson registry (Chinese). */
function unitsOf(levelPath: string, given?: Unit[]): Unit[] | undefined {
  if (given?.length) return given;
  if (isUnitLevelPath(levelPath)) return unitsFor(levelPath);
  return LESSON_SOURCES[levelPath as LessonModuleKey]?.units;
}

const cache = new Map<string, ReadonlySet<string>>();

/** Slugs of the free lessons in a level ("a1", "fr/b1", "ja-a2", "zh-pinyin"). */
export function freeSlugs(levelPath: string, lessons: Lesson[], units?: Unit[]): ReadonlySet<string> {
  // Cosas Coloquiales, like on the website, has no free lessons.
  if (levelPath === "cosas-coloquiales") return new Set();
  const cached = cache.get(levelPath);
  if (cached && lessons.length) return cached;
  const all = unitsOf(levelPath, units);
  const slugs = new Set<string>();
  const [unit1] = all ?? [];
  if (A1_PATHS.has(levelPath) && unit1) {
    for (const l of [...unit1.required, ...unit1.optional]) slugs.add(l.slug);
  } else if (A1_PATHS.has(levelPath)) {
    // No units: the first two topics ("greetings-...-1", "-2", then the next).
    const topics: string[] = [];
    for (const l of lessons) {
      const topic = l.slug.replace(/-\d+$/, "");
      if (!topics.includes(topic)) topics.push(topic);
      if (topics.length > 2) break;
      slugs.add(l.slug);
    }
  } else {
    const first = unit1?.required[0] ?? lessons.find((l) => !l.optional);
    if (first) slugs.add(first.slug);
  }
  if (lessons.length) cache.set(levelPath, slugs);
  return slugs;
}
