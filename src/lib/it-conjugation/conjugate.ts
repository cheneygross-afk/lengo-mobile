// Synced from cheneygross-afk/lengo:src/lib/it-conjugation/conjugate.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Italian conjugation engine: every tense of a verb from its infinitive.
// Regular verbs follow parlare (-are), credere (-ere), dormire (-ire) and
// finire (-ire with -isc-). Worked out here: the spelling changes that keep a
// sound (cerchi, paghiamo, comincerò, mangerò, studi, conosciuto), the
// compound tenses with avere or essere and the participle's agreement
// (sono andato/a, siamo andati/e), reflexive verbs (mi alzo, mi sono alzato/a,
// alzati!, non alzarti) and verbs with pronouns built in (me ne vado, ce l'ho
// fatta, ci vuole). Irregular verbs and the verbs built on them come from
// irregular.ts.

import { COMPOUNDS, DEFECTIVE_NOTES, DIRE_COMPOUNDS, IRREGULAR, MODEL_OF, VERB_NOTES, type IrrSpec } from "./irregular";
import {
  PERSONS6,
  PLURAL,
  type Auxiliary,
  type CliticType,
  type Irregularity,
  type ItConjugation,
  type Person,
  type TenseId,
  type TenseTable,
  type VerbKind,
} from "./types";
import { IT_VERB_SPECS, type ItVerbSpec } from "./verbs";

type Six = (string | null)[];
type Conj = "are" | "ere" | "ire";
type Mode = "naive" | "spelled";

/** The tenses with their own endings. */
const SIMPLE: TenseId[] = ["pres", "impf", "pr", "fut", "cond", "cgpres", "cgimpf", "imp", "impn"];
/** Compound tenses and the tense of the auxiliary each is built on. */
const COMPOUND: [TenseId, TenseId][] = [
  ["pp", "pres"],
  ["trap", "impf"],
  ["trem", "pr"],
  ["futant", "fut"],
  ["condp", "cond"],
  ["cgpass", "cgpres"],
  ["cgtrap", "cgimpf"],
];

const PRES: Record<Conj, string[]> = {
  are: ["o", "i", "a", "iamo", "ate", "ano"],
  ere: ["o", "i", "e", "iamo", "ete", "ono"],
  ire: ["o", "i", "e", "iamo", "ite", "ono"],
};
const PRES_ISC = ["isco", "isci", "isce", "iamo", "ite", "iscono"];
const CG: Record<Conj, string[]> = {
  are: ["i", "i", "i", "iamo", "iate", "ino"],
  ere: ["a", "a", "a", "iamo", "iate", "ano"],
  ire: ["a", "a", "a", "iamo", "iate", "ano"],
};
const CG_ISC = ["isca", "isca", "isca", "iamo", "iate", "iscano"];
const IMPF = ["vo", "vi", "va", "vamo", "vate", "vano"];
const FUT = ["ò", "ai", "à", "emo", "ete", "anno"];
const COND = ["ei", "esti", "ebbe", "emmo", "este", "ebbero"];
const CGIMPF = ["ssi", "ssi", "sse", "ssimo", "ste", "ssero"];

const strip = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
const six = (s: string): Six => s.split(" ").map((x) => (x === "-" ? null : x.split("/").join(" / ")));
const first = (cell: string | null | undefined) => (cell ?? "").split(" / ")[0];

/**
 * Stem + ending for an -are verb, with the spelling rules: an h keeps c
 * and g hard before e and i (cerc + i -> cerchi, pag + erò -> pagherò), a
 * stem's i merges with an ending's i (studi + i -> studi; but invii,
 * inviino where the i is stressed), and the i of -ciare / -giare / -sciare
 * is dropped before e (cominci + erò -> comincerò, mangi + erò -> mangerò).
 */
function join(stem: string, end: string, conj: Conj, mode: Mode, ii: boolean): string {
  if (mode === "naive" || conj !== "are") return stem + end;
  if (/[cg]$/.test(stem) && /^[eièé]/.test(end)) return `${stem}h${end}`;
  if (stem.endsWith("i") && end.startsWith("i")) {
    if (ii && !/^ia/.test(end)) return stem + end;
    return stem + end.slice(1);
  }
  if (!ii && /[cg]i$/.test(stem) && /^[eèé]/.test(end)) return stem.slice(0, -1) + end;
  return stem + end;
}

type Opts = { isc: boolean; ii: boolean };

type Base = {
  pres: Six;
  impf: Six;
  pr: Six;
  fut: Six;
  cond: Six;
  cgpres: Six;
  cgimpf: Six;
  imp: Six;
  impn: Six;
  gerund: string;
  participle: string;
};

