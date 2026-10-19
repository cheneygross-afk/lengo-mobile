// Synced from cheneygross-afk/lengo:src/lib/de-conjugation/conjugate.ts by scripts/sync-content.mjs -- edit it there, not here.
// The German conjugation engine: every tense of a verb from its principal
// parts. Weak verbs follow machen, with the -e- after dental stems
// (arbeitest), the short du form after s/ß/z (heißt) and the -eln/-ern
// patterns (lächle, ändere) worked out here; strong, mixed and irregular
// verbs come from irregular.ts. Prefixes are found here: a separable
// prefix is marked with a dot in verbs.ts (an·fangen), an inseparable one
// (be-, ver-, über- without a dot...) is recognized, and the verb behind
// it is conjugated like the simple verb (verstehen like stehen).

import { FULL, STRONG, type FullSpec, type StrongSpec } from "./irregular";
import { PERSONS6, IMP_PERSONS, type DeConjugation, type Irregularity, type Person, type TenseId, type TenseTable, type VerbKind } from "./types";
import { DE_VERB_SPECS, type DeVerbSpec } from "./verbs";

type Six = (string | null)[];

/** Simple tenses with their own forms; the rest are built with haben/sein/werden. */
const SIMPLE: TenseId[] = ["pres", "praet", "k2", "k1", "imp"];

// ---- Prefixes ----------------------------------------------------------

/** Always inseparable. */
const INSEP = ["miss", "emp", "ent", "ver", "zer", "be", "ge", "er"];
/** Inseparable when written without a dot in the verb list (übersetzen, unterhalten, umarmen, wiederholen). */
const INSEP_DUAL = ["hinter", "wieder", "unter", "wider", "durch", "über", "voll", "um"];
/** Separable prefixes tried on verbs that aren't in the list (longest first). */
const SEP = [
  "zusammen", "entgegen", "herunter", "hinunter", "zurück", "vorbei", "voraus", "heraus", "herein", "hinaus", "hinein",
  "herauf", "hinauf", "herum", "hinzu", "weiter", "wieder", "nieder", "kennen", "empor", "statt", "durch", "fest", "fort",
  "frei", "fern", "teil", "dar", "los", "weg", "mit", "nach", "vor", "auf", "aus", "ein", "bei", "her", "hin", "ab", "an",
  "um", "zu",
];

/** -ieren verbs that are native German and keep ge- (geschmiert). */
const IEREN_GE = new Set(["schmieren", "zieren", "gieren", "stieren", "frieren", "verlieren"]);

let byInf: Map<string, DeVerbSpec> | null = null;

/** The verb-list entry for an infinitive without sich or the dot ("anfangen", "freuen"). */
export function deSpecFor(inf: string): DeVerbSpec | undefined {
  if (!byInf) {
    byInf = new Map();
    for (const s of DE_VERB_SPECS) byInf.set(s.inf, s);
  }
  return byInf.get(inf);
}

const isKnown = (w: string) => !!(STRONG[w] || FULL[w] || deSpecFor(w));
const VOWEL = /[aeiouäöüy]/;

/** Does `rem` look like a verb after the inseparable prefix `p`? (be+kommen yes, be+ten no: beten.) */
function validInsep(p: string, rem: string): boolean {
  if (rem.length < 3 || !rem.endsWith("n")) return false;
  if (isKnown(rem)) return true;
  if (/^([^aeiouäöü])\1/.test(rem)) return false;
  if (!VOWEL.test(rem.replace(/(eln|ern|en|n)$/, ""))) return false;
  if (/^[aeiouäöü]/.test(rem)) {
    if (p === "ge") return false;
    if (p === "be") return rem.length >= 6 && !rem.startsWith("i");
  }
  return true;
}

/** Does `rem` look like a verb after a separable prefix, for a verb not in the list? */
function validSep(p: string, rem: string): boolean {
  if (rem.length < 3 || !rem.endsWith("n")) return false;
  if (isKnown(rem)) return true;
  if (rem.length < 4 || /^[aeiouäöü]/.test(rem) || rem.endsWith("ieren")) return false;
  if (/^([^aeiouäöü])\1/.test(rem) || rem[0] === p[p.length - 1]) return false;
  return VOWEL.test(rem.replace(/(eln|ern|en|n)$/, ""));
}

type Core = {
  /** Inseparable prefix(es) in front of the root ("ver", "missver"), or "". */
  insep: string;
  /** The simple verb ("stehen" for verstehen). */
  root: string;
  strong?: StrongSpec;
  full?: FullSpec;
};

