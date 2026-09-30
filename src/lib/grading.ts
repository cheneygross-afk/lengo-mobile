// Answer grading shared by every exercise screen: typed answers
// (fill-blank, translate), word order, option shuffling, and the score a
// lesson needs to count as complete.
//
// The website (lengo) and the mobile app (lengo-mobile) keep identical
// copies of this file at the same path -- change both together so web
// and app grade alike.
// Hermes (the app's JS engine) has no \p{L}, so letters are matched with
// explicit ranges below.
import type { DictationExercise, FillBlankExercise, TranslateExercise, WordOrderExercise } from "./lessons/types";
import { SPANISH_WORDS } from "./spanishWords";

export type GradeResult = { correct: boolean; note?: string };

// Which language the typed answer is in. "es" turns on the Spanish rules
// (accent/real-word checks, subject pronouns, -ra/-se); "en" turns on
// English contractions; "other" (Japanese) gets the plain rules only.
export type AnswerLanguage = "es" | "en" | "other";

/** Share of a lesson's questions that must be right the first time for the lesson to count as complete. */
export const LESSON_PASS_PERCENT = 70;

export function lessonPassed(correct: number, total: number): boolean {
  return total === 0 || correct * 100 >= total * LESSON_PASS_PERCENT;
}

// ---- Text cleanup ----------------------------------------------------

const WORD = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g;

/** Lowercase, straight apostrophes, no ¿?¡!.,;: or quotes, single spaces. Accents kept. */
export function cleanAnswer(s: string): string {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[¿?¡!.,;:"“”«»]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Accents and ñ/ü dropped -- "está" and "esta" both become "esta". */
export function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// ---- Known Spanish words ---------------------------------------------

// Words that differ only by an accent from another word and must always
// count as real words, whether or not the course happens to use both.
const ACCENT_PAIRS =
  "el él tu tú mi mí si sí se sé te té de dé mas más aun aún solo sólo que qué quien quién quienes quiénes " +
  "cual cuál cuales cuáles cuando cuándo cuanto cuánto cuanta cuánta cuantos cuántos cuantas cuántas " +
  "donde dónde adonde adónde como cómo este esté esta está estas estás esto ese esa hablo habló hable hablé";

let knownWords: Set<string> | null = null;

/** True if `word` (lowercase, accented as typed) is a Spanish word the course uses. */
export function isKnownSpanishWord(word: string): boolean {
  if (!knownWords) knownWords = new Set(`${SPANISH_WORDS} ${ACCENT_PAIRS}`.split(" "));
  return knownWords.has(word.normalize("NFC").toLowerCase());
}

// ---- Edit distance and typo tolerance --------------------------------

// Damerau-Levenshtein distance (optimal-string-alignment variant): an
// insertion, deletion, substitution, or swap of two neighbouring letters
// each count as one edit, so "camoin" for "camión" is one slip, not two.
export function editDistance(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
      }
    }
  }
  return dp[a.length][b.length];
}

// How many edits a word this long can have and still read as a slip.
// Short words get none: one letter off is usually a different word.
export function typoTolerance(len: number): number {
  if (len <= 3) return 0;
  if (len <= 7) return 1;
  return 2;
}

// ---- Spanish answer variants -----------------------------------------

type Person = "1s" | "2s" | "3s" | "1p" | "2p" | "3p";

const SUBJECT_PRONOUNS: Record<string, Person> = {
  yo: "1s",
  tú: "2s",
  vos: "2s",
  él: "3s",
  ella: "3s",
  usted: "3s",
  nosotros: "1p",
  nosotras: "1p",
  vosotros: "2p",
  vosotras: "2p",
  ellos: "3p",
  ellas: "3p",
  ustedes: "3p",
};

// Words that can sit between a subject pronoun and its verb.
const BEFORE_VERB = new Set(
  "no me te se nos os lo la le los las les ya también tampoco nunca siempre todavía casi solo sólo aún".split(" "),
);

// Sentence openers that aren't verbs, so no pronoun can be put in front.
const NOT_VERBS = new Set(
  ("el la los las un una unos unas mi mis tu tus su sus nuestro nuestra nuestros nuestras vuestro vuestra " +
    "este esta estos estas ese esa esos esas aquel aquella esto eso en de a al del con por para sin sobre " +
    "que qué cómo dónde cuándo cuánto cuánta quién quiénes cuál hay y o pero porque si muy más menos " +
    "aquí allí ahí hoy mañana ayer bueno buenos buenas hola gracias").split(" "),
);

