// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u28-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 28 Extra Practice: Opinions and Debate. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U28_EXTRA: Lesson[] = [
  {
    slug: "b1-debate-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Agreeing and Disagreeing",
    summary: "Fresh exchanges on food, cities, technology and school: agree, disagree and say why.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Quick exchanges",
        body: [
          "Mix the phrases you know: \"Sono d'accordo\", \"La penso come te\", \"Appunto!\", \"Non la vedo così\", \"Mah, non saprei\" (I'm not sure), \"Sì, però\". Always add a short reason: \"perché\", \"anche perché\", \"visto che\" (seeing that).",
        ],
        examples: [
          { es: "La pizza a Napoli è la migliore. Appunto!", en: "Pizza in Naples is the best. Exactly!" },
          { es: "Mah, non saprei, anche a Roma è buonissima.", en: "Well, I'm not sure, it's great in Rome too." },
          { es: "Non la vedo così, visto che i prezzi sono raddoppiati.", en: "I don't see it that way, seeing that prices have doubled." },
          { es: "Sono d'accordo, anche perché ormai lo fanno tutti.", en: "I agree, also because everyone does it now." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Well, I'm not sure.", answer: "Mah, non saprei.", altAnswers: ["Mah, non lo so.", "Mah, non so."], explanation: "\"Non saprei\": a soft conditional." },
          { type: "listen-choose", audio: "Non la vedo così, visto che i prezzi sono raddoppiati.", question: "Why does the speaker disagree?", options: ["Prices have doubled.", "Prices have fallen.", "The place is too far.", "Nobody goes there."], correctIndex: 0, explanation: "\"Raddoppiare\" = to double." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I agree, also because it's healthier.", answer: "Sono d'accordo, anche perché è più sano.", altAnswers: ["Sono d'accordo, anche perché fa meglio alla salute."], explanation: "\"Anche perché\" adds a reason." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't see it that way, seeing that it costs a lot.", answer: "Non la vedo così, visto che costa molto.", altAnswers: ["Non la vedo così, dato che costa molto.", "Non la vedo così, visto che costa tanto."], explanation: "\"Visto che\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you're right. (to a friend)", answer: "Penso che tu abbia ragione.", altAnswers: ["Credo che tu abbia ragione.", "Secondo me hai ragione."], explanation: "Subjunctive \"abbia\" with \"tu\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think the city is dangerous.", answer: "Non penso che la città sia pericolosa.", altAnswers: ["Non credo che la città sia pericolosa."], explanation: "Doubt: subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, but you can't generalize.", answer: "Sì, però non si può generalizzare.", altAnswers: ["Sì, ma non si può generalizzare."], explanation: "Impersonal \"si può\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We all think the same.", answer: "La pensiamo tutti allo stesso modo.", altAnswers: ["La pensiamo tutti uguale.", "Siamo tutti d'accordo."], explanation: "\"Pensarla\" with \"noi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're wrong, in my opinion. (to a friend)", answer: "Secondo me hai torto.", altAnswers: ["Hai torto, secondo me.", "Per me hai torto."], explanation: "\"Avere torto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Exactly], that's what I said!", sentence: "___, è quello che ho detto!", answer: "Appunto", altAnswers: ["Esatto", "Esattamente"], explanation: "\"Appunto\" confirms your own point." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt he [is coming].", sentence: "Dubito che ___.", answer: "venga", explanation: "Subjunctive of \"venire\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm with you] on this.", sentence: "___ su questo.", answer: "Sono con te", altAnswers: ["Sono d'accordo con te"], explanation: "\"Essere con qualcuno\" = to side with." },
      { type: "word-order", prompt: "Put the words in order to say: I don't think it's a problem.", words: ["Non", "credo", "che", "sia", "un", "problema."], translation: "I don't think it's a problem.", explanation: "Subjunctive after \"non credo che\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "Non saprei.", right: "I'm not sure." }, { left: "Appunto!", right: "Precisely!" }, { left: "Hai torto.", right: "You're wrong." }, { left: "Non direi.", right: "I wouldn't say so." }, { left: "Sono con te.", right: "I'm with you." }], explanation: "Short reactions." },
      { type: "multiple-choice", question: "\"I treni italiani sono sempre in ritardo.\" Which reply disagrees politely?", options: ["Mah, non direi, il Frecciarossa è quasi sempre puntuale.", "Appunto!", "Esatto, sempre.", "Hai ragione."], correctIndex: 0, explanation: "\"Non direi\" + a counter-example." },
      { type: "dictation", audio: "Mah, non saprei, anche a Roma è buonissima.", explanation: "\"Non saprei\": conditional." },
      { type: "speak", text: "Mah, non direi. Secondo me in città si vive bene, anche perché c'è tutto.", prompt: "Disagree and give a reason: Well, I wouldn't say so. I think life in the city is good, also because there's everything.", tip: "Let \"mah\" fall and pause after it.", explanation: "Soft disagreement + reason." },
    ],
  },
  {
    slug: "b1-debate-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Conceding",
    summary: "Fresh exchanges where you grant a point and keep your position.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Grant, then turn",
        body: [
          "Pattern: concession + turn + reason. \"È vero che la bici è scomoda d'inverno, ma è il mezzo più veloce in centro\". \"Ammetto che ... però\", \"Non nego che ... ma\" (I don't deny that), \"Sarà anche vero, ma\" (that may be true, but).",
        ],
        examples: [
          { es: "È vero che la bici è scomoda d'inverno, ma è veloce.", en: "It's true the bike is uncomfortable in winter, but it's fast." },
          { es: "Non nego che ci siano dei rischi, ma i vantaggi sono di più.", en: "I don't deny there are risks, but the advantages outweigh them." },
          { es: "Sarà anche vero, ma io non mi fido.", en: "That may be true, but I don't trust it." },
          { es: "Ammetto che è comodo, però costa troppo.", en: "I admit it's convenient, but it costs too much." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't deny there [are] risks.", sentence: "Non nego che ci ___ dei rischi.", answer: "siano", explanation: "\"Non negare che\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That may be true, but I don't trust it.", answer: "Sarà anche vero, ma io non mi fido.", altAnswers: ["Sarà anche vero, però io non mi fido.", "Sarà vero, ma non mi fido."], explanation: "Future of probability: \"sarà\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true it's cold, but the sea is beautiful.", answer: "È vero che fa freddo, ma il mare è bellissimo.", altAnswers: ["È vero che fa freddo, però il mare è bellissimo."], explanation: "\"Fare freddo\" for weather." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I admit it's convenient, but it costs too much.", answer: "Ammetto che è comodo, però costa troppo.", altAnswers: ["Ammetto che è comodo, ma costa troppo.", "Ammetto che sia comodo, però costa troppo."], explanation: "Concede, then turn." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although it's late, let's finish the work.", answer: "Benché sia tardi, finiamo il lavoro.", altAnswers: ["Anche se è tardi, finiamo il lavoro.", "Sebbene sia tardi, finiamo il lavoro."], explanation: "\"Benché\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the price, many people buy it.", answer: "Nonostante il prezzo, molte persone lo comprano.", altAnswers: ["Nonostante il prezzo, molti lo comprano.", "Malgrado il prezzo, molte persone lo comprano."], explanation: "\"Nonostante\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're not completely wrong, but... (to a friend)", answer: "Non hai tutti i torti, però...", altAnswers: ["Non hai tutti i torti, ma...", "Non hai completamente torto, però..."], explanation: "\"Non hai tutti i torti\": a soft concession." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Even if you're right, it's too late now. (to a friend)", answer: "Anche se hai ragione, ormai è troppo tardi.", altAnswers: ["Anche se hai ragione, adesso è troppo tardi.", "Anche se hai ragione, ora è troppo tardi."], explanation: "\"Ormai\" = by now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll grant you that.", answer: "Su questo ti do ragione.", altAnswers: ["Ti do ragione su questo.", "Questo te lo concedo."], explanation: "\"Dare ragione\" or \"concedere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although he [works] a lot, he earns little.", sentence: "Sebbene ___ molto, guadagna poco.", answer: "lavori", explanation: "\"Sebbene\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[That may be true], but I'm not convinced.", sentence: "___, ma non sono convinto.", answer: "Sarà anche vero", altAnswers: ["Sarà vero", "Sarà"], explanation: "Future of probability for concession." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Even though] it's raining, we're going.", sentence: "___ piove, andiamo.", answer: "Anche se", explanation: "Indicative \"piove\" → \"anche se\"." },
      { type: "word-order", prompt: "Put the words in order to say: I don't deny it's useful, but...", words: ["Non", "nego", "che", "sia", "utile,", "ma..."], translation: "I don't deny it's useful, but...", explanation: "Subjunctive after \"non nego che\"." },
      { type: "matching", instructions: "Match the connector to the mood it takes.", pairs: [{ left: "anche se", right: "indicative" }, { left: "benché", right: "subjunctive" }, { left: "è vero che", right: "indicative (a fact)" }, { left: "nonostante + noun", right: "no verb" }], explanation: "Concession connectors." },
      { type: "multiple-choice", question: "\"Sarà anche vero, ma ...\" expresses ...", options: ["a reluctant concession", "a prediction", "enthusiasm", "a question"], correctIndex: 0, explanation: "Future of probability: it may be true." },
      { type: "dictation", audio: "Non nego che ci siano dei rischi, ma i vantaggi sono di più.", explanation: "\"Siano\": subjunctive after \"non nego che\"." },
      { type: "speak", text: "Ammetto che la bici è scomoda d'inverno, però in centro è il mezzo più veloce.", prompt: "Concede and turn: I admit the bike is uncomfortable in winter, but in the center it's the fastest way to get around.", tip: "Pause before \"però\".", explanation: "Concession + turn + reason." },
    ],
  },
  {
    slug: "b1-debate-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Opinion Paragraphs",
    summary: "Build short opinion paragraphs: position, two arguments, a concession and a conclusion.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A five-step paragraph",
        body: [
          "1) Position: \"Secondo me ...\". 2) First argument: \"Innanzitutto ...\" (first of all). 3) Second: \"Inoltre ...\". 4) Concession: \"È vero che ..., ma ...\". 5) Conclusion: \"Per questo motivo ...\" / \"In conclusione ...\". This shape works for CILS writing tasks too.",
        ],
        examples: [
          { es: "Secondo me la settimana corta sarebbe una buona idea.", en: "I think a four-day week would be a good idea." },
          { es: "Innanzitutto, le persone sarebbero meno stressate.", en: "First of all, people would be less stressed." },
          { es: "Inoltre, si consumerebbe meno energia.", en: "Moreover, less energy would be used." },
          { es: "Per questo motivo sono favorevole.", en: "For this reason I'm in favor." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, people would be less stressed.", answer: "Innanzitutto, le persone sarebbero meno stressate.", altAnswers: ["Prima di tutto, le persone sarebbero meno stressate.", "Innanzitutto le persone sarebbero meno stressate."], explanation: "Conditional for a hypothetical benefit." },
          { type: "listen-choose", audio: "Per questo motivo sono favorevole.", question: "Which part of the paragraph is this?", options: ["the conclusion", "the first argument", "the concession", "the introduction of a counter-argument"], correctIndex: 0, explanation: "\"Per questo motivo\" = for this reason." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion a four-day week would be a good idea.", answer: "Secondo me la settimana corta sarebbe una buona idea.", altAnswers: ["Secondo me la settimana di quattro giorni sarebbe una buona idea.", "Per me la settimana corta sarebbe una buona idea."], explanation: "Conditional for a hypothesis." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Moreover, less energy would be used.", answer: "Inoltre, si consumerebbe meno energia.", altAnswers: ["Inoltre si consumerebbe meno energia.", "Inoltre, si userebbe meno energia."], explanation: "Si + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true that some companies would lose money.", answer: "È vero che alcune aziende perderebbero soldi.", altAnswers: ["È vero che alcune aziende perderebbero denaro.", "È vero che qualche azienda perderebbe soldi."], explanation: "Concession with a conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For this reason I'm in favor.", answer: "Per questo motivo sono favorevole.", altAnswers: ["Per questo sono favorevole.", "Per questa ragione sono favorevole."], explanation: "Conclusion connector." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In conclusion, I think it's worth trying.", answer: "In conclusione, penso che valga la pena provare.", altAnswers: ["In conclusione, credo che valga la pena provare.", "In conclusione, secondo me vale la pena provare.", "In conclusione, penso che valga la pena di provare."], explanation: "\"Valere la pena\": subjunctive \"valga\" after \"penso che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, it's cheaper.", answer: "Innanzitutto, costa meno.", altAnswers: ["Innanzitutto, è più economico.", "Prima di tutto, costa meno."], explanation: "\"Innanzitutto\" opens the list." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[On the other hand], some people prefer the office.", sentence: "___, alcune persone preferiscono l'ufficio.", answer: "D'altra parte", altAnswers: ["Dall'altro lato", "Invece"], explanation: "Introduces the other side." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think it [would be] fair.", sentence: "Penso che ___ giusto.", answer: "sarebbe", altAnswers: ["sia"], explanation: "Conditional (hypothetical) or subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[To conclude], it's a good idea.", sentence: "___, è una buona idea.", answer: "In conclusione", altAnswers: ["Per concludere", "Insomma"], explanation: "Closing connector." },
      { type: "word-order", prompt: "Put the words in order to say: For this reason I'm against it.", words: ["Per", "questo", "motivo", "sono", "contrario."], translation: "For this reason I'm against it.", explanation: "\"Contrario\" = against." },
      { type: "matching", instructions: "Match each connector to its job.", pairs: [{ left: "Innanzitutto", right: "first argument" }, { left: "Inoltre", right: "adding an argument" }, { left: "È vero che ..., ma", right: "concession" }, { left: "Per questo motivo", right: "conclusion" }], explanation: "The five-step paragraph." },
      { type: "multiple-choice", question: "Which sentence would be a good position statement?", options: ["Secondo me i compiti a casa andrebbero ridotti.", "Inoltre ci sono altri motivi.", "Per questo motivo.", "È vero, ma."], correctIndex: 0, explanation: "A clear opinion with \"secondo me\"." },
      { type: "multiple-choice", question: "\"Non solo è economico, ma anche ___.\" Which completes it naturally?", options: ["comodo", "caro", "inutile", "lontano"], correctIndex: 0, explanation: "\"Non solo ... ma anche\" adds a second positive point." },
      { type: "dictation", audio: "Innanzitutto costa meno; inoltre fa bene all'ambiente.", explanation: "Two arguments, two connectors." },
      { type: "speak", text: "Secondo me la settimana corta sarebbe una buona idea. Innanzitutto le persone sarebbero meno stressate; inoltre si consumerebbe meno energia. È vero che alcune aziende avrebbero dei problemi, ma i vantaggi sono di più. Per questo motivo sono favorevole.", prompt: "Give a short opinion paragraph aloud: position, two arguments, a concession, conclusion.", tip: "Mark each connector with a slight pause.", explanation: "The five-step structure." },
    ],
  },
];
