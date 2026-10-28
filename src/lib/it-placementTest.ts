// Synced from cheneygross-afk/lengo:src/lib/it-placementTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./lessons/types";

// The Italian course's placement test (/lessons/it/placement): the same
// two-stage adaptive design as the Portuguese one
// (src/lib/pt-placementTest.ts), with its own questions.
//
//   Stage 1 (the router): 12 questions, two per level from A1 to C2, in
//   rising difficulty. The number right picks a band of two adjacent
//   levels (itRouteBand).
//   Stage 2: the four questions of each of the band's two levels (8), so
//   20 questions in all, whoever takes it (36 in the bank).
//
// The recommendation is the first level with gaps: the band's lower level
// if it fails, else its upper level if that fails, else the level above
// the band. A level in the band passes with IT_STAGE2_PASS of its four
// stage-2 questions right.
//
// Levels follow the course (A1 to C2, lined up with the CILS exams).
// Instructions are in English for every level; the Italian is standard
// Italian and sits in "double quotes" inside English text, so the it-IT
// voice reads it (lib/targetSpans.ts). English answer options always
// contain a plain English word such as "the", "it" or "and", so they are
// not voiced as Italian. Listening items are played with the course's
// text-to-speech. Each question names a lesson of its level that teaches
// the point (/lessons/it/<level>/<slug>, from the syllabus in
// docs/italian-course/); the results page links it only once that lesson
// exists.

export type ItPlacementLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type ItPlacementSkill = "grammar" | "vocabulary" | "reading" | "listening";

export type ItPlacementQuestion = Exercise & {
  /** Stable id: answers and saved progress are keyed by it. */
  id: string;
  level: ItPlacementLevel;
  skill: ItPlacementSkill;
  /** Slug of the lesson (at this question's level) that teaches the point. */
  relatedLessonSlug: string;
};

export const IT_PLACEMENT_LEVELS: ItPlacementLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const mc = (
  id: string,
  level: ItPlacementLevel,
  skill: ItPlacementSkill,
  relatedLessonSlug: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): ItPlacementQuestion => ({ id, level, skill, relatedLessonSlug, type: "multiple-choice", question, options, correctIndex, explanation });

const listen = (
  id: string,
  level: ItPlacementLevel,
  relatedLessonSlug: string,
  audio: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): ItPlacementQuestion => ({ id, level, skill: "listening", relatedLessonSlug, type: "listen-choose", audio, question, options, correctIndex, explanation });

// A typed answer, asked as a translation: `en` is the English sentence with
// [brackets] around the words the blank stands for.
const typed = (
  id: string,
  level: ItPlacementLevel,
  skill: ItPlacementSkill,
  relatedLessonSlug: string,
  sentence: string,
  answer: string,
  en: string,
  explanation: string,
  altAnswers?: string[],
): ItPlacementQuestion => ({
  id,
  level,
  skill,
  relatedLessonSlug,
  type: "fill-blank",
  prompt: "How do you say the bold words in Italian?",
  sentence,
  answer,
  en,
  ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
  explanation,
});

// ---- Stage 1: the router (2 per level, easiest first) ------------------

