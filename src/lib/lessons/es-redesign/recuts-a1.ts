// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/recuts-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
// Beginner recut lessons (see recut.ts): the old "Tener, Ir, Hacer + Hay"
// lessons, cut into one lesson per concept.
import type { Recut } from "./recut";
import { A1_UNIT4_PATCHES } from "./a1-unit4";
import { TENER, TENER_PHRASES, IR, IR_A } from "./concept-tables";

export const A1_RECUTS: Recut[] = [
  {
    slug: "es-hay-there-is",
    title: "Hay: There Is, There Are",
    summary: "Say what there is and isn't with hay, ask if there is one, and choose between hay and está.",
    concept: "hay",
    replaces: ["tener-ir-hacer-hay-2"],
    from: [
      { lesson: "gender-number-articles-2", sections: [2], exercises: [0, 1, 5, 7, 10, 12, 13, 14, 15] },
      { lesson: "tener-ir-hacer-hay-2", sections: [2, 3], exercises: [2, 4, 5, 8, 9, 10, 11, 12, 13, 14, 16] },
    ],
    patch: {
      // Fixes from Claude's Unit 4 audit (a1-unit4.ts): a recut takes no other patch.
      ...A1_UNIT4_PATCHES["es-hay-there-is"],
      goal: "say what there is and isn't in a place, ask \"is there...?\", and choose hay or está.",
      sections: {
        0: { reteach: "Hay means both \"there is\" and \"there are\". It never changes: Hay una cama. Hay tres sillas." },
        1: { ...A1_UNIT4_PATCHES["es-hay-there-is"].sections?.[1], reteach: "One word does everything: Hay un banco (there is), Hay dos bancos (there are), No hay leche (there's no), ¿Hay un banco? (is there?)." },
        2: { reteach: "Hay says something exists, with un, una or a number: Hay un banco. Está says where a known thing is, with el, la or mi: El banco está en la plaza." },
      },
      insert: [
        {
          before: 2,
          section: {
            heading: "Watch out: what can't follow hay",
            watchOut: true,
            body: [
              "After hay, use un, una, a number, or nothing at all. Never el or la: say Hay una lámpara, not Hay la lámpara.",
              "After no hay, drop un and una: No hay leche. No hay pan. And hay never takes -n or -s: three museums is still Hay tres museos.",
            ],
            tables: [{ head: ["Say", "Not"], rows: [["Hay una lámpara.", "Hay la lámpara."], ["No hay leche.", "No hay la leche."], ["Hay tres museos.", "Han tres museos."]] }],
            reteach: "After hay: un, una, a number, or nothing. Never el or la. And hay never changes: Hay un museo, Hay tres museos, No hay museos.",
          },
        },
        {
          before: 2,
          section: {
            heading: "Asking and answering with hay",
            body: ["A question with hay is the same sentence with question marks: ¿Hay un banco cerca? Answer with Sí, hay uno or No, no hay. To ask what's in a place, use ¿Qué hay...?: ¿Qué hay en tu dormitorio? Hay una cama y dos lámparas."],
            examples: [
              { es: "¿Hay un hospital en el pueblo?", en: "Is there a hospital in the town?" },
              { es: "No, no hay.", en: "No, there isn't." },
            ],
            reteach: "To ask, keep the same words and add question marks: ¿Hay un banco? Answer Sí, hay uno, or No, no hay.",
          },
        },
      ],
    },
  },
  {
    slug: "es-tener-and-its-phrases",
    title: "Tener: To Have, and I'm Hungry, I'm 20",
    summary: "Use tener for what you have, your age, hunger, thirst, cold and hurry, and tener que for what you have to do.",
    concept: "tener",
    replaces: ["tener-ir-hacer-hay-1", "tener-ir-hacer-hay-1-part-2"],
    from: [
      { lesson: "tener-ir-hacer-hay-1", sections: [0], exercises: [0, 2, 3, 7, 10] },
      { lesson: "tener-ir-hacer-hay-drill-1", sections: [0, 1], exercises: [0, 1, 3, 5, 8, 10, 11] },
      { lesson: "tener-ir-hacer-hay-1-part-2", exercises: [1, 4, 5, 6, 9, 14, 16] },
      { lesson: "tener-ir-hacer-hay-drill-1-part-2", exercises: [1, 4, 7] },
    ],
    patch: {
      goal: "say what you have, how old you are, that you're hungry or cold, and what you have to do.",
      sections: {
        0: { addTables: [TENER], reteach: "Tener: tengo, tienes, tiene, tenemos, tienen. Yo ends in -go, and the e becomes ie except in tenemos." },
        1: { watchOut: true, reteach: "Tenemos keeps the plain ten-, never tienemos. The e only becomes ie in tienes, tiene and tienen." },
        2: { addTables: [TENER_PHRASES], reteach: "Age, hunger, thirst, cold, heat and hurry are things you have in Spanish: Tengo veinte años, Tengo hambre. Never Soy veinte años or Estoy hambre." },
      },
      insert: [
        {
          section: {
            heading: "Tener que: have to",
            body: ["Tener que + a verb says what someone has to do. Only tener changes; the second verb stays whole: Tengo que estudiar. Tenemos que trabajar el sábado. Don't drop the que."],
            build: [
              { text: "Tengo", note: "tener, for yo" },
              { text: "Tengo que", note: "add que" },
              { text: "Tengo que estudiar.", note: "the verb stays whole: I have to study." },
            ],
            reteach: "Have to = tener que + a whole verb: Tengo que estudiar. Tener changes for the person; que and the verb don't change.",
          },
        },
      ],
    },
  },
  {
    slug: "es-ir-and-going-to",
    title: "Ir: Where You Go and What You're Going to Do",
    summary: "Say where you go with ir a, and talk about plans with ir a + verb.",
    concept: "ir-a",
    replaces: [],
    from: [
      { lesson: "tener-ir-hacer-hay-1", sections: [1], exercises: [1, 4, 8, 9, 11] },
      { lesson: "tener-ir-hacer-hay-drill-1", sections: [2], exercises: [2, 4, 6, 12] },
      { lesson: "tener-ir-hacer-hay-drill-2", sections: [0] },
      { lesson: "tener-ir-hacer-hay-1-part-2", exercises: [0, 3, 7, 10, 15] },
      { lesson: "tener-ir-hacer-hay-drill-1-part-2", exercises: [5, 10, 11, 12] },
      { lesson: "tener-ir-hacer-hay-2", exercises: [3, 17] },
    ],
    patch: {
      goal: "say where you're going, and what you're going to do later.",
      sections: {
        0: { addTables: [IR], reteach: "Ir: voy, vas, va, vamos, van. For a place, add a: Voy a la playa. With el, a + el becomes al: Voy al cine." },
        1: { watchOut: true, reteach: "A + el always joins into al: Voy al mercado, never Voy a el mercado. A + la doesn't change: Voy a la escuela." },
        2: { addTables: [IR_A], reteach: "A plan is ir + a + a whole verb: Voy a estudiar. Only ir changes. Keep the a, and never change the second verb: Vamos a viajar, not Vamos a viajamos." },
      },
      insert: [
        {
          section: {
            heading: "Asking where and what",
            body: ["To ask where someone is going, use ¿Adónde...?: ¿Adónde vas? Voy al banco. To ask about plans, use ¿Qué vas a hacer?: ¿Qué vas a hacer el sábado? Voy a descansar. The answer copies the question: ir for a place, ir a + verb for a plan."],
            examples: [
              { es: "¿Adónde van ustedes? Vamos a la playa.", en: "Where are you all going? We're going to the beach." },
              { es: "¿Qué vas a hacer mañana? Voy a trabajar.", en: "What are you going to do tomorrow? I'm going to work." },
            ],
            reteach: "¿Adónde vas? asks for a place: Voy al banco. ¿Qué vas a hacer? asks for a plan: Voy a estudiar.",
          },
        },
      ],
    },
  },
];
