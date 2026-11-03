// Synced from cheneygross-afk/lengo:src/lib/lessons/questionCap.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { familyOf, keepsAuthoredOrder, stageOf } from "./lessonFlow";

// No lesson asks more than MAX_LESSON_QUESTIONS questions (owner rule,
// 2026-11-03: "no lesson should be more than 30 questions, no matter
// what"). A longer lesson is not cut: it is split into parts, "Title,
// Part 1 of 2" and "Title, Part 2 of 2", each its own lesson in the path
// right after the other, so every question is kept.
//
// - Sections (each with its checkpoint) stay in order: a part takes the
//   next sections while they fit, so later ideas are taught in a later
//   part, still teach-then-test.
// - Practice is dealt out across the parts by task family and stage, so
//   every part keeps a mix (choose, transform, spot the error, produce;
//   warm-up to on your own). Each part keeps the authored order of its
//   items, so reviews and tests still run in their set order.
// - A part with no section of its own opens with a short recap of the
//   rule (tested by the part's first question). In a review or test, it
//   repeats the sections' text (a passage, instructions) without their
//   checkpoints.
// - Part 1 keeps the slug; part N is "<slug>-part-N" with `continues` set
//   to the original slug. Durations are shared out by question count.
//
// Applied where each course exports its lessons. The QA script
// scripts/qa/flow-check.ts --max-questions reports any lesson over the
// limit.

export const MAX_LESSON_QUESTIONS = 30;
const MIN_PRACTICE = 6;

export const checkpointCount = (s: LessonSection) => s.checkpoint?.length ?? 0;
export const questionCount = (l: Lesson) => l.sections.reduce((n, s) => n + checkpointCount(s), 0) + l.exercises.length;

const PART_SUFFIX = /,?\s*(?:Part|Parte) (\d+) (?:of|de) (\d+)$/;
const SPANISH_TITLE = /\b(de|del|la|el|los|las|y|con|en|para|por|que|práctica|repaso|subjuntivo|pretérito|imperativo|pronombres|verbos|prueba)\b/i;

function partTitle(title: string, i: number, k: number): string {
  if (PART_SUFFIX.test(title)) return `${title} · ${i}/${k}`;
  return `${title}, Part ${i} of ${k}`;
}

function minutes(duration: string): number | null {
  const m = /^(\d+)\s*min/.exec(duration.trim());
  return m ? Number(m[1]) : null;
}

/** Sections in order, packed into parts of at most `cap` checkpoint questions. */
function packSections(sections: LessonSection[], k: number, target: number): LessonSection[][] | null {
  const parts: LessonSection[][] = [[]];
  let n = 0;
  for (const s of sections) {
    const c = checkpointCount(s);
    if (c > MAX_LESSON_QUESTIONS) return null;
    if (parts[parts.length - 1].length && n + c > target) {
      parts.push([]);
      n = 0;
    }
    parts[parts.length - 1].push(s);
    n += c;
  }
  if (parts.length > k) return null;
  while (parts.length < k) parts.push([]);
  return parts;
}

/** How many practice items each part gets: parts as even as possible. */
function quotas(checkpoints: number[], exercises: number, total: number): number[] | null {
  const k = checkpoints.length;
  const room = checkpoints.map((c) => MAX_LESSON_QUESTIONS - c);
  if (room.some((r) => r < 0) || room.reduce((a, b) => a + b, 0) < exercises) return null;
  const target = Math.ceil(total / k);
  // At least a few practice items after the checkpoints in every part.
  const q = checkpoints.map((c, i) => Math.min(room[i], Math.max(MIN_PRACTICE, target - c)));
  let left = exercises - q.reduce((a, b) => a + b, 0);
  // Too many handed out: take back from the end; too few: top up from the start.
  for (let i = k - 1; left < 0 && i >= 0; i--) {
    const take = Math.min(Math.max(0, q[i] - MIN_PRACTICE), -left);
    q[i] -= take;
    left += take;
  }
  for (let i = k - 1; left < 0 && i >= 0; i--) {
    const take = Math.min(q[i], -left);
    q[i] -= take;
    left += take;
  }
  for (let i = 0; left > 0 && i < k; i++) {
    const add = Math.min(room[i] - q[i], left);
    q[i] += add;
    left -= add;
  }
  return left === 0 ? q : null;
}

const isTranslation = (e: Exercise) => e.type === "translate" && familyOf(e) !== "spot-error";

