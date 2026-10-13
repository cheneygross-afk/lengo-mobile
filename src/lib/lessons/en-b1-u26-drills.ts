// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u26-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u26 (phrasal verbs and collocations): a short recap, then graded practice.

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
  slug: `en-b1-phrasal-collocations-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U26_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Separable and inseparable phrasal verbs; daily life, people, work
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Turn It Off, Look After Them",
    "You will be able to put pronouns in the right place in separable, inseparable and three-part phrasal verbs, and use the phrasal verbs of home, relationships and work.",
    "Recap: where does the object go?",
    [
      "Separable verbs (\"turn off\", \"pick up\", \"put on\", \"take off\", \"look up\", \"give back\", \"throw away\", \"fill in\", \"set up\", \"ask out\") accept a noun in either position, but a pronoun MUST go in the middle: \"turn it off\", never *turn off it.",
      "Inseparable verbs (\"look after\", \"look for\", \"come across\", \"get over\", \"get off\") and three-part verbs (\"get on with\", \"run out of\", \"put up with\", \"look forward to\") keep the object at the end. After \"look forward to\", use a noun or -ing: \"I'm looking forward to seeing you\".",
    ],
    [
      ["Take them off at the door, please.", "Quítatelos en la puerta, por favor."],
      ["I'll look it up online.", "Lo busco en internet."],
      ["Who looks after your dog?", "¿Quién cuida a tu perro?"],
      ["We've run out of milk.", "Se nos acabó la leche."],
    ],
    [
      fb("Your shoes are dirty. Please ___ at the door.", "take them off", "Tus zapatos están sucios. Por favor, [quítatelos] en la puerta.",
        "\"Take off\" is separable, and \"them\" is a pronoun, so it goes in the middle: \"take them off\". Spanish glues the pronoun to the end («quítatelos»), which is why *take off them feels natural. It isn't."),
      mc("Which sentence is correct?", [
        "Turn it off before you leave.",
        "Turn off it before you leave.",
        "It turn off before you leave.",
        "Turn of it before you leave.",
      ], "Pronoun in the middle of a separable verb: \"turn it off\". Think of a sandwich: verb + pronoun + particle."),
      fb("I don't know this word. I'll ___.", "look it up", "No conozco esta palabra. [La buscaré].",
        "\"Look up\" (search for information) is separable, so \"look it up\". Don't use \"look for\" here: that's for things you've lost."),
      tr("¿Me puedes recoger en la estación?", "{Can|Could} you pick me up {at|from} the station?",
        "\"Pick up\" a person by car is separable; with \"me\" the pronoun goes in the middle: \"pick me up\". *Pick up me is a typical slip."),
      wo("She picked her keys up from the table.", "Agarró las llaves de la mesa.",
        "With a noun object, both orders are fine: \"picked her keys up\" or \"picked up her keys\".",
        ["She picked up her keys from the table."]),
      tr("Le presté mi libro y todavía no me lo ha devuelto.", "I lent {him|her} my book and {he|she} still hasn't given it back{| to me}.",
        "«Devolver» something to its owner is \"give back\", separable: \"given it back\". The present perfect with \"still\" goes with «todavía no»."),
      lc("The plane took off an hour late.", [
        "El avión despegó con una hora de retraso.",
        "El avión aterrizó una hora tarde.",
        "Se quitó la chaqueta una hora después.",
        "El avión salió una hora antes.",
      ], "\"Take off\" with no object, for a plane, means «despegar». With an object (\"take off your jacket\") it means «quitarse»."),
      fb("Who ___ your dog when you travel?", ["looks after", "takes care of"], "¿Quién [cuida] a tu perro cuando viajas?",
        "\"Look after\" (cuidar) is inseparable: the object goes after it. \"Takes care of\" means the same."),
      tr("Mi abuela cuida a mis hijos los martes.", "My {grandmother|grandma} {looks after|takes care of} my {kids|children} on Tuesdays.",
        "\"Look after\" + object. Note \"looks\" with -s for \"my grandmother\", and \"on Tuesdays\" for a regular day."),
      mc("Which sentence is correct?", [
        "She looks after them.",
        "She looks them after.",
        "She after looks them.",
        "She looks after to them.",
      ], "\"Look after\" is inseparable: even a pronoun goes at the end, \"looks after them\". The sandwich rule is only for separable verbs."),
      fb("We've ___ milk. Can you buy some more?", "run out of", "[Se nos ha acabado] la leche. ¿Puedes comprar más?",
        "\"Run out of\" (quedarse sin) has three parts. Spanish makes the milk the subject («se ha acabado la leche»); English makes the people the subject: \"We've run out of milk\". Don't drop \"of\"."),
      mc("Complete: \"I look forward to ___ from you.\"", ["hearing", "hear", "heard", "be hearing"],
        "In \"look forward to\", \"to\" is a preposition, so the verb takes -ing: \"to hearing\". *I look forward to hear is one of the most common mistakes in English."),
      tr("Tengo muchas ganas de verte el sábado.", ["I'm {really |}looking forward to seeing you on Saturday.", "I {really |}look forward to seeing you on Saturday."],
        "«Tener ganas de» is \"look forward to\" + -ing: \"seeing\", not *see."),
      dc("We got off the bus and carried on walking.",
        "\"Get off\" a bus is inseparable (object after), and \"carry on\" (seguir) is followed by -ing: \"carried on walking\"."),
      fb("My alarm goes off at six, but I don't ___ until half past.", "get up", "Mi alarma suena a las seis, pero no [me levanto] hasta las seis y media.",
        "«Levantarse» from bed is \"get up\", not reflexive: never *get me up. \"Wake up\" would be «despertarse», a different moment."),
      tr("Despiértame cuando llegues.", ["Wake me up when you {arrive|get here|get home}.", "Wake me when you {arrive|get here|get home}."],
        "\"Wake up\" with an object is separable: \"wake me up\". After \"when\", English uses the present (\"arrive\"), not a subjunctive-like form."),
      tr("Esa comida está mala. Tírala.", "That food {is bad|has gone bad|is off}. Throw it {away|out}.",
        "\"Throw away\" (or \"throw out\") is separable: \"throw it away\". Not *throw it to the trash."),
      wo("Can you help me set up the new printer?", "¿Me ayudas a instalar la impresora nueva?",
        "\"Set up\" (instalar, configurar) is separable; with a noun the object can go after \"up\" or in the middle.",
        ["Can you help me set the new printer up?"]),
      lc("Don't worry, we'll sort it out.", [
        "No te preocupes, lo vamos a solucionar.",
        "No te preocupes, lo vamos a sacar.",
        "No te preocupes, lo vamos a ordenar por colores.",
        "No te preocupes, nos vamos a ir.",
      ], "\"Sort out\" means «solucionar» or «arreglar» a problem. With \"it\", the pronoun goes in the middle: \"sort it out\"."),
      fb("After dinner, the kids ___ and I take out the trash.", ["do the dishes", "wash the dishes"], "Después de cenar, los niños [lavan los platos] y yo saco la basura.",
        "American English says \"do the dishes\" (or \"wash the dishes\"). \"Wash up\" means «lavarse las manos» in the US, so avoid it here."),
      tr("Me llevo muy bien con mi jefa.", "I get {on|along} {really |very |}well with my boss.",
        "«Llevarse bien con» is \"get on with\" (\"get along with\" in the US), a three-part verb: the person goes at the end."),
      fb("They ___ after five years together.", "broke up", "[Rompieron] después de cinco años juntos.",
        "«Romper» or «cortar» a relationship is \"break up\". Never *they cut or *they broke. To say who with: \"break up with someone\"."),
      tr("¿Por qué no la invitas a salir?", "Why don't you ask her out?",
        "\"Ask out\" is separable, and the person goes in the middle: \"ask her out\". *Ask out her is wrong."),
      mc("Which sentence means «No soporto a mi vecino»?", [
        "I can't put up with my neighbor.",
        "I can't support my neighbor.",
        "I can't put my neighbor up with.",
        "I can't put up my neighbor.",
      ], "«Soportar» (tolerate) is \"put up with\", never split. \"Support\" is a false friend: it means «apoyar»."),
      fb("Please ___ this form and sign it at the bottom.", ["fill in", "fill out"], "Por favor, [rellene] este formulario y fírmelo abajo.",
        "\"Fill in\" or \"fill out\" a form (\"fill out\" is more American). Both are separable: \"fill it in\"."),
      tr("Tengo que entregar el informe el lunes.", "I have to {hand in the report|hand the report in|turn in the report|turn the report in} on Monday.",
        "«Entregar» homework or a report is \"hand in\" (or \"turn in\" in the US). With a noun, the object can go in the middle or at the end."),
      mt("Match each phrasal verb with its meaning.", [
        ["take over", "hacerse cargo"],
        ["fall out with", "pelearse con"],
        ["come across", "encontrar por casualidad"],
        ["get over", "superar"],
      ], "\"Take over\" is separable; \"come across\" and \"get over\" are inseparable; \"fall out with\" has three parts and never splits."),
      dc("Who's going to take over when the manager retires?",
        "\"Take over\" (hacerse cargo) with no object here. Listen for the linking: \"take over\" sounds like \"tay-kover\"."),
      sp("I'm looking forward to meeting your parents.", "\"Looking forward to\" + -ing: \"meeting\", not *meet.",
        "Stress \"forward\" and \"parents\".", "Say it in English: Tengo ganas de conocer a tus papás."),
      // Traps: the whole first half combined
      tr("No encuentro mis lentes. ¿Me ayudas a buscarlos?", "I can't find my glasses. {Can|Could|Will} you help me look for them?",
        "Two traps: «buscar» something lost is \"look for\" (inseparable, \"look for them\"), not \"look up\"; and \"glasses\" is plural, so \"them\", never *it."),
      tr("Mi celular se quedó sin batería y no pude llamarte.", "{My phone|My cell phone|My cellphone} ran out of battery{,|} and I couldn't call you.",
        "\"Run out of\" keeps all three parts. The phone is the subject here, like a person who runs out of something."),
      mc("Which sentence is correct?", [
        "I can't put up with it anymore.",
        "I can't put up it anymore.",
        "I can't put it up with anymore.",
        "I can't put up with anymore it.",
      ], "Three-part verbs never split and never lose a part: \"put up with it\". *Put up it drops \"with\"; *put it up with splits the verb."),
      tr("Me puse la chaqueta, pero me la quité en el metro.", "I put {on my jacket|my jacket on}, but I took it off {on|in} the {subway|metro}.",
        "\"Put on\" and \"take off\" are separable. With the noun, both orders work; with \"it\", the pronoun goes in the middle: \"took it off\". No reflexive in English: *I put me the jacket is wrong."),
      wo("I don't get along with my new roommate.", "No me llevo bien con mi nuevo compañero de cuarto.",
        "Three-part verb, person at the end: \"get along with my new roommate\"."),
      dc("Could you fill it in and give it back to me?",
        "Two separable verbs, two pronouns in the middle: \"fill it in\", \"give it back\"."),
      sp("Turn it off and put it in your bag.", "\"Turn it off\": the pronoun goes in the middle of the separable verb.",
        "Link \"turn it off\" smoothly: \"tur-ni-toff\".", "Say it in English: Apágalo y guárdalo en tu bolso."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Make vs do, get, have/take/give/pay + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Make, Do, Get and Take",
    "You will be able to choose make, do, get, take, have, give or pay for each «hacer»-type phrase, and combine them with the phrasal verbs of this unit.",
    "Recap: check the noun, not the Spanish verb",
    [
      "\"Make\" a mistake, a decision, money, noise, an effort, an appointment. \"Do\" homework, a course, the shopping, the dishes, someone a favor. Some «hacer» phrases are neither: \"ask a question\", \"have a party\", \"play sports\", \"take a trip\".",
      "\"Get\" = obtain or receive (\"get a text\"), become (\"get nervous\"), arrive (\"get home\", \"get to the museum\") and get + participle (\"get married\", \"get lost\"). \"Take\" a photo, a break, a test, part in; \"give\" a hand or a call; \"pay\" attention; \"attend\" (not *assist) a talk.",
    ],
    [
      ["I made the same mistake last year.", "Cometí el mismo error el año pasado."],
      ["I always get nervous before interviews.", "Siempre me pongo nervioso antes de las entrevistas."],
      ["Let's take a short break.", "Hagamos una pausa corta."],
      ["She turned the offer down.", "Rechazó la oferta."],
    ],
    [
      fb("Don't worry. I ___ the same mistake last year.", "made", "No te preocupes. Yo [cometí] el mismo error el año pasado.",
        "A mistake is something you produce, so \"make\": \"made the same mistake\". *I did a mistake is the classic Spanish-speaker error."),
      fb("Could you ___ me a favor and close the window?", "do", "¿Me [harías] un favor y cierras la ventana?",
        "\"Do someone a favor\": the person goes right after \"do\", with no \"to\". Never *make me a favor."),
      mc("Choose the correct verb: \"I need to ___ an appointment with the dentist.\"", ["make", "do", "take", "give"],
        "«Pedir cita» is \"make an appointment\", one of the fixed \"make\" collocations."),
      mt("Match the Spanish with the English collocation.", [
        ["esforzarse", "make an effort"],
        ["ganar dinero", "make money"],
        ["hacer la compra", "do the shopping"],
        ["hacer un curso", "do a course"],
      ], "\"Make\" for things you produce or achieve (an effort, money); \"do\" for tasks and activities (the shopping, a course)."),
      tr("Estoy haciendo un curso de cocina los jueves.", "I'm {doing|taking} a {cooking course|cooking class} on Thursdays.",
        "«Hacer un curso» is \"do a course\" (or \"take a class\"). Never *make a course."),
      tr("Mi hermano gana mucho dinero, pero trabaja demasiado.", "My brother {makes|earns} {a lot of|lots of} money, but {he |}works too {much|hard}.",
        "«Ganar dinero» is \"make money\" (or \"earn money\"). \"Win\" is only for prizes and games."),
      tr("El profesor nos hizo una pregunta difícil.", "The {teacher|professor} asked us a {difficult|hard} question.",
        "«Hacer una pregunta» is \"ask a question\": neither \"make\" nor \"do\". The person goes right after \"ask\": \"asked us\"."),
      mc("Which sentence is correct?", [
        "I play a lot of sports on weekends.",
        "I make a lot of sport on weekends.",
        "I make sports a lot on weekends.",
        "I play a lot of sports in weekends.",
      ], "«Hacer deporte» is \"play sports\" in American English (or \"work out\"). *Make sport is wrong, and the preposition is \"on weekends\" (US)."),
      fb("We're ___ a party for Ana's birthday on Saturday.", ["having", "throwing"], "[Vamos a hacer] una fiesta para el cumpleaños de Ana el sábado.",
        "«Hacer una fiesta» is \"have a party\" or \"throw a party\". The present continuous shows a plan."),
      fb("I always ___ nervous before job interviews.", "get", "Siempre [me pongo] nervioso antes de las entrevistas de trabajo.",
        "\"Get\" + adjective is a change of state, like «ponerse»: \"get nervous\", \"get angry\", \"get tired\"."),
      tr("Llegamos a casa a medianoche.", "We {got|arrived|came} home at midnight.",
        "\"Get home\" with no \"to\": *got to home is wrong. \"Get to\" is only for other places: \"get to work\"."),
      tr("Se casaron en la playa.", "They got married {on|at} the beach.",
        "«Casarse» is \"get married\", not reflexive: never *they married themselves."),
      wo("How do I get to the museum from here?", "¿Cómo llego al museo desde aquí?",
        "\"Get to\" + place means «llegar a». It's the most natural way to ask for directions."),
      lc("It's getting dark.", ["Está oscureciendo.", "Está muy oscuro.", "Ya es de noche.", "Va a comprar una lámpara."],
        "\"Get\" + adjective in the continuous describes a change in progress: «está oscureciendo». \"It's dark\" would be «está oscuro»."),
      mc("Which sentence is correct?", [
        "She married a dentist from Quito.",
        "She married with a dentist from Quito.",
        "She got married a dentist from Quito.",
        "She married to a dentist from Quito.",
      ], "«Casarse con alguien» is \"marry someone\" (no preposition) or \"get married to someone\". *Married with copies «con»."),
      fb("I ___ a text from the bank this morning.", ["got", "received"], "Esta mañana [recibí] un mensaje del banco.",
        "\"Get\" + noun often means «recibir». \"Got\" sounds more natural than \"received\" in conversation."),
      dc("We got lost on the way to the hotel.",
        "\"Get lost\" is «perderse»: get + participle, no reflexive pronoun."),
      fb("Let's ___ a short break and then carry on.", ["take", "have"], "[Hagamos] una pausa corta y luego seguimos.",
        "«Hacer una pausa» is \"take a break\" (US) or \"have a break\" (UK). Not *make a break."),
      tr("Mi papá siempre toma fotos de la comida.", "My {dad|father} always takes {pictures|photos} of {the food|his food|food}.",
        "«Tomar una foto» is \"take a picture\" or \"take a photo\". Never *make a photo."),
      tr("Por favor, presten atención; esto va a salir en el examen.", ["Please pay attention. This {is going to be|will be} on the {exam|test}.", "Pay attention, please. This {is going to be|will be} on the {exam|test}."],
        "«Prestar atención» is \"pay attention\", never *lend attention or *put attention."),
      fb("Can you ___ me a hand with these suitcases?", "give", "¿Me [echas] una mano con estas maletas?",
        "«Echar una mano» is \"give someone a hand\"."),
      tr("Ayer asistí a una conferencia sobre inteligencia artificial.", ["Yesterday I {attended|went to} a {talk|lecture|conference} {on|about} {artificial intelligence|AI}.", "I {attended|went to} a {talk|lecture|conference} {on|about} {artificial intelligence|AI} yesterday."],
        "«Asistir a» is \"attend\" (no preposition) or \"go to\". \"Assist\" is a false friend that means «ayudar»."),
      mc("What does \"The nurse assisted the surgeon\" mean?", [
        "La enfermera ayudó al cirujano.",
        "La enfermera asistió a la clase del cirujano.",
        "La enfermera esperó al cirujano.",
        "La enfermera vio al cirujano.",
      ], "\"Assist\" means «ayudar» (formal). To be present at something is \"attend\"."),
      wo("She took part in a marathon last year.", "Participó en un maratón el año pasado.",
        "«Participar en» is \"take part in\". Don't forget \"in\"."),
      sp("I'll give you a call when I get home.", "\"Give someone a call\" (llamar) and \"get home\" with no \"to\".",
        "Stress \"call\" and \"home\".", "Say it in English: Te llamo cuando llegue a casa."),
      fb("We had to ___ the trip until July.", ["put off", "postpone"], "Tuvimos que [aplazar] el viaje hasta julio.",
        "\"Put off\" is the everyday word for «aplazar»; \"postpone\" is correct but more formal."),
      tr("Le ofrecieron un ascenso, pero lo rechazó.", "{They offered him|He was offered} a promotion, but he {turned it down|refused it|rejected it}.",
        "\"Turn down\" (rechazar) is separable, so with \"it\" the pronoun goes in the middle: \"turned it down\". It sounds much more natural than \"rejected\"."),
      lc("I found out the truth from my sister.", [
        "Me enteré de la verdad por mi hermana.",
        "Encontré la verdad afuera con mi hermana.",
        "Le dije la verdad a mi hermana.",
        "Mi hermana descubrió la verdad.",
      ], "\"Find out\" is «enterarse» or «averiguar». It's the natural, everyday choice instead of \"discover\"."),
      // Traps: the whole unit
      tr("Me tomé el día libre para hacer la compra y lavar la ropa.", ["I took the day off to do the {shopping|grocery shopping} and the laundry.", "I took the day off to do the {shopping|grocery shopping} and do the laundry."],
        "«Hacer la compra» and «lavar la ropa» are both \"do\": \"do the shopping\", \"do the laundry\". \"Take the day off\" for «tomarse el día libre»."),
      mc("Which sentence is correct?", [
        "I made a mistake, so I'm taking the test again.",
        "I did a mistake, so I'm taking the test again.",
        "I made a mistake, so I'm making the test again.",
        "I did a mistake, so I'm making the test again.",
      ], "\"Make a mistake\", but \"take a test\" (or \"take an exam\"). Neither is \"do\" plus «hacer» thinking."),
      tr("No aguanto más este calor.", "I can't {put up with|stand} this heat {anymore|any longer}.",
        "«Aguantar» is \"put up with\" (three parts, never split) or \"stand\". \"Support\" would be «apoyar»."),
      tr("Se enojó cuando se enteró de que lo habían despedido.", "He got {angry|mad} when he found out {that |}{he had been fired|they had fired him|he'd been fired|he had gotten fired}.",
        "Three uses of this unit: \"get angry\" (enojarse), \"find out\" (enterarse) and \"get fired\" / \"be fired\" (ser despedido)."),
      dc("Stop putting off your homework and do it now.",
        "\"Put off\" (aplazar) + noun, and \"do\" homework, never *make homework."),
      wo("Could you do me a favor and pick me up at six?", "¿Me harías el favor de recogerme a las seis?",
        "\"Do me a favor\" (person after \"do\") and \"pick me up\" (pronoun in the middle of the separable verb)."),
      fb("I'm really looking forward to ___ a break next week.", ["taking", "having"], "Tengo muchas ganas de [tomarme] un descanso la semana que viene.",
        "Two rules together: \"look forward to\" + -ing, and \"take a break\". So \"to taking\", not *to take."),
      sp("Take a deep breath and don't get nervous.", "\"Take a breath\" and \"get nervous\" (ponerse nervioso).",
        "Stress \"deep\" and \"nervous\".", "Say it in English: Respira hondo y no te pongas nervioso."),
    ],
  ),
];
