// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u17-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 17 Extra Practice: Oral Mastery.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U17_EXTRA: Lesson[] = [
  {
    slug: "c2-oral-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Presentations",
    summary: "Fresh presentation topics: remote work in small towns, food as heritage and regional languages at school, with openings, transitions and closings.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three fresh topics",
        body: [
          "Practice the presentation formulas on new topics: \"Il lavoro da remoto può salvare i piccoli comuni?\", \"Il cibo come patrimonio culturale\" and \"Le lingue regionali a scuola\". For each, say the opening, the roadmap and the closing line aloud before you type.",
          "Keep the structure fixed and change only the content: greeting and hook, a one-sentence map, transitions, one memorable idea, thanks.",
        ],
        examples: [
          { es: "Stasera vorrei parlarvi dei piccoli comuni che si stanno spopolando.", en: "This evening I'd like to talk to you about small towns that are losing their population." },
          { es: "Il cibo non è solo nutrimento: è memoria.", en: "Food isn't just nourishment: it's memory." },
          { es: "Partirò da un'esperienza personale.", en: "I'll start from a personal experience." },
          { es: "Questo ci porta alla questione delle lingue regionali.", en: "This brings us to the question of regional languages." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Food isn't just nourishment: it's memory.", answer: "Il cibo non è solo nutrimento: è memoria.", altAnswers: ["Il cibo non è soltanto nutrimento: è memoria.", "Il cibo non è solo nutrimento, è memoria."], explanation: "A strong, short contrast." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll start from a personal experience.", answer: "Partirò da un'esperienza personale.", altAnswers: ["Comincerò da un'esperienza personale.", "Parto da un'esperienza personale."], explanation: "\"Un'esperienza\": feminine, apostrophe." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This evening I'd like to talk to you about small towns that are losing their population.", answer: "Stasera vorrei parlarvi dei piccoli comuni che si stanno spopolando.", altAnswers: ["Stasera vorrei parlarvi dei piccoli comuni che si spopolano.", "Questa sera vorrei parlarvi dei piccoli comuni che si stanno spopolando."], explanation: "\"Spopolarsi\" = to lose population." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can remote work save small towns?", answer: "Il lavoro da remoto può salvare i piccoli comuni?", altAnswers: ["Lo smart working può salvare i piccoli comuni?", "Il lavoro a distanza può salvare i piccoli comuni?"], explanation: "A question as a title and hook." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This brings us to the question of regional languages.", answer: "Questo ci porta alla questione delle lingue regionali.", altAnswers: ["Questo ci porta al tema delle lingue regionali.", "Ciò ci porta alla questione delle lingue regionali."], explanation: "Transition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me give you an example from my village.", answer: "Vi faccio un esempio del mio paese.", altAnswers: ["Vi faccio un esempio dal mio paese.", "Vi do un esempio del mio paese.", "Lasciate che vi faccia un esempio del mio paese."], explanation: "\"Fare un esempio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A recipe is a story that is told with the hands.", answer: "Una ricetta è una storia che si racconta con le mani.", altAnswers: ["Una ricetta è una storia raccontata con le mani.", "Una ricetta è un racconto che si fa con le mani."], explanation: "A memorable image." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "To conclude, I'll go back to the question I started with.", answer: "Per concludere, torno alla domanda da cui sono partito.", altAnswers: ["Per concludere, torno alla domanda da cui sono partita.", "Per concludere, torno alla domanda iniziale.", "Concludendo, torno alla domanda da cui sono partito."], explanation: "\"Da cui\" with \"partire da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Teaching dialects doesn't mean giving up standard Italian.", answer: "Insegnare i dialetti non significa rinunciare all'italiano standard.", altAnswers: ["Insegnare i dialetti non vuol dire rinunciare all'italiano standard.", "Insegnare il dialetto non significa rinunciare all'italiano standard."], explanation: "\"Rinunciare a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let me open a brief digression]: not all towns are the same.", sentence: "___: non tutti i comuni sono uguali.", answer: "Apro una breve parentesi", explanation: "Digression formula." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[As you can see] in this graph, young people are leaving.", sentence: "___ in questo grafico, i giovani se ne vanno.", answer: "Come vedete", altAnswers: ["Come potete vedere"], explanation: "Referring to a visual." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm happy to take [any] questions.", sentence: "Sono a disposizione per ___ domande.", answer: "eventuali", explanation: "False friend of ‘eventual’." },
      { type: "word-order", prompt: "Put the words in order to say: My talk is divided into three parts.", words: ["Il", "mio", "intervento", "si", "articola", "in", "tre", "parti."], translation: "My talk is divided into three parts.", explanation: "Roadmap." },
      { type: "word-order", prompt: "Put the words in order to say: Food isn't just nourishment: it's memory.", words: ["Il", "cibo", "non", "è", "solo", "nutrimento:", "è", "memoria."], translation: "Food isn't just nourishment: it's memory.", explanation: "Contrast." },
      { type: "multiple-choice", question: "Which closing line is most effective?", options: ["Una ricetta è una storia che si racconta con le mani.", "Ecco, questo è tutto, credo.", "Basta, ho finito.", "Non so cos'altro dire."], correctIndex: 0, explanation: "End on an image." },
      { type: "listen-choose", audio: "Partirò da un'esperienza personale, poi vedremo i dati e chiuderò con tre proposte.", question: "How many proposals will the speaker make?", options: ["Three", "Two", "One", "None"], correctIndex: 0, explanation: "\"Tre proposte\"." },
      { type: "speak", text: "Stasera vorrei parlarvi dei piccoli comuni che si stanno spopolando. Partirò da un'esperienza personale.", prompt: "Open the talk aloud: This evening I'd like to talk to you about small towns that are losing their population. I'll start from a personal experience.", tip: "spo-po-LAN-do: stress on LAN.", explanation: "Opening + roadmap." },
    ],
  },
  {
    slug: "c2-oral-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Debate",
    summary: "Fresh debate topics: cars in historic centers, votes at sixteen and homework, with concessions, rebuttals and turn-taking.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three fresh motions",
        body: [
          "Debate three new motions: \"Le auto vanno bandite dai centri storici\", \"Il voto a sedici anni\", \"Abolire i compiti a casa\". For each, prepare one concession and one rebuttal, then say them aloud with the formulas of the unit.",
          "Remember the pattern: concede briefly, rebut with evidence, protect your turn, end with a one-sentence position.",
        ],
        examples: [
          { es: "È vero che i commercianti temono di perdere clienti, ma i dati dicono il contrario.", en: "It's true shopkeepers fear losing customers, but the data says the opposite." },
          { es: "Non nego che a sedici anni si sia giovani; tuttavia si lavora e si pagano le tasse.", en: "I don't deny that sixteen is young; however, people work and pay taxes at that age." },
          { es: "Prendiamo il caso delle scuole che hanno già abolito i compiti.", en: "Let's take the case of schools that have already abolished homework." },
          { es: "Riassumendo, la nostra posizione è semplice.", en: "To sum up, our position is simple." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true shopkeepers fear losing customers, but the data says the opposite.", answer: "È vero che i commercianti temono di perdere clienti, ma i dati dicono il contrario.", altAnswers: ["È vero che i negozianti temono di perdere clienti, ma i dati dicono il contrario.", "È vero che i commercianti hanno paura di perdere clienti, ma i dati dicono il contrario."], explanation: "Concession + evidence." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's take the case of schools that have already abolished homework.", answer: "Prendiamo il caso delle scuole che hanno già abolito i compiti.", altAnswers: ["Prendiamo il caso delle scuole che hanno già eliminato i compiti.", "Prendiamo l'esempio delle scuole che hanno già abolito i compiti."], explanation: "Introducing evidence." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cars should be banned from historic centers.", answer: "Le auto vanno bandite dai centri storici.", altAnswers: ["Le auto dovrebbero essere bandite dai centri storici.", "Bisogna bandire le auto dai centri storici.", "Le macchine vanno bandite dai centri storici."], explanation: "\"Andare\" + past participle = must be." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I grant you that, but who pays for public transportation?", answer: "Su questo le do ragione, ma chi paga i trasporti pubblici?", altAnswers: ["Su questo le do ragione, però chi paga i trasporti pubblici?", "Le do ragione su questo, ma chi paga i mezzi pubblici?"], explanation: "Concession + rhetorical question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At sixteen people work and pay taxes.", answer: "A sedici anni si lavora e si pagano le tasse.", altAnswers: ["A sedici anni si lavora e si pagano tasse.", "A sedici anni la gente lavora e paga le tasse."], explanation: "Impersonal \"si\" with a plural object: \"si pagano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your reasoning doesn't hold up: you're confusing age with maturity.", answer: "Il suo ragionamento non regge: lei confonde l'età con la maturità.", altAnswers: ["Il suo ragionamento non regge: confonde l'età con la maturità.", "Il tuo ragionamento non regge: confondi l'età con la maturità."], explanation: "Logical rebuttal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Homework isn't the problem; too much homework is.", answer: "Il problema non sono i compiti, ma i troppi compiti.", altAnswers: ["Il problema non sono i compiti; sono i troppi compiti.", "Non sono i compiti il problema, ma l'eccesso di compiti."], explanation: "Reframing the motion." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry to interrupt, but that's not what the study says.", answer: "Mi scusi se la interrompo, ma lo studio non dice questo.", altAnswers: ["Scusi se la interrompo, ma lo studio non dice questo.", "Mi scusi se la interrompo, ma non è quello che dice lo studio."], explanation: "Polite interruption." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me finish, please: I'm getting there.", answer: "Mi lasci finire, per favore: ci arrivo.", altAnswers: ["Mi lasci finire, per favore, ci arrivo.", "Mi lasci finire, per cortesia: ci arrivo."], explanation: "Holding the floor." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I don't deny] that sixteen is young.", sentence: "___ che a sedici anni si sia giovani.", answer: "Non nego", explanation: "\"Non negare che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[This is exactly where] the argument falls down.", sentence: "___ casca l'asino.", answer: "È proprio qui che", explanation: "Cleft + idiom." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let's get back to] the subject.", sentence: "___ tema.", answer: "Torniamo al", altAnswers: ["Restiamo sul"], explanation: "Bringing the debate back." },
      { type: "word-order", prompt: "Put the words in order to say: To sum up, our position is simple.", words: ["Riassumendo,", "la", "nostra", "posizione", "è", "semplice."], translation: "To sum up, our position is simple.", explanation: "Closing a debate." },
      { type: "word-order", prompt: "Put the words in order to say: The data says the opposite.", words: ["I", "dati", "dicono", "il", "contrario."], translation: "The data says the opposite.", explanation: "Plural \"dati\" → plural verb." },
      { type: "multiple-choice", question: "Which is the most effective rebuttal in a formal debate?", options: ["Prendiamo il caso delle città che hanno chiuso il centro alle auto: i negozi sono rimasti aperti.", "Lei ha torto e basta.", "Non è vero, non è vero!", "Tutti sanno che sbaglia."], correctIndex: 0, explanation: "A concrete case persuades." },
      { type: "listen-choose", audio: "Non nego che a sedici anni si sia giovani; tuttavia si lavora, si pagano le tasse e si guida il motorino.", question: "What is the speaker's position on votes at sixteen?", options: ["In favor", "Against", "Undecided", "Only for students"], correctIndex: 0, explanation: "Concession, then arguments in favor." },
      { type: "speak", text: "È vero che i commercianti temono di perdere clienti, ma i dati dicono il contrario.", prompt: "Concede and rebut aloud: It's true shopkeepers fear losing customers, but the data says the opposite.", tip: "Stress \"ma\" and \"contrario\".", explanation: "Concession + evidence." },
    ],
  },
];