const coreCache = new Map<string, Core>();

/** Splits a verb (without its separable prefix) into inseparable prefix and root. */
function resolveCore(core: string, dual = true): Core {
  const hit = coreCache.get(core);
  if (hit && dual) return hit;
  let out: Core = { insep: "", root: core };
  if (FULL[core]) out = { insep: "", root: core, full: FULL[core] };
  else if (STRONG[core]) out = { insep: "", root: core, strong: STRONG[core] };
  else {
    for (const p of dual ? [...INSEP_DUAL, ...INSEP] : INSEP) {
      if (!core.startsWith(p)) continue;
      const rem = core.slice(p.length);
      if (!validInsep(p, rem)) continue;
      const r = resolveCore(rem, false);
      out = { insep: p + r.insep, root: r.root, strong: r.strong, full: r.full };
      break;
    }
  }
  if (dual) coreCache.set(core, out);
  return out;
}

// ---- Stems and endings -------------------------------------------------

/** "atm", "rechn", "öffn", "arbeit", "find": an -e- goes before -st and -t. */
const isDental = (stem: string) => /[td]$/.test(stem) || /(?:[^aeiouäöüylrhmn]|ch)[mn]$/.test(stem);
const isSibilant = (stem: string) => /[sßzx]$/.test(stem);

type Shape = {
  /** Present stem ("mach", "lächel", "änder"). */
  stem: string;
  eln: boolean;
  ern: boolean;
  dental: boolean;
  sibilant: boolean;
};

function shapeOf(core: string): Shape {
  const eln = core.endsWith("eln");
  const ern = core.endsWith("ern");
  const stem = eln || ern ? core.slice(0, -1) : core.replace(/e?n$/, "");
  return { stem, eln, ern, dental: !eln && !ern && isDental(stem), sibilant: !eln && !ern && isSibilant(stem) };
}

const join = (alts: string[]) => [...new Set(alts)].join(" / ");
const alts = (f: string | null) => (f ? f.split(" / ") : []);

/** Present du and er forms from a changed stem: gib -> gibst, gibt; hält -> hältst, hält; lies -> liest. */
function changedDuEr(c: string): [string, string] {
  if (/st$/.test(c)) return [c, c];
  if (/t$/.test(c)) return [`${c}st`, c];
  if (isSibilant(c)) return [`${c}t`, `${c}t`];
  return [`${c}st`, `${c}t`];
}

function weakPresent(core: string, sh: Shape): Six {
  const { stem } = sh;
  if (sh.eln) return [`${stem.slice(0, -2)}le`, `${stem}st`, `${stem}t`, core, `${stem}t`, core];
  if (sh.ern) return [`${stem}e`, `${stem}st`, `${stem}t`, core, `${stem}t`, core];
  const du = sh.dental ? `${stem}est` : sh.sibilant ? `${stem}t` : `${stem}st`;
  const t = sh.dental ? `${stem}et` : `${stem}t`;
  return [`${stem}e`, du, t, core, t, core];
}

/** Präteritum from its er form: weak style after -e (machte, wurde, schrie), strong endings otherwise (gab, gabst). */
function praetFrom(p: string): Six {
  if (p.endsWith("e")) return [p, `${p}st`, p, `${p}n`, `${p}t`, `${p}n`];
  const dental = /[td]$/.test(p);
  const du = dental || /([sßzx]|sch)$/.test(p) ? `${p}est` : `${p}st`;
  return [p, du, p, `${p}en`, dental ? `${p}et` : `${p}t`, `${p}en`];
}

/** Konjunktiv II from the ich form: gäbe, gäbest, gäbe, gäben, gäbet, gäben. */
const k2From = (k: string): Six => [k, `${k}st`, k, `${k}n`, `${k}t`, `${k}n`];

function k1Forms(core: string, sh: Shape): Six {
  if (sh.eln || sh.ern) {
    const ich = sh.eln ? `${sh.stem.slice(0, -2)}le` : `${sh.stem}e`;
    return [ich, `${sh.stem}st`, ich, core, `${sh.stem}t`, core];
  }
  const s = sh.stem;
  return [`${s}e`, `${s}est`, `${s}e`, core.endsWith("en") ? core : `${s}en`, `${s}et`, core.endsWith("en") ? core : `${s}en`];
}

/** The weak Präteritum stem + te: machte, arbeitete, lächelte. */
const weakPraet = (sh: Shape) => `${sh.stem}${sh.dental ? "e" : ""}te`;

