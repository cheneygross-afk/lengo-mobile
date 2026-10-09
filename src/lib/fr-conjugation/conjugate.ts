// Synced from cheneygross-afk/lengo:src/lib/fr-conjugation/conjugate.ts by scripts/sync-content.mjs -- edit it there, not here.
// The French conjugation engine: every tense of a verb from its principal
// parts. Regular verbs follow parler (-er), finir (-ir) and vendre (-re),
// with the -er spelling changes (ç, ge, è, doubled l/t, y -> i) worked out
// here; irregular verbs come from irregular.ts. Pronominal verbs get their
// reflexive pronouns and être; elision (j'aime, m'habille) is applied when
// forms are shown (text.ts), except inside the verb phrase itself.

import { IRREGULAR, LIKE, type IrrSpec } from "./irregular";
import { agree, joinElided } from "./text";
import { PERSONS6, type FrConjugation, type Irregularity, type Person, type TenseId, type TenseTable } from "./types";
import { FR_VERB_SPECS, reflexiveInfinitive, specInfinitive, type FrVerbSpec } from "./verbs";

type Six = (string | null)[];

type Parts = {
  pres: Six;
  impf: Six;
  fut: Six;
  cond: Six;
  subj: Six;
  ps: Six;
  subji: Six;
  /** tu, nous, vous. */
  imp: Six;
  pp: string;
  ppr: string | null;
};

const SIMPLE: (keyof Parts & TenseId)[] = ["pres", "impf", "fut", "cond", "subj", "ps", "subji", "imp"];

const END_IMPF = ["ais", "ais", "ait", "ions", "iez", "aient"];
const END_FUT = ["ai", "as", "a", "ons", "ez", "ont"];
const END_SUBJ = ["e", "es", "e", "ions", "iez", "ent"];

type PsType = "a" | "i" | "u" | "in";
const PS_END: Record<PsType, string[]> = {
  a: ["ai", "as", "a", "âmes", "âtes", "èrent"],
  i: ["is", "is", "it", "îmes", "îtes", "irent"],
  u: ["us", "us", "ut", "ûmes", "ûtes", "urent"],
  in: ["ins", "ins", "int", "înmes", "întes", "inrent"],
};
const SUBJI_END: Record<PsType, string[]> = {
  a: ["asse", "asses", "ât", "assions", "assiez", "assent"],
  i: ["isse", "isses", "ît", "issions", "issiez", "issent"],
  u: ["usse", "usses", "ût", "ussions", "ussiez", "ussent"],
  in: ["insse", "insses", "înt", "inssions", "inssiez", "inssent"],
};

/** commenc + ons -> commençons, mang + ais -> mangeais. */
function fix(stem: string, ending: string): string {
  if (/^[aoâ]/.test(ending)) {
    if (stem.endsWith("c")) return `${stem.slice(0, -1)}ç${ending}`;
    if (stem.endsWith("g")) return `${stem}e${ending}`;
  }
  return stem + ending;
}

const alt = (stems: string[], ending: string, f = false) => [...new Set(stems.map((s) => (f ? fix(s, ending) : s + ending)))].join(" / ");

// ---- Regular patterns ------------------------------------------------

type SpellRule = "cer" | "ger" | "egrave" | "eacute" | "dbl" | "yer" | "ayer";

/** The stem(s) used before a silent ending (achèt-, appell-, pai-/pay-), and the rule that made it. */
function strongStems(stem: string, dbl: boolean): { strong: string[]; rule: SpellRule | null; futFromStrong: boolean } {
  if (/[ou]y$/.test(stem)) return { strong: [`${stem.slice(0, -1)}i`], rule: "yer", futFromStrong: true };
  if (/ay$/.test(stem)) return { strong: [`${stem.slice(0, -1)}i`, stem], rule: "ayer", futFromStrong: true };
  const m = stem.match(/^(.*)([eé])([^aeiouyàâäéèêëîïôöùûüx]+)$/);
  if (m) {
    const [, pre, v, cons] = m;
    if (v === "é") return { strong: [`${pre}è${cons}`], rule: "eacute", futFromStrong: false };
    if (cons.length === 1) {
      if (dbl) return { strong: [`${pre}e${cons}${cons}`], rule: "dbl", futFromStrong: true };
      return { strong: [`${pre}è${cons}`], rule: "egrave", futFromStrong: true };
    }
  }
  return { strong: [stem], rule: null, futFromStrong: false };
}

