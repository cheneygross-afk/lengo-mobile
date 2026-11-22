// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-beginner-final.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Beginner final review" unit review, written by hand (Unit 10
// audit, 13.01-13.02): the listening options differ only in who, where,
// how many or the feeling, every spoken item mixes two Beginner topics, and
// the quiz checks each topic once in new sentences, with the typical
// mistakes as options (the typed checker would forgive semos, tiengo or
// vivemos as typos). The generated review supplies the slug, title, number
// and writing task.

const listening: Exercise[] = [
  lc("Mis primos son de Colombia, pero viven en Chile.", "What does it tell you?", ["The cousins are from Colombia and live in Chile.", "The cousins are from Chile and live in Colombia.", "The cousins are in Colombia on vacation."], 0, "Son de: where they're from. Viven en: where they live now."),
  lc("Estamos cansados porque trabajamos mucho.", "Who is tired?", ["We are", "They are", "I am"], 0, "Estamos and trabajamos: the -amos ending means we."),
  lc("A mi madre no le gustan las películas de terror.", "What does it tell you?", ["My mother doesn't like horror movies.", "My mother likes horror movies.", "My mothers don't like horror movies."], 0, "No le gustan: she doesn't like them. Gustan agrees with las películas."),
  dict("¿Cuántas hermanas tienes?", "Cuántas agrees with hermanas, and the question opens with ¿."),
  dict("Hay una farmacia al lado del banco.", "Hay for something new; de + el = del."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"My brother is a doctor, but today he's sick.\"", text: "Mi hermano es médico, pero hoy está enfermo.", altAnswers: ["Mi hermano es médico pero hoy está enfermo."], explanation: "Ser for the profession (no article), estar for how he is today." },
  { type: "speak", prompt: "Say it in Spanish: \"We live in a small apartment near the park.\"", text: "Vivimos en un apartamento pequeño cerca del parque.", altAnswers: ["Vivimos en un piso pequeño cerca del parque.", "Nosotros vivimos en un apartamento pequeño cerca del parque."], explanation: "Vivir takes -imos for nosotros; pequeño after the noun; de + el = del." },
  { type: "speak", prompt: "Say it in Spanish: \"It's cold, so I'm going to wear a coat.\"", text: "Hace frío, así que voy a llevar un abrigo.", altAnswers: ["Hace frío así que voy a llevar un abrigo.", "Hace frío, entonces voy a llevar un abrigo.", "Hace frío, por eso voy a llevar un abrigo."], explanation: "Hace for the weather, así que for the result, ir a + infinitive for the plan." },
  { type: "speak", prompt: "Say it in Spanish: \"How much are these shoes? — Forty dollars.\"", text: "¿Cuánto cuestan estos zapatos? —Cuarenta dólares.", altAnswers: ["¿Cuánto cuestan estos zapatos? Cuarenta dólares."], explanation: "Several shoes: cuestan and estos." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"We're students.\"", ["Somos estudiantes.", "Semos estudiantes.", "Somos unos estudiantes.", "Estamos estudiantes."], "Nosotros: somos, and no article before what you are. (Ser.)"),
  mc("\"The old houses\"", ["las casas viejas", "las casas viejos", "los casas viejas", "las viejas casa"], "Casa is feminine: las and viejas, after the noun, both plural. (Agreement.)"),
  mc("\"We write emails at work.\"", ["Escribimos correos en el trabajo.", "Escribemos correos en el trabajo.", "Escribamos correos en el trabajo.", "Escriben correos en el trabajo."], "-ir verbs keep the i for nosotros: escribimos. (-er and -ir verbs.)"),
  mc("\"The pharmacy is next to the bank, and it's very big.\"", ["La farmacia está al lado del banco y es muy grande.", "La farmacia es al lado del banco y es muy grande.", "La farmacia está al lado del banco y está muy grande.", "La farmacia está al lado de el banco y es muy grande."], "Location: estar. What it's like: ser. De + el = del. (Ser and estar.)"),
  mc("\"Our grandparents live in Lima.\"", ["Nuestros abuelos viven en Lima.", "Nuestro abuelos viven en Lima.", "Nuestras abuelos viven en Lima.", "Nos abuelos viven en Lima."], "The possessive agrees with abuelos: nuestros. (Possessives.)"),
  mc("\"Why are you sad?\" (to a friend)", ["¿Por qué estás triste?", "¿Porque estás triste?", "¿Por que estás triste?", "¿Por qué eres triste?"], "Why: por qué, two words with an accent; a feeling now takes estar. (Questions.)"),
  mc("\"My friends like to dance.\"", ["A mis amigos les gusta bailar.", "A mis amigos le gusta bailar.", "A mis amigos les gustan bailar.", "Mis amigos gustan bailar."], "Several people: les. An action: gusta. (Gustar.)"),
  mc("\"I'm twenty-two and I have to work tomorrow.\"", ["Tengo veintidós años y tengo que trabajar mañana.", "Tiengo veintidós años y tengo que trabajar mañana.", "Soy veintidós años y tengo que trabajar mañana.", "Tengo veintidós años y tengo trabajar mañana."], "Age and obligation both take tener: tengo años, tengo que + infinitive. (Tener.)"),
  mc("\"There are two cafés on my street, and it's sunny today.\"", ["Hay dos cafés en mi calle y hoy hace sol.", "Son dos cafés en mi calle y hoy hace sol.", "Hay dos cafés en mi calle y hoy es sol.", "Están dos cafés en mi calle y hoy hace sol."], "Hay for things that exist, hace for the weather. (Hay and hace.)"),
  mc("\"How much is that melon over there?\"", ["¿Cuánto cuesta aquel melón?", "¿Cuánto custa aquel melón?", "¿Cuánto cuestan aquel melón?", "¿Cuánto cuesta aquello melón?"], "One melon: cuesta (o → ue). Far from both: aquel, never aquello before a noun. (Shopping.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function beginnerFinalUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips that mix the Beginner topics. Play each one as often as you like (🐢 plays it slowly). Listen for who it is, where they are, and what they like."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the whole Beginner level: ser and estar, agreement, regular verbs, possessives, questions, gustar, tener, hay and hace, and shopping, then a short quiz.",
    goal: "hear, say and write about yourself and everyday life with all the Beginner grammar, getting at least 8 of 10 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
