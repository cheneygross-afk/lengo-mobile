// Assembly: builds a course's levels from their specs and the concept
// graph (docs/curriculum-architecture.md, section 6.4). For each level:
//
//   1. The units' authored lessons in spec order, each followed by the
//      reinforce/drill lessons whose spec says `after` it.
//   2. One spaced review per unit (from the second unit of the course on),
//      drawn from the item bank: concepts taught one unit back, three
//      units back, and -- in a new level -- the matching unit of the level
//      before ("+1 unit / +3 units / +1 level", section 3.3). It sits
//      after the unit's first teach group, so it never splits a teach
//      lesson from its own drills.
//   3. A unit review closing every unit: a quiz covering the unit's
//      concepts, listening and speaking made from its examples.
//   4. A level test closing the level, drawn with constraints from the
//      whole level.
//   5. Renumbering, and checks on the result: unit sizes, every lesson
//      placed exactly once, and the graph check on the final order.
//
// Assembled lessons (source "assembled:<kind>") copy items, with
// meta.from pointing at the original. Items are picked with a PRNG seeded
// by the unit, so these lessons are identical on every build, on the
// website and in the app. Their slugs come from unit ids, so progress
// survives a rebuild.

import type { Exercise, Lesson, LessonExample, LessonSection } from "../lessons/types";
import { buildGraph, checkGraph } from "./graph";
import { lessonItems, type Item } from "./items";
import { copyOf, seeded, selectItems, shuffled } from "./select";
import { ENGLISH_STRINGS, type AssemblyStrings, type LayerSpec, type LevelSpec, type UnitSpec } from "./spec";
import type { Concept, CoursePlugin, Finding } from "./types";

export const UNIT_MIN_REQUIRED = 6;
export const UNIT_MAX_REQUIRED = 15;

export type AssembledUnit = {
  /** Stable id from the spec ("zh-a1-u1"). */
  id: string;
  number: number;
  title: string;
  /** "Unit 1 · Hello and who you are" */
  label: string;
  description: string;
  concepts: string[];
  characters: string[];
  requiredSlugs: string[];
  optionalSlugs: string[];
};

export type AssembledLevel = {
  code: string;
  path: string;
  lessons: Lesson[];
  units: AssembledUnit[];
};

/** Course-specific wording and conventions for generated lessons. */
export type AssemblyLanguage = {
  /** The meaning of a section example, for listening options. */
  exampleMeaning: (e: LessonExample) => string;
  /** How an example is shown in English text ("你好 (nǐ hǎo)"). */
  exampleInline: (e: LessonExample) => string;
};

export type AssembleInput = {
  specs: LevelSpec[];
  /** Every authored and drafted lesson, any order. */
  lessons: Lesson[];
  concepts: Concept[];
  plugin: CoursePlugin;
  language: AssemblyLanguage;
};

type UnitBuild = {
  spec: UnitSpec;
  level: LevelSpec;
  /** Teach groups: an authored lesson and the layers after it. */
  groups: Lesson[][];
  concepts: string[];
};

const SPACED_ITEMS = { back1: 4, back3: 2, prevLevel: 2 };
const UNIT_QUIZ_ITEMS = 6;
const LEVEL_TEST_ITEMS = 24;
const LEVEL_TEST_RECOGNISE = 8;

