// Synced from cheneygross-afk/lengo:src/lib/lessons/lessonFlow.ts by scripts/sync-content.mjs -- edit it there, not here.
// The order a lesson is taught in, shared by the website and the app
// (this file syncs to lengo-mobile, so it imports only lesson types).
//
// Crawl, walk, run: a lesson never opens with a wall of text followed by a
// pile of unrelated questions. Each section is cut into short teaching
// cards, and every section is followed straight away by a question on it
// (its own checkpoint, or an easy practice item borrowed for it). The rest
// of the practice then climbs from recognising (choose, match, listen),
// through guided work (fill the gap, order the words, change or correct a
// sentence), to producing language freely (translate, say, write).

import type { BuildStep, Exercise, Lesson, LessonExample, LessonTable } from "./types";

// Task families (also used by scripts/qa/concept-check.ts).
export type Family = "choose" | "transform" | "spot-error" | "produce" | "recognise" | "listen";
const TRANSFORM = /\b(change|make it|make them|rewrite|turn|transform|switch|swap|cambia|transforma|reescribe|pasa (?:la frase|a)|convierte|ponlo|ponla|sustituye|replace)\b|^(改写|改成|换成)/i;
const ERROR = /\b(correct the|corrige|mistake|error|wrong|incorrect|incorrecta|fix)\b|改正|改错|病句/i;

export function familyOf(e: Exercise): Family {
  const text = "prompt" in e ? e.prompt ?? "" : "question" in e ? e.question : "instructions" in e ? e.instructions : "";
  const src = e.type === "translate" ? e.source : "";
  if (ERROR.test(text) || ERROR.test(src.slice(0, 12))) return "spot-error";
  if (TRANSFORM.test(text)) return "transform";
  switch (e.type) {
    case "multiple-choice":
    case "multi-select":
      return "choose";
    case "matching":
      return "recognise";
    case "listen-choose":
    case "dictation":
      return "listen";
    case "translate":
      return e.direction === "en-es" ? "produce" : "recognise";
    default:
      return "produce";
  }
}

// crawl: recognise the pattern; walk: use it with support; run: produce it.
export type Stage = "crawl" | "walk" | "run";
export function stageOf(e: Exercise): Stage {
  if (e.type === "write" || e.type === "speak") return "run";
  const f = familyOf(e);
  if (f === "transform" || f === "spot-error") return "walk";
  if (e.type === "fill-blank" || e.type === "word-order" || e.type === "dictation") return "walk";
  if (f === "produce") return "run";
  return "crawl";
}

// Where an exercise lives in the lesson, so answers keep their usual keys.
export type ExerciseRef = { section: number; index: number } | { section: null; index: number };

export type FlowStep =
  | {
      kind: "learn";
      section: number;
      /** 0-based card number within the section, and how many it has. */
      part: number;
      parts: number;
      heading: string;
      body: BodyPiece[];
      examples: LessonExample[];
      /** The section's tables, on its last card only. */
      tables: LessonTable[];
      /** An exception card ("Watch out"), shown with a yellow edge. */
      watchOut: boolean;
      /** The section's build-it steps, on its last card only. */
      build: BuildStep[];
    }
  | {
      kind: "exercise";
      stage: Stage | "try";
      exercise: Exercise;
      ref: ExerciseRef;
      /** The teaching section the question is on, when known: its own
       * checkpoint, the section it was borrowed for, or meta.section. */
      section: number | null;
    }
  // "Let's look again" (CRRT Reintroduce): put in by planReteach() after a
  // learner misses two questions on one section.
  | { kind: "reteach"; section: number; heading: string; text: string | null; tables: LessonTable[]; examples: LessonExample[] };

/** A paragraph of a section's body, or a run of sentences cut from one.
 * from = its index in section.body; whole = it is the entire paragraph. */
export type BodyPiece = { text: string; from: number; whole: boolean };

