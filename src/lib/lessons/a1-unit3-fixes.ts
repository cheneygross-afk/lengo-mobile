// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit3-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { alts, applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, fbIs, keepMeta, mc, mcIs, spIs, trIs, warmUp, type LessonFix } from "./unit-fixes";

// A1 Unit 3 (Present-tense verbs): content fixes from Claude's audit in
// Ricardo's format (ES-A1-U03_CL_2026-11-22). Content only: answer keys,
// accepted answers, item types, wording, warm-ups, summaries and goals.
// See unit-fixes.ts for why many items become choices. Applied to the
// woven lessons before they are split into parts, and again after the
// spoken questions are made.

const FIXES: Record<string, LessonFix> = {
  // L01
  "present-tense-ar-verbs": {
    goal: "conjugate any regular -ar verb for every person, and tell who acts from the ending alone.",
    warmUp: warmUp("Warm-up: ser and the people", "A quick look back at Unit 1. The same people (yo, tú, él, nosotros, ellos) get their own endings in today's verbs.", [
      mc("Which pronoun goes with somos?", ["nosotros", "ellos", "yo", "tú"], "Somos is \"we are\": nosotros somos. Ellos son, yo soy, tú eres. (Unit 1: ser.)"),
      mc("\"Usted ___ de México.\" Which form of ser fits?", ["es", "eres", "soy", "son"], "Usted means \"you\", but it takes the él form: usted es. Today's verbs work the same way: usted habla."),
      mc("\"Son estudiantes.\" Who are students?", ["they", "we", "you (tú)", "I"], "Son goes with ellos and ellas. The verb tells you who, even with no pronoun, and that is the idea of today's lesson."),
    ]),
    items: [
      edit(spIs("Trabajo en una oficina, pero los sábados canto en un grupo."), (e) => ({ ...e, text: "Trabajo en una oficina, pero los sábados canto en una banda.", altAnswers: ["Trabajo en una oficina, pero los sábados canto en un grupo.", "Trabajo en una oficina, pero canto en una banda los sábados."] })),
    ],
  },
  // L02
  "a1r-ar-verbs-in-real-life": {
    goal: "read a planner with no subjects and say who does what from the -ar ending.",
    items: [
      alts(trIs("On Tuesdays I take the bus and walk to school."), ["Los martes yo tomo el autobús y camino a la escuela.", "Los martes tomo el camión y camino a la escuela.", "Los martes yo tomo el camión y camino a la escuela.", "Los martes yo tomo el bus y camino a la escuela.", "Tomo el autobús los martes y camino a la escuela."]),
      alts(trIs("Sábado: mis amigas cocina la cena."), ["Mis amigas cocinan la cena."]),
    ],
  },
  // L03 (and its part 2, L04)
  "a1r-dialogue-what-do-you-do": {
    goal: "answer a tú, usted or ustedes question with the ending that mirrors it (yo -o, nosotros -amos).",
    items: [alts(trIs("Do you (informal) sing? No, but I play the guitar."), ["¿Cantas? No, pero toco guitarra.", "¿Tú cantas? No, pero toco la guitarra.", "¿Tú cantas? No, pero yo toco la guitarra.", "¿Cantas? No, pero yo toco la guitarra."])],
  },
  // L05 (and its part 2, L06)
  "vocabulary-practice-1": {
    goal: "recall the people, house and color words and make them match (amigo, amiga; rojo, rojas).",
    items: [alts(trIs("a purple blanket"), ["una cobija morada", "una frazada morada"])],
  },
  // L07
  "present-tense-er-ir-verbs-1": {
    goal: "conjugate regular -er and -ir verbs, knowing that only nosotros and vosotros tell them apart.",
    warmUp: warmUp("Warm-up: -ar verbs", "A quick look back at -ar verbs. Today's -er and -ir verbs use the same system.", [
      mc("Nosotros ___ en casa. (cocinar)", ["cocinamos", "cocinan", "cocino", "cocinas"], "Nosotros takes -amos: cocinamos. (Lesson: -ar verbs.)"),
      mc("Which form goes with ustedes? (hablar)", ["hablan", "hablas", "hablamos", "habla"], "Ustedes means \"you all\", but it takes the ellos ending: hablan."),
      mc("\"Trabajas mucho.\" Who works a lot?", ["you (tú)", "I", "we", "they"], "-As is the tú ending: trabajas, \"you work\"."),
    ]),
    items: [
      drop(trIs("I eat bread.")),
      drop(trIs("Ellos beben café.")),
      choose("Nosotros ___ en España.", ["vivemos", "viven", "vivo"]),
      alts(trIs("We eat at home and drink water."), ["Comemos en casa y tomamos agua.", "Nosotros comemos en casa y tomamos agua.", "Nosotras comemos en casa y tomamos agua."]),
      alts(trIs("The students (m.) learn Spanish and write letters."), ["Los alumnos aprenden español y escriben cartas."]),
      alts(trIs("You (formal) open the windows."), ["Abre usted las ventanas."]),
      chooseSentence("Ella vive en Lima.", ["Vivemos en Lima.", "Viven en Lima.", "Vive en Lima."]),
      chooseSentence("Nosotros leen el libro.", ["Nosotros lemos el libro.", "Nosotros lee el libro.", "Nosotros leéis el libro."]),
      chooseSentence("You all (Spain) eat a lot.", ["Comís mucho.", "Comemos mucho.", "Como mucho."]),
    ],
  },
  // L08
  "present-tense-er-ir-verbs-2": {
    goal: "use twenty more -er and -ir verbs, picking -emos or -imos from the infinitive.",
    warmUp: warmUp("Warm-up: -er and -ir", "A quick look back at the last lesson before twenty new verbs.", [
      mc("Nosotros ___ en Lima. (vivir)", ["vivimos", "vivemos", "viven", "vivo"], "Vivir is -ir, so nosotros takes -imos: vivimos. (Lesson: -er and -ir verbs, part 1.)"),
      mc("Ella ___ un libro. (leer)", ["lee", "lea", "le", "leen"], "Ella takes -e, so leer keeps both e's: lee."),
      { type: "fill-blank", prompt: "Complete with beber (to drink).", sentence: "Tú ___ mucha agua.", answer: "bebes", explanation: "Tú takes -es for -er and -ir verbs: bebes, vives." },
    ]),
    items: [
      choose("Leemos, ___ cartas y comemos con la familia.", ["escribemos", "escriben", "escribo"]),
      alts(trIs("Ella lee un libro interesante."), ["She is reading an interesting book.", "She's reading an interesting book."]),
      edit(fbIs("Mi padre ___ coches."), (e) => ({ ...e, sentence: "Mi padre ___ carros." })),
      edit(trIs("I share the bedroom with my sister."), (e) => ({ ...e, answer: "Comparto el cuarto con mi hermana.", altAnswers: ["Yo comparto el cuarto con mi hermana.", "Comparto la habitación con mi hermana.", "Comparto la recámara con mi hermana.", "Comparto el dormitorio con mi hermana.", "Yo comparto el dormitorio con mi hermana."] })),
      edit(spIs("Compartimos un piso y recibimos muchas cartas."), (e) => ({ ...e, prompt: "Say it in Spanish: We share an apartment and we receive a lot of letters.", text: "Compartimos un apartamento y recibimos muchas cartas.", altAnswers: ["Compartimos un departamento y recibimos muchas cartas.", "Compartimos un piso y recibimos muchas cartas."] })),
      edit(spIs("Yo bebo agua todos los días."), (e) => ({ ...e, altAnswers: ["Bebo agua todos los días.", "Tomo agua todos los días.", "Yo tomo agua todos los días."] })),
    ],
  },
  // L09
  "a1r-contrast-er-ir": {
    goal: "choose -emos or -imos (and -éis or -ís) from the infinitive, every time.",
    items: [
      edit(mcIs("A new -ir verb: partir"), (e) => ({ ...e, question: e.question.replace("la tarta", "el pastel"), explanation: e.explanation.replace(/la tarta/g, "el pastel") })),
      choose("Nosotros ___ muchos correos.", ["recibemos", "reciben", "recibo"]),
      choose("Nosotros ___ cartas.", ["escribemos", "escriben", "escribís"]),
      choose("Vosotros ___ en Sevilla.", ["vivéis", "viven", "vivimos"]),
      choose("Vosotros ___ café.", ["bebís", "beben", "bebemos"]),
      choose("Nosotros ___ la cena.", ["compartemos", "comparten", "comparto"]),
      chooseSentence("Leemos mucho.", ["Leís mucho.", "Leen mucho.", "Lees mucho."]),
      alts(trIs("We learn Spanish and write emails."), ["Aprendemos español y escribimos correos electrónicos.", "Aprendemos español y escribimos emails."]),
      chooseSentence("We learn Spanish and write emails.", ["Aprendemos español y escribemos correos.", "Aprenden español y escriben correos.", "Aprendemos español y escriben correos."]),
    ],
  },
  // L10
  "stem-changing-verbs-e-ie": {
    goal: "use querer, pensar, preferir, empezar, entender and cerrar, with ie in the boot and e in nosotros.",
    warmUp: warmUp("Warm-up: -er and -ir", "A quick look back before the stem changes. The endings you know stay exactly the same today.", [
      mc("Nosotros ___ cartas. (escribir)", ["escribimos", "escribemos", "escriben", "escribo"], "Escribir is -ir: nosotros escribimos. (Contrast Clinic: -er vs. -ir.)"),
      mc("Ellos ___ libros. (vender)", ["venden", "vendan", "vendemos", "vende"], "Ellos takes -en: venden."),
      mc("Comprender means \"to understand\". How do you say \"I understand\"?", ["Comprendo.", "Comprende.", "Comprendemos.", "Comprenden."], "Comprender is regular: yo comprendo. Today you'll meet entender, which means the same but changes its stem: entiendo."),
    ]),
    items: [
      choose("Ella ___ que la clase es interesante.", ["pensa", "pienso", "piensan"]),
      choose("Nosotros ___ a las nueve.", ["empiezamos", "empiezan", "empezan"]),
      choose("Yo ___ un té, por favor.", ["quero", "queremos", "quiere"]),
      choose("¿Tú ___ el café o el té?", ["preferes", "prefieren", "preferimos"]),
      choose("La tienda ___ a las ocho.", ["cerra", "cierran", "cerramos"]),
      choose("Yo ___ que es fácil.", ["penso", "pensamos", "piensas"]),
      choose("Tú ___ la ventana.", ["cerras", "cierra", "cerramos"]),
      choose("Nosotros ___ el té.", ["prefierimos", "preferemos", "prefieren"]),
      drop(trIs("¿Entiendes la lección?")),
      drop(trIs("Entiendo el problema.")),
      choose("Nosotros no ___ la pregunta.", ["entiendemos", "entienden", "entiendo"]),
      chooseSentence("I want to learn Spanish.", ["Quero aprender español.", "Quiero aprendo español.", "Queremos aprender español."]),
      chooseSentence("We prefer to eat at home.", ["Prefierimos comer en casa.", "Preferemos comer en casa.", "Prefieren comer en casa."]),
      chooseSentence("The movie begins at seven.", ["La película empeza a las siete.", "La película empiezan a las siete.", "La película empezamos a las siete."]),
      chooseSentence("Do you (informal) understand Spanish?", ["¿Entendes español?", "¿Entiendemos español?", "¿Entiendo español?"]),
      chooseSentence("Cierro la ventana.", ["Cierramos la ventana.", "Cierran la ventana.", "Cerran la ventana."]),
      chooseSentence("Queremos bailar.", ["Queren bailar.", "Quieremos bailar.", "Quiere bailar."]),
      edit(spIs("Quiero ir a la playa, pero mis amigos prefieren estar en casa."), (e) => ({ ...e, prompt: "Say it in Spanish: I want to go to the beach, but my friends prefer to eat at home.", text: "Quiero ir a la playa, pero mis amigos prefieren comer en casa.", altAnswers: ["Yo quiero ir a la playa, pero mis amigos prefieren comer en casa."], explanation: "Quiero and prefieren are inside the boot (ie); ir and comer stay in the infinitive after them." })),
    ],
  },
  // L11
  "stem-changing-verbs-o-ue-e-i": {
    goal: "use poder, dormir, volver, jugar, pedir and repetir, with ue or i in the boot and the infinitive's vowel in nosotros.",
    warmUp: warmUp("Warm-up: e → ie", "A quick look back at the boot from the last lesson. Today's verbs use the same boot.", [
      mc("Yo ___ un café. (querer)", ["quiero", "quero", "queremos", "quiere"], "Yo is inside the boot, so the e becomes ie: quiero. (Lesson: e → ie.)"),
      mc("Nosotros ___ a las nueve. (empezar)", ["empezamos", "empiezamos", "empiezan", "empiezo"], "Nosotros is outside the boot, so the e stays: empezamos."),
      mc("La tienda ___ a las ocho. (cerrar)", ["cierra", "cerra", "cerran", "cierramos"], "La tienda is \"it\" (the él form), inside the boot: cierra."),
    ]),
    items: [
      choose("¿A qué hora ___?", ["almorzas", "almorzamos", "almuerzan"]),
      choose("Mis hermanos ___ al baloncesto.", ["jugan", "jugamos", "juega"], { sentence: "Mis hermanos ___ al básquetbol." }),
      choose("En casa, yo ___ el café.", ["servo", "servimos", "sirve"]),
      choose("Nosotros ___ a casa a las seis.", ["vuelvemos", "vuelven", "vuelvo"]),
      choose("Mi hijo ___ al fútbol.", ["juga", "jugamos", "juegan"]),
      choose("Yo siempre ___ agua con la comida.", ["pedimos", "pide", "piden"]),
      {
        find: trIs("Can you help me?"),
        to: (e) => keepMeta(e, { type: "speak", prompt: "Say it in Spanish: \"Can you (informal) repeat the question?\"", text: "¿Puedes repetir la pregunta?", altAnswers: ["¿Tú puedes repetir la pregunta?", "¿Me puedes repetir la pregunta?"], explanation: "Puedes is inside the boot (o → ue), and repetir stays in the infinitive after it." }),
      },
      alts(trIs("I sleep a lot on weekends."), ["Los fines de semana duermo mucho.", "Los fines de semana yo duermo mucho."]),
      chooseSentence("Pido agua.", ["Peden agua.", "Pedimos agua.", "Pide agua."]),
      drop(trIs("Encontramos el libro.")),
      drop(trIs("¿Cuánto cuestan los zapatos?")),
      drop(trIs("How much does the book cost?")),
      choose("El restaurante ___ comida mexicana.", ["serve", "sirven", "servimos"]),
      chooseSentence("Los niños duermen poco, pero nosotros duermimos mucho.", ["Los niños duermen poco, pero nosotros dormemos mucho.", "Los niños duermen poco, pero nosotros duermen mucho.", "Los niños duermen poco, pero nosotros duermemos mucho."]),
      edit(trIs("¿Cuánto costa el billete?"), (e) => ({ ...e, source: "¿Cuánto costa el boleto?", answer: "¿Cuánto cuesta el boleto?", altAnswers: ["¿Cuánto cuesta el billete?"], explanation: (e.explanation as string).replace(/billete/g, "boleto") })),
      alts(spIs("Los sábados juego al tenis, y después pedimos una pizza."), ["Los sábados juego tenis, y después pedimos una pizza.", "Los sábados yo juego al tenis, y después pedimos una pizza."]),
      alts(spIs("Juego al fútbol los sábados."), ["Los sábados juego al fútbol.", "Juego fútbol los sábados.", "Los sábados juego fútbol.", "Yo juego al fútbol los sábados."]),
    ],
  },
  // L12
  "a1r-contrast-stem-changers": {
    goal: "tell the e → ie, o → ue, e → i and u → ue verbs apart, and keep the infinitive's vowel in nosotros.",
    items: [
      choose("Tú ___ muy rápido.", ["pensas", "pensamos", "piensa"]),
      choose("Nosotros ___ al fútbol.", ["juegamos", "juegan", "juego"]),
      choose("Ella ___ un café.", ["pede", "pedimos", "piden"]),
      choose("Yo no ___ las llaves.", ["encontro", "encontramos", "encuentra"]),
      choose("Nosotros ___ un café.", ["pidimos", "pedemos", "piden"]),
      choose("Yo ___ la pregunta.", ["repeto", "repieto", "repetimos"]),
      chooseSentence("They want to play tennis.", ["Queren jugar al tenis.", "Quieren juegan al tenis.", "Quieren juegar al tenis."]),
      choose("Ustedes ___ la puerta.", ["cerran", "cerramos", "cierra"]),
      chooseSentence("Servimos la comida.", ["Serves la comida.", "Sirvimos la comida.", "Sirve la comida."]),
      chooseSentence("They prefer tea, but we prefer coffee.", ["Prefieren té, pero nosotros prefierimos café.", "Preferen té, pero nosotros preferimos café.", "Prefieren té, pero nosotros prefieren café."]),
      alts(trIs("No entiendo. ¿Puedes repetir?"), ["I don't understand. Can you repeat it?", "I don't understand. Could you repeat that?"]),
      edit(mcIs("How do you say 'we find'?"), (e) => ({ ...e, options: ["encontramos", "encuentramos", "encontrimos", "encuentran"], correctIndex: 0, explanation: "Nosotros keeps the o: encontramos. Encuentramos puts the change in nosotros, encontrimos uses an -ir ending on an -ar verb, and encuentran is ellos." })),
    ],
  },
  // L13 (and its part 2, L14)
  "review-adjectives-ar-er-ir-verbs": {
    summary: "No new material: practice adjective agreement and all three regular verb families, mixed together.",
    goal: "conjugate -ar, -er and -ir verbs and make adjectives match, in mixed sentences.",
    items: [
      edit(mcIs("Which adjective forms are correct?"), (e) => ({ ...e, options: e.options.map((o: string) => o.replace("un coche azula", "un carro azula")), explanation: (e.explanation as string).replace(/coche/g, "carro") })),
      edit((e) => e.type === "word-order" && e.words.join(" ").includes("coche"), (e) => ({ ...e, words: e.words.map((w: string) => (w === "coche" ? "carro" : w)), ...(e.altOrders ? { altOrders: e.altOrders.map((o: string[]) => o.map((w) => (w === "coche" ? "carro" : w))) } : {}) })),
      chooseSentence("We learn a lot and we read every day.", ["Aprendemos mucho y lemos todos los días.", "Aprenden mucho y leen todos los días.", "Aprendemos mucho y leen todos los días."]),
      edit(trIs("My friends are hardworking and intelligent."), (e) => ({ ...e, answer: "Mis amigos son trabajadores e inteligentes.", altAnswers: ["Mis amigas son trabajadoras e inteligentes."], explanation: "Both adjectives agree with amigos: trabajadores, inteligentes. Before a word that starts with an i sound, y (and) becomes e: trabajadores e inteligentes." })),
      edit(spIs("Mis amigos son trabajadores y inteligentes."), (e) => ({ ...e, text: "Mis amigos son trabajadores e inteligentes.", explanation: "Both adjectives agree with amigos: trabajadores, inteligentes. Before an i sound, y (and) becomes e." })),
    ],
  },
  // L15
  "a1r-error-hunt-verbs-agreement": {
    goal: "find and fix the three classic slips: an unconjugated verb, an -er ending on an -ir verb, and an adjective that doesn't match.",
    items: [
      chooseSentence("Recibo muchas cartas.", ["Recibemos muchas cartas.", "Reciben muchas cartas.", "Recibes muchas cartas."]),
      alts(trIs("You (informal) speak Spanish and write English."), ["Hablas español y escribes en inglés.", "Tú hablas español y escribes en inglés."]),
    ],
  },
  // L16
  "a1r-spiral-lessons-1-10": {
    title: "Spiral Review: Ser, Agreement and the Three Verb Families",
    goal: "use ser, articles, matching adjectives and all three verb families together, without hints.",
    items: [
      choose("Nosotros ___ en Quito.", ["vivemos", "viven", "vivo"]),
      chooseSentence("Leen y escriben en español.", ["Leemos y escribemos en español.", "Lemos y escribimos en español.", "Leen y escribimos en español."]),
      alts(trIs("Nice to meet you. I'm Carlos, I'm from Peru, and I work in an office."), ["Mucho gusto. Soy Carlos, soy del Perú y trabajo en una oficina.", "Encantado. Soy Carlos, soy de Perú y trabajo en una oficina.", "Encantado. Soy Carlos, soy del Perú y trabajo en una oficina.", "Mucho gusto. Me llamo Carlos, soy del Perú y trabajo en una oficina.", "Encantado. Me llamo Carlos, soy de Perú y trabajo en una oficina."]),
    ],
  },
};

export function withUnit3Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit3SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
