// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u03-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u03 (past perfect, narrative tenses, past perfect continuous): a short recap, then graded practice.

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
  slug: `en-b1-narrative-tenses-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U03_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Past perfect, narrative tenses, sequencers
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Had Done, Was Doing, Did",
    "You will be able to use \"had\" + participle for the earlier of two past events, mix it with the past simple and past continuous in a story, and order events with sequencers.",
    "Recap: three pasts, three jobs",
    [
      "In a story, the past simple tells the main events (\"I opened the door\"), the past continuous the background in progress (\"it was raining\"), and the past perfect an event that happened even earlier (\"someone had taken my umbrella\"). If you would say «había» + participle in Spanish, you need \"had\" + participle in English.",
      "\"Had\" is the same for every person and takes the third form of the verb: \"had gone\", never *had went. Use \"in the end\" for «al final» (finalmente), \"at the end of\" + noun for the last part of something, and remember that \"eventually\" means «al final», not «de vez en cuando».",
    ],
    [
      ["When I got to the office, the meeting had already started.", "Cuando llegué a la oficina, la reunión ya había empezado."],
      ["I was walking home when it started to snow.", "Volvía a casa caminando cuando empezó a nevar."],
      ["She had never eaten sushi before that night.", "Nunca había comido sushi antes de esa noche."],
      ["We got lost twice, but in the end we found the hotel.", "Nos perdimos dos veces, pero al final encontramos el hotel."],
    ],
    [
      fb("When I got to the airport, my flight ___.", ["had already left", "had already taken off", "had left", "had already gone"], "Cuando llegué al aeropuerto, mi vuelo [ya había salido].",
        "The flight left first, then I arrived. The earlier action takes \"had\" + participle. \"Already\" goes between \"had\" and the participle."),
      mc("Which sentence is correct?", [
        "When I got home, my roommate had already gone to bed.",
        "When I got home, my roommate already went to bed.",
        "When I got home, my roommate has already gone to bed.",
        "When I got home, my roommate had already went to bed.",
      ], "Your roommate went to bed before you arrived, so the past perfect: \"had already gone\". *Already went sounds like it happened after you arrived, \"has gone\" is the present perfect, and *had went uses the past simple instead of the participle."),
      fb("By the time we got to the store, it ___.", "had closed", "Para cuando llegamos a la tienda, [había cerrado].",
        "\"By the time\" + past simple (\"we got\"), and the action that was already finished takes the past perfect: \"had closed\". Never *until we got."),
      fb("I realized I ___ my passport at home.", ["had left", "had forgotten"], "Me di cuenta de que [había dejado] el pasaporte en casa.",
        "You left the passport before you realized it, so \"had left\". \"Leave, left, left\": the past and the participle are the same."),
      mt("Match each past perfect form with its Spanish meaning.", [
        ["had gone", "se había ido"],
        ["had seen", "había visto"],
        ["had written", "había escrito"],
        ["had taken", "había tomado"],
        ["had forgotten", "se le había olvidado"],
        ["had flown", "había volado"],
      ], "After \"had\", always the third form: gone, seen, written, taken, forgotten, flown. *Had went, *had saw and *had wrote are the classic mistakes."),
      tr("Cuando abrí el refrigerador, alguien se había comido mi pastel.", "When I opened the {fridge|refrigerator}, someone had eaten my cake.",
        "Someone ate the cake first, then you opened the fridge: \"had eaten\". \"Eat, ate, eaten\": the participle is \"eaten\", never *had ate."),
      tr("Acababa de acostarme cuando sonó el timbre.", "I had just {gone to bed|lain down|gotten into bed|got into bed} when the {doorbell|bell} rang.",
        "«Acababa de» = \"had just\" + participle. The interrupting event takes the past simple: \"rang\"."),
      tr("Nunca había manejado en la nieve antes.", "I had never driven in {the snow|snow} before.",
        "\"Had never... before\" is typical for first experiences in the past. \"Drive, drove, driven\". «Manejar» = \"drive\"."),
      mc("Which question is correct?", [
        "Had you met her before the party?",
        "Did you had met her before the party?",
        "Had you meet her before the party?",
        "Did you have met her before the party?",
      ], "Past perfect questions put \"had\" before the subject. There is no \"did\" in this tense, and the verb is the participle (\"met\")."),
      tr("Estaba enojada porque su novio se había olvidado de su aniversario.", "She was {angry|mad|upset} because her boyfriend had forgotten {their|her} anniversary.",
        "\"Because\" + past perfect gives the earlier reason for a past situation. «Olvidarse de» = \"forget\" (no \"of\")."),
      wo("By the time I woke up, everyone had left.", "Para cuando me desperté, todos se habían ido.",
        "\"By the time\" + past simple, then the past perfect for what was already finished."),
      mc("What does \"When we arrived, the concert started\" mean?", [
        "Llegamos y entonces empezó el concierto.",
        "Cuando llegamos, el concierto ya había empezado.",
        "El concierto estaba empezando cuando llegamos.",
        "No llegamos al concierto.",
      ], "Two past simples = one after the other: we arrived, then it started. If the concert had started earlier, English needs \"had started\". One tense changes the order of events."),
      lc("When we arrived, the concert had started.", [
        "Cuando llegamos, el concierto ya había empezado.",
        "Cuando llegamos, empezó el concierto.",
        "Cuando llegamos, el concierto estaba por empezar.",
        "Llegamos antes de que empezara el concierto.",
      ], "\"Had started\" = it started before we arrived, so we missed the beginning."),
      fb("I ___ a shower when someone knocked on the door.", ["was taking", "was having"], "[Me estaba duchando] cuando alguien tocó la puerta.",
        "The long action in progress takes the past continuous; the short action that interrupts it takes the past simple (\"knocked\")."),
      fb("___ I was jogging in the park, I saw an old friend.", ["While", "When"], "[Mientras] corría en el parque, vi a un viejo amigo.",
        "\"While\" usually introduces the longer action in progress: \"While I was jogging\". \"When\" is also possible here."),
      tr("Mientras yo lavaba los platos, mis hijos veían una película.", "While I was {washing|doing} the dishes, my {kids|children} were watching a {movie|film}.",
        "Two actions in progress at the same time: both in the past continuous. The Spanish imperfect («lavaba», «veían») becomes \"was/were\" + -ing here because they are actions in progress."),
      mc("Which sentence is correct?", [
        "I knew the answer, but I was too nervous to speak.",
        "I was knowing the answer, but I was too nervous to speak.",
        "I had been knowing the answer, but I was too nervous to speak.",
        "I was know the answer, but I was too nervous to speak.",
      ], "\"Know\" is a state verb, so no -ing: «sabía» = \"I knew\". The Spanish imperfect does not always become the past continuous."),
      tr("Cuando era niña, vivía en un pueblo pequeño.", ["When I was a {child|girl|little girl|kid}, I {lived|used to live} in a small {town|village}.", "I {lived|used to live} in a small {town|village} when I was a {child|girl|little girl|kid}."],
        "«Vivía» is a state, not an action in progress, so English uses the past simple (\"I lived\") or \"used to\", never *I was living for your whole childhood."),
      tr("Cuando entré en la oficina, mi jefe estaba hablando por teléfono.", "When I {went into|walked into|came into|entered} the office, my boss was {talking|speaking} on the phone.",
        "My entrance is the short event (past simple); the phone call was already in progress (past continuous)."),
      fb("When I got to the party, Ana ___. Someone said she was tired.", ["had left", "had gone", "had gone home", "had already left"], "Cuando llegué a la fiesta, Ana [se había ido]. Alguien dijo que estaba cansada.",
        "She wasn't there anymore, so she left BEFORE you arrived: \"had left\". \"Left\" alone would mean she left when you arrived, and \"was leaving\" that she was walking out at that moment."),
      fb("We wanted to go camping, but ___ we stayed at a hotel.", ["in the end", "eventually"], "Queríamos ir de campamento, pero [al final] nos quedamos en un hotel.",
        "«Al final» meaning «finalmente», with nothing after it, is \"in the end\". \"Eventually\" (after a long time or many problems) also works."),
      fb("Everyone clapped ___ of the speech.", "at the end", "Todos aplaudieron [al final] del discurso.",
        "«Al final de» + noun = \"at the end of\". *In the end of the speech is a very common mistake."),
      mc("How do you say «Eventualmente trabajo los sábados» (= de vez en cuando)?", [
        "Occasionally I work on Saturdays.",
        "Eventually I work on Saturdays.",
        "At the end I work on Saturdays.",
        "In the end I work on Saturdays.",
      ], "\"Eventually\" is a false friend: it means «al final», «con el tiempo». For «de vez en cuando» use \"occasionally\" or \"from time to time\"."),
      tr("Al principio no entendía nada, pero ahora me encanta la clase.", "{At first|In the beginning}{,|} I didn't understand anything, but now I love the class.",
        "\"At first\" = «al principio», and it suggests that things changed later. Don't confuse it with \"first\" (primero), the first step in a list."),
      wo("Suddenly, the car in front of us stopped.", "De repente, el carro de adelante frenó.",
        "\"Suddenly\" introduces a surprising short event in the past simple."),
      dc("I had just paid the bill when my friends arrived.",
        "\"Had just paid\" = «acababa de pagar». Listen for the short \"had\": without it, the order of events is different."),
      dc("While we were waiting for the bus, it started to snow.",
        "\"While\" + past continuous for the background; past simple for the new event (\"started\")."),
      sp("I'd never seen the ocean before that trip.", "\"I'd\" here is \"I had\", because a participle follows (\"seen\"). With a base verb (\"I'd see\") it would be \"would\".",
        "Say \"I'd\" as one short sound /aɪd/ and stress \"never\" and \"ocean\".", "Say it in English: Nunca había visto el mar antes de ese viaje."),
      sp("First we visited the castle. Then we had lunch by the river.", "\"First\" and \"then\" move the story forward, one event after another, in the past simple.",
        "Short pause after \"castle\"; stress \"First\" and \"Then\".", "Say it in English: Primero visitamos el castillo. Luego comimos junto al río."),
      tr("Mi hermana me contó que había reprobado el examen.", "My sister told me {that |}she had failed {the|her} exam.",
        "Reported news about an earlier event: \"told me (that) she had failed\". The failing happened before the telling, so the past perfect."),
      mc("Which sentence is correct?", [
        "She had gone home before I called.",
        "She had went home before I called.",
        "She has gone home before I called.",
        "She had go home before I called.",
      ], "\"Had\" + participle: \"had gone\". *Had went is the most common error with irregular verbs."),
      tr("Ya había cenado, así que solo pedí un café.", "I had already {had dinner|eaten|eaten dinner}{,|} so I {only ordered|just ordered} a coffee.",
        "\"Had already had dinner\" is correct: the first \"had\" is the auxiliary, the second is the verb \"have\" (dinner). Dinner came first, ordering the coffee later."),
      tr("Hacía frío y yo no había traído chaqueta.", "It was cold{,|} and I hadn't {brought|taken} a {jacket|coat}.",
        "Background state in the past simple (\"It was cold\"), earlier action in the negative past perfect (\"hadn't brought\"). Weather uses \"it was\", not *it made cold."),
      lc("When I called Lucas, he was leaving the house.", [
        "Cuando llamé a Lucas, estaba saliendo de casa.",
        "Cuando llamé a Lucas, ya había salido de casa.",
        "Cuando llamé a Lucas, salió de casa.",
        "Lucas salió de casa antes de que yo lo llamara.",
      ], "\"Was leaving\" = he was in the middle of it at that moment. \"Had left\" would mean he was already gone; \"left\" that he went out after your call."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Past perfect continuous, timelines, errors, anecdotes + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Had Been Doing & Telling Anecdotes",
    "You will be able to say «llevaba una hora esperando» with \"had been\" + -ing, put a whole story on a timeline, fix the classic past-tense errors and tell a short anecdote.",
    "Recap: had been + -ing and the story timeline",
    [
      "The past perfect continuous (\"had been\" + -ing) is an activity that lasted up to a past moment: \"We had been waiting for an hour when the bus came\" = «llevábamos una hora esperando». It also explains what you could see: \"Her eyes were red because she had been crying\". For numbers and state verbs, use the simple: \"had written ten emails\", \"had known her for years\".",
      "Timeline: earlier event = past perfect, main event = past simple, background in progress = past continuous. In an anecdote, \"at the time\" is «por aquel entonces», \"two days before\" counts back from the story (\"ago\" counts back from today), and \"embarrassed\" is «avergonzado», never «embarazada».",
    ],
    [
      ["They had been arguing for hours when the neighbors called.", "Llevaban horas discutiendo cuando llamaron los vecinos."],
      ["His shirt was dirty because he had been painting.", "Tenía la camisa sucia porque había estado pintando."],
      ["I was living in Lima at the time.", "Por aquel entonces vivía en Lima."],
      ["I was so embarrassed that I left early.", "Me dio tanta vergüenza que me fui temprano."],
    ],
    [
      fb("We ___ for forty minutes when the waiter finally came.", "had been waiting", "[Llevábamos] cuarenta minutos [esperando] cuando por fin vino el mesero.",
        "«Llevábamos + tiempo + gerundio» = \"had been\" + -ing + \"for\". It is the present perfect continuous moved one step back in time."),
      fb("His clothes were wet because he ___ in the rain.", ["had been walking", "had been running", "had been standing", "had been playing"], "Tenía la ropa mojada porque [había estado caminando] bajo la lluvia.",
        "A visible result at a past moment (wet clothes) explained by an earlier activity: \"had been\" + -ing."),
      mc("Which sentence is correct?", [
        "She had been living in Rome for a year when she met Marco.",
        "She was living in Rome since a year when she met Marco.",
        "She had been live in Rome for a year when she met Marco.",
        "She has been living in Rome for a year when she met Marco.",
      ], "Up to a past moment (when she met Marco) = \"had been\" + -ing + \"for\". \"Has been\" connects with now, not with the past, and *since a year is wrong in any tense."),
      tr("Llevaba dos horas manejando cuando el carro se descompuso.", "{I|He|She} had been driving for two hours when the car broke down.",
        "«Llevaba + tiempo + gerundio» = \"had been\" + -ing. The interruption is in the past simple: \"broke down\" («se descompuso»)."),
      tr("Hacía meses que estudiaba para ese examen.", "I had been {studying|preparing} for that {exam|test} for months.",
        "«Hacía X que + imperfecto» = \"had been\" + -ing + \"for X\". Note the two \"for\"s: \"study for an exam\" and \"for months\"."),
      fb("How long ___ there when the bus came?", ["had you been waiting", "had you been standing"], "¿Cuánto tiempo [llevabas esperando] ahí cuando llegó el autobús?",
        "Question: \"How long had you been\" + -ing? \"Had\" goes before the subject; there is no \"did\"."),
      tr("Mi hijo estaba agotado porque había estado jugando al fútbol toda la tarde.", "My son was {exhausted|really tired|very tired} because he had been playing soccer {all afternoon|the whole afternoon}.",
        "The past perfect continuous explains a past state (exhausted) with a long earlier activity. «Fútbol» is \"soccer\" in American English."),
      mc("By lunchtime she ___ fifteen emails.", ["had written", "had been writing", "was writing", "has been writing"],
        "A number (fifteen emails) = a completed amount, so the simple past perfect: \"had written\". The continuous does not count results."),
      fb("I ___ the whole book, so I knew how it ended.", ["had read", "had finished"], "[Había leído] el libro entero, así que sabía cómo terminaba.",
        "A finished result (the whole book) = past perfect simple. \"Had been reading\" would focus on the activity, not on finishing it."),
      tr("Teníamos ese perro desde hacía diez años.", "We had had that dog for ten years.",
        "\"Have\" for possession is a state verb: no -ing. «Teníamos... desde hacía» = \"had had... for\". Yes, \"had had\" is correct: auxiliary + participle of \"have\"."),
      mc("When the movie started, we ___ our popcorn. (It was already gone.)", ["had finished", "were finishing", "finished", "have finished"],
        "The popcorn was gone before the movie started: earlier event = past perfect. \"Were finishing\" = in the middle of it; \"finished\" = at that moment or just after."),
      mt("Match each tense with its job in a story.", [
        ["past simple", "el hecho principal de la historia"],
        ["past continuous", "la acción en curso, el fondo"],
        ["past perfect", "algo que pasó antes"],
        ["past perfect continuous", "una actividad larga que llegó hasta ese momento"],
      ], "Ask where each action is on the timeline: on the main moment, around it, before it, or a long bar that reaches it."),
      tr("Martin estaba buscando su cartera cuando llamó su esposa. La había dejado en el taxi.", "Martin was looking for his wallet when his wife called. He had left it in the {taxi|cab}.",
        "The wallet was lost first, but we mention it last, so it moves to the past perfect. That is the main job of the past perfect: telling events out of order without confusion."),
      wo("They had been dating for a year when they got engaged.", "Llevaban un año saliendo cuando se comprometieron.",
        "\"Had been\" + -ing + \"for\" + a period, then \"when\" + past simple for the main event."),
      fb("They ___ all the cookies before we got home.", "had eaten", "[Se habían comido] todas las galletas antes de que llegáramos.",
        "\"Eat, ate, eaten\": after \"had\", the participle \"eaten\", never *had ate."),
      fb("I ___ the wrong train, so I was late for the interview.", ["had taken", "took"], "[Había tomado] el tren equivocado, así que llegué tarde a la entrevista.",
        "\"Take, took, taken\": \"had taken\", never *had took. Here the order is clear with \"so\", so the past simple \"took\" is also correct."),
      tr("Me dio muchísima vergüenza.", ["I was {so|really|very} embarrassed.", "I felt {so|really|very} embarrassed."],
        "«Me dio vergüenza» = \"I was embarrassed\". English uses \"be\" + adjective; *it gave me shame is not English."),
      mc("How do you say «Mi prima está embarazada»?", [
        "My cousin is pregnant.",
        "My cousin is embarrassed.",
        "My cousin is embarrassing.",
        "My cousin is ashamed.",
      ], "«Embarazada» = \"pregnant\". \"Embarrassed\" is a famous false friend: it means «avergonzado»."),
      fb("It was the most ___ day of my life.", "embarrassing", "Fue el día más [vergonzoso] de mi vida.",
        "-ing describes the situation (\"embarrassing\"); -ed describes how you feel (\"embarrassed\")."),
      tr("Por aquel entonces trabajaba en un restaurante en Miami.", ["I was working {in|at} a restaurant in Miami at the time.", "At the time{,|} I was working {in|at} a restaurant in Miami.", "I worked {in|at} a restaurant in Miami at the time."],
        "\"At the time\" = «por aquel entonces» (not «a tiempo», which is \"on time\"). Anecdotes set the scene with the past continuous."),
      tr("Justo entonces me di cuenta de que había dejado la cartera en casa.", "Just then{,|} I realized {that |}I had left my wallet at home.",
        "\"Just then\" = «justo entonces». You realized at that moment (past simple), and leaving the wallet happened earlier (past perfect)."),
      lc("Did I ever tell you about the time I locked myself out?", [
        "¿Alguna vez te conté la vez que me quedé afuera sin llaves?",
        "¿Alguna vez has cerrado la puerta con llave?",
        "¿Te conté que voy a cambiar la cerradura?",
        "¿Alguna vez te quedaste encerrado en casa?",
      ], "\"Did I ever tell you about the time...?\" is a classic way to start an anecdote. \"Lock yourself out\" = quedarte fuera sin llaves."),
      dc("When I came back, the window was open and my laptop had disappeared.",
        "Main moment: \"came back\". Background state: \"was open\". Earlier event: \"had disappeared\"."),
      dc("It had been snowing for hours, so the roads were closed.",
        "\"Had been snowing for hours\" = a long activity up to a past moment, which explains the result (closed roads)."),
      mc("Read: \"When Ana called Pablo at nine, he had left the office.\" Was Pablo in the office at nine?", [
        "No, he had already left.",
        "Yes, he left after the call.",
        "Yes, he was leaving at that moment.",
        "We can't know.",
      ], "\"Had left\" puts his leaving before the call, so at nine he was already gone. \"He left\" would mean he left after the call."),
      lc("The kitchen smelled of smoke. Someone had been cooking.", [
        "La cocina olía a humo. Alguien había estado cocinando.",
        "La cocina huele a humo. Alguien está cocinando.",
        "La cocina olía a humo. Alguien iba a cocinar.",
        "La cocina olió a humo cuando alguien empezó a cocinar.",
      ], "\"Had been cooking\" explains a past result (the smell) with an earlier activity."),
      sp("We had been walking for hours when we finally found the hotel.", "\"Had been walking for hours\" (long activity) + \"when\" + past simple (\"found\").",
        "\"Had been\" is fast and weak: \"'d bin\". Stress \"hours\" and \"hotel\".", "Say it in English: Llevábamos horas caminando cuando por fin encontramos el hotel."),
      sp("In the end, my neighbor lent me some money.", "\"In the end\" gives the final result of the story: «al final».",
        "Stress \"end\", \"neighbor\" and \"money\".", "Say it in English: Al final, mi vecino me prestó dinero."),
      tr("Buscamos el hotel durante una hora y al final lo encontramos.", ["We looked for the hotel for an hour{,|} and {eventually|in the end|finally} we found it.", "We looked for the hotel for an hour{,|} and we {eventually|finally} found it."],
        "«Al final» after a long search = \"eventually\" or \"in the end\". Not *at the end, which needs \"of\" + noun."),
      tr("Lo conocía bien porque habíamos trabajado juntos.", "I knew him well because we had worked together.",
        "Trap: «conocía» is a state, so \"I knew\", never *I was knowing. The earlier reason takes the past perfect: \"had worked\"."),
      tr("Cuando llegué, todos estaban bailando y alguien había roto un vaso.", "When I {arrived|got there}, everyone was dancing{,|} and someone had broken a glass.",
        "All three pasts: \"arrived\" (main moment), \"was dancing\" (in progress), \"had broken\" (earlier). \"Everyone\" takes a singular verb: \"was\"."),
      tr("Llevábamos media hora en la fila cuando cerraron la taquilla.", "We had been {waiting |standing |}in line for half an hour when they closed the {ticket office|box office}.",
        "«Llevábamos + tiempo» = \"had been\" (+ -ing) + \"for\". *We carried half an hour is a word-for-word translation. \"In line\" = «en la fila»."),
      wo("At the end of the trip, we were exhausted.", "Al final del viaje, estábamos agotados.",
        "\"At the end of\" + noun for the last part of something. *In the end of the trip is wrong."),
      mc("In a story about last summer, which sentence is correct?", [
        "I had met her two days before.",
        "I had met her two days ago.",
        "I have met her two days before.",
        "I met her since two days.",
      ], "In a story, \"before\" or \"earlier\" counts back from the story's moment. \"Ago\" counts back from today, so it doesn't fit inside a past story."),
    ],
  ),
];
