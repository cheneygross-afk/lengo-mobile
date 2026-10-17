// Synced from cheneygross-afk/lengo:src/lib/pt-conjugation/conjugate.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Brazilian Portuguese conjugation engine: every tense of a verb from
// its infinitive. Regular verbs follow falar (-ar), comer (-er) and partir
// (-ir). Worked out here: the spelling changes that keep a consonant's
// sound (fiquei, comecei, cheguei, conheço, protejo, distingo), the accent
// on a stressed i after a vowel (saímos, construído), the patterns that
// follow from the ending (-ear: passeio; -air: sai; -uir: inclui; -oer:
// rói; -uzir: produz) and the stem changes flagged in verbs.ts (durmo,
// prefiro, sobe). Irregular verbs and the verbs built on them come from
// irregular.ts. The tenses built on the pretérito (fizesse, fizer, fizera)
// come from its eles form, as Portuguese grammars teach.

import { COMPOUNDS, DOUBLE_PARTICIPLES, IRREGULAR, PARTICIPLES, POR_PREFIX, VERB_NOTES, type IrrSpec } from "./irregular";
import { PERSONS6, type Irregularity, type Person, type PtConjugation, type TenseId, type TenseTable, type VerbKind } from "./types";
import { PT_VERB_SPECS, type PtVerbSpec } from "./verbs";

type Six = (string | null)[];
type Conj = "ar" | "er" | "ir";
type Radical = NonNullable<PtVerbSpec["radical"]>;
type Pattern = "ear" | "air" | "uir" | "struir" | "oer" | "uzir" | null;

/** Simple tenses: the ones with their own endings. */
const SIMPLE: TenseId[] = ["pres", "pret", "impf", "mqp", "fut", "cond", "sbpres", "sbimpf", "sbfut", "impa", "impn", "infp"];
/** Compound tenses and the tense of ter each is built on. */
const COMPOUND: [TenseId, TenseId][] = [
  ["ppc", "pres"],
  ["mqpc", "impf"],
  ["futc", "fut"],
  ["condc", "cond"],
  ["sbppc", "sbpres"],
  ["sbmqp", "sbimpf"],
  ["sbfutc", "sbfut"],
];

const PRES: Record<Conj, string[]> = {
  ar: ["o", "as", "a", "amos", "ais", "am"],
  er: ["o", "es", "e", "emos", "eis", "em"],
  ir: ["o", "es", "e", "imos", "is", "em"],
};
const PRET: Record<Conj, string[]> = {
  ar: ["ei", "aste", "ou", "amos", "astes", "aram"],
  er: ["i", "este", "eu", "emos", "estes", "eram"],
  ir: ["i", "iste", "iu", "imos", "istes", "iram"],
};
const IMPF_AR = ["ava", "avas", "ava", "ávamos", "áveis", "avam"];
const IMPF_ER = ["ia", "ias", "ia", "íamos", "íeis", "iam"];
const SUBJ_AR = ["e", "es", "e", "emos", "eis", "em"];
const SUBJ_ER = ["a", "as", "a", "amos", "ais", "am"];
const FUT = ["ei", "ás", "á", "emos", "eis", "ão"];
const COND = ["ia", "ias", "ia", "íamos", "íeis", "iam"];
const PINF = ["", "es", "", "mos", "des", "em"];

/** The persons whose present has the stress on the stem: eu, tu, ele, eles. */
const RHIZO = [0, 1, 2, 5];

const strip = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
const unaccentIU = (s: string) => s.replace(/í/g, "i").replace(/ú/g, "u");

