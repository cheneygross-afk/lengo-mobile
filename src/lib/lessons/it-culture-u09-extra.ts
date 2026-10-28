// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u09-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 9 Extra Practice: Sport. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md).
export const IT_CULTURE_U09_EXTRA: Lesson[] = [
  {
    slug: "culture-sport-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Calcio",
    summary: "Fresh sentences about soccer: supporting a team, watching a game and talking about it afterwards.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Football talk",
        body: [
          "Two key verbs: \"tifare per\" (to support) and \"giocare contro\" (to play against). Italians say \"sono della Juve\" or \"sono interista\" for their team. \"In casa\" is a home game and \"in trasferta\" is an away game. \"La classifica\" is the standings.",
        ],
        examples: [
          { es: "Sono interista da quando ero bambino.", en: "I've supported Inter since I was a child." },
          { es: "Domenica giochiamo in trasferta.", en: "On Sunday we're playing away." },
          { es: "Siamo terzi in classifica.", en: "We're third in the standings." },
          { es: "Contro chi gioca il Milan?", en: "Who are Milan playing against?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're third in the standings.", answer: "Siamo terzi in classifica.", altAnswers: ["Siamo al terzo posto in classifica."], explanation: "\"In classifica\" = in the standings." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sunday we're playing [away].", sentence: "Domenica giochiamo ___.", answer: "in trasferta", explanation: "\"In casa\" is the opposite." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who are Milan playing against?", answer: "Contro chi gioca il Milan?", altAnswers: ["Il Milan contro chi gioca?"], explanation: "\"Il Milan\" (club) is masculine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we watch the game at the bar?", answer: "Guardiamo la partita al bar?", altAnswers: ["Vediamo la partita al bar?"], explanation: "Present tense for suggestions." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The game starts at a quarter to nine.", answer: "La partita comincia alle nove meno un quarto.", altAnswers: ["La partita inizia alle nove meno un quarto.", "La partita comincia alle 20:45.", "La partita inizia alle otto e tre quarti."], explanation: "Many evening games start at 20:45." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We play at home.", answer: "Giochiamo in casa.", explanation: "\"In casa\" = at home (ground)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's the best player in the team.", answer: "È il giocatore più forte della squadra.", altAnswers: ["È il miglior giocatore della squadra.", "È il giocatore migliore della squadra."], explanation: "Superlative + \"della\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The stadium is full.", answer: "Lo stadio è pieno.", altAnswers: ["Lo stadio è tutto esaurito."], explanation: "\"Lo stadio\": \"lo\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We lost three to nothing.", answer: "Abbiamo perso tre a zero.", altAnswers: ["Abbiamo perso 3 a 0."], explanation: "Scores use \"a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've supported Inter [since I was a child].", sentence: "Sono interista ___.", answer: "da quando ero bambino", altAnswers: ["da quando ero bambina", "da bambino", "da bambina"], explanation: "Present + \"da quando\" for something still true." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [striker] scored twice.", sentence: "L'___ ha segnato due volte.", answer: "attaccante", explanation: "\"Attaccare\" = to attack." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The game [was postponed] because of the rain.", sentence: "La partita ___ per la pioggia.", answer: "è stata rinviata", explanation: "\"Rinviare\" = to postpone." },
      { type: "word-order", prompt: "Put the words in order to say: Our team hasn't won for a month.", words: ["La", "nostra", "squadra", "non", "vince", "da", "un", "mese."], translation: "Our team hasn't won for a month.", explanation: "Present + \"da\"." },
      { type: "word-order", prompt: "Put the words in order to say: The goalkeeper made a great save.", words: ["Il", "portiere", "ha", "fatto", "una", "grande", "parata."], translation: "The goalkeeper made a great save.", explanation: "\"La parata\" = save." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "in casa", right: "at home" },
          { left: "in trasferta", right: "away" },
          { left: "la classifica", right: "the standings" },
          { left: "la parata", right: "the save" },
          { left: "l'attaccante", right: "the striker" },
        ],
        explanation: "Football vocabulary.",
      },
      { type: "multiple-choice", question: "What does \"sono della Juve\" mean?", options: ["I support Juventus.", "I play for Juventus.", "I'm from Turin.", "I work at the stadium."], correctIndex: 0, explanation: "\"Essere di\" + team." },
      { type: "listen-choose", audio: "La partita è stata rinviata per la pioggia.", question: "What happened to the game?", options: ["It was postponed because of rain.", "It was played in the rain.", "It ended in a draw.", "It was moved to another stadium."], correctIndex: 0, explanation: "\"Rinviare\" = to postpone." },
      { type: "dictation", audio: "Domenica giochiamo in trasferta.", explanation: "\"Trasferta\": tr + a + s." },
      { type: "speak", text: "Sono della Juve da quando ero piccolo, ma mia moglie è interista.", prompt: "Say it in Italian (as a man): I've supported Juve since I was little, but my wife supports Inter.", tip: "IU-ve: the J sounds like an English y.", explanation: "\"Interista\" is the same for men and women." },
    ],
  },
  {
    slug: "culture-sport-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Other Sports",
    summary: "Fresh sentences about cycling, skiing, motor racing, swimming, tennis and going to the gym.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Doing sport",
        body: [
          "Italians \"fanno sport\": \"fare nuoto\", \"fare palestra\" (to work out at the gym), \"fare una corsa\" (to go for a run). With games, use \"giocare a\": \"giocare a tennis\", \"giocare a pallavolo\" (volleyball), \"giocare a basket\". Racing sports use \"correre\".",
        ],
        examples: [
          { es: "Faccio palestra tre volte a settimana.", en: "I work out at the gym three times a week." },
          { es: "Gioco a tennis il sabato.", en: "I play tennis on Saturdays." },
          { es: "Mia figlia gioca a pallavolo.", en: "My daughter plays volleyball." },
          { es: "Stamattina ho fatto una corsa al parco.", en: "This morning I went for a run in the park." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I play tennis on Saturdays.", answer: "Gioco a tennis il sabato.", altAnswers: ["Il sabato gioco a tennis.", "Gioco a tennis di sabato."], explanation: "\"Giocare a\" + sport." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My daughter plays [volleyball].", sentence: "Mia figlia gioca a ___.", answer: "pallavolo", explanation: "\"Palla\" + \"volo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work out at the gym three times a week.", answer: "Faccio palestra tre volte a settimana.", altAnswers: ["Vado in palestra tre volte a settimana.", "Faccio palestra tre volte alla settimana."], explanation: "\"Fare palestra\" = to work out." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you know how to ski?", answer: "Sai sciare?", altAnswers: ["Sai sciare bene?"], explanation: "\"Sapere\" + infinitive = to know how to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The race starts tomorrow.", answer: "La corsa parte domani.", altAnswers: ["La gara comincia domani.", "La gara parte domani.", "La corsa comincia domani."], explanation: "\"La gara\" or \"la corsa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I go swimming in the summer.", answer: "D'estate vado a nuotare.", altAnswers: ["D'estate faccio nuoto.", "In estate vado a nuotare."], explanation: "\"D'estate\" = in summer." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cyclists are arriving.", answer: "Arrivano i ciclisti.", altAnswers: ["I ciclisti stanno arrivando.", "Stanno arrivando i ciclisti."], explanation: "Verb before subject for news." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who won the race?", answer: "Chi ha vinto la gara?", altAnswers: ["Chi ha vinto la corsa?"], explanation: "\"Vincere\" → \"vinto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I broke my leg skiing.", answer: "Mi sono rotto la gamba sciando.", altAnswers: ["Mi sono rotta la gamba sciando.", "Mi sono rotto una gamba sciando."], explanation: "Reflexive + article for body parts." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This morning I [went for a run] in the park.", sentence: "Stamattina ___ al parco.", answer: "ho fatto una corsa", altAnswers: ["sono andato a correre", "sono andata a correre"], explanation: "\"Fare una corsa\" = to go for a run." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The Italian [won the gold medal].", sentence: "L'italiana ___.", answer: "ha vinto la medaglia d'oro", altAnswers: ["ha vinto l'oro"], explanation: "\"D'oro\", \"d'argento\", \"di bronzo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The driver [started] in first position.", sentence: "Il pilota ___ in prima posizione.", answer: "è partito", altAnswers: ["partiva"], explanation: "\"Partire\" takes \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: In winter we go skiing in the mountains.", words: ["D'inverno", "andiamo", "a", "sciare", "in", "montagna."], translation: "In winter we go skiing in the mountains.", explanation: "\"In montagna\" = in the mountains." },
      { type: "word-order", prompt: "Put the words in order to say: The cyclists climb the mountain.", words: ["I", "ciclisti", "salgono", "sulla", "montagna."], translation: "The cyclists climb the mountain.", explanation: "\"Salire\" → \"salgono\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la pallavolo", right: "volleyball" },
          { left: "il nuoto", right: "swimming" },
          { left: "la palestra", right: "the gym" },
          { left: "il pilota", right: "the racing driver" },
          { left: "la medaglia", right: "the medal" },
        ],
        explanation: "Sport vocabulary.",
      },
      { type: "multiple-choice", question: "Which verb goes with \"tennis\"?", options: ["giocare a", "fare la", "andare in", "correre di"], correctIndex: 0, explanation: "\"Giocare a tennis\"." },
      { type: "listen-choose", audio: "Mi sono rotto la gamba sciando.", question: "What happened?", options: ["He broke his leg skiing.", "He won a ski race.", "He bought new skis.", "He hurt his arm cycling."], correctIndex: 0, explanation: "\"Rompersi\" = to break." },
      { type: "dictation", audio: "Faccio palestra tre volte a settimana.", explanation: "\"Palestra\" = gym." },
      { type: "speak", text: "D'estate faccio nuoto e d'inverno vado a sciare in montagna.", prompt: "Say it in Italian: In summer I swim and in winter I go skiing in the mountains.", tip: "Sci-A-re: \"sci\" sounds like \"shee\".", explanation: "\"D'estate\" and \"d'inverno\" for seasons." },
    ],
  },
];
