// Synced from cheneygross-afk/lengo:src/lib/placementTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./lessons/types";

// The placement test: a short two-stage adaptive test, shared by the
// website (PlacementTestRunner) and the app (PlacementTestScreen), which
// gets this file through the content sync.
//
//   Stage 1 (the router): 12 questions, two per level from A1 to C2, in
//   rising difficulty. The number right picks a band of two adjacent
//   levels (routeBand).
//   Stage 2: the six questions of each of the band's two levels (12), so
//   24 questions in all, whoever takes it.
//
// The recommendation is the first level with gaps: the band's lower level
// if it fails, else its upper level if that fails, else the level above
// the band (or, above C2, nothing left: masteredEverything). A level in
// the band passes with STAGE2_PASS of its six stage-2 questions right.
//
// Every level's questions mix grammar, vocabulary, a short reading, a
// listening item (played with the course's text-to-speech) and typed
// answers, and test only what the course teaches at that level -- see
// src/lib/lessons/units.ts for each level's units. A1/A2 questions are
// asked in English, B1 and up in Spanish, as in the lessons.
//
// Progress is saved after every answer (PLACEMENT_PROGRESS_KEY: localStorage
// on the web, AsyncStorage in the app) so a learner can leave and resume.

export type PlacementLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type PlacementSkill = "grammar" | "vocabulary" | "reading" | "listening";

export type PlacementQuestion = Exercise & {
  /** Stable id: answers and saved progress are keyed by it. */
  id: string;
  level: PlacementLevel;
  skill: PlacementSkill;
  // Slug of the lesson (within this question's level) that teaches the
  // concept being tested, so the results screen can link a missed
  // question straight to it.
  relatedLessonSlug: string;
};

export const PLACEMENT_LEVELS: PlacementLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const mc = (
  id: string,
  level: PlacementLevel,
  skill: PlacementSkill,
  relatedLessonSlug: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): PlacementQuestion => ({ id, level, skill, relatedLessonSlug, type: "multiple-choice", question, options, correctIndex, explanation });

const listen = (
  id: string,
  level: PlacementLevel,
  relatedLessonSlug: string,
  audio: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): PlacementQuestion => ({
  id,
  level,
  skill: "listening",
  relatedLessonSlug,
  type: "listen-choose",
  audio,
  question,
  options,
  correctIndex,
  explanation,
});

// A typed answer, asked as a translation (owner rule): `en` is the English
// sentence with [brackets] around the words the blank stands for.
const typed = (
  id: string,
  level: PlacementLevel,
  skill: PlacementSkill,
  relatedLessonSlug: string,
  sentence: string,
  answer: string,
  en: string,
  explanation: string,
  altAnswers?: string[]
): PlacementQuestion => ({
  id,
  level,
  skill,
  relatedLessonSlug,
  type: "fill-blank",
  prompt: level === "A1" || level === "A2" ? "How do you say the bold words in Spanish?" : "¿Cómo se dicen en español las palabras en negrita?",
  sentence,
  answer,
  en,
  ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
  explanation,
});

// ---- Stage 1: the router (2 per level, easiest first) ------------------

