// Synced from cheneygross-afk/lengo:src/lib/conjugation/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Types for the Spanish conjugation engine (see conjugate.ts).

// "el" stands for él/ella/usted and "ellos" for ellos/ellas/ustedes. In the
// imperative, "el" is the usted command and "ellos" the ustedes command.
// "vos" appears only where voseo has its own forms: the present indicative
// and the imperative. Everywhere else vos uses the tú form.
export type Person = "yo" | "tu" | "vos" | "el" | "nos" | "vosotros" | "ellos";

/** The six persons of every finite tense, in table order. */
export const PERSONS6: Person[] = ["yo", "tu", "el", "nos", "vosotros", "ellos"];

export type Mood = "indicative" | "subjunctive" | "conditional" | "imperative";

export type TenseId =
  | "pres"
  | "pret"
  | "impf"
  | "fut"
  | "pperf"
  | "plup"
  | "pant"
  | "futperf"
  | "cond"
  | "condperf"
  | "spres"
  | "simpfRa"
  | "simpfSe"
  | "sfut"
  | "spperf"
  | "splupRa"
  | "splupSe"
  | "sfutperf"
  | "impAff"
  | "impNeg";

export type TenseInfo = {
  id: TenseId;
  mood: Mood;
  /** English name, e.g. "Preterite". */
  en: string;
  /** Spanish name, e.g. "Pretérito perfecto simple". */
  es: string;
  compound: boolean;
  /** Only in legal and literary Spanish (the future subjunctive). */
  archaic?: boolean;
  /** Level where the course teaches it (for drills and ordering). */
  level: "A1" | "A2" | "B1" | "B2" | "C1";
};

export const TENSES: TenseInfo[] = [
  { id: "pres", mood: "indicative", en: "Present", es: "Presente", compound: false, level: "A1" },
  { id: "pret", mood: "indicative", en: "Preterite", es: "Pretérito perfecto simple", compound: false, level: "A2" },
  { id: "impf", mood: "indicative", en: "Imperfect", es: "Pretérito imperfecto", compound: false, level: "A2" },
  { id: "fut", mood: "indicative", en: "Future", es: "Futuro simple", compound: false, level: "B1" },
  { id: "pperf", mood: "indicative", en: "Present perfect", es: "Pretérito perfecto compuesto", compound: true, level: "A2" },
  { id: "plup", mood: "indicative", en: "Pluperfect", es: "Pretérito pluscuamperfecto", compound: true, level: "B1" },
  { id: "futperf", mood: "indicative", en: "Future perfect", es: "Futuro compuesto", compound: true, level: "B2" },
  { id: "pant", mood: "indicative", en: "Past anterior", es: "Pretérito anterior", compound: true, level: "C1", archaic: true },
  { id: "cond", mood: "conditional", en: "Conditional", es: "Condicional simple", compound: false, level: "B1" },
  { id: "condperf", mood: "conditional", en: "Conditional perfect", es: "Condicional compuesto", compound: true, level: "B2" },
  { id: "spres", mood: "subjunctive", en: "Present subjunctive", es: "Presente de subjuntivo", compound: false, level: "B1" },
  { id: "simpfRa", mood: "subjunctive", en: "Imperfect subjunctive (-ra)", es: "Pretérito imperfecto de subjuntivo (-ra)", compound: false, level: "B2" },
  { id: "simpfSe", mood: "subjunctive", en: "Imperfect subjunctive (-se)", es: "Pretérito imperfecto de subjuntivo (-se)", compound: false, level: "B2" },
  { id: "spperf", mood: "subjunctive", en: "Present perfect subjunctive", es: "Pretérito perfecto de subjuntivo", compound: true, level: "B1" },
  { id: "splupRa", mood: "subjunctive", en: "Pluperfect subjunctive (-ra)", es: "Pretérito pluscuamperfecto de subjuntivo (-ra)", compound: true, level: "B2" },
  { id: "splupSe", mood: "subjunctive", en: "Pluperfect subjunctive (-se)", es: "Pretérito pluscuamperfecto de subjuntivo (-se)", compound: true, level: "B2" },
  { id: "sfut", mood: "subjunctive", en: "Future subjunctive", es: "Futuro de subjuntivo", compound: false, level: "C1", archaic: true },
  { id: "sfutperf", mood: "subjunctive", en: "Future perfect subjunctive", es: "Futuro compuesto de subjuntivo", compound: true, level: "C1", archaic: true },
  { id: "impAff", mood: "imperative", en: "Affirmative commands", es: "Imperativo afirmativo", compound: false, level: "A2" },
  { id: "impNeg", mood: "imperative", en: "Negative commands", es: "Imperativo negativo", compound: false, level: "A2" },
];

export function tenseInfo(id: TenseId): TenseInfo {
  return TENSES.find((t) => t.id === id)!;
}

/** The persons each tense has, in display order. */
export function personsOf(id: TenseId): Person[] {
  if (id === "pres") return ["yo", "tu", "vos", "el", "nos", "vosotros", "ellos"];
  if (id === "impAff" || id === "impNeg") return ["tu", "vos", "el", "nos", "vosotros", "ellos"];
  return PERSONS6;
}

/** The pronoun label for a person in a given tense. */
export function personLabel(person: Person, tense?: TenseId): string {
  const imperative = tense === "impAff" || tense === "impNeg";
  switch (person) {
    case "yo":
      return "yo";
    case "tu":
      return "tú";
    case "vos":
      return "vos";
    case "el":
      return imperative ? "usted" : "él/ella/usted";
    case "nos":
      return "nosotros";
    case "vosotros":
      return "vosotros";
    case "ellos":
      return imperative ? "ustedes" : "ellos/ellas/ustedes";
  }
}

/** How a form differs from the regular pattern for its ending. */
export type Irregularity = "irregular" | "spelling";

/** One cell may hold two accepted forms, separated by " / " ("frito / freído"). */
export type TenseTable = Partial<Record<Person, string | null>>;

export type Conjugation = {
  infinitive: string;
  /** Infinitive without "se" for a pronominal verb. */
  base: string;
  pronominal: boolean;
  /** "-ar", "-er" or "-ir". */
  ending: "ar" | "er" | "ir";
  gerund: string;
  participle: string;
  tenses: Record<TenseId, TenseTable>;
  /** Forms that don't follow the regular pattern. */
  marks: Partial<Record<TenseId | "gerund" | "participle", Partial<Record<Person | "form", Irregularity>>>>;
  /** True if any form is irregular (not just a spelling change). */
  irregular: boolean;
  notes: string[];
};
