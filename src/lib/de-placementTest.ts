// Synced from cheneygross-afk/lengo:src/lib/de-placementTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./lessons/types";

// The German course's placement test (/lessons/de/placement): the same
// two-stage adaptive design as the French one (src/lib/fr-placementTest.ts),
// with its own questions.
//
//   Stage 1 (the router): 12 questions, two per level from A1 to C2, in
//   rising difficulty. The number right picks a band of two adjacent
//   levels (deRouteBand).
//   Stage 2: the four questions of each of the band's two levels (8), so
//   20 questions in all, whoever takes it (36 in the bank).
//
// The recommendation is the first level with gaps: the band's lower level
// if it fails, else its upper level if that fails, else the level above
// the band. A level in the band passes with DE_STAGE2_PASS of its four
// stage-2 questions right.
//
// Levels follow the Goethe-Zertifikat (A1 to C2). Instructions are in
// English for every level; the German is standard German as spoken in
// Germany and sits in "double quotes" inside English text, so the German
// voice reads it. Listening items are played with the course's
// text-to-speech. Each question links to a lesson of its level that
// teaches the point (/lessons/de/<level>/<slug>).

export type DePlacementLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type DePlacementSkill = "grammar" | "vocabulary" | "reading" | "listening";

export type DePlacementQuestion = Exercise & {
  /** Stable id: answers and saved progress are keyed by it. */
  id: string;
  level: DePlacementLevel;
  skill: DePlacementSkill;
  /** Slug of the lesson (at this question's level) that teaches the point. */
  relatedLessonSlug: string;
};

export const DE_PLACEMENT_LEVELS: DePlacementLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const mc = (
  id: string,
  level: DePlacementLevel,
  skill: DePlacementSkill,
  relatedLessonSlug: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): DePlacementQuestion => ({ id, level, skill, relatedLessonSlug, type: "multiple-choice", question, options, correctIndex, explanation });

const listen = (
  id: string,
  level: DePlacementLevel,
  relatedLessonSlug: string,
  audio: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): DePlacementQuestion => ({ id, level, skill: "listening", relatedLessonSlug, type: "listen-choose", audio, question, options, correctIndex, explanation });

// A typed answer, asked as a translation: `en` is the English sentence with
// [brackets] around the words the blank stands for.
const typed = (
  id: string,
  level: DePlacementLevel,
  skill: DePlacementSkill,
  relatedLessonSlug: string,
  sentence: string,
  answer: string,
  en: string,
  explanation: string,
  altAnswers?: string[],
): DePlacementQuestion => ({
  id,
  level,
  skill,
  relatedLessonSlug,
  type: "fill-blank",
  prompt: "How do you say the bold words in German?",
  sentence,
  answer,
  en,
  ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
  explanation,
});

// ---- Stage 1: the router (2 per level, easiest first) ------------------

