// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a2-unit1.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A2 Unit 1 (o → ue · e → i · odd "I" forms): content fixes from
// Claude's audit in Ricardo's format (Claude Feedback/Spanish (new
// course)/A2 Elementary/Unit 01). Section and question numbers are the
// lessons' own as they are now. Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
//
// The lessons built on the past tenses, the future, comparisons, object
// pronouns and commands moved to B1 Units 4 and 5 (es-redesign-units.json).
// Typed answers forgive one wrong letter, so a stem change (pide, not pede)
// is checked by choice or by speaking, never by typing.
import type { Exercise, LessonTable } from "../types";
import type { LessonPatch } from "./patch";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "translate",
  prompt,
  direction: "en-es",
  source,
  answer,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const fill = (prompt: string, sentence: string, answer: string, en: string | undefined, explanation: string, altAnswers: string[] = []): Exercise => ({
  type: "fill-blank",
  prompt,
  sentence,
  answer,
  ...(en ? { en } : {}),
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const mc = (question: string, options: string[], correctIndex: number, explanation: string, optionNotes: string[]): Exercise => ({
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
  optionNotes,
});
const order = (sentence: string, translation: string, explanation: string): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  explanation,
});
const SAY = "Say it in Spanish:";
const FIX = "Correct the sentence.";
const BOLD = "How do you say the bold words in Spanish?";
// " — " inside feedback reads as a pause: a colon says it plainly.
const DASHES: [string, string][] = [[" — ", ": "]];

const tables = {
  tenerVenir: {
    caption: "Tener and venir: -go in yo, ie in the boot",
    head: ["Who", "Tener", "Venir"],
    rows: [["yo", "*tengo", "*vengo"], ["tú", "*tienes", "*vienes"], ["usted / él / ella", "*tiene", "*viene"], ["nosotros / nosotras", "tenemos", "venimos"], ["ustedes / ellos / ellas", "*tienen", "*vienen"]],
    note: "Nosotros keeps the e: tenemos, venimos. Yo has the g instead of ie.",
  } as LessonTable,
  irregularYo: {
    caption: "The yo forms learners regularise",
    head: ["Verb", "Yo", "Not"],
    rows: [["ser", "*soy", "so"], ["estar", "*estoy", "esto"], ["ir", "*voy", "vo"], ["tener", "*tengo", "teno"], ["hacer", "*hago", "haco, hace"]],
    note: "Every other person follows the subject: ella tiene, nosotros hacemos.",
  } as LessonTable,
  bootNotes: {
    caption: "What (ie), (ue) and (i) after a verb mean",
    head: ["Note", "Verb", "In the boot", "Nosotros"],
    rows: [["(ie)", "perder", "*pierdo, pierde", "perdemos"], ["(ue)", "recordar", "*recuerdo, recuerda", "recordamos"], ["(i)", "seguir", "*sigo, sigue", "seguimos"], ["none", "ganar", "gano, gana", "ganamos"]],
    note: "No note means a regular verb: the stem never changes.",
  } as LessonTable,
};

// Fixes to A1 Unit 7 that its audit missed: hace + time + que is B1 Unit 5,
// and visitar a + person (the personal a) is A2 Unit 3.
const A1_UNIT7_FOLLOW_UP: Record<string, LessonPatch> = {
  "tener-ir-hacer-hay-drill-2": {
    summary: "Drill ir a + infinitive and hacer, including hace for the weather.",
    sections: {
      2: {
        heading: "Hace for the weather",
        body: ["Weather uses hace + a noun, as if the day \"makes\" heat or wind: hace calor, hace frío, hace sol, hace viento. Because calor and frío are nouns, \"very\" is mucho: hace mucho calor."],
        examples: [{ es: "Hace mucho calor hoy.", en: "It's very hot today. (calor is a noun: mucho)" }, { es: "En invierno hace frío.", en: "In winter it's cold." }],
        check: [
          { type: "matching", instructions: "Match each weather expression to its meaning.", pairs: [{ left: "Hace sol.", right: "It's sunny." }, { left: "Hace frío.", right: "It's cold." }, { left: "Hace viento.", right: "It's windy." }], explanation: "Weather takes hace + a noun: sol, frío, viento." },
          fill(BOLD, "Hoy ___ mucho calor.", "hace", "Today [it's] very hot.", "Weather takes hace, and calor is a noun, so mucho: hace mucho calor."),
        ],
      },
    },
    exercises: {
      replace: {
        5: { type: "translate", prompt: "Translate to English.", direction: "es-en", source: "Hoy hace sol, pero hace frío.", answer: "Today it's sunny, but it's cold.", altAnswers: ["It's sunny today, but it's cold.", "Today it is sunny, but it is cold.", "It is sunny today, but it is cold.", "Today it's sunny but cold.", "It's sunny but cold today."], explanation: "Hace sol = it's sunny, hace frío = it's cold: weather takes hace." },
        15: tr(FIX, "Vamos a visitamos el museo.", "Vamos a visitar el museo.", [], "After ir a, the second verb stays in the infinitive: vamos a visitar."),
        18: fill(BOLD, "En invierno ___ mucho frío.", "hace", "In winter [it's] very cold.", "Weather takes hace, and frío is a noun, so mucho: hace mucho frío."),
      },
    },
  },
};

