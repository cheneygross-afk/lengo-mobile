// Synced from cheneygross-afk/lengo:src/lib/lessons/en-a2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const EN_A2_WRITING: UnitWriting = {
  "a2-present-perfect-2": [
    {
      "type": "write",
      "prompt": "Vuelves a casa y hay varios problemas. Escribe una nota a tu compañera de departamento para contarle qué ha pasado y pídele ayuda con una pregunta.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Usa el presente perfecto para resultados que se notan ahora (\"I've lost my keys\").",
        "Incluye al menos una pregunta con \"Have you...?\" o \"Has he/she...?\".",
        "Usa \"has\" con la tercera persona (\"The cat has broken...\").",
        "Usa participios irregulares correctos (\"lost\", \"broken\", \"gone\"...)."
      ],
      "modelAnswer": "Hi Marta, sorry, but I've got a small problem. I've lost my keys! Have you seen them? I think I've left them in the kitchen. Also, the cat has broken a glass, so be careful in the living room. I've cleaned the floor, but please wear shoes. Leo has gone to the supermarket, so he isn't home. Text me, please! Ana",
      "explanation": "Presente perfecto para resultados que se notan ahora (\"I've lost my keys\", \"the cat has broken a glass\"); \"has gone\" porque Leo todavía no ha vuelto."
    }
  ],
  "a2-want-someone-to": [
    {
      "type": "write",
      "prompt": "Te vas de vacaciones dos semanas. Escribe una nota a tu vecino para pedirle que te ayude con varias cosas mientras estás fuera.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Usa \"want\" o \"would like\" + persona + \"to\" (\"I'd like you to water...\"), sin \"that\".",
        "Usa \"tell\" o \"ask\" + persona + \"to\" al menos una vez.",
        "Explica para qué haces algo con \"to\" + verbo, no con \"for\".",
        "Da las gracias con \"thanks for\" + -ing."
      ],
      "modelAnswer": "Hi Mr. Brown, I'm going to Spain for two weeks to visit my grandmother, and I'd like you to help me with a few things. Could you water my plants twice a week? I also want you to collect my mail, please. If my brother calls, tell him to send me a message. Here is my key. Thanks a lot for helping me! Carla",
      "explanation": "\"I'd like you to\" y \"I want you to\" llevan la persona entre el verbo y \"to\"; \"tell him to\" funciona igual; «para visitar» es \"to visit\", y después de \"for\" va -ing (\"thanks for helping\")."
    }
  ]
};
