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
import type { Exercise, Lesson, LessonSection } from "./lessons/types";
import { isKnownSpanishWord } from "./grading";
// The app bundles the word list (grading.ts), so it is always loaded;
// the website fetches it (spanishKnownWords.ts). The only line that differs.
const knownSpanishWords = () => true;

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

/** A word whose shape only a vosotros verb form has. `commands: false`
 * leaves out the -d / -os commands, whose shape English past tenses
 * share (placed, moved), for text that may be English. */
function isClearVosotrosWord(w: string, commands = true): boolean {
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
  return commands && isVosotrosCommand(w);
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
    case "listen-choose":
    case "write":
      return [];
    case "dictation":
      return [ex.answer ?? ex.audio, ...(ex.altAnswers ?? [])];
    case "speak":
      return [ex.text, ...(ex.altAnswers ?? [])];
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
    case "listen-choose":
      return [ex.question, ex.audio];
    case "dictation":
      return [ex.audio];
    case "speak":
      return [ex.text, ex.tip];
    case "write":
      return [ex.prompt, ...ex.rubric];
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

// ---- Latin America: no vosotros at all ------------------------------
// A learner who picked Latin America never meets vosotros: not in the
// teaching cards, the examples, the tables, the questions or the
// feedback. Lists lose their vosotros item ("soy, eres, es, somos, sois,
// son" reads "soy, eres, es, somos, son"), a sentence that is still about
// vosotros after that is left out, and a question that uses a vosotros
// form anywhere is skipped (or loses just that wrong option).

function isVosWord(w: string): boolean {
  return /^(vosotr[oa]s|vuestr[oa]?s?-?)$/.test(w) || isClearVosotrosWord(w, false);
}

// Endings written on their own in a list: -áis, -éis, -ís, -asteis...
const VOS_ENDING = /^[-–‑](áis|éis|ís|ais|eis|asteis|isteis|steis|abais|íais|aréis|eréis|iréis|ríais|aríais|eríais|iríais|ad|ed|id|aos|eos|íos|ásteis)$/;

/** True if `text` mentions vosotros, vuestro or uses a vosotros form.
 * `spanish`: the text is a Spanish answer or sentence, so the -d / -os
 * commands (hablad, sentaos) count too. A lone -ís ending doesn't count,
 * because the voseo lessons use it (vivís, querís). */
export function touchesVosotros(text: string | undefined | null, spanish = false): boolean {
  if (!text) return false;
  if (/vosotr[oa]s|vuestr/i.test(text)) return true;
  if ((text.match(/[-–‑][a-záéíóú]+/g) ?? []).some((e) => VOS_ENDING.test(e) && !/[-–‑](ís|ad|ed|id|aos|eos|íos)$/.test(e))) return true;
  return wordsOf(text).some((w) => isClearVosotrosWord(w, spanish));
}

/** One list item ("sois", "vosotros os", "-áis", "vosotros (sois)"). */
function isVosItem(piece: string, about: boolean): boolean {
  const core = piece
    .replace(/[*"“”«»‘’'¡!¿?.:;]/g, " ")
    .replace(/[()]/g, " ")
    .trim();
  if (!core) return false;
  const tokens = core.split(/\s+/);
  return tokens.every((t) => {
    const w = t.toLowerCase().normalize("NFC");
    return VOS_ENDING.test(t) || isVosWord(w) || (about && /^[a-záéíóúüñ]+$/.test(w) && isContextVosotrosWord(w));
  });
}

function dropListItems(text: string, about: boolean): string {
  // "nosotros and vosotros (-éis / -ís)" -> "nosotros"
  const out = text.replace(
    /\s*,?\s+(?:and|or|y|o|e|ni|&)\s+(?:vosotr[oa]s|vuestr[oa]s?)(?:\s*\/\s*vosotr[oa]s)?(?:\s*\([^)]*\))?/gi,
    "",
  );
  const parts = out.split(/(\s*,\s*|\s*\/\s*|\s+·\s+|\s+\|\s+)/);
  if (parts.length < 3) return out;
  let result = "";
  let any = false;
  let tail = "";
  for (let i = 0; i < parts.length; i += 2) {
    const piece = parts[i];
    if (isVosItem(piece, about)) {
      tail = piece.match(/[.;:!?)]+\s*$/)?.[0] ?? "";
      continue;
    }
    result += (any ? parts[i - 1] : "") + piece;
    any = true;
    tail = "";
  }
  if (tail && !/[.;:!?)]\s*$/.test(result)) result += tail;
  return result;
}