export const DE_ROUTER_QUESTIONS: DePlacementQuestion[] = [
  mc(
    "de-r-a1-sein",
    "A1",
    "grammar",
    "a1-sein-present",
    "Wir ___ Studenten aus Berlin.",
    ["sind", "seid", "ist", "bist"],
    0,
    "\"Wir sind\": \"sein\" (to be) with \"wir\". \"Ihr seid\" is you (plural), \"er ist\" is he is, and \"du bist\" is you (to one friend).",
  ),
  listen(
    "de-r-a1-family",
    "A1",
    "a1-word-web-family",
    "Ich habe zwei Brüder und eine Schwester.",
    "What did you hear?",
    ["I have two brothers and a sister.", "I have two sisters and a brother.", "I have two brothers and no sister.", "My brother has two sisters."],
    0,
    "\"Zwei Brüder\" are two brothers (the umlaut marks the plural of \"der Bruder\"), and \"eine Schwester\" is one sister.",
  ),
  mc(
    "de-r-a2-perfekt-sein",
    "A2",
    "grammar",
    "a2-perfekt-sein-1",
    "Gestern ___ wir nach Hamburg gefahren.",
    ["sind", "haben", "hat", "seid"],
    0,
    "Verbs of movement from A to B, like \"fahren\", form the Perfekt with \"sein\": \"wir sind gefahren\". English always says have, which is why \"*wir haben gefahren*\" is the classic mistake.",
  ),
  typed(
    "de-r-a2-dative",
    "A2",
    "grammar",
    "a2-dative-verbs",
    "Kannst du ___ helfen? Ich finde meinen Schlüssel nicht.",
    "mir",
    "Can you help [me]? I can't find my key.",
    "\"Helfen\" takes the dative, so me is \"mir\", not \"mich\": \"Kannst du mir helfen?\" English has no difference here, German does.",
  ),
  mc(
    "de-r-b1-konj2",
    "B1",
    "grammar",
    "b1-konjunktiv-ii-forms-1",
    "Wenn ich mehr Zeit ___, würde ich Klavier lernen.",
    ["hätte", "habe", "hatte", "hätte gehabt"],
    0,
    "An unreal condition in the present takes Konjunktiv II: \"wenn ich mehr Zeit hätte\" (if I had more time). \"Hatte\" is the plain past, and \"hätte gehabt\" would be the unreal past (if I had had).",
  ),
  mc(
    "de-r-b1-relative",
    "B1",
    "grammar",
    "b1-relative-clauses-2",
    "Das ist der Mann, ___ ich gestern geholfen habe.",
    ["dem", "den", "der", "dessen"],
    0,
    "The relative pronoun takes its case from its own clause: \"helfen\" needs the dative, so it is \"der Mann, dem ich geholfen habe\". \"Den\" would be accusative, \"dessen\" means whose.",
  ),
  mc(
    "de-r-b2-soll",
    "B2",
    "grammar",
    "b2-subjective-modals-2",
    "Er ___ sehr reich sein. Das sagen jedenfalls alle im Dorf.",
    ["soll", "muss", "will", "darf"],
    0,
    "\"Sollen\" can report what others say: \"Er soll reich sein\" is he is said to be rich. \"Er muss reich sein\" is your own conclusion (he must be rich), and \"er will reich sein\" is his own claim.",
  ),
  typed(
    "de-r-b2-konj2-past",
    "B2",
    "grammar",
    "b2-konjunktiv-ii-past-1",
    "Wenn du mich angerufen hättest, ___ ich dich vom Bahnhof abgeholt.",
    "hätte",
    "If you had called me, I [would have] picked you up from the station.",
    "The unreal past is Konjunktiv II of \"haben\" or \"sein\" + participle on both sides: \"Wenn du mich angerufen hättest, hätte ich dich abgeholt.\" \"Abholen\" takes \"haben\", so would have is \"hätte\".",
  ),
  mc(
    "de-r-c1-wie-auch",
    "C1",
    "grammar",
    "c1-concession-2",
    "Which is the usual way to complete \"Wie sehr er sich auch bemüht, ___\" (however hard he tries, he doesn't manage it)?",
    ["er schafft es nicht", "schafft er es nicht", "er es nicht schafft", "es nicht er schafft"],
    0,
    "A concessive clause with \"wie ... auch\" stands outside the main clause, so the main clause normally keeps its own word order: \"Wie sehr er sich auch bemüht, er schafft es nicht.\" Inverted \"schafft er es nicht\" is also heard, but it is the less usual choice; \"er es nicht schafft\" is subordinate-clause order and wrong here.",
  ),
  mc(
    "de-r-c1-jaenner",
    "C1",
    "vocabulary",
    "c1-regional-vocabulary-2",
    "In Austria you read \"am 15. Jänner\". What is \"der Jänner\"?",
    ["January", "a public holiday", "the weekend", "a market day"],
    0,
    "\"Jänner\" is the Austrian word for January, used in speech, newspapers and official documents. Germany says \"Januar\".",
  ),
  mc(
    "de-r-c2-idiom",
    "C2",
    "vocabulary",
    "c2-idioms-1",
    "What does \"Tomaten auf den Augen haben\" mean?",
    ["to fail to see something obvious", "to be red in the face with embarrassment", "to have been crying", "to be very tired"],
    0,
    "\"Hast du Tomaten auf den Augen?\" is a teasing way of asking someone how they could miss something right in front of them.",
  ),
  mc(
    "de-r-c2-reading",
    "C2",
    "reading",
    "c2-euphemisms-1",
    "Read the death notice: \"Er verstarb nach kurzer, schwerer Krankheit.\" What does it tell you?",
    ["He died of a serious illness that came on suddenly.", "He was ill for many years before he died.", "He recovered quickly from a serious illness.", "He died in an accident."],
    0,
    "\"Nach kurzer, schwerer Krankheit\" is the tactful formula for a sudden fatal illness; \"nach langer, schwerer Krankheit\" means a long one, often cancer, which the notice does not name.",
  ),
];

