// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u10-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 10 Extra Practice: The Subjunctive, Part 4: Impersonal
// Phrases. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B1_U10_EXTRA: Lesson[] = [
  {
    slug: "b1-impersonal-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: È Importante Che",
    summary: "Fresh sentences with è importante / necessario / meglio / possibile / un peccato che + subjunctive.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Advice for someone in particular",
        body: [
          "Evaluation + a specific person: \"che\" + subjunctive. \"È importante che tu beva\", \"È meglio che restiate\", \"È possibile che chiudano\", \"Bisogna che qualcuno lo faccia\".",
        ],
        examples: [
          { es: "È importante che tu beva tanta acqua.", en: "It's important that you drink lots of water." },
          { es: "È meglio che restiate al coperto.", en: "You'd better stay indoors. (plural)" },
          { es: "È possibile che chiudano la strada.", en: "They may close the road." },
          { es: "È un peccato che non ci vediamo più.", en: "It's a pity we don't see each other any more." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that you drink lots of water. (to a friend)", answer: "È importante che tu beva tanta acqua.", altAnswers: ["È importante che tu beva molta acqua."], explanation: "\"Beva\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They may close the road.", answer: "È possibile che chiudano la strada.", altAnswers: ["Può darsi che chiudano la strada."], explanation: "\"Chiudano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'd better stay indoors. (plural)", answer: "È meglio che restiate al coperto.", altAnswers: ["È meglio che restiate dentro.", "È meglio che rimaniate al coperto.", "È meglio che stiate in casa."], explanation: "\"Restiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a pity we don't see each other any more.", answer: "È un peccato che non ci vediamo più.", altAnswers: ["Peccato che non ci vediamo più."], explanation: "\"Vediamo\": noi subjunctive = present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's necessary that the parents sign the form.", answer: "È necessario che i genitori firmino il modulo.", altAnswers: ["Bisogna che i genitori firmino il modulo."], explanation: "\"Firmino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange that the shop is closed.", answer: "È strano che il negozio sia chiuso.", explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's likely that he'll change his mind.", answer: "È probabile che cambi idea.", altAnswers: ["È probabile che lui cambi idea."], explanation: "\"Cambi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to rest. (to a friend)", answer: "Bisogna che tu ti riposi.", altAnswers: ["È necessario che tu ti riposi.", "Devi riposarti."], explanation: "\"Ti riposi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently the new teacher is very strict.", answer: "Sembra che la nuova insegnante sia molto severa.", altAnswers: ["Pare che la nuova insegnante sia molto severa.", "Sembra che il nuovo insegnante sia molto severo.", "Sembra che la nuova professoressa sia molto severa."], explanation: "\"Sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's better that you [go] by bus. (plural)", sentence: "È meglio che ___ in autobus.", answer: "andiate", explanation: "\"Andiate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's important that everyone [knows] the rules.", sentence: "È importante che tutti ___ le regole.", answer: "conoscano", altAnswers: ["sappiano"], explanation: "\"Conoscano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's possible that the flight [leaves] late.", sentence: "È possibile che il volo ___ in ritardo.", answer: "parta", explanation: "\"Parta\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's a pity you're leaving.", words: ["È", "un", "peccato", "che", "tu", "parta."], translation: "It's a pity you're leaving.", explanation: "\"Parta\"." },
      { type: "multiple-choice", question: "\"Bisogna che voi ___ più attenzione.\" (fare)", options: ["facciate", "fate", "fare", "facciano"], correctIndex: 0, explanation: "Voi: \"facciate\"." },
      { type: "listen-choose", audio: "È meglio che restiate al coperto.", question: "What's the advice?", options: ["Stay indoors.", "Go outside.", "Cover yourselves.", "Leave early."], correctIndex: 0, explanation: "\"Al coperto\" = indoors." },
      { type: "dictation", audio: "È probabile che piova, quindi è meglio che prendiate l'ombrello.", explanation: "\"Piova\", \"prendiate\"." },
      { type: "speak", text: "È importante che tu beva tanta acqua ed è meglio che tu non esca nelle ore più calde.", prompt: "Say it in Italian: It's important that you drink lots of water, and you'd better not go out in the hottest hours.", tip: "ES-ca.", explanation: "\"Beva\", \"esca\"." },
    ],
  },
  {
    slug: "b1-impersonal-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Che or Infinitive?",
    summary: "Fresh sentences choosing between a general infinitive and che + subjunctive for a specific person.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Everyone or someone?",
        body: [
          "For everyone: infinitive, no \"che\", no \"di\" (\"È utile parlare\"). For someone in particular: \"che\" + subjunctive (\"È utile che tu parli\").",
        ],
        examples: [
          { es: "È utile parlare con la gente del posto.", en: "It's useful to talk to the locals." },
          { es: "È utile che tu parli con la gente del posto.", en: "It's useful for you to talk to the locals." },
          { es: "Bisogna cambiare i soldi.", en: "You need to change money." },
          { es: "Bisogna che cambiamo i soldi.", en: "We need to change money." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's useful to talk to the locals.", answer: "È utile parlare con la gente del posto.", explanation: "General." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's useful for you to talk to the locals. (to a friend)", answer: "È utile che tu parli con la gente del posto.", explanation: "Specific person." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We need to change money.", answer: "Bisogna che cambiamo i soldi.", altAnswers: ["Dobbiamo cambiare i soldi."], explanation: "\"Cambiamo\": noi subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's forbidden to take photos.", answer: "È vietato fare foto.", altAnswers: ["È vietato fotografare.", "È vietato fare fotografie."], explanation: "Rule." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better to wait.", answer: "È meglio aspettare.", altAnswers: ["Meglio aspettare."], explanation: "General." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better that they wait.", answer: "È meglio che aspettino.", altAnswers: ["Meglio che aspettino."], explanation: "Specific." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible to visit the tower.", answer: "È possibile visitare la torre.", altAnswers: ["Si può visitare la torre."], explanation: "General." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's necessary for us to speak to the manager.", answer: "È necessario che parliamo con il direttore.", altAnswers: ["Bisogna che parliamo con il direttore.", "È necessario che parliamo col direttore."], explanation: "Specific." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not easy to learn Italian.", answer: "Non è facile imparare l'italiano.", explanation: "General." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's important [to wear] comfortable shoes.", sentence: "È importante ___ scarpe comode.", answer: "mettere", altAnswers: ["indossare", "portare"], explanation: "General." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's important that you [wear] comfortable shoes. (plural)", sentence: "È importante che ___ scarpe comode.", answer: "mettiate", altAnswers: ["indossiate", "portiate"], explanation: "Specific." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's worth [trying] the local wine.", sentence: "Vale la pena ___ il vino locale.", answer: "provare", altAnswers: ["assaggiare"], explanation: "Infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: It's better not to drive in the centre.", words: ["È", "meglio", "non", "guidare", "in", "centro."], translation: "It's better not to drive in the centre.", explanation: "Negative infinitive." },
      { type: "multiple-choice", question: "Which is general advice?", options: ["Bisogna prenotare.", "Bisogna che prenotiate.", "Bisogna che tu prenoti.", "Bisogna che prenotino."], correctIndex: 0, explanation: "No subject: infinitive." },
      { type: "listen-choose", audio: "È meglio che aspettino.", question: "Who should wait?", options: ["They should.", "We should.", "Everyone should.", "The speaker should."], correctIndex: 0, explanation: "\"Aspettino\": loro." },
      { type: "dictation", audio: "È vietato fare foto, ma è possibile comprare le cartoline.", explanation: "Two general infinitives." },
      { type: "speak", text: "È meglio non guidare in centro, ma è importante che tu veda il castello.", prompt: "Say it in Italian: It's better not to drive in the centre, but it's important that you see the castle.", tip: "ca-STEL-lo.", explanation: "General, then specific." },
    ],
  },
  {
    slug: "b1-impersonal-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Mixed Triggers",
    summary: "Fresh mixed sentences across Units 7-10: opinions, wishes, feelings, impersonal phrases and facts.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Subjunctive or indicative?",
        body: [
          "Subjunctive after opinions, wishes, feelings, fears, doubts and evaluations. Indicative after facts and certainty: \"so che\", \"è vero che\", \"è chiaro che\", \"sono sicuro che\", \"secondo me\", \"forse\".",
        ],
        examples: [
          { es: "Sono sicuro che è una brava persona.", en: "I'm sure he's a good person." },
          { es: "Spero che sia una brava persona.", en: "I hope he's a good person." },
          { es: "Forse ha perso il treno.", en: "Maybe he missed the train." },
          { es: "Può darsi che abbia sonno.", en: "Maybe she's sleepy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sure he's a good person.", answer: "Sono sicuro che è una brava persona.", altAnswers: ["Sono sicura che è una brava persona."], explanation: "Certainty." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope he's a good person.", answer: "Spero che sia una brava persona.", explanation: "Hope." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe she's sleepy.", answer: "Può darsi che abbia sonno.", altAnswers: ["Forse ha sonno."], explanation: "\"Abbia\" or \"forse\" + \"ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's clear they're tired.", answer: "È chiaro che sono stanchi.", altAnswers: ["È evidente che sono stanchi.", "È ovvio che sono stanchi."], explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry they're tired.", answer: "Mi dispiace che siano stanchi.", explanation: "Feeling." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the meeting is useless.", answer: "Penso che la riunione sia inutile.", altAnswers: ["Credo che la riunione sia inutile."], explanation: "Opinion." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion the meeting is useless.", answer: "Secondo me la riunione è inutile.", altAnswers: ["Per me la riunione è inutile."], explanation: "\"Secondo me\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to tell me everything. (plural)", answer: "Voglio che mi diciate tutto.", explanation: "Wish." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible that there's a mistake.", answer: "È possibile che ci sia un errore.", altAnswers: ["Può darsi che ci sia un errore.", "È possibile che ci sia uno sbaglio."], explanation: "Evaluation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know there's a mistake.", answer: "So che c'è un errore.", altAnswers: ["So che c'è uno sbaglio."], explanation: "Fact." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm afraid the kids [are] bored.", sentence: "Ho paura che i bambini si ___.", answer: "annoino", explanation: "\"Annoiarsi\" → \"si annoino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's true that Elena [speaks] four languages.", sentence: "È vero che Elena ___ quattro lingue.", answer: "parla", explanation: "Fact." },
      { type: "word-order", prompt: "Put the words in order to say: I doubt they know the answer.", words: ["Dubito", "che", "sappiano", "la", "risposta."], translation: "I doubt they know the answer.", explanation: "Doubt." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["Forse viene.", "Forse venga.", "So che viene.", "Spero che viene.", "Spero che venga.", "È vero che viene."], correctIndexes: [0, 2, 4, 5], explanation: "\"Forse\", \"so che\", \"è vero che\" + indicative; \"spero che\" + subjunctive." },
      { type: "listen-choose", audio: "Mi dispiace che siano stanchi.", question: "How does the speaker feel?", options: ["Sorry they're tired.", "Glad they're tired.", "Sure they're tired.", "Tired themselves."], correctIndex: 0, explanation: "\"Mi dispiace che\"." },
      { type: "dictation", audio: "So che c'è un errore, ma è possibile che non sia grave.", explanation: "Fact, then evaluation." },
      { type: "speak", text: "Secondo me la riunione è inutile, ma è meglio che ci andiamo lo stesso.", prompt: "Say it in Italian: In my opinion the meeting is useless, but we'd better go anyway.", tip: "lo STES-so.", explanation: "Indicative, then subjunctive." },
    ],
  },
];