function weakImpDu(core: string, sh: Shape): string {
  if (sh.eln) return `${sh.stem.slice(0, -2)}le`;
  if (sh.ern) return `${sh.stem}e`;
  if (sh.dental || /[^e]ig$/.test(sh.stem)) return `${sh.stem}e`;
  return `${sh.stem} / ${sh.stem}e`;
}

function weakPP(core: string, sh: Shape, insep: string): string {
  const base = `${sh.stem}${sh.dental ? "e" : ""}t`;
  if (insep) return base;
  if (core.endsWith("ieren") && !IEREN_GE.has(core)) return base;
  return `ge${base}`;
}

type Parts = {
  pres: Six;
  praet: Six;
  k2: Six;
  k1: Six;
  /** du, ihr, Sie (the Sie form without "Sie"). */
  imp: Six;
  pp: string;
};

function weakParts(core: string, insep: string): Parts {
  const sh = shapeOf(core);
  const pres = weakPresent(core, sh);
  const praet = praetFrom(weakPraet(sh));
  return {
    pres,
    praet,
    k2: praet,
    k1: k1Forms(core, sh),
    imp: [weakImpDu(core, sh), pres[4], core],
    pp: weakPP(core, sh, insep),
  };
}

/** Forms with no stem changes, no -e- and no shortened du: what a learner would guess. */
function naiveParts(core: string, insep: string): Parts {
  const s = core.replace(/e?n$/, "");
  const praet = [`${s}te`, `${s}test`, `${s}te`, `${s}ten`, `${s}tet`, `${s}ten`];
  return {
    pres: [`${s}e`, `${s}st`, `${s}t`, core, `${s}t`, core],
    praet,
    k2: praet,
    k1: [`${s}e`, `${s}est`, `${s}e`, core, `${s}et`, core],
    imp: [`${s} / ${s}e`, `${s}t`, core],
    pp: insep ? `${s}t` : `ge${s}t`,
  };
}

const withPrefix = (pre: string, w: string) => (pre ? pre + w : w);
const ppWithInsep = (insep: string, pp: string) => (insep ? insep + pp.replace(/^ge/, "") : pp);

function strongParts(core: string, c: Core, s: StrongSpec): Parts {
  const sh = shapeOf(core);
  const pre = core === s.inf ? "" : c.insep;
  const pres = weakPresent(core, sh);
  if (s.presStems) {
    const stems = s.presStems.map((x) => withPrefix(pre, x));
    pres[1] = join(stems.map((x) => changedDuEr(x)[0]));
    pres[2] = join(stems.map((x) => changedDuEr(x)[1]));
  }
  const praetAlts = s.praet.map((p) => praetFrom(withPrefix(pre, p)));
  const praet = praetAlts[0].map((_, i) => join(praetAlts.map((a) => a[i]!)));
  const k2Alts = s.k2.map((k) => k2From(withPrefix(pre, k)));
  const k2 = k2Alts[0].map((_, i) => join(k2Alts.map((a) => a[i]!)));
  // du imperative: the e -> i/ie stem (gib, nimm, lies), else as for weak verbs.
  const iStem = s.presStems?.find((x) => !/[äöü]/.test(x) && x !== sh.stem);
  // halten, raten, laden, braten (a -> ä): "halt / halte", not only "halte".
  const umlautDental = sh.dental && /[td]$/.test(sh.stem) && !!s.presStems?.some((x) => /ä/.test(x));
  const impDu = iStem ? withPrefix(pre, iStem) : umlautDental ? `${sh.stem} / ${sh.stem}e` : weakImpDu(core, sh);
  return {
    pres,
    praet,
    k2,
    k1: k1Forms(core, sh),
    imp: [impDu, pres[4], core],
    pp: join(s.pp.map((p) => (core === s.inf ? p : ppWithInsep(c.insep, p)))),
  };
}

function fullParts(core: string, c: Core, f: FullSpec): Parts {
  const pre = c.insep;
  const p = (x: string | null) => (x === null ? null : x.split(" / ").map((a) => withPrefix(pre, a)).join(" / "));
  return {
    pres: f.pres.map(p),
    praet: (f.praetForms ?? praetFrom(f.praet)).map(p),
    k2: f.k2.map(p),
    k1: (f.k1 ?? k1Forms(c.root, shapeOf(c.root))).map(p),
    imp: f.imp ? f.imp.map((x) => p(x.replace(/ Sie$/, ""))) : [null, null, null],
    pp: ppWithInsep(pre, f.pp),
  };
}

// ---- Auxiliaries -------------------------------------------------------

