// Mobile mirror of the web app's src/lib/pronunciationVoice.ts -- same
// values and default, so the voice picked here (written to
// profiles.pronunciation_voice, the same Supabase table/column the
// website reads) is the one the website uses too.
// Each choice is one Google HD speaker, the same one for every language
// and screen, so the voice never changes mid-lesson.
export const PRONUNCIATION_VOICES = [
  { value: "female", label: "Female · clear", speaker: "Kore" },
  { value: "female2", label: "Female · warm", speaker: "Aoede" },
  { value: "male", label: "Male · calm", speaker: "Charon" },
  { value: "male2", label: "Male · deep", speaker: "Orus" },
] as const;

export type PronunciationVoice = (typeof PRONUNCIATION_VOICES)[number]["value"];

export const DEFAULT_PRONUNCIATION_VOICE: PronunciationVoice = "female";

export function isPronunciationVoice(value: unknown): value is PronunciationVoice {
  return PRONUNCIATION_VOICES.some((v) => v.value === value);
}

// What the "Play" button next to each choice in Settings says.
export const VOICE_PREVIEW_TEXT = "Hello, this is the voice you will hear in all your lessons.";

// Whether tap-to-hear pronunciation is on at all -- a separate on/off
// switch from which voice plays, for a learner who wants it silent.
export const DEFAULT_PRONUNCIATION_ENABLED = true;