function erParts(inf: string, dbl: boolean, spelled: boolean): { parts: Parts; rules: SpellRule[] } {
  const stem = inf.slice(0, -2);
  const rules: SpellRule[] = [];
  let strong = [stem];
  let futStems = [inf];
  const f = spelled;
  if (spelled) {
    const s = strongStems(stem, dbl);
    strong = s.strong;
    if (s.rule) rules.push(s.rule);
    if (s.futFromStrong) futStems = s.strong.map((x) => `${x}er`);
    if (stem.endsWith("c")) rules.push("cer");
    if (stem.endsWith("g")) rules.push("ger");
  }
  const parts: Parts = {
    pres: [alt(strong, "e"), alt(strong, "es"), alt(strong, "e"), alt([stem], "ons", f), `${stem}ez`, alt(strong, "ent")],
    impf: END_IMPF.map((e) => alt([stem], e, f)),
    fut: END_FUT.map((e) => alt(futStems, e)),
    cond: END_IMPF.map((e) => alt(futStems, e)),
    subj: [alt(strong, "e"), alt(strong, "es"), alt(strong, "e"), `${stem}ions`, `${stem}iez`, alt(strong, "ent")],
    ps: PS_END.a.map((e) => alt([stem], e, f)),
    subji: SUBJI_END.a.map((e) => alt([stem], e, f)),
    imp: [alt(strong, "e"), alt([stem], "ons", f), `${stem}ez`],
    pp: `${stem}é`,
    ppr: alt([stem], "ant", f),
  };
  return { parts, rules };
}

function irParts(inf: string): Parts {
  const s = inf.slice(0, -2);
  return {
    pres: ["is", "is", "it", "issons", "issez", "issent"].map((e) => s + e),
    impf: END_IMPF.map((e) => `${s}iss${e}`),
    fut: END_FUT.map((e) => inf + e),
    cond: END_IMPF.map((e) => inf + e),
    subj: END_SUBJ.map((e) => `${s}iss${e}`),
    ps: PS_END.i.map((e) => s + e),
    subji: SUBJI_END.i.map((e) => s + e),
    imp: ["is", "issons", "issez"].map((e) => s + e),
    pp: `${s}i`,
    ppr: `${s}issant`,
  };
}

function reParts(inf: string): Parts {
  const s = inf.slice(0, -2);
  const futStem = inf.slice(0, -1);
  return {
    pres: ["s", "s", "", "ons", "ez", "ent"].map((e) => s + e),
    impf: END_IMPF.map((e) => s + e),
    fut: END_FUT.map((e) => futStem + e),
    cond: END_IMPF.map((e) => futStem + e),
    subj: END_SUBJ.map((e) => s + e),
    ps: PS_END.i.map((e) => s + e),
    subji: SUBJI_END.i.map((e) => s + e),
    imp: ["s", "ons", "ez"].map((e) => s + e),
    pp: `${s}u`,
    ppr: `${s}ant`,
  };
}

// ---- Irregular verbs -------------------------------------------------

const six = (s: string): Six => s.split(" ").map((w) => (w === "-" ? null : w));

