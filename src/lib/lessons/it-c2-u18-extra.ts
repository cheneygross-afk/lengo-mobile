// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u18-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 18 Extra Practice: Contemporary Italy.
// Original texts; figures are rounded and attributed.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U18_EXTRA: Lesson[] = [
  {
    slug: "c2-contemporary-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Society",
    summary: "A fresh text on the changing Italian family: smaller households, later parenthood and young adults living at home.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh text",
        body: [
          "Read this original text: \"Le famiglie italiane sono sempre più piccole: secondo i dati più recenti, circa un nucleo su tre è composto da una sola persona. Si diventa genitori più tardi, e i giovani lasciano la casa dei genitori in media intorno ai trent'anni. Non sempre per scelta: spesso è il costo degli affitti a decidere.\"",
          "Notice the impersonal \"si diventa\", the cleft \"è il costo degli affitti a decidere\" (it's the cost of rent that decides), and \"sempre più\" + adjective for a trend.",
        ],
        examples: [
          { es: "Le famiglie italiane sono sempre più piccole.", en: "Italian families are getting smaller and smaller." },
          { es: "Circa un nucleo su tre è composto da una sola persona.", en: "About one household in three consists of a single person." },
          { es: "Si diventa genitori più tardi.", en: "People become parents later." },
          { es: "Spesso è il costo degli affitti a decidere.", en: "Often it's the cost of rent that decides." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italian families are getting smaller and smaller.", answer: "Le famiglie italiane sono sempre più piccole.", altAnswers: ["Le famiglie italiane diventano sempre più piccole.", "Le famiglie italiane si fanno sempre più piccole."], explanation: "\"Sempre più\" for a trend." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Often it's the cost of rent that decides.", answer: "Spesso è il costo degli affitti a decidere.", altAnswers: ["Spesso è il costo dell'affitto a decidere.", "Spesso a decidere è il costo degli affitti."], explanation: "Cleft: \"è... a\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People become parents later.", answer: "Si diventa genitori più tardi.", altAnswers: ["Si diventa genitori sempre più tardi.", "Le persone diventano genitori più tardi."], explanation: "Impersonal \"si\" + plural predicate." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Young people leave home at around thirty on average.", answer: "I giovani lasciano la casa dei genitori in media intorno ai trent'anni.", altAnswers: ["In media i giovani escono di casa intorno ai trent'anni.", "I giovani lasciano casa in media verso i trent'anni."], explanation: "\"Intorno ai\" + age." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not always by choice.", answer: "Non sempre per scelta.", altAnswers: ["Non sempre per propria scelta.", "Non sempre lo scelgono."], explanation: "Elliptical sentence." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandparents often look after their grandchildren.", answer: "I nonni si occupano spesso dei nipoti.", altAnswers: ["Spesso sono i nonni a occuparsi dei nipoti.", "I nonni badano spesso ai nipoti.", "I nonni spesso si occupano dei nipoti."], explanation: "\"Nipoti\" = grandchildren here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "More and more couples live together without marrying.", answer: "Sempre più coppie convivono senza sposarsi.", altAnswers: ["Sempre più coppie vivono insieme senza sposarsi.", "Un numero crescente di coppie convive senza sposarsi."], explanation: "\"Convivere\" = to live together." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It is a change that would have been unthinkable fifty years ago.", answer: "È un cambiamento che cinquant'anni fa sarebbe stato impensabile.", altAnswers: ["Si tratta di un cambiamento che cinquant'anni fa sarebbe stato impensabile.", "È un cambiamento che sarebbe stato impensabile cinquant'anni fa."], explanation: "Past conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although the family remains central, its shape has changed.", answer: "Benché la famiglia resti centrale, la sua forma è cambiata.", altAnswers: ["Sebbene la famiglia resti centrale, la sua forma è cambiata.", "Anche se la famiglia resta centrale, la sua forma è cambiata."], explanation: "Concessive + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "About one household [in three] consists of a single person.", sentence: "Circa un nucleo ___ è composto da una sola persona.", answer: "su tre", explanation: "\"Uno su tre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It's the grandparents who] keep the system going.", sentence: "___ a tenere in piedi il sistema.", answer: "Sono i nonni", explanation: "Cleft with \"essere... a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Rents are [higher and higher].", sentence: "Gli affitti sono ___.", answer: "sempre più alti", altAnswers: ["sempre più cari"], explanation: "Trend." },
      { type: "word-order", prompt: "Put the words in order to say: People become parents later.", words: ["Si", "diventa", "genitori", "più", "tardi."], translation: "People become parents later.", explanation: "Impersonal \"si\"." },
      { type: "word-order", prompt: "Put the words in order to say: More and more couples live together.", words: ["Sempre", "più", "coppie", "convivono."], translation: "More and more couples live together.", explanation: "\"Sempre più\" before a noun." },
      { type: "multiple-choice", question: "\"È il costo degli affitti a decidere\" stresses ...", options: ["the cost of rent as the real cause", "the young people's choice", "the parents' wishes", "the cost of food"], correctIndex: 0, explanation: "The cleft puts the cause in focus." },
      { type: "dictation", audio: "Si diventa genitori più tardi, e non sempre per scelta.", explanation: "Impersonal \"si\" with a plural noun." },
      { type: "speak", text: "Benché la famiglia resti centrale nella società italiana, la sua forma è cambiata profondamente.", prompt: "Say aloud: Although the family remains central in Italian society, its shape has changed profoundly.", tip: "pro-fon-da-MEN-te.", explanation: "Concessive sentence." },
    ],
  },
  {
    slug: "c2-contemporary-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Economy",
    summary: "A fresh text on Italy's economy: small firms, stagnant wages, tourism and exports, with the language of economic analysis.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh text",
        body: [
          "Read this original text: \"Il tessuto produttivo italiano è fatto in gran parte di piccole e medie imprese, spesso familiari, che esportano in tutto il mondo. Eppure, secondo l'OCSE, negli ultimi trent'anni i salari reali sono cresciuti meno che negli altri grandi paesi europei. Il turismo pesa sempre di più sul PIL, ma da solo non basta a garantire una crescita stabile.\"",
          "Notice \"il tessuto produttivo\" (the business fabric), \"pesare su\" (to weigh on, account for), \"crescere meno che\" and \"da solo non basta a\".",
        ],
        examples: [
          { es: "Il tessuto produttivo è fatto in gran parte di piccole e medie imprese.", en: "The business fabric is made up largely of small and medium-sized firms." },
          { es: "I salari reali sono cresciuti meno che negli altri grandi paesi europei.", en: "Real wages have grown less than in the other large European countries." },
          { es: "Il turismo pesa sempre di più sul PIL.", en: "Tourism accounts for an ever larger share of GDP." },
          { es: "Da solo non basta a garantire una crescita stabile.", en: "On its own it isn't enough to guarantee stable growth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Real wages have grown less than in the other large European countries.", answer: "I salari reali sono cresciuti meno che negli altri grandi paesi europei.", altAnswers: ["I salari reali sono cresciuti meno rispetto agli altri grandi paesi europei.", "I salari reali sono aumentati meno che negli altri grandi paesi europei."], explanation: "\"Meno che\" before a prepositional phrase." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On its own it isn't enough to guarantee stable growth.", answer: "Da solo non basta a garantire una crescita stabile.", altAnswers: ["Da solo non è sufficiente a garantire una crescita stabile.", "Da solo non basta per garantire una crescita stabile."], explanation: "\"Bastare a\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many family firms export all over the world.", answer: "Molte imprese familiari esportano in tutto il mondo.", altAnswers: ["Molte aziende familiari esportano in tutto il mondo.", "Molte imprese di famiglia esportano in tutto il mondo."], explanation: "\"Impresa familiare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tourism accounts for an ever larger share of GDP.", answer: "Il turismo pesa sempre di più sul PIL.", altAnswers: ["Il turismo ha un peso sempre maggiore sul PIL.", "Il turismo pesa sempre più sul PIL."], explanation: "\"Pesare su\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Productivity has been stagnant for years.", answer: "La produttività è ferma da anni.", altAnswers: ["La produttività ristagna da anni.", "La produttività è stagnante da anni."], explanation: "\"Da\" + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If firms invested more in research, they would grow faster.", answer: "Se le imprese investissero di più nella ricerca, crescerebbero più in fretta.", altAnswers: ["Se le aziende investissero di più nella ricerca, crescerebbero più rapidamente.", "Se le imprese investissero di più in ricerca, crescerebbero più velocemente."], explanation: "Second-type hypothesis." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Public debt remains one of the highest in Europe.", answer: "Il debito pubblico resta uno dei più alti d'Europa.", altAnswers: ["Il debito pubblico rimane uno dei più alti d'Europa.", "Il debito pubblico resta tra i più alti in Europa."], explanation: "Superlative + \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "According to the OECD, the gap is widening.", answer: "Secondo l'OCSE, il divario si sta allargando.", altAnswers: ["Secondo l'OCSE il divario si allarga.", "Secondo l'Ocse, il divario sta aumentando."], explanation: "\"OCSE\" = OECD in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Undeclared work must be fought with better controls.", answer: "Il lavoro nero va combattuto con controlli migliori.", altAnswers: ["Il lavoro nero deve essere combattuto con controlli migliori.", "Bisogna combattere il lavoro nero con controlli migliori."], explanation: "\"Andare\" + participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The business fabric] is made up of small firms.", sentence: "___ è fatto di piccole imprese.", answer: "Il tessuto produttivo", explanation: "Standard economic metaphor." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Exports [have reached] a record.", sentence: "Le esportazioni ___ un record.", answer: "hanno raggiunto", altAnswers: ["hanno toccato"], explanation: "\"Raggiungere\" or \"toccare\" un record." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Real wages have grown [less than] elsewhere.", sentence: "I salari reali sono cresciuti ___ altrove.", answer: "meno che", explanation: "Comparison before an adverb." },
      { type: "word-order", prompt: "Put the words in order to say: Productivity has been stagnant for years.", words: ["La", "produttività", "è", "ferma", "da", "anni."], translation: "Productivity has been stagnant for years.", explanation: "\"Da\" + present." },
      { type: "word-order", prompt: "Put the words in order to say: On its own it isn't enough.", words: ["Da", "solo", "non", "basta."], translation: "On its own it isn't enough.", explanation: "\"Da solo\" agrees with the subject." },
      { type: "multiple-choice", question: "\"Il turismo pesa sul PIL\" means tourism ...", options: ["accounts for a share of GDP", "damages GDP", "is taxed heavily", "is declining"], correctIndex: 0, explanation: "\"Pesare\" = to account for, here neutral." },
      { type: "listen-choose", audio: "Le esportazioni hanno toccato un nuovo record, ma i salari reali restano fermi.", question: "What contrast does the speaker point out?", options: ["Record exports but stagnant real wages", "Falling exports and rising wages", "Both are falling", "Both are rising"], correctIndex: 0, explanation: "\"Ma\" introduces the contrast." },
      { type: "speak", text: "Se le imprese investissero di più nella ricerca, crescerebbero più in fretta.", prompt: "Say aloud: If firms invested more in research, they would grow faster.", tip: "in-ve-STIS-se-ro: stress on STIS.", explanation: "Economic hypothesis." },
    ],
  },
];
