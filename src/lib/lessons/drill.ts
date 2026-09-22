import type { Lesson, Exercise, LessonExample } from "./types";

// Question/explanation text names the target language -- every level
// except the Japanese beta's three grammar modules (the alphabets module
// has too few clean example pairs of its own to ever reach here) is
// Spanish.
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
// multiple-choice drill) or that use "/" to show alternatives.
function isCleanEntry(text: string): boolean {
  if (text.includes("/") || text.includes(".")) return false;
  return text.trim().split(/\s+/).length <= 6;
}

/**
 * A lesson's hand-authored checkpoint + review exercises are sometimes
 * fewer than the drill minimum a lesson should have. Rather than
 * hand-author more content across every lesson file, this pads the drill
 * at runtime with straightforward multiple-choice questions generated
 * directly from the lesson's own vocabulary examples, in both translation
 * directions -- every word, translation, and distractor is something the
 * lesson already teaches; nothing is invented.
 *
 * Returns as many as it can, up to `need` -- for a lesson with very few
 * example pairs it may fall short, since it needs at least a couple of
 * other examples in the same lesson to build multiple-choice distractors.
 */
export function generateVocabDrills(lesson: Lesson, need: number): Exercise[] {
  if (need <= 0) return [];
  const targetLanguage = targetLanguageName(lesson);

  const pairs: LessonExample[] = [];
  lesson.sections.forEach((section) => {
    section.examples?.forEach((ex) => {
      if (ex.en && isCleanEntry(ex.es) && isCleanEntry(ex.en)) pairs.push(ex);
    });
  });

  const seen = new Set<string>();
  const uniquePairs = pairs.filter((p) => {
    const k = p.es.trim().toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  if (uniquePairs.length < 2) return [];

  const out: Exercise[] = [];
  const order = seededShuffle(
    uniquePairs.map((_, i) => i),
    lesson.slug
  );

  let i = 0;
  const maxAttempts = order.length * 2;
  while (out.length < need && i < maxAttempts) {
    const pair = uniquePairs[order[i % order.length]];
    const direction: "es-en" | "en-es" = i % 2 === 0 ? "es-en" : "en-es";
    const prompt = direction === "es-en" ? pair.es : pair.en!;
    const answer = direction === "es-en" ? pair.en! : pair.es;

    const distractorPool = uniquePairs
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
