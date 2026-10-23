// The word lists spanishVoice.ts decides with, kept in a file of their
// own so the ~300 KB of text loads as a separate chunk (on the first
// Spanish-course text) instead of inside every lesson page's code.
export { SPANISH_WORDS } from "./spanishWords";
export { ENGLISH_ONLY, SHARED } from "./voiceWords";
