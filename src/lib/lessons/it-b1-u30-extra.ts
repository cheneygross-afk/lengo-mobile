// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u30-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 30 Extra Practice: The Environment and the City. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U30_EXTRA: Lesson[] = [
  {
    slug: "b1-environment-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Recycling and Transport",
    summary: "Fresh sentences about bins, collection days, tickets, passes and parking.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Everyday city life",
        body: [
          "Recap: \"va / vanno\" + participle for rules (\"le scatolette vanno sciacquate\"), \"il\" + day for regular days (\"il venerdì\"), \"con i mezzi\", \"in bici\", \"a piedi\" for how you travel, and \"più ... di\" to compare.",
        ],
        examples: [
          { es: "Le scatolette del tonno vanno sciacquate.", en: "Tuna tins must be rinsed." },
          { es: "Il venerdì passano a prendere il vetro.", en: "On Fridays they collect the glass." },
          { es: "Vado in ufficio a piedi.", en: "I walk to the office." },
          { es: "Il treno è più comodo dell'autobus.", en: "The train is more comfortable than the bus." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tuna tins must be rinsed.", answer: "Le scatolette del tonno vanno sciacquate.", altAnswers: ["Le scatolette di tonno vanno sciacquate.", "Le scatolette del tonno vanno lavate."], explanation: "Feminine plural agreement." },
          { type: "listen-choose", audio: "Il venerdì passano a prendere il vetro.", question: "What is collected on Fridays?", options: ["glass", "paper", "plastic", "food waste"], correctIndex: 0, explanation: "\"Il vetro\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I walk to the office.", answer: "Vado in ufficio a piedi.", altAnswers: ["Vado a piedi in ufficio."], explanation: "\"A piedi\" = on foot." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train is more comfortable than the bus.", answer: "Il treno è più comodo dell'autobus.", altAnswers: ["Il treno è più comodo del bus."], explanation: "\"Più ... di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where do I buy the ticket?", answer: "Dove compro il biglietto?", altAnswers: ["Dove si compra il biglietto?", "Dove posso comprare il biglietto?"], explanation: "Simple present for questions." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yogurt pots go in the plastic.", answer: "I vasetti dello yogurt vanno nella plastica.", altAnswers: ["I vasetti di yogurt vanno nella plastica.", "I vasetti dello yogurt vanno con la plastica."], explanation: "\"Dello\" before \"y\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The car park is full.", answer: "Il parcheggio è pieno.", altAnswers: ["Il parcheggio è completo."], explanation: "\"Pieno\" = full." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I always go by bike in summer.", answer: "D'estate vado sempre in bici.", altAnswers: ["In estate vado sempre in bici.", "D'estate vado sempre in bicicletta."], explanation: "\"In bici\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The metro is closed for strike.", answer: "La metro è chiusa per sciopero.", altAnswers: ["La metropolitana è chiusa per sciopero.", "La metro è chiusa per lo sciopero."], explanation: "\"Per sciopero\" = due to a strike." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Old clothes go in the yellow bins on the street.", answer: "I vestiti usati vanno nei cassonetti gialli in strada.", altAnswers: ["I vestiti vecchi vanno nei cassonetti gialli in strada.", "I vestiti usati vanno nei cassonetti gialli per strada."], explanation: "\"Nei cassonetti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can pay for parking with the app.", answer: "Si può pagare il parcheggio con l'app.", altAnswers: ["Puoi pagare il parcheggio con l'app.", "Il parcheggio si può pagare con l'app."], explanation: "Impersonal \"si può\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Oil [must be taken] to the recycling centre.", sentence: "L'olio ___ all'isola ecologica.", answer: "va portato", explanation: "\"L'olio\" is masculine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My [pass] runs out tomorrow.", sentence: "Il mio ___ scade domani.", answer: "abbonamento", explanation: "\"Scadere\" = to expire." },
      { type: "word-order", prompt: "Put the words in order to say: Is the gate active now?", words: ["Il", "varco", "è", "attivo", "adesso?"], translation: "Is the gate active now?", explanation: "\"Varco attivo\"." },
      { type: "multiple-choice", question: "\"Scade\" on a ticket means ...", options: ["it expires", "it's valid", "it's free", "it's been validated"], correctIndex: 0, explanation: "\"Scadere\" = to expire." },
      { type: "dictation", audio: "Il mio abbonamento scade alla fine del mese.", explanation: "\"Scade\" = expires." },
      { type: "speak", text: "Scusi, sa quando passano a prendere la carta in questa via?", prompt: "Ask a neighbour (formal): Excuse me, do you know when they collect paper in this street?", tip: "\"Sa\": formal \"Lei\" form of \"sapere\".", explanation: "Polite question." },
    ],
  },
  {
    slug: "b1-environment-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Proposals",
    summary: "Fresh proposals for schools, parks, offices and neighbourhoods with the conditional and the subjunctive.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Ideas for change",
        body: [
          "Recap: \"bisognerebbe / si potrebbe / si dovrebbe\" + infinitive; \"sarebbe meglio che\" + imperfect subjunctive; \"bisogna che / è necessario che\" + present subjunctive; \"e se\" + imperfect subjunctive for a friendly idea.",
        ],
        examples: [
          { es: "In ufficio si potrebbe eliminare la plastica.", en: "In the office plastic could be eliminated." },
          { es: "Sarebbe meglio che la scuola avesse un orto.", en: "It would be better if the school had a vegetable garden." },
          { es: "È necessario che il condominio faccia la differenziata.", en: "The building needs to sort its rubbish." },
          { es: "E se mettessimo una bacheca per lo scambio di oggetti?", en: "What if we put up a board for swapping things?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be better if the school had a vegetable garden.", answer: "Sarebbe meglio che la scuola avesse un orto.", altAnswers: ["Sarebbe bello che la scuola avesse un orto.", "Sarebbe meglio se la scuola avesse un orto."], explanation: "\"Avesse\": imperfect subjunctive." },
          { type: "listen-choose", audio: "In ufficio si potrebbe eliminare la plastica.", question: "Where is the proposal for?", options: ["the office", "the school", "the park", "the building"], correctIndex: 0, explanation: "\"In ufficio\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Plastic cups ought to be eliminated.", answer: "Bisognerebbe eliminare i bicchieri di plastica.", altAnswers: ["Si dovrebbero eliminare i bicchieri di plastica.", "Si potrebbero eliminare i bicchieri di plastica."], explanation: "\"Bisognerebbe\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Benches could be added in the park.", answer: "Si potrebbero aggiungere delle panchine nel parco.", altAnswers: ["Si potrebbero aggiungere panchine nel parco.", "Si potrebbero mettere delle panchine nel parco."], explanation: "Plural: \"si potrebbero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The building needs to sort its rubbish.", answer: "È necessario che il condominio faccia la differenziata.", altAnswers: ["Bisogna che il condominio faccia la differenziata.", "Il condominio deve fare la differenziata."], explanation: "\"Faccia\": present subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What if we shared the car?", answer: "E se condividessimo la macchina?", altAnswers: ["E se usassimo la stessa macchina?", "E se condividessimo l'auto?"], explanation: "\"E se\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be useful if the offices turned off the lights at night.", answer: "Sarebbe utile che gli uffici spegnessero le luci di notte.", altAnswers: ["Sarebbe utile se gli uffici spegnessero le luci di notte."], explanation: "\"Spegnessero\": imperfect subjunctive of \"spegnere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I propose that we meet next week.", answer: "Propongo che ci vediamo la settimana prossima.", altAnswers: ["Propongo di vederci la settimana prossima."], explanation: "\"Proporre che\" + present subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The company should encourage remote working.", answer: "L'azienda dovrebbe incentivare lo smart working.", altAnswers: ["L'azienda dovrebbe favorire lo smart working.", "L'azienda dovrebbe incoraggiare il lavoro da remoto."], explanation: "\"Incentivare\" = to encourage, give incentives for." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like the children to walk to school.", answer: "Vorrei che i bambini andassero a scuola a piedi.", altAnswers: ["Vorrei che i ragazzi andassero a scuola a piedi."], explanation: "\"Vorrei che\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why don't we set up a library in the courtyard?", answer: "Perché non organizziamo una biblioteca nel cortile?", altAnswers: ["Perché non facciamo una biblioteca nel cortile?", "Perché non mettiamo una biblioteca nel cortile?"], explanation: "\"Perché non\" + present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It would be better if everyone [brought] their own bottle.", sentence: "Sarebbe meglio che ognuno ___ la propria borraccia.", answer: "portasse", explanation: "\"Ognuno\" is singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everyone needs to [do] their bit.", sentence: "Bisogna che ognuno ___ la sua parte.", answer: "faccia", explanation: "Present subjunctive of \"fare\"." },
      { type: "word-order", prompt: "Put the words in order to say: What if we planted flowers on the balconies?", words: ["E", "se", "piantassimo", "dei", "fiori", "sui", "balconi?"], translation: "What if we planted flowers on the balconies?", explanation: "\"Piantassimo\": imperfect subjunctive." },
      { type: "multiple-choice", question: "\"Sarebbe utile che la mensa ___ meno carne.\"", options: ["servisse", "serve", "serva", "servirà"], correctIndex: 0, explanation: "Conditional → imperfect subjunctive." },
      { type: "dictation", audio: "Bisognerebbe mettere una borraccia sulla scrivania di tutti.", explanation: "\"Borraccia\" = water bottle." },
      { type: "speak", text: "E se mettessimo una bacheca per lo scambio di oggetti? Sarebbe utile per tutti.", prompt: "Suggest to neighbours: What if we put up a board for swapping things? It would be useful for everyone.", tip: "Rising tone on the question.", explanation: "\"E se\" + subjunctive, conditional." },
    ],
  },
  {
    slug: "b1-environment-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Environment Texts",
    summary: "Read a school newsletter and a short blog post about a green neighbourhood, and answer questions.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two short texts",
        body: [
          "Text 1, a school newsletter: \"Da lunedì la nostra scuola diventa plastic free: in mensa l'acqua sarà servita in caraffe e ogni studente riceverà una borraccia. Si chiede alle famiglie di non mettere bottigliette nello zaino.\"",
          "Text 2, a blog post: \"Nel mio quartiere a Torino abbiamo creato un orto condiviso. Ognuno ha il suo pezzo di terra, ma l'acqua e gli attrezzi si dividono. All'inizio eravamo in dieci, ora siamo in quaranta. Secondo me bisognerebbe farne uno in ogni quartiere.\"",
        ],
        examples: [
          { es: "L'acqua sarà servita in caraffe.", en: "Water will be served in jugs." },
          { es: "Si chiede alle famiglie di non mettere bottigliette nello zaino.", en: "Families are asked not to put small bottles in schoolbags." },
          { es: "Abbiamo creato un orto condiviso.", en: "We've created a shared vegetable garden." },
          { es: "All'inizio eravamo in dieci, ora siamo in quaranta.", en: "At first there were ten of us, now there are forty." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Text 1: what will each student get?", options: ["a water bottle", "a jug", "a schoolbag", "a free lunch"], correctIndex: 0, explanation: "\"Una borraccia\" = reusable water bottle." },
          { type: "listen-choose", audio: "All'inizio eravamo in dieci, ora siamo in quaranta.", question: "How many people are in the garden group now?", options: ["forty", "ten", "fourteen", "four"], correctIndex: 0, explanation: "\"Siamo in quaranta\" = there are forty of us." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "From Monday our school is going plastic-free.", answer: "Da lunedì la nostra scuola diventa plastic free.", altAnswers: ["Da lunedì la nostra scuola diventa senza plastica.", "Da lunedì la nostra scuola sarà plastic free."], explanation: "Present for a scheduled change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Water will be served in jugs.", answer: "L'acqua sarà servita in caraffe.", altAnswers: ["L'acqua verrà servita in caraffe.", "L'acqua sarà servita nelle caraffe."], explanation: "Future passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Families are asked not to put bottles in schoolbags.", answer: "Si chiede alle famiglie di non mettere bottiglie negli zaini.", altAnswers: ["Si chiede alle famiglie di non mettere bottigliette nello zaino.", "Si chiede alle famiglie di non mettere bottiglie nello zaino."], explanation: "\"Si chiede di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've created a shared vegetable garden.", answer: "Abbiamo creato un orto condiviso.", altAnswers: ["Abbiamo fatto un orto condiviso."], explanation: "\"Orto\" = vegetable garden." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tools are shared.", answer: "Gli attrezzi si dividono.", altAnswers: ["Gli attrezzi sono condivisi.", "Gli attrezzi si condividono."], explanation: "Passive \"si\" with a plural noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At first there were ten of us.", answer: "All'inizio eravamo in dieci.", altAnswers: ["Inizialmente eravamo in dieci.", "All'inizio eravamo dieci."], explanation: "\"Essere in\" + number." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There ought to be one in every neighbourhood.", answer: "Bisognerebbe farne uno in ogni quartiere.", altAnswers: ["Ce ne vorrebbe uno in ogni quartiere.", "Bisognerebbe crearne uno in ogni quartiere."], explanation: "\"Ne\" = of them." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone has their own piece of land.", answer: "Ognuno ha il suo pezzo di terra.", altAnswers: ["Ognuno ha il proprio pezzo di terra.", "Ciascuno ha il suo pezzo di terra."], explanation: "\"Ognuno\" + singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Now [there are forty of us].", sentence: "Ora ___.", answer: "siamo in quaranta", explanation: "\"Essere in\" + number." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Each student will get a [reusable water bottle].", sentence: "Ogni studente riceverà una ___.", answer: "borraccia", explanation: "\"Borraccia\"." },
      { type: "word-order", prompt: "Put the words in order to say: Water will be served in jugs.", words: ["L'acqua", "sarà", "servita", "in", "caraffe."], translation: "Water will be served in jugs.", explanation: "Future passive." },
      { type: "multiple-choice", question: "Text 2: what is shared in the garden?", options: ["water and tools", "the plots of land", "the vegetables", "the seeds only"], correctIndex: 0, explanation: "\"L'acqua e gli attrezzi si dividono\"." },
      { type: "multiple-choice", question: "Text 2: what does the blogger propose?", options: ["a shared garden in every neighbourhood", "closing the garden", "selling the vegetables", "a bigger garden in Turin"], correctIndex: 0, explanation: "\"Bisognerebbe farne uno in ogni quartiere\"." },
      { type: "dictation", audio: "Ognuno ha il suo pezzo di terra, ma gli attrezzi si dividono.", explanation: "\"Si dividono\": passive \"si\"." },
      { type: "speak", text: "Nel mio quartiere abbiamo creato un orto condiviso, e secondo me bisognerebbe farne uno in ogni città.", prompt: "Say it: In my neighbourhood we've created a shared garden, and in my opinion there ought to be one in every city.", tip: "\"Farne\": stress on FAR.", explanation: "Passato prossimo + proposal." },
    ],
  },
];
