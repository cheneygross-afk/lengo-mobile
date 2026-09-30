// Synced from cheneygross-afk/lengo:src/lib/lessons/units.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { A1_LESSONS } from "./a1";
import { A2_LESSONS } from "./a2";
import { B1_LESSONS } from "./b1";
import { B2_LESSONS } from "./b2";
import { C1_LESSONS } from "./c1";
import { C2_LESSONS } from "./c2";
import { COSAS_COLOQUIALES_LESSONS } from "./c1c2-cosas-coloquiales";
import {
  SPANISH_LEVELS,
  firstIncompleteRequired,
  pickFurthestNext,
  type CompletedSlugs,
  type SpanishLevelPath,
} from "./levels";

// Units: each Spanish level's lessons grouped into short, named runs of
// roughly 8-15 required lessons ("Unit 4 · Ser vs. estar"), so a level of
// 120-460 lessons reads as ~10-35 units instead of one flat list. Both
// apps show them (the website's level pages, the app's lesson lists) and
// a learner can test out of a unit.
//
// Units follow the final course order from sequencing.ts. A unit is
// defined by the required lesson it starts with; it runs up to the next
// unit's start, so required lessons are always contiguous and none can
// fall between units. Optional Extra Practice lessons (one block per
// level, see sequencing.ts) come in drill groups -- a "*-drill-1" lesson
// and everything up to the next one -- and each group joins the unit
// whose topic it drills (`extras`), or, if no unit claims it, the unit
// just before the block. They're folded away under "Extra practice" in
// both apps.
//
// Everything is looked up by slug and throws on an unknown one, so a
// renamed lesson fails the build (as sequencing.ts does), and the content
// check (scripts/content-check) runs checkUnits() on every level.
//
// This file imports every level's lessons: fine on the server and in the
// app, but website client components should take unit outlines as props
// (unitOutlines) instead of importing it.

export type UnitLevelPath = SpanishLevelPath | "cosas-coloquiales";

/** The levels that have units, in course order (Cosas Coloquiales last). */
export const UNIT_LEVEL_PATHS: UnitLevelPath[] = ["a1", "a2", "b1", "b2", "c1", "c2", "cosas-coloquiales"];

type UnitDef = {
  /** Slug of the unit's first required lesson. */
  start: string;
  title: string;
  description: string;
  /** "*-drill-1" slugs of the optional drill groups that belong here. */
  extras?: string[];
};

const u = (start: string, title: string, description: string, extras?: string[]): UnitDef => ({
  start,
  title,
  description,
  extras,
});

