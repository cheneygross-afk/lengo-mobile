// Synced from cheneygross-afk/lengo:src/lib/fr-placementTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./lessons/types";

// The French course's placement test (/lessons/fr/placement): the same
// two-stage adaptive design as the Spanish one (src/lib/placementTest.ts),
// shorter, with its own questions.
//
//   Stage 1 (the router): 12 questions, two per level from A1 to C2, in
//   rising difficulty. The number right picks a band of two adjacent
//   levels (routeBand).
//   Stage 2: the four questions of each of the band's two levels (8), so
//   20 questions in all, whoever takes it (36 in the bank).
//
// The recommendation is the first level with gaps: the band's lower level
// if it fails, else its upper level if that fails, else the level above
// the band. A level in the band passes with STAGE2_PASS of its four
// stage-2 questions right.
//
// Instructions are in English for every level; the French is metropolitan
// French and sits in "double quotes" inside English text, so the French
// voice reads it. Listening items are played with the course's
// text-to-speech. Each question links to a lesson of its level that
// teaches the point (/lessons/fr/<level>/<slug>); scripts/check-french-guides.ts
// checks those slugs exist.

export type FrPlacementLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type FrPlacementSkill = "grammar" | "vocabulary" | "reading" | "listening";

export type FrPlacementQuestion = Exercise & {
  /** Stable id: answers and saved progress are keyed by it. */
  id: string;
  level: FrPlacementLevel;
  skill: FrPlacementSkill;
  /** Slug of the lesson (at this question's level) that teaches the point. */
  relatedLessonSlug: string;
};

export const FR_PLACEMENT_LEVELS: FrPlacementLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const mc = (
  id: string,
  level: FrPlacementLevel,
  skill: FrPlacementSkill,
  relatedLessonSlug: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): FrPlacementQuestion => ({ id, level, skill, relatedLessonSlug, type: "multiple-choice", question, options, correctIndex, explanation });

const listen = (
  id: string,
  level: FrPlacementLevel,
  relatedLessonSlug: string,
  audio: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): FrPlacementQuestion => ({ id, level, skill: "listening", relatedLessonSlug, type: "listen-choose", audio, question, options, correctIndex, explanation });

// A typed answer, asked as a translation: `en` is the English sentence with
// [brackets] around the words the blank stands for.
const typed = (
  id: string,
  level: FrPlacementLevel,
  skill: FrPlacementSkill,
  relatedLessonSlug: string,
  sentence: string,
  answer: string,
  en: string,
  explanation: string,
  altAnswers?: string[],
): FrPlacementQuestion => ({
  id,
  level,
  skill,
  relatedLessonSlug,
  type: "fill-blank",
  prompt: "How do you say the bold words in French?",
  sentence,
  answer,
  en,
  ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
  explanation,
});

// ---- Stage 1: the router (2 per level, easiest first) ------------------

