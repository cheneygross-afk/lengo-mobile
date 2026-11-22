// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a2-unit5.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A2 Unit 5 (the finished past, irregular verbs · inside changes
// in the finished past · the background past): content fixes from Claude's
// audit in Ricardo's format (Claude Feedback/Spanish (new course)/A2
// Elementary/Unit 05). Section and question numbers are the lessons' own as
// they are now. Only content changes here: what is taught, asked and
// accepted. The answer checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the
// reflexive routine in the past to B1 Unit 2 (reflexives), the preterite vs.
// imperfect spiral review to A2 Unit 6 (where that choice is taught) and the
// lost-phone story, built on lo, le and se lo, to B1 Unit 1 (object pronouns).
// Elsewhere object pronouns (lo hice, le dije, nos contaba), reflexives
// (aburrirse, quedarse) and the imperfect before it is taught leave the
// questions; coche becomes carro.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string, direction: "en-es" | "es-en" = "en-es"): Exercise => ({
  type: "translate",
  prompt,
  direction,
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
const mc = (question: string, options: string[], correctIndex: number, explanation: string): Exercise => ({
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
});
export const order = (words: string[], translation: string, explanation: string): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words,
  translation,
  explanation,
});
const SAY = "Say it in Spanish:";
const BOLD = "How do you say the bold words in Spanish?";
const CORRECT = "Correct the sentence.";
const TR = "Translate to Spanish.";

export const CAR_SLEPT = tr(TR, "I looked for a hotel, but my friends slept in the car.", "Busqué un hotel, pero mis amigos durmieron en el carro.", ["Busqué un hotel, pero mis amigos durmieron en el auto.", "Yo busqué un hotel, pero mis amigos durmieron en el carro.", "Busqué un hotel pero mis amigos durmieron en el carro.", "Busqué un hotel, pero mis amigos durmieron en el coche."], "Buscar, yo: busqué (c → qu before -é); dormir, ellos: durmieron (o → u). In Latin America a car is el carro or el auto.");

