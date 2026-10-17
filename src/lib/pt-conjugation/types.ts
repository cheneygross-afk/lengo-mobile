// Synced from cheneygross-afk/lengo:src/lib/pt-conjugation/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Types for the Brazilian Portuguese conjugation engine (see conjugate.ts).

// "ele" stands for você/ele/ela (and a gente), "eles" for vocês/eles/elas.
// Brazil uses eu, você/ele/ela, nós, vocês/eles/elas; tu (Portugal and
// parts of Brazil) and vós (archaic, liturgical) are kept for the full
// tables. The imperative has no eu form.
export type Person = "eu" | "tu" | "ele" | "nos" | "vos" | "eles";

/** All six persons of every finite tense, in table order. */
export const PERSONS6: Person[] = ["eu", "tu", "ele", "nos", "vos", "eles"];
/** The four persons of everyday Brazilian Portuguese. */
export const BR_PERSONS: Person[] = ["eu", "ele", "nos", "eles"];
export const IMP_PERSONS: Person[] = ["tu", "ele", "nos", "vos", "eles"];
/** Persons only shown with the "tu and vós" toggle on. */
export const EXTRA_PERSONS: Person[] = ["tu", "vos"];

export type Mood = "indicative" | "subjunctive" | "imperative" | "infinitive";

export type TenseId =
  | "pres"
  | "pret"
  | "impf"
  | "ppc"
  | "mqpc"
  | "mqp"
  | "fut"
  | "futc"
  | "cond"
  | "condc"
  | "sbpres"
  | "sbimpf"
  | "sbfut"
  | "sbppc"
  | "sbmqp"
  | "sbfutc"
  | "impa"
  | "impn"
  | "infp";

export type TenseInfo = {
  id: TenseId;
  mood: Mood;
  /** English name, e.g. "Simple past". */
  en: string;
  /** Portuguese name, e.g. "Pretérito perfeito". */
  pt: string;
  compound: boolean;
  /** Literary only (the simple pluperfect). */
  rare?: boolean;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  /** What it's for, in a sentence (English, Portuguese in double quotes). */
  use: string;
};

export const TENSES: TenseInfo[] = [
  { id: "pres", mood: "indicative", en: "Present", pt: "Presente", compound: false, level: "A1", use: 'Now, habits, and the near future: "eu falo" (I speak, I\'m speaking).' },
  {
    id: "pret", mood: "indicative", en: "Simple past", pt: "Pretérito perfeito", compound: false, level: "A1",
    use: 'A finished action: "eu falei" (I spoke, I have spoken). It covers the English present perfect too: "você já comeu?" (have you eaten yet?).',
  },
  {
    id: "impf", mood: "indicative", en: "Imperfect", pt: "Pretérito imperfeito", compound: false, level: "A2",
    use: 'Past habits and background: "eu falava" (I used to speak, I was speaking). In speech it often stands in for the conditional: "eu falava com ele" (I would talk to him).',
  },
  {
    id: "ppc", mood: "indicative", en: "Present perfect (lately)", pt: "Pretérito perfeito composto", compound: true, level: "B1",
    use: 'Something repeated or ongoing up to now: "tenho falado" means \'I have been speaking (lately)\', not \'I have spoken\' (that is "falei").',
  },
  {
    id: "mqpc", mood: "indicative", en: "Pluperfect", pt: "Mais-que-perfeito composto", compound: true, level: "B1",
    use: 'Before another past moment: "eu tinha falado" (I had spoken). Formal writing also uses "haver": "eu havia falado".',
  },
  {
    id: "mqp", mood: "indicative", en: "Simple pluperfect (literary)", pt: "Mais-que-perfeito simples", compound: false, level: "C1", rare: true,
    use: 'The same meaning as "tinha falado", in one word: "eu falara". Literary: books and formal writing only, never in speech.',
  },
  {
    id: "fut", mood: "indicative", en: "Future", pt: "Futuro do presente", compound: false, level: "B1",
    use: 'Will: "eu falarei". Formal and written; in speech Brazilians say "eu vou falar".',
  },
  { id: "futc", mood: "indicative", en: "Future perfect", pt: "Futuro do presente composto", compound: true, level: "B2", use: 'Will have: "eu terei falado".' },
  {
    id: "cond", mood: "indicative", en: "Conditional", pt: "Futuro do pretérito", compound: false, level: "B1",
    use: 'Would: "eu falaria". Speech often uses the imperfect instead ("eu falava").',
  },
  { id: "condc", mood: "indicative", en: "Conditional perfect", pt: "Futuro do pretérito composto", compound: true, level: "B2", use: 'Would have: "eu teria falado".' },
  {
    id: "sbpres", mood: "subjunctive", en: "Present subjunctive", pt: "Presente do subjuntivo", compound: false, level: "B1",
    use: 'After wishes, doubts and feelings: "quero que você fale" (I want you to speak).',
  },
  {
    id: "sbimpf", mood: "subjunctive", en: "Imperfect subjunctive", pt: "Imperfeito do subjuntivo", compound: false, level: "B1",
    use: 'Hypotheses and past wishes: "se eu falasse" (if I spoke), "queria que você falasse".',
  },
  {
    id: "sbfut", mood: "subjunctive", en: "Future subjunctive", pt: "Futuro do subjuntivo", compound: false, level: "B1",
    use: 'After "quando", "se" and "assim que" about the future: "quando eu falar" (when I speak). English uses the present here; Portuguese needs this form.',
  },
  { id: "sbppc", mood: "subjunctive", en: "Perfect subjunctive", pt: "Pretérito perfeito do subjuntivo", compound: true, level: "B2", use: 'That I have done: "espero que ele tenha falado".' },
  {
    id: "sbmqp", mood: "subjunctive", en: "Pluperfect subjunctive", pt: "Mais-que-perfeito do subjuntivo", compound: true, level: "B2",
    use: 'If I had done: "se eu tivesse falado".',
  },
  { id: "sbfutc", mood: "subjunctive", en: "Future perfect subjunctive", pt: "Futuro composto do subjuntivo", compound: true, level: "C1", use: 'When I have done: "quando eu tiver falado".' },
  {
    id: "impa", mood: "imperative", en: "Imperative", pt: "Imperativo afirmativo", compound: false, level: "A2",
    use: 'Commands: "fale!" (speak!). In everyday Brazilian speech many people use the indicative form even with "você": "fala!", "vem cá!".',
  },
  { id: "impn", mood: "imperative", en: "Negative imperative", pt: "Imperativo negativo", compound: false, level: "A2", use: 'Don\'t: "não fale!" (don\'t speak!), always the subjunctive form.' },
  {
    id: "infp", mood: "infinitive", en: "Personal infinitive", pt: "Infinitivo pessoal", compound: false, level: "B2",
    use: 'An infinitive with its own subject, which English doesn\'t have: "para nós falarmos" (for us to speak), "antes de eles saírem" (before they leave).',
  },
];

