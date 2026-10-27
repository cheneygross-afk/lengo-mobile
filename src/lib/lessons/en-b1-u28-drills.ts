// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u28-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u28 (linkers and writing): a short recap, then graded practice.

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
  slug: `en-b1-linkers-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U28_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Contrast (parts 1 and 2), reason and result
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Although, Despite, Because Of",
    "You will be able to join contrasting ideas with but, although, however, despite and whereas, and give reasons and results with because, because of, as, due to, so and that's why, with the right grammar after each.",
    "Recap: what comes after each linker?",
    [
      "\"But\" and \"although\" / \"even though\" + clause (one linker per contrast: never *although... but). \"However,\" starts a new sentence or follows a semicolon. \"Despite\" / \"in spite of\" + noun or -ing (never *despite of, never *despite it was). \"Whereas\" / \"while\" compare two things; \"on the other hand\" always shows a contrast.",
      "Reason: \"because\" + clause, \"because of\" / \"due to\" + noun, and \"as\" / \"since\" at the start for «como» or «ya que». Result: \"so\", \"therefore\" (formal), and \"that's why\" for «por eso», never *for that.",
    ],
    [
      ["Although she was tired, she finished the report.", "Aunque estaba cansada, terminó el informe."],
      ["Despite the traffic, we arrived on time.", "A pesar del tráfico, llegamos a tiempo."],
      ["We canceled the picnic because of the storm.", "Cancelamos el picnic por la tormenta."],
      ["I love traveling. That's why I'm saving money.", "Me encanta viajar. Por eso estoy ahorrando."],
    ],
    [
      fb("___ she was tired, she finished the report.", ["Although", "Even though", "Though"], "[Aunque] estaba cansada, terminó el informe.",
        "\"Although\" + clause (subject + verb). The second part has no \"but\": one contrast, one linker."),
      mc("Which sentence is correct?", [
        "Although the apartment was small, it was very comfortable.",
        "Although the apartment was small, but it was very comfortable.",
        "Although the apartment was small, however it was very comfortable.",
        "Despite the apartment was small, it was very comfortable.",
      ], "With \"although\", the second clause needs nothing extra. *Although... but doubles the linker, and \"despite\" can't take a clause."),
      tr("Me encanta mi trabajo, pero el sueldo es bajo.", "I love my job, but the {salary|pay} is {low|bad}.",
        "\"But\" goes between the two clauses, usually after a comma, like «pero»."),
      tr("Aunque llovía, salimos a correr.", ["{Although|Even though|Though} it was raining, we went {running|for a run}.", "We went {running|for a run} {although|even though|though} it was raining."],
        "\"Although\" can start the sentence (comma after the first clause) or go in the middle. «Llovía» is a background action: \"it was raining\"."),
      fb("The service was slow. ___, the food was excellent.", ["However", "Still"], "El servicio era lento. [Sin embargo], la comida era excelente.",
        "\"However\" (sin embargo) starts the second sentence and takes a comma. It connects sentences; it doesn't join clauses like \"but\"."),
      mc("Choose the correctly punctuated sentence.", [
        "I studied all weekend; however, I failed the test.",
        "I studied all weekend, however I failed the test.",
        "I studied all weekend however, I failed the test.",
        "I studied all weekend however I failed the test.",
      ], "Between two clauses, \"however\" needs a semicolon (or a period) before it and a comma after it. A comma alone is a common mistake."),
      wo("The room was small but very clean.", "La habitación era pequeña pero muy limpia.",
        "Between two adjectives, \"but\" needs no comma."),
      lc("It's a great city. It's a bit expensive, though.", [
        "Es una ciudad genial. Eso sí, es un poco cara.",
        "Es una ciudad genial, aunque no es cara.",
        "Es una ciudad genial porque es un poco cara.",
        "Pensaba que era una ciudad genial, pero es cara.",
      ], "\"Though\" at the very end of a sentence softens a contrast, like «eso sí» or «aunque»."),
      dc("Even though he lives next door, I hardly ever see him.",
        "\"Even though\" is a stronger \"although\". No \"but\" in the second clause."),
      fb("___ the traffic, we arrived on time.", ["Despite", "In spite of"], "[A pesar del] tráfico, llegamos a tiempo.",
        "\"Despite\" or \"in spite of\" + noun. «A pesar DE» tempts you to write *despite of, but \"despite\" never takes \"of\"."),
      mc("Which sentence is correct?", [
        "Despite the cold, we went to the beach.",
        "Despite of the cold, we went to the beach.",
        "In spite the cold, we went to the beach.",
        "Despite it was cold, we went to the beach.",
      ], "\"Despite\" + noun, with no \"of\". The long form is \"in spite of\", which always needs \"of\". A clause (\"it was cold\") needs \"although\"."),
      tr("A pesar de estar enferma, fue a trabajar.", ["{Despite|In spite of} being {sick|ill}, she went to work.", "She went to work {despite|in spite of} being {sick|ill}."],
        "A verb after \"despite\" takes -ing: \"despite being sick\". The subject of both parts is the same (she)."),
      fb("He got the job despite ___ any experience.", "not having", "Consiguió el trabajo a pesar de [no tener] experiencia.",
        "The negative is \"despite not\" + -ing: \"despite not having\"."),
      tr("A pesar de que el vuelo se retrasó, llegamos a la boda.", "{Despite the fact that|In spite of the fact that|Although|Even though} the flight was delayed, we {got to|made it to|arrived at} the wedding.",
        "«A pesar de que» + clause is \"despite the fact that\" or simply \"although\". *Despite the flight was delayed is wrong."),
      fb("My sister loves the beach, ___ I prefer the mountains.", ["whereas", "while"], "A mi hermana le encanta la playa, [mientras que] yo prefiero la montaña.",
        "\"Whereas\" or \"while\" (mientras que) compares two people or things, after a comma."),
      tr("Por un lado, el departamento es barato. Por otro, está lejos del centro.", "On the one hand, the apartment is cheap. On the other hand, {it's|it is} far from {downtown|the center|the city center}.",
        "\"On the one hand... On the other hand...\" (with \"on\", never *in the other hand) shows two sides that contrast."),
      mc("Complete: \"He isn't shy. ___, he loves talking to strangers.\"", ["On the contrary", "On the other hand", "In the other hand", "Despite"],
        "\"On the contrary\" says the opposite of what came before is true. \"On the other hand\" would add a contrasting point, not deny the first one."),
      sp("Despite being tired, I couldn't sleep.", "\"Despite\" + -ing: \"being tired\".",
        "Stress \"tired\" and \"sleep\".", "Say it in English: «A pesar de estar cansado, no podía dormir»"),
      fb("We canceled the picnic ___ the storm.", ["because of", "due to"], "Cancelamos el picnic [por] la tormenta.",
        "Before a noun (\"the storm\"), use \"because of\" or \"due to\". «Por» giving a reason is usually \"because of\"."),
      fb("I didn't go to the party ___ I had to work.", ["because", "as", "since"], "No fui a la fiesta [porque] tenía que trabajar.",
        "Before a clause (\"I had to work\"), use \"because\". *Because of I had to work is a common mix-up."),
      tr("Como no tenía dinero, me quedé en casa.", "{As|Since|Because} I {didn't have any|had no|didn't have} money, I stayed {home|at home}.",
        "«Como» at the start giving a reason is \"As\" or \"Since\", never *Like or *How."),
      tr("Ya que estás en la cocina, ¿me traes un vaso de agua?", "{Since|As} you're in the kitchen, {can|could} you {bring|get} me a glass of water?",
        "«Ya que» is \"since\" or \"as\". Here \"since\" gives a reason, not «desde»."),
      lc("The museum is closed due to repairs.", [
        "El museo está cerrado por obras.",
        "El museo cierra a pesar de las obras.",
        "El museo debe hacer reparaciones.",
        "El museo está cerrado, así que hay obras.",
      ], "\"Due to\" (debido a) + noun gives a formal reason. You often see it on signs and in announcements."),
      tr("Se me olvidó la contraseña, así que no pude entrar.", "I forgot {the|my} password, so I couldn't {log in|get in|sign in}.",
        "\"So\" introduces a result, after a comma. Spanish «se me olvidó» becomes a person subject: \"I forgot\"."),
      fb("Sales fell by 30%. ___, the company had to cut jobs.", ["Therefore", "As a result", "Because of that", "For that reason", "So"], "Las ventas cayeron un 30 %. [Por lo tanto], la empresa tuvo que recortar empleos.",
        "\"Therefore\" is the formal \"so\": it starts a new sentence and takes a comma."),
      tr("Me encanta viajar. Por eso estoy ahorrando.", "I love {traveling|to travel}. {That's why|Because of that|For that reason} I'm saving{ money|| up}.",
        "«Por eso» is \"That's why\". *For that is a word-for-word translation that doesn't work in English."),
      mt("Match each linker with its meaning.", [
        ["because", "porque"],
        ["due to", "debido a"],
        ["that's why", "por eso"],
        ["so", "así que"],
      ], "\"Because\" + clause; \"due to\" + noun; \"that's why\" and \"so\" introduce the result."),
      dc("As it was a holiday, all the banks were closed.",
        "\"As\" at the start gives the reason, like «como». Listen for the weak \"as\" at the very beginning."),
      wo("We stayed inside because of the heat.", "Nos quedamos adentro por el calor.",
        "\"Because of\" + noun (\"the heat\")."),
      // Traps: the whole first half combined
      tr("Aunque estudió mucho, no aprobó porque estaba muy nervioso.", "{Although|Even though|Though} he studied {a lot|hard}, he didn't pass because he was {very|really|so} nervous.",
        "Contrast and reason together: \"although\" with no \"but\", and \"because\" + clause (not *because of he was)."),
      mc("Which sentence is correct?", [
        "It was raining, so we stayed in. However, the kids had fun.",
        "Although it was raining, but we stayed in.",
        "Because of it was raining, we stayed in.",
        "Despite of the rain, we stayed in.",
      ], "The first sentence uses \"so\" for the result and \"However,\" to start a new sentence. The others make the three classic mistakes: *although... but, *because of + clause, *despite of."),
      tr("A pesar del precio, mucha gente compra ese celular.", "{Despite|In spite of} the price, {a lot of|many|lots of} people buy that {phone|cell phone|cellphone}.",
        "\"Despite\" + noun, and \"people\" is plural: \"people buy\", never *people buys."),
      wo("Since nobody was home, I left the package at the door.", "Como no había nadie en casa, dejé el paquete en la puerta.",
        "\"Since\" at the start gives the reason; the result follows after the comma."),
      tr("Ana es muy tranquila, mientras que su hermano se enoja por todo.", "Ana is very {easy-going|easygoing|calm|relaxed}, {whereas|while} her brother gets {angry|mad} {about|at|over} everything.",
        "\"Whereas\" compares two people. «Se enoja» is \"gets angry\", not reflexive in English."),
      dc("The rooms were tiny. The view, however, was amazing.",
        "\"However\" in the middle of a sentence always goes between two commas."),
      sp("I was exhausted, but I couldn't sleep because of the noise.", "\"But\" for the contrast, \"because of\" + noun for the reason.",
        "Pause slightly after \"exhausted\".", "Say it in English: «Estaba agotado, pero no pude dormir por el ruido»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Purpose, addition, sequence, emails, essays, stories + unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "So That, Also, In the End",
    "You will be able to express purpose with to, so as not to and so that, add and order ideas, use the key phrases of emails, essays and stories, and combine every linker in the unit.",
    "Recap: purpose, adding ideas and writing phrases",
    [
      "«Para» + verb is \"to\" (or \"in order to\"); «para no» is \"so as not to\"; «para que» is \"so that\" + subject + can/could, never *for that. \"For\" goes with a noun: \"for a coffee\", \"What's it for?\". \"Also\" goes before the main verb, \"too\" / \"as well\" at the end, \"either\" in negatives; \"What's more\" and \"Besides\" start a new sentence.",
      "Formal emails: \"I am writing to...\", \"I would be grateful if you could...\", \"Could you tell me where...is?\", \"I look forward to hearing from you.\" Informal: \"Hi Laura,\", \"Anyway,\", \"Write soon!\". Essays: \"In my opinion\" (never *according to me). Stories: past continuous for the scene, \"After that\" (not *After,) and \"In the end\" for «al final».",
    ],
    [
      ["I went to the pharmacy to buy some aspirin.", "Fui a la farmacia para comprar aspirinas."],
      ["I gave him my number so that he could call me.", "Le di mi número para que pudiera llamarme."],
      ["I don't eat meat either.", "Yo tampoco como carne."],
      ["In the end, we found the keys under the sofa.", "Al final encontramos las llaves debajo del sofá."],
    ],
    [
      fb("I went to the pharmacy ___ some aspirin.", ["to buy", "to get", "in order to buy", "in order to get"], "Fui a la farmacia [para comprar] aspirinas.",
        "«Para» + verb is \"to\" + base form. *For buy and *for to buy are the classic Spanish-speaker mistakes."),
      mc("Which sentence is correct?", [
        "She's learning Japanese to get a job in Tokyo.",
        "She's learning Japanese for get a job in Tokyo.",
        "She's learning Japanese for to get a job in Tokyo.",
        "She's learning Japanese for getting a job in Tokyo.",
      ], "To say why a person does something, use \"to\" + verb. \"For\" + -ing describes what a thing is used for, not a person's purpose."),
      tr("Nos levantamos a las cinco para ver el amanecer.", "We got up at five {|o'clock} {to see|to watch|in order to see|in order to watch} the sunrise.",
        "Purpose with \"to\" + verb. «Levantarse» is \"get up\", not reflexive."),
      fb("I set two alarms ___ oversleep.", ["so as not to", "in order not to"], "Puse dos alarmas [para no] quedarme dormido.",
        "«Para no» is \"so as not to\" or \"in order not to\": \"not\" goes before \"to\". Never *for not oversleep."),
      tr("Te mando la dirección para que no te pierdas.", "I{'ll send|'m sending} you the address so {that |}you {don't|won't} get lost.",
        "«Para que» + a different subject is \"so that\" + subject + verb. English uses the normal present (\"you don't get lost\"), not a subjunctive. Never *for that you don't get lost."),
      fb("I gave him my number so that he ___ call me.", "could", "Le di mi número para que [pudiera] llamarme.",
        "In the past, \"so that\" usually takes \"could\" (or \"would\"): \"so that he could call me\"."),
      tr("Paramos para tomar un café.", "We stopped {for a coffee|for coffee|to have a coffee|to get a coffee|to get coffee}.",
        "\"For\" + noun (\"for a coffee\") or \"to\" + verb (\"to have a coffee\"). Both are correct; *for have a coffee is not."),
      wo("Write it down so that you don't forget it.", "Anótalo para que no se te olvide.",
        "\"So that\" + subject + verb: \"so that you don't forget it\"."),
      fb("She plays the violin. She ___ sings in a choir.", "also", "Toca el violín. [También] canta en un coro.",
        "\"Also\" goes before the main verb: \"She also sings\". At the end you would use \"too\": \"She sings in a choir too\"."),
      mc("Which sentence is correct?", [
        "I also speak Portuguese.",
        "I speak also Portuguese.",
        "I also speak Portuguese too.",
        "Also I speak Portuguese too.",
      ], "\"Also\" before the main verb, and only one «también»: *also... too says it twice."),
      tr("Yo tampoco como carne.", "I don't eat meat either.",
        "«Tampoco» in a negative sentence is \"either\" at the end. *I don't eat meat too is wrong."),
      fb("The hotel is cheap. ___, it's right next to the beach.", ["What's more", "Besides", "In addition", "Moreover", "Also"], "El hotel es barato. [Además], está justo al lado de la playa.",
        "\"What's more,\" adds a new, stronger point at the start of a sentence, with a comma. \"In addition\" and \"Moreover\" are more formal."),
      tr("Además de trabajar, cuida a sus padres.", ["{Besides|As well as|In addition to} working, she {looks after|takes care of} her parents.", "{Besides|As well as|In addition to} working, he {looks after|takes care of} his parents."],
        "«Además de» + verb is \"besides\" / \"as well as\" / \"in addition to\" + -ing. \"Look after\" is «cuidar»."),
      lc("At first I hated the job, but now I love it.", [
        "Al principio odiaba el trabajo, pero ahora me encanta.",
        "Primero odié el trabajo y luego lo dejé.",
        "Por fin dejé el trabajo que odiaba.",
        "Odio el trabajo, pero lo necesito.",
      ], "\"At first\" is «al principio» and shows that things changed later. \"First\" just lists the first step."),
      mt("Match each sequencer with its meaning.", [
        ["first of all", "antes que nada"],
        ["after that", "después"],
        ["finally", "por último"],
        ["at first", "al principio"],
      ], "\"First of all\" opens a list, \"after that\" continues it and \"finally\" closes it. \"At first\" is different: it means «al principio»."),
      dc("First, wash the rice. Then add the water. After that, cook it for twenty minutes.",
        "A list of steps: \"First,\" \"Then\" and \"After that,\" (never just *After,)."),
      mc("Which is the best way to end a formal email?", [
        "I look forward to hearing from you.",
        "Waiting for your answer.",
        "I look forward to hear from you.",
        "Kisses, Ana",
      ], "\"I look forward to hearing from you\" is the standard ending (\"to\" + -ing). \"Waiting for your answer\" sounds impatient."),
      tr("Le escribo para pedir información sobre sus cursos de verano.", "I am writing to {ask for|request} information {about|on} your summer courses.",
        "Formal emails open with \"I am writing to\" + verb: present continuous and \"to\", never *I write you for ask."),
      fb("I would be grateful if you ___ send me the price list.", ["could", "would"], "Le agradecería que me [pudiera] enviar la lista de precios.",
        "\"I would be grateful if you could...\" is a very polite formal request. English uses \"could\", not a subjunctive."),
      tr("¿Podría decirme dónde está la oficina?", "Could you {please |}tell me where the office is?",
        "After \"Could you tell me\", use normal word order: \"where the office is\", not *where is the office."),
      lc("Sorry I haven't written for ages.", [
        "Perdona, hace siglos que no te escribo.",
        "Perdona, no te escribí por la edad.",
        "Perdona, nunca escribo cartas.",
        "Perdona por escribir tan tarde hoy.",
      ], "\"For ages\" means «hace siglos» or «hace mucho»: a friendly, informal way to apologize at the start of an email."),
      tr("Bueno, tengo que irme. ¡Escríbeme pronto!", "Anyway, I {have to|need to|must} go{| now}. Write soon!",
        "\"Anyway,\" (bueno, en fin) is the friendly linker to start finishing an informal email. \"Write soon!\" is a typical closing line."),
      fb("___, public transportation should be free.", ["In my opinion", "In my view", "Personally", "From my point of view"], "[En mi opinión], el transporte público debería ser gratis.",
        "\"In my opinion,\" gives your view. *According to me is wrong: \"according to\" is only for other people."),
      mc("Which sentence is correct?", [
        "According to the experts, sugar is worse than fat.",
        "According to me, sugar is worse than fat.",
        "In my opinion, I think sugar is worse than fat.",
        "I am agree that sugar is worse than fat.",
      ], "\"According to\" is for other people's views. For yours, use \"In my opinion\" OR \"I think\", not both. And \"agree\" never takes \"am\"."),
      fb("We ___ dinner when the lights went out.", ["were having", "were eating"], "[Estábamos cenando] cuando se fue la luz.",
        "Past continuous for the background action, past simple for the event that interrupts it: a classic story opening."),
      tr("Al final encontramos las llaves debajo del sofá.", ["In the end{,|} we found the keys under the {sofa|couch}.", "We found the keys under the {sofa|couch} in the end.", "Finally{,|} we found the keys under the {sofa|couch}."],
        "«Al final» meaning «finalmente» is \"in the end\". \"At the end\" needs \"of\": \"at the end of the movie\"."),
      tr("Después, fuimos a cenar a un restaurante.", "{After that|Afterwards|Then}, we went {to a restaurant for dinner|out for dinner|to have dinner at a restaurant|to eat at a restaurant}.",
        "«Después» alone is \"after that\" or \"afterwards\". *After, we went... is a common mistake."),
      sp("She told me she was exhausted.", "Reported speech: \"told\" + person, and the tense moves back (\"I'm\" becomes \"she was\"). Never *She said me.",
        "Link \"told me\" smoothly.", "Say it in English: «Me dijo que estaba agotada»"),
      // Traps: the whole unit
      tr("Ahorro todos los meses para que mis hijos puedan ir a la universidad.", "I save {|money} every month so {that |}my {kids|children} can go to {college|university}.",
        "«Para que» + another subject = \"so that\" + subject + \"can\". *For that my kids can go is the typical error. \"Go to college\" with no article: it's an institution."),
      tr("Aunque el hotel era caro, no tenía wifi. Además, el desayuno era malo.", "{Although|Even though} the hotel was expensive, it {didn't have|had no} {wifi|Wi-Fi}. {What's more|Besides|In addition|Also}, the breakfast was {bad|terrible}.",
        "\"Although\" with no \"but\", then a new sentence with an addition linker and a comma."),
      mc("Which sentence is correct?", [
        "I don't like it either.",
        "I don't like it too.",
        "I also don't like it too.",
        "I don't like it neither.",
      ], "Negative «tampoco» is \"either\" at the end. \"Neither\" works alone (\"Me neither\") or at the start (\"Neither do I\"), not after a negative verb."),
      dc("I'm writing to complain about the delay, as my package arrived two weeks late.",
        "\"I'm writing to\" + verb, and \"as\" giving the reason. In a fully formal email you'd write \"I am\"."),
      wo("I studied every day so that I could pass the exam.", "Estudiaba todos los días para poder aprobar el examen.",
        "Past purpose with a clause: \"so that I could\"."),
      wo("Besides being cheap, the apartment is near the subway.", "Además de ser barato, el departamento está cerca del metro.",
        "\"Besides\" + -ing at the start, then a comma. Don't confuse it with \"beside\" (al lado de)."),
      dc("Despite the delay, we got there in time to see the start.",
        "\"Despite\" + noun, then \"to\" + verb for the purpose: \"in time to see\"."),
      sp("I am writing to apply for the position of sales assistant.", "The formal opening \"I am writing to\" + verb, with no contraction.",
        "Say \"I am\" in full; it sounds more formal.", "Say it in English: «Le escribo para solicitar el puesto de vendedor»"),
    ],
  ),
];
