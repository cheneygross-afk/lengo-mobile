// Synced from cheneygross-afk/lengo:src/lib/pt-conjugation/lookup.ts by scripts/sync-content.mjs -- edit it there, not here.
// Finding Portuguese verbs: by infinitive (accent-insensitive, "levantar-se"
// too), by any conjugated form ("fiz" -> fazer, "que eu saiba" -> saber,
// "tinha feito" -> fazer, "me levanto" -> levantar, "vou comer" -> comer),
// or by English meaning ("to leave" -> sair, partir, deixar).

import { conjugate, ptSpecFor, splitReflexive } from "./conjugate";
import { foldForSearch, ptVerbSlug } from "./text";
import { TENSES, personsOf, type Person, type TenseId, type VerbKind } from "./types";
import { PT_VERB_SPECS, specInfinitive, type PtVerbSpec } from "./verbs";

export type PtVerbListItem = {
  /** Display infinitive: "falar", "pôr", "queixar-se". */
  infinitive: string;
  slug: string;
  en: string;
  rank: number;
  irregular: boolean;
  kind: VerbKind;
  /** The verb it is conjugated like ("ter" for manter, "passear" for the -ear verbs). */
  model: string | null;
  prn?: "also" | "only";
};

let list: PtVerbListItem[] | null = null;

/** Every verb in the verb list, most frequent first. */
export function ptVerbList(): PtVerbListItem[] {
  if (!list) {
    list = PT_VERB_SPECS.map((s) => {
      const infinitive = specInfinitive(s);
      const c = conjugate(infinitive)!;
      return {
        infinitive,
        slug: ptVerbSlug(infinitive),
        en: s.en,
        rank: s.rank,
        irregular: c.irregular,
        kind: c.kind,
        model: c.model,
        prn: s.prn,
      };
    });
  }
  return list;
}

/** The listed verb whose page has this slug ("por", "queixar-se"; "pôr" works too). */
export function ptVerbBySlug(slug: string): PtVerbListItem | undefined {
  const s = ptVerbSlug(slug);
  return ptVerbList().find((v) => v.slug === s);
}

/** The listed verb whose page shows this infinitive ("levantar-se" -> levantar's page, which has both). */
export function ptVerbPageFor(inf: string): PtVerbListItem | undefined {
  const [base] = splitReflexive(inf);
  const spec = ptSpecFor(base);
  if (!spec) return undefined;
  const display = specInfinitive(spec);
  return ptVerbList().find((v) => v.infinitive === display);
}

/** Listed verbs conjugated like `model` (manter, obter... for ter; cair, trair... for sair), most frequent first. */
export function ptFamilyOf(model: string): string[] {
  return ptVerbList()
    .filter((v) => v.model === model)
    .map((v) => v.infinitive);
}

export type PtFormHit = {
  /** Display infinitive ("fazer", "levantar-se" when typed with a reflexive pronoun). */
  infinitive: string;
  tense: TenseId | "participle" | "gerund" | "infinitive";
  person?: Person;
  form: string;
};

let index: Map<string, PtFormHit[]> | null = null;

const PRONOUNS = new Set(["me", "te", "se", "nos", "vos", "lhe", "lhes", "o", "a", "os", "as"]);
const SUBJECTS: Record<string, Person> = {
  eu: "eu", tu: "tu", voce: "ele", ele: "ele", ela: "ele", nos: "nos", vos: "vos", voces: "eles", eles: "eles", elas: "eles",
};
const FILLERS = new Set(["nao", "que", "quando", "para", "pra", "se", "caso", "talvez", "ja"]);

/** Words of a form or query, folded, with enclitic pronouns split off: "levante-se" -> ["levante"], "levantemo-nos" -> ["levantemos"]. */
function words(s: string): string[] {
  return foldForSearch(s)
    .replace(/[?!.,;:"“”«»()]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => {
      const m = w.match(/^(.+?)-(me|te|se|nos|vos|lhe|lhes|o|a|os|as|lo|la|los|las)$/);
      if (!m) return w;
      return m[2] === "nos" && m[1].endsWith("mo") ? `${m[1]}s` : m[1];
    });
}

function add(k: string, hit: PtFormHit) {
  if (!k) return;
  const arr = index!.get(k);
  if (!arr) index!.set(k, [hit]);
  else if (!arr.some((h) => h.infinitive === hit.infinitive && h.tense === hit.tense && h.person === hit.person)) arr.push(hit);
}

