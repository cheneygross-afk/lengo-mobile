// Synced from cheneygross-afk/lengo:src/lib/de-conjugation/lookup.ts by scripts/sync-content.mjs -- edit it there, not here.
// Finding German verbs: by infinitive (umlaut-insensitive, "sich freuen"
// too), by any conjugated form ("fing" -> fangen, "ich fange an" ->
// anfangen, "hat sich gefreut" -> sich freuen, "fährt" -> fahren), or by
// English meaning ("to begin" -> anfangen, beginnen).

import { conjugate, deSpecFor, splitReflexive } from "./conjugate";
import { deVerbSlug, foldEnglishSpelling, foldForSearch, transliterate } from "./text";
import { IMP_PERSONS, PERSONS6, TENSES, type Person, type TenseId, type VerbKind } from "./types";
import { DE_VERB_SPECS, specInfinitive, type DeVerbSpec } from "./verbs";

export type DeVerbListItem = {
  /** Display infinitive: "machen", "anfangen", "sich freuen". */
  infinitive: string;
  slug: string;
  en: string;
  rank: number;
  irregular: boolean;
  kind: VerbKind;
  /** The strong/irregular simple verb it is built on ("fangen" for anfangen). */
  model: string | null;
  prn?: "also" | "only";
};

let list: DeVerbListItem[] | null = null;

/** Every verb in the verb list, most frequent first. */
export function deVerbList(): DeVerbListItem[] {
  if (!list) {
    list = DE_VERB_SPECS.map((s) => {
      const infinitive = specInfinitive(s);
      const c = conjugate(infinitive)!;
      return {
        infinitive,
        slug: deVerbSlug(infinitive),
        en: s.en,
        rank: s.rank,
        irregular: c.irregular,
        kind: c.kind,
        model: c.model ?? (c.kind === "weak" ? null : c.base),
        prn: s.prn,
      };
    });
  }
  return list;
}

/** The listed verb whose page has this slug ("aendern", "sich-freuen"; "ändern" works too). */
export function deVerbBySlug(slug: string): DeVerbListItem | undefined {
  const s = deVerbSlug(slug.replace(/-/g, " "));
  return deVerbList().find((v) => v.slug === s);
}

/** The listed verb whose page shows this infinitive ("sich waschen" -> waschen's page, which has both). */
export function deVerbPageFor(inf: string): DeVerbListItem | undefined {
  const [base] = splitReflexive(inf);
  const spec = deSpecFor(base.replace(/[·|]/g, ""));
  if (!spec) return undefined;
  const display = specInfinitive(spec);
  return deVerbList().find((v) => v.infinitive === display);
}

/** Listed verbs built on the same strong or irregular verb (anfangen, empfangen... for fangen), most frequent first. */
export function deFamilyOf(model: string): string[] {
  return deVerbList()
    .filter((v) => v.model === model)
    .map((v) => v.infinitive);
}

export type DeFormHit = {
  /** Display infinitive ("fangen", "sich freuen" when typed with a reflexive pronoun). */
  infinitive: string;
  tense: TenseId | "partizip2" | "partizip1" | "infinitive";
  person?: Person;
  form: string;
};

let index: Map<string, DeFormHit[]> | null = null;

const REFL_WORDS = new Set(["mich", "dich", "sich", "uns", "euch", "mir", "dir"]);

/** A cell or query reduced to its verb words: reflexive pronouns and the imperative's Sie dropped, umlauts folded. */
function verbWords(s: string): string {
  return foldForSearch(s)
    .split(/\s+/)
    .filter((w) => w && !REFL_WORDS.has(w) && w !== "sie")
    .join(" ");
}

function add(key: string, hit: DeFormHit) {
  for (const k of new Set([verbWords(key), verbWords(transliterate(key))])) {
    if (!k) continue;
    const arr = index!.get(k);
    if (!arr) index!.set(k, [hit]);
    else if (!arr.some((h) => h.infinitive === hit.infinitive && h.tense === hit.tense && h.person === hit.person)) arr.push(hit);
  }
}

