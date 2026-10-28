// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u08.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 8: The Subjunctive, Part 2: Opinion and Belief. Penso che /
// credo che / mi sembra che + subjunctive, di + infinitive with the same
// subject, sono sicuro che / so che / secondo me + indicative, non credo che +
// subjunctive, and the spoken indicative after penso che.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U08: Lesson[] = [
  {
    slug: "b1-opinion-subjunctive",
    level: "IT-B1",
    number: 1,
    title: "I Think That: Penso Che + Subjunctive",
    summary: "Penso che sia vero, credo che Marco abbia ragione, mi sembra che faccia freddo.",
    duration: "17 min",
    sections: [
      {
        heading: "Opinion means subjunctive",
        body: [
          "When you give an opinion with a verb, Italian treats the idea as personal and not certain, so the verb after \"che\" goes into the subjunctive: \"Penso che sia vero\", \"Credo che Marco abbia ragione\".",
          "The core opinion verbs are \"pensare\", \"credere\", \"immaginare\" and \"supporre\": \"penso che\", \"credo che\", \"immagino che\", \"suppongo che\". \"Suppongo\" is a bit more formal; \"immagino che\" is common when you guess about someone's feelings: \"Immagino che tu sia stanco\".",
        ],
        examples: [
          { es: "Penso che sia vero.", en: "I think it's true." },
          { es: "Credo che Marco abbia ragione.", en: "I believe Marco is right." },
          { es: "Immagino che tu sia stanco dopo il viaggio.", en: "I imagine you're tired after the journey." },
          { es: "Suppongo che il volo parta in orario.", en: "I suppose the flight leaves on time." },
          { es: "Pensate che sia una buona idea?", en: "Do you think it's a good idea? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believe Marco is right.", answer: "Credo che Marco abbia ragione.", altAnswers: ["Penso che Marco abbia ragione."], explanation: "\"Credo che\" + \"abbia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I imagine you're tired after the journey. (to a friend)", answer: "Immagino che tu sia stanco dopo il viaggio.", altAnswers: ["Immagino che tu sia stanca dopo il viaggio.", "Immagino che sarai stanco dopo il viaggio."], explanation: "\"Immagino che\" + subjunctive." },
        ],
      },
      {
        heading: "Mi sembra che, mi pare che",
        body: [
          "\"Mi sembra che\" and \"mi pare che\" (it seems to me that) work like \"piacere\": the person goes in front as an indirect pronoun. \"Mi sembra che faccia freddo\", \"Ti sembra che sia giusto?\", \"Ci pare che il prezzo sia alto\".",
          "They are softer than \"penso che\": useful for polite criticism. \"Mi sembra che manchi un po' di sale\" sounds kinder than saying there's no salt.",
        ],
        examples: [
          { es: "Mi sembra che faccia freddo qui.", en: "It seems cold in here to me." },
          { es: "Ti sembra che sia giusto?", en: "Do you think that's fair?" },
          { es: "Mi pare che manchi un po' di sale.", en: "I think it needs a little salt." },
          { es: "Ci sembra che il prezzo sia troppo alto.", en: "We think the price is too high." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you think that's fair? (to a friend)", answer: "Ti sembra che sia giusto?", altAnswers: ["Ti pare che sia giusto?", "Pensi che sia giusto?", "Credi che sia giusto?"], explanation: "\"Ti sembra che\" + \"sia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think it [needs] a little salt.", sentence: "Mi pare che ___ un po' di sale.", answer: "manchi", explanation: "\"Mancare\" → \"manchi\"." },
        ],
      },
      {
        heading: "Non credo che",
        body: [
          "The negative keeps the subjunctive, and Italians usually put the \"non\" on the opinion verb: \"Non credo che venga\" (I don't think he's coming), \"Non penso che sia vero\". English does the same: I don't think, not I think he isn't.",
          "You will often see and hear these verbs without \"che\": \"Penso sia vero\", \"Credo abbia ragione\", \"Mi sembra manchi qualcosa\". Dropping \"che\" is perfectly standard, in writing too, but only before the subjunctive: the mood is what holds the sentence together. Don't drop it after \"so\" or \"sono sicuro\". And keep \"credere che\" (to think that) apart from \"credere a\" (to believe someone or something) and \"credere in\" (to believe in): \"Ti credo\", \"Non credo ai fantasmi\", \"Credo in te\".",
        ],
        examples: [
          { es: "Non credo che venga stasera.", en: "I don't think he's coming tonight." },
          { es: "Non penso che sia vero.", en: "I don't think it's true." },
          { es: "Non mi sembra che sia una cattiva idea.", en: "It doesn't seem a bad idea to me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think he's coming tonight.", answer: "Non credo che venga stasera.", altAnswers: ["Non penso che venga stasera.", "Non credo che lui venga stasera."], explanation: "\"Non\" on the opinion verb + subjunctive." },
          { type: "listen-choose", audio: "Non mi sembra che sia una cattiva idea.", question: "What does the speaker think of the idea?", options: ["It's not a bad idea.", "It's a bad idea.", "It's the best idea.", "They don't understand it."], correctIndex: 0, explanation: "\"Non mi sembra che sia cattiva\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think it's true.", answer: "Penso che sia vero.", altAnswers: ["Credo che sia vero."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I suppose the flight leaves on time.", answer: "Suppongo che il volo parta in orario.", explanation: "\"Suppongo che\" + \"parta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you think it's a good idea? (plural)", answer: "Pensate che sia una buona idea?", altAnswers: ["Credete che sia una buona idea?", "Vi sembra una buona idea?"], explanation: "\"Pensate che\" + \"sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We think the price is too high.", answer: "Ci sembra che il prezzo sia troppo alto.", altAnswers: ["Pensiamo che il prezzo sia troppo alto.", "Crediamo che il prezzo sia troppo alto."], explanation: "\"Ci sembra che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think it's true.", answer: "Non penso che sia vero.", altAnswers: ["Non credo che sia vero."], explanation: "Negative opinion + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the shops close at eight.", answer: "Credo che i negozi chiudano alle otto.", altAnswers: ["Penso che i negozi chiudano alle otto."], explanation: "\"Chiudano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems cold in here to me.", answer: "Mi sembra che faccia freddo qui.", altAnswers: ["Mi sembra che qui faccia freddo.", "Mi pare che faccia freddo qui.", "Mi pare che qui faccia freddo."], explanation: "\"Faccia freddo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think Anna [knows] the answer.", sentence: "Penso che Anna ___ la risposta.", answer: "sappia", explanation: "\"Sapere\" → \"sappia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think they [can] come.", sentence: "Non credo che ___ venire.", answer: "possano", explanation: "\"Possano\"." },
      { type: "multiple-choice", question: "Which is the most natural way to say: I don't think it's expensive?", options: ["Non credo che sia caro.", "Credo che non è caro.", "Non credo che è caro.", "Credo non caro."], correctIndex: 0, explanation: "\"Non\" on the opinion verb, subjunctive after \"che\"." },
      { type: "dictation", audio: "Mi sembra che il film sia un po' lungo, ma credo che ti piaccia.", explanation: "\"Sia\", \"piaccia\"." },
      { type: "speak", text: "Non credo che sia una cattiva idea, ma mi sembra che costi troppo.", prompt: "Say it in Italian: I don't think it's a bad idea, but it seems to me it costs too much.", tip: "COS-ti: stress on the first syllable.", explanation: "Two opinion frames, two subjunctives." },
    ],
  },
  {
    slug: "b1-opinion-infinitive",
    level: "IT-B1",
    number: 2,
    title: "Penso Di: Same Subject, Infinitive",
    summary: "Penso di partire domani (not penso che io parta), credo di aver capito (preview).",
    duration: "17 min",
    sections: [
      {
        heading: "Same subject? Use di + infinitive",
        body: [
          "The subjunctive is for someone else's actions. When the person who thinks is also the person who acts, Italian uses \"di\" + infinitive: \"Penso di partire domani\" (I think I'll leave tomorrow), not \"penso che io parta\".",
          "The same goes for \"credere\", \"immaginare\" and the other opinion verbs: \"Credo di avere ragione\", \"Pensi di venire?\" (Are you thinking of coming?). Note that \"pensare di\" often means to be planning to.",
        ],
        examples: [
          { es: "Penso di partire domani.", en: "I think I'll leave tomorrow." },
          { es: "Credo di avere ragione.", en: "I believe I'm right." },
          { es: "Pensi di venire alla festa?", en: "Are you thinking of coming to the party?" },
          { es: "Crede di essere il migliore.", en: "He thinks he's the best." },
          { es: "Pensiamo di comprare casa.", en: "We're thinking of buying a house." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I'll leave tomorrow.", answer: "Penso di partire domani.", altAnswers: ["Credo di partire domani.", "Penso che partirò domani.", "Credo che partirò domani."], explanation: "Same subject: \"di\" + infinitive." },
          { type: "multiple-choice", question: "Which is the natural way to say: He thinks he's the best?", options: ["Crede di essere il migliore.", "Crede che sia il migliore.", "Crede che lui è il migliore.", "Crede essere il migliore."], correctIndex: 0, explanation: "He thinks, he is: same subject, \"di essere\". (\"Crede che sia\" would suggest someone else.)" },
        ],
      },
      {
        heading: "Mi sembra di: the same rule",
        body: [
          "\"Mi sembra di\" + infinitive means I feel as if / I think I: \"Mi sembra di sognare\" (I feel like I'm dreaming), \"Mi sembra di conoscerlo\" (I think I know him). Compare: \"Mi sembra che lui mi conosca\" (I think he knows me).",
          "Preview of Unit 12: for a past action, use \"avere / essere\" + participle after \"di\": \"Credo di aver capito\" (I think I've understood), \"Penso di aver sbagliato\". Note the short form \"aver\" before a consonant.",
          "Two cases need care. \"Pensare a\" means to think about: \"Penso a te\", \"Ci penso io\" (I'll take care of it), while \"pensare di\" gives an opinion or a plan. And with the future the same-subject rule relaxes: \"Penso che arriverò tardi\" is natural and correct, because the future indicative is not a subjunctive. What sounds wrong to Italians is \"penso che io sia\" or \"credo che io abbia\": with the same subject, use \"di\".",
        ],
        examples: [
          { es: "Mi sembra di sognare!", en: "I feel like I'm dreaming!" },
          { es: "Mi sembra di conoscerlo.", en: "I think I know him." },
          { es: "Mi sembra che lui mi conosca.", en: "I think he knows me." },
          { es: "Credo di aver capito.", en: "I think I've understood." },
          { es: "Penso di aver sbagliato strada.", en: "I think I've taken the wrong road." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I know him.", answer: "Mi sembra di conoscerlo.", altAnswers: ["Credo di conoscerlo.", "Penso di conoscerlo.", "Mi pare di conoscerlo."], explanation: "Same subject: \"di\" + infinitive + pronoun." },
          { type: "listen-choose", audio: "Credo di aver capito.", question: "What does the speaker say?", options: ["I think I've understood.", "I think you've understood.", "I believe he understood.", "I don't understand."], correctIndex: 0, explanation: "\"Di aver capito\": same subject, past." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believe I'm right.", answer: "Credo di avere ragione.", altAnswers: ["Penso di avere ragione.", "Credo di aver ragione."], explanation: "\"Di avere ragione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you thinking of coming to the party? (to a friend)", answer: "Pensi di venire alla festa?", explanation: "\"Pensare di\" = to plan to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're thinking of buying a house.", answer: "Pensiamo di comprare casa.", altAnswers: ["Pensiamo di comprare una casa."], explanation: "\"Pensiamo di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel like I'm dreaming!", answer: "Mi sembra di sognare!", altAnswers: ["Mi pare di sognare!"], explanation: "\"Mi sembra di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he knows me.", answer: "Mi sembra che lui mi conosca.", altAnswers: ["Mi sembra che mi conosca.", "Penso che mi conosca.", "Credo che mi conosca.", "Penso che lui mi conosca."], explanation: "Different subjects: \"che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They think they're always right.", answer: "Credono di avere sempre ragione.", altAnswers: ["Pensano di avere sempre ragione.", "Credono di aver sempre ragione."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I've taken the wrong road.", answer: "Penso di aver sbagliato strada.", altAnswers: ["Credo di aver sbagliato strada.", "Penso di avere sbagliato strada."], explanation: "Past infinitive: \"aver sbagliato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think [I can] come.", sentence: "Non credo ___ venire.", answer: "di potere", altAnswers: ["di poter"], explanation: "Same subject: \"di potere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think [you're] wrong. (to a friend)", sentence: "Credo che ___ torto.", answer: "tu abbia", explanation: "Different subject: \"che tu abbia\"." },
      { type: "multiple-choice", question: "Which is the natural way to say: I think I'm tired?", options: ["Penso di essere stanco.", "Penso che io sia stanco.", "Penso che sono stanco.", "Penso essere stanco."], correctIndex: 0, explanation: "Same subject: \"di essere\"." },
      { type: "dictation", audio: "Pensiamo di partire presto, ma credo che Luca voglia dormire.", explanation: "Same subject \"di\", then a different subject \"che\"." },
      { type: "speak", text: "Penso di restare a casa stasera, ma credo che Giulia voglia uscire.", prompt: "Say it in Italian: I think I'll stay home tonight, but I think Giulia wants to go out.", tip: "Pause before \"ma\".", explanation: "\"Di restare\" vs \"che Giulia voglia\"." },
    ],
  },
  {
    slug: "b1-certainty-indicative",
    level: "IT-B1",
    number: 3,
    title: "Certain or Not?",
    summary: "Sono sicuro che è vero, so che è partito (indicative) vs non sono sicuro che sia vero, non credo che venga (subjunctive); secondo me + indicative.",
    duration: "17 min",
    sections: [
      {
        heading: "Certainty takes the indicative",
        body: [
          "When you present something as a fact, use the indicative: \"So che è partito\" (I know he's left), \"Sono sicuro che è vero\", \"È chiaro che non vuole venire\". Knowing, being sure, seeing and saying are not opinions.",
          "Turn certainty into doubt and the subjunctive comes back: \"Non sono sicuro che sia vero\" (I'm not sure it's true).",
          "The same switch works with \"è vero che\" and \"non è vero che\": \"È vero che costa poco\" (a fact), but \"Non è vero che costi poco\" (a denial). Reporting verbs work like \"so che\": \"Ho letto che\", \"Ho sentito che\", \"Mi hanno detto che\" + indicative, because you pass on information. A common English-speaker slip is to treat I'm sure like I think and write \"Sono sicuro che sia\": for a plain statement, keep the indicative.",
        ],
        examples: [
          { es: "So che è partito ieri.", en: "I know he left yesterday." },
          { es: "Sono sicura che è vero.", en: "I'm sure it's true." },
          { es: "Non sono sicura che sia vero.", en: "I'm not sure it's true." },
          { es: "Vedo che sei stanco.", en: "I can see you're tired." },
          { es: "Ha detto che arriva alle otto.", en: "She said she's arriving at eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sure it's true.", answer: "Sono sicuro che è vero.", altAnswers: ["Sono sicura che è vero."], explanation: "Certainty: indicative." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not sure it's true.", answer: "Non sono sicuro che sia vero.", altAnswers: ["Non sono sicura che sia vero."], explanation: "Doubt: subjunctive." },
        ],
      },
      {
        heading: "Secondo me: no subjunctive",
        body: [
          "\"Secondo me\" (in my opinion) is not a verb, so there's no \"che\" and no trigger: the verb that follows is indicative. \"Secondo me è vero\", \"Secondo me Roma è più bella\". Same with \"per me\" and \"secondo te / lui / loro\".",
          "Compare: \"Penso che sia vero\" = \"Secondo me è vero\". Same meaning, two structures. Mixing them (\"secondo me sia vero\") is a common mistake.",
        ],
        examples: [
          { es: "Secondo me è vero.", en: "In my opinion it's true." },
          { es: "Secondo me Roma è più bella.", en: "In my view Rome is more beautiful." },
          { es: "Secondo te ha ragione lui?", en: "In your view, is he right?" },
          { es: "Per me questa pizza è la migliore.", en: "For me this pizza is the best." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my view Rome is more beautiful.", answer: "Secondo me Roma è più bella.", altAnswers: ["Per me Roma è più bella.", "Secondo me, Roma è più bella."], explanation: "\"Secondo me\" + indicative." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Secondo me ha ragione.", "Secondo me abbia ragione.", "Secondo me che ha ragione.", "Secondo me che abbia ragione."], correctIndex: 0, explanation: "No verb trigger: indicative." },
        ],
      },
      {
        heading: "Short answers: credo di sì",
        body: [
          "To answer a question with an opinion, Italians don't repeat the whole sentence: \"Viene anche Marta?\" \"Credo di sì\" (I think so) / \"Penso di no\" (I don't think so). \"Spero di sì\" and \"Spero di no\" work the same way.",
          "Certainty has its own short answers: \"Sicuramente\", \"Certo\", \"Lo so\". And if you have no idea: \"Non lo so\" or \"Boh!\" (very informal).",
        ],
        examples: [
          { es: "Viene anche Marta? Credo di sì.", en: "Is Marta coming too? I think so." },
          { es: "È aperto domenica? Penso di no.", en: "Is it open on Sunday? I don't think so." },
          { es: "Pioverà? Spero di no!", en: "Will it rain? I hope not!" },
          { es: "Sai dov'è la stazione? Boh, non lo so.", en: "Do you know where the station is? No idea, I don't know." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it open on Sunday? I don't think so.", answer: "È aperto domenica? Penso di no.", altAnswers: ["È aperto domenica? Credo di no.", "È aperto la domenica? Penso di no.", "È aperto la domenica? Credo di no."], explanation: "\"Penso di no\" = I don't think so." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Will it rain? [I hope not]!", sentence: "Pioverà? ___!", answer: "Spero di no", explanation: "\"Spero di no\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know he left yesterday.", answer: "So che è partito ieri.", altAnswers: ["So che ieri è partito."], explanation: "\"Sapere\": indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can see you're tired. (to a friend)", answer: "Vedo che sei stanco.", altAnswers: ["Vedo che sei stanca."], explanation: "\"Vedere\": indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion it's true.", answer: "Secondo me è vero.", altAnswers: ["Per me è vero.", "Secondo me, è vero."], explanation: "\"Secondo me\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In your view, is he right? (to a friend)", answer: "Secondo te ha ragione lui?", altAnswers: ["Secondo te, ha ragione lui?", "Secondo te lui ha ragione?"], explanation: "\"Secondo te\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think she's coming.", answer: "Non credo che venga.", altAnswers: ["Non penso che venga.", "Non credo che lei venga."], explanation: "Doubt: subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're sure the shop is open.", answer: "Siamo sicuri che il negozio è aperto.", altAnswers: ["Siamo sicure che il negozio è aperto."], explanation: "\"Essere sicuri\": indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not sure the shop is open.", answer: "Non sono sicuro che il negozio sia aperto.", altAnswers: ["Non sono sicura che il negozio sia aperto."], explanation: "Doubt: \"sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She said she [is] arriving at eight.", sentence: "Ha detto che ___ alle otto.", answer: "arriva", explanation: "\"Dire che\" reports a fact: indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "For me this pizza [is] the best.", sentence: "Per me questa pizza ___ la migliore.", answer: "è", explanation: "\"Per me\" + indicative." },
      { type: "matching", instructions: "Match each beginning to the mood that follows.", pairs: [{ left: "So che...", right: "indicative: a fact" }, { left: "Penso che...", right: "subjunctive: an opinion" }, { left: "Secondo me...", right: "indicative, no che" }, { left: "Non sono sicuro che...", right: "subjunctive: a doubt" }], explanation: "Fact vs opinion or doubt." },
      { type: "dictation", audio: "So che Marco è simpatico, ma non credo che sia la persona giusta.", explanation: "\"So che è\", \"non credo che sia\"." },
      { type: "speak", text: "Secondo me il film è bellissimo, ma non sono sicura che piaccia a tutti.", prompt: "Say it in Italian (as a woman): In my opinion the film is beautiful, but I'm not sure everyone will like it.", tip: "SI-cu-ra: stress on the first syllable.", explanation: "\"Secondo me è\", \"non sono sicura che piaccia\"." },
    ],
  },
  {
    slug: "b1-drill-opinion-subjunctive",
    level: "IT-B1",
    number: 4,
    title: "Drill: Opinions",
    summary: "Produce penso che, credo che and mi sembra che + subjunctive at speed.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Opinion frames",
        body: [
          "\"Penso che\", \"credo che\", \"immagino che\", \"suppongo che\", \"mi sembra che\", \"mi pare che\", and their negatives \"non penso che\", \"non credo che\": all followed by the subjunctive.",
        ],
        examples: [
          { es: "Credo che Milano sia cara.", en: "I think Milan is expensive." },
          { es: "Mi sembra che tu abbia ragione.", en: "I think you're right." },
          { es: "Non credo che lo sappiano.", en: "I don't think they know." },
          { es: "Immagino che abbiate fame.", en: "I imagine you're hungry. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Milan is expensive.", answer: "Credo che Milano sia cara.", altAnswers: ["Penso che Milano sia cara.", "Mi sembra che Milano sia cara."], explanation: "Cities are feminine: \"cara\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think they know.", answer: "Non credo che lo sappiano.", altAnswers: ["Non penso che lo sappiano.", "Non credo che sappiano."], explanation: "\"Sappiano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I imagine you're hungry. (plural)", answer: "Immagino che abbiate fame.", explanation: "\"Abbiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the food here is better.", answer: "Penso che qui si mangi meglio.", altAnswers: ["Credo che qui si mangi meglio.", "Penso che il cibo qui sia migliore.", "Credo che il cibo qui sia migliore."], explanation: "\"Si mangi\" or \"sia migliore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me that people work too much.", answer: "Mi sembra che la gente lavori troppo.", altAnswers: ["Mi pare che la gente lavori troppo."], explanation: "\"La gente\" is singular: \"lavori\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think public transport works well.", answer: "Non credo che i mezzi pubblici funzionino bene.", altAnswers: ["Non penso che i mezzi pubblici funzionino bene.", "Non credo che i trasporti pubblici funzionino bene."], explanation: "\"Funzionino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think young people read less.", answer: "Credo che i giovani leggano meno.", altAnswers: ["Penso che i giovani leggano meno."], explanation: "\"Leggano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I suppose you know Rome well. (to a friend)", answer: "Suppongo che tu conosca bene Roma.", altAnswers: ["Immagino che tu conosca bene Roma.", "Suppongo che tu conosca Roma bene."], explanation: "\"Conosca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think it's a problem.", answer: "Non credo che sia un problema.", altAnswers: ["Non penso che sia un problema."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the rent is too high.", answer: "Penso che l'affitto sia troppo alto.", altAnswers: ["Credo che l'affitto sia troppo alto.", "Mi sembra che l'affitto sia troppo alto."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me that they're going out together.", answer: "Mi sembra che escano insieme.", altAnswers: ["Mi pare che escano insieme."], explanation: "\"Esca\" → \"escano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think it [is going to rain] this afternoon.", sentence: "Credo che ___ oggi pomeriggio.", answer: "piova", altAnswers: ["pioverà"], explanation: "Subjunctive for the near future: \"piova\". The future \"pioverà\" is also correct after \"credo che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you think he [can] help us? (to a friend)", sentence: "Pensi che ci ___ aiutare?", answer: "possa", explanation: "\"Possa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I imagine they [want] to rest.", sentence: "Immagino che ___ riposare.", answer: "vogliano", explanation: "\"Vogliano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think the museum [closes] at six.", sentence: "Mi pare che il museo ___ alle sei.", answer: "chiuda", explanation: "\"Chiuda\"." },
      { type: "multiple-choice", question: "\"Credo che la gente ___ troppo tempo al telefono.\" (passare)", options: ["passi", "passa", "passino", "passare"], correctIndex: 0, explanation: "\"La gente\" is singular: \"passi\"." },
      { type: "dictation", audio: "Penso che la città sia bella, ma mi sembra che ci sia troppo traffico.", explanation: "\"Sia\", \"ci sia\"." },
      { type: "dictation", audio: "Non credo che vengano, ma spero che chiamino.", explanation: "\"Vengano\", \"chiamino\"." },
      { type: "speak", text: "Credo che Milano sia più cara, ma mi sembra che ci siano più opportunità.", prompt: "Say it in Italian: I think Milan is more expensive, but it seems to me there are more opportunities.", tip: "op-por-tu-ni-TÀ: stress on the last syllable.", explanation: "\"Sia\", \"ci siano\"." },
    ],
  },
  {
    slug: "b1-drill-subjunctive-or-infinitive",
    level: "IT-B1",
    number: 5,
    title: "Drill: Che + Subjunctive or Di + Infinitive?",
    summary: "Decide by subject: penso di andare vs penso che tu vada, at speed.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Who does it?",
        body: [
          "Ask who acts. Same person as the one who thinks: \"di\" + infinitive (\"Credo di sapere la risposta\"). Someone else: \"che\" + subjunctive (\"Credo che lui sappia la risposta\").",
        ],
        examples: [
          { es: "Credo di sapere la risposta.", en: "I think I know the answer." },
          { es: "Credo che lui sappia la risposta.", en: "I think he knows the answer." },
          { es: "Pensano di trasferirsi a Bari.", en: "They're thinking of moving to Bari." },
          { es: "Penso che si trasferiscano a Bari.", en: "I think they're moving to Bari." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I know the answer.", answer: "Credo di sapere la risposta.", altAnswers: ["Penso di sapere la risposta.", "Credo di conoscere la risposta."], explanation: "Same subject." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he knows the answer.", answer: "Credo che lui sappia la risposta.", altAnswers: ["Penso che lui sappia la risposta.", "Credo che sappia la risposta.", "Penso che sappia la risposta."], explanation: "Different subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're thinking of moving to Bari.", answer: "Pensano di trasferirsi a Bari.", explanation: "Same subject: \"di trasferirsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're moving to Bari.", answer: "Penso che si trasferiscano a Bari.", altAnswers: ["Credo che si trasferiscano a Bari."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I need a vacation.", answer: "Credo di avere bisogno di una vacanza.", altAnswers: ["Penso di avere bisogno di una vacanza.", "Credo di aver bisogno di una vacanza.", "Penso di aver bisogno di una vacanza."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you need a vacation. (to a friend)", answer: "Credo che tu abbia bisogno di una vacanza.", altAnswers: ["Penso che tu abbia bisogno di una vacanza."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We think we'll arrive late.", answer: "Pensiamo di arrivare tardi.", altAnswers: ["Crediamo di arrivare tardi.", "Pensiamo di arrivare in ritardo.", "Pensiamo che arriveremo tardi.", "Crediamo che arriveremo tardi.", "Pensiamo che arriveremo in ritardo."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We think the guests will arrive late.", answer: "Pensiamo che gli ospiti arrivino tardi.", altAnswers: ["Crediamo che gli ospiti arrivino tardi.", "Pensiamo che gli ospiti arrivino in ritardo."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She thinks she's always right.", answer: "Crede di avere sempre ragione.", altAnswers: ["Pensa di avere sempre ragione.", "Crede di aver sempre ragione."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me I've seen this film.", answer: "Mi sembra di aver visto questo film.", altAnswers: ["Mi sembra di avere visto questo film.", "Mi pare di aver visto questo film."], explanation: "Same subject, past: \"di aver visto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think [I'll go out] tonight.", sentence: "Non penso ___ stasera.", answer: "di uscire", explanation: "Same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think [you should go out] tonight. (to a friend)", sentence: "Non penso che ___ uscire stasera.", answer: "tu debba", explanation: "Different subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Paolo thinks [he's] ill.", sentence: "Paolo crede ___ malato.", answer: "di essere", explanation: "Paolo thinks about himself." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Paolo's mother thinks [he's] ill.", sentence: "La mamma di Paolo crede che ___ malato.", answer: "sia", explanation: "The mother thinks about Paolo." },
      { type: "multiple-choice", question: "Which is the natural way to say: I think I'm late?", options: ["Penso di essere in ritardo.", "Penso che io sia in ritardo.", "Penso che sono in ritardo.", "Penso essere in ritardo."], correctIndex: 0, explanation: "Same subject: \"di\" + infinitive. \"Penso che io sia\" is grammatical but sounds clumsy to Italians." },
      { type: "multiple-choice", question: "Which is the natural way to say: I think you're late? (to a friend)", options: ["Penso che tu sia in ritardo.", "Penso di essere in ritardo.", "Penso tu di essere in ritardo.", "Penso che sei essere in ritardo."], correctIndex: 0, explanation: "Different subject." },
      { type: "dictation", audio: "Credo di aver perso il telefono. Pensi che sia in macchina?", explanation: "\"Di aver perso\" (same subject), \"che sia\"." },
      { type: "dictation", audio: "Pensiamo di partire presto, ma non credo che i bambini siano pronti.", explanation: "\"Di partire\", \"che siano\"." },
      { type: "speak", text: "Penso di cambiare lavoro, ma mia moglie pensa che sia una pessima idea.", prompt: "Say it in Italian: I'm thinking of changing jobs, but my wife thinks it's a terrible idea.", tip: "PES-si-ma: stress on the first syllable.", explanation: "\"Di cambiare\" vs \"che sia\"." },
    ],
  },
  {
    slug: "b1-spoken-indicative",
    level: "IT-B1",
    number: 6,
    title: "What Italians Say: Penso Che È",
    summary: "The indicative after penso che in casual speech: recognize it, but write the subjunctive.",
    duration: "17 min",
    sections: [
      {
        heading: "What you'll hear",
        body: [
          "In relaxed conversation, many Italians say \"Penso che è vero\" or \"Credo che ha ragione\". It's very common in speech, in every region, and nobody will misunderstand you.",
          "But it's informal: in writing, at work, in an exam like the CILS, and whenever you want to sound educated, use the subjunctive. Our advice: understand the indicative when you hear it, and produce the subjunctive yourself.",
        ],
        examples: [
          { es: "Penso che è vero.", en: "I think it's true. (casual speech)" },
          { es: "Penso che sia vero.", en: "I think it's true. (standard)" },
          { es: "Credo che ha ragione lei.", en: "I think she's right. (casual speech)" },
          { es: "Credo che abbia ragione lei.", en: "I think she's right. (standard)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "You heard \"Credo che ha ragione lei\". Write the standard version: I think she's right.", source: "I think she's right.", answer: "Credo che abbia ragione lei.", altAnswers: ["Penso che abbia ragione lei.", "Credo che lei abbia ragione."], explanation: "Standard: \"abbia\"." },
          { type: "listen-choose", audio: "Penso che è troppo tardi.", question: "What does the speaker mean?", options: ["I think it's too late.", "I know it's too late.", "I hope it's not too late.", "It was too late."], correctIndex: 0, explanation: "Casual indicative, same meaning as \"penso che sia\"." },
        ],
      },
      {
        heading: "The future is a fair choice",
        body: [
          "One indicative after \"penso che\" is fully standard: the future, for something that will happen later. \"Penso che verrà\" (I think he'll come) and \"Credo che domani pioverà\" are correct in any register. The subjunctive \"venga\" / \"piova\" is also fine.",
          "\"Mi sa che\" (I have a feeling that) is a colloquial opinion phrase that always takes the indicative: \"Mi sa che ha ragione lui.\"",
          "The conditional is also standard after \"penso che\" and \"credo che\": \"Penso che sarebbe meglio partire presto\", \"Credo che ti piacerebbe\". It isn't a subjunctive, but it isn't a casual slip either: it adds the would of English. What stays informal is the plain present or the imperfect (\"credo che era\") where the subjunctive belongs.",
        ],
        examples: [
          { es: "Penso che verrà anche Luca.", en: "I think Luca will come too." },
          { es: "Credo che domani pioverà.", en: "I think it'll rain tomorrow." },
          { es: "Mi sa che ha ragione lui.", en: "I have a feeling he's right." },
          { es: "Mi sa che abbiamo sbagliato strada.", en: "I have a feeling we've taken the wrong road." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think it'll rain tomorrow.", answer: "Credo che domani pioverà.", altAnswers: ["Penso che domani pioverà.", "Credo che domani piova.", "Penso che domani piova.", "Credo che pioverà domani."], explanation: "Future indicative or subjunctive: both correct." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a feeling he's right.", answer: "Mi sa che ha ragione lui.", altAnswers: ["Mi sa che lui ha ragione."], explanation: "\"Mi sa che\" + indicative." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "You heard \"Penso che è vero\". Write the standard version: I think it's true.", source: "I think it's true.", answer: "Penso che sia vero.", altAnswers: ["Credo che sia vero."], explanation: "Standard: \"sia\"." },
      { type: "translate", direction: "en-es", prompt: "You heard \"Credo che hanno fame\". Write the standard version: I think they're hungry.", source: "I think they're hungry.", answer: "Credo che abbiano fame.", altAnswers: ["Penso che abbiano fame."], explanation: "\"Abbiano\"." },
      { type: "translate", direction: "en-es", prompt: "You heard \"Mi sembra che fa freddo\". Write the standard version: It seems cold to me.", source: "It seems cold to me.", answer: "Mi sembra che faccia freddo.", altAnswers: ["Mi pare che faccia freddo."], explanation: "\"Faccia\"." },
      { type: "translate", direction: "en-es", prompt: "You heard \"Non credo che viene\". Write the standard version: I don't think he's coming.", source: "I don't think he's coming.", answer: "Non credo che venga.", altAnswers: ["Non penso che venga."], explanation: "\"Venga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Luca will come too.", answer: "Penso che verrà anche Luca.", altAnswers: ["Penso che venga anche Luca.", "Credo che verrà anche Luca.", "Credo che venga anche Luca."], explanation: "Future or subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a feeling we've taken the wrong road.", answer: "Mi sa che abbiamo sbagliato strada.", explanation: "\"Mi sa che\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "You heard \"Penso che sono in ritardo\" about two friends. Write the standard version: I think they're late.", source: "I think they're late.", answer: "Penso che siano in ritardo.", altAnswers: ["Credo che siano in ritardo."], explanation: "\"Siano\"." },
      { type: "fill-blank", prompt: "Write the standard Italian for the bold words.", en: "I think the bar [is] closed.", sentence: "Penso che il bar ___ chiuso.", answer: "sia", explanation: "Standard: \"sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have a feeling it [is] closed.", sentence: "Mi sa che ___ chiuso.", answer: "è", explanation: "\"Mi sa che\" always takes the indicative." },
      { type: "multi-select", question: "Which are correct in a formal email? Choose all that apply.", options: ["Credo che sia possibile.", "Credo che è possibile.", "Penso che arriverà domani.", "Penso che arrivi domani.", "Penso che arriva domani."], correctIndexes: [0, 2, 3], explanation: "Subjunctive, or future for a later event." },
      { type: "dictation", audio: "Mi sa che ha ragione lui, ma credo che sia troppo tardi.", explanation: "\"Mi sa che ha\", \"credo che sia\"." },
      { type: "speak", text: "Credo che sia una buona idea, e penso che verrà anche Luca.", prompt: "Say it in Italian, the standard way: I think it's a good idea, and I think Luca will come too.", tip: "ver-RÀ: stress on the last syllable.", explanation: "Subjunctive, then future." },
    ],
  },
  {
    slug: "b1-error-hunt-opinions",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Opinions",
    summary: "Fix opinion mistakes: penso che è vero (in writing), penso che io sia stanco, secondo me sia vero, sono sicuro che sia.",
    duration: "17 min",
    sections: [
      {
        heading: "Ben's forum post",
        body: [
          "Ben is writing on a forum about life in Italy. His first draft has four types of slip. \"Penso che il cibo è migliore qui\": fine in speech, but in writing use \"sia\". \"Penso che io sia fortunato\": same subject, so \"Penso di essere fortunato\".",
          "\"Secondo me la burocrazia sia lenta\": no trigger after \"secondo me\", so \"è lenta\". \"Sono sicuro che sia difficile\": after certainty, the indicative \"è\" is the clear choice.",
        ],
        examples: [
          { es: "Penso che il cibo sia migliore qui.", en: "I think the food is better here. (not, in writing: è migliore)" },
          { es: "Penso di essere fortunato.", en: "I think I'm lucky. (not: penso che io sia fortunato)" },
          { es: "Secondo me la burocrazia è lenta.", en: "In my opinion the bureaucracy is slow. (not: sia lenta)" },
          { es: "Sono sicuro che è difficile.", en: "I'm sure it's difficult. (better than: che sia)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Ben wrote \"Penso che io sia fortunato\". Write it correctly: I think I'm lucky.", source: "I think I'm lucky.", answer: "Penso di essere fortunato.", altAnswers: ["Credo di essere fortunato.", "Penso di essere fortunata."], explanation: "Same subject: \"di essere\"." },
          { type: "translate", direction: "en-es", prompt: "Ben wrote \"Secondo me la burocrazia sia lenta\". Write it correctly: In my opinion the bureaucracy is slow.", source: "In my opinion the bureaucracy is slow.", answer: "Secondo me la burocrazia è lenta.", altAnswers: ["Per me la burocrazia è lenta.", "Secondo me, la burocrazia è lenta."], explanation: "\"Secondo me\" + indicative." },
        ],
      },
      {
        heading: "Sono sicuro che sia?",
        body: [
          "You will sometimes read \"sono sicuro che sia\" in good Italian, especially in questions or when the speaker isn't really sure (\"Sei sicuro che sia una buona idea?\"). But for a plain statement of certainty, the indicative is clearer and more natural: \"Sono sicuro che è difficile\".",
        ],
        examples: [
          { es: "Sei sicuro che sia una buona idea?", en: "Are you sure it's a good idea?" },
          { es: "Sono sicura che ti piacerà.", en: "I'm sure you'll like it." },
          { es: "So che è vero.", en: "I know it's true. (not: so che sia)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sure you'll like it. (to a friend)", answer: "Sono sicura che ti piacerà.", altAnswers: ["Sono sicuro che ti piacerà."], explanation: "Certainty: indicative future." },
          { type: "multiple-choice", question: "Which needs correcting?", options: ["So che sia vero.", "Penso che sia vero.", "Secondo me è vero.", "Sono sicuro che è vero."], correctIndex: 0, explanation: "\"Sapere\" states a fact: \"so che è\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Ben wrote \"Penso che il cibo è migliore qui\". Write it correctly for the forum: I think the food is better here.", source: "I think the food is better here.", answer: "Penso che il cibo sia migliore qui.", altAnswers: ["Penso che qui il cibo sia migliore.", "Credo che il cibo sia migliore qui."], explanation: "In writing: \"sia\"." },
      { type: "translate", direction: "en-es", prompt: "Ben wrote \"Credo che io parlo meglio adesso\". Write it correctly: I think I speak better now.", source: "I think I speak better now.", answer: "Credo di parlare meglio adesso.", altAnswers: ["Penso di parlare meglio adesso.", "Credo di parlare meglio ora."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Ben wrote \"Secondo me gli italiani siano molto gentili\". Write it correctly: In my opinion Italians are very kind.", source: "In my opinion Italians are very kind.", answer: "Secondo me gli italiani sono molto gentili.", altAnswers: ["Per me gli italiani sono molto gentili.", "Secondo me, gli italiani sono molto gentili."], explanation: "\"Secondo me\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Ben wrote \"So che il treno sia in ritardo\". Write it correctly: I know the train is late.", source: "I know the train is late.", answer: "So che il treno è in ritardo.", explanation: "\"Sapere\": indicative." },
      { type: "translate", direction: "en-es", prompt: "Ben wrote \"Non credo che la vita è più cara\". Write it correctly: I don't think life is more expensive.", source: "I don't think life is more expensive.", answer: "Non credo che la vita sia più cara.", altAnswers: ["Non penso che la vita sia più cara."], explanation: "\"Non credo che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Ben wrote \"Mi sembra che io conosco già tutti\". Write it correctly: I feel I already know everyone.", source: "I feel I already know everyone.", answer: "Mi sembra di conoscere già tutti.", altAnswers: ["Mi pare di conoscere già tutti."], explanation: "Same subject: \"mi sembra di\"." },
      { type: "fill-blank", prompt: "Ben wrote \"che è\". Write the Italian for the bold words.", en: "I think the trains [are] often late.", sentence: "Penso che i treni ___ spesso in ritardo.", answer: "siano", explanation: "\"Siano\"." },
      { type: "fill-blank", prompt: "Ben wrote \"che io torno\". Write the Italian for the bold words.", en: "I think [I'll go back] to England in June.", sentence: "Penso ___ in Inghilterra a giugno.", answer: "di tornare", explanation: "Same subject." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sure he'll understand.", words: ["Sono", "sicuro", "che", "capirà."], translation: "I'm sure he'll understand.", explanation: "Certainty + future." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["Secondo me è vero.", "Secondo me sia vero.", "Penso di avere ragione.", "Penso che io abbia ragione.", "So che è vero.", "Non credo che sia vero."], correctIndexes: [0, 2, 4, 5], explanation: "Check the trigger and the subject." },
      { type: "dictation", audio: "Secondo me la vita qui è bella, e penso di restare.", explanation: "\"Secondo me è\", \"penso di restare\"." },
      { type: "speak", text: "Penso di essere fortunato: secondo me la gente qui è gentile, e credo che il cibo sia il migliore del mondo.", prompt: "Say Ben's corrected post: I think I'm lucky: in my opinion people here are kind, and I think the food is the best in the world.", tip: "for-tu-NA-to.", explanation: "\"Di essere\", \"secondo me è\", \"che sia\"." },
    ],
  },
  {
    slug: "b1-dialogue-lab-debate",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: Which City Is Better?",
    summary: "Friends argue Milano vs Roma: credo che Milano sia più efficiente, ma secondo me Roma è più bella.",
    duration: "17 min",
    sections: [
      {
        heading: "Milano o Roma?",
        body: [
          "Giorgio lives in Milan, Elisa in Rome. They meet in Florence and the eternal argument starts. Giorgio: \"Credo che Milano sia più efficiente: i mezzi funzionano, la gente è puntuale.\" Elisa: \"Può darsi, ma secondo me Roma è più bella. E mi sembra che a Milano tutti abbiano sempre fretta.\"",
          "Giorgio: \"Non credo che sia questione di fretta: è che lavoriamo!\" Elisa: \"Ah sì? E io allora? Non credo che tu sappia quanto lavoro io!\"",
        ],
        examples: [
          { es: "Credo che Milano sia più efficiente.", en: "I think Milan is more efficient." },
          { es: "Secondo me Roma è più bella.", en: "In my opinion Rome is more beautiful." },
          { es: "Mi sembra che a Milano tutti abbiano sempre fretta.", en: "It seems to me everyone in Milan is always in a hurry." },
          { es: "Non credo che tu sappia quanto lavoro io!", en: "I don't think you know how much I work!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Milan is more efficient.", answer: "Credo che Milano sia più efficiente.", altAnswers: ["Penso che Milano sia più efficiente."], explanation: "\"Sia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion Rome is more beautiful.", answer: "Secondo me Roma è più bella.", altAnswers: ["Per me Roma è più bella.", "Secondo me, Roma è più bella."], explanation: "\"Secondo me\" + \"è\"." },
        ],
      },
      {
        heading: "Agreeing and disagreeing",
        body: [
          "Useful debate phrases: \"Hai ragione\" (you're right), \"Sono d'accordo\" / \"Non sono d'accordo\", \"Può darsi\" (maybe), \"Dipende\" (it depends), \"Su questo hai ragione, però...\". The waiter finally settles it: \"Secondo me la città più bella è Firenze!\"",
        ],
        examples: [
          { es: "Su questo hai ragione, però il traffico è terribile.", en: "You're right about that, but the traffic is terrible." },
          { es: "Non sono d'accordo: dipende dal quartiere.", en: "I don't agree: it depends on the neighborhood." },
          { es: "Può darsi, ma non credo che sia così.", en: "Maybe, but I don't think it's like that." },
          { es: "Secondo me la città più bella è Firenze!", en: "In my opinion the most beautiful city is Florence!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't agree: it depends on the neighborhood.", answer: "Non sono d'accordo: dipende dal quartiere.", altAnswers: ["Non sono d'accordo, dipende dal quartiere."], explanation: "\"Dipendere da\"." },
          { type: "listen-choose", audio: "Su questo hai ragione, però il traffico è terribile.", question: "What does the speaker do?", options: ["Partly agrees, then objects.", "Completely agrees.", "Completely disagrees.", "Changes the subject."], correctIndex: 0, explanation: "\"Su questo hai ragione, però...\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me everyone in Milan is always in a hurry.", answer: "Mi sembra che a Milano tutti abbiano sempre fretta.", altAnswers: ["Mi pare che a Milano tutti abbiano sempre fretta."], explanation: "\"Tutti abbiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think you know how much I work! (to a friend)", answer: "Non credo che tu sappia quanto lavoro io!", altAnswers: ["Non penso che tu sappia quanto lavoro io!", "Non credo che tu sappia quanto lavoro!"], explanation: "\"Tu sappia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe, but I don't think it's like that.", answer: "Può darsi, ma non credo che sia così.", altAnswers: ["Può darsi, ma non penso che sia così.", "Forse, ma non credo che sia così."], explanation: "\"Non credo che sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right about that, but the traffic is terrible. (to a friend)", answer: "Su questo hai ragione, però il traffico è terribile.", altAnswers: ["Su questo hai ragione, ma il traffico è terribile."], explanation: "A fact: \"è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think people in Rome are more relaxed.", answer: "Penso che a Roma la gente sia più rilassata.", altAnswers: ["Credo che a Roma la gente sia più rilassata.", "Penso che la gente a Roma sia più rilassata."], explanation: "\"La gente sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion the most beautiful city is Florence!", answer: "Secondo me la città più bella è Firenze!", altAnswers: ["Per me la città più bella è Firenze!"], explanation: "\"Secondo me\" + \"è\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think the trains in Milan [work] better.", sentence: "Credo che a Milano i treni ___ meglio.", answer: "funzionino", explanation: "\"Funzionino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I don't agree]: it depends.", sentence: "___: dipende.", answer: "Non sono d'accordo", explanation: "\"Essere d'accordo\"." },
      { type: "word-order", prompt: "Put the words in order to say: I don't think it's a question of being in a hurry.", words: ["Non", "credo", "che", "sia", "questione", "di", "fretta."], translation: "I don't think it's a question of being in a hurry.", explanation: "\"Non credo che sia\": the doubt takes the subjunctive." },
      { type: "matching", instructions: "Match each phrase to its meaning.", pairs: [{ left: "Può darsi.", right: "Maybe." }, { left: "Dipende.", right: "It depends." }, { left: "Hai ragione.", right: "You're right." }, { left: "Non sono d'accordo.", right: "I don't agree." }], explanation: "Debate phrases." },
      { type: "dictation", audio: "Credo che Milano sia più efficiente, ma secondo me Roma è più bella.", explanation: "\"Credo che sia\" vs \"secondo me è\"." },
      { type: "speak", text: "Su questo hai ragione, però non credo che Milano sia più bella di Roma.", prompt: "Answer Giorgio in Italian: You're right about that, but I don't think Milan is more beautiful than Rome.", tip: "pe-RÒ: stress on the last syllable.", explanation: "Agree in part, then disagree with \"non credo che sia\"." },
    ],
  },
  {
    slug: "b1-reading-lab-opinion-column",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: An Opinion Column",
    summary: "A short column about remote work; find the opinions and the facts.",
    duration: "18 min",
    sections: [
      {
        heading: "Lavorare da casa: una benedizione?",
        body: [
          "From a local newspaper column: \"Da tre anni lavoro da casa due giorni alla settimana. So che molti colleghi lo adorano, e capisco perché: niente traffico, più tempo per la famiglia. Però credo che il lavoro da remoto abbia anche dei lati negativi. Mi sembra che le persone si sentano più sole, e penso che i giovani perdano qualcosa: imparano molto meno se non vedono i colleghi più esperti.\"",
          "Notice the difference: \"So che molti colleghi lo adorano\" is a fact (indicative); \"credo che... abbia\", \"mi sembra che... si sentano\", \"penso che... perdano\" are the writer's opinions (subjunctive).",
        ],
        examples: [
          { es: "So che molti colleghi lo adorano.", en: "I know many colleagues love it." },
          { es: "Credo che il lavoro da remoto abbia anche dei lati negativi.", en: "I believe remote work also has its downsides." },
          { es: "Mi sembra che le persone si sentano più sole.", en: "It seems to me that people feel more lonely." },
          { es: "Penso che i giovani perdano qualcosa.", en: "I think young people are missing out on something." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believe remote work also has its downsides.", answer: "Credo che il lavoro da remoto abbia anche dei lati negativi.", altAnswers: ["Credo che il lavoro da remoto abbia anche lati negativi.", "Penso che il lavoro da remoto abbia anche dei lati negativi."], explanation: "Opinion: \"abbia\"." },
          { type: "multiple-choice", question: "Which sentence in the column states a fact, not an opinion?", options: ["So che molti colleghi lo adorano.", "Credo che abbia dei lati negativi.", "Mi sembra che si sentano più sole.", "Penso che i giovani perdano qualcosa."], correctIndex: 0, explanation: "\"So che\" + indicative." },
        ],
      },
      {
        heading: "The conclusion",
        body: [
          "\"La mia proposta? Secondo me la soluzione migliore è un equilibrio: due o tre giorni in ufficio, il resto a casa. Non penso che sia una rivoluzione, ma credo che possa rendere tutti un po' più felici.\"",
          "\"Secondo me\" + indicative opens the proposal; \"non penso che sia\" and \"credo che possa\" soften it.",
        ],
        examples: [
          { es: "Secondo me la soluzione migliore è un equilibrio.", en: "In my opinion the best solution is a balance." },
          { es: "Non penso che sia una rivoluzione.", en: "I don't think it's a revolution." },
          { es: "Credo che possa rendere tutti un po' più felici.", en: "I believe it could make everyone a bit happier." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion the best solution is a balance.", answer: "Secondo me la soluzione migliore è un equilibrio.", altAnswers: ["Per me la soluzione migliore è un equilibrio."], explanation: "\"Secondo me\" + \"è\"." },
          { type: "dictation", audio: "Non penso che sia una rivoluzione.", explanation: "\"Sia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know many colleagues love it.", answer: "So che molti colleghi lo adorano.", altAnswers: ["So che a molti colleghi piace molto."], explanation: "Fact: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me that people feel more lonely.", answer: "Mi sembra che le persone si sentano più sole.", altAnswers: ["Mi pare che le persone si sentano più sole.", "Mi sembra che la gente si senta più sola."], explanation: "\"Si sentano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think young people are missing out on something.", answer: "Penso che i giovani perdano qualcosa.", altAnswers: ["Credo che i giovani perdano qualcosa."], explanation: "\"Perdano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believe it could make everyone a bit happier.", answer: "Credo che possa rendere tutti un po' più felici.", altAnswers: ["Penso che possa rendere tutti un po' più felici."], explanation: "\"Possa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been working from home two days a week for three years.", answer: "Da tre anni lavoro da casa due giorni alla settimana.", altAnswers: ["Lavoro da casa due giorni alla settimana da tre anni.", "Da tre anni lavoro da casa due giorni a settimana."], explanation: "\"Da\" + present for an ongoing situation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think it's a revolution.", answer: "Non penso che sia una rivoluzione.", altAnswers: ["Non credo che sia una rivoluzione."], explanation: "\"Sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They learn much less if they [don't see] the more experienced colleagues.", sentence: "Imparano molto meno se ___ i colleghi più esperti.", answer: "non vedono", explanation: "After \"se\": indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think remote work [has] its downsides.", sentence: "Credo che il lavoro da remoto ___ dei lati negativi.", answer: "abbia", explanation: "\"Abbia\"." },
      { type: "multiple-choice", question: "What does the columnist propose?", options: ["A mix of office and home days.", "Working only from home.", "Working only in the office.", "Shorter working hours."], correctIndex: 0, explanation: "\"Un equilibrio: due o tre giorni in ufficio, il resto a casa.\"" },
      { type: "multi-select", question: "Which words in the column are subjunctives? Choose all that apply.", options: ["abbia", "sentano", "perdano", "adorano", "sia", "possa"], correctIndexes: [0, 1, 2, 4, 5], explanation: "\"Adorano\" follows \"so che\": indicative." },
      { type: "dictation", audio: "So che molti colleghi lo adorano, ma credo che abbia anche dei lati negativi.", explanation: "Fact, then opinion." },
      { type: "speak", text: "Secondo me lavorare da casa è comodo, ma credo che i giovani perdano qualcosa.", prompt: "Give your view in Italian: In my opinion working from home is convenient, but I think young people miss out on something.", tip: "PER-da-no: stress on the first syllable.", explanation: "\"Secondo me è\", \"credo che perdano\"." },
    ],
  },
  {
    slug: "b1-mission-review",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Restaurant Review",
    summary: "Write an online restaurant review full of opinions: mi sembra che i prezzi siano alti.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Your review",
        body: [
          "Your mission: last night you ate at the Trattoria da Nello in Bologna. Write a short online review with a mix of facts (indicative) and opinions (subjunctive). Facts: \"Il locale è piccolo\", \"Abbiamo ordinato le tagliatelle\". Opinions: \"Penso che le tagliatelle siano le migliori della città\", \"Mi sembra che i prezzi siano un po' alti\".",
          "Use \"secondo me\" for a direct view, \"mi sembra che\" for gentle criticism, and \"non credo che\" for doubts.",
        ],
        examples: [
          { es: "Il locale è piccolo ma accogliente.", en: "The place is small but welcoming." },
          { es: "Penso che le tagliatelle siano le migliori della città.", en: "I think the tagliatelle are the best in town." },
          { es: "Mi sembra che i prezzi siano un po' alti.", en: "The prices seem a bit high to me." },
          { es: "Non credo che il dolce sia fatto in casa.", en: "I don't think the dessert is homemade." },
          { es: "Secondo me vale la pena.", en: "In my opinion it's worth it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The prices seem a bit high to me.", answer: "Mi sembra che i prezzi siano un po' alti.", altAnswers: ["Mi pare che i prezzi siano un po' alti."], explanation: "Gentle criticism: \"mi sembra che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion it's worth it.", answer: "Secondo me vale la pena.", altAnswers: ["Per me vale la pena.", "Secondo me ne vale la pena."], explanation: "\"Secondo me\" + indicative." },
        ],
      },
      {
        heading: "The verdict",
        body: [
          "End with a recommendation: \"Lo consiglio\" (I recommend it), \"Ci tornerò sicuramente\", or \"Non credo che ci tornerò\". Stars: \"quattro stelle su cinque\".",
        ],
        examples: [
          { es: "Lo consiglio a tutti.", en: "I recommend it to everyone." },
          { es: "Ci tornerò sicuramente.", en: "I'll definitely go back." },
          { es: "Quattro stelle su cinque.", en: "Four stars out of five." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I recommend it to everyone.", answer: "Lo consiglio a tutti.", explanation: "\"Consigliare\" = to recommend." },
          { type: "listen-choose", audio: "Ci tornerò sicuramente.", question: "What does the reviewer say?", options: ["They'll definitely go back.", "They'll never go back.", "They went back twice.", "They're not sure."], correctIndex: 0, explanation: "\"Tornerò sicuramente\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The place is small but welcoming.", answer: "Il locale è piccolo ma accogliente.", explanation: "Fact: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the tagliatelle are the best in town.", answer: "Penso che le tagliatelle siano le migliori della città.", altAnswers: ["Credo che le tagliatelle siano le migliori della città."], explanation: "Opinion: \"siano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think the dessert is homemade.", answer: "Non credo che il dolce sia fatto in casa.", altAnswers: ["Non penso che il dolce sia fatto in casa."], explanation: "Doubt: \"sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We ordered the tagliatelle and a mixed salad.", answer: "Abbiamo ordinato le tagliatelle e un'insalata mista.", altAnswers: ["Abbiamo preso le tagliatelle e un'insalata mista."], explanation: "Fact: passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me the waiters are a bit slow.", answer: "Mi sembra che i camerieri siano un po' lenti.", altAnswers: ["Mi pare che i camerieri siano un po' lenti."], explanation: "\"Siano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you should book.", answer: "Penso che sia meglio prenotare.", altAnswers: ["Credo che sia meglio prenotare.", "Secondo me è meglio prenotare.", "Penso che tu debba prenotare.", "Penso che dobbiate prenotare.", "Secondo me conviene prenotare."], explanation: "\"Sia meglio\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think the wine list [is] excellent.", sentence: "Credo che la carta dei vini ___ ottima.", answer: "sia", explanation: "\"Sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In my opinion the portions [are] generous.", sentence: "Secondo me le porzioni ___ abbondanti.", answer: "sono", explanation: "\"Secondo me\" + indicative." },
      { type: "word-order", prompt: "Put the words in order to say: I'll definitely go back.", words: ["Ci", "tornerò", "sicuramente."], translation: "I'll definitely go back.", altOrders: [["Sicuramente", "ci", "tornerò."]], explanation: "\"Ci\" = there." },
      { type: "multiple-choice", question: "Which sentence is a fact, not an opinion?", options: ["Abbiamo pagato 35 euro a testa.", "Penso che sia caro.", "Mi sembra che sia buono.", "Non credo che sia fresco."], correctIndex: 0, explanation: "A fact: indicative." },
      { type: "dictation", audio: "Penso che le tagliatelle siano le migliori della città.", explanation: "\"Siano\"." },
      { type: "speak", text: "Il locale è piccolo, ma secondo me vale la pena: penso che le tagliatelle siano le migliori della città.", prompt: "Read your review aloud: The place is small, but in my opinion it's worth it: I think the tagliatelle are the best in town.", tip: "ta-glia-TEL-le: soft gl.", explanation: "Fact, view, opinion." },
    ],
  },
];

export const IT_B1_U08_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a short post for an Italian forum: is it better to live in a big city or in a small town? Give at least three opinions with penso che / credo che / mi sembra che, one with secondo me, and one fact with so che or sono sicuro che.",
  minWords: 60,
  maxWords: 130,
  rubric: [
    "Uses the present subjunctive after penso che, credo che, mi sembra che and non credo che",
    "Uses di + infinitive when the subject is the same (penso di trasferirmi, credo di avere ragione)",
    "Uses the indicative after secondo me, so che and sono sicuro che",
    "Organizes the post with clear opinions, examples and a conclusion",
  ],
  modelAnswer: "Secondo me è meglio vivere in un piccolo paese. So che in città ci sono più servizi e più lavoro, ma penso che la qualità della vita sia migliore in provincia. Credo che la gente abbia più tempo per parlare e mi sembra che i bambini possano giocare fuori con più libertà. Non credo che l'affitto in città valga lo stress! Certo, sono sicuro che ai giovani piace la vita notturna, e capisco perché. Io però penso di trasferirmi in campagna l'anno prossimo. Voi che cosa ne pensate?",
  explanation: "Opinions take the subjunctive: \"sia\", \"abbia\", \"possano\", \"valga\" (from \"valere\": \"valgo\" → \"valga\"). Facts and certainties take the indicative: \"so che ci sono\", \"sono sicuro che piace\", \"secondo me è\". \"Penso di trasferirmi\" uses \"di\" + infinitive because the writer is the one who will move.",
};
