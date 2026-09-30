// Synced from cheneygross-afk/lengo:src/lib/conjugation/conjugate.ts by scripts/sync-content.mjs -- edit it there, not here.
// Spanish conjugation engine: every simple and compound tense of the
// indicative, subjunctive (-ra and -se imperfects), conditional and
// imperative, plus the gerund and participle, with vos forms for the
// present and the affirmative command. Regular -ar/-er/-ir rules, the
// automatic spelling changes, and the irregular verbs in verbs.ts.
//
// Pure data code shared by the website and the mobile app (synced by the
// app's scripts/sync-content.mjs). Checked by scripts/test-conjugation.ts.

import { PERSONS6, TENSES, type Conjugation, type Irregularity, type Person, type TenseId, type TenseTable } from "./types";
import { VERB_SPECS, type VerbSpec } from "./verbs";
import { acuteAt, fixMonosyllable, isVowel, lastIndexOfAny, stressedVowel, stripAcute, withStressAt } from "./spelling";

type Ending = "ar" | "er" | "ir";
// "full": the real forms. "spelling": the regular pattern with only the
// automatic spelling and accent adjustments. "plain": stem + ending.
// Comparing the three tells which forms are irregular.
type Mode = "full" | "spelling" | "plain";

type P6 = Record<"yo" | "tu" | "el" | "nos" | "vosotros" | "ellos", string>;
const six = (a: string[]): P6 => ({ yo: a[0], tu: a[1], el: a[2], nos: a[3], vosotros: a[4], ellos: a[5] });

const PRES: Record<Ending, Record<Person, string>> = {
  ar: { yo: "o", tu: "as", vos: "ás", el: "a", nos: "amos", vosotros: "áis", ellos: "an" },
  er: { yo: "o", tu: "es", vos: "és", el: "e", nos: "emos", vosotros: "éis", ellos: "en" },
  ir: { yo: "o", tu: "es", vos: "ís", el: "e", nos: "imos", vosotros: "ís", ellos: "en" },
};
const SUBJ: Record<Ending, P6> = {
  ar: six(["e", "es", "e", "emos", "éis", "en"]),
  er: six(["a", "as", "a", "amos", "áis", "an"]),
  ir: six(["a", "as", "a", "amos", "áis", "an"]),
};
const PRET_AR = six(["é", "aste", "ó", "amos", "asteis", "aron"]);
const PRET_ER = six(["í", "iste", "ió", "imos", "isteis", "ieron"]);
const PRET_STRONG = six(["e", "iste", "o", "imos", "isteis", "ieron"]);
const IMPF_AR = six(["aba", "abas", "aba", "ábamos", "abais", "aban"]);
const IMPF_ER = six(["ía", "ías", "ía", "íamos", "íais", "ían"]);
const FUT = six(["é", "ás", "á", "emos", "éis", "án"]);
const COND = six(["ía", "ías", "ía", "íamos", "íais", "ían"]);

const P6_KEYS = PERSONS6 as (keyof P6)[];
const STRESSED: Person[] = ["yo", "tu", "el", "ellos"];

type Ctx = { ending: Ending; mode: Mode; zc: boolean; yInsert: boolean };

const endsSilentU = (s: string) => s.endsWith("gu") || s.endsWith("qu");

/** Stem + ending with Spanish spelling rules applied. */
function join(stem: string, end: string, c: Ctx): string {
  if (c.mode === "plain") return stem + end;
  let s = stem;
  let e = end;
  const e0 = e[0] ?? "";
  if (c.ending === "ar") {
    if (e0 === "e" || e0 === "é") {
      if (s.endsWith("gu")) s = s.slice(0, -2) + "gü";
      else if (s.endsWith("c")) s = s.slice(0, -1) + "qu";
      else if (s.endsWith("g")) s = s.slice(0, -1) + "gu";
      else if (s.endsWith("z")) s = s.slice(0, -1) + "c";
    }
    return s + e;
  }
  if (e0 && "aoáó".includes(e0)) {
    if (s.endsWith("gu")) s = s.slice(0, -2) + "g";
    else if (s.endsWith("qu")) s = s.slice(0, -2) + "c";
    else if (s.endsWith("g")) s = s.slice(0, -1) + "j";
    else if (s.endsWith("c")) s = s.slice(0, -1) + (c.zc && isVowel(s[s.length - 2]) ? "zc" : "z");
  }
  const last = s[s.length - 1] ?? "";
  if (e0 === "i" && isVowel(e[1])) {
    // leyó, cayendo, construyó, yendo; rió -> rio; tiñó, bulló.
    if (last === "i") e = e.slice(1);
    else if (s === "" || (isVowel(last) && !endsSilentU(s))) e = "y" + e.slice(1);
    else if (last === "ñ" || s.endsWith("ll")) e = e.slice(1);
  } else if (e0 === "i" && last && "aeo".includes(last)) {
    // leíste, oímos, caído: a stressed i after a, e, o is written í.
    e = "í" + e.slice(1);
  }
  const f = e[0] ?? "";
  if (c.yInsert && f && "aeoáéó".includes(f) && isVowel(last) && !endsSilentU(s)) s += "y";
  return s + e;
}

