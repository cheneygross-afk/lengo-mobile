// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-guides.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { FrGrammarGuide } from "./fr-types";
import { FR_A1_GUIDES } from "./fr-guides-a1";
import { FR_A2_GUIDES } from "./fr-guides-a2";
import { FR_B1_GUIDES } from "./fr-guides-b1";
import { FR_B2_GUIDES } from "./fr-guides-b2";
import { FR_C1_GUIDES } from "./fr-guides-c1";
import { FR_C2_GUIDES } from "./fr-guides-c2";

// Every French grammar guide, beginner first.
export const FR_GRAMMAR_GUIDES: FrGrammarGuide[] = [
  ...FR_A1_GUIDES,
  ...FR_A2_GUIDES,
  ...FR_B1_GUIDES,
  ...FR_B2_GUIDES,
  ...FR_C1_GUIDES,
  ...FR_C2_GUIDES,
];

export function frenchGuide(slug: string): FrGrammarGuide | undefined {
  return FR_GRAMMAR_GUIDES.find((g) => g.slug === slug);
}