export const IT_ROUTER_QUESTIONS: ItPlacementQuestion[] = [
  mc(
    "it-r-a1-age",
    "A1",
    "grammar",
    "a1-how-old-are-you",
    "Io ___ vent'anni.",
    ["ho", "sono", "è", "hai"],
    0,
    "Age takes \"avere\" in Italian: \"Ho vent'anni\" (literally I have twenty years). \"Sono vent'anni\" is the classic English speaker's mistake, and \"hai\" is the tu form (you have).",
  ),
  listen(
    "it-r-a1-family",
    "A1",
    "a1-family",
    "Mia sorella si chiama Giulia e ha diciotto anni.",
    "What did you hear?",
    ["My sister is called Giulia and she is eighteen.", "My sister is called Giulia and she is eight.", "My mother is called Giulia and she is eighteen.", "Giulia is my cousin and she is eighteen."],
    0,
    "\"Mia sorella\" is my sister, \"si chiama\" is she is called, and \"diciotto\" is eighteen (\"otto\" is eight). Age comes with \"avere\": \"ha diciotto anni\".",
  ),
  mc(
    "it-r-a2-pp-essere",
    "A2",
    "grammar",
    "a2-passato-prossimo-essere-1",
    "Ieri Maria ___ al mare con le amiche.",
    ["è andata", "ha andato", "è andato", "andava"],
    0,
    "\"Andare\" is a verb of movement, so it takes \"essere\" in the passato prossimo, and the participle agrees with Maria: \"è andata\". \"Ha andato\" is never correct, and \"andava\" (the imperfetto) would describe a habit, not one trip yesterday.",
  ),
  typed(
    "it-r-a2-lo",
    "A2",
    "grammar",
    "a2-direct-pronouns-1",
    "Stasera ___ chiamo.",
    "lo",
    "Tonight I'll call [him].",
    "The direct object pronoun goes before the conjugated verb: \"lo chiamo\" (I call him). Careful: \"chiamare\" takes a direct object in Italian, so it's \"lo\", not \"gli\".",
  ),
  mc(
    "it-r-b1-penso-che",
    "B1",
    "grammar",
    "b1-opinion-subjunctive",
    "Penso che Marco ___ ragione.",
    ["abbia", "ha", "avrà", "avesse"],
    0,
    "After \"penso che\" (I think that), standard Italian uses the present subjunctive: \"penso che abbia ragione\". You'll hear \"penso che ha ragione\" in casual speech, but in writing and in the CILS exams it counts as a mistake. \"Avesse\" would follow a past main verb: \"pensavo che avesse ragione\".",
  ),
  mc(
    "it-r-b1-glielo",
    "B1",
    "grammar",
    "b1-gliene-and-past",
    "\"Hai dato il libro a Luca?\" \"Sì, ___ ho dato ieri.\"",
    ["gliel'", "gli l'", "lo gli", "glie"],
    0,
    "\"Gli\" (to him) and \"lo\" (it) combine into one word, \"glielo\", which elides before \"ho\": \"gliel'ho dato\" (I gave it to him). The indirect pronoun always comes first.",
  ),
  mc(
    "it-r-b2-se-avessi",
    "B2",
    "grammar",
    "b2-hypothetical-if",
    "Se ___ più tempo, imparerei il giapponese.",
    ["avessi", "avrei", "ho", "abbia"],
    0,
    "A hypothetical if-sentence takes the imperfect subjunctive after \"se\" and the conditional in the main clause: \"Se avessi più tempo, imparerei...\" (if I had more time, I would learn...). Never the conditional after \"se\": \"se avrei\" is a well-known mistake.",
  ),
  listen(
    "it-r-b2-fossero-partiti",
    "B2",
    "b2-sequence-past-main",
    "Credevo che fossero già partiti.",
    "What did you hear?",
    ["I thought they had already left.", "I believe they have already left.", "I thought they would leave soon.", "They thought I had already left."],
    0,
    "\"Credevo\" (I thought, a past main verb) is followed by the pluperfect subjunctive, \"fossero partiti\" (they had left), for something that came before it. \"Credo che siano partiti\" would be I believe they have left.",
  ),
  mc(
    "it-r-c1-ebbe-finito",
    "C1",
    "reading",
    "c1-trapassato-remoto",
    "In a novel: \"Quando ebbe finito la lettera, la chiuse in un cassetto.\" What does \"ebbe finito\" mean here?",
    ["had finished", "will have finished", "was finishing", "would have finished"],
    0,
    "\"Ebbe finito\" is the trapassato remoto, the literary had done that goes with a passato remoto (\"chiuse\", he/she closed) after \"quando\", \"dopo che\" or \"appena\". In speech it would be \"quando aveva finito\" or \"dopo aver finito\".",
  ),
  mc(
    "it-r-c1-provvedere",
    "C1",
    "reading",
    "c1-reading-lab-official-notice",
    "A letter from your gas company says: \"La invitiamo a voler cortesemente provvedere al pagamento entro il 30 giugno.\" What is it asking?",
    ["Please pay the bill by 30 June.", "You are invited to an event on 30 June.", "Your payment was received on 30 June.", "You may put off the payment until after 30 June."],
    0,
    "Official Italian piles up courtesy: \"La invitiamo a voler cortesemente provvedere al pagamento\" just means please pay. \"Provvedere a\" is to see to, to take care of something, and \"entro\" is by (a deadline).",
  ),
  mc(
    "it-r-c2-tarallucci",
    "C2",
    "vocabulary",
    "c2-idioms-advanced-1",
    "\"Dopo mesi di polemiche, la vicenda è finita a tarallucci e vino.\" How did it end?",
    [
      "It was smoothed over amicably, and nobody had to face the consequences.",
      "It ended with a big party for all the people involved.",
      "It ended in court, with heavy fines for everyone.",
      "It was settled when the company was sold to a southern firm.",
    ],
    0,
    "\"Finire a tarallucci e vino\" (to end with biscuits and wine) is said of a quarrel or a scandal that ends in a friendly patch-up, usually with a critical edge: nobody pays for what happened.",
  ),
  mc(
    "it-r-c2-orecchie-mercante",
    "C2",
    "vocabulary",
    "c2-idioms-advanced-2",
    "\"Gli ho chiesto tre volte di restituirmi i soldi, ma ha fatto orecchie da mercante.\" What did he do?",
    ["He pretended not to hear, and ignored the request.", "He paid it back with interest, like a merchant.", "He listened carefully and promised to pay it back.", "He asked for more time to find the money."],
    0,
    "\"Fare orecchie da mercante\" (to have a merchant's ears) is to turn a deaf ear: to pretend not to hear what you'd rather not deal with.",
  ),
];

