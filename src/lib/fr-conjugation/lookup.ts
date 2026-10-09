// Synced from cheneygross-afk/lengo:src/lib/fr-conjugation/lookup.ts by scripts/sync-content.mjs -- edit it there, not here.
// Finding French verbs: by infinitive (accent-insensitive, "se lever" too),
// by any conjugated form ("vînmes" -> venir, "je me suis levé" -> se
// lever, "j'ai pris" -> prendre), or by English meaning ("to choose" ->
// choisir).

import { conjugate, frSpecFor, simpleFormsOf, splitPronominal } from "./conjugate";
import { foldForSearch, frVerbSlug } from "./text";
import { TENSES, PERSONS6, type Person, type TenseId } from "./types";
import { FR_VERB_SPECS, specInfinitive, reflexiveInfinitive, type FrVerbSpec } from "./verbs";

export type FrVerbListItem = {
  /** Display infinitive: "parler", "se souvenir". */
  infinitive: string;
  slug: string;
  en: string;
  rank: number;
  irregular: boolean;
  prn?: "also" | "only";
};

let list: FrVerbListItem[] | null = null;

/** Every verb in the verb list, most frequent first. */
export function frVerbList(): FrVerbListItem[] {
  if (!list) {
    list = FR_VERB_SPECS.map((s) => {
      const infinitive = specInfinitive(s);
      return { infinitive, slug: frVerbSlug(infinitive), en: s.en, rank: s.rank, irregular: conjugate(infinitive)!.irregular, prn: s.prn };
    });
  }
  return list;
}

/** The listed verb whose page has this slug ("connaitre", "se-souvenir"). */
export function frVerbBySlug(slug: string): FrVerbListItem | undefined {
  const s = foldForSearch(slug);
  return frVerbList().find((v) => v.slug === s);
}

/** The listed verb whose page shows this infinitive ("se lever" -> lever's page, which has both). */
export function frVerbPageFor(inf: string): FrVerbListItem | undefined {
  const [base, , en] = splitPronominal(inf);
  const spec = frSpecFor(en ? `en ${base}` : base);
  if (!spec) return undefined;
  const display = specInfinitive(spec);
  return frVerbList().find((v) => v.infinitive === display);
}

export type FrFormHit = {
  /** Display infinitive ("prendre", "se lever" when typed with a reflexive pronoun). */
  infinitive: string;
  tense: TenseId | "participle" | "presentParticiple" | "infinitive";
  person?: Person;
  form: string;
};

let index: Map<string, FrFormHit[]> | null = null;

function add(key: string, hit: FrFormHit) {
  const k = foldForSearch(key);
  const arr = index!.get(k);
  if (!arr) index!.set(k, [hit]);
  else if (!arr.some((h) => h.infinitive === hit.infinitive && h.tense === hit.tense && h.person === hit.person)) arr.push(hit);
}

function buildIndex() {
  index = new Map();
  for (const s of FR_VERB_SPECS) {
    const display = specInfinitive(s);
    const f = simpleFormsOf(s.inf)!;
    add(s.inf, { infinitive: display, tense: "infinitive", form: display });
    add(f.pp, { infinitive: display, tense: "participle", form: f.pp });
    if (f.ppr) add(f.ppr, { infinitive: display, tense: "presentParticiple", form: f.ppr });
    for (const [t, forms] of Object.entries(f.tenses) as [TenseId, (string | null)[]][]) {
      const persons = t === "imp" ? (["tu", "nous", "vous"] as Person[]) : PERSONS6;
      forms.forEach((form, i) => {
        if (!form) return;
        if (s.impersonal && persons[i] !== "il") return;
        for (const a of form.split(" / ")) add(a, { infinitive: display, tense: t, person: persons[i], form: a });
      });
    }
  }
}

/** Builds the form index ahead of the first search. */
export function warmUpFrLookup(): void {
  if (!index) buildIndex();
}

