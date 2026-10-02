// Synced from cheneygross-afk/lengo:src/lib/lessons/sequencing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { weaveLessons, type AnchoredLesson } from "./weave";
import { SKILL_LESSONS, withSkills } from "./skills";
import { A1_IRREGULARS } from "./a1-irregulars";
import { A1_CORE_PLACES } from "./a1-core";
import { A2_PLACES } from "./a2-perfect-pronouns";

// Course order on top of weave.ts. weaveLessons can only place a lesson
// right after another one, so the reordering that came out of the
// curriculum review happens here instead, as a final pass over each
// level's woven list:
//   - a few topics move earlier (the present perfect opens B1 instead of
//     arriving after 79 lessons of subjunctive; A1's Word Web lessons sit
//     next to the grammar that needs their vocabulary),
//   - each level's Vocabulary Practice parts are spread through the core
//     lessons instead of arriving as one long block at the end,
//   - each level's "Extra Practice" block is marked optional, so the
//     required path is the core lessons plus the level's final review,
//   - A1-B2's "Reading Practice" stories (the tail of each base file) are
//     dropped: they duplicate the Readings feature (src/lib/stories, same
//     slugs and text) and aren't grammar/vocab drills,
//   - the spaced reviews that were woven between those stories (B1/B2's
//     *d-rep-* and "Repaso temático" lessons) are spread through the core,
//     each after the grammar topic it reviews,
//   - so every level ends with its exit test: nothing required comes
//     after it, and the lesson page's "next" link there is the
//     level-complete ending.
// Every step works on slugs, never numbers, and throws on an unknown slug
// so a renamed lesson fails the build. Completion is keyed by slug, so
// moving a lesson doesn't lose anyone's progress. The whole level is
// renumbered from 1 at the end.

type Unit = Lesson[];

function indexOf(lessons: Lesson[], slug: string): number {
  const i = lessons.findIndex((l) => l.slug === slug);
  if (i === -1) throw new Error(`sequencing: unknown slug "${slug}"`);
  return i;
}

/** Cuts lessons[from slug .. before endSlug) out of the list. */
function cut(lessons: Lesson[], fromSlug: string, endSlug: string): Unit {
  const start = indexOf(lessons, fromSlug);
  const end = indexOf(lessons, endSlug);
  if (end <= start) throw new Error(`sequencing: "${endSlug}" is not after "${fromSlug}"`);
  return lessons.splice(start, end - start);
}

/** Moves lessons[fromSlug .. before endSlug) so they sit right before beforeSlug. */
function moveBlock(lessons: Lesson[], fromSlug: string, endSlug: string, beforeSlug: string): void {
  const block = cut(lessons, fromSlug, endSlug);
  lessons.splice(indexOf(lessons, beforeSlug), 0, ...block);
}

/** Moves one lesson so it sits right before beforeSlug. */
function moveLesson(lessons: Lesson[], slug: string, beforeSlug: string): void {
  const [lesson] = lessons.splice(indexOf(lessons, slug), 1);
  lessons.splice(indexOf(lessons, beforeSlug), 0, lesson);
}

/** Moves the lessons named in `slugs` (in that order) so they sit right
 * before beforeSlug. A lesson moved out of a level's Extra Practice block
 * this way becomes required, as long as beforeSlug is in the core. */
function moveLessons(lessons: Lesson[], slugs: string[], beforeSlug: string): void {
  const moved = slugs.map((slug) => lessons.splice(indexOf(lessons, slug), 1)[0]);
  lessons.splice(indexOf(lessons, beforeSlug), 0, ...moved);
}

const LATER_PART = /(Part|Parte) ([2-9]|\d{2,}) (of|de) \d+/;

/**
 * Cuts the block of numbered parts (partSlugs, in order, each carrying
 * the reinforcement lessons woven after it) that ends right before
 * blockEndSlug, and spreads those parts evenly through the core lessons
 * that come before coreEndSlug. A part only ever lands right before the
 * start of a new topic (a base lesson that isn't "Part 2" or later), so
 * it never splits a topic from its own practice.
 */
