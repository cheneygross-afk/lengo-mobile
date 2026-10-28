// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u09-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 9 Extra Practice: Slang and Youth Language.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
// All texts are original to this course.
export const IT_C2_U09_EXTRA: Lesson[] = [
  {
    slug: "c2-slang-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Slang",
    summary: "Decode fresh slang in a short monologue and a review, and restate it in neutral Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A monologue",
        body: [
          "Written for this practice: Nico, eighteen, tells a friend about his first day at work in a café. \"Raga, primo giorno al bar: un delirio. Alle otto c'era un casino di gente, il capo sclerava, io ho rovesciato due cappuccini. Però i colleghi sono top, e a fine turno ci siamo fatti una birra. Domani si ricomincia, daje.\"",
          "Notes: \"un delirio\" (chaos, madness, colloquiale), \"un casino di gente\" (loads of people), \"top\" (great), \"farsi una birra\" (to have a beer), \"daje\" (come on, Roman, now widespread among young people).",
        ],
        examples: [
          { es: "Primo giorno al bar: un delirio.", en: "First day at the café: total chaos." },
          { es: "C'era un casino di gente.", en: "There were loads of people." },
          { es: "I colleghi sono top.", en: "My colleagues are great." },
          { es: "A fine turno ci siamo fatti una birra.", en: "At the end of the shift we had a beer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite in neutral Italian: \"I colleghi sono top.\" (My colleagues are great.)", source: "My colleagues are great.", answer: "I colleghi sono fantastici.", altAnswers: ["I colleghi sono bravissimi.", "I colleghi sono molto simpatici.", "I colleghi sono ottimi."], explanation: "\"Top\" → \"fantastici\"." },
          { type: "listen-choose", audio: "Alle otto c'era un casino di gente e il capo sclerava.", question: "What was it like at eight?", options: ["Very crowded, and the boss was losing it.", "Empty and quiet.", "The café was closed.", "The boss was on vacation."], correctIndex: 0, explanation: "\"Un casino di gente\", \"sclerava\"." },
        ],
      },
      {
        heading: "A review",
        body: [
          "A young user's online review of a pizzeria, written for this practice: \"Pizza assurda, impasto top, prezzi onesti. Unica red flag: il cameriere ci ha ghostato per venti minuti. Comunque ci torno, troppo buona.\" In neutral Italian: \"Pizza eccezionale, impasto ottimo, prezzi onesti. Unico difetto: il cameriere ci ha ignorato per venti minuti. Comunque ci tornerò: era buonissima.\"",
        ],
        examples: [
          { es: "Pizza assurda, impasto top.", en: "Amazing pizza, great dough." },
          { es: "Unica red flag: il servizio.", en: "Only red flag: the service." },
          { es: "Il cameriere ci ha ignorato per venti minuti.", en: "The waiter ignored us for twenty minutes." },
          { es: "Comunque ci torno, troppo buona.", en: "I'll go back anyway, it was so good." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The waiter ignored us for twenty minutes.", answer: "Il cameriere ci ha ignorato per venti minuti.", altAnswers: ["Il cameriere ci ha ignorati per venti minuti.", "La cameriera ci ha ignorato per venti minuti."], explanation: "Neutral for \"ci ha ghostato\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Only flaw]: the service.", sentence: "___: il servizio.", answer: "Unico difetto", altAnswers: ["Unica pecca", "L'unico difetto"], explanation: "Neutral for \"unica red flag\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Rewrite in neutral Italian: \"Primo giorno al bar: un delirio.\" (First day at the café: chaos.)", source: "First day at the café: chaos.", answer: "Primo giorno al bar: un caos.", altAnswers: ["Primo giorno al bar: una confusione incredibile.", "Il primo giorno al bar è stato caotico."], explanation: "\"Delirio\" → \"caos\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite in neutral Italian: \"C'era un casino di gente.\" (There were a lot of people.)", source: "There were a lot of people.", answer: "C'era moltissima gente.", altAnswers: ["C'era tantissima gente.", "C'erano moltissime persone.", "C'era molta gente."], explanation: "\"Un casino di\" → \"moltissimo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I spilled two cappuccinos.", answer: "Ho rovesciato due cappuccini.", altAnswers: ["Ho versato due cappuccini."], explanation: "\"Rovesciare\" = to spill." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the end of the shift we had a beer.", answer: "A fine turno ci siamo fatti una birra.", altAnswers: ["A fine turno abbiamo bevuto una birra.", "Alla fine del turno ci siamo fatti una birra."], explanation: "\"Farsi una birra\": colloquial." },
      { type: "translate", direction: "en-es", prompt: "Rewrite in neutral Italian: \"Pizza assurda, impasto top.\" (Exceptional pizza, excellent dough.)", source: "Exceptional pizza, excellent dough.", answer: "Pizza eccezionale, impasto ottimo.", altAnswers: ["Pizza eccezionale, impasto eccellente.", "Pizza straordinaria, impasto ottimo."], explanation: "\"Assurdo\" in youth speech = amazing." },
      { type: "translate", direction: "en-es", prompt: "Rewrite in neutral Italian: \"Comunque ci torno, troppo buona.\" (I'll go back anyway, it was delicious.)", source: "I'll go back anyway, it was delicious.", answer: "Comunque ci tornerò: era buonissima.", altAnswers: ["Comunque ci torno, era buonissima.", "Ci tornerò comunque, era buonissima."], explanation: "\"Troppo\" = very, in youth speech." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tomorrow [we start again], come on (slang)!", sentence: "Domani ___, daje!", answer: "si ricomincia", explanation: "Impersonal \"si\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The boss [was losing it] (slang).", sentence: "Il capo ___.", answer: "sclerava", explanation: "Imperfect of \"sclerare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My colleagues are [great] (slang).", sentence: "I colleghi sono ___.", answer: "top", altAnswers: ["fighi", "forti"], explanation: "Invariable \"top\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The prices are [fair].", sentence: "I prezzi sono ___.", answer: "onesti", altAnswers: ["giusti", "ragionevoli"], explanation: "\"Prezzi onesti\": a common collocation." },
      { type: "word-order", prompt: "Put the words in order to say: The waiter ignored us.", words: ["Il", "cameriere", "ci", "ha", "ignorato."], translation: "The waiter ignored us.", explanation: "Neutral for \"ci ha ghostato\"." },
      { type: "matching", instructions: "Match the slang to the neutral Italian.", pairs: [{ left: "un delirio", right: "un caos" }, { left: "top", right: "ottimo" }, { left: "assurdo (positive)", right: "eccezionale" }, { left: "red flag", right: "difetto, segnale d'allarme" }], explanation: "Slang to standard." },
      { type: "multiple-choice", question: "In youth speech, \"troppo buona\" means:", options: ["really delicious", "too sweet", "too kind", "overcooked"], correctIndex: 0, explanation: "\"Troppo\" as an intensifier." },
      { type: "dictation", audio: "A fine turno ci siamo fatti una birra con i colleghi.", explanation: "Colloquial \"farsi\"." },
      { type: "speak", text: "Il primo giorno è stato caotico, ma i colleghi sono fantastici.", prompt: "Tell your parents neutrally: The first day was chaotic, but my colleagues are great.", tip: "Neutral, positive tone.", explanation: "Register for family." },
    ],
  },
  {
    slug: "c2-slang-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Texting",
    summary: "Decode fresh text messages and rewrite them in full, correct Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Messages between friends",
        body: [
          "Written for this practice. \"Dv 6? Ti aspetto da 10 min\" (Dove sei? Ti aspetto da dieci minuti). \"Scs, sn in ritardo, arrivo tra 5\" (Scusa, sono in ritardo, arrivo tra cinque minuti). \"Nn c'è problema, cmq porta qlcs da bere\" (Non c'è problema, comunque porta qualcosa da bere). \"Ok, x te birra o succo?\" (Va bene, per te birra o succo?).",
        ],
        examples: [
          { es: "Dove sei? Ti aspetto da dieci minuti.", en: "Where are you? I've been waiting for ten minutes." },
          { es: "Scusa, sono in ritardo, arrivo tra cinque minuti.", en: "Sorry, I'm late, I'll be there in five minutes." },
          { es: "Comunque porta qualcosa da bere.", en: "Anyway, bring something to drink." },
          { es: "Per te birra o succo?", en: "Beer or juice for you?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write in full Italian the text \"Dv 6? Ti aspetto da 10 min\" (Where are you? I've been waiting for ten minutes).", source: "Where are you? I've been waiting for ten minutes.", answer: "Dove sei? Ti aspetto da dieci minuti.", altAnswers: ["Dove sei? Ti sto aspettando da dieci minuti."], explanation: "Present + \"da\" for ongoing time." },
          { type: "listen-choose", audio: "Scusa, sono in ritardo, arrivo tra cinque minuti.", question: "When will the friend arrive?", options: ["in five minutes", "in ten minutes", "tomorrow", "never"], correctIndex: 0, explanation: "\"Tra cinque minuti\"." },
        ],
      },
      {
        heading: "Family messages",
        body: [
          "Family chats mix generations. A teenager writes \"Mamma stasera torno tardi tvb\" (Mamma, stasera torno tardi, ti voglio bene). The mother answers in full, with punctuation: \"Va bene, ma entro mezzanotte. E rispondi al telefono, per favore.\" Grandparents often write in capitals or send voice messages: \"NONNA: AUGURI A TUTTI!!!\"",
        ],
        examples: [
          { es: "Mamma, stasera torno tardi, ti voglio bene.", en: "Mom, I'll be home late tonight, love you." },
          { es: "Va bene, ma entro mezzanotte.", en: "All right, but by midnight." },
          { es: "E rispondi al telefono, per favore.", en: "And answer the phone, please." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write in full Italian the text \"Mamma stasera torno tardi tvb\" (Mom, I'll be home late tonight, love you).", source: "Mom, I'll be home late tonight, love you.", answer: "Mamma, stasera torno tardi, ti voglio bene.", altAnswers: ["Mamma, stasera rientro tardi, ti voglio bene."], explanation: "\"Tvb\" = ti voglio bene; add the commas." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "All right, but [by midnight].", sentence: "Va bene, ma ___.", answer: "entro mezzanotte", explanation: "\"Entro\" = by (a deadline)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Write in full Italian the text \"Scs, sn in ritardo\" (Sorry, I'm late).", source: "Sorry, I'm late.", answer: "Scusa, sono in ritardo.", altAnswers: ["Scusami, sono in ritardo."], explanation: "\"Scs\" = scusa; \"sn\" = sono." },
      { type: "translate", direction: "en-es", prompt: "Write in full Italian the text \"Nn c'è problema\" (No problem).", source: "No problem.", answer: "Non c'è problema.", altAnswers: ["Nessun problema."], explanation: "\"Nn\" = non." },
      { type: "translate", direction: "en-es", prompt: "Write in full Italian the text \"Cmq porta qlcs da bere\" (Anyway, bring something to drink).", source: "Anyway, bring something to drink.", answer: "Comunque porta qualcosa da bere.", explanation: "\"Qlcs\" = qualcosa." },
      { type: "translate", direction: "en-es", prompt: "Write in full Italian the text \"Ok, x te birra o succo?\" (OK, beer or juice for you?)", source: "OK, beer or juice for you?", answer: "Va bene, per te birra o succo?", altAnswers: ["Ok, per te birra o succo?", "D'accordo, per te birra o succo?"], explanation: "\"X\" = per." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And answer the phone, please.", answer: "E rispondi al telefono, per favore.", altAnswers: ["E rispondi al telefono, per piacere."], explanation: "\"Rispondere a\"." },
      { type: "translate", direction: "en-es", prompt: "Write in full Italian the text \"Grz, a dmn\" (Thanks, see you tomorrow).", source: "Thanks, see you tomorrow.", answer: "Grazie, a domani.", explanation: "\"Dmn\" = domani." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've been waiting for you] for ten minutes.", sentence: "___ da dieci minuti.", answer: "Ti aspetto", altAnswers: ["Ti sto aspettando"], explanation: "Present + \"da\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll be there [in five minutes].", sentence: "Arrivo ___.", answer: "tra cinque minuti", altAnswers: ["fra cinque minuti"], explanation: "\"Tra\" / \"fra\" for future time." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Tt ok?\" means: [Is everything OK]?", sentence: "___?", answer: "Tutto bene", altAnswers: ["Tutto ok", "Va tutto bene"], explanation: "\"Tt\" = tutto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Nn so cm fare\" means: I don't know [how to do it].", sentence: "Non so ___.", answer: "come fare", explanation: "\"Cm\" = come." },
      { type: "word-order", prompt: "Put the words in order to say: Mom, I'll be home late tonight.", words: ["Mamma,", "stasera", "torno", "tardi."], translation: "Mom, I'll be home late tonight.", explanation: "Present for near future." },
      { type: "matching", instructions: "Match the abbreviation to the full form.", pairs: [{ left: "scs", right: "scusa" }, { left: "dmn", right: "domani" }, { left: "cm", right: "come" }, { left: "6", right: "sei" }], explanation: "Texting shortcuts." },
      { type: "multiple-choice", question: "Why might a grandmother's message be in capitals?", options: ["She's not used to the phone keyboard, not because she's shouting.", "She is angry.", "It's a formal message.", "It's an emergency."], correctIndex: 0, explanation: "A generational habit, often joked about." },
      { type: "dictation", audio: "Dove sei? Ti aspetto da dieci minuti davanti al cinema.", explanation: "Full forms." },
      { type: "speak", text: "Scusa, sono in ritardo, arrivo tra cinque minuti.", prompt: "Leave a voice message instead of texting: Sorry, I'm late, I'll be there in five minutes.", tip: "Quick but clear.", explanation: "Voice message register." },
    ],
  },
];