export const FR_ROUTER_QUESTIONS: FrPlacementQuestion[] = [
  mc(
    "fr-r-a1-etre",
    "A1",
    "grammar",
    "a1-greetings-etre-1",
    "Nous ___ étudiants à Lyon.",
    ["sommes", "êtes", "sont", "avons"],
    0,
    "\"Nous sommes\": être with nous. \"Vous êtes\" is you, \"ils sont\" is they, and \"avons\" belongs to avoir.",
  ),
  listen(
    "fr-r-a1-family",
    "A1",
    "a1-word-web-family",
    "J'ai deux frères et une sœur.",
    "What did you hear?",
    ["I have two brothers and a sister.", "I have two sisters and a brother.", "I have two brothers and no sister.", "My brother has two sisters."],
    0,
    "\"J'ai deux frères et une sœur\": \"frères\" are brothers, \"une sœur\" is one sister.",
  ),
  mc(
    "fr-r-a2-pc-etre",
    "A2",
    "grammar",
    "a2-passe-compose-etre-1",
    "Hier soir, elle ___ au cinéma avec ses amis.",
    ["est allée", "a allé", "est allé", "a allée"],
    0,
    "\"Aller\" takes être in the passé composé, and with être the participle agrees with the subject: \"elle est allée\".",
  ),
  typed(
    "fr-r-a2-dop",
    "A2",
    "grammar",
    "a2-direct-object-pronouns-1",
    "Tu connais Marie ? Oui, je ___ connais bien.",
    "la",
    "Do you know Marie? Yes, I know [her] well.",
    "Her as a direct object is \"la\", and it goes before the verb: \"je la connais\".",
  ),
  mc(
    "fr-r-b1-subj",
    "B1",
    "grammar",
    "b1-subjunctive-forms-1",
    "Il faut que tu ___ tes devoirs avant de sortir.",
    ["fasses", "fais", "feras", "ferais"],
    0,
    "\"Il faut que\" is always followed by the subjunctive: \"que tu fasses\", from the irregular stem \"fass-\".",
  ),
  mc(
    "fr-r-b1-si",
    "B1",
    "grammar",
    "b1-if-clauses-2",
    "Si j'avais plus de temps, j'___ le piano.",
    ["apprendrais", "apprendrai", "apprenais", "aurais appris"],
    0,
    "\"Si\" + imparfait goes with the conditional: \"si j'avais plus de temps, j'apprendrais le piano\".",
  ),
  mc(
    "fr-r-b2-bien-que",
    "B2",
    "grammar",
    "b2-subjunctive-conjunctions-1",
    "Bien qu'il ___ malade, il est venu à la réunion.",
    ["soit", "est", "était", "sera"],
    0,
    "\"Bien que\" (although) always takes the subjunctive: \"bien qu'il soit malade\".",
  ),
  typed(
    "fr-r-b2-past-cond",
    "B2",
    "grammar",
    "b2-si-clauses-in-depth-1",
    "Si tu m'avais prévenu, je ___ venu te chercher à la gare.",
    "serais",
    "If you had warned me, I [would have] come to pick you up at the station.",
    "\"Si\" + plus-que-parfait goes with the past conditional. \"Venir\" takes être, so would have come is \"je serais venu\".",
  ),
  mc(
    "fr-r-c1-passe-simple",
    "C1",
    "grammar",
    "c1-literary-tenses-1",
    "In \"Il entra, s'assit et se tut\", which tense are the verbs in?",
    ["the passé simple", "the imparfait", "the passé composé", "the present"],
    0,
    "\"Entra\", \"s'assit\" and \"se tut\" are the passé simple of \"entrer\", \"s'asseoir\" and \"se taire\": the tense of written narration.",
  ),
  mc(
    "fr-r-c1-connector",
    "C1",
    "vocabulary",
    "c1-concession-1",
    "Which connector means nevertheless, in formal writing?",
    ["néanmoins", "d'ailleurs", "c'est-à-dire", "autrement dit"],
    0,
    "\"Néanmoins\" concedes a point. \"D'ailleurs\" adds one (besides), and \"c'est-à-dire\" and \"autrement dit\" rephrase (that is, in other words).",
  ),
  mc(
    "fr-r-c2-idiom",
    "C2",
    "vocabulary",
    "c2-idioms-1",
    "What does \"tirer son épingle du jeu\" mean?",
    ["to come out of a tricky situation well", "to pull out of a game early", "to cheat at cards", "to lose everything"],
    0,
    "\"Tirer son épingle du jeu\" is to get out of a difficult business without loss, or even to do well out of it.",
  ),
  mc(
    "fr-r-c2-reading",
    "C2",
    "reading",
    "c2-euphemisms-1",
    "Read: \"Le ministre a reconnu que la réforme n'avait pas produit tous les effets escomptés.\" What is he admitting?",
    ["The reform didn't work as well as hoped.", "The reform was cancelled.", "The reform was a complete success.", "Nobody expected the reform."],
    0,
    "\"N'a pas produit tous les effets escomptés\" (didn't have all the expected effects) is the official way of saying it partly failed.",
  ),
];