/** Every simple tense of a verb, on the regular pattern of its ending or from its irregular data. */
function forms(inf: string, conj: Conj, mode: Mode, opts: Opts, spec?: IrrSpec): Base {
  const stem = inf.slice(0, -3);
  const j = (st: string, e: string) => join(st, e, conj, mode, opts.ii);

  let pres: Six;
  if (spec?.pres) pres = six(spec.pres);
  else pres = (conj === "ire" && opts.isc ? PRES_ISC : PRES[conj]).map((e) => j(stem, e));

  const fullImpf = spec?.impf?.includes(" ");
  const impfStem = spec?.impf && !fullImpf ? spec.impf : conj === "are" ? `${stem}a` : conj === "ere" ? `${stem}e` : `${stem}i`;
  const impf = fullImpf ? six(spec!.impf!) : IMPF.map((e) => impfStem + e);

  let pr: Six;
  if (spec?.pr?.includes(" ")) pr = six(spec.pr);
  else if (spec?.pr) {
    const strong = spec.pr;
    const weak = spec.prWeak ?? impfStem;
    pr = [`${strong}i`, `${weak}sti`, `${strong}e`, `${weak}mmo`, `${weak}ste`, `${strong}ero`];
  } else if (conj === "are") pr = [j(stem, "ai"), `${impfStem}sti`, j(stem, "ò"), `${impfStem}mmo`, `${impfStem}ste`, j(stem, "arono")];
  else if (conj === "ere") {
    // -etti beside -ei, except after a t (battei, not battetti).
    const t = stem.endsWith("t");
    pr = [
      t ? `${stem}ei` : `${stem}ei / ${stem}etti`,
      `${impfStem}sti`,
      t ? `${stem}é` : `${stem}é / ${stem}ette`,
      `${impfStem}mmo`,
      `${impfStem}ste`,
      t ? `${stem}erono` : `${stem}erono / ${stem}ettero`,
    ];
  } else pr = [`${stem}ii`, `${impfStem}sti`, `${stem}ì`, `${impfStem}mmo`, `${impfStem}ste`, `${stem}irono`];

  const futStem = spec?.fut ?? (conj === "are" ? j(stem, "er") : conj === "ere" ? `${stem}er` : `${stem}ir`);
  const fut = FUT.map((e) => futStem + e);
  const cond = COND.map((e) => futStem + e);

  let cgpres: Six;
  if (spec?.cg) cgpres = six(spec.cg);
  else if (spec?.pres) {
    // From the io form (vengo -> venga) and the noi form (veniamo -> veniate).
    const ioStem = first(pres[0]).replace(/o$/, "");
    const noi = first(pres[3]);
    cgpres = [`${ioStem}a`, `${ioStem}a`, `${ioStem}a`, noi, noi.replace(/iamo$/, "iate"), `${ioStem}ano`];
  } else cgpres = (conj === "ire" && opts.isc ? CG_ISC : CG[conj]).map((e) => j(stem, e));

  const cgimpfStem = spec?.cgimpf ?? impfStem;
  const cgimpf = CGIMPF.map((e) => cgimpfStem + e);

  const gerund = spec?.ger ?? (spec?.impf && !fullImpf ? `${impfStem}ndo` : conj === "are" ? `${stem}ando` : `${stem}endo`);
  let participle: string;
  if (spec?.pp) participle = spec.pp;
  else if (conj === "are") participle = `${stem}ato`;
  else if (conj === "ire") participle = `${stem}ito`;
  else participle = mode === "spelled" && /[cg]$/.test(stem) ? `${stem}iuto` : `${stem}uto`;

  let imp: Six;
  let impn: Six;
  if (spec?.noImp) {
    imp = [null, null, null, null, null, null];
    impn = [null, null, null, null, null, null];
  } else {
    const tu = spec?.impTu ? spec.impTu.split("/").join(" / ") : conj === "are" && !spec?.pres ? j(stem, "a") : pres[1];
    const voi = spec?.impVoi ?? pres[4];
    imp = [null, tu, cgpres[2], pres[3], voi, cgpres[5]];
    impn = [null, `non ${inf}`, ...[2, 3, 4, 5].map((i) => (imp[i] ? `non ${imp[i]}` : null))];
  }
  return { pres, impf, pr, fut, cond, cgpres, cgimpf, imp, impn, gerund, participle };
}

// ---- Verb list -----------------------------------------------------------

const SPECS = new Map(IT_VERB_SPECS.map((s) => [s.inf, s]));

