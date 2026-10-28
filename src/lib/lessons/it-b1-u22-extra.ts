// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u22-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 22 Extra Practice: Relative Pronouns in Full. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U22_EXTRA: Lesson[] = [
  {
    slug: "b1-relatives-full-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Il Quale and Il Cui",
    summary: "Fresh sentences with il quale after prepositions and il cui for whose.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Agreement is everything",
        body: [
          "\"Il quale\" agrees with the noun before it: \"la ditta per la quale lavoro\". \"Il cui\" agrees with the noun after it: \"il cuoco i cui piatti\".",
        ],
        examples: [
          { es: "La ditta per la quale lavoro è svedese.", en: "The firm I work for is Swedish." },
          { es: "Il cuoco i cui piatti abbiamo assaggiato è siciliano.", en: "The chef whose dishes we tasted is Sicilian." },
          { es: "Le colleghe con le quali pranzo sono simpatiche.", en: "The colleagues I have lunch with are nice." },
          { es: "Un paese la cui lingua non conosco.", en: "A country whose language I don't know." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "The firm I work for is Swedish.", answer: "La ditta per la quale lavoro è svedese.", altAnswers: ["La ditta per cui lavoro è svedese.", "L'azienda per la quale lavoro è svedese.", "L'azienda per cui lavoro è svedese."], explanation: "\"Per la quale\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The chef whose dishes we tasted is Sicilian.", answer: "Il cuoco i cui piatti abbiamo assaggiato è siciliano.", altAnswers: ["Lo chef i cui piatti abbiamo assaggiato è siciliano."], explanation: "\"I cui piatti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "The colleagues I have lunch with are nice.", answer: "Le colleghe con le quali pranzo sono simpatiche.", altAnswers: ["I colleghi con i quali pranzo sono simpatici.", "Le colleghe con cui pranzo sono simpatiche.", "I colleghi con cui pranzo sono simpatici."], explanation: "\"Con le quali\" / \"con i quali\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A country whose language I don't know.", answer: "Un paese la cui lingua non conosco.", explanation: "\"La cui lingua\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor whose patients love him.", answer: "Il medico i cui pazienti lo adorano.", altAnswers: ["Il dottore i cui pazienti lo adorano.", "Il medico i cui pazienti lo amano."], explanation: "\"I cui pazienti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "The table at which we were sitting.", answer: "Il tavolo al quale eravamo seduti.", altAnswers: ["Il tavolo a cui eravamo seduti.", "Il tavolo al quale eravamo sedute."], explanation: "\"A\" + \"il quale\" = \"al quale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "An actress whose face everyone knows.", answer: "Un'attrice il cui volto tutti conoscono.", altAnswers: ["Un'attrice la cui faccia tutti conoscono.", "Un'attrice il cui viso tutti conoscono."], explanation: "\"Il cui volto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "The questions to which I didn't know the answer.", answer: "Le domande alle quali non sapevo rispondere.", altAnswers: ["Le domande a cui non sapevo rispondere."], explanation: "\"Rispondere a\": \"alle quali\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The house [whose garden] is huge.", sentence: "La casa ___ è enorme.", answer: "il cui giardino", explanation: "\"Il cui\" agrees with \"giardino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, using il quale.", en: "The bridge [under which] the river flows.", sentence: "Il ponte ___ scorre il fiume.", answer: "sotto il quale", altAnswers: ["sotto cui"], explanation: "\"Sotto il quale\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The writers [whose books] I've read.", sentence: "Gli scrittori ___ ho letto.", answer: "i cui libri", explanation: "\"I cui libri\"." },
      { type: "word-order", prompt: "Put the words in order to say: The friends I went on vacation with.", words: ["Gli", "amici", "con", "i", "quali", "sono", "andato", "in", "vacanza."], translation: "The friends I went on vacation with.", explanation: "\"Con i quali\"." },
      { type: "multiple-choice", question: "Complete: \"È un ragazzo ___ genitori sono molto severi.\"", options: ["i cui", "il cui", "la cui", "che i suoi"], correctIndex: 0, explanation: "Agrees with \"genitori\"." },
      { type: "listen-choose", audio: "Il professore con il quale ho fatto la tesi è andato in pensione.", question: "What happened to the professor?", options: ["He retired.", "He moved abroad.", "He wrote a thesis.", "He changed university."], correctIndex: 0, explanation: "\"Andare in pensione\" = to retire." },
      { type: "dictation", audio: "È un'azienda i cui prodotti sono venduti in tutto il mondo.", explanation: "\"I cui prodotti\"." },
      { type: "speak", text: "La città nella quale sono nato è famosa per un ponte la cui storia è lunghissima.", prompt: "Say it in Italian: The city where I was born is famous for a bridge whose history is very long. (a man speaking)", tip: "\"Lunghissima\": lun-GHIS-si-ma.", explanation: "\"Nella quale\" and \"la cui\"." },
    ],
  },
  {
    slug: "b1-relatives-full-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Quello Che",
    summary: "Fresh sentences with quello che, ciò che, tutto quello che, quello di cui and il che.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "What, everything, which",
        body: [
          "\"Quello che\" / \"ciò che\" = what. With a verb that takes \"di\": \"quello di cui\" (\"quello di cui ho bisogno\"). \"Tutto quello che\" = everything that. \"Il che\" refers back to a whole idea.",
        ],
        examples: [
          { es: "Quello di cui ho bisogno è dormire.", en: "What I need is sleep." },
          { es: "Non credere a tutto quello che leggi.", en: "Don't believe everything you read." },
          { es: "È arrivato in ritardo, il che non mi ha sorpreso.", en: "He arrived late, which didn't surprise me." },
          { es: "Ciò che è successo è grave.", en: "What happened is serious." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What I need is sleep.", answer: "Quello di cui ho bisogno è dormire.", altAnswers: ["Ciò di cui ho bisogno è dormire.", "Quello che mi serve è dormire."], explanation: "\"Avere bisogno di\": \"quello di cui\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't believe everything you read. (to a friend)", answer: "Non credere a tutto quello che leggi.", altAnswers: ["Non credere a tutto ciò che leggi."], explanation: "\"Tutto quello che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He arrived late, which didn't surprise me.", answer: "È arrivato in ritardo, il che non mi ha sorpreso.", altAnswers: ["È arrivato in ritardo, cosa che non mi ha sorpreso.", "È arrivato tardi, il che non mi ha sorpreso."], explanation: "\"Il che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What happened is serious.", answer: "Ciò che è successo è grave.", altAnswers: ["Quello che è successo è grave."], explanation: "\"Ciò che\" as subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's exactly what I wanted.", answer: "È proprio quello che volevo.", altAnswers: ["È esattamente quello che volevo.", "È proprio ciò che volevo."], explanation: "\"Quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tell me what you're thinking about. (to a friend)", answer: "Dimmi a cosa pensi.", altAnswers: ["Dimmi a che cosa pensi.", "Dimmi quello a cui pensi."], explanation: "Indirect question: \"a cosa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've forgotten everything I studied.", answer: "Ho dimenticato tutto quello che ho studiato.", altAnswers: ["Ho dimenticato tutto ciò che ho studiato.", "Mi sono dimenticato tutto quello che ho studiato."], explanation: "\"Tutto quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What you're talking about doesn't interest me.", answer: "Quello di cui parli non mi interessa.", altAnswers: ["Ciò di cui parli non mi interessa."], explanation: "\"Parlare di\": \"quello di cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What surprises me] is his silence.", sentence: "___ è il suo silenzio.", answer: "Quello che mi sorprende", altAnswers: ["Ciò che mi sorprende"], explanation: "\"Quello che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She passed the exam, [which] made her parents happy.", sentence: "Ha passato l'esame, ___ ha reso felici i genitori.", answer: "il che", altAnswers: ["cosa che"], explanation: "\"Il che\" = which (the whole idea)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I ate [absolutely everything].", sentence: "Ho mangiato ___.", answer: "tutto quanto", explanation: "\"Tutto quanto\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's not what I expected.", words: ["Non", "è", "quello", "che", "mi", "aspettavo."], translation: "It's not what I expected.", explanation: "\"Quello che\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Quello di cui hai bisogno è un po' di riposo.", "Quello che hai bisogno è un po' di riposo.", "Cosa hai bisogno è un po' di riposo.", "Quello cui hai bisogno di è un po' di riposo."], correctIndex: 0, explanation: "\"Avere bisogno di\": \"quello di cui\"." },
      { type: "listen-choose", audio: "Ha smesso di lavorare il sabato, il che gli ha cambiato la vita.", question: "What changed his life?", options: ["Stopping work on Saturdays", "Starting work on Saturdays", "Losing his job", "Moving house"], correctIndex: 0, explanation: "\"Il che\" refers to stopping work on Saturdays." },
      { type: "dictation", audio: "Ho fatto tutto quello che mi hai chiesto.", explanation: "\"Tutto quello che\"." },
      { type: "speak", text: "Quello di cui ho bisogno adesso è una vacanza, il che non è una sorpresa!", prompt: "Say it in Italian: What I need now is a vacation, which is no surprise!", tip: "\"Di cui\": dee-KWEE.", explanation: "\"Quello di cui\" and \"il che\"." },
    ],
  },
  {
    slug: "b1-relatives-full-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Mixed Relatives",
    summary: "Fresh sentences mixing che, cui, il quale, il cui, quello che, chi and dove.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Choose the right one",
        body: [
          "Noun + subject or object: \"che\". Noun + preposition: \"cui\" / \"il quale\". Whose: \"il cui\". What: \"quello che\". Whoever: \"chi\". Place: \"dove\"; time: \"in cui\".",
        ],
        examples: [
          { es: "Chi ha scritto questo biglietto?", en: "Who wrote this note?" },
          { es: "Il biglietto che mi hai scritto era bellissimo.", en: "The note you wrote me was lovely." },
          { es: "Il periodo in cui vivevo a Londra.", en: "The period when I lived in London." },
          { es: "Il negozio dove lavora mia sorella.", en: "The shop where my sister works." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The note you wrote me was lovely. (to a friend)", answer: "Il biglietto che mi hai scritto era bellissimo.", explanation: "Object: \"che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The period when I lived in London.", answer: "Il periodo in cui vivevo a Londra.", altAnswers: ["Il periodo in cui abitavo a Londra.", "Il periodo nel quale vivevo a Londra."], explanation: "Time: \"in cui\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop where my sister works.", answer: "Il negozio dove lavora mia sorella.", altAnswers: ["Il negozio in cui lavora mia sorella.", "Il negozio dove mia sorella lavora."], explanation: "Place: \"dove\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever finishes first wins.", answer: "Chi finisce per primo vince.", altAnswers: ["Chi finisce prima vince."], explanation: "\"Chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girl whose bike was stolen.", answer: "La ragazza la cui bici è stata rubata.", altAnswers: ["La ragazza la cui bicicletta è stata rubata."], explanation: "\"La cui bici\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boy I lent my book to.", answer: "Il ragazzo a cui ho prestato il libro.", altAnswers: ["Il ragazzo al quale ho prestato il libro.", "Il ragazzo a cui ho prestato il mio libro."], explanation: "\"A cui\" / \"al quale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What you need is patience.", answer: "Quello che ti serve è la pazienza.", altAnswers: ["Ciò che ti serve è la pazienza.", "Quello di cui hai bisogno è la pazienza."], explanation: "\"Quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The man who lives upstairs is a musician.", answer: "L'uomo che abita al piano di sopra è un musicista.", altAnswers: ["Il signore che abita al piano di sopra è un musicista.", "L'uomo che vive al piano di sopra è un musicista."], explanation: "Subject: \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The moment [when] I saw her, I understood.", sentence: "Nel momento ___ l'ho vista, ho capito.", answer: "in cui", explanation: "Time: \"in cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Those who] want a refund must keep the receipt.", sentence: "___ vuole un rimborso deve tenere lo scontrino.", answer: "Chi", explanation: "\"Chi\" + singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A city [whose museums] are free on Sundays.", sentence: "Una città ___ sono gratuiti la domenica.", answer: "i cui musei", explanation: "\"I cui musei\"." },
      { type: "word-order", prompt: "Put the words in order to say: I don't know who to ask.", words: ["Non", "so", "a", "chi", "chiedere."], translation: "I don't know who to ask.", explanation: "Indirect question: \"a chi\"." },
      { type: "multiple-choice", question: "Complete: \"Ti ringrazio per ___ hai fatto.\"", options: ["quello che", "che", "il quale", "chi"], correctIndex: 0, explanation: "What: \"quello che\"." },
      { type: "multiple-choice", question: "Complete: \"La persona ___ ti ho parlato arriva domani.\"", options: ["di cui", "che", "il cui", "chi"], correctIndex: 0, explanation: "\"Parlare di\": \"di cui\"." },
      { type: "listen-choose", audio: "Il ristorante in cui ci siamo conosciuti ha chiuso.", question: "What has closed?", options: ["The restaurant where they met", "The restaurant they own", "Their favorite bar", "A restaurant they never visited"], correctIndex: 0, explanation: "\"In cui ci siamo conosciuti\"." },
      { type: "dictation", audio: "Chi vuole il caffè alzi la mano.", explanation: "\"Chi\" + subjunctive command \"alzi\"." },
      { type: "speak", text: "Ecco la piazza dove ci siamo conosciuti e il bar il cui proprietario ci offriva sempre il caffè.", prompt: "Say it in Italian: Here's the square where we met and the bar whose owner always bought us coffee.", tip: "\"Proprietario\": pro-prie-TA-rio.", explanation: "\"Dove\" and \"il cui\"." },
    ],
  },
];
