// Authoring helpers for the Chinese track's lesson files.
//
// Everything here produces plain Lesson / Exercise objects (../types.ts),
// so the content is ordinary data: the app renders it with the same
// LessonRunner as Spanish and Japanese, and scripts/export-zh-curriculum
// can dump it to JSON for any other project. See README.md.
//
// Conventions (also in README.md):
// - Chinese is written in simplified characters with tone-marked pinyin.
// - Pinyin shows each syllable's dictionary tone, except 不 and 一, which
//   are written with the tone actually spoken (bú shì, yí ge). Third-tone
//   sandhi (nǐ hǎo is said ní hǎo) is taught, not written.
// - In running English text a Chinese word appears as 你好 (nǐ hǎo).
// - Examples: `es` holds the characters (the field is named for the
//   target language of the original Spanish course), `en` holds
//   "pinyin -- meaning".

import type {
  Exercise,
  FillBlankExercise,
  Lesson,
  LessonExample,
  LessonSection,
  ListenChooseExercise,
  MatchingExercise,
  MultiSelectExercise,
  MultipleChoiceExercise,
  SpeakExercise,
  TranslateExercise,
  WordOrderExercise,
} from "../types";
import type { LayerSpec, LevelSpec } from "../../curriculum/spec";

export type ZhLevel = "ZH-Pinyin" | "ZH-A1" | "ZH-A2" | "ZH-B1" | "ZH-B2" | "ZH-C1" | "ZH-C2";

/** Inline form for English text: zh("你好", "nǐ hǎo") -> "你好 (nǐ hǎo)". */
export function zh(hanzi: string, pinyin: string): string {
  return `${hanzi} (${pinyin})`;
}

/** A section example: characters, pinyin and meaning. */
export function ex(hanzi: string, pinyin: string, english: string): LessonExample {
  return { es: hanzi, en: `${pinyin} -- ${english}` };
}

export function sec(heading: string, body: string[], examples: LessonExample[] = [], checkpoint: Exercise[] = []): LessonSection {
  const s: LessonSection = { heading, body };
  if (examples.length) s.examples = examples;
  if (checkpoint.length) s.checkpoint = checkpoint;
  return s;
}

export function mc(question: string, options: string[], correctIndex: number, explanation: string): MultipleChoiceExercise {
  return { type: "multiple-choice", question, options, correctIndex, explanation };
}

export function ms(question: string, options: string[], correctIndexes: number[], explanation: string): MultiSelectExercise {
  return { type: "multi-select", question, options, correctIndexes, explanation };
}

export function mt(instructions: string, pairs: [string, string][], explanation: string): MatchingExercise {
  return { type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation };
}

// 不 and 一 are written with their spoken tone; a learner who types the
// dictionary tone (bù shì, yī ge) is just as right. With `chars`, only
// when the answer has 不 or 一 (so 异 yì doesn't also accept yī).
function citationVariants(pinyin: string, chars?: string): string[] {
  const swap = (from: string[], to: string) =>
    pinyin
      .split(" ")
      .map((w) => (from.includes(w.toLowerCase()) ? to : w))
      .join(" ");
  const out = [pinyin];
  if (!chars || chars.includes("不")) out.push(swap(["bú"], "bù"));
  if (!chars || chars.includes("一")) out.push(swap(["yí", "yì"], "yī"));
  return [...new Set<string>(out)];
}

/**
 * Fill in the blank. `answer` is the characters; `pinyin` (tone-marked) is
 * also accepted -- typed with marks or numbers -- so learners without a
 * Chinese keyboard can answer. Pass null for pinyin-only drills, where
 * `answer` is itself pinyin.
 */
export function fb(
  prompt: string,
  sentence: string,
  answer: string,
  pinyin: string | null,
  explanation: string,
  more: { en?: string; altAnswers?: string[]; hint?: string } = {}
): FillBlankExercise {
  const alts = new Set<string>(more.altAnswers ?? []);
  if (pinyin) for (const p of citationVariants(pinyin, answer)) alts.add(p);
  for (const p of citationVariants(answer)) if (p !== answer) alts.add(p);
  const e: FillBlankExercise = { type: "fill-blank", prompt, sentence, answer, explanation };
  if (alts.size) e.altAnswers = [...alts];
  if (more.en) e.en = more.en;
  if (more.hint) e.hint = more.hint;
  return e;
}

/**
 * Chinese -> English, typed in English. The source line shows the
 * characters with their pinyin underneath-in-brackets for A1 support.
 * (The shared type names directions after the original Spanish course:
 * "es-en" means target language -> English.)
 */
