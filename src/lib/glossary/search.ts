// Synced from cheneygross-afk/lengo:src/lib/glossary/search.ts by scripts/sync-content.mjs -- edit it there, not here.
// Search over the course glossary (data.ts, built by
// scripts/glossary/build.ts): Spanish or English, ignoring accents, and
// a conjugated verb finds its infinitive ("tuvimos" -> tener).
//
// Shared by the website and the mobile app. The website fetches the data
// from /api/glossary instead of bundling it, so this module takes the
// data as an argument rather than importing it.

import { findByForm } from "../conjugation/lookup";

export type GlossarySourceRow = ["l" | "s", string, string, string, string, number];
export type GlossaryEntryRow = [string, string, string, number[], number];

export type GlossarySource = {
  kind: "lesson" | "story";
  levelPath: string;
  slug: string;
  title: string;
  level: string;
  /** Lesson number, 0 for a story. */
  number: number;
};

export type GlossaryEntry = {
  es: string;
  senses: string[];
  /** True when the meaning is a Spanish definition (B2 and up) rather than an English translation. */
  def: boolean;
  /** Level where the course first uses it. */
  level: string;
  sources: GlossarySource[];
};

export type GlossaryHit = GlossaryEntry & { formOf?: string };

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

const ARTICLE = /^(el|la|los|las|un|una|el\/la|la\/el)\s+/;
const LEVEL_RANK: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, "C1/C2": 5.5, C2: 6 };

type Prepared = { entry: GlossaryEntry; es: string; bare: string; words: string[]; senses: string[] };

export type Glossary = {
  entries: GlossaryEntry[];
  search: (query: string, limit?: number) => GlossaryHit[];
};

export function makeGlossary(sources: GlossarySourceRow[], rows: GlossaryEntryRow[]): Glossary {
  const src: GlossarySource[] = sources.map(([k, levelPath, slug, title, level, number]) => ({
    kind: k === "l" ? "lesson" : "story",
    levelPath,
    slug,
    title,
    level,
    number,
  }));
  const entries: GlossaryEntry[] = rows.map(([es, senses, level, ids, def]) => ({
    es,
    senses: senses.split(" | "),
    def: def === 1,
    level,
    sources: ids.map((i) => src[i]).filter(Boolean),
  }));
  const prepared: Prepared[] = entries.map((entry) => {
    const es = fold(entry.es);
    return {
      entry,
      es,
      bare: es.replace(ARTICLE, ""),
      words: es.split(/[\s/,()]+/).filter(Boolean),
      senses: entry.def ? [] : entry.senses.map((s) => fold(s).replace(/^to /, "")),
    };
  });
  const byEs = new Map<string, Prepared[]>();
  for (const p of prepared) {
    for (const k of [p.es, p.bare]) {
      const arr = byEs.get(k) ?? [];
      arr.push(p);
      byEs.set(k, arr);
    }
  }

  function search(query: string, limit = 50): GlossaryHit[] {
    const q = fold(query).replace(/[¿?¡!.,;:"]/g, "").replace(/\s+/g, " ").trim();
    if (!q) return [];
    const qEn = q.replace(/^to /, "");
    const scored = new Map<Prepared, { score: number; formOf?: string }>();
    const bump = (p: Prepared, score: number, formOf?: string) => {
      const cur = scored.get(p);
      if (!cur || score > cur.score) scored.set(p, { score, formOf });
    };
    const wordRe = new RegExp(`(^|[^a-z])${qEn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^a-z])`);
    for (const p of prepared) {
      if (p.es === q || p.bare === q) bump(p, 100);
      else if (p.bare.startsWith(q) || p.es.startsWith(q)) bump(p, 80 - Math.min(20, p.bare.length - q.length));
      else if (p.words.some((w) => w.startsWith(q))) bump(p, 55);
      else if (q.length >= 3 && p.es.includes(q)) bump(p, 35);
      for (const s of p.senses) {
        if (s === qEn) bump(p, 95);
        else if (wordRe.test(s)) bump(p, 70 - Math.min(20, s.length / 4));
        else if (qEn.length >= 4 && s.includes(qEn)) bump(p, 30);
      }
    }
    // A conjugated verb: show the infinitive's entry.
    if (!q.includes(" ") && q.length >= 2) {
      for (const hit of findByForm(q)) {
        if (hit.tense === "infinitive") continue;
        for (const p of byEs.get(fold(hit.infinitive)) ?? []) bump(p, 90, hit.infinitive);
      }
    }
    return [...scored]
      .sort(
        (a, b) =>
          b[1].score - a[1].score ||
          (LEVEL_RANK[a[0].entry.level] ?? 9) - (LEVEL_RANK[b[0].entry.level] ?? 9) ||
          a[0].es.length - b[0].es.length,
      )
      .slice(0, limit)
      .map(([p, s]) => (s.formOf ? { ...p.entry, formOf: s.formOf } : p.entry));
  }

  return { entries, search };
}

/** "A1 · Lesson 12: Title" or "A2 story: Title". */
export function sourceLabel(s: GlossarySource): string {
  if (s.kind === "story") return `${s.level} story: ${s.title}`;
  const level = s.levelPath === "cosas-coloquiales" ? "Cosas Coloquiales" : s.level;
  return `${level} · Lesson ${s.number}: ${s.title}`;
}
