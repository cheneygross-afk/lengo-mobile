// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u02.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian C1 Unit 2: The Trapassato Remoto and Literary Tenses. Trapassato
// remoto after dopo che / appena / quando, literary pronouns (egli, esso),
// enclitic fossils (affittasi, vendesi, dicesi), tenses in literary narration.
// Conventions: docs/italian-course/authoring.md.
export const IT_C1_U02: Lesson[] = [
  {
    slug: "c1-trapassato-remoto",
    level: "IT-C1",
    number: 1,
    title: "The Trapassato Remoto",
    summary: "Form the trapassato remoto (ebbe finito, fu partito) and use it after dopo che, appena and quando with a passato remoto main clause.",
    duration: "19 min",
    sections: [
      {
        heading: "Form: auxiliary in the passato remoto",
        body: [
          "The trapassato remoto is a compound tense: the passato remoto of \"avere\" or \"essere\" plus the past participle. \"Ebbi finito, avesti finito, ebbe finito, avemmo finito, aveste finito, ebbero finito\"; \"fui partito / partita, fosti partito, fu partito, fummo partiti, foste partiti, furono partiti\". Auxiliary choice and agreement follow the same rules as the passato prossimo: \"fu arrivata\", \"si fu seduto\", \"l'ebbe vista\".",
          "English has no separate form for it: \"Quando ebbe finito\" is simply when he had finished. Italian has two past perfects, and the difference is not meaning but grammar: the trapassato prossimo (\"aveva finito\") can go anywhere; the trapassato remoto lives only in one narrow slot.",
        ],
        examples: [
          { es: "Quando ebbe finito di mangiare, si alzò.", en: "When he had finished eating, he got up." },
          { es: "Appena fu arrivata, si mise a scrivere.", en: "As soon as she had arrived, she began to write." },
          { es: "Dopo che furono partiti, la casa tornò silenziosa.", en: "After they had left, the house fell silent again." },
          { es: "Appena l'ebbe vista, la riconobbe.", en: "As soon as he had seen her, he recognised her." },
          { es: "Dopo che si fu seduto, chiese un bicchiere d'acqua.", en: "After he had sat down, he asked for a glass of water." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "When he had finished eating, he got up.", answer: "Quando ebbe finito di mangiare, si alzò.", explanation: "\"Ebbe finito\": passato remoto of \"avere\" + participle." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as she [had arrived], she began to write.", sentence: "Appena ___, si mise a scrivere.", answer: "fu arrivata", explanation: "\"Arrivare\" takes \"essere\": \"fu arrivata\", agreeing with she." },
        ],
      },
      {
        heading: "The one slot where it lives",
        body: [
          "The trapassato remoto has three conditions. It appears in a time clause introduced by \"dopo che\", \"(non) appena\", \"quando\" or, in older prose, \"come\" (as soon as) and \"allorché\". The main clause is in the passato remoto. And the action in the time clause is completed immediately before the main event. If any of these is missing, use something else.",
          "So \"*Ebbe finito il lavoro\" as a main clause is wrong: write \"Aveva finito il lavoro\". With a main clause in the passato prossimo, use the trapassato prossimo or an implicit form: \"Dopo che aveva finito, è uscito\" is spoken; \"Dopo aver finito, è uscito\" is better.",
          "In modern writing the trapassato remoto is rare even in novels: authors prefer \"dopo aver finito\", \"finito il pranzo\" or \"appena finito\". You need it to read the classics and to write a convincing literary pastiche, not for emails.",
        ],
        examples: [
          { es: "Non appena ebbero ricevuto la notizia, partirono.", en: "As soon as they had received the news, they set off." },
          { es: "Come fu giunto in città, cercò la casa del notaio.", en: "As soon as he had reached the town, he looked for the notary's house." },
          { es: "Aveva finito il lavoro e guardava fuori dalla finestra.", en: "He had finished the work and was looking out of the window." },
          { es: "Dopo aver finito, uscì.", en: "After finishing, he went out." },
          { es: "Finito il pranzo, i bambini uscirono in giardino.", en: "Lunch over, the children went out into the garden." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "As soon as they had received the news, they set off.", answer: "Non appena ebbero ricevuto la notizia, partirono.", altAnswers: ["Appena ebbero ricevuto la notizia, partirono.", "Non appena ebbero ricevuto la notizia, si misero in viaggio.", "Appena ebbero ricevuto la notizia, si misero in viaggio."], explanation: "Time clause with \"non appena\" + trapassato remoto, main clause in the passato remoto." },
          { type: "multiple-choice", question: "Which sentence uses the trapassato remoto correctly?", options: ["Dopo che ebbe chiuso la porta, spense la luce.", "Ebbe chiuso la porta e spense la luce.", "Dopo che ebbe chiuso la porta, ha spento la luce.", "Dopo che ebbe chiuso la porta, spegneva la luce."], correctIndex: 0, explanation: "Time clause + passato remoto main clause: the only slot for \"ebbe chiuso\"." },
        ],
      },
      {
        heading: "Choosing the past perfect",
        body: [
          "Compare: \"Quando ebbe letto la lettera, la bruciò\" (one event right after another, a sequence) and \"Quando arrivò, Marta aveva già letto la lettera\" (an earlier state, seen from a later point). The trapassato remoto gives the sense of one thing completing and the next following at once; the trapassato prossimo looks back.",
          "With \"appena\" the sequence is especially tight: \"Appena ebbe detto quelle parole, se ne pentì\" (no sooner had she said those words than she regretted them). English uses no sooner... than or hardly... when; Italian needs only \"appena\".",
        ],
        examples: [
          { es: "Quando ebbe letto la lettera, la bruciò.", en: "When she had read the letter, she burned it." },
          { es: "Quando Marta arrivò, lui aveva già letto la lettera.", en: "When Marta arrived, he had already read the letter." },
          { es: "Appena ebbe detto quelle parole, se ne pentì.", en: "No sooner had she said those words than she regretted them." },
          { es: "Dopo che ebbero cenato, il vecchio raccontò la sua storia.", en: "After they had dined, the old man told his story." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "No sooner had she said those words than she regretted them.", answer: "Appena ebbe detto quelle parole, se ne pentì.", altAnswers: ["Non appena ebbe detto quelle parole, se ne pentì."], explanation: "\"Appena\" + trapassato remoto renders no sooner... than." },
          { type: "listen-choose", audio: "Quando ebbe letto la lettera, la bruciò.", question: "What does it mean?", options: ["When she had read the letter, she burned it.", "When she was reading the letter, she burned it.", "She burned the letter before reading it.", "When she reads the letter, she'll burn it."], correctIndex: 0, explanation: "\"Ebbe letto\" completes before \"bruciò\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "After they had left, the house fell silent again.", answer: "Dopo che furono partiti, la casa tornò silenziosa.", altAnswers: ["Dopo che furono partiti, la casa ritornò silenziosa.", "Dopo che se ne furono andati, la casa tornò silenziosa."], explanation: "\"Partire\" takes \"essere\": \"furono partiti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "As soon as he had seen her, he recognised her.", answer: "Appena l'ebbe vista, la riconobbe.", altAnswers: ["Non appena l'ebbe vista, la riconobbe."], explanation: "Agreement with the preceding \"la\": \"l'ebbe vista\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "After he had sat down, he asked for a glass of water.", answer: "Dopo che si fu seduto, chiese un bicchiere d'acqua.", explanation: "Reflexive verbs take \"essere\": \"si fu seduto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "When she had read the letter, she burned it.", answer: "Quando ebbe letto la lettera, la bruciò.", explanation: "Sequence: \"ebbe letto\", then \"bruciò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative: trapassato remoto + passato remoto).", source: "After they had dined, the old man told his story.", answer: "Dopo che ebbero cenato, il vecchio raccontò la sua storia.", explanation: "\"Cenare\" takes \"avere\": \"ebbero cenato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (modern style, no trapassato remoto).", source: "After finishing, he went out.", answer: "Dopo aver finito, uscì.", altAnswers: ["Dopo avere finito, uscì.", "Finito il lavoro, uscì."], explanation: "The modern alternative: \"dopo aver\" + participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as he [had reached] the town, he looked for the notary's house.", sentence: "Come fu ___ in città, cercò la casa del notaio.", answer: "giunto", explanation: "\"Giungere\" takes \"essere\": \"fu giunto\". \"Come\" = as soon as, in older prose." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When the guests [had gone away], she cried.", sentence: "Quando gli ospiti se ne ___ andati, pianse.", answer: "furono", explanation: "\"Andarsene\" with \"essere\": \"se ne furono andati\"." },
      { type: "word-order", prompt: "Put the words in order to say: Lunch over, the children went out into the garden.", words: ["Finito", "il", "pranzo,", "i", "bambini", "uscirono", "in", "giardino."], translation: "Lunch over, the children went out into the garden.", explanation: "The absolute participle replaces \"dopo che ebbero finito il pranzo\"." },
      { type: "multiple-choice", question: "He had finished the work and was looking out of the window. Which is right?", options: ["Aveva finito il lavoro e guardava fuori dalla finestra.", "Ebbe finito il lavoro e guardava fuori dalla finestra.", "Ebbe finito il lavoro e guardò fuori dalla finestra.", "Fu finito il lavoro e guardava fuori dalla finestra."], correctIndex: 0, explanation: "A main clause can't take the trapassato remoto: use \"aveva finito\"." },
      { type: "dictation", audio: "Appena fu arrivata, si mise a scrivere.", explanation: "\"Fu arrivata\": essere + agreement." },
      { type: "speak", text: "Quando ebbe finito di leggere, chiuse il libro e spense la lampada.", prompt: "Say it in Italian (literary style): When she had finished reading, she closed the book and turned off the lamp.", tip: "\"Ebbe\": a long b.", explanation: "Trapassato remoto in the time clause, two passati remoti after it." },
    ],
  },
  {
    slug: "c1-literary-pronouns",
    level: "IT-C1",
    number: 2,
    title: "Egli, Ella, Esso",
    summary: "Recognise the literary subject pronouns egli, ella, esso, essa, essi, esse and costui, and know where they still appear today.",
    duration: "19 min",
    sections: [
      {
        heading: "Egli and ella",
        body: [
          "Older grammars taught that \"lui\", \"lei\" and \"loro\" were object pronouns and that the subject forms were \"egli\" (he), \"ella\" (she) and \"essi\" / \"esse\" (they). Modern Italian uses \"lui\", \"lei\" and \"loro\" as subjects, and has done so in speech for centuries; Manzoni used \"lui\" as a subject in \"I promessi sposi\" in 1840.",
          "You will still meet \"egli\" in formal writing: legal texts, older academic prose, encyclopaedias, some journalism (\"Egli dichiarò che...\"). It refers only to a male person and only as a subject. \"Ella\" is much rarer: today it sounds archaic or poetic and appears mainly in literature before 1950 and in very formal speeches. Don't use \"ella\" in your own writing unless you are imitating an older style.",
          "Note: \"egli\" never follows a preposition (\"*con egli\" is wrong: \"con lui\") and is never an object.",
        ],
        examples: [
          { es: "Egli sostenne che il contratto era nullo.", en: "He maintained that the contract was void." },
          { es: "Lui sostenne che il contratto era nullo.", en: "He maintained that the contract was void. (modern)" },
          { es: "Egli nacque a Genova nel 1805.", en: "He was born in Genoa in 1805." },
          { es: "Partii con lui il giorno dopo.", en: "I left with him the next day." },
          { es: "Lei non rispose.", en: "She didn't answer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal written style, with egli).", source: "He maintained that the contract was void.", answer: "Egli sostenne che il contratto era nullo.", altAnswers: ["Egli sostenne che il contratto fosse nullo."], explanation: "\"Egli\": formal subject pronoun for a man." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Partii con lui il giorno dopo.", "Partii con egli il giorno dopo.", "Partii con esso il giorno dopo.", "Partii con ello il giorno dopo."], correctIndex: 0, explanation: "After a preposition only \"lui\": \"egli\" is a subject form." },
        ],
      },
      {
        heading: "Esso, essa, essi, esse",
        body: [
          "\"Esso\" and \"essa\" are subject pronouns for things and animals (it): \"Il documento è stato firmato; esso entrerà in vigore domani\". \"Essi\" and \"esse\" are the plurals and, in older or formal texts, can also refer to people (they). In modern Italian they survive mainly in legal, technical and administrative writing.",
          "After prepositions \"esso\" and its forms are still common in formal prose: \"con esso\", \"su di essa\", \"tra essi\". Here \"con lui\" would wrongly suggest a person; in speech Italians prefer \"ci\" or the noun itself: \"ci ho lavorato\" rather than \"ho lavorato su di esso\". In everyday Italian the subject is usually just left out: \"Il documento è firmato ed entrerà in vigore domani\".",
        ],
        examples: [
          { es: "Il regolamento è stato approvato; esso entrerà in vigore a gennaio.", en: "The regulation has been approved; it will come into force in January." },
          { es: "La legge e le norme ad essa collegate.", en: "The law and the rules connected to it." },
          { es: "I cittadini e i diritti di cui essi godono.", en: "Citizens and the rights they enjoy." },
          { es: "Il cane era vecchio, ma esso seguiva ancora il padrone.", en: "The dog was old, but it still followed its master." },
          { es: "Il contratto è firmato ed entrerà in vigore domani.", en: "The contract is signed and will come into force tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal administrative style).", source: "The regulation has been approved; it will come into force in January.", answer: "Il regolamento è stato approvato; esso entrerà in vigore a gennaio.", altAnswers: ["Il regolamento è stato approvato; esso entrerà in vigore in gennaio.", "Il regolamento è stato approvato ed entrerà in vigore a gennaio."], explanation: "\"Esso\" for a thing, in formal writing; or drop it." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The law and the rules connected [to it].", sentence: "La legge e le norme ___ collegate.", answer: "ad essa", altAnswers: ["a essa"], explanation: "\"Essa\" after a preposition for a feminine thing; \"ad\" before a vowel is common in formal writing." },
        ],
      },
      {
        heading: "Costui, costei, costoro",
        body: [
          "\"Costui\" (this man), \"costei\" (this woman) and \"costoro\" (these people) are literary demonstratives for people. They often carry contempt: \"Chi è costui?\" (and who might this fellow be?). In modern speech they survive with ironic or hostile tone: \"E costoro chi sarebbero?\" Manzoni's Don Abbondio, puzzling over an ancient philosopher he has never heard of, asks: \"Carneade! Chi era costui?\", a line Italians still quote when someone famous is unknown to them.",
          "\"Colui\", \"colei\" and \"coloro\" (the one, those) introduce relative clauses in formal style: \"coloro che desiderano partecipare\" (those who wish to take part). They are not pejorative and are common in notices and regulations.",
        ],
        examples: [
          { es: "Carneade! Chi era costui?", en: "Carneades! Who was he?" },
          { es: "E costoro chi sarebbero?", en: "And who are these people supposed to be?" },
          { es: "Coloro che desiderano partecipare devono iscriversi entro venerdì.", en: "Those who wish to take part must register by Friday." },
          { es: "Colui che vince riceverà una borsa di studio.", en: "The one who wins will receive a scholarship." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal notice).", source: "Those who wish to take part must register by Friday.", answer: "Coloro che desiderano partecipare devono iscriversi entro venerdì.", altAnswers: ["Coloro che desiderano partecipare devono registrarsi entro venerdì.", "Quelli che desiderano partecipare devono iscriversi entro venerdì."], explanation: "\"Coloro che\" = those who, neutral in formal writing." },
          { type: "listen-choose", audio: "E costoro chi sarebbero?", question: "What is the speaker's attitude?", options: ["Suspicious or scornful", "Grateful", "Affectionate", "Indifferent"], correctIndex: 0, explanation: "\"Costoro\" plus the conditional of doubt sounds hostile." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (encyclopaedia style, with egli).", source: "He was born in Genoa in 1805.", answer: "Egli nacque a Genova nel 1805.", altAnswers: ["Nacque a Genova nel 1805."], explanation: "\"Egli\" + passato remoto: classic encyclopaedia style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (modern style).", source: "He maintained that the contract was void.", answer: "Lui sostenne che il contratto era nullo.", altAnswers: ["Sostenne che il contratto era nullo.", "Sostenne che il contratto fosse nullo.", "Lui sostenne che il contratto fosse nullo."], explanation: "Modern Italian uses \"lui\" or drops the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style).", source: "Citizens and the rights they enjoy.", answer: "I cittadini e i diritti di cui essi godono.", altAnswers: ["I cittadini e i diritti di cui godono."], explanation: "\"Essi\" as a formal plural subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal notice).", source: "The one who wins will receive a scholarship.", answer: "Colui che vince riceverà una borsa di studio.", altAnswers: ["Chi vince riceverà una borsa di studio.", "Colui che vincerà riceverà una borsa di studio."], explanation: "\"Colui che\" or simply \"chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I left with him the next day.", answer: "Partii con lui il giorno dopo.", altAnswers: ["Partii con lui il giorno seguente.", "Partii con lui l'indomani."], explanation: "Never \"con egli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The box was heavy and there was nothing [in it].", sentence: "La cassa era pesante e non c'era nulla ___.", answer: "in essa", altAnswers: ["dentro di essa", "dentro"], explanation: "Formal \"in essa\"; in speech \"dentro\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[He] declared that he was innocent. (formal written style)", sentence: "___ dichiarò di essere innocente.", answer: "Egli", explanation: "\"Egli\" as subject, formal." },
      { type: "word-order", prompt: "Put the words in order to say: Carneades! Who was he?", words: ["Carneade!", "Chi", "era", "costui?"], translation: "Carneades! Who was he?", explanation: "Don Abbondio's famous line in \"I promessi sposi\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "egli", right: "he (formal subject)" },
          { left: "esso", right: "it (formal subject)" },
          { left: "costui", right: "this fellow (often scornful)" },
          { left: "coloro che", right: "those who" },
          { left: "essi", right: "they (formal)" },
        ],
        explanation: "Literary and formal pronouns.",
      },
      { type: "multiple-choice", question: "You are writing a modern email about a colleague. Which is natural?", options: ["Lui ha già firmato.", "Egli ha già firmato.", "Esso ha già firmato.", "Costui ha già firmato."], correctIndex: 0, explanation: "In modern everyday writing: \"lui\" or no pronoun." },
      { type: "dictation", audio: "Egli dichiarò di non sapere nulla.", explanation: "\"Egli\" + passato remoto: formal narrative." },
      { type: "speak", text: "Coloro che desiderano partecipare devono iscriversi entro venerdì.", prompt: "Read the notice aloud: Those who wish to take part must register by Friday.", tip: "\"Coloro\": stress on the second syllable, co-LO-ro.", explanation: "\"Coloro che\": formal, not pejorative." },
    ],
  },
  {
    slug: "c1-fossil-forms",
    level: "IT-C1",
    number: 3,
    title: "Affittasi, Vendesi, Dicesi",
    summary: "Read and use the enclitic fossils of signs, ads and formal definitions: affittasi, vendesi, cercasi, dicesi, trattasi.",
    duration: "19 min",
    sections: [
      {
        heading: "Signs and small ads",
        body: [
          "In old Italian, unstressed pronouns could attach to the end of a finite verb: \"vendesi\" = \"si vende\". Modern Italian lost this pattern, but a handful of forms survive as fossils, mostly on signs and in classified ads: \"affittasi\" (for rent), \"vendesi\" (for sale), \"cercasi\" (wanted), \"regalasi\" (free to a good home).",
          "Grammatically they are the si passivante, so a purist writes the plural with a plural verb: \"affittansi camere\", \"vendonsi appartamenti\". These plurals sound very old-fashioned; most signs today write \"affittasi camere\" or simply \"si affittano camere\". On a sign either is fine; in a sentence use the modern form.",
          "Fossils don't conjugate: never \"*affittavasi\" in modern writing. And they belong to a written telegraphic register: you don't say \"Vendesi la mia macchina\" to a friend.",
        ],
        examples: [
          { es: "Affittasi bilocale arredato, zona stazione.", en: "Furnished one-bedroom flat for rent, station area." },
          { es: "Vendesi Fiat Panda, ottime condizioni.", en: "Fiat Panda for sale, excellent condition." },
          { es: "Cercasi commessa con esperienza.", en: "Experienced shop assistant wanted." },
          { es: "Regalasi gattini a famiglie amanti degli animali.", en: "Kittens free to animal-loving families." },
          { es: "Si affittano camere a studenti.", en: "Rooms to let to students." },
          { es: "Vendo la mia macchina, ti interessa?", en: "I'm selling my car, are you interested?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (shop window sign).", source: "Experienced shop assistant wanted.", answer: "Cercasi commessa con esperienza.", altAnswers: ["Cercasi commesso con esperienza.", "Cercasi commessa esperta.", "Cercasi commesso esperto."], explanation: "\"Cercasi\" = wanted, on signs." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (modern sentence, not a sign).", source: "Rooms to let to students.", answer: "Si affittano camere a studenti.", altAnswers: ["Si affittano camere agli studenti.", "Si affittano stanze a studenti."], explanation: "Modern si passivante: plural verb with a plural subject." },
        ],
      },
      {
        heading: "Dicesi and trattasi: formal definitions",
        body: [
          "Two fossils live in formal prose. \"Dicesi\" opens definitions in old textbooks and is still used, half-jokingly, to define something: \"Dicesi triangolo un poligono con tre lati\" (a polygon with three sides is called a triangle). \"Trattasi di\" (it is a matter of, we are dealing with) is common in bureaucratic and journalistic Italian: \"Trattasi di un errore materiale\".",
          "Both have modern equivalents that sound less stiff: \"Si chiama triangolo...\", \"Si tratta di un errore\". Use \"trattasi\" if you are imitating an official letter; use \"si tratta di\" otherwise. Overusing fossils is a typical feature of the bureaucratic style you will study in Unit 4.",
        ],
        examples: [
          { es: "Dicesi triangolo un poligono con tre lati.", en: "A polygon with three sides is called a triangle." },
          { es: "Trattasi di un errore materiale.", en: "This is a clerical error." },
          { es: "Si tratta di un errore materiale.", en: "It's a clerical error. (modern)" },
          { es: "Dicesi amicizia quella cosa che ti fa rispondere al telefono alle tre di notte.", en: "Friendship is what makes you answer the phone at three in the morning. (playful)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (official letter style).", source: "This is a clerical error.", answer: "Trattasi di un errore materiale.", altAnswers: ["Si tratta di un errore materiale."], explanation: "\"Trattasi di\": bureaucratic fossil of \"si tratta di\"." },
          { type: "multiple-choice", question: "You text a friend: It's about the rent. Which is natural?", options: ["Si tratta dell'affitto.", "Trattasi dell'affitto.", "Trattansi dell'affitto.", "Dicesi l'affitto."], correctIndex: 0, explanation: "In everyday writing: \"si tratta di\"." },
        ],
      },
      {
        heading: "Other fossils in documents",
        body: [
          "Official documents keep a few more frozen forms. \"Addì\" (on the day) opens dates in minutes and certificates: \"Addì 3 marzo 2025\". \"Suddetto\" and \"sopraccitato\" (aforementioned) refer back. \"Lì\" after a place in letter dates means \"on\": \"Bologna, lì 5 maggio 2025\". In literary prose you will also see enclitics on imperfects and passati remoti: \"diceasi\", \"vedevasi\", \"fecesi\", which modern writers use only for comic effect.",
          "Recognise all of these; produce only \"affittasi\", \"vendesi\", \"cercasi\" on signs and \"trattasi\" in deliberately formal writing.",
        ],
        examples: [
          { es: "Addì 3 marzo 2025, presso la sede comunale.", en: "On 3 March 2025, at the town hall." },
          { es: "Bologna, lì 5 maggio 2025", en: "Bologna, 5 May 2025" },
          { es: "Il suddetto signor Bianchi dichiara quanto segue.", en: "The aforementioned Mr Bianchi declares the following." },
          { es: "Vedevasi in lontananza un campanile.", en: "In the distance a bell tower could be seen. (old literary)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (modern style).", source: "In the distance a bell tower could be seen.", answer: "In lontananza si vedeva un campanile.", altAnswers: ["Si vedeva un campanile in lontananza."], explanation: "\"Vedevasi\" is the old enclitic form of \"si vedeva\"." },
          { type: "dictation", audio: "Il suddetto signor Bianchi dichiara quanto segue.", explanation: "\"Suddetto\" = aforementioned; \"quanto segue\" = the following." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (sign).", source: "Fiat Panda for sale, excellent condition.", answer: "Vendesi Fiat Panda, ottime condizioni.", altAnswers: ["Vendesi Fiat Panda in ottime condizioni."], explanation: "\"Vendesi\" on signs and ads." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (sign).", source: "Furnished flat for rent.", answer: "Affittasi appartamento arredato.", altAnswers: ["Affittasi appartamento ammobiliato."], explanation: "\"Affittasi\" + noun, no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (said to a friend).", source: "I'm selling my car, are you interested?", answer: "Vendo la mia macchina, ti interessa?", altAnswers: ["Vendo la macchina, ti interessa?", "Vendo la mia auto, ti interessa?"], explanation: "In conversation, no fossils: just \"vendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (modern style).", source: "It's a clerical error.", answer: "Si tratta di un errore materiale.", explanation: "\"Si tratta di\": the modern form of \"trattasi di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (modern sentence).", source: "Houses are sold here.", answer: "Qui si vendono case.", altAnswers: ["Si vendono case qui."], explanation: "Plural subject, plural verb: \"si vendono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Puppies [free to a good home].", sentence: "___ cuccioli.", answer: "Regalasi", explanation: "\"Regalasi\" = given away free, on ads." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[On the day] 10 April 2025, the assembly met.", sentence: "___ 10 aprile 2025, si è riunita l'assemblea.", answer: "Addì", explanation: "\"Addì\" opens dates in official minutes." },
      { type: "word-order", prompt: "Put the words in order to say: A polygon with three sides is called a triangle.", words: ["Dicesi", "triangolo", "un", "poligono", "con", "tre", "lati."], translation: "A polygon with three sides is called a triangle.", explanation: "The classic textbook definition with \"dicesi\"." },
      { type: "multiple-choice", question: "Which is the purist plural on an old sign?", options: ["Affittansi camere", "Affittasi camere", "Affittano camere", "Affittatesi camere"], correctIndex: 0, explanation: "\"Affittansi\" agrees with \"camere\"; \"affittasi camere\" is the common modern sign." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "vendesi", right: "for sale" },
          { left: "affittasi", right: "for rent" },
          { left: "cercasi", right: "wanted" },
          { left: "trattasi di", right: "it is a matter of" },
          { left: "suddetto", right: "aforementioned" },
        ],
        explanation: "Fossils and formulas of signs and documents.",
      },
      { type: "speak", text: "Affittasi bilocale arredato, zona stazione, a referenziati.", prompt: "Read the ad aloud: Furnished one-bedroom flat for rent, station area, to applicants with references.", tip: "af-fit-TA-si: stress as in \"affitta\".", explanation: "\"A referenziati\" = to people with references." },
    ],
  },
  {
    slug: "c1-literary-narration",
    level: "IT-C1",
    number: 4,
    title: "Literary Narration",
    summary: "See how a novel combines the imperfetto, passato remoto, both past perfects, the future in the past and the historical present.",
    duration: "19 min",
    sections: [
      {
        heading: "The tense map of a novel",
        body: [
          "A classic Italian novel is built on a map of tenses, each with a fixed job. The passato remoto carries the main events; the imperfetto paints the background; the trapassato prossimo looks back to earlier events; the trapassato remoto appears only in time clauses right before a passato remoto. Dialogue, inside quotation marks, uses the tenses of speech: present, passato prossimo, future.",
          "Read this short passage and label each verb: \"Era una mattina di marzo. Lucia, che non aveva dormito, si affacciò alla finestra. Quando ebbe visto la carrozza, capì. 'Sono venuti a prendermi', disse.\" Background, earlier event, main event, sequence, main events, then speech in the passato prossimo.",
          "Learners often worry that the passato prossimo inside dialogue breaks the rule of one event tense. It doesn't: the narrator's voice and the characters' voices are separate layers.",
        ],
        examples: [
          { es: "Era una mattina di marzo.", en: "It was a March morning." },
          { es: "Lucia, che non aveva dormito, si affacciò alla finestra.", en: "Lucia, who had not slept, looked out of the window." },
          { es: "Quando ebbe visto la carrozza, capì.", en: "When she had seen the carriage, she understood." },
          { es: "\"Sono venuti a prendermi\", disse.", en: "\"They've come to fetch me\", she said." },
          { es: "\"Che cosa hai fatto?\" gli chiese la madre.", en: "\"What have you done?\" his mother asked him." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "Lucia, who had not slept, looked out of the window.", answer: "Lucia, che non aveva dormito, si affacciò alla finestra.", explanation: "\"Aveva dormito\" looks back; \"si affacciò\" is the event." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative with dialogue).", source: "\"They've come to fetch me\", she said.", answer: "\"Sono venuti a prendermi\", disse.", altAnswers: ["\"Sono venuti a prendermi\", disse lei."], explanation: "Speech keeps the passato prossimo; the narrator uses \"disse\"." },
        ],
      },
      {
        heading: "Looking forward from the past",
        body: [
          "To anticipate an event later than the story's moment, Italian uses the past conditional, the future in the past you met at Upper Intermediate level: \"Non sapeva che non l'avrebbe mai più rivista\" (he didn't know he would never see her again). English uses would; Italian needs the compound form, never \"*la rivedrebbe\".",
          "Novelists also use it for a flash-forward that the narrator knows about: \"Molti anni dopo, avrebbe ricordato quel giorno come il più felice della sua vita\" (many years later, he would remember that day...). This narrative conditional is a hallmark of literary style.",
          "Older narrative also uses the plain future for the narrator's comments to the reader: \"Come vedremo, la cosa non finì lì\" (as we shall see).",
        ],
        examples: [
          { es: "Non sapeva che non l'avrebbe mai più rivista.", en: "He didn't know he would never see her again." },
          { es: "Molti anni dopo, avrebbe ricordato quel giorno come il più felice della sua vita.", en: "Many years later, he would remember that day as the happiest of his life." },
          { es: "Quella lettera avrebbe cambiato tutto.", en: "That letter would change everything." },
          { es: "Come vedremo, la cosa non finì lì.", en: "As we shall see, the matter did not end there." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "He didn't know he would never see her again.", answer: "Non sapeva che non l'avrebbe mai più rivista.", altAnswers: ["Non sapeva che non l'avrebbe più rivista.", "Non sapeva che non l'avrebbe rivista mai più."], explanation: "Future in the past: past conditional \"avrebbe rivista\", agreeing with \"la\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "That letter [would change] everything.", sentence: "Quella lettera ___ tutto.", answer: "avrebbe cambiato", explanation: "A flash-forward: past conditional." },
        ],
      },
      {
        heading: "Historical present and narrative imperfetto",
        body: [
          "Two special effects. The historical present switches the narration into the present for drama: \"Cammina da ore. All'improvviso sente un rumore, si volta: nessuno.\" Once you switch, stay in the present until the scene ends. Many contemporary novels are written entirely in the present.",
          "The narrative imperfetto uses the imperfetto for a single completed event, usually at the end of a story or in journalism: \"Due giorni dopo, moriva a Roma\" (two days later, he died in Rome). It slows the event down, like a camera lingering. Recognise it; in your own writing use it sparingly, for endings.",
        ],
        examples: [
          { es: "Cammina da ore. All'improvviso sente un rumore, si volta: nessuno.", en: "He has been walking for hours. Suddenly he hears a noise, turns round: nobody." },
          { es: "Due giorni dopo, moriva a Roma.", en: "Two days later, he died in Rome." },
          { es: "Nel 1946 l'Italia diventava una repubblica.", en: "In 1946 Italy became a republic." },
          { es: "La porta si apre ed entra un uomo con il cappello.", en: "The door opens and a man in a hat comes in." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Due giorni dopo, moriva a Roma.\" Why the imperfetto?", options: ["It is a narrative imperfetto that dwells on a final event.", "He was dying for a long time.", "It's a mistake for morì.", "It describes a habit."], correctIndex: 0, explanation: "The narrative imperfetto presents a single event in slow motion." },
          { type: "listen-choose", audio: "La porta si apre ed entra un uomo con il cappello.", question: "What tense is the narrator using?", options: ["The historical present", "The passato remoto", "The imperfetto", "The future"], correctIndex: 0, explanation: "\"Si apre\", \"entra\": present for drama." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "When she had seen the carriage, she understood.", answer: "Quando ebbe visto la carrozza, capì.", explanation: "Trapassato remoto in the time clause, then \"capì\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "Many years later, he would remember that day.", answer: "Molti anni dopo, avrebbe ricordato quel giorno.", altAnswers: ["Molti anni più tardi, avrebbe ricordato quel giorno."], explanation: "Narrative flash-forward: \"avrebbe ricordato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "As we shall see, the matter did not end there.", answer: "Come vedremo, la cosa non finì lì.", altAnswers: ["Come vedremo, la faccenda non finì lì."], explanation: "The narrator's future addresses the reader." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (historical present).", source: "The door opens and a man in a hat comes in.", answer: "La porta si apre ed entra un uomo con il cappello.", altAnswers: ["La porta si apre ed entra un uomo col cappello.", "La porta si apre e entra un uomo con il cappello."], explanation: "\"Ed\" before a vowel is common; present tense for drama." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative with dialogue).", source: "\"What have you done?\" his mother asked him.", answer: "\"Che cosa hai fatto?\" gli chiese la madre.", altAnswers: ["\"Cosa hai fatto?\" gli chiese la madre.", "\"Che cosa hai fatto?\" gli chiese sua madre."], explanation: "Speech: passato prossimo; narration: \"chiese\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It [was] a March morning.", sentence: "___ una mattina di marzo.", answer: "Era", explanation: "Scene-setting: imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In 1946 Italy [became] a republic. (narrative imperfetto)", sentence: "Nel 1946 l'Italia ___ una repubblica.", answer: "diventava", altAnswers: ["divenne"], explanation: "Narrative imperfetto \"diventava\"; \"divenne\" is the plain passato remoto." },
      { type: "word-order", prompt: "Put the words in order to say: He didn't know he would never see her again.", words: ["Non", "sapeva", "che", "non", "l'avrebbe", "mai", "più", "rivista."], translation: "He didn't know he would never see her again.", altOrders: [["Non", "sapeva", "che", "non", "l'avrebbe", "rivista", "mai", "più."]], explanation: "Future in the past with the past conditional." },
      { type: "multiple-choice", question: "Which verb is wrong in this literary passage? \"Era tardi. Quando ebbe chiuso la bottega, Marco ha preso il cappello e uscì.\"", options: ["ha preso", "Era", "ebbe chiuso", "uscì"], correctIndex: 0, explanation: "The narrator's events stay in the passato remoto: \"prese\"." },
      { type: "dictation", audio: "Quella lettera avrebbe cambiato tutto.", explanation: "The past conditional as a flash-forward." },
      { type: "speak", text: "Cammina da ore. All'improvviso sente un rumore, si volta: nessuno.", prompt: "Read it as a storyteller would: He has been walking for hours. Suddenly he hears a noise, turns round: nobody.", tip: "Pause at the colon before \"nessuno\".", explanation: "The historical present creates suspense." },
    ],
  },
  {
    slug: "c1-drill-literary-tenses",
    level: "IT-C1",
    number: 5,
    title: "Drill: Literary Tenses",
    summary: "Produce the trapassato remoto, the passato remoto and the future in the past at speed, and recognise literary forms.",
    duration: "25 min",
    kind: "drill",
    sections: [
      {
        heading: "Quick reference",
        body: [
          "Trapassato remoto: \"ebbi, avesti, ebbe, avemmo, aveste, ebbero\" or \"fui, fosti, fu, fummo, foste, furono\" + participle, only after \"dopo che\", \"appena\", \"quando\" with a passato remoto main verb. Future in the past: past conditional (\"avrebbe fatto\", \"sarebbe tornato\").",
          "Formal pronouns: \"egli\" (he), \"esso / essa\" (it), \"essi / esse\" (they), \"coloro che\" (those who).",
        ],
        examples: [
          { es: "Dopo che ebbe pagato, se ne andò.", en: "After he had paid, he left." },
          { es: "Appena fummo usciti, cominciò a nevicare.", en: "As soon as we had gone out, it began to snow." },
          { es: "Promise che sarebbe tornato.", en: "He promised he would come back." },
          { es: "Egli rifiutò l'offerta.", en: "He refused the offer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "After he had paid, he left.", answer: "Dopo che ebbe pagato, se ne andò.", altAnswers: ["Dopo che ebbe pagato, partì.", "Dopo che ebbe pagato, uscì."], explanation: "\"Ebbe pagato\" + \"se ne andò\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "As soon as we had gone out, it began to snow.", answer: "Appena fummo usciti, cominciò a nevicare.", altAnswers: ["Appena fummo uscite, cominciò a nevicare.", "Non appena fummo usciti, cominciò a nevicare."], explanation: "\"Uscire\" with \"essere\": \"fummo usciti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "When they had eaten, they went to bed.", answer: "Quando ebbero mangiato, andarono a letto.", altAnswers: ["Quando ebbero mangiato, se ne andarono a letto."], explanation: "\"Ebbero mangiato\", \"andarono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "As soon as she had arrived, she telephoned her mother.", answer: "Appena fu arrivata, telefonò a sua madre.", altAnswers: ["Non appena fu arrivata, telefonò a sua madre.", "Appena fu arrivata, telefonò alla madre."], explanation: "\"Fu arrivata\": essere + feminine agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "After I had written the letter, I tore it up.", answer: "Dopo che ebbi scritto la lettera, la strappai.", explanation: "\"Ebbi scritto\", \"strappai\": io forms." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "When you had left, we cried. (to one person)", answer: "Quando fosti partito, piangemmo.", altAnswers: ["Quando fosti partita, piangemmo."], explanation: "\"Fosti partito / partita\" for tu." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "As soon as they had sat down, the music began.", answer: "Appena si furono seduti, cominciò la musica.", altAnswers: ["Non appena si furono seduti, cominciò la musica.", "Appena si furono seduti, la musica cominciò."], explanation: "Reflexive with \"essere\": \"si furono seduti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "He promised he would come back.", answer: "Promise che sarebbe tornato.", explanation: "Future in the past: \"sarebbe tornato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "She knew they would never forgive her.", answer: "Sapeva che non l'avrebbero mai perdonata.", altAnswers: ["Sapeva che non l'avrebbero perdonata mai."], explanation: "\"L'avrebbero perdonata\": agreement with \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal style, with egli).", source: "He refused the offer.", answer: "Egli rifiutò l'offerta.", explanation: "\"Egli\" + passato remoto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After the soldiers [had crossed] the bridge, they blew it up.", sentence: "Dopo che i soldati ___ attraversato il ponte, lo fecero saltare.", answer: "ebbero", explanation: "\"Ebbero attraversato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When the guests [had gone], she sat down.", sentence: "Quando gli ospiti ___ andati via, si sedette.", answer: "furono", explanation: "\"Andare\" with \"essere\": \"furono andati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as [I had understood], I apologised.", sentence: "Appena ___, chiesi scusa.", answer: "ebbi capito", explanation: "\"Ebbi capito\", io form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We didn't imagine that the war [would last] so long.", sentence: "Non immaginavamo che la guerra ___ così tanto.", answer: "sarebbe durata", explanation: "Future in the past; \"durare\" with \"essere\", agreeing with \"guerra\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Those who] arrive late will not be admitted.", sentence: "___ arrivano in ritardo non saranno ammessi.", answer: "Coloro che", altAnswers: ["Quelli che"], explanation: "\"Coloro che\": formal those who." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Appena fu partito, la casa si svuotò.", "Appena ebbe partito, la casa si svuotò.", "Appena fu partito, la casa si è svuotata.", "Fu partito e la casa si svuotò."], correctIndex: 0, explanation: "\"Partire\" takes \"essere\", and the main verb is in the passato remoto." },
      { type: "dictation", audio: "Dopo che ebbero firmato, si strinsero la mano.", explanation: "\"Si strinsero\": \"stringere\" → \"strinsero\"." },
      { type: "dictation", audio: "Non sapeva che quella sarebbe stata l'ultima volta.", explanation: "\"Sarebbe stata\": future in the past." },
      { type: "speak", text: "Appena ebbe finito di parlare, tutti si alzarono in piedi.", prompt: "Say it in Italian (literary style): As soon as he had finished speaking, everyone stood up.", tip: "\"Si alzarono\": stress on -za-.", explanation: "Trapassato remoto + passato remoto." },
    ],
  },
  {
    slug: "c1-reading-lab-novel-excerpt",
    level: "IT-C1",
    number: 6,
    title: "Reading Lab: A Novel Excerpt",
    summary: "Read an adapted passage from the first chapter of Alessandro Manzoni's I promessi sposi (1840) and follow its tenses and style.",
    duration: "19 min",
    sections: [
      {
        heading: "Quel ramo del lago di Como",
        body: [
          "\"I promessi sposi\" (The Betrothed) by Alessandro Manzoni (1785-1873) is the most famous Italian novel. Set in Lombardy in 1628-1630, it follows Renzo and Lucia, two young silk workers whose wedding is blocked by a local tyrant, Don Rodrigo. Every Italian reads it at school; its lines are part of everyday speech.",
          "It opens with a long description of the landscape around Lecco. The first words are known to every Italian: \"Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti...\". Note the imperfetto-like timelessness of the description: Manzoni uses the present for the landscape that still exists. The lines below, after the first, are adapted into modern Italian.",
          "Glosses: \"il ramo\" (the branch, arm of a lake), \"volgere a mezzogiorno\" (to turn south; \"mezzogiorno\" = south, in old usage), \"il curato\" (the parish priest), \"il breviario\" (the prayer book).",
        ],
        examples: [
          { es: "Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti...", en: "That branch of Lake Como which turns south, between two unbroken chains of mountains..." },
          { es: "La sera del 7 novembre 1628, don Abbondio, curato di un paesino, tornava a casa.", en: "On the evening of 7 November 1628, Don Abbondio, priest of a small village, was walking home." },
          { es: "Camminava lentamente e leggeva il breviario.", en: "He was walking slowly and reading his prayer book." },
          { es: "A una svolta della strada vide due uomini che lo aspettavano.", en: "At a bend in the road he saw two men who were waiting for him." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "He was walking slowly and reading his prayer book.", answer: "Camminava lentamente e leggeva il breviario.", altAnswers: ["Camminava piano e leggeva il breviario."], explanation: "Background actions: imperfetto." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "At a bend in the road he saw two men who were waiting for him.", answer: "A una svolta della strada vide due uomini che lo aspettavano.", explanation: "\"Vide\" (event), \"aspettavano\" (ongoing): the classic combination." },
        ],
      },
      {
        heading: "The bravi",
        body: [
          "The two men are \"bravi\", armed thugs in the service of Don Rodrigo. Their message to Don Abbondio is one of the most quoted lines in Italian: \"Questo matrimonio non s'ha da fare, né domani, né mai\". Italians use it jokingly whenever someone tries to block a plan.",
          "Note \"non s'ha da fare\": \"avere da\" + infinitive is an old way of saying must; modern Italian would write \"non si deve fare\". Don Abbondio, a coward, tries to argue, then gives in. Glosses: \"il bravo\" (hired thug), \"cedere\" (to give in), \"tremare\" (to tremble).",
        ],
        examples: [
          { es: "Uno dei due gli si piantò davanti.", en: "One of the two planted himself in front of him." },
          { es: "\"Lei ha intenzione di sposare domani Renzo Tramaglino e Lucia Mondella?\"", en: "\"Do you intend to marry Renzo Tramaglino and Lucia Mondella tomorrow?\"" },
          { es: "\"Questo matrimonio non s'ha da fare, né domani, né mai.\"", en: "\"This wedding is not to take place, neither tomorrow nor ever.\"" },
          { es: "Don Abbondio tremava e non riuscì a rispondere.", en: "Don Abbondio was trembling and couldn't answer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into modern Italian.", source: "This wedding must not take place.", answer: "Questo matrimonio non si deve fare.", altAnswers: ["Questo matrimonio non deve essere celebrato.", "Questo matrimonio non si deve celebrare."], explanation: "\"Non s'ha da fare\" is old Italian for \"non si deve fare\"." },
          { type: "listen-choose", audio: "Questo matrimonio non s'ha da fare, né domani, né mai.", question: "What are the men demanding?", options: ["That the wedding never takes place", "That the wedding be postponed until tomorrow", "That the priest marry them tomorrow", "That the wedding be held in secret"], correctIndex: 0, explanation: "\"Né domani, né mai\" = neither tomorrow nor ever." },
        ],
      },
      {
        heading: "The priest's courage",
        body: [
          "Later in the novel, scolded by a cardinal for his cowardice, Don Abbondio offers his own defence: \"Il coraggio, uno non se lo può dare\" (courage is not something you can give yourself). It is another line Italians quote, half in sympathy, when someone admits they were afraid.",
          "Notice the dislocation: \"il coraggio\" is placed first and repeated by \"lo\". This spoken structure, which you studied at Upper Intermediate level, gives the line its colloquial strength, inside a novel otherwise written in careful literary prose. Manzoni deliberately rewrote the novel between 1827 and 1840 to bring its language closer to the spoken Florentine of educated people, a choice that shaped modern standard Italian.",
        ],
        examples: [
          { es: "Il coraggio, uno non se lo può dare.", en: "Courage is not something you can give yourself." },
          { es: "Manzoni riscrisse il romanzo per avvicinarlo alla lingua parlata.", en: "Manzoni rewrote the novel to bring it closer to the spoken language." },
          { es: "La paura, chi non ce l'ha?", en: "Fear: who doesn't have it?" },
          { es: "Don Abbondio non era nato con un cuor di leone.", en: "Don Abbondio had not been born with a lion's heart." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "Manzoni rewrote the novel to bring it closer to the spoken language.", answer: "Manzoni riscrisse il romanzo per avvicinarlo alla lingua parlata.", explanation: "\"Riscrivere\" → \"riscrisse\"; pronoun attached to the infinitive." },
          { type: "word-order", prompt: "Put the words in order to say: Courage is not something you can give yourself.", words: ["Il", "coraggio,", "uno", "non", "se", "lo", "può", "dare."], translation: "Courage is not something you can give yourself.", explanation: "Dislocation: \"il coraggio\" first, picked up by \"lo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "On the evening of 7 November 1628, Don Abbondio was walking home.", answer: "La sera del 7 novembre 1628, don Abbondio tornava a casa.", altAnswers: ["La sera del 7 novembre 1628 don Abbondio tornava a casa.", "La sera del 7 novembre 1628, don Abbondio rientrava a casa."], explanation: "Background: imperfetto \"tornava\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "One of the two planted himself in front of him.", answer: "Uno dei due gli si piantò davanti.", explanation: "\"Piantarsi davanti a qualcuno\" = to plant oneself in front of someone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "Don Abbondio was trembling and couldn't answer.", answer: "Don Abbondio tremava e non riuscì a rispondere.", explanation: "State (\"tremava\") + event (\"non riuscì\")." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (polite question, Lei).", source: "Do you intend to marry Renzo and Lucia tomorrow?", answer: "Lei ha intenzione di sposare domani Renzo e Lucia?", altAnswers: ["Ha intenzione di sposare domani Renzo e Lucia?", "Ha intenzione di sposare Renzo e Lucia domani?", "Lei ha intenzione di sposare Renzo e Lucia domani?"], explanation: "\"Sposare\" a couple = to marry them, said of the priest." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fear: who doesn't have it?", answer: "La paura, chi non ce l'ha?", explanation: "Dislocation with \"ce l'ha\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "That branch of Lake Como [which turns] south...", sentence: "Quel ramo del lago di Como, ___ a mezzogiorno...", answer: "che volge", explanation: "Manzoni's opening: \"che volge a mezzogiorno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Manzoni [rewrote] the novel between 1827 and 1840.", sentence: "Manzoni ___ il romanzo tra il 1827 e il 1840.", answer: "riscrisse", explanation: "\"Riscrivere\" follows \"scrivere\": \"riscrisse\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il curato", right: "the parish priest" },
          { left: "il bravo", right: "a hired thug" },
          { left: "il breviario", right: "the prayer book" },
          { left: "il ramo del lago", right: "the arm of the lake" },
          { left: "mezzogiorno", right: "south (old usage)" },
        ],
        explanation: "Key words of the first chapter.",
      },
      { type: "multiple-choice", question: "Today an Italian says \"Questo matrimonio non s'ha da fare!\" about a business merger. What do they mean?", options: ["They will stop it at any cost (jokingly).", "They are officiating at it.", "It has been postponed.", "It's a happy event."], correctIndex: 0, explanation: "The quotation is used ironically to oppose any plan." },
      { type: "dictation", audio: "Il coraggio, uno non se lo può dare.", explanation: "Don Abbondio's defence, with dislocation." },
      { type: "speak", text: "Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti.", prompt: "Read Manzoni's opening aloud: That branch of Lake Como which turns south, between two unbroken chains of mountains.", tip: "Pause at each comma; \"catene\" and \"interrotte\": clear double t.", explanation: "The most famous opening in Italian literature." },
    ],
  },
  {
    slug: "c1-error-hunt-literary",
    level: "IT-C1",
    number: 7,
    title: "Error Hunt: Literary Tenses",
    summary: "Fix the classic slips with literary tenses: the wrong auxiliary, a passato prossimo after a trapassato remoto, and the trapassato remoto out of place.",
    duration: "19 min",
    sections: [
      {
        heading: "The wrong auxiliary",
        body: [
          "Each sentence here comes from a learner's literary pastiche and contains one mistake. The first family: the auxiliary. \"*Appena ebbe arrivato\" applies \"avere\" to a verb that takes \"essere\". The trapassato remoto uses exactly the same auxiliary as the passato prossimo: \"è arrivato\" → \"fu arrivato\"; \"si è seduta\" → \"si fu seduta\".",
          "Agreement goes with the auxiliary. With \"essere\" the participle agrees with the subject (\"appena fu arrivata\"); with \"avere\" it agrees with a preceding direct object pronoun (\"appena l'ebbe letta\"). Learners who drop the agreement in the trapassato remoto would not drop it in the passato prossimo: the rules are the same.",
        ],
        examples: [
          { es: "Appena fu arrivato, chiese di parlare con il notaio.", en: "As soon as he had arrived, he asked to speak to the notary." },
          { es: "Dopo che si fu seduta, la contessa sorrise.", en: "After she had sat down, the countess smiled." },
          { es: "Appena l'ebbe letta, strappò la lettera.", en: "As soon as he had read it, he tore up the letter." },
          { es: "Quando furono scesi dalla carrozza, entrarono in chiesa.", en: "When they had got out of the carriage, they went into the church." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Appena ebbe arrivato, chiese di parlare con il notaio\". Write it correctly: As soon as he had arrived, he asked to speak to the notary.", source: "As soon as he had arrived, he asked to speak to the notary.", answer: "Appena fu arrivato, chiese di parlare con il notaio.", altAnswers: ["Appena fu arrivato, chiese di parlare col notaio.", "Non appena fu arrivato, chiese di parlare con il notaio."], explanation: "\"Arrivare\" takes \"essere\": \"fu arrivato\"." },
          { type: "fill-blank", prompt: "A learner wrote \"Dopo che si ebbe seduta\". Write the Italian for the bold words.", en: "After she [had sat down], the countess smiled.", sentence: "Dopo che si ___, la contessa sorrise.", answer: "fu seduta", explanation: "Reflexive verbs take \"essere\"; the participle agrees: \"seduta\"." },
        ],
      },
      {
        heading: "The main clause in the wrong tense",
        body: [
          "The second family breaks the sequence. \"*Dopo che ebbe finito, è uscito\" puts a passato prossimo after a trapassato remoto; the main clause must be a passato remoto: \"uscì\". \"*Dopo che ebbe finito, usciva\" turns the event into a background; again \"uscì\".",
          "If you want the passato prossimo in the main clause (in speech or an informal text), the time clause must change too: \"Dopo aver finito, è uscito\" or \"Quando ha finito, è uscito\". Pick a layer and keep both verbs in it.",
        ],
        examples: [
          { es: "Dopo che ebbe finito, uscì.", en: "After he had finished, he went out. (literary)" },
          { es: "Dopo aver finito, è uscito.", en: "After finishing, he went out. (spoken)" },
          { es: "Quando ha finito, è uscito.", en: "When he finished, he went out. (spoken)" },
          { es: "Quando ebbero chiuso il negozio, andarono all'osteria.", en: "When they had closed the shop, they went to the tavern." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Dopo che ebbe finito, è uscito\". Write it correctly in literary style: After he had finished, he went out.", source: "After he had finished, he went out.", answer: "Dopo che ebbe finito, uscì.", explanation: "After a trapassato remoto, the main verb is a passato remoto." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Quando ebbero chiuso il negozio, andavano all'osteria\" about one evening. Write it correctly: When they had closed the shop, they went to the tavern.", source: "When they had closed the shop, they went to the tavern.", answer: "Quando ebbero chiuso il negozio, andarono all'osteria.", explanation: "One event, not a habit: \"andarono\"." },
        ],
      },
      {
        heading: "The trapassato remoto out of place",
        body: [
          "The third family puts the trapassato remoto where it can't go. In a main clause: \"*Ebbe già mangiato quando arrivammo\" → \"Aveva già mangiato\". After \"perché\", \"siccome\" or a relative pronoun: \"*La donna che fu partita\" → \"che era partita\". The trapassato remoto lives only after \"dopo che\", \"appena\", \"quando\" and their literary cousins.",
          "And don't use it for an earlier state seen from later: \"*Quando arrivammo, il treno fu partito\" → \"era già partito\". Here the departure is not followed immediately by our arrival; it is a past state we found.",
        ],
        examples: [
          { es: "Aveva già mangiato quando arrivammo.", en: "He had already eaten when we arrived." },
          { es: "La donna che era partita non tornò mai più.", en: "The woman who had left never came back." },
          { es: "Quando arrivammo, il treno era già partito.", en: "When we arrived, the train had already left." },
          { es: "Siccome aveva piovuto, la strada era fangosa.", en: "Since it had rained, the road was muddy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Quando arrivammo, il treno fu partito\". Write it correctly: When we arrived, the train had already left.", source: "When we arrived, the train had already left.", answer: "Quando arrivammo, il treno era già partito.", explanation: "An earlier state found later: trapassato prossimo." },
          { type: "listen-choose", audio: "La donna che era partita non tornò mai più.", question: "What did you hear?", options: ["La donna che era partita non tornò mai più.", "La donna che fu partita non tornò mai più.", "La donna che partiva non tornò mai più.", "La donna che è partita non tornò mai più."], correctIndex: 0, explanation: "After a relative pronoun: \"era partita\", trapassato prossimo." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Appena l'ebbe letto, strappò la lettera\". Write it correctly: As soon as he had read it, he tore up the letter.", source: "As soon as he had read it, he tore up the letter.", answer: "Appena l'ebbe letta, strappò la lettera.", altAnswers: ["Non appena l'ebbe letta, strappò la lettera."], explanation: "\"L'\" stands for \"la lettera\": \"letta\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Quando ebbero scesi dalla carrozza, entrarono in chiesa\". Write it correctly: When they had got out of the carriage, they went into the church.", source: "When they had got out of the carriage, they went into the church.", answer: "Quando furono scesi dalla carrozza, entrarono in chiesa.", explanation: "\"Scendere\" (to get out) takes \"essere\": \"furono scesi\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ebbe già mangiato quando arrivammo\". Write it correctly: He had already eaten when we arrived.", source: "He had already eaten when we arrived.", answer: "Aveva già mangiato quando arrivammo.", explanation: "A main clause can't take the trapassato remoto." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Siccome ebbe piovuto, la strada era fangosa\". Write it correctly: Since it had rained, the road was muddy.", source: "Since it had rained, the road was muddy.", answer: "Siccome aveva piovuto, la strada era fangosa.", altAnswers: ["Siccome era piovuto, la strada era fangosa."], explanation: "Not after \"siccome\": use the trapassato prossimo. Weather verbs take \"avere\" or \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Appena fu finito il discorso, il pubblico ha applaudito\". Write it correctly: As soon as the speech had ended, the audience applauded.", source: "As soon as the speech had ended, the audience applauded.", answer: "Appena fu finito il discorso, il pubblico applaudì.", altAnswers: ["Appena il discorso fu finito, il pubblico applaudì.", "Non appena fu finito il discorso, il pubblico applaudì."], explanation: "Main clause in the passato remoto: \"applaudì\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Dopo che ebbe uscito\". Write the Italian for the bold words.", en: "After she [had gone out], it began to rain.", sentence: "Dopo che ___, cominciò a piovere.", answer: "fu uscita", explanation: "\"Uscire\" takes \"essere\"; agreement with she." },
      { type: "fill-blank", prompt: "A learner wrote \"Quando l'ebbero visti\" about one woman. Write the Italian for the bold words.", en: "When they [had seen her], they called her.", sentence: "Quando l'___, la chiamarono.", answer: "ebbero vista", explanation: "\"L'\" = \"la\": \"vista\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Quando ebbe pagato, uscì.", "Quando ebbe pagato, è uscito.", "Quando ebbe pagato, usciva.", "Ebbe pagato e uscì."], correctIndex: 0, explanation: "Trapassato remoto in the time clause, passato remoto in the main clause." },
      { type: "multiple-choice", question: "Which version is right for an informal email?", options: ["Dopo aver pagato, è uscito.", "Dopo che ebbe pagato, è uscito.", "Dopo che ebbe pagato, uscì.", "Dopo ebbe pagato, è uscito."], correctIndex: 0, explanation: "In an informal text, avoid the trapassato remoto: \"dopo aver pagato\"." },
      { type: "dictation", audio: "Quando furono scesi dalla carrozza, entrarono in chiesa.", explanation: "\"Furono scesi\": essere + agreement." },
      { type: "speak", text: "Appena fu arrivata, la contessa chiese un bicchiere d'acqua.", prompt: "Say it in Italian (literary style): As soon as she had arrived, the countess asked for a glass of water.", tip: "\"Fu arrivata\": link the words smoothly.", explanation: "Essere + agreement, then the passato remoto." },
    ],
  },
  {
    slug: "c1-transform-modern-literary",
    level: "IT-C1",
    number: 8,
    title: "Transformations: Modern to Literary",
    summary: "Rewrite a modern account in classic literary style: tenses, pronouns, time clauses, word order and vocabulary all shift.",
    duration: "19 min",
    sections: [
      {
        heading: "Tenses and time clauses",
        body: [
          "To give a modern text a classic literary flavour, start with the verbs. Every passato prossimo of the narrator becomes a passato remoto; \"dopo aver\" + participle or \"quando ha finito\" can become a trapassato remoto: \"Dopo aver chiuso la porta, è uscito\" → \"Dopo che ebbe chiuso la porta, uscì\".",
          "The imperfetto stays, but literary style likes the descriptive imperfetto at length, with several verbs in a row: \"Il sole calava, le campane suonavano il vespro e dai camini saliva un fumo leggero\". One sentence of this kind before the first event sets the tone of a nineteenth-century novel.",
        ],
        examples: [
          { es: "Dopo aver chiuso la porta, è uscito.", en: "After closing the door, he went out. (modern)" },
          { es: "Dopo che ebbe chiuso la porta, uscì.", en: "After he had closed the door, he went out. (literary)" },
          { es: "Il sole calava e dai camini saliva un fumo leggero.", en: "The sun was setting and a light smoke rose from the chimneys." },
          { es: "Quando ha visto la lettera, ha capito tutto.", en: "When he saw the letter, he understood everything. (modern)" },
          { es: "Come ebbe vista la lettera, comprese ogni cosa.", en: "As soon as he had seen the letter, he understood everything. (literary)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite \"Dopo aver chiuso la porta, è uscito\" in literary style: After he had closed the door, he went out.", source: "After he had closed the door, he went out.", answer: "Dopo che ebbe chiuso la porta, uscì.", explanation: "Trapassato remoto + passato remoto." },
          { type: "translate", direction: "en-es", prompt: "Rewrite in literary style: When she had seen the letter, she understood everything.", source: "When she had seen the letter, she understood everything.", answer: "Quando ebbe visto la lettera, comprese ogni cosa.", altAnswers: ["Quando ebbe visto la lettera, capì tutto.", "Quando ebbe vista la lettera, comprese ogni cosa.", "Quando ebbe visto la lettera, comprese tutto."], explanation: "\"Comprese ogni cosa\" sounds more literary than \"ha capito tutto\". Older prose may also agree the participle with the object." },
        ],
      },
      {
        heading: "Vocabulary and pronouns",
        body: [
          "Literary prose prefers precise, slightly elevated verbs: \"vedere\" → \"scorgere\" (to make out), \"capire\" → \"comprendere\", \"tornare\" → \"fare ritorno\", \"andare via\" → \"allontanarsi\", \"cominciare a\" → \"prendere a\" or \"mettersi a\", \"di nuovo\" → \"nuovamente\", \"morire\" → \"spegnersi\" (to pass away, gently). Use them with taste: one or two per paragraph are enough.",
          "Pronouns shift too. \"Lui\" as a subject can become \"egli\" in a deliberately old style; \"questa cosa\" becomes \"ciò\"; \"quello che\" becomes \"ciò che\". Very old prose attaches pronouns to the verb (\"vedevasi\", \"disseli\"): avoid this unless you are writing parody.",
        ],
        examples: [
          { es: "In lontananza scorse una luce.", en: "In the distance he made out a light." },
          { es: "Fece ritorno al paese dopo vent'anni.", en: "He returned to the village after twenty years." },
          { es: "Si allontanò senza voltarsi.", en: "She walked away without turning round." },
          { es: "Ciò che vide lo lasciò senza parole.", en: "What he saw left him speechless." },
          { es: "Il vecchio si spense in una sera d'inverno.", en: "The old man passed away one winter evening." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite in literary style (with scorgere): In the distance he made out a light.", source: "In the distance he made out a light.", answer: "In lontananza scorse una luce.", altAnswers: ["Scorse una luce in lontananza."], explanation: "\"Scorgere\" → \"scorse\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What] he saw left him speechless. (literary)", sentence: "___ vide lo lasciò senza parole.", answer: "Ciò che", altAnswers: ["Quello che"], explanation: "\"Ciò che\" is the literary choice for what." },
        ],
      },
      {
        heading: "Word order and rhythm",
        body: [
          "Literary Italian moves adjectives before the noun for an emotional or descriptive value (\"una lunga attesa\", \"un fioco lume\"), places adverbial phrases at the start of the sentence (\"Al cader della sera, ...\") and sometimes inverts subject and verb (\"Disse allora il vecchio: ...\"). You will study inversion in Unit 3.",
          "Rhythm matters as much as grammar. Modern: \"È arrivato a casa tardi. Era stanco. Non ha mangiato.\" Literary: \"Giunse a casa a notte inoltrata e, stanco com'era, non toccò cibo.\" Fewer, longer sentences, joined by \"e\" and by participles and adjectives used as clauses (\"stanco com'era\").",
        ],
        examples: [
          { es: "Al cader della sera, i pastori fecero ritorno.", en: "At nightfall, the shepherds returned." },
          { es: "Disse allora il vecchio: \"Andate in pace\".", en: "Then the old man said: \"Go in peace\"." },
          { es: "Giunse a casa a notte inoltrata e, stanco com'era, non toccò cibo.", en: "He reached home late at night and, tired as he was, didn't touch any food." },
          { es: "Dopo una lunga attesa, la porta si aprì.", en: "After a long wait, the door opened." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite in literary style: He reached home late at night and, tired as he was, didn't touch any food.", source: "He reached home late at night and, tired as he was, didn't touch any food.", answer: "Giunse a casa a notte inoltrata e, stanco com'era, non toccò cibo.", altAnswers: ["Giunse a casa a notte fonda e, stanco com'era, non toccò cibo."], explanation: "One long sentence, \"giunse\" for \"arrivò\", \"stanco com'era\" as a clause." },
          { type: "listen-choose", audio: "Al cader della sera, i pastori fecero ritorno.", question: "When did the shepherds return?", options: ["At nightfall", "At dawn", "At midday", "The next day"], correctIndex: 0, explanation: "\"Al cader della sera\" = as evening fell." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Rewrite in literary style (with fare ritorno): He returned to the village after twenty years.", source: "He returned to the village after twenty years.", answer: "Fece ritorno al paese dopo vent'anni.", altAnswers: ["Dopo vent'anni fece ritorno al paese.", "Fece ritorno al paese dopo venti anni."], explanation: "\"Fare ritorno\" = to return, elevated." },
      { type: "translate", direction: "en-es", prompt: "Rewrite in literary style (with allontanarsi): She walked away without turning round.", source: "She walked away without turning round.", answer: "Si allontanò senza voltarsi.", explanation: "\"Allontanarsi\" for \"andare via\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite in literary style (with spegnersi): The old man passed away one winter evening.", source: "The old man passed away one winter evening.", answer: "Il vecchio si spense in una sera d'inverno.", altAnswers: ["Il vecchio si spense una sera d'inverno."], explanation: "\"Spegnersi\" = to pass away gently." },
      { type: "translate", direction: "en-es", prompt: "Rewrite in literary style: Then the old man said: \"Go in peace\".", source: "Then the old man said: \"Go in peace\".", answer: "Disse allora il vecchio: \"Andate in pace\".", altAnswers: ["Allora il vecchio disse: \"Andate in pace\"."], explanation: "Verb before subject: a literary inversion." },
      { type: "translate", direction: "en-es", prompt: "Rewrite in literary style (with prendere a): She began to sing softly.", source: "She began to sing softly.", answer: "Prese a cantare sottovoce.", altAnswers: ["Si mise a cantare sottovoce.", "Prese a cantare piano."], explanation: "\"Prendere a\" + infinitive = to begin, literary." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After a [long wait], the door opened.", sentence: "Dopo una ___, la porta si aprì.", answer: "lunga attesa", explanation: "Adjective before the noun for a literary tone." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bells [were ringing] for vespers.", sentence: "Le campane ___ il vespro.", answer: "suonavano", explanation: "Descriptive imperfetto." },
      { type: "word-order", prompt: "Put the words in order to say: What he saw left him speechless.", words: ["Ciò", "che", "vide", "lo", "lasciò", "senza", "parole."], translation: "What he saw left him speechless.", explanation: "\"Ciò che\" + passato remoto." },
      {
        type: "matching",
        instructions: "Match each everyday verb to its literary equivalent.",
        pairs: [
          { left: "scorgere", right: "vedere" },
          { left: "comprendere", right: "capire" },
          { left: "fare ritorno", right: "tornare" },
          { left: "allontanarsi", right: "andare via" },
          { left: "spegnersi", right: "morire" },
        ],
        explanation: "Elevated verbs for a literary register.",
      },
      { type: "dictation", audio: "Dopo una lunga attesa, la porta si aprì.", explanation: "\"Si aprì\": passato remoto of \"aprirsi\"." },
      { type: "speak", text: "Giunse a casa a notte inoltrata e, stanco com'era, non toccò cibo.", prompt: "Say it in Italian, literary style: He reached home late at night and, tired as he was, didn't touch any food.", tip: "\"Inoltrata\": double t, stress on -tra-.", explanation: "A modern three-sentence account fused into one literary sentence." },
    ],
  },
  {
    slug: "c1-mission-literary-pastiche",
    level: "IT-C1",
    number: 9,
    title: "Real-World Mission: A Literary Pastiche",
    summary: "Write a 200-word passage in classic nineteenth-century narrative style for a creative writing workshop.",
    duration: "19 min",
    sections: [
      {
        heading: "The brief",
        body: [
          "Your mission: you have joined a creative writing workshop in Torino. This week's exercise is a pastiche: a 200-word opening of a story set in 1880, written as a novelist of the time would have written it. The teacher's checklist: a descriptive opening in the imperfetto, events in the passato remoto, at least one trapassato remoto after \"appena\" or \"dopo che\", one future in the past, and elevated vocabulary used with restraint.",
          "Open with the setting, as Manzoni and Verga do: place, season, time of day, light. \"Era l'autunno del 1880, e sul borgo di Valmora calava una nebbia fitta che pareva non volersi più alzare.\" Long, rhythmic, descriptive.",
        ],
        examples: [
          { es: "Era l'autunno del 1880.", en: "It was the autumn of 1880." },
          { es: "Sul borgo calava una nebbia fitta.", en: "A thick fog was falling over the village." },
          { es: "Pareva che non volesse più alzarsi.", en: "It seemed as if it would never lift again." },
          { es: "Le botteghe erano chiuse e le strade deserte.", en: "The shops were closed and the streets deserted." },
          { es: "Solo dalla locanda veniva un filo di luce.", en: "Only from the inn came a thread of light." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "A thick fog was falling over the village.", answer: "Sul borgo calava una nebbia fitta.", altAnswers: ["Una nebbia fitta calava sul borgo.", "Sul paese calava una nebbia fitta."], explanation: "Descriptive imperfetto; \"borgo\" = village, literary." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "Only from the inn came a thread of light.", answer: "Solo dalla locanda veniva un filo di luce.", altAnswers: ["Soltanto dalla locanda veniva un filo di luce."], explanation: "Inversion: verb before the subject \"un filo di luce\"." },
        ],
      },
      {
        heading: "The arrival",
        body: [
          "Then the event that starts the story: a stranger, a letter, a death, a return. Use the passato remoto and one trapassato remoto: \"Appena il campanile ebbe battuto le nove, una carrozza si fermò davanti alla locanda. Ne scese un uomo alto, avvolto in un mantello nero.\" Note \"ne scese\" (got out of it): \"ne\" stands for \"dalla carrozza\".",
          "Characterise briefly through details, not adjectives piled up: the coat, the hands, a scar, a way of speaking.",
        ],
        examples: [
          { es: "Appena il campanile ebbe battuto le nove, una carrozza si fermò davanti alla locanda.", en: "As soon as the bell tower had struck nine, a carriage stopped in front of the inn." },
          { es: "Ne scese un uomo alto, avvolto in un mantello nero.", en: "A tall man wrapped in a black cloak got out of it." },
          { es: "Aveva le mani bianche di chi non ha mai lavorato la terra.", en: "He had the white hands of someone who has never worked the land." },
          { es: "Chiese una stanza e non disse il suo nome.", en: "He asked for a room and didn't give his name." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "A tall man wrapped in a black cloak got out of it.", answer: "Ne scese un uomo alto, avvolto in un mantello nero.", explanation: "\"Ne\" = from it; verb before subject." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as the bell tower [had struck] nine, a carriage stopped.", sentence: "Appena il campanile ___ le nove, una carrozza si fermò.", answer: "ebbe battuto", explanation: "Trapassato remoto after \"appena\"." },
        ],
      },
      {
        heading: "The hook",
        body: [
          "End the passage with a hook, ideally a future in the past that tells the reader something the characters don't know: \"Nessuno, quella sera, poteva immaginare che quell'uomo avrebbe cambiato per sempre la vita del borgo.\" This narrative conditional is the most \"novelistic\" sentence you can write in Italian.",
          "Before writing, check: every lui / lei passato remoto form has its accent (\"si fermò\", \"entrò\"); the trapassato remoto has the right auxiliary; no passato prossimo slipped into the narrator's voice.",
        ],
        examples: [
          { es: "Nessuno poteva immaginare che quell'uomo avrebbe cambiato la vita del borgo.", en: "No one could imagine that this man would change the life of the village." },
          { es: "Quella notte nessuno dormì.", en: "That night nobody slept." },
          { es: "Era il principio di una lunga storia.", en: "It was the beginning of a long story." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "No one could imagine that this man would change the life of the village.", answer: "Nessuno poteva immaginare che quell'uomo avrebbe cambiato la vita del borgo.", altAnswers: ["Nessuno poteva immaginare che quell'uomo avrebbe cambiato la vita del paese."], explanation: "\"Avrebbe cambiato\": future in the past. \"Quell'uomo\" because the narrator is distant." },
          { type: "listen-choose", audio: "Quella notte nessuno dormì.", question: "What does it mean?", options: ["That night nobody slept.", "That night everyone slept.", "Nobody sleeps at night.", "That night nobody will sleep."], correctIndex: 0, explanation: "\"Dormì\": passato remoto, final stress." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "It was the autumn of 1880.", answer: "Era l'autunno del 1880.", explanation: "Scene-setting with \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "The shops were closed and the streets deserted.", answer: "Le botteghe erano chiuse e le strade deserte.", altAnswers: ["Le botteghe erano chiuse e le vie deserte."], explanation: "\"Erano\" covers both adjectives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "He asked for a room and didn't give his name.", answer: "Chiese una stanza e non disse il suo nome.", altAnswers: ["Chiese una camera e non disse il suo nome.", "Chiese una stanza e non disse come si chiamava."], explanation: "\"Chiese\", \"disse\": irregular passati remoti." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "That night nobody slept.", answer: "Quella notte nessuno dormì.", explanation: "\"Nessuno\" before the verb: no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "He had the white hands of someone who has never worked the land.", answer: "Aveva le mani bianche di chi non ha mai lavorato la terra.", altAnswers: ["Aveva le mani bianche di chi non aveva mai lavorato la terra."], explanation: "\"Di chi\" = of someone who; a general truth can stay in the present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seemed as if the fog [would never lift] again.", sentence: "Pareva che la nebbia non ___ più alzarsi.", answer: "volesse", explanation: "\"Pareva che\" + imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A carriage [stopped] in front of the inn.", sentence: "Una carrozza ___ davanti alla locanda.", answer: "si fermò", explanation: "\"Fermarsi\" → \"si fermò\"." },
      { type: "word-order", prompt: "Put the words in order to say: It was the beginning of a long story.", words: ["Era", "il", "principio", "di", "una", "lunga", "storia."], translation: "It was the beginning of a long story.", explanation: "\"Principio\" for \"inizio\": a literary choice." },
      { type: "multiple-choice", question: "Which sentence would break the pastiche?", options: ["Poi l'uomo è entrato e ha chiesto da bere.", "Poi l'uomo entrò e chiese da bere.", "Entrò allora l'uomo e chiese da bere.", "Appena fu entrato, l'uomo chiese da bere."], correctIndex: 0, explanation: "The passato prossimo in the narrator's voice breaks the nineteenth-century style." },
      { type: "dictation", audio: "Ne scese un uomo alto, avvolto in un mantello nero.", explanation: "\"Ne scese\": got out of it." },
      { type: "speak", text: "Era l'autunno del 1880, e sul borgo calava una nebbia fitta che pareva non volersi più alzare.", prompt: "Read your opening aloud: It was the autumn of 1880, and a thick fog was falling over the village that seemed as if it would never lift again.", tip: "Let the sentence flow without stopping until the end.", explanation: "A classic descriptive opening." },
    ],
  },
  {
    slug: "c1-listening-lab-audiobook",
    level: "IT-C1",
    number: 10,
    title: "Listening Lab: An Audiobook Excerpt",
    summary: "Listen to the opening of Carlo Collodi's Le avventure di Pinocchio (1883), a public-domain classic, and follow its narrative tenses.",
    duration: "19 min",
    sections: [
      {
        heading: "C'era una volta...",
        body: [
          "Carlo Collodi (1826-1890) published \"Le avventure di Pinocchio\" in instalments from 1881 and as a book in 1883. Its opening is a game with the reader: it starts like a fairy tale, then breaks the expectation. Listen to each line before reading it. The text is Collodi's own, slightly abridged.",
          "The narrator speaks directly to his \"piccoli lettori\" and predicts their answer with a future: \"diranno subito\" (they'll say at once). The passato prossimo \"avete sbagliato\" belongs to his conversation with the children; the story itself will run in the passato remoto. Glosses: \"il legno\" (wood), \"la catasta\" (woodpile), \"la stufa\" (stove).",
        ],
        examples: [
          { es: "C'era una volta...", en: "Once upon a time there was..." },
          { es: "\"Un re!\" diranno subito i miei piccoli lettori.", en: "\"A king!\" my little readers will say at once." },
          { es: "No, ragazzi, avete sbagliato. C'era una volta un pezzo di legno.", en: "No, children, you're wrong. Once upon a time there was a piece of wood." },
          { es: "Non era un legno di lusso, ma un semplice pezzo da catasta.", en: "It wasn't fine wood, just a plain piece from the woodpile." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "No, ragazzi, avete sbagliato. C'era una volta un pezzo di legno.", question: "What is the story about?", options: ["A piece of wood", "A king", "A carpenter's son", "A stove"], correctIndex: 0, explanation: "The narrator corrects the children: not a king, a piece of wood." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, children, you're wrong.", answer: "No, ragazzi, avete sbagliato.", explanation: "\"Avete sbagliato\": passato prossimo for a mistake still relevant now." },
        ],
      },
      {
        heading: "Mastr'Antonio",
        body: [
          "The second paragraph introduces the carpenter. Listen for the passato remoto \"capitò\" (ended up, happened to arrive) and the relative \"il quale\", which Collodi uses where modern Italian would write \"che\". Note also the Tuscan \"il fatto gli è che\" (the fact is that), where \"gli\" is a pleonastic Florentine subject that standard Italian omits.",
          "The nickname \"maestro Ciliegia\" (Master Cherry) comes from his nose, always shiny and purple like a ripe cherry. Glosses: \"la bottega\" (workshop), \"il falegname\" (carpenter), \"lustro\" (shiny), \"paonazzo\" (purple).",
        ],
        examples: [
          { es: "Un bel giorno questo pezzo di legno capitò nella bottega di un vecchio falegname.", en: "One fine day this piece of wood ended up in the workshop of an old carpenter." },
          { es: "Il quale aveva nome mastr'Antonio.", en: "Whose name was Master Antonio." },
          { es: "Tutti lo chiamavano maestro Ciliegia.", en: "Everyone called him Master Cherry." },
          { es: "La punta del suo naso era sempre lustra e paonazza, come una ciliegia matura.", en: "The tip of his nose was always shiny and purple, like a ripe cherry." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "One fine day this piece of wood ended up in an old carpenter's workshop.", answer: "Un bel giorno questo pezzo di legno capitò nella bottega di un vecchio falegname.", explanation: "\"Capitare\" = to end up somewhere by chance: \"capitò\"." },
          { type: "listen-choose", audio: "Tutti lo chiamavano maestro Ciliegia.", question: "Why is the nickname in the imperfetto?", options: ["It describes a habit: everyone always called him that.", "It happened once.", "It's a future in the past.", "It's a mistake for chiamarono."], correctIndex: 0, explanation: "Repeated, habitual action: imperfetto." },
        ],
      },
      {
        heading: "The talking wood",
        body: [
          "The third passage contains a trapassato remoto, exactly as you studied it: \"Appena maestro Ciliegia ebbe visto quel pezzo di legno, si rallegrò tutto\". Then the carpenter decides to make a table leg, raises his axe and hears a tiny voice: \"Non mi picchiar tanto forte!\" (don't hit me so hard!).",
          "\"Picchiar\" is \"picchiare\" with the final e dropped, common in older Tuscan and in poetry. In the negative tu imperative the infinitive is used: \"non picchiare\". Glosses: \"rallegrarsi\" (to cheer up, be delighted), \"la scure\" (the axe), \"una vocina sottile\" (a thin little voice).",
        ],
        examples: [
          { es: "Appena maestro Ciliegia ebbe visto quel pezzo di legno, si rallegrò tutto.", en: "As soon as Master Cherry had seen that piece of wood, he was delighted." },
          { es: "Voglio servirmene per fare una gamba di tavolino.", en: "I want to use it to make a table leg." },
          { es: "Prese la scure e alzò il braccio.", en: "He took the axe and raised his arm." },
          { es: "Sentì una vocina sottile sottile: \"Non mi picchiar tanto forte!\"", en: "He heard a tiny, tiny voice: \"Don't hit me so hard!\"" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "As soon as he had seen that piece of wood, he was delighted.", answer: "Appena ebbe visto quel pezzo di legno, si rallegrò tutto.", altAnswers: ["Appena ebbe visto quel pezzo di legno, si rallegrò."], explanation: "Trapassato remoto after \"appena\", then the passato remoto." },
          { type: "dictation", audio: "Prese la scure e alzò il braccio.", explanation: "\"Prese\" (irregular), \"alzò\" (regular)." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Un re! diranno subito i miei piccoli lettori.", question: "Who will say \"a king\"?", options: ["The narrator's young readers", "The carpenter", "Pinocchio", "The king"], correctIndex: 0, explanation: "\"I miei piccoli lettori\": the narrator's readers." },
      { type: "listen-choose", audio: "Non mi picchiar tanto forte!", question: "What does the voice ask?", options: ["Not to be hit so hard", "To be picked up", "To be made into a table", "To be thrown in the stove"], correctIndex: 0, explanation: "\"Picchiare\" = to hit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It wasn't fine wood, just a plain piece of wood.", answer: "Non era un legno di lusso, ma un semplice pezzo di legno.", altAnswers: ["Non era legno di lusso, ma un semplice pezzo di legno."], explanation: "\"Di lusso\" = luxury, fine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone called him Master Cherry.", answer: "Tutti lo chiamavano maestro Ciliegia.", explanation: "Habit: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to use it to make a table leg.", answer: "Voglio servirmene per fare una gamba di tavolino.", altAnswers: ["Voglio usarlo per fare una gamba di tavolino.", "Me ne voglio servire per fare una gamba di tavolino."], explanation: "\"Servirsi di\" → \"servirmene\": pronoun attached to the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "He took the axe and raised his arm.", answer: "Prese la scure e alzò il braccio.", explanation: "Two events: \"prese\", \"alzò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "He heard a tiny voice.", answer: "Sentì una vocina sottile.", altAnswers: ["Sentì una vocina.", "Udì una vocina sottile."], explanation: "\"Sentì\": regular -ire; \"udire\" is the literary to hear." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The tip of his nose was always [shiny and purple].", sentence: "La punta del suo naso era sempre ___.", answer: "lustra e paonazza", explanation: "Both adjectives agree with \"punta\"." },
      { type: "word-order", prompt: "Put the words in order to say: Once upon a time there was a piece of wood.", words: ["C'era", "una", "volta", "un", "pezzo", "di", "legno."], translation: "Once upon a time there was a piece of wood.", explanation: "The famous twist on the fairy-tale opening." },
      { type: "multiple-choice", question: "In \"il fatto gli è che\", what is \"gli\"?", options: ["A Florentine pleonastic subject, omitted in standard Italian", "An indirect object meaning to him", "A plural article", "A mistake by the author"], correctIndex: 0, explanation: "Florentine speech adds \"gli\" before \"è\"; standard Italian says \"il fatto è che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"A king!\" my little readers [will say] at once.", sentence: "\"Un re!\" ___ subito i miei piccoli lettori.", answer: "diranno", explanation: "The narrator predicts his readers' reply with the future of \"dire\": \"diranno\"." },
      { type: "dictation", audio: "Tutti lo chiamavano maestro Ciliegia.", explanation: "\"Ciliegia\" keeps its i: cherry." },
      { type: "speak", text: "C'era una volta... Un re! diranno subito i miei piccoli lettori. No, ragazzi, avete sbagliato. C'era una volta un pezzo di legno.", prompt: "Read Collodi's opening aloud, like an audiobook narrator.", tip: "Pause after \"una volta\", then speed up for the children's guess.", explanation: "The most famous opening in Italian children's literature." },
    ],
  },
];

export const IT_C1_U02_WRITING: WriteExercise = {
  type: "write",
  prompt: "For a creative writing workshop, write the opening of a story set in the nineteenth century, in classic literary style. Describe the setting, tell the arrival of a stranger or a letter, and end with a hint of what will happen.",
  minWords: 160,
  maxWords: 240,
  rubric: [
    "Opens with a description in the imperfetto (place, season, light)",
    "Tells the events in the passato remoto, with no passato prossimo in the narrator's voice",
    "Uses at least one trapassato remoto correctly after appena, dopo che or quando, with the right auxiliary",
    "Ends with a future in the past (avrebbe cambiato, sarebbe stato) and uses elevated vocabulary with restraint (scorgere, fare ritorno, ciò che)",
  ],
  modelAnswer: "Era l'autunno del 1880, e sul borgo di Valmora calava una nebbia fitta che pareva non volersi più alzare. Le botteghe erano chiuse, le strade deserte, e solo dalla locanda della vedova Ferrari veniva un filo di luce. Appena il campanile ebbe battuto le nove, una carrozza si fermò davanti alla porta. Ne scese un uomo alto, avvolto in un mantello nero, che si guardò intorno come chi cerca un luogo conosciuto e non lo ritrova. Entrò, chiese una stanza e non disse il suo nome. La vedova notò che aveva le mani bianche di chi non ha mai lavorato la terra, e una cicatrice sottile sulla fronte. Quando ebbe cenato, l'uomo domandò se il vecchio mulino fosse ancora in piedi. Alla risposta della donna, sorrise appena e salì in camera senza aggiungere altro. Quella notte la vedova non chiuse occhio. Ciò che aveva visto in quello sguardo le ricordava qualcuno, ma non riusciva a capire chi. Nessuno, a Valmora, poteva immaginare che quell'uomo avrebbe cambiato per sempre la vita del borgo.",
  explanation: "The description is in the imperfetto (\"calava\", \"erano\", \"veniva\"), the events in the passato remoto (\"si fermò\", \"scese\", \"entrò\", \"chiese\"), and two trapassati remoti follow \"appena\" and \"quando\" (\"ebbe battuto\", \"ebbe cenato\"). \"Ne scese\" uses \"ne\" for \"dalla carrozza\", \"ciò che\" is literary, and \"avrebbe cambiato\" is the closing future in the past.",
};
