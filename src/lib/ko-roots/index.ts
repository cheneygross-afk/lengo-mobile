// Synced from cheneygross-afk/lengo:src/lib/ko-roots/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Korean Word Roots tool's data: about 300 of the most useful
// Sino-Korean roots by course level (a1.ts ... c2.ts), loaded per level.
// Optional, and the only part of the Korean course that shows Hanja.
import type { KoRoot, KoRootLevel } from "./types";

export type { KoRoot, KoRootLevel } from "./types";

export const KO_ROOT_LEVELS: { level: KoRootLevel; name: string; topik: string; blurb: string }[] = [
  { level: "a1", name: "Beginner", topik: "TOPIK 1", blurb: "Numbers, days and months, people, places and the first everyday words." },
  { level: "a2", name: "Elementary", topik: "TOPIK 2", blurb: "Work and shops, hospitals and banks, weather, colours and feelings of daily life." },
  { level: "b1", name: "Intermediate", topik: "TOPIK 3", blurb: "Health, experience, plans and prices, travel and the words of opinions." },
  { level: "b2", name: "Upper Intermediate", topik: "TOPIK 4", blurb: "Politics, law, the arts, the environment, research and the economy." },
  { level: "c1", name: "Advanced", topik: "TOPIK 5", blurb: "History and tradition, systems and rules, risk and safety, conflict and peace." },
  { level: "c2", name: "Mastery", topik: "TOPIK 6 and beyond", blurb: "Thought and ideas, judgement and law, medicine, evidence and knowledge." },
];

export function koRootLevel(slug: string) {
  return KO_ROOT_LEVELS.find((l) => l.level === slug.toLowerCase());
}

/** The roots of one level, most useful first. */
export async function loadKoRoots(level: KoRootLevel): Promise<KoRoot[]> {
  switch (level) {
    case "a1":
      return (await import("./a1")).KO_ROOTS_A1;
    case "a2":
      return (await import("./a2")).KO_ROOTS_A2;
    case "b1":
      return (await import("./b1")).KO_ROOTS_B1;
    case "b2":
      return (await import("./b2")).KO_ROOTS_B2;
    case "c1":
      return (await import("./c1")).KO_ROOTS_C1;
    case "c2":
      return (await import("./c2")).KO_ROOTS_C2;
  }
}

/** Every reading and spelling of a root (standard, word-initial, other), for finding it inside a word. */
export function rootReadings(root: KoRoot): string[] {
  return [root.r, root.initial, root.other, ...(root.forms ?? [])].filter((x): x is string => !!x);
}

/** A word split around the root's syllable, so the page can mark it: 대[학]교. */
export function splitOnRoot(word: string, root: KoRoot): [string, string, string] {
  for (const reading of rootReadings(root)) {
    const i = word.indexOf(reading);
    if (i >= 0) return [word.slice(0, i), reading, word.slice(i + reading.length)];
  }
  return [word, "", ""];
}
