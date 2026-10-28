// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u16-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 16 Extra Practice: The Remote Past for Reading. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
// Translation items accept the remote past and the passato prossimo.
export const IT_B1_U16_EXTRA: Lesson[] = [
  {
    slug: "b1-passato-remoto-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Regular Forms",
    summary: "Recognition practice with regular -are, -ere and -ire verbs in the passato remoto.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "-ò, -é / -ette, -ì",
        body: [
          "He / she: \"-ò\" (-are), \"-é\" or \"-ette\" (-ere), \"-ì\" (-ire). They: \"-arono\", \"-erono\" or \"-ettero\", \"-irono\". Translating into Italian, either the remote past or the passato prossimo is accepted.",
        ],
        examples: [
          { es: "Il pittore lavorò dieci anni a quell'affresco.", en: "The painter worked on that fresco for ten years." },
          { es: "Gli abitanti fuggirono sulle colline.", en: "The inhabitants fled to the hills." },
          { es: "Il vecchio batté il pugno sul tavolo.", en: "The old man banged his fist on the table." },
          { es: "I due amici si salutarono alla stazione.", en: "The two friends said goodbye at the station." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "The inhabitants fled to the hills.", answer: "Gli abitanti fuggirono sulle colline.", altAnswers: ["Gli abitanti sono fuggiti sulle colline."], explanation: "-ire: \"fuggirono\"." },
          { type: "multiple-choice", question: "\"Il vecchio batté il pugno sul tavolo\" means ...", options: ["The old man banged his fist on the table.", "The old man bangs his fist on the table.", "The old man will bang his fist on the table.", "The old man was banging his fist on the table."], correctIndex: 0, explanation: "\"Batté\": -ere remote past with final é." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as an art book would. (The everyday past is accepted too.)", source: "The painter worked on that fresco for ten years.", answer: "Il pittore lavorò dieci anni a quell'affresco.", altAnswers: ["Il pittore ha lavorato dieci anni a quell'affresco.", "Il pittore lavorò per dieci anni a quell'affresco."], explanation: "\"Lavorò\" = \"ha lavorato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "The two friends said goodbye at the station.", answer: "I due amici si salutarono alla stazione.", altAnswers: ["I due amici si sono salutati alla stazione."], explanation: "Reflexive remote past: \"si salutarono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The girl sang all evening.", answer: "La ragazza cantò tutta la sera.", altAnswers: ["La ragazza ha cantato tutta la sera."], explanation: "\"Cantò\": final stress." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "The city grew quickly.", answer: "La città crebbe rapidamente.", altAnswers: ["La città è cresciuta rapidamente.", "La città crebbe in fretta.", "La città crebbe velocemente."], explanation: "\"Crescere\" is irregular: \"crebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "We waited for an hour.", answer: "Aspettammo un'ora.", altAnswers: ["Abbiamo aspettato un'ora.", "Aspettammo per un'ora."], explanation: "\"Aspettammo\": double m in the noi form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The children finished their soup.", answer: "I bambini finirono la minestra.", altAnswers: ["I bambini hanno finito la minestra."], explanation: "\"Finirono\" = \"hanno finito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The knight [crossed] the river.", sentence: "Il cavaliere ___ il fiume.", answer: "attraversò", altAnswers: ["ha attraversato"], explanation: "\"Attraversare\" → \"attraversò\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "Nobody [heard] the shout.", sentence: "Nessuno ___ il grido.", answer: "sentì", altAnswers: ["ha sentito"], explanation: "\"Sentì\" with the accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a novel would. (The everyday past is accepted too.)", en: "The guests [had dinner] in the garden.", sentence: "Gli ospiti ___ in giardino.", answer: "cenarono", altAnswers: ["hanno cenato"], explanation: "\"-arono\" = they." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a novel would. (The everyday past is accepted too.)", en: "She [sold] the house and moved to Turin.", sentence: "___ la casa e si trasferì a Torino.", answer: "Vendette", altAnswers: ["Vendé", "Ha venduto"], explanation: "\"Vendette\" or \"vendé\"." },
      { type: "word-order", prompt: "Put the words in order to say: The fishermen came back at dawn.", words: ["I", "pescatori", "tornarono", "all'alba."], translation: "The fishermen came back at dawn.", explanation: "\"Tornarono\" = they came back." },
      { type: "matching", instructions: "Match each remote past to its passato prossimo.", pairs: [{ left: "cantò", right: "ha cantato" }, { left: "fuggirono", right: "sono fuggiti" }, { left: "credette", right: "ha creduto" }, { left: "aspettammo", right: "abbiamo aspettato" }, { left: "dormii", right: "ho dormito" }], explanation: "Regular remote pasts and their spoken equivalents." },
      { type: "listen-choose", audio: "Lavorarono tutta la notte.", question: "What does it mean?", options: ["They worked all night.", "They work all night.", "He worked all night.", "We worked all night."], correctIndex: 0, explanation: "\"-arono\" = they." },
      { type: "dictation", audio: "La principessa cantò e il re sorrise.", explanation: "\"Cantò\" (regular), \"sorrise\" (irregular)." },
      { type: "speak", text: "Il cavaliere attraversò il fiume, entrò nel bosco e trovò la casa della strega.", prompt: "Read aloud, as a storyteller: The knight crossed the river, went into the woods and found the witch's house.", tip: "Three final stresses: at-tra-ver-SÒ, en-TRÒ, tro-VÒ.", explanation: "Three regular -are remote pasts." },
    ],
  },
  {
    slug: "b1-passato-remoto-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Irregular Forms",
    summary: "Recognition practice with the irregular passato remoto and the 1-3-3 pattern.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "1-3-3",
        body: [
          "Irregular in I, he / she and they, regular in the rest: \"vissi, vivesti, visse, vivemmo, viveste, vissero\". Learn the he / she form and you know the pattern.",
        ],
        examples: [
          { es: "Scese dal treno e si guardò intorno.", en: "She got off the train and looked around." },
          { es: "Corsero fino alla piazza.", en: "They ran all the way to the square." },
          { es: "Piansi tutta la notte.", en: "I cried all night." },
          { es: "Il ladro aprì la cassaforte e prese i gioielli.", en: "The thief opened the safe and took the jewels." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "She got off the train and looked around.", answer: "Scese dal treno e si guardò intorno.", altAnswers: ["È scesa dal treno e si è guardata intorno."], explanation: "\"Scendere\" → \"scese\"." },
          { type: "multiple-choice", question: "\"Corsero fino alla piazza\". Who ran?", options: ["they", "he", "I", "we"], correctIndex: 0, explanation: "\"-ero\" = they; \"correre\" → \"corsero\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a memoir would. (The everyday past is accepted too.)", source: "I cried all night.", answer: "Piansi tutta la notte.", altAnswers: ["Ho pianto tutta la notte."], explanation: "\"Piangere\" → \"piansi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "The thief took the jewels.", answer: "Il ladro prese i gioielli.", altAnswers: ["Il ladro ha preso i gioielli."], explanation: "\"Prese\" = \"ha preso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "They ran all the way to the square.", answer: "Corsero fino alla piazza.", altAnswers: ["Hanno corso fino alla piazza.", "Sono corsi fino alla piazza."], explanation: "\"Corsero\" from \"correre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "The emperor chose a new capital.", answer: "L'imperatore scelse una nuova capitale.", altAnswers: ["L'imperatore ha scelto una nuova capitale."], explanation: "\"Scegliere\" → \"scelse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "He closed the door and turned off the light.", answer: "Chiuse la porta e spense la luce.", altAnswers: ["Ha chiuso la porta e ha spento la luce."], explanation: "\"Chiuse\" (\"chiudere\"), \"spense\" (\"spegnere\")." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The witch gave her an apple.", answer: "La strega le diede una mela.", altAnswers: ["La strega le dette una mela.", "La strega le ha dato una mela."], explanation: "\"Dare\" → \"diede\" / \"dette\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a novel would. (The everyday past is accepted too.)", en: "When he [read] the letter, he went pale.", sentence: "Quando ___ la lettera, impallidì.", answer: "lesse", altAnswers: ["ha letto"], explanation: "\"Leggere\" → \"lesse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The two brothers [met] a wise old man.", sentence: "I due fratelli ___ un vecchio saggio.", answer: "incontrarono", altAnswers: ["conobbero", "hanno incontrato", "hanno conosciuto"], explanation: "\"Incontrarono\" (regular) or \"conobbero\" (irregular)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The sun [came out] and the snow melted.", sentence: "Il sole ___ e la neve si sciolse.", answer: "uscì", altAnswers: ["è uscito", "spuntò"], explanation: "\"Uscire\" is regular in the remote past: \"uscì\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a history book would. (The everyday past is accepted too.)", en: "The Romans [built] roads all over Europe.", sentence: "I Romani ___ strade in tutta Europa.", answer: "costruirono", altAnswers: ["hanno costruito"], explanation: "Regular -ire: \"costruirono\"." },
      { type: "word-order", prompt: "Put the words in order to say: The baby was born in the spring.", words: ["Il", "bambino", "nacque", "in", "primavera."], translation: "The baby was born in the spring.", explanation: "\"Nacque\" = \"è nato\"." },
      { type: "matching", instructions: "Match the remote past to its infinitive.", pairs: [{ left: "spense", right: "spegnere" }, { left: "scelse", right: "scegliere" }, { left: "piansi", right: "piangere" }, { left: "corsero", right: "correre" }, { left: "crebbe", right: "crescere" }], explanation: "The 1-3-3 stems." },
      { type: "listen-choose", audio: "Si accorse dell'errore troppo tardi.", question: "What does it mean?", options: ["He noticed the mistake too late.", "He made the mistake too late.", "He will notice the mistake too late.", "He corrected the mistake in time."], correctIndex: 0, explanation: "\"Accorgersi\" → \"si accorse\" = noticed, realised." },
      { type: "dictation", audio: "Chiuse la porta e spense la luce.", explanation: "Two irregulars: \"chiuse\", \"spense\"." },
      { type: "speak", text: "Lesse la lettera, pianse un po' e poi decise di partire.", prompt: "Read aloud: She read the letter, cried a little and then decided to leave.", tip: "\"Pianse\": PIAN-se, stress on the first syllable.", explanation: "Three irregular remote pasts." },
    ],
  },
  {
    slug: "b1-passato-remoto-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Short Readings",
    summary: "Two more short texts in the passato remoto: a legend about Venice and a museum panel about Galileo.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two short texts",
        body: [
          "Read each text line by line. The first is a short legend about the founding of Venice; the second, a museum panel about Galileo Galilei (1564-1642). Imperfetto for background, remote past for events.",
        ],
        examples: [
          { es: "Quando arrivarono i barbari, gli abitanti fuggirono nella laguna.", en: "When the barbarians came, the inhabitants fled into the lagoon." },
          { es: "Costruirono case di legno sulle isole e così nacque Venezia.", en: "They built wooden houses on the islands, and so Venice was born." },
          { es: "Galileo nacque a Pisa nel 1564 e insegnò matematica a Padova.", en: "Galileo was born in Pisa in 1564 and taught mathematics in Padua." },
          { es: "Con il suo telescopio scoprì i satelliti di Giove.", en: "With his telescope he discovered the moons of Jupiter." },
          { es: "Nel 1633 fu processato dall'Inquisizione e passò il resto della vita ad Arcetri.", en: "In 1633 he was tried by the Inquisition and spent the rest of his life at Arcetri." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the legend does. (The everyday past is accepted too.)", source: "The inhabitants fled into the lagoon.", answer: "Gli abitanti fuggirono nella laguna.", altAnswers: ["Gli abitanti sono fuggiti nella laguna."], explanation: "\"Fuggirono\" = \"sono fuggiti\"." },
          { type: "multiple-choice", question: "Where did Galileo teach mathematics?", options: ["Padua", "Pisa", "Arcetri", "Venice"], correctIndex: 0, explanation: "\"Insegnò matematica a Padova\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the legend does. (The everyday past is accepted too.)", source: "They built wooden houses on the islands.", answer: "Costruirono case di legno sulle isole.", altAnswers: ["Hanno costruito case di legno sulle isole."], explanation: "\"Costruirono\" = \"hanno costruito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the legend does. (The everyday past is accepted too.)", source: "And so Venice was born.", answer: "E così nacque Venezia.", altAnswers: ["E così è nata Venezia."], explanation: "\"Nacque\": subject after the verb, as often in narration." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a museum panel would. (The everyday past is accepted too.)", source: "Galileo was born in Pisa in 1564.", answer: "Galileo nacque a Pisa nel 1564.", altAnswers: ["Galileo è nato a Pisa nel 1564."], explanation: "\"Nacque\" = \"è nato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a museum panel would. (The everyday past is accepted too.)", source: "He taught mathematics in Padua.", answer: "Insegnò matematica a Padova.", altAnswers: ["Ha insegnato matematica a Padova.", "Insegnò la matematica a Padova."], explanation: "\"Insegnare\" → \"insegnò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a museum panel would. (The everyday past is accepted too.)", source: "He discovered the moons of Jupiter.", answer: "Scoprì i satelliti di Giove.", altAnswers: ["Ha scoperto i satelliti di Giove.", "Scoprì le lune di Giove."], explanation: "\"Scoprire\" → \"scoprì\" (regular in the remote past)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a museum panel would. (The everyday past is accepted too.)", en: "He [spent] the rest of his life at Arcetri.", sentence: "___ il resto della vita ad Arcetri.", answer: "Passò", altAnswers: ["Ha passato", "Trascorse"], explanation: "\"Passare\" → \"passò\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as the legend does. (The everyday past is accepted too.)", en: "When the barbarians [came], the inhabitants fled.", sentence: "Quando ___ i barbari, gli abitanti fuggirono.", answer: "arrivarono", altAnswers: ["sono arrivati", "vennero"], explanation: "\"Arrivarono\" = they came." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a museum panel would.", en: "In 1633 he [was tried] by the Inquisition.", sentence: "Nel 1633 ___ processato dall'Inquisizione.", answer: "fu", altAnswers: ["è stato"], explanation: "\"Fu\" + participle: a remote past passive, the way history books put it." },
      { type: "word-order", prompt: "Put the words in order to say: With his telescope he discovered the moons of Jupiter.", words: ["Con", "il", "suo", "telescopio", "scoprì", "i", "satelliti", "di", "Giove."], translation: "With his telescope he discovered the moons of Jupiter.", explanation: "\"Scoprì\": final stress." },
      { type: "multiple-choice", question: "According to the legend, why did people settle in the lagoon?", options: ["To escape the barbarians", "To trade with the East", "To build a port", "To fish"], correctIndex: 0, explanation: "\"Gli abitanti fuggirono nella laguna\"." },
      { type: "matching", instructions: "Match the Italian from the texts to the English.", pairs: [{ left: "fuggirono", right: "they fled" }, { left: "costruirono", right: "they built" }, { left: "insegnò", right: "he taught" }, { left: "scoprì", right: "he discovered" }, { left: "passò", right: "he spent" }], explanation: "Remote pasts from both readings." },
      { type: "multi-select", question: "Which words are remote past forms? Choose all that apply.", options: ["nacque", "insegnava", "scoprì", "fu", "abitavano"], correctIndexes: [0, 2, 3], explanation: "\"Insegnava\" and \"abitavano\" are imperfetto." },
      { type: "listen-choose", audio: "Galileo insegnò matematica a Padova.", question: "What did Galileo do in Padua?", options: ["He taught mathematics.", "He studied medicine.", "He was born there.", "He built a church."], correctIndex: 0, explanation: "\"Insegnò\" = taught." },
      { type: "dictation", audio: "E così nacque Venezia.", explanation: "\"Nacque\" with \"cq\"." },
      { type: "speak", text: "Galileo nacque a Pisa, insegnò a Padova e scoprì i satelliti di Giove.", prompt: "Summarise aloud: Galileo was born in Pisa, taught in Padua and discovered the moons of Jupiter.", tip: "\"Giove\": soft g, JO-ve.", explanation: "Three life events in the remote past." },
    ],
  },
];
