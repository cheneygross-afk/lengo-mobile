// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u21-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u21 (gerunds and infinitives): a short recap, then graded practice.

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

export const EN_B1_U21_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Verbs + -ing, verbs + to, and verb + object + to
  // ---------------------------------------------------------------------
  lesson(
    1,
    "gerunds-infinitives",
    "Verbs + -ing, To & Object + To",
    "Choose between -ing and to after common verbs, and say «quiero que vengas» as I want you to come.",
    "Recap: -ing, to, or person + to?",
    [
      "Some verbs take -ing: enjoy, mind, finish, avoid, keep, suggest, consider, practice and can't stand. Others take \"to\" + verb: want, would like, hope, decide, plan, learn, manage, afford and seem. The negative is \"not\" + -ing or \"not to\".",
      "When another person does the second action («quiero que vengas»), use verb + object + \"to\": \"I want you to come\", \"We need them to sign.\" Never *I want that you come. \"Hope\" doesn't follow this pattern: \"I hope you come.\"",
    ],
    [
      ["I've finished writing the report.", "Ya terminé de escribir el informe."],
      ["She can't afford to take a vacation this year.", "No se puede permitir tomar vacaciones este año."],
      ["We'd like you to join the team.", "Nos gustaría que te unieras al equipo."],
      ["They managed to fix the printer.", "Lograron arreglar la impresora."],
    ],
    [
      mc(
        "«Disfruto cocinar para mis amigos.»",
        ["I enjoy cooking for my friends.", "I enjoy to cook for my friends.", "I enjoy cook for my friends.", "I enjoy for cooking for my friends."],
        "\"Enjoy\" always takes -ing. Spanish uses the infinitive («disfruto cocinar»), which is why *I enjoy to cook is so common.",
      ),
      fb(
        "Have you finished ___ the dishes?",
        ["washing", "doing"],
        "¿Ya terminaste de [lavar] los platos?",
        "\"Finish\" + -ing, with no \"of\": not *finish of wash, not *finish to wash.",
      ),
      fb(
        "I avoid ___ downtown on Fridays because of the traffic.",
        "driving",
        "Evito [manejar] en el centro los viernes por el tráfico.",
        "\"Avoid\" + -ing. *I avoid to drive is a direct translation of «evito manejar».",
      ),
      tr(
        "Mi vecino no para de quejarse del ruido.",
        "My neighbor keeps {on |}complaining about the noise.",
        "«No parar de» = \"keep (on)\" + -ing. The -ing form is obligatory: not *keeps to complain.",
      ),
      tr(
        "¿Te importa esperar unos minutos?",
        "{Do|Would} you mind waiting {for |}a few minutes?",
        "\"Mind\" + -ing. \"Would you mind\" is the most polite version. Not *Do you mind to wait.",
      ),
      tr(
        "Estoy pensando en cambiar de carrera.",
        ["I'm considering changing {careers|my career}.", "I'm thinking {about|of} changing {careers|my career}."],
        "«Plantearse» or «pensar en» = \"consider\" + -ing, or \"think about/of\" + -ing. Not *considering to change and not *thinking in changing.",
      ),
      wo(
        "She can't stand waiting in long lines",
        "No soporta esperar en filas largas.",
        "\"Can't stand\" («no soportar») + -ing.",
      ),
      fb(
        "We decided ___ at home this weekend.",
        "to stay",
        "Decidimos [quedarnos] en casa este fin de semana.",
        "\"Decide\" + \"to\" + verb. Don't drop the \"to\": *We decided stay.",
      ),
      tr(
        "Espero terminar la tesis en mayo.",
        "I hope to finish {my|the} thesis in May.",
        "«Esperar» as a wish is \"hope\" + \"to\". Not \"wait\", which is «esperar» someone or something.",
      ),
      fb(
        "After three tries, she finally managed ___ her driving test.",
        "to pass",
        "Después de tres intentos, por fin [logró aprobar] el examen de manejo.",
        "«Lograr» = \"manage to\" + verb. Not *achieved to pass, and \"pass\" (not \"approve\") is «aprobar» an exam.",
      ),
      dc(
        "We can't afford to buy a new car this year.",
        "\"Can't afford to\" + verb = «no poder permitirse». The \"t\" of \"can't\" is very light; listen to the vowel: /kænt/.",
      ),
      mc(
        "Which sentence is correct?",
        ["They're planning to open a second store.", "They're planning opening a second store.", "They're planning open a second store.", "They're planning for open a second store."],
        "\"Plan\" + \"to\" + verb, often in the continuous for future plans.",
      ),
      lc(
        "He seems to know a lot about cars.",
        ["He probably knows a lot about cars", "He wants to learn about cars", "He knew a lot about cars in the past", "He doesn't like cars"],
        "\"Seem to\" = «parecer»: it looks to the speaker as if he knows a lot.",
        "What does the speaker think?",
      ),
      tr(
        "Andrea decidió no ir a la boda.",
        "Andrea decided not to go to the wedding.",
        "The negative infinitive is \"not to\": \"decided not to go\". Not *decided no to go and not *didn't decide to go (that means something else).",
      ),
      dc(
        "I'm learning to play the guitar, but I need to practice every day.",
        "\"Learn to\" + verb for a skill, and \"need to\" + verb. The two \"to\"s are weak: /tə/.",
      ),
      mt(
        "Match each Spanish verb with its English equivalent.",
        [
          ["evitar", "avoid"],
          ["lograr", "manage"],
          ["no soportar", "can't stand"],
          ["plantearse", "consider"],
          ["poder permitirse", "afford"],
        ],
        "\"Avoid\", \"can't stand\" and \"consider\" take -ing; \"manage\" and \"afford\" take \"to\".",
      ),
      mc(
        "«Quiero que vengas a mi fiesta.»",
        ["I want you to come to my party.", "I want that you come to my party.", "I want you come to my party.", "I want that you to come to my party."],
        "Want + WHO + to + WHAT. English has no «que» + subjunctive here: *I want that you come is the most frequent mistake.",
      ),
      fb(
        "My parents want ___ a doctor.",
        ["me to be", "me to become"],
        "Mis papás quieren [que yo sea] médico.",
        "\"Want\" + object pronoun + \"to\": \"want me to be\". Not *want that I am and not *want I to be.",
      ),
      tr(
        "Necesito que firmes este formulario.",
        "I need you to sign this form.",
        "«Necesitar que» = \"need\" + person + \"to\" + verb.",
      ),
      tr(
        "Me gustaría que revisaras mi currículum.",
        "I'd like you to {check|review|look at} my {resume|CV}.",
        "«Me gustaría que» = \"I'd like\" + person + \"to\" + verb. (\"Resume\" is American; \"CV\" is British.)",
      ),
      tr(
        "La empresa espera que trabajemos los sábados.",
        "The company expects us to work {on |}Saturdays.",
        "«Esperar que» when you think someone should do something = \"expect\" + person + \"to\". Use an object pronoun: \"us\", not *we.",
      ),
      fb(
        "I don't want ___ about me.",
        "you to worry",
        "No quiero [que te preocupes] por mí.",
        "The negative goes on \"want\": \"I don't want you to worry\". Not *I don't want that you worry.",
      ),
      wo(
        "We need them to send the documents by Monday",
        "Necesitamos que nos manden los documentos antes del lunes.",
        "\"Need\" + object (\"them\") + \"to\" + verb.",
      ),
      say(
        "I'd like you to call me when you arrive.",
        "Me gustaría que me llamaras cuando llegues.",
        "\"I'd like you to\" flows together: /aɪd laɪk ju tə/.",
        "\"Would like\" + person + \"to\". After \"when\", the present: \"when you arrive\".",
      ),
      dc(
        "Our teacher expects us to read two books a month.",
        "\"Expects us to\": the object pronoun links to \"to\".",
      ),
      mc(
        "Which sentence is correct?",
        ["I hope you feel better soon.", "I hope you to feel better soon.", "I want that you feel better soon.", "I hope that you to feel better soon."],
        "\"Hope\" takes a normal sentence (\"I hope you feel better\"), not person + \"to\". «Espero que te mejores» is never *I hope you to feel better.",
      ),
      tr(
        "No queríamos que Martin se fuera tan pronto.",
        "We didn't want Martin to leave so {soon|early}.",
        "Only \"want\" changes tense: «queríamos que se fuera» = \"didn't want Martin to leave\".",
      ),
      tr(
        "¿Quieres que te ayude con la tarea?",
        ["{Do you want|Would you like} me to help you with {your|the} homework?"],
        "«¿Quieres que te ayude?» = \"Do you want me to help you?\" The person who helps (\"me\") goes after \"want\". Not *Do you want that I help you.",
      ),
      fb(
        "The doctor advised me ___ eating sugar.",
        "to avoid",
        "El médico me aconsejó [que evitara] comer azúcar.",
        "Two patterns in a row: \"advise\" + person + \"to\", then \"avoid\" + -ing.",
      ),
      tr(
        "Mi amigo sugirió ir en autobús, pero yo decidí tomar un taxi.",
        ["My friend suggested {going by bus|taking the bus}, but I decided to {take|get} a {taxi|cab}."],
        "\"Suggest\" + -ing, but \"decide\" + \"to\". Each verb has its own pattern.",
      ),
      lc(
        "Would you mind turning the music down?",
        ["Politely asking someone to lower the music", "Asking if the other person likes the music", "Offering to turn the music down", "Complaining that the music is too quiet"],
        "\"Would you mind\" + -ing is a very polite request: «¿Te importaría bajar la música?»",
        "What is the speaker doing?",
      ),
      wo(
        "I can't afford to keep paying this rent",
        "No me puedo permitir seguir pagando esta renta.",
        "\"Afford to\" + \"keep\", and then \"keep\" + -ing.",
      ),
      tr(
        "Mi jefe quiere que aprenda a usar el nuevo programa.",
        "My boss wants me to learn {how |}to use the new {program|software}.",
        "\"Want\" + person + \"to\", then \"learn (how) to\" + verb. «Aprender a» is \"learn to\", never *learn at.",
      ),
      say(
        "She keeps asking me to lend her money.",
        "No para de pedirme que le preste dinero.",
        "Stress \"keeps\", \"lend\" and \"money\".",
        "\"Keep\" + -ing (\"keeps asking\"), then \"ask\" + person + \"to\" (\"asking me to lend\").",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. -ing after prepositions and as subject, the infinitive of
  // purpose, and a whole-unit mix
  // ---------------------------------------------------------------------
  lesson(
    2,
    "gerunds-infinitives",
    "Prepositions + -ing, -ing as Subject & Purpose",
    "Use -ing after prepositions and as the subject of a sentence, say «para» + verb with to, and mix every verb pattern in the unit.",
    "Recap: prepositions, subjects and «para»",
    [
      "After a preposition, the verb takes -ing: \"before leaving\", \"without paying\", \"good at drawing\", \"look forward to seeing\". An action as the subject is usually -ing too: \"Walking is good for you.\"",
      "«Para» + verb is just \"to\": \"I went to the bank to get some cash.\" \"For\" goes before a noun (\"for a coffee\") or describes what a thing is for (\"This app is for tracking expenses\"). For a negative purpose, use \"so as not to\" or \"so (that)\" + a full sentence.",
    ],
    [
      ["She left without saying goodbye.", "Se fue sin despedirse."],
      ["I'm tired of waiting for the bus.", "Estoy cansada de esperar el autobús."],
      ["Cooking at home saves money.", "Cocinar en casa ahorra dinero."],
      ["He called to change his appointment.", "Llamó para cambiar su cita."],
    ],
    [
      mc(
        "«Antes de salir, apaga las luces.»",
        ["Before leaving, turn off the lights.", "Before to leave, turn off the lights.", "Before leave, turn off the lights.", "Before of leaving, turn off the lights."],
        "\"Before\" is a preposition, so the verb takes -ing. Spanish «antes de» has «de», but English \"before\" has no \"of\".",
      ),
      fb(
        "Thanks for ___ me with the move.",
        "helping",
        "Gracias por [ayudarme] con la mudanza.",
        "\"Thanks for\" + -ing. *Thanks for help me copies the Spanish infinitive.",
      ),
      fb(
        "He paid without ___ the price.",
        ["checking", "looking at"],
        "Pagó sin [revisar] el precio.",
        "\"Without\" + -ing. Not *without check and not *without to check.",
      ),
      tr(
        "En vez de tomar el metro, caminé.",
        ["Instead of taking the {subway|metro}, I walked.", "I walked instead of taking the {subway|metro}."],
        "«En vez de» = \"instead of\" + -ing.",
      ),
      tr(
        "Después de comer, fuimos a la playa.",
        ["After {eating|having lunch}, we went to the beach.", "We went to the beach after {eating|having lunch}."],
        "\"After\" + -ing. «Después de comer» is never *after to eat or *after eat.",
      ),
      fb(
        "My daughter is very good ___ math problems.",
        "at solving",
        "Mi hija es muy buena [para resolver] problemas de matemáticas.",
        "\"Good at\" + -ing. Spanish says «buena para», but English uses \"at\": not *good for solving, not *good in solving.",
      ),
      lc(
        "I'm interested in learning how to bake bread.",
        ["To learn to make bread", "To buy fresh bread", "To teach a baking class", "To stop eating bread"],
        "\"Interested in\" + -ing: the speaker would like to learn to bake.",
        "What does the speaker want?",
      ),
      mc(
        "Which sentence is correct?",
        ["We're looking forward to meeting your parents.", "We're looking forward to meet your parents.", "We're looking forward meeting your parents.", "We're looking forward for meeting your parents."],
        "In \"look forward to\", \"to\" is a preposition, so -ing follows: \"to meeting\". Test: you can say \"look forward to the party\".",
      ),
      wo(
        "She's afraid of losing her job",
        "Tiene miedo de perder su trabajo.",
        "\"Afraid of\" + -ing.",
      ),
      tr(
        "Tengo muchas ganas de verte.",
        "I'm {really |}looking forward to seeing you.",
        "«Tener ganas de» = \"look forward to\" + -ing. *I'm looking forward to see you is one of the most common mistakes in emails.",
      ),
      fb(
        "___ every day is good for your back.",
        "Walking",
        "[Caminar] todos los días es bueno para la espalda.",
        "An action as the subject is normally -ing in English. *Walk every day is good is incomplete, and \"To walk...\" sounds very formal.",
      ),
      tr(
        "Aprender un idioma toma tiempo.",
        ["Learning a language takes time.", "It takes time to learn a language."],
        "Subject = -ing: \"Learning a language\". Or use \"It takes time to\" + verb. No \"the\": *The learning a language.",
      ),
      mc(
        "«Fumar es malo para la salud.»",
        ["Smoking is bad for your health.", "The smoking is bad for your health.", "Smoke is bad for your health.", "Smoke it's bad for your health."],
        "The action as subject is -ing with no article. \"Smoke\" is the noun «humo», so \"Smoke is bad\" means something different.",
      ),
      say(
        "Getting enough sleep is really important.",
        "Dormir lo suficiente es muy importante.",
        "Stress \"sleep\" and \"important\": im-POR-tant.",
        "The subject is an action, so it's -ing: \"Getting enough sleep\".",
      ),
      mc(
        "«Vine aquí para estudiar inglés.»",
        ["I came here to study English.", "I came here for study English.", "I came here for to study English.", "I came here for studying English."],
        "«Para» + verb is just \"to\". *For to study and *for study are the classic calques.",
      ),
      fb(
        "I went to the pharmacy ___ some aspirin.",
        ["to buy", "to get"],
        "Fui a la farmacia [a comprar] aspirinas.",
        "After verbs of movement, «a» + infinitive is also \"to\" + verb: \"went to buy\".",
      ),
      tr(
        "Estamos ahorrando dinero para viajar a Japón.",
        "We're saving {money |}to travel to Japan.",
        "Purpose = \"to\" + verb. Not *for travel and not *for to travel.",
      ),
      fb(
        "Let's go to the cafe ___ a quick coffee.",
        "for",
        "Vamos a la cafetería [por] un café rápido.",
        "Before a noun, \"for\" is right: \"for a coffee\". Before a verb you'd need \"to\": \"to have a coffee\".",
      ),
      tr(
        "Hablé en voz baja para no despertar al bebé.",
        ["I spoke {quietly|softly} so as not to wake the baby.", "I spoke {quietly|softly} {so|so that} I wouldn't wake the baby.", "I spoke {quietly|softly} in order not to wake the baby."],
        "«Para no» = \"so as not to\", \"in order not to\" or \"so (that)\" + a full sentence. Not *for not wake.",
      ),
      wo(
        "This app is for keeping track of your expenses",
        "Esta app sirve para llevar el control de tus gastos.",
        "The function of a thing («sirve para») = \"for\" + -ing.",
      ),
      lc(
        "What's this little button for?",
        ["What the button does", "Who made the button", "Why the button is so small", "Where the button is"],
        "\"What's it for?\" = «¿Para qué sirve?», with \"for\" at the end.",
        "What does the speaker want to know?",
      ),
      tr(
        "La empresa cerró dos oficinas para ahorrar dinero.",
        "The company closed two offices {to|in order to} save money.",
        "A person's or company's reason is \"to\" (or the more formal \"in order to\") + verb.",
      ),
      mt(
        "Match the Spanish with the English.",
        [
          ["sin decir nada", "without saying anything"],
          ["en vez de quejarte", "instead of complaining"],
          ["para ahorrar tiempo", "to save time"],
          ["sirve para cortar", "it's for cutting"],
          ["cansado de esperar", "tired of waiting"],
        ],
        "Prepositions (without, instead of, of, and \"for\" describing a function) take -ing; a person's purpose takes \"to\".",
      ),
      dc(
        "She went to the library to return the books before leaving town.",
        "Purpose with \"to return\", and a preposition with -ing: \"before leaving\".",
      ),
      dc(
        "I'm thinking about moving to a smaller apartment.",
        "\"Think about\" + -ing. Spanish «pensar en» is not *think in.",
      ),
      mc(
        "Which sentence is correct?",
        ["I want you to come with me to buy a present.", "I want that you come with me for buying a present.", "I want you come with me to buy a present.", "I want you to come with me for to buy a present."],
        "\"Want\" + person + \"to\" for «quiero que vengas», and \"to\" for the purpose «para comprar».",
      ),
      tr(
        "Te escribo para pedirte un favor.",
        "I'm writing to ask you {for |}a favor.",
        "Purpose = \"to ask\". In emails, \"I'm writing to\" + verb is the standard opener.",
      ),
      fb(
        "I'm sorry, I'm not used to ___ in English.",
        ["speaking", "talking"],
        "Perdón, no estoy acostumbrada a [hablar] en inglés.",
        "In \"be used to\", \"to\" is a preposition, so -ing follows: \"used to speaking\", not *used to speak.",
      ),
      tr(
        "Mi jefa me pidió que la llamara antes de salir.",
        ["My boss asked me to call her before {leaving|I left}."],
        "\"Ask\" + person + \"to\" for the request, and \"before\" + -ing (or \"before I left\").",
      ),
      fb(
        "Kevin suggested ___ the meeting to Thursday.",
        ["moving", "changing"],
        "Kevin sugirió [cambiar] la reunión al jueves.",
        "\"Suggest\" + -ing. *Suggested to move is a common slip.",
      ),
      tr(
        "Te mando el mapa para que no te pierdas.",
        ["{I'll send|I'm sending} you the map {so|so that} you {don't|won't} get lost."],
        "«Para que» + subjunctive = \"so (that)\" + subject + verb. Not *for that you don't get lost, and not \"to\", because the subjects are different.",
      ),
      wo(
        "Thank you for inviting us to your wedding",
        "Gracias por invitarnos a tu boda.",
        "\"Thank you for\" + -ing.",
      ),
      say(
        "Instead of complaining, we decided to look for a solution.",
        "En vez de quejarnos, decidimos buscar una solución.",
        "\"Instead of\" links: /ɪnˈstedəv/.",
        "\"Instead of\" + -ing, and \"decide\" + \"to\".",
      ),
      tr(
        "Antes de aceptar el trabajo, quiero que me expliques las condiciones.",
        ["Before {accepting|I accept} the job, I want you to explain the {conditions|terms} to me."],
        "Three patterns: \"before\" + -ing, \"want\" + person + \"to\", and \"explain\" + thing + \"to me\".",
      ),
    ],
  ),
];
