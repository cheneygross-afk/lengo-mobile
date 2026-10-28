// Synced from cheneygross-afk/lengo:src/lib/ko-conjugation/lookup.ts by scripts/sync-content.mjs -- edit it there, not here.
// Finding words in the Korean conjugator: by slug (the page URL), by
// search (dictionary form, stem, English, or any conjugated form typed by
// the learner), and a best guess for a verb that isn't in the list.
import { conjugate } from "./conjugate";
import { isHangulWord, lastFinal, split } from "./hangul";
import { KO_WORDS } from "./verbs";
import type { FormId, IrrClass, KoWord, LevelCode } from "./types";

/** Where the Korean conjugation tool lives. */
export const KO_CONJUGATION_PATH = "/lessons/ko/tools/conjugation";

export const wordHref = (w: KoWord): string => `${KO_CONJUGATION_PATH}/${encodeURIComponent(w.slug)}`;

export const LEVEL_NAMES: Record<LevelCode, string> = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper Intermediate",
  C1: "Advanced",
  C2: "Mastery",
};

export const LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function koWordBySlug(slug: string): KoWord | undefined {
  const s = slug.normalize("NFC");
  return KO_WORDS.find((w) => w.slug === s);
}

/** Words of the same irregular class (for "conjugated the same way"). */
export function sameClass(w: KoWord, limit = 16): KoWord[] {
  return KO_WORDS.filter((x) => x.irr === w.irr && x.pos === w.pos && x.slug !== w.slug && !x.honSelf).slice(0, limit);
}

let formIndex: Map<string, { word: KoWord; id: FormId }[]> | null = null;

const squash = (s: string) => s.normalize("NFC").replace(/[\s?.!,]/g, "");

/** Every conjugated form of every listed word, so a typed form finds its word. */
function index(): Map<string, { word: KoWord; id: FormId }[]> {
  if (formIndex) return formIndex;
  formIndex = new Map();
  for (const word of KO_WORDS) {
    if (word.pos === "copula") continue;
    const c = conjugate(word);
    for (const [id, form] of Object.entries(c.forms) as [FormId, { text: string; alt?: string[] }][]) {
      for (const t of [form.text, ...(form.alt ?? [])]) {
        const k = squash(t);
        const list = formIndex.get(k) ?? [];
        if (!list.some((x) => x.word === word)) list.push({ word, id });
        formIndex.set(k, list);
      }
    }
  }
  return formIndex;
}

export type SearchHit = { word: KoWord; formOf?: FormId };

/** Words matching a query in Hangul (dictionary form, stem or any form) or English. */
export function searchKoWords(query: string, limit = 10): SearchHit[] {
  const q = query.trim().normalize("NFC");
  if (!q) return [];
  const hits: SearchHit[] = [];
  const add = (h: SearchHit) => {
    if (!hits.some((x) => x.word === h.word)) hits.push(h);
  };
  if (/[가-힣]/.test(q)) {
    const sq = squash(q);
    for (const w of KO_WORDS) if (w.dict === sq || w.slug === q) add({ word: w });
    if (/(이에요|예요|입니다)$/.test(sq)) add({ word: KO_WORDS.find((w) => w.pos === "copula")! });
    for (const hit of index().get(sq) ?? []) add({ word: hit.word, formOf: hit.id });
    for (const w of KO_WORDS) if (w.dict.startsWith(sq) || sq.startsWith(w.dict.slice(0, -1))) add({ word: w });
    for (const w of KO_WORDS) if (w.dict.includes(sq)) add({ word: w });
    // A form with endings beyond the table (가셨거든요): the longest listed stem it starts with.
    if (hits.length === 0) {
      const stems = KO_WORDS.filter((w) => w.pos !== "copula" && w.dict.length > 2 && sq.startsWith(w.dict.slice(0, -1)));
      stems.sort((a, b) => b.dict.length - a.dict.length).forEach((w) => add({ word: w }));
    }
  } else {
    const en = q.toLowerCase().replace(/^to /, "");
    const re = new RegExp(`\\b${en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
    for (const w of KO_WORDS) if (w.en.toLowerCase().split(/[;,]\s*/).some((s) => s.replace(/^to (be )?/, "") === en)) add({ word: w });
    for (const w of KO_WORDS) if (re.test(w.en.toLowerCase())) add({ word: w });
  }
  return hits.slice(0, limit);
}

// ㅂ-final adjectives that keep ㅂ are few (좁다, 넓다 ...); these endings are almost always ㅂ irregular.
const B_IRREGULAR_ENDINGS = /(스럽|롭|답|겁|럽|갑|깝|섭|렵|립|쉽|덥|춥|맵|곱)$/;

/** A best guess for a dictionary form that isn't in the list (a learner's own verb), or null if it can't be one. */
export function guessKoWord(input: string): KoWord | null {
  const dict = input.trim().normalize("NFC");
  if (!isHangulWord(dict) || dict.length < 2 || !dict.endsWith("다")) return null;
  const listed = KO_WORDS.find((w) => w.dict === dict);
  if (listed) return listed;
  const stem = dict.slice(0, -1);
  const last = stem[stem.length - 1];
  const fin = lastFinal(stem);
  let irr: IrrClass = "regular";
  let pos: KoWord["pos"] = "verb";
  if (/(있|없)$/.test(stem)) pos = "exist";
  else if (last === "하") irr = "하";
  else if (last === "르") irr = "르";
  else if (fin === "ㄹ") irr = "ㄹ";
  else if (fin === "ㅎ" && !/(좋|놓|넣|낳|많|싫|않|찮|닿|쌓|빻|땋)$/.test(stem)) {
    irr = "ㅎ";
    pos = "adj";
  } else if (fin === "ㅂ" && B_IRREGULAR_ENDINGS.test(stem)) {
    irr = "ㅂ";
    pos = "adj";
  } else if (!fin && split(last).vowel === "ㅡ") irr = "으";
  if (/(스럽|롭|답)$/.test(stem)) pos = "adj";
  return { dict, slug: dict, en: "", pos, irr, level: "C2" };
}