// ---- Stage 2: four per level ---------------------------------------------

export const FR_LEVEL_QUESTIONS: Record<FrPlacementLevel, FrPlacementQuestion[]> = {
  A1: [
    mc(
      "fr-a1-likes",
      "A1",
      "grammar",
      "a1-likes-1",
      "J'aime beaucoup ___ chocolat.",
      ["le", "du", "un", "de"],
      0,
      "After \"aimer\", \"adorer\" and \"détester\", French uses the definite article for things in general: \"j'aime le chocolat\".",
    ),
    typed(
      "fr-a1-negation",
      "A1",
      "grammar",
      "a1-negation-ne-pas",
      "Il ___ travaille pas le lundi.",
      "ne",
      "He [doesn't] work on Mondays.",
      "Negation wraps the verb: \"ne\" before it, \"pas\" after it: \"il ne travaille pas\".",
    ),
    listen(
      "fr-a1-time",
      "A1",
      "a1-telling-time-1",
      "Le train part à dix-sept heures trente.",
      "When does the train leave?",
      ["5:30 p.m.", "7:30 p.m.", "10:30 a.m.", "7:13 p.m."],
      0,
      "\"Dix-sept heures trente\" is 17:30, half past five in the afternoon: timetables use the 24-hour clock.",
    ),
    mc(
      "fr-a1-question-word",
      "A1",
      "grammar",
      "a1-question-words-1",
      "___ habites-tu ? J'habite à Marseille.",
      ["Où", "Quand", "Comment", "Pourquoi"],
      0,
      "The answer is a place, so the question word is \"où\" (where).",
    ),
  ],
  A2: [
    mc(
      "fr-a2-imparfait",
      "A2",
      "grammar",
      "a2-imparfait-1",
      "Quand j'étais petit, je ___ souvent chez mes grands-parents.",
      ["allais", "suis allé", "irai", "vais"],
      0,
      "A habit in the past (souvent, when I was little) takes the imparfait: \"j'allais\".",
    ),
    typed(
      "fr-a2-y",
      "A2",
      "grammar",
      "a2-pronoun-y-1",
      "Tu vas à la boulangerie ? Oui, j'___ vais tout de suite.",
      "y",
      "Are you going to the bakery? Yes, I'm going [there] right away.",
      "\"Y\" replaces a place introduced by \"à\": \"j'y vais\".",
    ),
    mc(
      "fr-a2-comparison",
      "A2",
      "grammar",
      "a2-comparisons-1",
      "Paris est ___ grand que Lyon.",
      ["plus", "plus de", "très", "meilleur"],
      0,
      "Comparing adjectives: \"plus\" + adjective + \"que\". \"Plus de\" is for quantities, and \"meilleur\" means better.",
    ),
    listen(
      "fr-a2-ticket",
      "A2",
      "a2-survival-transport",
      "Je voudrais un aller-retour pour Bordeaux, s'il vous plaît.",
      "What does the speaker want?",
      ["a return ticket to Bordeaux", "a one-way ticket to Bordeaux", "directions to Bordeaux", "a table for two in Bordeaux"],
      0,
      "\"Un aller-retour\" is a return ticket; a one-way ticket is \"un aller simple\".",
    ),
  ],
  B1: [
    mc(
      "fr-b1-dont",
      "B1",
      "grammar",
      "b1-relative-pronouns-2",
      "C'est le livre ___ je t'ai parlé.",
      ["dont", "que", "qui", "où"],
      0,
      "\"Parler de quelque chose\": the \"de\" becomes \"dont\": \"le livre dont je t'ai parlé\".",
    ),
    typed(
      "fr-b1-pqp",
      "B1",
      "grammar",
      "b1-plus-que-parfait-1",
      "Quand je suis arrivé, le film ___ déjà commencé.",
      "avait",
      "When I arrived, the film [had] already started.",
      "An earlier past action takes the plus-que-parfait: \"le film avait déjà commencé\".",
    ),
    listen(
      "fr-b1-meet",
      "B1",
      "b1-survival-phone-calls",
      "Si tu veux, on peut se retrouver devant la gare vers midi.",
      "What does the speaker suggest?",
      ["meeting outside the station around noon", "taking the train at noon", "meeting at the station tomorrow evening", "having lunch at the station"],
      0,
      "\"Se retrouver devant la gare vers midi\" is to meet outside the station around noon.",
    ),
    mc(
      "fr-b1-bank",
      "B1",
      "vocabulary",
      "b1-survival-bank-and-money",
      "At the bank, what is \"un découvert\"?",
      ["an overdraft", "a discovery", "a savings account", "a cash machine"],
      0,
      "\"Être à découvert\" is to be overdrawn, and \"un découvert\" is an overdraft. A savings account is \"un livret d'épargne\".",
    ),
  ],
  B2: [
    mc(
      "fr-b2-gerondif",
      "B2",
      "grammar",
      "b2-gerondif-participe-present-1",
      "Elle s'est blessée ___ du vélo.",
      ["en faisant", "en faire", "faisant", "à faire"],
      0,
      "Two actions at the same time, by the same person: the gérondif, \"en\" + present participle: \"en faisant du vélo\".",
    ),
    mc(
      "fr-b2-reported",
      "B2",
      "grammar",
      "b2-reported-speech-1",
      "He said \"Je viendrai demain.\" In reported speech: \"Il a dit qu'il ___ le lendemain.\"",
      ["viendrait", "viendra", "vient", "venait"],
      0,
      "After a past reporting verb, the future becomes the conditional (\"viendrait\"), and \"demain\" becomes \"le lendemain\".",
    ),
    typed(
      "fr-b2-causative",
      "B2",
      "grammar",
      "b2-causatives-change-1",
      "Je vais ___ réparer ma voiture par un garagiste.",
      "faire",
      "I'm going to [have] my car repaired by a mechanic.",
      "Having something done by someone else is \"faire\" + infinitive: \"faire réparer sa voiture\".",
    ),
    mc(
      "fr-b2-connector",
      "B2",
      "grammar",
      "b2-advanced-connectors-1",
      "Le projet est intéressant ; ___, il coûte trop cher.",
      ["cependant", "par conséquent", "c'est pourquoi", "de plus"],
      0,
      "The second idea contrasts with the first, so it needs a connector of opposition: \"cependant\" (however).",
    ),
  ],
  C1: [
    mc(
      "fr-c1-quels-que",
      "C1",
      "grammar",
      "c1-contrast-quoique-quoi-que",
      "___ soient ses défauts, c'est un excellent professeur.",
      ["Quels que", "Quelques", "Quoi que", "Bien que"],
      0,
      "Before \"être\", whatever (the faults) is \"quel que\", agreeing with the noun: \"quels que soient ses défauts\".",
    ),
    mc(
      "fr-c1-letter",
      "C1",
      "vocabulary",
      "c1-formal-correspondence-1",
      "Which is the right way to close a formal letter?",
      [
        "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
        "Bises, à bientôt !",
        "Bonne journée à toi !",
        "Allez, à plus !",
      ],
      0,
      "\"Je vous prie d'agréer... l'expression de mes salutations distinguées\" is the standard closing formula of a formal letter.",
    ),
    mc(
      "fr-c1-nominalization",
      "C1",
      "grammar",
      "c1-nominalization-1",
      "Turn \"Le gouvernement a réduit les impôts\" into a headline: \"___ des impôts par le gouvernement\".",
      ["Réduction", "Réduit", "Réduisance", "Réduisement"],
      0,
      "The noun of \"réduire\" is \"la réduction\": \"Réduction des impôts par le gouvernement\".",
    ),
    listen(
      "fr-c1-navet",
      "C1",
      "c1-registers-1",
      "Franchement, ce film, c'était un vrai navet.",
      "What does the speaker think of the film?",
      ["It was very bad.", "It was excellent.", "It was too long.", "It was about farming."],
      0,
      "In familiar French \"un navet\" (literally a turnip) is a dreadful film.",
    ),
  ],
  C2: [
    mc(
      "fr-c2-preneur",
      "C2",
      "vocabulary",
      "c2-legal-french-1",
      "In a lease, who is \"le preneur\"?",
      ["the tenant", "the landlord", "the notary", "the guarantor"],
      0,
      "In legal French, \"le preneur\" takes the lease (the tenant) and \"le bailleur\" grants it (the landlord).",
    ),
    mc(
      "fr-c2-proverb",
      "C2",
      "vocabulary",
      "c2-proverbs-2",
      "Complete the proverb: \"Qui ne dit mot ___.\"",
      ["consent", "se tait", "ment", "perd"],
      0,
      "\"Qui ne dit mot consent\": silence gives consent.",
    ),
    mc(
      "fr-c2-chats",
      "C2",
      "vocabulary",
      "c2-idioms-1",
      "What does \"avoir d'autres chats à fouetter\" mean?",
      ["to have more important things to do", "to have several pets", "to be furious", "to have too much free time"],
      0,
      "\"J'ai d'autres chats à fouetter\" is I have other fish to fry: more important things to deal with.",
    ),
    mc(
      "fr-c2-reading",
      "C2",
      "reading",
      "c2-euphemisms-2",
      "Read: \"Sous couvert de modernisation, la direction a surtout cherché à réduire les coûts.\" What is implied?",
      ["Modernisation was a pretext for cutting costs.", "The management modernised without cutting costs.", "Costs went up because of modernisation.", "The staff asked for modernisation."],
      0,
      "\"Sous couvert de\" means under the pretext of: the real aim was cutting costs.",
    ),
  ],
};

