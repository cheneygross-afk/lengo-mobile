// Synced from cheneygross-afk/lengo:src/lib/pt-placementTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./lessons/types";

// The Brazilian Portuguese course's placement test (/lessons/pt/placement):
// the same two-stage adaptive design as the German one
// (src/lib/de-placementTest.ts), with its own questions.
//
//   Stage 1 (the router): 12 questions, two per level from A1 to C2, in
//   rising difficulty. The number right picks a band of two adjacent
//   levels (ptRouteBand).
//   Stage 2: the four questions of each of the band's two levels (8), so
//   20 questions in all, whoever takes it (36 in the bank).
//
// The recommendation is the first level with gaps: the band's lower level
// if it fails, else its upper level if that fails, else the level above
// the band. A level in the band passes with PT_STAGE2_PASS of its four
// stage-2 questions right.
//
// Levels follow the course (A1 to C2; Celpe-Bras from B1). Instructions
// are in English for every level; the Portuguese is Brazilian Portuguese
// as spoken and written in Brazil today and sits in "double quotes" inside
// English text, so the pt-BR voice reads it (lib/targetSpans.ts). English
// answer options always contain a plain English word such as "the", "it"
// or "and", so they are not voiced as Portuguese. Listening items are
// played with the course's text-to-speech. Each question links to a lesson
// of its level that teaches the point (/lessons/pt/<level>/<slug>).

export type PtPlacementLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type PtPlacementSkill = "grammar" | "vocabulary" | "reading" | "listening";

export type PtPlacementQuestion = Exercise & {
  /** Stable id: answers and saved progress are keyed by it. */
  id: string;
  level: PtPlacementLevel;
  skill: PtPlacementSkill;
  /** Slug of the lesson (at this question's level) that teaches the point. */
  relatedLessonSlug: string;
};

export const PT_PLACEMENT_LEVELS: PtPlacementLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const mc = (
  id: string,
  level: PtPlacementLevel,
  skill: PtPlacementSkill,
  relatedLessonSlug: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): PtPlacementQuestion => ({ id, level, skill, relatedLessonSlug, type: "multiple-choice", question, options, correctIndex, explanation });

const listen = (
  id: string,
  level: PtPlacementLevel,
  relatedLessonSlug: string,
  audio: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): PtPlacementQuestion => ({ id, level, skill: "listening", relatedLessonSlug, type: "listen-choose", audio, question, options, correctIndex, explanation });

// A typed answer, asked as a translation: `en` is the English sentence with
// [brackets] around the words the blank stands for.
const typed = (
  id: string,
  level: PtPlacementLevel,
  skill: PtPlacementSkill,
  relatedLessonSlug: string,
  sentence: string,
  answer: string,
  en: string,
  explanation: string,
  altAnswers?: string[],
): PtPlacementQuestion => ({
  id,
  level,
  skill,
  relatedLessonSlug,
  type: "fill-blank",
  prompt: "How do you say the bold words in Portuguese?",
  sentence,
  answer,
  en,
  ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
  explanation,
});

// ---- Stage 1: the router (2 per level, easiest first) ------------------