function spreadParts(
  lessons: Lesson[],
  baseSlugs: Set<string>,
  partSlugs: string[],
  blockEndSlug: string,
  coreEndSlug: string
): void {
  const units: Unit[] = [];
  partSlugs.forEach((slug, i) => {
    units.push(cut(lessons, slug, i + 1 < partSlugs.length ? partSlugs[i + 1] : blockEndSlug));
  });
  const coreEnd = indexOf(lessons, coreEndSlug);
  const topicStarts: string[] = [];
  for (let i = 1; i < coreEnd; i++) {
    const l = lessons[i];
    if (baseSlugs.has(l.slug) && !LATER_PART.test(l.title)) topicStarts.push(l.slug);
  }
  // Evenly spaced topic starts; the last unit goes right before coreEnd.
  const targets = units.map((_, j) => {
    if (j === units.length - 1 || topicStarts.length === 0) return coreEndSlug;
    return topicStarts[Math.min(topicStarts.length - 1, Math.round(((j + 1) * topicStarts.length) / units.length))];
  });
  units.forEach((unit, j) => {
    lessons.splice(indexOf(lessons, targets[j]), 0, ...unit);
  });
}

/** Marks every lesson from fromSlug up to (not including) endSlug optional. */
function markOptional(lessons: Lesson[], fromSlug: string, endSlug: string): void {
  const start = indexOf(lessons, fromSlug);
  const end = indexOf(lessons, endSlug);
  for (let i = start; i < end; i++) lessons[i] = { ...lessons[i], optional: true };
}

function renumber(lessons: Lesson[]): Lesson[] {
  return lessons.map((l, i) => ({ ...l, number: i + 1 }));
}