// Preterites whose él/ella form ends in -o, not -ó.
const PRETERITE_3S_IN_O = new Set(
  "puso hizo tuvo dijo vino pudo quiso supo estuvo anduvo trajo produjo condujo tradujo hubo cupo deshizo propuso mantuvo obtuvo".split(
    " ",
  ),
);

// Which people a finite verb form could belong to, judged by its ending.
function personsOf(verb: string): Person[] {
  if (/mos$/.test(verb)) return ["1p"];
  if (/(áis|éis|ís)$/.test(verb)) return ["2p"];
  if (/n$/.test(verb)) return ["3p"];
  if (/ste$/.test(verb)) return ["2s"];
  if (/s$/.test(verb)) return verb === "es" ? ["3s"] : ["2s"];
  if (/ó$/.test(verb)) return ["3s"];
  if (/oy$/.test(verb)) return ["1s"];
  if (/í$/.test(verb)) return ["1s"];
  if (/á$/.test(verb)) return ["3s"];
  if (/o$/.test(verb)) return PRETERITE_3S_IN_O.has(verb) ? ["3s"] : ["1s"];
  if (/[aeéi]$/.test(verb)) return ["1s", "3s"];
  return [];
}

// Could `pronoun` be put in front of `answer` (which has none)?
function pronounFits(pronoun: string, answer: string): boolean {
  const person = SUBJECT_PRONOUNS[pronoun];
  const tokens = cleanAnswer(answer).split(" ");
  let i = 0;
  while (i < tokens.length - 1 && BEFORE_VERB.has(tokens[i])) i++;
  const verb = tokens[i];
  if (!verb || NOT_VERBS.has(verb) || SUBJECT_PRONOUNS[verb]) return false;
  return personsOf(verb).includes(person);
}

// Imperfect subjunctive: every -ra form has an equally correct -se form
// (hablara/hablase, hubiera/hubiese, fuéramos/fuésemos).
const RA_FORM = /^(.+(?:a|á|ie|ié|ye|yé|je|jé|ue|ué))r(a|as|amos|ais|an)$/i;
const SE_FORM = /^(.+(?:a|á|ie|ié|ye|yé|je|jé|ue|ué))s(e|es|emos|eis|en)$/i;
const RA_TO_SE: Record<string, string> = { a: "e", as: "es", amos: "emos", ais: "eis", an: "en" };
const SE_TO_RA: Record<string, string> = { e: "a", es: "as", emos: "amos", eis: "ais", en: "an" };
// Look-alikes that aren't subjunctives.
const NOT_RA = new Set("para paras cara caras clara claras rara raras vara varas".split(" "));
const NOT_SE = new Set("clase clases base bases fase fases frase frases pase pases case cases envase envases".split(" "));

function swapSubjunctive(text: string, toSe: boolean): string {
  return text.replace(WORD, (w) => {
    const lower = w.toLowerCase();
    if (toSe) {
      const m = NOT_RA.has(lower) ? null : lower.match(RA_FORM);
      return m ? `${m[1]}s${RA_TO_SE[m[2]]}` : w;
    }
    const m = NOT_SE.has(lower) ? null : lower.match(SE_FORM);
    return m ? `${m[1]}r${SE_TO_RA[m[2]]}` : w;
  });
}

// ---- English contractions --------------------------------------------

// Contractions typed without the apostrophe. Ones that are also words
// (its, were, well, ill, id, lets, wont... ) are left alone.
const BARE_CONTRACTIONS: Record<string, string> = {
  dont: "don't",
  doesnt: "doesn't",
  didnt: "didn't",
  cant: "can't",
  isnt: "isn't",
  arent: "aren't",
  wasnt: "wasn't",
  werent: "weren't",
  havent: "haven't",
  hasnt: "hasn't",
  hadnt: "hadn't",
  wouldnt: "wouldn't",
  couldnt: "couldn't",
  shouldnt: "shouldn't",
  im: "i'm",
  ive: "i've",
  youre: "you're",
  youve: "you've",
  youll: "you'll",
  theyre: "they're",
  theyve: "they've",
  theyll: "they'll",
  weve: "we've",
  thats: "that's",
  theres: "there's",
  whats: "what's",
  hes: "he's",
  shes: "she's",
};