export const ROUTER_QUESTIONS: PlacementQuestion[] = [
  mc(
    "r-a1-estar",
    "A1",
    "grammar",
    "ser-vs-estar-drill-1",
    "La sopa ___ muy caliente ahora mismo.",
    ["es", "está", "son", "están"],
    1,
    "How hot the soup is right now is a temporary condition, so it takes estar: \"La sopa está muy caliente.\""
  ),
  listen(
    "r-a1-family",
    "A1",
    "question-words-drill-1",
    "Tengo dos hermanos y una hermana.",
    "Listen. How many brothers and sisters does the speaker have?",
    ["Three", "Two", "One", "Four"],
    0,
    "\"Tengo dos hermanos y una hermana\" -- two brothers and one sister, so three."
  ),
  typed(
    "r-a2-preterite",
    "A2",
    "grammar",
    "preterite-drill-1",
    "Ayer ___ tacos con mis amigos.",
    "comí",
    "Yesterday [I ate] tacos with my friends.",
    "Ayer (yesterday) marks a finished action, so the preterite: comer → comí."
  ),
  mc(
    "r-a2-imperfect",
    "A2",
    "grammar",
    "preterite-vs-imperfect-drill-1",
    "Cuando yo ___ niño, ___ en Madrid.",
    ["era / vivía", "fui / viví", "era / viví", "fui / vivía"],
    0,
    "Being a child and living somewhere are ongoing states in the past, so both take the imperfect: era, vivía."
  ),
  mc(
    "r-b1-subjunctive",
    "B1",
    "grammar",
    "subjunctive-wishes-doubt-emotion-drill-1",
    "Espero que tú ___ venir a la fiesta.",
    ["puedes", "puedas", "podrás", "podías"],
    1,
    "Esperar que + otro sujeto pide subjuntivo: espero que puedas venir."
  ),
  listen(
    "r-b1-si",
    "B1",
    "si-clauses-drill-1",
    "Si mañana hace buen tiempo, iremos a la playa con los niños.",
    "Escucha. ¿Qué harán si hace buen tiempo?",
    ["Irán a la playa con los niños", "Se quedarán en casa", "Irán al cine con los niños", "Llevarán a los niños al colegio"],
    0,
    "«Si mañana hace buen tiempo, iremos a la playa con los niños»: una condición real con si + presente."
  ),
  typed(
    "r-b2-si-tuviera",
    "B2",
    "grammar",
    "hypothetical-si-clauses-drill-1",
    "Si yo ___ más tiempo, aprendería a tocar la guitarra.",
    "tuviera",
    "If I [had] more time, I would learn to play the guitar.",
    "Una condición irreal en el presente lleva imperfecto de subjuntivo: si tuviera (o tuviese)… aprendería.",
    ["tuviese"]
  ),
  mc(
    "r-b2-relative",
    "B2",
    "grammar",
    "subjunctive-adjective-clauses-drill-1",
    "Busco un piso que ___ cerca del trabajo.",
    ["está", "esté", "estaba", "estará"],
    1,
    "El piso aún no se conoce (puede que no exista), así que la oración de relativo va en subjuntivo: que esté."
  ),
  mc(
    "r-c1-concessive",
    "C1",
    "grammar",
    "concessive-aunque-1",
    "Digan lo que ___, no pienso cambiar de opinión.",
    ["dicen", "digan", "dirán", "dijeron"],
    1,
    "Es una fórmula concesiva universal que repite el verbo en subjuntivo: digan lo que digan, pase lo que pase."
  ),
  mc(
    "r-c1-dequeismo",
    "C1",
    "grammar",
    "verbos-preposicionales-drill-1",
    "En un texto cuidado, ¿qué frase es correcta?",
    ["Pienso de que tienes razón.", "Estoy seguro de que vendrá.", "Me acuerdo que lo dijiste.", "Insisto de que te quedes."],
    1,
    "Se está seguro de algo, así que «seguro de que». «Pienso de que» es dequeísmo (se piensa algo), «me acuerdo que» es queísmo (acordarse de) e «insisto de que» lleva la preposición equivocada (insistir en)."
  ),
  mc(
    "r-c2-desmentir",
    "C2",
    "vocabulary",
    "debate-persuasion-1",
    "El ministro ___ ayer la noticia: «Es completamente falsa; nunca me reuní con ellos».",
    ["desmintió", "refutó", "desestimó", "rebatió"],
    0,
    "Desmentir es declarar falsa una información. Refutar y rebatir son contradecir un argumento con razones, y desestimar es rechazar una petición o un recurso."
  ),
  mc(
    "r-c2-firme",
    "C2",
    "vocabulary",
    "legal-administrative-spanish-part-1-1",
    "«La sentencia ya es firme.» Esto significa que…",
    ["ya no se puede recurrir", "el juez ya la ha firmado", "es muy severa", "todavía puede cambiar en apelación"],
    0,
    "Una sentencia firme es la que ya no admite recurso: no se puede apelar y debe cumplirse."
  ),
];

