// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u28-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u28 (phrasal verbs with get, take, put, come and go, three-part phrasal verbs, collocations, confused words, useful adverbs): a short recap, then graded practice.

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
  slug: `en-b2-phrasal-collocations-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U28_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Phrasal verbs with get, take, put, come and go
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Get, Take, Put, Come and Go",
    "You will be able to use get over, get through, get by, get away with, take after, take up, take off, put off, put forward, come across, come up with, come down with, go off, go through and go along with, with the object in the right place.",
    "Recap: one verb, many particles",
    [
      "Get: \"get over\" (recover from), \"get through\" (survive, finish, reach on the phone), \"get by\" (manage), \"get on with\" (continue), \"get away with\" (not be punished), \"get around to\" + -ing (finally find time). Take and put: \"take after\" a parent, \"take up\" a hobby, \"take off\" (plane, clothes, success), \"put off\" (postpone), \"put up with\" (tolerate), \"put forward\" (propose).",
      "Come and go: \"come across\" (find by chance), \"come up with\" (think of), \"come down with\" (start an illness), \"go off\" (alarms), \"go through\" (a hard time, a document), \"go along with\" (accept). With separable verbs a pronoun goes in the middle: \"take it off\", \"put it off\".",
    ],
    [
      ["It took him months to get over losing the final.", "Tardó meses en superar haber perdido la final."],
      ["He takes after his grandfather.", "Ha salido a su abuelo."],
      ["We've put the trip off until next spring.", "Hemos aplazado el viaje hasta la próxima primavera."],
      ["Who came up with this plan?", "¿A quién se le ocurrió este plan?"],
    ],
    [
      fb("It took me a week to ___ the cold.", "get over", "Tardé una semana en [recuperarme del] resfriado.",
        "\"Get over\" = recover from an illness, a shock or a breakup. It's the everyday word for «superar»."),
      tr("Tranquila, vas a superar esta ruptura.", ["Don't worry, you'll get over this breakup.", "Don't worry, you're going to get over this breakup.", "Relax, you'll get over this breakup."],
        "The object goes after \"over\": \"get over it\". \"Overcome\" is more formal and is for obstacles and fears."),
      wo("I don't know how we got through that winter.", "No sé cómo salimos adelante aquel invierno.",
        "\"Get through\" a difficult period = survive it."),
      fb("I called the airline five times, but I couldn't get ___.", "through", "Llamé a la aerolínea cinco veces, pero no [conseguí comunicarme].",
        "On the phone, \"get through (to someone)\" = manage to reach them."),
      tr("Mi portugués no es muy bueno, pero me las arreglo.", "My Portuguese isn't {very good|great}, but I {can get|get} by.",
        "\"Get by\" = manage with just enough. With money: \"get by on\" an amount."),
      mc("Which sentence is correct?", [
        "I finally got around to fixing the door.",
        "I finally got around to fix the door.",
        "I finally got around fixing the door.",
        "I finally got to around fixing the door.",
      ], "In \"get around to\", \"to\" is a preposition, so the verb takes -ing: \"got around to fixing\"."),
      tr("Se pasó el semáforo en rojo y se salió con la suya.", "{He|She} ran {a|the} red light and got away with it.",
        "\"Get away with it\" = do something wrong and not be punished or caught."),
      fb("Stop chatting and ___ your work!", "get on with", "¡Deja de hablar y [sigue con] tu trabajo!",
        "\"Get on with\" something = continue it or start it after a delay."),
      tr("Mi hija ha salido a su padre: los dos son muy tercos.", "My daughter takes after her father: they're both {very|really} stubborn.",
        "\"Take after\" a parent or older relative = look or behave like them. It's used in the simple, not the continuous."),
      mc("Which sentence is correct?", [
        "Who does your son take after, you or his mom?",
        "Who is your son taking after, you or his mom?",
        "Who does your son take after to, you or his mom?",
        "Who does your son take up, you or his mom?",
      ], "\"Take after\" doesn't go in the continuous, and the preposition stays at the end of the question."),
      fb("These old files ___ too much space on my computer.", "take up", "Estos archivos viejos [ocupan] demasiado espacio en mi computadora.",
        "\"Take up\" also means fill space or time («ocupar»)."),
      tr("El año pasado empecé a jugar ajedrez.", "Last year I took up chess.",
        "\"Take up\" a hobby or activity = start doing it regularly. With games you don't need \"playing\": \"take up chess\"."),
      lc("Our plane took off two hours late.", [
        "Nuestro avión despegó con dos horas de retraso.",
        "Nuestro avión aterrizó con dos horas de retraso.",
        "Nos quitaron el avión dos horas antes.",
        "Perdimos el avión por dos horas.",
      ], "A plane \"takes off\" («despegar»); the opposite is \"land\"."),
      mc("Your friend is wearing a hat inside. What do you say?", [
        "Take it off!",
        "Take off it!",
        "Take it out off!",
        "Take off!",
      ], "\"Take off\" is separable: with a pronoun, \"take it off\". *Take off it is always wrong."),
      tr("Su negocio despegó después de salir en la tele.", "{His|Her} business took off after {it was|being} on TV.",
        "A business, career or idea \"takes off\" when it suddenly becomes successful."),
      fb("We had to ___ the meeting until next week because the boss was sick.", "put off", "Tuvimos que [aplazar] la reunión hasta la semana que viene porque el jefe estaba enfermo.",
        "\"Put off\" = postpone. Separable: \"put the meeting off\", \"put it off\"."),
      tr("Siempre dejo para luego la llamada al dentista.", ["I always put off calling the dentist.", "I keep putting off calling the dentist."],
        "\"Put off\" + -ing when the object is an action."),
      lc("The long line put me off.", [
        "La fila tan larga me quitó las ganas.",
        "La fila tan larga me hizo esperar.",
        "La fila tan larga me echó de la tienda.",
        "La fila tan larga me tranquilizó.",
      ], "\"Put someone off\" = discourage them or make them lose interest («quitar las ganas»)."),
      tr("La directora propuso un plan para ahorrar energía.", "The {director|manager|principal} put forward a plan to save energy.",
        "\"Put forward\" a plan or idea = propose it. With a long object, English keeps it after the particle."),
      mt("Match each phrasal verb with its meaning.", [
        ["put off", "aplazar"],
        ["put up with", "aguantar"],
        ["put forward", "proponer"],
        ["take after", "parecerse a (un familiar)"],
        ["get by", "arreglárselas"],
        ["get away with", "salirse con la suya"],
      ], "Same verb, different particle, different meaning. Learn each one as a chunk."),
      tr("Me encontré con unas fotos viejas en un cajón.", "I came across some old {photos|pictures} in a drawer.",
        "\"Come across\" = find by chance. It isn't separable: \"came across them\"."),
      fb("At first he ___ as a bit arrogant, but he's actually very shy.", "comes across", "Al principio [da la impresión de ser] un poco arrogante, pero en realidad es muy tímido.",
        "\"Come across as\" + adjective = give that impression."),
      mc("Translate: «Se me ocurrió una idea genial.»", [
        "I came up with a great idea.",
        "A great idea came up with me.",
        "I came across with a great idea.",
        "It came up me a great idea.",
      ], "In English the person is the subject: \"I came up with an idea\". Spanish makes the idea the subject."),
      tr("Me siento fatal. Creo que me estoy enfermando de gripe.", "I feel {awful|terrible}. I think I'm coming down with the flu.",
        "\"Come down with\" = start having an illness, often in the continuous."),
      fb("The fire alarm ___ in the middle of the night.", "went off", "La alarma de incendios [sonó] en mitad de la noche.",
        "An alarm \"goes off\" («sonar»)."),
      tr("Está pasando por un divorcio difícil.", "{He's|She's} going through a {difficult|hard|tough} divorce.",
        "\"Go through\" a hard experience = live through it."),
      wo("Let's go through the report before the meeting.", "Revisemos el informe antes de la reunión.",
        "\"Go through\" also means examine carefully («revisar»)."),
      tr("A mi jefe no le gustaba la idea, pero la aceptó.", "My boss didn't like the idea, but {he|she} went along with it.",
        "\"Go along with\" = accept or agree, often without much enthusiasm."),
      mc("Which sentence is correct?", [
        "The yogurt has gone bad.",
        "The yogurt has gone off bad.",
        "The yogurt has got off.",
        "The yogurt has come down.",
      ], "In American English food \"goes bad\"; British English also says \"goes off\"."),
      dc("She came down with the flu the day before her exam.",
        "\"Come down with\" + illness; \"the flu\" in American English."),
      dc("I've been meaning to paint the kitchen, but I haven't gotten around to it yet.",
        "\"Get around to\" = finally find time to do something, very common in the negative. American English uses \"gotten\" as the participle."),
      tr("Si no te gusta la chaqueta, quítatela.", "If you don't like the jacket, take it off.",
        "Pronoun in the middle of a separable verb: \"take it off\"."),
      sp("We'll have to put the party off until next month.", "\"Put off\" = postpone, separable: \"put the party off\".",
        "Link \"put the party off\": PU-the-PAR-dee-OFF.", "Say it in English: Vamos a tener que aplazar la fiesta hasta el mes que viene."),
      sp("She never really got over losing her job.", "\"Get over\" + noun or -ing = recover from a disappointment.",
        "Link the words: GO-DO-ver.", "Say it in English: Nunca superó del todo haber perdido el trabajo."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Three-part phrasal verbs, adjective and verb collocations
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Three-part Verbs and Collocations",
    "You will be able to use look forward to, run out of, catch up with, cut down on and put up with without splitting them, and choose the natural partner words: heavy traffic, strong coffee, high prices, take a break, pay attention, keep in touch, make a decision.",
    "Recap: never split, and learn words in pairs",
    [
      "Three-part phrasal verbs never split; the object, even a pronoun, goes at the end: \"put up with it\", \"run out of it\". \"Look forward to\" + -ing; \"run out of\" makes the person the subject (\"We ran out of milk\"); \"catch up with\" a person, \"catch up on\" things; \"cut down on\" sugar.",
      "Collocations: \"heavy\" traffic/rain/smoker, \"strong\" coffee/wind/accent, \"high\" prices/temperature, \"deep\" sleep, \"wide awake\", \"a close friend\", \"bitterly cold\", \"highly recommended\". Verbs: \"take a break / part in / place\", \"have a look / fun\", \"pay attention\" (never *make attention), \"keep in touch / calm / a promise\", \"make a decision\".",
    ],
    [
      ["I'm really looking forward to seeing my cousins.", "Tengo muchas ganas de ver a mis primos."],
      ["We ran out of bread, so I went to the store.", "Se nos acabó el pan, así que fui a la tienda."],
      ["There was heavy traffic on the way home.", "Había mucho tráfico de camino a casa."],
      ["Please pay attention to the safety instructions.", "Por favor, presten atención a las instrucciones de seguridad."],
    ],
    [
      fb("I'm really looking forward to ___ you next month.", "seeing", "Tengo muchas ganas de [verte] el mes que viene.",
        "In \"look forward to\", \"to\" is a preposition, so the verb takes -ing: never *to see you."),
      mc("Which sentence is correct for a formal email?", [
        "I look forward to meeting you on Monday.",
        "I look forward to meet you on Monday.",
        "I look forward meeting you on Monday.",
        "I'm looking forward for meeting you on Monday.",
      ], "The simple form \"I look forward to\" + -ing is the standard formal email ending."),
      tr("Tengo muchas ganas de que lleguen las vacaciones de verano.", ["I'm {really |}looking forward to the summer {vacation|holidays}.", "I {really |}can't wait for the summer {vacation|holidays}."],
        "\"Look forward to\" + noun. «Tener ganas de que llegue algo» doesn't need a verb in English."),
      tr("Se nos acabó la gasolina en medio de la nada.", "We ran out of gas in the middle of nowhere.",
        "English makes the person the subject: \"We ran out of gas\". Spanish makes the thing the subject («se nos acabó»)."),
      fb("My laptop is ___ battery. Do you have a charger?", "running out of", "Mi laptop [se está quedando sin] batería. ¿Tienes un cargador?",
        "\"Run out of\" in the continuous = be close to having none left."),
      mc("Which sentence is correct?", [
        "What did you run out of?",
        "Of what did you run out?",
        "What did you run of out?",
        "What did you run out?",
      ], "In questions the particles stay together after the verb, and the preposition goes at the end: \"What did you run out of?\""),
      tr("Ustedes vayan adelante. Enseguida los alcanzo.", "{You |}go {on |}ahead. I'll catch up with you in a {minute|moment|second}.",
        "\"Catch up with\" someone = reach a person who is ahead of you."),
      fb("This weekend I need to catch up ___ my emails.", "on", "Este fin de semana tengo que [ponerme al día con] mis correos.",
        "With things, it's \"catch up on\": work, sleep, emails, the news. With people, \"catch up with\"."),
      tr("Fue genial ponerme al día con mis compañeros de la universidad.", "It was great to catch up with my {college|university} {friends|classmates}.",
        "\"Catch up with\" a friend = meet and hear their news."),
      tr("Estoy intentando reducir el tiempo de pantalla.", "I'm trying to cut down on screen time.",
        "\"Cut down on\" = reduce how much you consume. Without an object, just \"cut down\"."),
      wo("I can't put up with his jokes anymore.", "Ya no aguanto sus bromas.",
        "Three-part verbs never split: \"put up with his jokes\"."),
      mc("Which sentence is correct?", [
        "My neighbor is very easy to get on with.",
        "My neighbor is very easy to get on with him.",
        "My neighbor is very easy to get with on.",
        "My neighbor is very easy with to get on.",
      ], "Ending with a preposition is natural in English: \"easy to get on with\". Don't add *him at the end."),
      mt("Match each adjective with its usual noun.", [
        ["heavy", "traffic"],
        ["strong", "coffee"],
        ["high", "temperature"],
        ["deep", "sleep"],
        ["close", "friend"],
        ["light", "sleeper"],
      ], "Collocations are pairs that native speakers expect. \"Heavy\" rain or traffic, \"strong\" coffee or wind, \"high\" prices or temperature."),
      mc("Translate: «Ayer hubo lluvia fuerte toda la tarde.»", [
        "There was heavy rain all afternoon yesterday.",
        "There was strong rain all afternoon yesterday.",
        "There was big rain all afternoon yesterday.",
        "There was hard rain strong all afternoon yesterday.",
      ], "«Lluvia fuerte» = \"heavy rain\", never *strong rain. \"Strong\" goes with wind."),
      tr("Necesito un café bien cargado.", ["I need a {really |very |}strong coffee.", "I need some {really |very |}strong coffee."],
        "\"Strong coffee\"; the opposite is \"weak coffee\", not *light coffee."),
      fb("Prices are very ___ in this part of town.", "high", "Los precios son muy [altos] en esta zona de la ciudad.",
        "Prices are \"high\" or \"low\". Things are expensive; prices are never *expensive."),
      tr("Mi vecino es un fumador empedernido.", "My neighbor is a heavy smoker.",
        "«Fumador empedernido» = \"heavy smoker\"."),
      tr("El niño tiene fiebre.", ["The {boy|child|kid} has a {high |}temperature.", "The {boy|child|kid} has a fever."],
        "\"A high temperature\" or \"a temperature\" = «fiebre». \"A fever\" is also very common in the US."),
      lc("At midnight the kids were fast asleep.", [
        "A medianoche los niños estaban profundamente dormidos.",
        "A medianoche los niños se durmieron rápido.",
        "A medianoche los niños seguían despiertos.",
        "A medianoche los niños tenían sueño.",
      ], "\"Fast asleep\" = deeply asleep. It has nothing to do with speed."),
      dc("It's three in the morning and I'm still wide awake.",
        "\"Wide awake\" = completely awake."),
      fb("It was ___ cold, so we stayed inside.", "bitterly", "Hacía un frío [que pelaba], así que nos quedamos dentro.",
        "\"Bitterly cold\" is the natural adverb + adjective pair for extreme cold."),
      mc("Which sentence is correct?", [
        "This hotel is highly recommended.",
        "This hotel is highly recommendable.",
        "This hotel is very recommendable.",
        "This hotel is high recommended.",
      ], "«Muy recomendable» = \"highly recommended\". *Recommendable is rarely used, and the adverb is \"highly\"."),
      tr("Después de la mudanza estaba completamente agotada.", "After the move I was {absolutely|really|completely} exhausted.",
        "Extreme adjectives like \"exhausted\" take \"absolutely\" or \"really\", not *very."),
      fb("Let's ___ a fifteen-minute break.", "take", "[Tomémonos] un descanso de quince minutos.",
        "\"Take a break\" («tomarse un descanso»). Note \"fifteen-minute\" with no -s."),
      tr("Más de cien estudiantes participaron en el concurso.", "More than {a|one} hundred students took part in the {competition|contest}.",
        "«Participar en» = \"take part in\", with \"in\"."),
      fb("The festival will ___ place in the park.", "take", "El festival [tendrá] lugar en el parque.",
        "\"Take place\" = happen, for events. It has no object."),
      mc("Translate: «¿Quieres tomar algo después del trabajo?»", [
        "Do you want to have a drink after work?",
        "Do you want to take a drink after work?",
        "Do you want to take something after work?",
        "Do you want to drink to something after work?",
      ], "Natural English \"has\" breakfast, a drink or a coffee. \"Take\" is for medicine."),
      wo("Can I have a look at your report?", "¿Puedo echar un vistazo a tu informe?",
        "«Echar un vistazo» = \"have a look\" (US also \"take a look\")."),
      mc("Translate: «Lo pasamos genial en la playa.»", [
        "We had a great time at the beach.",
        "We passed a great time at the beach.",
        "We had a great fun at the beach.",
        "We spent a great time in the beach.",
      ], "«Pasarlo bien» = \"have a good time\" or \"have fun\". \"Fun\" is uncountable, so never *a fun."),
      fb("Please ___ attention. This is important.", "pay", "Por favor, [presten] atención. Esto es importante.",
        "You \"pay\" attention, never *make or *put attention."),
      tr("Sigamos en contacto cuando te mudes.", ["Let's keep in touch when you move.", "Let's stay in touch when you move.", "Let's keep in touch after you move.", "Let's stay in touch after you move."],
        "«Mantener el contacto» = \"keep in touch\" (or \"stay in touch\")."),
      tr("Mi hermana nunca cumple sus promesas.", "My sister never keeps her promises.",
        "«Cumplir una promesa» = \"keep a promise\"; the opposite is \"break a promise\"."),
      mc("Which sentence is most natural in American English?", [
        "We need to make a decision before Friday.",
        "We need to take a decision before Friday.",
        "We need to do a decision before Friday.",
        "We need to have a decision before Friday.",
      ], "«Tomar una decisión» = \"make a decision\". \"Take a decision\" exists in formal British English, but \"make\" is always safe."),
      dc("We ran out of time, so we'll have to catch up on the rest tomorrow.",
        "\"Run out of\" (person as subject) and \"catch up on\" + thing."),
      sp("Could you keep an eye on the kids for ten minutes?", "\"Keep an eye on\" = watch, look after («vigilar»).",
        "Link \"keep an eye on\": KEE-pa-NAI-on.", "Say it in English: ¿Me vigilas a los niños diez minutos?"),
      sp("I'm trying to cut down on coffee, but it's hard.", "\"Cut down on\" never splits; the object goes at the end.",
        "Stress CUT and DOWN.", "Say it in English: Estoy intentando tomar menos café, pero es difícil."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Confused words, useful adverbs + whole unit
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Confused Words, Adverbs and the Whole Unit",
    "You will be able to choose correctly between say and tell, remember and remind, rise and raise, lie and lay, lose and miss, bring and take, borrow and lend, use actually, eventually, hardly, nearly, lately, at least and anyway, and combine them with the unit's phrasal verbs and collocations.",
    "Recap: tricky pairs and small adverbs",
    [
      "\"Tell\" + person (\"tell me\"), \"say\" + words (\"say hello\", \"say it to me\"); \"remind\" someone, \"remember\" yourself. \"Rise\" has no object (prices rise), \"raise\" has one (raise your hand); \"lie\" (lay, lain) = be flat, \"lay\" (laid) = put down. \"Lose\" your keys, \"miss\" the bus; \"bring\" here, \"take\" there; \"lend\" to someone, \"borrow\" from someone.",
      "\"Actually\" = «en realidad» (for «actualmente» say \"currently\"); \"eventually\" = «al final». \"Hardly\" = «apenas», already negative; \"nearly\" = «casi»; \"lately\" = «últimamente». \"At least\" = «al menos»; \"anyway\" = «de todas formas», or to change topic.",
    ],
    [
      ["He told me he was moving to Denver.", "Me dijo que se mudaba a Denver."],
      ["Can I borrow your umbrella?", "¿Me prestas el paraguas?"],
      ["I thought it was expensive, but actually it was cheap.", "Pensaba que era caro, pero en realidad era barato."],
      ["We eventually got home at two in the morning.", "Al final llegamos a casa a las dos de la mañana."],
    ],
    [
      mc("Which sentence is correct?", [
        "She told me the news.",
        "She said me the news.",
        "She told to me the news.",
        "She said the news me.",
      ], "\"Tell\" takes the person directly: \"told me\". \"Say\" needs \"to\" before a person: \"said to me\". *Said me is wrong."),
      fb("What did the doctor ___ to you?", "say", "¿Qué te [dijo] el médico?",
        "\"Say\" + \"to\" + person. With \"tell\" it would be \"What did the doctor tell you?\""),
      wo("He never tells the truth.", "Nunca dice la verdad.",
        "Fixed nouns with \"tell\": \"tell the truth\", \"tell a lie\", \"tell a story\", \"tell a joke\"."),
      tr("Recuérdame que compre boletos para el concierto.", "Remind me to buy tickets for the concert.",
        "\"Remind\" + person + to + verb. *Remember me to buy is a classic mistake."),
      fb("Unemployment ___ by two percent last year.", "rose", "El desempleo [subió] un dos por ciento el año pasado.",
        "\"Rise\" has no object (rise, rose, risen): things go up by themselves."),
      mc("Complete: \"The company is going to ___ its prices in January.\"", ["raise", "rise", "rose", "arise"],
        "\"Raise\" takes an object: someone raises something (prices, your hand, money)."),
      tr("Levanta la mano si sabes la respuesta.", "Raise your hand if you know the answer.",
        "\"Raise\" your hand: there's an object, so it's \"raise\", not \"rise\"."),
      mc("Which sentence is correct?", [
        "Yesterday I lay on the sofa all afternoon.",
        "Yesterday I laid on the sofa all afternoon.",
        "Yesterday I lied on the sofa all afternoon.",
        "Yesterday I layed on the sofa all afternoon.",
      ], "\"Lie\" (be flat) is irregular: lie, LAY, lain. \"Laid\" is the past of \"lay\" (put something down), and \"lied\" is from \"lie\" = «mentir»."),
      fb("Could you ___ the table? Dinner is almost ready.", "lay", "¿Puedes [poner] la mesa? La cena está casi lista.",
        "\"Lay the table\" = «poner la mesa». \"Lay\" takes an object (lay, laid, laid)."),
      tr("Perdí la cartera en el autobús.", ["I lost my wallet on the bus.", "I lost my purse on the bus."],
        "Something you had and can't find: \"lose\" (lost, lost). And note \"on the bus\"."),
      mc("Translate: «Me perdí la clase porque estaba enfermo.»", [
        "I missed the class because I was sick.",
        "I lost the class because I was sick.",
        "I lost myself the class because I was sick.",
        "I missed myself the class because I was sick.",
      ], "Something you didn't attend or catch is \"miss\": \"miss a class\", \"miss the bus\"."),
      tr("Extraño mucho a mis abuelos.", "I {miss my grandparents a lot|really miss my grandparents|miss my grandparents so much|miss my grandparents|really miss my grandparents a lot}.",
        "\"Miss\" also means «extrañar», «echar de menos»."),
      fb("Can you ___ me a glass of water from the kitchen?", "bring", "¿Me [traes] un vaso de agua de la cocina?",
        "\"Bring\" = movement toward the speaker («traer»). \"Take\" = movement away («llevar»)."),
      tr("¿Llevo algo a la cena?", ["Should I bring anything to the dinner?", "Shall I bring anything to the dinner?", "Should I bring something to the dinner?", "Do I need to bring anything to the dinner?"],
        "When you go to the listener's event, English uses \"bring\" (you move toward them)."),
      mc("Translate: «¿Me prestas tus audífonos?»", [
        "Can I borrow your headphones?",
        "Can you borrow me your headphones?",
        "Can I lend your headphones?",
        "Can you borrow your headphones to me?",
      ], "\"Borrow\" = take from someone; \"lend\" = give to someone. So \"Can I borrow...?\" or \"Can you lend me...?\", never *Can you borrow me...?"),
      tr("Le presté a mi hermano cien dólares.", ["I lent my brother {a|one} hundred dollars.", "I lent {a|one} hundred dollars to my brother."],
        "\"Lend\" (lent, lent) = give for a while."),
      lc("Actually, I've never tried Mexican food.", [
        "La verdad es que nunca he probado la comida mexicana.",
        "Actualmente no como comida mexicana.",
        "Al final, nunca probé la comida mexicana.",
        "Apenas he probado la comida mexicana.",
      ], "\"Actually\" = «en realidad», «la verdad es que». It never means «actualmente»."),
      tr("Actualmente trabaja en un hospital en Lima.", ["{He's|She's} currently working {at|in} a hospital in Lima.", "{He|She} currently works {at|in} a hospital in Lima.", "{He|She} works {at|in} a hospital in Lima {at the moment|now|right now}."],
        "«Actualmente» = \"currently\" or \"at the moment\". \"Actually\" is a false friend."),
      fb("We got lost three times, but we ___ found the restaurant.", "eventually", "Nos perdimos tres veces, pero [al final] encontramos el restaurante.",
        "\"Eventually\" = «al final», after a long time or a lot of effort. It doesn't mean «eventualmente»."),
      mc("Which sentence is correct?", [
        "I can hardly see the screen from here.",
        "I can't hardly see the screen from here.",
        "I can hard see the screen from here.",
        "I can hardly not see the screen from here.",
      ], "\"Hardly\" is already negative («apenas»), so it never goes with \"not\"."),
      tr("Casi nadie contestó mi correo.", "Hardly anyone {answered|replied to} my email.",
        "«Casi nadie» = \"hardly anyone\". Other combinations: \"hardly ever\", \"hardly anything\"."),
      wo("We hardly ever eat out these days.", "Casi nunca comemos fuera estos días.",
        "\"Hardly ever\" = «casi nunca», before the main verb."),
      mc("Choose the best option: \"She works really ___. She's always the last to leave.\"", ["hard", "hardly", "hardy", "harder than"],
        "\"Work hard\" = «trabajar mucho». \"Hardly\" means «apenas», the opposite idea."),
      tr("Casi me caigo por las escaleras.", "I {nearly|almost} fell down the stairs.",
        "«Casi» + past = \"nearly\" or \"almost\" + past simple."),
      fb("Have you been sleeping well ___?", "lately", "¿Has dormido bien [últimamente]?",
        "\"Lately\" = «últimamente», usually with the present perfect. It isn't the adverb of \"late\"."),
      tr("Llovió todo el fin de semana, pero al menos el hotel era cómodo.", "It rained all weekend, but at least the hotel was comfortable.",
        "\"At least\" introduces a positive point in a bad situation."),
      tr("Era caro, pero lo compré de todas formas.", "It was expensive, but I bought it anyway.",
        "\"Anyway\" at the end = «de todas formas», «igualmente». Write \"anyway\", not *anyways."),
      dc("Anyway, I have to go. Let's keep in touch.",
        "\"Anyway\" to close a topic, and the collocation \"keep in touch\"."),
      mt("Match the English with the Spanish.", [
        ["actually", "en realidad"],
        ["currently", "actualmente"],
        ["eventually", "al final"],
        ["hardly", "apenas"],
        ["lately", "últimamente"],
        ["at least", "al menos"],
      ], "Two false friends: \"actually\" isn't «actualmente», and \"eventually\" isn't «eventualmente»."),
      tr("Me dijo que había dejado el trabajo para dedicarse a la pintura.", ["{He|She} told me {he had quit his|she had quit her} job to take up painting.", "{He|She} told me {he had left his|she had left her} job to take up painting.", "{He|She} said {he had quit his|she had quit her} job to take up painting."],
        "\"Told me\" (person directly after \"tell\"), and \"take up\" a hobby."),
      tr("Al final se nos acabó el dinero y tuvimos que volver a casa.", "{Eventually|In the end} we ran out of money and had to {go|come} home.",
        "\"Eventually\" = «al final», and \"run out of\" with the person as subject."),
      mc("Which sentence is correct?", [
        "Prices have risen a lot lately, so I'm cutting down on eating out.",
        "Prices have raised a lot lately, so I'm cutting down eating out.",
        "Prices have risen a lot lately, so I'm cutting on down eating out.",
        "Prices have rose a lot lately, so I'm cutting down on eat out.",
      ], "\"Rise\" (no object, participle \"risen\"), \"lately\" with the present perfect, and \"cut down on\" + -ing (preposition, so -ing)."),
      dc("I nearly missed the flight because my alarm didn't go off.",
        "\"Nearly\" = «casi», \"miss\" a flight, and an alarm \"goes off\"."),
      sp("Actually, I don't agree. I think we should put it off.", "\"Actually\" softens a disagreement; \"put it off\" = postpone it (pronoun in the middle).",
        "Stress ACtually and OFF.", "Say it in English: La verdad es que no estoy de acuerdo. Creo que deberíamos aplazarlo."),
      sp("Can you lend me your notes? I missed the lecture.", "\"Lend me\" (not *borrow me) and \"miss\" a class or lecture.",
        "Say \"missed\" like MIST.", "Say it in English: ¿Me prestas tus apuntes? Me perdí la clase."),
    ],
  ),
];
