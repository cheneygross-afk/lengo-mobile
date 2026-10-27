// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u27-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u27 (word webs: travel, transport, the city, home, housework, food, sport, travel phrasal verbs, everyday false friends): a short recap, then graded practice.

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
  slug: `en-b2-travel-home-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U27_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Travel, transport and commuting, the city
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Trips, Commuting and the City",
    "You will be able to choose between travel, trip and journey, talk about booking and sightseeing, describe your commute with miss, catch, get on and get off, and describe neighborhoods and how cities change.",
    "Recap: trips, trains and neighborhoods",
    [
      "«Un viaje» is \"a trip\" (never *a travel); \"travel\" is the verb or the activity, and a \"journey\" is the time spent getting somewhere. You \"book\" in advance, \"go sightseeing\" and get over \"jet lag\"; \"luggage\" is uncountable.",
      "You \"commute\", get \"stuck in traffic\" in \"rush hour\", \"miss\" (never *lose) or \"catch\" a train, \"get on/off\" a bus but \"get in/out of\" a car. In the city: \"neighborhood\", \"downtown\" (no preposition), \"the outskirts\", \"crowded\", \"run-down\", \"lively\", and \"housing\" (uncountable).",
    ],
    [
      ["How was your trip to Cartagena?", "¿Qué tal tu viaje a Cartagena?"],
      ["I missed the bus, so I had to walk.", "Perdí el autobús, así que tuve que caminar."],
      ["Get off at the third stop.", "Bájate en la tercera parada."],
      ["Their neighborhood has become really lively.", "Su barrio se ha vuelto muy animado."],
    ],
    [
      mc("Your friend has just come back from Peru. What do you ask?", [
        "How was your trip to Peru?",
        "How was your travel to Peru?",
        "How was your journey to travel Peru?",
        "How were your travels trip to Peru?",
      ], "«Un viaje» = \"a trip\". \"Travel\" is uncountable or a verb, so *How was your travel? is wrong."),
      fb("We're going on a ___ to the mountains next weekend.", "trip", "El fin de semana que viene nos vamos de [viaje] a la montaña.",
        "\"Go on a trip\" or \"take a trip\". Never *make a trip or *go on a travel."),
      tr("Me encanta viajar, pero odio hacer la maleta.", "I love {to travel|traveling}, but I hate packing.",
        "\"Travel\" as a verb; «hacer la maleta» = \"pack\"."),
      tr("El trayecto en autobús dura seis horas.", ["The bus {journey|trip|ride} takes six hours.", "The {journey|trip|ride} by bus takes six hours."],
        "The act of getting from one place to another is a \"journey\" (US often \"trip\" or \"ride\")."),
      fb("You should ___ the hotel in advance. It's always full in August.", "book", "Deberías [reservar] el hotel con antelación. En agosto siempre está lleno.",
        "«Reservar» = \"book\" (or \"make a reservation\"). «Con antelación» = \"in advance\"."),
      tr("Pasamos la tarde haciendo turismo por el centro.", ["We spent the afternoon sightseeing {downtown|in the city center|in the center}.", "We went sightseeing {downtown|in the city center|in the center} in the afternoon."],
        "«Hacer turismo» = \"go sightseeing\". \"Spend\" + time + -ing: \"spent the afternoon sightseeing\"."),
      mc("Which sentence is correct?", [
        "How much luggage do you have?",
        "How many luggages do you have?",
        "How many luggage do you have?",
        "How much luggages do you have?",
      ], "\"Luggage\" (and \"baggage\") is uncountable: \"how much luggage\", \"two bags\", never *luggages."),
      tr("Mi papá tardó cinco días en recuperarse del desfase horario.", "It took my {dad|father} five days to get over {the |his |}jet lag.",
        "«Desfase horario» = \"jet lag\", and you \"get over\" it."),
      lc("We wanted to visit villages off the beaten track.", [
        "Queríamos visitar pueblos poco turísticos.",
        "Queríamos visitar pueblos junto a la carretera.",
        "Queríamos visitar pueblos muy turísticos.",
        "Queríamos visitar pueblos sin perdernos.",
      ], "\"Off the beaten track\" (US also \"path\") = places that few tourists visit. \"Touristy\" is the opposite, and usually negative."),
      tr("Tuvimos una escala de cuatro horas en Panamá.", "We had a four-hour {layover|stopover} in Panama.",
        "A stop between two flights is a \"layover\" (US) or \"stopover\". \"Four-hour\" is a compound adjective: no -s."),
      fb("I ___ to work by train, and it takes about an hour.", "commute", "[Voy y vengo del trabajo] en tren, y tardo una hora más o menos.",
        "\"Commute\" = travel regularly between home and work. It's also a noun: \"my commute\"."),
      tr("Estuvimos una hora atrapados en un embotellamiento.", "We were stuck in {traffic|a traffic jam} for an hour.",
        "«Un atasco» = \"a traffic jam\"; you are \"stuck in traffic\"."),
      wo("The trains are always packed during rush hour.", "Los trenes siempre van llenos en hora pico.",
        "\"During rush hour\" (or \"in / at rush hour\") with no article."),
      mc("Translate: «¡Apúrate o vamos a perder el vuelo!»", [
        "Hurry up or we'll miss the flight!",
        "Hurry up or we'll lose the flight!",
        "Hurry up or we'll lost the flight!",
        "Hurry up or we'll fail the flight!",
      ], "Arriving too late for transport is \"miss\". \"Lose\" is for things that disappear: *lose the flight sounds as if the plane vanished."),
      fb("We ran and just managed to ___ the last train.", "catch", "Corrimos y [alcanzamos] el último tren de milagro.",
        "The opposite of \"miss\" is \"catch\": \"catch the last train\"."),
      tr("Normalmente voy al trabajo en autobús.", ["I usually take the bus to work.", "I usually go to work by bus.", "I usually get the bus to work."],
        "\"Take\" is for the transport you normally use: \"take the bus\". Or \"go by bus\" (no \"the\" after \"by\")."),
      tr("El tren venía con veinte minutos de retraso.", ["The train was twenty minutes late.", "The train was delayed by twenty minutes.", "The train was delayed twenty minutes.", "There was a twenty-minute delay on the train."],
        "A service is \"delayed\" or \"late\"; \"delay\" is also the noun. A person is just \"late\", not *delayed."),
      mt("Match the English with the Spanish.", [
        ["get on the bus", "subirse al autobús"],
        ["get off the train", "bajarse del tren"],
        ["get in the car", "subirse al carro"],
        ["get out of the taxi", "bajarse del taxi"],
        ["the fare", "el precio del boleto"],
        ["the crosswalk", "el paso de peatones"],
      ], "\"Get on / off\" for buses, trains and planes; \"get in / out of\" for cars and taxis. Spanish uses «subir» and «bajar» for all of them."),
      mc("Which sentence is correct?", [
        "She got out of the taxi and thanked the driver.",
        "She got off of the taxi and thanked the driver.",
        "She got down the taxi and thanked the driver.",
        "She went out the taxi and thanked to the driver.",
      ], "For cars and taxis: \"get out of\". \"Thank\" + person takes no preposition."),
      tr("Bájate en la próxima parada y cruza la calle.", "Get off at the next stop and cross the street.",
        "\"Get off\" a bus or train. «Próxima» = \"next\"."),
      fb("I grew up in a quiet ___ on the north side of the city.", "neighborhood", "Crecí en un [barrio] tranquilo en el lado norte de la ciudad.",
        "«Barrio» = \"neighborhood\" (UK \"neighbourhood\"). \"District\" is more official."),
      mc("Translate: «Mi hermana trabaja en el centro.»", [
        "My sister works downtown.",
        "My sister works in downtown.",
        "My sister works at the downtown.",
        "My sister works in the down town.",
      ], "In American English \"downtown\" works like an adverb: \"work downtown\", \"go downtown\", with no preposition."),
      tr("Viven en las afueras de Quito.", "They live on the outskirts of Quito.",
        "«Las afueras» = \"the outskirts\", with \"on\"."),
      lc("The old part of town is quite run-down.", [
        "La parte vieja de la ciudad está bastante deteriorada.",
        "La parte vieja de la ciudad está muy concurrida.",
        "La parte vieja de la ciudad está cuesta abajo.",
        "La parte vieja de la ciudad está muy animada.",
      ], "\"Run-down\" = in bad condition because nobody has looked after it («deteriorado»)."),
      tr("La playa estaba llena de gente.", ["The beach was {really |very |}crowded.", "The beach was packed.", "The beach was full of people."],
        "\"Crowded\" is the natural word for «lleno de gente»; \"packed\" is stronger."),
      fb("A new bridge ___ built over the river right now.", "is being", "Ahora mismo [se está construyendo] un puente nuevo sobre el río.",
        "Present continuous passive: \"is being\" + participle. Spanish «se está construyendo» becomes a passive in English."),
      tr("La vieja estación se ha convertido en un museo.", "The old {station|train station} has been turned into a museum.",
        "Urban change is usually told in the passive: \"has been turned into\"."),
      mc("Which sentence is correct?", [
        "There isn't enough affordable housing for young people.",
        "There aren't enough affordable housings for young people.",
        "There isn't enough affordables housing for young people.",
        "There aren't enough affordable housing for young people.",
      ], "\"Housing\" is uncountable: \"there isn't enough housing\", never *housings."),
      dc("Rents have gone up so much that many families have moved to the suburbs.",
        "\"Rent\" is the money you pay; \"the suburbs\" are comfortable residential areas, not «suburbios»."),
      dc("If we miss the last bus, we'll have to take a taxi.",
        "First conditional with \"miss\" (never *lose) the bus."),
      wo("We set off early to avoid the rush hour traffic.", "Salimos temprano para evitar el tráfico de la hora pico.",
        "\"Set off\" = start a journey. \"Rush hour\" can work like an adjective before \"traffic\"."),
      tr("El año pasado fuimos de viaje a Chile y nos quedamos en un barrio muy animado.", "Last year we went on a trip to Chile and stayed in a {very|really} lively neighborhood.",
        "\"Go on a trip\" (never *make a travel), and \"lively\" = «animado»."),
      sp("My commute takes almost an hour because of the traffic.", "\"Commute\" as a noun, and \"because of\" + noun.",
        "Stress com-MUTE on the second syllable.", "Say it in English: Mi trayecto al trabajo dura casi una hora por el tráfico."),
      sp("Sorry I'm late. I missed the train.", "\"Miss\" the train, never *lose it.",
        "Say \"missed\" with a /t/ at the end: MIST.", "Say it in English: Perdón por llegar tarde. Perdí el tren."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Home and housing, housework and DIY, food and cooking
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Home, Chores and Cooking",
    "You will be able to say «mudarse» with move, move in and move out, talk about rent, landlords and bills, choose do or make for chores, say when you have something done, and talk about recipes, cooking and flavors.",
    "Recap: moving, chores and the kitchen",
    [
      "«Mudarse» is just \"move\" (never *move myself); \"move in\" and \"move out\" add the start or end. The \"landlord\" rents a place to the \"tenant\", who pays a \"deposit\" and the \"utility bills\"; to buy, you take out a \"mortgage\". Chores take \"do\" (\"do the dishes\", \"do the laundry\"), except \"make the bed\"; for a professional's job use \"have / get + object + participle\".",
      "A \"recipe\" is for cooking, a \"receipt\" is from a store, and a doctor gives a \"prescription\". You \"boil\", \"fry\", \"roast\" and \"bake\"; food can be \"bland\", \"savory\" or \"spicy\", and «¡qué rico!» is \"It's delicious\", not *rich.",
    ],
    [
      ["We're moving to a smaller apartment next month.", "El mes que viene nos mudamos a un departamento más pequeño."],
      ["It's your turn to do the dishes.", "Te toca lavar los platos."],
      ["We're getting the roof repaired on Monday.", "El lunes nos arreglan el techo."],
      ["Don't forget to keep the receipt.", "No te olvides de guardar el recibo."],
    ],
    [
      mc("Translate: «Nos mudamos el año pasado.»", [
        "We moved last year.",
        "We moved ourselves last year.",
        "We changed house last year.",
        "We were moved last year.",
      ], "«Mudarse» = \"move\". It isn't reflexive in English, and *change house is a literal translation."),
      tr("¿Cuándo se mudan tus amigos a la casa nueva?", "When are your friends moving {in|into the new house|into their new house}?",
        "\"Move in\" = start living in a place. The present continuous expresses the arrangement."),
      fb("I ___ of my parents' house when I was twenty-two.", "moved out", "[Me fui] de la casa de mis padres cuando tenía veintidós años.",
        "\"Move out (of)\" = stop living in a place."),
      wo("My brother moved in with his girlfriend.", "Mi hermano se fue a vivir con su novia.",
        "\"Move in with\" someone = start living with them."),
      fb("Our ___ never answers when something breaks.", "landlord", "Nuestro [casero] nunca contesta cuando algo se rompe.",
        "The person who owns the place and rents it to you is the \"landlord\" (now used for men and women). You are the \"tenant\"."),
      mt("Match the English with the Spanish.", [
        ["tenant", "inquilino"],
        ["deposit", "depósito, fianza"],
        ["lease", "contrato de alquiler"],
        ["mortgage", "hipoteca"],
        ["roommate", "compañero de cuarto o de departamento"],
        ["utility bills", "facturas de luz, gas y agua"],
      ], "Key housing words. \"Mortgage\" has a silent t: MOR-gij."),
      tr("Le alquila el departamento a una pareja joven.", ["{She|He} rents {the|her|his} apartment {out |}to a young couple.", "{She|He} rents out {the|her|his} apartment to a young couple."],
        "The owner \"rents\" or \"rents out\" a place TO someone; the tenant \"rents\" it FROM the owner."),
      tr("La habitación cuesta 450 dólares al mes, con los gastos incluidos.", "The room {is|costs} 450 dollars a month, {utilities|bills} included.",
        "\"Utilities included\" or \"bills included\" are the usual phrases in ads. \"A month\" = «al mes»."),
      fb("They're going to ___ the old house before they move in.", ["fix up", "renovate", "do up"], "Van a [remodelar] la casa vieja antes de mudarse.",
        "«Remodelar» (Spain: «reformar») a home = \"fix up\" (US), \"do up\" (UK) or \"renovate\". \"Reform\" is for laws and systems."),
      mc("Which sentence is correct?", [
        "I do the laundry on Saturdays.",
        "I make the laundry on Saturdays.",
        "I do the laundries on Saturdays.",
        "I wash the laundry on Saturdays myself.",
      ], "Most chores take \"do\": \"do the laundry\", \"do the dishes\", \"do the housework\"."),
      fb("Please ___ your bed before you leave.", "make", "Por favor, [haz] la cama antes de irte.",
        "The big exception: \"make the bed\" (and \"make dinner\", \"make a mess\")."),
      tr("Esta semana te toca sacar la basura.", ["It's your turn to take {out the trash|the trash out|out the garbage|the garbage out} this week.", "This week it's your turn to take {out the trash|the trash out|out the garbage|the garbage out}."],
        "«Te toca» = \"it's your turn\" + to + verb. \"Take out the trash\" is separable."),
      tr("Guarda la ropa limpia, por favor.", ["Put the clean clothes away, please.", "Put away the clean clothes, please.", "Please put the clean clothes away.", "Please put away the clean clothes."],
        "«Guardar» = \"put away\", separable: \"put them away\"."),
      mc("Which sentence is correct?", [
        "These are your books. Put them away.",
        "These are your books. Put away them.",
        "These are your books. Put them in away.",
        "These are your books. Keep away them.",
      ], "With a pronoun, the separable phrasal verb splits: \"put them away\", never *put away them."),
      tr("Tengo que barrer la cocina y pasar la aspiradora en la sala.", "I {have to|need to} sweep the kitchen and vacuum the living room.",
        "«Barrer» = \"sweep\", «pasar la aspiradora» = \"vacuum\" (UK \"hoover\")."),
      lc("He's useless at DIY.", [
        "No sirve para el bricolaje.",
        "No sabe hacer la tarea.",
        "Odia limpiar la casa.",
        "Hace todo él mismo.",
      ], "\"DIY\" (do-it-yourself) = home repairs and improvements you do yourself, «bricolaje»."),
      fb("We're ___ the living room painted next week.", ["having", "getting"], "La semana que viene [nos pintan] la sala.",
        "Causative: \"have\" or \"get\" + object + participle means a professional does it, not you."),
      tr("Tengo que llevar a arreglar el celular.", ["I {have to|need to} get my phone {fixed|repaired}.", "I {have to|need to} have my phone {fixed|repaired}."],
        "When someone else does the work: \"get my phone fixed\". *I need to fix my phone means you'll do it yourself."),
      wo("We had new windows installed last year.", "El año pasado nos pusieron ventanas nuevas.",
        "The object (\"new windows\") goes BEFORE the participle (\"installed\")."),
      mc("Which sentence means a hairdresser did it?", [
        "I had my hair cut yesterday.",
        "I cut my hair yesterday.",
        "I had cut my hair yesterday.",
        "I have cut my hair yesterday.",
      ], "\"Have + object + participle\" = someone did it for you. \"I cut my hair\" means you did it yourself."),
      mc("You're at a store checkout. What do you ask for?", [
        "Can I have the receipt, please?",
        "Can I have the recipe, please?",
        "Can I have the prescription, please?",
        "Can I have the receive, please?",
      ], "The paper you get when you pay is a \"receipt\" (rih-SEET, silent p). A \"recipe\" is for cooking."),
      tr("¿Me pasas la receta del pastel de chocolate?", ["Can you {send|give} me the recipe for the chocolate cake?", "Could you {send|give} me the recipe for the chocolate cake?", "Can you {send|give} me the chocolate cake recipe?", "Could you {send|give} me the chocolate cake recipe?"],
        "A cooking «receta» = \"recipe\" (REH-sih-pee, three syllables)."),
      tr("Mi papá es muy buen cocinero.", "My {dad|father} is a {very|really} good cook.",
        "«Cocinero» = \"cook\". A \"cooker\" is a stove (UK), so never *a good cooker."),
      fb("___ the eggs for eight minutes, then put them in cold water.", "Boil", "[Hierve] los huevos ocho minutos y luego ponlos en agua fría.",
        "\"Boil\" = cook in boiling water."),
      fb("My grandmother ___ her own bread every Sunday.", "bakes", "Mi abuela [hace] su propio pan todos los domingos.",
        "Bread, cakes and cookies are \"baked\" in the oven. Meat and vegetables are \"roasted\"."),
      tr("Para mí, el pollo a la parrilla con papas al horno.", ["I'd like the grilled chicken with baked potatoes.", "I'll have the grilled chicken with baked potatoes.", "For me, the grilled chicken with baked potatoes."],
        "Participles as adjectives: \"grilled chicken\", \"baked potatoes\"."),
      mc("Translate: «¡Esta sopa está riquísima!»", [
        "This soup is delicious!",
        "This soup is very rich!",
        "This soup is richest!",
        "This soup is so tasty rich!",
      ], "«Rico» (food) = \"delicious\" or \"really good\". \"Rich\" food is heavy, with a lot of fat or cream."),
      tr("El arroz está un poco soso. ¿Le ponemos sal?", ["The rice is a {bit|little} bland. Should we add {some |}salt?", "The rice is a {bit|little} bland. Shall we add {some |}salt?"],
        "«Soso» = \"bland\". \"Salty\" means there's too much salt."),
      lc("Is this sauce very spicy?", [
        "¿Esta salsa pica mucho?",
        "¿Esta salsa está muy caliente?",
        "¿Esta salsa es muy dulce?",
        "¿Esta salsa está muy salada?",
      ], "\"Spicy\" = «picante». \"Hot\" can mean «picante» or just warm, so \"spicy\" is clearer."),
      tr("Esta noche no tengo ganas de cocinar. Pidamos comida para llevar.", ["I don't feel like cooking tonight. Let's get takeout.", "I don't feel like cooking tonight. Let's order takeout.", "I don't feel like cooking tonight. Let's {order in|get takeaway}."],
        "Food you buy ready to eat at home is \"takeout\" (US) or \"takeaway\" (UK). \"Feel like\" + -ing = «tener ganas de»."),
      dc("We eat out about twice a month, usually at a small Thai place.",
        "\"Eat out\" = eat at a restaurant."),
      dc("The landlord is having the heating fixed before we move in.",
        "Causative \"have + object + participle\", and \"move in\" after \"before\" in the present."),
      tr("Nos mudamos el mes que viene, así que estamos pintando el departamento nuevo nosotros mismos.", "We're moving next month, so we're painting the new apartment ourselves.",
        "Here \"ourselves\" is correct because you do the work (no causative). But \"move\" is never reflexive."),
      sp("I'll do the dishes if you make dinner.", "\"Do the dishes\" but \"make dinner\": \"make\" when you produce something.",
        "Stress DISHes and DINner.", "Say it in English: Yo lavo los platos si tú haces la cena."),
      sp("We need to get the dishwasher repaired.", "Causative \"get + object + participle\" when a professional does the job.",
        "Say \"repaired\" with a /d/ at the end: ri-PAIRD.", "Say it in English: Tenemos que mandar a arreglar el lavaplatos."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Sport and leisure, travel phrasal verbs, false friends + whole unit
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Sport, Phrasal Verbs and False Friends",
    "You will be able to choose play, go or do for each sport, use win and beat correctly, use set off, check in, pick up, drop off and put up with with the pronoun in the right place, avoid everyday false friends, and combine all the vocabulary of the unit.",
    "Recap: beat them, pick her up, and false friends",
    [
      "\"Play\" ball games, \"go\" + -ing activities, \"do\" yoga or karate. You \"win\" a match or a prize but \"beat\" a team (never *we won them); a draw is a \"tie\" in the US. You \"take up\" a hobby and \"work out\" at the gym.",
      "\"Set off\", \"check in\", \"check out of\", \"get away\"; with a pronoun, separable verbs split: \"pick her up\", \"drop them off\". \"Put up with\" = tolerate («soportar»; \"support\" means «apoyar»). False friends: \"carpet\" (alfombra) vs \"folder\", \"fabric\" (tela) vs \"factory\", \"exit\" (salida) vs \"success\", \"lecture\" (conferencia) vs \"reading\", and «molestar» = \"bother\".",
    ],
    [
      ["We beat them two to one in the final.", "Les ganamos dos a uno en la final."],
      ["She took up tennis when she retired.", "Empezó a jugar tenis cuando se jubiló."],
      ["Can you pick me up at the station?", "¿Puedes recogerme en la estación?"],
      ["The party was a great success.", "La fiesta fue un gran éxito."],
    ],
    [
      mc("Complete: \"My daughter ___ volleyball and ___ karate.\"", ["plays / does", "does / plays", "plays / plays", "goes / does"],
        "\"Play\" + ball games, \"do\" + martial arts and individual activities like yoga."),
      tr("Los domingos vamos a nadar al lago.", "On Sundays we go swimming {in|at} the lake.",
        "Activities ending in -ing take \"go\": \"go swimming\", \"go hiking\", \"go running\"."),
      fb("Do you ___ any sports?", "play", "¿[Practicas] algún deporte?",
        "«Practicar deporte» = \"play sports\" (or \"do sports\"), never *practice sport."),
      wo("She does yoga three times a week.", "Ella hace yoga tres veces por semana.",
        "\"Do\" yoga, Pilates, karate, gymnastics."),
      mc("Translate: «Les ganamos tres a cero.»", [
        "We beat them three to nothing.",
        "We won them three to nothing.",
        "We won to them three to nothing.",
        "We beat to them three to nothing.",
      ], "You \"beat\" a team or a person; you \"win\" a game, match or prize. *We won them is the classic mistake. (US scores: \"three to nothing\", \"3-0\".)"),
      fb("Our team ___ the championship last year.", "won", "Nuestro equipo [ganó] el campeonato el año pasado.",
        "\"Win\" + the competition (win, won, won; \"won\" sounds like \"one\")."),
      tr("Perdimos contra un equipo de Monterrey.", "We lost to a team from Monterrey.",
        "\"Lose to\" a team = «perder contra». Past: \"lost\"."),
      tr("El partido de ayer terminó en empate.", ["Yesterday's {game|match} ended in a {tie|draw}.", "The {game|match} yesterday ended in a {tie|draw}.", "Yesterday's {game|match} was a {tie|draw}."],
        "«Empate» = \"tie\" (US) or \"draw\" (UK)."),
      lc("Who scored the winning goal?", [
        "¿Quién marcó el gol de la victoria?",
        "¿Quién vio el gol de la victoria?",
        "¿Cómo van en el partido?",
        "¿Quién ganó el primer premio?",
      ], "You \"score\" a goal or a point. \"What's the score?\" asks about the result."),
      fb("I ___ photography last year, and now I'm hooked.", "took up", "[Empecé] con la fotografía el año pasado y ahora estoy enganchado.",
        "\"Take up\" a hobby = start doing it. \"Give up\" is to stop."),
      tr("Hago ejercicio en el gimnasio cuatro veces por semana.", ["I work out at the gym four times a week.", "I exercise at the gym four times a week."],
        "\"Work out\" = exercise, especially at a gym. The noun is \"a workout\"."),
      fb("We ___ at dawn to avoid the heat.", ["set off", "set out", "left"], "[Salimos] al amanecer para evitar el calor.",
        "\"Set off\" (or \"set out\") = start a journey. It takes no object."),
      tr("Tenemos que dejar el hotel antes del mediodía.", ["We {have to|need to} check out {of the hotel |}{before|by} noon.", "We {have to|need to} check out {of the hotel |}{before|by} midday."],
        "Leave a hotel = \"check out (of the hotel)\". Arrive and register = \"check in\"."),
      tr("Este verano queremos escaparnos a la playa.", ["This summer we want to get away to the beach.", "We want to get away to the beach this summer."],
        "\"Get away\" = go on vacation to escape routine. The noun is \"a getaway\"."),
      mc("Which sentence is correct?", [
        "I'll pick her up at the airport.",
        "I'll pick up her at the airport.",
        "I'll pick at her up the airport.",
        "I'll up pick her at the airport.",
      ], "With a pronoun, \"pick up\" splits: \"pick her up\". *Pick up her is always wrong."),
      tr("¿Me puede dejar en la esquina, por favor?", ["Could you drop me off at the corner, please?", "Can you drop me off at the corner, please?"],
        "\"Drop off\" = take someone somewhere and leave them there. Pronoun in the middle: \"drop me off\"."),
      wo("I'll drop the kids off and then go to the gym.", "Dejo a los niños y luego voy al gimnasio.",
        "With a noun, the particle can go before or after: \"drop the kids off\" / \"drop off the kids\".",
        ["I'll drop off the kids and then go to the gym."]),
      tr("Pasamos la tarde dando una vuelta por el mercado.", "We spent the afternoon looking around the market.",
        "\"Look around\" a place = walk around to see what's there."),
      mc("Translate: «No soporto el ruido de la obra.»", [
        "I can't put up with the noise from the construction.",
        "I can't support the noise from the construction.",
        "I can't put it up with the noise from the construction.",
        "I can't put up the noise from the construction.",
      ], "«Soportar» = \"put up with\" or \"can't stand\". \"Support\" means «apoyar». \"Put up with\" never splits."),
      tr("¿Cómo los aguantas?", "How do you put up with them?",
        "\"Put up with\" + pronoun: the pronoun goes at the end, after \"with\"."),
      fb("We need a new ___ for the bedroom. The old one is full of stains.", "carpet", "Necesitamos una [alfombra] nueva para el cuarto. La vieja está llena de manchas.",
        "\"Carpet\" = «alfombra». «Carpeta» (for papers) is a \"folder\"."),
      tr("Guardo las facturas en una carpeta roja.", "I keep the bills in a red folder.",
        "«Carpeta» = \"folder\" (or \"binder\" with rings). \"Carpet\" is on the floor."),
      mc("Translate: «Mi tío trabaja en una fábrica de zapatos.»", [
        "My uncle works in a shoe factory.",
        "My uncle works in a shoe fabric.",
        "My uncle works in a shoes fabric.",
        "My uncle works in a shoes factory.",
      ], "«Fábrica» = \"factory\"; \"fabric\" = «tela». Noun + noun: \"a shoe factory\" (no -s on the first noun)."),
      lc("This juice contains no preservatives.", [
        "Este jugo no lleva conservantes.",
        "Este jugo no lleva azúcar.",
        "Este jugo no se puede conservar.",
        "Este jugo no lleva fruta natural.",
      ], "A \"preservative\" is «un conservante». «Preservativo» means something completely different in English, so be careful."),
      fb("Her first novel was a huge ___.", "success", "Su primera novela fue un gran [éxito].",
        "«Éxito» = \"success\". An \"exit\" is «una salida»."),
      tr("¿Dónde está la salida de emergencia?", "Where's the emergency exit?",
        "\"Exit\" = «salida»."),
      fb("The professor gave a ___ on the history of the city.", "lecture", "El profesor dio una [conferencia] sobre la historia de la ciudad.",
        "A \"lecture\" is a talk, especially at a university. «Lectura» is \"reading\"."),
      tr("Perdona que te moleste, pero ¿tienes hora?", ["Sorry to bother you, but do you have the time?", "Sorry to bother you, but have you got the time?", "Sorry to disturb you, but do you have the time?"],
        "«Molestar» = \"bother\" or \"disturb\". Never use \"molest\": it refers to a serious crime."),
      dc("We checked in at the hotel and then went sightseeing.",
        "\"Check in\" at a hotel, then \"go sightseeing\"."),
      dc("I wish we had checked the timetable before we set off.",
        "Past regret: \"I wish\" + past perfect, and \"set off\" = start a journey (past: \"set off\")."),
      tr("Si hubiera revisado el horario, no habría perdido el tren.", "If I had checked the {timetable|schedule}, I wouldn't have missed the train.",
        "Third conditional: \"had\" + participle in the if-clause (never *would have), and \"miss\" (not *lose) the train."),
      tr("Te recojo en la estación cuando llegue tu tren.", ["I'll pick you up at the station when your train {arrives|gets in}.", "I'll pick you up {from|at} the station when your train {arrives|gets in}."],
        "\"Will\" for the offer, pronoun in the middle (\"pick you up\"), and present simple after \"when\" for the future."),
      sp("We beat them in the final, and the fans went crazy.", "\"Beat\" a team (past: \"beat\").",
        "\"Beat\" in the past sounds the same as the present: BEET.", "Say it in English: Les ganamos en la final, y los aficionados se volvieron locos."),
      sp("I can't put up with the noise anymore. I'm moving out.", "\"Put up with\" (three parts, never split) and \"move out\".",
        "Link the words: PU-dup-with.", "Say it in English: Ya no aguanto el ruido. Me voy del departamento."),
    ],
  ),
];
