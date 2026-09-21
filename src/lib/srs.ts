// Lightweight spaced-repetition scheduling for flashcards. Deliberately a
// simple Leitner-style box system (not full SM-2) -- easy to reason about,
// easy to test, and good enough at this scale. Everything here operates on
// plain FlashcardEntry objects; persistence stays the caller's job (same
// pattern as the rest of @/lib/flashcards), so this module has no
// localStorage calls of its own.
import type { FlashcardEntry } from "@/lib/flashcards/store";

export type ReviewGrade = "again" | "hard" | "good" | "easy";

// Box 0 = "due immediately" (new, or just missed). Each grade moves a card
// forward, sideways, or back to box 0. Days chosen to front-load review
// frequency for new material and taper off for well-known cards.
const BOX_INTERVAL_DAYS = [0, 1, 3, 7, 14, 30, 60];

const DAY_MS = 24 * 60 * 60 * 1000;

/** A card with no dueAt yet (never reviewed) reads as due -- new cards are
 * always ready to study. */
export function isDue(card: FlashcardEntry, now: number = Date.now()): boolean {
  return card.dueAt == null || card.dueAt <= now;
}

/** Due cards, most-overdue (or never-reviewed) first. */
export function getDueCards(cards: FlashcardEntry[], now: number = Date.now()): FlashcardEntry[] {
  return cards
    .filter((c) => isDue(c, now))
    .sort((a, b) => (a.dueAt ?? 0) - (b.dueAt ?? 0));
}

/**
 * Applies a self-graded review outcome and returns the updated card.
 * "Again" resets to box 0 and is due right away (so it comes back around
 * later in the same study session, not just "tomorrow"); "hard" repeats
 * the current interval instead of resetting all the way back; "good"
 * advances one box; "easy" skips ahead two.
 */
export function gradeCard(card: FlashcardEntry, grade: ReviewGrade, now: number = Date.now()): FlashcardEntry {
  const currentBox = card.box ?? 0;
  let nextBox: number;
  if (grade === "again") nextBox = 0;
  else if (grade === "hard") nextBox = currentBox;
  else if (grade === "good") nextBox = Math.min(BOX_INTERVAL_DAYS.length - 1, currentBox + 1);
  else nextBox = Math.min(BOX_INTERVAL_DAYS.length - 1, currentBox + 2);

  const intervalDays = BOX_INTERVAL_DAYS[nextBox];
  return {
    ...card,
    box: nextBox,
    reviewCount: (card.reviewCount ?? 0) + 1,
    lastReviewedAt: now,
    dueAt: grade === "again" ? now : now + intervalDays * DAY_MS,
  };
}