// ---- Stage 2: four per level ---------------------------------------------

export const IT_LEVEL_QUESTIONS: Record<ItPlacementLevel, ItPlacementQuestion[]> = {
  A1: [
    mc(
      "it-a1-lo-studente",
      "A1",
      "grammar",
      "a1-definite-article-1",
      "___ studente è di Napoli.",
      ["Lo", "Il", "La", "L'"],
      0,
      "Before s + consonant (st-, sp-, sc-...), z, gn, ps and y, the masculine article is \"lo\": \"lo studente\", \"lo zaino\". \"Il\" goes before most other consonants (\"il libro\"), and \"l'\" before a vowel (\"l'amico\").",
    ),
    typed(
      "it-a1-abito",
      "A1",
      "grammar",
      "a1-are-verbs-1",
      "Io ___ a Milano.",
      "abito",
      "I [live] in Milan.",
      "\"Abitare\" (to live) is a regular -are verb: \"io abito\", \"tu abiti\", \"lui abita\". Note the stress: A-bi-to. \"Vivo\" (from \"vivere\") is just as right.",
      ["vivo"],
    ),
    mc(
      "it-a1-che-ore",
      "A1",
      "vocabulary",
      "a1-what-time-is-it",
      "\"Che ore sono?\" It's 3:30. What do you answer?",
      ["Sono le tre e mezza.", "È le tre e mezza.", "Sono tre e mezza.", "Ha le tre e mezza."],
      0,
      "Times take \"sono le\" plus the hour, because the hours are plural: \"sono le tre e mezza\". Only one, noon and midnight take \"è\": \"è l'una\", \"è mezzogiorno\", \"è mezzanotte\".",
    ),
    listen(
      "it-a1-al-bar",
      "A1",
      "a1-at-the-bar",
      "Un caffè e un cornetto, per favore.",
      "What did you hear?",
      ["A coffee and a croissant, please.", "Two coffees and a croissant, please.", "A coffee and a sandwich, please.", "A cappuccino and a croissant, thanks."],
      0,
      "\"Un caffè\" is one espresso, \"un cornetto\" a croissant, and \"per favore\" please. At an Italian bar, \"un caffè\" always means an espresso.",
    ),
  ],
  A2: [
    mc(
      "it-a2-andavo",
      "A2",
      "grammar",
      "a2-imperfetto-habits",
      "Da bambino ___ sempre al parco con mio nonno.",
      ["andavo", "sono andato", "vado", "andrò"],
      0,
      "A habit in the past takes the imperfetto: \"da bambino andavo sempre al parco\" (as a child I always used to go to the park). The passato prossimo, \"sono andato\", is for one finished event.",
    ),
    typed(
      "it-a2-ne",
      "A2",
      "grammar",
      "a2-ne-quantities",
      "Quante mele vuoi? Io ___ voglio tre.",
      "ne",
      "How many apples do you want? I want three [of them].",
      "With a number or a quantity, Italian needs \"ne\" (of them): \"ne voglio tre\". Leaving it out (\"voglio tre\") sounds incomplete to an Italian ear.",
    ),
    mc(
      "it-a2-andro",
      "A2",
      "grammar",
      "a2-future-irregular",
      "L'anno prossimo ___ in Italia per studiare.",
      ["andrò", "anderò", "andrei", "andassi"],
      0,
      "\"Andare\" has an irregular future that drops the e: \"andrò\", \"andrai\", \"andrà\". \"Anderò\" is a common mistake, \"andrei\" is the conditional (I would go), and \"andassi\" the imperfect subjunctive.",
    ),
    listen(
      "it-a2-directions",
      "A2",
      "a2-mission-directions-to-a-guest",
      "Vada sempre dritto e poi giri a destra.",
      "What did you hear?",
      ["Go straight on and then turn right.", "Go straight on and then turn left.", "Turn right and then go back.", "Go to the right of the square and then stop."],
      0,
      "\"Vada sempre dritto\" is go straight on and \"giri a destra\" is turn right (left is \"a sinistra\"). Both are polite commands for Lei.",
    ),
  ],
  B1: [
    mc(
      "it-b1-prima-che",
      "B1",
      "grammar",
      "b1-before-without",
      "Prima che tu ___, ti devo parlare.",
      ["parta", "parti", "partirai", "partissi"],
      0,
      "\"Prima che\" (before) always takes the subjunctive: \"prima che tu parta\". With the same subject in both parts, use \"prima di\" and the infinitive instead: \"prima di partire, ti devo parlare\".",
    ),
    typed(
      "it-b1-era-partito",
      "B1",
      "grammar",
      "b1-trapassato-use",
      "Quando sono arrivato in stazione, il treno ___ già partito.",
      "era",
      "When I got to the station, the train [had] already left.",
      "Something that happened before another past event takes the trapassato prossimo: the imperfetto of the auxiliary plus the participle. \"Partire\" takes \"essere\", so: \"era già partito\".",
    ),
    mc(
      "it-b1-sarebbe-arrivato",
      "B1",
      "grammar",
      "b1-future-in-the-past",
      "Luca ha detto che ___ alle otto.",
      ["sarebbe arrivato", "arriverebbe", "arriverà", "sarà arrivato"],
      0,
      "A future seen from the past (he said he would arrive) takes the past conditional in Italian: \"ha detto che sarebbe arrivato\". English uses a simple would, which is why \"arriverebbe\" is the typical mistake.",
    ),
    listen(
      "it-b1-se-piove",
      "B1",
      "b1-if-real-present",
      "Se domani piove, restiamo a casa.",
      "What did you hear?",
      ["If it rains tomorrow, we'll stay at home.", "If it rained tomorrow, we would stay at home.", "It rained yesterday, so we stayed at home.", "If it rains tomorrow, we'll go out anyway."],
      0,
      "A real condition takes the indicative in both parts: \"se piove, restiamo a casa\". The present often stands for the future in speech.",
    ),
  ],
  B2: [
    mc(
      "it-b2-benche",
      "B2",
      "grammar",
      "b2-concession-subjunctive",
      "Benché ___ stanco, è uscito con gli amici.",
      ["fosse", "era", "sarebbe", "è stato"],
      0,
      "\"Benché\" (although), like \"sebbene\" and \"nonostante\" before a verb, takes the subjunctive. The main verb is past, so it's the imperfect subjunctive: \"benché fosse stanco\".",
    ),
    typed(
      "it-b2-avessi-saputo",
      "B2",
      "grammar",
      "b2-contrast-if-types",
      "Se l'___ saputo, ti avrei aiutato.",
      "avessi",
      "If I [had] known, I would have helped you.",
      "An impossible condition in the past: \"se\" + pluperfect subjunctive (\"avessi saputo\"), then the past conditional (\"avrei aiutato\"). \"Se l'avrei saputo\" is a classic mistake.",
    ),
    mc(
      "it-b2-rendersi-conto",
      "B2",
      "grammar",
      "b2-verbs-with-prepositions",
      "Non mi sono reso conto ___ errore.",
      ["dell'", "all'", "nell'", "sull'"],
      0,
      "\"Rendersi conto di\" (to realise) takes \"di\", here fused with the article: \"dell'errore\". Learn the preposition with the verb: \"pensare a\", \"credere in\", \"accorgersi di\", \"rendersi conto di\".",
    ),
    mc(
      "it-b2-fare-finta",
      "B2",
      "vocabulary",
      "b2-idioms-everyday",
      "\"Quando gli ho chiesto spiegazioni, ha fatto finta di niente.\" What did he do?",
      ["He acted as if nothing had happened.", "He explained everything in detail.", "He admitted that it was all his fault.", "He got angry and walked out."],
      0,
      "\"Fare finta di niente\" is to pretend nothing is wrong, to act as if you know nothing about it. \"Fare finta di\" plus an infinitive is to pretend to: \"fa finta di dormire\".",
    ),
  ],
  C1: [
    mc(
      "it-c1-che-abbia",
      "C1",
      "grammar",
      "c1-mood-changes-meaning",
      "Which sentence means you are looking for any flat with a garden, not one you already know?",
      ["Cerco un appartamento che abbia un giardino.", "Cerco l'appartamento che ha un giardino.", "Cerco un appartamento che ha avuto un giardino.", "Cerco un appartamento che avrebbe un giardino."],
      0,
      "In a relative clause the subjunctive marks something wished for or not yet found: \"un appartamento che abbia un giardino\" (any flat, as long as it has a garden). The indicative points to a real, specific one: \"l'appartamento che ha un giardino\".",
    ),
    typed(
      "it-c1-scelsero",
      "C1",
      "grammar",
      "c1-passato-remoto-irregular-1",
      "Nel 1946 gli italiani ___ la Repubblica con un referendum.",
      "scelsero",
      "In 1946 the Italians [chose] the Republic in a referendum.",
      "History writing uses the passato remoto. \"Scegliere\" is irregular in the io, lui and loro forms: \"scelsi\", \"scelse\", \"scelsero\" (the others are regular: \"scegliesti\", \"scegliemmo\", \"sceglieste\").",
    ),
    mc(
      "it-c1-business-email",
      "C1",
      "vocabulary",
      "c1-business-emails",
      "Which is the right way to ask a client you don't know to send you a document?",
      ["La preghiamo di inviarci il documento.", "Mandaci il documento.", "Ci manda il documento, dai.", "Inviaci il documento, grazie mille."],
      0,
      "A business email to a client uses Lei and formal phrasing: \"La preghiamo di\" (we kindly ask you to) plus an infinitive. \"Mandaci\" and \"inviaci\" are tu commands, and \"dai\" is chatty.",
    ),
    listen(
      "it-c1-magari",
      "C1",
      "c1-independent-subjunctive",
      "Magari fosse vero!",
      "What did you hear?",
      ["If only it were true!", "Maybe it's true.", "Perhaps it was true after all.", "It must be true."],
      0,
      "\"Magari\" with the imperfect subjunctive is a wish: if only. On its own, or with the indicative, \"magari\" means maybe: \"magari vengo\" (maybe I'll come).",
    ),
  ],
  C2: [
    mc(
      "it-c2-salvo-poi",
      "C2",
      "reading",
      "c2-reading-lab-shades",
      "\"Ha accettato l'incarico, salvo poi pentirsene una settimana dopo.\" What happened?",
      ["He took the job, only to regret it a week later.", "He took the job unless he changed his mind within a week.", "He took the job and saved money in the first week.", "He refused the job and regretted it a week later."],
      0,
      "\"Salvo poi\" plus an infinitive adds a later, contrasting turn: only to... \"Salvo\" on its own means except or unless: \"salvo imprevisti\" (barring the unexpected).",
    ),
    mc(
      "it-c2-tacito-rinnovo",
      "C2",
      "reading",
      "c2-contracts-in-depth",
      "Your rental contract says: \"Il contratto si intende tacitamente rinnovato, salvo disdetta da inviarsi almeno sei mesi prima della scadenza.\" What does it mean?",
      [
        "It renews automatically unless you give notice at least six months before it ends.",
        "It ends after six months unless both sides sign a new contract.",
        "It can only be renewed if you ask for it in writing six months ahead.",
        "It is renewed in silence: the landlord need not tell you about rent changes.",
      ],
      0,
      "\"Tacitamente rinnovato\" is renewed automatically (without anyone saying so), \"salvo disdetta\" is unless notice is given, and \"da inviarsi\" is to be sent. \"La scadenza\" is the expiry date.",
    ),
    mc(
      "it-c2-non-ci-piove",
      "C2",
      "vocabulary",
      "c2-idioms-advanced-1",
      "\"Che sia il più preparato del gruppo, non ci piove.\" What is the speaker saying?",
      ["There's no doubt he's the best prepared in the group.", "He's the best prepared, but only when it doesn't rain.", "Nobody knows who the best prepared in the group is.", "He would be the best prepared, if he worked harder."],
      0,
      "\"Non ci piove\" (it doesn't rain on it) means it's beyond question. The fronted \"che\" clause takes the subjunctive: \"che sia il più preparato, ...\".",
    ),
    mc(
      "it-c2-irony",
      "C2",
      "reading",
      "c2-irony",
      "Looking out at the pouring rain, Marta sighs: \"Che splendida giornata per un picnic.\" What does she mean?",
      ["It's a terrible day for a picnic.", "It's a perfect day for a picnic.", "They should have the picnic before the rain starts.", "She is glad the picnic was moved indoors."],
      0,
      "Irony says the opposite of what's meant, and the situation (\"la pioggia\") gives it away. Italian irony often uses praise like \"splendido\", \"complimenti\" or \"bravo\" this way.",
    ),
  ],
};