export function assembleCourse(input: AssembleInput): { levels: AssembledLevel[]; findings: Finding[] } {
  const { specs, plugin } = input;
  const findings: Finding[] = [];
  const err = (where: string, message: string) => findings.push({ level: "error", where, message });
  const bySlug = new Map(input.lessons.map((l) => [l.slug, l]));
  const conceptById = new Map(input.concepts.map((c) => [c.id, c]));
  const placed = new Set<string>();

  const take = (slug: string, where: string): Lesson | null => {
    const l = bySlug.get(slug);
    if (!l) {
      err(where, `unknown lesson "${slug}"`);
      return null;
    }
    if (placed.has(slug)) err(where, `"${slug}" is placed twice`);
    placed.add(slug);
    return l;
  };

  // 1. Units from specs.
  const units: UnitBuild[] = [];
  for (const level of specs) {
    const layersAfter = new Map<string, LayerSpec[]>();
    for (const ls of level.layers) layersAfter.set(ls.after, [...(layersAfter.get(ls.after) ?? []), ls]);
    for (const u of level.units) {
      const groups: Lesson[][] = [];
      for (const slug of u.lessons) {
        const head = take(slug, u.id);
        if (!head) continue;
        const group = [head];
        for (const ls of layersAfter.get(slug) ?? []) {
          if (!bySlug.has(ls.slug)) continue; // specified, not written yet (check.ts warns)
          const l = take(ls.slug, u.id);
          if (l) group.push(ls.optional ? { ...l, optional: true } : l);
        }
        layersAfter.delete(slug);
        groups.push(group);
      }
      const concepts = [...new Set(groups.flatMap((g) => g[0].teaches ?? []))];
      units.push({ spec: u, level, groups, concepts });
    }
    for (const [after, ls] of layersAfter) for (const l of ls) err(level.code, `layer "${l.slug}" follows "${after}", which no unit holds`);
  }
  for (const l of input.lessons) if (!placed.has(l.slug)) err(l.slug, "not placed in any unit");

  // The item bank: authored and drafted lessons only (never generated copies).
  const itemsOf = new Map<string, Item[]>();
  const unitItems = (u: UnitBuild): Item[] =>
    u.groups.flat().flatMap((l) => {
      let items = itemsOf.get(l.slug);
      if (!items) itemsOf.set(l.slug, (items = lessonItems(l, plugin.typedInTarget)));
      return items;
    });

  const used = new Set<string>();
  const levels: AssembledLevel[] = [];
  let unitIndex = 0;
  for (const level of specs) {
    const levelUnits = units.filter((u) => u.level === level);
    const prevLevel = specs[specs.indexOf(level) - 1];
    const prevUnits = prevLevel ? units.filter((u) => u.level === prevLevel) : [];
    const lessons: Lesson[] = [];
    const assembled: AssembledUnit[] = [];

    levelUnits.forEach((u, k) => {
      const g = unitIndex + k;
      const seq: Lesson[] = [];
      u.groups.forEach((group, gi) => {
        seq.push(...group);
        // 2. Spaced review after the first teach group (or the only one).
        if (gi === 0) {
          const review = spacedReview(u, g, units, prevUnits[k % Math.max(1, prevUnits.length)], unitItems, used, conceptById);
          if (review) seq.push(review);
        }
      });
      // 3. Unit review.
      seq.push(unitReview(u, k, unitItems(u), conceptById, input.language));
      // 4. Level test after the last unit's review.
      if (k === levelUnits.length - 1 && !level.noLevelTest) {
        const all = levelUnits.flatMap(unitItems);
        seq.push(levelTest(level, all, levelUnits.flatMap((x) => x.concepts), conceptById));
      }

      const required = seq.filter((l) => !l.optional);
      if (required.length < UNIT_MIN_REQUIRED || required.length > UNIT_MAX_REQUIRED)
        err(u.spec.id, `${required.length} required lessons (allowed ${UNIT_MIN_REQUIRED}-${UNIT_MAX_REQUIRED})`);
      assembled.push({
        id: u.spec.id,
        number: k + 1,
        title: u.spec.title,
        label: textOf(level).unitLabel(k + 1, u.spec.title),
        description: u.spec.description,
        concepts: u.concepts,
        characters: u.spec.characters ?? [],
        requiredSlugs: required.map((l) => l.slug),
        optionalSlugs: seq.filter((l) => l.optional).map((l) => l.slug),
      });
      lessons.push(...seq);
    });
    unitIndex += levelUnits.length;
    levels.push({ code: level.code, path: level.path, lessons: lessons.map((l, i) => ({ ...l, number: i + 1 })), units: assembled });
  }

  // 5. The graph check on the final order: a move can create a problem
  // (taught before a prerequisite, reviewed before taught) that the
  // per-lesson checks can't see.
  const graph = buildGraph(
    input.concepts,
    levels.map((l) => ({ code: l.code, path: l.path, lessons: l.lessons }))
  );
  findings.push(...checkGraph(graph).filter((f) => f.level === "error"));
  return { levels, findings };
}