/** Stem + ending with the spelling changes that keep the consonant's sound (fic + ei -> fiquei, conhec + o -> conheço). */
function join(stem: string, end: string, conj: Conj): string {
  const v = end[0] ?? "";
  if (conj === "ar" && /[eéê]/.test(v)) {
    if (stem.endsWith("ç")) return `${stem.slice(0, -1)}c${end}`;
    if (stem.endsWith("c")) return `${stem.slice(0, -1)}qu${end}`;
    if (stem.endsWith("g")) return `${stem.slice(0, -1)}gu${end}`;
  }
  if (conj !== "ar" && /[aoáó]/.test(v)) {
    if (/[gq]u$/.test(stem)) return `${stem.slice(0, -2)}${stem.endsWith("qu") ? "c" : "g"}${end}`;
    if (stem.endsWith("c")) return `${stem.slice(0, -1)}ç${end}`;
    if (stem.endsWith("g")) return `${stem.slice(0, -1)}j${end}`;
  }
  return stem + end;
}

/** A stressed i right after the stem's vowel takes an accent: sa + imos -> saímos, constru + ido -> construído (not saiu, saindo). */
function hiatus(stem: string, end: string, conj: Conj): string {
  if (conj !== "ar" && /[aeou]$/.test(stem) && !/[gq]u$/.test(stem) && /^i/.test(end) && !/^(iu|indo)$/.test(end)) return `${stem}í${end.slice(1)}`;
  return join(stem, end, conj);
}

function lastReplace(stem: string, from: RegExp, to: (m: string) => string): string {
  const m = stem.match(from);
  if (!m || m.index === undefined) return stem;
  return stem.slice(0, m.index) + to(m[0]) + stem.slice(m.index + m[0].length);
}

/** The stem where it is stressed, for a radical-changing verb (dorm -> durm, sub -> sob, proib -> proíb). */
function radicalStem(stem: string, r: Radical): string {
  switch (r) {
    case "ei":
    case "ii":
      return lastReplace(stem, /e(?=[^aeiou]*u?[^aeiou]*$)/, () => "i");
    case "ou":
      return lastReplace(stem, /o(?=[^aeiou]*$)/, () => "u");
    case "uo":
      return lastReplace(stem, /u(?=[^aeiou]*$)/, () => "o");
    case "acc":
      return stem.replace(/([aeiou])([iu])([^aeiou]*)$/, (_, v: string, iu: string, rest: string) => v + (iu === "i" ? "í" : "ú") + rest);
    case "mario":
      return stem.replace(/i$/, "ei");
  }
}

/** Which persons of the present take the radical stem. */
function radicalPersons(r: Radical): number[] {
  if (r === "ei" || r === "ou") return [0];
  if (r === "uo") return [1, 2, 5];
  return RHIZO;
}

function patternOf(inf: string, conj: Conj): Pattern {
  const stem = inf.slice(0, -2);
  if (conj === "ar" && stem.endsWith("e")) return "ear";
  if (conj === "ir" && stem.endsWith("a")) return "air";
  if (conj === "ir" && /^(con|de|recon)stru$/.test(stem)) return "struir";
  if (conj === "ir" && stem.endsWith("u") && !/[gq]u$/.test(stem)) return "uir";
  if (conj === "er" && stem.endsWith("o")) return "oer";
  if (conj === "ir" && stem.endsWith("uz")) return "uzir";
  return null;
}

type Base = {
  pres: Six;
  pret: Six;
  impf: Six;
  futStem: string;
  subj: Six;
  pp: string;
  impTu: string | null;
  impVos: string | null;
  noImp: boolean;
  /** Pretérito with its own stem (fizeram): é, not ê, in fizéssemos. */
  strong: boolean;
};

