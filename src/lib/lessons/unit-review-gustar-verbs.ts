// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-gustar-verbs.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Gustar & key irregular verbs" unit review, written by hand (Unit 8
// audit, 17.01-17.02): the listening options differ only in who likes it,
// when, or whether it's the weather or a feeling, every spoken item uses
// this unit's grammar, and the quiz checks each topic once in new
// sentences, with the typical mistakes as options (the typed checker would
// forgive tenen or neva as typos). The generated review supplies the slug,
// title, number and writing task.

const listening: Exercise[] = [
  lc("A mi hermano no le gustan las verduras.", "What does it tell you?", ["My brother doesn't like vegetables.", "My brother likes vegetables.", "My brothers don't like vegetables."], 0, "No le gustan: he doesn't like them. Several brothers would be a mis hermanos no les gustan."),
  lc("Mañana va a llover.", "What's the weather going to be?", ["Rain tomorrow", "Rain today", "Snow tomorrow"], 0, "Va a llover: it's going to rain. Llueve would be now, and nevar is to snow."),
  lc("Tengo frío porque hace viento.", "What's happening?", ["The speaker feels cold because it's windy.", "The speaker is cold to the touch.", "The speaker feels hot because it's sunny."], 0, "Tengo frío: how you feel. Hace viento: the weather."),
  dict("Me duelen los pies.", "Duelen: the feet are plural, and los, not mis, with body parts."),
  dict("Hay una farmacia cerca de mi casa.", "Hay for something new: una farmacia."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"My sister likes to dance, but she doesn't like soccer.\"", text: "A mi hermana le gusta bailar, pero no le gusta el fútbol.", altAnswers: ["A mi hermana le gusta bailar pero no le gusta el fútbol.", "Le gusta bailar, pero no le gusta el fútbol."], explanation: "A + person + le; gusta for an action and for one thing." },
  { type: "speak", prompt: "Say it in Spanish: \"I'm very hungry and I have to cook.\"", text: "Tengo mucha hambre y tengo que cocinar.", explanation: "Tener + hambre (mucha: hambre is feminine), and tener que + infinitive." },
  { type: "speak", prompt: "Say it in Spanish: \"On Saturday we're going to go to the beach because it's going to be hot.\"", text: "El sábado vamos a ir a la playa porque va a hacer calor.", altAnswers: ["El sábado vamos a la playa porque va a hacer calor."], explanation: "Vamos a + infinitive for the plan, va a hacer for tomorrow's weather." },
  { type: "speak", prompt: "Say it in Spanish: \"Is there a bank near here? — Yes, the bank is next to the park.\"", text: "¿Hay un banco cerca de aquí? —Sí, el banco está al lado del parque.", altAnswers: ["¿Hay un banco cerca de aquí? Sí, el banco está al lado del parque.", "¿Hay un banco cerca? —Sí, el banco está al lado del parque.", "¿Hay un banco cerca? Sí, el banco está al lado del parque."], explanation: "Hay for a new thing (un banco), está for the known one (el banco)." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"I like Mexican movies.\"", ["Me gustan las películas mexicanas.", "Me gusta las películas mexicanas.", "Yo gusto las películas mexicanas.", "Me gustan películas mexicanas."], "Several movies: gustan, and the thing liked keeps its article. (Gusta or gustan.)"),
  mc("\"My grandparents like to walk.\"", ["A mis abuelos les gusta caminar.", "Mis abuelos les gusta caminar.", "A mis abuelos le gusta caminar.", "A mis abuelos les gustan caminar."], "A + people + les, and an action takes gusta. (A + person.)"),
  mc("Your friend says \"No me gusta el café.\" You don't like it either. You say…", ["A mí tampoco.", "A mí también.", "Yo tampoco.", "A mí sí."], "Agreeing with a negative gustar sentence: a mí tampoco. (Me too, me neither.)"),
  mc("\"Her eyes hurt.\"", ["Le duelen los ojos.", "Le duele los ojos.", "Le duelen sus ojos.", "Ella duele los ojos."], "Doler works like gustar: los ojos are plural, and los, not sus. (Doler.)"),
  mc("\"I don't eat meat, but I like fish.\"", ["No como carne, pero me gusta el pescado.", "No como la carne, pero me gusta pescado.", "No como carne, pero me gusta pescado.", "No como carne, pero me gustan el pescado."], "Some meat: no article. Fish in general after gusta: el pescado. (Food and articles.)"),
  mc("\"My cousins have a dog.\"", ["Mis primos tienen un perro.", "Mis primos tenen un perro.", "Mis primos tienan un perro.", "Mis primos tiene un perro."], "Ellos, stress on the stem: e → ie, tienen. (Tener.)"),
  mc("\"We're thirsty.\"", ["Tenemos sed.", "Estamos sed.", "Tienemos sed.", "Somos sed."], "Tener + the noun sed, and tenemos keeps its e. (Tener for feelings.)"),
  mc("\"What are you going to do on Sunday?\" (to a friend)", ["¿Qué vas a hacer el domingo?", "¿Qué vas hacer el domingo?", "¿Qué vas a haces el domingo?", "¿Qué va a hacer tú el domingo?"], "Ir a + infinitive: vas a hacer. (Ir a.)"),
  mc("\"The keys are on the table.\"", ["Las llaves están en la mesa.", "Hay las llaves en la mesa.", "Las llaves hay en la mesa.", "Las llaves son en la mesa."], "Known keys (las llaves): están. Hay never comes before el / la / las. (Hay or está.)"),
  mc("\"In winter it's very cold and it snows.\"", ["En invierno hace mucho frío y nieva.", "En invierno hace muy frío y nieva.", "En invierno hace mucho frío y neva.", "En invierno hay mucho frío y nieva."], "Hace + mucho with the noun frío, and nevar → nieva. (Weather.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function gustarVerbsUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's grammar. Play each one as often as you like (🐢 plays it slowly). Listen for who likes it, when it happens, and whether it's the weather or a feeling."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's grammar: gustar and doler, me too and me neither, food words, tener, ir a, hay or está, and the weather, then a short quiz.",
    goal: "hear, say and write likes, plans, feelings and the weather, getting at least 8 of 10 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
