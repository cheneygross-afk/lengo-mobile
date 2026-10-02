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
// (reflexive verbs are an A1 guide, but A1 only teaches routine phrases
// like me levanto and A2 the full pattern), so every entry names
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
// comes before the general subjunctive one, which is last; si clauses before
// commands).
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
    lessons: [
      ...at("a1", "saber-vs-conocer", "saber-vs-conocer-mastery-check"),
      ...at("a2", "a2d-minimal-pairs-meaning-shift", "preterite-vs-imperfect-drill-3"),
    ],
  },
  {
    guide: "preterite-vs-imperfect",
    lessons: at("a2", "preterite-vs-imperfect-1", "preterite-vs-imperfect-2", "preterite-vs-imperfect-mastery-check"),
    practice: { a2: /pret-imp|preterite-vs-imperfect/ },
  },
  {
    guide: "reflexive-verbs",
    lessons: [...at("a1", "a1-my-day-routine"), ...at("a2", "reflexive-verbs-daily-routine-1", "reflexive-verbs-daily-routine-2")],
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
      ...at("a2", "a2-double-pronouns-me-lo", "a2-double-pronouns-infinitive-command"),
      ...at("b1", "combined-object-pronouns-1", "combined-object-pronouns-2"),
    ],
    practice: {
      a2: /object-pronoun|-dop$|-iop$|replace-object|me-te-nos-direct|double-pronoun|se-lo/,
      b1: /combined-object|combined-pronouns|double-pronouns|combinados|se-lo/,
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
      ...at("a2", "a2g-tu-commands-regular", "a2g-tu-commands-irregular"),
      ...at("b1", "commands-imperative-1", "commands-imperative-2"),
    ],
    practice: { b1: /commands|imperativo|mandatos/ },
  },
  // ---- Guides added with the full grammar reference (A1 to C2). They come
  // after the original twelve so a lesson that both lists keeps pointing at
  // the original guide.
  // A1
  {
    guide: "spanish-subject-pronouns",
    lessons: at("a1", "greetings-pronouns-ser-1", "greetings-pronouns-ser-2"),
  },
  {
    guide: "spanish-articles-and-gender",
    lessons: at("a1", "gender-number-articles-1", "gender-number-articles-2"),
    practice: { a1: /articles/ },
  },
  {
    guide: "spanish-adjective-agreement",
    lessons: at("a1", "adjective-agreement"),
    practice: { a1: /agreement|adjectives-gender|buen-gran/ },
  },
  {
    guide: "present-tense-regular-verbs",
    lessons: at("a1", "present-tense-ar-verbs", "present-tense-er-ir-verbs-1", "present-tense-er-ir-verbs-2"),
    practice: { a1: /ar-verbs|er-ir|present-tense-verbs|present-traps/ },
  },
  {
    guide: "stem-changing-verbs",
    lessons: at("a1", "stem-changing-verbs-e-ie", "stem-changing-verbs-o-ue-e-i"),
    practice: { a1: /stem-chang/, a2: /stem-groups/, b1: /stem-changes/ },
  },
  {
    guide: "hay-vs-estar",
    lessons: at("a1", "a1r-contrast-hay-esta"),
  },
  {
    guide: "irregular-present-tense-verbs",
    lessons: at("a1", "tener-ir-hacer-hay-1", "tener-ir-hacer-hay-2"),
    practice: { a1: /tener-ir-hacer-hay/ },
  },
  {
    guide: "spanish-demonstratives",
    lessons: at("a1", "demonstratives-1", "demonstratives-2"),
    practice: { a1: /demonstratives/ },
  },
  {
    guide: "spanish-possessives",
    lessons: [...at("a1", "possessives-prepositions"), ...at("b1", "possessive-pronouns-1", "possessive-pronouns-2")],
    practice: { a1: /possessives/, b1: /possessive-pronouns|posesivos/ },
  },
  {
    guide: "spanish-question-words",
    lessons: at("a1", "question-words"),
    practice: { a1: /question-words|que-cual|build-question|interview-lab/ },
  },
  {
    guide: "present-progressive",
    lessons: at("a1", "present-progressive"),
  },
  {
    guide: "prepositions-a-en-de-con",
    lessons: at("a1", "possessives-prepositions", "a1r-error-hunt-questions-prepositions"),
  },
  // A2
  {
    guide: "personal-a",
    lessons: at("a2", "personal-a"),
    practice: { a2: /personal-a/ },
  },
  {
    guide: "spanish-accent-marks",
    lessons: at("a2", "a2g-spelling-stress-rules", "a2g-accent-pairs", "a2r-error-hunt-preterite-spelling", "mente-adverbs-1"),
  },
  {
    guide: "spanish-preterite-tense",
    lessons: at("a2", "preterite-regular-verbs-1", "preterite-regular-verbs-2"),
    practice: { a2: /preterite/ },
  },
  {
    guide: "irregular-preterite-verbs",
    lessons: at("a2", "preterite-irregular-verbs-1", "preterite-irregular-verbs-2"),
    practice: { a2: /irregulars|irregular-vs-regular/ },
  },
  {
    guide: "spanish-imperfect-tense",
    lessons: at("a2", "imperfect-tense-1", "imperfect-tense-2"),
    practice: { a2: /imperfect/ },
  },
  {
    guide: "comparisons-and-superlatives",
    lessons: at("a2", "comparisons-superlatives-1", "comparisons-superlatives-2"),
    practice: { a2: /compar|mas-menos|isimo/ },
  },
  {
    guide: "spanish-negative-words",
    lessons: at("a2", "negation-words-1", "negation-words-2"),
    practice: { a2: /negation|negative/ },
  },
  {
    guide: "adverbs-ending-in-mente",
    lessons: at("a2", "mente-adverbs-1", "mente-adverbs-2"),
    practice: { a2: /mente/ },
  },
  // B1
  {
    guide: "present-perfect",
    lessons: [
      ...at("a2", "a2-perfect-he-comido", "a2-perfect-irregular-participles", "a2-perfect-ya-todavia-alguna-vez", "a2-perfect-vs-preterite"),
      ...at("b1", "present-perfect-1", "present-perfect-2"),
    ],
    practice: { a2: /a2-perfect/, b1: /present-perfect|present-past-perfect|perfecto|perfects|perfect-preterite|participi|he-has-ha|ya-todavia|alguna-vez|have-you-ever/ },
  },
  {
    guide: "spanish-pluperfect",
    lessons: at("b1", "past-perfect-1", "past-perfect-2"),
    practice: { b1: /pluscuam|habia|past-perfect|pluperfect|tres-pasados|three-pasts|past-before-past/ },
  },
  {
    guide: "spanish-conditional-tense",
    lessons: at("b1", "conditional-tense-1", "conditional-tense-2"),
    practice: { b1: /conditional|condicional|cortesia|million|millon|que-harias|yo-que-tu|polite-requests/ },
  },
  {
    guide: "subjunctive-wishes-emotions-doubt",
    lessons: at("b1", "subjunctive-wishes-doubt-emotion-1", "subjunctive-wishes-doubt-emotion-2"),
    practice: {
      b1: /wishes-doubt|deseo|duda|emocion|disparadores|creo-no-creo|creer-dudar|reacciones|afirmar-negar|opiniones|hecho-reaccion|mismo-sujeto|infinitivo-que|wde|reacting/,
    },
  },
  {
    guide: "subjunctive-impersonal-expressions",
    lessons: at("b1", "subjunctive-impersonal-ojala-1", "subjunctive-impersonal-ojala-2"),
    practice: { b1: /impersonal|ojala|es-importante|es-verdad|es-posible|valoraciones/ },
  },
  {
    guide: "vosotros-commands",
    lessons: at("b1", "vosotros-commands-1", "vosotros-commands-2"),
    practice: { b1: /vosotros|hablad|levantaos|usted-ustedes|usted-consulta/ },
  },
  {
    guide: "relative-pronouns",
    lessons: at("b1", "relative-pronouns-1", "relative-pronouns-2", "relative-pronouns-mastery-check"),
    practice: { b1: /relative|relativos|une-con-que|que-lo-que|combine-sentences|donde-en-que|dos-frases-una|who-is-who/ },
  },
  {
    guide: "passive-and-impersonal-se",
    lessons: at("b1", "passive-voice-se-1", "passive-voice-se-2", "b1g-accidental-se"),
    practice: {
      b1: /passive|pasivo|se-vende|anuncios|letreros|signs|newspaper|rep-se-|ronda-rapida-se|receta-se|se-negocios|se-ciudad|se-final|se-possessives|ser-a-se/,
    },
  },
  {
    guide: "verbs-with-prepositions",
    lessons: at("c1", "prepositional-verbs-part-1-1", "prepositional-verbs-part-1-2", "prepositional-verbs-part-2-1", "prepositional-verbs-part-2-2"),
    practice: { c1: /prepositional-verbs|verbos-preposicionales|prep-verbs/ },
  },
  {
    guide: "spanish-verb-periphrases",
    lessons: [
      ...at("b1", "b1g-periphrases-infinitive", "b1g-periphrases-gerund"),
      ...at("c1", "c1r-extra-periphrasis-aspect", "c1r-contrast-progressive-periphrases", "c1r-contrast-seguir-dejar"),
    ],
  },
  // B2
  {
    guide: "subjunctive-adjective-clauses",
    lessons: [
      ...at("b1", "b1g-subjunctive-relative-clauses"),
      ...at("b2", "subjunctive-adjective-clauses-1", "subjunctive-adjective-clauses-2"),
    ],
    practice: {
      b2: /adjective-clauses|relativa|relative-subjunctive|busco|busque|buscaba|no-hay-nadie|cualquiera|hay-alguien|antecedent|wanted-ads|pareja-ideal|ideal-partner/,
    },
  },
  {
    guide: "subjunctive-adverbial-clauses",
    lessons: at("b2", "subjunctive-adverbial-clauses-1", "subjunctive-adverbial-clauses-2"),
    practice: {
      b2: /adverbial|adverbiales|cuando|antes-de-que|para-que|conjunciones|time-conjunctions|sin-que|por-si|infinitive-que|unir-oraciones|plan-event/,
    },
  },
  {
    guide: "sequence-of-tenses",
    lessons: at("b2", "b2r-transform-sequence-of-tenses", "b2d-corrige-secuencia", "b2d-linea-secuencia-completa"),
    practice: { b2: /secuencia|presente-pasado|quiero-queria/ },
  },
  {
    guide: "reported-speech",
    lessons: at("b2", "reported-speech-1", "reported-speech-2"),
    practice: {
      b2: /reported-speech|estilo-indirecto|dijo-que|indirect|mensajes|retroceso|que-te-dijo|verbos-introductores|telefono-roto|broken-telephone|decir-que|meeting-minutes|acta|gossip|voice-messages|marcadores-tiempo|informar-o-pedir/,
    },
  },
  {
    guide: "pluperfect-subjunctive-and-conditional-perfect",
    lessons: at(
      "b2",
      "conditional-perfect-pluperfect-subjunctive-1",
      "conditional-perfect-pluperfect-subjunctive-2",
      "conditional-perfect-pluperfect-subjunctive-mastery-check"
    ),
    practice: {
      b2: /conditional-perfect|condicional-perfecto|hubiera|habria|irreal-pasado|reproches|reproaches|regrets|arrepentimientos|type-three|alternative|mixtas|otra-epoca/,
    },
  },
  {
    guide: "ser-and-estar-with-adjectives",
    lessons: [
      ...at("b2", "b2d-pares-ser-estar-adjetivos", "b2r-contrast-meaning-adjectives"),
      ...at("c1", "c1r-extra-ser-estar-adjective-meaning"),
    ],
    practice: { b2: /ser-estar-participle|ser-estar-participio/ },
  },
  {
    guide: "verbs-of-change",
    lessons: at("b2", "verbs-of-change-1", "verbs-of-change-2", "verbs-of-change-mastery-check"),
    practice: { b2: /verbs-of-change|verbos-cambio|ponerse|volverse|hacerse|adjective-to-change|adjetivo-cambio|cambio|biograph|before-after|old-classmates/ },
  },
  {
    guide: "cuyo-and-el-cual",
    lessons: at("b2", "cuyo-el-cual-1", "cuyo-el-cual-2"),
    practice: { b2: /cuyo|el-cual|formal-text|texto-formal/ },
  },
  {
    guide: "spanish-connectors",
    lessons: at("b2", "advanced-connectors-1", "advanced-connectors-2"),
    practice: {
      b2: /connectors|conectores|conector|causa-consecuencia|sin-embargo|argument|letter-to-editor|carta-formal|aunque-a-pesar/,
    },
  },
  {
    guide: "emphasis-and-word-order",
    lessons: [
      ...at("b2", "emphasis-word-order-1", "emphasis-word-order-2"),
      ...at("c1", "emphatic-structures-1", "emphatic-structures-2"),
    ],
    practice: { b2: /emphasis|enfasis|enfatico|emphatic|hendidas|cleft|anteposicion|lo-adjetivo/, c1: /emphatic|enfatic/ },
  },
  // C1
  {
    guide: "concessive-clauses-aunque",
    lessons: at("c1", "concessive-aunque-1", "concessive-aunque-2"),
    practice: { b2: /aunque/, c1: /concessive|aunque/ },
  },
  {
    guide: "gerund-vs-infinitive",
    lessons: at("c1", "gerund-infinitive-advanced-part-1-1", "gerund-infinitive-advanced-part-2-1"),
    practice: { b1: /gerundio/, c1: /gerund|gerundio/ },
  },
  {
    guide: "future-and-conditional-of-probability",
    lessons: [
      ...at("b1", "b1g-probability-future-conditional", "b1g-future-perfect"),
      ...at("c1", "future-conditional-conjecture-1", "future-conditional-conjecture-2"),
    ],
    practice: { c1: /conjecture|probability/ },
  },
  {
    guide: "discourse-markers",
    lessons: at("c1", "advanced-discourse-markers-1", "advanced-discourse-markers-2"),
    practice: { c1: /discourse-markers|markers|marcadores/ },
  },
  {
    guide: "spanish-punctuation",
    lessons: at("c1", "c1r-sort-greetings-closings", "formal-correspondence-1"),
  },
  {
    guide: "register-and-politeness",
    lessons: at("c1", "formal-informal-register-1", "formal-informal-register-2"),
    practice: { c1: /register|registro|formal-correspondence|softening|neutral-vs-colloquial/ },
  },
  {
    guide: "voseo",
    lessons: [...at("a2", "a2g-vos-vosotros"), ...at("c1", "voseo-part-1-1", "voseo-part-2-1")],
    practice: { c1: /voseo/ },
  },
  {
    guide: "leismo-laismo-loismo",
    lessons: at("c1", "c1g-leismo", "c1g-laismo-loismo"),
  },
  {
    guide: "nominalization",
    lessons: at("c1", "nominalization-part-1-1", "nominalization-part-2-1"),
    practice: { c1: /nominali|el-hecho-de-que/ },
  },
  // C2
  {
    guide: "diminutives-and-augmentatives",
    lessons: [...at("a2", "a2g-diminutives"), ...at("c2", "diminutives-augmentatives-1", "diminutives-augmentatives-2")],
    practice: { c2: /diminutive|augmentative/ },
  },
  {
    guide: "future-subjunctive",
    lessons: at("c2", "legal-administrative-spanish-part-1-1", "c2r-extra-proverbs-rhythm"),
    practice: { c2: /legal-subjunctive/ },
  },
  {
    guide: "narrative-tenses-and-historical-present",
    lessons: at("c2", "historical-narrative-1", "c2r-history-historical-present"),
    practice: { c2: /historical-narrative|historical-present|history-/ },
  },
  // The general subjunctive guide goes last so the topic-specific
  // subjunctive guides above claim their lessons first.
  {
    guide: "spanish-subjunctive",
    lessons: [
      ...at(
        "b1",
        "present-subjunctive-formation-1",
        "present-subjunctive-formation-2"
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