// One card is one short portion: at most CARD_CHARS characters of text
// (a CJK character counts as two), so no card reads as a wall of text.
// The QA script scripts/qa/flow-check.ts --max-card reports any card over
// the limit.
export const CARD_CHARS = 300;
// A card shorter than this is merged with its neighbour when they fit
// together, so cards don't read as fragments.
const MIN_CARD_CHARS = 110;
export const words = (s: string) => {
  const cjk = s.match(/[぀-ヿ㐀-鿿가-힯]/g)?.length ?? 0;
  return s.split(/\s+/).filter(Boolean).length + Math.round(cjk / 2);
};
/** Reading length of a card's text: characters, CJK counted twice. */
export const cardLength = (s: string) => s.length + (s.match(/[぀-ヿ㐀-鿿가-힯]/g)?.length ?? 0);

const joinText = (a: string, b: string) => (a ? `${a}${/[。！？：；，]$/.test(a) ? "" : " "}${b}` : b);

// Cut text into runs no longer than max: at sentence ends first, then at
// clause breaks (; : , and their CJK forms), then between words.
function cut(text: string, max: number): string[] {
  if (cardLength(text) <= max) return [text];
  const levels = [/(?<=[.!?。！？])\s*(?=\S)/, /(?<=[;:；：])\s*(?=\S)/, /(?<=[,，、])\s*(?=\S)/, /\s+/];
  for (const re of levels) {
    const parts = text.split(re).filter(Boolean);
    if (parts.length < 2) continue;
    const out: string[] = [];
    let cur = "";
    for (const part of parts) {
      const next = joinText(cur, part);
      if (cur && cardLength(next) > max) {
        out.push(cur);
        cur = part;
      } else cur = next;
    }
    if (cur) out.push(cur);
    return out.flatMap((t) => cut(t, max));
  }
  // One unbreakable run (e.g. a long CJK sentence with no punctuation).
  const chars = Array.from(text);
  const out: string[] = [];
  for (let i = 0; i < chars.length; ) {
    let j = i;
    let len = 0;
    while (j < chars.length && len + cardLength(chars[j]) <= max) len += cardLength(chars[j++]);
    out.push(chars.slice(i, Math.max(j, i + 1)).join(""));
    i = Math.max(j, i + 1);
  }
  return out;
}

// A long paragraph splits into runs; short paragraphs pack together.
export function chunkBody(body: string[], max = CARD_CHARS): BodyPiece[][] {
  const pieces: BodyPiece[] = [];
  body.forEach((p, from) => {
    const runs = cut(p, max);
    if (runs.length === 1) pieces.push({ text: p, from, whole: true });
    else for (const text of runs) pieces.push({ text, from, whole: false });
  });
  const cards: BodyPiece[][] = [];
  let card: BodyPiece[] = [];
  let n = 0;
  for (const p of pieces) {
    // +1 for the space between pieces on the card.
    const w = cardLength(p.text) + (card.length ? 1 : 0);
    if (card.length && n + w > max) {
      cards.push(card);
      card = [];
      n = 0;
    }
    card.push(p);
    n += card.length > 1 ? w : cardLength(p.text);
  }
  // A short last card joins the one before when the two still fit.
  const prev = cards[cards.length - 1];
  if (card.length && prev && n < MIN_CARD_CHARS && n + 1 + prev.reduce((a, q) => a + cardLength(q.text) + 1, -1) <= max) prev.push(...card);
  else if (card.length || !cards.length) cards.push(card);
  return cards;
}

/** Lessons kept in their authored order: reviews, tests and readings with
 * questions on a passage, where the order is the point. */
export function keepsAuthoredOrder(l: Lesson): boolean {
  return !!l.unitReview || /(^|-)(test|exam|final|placement)(-|$)/.test(l.slug);
}