const tokens = (t: string) => new Set(t.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean));
const close = (a: Set<string>, b: Set<string>) => {
  if (a.size < 3 || b.size < 3) return false;
  let inter = 0;
  for (const w of a) if (b.has(w)) inter++;
  return inter / (a.size + b.size - inter) >= 0.6;
};
// The sentences an item asks for or shows (its answer, source or gapped
// sentence), as word sets, worked out once per item.
const itemWords = new WeakMap<Exercise, Set<string>[]>();
function wordsOf(e: Exercise): Set<string>[] {
  let w = itemWords.get(e);
  if (!w) {
    const r = e as Record<string, unknown>;
    w = ["answer", "source", "sentence"].flatMap((k) => (typeof r[k] === "string" ? [tokens(r[k] as string)] : []));
    itemWords.set(e, w);
  }
  return w;
}
const echoes = (a: Exercise, b: Exercise) => wordsOf(a).some((x) => wordsOf(b).some((y) => close(x, y)));
/** Whether an example sentence is close to one of the items. */
const echoed = (example: Set<string>, items: Exercise[]) => items.some((e) => wordsOf(e).some((w) => close(example, w)));

/** Deals practice items to parts to fill their quotas. Translation items
 * are shared out in proportion to part size (counting checkpoints), so no
 * part is mostly translation. Within that, rarer task families go first,
 * each to a part that doesn't have the family yet, and items close to an
 * example go to a part that doesn't show that example. Within a part,
 * items keep their authored order. */
function deal(exercises: Exercise[], q: number[], checkpoints: Exercise[][], examples: string[][]): Exercise[][] {
  const k = q.length;
  const all = exercises.length + checkpoints.reduce((n, c) => n + c.length, 0);
  const trAll = exercises.filter(isTranslation).length + checkpoints.reduce((n, c) => n + c.filter(isTranslation).length, 0);
  const trEx = exercises.filter(isTranslation).length;
  // Translation quota per part: in proportion to its size, and never
  // more than half the part when that can be helped.
  const cap = q.map((n, p) => Math.max(0, Math.min(n, Math.floor((n + checkpoints[p].length) / 2) - checkpoints[p].filter(isTranslation).length)));
  const tq = q.map((n, p) => Math.min(cap[p], Math.max(0, Math.round((trAll * (n + checkpoints[p].length)) / all) - checkpoints[p].filter(isTranslation).length)));
  let diff = trEx - tq.reduce((a, b) => a + b, 0);
  const room = (lim: number[]) => q.reduce((best, _n, i) => (lim[i] - tq[i] > lim[best] - tq[best] ? i : best), 0);
  while (diff > 0) {
    let p = room(cap);
    if (cap[p] - tq[p] <= 0) p = room(q);
    tq[p]++;
    diff--;
  }
  while (diff < 0) {
    const p = tq.reduce((best, n, i) => (n > tq[best] ? i : best), 0);
    tq[p]--;
    diff++;
  }
  const exampleWords = examples.map((ex) => ex.map(tokens));
  const famCount = new Map<string, number>();
  for (const e of exercises) famCount.set(familyOf(e), (famCount.get(familyOf(e)) ?? 0) + 1);
  const STAGES = { crawl: 0, walk: 1, run: 2 } as const;
  const got = q.map(() => [] as { e: Exercise; index: number }[]);
  const fams = checkpoints.map((c) => new Set(c.map(familyOf)));
  const place = (items: { e: Exercise; index: number; fam: string }[], quota: number[]) => {
    const used = quota.map(() => 0);
    for (const item of items) {
      const echo = exampleWords.map((ex) => ex.some((x) => echoed(x, [item.e])));
      let best = -1;
      let bestScore = -Infinity;
      for (let p = 0; p < k; p++) {
        if (used[p] >= quota[p]) continue;
        let score = (quota[p] - used[p]) / quota[p];
        if (!fams[p].has(item.fam)) score += 10;
        if (echo[p]) score -= 5;
        if ([...checkpoints[p], ...got[p].map((g) => g.e)].some((o) => echoes(item.e, o))) score -= 5;
        if (score > bestScore) {
          bestScore = score;
          best = p;
        }
      }
      used[best]++;
      got[best].push(item);
      fams[best].add(item.fam);
    }
  };
  const sorted = exercises
    .map((e, index) => ({ e, index, fam: familyOf(e) }))
    .sort((a, b) => famCount.get(a.fam)! - famCount.get(b.fam)! || a.fam.localeCompare(b.fam) || STAGES[stageOf(a.e)] - STAGES[stageOf(b.e)] || a.index - b.index);
  place(sorted.filter((x) => !isTranslation(x.e)), q.map((n, p) => n - tq[p]));
  place(sorted.filter((x) => isTranslation(x.e)), tq);
  return got.map((g) => g.sort((a, b) => a.index - b.index).map((x) => x.e));
}

/** A short tested recap for a part that teaches no section of its own. */
function recap(lesson: Lesson, first: Exercise | undefined, items: Exercise[]): LessonSection {
  const spanish = lesson.level.length === 2 && !["A1", "A2"].includes(lesson.level) && SPANISH_TITLE.test(lesson.title);
  const headings = lesson.sections.map((s) => s.heading.trim()).filter(Boolean);
  const list = headings.slice(0, 4).join("; ").replace(/[.:;,]$/, "");
  const end = /[.!?]$/.test(list) ? "" : ".";
  const body = spanish
    ? [`Esta parte sigue con la lección anterior${list ? `, que trató: ${list}${end}` : "."} Un repaso rápido y, después, más práctica con frases nuevas.`]
    : [`This part carries on from the lesson before${list ? `, which covered: ${list}${end}` : "."} A quick look back, then more practice with new sentences.`];
  const examples = lesson.sections
    .flatMap((s) => (s.examples ?? []).filter((x) => !echoed(tokens(x.es), items)).slice(0, 1))
    .slice(0, 3);
  return {
    heading: spanish ? "Repaso rápido" : "Quick recap",
    body,
    ...(examples.length ? { examples } : {}),
    ...(first ? { checkpoint: [first] } : {}),
  };
}

