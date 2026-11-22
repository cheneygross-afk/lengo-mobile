// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit5-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { alts, applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, fbIs, mc, mcIs, spIs, trIs, warmUp, type Ex, type LessonFix } from "./unit-fixes";

// A1 Unit 5 (Ser vs. estar): content fixes from Claude's audit in Ricardo's
// format (ES-A1-U05_CL_2026-11-22). Content only. See unit-fixes.ts for why
// gerunds are checked with choices (escribendo, leiendo, pidendo, comendo
// pass the checker as typos). Telling the time is Unit 6, so the scored
// items here use other uses of ser instead.

const matchingHas = (left: string) => (e: Ex) => e.type === "matching" && e.pairs.some((p) => p.left === left);

const FIXES: Record<string, LessonFix> = {
  // L01
  "a1r-word-web-jobs": {
    goal: "say what people do with ser and the right job word for a man or a woman, with no un or una.",
    warmUp: warmUp("Warm-up: everyday irregulars", "A quick look back at Unit 4 before the job words.", [
      mc("\"Yo ___ dos hermanos.\" (tener)", ["tengo", "tieno", "tiene", "tenemos"], "Tener has -go in yo: tengo. (Unit 4.)"),
      mc("\"I know Ana.\"", ["Conozco a Ana.", "Sé a Ana.", "Conosco a Ana.", "Conozco Ana."], "A person is conocer, with a in front: conozco a Ana. (Unit 4.)"),
      mc("\"I do my homework.\"", ["Hago la tarea.", "Haco la tarea.", "Hace la tarea.", "Hago a la tarea."], "Hacer → hago in yo. (Unit 4.)"),
    ]),
    items: [
      drop(mcIs("Odd one out")),
      drop(trIs("Mi prima es periodista.")),
      drop((e) => e.type === "word-order" && e.words[0] === "Los" && e.words[1] === "ingenieros"),
      edit(trIs("My aunt is a writer."), (e) => ({ ...e, altAnswers: [] })),
      edit(fbIs("Un ___ escribe libros."), (e) => ({ ...e, explanation: "Escritor (writer) comes from escribir (to write). For a woman, add -a to the consonant: una escritora." })),
      edit(spIs("Es una abogada muy buena."), (e) => ({ ...e, explanation: "An adjective (muy buena) brings the article back: es una abogada muy buena. Without it: es abogada." })),
      edit(mcIs("Which job word stays the same"), (e) => ({ ...e, options: e.options.map((o: string) => (o === "camarero" ? "mesero" : o)), explanation: "Words in -ista never change: el recepcionista, la recepcionista. The others do: mesera (-o → -a), pintora (consonant + a), panadera (-o → -a)." })),
    ],
  },
  // L02
  "ser-vs-estar-1": {
    goal: "choose ser for what someone is (job, origin, traits) and estar for how and where they are right now.",
    warmUp: warmUp("Warm-up: jobs with ser", "A quick look back at the job words. Today you add estar.", [
      mc("\"My brother is a nurse.\"", ["Mi hermano es enfermero.", "Mi hermano es un enfermero.", "Mi hermano es enfermera.", "Mi hermano enfermero."], "Ser + a bare job word, with no article. (Lesson: jobs.)"),
      mc("\"She is a teacher.\"", ["Es profesora.", "Es profesor.", "Es una profesora.", "Es profesoro."], "Profesor ends in a consonant, so a woman adds -a: profesora. No article."),
      mc("\"Somos ___.\" (we're students)", ["estudiantes", "estudiantas", "unos estudiantes", "estudiante"], "Estudiante doesn't change for a woman; the plural adds -s."),
    ]),
    text: [
      [", what they're like, and the time.", ", and what they're like."],
      ["Son las tres.", "Es muy simpática."],
      ["It's three o'clock.", "She's very nice."],
      ["(time takes ser)", "(personality)"],
      ["(identity, job, origin, basic traits, time)", "(identity, job, origin, basic traits)"],
    ],
    items: [
      edit(trIs("Están las cinco."), (e) => ({ ...e, source: "Mis abuelos están de Bolivia.", answer: "Mis abuelos son de Bolivia.", altAnswers: [], explanation: "Origin always takes ser: son de Bolivia, whoever it is." })),
      edit(fbIs("Yo ___ en casa ahora."), (e) => ({ ...e, explanation: "Where you are right now takes estar, and yo → estoy." })),
    ],
  },
  // L03
  "ser-vs-estar-2": {
    goal: "use estar with twenty feeling words, ser with personality words, and tell bored from boring and ready from clever.",
    warmUp: warmUp("Warm-up: ser or estar?", "A quick look back at Part 1 before the new words.", [
      mc("\"La tienda ___ lejos.\"", ["está", "es", "son", "estás"], "Where a place is: estar. (Part 1.)"),
      mc("\"Mi padre ___ de Chile.\"", ["es", "está", "son", "estamos"], "Origin: ser. (Part 1.)"),
      mc("\"Hoy ___ cansada.\" (I)", ["estoy", "soy", "está", "es"], "Tired today is a state right now: estoy. (Part 1.)"),
    ]),
    items: [
      drop(fbIs("Nosotros ___ felices hoy.")),
      drop(matchingHas("a profession")),
      drop((e) => e.type === "translate" && e.direction === "es-en" && e.source.startsWith("El café está caliente")),
      edit(spIs("La clase es aburrida."), (e) => ({ ...e, explanation: "What the class is like takes ser: es aburrida (boring). Estoy aburrido would be \"I'm bored\"." })),
      edit((e) => e.type === "write" && e.modelAnswer.includes("Cádiz"), (e) => ({ ...e, modelAnswer: e.modelAnswer.replace("Cádiz", "Cartagena") })),
    ],
  },
  // L04
  "a1r-mission-describe-a-photo": {
    goal: "describe a photo: who people are and what they're like with ser, how they feel and where they are with estar.",
    items: [
      edit(spIs("Esta es mi prima Clara. Es muy divertida."), (e) => ({ ...e, explanation: "Who she is and what she's like both take ser: esta es mi prima, es muy divertida." })),
    ],
  },
  // L05
  "ser-vs-estar-mastery-check": {
    goal: "get ser and estar right in new sentences without help, including events, muerto and the words that change meaning.",
    text: [["identity, job, origin, personality and looks, the time, and where an event takes place", "identity, job, origin, personality and looks, and where an event takes place"]],
    items: [
      edit(matchingHas("nationality"), (e) => ({ ...e, pairs: e.pairs.map((p: { left: string; right: string }) => (p.left === "time and dates" ? { left: "personality", right: "ser" } : p)), explanation: "Lasting facts about who someone is (nationality, personality) use ser; temporary conditions and feelings use estar." })),
      edit(fbIs("___ la una de la tarde."), (e) => ({ ...e, sentence: "Mi hermana ___ muy alta.", answer: "es", en: "My sister [is] very tall.", explanation: "Height is a lasting trait, so ser: es alta." })),
      edit(spIs("Es la una de la tarde."), (e) => ({ ...e, prompt: "Say it in Spanish: \"My sister is very tall\"", text: "Mi hermana es muy alta.", altAnswers: [], explanation: "Height is a lasting trait, so ser: es muy alta." })),
      edit(trIs("Son las dos y el banco es cerrado."), (e) => ({ ...e, source: "El banco es muy grande, pero hoy es cerrado.", answer: "El banco es muy grande, pero hoy está cerrado.", altAnswers: ["El banco es muy grande pero hoy está cerrado."], explanation: "Size is a trait (es grande, already right); closed today is a state, so estar: está cerrado." })),
      edit(trIs("The keys are in the car."), (e) => ({ ...e, answer: "Las llaves están en el carro.", altAnswers: ["Las llaves están en el coche.", "Las llaves están en el auto."] })),
      edit(spIs("Las llaves están en el coche."), (e) => ({ ...e, text: "Las llaves están en el carro.", altAnswers: ["Las llaves están en el coche.", "Las llaves están en el auto."], explanation: "Location of a thing takes estar, never ser." })),
      // L06 (the second part of this lesson after the split)
      edit(fbIs("Los niños ___ enfermos hoy, por eso no van a la escuela."), (e) => ({ ...e, sentence: "Los niños ___ enfermos hoy, por eso están en casa.", en: "The children [are] sick today, so they're at home.", explanation: "Being sick today is a temporary condition → estar, and los niños (plural) → están." })),
      edit(spIs("Los niños están enfermos hoy, por eso no van a la escuela."), (e) => ({ ...e, prompt: "Say it in Spanish: \"The children are sick today, so they're at home\"", text: "Los niños están enfermos hoy, por eso están en casa.", altAnswers: ["Hoy los niños están enfermos, por eso están en casa."], explanation: "Sick today and where they are: both estar, están for los niños." })),
    ],
  },
  // L07
  "a1r-error-hunt-ser-estar": {
    goal: "spot and fix the two classic mistakes (ser for location, estar for jobs) and the trick cases: events and muerto.",
    items: [
      edit(mcIs("Which sentences are already correct?"), (e) => ({ ...e, options: e.options.map((o: string) => (o === "Son las tres de la tarde." ? "Mi tío es de Cuba." : o)), explanation: "Origin → ser. Temporary temperature → estar. An event (la reunión) takes ser: es en la oficina. A city's location takes estar: está en España." })),
    ],
  },
  // L08
  "a1r-spiral-ser-estar-present": {
    goal: "use ser, estar and an everyday verb in one sentence, each with the right ending.",
    items: [
      edit(mcIs("Which sentence means \"The students are in the library"), (e) => ({ ...e, explanation: "Location takes estar (están), and ellos takes leen. \"Son en la biblioteca\" uses ser for location, \"lean\" is not the present-tense form, and \"leemos\" is nosotros." })),
      edit(spIs("Las ventanas están abiertas."), (e) => ({ ...e, explanation: "Open is a state, so estar, and abiertas agrees with ventanas (feminine plural)." })),
    ],
  },
  // L09
  "present-progressive": {
    goal: "say what is happening right now with estar + gerund, including leyendo, durmiendo and pidiendo.",
    warmUp: warmUp("Warm-up: the forms of estar", "Today's new form is built on estar, so a quick look at its forms first.", [
      mc("\"Nosotros ___ en casa.\"", ["estamos", "somos", "están", "estáis"], "Where we are: estar, nosotros → estamos."),
      mc("\"¿Dónde ___ tú?\"", ["estás", "eres", "está", "estoy"], "Tú → estás."),
      mc("\"Mis padres ___ muy cansados.\"", ["están", "son", "está", "estamos"], "Mis padres = ellos → están."),
    ]),
    items: [
      drop(mcIs("Which describes what's happening right now?")),
      drop((e) => e.type === "translate" && e.direction === "es-en" && e.source === "¿Estás leyendo el periódico?"),
      drop((e) => e.type === "word-order" && e.words.join(" ").startsWith("Mi hermano está hablando")),
      choose("Ahora estoy ___ en Madrid.", ["vivendo", "vivando", "vive"]),
      edit(fbIs("El camarero está ___ la comida."), (e) => ({ ...e, sentence: "El mesero está ___ la comida." })),
      choose("El mesero está ___ la comida.", ["serviendo", "sirvendo", "sirve"]),
      choose("Estamos ___ mucho.", ["aprendendo", "aprendando", "aprendemos"]),
      chooseSentence("Cocino la cena.", ["Estoy cociniendo la cena.", "Estoy cocino la cena.", "Soy cocinando la cena."]),
      chooseSentence("Ella está comiendo.", ["Están comendo.", "Están comando.", "Está comiendo."]),
      chooseSentence("Los niños leen.", ["Los niños están leiendo.", "Los niños están leendo.", "Los niños son leyendo."]),
      chooseSentence("Estamos escribendo una carta.", ["Estamos escribendo una carta.", "Estamos escribando una carta.", "Somos escribiendo una carta."]),
      chooseSentence("Mi hermana está pediendo una pizza.", ["Mi hermana está pediendo una pizza.", "Mi hermana está pidendo una pizza.", "Mi hermana está pide una pizza."]),
      chooseSentence("Mi hermano está hablar con Ana.", ["Mi hermano está habliendo con Ana.", "Mi hermano está hablar con Ana.", "Mi hermano es hablando con Ana."]),
      chooseSentence("What are you (informal) eating?", ["¿Qué estás comendo?", "¿Qué estás comando?", "¿Qué eres comiendo?"]),
      edit(spIs("Ahora estoy trabajando, pero mis amigos están jugando al fútbol."), (e) => ({ ...e, prompt: "Say it in Spanish: Right now I'm working, but my friends are playing soccer.", altAnswers: [...(e.altAnswers ?? []), "Ahora estoy trabajando, pero mis amigos están jugando fútbol.", "Ahora estoy trabajando pero mis amigos están jugando fútbol."] })),
      alts(spIs("Estoy hablando por teléfono."), ["Estoy hablando por celular."]),
    ],
  },
};

export function withUnit5Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit5SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
