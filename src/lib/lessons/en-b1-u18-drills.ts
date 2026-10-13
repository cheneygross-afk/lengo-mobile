// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u18-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lesson for EN-B1 unit u18 (review of the first half of the level, u01-u17): a short recap, then graded mixed practice.

// ---- small authoring helpers (local to this file) ----------------------
// Answer patterns use {a|b|} for alternatives; every combination is
// accepted, and the first combination is the main answer.
function x(p: string): string[] {
  const m = p.match(/\{([^{}]*)\}/);
  if (!m || m.index === undefined) return [p.replace(/\s+/g, " ").replace(/\s+([,.!?;])/g, "$1").trim()];
  const out: string[] = [];
  for (const opt of m[1].split("|")) out.push(...x(p.slice(0, m.index) + opt + p.slice(m.index + m[0].length)));
  return out;
}
function xs(ps: string | string[]): string[] {
  return [...new Set((Array.isArray(ps) ? ps : [ps]).flatMap(x))];
}
const tr = (source: string, answers: string | string[], explanation: string, prompt = "Translate into English."): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "translate", direction: "es-en", prompt, source, answer, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const fb = (sentence: string, answers: string | string[], en: string, explanation: string): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });
const wo = (sentence: string, translation: string, explanation: string, alts?: string[]): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  ...(alts ? { altOrders: alts.map((a) => a.split(" ")) } : {}),
  explanation,
});
const dc = (audio: string, explanation: string): Exercise => ({ type: "dictation", audio, explanation });
const lc = (audio: string, options: string[], explanation: string, question = "What did you hear?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  topic: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b1-${topic}-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});
const say = (text: string, spanish: string, tip: string, explanation: string): Exercise => sp(text, explanation, tip, `Say in English: «${spanish}»`);

export const EN_B1_U18_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Review of the first half of the level (u01-u17): tenses,
  // used to, future forms, conditionals and wishes, modals, the passive,
  // have something done and relative clauses
  // ---------------------------------------------------------------------
  lesson(
    1,
    "first-half-review",
    "B1 First Half Review",
    "Use the main structures of the first half of the level in one mixed set: tenses, used to, the future, conditionals and wishes, modals, the passive and relative clauses.",
    "Recap: the big structures so far",
    [
      "Tenses: the present perfect continuous for «llevo... -ando» (\"I've been working here for two years\"), the past perfect for the earlier past in a story, \"used to\" for past habits, and \"going to\", the present continuous or \"will\" for the future.",
      "Conditionals and wishes: \"If I had..., I would...\", \"If I had known, I would have...\", \"I wish I had...\". Modals: obligation (must, have to, don't have to, should) and deduction (must be, can't be, might have).",
      "The passive (\"was built\", \"has been sold\"), have something done (\"I had my car fixed\"), and relative clauses with who, which, that, where, whose and what.",
    ],
    [
      ["We've been waiting for an hour.", "Llevamos una hora esperando."],
      ["If I were you, I'd take the job.", "Yo que tú, aceptaría el trabajo."],
      ["This bridge was built in 1920.", "Este puente se construyó en 1920."],
      ["That's the woman whose son works with me.", "Esa es la mujer cuyo hijo trabaja conmigo."],
    ],
    [
      mc(
        "«Llevo tres años estudiando inglés.»",
        ["I've been studying English for three years.", "I study English since three years.", "I'm studying English for three years.", "I've been studying English since three years."],
        "An action that started in the past and continues now = present perfect continuous. A length of time takes \"for\"; \"since\" needs a starting point.",
      ),
      fb(
        "She ___ in this company since 2019.",
        ["has been working", "has worked"],
        "[Trabaja] en esta empresa desde 2019.",
        "Spanish uses the present («trabaja desde»), but English needs the present perfect (continuous): *She works here since 2019 is wrong.",
      ),
      tr(
        "Conozco a Laura desde hace diez años.",
        "I've known Laura for ten years.",
        "\"Know\" is a state verb, so use the present perfect simple, not *I've been knowing. «Desde hace» = \"for\".",
      ),
      fb(
        "When we got to the theater, the movie ___ already started.",
        "had",
        "Cuando llegamos al cine, la película ya [había] empezado.",
        "The past perfect (\"had started\") shows it started before we arrived.",
      ),
      tr(
        "Antes vivía en Monterrey, pero ahora vivo en Houston.",
        "I used to live in Monterrey, but now I live in Houston.",
        "A past situation that isn't true now = \"used to\" + base verb.",
      ),
      mc(
        "«Normalmente me levanto a las seis.»",
        ["I usually get up at six.", "I use to get up at six.", "I used to get up at six.", "I'm used to get up at six."],
        "A present habit is \"usually\" + present simple. \"Used to\" only exists in the past, and *I use to is a calque of «suelo».",
      ),
      fb(
        "I'm still not used to ___ on the left.",
        "driving",
        "Todavía no estoy acostumbrado a [manejar] por la izquierda.",
        "In \"be used to\", \"to\" is a preposition, so the verb takes -ing: \"used to driving\", not *used to drive.",
      ),
      tr(
        "(Suena el teléfono.) Yo contesto.",
        ["I'll answer it.", "I'll get it.", "I'll answer."],
        "A decision made at the moment of speaking = \"will\". Spanish uses the present («yo contesto»), but *I answer it sounds wrong here.",
      ),
      fb(
        "This time next week, I ___ on a beach in Cancun.",
        "will be lying",
        "La semana que viene a esta hora, [estaré acostado] en una playa de Cancún.",
        "An action in progress at a future moment = future continuous: \"will be\" + -ing.",
      ),
      tr(
        "Para el viernes, habremos pintado toda la casa.",
        "By Friday{,|} we'll have painted the {whole|entire} house.",
        "An action completed before a deadline = future perfect: \"will have\" + participle, usually with \"by\".",
      ),
      wo(
        "We'll call you as soon as we arrive",
        "Te llamaremos en cuanto lleguemos.",
        "After \"as soon as\", use the present (\"we arrive\"), not *will arrive, even though Spanish uses the subjunctive.",
      ),
      mc(
        "Which sentence is correct?",
        ["If I had more money, I would buy a bigger car.", "If I would have more money, I would buy a bigger car.", "If I had more money, I will buy a bigger car.", "If I have more money, I would buy a bigger car."],
        "Second conditional: \"if\" + past, \"would\" + verb in the other half. Never \"would\" after \"if\".",
      ),
      tr(
        "Si hubiera sabido que estabas enferma, te habría visitado.",
        "If I had known {that |}you were {sick|ill}, I would have visited you.",
        "Third conditional: \"if\" + past perfect, \"would have\" + participle. Not *If I would have known.",
      ),
      fb(
        "I wish I ___ speak German.",
        "could",
        "Ojalá [pudiera] hablar alemán.",
        "A wish about the present = \"wish\" + past: \"could\". Not *I wish I can.",
      ),
      tr(
        "Ojalá no hubiera comprado este celular.",
        ["I wish I {hadn't|had not} bought this {phone|cell phone}.", "If only I {hadn't|had not} bought this {phone|cell phone}."],
        "A regret about the past = \"wish\" + past perfect. Not *I wish I wouldn't have bought.",
      ),
      tr(
        "No vamos a salir a menos que mejore el clima.",
        ["We {aren't going to|won't} go out unless the weather {gets better|improves}.", "We {aren't|are not} going out unless the weather {gets better|improves}."],
        "\"Unless\" = «a menos que», followed by the present, not *will improve and not a negative.",
      ),
      lc(
        "You don't have to bring anything to the party.",
        ["It isn't necessary to bring anything", "You're not allowed to bring anything", "You must bring something", "You should bring food"],
        "\"Don't have to\" = «no hace falta». It's very different from \"mustn't\" (prohibited).",
        "What does the speaker mean?",
      ),
      fb(
        "You ___ use your phone during the exam. It's against the rules.",
        ["mustn't", "can't"],
        "[No puedes] usar el celular durante el examen. Va contra las reglas.",
        "A prohibition = \"mustn't\" or \"can't\". \"Don't have to\" would mean it's not necessary.",
      ),
      mc(
        "The lights are off and nobody answers the door. Which is the most logical deduction?",
        ["They must be out.", "They can't be out.", "They mustn't be out.", "They must to be out."],
        "\"Must\" = I'm sure it's true. The opposite is \"can't\", not \"mustn't\". No \"to\" after \"must\".",
      ),
      tr(
        "No puede ser Martin; está en Londres.",
        ["{It|That} can't be Martin{;|.|,} he's in London."],
        "Deduction that something is impossible = \"can't\", not *mustn't be.",
      ),
      fb(
        "Elena isn't here yet. She ___ missed the bus.",
        ["might have", "may have", "could have"],
        "Elena todavía no llega. [Puede que haya] perdido el autobús.",
        "A possible explanation of a past event = \"might/may/could have\" + participle.",
      ),
      say(
        "They must have left early.",
        "Deben de haberse ido temprano.",
        "\"Must have\" sounds like /ˈmʌstəv/.",
        "«Deben de haber» (deduction about the past) = \"must have\" + participle.",
      ),
      mt(
        "Match the Spanish with the English.",
        [
          ["se habla inglés", "English is spoken"],
          ["lo están reparando", "it's being repaired"],
          ["se vendió la casa", "the house was sold"],
          ["me arreglaron el carro", "I had my car fixed"],
          ["le robaron la bolsa", "she had her bag stolen"],
        ],
        "Spanish «se» and impersonal «they» often become the passive in English. When someone does a service for you, or something bad happens to your things, use \"have\" + object + participle.",
      ),
      tr(
        "Esta catedral se construyó en el siglo XVI.",
        "This cathedral was built in the {16th|sixteenth} century.",
        "«Se construyó» = passive \"was built\". Not *built itself.",
      ),
      fb(
        "The results ___ announced tomorrow.",
        "will be",
        "Los resultados [se anunciarán] mañana.",
        "Future passive: \"will be\" + participle.",
      ),
      tr(
        "Ayer me corté el pelo en la peluquería.",
        ["{I had|I got} my hair cut {at the hairdresser's|at the salon|} yesterday.", "Yesterday I {had|got} my hair cut{| at the hairdresser's| at the salon}."],
        "If someone else did it, say \"I had/got my hair cut\". *I cut my hair means you did it yourself.",
      ),
      dc(
        "Our kitchen is being painted, so we're eating out this week.",
        "Present continuous passive: \"is being\" + participle.",
      ),
      wo(
        "The woman who lives next door is a nurse",
        "La mujer que vive al lado es enfermera.",
        "\"Who\" (or \"that\") for people. Not *which.",
      ),
      fb(
        "That's the hotel ___ we stayed on our honeymoon.",
        "where",
        "Ese es el hotel [donde] nos quedamos en nuestra luna de miel.",
        "\"Where\" for places. *The hotel that we stayed would need \"in\" at the end.",
      ),
      mc(
        "Which sentence is correct?",
        ["The book that I'm reading is fantastic.", "The book that I'm reading it is fantastic.", "The book who I'm reading is fantastic.", "The book what I'm reading is fantastic."],
        "\"That\" or \"which\" for things, and don't repeat the object (*reading it).",
      ),
      tr(
        "Lo que necesito es un buen descanso.",
        "What I need is a good {rest|break}.",
        "«Lo que» = \"what\". Not *That I need or *The which I need.",
      ),
      tr(
        "Mi hermano, que vive en Toronto, viene a visitarnos.",
        "My brother, who lives in Toronto, is coming to {visit|see} us.",
        "Extra information between commas: \"who\", never \"that\". A fixed arrangement uses the present continuous: \"is coming\".",
      ),
      dc(
        "If I had studied harder, I would have passed the exam.",
        "\"Would have\" sounds like \"would've\" /ˈwʊdəv/. Never write *would of.",
      ),
      say(
        "I've been living here since I was a child.",
        "Vivo aquí desde que era niño.",
        "\"I've been\" is quick: /aɪv bɪn/.",
        "«Vivo aquí desde» = present perfect continuous + \"since\". Not *I live here since.",
      ),
      lc(
        "The guy whose car was stolen is my cousin.",
        ["The owner of the stolen car", "The person who stole the car", "The person who found the car", "The police officer"],
        "\"Whose\" = «cuyo»: the car belonged to the cousin.",
        "Who is the speaker's cousin?",
      ),
    ],
  ),
];
