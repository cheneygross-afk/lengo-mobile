// Vosotros handling for learners who picked Latin American Spanish (see
// spanishVariety.ts). Latin America says "ustedes" for every "you all",
// so for them vosotros forms are recognition-only: they still read and
// hear them in the teaching sections, but the lesson runners and review
// drills skip exercises that ask them to *produce* one -- a typed answer,
// a word order, or a correct option that is a vosotros form.
//
// The website (lengo) and the mobile app (lengo-mobile) keep identical
// copies of this file at the same path -- change both together.
//
// The detector is deliberately conservative: a word only counts when its
// shape can't be anything else (habláis, comisteis, os, vuestro...), and
// the shapes that clash with ordinary words (hablad vs. ciudad, vivís vs.
// país, sentaos) only count when the exercise itself talks about
// vosotros. scripts/vosotros-report.ts prints what it flags per level.
// Hermes has no \p{L}, so letters are matched with explicit ranges.
import type { Exercise, Lesson } from "./lessons/types";
import { isKnownSpanishWord } from "./grading";

export type SpanishVarietyValue = "spain" | "latam";

const WORD = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g;

function wordsOf(text: string): string[] {
  // Drop gender/number endings written after a slash ("tanto/a/os/as",
  // "vuestro/a"), so the "os" there isn't read as the pronoun.
  const cleaned = text.normalize("NFC").toLowerCase().replace(/\/(os|as|a|o)\b/g, " ");
  return cleaned.match(WORD) ?? [];
}

const PRONOUNS = new Set([
  "vosotros",
  "vosotras",
  "os",
  "vuestro",
  "vuestra",
  "vuestros",
  "vuestras",
]);

// Unaccented one-syllable vosotros verbs (ser, ir, dar, ver) and the
// imperative of ir / irse.
const SHORT_FORMS = new Set(["sois", "vais", "dais", "veis", "id", "idos"]);

// Words that end like a vosotros form but aren't one.
const NOT_VOSOTROS = new Set([
  "seis",
  "dieciséis",
  "veintiséis",
  "sed",
  "correos",
]);

const ENCLITICS = /(me|te|le|les|lo|la|los|las|nos)+$/;

/** An affirmative vosotros command: hablad, poned, salid, sentaos,
 * vestíos, contádmela. Only counted when taking off the -d / -os and
 * adding -r gives a verb the course uses (hablar, poner, sentar,
 * vestir), which rules out ciudad, verdad, pared, museos and the like. */
function isVosotrosCommand(w: string): boolean {
  let stem: string | null = null;
  const withD = w.match(/^(.+[aeiáéí])d$/) ?? w.replace(ENCLITICS, "").match(/^(.+[áéí])d$/);
  if (withD) stem = withD[1];
  else {
    const reflexive = w.match(/^(.+[aeí])os$/);
    if (reflexive) stem = reflexive[1];
  }
  if (!stem || stem.length < 3) return false;
  return isKnownSpanishWord(stripStemAccent(stem) + "r");
}

function stripStemAccent(stem: string): string {
  return stem.replace(/á$/, "a").replace(/é$/, "e").replace(/í$/, "i");
}

/** A word whose shape only a vosotros verb form has. */
function isClearVosotrosWord(w: string): boolean {
  if (NOT_VOSOTROS.has(w)) return false;
  if (PRONOUNS.has(w) || SHORT_FORMS.has(w)) return true;
  // Present / subjunctive / future: habláis, coméis, hablaréis, estéis.
  if (/[áé]is$/.test(w) && w.length > 4) return true;
  // Preterite: hablasteis, comisteis, fuisteis, estuvisteis.
  if (/steis$/.test(w)) return true;
  // Imperfect / conditional: hablabais, ibais, comíais, hablaríais.
  if (/(bais|íais)$/.test(w)) return true;
  // Imperfect subjunctive: hablarais, comierais, fuerais, hablaseis.
  if (/(arais|erais|aseis|eseis)$/.test(w)) return true;
  return isVosotrosCommand(w);
}

// Endings that are vosotros forms often enough to count only when the
// exercise is explicitly about vosotros: -ir present (vivís), and the
// affirmative imperative (hablad, comed, vivid, sentaos, poneos, vestíos,
// idos).
const CONTEXT_ENDINGS = /(ís|ad|ed|id|aos|eos|íos|idos)$/;
const CONTEXT_EXCEPTIONS = new Set([
  "país",
  "maíz",
  "raíz",
  "parís",
  "luís",
  "usted",
  "red",
  "pared",
  "sed",
  "césped",
  "huésped",
  "madrid",
  "david",
  "salud",
  "ríos",
  "tíos",
  "fríos",
  "líos",
  "míos",
  "píos",
  "dios",
  "adiós",
  "nosotros",
  "todos",
  "ellos",
  "ellas",
  "unos",
  "caos",
]);