/** The plain pattern of the verb's ending, before or after the spelling rules (for marking forms) or with everything. */
function regularBase(inf: string, conj: Conj, mode: "naive" | "spelled" | "full", radical?: Radical): Base {
  const stem = inf.slice(0, -2);
  const spell = mode !== "naive";
  const mk = (st: string, e: string) => (spell ? hiatus(st, e, conj) : st + e);
  const pattern = mode === "full" ? patternOf(inf, conj) : null;
  const rad = mode === "full" ? radical : undefined;
  let pres = PRES[conj].map((e, i) => {
    const st = rad && radicalPersons(rad).includes(i) ? radicalStem(stem, rad) : stem;
    return mk(st, e);
  });
  if (pattern === "ear") pres = pres.map((f, i) => (RHIZO.includes(i) ? mk(`${stem}i`, PRES.ar[i]) : f));
  if (pattern === "air") pres = [`${stem}io`, `${stem}is`, `${stem}i`, `${stem}ímos`, `${stem}ís`, `${stem}em`];
  if (pattern === "uir") pres = [`${stem}o`, `${stem}is`, `${stem}i`, `${stem}ímos`, `${stem}ís`, `${stem}em`];
  if (pattern === "struir") {
    const s = stem.slice(0, -1);
    pres = [`${stem}o`, `${s}óis`, `${s}ói`, `${stem}ímos`, `${stem}ís`, `${s}oem`];
  }
  if (pattern === "oer") {
    const s = stem.slice(0, -1);
    pres = [`${stem}o`, `${s}óis`, `${s}ói`, `${stem}emos`, `${stem}eis`, `${stem}em`];
  }
  if (pattern === "uzir") pres[2] = stem;
  const pret = PRET[conj].map((e) => mk(stem, e));
  const impf = (conj === "ar" ? IMPF_AR : IMPF_ER).map((e) => mk(stem, e));
  let subj: Six;
  if (!spell) subj = (conj === "ar" ? SUBJ_AR : SUBJ_ER).map((e) => stem + e);
  else subj = subjFromEu(pres[0]!, stem, conj);
  const pp = conj === "ar" ? `${stem}ado` : mk(stem, "ido");
  return {
    pres,
    pret,
    impf,
    futStem: inf,
    subj,
    pp,
    impTu: pattern === "uzir" ? `${stem} / ${stem}e` : null,
    impVos: null,
    noImp: false,
    strong: false,
  };
}

/** Present subjunctive from the eu form: -ar verbs keep the infinitive stem in nós/vós (fiquemos, passeemos), -er/-ir verbs use the eu stem throughout (durmamos, façamos). */
function subjFromEu(eu: string, stem: string, conj: Conj): Six {
  const euStem = eu.replace(/o$/, "");
  if (conj === "ar") return SUBJ_AR.map((e, i) => (i === 3 || i === 4 ? join(stem, e, conj) : join(euStem, e, conj)));
  return SUBJ_ER.map((e, i) => (i === 3 || i === 4 ? unaccentIU(euStem) : euStem) + e);
}

const six = (s: string): Six => s.split(" ").map((x) => (x === "-" ? null : x));

/** A form of a verb built on another one: man + tem -> mantém, inter + vens -> intervéns. */
function prefixed(prefix: string, form: string): string {
  return form
    .split(" / ")
    .map((f) => {
      const w = /^(tem|tens|vem|vens)$/.test(f) ? f.replace("e", "é") : f;
      return prefix + w;
    })
    .join(" / ");
}

function prefixSpec(spec: IrrSpec, prefix: string): IrrSpec {
  const map = (s?: string) =>
    s
      ?.split(" ")
      .map((f) => (f === "-" ? f : prefixed(prefix, f)))
      .join(" ");
  return {
    pres: map(spec.pres)!,
    pret: map(spec.pret),
    impf: map(spec.impf),
    fut: spec.fut ? prefix + spec.fut : undefined,
    subj: map(spec.subj),
    pp: spec.pp ? prefix + spec.pp : undefined,
    impTu: spec.impTu ? prefixed(prefix, spec.impTu) : undefined,
    impVos: spec.impVos ? prefix + spec.impVos : undefined,
    noImp: spec.noImp,
  };
}

/** The irregular data of a verb, and the verb it's built on: its own entry, a compound's base with the prefix, or a verb in -por. */
function irregularFor(inf: string): { spec: IrrSpec; model: string | null } | null {
  if (IRREGULAR[inf]) return { spec: IRREGULAR[inf], model: null };
  const c = COMPOUNDS[inf];
  if (c) return { spec: prefixSpec(IRREGULAR[c[0]], c[1]), model: c[0] };
  const m = inf.match(POR_PREFIX);
  if (m) return { spec: prefixSpec(IRREGULAR["pôr"], m[1]), model: "pôr" };
  return null;
}