// ---- Stage 2: four per level ---------------------------------------------

export const DE_LEVEL_QUESTIONS: Record<DePlacementLevel, DePlacementQuestion[]> = {
  A1: [
    mc(
      "de-a1-accusative",
      "A1",
      "grammar",
      "a1-accusative-1",
      "Ich habe ___ Bruder und eine Schwester.",
      ["einen", "ein", "einem", "eine"],
      0,
      "\"Haben\" takes the accusative, and only the masculine changes: \"der Bruder\" becomes \"einen Bruder\". Feminine \"eine Schwester\" stays the same.",
    ),
    typed(
      "de-a1-kein",
      "A1",
      "grammar",
      "a1-nicht-kein",
      "Ich habe heute leider ___ Zeit.",
      "keine",
      "Unfortunately I have [no] time today.",
      "A noun is negated with \"kein\", not \"nicht\", and \"kein\" takes the endings of \"ein\": \"die Zeit\", so \"keine Zeit\".",
    ),
    listen(
      "de-a1-time",
      "A1",
      "a1-telling-time-1",
      "Der Zug fährt um halb drei.",
      "When does the train leave?",
      ["2:30", "3:30", "3:00", "2:03"],
      0,
      "\"Halb drei\" is half way to three, so 2:30. British half three means 3:30, which makes this one of the most common mix-ups.",
    ),
    mc(
      "de-a1-separable",
      "A1",
      "grammar",
      "a1-separable-verbs-1",
      "When are you getting up tomorrow? \"Wann stehst du morgen ___?\"",
      ["auf", "an", "ein", "aus"],
      0,
      "\"Aufstehen\" (to get up) is a separable verb: the verb goes second and the prefix \"auf\" goes to the end: \"Wann stehst du morgen auf?\"",
    ),
  ],
  A2: [
    mc(
      "de-a2-praeteritum",
      "A2",
      "grammar",
      "a2-praeteritum-1",
      "Letzte Woche ___ ich krank und konnte nicht arbeiten.",
      ["war", "bin", "habe", "sei"],
      0,
      "With \"sein\", German prefers the Präteritum even in speech: \"ich war krank\" (I was ill). \"Bin\" is present, and \"sei\" is Konjunktiv I, used for reported speech.",
    ),
    typed(
      "de-a2-wohin",
      "A2",
      "grammar",
      "a2-wechselpraepositionen-1",
      "Ich lege das Buch auf ___ Tisch.",
      "den",
      "I'm putting the book on [the] table.",
      "\"Auf\" is a two-way preposition. Movement to a place (\"wohin?\") takes the accusative: \"auf den Tisch\". Once it is there (\"wo?\"), it is dative: \"Das Buch liegt auf dem Tisch.\"",
    ),
    mc(
      "de-a2-adjective",
      "A2",
      "grammar",
      "a2-adjective-endings-mixed-1",
      "Ich habe einen ___ Freund in München.",
      ["guten", "gute", "guter", "gutes"],
      0,
      "Masculine accusative after \"einen\" takes \"-en\": \"einen guten Freund\". \"Ein guter Freund\" is the nominative, the subject form.",
    ),
    listen(
      "de-a2-ticket",
      "A2",
      "a2-survival-transport",
      "Einmal nach Köln, hin und zurück, bitte.",
      "What does the speaker want?",
      ["a return ticket to Cologne", "a one-way ticket to Cologne", "directions to Cologne", "a seat reservation to Cologne"],
      0,
      "\"Hin und zurück\" (there and back) is a return ticket; one way is \"einfach\". \"Einmal\" here means one ticket.",
    ),
  ],
  B1: [
    mc(
      "de-b1-da-compound",
      "B1",
      "grammar",
      "b1-da-wo-compounds-1",
      "Freust du dich auf die Ferien? Ja, ich freue mich sehr ___.",
      ["darauf", "auf sie", "worauf", "dafür"],
      0,
      "\"Sich freuen auf\" keeps its preposition. For a thing, German uses \"da-\" + preposition: \"darauf\" (looking forward to it). \"Auf sie\" would point to a person, and \"worauf\" asks a question.",
    ),
    typed(
      "de-b1-passive",
      "B1",
      "grammar",
      "b1-passive-1",
      "Das Haus ___ 1910 gebaut.",
      "wurde",
      "The house [was] built in 1910.",
      "The passive is \"werden\" + participle, and in the past that is \"wurde\": \"Das Haus wurde 1910 gebaut.\" English uses to be, so \"war\" is the usual mistake; \"war gebaut\" describes a state, not the building of it.",
    ),
    listen(
      "de-b1-call",
      "B1",
      "b1-survival-phone-calls",
      "Ich rufe wegen meines Termins an. Könnten wir ihn auf Donnerstag verschieben? Am Mittwoch klappt es bei mir leider nicht.",
      "What does the caller want?",
      ["to move the appointment to Thursday", "to cancel the appointment", "to confirm the appointment on Wednesday", "to move the appointment to Wednesday"],
      0,
      "\"Auf Donnerstag verschieben\" is to postpone to Thursday, because Wednesday doesn't work (\"klappt nicht\").",
    ),
    mc(
      "de-b1-um-zu",
      "B1",
      "grammar",
      "b1-damit-um-zu-1",
      "Ich lerne Deutsch, ___ in Berlin zu arbeiten.",
      ["um", "damit", "für", "dass"],
      0,
      "In order to, with the same subject, is \"um ... zu\" + infinitive: \"um in Berlin zu arbeiten\". \"Damit\" needs a full clause with its own verb, and \"für\" can't introduce a verb at all.",
    ),
  ],
  B2: [
    mc(
      "de-b2-konj1",
      "B2",
      "grammar",
      "b2-konjunktiv-i-1",
      "In a news report: \"Der Sprecher sagte, die Firma ___ keine Pläne für Entlassungen.\" Which is the Konjunktiv I form that the report uses?",
      ["habe", "hat", "hätte", "haben"],
      0,
      "News German reports statements in Konjunktiv I, which keeps a neutral distance: \"die Firma habe\". \"Hat\" is the indicative of everyday speech; \"hätte\" stands in only where Konjunktiv I looks like the indicative (\"sie hätten\" for \"sie haben\").",
    ),
    mc(
      "de-b2-partizip",
      "B2",
      "grammar",
      "b2-partizipialattribute-1",
      "\"die Mail, die gestern von ihm geschrieben wurde\" becomes \"die gestern von ihm ___ Mail\". Which form fills the gap?",
      ["geschriebene", "geschrieben", "geschriebenen", "schreibende"],
      0,
      "The participle becomes an adjective in front of the noun and takes a normal ending: after \"die\" in the nominative, \"die ... geschriebene Mail\". \"Schreibende\" would mean writing, not written.",
    ),
    typed(
      "de-b2-obwohl",
      "B2",
      "grammar",
      "b2-concessive-adversative-1",
      "___ es regnete, sind wir spazieren gegangen.",
      "Obwohl",
      "[Although] it was raining, we went for a walk.",
      "\"Obwohl\" joins a clause and sends its verb to the end. \"Trotzdem\" is an adverb (\"Es regnete, trotzdem sind wir...\"), and \"trotz\" is a preposition (\"trotz des Regens\").",
      ["Obgleich", "Obschon"],
    ),
    mc(
      "de-b2-fvg",
      "B2",
      "vocabulary",
      "b2-funktionsverbgefuege",
      "Die Firma stellt den Mitarbeitern Laptops zur ___.",
      ["Verfügung", "Verwendung", "Hilfe", "Bereitschaft"],
      0,
      "\"Etwas zur Verfügung stellen\" (to make something available, to provide) is a fixed verb-noun phrase of formal German.",
    ),
  ],
  C1: [
    mc(
      "de-c1-letter",
      "C1",
      "vocabulary",
      "c1-formal-correspondence-1",
      "A formal email begins \"Sehr geehrte Frau Weber,\". Which first line follows correctly?",
      [
        "vielen Dank für Ihre Nachricht vom 5. Mai.",
        "Vielen Dank für Ihre Nachricht vom 5. Mai.",
        "vielen Dank für ihre Nachricht vom 5. Mai.",
        "vielen Dank für deine Nachricht vom 5. Mai.",
      ],
      0,
      "After the comma the letter continues in lowercase, because the salutation and the first sentence count as one sentence. The polite \"Ihre\" keeps its capital, and \"deine\" is far too familiar here.",
    ),
    mc(
      "de-c1-erlebte-rede",
      "C1",
      "reading",
      "c1-literary-narration-4",
      "In a novel: \"Sie sah auf die Uhr. Morgen würde sie es ihm sagen. Ja, morgen!\" What are the last two sentences?",
      [
        "her thoughts, told in the narrator's voice (\"erlebte Rede\")",
        "words she says aloud to him",
        "the narrator's comment on what will happen",
        "reported speech in Konjunktiv I",
      ],
      0,
      "Third person and past tense, but the voice is hers: \"würde\" as the future in the past, \"Ja, morgen!\" as her own exclamation. That is \"erlebte Rede\" (free indirect speech).",
    ),
    mc(
      "de-c1-ausgerechnet",
      "C1",
      "vocabulary",
      "c1-emphasis-focus-2",
      "\"Ausgerechnet heute ist mein Zug ausgefallen!\" What does \"ausgerechnet\" add?",
      ["today of all days (annoyance)", "as calculated", "only today", "finally, at last"],
      0,
      "\"Ausgerechnet\" marks the worst possible choice, with annoyance or irony: today of all days. It has nothing to do with calculating, despite \"rechnen\".",
    ),
    listen(
      "de-c1-semmel",
      "C1",
      "c1-regional-vocabulary-1",
      "Grüß Gott! Ich hätte gern drei Semmeln und eine Breze, bitte.",
      "What is the customer buying?",
      ["three bread rolls and a pretzel", "three slices of cake and a coffee", "three loaves of bread and a doughnut", "three croissants and a sandwich"],
      0,
      "In Bavaria and Austria a bread roll is \"die Semmel\" (standard \"Brötchen\") and a pretzel is \"die Breze\" (standard \"Brezel\"). \"Grüß Gott\" is the southern greeting.",
    ),
  ],
  C2: [
    mc(
      "de-c2-bescheid",
      "C2",
      "vocabulary",
      "c2-contrast-urteil-beschluss-bescheid",
      "A letter from the tax office is headed \"Bescheid\". What is it?",
      ["an official decision by an authority", "a court judgment", "a contract offer", "a reminder from a lawyer"],
      0,
      "\"Ein Bescheid\" is an administrative decision, such as a tax assessment (\"Steuerbescheid\"). A court decides by \"Urteil\" or \"Beschluss\".",
    ),
    mc(
      "de-c2-zeugnis",
      "C2",
      "reading",
      "c2-euphemisms-2",
      "A job reference (\"Arbeitszeugnis\") says: \"Er war stets bemüht, die ihm übertragenen Aufgaben zu erledigen.\" What does it really mean?",
      ["His work was very poor.", "His work was excellent.", "He often worked overtime.", "He was always punctual."],
      0,
      "References must sound kind, so they use a code. \"Stets bemüht\" (always tried) means he tried and failed: the worst grade. Good work reads \"stets zu unserer vollsten Zufriedenheit\".",
    ),
    mc(
      "de-c2-erei",
      "C2",
      "vocabulary",
      "c2-suffixes-2",
      "\"Diese ewige Fragerei geht mir auf die Nerven!\" What does the ending \"-erei\" add to \"fragen\"?",
      ["annoyance at something repeated endlessly", "a small or cute version", "a place where it happens", "a person who does it"],
      0,
      "\"-erei\" turns a verb into an activity noun with a note of annoyance at its repetition: \"die Fragerei\" (endless questions), \"die Raserei\" (speeding).",
    ),
    mc(
      "de-c2-kein-blatt",
      "C2",
      "vocabulary",
      "c2-idioms-1",
      "\"Sie nimmt sich kein Blatt vor den Mund.\" What kind of person is she?",
      ["She speaks her mind bluntly.", "She never says a word in meetings.", "She always reads from notes.", "She eats very little."],
      0,
      "\"Sich kein Blatt vor den Mund nehmen\" (literally to put no leaf in front of one's mouth) is to say what you think without mincing words.",
    ),
  ],
};

