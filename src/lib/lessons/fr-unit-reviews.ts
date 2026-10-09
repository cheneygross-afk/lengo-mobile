// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-unit-reviews.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";
import { buildUnitReview, quoted, tooClose, type Copy, type ReviewProfile, type Sentence } from "./unit-reviews";

// Unit reviews for the French course: every A1-C2 unit (and every unit of
// the Culture module) ends with a required review lesson built from the
// unit's own lessons with the Spanish course's machinery (unit-reviews.ts):
//   - Listening: three "What does it mean?" clips and two dictations from
//     the unit's example sentences (LessonExample.es is the French);
//   - Speaking: two sentences to read aloud, then two English prompts to
//     answer aloud in French (model answer hidden until recorded);
//   - Writing: the unit's hand-written task (FR_<LEVEL>_U<NN>_WRITING in
//     the unit's file);
//   - A1-B2: a 6-question unit quiz from the lessons' final reviews;
//     C1, C2 and Culture: three English-to-French translations instead.
// Everything is picked with a PRNG seeded by the unit, so the lesson is
// identical on every build. Instructions are in English at every level.

export type FrenchLevelCode = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Culture";

const ENGLISH_WORD = /\b(the|an|i|you|he|she|it|we|they|is|are|was|were|to|of|and|in|on|my|your|this|that|be|have|has|do|does|will|would|can|not|for)\b/i;

/** An English meaning that works as a listening option or speaking cue. */
function usableEnglish(en: string | undefined, fr: string): en is string {
  if (!en) return false;
  const t = en.trim();
  return (
    t.length <= 110 &&
    t.split(/\s+/).length >= 2 &&
    !/[/()[\]→=_…*✗✓:;"«»“”]|\.\.\.|--/.test(t) &&
    !/[àâçéèêëîïôœùûü]/i.test(t) &&
    ENGLISH_WORD.test(t) &&
    t.toLowerCase() !== fr.toLowerCase()
  );
}

const COPY: Copy = {
  title: (n, unit) => `Unit ${n} review: ${unit}`,
  summary: (unit, quiz) =>
    `Listen, speak and write with what you learned in "${unit}"${quiz ? ", then a short unit quiz" : ", then translate three sentences"}.`,
  listening: [
    "Listening",
    "Five sentences from this unit's lessons. Play each one as often as you like before you answer: first pick what it means, then type exactly what you hear (🐢 plays it slowly).",
  ],
  speaking: [
    "Speaking",
    "Read two sentences aloud, record yourself and compare with the model. Then two English prompts: say them in French out loud before you check the answer. Your recordings stay on your device.",
  ],
  writing: [
    "Writing",
    "One short piece of writing that uses this unit's grammar and words. You'll get feedback when it's available; otherwise compare your text with the model answer and the checklist.",
  ],
  meaningQ: "What does it mean?",
  meaningExpl: (s: Sentence) => `"${quoted(s.es)}" means: ${quoted(s.en!)}.`,
  dictExpl: (s: Sentence) => `You heard: "${quoted(s.es)}"${s.en ? ` (${quoted(s.en)})` : ""}.`,
  readExpl: (s: Sentence) => `"${quoted(s.es)}"${s.en ? ` (${quoted(s.en)})` : ""}. Play the model again and copy its rhythm and linking.`,
  respondPrompt: (en: string) => `Say it in French: ${en}`,
  respondExpl: (s: Sentence) =>
    `One way to say it: "${quoted(s.es)}". Another correct way counts too: check the meaning first, then the sound.`,
};

const QUIZ_LEVELS = new Set<FrenchLevelCode>(["A1", "A2", "B1", "B2"]);

/** "a1-etre-1" -> "a1-etre-1-unit-review". */
export const frenchUnitReviewSlug = (unitFirstSlug: string) => `${unitFirstSlug}-unit-review`;

/** The review lesson for one unit, or null when the unit has nothing to build from yet. */
export function buildFrenchUnitReview(
  levelCode: FrenchLevelCode,
  unit: { number: number; title: string; lessons: Lesson[] },
  writing: WriteExercise | undefined,
): Lesson | null {
  const start = unit.lessons[0]?.slug;
  if (!start) return null;
  const profile: ReviewProfile = {
    level: `FR-${levelCode}` as Lesson["level"],
    slug: frenchUnitReviewSlug(start),
    seed: `FR-${levelCode}:${start}`,
    copy: COPY,
    targetAnswerDirection: "en-es",
    prose: false,
    glossOk: usableEnglish,
    tooClose: (a, b) => tooClose(a, b),
    quiz: QUIZ_LEVELS.has(levelCode),
    translationDirection: "en-es",
    strict: false,
  };
  return buildUnitReview(profile, unit, writing);
}
