// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u09-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u09 (the third conditional, wish, if only and hope): a short recap, then graded practice.

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



export const EN_B1_U09_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Third conditional; wish + past, could, would; wish + past perfect
  // ---------------------------------------------------------------------
  lesson(
    1,
    "third-conditional-wish",
    "If I Had Known..., I Wish I Had...",
    "You will be able to imagine a different past with the third conditional, say what you want to be different now with I wish and If only, and express past regrets with I wish I had.",
    "Recap: one step back in time",
    [
      "The third conditional imagines the opposite of what happened: \"if\" + \"had\" + participle, then \"would have\" (or \"could have\", \"might have\") + participle. Spanish «si hubiera sabido, habría venido» is \"If I had known, I would have come\", with no \"would\" in the if part.",
      "\"Wish\" moves the verb one step back: past simple for a different present (\"I wish I had more time\"), \"could\" for abilities, \"would\" for other people's annoying habits, and past perfect for regrets (\"I wish I had studied\"). Never *I wish I have or *I wish I would have.",
    ],
    [
      ["If we had left earlier, we would have seen the sunset.", "Si hubiéramos salido antes, habríamos visto el atardecer."],
      ["I wish I lived closer to my parents.", "Ojalá viviera más cerca de mis papás."],
      ["I wish you would answer your phone.", "Ojalá contestaras el teléfono."],
      ["I wish I hadn't bought these shoes.", "Ojalá no hubiera comprado estos zapatos."],
    ],
    [
      // --- third conditional: form
      fb("If I ___ about the traffic, I would have left earlier.", "had known", "Si [hubiera sabido] lo del tráfico, habría salido antes.",
        "The if part takes the past perfect: \"had\" + participle (\"known\"). Never *If I would have known, even though «hubiera» sounds conditional."),
      fb("If you had told me, I ___ you to the airport.", ["would have taken", "would have driven"], "Si me lo hubieras dicho, [te habría llevado] al aeropuerto.",
        "The result takes \"would have\" + participle: \"would have taken\". \"Have\" never changes: never *would has or *would had."),
      mc("Which sentence is correct?", [
        "If I had seen the message, I would have answered.",
        "If I would have seen the message, I would have answered.",
        "If I saw the message before, I would have answered.",
        "If I had saw the message, I would have answered.",
      ], "\"Had\" + participle (\"seen\") after \"if\". *If I would have seen puts \"would\" in the wrong half, \"If I saw\" is the second conditional (present), and \"saw\" is the past simple, not the participle."),
      tr("Si hubiéramos reservado antes, habríamos conseguido una mesa.", [
        "If we had {booked|reserved|made a reservation} {earlier|sooner}, we would have {gotten|got} a table.",
        "We would have {gotten|got} a table if we had {booked|reserved|made a reservation} {earlier|sooner}.",
      ], "If part: \"had booked\"; result: \"would have gotten\" (American participle; British \"got\"). Both parts are about a past that didn't happen."),
      tr("Si no hubiera llovido, habríamos jugado fútbol.", [
        "If it hadn't rained, we would have played {soccer|football}.",
        "We would have played {soccer|football} if it hadn't rained.",
      ], "Negative if part: \"hadn't\" + participle. The real story is the opposite: it rained, so we didn't play."),
      wo("We would have arrived on time if we had taken the highway.", "Habríamos llegado a tiempo si hubiéramos tomado la autopista.",
        "When the result comes first there is no comma. \"Taken\" is the participle of \"take\"."),
      lc("If I'd known, I'd have called you.", [
        "Si lo hubiera sabido, te habría llamado.",
        "Si lo supiera, te llamaría.",
        "Lo sabía y te llamé.",
        "Si lo sé, te llamo.",
      ], "Both 'd sound the same, but the next word tells you which is which: 'd + participle (\"I'd known\") = \"had\"; 'd + \"have\" (\"I'd have called\") = \"would\"."),
      // --- could have, might have, negatives, questions, would've
      fb("If you had asked me, I ___ you with the move.", "could have helped", "Si me lo hubieras pedido, [te habría podido ayudar] con la mudanza.",
        "\"Could have\" + participle = it would have been possible. Like \"would\", \"could\" is followed by \"have\" + participle, never *could helped."),
      fb("If we had left at seven, we ___ the early train.", "might have caught", "Si hubiéramos salido a las siete, [quizás habríamos alcanzado] el tren temprano.",
        "«Quizás habríamos» = \"might have\" + participle: we are not sure. \"Caught\" is the participle of \"catch\"."),
      tr("Si no me hubieras despertado, no habría llegado a la entrevista.", [
        "If you hadn't woken me up, I wouldn't have {made it to|gotten to|got to} the interview.",
        "If you hadn't woken me, I wouldn't have {made it to|gotten to|got to} the interview.",
      ], "Both halves negative: \"hadn't woken\" + \"wouldn't have made it\". The participle of \"wake\" is \"woken\"; *hadn't woke is a common slip."),
      mc("\"If I hadn't missed the bus, I wouldn't have been late.\" What really happened?", [
        "I missed the bus and I was late.",
        "I didn't miss the bus and I wasn't late.",
        "I missed the bus, but I wasn't late.",
        "I didn't miss the bus, but I was late.",
      ], "The third conditional reverses the facts: negative in the sentence = positive in reality. I missed the bus, so I was late."),
      fb("What ___ if the bank had said no?", "would you have done", "¿Qué [habrías hecho] si el banco hubiera dicho que no?",
        "Questions put \"would\" before the subject: \"What would you have done?\". The if part keeps \"had\" + participle."),
      tr("¿Habrías aceptado el trabajo si te hubieran pagado más?", [
        "Would you have {accepted|taken} the job if they had paid you more?",
      ], "Yes/no question: \"Would you have\" + participle. Never *if they would have paid you."),
      mc("Which sentence is correct?", [
        "I would have gone, but nobody told me.",
        "I would of gone, but nobody told me.",
        "I would have went, but nobody told me.",
        "I would had gone, but nobody told me.",
      ], "\"Would've\" sounds like *would of, but \"of\" is never part of a verb. After \"would have\" use the participle \"gone\", not the past \"went\"."),
      dc("She could've won the race if she hadn't fallen.",
        "\"Could've\" = \"could have\" (said \"COOD-uv\"). Write \"could've\" or \"could have\", never *could of. \"Fallen\" is the participle of \"fall\"."),
      // --- wish + past simple, were, if only
      fb("I wish I ___ closer to my office.", "lived", "Ojalá [viviera] más cerca de mi oficina.",
        "\"Wish\" + past simple for a present you want to be different. «Ojalá viviera» = \"I wish I lived\", never *I wish I live."),
      tr("Ojalá no tuviera tanta tarea.", "I wish I didn't have so much homework.",
        "Present wish, negative: \"I wish I didn't have\". \"Homework\" is uncountable: \"so much homework\", not *so many homeworks."),
      wo("I wish my sister were here with us.", "Ojalá mi hermana estuviera aquí con nosotros.",
        "With \"be\", careful English uses \"were\" for every person after \"wish\": \"I wish my sister were here\". \"Was\" is common in speech."),
      tr("¡Si tan solo tuviéramos más tiempo!", "If only we had more time!",
        "\"If only\" is a stronger, more emotional \"I wish\", with the same grammar: past simple for the present."),
      mc("How do you say «Ojalá hablara alemán»?", [
        "I wish I spoke German.",
        "Hopefully I speak German.",
        "I wish I speak German.",
        "I hope I spoke German.",
      ], "«Ojalá» + imperfect subjunctive («hablara») = not real now, so \"I wish\" + past simple. \"Hopefully\" is only for things that are possible."),
      // --- wish + could, wish + would, hope
      fb("I wish I ___ swim. Everyone is in the pool except me.", "could", "Ojalá [supiera] nadar. Todos están en la piscina menos yo.",
        "For an ability you don't have: \"I wish I could\" + base form. Never *I wish I can, and never *I wish I would swim for yourself."),
      tr("Ojalá mi compañero de cuarto no dejara los platos sucios en el fregadero.",
        "I wish my roommate wouldn't leave {the |}dirty dishes in the sink.",
        "Another person's annoying habit: \"I wish\" + person + \"would\" / \"wouldn't\" + base form. «Compañero de cuarto» is \"roommate\"."),
      mc("Your friend has applied for a scholarship. What do you say?", [
        "I hope you get the scholarship.",
        "I wish you get the scholarship.",
        "I wish you got the scholarship.",
        "Hopefully you got the scholarship tomorrow.",
      ], "It's possible, so \"hope\" + present: \"I hope you get it\". \"I wish you got it\" would mean you think it won't happen, and *I wish you get mixes the two."),
      wo("I wish I could stay longer, but I have to go.", "Ojalá pudiera quedarme más tiempo, pero me tengo que ir.",
        "\"I wish I could\" + base form for something you can't do. «Más tiempo» here is \"longer\"."),
      sp("I wish I could play the guitar.",
        "An ability you don't have: \"I wish I could\" + base form. Instruments take \"the\": \"play the guitar\".",
        "Stress \"wish\" and \"guitar\" (gi-TAR, stress on the second syllable).",
        "Say it in English: «Ojalá supiera tocar la guitarra.»"),
      // --- wish + past perfect, if only + past perfect
      fb("I wish I ___ more money when I was younger.", "had saved", "Ojalá [hubiera ahorrado] más dinero de joven.",
        "A past regret: \"I wish\" + past perfect (\"had saved\"). Not *I wish I saved (that would be present) or *I wish I would have saved."),
      tr("Ojalá no hubiera comido tanto en la cena.", "I wish I hadn't eaten so much {at|for} dinner.",
        "Regret about something you did: \"I wish I hadn't\" + participle. \"Eaten\" is the participle of \"eat\"."),
      tr("¡Si tan solo hubiera revisado el pronóstico del tiempo!", "If only I had checked the {weather forecast|forecast|weather}!",
        "\"If only\" + past perfect for an emotional regret about the past: I didn't check it, and now I'm sorry."),
      mc("Which sentence is a regret about the past?", [
        "I wish I had had more free time last year.",
        "I wish I had more free time.",
        "I wish I could have more free time.",
        "I wish I have more free time.",
      ], "\"Had had\" = past perfect of \"have\": a regret about last year. \"I wish I had more free time\" is about now, and *I wish I have is never correct."),
      mt("Match each wish with its meaning.", [
        ["I wish I knew her name.", "Ojalá supiera cómo se llama."],
        ["I wish I had known her name.", "Ojalá hubiera sabido cómo se llamaba."],
        ["I wish I were at home.", "Ojalá estuviera en casa."],
        ["I wish I had been at home.", "Ojalá hubiera estado en casa."],
        ["I wish you would call more often.", "A ver si me llamas más seguido."],
      ], "Past simple (\"knew\", \"were\") = now; past perfect (\"had known\", \"had been\") = then; \"would\" = another person's behavior you want to change."),
      // --- final mix and traps
      tr("Si hubiera sabido que estabas en el hospital, habría ido a verte.",
        "If I had known {that |}you were in {the |}hospital, I would have {gone to see you|come to see you|visited you}.",
        "Third conditional: \"had known\" + \"would have gone\". Inside the if part, «estabas» stays past simple: \"you were in the hospital\"."),
      fb("If we hadn't gotten lost, we ___ the start of the concert.", ["wouldn't have missed", "would not have missed"], "Si no nos hubiéramos perdido, [no nos habríamos perdido] el inicio del concierto.",
        "Spanish uses «perder(se)» for both ideas, but English has two verbs: \"get lost\" (not find your way) and \"miss\" (not be there for something)."),
      dc("I wish I hadn't sold my old guitar.",
        "Regret: \"I wish I hadn't\" + participle. \"Sold\" is both the past and the participle of \"sell\"."),
      dc("If he had studied harder, he could have gotten into that university.",
        "\"Could have\" + participle in the result: it would have been possible. \"Get into\" a university = be accepted."),
      lc("I wish I'd had a car last summer.", [
        "Ojalá hubiera tenido carro el verano pasado.",
        "Ojalá tuviera carro este verano.",
        "Tuve carro el verano pasado.",
        "Espero tener carro el próximo verano.",
      ], "\"I'd had\" = \"I had had\": past perfect, a regret about last summer. Compare \"I wish I had a car\" (now)."),
      sp("I wish I had gone to bed earlier last night.",
        "\"Last night\" is the past, so \"wish\" + past perfect: \"had gone\". Never *I wish I went to bed earlier last night.",
        "Contract it naturally: \"I wish I'd gone\", with a light 'd.",
        "Say it in English: «Ojalá me hubiera acostado más temprano anoche.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Hope vs wish, error hunt, regret chains, education words + the whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "third-conditional-wish",
    "Hope, Wish and Regrets",
    "You will be able to choose between hope and wish, fix the unit's classic errors, link past events with third conditional chains, and talk about your studies with degree, major, take, pass, fail, grade and notes.",
    "Recap: one «ojalá», three English answers",
    [
      "Let the Spanish tense guide you: «ojalá» + present subjunctive (possible) = \"I hope\" + present; «ojalá» + imperfect subjunctive (not real now) = \"I wish\" + past; «ojalá» + pluperfect (past regret) = \"I wish\" + past perfect. \"Hope\" can also look back: \"I hope you had a good trip\" (after the trip).",
      "To build a chain of regrets, reverse each fact: \"He overslept\" becomes \"If he hadn't overslept...\". And for studies, remember the false friends: «carrera» is a \"degree\" or \"major\", «aprobar» is \"pass\", and «apuntes» are \"notes\".",
    ],
    [
      ["I hope the store is still open.", "Ojalá la tienda siga abierta."],
      ["I wish I had a quieter office.", "Ojalá tuviera una oficina más tranquila."],
      ["If she hadn't missed the class, she would have understood the topic.", "Si no hubiera faltado a clase, habría entendido el tema."],
      ["I passed all my exams this semester.", "Aprobé todos los exámenes este semestre."],
    ],
    [
      // --- hope vs wish
      fb("I ___ it doesn't rain on Saturday. We're having a barbecue.", "hope", "[Ojalá] no llueva el sábado. Vamos a hacer una carne asada.",
        "«Ojalá no llueva» (present subjunctive) is possible, so \"hope\" + present: \"I hope it doesn't rain\". Never *I wish it doesn't rain."),
      fb("I ___ it wasn't so hot today. I can't sleep.", "wish", "[Ojalá] no hiciera tanto calor hoy. No puedo dormir.",
        "It is hot right now, so wanting the opposite is unreal: \"wish\" + past: \"I wish it wasn't so hot\" («ojalá no hiciera»)."),
      mc("\"Are you coming to the party?\" \"___ My exam finishes at six.\"", ["I hope so.", "I hope yes.", "I wish so.", "I hope it."],
        "«Espero que sí» is \"I hope so\" and «espero que no» is \"I hope not\". Never *I hope yes."),
      tr("Ojalá venga mi abuela a la graduación.", [
        "I hope my {grandma|grandmother} {comes|will come} to {the|my} graduation.",
        "Hopefully my {grandma|grandmother} will come to {the|my} graduation.",
      ], "«Ojalá venga» is possible: \"I hope\" + present (or \"will\"). \"Hopefully\" also works here because it is possible."),
      tr("Ojalá mi abuela estuviera aquí.", "I wish my {grandma|grandmother} {were|was} here.",
        "«Ojalá estuviera» is not real now, so \"I wish\" + past. \"Hopefully my grandma were here\" makes no sense."),
      tr("Espero que hayas tenido un buen fin de semana.", "I hope you had a {good|nice|great} weekend.",
        "\"Hope\" about the past when you don't know what happened: \"I hope you had...\". Spanish uses the perfect subjunctive, English the past simple."),
      mc("Which sentence is correct?", [
        "I hope you have a good flight tomorrow.",
        "I hope you had a good flight tomorrow.",
        "I wish you have a good flight tomorrow.",
        "I wish you had a good flight tomorrow.",
      ], "\"Tomorrow\" is the future, so \"hope\" + present: \"I hope you have\". \"Had\" only works after the flight, and \"wish\" is not for possible things."),
      mt("Match each sentence with its meaning.", [
        ["I hope they pass.", "Ojalá aprueben."],
        ["I wish they knew.", "Ojalá lo supieran."],
        ["I wish they had come.", "Ojalá hubieran venido."],
        ["I wish they would stop shouting.", "A ver si dejan de gritar."],
        ["I hope I didn't bother you.", "Espero no haberte molestado."],
      ], "\"Hope\" + a real tense (possible things, now, future or past); \"wish\" + past (not real now), + past perfect (regret), + \"would\" (other people's behavior)."),
      // --- error hunt
      mc("Which sentence is correct?", [
        "I wish I had a bigger car.",
        "I wish I would have a bigger car.",
        "I wish I have a bigger car.",
        "I wish I would had a bigger car.",
      ], "A present wish about yourself takes the past simple: \"I wish I had\". \"Would\" after \"wish\" is only for other people's behavior."),
      fb("If I ___ the instructions, I wouldn't have broken the printer.", "had read", "Si [hubiera leído] las instrucciones, no habría roto la impresora.",
        "\"Had\" + participle in the if part: \"had read\" (pronounced \"red\"). *If I would have read is the classic mistake."),
      mc("Which is the correct written form?", [
        "You could have told me!",
        "You could of told me!",
        "You could has told me!",
        "You could have tell me!",
      ], "\"Could've\" sounds like *could of, but in writing it is \"could have\" + participle (\"told\"). \"Have\" never becomes \"has\" after a modal."),
      tr("Ojalá no hubiera gastado tanto dinero en las vacaciones.", "I wish I hadn't spent so much money on {the|my} {vacation|vacations|holiday}.",
        "Past regret: \"I wish I hadn't\" + participle. Remember \"spend money on\", not *in."),
      // --- story chains
      mc("Fact: \"Ana didn't check her email, so she didn't see the change of plans.\" Which sentence imagines the opposite?", [
        "If Ana had checked her email, she would have seen the change of plans.",
        "If Ana hadn't checked her email, she wouldn't have seen the change of plans.",
        "If Ana checked her email, she would see the change of plans.",
        "If Ana would have checked her email, she would have seen the change of plans.",
      ], "Reverse each fact: \"didn't check\" becomes \"had checked\" and \"didn't see\" becomes \"would have seen\". The third option is the second conditional (present)."),
      tr("Si no se hubiera quedado dormido, no habría perdido el avión.", [
          "If he hadn't overslept, he wouldn't have missed the {plane|flight}.",
          "If she hadn't overslept, she wouldn't have missed the {plane|flight}.",
        ],
        "«Quedarse dormido» (not wake up on time) is \"oversleep\" (past participle \"overslept\"). «Perder el avión» is \"miss the plane\", never *lose."),
      fb("If she hadn't left her umbrella at home, she ___ wet.", ["wouldn't have gotten", "wouldn't have got"], "Si no hubiera dejado el paraguas en casa, [no se habría mojado].",
        "«Mojarse» is \"get wet\", so the result is \"wouldn't have gotten wet\" (British \"got\")."),
      wo("If they hadn't been so tired, they wouldn't have argued.", "Si no hubieran estado tan cansados, no habrían discutido.",
        "Both parts negative. \"Argue\" is «discutir» (fight with words); \"discuss\" would mean talk calmly about a topic."),
      dc("If the bus had come on time, I wouldn't have been late for class.",
        "Chain link: the bus didn't come on time, so I was late. \"Been\" sounds like \"bin\" in \"wouldn't have been\"."),
      // --- mission: regret, present wish, hope
      tr("Ojalá pudiera tomarme un año libre para viajar.", "I wish I could take a year off to travel.",
        "Present wish about a possibility you don't have: \"I wish I could\" + base form. «Tomarse un año libre» is \"take a year off\"."),
      fb("I ___ I pass my driving test next month.", "hope", "[Espero] aprobar el examen de manejo el mes que viene.",
        "A real future hope: \"I hope\" + present. Note: \"I hope I pass\", with the subject repeated, where Spanish uses the infinitive («espero aprobar»)."),
      lc("I wish I had learned to swim as a child.", [
        "Ojalá hubiera aprendido a nadar de niño.",
        "Ojalá supiera nadar como un niño.",
        "Espero aprender a nadar este año.",
        "Aprendí a nadar de niño.",
      ], "\"I wish I had learned\" = past perfect after \"wish\": a regret about the past. \"As a child\" = «de niño»."),
      // --- education words
      fb("She has a ___ in economics from a university in Chile.", "degree", "Tiene una [licenciatura] en economía de una universidad de Chile.",
        "A university qualification is a \"degree\" (\"a degree in economics\"). «Carrera» is never \"career\" in this sense."),
      mc("How do you say «Mañana presento un examen de historia»?", [
        "I'm taking a history exam tomorrow.",
        "I'm making a history exam tomorrow.",
        "I'm presenting a history exam tomorrow.",
        "I'm giving a history exam tomorrow.",
      ], "Students \"take\" an exam. *Make an exam is wrong, \"present\" doesn't work, and the teacher is the one who \"gives\" it."),
      tr("Reprobé el examen de química, pero aprobé física.", "I failed the chemistry {exam|test}, but I passed physics.",
        "«Aprobar» is \"pass\" and «reprobar» is \"fail\". \"Approve\" is a false friend: a bank approves a loan."),
      fb("Can I copy your ___? I missed the class on Monday.", "notes", "¿Puedo copiar tus [apuntes]? Falté a la clase del lunes.",
        "«Apuntes» are \"notes\"; «nota» (a score) is a \"grade\". And «faltar a clase» is \"miss a class\"."),
      mc("«La lectura de esta semana es el capítulo cuatro.» Which word means «lectura» here?", ["reading", "lecture", "lesson", "lector"],
        "«Lectura» is \"reading\". A \"lecture\" is a talk by a university teacher («clase magistral»): a classic false friend."),
      tr("Saqué buena nota en el examen final.", "I got a good {grade|mark} {on|in} the final {exam|test}.",
        "«Nota» is \"grade\" in American English (\"mark\" in British). «Sacar buena nota» is \"get a good grade\"."),
      wo("My favorite subject in high school was chemistry.", "Mi materia favorita en la secundaria era química.",
        "«Materia» or «asignatura» is \"subject\". American spelling: \"favorite\"."),
      tr("Mi profesor de matemáticas de la secundaria era muy estricto.", [
        "My {math|maths} teacher in high school was very strict.",
        "My high school {math|maths} teacher was very strict.",
      ], "At school it's a \"teacher\"; a \"professor\" teaches at a university. «Matemáticas» is \"math\" (American) or \"maths\" (British)."),
      // --- whole-unit mix and traps
      tr("Si hubiera estudiado más, habría aprobado el examen de manejo.", [
        "If I had studied more, I would have passed {the|my} driving test.",
        "I would have passed {the|my} driving test if I had studied more.",
      ], "Third conditional + education word: \"had studied\" + \"would have passed\". «Aprobar» is \"pass\", never *approve."),
      fb("I wish my neighbor ___ his music so loud at night.", ["wouldn't play", "didn't play"], "Ojalá mi vecino [no pusiera] la música tan fuerte en la noche.",
        "Someone else's annoying habit: \"I wish\" + person + \"wouldn't\" + base form. \"Didn't play\" (a present wish) is also correct."),
      wo("I hope you get into the university you want.", "Ojalá entres a la universidad que quieres.",
        "A real possibility: \"I hope\" + present (\"get into\" = be accepted). Not *I wish you get into."),
      dc("I hope you enjoyed the lecture yesterday.",
        "\"Hope\" about the past: \"I hope you enjoyed\". A \"lecture\" is a university class, not «lectura»."),
      dc("We would have passed if we had taken better notes.",
        "Result first, no comma. \"Take notes\" = «tomar apuntes», and \"taken\" is the participle of \"take\"."),
      sp("I wish I had chosen a different major.",
        "Past regret: \"I wish I had\" + participle (\"chosen\"). «Carrera» as a field of study is a \"major\" (or \"degree\"), not *career.",
        "Say \"chosen\" as \"CHO-zn\" and stress \"different\" and \"major\".",
        "Say it in English: «Ojalá hubiera elegido otra carrera.»"),
      lc("I wish you had told me about the exam.", [
        "Ojalá me hubieras avisado del examen.",
        "Espero que me avises del examen.",
        "Ojalá me avisaras del examen.",
        "Me avisaste del examen.",
      ], "\"I wish you had told me\" = past perfect after \"wish\": a past regret («ojalá me hubieras...»). \"I wish you would tell me\" would be about now."),
      sp("I hope you have a great time at college.",
        "A real future wish: \"I hope\" + present. In the US, \"college\" usually means university.",
        "Link \"have a\" as \"ha-vuh\" and stress \"great\" and \"college\".",
        "Say it in English: «Espero que la pases muy bien en la universidad.»"),
    ],
  ),
];