export const A2_UNIT5_PATCHES: Record<string, LessonPatch> = {
  "preterite-irregular-verbs-1": {
    reword: [[" (Unit 1.)", " (Unit 4.)"]],
    sections: {
      0: { body: ["A quick look back at Unit 4. Regular verbs put the accent on yo and él. Today's verbs don't."] },
    },
    exercises: {
      replace: {
        14: tr(TR, "You (tú) told the truth and I said nothing.", "Tú dijiste la verdad y yo no dije nada.", ["Dijiste la verdad y yo no dije nada.", "Tú dijiste la verdad, y yo no dije nada.", "Dijiste la verdad, y yo no dije nada."], "Decir → dij- in every person: dijiste (tú), dije (yo), with no accents. No... nada: \"nothing\"."),
      },
    },
  },
  "a2d-stem-groups-sort": {
    goal: "put the irregular verbs into the u, i and j groups and use each one in every person, with -eron after j.",
    summary: "Tuv-, estuv-, pud-, pus- / hic-, quis-, vin- / dij-, traj-: group, conjugate and use them.",
    exercises: {
      replace: {
        7: mc("Which word fills the blank?\n\"Mis padres ___ la verdad.\" (My parents told the truth.)", ["dijeron", "dijieron", "decieron", "dijimos"], 0, "Decir is a j-stem: dij-. After j the ellos ending is -eron, not -ieron: dijeron. Dijimos is nosotros."),
      },
    },
  },
  "preterite-irregular-verbs-2": {
    sections: {
      0: {
        examples: [
          { es: "¿Qué pasó en la reunión?", en: "What happened at the meeting?" },
          { es: "El jefe vino tarde y no pudo empezar a tiempo.", en: "The boss came late and couldn't start on time. (vin- + -o, pud- + -o)" },
          { es: "¿Y qué dijo sobre el proyecto?", en: "And what did he say about the project? (dij- + -o)" },
          { es: "Dijo que tenemos que terminar todo antes del viernes.", en: "He said we have to finish everything before Friday." },
          { es: "¡Qué estrés! ¿Hiciste el reporte ya?", en: "How stressful! Did you do the report yet? (hic- + -iste)" },
          { es: "Sí, hice el reporte anoche. Estuve en la oficina hasta las once.", en: "Yes, I did the report last night. I was at the office until eleven. (hiciste → hice)" },
        ],
        check: [
          mc("Why couldn't the boss start on time?", ["Porque llegó tarde", "Porque no trajo la computadora", "Porque estuvo enfermo", "Porque olvidó la reunión"], 0, "The dialogue says \"El jefe vino tarde y no pudo empezar a tiempo\": he couldn't start because he arrived late. It doesn't mention a computer, illness or forgetting the meeting."),
          tr("Answer yes: you did it last night.", "¿Hiciste el reporte?", "Sí, hice el reporte anoche.", ["Sí, anoche hice el reporte.", "Sí, yo hice el reporte anoche.", "Sí, lo hice anoche.", "Sí, anoche lo hice."], "A tú question (hiciste) gets a yo answer: hice, hic- + -e, with no accent."),
        ],
      },
      1: {
        heading: "Vocabulary: time expressions",
        body: [
          "Thirty words that say when, in what order and how often. A few end in -mente, like English -ly: finalmente (finally), recientemente (recently), últimamente (lately). Learn them as words for now.",
          "One trap: actualmente means \"currently\", not \"actually\" (that's en realidad). Sequence words (primero, luego, después, entonces, finalmente) and finished-time words (anoche, el año pasado, de repente) usually come with the preterite.",
        ],
        check: [
          { type: "matching", instructions: "Match each time expression to its meaning.", pairs: [{ left: "de repente", right: "suddenly" }, { left: "mientras tanto", right: "meanwhile" }, { left: "la próxima vez", right: "next time" }, { left: "ya no", right: "no longer" }, { left: "recientemente", right: "recently" }, { left: "a tiempo", right: "on time" }, { left: "anteayer", right: "the day before yesterday" }, { left: "finalmente", right: "finally" }, { left: "todavía", right: "still" }, { left: "una vez", right: "once" }], explanation: "These ten time expressions help you sequence a story." },
          mc("Which words fit? «El tren salió a las ocho en punto y yo llegué ___.» (I arrived on time.)", ["a tiempo", "la próxima vez", "de repente", "ya no"], 0, "A tiempo = on time. La próxima vez is next time, de repente is suddenly and ya no is no longer."),
        ],
      },
    },
  },
  "a2d-fix-paragraph-irregulars": {
    exercises: {
      replace: {
        21: speak(`${SAY} "I made a cake, but my brother didn't want to come"`, "Hice un pastel, pero mi hermano no quiso venir.", ["Hice una torta, pero mi hermano no quiso venir.", "Yo hice un pastel, pero mi hermano no quiso venir."], "Two i-stems: hacer → hice (yo), querer → quiso (él), with no accents. No quiso venir = he refused to come."),
      },
    },
  },
  "a2d-irregular-vs-regular-sort": {
    goal: "tell whether a verb is regular or irregular before you conjugate it, and use the accent as a check (comí, but hice).",
    summary: "Comí vs. hice, habló vs. dijo: tell whether each verb follows the regular pattern before you conjugate it.",
  },
  "preterite-drill-1-part-2": {
    exercises: {
      replace: {
        5: tr(TR, "They sold their car last week.", "Vendieron su carro la semana pasada.", ["Ellos vendieron su carro la semana pasada.", "La semana pasada vendieron su carro.", "Vendieron su auto la semana pasada.", "Ellos vendieron su auto la semana pasada.", "Vendieron su coche la semana pasada.", "Ellos vendieron su coche la semana pasada."], "Vender is a regular -er verb: ellos vendieron (-ieron). In Latin America a car is el carro or el auto."),
      },
    },
  },
  "preterite-drill-2": {
    exercises: {
      replace: {
        0: mc("Which word fills the blank?\n\"Los niños ___ helado de postre.\" (The children wanted ice cream for dessert.)", ["quisieron", "querieron", "quisieran", "quisimos"], 0, "Querer is an i-stem: quis- + -ieron = quisieron. Querieron keeps the old stem; quisimos is nosotros."),
        4: tr(TR, "I told the truth.", "Dije la verdad.", ["Yo dije la verdad."], "Decir → dij- + -e: dije, with no accent."),
        8: tr(TR, "They went to the doctor and it was a long day.", "Fueron al médico y fue un día largo.", ["Ellos fueron al médico y fue un día largo.", "Fueron al doctor y fue un día largo.", "Ellos fueron al doctor y fue un día largo.", "Fueron al médico y fue un largo día.", "Fueron al médico, y fue un día largo."], "Fueron al médico: ir (a + place). Fue un día largo: ser (it was). Same forms, two verbs: the words after them tell you which."),
      },
    },
  },
  "preterite-drill-2-part-2": {
    exercises: {
      replace: {
        0: tr(TR, "She said no.", "Ella dijo que no.", ["Dijo que no."], "Decir → dij- + -o: dijo, with no accent. To say no is decir que no."),
        5: fill(BOLD, "¿Qué ___ tus padres?", "dijeron", "What [did] your parents [say]?", "Tus padres = ellos. Decir → dij-, and after j the ending is -eron: dijeron, never dijieron."),
        10: tr("Change it to ellos, in the preterite.", "Ella conduce el carro.", "Ellos condujeron el carro.", ["Ellas condujeron el carro.", "Ellos condujeron el auto."], "Conducir → conduj-, and after j the ellos ending is -eron: condujeron."),
        17: speak(`${SAY} "She said no"`, "Ella dijo que no.", ["Dijo que no."], "Dij- + -o: dijo, stressed on di-, with no accent."),
      },
    },
  },
  "preterite-drill-3": {
    exercises: {
      replace: {
        1: { type: "word-order", prompt: "Put the words in order to make a sentence.", words: ["Ellos", "no", "dijeron", "la", "verdad"], translation: "They didn't tell the truth.", explanation: "Dijeron is the ellos preterite of decir (-eron after j, not -ieron); no goes right before the verb." },
        8: CAR_SLEPT,
      },
    },
  },
  "preterite-drill-3-part-2": {
    exercises: {
      replace: {
        7: tr(TR, "I touched the painting and the guard shouted.", "Toqué el cuadro y el guardia gritó.", ["Yo toqué el cuadro y el guardia gritó.", "Toqué la pintura y el guardia gritó.", "Yo toqué la pintura y el guardia gritó.", "Toqué el cuadro, y el guardia gritó."], "Tocar → toqué: c becomes qu before -é to keep the hard sound. Gritar is regular: gritó."),
        8: order(["Los", "niños", "durmieron", "en", "el", "carro"], "The children slept in the car", "Dormir: o → u in ellos: durmieron."),
      },
    },
  },
  "a2d-reflexive-preterite-routine": {
    goal: "tell yesterday's routine with reflexive verbs in the past: me levanté, te duchaste, se vistió, nos fuimos.",
    exercises: {
      replace: {
        4: speak(`${SAY} "The baby fell asleep in the car"`, "El bebé se durmió en el carro.", ["El bebé se durmió en el auto.", "El bebé se durmió en el coche."], "Dormirse, él: se durmió. -Ir stem-changers take o → u in the third person of the preterite."),
      },
    },
  },
  "imperfect-tense-1": {
    reword: [[" (Unit 1.)", " (Unit 4.)"], [" (Unit 2.)", " (Earlier in this unit.)"]],
    sections: {
      0: { body: ["A quick look back at the finished past. The preterite reports one finished event. Today's tense describes how things were."] },
    },
  },
  "a2d-ser-ir-ver-imperfect": {
    exercises: {
      replace: {
        9: mc("Which word fills the blank?\n\"Antes mis abuelos ___ las noticias todas las noches.\" (My grandparents used to watch the news every night.)", ["veían", "vían", "veíban", "veyan"], 0, "Ver keeps its e in the imperfect: ve- + -ían = veían, with an accent on the í."),
      },
    },
  },
  "imperfect-tense-2": {
    sections: {
      1: {
        examples: [
          { es: "Cuando era pequeña, pasaba los veranos con mi abuela.", en: "When I was little, I used to spend summers with my grandmother. (era: stage of life; pasaba: habit)" },
          { es: "Vivíamos cerca de la playa y todos los días caminábamos por la arena.", en: "We lived near the beach and every day we walked on the sand." },
          { es: "Ella cocinaba platos deliciosos y siempre cantaba en la cocina.", en: "She cooked delicious dishes and always sang in the kitchen." },
          { es: "Extrañaba mucho a mi abuela cuando volvía a casa en septiembre.", en: "I missed my grandmother a lot when I went back home in September. (every year: imperfect)" },
        ],
      },
      2: {
        body: [
          "Thirty words for looking back. Several come in verb-noun families, which lets you guess new words: recordar → el recuerdo (memory), jugar → el juguete (toy), contar → el cuento (story), soñar → el sueño (dream).",
          "Extrañar takes the personal a before people: extrañaba a mi abuela. Soler is always followed by an infinitive: solía jugar (I used to play).",
        ],
        examples: [
          { es: "de niño / de niña", en: "as a child" },
          { es: "la infancia", en: "childhood" },
          { es: "recordar", en: "to remember" },
          { es: "el recuerdo", en: "the memory (from recordar)" },
          { es: "soñar", en: "to dream" },
          { es: "jugar", en: "to play" },
          { es: "la muñeca", en: "the doll" },
          { es: "el juguete", en: "the toy (from jugar)" },
          { es: "el patio", en: "the yard / playground" },
          { es: "el barrio", en: "the neighborhood" },
          { es: "la escuela primaria", en: "elementary school" },
          { es: "el maestro / la maestra", en: "the teacher" },
          { es: "el recreo", en: "recess" },
          { es: "crecer", en: "to grow up" },
          { es: "cambiar", en: "to change" },
          { es: "pasear", en: "to go for a walk" },
          { es: "extrañar", en: "to miss (someone/something)" },
          { es: "la costumbre", en: "the habit / custom" },
          { es: "soler", en: "to usually do" },
          { es: "reír", en: "to laugh" },
          { es: "el cumpleaños", en: "the birthday" },
          { es: "imaginar", en: "to imagine" },
          { es: "contar cuentos", en: "to tell stories" },
          { es: "la abuela", en: "the grandmother" },
          { es: "celebrar", en: "to celebrate" },
          { es: "el vecino / la vecina", en: "the neighbor" },
          { es: "el columpio", en: "the swing" },
          { es: "la bicicleta", en: "the bicycle" },
          { es: "el helado", en: "the ice cream" },
          { es: "travieso", en: "mischievous" },
        ],
        check: [
          { type: "matching", instructions: "Match each word to its meaning.", pairs: [{ left: "la infancia", right: "childhood" }, { left: "el recreo", right: "recess" }, { left: "pasear", right: "to go for a walk" }, { left: "extrañar", right: "to miss" }, { left: "soler", right: "to usually do" }, { left: "reír", right: "to laugh" }, { left: "el barrio", right: "the neighborhood" }, { left: "crecer", right: "to grow up" }, { left: "el juguete", right: "the toy" }, { left: "contar cuentos", right: "to tell stories" }], explanation: "These ten words describe growing up and looking back." },
          mc("Soñar gives el sueño (dream). Following the family pattern, what does \"el juego\" come from?", ["jugar (to play): a game", "juntar (to join): a group", "jugo (juice): a drink", "joven (young): youth"], 0, "Jugar → el juego (game), and also el juguete (toy). Verbs and their nouns share the stem: jug-."),
        ],
      },
    },
    exercises: {
      replace: {
        3: mc("Which sentence is a childhood memory, not a single event?", ["Mi abuela contaba cuentos.", "Mi abuela contó un cuento.", "Mi abuela cuenta cuentos.", "Mi abuela va a contar un cuento."], 0, "Contaba (imperfect) is something she used to do. Contó un cuento reports one time; the others are present and future."),
        5: fill(BOLD, "Mi abuela ___ cuentos antes de dormir.", "contaba", "My grandmother [used to tell] stories before bed.", "A past habit takes the imperfect: contar → contaba (-aba for ella)."),
        7: speak(`${SAY} "As kids, we used to play a lot at the beach"`, "De niños, jugábamos mucho en la playa.", ["De niños jugábamos mucho en la playa.", "Cuando éramos niños, jugábamos mucho en la playa."], "Jugar → jugábamos: -ar imperfect, with the accent on -ábamos."),
        11: tr(CORRECT, "En el recreo jugabamos en los columpios.", "En el recreo jugábamos en los columpios.", [], "Nosotros in the -ar imperfect carries an accent: jugábamos."),
        18: tr("Translate to English.", "Siempre extrañaba a mi abuela en invierno.", "I always missed my grandmother in winter.", ["I always used to miss my grandmother in winter.", "I always missed my grandma in winter.", "I always used to miss my grandma in winter.", "In winter I always missed my grandmother."], "Extrañar = to miss; extrañaba is the imperfect for a feeling that came back every year.", "es-en"),
      },
    },
  },
  "a2d-describe-the-scene": {
    goal: "describe a past scene in the imperfect: the time, the weather, age, feelings, what people looked like and what was going on.",
  },
  "a2r-mission-childhood-interview": {
    sections: {
      0: {
        examples: [
          { es: "—Abuela, ¿dónde vivías cuando eras niña?", en: "Grandma, where did you live when you were a girl? (vivías, eras: tú questions)" },
          { es: "—Vivía en un pueblo pequeño. No había carros.", en: "I lived in a small town. There weren't any cars. (había = there was / were)" },
          { es: "—¿Y qué hacías después de la escuela?", en: "And what did you do after school?" },
          { es: "—Ayudaba a mi madre y jugaba con mis hermanos en el río.", en: "I helped my mother and played with my siblings at the river." },
        ],
      },
    },
    exercises: {
      replace: {
        15: tr(CORRECT, "Mis padres trabajaban mucho, así que yo ayudava en casa.", "Mis padres trabajaban mucho, así que yo ayudaba en casa.", ["Mis padres trabajaban mucho, así que ayudaba en casa.", "Mis padres trabajaban mucho así que yo ayudaba en casa."], "The -ar imperfect is spelled with b, never v: ayudaba, like trabajaban."),
        19: tr(TR, "My grandmother used to sing in a choir.", "Mi abuela cantaba en un coro.", ["Mi abuela solía cantar en un coro.", "Mi abuelita cantaba en un coro."], "A past habit takes the imperfect: cantar → cantaba. Solía cantar says the same thing."),
        20: order(["Mi", "abuela", "siempre", "contaba", "historias", "antes", "de", "dormir."], "My grandmother always told stories before bed.", "Siempre + imperfect for a habit: contaba."),
      },
    },
  },
  "a2r-mission-travel-blog": {
    goal: "write a travel blog post about a finished trip in the preterite: fuimos, tuvimos, hizo, pudimos.",
    sections: {
      1: {
        examples: [
          { es: "El segundo día fuimos a Machu Picchu en tren.", en: "On the second day we went to Machu Picchu by train." },
          { es: "Salimos del hotel a las cuatro de la mañana, pero valió la pena.", en: "We left the hotel at four in the morning, but it was worth it." },
        ],
      },
    },
    exercises: {
      replace: {
        2: fill(BOLD, "Los vendedores ___ muchas cosas bonitas.", "vendieron", "The vendors [sold] a lot of lovely things.", "Vender is regular -er: ellos vendieron (-ieron)."),
        6: fill(BOLD, "El primer día ___ al hotel del centro.", "llegamos", "On the first day we [got] to the hotel in the centre.", "Llegar, nosotros: llegamos, the same form as the present. El primer día tells you it's the past."),
        12: fill(BOLD, "En el mercado ___ un sombrero precioso.", "encontré", "At the market I [found] a lovely hat.", "Encontrar is regular in the preterite: yo encontré, with the accent on the -é."),
        17: tr(TR, "The guide explained the history of the Incas.", "El guía explicó la historia de los incas.", ["La guía explicó la historia de los incas.", "El guía explicó la historia de los Incas.", "La guía explicó la historia de los Incas."], "Explicar is regular: él explicó, with the accent on the -ó."),
        22: tr("Change it to the preterite.", "Tengo que salir muy temprano.", "Tuve que salir muy temprano.", ["Yo tuve que salir muy temprano."], "Tener → tuv- + -e: tuve, with no accent. Tener que + infinitive = to have to."),
      },
    },
  },
  "a2d-story-cloze-lost-phone": {
    goal: "tell a short story in the past: fill each gap with a regular, irregular or spelling-change preterite.",
  },
  "a2d-question-answer-irregulars": {
    sections: {
      0: {
        check: [
          fill(BOLD, "—¿Estuviste en la reunión? —Sí, ___ toda la tarde.", "estuve", "—Were you at the meeting? (tú) —Yes, I [was] there all afternoon.", "Tú question (estuviste) → yo answer: estuv- + -e, estuve."),
          mc("—¿Cuándo supiste la noticia? —___ la noticia ayer. (saber has the stem sup-)", ["Supe", "Supiste", "Supo", "Sabí"], 0, "A new stem, same mirror: tú question (supiste) → yo answer, sup- + -e = supe. In the preterite saber means \"found out\"."),
        ],
      },
    },
    exercises: {
      replace: {
        0: speak("Answer out loud in Spanish: ¿Qué dijo tu hermano? (Say: \"He said no\")", "Dijo que no.", ["Mi hermano dijo que no.", "Él dijo que no."], "A question about él gets an él answer: dij- + -o = dijo, with no accent."),
        1: fill(BOLD, "—¿Trajeron ustedes el pastel? —Sí, ___ el pastel.", "trajimos", "—Did you bring the cake? (ustedes) —Yes, we [brought] the cake.", "Ustedes question → nosotros answer: traj- + -imos = trajimos."),
        3: fill(BOLD, "—¿Dónde pusiste mi libro? —___ tu libro en la mesa.", "Puse", "—Where did you put my book? (tú) —I [put] your book on the table.", "Tú question (pusiste) → yo answer: pus- + -e = puse, with no accent.", ["puse"]),
        4: fill(BOLD, "—¿Quisieron ustedes venir? —No, no ___ venir.", "quisimos", "—Did you want to come? (ustedes) —No, we did not [want] to come.", "Ustedes question → nosotros answer: quis- + -imos = quisimos. No quisimos = we refused."),
        6: { type: "matching", instructions: "Match question and answer.", pairs: [{ left: "¿Tuviste tiempo?", right: "No, no tuve tiempo." }, { left: "¿Vinieron tus padres?", right: "Sí, vinieron el lunes." }, { left: "¿Hicieron ustedes la compra?", right: "Sí, hicimos la compra ayer." }], explanation: "The person changes with the question: tú → yo, ellos → ellos, ustedes → nosotros." },
        7: mc("—¿Qué dijiste? —___ que sí.", ["Dije", "Dijiste", "Dijo", "Decí"], 0, "A tú question (dijiste) gets a yo answer: dij- + -e = dije. Decí is not a preterite form."),
        9: tr("Answer yes.", "¿Hiciste la cama?", "Sí, hice la cama.", ["Sí, yo hice la cama.", "Sí, la hice."], "A tú question gets a yo answer: hice (hic- + -e)."),
        21: tr(TR, "Did you (formal) do the exercise? — Yes, I did the exercise this morning.", "¿Hizo usted el ejercicio? —Sí, hice el ejercicio esta mañana.", ["¿Hizo usted el ejercicio? Sí, hice el ejercicio esta mañana.", "¿Usted hizo el ejercicio? —Sí, hice el ejercicio esta mañana.", "¿Usted hizo el ejercicio? Sí, hice el ejercicio esta mañana.", "¿Hizo el ejercicio? —Sí, hice el ejercicio esta mañana.", "¿Hizo el ejercicio? Sí, hice el ejercicio esta mañana.", "¿Hizo usted el ejercicio? —Sí, lo hice esta mañana.", "¿Hizo usted el ejercicio? Sí, lo hice esta mañana."], "Usted takes the él form: hizo (hic- → hiz- before o). Your answer is yo: hice."),
      },
    },
  },
};
