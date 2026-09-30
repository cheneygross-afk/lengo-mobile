// Synced from cheneygross-afk/lengo:src/lib/conjugation/drill.ts by scripts/sync-content.mjs -- edit it there, not here.
// Typed conjugation drills: pick tenses, persons and a set of verbs, get
// questions like "tener · Preterite · nosotros", graded with the same
// grader as the lessons (src/lib/grading.ts).

import { gradeFreeText, type GradeResult } from "../grading";
import { conjugate, specFor } from "./conjugate";
import { verbList } from "./lookup";
import { personsOf, tenseInfo, type Person, type TenseId } from "./types";

export type VerbSetId = "top50" | "top100" | "top300" | "irregular";

export const VERB_SETS: { id: VerbSetId; label: string }[] = [
  { id: "top50", label: "Top 50 verbs" },
  { id: "top100", label: "Top 100 verbs" },
  { id: "top300", label: "Top 300 verbs" },
  { id: "irregular", label: "Irregular verbs only" },
];

/** The infinitives in a verb set, most frequent first. */
export function verbsInSet(set: VerbSetId): string[] {
  const all = verbList();
  if (set === "irregular") return all.filter((v) => v.irregular).map((v) => v.infinitive);
  const n = set === "top50" ? 50 : set === "top100" ? 100 : 300;
  return all.slice(0, n).map((v) => v.infinitive);
}

/** Tenses offered in the drill picker. The -se imperfect subjunctive is accepted wherever the -ra one is asked. */
export const DRILL_TENSES: TenseId[] = [
  "pres", "pret", "impf", "fut", "cond", "pperf", "plup", "futperf", "condperf",
  "spres", "simpfRa", "spperf", "splupRa", "impAff", "impNeg",
];

export const DRILL_PERSONS: Person[] = ["yo", "tu", "vos", "el", "nos", "vosotros", "ellos"];

export type DrillOptions = {
  tenses: TenseId[];
  persons: Person[];
  verbs: string[];
  count: number;
  seed?: number;
};

export type DrillQuestion = {
  infinitive: string;
  en: string;
  tense: TenseId;
  person: Person;
  /** The subject shown in the question: "ella", "ustedes", "tú". */
  subject: string;
  /** Accepted answers; the first is the one shown as the answer. */
  answers: string[];
};

// Weather verbs only have an él/ella form in use; soler is used in the
// present and imperfect.
const ONLY_EL = new Set(["llover", "nevar", "amanecer"]);
const ONLY_TENSES: Record<string, TenseId[]> = { soler: ["pres", "impf", "pperf"] };

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
  yo: ["yo"],
  tu: ["tú"],
  vos: ["vos"],
  el: ["él", "ella", "usted"],
  nos: ["nosotros", "nosotras"],
  vosotros: ["vosotros", "vosotras"],
  ellos: ["ellos", "ellas", "ustedes"],
};

const PAIRED: Partial<Record<TenseId, TenseId>> = { simpfRa: "simpfSe", simpfSe: "simpfRa", splupRa: "splupSe", splupSe: "splupRa" };

function answersFor(inf: string, tense: TenseId, person: Person): string[] {
  const c = conjugate(inf);
  const form = c?.tenses[tense][person];
  if (!c || !form) return [];
  const out = form.split(" / ");
  const pair = PAIRED[tense];
  if (pair) out.push(...(c.tenses[pair][person] ?? "").split(" / ").filter(Boolean));
  if (tense === "impNeg") out.push(...out.map((f) => f.replace(/^no /, "")));
  return [...new Set(out)];
}

/** A shuffled drill. Combinations that don't exist (vos outside the present and commands, yo commands) are skipped. */
export function makeDrill(opts: DrillOptions): DrillQuestion[] {
  const rand = rng(opts.seed ?? Date.now());
  const pool: { inf: string; tense: TenseId; person: Person }[] = [];
  for (const inf of opts.verbs) {
    const base = inf.replace(/se$/, "");
    if (!specFor(base) && !specFor(inf)) continue;
    for (const tense of opts.tenses) {
      if (ONLY_TENSES[base] && !ONLY_TENSES[base].includes(tense)) continue;
      for (const person of opts.persons) {
        if (!personsOf(tense).includes(person)) continue;
        if (ONLY_EL.has(base) && person !== "el") continue;
        pool.push({ inf, tense, person });
      }
    }
  }
  if (pool.length === 0) return [];
  const questions: DrillQuestion[] = [];
  let bag: typeof pool = [];
  while (questions.length < opts.count) {
    if (bag.length === 0) bag = [...pool];
    const i = Math.floor(rand() * bag.length);
    const pick = bag.splice(i, 1)[0];
    const prev = questions[questions.length - 1];
    if (prev && pool.length > 1 && prev.infinitive === pick.inf && prev.tense === pick.tense && prev.person === pick.person) continue;
    const answers = answersFor(pick.inf, pick.tense, pick.person);
    if (answers.length === 0) {
      pool.splice(pool.indexOf(pick), 1);
      if (pool.length === 0) break;
      continue;
    }
    const imperative = pick.tense === "impAff" || pick.tense === "impNeg";
    const subjects = imperative
      ? [{ tu: "tú", vos: "vos", el: "usted", nos: "nosotros", vosotros: "vosotros", ellos: "ustedes", yo: "yo" }[pick.person]]
      : SUBJECTS[pick.person];
    questions.push({
      infinitive: pick.inf,
      en: conjugate(pick.inf)!.en,
      tense: pick.tense,
      person: pick.person,
      subject: subjects[Math.floor(rand() * subjects.length)],
      answers,
    });
  }
  return questions;
}

/** Grades a typed answer; a subject pronoun in front is fine ("yo tengo"). */
export function gradeDrillAnswer(q: DrillQuestion, typed: string): GradeResult {
  return gradeFreeText(typed, q.answers, { lang: "es", pronouns: true });
}

/** "Preterite" / "Negative commands", for question headers. */
export function drillTenseLabel(t: TenseId): string {
  if (t === "simpfRa") return "Imperfect subjunctive";
  if (t === "splupRa") return "Pluperfect subjunctive";
  return tenseInfo(t).en;
}
