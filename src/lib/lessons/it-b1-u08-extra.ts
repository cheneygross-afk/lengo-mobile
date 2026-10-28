// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u08-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 8 Extra Practice: The Subjunctive, Part 2: Opinion and
// Belief. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B1_U08_EXTRA: Lesson[] = [
  {
    slug: "b1-opinions-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Penso Che",
    summary: "Fresh opinion sentences with penso che, credo che, mi sembra che and non credo che.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Opinions on everyday life",
        body: [
          "All the opinion verbs take the subjunctive after \"che\": \"penso che\", \"credo che\", \"immagino che\", \"suppongo che\", \"mi sembra che\", \"mi pare che\", and the negatives \"non penso che\", \"non credo che\".",
        ],
        examples: [
          { es: "Penso che il caffè italiano sia troppo forte per lui.", en: "I think Italian coffee is too strong for him." },
          { es: "Mi sembra che i bambini guardino troppa televisione.", en: "I think the kids watch too much TV." },
          { es: "Non credo che la palestra apra prima delle sette.", en: "I don't think the gym opens before seven." },
          { es: "Immagino che tu abbia molto da fare.", en: "I imagine you have a lot to do." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think the gym opens before seven.", answer: "Non credo che la palestra apra prima delle sette.", altAnswers: ["Non penso che la palestra apra prima delle sette."], explanation: "\"Apra\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I imagine you have a lot to do. (to a friend)", answer: "Immagino che tu abbia molto da fare.", altAnswers: ["Immagino che tu abbia tanto da fare.", "Immagino che tu abbia molte cose da fare."], explanation: "\"Tu abbia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Italian coffee is too strong for him.", answer: "Penso che il caffè italiano sia troppo forte per lui.", altAnswers: ["Credo che il caffè italiano sia troppo forte per lui."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the kids watch too much TV.", answer: "Mi sembra che i bambini guardino troppa televisione.", altAnswers: ["Penso che i bambini guardino troppa televisione.", "Credo che i bambini guardino troppa televisione.", "Penso che i bambini guardino troppa tv."], explanation: "\"Guardino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think this neighborhood is quiet.", answer: "Credo che questo quartiere sia tranquillo.", altAnswers: ["Penso che questo quartiere sia tranquillo.", "Mi sembra che questo quartiere sia tranquillo."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think they speak English.", answer: "Non credo che parlino inglese.", altAnswers: ["Non penso che parlino inglese.", "Non credo che parlino l'inglese."], explanation: "\"Parlino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me that the bus takes too long.", answer: "Mi sembra che l'autobus ci metta troppo.", altAnswers: ["Mi pare che l'autobus ci metta troppo.", "Mi sembra che l'autobus ci metta troppo tempo."], explanation: "\"Metterci\" → \"ci metta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I suppose the train is full.", answer: "Suppongo che il treno sia pieno.", altAnswers: ["Immagino che il treno sia pieno."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you think Sara is coming? (to a friend)", answer: "Pensi che Sara venga?", altAnswers: ["Credi che Sara venga?", "Secondo te Sara viene?"], explanation: "\"Venga\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think they [go] to the sea every summer.", sentence: "Credo che ___ al mare ogni estate.", answer: "vadano", explanation: "\"Vadano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think he [drinks] wine.", sentence: "Non penso che ___ vino.", answer: "beva", explanation: "\"Beva\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems to me you [are] right. (plural)", sentence: "Mi sembra che ___ ragione.", answer: "abbiate", explanation: "\"Abbiate\"." },
      { type: "word-order", prompt: "Put the words in order to say: I think it's too late.", words: ["Penso", "che", "sia", "troppo", "tardi."], translation: "I think it's too late.", explanation: "\"Sia\"." },
      { type: "multiple-choice", question: "\"Mi pare che la pizza ___ fredda.\"", options: ["sia", "è", "essere", "siano"], correctIndex: 0, explanation: "\"Mi pare che\" + subjunctive." },
      { type: "listen-choose", audio: "Non credo che parlino inglese.", question: "What does the speaker think?", options: ["They don't speak English.", "They speak English well.", "They're learning English.", "I don't speak English."], correctIndex: 0, explanation: "\"Non credo che parlino\"." },
      { type: "dictation", audio: "Immagino che tu sia stanca, ma credo che valga la pena.", explanation: "\"Sia\", \"valga\" (from \"valere\")." },
      { type: "speak", text: "Mi sembra che i bambini guardino troppa televisione, ma non credo che sia un dramma.", prompt: "Say it in Italian: I think the kids watch too much TV, but I don't think it's a disaster.", tip: "GUAR-di-no.", explanation: "\"Guardino\", \"sia\"." },
    ],
  },
  {
    slug: "b1-opinions-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Subjunctive or Indicative?",
    summary: "Fresh sentences deciding between opinion (subjunctive) and fact or secondo me (indicative).",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Opinion or fact?",
        body: [
          "Opinion or doubt (\"penso che\", \"non sono sicuro che\"): subjunctive. Fact or certainty (\"so che\", \"sono sicuro che\", \"vedo che\", \"ha detto che\"): indicative. \"Secondo me\" and \"mi sa che\": indicative.",
        ],
        examples: [
          { es: "So che ha due figli.", en: "I know she has two children." },
          { es: "Penso che abbia due figli.", en: "I think she has two children." },
          { es: "Secondo me questo vestito ti sta benissimo.", en: "In my opinion this dress really suits you." },
          { es: "Non sono sicuro che ti stia bene.", en: "I'm not sure it suits you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know she has two children.", answer: "So che ha due figli.", altAnswers: ["So che lei ha due figli."], explanation: "Fact: \"ha\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she has two children.", answer: "Penso che abbia due figli.", altAnswers: ["Credo che abbia due figli.", "Penso che lei abbia due figli."], explanation: "Opinion: \"abbia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion this dress really suits you.", answer: "Secondo me questo vestito ti sta benissimo.", altAnswers: ["Per me questo vestito ti sta benissimo.", "Secondo me questo vestito ti sta molto bene."], explanation: "\"Secondo me\" + \"sta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not sure it suits you.", answer: "Non sono sicuro che ti stia bene.", altAnswers: ["Non sono sicura che ti stia bene."], explanation: "Doubt: \"stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can see you're busy. (to a friend)", answer: "Vedo che sei occupato.", altAnswers: ["Vedo che sei occupata.", "Vedo che hai da fare."], explanation: "\"Vedere\": indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you're busy. (to a friend)", answer: "Penso che tu sia occupato.", altAnswers: ["Penso che tu sia occupata.", "Credo che tu sia occupato.", "Credo che tu sia occupata."], explanation: "Opinion: \"sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said the meeting is at ten.", answer: "Ha detto che la riunione è alle dieci.", explanation: "Reported fact: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a feeling the meeting is at ten.", answer: "Mi sa che la riunione è alle dieci.", explanation: "\"Mi sa che\": indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're sure you'll like Naples. (plural)", answer: "Siamo sicuri che Napoli vi piacerà.", altAnswers: ["Siamo sicure che Napoli vi piacerà.", "Siamo sicuri che vi piacerà Napoli."], explanation: "Certainty: future indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I know the museum [is] free on Sundays.", sentence: "So che il museo ___ gratis la domenica.", answer: "è", explanation: "Fact." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think the museum [is] free.", sentence: "Non credo che il museo ___ gratis.", answer: "sia", explanation: "Doubt." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In my view the film [is] too long.", sentence: "Secondo me il film ___ troppo lungo.", answer: "è", explanation: "\"Secondo me\" + indicative." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sure he's at home.", words: ["Sono", "sicuro", "che", "è", "a", "casa."], translation: "I'm sure he's at home.", explanation: "Certainty: \"è\"." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["So che è vero.", "Penso che sia vero.", "Secondo me sia vero.", "Mi sa che è vero.", "Non credo che è vero.", "Non sono sicura che sia vero."], correctIndexes: [0, 1, 3, 5], explanation: "Fact / secondo me / mi sa che: indicative. Opinion / doubt: subjunctive." },
      { type: "listen-choose", audio: "Mi sa che la riunione è alle dieci.", question: "How sure is the speaker?", options: ["They have a feeling, not certain.", "Completely certain.", "They have no idea.", "They know it's not at ten."], correctIndex: 0, explanation: "\"Mi sa che\" = I have a feeling." },
      { type: "dictation", audio: "So che ha ragione, ma non sono sicura che sia la soluzione giusta.", explanation: "\"So che ha\", \"non sono sicura che sia\"." },
      { type: "speak", text: "Secondo me il vestito ti sta benissimo, ma non sono sicura che il colore sia giusto.", prompt: "Say it in Italian (as a woman): In my opinion the dress really suits you, but I'm not sure the color is right.", tip: "be-NIS-si-mo.", explanation: "\"Secondo me sta\", \"non sono sicura che sia\"." },
    ],
  },
  {
    slug: "b1-opinions-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Che or Di?",
    summary: "Fresh sentences choosing che + subjunctive (different subject) or di + infinitive (same subject).",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Same or different subject",
        body: [
          "Same person thinks and acts: \"di\" + infinitive (\"Credo di avere la febbre\"). Different person: \"che\" + subjunctive (\"Credo che Luca abbia la febbre\"). For past actions with the same subject: \"di aver / di essere\" + participle.",
        ],
        examples: [
          { es: "Credo di avere la febbre.", en: "I think I have a fever." },
          { es: "Credo che Luca abbia la febbre.", en: "I think Luca has a fever." },
          { es: "Pensa di vincere.", en: "She thinks she'll win." },
          { es: "Pensa che vinca la sua squadra.", en: "She thinks her team will win." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I have a fever.", answer: "Credo di avere la febbre.", altAnswers: ["Penso di avere la febbre.", "Credo di aver la febbre."], explanation: "Same subject." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Luca has a fever.", answer: "Credo che Luca abbia la febbre.", altAnswers: ["Penso che Luca abbia la febbre."], explanation: "Different subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She thinks she'll win.", answer: "Pensa di vincere.", altAnswers: ["Crede di vincere.", "Pensa che vincerà.", "Lei pensa di vincere."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She thinks her team will win.", answer: "Pensa che vinca la sua squadra.", altAnswers: ["Pensa che la sua squadra vinca.", "Crede che la sua squadra vinca.", "Pensa che la sua squadra vincerà."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We think we'll stay at home.", answer: "Pensiamo di restare a casa.", altAnswers: ["Pensiamo di rimanere a casa.", "Crediamo di restare a casa.", "Pensiamo che resteremo a casa.", "Pensiamo di stare a casa."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think I know him.", answer: "Non credo di conoscerlo.", altAnswers: ["Non penso di conoscerlo."], explanation: "Same subject + pronoun on the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think he knows me.", answer: "Non credo che mi conosca.", altAnswers: ["Non penso che mi conosca.", "Non credo che lui mi conosca."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me I've forgotten something.", answer: "Mi sembra di aver dimenticato qualcosa.", altAnswers: ["Mi sembra di avere dimenticato qualcosa.", "Mi pare di aver dimenticato qualcosa."], explanation: "Same subject, past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They think they're in the right place.", answer: "Credono di essere nel posto giusto.", altAnswers: ["Pensano di essere nel posto giusto."], explanation: "Same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope [you can] come. (to a friend)", sentence: "Spero che ___ venire.", answer: "tu possa", explanation: "Different subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope [I can] come.", sentence: "Spero ___ venire.", answer: "di potere", altAnswers: ["di poter"], explanation: "Same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marta thinks [she has] made a mistake.", sentence: "Marta pensa ___ sbagliato.", answer: "di aver", altAnswers: ["di avere"], explanation: "Same subject, past." },
      { type: "word-order", prompt: "Put the words in order to say: I think I'll leave on Monday.", words: ["Penso", "di", "partire", "lunedì."], translation: "I think I'll leave on Monday.", explanation: "Same subject." },
      { type: "multiple-choice", question: "Which is the natural way to say: Do you think you can do it? (to a friend)", options: ["Pensi di poterlo fare?", "Pensi che tu possa farlo?", "Pensi che puoi farlo?", "Pensi poterlo fare?"], correctIndex: 0, explanation: "Same subject: \"di poterlo fare\" (or \"di farcela\"). \"Pensi che tu possa\" is grammatical but clumsy." },
      { type: "listen-choose", audio: "Pensa che vinca la sua squadra.", question: "Who will win, according to her?", options: ["Her team.", "She will.", "The other team.", "Nobody."], correctIndex: 0, explanation: "\"Che vinca la sua squadra\"." },
      { type: "dictation", audio: "Credo di aver capito, ma non penso che gli altri abbiano capito.", explanation: "\"Di aver capito\" vs \"che abbiano capito\"." },
      { type: "speak", text: "Credo di avere la febbre, e penso che anche Luca stia male.", prompt: "Say it in Italian: I think I have a fever, and I think Luca is ill too.", tip: "FEB-bre: double b.", explanation: "Same subject, then different subject." },
    ],
  },
];
