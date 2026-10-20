// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u32-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u32 (creative writing): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

// Every combination of the given alternatives, joined with spaces.
const combos = (...parts: string[][]): string[] =>
  parts.reduce<string[]>((acc, opts) => acc.flatMap((a) => opts.map((o) => (a ? `${a} ${o}` : o))), [""]);

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex => {
  const alts = [...new Set(altAnswers)].filter((a) => a !== answer);
  return alts.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers: alts, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };
};

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const gap = (sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Complete the sentence with one word.", sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Complete the sentence with one word.", sentence, answer, explanation };

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

export const EN_C2_U32_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Foreshadowing and structure, imagery and the senses, dialogue and voice
  // ---------------------------------------------------------------------
  drill(
    "en-c2-creative-writing-unit-drill-1",
    "Drill: Structure, Imagery and Dialogue",
    "Foreshadow and pace a story, move in and out of a flashback, put manner in the verb and direction in the particle, build fresh images, and punctuate and write natural English dialogue.",
    "Recap: how fiction works in English",
    [
      "Plant clues quietly and pay them off later; a red herring misleads. Look ahead with \"Little did she know...\", \"He was to regret...\" or \"It was the last time she would see...\" (simple past, then \"would\"). Short sentences speed up action, but never join two sentences with only a comma (a comma splice). Enter a flashback with the past perfect, then return to the simple past, and don't drift between tenses.",
      "Show, don't tell. English puts the manner in the verb and the direction in the particle (\"She limped out\", «salió cojeando»); use \"like\" + noun but \"as if\" + clause, with the unreal past (\"as if he had seen\"). Dialogue goes in quotation marks, never after a dash: \"I'm tired,\" Ana said. Prefer \"said\", use contractions and fragments, and start a new paragraph for each speaker.",
    ],
    [
      ["Little did he know that the house had been sold.", "Poco se imaginaba él que la casa ya se había vendido."],
      ["She had grown up by the sea. Every summer, her father took her sailing.", "Había crecido junto al mar. Cada verano, su padre la llevaba a navegar."],
      ["He tiptoed out of the room.", "Salió de la habitación de puntillas."],
      ["\"Are you coming?\" she asked.", "—¿Vienes? —preguntó ella."],
    ],
    [
      mc(
        "In a mystery novel, a bloodstained scarf points to the gardener, but he turns out to be innocent. What is the scarf?",
        ["A red herring", "Chekhov's gun", "A flash-forward", "A cliffhanger"],
        0,
        "A \"red herring\" is a false clue that sends the reader the wrong way («pista falsa»). \"Chekhov's gun\" is the opposite: a detail planted early that really does pay off.",
      ),
      fb(
        "___ did he know that the stranger on the train was his future boss.",
        "Little",
        "[Poco se imaginaba] que el desconocido del tren era su futuro jefe.",
        [],
        "\"Little did he know\" is open foreshadowing with inversion, like a question: auxiliary \"did\" before the subject. *Little he knew is the common error.",
      ),
      tr(
        "Fue la última vez que vería a su padre.",
        "It was the last time she would see her father.",
        [
          "It was the last time she'd see her father.",
          "It was the last time she would ever see her father.",
          "It was the last time he would see his father.",
          "It was the last time he'd see his father.",
          "It was the last time he would ever see his father.",
        ],
        "Spanish uses the conditional twice («sería... vería»); English keeps the first verb in the simple past and uses \"would\" only in the second: \"It was the last time she would see...\".",
      ),
      tr(
        "Se arrepentiría de aquella decisión durante años.",
        "He was to regret that decision for years.",
        combos(
          ["He was to regret", "She was to regret", "He would regret", "She would regret"],
          ["that decision for years.", "that decision for years to come.", "that decision for many years."],
        ),
        "\"Was to\" + infinitive is the narrator looking ahead to what fate had in store («estaba destinado a»). \"Would regret\" is also correct and slightly less literary.",
      ),
      fb(
        "The author ___ a clue in chapter two and pays it off in the final scene.",
        "plants",
        "La autora [siembra] una pista en el capítulo dos y la retoma en la escena final.",
        ["sets up"],
        "Writers \"plant\" a clue and later \"pay it off\". Keep the present to match \"pays\": you are describing what the author does in the book.",
      ),
      mc(
        "Which version is correctly punctuated?",
        [
          "The lights went out; nobody moved.",
          "The lights went out, nobody moved.",
          "The lights went out, and, nobody moved.",
          "The lights went out nobody moved.",
        ],
        0,
        "Two full sentences need a period, a semicolon or a conjunction. Joining them with only a comma is a comma splice, a mistake in English even though Spanish prose tolerates it.",
      ),
      tr(
        "Sonó el timbre. Nadie se movió. Volvió a sonar.",
        "The doorbell rang. Nobody moved. It rang again.",
        combos(
          ["The doorbell rang.", "The bell rang."],
          ["Nobody moved.", "No one moved."],
          ["It rang again."],
        ),
        "Three short sentences speed up the action and raise the tension. Keep them as separate sentences: joining them with commas would create comma splices.",
      ),
      lc(
        "The house was already on fire when Marco opened his eyes.",
        "Which technique does this opening use?",
        ["In medias res: it starts in the middle of the action", "A flashback", "A red herring", "A twist ending"],
        0,
        "Starting \"in medias res\" drops the reader into the action at once; the background can come later through a flashback.",
      ),
      fb(
        "She ___ him in Lisbon, ten years earlier. He was selling maps by the river.",
        "had met",
        "Lo [había conocido] en Lisboa, diez años antes. Él vendía mapas junto al río.",
        [],
        "Enter a flashback with the past perfect for a sentence or two (\"had met\"), then slip back into the simple past (\"was selling\"). A whole page in the past perfect sounds heavy.",
      ),
      tr(
        "Años después, él recordaría aquella noche como el principio del fin.",
        "Years later, he would remember that night as the beginning of the end.",
        combos(
          ["Years later,"],
          ["he would remember", "he would recall", "he'd remember", "he'd recall", "she would remember", "she'd remember"],
          ["that night as the beginning of the end."],
        ),
        "\"Would\" from a past viewpoint is a flash-forward: the narrator glimpses the future. It is the English equivalent of the Spanish conditional «recordaría».",
      ),
      dt(
        "The chapter ends on a cliffhanger, with the boat drifting out to sea.",
        "A chapter \"ends ON a cliffhanger\". \"Drifting\" (moving slowly with the current) is a precise movement verb.",
      ),
      mc(
        "Which sentence keeps a consistent tense?",
        [
          "She opens the drawer and finds an old key.",
          "She opens the drawer and found an old key.",
          "She opened the drawer and finds an old key.",
          "She is opening the drawer and found an old key.",
        ],
        0,
        "Choose the past or the present for your narration and stay there. Drifting between them, as Spanish narrators do with the «presente histórico», confuses English readers.",
      ),
      mt(
        "Match each device with its description.",
        [
          ["simile", "compara con \"like\" o \"as\""],
          ["metaphor", "dice que una cosa es otra"],
          ["personification", "da acciones humanas a las cosas"],
          ["foreshadowing", "pista temprana de lo que va a pasar"],
          ["red herring", "pista falsa"],
        ],
        "\"The city was a furnace\" is a metaphor; \"quiet as a shadow\" is a simile; \"the wind howled\" is personification.",
      ),
      lc(
        "He set the table for two, then quietly put one plate away.",
        "What does this sentence show without saying it?",
        ["He is alone, probably after losing someone", "He is expecting a guest", "He is angry with his partner", "He is too busy to eat"],
        0,
        "This is \"show, don't tell\": one concrete action lets the reader infer loneliness or loss, which \"He was lonely\" would only name.",
      ),
      tr(
        "Entró en la cocina cojeando.",
        "He limped into the kitchen.",
        ["She limped into the kitchen."],
        "English puts the manner in the verb (\"limped\") and the direction in the particle (\"into\"). *He entered the kitchen limping is grammatical but flat.",
      ),
      tr(
        "Cruzó la plaza corriendo.",
        "She ran across the square.",
        combos(
          ["She", "He"],
          ["ran", "raced", "dashed", "rushed", "darted"],
          ["across the square.", "across the plaza."],
        ),
        "«Cruzar corriendo» becomes a manner verb + \"across\". Spanish puts the direction in the verb («cruzar»), English in the particle.",
      ),
      fb(
        "The smell of coffee ___ up from the cafe downstairs.",
        "drifted",
        "El olor a café [llegaba] desde la cafetería de abajo.",
        ["wafted"],
        "Smells \"waft\" or \"drift\". Adding smell, sound and touch makes a scene physical, not just visual.",
      ),
      fb(
        "All night, the old radiator ___ like an angry cat.",
        "hissed",
        "Toda la noche, el viejo radiador [siseó] como un gato enojado.",
        [],
        "Steam \"hisses\": a precise sound verb. \"Like\" introduces a simile with a noun (\"like an angry cat\").",
      ),
      tr(
        "Me miró como si nunca me hubiera visto antes.",
        "She looked at me as if she had never seen me before.",
        [
          ...combos(["She looked at me"], ["as if", "as though"], ["she had never seen me before.", "she'd never seen me before."]),
          ...combos(["He looked at me"], ["as if", "as though"], ["he had never seen me before.", "he'd never seen me before."]),
        ],
        "After \"as if\" English uses the past perfect for an unreal past comparison, where Spanish uses «hubiera visto». Use \"as if\" before a clause, not *like if.",
      ),
      gap(
        "The rumor spread through the office ___ wildfire.",
        "like",
        [],
        "Before a noun, the comparison word is \"like\": \"like wildfire\". \"As if\" and \"as though\" introduce a clause.",
      ),
      tr(
        "El viento aullaba alrededor de la casa vacía.",
        "The wind howled around the empty house.",
        ["The wind was howling around the empty house.", "The wind howled round the empty house."],
        "Personification gives a human or animal action to a thing: the wind \"howls\". The verb itself creates the image.",
      ),
      lc(
        "Her smile was a locked door.",
        "Which device is this?",
        ["A metaphor", "A simile", "Personification", "A cliche"],
        0,
        "A metaphor says one thing IS another, with no \"like\" or \"as\". With \"like\" (\"Her smile was like a locked door\") it would be a simile.",
      ),
      tr(
        "La casa olía a café y a pintura fresca.",
        "The house smelled of coffee and fresh paint.",
        ["The house smelled like coffee and fresh paint.", "The house smelt of coffee and fresh paint.", "The house smelled of coffee and of fresh paint."],
        "\"Smell of\" or \"smell like\" + noun. Smell is one of the senses learners forget; it anchors a scene instantly.",
      ),
      dt(
        "The old staircase groaned under every step.",
        "Personification: a staircase \"groans\" like a person. \"Groaned\" ends in /nd/.",
      ),
      mc(
        "Which line of dialogue is punctuated correctly?",
        [
          "\"I'm hungry,\" Leo said.",
          "—I'm hungry —said Leo.",
          "\"I'm hungry.\" Leo said.",
          "\"I'm hungry\", Leo said.",
        ],
        0,
        "Speech goes in quotation marks, never after a dash. Before a tag, end with a comma (not a period), and in American English the comma goes inside the closing mark.",
      ),
      tr(
        "—No despiertes a los niños —susurró él.",
        "\"Don't wake the kids,\" he whispered.",
        ["\"Don't wake the children,\" he whispered.", "\"Don't wake up the kids,\" he whispered.", "\"Don't wake up the children,\" he whispered."],
        "The «raya» becomes quotation marks, with the comma inside and the tag in lowercase. \"Whispered\" adds information (volume) that \"said\" can't.",
      ),
      mc(
        "Which version sounds most natural in modern fiction?",
        ["\"Fine,\" he said.", "\"Fine,\" said he.", "\"Fine,\" he opined.", "\"Fine,\" he laughed."],
        0,
        "\"Said\" is invisible and keeps attention on the words. *Said he sounds archaic, \"opined\" draws attention to itself, and you can't laugh a sentence.",
      ),
      gap(
        "\"That's wonderful news,\" she said ___ a smile.",
        "with",
        [],
        "You cannot *smile a sentence, so the smile goes in a phrase: \"she said with a smile\", or in a separate action beat.",
      ),
      wo(
        "Start a new paragraph every time the speaker changes.",
        "Empieza un párrafo nuevo cada vez que cambie quien habla.",
        "An imperative (\"Start\") followed by a time clause with \"every time\".",
      ),
      tr(
        "—¿Dónde dejaste las llaves? —Ni idea. ¿Por qué?",
        "\"Where did you leave the keys?\" \"No idea. Why?\"",
        ["\"Where'd you leave the keys?\" \"No idea. Why?\"", "\"Where did you put the keys?\" \"No idea. Why?\"", "\"Where did you leave the keys?\" \"No clue. Why?\""],
        "Natural dialogue uses fragments: \"No idea. Why?\" sounds like a person; *I do not know where I left them sounds like a robot.",
      ),
      sp(
        "No idea. Why do you ask?",
        "Ni idea. ¿Por qué lo preguntas?",
        "Let \"No idea\" fall; rise slightly on \"ask\".",
        "Fragments and contractions are the norm in fictional dialogue, not a sign of informality to avoid.",
      ),
      lc(
        "As you know, Bob, we've been married for twenty years.",
        "What is wrong with this line of dialogue?",
        [
          "It tells the other character something they already know, just to inform the reader",
          "It uses a contraction",
          "It is too short",
          "It uses the present perfect",
        ],
        0,
        "Writers mock this as \"As you know, Bob...\" dialogue. Slip the information in through conflict, or let the narrator handle it.",
      ),
      tr(
        "Poco se imaginaba ella que la carta seguía en el bolsillo de su abrigo.",
        "Little did she know that the letter was still in her coat pocket.",
        combos(
          ["Little did she know"],
          ["that the letter was still", "the letter was still"],
          ["in her coat pocket.", "in the pocket of her coat."],
        ),
        "Inversion after \"Little\" (\"did she know\"), and the simple past \"was\" for a fact that is true at that moment, not *would be.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "\"Run!\" she shouted, as if the house were on fire.",
          "—Run! —she shouted, like the house was on fire.",
          "\"¡Run!\" she shouted, as if the house were on fire.",
          "\"Run!\" She shouted, as if the house is on fire.",
        ],
        0,
        "Quotation marks (not a dash), no inverted «¡», a lowercase tag after the exclamation mark, and \"as if\" + unreal past (\"were\").",
      ),
      sp(
        "She tiptoed past the kitchen, as if the floor might give her away.",
        "Pasó de puntillas junto a la cocina, como si el suelo pudiera delatarla.",
        "Stress \"tiptoed\" on the first syllable; link \"give her away\", /gɪvərəˈweɪ/.",
        "Manner in the verb (\"tiptoed\"), direction in the particle (\"past\"), and a comparison with \"as if\".",
      ),
      dt(
        "He limped across the yard as the gate creaked behind him.",
        "Two precise verbs: \"limped\" (movement) and \"creaked\" (sound). The final -ed is /t/ in both.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Rewriting, punctuation errors, editor talk, microfiction + whole unit
  // ---------------------------------------------------------------------
  drill(
    "en-c2-creative-writing-unit-drill-2",
    "Drill: Rewriting, Punctuation, Feedback and Microfiction",
    "Turn telling into showing with strong verbs, fix Spanish-style dialogue punctuation, give and take editorial feedback tactfully and write with the economy of a 100-word story, then combine everything from the unit.",
    "Recap: revising, punctuating and talking shop",
    [
      "Rewrite named emotions as evidence (\"His ears went red\"), say \"Tom's hands shook\" (not *the hands trembled to Tom), replace verb + adverb with one strong verb (shuffled, wolfed down, slammed) and cut redundancy: \"She nodded\", not *nodded her head. Punctuation: no «raya» and no «¿ ¡»; \"We're late,\" she said (comma inside, lowercase tag); an action beat is its own sentence: \"Fine.\" She slammed the door.",
      "Editors talk about the \"plot\" (not *argument), the \"publisher\" (not *editorial), \"drafts\" and \"deadlines\"; a middle \"drags\", an ending \"doesn't quite land\", a line is \"on the nose\". Soften (\"I wonder if...\") and push back politely (\"I see where you're coming from, but...\"). In a 100-word story, every word earns its place: hook, turn, and an ending that resonates rather than explains.",
    ],
    [
      ["Diego's voice cracked when he said her name.", "A Diego se le quebró la voz al decir el nombre de ella."],
      ["\"Fine.\" She slammed the laptop shut.", "—Muy bien. —Cerró la laptop de golpe."],
      ["The ending doesn't quite land for me.", "A mí el final no me acaba de funcionar."],
      ["Every word has to earn its place.", "Cada palabra tiene que ganarse su lugar."],
    ],
    [
      lc(
        "Her cheeks went red and she stared at her shoes.",
        "What is the character feeling?",
        ["Embarrassed", "Furious", "Bored", "Excited"],
        0,
        "This is showing: a camera could record the red cheeks and the lowered eyes, and the reader infers embarrassment without being told.",
      ),
      tr(
        "A Lucía le temblaban las manos al abrir la carta.",
        "Lucia's hands shook as she opened the letter.",
        combos(
          ["Lucia's hands"],
          ["shook", "were shaking", "trembled", "were trembling"],
          ["as she opened the letter.", "when she opened the letter.", "as she opened the envelope."],
        ),
        "English uses the possessive: \"Lucia's hands shook\". *The hands trembled to Lucia is a calque of «a Lucía le temblaban las manos».",
      ),
      fb(
        "The kids ___ their pizza in under five minutes.",
        "wolfed down",
        "Los niños [engulleron] la pizza en menos de cinco minutos.",
        ["gobbled up", "devoured", "gobbled down", "wolfed"],
        "One strong verb (\"wolfed down\") replaces \"ate very quickly\". The adverb becomes unnecessary.",
      ),
      tr(
        "Subió las escaleras de puntillas.",
        "She tiptoed up the stairs.",
        ["She tiptoed upstairs.", "He tiptoed up the stairs.", "He tiptoed upstairs."],
        "Manner in the verb (\"tiptoed\"), direction in the particle (\"up\"): the English pattern for «subió... de puntillas».",
      ),
      tr(
        "Cruzó el lago nadando.",
        "He swam across the lake.",
        ["She swam across the lake."],
        "«Cruzar nadando» is \"swim across\". *He crossed the lake swimming is grammatical but sounds translated.",
      ),
      fb(
        "She ___ the letter into a tight ball and threw it in the trash.",
        "crumpled",
        "[Arrugó] la carta hasta hacerla una bola y la tiró a la basura.",
        ["scrunched", "scrunched up", "crumpled up"],
        "\"Crumple\" shows the anger without naming it. \"Trash\" is American English (British \"bin\").",
      ),
      gap(
        "Carlos ___ and walked away without a word.",
        "shrugged",
        [],
        "\"Shrug\" already means moving your shoulders, so \"shrugged his shoulders\" is redundant. Spanish needs «de hombros»; English doesn't.",
      ),
      gap(
        "Instead of \"There was a phone ringing upstairs\", write: \"A phone ___ upstairs.\"",
        "rang",
        ["was ringing"],
        "Replace a \"there was\" opening with a subject that acts: \"A phone rang upstairs.\" It is shorter and more vivid.",
      ),
      tr(
        "La habitación estaba helada y olía a humedad.",
        "The room was freezing and smelled of damp.",
        combos(
          ["The room was freezing and"],
          ["smelled of damp.", "smelled damp.", "smelled musty.", "smelled of damp air."],
        ),
        "\"Freezing\" is stronger than *very, very cold; cut the intensifiers and choose the strong adjective.",
      ),
      mc(
        "Which line is correctly punctuated for American English?",
        [
          "\"We're late,\" she said.",
          "\"We're late.\" she said.",
          "\"We're late,\" She said.",
          "\"We're late\", she said.",
        ],
        0,
        "Before a tag, the speech ends with a comma, the comma goes inside the closing mark, and the tag is lowercase because it is not a new sentence.",
      ),
      mc(
        "Which is the right English version of «—Si quieres saberlo —dijo él—, fui yo»?",
        [
          "\"If you want to know,\" he said, \"it was me.\"",
          "—If you want to know —he said— it was me.",
          "\"If you want to know\" he said \"It was me.\"",
          "\"If you want to know,\" he said. \"it was me.\"",
        ],
        0,
        "When a tag interrupts one sentence, it sits between commas and the second part continues in lowercase inside new quotation marks.",
      ),
      mc(
        "Which version is correct?",
        [
          "\"Fine.\" She slammed the door.",
          "\"Fine,\" she slammed the door.",
          "\"Fine,\" She slammed the door.",
          "\"Fine\" she slammed the door.",
        ],
        0,
        "Slamming a door is an action beat, not a way of speaking, so it is a separate sentence: period after the speech, capital for the beat.",
      ),
      mc(
        "Which version is correct?",
        [
          "\"I don't know,\" she said. \"Ask your father.\"",
          "\"I don't know,\" she said, \"ask your father.\"",
          "\"I don't know.\" she said. \"Ask your father.\"",
          "\"I don't know,\" she said. \"ask your father.\"",
        ],
        0,
        "Here the tag ends one sentence and a new one begins, so put a period after the tag and a capital to start the next sentence. A comma would create a comma splice.",
      ),
      mt(
        "Match each Spanish publishing word with its English equivalent.",
        [
          ["editorial (la empresa)", "publisher"],
          ["argumento", "plot"],
          ["borrador", "draft"],
          ["fecha de entrega", "deadline"],
          ["relato", "short story"],
        ],
        "An \"editorial\" in English is a newspaper opinion piece, and an \"argument\" is a quarrel or a line of reasoning: both are false friends here.",
      ),
      tr(
        "La editorial quiere el borrador final para junio.",
        "The publisher wants the final draft by June.",
        combos(
          ["The publisher", "The publishing house"],
          ["wants the final draft by June."],
        ),
        "«Editorial» is a \"publisher\"; \"by June\" sets the deadline («para junio»). *The editorial wants... would mean a newspaper article.",
      ),
      fb(
        "The middle section ___ a little; could we trim a few scenes?",
        "drags",
        "La parte central [se hace pesada] un poco; ¿podríamos recortar algunas escenas?",
        ["sags"],
        "Editors say a slow passage \"drags\" or \"sags\". \"Trim\" means cut, the opposite of \"flesh out\".",
      ),
      tr(
        "A mí el final no me acaba de convencer.",
        "The ending doesn't quite land for me.",
        [
          "For me, the ending doesn't quite land.",
          "The ending doesn't quite work for me.",
          "I wasn't entirely sold on the ending.",
          "I'm not entirely sold on the ending.",
          "I'm not quite sold on the ending.",
          "The ending doesn't quite convince me.",
        ],
        "An ending that works \"lands\"; \"doesn't quite land for me\" is tactful, personal criticism, much softer than *The ending doesn't work.",
      ),
      mc(
        "Which piece of feedback is the most tactful?",
        [
          "I wonder if this chapter could move a little faster.",
          "This chapter is boring.",
          "This doesn't work, change it.",
          "Your chapter has a big problem.",
        ],
        0,
        "English-speaking editors soften criticism: \"I wonder if...\", \"It might be worth...\", \"For me...\". Direct translations of Spanish feedback can sound rude.",
      ),
      gap(
        "Could you ___ out the brother a little more? He feels thin.",
        "flesh",
        [],
        "\"Flesh out\" a character means develop them more, giving them substance. It is the opposite of \"trim\" or \"tighten\".",
      ),
      lc(
        "This line is a bit on the nose.",
        "What does the editor mean?",
        [
          "It's too explicit: the character says exactly what the reader should infer",
          "It's too long and should be cut in half",
          "It's very funny",
          "It's grammatically wrong",
        ],
        0,
        "\"On the nose\" means too explicit. Good dialogue says less than it means and lets the reader infer.",
      ),
      tr(
        "Entiendo tu punto de vista, pero me gustaría mantener el epílogo.",
        "I see where you're coming from, but I'd like to keep the epilogue.",
        combos(
          ["I see where you're coming from,", "I take your point,", "I see your point,", "I understand your point of view,"],
          ["but I'd like to keep the epilogue.", "but I would like to keep the epilogue."],
        ),
        "Acknowledge first, then disagree, and give a reason connected to the story. \"I see where you're coming from\" is the natural softener.",
      ),
      sp(
        "Fair point. Let me sit with that for a few days.",
        "Es verdad. Déjame pensarlo unos días.",
        "Stress \"Fair\" and \"sit\"; pause after \"point\".",
        "\"Let me sit with that\" is a graceful way to take criticism without promising to accept it immediately.",
      ),
      dt(
        "My editor thinks I should kill a few of my darlings.",
        "\"Kill your darlings\" means cutting passages you love because the story doesn't need them.",
      ),
      tr(
        "El título no cuenta para las cien palabras.",
        "The title doesn't count toward the hundred words.",
        combos(
          ["The title doesn't count", "The title does not count"],
          ["toward", "towards"],
          ["the hundred words.", "the 100 words.", "the one hundred words."],
        ),
        "\"Count toward\" (US) or \"towards\" (UK) a total. In a drabble, the title is free, so let it set the place or carry a clue.",
      ),
      mc(
        "Which last line resonates rather than explains?",
        [
          "He left the porch light on anyway.",
          "He realized that hope never truly dies.",
          "And so he learned that family is everything.",
          "This shows that love is stronger than time.",
        ],
        0,
        "End on an image or an action, not a moral. The porch light trusts the reader; the other three explain what the story should have shown.",
      ),
      wo(
        "His mother's glasses still lay on the kitchen table.",
        "Los lentes de su madre seguían sobre la mesa de la cocina.",
        "The possessive \"His mother's glasses\" saves the words Spanish spends on «de su madre». \"Lay\" is the past of \"lie\".",
      ),
      tr(
        "Se terminó el café medio frío de un trago.",
        "He finished the half-cold coffee in one gulp.",
        combos(
          ["He", "She"],
          ["finished the half-cold coffee", "finished his half-cold coffee", "finished her half-cold coffee", "drank the half-cold coffee"],
          ["in one gulp.", "in a single gulp."],
        ).filter((s) => !(s.startsWith("He ") && s.includes(" her ")) && !(s.startsWith("She") && s.includes(" his "))),
        "A hyphenated compound adjective (\"half-cold\") counts as one word and packs a whole Spanish phrase into a single unit.",
      ),
      wo(
        "The turn usually comes around word sixty or seventy.",
        "El giro suele llegar hacia la palabra sesenta o setenta.",
        "The adverb \"usually\" goes before the main verb, and \"around\" means «hacia», «más o menos en».",
      ),
      tr(
        "Tocó dos veces a la puerta, como siempre lo había hecho.",
        "He knocked twice, the way he always had.",
        ["He knocked twice, as he always had.", "She knocked twice, the way she always had.", "She knocked twice, as she always had.", "He knocked twice on the door, the way he always had.", "He knocked on the door twice, the way he always had."],
        "\"The way he always had\" reveals a whole history in five words. The past perfect \"had\" stands for \"had knocked\", so no verb is repeated.",
      ),
      dt(
        "Every morning, he left the gate unlocked, just in case.",
        "A microstory hook: a habit with a question attached. \"Just in case\" links smoothly: /dʒʌstɪnˈkeɪs/.",
      ),
      tr(
        "—Ya es tarde —dijo él, sin soltar el libro.",
        "\"It's late,\" he said, without putting down the book.",
        ["\"It's late,\" he said without putting down the book.", "\"It's late,\" he said, without putting the book down.", "\"It's late,\" he said without putting the book down.", "\"It's late,\" he said, still holding the book."],
        "Quotation marks replace the «raya», the comma goes inside, and the tag stays lowercase. \"Without\" + -ing for «sin soltar».",
      ),
      mc(
        "Which sentence is correct?",
        [
          "\"Where were you?\" she asked, as if she hadn't been waiting all night.",
          "\"¿Where were you?\" she asked, as if she wasn't waiting all night.",
          "—Where were you? —asked she, as if she hadn't been waiting all night.",
          "\"Where were you?\" She asked, like she didn't wait all night.",
        ],
        0,
        "No inverted «¿», no dash, lowercase \"she asked\" after the question mark, and \"as if\" + past perfect continuous for an unreal comparison about the past.",
      ),
      tr(
        "Entró corriendo en la sala, como si alguien la estuviera persiguiendo.",
        "She ran into the living room as if someone were chasing her.",
        combos(
          ["She"],
          ["ran", "rushed", "raced", "dashed"],
          ["into the living room"],
          ["as if", "as though"],
          ["someone were chasing her.", "someone was chasing her.", "somebody were chasing her.", "somebody was chasing her."],
        ),
        "Manner verb + \"into\" for «entró corriendo», and \"as if\" + past continuous for the unreal comparison («como si la estuviera persiguiendo»).",
      ),
      sp(
        "I wasn't entirely sold on the twist, but the opening really lands.",
        "El giro no acabó de convencerme, pero el comienzo funciona muy bien.",
        "Stress \"entirely\", \"twist\" and \"lands\".",
        "Balanced feedback: a softened criticism (\"not entirely sold on\") plus specific praise using the editor's verb \"land\".",
      ),
      fb(
        "Little did she ___ that her editor had already read the ending.",
        "know",
        "Poco [se imaginaba] ella que su editor ya había leído el final.",
        ["suspect", "realize", "guess"],
        "After \"Little did she\", the base form follows: \"know\", never *knew. The past perfect \"had read\" places the editor's action earlier.",
      ),
      dt(
        "The second draft is tighter, but the ending still falls flat.",
        "\"Tight\" writing has no wasted words; an ending that fails \"falls flat\".",
      ),
    ],
  ),
];
