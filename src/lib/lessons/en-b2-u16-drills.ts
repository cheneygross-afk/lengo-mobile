// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u16-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u16 (gerunds, infinitives and habits): a short recap, then graded practice.

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
  slug: `en-b2-gerunds-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U16_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Change-of-meaning verbs, -ing after prepositions, perfect/passive forms
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Stop Smoking or Stop to Smoke?",
    "You will be able to choose -ing or to after remember, forget, stop, try, regret, go on and mean, use -ing after prepositions (including look forward to), and use having done, being told and see someone do.",
    "Recap: think about time and meaning",
    [
      "\"Remember/forget to do\": the action comes after («acordarse de hacer»). \"Remember doing\": a memory of something done. \"Stop doing\" = quit; \"stop to do\" = pause in order to do. \"Try to do\" = make an effort («intentar»); \"try doing\" = experiment («probar» + infinitive). \"Regret doing\" looks back; \"regret to inform\" gives bad news. \"Go on doing\" = continue; \"go on to do\" = move to the next thing. \"Mean doing\" = involve; \"mean to\" = intend.",
      "After any preposition, -ing: \"without saying\", \"by watching\". In \"look forward to\", \"be committed to\" and \"object to\", \"to\" is a preposition, so -ing too. \"Having done\" stresses an earlier action, \"being told\" is passive, and \"see/hear someone do\" or \"doing\" never takes \"to\".",
    ],
    [
      ["Remember to turn off the lights.", "Acuérdate de apagar las luces."],
      ["She stopped eating meat two years ago.", "Dejó de comer carne hace dos años."],
      ["Try turning off your phone an hour before bed.", "Prueba apagar el celular una hora antes de dormir."],
      ["I look forward to meeting you.", "Tengo ganas de conocerte."],
    ],
    [
      fb("Remember ___ the windows before you leave.", ["to close", "to shut"], "Acuérdate de [cerrar] las ventanas antes de salir.",
        "First you remember, then you close: \"remember to\" + base form points forward."),
      fb("I remember ___ the windows, so why is the kitchen cold?", ["closing", "shutting", "having closed", "having shut"], "Recuerdo [haber cerrado] las ventanas, así que ¿por qué hace frío en la cocina?",
        "The closing happened first and now you have a memory of it: \"remember\" + -ing."),
      mc("How do you say «Se me olvidó enviar el correo»?", [
        "I forgot to send the email.",
        "I forgot sending the email.",
        "I forgot send the email.",
        "I forgot to sending the email.",
      ], "You didn't send it: \"forget to\" + base form. \"Forget sending\" would be about a memory, usually with \"never\"."),
      tr("Nunca olvidaré la primera vez que manejé sola.", ["I'll never forget driving {alone|on my own|by myself} for the first time.", "I'll never forget the first time I drove {alone|on my own|by myself}."],
        "\"Never forget\" + -ing is about a real memory of something that happened."),
      tr("¿Te acordaste de pagar la luz?", "Did you remember to pay the {electricity|electric|power} bill?",
        "The paying comes after the remembering, so \"remember to\" + base form."),
      fb("We stopped ___ some water at a gas station.", "to buy", "Paramos [a comprar] agua en una gasolinera.",
        "\"Stop to\" = stop in order to do something: the \"to\" of purpose («para»)."),
      mc("How do you say «Dejé de tomar refrescos»?", [
        "I stopped drinking soda.",
        "I stopped to drink soda.",
        "I stopped drink soda.",
        "I stopped of drinking soda.",
      ], "«Dejar de» = \"stop\" + -ing. \"I stopped to drink soda\" means you paused in order to drink one: the opposite."),
      tr("Ha dejado de nevar.", "It has stopped snowing.",
        "«Dejar de» + infinitive = \"stop\" + -ing. Weather verbs need \"it\" as the subject."),
      lc("On the way home, I stopped to call my mom.", [
        "Volviendo a casa, me paré para llamar a mi mamá.",
        "Volviendo a casa, dejé de llamar a mi mamá.",
        "Ya no llamo a mi mamá cuando vuelvo a casa.",
        "Mi mamá me llamó para que parara.",
      ], "\"Stopped to call\" = paused in order to call. \"Stopped calling\" would mean you gave it up."),
      fb("I tried ___ the box, but it was too heavy.", "to lift", "[Intenté levantar] la caja, pero pesaba demasiado.",
        "A difficult action you made an effort to do (and failed): \"try to\" + base form."),
      tr("Si no puedes dormir, prueba leer un libro aburrido.", "If you can't sleep, try reading a boring book.",
        "Advice to experiment, to see if it works: \"try\" + -ing. Reading is easy; the question is whether it helps."),
      mc("Your laptop is slow. Which piece of advice is correct?", [
        "Try closing some programs.",
        "Try to closing some programs.",
        "Try close some programs.",
        "Try for closing some programs.",
      ], "An experiment to solve a problem: \"try\" + -ing. \"Try to\" would need the base form, not -ing."),
      tr("¿Probaste reiniciar el router?", ["Have you tried restarting the router?", "Did you try restarting the router?"],
        "A suggested experiment: \"try\" + -ing. «Probar» + infinitive points to this meaning."),
      fb("I regret not ___ more when I was younger.", ["traveling", "having traveled"], "Me arrepiento de no [haber viajado] más cuando era joven.",
        "\"Regret\" + -ing looks back at the past. The negative is \"regret not\" + -ing."),
      fb("We regret ___ you that the event has been canceled.", "to inform", "[Lamentamos comunicarle] que el evento se ha cancelado.",
        "\"Regret to\" + inform/say/tell is the formal way to give bad news now."),
      tr("Perdón, no era mi intención interrumpirte.", "{Sorry|I'm sorry}, I didn't mean to interrupt you.",
        "«No era mi intención» = \"I didn't mean to\" + base form."),
      tr("Mudarme a Londres implica dejar a mi familia.", "Moving to London means leaving my family.",
        "\"Mean\" + -ing = involve. The gerund \"Moving\" is also the subject of the sentence."),
      mc("How do you say «Siguió hablando durante toda la película»?", [
        "He went on talking during the whole movie.",
        "He went on to talk during the whole movie.",
        "He went on talk during the whole movie.",
        "He followed talking during the whole movie.",
      ], "\"Go on\" + -ing = continue the same activity. \"Go on to\" = move on to something new («pasar a»)."),
      tr("Empezó como cajera y después llegó a dirigir la tienda.", "She started as a cashier and {then |later |}went on to {manage|run} the store.",
        "\"Go on to\" + base form = the next step in a sequence."),
      fb("She left the party without ___ goodbye.", "saying", "Se fue de la fiesta sin [despedirse].",
        "After a preposition (\"without\"), always -ing. *without say copies Spanish «sin decir»."),
      tr("Puedes mejorar tu pronunciación escuchando podcasts.", "You can improve your pronunciation by listening to podcasts.",
        "\"By\" + -ing explains how. Spanish uses only the gerund, but English needs \"by\"."),
      mc("Which ending is correct? \"I look forward to...\"", [
        "hearing from you.",
        "hear from you.",
        "heard from you.",
        "be hearing from you.",
      ], "In \"look forward to\", \"to\" is a preposition (you can say \"look forward to the weekend\"), so the verb takes -ing."),
      wo("The company is committed to reducing plastic.", "La empresa se ha comprometido a reducir el plástico.",
        "\"Committed to\" ends in a preposition, so -ing follows: \"to reducing\"."),
      tr("Estoy pensando en cambiarme de departamento.", "I'm thinking {about|of} {moving|changing apartments|moving to a new apartment}.",
        "\"Think about/of\" + -ing. *I'm thinking to move is a common error."),
      fb("I hate ___ told what to do.", "being", "Odio que me [digan] lo que tengo que hacer.",
        "Passive gerund: \"being\" + participle. Spanish needs «que me...» + subjunctive; English just uses \"being told\"."),
      tr("Negó haber perdido las llaves.", "{He|She} denied {losing|having lost} the keys.",
        "\"Deny\" + -ing; the perfect gerund \"having lost\" stresses that it happened before."),
      wo("I saw the bus leave without me.", "Vi al autobús irse sin mí.",
        "\"See\" + object + base form (no \"to\") for a complete action."),
      dc("We could hear the kids laughing in the yard.",
        "\"Hear\" + object + -ing: the action was in progress."),
      mc("Which sentence is correct?", [
        "I heard someone knock on the door.",
        "I heard someone to knock on the door.",
        "I heard to knock someone on the door.",
        "I heard someone knocks on the door.",
      ], "Verbs of perception take object + base form (or -ing), never \"to\"."),
      sp("Try adding a little lemon.", "A suggestion to experiment: \"try\" + -ing.",
        "Stress \"lemon\": LEM-un.", "Say it in English: Prueba agregarle un poco de limón."),
      sp("We're looking forward to meeting the new team.", "\"Look forward to\" + -ing.",
        "Link \"forward to\": \"for-wer-tuh\".", "Say it in English: Tenemos muchas ganas de conocer al nuevo equipo."),
      dc("I'll never forget hearing that song live.",
        "\"Never forget\" + -ing = a real memory."),
      mt("Match each English phrase with its meaning.", [
        ["stop smoking", "dejar de fumar"],
        ["stop to smoke", "pararse a fumar"],
        ["remember to call", "acordarse de llamar"],
        ["remember calling", "recordar haber llamado"],
        ["try to open", "intentar abrir (con esfuerzo)"],
        ["try opening", "probar abrir (a ver si funciona)"],
      ], "\"To\" usually points forward or to a purpose or effort; -ing looks back, describes the activity itself or an experiment."),
      tr("Dejé de usar redes sociales y duermo mejor.", ["I stopped using social media{,|} and I sleep better.", "I've stopped using social media{,|} and I sleep better."],
        "«Dejar de» = \"stop\" + -ing. *I stopped to use would mean you paused in order to use them."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Basics review, need doing, want you to / let / make / would rather, error hunt
  // ---------------------------------------------------------------------
  lesson(
    2,
    "I Want You to Come, I'd Rather You Stayed",
    "You will be able to use the basic -ing and to verbs, need doing, and the English structures that replace Spanish «que» + subjunctive (want you to, let/make someone do, I'd rather you..., as if), and fix the classic -ing / to errors.",
    "Recap: no «que» + subjunctive in English",
    [
      "Some verbs take -ing (enjoy, avoid, mind, can't stand, suggest), others take to (want, decide, hope, afford). An activity as a subject is -ing (\"Running is good for you\"), or start with \"It\": \"It's important to rest\", never *Is important. \"The car needs washing\" has a passive meaning.",
      "«Quiero que vengas» = \"I want you to come\" (also would like, ask, tell, expect + person + to). \"Let\" and \"make\" take no \"to\": \"She made me wait\". «Prefiero que te quedes» = \"I'd rather you stayed\" or \"I'd prefer you to stay\"; «como si fuera» = \"as if he were/was\".",
      "Classic fixes: \"thank you for answering\", \"thinking of moving\", \"suggested going\", \"worth seeing\", \"insisted on paying\", \"succeeded in convincing\".",
    ],
    [
      ["We expect you to arrive on time.", "Esperamos que llegues a tiempo."],
      ["They let us use the gym for free.", "Nos dejan usar el gimnasio gratis."],
      ["I'd rather you didn't call after ten.", "Prefiero que no llames después de las diez."],
      ["This old jacket needs cleaning.", "Esta chaqueta vieja necesita una limpieza."],
    ],
    [
      fb("I really enjoy ___ for my friends.", "cooking", "Me encanta [cocinar] para mis amigos.",
        "\"Enjoy\" is always followed by -ing. *enjoy to cook is a typical error."),
      mc("Which sentence is correct?", [
        "I avoid driving at night.",
        "I avoid to drive at night.",
        "I avoid drive at night.",
        "I avoid of driving at night.",
      ], "\"Avoid\" + -ing. Spanish «evito manejar» uses the infinitive, but English needs -ing."),
      tr("¿Te importa esperar cinco minutos?", ["Do you mind waiting {five|5} minutes?", "Would you mind waiting {five|5} minutes?"],
        "\"Mind\" + -ing: \"Do you mind waiting?\"."),
      wo("We decided not to go to the party.", "Decidimos no ir a la fiesta.",
        "\"Decide\" + to; the negative is \"decide not to\"."),
      fb("We can't afford ___ a new car this year.", "to buy", "No podemos permitirnos [comprar] un carro nuevo este año.",
        "\"Afford\" + to + base form."),
      tr("Correr es bueno para el corazón.", "Running is good for {your|the} heart.",
        "An activity as the subject is -ing in English: \"Running is...\". \"To run is good\" sounds old-fashioned."),
      tr("Es importante tomar mucha agua.", "It's important to drink {a lot of|lots of|plenty of} water.",
        "English needs a subject: \"It's important to...\". *Is important to drink is a classic Spanish-speaker error."),
      mc("Which sentence is correct?", [
        "It's hard to find parking downtown.",
        "Is hard to find parking downtown.",
        "Is hard find parking downtown.",
        "To find parking downtown it's hard.",
      ], "Start with \"It\" + adjective + to: \"It's hard to find...\". Never drop \"it\"."),
      fb("The car needs ___. It's covered in mud.", ["washing", "to be washed", "a wash"], "Hay que [lavar] el carro. Está lleno de barro.",
        "\"Need\" + -ing has a passive meaning: the car needs to be washed. The subject is the thing."),
      tr("Hay que arreglar la puerta.", ["The door needs {fixing|repairing}.", "The door needs to be {fixed|repaired}.", "We need to {fix|repair} the door."],
        "\"The door needs fixing\" = it needs to be fixed. With a person as subject: \"We need to fix it\"."),
      mc("How do you say «Tengo que cortar el pasto»?", [
        "I need to cut the grass.",
        "I need cutting the grass.",
        "The grass needs to cut.",
        "I need cut the grass.",
      ], "With a person doing the action: \"need to\" + base form. \"The grass needs cutting\" would also be correct."),
      fb("I want you ___ me the truth.", "to tell", "Quiero que me [digas] la verdad.",
        "«Querer que» + subjunctive = \"want\" + person + to + base form."),
      tr("Mis padres quieren que estudie medicina.", "My parents want me to study medicine.",
        "Object pronoun + to: \"want me to study\". Never *want that I study."),
      mc("Which sentence is correct?", [
        "She'd like us to arrive early.",
        "She'd like that we arrive early.",
        "She'd like we arrive early.",
        "She'd like us arrive early.",
      ], "\"Would like\" + person + to, just like \"want\"."),
      tr("Les pedí que no hicieran ruido.", "I asked them not to make {any |}noise.",
        "\"Ask\" + person + \"not to\". The \"not\" goes before \"to\"."),
      fb("My boss made me ___ the whole report again.", ["write", "redo", "do"], "Mi jefe me hizo [escribir] todo el informe otra vez.",
        "\"Make\" + person + base form, with no \"to\": \"made me write\"."),
      tr("No me dejan usar el celular en el trabajo.", ["They don't let me use my phone at work.", "I'm not allowed to use my phone at work.", "They don't allow me to use my phone at work."],
        "\"Let\" + person + base form (no \"to\"), or \"allow\" + person + to. The passive is \"I'm not allowed to\"."),
      mc("Which sentence is correct?", [
        "The teacher let us leave early.",
        "The teacher let us to leave early.",
        "The teacher let us leaving early.",
        "The teacher let that we leave early.",
      ], "\"Let\" + person + base form. *let us to leave is the typical error."),
      tr("Prefiero que no fumes aquí.", ["I'd rather you didn't smoke here.", "I'd prefer you not to smoke here.", "I'd prefer it if you didn't smoke here."],
        "About someone else: \"I'd rather you\" + past simple (it's not past time), or \"I'd prefer you (not) to\"."),
      fb("I'd rather you ___ me before coming over.", "called", "Prefiero que me [llames] antes de venir.",
        "\"Would rather\" + person + past simple: \"I'd rather you called\". The past marks a wish, not past time."),
      tr("Ya es hora de que busques trabajo.", ["It's time you {looked for|found|got} a job.", "It's time for you to {look for|find|get} a job."],
        "\"It's time\" + person + past simple, or \"It's time for you to\"."),
      fb("He talks as if he ___ everything.", "knew", "Habla como si lo [supiera] todo.",
        "«Como si» + imperfect subjunctive = \"as if\" + past simple."),
      tr("Es mejor que esperes aquí.", "It's better {for you to wait|if you wait} here.",
        "«Es mejor que» + subjunctive → \"It's better for you to\" + base form."),
      mc("Which email ending is correct?", [
        "Thank you for answering so quickly.",
        "Thank you for answer so quickly.",
        "Thank you to answer so quickly.",
        "Thank you for to answer so quickly.",
      ], "\"For\" is a preposition, so -ing: \"Thank you for answering\"."),
      tr("Vale la pena visitar el museo.", ["The museum is worth {visiting|a visit}.", "It's worth visiting the museum."],
        "\"Worth\" always takes -ing (or a noun). *worth to visit is wrong."),
      tr("No soporto hacer fila.", "I can't stand {waiting|standing} in line.",
        "\"Can't stand\" + -ing is the safe choice. «Hacer fila» = \"wait in line\"."),
      fb("We finally succeeded in ___ the client.", ["convincing", "persuading"], "Por fin conseguimos [convencer] al cliente.",
        "\"Succeed in\" + -ing. The simpler option is \"managed to convince\"."),
      wo("My friend suggested going to the beach.", "Mi amigo sugirió ir a la playa.",
        "\"Suggest\" + -ing, never *suggested to go."),
      dc("The hotel insisted on seeing our passports.",
        "\"Insist on\" + -ing, never *insisted to see."),
      dc("I'd rather you didn't mention it to anyone.",
        "\"I'd rather you\" + past simple (\"didn't mention\") = «prefiero que no lo menciones»."),
      lc("She made me wait for forty minutes.", [
        "Me hizo esperar cuarenta minutos.",
        "Esperé cuarenta minutos por ella.",
        "Me dejó esperar cuarenta minutos.",
        "Me pidió que esperara catorce minutos.",
      ], "\"Make\" + person + base form = «hacer que» or «obligar a». \"Let\" would be «dejar»."),
      lc("The walls need painting.", [
        "Hay que pintar las paredes.",
        "Las paredes necesitan pintar algo.",
        "Necesito pintar paredes.",
        "Las paredes están recién pintadas.",
      ], "\"Need\" + -ing has a passive meaning: the walls need to be painted."),
      sp("I want you to call me when you land.", "\"Want\" + person + to: \"want you to call\".",
        "\"Want you\" sounds like \"wan-chu\".", "Say it in English: Quiero que me llames cuando aterrices."),
      sp("I can't stand being late.", "\"Can't stand\" + -ing.",
        "Stress \"can't\" and \"late\".", "Say it in English: No soporto llegar tarde."),
      tr("Estoy pensando en estudiar inglés en Canadá.", "I'm thinking {of|about} studying English in Canada.",
        "\"Think of/about\" + -ing. *I'm thinking to study copies «pensar» + infinitive."),
      mc("Which sentence is correct?", [
        "I want him to stay.",
        "I want he stays.",
        "I want that he stays.",
        "I want him stay.",
      ], "\"Want\" + object pronoun + to: \"want him to stay\". No \"that\", no subject pronoun."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Used to, be/get used to, would, worth / no point / would rather + whole unit
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Used To, Be Used To, Would",
    "You will be able to talk about past habits with used to and would, about what is normal for you with be used to and get used to, rewrite ideas with not worth, no point and would rather, and mix all the -ing and to patterns of the unit.",
    "Recap: then, now and the change",
    [
      "\"Used to\" + base form = past habits and states (\"I used to live alone\"; negative \"didn't use to\"). There's no present form: «suelo» is \"I usually\". \"Would\" + base form is only for repeated past actions in a story, never for states (*I would have a dog). Single events and \"how many times\" take the past simple.",
      "\"Be used to\" + -ing or noun = it's normal for me; \"get used to\" + -ing or noun = becoming normal. Here \"to\" is a preposition: \"I'm used to working late\", not *used to work.",
      "\"It's not worth / There's no point (in) / It's no use\" + -ing. \"I'd rather\" + base form (+ than), \"prefer\" + -ing + to + -ing.",
    ],
    [
      ["I used to play the drums in a band.", "Antes tocaba la batería en una banda."],
      ["On Fridays we would order pizza and watch movies.", "Los viernes pedíamos pizza y veíamos películas."],
      ["She's getting used to the new schedule.", "Se está acostumbrando al nuevo horario."],
      ["It's not worth taking the car; it's very close.", "No vale la pena llevar el carro; está muy cerca."],
    ],
    [
      fb("I ___ to play the guitar, but I stopped years ago.", "used", "Antes [tocaba] la guitarra, pero lo dejé hace años.",
        "\"Used to\" + base form for a past habit that is no longer true."),
      fb("We didn't ___ to have a dishwasher.", "use", "Antes no [teníamos] lavavajillas.",
        "After \"didn't\", the form is \"use to\" (no -d), because \"did\" already carries the past."),
      tr("¿Antes vivías en el centro?", "Did you use to live {downtown|in the city center|in the center}?",
        "Question: \"Did you use to\" + base form, without the -d."),
      mc("How do you say «Suelo almorzar a la una»?", [
        "I usually have lunch at one.",
        "I use to have lunch at one.",
        "I used to have lunch at one.",
        "I'm used to have lunch at one.",
      ], "\"Used to\" only exists in the past. For a present habit, use the present simple with \"usually\". *I use to is a very common error."),
      fb("She's used to ___ long hours.", "working", "Está acostumbrada a [trabajar] muchas horas.",
        "\"Be used to\" ends in the preposition \"to\", so -ing follows: \"used to working\"."),
      wo("I'm not used to this weather.", "No estoy acostumbrado a este clima.",
        "\"Be used to\" + noun: \"used to this weather\"."),
      mc("Which sentence is correct?", [
        "He's used to getting up early.",
        "He's used to get up early.",
        "He used to getting up early.",
        "He's use to getting up early.",
      ], "\"Be used to\" + -ing. \"He used to get up early\" would also be correct, but it means a past habit."),
      fb("Don't worry, you'll soon get used to ___ in English.", ["working", "speaking", "thinking"], "No te preocupes, pronto te acostumbrarás a [trabajar] en inglés.",
        "\"Get used to\" + -ing: the process of becoming used to something."),
      tr("Me estoy acostumbrando a vivir sola.", "I'm getting used to living {alone|on my own|by myself}.",
        "«Me estoy acostumbrando» = \"I'm getting used to\" + -ing. Don't add \"myself\" after \"used\"."),
      tr("Tardé un año en acostumbrarme al ruido.", "It took me a year to get used to the noise.",
        "\"It took me\" + time + \"to get used to\" + noun."),
      lc("I used to hate running, but now I'm used to it.", [
        "Antes odiaba correr, pero ahora ya estoy acostumbrado.",
        "Suelo odiar correr, pero ahora me gusta.",
        "Odio correr y no me acostumbro.",
        "Antes corría, pero ahora lo odio.",
      ], "\"Used to hate\" = past state; \"I'm used to it\" = it's normal for me now."),
      fb("Every Sunday my grandma ___ make pancakes for everyone.", "would", "Todos los domingos mi abuela [hacía] panqueques para todos.",
        "\"Would\" + base form for a repeated past action in a nostalgic story. \"Used to\" is also possible."),
      mc("Which sentence is correct?", [
        "We used to have a big yard.",
        "We would have a big yard.",
        "We use to have a big yard.",
        "We were used to have a big yard.",
      ], "\"Have\" here is a state, so only \"used to\" works. *We would have a big yard sounds like a conditional («tendríamos»)."),
      tr("De niños, jugábamos en la calle hasta que oscurecía.", "When we were {kids|children}, we {would|used to} play in the street until {dark|it got dark}.",
        "A repeated past action: \"would\" or \"used to\" + base form."),
      tr("Fui a Cancún tres veces.", ["I went to Cancun three times.", "I've been to Cancun three times."],
        "A number of times takes the past simple (or the present perfect): never *I used to go three times."),
      mc("Which sentence is correct?", [
        "I visited my cousins in Texas twice.",
        "I used to visit my cousins in Texas twice.",
        "I would visit my cousins in Texas twice.",
        "I was used to visit my cousins in Texas twice.",
      ], "\"Used to\" and \"would\" can't say how many times something happened. Use the past simple."),
      wo("My dad would take us fishing every summer.", "Mi papá nos llevaba a pescar todos los veranos.",
        "\"Would\" + base form + a time expression (\"every summer\") for a repeated past action."),
      fb("There's no point in ___ now. The decision has been made.", "complaining", "No tiene sentido [quejarse] ahora. Ya se tomó la decisión.",
        "\"There's no point (in)\" + -ing. Spanish uses the infinitive, English the -ing form."),
      tr("No vale la pena ver esa serie.", ["That {series|show} isn't worth watching.", "It's not worth watching that {series|show}."],
        "\"Worth\" + -ing. The thing can be the subject: \"That show isn't worth watching\"."),
      tr("No sirve de nada llamarlo. Nunca contesta.", "{It's no use|There's no point in|There's no point|It's not worth} calling him. He never {answers|picks up}.",
        "\"It's no use\" + -ing = «no sirve de nada». All three expressions take -ing."),
      fb("I'd rather ___ home than go out in this rain.", "stay", "Prefiero [quedarme] en casa que salir con esta lluvia.",
        "\"Would rather\" + base form, without \"to\", and \"than\" for the comparison."),
      mc("Which sentence is correct?", [
        "I prefer walking to driving.",
        "I prefer walking than driving.",
        "I prefer to walk than driving.",
        "I'd rather to walk than drive.",
      ], "\"Prefer\" + -ing + \"to\" + -ing. *prefer... than is a common error, and \"would rather\" never takes \"to\"."),
      tr("Prefiero cocinar en casa a comer fuera.", ["I prefer cooking at home to eating out.", "I prefer to cook at home rather than eat out.", "I'd rather cook at home than eat out."],
        "Three correct patterns: prefer -ing to -ing, prefer to... rather than..., would rather... than...."),
      tr("Preferiría no hablar de eso.", ["I'd rather not talk about {it|that}.", "I'd prefer not to talk about {it|that}."],
        "Negative: \"I'd rather not\" + base form."),
      tr("¿Ya te acostumbraste a la comida?", ["Have you gotten used to the food yet?", "Have you got used to the food yet?", "Are you used to the food yet?", "Did you get used to the food yet?"],
        "\"Get used to\" + noun. Never *Did you get used yourself."),
      dc("Back home I used to walk everywhere, but here I drive.",
        "\"Used to\" + base form contrasts the past with the present simple for now."),
      dc("I've stopped eating so much sugar, and I feel great.",
        "\"Stop\" + -ing = give up a habit."),
      sp("I'm still getting used to the time difference.", "\"Get used to\" + noun, in the present continuous: the process isn't finished.",
        "\"Used to\" is pronounced \"yoos-tuh\", with an /s/.", "Say it in English: Todavía me estoy acostumbrando a la diferencia horaria."),
      sp("We would spend hours talking on the phone.", "\"Would\" for a repeated past action, and \"spend time\" + -ing.",
        "\"We would\" often sounds like \"we'd\".", "Say it in English: Nos pasábamos horas hablando por teléfono."),
      tr("Acuérdate de regar las plantas mientras no estoy.", "Remember to water the plants while I'm {away|gone|not here}.",
        "The watering comes after the remembering: \"remember to\"."),
      fb("I'm looking forward to ___ my own apartment.", ["having", "getting"], "Tengo muchas ganas de [tener] mi propio departamento.",
        "\"Look forward to\" + -ing: \"to\" is a preposition here."),
      tr("Probé hacer yoga, pero no me gustó.", ["I tried {doing|practicing} yoga, but I didn't like it.", "I tried yoga, but I didn't like it."],
        "An experiment to see what it's like: \"try\" + -ing (or a noun)."),
      lc("I'm not used to being told what to do.", [
        "No estoy acostumbrado a que me digan lo que tengo que hacer.",
        "Antes me decían lo que tenía que hacer.",
        "No suelo decirle a nadie lo que tiene que hacer.",
        "Me estoy acostumbrando a que me den órdenes.",
      ], "\"Be used to\" + passive gerund \"being told\" = «estar acostumbrado a que me digan»."),
      mt("Match each structure with its use.", [
        ["used to + base form", "a past habit or state (antes vivía...)"],
        ["be used to + -ing", "it's normal for me (estoy acostumbrado)"],
        ["get used to + -ing", "the process (acostumbrarse)"],
        ["would + base form", "a repeated past action in a story"],
        ["usually + present simple", "a present habit (suelo...)"],
      ], "Three similar-looking structures with different meanings, plus \"would\" for stories and \"usually\" for the present."),
      mc("Which sentence is correct?", [
        "I'm used to working from home now.",
        "I'm used to work from home now.",
        "I use to work from home now.",
        "I'm used working from home now.",
      ], "\"Be used to\" + -ing. *I use to work is wrong because \"used to\" has no present form."),
      tr("Antes era muy tímida, pero ya no.", "I used to be very shy, but {not anymore|I'm not anymore|I'm not now|not now}.",
        "A past state takes \"used to\" (not \"would\"): \"I used to be shy\"."),
    ],
  ),
];