function changeStem(stem: string, sc: VerbSpec["sc"]): string {
  if (!sc) return stem;
  const [from, to] = sc === "ie" ? ["e", "ie"] : sc === "ue" ? ["o", "ue"] : sc === "i" ? ["e", "i"] : sc === "u>ue" ? ["u", "ue"] : ["i", "ie"];
  const i = stem.lastIndexOf(from);
  if (i < 0) return stem;
  let by = to;
  if (i === 0 && to === "ie") by = "ye"; // errar: yerro
  if (i === 0 && to === "ue") by = "hue"; // oler: huelo
  if (to === "ue" && stem[i - 1] === "g") by = "üe"; // avergonzar: avergüenzo
  return stem.slice(0, i) + by + stem.slice(i + 1);
}

// -ir stem-changing verbs also change e -> i and o -> u where the ending
// is not stressed and doesn't start with i: sintió, durmiendo, pidamos.
function secondaryStem(stem: string, sc: VerbSpec["sc"]): string {
  if (sc === "ie" || sc === "i") {
    const i = stem.lastIndexOf("e");
    return i < 0 ? stem : stem.slice(0, i) + "i" + stem.slice(i + 1);
  }
  if (sc === "ue") {
    const i = stem.lastIndexOf("o");
    return i < 0 ? stem : stem.slice(0, i) + "u" + stem.slice(i + 1);
  }
  return stem;
}

function accentStem(stem: string): string {
  const i = lastIndexOfAny(stem, "iu");
  return i < 0 ? stem : acuteAt(stem, i);
}

type Simple = {
  pres: Record<Person, string>;
  pret: P6;
  impf: P6;
  fut: P6;
  cond: P6;
  spres: P6;
  simpfRa: P6;
  simpfSe: P6;
  sfut: P6;
  impAff: Partial<Record<Person, string | null>>;
  impNeg: Partial<Record<Person, string | null>>;
  gerund: string;
  participle: string;
};

const IMP_PERSONS: Person[] = ["tu", "vos", "el", "nos", "vosotros", "ellos"];

function mapP6(f: (p: keyof P6) => string): P6 {
  return six(P6_KEYS.map(f));
}

function imperfectSubjunctives(pret3pl: string): Pick<Simple, "simpfRa" | "simpfSe" | "sfut"> {
  const r = pret3pl.slice(0, -3); // hablaron -> habla, dijeron -> dije
  const stressed = acuteAt(r, r.length - 1);
  const build = (a: string) => six([r + a, r + a + "s", r + a, stressed + a + "mos", r + a + "is", r + a + "n"]);
  return { simpfRa: build("ra"), simpfSe: build("se"), sfut: build("re") };
}

function vosCommand(base: string): string {
  const b = stripAcute(base).slice(0, -1); // hablar -> habla
  return fixMonosyllable(acuteAt(b, b.length - 1));
}

function applyOver<T extends Partial<Record<Person, string | null>>>(table: T, over: Partial<Record<Person, string | null>> | undefined): T {
  if (!over) return table;
  return { ...table, ...over };
}

