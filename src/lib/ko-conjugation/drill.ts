// Synced from cheneygross-afk/lengo:src/lib/ko-conjugation/drill.ts by scripts/sync-content.mjs -- edit it there, not here.
// Typed Korean conjugation drills: pick the forms, the words (by course
// level, verbs or adjectives, irregular only) and how many questions; each
// question names a word and a form, and the learner types the Korean on
// the Hangul keyboard. Graded with the course's "ko" rules (spaces and
// punctuation ignored) against the form and every other right spelling.
import { gradeFreeText } from "@/lib/grading";
import { conjugate } from "./conjugate";
import { KO_WORDS } from "./verbs";
import { LEVELS, OTHER_FORMS, TENSES, type FormId, type KoWord, type Level, type LevelCode, type Tense } from "./types";

/** Forms offered in the drill, in the order a learner meets them. */
export const KO_DRILL_FORMS: FormId[] = [
  "present.haeyo",
  "past.haeyo",
  "future.haeyo",
  "negPresent.haeyo",
  "progressive.haeyo",
  "present.hamnida",
  "past.hamnida",
  "present.banmal",
  "past.banmal",
  "present.handa",
  "past.handa",
  "hon.present.haeyo",
  "hon.past.haeyo",
  "hon.present.hamnida",
  "go",
  "aseo",
  "nikka",
  "myeon",
  "neunde",
  "jiman",
  "modPresent",
  "modPast",
  "modFuture",
  "want",
  "can",
  "must",
  "request",
  "letsFormal",
  "promise",
];

export const KO_DRILL_DEFAULT: FormId[] = ["present.haeyo", "past.haeyo", "future.haeyo", "hon.present.haeyo"];

/** Short label for a form: "Past · Polite (해요체)", "Honorific present · Formal (합니다체)", "-아서/어서 (so, and then)". */
export function formLabel(id: FormId): string {
  const parts = id.split(".");
  if (parts.length === 1) {
    const o = OTHER_FORMS.find((x) => x.id === id)!;
    return `${o.ko} (${o.en})`;
  }
  const hon = parts[0] === "hon";
  const [t, l] = (hon ? parts.slice(1) : parts) as [Tense, Level];
  const tense = TENSES.find((x) => x.id === t)!.en;
  const level = LEVELS.find((x) => x.id === l)!;
  return `${hon ? `Honorific ${tense.toLowerCase()}` : tense} · ${level.en} (${level.ko})`;
}

/** Shorter label for drill chips. */
export function chipLabel(id: FormId): string {
  const parts = id.split(".");
  if (parts.length === 1) return OTHER_FORMS.find((x) => x.id === id)!.ko;
  const hon = parts[0] === "hon";
  const [t, l] = (hon ? parts.slice(1) : parts) as [Tense, Level];
  const tense = { present: "Present", past: "Past", future: "Future", progressive: "-고 있다", negPresent: "안 negative", negPast: "Past negative" }[t];
  return `${hon ? "Honorific " + tense.toLowerCase() : tense} ${LEVELS.find((x) => x.id === l)!.ko}`;
}

/** Nouns the 이다 questions put in front of it. */
const NOUNS = ["학생", "의사", "친구", "회사원", "가수", "선생님", "주부", "간호사", "요리사", "경찰"];

export type KoWordSet = "all" | "verbs" | "adjectives" | "irregular";

export type KoDrillOptions = {
  forms: FormId[];
  levels: LevelCode[];
  set: KoWordSet;
  count: number;
  /** Drill just these words (the drill on a word's own page). */
  only?: KoWord[];
};

export type KoDrillQuestion = {
  word: KoWord;
  id: FormId;
  /** For 이다: the noun it follows. */
  noun?: string;
  answer: string;
  answers: string[];
  irregular: boolean;
};

function pool(o: KoDrillOptions): KoWord[] {
  if (o.only?.length) return o.only;
  return KO_WORDS.filter((w) => {
    if (!o.levels.includes(w.level)) return false;
    if (o.set === "verbs") return w.pos === "verb";
    if (o.set === "adjectives") return w.pos === "adj" || w.pos === "exist";
    if (o.set === "irregular") return w.irr !== "regular" || !!w.hon;
    return true;
  });
}

const pick = <T,>(xs: T[]): T => xs[Math.floor(Math.random() * xs.length)];

/** A set of questions, no word asked twice in a row, irregular words a little more often. */
export function makeKoDrill(o: KoDrillOptions): KoDrillQuestion[] {
  const words = pool(o);
  const out: KoDrillQuestion[] = [];
  const seen = new Set<string>();
  for (let tries = 0; out.length < o.count && tries < o.count * 40 && words.length > 0; tries++) {
    const w = pick(words);
    if (w.irr === "regular" && !w.hon && Math.random() < 0.3 && !o.only) continue;
    const noun = w.pos === "copula" ? pick(NOUNS) : undefined;
    const c = conjugate(w, noun);
    const ids = o.forms.filter((id) => c.forms[id]);
    if (ids.length === 0) continue;
    const id = pick(ids);
    const key = `${w.slug}|${id}|${noun ?? ""}`;
    if (seen.has(key) && seen.size < words.length * ids.length) continue;
    if (out.length && out[out.length - 1].word === w && words.length > 1) continue;
    seen.add(key);
    const form = c.forms[id]!;
    out.push({ word: w, id, noun, answer: form.text, answers: [form.text, ...(form.alt ?? [])], irregular: !!form.irregular });
  }
  return out;
}

export type KoDrillGrade = { correct: boolean; note?: string };

/** Right if it matches the form or another right spelling, ignoring spaces and punctuation. */
export function gradeKoDrill(typed: string, q: KoDrillQuestion): KoDrillGrade {
  return gradeFreeText(typed, q.answers, { lang: "ko" });
}
