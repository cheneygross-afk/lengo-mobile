// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u11-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u11 (reading and listening strategies, accents and varieties of English): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const fe = (prompt: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt, sentence, answer, explanation };

const mc = (question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "multiple-choice", question, options, correctIndex, explanation,
});

const wo = (sentence: string, translation: string, explanation: string, alts: string[] = []): Ex =>
  alts.length
    ? { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, altOrders: alts.map((a) => a.split(" ")), explanation }
    : { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, explanation };

const dt = (audio: string, explanation: string): Ex => ({ type: "dictation", audio, explanation });

const lc = (audio: string, question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "listen-choose", audio, question, options, correctIndex, explanation,
});

const sp = (text: string, spanish: string, tip: string, explanation: string): Ex => ({
  type: "speak", text, prompt: `Say in English: «${spanish}»`, tip, explanation,
});

const mt = (instructions: string, pairs: [string, string][], explanation: string): Ex => ({
  type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation,
});

const drill = (
  slug: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Ex[],
): Lesson => {
  const seconds = exercises.reduce((t, e) => t + SECONDS[e.type], 0) + 45;
  return {
    slug,
    level: "EN-C2",
    number: 1,
    title,
    summary,
    duration: `${Math.round(seconds / 60)} min`,
    sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
    exercises,
  };
};

