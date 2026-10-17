// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u01-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u01 (narrative tenses): a short recap, then graded practice.

// ---- small authoring helpers (local to this file) ----------------------
// Answer patterns use {a|b|} for alternatives; every combination is
// accepted, and the first combination is the main answer.
function x(p: string): string[] {
  const m = p.match(/\{([^{}]*)\}/);
  if (!m || m.index === undefined) return [p.replace(/\s+/g, " ").replace(/\s+([,.!?;])/g, "$1").trim()];
  const out: string[] = [];
  for (const opt of m[1].split("|")) out.push(...x(p.slice(0, m.index) + opt + p.slice(m.index + m[0].length)));
  return out;
}
function xs(ps: string | string[]): string[] {
  return [...new Set((Array.isArray(ps) ? ps : [ps]).flatMap(x))];
}
const tr = (source: string, answers: string | string[], explanation: string, prompt = "Translate into English."): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "translate", direction: "es-en", prompt, source, answer, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const fb = (sentence: string, answers: string | string[], en: string, explanation: string): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });
const wo = (sentence: string, translation: string, explanation: string, alts?: string[]): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  ...(alts ? { altOrders: alts.map((a) => a.split(" ")) } : {}),
  explanation,
});
const dc = (audio: string, explanation: string): Exercise => ({ type: "dictation", audio, explanation });
const lc = (audio: string, options: string[], explanation: string, question = "What does it mean?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b2-narrative-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U01_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. The four narrative tenses (Narrative Tenses 1 and 2, Contrast Clinic)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Was Doing, Had Done or Had Been Doing?",
    "You will be able to choose between the past simple, past continuous, past perfect and past perfect continuous around one moment in a story, and translate «llevaba + gerundio» correctly.",
    "Recap: one moment, four tenses",
    [
      "Past simple for the events (\"the bus came\"), past continuous for what was in progress at that moment (\"I was reading\"), past perfect for what was already finished (\"the film had started\") and past perfect continuous for an activity that had been going on up to that moment (\"I had been waiting for an hour\").",
      "A Spanish «imperfecto» is not automatically -ing: states (know, have, want, believe) take the past simple, and duration with \"for\" or \"since\" needs \"had been + -ing\", never the past continuous.",
    ],
    [
      ["I was reading when the bus came.", "Estaba leyendo cuando llegó el autobús."],
      ["The film had already started when we sat down.", "La película ya había empezado cuando nos sentamos."],
      ["I had been waiting for an hour when she called.", "Llevaba una hora esperando cuando llamó."],
      ["We had known each other since college.", "Nos conocíamos desde la universidad."],
    ],
    [
      fb("It ___ when we got to the stadium.", "was snowing", "[Estaba nevando] cuando llegamos al estadio.",
        "The snow was already in progress when we arrived: background, so past continuous \"was snowing\". \"It snowed when we got there\" would sound as if it started because we arrived."),
      fb("When I got to the station, the train ___.", ["had already left", "had left", "had already gone", "had gone"], "Cuando llegué a la estación, el tren [ya había salido].",
        "The train left before I arrived, so English needs the flashback tense: \"had (already) left\". *the train already left is the typical Spanish-speaker shortcut."),
      mc("«De niña tenía un gato.» Which is correct?", [
        "As a child, I had a cat.",
        "As a child, I was having a cat.",
        "As a child, I had had a cat.",
        "As a child, I was had a cat.",
      ], "\"Have\" meaning own is a state verb, so the Spanish imperfect «tenía» becomes the past simple \"had\". *I was having a cat treats a state as an action in progress."),
      tr("Mi papá manejaba cuando empezó a llover.", "My {dad|father} was driving when it {started|began} {to rain|raining}.",
        "«Manejaba» is an action in progress interrupted by a short event, so past continuous \"was driving\" + past simple \"started\". «Manejar» is \"drive\"."),
      tr("Cuando entré, mis compañeros estaban comiendo pizza.", "When I {came in|walked in|went in}, my {coworkers|colleagues|classmates} were eating pizza.",
        "The meal was already in progress when I came in: \"were eating\". The short event (\"came in\") is past simple."),
      fb("While I ___ the dishes, my sister was drying them.", "was washing", "Mientras yo [lavaba] los platos, mi hermana los secaba.",
        "Two actions in progress at the same time both take the past continuous: \"was washing\" ... \"was drying\". \"While\" goes before a long action."),
      tr("En esa época trabajaba en un banco.", "{At that time|Back then|In those days}{,|} I {worked|used to work} {in|at|for} a bank.",
        "A long state or situation in the past is past simple (or \"used to\"), not the past continuous. *I was working in a bank sounds temporary, not like a description of your life then."),
      mc("When the doctor finally came in, I ___ for forty minutes.", ["had been waiting", "was waiting", "have been waiting", "waited"],
        "Duration up to a past moment (\"for forty minutes\" until the doctor came in) needs the past perfect continuous. *I was waiting for forty minutes is the classic Spanish-speaker error; \"have been waiting\" measures up to now, not to a past moment."),
      fb("She was out of breath because she ___.", ["had been running", "had been jogging"], "Estaba sin aliento porque [había estado corriendo].",
        "Being out of breath is the visible trace of an earlier activity, so \"had been running\". The activity has just stopped; what we see is its result."),
      tr("Llevaba tres horas estudiando cuando se fue la luz.", "I had been studying for three hours when the {power|electricity|lights} went {out|off}.",
        "«Llevaba + time + gerund» is \"had been + -ing + for + time\". English has no verb like «llevar» here, and *I was studying for three hours is wrong."),
      wo("We had been driving for six hours when the car broke down.", "Llevábamos seis horas manejando cuando el carro se descompuso.",
        "\"Had been + -ing\" first, then \"for\" + the length of time, then the interrupting event in the past simple."),
      fb("When the meeting started, he ___ three of the five reports.", ["had written", "had finished", "had read", "had checked"], "Cuando empezó la reunión, [había escrito] tres de los cinco informes.",
        "When you count finished results (\"three of the five reports\"), use the past perfect simple. *had been writing three reports focuses on the activity and does not go with a number of things completed."),
      mc("Which sentence is correct?", [
        "We had known each other for ten years when we started the company.",
        "We had been knowing each other for ten years when we started the company.",
        "We were knowing each other for ten years when we started the company.",
        "We have known each other for ten years when we started the company.",
      ], "\"Know\" is a state verb: no -ing in any tense. Duration up to a past moment with a state verb is the past perfect simple, \"had known\"."),
      tr("Hacía años que se conocían cuando se casaron.", "They had known each other for {years|many years} when they got married.",
        "«Hacía años que se conocían» is duration up to a past moment with a state verb, so \"had known ... for years\", not *had been knowing. «Casarse» is \"get married\"."),
      lc("Her eyes were red. She had been crying.", [
        "Tenía los ojos rojos. Había estado llorando.",
        "Tenía los ojos rojos. Estaba a punto de llorar.",
        "Tiene los ojos rojos. Está llorando.",
        "Tenía los ojos rojos. Lloró después.",
      ], "\"Had been crying\" explains a past situation (red eyes) with an earlier activity. Listen for the weak \"had been\": /həd bɪn/."),
      dc("The kids were playing outside when the storm started.",
        "\"Were playing\" (background in progress) and \"started\" (the event). \"Were\" is weak and quick: /wər/."),
      fb("I ___ that book for weeks, but I still hadn't finished it.", "had been reading", "[Había estado leyendo] ese libro durante semanas, pero todavía no lo había terminado.",
        "The activity was unfinished and we care about how long: past perfect continuous. \"Had read\" would mean the book was finished, which contradicts the rest of the sentence."),
      tr("Cuando llegué a la fiesta, Marta ya se había ido.", "When I {got to|arrived at} the party, Marta had already {left|gone}.",
        "She left before I arrived: \"had already left\". \"Already\" goes between \"had\" and the participle. Note \"arrive at\" a party, not *arrive to."),
      mt("Match each sentence with what was happening when I arrived.", [
        ["They were eating when I arrived.", "La comida estaba en curso."],
        ["They had eaten when I arrived.", "La comida ya había terminado."],
        ["They had been eating when I arrived.", "Acababan de comer; había platos sucios."],
        ["They ate when I arrived.", "Empezaron a comer al llegar yo."],
      ], "One moment, four timelines: in progress (was eating), finished before (had eaten), going on until just before with visible traces (had been eating), and after it (ate)."),
      fb("The floor was wet because someone ___ it.", ["had been mopping", "had mopped", "had been cleaning", "had cleaned"], "El piso estaba mojado porque alguien [lo había estado trapeando].",
        "The wet floor is a trace of an earlier activity, so \"had been mopping\" fits best; \"had mopped\" is also possible because the action is clearly before the moment."),
      wo("I didn't recognize him because he had changed a lot.", "No lo reconocí porque había cambiado mucho.",
        "The change happened before the moment of not recognizing him, so \"had changed\". American spelling: \"recognize\"."),
      tr("Cuando sonó la alarma, yo ya me había levantado.", "When the alarm {went off|rang}, I had already {gotten up|got up}.",
        "I got up before the alarm: past perfect \"had already gotten up\" (American) or \"had already got up\" (British). An alarm \"goes off\"."),
      dc("He had been working at the bank for twelve years when it closed.",
        "Listen for \"had been working\" + \"for twelve years\": duration up to a past moment. \"Had been\" is fast and unstressed."),
      sp("I had been waiting for an hour when the bus finally came.", "«Llevaba una hora esperando» is \"I had been waiting for an hour\". The event that ends the wait is past simple: \"came\".",
        "Contract and link it: \"I'd been waiting\" /aɪd bɪn ˈweɪtɪŋ/.", "Say it in English: Llevaba una hora esperando cuando por fin llegó el autobús."),
      mc("«Cuando llegué a casa, mi esposo hacía la cena.» Which is correct?", [
        "When I got home, my husband was making dinner.",
        "When I got home, my husband made dinner.",
        "When I got home, my husband had made dinner.",
        "When I got home, my husband was doing the dinner.",
      ], "Dinner was in progress when I arrived: \"was making\". \"Made dinner\" means he started because I arrived, and \"had made\" means it was ready. The collocation is \"make dinner\", not *do the dinner."),
      tr("Ella había estado pintando la cocina toda la mañana y tenía pintura en la ropa.", "She had been painting the kitchen all morning{,|} and she had paint on her clothes.",
        "The paint on her clothes is a trace of a long activity: \"had been painting ... all morning\". \"Had paint\" is possession, a state: past simple."),
      fb("I ___ my keys, so I couldn't get into the apartment.", ["had lost", "had forgotten", "had left"], "[Había perdido] las llaves, así que no pude entrar al departamento.",
        "\"Lose\" is a single short event, so it rarely takes the continuous: \"had lost\", not *had been losing."),
      wo("The phone rang while I was taking a shower.", "Sonó el teléfono mientras me bañaba.",
        "Short event (\"rang\") + \"while\" + long action in progress (\"was taking a shower\")."),
      mc("Which sentence is correct?", [
        "I was tired because I had been working since six.",
        "I was tired because I was working since six.",
        "I was tired because I have been working since six.",
        "I was tired because I had been working from six hours.",
      ], "\"Since six\" measures time up to a past moment, so \"had been working\". The past continuous cannot measure duration, \"have been\" measures up to now, and *from six hours mixes up \"since\" and \"for\"."),
      tr("Llevábamos dos horas caminando y todavía no habíamos encontrado el hotel.", [
        "We had been walking for two hours{,|} and we still hadn't found the hotel.",
        "We had been walking for two hours{,|} and we hadn't found the hotel yet.",
      ], "Two layers: the activity with duration (\"had been walking for two hours\") and a result that hadn't happened (\"still hadn't found\"). \"Still\" goes before \"hadn't\"; \"yet\" goes at the end."),
      tr("No sabía que tenía un hermano.", "I didn't know {that |}{he|she} had a brother.",
        "Both «sabía» and «tenía» are states, so both are past simple: \"didn't know\", \"had\". *I wasn't knowing is a common error."),
      lc("When I arrived, they had lunch.", [
        "Cuando llegué, almorzaron.",
        "Cuando llegué, estaban almorzando.",
        "Cuando llegué, ya habían almorzado.",
        "Cuando llegué, habían estado almorzando.",
      ], "Past simple + past simple = one event after the other: they had lunch after I arrived. For a meal in progress you need \"were having\"; for a finished one, \"had had\"."),
      sp("We had known each other for years, so it wasn't a surprise.", "\"Know\" is a state verb, so duration up to a past moment uses \"had known\", never *had been knowing.",
        "Contract it: \"We'd known\" /wiːd noʊn/.", "Say it in English: Nos conocíamos desde hacía años, así que no fue una sorpresa."),
      tr("Estaba lloviendo, alguien había dejado la ventana abierta y el piso estaba mojado.", "It was raining, someone had left the window open{,|} and the floor was wet.",
        "Three layers in one sentence: background in progress (\"was raining\"), an earlier event (\"had left\") and a state (\"was wet\")."),
      dc("Had you been waiting long when the doctor called you?",
        "A past perfect continuous question: \"Had\" + subject + \"been\" + -ing. \"Had you\" often sounds like /hædʒu/."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Errors, timelines, dialogue and anecdotes (Error Hunt, Transform, Dialogue Lab, Real Mission)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "By the Time, Just, Already and In the End",
    "You will be able to fix the classic story-tense errors, join events with by the time, as soon as and until, place just and already correctly, and finish an anecdote with in the end or eventually.",
    "Recap: order the events, then tell them well",
    [
      "\"By the time\" + past simple, then the past perfect: \"By the time she called, I had finished\". \"Just\" and \"already\" go between \"had\" and the participle, and «acababa de salir» is \"I had just gone out\".",
      "In an anecdote, \"at first\" introduces a situation that changed, \"it turned out that\" brings the surprise, and «al final» is \"in the end\" or \"eventually\", never *at the end (which needs \"of\" + noun).",
    ],
    [
      ["By the time we got there, the store had closed.", "Para cuando llegamos, la tienda ya había cerrado."],
      ["She had just gone out when I called.", "Acababa de salir cuando la llamé."],
      ["It turned out that he had forgotten the tickets.", "Resultó que había olvidado los boletos."],
      ["In the end, we took a taxi.", "Al final tomamos un taxi."],
    ],
    [
      fb("I ___ snow before that trip to Denver.", "had never seen", "[Nunca había visto] nieve antes de ese viaje a Denver.",
        "Looking back from a past moment (the trip) with \"never ... before\" needs the past perfect: \"had never seen\". *I never saw snow before that trip loses the time reference."),
      mc("Which sentence is correct?", [
        "She had written the report before lunch.",
        "She had wrote the report before lunch.",
        "She had write the report before lunch.",
        "She has wrote the report before lunch.",
      ], "The past perfect is \"had\" + past participle: \"written\", not the past simple \"wrote\". Review irregular third forms: gone, seen, written, taken."),
      fb("Suddenly the lights ___ out.", "went", "De repente [se apagaron] las luces.",
        "A sudden, short event is past simple: \"went out\". *Suddenly the lights were going out uses the continuous for a single completed event."),
      tr("No lo conocía muy bien.", "I didn't know him {very well|that well|well}.",
        "«Conocía» is a state, so English uses the past simple \"didn't know\". *I wasn't knowing him is never correct."),
      mc("Which sentence is correct?", [
        "I was in Mexico City last year, and I visited the anthropology museum.",
        "I was in Mexico City last year, and I have visited the anthropology museum.",
        "I was in Mexico City last year, and I was visiting the anthropology museum.",
        "I was in Mexico City last year, and I visit the anthropology museum.",
      ], "Once a story is in finished time (\"last year\"), stay in the past simple. The present perfect cannot go with a finished past story."),
      fb("By the time we got to the airport, our flight ___.", ["had already left", "had left", "had already taken off", "had taken off"], "Para cuando llegamos al aeropuerto, nuestro vuelo [ya había salido].",
        "\"By the time\" + past simple, then the past perfect in the main clause: the flight left before we arrived."),
      tr("Para cuando ella llamó, yo ya había terminado la tarea.", ["By the time she called, I had {already |}finished {my|the} homework.", "By the time she called, I had finished {my|the} homework already."],
        "«Para cuando» is \"by the time\" + past simple (\"called\"); the finished action is past perfect (\"had finished\"). *When she called, I already finished is wrong twice."),
      wo("By the time the guests arrived, we had cleaned the whole house.", "Para cuando llegaron los invitados, ya habíamos limpiado toda la casa.",
        "\"By the time\" + past simple, comma, then the main clause in the past perfect."),
      mc("By the time he ___, the meeting had ended.", ["arrived", "had arrived", "was arriving", "has arrived"],
        "The \"by the time\" clause takes the past simple; only the main clause has the past perfect. Don't put \"had\" in both halves."),
      fb("She ___ when I called her.", ["had just gone out", "had just left"], "[Acababa de salir] cuando la llamé.",
        "«Acababa de» + infinitive is \"had just\" + participle. Never translate it with \"finish\": *she had finished to go out makes no sense."),
      tr("Acabábamos de sentarnos cuando sonó el teléfono.", "We had just sat down when the phone rang.",
        "«Acabábamos de sentarnos» = \"we had just sat down\" (\"sat\" is the participle of \"sit\"). \"Just\" goes between \"had\" and the participle."),
      mc("«Ya habíamos comido.» Which is correct?", ["We had already eaten.", "We had already ate.", "We already have eaten.", "We had eaten yet."],
        "\"Already\" sits between \"had\" and the participle \"eaten\". \"Ate\" is the past simple, not the participle, and \"yet\" is for questions and negatives."),
      fb("They hadn't arrived ___ when we left.", "yet", "[Todavía] no habían llegado cuando nos fuimos.",
        "In negatives and questions, \"yet\" goes at the end of the clause: \"They hadn't arrived yet\"."),
      tr("No me fui hasta que terminé el informe.", "I didn't leave until I {had finished|finished} the report.",
        "With \"until\", the past perfect stresses that the report was complete before I left; the past simple is also correct. English needs no extra negative after \"until\"."),
      tr("En cuanto vi su cara, supe que algo andaba mal.", "As soon as I saw {her|his} face, I knew {that |}something was wrong.",
        "\"As soon as\" + past simple, then past simple: one event right after the other. \"Know\" is a state, so \"knew\", and «andaba mal» is simply \"was wrong\"."),
      dc("As soon as I had sent the email, I regretted it.",
        "\"Had sent\" stresses that the first action was complete. The weak \"had\" after \"I\" sounds like /aɪ həd/ or even \"I'd\"."),
      lc("No way! What did you do next?", [
        "¡No puede ser! ¿Y qué hiciste después?",
        "¡De ninguna manera! ¿Qué vas a hacer?",
        "¡No hay camino! ¿Qué hiciste?",
        "¡Claro que no! ¿Qué estabas haciendo?",
      ], "\"No way!\" is a reaction of surprise («¡No puede ser!», «¡No te creo!»), and \"What did you do next?\" keeps the story going in the past simple."),
      mc("Friend: \"They canceled our flight.\" You: \"Oh no! What ___?\"", ["did you do", "have you done", "had you done", "were you doing"],
        "The story is about a finished trip, so the reaction is in the past simple: \"What did you do?\". *What have you done? sounds like an accusation about the present."),
      tr("Estábamos esperando en la puerta cuando anunciaron que el vuelo se había cancelado.", "We were waiting at the gate when they announced {that |}the flight had been canceled.",
        "Background (\"were waiting\"), main event (\"announced\") and an earlier event in the past perfect passive (\"had been canceled\"). «Puerta» in an airport is \"gate\"."),
      fb("We ___ that trip for months, and then it rained every day.", "had been planning", "[Habíamos estado planeando] ese viaje durante meses, y luego llovió todos los días.",
        "A long activity before the main events of the story: past perfect continuous \"had been planning\". The story then continues in the past simple (\"rained\")."),
      sp("You're kidding! And then what happened?", "Short reactions keep a story alive: \"You're kidding!\", \"Seriously?\", \"And then what happened?\". The question is past simple because the story is finished.",
        "Rising tone on \"kidding\", falling tone on \"happened\".", "React in English: ¡No me digas! ¿Y luego qué pasó?"),
      fb("___ I thought it was a joke, but then I saw his face.", "At first", "[Al principio] pensé que era una broma, pero luego vi su cara.",
        "\"At first\" («al principio») introduces a situation that later changed. \"First\" alone («primero») just starts a list of steps."),
      mc("«Al final perdimos el vuelo.» Which is correct?", [
        "In the end, we missed the flight.",
        "At the end, we missed the flight.",
        "In the end, we lost the flight.",
        "At last, we missed the flight.",
      ], "«Al final» meaning «finalmente» is \"in the end\". \"At the end\" needs \"of\" + noun (\"at the end of the day\"). You \"miss\" a flight, you don't *lose it, and \"at last\" expresses relief, which makes no sense here."),
      fb("It turned out that he ___ next door the whole time.", "had been living", "Resultó que [había estado viviendo] al lado todo el tiempo.",
        "\"It turned out that\" often brings a past perfect explanation; here a long activity, so \"had been living\"."),
      tr("Resultó que el ruido era el gato.", ["The noise turned out to be the cat.", "It turned out {that |}the noise was the cat."],
        "«Resultó que» is \"it turned out that\", or \"turned out to be\" + noun. Don't translate it with *resulted."),
      tr("Al final, después de una hora, encontramos un taxi.", ["{Eventually|In the end|Finally}, after an hour, we found a taxi.", "After an hour, we {eventually|finally} found a taxi."],
        "After a long wait, «al final» is \"eventually\" or \"in the end\". \"Eventually\" never means «eventualmente»."),
      mt("Match each linker with its meaning.", [
        ["at first", "al principio"],
        ["in the end", "al final, finalmente"],
        ["at the end of the movie", "al final de la película"],
        ["eventually", "con el tiempo, por fin"],
        ["all of a sudden", "de repente"],
      ], "\"At the end\" always needs \"of\" + a noun; \"in the end\" and \"eventually\" stand alone. \"Eventually\" is a false friend: it is not «eventualmente»."),
      wo("All of a sudden, the lights went out.", "De repente, se apagaron las luces.",
        "\"All of a sudden\" announces the surprise; the event itself is past simple."),
      dc("It turned out that someone had taken my umbrella by mistake.",
        "\"It turned out that\" + past perfect: the mistake happened before I found out. Listen for the weak \"had\" before \"taken\"."),
      tr("Cuando llegamos al cine, la película ya había empezado y no quedaban asientos.", "When we got to the {movie theater|theater|movies}, the {movie|film} had already started{,|} and there were no seats left.",
        "The film started before we arrived: \"had already started\". «No quedaban asientos» is a state: \"there were no seats left\"."),
      mc("Which sentence is correct?", [
        "I had seen him before, but I didn't remember his name.",
        "I had saw him before, but I didn't remember his name.",
        "I was seeing him before, but I didn't remember his name.",
        "I had seen him before, but I wasn't remembering his name.",
      ], "\"Had\" + participle \"seen\", and \"remember\" is a state verb, so past simple \"didn't remember\"."),
      tr("Para entonces, mis padres ya se habían dormido.", "By then, my parents had already {fallen asleep|gone to sleep|gone to bed}.",
        "\"By then\" looks back from a moment already mentioned and takes the past perfect. «Dormirse» is \"fall asleep\" (participle \"fallen\")."),
      sp("By the time I got to the office, everyone had gone home.", "\"By the time\" + past simple (\"got\"), then the past perfect (\"had gone\").",
        "Say \"everyone'd gone\" or a weak /həd/: the participle \"gone\" carries the meaning.", "Say it in English: Para cuando llegué a la oficina, todos se habían ido a casa."),
      lc("When I arrived, the film had already started.", [
        "Cuando llegué, la película ya había empezado.",
        "Cuando llegué, empezó la película.",
        "Cuando llegué, la película estaba por empezar.",
        "Cuando llegue, la película ya habrá empezado.",
      ], "\"Had already started\": the film started before I arrived. Listen for the weak \"had\" and the participle \"started\"."),
      dc("Diego had never been so happy to see a taxi.",
        "\"Had never been\": an experience up to that moment in the story. \"Been\" is quick and unstressed: /bɪn/."),
      tr("De repente se apagaron las luces y alguien gritó.", "{Suddenly|All of a sudden}, the lights went out{,|} and someone {screamed|shouted|yelled}.",
        "Two quick events one after the other: both past simple. «Apagarse» for lights is \"go out\"."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Past habits, review and the whole unit (Story Detective, Spiral Review, Chain Story, Mastery Check)
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Used To, Would and the Whole Story",
    "You will be able to describe past habits with used to and would, keep the present perfect out of finished stories, and combine all four narrative tenses without the typical Spanish-speaker slips.",
    "Recap: habits, finished time and the full system",
    [
      "\"Used to\" works for past habits and states (\"I used to have a bike\"); \"would\" only for repeated actions (\"we would swim every day\"), never for states. Negatives and questions drop the -d: \"didn't use to\", \"Did you use to...?\". For present habits, say \"usually\".",
      "Finished time (\"yesterday\", \"in 2019\", \"three years ago\") takes the past simple; «vivo aquí desde hace tres años» is \"I've lived here for three years\". Inside a story, the past perfect explains what had happened before.",
    ],
    [
      ["We used to spend every summer at the beach.", "Pasábamos todos los veranos en la playa."],
      ["Every morning, we would go fishing with my uncle.", "Todas las mañanas íbamos a pescar con mi tío."],
      ["I moved to Lima three years ago.", "Me mudé a Lima hace tres años."],
      ["Someone had been sleeping in the room.", "Alguien había estado durmiendo en la habitación."],
    ],
    [
      fb("I ___ him yesterday at the gym.", "saw", "Lo [vi] ayer en el gimnasio.",
        "\"Yesterday\" is finished time, so the past simple: \"saw\". *I have seen him yesterday is still a very common error."),
      mc("When ___ to Canada?", ["did you move", "have you moved", "had you moved", "you moved"],
        "A \"when\" question asks for a finished moment, so it takes the past simple with \"did\": \"When did you move?\". *When have you moved? is wrong."),
      tr("Me mudé aquí hace tres años.", "I moved here three years ago.",
        "«Hace» + time for a point in the past is \"ago\", with the past simple. The time goes before \"ago\": \"three years ago\"."),
      tr("Vivo aquí desde hace tres años.", ["I've lived here for three years.", "I've been living here for three years."],
        "Duration up to now is the present perfect (simple or continuous) + \"for\". *I live here since three years mixes up two errors: the present tense and \"since\" with a period."),
      fb("We ___ in that house for ten years when my dad lost his job.", ["had lived", "had been living"], "[Llevábamos] diez años [viviendo] en esa casa cuando mi papá perdió el trabajo.",
        "Duration up to a past moment: past perfect (\"had lived\") or past perfect continuous (\"had been living\"). The past continuous cannot measure duration."),
      mc("«Suelo cenar tarde.» Which is correct?", [
        "I usually have dinner late.",
        "I use to have dinner late.",
        "I used to have dinner late.",
        "I'm used to have dinner late.",
      ], "There is no present \"use to\". A present habit is \"usually\" + present simple. \"Used to\" means it is no longer true."),
      fb("I ___ coffee, but now I can't live without it.", ["didn't use to drink", "didn't use to like", "never used to drink", "never used to like"], "Antes [no tomaba] café, pero ahora no puedo vivir sin él.",
        "A past habit that has changed: \"used to\". In the negative, \"did\" carries the past, so \"didn't use to\" (no -d)."),
      tr("¿Antes jugabas fútbol?", "Did you use to play {soccer|football}?",
        "Question form: \"Did you use to...?\", with \"use\" and no -d. «Fútbol» is \"soccer\" in American English."),
      mc("Which sentence is correct?", [
        "I lived in Paris for two years.",
        "I use to live in Paris for two years.",
        "I was living in Paris since two years.",
        "I have lived in Paris for two years in 2015.",
      ], "A finished period with a specific length is past simple + \"for\". \"Used to\" doesn't go with a specific duration, \"since\" needs a starting point, and a finished date rules out the present perfect."),
      fb("Every Sunday, my grandmother ___ a huge lunch for the whole family.", ["would make", "used to make", "made", "would cook", "used to cook", "cooked"], "Todos los domingos, mi abuela [preparaba] un almuerzo enorme para toda la familia.",
        "A repeated past action: \"would make\", \"used to make\" or simply \"made\". Not *was making, which is for an action in progress at one moment."),
      mc("My grandfather ___ a small farm near the river.", ["used to have", "would have", "was having", "use to have"],
        "Owning a farm is a state, so \"would\" is impossible here and the continuous is wrong. Use \"used to have\" (or simply \"had\")."),
      tr("De niños, íbamos al lago todos los veranos.", "{As kids|As children|When we were kids|When we were children}, we {used to go|would go|went} to the lake every summer.",
        "A past habit: \"used to go\", \"would go\" or \"went\". *we were going to the lake every summer uses the continuous for a habit."),
      wo("We used to spend every August at my aunt's house.", "Pasábamos todos los agostos en la casa de mi tía.",
        "\"Used to\" + base form sets up the habit. Time expression at the end: \"every August\"."),
      tr("Me levantaba temprano, desayunaba rápido y caminaba a la escuela.", [
        "I {would|used to} get up early, {have|eat} a quick breakfast{,|} and walk to school.",
        "I got up early, {had|ate} a quick breakfast{,|} and walked to school.",
      ], "A series of habits in the imperfect: \"would\" or \"used to\" once, then base forms, or the past simple all the way through. Never *I was getting up."),
      dc("Every morning, we would go down to the river and swim until lunchtime.",
        "\"Would\" is weak here, often /wəd/ or 'd: \"we'd go\". It describes a repeated action, like the Spanish imperfect."),
      fb("When the manager came in, the money ___ from the drawer.", ["had disappeared", "had gone", "had vanished"], "Cuando entró la gerente, el dinero [había desaparecido] del cajón.",
        "The money disappeared before she came in, so the past perfect pushes the event back: \"had disappeared\"."),
      tr("Admitió que había tomado el dinero.", "{He|She} admitted {that |}{he|she} had taken the money.",
        "The taking happened before the admission: past perfect \"had taken\" (participle of \"take\")."),
      lc("The ground was wet. It had been raining all night.", [
        "El suelo estaba mojado. Había estado lloviendo toda la noche.",
        "El suelo estaba mojado. Iba a llover toda la noche.",
        "El suelo está mojado. Ha llovido toda la noche.",
        "El suelo estaba mojado. Llovió después toda la noche.",
      ], "\"Had been raining\" explains a visible trace (the wet ground) with an earlier, long activity."),
      fb("There was mud on his shoes because he ___ in the rain.", "had been walking", "Tenía lodo en los zapatos porque [había estado caminando] bajo la lluvia.",
        "The mud is the trace of a longer activity before that moment: past perfect continuous."),
      mt("Match each Spanish structure with its English version.", [
        ["llevaba dos horas esperando", "I had been waiting for two hours"],
        ["acababa de salir", "I had just gone out"],
        ["hacía años que nos conocíamos", "we had known each other for years"],
        ["me mudé hace tres años", "I moved three years ago"],
        ["vivo aquí desde 2020", "I've lived here since 2020"],
      ], "Each Spanish trap has a fixed English pattern: \"had been + -ing + for\", \"had just + participle\", a simple form for state verbs, \"ago\" with the past simple and \"since\" + a starting point with the present perfect."),
      sp("I used to hate vegetables, but now I love them.", "\"Used to\" marks a past state that is no longer true; \"now\" brings us back to the present simple.",
        "\"Used to\" sounds like /ˈjuːstə/: the d is silent and \"to\" is weak.", "Say it in English: Antes odiaba las verduras, pero ahora me encantan."),
      tr("Antes vivíamos en un departamento, pero ahora tenemos una casa.", "We used to live in an apartment, but now we {have|own} a house.",
        "«Antes» + imperfect for a past situation that has changed is \"used to\". \"Have\" (possession) is a state, so present simple \"have\"."),
      mc("One summer, while we ___ hide-and-seek, my brother found an old key.", ["were playing", "would play", "used to play", "had played"],
        "\"One summer\" switches from habits to a single story, so the background is past continuous. \"Would\" and \"used to\" are only for repeated habits."),
      fb("I ___ past that store a hundred times, but I had never noticed it.", ["had walked", "had gone", "had driven"], "[Había pasado] frente a esa tienda cien veces, pero nunca la había notado.",
        "A number of earlier repetitions before the story moment: past perfect simple, \"had walked\"."),
      tr("Hacía tres años que vivía allí cuando conocí a mi esposa.", "I had {lived|been living} there for three years when I met my wife.",
        "«Hacía tres años que vivía» is duration up to a past moment: \"had lived\" or \"had been living\" + \"for three years\". *I was living there since three years is wrong twice."),
      dc("Someone had been sleeping in my bed, and the door was open.",
        "\"Had been sleeping\": a trace of an earlier activity. Listen for \"been\" as a quick /bɪn/ before the -ing verb."),
      tr("Cuando llegué a casa, mi hermano ya había cenado y estaba viendo la tele.", "When I got home, my brother had already {had|eaten} dinner{,|} and {he |}was watching TV.",
        "Two layers around one moment: dinner finished before (\"had already had dinner\") and TV in progress (\"was watching\"). \"Had had\" is correct: past perfect of \"have dinner\"."),
      mc("\"Have you ever been to Peru?\" \"Yes, I ___ there in 2019.\"", ["went", "have been", "have gone", "had gone"],
        "The experience question uses the present perfect, but once a finished time appears (\"in 2019\"), switch to the past simple. *I have been there in 2019 is wrong."),
      tr("¿Cuándo llegaste?", "When did you {arrive|get here|get in}?",
        "\"When\" questions take the past simple: \"When did you arrive?\". Never *When have you arrived?"),
      wo("I had never flown before, so I was really nervous.", "Nunca había volado antes, así que estaba muy nervioso.",
        "\"Had never\" + participle \"flown\" for experience up to that moment; \"was nervous\" is a state in the past simple."),
      tr("Mi abuelo tenía una tienda y todos los sábados yo lo ayudaba.", "My grandfather {had|used to have|owned} a {store|shop}{,|} and every Saturday I {would help|used to help|helped} him.",
        "Two imperfects, two jobs: a state (\"had\" or \"used to have\", never *would have) and a repeated action (\"would help\", \"used to help\" or \"helped\")."),
      fb("When I opened the door, I realized I ___ my phone in the taxi.", ["had left", "had forgotten"], "Cuando abrí la puerta, me di cuenta de que [había dejado] el celular en el taxi.",
        "Leaving the phone happened before the realization: past perfect. \"Realize\" means «darse cuenta»."),
      sp("In the end, we decided that I had been dreaming.", "\"In the end\" («al final») closes the story; \"had been dreaming\" goes back to an activity before the decision.",
        "Link \"I had been\" as \"I'd been\" /aɪd bɪn/.", "Say it in English: Al final, decidimos que yo había estado soñando."),
      lc("I used to go there every summer.", [
        "Iba allí todos los veranos.",
        "Me acostumbré a ir allí en verano.",
        "Iba a ir allí ese verano.",
        "Voy allí todos los veranos.",
      ], "\"Used to go\" is a past habit, like the Spanish imperfect «iba». It is not «estar acostumbrado» and not a plan («iba a»)."),
      tr("Al final de la película, todos estaban llorando.", "At the end of the {movie|film}, everyone was crying.",
        "Here «al final de» + noun is a point in time, so \"at the end of\". *In the end of the movie is wrong; \"in the end\" stands alone and means «finalmente»."),
      mc("«Al principio no me gustaba la ciudad, pero con el tiempo me enamoré de ella.» Which is correct?", [
        "At first I didn't like the city, but eventually I fell in love with it.",
        "At the first I didn't like the city, but eventually I fell in love with it.",
        "At first I wasn't liking the city, but eventually I fell in love with it.",
        "At first I didn't like the city, but possibly I fell in love with it.",
      ], "\"At first\" (no \"the\"), \"like\" as a state verb in the past simple, and \"eventually\" for «con el tiempo». \"Eventually\" never means «posiblemente»."),
    ],
  ),
];
