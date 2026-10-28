// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u20-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 20 Extra Practice: Indefinites and Negatives. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U20_EXTRA: Lesson[] = [
  {
    slug: "a2-indefinites-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Someone, Something",
    summary: "Fresh sentences with qualcuno, qualcosa di / da and qualche.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Qualcuno, qualcosa, qualche",
        body: [
          "\"Qualcuno\" and \"qualcosa\" take a singular verb. \"Qualcosa di\" + adjective, \"qualcosa da\" + infinitive. \"Qualche\" + singular noun.",
        ],
        examples: [
          { es: "Qualcuno ha preso il mio ombrello.", en: "Someone has taken my umbrella." },
          { es: "Cerco qualcosa di economico.", en: "I'm looking for something cheap." },
          { es: "Mi dai qualcosa da leggere?", en: "Will you give me something to read?" },
          { es: "Ci vediamo tra qualche settimana.", en: "See you in a few weeks." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone has taken my umbrella.", answer: "Qualcuno ha preso il mio ombrello.", explanation: "\"Qualcuno\" + singular verb." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for something cheap.", answer: "Cerco qualcosa di economico.", altAnswers: ["Sto cercando qualcosa di economico."], explanation: "\"Qualcosa di\" + masculine adjective." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you give me something to read? (to a friend)", answer: "Mi dai qualcosa da leggere?", explanation: "\"Qualcosa da\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you in a few weeks.", answer: "Ci vediamo tra qualche settimana.", altAnswers: ["Ci vediamo fra qualche settimana."], explanation: "\"Qualche\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Does anyone speak English?", answer: "Qualcuno parla inglese?", explanation: "\"Qualcuno\" in a question = anyone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to do something different this summer.", answer: "Voglio fare qualcosa di diverso quest'estate.", altAnswers: ["Quest'estate voglio fare qualcosa di diverso.", "Vorrei fare qualcosa di diverso quest'estate."], explanation: "\"Qualcosa di\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A few colleagues have the flu.", answer: "Qualche collega ha l'influenza.", altAnswers: ["Alcuni colleghi hanno l'influenza."], explanation: "\"Qualche\" + singular noun and verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Has anything happened?", answer: "È successo qualcosa?", explanation: "\"Succedere\" + \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's [someone] at the door.", sentence: "C'è ___ alla porta.", answer: "qualcuno", explanation: "\"Qualcuno\" = someone." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you want [something hot]?", sentence: "Vuoi ___?", answer: "qualcosa di caldo", explanation: "\"Qualcosa di\" + adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [a few] photos of the trip.", sentence: "Ho ___ foto del viaggio.", answer: "qualche", altAnswers: ["alcune"], explanation: "\"Qualche foto\" (singular) or \"alcune foto\" (plural): \"foto\" doesn't change." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's [nothing to do] here.", sentence: "Non c'è ___ qui.", answer: "niente da fare", altAnswers: ["nulla da fare"], explanation: "\"Niente da\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: Has anything happened?", words: ["È", "successo", "qualcosa?"], translation: "Has anything happened?", explanation: "\"Qualcosa\" in a question." },
      { type: "multiple-choice", question: "How do you say I've got a few friends in Milan?", options: ["Ho qualche amico a Milano.", "Ho qualche amici a Milano.", "Ho qualcuno amici a Milano.", "Ho alcuno amico a Milano."], correctIndex: 0, explanation: "\"Qualche\" + singular." },
      { type: "listen-choose", audio: "C'è qualcosa di strano in questa casa.", question: "What does he say?", options: ["There's something strange in this house.", "There's nothing strange in this house.", "Someone strange lives here.", "The house is strange-looking."], correctIndex: 0, explanation: "\"Qualcosa di strano\"." },
      { type: "dictation", audio: "Qualcuno vuole qualcosa da bere?", explanation: "\"Qualcuno\", \"qualcosa da\"." },
      { type: "speak", text: "Stasera voglio mangiare qualcosa di buono con qualche amico.", prompt: "Say it in Italian: Tonight I want to eat something good with a few friends.", tip: "\"Qualche amico\": singular, even though it means several.", explanation: "\"Qualcosa di\", \"qualche\" + singular." },
    ],
  },
  {
    slug: "a2-indefinites-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Double Negatives",
    summary: "Fresh sentences with non ... nessuno, niente, mai, più, né ... né and neanche.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Non + negative word",
        body: [
          "\"Non\" before the verb, then \"nessuno\", \"niente\", \"mai\", \"più\", \"né ... né\" or \"neanche\". Negative word first → no \"non\".",
        ],
        examples: [
          { es: "Non ho mai visto la neve.", en: "I've never seen snow." },
          { es: "Non lo dico a nessuno.", en: "I won't tell anyone." },
          { es: "Niente mi fa paura.", en: "Nothing scares me." },
          { es: "Non ci torno più.", en: "I'm never going back there." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never seen snow.", answer: "Non ho mai visto la neve.", explanation: "\"Mai\" between auxiliary and participle." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I won't tell anyone.", answer: "Non lo dico a nessuno.", altAnswers: ["Non lo dirò a nessuno."], explanation: "\"Non ... a nessuno\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nothing scares me.", answer: "Niente mi fa paura.", altAnswers: ["Non mi fa paura niente.", "Nulla mi fa paura."], explanation: "\"Niente\" first → no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm never going back there.", answer: "Non ci torno più.", altAnswers: ["Non ci torno mai più."], explanation: "\"Ci\" + \"non ... più\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody understands me.", answer: "Nessuno mi capisce.", altAnswers: ["Non mi capisce nessuno."], explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't buy anything at the market.", answer: "Non abbiamo comprato niente al mercato.", altAnswers: ["Non abbiamo comprato nulla al mercato.", "Al mercato non abbiamo comprato niente."], explanation: "\"Non ... niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She eats neither meat nor fish.", answer: "Non mangia né carne né pesce.", altAnswers: ["Lei non mangia né carne né pesce.", "Non mangia né la carne né il pesce."], explanation: "\"Non ... né ... né\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They didn't even call.", answer: "Non hanno neanche chiamato.", altAnswers: ["Non hanno nemmeno chiamato.", "Non hanno neppure telefonato.", "Non hanno neanche telefonato."], explanation: "\"Non\" + \"neanche\" between auxiliary and participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Nobody] is perfect.", sentence: "___ è perfetto.", answer: "Nessuno", explanation: "Negative first → no \"non\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have [neither brothers nor sisters].", sentence: "Non ho ___.", answer: "né fratelli né sorelle", explanation: "\"Non\" + verb + \"né ... né\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [doesn't] work [any more].", sentence: "Non lavora ___.", answer: "più", explanation: "\"Non ... più\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I didn't go. – [Neither did I].", sentence: "Non sono andato. – ___.", answer: "Neanch'io", altAnswers: ["Neanche io", "Nemmeno io", "Neppure io"], explanation: "Agreeing with a negative." },
      { type: "word-order", prompt: "Put the words in order to say: Nobody understands me.", words: ["Nessuno", "mi", "capisce."], translation: "Nobody understands me.", explanation: "\"Nessuno\" first." },
      { type: "multiple-choice", question: "How do you say I never drink coffee?", options: ["Non bevo mai il caffè.", "Bevo mai il caffè.", "Non mai bevo il caffè.", "Mai non bevo il caffè."], correctIndex: 0, explanation: "\"Non\" + verb + \"mai\"." },
      { type: "listen-choose", audio: "Non ho né fame né sonno.", question: "How is she?", options: ["neither hungry nor sleepy", "hungry and sleepy", "only hungry", "only sleepy"], correctIndex: 0, explanation: "\"Né ... né\" = neither ... nor." },
      { type: "dictation", audio: "Non ho mai detto niente a nessuno.", explanation: "Three negatives, one \"non\"." },
      { type: "speak", text: "Non ho visto niente e non ho parlato con nessuno.", prompt: "Say it in Italian: I didn't see anything and I didn't speak to anyone.", tip: "One \"non\" for each verb.", explanation: "Double negatives." },
    ],
  },
  {
    slug: "a2-indefinites-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Ogni, Tutti, Qualche",
    summary: "Fresh sentences with ogni, ognuno, tutto / tutti, qualche and alcuni.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Singular or plural",
        body: [
          "Singular: \"ogni\", \"ognuno\", \"qualche\", \"tutto il\". Plural: \"tutti i\", \"tutte le\", \"alcuni\", \"alcune\". The verb follows.",
        ],
        examples: [
          { es: "Ogni camera ha il bagno.", en: "Every room has a bathroom." },
          { es: "Tutte le camere hanno il bagno.", en: "All the rooms have a bathroom." },
          { es: "Ho mangiato tutta la torta!", en: "I ate the whole cake!" },
          { es: "Alcuni negozi chiudono a pranzo.", en: "Some shops close at lunchtime." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"ogni\".", source: "Every room has a bathroom.", answer: "Ogni camera ha il bagno.", altAnswers: ["Ogni stanza ha il bagno."], explanation: "\"Ogni\" + singular." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I ate the whole cake!", answer: "Ho mangiato tutta la torta!", explanation: "\"Tutta la\" = the whole." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"tutte\".", source: "All the rooms have a bathroom.", answer: "Tutte le camere hanno il bagno.", altAnswers: ["Tutte le stanze hanno il bagno."], explanation: "\"Tutte le\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some shops close at lunchtime.", answer: "Alcuni negozi chiudono a pranzo.", altAnswers: ["Qualche negozio chiude a pranzo.", "Alcuni negozi chiudono all'ora di pranzo."], explanation: "\"Alcuni\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone pays for themselves.", answer: "Ognuno paga per sé.", altAnswers: ["Ognuno paga il suo.", "Ognuno paga per conto suo."], explanation: "\"Ognuno\" + singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've told you everything.", answer: "Ti ho detto tutto.", explanation: "\"Tutto\" = everything." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone knows him.", answer: "Tutti lo conoscono.", altAnswers: ["Lo conoscono tutti."], explanation: "\"Tutti\" + plural verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every now and then I go to the theatre.", answer: "Ogni tanto vado a teatro.", altAnswers: ["Qualche volta vado a teatro."], explanation: "\"Ogni tanto\" = every now and then." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I studied [all morning].", sentence: "Ho studiato ___.", answer: "tutta la mattina", altAnswers: ["tutta la mattinata"], explanation: "\"Tutta la\" = the whole." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Every] year we go to the seaside.", sentence: "___ anno andiamo al mare.", answer: "Ogni", explanation: "\"Ogni\" + singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Some] girls are already here.", sentence: "___ ragazze sono già qui.", answer: "Alcune", explanation: "\"Alcune\" + feminine plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll stay [a few] days.", sentence: "Resto ___ giorno.", answer: "qualche", explanation: "\"Qualche\" + singular." },
      { type: "word-order", prompt: "Put the words in order to say: Everyone knows him.", words: ["Tutti", "lo", "conoscono."], translation: "Everyone knows him.", explanation: "\"Tutti\" + pronoun + plural verb." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ogni bambino ha un regalo.", "Ogni bambini hanno un regalo.", "Tutti bambini hanno un regalo.", "Ognuno bambino ha un regalo."], correctIndex: 0, explanation: "\"Ogni\" + singular; \"tutti\" needs an article." },
      { type: "listen-choose", audio: "Tutti i miei amici abitano in centro.", question: "Where do his friends live?", options: ["All of them live in the centre.", "Some of them live in the centre.", "None of them live in the centre.", "One of them lives in the centre."], correctIndex: 0, explanation: "\"Tutti i miei amici\" = all my friends." },
      { type: "dictation", audio: "Ogni sera ognuno cucina qualcosa per tutti.", explanation: "\"Ogni\", \"ognuno\", \"tutti\"." },
      { type: "speak", text: "Ogni domenica tutta la famiglia pranza insieme.", prompt: "Say it in Italian: Every Sunday the whole family has lunch together.", tip: "\"Tutta la famiglia\": singular, so \"pranza\".", explanation: "\"Ogni\" + singular; \"tutta la\" = the whole." },
    ],
  },
];
