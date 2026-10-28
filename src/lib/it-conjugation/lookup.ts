// Synced from cheneygross-afk/lengo:src/lib/it-conjugation/lookup.ts by scripts/sync-content.mjs -- edit it there, not here.
// Finding Italian verbs: by infinitive (accent-insensitive, "alzarsi" too),
// by any conjugated form ("feci" -> fare, "che io sappia" -> sapere, "ho
// fatto" -> fare, "mi alzo" -> alzare, "dimmi" -> dire, "sto mangiando" ->
// mangiare), or by English meaning ("to leave" -> partire, lasciare...).

import { conjugate, itSpecFor, reflexiveInfinitive, splitClitic } from "./conjugate";
import { foldForSearch, genderForms, itVerbSlug } from "./text";
import { TENSES, personsOf, type Person, type TenseId, type VerbKind } from "./types";
import { IT_VERB_SPECS, specInfinitive, type ItVerbSpec } from "./verbs";

export type ItVerbListItem = {
  /** Display infinitive: "parlare", "pentirsi", "andarsene". */
  infinitive: string;
  slug: string;
  en: string;
  rank: number;
  irregular: boolean;
  kind: VerbKind;
  /** The verb it is conjugated like ("venire" for convenire, "finire" for the -isc- verbs). */
  model: string | null;
  prn?: "also" | "only";
  /** Takes essere (or both). */
  essere: boolean;
  /** Takes both auxiliaries. */
  bothAux: boolean;
  /** Has pronouns built in (andarsene, farcela). */
  pronominal: boolean;
};

let list: ItVerbListItem[] | null = null;

/** Every verb in the verb list, most frequent first. */
export function itVerbList(): ItVerbListItem[] {
  if (!list) {
    list = IT_VERB_SPECS.map((s) => {
      const infinitive = specInfinitive(s);
      const c = conjugate(infinitive)!;
      return {
        infinitive,
        slug: itVerbSlug(infinitive),
        en: s.en,
        rank: s.rank,
        irregular: c.irregular,
        kind: c.kind,
        model: c.model,
        prn: s.prn,
        essere: s.aux === "essere" || s.auxAlt === "essere" || s.prn === "only",
        bothAux: !!s.auxAlt,
        pronominal: !!s.cl,
      };
    });
  }
  return list;
}

/** The listed verb whose page has this slug. */
export function itVerbBySlug(slug: string): ItVerbListItem | undefined {
  const s = itVerbSlug(slug);
  return itVerbList().find((v) => v.slug === s);
}

/** The listed verb whose page shows this infinitive ("alzarsi" -> alzare's page, which has both). */
export function itVerbPageFor(inf: string): ItVerbListItem | undefined {
  const typed = foldForSearch(inf);
  const direct = itVerbList().find((v) => v.infinitive === typed);
  if (direct) return direct;
  const [base, clitic] = splitClitic(typed);
  if (clitic !== "si") {
    const spec = itSpecFor(base);
    return spec ? itVerbList().find((v) => v.infinitive === spec.inf) : undefined;
  }
  const spec = itSpecFor(base);
  if (spec) return itVerbList().find((v) => v.infinitive === spec.inf);
  return undefined;
}

/** Listed verbs conjugated like `model` (ottenere, mantenere... for tenere), most frequent first. */
export function itFamilyOf(model: string): string[] {
  return itVerbList()
    .filter((v) => v.model === model && !v.pronominal)
    .map((v) => v.infinitive);
}

export type ItFormHit = {
  /** Display infinitive ("fare", "alzarsi" when typed with a reflexive pronoun). */
  infinitive: string;
  tense: TenseId | "participle" | "gerund" | "infinitive";
  person?: Person;
  form: string;
};

let index: Map<string, ItFormHit[]> | null = null;
/** Whole forms of the clitic verbs, pronouns kept ("ce l'ho fatta" → farcela). */
let phrases: Map<string, ItFormHit[]> | null = null;

