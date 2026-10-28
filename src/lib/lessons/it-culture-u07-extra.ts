// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u07-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 7 Extra Practice: Music. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md). Titles only, no
// lyrics.
export const IT_CULTURE_U07_EXTRA: Lesson[] = [
  {
    slug: "culture-music-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Opera",
    summary: "Fresh sentences about opera: composers, theaters, singers and a night out at the opera house.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Talking about opera",
        body: [
          "Opera talk uses \"scrivere\" (\"scritto\") and \"comporre\" (\"composto\") for composers, \"cantare\" for singers and \"andare in scena\" (to be staged) for performances. Voices have Italian names everywhere: \"il soprano\", \"il tenore\", \"il baritono\", \"il basso\". The story is \"la trama\" and a solo song is \"l'aria\".",
        ],
        examples: [
          { es: "Verdi ha composto l'Aida.", en: "Verdi composed Aida." },
          { es: "Stasera va in scena la Tosca.", en: "Tosca is on tonight." },
          { es: "Il tenore ha cantato benissimo.", en: "The tenor sang beautifully." },
          { es: "La trama è un po' complicata.", en: "The plot is a bit complicated." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tenor sang beautifully.", answer: "Il tenore ha cantato benissimo.", altAnswers: ["Il tenore ha cantato molto bene."], explanation: "\"Benissimo\" = very well." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [plot] is a bit complicated.", sentence: "La ___ è un po' complicata.", answer: "trama", explanation: "\"La trama\" = the plot." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Verdi composed Aida.", answer: "Verdi ha composto l'Aida.", altAnswers: ["Verdi ha scritto l'Aida.", "Verdi compose l'Aida.", "Verdi ha composto Aida."], explanation: "\"Comporre\" → \"composto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tosca is on tonight.", answer: "Stasera va in scena la Tosca.", altAnswers: ["Stasera c'è la Tosca.", "La Tosca va in scena stasera."], explanation: "\"Andare in scena\" = to be performed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The soprano is very young.", answer: "Il soprano è giovanissimo.", altAnswers: ["Il soprano è molto giovane.", "La soprano è molto giovane.", "La soprano è giovanissima."], explanation: "\"Il soprano\" is traditional; \"la soprano\" is common too." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never been to the opera.", answer: "Non sono mai stato all'opera.", altAnswers: ["Non sono mai stata all'opera.", "Non sono mai andato all'opera.", "Non sono mai andata all'opera."], explanation: "\"Essere stato\" = to have been." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rossini was born in Pesaro.", answer: "Rossini è nato a Pesaro.", altAnswers: ["Rossini nacque a Pesaro."], explanation: "\"Nascere\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The opera lasts three hours.", answer: "L'opera dura tre ore.", explanation: "\"Durare\" = to last." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This aria is very famous.", answer: "Quest'aria è famosissima.", altAnswers: ["Questa aria è molto famosa.", "Quest'aria è molto famosa.", "Questa aria è famosissima."], explanation: "\"Questa\" often drops its -a before a vowel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We sat [in the stalls].", sentence: "Ci siamo seduti ___.", answer: "in platea", explanation: "\"La platea\" = the stalls." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The audience shouted [encore].", sentence: "Il pubblico ha gridato ___.", answer: "bis", explanation: "\"Bis\" = again, encore." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Puccini [died] before finishing Turandot.", sentence: "Puccini ___ prima di finire la Turandot.", answer: "è morto", altAnswers: ["morì"], explanation: "\"Morire\" with \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: The Arena di Verona is a Roman amphitheater.", words: ["L'Arena", "di", "Verona", "è", "un", "anfiteatro", "romano."], translation: "The Arena di Verona is a Roman amphitheater.", explanation: "\"Anfiteatro\" = amphitheater." },
      { type: "word-order", prompt: "Put the words in order to say: The season at La Scala opens on 7 December.", words: ["La", "stagione", "della", "Scala", "apre", "il", "7", "dicembre."], translation: "The season at La Scala opens on 7 December.", explanation: "7 December is the feast of Milan's patron, Sant'Ambrogio." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il tenore", right: "the tenor" },
          { left: "l'aria", right: "the solo song" },
          { left: "la trama", right: "the plot" },
          { left: "il direttore", right: "the conductor" },
          { left: "il sipario", right: "the curtain" },
        ],
        explanation: "Opera vocabulary.",
      },
      { type: "multiple-choice", question: "Which composer wrote \"Il barbiere di Siviglia\"?", options: ["Rossini", "Puccini", "Vivaldi", "Monteverdi"], correctIndex: 0, explanation: "Rossini, in 1816." },
      { type: "listen-choose", audio: "Il sipario si alza alle otto.", question: "What happens at eight?", options: ["The curtain goes up.", "The theater closes.", "The singers arrive.", "The tickets go on sale."], correctIndex: 0, explanation: "\"Alzarsi\" = to rise." },
      { type: "dictation", audio: "Il tenore ha cantato benissimo.", explanation: "\"Benissimo\": double s." },
      { type: "speak", text: "Non sono mai stata all'opera, ma quest'anno vorrei vedere la Traviata.", prompt: "Say it in Italian (as a woman): I've never been to the opera, but this year I'd like to see La traviata.", tip: "Tra-VIA-ta: stress on -via-.", explanation: "\"Stata\" agrees with a female speaker." },
    ],
  },
  {
    slug: "culture-music-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Modern Music",
    summary: "Fresh sentences about songs, singers, Sanremo, streaming and summer concerts.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Talking about songs",
        body: [
          "To talk about pop music you need \"uscire\" (to come out: \"è uscito un nuovo album\"), \"il disco\" (a record, also an album), \"la canzone\", \"il testo\" (the lyrics) and \"in tour\". \"Ascoltare\" is to listen and \"sentire\" is to hear, though in speech Italians often use \"sentire\" for both.",
        ],
        examples: [
          { es: "È uscito il suo nuovo disco.", en: "Her new album is out." },
          { es: "Il testo è molto bello.", en: "The lyrics are very beautiful." },
          { es: "Quest'estate è in tour.", en: "He's on tour this summer." },
          { es: "Hai sentito la nuova canzone?", en: "Have you heard the new song?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you heard the new song?", answer: "Hai sentito la nuova canzone?", altAnswers: ["Hai ascoltato la nuova canzone?"], explanation: "\"Sentire\" = to hear." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [lyrics] are very beautiful.", sentence: "Il ___ è molto bello.", answer: "testo", explanation: "\"Il testo\" is singular in Italian." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her new album is out.", answer: "È uscito il suo nuovo disco.", altAnswers: ["È uscito il suo nuovo album.", "Il suo nuovo disco è uscito."], explanation: "\"Uscire\" = to come out." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's on tour this summer.", answer: "Quest'estate è in tour.", altAnswers: ["È in tour quest'estate.", "Questa estate è in tour."], explanation: "\"In tour\" is used in Italian too." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I listen to music on the train.", answer: "Ascolto la musica in treno.", altAnswers: ["Ascolto musica in treno.", "Sento la musica in treno."], explanation: "\"In treno\" = on the train." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who won Sanremo this year?", answer: "Chi ha vinto Sanremo quest'anno?", altAnswers: ["Quest'anno chi ha vinto Sanremo?"], explanation: "\"Vincere\" → \"vinto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't like this song.", answer: "Questa canzone non mi piace.", altAnswers: ["Non mi piace questa canzone."], explanation: "\"Piacere\": the song is the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The singer-songwriter writes his own songs.", answer: "Il cantautore scrive le sue canzoni.", altAnswers: ["Il cantautore scrive le proprie canzoni."], explanation: "\"Cantante\" + \"autore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The concert starts at nine.", answer: "Il concerto comincia alle nove.", altAnswers: ["Il concerto inizia alle nove.", "Il concerto comincia alle ventuno."], explanation: "\"Alle\" + hour." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everyone [knows] the words.", sentence: "Tutti ___ le parole.", answer: "sanno", altAnswers: ["conoscono"], explanation: "\"Sapere le parole\" = to know the words by heart." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This song [got stuck in my head].", sentence: "Questa canzone ___.", answer: "mi è rimasta in testa", altAnswers: ["mi resta in testa", "mi rimane in testa"], explanation: "\"Rimanere in testa\" = to stick in your head." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The tickets are [sold out].", sentence: "I biglietti sono ___.", answer: "esauriti", explanation: "Plural to match \"biglietti\"." },
      { type: "word-order", prompt: "Put the words in order to say: I sing in the shower every morning.", words: ["Canto", "sotto", "la", "doccia", "ogni", "mattina."], translation: "I sing in the shower every morning.", explanation: "\"Sotto la doccia\" = in the shower." },
      { type: "word-order", prompt: "Put the words in order to say: We danced until two in the morning.", words: ["Abbiamo", "ballato", "fino", "alle", "due", "di", "notte."], translation: "We danced until two in the morning.", explanation: "\"Fino a\" = until." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il disco", right: "the album" },
          { left: "il testo", right: "the lyrics" },
          { left: "il ritornello", right: "the chorus" },
          { left: "il tormentone", right: "the summer hit" },
          { left: "la classifica", right: "the charts" },
        ],
        explanation: "Pop music vocabulary.",
      },
      { type: "multiple-choice", question: "Where is the free Concertone held every 1 May?", options: ["in Piazza San Giovanni in Rome", "in the Arena di Verona", "at La Scala", "in Sanremo"], correctIndex: 0, explanation: "It is organized by the unions for Labor Day." },
      { type: "listen-choose", audio: "Abbiamo ballato fino alle due di notte.", question: "What did they do?", options: ["They danced until 2 a.m.", "They slept until 2 p.m.", "They sang for two hours.", "They left at two."], correctIndex: 0, explanation: "\"Ballare\" = to dance." },
      { type: "dictation", audio: "Hai sentito la nuova canzone?", explanation: "\"Canzone\": z sounds like ts." },
      { type: "speak", text: "Questa canzone mi è rimasta in testa e non riesco a smettere di cantarla.", prompt: "Say it in Italian: This song got stuck in my head and I can't stop singing it.", tip: "\"Riesco\": ri-ES-co.", explanation: "\"Riuscire a\" = to manage to." },
    ],
  },
];