/** The simple forms of a (non-pronominal) verb in one mode. */
function simpleForms(spec: VerbSpec, mode: Mode): Simple {
  const base = spec.inf;
  const bare = stripAcute(base);
  const ending = bare.slice(-2) as Ending;
  const stem = bare.slice(0, -2);
  const full = mode === "full";
  const c: Ctx = {
    ending,
    mode,
    zc: full && spec.zc !== false,
    yInsert: full && (!!spec.y || (ending === "ir" && /[^gq]u$/.test(stem))),
  };
  const sc = full ? spec.sc : undefined;
  const acc = !!spec.acc && mode !== "plain";
  const changed = changeStem(stem, sc);
  const stressedStem = acc ? accentStem(changed) : changed;
  const second = ending === "ir" ? secondaryStem(stem, sc) : stem;
  const over = full ? spec.over ?? {} : {};
  const mono = (s: string) => fixMonosyllable(s);

  // Present
  const P = PRES[ending];
  const pres = {} as Record<Person, string>;
  for (const p of ["yo", "tu", "vos", "el", "nos", "vosotros", "ellos"] as Person[]) {
    pres[p] = mono(join(STRESSED.includes(p) ? stressedStem : stem, P[p], c));
  }
  if (full && spec.yo) pres.yo = spec.yo;
  Object.assign(pres, over.pres ?? {});

  // Present subjunctive
  const S = SUBJ[ending];
  let spres: P6;
  if (full && spec.subj) spres = mapP6((p) => mono(spec.subj + S[p]));
  else if (full && spec.yo && spec.yo.endsWith("o")) {
    const ys = spec.yo.slice(0, -1);
    spres = mapP6((p) => mono(ys + S[p]));
  } else spres = mapP6((p) => mono(join(STRESSED.includes(p) ? stressedStem : second, S[p], c)));
  spres = applyOver(spres, over.spres as Partial<P6>);

  // Preterite
  let pret: P6;
  const strong = full ? spec.pret ?? (bare.endsWith("ducir") ? stem.slice(0, -1) + "j" : undefined) : undefined;
  if (strong) {
    const j = strong.endsWith("j");
    pret = mapP6((p) => {
      if (p === "el") return (strong.endsWith("c") ? strong.slice(0, -1) + "z" : strong) + "o";
      if (p === "ellos") return strong + (j ? "eron" : "ieron");
      return strong + PRET_STRONG[p];
    });
  } else {
    const E = ending === "ar" && !(full && spec.pretEr) ? PRET_AR : PRET_ER;
    pret = mapP6((p) => mono(join(p === "el" || p === "ellos" ? second : stem, E[p], c)));
  }
  pret = applyOver(pret, over.pret as Partial<P6>);

  // Imperfect
  const impfStem = full && spec.impf ? spec.impf : stem;
  let impf = mapP6((p) => join(impfStem, (ending === "ar" ? IMPF_AR : IMPF_ER)[p], c));
  impf = applyOver(impf, over.impf as Partial<P6>);

  // Future and conditional
  const futStem = full && spec.fut ? spec.fut : bare;
  const fut = applyOver(mapP6((p) => futStem + FUT[p]), over.fut as Partial<P6>);
  const cond = applyOver(mapP6((p) => futStem + COND[p]), over.cond as Partial<P6>);

  // Imperfect and future subjunctive, from the preterite's ellos form
  const derived = imperfectSubjunctives(pret.ellos);

  const gerund = full && spec.ger ? spec.ger : join(second, ending === "ar" ? "ando" : "iendo", c);
  const participle = full && spec.part ? spec.part : join(stem, ending === "ar" ? "ado" : "ido", c);

  // Imperative
  let impAff: Partial<Record<Person, string | null>>;
  let impNeg: Partial<Record<Person, string | null>>;
  if (full && spec.noImp) {
    impAff = { tu: null, vos: null, el: null, nos: null, vosotros: null, ellos: null };
    impNeg = { ...impAff };
  } else {
    impAff = {
      tu: full && spec.impTu ? spec.impTu : pres.el,
      vos: full && spec.impVos ? spec.impVos : vosCommand(base),
      el: spres.el,
      nos: full && spec.impNos ? spec.impNos : spres.nos,
      vosotros: base.slice(0, -1) + "d",
      ellos: spres.ellos,
    };
    impNeg = {
      tu: `no ${spres.tu}`,
      vos: `no ${spres.tu}`,
      el: `no ${spres.el}`,
      nos: `no ${spres.nos}`,
      vosotros: `no ${spres.vosotros}`,
      ellos: `no ${spres.ellos}`,
    };
  }
  impAff = applyOver(impAff, over.impAff);
  impNeg = applyOver(impNeg, over.impNeg);

  return {
    pres,
    pret,
    impf,
    fut,
    cond,
    spres,
    ...derived,
    ...pickOver(derived, over),
    impAff,
    impNeg,
    gerund,
    participle,
  };
}

function pickOver(derived: Pick<Simple, "simpfRa" | "simpfSe" | "sfut">, over: VerbSpec["over"] & object) {
  return {
    simpfRa: applyOver(derived.simpfRa, over.simpfRa as Partial<P6>),
    simpfSe: applyOver(derived.simpfSe, over.simpfSe as Partial<P6>),
    sfut: applyOver(derived.sfut, over.sfut as Partial<P6>),
  };
}

// ---- Derived verbs (mantener = man + tener) ---------------------------