function applyIrregular(base: Base, spec: IrrSpec, conj: Conj, stem: string): Base {
  const pres = six(spec.pres);
  return {
    pres,
    pret: spec.pret ? six(spec.pret) : base.pret,
    impf: spec.impf ? six(spec.impf) : base.impf,
    futStem: spec.fut ?? base.futStem,
    subj: spec.subj ? six(spec.subj) : subjFromEu(pres[0]!, stem, conj),
    pp: spec.pp ?? base.pp,
    impTu: spec.impTu ?? null,
    impVos: spec.impVos ?? null,
    noImp: !!spec.noImp,
    strong: !!spec.pret,
  };
}

/** Last vowel of a pretérito stem accented for nós/vós: fala -> falá(ssemos), come -> comê, fize -> fizé, fo -> fô. */
function accentLast(t: string, strong: boolean): string {
  const last = t.slice(-1);
  const acc: Record<string, string> = { a: "á", e: strong ? "é" : "ê", i: "í", o: "ô", u: "ú" };
  return acc[last] ? t.slice(0, -1) + acc[last] : t;
}

/** Every simple tense from a verb's base forms. */
function simpleTenses(inf: string, b: Base): Record<string, Six> {
  const infU = inf.replace(/ôr$/, "or");
  const theyPret = b.pret[5] ?? "";
  const t = theyPret.replace(/ram$/, "");
  const ta = accentLast(t, b.strong);
  const tu = t.replace(/í$/, "i");
  const fs = b.futStem;
  const pinfAcc = /[aeou]ir$/.test(infU) && !/[gq]uir$/.test(infU);
  const tables: Record<string, Six> = {
    pres: b.pres,
    pret: b.pret,
    impf: b.impf,
    mqp: [`${t}ra`, `${t}ras`, `${t}ra`, `${ta}ramos`, `${ta}reis`, `${t}ram`],
    fut: FUT.map((e) => fs + e),
    cond: COND.map((e) => fs + e),
    sbpres: b.subj,
    sbimpf: [`${t}sse`, `${t}sses`, `${t}sse`, `${ta}ssemos`, `${ta}sseis`, `${t}ssem`],
    sbfut: [`${tu}r`, `${t}res`, `${tu}r`, `${tu}rmos`, `${tu}rdes`, `${t}rem`],
    infp: PINF.map((e, i) => {
      if (e === "") return inf;
      if (pinfAcc && (i === 1 || i === 5)) return `${infU.slice(0, -2)}í${infU.slice(-1)}${e}`;
      return infU + e;
    }),
  };
  const dropS = (f: string | null) => (f ? f.replace(/s$/, "").replace(/n$/, "m") : null);
  if (b.noImp) {
    tables.impa = [null, null, null, null, null, null];
    tables.impn = [null, null, null, null, null, null];
  } else {
    tables.impa = [null, b.impTu ?? dropS(b.pres[1]), b.subj[2], b.subj[3], b.impVos ?? dropS(b.pres[4]), b.subj[5]];
    tables.impn = [null, ...[1, 2, 3, 4, 5].map((i) => (b.subj[i] ? `não ${b.subj[i]}` : null))];
  }
  return tables;
}

// ---- Verb list -----------------------------------------------------------

const SPECS = new Map(PT_VERB_SPECS.map((s) => [s.inf, s]));

/** The listed spec of an infinitive, accents optional ("por" -> pôr). */
export function ptSpecFor(inf: string): PtVerbSpec | undefined {
  const exact = SPECS.get(inf);
  if (exact) return exact;
  const k = strip(inf);
  return PT_VERB_SPECS.find((s) => strip(s.inf) === k);
}