/** Stage-2 questions right (of a level's four) for that level to pass. */
export const IT_STAGE2_PASS = 3;
/** Every learner answers this many: the router plus two levels' sets. */
export const IT_PLACEMENT_TOTAL = IT_ROUTER_QUESTIONS.length + 2 * IT_LEVEL_QUESTIONS.A1.length;

export type ItPlacementBand = [ItPlacementLevel, ItPlacementLevel];

// Router score (of 12) to band, as in the German test.
const BAND_CUTOFFS: [minCorrect: number, band: ItPlacementBand][] = [
  [11, ["C1", "C2"]],
  [9, ["B2", "C1"]],
  [7, ["B1", "B2"]],
  [5, ["A2", "B1"]],
  [0, ["A1", "A2"]],
];

export function itRouteBand(routerCorrect: number): ItPlacementBand {
  return BAND_CUTOFFS.find(([min]) => routerCorrect >= min)![1];
}

/** Answers so far: question id to answered correctly. */
export type ItPlacementAnswers = Record<string, boolean>;

function routerScore(answers: ItPlacementAnswers): number | null {
  if (!IT_ROUTER_QUESTIONS.every((q) => q.id in answers)) return null;
  return IT_ROUTER_QUESTIONS.filter((q) => answers[q.id]).length;
}