// ---- Stage 2: six per level ---------------------------------------------

export const LEVEL_QUESTIONS: Record<PlacementLevel, PlacementQuestion[]> = {
  A1: [
    mc(
      "a1-soy",
      "A1",
      "grammar",
      "ser-vs-estar-drill-1",
      "How do you say \"I am a teacher\"?",
      ["Estoy profesor.", "Soy profesor.", "Tengo profesor.", "Hay profesor."],
      1,
      "A profession is what someone is, so it takes ser: \"Soy profesor.\""
    ),
    typed(
      "a1-hablamos",
      "A1",
      "grammar",
      "present-tense-verbs-drill-1",
      "Nosotros ___ español en casa.",
      "hablamos",
      "We [speak] Spanish at home.",
      "Regular -ar verbs end in -amos for nosotros: hablar → hablamos."
    ),
    typed(
      "a1-hay",
      "A1",
      "vocabulary",
      "tener-ir-hacer-hay-drill-1",
      "___ tres libros en la mesa.",
      "Hay",
      "[There are] three books on the table.",
      "\"There is\" and \"there are\" are both hay."
    ),
    listen(
      "a1-time",
      "A1",
      "numbers-time-drill-1",
      "Son las ocho y media de la mañana.",
      "Listen. What time is it?",
      ["8:30 in the morning", "8:15 in the morning", "7:30 in the morning", "8:30 in the evening"],
      0,
      "\"Las ocho y media de la mañana\" is half past eight in the morning."
    ),
    mc(
      "a1-reading",
      "A1",
      "reading",
      "question-words-drill-1",
      "Read: \"Me llamo Lucía. Soy de Chile, pero vivo en Madrid. Trabajo en un hospital y me gusta mucho leer.\" Where does Lucía live?",
      ["In Madrid", "In Chile", "In a hospital", "In a library"],
      0,
      "\"Soy de Chile, pero vivo en Madrid\": she is from Chile but lives in Madrid. She works in a hospital."
    ),
    typed(
      "a1-gustan",
      "A1",
      "grammar",
      "gustar-drill-1",
      "A mi hermana le ___ los perros.",
      "gustan",
      "My sister [likes] dogs.",
      "Gustar agrees with the thing that is liked. Los perros is plural, so gustan."
    ),
  ],
  A2: [
    typed(
      "a2-viajar",
      "A2",
      "grammar",
      "future-tense-drill-1",
      "Mañana nosotros ___ a Perú.",
      "viajaremos",
      "Tomorrow we [will travel] to Peru.",
      "For a plan, viajaremos (future), vamos a viajar (ir a + infinitive) and the present viajamos (a fixed arrangement, like \"we're travelling tomorrow\") are all correct.",
      ["vamos a viajar", "viajamos"]
    ),
    mc(
      "a2-las",
      "A2",
      "grammar",
      "object-pronouns-drill-1",
      "¿Tienes las llaves? —Sí, ___ tengo aquí.",
      ["lo", "la", "los", "las"],
      3,
      "Las llaves is feminine plural, so the direct object pronoun is las."
    ),
    mc(
      "a2-durante",
      "A2",
      "vocabulary",
      "por-vs-para-drill-1",
      "Trabajó ___ dos años en esa empresa antes de cambiar de trabajo.",
      ["para", "durante", "desde", "hasta"],
      1,
      "Durante says how long something lasted (or leave the preposition out: trabajó dos años). Desde marks a starting point, hasta an end point and para a purpose or deadline."
    ),
    listen(
      "a2-market",
      "A2",
      "preterite-drill-1",
      "El sábado pasado fui al mercado y compré fruta para toda la semana.",
      "Listen. What did the speaker do last Saturday?",
      ["Went to the market and bought fruit", "Is going to the market on Saturday", "Buys fruit every Saturday", "Worked at the market"],
      0,
      "\"El sábado pasado fui al mercado y compré fruta\": fui and compré are preterite, things done once last Saturday."
    ),
    mc(
      "a2-reading",
      "A2",
      "reading",
      "preterite-vs-imperfect-drill-1",
      "Read: \"De niño, vivía en un pueblo pequeño. Todos los veranos íbamos al río con mis primos. Un verano, mi primo Juan se cayó al agua y mi padre lo sacó.\" What happened only once?",
      ["Juan fell into the water", "They went to the river", "He lived in a small village", "He spent the summers with his cousins"],
      0,
      "Se cayó and sacó are preterite: one event. Vivía and íbamos are imperfect: how things were and what used to happen."
    ),
    typed(
      "a2-mas-caro",
      "A2",
      "grammar",
      "comparisons-superlatives-drill-1",
      "Este coche es ___ que el otro.",
      "más caro",
      "This car is [more expensive] than the other one.",
      "Más + adjective + que: más caro que."
    ),
  ],
  B1: [
    mc(
      "b1-no-creo",
      "B1",
      "grammar",
      "subjunctive-wishes-doubt-emotion-drill-1",
      "No creo que Marta ___ razón.",
      ["tiene", "tenga", "tendrá", "tenía"],
      1,
      "«No creo que» expresa duda, así que pide subjuntivo: no creo que tenga razón."
    ),
    typed(
      "b1-todavia",
      "B1",
      "grammar",
      "present-past-perfect-drill-1",
      "Todavía ___ la tarea.",
      "no he terminado",
      "I still [haven't finished] the homework.",
      "Con todavía no y una acción que llega hasta ahora se usa el pretérito perfecto: no he terminado.",
      ["no he acabado", "no he hecho"]
    ),
    typed(
      "b1-si-llueve",
      "B1",
      "grammar",
      "si-clauses-drill-1",
      "Si llueve mañana, ___ en casa.",
      "nos quedamos",
      "If it rains tomorrow, [we'll stay] at home.",
      "Después de si + presente, la consecuencia puede ir en presente, en futuro o con ir a: nos quedamos, nos quedaremos, nos vamos a quedar.",
      ["nos quedaremos", "nos vamos a quedar", "vamos a quedarnos"]
    ),
    listen(
      "b1-alegro",
      "B1",
      "subjunctive-wishes-doubt-emotion-drill-1",
      "Me alegro mucho de que tu hermana esté mejor. ¿Ya salió del hospital?",
      "Escucha. ¿Qué siente la persona que habla?",
      ["Alegría porque la hermana está mejor", "Preocupación porque la hermana sigue enferma", "Tristeza porque tiene que ir al hospital", "Enfado porque nadie la llamó"],
      0,
      "«Me alegro mucho de que tu hermana esté mejor»: se alegra. Alegrarse de que pide subjuntivo."
    ),
    mc(
      "b1-reading",
      "B1",
      "reading",
      "passive-voice-possessive-pronouns-drill-1",
      "Lee: «Se alquila piso en el centro. Dos habitaciones, cocina equipada. No se admiten mascotas. Interesados, llamar por las tardes.» ¿Qué dice el anuncio?",
      ["No se puede vivir allí con un perro", "Hay que llamar por las mañanas", "El piso tiene tres habitaciones", "El piso está fuera de la ciudad"],
      0,
      "«No se admiten mascotas»: no se permiten animales. Hay que llamar por las tardes y el piso, en el centro, tiene dos habitaciones."
    ),
    typed(
      "b1-podrias",
      "B1",
      "grammar",
      "conditional-tense-drill-1",
      "¿___ ayudarme con esto?",
      "Podrías",
      "[Could you] help me with this?",
      "El condicional suaviza una petición: ¿podrías ayudarme? (o ¿podría?, de usted).",
      ["Podría"]
    ),
  ],
  B2: [
    mc(
      "b2-cuando",
      "B2",
      "grammar",
      "subjunctive-adverbial-clauses-drill-1",
      "Te llamaré cuando ___ a casa.",
      ["llego", "llegue", "llegaré", "llegaba"],
      1,
      "Cuando + una acción futura pide subjuntivo: cuando llegue (nunca «cuando llegaré»)."
    ),
    typed(
      "b2-hubiera-sabido",
      "B2",
      "grammar",
      "conditional-perfect-pluperfect-subjunctive-drill-1",
      "Si ___ la verdad, te lo habría dicho.",
      "hubiera sabido",
      "If I [had known] the truth, I would have told you.",
      "Una condición irreal en el pasado lleva pluscuamperfecto de subjuntivo: si hubiera (o hubiese) sabido… habría dicho.",
      ["hubiese sabido"]
    ),
    mc(
      "b2-reported",
      "B2",
      "grammar",
      "reported-speech-drill-1",
      "Ella me dijo: «Vendré mañana». → Ella me dijo que ___ al día siguiente.",
      ["vendrá", "vendría", "viene", "vino"],
      1,
      "En estilo indirecto con un verbo en pasado, el futuro pasa a condicional: vendré → vendría."
    ),
    listen(
      "b2-aunque",
      "B2",
      "advanced-connectors-emphasis-drill-1",
      "Aunque el hotel era caro, no nos arrepentimos: las vistas compensaban cualquier precio.",
      "Escucha. ¿Qué opinan del hotel?",
      ["Valió la pena a pesar del precio", "Era barato, pero feo", "Se arrepienten de haberlo pagado", "No tenía buenas vistas"],
      0,
      "«Aunque el hotel era caro, no nos arrepentimos: las vistas compensaban cualquier precio»: valió la pena."
    ),
    mc(
      "b2-reading",
      "B2",
      "reading",
      "advanced-connectors-emphasis-drill-1",
      "Lee: «Fue mi hermana quien encontró al perro, no yo; yo solo lo llevé al veterinario.» ¿Quién encontró al perro?",
      ["La hermana", "El narrador", "El veterinario", "Nadie lo encontró"],
      0,
      "La oración hendida «fue mi hermana quien…» destaca quién lo hizo: la hermana."
    ),
    typed(
      "b2-volvio",
      "B2",
      "vocabulary",
      "verbs-of-change-drill-1",
      "Con los años, mi abuelo ___ muy desconfiado.",
      "se volvió",
      "Over the years, my grandfather [became] very distrustful.",
      "Volverse expresa un cambio de carácter profundo, a menudo involuntario: se volvió desconfiado.",
      ["se ha vuelto", "se fue volviendo"]
    ),
  ],
  C1: [
    mc(
      "c1-por-muy",
      "C1",
      "grammar",
      "concessive-aunque-1",
      "Por muy cansado que ___, termina el informe hoy.",
      ["estás", "estés", "estarás", "estuvieras"],
      1,
      "«Por muy + adjetivo + que» es concesiva y, referida al presente, va en presente de subjuntivo: por muy cansado que estés."
    ),
    typed(
      "c1-publicacion",
      "C1",
      "vocabulary",
      "nominalization-drill-1",
      "Tras la ___ de los resultados, la empresa cambió de estrategia.",
      "publicación",
      "After the [publication] of the results, the company changed its strategy.",
      "La nominalización (publicar → la publicación) condensa la información y es típica del registro formal."
    ),
    mc(
      "c1-conjecture",
      "C1",
      "grammar",
      "future-conditional-conjecture-1",
      "—¿Por qué no habrá venido Ana? —No sé, ___ algún problema con el coche.",
      ["tenga", "habrá tenido", "ha tenido", "tuvo"],
      1,
      "Para suponer algo sobre un pasado reciente se usa el futuro compuesto: habrá tenido. «Ha tenido» o «tuvo» lo afirmarían, y no encaja después de «no sé»."
    ),
    listen(
      "c1-no-es-que",
      "C1",
      "subjunctive-advanced-nuances-drill-1",
      "No es que la propuesta me parezca mal; lo que pasa es que llega en el peor momento posible.",
      "Escucha. ¿Qué piensa la hablante de la propuesta?",
      ["No la rechaza por su contenido, sino por el momento", "Le parece una propuesta mala", "Cree que llega demasiado tarde para ella", "Le parece perfecta para este momento"],
      0,
      "«No es que + subjuntivo» niega una razón para dar la verdadera: el problema no es la propuesta, sino el momento."
    ),
    mc(
      "c1-reading",
      "C1",
      "reading",
      "advanced-discourse-markers-1",
      "Lee: «El proyecto es viable desde el punto de vista técnico. Ahora bien, su coste supera con creces el presupuesto disponible, de modo que, en definitiva, no puede aprobarse este año.» ¿Cuál es la conclusión del texto?",
      ["El proyecto no se aprobará este año por su coste", "El proyecto no es viable técnicamente", "El presupuesto disponible es suficiente", "El proyecto se aprobará con algunos cambios"],
      0,
      "«Ahora bien» introduce la objeción (el coste) y «en definitiva» la conclusión: no puede aprobarse este año."
    ),
    mc(
      "c1-gerundio",
      "C1",
      "grammar",
      "gerundio-vs-infinitivo-drill-1",
      "¿Qué frase evita el gerundio de posterioridad, que la norma desaconseja?",
      [
        "El avión despegó a las ocho, aterrizando en Lima a las dos.",
        "El avión despegó a las ocho y aterrizó en Lima a las dos.",
        "El avión despegó a las ocho, llegando a Lima seis horas después.",
        "Despegó el avión a las ocho, aterrizando a las dos en Lima.",
      ],
      1,
      "El gerundio no debe expresar una acción posterior a la del verbo principal. Lo correcto es coordinar dos verbos: despegó… y aterrizó."
    ),
  ],
  C2: [
    mc(
      "c2-capa-sayo",
      "C2",
      "vocabulary",
      "everyday-idioms-1",
      "«Ese político siempre hace de su capa un sayo.» Significa que…",
      ["hace lo que quiere sin dar cuentas a nadie", "se viste con mucha elegancia", "cambia de opinión según le conviene", "ahorra todo lo que puede"],
      0,
      "«Hacer de su capa un sayo» es actuar con total libertad, a su antojo, sin consultar ni rendir cuentas."
    ),
    typed(
      "c2-volando",
      "C2",
      "vocabulary",
      "proverbs-sayings-1",
      "Más vale pájaro en mano que ciento ___.",
      "volando",
      "A bird in the hand is worth two [in the bush].",
      "El refrán español es «Más vale pájaro en mano que ciento volando»: más vale lo seguro que mucho por conseguir."
    ),
    mc(
      "c2-anterior",
      "C2",
      "grammar",
      "historical-narrative-1",
      "«Apenas hubo amanecido, los soldados abandonaron el campamento.» ¿Qué expresa «hubo amanecido»?",
      ["Una acción inmediatamente anterior a otra, en registro literario", "Una acción que se repetía cada mañana", "Una suposición sobre el pasado", "Una acción que no llegó a ocurrir"],
      0,
      "El pretérito anterior (hubo + participio), tras apenas, en cuanto o no bien, marca una acción inmediatamente anterior a otra pasada. Hoy es casi exclusivo de la lengua escrita y literaria."
    ),
    listen(
      "c2-puntual",
      "C2",
      "euphemisms-indirect-1",
      "Hombre, lo que se dice puntual, no eres: la reunión empezó hace una hora.",
      "Escucha. ¿Qué quiere decir el hablante?",
      ["Que la otra persona ha llegado muy tarde", "Que la otra persona es muy puntual", "Que la reunión aún no ha empezado", "Que él mismo ha llegado tarde"],
      0,
      "«Lo que se dice puntual, no eres» es una atenuación irónica: dice con suavidad que la otra persona llega muy tarde."
    ),
    mc(
      "c2-arrendatario",
      "C2",
      "vocabulary",
      "legal-administrative-spanish-part-2-1",
      "En un contrato de alquiler, «el arrendatario» es…",
      ["quien alquila la vivienda para vivir en ella", "el dueño de la vivienda", "el notario que da fe del contrato", "el agente inmobiliario"],
      0,
      "El arrendatario toma la vivienda en alquiler; el arrendador es el propietario que la cede."
    ),
    mc(
      "c2-reading",
      "C2",
      "reading",
      "euphemisms-indirect-1",
      "Lee: «La compañía ha anunciado un ajuste de plantilla para adecuar su estructura a la nueva coyuntura del mercado.» ¿Qué ha anunciado en realidad?",
      ["Despidos", "Nuevas contrataciones", "Subidas de sueldo", "Un traslado de oficinas"],
      0,
      "«Ajuste de plantilla» es un eufemismo habitual de despidos; «adecuar su estructura a la nueva coyuntura» lo justifica sin nombrarlo."
    ),
  ],
};

