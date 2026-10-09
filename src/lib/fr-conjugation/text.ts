// Synced from cheneygross-afk/lengo:src/lib/fr-conjugation/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// French text helpers for the conjugation tables and drills: elision
// (j'aime, qu'il, m'habille), subject labels, agreement of the participle
// after être, and accent-free search keys. No engine data here, so client
// components can import it cheaply.

import type { Person, TenseId } from "./types";

/** Where the French conjugation tool lives. */
export const FR_CONJUGATION_PATH = "/lessons/fr/tools/conjugation";

// Verbs whose h is "aspiré": no elision (je hais, je me hâte).
const H_ASPIRE = /^h(ai|aï|url|ât|âte|auss|ant|arc|ach|iss|eurt|asard|al[eè]t|onn)/i;

/** True when a word elides the word before it (aime, habite; not hais). */
export function elides(word: string): boolean {
  if (!word) return false;
  const w = word.toLowerCase();
  if (w[0] === "h") return !H_ASPIRE.test(w);
  return /^[aeiouyàâäéèêëîïôöùûüœæ]/.test(w);
}

/** "je" + "aime" -> "j'aime"; "me" + "habille" -> "m'habille". */
export function joinElided(small: string, word: string): string {
  if (/^(je|me|te|se|que|ne|de|le)$/.test(small) && elides(word)) return `${small.slice(0, -1)}'${word}`;
  return `${small} ${word}`;
}

export type SubjectStyle = "table" | "speech";

const LABEL: Record<Person, { table: string; speech: string }> = {
  je: { table: "je", speech: "je" },
  tu: { table: "tu", speech: "tu" },
  il: { table: "il/elle/on", speech: "il" },
  nous: { table: "nous", speech: "nous" },
  vous: { table: "vous", speech: "vous" },
  ils: { table: "ils/elles", speech: "ils" },
};

/**
 * The words in front of a form in a table row, ending in a space or an
 * apostrophe: "je ", "j'", "il/elle/on ", "que j'", "qu'ils/elles ".
 * Empty for the imperative. With `subject` (drills: "elle", "on") that
 * pronoun is used instead of the person's label.
 */
export function subjectPrefix(person: Person, tense: TenseId, form: string, style: SubjectStyle = "table", subject?: string): string {
  if (tense === "imp") return "";
  const first = form.split(" ")[0];
  let s = subject ?? LABEL[person][style];
  if (s === "je" && elides(first)) s = "j'";
  else s = `${s} `;
  if (tense === "subj" || tense === "subjp" || tense === "subji" || tense === "subjpqp") {
    s = /^(il|elle|on|ils|elles)/.test(s) ? `qu'${s}` : `que ${s}`;
  }
  return s;
}

/** Forms with the participle's agreement marks dropped ("allé(e)s" -> "allé"), for speech. */
export function masculine(form: string): string {
  return form.replace(/\([^)]*\)/g, "");
}

/** The whole phrase to speak for a table cell: "j'aime", "qu'il soit allé". */
export function speechFor(person: Person, tense: TenseId, form: string): string {
  const f = masculine(form.split(" / ")[0]);
  return `${subjectPrefix(person, tense, f, "speech")}${f}`.trim();
}

export type Agreement = { g: "m" | "f"; n: "s" | "p" };

/** "allé(e)s" with g=f, n=p -> "allées"; "assis(e)(s)" with m, p -> "assis". */
export function agree(form: string, a: Agreement): string {
  return form
    .replace(/\(es\)/g, a.g === "f" ? "es" : "")
    .replace(/\(e\)/g, a.g === "f" ? "e" : "")
    .replace(/\(s\)/g, a.n === "p" ? "s" : "")
    .replace(/ss\b/g, "s");
}

/** Every agreement a subject allows: "elle" -> feminine singular. */
export function agreementsFor(person: Person, subject: string): Agreement[] {
  const all: Agreement[] = [
    { g: "m", n: "s" },
    { g: "f", n: "s" },
    { g: "m", n: "p" },
    { g: "f", n: "p" },
  ];
  switch (subject) {
    case "il":
      return [all[0]];
    case "elle":
      return [all[1]];
    case "ils":
      return [all[2]];
    case "elles":
      return [all[3]];
    case "on":
      return all;
  }
  if (person === "vous") return all;
  if (person === "nous" || person === "ils") return [all[2], all[3]];
  return [all[0], all[1]];
}

const FOLD: Record<string, string> = {
  à: "a", â: "a", ä: "a", ç: "c", é: "e", è: "e", ê: "e", ë: "e", î: "i", ï: "i", ô: "o", ö: "o", ù: "u", û: "u", ü: "u", ÿ: "y", œ: "oe", æ: "ae",
};

/** Lowercase, accents dropped, curly apostrophes straightened: the key for accent-insensitive search. */
export function foldForSearch(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[’‘ʼ`]/g, "'")
    .replace(/[àâäçéèêëîïôöùûüÿœæ]/g, (c) => FOLD[c] ?? c);
}

/** URL segment of a verb's page: "connaître" -> "connaitre", "s'asseoir" -> "s-asseoir", "se souvenir" -> "se-souvenir". */
export function frVerbSlug(infinitive: string): string {
  return foldForSearch(infinitive).replace(/['\s]+/g, "-");
}
