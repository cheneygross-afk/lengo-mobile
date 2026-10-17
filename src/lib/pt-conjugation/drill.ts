// Synced from cheneygross-afk/lengo:src/lib/pt-conjugation/drill.ts by scripts/sync-content.mjs -- edit it there, not here.
// Typed Portuguese conjugation drills: pick tenses, persons and a set of
// verbs, get questions like "fazer · Simple past · ela". The answer may be
// typed with or without its subject ("fez" or "ela fez"; "fale" or "que
// ela fale"). Accents count: a missing or wrong accent is marked wrong,
// with a note, because it often changes the word (pode / pôde, falamos /
// falámos, esta / está).

import { cleanAnswer, type GradeResult } from "../grading";
import { conjugate } from "./conjugate";
import { ptVerbList } from "./lookup";
import { foldForSearch, isImperative, particleOf, subjectPrefix } from "./text";
import { personsOf, tenseInfo, type Person, type TenseId } from "./types";

export type PtVerbSetId = "top25" | "top50" | "top100" | "top250" | "all" | "irregular" | "core";

export const PT_VERB_SETS: { id: PtVerbSetId; label: string }[] = [
  { id: "top25", label: "Top 25 verbs" },
  { id: "top50", label: "Top 50 verbs" },
  { id: "top100", label: "Top 100 verbs" },
  { id: "top250", label: "Top 250 verbs" },
  { id: "all", label: "All verbs" },
  { id: "irregular", label: "Irregular & stem-changing verbs only" },
  { id: "core", label: "ser, estar, ter, ir & the big irregulars" },
];

const CORE = ["ser", "estar", "ter", "ir", "fazer", "poder", "querer", "saber", "dizer", "vir", "ver", "dar", "pôr", "trazer", "haver"];

/** The display infinitives in a verb set, most frequent first. */
export function ptVerbsInSet(set: PtVerbSetId): string[] {
  const all = ptVerbList();
  if (set === "irregular") return all.filter((v) => v.irregular).map((v) => v.infinitive);
  if (set === "core") return CORE;
  if (set === "all") return all.map((v) => v.infinitive);
  const n = { top25: 25, top50: 50, top100: 100, top250: 250 }[set];
  return all.slice(0, n).map((v) => v.infinitive);
}

export const PT_DRILL_TENSES: TenseId[] = [
  "pres", "pret", "impf", "fut", "cond", "sbpres", "sbimpf", "sbfut", "impa", "impn", "ppc", "mqpc", "infp", "futc", "condc", "sbppc", "sbmqp", "sbfutc", "mqp",
];

/** The persons offered in the drill settings (tu and vós only with the toggle). */
export const PT_DRILL_PERSONS: Person[] = ["eu", "tu", "ele", "nos", "vos", "eles"];

export type PtDrillOptions = {
  tenses: TenseId[];
  persons: Person[];
  verbs: string[];
  count: number;
  seed?: number;
};