/** `text` without vosotros: list items dropped, then any sentence that
 * still mentions it left out. Empty when nothing is left. */
export function scrubVosotros(text: string): string {
  if (!touchesVosotros(text)) return text;
  const listed = dropListItems(text, /vosotr[oa]s/i.test(text));
  if (!touchesVosotros(listed)) return tidy(listed);
  const sentences = listed.match(/[^.!?]+(?:[.!?]+["”»)]*|$)\s*/g) ?? [listed];
  return tidy(sentences.filter((s) => !touchesVosotros(s)).join(""));
}

// A heading or line that lost its last item: "Trap 2: Ustedes vs." -> "Trap 2: Ustedes".
function tidy(text: string): string {
  return text
    .trim()
    .replace(/\s+(?:vs\.?|or|and|y|o|e|ni|&)$/i, "")
    .replace(/[,:;/]$/, "")
    .trim();
}

/** A title or label without vosotros. Never empty: "Unit 27 · Vosotros
 * commands" reads "Unit 27 · Commands". */
export function scrubTitle(title: string): string {
  if (!touchesVosotros(title)) return title;
  const t = scrubVosotros(title);
  if (t) return t;
  return title
    .replace(/\b(?:de\s+)?vosotr[oa]s\s+([a-záéíóúñ])/i, (_, c: string) => c.toUpperCase())
    .replace(/\s+(?:de|for)\s+vosotr[oa]s\b/i, "")
    .replace(/\s*(?:&|and|y)\s+vosotr[oa]s\b[^,:·]*/i, "");
}

function scrubOptional(text: string | undefined): string | undefined {
  if (text === undefined) return undefined;
  const t = scrubVosotros(text);
  return t ? t : undefined;
}

/** Options without the vosotros ones, for a question whose right answer
 * doesn't need vosotros. Returns null when the question can't stay. */
function pruneOptions(options: string[], correct: number[]): { options: string[]; map: number[] } | null {
  const map: number[] = [];
  const kept: string[] = [];
  options.forEach((o, i) => {
    if (touchesVosotros(o)) {
      if (correct.includes(i)) map.push(-2);
      else map.push(-1);
    } else {
      map.push(kept.length);
      kept.push(o);
    }
  });
  if (map.includes(-2) || kept.length < 2) return null;
  return { options: kept, map };
}

/** A plain "The answer: ..." line, for when an explanation was all
 * about vosotros. */
function answerLine(ex: Exercise): string {
  const spanishInstructions = /[¿¡]|ñ|ción\b/.test(JSON.stringify(ex).slice(0, 400)) && !/[A-Za-z]+ the /.test(ex.explanation ?? "");
  const label = spanishInstructions ? "Respuesta" : "The answer";
  switch (ex.type) {
    case "multiple-choice":
    case "listen-choose":
      return `${label}: ${ex.options[ex.correctIndex]}`;
    case "multi-select":
      return `${label}: ${ex.correctIndexes.map((i) => ex.options[i]).join(" · ")}`;
    case "fill-blank":
      return `${label}: ${ex.sentence.replace("___", ex.answer)}`;
    case "translate":
      return `${label}: ${ex.answer}`;
    case "word-order":
      return `${label}: ${ex.words.join(" ")}`;
    case "dictation":
      return `${label}: ${ex.answer ?? ex.audio}`;
    case "speak":
      return `${label}: ${ex.text}`;
    case "write":
      return `${label}: ${ex.modelAnswer}`;
    case "matching":
      return "";
  }
}

/** The exercise as a Latin America learner gets it, or null to skip it. */
export function exerciseForLatam(ex: Exercise): Exercise | null {
  const t = touchesVosotros;
  const explanation = scrubVosotros(ex.explanation ?? "") || answerLine(ex);
  const base = { ...ex, explanation } as Exercise;
  switch (ex.type) {
    case "multiple-choice":
    case "listen-choose": {
      if (t(ex.question) || (ex.type === "listen-choose" && t(ex.audio, true))) return null;
      const pruned = pruneOptions(ex.options, [ex.correctIndex]);
      if (!pruned) return null;
      const out = { ...base, options: pruned.options, correctIndex: pruned.map[ex.correctIndex] } as Exercise;
      if (ex.type === "multiple-choice" && ex.optionNotes) {
        (out as typeof ex).optionNotes = ex.optionNotes.filter((_, i) => pruned.map[i] >= 0).map((n) => scrubVosotros(n));
      }
      return out;
    }
    case "multi-select": {
      if (t(ex.question)) return null;
      const pruned = pruneOptions(ex.options, ex.correctIndexes);
      if (!pruned) return null;
      return { ...base, options: pruned.options, correctIndexes: ex.correctIndexes.map((i) => pruned.map[i]) } as Exercise;
    }
    case "fill-blank": {
      if (t(ex.prompt) || t(ex.sentence, true) || t(ex.answer, true) || t(ex.hint) || t(ex.en)) return null;
      return { ...base, altAnswers: ex.altAnswers?.filter((a) => !t(a, true)) } as Exercise;
    }
    case "translate": {
      if (t(ex.prompt) || t(ex.source, ex.direction === "es-en") || t(ex.answer, ex.direction === "en-es")) return null;
      return { ...base, altAnswers: ex.altAnswers?.filter((a) => !t(a, ex.direction === "en-es")) } as Exercise;
    }
    case "word-order": {
      if (t(ex.prompt) || t(ex.words.join(" "), true) || t(ex.translation)) return null;
      return { ...base, altOrders: ex.altOrders?.filter((o) => !t(o.join(" "), true)) } as Exercise;
    }
    case "matching": {
      if (t(ex.instructions)) return null;
      const pairs = ex.pairs.filter((p) => !t(p.left) && !t(p.right));
      if (pairs.length < Math.min(3, ex.pairs.length)) return null;
      return { ...base, pairs } as Exercise;
    }
    case "dictation": {
      if (t(ex.audio, true) || t(ex.answer, true)) return null;
      return { ...base, altAnswers: ex.altAnswers?.filter((a) => !t(a, true)) } as Exercise;
    }
    case "speak": {
      if (t(ex.text, true) || t(ex.prompt)) return null;
      return { ...base, altAnswers: ex.altAnswers?.filter((a) => !t(a, true)), tip: scrubOptional(ex.tip) } as Exercise;
    }
    case "write": {
      if (t(ex.prompt) || t(ex.modelAnswer)) return null;
      return { ...base, rubric: ex.rubric.map(scrubVosotros).filter(Boolean) } as Exercise;
    }
  }
}

function sectionForLatam(s: LessonSection, keepQuestions = false): LessonSection | null {
  const heading = scrubVosotros(s.heading);
  if (!heading) return null;
  const body = s.body.map(scrubVosotros).filter(Boolean);
  const examples = s.examples
    ?.filter((e) => !touchesVosotros(e.es, true))
    .map((e) => (e.en && touchesVosotros(e.en) ? { ...e, en: scrubOptional(e.en) } : e));
  const tables = s.tables
    ?.map((tb) => {
      const drop = tb.head.map((h) => touchesVosotros(h));
      const keepCol = (row: string[]) => row.filter((_, i) => !drop[i]);
      const rows = tb.rows.filter((r) => !r.some((c) => touchesVosotros(c.replace(/^\*/, "")))).map(keepCol);
      return { ...tb, head: keepCol(tb.head), rows, caption: scrubOptional(tb.caption), note: scrubOptional(tb.note) };
    })
    .filter((tb) => tb.rows.length > 0 && tb.head.length > 0);
  const build = s.build?.some((b) => touchesVosotros(b.text) || touchesVosotros(b.note)) ? undefined : s.build;
  const checkpoint = keepQuestions ? s.checkpoint : s.checkpoint?.map(exerciseForLatam).filter((e): e is Exercise => e !== null);
  if (body.length === 0 && !examples?.length && !tables?.length && !checkpoint?.length) return null;
  return { ...s, heading, body, examples, tables, build, reteach: scrubOptional(s.reteach), checkpoint };
}

function countQuestions(lesson: Lesson): number {
  return lesson.exercises.length + lesson.sections.reduce((n, s) => n + (s.checkpoint?.length ?? 0), 0);
}

const latamCache = new WeakMap<Lesson, Lesson | null>();

/** The lesson with every trace of vosotros taken out, or null when the
 * lesson is about vosotros (too little would be left): a Latin America
 * learner doesn't see that lesson at all. */
export function lessonForLatam(lesson: Lesson): Lesson | null {
  if (latamCache.has(lesson)) return latamCache.get(lesson)!;
  const sections = lesson.sections.map((s) => sectionForLatam(s)).filter((s): s is LessonSection => s !== null);
  const exercises = lesson.exercises.map(exerciseForLatam).filter((e): e is Exercise => e !== null);
  const out: Lesson = {
    ...lesson,
    title: scrubVosotros(lesson.title) || lesson.title,
    summary: scrubVosotros(lesson.summary),
    goal: scrubOptional(lesson.goal),
    sections,
    exercises,
  };
  const before = countQuestions(lesson);
  const after = countQuestions(out);
  const result = after < before && (after < 3 || after * 2 < before) ? null : out;
  // The -d commands are only recognised once the word list has loaded.
  if (knownSpanishWords()) latamCache.set(lesson, result);
  return result;
}

/** Only the teaching side of lessonForLatam: sections, examples and
 * tables without vosotros, but every question the same object as before
 * (the app numbers questions by object, and maps each one through
 * exerciseForLatam as it asks it). */
export function teachingForLatam(lesson: Lesson): Lesson {
  return {
    ...lesson,
    title: scrubTitle(lesson.title),
    summary: scrubVosotros(lesson.summary),
    goal: scrubOptional(lesson.goal),
    sections: lesson.sections.map((s) => sectionForLatam(s, true)).filter((s): s is LessonSection => s !== null),
  };
}

/** True when a Latin America learner doesn't get this lesson at all. */
export function isVosotrosOnlyLesson(lesson: Lesson): boolean {
  if (/^(JA|ZH|EN|FR|DE|PT|IT|KO)-/.test(lesson.level)) return false;
  return lessonForLatam(lesson) === null;
}

/** The lesson as a learner of `variety` practises it: for Latin America,
 * without any vosotros (see lessonForLatam). A vosotros-only lesson comes
 * back as it is; callers skip it with isVosotrosOnlyLesson(). */
export function lessonForVariety(lesson: Lesson, variety: SpanishVarietyValue): Lesson {
  // Only the Spanish course has vosotros; the Japanese, Chinese and English
  // courses are left as they are.
  if (variety !== "latam" || /^(JA|ZH|EN)-/.test(lesson.level)) return lesson;
  return lessonForLatam(lesson) ?? lesson;
}

/** The note shown at the top of a vosotros-focused lesson for a Latin
 * America learner, in the lesson's instruction language (English for
 * A1/A2, Spanish from B1). */
export function vosotrosNote(level: string): string {
  return level === "A1" || level === "A2"
    ? "Latin America uses ustedes for “you all”. Learn to recognise these vosotros forms; you won't be asked to produce them."
    : "En Latinoamérica se usa ustedes para «vosotros». Aprende a reconocer estas formas; no tendrás que producirlas.";
}