const CONTRACTIONS: [RegExp, string][] = [
  [/\bcan ?not\b/g, "can't"],
  [/\bwill not\b/g, "won't"],
  [/\b(do|does|did|is|are|was|were|have|has|had|would|could|should|must|need) not\b/g, "$1n't"],
  [/\bi am\b/g, "i'm"],
  [/\b(you|we|they) are\b/g, "$1're"],
  [/\b(he|she|it|that|there|what|who|where|here) is\b/g, "$1's"],
  [/\b(i|you|we|they) have\b/g, "$1've"],
  [/\b(i|you|he|she|it|we|they|that|there) will\b/g, "$1'll"],
  [/\b(i|you|he|she|it|we|they) would\b/g, "$1'd"],
  [/\blet us\b/g, "let's"],
];

/** English with every contraction the grader knows written contracted, so "I would" and "I'd" compare equal. */
export function contractEnglish(cleaned: string): string {
  let s = cleaned
    .split(" ")
    .map((w) => BARE_CONTRACTIONS[w] ?? w)
    .join(" ");
  for (const [re, to] of CONTRACTIONS) s = s.replace(re, to);
  return s;
}

// ---- Free-text grading -----------------------------------------------

type Match = { rank: number; note?: string }; // 3 exact, 2 accent slip, 1 typo, 0 wrong

function compare(typedClean: string, candidateClean: string, display: string, lang: AnswerLanguage): Match {
  if (typedClean === candidateClean) return { rank: 3 };
  const typed = typedClean.split(" ");
  const cand = candidateClean.split(" ");
  const typo = { rank: 1, note: `Correct -- small typo, the answer is "${display}".` };
  if (typed.length !== cand.length) {
    // Only a missing or extra space ("porfavor").
    return typedClean.replace(/ /g, "") === candidateClean.replace(/ /g, "") ? typo : { rank: 0 };
  }
  let accentSlips = 0;
  let typoEdits = 0;
  for (let i = 0; i < typed.length; i++) {
    const t = typed[i];
    const c = cand[i];
    if (t === c) continue;
    const tl = stripAccents(t);
    const cl = stripAccents(c);
    // A real word is never a slip for another one: "esta" for "está",
    // "hablo" for "habló", "quiere" for "quiera", "pero" for "perro".
    if (lang === "es" && isKnownSpanishWord(t)) return { rank: 0 };
    if (tl === cl) {
      accentSlips++;
      continue;
    }
    // A slip has to leave the last two letters alone -- that's where
    // Spanish marks person, tense, gender and number.
    if (tl.length < 3 || cl.length < 3 || tl.slice(-2) !== cl.slice(-2)) return { rank: 0 };
    const d = editDistance(tl.slice(0, -2), cl.slice(0, -2));
    if (d > typoTolerance(cl.length)) return { rank: 0 };
    typoEdits += d;
  }
  if (typoEdits > 2) return { rank: 0 };
  if (typoEdits > 0) return typo;
  if (accentSlips > 0) return { rank: 2, note: `Correct -- just watch the accent mark: "${display}".` };
  return { rank: 3 };
}

export type GradeOptions = {
  lang: AnswerLanguage;
  // Accept a Spanish answer with a subject pronoun added or left out
  // ("Yo estoy cansado" for "Estoy cansado").
  pronouns?: boolean;
};

