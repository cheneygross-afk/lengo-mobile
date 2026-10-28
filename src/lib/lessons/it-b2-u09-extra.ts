// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u09-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 9 Extra Practice: Implicit Clauses. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U09_EXTRA: Lesson[] = [
  {
    slug: "b2-implicit-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Past Infinitive",
    summary: "Fresh sentences with dopo, di, per and senza + past infinitive.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Aver fatto, essere andato",
        body: [
          "Same auxiliary as the passato prossimo; \"essere\" verbs agree with the subject; reflexive pronouns attach to \"essere\" (\"essermi\", \"essersi\"); object pronouns attach to \"avere\" (\"averlo\").",
        ],
        examples: [
          { es: "Dopo aver parcheggiato, abbiamo cercato il museo.", en: "After parking, we looked for the museum." },
          { es: "Dopo essere scesa dal treno, ha preso un taxi.", en: "After getting off the train, she took a taxi." },
          { es: "Ti ringrazio di essere venuto.", en: "Thank you for coming." },
          { es: "È partito senza averci avvisato.", en: "He left without letting us know." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After getting off the train, she took a taxi.", answer: "Dopo essere scesa dal treno, ha preso un taxi.", explanation: "\"Scendere\" → \"essere scesa\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you for coming. (to a man)", answer: "Ti ringrazio di essere venuto.", altAnswers: ["Ti ringrazio per essere venuto.", "Grazie di essere venuto.", "Grazie per essere venuto."], explanation: "\"Di / per\" + past infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After parking, we looked for the museum.", answer: "Dopo aver parcheggiato, abbiamo cercato il museo.", altAnswers: ["Dopo avere parcheggiato, abbiamo cercato il museo."], explanation: "\"Aver parcheggiato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He left without letting us know.", answer: "È partito senza averci avvisato.", altAnswers: ["È partito senza avvisarci.", "Se n'è andato senza averci avvisato.", "È partito senza averci avvisati."], explanation: "\"Ci\" on \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After moving to Florence, they opened a bookstore.", answer: "Dopo essersi trasferiti a Firenze, hanno aperto una libreria.", altAnswers: ["Dopo essersi trasferite a Firenze, hanno aperto una libreria."], explanation: "\"Essersi trasferiti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry I lost your umbrella. (to a friend)", answer: "Mi dispiace di aver perso il tuo ombrello.", altAnswers: ["Mi dispiace di avere perso il tuo ombrello.", "Mi dispiace aver perso il tuo ombrello."], explanation: "\"Di aver perso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After listening to the news, Grandma turned off the radio.", answer: "Dopo aver ascoltato il telegiornale, la nonna ha spento la radio.", altAnswers: ["Dopo aver ascoltato le notizie, la nonna ha spento la radio.", "Dopo aver ascoltato il giornale radio, la nonna ha spento la radio."], explanation: "\"Aver ascoltato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She was praised for having solved the problem.", answer: "È stata lodata per aver risolto il problema.", altAnswers: ["È stata elogiata per aver risolto il problema.", "L'hanno lodata per aver risolto il problema."], explanation: "\"Per aver risolto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After washing, the children went to bed.", answer: "Dopo essersi lavati, i bambini sono andati a letto.", altAnswers: ["Dopo essersi lavati, i bambini sono andati a dormire."], explanation: "Reflexive \"lavarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I left the gas on.", answer: "Credo di aver lasciato il gas acceso.", altAnswers: ["Penso di aver lasciato il gas acceso.", "Credo di avere lasciato il gas acceso."], explanation: "\"Di\" + past infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[After going up] the tower, we admired the view.", sentence: "___ sulla torre, abbiamo ammirato il panorama.", answer: "Dopo essere saliti", altAnswers: ["Dopo essere salite"], explanation: "\"Salire\" → \"essere saliti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's happy [to have met] her.", sentence: "È felice di ___.", answer: "averla conosciuta", altAnswers: ["averla incontrata"], explanation: "\"La\" + agreement." },
      { type: "word-order", prompt: "Put the words in order to say: After putting on my coat, I went out.", words: ["Dopo", "essermi", "messo", "il", "cappotto,", "sono", "uscito."], translation: "After putting on my coat, I went out.", explanation: "\"Mettersi\" → \"essermi messo\"." },
      { type: "multiple-choice", question: "Which completes \"Dopo ___ a casa, ho acceso il camino\"?", options: ["essere tornato", "aver tornato", "tornare", "essendo tornato"], correctIndex: 0, explanation: "\"Tornare\" → \"essere\"." },
      { type: "listen-choose", audio: "Credo di aver lasciato il gas acceso, devo tornare a casa!", question: "Why does the speaker have to go home?", options: ["The gas may still be on.", "They forgot their keys.", "Someone is waiting.", "It's going to rain."], correctIndex: 0, explanation: "\"Il gas acceso\"." },
      { type: "dictation", audio: "Dopo essersi trasferiti a Firenze, hanno aperto una libreria.", explanation: "Reflexive past infinitive." },
      { type: "speak", text: "Ti ringrazio di essere venuta e scusami per averti fatto aspettare.", prompt: "Say it in Italian (to a woman): Thank you for coming, and sorry for keeping you waiting.", tip: "\"Averti fatto aspettare\": pronoun on \"avere\".", explanation: "Two past infinitives." },
    ],
  },
  {
    slug: "b2-implicit-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Past Gerund and Participle",
    summary: "Fresh sentences with avendo / essendo + participle and absolute participles.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Avendo fatto, fatto",
        body: [
          "Past gerund: cause or earlier action, same subject. Absolute participle: agrees with the object (avere verbs) or the subject (essere verbs).",
        ],
        examples: [
          { es: "Avendo dimenticato l'ombrello, mi sono bagnato.", en: "Having forgotten my umbrella, I got wet." },
          { es: "Essendo nata in Sardegna, ama il mare.", en: "Having been born in Sardinia, she loves the sea." },
          { es: "Chiusa la porta, ha spento la luce.", en: "Having closed the door, he switched off the light." },
          { es: "Arrivate le vacanze, la città si svuota.", en: "Once vacation season arrives, the city empties." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having forgotten my umbrella, I got wet. (a man speaking)", answer: "Avendo dimenticato l'ombrello, mi sono bagnato.", altAnswers: ["Essendomi dimenticato l'ombrello, mi sono bagnato."], explanation: "\"Avendo dimenticato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having closed the door, he switched off the light.", answer: "Chiusa la porta, ha spento la luce.", altAnswers: ["Dopo aver chiuso la porta, ha spento la luce.", "Avendo chiuso la porta, ha spento la luce."], explanation: "\"Chiusa\" agrees with \"la porta\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having been born in Sardinia, she loves the sea.", answer: "Essendo nata in Sardegna, ama il mare.", altAnswers: ["Nata in Sardegna, ama il mare."], explanation: "\"Nascere\" → \"essendo nata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once vacation season arrives, the city empties.", answer: "Arrivate le vacanze, la città si svuota.", altAnswers: ["Una volta arrivate le vacanze, la città si svuota."], explanation: "\"Arrivate\" agrees with \"le vacanze\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having trained hard, the team won the final.", answer: "Essendosi allenata duramente, la squadra ha vinto la finale.", altAnswers: ["Essendosi allenata tanto, la squadra ha vinto la finale.", "Essendosi allenata molto, la squadra ha vinto la finale."], explanation: "Reflexive past gerund: \"essendosi allenata\" agrees with \"la squadra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once the cake was baked, we let it cool.", answer: "Cotta la torta, l'abbiamo lasciata raffreddare.", altAnswers: ["Una volta cotta la torta, l'abbiamo lasciata raffreddare.", "Cotta la torta, l'abbiamo fatta raffreddare."], explanation: "\"Cotta\" agrees with \"la torta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not having found a hotel, we slept in the car.", answer: "Non avendo trovato un albergo, abbiamo dormito in macchina.", altAnswers: ["Non avendo trovato un hotel, abbiamo dormito in macchina.", "Non avendo trovato un albergo, abbiamo dormito in auto."], explanation: "\"Non avendo trovato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once the guests had left, we went to sleep.", answer: "Partiti gli ospiti, siamo andati a dormire.", altAnswers: ["Andati via gli ospiti, siamo andati a dormire.", "Una volta partiti gli ospiti, siamo andati a dormire.", "Andati via gli ospiti, siamo andati a letto."], explanation: "\"Partiti\" agrees with \"gli ospiti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having already eaten, she only had a coffee.", answer: "Avendo già mangiato, ha preso solo un caffè.", altAnswers: ["Avendo già mangiato, ha bevuto solo un caffè.", "Avendo già pranzato, ha preso solo un caffè."], explanation: "\"Avendo già mangiato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once the windows were opened, the room cooled down.", answer: "Aperte le finestre, la stanza si è rinfrescata.", altAnswers: ["Una volta aperte le finestre, la stanza si è rinfrescata.", "Aperte le finestre, la camera si è rinfrescata."], explanation: "\"Aperte\" agrees with \"le finestre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having fallen asleep] on the train, he missed his stop.", sentence: "___ in treno, ha saltato la fermata.", answer: "Essendosi addormentato", altAnswers: ["Addormentatosi"], explanation: "Reflexive past gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Once the tickets were bought], we went in.", sentence: "___, siamo entrati.", answer: "Comprati i biglietti", altAnswers: ["Una volta comprati i biglietti", "Presi i biglietti"], explanation: "\"Comprati\" agrees with \"i biglietti\"." },
      { type: "matching", instructions: "Match each beginning to its ending.", pairs: [{ left: "Finita la partita,", right: "i tifosi sono usciti." }, { left: "Avendo perso il portafoglio,", right: "ha chiamato la polizia." }, { left: "Essendo partite tardi,", right: "le ragazze sono arrivate a mezzanotte." }, { left: "Scritte le cartoline,", right: "le abbiamo spedite." }], explanation: "Each implicit clause shares its logic with the main clause." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Essendo usciti presto, abbiamo trovato parcheggio.", "Avendo usciti presto, abbiamo trovato parcheggio.", "Avendo uscito presto, abbiamo trovato parcheggio.", "Essendo uscito presto, abbiamo trovato parcheggio."], correctIndex: 0, explanation: "\"Uscire\" → \"essendo usciti\" (noi)." },
      { type: "listen-choose", audio: "Non avendo trovato un albergo, abbiamo dormito in macchina.", question: "Where did they sleep?", options: ["In the car.", "At a friend's.", "In a campsite.", "At the station."], correctIndex: 0, explanation: "\"In macchina\"." },
      { type: "dictation", audio: "Cotta la torta, l'abbiamo lasciata raffreddare.", explanation: "\"Cotta\": agreement." },
      { type: "speak", text: "Essendo nata in Sardegna, ama il mare, e, finito il lavoro, va sempre in spiaggia.", prompt: "Say it in Italian: Having been born in Sardinia, she loves the sea, and once work is over, she always goes to the beach.", tip: "\"Essendo nata\" and \"finito il lavoro\".", explanation: "Past gerund and participle together." },
    ],
  },
  {
    slug: "b2-implicit-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Mixed",
    summary: "Fresh sentences mixing all three implicit forms, with pronouns and with explicit alternatives.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Choose the form",
        body: [
          "Past infinitive for after / for / without; past gerund for cause in writing; absolute participle for once X was done; explicit clause when the subjects differ.",
        ],
        examples: [
          { es: "Dopo averglielo detto, mi sono sentito meglio.", en: "After telling him, I felt better." },
          { es: "Avendolo già visto, non è venuta al cinema.", en: "Having already seen it, she didn't come to the movies." },
          { es: "Salutati gli amici, siamo partiti.", en: "Having said goodbye to our friends, we left." },
          { es: "Dopo che Luca è arrivato, abbiamo cominciato.", en: "After Luca arrived, we started." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After telling him, I felt better. (a man speaking)", answer: "Dopo averglielo detto, mi sono sentito meglio.", altAnswers: ["Dopo avergli parlato, mi sono sentito meglio.", "Dopo averglielo detto mi sono sentito meglio."], explanation: "\"Gli\" + \"lo\" on \"avere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After Luca arrived, we started.", answer: "Dopo che Luca è arrivato, abbiamo cominciato.", altAnswers: ["Dopo che è arrivato Luca, abbiamo cominciato.", "Arrivato Luca, abbiamo cominciato.", "Quando è arrivato Luca, abbiamo cominciato.", "Dopo che Luca è arrivato, abbiamo iniziato."], explanation: "Different subjects: explicit or absolute participle." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having already seen it, she didn't come to the movies.", answer: "Avendolo già visto, non è venuta al cinema.", altAnswers: ["Avendo già visto il film, non è venuta al cinema."], explanation: "\"Lo\" on \"avendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having said goodbye to our friends, we left.", answer: "Salutati gli amici, siamo partiti.", altAnswers: ["Dopo aver salutato gli amici, siamo partiti.", "Salutati gli amici, siamo partite.", "Salutati gli amici, ce ne siamo andati."], explanation: "\"Salutati\" agrees with \"gli amici\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After writing to her, I waited for an answer.", answer: "Dopo averle scritto, ho aspettato una risposta.", altAnswers: ["Dopo averle scritto, ho atteso una risposta."], explanation: "\"Le\" (to her): no agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once the film was over, everyone applauded.", answer: "Finito il film, tutti hanno applaudito.", altAnswers: ["Una volta finito il film, tutti hanno applaudito.", "Finito il film, hanno applaudito tutti."], explanation: "\"Finito\" agrees with \"il film\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having never driven in Rome, I was very nervous. (a woman speaking)", answer: "Non avendo mai guidato a Roma, ero molto nervosa.", altAnswers: ["Non avendo mai guidato a Roma, ero nervosissima.", "Siccome non avevo mai guidato a Roma, ero molto nervosa."], explanation: "\"Non avendo mai guidato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After she went to bed, I watched the match.", answer: "Dopo che lei è andata a letto, ho guardato la partita.", altAnswers: ["Dopo che è andata a letto, ho guardato la partita.", "Andata lei a letto, ho guardato la partita.", "Quando è andata a letto, ho guardato la partita."], explanation: "Different subjects → explicit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were arrested for having stolen a car.", answer: "Sono stati arrestati per aver rubato una macchina.", altAnswers: ["Sono stati arrestati per avere rubato una macchina.", "Li hanno arrestati per aver rubato una macchina.", "Sono stati arrestati per aver rubato un'auto."], explanation: "\"Per aver rubato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once she'd found the keys, she opened the door.", answer: "Trovate le chiavi, ha aperto la porta.", altAnswers: ["Una volta trovate le chiavi, ha aperto la porta.", "Dopo aver trovato le chiavi, ha aperto la porta."], explanation: "\"Trovate\" agrees with \"le chiavi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having lived there] for years, we know every street.", sentence: "___ per anni, conosciamo ogni strada.", answer: "Avendoci vissuto", altAnswers: ["Avendoci abitato"], explanation: "\"Ci\" attached to the gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having lent it to her], I no longer have the car.", sentence: "___, non ho più la macchina.", answer: "Avendogliela prestata", explanation: "\"Le\" + \"la\" → \"gliela\"; agreement with \"la\"." },
      { type: "multi-select", question: "Which sentences are correct?", options: ["Dopo averlo visto, l'ho chiamato.", "Dopo che ho visto lui, l'ho chiamato.", "Dopo vederlo, l'ho chiamato.", "Vistolo, l'ho chiamato."], correctIndexes: [0, 1, 3], explanation: "\"Dopo vederlo\" needs the past infinitive." },
      { type: "multiple-choice", question: "Which form sounds most natural in everyday conversation?", options: ["Dopo aver mangiato, siamo usciti.", "Essendo stati mangiati, siamo usciti.", "Mangiatolo, siamo usciti.", "Avendo noi mangiato, uscimmo."], correctIndex: 0, explanation: "\"Dopo aver\" is common in speech." },
      { type: "listen-choose", audio: "Non avendo mai guidato a Roma, ero nervosissima.", question: "Why was the speaker nervous?", options: ["She'd never driven in Rome.", "She'd lost her license.", "She was late.", "Her car was new."], correctIndex: 0, explanation: "\"Non avendo mai guidato\"." },
      { type: "dictation", audio: "Trovate le chiavi, ha aperto la porta ed è entrata.", explanation: "\"Trovate\": agreement." },
      { type: "speak", text: "Dopo averglielo detto, mi sono sentito meglio, e, finita la cena, siamo andati a fare due passi.", prompt: "Say it in Italian (a man speaking): After telling him, I felt better, and once dinner was over, we went for a stroll.", tip: "\"Fare due passi\" = to go for a short walk.", explanation: "Pronouns + absolute participle." },
    ],
  },
];
