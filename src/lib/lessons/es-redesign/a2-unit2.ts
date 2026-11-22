// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a2-unit2.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A2 Unit 2 (saber and conocer · can, want, need + verb · gustar,
// encantar, doler): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/A2 Elementary/Unit 02). Section and
// question numbers are the lessons' own as they are now. Only content
// changes here: what is taught, asked and accepted. The answer checker and
// the rubric are untouched.
//
// Four lessons built on later grammar moved (es-redesign-units.json):
// algún / ningún to B1 Unit 4, the le / les drill with past verbs to B1
// Unit 1, and the two past-tense timelines to B1 Unit 2. Acabar de (B1
// Unit 6) and the past tenses left the lessons that stay here.
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
const BOLD = "How do you say the bold words in Spanish?";

const tables = {
  darVerSaber: {
    caption: "Dar, ver, saber: only yo is odd",
    head: ["Who", "Dar", "Ver", "Saber"],
    rows: [["yo", "*doy", "*veo", "*sé"], ["tú", "das", "ves", "sabes"], ["usted / él / ella", "da", "ve", "sabe"], ["nosotros / nosotras", "damos", "vemos", "sabemos"], ["ustedes / ellos / ellas", "dan", "ven", "saben"]],
    note: "Sé has an accent; se without it is a different word.",
  } as LessonTable,
};