/** The spec of a verb in LIKE, with the model's forms rebuilt on the verb's own beginning. */
function deriveSpec(inf: string): IrrSpec | null {
  const like = LIKE[inf];
  if (!like) return null;
  const [modelInf, over] = like;
  const model = IRREGULAR[modelInf];
  let k = 0;
  while (!inf.endsWith(modelInf.slice(k))) k++;
  const drop = modelInf.slice(0, k);
  const prefix = inf.slice(0, inf.length - (modelInf.length - k));
  const tf = (w: string) => {
    if (w === "-") return w;
    if (!w.startsWith(drop)) throw new Error(`${inf}: model form ${w} doesn't start with ${drop}`);
    return prefix + w.slice(k);
  };
  const words = (s?: string) => (s === undefined ? undefined : s.split(" ").map(tf).join(" "));
  const out: IrrSpec = {
    pres: words(model.pres)!,
    ps: model.ps === undefined ? undefined : model.ps.includes(" ") ? words(model.ps) : `${tf(model.ps.split(":")[0])}:${model.ps.split(":")[1]}`,
    fut: model.fut === undefined ? undefined : tf(model.fut),
    impf: model.impf === undefined ? undefined : tf(model.impf),
    subj: words(model.subj),
    subji: words(model.subji),
    pp: model.pp === undefined ? undefined : tf(model.pp),
    ppr: model.ppr === undefined || model.ppr === "-" ? model.ppr : tf(model.ppr),
    imp: words(model.imp),
  };
  return { ...out, ...over };
}

export function irregularSpec(inf: string): IrrSpec | null {
  return IRREGULAR[inf] ?? deriveSpec(inf);
}

function endingOf(inf: string): "er" | "ir" | "re" | "oir" {
  if (inf.endsWith("oir")) return "oir";
  if (inf.endsWith("er")) return "er";
  if (inf.endsWith("ir")) return "ir";
  return "re";
}

function defaultFut(inf: string): string {
  return inf.endsWith("re") ? inf.slice(0, -1) : inf;
}

function psFrom(ps: string | undefined): { forms: Six; type: PsType | null; stem: string } {
  if (!ps) return { forms: [null, null, null, null, null, null], type: null, stem: "" };
  if (ps.includes(" ")) return { forms: six(ps), type: null, stem: "" };
  const [stem, type] = ps.split(":") as [string, PsType];
  return { forms: PS_END[type].map((e) => stem + e), type, stem };
}

function irrParts(inf: string, spec: IrrSpec): Parts {
  const pres = six(spec.pres);
  const nousStem = pres[3]?.replace(/ons$/, "") ?? null;
  const impfStem = spec.impf ?? nousStem;
  const futStem = spec.fut ?? defaultFut(inf);
  let subj: Six;
  if (spec.subj) subj = six(spec.subj);
  else {
    const js = pres[5]!.replace(/ent$/, "");
    subj = END_SUBJ.map((e, i) => (i === 3 || i === 4 ? nousStem + e : js + e));
  }
  const ps = psFrom(spec.ps);
  const subji: Six = spec.subji ? six(spec.subji) : ps.type ? SUBJI_END[ps.type].map((e) => ps.stem + e) : ps.forms.map(() => null);
  let imp: Six;
  if (spec.imp) imp = six(spec.imp);
  else {
    const tu = pres[1];
    imp = [tu ? (tu === "vas" ? "va" : tu.endsWith("es") ? tu.slice(0, -1) : tu) : null, pres[3], pres[4]];
  }
  return {
    pres,
    impf: END_IMPF.map((e) => (impfStem ? impfStem + e : null)),
    fut: END_FUT.map((e) => futStem + e),
    cond: END_IMPF.map((e) => futStem + e),
    subj,
    ps: ps.forms,
    subji,
    imp,
    pp: spec.pp ?? "",
    ppr: spec.ppr === "-" ? null : spec.ppr ?? (nousStem ? `${nousStem}ant` : null),
  };
}