/** Stage-2 questions right (of a level's four) for that level to pass. */
export const DE_STAGE2_PASS = 3;
/** Every learner answers this many: the router plus two levels' sets. */
export const DE_PLACEMENT_TOTAL = DE_ROUTER_QUESTIONS.length + 2 * DE_LEVEL_QUESTIONS.A1.length;

export type DePlacementBand = [DePlacementLevel, DePlacementLevel];

// Router score (of 12) to band, as in the Spanish test.
const BAND_CUTOFFS: [minCorrect: number, band: DePlacementBand][] = [
  [11, ["C1", "C2"]],
  [9, ["B2", "C1"]],
  [7, ["B1", "B2"]],
  [5, ["A2", "B1"]],
  [0, ["A1", "A2"]],
];

export function deRouteBand(routerCorrect: number): DePlacementBand {
  return BAND_CUTOFFS.find(([min]) => routerCorrect >= min)![1];
}

/** Answers so far: question id to answered correctly. */
export type DePlacementAnswers = Record<string, boolean>;

function routerScore(answers: DePlacementAnswers): number | null {
  if (!DE_ROUTER_QUESTIONS.every((q) => q.id in answers)) return null;
  return DE_ROUTER_QUESTIONS.filter((q) => answers[q.id]).length;
}

export function dePlacementBand(answers: DePlacementAnswers): DePlacementBand | null {
  const score = routerScore(answers);
  return score === null ? null : deRouteBand(score);
}

