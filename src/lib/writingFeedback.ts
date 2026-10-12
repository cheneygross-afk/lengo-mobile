// Feedback on a learner's free writing ("write" exercises): the request
// the website's /api/writing-feedback route sends to Claude, and the
// checks that turn Claude's reply into something safe to render.
//
// The website (lengo) and the mobile app (lengo-mobile) keep identical
// copies of this file at the same path -- change both together.

export type WritingCorrection = {
  original: string;
  correction: string;
  reason: string;
};

export type WritingRubricCheck = {
  item: string;
  met: boolean;
  comment?: string;
};

export type WritingFeedback = {
  corrected: string; // the learner's text with its mistakes fixed; empty for a long text (LONG_TEXT_WORDS)
  corrections: WritingCorrection[];
  rubric: WritingRubricCheck[];
  score: number; // 1-5
  comment: string; // one or two encouraging sentences
};

export type WritingFeedbackRequest = {
  level: string; // CEFR level: "A1" ... "C2", or a course's level: "EN-B1", "JA-A2", "ZH-Pinyin" ...
  prompt: string;
  rubric: string[];
  minWords: number;
  maxWords: number;
  text: string;
};

/** Longest text the route accepts, in characters: room for the two-page
 * essays the Writing practice pages ask for at C2. */
export const WRITING_MAX_CHARS = 9000;

/** Above this many words the feedback skips the fully corrected copy of the
 * text (it would take too long to write out) and lists more corrections
 * instead. */
export const LONG_TEXT_WORDS = 350;

/** Words in a learner's text, as the word-count hint counts them. */
// Han characters, kana and Hangul: each one counts as a word, since
// Chinese and Japanese aren't written with spaces between words.
const CJK_CHAR = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g;

/** Words in a learner's text, as the word-count hint counts them. For
 * Chinese and Japanese, every character counts as one. */
export function countWords(text: string): number {
  const cjk = (text.match(CJK_CHAR) ?? []).length;
  const t = text.replace(CJK_CHAR, " ").replace(/[\p{P}\p{S}]/gu, " ").trim();
  return cjk + (t ? t.split(/\s+/).length : 0);
}

/** A1/A2 get their feedback in English; B1 and up in Spanish. The
 * English for Spanish speakers beta ("EN-A1" ...) is the mirror image:
 * Spanish at A1/A2, English from B1 up. The Japanese ("JA-...") and
 * Chinese ("ZH-..."), French ("FR-...") and German ("DE-...") courses are taught in English throughout, so their
 * feedback is always English. */
export function feedbackLanguage(level: string): "English" | "Spanish" {
  if (level.startsWith("JA-") || level.startsWith("ZH-") || level.startsWith("FR-") || level.startsWith("DE-")) return "English";
  if (level.startsWith("EN-")) return /^EN-A[12]/.test(level) ? "Spanish" : "English";
  return /^A[12]/.test(level) ? "English" : "Spanish";
}

/** The language the learner is writing in, from the level's course prefix. */
function writingLanguage(level: string): string {
  if (level.startsWith("EN-")) return "English";
  if (level.startsWith("JA-")) return "Japanese";
  if (level.startsWith("ZH-")) return "Mandarin Chinese";
  if (level.startsWith("FR-")) return "French";
  if (level.startsWith("DE-")) return "German";
  return "Spanish";
}

/** The CEFR level without the course prefix; the Japanese kana module and
 * the Chinese pinyin module come before A1, so they're judged as A1. */
function cefrLevel(level: string): string {
  const bare = level.replace(/^(EN|JA|ZH|FR|DE)-/, "");
  if (bare === "Culture") return "C1";
  return /^(A1|A2|B1|B2|C1|C2)/.test(bare) ? bare : "A1";
}

/** Checks a request body; returns the cleaned request or an error message. */
export function parseWritingRequest(body: unknown): WritingFeedbackRequest | string {
  if (!body || typeof body !== "object") return "Missing request body.";
  const b = body as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const text = str(b.text);
  const prompt = str(b.prompt);
  const level = str(b.level) || "A1";
  if (!text) return "Nothing to check.";
  if (text.length > WRITING_MAX_CHARS) return "That's too long.";
  if (!prompt || prompt.length > 1000) return "Missing task.";
  if (!/^((EN-|JA-|ZH-|FR-|DE-)?(A1|A2|B1|B2|C1|C2)|JA-Alphabets|ZH-Pinyin|FR-Culture|DE-Culture)/.test(level)) return "Unknown level.";
  const rubric = Array.isArray(b.rubric)
    ? b.rubric.filter((r): r is string => typeof r === "string").map((r) => r.trim()).filter(Boolean).slice(0, 10)
    : [];
  const num = (v: unknown, d: number) => (typeof v === "number" && Number.isFinite(v) && v > 0 ? Math.round(v) : d);
  return { level, prompt, rubric, minWords: num(b.minWords, 10), maxWords: num(b.maxWords, 200), text };
}