/** Stage-2 questions right (of a level's six) for that level to pass. */
export const STAGE2_PASS = 4;
/** Every learner answers this many: the router plus two levels' sets. */
export const PLACEMENT_TOTAL = ROUTER_QUESTIONS.length + 2 * LEVEL_QUESTIONS.A1.length;

/** The two adjacent levels stage 2 tests. */
export type PlacementBand = [PlacementLevel, PlacementLevel];

// Router score (of 12) → band. Chance alone on the eight multiple-choice
// router questions averages about 2, so a true beginner lands in A1-A2;
// each band then needs roughly the router questions up to its lower
// level right, plus a few above it.
const BAND_CUTOFFS: [minCorrect: number, band: PlacementBand][] = [
  [11, ["C1", "C2"]],
  [9, ["B2", "C1"]],
  [7, ["B1", "B2"]],
  [5, ["A2", "B1"]],
  [0, ["A1", "A2"]],
];

export function routeBand(routerCorrect: number): PlacementBand {
  return BAND_CUTOFFS.find(([min]) => routerCorrect >= min)![1];
}

/** Answers so far: question id → answered correctly. */
export type PlacementAnswers = Record<string, boolean>;

/** Router questions right, or null while stage 1 is unfinished. */
function routerScore(answers: PlacementAnswers): number | null {
  if (!ROUTER_QUESTIONS.every((q) => q.id in answers)) return null;
  return ROUTER_QUESTIONS.filter((q) => answers[q.id]).length;
}

