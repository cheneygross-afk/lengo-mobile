// Mobile mirror of the web app's src/lib/pronunciationVoice.ts -- same
// values and default, so the voice picked here (written to
// profiles.pronunciation_voice, the same Supabase table/column the
// website reads) is the one the website uses too.
export const PRONUNCIATION_VOICES = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
] as const;

export type PronunciationVoice = (typeof PRONUNCIATION_VOICES)[number]["value"];

export const DEFAULT_PRONUNCIATION_VOICE: PronunciationVoice = "female";

// Whether tap-to-hear pronunciation is on at all -- a separate on/off
// switch from which voice plays, for a learner who wants it silent.
export const DEFAULT_PRONUNCIATION_ENABLED = true;
