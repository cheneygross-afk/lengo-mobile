// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u05-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 5 Extra Practice: Gestures and Body Language.
// Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_CULTURE_U05_EXTRA: Lesson[] = [
  {
    slug: "culture-gestures-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Gesture Meanings",
    summary: "Fresh sentences that pair everyday gestures with the Italian words they stand for.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Say it with your hands",
        body: [
          "Each gesture has words that go with it. Practise the words: the hands will follow. Remember \"vuol dire\" (it means) and \"fare un gesto\" (to make a gesture).",
        ],
        examples: [
          { es: "Questo gesto vuol dire che ho fame.", en: "This gesture means I'm hungry." },
          { es: "Mi ha fatto segno di aspettare.", en: "He signaled me to wait." },
          { es: "Con la mano ha detto così così.", en: "With his hand he said so-so." },
          { es: "Ha fatto finta di telefonare.", en: "He pretended to make a phone call." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He signaled me to wait.", answer: "Mi ha fatto segno di aspettare.", altAnswers: ["Lui mi ha fatto segno di aspettare.", "Mi ha fatto cenno di aspettare."], explanation: "\"Fare segno di\" + infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This gesture [means] I'm hungry.", sentence: "Questo gesto ___ che ho fame.", answer: "vuol dire", altAnswers: ["vuole dire", "significa"], explanation: "\"Voler dire\" = to mean." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm hungry!", answer: "Ho fame!", altAnswers: ["Io ho fame!"], explanation: "\"Avere fame\", never \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Watch out!", answer: "Occhio!", altAnswers: ["Attento!", "Attenta!", "Attenzione!"], explanation: "\"Occhio!\" with the eyelid gesture." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Perfect!", answer: "Perfetto!", altAnswers: ["Perfetta!"], explanation: "Double t." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wait a moment!", answer: "Aspetta un attimo!", altAnswers: ["Aspetta un momento!", "Aspetti un attimo!", "Un attimo!"], explanation: "\"Un attimo\" = a moment." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It costs a fortune.", answer: "Costa un sacco di soldi.", altAnswers: ["Costa una fortuna.", "Costa un occhio della testa."], explanation: "The money gesture." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He pretended to make a phone call.", answer: "Ha fatto finta di telefonare.", altAnswers: ["Lui ha fatto finta di telefonare."], explanation: "\"Fare finta di\" = to pretend to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you doing?!", answer: "Ma che fai?!", altAnswers: ["Che fai?!", "Ma cosa fai?!", "Cosa fai?!", "Ma che fai?"], explanation: "With the pinched fingers." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Those two [are a couple].", sentence: "Quei due ___.", answer: "stanno insieme", explanation: "Two index fingers side by side." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It's delicious]!", sentence: "___!", answer: "È buonissimo", altAnswers: ["Buonissimo", "Che buono", "È buono"], explanation: "Finger twisted into the cheek." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [talks too much].", sentence: "___ troppo.", answer: "Parla", altAnswers: ["Lui parla"], explanation: "The beak-hand gesture." },
      { type: "word-order", prompt: "Put the words in order to say: With his hand he said so-so.", words: ["Con", "la", "mano", "ha", "detto", "così", "così."], translation: "With his hand he said so-so.", explanation: "\"Così così\" = so-so." },
      { type: "word-order", prompt: "Put the words in order to say: I'll call you later.", words: ["Ti", "chiamo", "più", "tardi."], translation: "I'll call you later.", explanation: "\"Più tardi\" = later." },
      {
        type: "matching",
        instructions: "Match the words to the gesture.",
        pairs: [
          { left: "Ma che vuoi?", right: "pinched fingers shaken" },
          { left: "Buono!", right: "fingertip twisted into the cheek" },
          { left: "Occhio!", right: "finger pulling down the eyelid" },
          { left: "Soldi", right: "thumb rubbed on the fingers" },
          { left: "Ti chiamo", right: "thumb and little finger at the ear" },
        ],
        explanation: "Five classics.",
      },
      { type: "multiple-choice", question: "Your friend rocks a flat hand from side to side when you ask about her new job. What does she mean?", options: ["So-so.", "It's fantastic.", "She quit.", "She's hungry."], correctIndex: 0, explanation: "\"Così così\"." },
      { type: "listen-choose", audio: "Mi ha fatto segno di aspettare.", question: "What did he do?", options: ["He signaled to wait.", "He waved goodbye.", "He asked for money.", "He said he was hungry."], correctIndex: 0, explanation: "\"Aspettare\" = to wait." },
      { type: "dictation", audio: "Questo gesto vuol dire che ho fame.", explanation: "\"Vuol\" drops the final e before \"dire\"." },
      { type: "speak", text: "Aspetta un attimo, ti chiamo più tardi!", prompt: "Say it in Italian: Wait a moment, I'll call you later!", tip: "AT-ti-mo: hold the double t.", explanation: "Two gestures, two phrases." },
    ],
  },
  {
    slug: "culture-gestures-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Greetings",
    summary: "Fresh situations for greeting Italians: kisses, handshakes, introductions and goodbyes.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Hello and goodbye",
        body: [
          "\"Ciao\" is for friends; \"Buongiorno\" and \"Buonasera\" for everyone else, \"Buonasera\" from mid-afternoon. On first meeting: \"Piacere\" and a handshake. With friends: two kisses, arriving and leaving.",
        ],
        examples: [
          { es: "Buonasera, signora, come sta?", en: "Good evening, ma'am, how are you?" },
          { es: "Ti presento mia sorella.", en: "Let me introduce my sister." },
          { es: "Piacere, Sofia.", en: "Nice to meet you, I'm Sofia." },
          { es: "Ciao a tutti, ci vediamo!", en: "Bye, everyone, see you!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me introduce my sister.", answer: "Ti presento mia sorella.", altAnswers: ["Le presento mia sorella.", "Vi presento mia sorella."], explanation: "\"Presentare\" = to introduce." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Good evening, ma'am, [how are you]?", sentence: "Buonasera, signora, ___?", answer: "come sta", explanation: "\"Come sta?\" with Lei." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bye, everyone, see you!", answer: "Ciao a tutti, ci vediamo!", altAnswers: ["Ciao a tutti, a presto!"], explanation: "\"Ci vediamo\" = see you." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nice to meet you!", answer: "Piacere!", altAnswers: ["Piacere di conoscerti!", "Piacere di conoscerla!", "Molto piacere!"], explanation: "\"Piacere\" alone is the norm." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Good morning, doctor!", answer: "Buongiorno, dottore!", altAnswers: ["Buongiorno, dottoressa!", "Buongiorno dottore!"], explanation: "Titles are used in greetings." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Give me a hug!", answer: "Dammi un abbraccio!", altAnswers: ["Abbracciami!"], explanation: "\"Dammi\" = give me." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How are you? (to a friend)", answer: "Come stai?", altAnswers: ["Come va?", "Tutto bene?"], explanation: "\"Stai\" for tu." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Say hello to your parents for me.", answer: "Salutami i tuoi genitori.", altAnswers: ["Salutami i tuoi.", "Saluta i tuoi genitori da parte mia.", "Saluta i tuoi da parte mia."], explanation: "\"Salutami\" = say hello for me." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Good evening, everyone!", answer: "Buonasera a tutti!", altAnswers: ["Buona sera a tutti!"], explanation: "\"Buonasera\" from mid-afternoon on." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We greet each other [with a handshake].", sentence: "Ci salutiamo ___.", answer: "con una stretta di mano", explanation: "\"Una stretta di mano\" = a handshake." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let me introduce] my colleague Marco. (formal)", sentence: "___ il mio collega Marco.", answer: "Le presento", explanation: "\"Le\" = to you, formal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A big hug], Giulia.", sentence: "___, Giulia.", answer: "Un abbraccio", altAnswers: ["Un forte abbraccio", "Un abbraccio forte"], explanation: "A friendly sign-off." },
      { type: "word-order", prompt: "Put the words in order to say: Shall we use tu with each other?", words: ["Ci", "diamo", "del", "tu?"], translation: "Shall we use tu with each other?", explanation: "\"Darsi del tu\"." },
      { type: "word-order", prompt: "Put the words in order to say: See you tomorrow at the office.", words: ["Ci", "vediamo", "domani", "in", "ufficio."], translation: "See you tomorrow at the office.", explanation: "\"In ufficio\", no article." },
      {
        type: "matching",
        instructions: "Match the situation to the greeting.",
        pairs: [
          { left: "due baci", right: "old friends" },
          { left: "una stretta di mano", right: "a first business meeting" },
          { left: "un abbraccio", right: "close family" },
          { left: "Buonasera", right: "a shop at 6 p.m." },
        ],
        explanation: "Choose by closeness and setting.",
      },
      { type: "multiple-choice", question: "You enter a pharmacy at 5 p.m. What do you say?", options: ["Buonasera!", "Ciao!", "Buonanotte!", "Piacere!"], correctIndex: 0, explanation: "\"Buonasera\" from mid-afternoon; \"buonanotte\" is for going to bed." },
      { type: "listen-choose", audio: "Ti presento mia sorella.", question: "What is happening?", options: ["Someone is introducing their sister.", "Someone is saying goodbye.", "Someone is giving a present.", "Someone is asking for help."], correctIndex: 0, explanation: "\"Presentare\", not a present." },
      { type: "dictation", audio: "Piacere, Sofia. Ciao a tutti!", explanation: "\"Piacere\": one c." },
      { type: "speak", text: "Buonasera! Le presento mio marito, Tom.", prompt: "Say it in Italian: Good evening! May I introduce my husband, Tom.", tip: "Mio ma-RI-to: no article with \"mio\" + singular relative.", explanation: "A formal introduction." },
    ],
  },
];
