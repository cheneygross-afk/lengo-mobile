// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-house-demonstratives.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "This & that, and the Beginner level so far" unit review, written
// by hand (Unit 9 audit, 15.01-15.02): the listening options differ only in
// the distance (este, ese, aquel), the number or the feeling, every spoken
// item uses this unit's grammar, and the quiz checks each topic once in new
// sentences, with the typical mistakes as options (the typed checker would
// forgive aquelos or menten as typos). The generated review supplies the
// slug, title, number and writing task.

const listening: Exercise[] = [
  lc("Quiero aquella camisa azul.", "Which shirt does the speaker want?", ["The blue one far from both of them", "The blue one right next to the speaker", "The blue ones far from both of them"], 0, "Aquella: far from both people. Esta would be right here, and aquellas camisas would be several."),
  lc("¿Cuánto cuestan esos zapatos?", "What does the speaker ask?", ["The price of the shoes near the listener", "The price of the shoes near the speaker", "Where the shoes are"], 0, "Esos: near the person you're talking to. Cuestan asks the price of several things."),
  lc("Mi hermana está aburrida porque no hay nada en la tele.", "How does the sister feel?", ["Bored", "Tired", "Boring"], 0, "Está aburrida: she feels bored. Es aburrida would mean she is a boring person."),
  dict("Hay un sofá grande en la sala.", "Hay for something new: un sofá."),
  dict("Mañana voy a la farmacia para comprar algo.", "A + la stays two words; para + infinitive gives the reason."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"I want this dress, not that one over there.\"", text: "Quiero este vestido, no aquel.", altAnswers: ["Quiero este vestido no aquel."], explanation: "Drop the noun and keep the demonstrative: aquel agrees with vestido." },
  { type: "speak", prompt: "Say it in Spanish: \"Today I'm wearing black jeans and a white shirt.\"", text: "Hoy llevo unos jeans negros y una camisa blanca.", altAnswers: ["Hoy llevo jeans negros y una camisa blanca.", "Hoy llevo unos vaqueros negros y una camisa blanca."], explanation: "Llevar for what you wear; each color agrees with its noun." },
  { type: "speak", prompt: "Say it in Spanish: \"The keys are next to the lamp.\"", text: "Las llaves están al lado de la lámpara.", explanation: "Known keys: están, and al lado de + the place." },
  { type: "speak", prompt: "Say it in Spanish: \"I'm going to the bakery to buy bread.\"", text: "Voy a la panadería para comprar pan.", altAnswers: ["Voy a la panadería a comprar pan."], explanation: "A la + place, and para + infinitive for why. Panadería: the -ería shop for pan." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"There are two chairs in the kitchen.\"", ["Hay dos sillas en la cocina.", "Están dos sillas en la cocina.", "Son dos sillas en la cocina.", "Hay las sillas en la cocina."], "Something new and counted: hay. (Hay or está.)"),
  mc("\"Those books over there are mine.\"", ["Aquellos libros son míos.", "Aquelos libros son míos.", "Aquellas libros son míos.", "Aquello libros son míos."], "Far from both, masculine plural: aquellos, with ll. (Este, ese, aquel.)"),
  mc("You point at something you can't name: \"What's that?\" (near your friend)", ["¿Qué es eso?", "¿Qué es ese?", "¿Qué es esa?", "¿Qué es esto?"], "No noun to agree with: eso, near the listener. (Esto, eso, aquello.)"),
  mc("\"I put on my coat because it's cold.\"", ["Me pongo el abrigo porque hace frío.", "Llevo el abrigo porque es frío.", "Me pongo mi abrigo porque hay frío.", "Pongo el abrigo porque hace frío."], "Me pongo for the action, el with your own clothes, hace frío for the weather. (Clothes.)"),
  mc("\"She's wearing red shoes.\"", ["Lleva unos zapatos rojos.", "Lleva unos zapatos rojo.", "Lleva unos zapatos rojas.", "Lleva unos rojos zapatos."], "The color comes after the noun and agrees: zapatos rojos. (Colors.)"),
  mc("\"How much are these pants?\"", ["¿Cuánto cuestan estos pantalones?", "¿Cuánto cuesta estos pantalones?", "¿Cuánto cuestan estas pantalones?", "¿Cuánto cuestan estes pantalones?"], "Several things: cuestan, and estos for masculine plural. (Shopping.)"),
  mc("\"My friend is tall and today she's tired.\"", ["Mi amiga es alta y hoy está cansada.", "Mi amiga está alta y hoy es cansada.", "Mi amiga es alta y hoy es cansada.", "Mi amiga es alto y hoy está cansado."], "Ser for what she's like, estar for how she is today, both agreeing. (People.)"),
  mc("\"Tomorrow I have to work, but on Sunday I'm going to rest.\"", ["Mañana tengo que trabajar, pero el domingo voy a descansar.", "Mañana tengo trabajar, pero el domingo voy descansar.", "Mañana tengo que trabajar, pero el domingo voy a descanso.", "Mañana tiengo que trabajar, pero el domingo voy a descansar."], "Tener que + infinitive, ir a + infinitive. (Actions and plans.)"),
  mc("\"We're going to the park to play.\"", ["Vamos al parque para jugar.", "Vamos a el parque para jugar.", "Vamos al parque por jugar.", "Vamos en el parque para jugar."], "A + el = al, and para + infinitive for why. (Places.)"),
  mc("\"My brother never lies.\"", ["Mi hermano nunca miente.", "Mi hermano nunca mente.", "Mi hermano nunca mienta.", "Mi hermano nunca mintió."], "Mentir: e → ie when the stress is on the stem, miente. (Things that happen.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function houseDemonstrativesUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's grammar. Play each one as often as you like (🐢 plays it slowly). Listen for how near the thing is, how many there are, and how people feel."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's grammar: the home and hay or está, este, ese and aquel, clothes and colors, shopping, people, plans, places and feelings, then a short quiz.",
    goal: "hear, say and write about the things around you, near and far, getting at least 8 of 10 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
