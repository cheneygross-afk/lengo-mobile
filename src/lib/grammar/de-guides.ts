// Synced from cheneygross-afk/lengo:src/lib/grammar/de-guides.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DeGrammarGuide } from "./de-types";
import { DE_A1_GUIDES } from "./de-guides-a1";
import { DE_A2_GUIDES } from "./de-guides-a2";
import { DE_B1_GUIDES } from "./de-guides-b1";
import { DE_B2_GUIDES } from "./de-guides-b2";
import { DE_C1_GUIDES } from "./de-guides-c1";
import { DE_C2_GUIDES } from "./de-guides-c2";

// Every German grammar guide, beginner first. One file per level (see the
// notes at the top of ./de-types.ts).
export const DE_GRAMMAR_GUIDES: DeGrammarGuide[] = [
  ...DE_A1_GUIDES,
  ...DE_A2_GUIDES,
  ...DE_B1_GUIDES,
  ...DE_B2_GUIDES,
  ...DE_C1_GUIDES,
  ...DE_C2_GUIDES,
];

export function germanGuide(slug: string): DeGrammarGuide | undefined {
  return DE_GRAMMAR_GUIDES.find((g) => g.slug === slug);
}