const SIMPLE: TenseId[] = ["pres", "pret", "impf", "mqp", "fut", "cond", "sbpres", "sbimpf", "sbfut", "impa", "impn", "infp"];

function buildIndex() {
  index = new Map();
  for (const s of PT_VERB_SPECS) {
    const c = conjugate(s.inf);
    if (!c) continue;
    const display = specInfinitive(s);
    add(foldForSearch(s.inf), { infinitive: display, tense: "infinitive", form: s.inf });
    for (const pp of new Set([c.participle, ...(c.doubleParticiple ? [...c.doubleParticiple.ter, c.doubleParticiple.serEstar] : [])])) {
      for (const f of [pp, pp.replace(/o$/, "a"), `${pp}s`, pp.replace(/o$/, "as")]) add(foldForSearch(f), { infinitive: display, tense: "participle", form: pp });
    }
    add(words(c.gerund).join(" "), { infinitive: display, tense: "gerund", form: c.gerund });
    for (const t of SIMPLE) {
      for (const p of personsOf(t)) {
        const cell = c.tenses[t][p];
        if (!cell) continue;
        for (const form of cell.split(" / ")) {
          const bare = form.replace(/^não /, "");
          const ws = words(bare);
          add((ws.length > 1 ? ws.filter((x) => !PRONOUNS.has(x)) : ws).join(" "), { infinitive: display, tense: t, person: p, form });
        }
      }
    }
  }
}

/** Builds the form index ahead of the first search. */
export function warmUpPtLookup(): void {
  if (!index) buildIndex();
}

let auxSets: { ter: Set<string>; serEstar: Set<string>; estar: Set<string>; ir: Set<string> } | null = null;

function formsOf(inf: string): Set<string> {
  const c = conjugate(inf)!;
  const out = new Set<string>();
  for (const t of SIMPLE) for (const cell of Object.values(c.tenses[t])) for (const f of (cell ?? "").split(" / ")) if (f) out.add(foldForSearch(f));
  out.add(foldForSearch(c.gerund));
  out.add(foldForSearch(inf));
  return out;
}

function aux() {
  if (!auxSets) {
    const ter = new Set([...formsOf("ter"), ...formsOf("haver")]);
    const estar = formsOf("estar");
    const serEstar = new Set([...formsOf("ser"), ...estar, ...formsOf("ficar")]);
    const ir = formsOf("ir");
    auxSets = { ter, serEstar, estar, ir };
  }
  return auxSets;
}

/**
 * Every verb form matching what was typed, ignoring accents, a subject
 * pronoun, que/se/quando/para/não, reflexive pronouns, and an auxiliary
 * (tinha feito, foi pago, estou falando, vou comer).
 */
export function findByForm(query: string): PtFormHit[] {
  if (!index) buildIndex();
  let w = words(query);
  const reflexive = w.some((x) => x === "me" || x === "te" || x === "nos" || x === "vos") || /-(se|me|te|nos|vos)\b/.test(query);
  // "a gente" is the ele form.
  let subject: Person | null = null;
  for (let i = 0; i < w.length; i++) {
    if (w[i] === "a" && w[i + 1] === "gente") {
      subject = "ele";
      w.splice(i, 2);
      break;
    }
  }
  w = w.filter((x) => !FILLERS.has(x) || w.length === 1);
  if (w.length > 1 && SUBJECTS[w[0]] && !subject) {
    subject = SUBJECTS[w[0]];
    w = w.slice(1);
  }
  if (w.length > 1) w = w.filter((x) => !PRONOUNS.has(x));
  let want: PtFormHit["tense"] | null = null;
  const a = aux();
  if (w.length === 2 && a.ter.has(w[0])) {
    want = "participle";
    w = [w[1]];
  } else if (w.length === 2 && a.estar.has(w[0]) && w[1].endsWith("ndo")) {
    want = "gerund";
    w = [w[1]];
  } else if (w.length === 2 && a.serEstar.has(w[0])) {
    want = "participle";
    w = [w[1]];
  } else if (w.length === 2 && a.ir.has(w[0]) && /(ar|er|ir|or)$/.test(w[1])) {
    want = "infinitive";
    w = [w[1]];
  }
  if (w.length !== 1) return [];
  let hits = index!.get(w[0]) ?? [];
  if (want) hits = hits.filter((h) => h.tense === want);
  if (subject && !want && hits.some((h) => h.person === subject)) hits = hits.filter((h) => !h.person || h.person === subject);
  // Typed with accents: prefer the forms that have them (pôde over pode).
  const typed = query.normalize("NFC").toLowerCase();
  if (/[áàâãéêíóôõúç]/.test(typed)) {
    const exact = hits.filter((h) => typed.includes(h.form.replace(/^não /, "").toLowerCase().split(/[ -]/).pop() ?? ""));
    if (exact.length) hits = exact;
  }
  return hits.map((h) => {
    if (!reflexive || h.infinitive.endsWith("-se")) return h;
    const spec = ptSpecFor(h.infinitive);
    return spec?.prn === "also" ? { ...h, infinitive: `${h.infinitive}-se` } : h;
  });
}

