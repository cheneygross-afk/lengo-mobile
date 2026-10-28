// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u13-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 13 Extra Practice: Philosophy and Abstract Argument.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U13_EXTRA: Lesson[] = [
  {
    slug: "c2-philosophy-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Concepts",
    summary: "Fresh sentences with abstract nouns, nominal infinitives and the key pairs of philosophical Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Concepts in context",
        body: [
          "New words: \"l'identità\", \"l'alterità\" (otherness), \"il soggetto\", \"l'oggetto\", \"la percezione\", \"il linguaggio\" (language as a faculty; \"la lingua\" is a particular language), \"il pregiudizio\" (prejudice, preconception).",
          "Article with every concept; \"il linguaggio\" vs \"la lingua\" is a distinction English doesn't make.",
        ],
        examples: [
          { es: "Il linguaggio distingue l'uomo dagli altri animali.", en: "Language distinguishes humans from other animals." },
          { es: "La lingua italiana ha molti dialetti.", en: "The Italian language has many dialects." },
          { es: "L'identità si costruisce nel confronto con l'altro.", en: "Identity is built through encounter with the other." },
          { es: "Ogni percezione è già un'interpretazione.", en: "Every perception is already an interpretation." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Language distinguishes humans from other animals.", answer: "Il linguaggio distingue l'uomo dagli altri animali.", altAnswers: ["Il linguaggio distingue gli esseri umani dagli altri animali.", "Il linguaggio distingue l'essere umano dagli altri animali."], explanation: "Language as a faculty is \"il linguaggio\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every perception is already an interpretation.", answer: "Ogni percezione è già un'interpretazione.", explanation: "\"Un'interpretazione\": feminine, with an apostrophe." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Identity is built through encounter with the other.", answer: "L'identità si costruisce nel confronto con l'altro.", altAnswers: ["L'identità si costruisce attraverso il confronto con l'altro.", "L'identità si forma nel confronto con l'altro."], explanation: "\"Si costruisce\": passive \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Prejudice is a judgment made before knowing.", answer: "Il pregiudizio è un giudizio dato prima di conoscere.", altAnswers: ["Il pregiudizio è un giudizio formulato prima di conoscere.", "Il pregiudizio è un giudizio espresso prima di conoscere."], explanation: "\"Pre-giudizio\": the etymology is the definition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nothing comes from nothing.", answer: "Nulla nasce dal nulla.", altAnswers: ["Niente nasce dal nulla.", "Dal nulla non nasce nulla.", "Niente viene dal nulla."], explanation: "\"Il nulla\" as a noun takes the article: \"dal nulla\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thinking well is the first duty of a citizen.", answer: "Il pensare bene è il primo dovere di un cittadino.", altAnswers: ["Pensare bene è il primo dovere di un cittadino.", "Pensare bene è il primo dovere del cittadino."], explanation: "Nominal infinitive or bare infinitive as subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Actually, the problem is another one.", answer: "In realtà il problema è un altro.", altAnswers: ["In realtà, il problema è un altro.", "Il problema, in realtà, è un altro."], explanation: "\"In realtà\" = actually, correcting what was said; \"in effetti\" would confirm it instead. \"Un altro\" has no apostrophe." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The subject] and the object cannot be separated.", sentence: "___ e l'oggetto non si possono separare.", answer: "Il soggetto", explanation: "\"Il soggetto\" (masculine)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "His [constant complaining] tires everyone.", sentence: "Il suo ___ stanca tutti.", answer: "continuo lamentarsi", explanation: "Reflexive infinitive as a noun, with an adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having understood late] cost him dearly.", sentence: "___ gli è costato caro.", answer: "L'aver capito tardi", altAnswers: ["L'avere capito tardi", "Aver capito tardi", "Avere capito tardi"], explanation: "Past infinitive as a noun; \"l'aver\" truncated." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Otherness] scares those who are insecure.", sentence: "___ fa paura a chi è insicuro.", answer: "L'alterità", explanation: "\"L'alterità\" = otherness; feminine in -tà." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He lost [consciousness] for a few seconds.", sentence: "Ha perso ___ per qualche secondo.", answer: "coscienza", altAnswers: ["conoscenza", "i sensi"], explanation: "\"Perdere coscienza\" or the everyday \"perdere conoscenza / i sensi\"." },
      { type: "word-order", prompt: "Put the words in order to say: Being and appearing don't coincide.", words: ["L'essere", "e", "l'apparire", "non", "coincidono."], translation: "Being and appearing don't coincide.", explanation: "Two nominal infinitives." },
      { type: "multiple-choice", question: "Which is right for The Italian language?", options: ["la lingua italiana", "il linguaggio italiano", "la linguaggio italiana", "il lingua italiano"], correctIndex: 0, explanation: "A particular language is \"la lingua\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il pregiudizio", right: "prejudice" },
          { left: "l'alterità", right: "otherness" },
          { left: "il linguaggio", right: "language (the faculty)" },
          { left: "in realtà", right: "actually" },
          { left: "attualmente", right: "currently" },
        ],
        explanation: "Concepts and one classic false friend.",
      },
      { type: "listen-choose", audio: "L'apparire conta più dell'essere, almeno sui social.", question: "What does the speaker claim?", options: ["Appearance counts more than substance, at least on social media.", "Being is more important than appearing.", "Social media show who we really are.", "Nobody cares about appearances."], correctIndex: 0, explanation: "\"L'apparire\" vs \"l'essere\": appearing vs being." },
      { type: "dictation", audio: "Ogni percezione è già un'interpretazione.", explanation: "\"Un'interpretazione\" with an apostrophe." },
      { type: "speak", text: "In realtà il problema è un altro: il linguaggio non descrive il mondo, lo costruisce.", prompt: "Say it in Italian: Actually the problem is another one: language doesn't describe the world, it builds it.", tip: "lin-GUAG-gio: double g.", explanation: "\"In realtà\" for actually; \"lo\" for the world." },
    ],
  },
  {
    slug: "c2-philosophy-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Arguments",
    summary: "Fresh practice in building and attacking arguments: hypotheses, concessions, objections and conclusions.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "An argument in five moves",
        body: [
          "Premise (\"partiamo da\"), hypothesis (\"supponiamo che\" + subjunctive), inference (\"ne consegue che\"), objection (\"si potrebbe obiettare che\"), conclusion (\"in definitiva\").",
        ],
        examples: [
          { es: "Partiamo da un dato: la popolazione invecchia.", en: "Let's start from a fact: the population is aging." },
          { es: "Supponiamo che la tendenza continui.", en: "Suppose the trend continues." },
          { es: "Ne consegue che il sistema pensionistico va riformato.", en: "It follows that the pension system must be reformed." },
          { es: "In definitiva, rimandare non è una soluzione.", en: "Ultimately, putting it off isn't a solution." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Suppose the trend continues.", answer: "Supponiamo che la tendenza continui.", altAnswers: ["Supponiamo che la tendenza prosegua.", "Ammettiamo che la tendenza continui."], explanation: "Subjunctive \"continui\" after \"supponiamo che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ultimately, putting it off isn't a solution.", answer: "In definitiva, rimandare non è una soluzione.", altAnswers: ["In definitiva rimandare non è una soluzione.", "In fin dei conti, rimandare non è una soluzione."], explanation: "Infinitive as subject: \"rimandare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's start from a fact: the population is aging.", answer: "Partiamo da un dato: la popolazione invecchia.", altAnswers: ["Partiamo da un dato: la popolazione sta invecchiando.", "Partiamo da un fatto: la popolazione invecchia."], explanation: "\"Un dato\" = a piece of data, a fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It follows that the pension system must be reformed.", answer: "Ne consegue che il sistema pensionistico va riformato.", altAnswers: ["Ne consegue che il sistema pensionistico deve essere riformato.", "Ne consegue che bisogna riformare il sistema pensionistico."], explanation: "\"Va riformato\" = must be reformed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The objection makes a real point, but it doesn't touch the core of the thesis.", answer: "L'obiezione coglie un punto reale, ma non tocca il cuore della tesi.", altAnswers: ["L'obiezione coglie un punto vero, ma non tocca il cuore della tesi.", "L'obiezione coglie un punto reale ma non tocca il cuore della tesi."], explanation: "\"Cogliere un punto\" = to make a valid point." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Even if he had been right, he should have said it differently.", answer: "Anche se avesse avuto ragione, avrebbe dovuto dirlo diversamente.", altAnswers: ["Anche se avesse avuto ragione, avrebbe dovuto dirlo in un altro modo.", "Anche se avesse avuto ragione avrebbe dovuto dirlo diversamente."], explanation: "Pluperfect subjunctive + past conditional of \"dovere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The objection doesn't hold up.", answer: "L'obiezione non regge.", altAnswers: ["L'obiezione non sta in piedi."], explanation: "\"Reggere\" = to hold up." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Unless] someone proves the opposite, the thesis stands.", sentence: "___ qualcuno non dimostri il contrario, la tesi regge.", answer: "A meno che", explanation: "\"A meno che (non)\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Although] the data are partial, the trend is clear.", sentence: "___ i dati siano parziali, la tendenza è chiara.", answer: "Benché", altAnswers: ["Sebbene", "Nonostante", "Malgrado"], explanation: "Concessive + subjunctive \"siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He admitted his mistake, [which] surprised everyone.", sentence: "Ha ammesso l'errore, ___ ha sorpreso tutti.", answer: "il che", altAnswers: ["cosa che"], explanation: "\"Il che\" = which (the fact)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It doesn't follow that] the rich are happier.", sentence: "___ i ricchi siano più felici.", answer: "Non è detto che", altAnswers: ["Non ne consegue che", "Non ne segue che"], explanation: "+ subjunctive \"siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[While admitting] the risks, I'm in favor.", sentence: "___ i rischi, sono favorevole.", answer: "Pur ammettendo", altAnswers: ["Pur riconoscendo"], explanation: "\"Pur\" + gerund." },
      { type: "word-order", prompt: "Put the words in order to say: Even though it's true, it changes nothing.", words: ["Anche", "se", "è", "vero,", "non", "cambia", "nulla."], translation: "Even though it's true, it changes nothing.", explanation: "Real fact: \"anche se\" + indicative." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Benché sia tardi, continuiamo.", "Benché è tardi, continuiamo.", "Benché sarebbe tardi, continuiamo.", "Benché fosse tardi, continuiamo adesso."], correctIndex: 0, explanation: "\"Benché\" + present subjunctive for a present fact." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "cogliere un punto", right: "to make a valid point" },
          { left: "non regge", right: "doesn't hold up" },
          { left: "a meno che", right: "unless" },
          { left: "posto che", right: "assuming that" },
          { left: "in definitiva", right: "ultimately" },
        ],
        explanation: "Argument tools.",
      },
      { type: "listen-choose", audio: "Anche ammesso che tu abbia ragione sui numeri, le conclusioni non tornano.", question: "What does the speaker say?", options: ["Even granting your numbers, the conclusions don't add up.", "Your numbers are wrong and so are your conclusions.", "The conclusions are right but the numbers are wrong.", "The numbers will come back later."], correctIndex: 0, explanation: "\"Non tornano\" = don't add up." },
      { type: "dictation", audio: "Si potrebbe obiettare che i dati sono parziali.", explanation: "\"Si potrebbe obiettare che\": the objection formula." },
      { type: "speak", text: "Pur ammettendo i rischi, sono favorevole: rimandare non è una soluzione.", prompt: "Say it in Italian: While admitting the risks, I'm in favor: putting it off isn't a solution.", tip: "fa-vo-RE-vo-le: stress on RE.", explanation: "Concession, position, reason." },
    ],
  },
];
