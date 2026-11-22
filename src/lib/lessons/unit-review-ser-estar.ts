// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-ser-estar.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Ser vs. estar" unit review, written by hand (Unit 5 audit,
// 10.01-10.02): the listening options differ only in what ser or estar
// changes (bored or boring, now or in general), every spoken item uses
// this unit's grammar, and the quiz checks each topic once in new
// sentences, with the typical mistakes as options (the typed checker would
// forgive escribendo or leiendo as typos). The generated review supplies
// the slug, title, number and writing task.

const listening: Exercise[] = [
  lc("Mi hermano está aburrido.", "What does it mean?", ["My brother is bored.", "My brother is boring.", "My brother is busy."], 0, "Estar aburrido: how he feels now, bored. Es aburrido would mean he's boring."),
  lc("La fiesta es en mi casa.", "What does it tell you?", ["Where the party takes place", "What the party is like", "Who is at the party"], 0, "An event takes ser for where it happens: la fiesta es en mi casa."),
  lc("Estamos comiendo.", "What's happening?", ["We're eating right now.", "We eat every day.", "They're eating right now."], 0, "Estamos + gerund: something in progress now, and estamos is nosotros."),
  dict("Mi tía es enfermera y está en el hospital.", "Es enfermera: a job, with no article. Está en el hospital: where she is."),
  dict("Los niños están leyendo.", "Leyendo: leer takes -yendo."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"My sister is a lawyer and she's very kind.\"", text: "Mi hermana es abogada y es muy amable.", altAnswers: ["Mi hermana es abogada y muy amable."], explanation: "A job and a personality trait: both ser, and abogada with no article." },
  { type: "speak", prompt: "Say it in Spanish: \"The bank is near here, but today it's closed.\"", text: "El banco está cerca de aquí, pero hoy está cerrado.", altAnswers: ["El banco está cerca, pero hoy está cerrado.", "El banco está cerca de aquí pero hoy está cerrado."], explanation: "Where a place is and how it is today: both estar." },
  { type: "speak", prompt: "Say it in Spanish: \"Dad is sleeping and I'm reading.\"", text: "Papá está durmiendo y yo estoy leyendo.", altAnswers: ["Papá está durmiendo y estoy leyendo.", "Mi papá está durmiendo y yo estoy leyendo.", "Mi papá está durmiendo y estoy leyendo."], explanation: "Estar + gerund for now: durmiendo (o → u) and leyendo (-yendo)." },
  { type: "speak", prompt: "Say it in Spanish: \"I'm from Colombia, but now I'm in Lima.\"", text: "Soy de Colombia, pero ahora estoy en Lima.", altAnswers: ["Soy de Colombia pero ahora estoy en Lima.", "Yo soy de Colombia, pero ahora estoy en Lima."], explanation: "Origin takes ser (soy de); where you are now takes estar (estoy en)." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"My aunt is a lawyer.\"", ["Mi tía es abogada.", "Mi tía es una abogada.", "Mi tía es abogado.", "Mi tía está abogada."], "A job after ser takes no article, and a woman is abogada. (Jobs.)"),
  mc("\"El museo ___ en el centro.\"", ["está", "es", "son", "estás"], "Where a place is takes estar, even a building that never moves. (Location.)"),
  mc("\"La boda ___ en un hotel.\"", ["es", "está", "son", "están"], "An event takes ser for where it happens. (Events.)"),
  mc("Which sentence means \"The children are bored\"?", ["Los niños están aburridos.", "Los niños son aburridos.", "Los niños están aburridas.", "Los niños es aburrido."], "Bored is how they feel now: estar aburrido. Ser aburrido means boring. (Same word, different meaning.)"),
  mc("\"I work at a bank.\" (in general)", ["Trabajo en un banco.", "Estoy trabajando en un banco.", "Soy trabajando en un banco.", "Estoy trabajo en un banco."], "A habit or a general fact takes the simple present: trabajo. (Now vs. in general.)"),
  mc("\"Mi madre está ___ una carta.\" (escribir)", ["escribiendo", "escribendo", "escribando", "escribe"], "-Ir verbs take -iendo: escribiendo. (Gerunds.)"),
  mc("\"Los estudiantes están ___ el periódico.\" (leer)", ["leyendo", "leiendo", "leendo", "leen"], "Leer has a vowel before the ending, so -iendo becomes -yendo. (Gerunds with y.)"),
  mc("\"El bebé está ___.\" (dormir)", ["durmiendo", "dormiendo", "duermiendo", "dormindo"], "Dormir changes o → u in the gerund: durmiendo. (Stem-changing gerunds.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function serEstarUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's grammar. Play each one as often as you like (🐢 plays it slowly). Listen for ser or estar, and for what is happening right now."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's grammar: jobs with ser, ser or estar, words that change meaning, and estar + gerund, then a short quiz.",
    goal: "hear, say and choose ser or estar and the right gerund, getting at least 6 of 8 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
