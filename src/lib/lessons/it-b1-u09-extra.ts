// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u09-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 9 Extra Practice: The Subjunctive, Part 3: Wishes,
// Feelings and Doubts. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B1_U09_EXTRA: Lesson[] = [
  {
    slug: "b1-wishes-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Voglio Che",
    summary: "Fresh sentences with voglio che, preferisco che and spero che + subjunctive.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Wants and hopes for other people",
        body: [
          "Want / prefer / hope + someone else's action: \"che\" + subjunctive. \"Voglio che tu mi aspetti\", \"Preferiamo che veniate domani\", \"Spero che ti piaccia\".",
        ],
        examples: [
          { es: "Voglio che tu mi aspetti qui.", en: "I want you to wait for me here." },
          { es: "Preferiamo che veniate domani.", en: "We'd rather you came tomorrow." },
          { es: "Il medico vuole che io faccia più sport.", en: "The doctor wants me to do more exercise." },
          { es: "Spero che la cena ti piaccia.", en: "I hope you like the dinner." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to wait for me here. (to a friend)", answer: "Voglio che tu mi aspetti qui.", explanation: "\"Aspetti\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor wants me to do more exercise.", answer: "Il medico vuole che io faccia più sport.", altAnswers: ["Il dottore vuole che io faccia più sport.", "Il medico vuole che io faccia più attività fisica."], explanation: "\"Che io faccia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd rather you came tomorrow. (plural)", answer: "Preferiamo che veniate domani.", explanation: "\"Veniate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you like the dinner. (to a friend)", answer: "Spero che la cena ti piaccia.", altAnswers: ["Spero che ti piaccia la cena."], explanation: "\"Piaccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boss wants us to finish by Friday.", answer: "Il capo vuole che finiamo entro venerdì.", explanation: "\"Finiamo\": noi subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't want them to know.", answer: "Non voglio che lo sappiano.", altAnswers: ["Non voglio che loro lo sappiano."], explanation: "\"Sappiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want me to come with you? (to a friend)", answer: "Vuoi che venga con te?", altAnswers: ["Vuoi che io venga con te?"], explanation: "\"Vuoi che io venga?\" = Shall I come?" },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the hotel has a pool.", answer: "Spero che l'albergo abbia la piscina.", altAnswers: ["Spero che l'hotel abbia la piscina.", "Spero che l'albergo abbia una piscina."], explanation: "\"Abbia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister prefers that I don't call her at work.", answer: "Mia sorella preferisce che io non la chiami al lavoro.", altAnswers: ["Mia sorella preferisce che non la chiami al lavoro."], explanation: "\"Che io non la chiami\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you [to put] the phone away. (plural)", sentence: "Voglio che ___ via il telefono.", answer: "mettiate", explanation: "\"Mettiate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope it [goes] well.", sentence: "Spero che ___ bene.", answer: "vada", explanation: "\"Vada\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We want the kids [to learn] to swim.", sentence: "Vogliamo che i bambini ___ a nuotare.", answer: "imparino", explanation: "\"Imparino\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'd rather you didn't smoke here.", words: ["Preferisco", "che", "non", "fumiate", "qui."], translation: "I'd rather you didn't smoke here. (plural)", explanation: "\"Fumiate\"." },
      { type: "multiple-choice", question: "\"Mio padre vuole che io ___ medicina.\"", options: ["studi", "studio", "studiare", "studia"], correctIndex: 0, explanation: "\"Che io studi\"." },
      { type: "listen-choose", audio: "Vuoi che venga con te?", question: "What is the speaker offering?", options: ["To go with you.", "To come later.", "To call you.", "To wait for you."], correctIndex: 0, explanation: "\"Vuoi che venga?\" = Shall I come?" },
      { type: "dictation", audio: "Il capo vuole che finiamo entro venerdì e che nessuno lo sappia.", explanation: "\"Finiamo\", \"sappia\"." },
      { type: "speak", text: "Voglio che tu mi aspetti qui e spero che non ci metta troppo.", prompt: "Say it in Italian: I want you to wait for me here, and I hope it doesn't take too long.", tip: "a-SPET-ti.", explanation: "\"Aspetti\", \"ci metta\"." },
    ],
  },
  {
    slug: "b1-wishes-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Feelings and Fears",
    summary: "Fresh sentences with sono contento che, mi dispiace che, non vedo l'ora che, ho paura che and dubito che.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "How do you feel about it?",
        body: [
          "Feelings and fears about other people's actions take the subjunctive: \"Sono felice che vi troviate bene\", \"Mi dispiace che non stia bene\", \"Ho paura che si arrabbi\", \"Dubito che venga\".",
        ],
        examples: [
          { es: "Sono felice che vi troviate bene a Torino.", en: "I'm happy you're settling in well in Turin." },
          { es: "Mi dispiace che tua madre non stia bene.", en: "I'm sorry your mother isn't well." },
          { es: "Ho paura che si arrabbi.", en: "I'm afraid he'll get angry." },
          { es: "Dubito che il pacco arrivi oggi.", en: "I doubt the package will arrive today." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid he'll get angry.", answer: "Ho paura che si arrabbi.", altAnswers: ["Temo che si arrabbi."], explanation: "\"Arrabbiarsi\" → \"si arrabbi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt the package will arrive today.", answer: "Dubito che il pacco arrivi oggi.", explanation: "\"Arrivi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy you're settling in well in Turin. (plural)", answer: "Sono felice che vi troviate bene a Torino.", altAnswers: ["Sono contento che vi troviate bene a Torino.", "Sono contenta che vi troviate bene a Torino."], explanation: "\"Trovarsi bene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry your mother isn't well. (to a friend)", answer: "Mi dispiace che tua madre non stia bene.", altAnswers: ["Mi dispiace che tua mamma non stia bene."], explanation: "\"Stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can't wait for the shop to open.", answer: "Non vediamo l'ora che apra il negozio.", altAnswers: ["Non vediamo l'ora che il negozio apra."], explanation: "\"Apra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid the dog is cold.", answer: "Ho paura che il cane abbia freddo.", altAnswers: ["Temo che il cane abbia freddo."], explanation: "\"Avere freddo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you're coming with us. (plural)", answer: "Sono contento che veniate con noi.", altAnswers: ["Sono contenta che veniate con noi.", "Sono felice che veniate con noi."], explanation: "\"Veniate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt they understand.", answer: "Dubito che capiscano.", altAnswers: ["Dubito che loro capiscano."], explanation: "\"Capiscano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry the concert is canceled.", answer: "Mi dispiace che il concerto sia annullato.", altAnswers: ["Mi dispiace che il concerto sia stato annullato.", "Mi dispiace che il concerto sia cancellato."], explanation: "\"Sia annullato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm afraid the wine [isn't] enough.", sentence: "Temo che il vino non ___.", answer: "basti", explanation: "\"Bastare\" → \"basti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children can't wait for it [to snow].", sentence: "I bambini non vedono l'ora che ___.", answer: "nevichi", explanation: "\"Nevicare\" → \"nevichi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm happy they [get married] in Italy.", sentence: "Sono felice che ___ in Italia.", answer: "si sposino", explanation: "\"Si sposino\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sorry you're sad.", words: ["Mi", "dispiace", "che", "tu", "sia", "triste."], translation: "I'm sorry you're sad.", explanation: "\"Tu sia\"." },
      { type: "matching", instructions: "Match each feeling to an ending.", pairs: [{ left: "Non vedo l'ora che...", right: "arrivi l'estate." }, { left: "Mi dispiace che...", right: "tu stia male." }, { left: "Ho paura che...", right: "si perdano." }, { left: "Dubito che...", right: "lo sappia." }], explanation: "All subjunctive." },
      { type: "listen-choose", audio: "Temo che il vino non basti.", question: "What's the worry?", options: ["There won't be enough wine.", "The wine is bad.", "There's too much wine.", "The wine is warm."], correctIndex: 0, explanation: "\"Non basti\" = isn't enough." },
      { type: "dictation", audio: "Sono felice che vi troviate bene, ma mi dispiace che siate così lontani.", explanation: "\"Troviate\", \"siate\"." },
      { type: "speak", text: "Non vedo l'ora che arrivi l'estate, ma ho paura che faccia troppo caldo.", prompt: "Say it in Italian: I can't wait for summer to come, but I'm afraid it'll be too hot.", tip: "l'e-STA-te.", explanation: "\"Arrivi\", \"faccia\"." },
    ],
  },
  {
    slug: "b1-wishes-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Infinitive or Subjunctive?",
    summary: "Mixed practice: voglio / spero di / ho paura di + infinitive, or che + subjunctive.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Mixed",
        body: [
          "Same subject: \"voglio / preferisco\" + infinitive; \"spero di\", \"ho paura di\", \"sono contento di\", \"mi dispiace (di)\", \"non vedo l'ora di\" + infinitive. Different subject: \"che\" + subjunctive.",
        ],
        examples: [
          { es: "Preferisco andare a piedi.", en: "I'd rather walk." },
          { es: "Preferisco che andiate a piedi.", en: "I'd rather you walked. (plural)" },
          { es: "Ho paura di disturbare.", en: "I'm afraid of disturbing you." },
          { es: "Ho paura che i bambini disturbino.", en: "I'm afraid the kids will be a nuisance." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather walk.", answer: "Preferisco andare a piedi.", explanation: "Same subject." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather you walked. (plural)", answer: "Preferisco che andiate a piedi.", explanation: "Different subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid of disturbing you.", answer: "Ho paura di disturbare.", altAnswers: ["Ho paura di disturbarti.", "Temo di disturbare.", "Ho paura di disturbarla."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid the kids will be a nuisance.", answer: "Ho paura che i bambini disturbino.", altAnswers: ["Temo che i bambini disturbino.", "Ho paura che i bambini diano fastidio."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope to see you soon. (to a friend)", answer: "Spero di vederti presto.", explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you see the sea. (to a friend)", answer: "Spero che tu veda il mare.", altAnswers: ["Spero che vedrai il mare."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're happy to stay.", answer: "Siamo contenti di restare.", altAnswers: ["Siamo contente di restare.", "Siamo felici di restare.", "Siamo contenti di rimanere."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're happy you're staying. (to a friend)", answer: "Siamo contenti che tu resti.", altAnswers: ["Siamo contente che tu resti.", "Siamo felici che tu resti.", "Siamo contenti che tu rimanga."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She wants to change her hairdresser.", answer: "Vuole cambiare parrucchiere.", altAnswers: ["Lei vuole cambiare parrucchiere.", "Vuole cambiare parrucchiera."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She wants me to change my hairdresser.", answer: "Vuole che io cambi parrucchiere.", altAnswers: ["Lei vuole che io cambi parrucchiere.", "Vuole che io cambi parrucchiera."], explanation: "\"Che io cambi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I can't wait [to go] on vacation.", sentence: "Non vedo l'ora ___ in vacanza.", answer: "di andare", explanation: "Same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I can't wait for you [to go] on vacation. (plural)", sentence: "Non vedo l'ora che ___ in vacanza.", answer: "andiate", explanation: "Different subject." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sorry I can't help you.", words: ["Mi", "dispiace", "di", "non", "poterti", "aiutare."], translation: "I'm sorry I can't help you.", explanation: "Same subject; pronoun on \"poter\"." },
      { type: "multiple-choice", question: "Which is the natural way to say: I hope to pass the exam?", options: ["Spero di superare l'esame.", "Spero che io superi l'esame.", "Spero superare l'esame.", "Spero che supero l'esame."], correctIndex: 0, explanation: "Same subject: \"spero di\"." },
      { type: "listen-choose", audio: "Preferisco che andiate a piedi.", question: "Who should walk?", options: ["You (plural).", "The speaker.", "Everyone, including the speaker.", "Nobody."], correctIndex: 0, explanation: "\"Andiate\": voi." },
      { type: "dictation", audio: "Spero di vederti presto, e spero che tu porti anche il cane.", explanation: "\"Di vederti\" vs \"che tu porti\"." },
      { type: "speak", text: "Preferisco andare a piedi, ma voglio che voi prendiate l'autobus.", prompt: "Say it in Italian: I'd rather walk, but I want you to take the bus. (plural)", tip: "pren-DIA-te.", explanation: "Infinitive, then \"che\" + subjunctive." },
    ],
  },
];
