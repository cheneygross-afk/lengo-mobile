// Synced from cheneygross-afk/lengo:src/lib/de-conjugation/drill.ts by scripts/sync-content.mjs -- edit it there, not here.
// Typed German conjugation drills: pick tenses, persons and a set of
// verbs, get questions like "anfangen · Present · er". The answer may be
// typed with or without its subject ("fängt an" or "er fängt an"); ae, oe,
// ue and ss count for ä, ö, ü and ß, but a missing umlaut is wrong (it is
// often the whole point: hatte / hätte, wurde / würde).

import { cleanAnswer, type GradeResult } from "../grading";
import { conjugate } from "./conjugate";
import { deVerbList } from "./lookup";
import { foldForSearch, subjectPrefix, transliterate } from "./text";
import { personsOf, tenseInfo, type Person, type TenseId } from "./types";

export type DeVerbSetId = "top25" | "top50" | "top100" | "top250" | "all" | "irregular" | "modal";

export const DE_VERB_SETS: { id: DeVerbSetId; label: string }[] = [
  { id: "top25", label: "Top 25 verbs" },
  { id: "top50", label: "Top 50 verbs" },
  { id: "top100", label: "Top 100 verbs" },
  { id: "top250", label: "Top 250 verbs" },
  { id: "all", label: "All verbs" },
  { id: "irregular", label: "Strong & irregular verbs only" },
  { id: "modal", label: "sein, haben, werden & the modals" },
];

const CORE = ["sein", "haben", "werden", "können", "müssen", "dürfen", "sollen", "wollen", "mögen", "wissen"];

/** The display infinitives in a verb set, most frequent first. */
export function deVerbsInSet(set: DeVerbSetId): string[] {
  const all = deVerbList();
  if (set === "irregular") return all.filter((v) => v.irregular).map((v) => v.infinitive);
  if (set === "modal") return CORE;
  if (set === "all") return all.map((v) => v.infinitive);
  const n = { top25: 25, top50: 50, top100: 100, top250: 250 }[set];
  return all.slice(0, n).map((v) => v.infinitive);
}

export const DE_DRILL_TENSES: TenseId[] = ["pres", "perf", "praet", "fut1", "k2w", "k2", "imp", "pqp", "fut2", "k1", "k2p"];

/** The persons offered in the drill settings; "sie" also covers the imperative's Sie. */
export const DE_DRILL_PERSONS: Person[] = ["ich", "du", "er", "wir", "ihr", "sie"];

export type DeDrillOptions = {
  tenses: TenseId[];
  persons: Person[];
  verbs: string[];
  count: number;
  seed?: number;
};

export type DeDrillQuestion = {
  infinitive: string;
  en: string;
  tense: TenseId;
  person: Person;
  /** Subject shown: "sie", "es", "(du)" for the imperative. */
  subject: string;
  /** What's shown before the input: "ich ", "es ", "" for the imperative. */
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
  ich: ["ich"],
  du: ["du"],
  er: ["er", "sie", "es"],
  wir: ["wir"],
  ihr: ["ihr"],
  sie: ["sie", "Sie"],
  Sie: ["Sie"],
};

/** Accepted answers for one cell (both auxiliaries for verbs like fahren). */
export function deAnswersFor(inf: string, tense: TenseId, person: Person): string[] {
  const c = conjugate(inf);
  if (!c) return [];
  const cells = [c.tenses[tense]?.[person], c.altAuxTenses?.[tense]?.[person]].filter((x): x is string => !!x);
  const out = cells.flatMap((cell) => cell.split(" / "));
  // gäbest / gäbst, gäbet / gäbt: the short Konjunktiv II forms are fine too.
  if (tense === "k2" && c.kind === "strong" && (person === "du" || person === "ihr")) {
    for (const a of [...out]) {
      const [w, ...rest] = a.split(" ");
      const short = w.replace(/e(st|t)$/, "$1");
      if (short !== w && !/[td]e(st|t)$/.test(w)) out.push([short, ...rest].join(" "));
    }
  }
  return [...new Set(out)];
}

/**
 * A shuffled drill. Combinations that don't exist (ich with the
 * imperative, modals in the imperative, es regnet with wir) are skipped,
 * and so is the Konjunktiv II of weak verbs, which is just the Präteritum.
 */
export function makeDeDrill(opts: DeDrillOptions): DeDrillQuestion[] {
  const rand = rng(opts.seed ?? Date.now());
  const pool: { inf: string; tense: TenseId; person: Person }[] = [];
  const wanted = new Set<Person>(opts.persons);
  if (wanted.has("sie")) wanted.add("Sie");
  for (const inf of opts.verbs) {
    const c = conjugate(inf);
    if (!c) continue;
    for (const tense of opts.tenses) {
      if (tense === "k2" && c.kind === "weak") continue;
      for (const person of personsOf(tense)) {
        if (!wanted.has(person)) continue;
        if (!c.tenses[tense][person]) continue;
        pool.push({ inf, tense, person });
      }
    }
  }
  if (pool.length === 0) return [];
  const questions: DeDrillQuestion[] = [];
  let bag: typeof pool = [];
  let guard = 0;
  while (questions.length < opts.count && guard++ < opts.count * 20) {
    if (bag.length === 0) bag = [...pool];
    const pick = bag.splice(Math.floor(rand() * bag.length), 1)[0];
    const prev = questions[questions.length - 1];
    if (prev && pool.length > 1 && prev.infinitive === pick.inf && prev.tense === pick.tense && prev.person === pick.person) continue;
    const c = conjugate(pick.inf)!;
    const subjects = c.impersonal ? ["es"] : SUBJECTS[pick.person];
    const subject = pick.tense === "imp" ? pick.person : subjects[Math.floor(rand() * subjects.length)];
    const answers = deAnswersFor(pick.inf, pick.tense, pick.person);
    if (answers.length === 0) continue;
    questions.push({
      infinitive: pick.inf,
      en: c.en,
      tense: pick.tense,
      person: pick.person,
      subject: pick.tense === "imp" ? `(${subject})` : subject,
      prefix: subjectPrefix(pick.person, pick.tense, "speech", subject),
      answers,
    });
  }
  return questions;
}

const clean = (s: string) =>
  cleanAnswer(s)
    .replace(/[!„]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Grades a typed answer: the form alone or with its subject ("fängt an",
 * "er fängt an"). ae/oe/ue/ss for ä/ö/ü/ß are fine; a dropped umlaut is
 * wrong, with a note saying so; any other difference is wrong.
 */
export function gradeDeDrillAnswer(q: DeDrillQuestion, typed: string): GradeResult {
  const t = clean(typed);
  if (!t) return { correct: false };
  let umlautOnly: string | null = null;
  for (const a of q.answers) {
    const subject = q.subject.replace(/[()]/g, "");
    const candidates = [a, `${subjectPrefix(q.person, q.tense, "speech", subject)}${a}`];
    for (const cand of candidates) {
      const c = clean(cand);
      if (c === t || transliterate(c) === transliterate(t)) return { correct: true };
      if (!umlautOnly && foldForSearch(c) === foldForSearch(t)) umlautOnly = a;
    }
  }
  if (umlautOnly) return { correct: false, note: `Watch the umlaut: "${umlautOnly}". In German it changes the form (hatte / hätte).` };
  return { correct: false };
}

/** English tense name for chips and question headers ("Simple past (written past)"). */
export function deDrillTenseLabel(t: TenseId): string {
  return tenseInfo(t).en;
}

/** German tense name ("Präteritum"). */
export function deDrillTenseName(t: TenseId): string {
  return tenseInfo(t).de;
}
