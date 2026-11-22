// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-imperfect.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A2 "The imperfect" unit review, written by hand (A2 Unit 3 audit,
// 10.01-10.02): the listening options differ only in who and whether it
// was a habit, a single event or now, every spoken item uses this unit's
// imperfect forms, and the quiz checks each topic once in new sentences,
// with the typical mistakes as options (the typed checker passes a missing
// accent with a note and forgives a v for b as a typo). The generated
// review supplies the slug, title, number and writing task.

const listening: Exercise[] = [
  lc("De niños, íbamos a la playa todos los veranos.", "What does the speaker say?", ["We used to go to the beach every summer.", "We went to the beach last summer.", "We go to the beach every summer."], 0, "Íbamos + todos los veranos: a habit in the past. Fuimos would be one trip, and vamos the present."),
  lc("Mi abuela cocinaba los domingos.", "What do you learn?", ["The grandmother used to cook on Sundays.", "The grandmother cooked last Sunday.", "The speaker used to cook on Sundays."], 0, "Cocinaba with mi abuela: she, as a habit. Cocinó would be one Sunday."),
  lc("Eran las diez de la noche y llovía mucho.", "What is described?", ["It was ten at night and it was raining hard.", "It is ten at night and it's raining hard.", "At ten at night it started to rain."], 0, "Eran and llovía set the scene: time and weather in the imperfect."),
  dict("Cuando tenía ocho años, vivíamos en el campo.", "Tenía and vivíamos: an accent on every í of -ía."),
  dict("Antes íbamos al parque y veíamos a los abuelos.", "Íbamos (with b and an accent) and veíamos (ver keeps its e)."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"When I was little, I used to play soccer every day.\"", text: "Cuando era pequeño, jugaba al fútbol todos los días.", altAnswers: ["Cuando era pequeña, jugaba al fútbol todos los días.", "De niño, jugaba al fútbol todos los días.", "De niña, jugaba al fútbol todos los días."], explanation: "Era for the stage of life, jugaba for the habit." },
  { type: "speak", prompt: "Say it in Spanish: \"My grandparents lived in a small town and they had a dog.\"", text: "Mis abuelos vivían en un pueblo pequeño y tenían un perro.", altAnswers: ["Mis abuelos vivían en un pueblo pequeño y tenían perro."], explanation: "Vivían and tenían: -ían for ellos, with an accent." },
  { type: "speak", prompt: "Answer aloud: «¿Qué hacían ustedes los sábados?» Say: \"We used to watch movies.\"", text: "Veíamos películas.", altAnswers: ["Nosotros veíamos películas.", "Los sábados veíamos películas."], explanation: "An ustedes question gets a nosotros answer: veíamos." },
  { type: "speak", prompt: "Say it in Spanish: \"Before, I drank a lot of coffee; now I drink tea.\"", text: "Antes bebía mucho café; ahora bebo té.", altAnswers: ["Antes tomaba mucho café; ahora tomo té."], explanation: "Antes + imperfect (bebía), ahora + present (bebo)." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"We used to sing in the car.\"", ["Cantábamos en el carro.", "Cantabamos en el carro.", "Cantavamos en el carro.", "Cantamos en el carro."], "-ar nosotros: -ábamos, with b and an accent. (-ar endings.)"),
  mc("\"My sister used to read every night.\"", ["Mi hermana leía todas las noches.", "Mi hermana leia todas las noches.", "Mi hermana leyó todas las noches.", "Mi hermana leaba todas las noches."], "-er verbs: -ía, with an accent on the í. (-er / -ir endings.)"),
  mc("\"We were very good friends.\"", ["Éramos muy buenos amigos.", "Eramos muy buenos amigos.", "Fuimos muy buenos amigos.", "Érabamos muy buenos amigos."], "Ser: éramos, with an accent. (Era, iba, veía.)"),
  mc("\"They used to go to school by bus.\"", ["Iban a la escuela en autobús.", "Ivan a la escuela en autobús.", "Íban a la escuela en autobús.", "Fueron a la escuela en autobús."], "Ir: iban, with b and no accent. (Era, iba, veía.)"),
  mc("\"I used to watch cartoons.\"", ["Veía dibujos animados.", "Vía dibujos animados.", "Veia dibujos animados.", "Vi dibujos animados."], "Ver keeps its e: veía. (Era, iba, veía.)"),
  mc("\"There were a lot of people in the square.\"", ["Había mucha gente en la plaza.", "Habían mucha gente en la plaza.", "Hubo mucha gente en la plaza.", "Habia mucha gente en la plaza."], "Había stays singular, with an accent. (Setting the scene.)"),
  mc("\"It was one o'clock.\"", ["Era la una.", "Eran la una.", "Fue la una.", "Estaba la una."], "One o'clock is singular: era la una. (Setting the scene.)"),
  mc("\"When I was ten, I learned to swim.\"", ["Cuando tenía diez años, aprendí a nadar.", "Cuando tuve diez años, aprendía a nadar.", "Cuando era diez años, aprendí a nadar.", "Cuando tenía diez años, aprendía a nadar."], "Age in the background (tenía), one finished event (aprendí). (Two past tenses.)"),
  mc("\"We used to play in the park.\" (with soler)", ["Solíamos jugar en el parque.", "Solíamos a jugar en el parque.", "Solíamos jugábamos en el parque.", "Solimos jugar en el parque."], "Soler + infinitive, no a. (Soler.)"),
  mc("«Antes vivía en Lima; ahora ___ en Quito.»", ["vivo", "vivía", "viví", "vivíamos"], "Ahora takes the present. (Before and now.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function imperfectUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's grammar. Play each one as often as you like (🐢 plays it slowly). Listen for who, and whether it was a habit, one event or now."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's grammar: -aba and -ía with their accents, era, iba and veía, había, setting a scene, soler, and before and now, then a short quiz.",
    goal: "hear, say and write how things used to be with the imperfect, getting at least 8 of 10 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