/** Puts `prefix` before a form, keeping the stress where it was: ten -> mantén, ves -> prevés. */
export function prefixForm(prefix: string, form: string): string {
  return form
    .split(" / ")
    .map((alt) => {
      const neg = alt.startsWith("no ");
      const word = neg ? alt.slice(3) : alt;
      const pos = stressedVowel(word);
      const out = pos < 0 ? prefix + word : withStressAt(prefix + word, pos + prefix.length);
      return neg ? `no ${out}` : out;
    })
    .join(" / ");
}

function prefixTable<T extends Partial<Record<Person, string | null>>>(prefix: string, t: T): T {
  const out = {} as Record<string, string | null>;
  for (const [k, v] of Object.entries(t)) out[k] = v == null ? null : prefixForm(prefix, v);
  return out as T;
}

function derivedSimple(spec: VerbSpec): Simple {
  const [prefix, baseInf] = spec.from!;
  const b = simpleForms(specFor(baseInf)!, "full");
  const s: Simple = {
    pres: prefixTable(prefix, b.pres),
    pret: prefixTable(prefix, b.pret),
    impf: prefixTable(prefix, b.impf),
    fut: prefixTable(prefix, b.fut),
    cond: prefixTable(prefix, b.cond),
    spres: prefixTable(prefix, b.spres),
    simpfRa: prefixTable(prefix, b.simpfRa),
    simpfSe: prefixTable(prefix, b.simpfSe),
    sfut: prefixTable(prefix, b.sfut),
    impAff: prefixTable(prefix, b.impAff),
    impNeg: prefixTable(prefix, b.impNeg),
    gerund: prefixForm(prefix, b.gerund),
    participle: prefixForm(prefix, b.participle),
  };
  const over = spec.over ?? {};
  for (const t of Object.keys(over) as TenseId[]) {
    const key = t as keyof Simple;
    if (key in s) (s as unknown as Record<string, object>)[key] = { ...(s[key] as object), ...over[t] };
  }
  if (spec.impTu) s.impAff.tu = spec.impTu;
  if (spec.part) s.participle = spec.part;
  return s;
}

// ---- Lookup ------------------------------------------------------------

const SPEC_BY_INF = new Map(VERB_SPECS.map((s) => [s.inf, s]));

export function specFor(infinitive: string): (VerbSpec & { rank?: number }) | undefined {
  return SPEC_BY_INF.get(infinitive);
}

const INFINITIVE = /^[a-zñ]*[aeiouáéíóú][a-zñ]*(ar|er|ir|ír)$/;

/** Splits "levantarse" into ["levantar", true]. */
export function splitPronominal(inf: string): [string, boolean] {
  const w = inf.trim().toLowerCase();
  const b = w.slice(0, -2);
  if (w.endsWith("se") && (SPEC_BY_INF.has(b) || (INFINITIVE.test(b) && w.length > 5))) return [b, true];
  return [w, false];
}

// ---- Pronominal forms -----------------------------------------------------

const REFLEXIVE: Record<Person, string> = { yo: "me", tu: "te", vos: "te", el: "se", nos: "nos", vosotros: "os", ellos: "se" };

function eachAlt(form: string | null | undefined, f: (alt: string) => string): string | null {
  if (form == null) return null;
  return form.split(" / ").map(f).join(" / ");
}

/** Attaches a pronoun to the end of a command, keeping the stress: levanta + te -> levántate. */
export function enclitic(form: string, pronoun: string): string {
  return withStressAt(form + pronoun, stressedVowel(form));
}

function pronominalCommand(form: string, person: Person): string {
  const pos = stressedVowel(form);
  // levantemos -> levantémonos, levantad -> levantaos (but id -> idos).
  if (person === "nos") return withStressAt(form.replace(/s$/, "") + "nos", pos);
  if (person === "vosotros") return form === "id" ? "idos" : withStressAt(form.replace(/d$/, "") + "os", pos);
  return enclitic(form, REFLEXIVE[person]);
}

// ---- Public API -----------------------------------------------------------

const cache = new Map<string, Conjugation>();
let haberForms: Simple | null = null;

/**
 * Conjugates a verb ("hablar", "levantarse", "reír"). Verbs not in the
 * verb list are conjugated with the regular pattern and the automatic
 * spelling rules, and flagged `known: false`. Returns null for anything
 * that doesn't look like a Spanish infinitive.
 */