// Leading punctuation, first word, rest of the sentence.
const LEADING_WORD = /^([^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*)([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)\s*([\s\S]*)$/;

// Every spelling of `answer` that's just as correct.
function variantsOf(answer: string, typedClean: string, opts: GradeOptions): string[] {
  if (opts.lang !== "es") return [answer];
  const out = new Set<string>([answer, swapSubjunctive(answer, true), swapSubjunctive(answer, false)]);
  if (opts.pronouns) {
    const typedFirst = typedClean.split(" ")[0];
    for (const v of [...out]) {
      const m = v.match(LEADING_WORD);
      if (!m) continue;
      const [, lead, first, rest] = m;
      if (SUBJECT_PRONOUNS[first.toLowerCase()]) {
        // Pronoun left out: "Yo soy estudiante" -> "Soy estudiante".
        if (rest) out.add(`${lead}${rest.charAt(0).toUpperCase()}${rest.slice(1)}`);
      } else if (SUBJECT_PRONOUNS[typedFirst] && pronounFits(typedFirst, v)) {
        // Pronoun added: "Estoy cansado" -> "Yo estoy cansado".
        const pronoun = `${typedFirst.charAt(0).toUpperCase()}${typedFirst.slice(1)}`;
        out.add(`${lead}${pronoun} ${first.charAt(0).toLowerCase()}${first.slice(1)}${rest ? ` ${rest}` : ""}`);
      }
    }
  }
  return [...out];
}

/**
 * Grades a typed answer against the accepted answers. Right (ignoring
 * case, punctuation and spacing) is correct; right but for a missing or
 * wrong accent is correct with a note, unless the typed word is itself a
 * different Spanish word; a small slip away from the end of a word is
 * correct with a note, unless the typed word is a real word. Anything
 * else is wrong.
 */
export function gradeFreeText(value: string, answers: string[], opts: GradeOptions): GradeResult {
  const prep = (s: string) => (opts.lang === "en" ? contractEnglish(cleanAnswer(s)) : cleanAnswer(s));
  const typed = prep(value);
  if (!typed) return { correct: false };
  let best: Match = { rank: 0 };
  for (const answer of answers) {
    for (const variant of variantsOf(answer, cleanAnswer(value), opts)) {
      const m = compare(typed, prep(variant), variant, opts.lang);
      if (m.rank > best.rank) best = m;
      if (best.rank === 3) return { correct: true };
    }
  }
  return best.rank > 0 ? { correct: true, note: best.note } : { correct: false };
}

/** "es-ES" -> "es", anything else (Japanese) -> "other". */
export function answerLanguageFor(speechLang: string): AnswerLanguage {
  return speechLang.startsWith("es") ? "es" : "other";
}

// Splits a fill-blank sentence on its blank (a run of 3+ underscores).
export function splitOnBlank(sentence: string): [string, string] {
  const match = sentence.match(/_{3,}/);
  if (!match || match.index === undefined) return [sentence, ""];
  return [sentence.slice(0, match.index), sentence.slice(match.index + match[0].length)];
}

export function gradeFillBlank(value: string, exercise: FillBlankExercise, speechLang: string): GradeResult {
  const [before] = splitOnBlank(exercise.sentence);
  // A pronoun can only be added when the blank opens the sentence --
  // otherwise the subject is already written out in front of it.
  const blankOpensSentence = !before.match(WORD);
  return gradeFreeText(value, [exercise.answer, ...(exercise.altAnswers ?? [])], {
    lang: answerLanguageFor(speechLang),
    pronouns: blankOpensSentence,
  });
}

export function gradeTranslate(value: string, exercise: TranslateExercise, speechLang: string): GradeResult {
  const toEnglish = exercise.direction === "es-en";
  return gradeFreeText(value, [exercise.answer, ...(exercise.altAnswers ?? [])], {
    lang: toEnglish ? "en" : answerLanguageFor(speechLang),
    pronouns: !toEnglish,
  });
}

/** The text a dictation expects: its `answer`, or the spoken `audio` itself. */
export function dictationAnswer(exercise: DictationExercise): string {
  return exercise.answer ?? exercise.audio;
}

// Dictation is graded like any typed Spanish answer, but a subject pronoun
// can't be added or dropped: the learner writes exactly what they heard.
export function gradeDictation(value: string, exercise: DictationExercise, speechLang: string): GradeResult {
  return gradeFreeText(value, [dictationAnswer(exercise), ...(exercise.altAnswers ?? [])], {
    lang: answerLanguageFor(speechLang),
  });
}

export function isWordOrderCorrect(built: string[], exercise: WordOrderExercise): boolean {
  const typed = cleanAnswer(built.join(" "));
  return [exercise.words, ...(exercise.altOrders ?? [])].some((order) => cleanAnswer(order.join(" ")) === typed);
}

// ---- Shuffling -------------------------------------------------------

// Deterministic shuffle seeded by the content itself, so server and
// client render the same order and React never hits a hydration mismatch.
export function seededShuffle<T>(arr: T[], seed: string): T[] {
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

// FNV-1a hash of the seed feeding a mulberry32 generator: unlike the
// linear generator above, its low bits are well mixed, so every position
// is about equally likely even for two- and three-option questions.
function randomFrom(seed: string): () => number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return () => {
    h = (h + 0x6d2b79f5) >>> 0;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * The order to show a question's options in, as indexes into `options`.
 * Grading keeps using the authored indexes (correctIndex/correctIndexes),
 * only the display order changes. Seeded by the question and its options
 * -- not the question alone, since many questions share a prompt like
 * "Choose the right form" and would otherwise all shuffle the same way.
 */
export function optionOrder(question: string, options: string[]): number[] {
  const next = randomFrom(`${question}\u0001${options.join("\u0001")}`);
  const order = options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}