const UNIT_DEFS: Record<UnitLevelPath, UnitDef[]> = {
  a1: [
    u("greetings-pronouns-ser-1", "Ser, articles & adjectives", "Greetings, subject pronouns, ser, el/la/un/una and making adjectives agree.", ["adjectives-gender-number-drill-1"]),
    u("present-tense-ar-verbs", "Present-tense verbs", "Regular -ar, -er and -ir verbs and the stem changers e→ie, o→ue, e→i.", ["present-tense-verbs-drill-1"]),
    u("a1r-word-web-jobs", "Ser vs. estar", "When to use ser and when estar, plus estar + gerund for right now.", ["ser-vs-estar-drill-1"]),
    u("possessives-prepositions", "Possessives, numbers & time", "Mi, tu, su, basic prepositions, numbers, prices and telling the time.", ["possessives-prepositions-drill-1", "numbers-time-drill-1"]),
    u("days-months-dates", "Dates & questions", "Days, months, dates, family words and asking questions.", ["question-words-drill-1"]),
    u("gustar-1", "Gustar & key irregular verbs", "Talking about likes with gustar, then tener, ir, hacer and hay.", ["gustar-drill-1", "tener-ir-hacer-hay-drill-1"]),
    u("a1r-word-web-house", "This & that, and A1 so far", "Este, ese, aquel, plus spiral reviews and vocabulary for places and feelings."),
    u("a1-final-review-1", "A1 final review", "Comprehensive review, challenges and the exit test for A2."),
  ],
  a2: [
    u("preterite-regular-verbs-1", "The preterite: regular verbs", "Saying what happened: regular preterite endings and spelling changes."),
    u("preterite-irregular-verbs-1", "Irregular preterites", "Fui, tuve, hice, dije and the other common irregular past forms.", ["preterite-drill-1"]),
    u("imperfect-tense-1", "The imperfect", "Describing how things were and what used to happen.", ["imperfect-drill-1"]),
    u("preterite-vs-imperfect-1", "Preterite vs. imperfect", "Choosing the right past tense: events, backgrounds and interruptions.", ["preterite-vs-imperfect-drill-1"]),
    u("a2-vocabulary-practice-1", "Telling stories in the past", "Both past tenses together, plus verbs that change meaning in the past."),
    u("direct-object-pronouns-1", "Direct object pronouns", "Lo, la, los, las, me, te, nos: replacing the object and where it goes."),
    u("indirect-object-pronouns-1", "Indirect object pronouns", "Le and les with dar, decir and gustar-type verbs; lo or le?", ["object-pronouns-drill-1"]),
    u("reflexive-verbs-daily-routine-1", "Reflexive verbs & routines", "Me levanto, te duchas: daily routines and verbs that change with se.", ["reflexive-verbs-drill-1"]),
    u("comparisons-superlatives-1", "Comparisons & superlatives", "Más que, menos que, tan/tanto como, mejor, peor, el más.", ["comparisons-superlatives-drill-1"]),
    u("future-tense-1", "The future tense", "Hablaré, tendré: plans, predictions and guesses about now.", ["future-tense-drill-1"]),
    u("por-vs-para-1", "Por vs. para", "The main uses of por and para, one pair at a time.", ["por-vs-para-drill-1"]),
    u("a2-vocabulary-practice-3", "Por vs. para in practice", "Mastery check, error hunts and quick calls on por and para."),
    u("personal-a", "Personal a & negatives", "The personal a, and nada, nadie, nunca with double negation.", ["personal-a-negation-mente-drill-1"]),
    u("mente-adverbs-1", "Adverbs & directions", "Adverbs in -mente, and asking for and giving directions."),
    u("at-the-restaurant-1", "At the restaurant", "Ordering, complaining politely and A2 spiral reviews."),
    u("a2r-word-web-travel", "Everyday words & past stories", "Word webs for travel, health, tech and work, and longer past-tense stories."),
    u("a2-comprehensive-review-1", "A2 review", "Comprehensive reviews and cumulative circuits across all of A2."),
    u("a2d-cumulative-circuit-3", "Cumulative circuits & challenges", "Irregular verbs, pronoun placement and the first A2 challenges."),
    u("a2r-challenge-buenos-aires-1", "A2 challenges & exit test", "A week in Buenos Aires, the past-tense gauntlet and the exit test for B1."),
  ],
  b1: [
    u("present-perfect-1", "The present perfect", "He comido, ¿alguna vez has…?: experiences, ya and todavía no."),
    u("present-subjunctive-formation-1", "The present subjunctive: forms", "Building the present subjunctive from the yo form.", ["subjunctive-formation-drill-1"]),
    u("b1d-circuito-cambios-raiz", "Subjunctive stem changes & irregulars", "Stem changes, spelling changes and sea, esté, vaya, sepa, dé, haya."),
    u("subjunctive-wishes-doubt-emotion-1", "Subjunctive: wishes, doubt & emotion", "Quiero que, no creo que, me alegro de que.", ["subjunctive-wishes-doubt-emotion-drill-1"]),
    u("b1r-dialogue-advice-column", "Wishes, doubt & emotion in practice", "Advice, reactions to news and choosing indicative, subjunctive or infinitive."),
    u("subjunctive-impersonal-ojala-1", "Impersonal expressions & ojalá", "Es importante que, es posible que, ojalá.", ["subjunctive-impersonal-ojala-drill-1"]),
    u("b1d-corrige-impersonales", "Ojalá & impersonal expressions in practice", "From general to personal, and more practice with doubt and wishes."),
    u("commands-imperative-1", "Commands", "Tú, usted, nosotros and negative commands.", ["commands-drill-1"]),
    u("b1d-rep-deseo-peticion-trabajo", "Commands with pronouns", "Dímelo, no me lo digas; tú or usted; recipes and instructions."),
    u("conditional-tense-1", "The conditional", "Hablaría, podría: polite requests and imagined situations.", ["conditional-tense-drill-1"]),
    u("b1r-contrast-future-conditional", "The conditional in practice", "Iré or iría, yo que tú, and what you'd do with a million."),
    u("si-clauses-simple-1", "If-clauses: si + present", "Si llueve, me quedo: real conditions and never the future after si.", ["si-clauses-drill-1"]),
    u("b1d-rep-imperativo-afirmativo-negativo-tu", "Conditions, commands & review", "Si + present with commands, and a spiral review of the first half."),
    u("past-perfect-1", "The past perfect", "Había hecho: the past before the past, and the three past tenses.", ["present-past-perfect-drill-1"]),
    u("b1r-tema-camino", "Past tenses in context", "Themed reviews and stories mixing the perfects, ojalá and relatives."),
    u("relative-pronouns-1", "Relative pronouns", "Que, quien, el que, lo que, and prepositions before them.", ["relative-pronouns-drill-1"]),
    u("b1r-build-combine-sentences", "Relative pronouns in practice", "Combining sentences, describing without the word, and error hunts."),
    u("b1-vocabulary-practice-7", "Mixed review: commands & wishes", "Irregular tú commands, usted commands and reported wishes."),
    u("passive-voice-se-1", "Passive & impersonal se", "Se vende, se venden, se dice: signs, ads and hiding the agent.", ["passive-voice-possessive-pronouns-drill-1"]),
    u("b1r-contrast-se-pasivo-impersonal", "Se in practice", "Passive or impersonal se at work, in the news and in themed reviews."),
    u("combined-object-pronouns-1", "Combined object pronouns", "Me lo, te la, se lo: two pronouns together."),
    u("b1d-rep-imperativo-ronda-mixta", "Double pronouns & mixed review", "Replacing everything, le lo errors and themed reviews."),
    u("b1d-rep-combinados-mandatos-dialogo", "Double pronouns with commands", "Tráemelo, no me lo des, dárselo, estoy diciéndotelo."),
    u("possessive-pronouns-1", "Possessive pronouns", "El mío, la tuya, los suyos: mi or el mío."),
    u("b1r-tema-admitir-errores", "Possessives & mixed review", "¿De quién es?, and review of perfects, commands and pronouns."),
    u("vosotros-commands-1", "Vosotros commands", "Hablad, comed, id: giving instructions to a group in Spain."),
    u("b1d-rep-ojala-impersonales-final", "B1 so far: spiral review", "Ojalá, the perfects, si-clauses and the two big spiral reviews."),
    u("b1r-tema-energia", "Vosotros in practice", "Levantaos, no os levantéis, and cumulative dictations."),
    u("b1-vocabulary-practice-10", "Word webs: emotions, opinions & nature", "B1 vocabulary by theme, with mixed practice."),
    u("b1r-word-web-kitchen", "Word webs: kitchen, money & news", "More themed vocabulary with pronoun and se review."),
    u("b1r-tema-talento-oculto", "Word webs: city & work", "The last word webs and the final cumulative circuit."),
    u("b1-comprehensive-review-1", "B1 review", "Comprehensive reviews and the first B1 challenges."),
    u("b1r-challenge-subjunctive-gauntlet", "B1 challenges & exit test", "Subjunctive, pasts and pronouns without hints, and the exit test for B2."),
  ],
  b2: [
    u("subjunctive-adjective-clauses-1", "Subjunctive in relative clauses", "Busco a alguien que sepa…, no hay nadie que…", ["subjunctive-adjective-clauses-drill-1"]),
    u("b2r-contrast-antecedent", "Relative clauses: which mood?", "Que sabe or que sepa, in ads, stories and quick calls."),
    u("subjunctive-adverbial-clauses-1", "Subjunctive after cuando, para que, aunque", "Time, purpose and concession clauses.", ["subjunctive-adverbial-clauses-drill-1"]),
    u("b2r-transform-infinitive-que", "Adverbial clauses in practice", "Para or para que, antes de or antes de que, and all the conjunctions."),
    u("imperfect-subjunctive-sequence-1", "The imperfect subjunctive", "Quería que vinieras: forms and the sequence of tenses.", ["imperfect-subjunctive-sequence-tenses-drill-1"]),
    u("b2r-dialogue-parents-wanted", "Sequence of tenses in practice", "Ojalá viniera, quisiera, and past requests."),
    u("hypothetical-si-clauses-1", "Hypothetical si-clauses", "Si tuviera tiempo, viajaría; como si.", ["hypothetical-si-clauses-drill-1"]),
    u("b2r-contrast-si-tengo-tuviera", "Si tuviera… in practice", "Real or unreal conditions, advice with si yo fuera tú."),
    u("conditional-perfect-pluperfect-subjunctive-1", "Would have: past hypotheticals", "Si hubiera sabido, habría ido: the conditional perfect and pluperfect subjunctive.", ["conditional-perfect-pluperfect-subjunctive-drill-1"]),
    u("b2-vocabulary-practice-3", "Regrets & past hypotheticals", "Mastery check, regrets, alternative history and habría or hubiera."),
    u("reported-speech-1", "Reported speech", "Dijo que estaba cansado: tense and time-word shifts.", ["reported-speech-drill-1"]),
    u("b2r-transform-voice-messages", "Reported speech in practice", "Passing on messages, questions and requests."),
    u("ser-estar-haber-nuanced-1", "Ser, estar & haber: nuances", "Es listo or está listo, events, and hay or está.", ["ser-estar-haber-nuanced-drill-1"]),
    u("b2r-error-hunt-ser-estar-haber", "Ser, estar & haber in practice", "Error hunts, character sketches and mixed review."),
    u("verbs-of-change-1", "Verbs of change", "Ponerse, volverse, hacerse, llegar a ser, convertirse en.", ["verbs-of-change-drill-1"]),
    u("b2-vocabulary-practice-7", "Verbs of change in practice", "Mastery check, biographies of change and mixed review."),
    u("advanced-connectors-1", "Advanced connectors", "Aunque, sin embargo, ya que, por lo tanto.", ["advanced-connectors-emphasis-drill-1"]),
    u("b2d-rep-adverbiales-mezcla-final", "Connectors in argument", "Formal letters, argumentative paragraphs and register."),
    u("emphasis-word-order-1", "Emphasis & word order", "El libro lo compré yo, fue Ana quien lo dijo: cleft sentences."),
    u("b2r-contrast-neutral-emphatic", "Emphasis in practice", "Neutral or emphatic, lo difícil que es, and themed reviews."),
    u("cuyo-el-cual-1", "Cuyo & el cual", "Advanced relatives: cuyo, el cual, según el cual."),
    u("b2r-transform-join-cuyo", "Formal relatives & spiral review", "Joining sentences with cuyo, and the B2 spiral reviews."),
    u("b2r-tema-tierra-familia", "Mixed review: B2 so far", "Themed reviews mixing every B2 structure."),
    u("b2-vocabulary-practice-10", "Word webs: arts, politics & dreams", "B2 vocabulary by theme, with mixed practice."),
    u("b2r-word-web-technology-ai", "Word webs: technology, media & mind", "Technology, decisions, media and psychology."),
    u("b2r-tema-aprender-idioma-nino", "Word webs: growth & debate", "The last word webs and the final cumulative circuit."),
    u("b2-comprehensive-review-1", "B2 review", "Comprehensive reviews and the first B2 challenges."),
    u("b2r-challenge-subjunctive-gauntlet", "B2 challenges & exit test", "Subjunctive, conditionals and reported speech without hints, and the exit test for C1."),
  ],
  c1: [
    u("subjunctive-mastery-review-1", "Subjunctive: advanced nuances", "Tense agreement, universal concessives and the softening subjunctive.", ["subjunctive-advanced-nuances-drill-1"]),
    u("concessive-aunque-1", "Aunque & concessive clauses", "Aunque with each mood, and six ways to concede."),
    u("nominalization-part-1-1", "Nominalization", "Turning verbs into nouns for a formal register.", ["nominalization-drill-1"]),
    u("gerund-infinitive-advanced-part-1-1", "Gerund vs. infinitive", "Advanced uses, the gerund of posteriority and progressive periphrases.", ["gerundio-vs-infinitivo-drill-1"]),
    u("passive-impersonal-mastery-1", "Passive voice & impersonal se", "Three ways to hide the agent, and the many uses of se.", ["passive-voice-impersonal-se-drill-1"]),
    u("free-indirect-style-part-1-1", "Free indirect style & narration", "Direct, indirect and free indirect speech in literary narration.", ["estilo-indirecto-libre-drill-1"]),
    u("por-para-precision-1", "Por & para: professional precision", "Por and para in contracts, business and fixed expressions."),
    u("ser-estar-haber-limits-part-1-1", "Ser, estar & haber: borderline cases", "Evaluative adjectives, events and hybrid cases.", ["ser-estar-haber-casos-limite-drill-1"]),
    u("prepositional-verbs-part-1-1", "Verbs with prepositions", "Verbs that need a, de, en or con; queísmo and dequeísmo.", ["verbos-preposicionales-drill-1"]),
    u("advanced-discourse-markers-1", "Discourse markers", "Ahora bien, dicho esto, en definitiva: cohesive texts."),
    u("emphatic-structures-1", "Emphasis & focus", "Cleft sentences, lo que and lo + adjective + que."),
    u("future-conditional-conjecture-1", "Guessing with the future & conditional", "¿Qué habrá pasado?: conjecture about the present and past."),
    u("formal-informal-register-1", "Tú, usted & vos: register", "Choosing and switching forms of address."),
    u("voseo-part-1-1", "Voseo", "Vos forms and their regional varieties.", ["el-voseo-drill-1"]),
    u("regional-lexical-variation-1", "Regional vocabulary", "Everyday words that change from country to country."),
    u("neutral-vs-colloquial-1", "Neutral vs. colloquial Spanish", "Filler words, tone and writing for all of Latin America."),
    u("formal-correspondence-1", "Formal letters & emails", "Greetings, closings, complaints and follow-ups."),
    u("academic-essay-writing-part-1-1", "Academic writing & essays", "Thesis, hedging, depersonalizing and abstracts."),
    u("c1r-challenge-big-error-hunt", "C1 challenges & exit test", "Every C1 structure without hints, and the C1 exit test."),
  ],
  c2: [
    u("legal-administrative-spanish-part-1-1", "Legal & administrative Spanish", "Legal language made plain, Latin terms and who's who in a case.", ["espanol-juridico-administrativo-drill-1"]),
    u("legal-administrative-spanish-part-2-1", "Contracts & official notices", "Clauses, liability, notices and the notary."),
    u("medical-health-spanish-1", "Medical Spanish", "Symptoms, clinical reports, dosage and informed consent.", ["espanol-medico-drill-1"]),
    u("everyday-idioms-1", "Idioms", "Idioms, their restrictions, regional variants and common calques.", ["modismos-expresiones-idiomaticas-drill-1"]),
    u("proverbs-sayings-1", "Proverbs & sayings", "Completing, contrasting and quoting refranes, old and regional.", ["refranes-dichos-populares-drill-1"]),
    u("humor-wordplay-1", "Humor & wordplay", "Double meanings, irony and humor by country."),
    u("figurative-language-1", "Metaphor & figurative language", "Metaphor, metonymy, literary figures, euphemism and irony.", ["metaforas-eufemismos-lenguaje-figurado-drill-1"]),
    u("euphemisms-indirect-1", "Euphemisms & indirect language", "Saying delicate things, and what's meant but not said."),
    u("exclamations-emphasis-1", "Exclamations, diminutives & augmentatives", "Reacting like a native, and what -ito, -ón and -azo really add."),
    u("c1c2-vocabulary-practice-11", "Business idioms", "Idioms for meetings, crises and reports, plus Latin phrases."),
    u("listening-reading-strategies-1", "Listening & reading strategies", "Guessing unknown words, register shifts and fast speech."),
    u("listening-reading-strategies-5", "Skimming, scanning & note-taking", "Radio interviews, reading modes and lecture notes."),
    u("debate-persuasion-1", "Debate & persuasion", "Conceding, refuting, learned connectors and spotting fallacies.", ["registro-argumentacion-debate-negociacion-drill-1"]),
    u("debate-persuasion-6", "Rhetoric & closing arguments", "Rhetorical devices, strong conclusions and debate vocabulary."),
    u("presentations-negotiation-1", "Presentations & negotiation", "Openings, transitions and counteroffers."),
    u("presentations-negotiation-5", "Closing the deal", "Body language, Q&A sessions and agreements in writing."),
    u("citations-references-1", "Citations & references", "Quoting, attribution verbs and the critical apparatus."),
    u("citations-references-5", "Paraphrase & literature reviews", "Paraphrase or plagiarism, and writing the state of the question."),
    u("rhetorical-questions-1", "Rhetorical questions", "Real or rhetorical, hypophora and interrogative series."),
    u("rhetorical-questions-5", "Rhetorical questions in speeches", "Replying to rhetorical questions and a one-minute speech."),
    u("job-interview-spanish-1", "Job interviews", "Strengths, weaknesses and the STAR method."),
    u("job-interview-spanish-5", "Job interviews: the full mock", "Pitfalls, CV vocabulary and a complete mock interview."),
    u("conflict-resolution-1", "Conflict resolution & mediation", "De-escalating, acknowledging without conceding, and apologies."),
    u("historical-narrative-1", "Historical narrative", "Narrative imperfect, pretérito anterior, historical present and free indirect style."),
    u("historical-narrative-6", "Writing history", "Narrative connectors, the historian's voice, learned register and periodization."),
    u("science-technology-spanish-1", "Science & technology", "The language of hypotheses, innovation and popular science."),
    u("environment-politics-spanish-1", "Environment & politics", "Climate vocabulary, polarized and deliberative language."),
    u("philosophy-abstract-concepts-1", "Philosophy & abstract ideas", "Free will, abstract nouns and analyzing arguments."),
    u("psychology-emotions-1", "Psychology & complex emotions", "Ambivalence, nuanced feelings and naming emotions."),
    u("art-film-literature-criticism-1", "Art, film & literary criticism", "Plot, character, film language and evaluative adjectives."),
    u("business-economics-spanish-1", "Business & economics", "Cause and effect, financial statements, inflation news and mergers.", ["negocios-economia-drill-1"]),
    u("creative-writing-techniques-1", "Creative writing", "Foreshadowing, imagery and a 100-word microstory."),
    u("c1c2-comprehensive-review-1", "C2 review & mastery exam", "Comprehensive reviews, C2 challenges and the mastery exam."),
  ],
  "cosas-coloquiales": [
    u("festivals-traditions-hispanic-world-1", "Fiestas & food culture", "Festivals, traditions, the sobremesa and table manners."),
    u("soccer-popular-passion-1", "Football & music", "The language of football and the music map of the Hispanic world."),
    u("superstitions-folk-beliefs-1", "Superstitions & social customs", "Folk beliefs, New Year rituals, piropos and compliments."),
  ],
};

