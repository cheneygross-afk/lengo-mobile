// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/patch.ts by scripts/sync-content.mjs -- edit it there, not here.
// Redesign patches for existing Spanish lessons (curriculum redesign, steps
// 4-6): what each lesson gains under the CRRT method without being rewritten
// from scratch -- a goal line, "Let's look again" text per section, watch-out
// flags, extra teaching paragraphs or tables, a check after a section, and
// "Why not" notes on multiple-choice options. Patches are applied only in the
// admin preview (/admin/spanish-redesign) until all six levels pass the
// checks; then the switch-over folds them into the lessons themselves.

import type { BuildStep, Exercise, Lesson, LessonExample, LessonSection, LessonTable } from "../types";

export type SectionPatch = {
  /** The card's heading, rewritten. */
  heading?: string;
  reteach?: string;
  watchOut?: boolean;
  build?: BuildStep[];
  /** The section's paragraphs, said shorter (replaces its body). */
  body?: string[];
  /** Paragraphs added after the section's own body. */
  addBody?: string[];
  addTables?: LessonTable[];
  /** Questions added to the section's checkpoint. */
  addCheck?: Exercise[];
  /** The section's checkpoint, rewritten (replaces it; addCheck still adds). */
  check?: Exercise[];
  /** The section's examples, rewritten. */
  examples?: LessonExample[];
  /** The section's own tables, rewritten (addTables still adds). */
  tables?: LessonTable[];
};

export type LessonPatch = {
  goal?: string;
  sections?: Record<number, SectionPatch>;
  /** Whole new sections, inserted before the section at `before` (or at the end). */
  insert?: { before?: number; section: LessonSection }[];
  /** "Why not" notes by exercise index, one per option ("" for the right one). */
  optionNotes?: Record<number, string[]>;
  /** Wording fixes inside questions and their explanations: [old, new] pairs. */
  reword?: [string, string][];
  /** The lesson's summary, rewritten. */
  summary?: string;
  /** For a lesson shown in parts (split.ts): each part's own summary and goal. */
  parts?: { summary?: string; goal?: string }[];
  /** Practice questions: rewritten by index, removed, routed to the section
   * that teaches them (so a split sends them to the right part), added at
   * the end, or put in a new order (indexes after replace and drop). */
  exercises?: {
    replace?: Record<number, Exercise>;
    drop?: number[];
    section?: Record<number, number>;
    add?: Exercise[];
    order?: number[];
  };
  /** Sections removed (the lesson's own indexes). */
  dropSections?: number[];
};

export function applyPatch(l: Lesson, p: LessonPatch | undefined): Lesson {
  if (!p) return l;
  let sections = l.sections.map((s, i) => {
    const sp = p.sections?.[i];
    if (!sp) return s;
    return {
      ...s,
      heading: sp.heading ?? s.heading,
      reteach: sp.reteach ?? s.reteach,
      watchOut: sp.watchOut ?? s.watchOut,
      build: sp.build ?? s.build,
      body: [...(sp.body ?? s.body), ...(sp.addBody ?? [])],
      tables: sp.tables || sp.addTables ? [...(sp.tables ?? s.tables ?? []), ...(sp.addTables ?? [])] : s.tables,
      examples: sp.examples ?? s.examples,
      checkpoint: sp.check || sp.addCheck ? [...(sp.check ?? s.checkpoint ?? []), ...(sp.addCheck ?? [])] : s.checkpoint,
    };
  });
  const dropped = new Set(sections.filter((_, i) => p.dropSections?.includes(i)));
  for (const ins of [...(p.insert ?? [])].sort((a, b) => (b.before ?? 1e9) - (a.before ?? 1e9))) {
    const at = ins.before ?? sections.length;
    sections = [...sections.slice(0, at), ins.section, ...sections.slice(at)];
  }
  let exercises = l.exercises.map((e, i) => {
    const r = p.exercises?.replace?.[i] ?? e;
    const withNotes = p.optionNotes?.[i] && r.type === "multiple-choice" ? { ...r, optionNotes: p.optionNotes[i] } : r;
    const sec = p.exercises?.section?.[i];
    return sec === undefined ? withNotes : { ...withNotes, meta: { ...withNotes.meta, section: sec } };
  });
  if (p.exercises?.drop?.length) exercises = exercises.filter((_, i) => !p.exercises!.drop!.includes(i));
  if (p.exercises?.add?.length) exercises = [...exercises, ...p.exercises.add];
  if (p.exercises?.order?.length) exercises = p.exercises.order.map((i) => exercises[i]).filter(Boolean);
  if (dropped.size) {
    // Questions tied to a section follow it to its new place (or lose the tie when it goes).
    const newIndex = new Map<number, number>();
    let k = 0;
    sections.forEach((sec, i) => { if (!dropped.has(sec)) newIndex.set(i, k++); });
    sections = sections.filter((sec) => !dropped.has(sec));
    exercises = exercises.map((e) => (typeof e.meta?.section === "number" ? { ...e, meta: { ...e.meta, section: newIndex.get(e.meta.section) } } : e));
  }
  if (p.reword?.length) {
    const fix = <T,>(v: T): T => JSON.parse(p.reword!.reduce((t, [a, b]) => t.split(JSON.stringify(a).slice(1, -1)).join(JSON.stringify(b).slice(1, -1)), JSON.stringify(v)));
    exercises = fix(exercises);
    sections = sections.map((s) => (s.checkpoint ? { ...s, checkpoint: fix(s.checkpoint) } : s));
  }
  return { ...l, goal: p.goal ?? l.goal, summary: p.summary ?? l.summary, sections, exercises };
}

/** Problems in a patch: a section or question that doesn't exist, reteach
 * text over 300 characters, or notes that don't line up with the options. */
export function checkPatch(l: Lesson, p: LessonPatch): string[] {
  const bad: string[] = [];
  for (const [i, sp] of Object.entries(p.sections ?? {})) {
    if (!l.sections[+i]) bad.push(`section ${i} does not exist`);
    if (sp.reteach && sp.reteach.length > 300) bad.push(`section ${i}: reteach is ${sp.reteach.length} characters`);
  }
  for (const [i, notes] of Object.entries(p.optionNotes ?? {})) {
    const e = l.exercises[+i];
    if (!e || e.type !== "multiple-choice") bad.push(`question ${i} is not multiple choice`);
    else if (notes.length !== e.options.length) bad.push(`question ${i}: ${notes.length} notes for ${e.options.length} options`);
    else if (notes[e.correctIndex] !== "") bad.push(`question ${i}: the right answer has a note`);
    else if (notes.some((n, k) => k !== e.correctIndex && !n)) bad.push(`question ${i}: a wrong option has no note`);
  }
  return bad;
}
