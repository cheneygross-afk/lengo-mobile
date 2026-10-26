// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";
import { KO_HANGUL_GUIDES } from "./ko-guides-hangul";
import { KO_A1_GUIDES } from "./ko-guides-a1";
import { KO_A2_GUIDES } from "./ko-guides-a2";
import { KO_B1_GUIDES } from "./ko-guides-b1";
import { KO_B2_GUIDES } from "./ko-guides-b2";
import { KO_C1_GUIDES } from "./ko-guides-c1";
import { KO_C2_GUIDES } from "./ko-guides-c2";

// Every Korean grammar guide, the sound system first. One file per level (see
// the notes at the top of ./ko-types.ts).
export const KO_GRAMMAR_GUIDES: KoGrammarGuide[] = [
  ...KO_HANGUL_GUIDES,
  ...KO_A1_GUIDES,
  ...KO_A2_GUIDES,
  ...KO_B1_GUIDES,
  ...KO_B2_GUIDES,
  ...KO_C1_GUIDES,
  ...KO_C2_GUIDES,
];

export function koreanGuide(slug: string): KoGrammarGuide | undefined {
  return KO_GRAMMAR_GUIDES.find((g) => g.slug === slug);
}