function partSlugs(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${prefix}-${i + 1}`);
}

/** Drops the level's Reading Practice block: every base lesson from
 * firstSlug to the end of the base file. They're the same stories (same
 * slug, title and text) the Readings feature serves from src/lib/stories,
 * so they're left out of the lesson path; the lesson pages redirect their
 * old URLs to the story. Reinforcement lessons woven after them stay. */
function dropReadingPractice(level: Level, lessons: Lesson[], base: Lesson[], firstSlug: string): void {
  const start = base.findIndex((l) => l.slug === firstSlug);
  if (start === -1) throw new Error(`sequencing: unknown slug "${firstSlug}"`);
  const drop = new Set(base.slice(start).map((l) => l.slug));
  READING_PRACTICE[level] = lessons.filter((l) => drop.has(l.slug));
  for (let i = lessons.length - 1; i >= 0; i--) if (drop.has(lessons[i].slug)) lessons.splice(i, 1);
}

/** The Reading Practice lessons each level dropped, filled in as the
 * level is built. Not part of any lesson path; only the content check
 * reads it, so its vocabulary coverage still counts the story text the
 * way it did when these were lessons. */
export const READING_PRACTICE: Partial<Record<Level, Lesson[]>> = {};

/** A grammar topic a review can belong to: the slug of the topic's last
 * base lesson, the keyword its *d-rep-<keyword>-* reviews carry, and a
 * pattern for spotting it in a mixed review's summary. */
type Topic = { last: string; key?: string[]; mentions?: RegExp };

/** The topic a review belongs to: by its slug keyword when it has one,
 * otherwise the latest topic its summary mentions (a mixed review can
 * only come after everything it mixes), otherwise the level's last topic. */
function topicOf(lesson: Lesson, topics: Topic[]): number {
  const key = /^[a-z0-9]+-rep-([a-z]+)-/.exec(lesson.slug)?.[1];
  const byKey = key ? topics.findIndex((t) => t.key?.includes(key)) : -1;
  if (byKey !== -1) return byKey;
  const text = `${lesson.title} ${lesson.summary}`.toLowerCase();
  for (let i = topics.length - 1; i >= 0; i--) if (topics[i].mentions?.test(text)) return i;
  return topics.length - 1;
}

/**
 * Cuts every lesson after exitSlug (the spaced reviews that used to sit
 * between the Reading Practice stories) and spreads them through the core
 * lessons before coreEndSlug. Each review only lands after its topic's
 * last lesson: a topic's reviews are spaced evenly over the rest of the
 * core (never directly after a grammar lesson, so each one is still
 * followed by its own practice), and the last slot is right before
 * coreEndSlug. Reviews sharing a slot are interleaved by topic.
 */
function spreadReviews(
  lessons: Lesson[],
  baseSlugs: Set<string>,
  exitSlug: string,
  coreEndSlug: string,
  topics: Topic[]
): void {
  const reviews = lessons.splice(indexOf(lessons, exitSlug) + 1);
  const coreEnd = indexOf(lessons, coreEndSlug);
  // A slot is any gap in the core that doesn't directly follow a base
  // lesson, so a grammar lesson is always followed by its own practice.
  const slots: number[] = [];
  for (let i = 1; i <= coreEnd; i++) if (!baseSlugs.has(lessons[i - 1].slug) || i === coreEnd) slots.push(i);
  const topicEnds = topics.map((t) => indexOf(lessons, t.last));

  const byTopic = new Map<number, Lesson[]>();
  for (const review of reviews) {
    const t = topicOf(review, topics);
    byTopic.set(t, [...(byTopic.get(t) ?? []), review]);
  }
  // slot index -> reviews landing there, one list per topic
  const placed = new Map<number, Lesson[][]>();
  for (const [t, group] of byTopic) {
    const open = slots.filter((s) => s > topicEnds[t]);
    group.forEach((review, j) => {
      const slot = open[Math.floor((j * open.length) / group.length)];
      const lists = placed.get(slot) ?? [];
      let list = lists.find((l) => topicOf(l[0], topics) === t);
      if (!list) lists.push((list = []));
      list.push(review);
      placed.set(slot, lists);
    });
  }
  // Insert from the back so earlier slot positions stay valid.
  for (const slot of [...placed.keys()].sort((a, b) => b - a)) {
    const lists = placed.get(slot)!;
    const mixed: Lesson[] = [];
    for (let k = 0; mixed.length < lists.reduce((n, l) => n + l.length, 0); k++) {
      for (const list of lists) if (k < list.length) mixed.push(list[k]);
    }
    lessons.splice(slot, 0, ...mixed);
  }
}

const B1_TOPICS: Topic[] = [
  { last: "present-perfect-2", key: ["perfecto"], mentions: /experiencias|pretérito perfecto|\bperfecto\b/ },
  { last: "present-subjunctive-formation-2", key: ["formacion"] },
  {
    last: "subjunctive-wishes-doubt-emotion-mastery-check",
    key: ["deseo", "duda", "emocion"],
    mentions: /subjuntivo|deseos?\b|dudas?\b|dudo|emoci|reacciones|espero que/,
  },
  { last: "subjunctive-impersonal-ojala-2", key: ["impersonales", "ojala"], mentions: /impersonales|ojalá|es verdad que/ },
  { last: "commands-imperative-2", key: ["imperativo"], mentions: /mandatos?|instrucciones/ },
  { last: "conditional-tense-2", key: ["condicional"], mentions: /condicional|hipótesis|cortes[ií]/ },
  { last: "si-clauses-simple-2", key: ["si"], mentions: /\bsi\b|condiciones/ },
  { last: "past-perfect-2", key: ["pluscuamperfecto"], mentions: /pasados|pluscuamperfecto/ },
  { last: "relative-pronouns-mastery-check", key: ["relativos"], mentions: /relativ/ },
  { last: "passive-voice-se-2", key: ["se"], mentions: /pasiva|se impersonal|se dice/ },
  { last: "combined-object-pronouns-2", key: ["combinados"], mentions: /pronombres/ },
  { last: "vosotros-commands-2", key: ["vosotros"], mentions: /todo el b1|todos los temas|cada tema|todo lo aprendido|b1/ },
];

const B2_TOPICS: Topic[] = [
  { last: "subjunctive-adjective-clauses-2", key: ["relativas"], mentions: /relativas|la persona que/ },
  {
    last: "subjunctive-adverbial-clauses-2",
    key: ["adverbiales"],
    mentions: /conjunciones|cuando \+ subjuntivo|subjuntivo temporal|finalidad|aunque/,
  },
  { last: "imperfect-subjunctive-sequence-2", key: ["imperfecto"], mentions: /imperfecto|secuencia|influencia/ },
  { last: "hypothetical-si-clauses-2", key: ["si"], mentions: /hipótesis|como si|condicional|deseos imposibles/ },
  {
    last: "conditional-perfect-pluperfect-subjunctive-mastery-check",
    key: ["condicional"],
    mentions: /arrepentimientos|tipo 3|pluscuamperfecto|reproches/,
  },
  { last: "reported-speech-2", key: ["estilo"], mentions: /estilo indirecto|órdenes indirectas/ },
  { last: "ser-estar-haber-nuanced-2", key: ["ser"], mentions: /pasiva|\bser\b|\bestar\b/ },
  { last: "verbs-of-change-mastery-check", key: ["verbos"], mentions: /verbos de cambio/ },
  { last: "advanced-connectors-2", key: ["conectores"], mentions: /conectores|argumenta|concesi/ },
  { last: "emphasis-word-order-2", key: ["enfasis"], mentions: /énfasis/ },
  { last: "cuyo-el-cual-2", key: ["cuyo"], mentions: /cuyo|el cual|\bb2\b|todos los temas/ },
];

/** Anything still after the exit test moves to right before it, so the
 * exit test is always the level's last lesson. */
function endWith(lessons: Lesson[], exitSlug: string): void {
  const after = lessons.splice(indexOf(lessons, exitSlug) + 1);
  lessons.splice(indexOf(lessons, exitSlug), 0, ...after);
}

/** Each level's exit test: the last lesson of the level, and of its
 * required path. */
export const LEVEL_EXIT_SLUGS = {
  A1: "a1r-exit-ticket",
  A2: "a2r-exit-ticket",
  B1: "b1r-exit-ticket",
  B2: "b2r-exit-ticket",
  C1: "c1r-challenge-exit-ticket",
  C2: "c2r-challenge-exit-ticket",
} as const;

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** Weaves a level's extra lessons into its base lessons, then applies the
 * course order above. Use this instead of calling weaveLessons directly
 * for the six core Spanish levels. */
export function buildLevel(level: Level, base: Lesson[], extras: AnchoredLesson[]): Lesson[] {
  const baseSlugs = new Set(base.map((l) => l.slug));
  const lessons = [...weaveLessons(base, [...extras, ...SKILL_LESSONS[level]])];

  switch (level) {
    case "A1":
      // Word Webs go next to the grammar that uses their words.
      moveLesson(lessons, "a1r-word-web-jobs", "ser-vs-estar-1");
      moveLesson(lessons, "a1r-word-web-family-people", "question-words");
      moveLesson(lessons, "a1r-word-web-food", "tener-ir-hacer-hay-1");
      moveLesson(lessons, "a1r-word-web-house", "demonstratives-1");
      moveLesson(lessons, "a1r-word-web-places", "ser-vs-estar-drill-1");
      moveLesson(lessons, "a1r-word-web-feelings", "ser-vs-estar-drill-1");
      // Everyday irregulars (a1-irregulars.ts): yo-go verbs, dar, ver,
      // saber, conocer, saber vs. conocer and verb + infinitive, as their
      // own unit right after the regular and stem-changing present.
      moveLessons(lessons, A1_IRREGULARS.map((a) => a.lesson.slug), "a1r-word-web-jobs");
      spreadParts(lessons, baseSlugs, partSlugs("vocabulary-practice", 4), "a1-final-review-1", "ser-vs-estar-drill-1");
      // Core vocabulary and the routine, body, weather and clothes lessons
      // (a1-core.ts), each next to the grammar it needs. This also lifts
      // the weather and clothes-shopping missions out of Extra Practice.
      for (const { slugs, before } of A1_CORE_PLACES) moveLessons(lessons, slugs, before);
      markOptional(lessons, "ser-vs-estar-drill-1", "a1-final-review-1");
      dropReadingPractice(level, lessons, base, "school-day-math-test");
      break;
    case "A2":
      spreadParts(lessons, baseSlugs, partSlugs("a2-vocabulary-practice", 5), "a2-comprehensive-review-1", "preterite-drill-1");
      // The present perfect (after the two past tenses), two Common Words
      // lessons, and double object pronouns late in the level, where the
      // exit test already asks for them (a2-perfect-pronouns.ts). Three
      // double-pronoun drills move out of Extra Practice with them.
      for (const { slugs, before } of A2_PLACES) moveLessons(lessons, slugs, before);
      markOptional(lessons, "preterite-drill-1", "a2-comprehensive-review-1");
      dropReadingPractice(level, lessons, base, "first-day-new-school");
      // The last cumulative drills join the final review, and the
      // "Are you ready for B1?" drill leads into the exit test.
      moveBlock(lessons, "a2d-cumulative-circuit-3", "a2d-exit-drill-ready-b1", "a2r-challenge-big-error-hunt");
      moveLesson(lessons, "a2d-exit-drill-ready-b1", "a2r-exit-ticket");
      break;
    case "B1":
      // Present perfect first: easier and far more frequent than the
      // subjunctive, and A2-level in the Instituto Cervantes syllabus.
      moveBlock(lessons, "present-perfect-1", "past-perfect-1", "present-subjunctive-formation-1");
      spreadParts(lessons, baseSlugs, partSlugs("b1-vocabulary-practice", 10), "b1-comprehensive-review-1", "subjunctive-formation-drill-1");
      markOptional(lessons, "subjunctive-formation-drill-1", "b1-comprehensive-review-1");
      dropReadingPractice(level, lessons, base, "el-sendero-perdido");
      spreadReviews(lessons, baseSlugs, "b1r-exit-ticket", "subjunctive-formation-drill-1", B1_TOPICS);
      break;
    case "B2":
      spreadParts(lessons, baseSlugs, partSlugs("b2-vocabulary-practice", 10), "b2-comprehensive-review-1", "subjunctive-adjective-clauses-drill-1");
      markOptional(lessons, "subjunctive-adjective-clauses-drill-1", "b2-comprehensive-review-1");
      dropReadingPractice(level, lessons, base, "chef-against-family-wishes");
      spreadReviews(lessons, baseSlugs, "b2r-exit-ticket", "subjunctive-adjective-clauses-drill-1", B2_TOPICS);
      break;
    case "C1":
      markOptional(lessons, "subjunctive-advanced-nuances-drill-1", "c1r-challenge-big-error-hunt");
      break;
    case "C2":
      spreadParts(lessons, baseSlugs, partSlugs("c1c2-vocabulary-practice", 30), "c1c2-comprehensive-review-1", "modismos-expresiones-idiomaticas-drill-1");
      markOptional(lessons, "modismos-expresiones-idiomaticas-drill-1", "c1c2-comprehensive-review-1");
      break;
  }

  endWith(lessons, LEVEL_EXIT_SLUGS[level]);
  // Listening, speaking and writing practice (skills.ts).
  return withSkills(level, renumber(lessons));
}
