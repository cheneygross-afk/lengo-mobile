// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-unit1-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, mc, mcIs, spIs, trIs, warmUp, type Ex, type LessonFix } from "./unit-fixes";

// A2 Unit 1 (The preterite: regular verbs): content fixes from Claude's
// audit in Ricardo's format (ES-A2-U01_CL_2026-11-22). Content only. See
// unit-fixes.ts for why some items become choices: the checker passes a
// missing accent with a note ("just watch the accent mark") and forgives
// comeron, saleron and vivemos as typos, while this unit teaches exactly
// the accented preterite endings (comí, bebió, empecé), where they sit and
// why, and the ¿ and lower-case rules. Items whose point is one of those
// marks become choices with the slip as an option.

const wordOrderIs = (sentence: string) => (e: Ex) => e.type === "word-order" && e.words.join(" ") === sentence;
const carro = (s: string) => s.split("coche").join("carro");

const FIXES: Record<string, LessonFix> = {
  // L01
  "preterite-regular-verbs-1": {
    goal: "say what happened with regular -ar, -er and -ir verbs in the preterite, with the accent on yo and él, and the -car, -gar, -zar changes in yo.",
    warmUp: warmUp("Warm-up: the present", "A quick look back at the Beginner level. The preterite keeps the same stems and swaps the endings.", [
      mc("\"I work at a bank.\"", ["Trabajo en un banco.", "Trabajas en un banco.", "Trabajan en un banco.", "Trabajar en un banco."], "Present yo: -o. (Beginner level.)"),
      mc("\"We live in Quito.\"", ["Vivimos en Quito.", "Vivemos en Quito.", "Viven en Quito.", "Vivo en Quito."], "-ir verbs take -imos for nosotros. Keep it in mind: the preterite uses the same form. (Beginner level.)"),
      mc("Which word points to the past?", ["ayer", "mañana", "hoy", "siempre"], "Ayer = yesterday. Today you'll learn the verb forms that go with it."),
    ]),
    items: [
      chooseSentence("Ayer Luis bebo mucha agua.", ["Ayer Luis bebio mucha agua.", "Ayer Luis bebí mucha agua.", "Ayer Luis bebe mucha agua."]),
      choose("Anoche ___ fútbol con mis amigos.", ["jugue", "jugé", "jugó"]),
      choose("Ellos ___ en casa de mi abuela.", ["comeron", "comió", "comimos"]),
      chooseSentence("Mi hermana bebe un café.", ["Mi hermana bebio un café.", "Mi hermana bebí un café.", "Mi hermana bebe un café."]),
      chooseSentence("I started a new job yesterday.", ["Empece un trabajo nuevo ayer.", "Empezé un trabajo nuevo ayer.", "Empezó un trabajo nuevo ayer."]),
      chooseSentence("I practiced the piano and then I had lunch (almorzar).", ["Practiqué el piano y luego almorce.", "Practicé el piano y luego almorcé.", "Practiqué el piano y luego almorzé."]),
      chooseSentence("My friends left the party and ran to the bus.", ["Mis amigos saleron de la fiesta y correron al autobús.", "Mis amigos salimos de la fiesta y corrimos al autobús.", "Mis amigos salió de la fiesta y corrió al autobús."]),
      edit(trIs("Yo compré un coche."), (e) => ({ ...e, source: "Yo compré un carro.", answer: "Tú compraste un carro.", altAnswers: ["Compraste un carro.", "Tú compraste un coche.", "Compraste un coche.", "Tú compraste un auto.", "Compraste un auto."] })),
      drop(trIs("Ellos abren las ventanas.")),
      drop(trIs("You all (Latin America) worked a lot yesterday.")),
      drop(wordOrderIs("Ayer mis amigos salieron muy tarde")),
    ],
  },
  // L02
  "a2d-pattern-preterite-ar": {
    goal: "give every person of an -ar verb in the preterite without stopping: -é, -aste, -ó, -amos, -aron.",
  },
  // L03
  "a2d-minimal-pairs-present-preterite": {
    goal: "tell the present from the preterite by the accent and the time word: hablo or habló, comemos or comimos.",
    items: [
      chooseSentence("Hoy Ana escribe un correo.", ["Ayer Ana escribio un correo.", "Ayer Ana escribío un correo.", "Ayer Ana escribe un correo."]),
      chooseSentence("She ran this morning.", ["Corrio esta mañana.", "Corre esta mañana.", "Corrí esta mañana."]),
      choose("Ahora vivimos en Quito, pero en 2020 ___ en Lima.", ["vivemos", "vivieron", "vivió"]),
    ],
  },
  // L04
  "preterite-regular-verbs-2": {
    goal: "ask and answer about a trip in the preterite (a tú question gets a yo answer) and use 30 travel words.",
    warmUp: warmUp("Warm-up: preterite endings", "A quick look back at Lessons 1-3 before a real conversation about a trip.", [
      mc("\"I talked to my boss.\"", ["Hablé con mi jefe.", "Hablo con mi jefe.", "Habló con mi jefe.", "Hable con mi jefe."], "Yo in the preterite: accented -é. (Lesson 1.)"),
      mc("\"They ate at home.\"", ["Comieron en casa.", "Comeron en casa.", "Comen en casa.", "Comimos en casa."], "-er and -ir verbs: -ieron for ellos. (Lesson 1.)"),
      mc("\"Last night we ate paella.\"", ["Anoche comimos paella.", "Anoche comemos paella.", "Anoche comió paella.", "Anoche comí paella."], "-er verbs change in nosotros: comemos → comimos. (Lesson 3.)"),
    ]),
    items: [
      chooseSentence("¿Reservaste el hotel?", ["Sí, reserve el hotel.", "Sí, reservaste el hotel.", "Sí, reservó el hotel."]),
      chooseSentence("El vuelo sale a las ocho.", ["El vuelo salio a las ocho.", "El vuelo salí a las ocho.", "El vuelo salieron a las ocho."]),
      edit(mcIs("Your friends ask: «¿Alquilaron un coche?»"), (e) => ({ ...e, question: carro(e.question) })),
      edit(trIs("We rented a car in Spain."), (e) => ({ ...e, answer: "Alquilamos un carro en España.", altAnswers: ["Alquilamos un coche en España.", "Alquilamos un auto en España."], explanation: "Alquilar, -ar verb: alquilamos. In Spain itself people say coche." })),
      edit(trIs("Our flight had a layover in Panama and we arrived at the destination at night."), (e) => ({
        type: "multiple-choice",
        question: `${e.prompt}\n"Our flight took off late and we arrived at the destination at night."`,
        options: ["Nuestro vuelo despegó tarde y llegamos al destino por la noche.", "Nuestro vuelo despego tarde y llegamos al destino por la noche.", "Nuestro vuelo despegó tarde y llegaron al destino por la noche.", "Nuestro vuelo despegué tarde y llegamos al destino por la noche."],
        correctIndex: 0,
        explanation: "Despegar, él: despegó, with the accent (despego means \"I take off\"). Llegamos: nosotros, -amos.",
      })),
      edit(spIs("¿Qué hiciste el fin de semana?"), (e) => ({ ...e, prompt: "Say it in Spanish: \"Did you travel this weekend?\"", text: "¿Viajaste el fin de semana?", altAnswers: ["¿Tú viajaste el fin de semana?"], explanation: "One way to say it: \"¿Viajaste el fin de semana?\". Tú in the -ar preterite: -aste, with no final -s." })),
    ],
  },
  // L05
  "a2r-dialogue-weekend": {
    goal: "talk about the weekend: understand what others did and answer each question in the right person (tú → yo, ustedes → nosotros).",
    items: [
      choose("—¿Qué comiste? —___ una pizza enorme.", ["Comi", "Comió", "Como"]),
      chooseSentence("¿Saliste el sábado?", ["Sí, sali con mis amigos.", "Sí, saliste con mis amigos.", "Sí, salió con mis amigos."]),
      chooseSentence("¿Cocinaste el domingo?", ["No, comi en un restaurante.", "No, comiste en un restaurante.", "No, como en un restaurante."]),
    ],
  },
  // L06
  "a2r-error-hunt-preterite-spelling": {
    goal: "find and fix a missing preterite accent and a missed -car, -gar or -zar change in yo.",
    items: [
      chooseSentence("Yo empezé a estudiar a las ocho.", ["Yo empece a estudiar a las ocho.", "Yo empezé a estudiar a las ocho.", "Yo empezó a estudiar a las ocho."]),
      chooseSentence("Ella almorzó con su abuela.", ["Yo almorce con mi abuela.", "Yo almorzé con mi abuela.", "Yo almorzó con mi abuela."]),
      chooseSentence("Mi hijo escribio una carta muy bonita.", ["Mi hijo escribío una carta muy bonita.", "Mi hijo escribio una carta muy bonita.", "Mi hijo escribí una carta muy bonita."]),
      chooseSentence("I looked for the keys, but my wife found them.", ["Busqué las llaves, pero mi esposa las encontro.", "Buscé las llaves, pero mi esposa las encontró.", "Busqué las llaves, pero mi esposa las encontré."]),
      edit(spIs("Aparqué el coche, pagué y empecé a caminar."), (e) => ({ ...e, prompt: "Say it in Spanish: I looked for the car, I paid and I started to walk.", text: "Busqué el carro, pagué y empecé a caminar.", altAnswers: ["Busqué el coche, pagué y empecé a caminar.", "Busqué el auto, pagué y empecé a caminar."], explanation: "Three yo spelling changes: buscar → busqué (c → qu), pagar → pagué (g → gu), empezar → empecé (z → c)." })),
    ],
  },
  // L07
  "a2d-speed-round-spelling-changes": {
    goal: "write the yo preterite of any -car, -gar or -zar verb at speed (busqué, llegué, empecé) and keep the other persons regular.",
    items: [
      choose("Esta mañana ___ a trabajar a las ocho.", ["empece", "empezé", "empezó"]),
      chooseSentence("Mi hermano empezó a correr.", ["Yo empece a correr.", "Yo empezé a correr.", "Yo empezó a correr."]),
      chooseSentence("Ayer jugé en el parque con mi perro.", ["Ayer jugue en el parque con mi perro.", "Ayer jugé en el parque con mi perro.", "Ayer jugó en el parque con mi perro."]),
      chooseSentence("Ayer almorzé con mis padres.", ["Ayer almorce con mis padres.", "Ayer almorzé con mis padres.", "Ayer almorzó con mis padres."]),
      chooseSentence("I arrived at nine and started to work.", ["Llegué a las nueve y empece a trabajar.", "Llegé a las nueve y empecé a trabajar.", "Llegué a las nueve y empezé a trabajar."]),
      chooseSentence("I practiced the guitar and later I played soccer.", ["Practiqué la guitarra y después jugue al fútbol.", "Practicé la guitarra y después jugué al fútbol.", "Practiqué la guitarra y después jugé al fútbol."]),
    ],
  },
  // L08
  "a2d-build-up-weekend": {
    goal: "grow one preterite verb into a full sentence (object, place, time) without changing the verb, with the personal a and nosotros for \"X and I\".",
  },
  // L09
  "a2g-spelling-stress-rules": {
    goal: "place ¿ and ¡ where the question starts, write days, months and languages in lower case, and know from the three stress rules when a word needs an accent.",
    warmUp: warmUp("Warm-up: preterite accents", "Today's lesson explains why habló and busqué carry their accents. A quick look back at Lessons 6 and 7 first.", [
      mc("\"He studied.\"", ["Estudió.", "Estudio.", "Estudie.", "Estudío."], "Él in the preterite: -ó with an accent. Without it, estudio means \"I study\". (Lesson 6.)"),
      mc("\"I started.\" (empezar)", ["empecé", "empezé", "empece", "empezó"], "Z → c before é, and the accent stays. (Lesson 7.)"),
      mc("\"I looked for my keys.\"", ["Busqué mis llaves.", "Buscé mis llaves.", "Busque mis llaves.", "Buscó mis llaves."], "C → qu before é, plus the accent. (Lesson 7.)"),
    ]),
    items: [
      chooseSentence("¿Pablo, tienes frío?", ["¿Pablo, tienes frío?", "Pablo, tienes frío?", "Pablo ¿tienes frío?"]),
      chooseSentence("My birthday is on Saturday, May 12th.", ["Mi cumpleaños es el Sábado 12 de Mayo.", "Mi cumpleaños es el sabado 12 de mayo.", "Mi cumpleaños es el sábado 12 de Mayo."]),
      chooseSentence("El joven", ["Los jovenes", "Los jóvens", "Los jovénes"]),
      chooseSentence("Los examenes son el miercoles.", ["Los exámenes son el miercoles.", "Los examenes son el miércoles.", "Los exámenes son el Miércoles."]),
      chooseSentence("Hey, are you (tú) hungry?", ["Oye, tienes hambre?", "¿Oye, tienes hambre?", "Oye ¿tienes hambre"]),
      choose("En invierno hace mucho ___.", ["frio", "fríos", "fria"]),
      chooseSentence("On Tuesday I study French.", ["El martes estudio frances.", "El Martes estudio francés.", "El martes estudio Francés."]),
      drop(trIs("La canción")),
      drop(trIs("Hablo con Marta.")),
      drop(trIs("My neighbor is English and her songs are very nice.")),
    ],
  },
  // L10
  "a2g-accent-pairs": {
    goal: "tell the accent pairs apart in writing (tú / tu, él / el, mí / mi, sí / si, sé / se, té / te, más) and keep the accent on qué, dónde, cuándo in indirect questions.",
    warmUp: warmUp("Warm-up: ¿, capitals and stress", "A quick look back at Lesson 9. Today's accents are a different kind: they tell two words apart.", [
      mc("Which question is written correctly?", ["Laura, ¿dónde estás?", "¿Laura, dónde estás?", "Laura, dónde estás?", "Laura ¿dónde estás"], "The ¿ opens where the question starts, after the name. (Lesson 9.)"),
      mc("Which word needs a written accent? (Stress in capitals.)", ["jardin (jar-DIN)", "mesa (ME-sa)", "papel (pa-PEL)", "zapatos (za-PA-tos)"], "It ends in -n and is stressed on the last syllable, so it's written jardín. (Lesson 9.)"),
      mc("Which sentence is written correctly?", ["El lunes empiezo a estudiar inglés.", "El Lunes empiezo a estudiar Inglés.", "El lunes empiezo a estudiar Inglés.", "El Lunes empiezo a estudiar inglés."], "Days and languages are lower case in Spanish. (Lesson 9.)"),
    ]),
    text: [["El coche es de él.", "El carro es de él."]],
    items: [
      drop(trIs("Voy al cine con Juan.")),
      drop(trIs("Es mi libro.")),
      drop(wordOrderIs("Quiero saber cuándo vuelves a casa.")),
    ],
  },
};

export function withA2Unit1Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withA2Unit1SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
