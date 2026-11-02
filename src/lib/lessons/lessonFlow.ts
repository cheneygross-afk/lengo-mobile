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

import type { Exercise, Lesson, LessonExample } from "./types";

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
    }
  | { kind: "exercise"; stage: Stage | "try"; exercise: Exercise; ref: ExerciseRef };

/** A paragraph of a section's body, or a run of sentences cut from one.
 * from = its index in section.body; whole = it is the entire paragraph. */
export type BodyPiece = { text: string; from: number; whole: boolean };

// About one phone screen of reading per card.
const CARD_WORDS = 80;
// Never leave a card shorter than this (it would read as a fragment).
const MIN_CARD_WORDS = 35;
const words = (s: string) => {
  const cjk = s.match(/[぀-ヿ㐀-鿿가-힯]/g)?.length ?? 0;
  return s.split(/\s+/).filter(Boolean).length + Math.round(cjk / 2);
};

// A long paragraph splits at sentence ends; short ones pack together.
export function chunkBody(body: string[], max = CARD_WORDS): BodyPiece[][] {
  const pieces: BodyPiece[] = [];
  body.forEach((p, from) => {
    if (words(p) <= max * 1.3) {
      pieces.push({ text: p, from, whole: true });
      return;
    }
    let cur = "";
    for (const s of p.split(/(?<=[.!?。！？])\s*(?=\S)/)) {
      if (cur && words(cur + " " + s) > max) {
        pieces.push({ text: cur, from, whole: false });
        cur = s;
      } else cur = cur ? `${cur}${/[。！？]$/.test(cur) ? "" : " "}${s}` : s;
    }
    if (cur) pieces.push({ text: cur, from, whole: false });
  });
  const cards: BodyPiece[][] = [];
  let card: BodyPiece[] = [];
  let n = 0;
  for (const p of pieces) {
    const w = words(p.text);
    if (card.length && n >= MIN_CARD_WORDS && n + w > max) {
      cards.push(card);
      card = [];
      n = 0;
    }
    card.push(p);
    n += w;
  }
  // A short last card joins the one before.
  if (card.length && cards.length && n < MIN_CARD_WORDS) cards[cards.length - 1].push(...card);
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
      out.push({ kind: "learn", section: si, part, parts: cards.length, heading: s.heading, body, examples });
    });
    const own = s.checkpoint ?? [];
    own.forEach((exercise, index) => out.push({ kind: "exercise", stage: "try", exercise, ref: { section: si, index } }));
    // A section with no check of its own borrows an easy practice item, so
    // nothing is taught without being tried straight away.
    if (!own.length && !ordered) {
      const pick =
        practice.find((p) => !borrowed.has(p.index) && p.stage === "crawl") ??
        practice.find((p) => !borrowed.has(p.index) && p.stage === "walk");
      if (pick) {
        borrowed.add(pick.index);
        out.push({ kind: "exercise", stage: "try", exercise: pick.exercise, ref: { section: null, index: pick.index } });
      }
    }
  });
  const rest = practice.filter((p) => !borrowed.has(p.index));
  const rank: Record<Stage, number> = { crawl: 0, walk: 1, run: 2 };
  if (!ordered) rest.sort((a, b) => rank[a.stage] - rank[b.stage] || a.index - b.index);
  for (const p of rest) out.push({ kind: "exercise", stage: p.stage, exercise: p.exercise, ref: { section: null, index: p.index } });
  return out;
}