function buildIndex() {
  index = new Map();
  for (const s of DE_VERB_SPECS) {
    const display = specInfinitive(s);
    const c = conjugate(display);
    if (!c) continue;
    add(s.inf, { infinitive: display, tense: "infinitive", form: display });
    for (const pp of c.partizip2.split(" / ")) add(pp, { infinitive: display, tense: "partizip2", form: pp });
    add(c.partizip1, { infinitive: display, tense: "partizip1", form: c.partizip1 });
    for (const t of ["pres", "praet", "k2", "k1", "imp"] as TenseId[]) {
      const persons = t === "imp" ? IMP_PERSONS : PERSONS6;
      for (const p of persons) {
        const cell = c.tenses[t][p];
        if (!cell) continue;
        for (const form of cell.split(" / ")) {
          const hit = { infinitive: display, tense: t, person: p, form };
          add(form, hit);
          // The joined form of a subordinate clause: "anfange" (..., weil ich anfange).
          if (c.separable && t !== "imp") {
            const words = verbWords(form).split(" ");
            if (words[words.length - 1] === foldForSearch(c.separable)) add(`${c.separable}${words[0]}`, hit);
          }
        }
      }
    }
  }
}

/** Builds the form index ahead of the first search. */
export function warmUpDeLookup(): void {
  if (!index) buildIndex();
}

const SUBJECT_PERSON: Record<string, Person> = { ich: "ich", du: "du", er: "er", sie: "er", es: "er", man: "er", wir: "wir", ihr: "ihr" };
const AUX = new Set(
  ("habe hast hat haben habt hatte hattest hatten hattet hatte hatten haette haettest haetten haettet hätte hättest hätten hättet habest habet " +
    "bin bist ist sind seid war warst waren wart waere waerst waeren waert wäre wärst wären wärt sei seist seiest seien seiet")
    .split(" ")
    .map(foldForSearch),
);
const FUT = new Set(
  "werde wirst wird werden werdet wuerde wuerdest wuerden wuerdet würde würdest würden würdet".split(" ").map(foldForSearch),
);

