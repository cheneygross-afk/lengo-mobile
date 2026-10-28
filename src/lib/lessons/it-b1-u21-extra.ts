// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u21-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 21 Extra Practice: The Impersonal Si. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U21_EXTRA: Lesson[] = [
  {
    slug: "b1-impersonal-si-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Si Impersonale",
    summary: "Fresh sentences with the impersonal si: si vive, si sta, si è contenti, si è lavorato.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "People in general",
        body: [
          "\"Si\" + singular verb for people in general; plural adjectives after \"si è\"; \"si è\" + \"-o\" for \"avere\" verbs in the past, \"-i\" for \"essere\" verbs.",
        ],
        examples: [
          { es: "In montagna si respira meglio.", en: "You breathe better in the mountains." },
          { es: "Si è più contenti con il sole.", en: "People are happier when the sun shines." },
          { es: "Oggi si è lavorato poco.", en: "We didn't get much work done today." },
          { es: "Si è rimasti a casa per la pioggia.", en: "We stayed at home because of the rain." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You breathe better in the mountains.", answer: "In montagna si respira meglio.", altAnswers: ["Si respira meglio in montagna."], explanation: "\"Si respira\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We stayed at home because of the rain.", answer: "Si è rimasti a casa per la pioggia.", altAnswers: ["Siamo rimasti a casa per la pioggia.", "Si è rimasti a casa a causa della pioggia."], explanation: "\"Rimanere\" takes \"essere\": \"rimasti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People are happier when the sun shines.", answer: "Si è più contenti con il sole.", altAnswers: ["Si è più felici con il sole.", "Quando c'è il sole si è più contenti."], explanation: "Plural adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't get much work done today.", answer: "Oggi si è lavorato poco.", altAnswers: ["Oggi abbiamo lavorato poco."], explanation: "\"Si è lavorato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How do you get to the beach?", answer: "Come si arriva alla spiaggia?", altAnswers: ["Come si va alla spiaggia?", "Come si arriva al mare?"], explanation: "\"Si arriva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In this office people work too much.", answer: "In questo ufficio si lavora troppo.", altAnswers: ["Si lavora troppo in questo ufficio."], explanation: "\"Si lavora\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can tell he's Neapolitan.", answer: "Si vede che è napoletano.", altAnswers: ["Si sente che è napoletano."], explanation: "\"Si vede che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We went out after dinner.", answer: "Si è usciti dopo cena.", altAnswers: ["Siamo usciti dopo cena.", "Si è usciti dopo la cena."], explanation: "\"Uscire\": \"usciti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [you're nervous], you talk too much.", sentence: "Quando ___, si parla troppo.", answer: "si è nervosi", explanation: "Plural adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At that restaurant [you spend] a lot.", sentence: "In quel ristorante ___ tanto.", answer: "si spende", explanation: "\"Si spende\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Last night [we talked] until late.", sentence: "Ieri sera ___ fino a tardi.", answer: "si è parlato", altAnswers: ["si è chiacchierato", "abbiamo parlato"], explanation: "\"Si è parlato\"." },
      { type: "word-order", prompt: "Put the words in order to say: You never stop learning.", words: ["Non", "si", "finisce", "mai", "di", "imparare."], translation: "You never stop learning.", explanation: "\"Si finisce di\"." },
      { type: "multiple-choice", question: "Choose: \"Quando si è ___, si dorme male.\"", options: ["preoccupati", "preoccupato", "preoccupata", "preoccupare"], correctIndex: 0, explanation: "Plural adjective." },
      { type: "listen-choose", audio: "In montagna si respira meglio e si dorme di più.", question: "What's better in the mountains?", options: ["Breathing and sleeping", "Food and drink", "Prices", "The weather"], correctIndex: 0, explanation: "\"Si respira\", \"si dorme\"." },
      { type: "dictation", audio: "Quando si è in tanti, si spende meno.", explanation: "\"Si è in tanti\" = when there are lots of you." },
      { type: "speak", text: "In questa città si vive bene: si lavora meno e si è più tranquilli.", prompt: "Say it in Italian: Life is good in this city: people work less and they're calmer.", tip: "\"Tranquilli\": tran-QUIL-li, long double l.", explanation: "Impersonal \"si\", plural adjective." },
    ],
  },
  {
    slug: "b1-impersonal-si-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Ci Si",
    summary: "Fresh sentences with ci si for reflexive verbs: ci si sveglia, ci si stanca, ci si è persi.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Reflexive + impersonal",
        body: [
          "\"Ci si\" + singular verb; plural adjectives; past \"ci si è\" + \"-i\". With modals: \"ci si può\", \"ci si deve\".",
        ],
        examples: [
          { es: "In vacanza ci si sveglia senza sveglia.", en: "On holiday you wake up without an alarm." },
          { es: "Con questo caldo ci si stanca subito.", en: "In this heat you get tired straight away." },
          { es: "Nel bosco ci si è persi.", en: "We got lost in the woods." },
          { es: "Ci si deve mettere il casco.", en: "You have to wear a helmet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In this heat you get tired straight away.", answer: "Con questo caldo ci si stanca subito.", altAnswers: ["Con questo caldo ci si stanca presto."], explanation: "\"Ci si stanca\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We got lost in the woods.", answer: "Nel bosco ci si è persi.", altAnswers: ["Ci si è persi nel bosco.", "Ci siamo persi nel bosco."], explanation: "Past: \"persi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to wear a helmet.", answer: "Ci si deve mettere il casco.", altAnswers: ["Bisogna mettersi il casco.", "Si deve mettere il casco."], explanation: "\"Ci si deve mettere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On holiday you relax.", answer: "In vacanza ci si rilassa.", altAnswers: ["Ci si rilassa in vacanza."], explanation: "\"Rilassarsi\" → \"ci si rilassa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You easily get lost in Venice.", answer: "A Venezia ci si perde facilmente.", altAnswers: ["Ci si perde facilmente a Venezia."], explanation: "\"Perdersi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You make friends quickly here.", answer: "Qui si fa amicizia in fretta.", altAnswers: ["Qui si fa amicizia velocemente.", "Qui si fanno amicizie in fretta."], explanation: "\"Fare amicizia\" isn't reflexive: \"si fa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had a great time at the concert.", answer: "Al concerto ci si è divertiti tantissimo.", altAnswers: ["Al concerto ci siamo divertiti tantissimo.", "Ci si è divertiti tantissimo al concerto."], explanation: "\"Ci si è divertiti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You feel at home here.", answer: "Qui ci si sente a casa.", altAnswers: ["Ci si sente a casa qui."], explanation: "\"Sentirsi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the evening [people get changed] for dinner.", sentence: "La sera ___ per la cena.", answer: "ci si cambia", explanation: "\"Cambiarsi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You get used to] the cold.", sentence: "___ al freddo.", answer: "Ci si abitua", explanation: "\"Abituarsi a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After the exam [we felt] relieved.", sentence: "Dopo l'esame ___ sollevati.", answer: "ci si è sentiti", altAnswers: ["ci siamo sentiti"], explanation: "Past: \"sentiti\"." },
      { type: "word-order", prompt: "Put the words in order to say: You can't complain.", words: ["Non", "ci", "si", "può", "lamentare."], translation: "You can't complain.", explanation: "\"Ci si\" before the modal." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Ci si è svegliati presto.", "Ci si è svegliato presto.", "Si si è svegliati presto.", "Ci si sono svegliati presto."], correctIndex: 0, explanation: "\"Ci si è\" + \"-i\"." },
      { type: "listen-choose", audio: "A Venezia ci si perde facilmente.", question: "What happens in Venice?", options: ["People get lost easily.", "People lose things easily.", "People miss the boat.", "People spend too much."], correctIndex: 0, explanation: "\"Perdersi\" = to get lost." },
      { type: "dictation", audio: "In questo paese ci si conosce tutti.", explanation: "\"Ci si conosce\" = everybody knows each other." },
      { type: "speak", text: "In vacanza ci si sveglia tardi, ci si rilassa e non ci si preoccupa di niente.", prompt: "Say it in Italian: On holiday you wake up late, you relax and you don't worry about anything.", tip: "\"Preoccupa\": pre-OC-cu-pa, double c.", explanation: "Three \"ci si\"." },
    ],
  },
  {
    slug: "b1-impersonal-si-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Which Si?",
    summary: "Mixed practice telling reflexive, passive and impersonal si apart.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Who and what?",
        body: [
          "A named person doing it to themselves: reflexive. A thing being done, verb agreeing with it: passive. People in general, singular verb: impersonal; with a reflexive verb, \"ci si\".",
        ],
        examples: [
          { es: "Paola si trucca.", en: "Paola is putting on make-up." },
          { es: "Si vendono borse.", en: "Bags for sale." },
          { es: "Si sta bene qui.", en: "It's nice here." },
          { es: "Ci si trucca poco in ufficio.", en: "People wear little make-up at the office." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Si vendono borse.\" Which si?", options: ["Passive", "Reflexive", "Impersonal", "Ci si"], correctIndex: 0, explanation: "The verb agrees with \"borse\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People wear little make-up at the office.", answer: "Ci si trucca poco in ufficio.", altAnswers: ["In ufficio ci si trucca poco."], explanation: "Impersonal reflexive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paola is putting on make-up.", answer: "Paola si trucca.", altAnswers: ["Paola si sta truccando."], explanation: "Reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bags for sale.", answer: "Si vendono borse.", altAnswers: ["Vendesi borse."], explanation: "Passive: plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents met in Rome.", answer: "I miei genitori si sono conosciuti a Roma.", altAnswers: ["I miei si sono conosciuti a Roma.", "I miei genitori si sono incontrati a Roma."], explanation: "Reciprocal reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In small towns everybody knows each other.", answer: "Nei paesi piccoli ci si conosce tutti.", altAnswers: ["Nei piccoli paesi ci si conosce tutti."], explanation: "Impersonal reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many languages are spoken in this city.", answer: "In questa città si parlano molte lingue.", altAnswers: ["Si parlano molte lingue in questa città.", "In questa città si parlano tante lingue."], explanation: "Passive: plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People talk a lot in this city.", answer: "In questa città si parla molto.", altAnswers: ["In questa città si parla tanto."], explanation: "Impersonal: no object." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco [got up] late.", sentence: "Marco ___ tardi.", answer: "si è alzato", explanation: "Reflexive past: agrees with Marco." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At the camp [we got up] at six.", sentence: "Al campo ___ alle sei.", answer: "ci si è alzati", altAnswers: ["ci siamo alzati"], explanation: "Impersonal reflexive past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Last year [two new schools were opened].", sentence: "L'anno scorso ___ due nuove scuole.", answer: "si sono aperte", altAnswers: ["sono state aperte"], explanation: "Passive past: \"aperte\"." },
      { type: "word-order", prompt: "Put the words in order to say: Here people eat late and sleep little.", words: ["Qui", "si", "mangia", "tardi", "e", "si", "dorme", "poco."], translation: "Here people eat late and sleep little.", explanation: "Impersonal." },
      { type: "multiple-choice", question: "\"Ci si annoia.\" Which si?", options: ["Impersonal with a reflexive verb", "Passive", "Reflexive with a named person", "Two reflexives"], correctIndex: 0, explanation: "\"Annoiarsi\" made impersonal." },
      { type: "listen-choose", audio: "In questo quartiere si affittano molti appartamenti agli studenti.", question: "What's common in this neighbourhood?", options: ["Flats rented to students", "Students selling flats", "Students living with families", "Empty flats"], correctIndex: 0, explanation: "Passive \"si affittano\"." },
      { type: "dictation", audio: "Giulia si è svegliata presto, ma in casa ci si sveglia sempre tardi.", explanation: "Reflexive, then impersonal reflexive." },
      { type: "speak", text: "Al mercato si vendono frutta e verdura, si parla ad alta voce e ci si diverte.", prompt: "Say it in Italian: At the market fruit and vegetables are sold, people talk loudly and have fun.", tip: "\"Ad alta voce\": ad AL-ta VO-ce.", explanation: "Passive, impersonal, \"ci si\"." },
    ],
  },
];
