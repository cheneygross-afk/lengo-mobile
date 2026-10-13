// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u13-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lesson for EN-B1 unit u13 (polite requests, permission and modals): a short recap, then graded practice mixing the whole unit.

const SLUG = "en-b1-polite-modals";

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
const lc = (audio: string, options: string[], explanation: string, question = "What does it mean?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `${SLUG}-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U13_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. The whole unit: requests, permission, modals of meaning
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Requests, Permission & Modals",
    "You will be able to ask for things and for permission politely, refuse softly, and choose the right modal for possibility, obligation, advice and the past.",
    "Recap: soft requests and the right modal",
    [
      "English requests are questions with a modal: \"Could you...?\", \"Would you mind + -ing?\", \"Do you mind if I + present?\", and the softest of all, \"I was wondering if you could...\". For permission use \"Can I / Could I / May I...?\", and for rules \"be allowed to\" or \"let\" + person + verb.",
      "Modals take the base verb with no \"to\", no -s and no \"do\". For the past use modal + have + participle (\"should have called\"), and remember: \"don't have to\" is «no hace falta», but \"mustn't\" is «está prohibido».",
    ],
    [
      ["Would you mind holding my bag for a second?", "¿Te importaría sostenerme la bolsa un segundo?"],
      ["Are we allowed to park behind the building?", "¿Se puede estacionar detrás del edificio?"],
      ["You don't have to print the tickets.", "No hace falta imprimir los boletos."],
      ["She must have forgotten about the meeting.", "Seguro que se le olvidó la reunión."],
    ],
    [
      fb("Would you mind ___ the window? It's freezing in here.", ["closing", "shutting"], "¿Te importaría [cerrar] la ventana? Hace muchísimo frío aquí.",
        "\"Mind\" is always followed by the -ing form: \"Would you mind closing...?\". Spanish uses the infinitive («cerrar»), which is why learners say *Would you mind to close."),
      mc("You want to ask a stranger at a bus stop about the next bus. Which is the most natural?", [
        "Excuse me, could you tell me when the next bus comes?",
        "Tell me when the next bus comes.",
        "Excuse me, could you tell me when does the next bus come?",
        "I want to know when comes the next bus.",
      ], "\"Excuse me\" gets attention, and \"could you tell me\" softens the question. After it, use normal order with no \"does\": \"when the next bus comes\". A bare imperative or \"I want\" sounds like an order."),
      tr("¿Me pasas el cargador?", ["{Can|Could|Would} you pass me the charger{, please|}?", "{Can|Could|Would} you please pass me the charger?", "{Can|Could|Would} you hand me the charger{, please|}?"],
        "In English a request is a question with a modal: \"Can you...?\" or \"Could you...?\". A direct \"Pass me the charger\" sounds like an order, even though «¿Me pasas...?» is perfectly polite in Spanish."),
      fb("Do you mind if I ___ your pen for a moment?", ["use", "borrow"], "¿Te importa si [uso] tu bolígrafo un momento?",
        "\"Do you mind if I...?\" is followed by the present simple: \"if I use\". It asks permission for something YOU want to do."),
      mc("Your coworker asks: \"Would you mind if I opened the window?\" You are happy for her to do it. What do you say?", [
        "No, not at all. Go ahead.",
        "Yes, I would.",
        "Yes, I mind.",
        "No, you can't.",
      ], "The question means «¿te molestaría?», so \"No, not at all\" means «adelante». Answering \"Yes\" says that it WOULD bother you."),
      tr("Me preguntaba si podrías revisar mi presentación.", "I was wondering if you could {check|look at|review|go over|have a look at} my presentation.",
        "\"I was wondering if\" + subject + \"could\" + verb. It is a statement, so the order is normal (\"you could\") and there is no question mark. The past form makes it softer; it is about now."),
      wo("I was wondering if you could help me with this form.", "Me preguntaba si podrías ayudarme con este formulario.",
        "\"I was wondering if\" + \"you could\" + verb: statement order, not *could you."),
      tr("¿Puedo cerrar la puerta?", ["{Can|Could|May} I close the door?", "Do you mind if I close the door?"],
        "English needs the modal AND the subject: \"Can I close...?\". *Can close the door? has no subject, and *Do I can...? adds an impossible \"do\"."),
      fb("Yesterday we ___ use our phones during the exam.", ["weren't allowed to", "were not allowed to", "couldn't", "could not"], "Ayer [no nos dejaron] usar el celular durante el examen.",
        "For a rule in the past, \"weren't allowed to\" is the most natural choice. In the negative, \"couldn't\" also works."),
      tr("Mi jefa me deja salir temprano los viernes.", "My boss lets me {leave|go home|leave work} early on Fridays.",
        "\"Let\" + person + base verb, with no \"to\": \"lets me leave\". *lets me to leave is a very common mistake. Third person: \"lets\"."),
      mc("Which sentence is correct?", [
        "Are we allowed to bring food into the library?",
        "Is allowed to bring food into the library?",
        "Is it allowed to bring food into the library?",
        "Do we can bring food into the library?",
      ], "Make the people the subject: \"Are we allowed to...?\". *Is it allowed to... is a translation of «¿Se permite...?», and modals never take \"do\"."),
      tr("Quisiera un jugo de naranja, por favor.", ["I'd like {an|a glass of} orange juice{, please|}.", "{Can|Could} I {have|get} {an|a glass of} orange juice{, please|}?"],
        "Use \"I'd like\" (I would like) to order. \"I want\" sounds demanding, and \"I like orange juice\" means «me gusta el jugo de naranja», which is not an order."),
      fb("Do you know where the nearest pharmacy ___?", "is", "¿Sabes dónde [está] la farmacia más cercana?",
        "After \"Do you know\", the second part has statement order: \"where the pharmacy is\". *Do you know where is the pharmacy? is the typical Spanish-speaker mistake."),
      tr("¿Me podría decir a qué hora abre el banco?", "Could you tell me {what time|when} the bank opens?",
        "Indirect question: no \"does\" in the second part, and the verb keeps its -s: \"what time the bank opens\", not *what time does the bank open."),
      lc("Could you do me a favor?", ["¿Me puedes hacer un favor?", "¿Puedo hacerte un favor?", "¿Me hiciste un favor?", "¿Te debo un favor?"],
        "In English you DO a favor (not *make). \"Could you do me a favor?\" asks the other person to help you."),
      tr("Me encantaría, pero esta noche tengo planes.", "I'd love to, but I {have|already have} plans tonight.",
        "\"I'd love to, but...\" softens a refusal and gives a reason. A plain \"No\" or \"I can't\" can sound rude in English."),
      dc("I'm afraid I can't come to the meeting on Thursday.",
        "\"I'm afraid\" here means «me temo que» or «lo siento, pero»; it has nothing to do with fear. It is the polite way to say no."),
      mt("Match each phrase with its meaning.", [
        ["Could you give me a hand with these boxes?", "¿Me echas una mano con estas cajas?"],
        ["Thanks, I owe you one.", "Gracias, te debo una."],
        ["Let me check and get back to you.", "Déjame mirarlo y te digo algo."],
        ["Anytime.", "Cuando quieras."],
      ], "Useful phrases for asking for help, thanking and answering a thank-you. Note: never answer *Nothing to «gracias»; say \"You're welcome\" or \"Anytime\"."),
      tr("Puede que el vuelo llegue tarde.", "The flight {might|may|could} {arrive|be} late.",
        "«Puede que» = \"might\", \"may\" or \"could\" + base verb. One word is enough: *Maybe the flight might arrive late repeats the idea."),
      mc("\"I'm sure Ana isn't at the office. Her car isn't here.\" Which sentence means the same?", [
        "Ana can't be at the office.",
        "Ana mustn't be at the office.",
        "Ana might not be at the office.",
        "Ana doesn't have to be at the office.",
      ], "For deduction, the opposite of \"must\" is \"can't\": «no puede estar». \"Mustn't\" is a prohibition, and \"might not\" is only a possibility, not certainty."),
      fb("You ___ bring a towel. The hotel gives you one.", ["don't have to", "do not have to", "don't need to", "do not need to", "needn't"], "[No hace falta que] traigas toalla. El hotel te da una.",
        "No obligation = \"don't have to\" / \"don't need to\". \"Mustn't\" would mean it is forbidden to bring a towel, which is not the idea."),
      tr("Deberías haberme llamado.", "You should have called me.",
        "Past criticism: \"should have\" + past participle. Never *should have call, *should had called or *should of called."),
      fb("She ___ the bus. She's never this late.", "must have missed", "Seguro que [perdió] el autobús. Nunca llega tan tarde.",
        "A confident guess about the past: \"must have\" + participle. «Seguro que...» is \"must\", not *will or *sure she missed."),
      tr("Mañana podré ayudarte con la mudanza.", ["I'll be able to help you {with the move|move} tomorrow.", "Tomorrow I'll be able to help you {with the move|move}.", "I can help you {with the move|move} tomorrow."],
        "«Podré» is \"will be able to\". Two modals can't go together, so *I will can help is impossible."),
      wo("We had to wait two hours at the airport.", "Tuvimos que esperar dos horas en el aeropuerto.",
        "\"Must\" has no past form. «Tuvimos que» is \"had to\" + base verb."),
      dc("You shouldn't have paid for everything.",
        "\"Shouldn't have\" + participle criticizes a past action. In speech \"have\" is a tiny \"uv\", but you always write \"have\", never *of."),
      sp("Would you mind turning off the lights when you leave?",
        "\"Would you mind\" + -ing is a very polite request, perfect for coworkers or roommates.",
        "Link \"mind\" and \"turning\"; let your voice rise a little at the end of the question."),
      tr("Te escribo para preguntar por el puesto de diseñador.", "I'm writing to ask about the designer {position|job|role}.",
        "Emails use \"I'm writing to\" + verb. *I write you to ask is a direct translation of «te escribo»; English uses the present continuous and no \"you\"."),
      fb("We look forward to ___ you in Bogota.", "seeing", "Tenemos muchas ganas de [verlos] en Bogotá.",
        "In \"look forward to\", \"to\" is a preposition, so the verb takes -ing: \"look forward to seeing\", not *to see."),
      lc("It must be the neighbors' cat.", ["Será el gato de los vecinos.", "Hay que darle de comer al gato de los vecinos.", "No puede ser el gato de los vecinos.", "Debería ser el gato de los vecinos."],
        "\"It must be\" is a confident guess, like Spanish «será» or «debe de ser». English needs the subject \"it\": *Must be the cat is wrong."),
      tr("Antes vivía con tres compañeros de cuarto.", "I used to live with three {roommates|flatmates}.",
        "\"Used to\" + verb describes a past situation that is not true now: «antes vivía». In American English the people you share with are \"roommates\"."),
      fb("I'm still not used to ___ up so early.", ["getting", "waking"], "Todavía no estoy acostumbrado a [levantarme] tan temprano.",
        "In \"be used to\", \"to\" is a preposition, so the verb takes -ing: \"used to getting up\". *I'm not used to get up is the most common mistake."),
      mc("Which sentence is correct?", [
        "Would you mind lending me your car on Saturday?",
        "Would you mind to lend me your car on Saturday?",
        "Do you mind lend me your car on Saturday?",
        "Would you mind if you lend me your car on Saturday?",
      ], "Final check on \"mind\": \"Would you mind\" + -ing. Use \"if\" only to ask about YOUR action (\"Would you mind if I borrowed...?\")."),
      tr("No nos dejaban salir de noche cuando éramos adolescentes.", ["We {weren't|were not} allowed to go out at night when we were {teenagers|teens}.", "{They|Our parents} didn't let us go out at night when we were {teenagers|teens}."],
        "A past rule: \"weren't allowed to\" or \"didn't let us\" + base verb (no \"to\" after \"let\"). Don't translate «nos dejaban» as *we weren't let."),
      sp("I was wondering if I could work from home tomorrow.",
        "With a boss, \"I was wondering if I could...\" is the safest, most polite form. Statement order: \"I could work\".",
        undefined, "Say it in English: ask your boss very politely if you could work from home tomorrow."),
    ],
  ),
];