/** Stage-2 questions right (of a level's four) for that level to pass. */
export const FR_STAGE2_PASS = 3;
/** Every learner answers this many: the router plus two levels' sets. */
export const FR_PLACEMENT_TOTAL = FR_ROUTER_QUESTIONS.length + 2 * FR_LEVEL_QUESTIONS.A1.length;

export type FrPlacementBand = [FrPlacementLevel, FrPlacementLevel];

// Router score (of 12) to band, as in the Spanish test.
const BAND_CUTOFFS: [minCorrect: number, band: FrPlacementBand][] = [
  [11, ["C1", "C2"]],
  [9, ["B2", "C1"]],
  [7, ["B1", "B2"]],
  [5, ["A2", "B1"]],
  [0, ["A1", "A2"]],
];

export function frRouteBand(routerCorrect: number): FrPlacementBand {
  return BAND_CUTOFFS.find(([min]) => routerCorrect >= min)![1];
}

/** Answers so far: question id to answered correctly. */
export type FrPlacementAnswers = Record<string, boolean>;

function routerScore(answers: FrPlacementAnswers): number | null {
  if (!FR_ROUTER_QUESTIONS.every((q) => q.id in answers)) return null;
  return FR_ROUTER_QUESTIONS.filter((q) => answers[q.id]).length;
}