/** The listed spec of an infinitive, accents and case ignored. */
export function itSpecFor(inf: string): ItVerbSpec | undefined {
  const exact = SPECS.get(inf);
  if (exact) return exact;
  const k = strip(inf.toLowerCase());
  return IT_VERB_SPECS.find((s) => strip(s.inf) === k);
}

const CLITIC_SUFFIX: [CliticType, RegExp][] = [
  ["sene", /sene$/],
  ["sela", /sela$/],
  ["cela", /cela$/],
  ["ci", /ci$/],
  ["si", /si$/],
];

/** The verb under the pronouns: "alzarsi" -> "alzare", "porsi" -> "porre", "andarsene" -> "andare". */
function baseOf(stemWithR: string): string[] {
  // "alzar" -> alzare; "por" -> porre (and the unlikely "pore").
  return [`${stemWithR}e`, `${stemWithR}re`];
}

/** "alzarsi" -> ["alzare", "si"]; "andarsene" -> ["andare", "sene"]; "parlare" -> ["parlare", null]. */
export function splitClitic(input: string): [base: string, clitic: CliticType | null] {
  const s = input.trim().toLowerCase().replace(/\s+/g, " ");
  for (const [type, re] of CLITIC_SUFFIX) {
    if (!re.test(s)) continue;
    const stem = s.replace(re, "");
    if (!/r$/.test(stem)) continue;
    // Only the listed verbs take ce/ci/ne pronouns; any verb can be reflexive.
    if (type !== "si" && !SPECS.get(s)?.cl) continue;
    const cands = baseOf(stem);
    const listed = cands.find((c) => SPECS.has(c) || IRREGULAR[c] || COMPOUNDS[c]);
    return [listed ?? cands[0], type];
  }
  return [s, null];
}

function conjOf(inf: string): Conj | "rre" | null {
  if (/^[a-zàèéìòù]+are$/.test(inf)) return "are";
  if (/^[a-zàèéìòù]+ere$/.test(inf)) return "ere";
  if (/^[a-zàèéìòù]+ire$/.test(inf)) return "ire";
  if (/^[a-z]+rre$/.test(inf)) return "rre";
  return null;
}

/** A form of a verb built on another: man + tengo -> mantengo; pro for the tra of traduco -> produco. */
function prefixSpec(spec: IrrSpec, prefix: string, stripPrefix = ""): IrrSpec {
  const one = (f: string) => (f === "-" ? f : prefix + (stripPrefix && f.startsWith(stripPrefix) ? f.slice(stripPrefix.length) : f));
  const map = (s?: string) =>
    s
      ?.split(" ")
      .map((tok) => tok.split("/").map(one).join("/"))
      .join(" ");
  return {
    pres: map(spec.pres),
    impf: map(spec.impf),
    pr: map(spec.pr),
    prWeak: spec.prWeak ? one(spec.prWeak) : undefined,
    fut: spec.fut ? one(spec.fut) : undefined,
    cg: map(spec.cg),
    cgimpf: spec.cgimpf ? one(spec.cgimpf) : undefined,
    pp: spec.pp ? one(spec.pp) : undefined,
    ppAlt: spec.ppAlt ? one(spec.ppAlt) : undefined,
    ger: spec.ger ? one(spec.ger) : undefined,
    impTu: map(spec.impTu),
    impVoi: spec.impVoi ? one(spec.impVoi) : undefined,
    noImp: spec.noImp,
  };
}

/** The irregular data of a verb and the verb it's built on: its own entry, a listed compound, or an unlisted verb in -porre, -durre, -trarre. */
function irregularFor(inf: string): { spec: IrrSpec; model: string | null } | null {
  if (IRREGULAR[inf]) return { spec: IRREGULAR[inf], model: MODEL_OF[inf] ?? null };
  const c = COMPOUNDS[inf];
  if (c) {
    const [baseInf, prefix, stripP] = c;
    const spec = prefixSpec(IRREGULAR[baseInf], prefix, stripP);
    if (DIRE_COMPOUNDS.has(inf)) spec.impTu = `${prefix}dici`;
    return { spec, model: baseInf };
  }
  let m = inf.match(/^(.+)porre$/);
  if (m) return { spec: prefixSpec(IRREGULAR.porre, m[1]), model: "porre" };
  m = inf.match(/^(.+)durre$/);
  if (m) return { spec: prefixSpec(IRREGULAR.tradurre, m[1], "tra"), model: "tradurre" };
  m = inf.match(/^(.+)trarre$/);
  if (m) return { spec: prefixSpec(IRREGULAR.trarre, m[1]), model: "trarre" };
  return null;
}

