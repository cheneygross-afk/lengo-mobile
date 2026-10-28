// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u07-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 7 Extra Practice: The Subjunctive, Part 1: Forms. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U07_EXTRA: Lesson[] = [
  {
    slug: "b1-subjunctive-forms-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Regular Forms",
    summary: "Fresh regular verbs in the present subjunctive: viaggi, spenda, partano, costruiscano.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Fresh verbs, same rule",
        body: [
          "-are verbs take \"-i\" (\"viaggi\", \"viaggiate\", \"viaggino\"), -ere and -ire verbs take \"-a\" (\"spenda\", \"senta\", \"spendano\"), and \"-isc-\" verbs keep it (\"costruisca\", \"costruiscano\"). \"Noi\" is always the same as the present.",
        ],
        examples: [
          { es: "Spero che viaggino in treno.", en: "I hope they travel by train." },
          { es: "Penso che spenda troppo in vestiti.", en: "I think she spends too much on clothes." },
          { es: "Voglio che tu ti riposi.", en: "I want you to rest." },
          { es: "Spero che costruiscano un parco.", en: "I hope they build a park." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they travel by train.", answer: "Spero che viaggino in treno.", explanation: "\"Viaggiare\" → \"viaggino\", one i." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she spends too much on clothes.", answer: "Penso che spenda troppo in vestiti.", altAnswers: ["Credo che spenda troppo in vestiti.", "Penso che spenda troppo per i vestiti."], explanation: "\"Spendere\" → \"spenda\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to rest. (to a friend)", answer: "Voglio che tu ti riposi.", explanation: "\"Riposarsi\" → \"ti riposi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they build a park.", answer: "Spero che costruiscano un parco.", explanation: "\"-isc-\" kept." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Matteo cooks very well.", answer: "Penso che Matteo cucini molto bene.", altAnswers: ["Credo che Matteo cucini molto bene.", "Penso che Matteo cucini benissimo."], explanation: "\"Cucinare\" → \"cucini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you sell the car. (plural)", answer: "Spero che vendiate la macchina.", altAnswers: ["Spero che vendiate l'auto."], explanation: "\"Vendere\" → \"vendiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want them to switch off the lights.", answer: "Voglio che spengano le luci.", altAnswers: ["Voglio che loro spengano le luci."], explanation: "\"Spengo\" → \"spenga\" → \"spengano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope she feels better.", answer: "Spero che si senta meglio.", altAnswers: ["Spero che lei si senta meglio."], explanation: "\"Sentirsi\" → \"si senta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're getting married in June.", answer: "Penso che si sposino a giugno.", altAnswers: ["Credo che si sposino a giugno.", "Penso che si sposino in giugno."], explanation: "\"Sposarsi\" → \"si sposino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you to [explain] the rules. (plural)", sentence: "Voglio che ___ le regole.", answer: "spieghiate", explanation: "\"Spiegare\" → \"spieghiate\": keep the hard g." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope the bus [leaves] on time.", sentence: "Spero che l'autobus ___ in orario.", answer: "parta", explanation: "\"Partire\" → \"parta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think Lucia [sends] lots of messages.", sentence: "Penso che Lucia ___ tanti messaggi.", answer: "mandi", altAnswers: ["invii"], explanation: "\"Mandare\" → \"mandi\"." },
      { type: "word-order", prompt: "Put the words in order to say: I hope you enjoy yourselves.", words: ["Spero", "che", "vi", "divertiate."], translation: "I hope you enjoy yourselves.", explanation: "\"Divertirsi\" → \"vi divertiate\"." },
      { type: "multiple-choice", question: "Which is the subjunctive of \"giocare\" (tu)?", options: ["giochi", "gioci", "gioca", "giocchi"], correctIndex: 0, explanation: "\"-care\" adds h: \"giochi\"." },
      { type: "listen-choose", audio: "Spero che costruiscano un parco.", question: "What does the speaker hope?", options: ["That they build a park.", "That they close a park.", "That they visit a park.", "That he builds a park."], correctIndex: 0, explanation: "\"Costruiscano\": loro." },
      { type: "dictation", audio: "Voglio che spegniate la televisione e che leggiate un libro.", explanation: "\"Spegniate\", \"leggiate\"." },
      { type: "speak", text: "Spero che viaggino in treno e che non spendano troppo.", prompt: "Say it in Italian: I hope they travel by train and don't spend too much.", tip: "VIAG-gi-no, SPEN-da-no.", explanation: "\"Viaggino\", \"spendano\"." },
    ],
  },
  {
    slug: "b1-subjunctive-forms-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Irregular Forms",
    summary: "Fresh sentences with sia, abbia, vada, faccia, venga, sappia, possa, voglia and the rest.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Irregulars in new contexts",
        body: [
          "Start from the \"io\" present (\"vado\" → \"vada\", \"esco\" → \"esca\"), take \"noi\" and \"voi\" from the \"noi\" present (\"usciamo\" → \"usciate\"), and learn \"sia, abbia, stia, dia, sappia\" by heart.",
        ],
        examples: [
          { es: "Spero che il treno non abbia ritardo.", en: "I hope the train isn't late." },
          { es: "Penso che vada in palestra tutti i giorni.", en: "I think he goes to the gym every day." },
          { es: "Voglio che tu dica di sì.", en: "I want you to say yes." },
          { es: "Spero che venga anche tua sorella.", en: "I hope your sister comes too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the train isn't late.", answer: "Spero che il treno non abbia ritardo.", altAnswers: ["Spero che il treno non sia in ritardo."], explanation: "\"Avere ritardo\" / \"essere in ritardo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to say yes. (to a friend)", answer: "Voglio che tu dica di sì.", explanation: "\"Dico\" → \"dica\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he goes to the gym every day.", answer: "Penso che vada in palestra tutti i giorni.", altAnswers: ["Credo che vada in palestra tutti i giorni.", "Penso che vada in palestra ogni giorno."], explanation: "\"Vada\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope your sister comes too. (to a friend)", answer: "Spero che venga anche tua sorella.", altAnswers: ["Spero che anche tua sorella venga."], explanation: "\"Venga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the restaurant is full.", answer: "Penso che il ristorante sia pieno.", altAnswers: ["Credo che il ristorante sia pieno."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to do your best. (plural)", answer: "Voglio che facciate del vostro meglio.", altAnswers: ["Voglio che facciate il possibile."], explanation: "\"Facciate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they can sleep.", answer: "Spero che possano dormire.", altAnswers: ["Spero che riescano a dormire."], explanation: "\"Possano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Nicola wants a dog.", answer: "Penso che Nicola voglia un cane.", altAnswers: ["Credo che Nicola voglia un cane."], explanation: "\"Voglia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to drink more water. (to a friend)", answer: "Voglio che tu beva più acqua.", explanation: "\"Bevo\" → \"beva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they choose the blue sofa.", answer: "Spero che scelgano il divano blu.", explanation: "\"Scelgo\" → \"scelgano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [give] me good news. (plural)", sentence: "Spero che mi ___ buone notizie.", answer: "diate", explanation: "\"Dare\" → \"diate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think they [have to] study more.", sentence: "Penso che ___ studiare di più.", answer: "debbano", explanation: "\"Dovere\" → \"debbano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope he [keeps] his promise.", sentence: "Spero che ___ la sua promessa.", answer: "mantenga", explanation: "\"Mantenere\" works like \"tenere\": \"mantenga\"." },
      { type: "matching", instructions: "Match each verb to its subjunctive (lui / lei).", pairs: [{ left: "sapere", right: "sappia" }, { left: "uscire", right: "esca" }, { left: "dare", right: "dia" }, { left: "rimanere", right: "rimanga" }], explanation: "Four irregulars." },
      { type: "listen-choose", audio: "Spero che stiano tutti bene.", question: "What does the speaker hope?", options: ["That everyone is well.", "That everyone stays.", "That everyone is standing.", "That everyone is coming."], correctIndex: 0, explanation: "\"Stare bene\" → \"stiano bene\"." },
      { type: "dictation", audio: "Penso che sappiano la verità ma che non vogliano dirla.", explanation: "\"Sappiano\", \"vogliano\"." },
      { type: "speak", text: "Spero che il treno non abbia ritardo e che tu possa venire a prendermi.", prompt: "Say it in Italian (to a friend): I hope the train isn't late and you can come and pick me up.", tip: "AB-bia: hold the double b.", explanation: "\"Abbia\", \"possa\"." },
    ],
  },
  {
    slug: "b1-subjunctive-forms-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Forms by Ear",
    summary: "Dictation practice: hear and write subjunctive forms, with stress on the -ino and -ano endings.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Listening for the ending",
        body: [
          "The \"loro\" subjunctive keeps the stress where the present has it: \"PARlino\", \"PRENdano\", \"VAdano\", \"FACciano\". The voi form ends in \"-iate\" with the stress on the \"a\": \"parliAte\", \"facciAte\". Listen for \"-i-\" or \"-a-\" in the ending to tell the subjunctive from the present.",
        ],
        examples: [
          { es: "Spero che parlino piano.", en: "I hope they speak slowly." },
          { es: "Penso che prendano un taxi.", en: "I think they're getting a taxi." },
          { es: "Voglio che facciate silenzio.", en: "I want you to be quiet. (plural)" },
          { es: "Spero che arriviate presto.", en: "I hope you arrive soon. (plural)" },
        ],
        checkpoint: [
          { type: "dictation", audio: "Spero che parlino piano.", explanation: "\"PARlino\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're getting a taxi.", answer: "Penso che prendano un taxi.", altAnswers: ["Credo che prendano un taxi."], explanation: "\"PRENdano\"." },
        ],
      },
    ],
    exercises: [
      { type: "dictation", audio: "Voglio che facciate silenzio.", explanation: "\"Facciate\"." },
      { type: "dictation", audio: "Spero che arriviate presto e che troviate parcheggio.", explanation: "\"Arriviate\", \"troviate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're taking the train.", answer: "Penso che prendano il treno.", altAnswers: ["Credo che prendano il treno."], explanation: "\"PRENdano\"." },
      { type: "dictation", audio: "Spero che non piova e che possiamo mangiare fuori.", explanation: "\"Piova\" from \"piovere\"; \"possiamo\" = noi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you arrive soon. (plural)", answer: "Spero che arriviate presto.", explanation: "\"Arriviate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they live near the station.", answer: "Penso che abitino vicino alla stazione.", altAnswers: ["Credo che abitino vicino alla stazione.", "Penso che vivano vicino alla stazione."], explanation: "\"Abitino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope it doesn't rain.", answer: "Spero che non piova.", explanation: "\"Piovere\" → \"piova\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to be quiet. (plural)", answer: "Voglio che facciate silenzio.", altAnswers: ["Voglio che stiate zitti.", "Voglio che stiate in silenzio."], explanation: "\"Fare silenzio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the guests like the cake.", answer: "Spero che la torta piaccia agli ospiti.", altAnswers: ["Spero che agli ospiti piaccia la torta."], explanation: "\"Piaccia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think they [are going] home.", sentence: "Penso che ___ a casa.", answer: "vadano", altAnswers: ["tornino"], explanation: "\"VAdano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [understand] me. (plural)", sentence: "Spero che mi ___.", answer: "capiate", explanation: "\"Capiate\": no \"-isc-\" in voi." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you to [finish] by six. (plural)", sentence: "Voglio che ___ entro le sei.", answer: "finiate", explanation: "\"FiniAte\": stress on the a." },
      { type: "listen-choose", audio: "Voglio che facciate silenzio.", question: "Which form did you hear?", options: ["facciate", "fate", "facciano", "faccia"], correctIndex: 0, explanation: "Voi: \"facciate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they come soon.", answer: "Spero che vengano presto.", altAnswers: ["Spero che vengano subito.", "Spero che arrivino presto."], explanation: "\"Vengano\", not the present \"vengono\"." },
      { type: "speak", text: "Spero che parlino piano, che prendano un taxi e che arrivino presto.", prompt: "Say it in Italian: I hope they speak slowly, get a taxi and arrive soon.", tip: "PAR-li-no, PREN-da-no, ar-RI-vi-no.", explanation: "Three loro forms, each with its own stress." },
    ],
  },
];