export const A2_UNIT2_PATCHES: Record<string, LessonPatch> = {
  "a1-irregulars-dar-ver-saber": {
    reword: [[" (Lesson: tengo, vengo, digo, oigo.)", ""]],
    sections: { 1: { tables: [tables.darVerSaber] } },
    exercises: {
      replace: {
        22: speak(`${SAY} "I don't know how to cook, but I see my mother on Sundays and we cook together"`, "No sé cocinar, pero los domingos veo a mi madre y cocinamos juntos.", ["No sé cocinar, pero veo a mi madre los domingos y cocinamos juntos.", "No sé cocinar, pero los domingos veo a mi mamá y cocinamos juntos.", "No sé cocinar, pero veo a mi mamá los domingos y cocinamos juntos."], "Sé + infinitive is knowing how (sé cocinar), and veo is the yo form of ver with its extra e."),
        23: speak(`${SAY} "I don't see well without glasses"`, "No veo bien sin lentes.", ["No veo bien sin gafas.", "No veo bien sin anteojos.", "Yo no veo bien sin lentes."], "Ver keeps its e in yo: veo, not vo."),
      },
    },
  },
  "a1-irregulars-conocer": {
    reword: [[" (Lesson: dar, ver, saber.)", ""]],
    exercises: {
      replace: {
        5: tr("Translate to Spanish.", "Do you (informal) know Pedro?", "¿Conoces a Pedro?", ["¿Tú conoces a Pedro?"], "A person takes conocer, with a in front: conoces a Pedro."),
        15: tr("Translate to Spanish.", "We know the neighbors.", "Conocemos a los vecinos.", ["Nosotros conocemos a los vecinos.", "Nosotras conocemos a los vecinos."], "Conocer + a before people; nosotros is regular: conocemos."),
      },
    },
  },
  "saber-vs-conocer": {
    reword: [[" (Lesson: conocer.)", ""], [" (Lesson: dar, ver, saber.)", ""]],
  },
  "saber-vs-conocer-mastery-check": {
    reword: [["billete", "boleto"]],
    exercises: {
      replace: {
        4: speak(`${SAY} "Do you know if there's a pharmacy nearby?" (to a stranger: usted)`, "¿Usted sabe si hay una farmacia cerca?", ["¿Sabe si hay una farmacia cerca?", "¿Sabe usted si hay una farmacia cerca?"], "Si + a fact takes saber, and usted takes the él / ella form: sabe."),
      },
    },
  },
  "a1-modal-verbs-infinitive": {
    summary: "Poder, querer, necesitar, tener que and deber, plus intentar and dejar de: conjugate the first verb and leave the second as it is.",
    reword: [[" (Lesson: saber vs. conocer.)", ""]],
    sections: {
      1: {
        body: [
          "When two verbs go together, only the first one shows who is acting, so only the first one is conjugated. The second stays in the infinitive (the -ar, -er, -ir form), just as English says \"she can swim\", not \"she can swims\". That's how Spanish says can, want to, need to, have to or should.",
          "Nothing goes between the two verbs except a linking word in a few fixed verbs: que in tener que, de in dejar de. Poder (o → ue) and querer (e → ie) are stem-changers; necesitar and deber are regular.",
        ],
      },
      3: {
        body: ["A few more everyday verbs take an infinitive: intentar (to try), esperar (to hope), pensar (to plan, to intend), preferir (to prefer). Dejar de + infinitive means to stop doing something."],
        examples: [
          { es: "Intento hablar solo en español.", en: "I try to speak only in Spanish." },
          { es: "Espero llegar a tiempo.", en: "I hope to arrive on time." },
          { es: "Prefiero caminar.", en: "I prefer to walk. (preferir: e → ie)" },
          { es: "Quiero dejar de fumar.", en: "I want to stop smoking." },
        ],
        check: [
          mc("\"We try to speak Spanish at home.\"", ["Intentamos hablar español en casa.", "Intentamos de hablar español en casa.", "Intentamos hablamos español en casa.", "Intentar hablamos español en casa."], 0, "Intentar is conjugated for nosotros (intentamos), and hablar follows it straight away, in the infinitive.", ["", "Intentar takes the infinitive directly, with no de.", "Only the first verb is conjugated: hablar stays whole.", "The first verb shows who acts: intentamos, then hablar."]),
        ],
      },
    },
    exercises: {
      replace: {
        1: fill(BOLD, "Siempre ___ llegar temprano.", "intento", "I always [try] to arrive early.", "Intentar + infinitive = to try to do something. Only intentar is conjugated: intento."),
        15: tr("Translate to Spanish.", "She wants to stop working on Saturdays.", "Quiere dejar de trabajar los sábados.", ["Ella quiere dejar de trabajar los sábados."], "Two linked verbs: quiere (conjugated), then dejar de + trabajar, both whole."),
      },
    },
  },
  "a1-core-words-time-linking": {
    reword: [[" (Lesson 8.)", ""], [" (Lesson 3.)", ""], ["\"Although it's late, I keep working.\"", "\"Although it's late, I want to go out.\""], [", sigo trabajando.", ", quiero salir."]],
    sections: { 0: { body: ["A quick look back at time words and questions. Today's small words join them into longer sentences."] } },
  },
  "gustar-1": {
    reword: [[" (Unit 7.)", ""]],
    sections: { 0: { heading: "Warm-up: family and questions", body: ["A quick look back at earlier lessons. Today you'll say what these people like."] } },
  },
  "gustar-drill-1": {
    reword: [["Same six pronouns you already know from indirect objects — gustar just always needs one.", "One small pronoun for each person, and gustar always needs one."]],
  },
  "a1r-transform-gustar-persons": {
    goal: "change who likes something by swapping only the pronoun (me, te, le, nos, les), while gusta or gustan stays.",
  },
  "a2d-gustar-family-drill": {
    goal: "say what you and others like, love, mind and feel, with the pronoun for the person and the verb agreeing with the thing.",
    sections: {
      0: {
        examples: [
          { es: "A mi hermano le molestan los ruidos.", en: "Noises bother my brother." },
          { es: "Nos encanta esta película.", en: "We love this movie. (encanta agrees with la película, not with us)" },
          { es: "¿Te duele la cabeza?", en: "Does your head hurt? (la, not tu, with body parts)" },
        ],
      },
    },
    exercises: {
      replace: {
        4: fill(BOLD, "A mis padres les ___ mucho viajar.", "encanta", "My parents really [love] traveling.", "Encantar works like gustar, and an infinitive counts as one thing: encanta, even for several people."),
        7: mc("«A mi madre no le gustan nada los gatos.» What does it mean?", ["My mother doesn't like cats at all.", "Cats don't like my mother at all.", "My mother didn't like cats before.", "My mother likes nothing but cats."], 0, "Le = my mother (the person pleased or not), and gustan agrees with los gatos. No... nada means not at all.", ["", "Los gatos is what is (not) liked; le is the person who doesn't like them.", "Gustan is present: she doesn't like them now.", "No... nada means not at all, not nothing but."]),
        15: tr("Correct the sentence.", "No les gustan el hotel.", "No les gusta el hotel.", ["A ellos no les gusta el hotel.", "A ellas no les gusta el hotel."], "The verb agrees with what is liked: el hotel is singular, so gusta, even though les is plural."),
        18: mc("\"My eyes hurt a lot today.\"", ["Hoy me duelen mucho los ojos.", "Hoy me duele mucho los ojos.", "Hoy me dolen mucho los ojos.", "Hoy mis ojos duelo mucho."], 0, "Doler agrees with los ojos (plural) and changes o to ue: duelen.", ["", "Los ojos is plural: duelen.", "Doler changes o to ue: duelen.", "The eyes are the subject and the person is me: me duelen los ojos."]),
        21: order("No nos gusta nada la comida", "We don't like the food at all", "No goes before the pronoun; nada after the verb means 'at all'."),
        24: {
          type: "write",
          prompt: "Write a short post for a travel forum about choosing holidays in your family: who likes what, what bothers whom, and what you all like.",
          minWords: 25,
          maxWords: 60,
          rubric: ["Gustar-type verbs (gustar, encantar, molestar, interesar)", "Le / les with a + person to make it clear (a mi padre le…)", "The verb agreeing with what is liked (le gusta el mar, les gustan las playas)", "A question to the readers"],
          modelAnswer: "En mi familia elegir las vacaciones es difícil. A mi padre le encanta la montaña, pero a mi madre le molesta el frío. A mis hermanos les gustan las playas con mucha gente, pero a mí no me gustan. A todos nos interesa la comida, así que siempre buscamos un lugar con buenos restaurantes. ¿A ustedes les pasa lo mismo?",
          explanation: "With gustar-type verbs the person goes in the pronoun (me, le, nos, les) and the verb agrees with the thing: le encanta la montaña, les gustan las playas.",
        },
        26: speak(`${SAY} "We love this movie"`, "Nos encanta esta película.", ["A nosotros nos encanta esta película.", "A nosotras nos encanta esta película."], "Encantar agrees with la película (one thing): encanta. Nos says who loves it."),
      },
    },
  },
  "a1r-challenge-mixed-error-hunt": {
    summary: "One mistake per sentence, drawn from every Beginner topic. Can you catch them all?",
  },
  "a1-final-review-3": {
    exercises: {
      replace: {
        22: tr("Change it to a plan with ir a.", "Hacemos la tarea.", "Vamos a hacer la tarea.", ["Nosotros vamos a hacer la tarea."], "Ir takes the person (vamos), then a, then hacer in the infinitive."),
      },
    },
  },
  "a1-word-web-body": {
    reword: [[" (Lessons 1-3.)", ""], [" (Lesson 2.)", ""], [" (Lesson 1.)", ""]],
  },
  "a1-word-web-weather": {
    reword: [[" (Lesson 14.)", ""], [" (Lesson 13.)", ""], [" (Lesson 11.)", ""], [" (or está lloviendo)", ""]],
    sections: { 0: { body: ["A quick look back at hay, ir a and tener. The weather uses all of them."] } },
  },
  "a1-irregulars-mission-first-day": {
    reword: [["el móvil", "el celular"]],
    exercises: {
      replace: {
        4: speak(`${SAY} "I bring coffee for the whole team"`, "Traigo café para todo el equipo.", ["Yo traigo café para todo el equipo."], "Traer adds -ig- in yo: traigo, not traego or trao."),
      },
    },
    sections: {
      1: {
        examples: [
          { es: "A las dos tenemos una reunión con todo el equipo.", en: "At two we have a meeting with the whole team." },
          { es: "Pongo el teléfono en silencio, pero no oigo bien: hay mucho ruido.", en: "I put my phone on silent, but I can't hear well: there's a lot of noise." },
          { es: "Mi jefa dice que la computadora nueva no funciona.", en: "My boss says that the new computer doesn't work." },
          { es: "\"No pasa nada\", digo. \"Puedo usar otra.\"", en: "\"No problem,\" I say. \"I can use another one.\"" },
          { es: "Al final del día, doy las gracias a todos y salgo contenta.", en: "At the end of the day, I thank everyone and leave happy." },
        ],
      },
    },
  },
  "a1-irregulars-yo-go-unit-review": {
    goal: "listen to, say and choose the right form of the unit's irregular verbs, getting at least 6 of 8 quiz questions right.",
    sections: {
      1: {
        check: [
          speak(`${SAY} "I do my homework and then I go out."`, "Hago la tarea y después salgo.", ["Hago la tarea y luego salgo.", "Yo hago la tarea y después salgo.", "Hago mi tarea y después salgo."], "Hago and salgo: two -go yo forms."),
          speak(`${SAY} "I know Lima, but I don't know where the hotel is."`, "Conozco Lima, pero no sé dónde está el hotel.", ["Yo conozco Lima, pero no sé dónde está el hotel."], "A place you've been: conocer. Where something is: saber."),
          speak(`${SAY} "My friends are coming at nine and they say it's a party."`, "Mis amigos vienen a las nueve y dicen que es una fiesta.", [], "Vienen and dicen: the boot forms of venir and decir."),
          speak(`${SAY} "I can't hear well, I have to go out."`, "No oigo bien, tengo que salir.", ["No oigo bien. Tengo que salir.", "Yo no oigo bien, tengo que salir."], "Oigo and tengo in yo; salir stays in the infinitive after tengo que."),
        ],
      },
    },
  },
};
