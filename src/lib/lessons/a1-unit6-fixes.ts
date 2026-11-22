// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit6-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, fbIs, mc, mcIs, spIs, trIs, warmUp, type Ex, type LessonFix } from "./unit-fixes";

// A1 Unit 6 (Possessives, numbers & time): content fixes from Claude's
// audit in Ricardo's format (ES-A1-U06_CL_2026-11-22). Content only. See
// unit-fixes.ts for why some items become choices: the checker forgives
// ventidós, sietenta, diesinueve and me desperto as typos, and the lessons
// teach exactly those spellings and stem changes.

const matchingHas = (left: string) => (e: Ex) => e.type === "matching" && e.pairs.some((p) => p.left === left);
const wordOrderStarts = (start: string) => (e: Ex) => e.type === "word-order" && e.words.join(" ").startsWith(start);
const coche = (s: string) => s.split("coche").join("carro");

const FIXES: Record<string, LessonFix> = {
  // L01
  "possessives-prepositions": {
    goal: "say whose something is with mi, tu, su, nuestro or de + the owner, and where it is with en, de, con, sin, para and the place words.",
    warmUp: warmUp("Warm-up: ser or estar?", "A quick look back at Unit 5. Today's sentences say whose things are and where they are.", [
      mc("\"El libro ___ en la mesa.\"", ["está", "es", "son", "estás"], "Where a thing is: estar. (Unit 5.)"),
      mc("\"Mi hermana ___ profesora.\"", ["es", "está", "son", "es una"], "A job: ser, with no article. (Unit 5.)"),
      mc("\"Los niños están ___.\" (playing)", ["jugando", "juegando", "jugiendo", "juegan"], "Estar + gerund: -ar verbs take -ando. (Unit 5.)"),
    ]),
    text: [["coche", "carro"]],
    items: [
      drop(matchingHas("en")),
      edit(mcIs("Which of these possessives are correctly formed?"), (e) => ({ ...e, options: e.options.map(coche), explanation: coche(e.explanation).replace("Coche is", "Carro is") })),
      drop(wordOrderStarts("Las llaves de mi madre")),
      edit(trIs("El coche de Pedro está detrás de la casa."), (e) => ({ ...e, source: coche(e.source), answer: "Su carro está detrás de la casa.", altAnswers: ["Su coche está detrás de la casa.", "Su auto está detrás de la casa."] })),
      edit(trIs("Es el coche de el profesor."), (e) => ({ ...e, source: coche(e.source), answer: "Es el carro del profesor.", altAnswers: ["Es el coche del profesor.", "Es el auto del profesor."] })),
      edit(trIs("The car is behind our house."), (e) => ({ ...e, answer: "El carro está detrás de nuestra casa.", altAnswers: ["El coche está detrás de nuestra casa.", "El auto está detrás de nuestra casa."] })),
      edit(spIs("El coche está detrás de nuestra casa."), (e) => ({ ...e, text: "El carro está detrás de nuestra casa.", altAnswers: ["El coche está detrás de nuestra casa.", "El auto está detrás de nuestra casa."], explanation: "Detrás de = behind; nuestra agrees with casa." })),
      edit(spIs("El libro es de María."), (e) => ({ ...e, explanation: "Ser de + the owner says whose something is: the book is María's." })),
    ],
  },
  // L02
  "a1r-dialogue-whose-where": {
    goal: "ask and answer where your things are and whose they are, switching mi and tu and using the place words.",
    text: [["gafas", "lentes"]],
    items: [
      edit(mcIs("Your roommate asks: \"¿Dónde están mis gafas?\""), (e) => ({ ...e, question: "Your roommate asks: \"¿Dónde están mis lentes?\" They're under the bed. What do you answer?", options: ["Tus lentes están debajo de la cama.", "Mis lentes están debajo de la cama.", "Tu lentes están debajo de la cama.", "Tus lentes son debajo de la cama."], explanation: "Their glasses are your glasses from your side: mis → tus, plural because lentes is plural. \"Mis lentes\" would mean your own glasses, \"tu lentes\" doesn't agree, and location needs estar, not son." })),
      edit(fbIs("—¿Son tus gafas? —Sí, son ___ gafas."), (e) => ({ ...e, sentence: "—¿Son tus lentes? —Sí, son ___ lentes.", explanation: "Possessives agree with the thing owned: lentes is plural, so mis." })),
      edit(trIs("Mi gafas están en el baño."), (e) => ({ ...e, source: "Mi lentes están en el baño.", answer: "Mis lentes están en el baño.", altAnswers: ["Mis gafas están en el baño.", "Mis anteojos están en el baño."], explanation: "Lentes is plural, so the possessive must be plural too: mis." })),
      edit(trIs("Whose glasses are these? They're Marta's glasses."), (e) => ({ ...e, answer: "¿De quién son estos lentes? Son los lentes de Marta.", altAnswers: ["¿De quién son estos lentes? Son de Marta.", "¿De quién son estas gafas? Son las gafas de Marta.", "¿De quién son estas gafas? Son de Marta."] })),
      edit(wordOrderStarts("¿Las llaves de Marta están en su bolso?"), (e) => ({ ...e, words: e.words.map((w: string) => (w === "bolso?" ? "bolsa?" : w)) })),
      edit(spIs("La lámpara está al lado del sofá."), (e) => ({ ...e, explanation: "Al lado de + el sofá: de + el always contracts to del." })),
    ],
  },
  // L03
  "a1r-transform-possessives": {
    goal: "change the owner or the number of things and keep every possessive, noun, verb and adjective in agreement.",
    text: [["coche", "carro"]],
    items: [
      edit(trIs("Tu coche es rojo."), (e) => ({ ...e, source: "Tu carro es rojo.", answer: "Tus carros son rojos.", altAnswers: ["Tus coches son rojos.", "Tus autos son rojos."], explanation: "Plural thing owned: tus carros; the verb and adjective follow: son rojos." })),
      edit(spIs("tus primos"), (e) => ({ ...e, prompt: "Say it out loud: make «tu primo» plural." })),
      edit(spIs("nuestra escuela"), (e) => ({ ...e, prompt: "Say it out loud: change «mi escuela» to \"our school\"." })),
    ],
  },
  // L04
  "vocabulary-practice-2": {
    goal: "recognise and use 40 more regular verbs and 20 feeling words, and make a feeling word from a verb (-ado, -ido).",
    items: [
      edit(trIs("Mis padres compartimos el coche."), (e) => ({ ...e, source: "Mis padres compartimos el carro.", answer: "Mis padres comparten el carro.", altAnswers: ["Mis padres comparten el coche.", "Mis padres comparten el auto."] })),
    ],
  },
  // L05
  "numbers-0-100-1": {
    goal: "say and write any number up to a million: one word for 16-29, y from 31, cien or ciento, and hundreds that agree.",
    warmUp: warmUp("Warm-up: possessives", "A quick look back at the possessives. Today's numbers go with them: mis dos hermanos, nuestros veinte libros.", [
      mc("\"___ hermanas viven en Lima.\" (our)", ["Nuestras", "Nuestros", "Nuestra", "Mis"], "Hermanas is feminine plural: nuestras. (Lesson 1.)"),
      mc("\"His keys\" (several)", ["sus llaves", "su llaves", "sus llave", "suyas llaves"], "Several keys: sus. (Lesson 1.)"),
      mc("\"It's the teacher's car.\"", ["Es el carro del profesor.", "Es el carro de el profesor.", "Es el profesor's carro.", "Es el carro al profesor."], "De + el = del. (Lesson 1.)"),
    ]),
    items: [
      drop(mcIs("Which number is written correctly as a single word?")),
      choose("Mi hermano tiene ___ años.", ["diesinueve", "dieznueve", "diecinueves"]),
      { ...choose("Tengo ___ años.", ["ventidós", "veinte y dos", "veintedós"]), find: (e) => fbIs("Tengo ___ años.")(e) && e.type === "fill-blank" && e.answer === "veintidós" },
      chooseSentence("Tengo veintiuno años.", ["Tengo ventiún años.", "Tengo veintiuno años.", "Tengo veinte y un años."]),
    ],
  },
  // L06
  "numbers-0-100-2": {
    goal: "use un, una and uno (veintiún años, treinta y una mesas), the ordinals to décimo, and give ages, prices and phone numbers.",
    warmUp: warmUp("Warm-up: numbers", "A quick look back at Part 1 before un, una and the ordinals.", [
      mc("How do you write 45?", ["cuarenta y cinco", "cuarentaicinco", "cuarenta cinco", "cuatrenta y cinco"], "From 31 on: tens + y + units. (Part 1.)"),
      mc("How do you write 18?", ["dieciocho", "diez y ocho", "diesiocho", "dieceocho"], "16-19 are one word: dieci- + ocho. (Part 1.)"),
      mc("\"500 people\"", ["quinientas personas", "quinientos personas", "cincocientas personas", "cien cinco personas"], "500 is quinientos, and it agrees with personas: quinientas. (Part 1.)"),
    ]),
    text: [["un coche, un año", "un carro, un año"]],
    items: [
      edit(trIs("Es mi primer coche."), (e) => ({ ...e, prompt: "Change carro to casa.", source: "Es mi primer carro." })),
      chooseSentence("I am eighteen years old.", ["Tengo diesiocho años.", "Soy dieciocho años.", "Tengo diez y ocho años."]),
      chooseSentence("Hay veintiún chicos.", ["Hay ventiuna chicas.", "Hay veintiún chicas.", "Hay veintiuno chicas."]),
      choose("Mi hermano tiene ___ años.", ["ventiún", "veintiuno", "veintiuna"]),
    ],
  },
  // L07
  "a1r-mission-prices-ages-phones": {
    goal: "give your age and phone number on a form and ask and pay prices at a market, with cuesta and cuestan.",
    items: [
      choose("Edad: tengo ___ años.", ["venticuatro", "veinte y cuatro", "veinticuatros"]),
      choose("La camiseta cuesta ___ euros.", ["sietenta y dos", "setentaidós", "sesenta y dos"]),
      chooseSentence("Mi hermana tiene veinte años.", ["Mi hermana tiene ventiún años.", "Mi hermana tiene veintiuno años.", "Mi hermana tiene veintiuna años."]),
      chooseSentence("Soy veintiséis años.", ["Tengo ventiséis años.", "Soy veintiséis años.", "Tengo veinte y seis años."]),
    ],
  },
  // L08
  "telling-time-1": {
    goal: "ask ¿Qué hora es? and tell any time: es la una or son las, y cuarto, y media, menos cuarto and the minutes.",
    warmUp: warmUp("Warm-up: numbers", "Telling the time uses the numbers you just learned. A quick look back first.", [
      mc("How do you write 25?", ["veinticinco", "ventecinco", "veinte y cinco", "veinticinca"], "21-29 are one word. (Numbers.)"),
      mc("How do you say 12?", ["doce", "dos", "dosce", "diez y dos"], "11-15 are words to memorize: once, doce, trece, catorce, quince."),
      mc("\"It's the first day.\"", ["Es el primer día.", "Es el primero día.", "Es el uno día.", "Es la primera día."], "Primero drops its -o before a masculine noun. (Numbers, Part 2.)"),
    ]),
    items: [
      drop(matchingHas("y cuarto")),
      drop(wordOrderStarts("¿Qué hora es? Son las cinco")),
      drop(spIs("¿Qué hora es?")),
      chooseSentence("It's 11:25.", ["Son las once y venticinco.", "Es la once y veinticinco.", "Son las doce menos veinticinco."]),
    ],
  },
  // L09
  "telling-time-2": {
    goal: "say morning, afternoon or night, noon and midnight, and ask and answer ¿A qué hora…? to set a time to meet.",
    warmUp: warmUp("Warm-up: telling the time", "A quick look back at Part 1 before ¿A qué hora…?", [
      mc("How do you say 4:15?", ["Son las cuatro y cuarto.", "Es las cuatro y cuarto.", "Son las cuatro menos cuarto.", "Son las cinco y cuarto."], "Y cuarto: a quarter past, and four hours take son las. (Part 1.)"),
      mc("How do you say 1:10?", ["Es la una y diez.", "Son las una y diez.", "Son la una y diez.", "Es la uno y diez."], "One o'clock is singular: es la una. (Part 1.)"),
      mc("How do you say 6:40?", ["Son las siete menos veinte.", "Son las seis menos veinte.", "Son las siete y veinte.", "Son las seis y veinte."], "After half past, count down from the next hour. (Part 1.)"),
    ]),
    text: [["¿A qué hora quedamos?", "¿A qué hora nos vemos?"], ["Quedar means to arrange to meet.", "Nos vemos means \"we see each other\": we meet."]],
    items: [
      edit(trIs("At what time do you eat lunch?"), (e) => ({ ...e, answer: "¿A qué hora almuerzas?", altAnswers: ["¿A qué hora comes?", "¿A qué hora almuerza?", "¿A qué hora come?", "¿A qué hora almuerzan?", "¿A qué hora comen?", "¿A qué hora coméis?"], explanation: "¿A qué hora...? asks when something happens. Almorzar (o → ue) is the usual verb for lunch in Latin America; in Spain comer is common." })),
      edit(spIs("¿Qué tal a las seis y media de la tarde?"), (e) => ({ ...e, prompt: "Your friend asks: ¿A qué hora nos vemos? Suggest meeting at 6:30pm." })),
    ],
  },
  // L10
  "a1r-mission-timetable": {
    goal: "read a bus and a class timetable and answer ¿Qué hora es? and ¿A qué hora…? correctly.",
  },
  // L11
  "a1-my-day-routine": {
    goal: "describe an ordinary day with me despierto, me levanto, me ducho, me visto, me acuesto, the times and sequence words.",
    warmUp: warmUp("Warm-up: ¿a qué hora?", "Your day needs times. A quick look back first.", [
      mc("\"I have dinner at nine.\"", ["Ceno a las nueve.", "Ceno son las nueve.", "Ceno a la nueve.", "Ceno las nueve."], "A las + the hour says when. (Telling time, Part 2.)"),
      mc("\"At what time does the class start?\"", ["¿A qué hora empieza la clase?", "¿Qué hora empieza la clase?", "¿A qué hora es empieza la clase?", "¿Cuándo hora empieza la clase?"], "¿A qué hora…? asks when. (Telling time, Part 2.)"),
      mc("\"It's seven in the morning.\"", ["Son las siete de la mañana.", "Son las siete de la tarde.", "Es la siete de la mañana.", "Son las siete en la mañana."], "De la mañana for a.m., and son las for seven. (Telling time, Part 2.)"),
    ]),
    items: [
      choose("Los lunes ___ muy temprano.", ["me desperto", "me despierta", "despierto"]),
      chooseSentence("Despierto a las cinco.", ["Me desperto a las cinco.", "Despierto a las cinco.", "Me despierta a las cinco."]),
      chooseSentence("Yo visto me en mi habitación.", ["Me vesto en mi habitación.", "Yo visto me en mi habitación.", "Me viste en mi habitación."]),
      chooseSentence("I get dressed while I listen to the news.", ["Me vesto mientras escucho las noticias.", "Visto mientras escucho las noticias.", "Me visto mientras me escucho las noticias."]),
    ],
  },
  // L12
  "a1r-spiral-numbers-time-possessives": {
    goal: "plan a family day with possessives, ages, ordinals and times in the same sentences.",
    items: [
      edit(mcIs("Which sentence is correct?"), (e) => ({ ...e, options: e.options.map(coche), explanation: "Son las dos (plural, not es), carro is masculine (nuestro), and location takes estar singular: está. The wrong options use \"es las\", ser for location, \"nuestra\", or plural \"están\"." })),
      chooseSentence("Mi hermana tiene veintiuno años.", ["Mi hermana tiene ventiún años.", "Mi hermana tiene veintiuno años.", "Mi hermana tiene veintiuna años."]),
      choose("Mi abuela tiene ___ años. (78)", ["sietenta y ocho", "setentaiocho", "sesenta y ocho"]),
      chooseSentence("Mi hermano tiene veintidós años.", ["Mi hermano tiene ventitrés años.", "Mi hermano tiene veinte y tres años.", "Mi hermano es veintitrés años."]),
    ],
  },
};

export function withUnit6Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit6SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