export function tenseInfo(id: TenseId): TenseInfo {
  return TENSES.find((t) => t.id === id)!;
}

/** The persons each tense has, in display order (all six; the view hides tu and vós unless asked). */
export function personsOf(id: TenseId): Person[] {
  return id === "impa" || id === "impn" ? IMP_PERSONS : PERSONS6;
}

/** How a form differs from the regular pattern. */
export type Irregularity = "irregular" | "spelling";

/**
 * A tense's forms, without the subject pronoun ("falo", "tinha falado",
 * "não fale"); null where the form doesn't exist. One cell may hold two
 * accepted forms, separated by " / " ("faz / faze", "tenho pago / tenho
 * pagado").
 */
export type TenseTable = Partial<Record<Person, string | null>>;

/**
 * "regular": like falar, comer, partir. "spelling": regular with a
 * spelling change (fiquei, conheço). "stem": a vowel change in the stem
 * (durmo, prefiro, sobe, passeio). "irregular": its own forms.
 */
export type VerbKind = "regular" | "spelling" | "stem" | "irregular";

export type PtConjugation = {
  /** "falar", "pôr", "manter", "levantar-se". */
  infinitive: string;
  /** Infinitive without -se ("levantar"). */
  base: string;
  /** Shown with its reflexive pronoun ("me levanto"). */
  reflexive: boolean;
  /** "ar", "er", "ir", or "or" (pôr and its compounds). */
  ending: "ar" | "er" | "ir" | "or";
  kind: VerbKind;
  en: string;
  /** Meaning as a pronominal verb (levantar-se: to get up), if common. */
  enSe?: string;
  /** Also common, or only used, with a reflexive pronoun (levantar-se, queixar-se). */
  prn?: "also" | "only";
  /** Only used in the ele form (chove, neva). */
  impersonal: boolean;
  /** In the verb list (false: an unknown verb conjugated on the regular pattern). */
  known: boolean;
  /** The verb it is conjugated like ("ter" for manter, "passear" for the -ear verbs), if any. */
  model: string | null;
  /** "falando". */
  gerund: string;
  /** The participle used with ter in the compound tenses ("falado", "feito", "pago"). */
  participle: string;
  /**
   * For verbs with two participles: which go with ter/haver (compound
   * tenses) and which with ser/estar (passive, result). Null otherwise.
   */
  doubleParticiple: { ter: string[]; serEstar: string; note: string } | null;
  /** "ter falado". */
  pastInfinitive: string;
  /** "tendo falado". */
  pastGerund: string;
  tenses: Record<TenseId, TenseTable>;
  marks: Partial<Record<TenseId | "participle" | "gerund", Partial<Record<Person | "form", Irregularity>>>>;
  /** True if any form is irregular (not just a spelling change). */
  irregular: boolean;
  notes: string[];
};