/** The band stage 2 uses, once the router is done. */
export function placementBand(answers: PlacementAnswers): PlacementBand | null {
  const score = routerScore(answers);
  return score === null ? null : routeBand(score);
}

/** Every question this learner gets, in order, as far as is known: the
 * router, then (once the router is done) the band's two levels. */
export function placementQuestions(answers: PlacementAnswers): PlacementQuestion[] {
  const band = placementBand(answers);
  return band ? [...ROUTER_QUESTIONS, ...LEVEL_QUESTIONS[band[0]], ...LEVEL_QUESTIONS[band[1]]] : ROUTER_QUESTIONS;
}

/** The next unanswered question, its position (0-based) and stage, or null when the test is done. */
export function nextPlacementQuestion(
  answers: PlacementAnswers
): { question: PlacementQuestion; index: number; stage: 1 | 2 } | null {
  const questions = placementQuestions(answers);
  const index = questions.findIndex((q) => !(q.id in answers));
  if (index === -1) return null;
  return { question: questions[index], index, stage: index < ROUTER_QUESTIONS.length ? 1 : 2 };
}

export function placementDone(answers: PlacementAnswers): boolean {
  return nextPlacementQuestion(answers) === null;
}

// ---- Saved progress -------------------------------------------------------

export const PLACEMENT_PROGRESS_KEY = "deepend-placement-progress";

