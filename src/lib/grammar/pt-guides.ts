// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-guides.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { PtGrammarGuide } from "./pt-types";
import { PT_A1_GUIDES } from "./pt-guides-a1";
import { PT_A2_GUIDES } from "./pt-guides-a2";
import { PT_B1_GUIDES } from "./pt-guides-b1";
import { PT_B2_GUIDES } from "./pt-guides-b2";
import { PT_C1_GUIDES } from "./pt-guides-c1";
import { PT_C2_GUIDES } from "./pt-guides-c2";

// Every Brazilian Portuguese grammar guide, beginner first. One file per level (see the
// notes at the top of ./pt-types.ts).
export const PT_GRAMMAR_GUIDES: PtGrammarGuide[] = [
  ...PT_A1_GUIDES,
  ...PT_A2_GUIDES,
  ...PT_B1_GUIDES,
  ...PT_B2_GUIDES,
  ...PT_C1_GUIDES,
  ...PT_C2_GUIDES,
];

export function portugueseGuide(slug: string): PtGrammarGuide | undefined {
  return PT_GRAMMAR_GUIDES.find((g) => g.slug === slug);
}