const s6 = (s: string): Six => s.split(",").map((x) => x.trim());
const AUX: Record<"haben" | "sein", Record<"pres" | "praet" | "k2" | "k1", Six>> = {
  haben: {
    pres: s6("habe, hast, hat, haben, habt, haben"),
    praet: s6("hatte, hattest, hatte, hatten, hattet, hatten"),
    k2: s6("hätte, hättest, hätte, hätten, hättet, hätten"),
    k1: s6("habe, habest, habe, haben, habet, haben"),
  },
  sein: {
    pres: s6("bin, bist, ist, sind, seid, sind"),
    praet: s6("war, warst, war, waren, wart, waren"),
    k2: s6("wäre, wärst, wäre, wären, wärt, wären"),
    k1: s6("sei, seist, sei, seien, seiet, seien"),
  },
};
const WERDEN = s6("werde, wirst, wird, werden, werdet, werden");
const WUERDE = s6("würde, würdest, würde, würden, würdet, würden");

const REFL_ACC: Record<Person, string> = { ich: "mich", du: "dich", er: "sich", wir: "uns", ihr: "euch", sie: "sich", Sie: "sich" };
const REFL_DAT: Record<Person, string> = { ich: "mir", du: "dir", er: "sich", wir: "uns", ihr: "euch", sie: "sich", Sie: "sich" };

// ---- Input -------------------------------------------------------------

/** "sich freuen" -> ["freuen", true]; "an·fangen" -> ["an·fangen", false]. */
export function splitReflexive(input: string): [base: string, reflexive: boolean] {
  const s = input.normalize("NFC").trim().replace(/\s+/g, " ").toLowerCase();
  const m = s.match(/^sich (.+)$/) ?? s.match(/^(.+) sich$/);
  if (m) return [m[1], true];
  return [s, false];
}

const AUX_EXAMPLES: Record<string, string> = {
  fahren: `"ich habe das Auto in die Garage gefahren"`,
  fliegen: `"die Pilotin hat die Maschine nach Rom geflogen"`,
  ziehen: `"das Pferd hat den Wagen gezogen"`,
  schwimmen: `"ich habe früher viel geschwommen" (mostly in the north; "sein" is never wrong)`,
  biegen: `"ich habe den Draht gebogen"`,
  treten: `"er hat den Ball ins Tor getreten"`,
  reiten: `"sie hat das Pferd geritten"`,
  schmelzen: `"die Sonne hat den Schnee geschmolzen"`,
  landen: `"der Pilot hat das Flugzeug sicher gelandet"`,
  starten: `"ich habe den Motor gestartet"`,
  trocknen: `"ich habe mir die Haare getrocknet"`,
  tauchen: `"ich habe den Pinsel in die Farbe getaucht"`,
  segeln: `"wir haben den ganzen Tag gesegelt"`,
  joggen: `"ich habe eine Stunde gejoggt"`,
  brechen: `"das Eis ist gebrochen"`,
  zerbrechen: `"die Vase ist zerbrochen"`,
  reißen: `"das Seil ist gerissen"`,
  stoßen: `"wir sind auf ein Problem gestoßen"`,
  scheiden: `"sie ist aus dem Amt geschieden"`,
  verderben: `"das Essen ist verdorben"`,
  verbrennen: `"das Holz ist verbrannt"`,
  frieren: `"der See ist gefroren"`,
  ausziehen: `"wir sind letzten Monat ausgezogen"`,
};

/** sein-verbs that take "haben" for the activity itself (no direct object needed): "wir haben den ganzen Tag gesegelt". */
const ACTIVITY_HABEN = new Set(["schwimmen", "segeln", "joggen"]);

const cache = new Map<string, DeConjugation | null>();

/**
 * Every tense of a German verb: "machen", "anfangen", "sich freuen",
 * "an·fangen". A verb not in the list that ends in -en, -eln or -ern is
 * conjugated on the weak pattern, or like its simple verb when that is
 * strong (abbiegen like biegen) (known: false); anything else gives null.
 */
export function conjugate(input: string): DeConjugation | null {
  const key = input.normalize("NFC").trim().toLowerCase().replace(/\s+/g, " ");
  if (cache.has(key)) return cache.get(key)!;
  const out = build(key);
  cache.set(key, out);
  return out;
}

type Analysis = {
  inf: string;
  sep: string | null;
  core: string;
  c: Core;
  spec?: DeVerbSpec;
  /** The listed spec of the verb after the separable prefix, for verbs not in the list. */
  restSpec?: DeVerbSpec;
};

