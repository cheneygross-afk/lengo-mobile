// Synced from cheneygross-afk/lengo:src/lib/fr-conjugation/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Types for the French conjugation engine (see conjugate.ts).

// "il" stands for il/elle/on and "ils" for ils/elles. The imperative only
// has tu, nous and vous.
export type Person = "je" | "tu" | "il" | "nous" | "vous" | "ils";

/** The six persons of every finite tense, in table order. */
export const PERSONS6: Person[] = ["je", "tu", "il", "nous", "vous", "ils"];
export const IMP_PERSONS: Person[] = ["tu", "nous", "vous"];

export type Mood = "indicative" | "conditional" | "subjunctive" | "imperative";

export type TenseId =
  | "pres"
  | "pc"
  | "impf"
  | "pqp"
  | "ps"
  | "pa"
  | "fut"
  | "futant"
  | "cond"
  | "condp"
  | "subj"
  | "subjp"
  | "subji"
  | "subjpqp"
  | "imp";

export type TenseInfo = {
  id: TenseId;
  mood: Mood;
  /** English name, e.g. "Imperfect". */
  en: string;
  /** French name, e.g. "Imparfait". */
  fr: string;
  compound: boolean;
  /** Literary only (passé antérieur, imperfect and pluperfect subjunctive). */
  rare?: boolean;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
};

export const TENSES: TenseInfo[] = [
  { id: "pres", mood: "indicative", en: "Present", fr: "Présent", compound: false, level: "A1" },
  { id: "pc", mood: "indicative", en: "Perfect (passé composé)", fr: "Passé composé", compound: true, level: "A1" },
  { id: "impf", mood: "indicative", en: "Imperfect", fr: "Imparfait", compound: false, level: "A2" },
  { id: "pqp", mood: "indicative", en: "Pluperfect", fr: "Plus-que-parfait", compound: true, level: "B1" },
  { id: "fut", mood: "indicative", en: "Future", fr: "Futur simple", compound: false, level: "A2" },
  { id: "futant", mood: "indicative", en: "Future perfect", fr: "Futur antérieur", compound: true, level: "B1" },
  { id: "ps", mood: "indicative", en: "Simple past (written)", fr: "Passé simple", compound: false, level: "B2" },
  { id: "pa", mood: "indicative", en: "Past anterior", fr: "Passé antérieur", compound: true, level: "C1", rare: true },
  { id: "cond", mood: "conditional", en: "Conditional", fr: "Conditionnel présent", compound: false, level: "B1" },
  { id: "condp", mood: "conditional", en: "Conditional perfect", fr: "Conditionnel passé", compound: true, level: "B1" },
  { id: "subj", mood: "subjunctive", en: "Present subjunctive", fr: "Subjonctif présent", compound: false, level: "B1" },
  { id: "subjp", mood: "subjunctive", en: "Past subjunctive", fr: "Subjonctif passé", compound: true, level: "B2" },
  { id: "subji", mood: "subjunctive", en: "Imperfect subjunctive", fr: "Subjonctif imparfait", compound: false, level: "C1", rare: true },
  { id: "subjpqp", mood: "subjunctive", en: "Pluperfect subjunctive", fr: "Subjonctif plus-que-parfait", compound: true, level: "C1", rare: true },
  { id: "imp", mood: "imperative", en: "Imperative", fr: "Impératif", compound: false, level: "A2" },
];

export function tenseInfo(id: TenseId): TenseInfo {
  return TENSES.find((t) => t.id === id)!;
}

/** The persons each tense has, in display order. */
export function personsOf(id: TenseId): Person[] {
  return id === "imp" ? IMP_PERSONS : PERSONS6;
}

/** How a form differs from the regular pattern. */
export type Irregularity = "irregular" | "spelling";

/**
 * A tense's forms, without the subject pronoun but with the reflexive one
 * ("lève", "me lève", "suis allé(e)"); null where the form doesn't exist.
 * One cell may hold two accepted forms, separated by " / " ("paie / paye").
 * After être, (e) and (s) mark the participle's agreement.
 */
export type TenseTable = Partial<Record<Person, string | null>>;

export type FrConjugation = {
  /** "parler", "se lever", "s'en aller". */
  infinitive: string;
  /** Infinitive without the reflexive pronoun ("lever"). */
  base: string;
  pronominal: boolean;
  /** "er", "ir" (finir type when `group` is 2), "re" or "oir". */
  ending: "er" | "ir" | "re" | "oir";
  /** 1: -er, 2: -ir like finir, 3: everything else. */
  group: 1 | 2 | 3;
  /** Auxiliary of the compound tenses as shown in the tables. */
  aux: "avoir" | "être";
  /** Also takes avoir (with a direct object: elle a monté les valises). */
  auxBoth: boolean;
  /** Only used with il (il faut, il pleut). */
  impersonal: boolean;
  en: string;
  /** In the verb list (false: an unknown verb conjugated on the regular pattern). */
  known: boolean;
  participle: string;
  /** "parlant", "se levant"; null for falloir. */
  presentParticiple: string | null;
  /** "avoir parlé", "être allé(e)", "s'être levé(e)". */
  pastInfinitive: string;
  tenses: Record<TenseId, TenseTable>;
  /** For verbs that also take avoir (auxBoth): the compound tenses with avoir. */
  avoirTenses?: Partial<Record<TenseId, TenseTable>>;
  marks: Partial<Record<TenseId | "participle" | "presentParticiple", Partial<Record<Person | "form", Irregularity>>>>;
  /** True if any form is irregular (not just a spelling change). */
  irregular: boolean;
  notes: string[];
};