/** Every verb form matching what was typed, ignoring umlauts, a subject pronoun, dass/weil, nicht, reflexive pronouns and an auxiliary. */
export function findByForm(query: string): DeFormHit[] {
  if (!index) buildIndex();
  const raw = foldForSearch(query).replace(/[?!.,;:"„“”«»()]/g, " ");
  let words = raw.split(/\s+/).filter(Boolean);
  const reflexive = words.some((w) => REFL_WORDS.has(w));
  words = words.filter((w) => w !== "nicht" && w !== "dass" && w !== "weil" && w !== "ob" && w !== "wenn");
  let subject: Person | null = null;
  if (words.length > 1 && SUBJECT_PERSON[words[0]]) {
    subject = words[0] === "sie" ? null : SUBJECT_PERSON[words[0]];
    words = words.slice(1);
  }
  words = words.filter((w) => !REFL_WORDS.has(w) && w !== "sie");
  // Subordinate-clause order: "ich mich gefreut habe", "angefangen hat".
  if (words.length === 2 && (AUX.has(words[1]) || FUT.has(words[1]))) words = [words[1], words[0]];
  let want: DeFormHit["tense"] | null = null;
  if (words.length === 2 && AUX.has(words[0])) {
    want = "partizip2";
    words = [words[1]];
  } else if (words.length === 2 && FUT.has(words[0])) {
    want = "infinitive";
    words = [words[1]];
  } else if (words.length === 3 && FUT.has(words[0]) && (words[2] === "haben" || words[2] === "sein")) {
    want = "partizip2";
    words = [words[1]];
  }
  if (words.length === 0 || words.length > 2) return [];
  let hits = index!.get(words.join(" ")) ?? [];
  if (want) hits = hits.filter((h) => h.tense === want);
  if (subject && !want && hits.some((h) => h.person === subject)) hits = hits.filter((h) => !h.person || h.person === subject);
  const typed = query.normalize("NFC").toLowerCase();
  if (/[äöüß]/.test(typed)) {
    const exact = hits.filter((h) => typed.includes(h.form.toLowerCase().split(" ")[0]));
    if (exact.length) hits = exact;
  }
  return hits.map((h) => {
    if (!reflexive || h.infinitive.startsWith("sich ")) return h;
    const spec = deSpecFor(h.infinitive);
    return spec?.prn === "also" ? { ...h, infinitive: `sich ${h.infinitive}` } : h;
  });
}

export type DeVerbSearchResult = {
  infinitive: string;
  en: string;
  known: boolean;
  via: "infinitive" | "form" | "english";
  hits?: DeFormHit[];
};

function specOf(display: string): DeVerbSpec | undefined {
  return deSpecFor(splitReflexive(display)[0]);
}

const key = (s: string) => foldForSearch(transliterate(s));

/** Verbs for a search box: exact infinitive, then verbs the typed word is a form of, then infinitives starting with it, then English meanings. */
export function searchDeVerbs(query: string, limit = 12): DeVerbSearchResult[] {
  const q = query.normalize("NFC").trim().toLowerCase().replace(/\s+/g, " ");
  if (!q) return [];
  const out: DeVerbSearchResult[] = [];
  const seen = new Set<string>();
  const push = (r: DeVerbSearchResult) => {
    if (seen.has(r.infinitive) || out.length >= limit) return;
    seen.add(r.infinitive);
    out.push(r);
  };
  const verbs = deVerbList();
  const [qBase, qRefl] = splitReflexive(q.replace(/[·|]/g, ""));
  const qk = key(qBase);
  for (const v of verbs) {
    const spec = specOf(v.infinitive)!;
    if (key(spec.inf) !== qk) continue;
    const inf = qRefl && spec.prn === "also" ? `sich ${spec.inf}` : v.infinitive;
    push({ infinitive: inf, en: conjugate(inf)?.en ?? v.en, known: true, via: "infinitive" });
  }
  const byForm = new Map<string, DeFormHit[]>();
  for (const h of findByForm(q)) {
    if (h.tense === "infinitive" && !/\s/.test(q)) continue;
    const arr = byForm.get(h.infinitive) ?? [];
    arr.push(h);
    byForm.set(h.infinitive, arr);
  }
  const rankOf = (inf: string) => specOf(inf)?.rank ?? 9999;
  for (const [inf, hits] of [...byForm].sort((a, b) => rankOf(a[0]) - rankOf(b[0]))) {
    push({ infinitive: inf, en: conjugate(inf)?.en ?? "", known: true, via: "form", hits });
  }
  if (qk.length >= 2) {
    for (const v of verbs) {
      const spec = specOf(v.infinitive)!;
      if (key(spec.inf).startsWith(qk) || key(v.infinitive).startsWith(key(q))) push({ infinitive: v.infinitive, en: v.en, known: true, via: "infinitive" });
    }
  }
  if (q.length >= 3) {
    // British glosses, American spellings welcome: "recognize" finds "to recognise".
    const eq = foldEnglishSpelling(q);
    const needle = eq.startsWith("to ") ? eq : `to ${eq}`;
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(^|[^a-z])(${esc(needle)}|${esc(eq)})($|[^a-z])`);
    for (const v of verbs) {
      const spec = specOf(v.infinitive)!;
      if (re.test(foldEnglishSpelling(v.en))) push({ infinitive: v.infinitive, en: v.en, known: true, via: "english" });
      else if (spec.enRefl && re.test(foldEnglishSpelling(spec.enRefl))) push({ infinitive: `sich ${spec.inf}`, en: spec.enRefl, known: true, via: "english" });
    }
  }
  if (out.length === 0) {
    const c = conjugate(q);
    if (c && !c.known) push({ infinitive: c.infinitive, en: "", known: false, via: "infinitive" });
  }
  return out;
}

const WHO: Record<Person, string> = { ich: "ich", du: "du", er: "er/sie/es", wir: "wir", ihr: "ihr", sie: "sie/Sie", Sie: "Sie" };

/** "Simple past, wir" -- describes a form hit. */
export function describeDeHit(h: DeFormHit): string {
  if (h.tense === "partizip2") return "past participle (Partizip II)";
  if (h.tense === "partizip1") return "present participle (Partizip I)";
  if (h.tense === "infinitive") return "infinitive";
  const t = TENSES.find((x) => x.id === h.tense)!;
  return h.person ? `${t.en}, ${WHO[h.person]}` : t.en;
}
