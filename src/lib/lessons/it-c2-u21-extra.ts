// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u21-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 21 Extra Practice: Writing Mastery.
// Original texts and tasks; people are invented.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U21_EXTRA: Lesson[] = [
  {
    slug: "c2-writing-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: More Writing Tasks",
    summary: "Fresh exam-style writing tasks: plan an essay on cities and cars, and write the key sentences of a formal complaint.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two new tasks",
        body: [
          "Task A, argumentative text: \"Molte città italiane stanno chiudendo il centro storico alle automobili. Esprimi la tua opinione, considerando i vantaggi per l'ambiente e i problemi per residenti e commercianti.\" Plan a thesis with a condition, two arguments, one objection and a reply.",
          "Task B, formal text: \"Hai acquistato online un elettrodomestico che è arrivato danneggiato. Il servizio clienti non risponde da tre settimane. Scrivi un reclamo all'azienda.\" Include the facts (date, order number), the problem, what you have already done, and a clear request.",
          "Use the sentences in this lesson as building blocks, then write both texts in full in your notebook. Time yourself: plan for a few minutes, write, and keep time at the end to check subjunctives, pronouns and spelling.",
        ],
        examples: [
          { es: "Chiudere il centro alle auto è una scelta giusta, purché si potenzino i mezzi pubblici.", en: "Closing the center to cars is the right choice, provided public transportation is improved." },
          { es: "I commercianti temono di perdere clienti.", en: "Shopkeepers fear losing customers." },
          { es: "In data 3 maggio ho effettuato l'ordine n. 88214.", en: "On May 3 I placed order no. 88214." },
          { es: "Chiedo la sostituzione del prodotto o il rimborso integrale.", en: "I request a replacement of the product or a full refund." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Closing the center to cars is the right choice, provided public transportation is improved.", answer: "Chiudere il centro alle auto è una scelta giusta, purché si potenzino i mezzi pubblici.", altAnswers: ["Chiudere il centro alle auto è una scelta giusta, a patto che si potenzino i mezzi pubblici.", "Chiudere il centro alle macchine è una scelta giusta, purché si potenzino i mezzi pubblici."], explanation: "Thesis with \"purché\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal complaint).", source: "I request a replacement of the product or a full refund.", answer: "Chiedo la sostituzione del prodotto o il rimborso integrale.", altAnswers: ["Richiedo la sostituzione del prodotto o il rimborso integrale.", "Chiedo la sostituzione del prodotto oppure il rimborso integrale."], explanation: "A clear request." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shopkeepers fear losing customers.", answer: "I commercianti temono di perdere clienti.", altAnswers: ["I commercianti hanno paura di perdere clienti.", "I negozianti temono di perdere clienti."], explanation: "\"Temere di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some might object that residents would be penalized.", answer: "Qualcuno potrebbe obiettare che i residenti sarebbero penalizzati.", altAnswers: ["Si potrebbe obiettare che i residenti sarebbero penalizzati.", "Qualcuno potrebbe obiettare che i residenti verrebbero penalizzati."], explanation: "Conditional for a hypothetical consequence." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The air in the center has become cleaner.", answer: "L'aria del centro è diventata più pulita.", altAnswers: ["L'aria in centro è diventata più pulita.", "Nel centro l'aria è diventata più pulita."], explanation: "\"Diventare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It is essential that the council listens to the residents.", answer: "È essenziale che il Comune ascolti i residenti.", altAnswers: ["È fondamentale che il Comune ascolti i residenti.", "È essenziale che l'amministrazione ascolti i residenti."], explanation: "Impersonal expression + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal complaint).", source: "On May 3 I placed order no. 88214.", answer: "In data 3 maggio ho effettuato l'ordine n. 88214.", altAnswers: ["Il 3 maggio ho effettuato l'ordine n. 88214.", "In data 3 maggio ho effettuato l'ordine numero 88214."], explanation: "\"In data\" is formal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal complaint).", source: "The product arrived damaged.", answer: "Il prodotto è arrivato danneggiato.", altAnswers: ["Il prodotto mi è arrivato danneggiato.", "Il prodotto è giunto danneggiato."], explanation: "Predicative participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal complaint).", source: "Despite three reminders, I have received no reply.", answer: "Nonostante tre solleciti, non ho ricevuto alcuna risposta.", altAnswers: ["Malgrado tre solleciti, non ho ricevuto alcuna risposta.", "Nonostante tre solleciti, non ho ricevuto nessuna risposta."], explanation: "\"Sollecito\" = reminder." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal complaint).", source: "Should I receive no reply within ten days, I will contact a consumer association.", answer: "Qualora non ricevessi risposta entro dieci giorni, mi rivolgerò a un'associazione di consumatori.", altAnswers: ["Qualora non ricevessi una risposta entro dieci giorni, mi rivolgerò a un'associazione di consumatori.", "Se non riceverò risposta entro dieci giorni, mi rivolgerò a un'associazione di consumatori."], explanation: "\"Qualora\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I request [a full refund].", sentence: "Chiedo ___.", answer: "il rimborso integrale", altAnswers: ["un rimborso integrale", "il rimborso completo"], explanation: "\"Integrale\" = full." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the light of] these facts, I ask you to intervene.", sentence: "___ questi fatti, Vi chiedo di intervenire.", answer: "Alla luce di", explanation: "A formal connective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Shops [could benefit] from the pedestrian zone.", sentence: "I negozi ___ dell'area pedonale.", answer: "potrebbero beneficiare", altAnswers: ["potrebbero trarre vantaggio"], explanation: "\"Beneficiare di\"." },
      { type: "word-order", prompt: "Put the words in order to say: The product arrived damaged.", words: ["Il", "prodotto", "è", "arrivato", "danneggiato."], translation: "The product arrived damaged.", explanation: "Predicative participle." },
      { type: "word-order", prompt: "Put the words in order to say: Shopkeepers fear losing customers.", words: ["I", "commercianti", "temono", "di", "perdere", "clienti."], translation: "Shopkeepers fear losing customers.", explanation: "\"Temere di\"." },
      { type: "multiple-choice", question: "Which closing fits the formal complaint?", options: ["In attesa di un Vostro riscontro, porgo distinti saluti.", "Un abbraccio forte!", "Ciao e grazie lo stesso.", "Fammi sapere, eh."], correctIndex: 0, explanation: "Formal closing; \"Vostro\" for a company." },
      { type: "listen-choose", audio: "Da quando il centro è chiuso alle auto, l'aria è più pulita, ma alcuni negozi hanno perso clienti.", question: "What does the speaker report?", options: ["Cleaner air, but some shops lost customers.", "More traffic in the center.", "All shops are doing better.", "The center has reopened to cars."], correctIndex: 0, explanation: "A balanced statement." },
      { type: "dictation", audio: "Nonostante tre solleciti, non ho ricevuto alcuna risposta.", explanation: "\"Solleciti\": double \"l\"." },
      { type: "speak", text: "Chiedo la sostituzione del prodotto o il rimborso integrale.", prompt: "Say it firmly but politely: I request a replacement or a full refund.", tip: "Even pace; stress \"integrale\".", explanation: "A clear request." },
    ],
  },
  {
    slug: "c2-writing-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: More Reading Tasks",
    summary: "A fresh exam-style text on silence and noise in Italian cities: find the thesis, read between the lines and rebuild the argument.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh text",
        body: [
          "Read this original essay extract: \"Il silenzio è diventato un lusso. Chi abita in centro paga caro il privilegio di sentire, alle tre di notte, le conversazioni dei tavolini sotto casa; chi vive in periferia lo paga con il traffico dell'alba. Eppure non si tratta di un destino.\"",
          "\"Alcune città hanno introdotto zone di quiete, orari per la musica all'aperto, asfalti che riducono il rumore delle ruote. Sono misure modeste, che non fanno notizia. Ma una città si giudica anche da ciò che non si sente.\"",
          "The thesis is in the last sentence: a city is judged also by what you cannot hear. \"Eppure non si tratta di un destino\" turns the argument from complaint to proposal, and \"misure modeste, che non fanno notizia\" anticipates an objection: these measures seem small, but they matter.",
        ],
        examples: [
          { es: "Il silenzio è diventato un lusso.", en: "Silence has become a luxury." },
          { es: "Eppure non si tratta di un destino.", en: "And yet it is not inevitable." },
          { es: "Sono misure modeste, che non fanno notizia.", en: "They are modest measures that don't make the news." },
          { es: "Una città si giudica anche da ciò che non si sente.", en: "A city is also judged by what you cannot hear." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Silence has become a luxury.", answer: "Il silenzio è diventato un lusso.", altAnswers: ["Il silenzio è ormai un lusso."], explanation: "\"Diventare\" + \"essere\"." },
          { type: "multiple-choice", question: "What is the function of \"Eppure non si tratta di un destino\"?", options: ["It turns the text from complaint to proposal.", "It concludes the text.", "It gives an example.", "It reports an opposing view."], correctIndex: 0, explanation: "\"Eppure\" marks the turn." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Which statement is NOT in the text?", options: ["Noise causes serious illness.", "People in the center hear late-night conversations.", "Some cities have introduced quiet zones.", "Quiet measures don't make the news."], correctIndex: 0, explanation: "Plausible, but never said." },
      { type: "multiple-choice", question: "The tone of the extract is ...", options: ["ironic at first, then constructive", "angry throughout", "nostalgic", "purely technical"], correctIndex: 0, explanation: "\"Paga caro il privilegio\" is ironic; the end proposes." },
      { type: "listen-choose", audio: "Alcune città hanno introdotto zone di quiete e orari per la musica all'aperto.", question: "What have some cities introduced?", options: ["Quiet zones and hours for outdoor music.", "A ban on cars.", "Free concerts.", "Night-time curfews."], correctIndex: 0, explanation: "\"Zone di quiete\" and \"orari\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And yet it is not inevitable.", answer: "Eppure non si tratta di un destino.", altAnswers: ["Eppure non è inevitabile.", "Eppure non è un destino."], explanation: "\"Non si tratta di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They are modest measures that don't make the news.", answer: "Sono misure modeste, che non fanno notizia.", altAnswers: ["Sono misure modeste che non fanno notizia."], explanation: "\"Fare notizia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A city is also judged by what you cannot hear.", answer: "Una città si giudica anche da ciò che non si sente.", altAnswers: ["Una città si giudica anche da quello che non si sente."], explanation: "Impersonal \"si\" twice." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Those who live in the suburbs pay for it with dawn traffic.", answer: "Chi vive in periferia lo paga con il traffico dell'alba.", altAnswers: ["Chi abita in periferia lo paga con il traffico dell'alba.", "Chi vive in periferia lo paga col traffico dell'alba."], explanation: "\"Chi\" = those who." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The author does not say that noise is inevitable.", answer: "L'autore non dice che il rumore sia inevitabile.", altAnswers: ["L'autrice non dice che il rumore sia inevitabile.", "L'autore non sostiene che il rumore sia inevitabile."], explanation: "Negated verb of saying + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The last sentence contains the thesis.", answer: "L'ultima frase contiene la tesi.", altAnswers: ["La tesi è nell'ultima frase."], explanation: "Function vocabulary." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Those who] live in the center pay dearly.", sentence: "___ abita in centro paga caro.", answer: "Chi", explanation: "\"Chi\" takes a singular verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These measures [don't make the news].", sentence: "Queste misure ___.", answer: "non fanno notizia", explanation: "\"Fare notizia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The text [anticipates an objection].", sentence: "Il testo ___.", answer: "anticipa un'obiezione", altAnswers: ["prevede un'obiezione"], explanation: "Function vocabulary." },
      { type: "word-order", prompt: "Put the words in order to say: Silence has become a luxury.", words: ["Il", "silenzio", "è", "diventato", "un", "lusso."], translation: "Silence has become a luxury.", explanation: "The opening line." },
      { type: "word-order", prompt: "Put the words in order to say: A city is judged by what you cannot hear.", words: ["Una", "città", "si", "giudica", "da", "ciò", "che", "non", "si", "sente."], translation: "A city is judged by what you cannot hear.", explanation: "The thesis." },
      { type: "dictation", audio: "Il silenzio è diventato un lusso.", explanation: "Double \"s\" in \"lusso\"." },
      { type: "speak", text: "Una città si giudica anche da ciò che non si sente.", prompt: "Read the thesis aloud: A city is also judged by what you cannot hear.", tip: "Slow down on \"ciò che non si sente\".", explanation: "A memorable final line." },
    ],
  },
];