/** "levantar-se" -> ["levantar", true]. */
export function splitReflexive(input: string): [base: string, reflexive: boolean] {
  const s = input.trim().toLowerCase().replace(/\s+/g, " ");
  const m = s.match(/^(.+?)[-\s]se$/);
  if (m) return [m[1], true];
  const p = s.match(/^se (.+)$/);
  if (p) return [p[1], true];
  return [s, false];
}

function conjOf(inf: string): Conj | null {
  if (/^[a-záàâãéêíóôõúç]+(ar)$/.test(inf)) return "ar";
  if (/^[a-záàâãéêíóôõúç]+(er)$/.test(inf) || /^[a-záàâãéêíóôõúç]*p[oô]r$/.test(inf)) return "er";
  if (/^[a-záàâãéêíóôõúç]*(ir)$/.test(inf)) return "ir";
  return null;
}

const PRONOUN: Record<Person, string> = { eu: "me", tu: "te", ele: "se", nos: "nos", vos: "vos", eles: "se" };

/** The tables with the reflexive pronoun, placed the Brazilian way ("me levanto", "tinha me levantado"; commands "levante-se"). */
function reflexivize(tables: Record<TenseId, TenseTable>): Record<TenseId, TenseTable> {
  const out = {} as Record<TenseId, TenseTable>;
  for (const [id, table] of Object.entries(tables) as [TenseId, TenseTable][]) {
    const t: TenseTable = {};
    for (const p of PERSONS6) {
      const cell = table[p];
      if (cell === undefined) continue;
      if (cell === null) {
        t[p] = null;
        continue;
      }
      const pr = PRONOUN[p];
      t[p] = cell
        .split(" / ")
        .map((f) => {
          if (id === "impa") return p === "nos" ? `${f.replace(/s$/, "")}-${pr}` : `${f}-${pr}`;
          if (id === "impn") return f.replace(/^não /, `não ${pr} `);
          const words = f.split(" ");
          if (words.length === 2) return `${words[0]} ${pr} ${words[1]}`;
          return `${pr} ${f}`;
        })
        .join(" / ");
    }
    out[id] = t;
  }
  return out;
}

const cache = new Map<string, PtConjugation | null>();

/**
 * Conjugates any Portuguese verb: a listed one with its irregular forms,
 * or an unknown one on the regular pattern of its ending. Accepts
 * "levantar-se" (reflexive tables) and missing accents on listed verbs
 * ("por" -> pôr). Null when the input isn't an infinitive.
 */
export function conjugate(input: string): PtConjugation | null {
  const key = input.normalize("NFC").trim().toLowerCase();
  if (cache.has(key)) return cache.get(key)!;
  const result = build(key);
  cache.set(key, result);
  return result;
}