/** "你好 (nǐ hǎo): hello." -- one full stop, whatever the meaning ends with. */
function gloss(language: AssemblyLanguage, e: LessonExample): string {
  const meaning = language.exampleMeaning(e);
  return `${language.exampleInline(e)}: ${meaning}${/[.!?]$/.test(meaning) ? "" : "."}`;
}

function textOf(level: LevelSpec): AssemblyStrings {
  return level.strings ?? ENGLISH_STRINGS;
}

/** "a, b, c, d and more": the first four concepts' names. */
function nameList(ids: string[], concepts: Map<string, Concept>, t: AssemblyStrings): string {
  return t.nameList(
    ids.slice(0, 4).map((id) => concepts.get(id)?.name ?? id),
    ids.length > 4
  );
}

function conceptList(ids: string[], concepts: Map<string, Concept>, t: AssemblyStrings): string[] {
  return ids.map((id) => {
    const c = concepts.get(id);
    return c ? t.conceptLine(c.name, c.gloss) : id;
  });
}

function spacedReview(
  u: UnitBuild,
  g: number,
  all: UnitBuild[],
  prevLevelUnit: UnitBuild | undefined,
  unitItems: (u: UnitBuild) => Item[],
  used: Set<string>,
  concepts: Map<string, Concept>
): Lesson | null {
  const t = textOf(u.level);
  const sources: [UnitBuild | undefined, number][] = [
    [all[g - 1], SPACED_ITEMS.back1],
    [all[g - 3], SPACED_ITEMS.back3],
    [prevLevelUnit && prevLevelUnit !== all[g - 1] && prevLevelUnit !== all[g - 3] ? prevLevelUnit : undefined, SPACED_ITEMS.prevLevel],
  ];
  const picked: Item[] = [];
  const covered: string[] = [];
  for (const [src, count] of sources) {
    // A level taught in another language (its own strings) reviews only
    // units taught in that language, so it never mixes instruction languages.
    if (!src || textOf(src.level) !== t) continue;
    const items = selectItems(
      unitItems(src),
      { count, cover: shuffled(src.concepts, seeded(u.spec.id + src.spec.id)).slice(0, count), minDifficulty: 2, exclude: used, perConceptMax: 1 },
      `${u.spec.id}<-${src.spec.id}`
    );
    for (const i of items) used.add(i.id);
    picked.push(...items);
    covered.push(...src.concepts.filter((c) => items.some((i) => i.concepts.includes(c))));
  }
  if (picked.length < 4) return null;
  const reviews = [...new Set(covered)];
  // Recognition first, production last.
  const ordered = [...picked].sort((a, b) => a.difficulty - b.difficulty);
  return {
    slug: `${u.spec.id}-spaced-review`,
    level: u.level.level,
    number: 0,
    title: t.spacedTitle,
    summary: t.spacedSummary(nameList(reviews, concepts, t)),
    duration: "6 min",
    sections: [
      {
        heading: t.spacedHeading,
        body: [
          t.spacedIntro,
          ...conceptList(reviews, concepts, t),
        ],
      },
    ],
    exercises: ordered.map(copyOf),
    kind: "review",
    reviews,
    format: "Spaced review",
    source: "assembled:spaced-review",
  };
}

