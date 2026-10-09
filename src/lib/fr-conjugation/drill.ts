// Synced from cheneygross-afk/lengo:src/lib/fr-conjugation/drill.ts by scripts/sync-content.mjs -- edit it there, not here.
// Typed French conjugation drills: pick tenses, persons and a set of
// verbs, get questions like "prendre · Imperfect · nous". The answer may
// be typed with or without its subject ("prenions" or "nous prenions").
// After être the participle agrees with the subject shown (elle est
// allée); for je/tu/nous/vous either gender is fine.

import { cleanAnswer, stripAccents, type GradeResult } from "../grading";
import { conjugate } from "./conjugate";
import { frVerbList } from "./lookup";
import { agree, agreementsFor, subjectPrefix } from "./text";
import { personsOf, tenseInfo, type Person, type TenseId } from "./types";

export type FrVerbSetId = "top25" | "top50" | "top100" | "top250" | "all" | "irregular";

export const FR_VERB_SETS: { id: FrVerbSetId; label: string }[] = [
  { id: "top25", label: "Top 25 verbs" },
  { id: "top50", label: "Top 50 verbs" },
  { id: "top100", label: "Top 100 verbs" },
  { id: "top250", label: "Top 250 verbs" },
  { id: "all", label: "All verbs" },
  { id: "irregular", label: "Irregular verbs only" },
];

/** The display infinitives in a verb set, most frequent first. */
export function frVerbsInSet(set: FrVerbSetId): string[] {
  const all = frVerbList();
  if (set === "irregular") return all.filter((v) => v.irregular).map((v) => v.infinitive);
  if (set === "all") return all.map((v) => v.infinitive);
  const n = { top25: 25, top50: 50, top100: 100, top250: 250 }[set];
  return all.slice(0, n).map((v) => v.infinitive);
}

export const FR_DRILL_TENSES: TenseId[] = ["pres", "pc", "impf", "fut", "cond", "subj", "imp", "pqp", "futant", "condp", "subjp", "ps"];

export const FR_DRILL_PERSONS: Person[] = ["je", "tu", "il", "nous", "vous", "ils"];

export type FrDrillOptions = {
  tenses: TenseId[];
  persons: Person[];
  verbs: string[];
  count: number;
  seed?: number;
};

export type FrDrillQuestion = {
  infinitive: string;
  en: string;
  tense: TenseId;
  person: Person;
  /** Subject shown: "elle", "nous", "(tu)" for the imperative. */
  subject: string;
  /** What's shown before the input: "j'", "qu'elle ", "" for the imperative. */
  prefix: string;
  /** Accepted answers without the subject; the first is the one shown. */
  answers: string[];
};

function rng(seed: number) {
  let a = seed >>> 0 || 1;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SUBJECTS: Record<Person, string[]> = {
  je: ["je"],
  tu: ["tu"],
  il: ["il", "elle", "on"],
  nous: ["nous"],
  vous: ["vous"],
  ils: ["ils", "elles"],
};

/** Accepted answers for one cell, agreeing with the subject. */
export function frAnswersFor(inf: string, tense: TenseId, person: Person, subject: string): string[] {
  const c = conjugate(inf);
  if (!c) return [];
  const cells = [c.tenses[tense]?.[person], c.avoirTenses?.[tense]?.[person]].filter((x): x is string => !!x);
  const out: string[] = [];
  for (const cell of cells) {
    for (const form of cell.split(" / ")) {
      if (!form.includes("(")) out.push(form);
      else for (const a of agreementsFor(person, subject)) out.push(agree(form, a));
    }
  }
  return [...new Set(out)];
}

/** A shuffled drill. Combinations that don't exist (je with the imperative, il faut with nous) are skipped. */
export function makeFrDrill(opts: FrDrillOptions): FrDrillQuestion[] {
  const rand = rng(opts.seed ?? Date.now());
  const pool: { inf: string; tense: TenseId; person: Person }[] = [];
  for (const inf of opts.verbs) {
    const c = conjugate(inf);
    if (!c) continue;
    for (const tense of opts.tenses) {
      for (const person of opts.persons) {
        if (!personsOf(tense).includes(person)) continue;
        if (!c.tenses[tense][person]) continue;
        pool.push({ inf, tense, person });
      }
    }
  }
  if (pool.length === 0) return [];
  const questions: FrDrillQuestion[] = [];
  let bag: typeof pool = [];
  let guard = 0;
  while (questions.length < opts.count && guard++ < opts.count * 20) {
    if (bag.length === 0) bag = [...pool];
    const pick = bag.splice(Math.floor(rand() * bag.length), 1)[0];
    const prev = questions[questions.length - 1];
    if (prev && pool.length > 1 && prev.infinitive === pick.inf && prev.tense === pick.tense && prev.person === pick.person) continue;
    const c = conjugate(pick.inf)!;
    const subjects = c.impersonal ? ["il"] : SUBJECTS[pick.person];
    const subject = pick.tense === "imp" ? pick.person : subjects[Math.floor(rand() * subjects.length)];
    const answers = frAnswersFor(pick.inf, pick.tense, pick.person, subject);
    if (answers.length === 0) continue;
    questions.push({
      infinitive: pick.inf,
      en: c.en,
      tense: pick.tense,
      person: pick.person,
      subject: pick.tense === "imp" ? `(${subject})` : subject,
      prefix: subjectPrefix(pick.person, pick.tense, answers[0], "speech", subject),
      answers,
    });
  }
  return questions;
}

const clean = (s: string) =>
  cleanAnswer(s)
    .replace(/-/g, " ")
    .replace(/' /g, "'")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Grades a typed answer: the form alone or with its subject ("prenions",
 * "nous prenions", "que je sois"). Right but for an accent is correct
 * with a note; any other difference is wrong (the spelling is the point).
 */
export function gradeFrDrillAnswer(q: FrDrillQuestion, typed: string): GradeResult {
  const t = clean(typed);
  if (!t) return { correct: false };
  let accentOnly: string | null = null;
  for (const a of q.answers) {
    const candidates = [a, `${subjectPrefix(q.person, q.tense, a, "speech", q.subject.replace(/[()]/g, ""))}${a}`];
    for (const cand of candidates) {
      const c = clean(cand);
      if (c === t) return { correct: true };
      if (!accentOnly && stripAccents(c) === stripAccents(t)) accentOnly = a;
    }
  }
  if (accentOnly) return { correct: true, note: `Correct -- just watch the accents: "${accentOnly}".` };
  return { correct: false };
}

/** Tense name for question headers. */
export function frDrillTenseLabel(t: TenseId): string {
  return tenseInfo(t).en;
}
