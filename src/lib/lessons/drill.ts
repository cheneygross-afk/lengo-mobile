import type { Lesson, Exercise, LessonExample } from "./types";

// Question/explanation text names the target language -- every level
// except the Japanese beta's three grammar modules (the alphabets module
// rarely reaches here on its own words alone -- see the track-pooling
// fallback below) is Spanish.
function targetLanguageName(lesson: Lesson): string {
  return lesson.level.startsWith("JA") ? "Japanese" : "Spanish";
}

// Deterministic shuffle so the same lesson always generates the same
// drill questions in the same order (no re-fetch flicker, and two
// learners comparing notes see the same thing) -- same algorithm as
// ExerciseBlock's seededShuffle, duplicated here rather than exported
// from a component file.
function seededShuffle<T>(arr: T[], seed: string): T[] {
  const a = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Keep generated questions to single words/short phrases -- skip example
// pairs that are really full sentences (too long for a punchy
// multiple-choice drill), use "/" to show alternatives, or quote a
// fragment of the sentence as part of an explanatory aside rather than
// giving a clean gloss (e.g. "a -- always \"a,\" no exceptions"). A plain
// "romaji -- gloss" pair (e.g. "ai -- love", the alphabet module's normal
// format -- see ja-alphabets.ts) is fine and kept: it's a clean, single
// vocabulary item, just written with its reading and meaning together.
function isCleanEntry(text: string): boolean {
  if (text.includes("/") || text.includes(".") || text.includes('"')) return false;
  return text.trim().split(/\s+/).length <= 6;
}

function collectPairs(lesson: Lesson): LessonExample[] {
  const pairs: LessonExample[] = [];
  lesson.sections.forEach((section) => {
    section.examples?.forEach((ex) => {
      if (ex.en && isCleanEntry(ex.es) && isCleanEntry(ex.en)) pairs.push(ex);
    });
  });
  return pairs;
}

function dedupePairs(pairs: LessonExample[]): LessonExample[] {
  const seen = new Set<string>();
  return pairs.filter((p) => {
    const k = p.es.trim().toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/**
 * A lesson's hand-authored checkpoint + review exercises are sometimes
 * fewer than the drill minimum a lesson should have (every lesson should
 * drill at least MIN_DRILL_QUESTIONS -- see LessonRunnerScreen). Rather
 * than hand-author more content across every lesson file, this pads the
 * drill at runtime with straightforward multiple-choice questions
 * generated from real vocabulary examples, in both translation
 * directions -- every word, translation, and distractor is something
 * this track's own lessons already teach; nothing is invented.
 *
 * Some lessons (an intro/concept lesson with barely any vocabulary of
 * its own, or a pure review/drill lesson that reuses concepts taught
 * elsewhere rather than introducing new words) don't have enough example
 * pairs on their own to reach the minimum -- `trackLessons` is every
 * other lesson in the same module (see lib/lessons/registry.ts), used to
 * pad the pool once the lesson's own vocabulary runs out. Own-lesson
 * pairs are still tried first (they come first in the pool the shuffle
 * draws from), so a well-stocked lesson's drill is entirely its own
 * words, same as before this existed.
 */
export function generateVocabDrills(lesson: Lesson, need: number, trackLessons: Lesson[] = []): Exercise[] {
  if (need <= 0) return [];
  const targetLanguage = targetLanguageName(lesson);

  const ownPairs = dedupePairs(collectPairs(lesson));

  // Each unique pair can generate at most 2 distinct questions (one per
  // direction), so this is the roughest possible floor for `need`
  // distinct questions -- pad from the rest of the track whenever the
  // lesson's own vocabulary can't clear it.
  let pairs = ownPairs;
  if (ownPairs.length * 2 < need + 2) {
    const seenOwn = new Set(ownPairs.map((p) => p.es.trim().toLowerCase()));
    const pooled = dedupePairs(
      trackLessons.filter((l) => l.slug !== lesson.slug).flatMap((l) => collectPairs(l))
    ).filter((p) => !seenOwn.has(p.es.trim().toLowerCase()));
    pairs = [...ownPairs, ...pooled];
  }

  if (pairs.length < 2) return [];

  const out: Exercise[] = [];
  const order = seededShuffle(
    pairs.map((_, i) => i),
    lesson.slug
  );

  let i = 0;
  const maxAttempts = order.length * 2;
  while (out.length < need && i < maxAttempts) {
    const pair = pairs[order[i % order.length]];
    const direction: "es-en" | "en-es" = i % 2 === 0 ? "es-en" : "en-es";
    const prompt = direction === "es-en" ? pair.es : pair.en!;
    const answer = direction === "es-en" ? pair.en! : pair.es;

    const distractorPool = pairs
      .filter((p) => p !== pair)
      .map((p) => (direction === "es-en" ? p.en! : p.es))
      .filter((d) => d.trim().toLowerCase() !== answer.trim().toLowerCase());
    const distractors = seededShuffle(distractorPool, lesson.slug + i).slice(0, 3);

    if (distractors.length < 1) {
      i++;
      continue;
    }

    const options = seededShuffle([answer, ...distractors], lesson.slug + "-opts-" + i);
    out.push({
      type: "multiple-choice",
      question:
        direction === "es-en" ? `What does "${prompt}" mean?` : `How do you say "${prompt}" in ${targetLanguage}?`,
      options,
      correctIndex: options.indexOf(answer),
      explanation:
        direction === "es-en"
          ? `"${pair.es}" means "${pair.en}".`
          : `"${pair.en}" is "${pair.es}" in ${targetLanguage}.`,
    });
    i++;
  }

  return out;
}
