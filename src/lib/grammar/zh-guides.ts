// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-guides.ts by scripts/sync-content.mjs -- edit it there, not here.
// All Chinese grammar guides, A1 to C2 (/lessons/zh/tools/grammar).
// One file per level; the shape is in ./zh-types.ts.
import type { ZhGrammarGuide, ZhLevel } from "./zh-types";
import { ZH_GUIDES_A1 } from "./zh-guides-a1";
import { ZH_GUIDES_A2 } from "./zh-guides-a2";
import { ZH_GUIDES_B1 } from "./zh-guides-b1";
import { ZH_GUIDES_B2 } from "./zh-guides-b2";
import { ZH_GUIDES_C1 } from "./zh-guides-c1";
import { ZH_GUIDES_C2 } from "./zh-guides-c2";

export const ZH_GRAMMAR_GUIDES: ZhGrammarGuide[] = [
  ...ZH_GUIDES_A1,
  ...ZH_GUIDES_A2,
  ...ZH_GUIDES_B1,
  ...ZH_GUIDES_B2,
  ...ZH_GUIDES_C1,
  ...ZH_GUIDES_C2,
];

export function getZhGrammarGuide(slug: string): ZhGrammarGuide | undefined {
  return ZH_GRAMMAR_GUIDES.find((g) => g.slug === slug);
}

export function zhGuidesAtLevel(level: ZhLevel): ZhGrammarGuide[] {
  return ZH_GRAMMAR_GUIDES.filter((g) => g.level === level);
}