const LESSONS: Record<UnitLevelPath, Lesson[]> = {
  a1: A1_LESSONS,
  a2: A2_LESSONS,
  b1: B1_LESSONS,
  b2: B2_LESSONS,
  c1: C1_LESSONS,
  c2: C2_LESSONS,
  "cosas-coloquiales": COSAS_COLOQUIALES_LESSONS,
};

export type CourseUnit = {
  /** Stable id: "<levelPath>-<slug of its first lesson>". */
  id: string;
  levelPath: UnitLevelPath;
  /** 1-based within the level. */
  number: number;
  /** "Ser vs. estar" */
  title: string;
  /** "Unit 3 · Ser vs. estar" */
  label: string;
  description: string;
  /** The unit's required lessons, in course order. */
  required: Lesson[];
  /** Its optional Extra Practice lessons, in course order. */
  optional: Lesson[];
};

/** A unit without its lesson objects, small enough to pass to a website
 * client component that already has the level's lessons. */
export type UnitOutline = Omit<CourseUnit, "required" | "optional"> & {
  requiredSlugs: string[];
  optionalSlugs: string[];
};

/** Longest a unit may run (in required lessons) before it must be split. */
export const UNIT_MAX_REQUIRED = 15;
export const UNIT_MIN_REQUIRED = 6;