/** Every question this learner gets, in order, as far as is known. */
export function dePlacementQuestions(answers: DePlacementAnswers): DePlacementQuestion[] {
  const band = dePlacementBand(answers);
  return band ? [...DE_ROUTER_QUESTIONS, ...DE_LEVEL_QUESTIONS[band[0]], ...DE_LEVEL_QUESTIONS[band[1]]] : DE_ROUTER_QUESTIONS;
}

/** The next unanswered question, its position (0-based) and stage, or null when the test is done. */
export function nextDePlacementQuestion(
  answers: DePlacementAnswers,
): { question: DePlacementQuestion; index: number; stage: 1 | 2 } | null {
  const questions = dePlacementQuestions(answers);
  const index = questions.findIndex((q) => !(q.id in answers));
  if (index === -1) return null;
  return { question: questions[index], index, stage: index < DE_ROUTER_QUESTIONS.length ? 1 : 2 };
}

// ---- Saved progress (localStorage) ---------------------------------------

export const DE_PLACEMENT_PROGRESS_KEY = "deepend-de-placement-progress";

const KNOWN_IDS = new Set([...DE_ROUTER_QUESTIONS, ...Object.values(DE_LEVEL_QUESTIONS).flat()].map((q) => q.id));

/** Saved answers worth resuming, or null. */
export function normalizeDePlacementProgress(raw: unknown): DePlacementAnswers | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (r.version !== 1 || !r.answers || typeof r.answers !== "object") return null;
  const answers: DePlacementAnswers = {};
  for (const [id, v] of Object.entries(r.answers as Record<string, unknown>)) {
    if (KNOWN_IDS.has(id) && typeof v === "boolean") answers[id] = v;
  }
  if (!Object.keys(answers).length || !nextDePlacementQuestion(answers)) return null;
  return answers;
}

