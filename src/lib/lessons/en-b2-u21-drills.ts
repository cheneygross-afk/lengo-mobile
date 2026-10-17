// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u21-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u21 (comparisons, quantifiers and articles): a short recap, then graded practice.
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


export const EN_B2_U21_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Modified comparatives, the more ... the more, as ... as,
  // than me / like / as; both, either, neither, every, each, all, none;
  // plenty of, hardly any, uncountables; few, a few, little, a little
  // ---------------------------------------------------------------------
  lesson(
    1,
    "comparisons-quantifiers",
    "Much Better, Twice as Big, Neither of Them",
    "You will be able to say exactly how big a difference is, link two changes with \"the more ..., the more\", and choose the right quantifier for countable and uncountable nouns.",
    "Recap: how different, and how much?",
    [
      "Put \"much\", \"far\" or \"a lot\" (big difference) or \"slightly\", \"a bit\" or \"a little\" (small difference) before a comparative, never \"very\": \"much cheaper\", not *very cheaper. Grade \"as ... as\" with \"just\", \"nearly\", \"not quite\", \"not nearly\" or a multiple: \"twice as expensive as\".",
      "\"Both\", \"either\" and \"neither\" talk about two things; \"every\" and \"each\" take a singular noun; \"neither\" and \"none\" are already negative. \"A few\" (countable) and \"a little\" (uncountable) are positive; \"few\" and \"little\" sound negative; \"fewer\" goes with countable nouns and \"less\" with uncountable ones.",
    ],
    [
      ["The subway is a lot faster than the bus at rush hour.", "El metro es mucho más rápido que el autobús en hora pico."],
      ["The more you save now, the less you'll worry later.", "Cuanto más ahorres ahora, menos te preocuparás después."],
      ["Neither of my roommates cooks.", "Ninguno de mis dos compañeros de departamento cocina."],
      ["We have a few days off, but very little money.", "Tenemos unos días libres, pero muy poco dinero."],
    ],
    [
      // --- modifiers before comparatives
      fb("This laptop is ___ cheaper than the one I saw online.", ["much", "far", "a lot"], "Esta computadora portátil es [mucho] más barata que la que vi en internet.",
        "A big difference: \"much\", \"far\" or \"a lot\" + comparative. Spanish «muy» never goes here: *very cheaper is wrong because \"very\" can't modify a comparative."),
      mc("Which sentence is correct?", [
        "Your pronunciation is much better now.",
        "Your pronunciation is very better now.",
        "Your pronunciation is more better now.",
        "Your pronunciation is much more better now.",
      ], "\"Better\" is already a comparative, so it takes \"much\", not \"very\", and never \"more\" on top: *more better doubles the comparative."),
      tr("El hotel nuevo es aún más caro que el anterior.", [
        "The new hotel is even more expensive than the {old one|previous one|last one|other one}.",
      ], "«Aún» or «todavía» before a comparative is \"even\": the difference was already big and now it's bigger. \"Expensive\" is long, so it takes \"more\", not -er."),
      tr("Mi jefe habla mucho más rápido que mi profesora.", [
        "My boss {speaks|talks} {much|far|a lot} faster than my teacher.",
        "My boss {speaks|talks} {much|far|a lot} more quickly than my teacher.",
      ], "«Mucho más rápido» = \"much faster\" (\"fast\" is short, so -er). \"Much more quickly\" is also correct, but never *very faster."),
      // --- the more ..., the more
      wo("The more you read, the more words you learn.", "Cuanto más lees, más palabras aprendes.",
        "Both halves start with \"the\" + comparative, and the noun stays right after \"more\": \"the more words you learn\", not *the more you learn words."),
      fb("___ we book the flights, the cheaper they will be.", ["The earlier", "The sooner"], "[Cuanto antes] reservemos los vuelos, más baratos serán.",
        "«Cuanto antes» = \"the earlier\" or \"the sooner\". English needs \"the\" in both halves, even though Spanish «cuanto» has no article."),
      tr("Cuanto más trabaja, menos duerme.", [
        "The more he works, the less he sleeps.",
        "The more she works, the less she sleeps.",
      ], "\"The more ..., the less ...\" with normal word order after the comparative: subject + verb (\"he works\", \"he sleeps\"). Never *More he works, less he sleeps."),
      // --- as ... as, multiples
      fb("Rent in this neighborhood is ___ expensive as downtown.", "twice as", "El alquiler en este barrio es [el doble de] caro que en el centro.",
        "Multiples go before the first \"as\": \"twice as expensive as\" («el doble de caro que»), \"three times as big as\", \"half as long as\"."),
      tr("El examen no fue ni de lejos tan difícil como pensaba.", [
        "The exam {wasn't|was not} {nearly|nowhere near} as {difficult|hard} as I {thought|expected}.",
        "The test {wasn't|was not} {nearly|nowhere near} as {difficult|hard} as I {thought|expected}.",
      ], "«Ni de lejos tan ... como» = \"not nearly as ... as\": a big difference. \"Not quite as\" would mean only a small difference."),
      mc("Which sentence is correct?", [
        "My sister is almost as tall as my dad.",
        "My sister is almost as tall than my dad.",
        "My sister is almost so tall than my dad.",
        "My sister is almost more tall as my dad.",
      ], "Don't mix the two patterns: \"as tall as\" («tan alta como») or \"taller than\" («más alta que»). *As tall than is a blend of both."),
      wo("This suitcase is half as heavy as mine.", "Esta maleta pesa la mitad que la mía.",
        "\"Half\" works like \"twice\": it goes before the first \"as\". «La mitad de pesada» = \"half as heavy\"."),
      // --- than me / than I do, like / as
      fb("She runs faster than I ___.", "do", "Corre más rápido que [yo].",
        "With a full clause, the auxiliary must match the verb: \"runs\" is present simple, so \"than I do\", not *than I am. In casual English \"than me\" is also fine."),
      tr("Mi hermano es más alto que yo.", [
        "My brother is taller than {me|I am}.",
      ], "Everyday English says \"than me\"; careful English says \"than I am\". \"Than I\" on its own, from Spanish «que yo», sounds stiff."),
      lc("He worked as a waiter in Chicago for a year.", [
        "Trabajó de mesero en Chicago un año.",
        "Trabajó como si fuera mesero en Chicago un año.",
        "Trabajó con un mesero en Chicago un año.",
        "Se parecía a un mesero de Chicago.",
      ], "\"As\" + noun gives a job or role: \"worked as a waiter\" = «trabajó de mesero». \"Like a waiter\" would only compare him to one."),
      // --- both, either, neither
      fb("Neither of my brothers ___ coffee.", ["drinks", "drink"], "Ninguno de mis dos hermanos [toma] café.",
        "\"Neither\" is already negative, so the verb is positive: \"drinks\", never *doesn't drink. Careful English uses the singular after \"neither of\"; the plural \"drink\" is common in speech."),
      tr("Podemos tomar cualquiera de los dos trenes.", [
        "We can take either {train|of the trains|of the two trains}.",
      ], "«Cualquiera de los dos» = \"either\": \"either train\" before a plain noun, \"either of the trains\" before \"the\"."),
      mc("Which sentence is correct?", [
        "Both of them work at the hospital.",
        "Both of they work at the hospital.",
        "Both them work at the hospital.",
        "Both of them works at the hospital.",
      ], "After \"of\" use an object pronoun: \"both of them\", never *both of they or *both them. \"Both\" is plural, so the verb is \"work\"."),
      tr("No me gusta ninguno de los dos.", [
        "I {don't|do not} like either of them.",
        "I {don't|do not} like either one.",
        "I like neither of them.",
      ], "After a negative verb, «ninguno de los dos» is \"either\": \"I don't like either of them\". Never the Spanish double negative *I don't like neither."),
      // --- every, each, all, none
      fb("I check my email ___ morning before work.", "every", "Reviso el correo [todas las] mañanas antes del trabajo.",
        "«Todas las mañanas» = \"every morning\", with a singular noun. *All the mornings is a calque; \"all morning\" would mean «toda la mañana»."),
      tr("Llovió todo el día y no salimos.", [
        "It rained all day{,|} and we didn't {go out|leave the house}.",
        "It rained all day{,|} so we didn't {go out|leave the house}.",
      ], "«Todo el día» (the whole day) = \"all day\". Compare \"every day\" = «todos los días»."),
      tr("Cada uno de los estudiantes tiene su propia computadora.", [
        "{Each of the students|Each student|Every student} has {their|his or her} own computer.",
      ], "\"Each of\" + plural noun still takes a singular verb: \"has\", not *have. \"Each student\" and \"every student\" are also singular."),
      // --- plenty of, hardly any, uncountables
      fb("There's ___ milk left. Can you buy some?", "hardly any", "[Casi no] queda leche. ¿Puedes comprar un poco?",
        "«Casi no hay» or «casi nada de» = \"hardly any\". It's already negative, so the verb stays positive: \"There's hardly any\", not *There isn't hardly any."),
      mc("Which sentence is correct?", [
        "Can you give me some advice about the interview?",
        "Can you give me an advice about the interview?",
        "Can you give me some advices about the interview?",
        "Can you give me a advice about the interview?",
      ], "\"Advice\" is uncountable: no \"a\" and no plural. Say \"some advice\" or \"a piece of advice\" for «un consejo»."),
      dc("The news from the hospital is good.",
        "\"News\" ends in -s but is uncountable, so it takes a singular verb: \"is\", not *are."),
      // --- few, a few, little, a little, fewer, less
      fb("I only need ___ minutes to get ready.", "a few", "Solo necesito [unos pocos] minutos para arreglarme.",
        "\"Minutes\" are countable, so \"a few\", never *a little minutes. With \"a\", the meaning is positive: enough to do something."),
      fb("Hurry up! We have very ___ time.", "little", "¡Apúrate! Tenemos muy [poco] tiempo.",
        "\"Time\" is uncountable, and the meaning is negative (not enough), so \"very little\", without \"a\"."),
      mt("Match each phrase with its meaning.", [
        ["a few people", "algunas personas (las suficientes)"],
        ["few people", "poca gente (menos de lo esperado)"],
        ["a little money", "un poco de dinero"],
        ["little money", "poco dinero (casi nada)"],
        ["quite a few people", "bastante gente"],
      ], "With \"a\" the meaning is positive; without it, negative. \"Few\" goes with countable nouns, \"little\" with uncountable ones, and \"quite a few\" means a fairly large number."),
      lc("Few people came to the meeting.", [
        "Vino poca gente a la reunión.",
        "Vinieron algunas personas a la reunión.",
        "Vino mucha gente a la reunión.",
        "No vino nadie a la reunión.",
      ], "No \"a\" before \"few\", so the meaning is negative: «poca gente», fewer than hoped. \"A few people\" would be the positive «algunas personas»."),
      wo("Quite a few of my coworkers work from home.", "Bastantes compañeros míos trabajan desde casa.",
        "\"Quite a few\" = «bastantes», a fairly large number. With \"of my\", it takes \"of\" like other quantifiers."),
      // --- mix and traps
      tr("Ahora hay menos carros y menos ruido en el centro.", [
        "{Now there are|There are now} fewer cars and less noise {downtown|in the city center|in the center}.",
        "There are fewer cars and less noise {downtown|in the city center|in the center} now.",
      ], "One Spanish word, two English ones: \"fewer\" with countable nouns (cars) and \"less\" with uncountable nouns (noise)."),
      mc("Which sentence is correct?", [
        "I have fewer friends here than in Lima.",
        "I have less friends here than in Lima.",
        "I have more few friends here than in Lima.",
        "I have fewer friend here than in Lima.",
      ], "\"Friends\" can be counted, so in careful English it's \"fewer friends\". *Less friends is heard in casual speech but marked wrong in exams; \"friend\" must be plural."),
      tr("La gente aquí es mucho más simpática que en mi ciudad.", [
        "People here are {much|far|a lot} {friendlier|more friendly|nicer} than in my {city|hometown}.",
        "The people here are {much|far|a lot} {friendlier|more friendly|nicer} than in my {city|hometown}.",
      ], "\"People\" is plural, so \"are\", never *people is. The comparative takes \"much\", never *very friendlier."),
      dc("Hardly anyone answered my email.",
        "\"Hardly anyone\" = «casi nadie». It's already negative, so the verb is positive: \"answered\", not *didn't answer."),
      dc("Every room in the hotel has a view of the river.",
        "\"Every\" + singular noun + singular verb: \"every room has\". Spanish «todas las habitaciones tienen» is plural, which pulls learners toward *every rooms have."),
      sp("Neither of us has enough time, but both of us want to help.",
        "\"Neither of us\" + positive singular verb (\"has\"); \"both of us\" + plural verb (\"want\"). Both use the object pronoun \"us\" after \"of\".",
        "Stress \"neither\" and \"both\": they carry the contrast.",
        "Say it in English: «Ninguno de los dos tiene suficiente tiempo, pero los dos queremos ayudar.»"),
      sp("I earn slightly less than my sister, but I have plenty of free time.",
        "\"Slightly less\" for a small difference; \"plenty of\" = more than enough («de sobra»), with uncountable \"time\".",
        "Say \"slightly\" as SLITE-lee, and link \"plenty of\" as \"plen-tee-uv\".",
        "Say it in English: «Gano un poco menos que mi hermana, pero tengo tiempo libre de sobra.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Error hunt, transformations (not as ... as, the same as,
  // colder and colder, than anyone else), deciding (prefer, I'd rather),
  // whereas / while / on the other hand, and articles
  // ---------------------------------------------------------------------
  lesson(
    2,
    "comparisons-articles",
    "Fix It, Flip It, Use the Right Article",
    "You will be able to avoid the classic comparison errors, say the same comparison in different ways, contrast two options with \"whereas\" and \"on the other hand\", and use \"the\" only where English needs it.",
    "Recap: the same idea, said correctly",
    [
      "No double comparatives (*more easier), irregular forms (better, worse, the best, the worst), and \"in\" after a superlative for places and groups: \"the biggest park in the city\". \"Every\", \"each\" and \"everyone\" are singular; \"neither\" takes a positive verb.",
      "Flip comparisons (\"The bus isn't as fast as the train\" = \"The train is faster than the bus\"), use \"the same as\", \"similar to\", \"different from\", \"colder and colder\" and \"than anyone else\". Contrast with \"whereas\" or \"while\" in one sentence and \"On the other hand\" across two. General ideas take no article (\"Life is short\"), jobs take \"a\" (\"She's a nurse\").",
    ],
    [
      ["The test was easier than I expected.", "El examen fue más fácil de lo que esperaba."],
      ["My cousin is funnier than anyone else in the family.", "Mi primo es más gracioso que nadie en la familia."],
      ["I'd rather cook at home than eat out every night.", "Prefiero cocinar en casa que comer fuera todas las noches."],
      ["My dad is a mechanic, whereas my mom is a nurse.", "Mi papá es mecánico, mientras que mi mamá es enfermera."],
    ],
    [
      // --- error hunt: comparatives and superlatives
      mc("Which sentence is correct?", [
        "This route is easier than the old one.",
        "This route is more easier than the old one.",
        "This route is more easy than the old one.",
        "This route is easyer than the old one.",
      ], "Two-syllable adjectives ending in -y take -ier: \"easier\". Never -er AND \"more\" together (*more easier), and the y changes to i."),
      fb("That was ___ meal I've had in months.", "the worst", "Fue [la peor] comida que he comido en meses.",
        "\"Bad, worse, the worst\". «El peor» is \"the worst\", never *the worse or *the most bad."),
      tr("Es el museo más grande del país.", [
        "It's the {biggest|largest} museum in the country.",
      ], "After a superlative, places and groups take \"in\": \"in the country\", \"in the world\". Spanish «del país» pushes learners toward *of the country."),
      wo("That was the best week of the whole year.", "Fue la mejor semana de todo el año.",
        "With a period of time, \"of\" is correct after a superlative: \"the best week of the year\", \"the best day of my life\"."),
      // --- every, each, everyone, neither
      fb("Everyone in my family ___ how to swim.", "knows", "Todo el mundo en mi familia [sabe] nadar.",
        "\"Everyone\", \"everybody\" and \"everything\" take a singular verb: \"knows\", never *everyone know. «Saber nadar» is \"know how to swim\" (or \"can swim\")."),
      mc("Which sentence is correct?", [
        "Each of the teams has a captain.",
        "Each of the teams have a captain.",
        "Every of the teams has a captain.",
        "Each teams has a captain.",
      ], "\"Each of\" + plural noun + singular verb (\"has\"). \"Every\" can't go before \"of\" (say \"every one of the teams\"), and \"each\" alone takes a singular noun."),
      tr("Ninguno de los dos sabía la dirección.", [
        "Neither of {us|them} knew the address.",
      ], "\"Neither\" is already negative, so the verb stays positive: \"knew\", not *didn't know. After \"of\", use the object pronoun: \"us\" or \"them\"."),
      tr("Mi hermana gana menos dinero que yo, pero tiene menos gastos.", [
        "My sister earns less money than {me|I do}, but she has fewer expenses.",
        "My sister makes less money than {me|I do}, but she has fewer expenses.",
      ], "Spanish «menos» splits in two: \"less money\" (uncountable) and \"fewer expenses\" (countable). After \"than\", say \"me\" or \"I do\"."),
      // --- flip it
      fb("The bus isn't as fast as the train. = The train is ___ than the bus.", "faster", "El tren es [más rápido] que el autobús.",
        "\"Not as fast as\" flipped from the other side becomes \"faster than\". Both sentences describe the same fact."),
      tr("Este departamento no es tan luminoso como el otro.", [
        "This apartment {isn't|is not} as {bright|sunny|light} as the other {one|}.",
        "This flat {isn't|is not} as {bright|sunny|light} as the other {one|}.",
      ], "«No tan ... como» = \"not as ... as\". With short adjectives this sounds more natural than \"less bright\"."),
      fb("My new job is the same ___ my old one, but the pay is better.", "as", "Mi trabajo nuevo es igual [que] el anterior, pero el sueldo es mejor.",
        "«Igual que» = \"the same as\". Never *the same that or *the same than."),
      wo("Our schedule is very different from yours.", "Nuestro horario es muy diferente del tuyo.",
        "\"Different from\" works everywhere («diferente de»). Americans also say \"different than\", and \"similar\" takes \"to\"."),
      // --- colder and colder, than anyone else
      mc("Which sentence is correct?", [
        "Prices are getting higher and higher.",
        "Prices are getting each time higher.",
        "Prices are getting more and more high.",
        "Prices are getting higher and more higher.",
      ], "«Cada vez más» = comparative + \"and\" + comparative: \"higher and higher\". *Each time higher is a word-for-word calque, and short adjectives don't take \"more\"."),
      tr("Mi hijo está cada vez más alto.", [
        "My son is getting taller and taller.",
        "My son is growing taller and taller.",
      ], "Short adjective, so repeat the -er form: \"taller and taller\". The usual verb is \"get\"."),
      tr("Viajar está cada vez más caro.", [
        "{Traveling|Travel} is getting more and more expensive.",
        "{Traveling|Travel} is becoming more and more expensive.",
      ], "With long adjectives, repeat only \"more\": \"more and more expensive\", never *more expensive and more expensive. «Viajar» as a subject is \"traveling\" (British \"travelling\")."),
      fb("Laura is the most patient person in my class. = Laura is ___ than anyone else in my class.", "more patient", "Laura es [más paciente] que nadie en mi clase.",
        "A superlative can be said with a comparative + \"than anyone else\". \"Else\" matters: Laura can't be more patient than herself."),
      tr("Ella trabaja más que nadie en la empresa.", [
        "She works {harder|more} than anyone {else|} {in|at} the company.",
        "She works {harder|more} than anybody {else|} {in|at} the company.",
      ], "«Más que nadie» = \"more than anyone\" (or \"harder than anyone\"). Never *more than nobody: English allows only one negative."),
      lc("I've never stayed in a better hotel.", [
        "Nunca me he alojado en un hotel mejor.",
        "Nunca me he alojado en un hotel.",
        "Es el peor hotel en el que me he alojado.",
        "Siempre me alojo en hoteles buenos.",
      ], "\"Never\" + comparative = a superlative in disguise: it's the best hotel I've ever stayed in."),
      // --- deciding: way, me neither, prefer, I'd rather
      lc("This car is way more comfortable.", [
        "Este carro es muchísimo más cómodo.",
        "Este carro es un poco más cómodo.",
        "Este carro no es tan cómodo.",
        "Este carro es igual de cómodo.",
      ], "\"Way\" + comparative = «muchísimo», very common in casual American English. Keep it out of formal writing."),
      fb("—I don't eat red meat. —Me ___.", ["neither", "either"], "—No como carne roja. —Yo [tampoco].",
        "To agree with a negative: \"Me neither\" or \"Neither do I\" («yo tampoco»). \"Me either\" is also common in casual American English. *Me too would agree with a positive sentence."),
      mc("Which sentence is correct?", [
        "I prefer the train to the bus.",
        "I prefer the train than the bus.",
        "I prefer more the train than the bus.",
        "I prefer the train that the bus.",
      ], "\"Prefer A to B\", with \"to\", not \"than\". «Preferir más» is just \"prefer\"."),
      tr("Prefiero caminar que esperar el autobús.", [
        "I'd rather walk than wait for the bus.",
        "I would rather walk than wait for the bus.",
      ], "\"I'd rather\" + base verb + \"than\" + base verb. No \"to\": never *I'd rather to walk. And «esperar el autobús» is \"wait for the bus\"."),
      // --- whereas, while, on the other hand
      fb("My brother loves the city, ___ I prefer the countryside.", ["whereas", "while"], "A mi hermano le encanta la ciudad, [mientras que] yo prefiero el campo.",
        "«Mientras que» contrasting two facts in one sentence = \"whereas\" or \"while\", with a comma before it."),
      tr("El norte es frío. Por otro lado, la comida es increíble.", [
        "The north is cold. On the other hand, the food is {amazing|incredible|great}.",
      ], "\"On the other hand\" starts a new sentence and takes a comma. Never *In the other hand."),
      wo("My office is downtown, whereas my home is in the suburbs.", "Mi oficina está en el centro, mientras que mi casa está en las afueras.",
        "\"Whereas\" joins two contrasting facts in one sentence, after a comma. «En el centro» in American English is often just \"downtown\", with no preposition."),
      // --- articles
      mc("Which sentence is correct?", [
        "Life is more expensive in big cities.",
        "The life is more expensive in big cities.",
        "A life is more expensive in big cities.",
        "The life it is more expensive in big cities.",
      ], "General ideas take no article: \"Life is ...\". Spanish «la vida» pushes learners toward *The life."),
      tr("Mi mamá es enfermera y trabaja en un hospital.", [
        "My {mom|mother} is a nurse and {works|she works} {at|in} a hospital.",
      ], "Jobs need \"a\" or \"an\": \"She's a nurse\", never *She's nurse, even though Spanish says «es enfermera»."),
      tr("Los niños ya están en la escuela.", [
        "The {kids|children} are already {at|in} school.",
      ], "Institutions used for their main purpose take no article: \"at school\" (as students). \"In school\" is also American English."),
      fb("It's late, so I'm going ___.", "home", "Es tarde, así que me voy [a casa].",
        "\"Home\" after a verb of movement takes no \"to\" and no article: \"go home\", never *go to home or *go to the home."),
      tr("La mayoría de la gente prefiere trabajar desde casa.", [
        "Most people prefer {working|to work} from home.",
      ], "«La mayoría de la gente» = \"most people\", never *the most people or *most of people."),
      tr("¡Qué día tan largo!", [
        "What a long day!",
      ], "«¡Qué ...!» + singular countable noun = \"What a ...!\". The \"a\" is required: *What long day! is wrong."),
      // --- mix
      mt("Match each English phrase with its Spanish meaning.", [
        ["the same as", "igual que"],
        ["similar to", "parecido a"],
        ["different from", "diferente de"],
        ["more and more", "cada vez más"],
        ["the sooner, the better", "cuanto antes, mejor"],
      ], "Each comparison phrase has its own fixed preposition or pattern: \"the same as\", \"similar to\", \"different from\". «Cada vez más» is \"more and more\", never *each time more."),
      dc("She's an engineer, and her husband is a teacher.",
        "Jobs take \"a\" or \"an\": \"an engineer\" (vowel sound), \"a teacher\"."),
      dc("Neither of the apartments is as big as ours.",
        "\"Neither of\" + plural noun + positive singular verb (\"is\"), and the equal comparison \"as big as\"."),
      sp("All in all, I'd rather live in a small town than in a big city.",
        "\"All in all\" sums up («en definitiva»); \"I'd rather\" + base verb + \"than\". General places (\"a small town\", \"a big city\") take \"a\".",
        "Contract \"I would\" to \"I'd\" and stress \"small\" and \"big\": they carry the contrast.",
        "Say it in English: «En definitiva, prefiero vivir en un pueblo pequeño que en una ciudad grande.»"),
      sp("This hotel isn't nearly as nice as the one we stayed in last year.",
        "\"Not nearly as ... as\" = a big difference («ni de lejos tan ... como»). The preposition goes at the end: \"the one we stayed in\".",
        "Stress \"nearly\" and \"nice\", and keep \"as\" weak: \"uz\".",
        "Say it in English: «Este hotel no es ni de lejos tan bueno como en el que nos quedamos el año pasado.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 3. Extreme adjectives, so and such; then the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    3,
    "describing-comparing-mixed",
    "Absolutely Freezing, Such a Long Day",
    "You will be able to use extreme adjectives with \"absolutely\", choose between \"so\" and \"such\", and combine them with all the comparisons, quantifiers and articles of the unit.",
    "Recap: strong words and the whole unit",
    [
      "Extreme adjectives (\"freezing\", \"exhausted\", \"huge\", \"starving\", \"delicious\", \"furious\", \"terrified\") already mean «muy ...», so they take \"absolutely\" or \"really\", not \"very\", and they have no comparative: \"bigger\", not *more huge.",
      "\"So\" + adjective (\"so cold\"); \"such\" + noun phrase (\"such a cold day\", \"such cold weather\"). Both can add a result with \"that\". Keep everything else from the unit: modifiers before comparatives, singular after \"every\", positive verb after \"neither\", \"fewer\" with countable nouns, and no article with general ideas.",
    ],
    [
      ["I'm absolutely exhausted after that flight.", "Estoy agotado después de ese vuelo."],
      ["The test was so hard that nobody finished it.", "El examen era tan difícil que nadie lo terminó."],
      ["It was such a nice evening that we walked home.", "Fue una noche tan agradable que volvimos a casa caminando."],
      ["We had such good luck with the weather.", "Tuvimos tanta suerte con el tiempo."],
    ],
    [
      // --- extreme adjectives
      fb("It's absolutely ___ outside. Take a warm coat.", "freezing", "Afuera hace [un frío tremendo]. Llévate un abrigo.",
        "\"Freezing\" = very cold, an extreme adjective. It goes with \"absolutely\": \"absolutely freezing\"."),
      mc("Which sentence is correct?", [
        "I'm absolutely exhausted after the trip.",
        "I'm absolutely tired after the trip.",
        "I'm very exhausted after the trip.",
        "I'm absolutely exhaust after the trip.",
      ], "\"Exhausted\" already means \"very tired\", so it takes \"absolutely\", not \"very\". Ordinary adjectives like \"tired\" take \"very\", not \"absolutely\"."),
      mt("Match each extreme adjective with its ordinary meaning.", [
        ["freezing", "very cold"],
        ["starving", "very hungry"],
        ["furious", "very angry"],
        ["huge", "very big"],
        ["terrified", "very scared"],
      ], "Extreme adjectives contain the idea of \"very\". Use them with \"absolutely\" or \"really\", and the ordinary ones with \"very\" or \"extremely\"."),
      tr("La sopa estaba buenísima.", [
        "The soup was {absolutely|really} delicious.",
        "The soup was {really|very} tasty.",
      ], "«Buenísima» about food = \"absolutely delicious\" or \"really tasty\". \"Very delicious\" sounds like learner English, because \"delicious\" is already extreme."),
      fb("Their new apartment is ___ huge.", ["absolutely", "really"], "Su departamento nuevo es [realmente] enorme.",
        "\"Huge\" is extreme, so \"absolutely\" or \"really\". *Very huge doesn't work."),
      tr("Me muero de hambre. ¿Pedimos una pizza?", [
        "I'm starving. {Shall we|Should we|Can we|Why don't we} order a pizza?",
        "I'm absolutely starving. {Shall we|Should we|Can we|Why don't we} order a pizza?",
      ], "«Me muero de hambre» = \"I'm starving\", an extreme adjective. Don't translate word for word (*I'm dying of hunger sounds dramatic)."),
      mc("Which sentence is correct?", [
        "Their new house is much bigger than ours.",
        "Their new house is more huge than ours.",
        "Their new house is much more huge than ours.",
        "Their new house is very bigger than ours.",
      ], "Extreme adjectives have no comparative: use an ordinary adjective (\"bigger\") with \"much\". *Very bigger is wrong because \"very\" can't modify a comparative."),
      // --- so and such
      fb("The movie was ___ boring that I fell asleep.", "so", "La película era [tan] aburrida que me dormí.",
        "\"So\" + adjective alone (no noun): \"so boring\". The result follows with \"that\"."),
      fb("It was ___ boring movie that I fell asleep.", "such a", "Era [una película tan] aburrida que me dormí.",
        "Before adjective + singular countable noun, use \"such a\": the article goes AFTER \"such\". Never *a such or *so boring movie."),
      mc("Which sentence is correct?", [
        "We had such nice weather in Cancun.",
        "We had such a nice weather in Cancun.",
        "We had so nice weather in Cancun.",
        "We had a such nice weather in Cancun.",
      ], "\"Weather\" is uncountable, so \"such\" + adjective + noun with no \"a\". Spanish «un tiempo tan bueno» pulls learners into *such a nice weather."),
      tr("Son personas tan generosas.", [
        "They're such generous people.",
        "They are such generous people.",
      ], "Plural noun phrase, so \"such\" with no article: \"such generous people\". *So generous people is wrong."),
      tr("Hacía tanto calor que no pudimos dormir.", [
        "It was so hot {that|} we couldn't sleep.",
        "It was so hot {that|} we {weren't able|were not able} to sleep.",
      ], "«Hacía tanto calor que» = \"It was so hot that\": \"so\" + adjective. *It made so much heat is a calque, and *so much hot mixes two patterns."),
      wo("It was such a good idea that everyone agreed.", "Fue una idea tan buena que todos estuvieron de acuerdo.",
        "\"Such a\" + adjective + noun, then \"that\" + result. \"Everyone\" is singular, but \"agreed\" is the same for all persons."),
      lc("It was such a long day.", [
        "Fue un día tan largo.",
        "Fue un día bastante largo.",
        "El día fue muy corto.",
        "Fue un día como cualquier otro.",
      ], "\"Such a\" + adjective + noun is emotional, like Spanish «tan»: «¡fue un día tan largo!»."),
      tr("Fue una decisión tan difícil.", [
        "It was such a {difficult|hard|tough} decision.",
      ], "«Una decisión tan difícil» = \"such a difficult decision\", never *so difficult decision."),
      // --- the whole unit
      tr("Este celular es un poco más caro, pero es mucho más rápido.", [
        "This {phone|cell phone} is {slightly|a bit|a little} more expensive, but it's {much|far|a lot} faster.",
      ], "Small difference: \"slightly\" or \"a bit\"; big difference: \"much\", \"far\" or \"a lot\". \"Expensive\" takes \"more\", \"fast\" takes -er."),
      fb("The more you exercise, the ___ you feel.", "better", "Cuanto más ejercicio haces, [mejor] te sientes.",
        "\"The more ..., the better ...\": use the normal comparative, \"better\", never *the more good."),
      tr("Ninguno de mis compañeros de trabajo habla francés.", [
        "None of my {coworkers|colleagues|co-workers} {speaks|speak} French.",
      ], "«Ninguno de» for three or more is \"none of\". It's already negative, so the verb is positive: never *None of them doesn't speak."),
      fb("There are ___ of restaurants near the station, so we won't go hungry.", "plenty", "Hay restaurantes [de sobra] cerca de la estación, así que no pasaremos hambre.",
        "\"Plenty of\" = more than enough («de sobra»). It works with countable and uncountable nouns."),
      mc("Which sentence is correct?", [
        "I need a little help with this form.",
        "I need a few help with this form.",
        "I need a little helps with this form.",
        "I need a few helps with this form.",
      ], "\"Help\" is uncountable: \"a little help\", no plural. \"A few\" only goes with plural countable nouns."),
      tr("Mándame el informe. Cuanto antes, mejor.", [
        "Send me the report. The sooner{,|} the better.",
      ], "«Cuanto antes, mejor» is the fixed phrase \"The sooner, the better\", with \"the\" in both halves."),
      tr("Ella canta como su abuela.", [
        "She sings like her {grandmother|grandma}.",
      ], "\"Like\" + noun compares («como»). \"As her grandmother\" would mean she sings in the role of her grandmother."),
      tr("Como te expliqué, el vuelo sale a las seis.", [
        "{As|Like} I explained{ to you|}, the flight {leaves|departs} at six.",
      ], "\"As\" + clause is the careful choice («como dije», «como te expliqué»). \"Like I explained\" is common in casual American English. Remember: \"explain to you\", never *explain you."),
      dc("The people in my building are so friendly.",
        "\"People\" is plural (\"are\"), and \"so\" + adjective alone: \"so friendly\"."),
      dc("Each of my kids has a different teacher this year.",
        "\"Each of\" + plural noun takes a singular verb: \"has\", not *have."),
      mc("Which sentence is correct?", [
        "It was such a good idea.",
        "It was a such good idea.",
        "It was so good idea.",
        "It was such good idea.",
      ], "Singular countable noun: \"such a\" + adjective + noun. The article comes after \"such\", and it can't be dropped."),
      tr("Cada año hay menos turistas, pero el centro está igual de lleno.", [
        "Every year there are fewer tourists, but downtown is just as {crowded|busy|full}.",
        "Every year there are fewer tourists, but the {center|city center} is just as {crowded|busy|full}.",
      ], "\"Every year\" (singular), \"fewer\" with countable \"tourists\", and «igual de» = \"just as\"."),
      tr("Mi abuelo era médico y trabajó en un hospital toda su vida.", [
        "My {grandfather|grandpa} was a doctor and worked {at|in} a hospital {all his life|his whole life}.",
      ], "Jobs take \"a\": \"was a doctor\", even though Spanish says «era médico»."),
      tr("Hacía un tiempo tan malo que nos quedamos en casa.", [
        "The weather was so bad {that|} we stayed {home|at home|in}.",
        "We had such bad weather {that|} we stayed {home|at home|in}.",
        "It was such bad weather {that|} we stayed {home|at home|in}.",
      ], "\"So bad\" (adjective alone) or \"such bad weather\" (uncountable noun, no \"a\"). *Such a bad weather is the classic trap. \"Stay home\" needs no \"to\"."),
      fb("Hardly ___ came to the concert because of the rain.", ["anyone", "anybody"], "[Casi nadie] vino al concierto por la lluvia.",
        "«Casi nadie» = \"hardly anyone\". \"Hardly\" is already negative, so never *hardly nobody."),
      wo("The tickets were twice as expensive as last year.", "Los boletos costaban el doble que el año pasado.",
        "\"Twice\" goes before the first \"as\": \"twice as expensive as\"."),
      mc("\"The new bridge isn't quite as long as the old one.\" What does it mean?", [
        "The new bridge is a little shorter.",
        "The new bridge is much shorter.",
        "The two bridges are exactly the same length.",
        "The new bridge is longer.",
      ], "\"Not quite as\" = a small difference. \"Not nearly as\" would mean a big one."),
      lc("Rent here is half as expensive as in my hometown.", [
        "El alquiler aquí cuesta la mitad que en mi ciudad.",
        "El alquiler aquí cuesta el doble que en mi ciudad.",
        "El alquiler aquí es un poco más barato que en mi ciudad.",
        "El alquiler aquí es igual de caro que en mi ciudad.",
      ], "\"Half as expensive as\" = «la mitad de caro», listen for \"half\" versus \"twice\"."),
      sp("It was such an amazing trip that I want to go back next year.",
        "\"Such an\" + extreme adjective + singular noun, then \"that\" + result. \"An\" because \"amazing\" starts with a vowel sound.",
        "Link \"such an amazing\" smoothly: \"su-chuh-na-MAY-zing\".",
        "Say it in English: «Fue un viaje tan increíble que quiero volver el año que viene.»"),
      sp("I'm absolutely starving, and there's hardly any food in the fridge.",
        "\"Absolutely\" + extreme adjective, and \"hardly any\" = «casi nada de» with a positive verb.",
        "Stress \"absolutely\" on AB and \"starving\" on STAR.",
        "Say it in English: «Me muero de hambre y casi no hay comida en el refrigerador.»"),
    ],
  ),
];