export function lessonFlow(l: Lesson): FlowStep[] {
  const out: FlowStep[] = [];
  const practice = l.exercises.map((exercise, index) => ({ exercise, index, stage: stageOf(exercise) }));
  const ordered = keepsAuthoredOrder(l);
  const borrowed = new Set<number>();
  l.sections.forEach((s, si) => {
    const cards = chunkBody(s.body);
    // Examples show with the card they follow; a long list spreads out.
    const ex = s.examples ?? [];
    const per = Math.ceil(ex.length / cards.length);
    cards.forEach((body, part) => {
      const examples = cards.length > 1 && ex.length > 3 ? ex.slice(part * per, (part + 1) * per) : part === cards.length - 1 ? ex : [];
      const tables = part === cards.length - 1 ? s.tables ?? [] : [];
      const last = part === cards.length - 1;
      out.push({ kind: "learn", section: si, part, parts: cards.length, heading: s.heading, body, examples, tables, watchOut: !!s.watchOut, build: last ? s.build ?? [] : [] });
    });
    const own = s.checkpoint ?? [];
    own.forEach((exercise, index) => out.push({ kind: "exercise", stage: "try", exercise, ref: { section: si, index }, section: si }));
    // A section with no check of its own borrows an easy practice item, so
    // nothing is taught without being tried straight away.
    if (!own.length && !ordered) {
      const pick =
        practice.find((p) => !borrowed.has(p.index) && p.stage === "crawl") ??
        practice.find((p) => !borrowed.has(p.index) && p.stage === "walk");
      if (pick) {
        borrowed.add(pick.index);
        out.push({ kind: "exercise", stage: "try", exercise: pick.exercise, ref: { section: null, index: pick.index }, section: si });
      }
    }
  });
  const rest = practice.filter((p) => !borrowed.has(p.index));
  const rank: Record<Stage, number> = { crawl: 0, walk: 1, run: 2 };
  if (!ordered) rest.sort((a, b) => rank[a.stage] - rank[b.stage] || a.index - b.index);
  for (const p of rest) out.push({ kind: "exercise", stage: p.stage, exercise: p.exercise, ref: { section: null, index: p.index }, section: sectionOf(l, p.exercise) });
  return out;
}

const sectionOf = (l: Lesson, e: Exercise): number | null => {
  const s = e.meta?.section;
  return typeof s === "number" && s >= 0 && s < l.sections.length ? s : null;
};

// ---- CRRT: help that fades, and "Let's look again" ----

/** How much help a question gets: the table beside it (open book), behind
 * a "Peek at the table" button, or none. Help fades as practice climbs. */
export type Help = "open" | "peek" | "none";
export function helpOf(stage: Stage | "try"): Help {
  if (stage === "try" || stage === "crawl") return "open";
  if (stage === "walk") return "peek";
  return "none";
}

/** Every table the lesson teaches, for the table drawer next to questions. */
export function lessonTables(l: Lesson): LessonTable[] {
  return l.sections.flatMap((s) => s.tables ?? []);
}

/** How many misses on one section bring back "Let's look again". */
export const RETEACH_AFTER = 2;
/** How many upcoming questions on the section move up right after it. */
export const RETEACH_FOLLOW = 2;

/** The steps with a "Let's look again" card put in after step `at`, and the
 * next RETEACH_FOLLOW unreached questions on that section (easiest first,
 * as the flow already orders them) moved up right behind it. */
export function planReteach(steps: FlowStep[], at: number, l: Lesson, section: number): FlowStep[] {
  const s = l.sections[section];
  if (!s) return steps;
  const card: FlowStep = {
    kind: "reteach",
    section,
    heading: s.heading,
    text: s.reteach ?? null,
    tables: s.tables ?? [],
    examples: (s.examples ?? []).slice(0, 2),
  };
  const later = steps.slice(at + 1);
  const follow: FlowStep[] = [];
  const rest: FlowStep[] = [];
  for (const st of later) {
    if (follow.length < RETEACH_FOLLOW && st.kind === "exercise" && st.section === section) follow.push(st);
    else rest.push(st);
  }
  return [...steps.slice(0, at + 1), card, ...follow, ...rest];
}
