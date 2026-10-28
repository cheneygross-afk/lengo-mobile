// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u17-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 17 Extra Practice: The Gerund. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U17_EXTRA: Lesson[] = [
  {
    slug: "b1-gerund-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Gerund Uses",
    summary: "Fresh sentences with the gerund for manner, means, time, cause and condition.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "How, by, while, since, if",
        body: [
          "One form, five jobs: how (\"è uscita piangendo\"), by (\"ho risparmiato rinunciando alla macchina\"), while (\"passeggiando, ho visto ...\"), since (\"essendo domenica, ...\"), if (\"continuando così, ...\"). Same subject as the main verb.",
        ],
        examples: [
          { es: "È uscita piangendo.", en: "She went out in tears." },
          { es: "Ho risparmiato rinunciando alla macchina.", en: "I saved money by giving up the car." },
          { es: "Essendo domenica, i negozi erano chiusi.", en: "It being Sunday, the shops were closed." },
          { es: "Continuando così, finirai in ospedale.", en: "If you carry on like this, you'll end up in hospital." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I saved money by giving up the car.", answer: "Ho risparmiato rinunciando alla macchina.", altAnswers: ["Ho risparmiato soldi rinunciando alla macchina.", "Ho risparmiato rinunciando all'auto."], explanation: "\"Rinunciare a\" = to give up; means: gerund." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you carry on like this, you'll end up in hospital. (to a friend)", answer: "Continuando così, finirai in ospedale.", altAnswers: ["Se continui così, finirai in ospedale.", "Continuando così, finisci in ospedale."], explanation: "Condition: gerund." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She went out in tears.", answer: "È uscita piangendo.", altAnswers: ["Lei è uscita piangendo."], explanation: "Manner: \"piangendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It being Sunday, the shops were closed.", answer: "Essendo domenica, i negozi erano chiusi.", altAnswers: ["Siccome era domenica, i negozi erano chiusi."], explanation: "Cause: \"essendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Walking along the river, we saw a heron.", answer: "Passeggiando lungo il fiume, abbiamo visto un airone.", altAnswers: ["Camminando lungo il fiume, abbiamo visto un airone."], explanation: "Time: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She paid for university by working in a bar.", answer: "Si è pagata l'università lavorando in un bar.", altAnswers: ["Ha pagato l'università lavorando in un bar.", "Si è pagata gli studi lavorando in un bar."], explanation: "Means: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not knowing the answer, I said nothing.", answer: "Non sapendo la risposta, non ho detto niente.", altAnswers: ["Non sapendo la risposta, non ho detto nulla.", "Siccome non sapevo la risposta, non ho detto niente."], explanation: "\"Non\" before the gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having lived in Rome, he knows the city well.", answer: "Avendo vissuto a Roma, conosce bene la città.", altAnswers: ["Essendo vissuto a Roma, conosce bene la città."], explanation: "Past gerund: \"avendo vissuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He answered [shouting].", sentence: "Ha risposto ___.", answer: "urlando", altAnswers: ["gridando"], explanation: "Manner." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you go] by train, you'll save time.", sentence: "___ in treno, risparmierai tempo.", answer: "Andando", altAnswers: ["Se vai", "Se andrai"], explanation: "Condition: \"andando\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Listening to him], I understood he was right.", sentence: "___, ho capito che aveva ragione.", answer: "Ascoltandolo", explanation: "\"Lo\" attached." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having already eaten], we only ordered dessert.", sentence: "___, abbiamo ordinato solo il dolce.", answer: "Avendo già mangiato", explanation: "Past gerund with \"già\"." },
      { type: "word-order", prompt: "Put the words in order to say: By saving every month, they bought a house.", words: ["Risparmiando", "ogni", "mese,", "hanno", "comprato", "casa."], translation: "By saving every month, they bought a house.", explanation: "Means: gerund first." },
      { type: "multiple-choice", question: "Which sentence means that Luca was crossing the road?", options: ["Ho visto Luca mentre attraversava la strada.", "Attraversando la strada, ho visto Luca.", "Ho visto Luca attraversando la strada.", "Attraversando Luca, ho visto la strada."], correctIndex: 0, explanation: "Different subject: \"mentre\"." },
      { type: "listen-choose", audio: "Volendo, possiamo cenare fuori.", question: "What does it mean?", options: ["We could eat out, if you like.", "We want to eat out.", "We must eat out.", "We ate out because we wanted to."], correctIndex: 0, explanation: "\"Volendo\" = if you like." },
      { type: "dictation", audio: "Non sapendo cosa dire, ha sorriso.", explanation: "Cause: \"non sapendo\"." },
      { type: "speak", text: "Passeggiando per Venezia, mi sono perso, ma chiedendo a un gondoliere ho ritrovato la strada.", prompt: "Say it in Italian: Walking around Venice, I got lost, but by asking a gondolier I found my way again.", tip: "\"Gondoliere\": gon-do-LIE-re.", explanation: "Gerund of time, then of means." },
    ],
  },
  {
    slug: "b1-gerund-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: -ing to Italian",
    summary: "Fresh sentences deciding whether English -ing becomes a gerund, an infinitive, a noun or a relative clause.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Gerund or not?",
        body: [
          "Gerund for how, by, while, since and if. Infinitive as subject or object, after prepositions and after verbs with \"di\" or \"a\". Noun for activities. Relative clause or participle for -ing describing a noun.",
        ],
        examples: [
          { es: "Cucinare mi rilassa.", en: "Cooking relaxes me." },
          { es: "Cucinando, ascolto la radio.", en: "While cooking, I listen to the radio." },
          { es: "Ho iniziato a correre a maggio.", en: "I started running in May." },
          { es: "Il signore che aspetta fuori è tuo padre?", en: "Is the man waiting outside your father?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cooking relaxes me.", answer: "Cucinare mi rilassa.", explanation: "Subject: infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the man waiting outside your father? (to a friend)", answer: "Il signore che aspetta fuori è tuo padre?", altAnswers: ["L'uomo che aspetta fuori è tuo padre?", "È tuo padre il signore che aspetta fuori?"], explanation: "-ing describing a noun: relative clause." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While cooking, I listen to the radio.", answer: "Cucinando, ascolto la radio.", altAnswers: ["Mentre cucino, ascolto la radio."], explanation: "While: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I started running in May.", answer: "Ho iniziato a correre a maggio.", altAnswers: ["Ho cominciato a correre a maggio."], explanation: "\"Iniziare a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cycling in the city is dangerous.", answer: "Andare in bici in città è pericoloso.", altAnswers: ["Andare in bicicletta in città è pericoloso."], explanation: "Subject: infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking forward to seeing you. (to a friend)", answer: "Non vedo l'ora di vederti.", explanation: "\"Non vedere l'ora di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He apologised for being late.", answer: "Si è scusato per il ritardo.", altAnswers: ["Si è scusato per essere arrivato in ritardo.", "Si è scusato di essere arrivato in ritardo."], explanation: "A noun or the past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I avoid driving at night.", answer: "Evito di guidare di notte.", explanation: "\"Evitare di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there anything worth seeing? (to a friend)", answer: "C'è qualcosa che vale la pena di vedere?", altAnswers: ["C'è qualcosa che vale la pena vedere?", "C'è qualcosa da vedere?"], explanation: "\"Valere la pena (di)\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Shopping] on Saturdays is stressful.", sentence: "___ il sabato è stressante.", answer: "Fare la spesa", altAnswers: ["Fare shopping", "Fare compere"], explanation: "Subject: infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's good at [drawing].", sentence: "È brava a ___.", answer: "disegnare", explanation: "\"Essere bravo a\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[By drawing] every day, she became an illustrator.", sentence: "___ ogni giorno, è diventata illustratrice.", answer: "Disegnando", explanation: "Means: gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's a [smiling] child in the photo.", sentence: "Nella foto c'è un bambino ___.", answer: "sorridente", altAnswers: ["che sorride"], explanation: "Adjective in \"-ente\" or a relative clause." },
      { type: "word-order", prompt: "Put the words in order to say: Instead of watching TV, read a book.", words: ["Invece", "di", "guardare", "la", "TV,", "leggi", "un", "libro."], translation: "Instead of watching TV, read a book.", explanation: "\"Invece di\" + infinitive." },
      { type: "multiple-choice", question: "How do you say: dancing is my passion?", options: ["Ballare è la mia passione.", "Ballando è la mia passione.", "Il ballando è la mia passione.", "Balla è la mia passione."], correctIndex: 0, explanation: "Subject: infinitive (or \"il ballo\")." },
      { type: "listen-choose", audio: "Ho smesso di bere caffè.", question: "What does it mean?", options: ["I've stopped drinking coffee.", "I stopped to drink a coffee.", "I'm drinking coffee.", "I'll stop drinking coffee."], correctIndex: 0, explanation: "\"Smettere di\" + infinitive = stop doing." },
      { type: "dictation", audio: "Non vedo l'ora di partire.", explanation: "\"Non vedere l'ora di\" + infinitive." },
      { type: "speak", text: "Cucinare mi rilassa: cucinando ascolto la radio, e dopo aver mangiato faccio una passeggiata.", prompt: "Say it in Italian: Cooking relaxes me: while cooking I listen to the radio, and after eating I go for a walk.", tip: "Contrast cu-ci-NA-re and cu-ci-NAN-do.", explanation: "Infinitive, gerund, past infinitive." },
    ],
  },
  {
    slug: "b1-gerund-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Stare and Andare + Gerund",
    summary: "Fresh sentences with stare + gerund for actions in progress and andare + gerund for gradual change.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Sto facendo, va migliorando",
        body: [
          "\"Stare\" + gerund: an action in progress now or then (\"sto uscendo\", \"stavamo cenando\"); never for habits or plans. \"Andare\" + gerund: gradual change, mostly written (\"la situazione va peggiorando\"). Pronouns go before \"stare\" or attach to the gerund.",
        ],
        examples: [
          { es: "Non posso parlare, sto guidando.", en: "I can't talk, I'm driving." },
          { es: "Stavamo cenando quando è saltata la luce.", en: "We were having dinner when the power went off." },
          { es: "Lo sto cercando da un'ora.", en: "I've been looking for it for an hour." },
          { es: "Il numero dei turisti va crescendo.", en: "The number of tourists keeps growing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't talk, I'm driving.", answer: "Non posso parlare, sto guidando.", explanation: "In progress now: \"sto guidando\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were having dinner when the power went off.", answer: "Stavamo cenando quando è saltata la luce.", altAnswers: ["Cenavamo quando è saltata la luce.", "Stavamo cenando quando è andata via la luce."], explanation: "\"Stavamo\" + gerund for the background action." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been looking for it for an hour.", answer: "Lo sto cercando da un'ora.", altAnswers: ["Sto cercandolo da un'ora.", "Lo cerco da un'ora."], explanation: "\"Da\" + present for something still going on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The number of tourists keeps growing.", answer: "Il numero dei turisti va crescendo.", altAnswers: ["Il numero dei turisti sta crescendo.", "Il numero dei turisti continua a crescere."], explanation: "Gradual change: \"va crescendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you reading? (to a friend)", answer: "Cosa stai leggendo?", altAnswers: ["Che stai leggendo?", "Che cosa stai leggendo?", "Cosa leggi?", "Che leggi?"], explanation: "In progress now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children were sleeping when we got home.", answer: "I bambini stavano dormendo quando siamo arrivati a casa.", altAnswers: ["I bambini dormivano quando siamo arrivati a casa.", "I bambini stavano dormendo quando siamo tornati a casa."], explanation: "\"Stavano\" + gerund or imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm getting dressed, I'll be ready in five minutes.", answer: "Mi sto vestendo, sono pronto tra cinque minuti.", altAnswers: ["Mi sto vestendo, sono pronta tra cinque minuti.", "Sto vestendomi, sono pronto tra cinque minuti.", "Mi sto vestendo, sarò pronto tra cinque minuti.", "Mi sto vestendo, sarò pronta tra cinque minuti."], explanation: "Reflexive pronoun before \"stare\" or attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The weather is getting better.", answer: "Il tempo sta migliorando.", altAnswers: ["Il tempo va migliorando."], explanation: "\"Stare\" in speech, \"andare\" in writing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Be quiet, [the baby is sleeping]!", sentence: "Silenzio, ___!", answer: "il bambino sta dormendo", altAnswers: ["la bambina sta dormendo", "il bambino dorme"], explanation: "In progress now." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I was just going out] when you called.", sentence: "___ quando hai chiamato.", answer: "Stavo uscendo", explanation: "\"Stavo\" + gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The problem [keeps getting worse].", sentence: "Il problema ___.", answer: "va peggiorando", altAnswers: ["sta peggiorando", "continua a peggiorare"], explanation: "Gradual change." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I play] tennis every Saturday.", sentence: "___ a tennis ogni sabato.", answer: "Gioco", explanation: "A habit: plain present, not \"sto giocando\"." },
      { type: "word-order", prompt: "Put the words in order to say: What were you doing at ten?", words: ["Cosa", "stavi", "facendo", "alle", "dieci?"], translation: "What were you doing at ten?", explanation: "\"Stavi\" + gerund." },
      { type: "multiple-choice", question: "Which sentence describes a habit?", options: ["Il sabato vado al mercato.", "Sto andando al mercato.", "Stavo andando al mercato.", "Il mercato va crescendo."], correctIndex: 0, explanation: "Habits take the plain present." },
      { type: "listen-choose", audio: "Ti sto aspettando da mezz'ora!", question: "What does it mean?", options: ["I've been waiting for you for half an hour!", "I'll wait for you for half an hour!", "I waited for you half an hour ago!", "Wait for me for half an hour!"], correctIndex: 0, explanation: "\"Da\" + present continuous: still waiting." },
      { type: "dictation", audio: "Stavamo parlando proprio di te.", explanation: "\"Stavamo\" + gerund." },
      { type: "speak", text: "Non posso venire adesso: sto lavorando e mi stanno aspettando in riunione.", prompt: "Say it in Italian: I can't come now: I'm working and they're waiting for me in a meeting.", tip: "\"Riunione\": ri-u-NIO-ne.", explanation: "Two actions in progress." },
    ],
  },
];
