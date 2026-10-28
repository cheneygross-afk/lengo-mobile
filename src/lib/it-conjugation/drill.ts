// Synced from cheneygross-afk/lengo:src/lib/it-conjugation/drill.ts by scripts/sync-content.mjs -- edit it there, not here.
// Typed Italian conjugation drills: pick tenses, persons and a set of
// verbs, get questions like "fare · Present perfect · lei". The answer may
// be typed with or without its subject ("ha fatto" or "lei ha fatto"; "parli"
// or "che tu parli"). Accents count: a missing or wrong accent is marked
// wrong, with a note, because it often changes the word (parlo / parlò,
// e / è). With essere the participle must agree with a subject whose gender
// is shown ("lei è andata"); with io, tu, noi, voi, loro either gender is right.

import { cleanAnswer, type GradeResult } from "../grading";
import { conjugate, reflexiveInfinitive } from "./conjugate";
import { itVerbList } from "./lookup";
import { foldForSearch, genderForms, isImperative, isSubjunctive } from "./text";
import { PERSONS6, personsOf, tenseInfo, type Person, type TenseId } from "./types";

export type ItVerbSetId = "top25" | "top50" | "top100" | "top250" | "all" | "irregular" | "core" | "essere" | "reflexive";

export const IT_VERB_SETS: { id: ItVerbSetId; label: string }[] = [
  { id: "top25", label: "Top 25 verbs" },
  { id: "top50", label: "Top 50 verbs" },
  { id: "top100", label: "Top 100 verbs" },
  { id: "top250", label: "Top 250 verbs" },
  { id: "all", label: "All verbs" },
  { id: "irregular", label: "Irregular verbs only" },
  { id: "core", label: "essere, avere, andare, fare & the big irregulars" },
  { id: "essere", label: "Verbs with essere" },
  { id: "reflexive", label: "Reflexive verbs (alzarsi)" },
];

const CORE = ["essere", "avere", "andare", "fare", "dire", "stare", "dare", "venire", "potere", "volere", "dovere", "sapere", "uscire", "bere", "rimanere", "tenere"];

/** The display infinitives in a verb set, most frequent first. */
export function itVerbsInSet(set: ItVerbSetId): string[] {
  const all = itVerbList().filter((v) => !v.pronominal);
  if (set === "irregular") return all.filter((v) => v.irregular).map((v) => v.infinitive);
  if (set === "core") return CORE;
  if (set === "essere") return all.filter((v) => v.essere && !v.prn).map((v) => v.infinitive);
  if (set === "reflexive")
    return all.filter((v) => v.prn).map((v) => (v.prn === "also" ? reflexiveInfinitive(v.infinitive) : v.infinitive));
  if (set === "all") return itVerbList().map((v) => v.infinitive);
  const n = { top25: 25, top50: 50, top100: 100, top250: 250 }[set];
  return all.slice(0, n).map((v) => v.infinitive);
}

export const IT_DRILL_TENSES: TenseId[] = ["pres", "pp", "impf", "fut", "cond", "imp", "impn", "cgpres", "trap", "futant", "condp", "cgpass", "cgimpf", "cgtrap", "pr", "trem"];

export const IT_DRILL_PERSONS: Person[] = PERSONS6;

export type ItDrillOptions = {
  tenses: TenseId[];
  persons: Person[];
  verbs: string[];
  count: number;
  seed?: number;
};