function buildUnits(levelPath: UnitLevelPath, lessons: Lesson[], defs: UnitDef[]): CourseUnit[] {
  const fail = (msg: string): never => {
    throw new Error(`units (${levelPath}): ${msg}`);
  };
  const required = lessons.filter((l) => !l.optional);
  const starts = defs.map((d) => {
    const i = required.findIndex((l) => l.slug === d.start);
    if (i === -1) fail(`"${d.start}" is not a required lesson of the level`);
    return i;
  });
  if (starts[0] !== 0) fail(`the first unit must start at "${required[0]?.slug}"`);
  starts.forEach((s, i) => {
    if (i > 0 && s <= starts[i - 1]) fail(`"${defs[i].start}" starts before the unit above it`);
  });

  const units: CourseUnit[] = defs.map((d, i) => ({
    id: `${levelPath}-${d.start}`,
    levelPath,
    number: i + 1,
    title: d.title,
    label: `Unit ${i + 1} · ${d.title}`,
    description: d.description,
    required: required.slice(starts[i], i + 1 < starts.length ? starts[i + 1] : required.length),
    optional: [],
  }));
  const unitOfRequired = new Map<string, CourseUnit>();
  for (const unit of units) for (const l of unit.required) unitOfRequired.set(l.slug, unit);

  // Optional drill groups: each "*-drill-N" run plus the lessons after it.
  const claimedBy = new Map<string, CourseUnit>();
  defs.forEach((d, i) => {
    for (const head of d.extras ?? []) {
      const lesson = lessons.find((l) => l.slug === head);
      if (!lesson || !lesson.optional) fail(`extra "${head}" is not an optional lesson of the level`);
      if (claimedBy.has(head)) fail(`extra "${head}" is claimed twice`);
      claimedBy.set(head, units[i]);
    }
  });
  let home: CourseUnit | undefined;
  let lastRequired: CourseUnit | undefined;
  for (const lesson of lessons) {
    if (!lesson.optional) {
      lastRequired = unitOfRequired.get(lesson.slug);
      home = undefined;
      continue;
    }
    if (!home || /-drill-1$/.test(lesson.slug)) {
      home = claimedBy.get(lesson.slug) ?? lastRequired ?? units[0];
    }
    home.optional.push(lesson);
  }
  return units;
}