export const PT_ROUTER_QUESTIONS: PtPlacementQuestion[] = [
  mc(
    "pt-r-a1-ser-estar",
    "A1",
    "grammar",
    "a1-contrast-ser-estar",
    "A Mariana ___ cansada hoje.",
    ["está", "é", "esta", "tem"],
    0,
    "Tired today is a passing state, so it takes \"estar\": \"A Mariana está cansada hoje.\" \"É\" (\"ser\") is for what someone is, like a nationality or a job. Watch the accent: \"esta\" without it means this.",
  ),
  listen(
    "pt-r-a1-family",
    "A1",
    "a1-family-possessives-1",
    "Eu tenho dois irmãos e uma irmã.",
    "What did you hear?",
    ["I have two brothers and a sister.", "I have two sisters and a brother.", "I have two brothers and no sister.", "My brother has two sisters and a cousin."],
    0,
    "\"Dois irmãos\" are two brothers and \"uma irmã\" is one sister. Careful: \"irmãos\" can also mean brothers and sisters together, as in \"Você tem irmãos?\" (do you have any siblings?).",
  ),
  mc(
    "pt-r-a2-perfeito-ir",
    "A2",
    "grammar",
    "a2-perfeito-ser-ir",
    "Ontem à noite nós ___ ao cinema e depois jantamos fora.",
    ["fomos", "íamos", "vamos", "éramos"],
    0,
    "A single finished event yesterday takes the \"pretérito perfeito\": \"nós fomos\" (we went). \"Íamos\" is the \"imperfeito\", for habits or scenes (we used to go, we were going), and \"éramos\" is the \"imperfeito\" of \"ser\" (we were).",
  ),
  typed(
    "pt-r-a2-clitic",
    "A2",
    "grammar",
    "a2-pronoun-placement",
    "A Ana ___ ligou ontem à noite.",
    "me",
    "Ana called [me] last night.",
    "In Brazil the object pronoun goes before the verb: \"A Ana me ligou.\" English puts me after the verb, which is why \"ligou me\" is the classic mistake. In European Portuguese the pronoun follows the verb here: \"A Ana ligou-me.\"",
  ),
  mc(
    "pt-r-b1-espero-que",
    "B1",
    "grammar",
    "b1-hopes-espero-tomara",
    "Espero que você ___ do presente.",
    ["goste", "gosta", "gostará", "gostasse"],
    0,
    "\"Espero que\" (I hope that) takes the present subjunctive: \"Espero que você goste do presente.\" English uses the plain present (I hope you like it), so \"gosta\" is the usual mistake. \"Gostasse\" is the imperfect subjunctive, for a past or unreal wish.",
  ),
  mc(
    "pt-r-b1-personal-inf",
    "B1",
    "grammar",
    "b1-personal-infinitive-1",
    "Vou falar mais devagar para vocês ___.",
    ["entenderem", "entendam", "entendem", "entenderam"],
    0,
    "After \"para\" + a new subject, Portuguese uses the personal infinitive, an infinitive with a person ending: \"para vocês entenderem\" (so you all understand). The subjunctive \"entendam\" needs \"para que\": \"para que vocês entendam\". \"Entenderam\" is the past (you understood).",
  ),
  mc(
    "pt-r-b2-future-subj",
    "B2",
    "grammar",
    "b2-future-subjunctive-2",
    "Quando você ___ a São Paulo, me liga!",
    ["vier", "vir", "vem", "viesse"],
    0,
    "\"Quando\" about the future takes the future subjunctive, and for \"vir\" (to come) that is \"vier\": \"Quando você vier a São Paulo\". \"Vir\" is a trap: it is the infinitive of to come, but also the future subjunctive of \"ver\" (to see), so \"quando você vir\" means when you see.",
  ),
  typed(
    "pt-r-b2-unreal",
    "B2",
    "grammar",
    "b2-unreal-conditions-1",
    "Se eu ___ mais tempo, aprenderia a tocar violão.",
    "tivesse",
    "If I [had] more time, I would learn to play the guitar.",
    "An unreal condition in the present takes the imperfect subjunctive after \"se\", with the conditional in the other half: \"Se eu tivesse mais tempo, aprenderia...\" For a real future condition you would say \"Se eu tiver tempo, vou aprender\" (future subjunctive).",
  ),
  mc(
    "pt-r-c1-custe",
    "C1",
    "grammar",
    "c1-concessive-reduplication",
    "___ o que custar, vamos terminar a obra até dezembro.",
    ["Custe", "Custa", "Custar", "Custasse"],
    0,
    "The fixed concessive pattern repeats the verb: present subjunctive + \"o que\" + future subjunctive. \"Custe o que custar\" is whatever it takes, like \"aconteça o que acontecer\" (come what may) and \"faça o que fizer\" (whatever you do).",
  ),
  mc(
    "pt-r-c1-estara",
    "C1",
    "grammar",
    "c1-probability-future",
    "O Lucas não atende o celular. Onde ___ ele a uma hora dessas?",
    ["estará", "esteja", "estiver", "estivesse"],
    0,
    "The simple future can guess about the present: \"Onde estará ele?\" (where can he be?). It belongs to careful or written Portuguese; in speech Brazilians say \"Onde será que ele está?\" or \"Ele deve estar...\". The subjunctive forms need a trigger such as \"talvez\" or \"se\".",
  ),
  mc(
    "pt-r-c2-proverb",
    "C2",
    "vocabulary",
    "c2-proverbs-1",
    "What does \"Quem não tem cão caça com gato\" mean?",
    [
      "If you don't have what you need, you make do with what you have.",
      "It is better not to trust people who have pets.",
      "The one who works hardest gets the smallest reward.",
      "You should never change your plans at the last minute.",
    ],
    0,
    "Literally he who has no dog hunts with a cat: you improvise with whatever is at hand. Brazilians say it when a substitute has to do.",
  ),
  mc(
    "pt-r-c2-legal",
    "C2",
    "reading",
    "c2-legal-register",
    "A court summary says: \"O réu foi citado em março.\" What happened in March?",
    [
      "The defendant was formally served with the lawsuit.",
      "The defendant was quoted in the newspapers.",
      "The defendant was found guilty.",
      "The plaintiff dropped the case against the defendant.",
    ],
    0,
    "In a lawsuit \"citação\" is the summons, so \"o réu foi citado\" means the defendant was officially notified of the case. In an essay the same word means a quotation. \"Réu\" is the defendant; the person who sues is the \"autor\".",
  ),
];

