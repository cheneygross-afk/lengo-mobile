// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-writing-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each A2 unit's review lesson (unit-reviews.ts), keyed
// by the unit's first lesson (unit-defs.ts). Instructions in English; each
// task only needs the grammar and words of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [30, 70], rubric, modelAnswer, explanation);

export const A2_UNIT_WRITING: Record<string, WriteExercise> = {
  "preterite-regular-verbs-1": t(
    "Write about what you did last Saturday: where you went in the morning, who you ate with and what you did in the evening. Use regular verbs in the preterite.",
    ["At least five regular preterite verbs (trabajé, comí, salí…)", "Time words (el sábado, por la mañana, después, luego)", "At least one spelling-change form (llegué, busqué, empecé…)", "Different people (yo, nosotros, mis amigos…)"],
    "El sábado pasado me levanté tarde. Por la mañana caminé al mercado y compré fruta. Luego llegué a casa de mi amiga Clara y comimos juntas. Por la tarde estudié un poco. Por la noche mis amigos y yo bailamos en una fiesta y volví a casa a las dos.",
    "Regular preterite: -é, -aste, -ó, -amos, -aron (-ar) and -í, -iste, -ió, -imos, -ieron (-er/-ir). Watch the spelling: llegué, busqué, empecé."
  ),
  "preterite-irregular-verbs-1": t(
    "Write about a trip you took. Say where you went, how you got there, what you did and who you were with. Use at least four irregular preterite forms (fui, tuve, hice, estuve…).",
    ["Fui / fuimos for where you went", "At least four irregular preterites (estuve, tuve, hice, pude, vino…)", "How you travelled (en tren, en avión…)", "One sentence about how it was (fue…)"],
    "El verano pasado fui a Lisboa con mi hermano. Fuimos en avión y el viaje fue muy corto. Estuvimos allí cinco días. Hicimos muchas fotos y comimos pescado todos los días. Un día tuvimos un problema con el hotel, pero no pasó nada. Fue un viaje genial.",
    "Irregular preterites have no written accents: fui, fue, estuve, tuvimos, hicimos. Ir and ser share the same forms (fui, fue): the context tells you which."
  ),
  "imperfect-tense-1": t(
    "Describe your life when you were ten years old: where you lived, what your house was like, what you used to do after school and what you liked.",
    ["Cuando tenía… años", "At least five imperfect verbs (vivía, era, jugaba…)", "Habitual words (siempre, todos los días, a menudo)", "A description of a place or person (era, tenía, había)"],
    "Cuando tenía diez años, vivía en un pueblo pequeño. Nuestra casa era vieja y tenía un jardín enorme. Todos los días iba a la escuela a pie. Después de clase jugaba al fútbol con mis vecinos. Me gustaban mucho los perros y siempre quería uno.",
    "The imperfect describes how things were and what used to happen: vivía, era, jugaba, iba. Ir, ser and ver are its only irregular verbs."
  ),
  "preterite-vs-imperfect-1": t(
    "Tell a short story about something that happened to you on the way to work or school. Describe the background (the weather, what you were doing) and then what happened.",
    ["Imperfect for the background (hacía, llovía, iba…)", "Preterite for the events (vi, encontré, llegué…)", "An interruption: estaba… cuando + preterite", "An ending (al final…)"],
    "Era lunes y llovía mucho. Yo iba al trabajo en bicicleta y estaba muy cansada. Cuando cruzaba el parque, vi un perro pequeño debajo de un banco. Tenía frío y estaba solo. Lo llevé a casa y llamé al número de su collar. Al final su dueña vino a buscarlo.",
    "Imperfect for the scene (era lunes, llovía, iba) and preterite for each event (vi, llevé, llamé). An ongoing action is interrupted by a preterite: cuando cruzaba… vi."
  ),
  "a2-vocabulary-practice-1": t(
    "Tell the story of the day you met a good friend. Say where you were, what the situation was, what happened and how you found out something about them. Use conocí and supe.",
    ["Conocí a… for meeting someone", "Supe que… for finding out", "Both past tenses: background and events", "At least six past-tense verbs"],
    "Conocí a Marcos hace cinco años. Yo trabajaba en una cafetería y él venía todas las mañanas. Un día no tenía dinero para pagar y yo lo invité al café. Hablamos durante media hora. Después supe que también era músico, como yo. Desde ese día somos amigos.",
    "Some verbs change meaning in the preterite: conocí (I met), supe (I found out), no pude (I didn't manage), quise (I tried)."
  ),
  "a2-perfect-he-comido": t(
    "Write a message to a friend about your week. Say what you've done today and this week, something you haven't done yet and something you've never done but want to do.",
    ["Present perfect for today and this week (he trabajado, he visto…)", "At least one irregular participle (hecho, visto, escrito, puesto…)", "Ya and todavía no", "Nunca he… or ¿alguna vez has…?"],
    "¡Hola, Sara! Esta semana he trabajado mucho. Hoy he escrito tres informes y he hecho la compra. Ya he visto la nueva película de Almodóvar, pero todavía no he leído el libro. Nunca he estado en Japón y quiero ir el año que viene. ¿Alguna vez has viajado allí?",
    "Haber + participle for today, this week and life experience: he trabajado, he escrito, he hecho. Ya (already), todavía no (not yet), nunca he (I've never)."
  ),
  "direct-object-pronouns-1": t(
    "You're tidying your room before a trip. Write what you do with five things (keys, passport, books, a jacket, glasses) using lo, la, los or las so you don't repeat the nouns.",
    ["At least five direct object pronouns (lo, la, los, las)", "Pronoun before the conjugated verb (lo pongo)", "Pronoun attached to an infinitive at least once (voy a guardarlo)", "Agreement with the noun (las llaves → las)"],
    "Primero busco las llaves y las pongo en la mesa. Mi pasaporte está en el cajón: lo saco y lo guardo en la mochila. Los libros no los necesito, así que los dejo en la estantería. La chaqueta azul la voy a llevar puesta. ¿Y mis gafas? No las encuentro.",
    "Lo, la, los, las replace the object and agree with it: las llaves → las pongo. They go before a conjugated verb or on the end of an infinitive (voy a guardarlo)."
  ),
  "indirect-object-pronouns-1": t(
    "It's a friend's birthday party. Write what you and other guests give and say to the people there, and what everyone likes. Use me, te, le, nos, les.",
    ["At least four indirect object pronouns", "Dar and decir with le / les", "A gustar-type verb (le encanta, les interesa…)", "Le with a named person (le doy a Juan…)"],
    "Hoy es el cumpleaños de Pedro. Yo le doy un libro de cocina porque le encanta cocinar. Sus padres le regalan una bicicleta. A sus primos les damos chocolate. Pedro nos dice gracias a todos. Después su abuela me pregunta si quiero más pastel.",
    "Le and les say to or for whom: le doy un libro, les damos chocolate. With gustar-type verbs the person is the indirect object: le encanta cocinar."
  ),
  "reflexive-verbs-daily-routine-1": t(
    "Compare your routine on a weekday and on Sunday: when you wake up, get up, shower and go to bed, and how you feel.",
    ["At least five reflexive verbs (me despierto, me levanto, me ducho…)", "Pronoun matches the person", "Times or sequence words (primero, luego, después)", "A contrast between the two days (pero, en cambio)"],
    "Entre semana me despierto a las seis y media. Me levanto enseguida, me ducho y me visto en diez minutos. Por la noche me acuesto pronto porque estoy cansado. Los domingos, en cambio, me levanto a las diez y me quedo en pijama toda la mañana. Me relajo mucho.",
    "Reflexive verbs take a pronoun that matches the subject: me levanto, te duchas, se acuesta. Some verbs change meaning with se: quedar (arrange to meet) vs. quedarse (stay)."
  ),
  "comparisons-superlatives-1": t(
    "Compare two cities, places or phones you know. Say which is bigger, cheaper, better or more interesting, use one tan… como, and name the best thing about one of them.",
    ["Más / menos + adjective + que", "Tan… como or tanto… como", "Mejor or peor", "A superlative (el más…, la mejor… de…)"],
    "Barcelona es más grande que Valencia, pero Valencia es más tranquila. En Valencia los pisos son menos caros que en Barcelona. Las dos ciudades tienen tantas playas como museos. Para mí, la comida de Valencia es mejor. La paella valenciana es el plato más famoso de la región.",
    "Más / menos + adjective + que; tan + adjective + como; tanto/a/os/as + noun + como. Bueno → mejor, malo → peor, and the superlative is el / la más… de."
  ),
  "future-tense-1": t(
    "Write about your life in ten years. Where will you live, what will you do, who will you be with? Make at least one guess about something happening right now (estará…).",
    ["At least five future forms (viviré, trabajaré…)", "At least two irregular futures (tendré, haré, podré, saldré…)", "A time expression (dentro de diez años, en el futuro)", "A guess about now (será, estará…)"],
    "Dentro de diez años viviré en una casa cerca del mar. Trabajaré desde casa y tendré más tiempo libre. Haré yoga todas las mañanas y podré viajar mucho. Mi hermano vivirá cerca y sus hijos vendrán a visitarme. ¿Y mi mejor amiga? Ahora estará en el trabajo, pero luego la llamaré.",
    "The future adds -é, -ás, -á, -emos, -éis, -án to the infinitive. Irregular stems: tendr-, har-, podr-, saldr-, vendr-. It also guesses about now: estará en el trabajo."
  ),
  "por-vs-para-1": t(
    "Write a note to a coworker about a trip you're planning. Say where you're going and why, how you'll get there, how long you'll stay and how much you paid. Use por and para at least three times each.",
    ["Para for destination and purpose (para Sevilla, para ver…)", "Por for cause, means and duration (por trabajo, por teléfono, por una semana)", "Por for price or exchange (por cien euros)", "Para for deadlines or recipients"],
    "Hola, Carlos: El lunes salgo para Sevilla por trabajo. Voy allí para hablar con un cliente importante. Viajo en tren porque es más rápido. Me quedo allí por tres días. Compré el billete por cien euros. ¿Necesitas algo para el viernes? Te traigo un regalo para tu hija.",
    "Para looks ahead: destination, purpose, deadline, recipient. Por looks at cause and route: reason, means, duration, price or exchange."
  ),
  "a2-vocabulary-practice-3": t(
    "Write a thank-you message to a friend who helped you move flat. Say thanks for what they did, why you're writing, and invite them to dinner. Use por and para correctly.",
    ["Gracias por…", "Para + infinitive for purpose", "Por for cause (por eso, por tu ayuda)", "Para for a person or a date"],
    "Querida Inés: Te escribo para darte las gracias por tu ayuda el sábado. Gracias a ti, la mudanza fue fácil. Por eso quiero invitarte a cenar a mi piso nuevo. ¿Puedes venir el viernes por la noche? Voy a cocinar algo especial para ti. ¡Gracias por todo! Un beso, Lola",
    "Gracias por + noun or infinitive. Para + infinitive says why (para darte las gracias); por la noche, por eso and por tu ayuda show cause and time."
  ),
  "personal-a": t(
    "Write about a lonely day: nobody called you, you didn't see anyone and nothing happened. Then say who you called or visited in the evening. Use double negatives and the personal a.",
    ["Nadie, nada and nunca with no before the verb", "The personal a before people (vi a…, llamé a…)", "No personal a before things", "At least six sentences"],
    "Ayer no me llamó nadie. No vi a nadie en la calle y no hice nada interesante. Nunca tengo días tan tranquilos. Por la tarde vi una película, pero no me gustó nada. Por la noche llamé a mi madre y después visité a mi vecina Rosa. Ella nunca está sola.",
    "Negatives double up in Spanish: no vi a nadie, no hice nada. A person as direct object takes a: vi a mi vecina, llamé a mi madre; a thing doesn't: vi una película."
  ),
  "mente-adverbs-1": t(
    "A tourist asks you how to get from the station to a museum. Write the directions, and add how they should walk or cross the streets using two -mente adverbs.",
    ["Directions with usted commands (siga, gire, cruce…)", "Words for places (a la derecha, todo recto, la esquina…)", "At least two -mente adverbs", "A polite opening or closing"],
    "Claro, es fácil. Salga de la estación y siga todo recto por esta calle. En la segunda esquina, gire a la derecha. Cruce la plaza con cuidado: los coches pasan rápidamente. El museo está al lado de una farmacia. Normalmente se tarda diez minutos andando. ¡Buen viaje!",
    "Adverbs in -mente come from the feminine adjective: rápida → rápidamente, normal → normalmente. Directions to a stranger use usted commands: siga, gire, cruce."
  ),
  "a2g-tu-commands-regular": t(
    "Your friend is staying in your flat while you're away. Write a note with instructions: what to do with the plants, the cat and the keys. Use at least five tú commands, two with pronouns.",
    ["At least five affirmative tú commands (riega, cierra…)", "At least two commands with pronouns attached (dale, ciérrala…)", "An accent where the command + pronoun needs one", "A friendly closing"],
    "¡Hola, Nacho! Gracias por quedarte en casa. Riega las plantas el lunes y el jueves. Dale de comer al gato por la mañana y por la noche. Al salir, cierra la puerta con llave. Las llaves, déjalas en la mesa de la cocina. Si tienes un problema, llámame. ¡Un abrazo!",
    "Regular tú commands look like the él form: riega, cierra. Pronouns attach to the end, often adding an accent: déjalas, llámame."
  ),
  "at-the-restaurant-1": t(
    "Write a short dialogue at a restaurant: you order a starter, a main course and a drink, then politely complain because something is wrong, and ask for the bill.",
    ["Polite ordering (quería, me gustaría, para mí…)", "Names of dishes or drinks", "A polite complaint (perdone, creo que…)", "Asking for the bill (la cuenta, por favor)"],
    "—Buenas noches. ¿Qué van a tomar? —Para empezar, quería una sopa de verduras. De segundo, el pollo asado. Y para beber, agua sin gas, por favor. … —Perdone, creo que el pollo está frío. —Lo siento mucho, se lo cambio ahora mismo. —Gracias. ¿Nos trae la cuenta, por favor?",
    "Quería and me gustaría sound more polite than quiero. For a complaint, start with perdone and soften it: creo que el pollo está frío."
  ),
  "a2s-shopping-sizes": t(
    "You're at the pharmacy. Write what you say: explain your symptoms, since when you've had them, and ask what to take and how often.",
    ["A greeting and polite request", "Symptoms (me duele…, tengo fiebre…)", "Since when (desde ayer, hace dos días)", "Questions about the medicine (¿cada cuántas horas…?)"],
    "Buenos días. Me duele mucho la garganta y tengo un poco de fiebre desde ayer. También tengo tos por la noche. ¿Qué me recomienda? ¿Necesito receta para este jarabe? ¿Cada cuántas horas lo tengo que tomar? Muchas gracias por su ayuda.",
    "Me duele + singular (la garganta), me duelen + plural. Usted is the polite form for shops and services: ¿Qué me recomienda?"
  ),
  "a2r-word-web-travel": t(
    "Write a short story about a trip that went wrong: a delay, a lost suitcase, or getting sick. Say what happened and how it ended.",
    ["Travel or health words (el vuelo, la maleta, el retraso…)", "Imperfect for the background", "Preterite for what happened", "How it ended (al final, por suerte…)"],
    "El año pasado viajé a Roma para una boda. El vuelo tenía dos horas de retraso y estaba muy nerviosa. Cuando llegué, mi maleta no apareció. Mi vestido estaba dentro. Fui al mostrador y rellené un formulario. Por suerte, la maleta llegó al hotel al día siguiente, justo a tiempo.",
    "Background in the imperfect (tenía retraso, estaba nerviosa), events in the preterite (llegué, fui, llegó)."
  ),
  "a2-double-pronouns-me-lo": t(
    "Your friend asks for things they lent you or you promised. Answer each one using two pronouns together: who gives it, to whom, and when. Write at least four answers.",
    ["At least four double pronouns (me lo, te la, se los…)", "Le / les becomes se before lo, la, los, las", "Pronouns attached to an infinitive or command at least once", "Correct agreement with the thing"],
    "¿Tu libro? Te lo devuelvo mañana. ¿Las fotos de la boda? Te las mando esta noche por correo. ¿La bici de tu hermano? Se la llevo el sábado. ¿Las llaves de Ana? Ya se las di ayer. Y tu chaqueta, ¿quieres que te la lleve a casa? Dímelo.",
    "Indirect pronoun first, then direct: te lo, me la. Le and les become se before lo/la/los/las: se la llevo (a tu hermano). They attach to commands: dímelo."
  ),
  "a2-comprehensive-review-1": t(
    "Write about a special day last year (a wedding, a concert, a trip). Describe the scene, say what happened, and add one thing you have done since then and one plan for the future.",
    ["Imperfect for the scene", "Preterite for the events", "One present perfect (desde entonces he…)", "One future (el año que viene…)"],
    "El año pasado fui a la boda de mi prima en un pueblo de Galicia. Hacía sol y todo el mundo estaba muy contento. Durante la cena, mi tío cantó una canción y todos bailamos hasta las tres. Desde entonces he vuelto dos veces a Galicia. El año que viene iré con mis padres.",
    "Four tenses together: imperfect (hacía, estaba), preterite (fui, cantó), present perfect (he vuelto) and future (iré)."
  ),
  "a2d-cumulative-circuit-3": t(
    "Your little brother keeps borrowing your things. Write a short message telling him what to do with each thing, using commands with pronouns, and say what he did last time.",
    ["Commands with pronouns (devuélvemelo, ponla…)", "A past tense for what he did (la última vez…)", "Object pronouns in the right place", "At least six sentences"],
    "Javi: la última vez cogiste mi cámara y la dejaste en el coche. Esta vez, por favor, devuélvemela antes del viernes. Mis auriculares, déjalos en mi mesa. Si necesitas el cargador, pídemelo primero. Y la chaqueta azul, ponla en mi armario cuando termines. Gracias.",
    "Pronouns go before a conjugated verb (la dejaste) and attach to affirmative commands (devuélvemela, déjalos, ponla)."
  ),
  "a2r-challenge-buenos-aires-1": t(
    "Imagine you spent a week in Buenos Aires. Write a postcard to a friend: what the city was like, three things you did, what you liked most and what you're going to do next time.",
    ["Greeting and sign-off for a postcard", "Imperfect for description, preterite for actions", "A superlative or comparison", "A future plan (la próxima vez voy a… / iré…)"],
    "¡Hola, Marta! Pasé una semana increíble en Buenos Aires. La ciudad era enorme y había mucha gente en la calle. Visité La Boca, fui a un partido de fútbol y aprendí a bailar tango. Lo mejor fue la comida: ¡el asado más rico del mundo! La próxima vez iré a la Patagonia. Besos, Julia",
    "Elementary in one postcard: past description (era, había), events (visité, fui, aprendí), a superlative (el más rico) and a plan (iré)."
  ),
};
