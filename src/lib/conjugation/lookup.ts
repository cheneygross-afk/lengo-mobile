// Synced from cheneygross-afk/lengo:src/lib/conjugation/lookup.ts by scripts/sync-content.mjs -- edit it there, not here.
// Finding verbs: by infinitive (accent-insensitive, "levantarse" too), by
// any conjugated form ("tuvimos" -> tener, "me levanté" -> levantarse),
// or by English meaning ("to choose" -> elegir, escoger).

import { conjugate, specFor } from "./conjugate";
import { foldForSearch } from "./spelling";
import { TENSES, personsOf, type Person, type TenseId } from "./types";
import { VERB_SPECS } from "./verbs";

export type VerbListItem = {
  infinitive: string;
  en: string;
  rank: number;
  irregular: boolean;
  prn?: "also" | "only";
};

let list: VerbListItem[] | null = null;

/** Every verb in the verb list, most frequent first. */
export function verbList(): VerbListItem[] {
  if (!list) {
    list = VERB_SPECS.map((s) => ({
      infinitive: s.prn === "only" ? `${s.inf}se` : s.inf,
      en: s.prn === "only" ? s.enSe ?? s.en : s.en,
      rank: s.rank,
      irregular: conjugate(s.inf)!.irregular,
      prn: s.prn,
    }));
  }
  return list;
}

export type FormHit = {
  /** "tener", or "levantarse" when the form was typed with a reflexive pronoun. */
  infinitive: string;
  tense: TenseId | "gerund" | "participle" | "infinitive";
  person?: Person;
  /** The form as written in the table, with accents. */
  form: string;
};

let index: Map<string, FormHit[]> | null = null;

function add(key: string, hit: FormHit) {
  const k = foldForSearch(key);
  const arr = index!.get(k);
  if (!arr) index!.set(k, [hit]);
  else if (!arr.some((h) => h.infinitive === hit.infinitive && h.tense === hit.tense && h.person === hit.person)) arr.push(hit);
}

function buildIndex() {
  index = new Map();
  for (const s of VERB_SPECS) {
    const c = conjugate(s.inf)!;
    add(s.inf, { infinitive: s.inf, tense: "infinitive", form: s.inf });
    add(c.gerund, { infinitive: s.inf, tense: "gerund", form: c.gerund });
    for (const p of c.participle.split(" / ")) add(p, { infinitive: s.inf, tense: "participle", form: p });
    for (const t of TENSES) {
      if (t.compound || t.id === "impNeg") continue;
      for (const person of personsOf(t.id)) {
        const f = c.tenses[t.id][person];
        if (!f) continue;
        for (const alt of f.split(" / ")) add(alt, { infinitive: s.inf, tense: t.id, person, form: alt });
      }
    }
    if (s.prn) {
      // Commands and gerunds with the pronoun attached: levántate, sentándose.
      const r = conjugate(`${s.inf}se`)!;
      add(`${s.inf}se`, { infinitive: `${s.inf}se`, tense: "infinitive", form: `${s.inf}se` });
      add(r.gerund, { infinitive: `${s.inf}se`, tense: "gerund", form: r.gerund });
      for (const person of personsOf("impAff")) {
        const f = r.tenses.impAff[person];
        if (f) for (const alt of f.split(" / ")) add(alt, { infinitive: `${s.inf}se`, tense: "impAff", person, form: alt });
      }
    }
  }
}