export function itPlacementBand(answers: ItPlacementAnswers): ItPlacementBand | null {
  const score = routerScore(answers);
  return score === null ? null : itRouteBand(score);
}

/** Every question this learner gets, in order, as far as is known. */
export function itPlacementQuestions(answers: ItPlacementAnswers): ItPlacementQuestion[] {
  const band = itPlacementBand(answers);
  return band ? [...IT_ROUTER_QUESTIONS, ...IT_LEVEL_QUESTIONS[band[0]], ...IT_LEVEL_QUESTIONS[band[1]]] : IT_ROUTER_QUESTIONS;
}

/** The next unanswered question, its position (0-based) and stage, or null when the test is done. */
export function nextItPlacementQuestion(
  answers: ItPlacementAnswers,
): { question: ItPlacementQuestion; index: number; stage: 1 | 2 } | null {
  const questions = itPlacementQuestions(answers);
  const index = questions.findIndex((q) => !(q.id in answers));
  if (index === -1) return null;
  return { question: questions[index], index, stage: index < IT_ROUTER_QUESTIONS.length ? 1 : 2 };
}

// ---- Saved progress (localStorage) ---------------------------------------

export const IT_PLACEMENT_PROGRESS_KEY = "deepend-it-placement-progress";

const KNOWN_IDS = new Set([...IT_ROUTER_QUESTIONS, ...Object.values(IT_LEVEL_QUESTIONS).flat()].map((q) => q.id));

