// Synced from cheneygross-afk/lengo:src/lib/lessons/speaking.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, SpeakExercise } from "./types";
import { keepsAuthoredOrder, stageOf } from "./lessonFlow";
import { MAX_LESSON_QUESTIONS } from "./questionCap";
import { EN_COPY, ES_COPY, quoted, stripNote, usableEn, usableEs } from "./unit-reviews";

// Speaking in every Spanish lesson (owner request, 2026-11-19, after the
// curriculum audit: "it has to be systematically incorporated into the
// whole corpus").
//
// The rule: of the (at most 20) questions a lesson asks, one in five is
// spoken -- 4 of 20, never fewer than one in a lesson with 3 or more
// questions. Each is "say it in Spanish": an English sentence the learner
// answers out loud before hearing or seeing anything, so they produce the
// language rather than repeat it. The answer is checked against what they
// said where the device can turn speech into text (speakCheck.ts).
//
// The spoken items come from the lesson's own sentences, so they practise
// exactly what it teaches:
//   1. sentences from practice the 20-question cap leaves out (new to the
//      learner), alternating with
//   2. the teaching examples, one per section in turn, so every idea the
//      lesson teaches is said out loud at least once where it can be;
//   3. only then sentences the learner also types in this lesson.
// Speaking items an author wrote count towards the four. capLesson
// (practiceCap.ts) keeps them in the 20 by leaving out recognition
// questions (multiple choice, matching) instead, which become the
// lesson's keep-practicing questions: the lesson never gets longer.
//
// Tests, exams and unit reviews (their own speaking section) keep their
// set questions, as do the end-of-level exit tickets. Applied where each Spanish level exports its lessons.

/** One question in five is spoken. */
export const SPEAK_EVERY = 5;
export const MAX_SPEAK = 4;

/** Spoken questions a lesson of `questions` questions asks. */
export function speakTarget(questions: number): number {
  if (questions < 3) return 0;
  return Math.max(1, Math.min(MAX_SPEAK, Math.round(questions / SPEAK_EVERY)));
}

const SPANISH_LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2", "C1/C2"]);

/** Whether the speaking rule applies to this lesson. */
export function speaksSpanish(l: Lesson): boolean {
  return SPANISH_LEVELS.has(l.level) && !keepsAuthoredOrder(l) && !l.unitReview && !/exit-ticket/.test(l.slug);
}

type Source = {
  es: string;
  /** The English to say it from; absent for a Spanish cue or read-aloud. */
  en?: string;
  /** A Spanish cue instead: a question to answer, or a sentence to change. */
  cue?: string;
  alts: string[];
  why?: string;
  key: string;
  /** The left-out practice item it was made from, which it replaces. */
  from?: Exercise;
};

// A translate prompt that asks to correct or transform a Spanish sentence
// has no English meaning to speak from (same test as unit-reviews.ts).
const SPANISH_TASK =
  /[áéíóúñ¿¡]|^\s*(corrige|transforma|pasa|cambia|reescribe|convierte|reacciona|responde|reformula)\b|\b(la|el|los|las|frase|al|del|con)\b/i;
