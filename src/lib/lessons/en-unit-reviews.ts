// Synced from cheneygross-afk/lengo:src/lib/lessons/en-unit-reviews.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";
import { buildUnitReview, quoted, tooClose, type Copy, type ReviewProfile, type Sentence } from "./unit-reviews";
import { EN_A1_UNIT_WRITING } from "./en-unit-writing-a1";
import { EN_A2_UNIT_WRITING } from "./en-unit-writing-a2";
import { EN_B1_UNIT_WRITING } from "./en-unit-writing-b1";
import { EN_B2_UNIT_WRITING } from "./en-unit-writing-b2";
import { EN_C1_UNIT_WRITING } from "./en-unit-writing-c1";
import { EN_C2_UNIT_WRITING } from "./en-unit-writing-c2";

// Unit reviews for the English for Spanish speakers course: one required
// review lesson at the end of every unit, built by buildEnglishLevel
// (en-units.ts) with the Spanish course's machinery (unit-reviews.ts):
//   - Listening: three "¿Qué significa?" clips and two dictations from the
//     unit's own example sentences (LessonExample.es is the English,
//     .en the Spanish meaning). Up to two clips are authored listening
//     items from the unit's optional practice lessons, with their own
//     options; the others get wrong options from sentences that look like
//     the right one (similar length and words, same lesson first);
//   - Speaking: two sentences to read aloud, then two Spanish cues to say
//     in English;
//   - Writing: the unit's task from en-unit-writing-<level>.ts, keyed by
//     unit id ("u1", "u07"...). A unit with no task yet simply has no
//     writing section;
//   - EN-A1..EN-B2: a 6-question unit quiz from the unit's lessons' final
//     reviews (up to four from its optional practice lessons, which most
//     learners haven't seen, the rest from the required lessons);
//     EN-C1/C2: three Spanish-to-English translations instead (up to two
//     from the optional lessons).
// Sentences for dictation and speaking also come from the optional
// lessons first (see `matched` in unit-reviews.ts).
// Instructions are in Spanish at EN-A1/A2 and in English from EN-B1 (the
// inverse of the Spanish course). The review goes right after the unit's
// last required lesson; in a unit that ends the level, right before its
// exit test. Units still too thin to build one (a unit being written) get
// no review rather than breaking the build.

export type EnglishLevelCode = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** Each level's writing tasks, keyed by unit id (EnglishUnitDef.id). */
export const EN_UNIT_WRITING: Record<EnglishLevelCode, Record<string, WriteExercise>> = {
  A1: EN_A1_UNIT_WRITING,
  A2: EN_A2_UNIT_WRITING,
  B1: EN_B1_UNIT_WRITING,
  B2: EN_B2_UNIT_WRITING,
  C1: EN_C1_UNIT_WRITING,
  C2: EN_C2_UNIT_WRITING,
};

/** A lesson in a unit that ends the level: the review goes before it. */
export const EN_EXIT_LESSON = /-(exit-test|mastery-exam)(-\d+)?$/;

// ---- The Spanish translations ----------------------------------------------

const SPANISH_MARK = /[áéíóúüñ¿¡]/i;
const SPANISH_FUNCTION = new Set(
  "el la los las un una unos unas de del que y en es no se me te lo le por para con mi mis tu tus su sus muy está estoy soy son hay yo tú él ella ellos nosotros tengo tiene al".split(" ")
);
const spanishWords = (t: string) => t.toLowerCase().match(/[a-záéíóúüñ]+/g) ?? [];

/** A Spanish meaning that works as a listening option or a speaking cue:
 * a short plain sentence (no notes, quotes or notation) that reads as Spanish. */