export function frPlacementBand(answers: FrPlacementAnswers): FrPlacementBand | null {
  const score = routerScore(answers);
  return score === null ? null : frRouteBand(score);
}

/** Every question this learner gets, in order, as far as is known. */
export function frPlacementQuestions(answers: FrPlacementAnswers): FrPlacementQuestion[] {
  const band = frPlacementBand(answers);
  return band ? [...FR_ROUTER_QUESTIONS, ...FR_LEVEL_QUESTIONS[band[0]], ...FR_LEVEL_QUESTIONS[band[1]]] : FR_ROUTER_QUESTIONS;
}

/** The next unanswered question, its position (0-based) and stage, or null when the test is done. */
export function nextFrPlacementQuestion(
  answers: FrPlacementAnswers,
): { question: FrPlacementQuestion; index: number; stage: 1 | 2 } | null {
  const questions = frPlacementQuestions(answers);
  const index = questions.findIndex((q) => !(q.id in answers));
  if (index === -1) return null;
  return { question: questions[index], index, stage: index < FR_ROUTER_QUESTIONS.length ? 1 : 2 };
}

// ---- Saved progress (localStorage) ---------------------------------------

export const FR_PLACEMENT_PROGRESS_KEY = "deepend-fr-placement-progress";

const KNOWN_IDS = new Set([...FR_ROUTER_QUESTIONS, ...Object.values(FR_LEVEL_QUESTIONS).flat()].map((q) => q.id));