const cache = new Map<UnitLevelPath, CourseUnit[]>();

/** A level's units, in course order. */
export function unitsFor(levelPath: UnitLevelPath): CourseUnit[] {
  let units = cache.get(levelPath);
  if (!units) {
    units = buildUnits(levelPath, LESSONS[levelPath], UNIT_DEFS[levelPath]);
    cache.set(levelPath, units);
  }
  return units;
}

export function isUnitLevelPath(levelPath: string): levelPath is UnitLevelPath {
  return (UNIT_LEVEL_PATHS as string[]).includes(levelPath);
}

/** The unit a lesson belongs to (by slug), if its level has units. */
export function unitOf(levelPath: string, slug: string): CourseUnit | undefined {
  if (!isUnitLevelPath(levelPath)) return undefined;
  return unitsFor(levelPath).find((u) => u.required.some((l) => l.slug === slug) || u.optional.some((l) => l.slug === slug));
}

export function findUnit(levelPath: string, unitId: string): CourseUnit | undefined {
  if (!isUnitLevelPath(levelPath)) return undefined;
  return unitsFor(levelPath).find((u) => u.id === unitId);
}

export function unitOutlines(levelPath: UnitLevelPath): UnitOutline[] {
  return unitsFor(levelPath).map(({ required, optional, ...rest }) => ({
    ...rest,
    requiredSlugs: required.map((l) => l.slug),
    optionalSlugs: optional.map((l) => l.slug),
  }));
}