// ---- Stage 2: four per level ---------------------------------------------

export const PT_LEVEL_QUESTIONS: Record<PtPlacementLevel, PtPlacementQuestion[]> = {
  A1: [
    mc(
      "pt-a1-plural-ao",
      "A1",
      "grammar",
      "a1-gender-articles-2",
      "Na padaria, eu sempre compro dois ___ de queijo.",
      ["pães", "pãos", "pões", "pãoes"],
      0,
      "Nouns in -ão have three plurals, and you learn each with the word: \"o pão\", \"os pães\"; \"a mão\", \"as mãos\"; \"a estação\", \"as estações\" (the most common pattern).",
    ),
    typed(
      "pt-a1-morar",
      "A1",
      "grammar",
      "a1-ar-verbs-1",
      "Nós ___ em Curitiba.",
      "moramos",
      "We [live] in Curitiba.",
      "\"Morar\" (to live somewhere) is a regular -ar verb, and the nós form ends in -amos: \"nós moramos\". \"Viver\" also means to live, but for where you live Brazilians say \"morar\".",
      ["vivemos"],
    ),
    listen(
      "pt-a1-time",
      "A1",
      "a1-telling-time",
      "São quinze para as três.",
      "What time is it?",
      ["2:45", "3:15", "3:45", "2:15"],
      0,
      "\"Quinze para as três\" is fifteen to three, so 2:45. A quarter past three would be \"três e quinze\".",
    ),
    mc(
      "pt-a1-contraction",
      "A1",
      "grammar",
      "a1-contractions-de-em",
      "A chave está ___ mesa.",
      ["na", "no", "em a", "a"],
      0,
      "\"Em\" + \"a\" always contracts to \"na\": \"na mesa\" (on the table). \"Mesa\" is feminine, so \"no\" (em + o) doesn't fit, and \"em a\" is never written.",
    ),
  ],
  A2: [
    mc(
      "pt-a2-imperfeito",
      "A2",
      "grammar",
      "a2-imperfeito-habits",
      "Quando eu era criança, eu ___ futebol na rua todo sábado.",
      ["jogava", "joguei", "jogo", "vou jogar"],
      0,
      "A childhood habit takes the \"imperfeito\": \"eu jogava\" (I used to play). \"Joguei\" (\"perfeito\") is for one finished game. English often says just I played for both, which is why the choice is hard.",
    ),
    typed(
      "pt-a2-fiz",
      "A2",
      "grammar",
      "a2-perfeito-fazer",
      "Ontem eu ___ o jantar para a família toda.",
      "fiz",
      "Yesterday I [made] dinner for the whole family.",
      "\"Fazer\" is irregular in the \"perfeito\": \"eu fiz\", \"ele fez\", \"nós fizemos\". Note \"eu fiz\" (I) against \"ele fez\" (he).",
    ),
    mc(
      "pt-a2-para",
      "A2",
      "grammar",
      "a2-para",
      "Eu estudo todos os dias ___ passar na prova.",
      ["para", "por", "pelo", "de"],
      0,
      "In order to + a verb is \"para\": \"para passar na prova\" (to pass the exam). \"Por\" means through, by or because of, and \"pelo\" is por + o. In speech you'll often hear \"pra\".",
    ),
    listen(
      "pt-a2-directions",
      "A2",
      "a2-directions",
      "Siga em frente até o sinal e vire à direita na padaria.",
      "What are the directions?",
      [
        "Go straight ahead to the traffic light and turn right at the bakery.",
        "Go straight ahead to the traffic light and turn left at the bakery.",
        "Turn right at the traffic light and go straight on to the bakery.",
        "Go back to the traffic light and turn right at the bakery.",
      ],
      0,
      "\"Siga em frente\" is go straight ahead, \"o sinal\" is the traffic light, and \"vire à direita\" is turn right (left is \"à esquerda\").",
    ),
  ],
  B1: [
    mc(
      "pt-b1-duvido",
      "B1",
      "grammar",
      "b1-acho-que",
      "Duvido que ela ___ a resposta.",
      ["saiba", "sabe", "sabia", "souber"],
      0,
      "Doubt takes the present subjunctive: \"Duvido que ela saiba\" (I doubt she knows). Belief takes the indicative: \"Acho que ela sabe.\" \"Souber\" is the future subjunctive, used after \"se\" or \"quando\".",
    ),
    typed(
      "pt-b1-conditional",
      "B1",
      "grammar",
      "b1-advice-conditional",
      "No seu lugar, eu ___ a proposta.",
      "aceitaria",
      "If I were you, I [would accept] the offer.",
      "Would + verb is the conditional (\"futuro do pretérito\"): \"eu aceitaria\". In relaxed speech many Brazilians use the \"imperfeito\" instead: \"No seu lugar, eu aceitava.\"",
      ["aceitava"],
    ),
    listen(
      "pt-b1-voicemail",
      "B1",
      "b1-polite-requests-b1",
      "Oi, Rafael, aqui é a Beatriz. Não vou conseguir ir à reunião de quinta. Seria possível remarcar para sexta de manhã?",
      "What does Beatriz want?",
      [
        "to move the meeting to Friday morning",
        "to cancel the meeting on Thursday for good",
        "to confirm the meeting on Thursday morning",
        "to move the meeting to Thursday afternoon",
      ],
      0,
      "\"Não vou conseguir ir à reunião de quinta\" is I won't be able to make Thursday's meeting, and \"Seria possível remarcar para sexta de manhã?\" politely asks to move it to Friday morning.",
    ),
    mc(
      "pt-b1-mais-que-perfeito",
      "B1",
      "grammar",
      "b1-mais-que-perfeito-1",
      "Quando cheguei à estação, o trem já ___.",
      ["tinha saído", "tem saído", "sairia", "saísse"],
      0,
      "An action before another past action takes \"tinha\" + participle: \"o trem já tinha saído\" (had already left). Beware \"tem saído\": the Portuguese present perfect means something has been happening repeatedly lately (it has been leaving), not has left.",
    ),
  ],
  B2: [
    mc(
      "pt-b2-proclise",
      "B2",
      "grammar",
      "b2-proclise-attraction",
      "A formal report follows the written norm. Which sentence is correct there?",
      ["Não me informaram o prazo.", "Não informaram-me o prazo.", "Me informaram o prazo.", "Ninguém informou-me o prazo."],
      0,
      "In formal writing, negative words such as \"não\" and \"ninguém\" pull the pronoun in front of the verb: \"Não me informaram\", \"Ninguém me informou\". The norm also avoids starting a sentence with a pronoun, so \"Me informaram\", normal in speech, becomes \"Informaram-me\" in a report.",
    ),
    typed(
      "pt-b2-se-future-subj",
      "B2",
      "grammar",
      "b2-se-future-subj",
      "Se vocês ___ tempo amanhã, passem aqui em casa.",
      "tiverem",
      "If you [have] time tomorrow, come by the house.",
      "A real condition about the future takes the future subjunctive after \"se\": \"se vocês tiverem tempo\". English uses the present (if you have), so \"têm\" is the usual mistake; \"tivessem\" would make it unreal (if you had).",
    ),
    mc(
      "pt-b2-crase",
      "B2",
      "grammar",
      "b2-crase-1",
      "Amanhã eu vou ___ farmácia antes do trabalho.",
      ["à", "a", "há", "ao"],
      0,
      "\"Ir a\" + \"a farmácia\" fuses into \"à\", marked by the grave accent (the \"crase\"): \"vou à farmácia\". \"Há\" is the verb \"haver\" (there is, ago), and \"ao\" is for masculine nouns: \"vou ao mercado\".",
    ),
    mc(
      "pt-b2-nao-deu",
      "B2",
      "vocabulary",
      "b2-dar-expressions",
      "\"Queria ir ao show, mas não deu.\" What does \"não deu\" mean here?",
      ["It didn't work out, so I couldn't go.", "Nobody gave me the ticket.", "The show was cancelled.", "I didn't pay for the ticket."],
      0,
      "\"Dar\" often means to be possible: \"não deu\" is it didn't work out, I couldn't make it, and \"dá para ir a pé?\" is can you walk there? Nothing is being given.",
    ),
  ],
  C1: [
    mc(
      "pt-c1-teria",
      "C1",
      "reading",
      "c1-probability-conditional",
      "A news site reports: \"O ministro teria recebido R$ 2 milhões de uma empreiteira.\" What does \"teria recebido\" tell you?",
      [
        "The minister allegedly received the money: the report doesn't confirm it.",
        "The minister would have received the money if he had asked for it.",
        "The minister is going to receive the money soon.",
        "The minister has confirmed that he received the money.",
      ],
      0,
      "Brazilian journalism uses the conditional for claims it reports but doesn't vouch for: \"teria recebido\" is allegedly received, \"estaria internado\" is reportedly in hospital. A confirmed fact would be \"recebeu\".",
    ),
    mc(
      "pt-c1-reduced-participle",
      "C1",
      "grammar",
      "c1-reduced-participle",
      "___ a reunião, todos foram almoçar.",
      ["Terminada", "Terminado", "Terminadas", "Terminasse"],
      0,
      "A participle can stand for a whole clause (once the meeting was over), and it agrees with its noun: \"a reunião\" is feminine singular, so \"Terminada a reunião\". Likewise \"Feitas as contas\", \"Resolvido o problema\".",
    ),
    listen(
      "pt-c1-ate-que",
      "C1",
      "c1-particles-1",
      "O filme até que é bom.",
      "What does the speaker mean?",
      [
        "The film is actually better than expected.",
        "Even the film is good.",
        "The film is good until the end.",
        "The film is only good in some parts.",
      ],
      0,
      "\"Até que\" before a verb is a little concession: actually, not bad, more than I expected. On its own \"até\" means even (\"até a minha avó\") or until (\"até amanhã\").",
    ),
    mc(
      "pt-c1-pt-progressive",
      "C1",
      "grammar",
      "c1-pt-grammar-differences",
      "A friend from Lisbon writes: \"Estou a ler o jornal.\" How would most Brazilians say it?",
      ["Estou lendo o jornal.", "Estou a lendo o jornal.", "Estou ler o jornal.", "Leio-o o jornal."],
      0,
      "European Portuguese builds the progressive with \"estar a\" + infinitive; Brazil uses \"estar\" + gerund: \"Estou lendo o jornal.\" The two never mix, so \"estou a lendo\" is wrong in both countries.",
    ),
  ],
  C2: [
    mc(
      "pt-c2-eventualmente",
      "C2",
      "vocabulary",
      "c2-false-friends",
      "\"Eventualmente ela trabalha de casa, mas quase sempre vai ao escritório.\" What does \"eventualmente\" mean here?",
      ["occasionally, now and then", "in the end, after a long time", "at the moment", "most of the time"],
      0,
      "\"Eventualmente\" means occasionally or possibly, never eventually. English eventually is \"acabou\" + gerund or \"no fim\": \"Ele acabou aceitando\" (he eventually accepted).",
    ),
    mc(
      "pt-c2-burros",
      "C2",
      "vocabulary",
      "c2-idioms-advanced",
      "\"O restaurante do Marcelo deu com os burros n'água em menos de um ano.\" What happened to it?",
      [
        "It went under: the business failed.",
        "It was flooded in the rainy season.",
        "It became popular with the tourists.",
        "It moved to a new spot by the river.",
      ],
      0,
      "\"Dar com os burros n'água\" (literally to drive the donkeys into the water) is to fail, to come to nothing: a business that flops, a plan that gets nowhere.",
    ),
    mc(
      "pt-c2-nega-febre",
      "C2",
      "reading",
      "c2-medical-register",
      "A hospital record says: \"Paciente nega febre.\" What does it tell you?",
      [
        "The patient says that there has been no fever.",
        "The patient refuses to be treated for the fever.",
        "The patient is lying about the fever.",
        "The doctor rules out a fever after the tests.",
      ],
      0,
      "In medical records \"negar\" simply reports a symptom the patient says they don't have: \"nega febre\" is denies fever, no fever reported. \"Refere\" is the opposite: \"refere cefaleia\" (complains of a headache).",
    ),
    mc(
      "pt-c2-anexas",
      "C2",
      "grammar",
      "c2-agreement-traps",
      "Which sentence follows the written norm in a formal email?",
      ["Seguem anexas as planilhas.", "Seguem anexo as planilhas.", "Segue anexos as planilhas.", "Segue anexas as planilhas."],
      0,
      "\"Anexo\" is an adjective, so it agrees with the noun (\"as planilhas\", feminine plural: \"anexas\"), and the verb agrees with the plural subject: \"Seguem anexas as planilhas.\" \"Em anexo\" is the invariable alternative.",
    ),
  ],
};

