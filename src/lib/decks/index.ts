// Synced from cheneygross-afk/lengo:src/lib/decks/index.ts by scripts/sync-content.mjs -- edit it there, not here.
// Premade vocabulary decks: the 5,000 most frequent words of spoken
// Spanish, split by level, that a learner can add to their flashcards in
// one go (the Flashcards page on the website, the Flashcards screen in the
// app). Pure data and helpers, synced to the app as-is.
//
// The card data is large, so it's loaded on demand with loadDeck() rather
// than imported here.
import type { DeckCard, DeckInfo } from "./types";

export type { DeckCard, DeckInfo, DeckLevel } from "./types";

export const FREQUENCY_DECKS: DeckInfo[] = [
  {
    id: "frequency-a1",
    level: "A1",
    title: "Top 500 words",
    description: "The 500 most frequent words of spoken Spanish: the words in almost every sentence.",
    from: 1,
    to: 500,
  },
  {
    id: "frequency-a2",
    level: "A2",
    title: "Words 501–1,000",
    description: "Everyday verbs, nouns and adjectives that take you to the 1,000 most frequent words.",
    from: 501,
    to: 1000,
  },
  {
    id: "frequency-b1",
    level: "B1",
    title: "Words 1,001–2,000",
    description: "With the first 2,000 words you know roughly nine words in ten of ordinary conversation.",
    from: 1001,
    to: 2000,
  },
  {
    id: "frequency-b2",
    level: "B2",
    title: "Words 2,001–3,500",
    description: "The vocabulary of films, series and the news beyond the everyday core.",
    from: 2001,
    to: 3500,
  },
  {
    id: "frequency-c1",
    level: "C1",
    title: "Words 3,501–5,000",
    description: "Less frequent but still common words that make natural speech easy to follow.",
    from: 3501,
    to: 5000,
  },
];

export function deckInfo(id: string): DeckInfo | undefined {
  return FREQUENCY_DECKS.find((d) => d.id === id);
}

/** The cards of a deck, in frequency order. */
export async function loadDeck(id: string): Promise<DeckCard[]> {
  switch (id) {
    case "frequency-a1":
      return (await import("./frequency-a1")).FREQUENCY_A1;
    case "frequency-a2":
      return (await import("./frequency-a2")).FREQUENCY_A2;
    case "frequency-b1":
      return (await import("./frequency-b1")).FREQUENCY_B1;
    case "frequency-b2":
      return (await import("./frequency-b2")).FREQUENCY_B2;
    case "frequency-c1":
      return (await import("./frequency-c1")).FREQUENCY_C1;
    default:
      return [];
  }
}

// ---- turning deck cards into flashcards --------------------------------
//
// A deck card becomes an ordinary flashcard (the shape both apps store and
// sync through the `flashcards` table), so it's reviewed with the same
// spaced repetition and counts against the same new-cards-per-day limit as
// every other card. Its lessonSlug is "deck-<deck id>", which is how the
// example sentence is found again for display (deckExample below) without
// adding a column to the table.

const DECK_SLUG_PREFIX = "deck-";

export function deckLessonSlug(deckId: string): string {
  return `${DECK_SLUG_PREFIX}${deckId}`;
}

/** The deck id a flashcard came from, or null if it isn't a deck card. */
export function deckIdOfCard(card: { lessonSlug: string }): string | null {
  return card.lessonSlug.startsWith(DECK_SLUG_PREFIX) ? card.lessonSlug.slice(DECK_SLUG_PREFIX.length) : null;
}

/** Flashcard fields for a deck card -- the same shape as FlashcardEntry in
 * either app, without importing it (this file is shared by both). */
export type DeckFlashcard = {
  id: string;
  es: string;
  en: string;
  pos: string;
  level: string;
  levelPath: string;
  lessonSlug: string;
  lessonTitle: string;
  addedAt: number;
  source: "auto";
};

const normalize = (s: string) => s.trim().toLowerCase();

/**
 * The flashcards adding a deck would create: every card whose Spanish the
 * learner doesn't already have (from a lesson, a story, their own cards
 * or another deck). `addedAt` counts up from `now` in frequency order, so
 * the daily new-card limit (which introduces the oldest new cards first)
 * brings them in most frequent first.
 */
export function deckFlashcards(
  deck: DeckInfo,
  cards: DeckCard[],
  existing: { es: string }[],
  now: number = Date.now()
): DeckFlashcard[] {
  const have = new Set(existing.map((c) => normalize(c.es)));
  const slug = deckLessonSlug(deck.id);
  const out: DeckFlashcard[] = [];
  for (const card of cards) {
    const key = normalize(card.es);
    if (have.has(key)) continue;
    have.add(key);
    out.push({
      id: `${slug}::${key}`,
      es: card.es,
      en: card.en,
      pos: card.pos,
      level: deck.level,
      levelPath: deck.level.toLowerCase(),
      lessonSlug: slug,
      lessonTitle: `${deck.title} · #${card.rank}`,
      addedAt: now + out.length,
      source: "auto",
    });
  }
  return out;
}

/** How many of a deck's cards are already among the learner's flashcards. */
export function deckProgress(deck: DeckInfo, existing: { lessonSlug: string }[]): number {
  const slug = deckLessonSlug(deck.id);
  return existing.filter((c) => c.lessonSlug === slug).length;
}

/** The example sentence for a flashcard added from a deck, if it has one. */
export async function deckExample(card: { lessonSlug: string; es: string }): Promise<{ es: string; en: string } | null> {
  const id = deckIdOfCard(card);
  if (!id) return null;
  const hit = (await loadDeck(id)).find((c) => c.es === card.es);
  return hit?.exEs && hit.exEn ? { es: hit.exEs, en: hit.exEn } : null;
}
