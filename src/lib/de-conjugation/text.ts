// Synced from cheneygross-afk/lengo:src/lib/de-conjugation/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// German text helpers for the conjugation tables and drills: subject
// labels, the phrase to speak for a table cell, umlaut-insensitive search
// keys and verb-page slugs. No engine data here, so client components can
// import it cheaply.

import type { Person, TenseId } from "./types";

/** Where the German conjugation tool lives. */
export const DE_CONJUGATION_PATH = "/lessons/de/tools/conjugation";

export type SubjectStyle = "table" | "speech";

const LABEL: Record<Person, { table: string; speech: string }> = {
  ich: { table: "ich", speech: "ich" },
  du: { table: "du", speech: "du" },
  er: { table: "er/sie/es", speech: "er" },
  wir: { table: "wir", speech: "wir" },
  ihr: { table: "ihr", speech: "ihr" },
  sie: { table: "sie/Sie", speech: "sie" },
  Sie: { table: "Sie", speech: "Sie" },
};

/** The table label of a person: "er/sie/es", "sie/Sie". */
export function personLabel(p: Person): string {
  return LABEL[p].table;
}

/**
 * The words in front of a form in a table row, ending in a space: "ich ",
 * "er/sie/es ". Empty for the imperative (the Sie form carries its own
 * pronoun: "fangen Sie an"). With `subject` (drills: "sie", "es") that
 * pronoun is used instead of the person's label.
 */
export function subjectPrefix(person: Person, tense: TenseId, style: SubjectStyle = "table", subject?: string): string {
  if (tense === "imp") return "";
  return `${subject ?? LABEL[person][style]} `;
}

/** The whole phrase to speak for a table cell: "ich fange an", "er hat gemacht", "fang an". */
export function speechFor(person: Person, tense: TenseId, form: string, subject?: string): string {
  const f = form.split(" / ")[0];
  return `${subjectPrefix(person, tense, "speech", subject)}${f}`.trim();
}

const FOLD_A: Record<string, string> = { ä: "a", ö: "o", ü: "u", ß: "ss" };
const FOLD_E: Record<string, string> = { ä: "ae", ö: "oe", ü: "ue", ß: "ss" };

function base(s: string): string {
  return s
    .normalize("NFC")
    .toLowerCase()
    .trim()
    .replace(/[’‘ʼ`]/g, "'")
    .replace(/·/g, "")
    .replace(/[àáâ]/g, "a")
    .replace(/[èéê]/g, "e");
}

/** Lowercase, umlauts without their dots, ß as ss: the key for umlaut-insensitive search ("fährt" -> "fahrt"). */
export function foldForSearch(s: string): string {
  return base(s).replace(/[äöüß]/g, (c) => FOLD_A[c]);
}

/** Umlauts written out the German way when they can't be typed ("fährt" -> "faehrt", "Straße" -> "strasse"). */
export function transliterate(s: string): string {
  return base(s).replace(/[äöüß]/g, (c) => FOLD_E[c]);
}

/**
 * English with British and American spellings made alike, for searching the
 * (British) glosses: "recognize" finds "to recognise", "analyze" "to
 * analyse", "honor" "to honour", "fulfill" "to fulfil", "practice" "to practise".
 */
export function foldEnglishSpelling(s: string): string {
  return s
    .toLowerCase()
    .replace(/\bpractic(e|es|ed|ing)\b/g, "practis$1")
    .replace(/([a-z]{2})i[sz](e|es|ed|ing|ation|ations)\b/g, "$1iz$2")
    .replace(/([a-z]{2})y[sz](e|es|ed|ing)\b/g, "$1yz$2")
    .replace(/([a-z]{2})our(s|ed|ing|able|ite)?\b/g, "$1or$2")
    .replace(/\b(fulfil|enrol|instil|distil)l/g, "$1")
    .replace(/mould/g, "mold");
}

/** URL segment of a verb's page: "ändern" -> "aendern", "sich freuen" -> "sich-freuen". */
export function deVerbSlug(infinitive: string): string {
  return transliterate(infinitive).replace(/[\s']+/g, "-");
}