/** Stage-2 questions right (of a level's four) for that level to pass. */
export const PT_STAGE2_PASS = 3;
/** Every learner answers this many: the router plus two levels' sets. */
export const PT_PLACEMENT_TOTAL = PT_ROUTER_QUESTIONS.length + 2 * PT_LEVEL_QUESTIONS.A1.length;

export type PtPlacementBand = [PtPlacementLevel, PtPlacementLevel];

// Router score (of 12) to band, as in the German test.
const BAND_CUTOFFS: [minCorrect: number, band: PtPlacementBand][] = [
  [11, ["C1", "C2"]],
  [9, ["B2", "C1"]],
  [7, ["B1", "B2"]],
  [5, ["A2", "B1"]],
  [0, ["A1", "A2"]],
];

export function ptRouteBand(routerCorrect: number): PtPlacementBand {
  return BAND_CUTOFFS.find(([min]) => routerCorrect >= min)![1];
}

/** Answers so far: question id to answered correctly. */
export type PtPlacementAnswers = Record<string, boolean>;

function routerScore(answers: PtPlacementAnswers): number | null {
  if (!PT_ROUTER_QUESTIONS.every((q) => q.id in answers)) return null;
  return PT_ROUTER_QUESTIONS.filter((q) => answers[q.id]).length;
}

