// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u20-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u20 (reported questions, commands, requests and reporting verbs): a short recap, then graded practice.

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

export const EN_B1_U20_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Reported questions (wh- and yes/no) and reported commands
  // and requests
  // ---------------------------------------------------------------------
  lesson(
    1,
    "reported-questions",
    "Reported Questions, Commands & Requests",
    "Report questions with statement word order, if and whether, and report orders and requests with tell or ask + person + (not) to.",
    "Recap: reporting questions and orders",
    [
      "A reported question is not a question any more: use statement word order, drop \"do\", \"does\" and \"did\", and end with a period. \"Where do you work?\" becomes \"She asked me where I worked.\" Yes/no questions add \"if\" or \"whether\": \"He asked if I was ready.\"",
      "Orders use \"tell\" + person + (not) \"to\" + verb, and requests use \"ask\" + person + (not) \"to\" + verb: \"She told me to wait\", \"He asked me not to call.\" Never *told me that I wait, and never *said me to.",
    ],
    [
      ["The nurse asked me how long I had been feeling sick.", "La enfermera me preguntó cuánto tiempo llevaba sintiéndome mal."],
      ["My boss asked whether I could stay late.", "Mi jefe me preguntó si podía quedarme hasta tarde."],
      ["The guide told us not to touch the paintings.", "El guía nos dijo que no tocáramos los cuadros."],
      ["I asked my neighbor to water the plants.", "Le pedí a mi vecino que regara las plantas."],
    ],
    [
      mc(
        "\"Where do you work?\" Which report is correct?",
        ["She asked me where I worked.", "She asked me where did I work.", "She asked me where I worked?", "She asked me where do I work."],
        "Inside a reported question, use statement order (subject + verb), drop \"do/did\" and end with a period. Spanish keeps the same order in «dónde trabajaba», but English must switch back from question order.",
      ),
      fb(
        "He asked me what time the bank ___.",
        ["opened", "opens"],
        "Me preguntó a qué hora [abría] el banco.",
        "No \"does\" or \"did\" in a reported question: the main verb carries the tense, \"opened\". \"Opens\" is also fine if the bank still opens at that time. *what time did the bank open is the classic mistake.",
      ),
      tr(
        "Carla me preguntó dónde vivía.",
        ["Carla asked {me |}where I lived.", "Carla asked {me |}where I was living."],
        "Question word + subject + verb: \"where I lived\". Not *where did I live and not *where lived I.",
      ),
      fb(
        "The officer asked us where we ___.",
        "were going",
        "El policía nos preguntó adónde [íbamos].",
        "\"Where are you going?\" moves back to \"where we were going\": subject \"we\" before the verb, and the present continuous becomes the past continuous.",
      ),
      wo(
        "The doctor asked me how many hours I slept",
        "El médico me preguntó cuántas horas dormía.",
        "\"How many hours\" + subject (\"I\") + verb (\"slept\"). No \"did\" and no question mark.",
      ),
      tr(
        "Mi mamá me preguntó qué había comido.",
        ["My {mom|mother} asked {me |}what I had eaten.", "My {mom|mother} asked {me |}what I ate."],
        "\"What did you eat?\" becomes \"what I had eaten\": past simple moves back to the past perfect (keeping \"ate\" is also acceptable in speech). Never *what had I eaten.",
      ),
      mc(
        "\"Are you coming to the party?\" Which report is correct?",
        ["Tom asked if I was coming to the party.", "Tom asked was I coming to the party.", "Tom asked me that if I was coming to the party.", "Tom asked if was I coming to the party."],
        "Yes/no questions are reported with \"if\" (or \"whether\") + statement order. Don't add \"that\" before \"if\", and don't leave out \"if\".",
      ),
      fb(
        "The receptionist asked me ___ I had a reservation.",
        ["if", "whether"],
        "La recepcionista me preguntó [si] tenía una reservación.",
        "Spanish «si» in a reported yes/no question is \"if\" or \"whether\". Then statement order: \"I had a reservation\".",
      ),
      tr(
        "Le pregunté a Pablo si le gustaba su nuevo trabajo.",
        "I asked Pablo {if|whether} he liked his new job.",
        "\"Do you like your new job?\" becomes \"if he liked his new job\": no \"did\", the verb moves back to \"liked\", and \"your\" becomes \"his\".",
      ),
      tr(
        "Nos preguntaron si podíamos empezar el lunes.",
        "They asked {us |}{if|whether} we could start on Monday.",
        "\"Can you start on Monday?\" becomes \"if we could start\": \"can\" moves back to \"could\". *if we can start sounds wrong after \"asked\" in most contexts.",
      ),
      lc(
        "She wanted to know whether I had finished the report.",
        ["If the report was finished", "When the report would be finished", "Who had written the report", "Why the report was late"],
        "\"Whether\" = \"if\": she asked a yes/no question, \"Have you finished the report?\"",
        "What did she want to know?",
      ),
      dc(
        "He asked me if I would call him the next day.",
        "\"Will you call me tomorrow?\" becomes \"if I would call him the next day\": \"will\" becomes \"would\", \"me\" becomes \"him\" and \"tomorrow\" becomes \"the next day\".",
      ),
      fb(
        "On Monday, Sofia asked me: \"Are you free tomorrow?\" Now it's Friday. I tell a friend: Sofia asked if I was free ___.",
        ["the next day", "the following day"],
        "Sofia me preguntó si estaba libre [al día siguiente].",
        "When you report later, \"tomorrow\" becomes \"the next day\" or \"the following day\", just like «mañana» becomes «al día siguiente».",
      ),
      wo(
        "The manager asked whether or not we wanted to continue",
        "El gerente preguntó si queríamos continuar o no.",
        "\"Or not\" can go right after \"whether\", but not right after \"if\". Then statement order: \"we wanted\".",
      ),
      mc(
        "\"Close the window!\" Which report is correct?",
        ["She told me to close the window.", "She told me that I close the window.", "She said me to close the window.", "She told me close the window."],
        "Orders are reported with \"tell\" + person + \"to\" + verb. Spanish «me dijo que cerrara» tempts you to write \"that\" + a subject, but English uses the infinitive. \"Say\" can't take the person directly.",
      ),
      fb(
        "The coach told the players ___ eat a big meal before the game.",
        "not to",
        "El entrenador les dijo a los jugadores [que no] comieran mucho antes del partido.",
        "A negative order is \"not to\" + verb: \"told them not to eat\". Not *told them don't eat and not *told them no to eat.",
      ),
      tr(
        "El médico me dijo que descansara.",
        ["The doctor told me to rest.", "The doctor told me to get some rest."],
        "«Me dijo que + subjuntivo» as an order is \"told me to\" + verb. *The doctor told me that I rest is a calque of the Spanish.",
      ),
      tr(
        "Le pedí a Daniel que me ayudara con la mudanza.",
        ["I asked Daniel to help me with the move.", "I asked Daniel to help me move."],
        "«Pedir que» is \"ask\" + person + \"to\" + verb. Here \"ask\" means «pedir», not «preguntar».",
      ),
      fb(
        "My sister asked me ___ tell anyone about her new job.",
        "not to",
        "Mi hermana me pidió [que no] le dijera a nadie lo de su nuevo trabajo.",
        "Negative request: \"asked me not to tell\". \"Not\" goes before \"to\".",
      ),
      tr(
        "Nos dijeron que no estacionáramos aquí.",
        "They told us not to park {here|there}.",
        "\"Don't park here!\" becomes \"They told us not to park here\" (or \"there\" if you're no longer in that place). Never *told us don't park.",
      ),
      say(
        "The teacher asked us not to use our phones.",
        "La maestra nos pidió que no usáramos el celular.",
        "\"To\" is weak, /tə/; stress \"not\" and \"phones\".",
        "A request with \"ask\" + person + \"not to\" + verb.",
      ),
      mt(
        "Match each direct sentence with its report.",
        [
          ["\"Wait here.\"", "He told me to wait there."],
          ["\"Could you wait here?\"", "He asked me to wait there."],
          ["\"Where are you waiting?\"", "He asked me where I was waiting."],
          ["\"Are you waiting?\"", "He asked me if I was waiting."],
          ["\"Don't wait.\"", "He told me not to wait."],
        ],
        "An order takes \"told me (not) to\", a polite request takes \"asked me to\", a wh- question keeps its question word, and a yes/no question takes \"if\".",
      ),
      dc(
        "The flight attendant told us to fasten our seat belts.",
        "\"Told us to\" + base verb: the \"to\" is weak and links to \"fasten\".",
      ),
      lc(
        "My landlord asked me to pay the rent by Friday.",
        ["He made a request about the rent", "He asked a question about the rent", "He offered to pay the rent", "He said the rent was already paid"],
        "\"Ask\" + person + \"to\" + verb means «pedir», not «preguntar»: the landlord made a request.",
        "What did the landlord do?",
      ),
      mc(
        "Which sentence is correct?",
        ["She asked me where the station was.", "She asked me where was the station.", "She asked to me where the station was.", "She asked me where is the station?"],
        "Statement order (\"the station was\"), no \"to\" before the person after \"ask\", and no question mark.",
      ),
      tr(
        "El cliente quería saber cuánto costaba el envío.",
        "The customer wanted to know how much {the |}{shipping|delivery} cost.",
        "\"Want to know\" works like \"ask\": \"how much\" + subject + verb. Not *how much did the shipping cost.",
      ),
      tr(
        "(Pensando) Me preguntaba por qué Lucia no me había llamado.",
        "I {wondered|was wondering} why Lucia {hadn't|had not} called me.",
        "When «me preguntaba» is about your own thoughts, it's \"I wondered\", not \"she asked me\". Then statement order: \"why Lucia hadn't called\".",
      ),
      fb(
        "\"Can you lend me your car?\" → Mario asked me if I ___ lend him my car.",
        "could",
        "Mario me preguntó si [podía] prestarle mi carro.",
        "After a past reporting verb, \"can\" moves back to \"could\", just like «puedes» becomes «podía». *if I can lend is a frequent slip.",
      ),
      tr(
        "Le pedí al mesero que nos trajera la cuenta.",
        "I asked the waiter to bring {us |}the {check|bill}.",
        "«Pedir que» = \"ask\" + person + \"to\" + verb. \"Check\" is American; \"bill\" is British.",
      ),
      wo(
        "My parents asked me what I was going to do after college",
        "Mis papás me preguntaron qué iba a hacer después de la universidad.",
        "\"What are you going to do?\" becomes \"what I was going to do\": subject first, and \"am going to\" moves back to \"was going to\".",
      ),
      tr(
        "Ana me preguntó si había visto su celular.",
        "Ana asked me {if|whether} I had seen her {phone|cell phone|cellphone}.",
        "\"Have you seen my phone?\" becomes \"if I had seen her phone\": present perfect moves back to past perfect, and \"my\" becomes \"her\".",
      ),
      say(
        "He asked me what I had done the day before.",
        "Me preguntó qué había hecho el día anterior.",
        "\"I had\" often sounds like \"I'd\"; stress \"done\" and \"before\".",
        "\"What did you do yesterday?\" becomes \"what I had done the day before\": statement order, past perfect and a new time expression.",
      ),
      dc(
        "They asked us not to leave before the end of the meeting.",
        "A negative request: \"asked us not to leave\". Listen for the weak \"to\" in \"not to\".",
      ),
      tr(
        "El maestro nos dijo que apagáramos las computadoras y nos preguntó si habíamos terminado.",
        "The teacher told us to {turn|switch} off the computers and asked {us |}{if|whether} we had finished.",
        "Two patterns in one sentence: an order (\"told us to turn off\") and a yes/no question (\"asked if we had finished\"), with no \"that\" and statement order.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Reporting verbs, say / tell / ask / speak / talk, and a
  // whole-unit mix
  // ---------------------------------------------------------------------
  lesson(
    2,
    "reported-questions",
    "Reporting Verbs & Say, Tell, Ask",
    "Report what people said with precise verbs (offer, refuse, advise, suggest, deny, apologize for) and choose between say, tell, ask, speak and talk.",
    "Recap: reporting verbs and say, tell, ask",
    [
      "Verb + to: offer, promise, refuse, agree, threaten (\"She refused to sign\"). Verb + person + to: advise, remind, warn, invite, persuade (\"He reminded me to call\"). \"Suggest\" takes -ing or \"that\" + base verb, never person + to; \"admit\" and \"deny\" take -ing; \"apologize for\", \"accuse of\" and \"insist on\" take preposition + -ing.",
      "\"Tell\" takes the person directly, \"say\" doesn't; \"explain\" needs \"to\" before the person (\"explain it to me\"). \"Ask\" is «preguntar» and «pedir», \"ask for\" + thing; \"speak\" goes with languages, \"talk\" with conversations.",
    ],
    [
      ["My brother offered to drive us to the airport.", "Mi hermano se ofreció a llevarnos al aeropuerto."],
      ["The doctor advised me to drink more water.", "El médico me aconsejó que tomara más agua."],
      ["She suggested taking a taxi.", "Sugirió que tomáramos un taxi."],
      ["He apologized for missing the meeting.", "Se disculpó por faltar a la reunión."],
    ],
    [
      mc(
        "\"I'll carry your bag for you.\" Which report fits best?",
        ["He offered to carry my bag.", "He offered me to carry my bag.", "He refused to carry my bag.", "He threatened to carry my bag."],
        "Volunteering to do something is \"offer to\" + verb. There's no person between \"offer\" and \"to\": *offered me to carry is wrong.",
      ),
      fb(
        "The kids promised ___ their rooms.",
        "to clean",
        "Los niños prometieron [limpiar] sus cuartos.",
        "\"Promise\" + \"to\" + verb, with no person in between.",
      ),
      tr(
        "Mi jefe se negó a darme el día libre.",
        "My boss refused to give me the day off.",
        "«Negarse a» = \"refuse to\" + verb. Don't use \"deny\" here: \"deny\" is «negar» that something is true.",
      ),
      lc(
        "He threatened to quit if they didn't pay him more.",
        ["Leave his job", "Ask for a smaller salary", "Pay more taxes", "Call the police"],
        "\"Threaten to\" + verb = «amenazar con». Spanish uses «con», but English uses \"to\": he said he would quit.",
        "What did he say he would do?",
      ),
      fb(
        "My friend ___ me to apply for the job.",
        ["persuaded", "convinced"],
        "Mi amigo me [convenció] de que solicitara el trabajo.",
        "\"Persuade\" or \"convince\" + person + \"to\" + verb. Spanish says «convencer de que» + subjunctive, but English never uses \"that\" here.",
      ),
      tr(
        "Nos advirtieron que no nadáramos en ese río.",
        "They warned us not to swim in {that|the} river.",
        "\"Warn\" + person + \"not to\" + verb. *They warned us that we don't swim is a calque.",
      ),
      wo(
        "The pharmacist advised me to take the pills with food",
        "El farmacéutico me aconsejó que tomara las pastillas con comida.",
        "\"Advise\" + person + \"to\" + verb, like \"tell\". The noun \"advice\" is spelled with a \"c\", the verb \"advise\" with an \"s\".",
      ),
      tr(
        "Mi mamá me recordó que pagara la luz.",
        "My {mom|mother} reminded me to pay the {electricity|electric} bill.",
        "«Recordarle a alguien que haga algo» = \"remind\" + person + \"to\" + verb. Not *remembered me: \"remember\" is about your own memory.",
      ),
      mc(
        "Which sentence is correct?",
        ["Paula suggested having lunch in the park.", "Paula suggested us to have lunch in the park.", "Paula suggested to have lunch in the park.", "Paula suggested us having lunch in the park."],
        "\"Suggest\" + -ing (or \"suggest that we have\"). It never takes person + \"to\", even though «nos sugirió que» looks like that pattern.",
      ),
      fb(
        "The waiter recommended that we ___ the fish.",
        ["try", "should try"],
        "El mesero nos recomendó que [probáramos] el pescado.",
        "\"Recommend/suggest that\" + subject + base verb in American English (\"that we try\"), or \"should try\". Not *recommended us to try.",
      ),
      tr(
        "Luis admitió que había perdido las llaves.",
        ["Luis admitted losing the keys.", "Luis admitted {that |}he had lost the keys.", "Luis admitted having lost the keys.", "Luis admitted losing his keys.", "Luis admitted {that |}he had lost his keys."],
        "\"Admit\" + -ing or + (that) + clause. Not *admitted to lose.",
      ),
      fb(
        "The minister denied ___ the money.",
        ["taking", "having taken"],
        "El ministro negó [haber tomado] el dinero.",
        "\"Deny\" + -ing: \"denied taking\". «Negar haber hecho» does not become *denied to take.",
      ),
      tr(
        "Carmen se disculpó por no responder mi mensaje.",
        "Carmen apologized for not {answering|replying to|responding to} my message.",
        "\"Apologize for\" + -ing; the negative is \"for not\" + -ing. After a preposition, never the infinitive: *for not answer.",
      ),
      tr(
        "Me acusaron de copiar en el examen.",
        "They accused me of {cheating|copying} {on|in} the {exam|test}.",
        "\"Accuse\" + person + \"of\" + -ing. Spanish «acusar de copiar» has an infinitive, but English needs -ing after \"of\".",
      ),
      fb(
        "My grandfather insisted on ___ for dinner.",
        "paying",
        "Mi abuelo insistió en [pagar] la cena.",
        "\"Insist on\" + -ing. *insisted on pay and *insisted to pay are typical mistakes.",
      ),
      mt(
        "Match what each person said with the best reporting verb.",
        [
          ["\"I'm sorry I broke it.\"", "apologize for"],
          ["\"You stole my bike!\"", "accuse of"],
          ["\"No, I didn't take it.\"", "deny"],
          ["\"Don't forget your keys.\"", "remind"],
          ["\"If I were you, I'd rest.\"", "advise"],
        ],
        "Choose the verb by what the speaker was doing: saying sorry, blaming someone, saying something isn't true, helping someone remember, or giving advice.",
      ),
      lc(
        "She insisted on driving me home.",
        ["She really wanted to drive me home", "She asked me to drive her home", "She refused to drive me home", "She promised to drive me home next time"],
        "\"Insist on\" + -ing = «insistir en»: she wanted to do it and wouldn't take no for an answer.",
        "What happened?",
      ),
      dc(
        "He warned me not to leave my bike outside.",
        "\"Warned me not to\": the \"t\" of \"not\" and the weak \"to\" run together.",
      ),
      mc(
        "Which sentence is correct?",
        ["Can you explain this word to me?", "Can you explain me this word?", "Can you explain me about this word?", "Can you explain this word me?"],
        "\"Explain\" can't take the person directly: \"explain something to someone\". *Explain me is a calque of «explícame».",
      ),
      tr(
        "¿Me puedes explicar cómo funciona esta app?",
        ["{Can|Could} you explain to me how this app works?", "{Can|Could} you explain how this app works?", "{Can|Could} you explain how this app works to me?"],
        "\"Explain (to me)\" + question word + statement order: \"how this app works\", not *explain me how does this app work.",
      ),
      fb(
        "Please ___ me the truth.",
        "tell",
        "Por favor, [dime] la verdad.",
        "\"Tell the truth\" is a fixed phrase, and \"tell\" takes the person directly. *Say me the truth is wrong twice.",
      ),
      fb(
        "Did you ___ goodbye to your grandmother?",
        "say",
        "¿Le [dijiste] adiós a tu abuela?",
        "\"Say goodbye\", \"say hello\", \"say sorry\" use \"say\". If you add the person, use \"to\": \"say goodbye to her\".",
      ),
      tr(
        "Le pedí a mi papá dinero para el boleto.",
        "I asked my {dad|father} for money for the ticket.",
        "«Pedir algo a alguien» = \"ask\" + person + \"for\" + thing. *I asked money to my dad is a calque.",
      ),
      mc(
        "At a restaurant, «Pedí el pollo» is:",
        ["I ordered the chicken.", "I asked the chicken.", "I demanded the chicken.", "I said the chicken."],
        "«Pedir» food in a restaurant is \"order\". \"Ask\" + thing doesn't work: *I asked the chicken means you put a question to a chicken!",
      ),
      dc(
        "Can we talk about the plan before we speak to the boss?",
        "\"Talk about\" for a conversation; \"speak to\" is a little more formal, here for addressing someone in authority.",
      ),
      say(
        "She told us a funny story about her trip.",
        "Nos contó una historia graciosa sobre su viaje.",
        "Link \"told us\" and stress \"funny\" and \"trip\".",
        "«Contar una historia» = \"tell a story\". Not *say a story and not *count a story.",
      ),
      tr(
        "El guía nos aconsejó que no tomáramos fotos y nos preguntó de dónde éramos.",
        "The guide advised us not to take {photos|pictures} and asked {us |}where we were from.",
        "Advice: \"advise\" + person + \"not to\". Question: \"asked where we were from\", statement order with the preposition at the end.",
      ),
      mc(
        "Which sentence is correct?",
        ["She told me that she would call later.", "She said me that she would call later.", "She told that she would call later.", "She told to me that she would call later."],
        "\"Tell\" + person directly (\"told me\"); \"say\" has no person, or \"said to me\". *Told to me and *said me are both wrong.",
      ),
      tr(
        "Mi colega sugirió que nos reuniéramos el viernes.",
        ["My colleague suggested meeting on Friday.", "My colleague suggested {that |}we {meet|should meet} on Friday."],
        "\"Suggest\" + -ing or \"suggest (that) we meet\". Never *suggested us to meet.",
      ),
      fb(
        "He refused ___ me why he was angry.",
        "to tell",
        "Se negó a [decirme] por qué estaba enojado.",
        "Two patterns together: \"refuse to\" + verb, and \"tell\" + person + reported question with statement order (\"why he was angry\").",
      ),
      wo(
        "She accused her roommate of eating her yogurt",
        "Acusó a su compañera de cuarto de comerse su yogur.",
        "\"Accuse\" + person + \"of\" + -ing.",
      ),
      dc(
        "The landlord agreed to fix the heating before winter.",
        "\"Agree to\" + verb = «aceptar hacer algo». (\"Agree with\" is for opinions.)",
      ),
      say(
        "My boss asked me to explain the problem to the client.",
        "Mi jefe me pidió que le explicara el problema al cliente.",
        "\"Explain\" has the stress on the second syllable: ex-PLAIN.",
        "\"Ask\" + person + \"to\" for the request, and \"explain\" + thing + \"to\" + person.",
      ),
      tr(
        "Le dije a Marta que no se preocupara y me ofrecí a ayudarla.",
        "I told Marta not to worry and {I |}offered to help her.",
        "An order or advice with \"told Marta not to worry\", then \"offer to\" + verb with no person in between.",
      ),
    ],
  ),
];