export function conjugate(input: string): (Conjugation & { known: boolean; en: string; enSe?: string; rank?: number }) | null {
  const [base, pronominal] = splitPronominal(input);
  const key = `${base}${pronominal ? "+se" : ""}`;
  const hit = cache.get(key);
  if (hit) return hit as Conjugation & { known: boolean; en: string };
  const found = specFor(base);
  if (!found && !INFINITIVE.test(base)) return null;
  // Not in the list: -uar verbs (other than -cuar/-guar) stress the u like continuar.
  const spec: VerbSpec & { rank?: number } = found ?? { inf: base, en: "", acc: /[^cg]uar$/.test(base) || undefined };
  const real = spec.from ? derivedSimple(spec) : simpleForms(spec, "full");
  const spelled = simpleForms(spec, "spelling");
  const plain = simpleForms(spec, "plain");
  const ending = stripAcute(base).slice(-2) as Ending;

  // Irregularity marks, on the non-pronominal forms.
  const marks: Conjugation["marks"] = {};
  const markOf = (r: string | null | undefined, s: string | null | undefined, p: string | null | undefined): Irregularity | null => {
    if (r == null || r === p) return null;
    if (r === s) return "spelling";
    return "irregular";
  };
  const simpleIds: TenseId[] = ["pres", "pret", "impf", "fut", "cond", "spres", "simpfRa", "simpfSe", "sfut", "impAff", "impNeg"];
  let irregular = false;
  for (const t of simpleIds) {
    const r = real[t as keyof Simple] as Partial<Record<Person, string | null>>;
    const s = spelled[t as keyof Simple] as Partial<Record<Person, string | null>>;
    const p = plain[t as keyof Simple] as Partial<Record<Person, string | null>>;
    for (const person of Object.keys(r) as Person[]) {
      const m = markOf(r[person], s[person], p[person]);
      if (m) {
        (marks[t] ??= {})[person] = m;
        if (m === "irregular") irregular = true;
      }
    }
  }
  const gm = markOf(real.gerund, spelled.gerund, plain.gerund);
  if (gm) marks.gerund = { form: gm };
  const pm = markOf(real.participle, spelled.participle, plain.participle);
  if (pm) marks.participle = { form: pm };
  if (gm === "irregular" || pm === "irregular") irregular = true;

  // Compound tenses: haber + participle.
  const haber = (haberForms ??= simpleForms(specFor("haber")!, "full"));
  const compound = (aux: P6): TenseTable =>
    mapP6((p) => real.participle.split(" / ").map((part) => `${aux[p]} ${part}`).join(" / "));
  const tenses = {
    pres: { ...real.pres },
    pret: real.pret,
    impf: real.impf,
    fut: real.fut,
    cond: real.cond,
    spres: real.spres,
    simpfRa: real.simpfRa,
    simpfSe: real.simpfSe,
    sfut: real.sfut,
    impAff: real.impAff,
    impNeg: real.impNeg,
    pperf: compound(six(P6_KEYS.map((p) => haber.pres[p]))),
    plup: compound(haber.impf),
    pant: compound(haber.pret),
    futperf: compound(haber.fut),
    condperf: compound(haber.cond),
    spperf: compound(haber.spres),
    splupRa: compound(haber.simpfRa),
    splupSe: compound(haber.simpfSe),
    sfutperf: compound(haber.sfut),
  } as Record<TenseId, TenseTable>;
  if (pm === "irregular") {
    for (const t of TENSES) if (t.compound) marks[t.id] = Object.fromEntries(PERSONS6.map((p) => [p, "irregular"]));
  }

  let gerund = real.gerund;
  if (pronominal) {
    for (const t of TENSES) {
      const table = tenses[t.id];
      const out: TenseTable = {};
      for (const person of Object.keys(table) as Person[]) {
        const form = table[person];
        if (t.id === "impAff") out[person] = eachAlt(form, (f) => pronominalCommand(f, person));
        else if (t.id === "impNeg") out[person] = eachAlt(form, (f) => `no ${REFLEXIVE[person]} ${f.slice(3)}`);
        else out[person] = eachAlt(form, (f) => `${REFLEXIVE[person]} ${f}`);
      }
      tenses[t.id] = out;
    }
    gerund = real.gerund.split(" / ").map((g) => enclitic(g, "se")).join(" / ");
  }

  const notes: string[] = [];
  if (spec.note) notes.push(spec.note);
  if (pronominal && base === "ir") notes.push("Vosotros command: idos (iros is common in speech).");

  const result = {
    infinitive: pronominal ? `${base}se` : base,
    base,
    pronominal,
    ending,
    gerund,
    participle: real.participle,
    tenses,
    marks,
    irregular,
    notes,
    known: !!found,
    en: pronominal && spec.enSe ? spec.enSe : spec.en,
    enSe: spec.enSe,
    rank: spec.rank,
  };
  cache.set(key, result);
  return result;
}

/** One form of a verb, or null if that person doesn't exist in that tense. */
export function formOf(infinitive: string, tense: TenseId, person: Person): string | null {
  return conjugate(infinitive)?.tenses[tense][person] ?? null;
}
