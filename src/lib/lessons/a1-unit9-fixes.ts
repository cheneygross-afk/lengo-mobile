// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit9-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { alts, applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, fbIs, mc, mcIs, spIs, trIs, warmUp, type Ex, type LessonFix } from "./unit-fixes";

// A1 Unit 9 (This & that, and the Beginner level so far): content fixes
// from Claude's audit in Ricardo's format (ES-A1-U09_CL_2026-11-22).
// Content only. See unit-fixes.ts for why some items become choices: the
// checker forgives tene and menten as typos, and the lessons teach exactly
// tiene and mienten (e → ie).

const wordOrderStarts = (start: string) => (e: Ex) => e.type === "word-order" && e.words.join(" ").startsWith(start);
const carro = (s: string) => s.split("coche").join("carro");

const FIXES: Record<string, LessonFix> = {
  // L01
  "a1r-word-web-house": {
    goal: "name the rooms and furniture of a home and say what there is (hay) and where things are (está / están + a place word).",
    items: [
      edit(trIs("La toalla está al lado de el lavabo."), (e) => ({ ...e, source: "La toalla está al lado de el lavamanos.", answer: "La toalla está al lado del lavamanos.", altAnswers: ["La toalla está al lado del lavabo."], explanation: "De + el always fuses into del: al lado del lavamanos. Only de la stays as two words." })),
    ],
  },
  // L02
  "demonstratives-1": {
    goal: "point things out with este, ese or aquel in the right form for the distance and the noun, and esto, eso, aquello for things you can't name.",
    warmUp: warmUp("Warm-up: Unit 8", "A quick look back at Unit 8. Today you'll point at the things you like.", [
      mc("\"I like these shoes.\" (los zapatos)", ["Me gustan los zapatos.", "Me gusta los zapatos.", "Yo gusto los zapatos.", "Me gustan zapatos."], "Several things: gustan, and the noun keeps its article. (Unit 8.)"),
      mc("\"There's a lamp in the living room.\"", ["Hay una lámpara en la sala.", "Está una lámpara en la sala.", "Hay la lámpara en la sala.", "Es una lámpara en la sala."], "Something new (una): hay. (Unit 8 and Lesson 1.)"),
      mc("\"We're going to buy a table.\"", ["Vamos a comprar una mesa.", "Vamos comprar una mesa.", "Vamos a compramos una mesa.", "Van a comprar una mesa."], "Ir a + infinitive: only ir changes. (Unit 8.)"),
    ]),
    text: [["Ese coche es rápido.", "Ese carro es rápido."], ["aquel coche, never \"aquello coche\"", "aquel carro, never \"aquello carro\""]],
    items: [
      choose("¿Ves ___ pájaros en el cielo?", ["aquelos", "aquellas", "aquello"]),
      choose("___ edificios son muy altos. (far away)", ["Aquelos", "Aquellas", "Aquello"]),
      chooseSentence("Aquel árbol es muy alto.", ["Aquelos árboles son muy altos.", "Aquellos árboles es muy altos.", "Aquellos árboles son muy alto."]),
      edit(trIs("Aquello coche es rojo."), (e) => ({ ...e, source: "Aquello carro es rojo.", answer: "Aquel carro es rojo.", altAnswers: ["Aquel coche es rojo.", "Aquel auto es rojo."], explanation: carro(e.explanation) })),
      drop(trIs("that car (near you)")),
      drop(trIs("that house over there")),
      drop(wordOrderStarts("Ese coche es de mi padre")),
    ],
  },
  // L03
  "demonstratives-2": {
    goal: "use este, ese and aquel without the noun (esta y esa), and esto, eso, aquello for something you can't name.",
    items: [
      choose("___ árboles son muy viejos. (far away)", ["Aquelos", "Aquellas", "Esos"]),
      chooseSentence("Those hats over there are very expensive.", ["Aquelos sombreros son muy caros.", "Aquellas sombreros son muy caros.", "Aquello sombreros son muy caros."]),
    ],
  },
  // L04
  "a1r-transform-demonstratives": {
    goal: "move a thing closer or farther and change its number, keeping the demonstrative, noun, verb and adjective in agreement.",
    items: [
      choose("esa casa → ___ casa", ["aquela", "aquel", "aquello"]),
      choose("aquella montaña → ___ montañas", ["aquelas", "aquellos", "aquella"]),
      chooseSentence("Ese libro es interesante.", ["Aquelos libros son interesantes.", "Aquellos libros es interesantes.", "Aquellos libro son interesantes."]),
      chooseSentence("those dresses (far away)", ["aquelos vestidos", "aquellas vestidos", "esos vestidos"]),
      edit(trIs("Aquel coche es rápido."), (e) => ({ ...e, source: "Aquel carro es rápido.", answer: "Este carro es rápido.", altAnswers: ["Este coche es rápido.", "Este auto es rápido."], explanation: "Bringing it next to you swaps the start to est-; carro is masculine singular, so este." })),
      edit(fbIs("ese coche → ___ coche"), (e) => ({ ...e, sentence: "ese carro → ___ carro" })),
      edit(wordOrderStarts("¿Cuánto cuestan aquellas gafas"), (e) => ({ ...e, words: e.words.map((w: string) => (w === "gafas" ? "lentes" : w)).map((w: string, i: number, ws: string[]) => (w === "aquellas" && ws[i + 1] === "lentes" ? "aquellos" : w)), explanation: "Cuestan agrees with the plural lentes; aquellos = far from both of us." })),
      edit(spIs("aquella casa"), (e) => ({ ...e, prompt: "Say it out loud: move «esa casa» far from both of you." })),
      edit(spIs("estos chicos"), (e) => ({ ...e, prompt: "Say it out loud: make «este chico» plural." })),
      edit(spIs("esas camisas"), (e) => ({ ...e, prompt: "Say it out loud: make «esa camisa» plural." })),
    ],
  },
  // L05
  "a1-word-web-clothes": {
    goal: "say what people wear with llevar, what you put on with me pongo, and describe clothes with colors that agree.",
    warmUp: warmUp("Warm-up: this and that", "A quick look back at Lessons 2-4. Today's clothes words go with them.", [
      mc("\"These shoes\" (right here)", ["estos zapatos", "estes zapatos", "esos zapatos", "estas zapatos"], "Near me, masculine plural: estos (never estes). (Lesson 2.)"),
      mc("\"That shirt\" (near you)", ["esa camisa", "ese camisa", "esta camisa", "aquel camisa"], "Near the listener, feminine: esa. (Lesson 2.)"),
      mc("\"I want this dress, not that one over there.\"", ["Quiero este vestido, no aquel.", "Quiero este vestido, no aquello.", "Quiero esto vestido, no aquel.", "Quiero este vestido, no aquella."], "Drop the noun and keep the demonstrative: aquel agrees with vestido. (Lesson 3.)"),
    ]),
    text: [["jersey", "suéter"], ["vaqueros", "jeans"]],
    items: [
      drop(fbIs("Necesito un ___ para el invierno.")),
      drop(trIs("My coat is old but comfortable.")),
      drop(trIs("Lleva unos zapatos negro.")),
      edit(fbIs("Siempre ___ vaqueros al trabajo."), (e) => ({ ...e, sentence: "Siempre ___ jeans al trabajo." })),
      edit(trIs("I put on a sweater because it's cold."), (e) => ({ ...e, answer: "Me pongo un suéter porque hace frío.", altAnswers: ["Me pongo un jersey porque hace frío.", "Me pongo un suéter porque tengo frío.", "Me pongo un jersey porque tengo frío."], explanation: "Me pongo = I put on (the action). In Spain a sweater is un jersey." })),
    ],
  },
  // L06
  "a1r-mission-clothes-shopping": {
    goal: "ask for clothes in a store, describe them with colors that agree, and ask ¿cuánto cuesta? or ¿cuánto cuestan?",
  },
  // L07
  "a1r-spiral-people-descriptions": {
    goal: "describe people with ser, estar and tener, possessives, demonstratives and gustar, all agreeing.",
  },
  // L08
  "a1r-spiral-actions-plans": {
    goal: "say what you do, what you have to do and what you're going to do, with times and questions.",
    items: [choose("Ella ___ que estudiar esta noche.", ["tene", "está", "tienen"])],
  },
  // L09
  "a1r-word-web-places": {
    goal: "say where you're going (al / a la + place) and why (para + infinitive), and guess shops ending in -ería.",
  },
  // L10
  "a1r-word-web-feelings": {
    goal: "say how you and others feel with estar + a feeling that agrees, give the reason with porque, and use opposites.",
    text: [["el coche está roto", "el carro está roto"]],
  },
  // L11
  "a1-core-verbs-things-happen": {
    goal: "use the verbs for things that happen (ocurrir, caer, mentir, confiar en, molestar...), including caigo and miento.",
    text: [["me molestan los coches", "me molestan los carros"]],
    warmUp: warmUp("Warm-up: feelings and gustar", "A quick look back. Two of today's verbs, molestar and bastar, work like gustar.", [
      mc("\"The noise doesn't bother me\" works like…", ["No me gusta el ruido: the thing is the subject.", "Yo no gusto el ruido: the person is the subject.", "No soy el ruido.", "No hay ruido."], "Like gustar, the thing that bothers is the subject. (Unit 8.)"),
      mc("\"I'm worried because my dog is sick.\"", ["Estoy preocupado porque mi perro está enfermo.", "Soy preocupado porque mi perro está enfermo.", "Estoy preocupado porque mi perro es enfermo.", "Estoy preocupar porque mi perro está enfermo."], "Feelings and states take estar. (Lesson 10.)"),
      mc("\"My friends have a car.\"", ["Mis amigos tienen un carro.", "Mis amigos tenen un carro.", "Mis amigos tiene un carro.", "Mis amigos tienan un carro."], "E → ie when the stress is on the stem: tienen. Mentir works the same way today. (Unit 8.)"),
    ]),
    items: [
      edit(mcIs("\"The cars bother me.\""), (e) => ({ ...e, options: e.options.map(carro), explanation: carro(e.explanation) })),
      chooseSentence("My friends don't lie.", ["Mis amigos no menten.", "Mis amigos no mientes.", "Mis amigos no mentimos."]),
    ],
  },
  // L12
  "a1-core-words-where": {
    goal: "say where things are and which way they go with aquí, ahí, allí, arriba, abajo, atrás, hacia and contra.",
    warmUp: warmUp("Warm-up: este, ese, aquel", "Aquí, ahí and allí follow the same three distances as este, ese and aquel. A quick look back first.", [
      mc("A book is right next to you: \"___ libro\"", ["este", "ese", "aquel", "esto"], "Near the speaker: este. (Lesson 2.)"),
      mc("A bag is next to your friend: \"___ bolsa\"", ["esa", "esta", "aquella", "eso"], "Near the listener: esa. (Lesson 2.)"),
      mc("A mountain is far from both of you: \"___ montaña\"", ["aquella", "aquel", "esa", "aquello"], "Far from both: aquella for a feminine noun. (Lesson 2.)"),
    ]),
    text: [["¿Dónde está mi bolso? —Ahí, en la silla.", "¿Dónde está mi bolsa? —Ahí, en la silla."], ["Los niños van atrás, en el coche.", "Los niños van atrás, en el carro."]],
    items: [
      edit(mcIs("Your car is across the street"), (e) => ({ ...e, question: carro(e.question) })),
      edit(fbIs("Hay un problema en la parte de ___ del coche."), (e) => ({ ...e, sentence: "Hay un problema en la parte de ___ del carro." })),
      edit(trIs("The dog sits in the back of the car."), (e) => ({ ...e, answer: "El perro va atrás en el carro.", altAnswers: ["El perro va atrás en el coche.", "El perro se sienta atrás en el carro.", "El perro se sienta atrás en el coche.", "El perro va en la parte de atrás del carro.", "El perro va en la parte de atrás del coche."] })),
      alts(spIs("¿Dónde está mi bolsa? —Ahí, en la silla."), ["¿Dónde está mi bolso? —Ahí, en la silla.", "¿Dónde está mi bolsa? Ahí, en la silla."]),
    ],
  },
  // L13
  "a1-core-words-life": {
    goal: "use the big everyday nouns (la vida, el mundo, la suerte, la noticia, la oportunidad...) and set phrases like ¡qué suerte! and de acuerdo.",
  },
  // L14
  "vocabulary-practice-4": {
    goal: "recall the 40 food, hobby and place words with their gender, and guess new ones from their ending or verb.",
  },
};

export function withUnit9Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit9SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