export type PlacementProgress = { version: 2; answers: PlacementAnswers; updatedAt: number };

const KNOWN_IDS = new Set([...ROUTER_QUESTIONS, ...Object.values(LEVEL_QUESTIONS).flat()].map((q) => q.id));

/** Saved progress read back from storage, or null if there is none worth
 * resuming (nothing answered, an old format, or a finished test). */
export function normalizePlacementProgress(raw: unknown): PlacementProgress | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (r.version !== 2 || !r.answers || typeof r.answers !== "object") return null;
  const answers: PlacementAnswers = {};
  for (const [id, v] of Object.entries(r.answers as Record<string, unknown>)) {
    if (KNOWN_IDS.has(id) && typeof v === "boolean") answers[id] = v;
  }
  if (!Object.keys(answers).length || placementDone(answers)) return null;
  return { version: 2, answers, updatedAt: typeof r.updatedAt === "number" ? r.updatedAt : 0 };
}

// ---- Scoring --------------------------------------------------------------

export type PlacementLevelStatus =
  /** Below the band: the router placed the learner above it. */
  | "passed-routing"
  /** In the band, with STAGE2_PASS or more right. */
  | "passed"
  /** In the band, with fewer right. */
  | "gaps"
  /** Above the band: only the router's questions were asked. */
  | "not-reached";