// Each part's whole lesson, for checks that judge the lesson as authored
// (a level test's size, a unit's closing review).
const WHOLE = new WeakMap<Lesson, Lesson>();

/** The lesson as authored, before it was split into parts. */
export const wholeLesson = (l: Lesson): Lesson => WHOLE.get(l) ?? l;

/** The lessons as authored: later parts dropped, part 1 replaced by its whole lesson. */
export const wholeLessons = (lessons: Lesson[]): Lesson[] => lessons.filter((l) => !l.continues).map(wholeLesson);

/** One lesson as parts of at most MAX_LESSON_QUESTIONS questions each. */
export function splitLesson(lesson: Lesson): Lesson[] {
  const parts = splitParts(lesson);
  if (parts.length > 1) for (const p of parts) WHOLE.set(p, lesson);
  return parts;
}

function splitParts(lesson: Lesson): Lesson[] {
  const total = questionCount(lesson);
  if (total <= MAX_LESSON_QUESTIONS) return [lesson];
  const ordered = keepsAuthoredOrder(lesson);
  for (let k = Math.ceil(total / MAX_LESSON_QUESTIONS); k <= total; k++) {
    const target = Math.ceil(total / k);
    const sections = packSections(lesson.sections, k, Math.min(target, MAX_LESSON_QUESTIONS));
    if (!sections) continue;
    const q = quotas(sections.map((ss) => ss.reduce((n, s) => n + checkpointCount(s), 0)), lesson.exercises.length, total);
    if (!q) continue;
    const practice = deal(
      lesson.exercises,
      q,
      sections.map((ss) => ss.flatMap((s) => s.checkpoint ?? [])),
      sections.map((ss) => ss.flatMap((s) => (s.examples ?? []).map((x) => x.es))),
    );
    const mins = minutes(lesson.duration);
    let minsLeft = mins ?? 0;
    return sections.map((ss, i) => {
      let exercises = practice[i];
      let own = ss;
      if (!own.length) {
        if (ordered) own = lesson.sections.map(({ checkpoint: _c, ...s }) => s);
        else {
          own = [recap(lesson, exercises[0], exercises)];
          exercises = exercises.slice(1);
        }
      }
      const part: Lesson = {
        ...lesson,
        slug: i === 0 ? lesson.slug : `${lesson.slug}-part-${i + 1}`,
        title: partTitle(lesson.title, i + 1, sections.length),
        sections: own,
        exercises,
      };
      if (i > 0) {
        part.continues = lesson.slug;
        if (lesson.teaches?.length) {
          part.reviews = [...new Set([...(lesson.teaches ?? []), ...(lesson.reviews ?? [])])];
          delete part.teaches;
        }
      }
      if (mins !== null) {
        const share = i === sections.length - 1 ? minsLeft : Math.max(1, Math.round((mins * questionCount(part)) / total));
        minsLeft -= share;
        part.duration = `${Math.max(Math.min(4, mins), share)} min`;
      }
      return part;
    });
  }
  return [lesson];
}

/** The lessons with every lesson over the limit split into parts. Lesson
 * numbers that ran 1..n are renumbered so they still do. */
export function splitLongLessons(lessons: Lesson[]): Lesson[] {
  if (!lessons.some((l) => questionCount(l) > MAX_LESSON_QUESTIONS)) return lessons;
  const counted = lessons.every((l, i) => l.number === i + 1);
  const out = lessons.flatMap(splitLesson);
  if (!counted) return out;
  return out.map((l, i) => {
    if (l.number === i + 1) return l;
    const n = { ...l, number: i + 1 };
    const whole = WHOLE.get(l);
    if (whole) WHOLE.set(n, whole);
    return n;
  });
}

/** Unit outlines with each split lesson's later parts listed right after it. */
export function withSplitSlugs<U extends { requiredSlugs: string[]; optionalSlugs: string[] }>(units: U[], lessons: Lesson[]): U[] {
  const later = new Map<string, string[]>();
  for (const l of lessons) if (l.continues) later.set(l.continues, [...(later.get(l.continues) ?? []), l.slug]);
  if (!later.size) return units;
  const expand = (slugs: string[]) => slugs.flatMap((s) => [s, ...(later.get(s) ?? [])]);
  return units.map((u) => ({ ...u, requiredSlugs: expand(u.requiredSlugs), optionalSlugs: expand(u.optionalSlugs) }));
}