function analyze(raw: string): Analysis | null {
  let sep: string | null = null;
  let inf = raw;
  const dot = raw.match(/^([a-zäöü]+)[·|]([a-zäöüß]+)$/);
  if (dot) {
    sep = dot[1];
    inf = dot[1] + dot[2];
  }
  if (!/^[a-zäöüß]+$/.test(inf) || inf.length < 3) return null;
  const spec = deSpecFor(inf);
  if (spec) sep = spec.sep ?? null;
  else if (!dot && !FULL[inf] && !STRONG[inf]) {
    for (const p of SEP) {
      if (inf.startsWith(p) && validSep(p, inf.slice(p.length))) {
        sep = p;
        break;
      }
    }
  }
  const core = sep ? inf.slice(sep.length) : inf;
  if (!FULL[core] && !STRONG[core] && !deSpecFor(core) && !spec && !/[a-zäöüß]{2,}(en|eln|ern)$/.test(core)) {
    if (!(core === "tun" || core === "sein")) return null;
  }
  return { inf, sep, core, c: resolveCore(core), spec, restSpec: sep && !spec ? deSpecFor(core) : undefined };
}

function build(input: string): DeConjugation | null {
  const [raw, typedRefl] = splitReflexive(input);
  const a = analyze(raw);
  if (!a) return null;
  const { inf, sep, core, c, spec, restSpec } = a;
  const reflexive = typedRefl || spec?.prn === "only";
  const dat = !!(spec?.dat ?? restSpec?.dat);
  const forceWeak = !!(spec?.weak ?? restSpec?.weak);

  let kind: VerbKind;
  let parts: Parts;
  if (c.full && !forceWeak) {
    parts = fullParts(core, c, c.full);
    kind = c.full.kind;
  } else if (c.strong && !forceWeak) {
    parts = strongParts(core, c, c.strong);
    kind = c.strong.praet.some((p) => p.endsWith("te")) || c.strong.pp.some((p) => p.endsWith("t")) ? "mixed" : "strong";
  } else {
    parts = weakParts(core, c.insep);
    kind = "weak";
  }
  const ieren = kind === "weak" && core.endsWith("ieren") && !IEREN_GE.has(core);

  // Auxiliary.
  let aux: "haben" | "sein" = "haben";
  let auxAlt: "haben" | "sein" | null = null;
  const base = c.strong ?? c.full;
  if (spec) {
    if (spec.aux) {
      aux = spec.aux;
      auxAlt = spec.auxAlt ?? null;
    } else if (!sep && !c.insep && base && !forceWeak) {
      aux = base.aux;
      auxAlt = c.strong?.auxAlt ?? null;
    }
  } else if (sep) {
    const rest = restSpec?.aux ? { aux: restSpec.aux, auxAlt: restSpec.auxAlt ?? null } : !c.insep && base ? { aux: base.aux, auxAlt: c.strong?.auxAlt ?? null } : null;
    if (rest) {
      aux = rest.aux;
      auxAlt = rest.auxAlt;
    }
  } else if (!c.insep && base) {
    aux = base.aux;
    auxAlt = c.strong?.auxAlt ?? null;
  }
  if (reflexive) {
    aux = "haben";
    auxAlt = null;
  }
  const impersonal = !!spec?.impersonal;

  // Marks: compare with the weak pattern and with naive endings.
  const marks: DeConjugation["marks"] = {};
  const setMark = (k: TenseId | "partizip2", p: Person | "form", m: Irregularity) => {
    (marks[k] ??= {})[p] = m;
  };
  const rule = weakParts(core, c.insep);
  const naive = naiveParts(core, c.insep);
  for (const t of SIMPLE) {
    const persons = t === "imp" ? IMP_PERSONS : PERSONS6;
    const act = parts[t as keyof Parts] as Six;
    const r = rule[t as keyof Parts] as Six;
    const n = naive[t as keyof Parts] as Six;
    act.forEach((f, i) => {
      if (!f) return;
      if (f !== r[i]) setMark(t, persons[i], "irregular");
      else if (f !== n[i] && kind !== "irregular" && kind !== "modal") setMark(t, persons[i], "spelling");
    });
  }
  const ppIrregular = alts(parts.pp)[0] !== rule.pp;
  if (ppIrregular) setMark("partizip2", "form", "irregular");

  // Full forms in main-clause order.
  const sepTail = sep ? ` ${sep}` : "";
  const reflOf = (p: Person) => (reflexive ? ` ${(dat ? REFL_DAT : REFL_ACC)[p]}` : "");
  const pp = alts(parts.pp)
    .map((x) => (sep ? sep + x : x))
    .join(" / ");
  const infFull = inf;
  const finite = (f: string | null, p: Person, extra = "") =>
    f === null ? null : alts(f).map((x) => `${x}${extra}${reflOf(p)}${sepTail}`).join(" / ");

  const tenses = {} as Record<TenseId, TenseTable>;
  for (const t of ["pres", "praet", "k2", "k1"] as const) {
    const tab: TenseTable = {};
    PERSONS6.forEach((p, i) => {
      tab[p] = impersonal && p !== "er" ? null : finite(parts[t][i], p);
    });
    tenses[t] = tab;
  }
  const imp: TenseTable = {};
  IMP_PERSONS.forEach((p, i) => {
    imp[p] = impersonal ? null : finite(parts.imp[i], p, p === "Sie" ? " Sie" : "");
  });
  tenses.imp = imp;

  const compound = (auxv: "haben" | "sein") => {
    const out: Partial<Record<TenseId, TenseTable>> = {};
    const firstPP = alts(pp)[0];
    const ppCell = (a: string | null, p: Person) => (a === null ? null : alts(pp).map((x) => `${a}${reflOf(p)} ${x}`).join(" / "));
    const mk = (fn: (p: Person, i: number) => string | null) => {
      const tab: TenseTable = {};
      PERSONS6.forEach((p, i) => (tab[p] = impersonal && p !== "er" ? null : fn(p, i)));
      return tab;
    };
    out.perf = mk((p, i) => ppCell(AUX[auxv].pres[i], p));
    out.pqp = mk((p, i) => ppCell(AUX[auxv].praet[i], p));
    out.k2p = mk((p, i) => ppCell(AUX[auxv].k2[i], p));
    out.k1p = mk((p, i) => ppCell(AUX[auxv].k1[i], p));
    out.fut2 = mk((p, i) => `${WERDEN[i]}${reflOf(p)} ${firstPP} ${auxv}`);
    return out;
  };
  Object.assign(tenses, compound(aux));
  const mkInf = (verbs: Six) => {
    const tab: TenseTable = {};
    PERSONS6.forEach((p, i) => (tab[p] = impersonal && p !== "er" ? null : `${verbs[i]}${reflOf(p)} ${infFull}`));
    return tab;
  };
  tenses.fut1 = mkInf(WERDEN);
  tenses.k2w = mkInf(WUERDE);

  if (ppIrregular) {
    for (const t of ["perf", "pqp", "fut2", "k2p", "k1p"] as TenseId[]) for (const p of PERSONS6) if (tenses[t][p]) setMark(t, p, "irregular");
  }
  for (const [t, m] of Object.entries(marks) as [TenseId, Partial<Record<Person | "form", Irregularity>>][]) {
    if (!tenses[t]) continue;
    for (const p of Object.keys(m) as Person[]) if (!tenses[t][p]) delete m[p];
  }

  const sichPre = reflexive ? "sich " : "";
  const display = `${sichPre}${inf}`;
  const partizip1 = `${sichPre}${c.full?.partizip1 && !c.insep ? (sep ?? "") + c.full.partizip1 : `${inf}d`}`;
  const zuInfinitive = `${sichPre}${sep ? `${sep}zu${core}` : `zu ${core}`}`;
  const pastInfinitive = `${sichPre}${alts(pp)[0]} ${aux}`;
  const irregular = Object.values(marks).some((m) => Object.values(m ?? {}).includes("irregular"));

  let en = spec?.en ?? "";
  if (reflexive && spec?.prn === "also") en = spec.enRefl ?? spec.en;

  const model = base && c.root !== inf ? c.root : null;
  const out: DeConjugation = {
    infinitive: display,
    base: inf,
    reflexive,
    reflexiveCase: dat ? "dat" : "acc",
    separable: sep,
    inseparable: c.insep || null,
    kind,
    ieren,
    aux,
    auxAlt,
    impersonal,
    en,
    known: !!spec,
    model: forceWeak ? null : model,
    principal: {
      infinitive: display,
      present: tenses.pres.er ?? "",
      preterite: tenses.praet.er ?? "",
      participle: tenses.perf.er ?? "",
    },
    partizip1,
    partizip2: pp,
    zuInfinitive,
    pastInfinitive,
    tenses,
    marks,
    irregular,
    notes: [],
  };
  if (auxAlt) out.altAuxTenses = compound(auxAlt);
  out.notes = notesFor(out, parts, core);
  return out;
}