function build(input: string): PtConjugation | null {
  const [raw, reflexiveTyped] = splitReflexive(input);
  const spec = ptSpecFor(raw);
  const inf = spec?.inf ?? raw;
  const conj = conjOf(inf);
  if (!conj) return null;
  const reflexive = reflexiveTyped || spec?.prn === "only";
  const stem = inf.slice(0, -2);
  const irr = irregularFor(inf);
  const radical = spec?.radical;
  const pattern = irr ? null : patternOf(inf, conj);

  let base = regularBase(inf, conj, "full", irr ? undefined : radical);
  if (irr) base = applyIrregular(base, irr.spec, conj, stem);
  const extraPp = PARTICIPLES[inf];
  if (extraPp) base.pp = extraPp;
  const dbl = DOUBLE_PARTICIPLES[inf] ?? null;
  const participle = dbl ? dbl.ter[0] : base.pp;

  const simple = simpleTenses(inf, base);
  const isOr = /p[oô]r$/.test(inf);
  const naive = simpleTenses(inf, regularBase(isOr ? inf.replace(/[oô]r$/, "oer") : inf, conj, "naive"));
  const spelled = simpleTenses(inf, regularBase(inf, conj, "spelled"));

  const impersonal = !!spec?.impersonal;
  const tenses = {} as Record<TenseId, TenseTable>;
  const marks: PtConjugation["marks"] = {};
  let anyIrregular = false;
  let anySpelling = false;
  for (const id of SIMPLE) {
    const t: TenseTable = {};
    const m: Partial<Record<Person, Irregularity>> = {};
    PERSONS6.forEach((p, i) => {
      if ((id === "impa" || id === "impn") && p === "eu") return;
      let f = simple[id][i];
      if (impersonal && (p !== "ele" || id === "impa" || id === "impn")) f = null;
      t[p] = f;
      if (!f) return;
      if (isOr && (id === "fut" || id === "cond" || id === "infp")) return;
      const n = naive[id][i];
      if (f === n) return;
      if (f === spelled[id][i] || (n && strip(f) === strip(n))) {
        m[p] = "spelling";
        anySpelling = true;
      } else {
        m[p] = "irregular";
        anyIrregular = true;
      }
    });
    tenses[id] = t;
    if (Object.keys(m).length) marks[id] = m;
  }

  const simpleIrregular = anyIrregular;

  // Participle and gerund.
  const naivePp = conj === "ar" ? `${stem}ado` : `${stem}ido`;
  const ppIrregular = !!dbl || (participle !== naivePp && strip(participle) !== strip(naivePp));
  if (ppIrregular) {
    marks.participle = { form: "irregular" };
    anyIrregular = true;
  } else if (participle !== naivePp) marks.participle = { form: "spelling" };
  const gerund = `${inf.replace(/ôr$/, "or").slice(0, -1)}ndo`;

  // Compound tenses, with ter.
  const ter = inf === "ter" ? simple : simpleTenses("ter", applyIrregular(regularBase("ter", "er", "full"), IRREGULAR.ter, "er", "t"));
  const pps = dbl ? dbl.ter : [participle];
  for (const [id, aux] of COMPOUND) {
    const t: TenseTable = {};
    const m: Partial<Record<Person, Irregularity>> = {};
    PERSONS6.forEach((p, i) => {
      if (impersonal && p !== "ele") {
        t[p] = null;
        return;
      }
      t[p] = pps.map((pp) => `${ter[aux][i]} ${pp}`).join(" / ");
      if (ppIrregular) m[p] = "irregular";
    });
    tenses[id] = t;
    if (Object.keys(m).length) marks[id] = m;
  }

  // Kind.
  let kind: VerbKind = "regular";
  if (irr || pattern === "air" || pattern === "struir" || pattern === "oer") kind = "irregular";
  else if (radical || pattern === "ear") kind = "stem";
  else if (simpleIrregular || anySpelling) kind = "spelling";

  const model = irr?.model ?? patternModel(inf, pattern, radical);

  const notes: string[] = [];
  const own = VERB_NOTES[inf];
  if (own) notes.push(...own);
  else notes.push(...generatedNotes(inf, conj, tenses, pattern, radical, irr?.model ?? null));
  if (dbl) notes.push(doubleNote(inf, dbl));
  else if (extraPp) notes.push(`The participle is irregular: "${extraPp}" ("tinha ${extraPp}"). As an adjective it agrees: "${extraPp.replace(/o$/, "a")}", "${extraPp}s".`);

  const infinitive = reflexive ? `${inf}-se` : inf;
  const known = !!spec;
  if (reflexive) notes.push(reflexiveNote(tenses, participle));
  else if (spec?.prn === "also" && spec.enSe) notes.push(pronominalNote(inf, spec.enSe, tenses));

  return {
    infinitive,
    base: inf,
    reflexive,
    ending: isOr ? "or" : conj,
    kind,
    en: spec?.en ?? "",
    enSe: spec?.enSe,
    prn: spec?.prn,
    impersonal,
    known,
    model: model && model !== inf ? model : null,
    gerund: reflexive ? `${gerund}-se` : gerund,
    participle,
    doubleParticiple: dbl ? { ter: dbl.ter, serEstar: dbl.serEstar, note: doubleNote(inf, dbl) } : null,
    pastInfinitive: reflexive ? `ter-se ${participle}` : `ter ${participle}`,
    pastGerund: reflexive ? `tendo-se ${participle}` : `tendo ${participle}`,
    tenses: reflexive ? reflexivize(tenses) : tenses,
    marks,
    irregular: anyIrregular,
    notes,
  };
}