function unitReview(
  u: UnitBuild,
  k: number,
  items: Item[],
  concepts: Map<string, Concept>,
  language: AssemblyLanguage
): Lesson {
  const t = textOf(u.level);
  const random = seeded(`${u.spec.id}-unit-review`);
  const quiz = selectItems(items, { count: UNIT_QUIZ_ITEMS, cover: u.concepts, minDifficulty: 2, minProduction: 2 }, `${u.spec.id}-quiz`);

  // Listening and speaking from the unit's own examples: short sentences
  // with a distinct meaning.
  const examples = u.groups
    .flat()
    .flatMap((l) => l.sections.flatMap((s) => s.examples ?? []))
    .filter((e) => language.exampleMeaning(e) && e.es.length >= 2 && e.es.length <= 24);
  const distinct = [...new Map(examples.map((e) => [language.exampleMeaning(e), e])).values()];
  const pool = shuffled(distinct, random);
  const listening: Exercise[] = pool.slice(0, 3).map((e, i) => {
    const wrong = shuffled(pool.filter((x) => x !== e), seeded(`${u.spec.id}-l${i}`)).slice(0, 3).map(language.exampleMeaning);
    const options = shuffled([language.exampleMeaning(e), ...wrong], seeded(`${u.spec.id}-o${i}`));
    return {
      type: "listen-choose",
      audio: e.es,
      question: t.meaningQuestion,
      options,
      correctIndex: options.indexOf(language.exampleMeaning(e)),
      explanation: gloss(language, e),
      meta: { skill: "listening", difficulty: 1 },
    };
  });
  const speaking: Exercise[] = pool.slice(3, 5).map((e) => ({
    type: "speak",
    text: e.es,
    explanation: gloss(language, e),
    tip: t.speakTip,
    meta: { skill: "speaking", difficulty: 2 },
  }));

  const sections: LessonSection[] = [
    {
      heading: t.unitReviewHeading(k + 1),
      body: [
        t.unitReviewIntro,
        ...conceptList(u.concepts, concepts, t),
      ],
      examples: pool.slice(5, 9),
    },
    { heading: t.listeningHeading, body: [t.listeningBody], checkpoint: listening },
  ];
  if (speaking.length) sections.push({ heading: t.speakingHeading, body: [t.speakingBody], checkpoint: speaking });
  if (!sections[0].examples?.length) delete sections[0].examples;

  return {
    slug: `${u.spec.id}-unit-review`,
    level: u.level.level,
    number: 0,
    title: t.unitReviewTitle(k + 1),
    summary: t.unitReviewSummary(nameList(u.concepts, concepts, t)),
    duration: "10 min",
    sections,
    exercises: quiz.sort((a, b) => a.difficulty - b.difficulty).map(copyOf),
    unitReview: true,
    kind: "unit-review",
    reviews: u.concepts,
    format: "Unit review",
    source: "assembled:unit-review",
  };
}

function levelTest(level: LevelSpec, items: Item[], taught: string[], concepts: Map<string, Concept>): Lesson {
  const t = textOf(level);
  const seed = `${level.slugPrefix}-level-test`;
  const listening = selectItems(items, { count: 4, types: ["listen-choose", "dictation"] }, `${seed}-listening`);
  const used = new Set(listening.map((i) => i.id));
  // Recognition (choose or arrange) and production (type it) are drawn
  // separately, each covering as many of the level's concepts as it can.
  const recognise = selectItems(
    items.filter((i) => !i.production),
    { count: LEVEL_TEST_RECOGNISE, cover: taught, perConceptMax: 2, exclude: used, types: ["multiple-choice", "multi-select", "word-order", "matching"] },
    `${seed}-recognise`
  ).sort((a, b) => a.difficulty - b.difficulty);
  for (const i of recognise) used.add(i.id);
  const produce = selectItems(
    items.filter((i) => i.production),
    { count: LEVEL_TEST_ITEMS - listening.length - recognise.length, cover: taught, perConceptMax: 2, minDifficulty: 2, exclude: used, types: ["fill-blank", "translate"] },
    `${seed}-produce`
  ).sort((a, b) => a.difficulty - b.difficulty);
  const total = listening.length + recognise.length + produce.length;
  return {
    slug: `${level.slugPrefix}-level-test`,
    level: level.level,
    number: 0,
    title: t.levelTestTitle(level.code),
    summary: t.levelTestSummary(total),
    duration: "20 min",
    sections: [
      {
        heading: t.part1Heading,
        body: [t.part1Body],
        checkpoint: listening.map(copyOf),
      },
      { heading: t.part2Heading, body: [t.part2Body], checkpoint: recognise.map(copyOf) },
      {
        heading: t.part3Heading,
        body: [t.part3Body],
        checkpoint: produce.slice(0, Math.ceil(produce.length / 2)).map(copyOf),
      },
    ],
    exercises: produce.slice(Math.ceil(produce.length / 2)).map(copyOf),
    kind: "level-test",
    reviews: taught.filter((c) => concepts.has(c)),
    format: "Level test",
    source: "assembled:level-test",
  };
}
