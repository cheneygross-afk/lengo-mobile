// Synced from cheneygross-afk/lengo:src/lib/lessons/level-exits.ts by scripts/sync-content.mjs -- edit it there, not here.
// Kept apart from sequencing.ts (which imports every lesson file) so the
// small pieces of UI that only need to know which lesson ends a level
// (levels.ts, and through it the level pages) don't ship all of them.

/** Each level's exit test: the last lesson of the level, and of its
 * required path. */
export const LEVEL_EXIT_SLUGS = {
  A1: "a1r-exit-ticket",
  A2: "a2r-exit-ticket",
  B1: "b1r-exit-ticket",
  B2: "b2r-exit-ticket",
  C1: "c1r-challenge-exit-ticket",
  C2: "c2r-challenge-exit-ticket",
} as const;