/** The "-ere" infinitive an -rre verb comes from, for marking its forms: porre -> ponere, tradurre -> traducere, trarre -> traere. */
function latinInfinitive(inf: string): string {
  return inf.replace(/porre$/, "ponere").replace(/durre$/, "ducere").replace(/trarre$/, "traere");
}

// ---- Pronouns -------------------------------------------------------------

type CliticSpec = {
  /** Before a conjugated verb: "mi" alzo, "me ne" vado. */
  pro: Record<Person, string>;
  /** Attached to a command (tu, noi, voi) or an infinitive: alza"ti", andiamo"cene". */
  enc: Record<Person, string>;
  /** On the infinitive and gerund: alzar"si", andando"sene". */
  inf: string;
  /** The auxiliary it forces, if any (reflexives take essere). */
  aux: Auxiliary | null;
  /** How the participle agrees: with the subject, or with "la" (ce l'ho fatta). */
  agree: "subject" | "fem";
};

const SI = { io: "mi", tu: "ti", lui: "si", noi: "ci", voi: "vi", loro: "si" };
const CLITICS: Record<CliticType, CliticSpec> = {
  si: { pro: SI, enc: SI, inf: "si", aux: "essere", agree: "subject" },
  sene: {
    pro: { io: "me ne", tu: "te ne", lui: "se ne", noi: "ce ne", voi: "ve ne", loro: "se ne" },
    enc: { io: "mene", tu: "tene", lui: "sene", noi: "cene", voi: "vene", loro: "sene" },
    inf: "sene",
    aux: "essere",
    agree: "subject",
  },
  sela: {
    pro: { io: "me la", tu: "te la", lui: "se la", noi: "ce la", voi: "ve la", loro: "se la" },
    enc: { io: "mela", tu: "tela", lui: "sela", noi: "cela", voi: "vela", loro: "sela" },
    inf: "sela",
    aux: "essere",
    agree: "fem",
  },
  cela: {
    pro: { io: "ce la", tu: "ce la", lui: "ce la", noi: "ce la", voi: "ce la", loro: "ce la" },
    enc: { io: "cela", tu: "cela", lui: "cela", noi: "cela", voi: "cela", loro: "cela" },
    inf: "cela",
    aux: null,
    agree: "fem",
  },
  ci: {
    pro: { io: "ci", tu: "ci", lui: "ci", noi: "ci", voi: "ci", loro: "ci" },
    enc: { io: "ci", tu: "ci", lui: "ci", noi: "ci", voi: "ci", loro: "ci" },
    inf: "ci",
    aux: null,
    agree: "subject",
  },
};

/** Verbs with pronouns built in that have no imperative in use. */
const NO_IMP_CLITIC = new Set(["farcela", "avercela", "metterci", "volerci", "sentirsela"]);

/** Pronoun + verb, with the elisions written Italian uses: ce l'ho, se n'è andato, c'è voluto. */
function attachBefore(pro: string, form: string, type: CliticType): string {
  if (/(^| )la$/.test(pro) && /^[aeiouhàèéìòù]/.test(form)) return `${pro.slice(0, -2)}l'${form}`;
  if (/(^| )ne$/.test(pro) && /^è/.test(form)) return `${pro.slice(0, -2)}n'${form}`;
  if (type === "ci" && /^(è|er)/.test(form)) return `c'${form}`;
  return `${pro} ${form}`;
}

/** A command + pronoun: alza + ti -> alzati, va' + tene -> vattene, fa' + ti -> fatti. */
function attachAfter(form: string, enc: string): string {
  if (form.endsWith("'")) return form.slice(0, -1) + enc[0] + enc;
  return form + enc;
}

/** The infinitive without its final -e (or -re for -rre verbs), ready for a pronoun: alzar-, por-. */
function infStem(inf: string): string {
  return inf.endsWith("rre") ? inf.slice(0, -2) : inf.slice(0, -1);
}

function applyClitic(tables: Record<TenseId, TenseTable>, type: CliticType, base: string): Record<TenseId, TenseTable> {
  const c = CLITICS[type];
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
      const alts = cell.split(" / ");
      let forms: string[];
      if (id === "imp") {
        if (p === "lui" || p === "loro") forms = alts.map((f) => attachBefore(c.pro[p], f, type));
        else {
          const apo = alts.find((f) => f.endsWith("'"));
          forms = [attachAfter(apo ?? alts[0], c.enc[p])];
        }
      } else if (id === "impn") {
        const bare = alts.map((f) => f.replace(/^non /, ""));
        if (p === "tu") forms = [`non ${infStem(base)}${c.enc.tu}`, `non ${attachBefore(c.pro.tu, base, type)}`];
        else if (p === "lui" || p === "loro") forms = bare.map((f) => `non ${attachBefore(c.pro[p], f, type)}`);
        else forms = [`non ${bare[0]}${c.enc[p]}`, `non ${attachBefore(c.pro[p], bare[0], type)}`];
      } else forms = alts.map((f) => attachBefore(c.pro[p], f, type));
      t[p] = [...new Set(forms)].join(" / ");
    }
    out[id] = t;
  }
  return out;
}