export type ItDrillQuestion = {
  infinitive: string;
  en: string;
  tense: TenseId;
  person: Person;
  /** Subject shown: "lei", "Lei", "(tu)" for the imperative; "" for an impersonal verb. */
  subject: string;
  /** What's shown before the input: "io ", "che lei ", "non " for the negative imperative, "" for the imperative. */
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

const SUBJECTS: Record<Person, string[]> = { io: ["io"], tu: ["tu"], lui: ["lui", "lei", "Lei"], noi: ["noi"], voi: ["voi"], loro: ["loro"] };
const IMP_SUBJECT: Record<Person, string> = { io: "", tu: "tu", lui: "Lei", noi: "noi", voi: "voi", loro: "Loro" };

/**
 * Accepted answers for one cell, without "non" in the negative imperative:
 * both genders of an agreeing participle (or only one, for "lui" / "lei"),
 * both auxiliaries for a verb that takes either, and a second participle
 * ("ho perduto" beside "ho perso").
 */
export function itAnswersFor(inf: string, tense: TenseId, person: Person, subject?: string): string[] {
  const c = conjugate(inf);
  if (!c) return [];
  const cells = [c.tenses[tense]?.[person]];
  if (c.auxAlt && tenseInfo(tense).compound) cells.push(conjugate(inf, c.auxAlt)?.tenses[tense]?.[person]);
  const out: string[] = [];
  for (const cell of cells) {
    if (!cell) continue;
    for (const alt of cell.split(" / ")) {
      const bare = tense === "impn" ? alt.replace(/^non /, "") : alt;
      let forms = genderForms(bare);
      if (forms.length === 2 && subject === "lui") forms = [forms[0]];
      if (forms.length === 2 && subject === "lei") forms = [forms[1]];
      out.push(...forms);
      if (c.participleAlt) out.push(...forms.filter((f) => f.endsWith(c.participle)).map((f) => f.slice(0, -c.participle.length) + c.participleAlt));
    }
  }
  return [...new Set(out)];
}

/** A shuffled drill. Combinations that don't exist (io with the imperative, potere in the imperative, piovere with noi) are skipped. */
export function makeItDrill(opts: ItDrillOptions): ItDrillQuestion[] {
  const rand = rng(opts.seed ?? Date.now());
  const pool: { inf: string; tense: TenseId; person: Person }[] = [];
  const wanted = new Set<Person>(opts.persons);
  for (const inf of opts.verbs) {
    const c = conjugate(inf);
    if (!c) continue;
    for (const tense of opts.tenses) {
      for (const person of personsOf(tense)) {
        // An impersonal verb is asked in its own forms whatever persons are chosen.
        if (!wanted.has(person) && !c.impersonal) continue;
        if (!c.tenses[tense][person]) continue;
        pool.push({ inf, tense, person });
      }
    }
  }
  if (pool.length === 0) return [];
  const questions: ItDrillQuestion[] = [];
  let bag: typeof pool = [];
  let guard = 0;
  while (questions.length < opts.count && guard++ < opts.count * 20) {
    if (bag.length === 0) bag = [...pool];
    const pick = bag.splice(Math.floor(rand() * bag.length), 1)[0];
    const prev = questions[questions.length - 1];
    if (prev && pool.length > 1 && prev.infinitive === pick.inf && prev.tense === pick.tense && prev.person === pick.person) continue;
    const c = conjugate(pick.inf)!;
    const imp = isImperative(pick.tense);
    const options = SUBJECTS[pick.person];
    const subject = imp ? IMP_SUBJECT[pick.person] : c.impersonal ? "" : options[Math.floor(rand() * options.length)];
    const answers = itAnswersFor(pick.inf, pick.tense, pick.person, subject);
    if (answers.length === 0) continue;
    const che = isSubjunctive(pick.tense) ? "che " : "";
    questions.push({
      infinitive: pick.inf,
      en: c.reflexive && c.enSe ? c.enSe : c.en,
      tense: pick.tense,
      person: pick.person,
      subject: imp ? `(${subject})` : subject,
      prefix: pick.tense === "impn" ? "non " : imp ? "" : `${che}${subject ? `${subject} ` : ""}`,
      answers,
    });
  }
  return questions;
}

/** Typed text in one shape: "E'" for "è", elisions spelt out (ce l'ho = ce la ho, se n'è = se ne è). */
const clean = (s: string) =>
  cleanAnswer(s)
    .replace(/(^|\s)e'(?=\s|$)/g, "$1è")
    .replace(/\b([lnc])'\s*/g, (_, l: string) => (l === "l" ? "la " : l === "n" ? "ne " : "ci "))
    .replace(/\s+/g, " ")
    .trim();

/**
 * Grades a typed answer: the form alone or with what comes before it
 * ("ha fatto", "lei ha fatto"; "parli", "tu parli", "che tu parli"; "non
 * parlare"). A difference only in accents or apostrophes is wrong, with a
 * note; any other difference is wrong.
 */
export function gradeItDrillAnswer(q: ItDrillQuestion, typed: string): GradeResult {
  const t = clean(typed);
  if (!t) return { correct: false };
  let accentOnly: string | null = null;
  const subject = q.subject.replace(/[()]/g, "");
  const loose = (s: string) => foldForSearch(s).replace(/'/g, "");
  for (const a of q.answers) {
    const candidates = [a, `${q.prefix}${a}`];
    if (!isImperative(q.tense) && subject) candidates.push(`${subject} ${a}`);
    for (const cand of candidates) {
      const c = clean(cand);
      if (c === t) return { correct: true };
      if (!accentOnly && loose(c) === loose(t)) accentOnly = a;
    }
  }
  if (accentOnly)
    return {
      correct: false,
      note: `Watch the accents and apostrophes: "${accentOnly}". In Italian they can change the word (parlo / parlò, e / è, va / va').`,
    };
  return { correct: false };
}

/** English tense name for chips and question headers ("Present perfect"). */
export function itDrillTenseLabel(t: TenseId): string {
  return tenseInfo(t).en;
}

/** Italian tense name ("Passato prossimo"). */
export function itDrillTenseName(t: TenseId): string {
  return tenseInfo(t).it;
}
