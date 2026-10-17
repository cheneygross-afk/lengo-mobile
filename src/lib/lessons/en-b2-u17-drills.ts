// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u17-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u17 (linkers of contrast, purpose, reason and result; punctuation; debating): a short recap, then graded practice.

const SLUG = "en-b2-linkers";

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
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U17_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Contrast (although, despite, however, whereas) and purpose,
  // reason and result (to, so that, because of, due to, so, therefore)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Contrast, Purpose, Reason and Result",
    "You will be able to choose the right linker of contrast, purpose, reason or result and put the right grammar after it.",
    "Recap: the linker decides what comes next",
    [
      "Contrast: \"although\" and \"even though\" + clause; \"despite\" and \"in spite of\" + noun or -ing (never *despite of); \"however\" and \"nevertheless\" start a new sentence; \"whereas\" and \"while\" compare two facts. One linker is enough: no «aunque... pero».",
      "Purpose: «para» + verb is \"to\" (or \"in order to\", \"so as to\"), never *for get; «para que» is \"so that\" + can, could, will or would. Reason: \"because\", \"as\", \"since\" + clause, but \"because of\", \"due to\" + noun. Result: \"so\" inside a sentence, \"therefore\" or \"as a result\" in a new one.",
    ],
    [
      ["Despite the delay, the meeting started on time.", "A pesar del retraso, la reunión empezó a tiempo."],
      ["I took notes so that I wouldn't forget anything.", "Tomé apuntes para no olvidarme de nada."],
      ["The store closed early due to the storm.", "La tienda cerró temprano debido a la tormenta."],
      ["My sister is a morning person, whereas I'm not.", "Mi hermana es madrugadora, mientras que yo no."],
    ],
    [
      fb("___ the hotel was small, the rooms were very clean.", ["Although", "Even though", "Though"], "[Aunque] el hotel era pequeño, las habitaciones estaban muy limpias.",
        "A full clause follows (\"the hotel was small\"), so you need a conjunction: \"although\", \"even though\" or \"though\". *Despite the hotel was small is wrong."),
      fb("___ the heavy traffic, we got to the airport on time.", ["Despite", "In spite of"], "[A pesar del] tráfico intenso, llegamos al aeropuerto a tiempo.",
        "A noun follows (\"the heavy traffic\"), so use the preposition \"despite\" or \"in spite of\". Not *despite of."),
      fb("The job pays well. ___, the hours are very long.", ["However", "Nevertheless", "Even so", "Still"], "El trabajo paga bien. [Sin embargo], el horario es muy largo.",
        "A new sentence after a period: \"However,\" (or \"Nevertheless,\" / \"Even so,\") with a comma."),
      fb("My father loves the beach, ___ my mother prefers the mountains.", ["whereas", "while"], "A mi papá le encanta la playa, [mientras que] mi mamá prefiere la montaña.",
        "Two facts compared side by side: \"whereas\" or \"while\". \"Meanwhile\" is a time word («mientras tanto») and doesn't work here."),
      fb("I'm taking an online course ___ improve my Excel skills.", ["to", "in order to", "so as to"], "Estoy haciendo un curso en línea [para] mejorar mis conocimientos de Excel.",
        "«Para» + verb = \"to\" + verb. *for improve is the classic error."),
      fb("The match was canceled ___ the snow.", ["because of", "due to", "owing to"], "El partido se canceló [por] la nieve.",
        "A noun follows (\"the snow\"), so \"because of\" or \"due to\". \"Because\" alone needs a clause."),
      fb("I'll text you the code ___ you can get into the building.", ["so that", "so"], "Te mandaré el código por mensaje [para que] puedas entrar al edificio.",
        "A different subject (\"you\") with \"can\": \"so that\" + clause. Never *for that."),
      mc("Which sentence is correct?", [
        "Although she was sick, she went to the office.",
        "Although she was sick, but she went to the office.",
        "Despite she was sick, she went to the office.",
        "Despite of being sick, she went to the office.",
      ], "One linker is enough: no \"but\" after \"although\". \"Despite\" needs a noun or -ing, and it never takes \"of\"."),
      mc("Which sentence is correct?", [
        "I went to the bank to ask about a loan.",
        "I went to the bank for ask about a loan.",
        "I went to the bank for to ask about a loan.",
        "I went to the bank for asking about a loan.",
      ], "Purpose before a verb is \"to\" + infinitive. \"For\" is for nouns (\"for a loan\") or for what a thing is used for."),
      tr("Aunque estaba cansado, terminé el informe.", ["{Although|Even though|Though} I was tired, I finished the report.", "I finished the report {although|even though|though} I was tired."],
        "«Aunque» + fact = \"although\" + clause. Don't add \"but\" in the second half."),
      tr("A pesar de la lluvia, fuimos al concierto.", ["{Despite|In spite of} the rain, we went to the concert.", "We went to the concert {despite|in spite of} the rain."],
        "«A pesar de» + noun = \"despite\" / \"in spite of\" + noun, with no \"of\" after \"despite\"."),
      tr("A pesar de no tener mucho dinero, viajaron por toda Europa.", ["{Despite|In spite of} not having much money, they traveled {around|all over|across} Europe.", "{Despite|In spite of} not having a lot of money, they traveled {around|all over|across} Europe."],
        "«A pesar de no» + infinitive = \"despite not\" + -ing. After a preposition the verb takes -ing."),
      tr("Ahorro un poco cada mes para comprarme una computadora nueva.", ["I save a little every month to buy {myself |}a new computer.", "I save a little {every|each} month {in order to|so as to|to} buy {myself |}a new computer."],
        "«Para» + infinitive = \"to\" + verb. Not *for buy."),
      tr("Salimos temprano para no perder el vuelo.", ["We left early so as not to miss the flight.", "We left early {in order not to|so that we wouldn't|so we wouldn't} miss the flight."],
        "«Para no» = \"so as not to\" or \"in order not to\", or \"so that we wouldn't\". \"Miss\" = «perder» a flight or a train."),
      tr("Hablé despacio para que todos me entendieran.", ["I spoke slowly so {that |}everyone could understand me.", "I spoke slowly so {that |}everybody could understand me."],
        "«Para que» + subjunctive = \"so that\" + could (past). English has no subjunctive here."),
      tr("Como era tarde, tomamos un taxi.", ["{As|Since|Because} it was late, we took a taxi.", "It was late, so we took a taxi.", "We took a taxi {because|as|since} it was late."],
        "«Como» giving a reason = \"as\" or \"since\" + clause, usually at the start. Not *like."),
      tr("El vuelo se retrasó debido a un problema técnico.", ["The flight was delayed {due to|because of|owing to} a technical problem.", "The flight was delayed because there was a technical problem."],
        "«Debido a» + noun = \"due to\" + noun. *Due to there was a problem would be wrong."),
      tr("Mi hermano es muy ordenado, mientras que yo soy un desastre.", ["My brother is very {organized|tidy|neat}, {whereas|while} I'm a mess.", "My brother is very {organized|tidy|neat}, {whereas|while} I am a mess."],
        "«Mientras que» comparing two people = \"whereas\" or \"while\", not *meanwhile."),
      wo("We stayed home because of the storm.", "Nos quedamos en casa por la tormenta.",
        "\"Because of\" + noun. Compare \"because there was a storm\" (clause)."),
      wo("I set an alarm so that I wouldn't oversleep.", "Puse una alarma para no quedarme dormido.",
        "\"So that\" + subject + \"wouldn't\" for a negative purpose in the past."),
      wo("The rent went up. As a result, we moved.", "Subió el alquiler. Como resultado, nos mudamos.",
        "\"As a result\" starts a new sentence and is followed by a comma."),
      fb("The printer was broken, ___ I sent the file by email.", "so", "La impresora estaba rota, [así que] mandé el archivo por correo.",
        "\"So\" joins the result to the cause in one sentence, after a comma."),
      fb("Sales dropped by 20%. ___, the company had to cut costs.", ["Therefore", "As a result", "Consequently"], "Las ventas bajaron un 20 %. [Por lo tanto], la empresa tuvo que recortar gastos.",
        "Formal result word at the start of a new sentence: \"Therefore,\", \"As a result,\" or \"Consequently,\"."),
      mc("\"Since you're here, can you help me with this box?\" Here \"since\" means:", [
        "ya que",
        "desde",
        "aunque",
        "para que",
      ], "\"Since\" + clause can give a reason («ya que»). The context shows it is not «desde» (time) here."),
      mc("Which sentence is correct?", [
        "The train was late due to the strike.",
        "The train was late due to there was a strike.",
        "The train was late because the strike.",
        "The train was late for the strike.",
      ], "\"Due to\" + noun. \"Because\" alone needs a clause (\"because there was a strike\"); «por» giving a cause is not \"for\"."),
      lc("Even though the tickets were expensive, we bought them.", ["Aunque las entradas eran caras, las compramos.", "Si las entradas son caras, no las compramos.", "Compramos las entradas porque eran baratas.", "Aunque las entradas sean caras, las compraremos."],
        "\"Even though\" + past fact: the tickets really were expensive, and we still bought them."),
      lc("She works from home so that she can spend more time with her kids.", ["Trabaja desde casa para poder pasar más tiempo con sus hijos.", "Trabaja desde casa porque sus hijos están enfermos.", "Trabaja desde casa, así que pasa poco tiempo con sus hijos.", "Trabajaba en casa mientras sus hijos dormían."],
        "\"So that she can\" = purpose («para poder»), not result."),
      dc("Despite feeling nervous, he gave an excellent presentation.",
        "\"Despite\" + -ing: \"feeling\". Same subject in both halves (he felt nervous, he gave the presentation)."),
      dc("Some people prefer to rent, whereas others want to buy a house.",
        "\"Whereas\" compares two groups. Listen for the comma pause before it."),
      dc("The road was closed. Therefore, we had to take a different route.",
        "\"Therefore\" starts a new sentence after a period, followed by a comma."),
      sp("Although it was raining, we went for a run in the park.",
        "\"Although\" + clause, and no \"but\" in the second half.",
        "Pause slightly after \"raining\", where the comma is."),
      sp("I'm learning English to get a better job.",
        "«Para conseguir» = \"to get\", not *for get.",
        undefined, "Say it in English: «Estoy aprendiendo inglés para conseguir un trabajo mejor.»"),
      tr("Aunque el departamento es pequeño, nos gusta mucho porque está cerca del trabajo.", ["{Although|Even though|Though} the apartment is small, we really like it because it's close to {work|the office}.", "{Although|Even though|Though} the apartment is small, we like it a lot because it's {close|near} to {work|the office}.", "{Although|Even though|Though} the apartment is small, we like it {a lot|very much} because it's near {work|the office}."],
        "Trap mix: \"although\" with no \"but\", and \"because\" + clause for the reason."),
      tr("No fuimos a la playa por el mal tiempo, así que nos quedamos viendo películas.", ["We didn't go to the beach because of the bad weather, so we stayed {in|home|at home} watching movies.", "We didn't go to the beach {due to|because of} the bad weather, so we stayed {in|home|at home} and watched movies."],
        "Trap mix: «por» + noun = \"because of\" (not *for), then \"so\" for the result. Two different relationships, two linkers: that's fine."),
      tr("Te dejé las llaves debajo de la maceta para que pudieras entrar.", ["I left the keys under the {flowerpot|plant pot|pot} {so that|so} you could get in.", "I left {you |}the keys under the {flowerpot|plant pot|pot} {so that|so} you could {get in|come in}."],
        "Trap: different subject (\"you\"), so «para que» = \"so that\" + could. *for that you could is wrong."),
      mc("Which sentence is correct?", [
        "Because the bus was full, we walked.",
        "Because the bus was full, so we walked.",
        "Because of the bus was full, we walked.",
        "Because the bus was full, but we walked.",
      ], "One linker per relationship: \"because\" OR \"so\", not both. \"Because of\" needs a noun (\"because of the crowd\")."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Although / despite / however; even though, even if, even;
  // the classic linker errors
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Although, Despite, Even If",
    "You will be able to say one idea three ways (although, despite, however), choose between even though and even if, place \"even\" correctly and avoid the classic linker errors.",
    "Recap: look to the right, and fact or possibility?",
    [
      "Look at what comes after the linker: a clause after \"although\" or \"even though\"; a noun or -ing after \"despite\" or \"in spite of\" (or \"despite the fact that\" + clause); a new sentence after \"however\" or \"even so\".",
      "«Aunque» + indicative (a fact) is \"even though\"; «aunque» + subjunctive (a possibility) is \"even if\", with the present for the future (never *even if it will) or second-conditional tenses for imaginary cases. \"Even\" alone is «incluso»; \"not even\" is «ni siquiera»; \"even better\" is «aún mejor».",
    ],
    [
      ["Even if you leave now, you'll miss the bus.", "Aunque salgas ahora, vas a perder el autobús."],
      ["Even though I set two alarms, I woke up late.", "Aunque puse dos alarmas, me desperté tarde."],
      ["She didn't even look at me.", "Ni siquiera me miró."],
      ["Despite the fact that he apologized, she was still angry.", "A pesar de que pidió perdón, ella seguía enojada."],
    ],
    [
      fb("___ having a fever, Diego went to the meeting.", ["Despite", "In spite of"], "[A pesar de] tener fiebre, Diego fue a la reunión.",
        "An -ing form follows, so you need a preposition: \"despite\" or \"in spite of\"."),
      fb("___ Diego had a fever, he went to the meeting.", ["Although", "Even though", "Though"], "[Aunque] Diego tenía fiebre, fue a la reunión.",
        "Now a full clause follows (\"Diego had a fever\"), so the linker must be a conjunction."),
      fb("Diego had a fever. ___, he went to the meeting.", ["However", "Even so", "Nevertheless", "Still"], "Diego tenía fiebre. [Aun así], fue a la reunión.",
        "Two separate sentences: \"However,\" or \"Even so,\" at the start of the second."),
      fb("Despite ___ the store was open, nobody was inside.", "the fact that", "A pesar de [que] la tienda estaba abierta, no había nadie adentro.",
        "To put a full clause after \"despite\", add \"the fact that\"."),
      fb("___ it rains tomorrow, the wedding will be outdoors.", "Even if", "[Aunque] llueva mañana, la boda será al aire libre.",
        "«Aunque llueva» is a possibility (we don't know), so \"even if\" + present."),
      fb("___ it's raining, the kids are playing in the yard.", ["Even though", "Although", "Though"], "[Aunque] está lloviendo, los niños están jugando en el patio.",
        "«Aunque está lloviendo» is a fact you can see, so \"even though\"."),
      fb("He didn't ___ say thank you.", "even", "[Ni siquiera] dio las gracias.",
        "«Ni siquiera» = auxiliary + \"not\" + \"even\" + verb: \"didn't even say\"."),
      fb("The new version of the app is ___ slower than the old one.", "even", "La nueva versión de la app es [aún] más lenta que la anterior.",
        "With comparatives, «aún» or «todavía» = \"even\": \"even slower\". Not *more slower."),
      mc("Choose the right linker: \"___ the long wait, the customers were very patient.\"", [
        "Despite",
        "Although",
        "However",
        "Even though",
      ], "\"The long wait\" is a noun phrase, so only the preposition works."),
      mc("Which sentence is correct?", [
        "Even if it snows, the flight will leave on time.",
        "Even if it will snow, the flight will leave on time.",
        "Even it snows, the flight will leave on time.",
        "Even though it will snow, the flight leaves on time.",
      ], "After \"even if\", use the present for the future, as after \"if\". \"Even\" alone can't introduce a clause."),
      mc("Which sentence is correct?", [
        "In spite of being tired, she finished the race.",
        "In spite she was tired, she finished the race.",
        "In spite of she was tired, she finished the race.",
        "Despite of being tired, she finished the race.",
      ], "\"In spite of\" + -ing. It needs \"of\", it can't take a clause, and \"despite\" never takes \"of\"."),
      mc("\"Even though I'm busy, I'll help you.\" What does the speaker mean?", [
        "I am busy, but I'll help you anyway.",
        "I might be busy; it doesn't matter.",
        "I'm not busy, so I'll help you.",
        "I'll help you if I'm not busy.",
      ], "\"Even though\" = a fact: the speaker really is busy. \"Even if\" would mean «aunque esté ocupado» (maybe, maybe not)."),
      tr("Aunque es médico, nunca va al médico.", "{Even though|Although|Though} he's a doctor, he never goes to the doctor.",
        "A fact, so \"even though\" or \"although\". Note \"go to the doctor\" (with \"the\")."),
      tr("Aunque me ofrezcan más dinero, no voy a cambiar de trabajo.", ["Even if they offer me more money, I'm not going to change jobs.", "Even if they offer me more money, I {won't|will not} change jobs."],
        "«Aunque» + subjunctive (a possibility) = \"even if\" + present. Not *even if they will offer. Note plural \"change jobs\"."),
      tr("Aunque tuviera tiempo, no vería esa serie.", ["Even if I had {the |}time, I wouldn't watch that {series|show}.", "Even if I had {the |}time, I would not watch that {series|show}."],
        "Imaginary situation: \"even if\" + past simple, then \"would\", as in the second conditional."),
      tr("No lo haría ni aunque me pagaran.", ["I wouldn't do it even if they paid me.", "I would not do it even if they paid me.", "I wouldn't do it even if you paid me."],
        "«Ni aunque» = \"not even if\": put the negative on the main verb and \"even if\" + past simple after it."),
      tr("Hasta mi abuelo tiene celular.", ["Even my grandfather has a {cell phone|cellphone|mobile phone|phone}.", "Even my grandpa has a {cell phone|cellphone|mobile phone|phone}."],
        "«Hasta» meaning «incluso» = \"even\", right before the word it focuses on."),
      tr("Ni siquiera sabía su nombre.", ["I didn't even know {his|her|their} name.", "{He|She} didn't even know {his|her|their} name."],
        "«Ni siquiera» = \"didn't even\" + base verb. The auxiliary carries the past."),
      tr("A pesar de que el examen era difícil, todos aprobaron.", ["Despite the fact that the exam was {difficult|hard}, everyone passed.", "{Although|Even though} the exam was {difficult|hard}, everyone passed.", "Despite the fact that the exam was {difficult|hard}, everybody passed.", "{Although|Even though} the exam was {difficult|hard}, everybody passed."],
        "«A pesar de que» + clause = \"despite the fact that\" or simply \"although\". Not *despite the exam was."),
      tr("No vinimos por el tráfico.", ["We didn't come because of the traffic.", "We didn't come {due to|owing to} the traffic."],
        "«Por» giving a cause = \"because of\" + noun, not *for the traffic."),
      tr("Bajé la música para no despertar a los vecinos.", ["I turned down the music so as not to wake {up |}the neighbors.", "I turned the music down {so as not to|in order not to} wake {up |}the neighbors.", "I turned {down the music|the music down} so {that |}I wouldn't wake {up |}the neighbors.", "I turned down the music in order not to wake {up |}the neighbors."],
        "«Para no» = \"so as not to\" / \"in order not to\". Not *for not wake."),
      wo("Even if you call him, he won't answer.", "Aunque lo llames, no va a contestar.",
        "\"Even if\" + present (\"you call\") for a possibility, then \"won't\" in the main clause."),
      wo("Not even my best friend knew about it.", "Ni siquiera mi mejor amigo lo sabía.",
        "At the start of a sentence, «ni siquiera» = \"Not even\" + subject."),
      wo("She can even play the piano with her eyes closed.", "Hasta sabe tocar el piano con los ojos cerrados.",
        "\"Even\" goes after the modal \"can\" and before the main verb."),
      mt("Match each sentence with its meaning.", [
        ["Even though it's cold, I'll go out.", "Aunque hace frío, saldré."],
        ["Even if it's cold, I'll go out.", "Aunque haga frío, saldré."],
        ["Even if it were cold, I'd go out.", "Aunque hiciera frío, saldría."],
        ["It's cold. Even so, I'll go out.", "Hace frío. Aun así, saldré."],
      ], "\"Even though\" = fact (indicative); \"even if\" + present = real possibility; \"even if\" + past = imagined; \"even so\" starts a new sentence."),
      lc("Even if you don't agree, please listen to her.", ["Aunque no estés de acuerdo, escúchala, por favor.", "Aunque no estás de acuerdo, la escuchaste.", "Si no estás de acuerdo, no la escuches.", "Ni siquiera la escuchaste."],
        "\"Even if\" = «aunque» + subjunctive: we don't know if you agree."),
      lc("He didn't even say goodbye before he left.", ["Ni siquiera se despidió antes de irse.", "Incluso se despidió antes de irse.", "Se despidió aunque se iba.", "No se fue sin despedirse."],
        "\"Didn't even\" = «ni siquiera»."),
      dc("Even though she lives next door, I hardly ever see her.",
        "\"Even though\" is two words. \"Hardly ever\" = «casi nunca»."),
      dc("In spite of the bad reviews, the movie was a huge success.",
        "\"In spite of\" + noun phrase. Three words: in, spite, of."),
      dc("I wouldn't sell this car even if you offered me twice the price.",
        "«Ni aunque» = \"wouldn't... even if\" + past simple for an imaginary case."),
      sp("Even if it rains, we'll have the party in the garden.",
        "«Aunque llueva» = \"even if it rains\" (present, not *will rain).",
        undefined, "Say it in English: «Aunque llueva, haremos la fiesta en el jardín.»"),
      sp("Despite the fact that he's very young, he runs his own company.",
        "\"Despite the fact that\" lets you keep a full clause after \"despite\".",
        "Link \"fact that\" smoothly: FACT-that."),
      tr("Aunque se esforzó mucho, no consiguió el trabajo.", ["{Although|Even though|Though} he tried {very hard|really hard|hard}, he didn't get the job.", "{Although|Even though|Though} she tried {very hard|really hard|hard}, she didn't get the job.", "{Despite|In spite of} trying {very hard|really hard|hard}, {he|she} didn't get the job."],
        "Trap: *Although he tried hard, but he didn't get the job. One linker is enough."),
      tr("Aunque llegues tarde, llámame.", ["Even if you {arrive|get here|get there|are} late, call me.", "Call me even if you {arrive|get here|get there|are} late."],
        "Trap: «aunque» + subjunctive is a possibility, so \"even if\" + present, not \"even though\"."),
      mc("Which sentence is correct?", [
        "Due to the heavy rain, the road was closed.",
        "Due to it was raining heavily, the road was closed.",
        "Despite of the rain, the road was open.",
        "Although the heavy rain, the road was open.",
      ], "Prepositions (\"due to\", \"despite\") + noun; conjunctions (\"although\", \"because\") + clause. Never *despite of."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Transforming linkers, punctuation, debating, linkers with
  // clauses; whole-unit mix
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Transform, Punctuate, Debate",
    "You will be able to rewrite an idea with a different linker, punctuate linkers correctly, agree and disagree politely, and combine linkers with -ing, relative clauses and in case.",
    "Recap: same idea, new grammar",
    [
      "To transform: \"although\" + clause → \"despite\" + -ing or noun (\"despite being ill\", \"despite the cold\"); \"so that I could\" → \"in order to\" / \"so as to\" when the subject is the same; \"because\" + clause → \"because of\" / \"due to\" + noun; \"so\" → \"As a result,\" or \"Therefore,\" in a new sentence.",
      "\"However\" and \"therefore\" need a period or semicolon before them; two sentences joined only by a comma (a comma splice) are wrong. To debate: \"I agree\" (never *I am agree), \"I see your point, but...\", \"Having said that,...\", \"I'm not sure I agree\". \"In case\" + present = «por si».",
    ],
    [
      ["Despite never having cooked before, he made a great dinner.", "A pesar de no haber cocinado nunca, hizo una cena estupenda."],
      ["The museum was closed; however, the gardens were open.", "El museo estaba cerrado; sin embargo, los jardines estaban abiertos."],
      ["I see your point, but I'm not convinced.", "Entiendo lo que dices, pero no me convence."],
      ["Bring a jacket in case it gets cold.", "Trae una chaqueta por si hace frío."],
    ],
    [
      fb("Although he was injured, he played the whole game. → Despite ___ injured, he played the whole game.", "being", "A pesar de [estar] lesionado, jugó todo el partido.",
        "Same subject, so \"although he was\" becomes \"despite being\"."),
      fb("Although it was very hot, we walked to the beach. → Despite ___, we walked to the beach.", ["the heat", "the hot weather"], "A pesar [del calor], fuimos caminando a la playa.",
        "A ready-made noun: \"it was hot\" → \"the heat\"."),
      fb("Although she had never flown before, she wasn't nervous. → Despite never ___ flown before, she wasn't nervous.", "having", "A pesar de no [haber] volado nunca, no estaba nerviosa.",
        "-ing has no tense, so the past perfect becomes \"having\" + participle: \"never having flown\"."),
      fb("I left early so that I could avoid the traffic. → I left early ___ avoid the traffic.", ["in order to", "so as to", "to"], "Salí temprano [para] evitar el tráfico.",
        "Same subject (I... I), so \"so that I could\" can become \"in order to\" or \"so as to\"."),
      fb("The concert was canceled because the singer was sick. → The concert was canceled because of the singer's ___.", "illness", "El concierto se canceló por la [enfermedad] del cantante.",
        "\"Because of\" needs a noun: \"was sick\" → \"illness\"."),
      fb("Bring your passport ___ they ask for ID.", "in case", "Trae el pasaporte [por si] te piden una identificación.",
        "«Por si» = \"in case\" + present: you bring it now to be ready. \"If\" would mean you only bring it when they ask."),
      fb("She left the room without ___ a word.", "saying", "Salió de la habitación sin [decir] una palabra.",
        "After a preposition like \"without\", English uses -ing. Not *without to say."),
      mc("Which version is correctly punctuated?", [
        "The hotel was full; however, they found us a room.",
        "The hotel was full, however they found us a room.",
        "The hotel was full however, they found us a room.",
        "The hotel was full, however, they found us a room.",
      ], "\"However\" links two sentences, so it needs a semicolon or a period before it and a comma after it."),
      mc("Which sentence is a comma splice?", [
        "My phone died, I couldn't call you.",
        "My phone died, so I couldn't call you.",
        "My phone died. I couldn't call you.",
        "My phone died; I couldn't call you.",
      ], "Two full sentences joined only by a comma = comma splice. Fix it with a period, a semicolon or \"so\"."),
      mc("Which sentence is correctly punctuated?", [
        "Although the test was long, it wasn't difficult.",
        "Although, the test was long, it wasn't difficult.",
        "Although the test was long it, wasn't difficult.",
        "The test was long, although, it wasn't difficult.",
      ], "Comma after the whole \"although\" clause, never right after \"although\"."),
      mc("Your colleague says: \"Remote work is great for everyone.\" You partly agree. What do you say?", [
        "You have a point. Having said that, it can feel lonely.",
        "I am agree, but it can feel lonely.",
        "You're wrong. It's lonely.",
        "Actually, I'm agree with you.",
      ], "Concede first (\"You have a point\"), then object with \"Having said that\". *I am agree is a classic error: \"agree\" is a verb."),
      mt("Match each debating phrase with its meaning.", [
        ["Having said that,", "Dicho esto,"],
        ["To be fair,", "Para ser justos,"],
        ["Admittedly,", "Hay que reconocer que"],
        ["I'm not so sure about that.", "Yo no estaría tan seguro de eso."],
        ["Actually,", "En realidad,"],
      ], "\"Actually\" = «en realidad», not «actualmente» (\"currently\")."),
      tr("Estoy totalmente de acuerdo contigo.", ["I completely agree with you.", "I totally agree with you.", "I agree with you completely.", "I agree with you {totally|one hundred percent|100%}."],
        "«Estoy de acuerdo» = \"I agree\". \"Agree\" is a verb, so no \"am\"."),
      tr("Entiendo lo que dices, pero yo diría que es más complicado.", ["I see what you mean, but I'd say it's more complicated.", "I see your point, but I'd say it's more complicated.", "I {see|understand} what you're saying, but I'd say it's more complicated.", "I understand what you mean, but I'd say it's more complicated."],
        "Soften disagreement: \"I see what you mean, but...\" + \"I'd say...\"."),
      tr("Es caro. Aun así, creo que vale la pena.", ["It's expensive. Even so, I think it's worth it.", "It's expensive. Still, I think it's worth it.", "It's expensive. {Having said that|That said|Nevertheless|However}, I think it's worth it."],
        "«Aun así» = \"Even so\" or \"Still\", at the start of the second sentence."),
      tr("Actualmente trabajo desde casa.", ["I'm currently working from home.", "I currently work from home.", "At the moment, I'm working from home.", "At the moment I work from home.", "Right now I'm working from home.", "I'm working from home at the moment."],
        "False friend: «actualmente» = \"currently\" or \"at the moment\". \"Actually\" means «en realidad»."),
      tr("No sé si estoy de acuerdo.", ["I'm not sure I agree.", "I'm not sure {if|whether} I agree.", "I don't know if I agree."],
        "Soft disagreement: \"I'm not sure I agree\". Not *I'm not sure if I am agree."),
      tr("Las ventas cayeron. Como resultado, la empresa cerró dos tiendas.", ["Sales fell. As a result, the company closed two {stores|shops}.", "Sales {fell|dropped|went down}. {As a result|Consequently|Therefore}, the company closed two {stores|shops}."],
        "\"As a result\" in a new sentence, followed by a comma."),
      tr("Además de trabajar, estudia por las noches.", ["In addition to working, {he|she} studies at night.", "{Besides|Apart from} working, {he|she} studies at night.", "In addition to working, {he|she} studies in the evenings."],
        "«Además de» + verb = \"in addition to\" / \"besides\" + -ing. Not *in addition of work."),
      tr("Llévate algo de comer por si te da hambre en el viaje.", ["Take something to eat in case you get hungry on the {trip|journey}.", "Take something to eat in case you get hungry {during the trip|on the way}.", "Bring something to eat in case you get hungry on the {trip|journey}."],
        "«Por si» = \"in case\" + present (\"you get\"), not *in case you will get."),
      tr("Reprobó el examen, lo cual sorprendió a todos.", ["{He|She} failed the exam, which surprised everyone.", "{He|She} failed the {exam|test}, which surprised everybody."],
        "«Lo cual» referring to a whole idea = \", which\". Not *what surprised everyone."),
      wo("Having finished the report, she went home.", "Después de terminar el informe, se fue a casa.",
        "A perfect participle clause: \"Having finished\" = «después de terminar», same subject in both halves."),
      wo("I see your point, but I'm not convinced.", "Entiendo lo que dices, pero no me convence.",
        "Concede, then disagree with \"but\"."),
      wo("Instead of complaining, we should look for a solution.", "En lugar de quejarnos, deberíamos buscar una solución.",
        "\"Instead of\" + -ing."),
      lc("Admittedly, the plan is risky. Still, I think we should try.", ["Hay que reconocer que el plan es arriesgado. Aun así, creo que deberíamos intentarlo.", "El plan es arriesgado, así que no deberíamos intentarlo.", "El plan sigue siendo arriesgado, pero ya lo intentamos.", "En realidad, el plan no es arriesgado."],
        "\"Admittedly\" concedes a point; \"Still\" = «aun así» introduces the objection."),
      lc("To be fair, he did apologize the next day.", ["Para ser justos, sí que pidió perdón al día siguiente.", "Fue justo que pidiera perdón al día siguiente.", "Al final no pidió perdón.", "Pidió perdón para ser justo."],
        "\"To be fair\" introduces a point in favor of the other side; \"did apologize\" stresses that he really did."),
      dc("The apartment is in a great location; moreover, the rent is reasonable.",
        "\"Moreover\" is a sentence linker: semicolon before, comma after."),
      dc("Not knowing anyone at the party, I left after an hour.",
        "\"Not knowing\" = «como no conocía»: a participle clause with the same subject."),
      sp("I see what you mean, but I'm not sure I agree.",
        "Polite disagreement, and \"I agree\" with no \"am\".",
        "Stress \"see\" and \"sure\"; keep \"but\" short."),
      sp("It's true that cars are convenient. Having said that, they pollute a lot.",
        "Concede with \"It's true that...\", then object with \"Having said that\".",
        undefined, "Say it in English: «Es verdad que los carros son cómodos. Dicho esto, contaminan mucho.»"),
      tr("Aunque el curso, que es en línea, es barato, muy poca gente se inscribe.", ["{Although|Even though} the course, which is online, is cheap, very few people sign up.", "{Although|Even though} the course, which is online, is cheap, very few people {enroll|register|enrol}."],
        "Trap mix: a non-defining relative clause between commas inside an \"although\" clause, and no \"but\" in the main clause."),
      tr("A pesar de que no tenía experiencia, la contrataron porque hablaba tres idiomas.", ["{Despite the fact that|Although|Even though} she had no experience, they hired her because she spoke three languages.", "{Despite|In spite of} having no experience, she was hired because she spoke three languages.", "{Despite the fact that|Although|Even though} she didn't have any experience, they hired her because she spoke three languages."],
        "Trap mix: «a pesar de que» + clause = \"despite the fact that\" or \"although\", and \"because\" + clause for the reason."),
      tr("Te mando el enlace para que puedas conectarte a la reunión.", ["I'll send you the link so {that |}you can {join|connect to} the meeting.", "I'm sending you the link so {that |}you can {join|connect to} the meeting."],
        "Trap: «para que» = \"so that\" + can, not *for that you can."),
      mc("Which sentence is correct?", [
        "Despite the fact that it was late, we kept working, so we finished on time.",
        "Despite it was late, we kept working, so we finished on time.",
        "Although it was late, but we kept working, so we finished on time.",
        "Despite of the late hour, we kept working, so we finished on time.",
      ], "\"Despite the fact that\" + clause; never *despite + clause, *although... but or *despite of."),
      mc("Which sentence is correct?", [
        "Prices went up. Therefore, fewer people traveled.",
        "Prices went up, therefore fewer people traveled.",
        "Because prices went up, so fewer people traveled.",
        "Due to prices went up, fewer people traveled.",
      ], "\"Therefore\" starts a new sentence (period + comma). One linker per relationship, and \"due to\" needs a noun."),
    ],
  ),
];