/** Saved answers worth resuming, or null. */
export function normalizeFrPlacementProgress(raw: unknown): FrPlacementAnswers | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (r.version !== 1 || !r.answers || typeof r.answers !== "object") return null;
  const answers: FrPlacementAnswers = {};
  for (const [id, v] of Object.entries(r.answers as Record<string, unknown>)) {
    if (KNOWN_IDS.has(id) && typeof v === "boolean") answers[id] = v;
  }
  if (!Object.keys(answers).length || !nextFrPlacementQuestion(answers)) return null;
  return answers;
}

// ---- Scoring --------------------------------------------------------------

export type FrPlacementLevelResult = {
  level: FrPlacementLevel;
  correct: number;
  total: number;
  status: "passed-routing" | "passed" | "gaps" | "not-reached";
  passed: boolean;
};

export type FrPlacementScore = {
  results: FrPlacementLevelResult[];
  band: FrPlacementBand;
  recommendedLevel: FrPlacementLevel;
  /** Both levels of a C1-C2 band passed: nothing above to recommend. */
  masteredEverything: boolean;
  correct: number;
  total: number;
};

export function scoreFrPlacementTest(answers: FrPlacementAnswers): FrPlacementScore {
  const band = frPlacementBand(answers) ?? frRouteBand(0);
  const [lo, hi] = band.map((l) => FR_PLACEMENT_LEVELS.indexOf(l));
  const asked = frPlacementQuestions(answers);
  const results = FR_PLACEMENT_LEVELS.map((level, i): FrPlacementLevelResult => {
    const qs = asked.filter((q) => q.level === level);
    const correct = qs.filter((q) => answers[q.id]).length;
    let status: FrPlacementLevelResult["status"];
    if (i < lo) status = "passed-routing";
    else if (i > hi) status = "not-reached";
    else status = FR_LEVEL_QUESTIONS[level].filter((q) => answers[q.id]).length >= FR_STAGE2_PASS ? "passed" : "gaps";
    return { level, correct, total: qs.length, status, passed: status === "passed" || status === "passed-routing" };
  });
  const firstGap = results.find((r) => r.status === "gaps");
  return {
    results,
    band,
    recommendedLevel: firstGap ? firstGap.level : FR_PLACEMENT_LEVELS[Math.min(hi + 1, FR_PLACEMENT_LEVELS.length - 1)],
    masteredEverything: !firstGap && hi === FR_PLACEMENT_LEVELS.length - 1,
    correct: asked.filter((q) => answers[q.id]).length,
    total: asked.length,
  };
}

/** Every question answered wrong, in the order asked. */
export function frMissedQuestions(answers: FrPlacementAnswers): FrPlacementQuestion[] {
  return frPlacementQuestions(answers).filter((q) => q.id in answers && !answers[q.id]);
}

/** A one-line label for a question (results list). */
export function frPlacementQuestionText(q: FrPlacementQuestion): string {
  switch (q.type) {
    case "fill-blank":
      return q.en ?? q.sentence;
    case "multiple-choice":
    case "listen-choose":
      return q.question;
    default:
      return q.explanation;
  }
}

/** Every question in the bank (for checks). */
export const FR_PLACEMENT_BANK: FrPlacementQuestion[] = [...FR_ROUTER_QUESTIONS, ...Object.values(FR_LEVEL_QUESTIONS).flat()];
