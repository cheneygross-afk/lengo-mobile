// Synced from cheneygross-afk/lengo:src/lib/it-conjugation/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Types for the Italian conjugation engine (see conjugate.ts).

// "lui" stands for lui/lei and the formal Lei, "loro" for loro and the
// (rare) formal Loro. The imperative has no io form; its "lui" row is the
// formal Lei command ("parli!") and its "loro" row the formal Loro one.
export type Person = "io" | "tu" | "lui" | "noi" | "voi" | "loro";

/** All six persons of every finite tense, in table order. */
export const PERSONS6: Person[] = ["io", "tu", "lui", "noi", "voi", "loro"];
export const IMP_PERSONS: Person[] = ["tu", "lui", "noi", "voi", "loro"];
/** The plural persons (participle agreement: andati/e). */
export const PLURAL: Person[] = ["noi", "voi", "loro"];

export type Mood = "indicative" | "subjunctive" | "conditional" | "imperative";

export type TenseId =
  | "pres"
  | "pp"
  | "impf"
  | "trap"
  | "pr"
  | "trem"
  | "fut"
  | "futant"
  | "cond"
  | "condp"
  | "cgpres"
  | "cgpass"
  | "cgimpf"
  | "cgtrap"
  | "imp"
  | "impn";

export type TenseInfo = {
  id: TenseId;
  mood: Mood;
  /** English name, e.g. "Present perfect". */
  en: string;
  /** Italian name, e.g. "Passato prossimo". */
  it: string;
  compound: boolean;
  /** Mostly written (the passato remoto outside Tuscany and the South; the trapassato remoto everywhere). */
  literary?: boolean;
  /** The course level that teaches it. */
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  /** What it's for, in a sentence (English, Italian in double quotes). */
  use: string;
};

export const TENSES: TenseInfo[] = [
  { id: "pres", mood: "indicative", en: "Present", it: "Presente", compound: false, level: "A1", use: 'Now, habits and the near future: "parlo" (I speak, I\'m speaking, I\'ll speak).' },
  {
    id: "pp", mood: "indicative", en: "Present perfect", it: "Passato prossimo", compound: true, level: "A2",
    use: 'The everyday past for a finished action: "ho parlato" (I spoke, I have spoken), "sono andato" (I went). Avere or essere plus the past participle.',
  },
  {
    id: "impf", mood: "indicative", en: "Imperfect", it: "Imperfetto", compound: false, level: "A2",
    use: 'Past habits, descriptions and what was going on: "parlavo" (I used to speak, I was speaking).',
  },
  {
    id: "trap", mood: "indicative", en: "Pluperfect", it: "Trapassato prossimo", compound: true, level: "B1",
    use: 'Before another past moment: "avevo parlato" (I had spoken), "ero già uscito" (I had already gone out).',
  },
  {
    id: "fut", mood: "indicative", en: "Future", it: "Futuro semplice", compound: false, level: "A2",
    use: 'Will, and guesses about now: "parlerò" (I will speak), "sarà a casa" (he\'s probably at home).',
  },
  {
    id: "futant", mood: "indicative", en: "Future perfect", it: "Futuro anteriore", compound: true, level: "B1",
    use: 'Will have, and guesses about the past: "quando avrò finito" (when I have finished), "sarà già partito" (he must have left already).',
  },
  {
    id: "cond", mood: "conditional", en: "Conditional", it: "Condizionale presente", compound: false, level: "A2",
    use: 'Would, polite requests and advice: "vorrei un caffè" (I\'d like a coffee), "dovresti riposare" (you should rest).',
  },
  {
    id: "condp", mood: "conditional", en: "Past conditional", it: "Condizionale passato", compound: true, level: "B1",
    use: 'Would have, and the future seen from the past: "avrei parlato" (I would have spoken), "ha detto che sarebbe venuto" (he said he would come).',
  },
  {
    id: "cgpres", mood: "subjunctive", en: "Present subjunctive", it: "Congiuntivo presente", compound: false, level: "B1",
    use: 'After opinions, wishes, doubts and feelings: "penso che parli bene" (I think he speaks well), "voglio che tu venga".',
  },
  {
    id: "cgpass", mood: "subjunctive", en: "Past subjunctive", it: "Congiuntivo passato", compound: true, level: "B1",
    use: 'The same, about the past: "penso che abbia parlato" (I think he spoke), "spero che sia arrivata".',
  },
  {
    id: "cgimpf", mood: "subjunctive", en: "Imperfect subjunctive", it: "Congiuntivo imperfetto", compound: false, level: "B2",
    use: 'After a past or conditional main verb, and in if-clauses: "se parlassi italiano" (if I spoke Italian), "volevo che tu venissi".',
  },
  {
    id: "cgtrap", mood: "subjunctive", en: "Pluperfect subjunctive", it: "Congiuntivo trapassato", compound: true, level: "B2",
    use: 'If I had done: "se avessi saputo" (if I had known), "pensavo che fosse già partito" (I thought he had already left).',
  },
  {
    id: "pr", mood: "indicative", en: "Remote past", it: "Passato remoto", compound: false, level: "B1", literary: true,
    use: 'The past of history, novels and fairy tales: "parlò" (he spoke), "nacque nel 1265" (he was born in 1265). In much of the South and in Tuscany people also use it in speech.',
  },
  {
    id: "trem", mood: "indicative", en: "Past anterior", it: "Trapassato remoto", compound: true, level: "C1", literary: true,
    use: 'Literary only, after "dopo che", "quando" or "appena" with a passato remoto: "dopo che ebbe parlato, uscì" (after he had spoken, he went out).',
  },
  {
    id: "imp", mood: "imperative", en: "Imperative", it: "Imperativo", compound: false, level: "A2",
    use: 'Commands: "parla!" (speak! to a friend), "parli!" (to someone you call Lei), "parliamo!" (let\'s speak), "parlate!" (to several people).',
  },
  {
    id: "impn", mood: "imperative", en: "Negative imperative", it: "Imperativo negativo", compound: false, level: "A2",
    use: 'Don\'t: to a friend, "non" plus the infinitive: "non parlare!". Every other person adds "non" to the command: "non parli!", "non parlate!".',
  },
];