export const A2_UNIT1_PATCHES: Record<string, LessonPatch> = {
  ...A1_UNIT7_FOLLOW_UP,
  "stem-changing-verbs-o-ue-e-i": {
    reword: [[" (Lesson: e → ie.)", ""]],
    exercises: {
      replace: {
        2: speak(`${SAY} "I can't go today"`, "Yo no puedo ir hoy.", ["No puedo ir hoy."], "Yo is inside the boot, so poder changes o to ue: puedo. Ir stays in the infinitive after it."),
        19: mc("A new e → i verb: medir (to measure). How do you say \"we measure the table\"?", ["Medimos la mesa.", "Midimos la mesa.", "Miden la mesa.", "Medemos la mesa."], 0, "Nosotros is outside the boot, so the e stays: medimos. \"Midimos\" puts the change in nosotros, \"miden\" is they, and \"medemos\" uses the -er ending on an -ir verb.", ["", "The change never goes into nosotros.", "Miden is they.", "Medir is an -ir verb: -imos."]),
      },
    },
  },
  "a1-irregulars-yo-go": {
    reword: [["A quick look back at Unit 3.", "A quick look back at the boot verbs."], [" (Unit 3: e → ie.)", ""]],
    exercises: {
      replace: {
        10: order("Salgo de casa y pongo música en el carro.", "I leave home and put music on in the car.", "Salgo and pongo are both yo forms with -go."),
      },
    },
  },
  "a1-irregulars-tengo-vengo-digo-oigo": {
    reword: [[" (Lesson: yo-go verbs.)", ""]],
    sections: { 1: { tables: [tables.tenerVenir] } },
    exercises: {
      replace: {
        1: speak(`${SAY} "I have two kids and a dog"`, "Tengo dos hijos y un perro.", ["Yo tengo dos hijos y un perro."], "Tener has -go in yo: tengo. The ie forms (tienes, tiene) are for the other people in the boot."),
        2: speak(`${SAY} "What time are you (tú) coming home?"`, "¿A qué hora vienes a casa?", ["¿A qué hora vienes tú a casa?", "¿Tú a qué hora vienes a casa?"], "Tú is inside the boot, so venir changes e to ie: vienes."),
        15: speak(`${SAY} "Do you (tú) have a car?"`, "¿Tienes carro?", ["¿Tienes un carro?", "¿Tienes coche?", "¿Tienes auto?", "¿Tú tienes carro?"], "Tú is inside the boot, so tener changes e to ie: tienes."),
      },
    },
  },
  "a1r-error-hunt-present-traps": {
    goal: "fix the present-tense slips: the odd yo forms (soy, estoy, voy, tengo, hago) and endings that don't match the person.",
    summary: "Unconjugated verbs, mixed-up persons and odd yo forms: the most common present-tense slips, caught in the act.",
    sections: { 0: { tables: [tables.irregularYo] } },
    exercises: {
      replace: {
        12: mc("Fix the verb. \"Ella tener un perro.\"", ["Ella tiene un perro.", "Ella tene un perro.", "Ella tienes un perro.", "Ella tengo un perro."], 0, "Conjugate the verb for ella: tener → tiene, with ie inside the boot.", ["", "Ella is inside the boot: ie, tiene.", "Tienes is tú.", "Tengo is yo."]),
        20: mc("Correct the sentence. \"Nosotros vamos a la playa y tienen hambre.\"", ["Nosotros vamos a la playa y tenemos hambre.", "Nosotros vamos a la playa y tienemos hambre.", "Nosotros vamos a la playa y tengo hambre.", "Nosotros vamos a la playa y tiene hambre."], 0, "Keep the same person all the way through: nosotros → tenemos, and nosotros is outside the boot, so no ie.", ["", "Nosotros keeps the e: tenemos.", "Tengo is yo, not nosotros.", "Tiene is él / ella."]),
      },
    },
  },
  "a1-core-verbs-everyday-actions": {
    reword: [[" (Lesson: verb + infinitive.)", ""]],
    sections: {
      0: {
        body: ["A quick look back. Many of today's verbs come after puedo, quiero or tengo que."],
        check: [
          mc("\"I can't come today.\"", ["No puedo venir hoy.", "No puedo vengo hoy.", "No podo venir hoy.", "No puedo a venir hoy."], 0, "Only the first verb is conjugated: puedo venir.", ["", "Only puedo changes; venir stays whole.", "Poder changes o to ue in yo: puedo.", "Poder takes the infinitive directly, with no a."]),
          mc("\"We have to pay now.\"", ["Tenemos que pagar ahora.", "Tenemos pagar ahora.", "Tienemos que pagar ahora.", "Tenemos que pagamos ahora."], 0, "Tener que + infinitive; nosotros keeps the e: tenemos.", ["", "Tener needs que before the verb.", "Nosotros keeps the e: tenemos.", "The second verb stays in the infinitive."]),
          mc("\"I want to sleep.\"", ["Quiero dormir.", "Quiero duermo.", "Quero dormir.", "Quiero a dormir."], 0, "Quiero is inside the boot (ie), and dormir stays in the infinitive after it.", ["", "Only quiero is conjugated; dormir stays whole.", "Yo is inside the boot: quiero.", "Querer takes the infinitive directly, with no a."]),
        ],
      },
      1: { tables: [tables.bootNotes] },
    },
    exercises: {
      replace: {
        21: speak(`${SAY} "I always lose my keys"`, "Siempre pierdo las llaves.", ["Siempre pierdo mis llaves.", "Yo siempre pierdo las llaves."], "Perder is an e → ie verb, and yo is inside the boot: pierdo."),
      },
    },
  },
  "a1r-dialogue-a-day-in-the-life": {
    goal: "follow a formal interview: usted questions take the él / ella ending, and you answer with yo.",
    reword: DASHES,
    exercises: {
      replace: {
        17: tr("Translate to Spanish.", "Do you (informal) work with your mother?", "¿Trabajas con tu madre?", ["¿Tú trabajas con tu madre?", "¿Trabajas con tu mamá?"], "Tú form: trabajas. Con tu madre = with your mother."),
        19: tr("Translate to Spanish.", "We open the bakery at five and sell bread until two.", "Abrimos la panadería a las cinco y vendemos pan hasta las dos.", ["Nosotros abrimos la panadería a las cinco y vendemos pan hasta las dos."], "Nosotros: abrimos (-ir) and vendemos (-er). Hasta = until."),
      },
    },
  },
  "a1r-spiral-lessons-1-10": {
    summary: "A mixed workout on the first things you learned: greetings, ser, articles, agreement and the three verb families.",
    reword: DASHES,
  },
  "present-tense-ar-verbs-unit-review": {
    goal: "show you can hear, say and choose present-tense forms, regular and stem-changing, getting at least 6 of 8 quiz questions right.",
    exercises: {
      replace: {
        0: mc("\"Yo ___ de casa a las ocho.\" (salir)", ["salgo", "salo", "sale", "salimos"], 0, "Salir is odd only in yo: salgo. Every other form is regular.", ["", "Salir adds a g in yo: salgo.", "Sale is él / ella.", "Salimos is nosotros."]),
      },
    },
  },
};