const SUBJECTS = new Set(["je", "j'", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"]);
const SUBJECT_PERSON: Record<string, Person> = {
  je: "je", "j'": "je", tu: "tu", il: "il", elle: "il", on: "il", nous: "nous", vous: "vous", ils: "ils", elles: "ils",
};
const REFLEXIVES = new Set(["me", "m'", "te", "t'", "se", "s'", "nous", "vous"]);
const AUX = new Set(
  ("ai as a avons avez ont avais avait avions aviez avaient eus eut eumes eutes eurent aurai auras aura aurons aurez auront " +
    "aurais aurait aurions auriez auraient aie aies ait ayons ayez aient eusse eusses eussions eussiez eussent " +
    "suis es est sommes etes sont etais etait etions etiez etaient fus fut fumes futes furent serai seras sera serons serez seront " +
    "serais serait serions seriez seraient sois soit soyons soyez soient fusse fusses fussions fussiez fussent")
    .split(" "),
);

/** Every verb form matching what was typed, ignoring accents, a subject pronoun, que, ne...pas, a reflexive pronoun and a form of avoir/être. */
export function findByForm(query: string): FrFormHit[] {
  if (!index) buildIndex();
  let q = foldForSearch(query).replace(/[?!.,;:"«»]/g, " ");
  let reflexive = false;
  // Imperatives with a pronoun: lève-toi, asseyez-vous.
  const imp = q.match(/^(\S+)-(toi|nous|vous|t'en|nous-en|vous-en)$/);
  if (imp) {
    q = imp[1];
    reflexive = true;
  }
  let words = q.replace(/'/g, "' ").split(/\s+/).filter(Boolean);
  words = words.filter((w) => w !== "ne" && w !== "n'" && w !== "pas");
  if (words[0] === "que" || words[0] === "qu'") words = words.slice(1);
  let subject: Person | null = null;
  if (words.length > 1 && SUBJECTS.has(words[0])) {
    subject = SUBJECT_PERSON[words[0]];
    words = words.slice(1);
  }
  if (words.length > 1 && REFLEXIVES.has(words[0])) {
    reflexive = true;
    words = words.slice(1);
    if (words.length > 1 && words[0] === "en") words = words.slice(1);
  }
  let compound = false;
  if (words.length === 2 && AUX.has(words[0])) {
    compound = true;
    words = [words[1]];
  }
  if (words.length !== 1) return [];
  let key = words[0];
  let hits = index!.get(key) ?? [];
  if (compound && hits.length === 0) {
    // Agreement: allées -> allé, assises -> assis.
    for (const strip of [/es$/, /e$/, /s$/]) {
      key = words[0].replace(strip, "");
      hits = index!.get(key) ?? [];
      if (hits.length) break;
    }
  }
  if (subject && !compound && hits.some((h) => h.person === subject)) hits = hits.filter((h) => h.person === subject);
  const typed = query.normalize("NFC").toLowerCase().trim().split(/[\s']+/).pop()!;
  if (/[àâçéèêëîïôûù]/.test(typed) && hits.some((h) => h.form === typed)) hits = hits.filter((h) => h.form === typed);
  return hits
    .filter((h) => !compound || h.tense === "participle")
    .map((h) => {
      if (!reflexive || h.infinitive.startsWith("se ") || h.infinitive.startsWith("s'")) return h;
      return { ...h, infinitive: reflexiveInfinitive(h.infinitive, false) };
    });
}

export type FrVerbSearchResult = {
  infinitive: string;
  en: string;
  known: boolean;
  via: "infinitive" | "form" | "english";
  hits?: FrFormHit[];
};

function specOf(display: string): FrVerbSpec | undefined {
  const [base, , en] = splitPronominal(display);
  return frSpecFor(en ? `en ${base}` : base);
}

/** Verbs for a search box: exact infinitive, then verbs the typed word is a form of, then infinitives starting with it, then English meanings. */
export function searchFrVerbs(query: string, limit = 12): FrVerbSearchResult[] {
  const q = foldForSearch(query).replace(/\s+/g, " ");
  if (!q) return [];
  const out: FrVerbSearchResult[] = [];
  const seen = new Set<string>();
  const push = (r: FrVerbSearchResult) => {
    if (seen.has(r.infinitive) || out.length >= limit) return;
    seen.add(r.infinitive);
    out.push(r);
  };
  const verbs = frVerbList();
  const [qBase, qPrn] = splitPronominal(q);
  for (const v of verbs) {
    const spec = specOf(v.infinitive)!;
    if (foldForSearch(spec.inf) !== qBase && foldForSearch(v.infinitive) !== q) continue;
    const inf = qPrn && spec.prn !== "only" ? reflexiveInfinitive(spec.inf, false) : v.infinitive;
    push({ infinitive: inf, en: conjugate(inf)?.en ?? v.en, known: true, via: "infinitive" });
  }
  const byForm = new Map<string, FrFormHit[]>();
  for (const h of findByForm(query)) {
    if (h.tense === "infinitive") continue;
    const arr = byForm.get(h.infinitive) ?? [];
    arr.push(h);
    byForm.set(h.infinitive, arr);
  }
  const rankOf = (inf: string) => specOf(inf)?.rank ?? 9999;
  for (const [inf, hits] of [...byForm].sort((a, b) => rankOf(a[0]) - rankOf(b[0]))) {
    push({ infinitive: inf, en: conjugate(inf)?.en ?? "", known: true, via: "form", hits });
  }
  if (q.length >= 2) {
    for (const v of verbs) {
      const spec = specOf(v.infinitive)!;
      if (foldForSearch(v.infinitive).startsWith(q) || foldForSearch(spec.inf).startsWith(qBase)) {
        push({ infinitive: v.infinitive, en: v.en, known: true, via: "infinitive" });
      }
    }
  }
  if (q.length >= 3) {
    const needle = q.startsWith("to ") ? q : `to ${q}`;
    const re = new RegExp(`(^|[^a-z])${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^a-z])`);
    for (const v of verbs) {
      const spec = specOf(v.infinitive)!;
      if (re.test(foldForSearch(v.en))) push({ infinitive: v.infinitive, en: v.en, known: true, via: "english" });
      else if (spec.enSe && re.test(foldForSearch(spec.enSe))) {
        const inf = reflexiveInfinitive(spec.inf, false);
        push({ infinitive: inf, en: spec.enSe, known: true, via: "english" });
      }
    }
  }
  if (out.length === 0) {
    const c = conjugate(q);
    if (c && !c.known) push({ infinitive: c.infinitive, en: "", known: false, via: "infinitive" });
  }
  return out;
}

const WHO: Record<Person, string> = { je: "je", tu: "tu", il: "il/elle/on", nous: "nous", vous: "vous", ils: "ils/elles" };

/** "Imperfect, nous" -- describes a form hit. */
export function describeFrHit(h: FrFormHit): string {
  if (h.tense === "participle") return "past participle";
  if (h.tense === "presentParticiple") return "present participle";
  if (h.tense === "infinitive") return "infinitive";
  const t = TENSES.find((x) => x.id === h.tense)!;
  return h.person ? `${t.en}, ${WHO[h.person]}` : t.en;
}
