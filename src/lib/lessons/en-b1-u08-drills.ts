// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u08-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u08 (the second conditional): a short recap, then graded practice.

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


export const EN_B1_U08_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. If + past, would; If I were you; first vs second; could and might
  // ---------------------------------------------------------------------
  lesson(
    1,
    "second-conditional",
    "If I Had..., I Would...",
    "You will be able to imagine unreal situations with if + past and would, give advice with If I were you, choose between the first and second conditional, and use could and might in the result.",
    "Recap: if + past, would + base form",
    [
      "The second conditional imagines a present or future that is not real or is very unlikely: \"if\" + past simple, then \"would\" (or \"could\", \"might\") + base form. Spanish «si tuviera..., viajaría...» works the same way, but English uses the normal past simple where Spanish has a special form.",
      "The big trap is putting \"would\" or \"will\" in the if-clause (*If I would have...). Keep \"would\" in the result only, use \"were\" in \"If I were you\", and use the first conditional (if + present, will) when the situation is a real possibility.",
    ],
    [
      ["If I had a bigger desk, I would work at home more.", "Si tuviera un escritorio más grande, trabajaría más en casa."],
      ["If I were you, I'd ask for help.", "Yo que tú, pediría ayuda."],
      ["If it snows tomorrow, the school will close.", "Si nieva mañana, cerrarán la escuela."],
      ["If we left earlier, we might find a parking space.", "Si saliéramos antes, a lo mejor encontraríamos estacionamiento."],
    ],
    [
      // --- form: if + past, would + base form
      fb("If I ___ a bigger kitchen, I would cook more.", "had", "Si [tuviera] una cocina más grande, cocinaría más.",
        "The if-clause takes the normal past simple: \"If I had\". English has no special form for «tuviera»: the past tense alone tells the listener the situation is imaginary."),
      fb("If my brother lived closer, we ___ each other every week.", "would see", "Si mi hermano viviera más cerca, [nos veríamos] todas las semanas.",
        "The result clause takes \"would\" + base form: \"would see\". The «nos» of «nos veríamos» is \"each other\", already in the sentence."),
      mc("Which sentence is correct?", [
        "If I knew her address, I would send her a card.",
        "If I would know her address, I would send her a card.",
        "If I know her address, I would send her a card.",
        "If I knew her address, I will send her a card.",
      ], "Past simple after \"if\" (\"knew\"), \"would\" in the result. *If I would know is the classic Spanish-speaker error, and mixing \"know\" + \"would\" or \"knew\" + \"will\" breaks the pattern."),
      tr("Si no trabajara los fines de semana, pasaría más tiempo con mi familia.", [
        "If I didn't work {on weekends|on the weekend|at weekends}, I would spend more time with my family.",
        "I would spend more time with my family if I didn't work {on weekends|on the weekend|at weekends}.",
      ], "Negative if-clause: \"didn't\" + base form, like any past simple. «Pasar tiempo» is \"spend time\", never *pass time with someone."),
      tr("Si fuéramos en bicicleta, ahorraríamos mucho dinero.", [
        "If we {went by bike|went by bicycle|rode our bikes|cycled}, we would save a lot of money.",
        "We would save a lot of money if we {went by bike|went by bicycle|rode our bikes|cycled}.",
      ], "«Fuéramos» is just the past simple \"went\". Present or future meaning, past form: we don't go by bike now."),
      wo("She would be really happy if you called her.", "Se pondría muy contenta si la llamaras.",
        "When the result comes first, there is no comma: \"She would be happy if you called her\". The if-clause still uses the past simple."),
      // --- If I were you, were, questions, I'd
      fb("If I ___, I'd ask for a raise.", "were you", "[Yo que tú], pediría un aumento.",
        "«Yo que tú» is \"If I were you\", the fixed phrase for advice. \"Were\" is the standard form here; *I that you means nothing in English."),
      tr("Yo que tú, no aceptaría esa oferta.", [
        "If I were you, I wouldn't {accept|take} that offer.",
        "I wouldn't {accept|take} that offer if I were you.",
      ], "Advice against something: \"If I were you, I wouldn't...\". \"Wouldn't\" + base form, with no \"to\"."),
      tr("Si fuera más barato, me compraría ese celular.", [
        "If it {were|was} cheaper, I would buy that {phone|cell phone|cellphone}.",
        "I would buy that {phone|cell phone|cellphone} if it {were|was} cheaper.",
      ], "The verb \"be\" is needed: \"If it were cheaper\", never *If it cheaper. \"Were\" is the careful form; \"was\" is common in speech."),
      fb("What ___ if you lost your phone on vacation?", "would you do", "¿Qué [harías] si perdieras el celular en las vacaciones?",
        "Questions put \"would\" before the subject: \"What would you do...?\". The if-clause does not change: \"if you lost\"."),
      mc("\"Would you move to another city for a better job?\" \"Yes, ___.\"", ["I would", "I'd", "I will", "I do"],
        "Short answers repeat the auxiliary: \"Yes, I would.\" / \"No, I wouldn't.\" A short positive answer is never contracted, so *Yes, I'd is wrong."),
      lc("I'd go with you, but I have to work.", [
        "Iría contigo, pero tengo que trabajar.",
        "Había ido contigo, pero tenía que trabajar.",
        "Voy contigo, pero tengo que trabajar.",
        "Fui contigo, pero tuve que trabajar.",
      ], "\"I'd\" + base form (\"go\") is \"I would\": «iría». If \"I'd\" were followed by a participle (\"I'd gone\"), it would be \"I had\"."),
      dc("My parents wouldn't believe me if I told them the truth.",
        "\"Wouldn't\" sounds like \"WOOD-nt\", with a silent l. The if-clause is past simple: \"if I told them\"."),
      // --- first vs second conditional
      fb("If it ___ tomorrow, we'll have the party inside.", "rains", "Si [llueve] mañana, haremos la fiesta adentro.",
        "«Si llueve» is a real possibility, so the first conditional: \"if\" + present, \"will\" in the result. Never *If it will rain."),
      mc("Your team has won every game this season. Which sentence fits best?", [
        "If we win on Sunday, we'll be in first place.",
        "If we won on Sunday, we will be in first place.",
        "If we win on Sunday, we would be in first place.",
        "If we would win on Sunday, we'd be in first place.",
      ], "Winning is a real possibility, so the first conditional: present + \"will\". Each conditional is a package: don't mix \"won\" with \"will\" or \"win\" with \"would\"."),
      tr("Si mi jefa me da el viernes libre, iré a la boda de mi prima.",
        "If my boss gives me Friday off, I'll go to my cousin's wedding.",
        "«Si me da» (present) = a real possibility, so \"if\" + present (\"gives\"), \"will\" in the result. Compare «si me diera» = \"if she gave me\"."),
      tr("Si viviera en el campo, tendría un perro grande.", [
        "If I lived in the {country|countryside}, I would have a big dog.",
        "I would have a big dog if I lived in the {country|countryside}.",
      ], "«Si viviera» = imaginary, so the second conditional: \"lived\" + \"would have\". Spanish shows you the choice: «si vivo» → first, «si viviera» → second."),
      mt("Match each English phrase with its Spanish meaning.", [
        ["if I see her", "si la veo"],
        ["if I saw her", "si la viera"],
        ["I'll tell her", "se lo diré"],
        ["I'd tell her", "se lo diría"],
        ["if I could", "si pudiera"],
      ], "Present after \"if\" = «si veo» (real); past after \"if\" = «si viera» (imaginary). \"Will\" = «diré», \"would\" = «diría». \"Could\" is the past of \"can\": «si pudiera»."),
      // --- could and might
      fb("If we had a car, we ___ go to the mountains on weekends.", ["could", "would be able to"], "Si tuviéramos carro, [podríamos] ir a la montaña los fines de semana.",
        "«Podríamos» = \"could\" (would be able to). Like \"would\", \"could\" takes the base form with no \"to\": never *could to go."),
      fb("If you asked the manager, she ___ give you a discount.", "might", "Si se lo pidieras a la gerente, [a lo mejor] te haría un descuento.",
        "«A lo mejor» means you're not sure, so \"might\" + base form. \"Would\" would sound sure, and \"could\" would mean it's possible for her."),
      tr("Si pudiera cambiar una cosa de mi trabajo, cambiaría el horario.", [
        "If I could change one thing about my job, I would change the {schedule|hours|timetable}.",
        "I would change the {schedule|hours|timetable} if I could change one thing about my job.",
      ], "\"Could\" is the only modal that is normal after \"if\": it means «pudiera». Note \"one thing about my job\", not *of my job."),
      mc("Which sentence is correct?", [
        "If I had more time, I could learn to play the guitar.",
        "If I had more time, I could to learn to play the guitar.",
        "If I would have more time, I could learn to play the guitar.",
        "If I have more time, I could learn to play the guitar.",
      ], "Past simple after \"if\", \"could\" + base form in the result. No \"to\" after \"could\", no \"would\" after \"if\", and no present with \"could\" in this imaginary meaning."),
      wo("Would you take the job if they paid you more?", "¿Aceptarías el trabajo si te pagaran más?",
        "Yes/no questions start with \"Would\" + subject. The if-clause is past simple: \"if they paid you\"."),
      tr("Si le dijeras la verdad, a lo mejor no se enojaría.",
        [
          "If you told him the truth, he might not {get angry|be angry|get mad|be mad}.",
          "If you told her the truth, she might not {get angry|be angry|get mad|be mad}.",
        ],
        "«A lo mejor no» is \"might not\", usually not contracted. «Enojarse» is \"get angry\" or \"get mad\"."),
      sp("If I were you, I'd take a break this weekend.",
        "Advice: \"If I were you, I'd\" + base form. «Tomarse un descanso» is \"take a break\".",
        "Say \"I'd\" quickly, like \"aid\", and link \"take a\" as \"tay-kuh\".",
        "Say it in English: «Yo que tú, me tomaría un descanso este fin de semana.»"),
      dc("If the bakery were open, we could buy fresh bread.",
        "\"Were\" for every person in careful English (\"if the bakery were\"), then \"could\" + base form for a possibility."),
      // --- final mix and traps
      mc("Which sentence is correct?", [
        "If I won a trip to Japan, I'd take my mom.",
        "If I won a trip to Japan, I'll take my mom.",
        "If I would win a trip to Japan, I'd take my mom.",
        "If I win a trip to Japan, I'd take my mom.",
      ], "Winning a trip is unlikely, so the second conditional: \"won\" + \"I'd take\". The other options mix the packages or put \"would\" after \"if\"."),
      tr("Si no estuviera tan cansado, saldría con ustedes esta noche.", [
        "If I {weren't|wasn't} so tired, I would go out with you {tonight|this evening|guys tonight}.",
        "I would go out with you {tonight|this evening|guys tonight} if I {weren't|wasn't} so tired.",
      ], "Don't forget \"be\": \"If I weren't so tired\", never *If I not so tired. «Salir con ustedes» is \"go out with you\" (or \"you guys\")."),
      fb("If she ___ more Spanish, she could talk to her neighbors.", ["spoke", "knew"], "Si [hablara] más español, podría hablar con sus vecinos.",
        "«Hablara» is the past simple \"spoke\" (irregular). Present meaning: she doesn't speak much Spanish now."),
      tr("¿Qué dirías si tu jefe te pidiera trabajar el domingo?",
        "What would you say if your boss asked you to work {on Sunday|this Sunday}?",
        "\"What would you say\" + if + past (\"asked\"). «Pedirle a alguien que haga algo» is \"ask someone to do something\", never *ask that you work."),
      fb("I ___ that phone. It's too expensive and I don't need it.", "wouldn't buy", "Yo [no compraría] ese teléfono. Es demasiado caro y no lo necesito.",
        "\"Wouldn't\" + base form: \"wouldn't buy\". Never *wouldn't to buy or *wouldn't bought: after a modal the verb never changes."),
      sp("If we didn't have to work tomorrow, we could stay longer.",
        "Negative if-clause with \"didn't have to\" (past of «no tener que»), then \"could\" + base form.",
        "Stress \"didn't\" and \"longer\"; \"have to\" sounds like \"haf-tuh\".",
        "Say it in English: «Si no tuviéramos que trabajar mañana, podríamos quedarnos más tiempo.»"),
      lc("If I had the money, I might buy a motorcycle.", [
        "Si tuviera el dinero, a lo mejor me compraría una moto.",
        "Si tengo el dinero, me compraré una moto.",
        "Tenía el dinero y me compré una moto.",
        "Si tuviera el dinero, seguro que me compraría una moto.",
      ], "\"Might\" = maybe would («a lo mejor»), not sure (\"would\"). \"If I had\" is imaginary, not a real past."),
      dc("What would you do if you were in my situation?",
        "\"What would you do\" + \"if you were\": \"were\" for every person. \"Would you\" often sounds like \"wood-juh\" in fast speech."),
      wo("I wouldn't say anything if I were you.", "Yo que tú, no diría nada.",
        "\"If I were you\" can go at the end with no comma. \"Wouldn't say anything\": with a negative verb, \"anything\", not *nothing."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Error hunt, imagining, advice, dilemmas, money words + the whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "second-conditional",
    "Advice, Dilemmas and Money",
    "You will be able to avoid the typical second conditional errors, imagine and discuss what you would do, give advice with I'd, You could and I wouldn't, and use lend, borrow, owe, afford and spend correctly.",
    "Recap: would in the result, the right money verb",
    [
      "Check every second conditional for three errors: no \"would\" or \"will\" after \"if\" (*If I would know), no \"to\" after \"would\", \"could\" and \"might\" (*I would to buy), and \"were\" in \"If I were you\".",
      "For advice, use \"If I were you, I'd...\", the softer \"You could...\" and \"I wouldn't...\". For money, Spanish «prestar» splits in two: \"lend\" (give) and \"borrow\" (take), and «deber dinero» is \"owe\", never \"must\".",
    ],
    [
      ["If I knew the answer, I would tell you.", "Si supiera la respuesta, te la diría."],
      ["You could ask your teacher for some advice.", "Podrías pedirle un consejo a tu profesor."],
      ["I probably wouldn't keep it.", "Probablemente no me lo quedaría."],
      ["Can you lend me your umbrella?", "¿Me prestas tu paraguas?"],
    ],
    [
      // --- error hunt
      mc("Which sentence is correct?", [
        "If he worked closer to home, he would walk to the office.",
        "If he would work closer to home, he would walk to the office.",
        "If he will work closer to home, he would walk to the office.",
        "If he worked closer to home, he would to walk to the office.",
      ], "Past simple after \"if\", \"would\" + base form in the result. *If he would work comes from the Spanish «trabajara» feeling conditional, \"will\" never follows \"if\", and \"would\" never takes \"to\"."),
      fb("If I ___ rich, I'd buy my parents a house near the beach.", ["were", "was"], "Si [fuera] rico, les compraría a mis papás una casa cerca de la playa.",
        "\"Be\" in the if-clause: \"were\" (careful style) or \"was\" (informal). Don't leave it out: *If I rich is a common slip."),
      fb("If I had a day off, I ___ at home all day.", "would stay", "Si tuviera un día libre, [me quedaría] en casa todo el día.",
        "\"Would\" + base form: \"would stay\". Never *would to stay or *would stayed: after a modal the verb doesn't change."),
      tr("Si consigo el trabajo, me mudaré a Monterrey.", "If I get the job, I'll {move|be moving} to Monterrey.",
        "«Si consigo» is a real possibility, so \"if\" + present: \"If I get\". *If I will get puts \"will\" after \"if\", which English never does."),
      mc("In an exam, which is the safest way to give advice?", [
        "If I were you, I'd apologize.",
        "If I was you, I'd apologize.",
        "If I am you, I'd apologize.",
        "If I would be you, I'd apologize.",
      ], "\"If I were you\" is the fixed, standard phrase. \"If I was you\" is heard in casual speech but is not the safe choice in exams or writing; the other two are wrong."),
      // --- imagining: a million, living abroad
      tr("Si ganara un millón de dólares, pagaría todas mis deudas.", [
        "If I won a million dollars, I would pay off all my {debts|debt}.",
        "I would pay off all my {debts|debt} if I won a million dollars.",
      ], "\"Pay off\" = pay a debt completely. \"Won\" is the past simple of \"win\": present meaning, imaginary situation."),
      fb("I'd ___ myself to a long vacation in Asia.", "treat", "Me [daría el capricho de] unas largas vacaciones en Asia.",
        "\"Treat yourself to something\" = «darte un gusto o un capricho». Once the situation is clear, you don't need to repeat the if-clause: \"I'd\" keeps it imaginary."),
      wo("I'd probably give some of it to charity.", "Probablemente daría una parte a una organización benéfica.",
        "In positive sentences \"probably\" goes after \"would\": \"I'd probably give\". \"Some of it\" refers to the money."),
      tr("Si viviera en el extranjero, extrañaría la comida de mi mamá.", [
        "If I lived abroad, I would miss my {mom's|mother's} {food|cooking}.",
        "I would miss my {mom's|mother's} {food|cooking} if I lived abroad.",
      ], "\"Live abroad\" has no preposition: never *in abroad or *in the abroad. «Extrañar» is \"miss\"."),
      wo("Where would you go if you could travel for free?", "¿Adónde irías si pudieras viajar gratis?",
        "Wh- word + \"would\" + subject, then \"if\" + \"could\" (the past of \"can\") for an imaginary ability."),
      // --- advice
      fb("My laptop is really slow. What ___ do?", "should I", "Mi laptop está muy lenta. ¿Qué [hago]?",
        "«¿Qué hago?» asking for advice is \"What should I do?\". *What I do? has no auxiliary and isn't a question in English."),
      mc("Which sentence is correct?", [
        "Can you give me some advice?",
        "Can you give me an advice?",
        "Can you give me some advices?",
        "Can you give me a advice?",
      ], "\"Advice\" is uncountable: \"some advice\" or \"a piece of advice\". Never *an advice or *advices, even though Spanish says «un consejo», «consejos»."),
      tr("Podrías pedirle ayuda a tu hermana.", "You could ask your sister for help.",
        "\"You could...\" is a soft suggestion. «Pedirle algo a alguien» is \"ask someone for something\": \"ask your sister for help\"."),
      tr("Yo no le gritaría; eso empeoraría las cosas.",
        [
          "I wouldn't {shout|yell} at {him|her}{;|,} that would make things worse.",
          "I wouldn't {shout|yell} at {him|her}. That would make things worse.",
        ],
        "Advice against something: \"I wouldn't...\". «Empeorar las cosas» is \"make things worse\". You shout \"at\" someone when you're angry."),
      lc("That makes sense. I hadn't thought of that.", [
        "Tiene sentido. No lo había pensado.",
        "Eso tiene sentido. No pienso hacerlo.",
        "No tiene sentido. Ya lo había pensado.",
        "Tiene sentido. No lo voy a pensar.",
      ], "\"That makes sense\" = «tiene sentido» (never *has sense). \"I hadn't thought of that\" is the past perfect: «no lo había pensado»."),
      // --- dilemmas
      fb("If I found a phone on the bus, I ___ to the driver.", ["would give it", "would hand it", "would take it"], "Si encontrara un celular en el autobús, [se lo daría] al conductor.",
        "\"Would\" + base form + \"it\": \"I would give it to the driver\". \"Hand it in\" (entregar) also works with a place, like the police station."),
      mc("How do you say «quedarse con el dinero»?", ["keep the money", "stay with the money", "stay the money", "remain with the money"],
        "«Quedarse con algo» is \"keep\". \"Stay with the money\" would mean «quedarse al lado del dinero»."),
      tr("Para ser sincero, probablemente no diría nada.", [
        "To be honest, I probably wouldn't say anything.",
        "I probably wouldn't say anything, to be honest.",
      ], "In negatives, \"probably\" goes before \"wouldn't\": \"I probably wouldn't\". With a negative verb, use \"anything\", not *nothing."),
      fb("I'm not sure. It depends ___ how much money is in it.", "on", "No sé. Depende [de] cuánto dinero tenga.",
        "«Depender de» is \"depend on\", never *depend of."),
      tr("No sería justo para los demás.", "It wouldn't be fair {to|on} {the others|the other people|everyone else}.",
        "\"Wouldn't be\" for an imagined result. \"Fair to\" (or British \"fair on\") someone."),
      // --- money words
      mt("Match each verb with its Spanish meaning.", [
        ["lend", "prestar (dar)"],
        ["borrow", "pedir prestado"],
        ["owe", "deber (dinero)"],
        ["afford", "poder permitirse"],
        ["save", "ahorrar"],
        ["waste", "malgastar"],
      ], "\"Lend\" is giving and \"borrow\" is taking. \"Owe\" is for debts, never \"must\". \"Afford\" usually goes with \"can\" or \"can't\"."),
      fb("Can you ___ me twenty dollars until Friday?", "lend", "¿Me [prestas] veinte dólares hasta el viernes?",
        "You lend TO someone: \"lend me\". *Can you borrow me...? is the classic mistake."),
      fb("Can I ___ your charger for a minute?", ["borrow", "use"], "¿Me [dejas] tu cargador un minuto?",
        "From the point of view of the person taking it: \"Can I borrow...?\" You borrow FROM someone."),
      tr("No nos podemos permitir un departamento en el centro.", "We can't afford {an apartment|a flat} {downtown|in the city center|in the center|in the centre|in the city centre}.",
        "«No poder permitirse» is \"can't afford\" + noun. «Departamento» is \"apartment\" (American) or \"flat\" (British)."),
      tr("¿Cuánto te debo por los boletos?", "How much do I owe you for the tickets?",
        "«Deber dinero» is \"owe\": \"How much do I owe you?\". *How much must I you? is wrong. «Boletos» are \"tickets\"."),
      mc("Which sentence is correct?", [
        "I spend too much money on coffee.",
        "I spend too much money in coffee.",
        "I pass too much money on coffee.",
        "I expend too much money in coffee.",
      ], "\"Spend money on something\": the preposition is \"on\", not *in. \"Pass\" is never used for money, and \"expend\" is formal and rare."),
      dc("I always pay by card because I never carry cash.",
        "\"Pay by card\" but \"pay in cash\". \"Cash\" is uncountable: no \"a\" and no plural."),
      wo("We can't afford to eat out every week.", "No nos podemos permitir comer fuera todas las semanas.",
        "\"Can't afford to\" + verb. «Comer fuera» is \"eat out\"."),
      dc("She lent me her car while mine was at the mechanic.",
        "\"Lent\" is the past of \"lend\" (she gave me the car to use). From my side: \"I borrowed her car\"."),
      // --- whole-unit mix and traps
      tr("Si pudiera permitírmelo, le prestaría el dinero a mi hermano.", [
        "If I could afford it, I would lend my brother the money.",
        "If I could afford it, I would lend the money to my brother.",
        "I would lend my brother the money if I could afford it.",
        "I would lend the money to my brother if I could afford it.",
      ], "\"If I could afford it\" (could = past of can, the only modal after \"if\") + \"would lend\". Giving money is \"lend\", not *borrow."),
      fb("If you ___ me the money today, I'll pay you back on Monday.", "lend", "Si me [prestas] el dinero hoy, te lo devuelvo el lunes.",
        "«Si me prestas» is real, so the first conditional: present after \"if\" + \"will\". \"Pay back\" = «devolver dinero»."),
      mc("Which sentence is correct?", [
        "I'll pay for the coffees.",
        "I'll pay the coffees.",
        "I'll pay to the coffees.",
        "I'll pay of the coffees.",
      ], "«Pagar el café» is \"pay for the coffee\". Without \"for\", \"pay\" takes the person or the bill: \"pay the waiter\", \"pay the bill\"."),
      dc("If I were you, I'd make a budget and stop wasting money.",
        "\"If I were you, I'd\" + two base verbs (\"make\", \"stop\"). After \"stop\", the -ing form: \"stop wasting\"."),
      tr("¿Qué harías si un amigo no te devolviera el dinero que le prestaste?",
        "What would you do if a friend didn't {pay you back|give you back|return} the money you lent {him|her|them}?",
        "\"What would you do\" + \"if\" + past simple negative (\"didn't pay you back\"). The money you gave him is money you \"lent\" him."),
      sp("If I saw someone drop a twenty-dollar bill, I'd give it back.",
        "Second conditional: \"if I saw\" + \"I'd give it back\". «Billete» is \"bill\" in American English (British: \"note\"); \"twenty-dollar\" has no -s because it works as an adjective.",
        "Stress \"saw\", \"twenty\" and \"back\"; link \"give it\" as \"gi-vit\".",
        "Say it in English: «Si viera a alguien dejar caer un billete de veinte dólares, se lo devolvería.»"),
      lc("To be honest, I'd probably keep it.", [
        "Sinceramente, probablemente me lo quedaría.",
        "Sinceramente, probablemente me quedaría aquí.",
        "Sinceramente, probablemente lo devolvería.",
        "Sinceramente, me lo quedé.",
      ], "\"I'd probably keep it\" = «probablemente me lo quedaría». \"Keep\" is «quedarse con algo», not «quedarse en un lugar» (\"stay\")."),
      sp("You could ask your landlord to fix the heating.",
        "\"You could\" is a soft suggestion. \"Ask someone to do something\": \"ask your landlord to fix\".",
        "Say \"could\" with a silent l, like \"kood\".",
        "Say it in English: «Podrías pedirle al casero que arregle la calefacción.»"),
    ],
  ),
];
