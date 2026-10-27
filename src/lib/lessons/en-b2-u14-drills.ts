// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u14-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u14 (relative and participle clauses): a short recap, then graded practice.

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
  slug: `en-b2-relatives-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U14_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Non-defining relative clauses (Parts 1 and 2)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "My Sister, Who Lives in Leeds...",
    "You will be able to add extra information between commas with who, which, whose, where and when, comment on a whole idea with \", which\", place prepositions correctly and use most of whom and some of which.",
    "Recap: extra information between commas",
    [
      "A non-defining clause adds extra information about someone or something already clear, between commas: \"My father, who is a taxi driver, ...\". After the comma use only \"who\" (people) or \"which\" (things), never \"that\", and never drop the pronoun. \"Whose\" + noun replaces «que su»: \"a neighbor whose son...\".",
      "\", which\" can comment on the whole previous idea («lo que», «lo cual»): \"She forgot my birthday, which hurt me\", never *what. Prepositions go at the end in everyday English (\"the doctor I told you about\") or before \"whom\"/\"which\" in formal English (\"the company for which I work\").",
      "Quantifiers take \"of whom\" (people) or \"of which\" (things): \"most of whom\", \"none of which\". After \"everything\" and \"all\", use \"that\" or nothing, never *what.",
    ],
    [
      ["My father, who is a taxi driver, knows every street in the city.", "Mi padre, que es taxista, conoce todas las calles de la ciudad."],
      ["I have a neighbor whose son plays in a band.", "Tengo un vecino cuyo hijo toca en una banda."],
      ["The heater broke, which meant we had to wear coats inside.", "Se rompió la calefacción, lo que significó que tuvimos que usar abrigo dentro de la casa."],
      ["I bought ten books, most of which were used.", "Compré diez libros, la mayoría de los cuales eran de segunda mano."],
    ],
    [
      fb("My uncle, ___ is a firefighter, works nights.", "who", "Mi tío, [que] es bombero, trabaja de noche.",
        "Extra information about a person, between commas: \"who\". \"That\" is not possible after a comma."),
      mc("Which sentence is correct?", [
        "My cousin, who works at a bank, is getting married.",
        "My cousin, that works at a bank, is getting married.",
        "My cousin, which works at a bank, is getting married.",
        "My cousin, works at a bank, is getting married.",
      ], "After a comma, use \"who\" for people. *that after a comma comes from Spanish «que»; \"which\" is for things; and the pronoun can't be left out."),
      tr("Mi abuela, que tiene noventa años, todavía cocina todos los días.", "My {grandmother|grandma}, who is {ninety|90}, still cooks every day.",
        "Non-defining clause for a person: commas + \"who\". Age uses \"be\": \"who is ninety\", not *who has ninety."),
      tr("Mi computadora, que compré el año pasado, ya está lenta.", "My computer, which I bought last year, is already slow.",
        "For a thing, use \"which\" after the comma. Even though it's the object of \"bought\", you can't drop it in a non-defining clause."),
      fb("The hotel, ___ we booked online, was much smaller than in the photos.", "which", "El hotel, [que] reservamos por internet, era mucho más pequeño que en las fotos.",
        "Between commas the pronoun always stays, even as the object: \"which we booked\". *The hotel, we booked online, is wrong."),
      wo("Mexico City, which I visited in May, is huge.", "Ciudad de México, que visité en mayo, es enorme.",
        "A city is unique, so the clause is extra information: commas + \"which\"."),
      fb("I have a neighbor ___ daughter plays the violin.", "whose", "Tengo un vecino [cuya] hija toca el violín.",
        "«Cuyo/cuya» is \"whose\" + noun. It never changes for gender or number."),
      tr("Tengo una compañera cuya hermana vive en Japón.", "I have a {colleague|coworker|co-worker|classmate} whose sister lives in Japan.",
        "\"Whose sister\" replaces «cuya hermana» (or informal «que su hermana»). Never *who her sister."),
      mc("Which sentence is correct?", [
        "That's the girl whose mother is a dentist.",
        "That's the girl who her mother is a dentist.",
        "That's the girl who's mother is a dentist.",
        "That's the girl whose the mother is a dentist.",
      ], "\"Whose\" + noun, with no \"the\" after it. \"Who's\" means \"who is\", and *who her mother copies Spanish «que su madre»."),
      tr("Mi jefe, cuya oficina está en el tercer piso, casi nunca baja.", "My boss, whose office is on the third floor, {hardly ever|rarely|almost never|seldom} comes down.",
        "\"Whose office\" between commas: extra information about the boss."),
      fb("Cartagena, ___ my parents met, is my favorite city.", "where", "Cartagena, [donde] se conocieron mis padres, es mi ciudad favorita.",
        "For a place, \"where\" + a full clause. Don't add \"there\" at the end."),
      dc("We ate at a small cafe near the port, where the fish is always fresh.",
        "\", where\" adds information about a place."),
      fb("She forgot my birthday, ___ really hurt me.", "which", "Se olvidó de mi cumpleaños, [lo que] me dolió mucho.",
        "\", which\" comments on the whole idea before it (that she forgot). Spanish says «lo que», but English never uses *what here."),
      mc("Which sentence is correct?", [
        "The bus broke down, which meant we were late for class.",
        "The bus broke down, what meant we were late for class.",
        "The bus broke down, that meant we were late for class.",
        "The bus broke down, it meant we were late for class.",
      ], "For a comment on the whole clause, use \", which\". *what and *that are wrong, and \", it meant\" joins two sentences with only a comma."),
      tr("Me subieron el sueldo, lo cual está muy bien.", "{I got a raise|They gave me a raise|My salary went up}, which is {great|very good|really good}.",
        "«Lo cual» commenting on the whole sentence is \", which\"."),
      tr("Perdimos el último tren, lo que fue un desastre.", "We missed the last train, which was a disaster.",
        "\", which was...\" is a typical comment at the end of a sentence, like «lo que fue...»."),
      fb("That's the doctor I told you ___.", "about", "Ese es el médico [del que] te hablé.",
        "«Del que te hablé» = \"I told you about\". In everyday English the preposition goes at the end of the clause."),
      tr("Esta es la canción que siempre escucho cuando salgo a correr.", "This is the song {that |which |}I always listen to when I {go running|go for a run|run}.",
        "«Escuchar» has no preposition in Spanish, but \"listen to\" does, and \"to\" stays at the end of the clause."),
      mc("Choose the formal version of «la empresa para la que trabajo».", [
        "the company for which I work",
        "the company for that I work",
        "the company for which I work for",
        "the company for who I work",
      ], "Formal English puts the preposition before \"which\" (things) or \"whom\" (people). Never \"that\" or \"who\" after a preposition, and never the preposition twice."),
      tr("La persona con la que hablé no sabía nada.", ["The person {|who |that }I {spoke|talked} to {didn't know anything|knew nothing}.", "The person {to whom|with whom} I {spoke|talked} {didn't know anything|knew nothing}."],
        "Everyday English: \"the person I spoke to\". Formal: \"the person to whom I spoke\". *the person with who I spoke is wrong."),
      fb("I have two older brothers, both of ___ are engineers.", "whom", "Tengo dos hermanos mayores, [que] son ingenieros los dos.",
        "After a quantifier for people, use \"of whom\": \"both of whom\". *both of who is wrong."),
      tr("Compré diez libros, la mayoría de los cuales eran de segunda mano.", "I bought ten books, most of which were {used|second-hand|secondhand}.",
        "«La mayoría de los cuales» for things is \"most of which\"."),
      tr("Entrevistamos a veinte candidatos, ninguno de los cuales hablaba francés.", "We interviewed twenty {candidates|applicants}, none of whom spoke French.",
        "People take \"of whom\": \"none of whom\". *none of them spoke French after a comma would join two sentences without a linker."),
      mc("Which sentence is correct?", [
        "I invited thirty people, most of whom came.",
        "I invited thirty people, most of who came.",
        "I invited thirty people, most of them came.",
        "I invited thirty people, most of which came.",
      ], "\"Most of whom\" for people. \"Of who\" is never correct, \"which\" is for things, and \", most of them came\" is two sentences joined by a comma."),
      lc("He sent me three emails, none of which I answered.", [
        "Me envió tres correos y no contesté ninguno.",
        "Me envió tres correos, pero ninguno era para mí.",
        "No me envió ningún correo, así que no contesté.",
        "Me envió tres correos y los contesté todos.",
      ], "\"None of which\" = «ninguno de los cuales»: he sent three emails and I didn't answer any of them."),
      fb("Everything ___ you need is in this folder.", "that", "Todo [lo que] necesitas está en esta carpeta.",
        "After \"everything\", use \"that\" or nothing: \"Everything (that) you need\". *Everything what is a classic mistake."),
      tr("Eso es todo lo que recuerdo.", ["That's all {that |}I remember.", "That's everything {that |}I remember."],
        "«Todo lo que» after \"all\" or \"everything\" is \"that\" or nothing, never *what."),
      wo("Nothing she told me was new.", "Nada de lo que me dijo era nuevo.",
        "«Nada de lo que» = \"Nothing (that)\". The pronoun is the object, so it can be left out."),
      dc("She gave me two pieces of advice, neither of which helped.",
        "\"Neither of which\" = «ninguno de los dos», for things. \"Advice\" is uncountable, so we say \"pieces of advice\"."),
      sp("My aunt, whose husband is a chef, makes amazing cakes.", "\"Whose husband\" = «cuyo marido», between commas because it's extra information.",
        "Pause briefly at each comma and lower your voice a little inside the clause.", "Say it in English: Mi tía, cuyo marido es chef, hace unos pasteles increíbles."),
      sp("It rained the whole time, which was a pity.", "\", which was a pity\" comments on the whole first clause.",
        "Pause before \"which\".", "Say it in English: Llovió todo el tiempo, lo cual fue una pena."),
      dc("The manager, to whom I sent my complaint, never replied.",
        "Formal order: preposition + \"whom\". The informal version is \"The manager, who I sent my complaint to, ...\"."),
      lc("My brother, who lives in Miami, is coming for Christmas.", [
        "Mi hermano, que vive en Miami, viene en Navidad.",
        "Mi hermano vive en Miami desde Navidad.",
        "Mi hermano, cuya casa está en Miami, viene en Navidad.",
        "Mi hermano y yo vivimos en Miami desde Navidad.",
      ], "\"Who lives in Miami\" is extra information about the brother, between the pauses you hear."),
      tr("Mi hermano, que es abogado, me ayudó con el contrato.", "My brother, who is a lawyer, helped me with the contract.",
        "After a comma, \"who\", never *that. And «es abogado» needs \"a\": \"a lawyer\"."),
      tr("Llegó tarde otra vez, lo que molestó a todo el mundo.", "{She|He} {was late|arrived late|came late|got here late} again, which annoyed everyone.",
        "«Lo que» after a comma, about the whole idea, is \", which\". *what annoyed everyone is the typical error."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Commas or not, «lo que», errors and joining sentences
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Commas, What or Which?",
    "You will be able to decide when a relative clause needs commas, when you can drop the pronoun, how to translate «lo que», and how to join two sentences without the typical extra pronouns.",
    "Recap: commas, «lo que» and clean joins",
    [
      "No commas: the clause tells us WHICH one (\"People who read a lot...\"), and you can drop an object pronoun (\"the jacket I bought\"). Commas: extra information about something already clear (\"My mother, who is a nurse, ...\"), with \"who\" or \"which\" only.",
      "«Lo que» is \"what\" when it means «la cosa que» (\"What I need is sleep\"), \", which\" when it comments on the whole previous clause, and \"that\" or nothing after \"everything\" or \"all\". \"Lo que quieras\" is \"whatever you want\".",
      "No extra pronouns: \"the girl whose father...\" (not *who her father), \"the people I work with\" (not *with them), \"the house where I live\" (not *where I live in).",
    ],
    [
      ["People who read a lot write better.", "La gente que lee mucho escribe mejor."],
      ["What I need right now is a good night's sleep.", "Lo que necesito ahora mismo es dormir bien una noche."],
      ["He didn't call back, which was strange.", "No volvió a llamar, lo cual fue raro."],
      ["These are the colleagues I work with.", "Estos son los compañeros con los que trabajo."],
    ],
    [
      mc("You have two sisters. How do you say «Mi hermana que vive en Quito es arquitecta»?", [
        "My sister who lives in Quito is an architect.",
        "My sister, who lives in Quito, is an architect.",
        "My sister, that lives in Quito, is an architect.",
        "My sister which lives in Quito is an architect.",
      ], "With two sisters, the clause tells us WHICH sister, so it's defining: no commas. With commas it would mean you have only one sister."),
      tr("Los estudiantes que llegan tarde no pueden entrar.", "{Students|The students} {who|that} {arrive|come} late {can't|cannot} {come in|go in|enter}.",
        "The clause tells us which students, so no commas, and \"who\" or \"that\" are both fine."),
      tr("El Amazonas, que atraviesa varios países, es enorme.", "The Amazon, which {crosses|flows through|runs through} several countries, is {huge|enormous}.",
        "There's only one Amazon, so the clause is extra information: commas + \"which\"."),
      fb("The jacket ___ I bought online doesn't fit me.", ["that", "which"], "La chaqueta [que] compré por internet no me queda.",
        "A defining clause with an object pronoun: \"that\" or \"which\", and you could also leave it out: \"the jacket I bought online\"."),
      mc("In which sentence can you leave out the relative pronoun?", [
        "The movie that we watched last night was boring.",
        "The woman who lives upstairs is a singer.",
        "Our teacher, who we all love, is retiring.",
        "The train, which leaves at nine, is always full.",
      ], "You can drop it only when it's the object (another subject, \"we\", comes right after it) and there are no commas."),
      tr("Los vecinos con los que compartimos el patio son muy amables.", ["The neighbors {|who |that }we share the {yard|patio} with are very {nice|kind|friendly}.", "The neighbors with whom we share the {yard|patio} are very {nice|kind|friendly}."],
        "The preposition goes at the end: \"the neighbors we share the yard with\". Formal: \"with whom\". Never *with who or *with them."),
      wo("The man who fixed my car was very honest.", "El hombre que me arregló el carro fue muy honesto.",
        "\"Who\" is the subject of \"fixed\", so it can't be left out: *The man fixed my car was... is a different sentence."),
      fb("___ I don't understand is why he left.", "What", "[Lo que] no entiendo es por qué se fue.",
        "«Lo que» meaning «la cosa que», with no noun before it, is \"What\". *That I don't understand is wrong."),
      tr("No entiendo lo que quieres decir.", "I don't understand what you mean.",
        "«Lo que» = \"what\" here. *I don't understand that you mean is wrong; \"mean\" = «querer decir»."),
      tr("Pide lo que quieras.", ["Order whatever you want.", "Order whatever you like.", "Order what you want."],
        "«Lo que quieras» is usually \"whatever you want\"."),
      fb("Tell me ___ the doctor said.", "what", "Cuéntame [lo que] dijo el médico.",
        "No noun before «lo que», so \"what\". \"What the doctor said\" is the object of \"tell me\"."),
      mc("Choose the correct translation of «Lo que más me gusta de mi ciudad es la comida».", [
        "What I like most about my city is the food.",
        "That I like most about my city is the food.",
        "Which I like most about my city is the food.",
        "The thing what I like most about my city is the food.",
      ], "«Lo que» = «la cosa que» → \"What\". \"The thing that\" would also work, but never *the thing what."),
      fb("We won the final, ___ nobody expected.", "which", "Ganamos la final, [cosa que] nadie esperaba.",
        "«Cosa que» or «lo que» after a comma, about the whole sentence, is \", which\"."),
      tr("Lo que pasa es que no tengo carro.", "The thing is{,|} I don't have a car.",
        "«Lo que pasa es que...» is the fixed phrase \"The thing is...\"."),
      tr("Lo único que quiero es dormir.", ["All I want is to {sleep|get some sleep}.", "The only thing {|that }I want is to {sleep|get some sleep}."],
        "«Lo único que» = \"all\" or \"the only thing\", followed by \"that\" or nothing, never *what."),
      lc("She told me everything she knew.", [
        "Me contó todo lo que sabía.",
        "Me contó lo que no sabía.",
        "Me dijo que lo sabía todo.",
        "Me contó algo que sabía.",
      ], "\"Everything she knew\" = «todo lo que sabía». After \"everything\", the pronoun can be left out."),
      lc("Whatever you decide, I'll support you.", [
        "Decidas lo que decidas, te apoyaré.",
        "Si no decides nada, te apoyaré.",
        "Cuando lo decidas, te ayudaré.",
        "Lo que decidiste me sorprendió.",
      ], "\"Whatever\" = «lo que sea» or «decidas lo que decidas»."),
      mc("Which sentence is correct?", [
        "The man I met at the gym is a firefighter.",
        "The man which I met at the gym is a firefighter.",
        "The man what I met at the gym is a firefighter.",
        "The man who I met him at the gym is a firefighter.",
      ], "For people, \"who\", \"that\" or nothing. \"Which\" is for things, \"what\" never follows a noun, and the pronoun already replaces \"him\"."),
      tr("La chica cuyo padre es dueño del restaurante está en mi clase.", "The girl whose father {owns|is the owner of} the restaurant is in my class.",
        "«Cuyo» (or informal «que su») is always \"whose\". *The girl who her father owns... is the typical error."),
      tr("Este es el departamento donde vivo.", ["This is the apartment where I live.", "This is the apartment {|that |which }I live in.", "This is the apartment in which I live."],
        "Three correct options. But never *where I live in: \"where\" already contains the preposition."),
      fb("That's the reason ___ I quit.", ["why", "that"], "Esa es la razón [por la que] renuncié.",
        "«La razón por la que» = \"the reason why\" (or \"that\", or nothing). Never *the reason because."),
      tr("Esas son las personas con las que viajé.", ["Those are the people {|who |that }I traveled with.", "Those are the people with whom I traveled."],
        "The pronoun replaces \"them\", so don't add it: *the people I traveled with them is wrong."),
      dc("The documents I printed this morning are on your desk.",
        "Defining clause with no pronoun: \"the documents (that) I printed\". No *them at the end."),
      wo("That's the hotel we stayed at last summer.", "Ese es el hotel en el que nos quedamos el verano pasado.",
        "\"Stay at\": the preposition goes at the end of the clause, and the pronoun is left out."),
      mc("Join: \"I met a woman. Her husband is a famous chef.\"", [
        "I met a woman whose husband is a famous chef.",
        "I met a woman who her husband is a famous chef.",
        "I met a woman that her husband is a famous chef.",
        "I met a woman whose her husband is a famous chef.",
      ], "A possessive (\"her husband\") becomes \"whose husband\". \"Her\" disappears."),
      fb("Join: \"This is the park. I learned to ride a bike there.\" → This is the park ___ I learned to ride a bike.", "where", "Este es el parque [donde] aprendí a andar en bicicleta.",
        "\"Where\" replaces \"there\", so \"there\" disappears."),
      tr("Mi tío, que tiene 70 años, todavía corre maratones.", "My uncle, who is {70|seventy}, still runs marathons.",
        "A known person + extra information: commas + \"who\"."),
      fb("I sent the report to three clients, two of ___ replied.", "whom", "Envié el informe a tres clientes, dos de [los cuales] respondieron.",
        "\"Two of them replied\" joins as \"two of whom replied\"."),
      tr("No me devolvió el dinero, lo que me enojó.", "{He|She} didn't {pay me back|give me back the money|give the money back|give me the money back|return the money}, which {made me angry|annoyed me}.",
        "When the second idea comments on the whole first sentence, join with \", which\"."),
      sp("That's exactly what I was thinking.", "No noun before «lo que», so \"what\".",
        "Stress \"exactly\".", "Say it in English: Eso es exactamente lo que estaba pensando."),
      sp("The school I went to has closed.", "Defining clause with the pronoun left out and \"to\" at the end: \"the school I went to\".",
        "Say \"went to\" smoothly: \"wen-tuh\".", "Say it in English: La escuela a la que fui ha cerrado."),
      dc("I remember the day we got our first dog.",
        "After \"the day\", you can use \"when\", \"that\" or nothing: \"the day (when) we got...\"."),
      mt("Match each Spanish phrase with its English translation.", [
        ["Lo que necesito...", "What I need..."],
        ["Todo lo que tengo...", "Everything I have..."],
        ["..., lo que me sorprendió.", "..., which surprised me."],
        ["Lo que quieras.", "Whatever you want."],
        ["Lo que pasa es que...", "The thing is..."],
      ], "Five ways to translate «lo que»: \"what\" (no noun before), \"everything (that)\", \", which\" for a whole idea, \"whatever\" and the fixed phrase \"The thing is\"."),
      tr("Todo lo que me dijiste era mentira.", "Everything {|that }you told me was a lie.",
        "«Todo lo que» → \"Everything (that)\", never *everything what."),
      mc("Which sentence is correct?", [
        "The castle, which we visited on Monday, was built in 1200.",
        "The castle, we visited on Monday, was built in 1200.",
        "The castle, that we visited on Monday, was built in 1200.",
        "The castle, what we visited on Monday, was built in 1200.",
      ], "Between commas, the pronoun must be \"which\" for a thing, and it can't be left out, even as an object."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Participle clauses, describing and profiles + whole unit
  // ---------------------------------------------------------------------
  lesson(
    3,
    "The Woman Sitting by the Window",
    "You will be able to shorten relative clauses with -ing and -ed, open sentences with participle clauses, describe things you can't name, and pack a profile with relative clauses, mixing everything from the unit.",
    "Recap: shorter clauses, same subject",
    [
      "-ing replaces an active relative clause (\"the man sitting by the door\" = who is sitting), and -ed replaces a passive one (\"a house built in 1920\" = which was built). Spanish «sentado», «apoyado» become \"sitting\", \"leaning\".",
      "At the start of a sentence: \"Feeling tired, I...\" (reason), \"Having finished, she...\" (an earlier action), \"Not knowing what to do, we...\", \"Founded in 2010, the company...\". The subject of the participle must be the subject of the main clause.",
      "To describe what you can't name: \"It's a thing you use to...\", \"the place where...\", \"the one who...\". And ask \"What do you call...?\", never *How do you call...?.",
    ],
    [
      ["Who's the man sitting by the door?", "¿Quién es el hombre sentado junto a la puerta?"],
      ["It's a phone made in Korea.", "Es un teléfono fabricado en Corea."],
      ["Having read the instructions, she set up the printer herself.", "Después de leer las instrucciones, instaló la impresora ella sola."],
      ["It's a thing you use to open cans.", "Es una cosa que se usa para abrir latas."],
    ],
    [
      fb("Who's the woman ___ next to your brother?", "sitting", "¿Quién es la mujer [sentada] al lado de tu hermano?",
        "For body positions English uses -ing: \"sitting\", not *sat or *seated, where Spanish uses «sentada»."),
      fb("They live in a house ___ in 1920.", "built", "Viven en una casa [construida] en 1920.",
        "A passive meaning (the house was built) takes the past participle: \"built\"."),
      mc("How do you say «el chico apoyado en la pared»?", [
        "the boy leaning against the wall",
        "the boy leaned against the wall",
        "the boy who leaning against the wall",
        "the boy is leaning against the wall",
      ], "A reduced relative uses -ing for positions: \"leaning\". With \"who\" you'd need \"who is leaning\"."),
      tr("La gente que vive en el centro paga más de alquiler.", ["People living {downtown|in the city center|in the center} pay more {rent|in rent}.", "People {who|that} live {downtown|in the city center|in the center} pay more {rent|in rent}."],
        "\"People who live\" can be shortened to \"people living\": the -ing form also replaces the present simple."),
      tr("Es una aplicación diseñada para estudiantes.", "It's an app designed for students.",
        "\"Designed\" = \"which was designed\": a passive meaning, so the past participle."),
      mc("-ing or -ed? «Las personas entrevistadas estaban contentas.»", [
        "The people interviewed were happy.",
        "The people interviewing were happy.",
        "The people who interviewed were happy.",
        "The interviewing people were happy.",
      ], "The people received the action (they were interviewed), so -ed. \"The people interviewing\" would be the ones asking the questions."),
      wo("Most of the coffee sold here comes from Colombia.", "La mayoría del café que se vende aquí viene de Colombia.",
        "\"Sold\" = \"which is sold\": a passive reduced relative."),
      fb("___ tired, I decided to stay home.", "Feeling", "[Como estaba] cansado, decidí quedarme en casa.",
        "A participle clause at the start can give a reason: \"Feeling tired\" = because I felt tired."),
      tr("Después de terminar la tarea, los niños salieron a jugar.", ["Having finished their homework, the {children|kids} went out to play.", "After finishing their homework, the {children|kids} went out to play.", "After they had finished their homework, the {children|kids} went out to play."],
        "\"Having\" + past participle shows the first action was complete before the second. \"After finishing\" also works."),
      fb("___ knowing the address, we called the hotel.", "Not", "[Sin] saber la dirección, llamamos al hotel.",
        "The negative participle clause puts \"not\" before the -ing form: \"Not knowing...\"."),
      mc("Which sentence is correct?", [
        "Waiting for the bus, I saw an accident.",
        "Waiting for the bus, an accident happened.",
        "Waiting for the bus, there was an accident.",
        "Waited for the bus, I saw an accident.",
      ], "The subject of the main clause must be the one waiting: \"I\". *an accident happened says the accident was waiting for the bus (a dangling participle)."),
      tr("Construido en 1850, el teatro sigue abierto.", "Built in 1850, the theater is still open.",
        "A past participle at the start gives passive background about the subject. The theater was built, so the subject is \"the theater\"."),
      dc("Having missed the first train, we took a taxi to the airport.",
        "\"Having missed\" = after we had missed. The subject \"we\" does both actions."),
      tr("Es una cosa que se usa para secar los platos.", ["It's a thing {|that |which }you use to dry {the dishes|dishes}.", "It's something {|that }you use to dry {the dishes|dishes}."],
        "«Se usa» becomes \"you use\". In speech the pronoun \"that\" is usually left out: \"a thing you use to...\"."),
      fb("What do you ___ the thing you use to dry your hair?", "call", "¿[Cómo se llama] la cosa que usas para secarte el pelo?",
        "«¿Cómo se llama...?» is \"What do you call...?\". *How do you call is a Spanish-style error."),
      mc("Which question is correct?", [
        "What do you call this in English?",
        "How do you call this in English?",
        "How is called this in English?",
        "What is called this in English?",
      ], "In English you ask WHAT you call something: \"What do you call this?\" or \"What's this called?\"."),
      tr("¿Qué carro? El que está estacionado afuera.", "Which car? The one {that's|that is|which is|} parked outside.",
        "«El que» is \"the one (that)\". \"The one parked outside\" is the shortened version."),
      sp("It's the place where you pick up your luggage.", "\"The place where...\" helps you describe a word you can't remember (baggage claim).",
        "Link \"pick up\": \"pi-kup\".", "Say it in English: Es el lugar donde recoges el equipaje."),
      tr("Fundada en 2010, la empresa tiene ahora 50 empleados.", ["Founded in 2010, the company now has {50|fifty} employees.", "Founded in 2010, the company has {50|fifty} employees now."],
        "\"Founded in 2010\" opens the sentence, and its subject is the company, the subject of the main clause."),
      mc("Which sentence is punctuated correctly?", [
        "Our director, Laura Gomez, studied in Boston.",
        "Our director, Laura Gomez studied in Boston.",
        "Our director Laura Gomez, studied in Boston.",
        "Our director, Laura Gomez, studied, in Boston.",
      ], "An appositive in the middle of a sentence needs a comma on both sides. Never one single comma between the subject and its verb."),
      wo("Born in Chile, the author now lives in Toronto.", "Nacida en Chile, la autora vive ahora en Toronto.",
        "\"Born in...\" at the start, followed by a comma and the subject it describes."),
      tr("El hombre que admitió haber roto la ventana pagó la reparación.", "The man {who|that} admitted {breaking|having broken} the window paid for the {repair|repairs}.",
        "Inside the relative clause, \"admit\" keeps its pattern: \"admit\" + -ing. Never *admitted to break."),
      fb("The waiter, who had promised ___ us a table by the window, forgot.", ["to give"], "El mesero, que había prometido [darnos] una mesa junto a la ventana, se olvidó.",
        "\"Promise\" takes \"to\" + base form, also inside a relative clause."),
      tr("La persona a la que envié el paquete no lo recibió.", ["The person {|who |that }I sent the package to {didn't receive it|never received it|never got it|didn't get it}.", "The person to whom I sent the package {didn't receive it|never received it|never got it|didn't get it}."],
        "Everyday: \"the person I sent the package to\". Formal: \"the person to whom I sent the package\"."),
      fb("The painting, which is believed ___ been stolen in 1985, was found in a garage.", "to have", "El cuadro, que [se cree que fue] robado en 1985, apareció en un garaje.",
        "\"Is believed\" + perfect infinitive \"to have been stolen\" for an earlier action, typical of news reports."),
      tr("Mi vecina, cuya hija estudia conmigo, es médica.", "My neighbor, whose daughter {studies|is studying} with me, is a doctor.",
        "\"Whose\" + noun between commas. Remember \"a\" before a job: \"a doctor\"."),
      tr("Perdí el pasaporte, lo que significó que no pude viajar.", "I lost my passport, which meant {that |}I couldn't travel.",
        "\", which\" comments on the whole first clause. *what meant is wrong."),
      mc("Which sentence is correct?", [
        "The students, most of whom were from Brazil, loved the course.",
        "The students, most of who were from Brazil, loved the course.",
        "The students, most of them were from Brazil, loved the course.",
        "The students, most of which were from Brazil, loved the course.",
      ], "Quantifier + \"of whom\" for people. \"Of who\" is never correct, and \"which\" is for things."),
      dc("The woman sitting at the front desk will help you.",
        "\"Sitting\" = \"who is sitting\": a reduced relative with -ing."),
      lc("Founded by two students, the company now sells its products in forty countries.", [
        "Fundada por dos estudiantes, la empresa vende ahora sus productos en cuarenta países.",
        "La empresa fundó una escuela para estudiantes en cuarenta países.",
        "Dos estudiantes compraron la empresa y ahora venden en cuarenta países.",
        "La empresa contrató a dos estudiantes de cuarenta países.",
      ], "\"Founded by two students\" gives passive background about the company: it was founded by them."),
      sp("Not knowing anyone at the party, I stayed close to the door.", "\"Not knowing\" gives the reason, and its subject is \"I\", the subject of the main clause.",
        "Pause after \"party\".", "Say it in English: Como no conocía a nadie en la fiesta, me quedé cerca de la puerta."),
      dc("Montreal, where my cousin lives, is beautiful in winter.",
        "\", where\" adds extra information about a place, so you hear a pause before and after it."),
      tr("El libro del que te hablé ya salió en español.", ["The book {|that |which }I told you about {is already out|has already come out|is now out|came out} in Spanish.", "The book about which I told you {is already out|has already come out} in Spanish."],
        "\"Tell someone about\": the preposition stays at the end in everyday English."),
      tr("Es el chico cuyo papá es dueño del gimnasio.", "{He's|That's} the {boy|guy|kid} whose {dad|father} owns the gym.",
        "Even when Spanish speakers say «el chico que su papá...», English needs \"whose\": never *who his dad."),
      mt("Match each Spanish phrase with its English translation.", [
        ["la mujer sentada junto a la ventana", "the woman sitting by the window"],
        ["un puente construido en 1900", "a bridge built in 1900"],
        ["Como no sabía qué hacer,", "Not knowing what to do,"],
        ["Después de comer,", "Having eaten,"],
        ["un perro llamado Toby", "a dog called Toby"],
      ], "-ing for active meanings and positions, past participles for passive ones, \"Not\" + -ing for a negative reason, and \"Having\" + participle for an earlier action."),
    ],
  ),
];