export const EN_C2_U11_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Guessing words, register shifts, fast speech, reference, accents
  // ---------------------------------------------------------------------
  drill(
    "en-c2-strategies-accents-unit-drill-1",
    "Drill: Context, Register, Fast Speech and Reference",
    "Work out rare words from context and word parts, read what a register shift reveals, rebuild reduced forms of fast speech, track what this, such, the latter, so and do so refer to, and recognize the main accents of English.",
    "Recap: strategies for hard texts and fast speech",
    [
      "Guess unknown words from context clues (definition, contrast such as \"far from\", example, cause) and from Latin roots your Spanish already knows, but suspect false friends such as \"casualty\", \"notorious\" and \"eventual\". A sudden drop into slang signals honesty or humor; a sudden rise into formality signals irony, coldness or anger.",
      "Fast speech squeezes grammar words (weak forms), links and drops sounds (\"las night\", \"wouldja\") and reduces \"going to\" before a verb to \"gonna\". Track reference words: \"which\" for a whole clause, \"such a\", \"the latter\", \"I think so / I hope not\", \"he never did\". Rhotic accents (American, Scottish, Irish) pronounce the r in \"car\"; Southern British and Australian do not.",
    ],
    [
      ["Far from being shy, she talked all night.", "Lejos de ser tímida, habló toda la noche."],
      ["I would appreciate it if you knocked first.", "Te agradecería que tocaras antes de entrar."],
      ["The bus was late, which made me miss the interview.", "El autobús llegó tarde, lo cual me hizo perder la entrevista."],
      ["Will it be expensive? I'm afraid so.", "¿Será caro? Me temo que sí."],
    ],
    [
      mc(
        "\"Far from being frugal, he spent his whole bonus in one weekend.\" What does \"frugal\" most likely mean?",
        [
          "careful with money",
          "generous with friends",
          "very rich",
          "lazy at work",
        ],
        0,
        "\"Far from\" signals a contrast: he did the opposite of being frugal, so \"frugal\" must mean careful with money. Spanish «frugal» confirms the guess.",
      ),
      tr(
        "Era un hombre belicoso que discutía con todo el mundo.",
        "He was a bellicose man who argued with everyone.",
        [
          "He was a bellicose man who argued with everybody.",
          "He was a bellicose man who quarreled with everyone.",
          "He was a bellicose man who would argue with everyone.",
          "He was an aggressive man who argued with everyone.",
        ],
        "Formal Latinate words like \"bellicose\" (double l in English) are often transparent to Spanish speakers, even when an English child would not know them.",
      ),
      fb(
        "The new rules turned out to be ___; they caused more delays than they prevented.",
        "counterproductive",
        "Las nuevas normas resultaron [contraproducentes]; causaron más retrasos de los que evitaron.",
        [],
        "Take the word apart: \"counter-\" (against) + \"productive\". The second clause confirms it by stating the effect.",
      ),
      mc(
        "\"There were no casualties in the fire.\" What does this mean?",
        [
          "Nobody was killed or injured",
          "The fire did not start by chance",
          "No buildings were damaged",
          "Nobody was arrested",
        ],
        0,
        "A \"casualty\" is a person killed or injured. It has nothing to do with «casualidad», which is \"coincidence\" or \"chance\".",
      ),
      tr(
        "Es un mentiroso de sobra conocido en la oficina.",
        "He's a notorious liar in the office.",
        [
          "He is a notorious liar in the office.",
          "He's a notorious liar at the office.",
          "He's a notorious liar at work.",
          "He's a well-known liar in the office.",
          "He's known around the office as a liar.",
        ],
        "\"Notorious\" means famous for something bad, so it fits \"liar\" perfectly. Avoid it for good things: *a notorious scientist suggests a scandal.",
      ),
      tr(
        "La ganadora final fue una chica de quince años.",
        "The eventual winner was a fifteen-year-old girl.",
        [
          "The eventual winner was a 15-year-old girl.",
          "The winner in the end was a fifteen-year-old girl.",
          "The eventual winner was a girl of fifteen.",
        ],
        "English \"eventual\" means «final», the one who won in the end. Note the hyphenated compound adjective with singular \"year\": \"a fifteen-year-old girl\", never *fifteen-years-old.",
      ),
      mc(
        "A manager ends a careful, formal presentation with: \"Long story short, we're broke.\" What does the shift signal?",
        [
          "Honesty: the real situation without the official wrapping",
          "Extra respect for senior colleagues",
          "Uncertainty about the figures",
          "Anger at the audience",
        ],
        0,
        "Dropping into informal language mid-stream usually signals honesty, solidarity or humor. \"Long story short\" often announces it.",
      ),
      lc(
        "Oh, so you've finally decided to grace us with your presence.",
        "What is the speaker's attitude?",
        [
          "Sarcastic: the person has arrived late",
          "Grateful for an important guest",
          "Neutral and formal",
          "Worried about the person's health",
        ],
        0,
        "A sudden rise into formal, flowery language between people who know each other is a classic sign of irony. \"Finally\" confirms the complaint.",
      ),
      tr(
        "Se ruega a los pasajeros que se abstengan de usar el celular.",
        "Passengers are requested to refrain from using their phones.",
        [
          "Passengers are asked to refrain from using their phones.",
          "Passengers are requested to refrain from using their cell phones.",
          "Passengers are asked to refrain from using their cell phones.",
          "Passengers are kindly requested to refrain from using their phones.",
          "Passengers are requested to refrain from using cell phones.",
          "Passengers are asked to refrain from using cell phones.",
        ],
        "Official notices use the passive and formal verbs: \"are requested to\", \"refrain from\" + -ing. In conversation the same request is simply \"Please don't use your phone\".",
      ),
      fb(
        "The ceremony will ___ at noon.",
        "commence",
        "La ceremonia [dará comienzo] a mediodía.",
        ["begin", "start"],
        "\"Commence\" is formal, even pompous, in English, although «comenzar» is everyday Spanish. \"Begin\" is neutral-formal and \"start\" is everyday.",
      ),
      tr(
        "Te agradecería que no me interrumpieras.",
        "I would appreciate it if you didn't interrupt me.",
        [
          "I would appreciate it if you did not interrupt me.",
          "I would appreciate it if you wouldn't interrupt me.",
          "I would appreciate it if you stopped interrupting me.",
        ],
        "\"I would appreciate it if\" + past simple. Between colleagues or partners, this sudden formality signals anger or hurt, as a sudden «usted» would in Spanish.",
      ),
      tr(
        "Seamos sinceros: nadie lee el manual.",
        "Let's face it: nobody reads the manual.",
        [
          "Let's face it, nobody reads the manual.",
          "Let's face it: no one reads the manual.",
          "Let's be honest: nobody reads the manual.",
          "Let's be honest, nobody reads the manual.",
          "Let's be honest: no one reads the manual.",
        ],
        "\"Let's face it\" is a typical marker of a shift down in register: the speaker drops the official tone to say what everyone really thinks.",
      ),
      dt(
        "What do you want to do this weekend?",
        "In fast speech this sounds like \"whaddaya wanna do\". Catch the stressed words (\"what\", \"do\", \"weekend\") and rebuild the grammar around them.",
      ),
      dt(
        "She must have forgotten to tell them.",
        "You hear \"must've\" (sometimes \"musta\") and \"them\" reduced to /əm/. The written form is always \"must have\", never *must of.",
      ),
      mc(
        "In which sentence can \"going to\" NOT be reduced to \"gonna\"?",
        [
          "I'm going to Chicago next week.",
          "I'm going to call you later.",
          "It's going to rain this afternoon.",
          "We're going to need more chairs.",
        ],
        0,
        "\"Gonna\" only replaces \"going to\" before a verb. When you are going to a place, \"to\" is a preposition and the phrase is never reduced that way.",
      ),
      fe(
        "Write the full standard form of what you hear as \"shoulda\".",
        "You ___ told me earlier.",
        "should have",
        ["should've"],
        "\"Should've\" sounds like \"shoulda\" or \"should of\", but the word is always \"have\". *Should of is a spelling of the sound, not a correct form.",
      ),
      lc(
        "Would you mind closing the window?",
        "In natural fast speech, how do \"would you\" usually sound?",
        [
          "Like \"wouldja\"",
          "Like \"wood you\", with a pause between the words",
          "Like \"would-ee-you\"",
          "Like \"woo\", with \"you\" dropped",
        ],
        0,
        "A /d/ followed by \"you\" merges into a \"j\" sound: \"would you\" becomes \"wouldja\", \"did you\" becomes \"didja\". This is standard, not sloppy, speech.",
      ),
      tr(
        "El tren llegó con dos horas de retraso, lo cual nos hizo perder la conexión.",
        "The train was two hours late, which made us miss our connection.",
        [
          "The train was two hours late, which made us miss the connection.",
          "The train was two hours late, which meant we missed our connection.",
          "The train was delayed by two hours, which made us miss our connection.",
          "The train was delayed two hours, which made us miss our connection.",
          "The train arrived two hours late, which made us miss our connection.",
          "The train was two hours late, so we missed our connection.",
        ],
        "«Lo cual» referring to a whole clause is \"which\", never *what. Note \"made us miss\" (no \"to\" after \"make\" + object).",
      ),
      fb(
        "Is the pharmacy open on Sunday? I think ___.",
        "so",
        "¿La farmacia abre el domingo? Creo [que sí].",
        [],
        "\"So\" replaces the whole clause after \"think\", \"hope\", \"expect\" and \"suppose\". *I think yes is a calque of «creo que sí».",
      ),
      fb(
        "Will the meeting run late? I hope ___.",
        "not",
        "¿Se alargará la reunión? Espero [que no].",
        [],
        "The negative substitute is \"not\": \"I hope not\", \"I'm afraid not\". *I hope no is the typical calque of «espero que no».",
      ),
      tr(
        "Nunca había recibido una queja así.",
        "I had never received such a complaint.",
        [
          "I'd never received such a complaint.",
          "I had never received a complaint like that.",
          "I'd never received a complaint like that.",
          "I had never had such a complaint.",
          "I had never received a complaint like this.",
        ],
        "With a singular countable noun the article comes after \"such\": \"such a complaint\". *A such complaint is modeled on «una queja así».",
      ),
      fb(
        "Both Lima and Quito were options; we chose the ___ because it was cheaper.",
        "latter",
        "Lima y Quito eran opciones; elegimos [esta última] porque era más barata.",
        [],
        "\"The latter\" is the second of two things already mentioned (Quito); \"the former\" is the first. With three or more, use \"the last\".",
      ),
      tr(
        "Marta y Luis tienen 28 y 33 años, respectivamente.",
        "Marta and Luis are 28 and 33, respectively.",
        [
          "Marta and Luis are 28 and 33 respectively.",
          "Marta and Luis are 28 and 33 years old, respectively.",
          "Marta and Luis are 28 and 33 years old respectively.",
        ],
        "\"Respectively\" pairs the two lists in order: Marta is 28, Luis is 33. Ages use \"be\", never *have 28 years.",
      ),
      tr(
        "Prometió devolver el dinero, pero nunca lo hizo.",
        "He promised to pay the money back, but he never did.",
        [
          "He promised to pay back the money, but he never did.",
          "He promised to return the money, but he never did.",
          "He promised to pay the money back, but he never did so.",
          "He promised to return the money, but he never did so.",
          "She promised to pay the money back, but she never did.",
          "She promised to return the money, but she never did.",
          "She promised to pay back the money, but she never did.",
        ],
        "English avoids repeating the verb phrase: \"he never did\" (or formal \"did so\"). «Lo hizo» does not need a literal *it here.",
      ),
      wo(
        "My old laptop died, so I ordered a new one.",
        "Se me murió la laptop vieja, así que pedí otra.",
        "\"One\" replaces a singular countable noun (\"laptop\"). *I ordered other is a calque of «pedí otra».",
      ),
      mc(
        "\"The roads were icy. Three schools stayed closed.\" What is the unstated link between the two sentences?",
        [
          "Cause and effect",
          "Contrast",
          "An example",
          "A concession",
        ],
        0,
        "Skilled writers often leave the connector out. The ice caused the closures: you supply the missing \"so\" yourself.",
      ),
      wo(
        "Far from being shy, she talked to everyone at the party.",
        "Lejos de ser tímida, habló con todos en la fiesta.",
        "\"Far from\" + -ing introduces a contrast clue. The verb is \"talk to\" + person, and the place (\"at the party\") comes last.",
      ),
      mc(
        "In which accent would you clearly hear both r sounds in \"car park\"?",
        [
          "General American",
          "Southern British (the standard often called RP)",
          "Australian",
          "New Zealand",
        ],
        0,
        "General American is rhotic: it pronounces an r even when no vowel follows. Southern British, Australian and New Zealand English drop it. (Americans would also say \"parking lot\".)",
      ),
      mt(
        "Match each feature with the variety of English it belongs to.",
        [
          ["\"I'm after seeing her\" (I've just seen her)", "Irish English"],
          ["\"prepone\" (bring forward)", "Indian English"],
          ["\"aye\" (yes)", "Scottish English"],
          ["\"fish\" sounding like \"fush\"", "New Zealand English"],
          ["\"I'm coming\" (I'll be right back)", "Nigerian English"],
        ],
        "None of these is an error: each is standard in its own variety. Recognizing them saves you from misunderstandings in meetings and films.",
      ),
      lc(
        "Don't worry about the delay, it's grand.",
        "The speaker is Irish. What do they mean?",
        [
          "It's fine",
          "It's enormous",
          "It's expensive",
          "It's very impressive",
        ],
        0,
        "In Irish English \"grand\" usually means \"fine\" or \"OK\", not «grande» or \"magnificent\".",
      ),
      tr(
        "Perdón, ¿lo puedes repetir un poco más despacio?",
        "Sorry, could you say that again a bit more slowly?",
        [
          "Sorry, can you say that again a bit more slowly?",
          "Sorry, could you say that again a little more slowly?",
          "Sorry, can you say that again a little more slowly?",
          "Sorry, could you repeat that a bit more slowly?",
          "Sorry, can you repeat that a bit more slowly?",
          "Sorry, could you repeat that a little more slowly?",
        ],
        "Asking for repetition is normal even between native speakers. \"Say that again\" is more natural than \"repeat it\", and the adverb is \"slowly\", not *more slow.",
      ),
      dt(
        "Turn it off and tell them to wait next door.",
        "Linking and elision: \"turn it off\" sounds like one word, \"them\" becomes /əm/, and \"next door\" loses its t (\"nex door\").",
      ),
      sp(
        "Tell them we'll be there in an hour.",
        "Diles que llegamos en una hora.",
        "\"Tell them\" sounds like \"tell 'em\", and \"in an hour\" links into \"i-na-nour\".",
        "Weak forms and linking make English rhythm. Saying every word separately, with full vowels, is the main marker of a Spanish accent.",
      ),
      sp(
        "Is it going to rain? I hope not.",
        "¿Va a llover? Espero que no.",
        "Stress \"rain\" and \"hope not\"; \"going to\" can be \"gonna\" here because a verb follows.",
        "Two points at once: \"gonna\" is possible before a verb, and «espero que no» is \"I hope not\", never *I hope no.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Sales fell sharply, which worried investors; such a drop was unexpected.",
          "Sales fell sharply, what worried investors; such a drop was unexpected.",
          "Sales fell sharply, which worried investors; a such drop was unexpected.",
          "Sales fell sharply, which it worried investors; such drop was unexpected.",
        ],
        0,
        "\"Which\" refers back to the whole clause, and \"such a\" + singular noun classifies it. *What, *a such and the extra *it are typical Spanish-influenced slips.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Varieties, decoding and producing fast speech, word detective,
  // spiral review, plus a unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-strategies-accents-unit-drill-2",
    "Drill: Varieties, Fast Speech and Dense Texts",
    "Tell American, British, Irish, Canadian and Australian forms apart and use one variety consistently, rebuild and produce connected speech, see through Mastery-level deceptive cognates, and decode reduced relatives, participle clauses, inversion and nominalization.",
    "Recap: varieties, sounds and dense structures",
    [
      "Pick one variety and keep it: American \"color\", \"traveled\", \"apartment\", \"gotten\", \"on the weekend\", \"in the hospital\"; British \"colour\", \"travelled\", \"flat\", \"got\", \"at the weekend\", \"in hospital\", \"the team are\". Irish \"grand\" is \"fine\"; Canadian spelling mixes \"colour\" with \"organize\".",
      "Rebuild fast speech from the stressed words (\"lemme getcha\" is \"let me get you\"), and in your own speech use weak forms and linking, with no extra e before s + consonant. Distrust cognates such as \"fastidious\", \"sanguine\" and \"prevaricate\", and in dense prose find the main verb, the subject of a participle, and the \"if\" hidden in \"Had I known\" or \"Should you need\".",
    ],
    [
      ["Your English has gotten so much better. (US)", "Tu inglés ha mejorado muchísimo."],
      ["Let me get you a coffee.", "Deja que te traiga un café. (se oye \"lemme getcha\")"],
      ["She's fastidious about her notes.", "Es muy meticulosa con sus apuntes."],
      ["Should you need help, call reception.", "Si necesita ayuda, llame a recepción."],
    ],
    [
      mc(
        "Which sentence uses American spelling consistently?",
        [
          "We traveled downtown to analyze the color samples at the center.",
          "We travelled downtown to analyze the color samples at the center.",
          "We traveled downtown to analyse the colour samples at the center.",
          "We traveled downtown to analyze the colour samples at the centre.",
        ],
        0,
        "American English: \"traveled\" (one l), \"analyze\", \"color\", \"center\". British English (UK): \"travelled\", \"analyse\", \"colour\", \"centre\". Either system is correct; mixing them looks careless.",
      ),
      mt(
        "Match each American word with its British (UK) equivalent.",
        [
          ["apartment", "flat (UK)"],
          ["elevator", "lift (UK)"],
          ["line (of people)", "queue (UK)"],
          ["cookie", "biscuit (UK)"],
          ["gas (for a car)", "petrol (UK)"],
        ],
        "Both columns are correct English, but they belong to different varieties. Choose one for your audience and stay with it.",
      ),
      mc(
        "A colleague from London says, \"I spilled coffee all over my pants.\" What has he spilled it on?",
        [
          "His underwear",
          "His long pants, such as jeans",
          "His shoes",
          "His jacket",
        ],
        0,
        "In British English (UK) \"pants\" means underwear; American \"pants\" are British \"trousers\". A classic misunderstanding between the two varieties.",
      ),
      tr(
        "Tu inglés ha mejorado muchísimo.",
        "Your English has gotten so much better.",
        [
          "Your English has gotten much better.",
          "Your English has gotten a lot better.",
          "Your English has improved so much.",
          "Your English has improved a lot.",
          "Your English has really improved.",
          "Your English has got so much better.",
          "Your English has got much better.",
        ],
        "American English uses \"gotten\" as the participle of \"get\" meaning \"become\"; British English (UK) uses \"got\". \"Have got\" for possession is the same in both.",
      ),
      fb(
        "What are you doing ___ the weekend?",
        "on",
        "¿Qué vas a hacer [el] fin de semana?",
        ["at"],
        "American English says \"on the weekend\"; British English (UK) says \"at the weekend\". Both are correct within their variety.",
      ),
      mc(
        "Which sentence would sound distinctly British (UK) to an American ear?",
        [
          "The team are really pleased with the result.",
          "The team is really pleased with the result.",
          "Did you eat yet?",
          "I just saw him at the gym.",
        ],
        0,
        "British English often treats collective nouns as plural (\"the team are\"), focusing on the members. American English almost always uses the singular, and prefers the past simple with \"just\" and \"yet\".",
      ),
      tr(
        "Mi abuelo pasó dos semanas en el hospital.",
        "My grandfather spent two weeks in the hospital.",
        [
          "My grandpa spent two weeks in the hospital.",
          "My grandfather was in the hospital for two weeks.",
          "My grandpa was in the hospital for two weeks.",
          "My grandfather spent two weeks in hospital.",
        ],
        "American English says \"in the hospital\"; British English (UK) drops the article, \"in hospital\". «Pasar tiempo» is \"spend time\", never *pass two weeks.",
      ),
      tr(
        "Hice fila veinte minutos para comprar los boletos.",
        "I stood in line for twenty minutes to buy the tickets.",
        [
          "I waited in line for twenty minutes to buy the tickets.",
          "I stood in line for 20 minutes to buy the tickets.",
          "I waited in line for 20 minutes to buy the tickets.",
          "I stood in line for twenty minutes to get the tickets.",
          "I queued for twenty minutes to buy the tickets.",
        ],
        "American English \"stand/wait in line\"; British English (UK) \"queue\". «Hacer fila» is never *make a line.",
      ),
      lc(
        "What's the craic? Are you coming out tonight?",
        "Which variety is this, and what does \"craic\" mean?",
        [
          "Irish English: fun, news, atmosphere",
          "Scottish English: a crack in a wall",
          "Australian English: a cold drink",
          "Canadian English: a winter hat",
        ],
        0,
        "\"Craic\" (pronounced like \"crack\") is Irish English for fun or atmosphere: \"What's the craic?\" means «¿Qué hay?» or «¿Qué onda?».",
      ),
      dt(
        "Let me get you something to drink.",
        "In fast speech you hear \"lemme getcha\". Write the full standard forms: \"let me\", \"get you\".",
      ),
      dt(
        "Did he tell her about the meeting?",
        "Unstressed \"he\" and \"her\" lose their h: it sounds like \"di de tell er\". Rebuild the pronouns from the grammar.",
      ),
      fe(
        "Write the full standard form of what you hear: \"I dunno what she wants.\"",
        "I ___ what she wants.",
        "don't know",
        ["do not know"],
        "\"Dunno\" is the spoken reduction of \"don't know\". It belongs in dialogue and messages, never in formal writing.",
      ),
      fe(
        "Write the full standard form of what you hear: \"Whaddaya gonna say to him?\"",
        "___ say to him?",
        "What are you going to",
        [],
        "Catch the stressed words first (\"what\", \"say\"), then rebuild the grammar between them: \"whaddaya\" is \"what are you\", \"gonna\" is \"going to\".",
      ),
      mc(
        "You hear: \"I ask tim if ee'd see ner.\" What was actually said?",
        [
          "I asked him if he'd seen her.",
          "I ask Tim if he'd seen her.",
          "I asked Tim if he sees her.",
          "I ask him if he'd see her.",
        ],
        0,
        "The d of \"asked\" links to \"him\" (whose h drops), \"he\" loses its h, and the n of \"seen\" links to \"her\". There is no Tim: the t comes from \"asked him\".",
      ),
      lc(
        "Gotcha. I'll send it over in a minute.",
        "What does \"gotcha\" mean here?",
        [
          "I understand",
          "I caught you doing something",
          "I've received your package",
          "Goodbye",
        ],
        0,
        "\"Gotcha\" is \"got you\" with the t and \"you\" merged. In this context it means \"understood\", like «entendido» or «va».",
      ),
      dt(
        "Don't you want to go out for an hour?",
        "\"Don't you\" sounds like \"doncha\", \"want to\" like \"wanna\", \"go out\" has a w glide (go-w-out), and \"for an hour\" links into one unit.",
      ),
      sp(
        "Stella's students start school in September.",
        "Los alumnos de Stella empiezan clases en septiembre.",
        "No vowel before s + consonant: \"students\", \"start\", \"school\" begin with a hiss, never \"es\".",
        "Adding an e (*estudents, *eschool) adds a syllable and breaks English rhythm. Link the s to the word before it or start with a long \"sss\".",
      ),
      sp(
        "I asked about the texts he sent last month.",
        "Pregunté por los mensajes que mandó el mes pasado.",
        "\"Asked\" is one syllable (/æskt/); \"texts\" can simplify to \"tex\", and \"last month\" loses its t.",
        "Native speakers simplify consonant clusters but never add a vowel. It is better to drop a t than to say *ask-ed or *text-es.",
      ),
      mc(
        "\"The landlord's parsimonious refusal to fix the heating left tenants shivering all winter.\" What does \"parsimonious\" mean?",
        [
          "extremely unwilling to spend money",
          "slow and calm",
          "polite but firm",
          "illegal",
        ],
        0,
        "The context (refusing to pay for repairs, tenants freezing) points to stinginess. Spanish «parsimonioso» (slow, calm) is a deceptive cognate here: test your guess against the whole sentence.",
      ),
      mc(
        "Using the root \"bene-\" (good), what is a \"benefactor\" most likely to be?",
        [
          "Someone who gives money or help",
          "Someone who causes harm on purpose",
          "The owner of a factory",
          "A judge in a civil court",
        ],
        0,
        "\"Bene-\" means good and \"-factor\" means doer, as in Spanish «benefactor». Its opposite root is \"mal-\", as in \"malevolent\".",
      ),
      tr(
        "Es muy meticulosa con los detalles.",
        "She's fastidious about details.",
        [
          "She is fastidious about details.",
          "She's very meticulous about details.",
          "She's meticulous about details.",
          "She's very particular about details.",
          "She's very careful about details.",
          "She's fastidious about detail.",
        ],
        "\"Fastidious\" means very careful about details, not «fastidioso» (annoying). Note \"about\" after these adjectives, not *with.",
      ),
      tr(
        "A pesar de las cifras, la directora se mostró optimista.",
        "Despite the figures, the director was sanguine.",
        [
          "Despite the figures, the director was optimistic.",
          "Despite the figures, the director seemed optimistic.",
          "Despite the figures, the director seemed sanguine.",
          "Despite the numbers, the director was optimistic.",
          "In spite of the figures, the director was optimistic.",
          "In spite of the figures, the director was sanguine.",
        ],
        "\"Sanguine\" means optimistic, not «sanguinario» (bloodthirsty). \"Despite\" takes no \"of\": *despite of the figures is a common slip.",
      ),
      fb(
        "Stop ___ and give me a straight answer.",
        "prevaricating",
        "Deja de [andarte con rodeos] y dame una respuesta directa.",
        ["beating around the bush", "evading the question"],
        "English \"prevaricate\" means to avoid giving a straight answer. Spanish «prevaricar» is a crime by a public official: a Mastery-level false friend.",
      ),
      tr(
        "Mi nueva jefa es muy simpática.",
        "My new boss is really nice.",
        [
          "My new boss is very nice.",
          "My new boss is really friendly.",
          "My new boss is very friendly.",
          "My new boss is really likeable.",
          "My new boss is really likable.",
        ],
        "Everyday «simpático» is \"nice\", \"friendly\" or \"likeable\". \"Sympathetic\" means «comprensivo»: *My boss is very sympathetic would mean she understands your problems.",
      ),
      tr(
        "El café es una de las materias primas más comercializadas del mundo.",
        "Coffee is one of the most traded commodities in the world.",
        [
          "Coffee is one of the world's most traded commodities.",
          "Coffee is one of the most widely traded commodities in the world.",
          "Coffee is one of the world's most widely traded commodities.",
        ],
        "A \"commodity\" is a raw material or basic product, not «comodidad» (comfort). After a superlative, a place takes \"in\": \"in the world\", not *of the world.",
      ),
      tr(
        "Quien desee inscribirse debe hacerlo antes del viernes.",
        "Anyone wishing to register should do so by Friday.",
        [
          "Anyone wishing to register must do so by Friday.",
          "Anyone wishing to register should do so before Friday.",
          "Anyone wishing to sign up should do so by Friday.",
          "Anyone who wishes to register should do so by Friday.",
          "Anyone who wants to register should do so by Friday.",
          "Anyone wishing to enroll should do so by Friday.",
        ],
        "«Quien desee» is a reduced relative with -ing: \"anyone wishing to\". \"Do so\" replaces the repeated verb phrase in formal English.",
      ),
      tr(
        "Al no saber qué responder, cambió de tema.",
        "Not knowing what to say, she changed the subject.",
        [
          "Not knowing what to say, he changed the subject.",
          "Not knowing what to answer, she changed the subject.",
          "Not knowing what to answer, he changed the subject.",
          "Not knowing how to respond, she changed the subject.",
          "Not knowing how to respond, he changed the subject.",
          "Not knowing what to reply, she changed the subject.",
        ],
        "A negative participle clause puts \"not\" first: \"Not knowing...\", never *Knowing not. Its subject is the subject of the main clause, and the unstated link is cause.",
      ),
      fb(
        "___ you need anything during your stay, please call the front desk.",
        "Should",
        "[Si] necesita algo durante su estadía, llame a recepción.",
        ["If"],
        "Conditional inversion: \"Should you need\" = \"If you need\", formal and polite. When a sentence starts with \"should\", \"had\" or \"were\" and ends in a period, think \"if\".",
      ),
      wo(
        "Had we known about the traffic, we would have taken the subway.",
        "Si hubiéramos sabido lo del tráfico, habríamos tomado el metro.",
        "\"Had we known\" = \"If we had known\": the auxiliary moves in front and \"if\" disappears. The main clause keeps \"would have\" + participle.",
      ),
      wo(
        "Faced with rising costs, the bakery raised its prices.",
        "Ante el aumento de los costos, la panadería subió sus precios.",
        "The participle clause comes first, and its subject is the subject of the main clause: the bakery faced the rising costs.",
      ),
      mc(
        "\"The company's failure to respond to complaints led to a loss of customers.\" Unpacked into verbs, this means:",
        [
          "The company didn't respond to complaints, so it lost customers.",
          "Customers failed to complain, so the company lost money.",
          "The company lost customers, so it stopped responding to complaints.",
          "Customers responded to the company's failure by complaining.",
        ],
        0,
        "Turn each noun back into a verb and ask who did what: \"failure to respond\" = the company didn't respond; \"loss of customers\" = it lost customers; \"led to\" = so.",
      ),
      lc(
        "Little did they know the factory was about to close.",
        "What does the sentence mean?",
        [
          "They had no idea the factory was going to close",
          "They knew a little about the closure",
          "They asked whether the factory would close",
          "They knew the factory had already closed",
        ],
        0,
        "\"Little did they know\" is emphatic negative inversion: they did not know at all. It is a statement, not a question.",
      ),
      tr(
        "Publicado en 1998, el informe sigue siendo sorprendentemente actual.",
        "Published in 1998, the report is still surprisingly relevant.",
        [
          "Published in 1998, the report remains surprisingly relevant.",
          "Published in 1998, the report still feels surprisingly relevant.",
          "Published in 1998, the report still seems surprisingly relevant.",
          "Published in 1998, the report is still surprisingly current.",
          "Published in 1998, the report is still surprisingly up to date.",
          "Published in 1998, the report still feels surprisingly current.",
        ],
        "Unit mix: a past participle clause with the same subject as the main clause, and the false friend «actual», which is \"current\" or \"relevant\", never *actual.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Rarely have I met anyone so fastidious about punctuation.",
          "Rarely I have met anyone so fastidious about punctuation.",
          "Rarely have I met anyone so fastidiously about punctuation.",
          "Rarely did I have met anyone so fastidious about punctuation.",
        ],
        0,
        "Unit mix: after a limiting adverb like \"rarely\", the auxiliary comes before the subject (\"have I met\"), and \"fastidious\" is an adjective after \"so\". Here it means very careful, not annoying.",
      ),
    ],
  ),
];