/** Saved answers worth resuming, or null. */
export function normalizeItPlacementProgress(raw: unknown): ItPlacementAnswers | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (r.version !== 1 || !r.answers || typeof r.answers !== "object") return null;
  const answers: ItPlacementAnswers = {};
  for (const [id, v] of Object.entries(r.answers as Record<string, unknown>)) {
    if (KNOWN_IDS.has(id) && typeof v === "boolean") answers[id] = v;
  }
  if (!Object.keys(answers).length || !nextItPlacementQuestion(answers)) return null;
  return answers;
}

// ---- Scoring --------------------------------------------------------------

export type ItPlacementLevelResult = {
  level: ItPlacementLevel;
  correct: number;
  total: number;
  status: "passed-routing" | "passed" | "gaps" | "not-reached";
  passed: boolean;
};

export type ItPlacementScore = {
  results: ItPlacementLevelResult[];
  band: ItPlacementBand;
  recommendedLevel: ItPlacementLevel;
  /** Both levels of a C1-C2 band passed: nothing above to recommend. */
  masteredEverything: boolean;
  correct: number;
  total: number;
};

export function scoreItPlacementTest(answers: ItPlacementAnswers): ItPlacementScore {
  const band = itPlacementBand(answers) ?? itRouteBand(0);
  const [lo, hi] = band.map((l) => IT_PLACEMENT_LEVELS.indexOf(l));
  const asked = itPlacementQuestions(answers);
  const results = IT_PLACEMENT_LEVELS.map((level, i): ItPlacementLevelResult => {
    const qs = asked.filter((q) => q.level === level);
    const correct = qs.filter((q) => answers[q.id]).length;
    let status: ItPlacementLevelResult["status"];
    if (i < lo) status = "passed-routing";
    else if (i > hi) status = "not-reached";
    else status = IT_LEVEL_QUESTIONS[level].filter((q) => answers[q.id]).length >= IT_STAGE2_PASS ? "passed" : "gaps";
    return { level, correct, total: qs.length, status, passed: status === "passed" || status === "passed-routing" };
  });
  const firstGap = results.find((r) => r.status === "gaps");
  return {
    results,
    band,
    recommendedLevel: firstGap ? firstGap.level : IT_PLACEMENT_LEVELS[Math.min(hi + 1, IT_PLACEMENT_LEVELS.length - 1)],
    masteredEverything: !firstGap && hi === IT_PLACEMENT_LEVELS.length - 1,
    correct: asked.filter((q) => answers[q.id]).length,
    total: asked.length,
  };
}

/** Every question answered wrong, in the order asked. */
export function itMissedQuestions(answers: ItPlacementAnswers): ItPlacementQuestion[] {
  return itPlacementQuestions(answers).filter((q) => q.id in answers && !answers[q.id]);
}

/** A one-line label for a question (results list). */
export function itPlacementQuestionText(q: ItPlacementQuestion): string {
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
export const IT_PLACEMENT_BANK: ItPlacementQuestion[] = [...IT_ROUTER_QUESTIONS, ...Object.values(IT_LEVEL_QUESTIONS).flat()];
