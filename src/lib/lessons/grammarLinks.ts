// Synced from cheneygross-afk/lengo:src/lib/lessons/grammarLinks.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { SpanishLevelPath } from "./levels";

// Which lessons teach the topic of each free grammar guide (/grammar/<slug>,
// src/lib/grammar/guides.ts), so the two can link to each other: a guide's
// "Practice this in lessons" button opens its first core lesson, and the end
// of any lesson on that topic offers "Review this grammar". Kept here with
// the lesson content (not next to the guides) so it syncs to the mobile app
// with the lessons it names; `npm run check-content` fails if a slug here
// stops matching a lesson.
//
// A guide's level is where the topic is first introduced in the grammar
// literature, which doesn't always match where this course teaches it
// (reflexive verbs are an A1 guide but an A2 lesson), so every entry names
// its lessons' levels explicitly.

export type LessonRef = { levelPath: SpanishLevelPath; slug: string };

export type GuideLessonLink = {
  guide: string;
  // The lessons that actually teach the topic, in course order. The first
  // one is where a guide's "Practice this in lessons" button goes.
  lessons: LessonRef[];
  // Drill and practice lessons that also work on the topic, matched by
  // slug within the listed levels. Review, spiral and challenge lessons mix
  // several topics and never match (see MIXED_TOPIC below).
  practice?: Partial<Record<SpanishLevelPath, RegExp>>;
};

const at = (levelPath: SpanishLevelPath, ...slugs: string[]): LessonRef[] =>
  slugs.map((slug) => ({ levelPath, slug }));

// Order matters where topics overlap: the first entry whose lessons or
// practice pattern match a lesson wins (the imperfect subjunctive guide
// comes before the general subjunctive one, si clauses before commands).
export const GUIDE_LESSON_LINKS: GuideLessonLink[] = [
  {
    guide: "ser-vs-estar",
    lessons: [
      ...at("a1", "ser-vs-estar-1", "ser-vs-estar-2", "ser-vs-estar-mastery-check"),
      ...at("b2", "ser-estar-haber-nuanced-1", "ser-estar-haber-nuanced-2"),
    ],
    practice: { a1: /ser-estar|ser-vs-estar/, b2: /ser-estar/ },
  },
  {
    guide: "gustar-and-similar-verbs",
    lessons: at("a1", "gustar-1", "gustar-2", "gustar-mastery-check"),
    practice: { a1: /gustar|gusta-gustan/, a2: /gustar/ },
  },
  {
    guide: "saber-vs-conocer",
    // The course has no dedicated lesson; these two drill the contrast.
    lessons: at("a2", "a2d-minimal-pairs-meaning-shift", "preterite-vs-imperfect-drill-3"),
  },
  {
    guide: "preterite-vs-imperfect",
    lessons: at("a2", "preterite-vs-imperfect-1", "preterite-vs-imperfect-2", "preterite-vs-imperfect-mastery-check"),
    practice: { a2: /pret-imp|preterite-vs-imperfect/ },
  },
  {
    guide: "reflexive-verbs",
    lessons: at("a2", "reflexive-verbs-daily-routine-1", "reflexive-verbs-daily-routine-2"),
    practice: { a2: /reflexive/ },
  },
  {
    guide: "direct-and-indirect-object-pronouns",
    lessons: [
      ...at(
        "a2",
        "direct-object-pronouns-1",
        "direct-object-pronouns-2",
        "indirect-object-pronouns-1",
        "indirect-object-pronouns-2"
      ),
      ...at("b1", "combined-object-pronouns-1", "combined-object-pronouns-2"),
    ],
    practice: {
      a2: /object-pronoun|-dop$|-iop$|replace-object|me-te-nos-direct/,
      b1: /combined-object|combined-pronouns|double-pronouns/,
    },
  },
  {
    guide: "por-vs-para",
    lessons: at("a2", "por-vs-para-1", "por-vs-para-2", "por-vs-para-mastery-check"),
    practice: { a2: /por-para|por-vs-para|para-four-uses|por-four-uses/ },
  },
  {
    guide: "spanish-future-tense",
    lessons: [...at("a2", "future-tense-1", "future-tense-2"), ...at("a1", "a1r-mission-weekend-plans")],
    practice: { a2: /future-tense|future-endings|future-stems|ir-a-vs-future|future-probability/ },
  },
  {
    guide: "imperfect-subjunctive",
    lessons: at("b2", "imperfect-subjunctive-sequence-1", "imperfect-subjunctive-sequence-2"),
    practice: { b2: /imperfect-subjunctive|imperfecto-subjuntivo|imperfecto-deseos|imperfecto-formas|imperfecto-dictado|irregulares-imperfecto|como-si/ },
  },
  {
    guide: "si-clauses",
    lessons: [
      ...at("b1", "si-clauses-simple-1", "si-clauses-simple-2"),
      ...at("b2", "hypothetical-si-clauses-1", "hypothetical-si-clauses-2"),
    ],
    practice: { b1: /si-clauses|-si-presente|-si-futuro|-si-cuando|-si-mandato|-si-imperativo/, b2: /si-clauses|-si-corrige/ },
  },
  {
    guide: "spanish-commands",
    lessons: [
      ...at("b1", "commands-imperative-1", "commands-imperative-2"),
      ...at("b1", "vosotros-commands-1", "vosotros-commands-2"),
    ],
    practice: { b1: /commands|imperativo|mandatos/ },
  },
  {
    guide: "spanish-subjunctive",
    lessons: [
      ...at(
        "b1",
        "present-subjunctive-formation-1",
        "present-subjunctive-formation-2",
        "subjunctive-wishes-doubt-emotion-1",
        "subjunctive-wishes-doubt-emotion-2",
        "subjunctive-impersonal-ojala-1",
        "subjunctive-impersonal-ojala-2"
      ),
      ...at(
        "b2",
        "subjunctive-adjective-clauses-1",
        "subjunctive-adjective-clauses-2",
        "subjunctive-adverbial-clauses-1",
        "subjunctive-adverbial-clauses-2"
      ),
    ],
    practice: { b1: /subjunctive|subjuntivo|disparadores|ojala/, b2: /subjunctive-(adjective|adverbial)/ },
  },
];

// Review, spiral, challenge and cumulative lessons cover several topics at
// once, so linking one of them to a single guide would be misleading.
const MIXED_TOPIC = /(^|-)(review|spiral|challenge|cumulative|exit-ticket)(-|$)/;

/** The grammar guide (by slug) that covers a lesson's topic, if any. */
export function guideForLesson(levelPath: string, lessonSlug: string): string | null {
  for (const link of GUIDE_LESSON_LINKS) {
    if (link.lessons.some((l) => l.levelPath === levelPath && l.slug === lessonSlug)) return link.guide;
  }
  if (MIXED_TOPIC.test(lessonSlug)) return null;
  for (const link of GUIDE_LESSON_LINKS) {
    const pattern = link.practice?.[levelPath as SpanishLevelPath];
    if (pattern && pattern.test(lessonSlug)) return link.guide;
  }
  return null;
}

/** The lessons that teach a guide's topic, in course order. */
export function lessonsForGuide(guideSlug: string): LessonRef[] {
  return GUIDE_LESSON_LINKS.find((l) => l.guide === guideSlug)?.lessons ?? [];
}