/** What the rules alone would give for an irregular verb (for marking forms). */
function ruleParts(inf: string, actual: Parts): Partial<Parts> {
  const ending = endingOf(inf);
  const reg = ending === "er" ? erParts(inf, false, true).parts : ending === "ir" ? irParts(inf) : ending === "re" ? reParts(inf) : null;
  const nousStem = actual.pres[3]?.replace(/ons$/, "") ?? null;
  const tu = actual.pres[1];
  return {
    pres: reg?.pres,
    impf: nousStem ? END_IMPF.map((e) => nousStem + e) : actual.impf,
    fut: END_FUT.map((e) => defaultFut(inf) + e),
    cond: END_IMPF.map((e) => defaultFut(inf) + e),
    subj: reg?.subj,
    ps: reg?.ps,
    subji: reg?.subji,
    imp: [tu ? (tu === "vas" ? "va" : tu.endsWith("es") ? tu.slice(0, -1) : tu) : null, actual.pres[3], actual.pres[4]],
    pp: reg?.pp,
    ppr: nousStem ? `${nousStem}ant` : actual.ppr,
  };
}

// ---- Verb list -------------------------------------------------------

let byInf: Map<string, FrVerbSpec> | null = null;

/** The verb-list entry for an infinitive as listed ("parler", "souvenir", "en aller" for s'en aller). */
export function frSpecFor(inf: string): FrVerbSpec | undefined {
  if (!byInf) {
    byInf = new Map();
    for (const s of FR_VERB_SPECS) byInf.set(s.en_ ? `en ${s.inf}` : s.inf, s);
  }
  return byInf.get(inf);
}

