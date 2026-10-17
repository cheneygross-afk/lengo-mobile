// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u22-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u22 (emphasis: clefts, so and such, contrastive stress, the more ..., the more): a short recap, then graded practice.
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
  slug: `en-b2-${topic}-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});


export const EN_B2_U22_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. What I love about ... is; so and such; the thing I can't
  // stand; lo que (what / , which / everything); it-clefts and the one
  // who; so ... that, so much, so many; such good food, much too, enough
  // ---------------------------------------------------------------------
  lesson(
    1,
    "emphasis-clefts-so-such",
    "What I Love Is ..., It Was Her Who ...",
    "You will be able to put the key idea at the end with \"what\" and \"it\" clefts, translate «lo que», «tan» and «tanto» correctly, and fix the classic errors with \"such\", \"too\" and \"enough\".",
    "Recap: saving the important part for the end",
    [
      "Wh-clefts: \"What I love about my city is the food\" («lo que me encanta de...»), with \"about\", never *of. «Lo que» commenting on a whole clause is \", which\": \"He was late, which annoyed me\". «Todo lo que» is \"everything (that)\" or \"all (that)\", never *all what. It-clefts: \"It was my brother who called\"; in speech also \"He was the one who called\".",
      "\"So\" + adjective, \"such (a)\" + adjective + noun: \"so tired\", \"such a long day\", \"such good food\" (uncountable, no \"a\"). \"So much\" goes with verbs and uncountable nouns, \"so many\" with plural nouns, never before an adjective. \"Much too\" + adjective (*too much sweet), adjective + \"enough\" (*enough cold).",
    ],
    [
      ["What I love about weekends is sleeping late.", "Lo que me encanta de los fines de semana es dormir hasta tarde."],
      ["The printer broke again, which ruined my morning.", "La impresora se volvió a descomponer, lo que me arruinó la mañana."],
      ["It was my aunt who taught me to drive.", "Fue mi tía quien me enseñó a manejar."],
      ["The soup was much too salty and not hot enough.", "La sopa estaba demasiado salada y no lo bastante caliente."],
    ],
    [
      // --- wh-clefts about yourself
      fb("What I love ___ my neighborhood is the parks.", "about", "Lo que me encanta [de] mi barrio son los parques.",
        "«De» here is \"about\": \"what I love about my neighborhood\". *What I love of my neighborhood is a calque. After the clause, \"is\" is normal even with a plural focus."),
      wo("What I like most about this city is the weather.", "Lo que más me gusta de esta ciudad es el clima.",
        "«Más» goes after the verb as \"most\": \"what I like most\". The pattern is what + subject + verb + is + focus."),
      tr("Lo que odio de los aeropuertos es la espera.", [
        "What I hate about airports is {the waiting|waiting|all the waiting}.",
      ], "Wh-cleft: \"What I hate about ...\" + \"is\" + focus. «Lo que» at the start is simply \"what\", never *the what or *that."),
      tr("Lo que no soporto es la gente que habla por teléfono en el cine.", [
        "{What I can't stand|What I cannot stand|The thing I can't stand|The thing that I can't stand} is people {who|that} talk on the phone {at the movies|in the movie theater|in the cinema}.",
      ], "\"What I can't stand is ...\" or \"The thing I can't stand is ...\". After the frame, a noun followed by a relative clause: \"people who talk\"."),
      fb("What drives me ___ is when the bus is late.", "crazy", "Lo que me [vuelve loco] es cuando el autobús llega tarde.",
        "\"What drives me crazy is ...\" is a common frame for pet peeves. After it, \"when\" + a clause describes the situation."),
      mc("Which sentence means «Me molesta el ruido»?", [
        "The noise bothers me.",
        "The noise molests me.",
        "The noise is molesting me.",
        "I molest the noise.",
      ], "«Molestar» = \"bother\" or \"annoy\". \"Molest\" is a false friend that means to abuse someone sexually, so it's a serious mistake here."),
      // --- so and such
      fb("This weekend went ___ fast!", "so", "¡Este fin de semana se pasó [tan] rápido!",
        "\"So\" + adjective or adverb on its own: \"so fast\". It's more emotional than \"very\"."),
      fb("It's ___ beautiful beach.", "such a", "Es [una playa tan] bonita.",
        "Singular countable noun: \"such a\" + adjective + noun, with the article after \"such\"."),
      tr("Mi jefa es una persona tan organizada.", [
        "My boss is such an organized person.",
      ], "«Una persona tan ...» = \"such a/an ... person\". \"An\" because \"organized\" starts with a vowel sound. Never *so organized person."),
      tr("Lo que me molesta es cuando la gente no contesta los mensajes.", [
        "What {annoys|bothers} me is when people {don't|do not} {answer|reply to|respond to} {messages|their messages|texts}.",
      ], "\"What annoys me is when ...\" + clause. \"People\" is plural: \"people don't\", never *people doesn't."),
      // --- lo que: what / , which / everything
      fb("He forgot my birthday, ___ really hurt me.", "which", "Se olvidó de mi cumpleaños, [lo que] me dolió mucho.",
        "«Lo que» commenting on the whole previous clause = comma + \"which\". \"What\" and \"that\" are wrong here."),
      mc("Which sentence is correct?", [
        "The train was canceled, which meant we had to take a taxi.",
        "The train was canceled, what meant we had to take a taxi.",
        "The train was canceled, that meant we had to take a taxi.",
        "The train was canceled, the which meant we had to take a taxi.",
      ], "A comment on the whole clause takes \", which\". Spanish «lo que» tempts learners into *what; \"that\" never follows a comma in a relative clause."),
      tr("No entiendo lo que dice el doctor.", [
        "I {don't|do not} understand what the doctor {is saying|says}.",
      ], "«Lo que» after a verb = \"what\". The word order stays like a statement: \"what the doctor is saying\", not *what is saying the doctor."),
      tr("Todo lo que necesitas está en la mochila.", [
        "{Everything|Everything that|All} you need is in the backpack.",
      ], "«Todo lo que» = \"everything (that)\" or \"all (that)\". Never *all what or *everything what."),
      fb("___ I want is a hot shower.", "All", "[Lo único que] quiero es una ducha caliente.",
        "«Lo único que» = \"All (that)\": \"All I want is ...\". It sounds more natural than *The only thing what."),
      // --- it-clefts and the one who
      tr("Fue mi hermano quien encontró las llaves.", [
        "It was my brother {who|that} found the keys.",
        "My brother was the one {who|that} found the keys.",
      ], "«Fue ... quien» = \"It was ... who/that\". \"The one who\" is a natural alternative in conversation."),
      wo("It was in Peru that I learned to cook.", "Fue en Perú donde aprendí a cocinar.",
        "With a place or time in focus, the it-cleft normally uses \"that\": \"It was in Peru that ...\". Spanish «donde» doesn't change the pattern."),
      mc("Which sentence is correct?", [
        "It was my grandparents who taught me to swim.",
        "It were my grandparents who taught me to swim.",
        "Were my grandparents who taught me to swim.",
        "It was my grandparents which taught me to swim.",
      ], "The verb stays \"was\" even with a plural focus, \"it\" can't be dropped, and people take \"who\" or \"that\", not \"which\"."),
      tr("Fue ella quien me lo recomendó.", [
        "She was the one {who|that} recommended it{ to me|}.",
        "It was her {who|that} recommended it{ to me|}.",
      ], "Everyday English: \"She was the one who ...\" or \"It was her who ...\". \"It was she who\" is very formal. \"Recommend\" takes \"to me\", not *recommended me it."),
      // --- so ... that, so much, so many
      mc("Which sentence is correct?", [
        "I was so tired that I went to bed at eight.",
        "I was so much tired that I went to bed at eight.",
        "I was such tired that I went to bed at eight.",
        "I was very much tired that I went to bed at eight.",
      ], "«Tan» + adjective = \"so\" + adjective. \"Much\" never goes directly before an adjective, and \"such\" needs a noun."),
      fb("There were ___ people at the airport that we almost missed the plane.", "so many", "Había [tanta] gente en el aeropuerto que casi perdimos el avión.",
        "«Tanta gente» = \"so many people\", because \"people\" is plural. *So much people is the classic error."),
      fb("She studied ___ that she passed every exam.", "so much", "Estudió [tanto] que aprobó todos los exámenes.",
        "«Tanto» after a verb = \"so much\": \"studied so much that ...\"."),
      tr("Había tanto ruido que no podía concentrarme.", [
        "There was so much noise {that|} I couldn't concentrate.",
        "It was so noisy {that|} I couldn't concentrate.",
      ], "Uncountable noun: \"so much noise\". Or use the adjective: \"so noisy\". Never *so much noisy."),
      // --- correct the learner: food, too, enough
      mc("Which sentence is correct?", [
        "They serve such good food here.",
        "They serve such a good food here.",
        "They serve so good food here.",
        "They serve a such good food here.",
      ], "\"Food\" in general is uncountable, so no \"a\": \"such good food\". For one lunch or dinner, use the countable word \"meal\"."),
      tr("Fue una comida tan buena.", [
        "It was such a {good|great} meal.",
      ], "«Una comida» meaning one lunch or dinner = \"a meal\", which is countable, so \"such a good meal\" is right."),
      fb("The coffee was ___ sweet for me.", ["much too", "far too", "way too", "too"], "El café estaba [demasiado] dulce para mí.",
        "\"Too\" + adjective, made stronger with \"much\" or \"far\" before it: \"much too sweet\". *Too much sweet is wrong: \"too much\" goes with nouns and verbs."),
      fb("The room wasn't ___ for the whole team.", "big enough", "La sala no era [lo bastante grande] para todo el equipo.",
        "\"Enough\" goes after an adjective: \"big enough\". Spanish «lo bastante grande» leads to *enough big."),
      tr("No tenemos suficientes sillas para todos.", [
        "We {don't|do not} have enough chairs for {everyone|everybody}.",
        "We haven't got enough chairs for {everyone|everybody}.",
      ], "Before a noun, \"enough\" comes first: \"enough chairs\". After an adjective it comes last: \"big enough\"."),
      mc("Your friend says «¡La pizza estaba demasiado buena!» and means it was wonderful. How do you say it?", [
        "The pizza was so good!",
        "The pizza was too good!",
        "The pizza was too much good!",
        "The pizza was enough good!",
      ], "\"Too\" is always negative in English: \"too good\" suggests a problem. For enthusiasm, use \"so good\"."),
      tr("Este restaurante es más barato que el de al lado.", [
        "This restaurant is cheaper than the one next door.",
      ], "One-syllable adjective: \"cheaper\", never *more cheap. «El de al lado» = \"the one next door\"."),
      // --- mix
      mt("Match each English pattern with its Spanish meaning.", [
        ["What I love is ...", "Lo que me encanta es ..."],
        [", which annoyed everyone", ", lo que molestó a todos"],
        ["It was Ana who ...", "Fue Ana quien ..."],
        ["so much traffic", "tanto tráfico"],
        ["so many cars", "tantos carros"],
      ], "«Lo que» is \"what\" at the start and \", which\" after a clause; «fue ... quien» is an it-cleft; «tanto» is \"so much\" with uncountable nouns and \"so many\" with plurals."),
      lc("What I love about Sundays is the silence.", [
        "Lo que me encanta de los domingos es el silencio.",
        "Me encantan los domingos en silencio.",
        "Lo que odio de los domingos es el silencio.",
        "¿Qué es lo que te encanta de los domingos?",
      ], "A wh-cleft statement: what + I love + about Sundays + is + focus. It's not a question: the word order is subject + verb."),
      dc("The portions were huge, but the service was so slow.",
        "\"Huge\" is an extreme adjective (no \"very\"), and \"so\" + adjective on its own: \"so slow\"."),
      dc("It was my sister who found this restaurant.",
        "It-cleft: \"It was\" + focus + \"who\" + clause. It puts the stress on \"my sister\", not someone else."),
      sp("The thing I can't stand is waiting in line for so long.",
        "\"The thing I can't stand is\" + -ing. \"So long\" = «tanto tiempo».",
        "Stress \"can't\" and \"stand\", and say \"can't\" with a clear t in American English.",
        "Say it in English: «Lo que no soporto es esperar en la fila tanto tiempo.»"),
      sp("It was such a good meal that we're going back next week.",
        "\"Such a\" + adjective + countable \"meal\", then \"that\" + result. The present continuous gives a future arrangement.",
        "Link \"such a\" as \"suh-chuh\" and stress \"good\" and \"back\".",
        "Say it in English: «Fue una comida tan buena que volvemos la semana que viene.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Contrastive stress and emphatic do; quick-fire quantifiers;
  // food and city vocabulary for comparing; by far, relatives; the more
  // ..., the more; What I did was ...; then the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    2,
    "emphasis-stress-patterns",
    "I DO Like It, What I Did Was Call",
    "You will be able to stress the word you mean, say «sí que» and «yo no, pero ella sí» with an auxiliary, focus on an action with \"What I did was ...\", and combine every emphasis and comparison pattern of the unit.",
    "Recap: stress, auxiliaries and action clefts",
    [
      "English shows contrast by stressing a word, not by moving it: \"I didn't say SHE took it\" (someone else did). «Sí que» becomes a stressed auxiliary: \"I DO like it\", \"She DID call\" (base form after \"did\"). «Yo no, pero ella sí» is \"I don't, but she DOES\", never *but she yes.",
      "To focus on an action: \"What I did was call the police\" (base form, no \"that\"); for an event: \"What happened was that ...\". Double comparatives keep \"the\" in both halves: \"The more coffee I drink, the worse I sleep\". Keep using \"unlike\", \"on the other hand\", \"by far\" and relative clauses (\"the town where I grew up\") for precise descriptions.",
    ],
    [
      ["I DID send the email. Check your spam folder.", "Sí que mandé el correo. Revisa la carpeta de spam."],
      ["My sister can't cook, but I CAN.", "Mi hermana no sabe cocinar, pero yo sí."],
      ["What I did was turn off my phone for a week.", "Lo que hice fue apagar el celular una semana."],
      ["The longer you wait, the harder it gets.", "Cuanto más esperas, más difícil se pone."],
    ],
    [
      // --- contrastive stress and emphatic auxiliaries
      mc("\"I didn't say SHE took it.\" What does the speaker mean?", [
        "Someone else took it.",
        "I only hinted it.",
        "She only borrowed it.",
        "She took something else.",
      ], "The stressed word is the one being contrasted. Stress on \"she\" means: it was another person who took it."),
      mc("You are correcting a coworker who thinks your flight is on Tuesday. Which word do you stress in \"No, I'm flying on Thursday\"?", [
        "Thursday",
        "flying",
        "I'm",
        "on",
      ], "Stress the corrected information and keep the rest flat. Spanish speakers tend to stress the last word anyway, but in English the correction must stand out."),
      fb("—You don't like my cooking. —I ___ like it! It's delicious.", "do", "—No te gusta cómo cocino. —¡[Sí que] me gusta! Está buenísimo.",
        "«Sí que» in the present simple = stressed \"do\" + base form: \"I DO like it\"."),
      tr("Yo no tomo café, pero mi esposa sí.", [
        "I {don't|do not} drink coffee, but my wife does.",
      ], "«Pero mi esposa sí» = \"but my wife DOES\": the auxiliary replaces Spanish «sí». Never *but my wife yes."),
      tr("Ella no sabe manejar, pero yo sí.", [
        "She {can't|cannot} drive, but I can.",
        "She {doesn't|does not} know how to drive, but I do.",
      ], "Repeat the auxiliary of the first half: \"can't ... but I CAN\", or \"doesn't know ... but I DO\"."),
      mc("Which sentence is correct?", [
        "She did call, but you were asleep.",
        "She did called, but you were asleep.",
        "She did calls, but you were asleep.",
        "She yes called, but you were asleep.",
      ], "Emphatic \"did\" is followed by the base form: \"did call\", never *did called. Spanish «sí que llamó» has no word-for-word equivalent."),
      lc("I WAS listening!", [
        "¡Que sí te estaba escuchando!",
        "¿Me estabas escuchando?",
        "No te estaba escuchando.",
        "Estaba escuchando música.",
      ], "When the verb already has an auxiliary (\"was\"), you stress that auxiliary instead of adding \"do\"."),
      // --- quick-fire: quantifiers, too, enough
      fb("There were ___ people at the concert.", ["a lot of", "lots of", "many"], "Había [mucha] gente en el concierto.",
        "«Mucha gente» = \"a lot of people\": \"people\" is plural, so never *much people. In positive sentences \"a lot of\" is the most natural choice."),
      tr("Es demasiado tarde para llamar a mi abuela.", [
        "It's {much |far |}too late to call my {grandmother|grandma}.",
      ], "\"Too\" + adjective (\"too late\"), made stronger with \"much\" or \"far\" before it. Never *too much late."),
      wo("My brother isn't tall enough to play basketball.", "Mi hermano no es lo bastante alto para jugar básquetbol.",
        "\"Enough\" goes after the adjective: \"tall enough\", then \"to\" + verb."),
      // --- food culture
      mc("Your friend's grandmother cooked for you. How do you say «La comida estaba muy rica»?", [
        "The food was really tasty.",
        "The food was very rich.",
        "The food was very rich of taste.",
        "The food was absolutely tasty.",
      ], "«Rico» about food = \"tasty\" or \"delicious\". \"Rich\" means heavy, full of butter or cream. \"Tasty\" is an ordinary adjective, so \"really\" or \"very\", not \"absolutely\"."),
      fb("Ceviche is a typical Peruvian ___.", "dish", "El ceviche es un [plato] típico peruano.",
        "«Plato» meaning the food is \"dish\". The object is a \"plate\", and part of a meal is a \"course\"."),
      fb("For the main ___, I had chicken with rice.", "course", "De [plato] principal comí pollo con arroz.",
        "Part of a meal is a \"course\": \"the first course\", \"the main course\"."),
      tr("En México se cena más tarde que en Estados Unidos.", [
        "{People in Mexico|Mexicans} {have|eat} dinner later than {people |}in the {US|United States|U.S.}.",
        "Dinner in Mexico is later than in the {US|United States|U.S.}.",
      ], "English has no single verb for «cenar»: \"have dinner\" or \"eat dinner\". General statements about people take no article: \"Mexicans\", not *the Mexicans."),
      tr("El té de aquí no es ni de lejos tan bueno como el de Londres.", [
        "The tea here {isn't|is not} {nearly|nowhere near} as good as {the tea |}in London.",
      ], "«Ni de lejos tan ... como» = \"not nearly as ... as\" or \"nowhere near as ... as\": a big difference."),
      mc("Which sentence is correct?", [
        "Americans usually have dinner early.",
        "The Americans usually have dinner early.",
        "Americans usually have the dinner early.",
        "Americans usually dinner early.",
      ], "General statement about a people: no \"the\". Meals take no article: \"have dinner\". And \"dinner\" is a noun, not a verb."),
      // --- city vs countryside
      tr("A diferencia de mi hermano, yo odio el ruido.", [
        "Unlike my brother, I hate {noise|the noise}.",
      ], "«A diferencia de» + noun = \"unlike\" + noun. General ideas usually take no article: \"I hate noise\"."),
      fb("The village is quiet. On the other ___, there's nothing to do at night.", "hand", "El pueblo es tranquilo. [Por otro lado], no hay nada que hacer de noche.",
        "\"On the other hand\" starts a new sentence and needs a comma. Never *in the other hand or *on the other side."),
      tr("Apenas hay tiendas en mi barrio.", [
        "There are hardly any {shops|stores} in my neighborhood.",
      ], "«Apenas hay» = \"there are hardly any\". The verb stays positive because \"hardly\" is already negative."),
      wo("Although the town is small, it has plenty of restaurants.", "Aunque el pueblo es pequeño, tiene restaurantes de sobra.",
        "\"Although\" + full clause; \"plenty of\" = more than enough."),
      // --- describing with precision
      tr("Es con diferencia el mejor café de la ciudad.", [
        "It's by far the best {cafe|coffee shop|coffee} in {the city|town}.",
      ], "«Con diferencia» = \"by far\", before the superlative. Places take \"in\" after a superlative: \"in the city\", not *of the city."),
      fb("This is the street ___ I grew up.", "where", "Esta es la calle [donde] crecí.",
        "«Donde» = \"where\". You can also say \"the street I grew up on\", with the preposition at the end."),
      tr("Tengo un vecino cuya hija es piloto.", [
        "I have a neighbor whose daughter is a pilot.",
        "I've got a neighbor whose daughter is a pilot.",
      ], "«Cuyo/cuya» = \"whose\", with no change for gender or number. Jobs need \"a\": \"a pilot\"."),
      mc("Which sentence is correct?", [
        "My car, which is ten years old, still runs perfectly.",
        "My car, that is ten years old, still runs perfectly.",
        "My car, what is ten years old, still runs perfectly.",
        "My car, who is ten years old, still runs perfectly.",
      ], "Non-defining clauses (between commas) take \"which\" for things, never \"that\"."),
      // --- the more ..., the more; what I did was
      fb("The longer the flight, the ___ I get.", "more tired", "Cuanto más largo es el vuelo, [más cansado] me pongo.",
        "Short form with \"be\" dropped in the first half: \"the longer the flight\". \"Tired\" takes \"more\": \"the more tired I get\"."),
      tr("Cuanto más café tomo, peor duermo.", [
        "The more coffee I drink, the worse I sleep.",
      ], "The noun stays next to \"more\" (\"the more coffee\"), and «peor» is \"the worse\". No inversion: \"I sleep\", not *sleep I."),
      tr("Lo que hice fue llamar a mi jefe.", [
        "What I did was {call|to call} my boss.",
      ], "Action cleft: What + subject + did + was + base verb. Never *What I did was that I called."),
      mc("Which sentence is correct?", [
        "What we should do is talk to the landlord.",
        "What we should do is that we talk to the landlord.",
        "What we should do it is talk to the landlord.",
        "That we should do is talk to the landlord.",
      ], "After \"What ... do is\", use the base verb directly. \"That\" only follows frames like \"What happened was\"."),
      tr("Lo que pasó fue que se me olvidó el celular en el taxi.", [
        "What happened was {that |}I {left|forgot} my {phone|cell phone|cellphone} in the {taxi|cab}.",
      ], "For an event, \"What happened was (that) ...\". «Se me olvidó» is just \"I left\" or \"I forgot\": the person is the subject."),
      tr("Lo único que hice fue pedir ayuda.", [
        "All I did was ask for help.",
        "All I did was to ask for help.",
      ], "«Lo único que hice fue» = \"All I did was\" + base verb. \"Pedir ayuda\" is \"ask for help\"."),
      lc("The less said, the better.", [
        "Cuanto menos se hable de eso, mejor.",
        "Es mejor decir algo.",
        "Cuanto más hablemos, mejor.",
        "No dijo casi nada.",
      ], "A fixed short form of \"the ..., the ...\": «cuanto menos se hable de eso, mejor»."),
      // --- mix
      mt("Match each sentence with what the speaker means.", [
        ["I didn't SAY it.", "No lo dije (quizá lo insinué)."],
        ["I didn't say IT.", "No dije eso, dije otra cosa."],
        ["I DIDN'T say it.", "Te aseguro que no lo dije."],
        ["SHE didn't say it.", "No lo dijo ella (fue otra persona)."],
        ["She didn't say it, she WROTE it.", "No lo dijo, lo escribió."],
      ], "Same words, different meanings: the stressed word is the one being contrasted or corrected."),
      dc("I wasn't invited, but my sister was.",
        "The second half repeats only the auxiliary of the first: \"wasn't ... but my sister WAS\". Never *but my sister yes."),
      dc("What happened was that the bus broke down near the bridge.",
        "\"What happened was (that)\" + a full clause tells an event. \"Break down\" = «descomponerse», «averiarse»."),
      sp("I DO want to come, but I have to work late.",
        "«Sí que quiero» = stressed \"do\" + base form: \"I DO want\".",
        "Make \"DO\" clearly louder and longer than the words around it.",
        "Say it in English: «¡Sí que quiero ir, pero tengo que trabajar hasta tarde!»"),
      sp("The more you practice, the more natural it sounds.",
        "\"The more ..., the more ...\" with \"the\" in both halves and normal subject-verb order.",
        "Pause slightly at the comma and stress both \"more\"s.",
        "Say it in English: «Cuanto más practicas, más natural suena.»"),
    ],
  ),
];