// ---- Scoring --------------------------------------------------------------

export type DePlacementLevelResult = {
  level: DePlacementLevel;
  correct: number;
  total: number;
  status: "passed-routing" | "passed" | "gaps" | "not-reached";
  passed: boolean;
};

export type DePlacementScore = {
  results: DePlacementLevelResult[];
  band: DePlacementBand;
  recommendedLevel: DePlacementLevel;
  /** Both levels of a C1-C2 band passed: nothing above to recommend. */
  masteredEverything: boolean;
  correct: number;
  total: number;
};

export function scoreDePlacementTest(answers: DePlacementAnswers): DePlacementScore {
  const band = dePlacementBand(answers) ?? deRouteBand(0);
  const [lo, hi] = band.map((l) => DE_PLACEMENT_LEVELS.indexOf(l));
  const asked = dePlacementQuestions(answers);
  const results = DE_PLACEMENT_LEVELS.map((level, i): DePlacementLevelResult => {
    const qs = asked.filter((q) => q.level === level);
    const correct = qs.filter((q) => answers[q.id]).length;
    let status: DePlacementLevelResult["status"];
    if (i < lo) status = "passed-routing";
    else if (i > hi) status = "not-reached";
    else status = DE_LEVEL_QUESTIONS[level].filter((q) => answers[q.id]).length >= DE_STAGE2_PASS ? "passed" : "gaps";
    return { level, correct, total: qs.length, status, passed: status === "passed" || status === "passed-routing" };
  });
  const firstGap = results.find((r) => r.status === "gaps");
  return {
    results,
    band,
    recommendedLevel: firstGap ? firstGap.level : DE_PLACEMENT_LEVELS[Math.min(hi + 1, DE_PLACEMENT_LEVELS.length - 1)],
    masteredEverything: !firstGap && hi === DE_PLACEMENT_LEVELS.length - 1,
    correct: asked.filter((q) => answers[q.id]).length,
    total: asked.length,
  };
}

/** Every question answered wrong, in the order asked. */
export function deMissedQuestions(answers: DePlacementAnswers): DePlacementQuestion[] {
  return dePlacementQuestions(answers).filter((q) => q.id in answers && !answers[q.id]);
}

/** A one-line label for a question (results list). */
export function dePlacementQuestionText(q: DePlacementQuestion): string {
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
export const DE_PLACEMENT_BANK: DePlacementQuestion[] = [...DE_ROUTER_QUESTIONS, ...Object.values(DE_LEVEL_QUESTIONS).flat()];