const PRONOUNS = new Set(["mi", "ti", "si", "ci", "vi", "me", "te", "se", "ce", "ve", "ne", "lo", "la", "li", "le", "gli", "l'", "m'", "t'", "s'", "c'", "v'", "n'"]);
const SUBJECTS: Record<string, Person> = { io: "io", tu: "tu", lui: "lui", lei: "lui", noi: "noi", voi: "voi", loro: "loro" };
const FILLERS = new Set(["che", "se", "non"]);
const ENCLITICS = [
  "gliele", "glieli", "gliela", "glielo", "gliene", "sene", "tene", "cene", "vene", "mene", "sela", "tela", "cela", "vela", "mela", "selo", "telo", "celo", "velo", "melo",
  "gli", "lo", "la", "li", "le", "ne", "mi", "ti", "si", "ci", "vi",
];
const SHORT_IMP = new Set(["di", "fa", "va", "da", "sta"]);

/** Words of a form or query, folded, with elided pronouns split off: "ce l'ho" -> ["ce", "l'", "ho"]; "va'" stays. */
function words(s: string): string[] {
  return foldForSearch(s)
    .replace(/([a-z])'(?=[a-z])/g, "$1' ")
    .replace(/[?!.,;:"“”«»()]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function add(k: string, hit: ItFormHit) {
  if (!k) return;
  const arr = index!.get(k);
  if (!arr) index!.set(k, [hit]);
  else if (!arr.some((h) => h.infinitive === hit.infinitive && h.tense === hit.tense && h.person === hit.person)) arr.push(hit);
}

const SIMPLE: TenseId[] = ["pres", "impf", "pr", "fut", "cond", "cgpres", "cgimpf", "imp", "impn"];

function buildIndex() {
  index = new Map();
  phrases = new Map();
  for (const s of IT_VERB_SPECS) {
    const c = conjugate(s.inf);
    if (!c) continue;
    const display = specInfinitive(s);
    add(foldForSearch(s.inf), { infinitive: display, tense: "infinitive", form: s.inf });
    for (const pp of [c.participle, ...(c.participleAlt ? [c.participleAlt] : [])]) {
      const stem = pp.replace(/o$/, "");
      for (const f of [pp, `${stem}a`, `${stem}i`, `${stem}e`]) add(foldForSearch(f), { infinitive: display, tense: "participle", form: pp });
    }
    const ger = words(c.gerund).join(" ");
    add(ger, { infinitive: display, tense: "gerund", form: c.gerund });
    if (c.clitic && c.clitic !== "si") {
      for (const t of TENSES) {
        for (const p of personsOf(t.id)) {
          for (const form of (c.tenses[t.id][p] ?? "").split(" / ")) {
            if (!form) continue;
            for (const g of genderForms(form)) {
              const k = words(g.replace(/^non /, "")).join(" ");
              const arr = phrases.get(k) ?? [];
              if (!arr.some((h) => h.infinitive === display && h.tense === t.id && h.person === p)) arr.push({ infinitive: display, tense: t.id, person: p, form });
              phrases.set(k, arr);
            }
          }
        }
      }
    }
    if (c.clitic) add(foldForSearch(c.gerund.replace(/(si|sene|sela|cela|ci)$/, "")), { infinitive: display, tense: "gerund", form: c.gerund });
    for (const t of SIMPLE) {
      for (const p of personsOf(t)) {
        const cell = c.tenses[t][p];
        if (!cell) continue;
        for (const form of cell.split(" / ")) {
          const bare = form.replace(/^non /, "");
          const ws = words(bare);
          add((ws.length > 1 ? ws.filter((x) => !PRONOUNS.has(x)) : ws).join(" "), { infinitive: display, tense: t, person: p, form });
        }
      }
    }
  }
}

/** Builds the form index ahead of the first search. */
export function warmUpItLookup(): void {
  if (!index) buildIndex();
}

let auxSets: { avere: Set<string>; essere: Set<string>; stare: Set<string> } | null = null;

function formsOf(inf: string): Set<string> {
  const c = conjugate(inf)!;
  const out = new Set<string>();
  for (const t of SIMPLE) for (const cell of Object.values(c.tenses[t])) for (const f of (cell ?? "").split(" / ")) if (f) out.add(foldForSearch(f));
  return out;
}

function aux() {
  if (!auxSets) auxSets = { avere: formsOf("avere"), essere: formsOf("essere"), stare: formsOf("stare") };
  return auxSets;
}

/** A word with a pronoun attached, read back: "alzati" -> "alza"/"alzati", "dimmi" -> "di'", "alzarsi" -> "alzare". */
function unclitic(w: string): string[] {
  const out: string[] = [];
  for (const e of ENCLITICS) {
    if (!w.endsWith(e) || w.length <= e.length + 1) continue;
    const rest = w.slice(0, -e.length);
    out.push(rest);
    if (/r$/.test(rest)) out.push(`${rest}e`, `${rest}re`);
    const short = rest.slice(0, -1);
    if (SHORT_IMP.has(short) && rest.endsWith(e[0])) out.push(`${short}'`);
  }
  return out;
}

/**
 * Every verb form matching what was typed, ignoring accents, a subject
 * pronoun, "che" / "se" / "non", object and reflexive pronouns, and an
 * auxiliary (ho fatto, sono andata, sto mangiando).
 */
export function findByForm(query: string): ItFormHit[] {
  if (!index) buildIndex();
  const whole = phrases!.get(words(query.replace(/^\s*non\s+/i, "")).join(" "));
  if (whole?.length) return whole;
  let w = words(query);
  const reflexive = (w.length > 1 && w.some((x) => ["mi", "ti", "si", "ci", "vi"].includes(x))) || /(arsi|ersi|irsi|rsi)$/.test(foldForSearch(query));
  w = w.filter((x) => !FILLERS.has(x) || w.length === 1);
  let subject: Person | null = null;
  if (w.length > 1 && SUBJECTS[w[0]]) {
    subject = SUBJECTS[w[0]];
    w = w.slice(1);
  }
  if (w.length > 1) w = w.filter((x) => !PRONOUNS.has(x));
  let want: ItFormHit["tense"] | null = null;
  const a = aux();
  if (w.length === 2 && w[1].endsWith("ndo") && a.stare.has(w[0])) {
    want = "gerund";
    w = [w[1]];
  } else if (w.length === 2 && (a.avere.has(w[0]) || a.essere.has(w[0]))) {
    want = "participle";
    w = [w[1]];
  }
  if (w.length !== 1) return [];
  let hits = index!.get(w[0]) ?? [];
  if (hits.length === 0) {
    for (const cand of unclitic(w[0])) {
      const more = index!.get(cand);
      if (more?.length) {
        hits = more;
        break;
      }
    }
  }
  if (want) hits = hits.filter((h) => h.tense === want);
  if (subject && !want && hits.some((h) => h.person === subject)) hits = hits.filter((h) => !h.person || h.person === subject);
  // Typed with accents: prefer the forms that have them (parlò over parlo).
  const typed = query.normalize("NFC").toLowerCase();
  if (/[àèéìòù]/.test(typed)) {
    const exact = hits.filter((h) => typed.includes(h.form.replace(/^non /, "").toLowerCase().split(/[ ']/).pop() ?? ""));
    if (exact.length) hits = exact;
  }
  return hits.map((h) => {
    if (!reflexive || h.infinitive.endsWith("si")) return h;
    const spec = itSpecFor(h.infinitive);
    return spec?.prn === "also" ? { ...h, infinitive: reflexiveInfinitive(h.infinitive) } : h;
  });
}

export type ItVerbSearchResult = {
  infinitive: string;
  en: string;
  known: boolean;
  via: "infinitive" | "form" | "english";
  hits?: ItFormHit[];
};

function specOf(display: string): ItVerbSpec | undefined {
  return itSpecFor(display) ?? itSpecFor(splitClitic(display)[0]);
}

/** Verbs for a search box: exact infinitive, then verbs the typed word is a form of, then infinitives starting with it, then English meanings. */
export function searchItVerbs(query: string, limit = 12): ItVerbSearchResult[] {
  const q = query.normalize("NFC").trim().toLowerCase().replace(/\s+/g, " ");
  if (!q) return [];
  const out: ItVerbSearchResult[] = [];
  const seen = new Set<string>();
  const push = (r: ItVerbSearchResult) => {
    if (seen.has(r.infinitive) || out.length >= limit) return;
    seen.add(r.infinitive);
    out.push(r);
  };
  const verbs = itVerbList();
  const qk = foldForSearch(q);
  // The infinitive itself, or a reflexive one ("alzarsi").
  const exact = verbs.find((v) => v.infinitive === qk);
  if (exact) push({ infinitive: exact.infinitive, en: exact.en, known: true, via: "infinitive" });
  else {
    const [base, clitic] = splitClitic(qk);
    const spec = itSpecFor(base);
    if (clitic === "si" && spec) push({ infinitive: qk, en: spec.enSe ?? spec.en, known: true, via: "infinitive" });
  }
  const byForm = new Map<string, ItFormHit[]>();
  for (const h of findByForm(q)) {
    if (h.tense === "infinitive" && !/\s/.test(q)) continue;
    const arr = byForm.get(h.infinitive) ?? [];
    arr.push(h);
    byForm.set(h.infinitive, arr);
  }
  const rankOf = (inf: string) => specOf(inf)?.rank ?? 9999;
  for (const [inf, hits] of [...byForm].sort((a, b) => rankOf(a[0]) - rankOf(b[0]))) {
    const spec = specOf(inf);
    const refl = inf.endsWith("si") && spec?.prn === "also";
    push({ infinitive: inf, en: refl && spec?.enSe ? spec.enSe : (spec?.en ?? ""), known: true, via: "form", hits });
  }
  if (qk.length >= 2) {
    for (const v of verbs) if (v.infinitive.startsWith(qk)) push({ infinitive: v.infinitive, en: v.en, known: true, via: "infinitive" });
  }
  if (q.length >= 3) {
    const needle = q.startsWith("to ") ? q : `to ${q}`;
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(^|[^a-z])(${esc(needle)}|${esc(q)})($|[^a-z])`);
    for (const v of verbs) {
      const spec = specOf(v.infinitive)!;
      if (re.test(v.en.toLowerCase())) push({ infinitive: v.infinitive, en: v.en, known: true, via: "english" });
      else if (spec.enSe && re.test(spec.enSe.toLowerCase())) push({ infinitive: reflexiveInfinitive(v.infinitive), en: spec.enSe, known: true, via: "english" });
    }
  }
  if (out.length === 0 && !/\s/.test(qk)) {
    const c = conjugate(qk);
    if (c && !c.known) push({ infinitive: c.infinitive, en: "", known: false, via: "infinitive" });
  }
  return out;
}

const WHO: Record<Person, string> = { io: "io", tu: "tu", lui: "lui/lei/Lei", noi: "noi", voi: "voi", loro: "loro" };
const IMP_WHO: Record<Person, string> = { io: "", tu: "tu", lui: "Lei", noi: "noi", voi: "voi", loro: "Loro" };

/** "Present, noi" -- describes a form hit. */
export function describeItHit(h: ItFormHit): string {
  if (h.tense === "participle") return "past participle";
  if (h.tense === "gerund") return "gerund";
  if (h.tense === "infinitive") return "infinitive";
  const t = TENSES.find((x) => x.id === h.tense)!;
  if (!h.person) return t.en;
  return `${t.en}, ${h.tense === "imp" || h.tense === "impn" ? IMP_WHO[h.person] : WHO[h.person]}`;
}
