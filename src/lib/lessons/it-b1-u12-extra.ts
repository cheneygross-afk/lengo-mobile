// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u12-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 12 Extra Practice: The Past Subjunctive. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U12_EXTRA: Lesson[] = [
  {
    slug: "b1-past-subjunctive-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Forms",
    summary: "Fresh sentences forming the past subjunctive with avere and essere.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Abbia or sia?",
        body: [
          "Same auxiliary as the passato prossimo, now in the subjunctive: \"abbia scritto\", \"sia uscita\", \"si siano trasferiti\". With \"essere\", agree with the subject; with \"avere\", agree only with \"lo / la / li / le\" before the verb.",
        ],
        examples: [
          { es: "Penso che abbia scritto un libro.", en: "I think she's written a book." },
          { es: "Credo che sia uscita con Paolo.", en: "I think she went out with Paolo." },
          { es: "Sembra che si siano trasferiti a Lecce.", en: "Apparently they've moved to Lecce." },
          { es: "La torta? Spero che l'abbiano mangiata.", en: "The cake? I hope they ate it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she went out with Paolo.", answer: "Credo che sia uscita con Paolo.", altAnswers: ["Penso che sia uscita con Paolo."], explanation: "\"Uscire\": essere." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently they've moved to Lecce.", answer: "Sembra che si siano trasferiti a Lecce.", altAnswers: ["Pare che si siano trasferiti a Lecce.", "Sembra che si siano trasferite a Lecce."], explanation: "Reflexive: essere." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she's written a book.", answer: "Penso che abbia scritto un libro.", altAnswers: ["Credo che abbia scritto un libro."], explanation: "\"Scritto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cake? I hope they ate it.", answer: "La torta? Spero che l'abbiano mangiata.", explanation: "Agreement with \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt they've booked.", answer: "Dubito che abbiano prenotato.", explanation: "\"Abbiano prenotato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible she's fallen asleep.", answer: "È possibile che si sia addormentata.", altAnswers: ["Può darsi che si sia addormentata."], explanation: "\"Addormentarsi\": essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you won. (plural)", answer: "Sono contento che abbiate vinto.", altAnswers: ["Sono contenta che abbiate vinto.", "Sono felice che abbiate vinto."], explanation: "\"Vincere\" → \"vinto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the film has already started.", answer: "Penso che il film sia già cominciato.", altAnswers: ["Credo che il film sia già cominciato.", "Penso che il film sia già iniziato.", "Penso che il film abbia già cominciato."], explanation: "\"Cominciare\" without an object: usually essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems prices have gone up.", answer: "Sembra che i prezzi siano aumentati.", altAnswers: ["Pare che i prezzi siano aumentati.", "Sembra che i prezzi siano saliti."], explanation: "\"Aumentare\" without an object: essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sorry you [broke] your leg. (to a friend)", sentence: "Mi dispiace che ti ___ la gamba.", answer: "sia rotto", altAnswers: ["sia rotta"], explanation: "\"Rompersi la gamba\": essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [answered] the email. (plural)", sentence: "Spero che ___ all'email.", answer: "abbiate risposto", explanation: "\"Rispondere\" → \"risposto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's strange the kids [haven't come back] yet.", sentence: "È strano che i bambini non ___ ancora.", answer: "siano tornati", explanation: "\"Tornare\": essere." },
      { type: "word-order", prompt: "Put the words in order to say: I think they've already left.", words: ["Penso", "che", "siano", "già", "partiti."], translation: "I think they've already left.", explanation: "\"Siano partiti\"." },
      { type: "multiple-choice", question: "\"Credo che Anna ___ il treno delle otto.\" (prendere)", options: ["abbia preso", "sia presa", "abbia prenduto", "ha preso"], correctIndex: 0, explanation: "\"Prendere\" → \"preso\", avere." },
      { type: "listen-choose", audio: "È possibile che si sia addormentata.", question: "What may have happened?", options: ["She fell asleep.", "She woke up.", "She left.", "She got angry."], correctIndex: 0, explanation: "\"Addormentarsi\" = to fall asleep." },
      { type: "dictation", audio: "Sembra che si siano trasferiti e che abbiano venduto la casa.", explanation: "\"Si siano trasferiti\", \"abbiano venduto\"." },
      { type: "speak", text: "Credo che sia uscita con Paolo e che siano andati al cinema.", prompt: "Say it in Italian: I think she went out with Paolo and they went to the movies.", tip: "AN-da-ti: stress on the first syllable.", explanation: "Two essere forms with agreement." },
    ],
  },
  {
    slug: "b1-past-subjunctive-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Present or Past?",
    summary: "Mixed sentences choosing the present or past subjunctive by time reference.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Now or before?",
        body: [
          "Now or later: \"sia, abbia, venga\". Before now: \"sia stato, abbia avuto, sia venuto\". Time words decide: \"ieri, già, l'anno scorso\" vs \"adesso, stasera, domani\".",
        ],
        examples: [
          { es: "Penso che adesso sia in ufficio.", en: "I think she's in the office now." },
          { es: "Penso che ieri sia stata in ufficio.", en: "I think she was in the office yesterday." },
          { es: "Spero che vinca la partita.", en: "I hope he wins the match." },
          { es: "Spero che abbia vinto la partita.", en: "I hope he won the match." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she was in the office yesterday.", answer: "Penso che ieri sia stata in ufficio.", altAnswers: ["Credo che ieri sia stata in ufficio.", "Penso che sia stata in ufficio ieri."], explanation: "Past." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope he wins the match.", answer: "Spero che vinca la partita.", explanation: "Later." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she's in the office now.", answer: "Penso che adesso sia in ufficio.", altAnswers: ["Credo che adesso sia in ufficio.", "Penso che sia in ufficio adesso.", "Penso che ora sia in ufficio."], explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope he won the match.", answer: "Spero che abbia vinto la partita.", explanation: "Past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you can't come. (to a friend)", answer: "Mi dispiace che tu non possa venire.", explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you couldn't come. (to a friend)", answer: "Mi dispiace che tu non sia potuto venire.", altAnswers: ["Mi dispiace che tu non abbia potuto venire.", "Mi dispiace che tu non sia potuta venire."], explanation: "Past: with \"venire\", \"potere\" can take essere or avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible they're sleeping.", answer: "È possibile che dormano.", altAnswers: ["Può darsi che dormano.", "È possibile che stiano dormendo."], explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible they slept badly.", answer: "È possibile che abbiano dormito male.", altAnswers: ["Può darsi che abbiano dormito male."], explanation: "Past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although he's tired, he's working.", answer: "Benché sia stanco, lavora.", altAnswers: ["Nonostante sia stanco, lavora.", "Anche se è stanco, lavora.", "Sebbene sia stanco, lavora."], explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although he slept a lot, he's tired.", answer: "Benché abbia dormito tanto, è stanco.", altAnswers: ["Nonostante abbia dormito tanto, è stanco.", "Anche se ha dormito tanto, è stanco.", "Benché abbia dormito molto, è stanco."], explanation: "Past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [find] the keys. (to a friend)", sentence: "Spero che tu ___ le chiavi.", answer: "trovi", explanation: "Later." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [found] the keys. (to a friend)", sentence: "Spero che tu ___ le chiavi.", answer: "abbia trovato", explanation: "Past." },
      { type: "word-order", prompt: "Put the words in order to say: I doubt she's read it.", words: ["Dubito", "che", "l'abbia", "letto."], translation: "I doubt she's read it.", explanation: "\"L'abbia letto\" (lo = the book)." },
      { type: "multiple-choice", question: "\"Mi sembra che l'anno scorso ___ in Spagna.\" (loro, vivere)", options: ["abbiano vissuto", "vivano", "vivono", "vivere"], correctIndex: 0, explanation: "\"L'anno scorso\": past." },
      { type: "listen-choose", audio: "Spero che abbia vinto la partita.", question: "When was the match?", options: ["Already played.", "Tomorrow.", "Right now.", "Next week."], correctIndex: 0, explanation: "\"Abbia vinto\": past." },
      { type: "dictation", audio: "Benché abbia dormito tanto, penso che sia ancora stanco.", explanation: "Past, then now." },
      { type: "speak", text: "Mi dispiace che tu non sia potuto venire, ma spero che tu possa venire la prossima volta.", prompt: "Say it in Italian: I'm sorry you couldn't come, but I hope you can come next time.", tip: "SIA po-TU-to, POS-sa.", explanation: "Past, then later." },
    ],
  },
  {
    slug: "b1-past-subjunctive-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Feelings About the Past",
    summary: "Fresh sentences reacting to past events: mi dispiace che, sono contento che, è un peccato che, sono felice di essere...",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Reacting to news",
        body: [
          "React to past events with a present feeling + past subjunctive (\"Mi dispiace che sia finita così\") or, if it's about you, + past infinitive (\"Sono felice di averti conosciuto\").",
        ],
        examples: [
          { es: "Mi dispiace che sia finita così.", en: "I'm sorry it ended like that." },
          { es: "Sono felice che abbiate scelto Firenze.", en: "I'm happy you chose Florence." },
          { es: "È un peccato che non abbiate visto il Duomo.", en: "It's a pity you didn't see the cathedral." },
          { es: "Sono felice di averti conosciuto.", en: "I'm happy I met you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry it ended like that.", answer: "Mi dispiace che sia finita così.", altAnswers: ["Mi dispiace che sia finito così.", "Mi dispiace che sia andata così."], explanation: "\"Finire\" without an object: essere." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy I met you. (to a friend)", answer: "Sono felice di averti conosciuto.", altAnswers: ["Sono felice di averti conosciuta.", "Sono contento di averti conosciuto.", "Sono contenta di averti conosciuto."], explanation: "Same subject: past infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy you chose Florence. (plural)", answer: "Sono felice che abbiate scelto Firenze.", altAnswers: ["Sono contento che abbiate scelto Firenze.", "Sono contenta che abbiate scelto Firenze."], explanation: "\"Abbiate scelto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a pity you didn't see the cathedral. (plural)", answer: "È un peccato che non abbiate visto il Duomo.", altAnswers: ["Peccato che non abbiate visto il Duomo.", "È un peccato che non abbiate visto la cattedrale."], explanation: "\"Abbiate visto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad the operation went well.", answer: "Sono contento che l'operazione sia andata bene.", altAnswers: ["Sono contenta che l'operazione sia andata bene.", "Sono felice che l'operazione sia andata bene."], explanation: "\"Sia andata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry I forgot your birthday. (to a friend)", answer: "Mi dispiace di aver dimenticato il tuo compleanno.", altAnswers: ["Mi dispiace aver dimenticato il tuo compleanno.", "Mi dispiace di essermi dimenticato del tuo compleanno.", "Mi dispiace di essermi dimenticata del tuo compleanno."], explanation: "Same subject: past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's incredible that they've won the championship.", answer: "È incredibile che abbiano vinto il campionato.", explanation: "\"Abbiano vinto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're sorry we didn't call you. (to a friend)", answer: "Ci dispiace di non averti chiamato.", altAnswers: ["Ci dispiace non averti chiamato.", "Ci dispiace di non averti chiamata.", "Ci dispiace di non averti telefonato."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry your cat ran away. (to a friend)", answer: "Mi dispiace che il tuo gatto sia scappato.", explanation: "\"Scappare\": essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm happy you [passed] the exam. (to a friend)", sentence: "Sono felice che tu ___ l'esame.", answer: "abbia passato", altAnswers: ["abbia superato"], explanation: "\"Abbia passato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a pity the concert [was canceled].", sentence: "È un peccato che il concerto ___.", answer: "sia stato annullato", altAnswers: ["sia stato cancellato"], explanation: "Passive in the past subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm glad [I came]. (woman speaking)", sentence: "Sono contenta ___.", answer: "di essere venuta", explanation: "Same subject." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sorry it ended like that.", words: ["Mi", "dispiace", "che", "sia", "finita", "così."], translation: "I'm sorry it ended like that.", explanation: "\"Sia finita\"." },
      { type: "multiple-choice", question: "Which is the natural way to say: I'm glad I studied Italian?", options: ["Sono contento di aver studiato l'italiano.", "Sono contento che io abbia studiato l'italiano.", "Sono contento che ho studiato l'italiano.", "Sono contento studiare l'italiano."], correctIndex: 0, explanation: "Same subject: past infinitive." },
      { type: "listen-choose", audio: "Mi dispiace che il tuo gatto sia scappato.", question: "What happened?", options: ["The cat ran away.", "The cat came back.", "The cat is sick.", "The cat was found."], correctIndex: 0, explanation: "\"Scappare\" = to run away." },
      { type: "dictation", audio: "Sono felice di averti conosciuto e mi dispiace che tu sia già partito.", explanation: "Past infinitive, then past subjunctive." },
      { type: "speak", text: "Sono felice che l'operazione sia andata bene, e mi dispiace di non essere venuto in ospedale.", prompt: "Say it in Italian (as a man): I'm glad the operation went well, and I'm sorry I didn't come to the hospital.", tip: "o-spe-DA-le.", explanation: "Past subjunctive, then past infinitive." },
    ],
  },
];
