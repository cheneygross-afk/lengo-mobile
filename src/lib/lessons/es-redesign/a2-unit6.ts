// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a2-unit6.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A2 Unit 6 (choosing between the two past tenses · verbs that
// mean something else in the past · was doing): content fixes from Claude's
// audit in Ricardo's format (Claude Feedback/Spanish (new course)/A2
// Elementary/Unit 06). Section and question numbers are the lessons' own as
// they are now. Only content changes here: what is taught, asked and
// accepted. The answer checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the praise
// and complaints words (te mereces, te agradezco, me engañaron) and the work
// and health vocabulary review (enfermarse, me rompí el brazo) to B1 Unit 2,
// where pronouns and reflexives are taught. Elsewhere questions stop asking
// for object pronouns and reflexives (se fue la luz, me duché, se conocieron,
// lo perdí) before B1, goals say what each lesson really practices, and coche,
// aparcar, gafas, billete and enfadada become carro, estacionar, lentes,
// boleto and enojada.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";
import { order } from "./a2-unit5";

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
const SAY = "Say it in Spanish:";
const BOLD = "How do you say the bold words in Spanish?";
const CORRECT = "Correct the sentence.";
const TR = "Translate to Spanish.";

const TIRED = speak(`${SAY} "I was tired, so I didn't go out"`, "Estaba cansado, así que no salí.", ["Estaba cansada, así que no salí.", "Estaba cansado así que no salí.", "Estaba cansada así que no salí.", "Estaba cansado, entonces no salí.", "Estaba cansada, entonces no salí."], "Estaba cansado is a state, so the imperfect; no salí is one event, so the preterite. Cansada also works.");
const TIRED_EX = { es: "Estaba cansado, así que no salí.", en: "I was tired, so I didn't go out. (state → imperfect; one event → preterite)" };