// ---- Notes -------------------------------------------------------------

const first = (f: string | null | undefined) => (f ?? "").split(" / ")[0];
const q = (s: string) => `"${s}"`;

function notesFor(v: DeConjugation, parts: Parts, core: string): string[] {
  const n: string[] = [];
  const t = v.tenses;
  const sh = shapeOf(core);
  const er = v.impersonal ? "es" : "er";
  if (v.impersonal) n.push(`Impersonal: used only with "es" (${q(`es ${first(t.pres.er)}`)}, ${q(`es ${first(t.perf.er)}`)}).`);
  if (v.kind === "modal") {
    n.push(
      `Modal verb: "ich" and "er/sie/es" have the same form, with no ending (${q(`ich ${first(t.pres.ich)}`)}, ${q(`er ${first(t.pres.er)}`)}), and the other verb goes to the end as a plain infinitive (${q(`ich ${first(t.pres.ich)} das machen`)}).`,
    );
    n.push(
      `In the Perfekt with another verb, the modal stays an infinitive: ${q(`ich habe das machen ${v.base}`)}, not "gemacht ${v.partizip2}". The participle ${q(v.partizip2)} is only used on its own (${q(`ich habe das nicht ${v.partizip2}`)}). In speech the Präteritum is far more common: ${q(`ich ${first(t.praet.ich)}`)}.`,
    );
  } else if (v.kind === "strong") {
    n.push(
      `Strong verb: the stem vowel changes in the Präteritum (${q(`${er} ${first(t.praet.er)}`)}) and the Partizip II ends in "-en" (${q(first(v.partizip2))}). The Präteritum has no ending in the "ich" and "er/sie/es" forms.`,
    );
  } else if (v.kind === "mixed") {
    if (/en$/.test(first(v.partizip2))) n.push(`Weak Präteritum in "-te" (${q(`${er} ${first(t.praet.er)}`)}), but a strong Partizip II in "-en" (${q(first(v.partizip2))}).`);
    else n.push(`Mixed verb: weak endings ("-te", "-t") on a changed stem: ${q(`${er} ${first(t.praet.er)}`)}, ${q(first(v.partizip2))}.`);
  } else if (v.kind === "irregular") {
    const helper = v.base === "haben" || v.base === "sein" ? " It also forms the Perfekt of other verbs." : v.base === "werden" ? " It also forms the future and the passive." : "";
    n.push(`Irregular verb: learn its forms by heart.${helper}`);
  } else {
    n.push(`Weak (regular) verb: Präteritum with "-te" (${q(`${er} ${first(t.praet.er)}`)}), Partizip II ${v.inseparable || v.ieren ? 'in "-t"' : '"ge-...-t"'} (${q(first(v.partizip2))}).`);
  }
  if (v.model && v.model !== v.base) n.push(`Built on ${q(v.model)}, and conjugated like it.`);
  if ((v.kind === "strong" || v.kind === "mixed") && v.marks.pres?.du === "irregular") {
    const du = first(t.pres.du);
    n.push(`In the present, "du" and "er/sie/es" change the vowel: ${q(`du ${du}`)}, ${q(`${er} ${first(t.pres.er)}`)} (but ${q(`ich ${first(t.pres.ich)}`)}).`);
    if (v.marks.imp?.du === "irregular" && !(t.imp.du ?? "").includes(" / ")) n.push(`The "du" imperative keeps the i/ie and has no "-e": ${q(`${first(t.imp.du)}!`)}`);
  }
  if (sh.dental && !v.impersonal && v.kind !== "modal" && v.kind !== "irregular") {
    n.push(`The stem ends in ${/[td]$/.test(sh.stem) ? "-t or -d" : "a consonant + m/n"}, so an "-e-" comes before "-st" and "-t": ${q(`du ${first(t.pres.du)}`)}, ${q(`ihr ${first(t.pres.ihr)}`)}${v.kind === "weak" ? `, ${q(`ich ${first(t.praet.ich)}`)}` : ""}.`);
  }
  if (sh.sibilant && !v.impersonal && v.kind !== "modal" && v.kind !== "irregular" && !v.marks.pres?.du) {
    n.push(`The stem ends in -s, -ß, -z or -x, so "du" just adds "-t": ${q(`du ${first(t.pres.du)}`)}.`);
  }
  if (sh.eln) n.push(`-eln verb: "ich" drops the e of the stem (${q(`ich ${first(t.pres.ich)}`)}), and "wir" and "sie/Sie" add just "-n" (${q(`wir ${first(t.pres.wir)}`)}).`);
  if (sh.ern) n.push(`-ern verb: "wir" and "sie/Sie" add just "-n" (${q(`wir ${first(t.pres.wir)}`)}). In speech "ich" often drops an e: "ich ${first(t.pres.ich).replace(/ere\b/, "re")}".`);
  if (v.ieren) n.push(`-ieren verb: always weak, and no "ge-" in the Partizip II (${q(first(v.partizip2))}). The stress is on "-ie-".`);
  if (v.separable) {
    const ich = first(t.pres.ich);
    const parts1 = ich.split(" ");
    const verbWord = parts1[0];
    // Dative reflexives need an object: "ich sehe mir das heute an".
    const middle = [...parts1.slice(1, -1), ...(v.reflexive && v.reflexiveCase === "dat" ? ["das"] : [])].join(" ");
    const finiteIch = alts(parts.pres[0])[0];
    n.push(
      `Separable prefix ${v.separable}-: in a main clause it goes to the end (${q(`ich ${verbWord}${middle ? ` ${middle}` : ""} heute ${v.separable}`)}); in a subordinate clause it joins up again (${q(`weil ich${middle ? ` ${middle}` : ""} heute ${v.separable}${finiteIch}`)}). "ge-" and "zu" go between prefix and verb: ${q(first(v.partizip2))}, ${q(v.zuInfinitive.replace(/^sich /, ""))}. The stress is on the prefix.`,
    );
  }
  if (v.inseparable && !v.separable) {
    const p = v.inseparable;
    n.push(`Inseparable prefix ${p}-: it never splits off, it is never stressed, and the Partizip II has no "ge-" (${q(first(v.partizip2))}).`);
  } else if (v.inseparable && v.separable) {
    n.push(`The ${v.inseparable}- after ${v.separable}- is inseparable, so there is no "ge-" in the Partizip II: ${q(first(v.partizip2))}.`);
  }
  if (v.reflexive) {
    const pro = v.reflexiveCase === "dat" ? ["mir", "dir"] : ["mich", "dich"];
    n.push(
      `Reflexive verb: the pronoun changes with the subject (${q(`ich ${first(t.pres.ich)}`)}, ${q(`du ${first(t.pres.du)}`)}), and the Perfekt takes "haben" (${q(`ich ${first(t.perf.ich)}`)}).`,
    );
    if (v.reflexiveCase === "dat") n.push(`The reflexive pronoun is dative (${q(pro.join(", "))}), because the verb has its own direct object: ${q(`ich ${alts(parts.pres[0])[0]} mir das${v.separable ? ` ${v.separable}` : ""}`)}.`);
  } else if (v.aux === "sein") {
    n.push(`Perfekt with "sein" (a change of place or state, or "bleiben", "sein", "werden"): ${q(`ich ${first(t.perf.ich)}`)}, ${q(`${er} ${first(t.perf.er)}`)}.`);
    if (v.auxAlt === "haben") {
      const ex = AUX_EXAMPLES[v.base] ?? AUX_EXAMPLES[core];
      if (ACTIVITY_HABEN.has(core)) n.push(`"haben" is also used when the activity itself matters more than the movement${ex ? `: ${ex}` : ""}.`);
      else n.push(`With a direct object it takes "haben" instead${ex ? `: ${ex}` : ""}.`);
    }
  } else if (v.auxAlt === "sein") {
    const ex = AUX_EXAMPLES[v.base] ?? AUX_EXAMPLES[core];
    n.push(`Usually with "haben", but with "sein" when it describes a movement or something that happens to the subject${ex ? `: ${ex}` : ""}.`);
  }
  if (v.kind === "weak" && !v.impersonal) {
    n.push(`Konjunktiv II: for weak verbs it looks just like the Präteritum, so speech uses the würde-form instead: ${q(`ich ${first(t.k2w.ich)}`)}.`);
  } else if (v.kind === "strong" || v.kind === "mixed") {
    n.push(
      `The real Konjunktiv II (${q(`ich ${first(t.k2.ich)}`)}) is mostly written; in speech most verbs use the würde-form (${q(`ich ${first(t.k2w.ich)}`)}), except a few very common ones like "käme", "ginge", "gäbe", "wüsste".`,
    );
  } else if (!v.impersonal && v.base !== "werden") {
    n.push(`Use the real Konjunktiv II, not the würde-form: ${q(`ich ${first(t.k2.ich)}`)}.`);
  }
  return n;
}
