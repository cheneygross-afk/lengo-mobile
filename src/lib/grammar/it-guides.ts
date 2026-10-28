// Synced from cheneygross-afk/lengo:src/lib/grammar/it-guides.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ItGrammarGuide } from "./it-types";
import { IT_A1_GUIDES } from "./it-guides-a1";
import { IT_A2_GUIDES } from "./it-guides-a2";
import { IT_B1_GUIDES } from "./it-guides-b1";
import { IT_B2_GUIDES } from "./it-guides-b2";
import { IT_C1_GUIDES } from "./it-guides-c1";
import { IT_C2_GUIDES } from "./it-guides-c2";

// Every Italian grammar guide, beginner first. One file per level (see the
// notes at the top of ./it-types.ts).
export const IT_GRAMMAR_GUIDES: ItGrammarGuide[] = [
  ...IT_A1_GUIDES,
  ...IT_A2_GUIDES,
  ...IT_B1_GUIDES,
  ...IT_B2_GUIDES,
  ...IT_C1_GUIDES,
  ...IT_C2_GUIDES,
];

export function italianGuide(slug: string): ItGrammarGuide | undefined {
  return IT_GRAMMAR_GUIDES.find((g) => g.slug === slug);
}