// ---- Building a conjugation ---------------------------------------------

const cache = new Map<string, ItConjugation | null>();

/**
 * Conjugates any Italian verb: a listed one with its irregular forms, or an
 * unknown one on the regular pattern of its ending (unknown -ire verbs
 * with -isc-, the larger group). Accepts "alzarsi" (reflexive tables) and
 * the listed verbs with pronouns built in ("andarsene"). `aux` asks for the
 * other auxiliary of a verb that takes both ("finire" with essere). Null
 * when the input isn't an infinitive.
 */
export function conjugate(input: string, aux?: Auxiliary): ItConjugation | null {
  const key = `${input.normalize("NFC").trim().toLowerCase()}|${aux ?? ""}`;
  if (cache.has(key)) return cache.get(key)!;
  const result = build(input.normalize("NFC").trim().toLowerCase(), aux);
  cache.set(key, result);
  return result;
}

const auxCache = new Map<Auxiliary, Base>();
function auxForms(aux: Auxiliary): Base {
  let b = auxCache.get(aux);
  if (!b) {
    b = forms(aux, "ere", "spelled", { isc: false, ii: false }, IRREGULAR[aux]);
    auxCache.set(aux, b);
  }
  return b;
}

function build(input: string, auxWanted?: Auxiliary): ItConjugation | null {
  let listed = SPECS.get(input) ?? itSpecFor(input);
  // A verb that's only reflexive, typed without its pronoun ("pentire").
  if (!listed && /[aei]re$|rre$/.test(input)) {
    const refl = SPECS.get(`${infStem(input)}si`);
    if (refl?.prn === "only") listed = refl;
  }
  const display = listed?.inf ?? input;
  const [baseInf, cliticType] = splitClitic(display);
  const conjRaw = conjOf(baseInf);
  if (!conjRaw) return null;
  const baseSpec = SPECS.get(baseInf);
  // The spec that carries the meaning and flags: the typed verb if listed, else its base.
  const spec = listed ?? baseSpec;
  const irr = irregularFor(baseInf);
  if (conjRaw === "rre" && !irr) return null;
  const conj: Conj = conjRaw === "rre" ? "ere" : conjRaw;
  const opts: Opts = {
    // Unknown -ire verbs take -isc-, like most of them.
    isc: conj === "ire" && !irr && (spec ? !!spec.isc : true),
    ii: !!spec?.ii,
  };

  const stemInf = conjRaw === "rre" ? latinInfinitive(baseInf) : baseInf;
  const b = forms(stemInf, conj, "spelled", opts, irr?.spec);
  const naive = forms(stemInf, conj, "naive", opts);
  const spelled = forms(stemInf, conj, "spelled", opts);
  // -rre verbs: the negative tu command is "non" + the real infinitive.
  if (conjRaw === "rre") b.impn[1] = b.impn[1] ? `non ${baseInf}` : null;

  const impersonal = spec?.impersonal ?? null;
  const allowed = (p: Person) => !impersonal || p === "lui" || (impersonal === "3" && p === "loro");

  const tenses = {} as Record<TenseId, TenseTable>;
  const marks: ItConjugation["marks"] = {};
  let anyIrregular = false;
  let anySpelling = false;
  for (const id of SIMPLE) {
    const t: TenseTable = {};
    const m: Partial<Record<Person, Irregularity>> = {};
    PERSONS6.forEach((p, i) => {
      if ((id === "imp" || id === "impn") && p === "io") return;
      let f = b[id as keyof Base] as Six;
      let form = f[i];
      if (!allowed(p) || (impersonal && (id === "imp" || id === "impn"))) form = null;
      t[p] = form;
      if (!form) return;
      f = naive[id as keyof Base] as Six;
      const n = f[i];
      if (form === n) return;
      const s = (spelled[id as keyof Base] as Six)[i];
      if (form === s || (n && strip(form) === strip(n))) {
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

  // Participle and gerund.
  const participle = b.participle;
  if (participle !== naive.participle) {
    const kind: Irregularity = participle === spelled.participle ? "spelling" : "irregular";
    marks.participle = { form: kind };
    if (kind === "irregular") anyIrregular = true;
    else anySpelling = true;
  }
  if (b.gerund !== naive.gerund) {
    marks.gerund = { form: "irregular" };
    anyIrregular = true;
  }

  // The auxiliary: a reflexive or a si-verb takes essere; otherwise the listed one, or the other one if asked.
  const clitic = cliticType ? CLITICS[cliticType] : null;
  let aux: Auxiliary = clitic?.aux ?? spec?.aux ?? "avere";
  let auxAlt: Auxiliary | null = clitic?.aux ? null : (spec?.auxAlt ?? null);
  if (auxWanted && auxAlt === auxWanted) {
    auxAlt = aux;
    aux = auxWanted;
  }
  const agree: "subject" | "fem" | "none" =
    clitic?.agree === "fem" ? "fem" : aux === "essere" && impersonal !== "lui" ? "subject" : "none";
  const ppStem = participle.replace(/o$/, "");
  const ppFor = (p: Person) =>
    agree === "fem" ? `${ppStem}a` : agree === "subject" ? (PLURAL.includes(p) ? `${ppStem}i/e` : `${ppStem}o/a`) : participle;

  const auxB = auxForms(aux);
  for (const [id, from] of COMPOUND) {
    const t: TenseTable = {};
    const m: Partial<Record<Person, Irregularity>> = {};
    PERSONS6.forEach((p, i) => {
      if (!allowed(p)) {
        t[p] = null;
        return;
      }
      const auxCell = (auxB[from as keyof Base] as Six)[i]!;
      t[p] = auxCell
        .split(" / ")
        .map((a) => `${a} ${ppFor(p)}`)
        .join(" / ");
      if (marks.participle?.form === "irregular") m[p] = "irregular";
    });
    tenses[id] = t;
    if (Object.keys(m).length) marks[id] = m;
  }

  const auxInf = aux === "essere" ? "esser" : "aver";
  const auxGer = aux === "essere" ? "essendo" : "avendo";
  const pp1 = ppFor("io");
  let gerund = b.gerund;
  let pastInfinitive = `${aux === "essere" ? "essere" : "aver"} ${pp1}`;
  let pastGerund = `${auxGer} ${pp1}`;
  let finalTenses = tenses;
  if (cliticType && clitic) {
    finalTenses = applyClitic(tenses, cliticType, baseInf);
    if (NO_IMP_CLITIC.has(display)) {
      finalTenses.imp = { tu: null, lui: null, noi: null, voi: null, loro: null };
      finalTenses.impn = { tu: null, lui: null, noi: null, voi: null, loro: null };
    }
    gerund = `${b.gerund}${clitic.inf}`;
    pastInfinitive = `${auxInf}${clitic.inf} ${pp1}`;
    pastGerund = `${auxGer}${clitic.inf} ${pp1}`;
  }

  // Kind.
  let kind: VerbKind = "regular";
  if (irr) kind = "irregular";
  else if (opts.isc) kind = "isc";
  else if (anySpelling) kind = "spelling";

  const notes: string[] = [];
  const own = VERB_NOTES[baseInf];
  const builtIn = cliticType !== null && cliticType !== "si";
  if (builtIn) {
    // A verb with pronouns built in gets its own notes only.
  } else if (own) notes.push(...own);
  else notes.push(...generatedNotes(baseInf, conj, tenses, opts, irr?.model ?? null, participle, b.participle !== naive.participle && marks.participle?.form === "irregular"));
  if (DEFECTIVE_NOTES[baseInf] && !builtIn) notes.push(DEFECTIVE_NOTES[baseInf]);
  if (irr?.spec.ppAlt) notes.push(`Two participles: "${participle}" and "${irr.spec.ppAlt}" are both correct; "${participle}" is the everyday one.`);
  if (baseInf === "riflettere") notes.push('"Riflettuto" is the participle for thinking ("ci ho riflettuto"); for light and mirrors it is "riflesso" ("la luce si è riflessa").');
  if (!clitic && (!own || auxAlt)) notes.push(...auxNotes(spec, aux, auxAlt, tenses, participle, impersonal));
  if (cliticType === "si") notes.push(reflexiveNote(finalTenses, baseInf));
  else if (cliticType) notes.push(...(CLITIC_NOTES[display] ?? []));
  else if (spec?.prn === "also" && spec.enSe) notes.push(pronominalNote(baseInf, spec.enSe, tenses));

  const enSe = spec?.enSe;
  return {
    infinitive: cliticType === "si" && !listed?.cl ? `${infStem(baseInf)}si` : display,
    base: baseInf,
    reflexive: cliticType === "si",
    clitic: cliticType,
    ending: conjRaw,
    kind,
    en: spec?.en ?? "",
    enSe,
    prn: spec?.prn,
    impersonal,
    known: !!spec,
    model: cliticType && cliticType !== "si" ? baseInf : (irr?.model ?? patternModel(baseInf, conj, opts)),
    gerund,
    participle,
    participleAlt: irr?.spec.ppAlt ?? null,
    aux,
    auxAlt,
    pastInfinitive,
    pastGerund,
    tenses: finalTenses,
    marks,
    irregular: anyIrregular,
    notes,
  };
}

/** The verb each spelling pattern is taught with, for "conjugated the same way". */
function patternModel(inf: string, conj: Conj, opts: Opts): string | null {
  const stem = inf.slice(0, -3);
  if (conj === "ire" && opts.isc) return inf === "finire" ? null : "finire";
  if (conj !== "are") return null;
  if (opts.ii) return inf === "inviare" ? null : "inviare";
  if (/c$/.test(stem)) return inf === "cercare" ? null : "cercare";
  if (/g$/.test(stem)) return inf === "pagare" ? null : "pagare";
  if (/[cg]i$/.test(stem)) return inf === "mangiare" ? null : "mangiare";
  if (/i$/.test(stem)) return inf === "studiare" ? null : "studiare";
  return null;
}

const q = (s: string | null | undefined) => `"${first(s)}"`;

function generatedNotes(inf: string, conj: Conj, t: Record<TenseId, TenseTable>, opts: Opts, model: string | null, pp: string, ppIrregular: boolean): string[] {
  const out: string[] = [];
  const stem = inf.slice(0, -3);
  if (model) {
    out.push(`Conjugated like "${model}", with the prefix: ${q(t.pres.io)}, ${q(t.pres.lui)}, ${q(t.pr.io)}, ${q(t.fut.io)}, participle "${pp}".`);
    return out;
  }
  if (IRREGULAR[inf]) {
    if (!t.pres.io) return out;
    const spec = IRREGULAR[inf];
    const bits: string[] = [];
    if (spec.pres) bits.push(`present ${q(t.pres.io)}, ${q(t.pres.lui)}, ${q(t.pres.loro)}`);
    if (spec.fut) bits.push(`future ${q(t.fut.io)}`);
    if (spec.pr && !spec.pr.includes(" ")) bits.push(`passato remoto ${q(t.pr.io)}, ${q(t.pr.lui)}, ${q(t.pr.loro)} (tu, noi and voi are regular: ${q(t.pr.tu)})`);
    else if (spec.pr) bits.push(`passato remoto ${q(t.pr.io)}, ${q(t.pr.lui)}`);
    if (ppIrregular) bits.push(`participle "${pp}"`);
    if (bits.length) out.push(`Irregular in the ${bits.join("; ")}. Everything else is regular.`);
    return out;
  }
  if (opts.isc) out.push(`${inf === "finire" ? "It" : 'Like "finire", it'} adds -isc- where the stress would fall on the stem: ${q(t.pres.io)}, ${q(t.pres.tu)}, ${q(t.pres.lui)}, ${q(t.pres.loro)}, ${q(`che io ${t.cgpres.io}`)}, but ${q(t.pres.noi)}, ${q(t.pres.voi)}.`);
  if (conj === "are") {
    if (opts.ii) out.push(`The i of the stem is stressed in ${q(t.pres.io)}, so it stays before an ending in i: ${q(t.pres.tu)}, ${q(`che loro ${t.cgpres.loro}`)}; but ${q(t.pres.noi)}.`);
    else if (/c$/.test(stem)) out.push(`An h keeps the c hard before e and i: ${q(t.pres.tu)}, ${q(t.pres.noi)}, ${q(t.fut.io)}.`);
    else if (/g$/.test(stem)) out.push(`An h keeps the g hard before e and i: ${q(t.pres.tu)}, ${q(t.pres.noi)}, ${q(t.fut.io)}.`);
    else if (/[cg]i$/.test(stem)) out.push(`The i is only there to soften the ${stem.slice(-2, -1)}, so it is dropped before e and i: ${q(t.pres.tu)}, ${q(t.fut.io)} (not "${stem}erò").`);
    else if (/i$/.test(stem)) out.push(`The stem ends in i, so there is only one i before an ending in i: ${q(t.pres.tu)}, ${q(t.pres.noi)}, ${q(`che loro ${t.cgpres.loro}`)}.`);
  }
  if (conj === "ere" && /[cg]$/.test(stem) && !ppIrregular && pp.endsWith("iuto")) out.push(`The participle adds an i to keep the soft sound: "${pp}".`);
  return out;
}

function agreeingExample(tenses: Record<TenseId, TenseTable>): string {
  const lui = first(tenses.pp.lui);
  const loro = first(tenses.pp.loro);
  const [m, f] = [lui.replace(/o\/a$/, "o"), lui.replace(/o\/a$/, "a")];
  return `"lui ${m}", "lei ${f}", "loro ${loro.replace(/i\/e$/, "i")}", "le ragazze ${loro.replace(/i\/e$/, "e")}"`;
}

function auxNotes(spec: ItVerbSpec | undefined, aux: Auxiliary, auxAlt: Auxiliary | null, tenses: Record<TenseId, TenseTable>, pp: string, impersonal: ItConjugation["impersonal"]): string[] {
  const out: string[] = [];
  if (auxAlt) {
    out.push(`Takes both auxiliaries. ${spec?.auxNote ?? `Avere with a direct object ("ho ${pp} ..."), essere without one ("è ${pp.replace(/o$/, "o/a")}").`}`);
  } else if (aux === "essere" && impersonal !== "lui" && tenses.pp.lui) {
    out.push(`Takes "essere" in the compound tenses, so the participle agrees with the subject like an adjective: ${agreeingExample(tenses)}.`);
  }
  return out;
}

function pronominalNote(inf: string, enSe: string, t: Record<TenseId, TenseTable>): string {
  const f = (p: Person) => first(t.pres[p]);
  const se = `${infStem(inf)}si`;
  return `Also used with a reflexive pronoun, "${se}" (${enSe}): "mi ${f("io")}", "ti ${f("tu")}", "si ${f("lui")}", "ci ${f("noi")}". Switch to "${se}" above to see every tense; reflexive verbs take "essere" in the compound tenses.`;
}

function reflexiveNote(t: Record<TenseId, TenseTable>, base: string): string {
  return `The pronoun goes before a conjugated verb (${q(t.pres.io)}, ${q(t.pp.lui)}) and is attached to the end of a command and an infinitive (${q(t.imp.tu)}, ${q(t.imp.voi)}, "${infStem(base)}si"). Reflexive verbs always take "essere", so the participle agrees with the subject: ${q(t.pp.loro)}. With a modal it can go either side: "mi devo alzare" or "devo alzarmi".`;
}

const CLITIC_NOTES: Record<string, string[]> = {
  andarsene: [
    '"Andare" with "se ne" (away from here): "me ne vado" (I\'m off), "se n\'è andata" (she\'s gone). The pronouns come in pairs, "me ne", "te ne", "se ne", "ce ne", "ve ne", and stick to a command: "vattene!" (go away!), "andiamocene!" (let\'s go!).',
  ],
  farcela: [
    '"Fare" with "ce la" (to manage it): "ce la faccio" (I can do it), "non ce la faccio più" (I can\'t take any more). In the compound tenses "la" becomes "l\'" and the participle agrees with it: "ce l\'ho fatta!" (I made it!).',
  ],
  cavarsela: ['"Cavare" with "se la" (to get by): "me la cavo" (I manage), "te la sei cavata bene" (you did well). The participle agrees with "la": "ce la siamo cavata".'],
  prendersela: [
    '"Prendere" with "se la" (to take it badly): "non prendertela!" (don\'t take it badly), "se l\'è presa" (he got upset). The participle agrees with "la": "me la sono presa".',
  ],
  sentirsela: ['"Sentire" with "se la" (to feel up to it): "non me la sento" (I don\'t feel up to it), "te la senti di guidare?". The participle agrees with "la": "non me la sono sentita".'],
  avercela: ['"Avere" with "ce la" (to have it in for someone): "ce l\'ho con te" (I\'m angry with you), "con chi ce l\'hai?". "La" becomes "l\'" before every form of "avere" that starts with a vowel or h.'],
  metterci: ['"Mettere" with "ci" (to take, of time someone spends): "ci metto un\'ora" (it takes me an hour), "quanto ci hai messo?". It takes "avere". Compare "volerci": "ci vuole un\'ora" (it takes an hour).'],
  volerci: [
    '"Volere" with "ci" (to take, to be needed), only in the lui and loro forms: "ci vuole un\'ora" (it takes an hour), "ci vogliono due ore" (it takes two hours). It takes "essere", so the participle agrees: "c\'è voluta un\'ora", "ci sono voluti due giorni".',
  ],
};

/** The reflexive infinitive of a verb: "alzare" -> "alzarsi", "porre" -> "porsi". */
export function reflexiveInfinitive(inf: string): string {
  return `${infStem(inf)}si`;
}

/** Every listed verb's display infinitive. */
export function listedInfinitives(): string[] {
  return IT_VERB_SPECS.map((s) => s.inf);
}
