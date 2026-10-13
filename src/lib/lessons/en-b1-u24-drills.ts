// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u24-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u24 (too/enough, so/such and quantifiers): a short recap, then graded practice.

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

export const EN_B1_U24_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Too and enough (+ to, + for someone to), too much / many /
  // few / little, so and such
  // ---------------------------------------------------------------------
  lesson(
    1,
    "quantifiers",
    "Too, Enough, So & Such",
    "Say what is a problem with too and not enough, what is or isn't possible with too/enough + to, and how strong something is with so and such.",
    "Recap: too, enough, so and such",
    [
      "\"Too\" goes before an adjective and means there's a problem (\"too expensive\", \"much too late\"); \"enough\" goes after an adjective (\"warm enough\") but before a noun (\"enough chairs\"). Add \"to\" + verb for the result: \"too tired to drive\", \"old enough to vote\", \"too hot for me to sleep\". Before nouns, «demasiado» is \"too much\" or \"too many\".",
      "\"So\" + adjective with no noun (\"so kind\"), \"such (a)\" + adjective + noun (\"such a kind man\", \"such good weather\"), and \"so much/so many\" + noun. Add \"that\" for the result: \"It was so loud that I left.\"",
    ],
    [
      ["This coffee is too hot to drink.", "Este café está demasiado caliente para tomarlo."],
      ["Is the room big enough for six people?", "¿El cuarto es lo bastante grande para seis personas?"],
      ["There were too many cars on the road.", "Había demasiados carros en la carretera."],
      ["It was such a long day that I went straight to bed.", "Fue un día tan largo que me fui directo a la cama."],
    ],
    [
      mc(
        "«Este hotel es demasiado caro.»",
        ["This hotel is too expensive.", "This hotel is too much expensive.", "This hotel is very much expensive.", "This hotel is expensive too much."],
        "Before an adjective, «demasiado» is just \"too\". *Too much expensive is one of the most common Spanish-speaker mistakes.",
      ),
      fb(
        "The music is ___ loud. Can you turn it down?",
        ["too", "much too", "far too", "way too", "a bit too", "a little too"],
        "La música está [demasiado] fuerte. ¿La puedes bajar?",
        "\"Too\" + adjective = more than you want. To make it stronger, \"much/far/way too\"; softer, \"a bit too\". Never *too much loud.",
      ),
      fb(
        "Is your son old ___ to stay home alone?",
        "enough",
        "¿Tu hijo es [lo bastante] grande para quedarse solo en casa?",
        "\"Enough\" goes after the adjective: \"old enough\". Spanish puts «lo bastante» first, which leads to *enough old.",
      ),
      tr(
        "No tenemos suficiente tiempo.",
        ["We don't have enough time.", "We haven't got enough time."],
        "\"Enough\" goes before a noun, with no \"of\": \"enough time\", not *enough of time.",
      ),
      tr(
        "Este departamento no es lo bastante grande para nosotros.",
        "This apartment {isn't|is not} {big|large} enough for us.",
        "Adjective + \"enough\": \"big enough\", then \"for\" + person.",
      ),
      wo(
        "The test was far too difficult for most students",
        "El examen fue demasiado difícil para la mayoría de los estudiantes.",
        "\"Far\" makes \"too\" stronger and goes before it: \"far too difficult\".",
      ),
      mc(
        "Which sentence is correct?",
        ["She isn't tall enough to reach the shelf.", "She isn't enough tall to reach the shelf.", "She isn't tall enough for reach the shelf.", "She isn't enough tall for to reach the shelf."],
        "Adjective + \"enough\" + \"to\" + verb. «Para alcanzar» is \"to reach\", never *for reach.",
      ),
      tr(
        "Estoy demasiado cansado para cocinar.",
        "I'm too tired to cook.",
        "\"Too\" + adjective + \"to\" + verb. The meaning is already negative (I'm not going to cook), so don't add \"not\".",
      ),
      fb(
        "This suitcase is too heavy for ___ to carry.",
        "me",
        "Esta maleta pesa demasiado para que [yo] la cargue.",
        "\"For\" + object pronoun + \"to\": \"for me to carry\", never *for I. And don't add \"it\" at the end.",
      ),
      tr(
        "Hace demasiado frío para que los niños jueguen afuera.",
        "It's too cold for the {kids|children} to play outside.",
        "«Para que» + subjunctive becomes \"for\" + person + \"to\" + verb. No \"that\" here.",
      ),
      fb(
        "There's ___ traffic in this city.",
        "too much",
        "Hay [demasiado] tráfico en esta ciudad.",
        "Before an uncountable noun, «demasiado» is \"too much\". \"Too\" alone only goes with adjectives and adverbs.",
      ),
      fb(
        "We invited ___ people. There aren't enough chairs.",
        "too many",
        "Invitamos a [demasiada] gente. No hay suficientes sillas.",
        "\"People\" is plural in English, so it's \"too many people\", even though Spanish says «demasiada gente».",
      ),
      tr(
        "Comes demasiado rápido.",
        "You eat too {fast|quickly}.",
        "\"Too\" also goes before adverbs: \"too fast\".",
      ),
      mt(
        "Match the Spanish with the English.",
        [
          ["demasiado caro", "too expensive"],
          ["demasiada gente", "too many people"],
          ["demasiada azúcar", "too much sugar"],
          ["demasiado poco dinero", "too little money"],
          ["demasiado pocas sillas", "too few chairs"],
        ],
        "\"Too\" + adjective; \"too many/too few\" + plural nouns; \"too much/too little\" + uncountable nouns.",
      ),
      lc(
        "The water isn't warm enough for the kids to swim.",
        ["No, the water is too cold", "Yes, the water is perfect", "No, the kids are too young", "Yes, but only for a short time"],
        "\"Not warm enough to swim\" = too cold to swim.",
        "Can the kids swim?",
      ),
      say(
        "It's too late to call him now.",
        "Ya es demasiado tarde para llamarlo.",
        "\"Too\" is stressed and long: /tuː/.",
        "\"Too\" + adjective + \"to\" + verb.",
      ),
      dc(
        "We didn't have enough money to buy the tickets.",
        "\"Enough\" + noun + \"to\" + verb. \"Enough\" is /ɪˈnʌf/: the \"gh\" sounds like \"f\".",
      ),
      mc(
        "«Es un día tan bonito.»",
        ["It's such a beautiful day.", "It's so beautiful day.", "It's a so beautiful day.", "It's such beautiful day."],
        "With a noun, use \"such a\" + adjective + noun, with \"a\" after \"such\". \"So\" can't go before a noun phrase.",
      ),
      fb(
        "Your daughter is ___ smart!",
        "so",
        "¡Tu hija es [tan] lista!",
        "\"So\" + adjective with no noun after it. \"So\" is positive, perfect for compliments; \"too smart\" would sound like a problem.",
      ),
      fb(
        "They're ___ kind people.",
        "such",
        "Son personas [tan] amables.",
        "Plural noun: \"such\" + adjective + noun, with no \"a\".",
      ),
      tr(
        "Nunca he visto tanta gente en la playa.",
        "I've never seen so many people {on|at} the beach.",
        "«Tanta gente» = \"so many people\", because \"people\" is plural.",
      ),
      tr(
        "Tengo tanto trabajo esta semana.",
        ["I have so much work this week.", "I've got so much work this week.", "I have such a lot of work this week."],
        "\"Work\" is uncountable, so «tanto trabajo» = \"so much work\" (or \"such a lot of work\").",
      ),
      tr(
        "Fue una película tan aburrida que me dormí.",
        ["It was such a boring {movie|film} {that |}I fell asleep.", "The {movie|film} was so boring {that |}I fell asleep."],
        "\"Such a\" + adjective + noun + \"that\", or \"so\" + adjective + \"that\". Not *so boring movie.",
      ),
      wo(
        "The food was so good that we came back the next day",
        "La comida estaba tan buena que volvimos al día siguiente.",
        "\"So\" + adjective + \"that\" + result.",
      ),
      lc(
        "She's such a good teacher that all her students pass.",
        ["She's an excellent teacher", "She's too strict", "Her students don't study enough", "She doesn't teach well"],
        "\"Such a good teacher that...\" = very good, with a positive result.",
        "What does the speaker say?",
      ),
      mc(
        "Which sentence is correct?",
        ["The weather was so nice that we ate outside.", "It was so nice weather that we ate outside.", "It was such a nice weather that we ate outside.", "The weather was such nice that we ate outside."],
        "\"Weather\" is uncountable: \"such nice weather\" (no \"a\") or \"The weather was so nice\". *So nice weather mixes the two patterns.",
      ),
      tr(
        "Me dijo que estaba demasiado ocupada para ayudarme.",
        ["She told me {that |}she was too busy to help me.", "She said {that |}she was too busy to help me."],
        "Reported speech (\"told me she was\") + \"too\" + adjective + \"to\" + verb.",
      ),
      fb(
        "You're not ___ to drive a car.",
        "old enough",
        "No tienes [la edad suficiente] para manejar un carro.",
        "«Tener la edad suficiente» = \"be old enough\". Not *enough old and not *enough age.",
      ),
      tr(
        "La caja era demasiado pesada para levantarla.",
        ["The box was too heavy to {lift|pick up}.", "The box was too heavy for me to {lift|pick up}."],
        "Don't repeat the object: *too heavy to lift it is wrong, because \"the box\" is already the subject.",
      ),
      dc(
        "The movie was so long that half the audience left.",
        "\"So long that\": \"that\" is weak, /ðət/.",
      ),
      say(
        "You speak English so well!",
        "¡Hablas inglés tan bien!",
        "Stress \"so\" and \"well\" to sound enthusiastic.",
        "\"So\" + adverb for a compliment. \"Too well\" would sound like a problem.",
      ),
      tr(
        "No hay suficientes camas para todos.",
        "There {aren't|are not} enough beds for {everyone|everybody}.",
        "\"Enough\" never changes: «suficientes camas» = \"enough beds\" (no *enoughs).",
      ),
      tr(
        "Llegamos demasiado tarde para ver el principio de la película.",
        "We {arrived|got there} too late to see the {beginning|start} of the {movie|film}.",
        "\"Too late to\" + verb. Not *too late for see.",
      ),
      wo(
        "Is it warm enough for us to eat outside?",
        "¿Hace suficiente calor para que comamos afuera?",
        "Adjective + \"enough\" + \"for\" + person + \"to\" + verb.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. A few / a little / few / little / plenty / hardly any;
  // all, both, either, neither, none; every, each, whole; whole-unit mix
  // ---------------------------------------------------------------------
  lesson(
    2,
    "quantifiers",
    "Few, Little, Both, Neither, Every & Each",
    "Talk about amounts with a few, a little, plenty of and hardly any, about two or more things with both, either, neither, all and none, and use every, each and whole correctly.",
    "Recap: quantifiers",
    [
      "\"A few\" (plural) and \"a little\" (uncountable) mean «unos pocos, un poco» and sound positive; \"few\" and \"little\" mean «pocos, poco»: not enough. \"Plenty of\" = more than enough, and \"hardly any\" = almost none, with no extra \"not\".",
      "For two, use \"both\" (plural verb), \"either\" and \"neither\"; for three or more, \"all\" and \"none of\". \"Every\" + singular noun («todos los días» = \"every day\"), \"each\" one by one, \"all day\" or \"the whole day\", and \"everyone/everything\" + singular verb.",
    ],
    [
      ["I need a little help with this.", "Necesito un poco de ayuda con esto."],
      ["Both of my sisters work in a hospital.", "Mis dos hermanas trabajan en un hospital."],
      ["Neither of the hotels has a pool.", "Ninguno de los dos hoteles tiene alberca."],
      ["Everyone in the office is talking about it.", "Todos en la oficina están hablando de eso."],
    ],
    [
      mc(
        "«Tengo unos pocos amigos en Boston.»",
        ["I have a few friends in Boston.", "I have a little friends in Boston.", "I have few of friends in Boston.", "I have a few of friends in Boston."],
        "\"A few\" + plural countable noun, with no \"of\". \"A little\" is only for uncountable nouns.",
      ),
      fb(
        "Can I have ___ milk in my coffee?",
        ["a little", "some"],
        "¿Me pones [un poco de] leche en el café?",
        "\"Milk\" is uncountable, so «un poco de» = \"a little\" (or \"some\"). Not *a few milk.",
      ),
      fb(
        "___ people came to the meeting, so we canceled it.",
        ["Few", "Very few", "Not many"],
        "[Poca] gente vino a la reunión, así que la cancelamos.",
        "Without \"a\", \"few\" is negative: not enough. \"A few people came\" would sound positive.",
      ),
      tr(
        "Hay muy poca leche en el refri.",
        ["There's very little milk in the {fridge|refrigerator}.", "There isn't much milk in the {fridge|refrigerator}."],
        "«Muy poca» (uncountable) = \"very little\", or \"not much\" in conversation. Not *very few milk.",
      ),
      tr(
        "No te apures, tenemos tiempo de sobra.",
        ["Don't {hurry|rush|worry}, we have plenty of time.", "Don't {hurry|rush|worry}, we've got plenty of time."],
        "«De sobra» = \"plenty of\". Don't forget \"of\" before the noun.",
      ),
      fb(
        "There's ___ coffee left. Can you buy some?",
        ["hardly any", "almost no"],
        "No queda [casi nada de] café. ¿Puedes comprar?",
        "\"Hardly any\" = almost none. \"Hardly\" is already negative, so no \"isn't\": not *There isn't hardly any.",
      ),
      mc(
        "Which sentence is correct?",
        ["There's hardly any food in the house.", "There isn't hardly any food in the house.", "There's hardly no food in the house.", "There's any hardly food in the house."],
        "Only one negative in English: \"hardly any\". Spanish double negatives («no hay casi nada») don't work here.",
      ),
      tr(
        "Casi nadie sabe la respuesta.",
        ["Hardly {anyone|anybody} knows the answer.", "Almost {nobody|no one} knows the answer."],
        "«Casi nadie» = \"hardly anyone\" or \"almost nobody\", with a singular verb (\"knows\").",
      ),
      lc(
        "Quite a few people complained about the noise.",
        ["A fairly large number", "Almost nobody", "Just one person", "Only two or three people"],
        "\"Quite a few\" means «bastantes»: a fairly large number, not a small one.",
        "How many people complained?",
      ),
      wo(
        "We still have a little money left for dinner",
        "Todavía nos queda un poco de dinero para la cena.",
        "\"A little\" + uncountable noun, positive: there's some.",
      ),
      mc(
        "«Los dos hermanos son ingenieros.»",
        ["Both brothers are engineers.", "The both brothers are engineers.", "Both brothers is an engineer.", "Both of brothers are engineers."],
        "\"Both\" + noun, with no \"the\" before \"both\" and a plural verb. With \"of\" you need \"the\": \"both of the brothers\".",
      ),
      fb(
        "My parents ___ speak English.",
        "both",
        "Mis papás hablan inglés [los dos].",
        "\"Both\" can go after the subject and before a normal verb: \"My parents both speak\".",
      ),
      tr(
        "Ninguno de los dos restaurantes estaba abierto.",
        ["Neither of the restaurants {was|were} open.", "Neither restaurant was open."],
        "«Ninguno de los dos» = \"neither\". It's already negative, so the verb is positive: not *wasn't open.",
      ),
      fb(
        "You can pay with ___ card, Visa or Mastercard.",
        "either",
        "Puede pagar con [cualquiera de las dos] tarjetas, Visa o Mastercard.",
        "\"Either\" = one or the other of two, with a singular noun: \"either card\".",
      ),
      tr(
        "No me gusta ninguno de los dos vestidos.",
        ["I don't like either of the dresses.", "I don't like either dress.", "I like neither of the dresses.", "I like neither dress."],
        "With a negative verb, use \"either\"; with a positive verb, \"neither\". Never both negatives: *I don't like neither.",
      ),
      fb(
        "___ of my friends could come to my birthday. I was really sad.",
        "None",
        "[Ninguno] de mis amigos pudo venir a mi cumpleaños. Me puse muy triste.",
        "For three or more, «ninguno de» = \"none of\", with a positive verb.",
      ),
      tr(
        "Todos los estudiantes aprobaron.",
        ["All {the |of the |}students passed.", "Every student passed."],
        "\"All (the)\" + plural noun + plural verb, or \"every\" + singular noun.",
      ),
      mt(
        "Match the Spanish with the English.",
        [
          ["los dos", "both"],
          ["ninguno de los dos", "neither"],
          ["cualquiera de los dos", "either"],
          ["ninguno (de tres o más)", "none"],
          ["cada uno, por separado", "each"],
        ],
        "\"Both\", \"either\" and \"neither\" are for two; \"none\" is for three or more; \"each\" looks at things one by one.",
      ),
      say(
        "Neither of us knew what to do.",
        "Ninguno de los dos sabíamos qué hacer.",
        "\"Neither\" can be /ˈniːðər/ or /ˈnaɪðər/; both are correct.",
        "\"Neither of us\" + a positive verb: \"knew\", not *didn't know.",
      ),
      dc(
        "They both work at the same bank, but neither of them likes it.",
        "\"They both work\" (both before the verb) and \"neither of them likes\" (singular verb in careful English).",
      ),
      mc(
        "«Voy al gimnasio todos los días.»",
        ["I go to the gym every day.", "I go to the gym all the days.", "I go to the gym every days.", "I go to the gym each days."],
        "«Todos los días» = \"every day\": \"every\" + singular noun. *All the days is a direct calque.",
      ),
      fb(
        "We visit my grandmother ___ Sunday.",
        "every",
        "Visitamos a mi abuela [todos los] domingos.",
        "Regular habits: \"every\" + singular noun (\"every Sunday\").",
      ),
      tr(
        "Cada estudiante tiene su propia computadora.",
        ["{Each|Every} student has {their|his or her} own computer."],
        "\"Each/every\" + singular noun + singular verb (\"has\"). Refer back with \"their\".",
      ),
      tr(
        "Me pasé todo el día limpiando el departamento.",
        ["I spent all day cleaning the apartment.", "I spent the whole day cleaning the apartment."],
        "«Todo el día» = \"all day\" (no \"the\") or \"the whole day\". Not *all the day.",
      ),
      fb(
        "Everybody ___ tired after the trip.",
        "was",
        "Todos [estaban] cansados después del viaje.",
        "\"Everybody\" is grammatically singular: \"was\", not *were. Spanish «todos» is plural, which causes the mistake.",
      ),
      tr(
        "Todo está listo para la fiesta.",
        "Everything is ready for the party.",
        "«Todo» as a pronoun = \"everything\", with a singular verb. *All is ready sounds strange.",
      ),
      wo(
        "The tickets cost thirty dollars each",
        "Los boletos cuestan treinta dólares cada uno.",
        "\"Each\" can go at the end: «cada uno».",
      ),
      lc(
        "I worked the whole weekend.",
        ["They worked all weekend", "They worked every weekend", "They worked part of the weekend", "They didn't work at all"],
        "\"The whole weekend\" = \"all weekend\" = «todo el fin de semana».",
        "What does the speaker mean?",
      ),
      mc(
        "Which sentence is correct?",
        ["Everyone in my family loves soccer.", "Everyone in my family love soccer.", "All the people in my family loves soccer.", "Every people in my family love soccer."],
        "\"Everyone\" + singular verb (\"loves\"); \"all the people\" + plural verb; \"every\" + singular noun.",
      ),
      tr(
        "Hay demasiados turistas y muy pocos hoteles.",
        ["There are too many tourists and {very few|too few|not enough} hotels."],
        "Plural nouns: \"too many\" and \"very few\" (or \"not enough\"). Not *too much tourists.",
      ),
      tr(
        "Los dos hoteles eran tan caros que nos quedamos con unos amigos.",
        ["Both {|of the }hotels were so expensive {that |}we stayed with {some |}friends."],
        "\"Both\" + plural verb, and \"so\" + adjective + \"that\" for the result.",
      ),
      dc(
        "Hardly any of my classmates live near the school.",
        "\"Hardly any of\" + the/my + noun = almost none.",
      ),
      say(
        "Each of us brought a little food for the picnic.",
        "Cada uno de nosotros trajo un poco de comida para el picnic.",
        "Link \"each of\": /iːtʃ əv/.",
        "\"Each of\" + pronoun, and \"a little\" + uncountable noun.",
      ),
      tr(
        "Ninguno de los cinco tenía suficiente dinero para el taxi.",
        ["None of the five {|of us }had enough money for {the|a} {taxi|cab}."],
        "Three or more: \"none of\", with a positive verb. \"Enough\" + noun.",
      ),
    ],
  ),
];
