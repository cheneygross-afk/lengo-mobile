// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit8-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { applyLessonFixes, applySpokenFixes, choose, chooseSentence, edit, mc, spIs, trIs, warmUp, type Ex, type LessonFix } from "./unit-fixes";

// A1 Unit 8 (Gustar & key irregular verbs): content fixes from Claude's
// audit in Ricardo's format (ES-A1-U08_CL_2026-11-22). Content only. See
// unit-fixes.ts for why some items become choices: the checker forgives
// tene, tenen, tenes, tiengo and neva as typos, and the lessons teach
// exactly tengo (-go) and tiene / tienen (e → ie) and nieva.

const wordOrderStarts = (start: string) => (e: Ex) => e.type === "word-order" && e.words.join(" ").startsWith(start);

const FIXES: Record<string, LessonFix> = {
  // L01
  "gustar-1": {
    goal: "say what you and others like with me / te / le / nos / les gusta or gustan, counting the things liked, never the people.",
    warmUp: warmUp("Warm-up: Unit 7", "A quick look back at Unit 7. Today you'll say what these people like.", [
      mc("My mother's sister is my…", ["tía", "prima", "sobrina", "abuela"], "Your mother's sister is your aunt: tía. (Unit 7.)"),
      mc("\"Where are you from?\" (to a friend)", ["¿De dónde eres?", "¿Dónde eres?", "¿De dónde estás?", "¿Dónde eres de?"], "De goes to the front with dónde, and origin takes ser. (Unit 7.)"),
      mc("\"Do you want another coffee?\"", ["¿Quieres otro café?", "¿Quieres un otro café?", "¿Quieres otra café?", "¿Quieres otros café?"], "Otro already means \"another\": no un, and it agrees with café. (Unit 7.)"),
    ]),
  },
  // L02
  "gustar-2": {
    goal: "talk about food and hobbies with gustar: the thing liked keeps its article, and a + person names who le or les is.",
  },
  // L03
  "a1r-contrast-gusta-gustan": {
    goal: "choose gusta or gustan every time by counting the things liked, including two things joined by y and actions.",
  },
  // L04
  "gustar-mastery-check": {
    goal: "show you can use gustar without notes: gusta or gustan, the right pronoun, no before it, and a + person.",
  },
  // L05
  "a1-word-web-body": {
    goal: "name the main body parts with their article and say what hurts with me duele / me duelen or tengo dolor de.",
    warmUp: warmUp("Warm-up: gustar", "Doler (to hurt) works exactly like gustar. A quick look back first.", [
      mc("\"I like dogs.\"", ["Me gustan los perros.", "Me gusta los perros.", "Yo gusto los perros.", "Me gustan perros."], "Several dogs: gustan, and the thing liked keeps its article. (Lessons 1-3.)"),
      mc("\"My father likes to cook.\"", ["A mi padre le gusta cocinar.", "Mi padre le gusta cocinar.", "A mi padre les gusta cocinar.", "A mi padre le gustan cocinar."], "A + person, le for one person, and gusta for an action. (Lesson 2.)"),
      mc("\"They don't like vegetables.\"", ["No les gustan las verduras.", "Les no gustan las verduras.", "No les gusta las verduras.", "No le gustan las verduras."], "No before the pronoun, les for them, gustan for verduras. (Lesson 1.)"),
    ]),
  },
  // L06
  "a1r-dialogue-me-too-me-neither": {
    goal: "agree and disagree about likes with a mí también, a mí tampoco, a mí sí and a mí no, and yo también after ordinary verbs.",
  },
  // L07
  "a1r-spiral-gustar-questions-ser-estar": {
    goal: "interview a classmate with question words, ser or estar and gustar, and understand the answers.",
  },
  // L08
  "a1r-word-web-food": {
    goal: "order and talk about food: no article for some food (como pescado), el / la after gustar, and the meal verbs.",
    text: [["comer (to eat, to have lunch)", "almorzar (to have lunch; in Spain, comer)"]],
  },
  // L09
  "tener-ir-hacer-hay-1": {
    goal: "use tener (tengo, tienes), ir (voy, vas) and hacer (hago) for age, obligation, plans and the weather.",
    warmUp: warmUp("Warm-up: food, the body, me too", "A quick look back at Lessons 5, 6 and 8 before three verbs you'll use every day.", [
      mc("\"I eat chicken on Sundays.\"", ["Como pollo los domingos.", "Como el pollo los domingos.", "Me gusta pollo los domingos.", "Como pollo en domingos."], "Some chicken: no article after como, and los + day for every week. (Lesson 8.)"),
      mc("\"My feet hurt.\"", ["Me duelen los pies.", "Me duele los pies.", "Me duelen mis pies.", "Yo duelo los pies."], "Several feet: duelen, with los, not mis. (Lesson 5.)"),
      mc("Your friend says \"Me gusta el té.\" You do too. You say…", ["A mí también.", "Yo también.", "A mí tampoco.", "Mí también."], "A gustar sentence names you as me, so the reply mirrors it: a mí también. (Lesson 6.)"),
    ]),
    // Also L10: part 2 is split from this lesson after the fixes run, so its items are fixed here.
    items: [
      choose("Mis padres ___ una casa en la playa.", ["tenen", "tienes", "tenemos"]),
      choose("Mi hermana ___ que estudiar.", ["tene", "está", "tienen"]),
      choose("Yo ___ dos hermanos.", ["tiengo", "teno", "tiene"]),
      choose("¿Tú ___ hermanos?", ["tenes", "tiene", "tengo"]),
      edit(trIs("I have a car."), (e) => ({ ...e, answer: "Tengo un carro.", altAnswers: ["Tengo un coche.", "Tengo un auto."] })),
      chooseSentence("I have a car.", ["Tiengo un carro.", "Teno un carro.", "Tiene un carro."]),
      edit(spIs("Tengo un coche."), (e) => ({ ...e, text: "Tengo un carro.", altAnswers: ["Tengo un coche.", "Tengo un auto."] })),
    ],
  },
  // L11
  "a1r-mission-how-do-you-feel": {
    goal: "say you're hungry, thirsty, cold, hot, sleepy, scared, in a hurry or right with tener + a noun, and what you have to do with tener que.",
    items: [
      choose("Mi padre ___ que trabajar el sábado.", ["tene", "está", "tienen"]),
      choose("Tú ___ razón: el examen es mañana.", ["tenes", "estás", "eres"]),
      choose("Mi madre ___ prisa.", ["tene", "está", "es"]),
      choose("Ustedes ___ razón.", ["tenen", "están", "tienes"]),
      choose("Hace mucho sol y ___ calor.", ["tiengo", "estoy", "hago"]),
    ],
  },
  // L12
  "tener-ir-hacer-hay-2": {
    goal: "pick tener, ir, hacer or hay for each job (age, must do, plans, weather, there is) and name twenty places in town.",
    items: [
      edit(wordOrderStarts("Hay un problema con el"), (e) => ({ ...e, words: e.words.map((w: string) => w.replace("coche", "carro")) })),
    ],
  },
  // L13
  "a1r-mission-weekend-plans": {
    goal: "text a friend about weekend plans with ir a + infinitive, the weather with hace and what's on with hay.",
  },
  // L14
  "a1r-contrast-hay-esta": {
    goal: "choose hay for something new (un, dos, no article) and está / están for something known (el, mi, a name).",
    items: [
      edit(trIs("Está un problema con el ordenador."), (e) => ({ ...e, source: "Está un problema con la computadora.", answer: "Hay un problema con la computadora.", altAnswers: ["Hay un problema con el ordenador."] })),
      edit(trIs("Where are my glasses?"), (e) => ({ ...e, answer: "¿Dónde están mis lentes?", altAnswers: ["¿Dónde están mis gafas?", "¿Dónde están mis anteojos?"] })),
    ],
  },
  // L15
  "a1-word-web-weather": {
    goal: "describe the weather and the seasons: hace + a noun, llueve and nieva, está nublado, and hay nubes.",
    warmUp: warmUp("Warm-up: hay, ir a, tener", "A quick look back at Lessons 11-14. The weather uses all of them.", [
      mc("\"There's a pharmacy on this street.\"", ["Hay una farmacia en esta calle.", "Está una farmacia en esta calle.", "Hay la farmacia en esta calle.", "Es una farmacia en esta calle."], "Something new (una): hay. (Lesson 14.)"),
      mc("\"We're going to eat at home.\"", ["Vamos a comer en casa.", "Vamos comer en casa.", "Vamos a comemos en casa.", "Van a comer en casa."], "Ir a + infinitive: only ir changes. (Lesson 13.)"),
      mc("\"I'm cold.\" (how you feel)", ["Tengo frío.", "Estoy frío.", "Soy frío.", "Tengo fría."], "Feeling cold: tener + the noun frío. (Lesson 11.)"),
    ]),
    text: [["Galicia", "Bogotá"]],
    items: [
      choose("En invierno ___ mucho en la montaña.", ["neva", "hace nieve", "nieve"]),
      chooseSentence("It's snowing.", ["Neva.", "Hace nieve.", "Está nieva."]),
    ],
  },
  // L16
  "a1r-mission-weather-report": {
    goal: "read a forecast and plan with it: hace or va a hacer for the weather, tener for how people feel, ir a for the plan.",
    items: [choose("Hace mucho sol y los niños ___ calor.", ["tenen", "están", "hacen"])],
  },
};

export function withUnit8Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit8SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
