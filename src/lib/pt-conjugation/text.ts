// Synced from cheneygross-afk/lengo:src/lib/pt-conjugation/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// Portuguese text helpers for the conjugation tables and drills: subject
// labels, the little word in front of the subjunctive and the personal
// infinitive (que, se, quando, para), the phrase to speak for a table
// cell, accent-insensitive search keys and verb-page slugs. No engine
// data here, so client components can import it cheaply.

import type { Person, TenseId } from "./types";

/** Where the Portuguese conjugation tool lives. */
export const PT_CONJUGATION_PATH = "/lessons/pt/tools/conjugation";

export type SubjectStyle = "table" | "speech";

const LABEL: Record<Person, { table: string; speech: string }> = {
  eu: { table: "eu", speech: "eu" },
  tu: { table: "tu", speech: "tu" },
  ele: { table: "você/ele/ela", speech: "ele" },
  nos: { table: "nós", speech: "nós" },
  vos: { table: "vós", speech: "vós" },
  eles: { table: "vocês/eles/elas", speech: "eles" },
};

/** Who an imperative is addressed to, shown after it: "fale (você)". */
const IMP_LABEL: Record<Person, string> = { eu: "", tu: "tu", ele: "você", nos: "nós", vos: "vós", eles: "vocês" };

/** The table label of a person: "você/ele/ela", "nós". */
export function personLabel(p: Person): string {
  return LABEL[p].table;
}

/** Who an imperative form is for: "você", "vocês", "nós". */
export function impLabel(p: Person): string {
  return IMP_LABEL[p];
}

export function isImperative(t: TenseId): boolean {
  return t === "impa" || t === "impn";
}

/** The word grammars put in front of these forms: "que eu fale", "se eu falasse", "quando eu falar", "para eu falar". */
export function particleOf(t: TenseId): string | null {
  if (t === "sbpres" || t === "sbppc") return "que";
  if (t === "sbimpf" || t === "sbmqp") return "se";
  if (t === "sbfut" || t === "sbfutc") return "quando";
  if (t === "infp") return "para";
  return null;
}

/**
 * The words in front of a form in a table row, ending in a space: "eu ",
 * "você/ele/ela ", "que eu ", "se nós ". Empty for the imperative. With
 * `subject` (drills: "ela", "a gente") that pronoun is used instead of
 * the person's label.
 */
export function subjectPrefix(person: Person, tense: TenseId, style: SubjectStyle = "table", subject?: string): string {
  if (isImperative(tense)) return "";
  const particle = particleOf(tense);
  const who = subject ?? LABEL[person][style];
  return [particle, who].filter(Boolean).map((w) => `${w} `).join("");
}

/** The whole phrase to speak for a table cell: "eu falo", "que ela fale", "não fale". */
export function speechFor(person: Person, tense: TenseId, form: string, subject?: string): string {
  const f = form.split(" / ")[0];
  return `${subjectPrefix(person, tense, "speech", subject)}${f}`.trim();
}

/** Lowercase, accents and cedilla dropped, curly apostrophes straightened: the key for accent-insensitive search ("pôr" -> "por", "começo" -> "comeco"). */
export function foldForSearch(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .normalize("NFC")
    .toLowerCase()
    .trim()
    .replace(/[’‘ʼ`]/g, "'");
}

/** URL segment of a verb's page: "pôr" -> "por", "queixar-se" -> "queixar-se". */
export function ptVerbSlug(infinitive: string): string {
  return foldForSearch(infinitive).replace(/[\s']+/g, "-");
}