const REFLEXIVES = new Set(["me", "te", "se", "nos", "os"]);
const SUBJECTS = new Set(["yo", "tu", "vos", "el", "ella", "usted", "ud", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes", "uds"]);
const HABER = new Set(["he", "has", "ha", "hemos", "habeis", "han", "habia", "habias", "habiamos", "habiais", "habian", "hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron", "habre", "habras", "habra", "habremos", "habreis", "habran", "habria", "habrias", "habriamos", "habriais", "habrian", "haya", "hayas", "hayamos", "hayais", "hayan", "hubiera", "hubieras", "hubieramos", "hubierais", "hubieran", "hubiese", "hubieses", "hubiesemos", "hubieseis", "hubiesen", "hubiere", "hubieres", "hubieremos", "hubiereis", "hubieren"]);

/** Every verb form that matches what was typed, ignoring accents, a subject pronoun, "no", a reflexive pronoun and a form of haber. */
export function findByForm(query: string): FormHit[] {
  if (!index) buildIndex();
  let words = foldForSearch(query).replace(/[¿?¡!.,;:"]/g, " ").split(/\s+/).filter(Boolean);
  if (words[0] === "no") words = words.slice(1);
  if (words.length > 1 && SUBJECTS.has(words[0])) words = words.slice(1);
  if (words[0] === "no") words = words.slice(1);
  let reflexive = false;
  if (words.length > 1 && REFLEXIVES.has(words[0])) {
    reflexive = true;
    words = words.slice(1);
  }
  let compound = false;
  if (words.length === 2 && HABER.has(words[0])) {
    compound = true;
    words = words.slice(1);
  }
  if (words.length !== 1) return [];
  let hits = index!.get(words[0]) ?? [];
  // Typed with an accent ("habló"): drop the forms that only match without it ("hablo").
  const typed = query.normalize("NFC").toLowerCase().split(/\s+/).pop()!.replace(/[¿?¡!.,;:"]/g, "");
  if (/[áéíóúü]/.test(typed) && hits.some((h) => h.form === typed)) hits = hits.filter((h) => h.form === typed);
  return hits
    .filter((h) => !compound || h.tense === "participle")
    .map((h) => (reflexive && !h.infinitive.endsWith("se") ? { ...h, infinitive: `${h.infinitive}se` } : h));
}

export type VerbSearchResult = {
  infinitive: string;
  en: string;
  known: boolean;
  /** How it matched. */
  via: "infinitive" | "form" | "english";
  hits?: FormHit[];
};

/** Verbs for a search box: exact infinitive first, then verbs the typed word is a form of, then infinitives starting with it, then English meanings. */
export function searchVerbs(query: string, limit = 12): VerbSearchResult[] {
  const q = foldForSearch(query).replace(/^to\s+/, "to ");
  if (!q) return [];
  const out: VerbSearchResult[] = [];
  const seen = new Set<string>();
  const push = (r: VerbSearchResult) => {
    if (seen.has(r.infinitive) || out.length >= limit) return;
    seen.add(r.infinitive);
    out.push(r);
  };
  const verbs = verbList();
  const compact = q.replace(/\s+/g, "");
  for (const spec of VERB_SPECS) {
    const f = foldForSearch(spec.inf);
    let inf: string | null = null;
    if (compact === f) inf = spec.prn === "only" ? `${spec.inf}se` : spec.inf;
    else if (compact === `${f}se`) inf = `${spec.inf}se`;
    if (inf) push({ infinitive: inf, en: conjugate(inf)!.en, known: true, via: "infinitive" });
  }
  const byForm = new Map<string, FormHit[]>();
  for (const h of findByForm(query)) {
    if (h.tense === "infinitive") continue;
    const arr = byForm.get(h.infinitive) ?? [];
    arr.push(h);
    byForm.set(h.infinitive, arr);
  }
  const rankOf = (inf: string) => specFor(inf.replace(/se$/, ""))?.rank ?? specFor(inf)?.rank ?? 9999;
  for (const [inf, hits] of [...byForm].sort((a, b) => rankOf(a[0]) - rankOf(b[0]))) {
    push({ infinitive: inf, en: conjugate(inf)?.en ?? "", known: true, via: "form", hits });
  }
  if (q.length >= 2 && !q.includes(" ")) {
    for (const v of verbs) if (foldForSearch(v.infinitive).startsWith(q)) push({ infinitive: v.infinitive, en: v.en, known: true, via: "infinitive" });
  }
  if (q.length >= 3) {
    const needle = q.startsWith("to ") ? q : `to ${q}`;
    const wordRe = new RegExp(`(^|[^a-z])${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^a-z])`);
    for (const v of verbs) if (wordRe.test(foldForSearch(v.en))) push({ infinitive: v.infinitive, en: v.en, known: true, via: "english" });
  }
  // A regular-looking infinitive that isn't in the verb list.
  if (out.length === 0) {
    const c = conjugate(q.replace(/\s+/g, ""));
    if (c && !c.known) push({ infinitive: c.infinitive, en: "", known: false, via: "infinitive" });
  }
  return out;
}

/** "Preterite, yo" -- for describing a form hit. */
export function describeHit(h: FormHit): string {
  if (h.tense === "gerund") return "gerund";
  if (h.tense === "participle") return "participle";
  if (h.tense === "infinitive") return "infinitive";
  const t = TENSES.find((x) => x.id === h.tense)!;
  const who = h.person === "tu" ? "tú" : h.person === "el" ? (h.tense === "impAff" ? "usted" : "él/ella/usted") : h.person === "ellos" ? (h.tense === "impAff" ? "ustedes" : "ellos/ellas/ustedes") : h.person === "nos" ? "nosotros" : h.person;
  return `${t.en}, ${who}`;
}
