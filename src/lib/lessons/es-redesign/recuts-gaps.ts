// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/recuts-gaps.ts by scripts/sync-content.mjs -- edit it there, not here.
// Recut lessons (see recut.ts) for concepts the old course practised but
// never gave a lesson of their own: ser, estar, saying no, e -> i verbs,
// inside changes in the past, and extra pronouns. Each is cut from the
// sections and questions of existing lessons. Only "Saying no" needed new
// teaching and questions, because the old course never taught it directly.
import type { Recut } from "./recut";

export const GAP_RECUTS: Recut[] = [
  {
    slug: "es-ser-who-you-are",
    title: "Ser: Who You Are and Where You're From",
    summary: "Say who someone is, what they do, where they're from and what they're like with ser.",
    concept: "ser",
    from: [
      { lesson: "greetings-pronouns-ser-1", sections: [1, 4] },
      { lesson: "a1r-spiral-articles-adjectives-ser", sections: [1], exercises: [0, 14, 15, 16, 18, 19, 20, 23, 24, 27] },
      { lesson: "review-pronouns-ser-gender-articles", exercises: [4, 12, 15, 16, 17, 18, 20, 21, 22, 25] },
    ],
    patch: {
      goal: "say who someone is, what they do, where they're from and what they're like.",
      sections: {
        0: { reteach: "Ser changes with the person: soy, eres, es, somos, son. The form already says who, so the pronoun is usually dropped: Soy de Chile." },
        1: { reteach: "Ser says what someone is: name, origin and job. Origin is ser + de: Soy de Perú. A plain job has no un or una: Soy estudiante." },
        2: { reteach: "To describe a person, use ser in the person's form, then adjectives that match the person: Ellas son altas y rubias." },
      },
    },
  },
  {
    slug: "es-estar-how-and-where",
    title: "Estar: How You Feel and Where Things Are",
    summary: "Say how someone feels right now and where a person or place is with estar.",
    concept: "estar",
    from: [
      { lesson: "ser-vs-estar-1", sections: [1] },
      { lesson: "a1r-word-web-feelings", sections: [0], exercises: [6, 7, 10, 11, 13, 14, 15, 20, 21, 22, 25] },
      { lesson: "a1r-mission-around-town", exercises: [8, 17, 21, 22] },
    ],
    patch: {
      goal: "say how you feel right now and where a person or place is.",
      sections: {
        0: { reteach: "Estar says how or where something is right now: feelings, conditions and location. Estoy, estás, está, estamos, están." },
        1: { reteach: "A feeling is how you are right now, not who you are, so it takes estar: Estoy cansado. Está contenta." },
      },
      insert: [
        {
          section: {
            heading: "Where it is: cerca de, lejos de",
            body: ["Where a person, a thing or a place is always takes estar: El banco está aquí. To say near or far, add cerca de or lejos de: La escuela está cerca de mi casa. To ask, use ¿Dónde está...?"],
            tables: [{ head: ["Spanish", "English"], rows: [["¿Dónde está el banco?", "Where is the bank?"], ["Está cerca de mi casa.", "It's near my house."], ["Está lejos del centro.", "It's far from downtown."]], note: "de + el = del: lejos del centro." }],
            reteach: "Location takes estar: ¿Dónde está el banco? Está cerca de mi casa. Está lejos del centro.",
          },
        },
      ],
    },
  },
  {
    slug: "es-saying-no",
    title: "Saying No: No + Verb",
    summary: "Say what you don't do and what isn't so by putting no before the verb, and answer a question with No, no...",
    concept: "negation",
    from: [{ lesson: "tener-ir-hacer-hay-2", exercises: [2, 13] }],
    add: [
      { type: "multiple-choice", question: "Which sentence says \"I don't work today\"?", options: ["No trabajo hoy.", "Trabajo no hoy.", "Yo trabajo no.", "No hoy trabajo."], correctIndex: 0, optionNotes: ["", "No goes before the verb, not after it.", "No goes before the verb, not at the end.", "Nothing goes between no and the verb."], explanation: "No goes right before the verb: No trabajo hoy." },
      { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Vivo en Madrid.", answer: "No vivo en Madrid.", altAnswers: ["Yo no vivo en Madrid."], explanation: "Put no before the verb: No vivo en Madrid." },
      { type: "translate", direction: "en-es", prompt: "Translate to Spanish.", source: "I'm not from here.", answer: "No soy de aquí.", altAnswers: ["Yo no soy de aquí."], explanation: "Spanish has no separate word for \"not\": no before soy does the job." },
      { type: "word-order", prompt: "Put the words in order.", words: ["Ana", "no", "come", "carne"], translation: "Ana doesn't eat meat.", explanation: "The person can come first, then no, then the verb: Ana no come carne." },
      { type: "translate", direction: "en-es", prompt: "Answer no, in a full sentence.", source: "¿Hablas francés?", answer: "No, no hablo francés.", altAnswers: ["No, yo no hablo francés."], explanation: "The first no answers the question; the second goes with the verb." },
      { type: "speak", prompt: "Say it in Spanish: \"I don't speak French\"", text: "No hablo francés.", altAnswers: ["Yo no hablo francés."], explanation: "No + verb: No hablo francés." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi hermano ___ estudia hoy.", answer: "no", en: "My brother [isn't] studying today.", explanation: "English needs \"isn't\" or \"doesn't\"; Spanish only needs no before the verb." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Me no llamo Luis.", answer: "No me llamo Luis.", explanation: "Me stays glued to the verb, so no goes before it: No me llamo Luis." },
      { type: "multi-select", question: "Which are correct?", options: ["No hablo inglés.", "Hablo no inglés.", "Ellos no viven aquí.", "No ellos viven aquí."], correctIndexes: [0, 2], explanation: "No goes right before the verb: No hablo inglés. Ellos no viven aquí." },
      { type: "translate", direction: "en-es", prompt: "Translate to Spanish.", source: "We don't live in Mexico.", answer: "No vivimos en México.", altAnswers: ["Nosotros no vivimos en México.", "Nosotras no vivimos en México."], explanation: "No + vivimos. There is no word for \"don't\"." },
      { type: "translate", direction: "es-en", prompt: "Translate to English.", source: "No, no soy profesor.", answer: "No, I'm not a teacher.", altAnswers: ["No, I am not a teacher."], explanation: "No, no...: \"No\" as the answer, then \"not\" with the verb." },
      { type: "speak", prompt: "Say it in Spanish: \"No, I'm not from Spain\"", text: "No, no soy de España.", altAnswers: ["No, yo no soy de España."], explanation: "Say no twice: once to answer, once with the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate to Spanish.", source: "She doesn't drink coffee.", answer: "No bebe café.", altAnswers: ["Ella no bebe café.", "No toma café.", "Ella no toma café."], explanation: "\"Doesn't\" is just no before the verb: No bebe café." },
      { type: "dictation", audio: "No como carne y no bebo leche.", explanation: "Each verb gets its own no: no como, no bebo." },
      { type: "translate", direction: "en-es", prompt: "Translate to Spanish.", source: "My parents don't work today.", answer: "Mis padres no trabajan hoy.", altAnswers: ["Mis papás no trabajan hoy."], explanation: "The people first, then no, then the verb: Mis padres no trabajan hoy." },
      { type: "speak", prompt: "Say it in Spanish: \"There's no milk at home\"", text: "No hay leche en casa.", explanation: "No goes before hay too: No hay leche." },
    ],
    patch: {
      goal: "say what you don't do and what isn't so, and answer a question with \"No, no...\".",
      insert: [
        {
          section: {
            heading: "The idea: put no before the verb",
            body: ["To say that something isn't so, put no right before the verb. That's all: Trabajo hoy becomes No trabajo hoy. Spanish has no word for \"don't\", \"doesn't\" or \"isn't\"; no does the whole job."],
            tables: [{ caption: "Saying no", head: ["Yes", "No"], rows: [["Trabajo hoy.", "*No trabajo hoy."], ["Soy de aquí.", "*No soy de aquí."], ["Vivimos en Lima.", "*No vivimos en Lima."]] }],
            examples: [
              { es: "No hablo francés.", en: "I don't speak French." },
              { es: "No es mi hermano.", en: "He isn't my brother." },
            ],
            reteach: "Put no right before the verb: No trabajo hoy. No soy de aquí. Spanish has no word for \"don't\" or \"isn't\".",
            checkpoint: [{ type: "multiple-choice", question: "How do you say \"I don't eat meat\"?", options: ["No como carne.", "Como no carne.", "Como carne no."], correctIndex: 0, explanation: "No goes right before the verb: No como carne." }],
          },
        },
        {
          section: {
            heading: "The person can come first",
            body: ["If you name the person, the person goes first, then no, then the verb: Ana no trabaja hoy. Yo no soy de aquí. Nothing else goes between no and the verb."],
            examples: [
              { es: "Mi madre no bebe café.", en: "My mother doesn't drink coffee." },
              { es: "Ellos no viven aquí.", en: "They don't live here." },
            ],
            reteach: "Person, then no, then the verb: Ana no trabaja hoy. Nothing goes between no and the verb.",
            checkpoint: [{ type: "word-order", prompt: "Put the words in order.", words: ["Luis", "no", "vive", "aquí"], translation: "Luis doesn't live here.", explanation: "Person, no, verb: Luis no vive aquí." }],
          },
        },
        {
          section: {
            heading: "No, no: answering a question",
            body: ["To answer no to a question, say no twice: once for \"no\" and once for \"not\". ¿Hablas inglés? No, no hablo inglés. The first no answers. The second goes with the verb."],
            tables: [{ head: ["Question", "Answer"], rows: [["¿Hablas inglés?", "No, *no hablo inglés."], ["¿Eres de México?", "No, *no soy de México."], ["¿Hay pan?", "No, *no hay pan."]] }],
            reteach: "To answer no, say it twice: ¿Hablas inglés? No, no hablo inglés. One no answers, the other goes with the verb.",
            checkpoint: [{ type: "translate", direction: "en-es", prompt: "Answer no, in a full sentence.", source: "¿Eres de Chile?", answer: "No, no soy de Chile.", altAnswers: ["No, yo no soy de Chile."], explanation: "No, no soy de Chile: one no answers, one goes with the verb." }],
          },
        },
        {
          section: {
            heading: "Watch out: no goes before me, te and se",
            watchOut: true,
            body: ["Small words like me, te and se stay glued to the verb, so no goes before them: No me llamo Ana. Never Me no llamo Ana."],
            tables: [{ head: ["Say", "Not"], rows: [["No me llamo Ana.", "Me no llamo Ana."], ["No se llama Luis.", "Se no llama Luis."]] }],
            reteach: "No goes before me, te and se: No me llamo Ana. Never Me no llamo.",
            checkpoint: [{ type: "multiple-choice", question: "Which is correct?", options: ["Me no llamo Pedro.", "No me llamo Pedro.", "Me llamo no Pedro."], correctIndex: 1, explanation: "No goes before me: No me llamo Pedro." }],
          },
        },
      ],
    },
  },
  {
    slug: "es-pedir-servir-e-to-i",
    title: "Pedir, Servir, Repetir: E Becomes I",
    summary: "Use verbs like pedir, servir and repetir, whose e becomes i in every form but nosotros.",
    concept: "stem-e-i",
    from: [
      { lesson: "stem-changing-verbs-o-ue-e-i", sections: [2], exercises: [3, 12, 16] },
      { lesson: "a1r-contrast-stem-changers", sections: [1], exercises: [2, 10, 15, 20, 24] },
    ],
    patch: {
      goal: "use pedir, servir and repetir: pido, sirves, repite, but pedimos.",
      insert: [
        {
          section: {
            heading: "Three verbs, one change",
            body: ["Pedir (to ask for, to order), servir (to serve) and repetir (to repeat) all work the same way. Learn one and you know all three: pido, sirvo, repito. Seguir (to follow, to keep going) joins them: sigo, sigues, sigue."],
            tables: [{ head: ["", "pedir", "servir", "repetir"], rows: [["yo", "*pido", "*sirvo", "*repito"], ["tú", "*pides", "*sirves", "*repites"], ["él, ella", "*pide", "*sirve", "*repite"], ["nosotros", "pedimos", "servimos", "repetimos"], ["ellos", "*piden", "*sirven", "*repiten"]], note: "Nosotros keeps the e: pedimos, servimos, repetimos." }],
            reteach: "Pedir, servir and repetir change e to i in every form but nosotros: pido, sirves, repite, piden. Nosotros keeps the e: pedimos.",
          },
        },
      ],
    },
  },
  {
    slug: "es-preterite-pidio-durmieron",
    title: "The Finished Past: Pidió, Durmieron",
    summary: "Use the past of pedir, servir, repetir and dormir, which change only for he, she and they.",
    concept: "preterite-stem",
    from: [
      { lesson: "preterite-drill-3", sections: [1], exercises: [4, 5, 8, 9, 10, 12] },
      { lesson: "preterite-drill-3-part-2", exercises: [1, 5, 6, 8, 11, 14] },
    ],
    patch: {
      goal: "say what he, she or they ordered, served, repeated or slept: pidió, sirvieron, durmió.",
      sections: {
        0: { reteach: "Pedir and dormir change only for he, she and they: pidió, pidieron, durmió, durmieron. Yo, tú and nosotros stay regular: pedí, dormimos." },
      },
      insert: [
        {
          section: {
            heading: "Only two forms change",
            body: ["Look at who changes: only él, ella, usted (pidió) and ellos, ellas, ustedes (pidieron). The other forms are regular -ir past forms: pedí, pediste, pedimos."],
            tables: [{ head: ["", "pedir", "dormir"], rows: [["yo", "pedí", "dormí"], ["tú", "pediste", "dormiste"], ["él, ella", "*pidió", "*durmió"], ["nosotros", "pedimos", "dormimos"], ["ellos", "*pidieron", "*durmieron"]] }],
            reteach: "Only two forms change: pidió and pidieron, durmió and durmieron. Pedí, pediste and pedimos are regular.",
          },
        },
        {
          section: {
            heading: "Watch out: yo doesn't change",
            watchOut: true,
            body: ["In the present, yo changes: pido, duermo. In the finished past it doesn't: pedí, dormí. So say Ayer pedí una pizza, never Ayer pidí una pizza."],
            tables: [{ head: ["Say", "Not"], rows: [["Ayer pedí una pizza.", "Ayer pidí una pizza."], ["Anoche dormí bien.", "Anoche durmí bien."]] }],
            reteach: "Yo doesn't change in the finished past: pedí, dormí. Never pidí or durmí.",
          },
        },
        {
          section: {
            heading: "More verbs like these",
            body: ["Verbs like pedir: servir (sirvió, sirvieron), repetir (repitió, repitieron). Morir works like dormir: murió, murieron."],
            examples: [
              { es: "El camarero sirvió los platos.", en: "The waiter served the dishes." },
              { es: "Mis abuelos durmieron la siesta.", en: "My grandparents took a nap." },
            ],
            reteach: "Servir and repetir work like pedir: sirvió, repitieron. Morir works like dormir: murió, murieron.",
          },
        },
      ],
    },
  },
  {
    slug: "es-a-mi-me-se-lo-a-juan",
    title: "Pronombres de refuerzo: se lo di a Juan",
    summary: "Add a + person to make clear or stress who you mean: Se lo di a ella, no a él.",
    concept: "redundant-pronouns",
    from: [
      { lesson: "b1d-elige-explica-quien-recibe", sections: [0, 1, 2], exercises: [0, 1, 4, 6, 8, 10, 12, 17, 20, 24, 25] },
      { lesson: "b1d-circuito-se-lo", exercises: [8, 10, 11, 15, 19] },
    ],
  },
];
