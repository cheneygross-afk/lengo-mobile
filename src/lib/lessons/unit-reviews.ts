// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-reviews.ts by scripts/sync-content.mjs -- edit it there, not here.
import type {
  DictationExercise,
  Exercise,
  Lesson,
  LessonExample,
  LessonSection,
  ListenChooseExercise,
  SpeakExercise,
  TranslateExercise,
  WriteExercise,
} from "./types";
import { UNIT_DEFS } from "./unit-defs";
import { pickUnitTestQuestions } from "./unitTest";
import { A1_UNIT_WRITING } from "./unit-writing-a1";
import { A2_UNIT_WRITING } from "./unit-writing-a2";
import { B1_UNIT_WRITING } from "./unit-writing-b1";
import { B2_UNIT_WRITING } from "./unit-writing-b2";
import { C1_UNIT_WRITING } from "./unit-writing-c1";
import { C2_UNIT_WRITING } from "./unit-writing-c2";

// Unit reviews: every A1-C2 unit (unit-defs.ts) ends with a required
// review lesson, added by buildLevel() in sequencing.ts:
//   - Listening: three "what does it mean?" clips and two dictations, made
//     from the unit's own example sentences (each clip is one sentence,
//     well under the voice route's 200-character limit);
//   - Speaking: two sentences to read aloud and compare with the model,
//     then two English prompts to answer aloud in Spanish (SpeakExercise
//     with `prompt`), the model answer hidden until they've recorded;
//   - Writing: one short task per unit, written by hand
//     (unit-writing-<level>.ts), with AI feedback when available and the
//     model answer as a self-check otherwise;
//   - A1-B2: a 6-question unit quiz drawn from the unit's lessons' final
//     reviews (pickUnitTestQuestions, seeded so it's the same for everyone);
//     C1/C2: three English-to-Spanish translations from the unit instead.
// Everything generated is picked with a PRNG seeded by the unit, so the
// lesson is stable between builds and identical on the website and in the
// app. Instructions are in English for A1/A2 and in Spanish from B1.
// The last unit's review comes right before the level test.
//
// The English for Spanish speakers course builds its reviews with the same
// machinery (buildUnitReview with an English-course ReviewProfile, see
// en-unit-reviews.ts); the Spanish course's profile is spanishProfile().

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

const WRITING: Record<Level, Record<string, WriteExercise>> = {
  A1: A1_UNIT_WRITING,
  A2: A2_UNIT_WRITING,
  B1: B1_UNIT_WRITING,
  B2: B2_UNIT_WRITING,
  C1: C1_UNIT_WRITING,
  C2: C2_UNIT_WRITING,
};

/** Questions in the A1-B2 unit quiz. */
export const UNIT_QUIZ_QUESTIONS = 6;
const QUIZ_LEVELS = new Set<Level>(["A1", "A2", "B1", "B2"]);

export const unitReviewSlug = (unitStart: string) => `${unitStart}-unit-review`;

// ---- Seeded randomness --------------------------------------------------

