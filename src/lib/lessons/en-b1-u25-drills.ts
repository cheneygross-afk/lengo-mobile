// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u25-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u25 (articles and nouns): a short recap, then graded practice.

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
  slug: `en-b1-articles-nouns-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U25_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Generalizations (parts 1 and 2), places and institutions
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Life Is Short, Go to Bed",
    "You will be able to drop \"the\" when you talk about things in general, bring it back for specific things, and use places like school, bed, home and the Andes with the right article.",
    "Recap: general = no article; specific = the",
    [
      "Plural and uncountable nouns used in general take no article: \"Cats are curious\", \"Health matters\", \"People are friendly here\". As soon as the listener knows exactly which ones you mean, \"the\" comes back: \"the cats next door\", \"the history of Peru\". An adjective alone (\"classical music\", \"Colombian coffee\") does not make a noun specific.",
      "Institutions used for their purpose take no article (\"go to school\", \"in prison\", \"go to church\", \"go to bed\", \"at work\", \"get home\"), but American English says \"in the hospital\". Most countries and single mountains or lakes have no article; rivers, seas, mountain ranges and plural country names take \"the\".",
    ],
    [
      ["Nurses work very long hours.", "Los enfermeros trabajan muchísimas horas."],
      ["The milk in the fridge is bad.", "La leche del refrigerador está mala."],
      ["My daughter goes to school by bike.", "Mi hija va al colegio en bicicleta."],
      ["My cousin lives in the Philippines.", "Mi prima vive en Filipinas."],
    ],
    [
      fb("___ are very curious animals.", ["Cats", "Cats in general"], "[Los gatos] son animales muy curiosos.",
        "All cats, in general: plural noun with no article. Spanish needs «los», English doesn't. *The cats are curious would mean some specific cats."),
      mc("Which sentence is correct?", [
        "Health is more important than money.",
        "The health is more important than the money.",
        "The health is more important than money.",
        "Health is more important than the money.",
      ], "\"Health\" and \"money\" are abstract or uncountable nouns used in general, so neither takes \"the\". Spanish says «la salud» and «el dinero», which is where *the health comes from."),
      tr("La gente aquí es muy amable.", ["People here are very {friendly|kind|nice}.", "People are very {friendly|kind|nice} here."],
        "«La gente» in general is \"people\": no article and a PLURAL verb (\"are\"). *The people is friendly has two mistakes."),
      tr("Me encantan los perros, pero odio los mosquitos.", "I love dogs, but I hate mosquitoes.",
        "Likes and dislikes in general: plural nouns with no article. «Me encantan los perros» is \"I love dogs\", not *I love the dogs."),
      wo("Nurses work very long hours.", "Los enfermeros trabajan muchísimas horas.",
        "Nurses as a group, in general: plural with no article, as in \"Teachers work hard\"."),
      tr("La música clásica me relaja.", "Classical music relaxes me.",
        "An adjective before the noun does not make it specific: \"classical music\", \"modern art\", \"Mexican food\" all stay without \"the\". Notice the English order too: the music is the subject, \"relaxes me\"."),
      lc("Time goes faster when you're busy.", [
        "El tiempo pasa más rápido cuando estás ocupado.",
        "El clima cambia rápido cuando hay viento.",
        "Esta vez fue más rápido porque estabas ocupado.",
        "El horario es más corto cuando estás ocupado.",
      ], "\"Time\" with no article is time in general («el tiempo»). It is never the weather (that's \"the weather\") and never «una vez» (\"this time\")."),
      fb("___ next door is always barking.", "The dog", "[El perro] de al lado siempre está ladrando.",
        "\"Next door\" tells us exactly which dog, so it is specific: \"the dog next door\". Compare \"Dogs bark\" (all dogs)."),
      fb("___ in this restaurant is too salty.", "The food", "[La comida] de este restaurante está demasiado salada.",
        "\"Food\" in general has no article (\"I love food\"), but \"in this restaurant\" makes it specific, so \"the food\"."),
      tr("La leche del refrigerador está mala.", ["The milk in the {fridge|refrigerator} {is bad|has gone bad|went bad|is sour|has gone sour}."],
        "Specific milk, the milk in our fridge, so \"the\". Spanish «del refrigerador» becomes \"in the fridge\": English uses \"in\" for where something is, not \"of\"."),
      mc("Which sentence is about ONE specific group, not people in general?", [
        "The students in my class are very funny.",
        "Students need more free time.",
        "Teenagers love music.",
        "Doctors work long hours.",
      ], "\"In my class\" identifies exactly which students, so \"the\" is needed. The other three talk about students, teenagers and doctors in general: no article."),
      tr("Me interesa la historia de Colombia.", ["I'm interested in the history of Colombia.", "I'm interested in Colombian history."],
        "An \"of\" phrase makes \"history\" specific: \"the history of Colombia\". With an adjective instead, there is no article: \"Colombian history\". Both are correct; *the Colombian history is not."),
      fb("___ was invented in the 1870s.", ["The telephone", "The phone"], "[El teléfono] se inventó en la década de 1870.",
        "\"The\" + singular noun for a whole type of invention: \"the telephone\", \"the wheel\", \"the bicycle\". This is the one generalization that keeps \"the\"."),
      mc("Choose the correct option: \"My grandfather plays ___ every evening.\"", ["the guitar", "guitar", "guitars", "a guitars"],
        "After \"play\", musical instruments take \"the\": \"play the guitar\", \"play the piano\". Sports don't: \"play soccer\"."),
      dc("The people next door have three noisy dogs.",
        "\"The people next door\" are specific people, so \"the\"; \"people\" is plural, so \"have\", not \"has\"."),
      fb("My daughter goes to ___ by bike.", "school", "Mi hija va [al colegio] en bicicleta.",
        "She goes there as a student, for the normal purpose of the place, so no article: \"go to school\". Spanish «al colegio» tempts you to say *to the school."),
      fb("I went to ___ to talk to the principal.", "the school", "Fui [al colegio] a hablar con el director.",
        "A parent visiting the building for a meeting is not studying there, so \"the school\". Students go to school; parents go to the school."),
      wo("My parents go to church every Sunday.", "Mis papás van a misa todos los domingos.",
        "\"Go to church\" means to attend a service, so no article. \"Go to the church\" would mean visiting the building."),
      tr("Me voy a la cama; estoy muy cansado.", ["I'm going to bed. I'm very tired.", "I'm going to bed. I'm really tired.", "I'm off to bed. I'm very tired."],
        "\"Go to bed\" (to sleep) never takes an article: *I'm going to the bed sounds like you are walking to the furniture."),
      lc("He's in prison.", ["Está preso.", "Trabaja en la cárcel.", "Fue a visitar la cárcel.", "Vive cerca de la cárcel."],
        "\"In prison\" with no article means he is a prisoner. Someone who works there or visits it is \"at the prison\"."),
      tr("Mi abuelo está en el hospital.", ["My {grandfather|grandpa} is in the hospital.", "My {grandfather|grandpa} is in hospital."],
        "American English says \"in the hospital\" for a patient; British English says \"in hospital\". Both are correct."),
      mc("Which sentence is correct?", [
        "We stayed at home and watched a movie.",
        "We stayed at the home and watched a movie.",
        "We stayed to home and watched a movie.",
        "We stayed in the home and watched a movie.",
      ], "\"At home\" takes no article. (Americans also say \"stayed home\".) \"The home\" means a care home or a specific house."),
      wo("Her brother has been in prison for two years.", "Su hermano lleva dos años en la cárcel.",
        "\"In prison\" (as a prisoner) with no article, plus the present perfect with \"for\" for «lleva dos años»."),
      fb("They're traveling around ___ this summer.", "the Andes", "Están recorriendo [los Andes] este verano.",
        "Mountain ranges take \"the\": \"the Andes\", \"the Alps\". A single mountain doesn't: \"Mount Everest\"."),
      tr("Mi prima vive en los Estados Unidos y mi tío en el Perú.", "My cousin lives in {the United States|the US|the USA|the U.S.} and my uncle {|lives} in Peru.",
        "\"The United States\" has \"the\" because of \"States\". Peru never takes an article in English, even though Spanish can say «el Perú»."),
      mc("Which sentence is correct?", [
        "The Amazon flows into the Atlantic.",
        "Amazon flows into Atlantic.",
        "The Amazon flows into Atlantic.",
        "Amazon flows into the Atlantic.",
      ], "Rivers and oceans both take \"the\": \"the Amazon\", \"the Atlantic\", \"the Pacific\"."),
      mt("Match each Spanish place name with its English form.", [
        ["el lago Titicaca", "Lake Titicaca"],
        ["el Mediterráneo", "the Mediterranean"],
        ["la India", "India"],
        ["Filipinas", "the Philippines"],
      ], "Single lakes and most countries have no article (even when Spanish uses one, as in «la India»). Seas and plural country names take \"the\"."),
      dc("We went to church and then had lunch at home.",
        "Three places with no article: \"church\" (to pray), \"lunch\" (a meal) and \"home\" (after \"at\")."),
      sp("Sorry, I can't talk now. I'm at work.", "\"At work\" with no article, like \"at home\" and \"at school\".",
        "Stress \"can't\" and \"work\".", "Say it in English: Perdón, no puedo hablar ahora. Estoy en el trabajo."),
      // Traps: general vs specific mixed with places
      tr("La gente que trabaja en el hospital es muy amable.", "The people {who|that} work {at|in} the hospital are very {kind|friendly|nice}.",
        "Three traps at once: these are specific people (\"who work at the hospital\"), so \"the people\"; \"people\" takes a plural verb (\"are\"); and the hospital here is a workplace, so \"the\"."),
      tr("Las vacaciones en el Caribe son caras.", ["{Vacations|Holidays} in the Caribbean are expensive.", "{A vacation|A holiday} in the Caribbean is expensive."],
        "Vacations in general take no article, but the sea region takes \"the\": \"the Caribbean\", like \"the Mediterranean\"."),
      tr("El café colombiano es famoso en todo el mundo.", ["Colombian coffee is famous {all over|around|throughout} the world.", "Coffee from Colombia is famous {all over|around|throughout} the world."],
        "Coffee in general, with an adjective: no article. *The Colombian coffee would mean a specific coffee you already mentioned."),
      fb("___ is very important to me.", ["Family", "My family"], "[La familia] es muy importante para mí.",
        "Family as an idea, in general: no article. \"My family\" also works if you mean your own. *The family is important sounds like a specific family."),
      sp("Children learn languages faster than adults.", "Three general plurals, no article: \"children\", \"languages\", \"adults\".",
        "Link \"learn languages\" smoothly.", "Say it in English: Los niños aprenden idiomas más rápido que los adultos."),
      tr("Mañana no hay clases, así que los niños se quedan en casa.", ["There's no school tomorrow, so the {kids|children} {are staying|will stay|stay} {at home|home}.", "There are no classes tomorrow, so the {kids|children} {are staying|will stay|stay} {at home|home}."],
        "\"No school\" (no article, the institution), \"the kids\" (our specific kids) and \"at home\" or simply \"home\" (no article). Never *in the house for «en casa» here."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. A/an, uncountable and plural nouns, environment + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "She's a Nurse, the News Is Good",
    "You will be able to use a/an with jobs, rates and exclamations, handle uncountable and plural-only nouns, and combine every article rule of the unit.",
    "Recap: a/an, uncountable and plural-only nouns",
    [
      "English needs \"a\" or \"an\" where Spanish has nothing: jobs (\"She's a nurse\", \"He works as a receptionist\"), rates (\"twice a week\", \"$15 an hour\"), exclamations with a singular noun (\"What a day!\") and numbers (\"a thousand\", \"half an hour\"). Plurals and uncountables lose the \"a\": \"What nice weather!\", \"What good news!\".",
      "\"Information\", \"advice\", \"news\", \"furniture\", \"luggage\", \"homework\", \"research\", \"evidence\" and \"equipment\" have no plural and no \"a\", and take a singular verb. \"People\", \"the police\", \"clothes\", \"jeans\" and \"glasses\" are plural; \"the news\" and \"math\" are singular.",
    ],
    [
      ["My mom is a lawyer.", "Mi mamá es abogada."],
      ["I call my grandmother three times a week.", "Llamo a mi abuela tres veces a la semana."],
      ["The news today is very bad.", "Las noticias de hoy son muy malas."],
      ["The police are looking for the driver.", "La policía está buscando al conductor."],
    ],
    [
      fb("He works ___ at a hotel in Cancun.", "as a receptionist", "Trabaja [de recepcionista] en un hotel de Cancún.",
        "«Trabajar de» is \"work as\" + a/an + job. *He works as receptionist misses the article that every singular job needs."),
      tr("Mi mamá es abogada y mi papá es arquitecto.", "My {mom|mother} is a lawyer and my {dad|father} is an architect.",
        "Each singular job needs \"a\" or \"an\": \"a lawyer\", \"an architect\" (\"an\" before a vowel sound). *My mom is lawyer is the classic Spanish-speaker slip."),
      fb("I call my grandmother three times ___.", "a week", "Llamo a mi abuela tres veces [a la semana].",
        "Frequency uses \"a\": \"three times a week\", \"once a month\". Not *three times the week or *for week."),
      wo("She goes to the gym three times a week.", "Va al gimnasio tres veces a la semana.",
        "Time expression at the end, with \"a\" for the rate: \"three times a week\"."),
      mc("Which sentence is correct?", ["What a long day!", "What long day!", "What a long days!", "How long day!"],
        "With a singular countable noun, the exclamation is \"What a\" + adjective + noun. Spanish «¡Qué día tan largo!» has no article, but English needs \"a\"."),
      tr("Esperé media hora en el aeropuerto.", "I waited {|for} {half an hour|a half hour} at the airport.",
        "«Media hora» is \"half an hour\": \"half\" comes before \"an\". *An half hour is wrong; \"a half hour\" is also used in American English."),
      tr("Había mil personas en el concierto.", "There were {a thousand|one thousand} people at the concert.",
        "«Mil» is \"a thousand\" (or \"one thousand\"), never just *thousand. And \"people\" is plural, so \"There were\"."),
      mc("Choose the correct option: \"Can you give me ___?\"", ["some advice", "an advice", "some advices", "a advice"],
        "\"Advice\" is uncountable: no \"a\", no plural. For one piece, say \"some advice\" or \"a piece of advice\"."),
      fb("I need ___ about the trains to Lima.", ["information", "some information", "more information"], "Necesito [información] sobre los trenes a Lima.",
        "\"Information\" is uncountable: never *an information or *informations."),
      fb("How ___ homework do you have tonight?", "much", "¿[Cuánta] tarea tienes esta noche?",
        "Uncountable nouns take \"much\", not \"many\": \"how much homework\", \"how much luggage\"."),
      fb("Let me give you ___ of advice.", "a piece", "Déjame darte [un] consejo.",
        "To count \"advice\", use \"a piece of\": \"a piece of advice\". *An advice is wrong."),
      tr("Las noticias de hoy son muy malas.", ["Today's news is very bad.", "The news today is very bad.", "The news is very bad today."],
        "\"News\" ends in -s but is singular and uncountable, so \"is\". *The news are bad copies the Spanish plural."),
      mc("Choose the correct option: \"How much ___ do you have?\"", ["luggage", "suitcases", "bags", "cases"],
        "\"How much\" goes with uncountable nouns, so \"luggage\". With \"suitcases\" or \"bags\" (countable) you need \"How many\"."),
      lc("I've got two pieces of luggage.", ["Llevo dos maletas.", "Tengo dos equipajes rotos.", "Me faltan dos maletas.", "Tengo dos trozos de equipaje."],
        "\"A piece of luggage\" is one bag or suitcase, so \"two pieces of luggage\" is «dos maletas» or «dos bultos». \"Luggage\" itself never takes -s."),
      tr("Hay muchas investigaciones sobre el sueño.", "There{'s| is} {a lot of|lots of} research {on|about|into} sleep.",
        "\"Research\" is uncountable: \"a lot of research\", singular verb \"there is\". *There are many researches is wrong. \"Sleep\" in general has no article."),
      tr("Los equipos del hospital son muy viejos.", "The equipment {in|at} the hospital is {very|really} old.",
        "\"Equipment\" is uncountable, so a singular verb: \"is\". *The equipments are is a direct copy of «los equipos son»."),
      wo("Thanks for the information. It was really useful.", "Gracias por la información. Fue muy útil.",
        "Uncountable nouns take \"it\", not \"they\": \"It was really useful\"."),
      fb("The police ___ looking for the driver.", "are", "La policía [está] buscando al conductor.",
        "\"The police\" is always plural in English: \"the police are\". For one person, say \"a police officer\"."),
      mc("Which sentence is correct?", [
        "My new jeans are too long.",
        "My new jeans is too long.",
        "My new jean is too long.",
        "My new jeans are too longs.",
      ], "\"Jeans\", like \"pants\" and \"glasses\", is plural: \"are\". *A jean doesn't exist. Adjectives never take -s."),
      tr("Necesito lentes nuevos.", ["I need {new glasses|some new glasses|a new pair of glasses}."],
        "\"Glasses\" is always plural. To count them, say \"a pair of glasses\". *A new glass means «un vaso nuevo»."),
      tr("Las matemáticas son mi materia favorita.", "{Math|Maths|Mathematics} is my favorite subject.",
        "School subjects ending in -s are singular: \"Math is\", \"Physics is\". And no article: subjects in general."),
      fb("My family ___ from Ecuador.", "is", "Mi familia [es] de Ecuador.",
        "In American English, group nouns like \"family\" and \"team\" usually take a singular verb: \"My family is\"."),
      lc("The staff are really friendly here.", [
        "El personal es muy amable aquí.",
        "Los empleados son muy amigos aquí.",
        "La plantilla es muy grande aquí.",
        "Las personas de aquí son ruidosas.",
      ], "\"Staff\" is a group noun for the people who work somewhere; it can take a plural verb (\"are\") and never adds -s. \"Friendly\" is «amable», not «amigos»."),
      dc("The police have closed the road near the school.",
        "\"The police have\": plural verb. \"The road\" and \"the school\" here are specific places, so they take \"the\"."),
      mt("Match the Spanish with the English. Watch the articles.", [
        ["la contaminación", "pollution"],
        ["el medio ambiente", "the environment"],
        ["la fauna", "wildlife"],
        ["los residuos", "waste"],
      ], "Problems and uncountable ideas take no article (\"pollution\", \"waste\", \"wildlife\"), but \"the environment\" almost always takes \"the\"."),
      tr("La contaminación es un problema grave en las grandes ciudades.", "{Pollution|Air pollution} is a {serious|big} problem in {big|large} cities.",
        "«Contaminación» of a city is \"pollution\" (not \"contamination\"), with no article. \"A serious problem\": a singular countable noun needs \"a\". \"Big cities\" in general: no article."),
      fb("Everybody should help to protect ___.", "the environment", "Todos deberían ayudar a proteger [el medio ambiente].",
        "\"The environment\" is the exception among environmental words: it keeps \"the\"."),
      wo("Many endangered species live in the Amazon.", "Muchas especies en peligro de extinción viven en el Amazonas.",
        "\"Species\" is the same in singular and plural, so \"many species\" needs no -s added. \"The Amazon\" takes \"the\", like all rivers."),
      sp("Recycling is easy, but people don't do it.", "\"Recycling\" in general (no article) and \"people\" (plural verb: \"don't\").",
        "Stress \"easy\" and \"don't\".", "Say it in English: Reciclar es fácil, pero la gente no lo hace."),
      // Traps: the whole unit
      tr("Mi hermano es policía y trabaja de noche dos veces a la semana.", "My brother is a {police officer|policeman|cop} and {|he} works {at night|nights} twice a week.",
        "One person is \"a police officer\" (never *a police), with \"a\" because it's a job. And the rate: \"twice a week\"."),
      mc("Which sentence is correct?", [
        "The news is good: people are buying more electric cars.",
        "The news are good: the people is buying more electric cars.",
        "News is good: the people are buying more electric cars.",
        "The news are good: people are buying more electric cars.",
      ], "\"The news\" (this specific news) is singular: \"is\". \"People\" in general takes no article and a plural verb: \"are\"."),
      tr("¡Qué buena noticia! Por fin tienes trabajo.", ["What {good|great} news! You finally have a job.", "What {good|great} news! You've finally got a job.", "What {good|great} news! You finally got a job."],
        "\"News\" is uncountable, so no \"a\": \"What good news!\" (never *What a good news). But \"job\" is countable: \"a job\"."),
      dc("What a nice person! She gave me some great advice.",
        "\"What a\" with a singular noun (\"person\"), but \"some advice\" with no \"a\", because \"advice\" is uncountable."),
      tr("La gente piensa que los científicos no tienen pruebas.", ["People think {that |}scientists don't have any evidence.", "People think {that |}scientists have no evidence."],
        "\"People\" (no article, plural verb), \"scientists\" in general (no article), and \"evidence\" is uncountable: no plural, \"any evidence\"."),
      sp("My clothes are still wet.", "\"Clothes\" is plural-only: \"are\", never *is. Spanish «ropa» is singular, which is why this is easy to get wrong.",
        "\"Clothes\" sounds like \"close\", one syllable.", "Say it in English: Mi ropa todavía está mojada."),
    ],
  ),
];
