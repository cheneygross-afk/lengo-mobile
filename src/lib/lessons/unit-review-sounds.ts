// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-sounds.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Sounds of Spanish" unit review, written by hand (Unit 2 audit,
// 10.01-10.04): every item checks a sound contrast from the unit in new
// words, instead of sentences that can be told apart by one word. The
// generated review supplies the slug, title, number and writing task; this
// replaces its listening and speaking items and its quiz.

const listening: Exercise[] = [
  lc("El perro es caro.", "What is expensive?", ["The dog", "The car", "Nothing: it says \"but\""], 0, "Perro (trill) is \"dog\", caro (tap) is \"expensive\". Carro would be \"car\", pero \"but\"."),
  lc("Mi papá come papas.", "Who eats?", ["My dad", "My potato", "The Pope"], 0, "Pa-PÁ, stressed at the end, is \"dad\"; PA-pas are potatoes."),
  lc("La uña es larga.", "What is long?", ["The fingernail", "One of them"], 0, "Uña has ñ (\"ny\"); una is \"one\"."),
  dict("Va a hablar.", "\"Va-blar\" with a long a: va, a and hablar are three words."),
  dict("Me llamo Yolanda.", "Llamo with ll, Yolanda with Y: the same sound, two letters."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"It's expensive, but it's pretty.\"", text: "Es caro, pero es bonito.", explanation: "Taps only: ca-ro, pe-ro. Every vowel short and pure." },
  { type: "speak", prompt: "Say it in Spanish: \"Ana looks at the moon.\"", text: "Ana mira la luna.", explanation: "Every a the same open \"ah\"; the u of luna is \"oo\"." },
  { type: "speak", prompt: "Say it in Spanish: \"The red car is expensive.\"", text: "El carro rojo es caro.", altAnswers: ["El coche rojo es caro.", "El auto rojo es caro."], explanation: "Trill in carro and rojo, tap in caro." },
  { type: "speak", prompt: "Say it in Spanish: \"Juan is young and Miguel is tall.\"", text: "Juan es joven y Miguel es alto.", explanation: "J in Juan and joven from the back of the mouth; the u of Miguel is silent." },
];

const practice: Exercise[] = [
  lc("pila", "Listen. Which word did you hear?", ["pila (battery)", "pela (peels)", "pala (shovel)"], 0, "Pi-la: a short, pure \"ee\". (Vowels.)"),
  lc("vino", "Listen. How is the word written?", ["vino", "bino"], 0, "Vino (wine) is written with v, though it sounds like b: learn the letter with the word. (B and v.)"),
  lc("cerro", "Listen. Which word did you hear?", ["cerro (hill)", "cero (zero)"], 0, "A trill, written rr: cerro, \"hill\". (R and rr.)"),
  lc("jirafa", "Listen. How is the word written?", ["jirafa", "girafa", "hirafa"], 0, "Jirafa is written with j. Gi would make the same sound, so you learn the letter with the word. (J, g and h.)"),
  { type: "multiple-choice", question: "Which word has the j sound?", options: ["gigante (giant)", "guante (glove)", "gato (cat)"], correctIndex: 0, explanation: "G before i (gi-gan-te) sounds like j. Gu and ga are the hard g of \"go\". (G before e and i.)" },
  lc("pequeño", "Listen. How is the word written?", ["pequeño", "pekeño", "pequeno"], 0, "\"Ke\" is written que, and \"ny\" is ñ: pequeño, \"small\". (Qu and ñ.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function soundsUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips, each about one sound from this unit. Play each one as often as you like before you answer (🐢 plays it slowly)."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear and say the unit's main contrasts (vowels, b and v, r and rr, ñ, h, j, qu and gu, stress) in new words, then write a few lines and read them aloud.",
    goal: "hear and say the main contrasts of the unit (vowels, b/v, r/rr, ñ, h, c/z/s, stress) in new words, getting at least 4 of 5 right.",
    sections,
    exercises: practice,
  };
}