// JSON schema for structured output -- Claude's reply is constrained to it.
export const WRITING_FEEDBACK_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["corrected", "corrections", "rubric", "score", "comment"],
  properties: {
    corrected: { type: "string" },
    corrections: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["original", "correction", "reason"],
        properties: {
          original: { type: "string" },
          correction: { type: "string" },
          reason: { type: "string" },
        },
      },
    },
    rubric: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["item", "met", "comment"],
        properties: {
          item: { type: "string" },
          met: { type: "boolean" },
          comment: { type: "string" },
        },
      },
    },
    score: { type: "integer" },
    comment: { type: "string" },
  },
} as const;

export function writingSystemPrompt(level: string): string {
  const lang = feedbackLanguage(level);
  const target = writingLanguage(level);
  const cefr = cefrLevel(level);
  return [
    `You are a supportive, precise ${target} teacher giving feedback on a short piece of writing by a learner at CEFR level ${cefr}.`,
    "Judge the text against what a learner at that level can be expected to do; don't demand grammar from later levels.",
    "Return:",
    "- corrected: the learner's text with its mistakes fixed, changing as little as possible so it stays their own text. " +
      `If the text is longer than ${LONG_TEXT_WORDS} words, leave corrected as an empty string.`,
    "- corrections: the 3 to 6 most useful corrections (up to 12 for a text longer than " + LONG_TEXT_WORDS + " words; fewer if the text has fewer mistakes, none if it is correct). " +
      `Each quotes the learner's words exactly as written (original), gives the fixed version (correction), and a one-line reason in ${lang}.`,
    `- rubric: one entry per rubric item, in the order given, with the item text copied exactly, whether the text meets it, and a short comment in ${lang}.`,
    "- score: an integer 1-5 for how well the text does the task at this level (5 = does everything asked with only minor slips).",
    `- comment: one or two encouraging sentences in ${lang} saying what went well and the one thing to work on next.`,
    `If the text is not in ${target} or ignores the task, say so kindly in the comment and score it 1.`,
    ...(target === "Japanese"
      ? ["Kana, kanji or a mix are all fine; don't mark a word wrong only for being written in kana."]
      : target === "Mandarin Chinese"
        ? ["Simplified or traditional characters are both fine; pinyin alone counts as Chinese at the beginner levels."]
        : []),
  ].join("\n");
}

export function writingUserMessage(req: WritingFeedbackRequest): string {
  const rubric = req.rubric.length ? req.rubric.map((r) => `- ${r}`).join("\n") : "- (none)";
  return [
    `Task: ${req.prompt}`,
    `Length asked for: ${req.minWords}-${req.maxWords} words.`,
    ...(countWords(req.text) > LONG_TEXT_WORDS ? [`This text is longer than ${LONG_TEXT_WORDS} words: leave corrected empty.`] : []),
    `Rubric:\n${rubric}`,
    "Learner's text:",
    "<text>",
    req.text,
    "</text>",
  ].join("\n");
}

/**
 * Validates Claude's reply (a JSON string, or already-parsed JSON) as
 * WritingFeedback. Returns null if anything required is missing, so the
 * caller can fall back to the self-check view instead of rendering junk.
 */
export function parseWritingFeedback(raw: unknown): WritingFeedback | null {
  let data: unknown = raw;
  if (typeof raw === "string") {
    // Tolerate a fenced block in case the reply wasn't schema-constrained.
    const trimmed = raw
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "");
    try {
      data = JSON.parse(trimmed);
    } catch {
      return null;
    }
  }
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  const s = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  // Empty only for a long text (see LONG_TEXT_WORDS): the corrections stand in for it.
  const corrected = s(d.corrected);
  const score = typeof d.score === "number" && Number.isFinite(d.score) ? Math.min(5, Math.max(1, Math.round(d.score))) : NaN;
  if (Number.isNaN(score)) return null;
  const corrections: WritingCorrection[] = Array.isArray(d.corrections)
    ? d.corrections
        .map((c) => {
          const o = (c ?? {}) as Record<string, unknown>;
          return { original: s(o.original), correction: s(o.correction), reason: s(o.reason) };
        })
        .filter((c) => c.original && c.correction && c.original !== c.correction)
        .slice(0, 12)
    : [];
  const rubric: WritingRubricCheck[] = Array.isArray(d.rubric)
    ? d.rubric
        .map((r) => {
          const o = (r ?? {}) as Record<string, unknown>;
          const comment = s(o.comment);
          return { item: s(o.item), met: o.met === true, ...(comment ? { comment } : {}) };
        })
        .filter((r) => r.item)
    : [];
  if (!corrected && !corrections.length && !rubric.length) return null;
  return { corrected, corrections, rubric, score, comment: s(d.comment) };
}
