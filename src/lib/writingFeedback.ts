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
  corrected: string; // the learner's text with its mistakes fixed
  corrections: WritingCorrection[];
  rubric: WritingRubricCheck[];
  score: number; // 1-5
  comment: string; // one or two encouraging sentences
};

export type WritingFeedbackRequest = {
  level: string; // CEFR level: "A1" ... "C2"
  prompt: string;
  rubric: string[];
  minWords: number;
  maxWords: number;
  text: string;
};

/** Longest text the route accepts, in characters. */
export const WRITING_MAX_CHARS = 3000;

/** Words in a learner's text, as the word-count hint counts them. */
export function countWords(text: string): number {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}

/** A1/A2 get their feedback in English; B1 and up in Spanish. */
export function feedbackLanguage(level: string): "English" | "Spanish" {
  return /^A[12]/.test(level) ? "English" : "Spanish";
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
  if (!/^(A1|A2|B1|B2|C1|C2)/.test(level)) return "Unknown level.";
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
  return [
    `You are a supportive, precise Spanish teacher giving feedback on a short piece of writing by a learner at CEFR level ${level}.`,
    "Judge the text against what a learner at that level can be expected to do; don't demand grammar from later levels.",
    "Return:",
    "- corrected: the learner's text with its mistakes fixed, changing as little as possible so it stays their own text.",
    "- corrections: the 3 to 6 most useful corrections (fewer if the text has fewer mistakes, none if it is correct). " +
      `Each quotes the learner's words exactly as written (original), gives the fixed version (correction), and a one-line reason in ${lang}.`,
    `- rubric: one entry per rubric item, in the order given, with the item text copied exactly, whether the text meets it, and a short comment in ${lang}.`,
    "- score: an integer 1-5 for how well the text does the task at this level (5 = does everything asked with only minor slips).",
    `- comment: one or two encouraging sentences in ${lang} saying what went well and the one thing to work on next.`,
    "If the text is not in Spanish or ignores the task, say so kindly in the comment and score it 1.",
  ].join("\n");
}

export function writingUserMessage(req: WritingFeedbackRequest): string {
  const rubric = req.rubric.length ? req.rubric.map((r) => `- ${r}`).join("\n") : "- (none)";
  return [
    `Task: ${req.prompt}`,
    `Length asked for: ${req.minWords}-${req.maxWords} words.`,
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
  const corrected = s(d.corrected);
  if (!corrected) return null;
  const score = typeof d.score === "number" && Number.isFinite(d.score) ? Math.min(5, Math.max(1, Math.round(d.score))) : NaN;
  if (Number.isNaN(score)) return null;
  const corrections: WritingCorrection[] = Array.isArray(d.corrections)
    ? d.corrections
        .map((c) => {
          const o = (c ?? {}) as Record<string, unknown>;
          return { original: s(o.original), correction: s(o.correction), reason: s(o.reason) };
        })
        .filter((c) => c.original && c.correction && c.original !== c.correction)
        .slice(0, 6)
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
  return { corrected, corrections, rubric, score, comment: s(d.comment) };
}