/** The verb each pattern is taught with, for "conjugated the same way". */
function patternModel(inf: string, pattern: Pattern, radical?: Radical): string | null {
  if (pattern === "ear") return "passear";
  if (pattern === "air") return "sair";
  if (pattern === "struir") return "construir";
  if (pattern === "uir") return "incluir";
  if (pattern === "oer") return "roer";
  if (pattern === "uzir") return "produzir";
  if (radical === "mario") return "odiar";
  if (radical === "ei") return "preferir";
  if (radical === "ou") return "dormir";
  if (radical === "uo") return "subir";
  if (radical === "ii") return "prevenir";
  if (radical === "acc") return /u/.test(inf.slice(-5)) ? "reunir" : "proibir";
  return null;
}

const q = (s: string | null | undefined) => `"${(s ?? "").split(" / ")[0]}"`;

function generatedNotes(
  inf: string,
  conj: Conj,
  t: Record<TenseId, TenseTable>,
  pattern: Pattern,
  radical: Radical | undefined,
  base: string | null,
): string[] {
  const out: string[] = [];
  const stem = inf.slice(0, -2);
  if (base) {
    out.push(`Conjugated like "${base}", with the prefix: ${q(t.pres.eu)}, ${q(t.pres.ele)}, ${q(t.pret.eu)}, ${q(t.pret.ele)}.`);
    return out;
  }
  if (radical === "ei" || radical === "ou") {
    out.push(
      `The stem vowel changes in the "eu" form of the present and in the whole present subjunctive: ${q(t.pres.eu)}, ${q(`que eu ${t.sbpres.eu}`)}. Elsewhere it stays: ${q(t.pres.ele)}, ${q(t.pres.nos)}.`,
    );
  } else if (radical === "uo") {
    out.push(`The u of the stem becomes an open o in ${q(t.pres.tu)}, ${q(t.pres.ele)} and ${q(t.pres.eles)}, but not in ${q(t.pres.eu)}, ${q(t.pres.nos)} or ${q(`que eu ${t.sbpres.eu}`)}.`);
  } else if (radical === "ii") {
    out.push(`The e of the stem becomes i wherever it is stressed: ${q(t.pres.eu)}, ${q(t.pres.ele)}, ${q(t.pres.eles)}, ${q(`que eu ${t.sbpres.eu}`)}, but ${q(t.pres.nos)}.`);
  } else if (radical === "acc") {
    out.push(`The stem's ${/u/.test(stem.slice(-3)) ? "u" : "i"} takes an accent where it is stressed: ${q(t.pres.eu)}, ${q(t.pres.ele)}, ${q(t.pres.eles)}, but ${q(t.pres.nos)}.`);
  } else if (radical === "mario") {
    out.push(`Conjugated like the -ear verbs where the stem is stressed: ${q(t.pres.eu)}, ${q(t.pres.ele)}, ${q(t.pres.eles)}, ${q(`que eu ${t.sbpres.eu}`)}, but ${q(t.pres.nos)}.`);
  }
  if (pattern === "ear") out.push(`Like every -ear verb it adds an i where the stem is stressed: ${q(t.pres.eu)}, ${q(t.pres.ele)}, ${q(`que eu ${t.sbpres.eu}`)}, but ${q(t.pres.nos)}, ${q(t.pret.eu)}.`);
  if (pattern === "air") out.push(`Like every verb in -air ("sair", "cair", "trair"): ${q(t.pres.eu)}, ${q(t.pres.ele)}, ${q(t.pres.nos)}, ${q(t.pres.eles)}, with an accent where the i is stressed on its own (${q(t.pret.eu)}, ${q(t.impf.eu)}).`);
  if (pattern === "uir") out.push(`Like the other verbs in -uir: ${q(t.pres.ele)}, ${q(t.pres.nos)}, ${q(t.pres.eles)}, ${q(t.pret.eu)}, with the participle ${q(`${stem}ído`)}.`);
  if (pattern === "struir") out.push(`Like "construir" and "destruir": ${q(t.pres.tu)}, ${q(t.pres.ele)}, ${q(t.pres.eles)}.`);
  if (pattern === "oer") out.push(`Like the other verbs in -oer: ${q(t.pres.eu)}, ${q(t.pres.tu)}, ${q(t.pres.ele)}, ${q(t.pret.eu)}.`);
  if (pattern === "uzir") out.push(`Verbs in -uzir drop the final -e in the "ele" form: ${q(`ele ${t.pres.ele}`)} (not "${stem}e").`);
  if (conj === "ar") {
    if (stem.endsWith("ç")) out.push(`The ç becomes c before e (a c is already soft there): ${q(t.pret.eu)}, ${q(`que eu ${t.sbpres.eu}`)}.`);
    else if (stem.endsWith("c")) out.push(`The c becomes qu before e, to keep the k sound: ${q(t.pret.eu)}, ${q(`que eu ${t.sbpres.eu}`)}.`);
    else if (stem.endsWith("g")) out.push(`The g becomes gu before e, to keep the hard g sound: ${q(t.pret.eu)}, ${q(`que eu ${t.sbpres.eu}`)}.`);
  } else if (!pattern) {
    if (/[gq]u$/.test(stem)) out.push(`The u is dropped before a and o, where it isn't needed to keep the g hard: ${q(t.pres.eu)}, ${q(`que eu ${t.sbpres.eu}`)}.`);
    else if (stem.endsWith("c")) out.push(`The c becomes ç before a and o, to keep the s sound: ${q(t.pres.eu)}, ${q(`que eu ${t.sbpres.eu}`)}.`);
    else if (stem.endsWith("g")) out.push(`The g becomes j before a and o, to keep the soft sound: ${q(t.pres.eu)}, ${q(`que eu ${t.sbpres.eu}`)}.`);
  }
  return out;
}