export const A2_UNIT6_PATCHES: Record<string, LessonPatch> = {
  "preterite-vs-imperfect-1": {
    sections: {
      1: {
        check: [
          fill(BOLD, "Ella ___ por el parque cuando vio a su amigo.", "caminaba", "She [was walking] through the park when she saw her friend.", "The action in progress (caminar) goes in the imperfect; the interruption (vio) goes in the preterite.", ["estaba caminando"]),
          tr("Turn them into one sentence: I was reading when the doorbell rang.", "Yo leí. Sonó el timbre.", "Yo leía cuando sonó el timbre.", ["Leía cuando sonó el timbre.", "Yo estaba leyendo cuando sonó el timbre.", "Estaba leyendo cuando sonó el timbre.", "Cuando sonó el timbre, yo leía.", "Cuando sonó el timbre, leía."], "The reading was already in progress, so it becomes imperfect (leía); the doorbell cuts in (sonó)."),
        ],
      },
    },
    exercises: {
      replace: {
        6: mc("Which sentence is correct?", ["Yo tenía veinte años cuando terminé la universidad.", "Yo tuve veinte años cuando terminé la universidad.", "Yo tenía veinte años cuando terminaba la universidad.", "Yo tuve veinte años cuando terminaba la universidad."], 0, "Age is background description, so the imperfect (tenía), and finishing university is a single event, so the preterite (terminé). \"Tuve veinte años\" makes age an event, and \"terminaba\" makes the finishing ongoing."),
        11: tr(CORRECT, "Ayer hacía mi tarea en dos horas.", "Ayer hice mi tarea en dos horas.", ["Ayer hice la tarea en dos horas.", "Ayer hice mis tareas en dos horas.", "Ayer hice toda mi tarea en dos horas."], "A completed task with a measured time (en dos horas) is a whole event: preterite hice."),
        12: tr("Change it to the past.", "Mi tía viene cada Navidad.", "Mi tía venía cada Navidad.", ["Mi tía venía todas las Navidades."], "A repeated past habit (cada Navidad) → imperfect: venía."),
        16: tr(TR, "She was twenty when she arrived in Mexico.", "Tenía veinte años cuando llegó a México.", ["Ella tenía veinte años cuando llegó a México.", "Tenía veinte años cuando ella llegó a México.", "Cuando llegó a México, tenía veinte años."], "Age = background (tenía); arriving = event (llegó)."),
        22: speak("Tell it aloud in Spanish: It was midnight, I was watching a movie, and suddenly someone knocked on the door.", "Era medianoche, yo veía una película y de repente alguien llamó a la puerta.", ["Era medianoche, veía una película y de repente alguien llamó a la puerta.", "Era medianoche, yo estaba viendo una película y de repente alguien llamó a la puerta.", "Era medianoche, estaba viendo una película y de repente alguien llamó a la puerta.", "Era medianoche, yo veía una película y de repente alguien tocó la puerta."], "Era and veía set the scene (imperfect); de repente alguien llamó a la puerta is the event that breaks in (preterite)."),
      },
    },
  },
  "a2d-choose-explain-pret-imp": {
    goal: "choose the past tense for each sentence and name the reason: a completed event, background, a habit or an action in progress.",
    sections: {
      0: {
        check: [
          mc("«Anoche ___ una pizza.» Tense and reason?", ["preterite — completed action at a specific time", "imperfect — habit", "imperfect — background", "preterite — description"], 0, "Anoche with a single event takes the preterite: comí, a completed action at a specific time. It's not a habit, background or a description."),
          tr("Change it to one specific Monday (el lunes).", "Los lunes llegaba a las siete.", "El lunes llegué a las siete.", ["El lunes pasado llegué a las siete."], "Los lunes (every Monday) is a habit: imperfect. El lunes (that one Monday) is a single event: preterite llegué (g → gu before -é)."),
        ],
      },
    },
    exercises: {
      replace: {
        19: tr(TR, "I always listened to the radio in the car.", "Siempre escuchaba la radio en el carro.", ["Siempre escuchaba la radio en el auto.", "Siempre escuchaba la radio en el coche.", "En el carro siempre escuchaba la radio.", "En el auto siempre escuchaba la radio.", "Siempre oía la radio en el carro."], "Siempre = habit: imperfect escuchaba. In Latin America a car is el carro or el auto."),
        21: tr(TR, "When I was a child I didn't like fish, but yesterday I ate fish.", "De niño no me gustaba el pescado, pero ayer comí pescado.", ["De niña no me gustaba el pescado, pero ayer comí pescado.", "Cuando era niño no me gustaba el pescado, pero ayer comí pescado.", "Cuando era niña no me gustaba el pescado, pero ayer comí pescado.", "De niño no me gustaba el pescado pero ayer comí pescado.", "De niña no me gustaba el pescado pero ayer comí pescado."], "Gustaba (a lasting feeling) vs. comí (one event)."),
        22: tr(TR, "It was raining, so I didn't go out and I watched a movie.", "Llovía, así que no salí y vi una película.", ["Estaba lloviendo, así que no salí y vi una película.", "Llovía, así que no salí y miré una película.", "Estaba lloviendo, así que no salí y miré una película.", "Llovía, entonces no salí y vi una película.", "Llovía así que no salí y vi una película."], "Llovía = background; no salí and vi = completed actions."),
      },
    },
  },
  "a2d-signal-words-sort": {
    goal: "use signal words (ayer, de repente, siempre, mientras) to choose the past tense.",
    sections: {
      0: {
        examples: [
          { es: "De repente sonó el teléfono.", en: "Suddenly the phone rang. (one sudden event)" },
          { es: "Normalmente cenábamos a las nueve.", en: "Normally we had dinner at nine. (repetition)" },
        ],
      },
    },
    exercises: {
      replace: {
        4: speak(`${SAY} "Last night I got home very late"`, "Anoche llegué a casa muy tarde.", ["Anoche llegué muy tarde a casa.", "Anoche yo llegué a casa muy tarde."], "Anoche marks one bounded time → preterite: llegué (g → gu before -é)."),
        23: speak(`${SAY} "Suddenly the phone rang"`, "De repente sonó el teléfono.", ["De repente, sonó el teléfono.", "De repente el teléfono sonó."], "De repente marks one sudden event → preterite: sonó."),
      },
    },
  },
  "preterite-vs-imperfect-2": {
    sections: {
      0: {
        examples: [
          { es: "Era un día normal. Yo caminaba al trabajo cuando vi algo extraño en la calle.", en: "It was a normal day. I was walking to work when I saw something strange in the street. (era, caminaba: scene; vi: plot)" },
          { es: "Un perro pequeño corría solo, sin dueño a la vista.", en: "A small dog was running alone, with no owner in sight. (in progress)" },
          { es: "Caminé despacio hacia el perro. El pobre tenía mucho miedo.", en: "I walked slowly toward the dog. The poor thing was very scared. (one event, then a feeling)" },
          { es: "Al final, encontré a su dueña dos calles más adelante. ¡Qué alivio sentí!", en: "In the end, I found its owner two streets further on. What a relief I felt! (al final: plot)" },
        ],
      },
    },
  },
  "preterite-vs-imperfect-drill-1": {
    exercises: {
      replace: {
        0: fill(BOLD, "Yo hablaba por teléfono cuando de repente ___ el timbre.", "sonó", "I was talking on the phone when suddenly the doorbell [rang].", "sonar → sonó: preterite, él. The interrupting action takes the preterite; the call in progress (hablaba) stays imperfect."),
        2: tr(TR, "Last night we watched a movie and then had dinner.", "Anoche vimos una película y luego cenamos.", ["Anoche vimos una película y después cenamos.", "Anoche vimos una película y luego comimos.", "Anoche vimos una película y después comimos.", "Anoche vimos una peli y luego cenamos."], "Both actions happened once and are complete, so both take the preterite: vimos, cenamos."),
        8: tr(TR, "They were watching TV when the phone rang.", "Veían la tele cuando sonó el teléfono.", ["Estaban viendo la tele cuando sonó el teléfono.", "Veían la televisión cuando sonó el teléfono.", "Estaban viendo la televisión cuando sonó el teléfono.", "Ellos veían la tele cuando sonó el teléfono.", "Miraban la tele cuando sonó el teléfono.", "Estaban mirando la tele cuando sonó el teléfono.", "Miraban la televisión cuando sonó el teléfono.", "Estaban mirando la televisión cuando sonó el teléfono."], "Veían = action in progress; sonó = interrupting event (preterite)."),
        10: tr(TR, "My grandparents lived in a small village, but one day they went to live in the city.", "Mis abuelos vivían en un pueblo pequeño, pero un día fueron a vivir a la ciudad.", ["Mis abuelos vivían en un pueblo pequeño pero un día fueron a vivir a la ciudad.", "Mis abuelos vivían en un pueblito, pero un día fueron a vivir a la ciudad.", "Mis abuelos vivían en un pequeño pueblo, pero un día fueron a vivir a la ciudad."], "Vivían describes the situation; un día signals a single event, so fueron (ir) is preterite."),
      },
    },
  },
  "preterite-vs-imperfect-mastery-check": {
    goal: "show you can choose the preterite or the imperfect in new sentences, including conocí and conocía.",
    exercises: {
      replace: {
        2: mc("Which sentence means that Ana met Luis for the first time at a party?", ["Ana conocía a Luis en una fiesta.", "Ana conoció a Luis en una fiesta.", "Ana conoce a Luis en una fiesta.", "Ana va a conocer a Luis en una fiesta."], 1, "Conocer in the preterite (conoció) means she met him for the first time. \"Conocía\" means she already knew him, \"conoce\" is present, and \"va a conocer\" is future."),
        10: tr("Change it so she met him for the first time last year.", "Mi hermana ya conocía a su novio.", "Mi hermana conoció a su novio el año pasado.", ["El año pasado mi hermana conoció a su novio."], "Conocer in the preterite means met for the first time: conocía (already knew) → conoció."),
      },
    },
  },
  "preterite-vs-imperfect-mastery-check-part-2": {
    goal: "show you can choose the preterite or the imperfect in a story, from the scene to the events.",
    exercises: {
      replace: {
        0: fill(BOLD, "Mis amigos y yo ___ por la playa cuando empezó a llover.", "caminábamos", "My friends and I [were walking] along the beach when it started to rain.", "caminar → caminábamos: imperfect, nosotros. The walk was in progress when another event (the rain starting) interrupted it, so the imperfect.", ["estábamos caminando"]),
        9: tr(CORRECT, "Cuando tenía diez años, tenía un accidente en bicicleta.", "Cuando tenía diez años, tuve un accidente en bicicleta.", ["Cuando tenía diez años tuve un accidente en bicicleta.", "Cuando tenía diez años, tuve un accidente en bici."], "Age is background (tenía), but the accident is one event: preterite tuve."),
        14: speak("Tell it aloud in Spanish: It was late and I was tired, but suddenly my best friend called.", "Era tarde y estaba cansado, pero de repente llamó mi mejor amigo.", ["Era tarde y estaba cansada, pero de repente llamó mi mejor amigo.", "Era tarde y estaba cansado, pero de repente llamó mi mejor amiga.", "Era tarde y estaba cansada, pero de repente llamó mi mejor amiga.", "Era tarde y estaba cansado, pero de repente mi mejor amigo llamó.", "Era tarde y estaba cansada, pero de repente mi mejor amiga llamó."], "Era tarde and estaba cansado set the scene (imperfect); de repente llamó is the event (preterite). Cansada and mi mejor amiga also work."),
        16: speak(`${SAY} "My friends and I were walking along the beach when it started to rain"`, "Mis amigos y yo caminábamos por la playa cuando empezó a llover.", ["Mis amigos y yo estábamos caminando por la playa cuando empezó a llover.", "Mis amigas y yo caminábamos por la playa cuando empezó a llover."], "Caminábamos is the walk in progress (imperfect); empezó a llover is the event that interrupts it (preterite)."),
      },
    },
  },
  "a2r-contrast-meaning-changing-verbs": {
    exercises: {
      replace: {
        5: tr("Change it to the moment they met, at a dance (en un baile).", "Mi abuelo ya conocía a mi abuela.", "Mi abuelo conoció a mi abuela en un baile.", ["En un baile mi abuelo conoció a mi abuela."], "The first meeting is an event → preterite: conocía (already knew) → conoció."),
        11: mc("'My grandmother could read without glasses (in general).'", ["Mi abuela podía leer sin lentes.", "Mi abuela pudo leer sin lentes."], 0, "A general ability over time is podía; pudo would mean she managed it once. In Latin America glasses are los lentes or los anteojos."),
      },
    },
  },
  "a2r-contrast-meaning-changing-verbs-part-2": {
    sections: {
      0: {
        check: [fill(BOLD, "Yo ___ a mi esposa en Barcelona.", "conocí", "I [met] my wife in Barcelona.", "Conocer in the preterite = to meet. Meeting for the first time → preterite: conocí.")],
      },
    },
    exercises: {
      replace: {
        14: speak("Say it aloud in Spanish: I tried to call my mother, but I couldn't, and then I found out the news.", "Quise llamar a mi madre, pero no pude, y luego supe la noticia.", ["Quise llamar a mi mamá, pero no pude, y luego supe la noticia.", "Quise llamar a mi madre, pero no pude, y después supe la noticia.", "Quise llamar a mi mamá, pero no pude, y después supe la noticia.", "Quise llamar a mi madre pero no pude, y luego supe la noticia."], "Quise = tried (wish turned into action); no pude = failed; supe = found out."),
        16: speak(`${SAY} "I met my best friend in Barcelona"`, "Conocí a mi mejor amigo en Barcelona.", ["Conocí a mi mejor amiga en Barcelona.", "Yo conocí a mi mejor amigo en Barcelona.", "Yo conocí a mi mejor amiga en Barcelona."], "Conocer in the preterite = met for the first time: conocí. Personal a before a person."),
      },
    },
  },
  "a2d-fix-paragraph-pret-imp": {
    goal: "fix the past tenses in a travel story: the preterite for each event, the imperfect for the scene.",
    exercises: {
      replace: {
        1: fill("Fix it.", "Un día ___ a Trinidad en carro. (the story says: íbamos)", "fuimos", undefined, "One trip is a single event, so the preterite: fuimos, not íbamos."),
        7: tr(CORRECT, "Mientras esperábamos el autobús, empezaba a llover.", "Mientras esperábamos el autobús, empezó a llover.", ["Mientras esperábamos el autobús empezó a llover.", "Mientras esperábamos el autobús, comenzó a llover."], "The waiting is in progress (esperábamos is right); the rain starting is one event during it → empezó."),
        9: tr("Change it to the past (it's part of the travel story).", "Volvemos al hotel y comemos algo.", "Volvimos al hotel y comimos algo.", ["Regresamos al hotel y comimos algo."], "Two actions one after another move the story → preterite: volvimos, comimos."),
      },
    },
  },
  "a2d-fix-paragraph-pret-imp-part-2": {
    goal: "fix the past tenses in a longer story, sentence by sentence.",
  },
  "a2d-mixed-practice-pret-imp-1": {
    goal: "choose the past tense and build its form: regular, irregular stem or spelling change.",
    sections: {
      0: {
        examples: [
          TIRED_EX,
          { es: "Busqué mis llaves por toda la casa.", en: "I looked for my keys all over the house. (buscar → busqué: c → qu before e)" },
        ],
      },
    },
    exercises: {
      replace: {
        1: fill(BOLD, "El restaurante ___ lleno, así que fuimos a otro.", "estaba", "The restaurant [was] full, so we went to another one.", "estar → estaba: imperfect, él (description). Description → imperfect."),
        2: fill(BOLD, "Mi abuelo siempre ___ historias de su pueblo.", "contaba", "My grandfather always [used to tell] stories about his village.", "contar → contaba: imperfect, él (habitual). Habit → imperfect."),
        4: tr("Translate to English.", "No quise decir nada porque estaba enojada.", "I refused to say anything because I was angry.", ["I didn't want to say anything because I was angry.", "I refused to say anything because I was upset.", "I wouldn't say anything because I was angry."], "Quise in the negative preterite means refused, and estaba describes her state (imperfect).", "es-en"),
        8: fill(BOLD, "___ a la tienda a las nueve.", "Llegué", "[I arrived] at the store at nine.", "Spelling change in the yo preterite: llegar → llegué (g → gu before -é, to keep the hard g sound)."),
        10: tr(CORRECT, "Cuando era pequeño, iba al colegio en autobús y una vez el autobús tenía un accidente.", "Cuando era pequeño, iba al colegio en autobús y una vez el autobús tuvo un accidente.", ["Cuando era pequeña, iba al colegio en autobús y una vez el autobús tuvo un accidente.", "Cuando era pequeño iba al colegio en autobús y una vez el autobús tuvo un accidente.", "Cuando era pequeña iba al colegio en autobús y una vez el autobús tuvo un accidente."], "Una vez = one event → preterite tuvo. Era and iba are right: life stage and habit."),
        16: TIRED,
        17: speak(`${SAY} "I looked for my keys all over the house"`, "Busqué mis llaves por toda la casa.", ["Busqué las llaves por toda la casa.", "Yo busqué mis llaves por toda la casa."], "Buscar → busqué: c → qu before e, so it keeps the hard c sound."),
      },
    },
  },
  "a2d-mixed-practice-pret-imp-1-part-2": {
    goal: "choose the past tense and build its form in new sentences.",
    sections: {
      0: { examples: [TIRED_EX] },
    },
    exercises: {
      replace: {
        11: tr(TR, "She put the keys on the table and left.", "Puso las llaves en la mesa y salió.", ["Puso las llaves sobre la mesa y salió.", "Ella puso las llaves en la mesa y salió.", "Ella puso las llaves sobre la mesa y salió.", "Puso las llaves en la mesa y se fue.", "Puso las llaves sobre la mesa y se fue.", "Ella puso las llaves en la mesa y se fue."], "Two actions in sequence: preterite; poner → puso, salir → salió."),
        14: speak("Say it aloud in Spanish: It was very cold, so I made a hot chocolate.", "Hacía mucho frío, así que hice un chocolate caliente.", ["Hacía mucho frío, así que preparé un chocolate caliente.", "Hacía mucho frío, entonces hice un chocolate caliente.", "Hacía mucho frío así que hice un chocolate caliente."], "Hacía frío = background (imperfect); hice (hacer: hic-) = a completed event (preterite)."),
        15: TIRED,
      },
    },
  },
  "imperfect-drill-3": {
    exercises: {
      replace: {
        2: fill(BOLD, "Mis padres ___ veinticinco años cuando compraron su primera casa.", "tenían", "My parents [were] twenty-five when they bought their first house.", "Age in the past: imperfect of tener."),
      },
    },
  },
  "a2d-interrupted-actions": {
    exercises: {
      replace: {
        1: speak(`${SAY} "The children were playing when it started to rain"`, "Los niños jugaban cuando empezó a llover.", ["Los niños estaban jugando cuando empezó a llover.", "Los niños jugaban cuando comenzó a llover."], "The playing was in progress → imperfect; empezó a llover cuts in → preterite."),
        11: tr("Turn them into one sentence with cuando.", "Mi madre cocinó. Sonó el timbre.", "Mi madre cocinaba cuando sonó el timbre.", ["Mi madre estaba cocinando cuando sonó el timbre.", "Cuando sonó el timbre, mi madre cocinaba.", "Cuando sonó el timbre, mi madre estaba cocinando."], "The cooking was in progress → cocinaba; the doorbell interrupts → sonó."),
        15: tr(CORRECT, "Trabajaba cuando llamaba mi jefe.", "Trabajaba cuando llamó mi jefe.", ["Estaba trabajando cuando llamó mi jefe.", "Trabajaba cuando mi jefe llamó."], "The call is a single event that interrupts: llamó."),
        20: order(["Yo", "escribía", "un", "correo", "cuando", "llegó", "mi", "hermano."], "I was writing an email when my brother arrived.", "Imperfect + cuando + preterite."),
        24: speak("Tell it aloud in Spanish: I was driving to work when I saw an accident.", "Manejaba al trabajo cuando vi un accidente.", ["Conducía al trabajo cuando vi un accidente.", "Estaba manejando al trabajo cuando vi un accidente.", "Iba manejando al trabajo cuando vi un accidente."], "Manejaba = in progress (imperfect); vi = the event that interrupts (preterite). In Spain: conducía."),
      },
    },
  },
  "preterite-vs-imperfect-drill-1-part-2": {
    exercises: {
      replace: {
        0: fill(BOLD, "Nosotros ___ cuando llegó tu mensaje.", "cenábamos", "We [were having dinner] when your message arrived.", "cenar → cenábamos: imperfect (action in progress), nosotros. The message arriving is the interruption: preterite llegó.", ["estábamos cenando"]),
        7: tr(TR, "I was reading when you (tú) called.", "Leía cuando llamaste.", ["Estaba leyendo cuando llamaste.", "Yo leía cuando llamaste.", "Yo leía cuando tú llamaste.", "Leía cuando tú llamaste.", "Yo estaba leyendo cuando llamaste.", "Leía cuando me llamaste.", "Estaba leyendo cuando me llamaste.", "Yo leía cuando me llamaste.", "Yo estaba leyendo cuando me llamaste."], "Leía is the background action; llamaste interrupts it in the preterite."),
        16: speak(`${SAY} "We were having dinner when the phone rang"`, "Nosotros cenábamos cuando sonó el teléfono.", ["Nosotros estábamos cenando cuando sonó el teléfono.", "Cenábamos cuando sonó el teléfono.", "Estábamos cenando cuando sonó el teléfono."], "Cenábamos is the action in progress (imperfect); sonó is the interruption (preterite)."),
      },
    },
  },
  "a2r-word-web-travel": {
    sections: {
      0: {
        body: [
          "The pattern: most travel nouns grow out of a verb you already know, so learn them in pairs. Volar → el vuelo, reservar → la reserva, embarcar → el embarque (la tarjeta de embarque, la puerta de embarque). The moment of arriving or leaving takes -ada / -ida: llegar → la llegada, salir → la salida. Knowing one half of a pair lets you guess the other.",
          "Then organize the words by stage: planning (reservar, el boleto, el pasaporte), travelling (el vuelo, la maleta, el andén, facturar), arriving (el alojamiento, la recepción, deshacer la maleta).",
        ],
      },
      1: {
        body: ["When travel goes wrong, each problem is one finished event, so it goes in the preterite: cancelaron el vuelo, perdimos el tren. Perder means to miss a bus, train or flight, or to lose a thing: perdí el autobús, perdí el pasaporte."],
        examples: [
          { es: "Perdimos el tren porque el taxi llegó tarde.", en: "We missed the train because the taxi arrived late." },
          { es: "El vuelo salió con dos horas de retraso.", en: "The flight left two hours late." },
        ],
        check: [
          fill(BOLD, "La aerolínea ___ el vuelo por la nieve.", "canceló", "The airline [canceled] the flight because of the snow.", "cancelar → canceló: preterite, ella. One finished event, so the preterite; la aerolínea is ella → canceló, with the stress on the last syllable."),
          mc("You got to the station at 9:05. The train left at 9:00. What do you say?", ["Perdí el tren.", "Perdía el tren.", "Pierdo el tren.", "Perdí al tren."], 0, "Missing the train is one finished event: perdí el tren. Perdía would be a habit, pierdo is present, and a train takes no personal a."),
        ],
      },
    },
    exercises: {
      replace: {
        0: { type: "matching", instructions: "Match each word to its meaning.", pairs: [{ left: "el boleto de ida y vuelta", right: "round-trip ticket" }, { left: "el alojamiento", right: "accommodation" }, { left: "el vuelo directo", right: "direct flight" }, { left: "la aduana", right: "customs" }], explanation: "Core Elementary travel vocabulary. In Latin America a ticket is el boleto (in Spain, el billete)." },
        8: tr(TR, "I bought a round-trip ticket, but I lost my passport at the gate.", "Compré un boleto de ida y vuelta, pero perdí el pasaporte en la puerta de embarque.", ["Compré un boleto de ida y vuelta, pero perdí mi pasaporte en la puerta de embarque.", "Compré un boleto de ida y vuelta pero perdí mi pasaporte en la puerta de embarque.", "Compré un boleto de ida y vuelta pero perdí el pasaporte en la puerta de embarque.", "Compré un billete de ida y vuelta, pero perdí el pasaporte en la puerta de embarque.", "Compré un billete de ida y vuelta, pero perdí mi pasaporte en la puerta de embarque."], "Compré and perdí are two finished events; la puerta de embarque = the gate."),
      },
    },
  },
  "at-the-restaurant-1": {
    sections: {
      2: {
        examples: [
          { es: "¿Tiene una mesa para dos, por favor?", en: "Do you have a table for two, please?" },
          { es: "¿Hay una mesa junto a la ventana?", en: "Is there a table by the window?" },
        ],
      },
      3: {
        examples: [{ es: "El mesero recomendó el plato del día.", en: "The waiter recommended the daily special. (Mesero is Latin American; in Spain: camarero.)" }],
      },
    },
    exercises: {
      replace: {
        9: tr(TR, "Is there a table on the terrace?", "¿Hay una mesa en la terraza?", ["¿Tiene una mesa en la terraza?", "¿Hay mesa en la terraza?", "¿Tienen una mesa en la terraza?"], "Hay = there is; en la terraza = outside."),
        16: tr("Make it more polite.", "¿Puede traernos agua?", "¿Podría traernos agua?", ["¿Nos podría traer agua?", "¿Podría traernos agua, por favor?", "¿Nos podría traer agua, por favor?"], "¿Podría...? is the polite way to say \"could you...?\". Learn it as a set phrase for asking a waiter."),
      },
    },
  },
  "a2r-story-stolen-bike": {
    exercises: {
      replace: {
        2: fill(BOLD, "El chico ___ la verdad: solo quería dar un paseo.", "dijo", "The boy [told] the truth: he only wanted to go for a ride.", "A single completed action → preterite of decir: dijo. (Quería is his state of mind: imperfect.)"),
        13: tr("Correct the police report.", "Yo cociné la cena cuando alguien tomó mi bicicleta.", "Yo cocinaba la cena cuando alguien tomó mi bicicleta.", ["Cocinaba la cena cuando alguien tomó mi bicicleta.", "Estaba cocinando la cena cuando alguien tomó mi bicicleta.", "Yo estaba cocinando la cena cuando alguien tomó mi bicicleta."], "The cooking was in progress when the theft happened: cocinaba."),
        20: order(["Mientras", "Tomás", "cocinaba,", "alguien", "tomó", "la", "bicicleta."], "While Tomás was cooking, someone took the bike.", "Mientras + imperfect for the ongoing action; preterite for the interruption."),
      },
    },
  },
  "a2d-chain-habit-to-event": {
    sections: {
      0: {
        examples: [
          { es: "Siempre llegaba temprano, pero ese día llegué tarde.", en: "I always arrived early, but that day I arrived late. (habit, then the one exception)" },
          { es: "Los martes nadaba; el martes pasado no nadé.", en: "On Tuesdays I swam; last Tuesday I didn't swim. (los martes = every Tuesday; el martes pasado = one)" },
          { es: "Una vez perdí el autobús. De joven perdía el autobús todo el tiempo.", en: "Once I missed the bus. When I was young I missed the bus all the time. (and back again: event → habit)" },
        ],
      },
    },
    exercises: {
      replace: {
        1: fill(BOLD, "Normalmente mi hermano lavaba los platos. → Ese día yo ___ los platos.", "lavé", "Normally my brother washed the dishes. → That day I [washed] the dishes.", "Ese día = one occasion → preterite: lavé."),
        5: fill(BOLD, "Una vez traje flores a mi madre. → Siempre ___ flores a mi madre.", "traía", "Once I brought my mother flowers. → I always [brought] my mother flowers.", "Siempre marks a habit → imperfect: traía (traer is regular in the imperfect)."),
        6: fill(BOLD, "Siempre podía estacionar delante de casa. → Ayer no ___ estacionar.", "pude", "I could always park in front of the house. → Yesterday I [couldn't] park.", "Ayer is one occasion → preterite. No pude means you tried and failed that day."),
        7: fill(BOLD, "Normalmente los niños dormían diez horas. → Esa noche ___ solo seis horas.", "durmieron", "Normally the kids slept ten hours. → That night they [slept] only six hours.", "Esa noche = one occasion → preterite. Dormir changes o → u in the ellos preterite: durmieron."),
        8: mc("«Los sábados mi padre ___ el carro, pero el sábado pasado no tuvo tiempo.»", ["lavaba", "lavó", "lava", "lavará"], 0, "Los sábados (every Saturday) is a habit → imperfect lavaba. Lavó would make it one Saturday, which is the second half of the sentence, not the first."),
        13: tr("Change it to every Sunday.", "El domingo mi tío vino a comer.", "Los domingos mi tío venía a comer.", ["Todos los domingos mi tío venía a comer.", "Cada domingo mi tío venía a comer."], "Los domingos (every Sunday) is a habit → imperfect: vino → venía."),
        19: tr(CORRECT, "Cada año celebramos mi cumpleaños en un restaurante, pero en 2022 cenábamos en casa.", "Cada año celebrábamos mi cumpleaños en un restaurante, pero en 2022 cenamos en casa.", ["Cada año celebrábamos mi cumpleaños en un restaurante pero en 2022 cenamos en casa."], "The tenses are swapped: cada año is the habit (celebrábamos) and en 2022 is the one exception (cenamos)."),
        22: speak(`${SAY} "Last night I got home very late"`, "Anoche llegué a casa muy tarde.", ["Anoche llegué muy tarde a casa.", "Anoche yo llegué a casa muy tarde."], "Anoche = one night → preterite llegué."),
        24: order(["Mis", "abuelos", "vivían", "en", "el", "campo,", "pero", "en", "2010", "compraron", "una", "casa", "en", "la", "ciudad"], "My grandparents lived in the countryside, but in 2010 they bought a house in the city", "Vivían = the long-lasting situation (imperfect); compraron = one event in a specific year (preterite)."),
        27: speak(`${SAY} "Once I missed the bus. When I was young I missed the bus all the time"`, "Una vez perdí el autobús. De joven perdía el autobús todo el tiempo.", ["Una vez perdí el autobús. De joven, perdía el autobús todo el tiempo.", "Una vez perdí el bus. De joven perdía el bus todo el tiempo."], "Una vez = one event (perdí); de joven + todo el tiempo = a habit (perdía)."),
      },
    },
  },
};