export type PtVerbSearchResult = {
  infinitive: string;
  en: string;
  known: boolean;
  via: "infinitive" | "form" | "english";
  hits?: PtFormHit[];
};

function specOf(display: string): PtVerbSpec | undefined {
  return ptSpecFor(splitReflexive(display)[0]);
}

/** Verbs for a search box: exact infinitive, then verbs the typed word is a form of, then infinitives starting with it, then English meanings. */
export function searchPtVerbs(query: string, limit = 12): PtVerbSearchResult[] {
  const q = query.normalize("NFC").trim().toLowerCase().replace(/\s+/g, " ");
  if (!q) return [];
  const out: PtVerbSearchResult[] = [];
  const seen = new Set<string>();
  const push = (r: PtVerbSearchResult) => {
    if (seen.has(r.infinitive) || out.length >= limit) return;
    seen.add(r.infinitive);
    out.push(r);
  };
  const verbs = ptVerbList();
  const [qBase, qRefl] = splitReflexive(q);
  const qk = foldForSearch(qBase);
  for (const v of verbs) {
    const spec = specOf(v.infinitive)!;
    if (foldForSearch(spec.inf) !== qk) continue;
    const inf = qRefl && spec.prn === "also" ? `${spec.inf}-se` : v.infinitive;
    push({ infinitive: inf, en: inf.endsWith("-se") && spec.enSe ? spec.enSe : v.en, known: true, via: "infinitive" });
  }
  const byForm = new Map<string, PtFormHit[]>();
  for (const h of findByForm(q)) {
    if (h.tense === "infinitive" && !/\s/.test(q)) continue;
    const arr = byForm.get(h.infinitive) ?? [];
    arr.push(h);
    byForm.set(h.infinitive, arr);
  }
  const rankOf = (inf: string) => specOf(inf)?.rank ?? 9999;
  for (const [inf, hits] of [...byForm].sort((a, b) => rankOf(a[0]) - rankOf(b[0]))) {
    const spec = specOf(inf);
    push({ infinitive: inf, en: inf.endsWith("-se") && spec?.enSe ? spec.enSe : (spec?.en ?? ""), known: true, via: "form", hits });
  }
  if (qk.length >= 2) {
    for (const v of verbs) {
      if (foldForSearch(v.infinitive).startsWith(qk)) push({ infinitive: v.infinitive, en: v.en, known: true, via: "infinitive" });
    }
  }
  if (q.length >= 3) {
    const needle = q.startsWith("to ") ? q : `to ${q}`;
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(^|[^a-z])(${esc(needle)}|${esc(q)})($|[^a-z])`);
    for (const v of verbs) {
      const spec = specOf(v.infinitive)!;
      if (re.test(v.en.toLowerCase())) push({ infinitive: v.infinitive, en: v.en, known: true, via: "english" });
      else if (spec.enSe && re.test(spec.enSe.toLowerCase())) push({ infinitive: `${spec.inf}-se`, en: spec.enSe, known: true, via: "english" });
    }
  }
  if (out.length === 0 && !/\s/.test(qBase)) {
    const c = conjugate(q);
    if (c && !c.known) push({ infinitive: c.infinitive, en: "", known: false, via: "infinitive" });
  }
  return out;
}

const WHO: Record<Person, string> = { eu: "eu", tu: "tu", ele: "você/ele/ela", nos: "nós", vos: "vós", eles: "vocês/eles/elas" };

/** "Simple past, nós" -- describes a form hit. */
export function describePtHit(h: PtFormHit): string {
  if (h.tense === "participle") return "past participle";
  if (h.tense === "gerund") return "gerund";
  if (h.tense === "infinitive") return "infinitive";
  const t = TENSES.find((x) => x.id === h.tense)!;
  return h.person ? `${t.en}, ${WHO[h.person]}` : t.en;
}
