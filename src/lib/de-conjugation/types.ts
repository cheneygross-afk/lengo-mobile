// Synced from cheneygross-afk/lengo:src/lib/de-conjugation/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Types for the German conjugation engine (see conjugate.ts).

// "er" stands for er/sie/es and "sie" for sie/Sie (plural and formal you).
// The imperative has du, ihr and the formal Sie.
export type Person = "ich" | "du" | "er" | "wir" | "ihr" | "sie" | "Sie";

/** The six persons of every finite tense, in table order. */
export const PERSONS6: Person[] = ["ich", "du", "er", "wir", "ihr", "sie"];
export const IMP_PERSONS: Person[] = ["du", "ihr", "Sie"];

export type Mood = "indicative" | "subjunctive2" | "subjunctive1" | "imperative";

export type TenseId =
  | "pres"
  | "perf"
  | "praet"
  | "pqp"
  | "fut1"
  | "fut2"
  | "k2"
  | "k2w"
  | "k2p"
  | "k1"
  | "k1p"
  | "imp";

export type TenseInfo = {
  id: TenseId;
  mood: Mood;
  /** English name, e.g. "Simple past". */
  en: string;
  /** German name, e.g. "Präteritum". */
  de: string;
  compound: boolean;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
};

export const TENSES: TenseInfo[] = [
  { id: "pres", mood: "indicative", en: "Present", de: "Präsens", compound: false, level: "A1" },
  { id: "perf", mood: "indicative", en: "Perfect (spoken past)", de: "Perfekt", compound: true, level: "A1" },
  { id: "praet", mood: "indicative", en: "Simple past (written past)", de: "Präteritum", compound: false, level: "A2" },
  { id: "pqp", mood: "indicative", en: "Pluperfect", de: "Plusquamperfekt", compound: true, level: "B1" },
  { id: "fut1", mood: "indicative", en: "Future", de: "Futur I", compound: true, level: "A2" },
  { id: "fut2", mood: "indicative", en: "Future perfect", de: "Futur II", compound: true, level: "B2" },
  { id: "k2", mood: "subjunctive2", en: "Subjunctive II", de: "Konjunktiv II", compound: false, level: "B1" },
  { id: "k2w", mood: "subjunctive2", en: "Conditional (würde)", de: "würde-Form", compound: true, level: "A2" },
  { id: "k2p", mood: "subjunctive2", en: "Past subjunctive II", de: "Konjunktiv II Vergangenheit", compound: true, level: "B1" },
  { id: "k1", mood: "subjunctive1", en: "Subjunctive I (reported speech)", de: "Konjunktiv I", compound: false, level: "B2" },
  { id: "k1p", mood: "subjunctive1", en: "Past subjunctive I", de: "Konjunktiv I Vergangenheit", compound: true, level: "C1" },
  { id: "imp", mood: "imperative", en: "Imperative", de: "Imperativ", compound: false, level: "A1" },
];

export function tenseInfo(id: TenseId): TenseInfo {
  return TENSES.find((t) => t.id === id)!;
}

/** The persons each tense has, in display order. */
export function personsOf(id: TenseId): Person[] {
  return id === "imp" ? IMP_PERSONS : PERSONS6;
}

/** How a form differs from the regular (weak) pattern. */
export type Irregularity = "irregular" | "spelling";

/**
 * A tense's forms, without the subject pronoun but with the reflexive
 * pronoun and the separable prefix in main-clause order ("fange an",
 * "freue mich", "habe mich gefreut", "fangen Sie an"); null where the form
 * doesn't exist. One cell may hold two accepted forms, separated by " / "
 * ("mach / mache").
 */
export type TenseTable = Partial<Record<Person, string | null>>;

export type VerbKind = "weak" | "strong" | "mixed" | "modal" | "irregular";

export type DeConjugation = {
  /** "machen", "anfangen", "sich freuen". */
  infinitive: string;
  /** Infinitive without sich ("freuen", "anziehen"). */
  base: string;
  reflexive: boolean;
  /** Case of the reflexive pronoun: "mich" (acc) or "mir" (dat). */
  reflexiveCase: "acc" | "dat";
  /** Separable prefix ("an" in anfangen), if any. */
  separable: string | null;
  /** Inseparable prefix ("ver" in verstehen), if any. */
  inseparable: string | null;
  kind: VerbKind;
  /** A verb in -ieren (studieren): weak, no ge- in the participle. */
  ieren: boolean;
  /** Auxiliary of the compound tenses as shown in the tables. */
  aux: "haben" | "sein";
  /** Also takes the other auxiliary in some uses (ich bin/habe gefahren). */
  auxAlt: "haben" | "sein" | null;
  /** Only used with es (es regnet). */
  impersonal: boolean;
  en: string;
  /** In the verb list (false: an unknown verb conjugated on the regular pattern). */
  known: boolean;
  /** The strong/irregular verb it is built on ("fangen" for anfangen), if different. */
  model: string | null;
  /** Principal parts: infinitive, er form of the present, er form of the Präteritum, Partizip II with its auxiliary. */
  principal: { infinitive: string; present: string; preterite: string; participle: string };
  /** "machend", "anfangend", "sich freuend". */
  partizip1: string;
  /** "gemacht", "angefangen". */
  partizip2: string;
  /** "zu machen", "anzufangen", "sich zu freuen". */
  zuInfinitive: string;
  /** "gemacht haben", "gegangen sein", "sich gefreut haben". */
  pastInfinitive: string;
  tenses: Record<TenseId, TenseTable>;
  /** For verbs with auxAlt: the compound tenses with the other auxiliary. */
  altAuxTenses?: Partial<Record<TenseId, TenseTable>>;
  marks: Partial<Record<TenseId | "partizip2", Partial<Record<Person | "form", Irregularity>>>>;
  /** True if any form is irregular. */
  irregular: boolean;
  notes: string[];
};