function doubleNote(inf: string, d: { ter: string[]; serEstar: string; note?: string }): string {
  if (d.note) return `Two past participles. ${d.note}`;
  const reg = d.ter[0];
  const fem = d.serEstar.replace(/o$/, "a");
  return `Two past participles: "${reg}" goes with "ter" and "haver" ("tinha ${reg}"), "${d.serEstar}" with "ser" and "estar", and agrees like an adjective ("foi ${d.serEstar}", "está ${fem}"). Mixing them up ("tinha ${d.serEstar}") is a common mistake.`;
}

function pronominalNote(inf: string, enSe: string, t: Record<TenseId, TenseTable>): string {
  const f = (p: Person) => t.pres[p]?.split(" / ")[0] ?? "";
  return `Also used with a reflexive pronoun, "${inf}-se" (${enSe}): "eu me ${f("eu")}", "ela se ${f("ele")}", "nós nos ${f("nos")}", "eles se ${f("eles")}". In Brazil the pronoun goes before the verb; European Portuguese puts it after ("${f("eu")}-me").`;
}

function reflexiveNote(t: Record<TenseId, TenseTable>, pp: string): string {
  const f = (p: Person) => t.pres[p]?.split(" / ")[0] ?? "";
  const imp = t.sbpres.ele?.split(" / ")[0] ?? "";
  return `In Brazil the pronoun goes before the verb ("eu me ${f("eu")}", "ela se ${f("ele")}"), and in compound tenses before the participle ("tinha se ${pp}"). Commands are written "${imp}-se" but usually said "se ${t.pres.ele?.split(" / ")[0] ?? ""}!". European Portuguese puts the pronoun after the verb ("${f("eu")}-me").`;
}

/** Every listed verb's display infinitive. */
export function listedInfinitives(): string[] {
  return PT_VERB_SPECS.map((s) => (s.prn === "only" ? `${s.inf}-se` : s.inf));
}