export type PlacementLevelResult = {
  level: PlacementLevel;
  /** Right and asked, router and stage 2 together. */
  correct: number;
  total: number;
  status: PlacementLevelStatus;
  passed: boolean;
};

export type PlacementScore = {
  results: PlacementLevelResult[];
  band: PlacementBand;
  recommendedLevel: PlacementLevel;
  // True only when the band was C1-C2 and both passed: there's no level
  // above to recommend, so the UI points to C2 for polish.
  masteredEverything: boolean;
  correct: number;
  total: number;
};

/** The result of a finished test (answers to every question asked). */
export function scorePlacementTest(answers: PlacementAnswers): PlacementScore {
  const band = placementBand(answers) ?? routeBand(0);
  const [lo, hi] = band.map((l) => PLACEMENT_LEVELS.indexOf(l));
  const asked = placementQuestions(answers);
  const results = PLACEMENT_LEVELS.map((level, i): PlacementLevelResult => {
    const qs = asked.filter((q) => q.level === level);
    const correct = qs.filter((q) => answers[q.id]).length;
    let status: PlacementLevelStatus;
    if (i < lo) status = "passed-routing";
    else if (i > hi) status = "not-reached";
    else status = LEVEL_QUESTIONS[level].filter((q) => answers[q.id]).length >= STAGE2_PASS ? "passed" : "gaps";
    return { level, correct, total: qs.length, status, passed: status === "passed" || status === "passed-routing" };
  });
  const firstGap = results.find((r) => r.status === "gaps");
  const recommendedLevel = firstGap ? firstGap.level : PLACEMENT_LEVELS[Math.min(hi + 1, PLACEMENT_LEVELS.length - 1)];
  return {
    results,
    band,
    recommendedLevel,
    masteredEverything: !firstGap && hi === PLACEMENT_LEVELS.length - 1,
    correct: asked.filter((q) => answers[q.id]).length,
    total: asked.length,
  };
}

export type MissedQuestion = { question: PlacementQuestion; index: number };

// Every question the learner got wrong, whether or not its level passed:
// a passing score still means one gap, and each links to its lesson.
export function getMissedQuestions(answers: PlacementAnswers): MissedQuestion[] {
  return placementQuestions(answers)
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => question.id in answers && !answers[question.id]);
}

/** A one-line label for a question (results lists). */
export function placementQuestionText(q: PlacementQuestion): string {
  switch (q.type) {
    case "fill-blank":
      return q.en ?? q.sentence;
    case "translate":
      return q.source;
    case "multiple-choice":
    case "multi-select":
    case "listen-choose":
      return q.question;
    default:
      return q.explanation;
  }
}
