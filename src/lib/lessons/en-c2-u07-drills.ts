// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u07-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u07 (metaphor and figurative language): a short recap, then graded practice.

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

const kw = (key: string, original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, explanation };

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

export const EN_C2_U07_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Conceptual metaphors, metonymy and synecdoche, literary
  // figures, and similes with as...as and like
  // ---------------------------------------------------------------------
  drill(
    "en-c2-figurative-unit-drill-1",
    "Drill: Metaphor, Metonymy, Literary Figures and Similes",
    "Use the verbs of English conceptual metaphors (shoot down, waste time, half-baked, hit rock bottom), decode metonymy such as Number 10 and the press, name litotes, zeugma and oxymoron, and choose the right fixed simile and like or as.",
    "Recap: the figures English thinks with",
    [
      "Conceptual metaphors fix the verbs: argument is war (\"shoot down\", \"come under fire\"), time is money (\"waste\", \"spend\"; \"lose time\" = fall behind), ideas are food (\"half-baked\", \"food for thought\", \"I don't buy it\"), up is good (\"feel down\", \"hit rock bottom\"). Metonymy names an institution by a place or object (\"Number 10\", \"the press\", \"the suits\"); synecdoche uses a part for the whole (\"all hands on deck\").",
      "Literary figures: litotes (\"no mean feat\"), zeugma (\"lost her keys and her temper\"), oxymoron (\"an open secret\"), synesthesia (\"a loud shirt\"), the transferred epithet (\"a sleepless night\"). Fixed similes use \"as...as\" (never *more stubborn than a mule) or \"like\"; \"as\" + noun is a role, \"like\" + noun a comparison.",
    ],
    [
      ["The board shot down the idea in minutes.", "La junta tumbó la idea en minutos."],
      ["Downing Street has refused to comment.", "Downing Street (el Gobierno británico) se negó a hacer comentarios."],
      ["Passing the bar exam is no mean feat.", "Aprobar el examen de abogacía no es poca cosa."],
      ["She's as stubborn as a mule.", "Es más terca que una mula."],
    ],
    [
      tr(
        "La comisión tumbó mi propuesta en diez minutos.",
        "The committee shot down my proposal in ten minutes.",
        [
          "The committee shot my proposal down in ten minutes.",
          "The committee rejected my proposal in ten minutes.",
          "The committee turned down my proposal in ten minutes.",
          "The committee turned my proposal down in ten minutes.",
          "The committee killed my proposal in ten minutes.",
        ],
        "Argument is war: proposals are \"shot down\". A word-for-word *knocked down or *threw to the ground misses the English image.",
      ),
      fb(
        "The CEO came under ___ for the way the layoffs were handled.",
        "fire",
        "El director general [recibió duras críticas] por cómo se manejaron los despidos.",
        [],
        "\"Come under fire\" = be strongly criticized, another military image. It takes no article: *came under the fire is wrong.",
      ),
      tr(
        "Deja de perder el tiempo con el celular.",
        "Stop wasting time on your phone.",
        [
          "Stop wasting your time on your phone.",
          "Stop wasting time on the phone.",
          "Stop wasting your time on the phone.",
          "Quit wasting time on your phone.",
          "Stop wasting time on your cell phone.",
          "Stop wasting time with your phone.",
        ],
        "Time is money: «perder el tiempo» is \"waste time\". *Lose time means falling behind schedule, not using time badly.",
      ),
      mc(
        "\"We ___ two days because of the snowstorm, so the project is behind schedule.\" Which verb fits?",
        ["lost", "wasted", "spent", "passed"],
        0,
        "\"Lose time\" = fall behind because of something outside your control. \"Wasted\" would blame you for using the time badly.",
      ),
      tr(
        "Quiero pasar más tiempo con mis papás.",
        "I want to spend more time with my parents.",
        ["I'd like to spend more time with my parents.", "I want to spend more time with my mom and dad.", "I would like to spend more time with my parents."],
        "«Pasar tiempo con» is \"spend time with\". *Pass time with is a calque; \"pass the time\" only means filling empty time.",
      ),
      tr(
        "Dice que fue un error del sistema, pero no me lo trago.",
        "He says it was a system error, but I don't buy it.",
        [
          "He says it was a system error, but I'm not buying it.",
          "He says it was a system error, but I'm not swallowing it.",
          "He says it was a system error, but I don't believe it.",
          "She says it was a system error, but I don't buy it.",
          "She says it was a system error, but I'm not buying it.",
          "He says it was a system glitch, but I don't buy it.",
          "He says it was a system error, but I'm not buying that.",
        ],
        "«No me lo trago» is \"I don't buy it\" (ideas as merchandise) or \"I'm not swallowing that\" (ideas as food).",
      ),
      fb(
        "The documentary gave us plenty of food for ___.",
        "thought",
        "El documental nos dio [mucho que pensar].",
        [],
        "Ideas are food: \"food for thought\" is something worth thinking about, the equivalent of «dar que pensar».",
      ),
      fb(
        "The plan is ___-baked: nobody has worked out the costs.",
        "half",
        "El plan está [a medio cocer]: nadie ha calculado los costos.",
        [],
        "A \"half-baked\" idea is poorly developed, like bread taken out of the oven too soon.",
      ),
      tr(
        "Últimamente ando un poco decaída.",
        "I've been feeling a bit down lately.",
        [
          "I've been feeling a little down lately.",
          "I've been feeling a bit low lately.",
          "Lately I've been feeling a bit down.",
          "I've been a bit down lately.",
          "I've been feeling kind of down lately.",
          "I've been feeling a little low lately.",
        ],
        "Up is good, down is bad: \"feel down\" or \"feel low\". The present perfect continuous with \"lately\" covers a period up to now.",
      ),
      mc(
        "What is the English for «tocar fondo»?",
        ["hit rock bottom", "touch bottom", "touch the floor", "hit the ground"],
        0,
        "\"Hit rock bottom\" = reach the lowest point. The orientation matches Spanish; the exact words must be learned.",
      ),
      mc(
        "\"Number 10 has refused to comment on the leak.\" Who has refused?",
        [
          "The British Prime Minister and their office",
          "A house on a street in London",
          "The British Parliament",
          "A newspaper called Number 10",
        ],
        0,
        "Metonymy: a place stands for the people who work there. \"Number 10\" (Downing Street) is the Prime Minister's office; Parliament is \"Westminster\".",
      ),
      mt(
        "Match each name with the institution it stands for.",
        [
          ["Capitol Hill", "the US Congress"],
          ["Whitehall", "the British civil service"],
          ["Wall Street", "the US financial industry"],
          ["the Pentagon", "the US Department of Defense"],
          ["Silicon Valley", "the tech industry"],
        ],
        "News English uses these place names constantly, with a singular verb: \"Wall Street has reacted calmly\".",
      ),
      lc(
        "Brussels is pushing for tougher rules on plastic packaging.",
        "Who wants tougher rules?",
        ["The European Union", "The Belgian government", "The city council of Brussels", "Belgian manufacturers"],
        0,
        "\"Brussels\" here is metonymy for the EU institutions based there, just as «Bruselas» in Spanish news.",
      ),
      tr(
        "La prensa tiene la obligación de exigirle cuentas al gobierno.",
        "The press has a duty to hold the government to account.",
        [
          "The press has an obligation to hold the government to account.",
          "The press has a duty to hold the government accountable.",
          "The press has an obligation to hold the government accountable.",
          "The press has a responsibility to hold the government to account.",
          "The press has a responsibility to hold the government accountable.",
        ],
        "\"The press\" (named after the printing press) means journalism, with a singular verb. «Exigir cuentas a» is \"hold... to account\" or \"hold... accountable\".",
      ),
      mc(
        "\"The suits upstairs want the project finished by June.\" Who are \"the suits\"?",
        [
          "Management, said with a slightly disrespectful tone",
          "The company's clients",
          "The people who design the clothes",
          "The legal department, said formally",
        ],
        0,
        "\"The suits\" are executives as opposed to creative or technical staff; like \"the top brass\", it is mildly disrespectful.",
      ),
      tr(
        "Esta semana necesitamos que todos arrimen el hombro.",
        "It's all hands on deck this week.",
        [
          "This week it's all hands on deck.",
          "We need all hands on deck this week.",
          "This week we need all hands on deck.",
          "It is all hands on deck this week.",
        ],
        "Synecdoche: \"hands\" (sailors) stand for everybody. \"All hands on deck\" means everyone must help.",
      ),
      tr(
        "La región tiene escasez de mano de obra calificada.",
        "The region has a shortage of skilled labor.",
        [
          "The region has a shortage of skilled workers.",
          "The region is short of skilled labor.",
          "The region lacks skilled labor.",
          "There is a shortage of skilled labor in the region.",
          "There's a shortage of skilled labor in the region.",
          "The region has a skilled labor shortage.",
        ],
        "«Mano de obra» is \"labor\" or \"workforce\", never *hand of work. Not every Spanish synecdoche has an English twin.",
      ),
      fb(
        "Could you give my cover letter a fresh pair of ___ before I send it?",
        "eyes",
        "¿Podrías revisar mi carta de presentación [con otros ojos] antes de que la mande?",
        [],
        "\"A fresh pair of eyes\" is someone new to review something: synecdoche, the eyes for the person.",
      ),
      wo(
        "After he lost the business, he hit the bottle.",
        "Después de perder el negocio, se dio a la bebida.",
        "\"Hit the bottle\" is a fixed metonymy (the container for the drink) meaning start drinking heavily.",
      ),
      tr(
        "Terminar la carrera trabajando de tiempo completo no es poca cosa.",
        "Finishing your degree while working full time is no mean feat.",
        [
          "Finishing your degree while working full time is no small feat.",
          "Finishing a degree while working full time is no mean feat.",
          "Finishing a degree while working full time is no small feat.",
          "Finishing your degree while working full-time is no mean feat.",
          "Finishing your degree while working full time is nothing to sneeze at.",
          "Finishing a degree while working full time is nothing to sneeze at.",
          "Completing your degree while working full time is no mean feat.",
          "Completing a degree while working full time is no mean feat.",
        ],
        "Litotes: \"no mean feat\" (or \"no small feat\") denies the opposite to stress a great achievement. «Poca cosa» is not *little thing here.",
      ),
      mc(
        "\"It is not uncommon for first-time managers to feel overwhelmed.\" What does the sentence claim?",
        [
          "It happens fairly often",
          "It almost never happens",
          "It is a very serious problem",
          "Nobody knows how often it happens",
        ],
        0,
        "A double negative used as cautious litotes, typical of academic English: \"not uncommon\" ≈ «no es raro», «es bastante frecuente».",
      ),
      mc(
        "\"He paid the bill and his respects.\" Which figure is this?",
        ["Zeugma", "Chiasmus", "Oxymoron", "Antithesis"],
        0,
        "Zeugma: one verb governs two objects in different senses, literal (pay the bill) and figurative (pay your respects).",
      ),
      tr(
        "Su renuncia era un secreto a voces.",
        "Her resignation was an open secret.",
        ["His resignation was an open secret.", "Their resignation was an open secret."],
        "«Un secreto a voces» is \"an open secret\", a fixed oxymoron. *A secret in voices means nothing.",
      ),
      fb(
        "He always wears ___ shirts that you can see from across the street.",
        "loud",
        "Siempre usa camisas [chillonas] que se ven desde el otro lado de la calle.",
        ["garish"],
        "Synesthesia: sight described as sound. English says \"loud\" (or \"garish\") colors, never *screaming colors.",
      ),
      tr(
        "Pasé la noche en vela antes de la entrevista.",
        "I had a sleepless night before the interview.",
        [
          "I spent a sleepless night before the interview.",
          "I had a sleepless night before my interview.",
          "I spent a sleepless night before my interview.",
          "I was up all night before the interview.",
          "I was up all night before my interview.",
        ],
        "A transferred epithet: you were sleepless, but the adjective is attached to the night.",
      ),
      tr(
        "Es más terca que una mula.",
        "She's as stubborn as a mule.",
        ["She is as stubborn as a mule."],
        "Spanish uses a comparative; the English fixed simile uses \"as...as\". *More stubborn than a mule is not the idiom.",
      ),
      mc(
        "You took a long nap and now feel full of energy. Which simile fits?",
        ["as fresh as a daisy", "as cool as a cucumber", "as fit as a fiddle", "as light as a feather"],
        0,
        "«Fresco como una lechuga» (rested, full of energy) is \"as fresh as a daisy\". \"As cool as a cucumber\" is a false match: it means calm under pressure.",
      ),
      fb(
        "Without my contact lenses I'm as blind as a ___.",
        "bat",
        "Sin mis lentes de contacto estoy [más ciego que un topo].",
        [],
        "The mole becomes a bat: \"as blind as a bat\". The image changes, the meaning stays.",
      ),
      tr(
        "La noticia corrió como la pólvora.",
        "The news spread like wildfire.",
        [],
        "«Correr como la pólvora» is \"spread like wildfire\": \"like\" + noun after a verb. Note \"news\" is singular.",
      ),
      mc(
        "Which sentence means \"when I was a child\"?",
        [
          "As a child, I was afraid of the dark.",
          "Like a child, I was afraid of the dark.",
          "Such as a child, I was afraid of the dark.",
          "As like a child, I was afraid of the dark.",
        ],
        0,
        "\"As\" + noun = in the role of, being. \"Like a child\" = in the manner of a child, which would be a comparison, not a time in your life.",
      ),
      fb(
        "___ usual, the bus was twenty minutes late.",
        "As",
        "[Como] de costumbre, el autobús llegó con veinte minutos de retraso.",
        [],
        "Fixed phrases always take \"as\": \"as usual\", \"as expected\", \"as a rule\". *Like usual is nonstandard.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "We grow fruit such as mangoes and papayas.",
          "We grow fruit like for example mangoes and papayas.",
          "We grow fruit as for example mangoes and papayas.",
          "We grow fruit such like mangoes and papayas.",
        ],
        0,
        "Introduce examples with \"such as\" or \"like\", but never *like for example or *as for example, which double the «como por ejemplo».",
      ),
      wo(
        "He held the phone as though it might bite him.",
        "Sostenía el teléfono como si fuera a morderlo.",
        "Before a clause use \"as though\" or \"as if\"; \"like\" goes before a noun phrase in careful English.",
      ),
      dt(
        "Prices soared in the spring and plummeted by the fall.",
        "Up is good, down is bad: \"soared\" /sɔːrd/ and \"plummeted\" /ˈplʌmɪtɪd/, with the stress on the first syllable.",
      ),
      lc(
        "She lost her keys, her wallet and her patience, all before nine a.m.",
        "Which figure does the speaker use?",
        ["Zeugma", "Chiasmus", "Oxymoron", "Synesthesia"],
        0,
        "One verb, \"lost\", governs literal objects (keys, wallet) and a figurative one (patience): a zeugma, witty because you process the verb twice.",
      ),
      dt(
        "Finishing the course in a year was no mean feat, but she made it look easy.",
        "\"No mean feat\" is litotes: /noʊ ˈmiːn ˈfiːt/. \"Mean\" here means poor or small, not cruel.",
      ),
      sp(
        "I want to spend more time with my family, not waste it in traffic.",
        "Quiero pasar más tiempo con mi familia, no perderlo en el tráfico.",
        "Contrast the two verbs: stress \"spend\" and \"waste\".",
        "Time is money: \"spend\" time with people, \"waste\" it on useless things. Never *pass time with.",
      ),
      sp(
        "Cool as a cucumber, he walked into the exam room.",
        "Tranquilo como si nada, entró en la sala del examen.",
        "Drop the first \"as\" and keep the rhythm: COOL as a CU-cumber.",
        "In speech the first \"as\" of a fixed simile is often dropped; \"cool as a cucumber\" means calm under pressure.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Hyperbole and personification, headlines, dead metaphors,
  // the literary spiral review (inversion, participle clauses, analysis)
  // and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-figurative-unit-drill-2",
    "Drill: Hyperbole, Headlines, Dead Metaphors and Literary Analysis",
    "Pitch hyperbole and personification to the register, decode compressed headline language, replace vague verbs with precise dead metaphors (grasp, tackle, spark, shed light on), and analyze literary extracts using inversion and participle clauses.",
    "Recap: exaggeration, headlines, precise verbs",
    [
      "Everyday hyperbole has fixed English forms (\"I'm starving\", \"I could eat a horse\", \"I'm dead tired\"), fine in conversation and damaging in academic writing. News personifies the economy (\"stumbles\", \"shrugs off\", \"bites\"), and headlines compress everything: no articles, present for past, \"to\" + verb for the future, short verbs like \"slam\", \"axe\" and \"probe\".",
      "Dead metaphors make verbs precise: \"grasp\" an idea, \"weigh up\" options, \"tackle\" a problem (not *approach it), \"spark\" a debate, \"foster\" (never *foment) creativity, \"shed light on\" a question. In literary prose, a negative opener forces inversion (\"Never had the house seemed so silent\"), and a participle clause must share the subject of the main clause.",
    ],
    [
      ["I've told you a hundred times!", "¡Te lo he dicho cien veces!"],
      ["Union leaders slam pay offer", "Los líderes sindicales arremeten contra la oferta salarial"],
      ["The new evidence sheds light on the case.", "Las nuevas pruebas arrojan luz sobre el caso."],
      ["Not until dawn did the rain stop.", "La lluvia no paró hasta el amanecer."],
    ],
    [
      tr(
        "Me muero de hambre; me comería una vaca.",
        "I'm starving; I could eat a horse.",
        ["I'm starving. I could eat a horse.", "I'm starving, I could eat a horse.", "I am starving; I could eat a horse."],
        "The hyperbole changes animal: \"I could eat a horse\". *I'm dying of hunger sounds dramatic or medical in English.",
      ),
      mc(
        "After a twelve-hour shift, which sentence best says «estoy muerto»?",
        ["I'm dead tired.", "I'm dead.", "I'm death.", "I'm dying."],
        0,
        "\"I'm dead tired\" (or \"exhausted\", \"wiped out\"). A bare \"I'm dead\" is ambiguous: in slang it often means \"I'm in big trouble\" or \"that's hilarious\".",
      ),
      fb(
        "My feet are ___ me after that hike.",
        "killing",
        "Los pies [me están matando] después de esa caminata.",
        [],
        "\"My feet are killing me\" is everyday hyperbole for aching feet; the progressive is fixed.",
      ),
      mc(
        "Which sentence belongs in an academic essay?",
        [
          "Several studies suggest a link between sleep and memory.",
          "Millions of studies prove that sleep is the key to memory.",
          "Literally everyone knows sleep is amazing for memory.",
          "Sleep is the best thing ever for your memory.",
        ],
        0,
        "Hyperbole persuades in ads and signals emotion in conversation, but in academic writing it destroys credibility.",
      ),
      mc(
        "Which sentence uses \"literally\" in the sense careful writers accept?",
        [
          "The flood literally cut the village off from the rest of the region.",
          "I literally died laughing at his speech.",
          "She was literally on fire during the match.",
          "My boss literally exploded when he saw the bill.",
        ],
        0,
        "In formal English keep \"literally\" for what really happened. As an intensifier for impossible events it is common but disliked by careful speakers.",
      ),
      tr(
        "La economía tropezó en el segundo trimestre.",
        "The economy stumbled in the second quarter.",
        ["The economy faltered in the second quarter.", "The economy stumbled in the second quarter of the year."],
        "Personification in the news: the economy \"stumbles\", \"limps\" or \"recovers\" like a person.",
      ),
      fb(
        "Investors got cold ___ and pulled out of the deal at the last minute.",
        "feet",
        "Los inversionistas [se echaron para atrás] y abandonaron el trato en el último momento.",
        [],
        "\"Get cold feet\" = lose courage before acting. Spanish says «echarse para atrás»; the English image is in the feet.",
      ),
      tr(
        "La bolsa se desplomó después del anuncio.",
        "Stocks plunged after the announcement.",
        [
          "Stocks tumbled after the announcement.",
          "The stock market plunged after the announcement.",
          "The stock market tumbled after the announcement.",
          "The stock market crashed after the announcement.",
          "Shares plunged after the announcement.",
          "Shares tumbled after the announcement.",
          "Markets tumbled after the announcement.",
          "Markets plunged after the announcement.",
          "The stock market collapsed after the announcement.",
        ],
        "«Desplomarse» becomes \"plunge\" or \"tumble\". *Collapsed down or *fell down sound clumsy in a market report.",
      ),
      tr(
        "Los mercados están nerviosos antes de las elecciones.",
        "Markets are jittery ahead of the election.",
        [
          "The markets are jittery ahead of the election.",
          "Markets are jittery before the election.",
          "The markets are jittery before the election.",
          "Markets are nervous ahead of the election.",
          "The markets are nervous ahead of the election.",
          "Markets are nervous before the election.",
          "The markets are nervous before the election.",
          "Markets are jittery ahead of the elections.",
        ],
        "News personifies markets as anxious people: \"jittery\" is the typical headline adjective. \"Ahead of\" is the news-style «antes de».",
      ),
      lc(
        "Markets shrugged off the disappointing jobs figures.",
        "How did the markets react?",
        [
          "They barely reacted and stayed calm",
          "They fell sharply",
          "They rose because the figures were good",
          "They closed early in protest",
        ],
        0,
        "To \"shrug off\" bad news is to treat it as unimportant: the markets are personified as an unbothered person.",
      ),
      mc(
        "\"The city watched him leave without a word, as indifferent as ever.\" What effect does the personification create?",
        [
          "It suggests the city does not care about him, a sense of alienation",
          "It suggests the city is sad to see him go",
          "It shows the city is dangerous",
          "It is a literal description of people watching him",
        ],
        0,
        "Analyze personification by asking what attitude it gives the thing: here, an indifferent city that makes him feel alone.",
      ),
      mc(
        "What does the headline \"PM to visit Mexico\" mean?",
        [
          "The Prime Minister will visit Mexico",
          "The Prime Minister visited Mexico",
          "The Prime Minister wants to visit Mexico but can't",
          "The Prime Minister is visiting Mexico right now",
        ],
        0,
        "Headline grammar: \"to\" + verb marks the future, and the present simple (\"PM visits Mexico\") would report a past event.",
      ),
      mt(
        "Match each headline word with its everyday meaning.",
        [
          ["slam", "criticize strongly"],
          ["axe", "cut (jobs, a project)"],
          ["probe", "investigation"],
          ["row", "dispute"],
          ["vow", "promise"],
        ],
        "Headlines prefer very short, vivid words that learners rarely meet elsewhere.",
      ),
      mc(
        "\"Number 10 digs in over tax rise.\" What does this mean in plain English?",
        [
          "The Prime Minister's office refuses to back down on the tax rise",
          "The Prime Minister's office starts building work",
          "Ten ministers resign over the tax rise",
          "The government cancels the tax rise",
        ],
        0,
        "Two figures at once: \"Number 10\" is metonymy (who is really acting) and \"dig in\" is a war metaphor (soldiers digging trenches to hold a position).",
      ),
      lc(
        "Washington blinks first in tariff standoff.",
        "What happened?",
        [
          "The US government gave way first",
          "The US government won the dispute",
          "Washington refused to negotiate",
          "The two sides reached a deal at the same time",
        ],
        0,
        "\"Blink first\" comes from a staring contest: whoever blinks loses. \"Washington\" is the US government.",
      ),
      mc(
        "\"Gardeners dig deep for local hospital.\" Why is this a pun?",
        [
          "\"Dig deep\" means give generously, and gardeners literally dig",
          "Gardeners are building a hospital",
          "\"Hospital\" sounds like another word",
          "It isn't a pun; the gardeners are digging foundations",
        ],
        0,
        "Headline puns use a word from the vocabulary of the story's topic: look for it when a headline seems oddly worded.",
      ),
      mc(
        "Which headline keeps one coherent image?",
        [
          "Minister walks into a minefield over pensions",
          "Minister skates on thin ice and walks into a minefield",
          "Minister rows against the tide while juggling hot potatoes",
          "Minister plants seeds of a storm on thin ice",
        ],
        0,
        "Going figurative, choose one image. Mixed metaphors are a classic error and an easy target for satire.",
      ),
      tr(
        "Me costó captar la importancia de los datos.",
        "It took me a while to grasp the significance of the data.",
        [
          "It took me a while to grasp the importance of the data.",
          "I struggled to grasp the significance of the data.",
          "I struggled to grasp the importance of the data.",
          "It was hard for me to grasp the significance of the data.",
          "It was hard for me to grasp the importance of the data.",
          "It took me some time to grasp the significance of the data.",
          "I found it hard to grasp the significance of the data.",
          "I found it hard to grasp the importance of the data.",
        ],
        "Thinking is handling: you \"grasp\" a concept or its significance. It is more precise than the vague \"understand\".",
      ),
      fb(
        "We need to weigh ___ the pros and cons before we sign anything.",
        "up",
        "Tenemos que [sopesar] los pros y los contras antes de firmar nada.",
        [],
        "\"Weigh up\" (US often just \"weigh\") is «sopesar»: options are objects you hold in your hands to compare.",
      ),
      tr(
        "Los técnicos localizaron con precisión la causa de la falla.",
        "The technicians pinpointed the cause of the failure.",
        [
          "The technicians pinpointed the cause of the fault.",
          "The technicians pinpointed the cause of the malfunction.",
          "The technicians have pinpointed the cause of the failure.",
          "The engineers pinpointed the cause of the failure.",
          "The technicians pinpointed the cause of the breakdown.",
        ],
        "\"Pinpoint\" = locate exactly, in one verb. It replaces the vague \"find\" and the wordy *localized with precision.",
      ),
      mc(
        "\"The new mayor has promised to ___ homelessness.\" Which verb fits best?",
        ["tackle", "approach", "touch on", "foment"],
        0,
        "You \"tackle\" a problem (a sports image) to solve it. \"Approach\" is about method, \"touch on\" means mention briefly, and \"foment\" means stir up trouble.",
      ),
      fb(
        "We still have a few details to ___ out before the launch.",
        "iron",
        "Todavía tenemos algunos detalles que [resolver] antes del lanzamiento.",
        [],
        "\"Iron out\" small problems: smooth them like creases in a shirt.",
      ),
      tr(
        "El acuerdo allanó el camino para nuevas negociaciones.",
        "The agreement paved the way for new negotiations.",
        [
          "The agreement paved the way for further negotiations.",
          "The agreement paved the way for new talks.",
          "The agreement paved the way for further talks.",
          "The deal paved the way for new negotiations.",
          "The deal paved the way for further negotiations.",
          "The deal paved the way for new talks.",
        ],
        "«Allanar el camino» is \"pave the way for\", with \"for\" before the noun.",
      ),
      tr(
        "Sus declaraciones desataron un debate encendido.",
        "His statements sparked a heated debate.",
        [
          "His statements sparked a fierce debate.",
          "His remarks sparked a heated debate.",
          "His remarks sparked a fierce debate.",
          "Her statements sparked a heated debate.",
          "Her remarks sparked a heated debate.",
          "His comments sparked a heated debate.",
          "Her comments sparked a heated debate.",
          "Their statements sparked a heated debate.",
        ],
        "Causes are fire: a remark \"sparks\" a debate (starts it suddenly). *Untied a debate is a calque of «desatar».",
      ),
      mc(
        "How do you say «La escuela fomenta la creatividad»?",
        [
          "The school fosters creativity.",
          "The school foments creativity.",
          "The school fuels up creativity.",
          "The school sparks out creativity.",
        ],
        0,
        "«Fomentar» is \"foster\" or \"encourage\". English \"foment\" only means stir up trouble (\"foment unrest\").",
      ),
      kw(
        "GLOSSES",
        "The report deals with the environmental costs only superficially, hoping nobody notices.",
        "The report ___ the environmental costs.",
        "glosses over",
        [],
        "\"Gloss over\" = treat an awkward detail superficially so nobody notices, close to «pasar de puntillas por».",
      ),
      tr(
        "Los nuevos correos arrojan luz sobre el caso.",
        "The new emails shed light on the case.",
        ["The new emails throw light on the case.", "The new e-mails shed light on the case.", "The new emails cast light on the case."],
        "«Arrojar luz sobre» is \"shed light on\" (or \"throw light on\"), never *throw light over.",
      ),
      wo(
        "Let's not dwell on what went wrong last year.",
        "No nos quedemos dándole vueltas a lo que salió mal el año pasado.",
        "\"Dwell on\" = talk or think about something at length, the opposite of \"touch on\".",
      ),
      wo(
        "Rising prices are starting to bite.",
        "La subida de precios empieza a hacerse notar.",
        "Personification: inflation \"bites\" when people start to feel its effects.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Not until midnight did the storm ease.",
          "Not until midnight the storm eased.",
          "Not until midnight did the storm eased.",
          "Not until midnight eased the storm.",
        ],
        0,
        "After a negative opener, use auxiliary + subject + bare verb: \"did the storm ease\". Spanish fronts «no hasta» without changing the verb, hence the error.",
      ),
      kw(
        "ONLY",
        "She realized what she had lost at that moment and not before.",
        "___ what she had lost.",
        "Only then did she realize",
        ["Only at that moment did she realize", "Only then did she realise"],
        "\"Only then\" at the start triggers inversion with \"did\" and the bare verb \"realize\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Walking into the old station, we could smell the damp.",
          "Walking into the old station, the smell of damp hit us.",
          "Walking into the old station, the damp could be smelled.",
          "Walking into the old station, there was a smell of damp.",
        ],
        0,
        "The implied subject of the participle must be the subject of the main clause. In the others, the smell, the damp or \"there\" is walking into the station.",
      ),
      fb(
        "By personifying the sea, the writer ___ a sense of menace.",
        "conveys",
        "Al personificar el mar, el autor [transmite] una sensación de amenaza.",
        ["creates", "evokes", "suggests", "builds"],
        "The pattern \"By + -ing (the device), the writer + verb of effect\" moves from naming a figure to analyzing it.",
      ),
      tr(
        "Agotados por el viaje, los niños se durmieron en el carro.",
        "Exhausted by the trip, the children fell asleep in the car.",
        [
          "Exhausted by the journey, the children fell asleep in the car.",
          "Exhausted by the trip, the kids fell asleep in the car.",
          "Exhausted by the journey, the kids fell asleep in the car.",
          "Exhausted from the trip, the children fell asleep in the car.",
          "Exhausted from the trip, the kids fell asleep in the car.",
        ],
        "A past participle clause whose subject is the main subject: the children were exhausted. No \"being\" is needed.",
      ),
      dt(
        "Left to itself, the orchard slowly ran wild.",
        "\"Left to itself\" (abandoned) runs together, /left tu ɪtˈself/; \"ran wild\" ends the sentence with a stressed image.",
      ),
      dt(
        "Not until the last guest had left did she allow herself to cry.",
        "Listen for the inversion in the second half: \"did she allow\", /dɪd ʃi əˈlaʊ/.",
      ),
      sp(
        "I'm starving. I could eat a horse.",
        "Me muero de hambre. Me comería una vaca.",
        "Stress \"starving\" and \"horse\"; let \"could eat a\" run together.",
        "Everyday hyperbole with the English animal, not the Spanish one.",
      ),
      sp(
        "Never had the town seemed so quiet; even the dogs had stopped barking.",
        "Nunca le había parecido tan silencioso el pueblo; hasta los perros habían dejado de ladrar.",
        "Slow down on \"Never had the town\"; the inversion is dramatic.",
        "Inversion after \"never\" plus a vivid detail: the proverb-like, literary rhythm of the unit.",
      ),
    ],
  ),
];
