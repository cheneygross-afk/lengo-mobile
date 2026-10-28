// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u27.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 27: Synonyms and Precision. Precise
// verbs instead of dire, fare, mettere and avere, precise adjectives, and
// register differences between synonyms.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U27: Lesson[] = [
  {
    slug: "b2-instead-of-dire",
    level: "IT-B2",
    number: 1,
    title: "Instead of Dire",
    summary: "Replace dire with the precise verb: affermare, sostenere, dichiarare, raccontare, riferire, spiegare.",
    duration: "17 min",
    sections: [
      {
        heading: "Stating and claiming",
        body: [
          "\"Dire\" is fine in conversation, but in writing a precise verb shows how something was said. \"Affermare\" is to state, assert; \"sostenere\" is to maintain, argue (often something others may doubt); \"dichiarare\" is to declare officially, often to the press or in a document.",
          "Compare: \"Il ministro ha detto che...\" (neutral), \"Il ministro ha affermato che...\" (stated it clearly), \"Il ministro sostiene che...\" (holds that, perhaps against criticism), \"Il ministro ha dichiarato alla stampa che...\" (officially, publicly).",
          "Grammar check: \"affermare\", \"dichiarare\" and \"sostenere\" all take \"che\" + a clause, or \"di\" + infinitive when the subject is the same (\"ha dichiarato di essere soddisfatto\"). After \"sostenere che\" many writers use the subjunctive, because what follows is presented as someone's opinion; after \"affermare\" and \"dichiarare\" the indicative is normal, because the statement is reported as fact.",
          "In news reports, the choice of verb is a signal. \"Ha ammesso\" suggests the speaker gave in; \"ha sostenuto\" leaves room for doubt; \"ha precisato\" corrects a misunderstanding. Journalists also use \"secondo\" + the source to keep their distance: \"secondo il ministro, i lavori finiranno a maggio\".",
        ],
        examples: [
          { es: "Il sindaco ha affermato che i lavori finiranno a maggio.", en: "The mayor stated that the works will finish in May." },
          { es: "Alcuni esperti sostengono che la misura sia inutile.", en: "Some experts maintain that the measure is useless." },
          { es: "L'azienda ha dichiarato di non avere responsabilità.", en: "The company declared that it had no responsibility." },
          { es: "Continua a sostenere di essere innocente.", en: "He keeps maintaining that he's innocent." },
          { es: "Nel modulo bisogna dichiarare il reddito.", en: "In the form you have to declare your income." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some experts maintain that the measure is useless.", answer: "Alcuni esperti sostengono che la misura sia inutile.", altAnswers: ["Alcuni esperti sostengono che la misura è inutile."], explanation: "\"Sostenere che\" often takes the subjunctive: it's an opinion." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The company [declared] that it had no responsibility.", sentence: "L'azienda ha ___ di non avere responsabilità.", answer: "dichiarato", explanation: "\"Dichiarare\" for an official statement." },
          { type: "multiple-choice", question: "Which verb suggests that others may disagree?", options: ["sostenere", "raccontare", "riferire", "spiegare"], correctIndex: 0, explanation: "\"Sostenere\" = to maintain, argue." },
        ],
      },
      {
        heading: "Telling, reporting, explaining",
        body: [
          "\"Raccontare\" is to tell a story or events (\"mi ha raccontato del viaggio\"). \"Riferire\" is to pass on what someone else said (\"te lo riferisco\": I'll pass it on to you), and in journalism to report. \"Spiegare\" is to explain; \"precisare\" to specify, clarify a detail; \"aggiungere\" to add; \"ribadire\" to reiterate.",
          "Note the constructions. \"Raccontare\" takes a direct object or \"di\": \"raccontare una storia\", \"raccontare del viaggio\". \"Riferire\" takes \"a\" for the person: \"riferire qualcosa a qualcuno\", so \"glielo riferisco\" (I'll tell him). \"Spiegare\" works the same way: \"spiegare qualcosa a qualcuno\", and never \"spiegare qualcuno\".",
        ],
        examples: [
          { es: "Mi ha raccontato tutto del viaggio in Giappone.", en: "She told me all about the trip to Japan." },
          { es: "Le riferirò il suo messaggio appena torna.", en: "I'll pass on your message to her as soon as she's back." },
          { es: "Il professore ha spiegato la differenza con un esempio.", en: "The professor explained the difference with an example." },
          { es: "Il portavoce ha precisato che si tratta di una proposta.", en: "The spokesperson clarified that it is a proposal." },
          { es: "Ha ribadito la sua posizione.", en: "She reiterated her position." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me all about the trip.", answer: "Mi ha raccontato tutto del viaggio.", altAnswers: ["Mi ha raccontato tutto sul viaggio."], explanation: "\"Raccontare\" for events." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "I'll pass on your message to her.", answer: "Le riferirò il Suo messaggio.", altAnswers: ["Le riferirò il suo messaggio.", "Gli riferirò il suo messaggio.", "Gli riferirò il Suo messaggio."], explanation: "\"Riferire\" = to pass on." },
          { type: "listen-choose", audio: "Il portavoce ha precisato che si tratta di una proposta.", question: "What did the spokesperson do?", options: ["clarified a detail", "denied everything", "told a story", "made a joke"], correctIndex: 0, explanation: "\"Precisare\" = to specify, clarify." },
        ],
      },
      {
        heading: "Saying no, saying yes",
        body: [
          "Agreement and disagreement have their own verbs: \"ammettere\" (to admit), \"negare\" (to deny), \"confermare\" (to confirm), \"smentire\" (to deny a report officially), \"promettere\". All can take \"di\" + infinitive when the subject is the same: \"ha negato di averlo visto\".",
          "\"Negare\" and \"smentire\" both translate to deny, but they aren't the same. You \"neghi\" an accusation or a fact about yourself; an institution \"smentisce\" a news report or a rumour. The noun \"la smentita\" is the official denial: \"il governo ha diffuso una smentita\".",
        ],
        examples: [
          { es: "Ha ammesso di aver sbagliato.", en: "He admitted he had made a mistake." },
          { es: "Ha negato di averlo visto quella sera.", en: "She denied having seen him that evening." },
          { es: "Il ministero ha smentito la notizia.", en: "The ministry denied the report." },
          { es: "La data è stata confermata ieri.", en: "The date was confirmed yesterday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He admitted he had made a mistake.", answer: "Ha ammesso di aver sbagliato.", altAnswers: ["Ha ammesso di avere sbagliato.", "Ha ammesso di essersi sbagliato.", "Ha ammesso che aveva sbagliato."], explanation: "\"Ammettere di\" + past infinitive." },
          { type: "speak", text: "Il ministero ha smentito la notizia e ha ribadito la sua posizione.", prompt: "Report the news: The ministry denied the report and reiterated its position.", tip: "smen-TI-to: stress on ti.", explanation: "Two precise reporting verbs." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The mayor stated that the works will finish in May.", answer: "Il sindaco ha affermato che i lavori finiranno a maggio.", altAnswers: ["Il sindaco ha affermato che i lavori termineranno a maggio.", "La sindaca ha affermato che i lavori finiranno a maggio."], explanation: "\"Affermare\" = to state." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He keeps maintaining that he's innocent.", answer: "Continua a sostenere di essere innocente.", explanation: "Same subject: \"di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The professor explained the difference with an example.", answer: "Il professore ha spiegato la differenza con un esempio.", altAnswers: ["La professoressa ha spiegato la differenza con un esempio."], explanation: "\"Spiegare\" = to explain." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She denied having seen him.", answer: "Ha negato di averlo visto.", altAnswers: ["Ha negato di averlo veduto."], explanation: "\"Negare di\" + past infinitive; pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ministry denied the report.", answer: "Il ministero ha smentito la notizia.", explanation: "\"Smentire\" = to deny a report." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She reiterated her position.", answer: "Ha ribadito la sua posizione.", explanation: "\"Ribadire\" = to reiterate." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The spokesperson [clarified] that it's a proposal.", sentence: "Il portavoce ha ___ che si tratta di una proposta.", answer: "precisato", explanation: "\"Precisare\" = to clarify a detail." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Grandpa [told us] about the war.", sentence: "Il nonno ci ha ___ della guerra.", answer: "raccontato", altAnswers: ["parlato"], explanation: "\"Raccontare\" for stories and events." },
      { type: "word-order", prompt: "Put the words in order to say: The company declared that it had no responsibility.", words: ["L'azienda", "ha dichiarato", "di non avere", "responsabilità."], translation: "The company declared that it had no responsibility.", explanation: "\"Dichiarare di\" + infinitive." },
      { type: "matching", instructions: "Match the verb to its meaning.", pairs: [{ left: "affermare", right: "to state" }, { left: "sostenere", right: "to maintain, argue" }, { left: "riferire", right: "to pass on, report" }, { left: "ribadire", right: "to reiterate" }, { left: "smentire", right: "to deny a report" }], explanation: "Precise alternatives to \"dire\"." },
      { type: "dictation", audio: "Alcuni esperti sostengono che la misura sia inutile.", explanation: "\"Sostenere che\" + subjunctive." },
      { type: "speak", text: "Il sindaco ha affermato che i lavori finiranno a maggio, ma i residenti sostengono il contrario.", prompt: "Report both sides: The mayor stated the works will finish in May, but residents maintain the opposite.", tip: "af-fer-MA-to: double f.", explanation: "\"Affermare\" vs \"sostenere\"." },
    ],
  },
  {
    slug: "b2-instead-of-fare",
    level: "IT-B2",
    number: 2,
    title: "Instead of Fare",
    summary: "Replace fare with the precise verb: svolgere un'attività, commettere un errore, effettuare un pagamento, realizzare un progetto.",
    duration: "17 min",
    sections: [
      {
        heading: "Activities and mistakes",
        body: [
          "\"Fare\" goes with almost everything, and that's the problem in writing. \"Svolgere\" is to carry out an activity, a job or a task: \"svolgere un'attività\", \"svolgere un ruolo\", \"svolgere un compito\". A mistake or a crime is \"commesso\": \"commettere un errore\", \"commettere un reato\".",
          "You may also see \"compiere\" (to accomplish, perform): \"compiere un'azione\", \"compiere uno sforzo\", and \"compiere gli anni\" (to have a birthday). With \"errore\", though, the standard verb is \"commettere\".",
          "Other mistake words have their own verbs too: \"commettere un reato\" or \"un crimine\" (a crime), \"commettere un'ingiustizia\". In everyday speech \"fare un errore\" and \"sbagliare\" are perfectly normal; \"commettere\" belongs to writing and careful speech. Remember the participle: \"commesso\".",
        ],
        examples: [
          { es: "Svolgo un'attività di volontariato il sabato.", en: "I do voluntary work on Saturdays." },
          { es: "In azienda svolge un ruolo fondamentale.", en: "She plays a key role in the company." },
          { es: "Ho commesso un errore grave.", en: "I made a serious mistake." },
          { es: "Ha compiuto un grande sforzo per arrivare in tempo.", en: "He made a big effort to arrive on time." },
          { es: "Mia figlia compie dieci anni domani.", en: "My daughter turns ten tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "I made a serious mistake.", answer: "Ho commesso un errore grave.", altAnswers: ["Ho commesso un grave errore."], explanation: "\"Commettere un errore\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [plays] a key role in the company.", sentence: "In azienda ___ un ruolo fondamentale.", answer: "svolge", altAnswers: ["ricopre"], explanation: "\"Svolgere un ruolo\"." },
          { type: "multiple-choice", question: "Which verb is standard with \"un errore\"?", options: ["commettere", "svolgere", "effettuare", "realizzare"], correctIndex: 0, explanation: "\"Commettere un errore\"." },
        ],
      },
      {
        heading: "Payments, projects and procedures",
        body: [
          "\"Effettuare\" is the bureaucratic carry out, make: \"effettuare un pagamento\", \"un bonifico\", \"un controllo\", \"una prenotazione\". \"Realizzare\" is to make real, carry out a project or a dream: \"realizzare un progetto\", \"un sogno\". (\"Rendersi conto\" is to realise in the sense of understand: \"realizzare\" for that is common in speech but avoided in careful writing.) \"Eseguire\" is to execute an order, a piece of music, a procedure.",
          "Be careful with \"effettuare\": it is so formal that it can sound heavy outside notices and forms. In an email to a friend, \"ho fatto il bonifico\" is natural; on a bank's website, \"il bonifico è stato effettuato\" is expected. A good rule: use \"effettuare\" only with nouns that describe a procedure (payments, checks, bookings, deliveries, stops: \"il treno effettua tutte le fermate\").",
        ],
        examples: [
          { es: "Il pagamento va effettuato entro il 31.", en: "Payment must be made by the 31st." },
          { es: "Abbiamo effettuato un controllo sull'impianto.", en: "We carried out a check on the system." },
          { es: "Finalmente ha realizzato il suo sogno.", en: "She finally achieved her dream." },
          { es: "Il progetto è stato realizzato con fondi europei.", en: "The project was carried out with European funds." },
          { es: "L'orchestra ha eseguito una sinfonia di Beethoven.", en: "The orchestra performed a Beethoven symphony." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "Payment must be made by the 31st.", answer: "Il pagamento va effettuato entro il 31.", altAnswers: ["Il pagamento deve essere effettuato entro il 31.", "Il pagamento va effettuato entro il trentuno."], explanation: "\"Effettuare un pagamento\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She finally achieved her dream.", answer: "Finalmente ha realizzato il suo sogno.", altAnswers: ["Ha finalmente realizzato il suo sogno.", "Finalmente ha coronato il suo sogno."], explanation: "\"Realizzare un sogno\"." },
          { type: "listen-choose", audio: "Abbiamo effettuato un controllo sull'impianto.", question: "What did they do?", options: ["carried out a check", "installed a system", "paid a bill", "made a booking"], correctIndex: 0, explanation: "\"Effettuare un controllo\"." },
        ],
      },
      {
        heading: "Everyday precision",
        body: [
          "Many everyday \"fare\" phrases also have a more precise verb: \"fare una foto\" → \"scattare una foto\", \"fare una domanda\" → \"porre una domanda\" (formal), \"fare sport\" → \"praticare uno sport\", \"fare un discorso\" → \"tenere un discorso\", \"fare da mangiare\" → \"preparare\" or \"cucinare\".",
          "Some \"fare\" phrases are fixed and have no better alternative: \"fare la spesa\", \"fare colazione\", \"fare il bagno\", \"fare una passeggiata\", \"fare attenzione\". Don't replace these: \"consumare la colazione\" appears in hotel notices, but \"fare colazione\" is what everyone says and writes. The aim is precision, not avoiding \"fare\" at all costs.",
        ],
        examples: [
          { es: "Ho scattato centinaia di foto a Venezia.", en: "I took hundreds of photos in Venice." },
          { es: "Vorrei porre una domanda al relatore.", en: "I'd like to ask the speaker a question." },
          { es: "Pratica il nuoto da quando era bambino.", en: "He has done swimming since he was a child." },
          { es: "La rettrice ha tenuto un discorso commovente.", en: "The rector gave a moving speech." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "I took hundreds of photos in Venice.", answer: "Ho scattato centinaia di foto a Venezia.", altAnswers: ["Ho scattato centinaia di fotografie a Venezia."], explanation: "\"Scattare una foto\"." },
          { type: "speak", text: "Vorrei porre una domanda al relatore.", prompt: "At a conference: I'd like to ask the speaker a question.", tip: "POR-re: double r.", explanation: "\"Porre una domanda\" is formal." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "I do voluntary work on Saturdays.", answer: "Svolgo un'attività di volontariato il sabato.", altAnswers: ["Il sabato svolgo un'attività di volontariato.", "Svolgo attività di volontariato il sabato."], explanation: "\"Svolgere un'attività\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "We carried out a check on the system.", answer: "Abbiamo effettuato un controllo sull'impianto.", altAnswers: ["Abbiamo eseguito un controllo sull'impianto."], explanation: "\"Effettuare un controllo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The project was carried out with European funds.", answer: "Il progetto è stato realizzato con fondi europei.", altAnswers: ["Il progetto è stato realizzato grazie a fondi europei."], explanation: "\"Realizzare un progetto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My daughter turns ten tomorrow.", answer: "Mia figlia compie dieci anni domani.", altAnswers: ["Domani mia figlia compie dieci anni."], explanation: "\"Compiere gli anni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "The rector gave a moving speech.", answer: "La rettrice ha tenuto un discorso commovente.", altAnswers: ["Il rettore ha tenuto un discorso commovente."], explanation: "\"Tenere un discorso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "The bank transfer was made yesterday.", answer: "Il bonifico è stato effettuato ieri.", altAnswers: ["Ieri è stato effettuato il bonifico."], explanation: "\"Effettuare un bonifico\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without fare.", en: "Who [committed] the crime?", sentence: "Chi ha ___ il reato?", answer: "commesso", explanation: "\"Commettere un reato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without fare.", en: "He [made] a big effort.", sentence: "Ha ___ un grande sforzo.", answer: "compiuto", explanation: "\"Compiere uno sforzo\"." },
      { type: "word-order", prompt: "Put the words in order to say: The orchestra performed a Beethoven symphony.", words: ["L'orchestra", "ha eseguito", "una sinfonia", "di Beethoven."], translation: "The orchestra performed a Beethoven symphony.", explanation: "\"Eseguire\" for music." },
      { type: "matching", instructions: "Match the precise verb to its noun.", pairs: [{ left: "commettere", right: "un errore" }, { left: "effettuare", right: "un pagamento" }, { left: "realizzare", right: "un progetto" }, { left: "scattare", right: "una foto" }, { left: "porre", right: "una domanda" }], explanation: "Verb + noun collocations." },
      { type: "dictation", audio: "Il pagamento va effettuato entro il trentuno del mese.", explanation: "\"Effettuare un pagamento\"." },
      { type: "speak", text: "In azienda svolgo un ruolo di coordinamento e ho realizzato diversi progetti.", prompt: "In an interview: In the company I have a coordinating role and I've carried out several projects.", tip: "co-or-di-na-MEN-to: five syllables before the stress.", explanation: "\"Svolgere\" and \"realizzare\"." },
    ],
  },
  {
    slug: "b2-instead-of-mettere-avere",
    level: "IT-B2",
    number: 3,
    title: "Instead of Mettere and Avere",
    summary: "Replace mettere with inserire, collocare, indossare, and avere with possedere, disporre di, presentare.",
    duration: "17 min",
    sections: [
      {
        heading: "Instead of mettere",
        body: [
          "\"Inserire\" is to insert, put in or enter (data, a card, a coin): \"inserire la carta\", \"inserire il codice\". \"Collocare\" is to place, position: \"il quadro è collocato nella sala principale\". \"Indossare\" is to wear, put on clothes (more formal than \"mettersi\" or \"portare\"). \"Posare\" is to lay down; \"riporre\" to put away.",
          "Clothes have their own small family: \"indossare\" (to wear, formal), \"mettersi\" (to put on, everyday: \"mi metto il cappotto\"), \"portare\" (to wear habitually: \"porta gli occhiali\"), \"togliersi\" (to take off) and \"provare\" (to try on). Instructions on machines and websites prefer \"inserire\": \"inserire le monete\", \"inserire il proprio indirizzo email\".",
        ],
        examples: [
          { es: "Inserire la carta e digitare il codice.", en: "Insert the card and enter the PIN." },
          { es: "La statua è stata collocata al centro della piazza.", en: "The statue was placed in the centre of the square." },
          { es: "Indossava un abito blu.", en: "She was wearing a blue dress." },
          { es: "Posa il bicchiere sul tavolo.", en: "Put the glass down on the table." },
          { es: "Riponete i libri sugli scaffali.", en: "Put the books back on the shelves." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in instruction style.", source: "Insert the card and enter the PIN.", answer: "Inserire la carta e digitare il codice.", altAnswers: ["Inserire la carta e digitare il PIN.", "Inserisci la carta e digita il codice."], explanation: "\"Inserire\" and \"digitare\" (to key in)." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [was wearing] a blue dress.", sentence: "___ un abito blu.", answer: "Indossava", altAnswers: ["Portava"], explanation: "\"Indossare\" = to wear." },
          { type: "multiple-choice", question: "Which verb fits \"___ i dati nel modulo online\"?", options: ["inserire", "collocare", "indossare", "posare"], correctIndex: 0, explanation: "\"Inserire i dati\" = to enter data." },
        ],
      },
      {
        heading: "Instead of avere",
        body: [
          "\"Possedere\" is to own, possess (property, qualities): \"possiede tre appartamenti\". \"Disporre di\" is to have available: \"l'hotel dispone di 40 camere\", \"non disponiamo di questa informazione\". \"Presentare\" is used for symptoms and features: \"il paziente presenta febbre alta\". \"Godere di\" is to enjoy a right or a reputation: \"gode di ottima salute\".",
          "Other precise replacements for \"avere\": \"contenere\" (to contain: \"la scatola contiene sei bottiglie\"), \"ottenere\" (to obtain: \"ha ottenuto il permesso\"), \"ricevere\" (to receive: \"abbiamo ricevuto la Sua email\"), \"essere dotato di\" (to be equipped with: \"l'auto è dotata di navigatore\"). Job adverts use \"essere in possesso di\": \"i candidati devono essere in possesso della laurea\".",
        ],
        examples: [
          { es: "La famiglia possiede una villa sul lago.", en: "The family owns a villa on the lake." },
          { es: "L'albergo dispone di quaranta camere e di un parcheggio.", en: "The hotel has forty rooms and a car park." },
          { es: "Il paziente presenta febbre alta e tosse.", en: "The patient has a high temperature and a cough." },
          { es: "Il nonno gode di ottima salute.", en: "Grandpa is in excellent health." },
          { es: "Non disponiamo di questa informazione.", en: "We don't have this information." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without avere.", source: "The hotel has forty rooms.", answer: "L'albergo dispone di quaranta camere.", altAnswers: ["L'hotel dispone di quaranta camere.", "L'albergo dispone di 40 camere.", "L'hotel dispone di 40 camere."], explanation: "\"Disporre di\" for facilities." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without avere.", source: "The family owns a villa on the lake.", answer: "La famiglia possiede una villa sul lago.", explanation: "\"Possedere\" = to own." },
          { type: "listen-choose", audio: "Il paziente presenta febbre alta e tosse.", question: "What is the text describing?", options: ["a patient's symptoms", "a hotel's facilities", "a family's property", "a statue's position"], correctIndex: 0, explanation: "\"Presentare\" for symptoms." },
        ],
      },
      {
        heading: "Register check",
        body: [
          "These verbs raise the register. In a chat, \"mettiti la giacca\" and \"hanno una casa al mare\" are perfect; \"indossa la giacca\" and \"possiedono una casa al mare\" would sound stiff. In a report, an advert or a notice, the precise verb is expected.",
          "A useful test: imagine reading your sentence aloud to a friend. If it sounds like a notice, go back to the everyday verb. If you are writing a report, an advert or a formal email, read it again and replace every \"mettere\" and \"avere\" that has a more precise partner.",
        ],
        examples: [
          { es: "Mettiti la giacca, fa freddo!", en: "Put your jacket on, it's cold!" },
          { es: "È obbligatorio indossare il casco.", en: "Wearing a helmet is compulsory." },
          { es: "Hanno una casa al mare.", en: "They've got a house by the sea." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a sign.", source: "Wearing a helmet is compulsory.", answer: "È obbligatorio indossare il casco.", altAnswers: ["È obbligatorio l'uso del casco."], explanation: "Signs use \"indossare\"." },
          { type: "speak", text: "Mettiti la giacca, fa freddo!", prompt: "Tell a friend: Put your jacket on, it's cold!", tip: "MET-ti-ti: stress on met.", explanation: "Everyday register: \"mettersi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The statue was placed in the centre of the square.", answer: "La statua è stata collocata al centro della piazza.", altAnswers: ["La statua è stata collocata in mezzo alla piazza.", "La statua è stata posta al centro della piazza."], explanation: "\"Collocare\" = to place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to children.", source: "Put the books back on the shelves.", answer: "Riponete i libri sugli scaffali.", altAnswers: ["Rimettete i libri sugli scaffali."], explanation: "\"Riporre\" = to put away." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandpa is in excellent health.", answer: "Il nonno gode di ottima salute.", altAnswers: ["Il nonno è in ottima salute."], explanation: "\"Godere di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "We don't have this information.", answer: "Non disponiamo di questa informazione.", altAnswers: ["Non disponiamo di questa informazione al momento.", "Non disponiamo di tale informazione."], explanation: "\"Disporre di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Put the glass down on the table. (to a friend)", answer: "Posa il bicchiere sul tavolo.", altAnswers: ["Appoggia il bicchiere sul tavolo."], explanation: "\"Posare\" = to put down." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The flat has a large terrace.", answer: "L'appartamento dispone di un ampio terrazzo.", altAnswers: ["L'appartamento dispone di una grande terrazza.", "L'appartamento dispone di un'ampia terrazza.", "L'appartamento ha un ampio terrazzo."], explanation: "Advert style: \"dispone di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Enter] your password.", sentence: "___ la password.", answer: "Inserire", altAnswers: ["Inserisci", "Inserisca", "Digitare"], explanation: "\"Inserire\" = to enter data." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [owns] three flats.", sentence: "___ tre appartamenti.", answer: "Possiede", explanation: "\"Possedere\" = to own." },
      { type: "word-order", prompt: "Put the words in order to say: The patient has a high temperature and a cough.", words: ["Il paziente", "presenta", "febbre alta", "e tosse."], translation: "The patient has a high temperature and a cough.", explanation: "\"Presentare\" for symptoms." },
      { type: "multiple-choice", question: "Which sentence is in everyday register?", options: ["Mettiti il cappotto.", "Indossi il cappotto.", "Si prega di indossare il cappotto.", "È richiesto di indossare il cappotto."], correctIndex: 0, explanation: "\"Mettersi\" is the everyday verb." },
      { type: "dictation", audio: "L'albergo dispone di quaranta camere e di un parcheggio privato.", explanation: "\"Disporre di\" + facilities." },
      { type: "speak", text: "L'appartamento dispone di due bagni e di un ampio terrazzo.", prompt: "Describe the flat for an advert: The flat has two bathrooms and a large terrace.", tip: "di-SPO-ne: stress on spo.", explanation: "\"Disporre di\" in adverts." },
    ],
  },
  {
    slug: "b2-precise-adjectives",
    level: "IT-B2",
    number: 4,
    title: "Precise Adjectives",
    summary: "Replace molto bello and brutto with precise adjectives: splendido, incantevole, affascinante, suggestivo; sgradevole, squallido, deludente.",
    duration: "17 min",
    sections: [
      {
        heading: "Instead of molto bello",
        body: [
          "\"Molto bello\" says little. Choose by what you mean: \"splendido\" (splendid, magnificent: weather, views, results), \"incantevole\" (enchanting, charming: places), \"affascinante\" (fascinating, attractive: people, ideas, cities), \"suggestivo\" (evocative, atmospheric: an Italian favourite for places with mood), \"mozzafiato\" (breathtaking: views, invariable).",
          "Watch the false friend: \"suggestivo\" never means suggestive in the English sense; \"un luogo suggestivo\" is simply an atmospheric place.",
          "Italians love strong evaluations, but in writing the adjective should match the noun. \"Splendido\" fits weather, results and views; \"incantevole\" fits places and voices; \"affascinante\" fits people, ideas and stories. \"Bellissimo\" is fine in speech, but three \"bellissimo\" in one paragraph look lazy.",
        ],
        examples: [
          { es: "Abbiamo avuto una giornata splendida.", en: "We had a splendid day." },
          { es: "Positano è un paese incantevole.", en: "Positano is an enchanting town." },
          { es: "Trovo affascinante la storia di questa città.", en: "I find the history of this city fascinating." },
          { es: "Il chiostro è molto suggestivo al tramonto.", en: "The cloister is very atmospheric at sunset." },
          { es: "Dalla cima c'è una vista mozzafiato.", en: "From the top there's a breathtaking view." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Positano is an enchanting town.", answer: "Positano è un paese incantevole.", altAnswers: ["Positano è un borgo incantevole.", "Positano è una cittadina incantevole."], explanation: "\"Incantevole\" for charming places." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "From the top there's a [breathtaking] view.", sentence: "Dalla cima c'è una vista ___.", answer: "mozzafiato", explanation: "\"Mozzafiato\" is invariable." },
          { type: "multiple-choice", question: "\"Un posto molto suggestivo\" is ...", options: ["an atmospheric, evocative place", "a place with suggestive images", "a place that gives suggestions", "a noisy place"], correctIndex: 0, explanation: "False friend: \"suggestivo\" = evocative." },
        ],
      },
      {
        heading: "Instead of brutto",
        body: [
          "\"Brutto\" covers ugly, bad and nasty. Be precise: \"sgradevole\" (unpleasant: smells, situations, people), \"squallido\" (squalid, dreary, sordid: places and behaviour), \"deludente\" (disappointing: films, results), \"spiacevole\" (unpleasant, regrettable: incidents), \"orribile\" (horrible). For weather: \"il tempo è pessimo\", \"una giornata uggiosa\" (dull and grey).",
          "For people, \"brutto\" refers only to looks, and Italians rarely say it to someone's face. For character, use \"antipatico\" (unpleasant, not likeable), \"scortese\" (rude), \"arrogante\", \"meschino\" (petty). For a bad experience, \"un'esperienza negativa\" or \"spiacevole\" is more measured than \"brutta\", and \"un brutto voto\" in a report becomes \"un voto insufficiente\".",
        ],
        examples: [
          { es: "In cucina c'era un odore sgradevole.", en: "There was an unpleasant smell in the kitchen." },
          { es: "L'albergo era squallido e sporco.", en: "The hotel was dreary and dirty." },
          { es: "Il finale del film è stato deludente.", en: "The ending of the film was disappointing." },
          { es: "È successo un episodio spiacevole.", en: "An unpleasant incident happened." },
          { es: "Che giornata uggiosa!", en: "What a dull, grey day!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ending of the film was disappointing.", answer: "Il finale del film è stato deludente.", altAnswers: ["Il finale del film era deludente."], explanation: "\"Deludente\" from \"deludere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was an unpleasant smell.", answer: "C'era un odore sgradevole.", altAnswers: ["C'era un cattivo odore."], explanation: "\"Sgradevole\" = unpleasant." },
          { type: "listen-choose", audio: "L'albergo era squallido e sporco.", question: "What was the hotel like?", options: ["dreary and dirty", "small but clean", "expensive and noisy", "charming and old"], correctIndex: 0, explanation: "\"Squallido\" = squalid, dreary." },
        ],
      },
      {
        heading: "Instead of buono, grande, interessante",
        body: [
          "Food: \"gustoso\", \"saporito\", \"squisito\" (exquisite, delicious). Size: \"ampio\" and \"spazioso\" (roomy) for rooms, \"vasto\" for areas, \"enorme\". Interest: \"stimolante\" (stimulating), \"coinvolgente\" (gripping, engaging), \"avvincente\" (enthralling: books, films).",
          "Be careful with intensity. \"Squisito\" and \"delizioso\" are strong; \"gustoso\" and \"saporito\" are positive but neutral. \"Interessante\" is often weaker in Italian than in English: a book that is \"interessante\" may be just fine, while \"avvincente\" or \"appassionante\" sounds really enthusiastic. Big things: \"una casa ampia\" or \"spaziosa\", \"un'area vasta\", \"un numero elevato\" (formal for a large number), \"un aumento notevole\" (a considerable increase).",
          "Finally, remember that the position of some adjectives changes the meaning: \"un grande uomo\" is a great man, \"un uomo grande\" a big man; \"un vecchio amico\" is an old (long-standing) friend, \"un amico vecchio\" a friend who is old.",
        ],
        examples: [
          { es: "La cena era squisita.", en: "The dinner was delicious." },
          { es: "Il soggiorno è ampio e luminoso.", en: "The living room is spacious and bright." },
          { es: "È un romanzo avvincente.", en: "It's an enthralling novel." },
          { es: "Il corso è stato molto stimolante.", en: "The course was very stimulating." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The living room is spacious and bright.", answer: "Il soggiorno è ampio e luminoso.", altAnswers: ["Il soggiorno è spazioso e luminoso.", "Il salotto è ampio e luminoso.", "Il salotto è spazioso e luminoso."], explanation: "\"Ampio\" or \"spazioso\" for rooms." },
          { type: "speak", text: "È un romanzo avvincente: non riuscivo a smettere di leggere.", prompt: "Recommend it: It's an enthralling novel: I couldn't stop reading.", tip: "av-vin-CEN-te: double v.", explanation: "\"Avvincente\" for books and films." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had a splendid day.", answer: "Abbiamo avuto una giornata splendida.", altAnswers: ["Abbiamo passato una giornata splendida.", "È stata una giornata splendida."], explanation: "\"Splendido\" agrees with \"giornata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I find the history of this city fascinating.", answer: "Trovo affascinante la storia di questa città.", altAnswers: ["Trovo la storia di questa città affascinante."], explanation: "\"Affascinante\" = fascinating." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cloister is very atmospheric at sunset.", answer: "Il chiostro è molto suggestivo al tramonto.", explanation: "\"Suggestivo\" = atmospheric." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dinner was delicious.", answer: "La cena era squisita.", altAnswers: ["La cena è stata squisita.", "La cena era deliziosa."], explanation: "\"Squisito\" = delicious, exquisite." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "An unpleasant incident happened.", answer: "È successo un episodio spiacevole.", altAnswers: ["È accaduto un episodio spiacevole.", "È successo un incidente spiacevole."], explanation: "\"Spiacevole\" = regrettable, unpleasant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The course was very stimulating.", answer: "Il corso è stato molto stimolante.", altAnswers: ["Il corso era molto stimolante."], explanation: "\"Stimolante\" = stimulating." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The hotel was [dreary] and dirty.", sentence: "L'albergo era ___ e sporco.", answer: "squallido", explanation: "\"Squallido\" for depressing places." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "What a [dull, grey] day!", sentence: "Che giornata ___!", answer: "uggiosa", altAnswers: ["grigia"], explanation: "\"Uggioso\" = dull, gloomy weather." },
      { type: "word-order", prompt: "Put the words in order to say: From the top there's a breathtaking view.", words: ["Dalla cima", "c'è", "una vista", "mozzafiato."], translation: "From the top there's a breathtaking view.", explanation: "\"Mozzafiato\" after the noun." },
      { type: "matching", instructions: "Match the adjective to what it best describes.", pairs: [{ left: "incantevole", right: "a charming village" }, { left: "avvincente", right: "a gripping thriller" }, { left: "deludente", right: "a disappointing result" }, { left: "squallido", right: "a dreary motel" }, { left: "spazioso", right: "a roomy flat" }], explanation: "Precise adjectives by context." },
      { type: "dictation", audio: "Il chiostro è molto suggestivo al tramonto.", explanation: "\"Suggestivo\" = atmospheric." },
      { type: "speak", text: "Positano è incantevole, ma l'albergo era squallido e la cena deludente.", prompt: "Review the trip: Positano is enchanting, but the hotel was dreary and the dinner disappointing.", tip: "squal-LI-do: double l.", explanation: "Three precise adjectives." },
    ],
  },
  {
    slug: "b2-drill-synonyms",
    level: "IT-B2",
    number: 5,
    title: "Drill: Synonyms",
    summary: "High-repetition production replacing dire, fare, mettere, avere and molto bello with precise words.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Verbs",
        body: [
          "Pattern: generic verb → precise verb + the right noun. \"Fare un errore\" → \"commettere un errore\"; \"dire\" → \"affermare\", \"sostenere\", \"riferire\"; \"mettere\" → \"inserire\", \"collocare\"; \"avere\" → \"disporre di\", \"possedere\".",
        ],
        examples: [
          { es: "Il direttore ha affermato che non ci saranno licenziamenti.", en: "The director stated that there will be no redundancies." },
          { es: "Abbiamo commesso un errore di valutazione.", en: "We made an error of judgement." },
          { es: "Inserire il biglietto nella macchinetta.", en: "Insert the ticket into the machine." },
          { es: "La scuola dispone di una palestra nuova.", en: "The school has a new gym." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "We made an error of judgement.", answer: "Abbiamo commesso un errore di valutazione.", explanation: "\"Commettere un errore\"." },
          { type: "listen-choose", audio: "La scuola dispone di una palestra nuova.", question: "What does the school have?", options: ["a new gym", "a new library", "a new canteen", "a new car park"], correctIndex: 0, explanation: "\"Disporre di\" = to have available." },
        ],
      },
      {
        heading: "Adjectives",
        body: [
          "Pattern: \"molto bello\" / \"brutto\" / \"buono\" / \"interessante\" → a precise adjective that fits the noun: \"una vista mozzafiato\", \"un film deludente\", \"un piatto squisito\", \"un libro avvincente\".",
        ],
        examples: [
          { es: "Il concerto è stato splendido.", en: "The concert was splendid." },
          { es: "La riunione è stata deludente.", en: "The meeting was disappointing." },
          { es: "Ho letto un saggio molto stimolante.", en: "I read a very stimulating essay." },
          { es: "La casa è ampia e luminosa.", en: "The house is spacious and bright." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The meeting was disappointing.", answer: "La riunione è stata deludente.", altAnswers: ["La riunione era deludente."], explanation: "\"Deludente\" instead of \"brutto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The house is spacious and bright.", answer: "La casa è ampia e luminosa.", altAnswers: ["La casa è spaziosa e luminosa."], explanation: "\"Ampio\" instead of \"grande\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without dire.", source: "The director stated that there will be no redundancies.", answer: "Il direttore ha affermato che non ci saranno licenziamenti.", altAnswers: ["La direttrice ha affermato che non ci saranno licenziamenti.", "Il direttore ha dichiarato che non ci saranno licenziamenti."], explanation: "\"Affermare\" = to state." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without dire.", source: "The witness told the police what she had seen.", answer: "La testimone ha riferito alla polizia quello che aveva visto.", altAnswers: ["La testimone ha raccontato alla polizia quello che aveva visto.", "La testimone ha riferito alla polizia ciò che aveva visto."], explanation: "\"Riferire\" = to report." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "The work was carried out in three months.", answer: "Il lavoro è stato svolto in tre mesi.", altAnswers: ["Il lavoro è stato realizzato in tre mesi.", "I lavori sono stati eseguiti in tre mesi.", "Il lavoro è stato eseguito in tre mesi."], explanation: "\"Svolgere\" for work." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "Can I ask a question?", answer: "Posso porre una domanda?", altAnswers: ["Potrei porre una domanda?"], explanation: "\"Porre una domanda\" is formal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without mettere.", source: "Insert the ticket into the machine.", answer: "Inserire il biglietto nella macchinetta.", altAnswers: ["Inserire il biglietto nella macchina.", "Inserisci il biglietto nella macchinetta."], explanation: "\"Inserire\" = to insert." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without avere.", source: "The school has a new gym.", answer: "La scuola dispone di una palestra nuova.", altAnswers: ["La scuola dispone di una nuova palestra."], explanation: "\"Disporre di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The concert was splendid.", answer: "Il concerto è stato splendido.", altAnswers: ["Il concerto era splendido."], explanation: "\"Splendido\" instead of \"molto bello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I read a very stimulating essay.", answer: "Ho letto un saggio molto stimolante.", explanation: "\"Stimolante\" instead of \"interessante\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without fare.", en: "I [took] a photo of the bridge.", sentence: "Ho ___ una foto del ponte.", answer: "scattato", explanation: "\"Scattare una foto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without avere.", en: "The patient [has] a fever.", sentence: "Il paziente ___ febbre.", answer: "presenta", explanation: "\"Presentare\" for symptoms." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without dire.", en: "She [admitted] she was wrong.", sentence: "Ha ___ di avere torto.", answer: "ammesso", explanation: "\"Ammettere di\"." },
      { type: "word-order", prompt: "Put the words in order to say: We made an error of judgement.", words: ["Abbiamo", "commesso", "un errore", "di valutazione."], translation: "We made an error of judgement.", explanation: "\"Commettere un errore\"." },
      { type: "dictation", audio: "Il direttore ha affermato che non ci saranno licenziamenti.", explanation: "\"Affermare\" instead of \"dire\"." },
      { type: "speak", text: "Il progetto è stato realizzato in tre mesi e i risultati sono splendidi.", prompt: "Report: The project was carried out in three months and the results are splendid.", tip: "re-a-liz-ZA-to: voiced zz, like dz.", explanation: "\"Realizzare\" and \"splendido\"." },
    ],
  },
  {
    slug: "b2-drill-register-synonyms",
    level: "IT-B2",
    number: 6,
    title: "Drill: Register",
    summary: "High-repetition choice of synonyms by register: comprare / acquistare, mandare / inviare, dare / fornire, finire / terminare.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Everyday and formal pairs",
        body: [
          "Pattern: everyday verb → formal synonym. \"Comprare\" → \"acquistare\", \"mandare\" → \"inviare\", \"dare\" → \"fornire\" (supply) or \"rilasciare\" (issue a document), \"finire\" → \"terminare\", \"cominciare\" → \"avviare\" (launch), \"chiedere\" → \"richiedere\", \"aiutare\" → \"assistere\", \"cercare di\" → \"tentare di\".",
        ],
        examples: [
          { es: "I biglietti si possono acquistare online.", en: "Tickets can be purchased online." },
          { es: "La invitiamo a inviare il modulo entro venerdì.", en: "We invite you to send the form by Friday." },
          { es: "Il Comune rilascia la carta d'identità in pochi giorni.", en: "The council issues ID cards within a few days." },
          { es: "La riunione è terminata alle sei.", en: "The meeting ended at six." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "Tickets can be purchased online.", answer: "I biglietti si possono acquistare online.", altAnswers: ["I biglietti possono essere acquistati online.", "È possibile acquistare i biglietti online."], explanation: "\"Acquistare\" is the formal \"comprare\"." },
          { type: "listen-choose", audio: "Il Comune rilascia la carta d'identità in pochi giorni.", question: "What does the council do?", options: ["It issues ID cards.", "It checks passports.", "It sells tickets.", "It closes offices."], correctIndex: 0, explanation: "\"Rilasciare\" = to issue a document." },
        ],
      },
      {
        heading: "Choosing the register",
        body: [
          "Pattern: a message to a friend uses the everyday verb; an email to an office, a notice or a report uses the formal one. Don't mix: \"Ciao Marco, ti invio il file\" sounds odd; \"Gentile dottoressa, Le mando il file\" is acceptable but \"Le invio\" is better.",
        ],
        examples: [
          { es: "Ciao, ti mando le foto stasera.", en: "Hi, I'll send you the photos tonight." },
          { es: "Gentile dottoressa, Le invio in allegato il curriculum.", en: "Dear Doctor, I'm sending you my CV attached." },
          { es: "Abbiamo finito tardi ieri sera.", en: "We finished late last night." },
          { es: "I lavori termineranno entro marzo.", en: "The works will be completed by March." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in a formal email.", source: "I'm sending you my CV attached.", answer: "Le invio in allegato il curriculum.", altAnswers: ["Le invio in allegato il mio curriculum.", "Le invio il curriculum in allegato."], explanation: "\"Inviare\" + formal \"Le\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "I'll send you the photos tonight.", answer: "Ti mando le foto stasera.", altAnswers: ["Stasera ti mando le foto."], explanation: "Everyday \"mandare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "We invite you to send the form by Friday.", answer: "La invitiamo a inviare il modulo entro venerdì.", altAnswers: ["La preghiamo di inviare il modulo entro venerdì."], explanation: "\"Invitare a\" + \"inviare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "The works will be completed by March.", answer: "I lavori termineranno entro marzo.", altAnswers: ["I lavori saranno terminati entro marzo.", "I lavori verranno terminati entro marzo."], explanation: "\"Terminare\" = formal \"finire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "The company supplies all the material.", answer: "L'azienda fornisce tutto il materiale.", altAnswers: ["La ditta fornisce tutto il materiale.", "La società fornisce tutto il materiale."], explanation: "\"Fornire\" = to supply." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "You can request a copy at the office.", answer: "È possibile richiedere una copia presso l'ufficio.", altAnswers: ["Si può richiedere una copia presso l'ufficio.", "Può richiedere una copia presso l'ufficio.", "È possibile richiedere una copia in ufficio."], explanation: "\"Richiedere\" and \"presso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "The project will be launched in September.", answer: "Il progetto sarà avviato a settembre.", altAnswers: ["Il progetto verrà avviato a settembre.", "Il progetto sarà avviato in settembre."], explanation: "\"Avviare\" = to launch, start." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "We finished late last night.", answer: "Abbiamo finito tardi ieri sera.", altAnswers: ["Ieri sera abbiamo finito tardi."], explanation: "Everyday \"finire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "Our staff will assist you.", answer: "Il nostro personale La assisterà.", altAnswers: ["Il nostro personale la assisterà.", "Il nostro staff La assisterà."], explanation: "\"Assistere\" = formal \"aiutare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "I bought a new bike.", answer: "Ho comprato una bici nuova.", altAnswers: ["Mi sono comprato una bici nuova.", "Mi sono comprata una bici nuova.", "Ho comprato una bicicletta nuova."], explanation: "Everyday \"comprare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, formally.", en: "The police headquarters [issues] passports.", sentence: "La Questura ___ i passaporti.", answer: "rilascia", explanation: "\"Rilasciare\" = to issue a document; in Italy passports come from \"la Questura\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, formally.", en: "The thieves [tried to] escape.", sentence: "I ladri hanno ___ fuggire.", answer: "tentato di", explanation: "\"Tentare di\" = formal \"cercare di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, formally.", en: "The goods can be [purchased] in store.", sentence: "La merce può essere ___ in negozio.", answer: "acquistata", explanation: "Passive participle agrees with \"merce\"." },
      { type: "word-order", prompt: "Put the words in order to say: Tickets can be purchased online.", words: ["I biglietti", "si possono", "acquistare", "online."], translation: "Tickets can be purchased online.", explanation: "Si passivante with \"potere\"." },
      { type: "dictation", audio: "Gentile dottoressa, Le invio in allegato il curriculum.", explanation: "Formal \"Le invio\"." },
      { type: "speak", text: "Il progetto sarà avviato a settembre e terminerà entro giugno.", prompt: "Announce formally: The project will be launched in September and will be completed by June.", tip: "av-vi-A-to: double v.", explanation: "\"Avviare\" and \"terminare\"." },
    ],
  },
  {
    slug: "b2-error-hunt-precision",
    level: "IT-B2",
    number: 7,
    title: "Error Hunt: Precision",
    summary: "Improve a learner's report full of fare, dire, mettere and molto bello, sentence by sentence.",
    duration: "17 min",
    sections: [
      {
        heading: "The learner's text",
        body: [
          "Tom wrote a short report on a volunteering project for his Italian course. Nothing is grammatically wrong, but the teacher wrote \"impreciso\" in the margin. The problem: \"fare\", \"dire\", \"mettere\" and \"molto bello\" everywhere. Here are his sentences and better versions.",
          "Sentence 1: \"Quest'anno ho fatto un'attività di volontariato\" → \"ho svolto un'attività di volontariato\". Sentence 2: \"Il responsabile ha detto che il progetto era molto bello\" → \"ha affermato che il progetto era molto valido\" (\"valido\" = sound, worthwhile).",
        ],
        examples: [
          { es: "Quest'anno ho svolto un'attività di volontariato.", en: "This year I did voluntary work." },
          { es: "Il responsabile ha affermato che il progetto era molto valido.", en: "The coordinator stated that the project was very worthwhile." },
          { es: "Abbiamo realizzato un orto in un cortile della scuola.", en: "We created a vegetable garden in a school courtyard." },
          { es: "Abbiamo collocato le panchine vicino agli alberi.", en: "We placed the benches near the trees." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "This year I did voluntary work.", answer: "Quest'anno ho svolto un'attività di volontariato.", altAnswers: ["Quest'anno ho svolto attività di volontariato."], explanation: "\"Svolgere un'attività\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words, without fare.", en: "We [created] a vegetable garden.", sentence: "Abbiamo ___ un orto.", answer: "realizzato", explanation: "\"Realizzare\" for a project or something built." },
          { type: "multiple-choice", question: "Which word best replaces \"molto bello\" for a project?", options: ["valido", "incantevole", "mozzafiato", "squisito"], correctIndex: 0, explanation: "\"Un progetto valido\" = a sound, worthwhile project." },
        ],
      },
      {
        heading: "More sentences",
        body: [
          "Sentence 3: \"Abbiamo messo le panchine vicino agli alberi\" → \"abbiamo collocato le panchine\". Sentence 4: \"Ho fatto molte foto\" → \"ho scattato molte foto\". Sentence 5: \"Un genitore ci ha detto la storia del cortile\" → \"ci ha raccontato la storia del cortile\". Sentence 6: \"La scuola ha una palestra e un giardino\" → \"la scuola dispone di una palestra e di un giardino\".",
        ],
        examples: [
          { es: "Ho scattato molte foto durante i lavori.", en: "I took a lot of photos during the work." },
          { es: "Un genitore ci ha raccontato la storia del cortile.", en: "A parent told us the history of the courtyard." },
          { es: "La scuola dispone di una palestra e di un giardino.", en: "The school has a gym and a garden." },
          { es: "Abbiamo commesso qualche errore all'inizio.", en: "We made a few mistakes at the beginning." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without dire.", source: "A parent told us the history of the courtyard.", answer: "Un genitore ci ha raccontato la storia del cortile.", explanation: "\"Raccontare\" for a story." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "We made a few mistakes at the beginning.", answer: "Abbiamo commesso qualche errore all'inizio.", altAnswers: ["All'inizio abbiamo commesso qualche errore.", "Abbiamo commesso alcuni errori all'inizio."], explanation: "\"Commettere\" + \"qualche\" + singular." },
          { type: "listen-choose", audio: "La scuola dispone di una palestra e di un giardino.", question: "What is the sentence about?", options: ["the school's facilities", "the school's timetable", "the school's teachers", "the school's rules"], correctIndex: 0, explanation: "\"Disporre di\" for facilities." },
        ],
      },
      {
        heading: "The ending",
        body: [
          "Sentence 7: \"È stata un'esperienza molto bella e ho imparato molte cose\" → \"è stata un'esperienza arricchente e stimolante, che mi ha insegnato molto\". (\"Arricchente\", enriching, is very common in Italian school and work writing.) Don't overdo it, though: one precise word per sentence is enough.",
        ],
        examples: [
          { es: "È stata un'esperienza arricchente e stimolante.", en: "It was an enriching and stimulating experience." },
          { es: "Mi ha insegnato molto sul lavoro di squadra.", en: "It taught me a lot about teamwork." },
          { es: "Consiglierei questo progetto a tutti.", en: "I would recommend this project to everyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was an enriching experience.", answer: "È stata un'esperienza arricchente.", explanation: "\"Arricchente\" = enriching." },
          { type: "speak", text: "È stata un'esperienza arricchente che mi ha insegnato molto sul lavoro di squadra.", prompt: "Conclude: It was an enriching experience that taught me a lot about teamwork.", tip: "ar-ric-CHEN-te: two double consonants.", explanation: "Precise adjective + relative clause." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without dire.", source: "The coordinator stated that the project was very worthwhile.", answer: "Il responsabile ha affermato che il progetto era molto valido.", altAnswers: ["La responsabile ha affermato che il progetto era molto valido.", "Il coordinatore ha affermato che il progetto era molto valido."], explanation: "\"Affermare\" and \"valido\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without mettere.", source: "We placed the benches near the trees.", answer: "Abbiamo collocato le panchine vicino agli alberi.", explanation: "\"Collocare\" = to place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "I took a lot of photos.", answer: "Ho scattato molte foto.", altAnswers: ["Ho scattato tante foto.", "Ho scattato molte fotografie."], explanation: "\"Scattare\" a photo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without avere.", source: "The school has a gym and a garden.", answer: "La scuola dispone di una palestra e di un giardino.", altAnswers: ["La scuola dispone di una palestra e un giardino."], explanation: "\"Disporre di\", repeated before each noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It taught me a lot about teamwork.", answer: "Mi ha insegnato molto sul lavoro di squadra.", altAnswers: ["Mi ha insegnato tanto sul lavoro di squadra."], explanation: "\"Il lavoro di squadra\" = teamwork." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I would recommend this project to everyone.", answer: "Consiglierei questo progetto a tutti.", explanation: "Conditional for a recommendation." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without fare.", en: "We [carried out] the work in two months.", sentence: "Abbiamo ___ il lavoro in due mesi.", answer: "svolto", altAnswers: ["eseguito", "realizzato"], explanation: "\"Svolgere un lavoro\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was a [stimulating] experience.", sentence: "È stata un'esperienza ___.", answer: "stimolante", explanation: "Instead of \"interessante\"." },
      { type: "word-order", prompt: "Put the words in order to say: A parent told us the history of the courtyard.", words: ["Un genitore", "ci ha raccontato", "la storia", "del cortile."], translation: "A parent told us the history of the courtyard.", explanation: "\"Raccontare\" instead of \"dire\"." },
      { type: "multi-select", question: "Which are better than \"fare\" in these phrases?", options: ["commettere un errore", "scattare una foto", "svolgere un'attività", "mettere una domanda", "effettuare un sogno"], correctIndexes: [0, 1, 2], explanation: "It's \"porre una domanda\" and \"realizzare un sogno\"." },
      { type: "dictation", audio: "Quest'anno ho svolto un'attività di volontariato in una scuola.", explanation: "\"Svolgere\" instead of \"fare\"." },
      { type: "speak", text: "Abbiamo realizzato un orto e collocato le panchine vicino agli alberi.", prompt: "Describe the project: We created a vegetable garden and placed the benches near the trees.", tip: "col-lo-CA-to: double l.", explanation: "Two precise verbs." },
    ],
  },
  {
    slug: "b2-reading-lab-style",
    level: "IT-B2",
    number: 8,
    title: "Reading Lab: Good Style",
    summary: "Compare two versions of the same museum leaflet and see how precise vocabulary changes the tone.",
    duration: "17 min",
    sections: [
      {
        heading: "Version A",
        body: [
          "Here is the first draft of a leaflet for a small museum of rural life in Umbria, written quickly by a volunteer. Read it and notice how often the same words come back.",
          "When you compare two versions of a text, look at three things: the verbs (generic or precise?), the adjectives (do they add information, or just say it's good?) and the register (does it suit the reader?). A leaflet for tourists should be clear and inviting, neither too casual nor bureaucratic.",
        ],
        examples: [
          { es: "Il museo ha tante cose della vita di campagna di una volta.", en: "The museum has lots of things from country life in the old days." },
          { es: "Ci sono attrezzi, vestiti e foto molto belli.", en: "There are very nice tools, clothes and photos." },
          { es: "Il museo è in un vecchio mulino molto bello vicino al fiume.", en: "The museum is in a very nice old mill near the river." },
          { es: "Si possono fare visite guidate e fare laboratori per i bambini.", en: "You can do guided tours and do workshops for children." },
          { es: "Il biglietto si compra all'entrata.", en: "Tickets are bought at the entrance." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which words are repeated most in Version A?", options: ["\"molto bello\" and \"fare\"", "\"museo\" and \"fiume\"", "\"biglietto\" and \"entrata\"", "\"campagna\" and \"vita\""], correctIndex: 0, explanation: "Two \"molto belli\" and two \"fare\"." },
          { type: "multiple-choice", question: "Where is the museum?", options: ["in an old mill by the river", "in a school", "in a castle", "in a farmhouse on a hill"], correctIndex: 0, explanation: "\"In un vecchio mulino vicino al fiume\"." },
        ],
      },
      {
        heading: "Version B",
        body: [
          "The museum director rewrote it. The facts are the same; the words are precise and the tone is professional.",
        ],
        examples: [
          { es: "Il museo custodisce oltre mille oggetti della civiltà contadina.", en: "The museum holds over a thousand objects from rural culture." },
          { es: "Attrezzi agricoli, abiti tradizionali e fotografie d'epoca raccontano un mondo scomparso.", en: "Farm tools, traditional dress and period photographs tell the story of a vanished world." },
          { es: "Ha sede in un suggestivo mulino ottocentesco sulle rive del fiume.", en: "It is housed in an atmospheric nineteenth-century mill on the riverbank." },
          { es: "Il museo offre visite guidate e organizza laboratori didattici per i più piccoli.", en: "The museum offers guided tours and runs educational workshops for young children." },
          { es: "I biglietti possono essere acquistati presso la biglietteria.", en: "Tickets can be purchased at the ticket office." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum holds over a thousand objects.", answer: "Il museo custodisce oltre mille oggetti.", altAnswers: ["Il museo custodisce più di mille oggetti.", "Il museo conserva oltre mille oggetti.", "Il museo conserva più di mille oggetti."], explanation: "\"Custodire\" = to hold, keep safe." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It is housed in a nineteenth-century mill.", answer: "Ha sede in un mulino ottocentesco.", altAnswers: ["Ha sede in un mulino dell'Ottocento.", "Si trova in un mulino ottocentesco."], explanation: "\"Avere sede\" = to be based, housed." },
          { type: "listen-choose", audio: "Il museo offre visite guidate e organizza laboratori didattici per i più piccoli.", question: "Who are the workshops for?", options: ["young children", "teachers", "farmers", "tourists from abroad"], correctIndex: 0, explanation: "\"Per i più piccoli\" = for the youngest." },
        ],
      },
      {
        heading: "What changed",
        body: [
          "\"Ha tante cose\" → \"custodisce oltre mille oggetti\" (a precise verb and a number). \"Molto belli\" → \"d'epoca\", \"tradizionali\" (descriptive, not just positive). \"È in\" → \"ha sede in\". \"Fare visite\" / \"fare laboratori\" → \"offre\" / \"organizza\". \"Si compra all'entrata\" → \"possono essere acquistati presso la biglietteria\". Note \"ottocentesco\" (of the 1800s), a precise adjective for a century.",
        ],
        examples: [
          { es: "Una chiesa quattrocentesca.", en: "A fifteenth-century church." },
          { es: "Un palazzo settecentesco.", en: "An eighteenth-century palace." },
          { es: "Fotografie d'epoca.", en: "Period photographs." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "An [eighteenth-century] palace.", sentence: "Un palazzo ___.", answer: "settecentesco", explanation: "\"Settecento\" = the 1700s." },
          { type: "speak", text: "Il museo ha sede in un suggestivo mulino ottocentesco sulle rive del fiume.", prompt: "Read the improved sentence aloud: The museum is housed in an atmospheric nineteenth-century mill on the riverbank.", tip: "ot-to-cen-TE-sco: stress on te.", explanation: "Precise verb, two precise adjectives." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Which phrase in Version B replaces \"ha tante cose\"?", options: ["custodisce oltre mille oggetti", "ha sede in", "offre visite guidate", "raccontano un mondo scomparso"], correctIndex: 0, explanation: "Precise verb + a number." },
      { type: "multiple-choice", question: "What does \"la civiltà contadina\" refer to?", options: ["traditional rural life and culture", "modern farming technology", "city life", "a political party"], correctIndex: 0, explanation: "\"Contadino\" = peasant, farmer." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Period photographs tell the story of a vanished world.", answer: "Le fotografie d'epoca raccontano un mondo scomparso.", altAnswers: ["Fotografie d'epoca raccontano un mondo scomparso.", "Le foto d'epoca raccontano un mondo scomparso."], explanation: "\"Raccontare\" can take things as subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum runs educational workshops.", answer: "Il museo organizza laboratori didattici.", altAnswers: ["Il museo organizza dei laboratori didattici."], explanation: "\"Organizzare\" instead of \"fare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "Tickets can be purchased at the ticket office.", answer: "I biglietti possono essere acquistati presso la biglietteria.", altAnswers: ["I biglietti si possono acquistare presso la biglietteria.", "I biglietti possono essere acquistati alla biglietteria."], explanation: "\"Acquistare\" and \"presso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A fifteenth-century church.", answer: "Una chiesa quattrocentesca.", altAnswers: ["Una chiesa del Quattrocento."], explanation: "\"Quattrocento\" = the 1400s." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It is housed in an old mill on the riverbank.", answer: "Ha sede in un vecchio mulino sulle rive del fiume.", altAnswers: ["Ha sede in un antico mulino sulle rive del fiume.", "Ha sede in un vecchio mulino sulla riva del fiume."], explanation: "\"Avere sede\" and \"sulle rive\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The museum [holds] over a thousand objects.", sentence: "Il museo ___ oltre mille oggetti.", answer: "custodisce", altAnswers: ["conserva"], explanation: "\"Custodire\" = to keep safe." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Workshops [for young children].", sentence: "Laboratori ___.", answer: "per i più piccoli", altAnswers: ["per i bambini"], explanation: "\"I più piccoli\" = the youngest." },
      { type: "word-order", prompt: "Put the words in order to say: The museum offers guided tours.", words: ["Il museo", "offre", "visite", "guidate."], translation: "The museum offers guided tours.", explanation: "\"Offrire\" instead of \"fare\"." },
      { type: "dictation", audio: "Il museo custodisce oltre mille oggetti della civiltà contadina.", explanation: "\"Custodire\" and \"civiltà contadina\"." },
      { type: "speak", text: "Il museo offre visite guidate e organizza laboratori didattici per i più piccoli.", prompt: "Present the museum: The museum offers guided tours and runs educational workshops for young children.", tip: "di-DAT-ti-ci: double t.", explanation: "Two precise verbs." },
    ],
  },
  {
    slug: "b2-listening-lab-precision",
    level: "IT-B2",
    number: 9,
    title: "Listening Lab: Precise Speech",
    summary: "Follow a formal talk opening a conference on sustainable tourism, and notice the precise verbs a good speaker uses.",
    duration: "18 min",
    sections: [
      {
        heading: "The greeting",
        body: [
          "A town councillor for culture, \"l'assessora alla cultura\", opens a conference on sustainable tourism. Formal openings follow a pattern: \"porgere un saluto\" (to extend a greeting), \"ringraziare\" + person + \"per\", and \"è con grande piacere che\" (it is with great pleasure that).",
        ],
        examples: [
          { es: "Buongiorno a tutti e benvenuti.", en: "Good morning, everyone, and welcome." },
          { es: "Desidero porgere un saluto alle autorità presenti.", en: "I would like to extend a greeting to the officials present." },
          { es: "Ringrazio gli organizzatori per l'invito.", en: "I thank the organisers for the invitation." },
          { es: "È con grande piacere che apro questa giornata di lavori.", en: "It is with great pleasure that I open this day of proceedings." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ringrazio gli organizzatori per l'invito.", question: "Who does the speaker thank?", options: ["the organisers", "the mayor", "the audience", "the hotel staff"], correctIndex: 0, explanation: "\"Gli organizzatori\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "I thank the organisers for the invitation.", answer: "Ringrazio gli organizzatori per l'invito.", explanation: "\"Ringraziare\" + person + \"per\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "It is with great pleasure that I open this day.", answer: "È con grande piacere che apro questa giornata.", altAnswers: ["È con grande piacere che apro questa giornata di lavori."], explanation: "Cleft sentence for emphasis." },
        ],
      },
      {
        heading: "The main point",
        body: [
          "In the body of the talk, listen for verbs that organise ideas: \"sottolineare\" (to underline, stress), \"evidenziare\" (to highlight), \"illustrare\" (to present, explain in detail), \"affrontare\" (to tackle a problem, a topic). The speaker also uses figures, and the passive and impersonal for objectivity.",
          "Formal speakers also use \"desidero\" instead of \"voglio\" (\"desidero ringraziare\"), \"intervenire\" for to speak at an event (\"interverranno tre esperti\"), and \"il relatore\" / \"la relatrice\" for a speaker. Listen for signposting too: \"in primo luogo\", \"inoltre\", \"per quanto riguarda\" (as regards).",
        ],
        examples: [
          { es: "Vorrei sottolineare un dato: le presenze turistiche sono aumentate del venti per cento.", en: "I'd like to stress one figure: tourist overnight stays have risen by twenty per cent." },
          { es: "Questo aumento evidenzia la necessità di un piano sostenibile.", en: "This increase highlights the need for a sustainable plan." },
          { es: "Oggi affronteremo il tema del sovraffollamento.", en: "Today we will tackle the issue of overcrowding." },
          { es: "I relatori illustreranno alcune esperienze concrete.", en: "The speakers will present some concrete experiences." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Vorrei sottolineare un dato: le presenze turistiche sono aumentate del venti per cento.", question: "By how much have tourist stays increased?", options: ["twenty per cent", "two per cent", "twelve per cent", "they've decreased"], correctIndex: 0, explanation: "\"Del venti per cento\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today we will tackle the issue of overcrowding.", answer: "Oggi affronteremo il tema del sovraffollamento.", altAnswers: ["Oggi affronteremo il problema del sovraffollamento.", "Oggi affronteremo la questione del sovraffollamento."], explanation: "\"Affrontare un tema\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This increase [highlights] the need for a plan.", sentence: "Questo aumento ___ la necessità di un piano.", answer: "evidenzia", explanation: "\"Evidenziare\" = to highlight." },
        ],
      },
      {
        heading: "The close",
        body: [
          "To close: \"concludo\" or \"avviandomi alla conclusione\" (as I come to my conclusion), \"auspicare\" (to hope for, formal: \"auspico che\" + subjunctive), \"augurare buon lavoro\" (to wish productive work), and \"cedere la parola a\" (to hand over to).",
        ],
        examples: [
          { es: "Avviandomi alla conclusione, auspico che questa giornata porti proposte concrete.", en: "As I conclude, I hope this day will produce concrete proposals." },
          { es: "Auguro a tutti buon lavoro.", en: "I wish everyone a productive day." },
          { es: "Cedo ora la parola al primo relatore.", en: "I now hand over to the first speaker." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Cedo ora la parola al primo relatore.", question: "What does the speaker do at the end?", options: ["hands over to the first speaker", "asks for questions", "announces a break", "closes the conference"], correctIndex: 0, explanation: "\"Cedere la parola\"." },
          { type: "speak", text: "Auguro a tutti buon lavoro e cedo ora la parola al primo relatore.", prompt: "Close the opening speech: I wish everyone a productive day and I now hand over to the first speaker.", tip: "re-la-TO-re: stress on to.", explanation: "Two formal closing formulas." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Desidero porgere un saluto alle autorità presenti.", question: "What is the speaker doing?", options: ["greeting the officials present", "thanking the sponsors", "introducing the topic", "giving a figure"], correctIndex: 0, explanation: "\"Porgere un saluto\" = to extend a greeting." },
      { type: "listen-choose", audio: "Questo aumento evidenzia la necessità di un piano sostenibile.", question: "What does the increase show, according to the speaker?", options: ["the need for a sustainable plan", "the success of the current plan", "that tourism is falling", "that hotels are too expensive"], correctIndex: 0, explanation: "\"La necessità di un piano sostenibile\"." },
      { type: "listen-choose", audio: "Avviandomi alla conclusione, auspico che questa giornata porti proposte concrete.", question: "What does the speaker hope for?", options: ["concrete proposals", "more tourists", "a shorter conference", "new funding"], correctIndex: 0, explanation: "\"Auspico che\" + subjunctive \"porti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "I would like to extend a greeting to the officials present.", answer: "Desidero porgere un saluto alle autorità presenti.", altAnswers: ["Vorrei porgere un saluto alle autorità presenti."], explanation: "\"Porgere un saluto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to stress one figure.", answer: "Vorrei sottolineare un dato.", explanation: "\"Sottolineare\" = to stress." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The speakers will present some concrete experiences.", answer: "I relatori illustreranno alcune esperienze concrete.", altAnswers: ["I relatori presenteranno alcune esperienze concrete."], explanation: "\"Illustrare\" = to present in detail." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "I hope this day will produce concrete proposals.", answer: "Auspico che questa giornata porti proposte concrete.", altAnswers: ["Auspico che questa giornata produca proposte concrete.", "Mi auguro che questa giornata porti proposte concrete."], explanation: "\"Auspicare che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wish everyone a productive day.", answer: "Auguro a tutti buon lavoro.", altAnswers: ["Auguro buon lavoro a tutti."], explanation: "\"Augurare buon lavoro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tourist overnight stays have risen by twenty per cent.", answer: "Le presenze turistiche sono aumentate del venti per cento.", altAnswers: ["Le presenze turistiche sono aumentate del 20%.", "Le presenze turistiche sono cresciute del venti per cento."], explanation: "\"Le presenze\" = overnight stays." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I now [hand over] to the first speaker.", sentence: "___ ora la parola al primo relatore.", answer: "Cedo", explanation: "\"Cedere la parola\"." },
      { type: "word-order", prompt: "Put the words in order to say: Today we will tackle the issue of overcrowding.", words: ["Oggi", "affronteremo", "il tema", "del sovraffollamento."], translation: "Today we will tackle the issue of overcrowding.", explanation: "\"Affrontare\" a topic." },
      { type: "dictation", audio: "È con grande piacere che apro questa giornata di lavori.", explanation: "Cleft sentence: \"è ... che\"." },
      { type: "speak", text: "Vorrei sottolineare un dato che evidenzia la necessità di un piano sostenibile.", prompt: "Make the point: I'd like to stress a figure that highlights the need for a sustainable plan.", tip: "e-vi-den-ZIA: the z is voiced, dz.", explanation: "\"Sottolineare\" and \"evidenziare\"." },
    ],
  },
  {
    slug: "b2-mission-rewrite",
    level: "IT-B2",
    number: 10,
    title: "Real-World Mission: Rewrite It Better",
    summary: "Rewrite a plain hotel description with precise verbs and adjectives for a booking website.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "The plain draft",
        body: [
          "A family runs a small hotel on Lake Garda and asks you to improve the description for their website. Their draft: \"L'albergo è in una posizione molto bella. Ha 20 camere molto belle. Fa colazione con prodotti locali. Si può fare il bagno nel lago. Il personale vi dice tutto sulla zona.\"",
        ],
        examples: [
          { es: "L'albergo è in una posizione molto bella.", en: "The hotel is in a very nice position." },
          { es: "Ha 20 camere molto belle.", en: "It has 20 very nice rooms." },
          { es: "Il personale vi dice tutto sulla zona.", en: "The staff tell you everything about the area." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "How many times does \"molto bello\" appear in the draft?", options: ["twice", "once", "three times", "never"], correctIndex: 0, explanation: "\"Posizione molto bella\", \"camere molto belle\"." },
          { type: "listen-choose", audio: "Il personale vi dice tutto sulla zona.", question: "What does the staff do?", options: ["tells guests about the area", "cooks breakfast", "cleans the rooms", "drives guests to the lake"], correctIndex: 0, explanation: "This is the sentence to improve with \"fornire\"." },
        ],
      },
      {
        heading: "Precise verbs",
        body: [
          "Replace \"è in\" with \"sorge in\" or \"si trova in\"; \"ha\" with \"dispone di\"; \"fa colazione\" with \"offre una colazione\" or \"serve\"; \"si può fare il bagno\" with \"è possibile fare il bagno\" (this one stays: it's the natural phrase); \"vi dice\" with \"vi fornirà informazioni\" or \"sarà lieto di consigliarvi\".",
        ],
        examples: [
          { es: "L'albergo sorge in posizione panoramica sulla riva del lago.", en: "The hotel stands in a panoramic position on the lakeshore." },
          { es: "Dispone di 20 camere luminose e accoglienti.", en: "It has 20 bright and welcoming rooms." },
          { es: "Ogni mattina serviamo una colazione con prodotti del territorio.", en: "Every morning we serve a breakfast with local produce." },
          { es: "Il nostro personale sarà lieto di consigliarvi sulle escursioni.", en: "Our staff will be happy to advise you on excursions." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, for a hotel website.", source: "It has 20 bright and welcoming rooms.", answer: "Dispone di 20 camere luminose e accoglienti.", altAnswers: ["Dispone di venti camere luminose e accoglienti.", "L'albergo dispone di 20 camere luminose e accoglienti."], explanation: "\"Disporre di\" + precise adjectives." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, for a hotel website.", source: "Our staff will be happy to advise you.", answer: "Il nostro personale sarà lieto di consigliarvi.", altAnswers: ["Il nostro staff sarà lieto di consigliarvi.", "Il nostro personale sarà felice di consigliarvi."], explanation: "\"Essere lieto di\" = formal happy to." },
        ],
      },
      {
        heading: "Precise adjectives",
        body: [
          "Replace each \"molto bello\" with an adjective that adds information: \"panoramico\" (with a view), \"luminoso\", \"accogliente\" (welcoming, cosy), \"curato\" (well kept, tasteful), \"tranquillo\". For food: \"genuino\" (wholesome, authentic), \"a chilometro zero\", \"del territorio\". Avoid piling up superlatives: one strong adjective per noun is more convincing.",
        ],
        examples: [
          { es: "Le camere sono arredate con cura.", en: "The rooms are tastefully furnished." },
          { es: "Il giardino è curato e tranquillo.", en: "The garden is well kept and quiet." },
          { es: "Serviamo prodotti genuini a chilometro zero.", en: "We serve wholesome, locally sourced products." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rooms are tastefully furnished.", answer: "Le camere sono arredate con cura.", altAnswers: ["Le camere sono arredate con gusto."], explanation: "\"Arredare con cura\"." },
          { type: "speak", text: "L'albergo sorge in posizione panoramica e dispone di venti camere accoglienti.", prompt: "Present the hotel: The hotel stands in a panoramic position and has twenty welcoming rooms.", tip: "ac-co-GLIEN-te: gli as in million.", explanation: "Precise verbs and adjectives." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, for a hotel website.", source: "The hotel stands in a panoramic position on the lakeshore.", answer: "L'albergo sorge in posizione panoramica sulla riva del lago.", altAnswers: ["L'hotel sorge in posizione panoramica sulla riva del lago.", "L'albergo si trova in posizione panoramica sulla riva del lago."], explanation: "\"Sorgere\" = to stand (buildings)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, for a hotel website.", source: "Every morning we serve a breakfast with local produce.", answer: "Ogni mattina serviamo una colazione con prodotti del territorio.", altAnswers: ["Ogni mattina serviamo una colazione con prodotti locali.", "Ogni mattina offriamo una colazione con prodotti del territorio."], explanation: "\"Del territorio\" = local." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The garden is well kept and quiet.", answer: "Il giardino è curato e tranquillo.", explanation: "\"Curato\" = well looked after." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, for a hotel website.", source: "Guests can swim in the lake.", answer: "Gli ospiti possono fare il bagno nel lago.", altAnswers: ["Gli ospiti possono nuotare nel lago.", "È possibile fare il bagno nel lago."], explanation: "\"Fare il bagno\" is the natural phrase: keep it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We serve wholesome, locally sourced products.", answer: "Serviamo prodotti genuini a chilometro zero.", altAnswers: ["Serviamo prodotti genuini a km zero.", "Offriamo prodotti genuini a chilometro zero."], explanation: "\"Genuino\" = wholesome, authentic." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, for a hotel website.", source: "Our staff will provide information on the area.", answer: "Il nostro personale vi fornirà informazioni sulla zona.", altAnswers: ["Il nostro personale fornirà informazioni sulla zona.", "Il nostro personale vi fornirà informazioni sul territorio."], explanation: "\"Fornire\" instead of \"dire\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The hotel [has] a private beach.", sentence: "L'albergo ___ una spiaggia privata.", answer: "dispone di", explanation: "\"Disporre di\" for facilities." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The rooms are [bright and welcoming].", sentence: "Le camere sono ___.", answer: "luminose e accoglienti", explanation: "Two precise adjectives, feminine plural." },
      { type: "word-order", prompt: "Put the words in order to say: Our staff will be happy to advise you on excursions.", words: ["Il nostro personale", "sarà lieto", "di consigliarvi", "sulle escursioni."], translation: "Our staff will be happy to advise you on excursions.", explanation: "\"Essere lieto di\" + infinitive." },
      { type: "multiple-choice", question: "Which sentence is best for a hotel website?", options: ["L'albergo dispone di venti camere luminose.", "L'albergo ha venti camere molto belle.", "L'albergo c'ha venti camere belle.", "Ci sono tipo venti camere carine."], correctIndex: 0, explanation: "Precise verb and adjective, neutral-formal register." },
      { type: "dictation", audio: "Dispone di venti camere luminose e accoglienti, arredate con cura.", explanation: "Three precise adjectives." },
      { type: "speak", text: "Ogni mattina serviamo una colazione genuina con prodotti del territorio.", prompt: "Describe breakfast: Every morning we serve a wholesome breakfast with local produce.", tip: "ge-NU-i-na: four syllables.", explanation: "\"Genuino\" agrees with \"colazione\"." },
    ],
  },
];

export const IT_B2_U27_WRITING: WriteExercise = {
  type: "write",
  prompt: "A friend runs a small agriturismo in Tuscany and wrote this description: \"L'agriturismo è in campagna in un posto molto bello. Ha 8 camere molto belle e una piscina. Facciamo la cena con le cose del nostro orto. Si possono fare passeggiate e fare corsi di cucina. Vi diciamo noi dove andare.\" Rewrite it for a booking website with precise verbs (instead of essere in, avere, fare, dire) and precise adjectives (instead of molto bello).",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Replaces every generic verb with a precise one (sorge / si trova, dispone di, prepara / serve, organizza / offre, fornisce / consiglia)",
    "Replaces molto bello with adjectives that add information (panoramico, incantevole, luminoso, accogliente, curato, genuino)",
    "Keeps a consistent neutral-formal register suitable for a website, using noi or the impersonal and voi for guests",
    "Adds at least one concrete detail (a number, a place, a time) and avoids piling up superlatives",
  ],
  modelAnswer: "Il nostro agriturismo sorge sulle colline del Chianti, in una posizione panoramica circondata da vigneti e uliveti.\n\nDispone di otto camere luminose e accoglienti, arredate con cura, e di una piscina con vista sulla valle.\n\nOgni sera prepariamo una cena con prodotti genuini del nostro orto e olio di nostra produzione.\n\nGli ospiti possono percorrere i sentieri che attraversano la tenuta e partecipare ai corsi di cucina toscana che organizziamo due volte alla settimana.\n\nSaremo lieti di consigliarvi sugli itinerari e sulle cantine da visitare nei dintorni.",
  explanation: "Each generic verb has a precise replacement: \"sorge\", \"dispone di\", \"prepariamo\", \"percorrere\", \"organizziamo\", \"saremo lieti di consigliarvi\". \"Molto bello\" gives way to \"panoramica\", \"luminose\", \"accoglienti\", \"genuini\", and concrete details (the Chianti hills, twice a week) make the text more convincing than any superlative.",
};