export function ptPlacementBand(answers: PtPlacementAnswers): PtPlacementBand | null {
  const score = routerScore(answers);
  return score === null ? null : ptRouteBand(score);
}

/** Every question this learner gets, in order, as far as is known. */
export function ptPlacementQuestions(answers: PtPlacementAnswers): PtPlacementQuestion[] {
  const band = ptPlacementBand(answers);
  return band ? [...PT_ROUTER_QUESTIONS, ...PT_LEVEL_QUESTIONS[band[0]], ...PT_LEVEL_QUESTIONS[band[1]]] : PT_ROUTER_QUESTIONS;
}

/** The next unanswered question, its position (0-based) and stage, or null when the test is done. */
export function nextPtPlacementQuestion(
  answers: PtPlacementAnswers,
): { question: PtPlacementQuestion; index: number; stage: 1 | 2 } | null {
  const questions = ptPlacementQuestions(answers);
  const index = questions.findIndex((q) => !(q.id in answers));
  if (index === -1) return null;
  return { question: questions[index], index, stage: index < PT_ROUTER_QUESTIONS.length ? 1 : 2 };
}

// ---- Saved progress (localStorage) ---------------------------------------

export const PT_PLACEMENT_PROGRESS_KEY = "deepend-pt-placement-progress";

const KNOWN_IDS = new Set([...PT_ROUTER_QUESTIONS, ...Object.values(PT_LEVEL_QUESTIONS).flat()].map((q) => q.id));

