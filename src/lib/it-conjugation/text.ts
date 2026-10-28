// Synced from cheneygross-afk/lengo:src/lib/it-conjugation/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// Italian text helpers for the conjugation tables and drills: subject
// labels, the "che" in front of the subjunctive, the phrase to speak for a
// table cell, the two genders of an agreeing participle ("andato/a"),
// accent-insensitive search keys and verb-page slugs. No engine data here,
// so client components can import it cheaply.

import type { Person, TenseId } from "./types";

/** Where the Italian conjugation tool lives. */
export const IT_CONJUGATION_PATH = "/lessons/it/tools/conjugation";

export type SubjectStyle = "table" | "speech";

const LABEL: Record<Person, { table: string; speech: string }> = {
  io: { table: "io", speech: "io" },
  tu: { table: "tu", speech: "tu" },
  lui: { table: "lui/lei/Lei", speech: "lui" },
  noi: { table: "noi", speech: "noi" },
  voi: { table: "voi", speech: "voi" },
  loro: { table: "loro", speech: "loro" },
};

/** Who an imperative is addressed to, shown after it: "parli (Lei)". */
const IMP_LABEL: Record<Person, string> = { io: "", tu: "tu", lui: "Lei", noi: "noi", voi: "voi", loro: "Loro" };

/** The table label of a person: "lui/lei/Lei", "noi". */
export function personLabel(p: Person): string {
  return LABEL[p].table;
}

/** Who an imperative form is for: "tu", "Lei", "voi". */
export function impLabel(p: Person): string {
  return IMP_LABEL[p];
}

export function isImperative(t: TenseId): boolean {
  return t === "imp" || t === "impn";
}

export function isSubjunctive(t: TenseId): boolean {
  return t === "cgpres" || t === "cgpass" || t === "cgimpf" || t === "cgtrap";
}

/** The word grammars put in front of the subjunctive: "che io parli", "che io parlassi". */
export function particleOf(t: TenseId): string | null {
  return isSubjunctive(t) ? "che" : null;
}

/**
 * The words in front of a form in a table row, ending in a space: "io ",
 * "lui/lei/Lei ", "che io ". Empty for the imperative. With `subject`
 * (drills: "lei", "Lei") that pronoun is used instead of the label; an
 * empty `subject` (impersonal verbs) leaves only "che ".
 */
export function subjectPrefix(person: Person, tense: TenseId, style: SubjectStyle = "table", subject?: string): string {
  if (isImperative(tense)) return "";
  const particle = particleOf(tense);
  const who = subject ?? LABEL[person][style];
  return [particle, who].filter(Boolean).map((w) => `${w} `).join("");
}

/** "andato/a" -> ["andato", "andata"], "andati/e" -> ["andati", "andate"]; other words unchanged. */
export function genderForms(form: string): string[] {
  const m = form.match(/^(.*?)([oi])\/([ae])(\b.*)?$/);
  if (!m) return [form];
  const rest = m[4] ?? "";
  return [`${m[1]}${m[2]}${rest}`, `${m[1]}${m[3]}${rest}`];
}

/** The masculine reading of a form, for speech: "sono andato/a" -> "sono andato". */
export function masculine(form: string): string {
  return genderForms(form)[0];
}

/** The whole phrase to speak for a table cell: "io parlo", "che lei parli", "non parlare". */
export function speechFor(person: Person, tense: TenseId, form: string, subject?: string): string {
  const f = masculine(form.split(" / ")[0]);
  return `${subjectPrefix(person, tense, "speech", subject)}${f}`.trim();
}

/** Lowercase, accents dropped, curly apostrophes straightened: the key for accent-insensitive search ("parlò" -> "parlo"). */
export function foldForSearch(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .normalize("NFC")
    .toLowerCase()
    .trim()
    .replace(/[’‘ʼ`]/g, "'");
}

/** URL segment of a verb's page: "parlare", "alzarsi", "andarsene". */
export function itVerbSlug(infinitive: string): string {
  return foldForSearch(infinitive).replace(/[\s']+/g, "-");
}