function isContextVosotrosWord(w: string): boolean {
  if (isClearVosotrosWord(w)) return true;
  if (w.length < 3 || CONTEXT_EXCEPTIONS.has(w)) return false;
  // -dad/-tad nouns (ciudad, verdad, mitad, libertad).
  if (/[dt]ad$/.test(w)) return false;
  return CONTEXT_ENDINGS.test(w);
}

/** True if `text` contains a vosotros form. With `aboutVosotros`, the
 * looser endings (vivís, hablad, sentaos) count too. */
export function hasVosotrosForm(text: string, aboutVosotros = false): boolean {
  return wordsOf(text).some((w) => (aboutVosotros ? isContextVosotrosWord(w) : isClearVosotrosWord(w)));
}

function mentionsVosotros(...texts: (string | undefined)[]): boolean {
  return texts.some((t) => !!t && /vosotr[oa]s|vuestr[oa]s?/i.test(t));
}

// Picking the word "vosotros" from a list ("Which pronoun goes with
// sois?", "La forma de vosotros") names the form rather than producing
// it, so in an option the bare pronoun doesn't count.
function optionText(option: string): string {
  return option.replace(/\bvosotr[oa]s\b/gi, " ");
}

/** The answers an exercise asks the learner to produce: every way of
 * getting it right. The exercise needs vosotros only when all of them
 * contain a vosotros form. Empty for exercises that only test
 * recognition (Spanish-to-English translation, matching). */
function requiredAnswers(ex: Exercise): string[] {
  switch (ex.type) {
    case "fill-blank":
      return [ex.answer, ...(ex.altAnswers ?? [])];
    case "translate":
      return ex.direction === "en-es" ? [ex.answer, ...(ex.altAnswers ?? [])] : [];
    case "word-order":
      return [ex.words.join(" ")];
    case "multiple-choice":
      return [optionText(ex.options[ex.correctIndex] ?? "")];
    case "multi-select":
      // Every correct option has to be picked, so one vosotros option is enough.
      return ex.correctIndexes.some((i) => hasVosotrosForm(optionText(ex.options[i] ?? "")))
        ? [ex.correctIndexes.map((i) => optionText(ex.options[i] ?? "")).join(" ")]
        : [];
    case "matching":
      return [];
  }
}

function exerciseContext(ex: Exercise): (string | undefined)[] {
  switch (ex.type) {
    case "fill-blank":
      return [ex.prompt, ex.sentence, ex.hint, ex.en];
    case "translate":
      return [ex.prompt, ex.source];
    case "word-order":
      return [ex.prompt, ex.translation];
    case "multiple-choice":
    case "multi-select":
      return [ex.question];
    case "matching":
      return [ex.instructions];
  }
}

/** True if the exercise can only be answered with a vosotros form. */
export function requiresVosotros(ex: Exercise): boolean {
  const answers = requiredAnswers(ex);
  if (answers.length === 0) return false;
  const about = mentionsVosotros(...exerciseContext(ex), ex.explanation);
  return answers.every((a) => hasVosotrosForm(a, about));
}

/** Whether a lesson is mainly about vosotros, so a Latin America learner
 * gets a note at the top saying these forms are for recognition. */
export function isVosotrosFocused(lesson: Lesson): boolean {
  if (/vosotros/i.test(lesson.title)) return true;
  if (lesson.sections.some((s) => /^vosotros\b/i.test(s.heading.trim()))) return true;
  const all = [...lesson.sections.flatMap((s) => s.checkpoint ?? []), ...lesson.exercises];
  if (all.length === 0) return false;
  return all.filter(requiresVosotros).length * 2 >= all.length;
}

/** The lesson as a learner of `variety` practises it: for Latin America,
 * without the exercises that require a vosotros form. The teaching
 * sections (body and examples) are untouched. */
export function lessonForVariety(lesson: Lesson, variety: SpanishVarietyValue): Lesson {
  if (variety !== "latam" || lesson.level.startsWith("JA")) return lesson;
  let changed = false;
  const keep = (list: Exercise[]) => {
    const kept = list.filter((ex) => !requiresVosotros(ex));
    if (kept.length !== list.length) changed = true;
    return kept;
  };
  const sections = lesson.sections.map((s) => (s.checkpoint ? { ...s, checkpoint: keep(s.checkpoint) } : s));
  const exercises = keep(lesson.exercises);
  return changed ? { ...lesson, sections, exercises } : lesson;
}

/** The note shown at the top of a vosotros-focused lesson for a Latin
 * America learner, in the lesson's instruction language (English for
 * A1/A2, Spanish from B1). */
export function vosotrosNote(level: string): string {
  return level === "A1" || level === "A2"
    ? "Latin America uses ustedes for “you all”. Learn to recognise these vosotros forms; you won't be asked to produce them."
    : "En Latinoamérica se usa ustedes para «vosotros». Aprende a reconocer estas formas; no tendrás que producirlas.";
}