/** "se lever" -> ["lever", true, false]; "s'en aller" -> ["aller", true, true]. */
export function splitPronominal(input: string): [base: string, pronominal: boolean, en: boolean] {
  const s = input.trim().toLowerCase().replace(/[’‘ʼ`]/g, "'").replace(/\s+/g, " ");
  let m = s.match(/^s'en (.+)$/) ?? s.match(/^se en (.+)$/);
  if (m) return [m[1], true, true];
  m = s.match(/^(?:se |s')(.+)$/);
  if (m) return [m[1], true, false];
  return [s, false, false];
}

// ---- Conjugation -----------------------------------------------------

const REFL: Record<Person, string> = { je: "me", tu: "te", il: "se", nous: "nous", vous: "vous", ils: "se" };
const REFL_EN: Record<Person, string> = { je: "m'en", tu: "t'en", il: "s'en", nous: "nous en", vous: "vous en", ils: "s'en" };
const IMP_REFL: Record<string, [string, string]> = { tu: ["-toi", "-t'en"], nous: ["-nous", "-nous-en"], vous: ["-vous", "-vous-en"] };

function reflexive(person: Person, form: string, en: boolean): string {
  return form
    .split(" / ")
    .map((f) => (en ? `${REFL_EN[person]} ${f}` : joinElided(REFL[person], f)))
    .join(" / ");
}

/** Participle with agreement marks after être: allé(e), allé(e)s, allé(e)(s). */
function agreeing(pp: string, person: Person): string {
  const sEnd = /[sx]$/.test(pp);
  if (person === "nous" || person === "ils") return sEnd ? `${pp}(es)` : `${pp}(e)s`;
  if (person === "vous") return `${pp}(e)(s)`;
  return `${pp}(e)`;
}

const COMPOUND: [TenseId, TenseId][] = [
  ["pc", "pres"],
  ["pqp", "impf"],
  ["pa", "ps"],
  ["futant", "fut"],
  ["condp", "cond"],
  ["subjp", "subj"],
  ["subjpqp", "subji"],
];

let auxCache: Record<"avoir" | "être", Parts> | null = null;
function auxParts(aux: "avoir" | "être"): Parts {
  if (!auxCache) auxCache = { avoir: irrParts("avoir", IRREGULAR.avoir), être: irrParts("être", IRREGULAR["être"]) };
  return auxCache[aux];
}

function toTable(forms: Six, persons: Person[] = PERSONS6): TenseTable {
  const t: TenseTable = {};
  persons.forEach((p, i) => (t[p] = forms[i] ?? null));
  return t;
}

function compoundTables(pp: string, aux: "avoir" | "être", pronominal: boolean, en: boolean, impersonal: boolean) {
  const a = auxParts(aux);
  const out: Partial<Record<TenseId, TenseTable>> = {};
  for (const [id, simple] of COMPOUND) {
    const t: TenseTable = {};
    PERSONS6.forEach((p, i) => {
      const auxForm = (a[simple as keyof Parts] as Six)[i];
      if (!auxForm || (impersonal && p !== "il")) {
        t[p] = null;
        return;
      }
      const part = aux === "être" ? agreeing(pp, p) : pp;
      const phrase = `${auxForm} ${part}`;
      t[p] = pronominal ? reflexive(p, phrase, en) : phrase;
    });
    out[id] = t;
  }
  return out as Record<TenseId, TenseTable>;
}

const BOTH_EXAMPLES: Record<string, string> = {
  monter: "j'ai monté les valises",
  descendre: "j'ai descendu l'escalier",
  sortir: "j'ai sorti la poubelle",
  passer: "j'ai passé une semaine à Paris",
  rentrer: "j'ai rentré la voiture",
  retourner: "j'ai retourné la crêpe",
  remonter: "j'ai remonté la rue",
};

const cache = new Map<string, FrConjugation | null>();

/**
 * Every tense of a verb: "parler", "se lever", "s'asseoir", "s'en aller".
 * A verb not in the list that ends in -er, -ir or -re is conjugated on the
 * regular pattern (known: false); anything else gives null.
 */
export function conjugate(input: string): FrConjugation | null {
  const key = input.trim().toLowerCase();
  if (cache.has(key)) return cache.get(key)!;
  const out = build(key);
  cache.set(key, out);
  return out;
}

function build(input: string): FrConjugation | null {
  const [base, typedPronominal, en] = splitPronominal(input);
  let pronominal = typedPronominal;
  if (!/^[a-zàâäçéèêëîïôöùûüÿœæ]+$/.test(base) || base.length < 3) return null;
  const spec = en ? frSpecFor(`en ${base}`) : frSpecFor(base);
  if (en && !spec) return null;
  if (spec?.prn === "only") pronominal = true;
  const ending = endingOf(base);
  const irr = irregularSpec(base);
  if (!spec && !irr && ending === "oir") return null;
  if (!spec && !irr && !/(er|ir|re)$/.test(base)) return null;

  let parts: Parts;
  const marks: FrConjugation["marks"] = {};
  const setMark = (k: TenseId | "participle" | "presentParticiple", p: Person | "form", m: Irregularity) => {
    (marks[k] ??= {})[p] = m;
  };
  let rules: SpellRule[] = [];
  let group: 1 | 2 | 3;
  if (irr) {
    parts = irrParts(base, irr);
    group = 3;
    const rule = ruleParts(base, parts);
    const naive = ending === "er" ? erParts(base, false, false).parts : null;
    const spelled = ending === "er" ? erParts(base, !!spec?.dbl, true).parts : null;
    for (const t of SIMPLE) {
      const persons = t === "imp" ? ["tu", "nous", "vous"] as Person[] : PERSONS6;
      const want = rule[t] as Six | undefined;
      const naiveT = naive?.[t] as Six | undefined;
      const spelledT = spelled?.[t] as Six | undefined;
      (parts[t] as Six).forEach((f, i) => {
        if (!f) return;
        if (!want || want[i] !== f) setMark(t, persons[i], "irregular");
        else if (naiveT && naiveT[i] !== f && spelledT?.[i] === f) setMark(t, persons[i], "spelling");
      });
    }
    if (rule.pp !== parts.pp) setMark("participle", "form", "irregular");
    if (parts.ppr && rule.ppr !== parts.ppr) setMark("presentParticiple", "form", "irregular");
  } else if (ending === "er") {
    const r = erParts(base, !!spec?.dbl, true);
    parts = r.parts;
    rules = r.rules;
    group = 1;
    const naive = erParts(base, false, false).parts;
    for (const t of SIMPLE) {
      const persons = t === "imp" ? ["tu", "nous", "vous"] as Person[] : PERSONS6;
      (parts[t] as Six).forEach((f, i) => {
        if (f && (naive[t] as Six)[i] !== f) setMark(t, persons[i], "spelling");
      });
    }
    if (parts.ppr !== naive.ppr) setMark("presentParticiple", "form", "spelling");
  } else if (ending === "ir") {
    parts = irParts(base);
    group = 2;
  } else {
    parts = reParts(base);
    group = 3;
  }

  const impersonal = !!spec?.impersonal;
  const aux: "avoir" | "être" = pronominal ? "être" : spec?.aux ?? "avoir";
  const auxBoth = !pronominal && !!spec?.auxBoth;

  const tenses = {} as Record<TenseId, TenseTable>;
  for (const t of SIMPLE) {
    const persons = t === "imp" ? (["tu", "nous", "vous"] as Person[]) : PERSONS6;
    const forms = (parts[t] as Six).map((f, i) => {
      if (!f) return null;
      const p = persons[i];
      if (impersonal && (t === "imp" || p !== "il")) return null;
      if (!pronominal) return f;
      if (t === "imp") return f.split(" / ").map((x) => x + IMP_REFL[p][en ? 1 : 0]).join(" / ");
      return reflexive(p, f, en);
    });
    tenses[t] = toTable(forms, persons);
  }
  Object.assign(tenses, compoundTables(parts.pp, aux, pronominal, en, impersonal));
  // Compound forms are irregular where the participle is.
  if (marks.participle?.form === "irregular") {
    for (const [id] of COMPOUND) for (const p of PERSONS6) if (tenses[id][p]) setMark(id, p, "irregular");
  }
  // No marks on forms that don't exist (il faut has no je form).
  for (const [t, m] of Object.entries(marks) as [TenseId, Partial<Record<Person | "form", Irregularity>>][]) {
    if (!tenses[t]) continue;
    for (const p of Object.keys(m) as Person[]) if (!tenses[t][p]) delete m[p];
  }

  const infinitive = pronominal ? reflexiveInfinitive(base, en) : base;
  const ppr = parts.ppr ? (pronominal ? (en ? `s'en ${parts.ppr}` : joinElided("se", parts.ppr)) : parts.ppr) : null;
  const pastAux = aux === "être" ? `être ${agreeing(parts.pp, "vous")}` : `avoir ${parts.pp}`;
  const pastInfinitive = pronominal ? (en ? `s'en ${pastAux}` : joinElided("se", pastAux)) : pastAux;

  const irregular = Object.values(marks).some((m) => Object.values(m ?? {}).includes("irregular"));
  const en_ = pronominal && spec?.prn !== "only" ? spec?.enSe ?? spec?.en ?? "" : spec?.en ?? "";

  const c: FrConjugation = {
    infinitive,
    base,
    pronominal,
    ending,
    group,
    aux,
    auxBoth,
    impersonal,
    en: en_,
    known: !!spec,
    participle: parts.pp,
    presentParticiple: impersonal && !parts.ppr ? null : ppr,
    pastInfinitive,
    tenses,
    marks,
    irregular,
    notes: [],
  };
  if (auxBoth) {
    c.avoirTenses = compoundTables(parts.pp, "avoir", false, false, impersonal);
  }
  c.notes = notesFor(c, rules);
  return c;
}

const first = (f: string | null | undefined) => (f ?? "").split(" / ")[0];

function notesFor(c: FrConjugation, rules: SpellRule[]): string[] {
  const n: string[] = [];
  const t = c.tenses;
  const je = (f: string | null | undefined) => joinElided("je", first(f));
  if (c.impersonal) n.push(`Impersonal: used only with il (il ${first(t.pres.il)}, il ${first(t.impf.il)}, il ${first(t.pc.il)}).`);
  if (LIKE[c.base]) n.push(`Conjugated like ${LIKE[c.base][0]}.`);
  if (c.group === 2) {
    n.push(`Regular -ir verb, like finir: -iss- in the plural and the imperfect (nous ${t.pres.nous}, ${je(t.impf.je)}).`);
  }
  if (c.pronominal) {
    const fem = agree(first(t.pc.il), { g: "f", n: "s" });
    n.push(
      `Pronominal verb: the reflexive pronoun changes with the subject (${je(t.pres.je)}, tu ${first(t.pres.tu)}), and the compound tenses take être (elle ${fem}).`,
    );
  } else if (c.aux === "être") {
    const fem = agree(first(t.pc.il), { g: "f", n: "s" });
    const pl = agree(first(t.pc.ils), { g: "m", n: "p" });
    n.push(`Être verb: the compound tenses take être, and the participle agrees with the subject (elle ${fem}, ils ${pl}).`);
    if (c.auxBoth) {
      n.push(`With a direct object it takes avoir instead${BOTH_EXAMPLES[c.base] ? ` (${BOTH_EXAMPLES[c.base]})` : ""}.`);
    }
  }
  for (const r of rules) {
    if (r === "cer") n.push(`c becomes ç before a and o, to keep the soft sound: nous ${first(t.pres.nous).replace(/^nous /, "")}, ${je(t.impf.je)}.`);
    if (r === "ger") n.push(`g becomes ge before a and o, to keep the soft sound: nous ${first(t.pres.nous).replace(/^nous /, "")}, ${je(t.impf.je)}.`);
    if (r === "egrave") n.push(`e becomes è before a silent ending and in the future: ${je(t.pres.je)}, ils ${first(t.pres.ils)}, ${je(t.fut.je)} (but nous ${first(t.pres.nous)}).`);
    if (r === "eacute") n.push(`é becomes è before a silent ending: ${je(t.pres.je)}, ils ${first(t.pres.ils)} (but nous ${first(t.pres.nous)}, ${je(t.fut.je)}).`);
    if (r === "dbl") n.push(`The consonant doubles before a silent ending and in the future: ${je(t.pres.je)}, ils ${first(t.pres.ils)}, ${je(t.fut.je)} (but nous ${first(t.pres.nous)}).`);
    if (r === "yer") n.push(`y becomes i before a silent ending and in the future: ${je(t.pres.je)}, ${je(t.fut.je)} (but nous ${first(t.pres.nous)}).`);
    if (r === "ayer") n.push(`y may become i before a silent ending; both spellings are correct: ${je(t.pres.je)} or ${je((t.pres.je ?? "").split(" / ")[1])}.`);
  }
  if (c.base === "asseoir") n.push("Also correct, and common in speech: je m'assois, nous nous assoyons, je m'assoirai.");
  if (c.base === "envoyer" || c.base === "renvoyer") n.push(`Regular except the future and conditional: ${je(t.fut.je)}, ${je(t.cond.je)}.`);
  return n;
}

/** The bare simple forms of a listed verb (no reflexive pronouns), for the form index. */
export function simpleFormsOf(inf: string): { pp: string; ppr: string | null; tenses: Partial<Record<TenseId, Six>> } | null {
  const irr = irregularSpec(inf);
  const ending = endingOf(inf);
  const spec = frSpecFor(inf);
  const parts = irr ? irrParts(inf, irr) : ending === "er" ? erParts(inf, !!spec?.dbl, true).parts : ending === "ir" ? irParts(inf) : reParts(inf);
  const tenses: Partial<Record<TenseId, Six>> = {};
  for (const t of SIMPLE) tenses[t] = parts[t] as Six;
  return { pp: parts.pp, ppr: parts.ppr, tenses };
}

/** Display infinitive of each listed verb, most frequent first. */
export function listedInfinitives(): string[] {
  return FR_VERB_SPECS.map(specInfinitive);
}