export type NextLesson = { levelPath: UnitLevelPath; lesson: Lesson; unit: CourseUnit };

/** The next required lesson the learner hasn't completed in a level, in
 * course order, with its unit; null when the level's required path is done. */
export function nextRequiredLesson(level: UnitLevelPath, completedSlugs: CompletedSlugs): NextLesson | null {
  const lesson = firstIncompleteRequired(LESSONS[level], completedSlugs);
  if (!lesson) return null;
  return { levelPath: level, lesson, unit: unitOf(level, lesson.slug)! };
}

/** Where to continue across A1-C2: the next required lesson in the
 * furthest level the learner has started (or the next level, once that
 * one is done; A1's first lesson for a new learner). Cosas Coloquiales
 * is a side module and never counts. Null when all of A1-C2 is done.
 * Slugs are unique across levels, so one merged set of every level's
 * completions is fine. */
export function furthestLevelNext(completedSlugs: CompletedSlugs): NextLesson | null {
  const found = pickFurthestNext(
    SPANISH_LEVELS.map((l) => ({ levelPath: l.levelPath as UnitLevelPath, lessons: LESSONS[l.levelPath] })),
    completedSlugs
  );
  if (!found) return null;
  return { ...found, unit: unitOf(found.levelPath, found.lesson.slug)! };
}