export function tenseInfo(id: TenseId): TenseInfo {
  return TENSES.find((t) => t.id === id)!;
}

/** The persons each tense has, in display order. */
export function personsOf(id: TenseId): Person[] {
  return id === "imp" || id === "impn" ? IMP_PERSONS : PERSONS6;
}

/** How a form differs from the regular pattern. */
export type Irregularity = "irregular" | "spelling";

/**
 * A tense's forms, without the subject pronoun ("parlo", "sono andato/a",
 * "non parlare"); null where the form doesn't exist. One cell may hold two
 * accepted forms, separated by " / " ("devo / debbo", "va' / vai").
 * "andato/a" (no spaces) is one form that agrees: andato for a man,
 * andata for a woman; "andati/e" for men or a mixed group, andate for women.
 */
export type TenseTable = Partial<Record<Person, string | null>>;

/**
 * "regular": like parlare, credere, dormire. "spelling": regular with a
 * spelling change (cerchi, comincerò, studi). "isc": an -ire verb that adds
 * -isc- (finisco). "irregular": its own forms somewhere.
 */
export type VerbKind = "regular" | "spelling" | "isc" | "irregular";

export type Auxiliary = "avere" | "essere";

/**
 * Pronouns that are part of the verb: "si" (alzarsi), "sene" (andarsene:
 * me ne vado), "sela" (cavarsela: me la cavo), "cela" (farcela: ce la
 * faccio), "ci" (metterci: ci metto un'ora).
 */
export type CliticType = "si" | "sene" | "sela" | "cela" | "ci";

export type ItConjugation = {
  /** Display infinitive: "parlare", "alzarsi", "andarsene". */
  infinitive: string;
  /** The verb without its pronouns ("alzare", "andare"). */
  base: string;
  /** Used with a reflexive pronoun (alzarsi). */
  reflexive: boolean;
  /** Pronouns built into the verb, if any. */
  clitic: CliticType | null;
  ending: "are" | "ere" | "ire" | "rre";
  kind: VerbKind;
  en: string;
  /** Meaning with the reflexive pronoun (alzarsi: to get up), if common. */
  enSe?: string;
  /** Also common, or only used, with a reflexive pronoun. */
  prn?: "also" | "only";
  /** "lui": only the third person singular (piove); "3": only lui and loro (ci vuole, ci vogliono). */
  impersonal: "lui" | "3" | null;
  /** In the verb list (false: an unknown verb conjugated on the regular pattern). */
  known: boolean;
  /** The verb it is conjugated like ("venire" for convenire), if any. */
  model: string | null;
  /** "parlando". */
  gerund: string;
  /** "parlato". */
  participle: string;
  /** Another accepted participle ("perduto" beside "perso"). */
  participleAlt: string | null;
  /** The auxiliary of the compound tenses shown. */
  aux: Auxiliary;
  /** The other auxiliary, for a verb that takes both (finire: ho finito / è finito). */
  auxAlt: Auxiliary | null;
  /** "aver parlato", "essere andato/a". */
  pastInfinitive: string;
  /** "avendo parlato", "essendo andato/a". */
  pastGerund: string;
  tenses: Record<TenseId, TenseTable>;
  marks: Partial<Record<TenseId | "participle" | "gerund", Partial<Record<Person | "form", Irregularity>>>>;
  /** True if any form is irregular (not just a spelling change). */
  irregular: boolean;
  notes: string[];
};
