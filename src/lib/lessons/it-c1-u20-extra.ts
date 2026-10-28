// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u20-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 20 Extra Practice: C1 Review. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md). The forty mixed
// sentences of the first lesson are split between examples (18) and
// exercises (23).
export const IT_C1_U20_EXTRA: Lesson[] = [
  {
    slug: "c1-final-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: C1 Translation Review",
    summary: "Forty mixed C1 sentences to read and translate: literary tenses, mood and modals, register, idioms, business and translation traps.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Sentences 1-6: narrative and literary",
        body: [
          "Read each example aloud and cover the English: can you give the meaning before you look? Then translate the checkpoint sentences.",
        ],
        examples: [
          { es: "Quando la lettera arrivò, il padre era già partito.", en: "When the letter arrived, the father had already left." },
          { es: "Appena ebbe finito di parlare, uscì dalla stanza.", en: "As soon as he had finished speaking, he left the room." },
          { es: "Disse il sindaco: «Ricostruiremo tutto».", en: "The mayor said: 'We will rebuild everything.'" },
          { es: "Rimasta sola, la ragazza cominciò a scrivere.", en: "Left alone, the girl began to write." },
          { es: "Vi rimase fino alla morte.", en: "He stayed there until his death." },
          { es: "Narra la leggenda che il lago nasconda una città.", en: "Legend has it that the lake hides a city." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (passato remoto).", source: "When the letter arrived, the father had already left.", answer: "Quando la lettera arrivò, il padre era già partito.", explanation: "Passato remoto + pluperfect." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary).", source: "Left alone, the girl began to write.", answer: "Rimasta sola, la ragazza cominciò a scrivere.", altAnswers: ["Rimasta sola, la ragazza iniziò a scrivere."], explanation: "Absolute participle agrees with \"la ragazza\"." },
        ],
      },
      {
        heading: "Sentences 7-12: mood, modals and register",
        body: [
          "Mood and modal nuance, then register shifts.",
        ],
        examples: [
          { es: "Non è detto che abbia ragione lui.", en: "It's not certain that he's right." },
          { es: "Che io sappia, la riunione è confermata.", en: "As far as I know, the meeting is confirmed." },
          { es: "Sarebbe dovuto arrivare ieri.", en: "He was supposed to arrive yesterday." },
          { es: "Si prega di non lasciare bagagli incustoditi.", en: "Please do not leave luggage unattended." },
          { es: "Ai sensi dell'art. 5, la domanda è respinta.", en: "Under article 5, the application is rejected." },
          { es: "Dai, raga, ci vediamo dopo!", en: "Come on, guys, see you later!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As far as I know, the meeting is confirmed.", answer: "Che io sappia, la riunione è confermata.", altAnswers: ["Per quanto ne so, la riunione è confermata.", "Che io sappia la riunione è confermata."], explanation: "\"Che io sappia\": independent subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (notice).", source: "Please do not leave luggage unattended.", answer: "Si prega di non lasciare bagagli incustoditi.", altAnswers: ["Si prega di non lasciare i bagagli incustoditi."], explanation: "\"Si prega di\" + infinitive." },
        ],
      },
      {
        heading: "Sentences 13-18: idioms, business and traps",
        body: [
          "Idioms by function, business formulas and translation traps.",
        ],
        examples: [
          { es: "Ha preso due piccioni con una fava.", en: "She killed two birds with one stone." },
          { es: "Faccio seguito alla mia email di ieri.", en: "Following up on my email from yesterday." },
          { es: "Saremmo disposti a rivedere il prezzo.", en: "We'd be willing to review the price." },
          { es: "Mi hanno detto di richiamare domani.", en: "I was told to call back tomorrow." },
          { es: "Aspetto una risposta da tre settimane.", en: "I've been waiting for an answer for three weeks." },
          { es: "Attualmente lavora a Bari; in realtà vorrebbe tornare a Roma.", en: "She currently works in Bari; actually she'd like to go back to Rome." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been waiting for an answer for three weeks.", answer: "Aspetto una risposta da tre settimane.", altAnswers: ["Sto aspettando una risposta da tre settimane.", "Sono tre settimane che aspetto una risposta."], explanation: "\"Da\" + present." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd be willing to review the price.", answer: "Saremmo disposti a rivedere il prezzo.", altAnswers: ["Saremmo pronti a rivedere il prezzo.", "Saremmo disponibili a rivedere il prezzo."], explanation: "Negotiation conditional." },
          { type: "listen-choose", audio: "Attualmente lavora a Bari; in realtà vorrebbe tornare a Roma.", question: "What does it mean?", options: ["She currently works in Bari but actually wants to go back to Rome.", "She actually works in Bari now.", "She used to work in Bari.", "She will soon work in Rome."], correctIndex: 0, explanation: "\"Attualmente\" = currently; \"in realtà\" = actually." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as he had finished speaking, he left the room.", answer: "Appena ebbe finito di parlare, uscì dalla stanza.", altAnswers: ["Appena ebbe finito di parlare, lasciò la stanza."], explanation: "Trapassato remoto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not certain that he's right.", answer: "Non è detto che abbia ragione lui.", altAnswers: ["Non è detto che lui abbia ragione.", "Non è sicuro che abbia ragione."], explanation: "\"Non è detto che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was supposed to arrive yesterday.", answer: "Sarebbe dovuto arrivare ieri.", altAnswers: ["Doveva arrivare ieri."], explanation: "\"Essere\" with \"arrivare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She killed two birds with one stone.", answer: "Ha preso due piccioni con una fava.", altAnswers: ["Prese due piccioni con una fava."], explanation: "Idiom by function." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was told to call back tomorrow.", answer: "Mi hanno detto di richiamare domani.", altAnswers: ["Mi è stato detto di richiamare domani."], explanation: "Indirect object stays \"mi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Following up on my email from yesterday.", answer: "Faccio seguito alla mia email di ieri.", altAnswers: ["Faccio seguito alla mia mail di ieri.", "Facendo seguito alla mia email di ieri."], explanation: "Business formula." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they had listened to us, we wouldn't be here.", answer: "Se ci avessero ascoltato, non saremmo qui.", altAnswers: ["Se ci avessero ascoltati, non saremmo qui.", "Se ci avessero dato ascolto, non saremmo qui."], explanation: "Mixed conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for an apartment with a balcony (if one exists).", answer: "Cerco un appartamento che abbia un balcone.", altAnswers: ["Cerco una casa che abbia un balcone.", "Cerco un appartamento che abbia il balcone."], explanation: "Subjunctive: hypothetical antecedent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The minister has reportedly resigned.", answer: "Il ministro si sarebbe dimesso.", altAnswers: ["Secondo alcune fonti, il ministro si sarebbe dimesso."], explanation: "Conditional of hearsay." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Although] it was raining, they went out.", sentence: "___ piovesse, uscirono.", answer: "Benché", altAnswers: ["Sebbene", "Nonostante"], explanation: "+ subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The form [must be signed].", sentence: "Il modulo ___.", answer: "va firmato", altAnswers: ["deve essere firmato"], explanation: "\"Andare\" passive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [must have] missed the bus.", sentence: "___ perso l'autobus.", answer: "Deve aver", altAnswers: ["Deve avere"], explanation: "Deduction." },
      { type: "word-order", prompt: "Put the words in order to say: Legend has it that the lake hides a city.", words: ["Narra", "la", "leggenda", "che", "il", "lago", "nasconda", "una", "città."], translation: "Legend has it that the lake hides a city.", explanation: "Inversion." },
      { type: "multiple-choice", question: "Best translation of 'Come on, guys, see you later!' in a chat?", options: ["Dai, raga, ci vediamo dopo!", "Si prega di vedersi dopo.", "Egregi signori, a dopo.", "Vi si vede successivamente."], correctIndex: 0, explanation: "Informal register." },
      { type: "dictation", audio: "Che io sappia, la riunione è confermata.", explanation: "Independent subjunctive." },
      { type: "speak", text: "Quando la lettera arrivò, il padre era già partito. Che io sappia, non tornò mai più.", prompt: "Say it in Italian: When the letter arrived, the father had already left. As far as I know, he never came back.", tip: "Narrative pace.", explanation: "Literary tenses + \"che io sappia\"." },
    ],
  },
  {
    slug: "c1-final-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: C1 Writing Review",
    summary: "Three writing prompts, a complaint email, a short review and an opinion paragraph, with model sentences to translate and reuse.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Prompt 1: a complaint email",
        body: [
          "Prompt: \"Ha ordinato online un divano, arrivato danneggiato con due settimane di ritardo. Scriva all'azienda per chiedere la sostituzione.\" Model sentences: \"Le scrivo in merito all'ordine n. 4471\", \"il prodotto è arrivato con due settimane di ritardo e, per di più, danneggiato\", \"Le chiedo pertanto la sostituzione del divano\", \"In attesa di un Suo cortese riscontro\".",
        ],
        examples: [
          { es: "Le scrivo in merito all'ordine n. 4471.", en: "I'm writing regarding order no. 4471." },
          { es: "Il prodotto è arrivato con due settimane di ritardo e, per di più, danneggiato.", en: "The product arrived two weeks late and, what's more, damaged." },
          { es: "Le chiedo pertanto la sostituzione del divano.", en: "I therefore ask you to replace the sofa." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm writing regarding order no. 4471.", answer: "Le scrivo in merito all'ordine n. 4471.", altAnswers: ["Vi scrivo in merito all'ordine n. 4471.", "Le scrivo in merito all'ordine numero 4471."], explanation: "\"In merito a\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I therefore ask you to replace the sofa.", answer: "Le chiedo pertanto la sostituzione del divano.", altAnswers: ["Vi chiedo pertanto la sostituzione del divano.", "Le chiedo pertanto di sostituire il divano."], explanation: "Nominal style: \"la sostituzione\"." },
        ],
      },
      {
        heading: "Prompts 2 and 3: a review and an opinion",
        body: [
          "Prompt 2: a short review of a restaurant for a website. Model sentences: \"Situato in un vicolo del centro, il locale propone una cucina di mare semplice ma curata\", \"Pur con qualche lentezza nel servizio, l'esperienza è stata piacevole\", \"Consigliato a chi cerca autenticità\".",
          "Prompt 3: an opinion paragraph, \"Lo smartphone a scuola: sì o no?\" Model sentences: \"Ritengo che vada regolato, non vietato\", \"È vero che distrae; tuttavia, può essere uno strumento di studio\", \"Spetta agli insegnanti stabilire quando usarlo\".",
        ],
        examples: [
          { es: "Situato in un vicolo del centro, il locale propone una cucina di mare.", en: "Set in an alley in the center, the restaurant offers seafood cooking." },
          { es: "Pur con qualche lentezza nel servizio, l'esperienza è stata piacevole.", en: "Despite some slow service, the experience was enjoyable." },
          { es: "Consigliato a chi cerca autenticità.", en: "Recommended to those looking for authenticity." },
          { es: "Ritengo che lo smartphone vada regolato, non vietato.", en: "I believe the smartphone should be regulated, not banned." },
          { es: "Spetta agli insegnanti stabilire quando usarlo.", en: "It's up to teachers to decide when to use it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believe the smartphone should be regulated, not banned.", answer: "Ritengo che lo smartphone vada regolato, non vietato.", altAnswers: ["Ritengo che lo smartphone debba essere regolato, non vietato.", "Credo che lo smartphone vada regolato, non vietato."], explanation: "\"Andare\" passive in the subjunctive: \"vada\"." },
          { type: "listen-choose", audio: "Pur con qualche lentezza nel servizio, l'esperienza è stata piacevole.", question: "What is the reviewer's verdict?", options: ["Positive, despite slow service", "Negative because of the service", "Neutral", "The food was cold"], correctIndex: 0, explanation: "\"Pur con\" = despite." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The product arrived two weeks late and, what's more, damaged.", answer: "Il prodotto è arrivato con due settimane di ritardo e, per di più, danneggiato.", altAnswers: ["Il prodotto è arrivato con due settimane di ritardo e per di più danneggiato.", "Il prodotto è arrivato con due settimane di ritardo e, inoltre, danneggiato."], explanation: "\"Per di più\" adds weight." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I look forward to your kind reply.", answer: "In attesa di un Suo cortese riscontro.", altAnswers: ["In attesa di un suo cortese riscontro.", "In attesa di un Vostro cortese riscontro."], explanation: "Formal closing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Recommended to those looking for authenticity.", answer: "Consigliato a chi cerca autenticità.", altAnswers: ["Consigliato a chi cerca l'autenticità."], explanation: "\"Chi\" = those who." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite some slow service, the experience was enjoyable.", answer: "Pur con qualche lentezza nel servizio, l'esperienza è stata piacevole.", altAnswers: ["Nonostante qualche lentezza nel servizio, l'esperienza è stata piacevole."], explanation: "\"Pur con\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true that it's distracting; however, it can be a study tool.", answer: "È vero che distrae; tuttavia, può essere uno strumento di studio.", altAnswers: ["È vero che distrae, tuttavia può essere uno strumento di studio.", "È vero che distrae; tuttavia può essere uno strumento di studio."], explanation: "Concession." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's up to teachers to decide when to use it.", answer: "Spetta agli insegnanti stabilire quando usarlo.", altAnswers: ["Spetta agli insegnanti decidere quando usarlo.", "Sta agli insegnanti decidere quando usarlo."], explanation: "\"Spettare a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant offers simple but careful seafood cooking.", answer: "Il locale propone una cucina di mare semplice ma curata.", altAnswers: ["Il ristorante propone una cucina di mare semplice ma curata.", "Il locale offre una cucina di mare semplice ma curata."], explanation: "\"Curato\" = careful, well-made." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Set in an alley] in the center, the restaurant offers seafood.", sentence: "___ del centro, il locale propone piatti di mare.", answer: "Situato in un vicolo", altAnswers: ["Collocato in un vicolo"], explanation: "Participle opener." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [therefore] ask you to replace it.", sentence: "Le chiedo ___ di sostituirlo.", answer: "pertanto", altAnswers: ["quindi", "dunque"], explanation: "Formal connector." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It should be regulated, [not banned].", sentence: "Va regolato, ___.", answer: "non vietato", altAnswers: ["non proibito"], explanation: "Antithesis." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sofa arrived [damaged].", sentence: "Il divano è arrivato ___.", answer: "danneggiato", altAnswers: ["rovinato"], explanation: "Agreement with \"divano\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'm writing regarding order no. 4471.", words: ["Le", "scrivo", "in", "merito", "all'ordine", "n.", "4471."], translation: "I'm writing regarding order no. 4471.", explanation: "Formal opener." },
      { type: "multiple-choice", question: "Which sentence fits a website review best?", options: ["Consigliato a chi cerca autenticità.", "Le chiedo pertanto la sostituzione.", "Si comunica che il locale è aperto.", "Raga, andateci!"], correctIndex: 0, explanation: "Review register." },
      { type: "multiple-choice", question: "Which opening suits the complaint email?", options: ["Le scrivo in merito all'ordine n. 4471.", "Ciao, com'è?", "Narra la leggenda che...", "Cari concittadini,"], correctIndex: 0, explanation: "Formal and direct." },
      { type: "dictation", audio: "Consigliato a chi cerca autenticità.", explanation: "Review verdict." },
      { type: "speak", text: "Ritengo che lo smartphone a scuola vada regolato, non vietato: spetta agli insegnanti stabilire quando usarlo.", prompt: "Give your opinion: I believe smartphones at school should be regulated, not banned: it's up to teachers to decide when to use them.", tip: "Stress the antithesis \"regolato, non vietato\".", explanation: "Thesis + responsibility." },
    ],
  },
];