/**
 * Everything the content check verifies about units, as a list of
 * problems (empty when all is well): every lesson of every level is in
 * exactly one unit, units' required lessons are contiguous and in course
 * order, and every unit has a sensible number of required lessons.
 */
export function checkUnits(): string[] {
  const problems: string[] = [];
  for (const levelPath of UNIT_LEVEL_PATHS) {
    let units: CourseUnit[];
    try {
      units = unitsFor(levelPath);
    } catch (e) {
      problems.push((e as Error).message);
      continue;
    }
    const lessons = LESSONS[levelPath];
    const seen = new Map<string, number>();
    for (const unit of units) for (const l of [...unit.required, ...unit.optional]) seen.set(l.slug, (seen.get(l.slug) ?? 0) + 1);
    for (const l of lessons) {
      const n = seen.get(l.slug) ?? 0;
      if (n !== 1) problems.push(`units (${levelPath}): "${l.slug}" is in ${n} units`);
    }
    if (seen.size !== lessons.length) problems.push(`units (${levelPath}): units hold lessons that aren't in the level`);
    const order = units.flatMap((unit) => unit.required.map((l) => l.slug)).join(" ");
    if (order !== lessons.filter((l) => !l.optional).map((l) => l.slug).join(" ")) {
      problems.push(`units (${levelPath}): required lessons aren't contiguous in course order`);
    }
    for (const unit of units) {
      if (unit.optional.some((l) => !l.optional) || unit.required.some((l) => l.optional)) {
        problems.push(`units (${levelPath}): ${unit.label} mixes up required and optional lessons`);
      }
      const n = unit.required.length;
      const min = levelPath === "cosas-coloquiales" ? 4 : UNIT_MIN_REQUIRED;
      if (n < min || n > UNIT_MAX_REQUIRED) {
        problems.push(`units (${levelPath}): ${unit.label} has ${n} required lessons (keep it ${min}-${UNIT_MAX_REQUIRED})`);
      }
      if (!unit.required.some((l) => l.exercises.length > 0)) {
        problems.push(`units (${levelPath}): ${unit.label} has no exercises to test out with`);
      }
    }
  }
  return problems;
}
