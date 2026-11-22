// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, FillBlankExercise, Lesson, LessonSection, TranslateExercise } from "./types";

// Shared tools for the unit-by-unit content fixes from Claude's audits in
// Ricardo's format (a1-unit3-fixes.ts, a1-unit4-fixes.ts...). Content only:
// they change items, never how answers are checked.
//
// Why so many items become choices: the checker forgives a one-letter slip
// in a word that isn't a real Spanish word ("small typo"), and the speech
// check is just as lenient. Irregular and stem-changing forms differ from
// the learner's typical mistake by one letter (escribemos, penso, conosco,
// tiengo), so an item whose point is that letter must be a choice with the
// mistake as an option.

export type Ex = Exercise;
export type Fix = { find: (e: Ex) => boolean; to: (e: Ex) => Ex | null };

export const fbIs = (sentence: string) => (e: Ex) => e.type === "fill-blank" && e.sentence === sentence;
export const trIs = (source: string) => (e: Ex) => e.type === "translate" && e.source === source;
export const spIs = (text: string) => (e: Ex) => e.type === "speak" && e.text === text;
export const mcIs = (start: string) => (e: Ex) => (e.type === "multiple-choice" || e.type === "multi-select") && e.question.startsWith(start);

export const keepMeta = (from: Ex, to: Ex): Ex => (from.meta ? { ...to, meta: from.meta } : to);

/** A fill-in whose mistake the checker would forgive, as a choice with the mistake among the options (right one first; the player shuffles). */
export const choose = (sentence: string, wrong: string[], swap?: Partial<FillBlankExercise>): Fix => ({
  find: fbIs(sentence),
  to: (raw) => {
    const e = { ...(raw as FillBlankExercise), ...swap };
    const meaning = e.en ? ` (${e.en.replace(/[[\]]/g, "")})` : "";
    const cue = e.en ? "Which word fills the blank?" : e.prompt;
    return keepMeta(raw, {
      type: "multiple-choice",
      question: `${cue}\n"${e.sentence}"${meaning}`,
      options: [e.answer, ...wrong],
      correctIndex: 0,
      explanation: e.explanation,
    });
  },
});

/** A typed sentence whose mistake the checker would forgive, as a choice. */
export const chooseSentence = (source: string, wrong: string[]): Fix => ({
  find: trIs(source),
  to: (raw) => {
    const e = raw as TranslateExercise;
    return keepMeta(raw, {
      type: "multiple-choice",
      question: `${e.prompt}\n"${e.source}"`,
      options: [e.answer, ...wrong],
      correctIndex: 0,
      explanation: e.explanation,
    });
  },
});

export const alts = (find: (e: Ex) => boolean, more: string[]): Fix => ({
  find,
  to: (e) => {
    if (e.type !== "translate" && e.type !== "speak" && e.type !== "fill-blank" && e.type !== "dictation") return e;
    const have = new Set([...(e.altAnswers ?? [])]);
    return { ...e, altAnswers: [...have, ...more.filter((m) => !have.has(m))] } as Ex;
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- the edits below reach into fields of one known item type
export const edit = (find: (e: Ex) => boolean, fn: (e: any) => Ex): Fix => ({ find, to: (e) => keepMeta(e, fn({ ...e })) });

/** Removed to keep the lesson within 30 questions after its warm-up (it would otherwise be split into parts). */
export const drop = (find: (e: Ex) => boolean): Fix => ({ find, to: () => null });

export const mc = (question: string, options: string[], explanation: string): Ex => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

export const warmUp = (heading: string, body: string, checkpoint: Ex[]): LessonSection => ({ heading, body: [body], checkpoint });

export type LessonFix = {
  goal?: string;
  title?: string;
  summary?: string;
  warmUp?: LessonSection;
  items?: Fix[];
  /** Word swaps in the teaching cards' text and examples (not the questions). */
  text?: [string, string][];
};

function swapText(sections: LessonSection[], swaps: [string, string][]): LessonSection[] {
  const sw = (t: string) => swaps.reduce((acc, [a, b]) => acc.split(a).join(b), t);
  return sections.map((s) => ({
    ...s,
    body: s.body.map(sw),
    ...(s.examples ? { examples: s.examples.map((x) => ({ ...x, es: sw(x.es), ...(x.en ? { en: sw(x.en) } : {}) })) } : {}),
  }));
}

// Spoken items that open with a subject pronoun also accept the sentence
// without it (Spanish drops it; the ending already says who).
const PRONOUN = /^(¿?)(Yo|Tú|Él|Ella|Usted|Nosotros|Nosotras|Ellos|Ellas|Ustedes) (?=[a-záéíóúñ])/;
export const dropPronoun: Fix = {
  find: (e) => e.type === "speak" && PRONOUN.test(e.text),
  to: (e) => {
    if (e.type !== "speak") return e;
    const opener = e.text.match(PRONOUN)?.[1] ?? "";
    const bare = e.text.replace(PRONOUN, "");
    const without = opener + bare.charAt(0).toUpperCase() + bare.slice(1);
    const have = e.altAnswers ?? [];
    return have.includes(without) ? e : { ...e, altAnswers: [...have, without] };
  },
};

export function mapItems(l: Lesson, fixes: Fix[]): Lesson {
  const run = (e: Ex): Ex | null => {
    let out: Ex | null = e;
    for (const f of fixes) if (out && f.find(out)) out = f.to(out);
    return out;
  };
  const list = (xs: Ex[]) => xs.map(run).filter((x): x is Ex => x !== null);
  return {
    ...l,
    sections: l.sections.map((s) => (s.checkpoint ? { ...s, checkpoint: list(s.checkpoint) } : s)),
    exercises: list(l.exercises),
  };
}


/** Before splitting: item fixes, warm-up first, title, summary and goal. */
export function applyLessonFixes(lessons: Lesson[], fixes: Record<string, LessonFix>): Lesson[] {
  return lessons.map((l) => {
    const fix = fixes[l.slug];
    if (!fix) return l;
    let out = mapItems(l, [...(fix.items ?? []), dropPronoun]);
    if (fix.text) out = { ...out, sections: swapText(out.sections, fix.text) };
    if (fix.warmUp) out = { ...out, sections: [fix.warmUp, ...out.sections] };
    return {
      ...out,
      ...(fix.title ? { title: fix.title } : {}),
      ...(fix.summary ? { summary: fix.summary } : {}),
      ...(fix.goal ? { goal: fix.goal } : {}),
    };
  });
}

/**
 * The same item fixes once more after the spoken questions are made
 * (speaking.ts turns some typed items into spoken ones), so generated
 * spoken items get their accepted answers too. Parts of a split lesson
 * use the whole lesson's fixes.
 */
export function applySpokenFixes(lessons: Lesson[], fixes: Record<string, LessonFix>, keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return lessons.map((l) => {
    const fix = fixes[l.slug.replace(/-part-\d+$/, "")];
    return fix ? keep(l, mapItems(l, [...(fix.items ?? []), dropPronoun])) : l;
  });
}
