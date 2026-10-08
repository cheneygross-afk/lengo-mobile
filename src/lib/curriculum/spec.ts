// Specs: what a lesson, unit and level must contain, written before the
// content and checked against it afterwards (docs/curriculum-architecture.md,
// section 6.1). A level spec is the single description of a level's
// shape -- its units, which authored lessons each holds, and the
// reinforce/drill lessons that follow each one -- and is what
// assemble.ts builds the level from.

import type { Exercise, Lesson, LessonKind } from "../lessons/types";
import { lessonItems } from "./items";
import type { CoursePlugin } from "./types";

/** Minimum counts of exercise types in a lesson ("production" = typed or spoken target language). */
export type ExerciseMix = Partial<Record<Exercise["type"] | "production", number>>;

/** A reinforce or drill lesson: written from this spec, checked against it. */
export type LayerSpec = {
  slug: string;
  kind: Extract<LessonKind, "reinforce" | "drill">;
  /** Named format ("Pattern practice", "Error hunt", ...). */
  format: string;
  /** Slug of the lesson it follows (the teach lesson it practises). */
  after: string;
  /** Concept ids practised. */
  reviews: string[];
  /** Minimum exercise counts across the whole lesson. */
  mix?: ExerciseMix;
  /** Fewest final-review exercises (default 8). */
  minFinal?: number;
  /** Items must get harder through the lesson (default true for drills). */
  climb?: boolean;
  optional?: boolean;
};

export type UnitSpec = {
  /** Stable id, used for generated slugs and progress ("zh-a1-u1"). */
  id: string;
  title: string;
  description: string;
  /** The unit's authored lessons (teach lessons and authored reviews), in order. */
  lessons: string[];
  /** Characters introduced in the unit (Chinese), for the character thread. */
  characters?: string[];
};

export type LevelSpec = {
  /** Module code ("A1"). */
  code: string;
  path: string;
  /** Lesson level value for generated lessons ("ZH-A1"). */
  level: Lesson["level"];
  /** Prefix for generated slugs ("zh-a1"). */
  slugPrefix: string;
  units: UnitSpec[];
  layers: LayerSpec[];
  /** Skip the generated level test (e.g. a level with an authored one). */
  noLevelTest?: boolean;
  /** Wording of the generated lessons, for a level taught in the target
   * language (default: English, ENGLISH_STRINGS). */
  strings?: AssemblyStrings;
};

/** Everything the generated lessons (spaced reviews, unit reviews, the
 * level test) say to the learner. */
export type AssemblyStrings = {
  unitLabel: (n: number, title: string) => string;
  /** One concept in a review's list: "Name: gloss". */
  conceptLine: (name: string, gloss: string) => string;
  /** "a, b, c and more". */
  nameList: (names: string[], more: boolean) => string;
  spacedTitle: string;
  spacedSummary: (list: string) => string;
  spacedHeading: string;
  spacedIntro: string;
  unitReviewTitle: (n: number) => string;
  unitReviewSummary: (list: string) => string;
  unitReviewHeading: (n: number) => string;
  unitReviewIntro: string;
  meaningQuestion: string;
  speakTip: string;
  listeningHeading: string;
  listeningBody: string;
  speakingHeading: string;
  speakingBody: string;
  levelTestTitle: (code: string) => string;
  levelTestSummary: (total: number) => string;
  part1Heading: string;
  part1Body: string;
  part2Heading: string;
  part2Body: string;
  part3Heading: string;
  part3Body: string;
};

export const ENGLISH_STRINGS: AssemblyStrings = {
  unitLabel: (n, title) => `Unit ${n} · ${title}`,
  conceptLine: (name, gloss) => `${name}: ${gloss}`,
  nameList: (names, more) => `${names.join(", ")}${more ? " and more" : ""}`,
  spacedTitle: "Spaced review",
  spacedSummary: (list) => `Back again, just as you might be forgetting: ${list}.`,
  spacedHeading: "What's coming back",
  spacedIntro:
    "These questions come from earlier units. Reviewing something just as it starts to fade is what makes it stick, so it's normal if a few feel harder than they did the first time.",
  unitReviewTitle: (n) => `Unit ${n} review`,
  unitReviewSummary: (list) => `A quiz, listening and speaking on ${list}.`,
  unitReviewHeading: (n) => `Unit ${n} in one page`,
  unitReviewIntro: "This review closes the unit: a short quiz on everything it taught, then listening and speaking with the unit's own sentences.",
  meaningQuestion: "What does it mean?",
  speakTip: "Listen to the model first, then match its tones.",
  listeningHeading: "Listening",
  listeningBody: "Listen, then choose what you heard. Replay as often as you like.",
  speakingHeading: "Speaking",
  speakingBody: "Read each sentence aloud, then compare with the model.",
  levelTestTitle: (code) => `${code} level test`,
  levelTestSummary: (total) => `${total} questions across the whole level: listening, reading and grammar, then producing it yourself.`,
  part1Heading: "Part 1 · Listening",
  part1Body: "The test covers every unit of the level. Start with listening: replay each clip as often as you need.",
  part2Heading: "Part 2 · Reading and grammar",
  part2Body: "Choose or arrange the right answer.",
  part3Heading: "Part 3 · Your turn",
  part3Body: "Type the answers yourself. The final section below mixes the hardest questions.",
};

/** Default minimums by kind. */
export const DEFAULT_MIX: Record<LayerSpec["kind"], ExerciseMix> = {
  // A new angle on the concept: a mix, with real production.
  reinforce: { production: 4 },
  // High repetition: mostly production, and some listening or speaking.
  drill: { production: 6 },
};

function allExercises(l: Lesson): Exercise[] {
  return [...l.sections.flatMap((s) => s.checkpoint ?? []), ...l.exercises];
}

/** Problems with a drafted reinforce/drill lesson against its spec. */
export function checkLayer(l: Lesson, spec: LayerSpec, plugin: CoursePlugin): string[] {
  const out: string[] = [];
  if (l.kind !== spec.kind) out.push(`kind is ${l.kind}, spec says ${spec.kind}`);
  if (l.format !== spec.format) out.push(`format is "${l.format}", spec says "${spec.format}"`);
  const tagged = new Set(l.reviews ?? []);
  for (const c of spec.reviews) if (!tagged.has(c)) out.push(`spec reviews ${c} but the lesson isn't tagged with it`);
  if (l.teaches?.length) out.push("a reinforce/drill lesson teaches nothing new");

  const minFinal = spec.minFinal ?? 8;
  if (l.exercises.length < minFinal) out.push(`${l.exercises.length} final exercises (spec: at least ${minFinal})`);

  const items = lessonItems(l, plugin.typedInTarget);
  const mix = { ...DEFAULT_MIX[spec.kind], ...spec.mix };
  for (const [k, min] of Object.entries(mix)) {
    const n = k === "production" ? items.filter((i) => i.production).length : allExercises(l).filter((e) => e.type === k).length;
    if (n < (min ?? 0)) out.push(`${n} ${k} item(s) (spec: at least ${min})`);
  }

  // Difficulty climbs: the last third of the final review averages at
  // least as hard as the first third.
  if (spec.climb ?? spec.kind === "drill") {
    const finals = items.filter((i) => i.place === "final").map((i) => i.difficulty as number);
    const third = Math.max(1, Math.floor(finals.length / 3));
    const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
    if (finals.length >= 3 && avg(finals.slice(-third)) < avg(finals.slice(0, third)))
      out.push("difficulty falls through the final review (spec: climb)");
  }
  return out;
}