/** Saved answers worth resuming, or null. */
export function normalizePtPlacementProgress(raw: unknown): PtPlacementAnswers | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (r.version !== 1 || !r.answers || typeof r.answers !== "object") return null;
  const answers: PtPlacementAnswers = {};
  for (const [id, v] of Object.entries(r.answers as Record<string, unknown>)) {
    if (KNOWN_IDS.has(id) && typeof v === "boolean") answers[id] = v;
  }
  if (!Object.keys(answers).length || !nextPtPlacementQuestion(answers)) return null;
  return answers;
}

// ---- Scoring --------------------------------------------------------------

export type PtPlacementLevelResult = {
  level: PtPlacementLevel;
  correct: number;
  total: number;
  status: "passed-routing" | "passed" | "gaps" | "not-reached";
  passed: boolean;
};

export type PtPlacementScore = {
  results: PtPlacementLevelResult[];
  band: PtPlacementBand;
  recommendedLevel: PtPlacementLevel;
  /** Both levels of a C1-C2 band passed: nothing above to recommend. */
  masteredEverything: boolean;
  correct: number;
  total: number;
};

export function scorePtPlacementTest(answers: PtPlacementAnswers): PtPlacementScore {
  const band = ptPlacementBand(answers) ?? ptRouteBand(0);
  const [lo, hi] = band.map((l) => PT_PLACEMENT_LEVELS.indexOf(l));
  const asked = ptPlacementQuestions(answers);
  const results = PT_PLACEMENT_LEVELS.map((level, i): PtPlacementLevelResult => {
    const qs = asked.filter((q) => q.level === level);
    const correct = qs.filter((q) => answers[q.id]).length;
    let status: PtPlacementLevelResult["status"];
    if (i < lo) status = "passed-routing";
    else if (i > hi) status = "not-reached";
    else status = PT_LEVEL_QUESTIONS[level].filter((q) => answers[q.id]).length >= PT_STAGE2_PASS ? "passed" : "gaps";
    return { level, correct, total: qs.length, status, passed: status === "passed" || status === "passed-routing" };
  });
  const firstGap = results.find((r) => r.status === "gaps");
  return {
    results,
    band,
    recommendedLevel: firstGap ? firstGap.level : PT_PLACEMENT_LEVELS[Math.min(hi + 1, PT_PLACEMENT_LEVELS.length - 1)],
    masteredEverything: !firstGap && hi === PT_PLACEMENT_LEVELS.length - 1,
    correct: asked.filter((q) => answers[q.id]).length,
    total: asked.length,
  };
}

/** Every question answered wrong, in the order asked. */
export function ptMissedQuestions(answers: PtPlacementAnswers): PtPlacementQuestion[] {
  return ptPlacementQuestions(answers).filter((q) => q.id in answers && !answers[q.id]);
}

/** A one-line label for a question (results list). */
export function ptPlacementQuestionText(q: PtPlacementQuestion): string {
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
export const PT_PLACEMENT_BANK: PtPlacementQuestion[] = [...PT_ROUTER_QUESTIONS, ...Object.values(PT_LEVEL_QUESTIONS).flat()];