export type PtDrillQuestion = {
  infinitive: string;
  en: string;
  tense: TenseId;
  person: Person;
  /** Subject shown: "ela", "a gente", "(você)" for the imperative. */
  subject: string;
  /** What's shown before the input: "eu ", "que ela ", "não " for the negative imperative, "" for the imperative. */
  prefix: string;
  /** Accepted answers without the prefix; the first is the one shown. */
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

// "a gente" (we, in speech) takes the ele form.
const SUBJECTS: Record<Person, string[]> = {
  eu: ["eu"],
  tu: ["tu"],
  ele: ["você", "ele", "ela", "a gente"],
  nos: ["nós"],
  vos: ["vós"],
  eles: ["vocês", "eles", "elas"],
};
const IMP_SUBJECT: Record<Person, string> = { eu: "", tu: "tu", ele: "você", nos: "nós", vos: "vós", eles: "vocês" };

/** "que " for an impersonal verb's subjunctive ("que chova"), "" otherwise. */
function particlePrefix(t: TenseId): string {
  const p = particleOf(t);
  return p ? `${p} ` : "";
}

/** Accepted answers for one cell, without "não" in the negative imperative. */
export function ptAnswersFor(inf: string, tense: TenseId, person: Person): string[] {
  const c = conjugate(inf);
  const cell = c?.tenses[tense]?.[person];
  if (!cell) return [];
  return [...new Set(cell.split(" / ").map((f) => (tense === "impn" ? f.replace(/^não /, "") : f)))];
}

/** A shuffled drill. Combinations that don't exist (eu with the imperative, poder in the imperative, chover with nós) are skipped. */
export function makePtDrill(opts: PtDrillOptions): PtDrillQuestion[] {
  const rand = rng(opts.seed ?? Date.now());
  const pool: { inf: string; tense: TenseId; person: Person }[] = [];
  const wanted = new Set<Person>(opts.persons);
  for (const inf of opts.verbs) {
    const c = conjugate(inf);
    if (!c) continue;
    for (const tense of opts.tenses) {
      for (const person of personsOf(tense)) {
        if (!wanted.has(person)) continue;
        if (!c.tenses[tense][person]) continue;
        pool.push({ inf, tense, person });
      }
    }
  }
  if (pool.length === 0) return [];
  const questions: PtDrillQuestion[] = [];
  let bag: typeof pool = [];
  let guard = 0;
  while (questions.length < opts.count && guard++ < opts.count * 20) {
    if (bag.length === 0) bag = [...pool];
    const pick = bag.splice(Math.floor(rand() * bag.length), 1)[0];
    const prev = questions[questions.length - 1];
    if (prev && pool.length > 1 && prev.infinitive === pick.inf && prev.tense === pick.tense && prev.person === pick.person) continue;
    const c = conjugate(pick.inf)!;
    const answers = ptAnswersFor(pick.inf, pick.tense, pick.person);
    if (answers.length === 0) continue;
    const imp = isImperative(pick.tense);
    const options = c.impersonal ? ["ele"] : SUBJECTS[pick.person];
    const subject = imp ? IMP_SUBJECT[pick.person] : options[Math.floor(rand() * options.length)];
    const shown = c.impersonal && !imp ? "" : subject;
    questions.push({
      infinitive: pick.inf,
      en: c.en,
      tense: pick.tense,
      person: pick.person,
      subject: imp ? `(${subject})` : shown,
      prefix: pick.tense === "impn" ? "não " : imp ? "" : c.impersonal ? particlePrefix(pick.tense) : subjectPrefix(pick.person, pick.tense, "speech", subject),
      answers,
    });
  }
  return questions;
}

const clean = (s: string) =>
  cleanAnswer(s)
    .replace(/[!]/g, " ")
    .replace(/\s*-\s*/g, "-")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Grades a typed answer: the form alone or with what comes before it
 * ("fez", "ela fez"; "fale", "ela fale", "que ela fale"; "não fale").
 * A difference only in accents or the cedilla is wrong, with a note;
 * any other difference is wrong.
 */
export function gradePtDrillAnswer(q: PtDrillQuestion, typed: string): GradeResult {
  const t = clean(typed);
  if (!t) return { correct: false };
  let accentOnly: string | null = null;
  const subject = q.subject.replace(/[()]/g, "");
  for (const a of q.answers) {
    const candidates = [a, `${q.prefix}${a}`];
    if (!isImperative(q.tense) && subject) {
      // Without the que/se/quando/para: "ela fale".
      candidates.push(`${subject} ${a}`);
    }
    for (const cand of candidates) {
      const c = clean(cand);
      if (c === t) return { correct: true };
      if (!accentOnly && foldForSearch(c) === foldForSearch(t)) accentOnly = a;
    }
  }
  if (accentOnly) return { correct: false, note: `Watch the accents: "${accentOnly}". In Portuguese they can change the word (pode / pôde, esta / está).` };
  return { correct: false };
}

/** English tense name for chips and question headers ("Simple past"). */
export function ptDrillTenseLabel(t: TenseId): string {
  return tenseInfo(t).en;
}

/** Portuguese tense name ("Pretérito perfeito"). */
export function ptDrillTenseName(t: TenseId): string {
  return tenseInfo(t).pt;
}
