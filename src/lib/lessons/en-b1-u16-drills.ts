// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u16-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u16 (defining relative clauses): a short recap, then graded practice.

const SLUG = "en-b1-defining-relatives";

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
  slug: `${SLUG}-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U16_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Who/which/that/where/whose/when, dropping the pronoun,
  // prepositions at the end, joining sentences
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Who, Which, That, Where, Whose",
    "You will be able to choose the right relative word for people, things, places, times and possession, drop it when it is the object, and put prepositions at the end of the clause.",
    "Recap: one «que», several English words",
    [
      "People: \"who\" or \"that\". Things and animals: \"which\" or \"that\". Places: \"where\". Times: \"when\" (often dropped). Possession: \"whose\" + noun, never *who his. The relative word replaces a pronoun, so never add \"he\", \"it\" or \"him\" after it.",
      "You can drop \"who/which/that\" when a new subject follows it (\"the movie we saw\"), but not when a verb follows (\"the man who called\"). Prepositions go at the end: \"the hotel we stayed in\", \"the job I applied for\"; never *where... in.",
    ],
    [
      ["The doctor who saw me was very young.", "La doctora que me atendió era muy joven."],
      ["The shoes I bought online are too big.", "Los zapatos que compré por internet me quedan grandes."],
      ["She's the neighbor whose cat sleeps in our yard.", "Es la vecina cuyo gato duerme en nuestro jardín."],
      ["That's the apartment we're moving into.", "Ese es el departamento al que nos vamos a mudar."],
    ],
    [
      fb("The woman ___ cuts my hair is from Venezuela.", ["who", "that"], "La mujer [que] me corta el pelo es de Venezuela.",
        "A person + subject of the clause: \"who\" (or \"that\"). Never \"which\" for a person."),
      fb("I need a laptop ___ doesn't weigh too much.", ["that", "which"], "Necesito una laptop [que] no pese mucho.",
        "A thing: \"that\" (most common in American English) or \"which\". Note that English uses \"doesn't weigh\" where Spanish uses the subjunctive «pese»."),
      mc("Which sentence is correct?", [
        "The nurse who helped my dad was very kind.",
        "The nurse which helped my dad was very kind.",
        "The nurse what helped my dad was very kind.",
        "The nurse who she helped my dad was very kind.",
      ], "Person = \"who\". \"Which\" is for things, \"what\" never follows a noun, and \"who\" is already the subject, so no extra \"she\"."),
      tr("Tengo un primo que trabaja en un hospital.", "I have a cousin {who|that} works {in|at} a hospital.",
        "A person: \"who\" or \"that\". The verb agrees with \"a cousin\": \"works\" with -s."),
      fb("This is the gym ___ I work out after work.", "where", "Este es el gimnasio [donde] hago ejercicio después del trabajo.",
        "A place: \"where\", like «donde»."),
      tr("El autobús que va a la playa sale cada hora.", "The bus {that|which} goes to the beach leaves every hour.",
        "A thing: \"that\" or \"which\". Two verbs with -s: \"goes\" (in the clause) and \"leaves\" (main verb)."),
      mc("Which sentence is correct?", [
        "The people who live upstairs are very noisy.",
        "The people who lives upstairs are very noisy.",
        "The people who they live upstairs are very noisy.",
        "The people which live upstairs are very noisy.",
      ], "\"People\" is plural, so \"who live\" and \"are\". No extra \"they\", and no \"which\" for people."),
      fb("I have a coworker ___ husband is a pilot.", "whose", "Tengo una compañera de trabajo [cuyo] esposo es piloto.",
        "Possession = \"whose\" + noun. Everyday Spanish avoids «cuyo», but English uses \"whose\" in normal conversation."),
      tr("Esa es la profesora cuyos alumnos ganaron el concurso.", "That's the teacher whose students won the {contest|competition}.",
        "\"Whose\" never changes: \"whose student\", \"whose students\". No article after it: *whose the students."),
      mc("Complete: \"Do you know the man ___ talking to Emma?\"", ["who's", "whose", "who his", "which"],
        "\"Who's\" = \"who is\": \"the man who is talking\". \"Whose\" sounds the same but must be followed by a noun."),
      tr("Nunca olvidaré el día en que nació mi hija.", "I'll never forget the day {|when |that }my daughter was born.",
        "Times: \"the day (when/that) ...\"; the most natural is no word at all. Never *the day in that. And «nacer» = \"was born\"."),
      wo("Friday is the day I visit my grandparents.", "El viernes es el día que visito a mis abuelos.",
        "\"The day\" + clause with no relative word is the most natural version in speech."),
      mc("In which sentence can you leave out \"that\"?", [
        "The app that I downloaded is free.",
        "The app that changed my life is free.",
        "The bus that goes downtown is late.",
        "The store that sells phones is closed.",
      ], "Drop it only when a new subject follows (\"that I downloaded\"). If a verb follows (\"that changed\"), \"that\" is the subject and must stay."),
      tr("La película que vimos anoche fue muy larga.", "The movie {|that |which }we {saw|watched} last night was very long.",
        "\"That\" is the object (the subject is \"we\"), so you can drop it: \"the movie we saw\" is the most natural."),
      tr("Todo lo que necesitas está en mi escritorio.", "Everything {|that }you need is on my desk.",
        "«Todo lo que» = \"everything (that)\". *Everything what you need is a classic mistake."),
      fb("This is the best pizza I've ___ eaten.", "ever", "Es la mejor pizza que he comido [jamás].",
        "After a superlative, English uses \"ever\": \"the best... I've ever eaten\". Spanish says «nunca», but *never would make it negative."),
      dc("The only thing I want right now is a hot shower.",
        "\"The only thing (that) I want\": no pronoun after \"thing\" because \"I\" is the subject."),
      tr("El departamento en el que vivimos es muy pequeño.", ["The apartment {|that |which }we live in is very small.", "The apartment where we live is very small.", "The apartment in which we live is very small."],
        "Everyday English puts the preposition at the end: \"the apartment we live in\". \"Where we live\" is also natural; \"in which\" is formal."),
      fb("Is this the charger you were looking ___?", "for", "¿Es este el cargador que [buscabas]?",
        "«Buscar» = \"look for\". In a relative clause the preposition stays at the end; without it the sentence is incomplete."),
      tr("La chica con la que hablé era muy simpática.", ["The girl {|who |that }I {talked|spoke} to was very {nice|friendly}.", "The girl {|who |that }I {talked|spoke} with was very {nice|friendly}.", "The girl to whom I {talked|spoke} was very {nice|friendly}."],
        "«Con la que hablé» = \"I talked to\", with the preposition at the end. \"To whom\" is correct but very formal."),
      mc("Which sentence is correct?", [
        "The town where I grew up has changed a lot.",
        "The town where I grew up in has changed a lot.",
        "The town in where I grew up has changed a lot.",
        "The town in that I grew up has changed a lot.",
      ], "\"Where\" already means \"in which\", so never add \"in\". *in that is impossible after a preposition."),
      fb("Climate change is a topic I'm very interested ___.", "in", "El cambio climático es un tema que me [interesa] mucho.",
        "«Interesar» = \"be interested in\". The \"in\" stays at the end of the clause."),
      wo("The person to whom you should write is the director.", "La persona a la que debes escribir es la directora.",
        "Formal English: preposition + \"whom\" at the start. In conversation: \"the person you should write to\"."),
      lc("The friend I traveled with lives in Toronto.", ["El amigo con el que viajé vive en Toronto.", "El amigo que viaja mucho vive en Toronto.", "Viajé a Toronto para ver a un amigo.", "Mi amigo y yo vivimos en Toronto."],
        "\"The friend I traveled with\" = «el amigo con el que viajé»: no pronoun, preposition at the end."),
      mc("Join: \"I have a friend. Her mother is a famous chef.\"", [
        "I have a friend whose mother is a famous chef.",
        "I have a friend who her mother is a famous chef.",
        "I have a friend whose the mother is a famous chef.",
        "I have a friend that her mother is a famous chef.",
      ], "\"Her\" becomes \"whose\". Never *who her or *that her, and no \"the\" after \"whose\"."),
      mc("Join: \"The soup was cold. We ordered it.\"", [
        "The soup we ordered was cold.",
        "The soup we ordered it was cold.",
        "The soup what we ordered was cold.",
        "The soup was cold we ordered.",
      ], "The object \"it\" disappears and the clause goes right after \"the soup\"."),
      wo("That's the park where we play basketball on Sundays.", "Ese es el parque donde jugamos básquetbol los domingos.",
        "\"Where\" replaces \"there\": \"This is the park. We play there.\" becomes \"the park where we play\"."),
      tr("El médico al que fui me dio unas pastillas.", "The doctor {|who |that }I went to gave me some pills.",
        "«Al que fui» = \"(who) I went to\": the preposition goes at the end. *The doctor to that I went is wrong."),
      fb("The man ___ called you didn't leave a message.", ["who", "that"], "El hombre [que] te llamó no dejó mensaje.",
        "Here \"who\" is the subject (a verb follows), so you can't drop it: *The man called you didn't leave... makes no sense."),
      tr("Es algo que me preocupa mucho.", ["It's something that worries me a lot.", "It's something I worry about a lot."],
        "\"That\" is the subject of \"worries\", so it stays. Or rephrase with \"worry about\" and put the preposition at the end."),
      dc("Do you remember the restaurant where we had our first date?",
        "\"Where\" for a place, followed by a full clause: \"we had our first date\"."),
      sp("Is this the street you used to live on?",
        "No pronoun, preposition at the end, and \"used to\" for a past situation.",
        "Let \"live on\" link together; the question rises at the end."),
      sp("I'm looking for an apartment that has a balcony.",
        "Spanish uses the subjunctive («que tenga»); English uses the normal present: \"that has\".",
        undefined, "Say it in English: «Busco un departamento que tenga balcón.»"),
      tr("No encuentro el correo que me mandó mi jefe.", "I can't find the email {|that |which }my boss sent me.",
        "\"That\" is the object (the subject is \"my boss\"), so it can go. Never add \"it\" at the end: *the email my boss sent me it."),
      mt("Match each noun type with its relative word.", [
        ["a person", "who / that"],
        ["a thing or animal", "which / that"],
        ["a place", "where"],
        ["a time", "when (or nothing)"],
        ["possession", "whose + noun"],
      ], "The full set of defining relatives. \"That\" works for people and things, but never after a comma."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Errors, describing things, who's who, jobs, whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Relatives for Describing People & Jobs",
    "You will be able to avoid the classic relative-clause errors, describe things and people you don't have the word for, identify people in a photo and talk about jobs.",
    "Recap: one pronoun, the right word",
    [
      "The four classic errors: an extra pronoun (*the people who they work), \"where... in\" together, *who his instead of \"whose\", and *what after a noun (*everything what). Fix them and your relative clauses sound native.",
      "Use relatives to talk around a word: \"It's someone who...\", \"It's a thing you use to...\", \"It's a place where...\", \"It's when...\". In photos: \"the one who's wearing...\", \"the one with...\", \"the woman on the left\". For jobs: \"I work as a nurse\", \"She's an accountant\".",
    ],
    [
      ["The cook who works here is from Peru.", "El cocinero que trabaja aquí es de Perú."],
      ["It's a thing you use to keep food cold.", "Es una cosa que sirve para mantener fría la comida."],
      ["The one with the curly hair is my cousin.", "La del pelo rizado es mi prima."],
      ["He works as a translator for a big company.", "Trabaja de traductor para una empresa grande."],
    ],
    [
      mc("Which sentence is correct?", [
        "The guy I met at the conference called me.",
        "The guy that I met him at the conference called me.",
        "The guy which I met at the conference called me.",
        "The guy what I met at the conference called me.",
      ], "No pronoun needed (\"I\" is the subject), no extra \"him\", no \"which\" for people and never \"what\" after a noun."),
      tr("La gente que trabaja en esta tienda es muy amable.", "The people {who|that} work {in|at} this {store|shop} are very {friendly|nice|kind}.",
        "\"People\" is plural: \"who work\" and \"are\". Don't add \"they\" after \"who\"."),
      fb("The office I work ___ has a great view.", "in", "La oficina [en la que] trabajo tiene una vista increíble.",
        "Preposition at the end: \"the office I work in\". Or use \"where\", but never both."),
      mc("Which sentence is correct?", [
        "The girl whose father owns the bakery is in my class.",
        "The girl who her father owns the bakery is in my class.",
        "The girl whose the father owns the bakery is in my class.",
        "The girl who's father owns the bakery is in my class.",
      ], "Possession = \"whose\" + noun. \"Who's\" means \"who is\", and *who her is the «cuyo» trap."),
      tr("Los niños cuyos padres trabajan aquí comen gratis.", "{The |}children whose parents work here eat {for free|free}.",
        "\"Whose parents\": «cuyos» = \"whose\", with no change for plural. Don't say *the children who their parents."),
      fb("The thing ___ I like most about my job is the people.", "that", "Lo [que] más me gusta de mi trabajo es la gente.",
        "After a noun (\"the thing\"), use \"that\" or nothing, never \"what\"."),
      tr("Hice todo lo que me dijiste.", "I did everything {|that }you told me{ to do|}.",
        "«Todo lo que» = \"everything (that)\", not *everything what."),
      tr("Es alguien que cuida a los hijos de otras personas.", "It's {someone|a person} who {takes care of|looks after} other people's {children|kids}.",
        "Describe a job you can't name: \"It's someone who...\" + verb with -s."),
      fb("It's a thing you use ___ open cans.", "to", "Es una cosa que [sirve para] abrir latas.",
        "\"A thing you use to + verb\" is the natural way to say «sirve para». *It serves for is a translation."),
      tr("Es un lugar donde puedes comprar medicinas.", "It's a place where you can buy {medicine|medicines|medication}.",
        "Places: \"It's a place where...\"."),
      mc("How do you say «Sirve para limpiar ventanas» naturally?", [
        "It's used for cleaning windows.",
        "It serves for cleaning windows.",
        "It serves to clean windows.",
        "It uses for clean windows.",
      ], "\"It's used for\" + -ing (or \"You use it to clean...\"). \"Serve\" is not used this way in English."),
      tr("Es cuando no tienes ganas de hacer nada.", "It's when you don't feel like doing anything.",
        "For situations and feelings, everyday English says \"It's when...\"."),
      lc("It's the opposite of noisy.", ["Es lo contrario de ruidoso.", "Es parecido a ruidoso.", "No es nada ruidoso.", "Es más ruidoso de lo normal."],
        "\"The opposite of\" = «lo contrario de». A great way to help someone guess a word (here: \"quiet\")."),
      fb("\"Which one is your sister?\" \"The one who's ___ the green jacket.\"", "wearing", "«¿Cuál es tu hermana?» «La que [lleva] la chaqueta verde.»",
        "Clothes in a photo: \"the one who's wearing...\", present continuous of \"wear\"."),
      tr("El de la barba es mi tío.", "The {one|guy|man} with the beard is my uncle.",
        "English has no «el de»: use \"the one with...\" or \"the guy with...\"."),
      mc("Which sentence is correct?", [
        "The woman on the left is my boss.",
        "The woman in the left is my boss.",
        "The woman at left is my boss.",
        "The woman of the left is my boss.",
      ], "Positions in a photo: \"ON the left/right\", \"IN the middle\", \"IN the back\"."),
      tr("Es la chica de la que te hablé.", "{She's|That's} the girl {|who |that }I told you about.",
        "«De la que te hablé» = \"(who) I told you about\": the preposition goes at the end."),
      wo("That's the guy whose band played at my party.", "Ese es el chico cuyo grupo tocó en mi fiesta.",
        "\"Whose band\" = possession; then the verb \"played\"."),
      dc("The man standing next to Lucia is her husband.",
        "\"The man standing next to...\" = \"the man who is standing next to...\". Very common when describing photos."),
      tr("Mi hermana es contadora.", "My sister is an accountant.",
        "Jobs take \"a\" or \"an\" in English: *My sister is accountant is a very common mistake."),
      fb("On weekends I work ___ a waiter at a hotel.", "as", "Los fines de semana trabajo [de] mesero en un hotel.",
        "«Trabajar de» = \"work as\" + a/an. Never *work of."),
      mt("Match each job with its meaning.", [
        ["plumber", "plomero"],
        ["accountant", "contador"],
        ["firefighter", "bombero"],
        ["cashier", "cajero"],
        ["lawyer", "abogado"],
      ], "The \"b\" in \"plumber\" is silent: \"PLUM-er\"."),
      tr("¿A qué te dedicas?", "What do you do{ for a living|}?",
        "The natural question is \"What do you do?\", not *What is your work?."),
      mc("Which sentence is correct?", [
        "He's been unemployed since March.",
        "He's in the unemployment since March.",
        "He's unemployed since March.",
        "He's been in unemployment since March.",
      ], "\"Be unemployed\" (no \"in the\"), and with \"since\" you need the present perfect: \"He's been\"."),
      fb("My mom works the night ___ at the hospital.", "shift", "Mi mamá hace el [turno] de noche en el hospital.",
        "«Turno» = \"shift\": \"the night shift\", \"work shifts\"."),
      tr("Estudio la carrera de Medicina.", ["I'm studying medicine.", "I'm doing a {medical|medicine} degree.", "I'm doing a degree in medicine."],
        "\"Career\" is your working life, not your university studies. Say \"I'm studying medicine\" or \"I'm doing a degree in...\"."),
      lc("She works for a company whose offices are in five countries.", ["Trabaja para una empresa que tiene oficinas en cinco países.", "Trabaja en cinco oficinas de una empresa.", "Su empresa quiere abrir oficinas en cinco países.", "Trabajó en cinco empresas de distintos países."],
        "\"Whose\" also works for companies: \"a company whose offices...\" = «cuyas oficinas»."),
      tr("Es la mejor serie que he visto nunca.", "It's the best {series|show|TV show} I've ever {seen|watched}.",
        "Superlative + \"I've ever\": «nunca» becomes \"ever\" here. No pronoun is needed after \"series\"."),
      mc("Which definition is correct?", [
        "A pilot is someone whose job is to fly planes.",
        "A pilot is someone who his job is to fly planes.",
        "A pilot is someone whose the job is to fly planes.",
        "A pilot is someone who's job is to fly planes.",
      ], "\"Someone whose job is...\": \"whose\" + noun, no article, and not \"who's\" (= who is)."),
      tr("Este es el bar donde trabajaba mi papá.", ["This is the bar where my {dad|father} {used to work|worked}.", "This is the bar {|that |which }my {dad|father} {used to work|worked} at."],
        "Either \"where\" or a preposition at the end, never both: *the bar where my dad worked at."),
      fb("It's a kind of fruit ___ looks like a small green egg.", ["that", "which"], "Es un tipo de fruta [que] parece un huevo verde pequeño.",
        "\"That\" is the subject of \"looks\", so it can't be dropped."),
      sp("It's someone who checks your teeth.",
        "Talking around the word \"dentist\": \"It's someone who\" + verb with -s.",
        undefined, "Say it in English, without saying \"dentist\": «Es alguien que te revisa los dientes.»"),
      dc("My coworkers are great, but the boss I work for is very strict.",
        "\"The boss I work for\": no pronoun and the preposition at the end."),
      sp("The people in the back are my old classmates.",
        "\"In the back\" for a position in a photo (British: \"at the back\").",
        "Stress \"back\" and \"classmates\"."),
      tr("La empresa para la que trabaja mi novio tiene oficinas en Lima.", ["The company {|that |which }my boyfriend works for has offices in Lima.", "The company for which my boyfriend works has offices in Lima."],
        "Natural English: \"the company my boyfriend works for\". \"For which\" is formal; *for that is never possible."),
      wo("Everything you need is in the email I sent you.", "Todo lo que necesitas está en el correo que te mandé.",
        "Two clauses with no pronoun: \"everything you need\" and \"the email I sent you\"."),
    ],
  ),
];
