// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u17-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u17 (non-defining relative clauses, what vs which): a short recap, then graded practice.

const SLUG = "en-b1-non-defining-relatives";

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

export const EN_B1_U17_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Commas, which for a whole sentence, of whom/which, what,
  // defining vs non-defining
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Commas, Which & What",
    "You will be able to add extra information between commas with who, which, where and whose, comment on a whole sentence with which, and choose between what and that/which for «lo que».",
    "Recap: after a comma, only who or which",
    [
      "A non-defining clause adds extra information about someone or something we already know: \"My boss, who is from Chile, speaks fast.\" After the comma, use \"who\" (people), \"which\" (things), \"where\" or \"whose\"; never \"that\", and never drop the pronoun.",
      "Comma + \"which\" can comment on the whole sentence: \"He forgot, which annoyed me\" («lo cual»). \"What\" means «lo que» = the thing that (\"What I need is sleep\"), and it never follows a noun, \"everything\" or \"all\". After quantities use \"of whom\" (people) and \"of which\" (things).",
    ],
    [
      ["My uncle, who lives in Monterrey, is a mechanic.", "Mi tío, que vive en Monterrey, es mecánico."],
      ["The test was easy, which was a nice surprise.", "El examen fue fácil, lo cual fue una sorpresa agradable."],
      ["What I really want is a day off.", "Lo que de verdad quiero es un día libre."],
      ["We saw ten apartments, two of which were perfect.", "Vimos diez departamentos, dos de los cuales eran perfectos."],
    ],
    [
      fb("My grandmother, ___ is 90, still drives.", "who", "Mi abuela, [que] tiene 90 años, todavía maneja.",
        "Extra information about a person, between commas: \"who\". \"That\" is not possible after a comma."),
      fb("Our office, ___ is on the tenth floor, has a great view.", "which", "Nuestra oficina, [que] está en el décimo piso, tiene una vista increíble.",
        "A thing + commas = \"which\". Only \"who\" or \"which\" can follow the comma."),
      mc("Which sentence is correct?", [
        "My laptop, which I bought in 2019, is still fast.",
        "My laptop, that I bought in 2019, is still fast.",
        "My laptop, I bought in 2019, is still fast.",
        "My laptop, what I bought in 2019, is still fast.",
      ], "After a comma: \"which\". Never \"that\", never \"what\", and the pronoun can't be dropped in a non-defining clause, even when it is the object."),
      tr("Mi jefe, que es de Chile, habla muy rápido.", "My boss, who is from Chile, {speaks|talks} very {fast|quickly}.",
        "\"My boss\" is already identified, so the clause is extra information: commas + \"who\"."),
      tr("Cartagena, donde pasamos las vacaciones, es preciosa.", "Cartagena, where we spent {our|the} vacation, is beautiful.",
        "\"Where\" also works between commas for places. Remember: «vacaciones» = \"vacation\" (US) in the singular."),
      fb("Diego, ___ sister works with me, is coming to dinner.", "whose", "Diego, [cuya] hermana trabaja conmigo, viene a cenar.",
        "Possession: \"whose\" + noun, also in non-defining clauses. Not *who his sister."),
      tr("Este carro, que compré hace dos años, nunca me ha dado problemas.", "This car, which I bought two years ago, has never given me {any |}problems.",
        "\"Which\" is the object here, but in a non-defining clause it can never be dropped: *This car, I bought two years ago, ... is wrong."),
      wo("Lucia, who you met at my party, is a nurse.", "Lucia, a quien conociste en mi fiesta, es enfermera.",
        "Name + comma + \"who\" + clause + comma + main verb. \"Whom\" is possible but formal."),
      fb("The flight was delayed, ___ meant we missed our connection.", "which", "El vuelo se retrasó, [lo que] hizo que perdiéramos la conexión.",
        "«Lo que» about the whole sentence = comma + \"which\". *what meant is the typical Spanish-speaker mistake."),
      tr("Mi hermano se olvidó de mi cumpleaños, lo que me molestó mucho.", "My brother forgot my birthday, which {annoyed|upset|bothered} me {a lot|very much}.",
        "\"Which\" refers to the whole idea (that he forgot). \"What\" and \"that\" are impossible here."),
      mc("Which sentence is correct?", [
        "She got the job, which surprised nobody.",
        "She got the job, what surprised nobody.",
        "She got the job, that surprised nobody.",
        "She got the job, it surprised nobody.",
      ], "A comment on the whole sentence = comma + \"which\". \"It\" after a comma joins two sentences incorrectly."),
      tr("Estaba agotado, por eso me fui a dormir temprano.", "I was exhausted, which is why I went to bed early.",
        "\"Which is why\" = «por eso». It always follows a comma.", "Translate into English. Use \"which is why\"."),
      lc("The bank closes at three, which means we have to hurry.", ["El banco cierra a las tres, lo que significa que tenemos que apurarnos.", "El banco que cierra a las tres está lejos.", "El banco cerró a las tres, así que no fuimos.", "¿Qué banco cierra a las tres?"],
        "\"Which means\" = «lo que significa». Singular verb, because \"which\" is one idea."),
      fb("I have four cousins, two of ___ live in Spain.", "whom", "Tengo cuatro primos, dos de [los cuales] viven en España.",
        "After \"of\" + people, use \"whom\": \"two of whom\". *two of who and *two of them are wrong here."),
      tr("Compré doce huevos, la mitad de los cuales estaban rotos.", "I bought {twelve|12|a dozen} eggs, half of which were broken.",
        "Things: \"half of which\". Note the plural verb \"were\", because it means half of the eggs."),
      mc("Which sentence is correct?", [
        "We invited thirty people, most of whom came.",
        "We invited thirty people, most of who came.",
        "We invited thirty people, most of them came.",
        "We invited thirty people, most of which came.",
      ], "People after \"of\" = \"whom\". \"Most of them\" needs a new sentence, and \"which\" is for things."),
      fb("___ I like about this city is the food.", "What", "[Lo que] me gusta de esta ciudad es la comida.",
        "\"What\" = «lo que» = the thing that. It starts the sentence by itself, with no noun before it."),
      tr("No entiendo lo que dice el profesor.", "I don't understand what the {teacher|professor} {is saying|says}.",
        "After verbs like \"understand\", «lo que» = \"what\". There's no noun before it, so \"what\" is right."),
      tr("Todo lo que cocina mi papá está delicioso.", "Everything {|that }my {dad|father} cooks is delicious.",
        "After \"everything\", use \"that\" or nothing, never \"what\": *everything what my dad cooks."),
      mc("Complete: \"She didn't call me back, ___ is strange.\"", ["which", "what", "that", "who"],
        "A comment on the whole sentence after a comma: \"which\". Test: «lo cual» works in Spanish."),
      mc("Complete: \"Tell me ___ you want for your birthday.\"", ["what", "which", "that", "the thing what"],
        "Here «lo que» = «la cosa que», and there's no noun before it: \"what\"."),
      wo("All I want is a quiet weekend.", "Lo único que quiero es un fin de semana tranquilo.",
        "\"All (that) I want\": never *all what I want."),
      mc("\"My cousin who lives in Miami is a pilot.\" (no commas) What does this tell you?", [
        "You have more than one cousin.",
        "You have only one cousin.",
        "Your cousin moved to Miami recently.",
        "Your cousin isn't a pilot anymore.",
      ], "No commas = a defining clause: it tells us WHICH cousin, so there are others. With commas, it would be your only cousin."),
      mc("Which sentence needs commas?", [
        "My father who is 65 still plays soccer.",
        "The woman who called you is my aunt.",
        "The students who studied passed the test.",
        "The phone that I lost was new.",
      ], "You have only one father, so the clause is extra information: \"My father, who is 65, still plays soccer.\" The others tell us which person or thing."),
      tr("Mi esposa, que es arquitecta, diseñó nuestra casa.", "My wife, who is an architect, designed our house.",
        "Unique person = non-defining clause with commas. And jobs need \"an\": \"an architect\"."),
      tr("Lima, que es la capital de Perú, tiene muy buena comida.", "Lima, which is the capital of Peru, has {very good|really good|great|excellent} food.",
        "Names of places are already identified: commas + \"which\". Never \"that\" after the comma."),
      dc("Our new manager, who started on Monday, seems very friendly.",
        "Listen for the short pauses around \"who started on Monday\": they become commas."),
      dc("I lost my wallet, which had all my cards in it.",
        "Comma + \"which\" for a thing. Notice \"in it\" at the end: \"my cards were in it\"."),
      sp("My sister, who lives in Toronto, is visiting us next week.",
        "A non-defining clause sits between two short pauses.",
        "Pause briefly after \"sister\" and after \"Toronto\", and let your voice drop a little inside the clause."),
      sp("We won the game, which was amazing.",
        "«Lo cual» = \"which\", after a pause.",
        undefined, "Say it in English: «Ganamos el partido, lo cual fue increíble.»"),
      tr("Mi celular, que es nuevo, ya no funciona.", "My phone, which is new, {doesn't work anymore|isn't working anymore|has stopped working}.",
        "Trap: *My phone, that is new is wrong. After a comma, only \"which\" for things."),
      tr("Perdimos el último autobús, lo que significó que tuvimos que caminar.", "We missed the last bus, which meant {that |}we had to walk.",
        "Trap: *what meant. Use \"which\" to comment on the whole sentence."),
      fb("The thing ___ worries me is the price.", "that", "Lo [que] me preocupa es el precio.",
        "After \"the thing\", never \"what\". Here \"that\" is the subject of \"worries\", so it can't be dropped. (\"What worries me\" is the other option.)"),
      tr("Tiene dos hermanos, ninguno de los cuales vive aquí.", "{He|She} has two brothers, neither of whom {lives|live} here.",
        "Two people + «ninguno» = \"neither of whom\". After \"of\", people take \"whom\"."),
      mt("Match each English structure with its Spanish meaning.", [
        ["What I need is...", "Lo que necesito es..."],
        ["..., which surprised me.", "..., lo cual me sorprendió."],
        ["most of whom", "la mayoría de los cuales (personas)"],
        ["half of which", "la mitad de los cuales (cosas)"],
      ], "«Lo que» has two translations: \"what\" (the thing that) and comma + \"which\" (about the whole sentence)."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Errors, profiles, listening, volunteering, the band
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Relatives in Profiles, Stories & Plans",
    "You will be able to correct what/that/which errors, write the opening of a short profile, hear the difference between sound-alikes, and combine relative clauses with modals, passives and conditionals.",
    "Recap: the four errors and the profile sentence",
    [
      "The four errors to avoid: *all what / *the thing what; *what after a comma (use \"which\"); *that after a comma (use \"who\" or \"which\"); and two pronouns for one thing (*the book that I read it, *the man who his car).",
      "A profile packs facts into one sentence: \"Frida Kahlo, who was born in 1907, was a painter.\" Add places with \"where\", possession with \"whose\", and comments with \", which...\". Listen carefully: \"whose\" and \"who's\", \"where\" and \"were\" sound almost the same.",
    ],
    [
      ["Everything he told me was a lie.", "Todo lo que me dijo era mentira."],
      ["Celia Cruz, who was born in Havana, was a famous singer.", "Celia Cruz, que nació en La Habana, fue una cantante famosa."],
      ["The shelter, which is run by volunteers, needs money.", "El refugio, que está a cargo de voluntarios, necesita dinero."],
      ["If we find a singer whose voice is strong, we'll record a song.", "Si encontramos un cantante con una voz potente, grabaremos una canción."],
    ],
    [
      mc("Which sentence is correct?", [
        "Everything she said was true.",
        "All what she said was true.",
        "Everything what she said was true.",
        "The thing what she said was true.",
      ], "«Todo lo que» = \"everything (that)\". \"What\" never follows \"all\", \"everything\" or a noun."),
      tr("Lo que odio es levantarme temprano.", ["What I hate is getting up early.", "The thing {|that }I hate is getting up early.", "What I hate is waking up early."],
        "\"What I hate...\" or \"The thing I hate...\", but never *The thing what I hate."),
      fb("She lent me her car, ___ was very kind of her.", "which", "Me prestó su carro, [lo cual] fue muy amable de su parte.",
        "A comment on the whole sentence after a comma: \"which\", not *what."),
      mc("Which sentence is correct?", [
        "Toronto, which I visited last year, is very multicultural.",
        "Toronto, that I visited last year, is very multicultural.",
        "Toronto, where I visited last year, is very multicultural.",
        "Toronto, I visited last year, is very multicultural.",
      ], "\"Visit\" needs an object, so use \"which\" (object), not \"where\". After a comma, never \"that\", and the pronoun can't be dropped."),
      tr("Mi profesor, que es muy paciente, me ayudó con el examen.", "My {teacher|professor}, who is very patient, helped me with the {exam|test}.",
        "Unique person + extra information: commas + \"who\"."),
      fb("The woman ___ purse was stolen called the police.", "whose", "La mujer [a la que] le robaron el bolso llamó a la policía.",
        "«A la que le robaron el bolso» = \"whose purse was stolen\". *The woman who her purse... uses two pronouns for one person."),
      tr("Gabriel García Márquez, que nació en Colombia en 1927, fue escritor.", "Gabriel Garcia Marquez, who was born in Colombia in 1927, was a writer.",
        "A classic profile opening: name, comma + \"who was born\", then the main fact. «Nació» is always \"was born\"."),
      fb("In 1955 she moved to New York, ___ she worked as a photographer.", "where", "En 1955 se mudó a Nueva York, [donde] trabajó como fotógrafa.",
        "Comma + \"where\" adds a fact about the place. Note \"worked as\" for a job."),
      tr("Su primer libro se publicó en 1990, cuando ella tenía veinte años.", "Her first book was published in 1990, when she was {twenty|20}{ years old|}.",
        "Passive for the book (\"was published\") and comma + \"when\" for the time. Ages use \"be\": \"she was twenty\", not *had twenty years."),
      wo("He was working in a bakery when he wrote his first song.", "Trabajaba en una panadería cuando escribió su primera canción.",
        "Past continuous for the background, past simple for the main event."),
      tr("En 2005 ya había ganado tres premios.", "By 2005{,|} {he|she} had {already |}won three {prizes|awards}.",
        "«Ya había ganado» = past perfect, \"had won\". \"By 2005\" = «para 2005, en 2005 ya»."),
      mc("Which sentence is best for the first line of a profile?", [
        "Pablo Neruda, who was born in Chile in 1904, was a poet.",
        "Pablo Neruda, that was born in Chile in 1904, was a poet.",
        "Pablo Neruda, who born in Chile in 1904, was a poet.",
        "Pablo Neruda, who was born in Chile on 1904, was a poet.",
      ], "Name + \"who\" (not \"that\") + \"was born\" + \"in\" + year."),
      lc("My friend, whose dad is a pilot, travels for free.", [
        "My friend, whose dad is a pilot, travels for free.",
        "My friend, who's dad is a pilot, travels for free.",
        "My friend, who his dad is a pilot, travels for free.",
        "My friend, whose dad was a pilot, traveled for free.",
      ], "\"Whose\" and \"who's\" sound the same. A noun follows (\"dad\"), so it's possession: \"whose\".", "Which sentence did you hear?"),
      dc("The people who were waiting outside were very patient.",
        "\"Were\" (past of \"be\") sounds a lot like \"where\". Here it's a verb, so write \"were\"."),
      dc("The guests, most of whom were from Mexico, loved the food.",
        "\"Most of whom\": the \"w\" in \"whom\" is silent, so it sounds like \"hoom\"."),
      mc("Complete: \"The boy ___ been chosen for the team is my nephew.\"", ["who's", "whose", "who", "which"],
        "\"Who's\" = \"who has\" here: \"who has been chosen\". A verb (\"been\") follows, so it can't be \"whose\"."),
      tr("El refugio donde hago voluntariado necesita gente.", "The {shelter|animal shelter} where I volunteer needs {people|volunteers}.",
        "A defining clause with \"where\". \"Volunteer\" is also a verb: \"I volunteer\"."),
      fb("You ___ give the cats milk. It makes them sick.", ["mustn't", "must not", "can't", "cannot", "shouldn't", "should not"], "[No debes] darles leche a los gatos. Les hace daño.",
        "A prohibition or strong advice: \"mustn't\" or \"shouldn't\". \"Don't have to\" would mean it isn't necessary."),
      mc("What does \"You don't have to come every weekend\" mean?", [
        "No hace falta que vengas todos los fines de semana.",
        "No debes venir todos los fines de semana.",
        "No puedes venir todos los fines de semana.",
        "No quieres venir todos los fines de semana.",
      ], "\"Don't have to\" = no obligation («no hace falta»). It is not a prohibition."),
      tr("A los perros se les saca a pasear tres veces al día.", ["The dogs are walked three times a day.", "The dogs are taken for a walk three times a day.", "The dogs are taken out three times a day.", "Dogs are walked three times a day."],
        "A routine where the action matters: present simple passive, \"are walked\"."),
      tr("El refugio lo fundó una veterinaria en 2012.", "The shelter was {founded|started|opened} by a {vet|veterinarian} in 2012.",
        "The shelter is the topic, so it goes first; the founder is new information after \"by\"."),
      tr("Tenemos treinta perros, la mayoría de los cuales son mayores.", "We have thirty dogs, most of which are {old|older}.",
        "Animals and things: \"most of which\"."),
      fb("We're looking for someone ___ can play the keyboard.", ["who", "that"], "Buscamos a alguien [que] sepa tocar el teclado.",
        "Defining clause for a person: \"who\" or \"that\". English uses \"can\" where Spanish uses the subjunctive «sepa»."),
      tr("Si encontramos un baterista, empezaremos a ensayar en mayo.", "If we find a drummer, we'll start {rehearsing|to rehearse} in May.",
        "First conditional: present after \"if\" (\"find\"), \"will\" in the result. Never *If we will find."),
      mc("Which sentence is correct?", [
        "If I could play the guitar, I'd join a band.",
        "If I could play the guitar, I'll join a band.",
        "If I can play the guitar, I'd join a band.",
        "If I would play the guitar, I'd join a band.",
      ], "Imaginary situation: second conditional, past (\"could\") after \"if\" and \"would\" in the result."),
      tr("Tocamos en un bar el sábado.", "We're playing {at|in} a bar on Saturday.",
        "A fixed arrangement: present continuous. «Tocamos» here is a plan, not a habit.", "Translate into English (it's an arrangement)."),
      sp("My friend Martin, who plays the bass, wants to join us.",
        "Name + non-defining clause: pause before \"who\" and after \"bass\".",
        "\"Bass\" (the instrument) rhymes with \"face\", not with \"class\"."),
      wo("The garage where we rehearse has no windows.", "El garaje donde ensayamos no tiene ventanas.",
        "Defining clause with \"where\" in the middle of the sentence."),
      tr("Mi mejor amigo, cuyo padre es piloto, viaja gratis.", "My best friend, whose {dad|father} is a pilot, {travels|flies} {for free|free}.",
        "Trap: *who his father. «Cuyo» = \"whose\", between commas because \"my best friend\" is unique."),
      tr("Aprobé el examen, lo cual sorprendió a mis padres.", "I passed the {exam|test}, which surprised my parents.",
        "Trap: *what surprised. Comma + \"which\" for the whole idea. Also: «aprobar» = \"pass\"."),
      fb("I'll do ___ I can to help.", ["everything", "all", "whatever"], "Haré [todo lo] que pueda para ayudar.",
        "«Todo lo que» = \"everything (that)\" or \"all (that)\". Never *everything what."),
      sp("Cusco, where my aunt lives, is in the mountains.",
        "Place name + comma + \"where\".",
        undefined, "Say it in English: «Cusco, donde vive mi tía, está en las montañas.»"),
      lc("She was born in a small town, where her parents ran a hotel.", ["Nació en un pueblo pequeño, donde sus padres tenían un hotel.", "Nació en un hotel de un pueblo pequeño.", "Sus padres corrieron hasta el hotel del pueblo.", "Vivía en un pueblo pequeño donde había un hotel."],
        "\"Ran a hotel\" = «llevaban / tenían un hotel». The comma + \"where\" adds information about the town."),
      mt("Match each sound-alike with its meaning.", [
        ["who's", "quién es / quién ha"],
        ["whose", "cuyo"],
        ["where", "donde"],
        ["were", "estaban / eran"],
        ["wear", "llevar puesto"],
      ], "These pairs sound the same or almost the same. Use the grammar of the sentence to choose the spelling."),
      mc("Which sentence is correct?", [
        "I have two sisters, both of whom are nurses.",
        "I have two sisters, both of them are nurses.",
        "I have two sisters, both of who are nurses.",
        "I have two sisters, that both are nurses.",
      ], "People after a quantity + \"of\" = \"of whom\". \"Both of them\" needs a new sentence."),
    ],
  ),
];