function seeded(seed: string): () => number {
  let h = 1779033703;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 3432918353) >>> 0;
  // mulberry32
  return () => {
    h = (h + 0x6d2b79f5) >>> 0;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(arr: readonly T[], random: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- Picking sentences -----------------------------------------------------

// Example sentences that work on their own as a clip: a whole sentence, no
// notation (slashes, arrows, brackets, blanks, ✗ marks), no digits (a
// dictation would have to guess how to spell them), not too long.
const NOTATION = /[/()[\]→←=_…*✗✓✔✘:;"“”«»|+]|\.\.\.|--/;
const SENTENCE_START = /^[¿¡]?[A-ZÁÉÍÓÚÑÜ]/;
const SENTENCE_END = /[.?!]$/;

const words = (t: string) => t.trim().split(/\s+/).filter(Boolean).length;

function usableEs(es: string, maxChars: number): boolean {
  const t = es.trim();
  return (
    t.length >= 8 &&
    t.length <= maxChars &&
    words(t) >= 3 &&
    !NOTATION.test(t) &&
    !/\d/.test(t) &&
    SENTENCE_START.test(t) &&
    SENTENCE_END.test(t)
  );
}

// Some translations are Spanish definitions (C1 vocabulary), not English.
const ENGLISH_WORD = /\b(the|an|i|you|he|she|it|we|they|is|are|was|were|to|of|and|in|on|my|your|this|that|be|have|has|do|does|will|would|can|not|for)\b/i;

function usableEn(en: string | undefined, es: string): en is string {
  if (!en) return false;
  const t = en.trim();
  return (
    t.length <= 110 &&
    words(t) >= 2 &&
    !/[/()[\]→=_…*✗✓:;"«»“”]|\.\.\.|--/.test(t) &&
    !/[áéíóúñ¿¡]/i.test(t) &&
    ENGLISH_WORD.test(t) &&
    t.toLowerCase() !== es.toLowerCase()
  );
}

/** Drops a trailing "(México)"-style note. */
const stripNote = (t: string) => t.replace(/\s*\([^()]*\)\s*$/, "").trim();

/** A target-language sentence (`es`, named as in LessonExample) with its
 * translation into the learner's language (`en`), when usable. */
export type Sentence = { es: string; en?: string; /** The lesson it came from. */ lesson?: string };

const ENGLISH_PROSE = /\b(the|and|is|are|you|of|with|this|that|it|which)\b/i;

/** Whole sentences from a paragraph of Spanish prose. */
function proseSentences(paragraph: string): LessonExample[] {
  if (ENGLISH_PROSE.test(paragraph)) return [];
  return (paragraph.match(/[^.!?]+[.!?]+/g) ?? []).map((t) => ({ es: t.trim() }));
}

/** The unit's usable sentences: its lessons' examples, then (shuffled
 * after them, as fallbacks) sentences from its exercises' answers and,
 * from B1 up, where the explanations are in Spanish, from the lessons'
 * explanations (untranslated, so only for reading aloud and dictation). */
function unitSentences(
  lessons: readonly Lesson[],
  random: () => number,
  profile: ReviewProfile,
  variants: readonly Lesson[] = []
): Sentence[] {
  const { prose: spanishProse, glossOk, targetAnswerDirection } = profile;
  const seen = new Set<string>();
  type Tagged = LessonExample & { lesson: string };
  const collect = (list: Tagged[]): Sentence[] => {
    const out: Sentence[] = [];
    for (const ex of list) {
      const es = stripNote(ex.es);
      const en = ex.en === undefined ? undefined : stripNote(ex.en);
      if (!usableEs(es, 140) || seen.has(es.toLowerCase())) continue;
      seen.add(es.toLowerCase());
      out.push({ es, en: glossOk(en, es) ? en : undefined, lesson: ex.lesson });
    }
    return out;
  };
  const examplesOf = (ls: readonly Lesson[]): Tagged[] =>
    ls.flatMap((l) => l.sections.flatMap((s) => (s.examples ?? []).map((ex) => ({ ...ex, lesson: l.slug }))));
  const fromExercises = lessons
    .flatMap((l) => [...l.sections.flatMap((s) => s.checkpoint ?? []), ...l.exercises].map((e) => ({ e, lesson: l.slug })))
    .flatMap(({ e, lesson }): Tagged[] => {
      if (e.type === "translate")
        return [e.direction === targetAnswerDirection ? { es: e.answer, en: e.source, lesson } : { es: e.source, en: e.answer, lesson }];
      if (e.type === "fill-blank" && e.en && e.sentence.split("___").length === 2) {
        return [{ es: e.sentence.replace("___", e.answer), en: e.en.replace(/[[\]]/g, ""), lesson }];
      }
      return [];
    });
  const prose = spanishProse
    ? lessons.flatMap((l) => l.sections.flatMap((s) => s.body.flatMap(proseSentences).map((ex) => ({ ...ex, lesson: l.slug }))))
    : [];
  // Sentences from the unit's optional practice lessons come first: same
  // grammar, but most learners haven't seen them yet.
  const fromVariants = variants.length ? shuffled(collect(examplesOf(variants)), random) : [];
  return [
    ...fromVariants,
    ...shuffled(collect(examplesOf(lessons)), random),
    ...shuffled(collect(fromExercises), random),
    ...shuffled(collect(prose), random),
  ];
}

const wordList = (t: string) => t.toLowerCase().match(/[a-z']+/g) ?? [];

/** How good a wrong option `o` is for `s`: its target-language sentence
 * shares words and length with `s` (so the learner has to listen for the
 * difference, not spot an unrelated topic), and from the same lesson
 * (the same grammar point) it scores higher. */
function similarity(s: Sentence, o: Sentence): number {
  const a = wordList(s.es);
  const b = wordList(o.es);
  const sb = new Set(b);
  const shared = new Set(a.filter((w) => sb.has(w))).size;
  const union = new Set([...a, ...b]).size || 1;
  const length = 1 - Math.abs(a.length - b.length) / Math.max(a.length, b.length, 1);
  return shared / union + 0.5 * length + (s.lesson && s.lesson === o.lesson ? 0.3 : 0);
}

const STOP: ReadonlySet<string> = new Set(
  "i you he she it we they me him her us them my your his its our their a an the is are was were be been am do does did to of and or in on at for with from this that these those there here not no very".split(" ")
);
const contentWords = (t: string, stop: ReadonlySet<string>, nonLetter: RegExp) =>
  new Set(t.toLowerCase().replace(nonLetter, " ").split(/\s+/).filter((w) => w && !stop.has(w)));

/** Too close in meaning to be a fair wrong option: half or more of the
 * shorter one's content words are shared. `stop` and `nonLetter` are the
 * stop words and non-letters of the translations' language (English by
 * default). */
export function tooClose(a: string, b: string, stop: ReadonlySet<string> = STOP, nonLetter: RegExp = /[^a-z' ]/g): boolean {
  const wa = contentWords(a, stop, nonLetter);
  const wb = contentWords(b, stop, nonLetter);
  if (!wa.size || !wb.size) return true;
  let shared = 0;
  for (const w of wa) if (wb.has(w)) shared++;
  return shared * 2 >= Math.min(wa.size, wb.size);
}

// ---- Instruction text (English for A1/A2, Spanish from B1) -------------------

export type Copy = {
  title: (n: number, unit: string) => string;
  summary: (unit: string, quiz: boolean) => string;
  listening: [heading: string, body: string];
  speaking: [heading: string, body: string];
  writing: [heading: string, body: string];
  meaningQ: string;
  meaningExpl: (s: Sentence) => string;
  dictExpl: (s: Sentence) => string;
  readExpl: (s: Sentence) => string;
  respondPrompt: (en: string) => string;
  respondExpl: (s: Sentence) => string;
};

/** A sentence for quoting inside a longer one: no final full stop. */
export const quoted = (t: string) => t.replace(/\.$/, "");

const EN_COPY: Copy = {
  title: (n, unit) => `Unit ${n} review: ${unit}`,
  summary: (unit, quiz) =>
    `Listen, speak and write with what you learned in "${unit}"${quiz ? ", then a short unit quiz" : ""}.`,
  listening: [
    "Listening",
    "Five sentences from this unit's lessons. Play each one as often as you like before you answer: first pick what it means, then type exactly what you hear (🐢 plays it slowly).",
  ],
  speaking: [
    "Speaking",
    "Read two sentences aloud, record yourself and compare with the model. Then two English prompts: say them in Spanish out loud before you check the answer. Your recordings stay on your device.",
  ],
  writing: [
    "Writing",
    "One short piece of writing that uses this unit's grammar and words. You'll get feedback when it's available; otherwise compare your text with the model answer and the checklist.",
  ],
  meaningQ: "What does it mean?",
  meaningExpl: (s) => `"${quoted(s.es)}" means "${quoted(s.en!)}".`,
  dictExpl: (s) => `You heard: "${quoted(s.es)}"${s.en ? ` ("${quoted(s.en)}")` : ""}.`,
  readExpl: (s) => `"${quoted(s.es)}"${s.en ? ` ("${quoted(s.en)}")` : ""}. Play the model again and copy its rhythm.`,
  respondPrompt: (en) => `Say it in Spanish: "${en}"`,
  respondExpl: (s) => `One way to say it: "${quoted(s.es)}". Another correct way counts too: check the meaning first, then the sound.`,
};

const ES_COPY: Copy = {
  title: (n, unit) => `Repaso de la unidad ${n}: ${unit}`,
  summary: (unit, quiz) =>
    `Escucha, habla y escribe con lo que has aprendido en «${unit}»${quiz ? ", y después un test rápido de la unidad" : ""}.`,
  listening: [
    "Comprensión auditiva",
    "Cinco frases de las lecciones de esta unidad. Escucha cada una todas las veces que quieras antes de contestar: primero elige qué significa y luego escribe exactamente lo que oyes (🐢 la reproduce más despacio).",
  ],
  speaking: [
    "Expresión oral",
    "Lee dos frases en voz alta, grábate y compara con el modelo. Después, dos frases en inglés: dilas en español en voz alta antes de ver la respuesta. Tus grabaciones no salen de tu dispositivo.",
  ],
  writing: [
    "Expresión escrita",
    "Un texto breve con la gramática y el vocabulario de esta unidad. Si la corrección automática está disponible, recibirás comentarios; si no, compara tu texto con el modelo y la lista de puntos.",
  ],
  meaningQ: "¿Qué significa?",
  meaningExpl: (s) => `«${quoted(s.es)}» significa "${quoted(s.en!)}".`,
  dictExpl: (s) => `Has oído: «${quoted(s.es)}»${s.en ? ` ("${quoted(s.en)}")` : ""}.`,
  readExpl: (s) => `«${quoted(s.es)}»${s.en ? ` ("${quoted(s.en)}")` : ""}. Escucha otra vez el modelo e imita su ritmo.`,
  respondPrompt: (en) => `Dilo en español: "${en}"`,
  respondExpl: (s) =>
    `Una forma de decirlo: «${quoted(s.es)}». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.`,
};

// ---- Building one review -----------------------------------------------------

type UnitInput = { level: Level; number: number; start: string; title: string; lessons: Lesson[] };

/** How one course builds its unit reviews (see spanishProfile and
 * en-unit-reviews.ts). */
export type ReviewProfile = {
  /** The review lesson's `level`. */
  level: Lesson["level"];
  slug: string;
  /** Seeds the PRNG, so the review is the same on every build. */
  seed: string;
  copy: Copy;
  /** The translate direction whose `answer` is in the target language. */
  targetAnswerDirection: TranslateExercise["direction"];
  /** Also take sentences from the explanations' target-language prose. */
  prose: boolean;
  /** Whether a translation is usable as a listening option / speaking cue. */
  glossOk: (gloss: string | undefined, target: string) => gloss is string;
  /** Whether two translations are too alike to be told apart. */
  tooClose: (a: string, b: string) => boolean;
  /** A unit quiz (true), or `translations` from the unit (false). */
  quiz: boolean;
  /** The direction of the translations used in place of a quiz. */
  translationDirection: TranslateExercise["direction"];
  /** Throw when the unit lacks material (Spanish course), or build what
   * it can (false; null when nothing at all). */
  strict: boolean;
  /** Harder, fresher items (English course): wrong listening options that
   * look like the right one (similar length and words, same lesson first)
   * instead of random ones, and material from the unit's optional
   * practice lessons (`variants`) before the required lessons the
   * learner has just done: their own listening items, with the options
   * their author wrote, and up to MAX_VARIANT_QUIZ quiz questions. */
  matched?: boolean;
  /** Whether a sentence can be dictated (default: any short one). */
  dictationOk?: (target: string) => boolean;
};

/** With `matched`: at most this many of the 3 meaning clips are authored
 * listening items from the optional lessons (the rest are made from the
 * unit's sentences), and at most this many quiz questions or translations
 * come from them (the rest from the required lessons, so the quiz still
 * spreads over the unit). */
const MAX_VARIANT_LISTENING = 2;
const MAX_VARIANT_QUIZ = 4;
const MAX_VARIANT_TRANSLATIONS = 2;

// Oral reductions taught as such ("cansao", "na", "pal", "pa'"): their
// spelling varies (na / na' / nada), so they are never dictated.
const ORAL_REDUCTION = new RegExp("\\p{L}'|(?<!\\p{L})(?:na|pal|pa|to|cansao|quedao|mojao|pasao|dormío)(?!\\p{L})", "iu");

function spanishProfile(level: Level, start: string): ReviewProfile {
  const copy = level === "A1" || level === "A2" ? EN_COPY : ES_COPY;
  return {
    level,
    slug: unitReviewSlug(start),
    seed: `${level}:${start}`,
    copy,
    targetAnswerDirection: "en-es",
    prose: copy === ES_COPY,
    glossOk: usableEn,
    tooClose: (a, b) => tooClose(a, b),
    quiz: QUIZ_LEVELS.has(level),
    translationDirection: "en-es",
    strict: true,
    dictationOk: (es) => !ORAL_REDUCTION.test(es),
  };
}

/**
 * One unit's review lesson: listening, speaking, an optional writing task
 * and the unit quiz (or translations), from the unit's own lessons.
 * Returns null only for a non-strict profile when the unit has nothing to
 * build from.
 */
export function buildUnitReview(
  profile: ReviewProfile,
  unit: { number: number; title: string; lessons: Lesson[]; variants?: Lesson[] },
  writing: WriteExercise | undefined
): Lesson | null {
  const { copy } = profile;
  const { number, title, lessons } = unit;
  const matched = !!profile.matched;
  const variants = matched ? (unit.variants ?? []).filter((l) => !l.unitReview) : [];
  const random = seeded(profile.seed);
  const sentences = unitSentences(lessons, random, profile, variants);
  const used = new Set<string>();
  const take = (n: number, ok: (s: Sentence) => boolean): Sentence[] => {
    const out: Sentence[] = [];
    for (const s of sentences) {
      if (out.length >= n) break;
      if (used.has(s.es) || !ok(s)) continue;
      used.add(s.es);
      out.push(s);
    }
    return out;
  };
  // Strict profiles throw; the others make do with fewer items.
  const short = (what: string) => {
    if (profile.strict) throw new Error(`unit review (${profile.seed}): not enough ${what} in the unit's examples`);
  };

  // Listening: meaning, then dictation.
  const withEn = sentences.filter((s) => s.en);
  // Authored listening items from the optional lessons, options and all.
  const authored: ListenChooseExercise[] = [];
  if (matched) {
    const pool = variants
      .flatMap((l) => [...l.sections.flatMap((s) => s.checkpoint ?? []), ...l.exercises])
      .filter((e): e is ListenChooseExercise => e.type === "listen-choose" && e.options.length >= 3 && e.audio.length <= 120);
    for (const e of shuffled(pool, random)) {
      if (authored.length >= MAX_VARIANT_LISTENING) break;
      if (used.has(e.audio)) continue;
      used.add(e.audio);
      authored.push(e);
    }
  }
  const meaning = take(3 - authored.length, (s) => !!s.en && s.es.length <= 120);
  if (authored.length + meaning.length < 3) short("translated sentences");
  const listen: ListenChooseExercise[] = [...authored];
  for (const s of meaning) {
    const distractors: string[] = [];
    // Matched: the most similar sentences first (ties in seeded order).
    const candidates = matched
      ? shuffled(withEn, random)
          .map((o) => ({ o, score: similarity(s, o) }))
          .sort((x, y) => y.score - x.score)
          .map(({ o }) => o)
      : shuffled(withEn, random);
    for (const o of candidates) {
      if (distractors.length >= 3) break;
      if (o.es === s.es || [s.en!, ...distractors].some((d) => profile.tooClose(d, o.en!))) continue;
      distractors.push(o.en!);
    }
    if (distractors.length < 3) {
      short("distinct translations");
      continue;
    }
    listen.push({
      type: "listen-choose",
      audio: s.es,
      question: copy.meaningQ,
      options: [s.en!, ...distractors],
      correctIndex: 0,
      explanation: copy.meaningExpl(s),
    });
  }
  const dictSentences = take(2, (s) => s.es.length <= 60 && (profile.dictationOk?.(s.es) ?? true));
  if (dictSentences.length < 2) short("short sentences for dictation");
  const dictations: DictationExercise[] = dictSentences.map((s) => ({
    type: "dictation",
    audio: s.es,
    explanation: copy.dictExpl(s),
  }));

  // Speaking: read aloud, then respond aloud to prompts in the learner's language.
  const respond = take(2, (s) => !!s.en && s.es.length <= 120);
  if (respond.length < 2) short("translated sentences to answer aloud");
  const read = take(2, (s) => s.es.length <= 120);
  if (read.length < 2) short("sentences to read aloud");
  const speaking: SpeakExercise[] = [
    ...read.map((s): SpeakExercise => ({ type: "speak", text: s.es, explanation: copy.readExpl(s) })),
    ...respond.map(
      (s): SpeakExercise => ({ type: "speak", text: s.es, prompt: copy.respondPrompt(s.en!), explanation: copy.respondExpl(s) })
    ),
  ];

  // The quiz, or translations from the unit (C1/C2).
  let final: Exercise[];
  const { quiz } = profile;
  const inListening = new Set<Exercise>(authored);
  if (quiz) {
    const fresh = variants.length
      ? pickUnitTestQuestions(
          variants.map((l) => ({ ...l, optional: false })),
          UNIT_QUIZ_QUESTIONS,
          random
        )
          .map((q) => q.exercise)
          .filter((e) => !inListening.has(e))
          .slice(0, MAX_VARIANT_QUIZ)
      : [];
    const rest = pickUnitTestQuestions(lessons, UNIT_QUIZ_QUESTIONS, random)
      .map((q) => q.exercise)
      .slice(0, UNIT_QUIZ_QUESTIONS - fresh.length);
    final = fresh.length ? shuffled([...fresh, ...rest], random) : rest;
  } else {
    const translationsOf = (ls: readonly Lesson[]) =>
      ls
        .flatMap((l) => [...l.sections.flatMap((s) => s.checkpoint ?? []), ...l.exercises])
        .filter((e): e is TranslateExercise => e.type === "translate" && e.direction === profile.translationDirection);
    const fresh = shuffled(translationsOf(variants), random).slice(0, MAX_VARIANT_TRANSLATIONS);
    const freshSources = new Set(fresh.map((e) => e.source));
    const rest = shuffled(translationsOf(lessons), random).filter((e) => !freshSources.has(e.source));
    final = [...fresh, ...rest].slice(0, 3);
  }

  const section = ([heading, body]: [string, string], checkpoint: Exercise[]): LessonSection => ({
    heading,
    body: [body],
    checkpoint,
  });
  const sections = [
    section(copy.listening, [...listen, ...dictations]),
    section(copy.speaking, speaking),
    ...(writing ? [section(copy.writing, [writing])] : []),
  ].filter((s) => s.checkpoint!.length > 0);
  if (sections.length === 0 && final.length === 0) return null;
  return {
    slug: profile.slug,
    level: profile.level,
    number: 0, // renumbered by the caller
    unitReview: true,
    title: copy.title(number, title),
    summary: copy.summary(title, quiz),
    duration: "15 min",
    sections,
    exercises: final,
  };
}

function buildReview({ level, number, start, title, lessons }: UnitInput, writing: WriteExercise): Lesson {
  return buildUnitReview(spanishProfile(level, start), { number, title, lessons }, writing)!;
}

/**
 * Inserts a review lesson at the end of each of the level's units: after
 * the unit's last required lesson, or, for the last unit, right before
 * the level test (`exitSlug`). `lessons` is the level in final course
 * order; numbers are left for the caller to redo.
 */
export function withUnitReviews(level: Level, lessons: Lesson[], exitSlug: string): Lesson[] {
  const defs = UNIT_DEFS[level.toLowerCase() as Lowercase<Level>];
  const writing = WRITING[level];
  const starts = new Set(defs.map((d) => d.start));
  for (const key of Object.keys(writing)) {
    if (!starts.has(key)) throw new Error(`unit reviews (${level}): writing task for unknown unit "${key}"`);
  }
  const required = lessons.filter((l) => !l.optional);
  const startIdx = defs.map((d) => {
    const i = required.findIndex((l) => l.slug === d.start);
    if (i === -1) throw new Error(`unit reviews (${level}): unit start "${d.start}" is not a required lesson`);
    return i;
  });
  const out = [...lessons];
  // Last unit first, so earlier insert positions don't move.
  for (let i = defs.length - 1; i >= 0; i--) {
    const d = defs[i];
    const unitLessons = required.slice(startIdx[i], i + 1 < defs.length ? startIdx[i + 1] : required.length);
    const task = writing[d.start];
    if (!task) throw new Error(`unit reviews (${level}): no writing task for unit "${d.start}"`);
    const review = buildReview(
      {
        level,
        number: i + 1,
        start: d.start,
        title: d.title,
        lessons: unitLessons.filter((l) => l.slug !== exitSlug),
      },
      task
    );
    const last = i === defs.length - 1;
    const anchor = last ? exitSlug : unitLessons[unitLessons.length - 1].slug;
    const at = out.findIndex((l) => l.slug === anchor);
    if (at === -1) throw new Error(`unit reviews (${level}): "${anchor}" is missing`);
    out.splice(last ? at : at + 1, 0, review);
  }
  return out;
}