function usableSpanishGloss(gloss: string | undefined, target: string): gloss is string {
  if (!gloss) return false;
  const t = gloss.trim();
  const words = spanishWords(t);
  return (
    t.length <= 110 &&
    words.length >= 2 &&
    !/[/()[\]→=_…*✗✓:;"«»“”]|\.\.\.|--/.test(t) &&
    !/incorrecto/i.test(t) &&
    (SPANISH_MARK.test(t) || words.some((w) => SPANISH_FUNCTION.has(w))) &&
    t.toLowerCase() !== target.toLowerCase()
  );
}

const SPANISH_STOP: ReadonlySet<string> = new Set(
  "yo tú tu él ella usted nosotros nosotras ellos ellas ustedes me te se nos le les lo los la las el un una unos unas mi mis su sus es son está están estoy soy era fue ser estar de del al a y o en con por para que no sí muy hay este esta eso esto aquí allí".split(" ")
);
const spanishTooClose = (a: string, b: string) => tooClose(a, b, SPANISH_STOP, /[^a-záéíóúüñ ]/g);

// ---- Instructions ------------------------------------------------------------

/** EN-A1 and EN-A2: instructions in Spanish, English in "double quotes". */
const SPANISH_COPY: Copy = {
  title: (n, unit) => `Repaso de la unidad ${n}: ${unit}`,
  summary: (unit, quiz) =>
    `Escucha, habla y escribe en inglés con lo que has aprendido en «${unit}»${quiz ? ", y después un test rápido de la unidad" : ""}.`,
  listening: [
    "Comprensión auditiva",
    "Frases de las lecciones de esta unidad. Escucha cada una todas las veces que quieras antes de contestar: primero elige qué significa y luego escribe exactamente lo que oyes (🐢 la reproduce más despacio).",
  ],
  speaking: [
    "Expresión oral",
    "Lee frases en inglés en voz alta, grábate y compara con el modelo. Después, frases en español: dilas en inglés en voz alta antes de ver la respuesta. Tus grabaciones no salen de tu dispositivo.",
  ],
  writing: [
    "Expresión escrita",
    "Un texto breve en inglés con la gramática y el vocabulario de esta unidad. Si la corrección automática está disponible, recibirás comentarios; si no, compara tu texto con el modelo y la lista de puntos.",
  ],
  meaningQ: "¿Qué significa?",
  meaningExpl: (s: Sentence) => `"${quoted(s.es)}" significa «${quoted(s.en!)}».`,
  dictExpl: (s: Sentence) => `Has oído: "${quoted(s.es)}"${s.en ? ` («${quoted(s.en)}»)` : ""}.`,
  readExpl: (s: Sentence) => `"${quoted(s.es)}"${s.en ? ` («${quoted(s.en)}»)` : ""}. Escucha otra vez el modelo e imita su ritmo.`,
  respondPrompt: (es: string) => `Dilo en inglés: «${quoted(es)}»`,
  respondExpl: (s: Sentence) =>
    `Una forma de decirlo: "${quoted(s.es)}". Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.`,
};

/** EN-B1 and up: instructions in English, Spanish in «guillemets». */
const ENGLISH_COPY: Copy = {
  title: (n, unit) => `Unit ${n} review: ${unit}`,
  summary: (unit, quiz) =>
    `Listen, speak and write with what you learned in "${unit}"${quiz ? ", then a short unit quiz" : ", then translate three sentences"}.`,
  listening: [
    "Listening",
    "Sentences from this unit's lessons. Play each one as often as you like before you answer: first pick what it means, then type exactly what you hear (🐢 plays it slowly).",
  ],
  speaking: [
    "Speaking",
    "Read sentences aloud, record yourself and compare with the model. Then some Spanish cues: say them in English out loud before you check the answer. Your recordings stay on your device.",
  ],
  writing: [
    "Writing",
    "One short piece of writing that uses this unit's grammar and words. You'll get feedback when it's available; otherwise compare your text with the model answer and the checklist.",
  ],
  meaningQ: "What does it mean?",
  meaningExpl: (s: Sentence) => `"${quoted(s.es)}" means «${quoted(s.en!)}».`,
  dictExpl: (s: Sentence) => `You heard: "${quoted(s.es)}"${s.en ? ` («${quoted(s.en)}»)` : ""}.`,
  readExpl: (s: Sentence) => `"${quoted(s.es)}"${s.en ? ` («${quoted(s.en)}»)` : ""}. Play the model again and copy its rhythm.`,
  respondPrompt: (es: string) => `Say it in English: «${quoted(es)}»`,
  respondExpl: (s: Sentence) =>
    `One way to say it: "${quoted(s.es)}". Another correct way counts too: check the meaning first, then the sound.`,
};

const QUIZ_LEVELS = new Set<EnglishLevelCode>(["A1", "A2", "B1", "B2"]);

/** The review lesson's slug for a unit, e.g. "en-a1-u1-review". */
export const englishUnitReviewSlug = (levelCode: EnglishLevelCode, unitId: string) =>
  `en-${levelCode.toLowerCase()}-${unitId}-review`;

/**
 * The unit's lessons with its review inserted: after the last required
 * lesson, or before the first exit test. Returned unchanged when the
 * unit is too thin to build a review from.
 */
export function withEnglishUnitReview(
  levelCode: EnglishLevelCode,
  unit: { id: string; number: number; title: string; lessons: Lesson[] }
): Lesson[] {
  const lessons = unit.lessons;
  const material = lessons.filter((l) => !l.optional && !l.unitReview && !EN_EXIT_LESSON.test(l.slug));
  if (material.length === 0) return lessons;
  const spanishInstructions = levelCode === "A1" || levelCode === "A2";
  const slug = englishUnitReviewSlug(levelCode, unit.id);
  const profile: ReviewProfile = {
    level: `EN-${levelCode}`,
    slug,
    seed: `EN-${levelCode}:${unit.id}`,
    copy: spanishInstructions ? SPANISH_COPY : ENGLISH_COPY,
    targetAnswerDirection: "es-en",
    prose: false,
    glossOk: usableSpanishGloss,
    tooClose: spanishTooClose,
    quiz: QUIZ_LEVELS.has(levelCode),
    translationDirection: "es-en",
    strict: false,
    matched: true,
  };
  // The unit's optional practice lessons (-extra, -more): fresh variants
  // of the same grammar, used before the required lessons' own items.
  const variants = lessons.filter((l) => l.optional && !l.unitReview);
  const review = buildUnitReview(
    profile,
    { number: unit.number, title: unit.title, lessons: material, variants },
    EN_UNIT_WRITING[levelCode][unit.id]
  );
  if (!review) return lessons;
  const exitAt = lessons.findIndex((l) => !l.optional && EN_EXIT_LESSON.test(l.slug));
  let at: number;
  if (exitAt !== -1) at = exitAt;
  else {
    let lastRequired = -1;
    lessons.forEach((l, i) => {
      if (!l.optional) lastRequired = i;
    });
    at = lastRequired + 1;
  }
  return [...lessons.slice(0, at), review, ...lessons.slice(at)];
}
