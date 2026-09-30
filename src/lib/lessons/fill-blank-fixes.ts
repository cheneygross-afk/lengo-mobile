// Synced from cheneygross-afk/lengo:src/lib/lessons/fill-blank-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import { fillBlankKey } from "./fill-blank-english";
import { FILL_BLANK_FIXES_LOWER } from "./fill-blank-fixes-lower";
import { FILL_BLANK_FIXES_UPPER } from "./fill-blank-fixes-upper";

// Corrections to fill-blank exercises that are easier to keep beside the
// content than inside it: extra accepted answers, and a reworded English
// sentence where the generated one (fill-blank-english.ts) doesn't point
// to a single answer. Keyed by fillBlankKey(original sentence, answer) --
// the sentence as authored, cue included -- and applied to every woven
// lesson by translate-blanks.ts.
export type BlankFix = {
  // Answers accepted besides `answer`.
  alts?: string[];
  // Replacement English (same [bracket] convention as fill-blank-english.ts).
  en?: string;
};

export const FILL_BLANK_FIXES: Record<string, BlankFix> = {
  ...FILL_BLANK_FIXES_LOWER,
  ...FILL_BLANK_FIXES_UPPER,
};

export { fillBlankKey };