export function toEn(hanzi: string, pinyin: string, answer: string, explanation: string, altAnswers: string[] = []): TranslateExercise {
  const e: TranslateExercise = {
    type: "translate",
    direction: "es-en",
    prompt: "Translate into English.",
    source: `${hanzi} (${pinyin})`,
    answer,
    explanation,
  };
  if (altAnswers.length) e.altAnswers = altAnswers;
  return e;
}

/**
 * English -> Chinese, typed in characters or pinyin. `answer` is the
 * characters, `pinyin` the tone-marked pinyin; both are accepted.
 */
export function toZh(english: string, answer: string, pinyin: string, explanation: string, altAnswers: string[] = []): TranslateExercise {
  const alts = new Set<string>(altAnswers);
  for (const p of citationVariants(pinyin, answer)) alts.add(p);
  return {
    type: "translate",
    direction: "en-es",
    prompt: "Say it in Chinese (characters or pinyin).",
    source: english,
    answer,
    altAnswers: [...alts],
    explanation,
  };
}

/**
 * From C1, where everything is in Chinese: a task in Chinese (rewrite
 * with a given pattern, sum up, answer) typed in characters or pinyin.
 */
export function rewrite(task: string, answer: string, pinyin: string, explanation: string, altAnswers: string[] = []): TranslateExercise {
  return { ...toZh(task, answer, pinyin, explanation, altAnswers), prompt: "改写（汉字或拼音）。" };
}

/** From C1: word order with the instruction and meaning in Chinese. */
export function order(words: string[], meaning: string, explanation: string, altOrders?: string[][]): WordOrderExercise {
  return { ...wo(words, meaning, explanation, altOrders), prompt: "把词语排成正确的句子。" };
}

/** Put the character tiles in order. `words` is the correct order. */
export function wo(words: string[], translation: string, explanation: string, altOrders?: string[][]): WordOrderExercise {
  const e: WordOrderExercise = { type: "word-order", prompt: "Put the words in order.", words, translation, explanation };
  if (altOrders?.length) e.altOrders = altOrders;
  return e;
}

/** Hear `audio` (characters, spoken by the Mandarin voice), then choose. */
export function listen(audio: string, question: string, options: string[], correctIndex: number, explanation: string): ListenChooseExercise {
  return { type: "listen-choose", audio, question, options, correctIndex, explanation };
}

/** Record yourself saying `text` and compare with the model. */
export function say(text: string, explanation: string, tip?: string, prompt?: string): SpeakExercise {
  const e: SpeakExercise = { type: "speak", text, explanation };
  if (tip) e.tip = tip;
  if (prompt) e.prompt = prompt;
  return e;
}

/** Builds a lesson; numbers are assigned in array order by `numbered`. */
export function lesson(
  level: ZhLevel,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: LessonSection[],
  exercises: Exercise[],
  extra: LessonTags = {}
): Lesson {
  const l: Lesson = { slug, level, number: 0, title, summary, duration, sections, exercises };
  if (extra.optional) l.optional = true;
  l.kind = extra.kind ?? (extra.teaches?.length ? "teach" : "review");
  if (extra.teaches?.length) l.teaches = extra.teaches.map(conceptId);
  if (extra.reviews?.length) l.reviews = extra.reviews.map(conceptId);
  if (extra.previews?.length) l.previews = extra.previews.map(conceptId);
  if (extra.format) l.format = extra.format;
  l.source = extra.source ?? "authored";
  return l;
}

/**
 * A reinforce or drill lesson drafted from its spec (specs.ts): kind,
 * format and concepts come from the spec, so the draft can't drift from
 * it. `spec` is the slug, looked up in the level's spec.
 */
export function layer(
  level: LevelSpec,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: LessonSection[],
  exercises: Exercise[],
  extra: Pick<LessonTags, "previews"> = {}
): Lesson {
  const spec: LayerSpec | undefined = level.layers.find((s) => s.slug === slug);
  if (!spec) throw new Error(`layer "${slug}" has no spec in ${level.code}`);
  return lesson(level.level as ZhLevel, slug, title, summary, duration, sections, exercises, {
    kind: spec.kind,
    reviews: spec.reviews,
    format: spec.format,
    source: `generated:${spec.slug}`,
    ...extra,
  });
}

/** Curriculum tags for a lesson (see concepts.ts). Concept ids may omit
 * the "zh." prefix: "grammar.shi" means "zh.grammar.shi". */
export type LessonTags = {
  optional?: boolean;
  kind?: Lesson["kind"];
  teaches?: string[];
  reviews?: string[];
  previews?: string[];
  format?: string;
  source?: string;
};

export function conceptId(id: string): string {
  return id.startsWith("zh.") ? id : `zh.${id}`;
}

/** Numbers a module's lessons 1..n in order. */
export function numbered(lessons: Lesson[]): Lesson[] {
  return lessons.map((l, i) => ({ ...l, number: i + 1 }));
}