const CORRECT_TASK = /\b(correct|fix|rewrite|change|transform|make it|turn)\b/i;
// "Traduce al español." / "Translate to Spanish.": an English source.
const TRANSLATE_TASK = /^\s*(traduce|translate)\b[^:«"]*[.:]?\s*$/i;
const ERROR_TASK = /\b(corrige|correct|error|mistake|wrong|fix)\b/i;

const norm = (t: string) => t.toLowerCase().replace(/[^\p{L}\p{N} ]/gu, "").replace(/\s+/g, " ").trim();
const unquote = (t: string) => t.replace(/^[«"“]\s*/, "").replace(/\s*[»"”]$/, "").trim();
const cleanAlts = (alts: string[], es: string) => alts.map((a) => unquote(stripNote(a))).filter((a) => a && a !== es && !/[/[\]_→]/.test(a));

/** A sentence said from its English meaning. */
function fromEnglish(es: string, en: string | undefined, alts: string[], why?: string): Source | null {
  const s = stripNote(es);
  const e = en === undefined ? undefined : stripNote(en);
  if (usableEs(s, 120) && usableEn(e, s)) return { es: s, en: e, alts: cleanAlts(alts, s), why, key: norm(s) };
  // A two-line exchange ("—¿Qué hacías? —Dormía."): answer the question.
  const q = /^\s*[—–-]\s*(.+?[?!.])\s*[—–-]\s*(.+)$/.exec(s);
  const qe = /^\s*["“—–-]*\s*(.+?[?!.])["”]?\s*["“—–-]+\s*(.+?)["”]?\s*$/.exec(e ?? "");
  if (q && qe) {
    const reply = q[2].trim();
    const replyEn = stripNote(qe[2].replace(/^\(\w+\)\s*/, "").trim());
    if (reply.length >= 2 && !/[_/[\]]/.test(reply) && replyEn && !/[/[\]_]/.test(replyEn) && !/[¿¡]/.test(replyEn)) {
      const replyAlts = alts.map((a) => /[—–-]\s*([^—–]+)$/.exec(a)?.[1].trim() ?? "").filter(Boolean);
      return { es: reply, en: replyEn, cue: q[1].trim(), alts: cleanAlts(replyAlts, reply), why, key: norm(reply) };
    }
  }
  return null;
}

function englishSource(e: Exercise): Source | null {
  if (e.type === "translate" && e.direction === "en-es") {
    const prompt = e.prompt ?? "";
    if (!TRANSLATE_TASK.test(prompt) && (SPANISH_TASK.test(prompt) || CORRECT_TASK.test(prompt))) return null;
    return fromEnglish(e.answer, e.source, e.altAnswers ?? [], e.explanation);
  }
  if (e.type === "fill-blank" && e.en && e.sentence.split("___").length === 2) {
    if (CORRECT_TASK.test(e.prompt) || e.sentence.includes("→")) return null;
    const [before, after] = e.sentence.split("___");
    const alts = (e.altAnswers ?? []).map((a) => `${before}${a}${after}`);
    return fromEnglish(`${before}${e.answer}${after}`, e.en.replace(/[[\]]/g, ""), alts, e.explanation);
  }
  return null;
}

/** A sentence to change out loud ("Cambia a negativo: Llámame." → "No me llames."). */
function transformSource(e: Exercise): Source | null {
  let task: string | undefined;
  let from: string | undefined;
  let to: string | undefined;
  let alts: string[] = [];
  if (e.type === "fill-blank" && e.sentence.split("___").length === 2 && e.sentence.split("→").length === 2) {
    const [left, right] = e.sentence.split("→").map((t) => t.trim());
    if (!right.includes("___")) return null;
    task = e.prompt;
    from = left;
    to = right.replace("___", e.answer);
    alts = (e.altAnswers ?? []).map((a) => right.replace("___", a));
  } else if (
    e.type === "translate" &&
    e.direction === "en-es" &&
    SPANISH_TASK.test(e.prompt ?? "") &&
    !ERROR_TASK.test(e.prompt ?? "") &&
    !/\b(traduce|translate)\b/i.test(e.prompt ?? "")
  ) {
    task = e.prompt;
    from = e.source;
    to = e.answer;
    alts = e.altAnswers ?? [];
  }
  if (!task || !from || !to) return null;
  task = task.trim().replace(/[.:]+$/, "");
  // A bare "Transforma." doesn't say how: the item needs its frame on screen.
  if (task.length < 12) return null;
  from = stripNote(from);
  to = unquote(stripNote(to));
  if (task.length > 90 || from.length > 120 || to.length > 120 || norm(from) === norm(to)) return null;
  if (/[_/[\]]/.test(from + to) || !/\p{L}/u.test(to)) return null;
  return { es: to, cue: `${task}: «${from.replace(/^«|»$/g, "")}»`, alts: cleanAlts(alts, to), why: e.explanation, key: norm(to) };
}

/** A word or short phrase said from its English (vocabulary lessons). */
function wordSources(e: Exercise): Source[] {
  const ok = (es: string, en: string) =>
    es.length >= 2 && es.length <= 40 && en.length >= 2 && en.length <= 40 && !/[/()[\]_=→…*]|\.\.\./.test(es + en) && !/[¿¡áéíóúñ]/i.test(en) && norm(es) !== norm(en);
  if (e.type === "translate" && e.direction === "en-es" && !SPANISH_TASK.test(e.prompt ?? "") && !CORRECT_TASK.test(e.prompt ?? "")) {
    const en = e.source.replace(/\s*\([^()]*\)\s*/g, " ").trim();
    return ok(e.answer, en) ? [{ es: e.answer, en, alts: cleanAlts(e.altAnswers ?? [], e.answer), why: e.explanation, key: norm(e.answer) }] : [];
  }
  if (e.type === "matching") {
    return e.pairs
      .filter((p) => ok(p.left, p.right) && /^[\p{L} ]+$/u.test(p.left) && /^[a-z' -]+$/i.test(p.right) && !/^(the|a|an)$/i.test(p.right))
      .map((p) => ({ es: p.left, en: p.right, alts: [], key: norm(p.left) }));
  }
  return [];
}

/** "(why it works)" note at the end of an example's translation. */
const noteOf = (t: string | undefined) => /\(([^()]{12,})\)\s*$/.exec(t ?? "")?.[1].trim().replace(/[.;:]+$/, "");

/** The lesson's teaching examples, one per section in turn. */
function exampleSources(l: Lesson): Source[] {
  const bySection = l.sections.map((s) =>
    (s.examples ?? []).flatMap((ex) => {
      const src = fromEnglish(ex.es, ex.en, [], noteOf(ex.en));
      return src ? [src] : [];
    }),
  );
  return roundRobin(bySection);
}

function roundRobin<T>(lists: T[][]): T[] {
  const out: T[] = [];
  for (let i = 0; lists.some((list) => i < list.length); i++) for (const list of lists) if (i < list.length) out.push(list[i]);
  return out;
}

const SPANISH_WORDS = /(?<!\p{L})(el|la|los|las|de|del|que|y|en|un|una|es|por|con|para|se|no|mi|tu|su)(?!\p{L})/iu;
const ENGLISH_WORDS = /\b(the|and|is|are|you|of|with|this|that|it|which|to|from|so|what|not|or|for|be|have)\b/i;

/** Untranslated Spanish examples: read aloud, the last resort. */
function readAloudSources(l: Lesson): Source[] {
  const lists = l.sections.map((s) => (s.examples ?? []).filter((ex) => !ex.en).map((ex) => stripNote(ex.es)));
  return roundRobin(lists)
    .filter((t) => usableEs(t, 110) && SPANISH_WORDS.test(t) && !ENGLISH_WORDS.test(t))
    .map((t) => ({ es: t, alts: [], key: norm(t) }));
}

function speakItem(s: Source, english: boolean): SpeakExercise {
  const copy = english ? EN_COPY : ES_COPY;
  const first = english ? `One way to say it: "${quoted(s.es)}".` : `Una forma de decirlo: «${quoted(s.es)}».`;
  const why = s.why?.trim();
  let prompt: string | undefined;
  if (s.cue && s.en) prompt = english ? `Answer out loud in Spanish: ${s.cue} (Say: "${quoted(s.en)}")` : `Responde en voz alta: ${s.cue} (Di: "${quoted(s.en)}")`;
  else if (s.cue) prompt = english ? `Say it out loud. ${s.cue}` : `Dilo en voz alta. ${s.cue}`;
  else if (s.en) prompt = copy.respondPrompt(quoted(s.en));
  const explanation = !prompt
    ? copy.readExpl({ es: s.es })
    : why
      ? `${first} ${why}`
      : s.en
        ? copy.respondExpl({ es: s.es, en: s.en })
        : first;
  return {
    type: "speak",
    text: s.es,
    ...(prompt ? { prompt } : {}),
    ...(s.alts.length ? { altAnswers: s.alts } : {}),
    explanation,
  };
}

/** The lesson with its spoken questions added (see the rule above).
 * `pickCore` says which of the lesson's practice items the 20-question
 * cap would show, so sentences left out of it are spoken first. */
export function withSpeakingPractice(l: Lesson, pickCore: (l: Lesson) => Set<Exercise>): Lesson {
  if (!speaksSpanish(l)) return l;
  const all = [...l.sections.flatMap((s) => s.checkpoint ?? []), ...l.exercises];
  const authored = all.filter((e) => e.type === "speak");
  const target = speakTarget(Math.min(20, all.length));
  let need = target - authored.length;
  if (need <= 0) return l;

  const used = new Set(authored.map((e) => norm(e.type === "speak" ? e.text : "")));
  const core = pickCore(l);
  const left: Source[] = [];
  const shown: Source[] = [];
  const transforms: Source[] = [];
  const vocab: Source[] = [];
  for (const e of all) {
    const s = englishSource(e);
    if (s) (core.has(e) ? shown : left).push(core.has(e) ? s : { ...s, from: e });
    else {
      const t = transformSource(e);
      if (t) transforms.push(t);
      else vocab.push(...wordSources(e));
    }
  }
  const examples = exampleSources(l);
  // From English: left-out practice and teaching examples in turn, then
  // the rest; then spoken drills with a Spanish cue, then words; reading
  // aloud only when the lesson has nothing else.
  const order: Source[] = [];
  for (let i = 0; i < Math.max(left.length, examples.length); i++) {
    if (i < left.length) order.push(left[i]);
    if (i < examples.length) order.push(examples[i]);
  }
  order.push(...shown, ...transforms, ...vocab, ...readAloudSources(l));

  const english = l.level === "A1" || l.level === "A2";
  const replaced = new Map<Exercise, SpeakExercise>();
  const added: SpeakExercise[] = [];
  for (const s of order) {
    if (need <= 0) break;
    if (used.has(s.key)) continue;
    used.add(s.key);
    const item = speakItem(s, english);
    // A sentence from left-out practice is said instead of typed, in its
    // place: the lesson doesn't grow.
    if (s.from && l.exercises.includes(s.from) && !replaced.has(s.from)) replaced.set(s.from, item);
    else added.push(item);
    need--;
  }
  if (!replaced.size && !added.length) return l;
  let exercises = [...l.exercises.map((e) => replaced.get(e) ?? e), ...added];
  // Still within the 30 a lesson part may hold (questionCap.ts): left-out
  // recognition questions make room, latest first.
  const checkpoints = all.length - l.exercises.length;
  let over = checkpoints + exercises.length - MAX_LESSON_QUESTIONS;
  if (over > 0) {
    const drop = new Set<Exercise>();
    const spare = exercises
      .map((e, i) => ({ e, i }))
      .filter(({ e }) => !core.has(e) && e.type !== "speak" && e.type !== "write")
      .sort((a, b) => STAGE_RANK[stageOf(a.e)] - STAGE_RANK[stageOf(b.e)] || b.i - a.i);
    for (const { e } of spare) {
      if (over <= 0) break;
      drop.add(e);
      over--;
    }
    exercises = exercises.filter((e) => !drop.has(e));
  }
  return { ...l, exercises };
}

const STAGE_RANK = { crawl: 0, walk: 1, run: 2 } as const;
