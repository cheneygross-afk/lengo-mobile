// Synced from cheneygross-afk/lengo:src/lib/lessons/en-a1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const EN_A1_WRITING: UnitWriting = {
  "a1-final-review-1": [
    {
      "type": "write",
      "prompt": "Un amigo va a visitar tu ciudad. Escríbele una nota corta para describir tu barrio: qué hay, qué se puede hacer y quién vive cerca de ti.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Usa \"there is\" y \"there are\" para decir qué hay (no \"it has\").",
        "Usa \"can\" sin \"do\" para decir qué se puede hacer.",
        "Usa la -s de tercera persona (\"she works\", \"he lives\").",
        "Pone sujeto en todas las frases (\"It is quiet\")."
      ],
      "modelAnswer": "Hi Tom! My neighborhood is small and quiet. There is a big park near my house and there are two good cafés on my street. My friend Ana lives next door. She works in a bakery and she makes great bread. You can walk to the beach in ten minutes. It is very nice in summer!",
      "explanation": "Revisa: \"there is\" y \"there are\" para «hay», \"can\" sin \"do\", la -s de \"she works\" y el sujeto \"it\" en \"It is very nice\"."
    }
  ],
  "a1-challenge-day-in-london-evening": [
    {
      "type": "write",
      "prompt": "Estás de viaje en Londres. Escribe una postal a un amigo: di con quién estás, qué tiempo hace, qué estás haciendo hoy, algo que has visto en una tienda y su precio, y cómo te sientes.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Describe el tiempo con \"It's\" (\"It's cold\", \"It's raining\").",
        "Usa el presente continuo para lo que está pasando hoy (\"we're shopping\").",
        "Usa \"this\", \"that\", \"these\" o \"those\" con un precio (\"These jeans are forty pounds\").",
        "Dice cómo se siente con \"I'm\" + adjetivo (\"I'm happy\", \"I'm tired\")."
      ],
      "modelAnswer": "Hi Lucas! I'm in London with my sister. It's cold and it's raining, but I'm very happy. Today we're shopping on Oxford Street. These jeans are forty pounds, but I love them! The restaurants here are great and the people are very nice. I'm tired now. See you on Sunday! Love, Sofia",
      "explanation": "Revisa: \"It's\" para el tiempo, el presente continuo para hoy (\"we're shopping\"), \"these jeans are\" en plural y \"I'm\" + adjetivo para cómo te sientes."
    }
  ]
};
