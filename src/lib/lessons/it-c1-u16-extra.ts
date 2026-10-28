// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u16-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 16 Extra Practice: Business Italian. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U16_EXTRA: Lesson[] = [
  {
    slug: "c1-business-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Meetings",
    summary: "Read the minutes of an invented board meeting and reproduce the language of agendas, discussions and decisions.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The minutes of a meeting",
        body: [
          "An original text. \"Verbale della riunione del 4 novembre. Presenti: Bianchi, Coletti, Ruggeri, Sanna. Assente giustificato: Mori. Presiede la dottoressa Coletti; funge da segretario il signor Sanna. Si approva il verbale della seduta precedente.\"",
          "\"Punto 1. La dottoressa Coletti illustra il piano di investimenti per il 2027. Segue un'ampia discussione. Il signor Ruggeri esprime perplessità sui tempi. La proposta viene approvata con un voto contrario. Punto 2. Si rinvia alla prossima riunione. Varie ed eventuali: nessuna. La seduta è tolta alle 12.40.\"",
          "Minutes use the impersonal \"si\" (\"si approva\", \"si rinvia\"), the present tense, and fixed formulas: \"assente giustificato\" (excused absence), \"presiede\" (chairs), \"funge da segretario\" (acts as secretary), \"esprime perplessità\" (expresses doubts), \"la seduta è tolta\" (the meeting is closed).",
        ],
        examples: [
          { es: "Presiede la dottoressa Coletti.", en: "Dr. Coletti chairs the meeting." },
          { es: "Funge da segretario il signor Sanna.", en: "Mr. Sanna acts as secretary." },
          { es: "Si approva il verbale della seduta precedente.", en: "The minutes of the previous meeting are approved." },
          { es: "Il signor Ruggeri esprime perplessità sui tempi.", en: "Mr. Ruggeri expresses doubts about the timing." },
          { es: "La proposta viene approvata con un voto contrario.", en: "The proposal is approved with one vote against." },
          { es: "Il secondo punto si rinvia alla prossima riunione.", en: "The second item is postponed to the next meeting." },
          { es: "La seduta è tolta alle 12.40.", en: "The meeting is closed at 12:40." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (minutes style).", source: "The minutes of the previous meeting are approved.", answer: "Si approva il verbale della seduta precedente.", altAnswers: ["Viene approvato il verbale della seduta precedente.", "Il verbale della seduta precedente è approvato.", "Si approva il verbale della riunione precedente."], explanation: "Impersonal \"si\" in minutes." },
          { type: "multiple-choice", question: "What happened to item 2?", options: ["It was postponed to the next meeting.", "It was approved unanimously.", "It was rejected.", "It was discussed at length."], correctIndex: 0, explanation: "\"Si rinvia\" = it is postponed." },
          { type: "listen-choose", audio: "La proposta viene approvata con un voto contrario.", question: "How did the vote go?", options: ["Approved, with one vote against", "Approved unanimously", "Rejected by one vote", "Postponed"], correctIndex: 0, explanation: "\"Un voto contrario\" = one vote against." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (minutes style).", source: "Dr. Coletti chairs the meeting.", answer: "Presiede la dottoressa Coletti.", altAnswers: ["La dottoressa Coletti presiede la riunione.", "Presiede la riunione la dottoressa Coletti."], explanation: "Verb first is typical of minutes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (minutes style).", source: "Mr. Sanna acts as secretary.", answer: "Funge da segretario il signor Sanna.", altAnswers: ["Il signor Sanna funge da segretario.", "Il signor Sanna fa da segretario."], explanation: "\"Fungere da\" = to act as." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (minutes style).", source: "Mr. Ruggeri expresses doubts about the timing.", answer: "Il signor Ruggeri esprime perplessità sui tempi.", altAnswers: ["Il signor Ruggeri esprime dubbi sui tempi.", "Il signor Ruggeri manifesta perplessità sui tempi."], explanation: "\"Perplessità\" is invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (minutes style).", source: "The proposal is approved with one vote against.", answer: "La proposta viene approvata con un voto contrario.", altAnswers: ["La proposta è approvata con un voto contrario.", "Si approva la proposta con un voto contrario."], explanation: "\"Venire\" + participle = dynamic passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (minutes style).", source: "The meeting is closed at 12:40.", answer: "La seduta è tolta alle 12.40.", altAnswers: ["La seduta è tolta alle 12:40.", "La riunione si chiude alle 12.40.", "La seduta si chiude alle 12.40."], explanation: "\"Togliere la seduta\" = to close a formal meeting." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (minutes style).", source: "A long discussion follows.", answer: "Segue un'ampia discussione.", altAnswers: ["Segue una lunga discussione.", "Ne segue un'ampia discussione."], explanation: "Verb before subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dr. Coletti presents the investment plan.", answer: "La dottoressa Coletti illustra il piano di investimenti.", altAnswers: ["La dottoressa Coletti presenta il piano di investimenti.", "La dottoressa Coletti illustra il piano degli investimenti."], explanation: "\"Illustrare\" = to present, explain." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's taking the minutes today?", answer: "Chi redige il verbale oggi?", altAnswers: ["Chi fa il verbale oggi?", "Chi scrive il verbale oggi?", "Oggi chi redige il verbale?"], explanation: "\"Redigere\" = to draw up." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Mori: [excused absence].", sentence: "Mori: ___.", answer: "assente giustificato", explanation: "Formula in attendance lists." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The second item [is postponed] to the next meeting.", sentence: "Il secondo punto ___ alla prossima riunione.", answer: "si rinvia", altAnswers: ["viene rinviato", "è rinviato"], explanation: "\"Rinviare\" = to postpone." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Any other business]: none.", sentence: "___: nessuna.", answer: "Varie ed eventuali", explanation: "The last agenda item." },
      { type: "word-order", prompt: "Put the words in order to say: Let's approve the minutes of the previous meeting.", words: ["Approviamo", "il", "verbale", "della", "seduta", "precedente."], translation: "Let's approve the minutes of the previous meeting.", explanation: "Spoken version of the minutes formula." },
      { type: "multiple-choice", question: "In minutes, \"esprime perplessità\" means ...", options: ["expresses doubts", "expresses approval", "asks for the floor", "leaves the meeting"], correctIndex: 0, explanation: "\"Perplessità\" = doubts, reservations." },
      { type: "dictation", audio: "Si approva il verbale della seduta precedente.", explanation: "Impersonal \"si\"." },
      { type: "speak", text: "Presiede la dottoressa Coletti; funge da segretario il signor Sanna. Si approva il verbale della seduta precedente.", prompt: "Read the opening of the minutes aloud: Dr. Coletti chairs; Mr. Sanna acts as secretary. The minutes of the previous meeting are approved.", tip: "Formal, even pace, as if read into the record.", explanation: "Minutes formulas." },
    ],
  },
  {
    slug: "c1-business-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Negotiation",
    summary: "Two fresh negotiations, a rent renewal and a freelance fee, with conditionals, subjunctive conditions and closing moves.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two negotiations",
        body: [
          "Original dialogues. 1. A shop owner renews her lease. Landlord: \"Alla scadenza del contratto l'affitto passerà a 1.800 euro.\" Tenant: \"Mi sembra eccessivo. Sarei disposta a firmare per altri sei anni, purché l'aumento resti sotto il 5%.\" Landlord: \"Se si occupasse Lei dei lavori alla vetrina, potrei accettare.\" Tenant: \"Allora siamo d'accordo.\"",
          "2. A freelance translator and an agency. Agency: \"Possiamo offrirLe 8 centesimi a parola.\" Translator: \"Per testi tecnici la mia tariffa è di 12. Potrei scendere a 10, a condizione che i tempi di consegna siano di almeno una settimana.\" Agency: \"Ci va bene. Le mandiamo il primo incarico lunedì.\"",
          "Notice the patterns: \"sarei disposta a... purché\" + present subjunctive; \"se si occupasse Lei... potrei\" (imperfect subjunctive + conditional); \"potrei scendere a... a condizione che\" + subjunctive; \"ci va bene\" (that works for us).",
        ],
        examples: [
          { es: "L'affitto passerà a 1.800 euro.", en: "The rent will go up to 1,800 euros." },
          { es: "Mi sembra eccessivo.", en: "That seems excessive to me." },
          { es: "Sarei disposta a firmare per altri sei anni.", en: "I'd be willing to sign for another six years." },
          { es: "Purché l'aumento resti sotto il 5%.", en: "As long as the increase stays below 5%." },
          { es: "Se si occupasse Lei dei lavori, potrei accettare.", en: "If you took care of the work, I could accept." },
          { es: "Potrei scendere a 10 centesimi a parola.", en: "I could go down to 10 cents a word." },
          { es: "Ci va bene.", en: "That works for us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (a woman speaking).", source: "I'd be willing to sign for another six years, as long as the increase stays below 5%.", answer: "Sarei disposta a firmare per altri sei anni, purché l'aumento resti sotto il 5%.", altAnswers: ["Sarei disposta a firmare per altri sei anni, a patto che l'aumento resti sotto il 5%.", "Sarei disposta a firmare per altri sei anni, purché l'aumento rimanga sotto il 5%.", "Sarei disposta a firmare per altri sei anni, a condizione che l'aumento resti sotto il 5%."], explanation: "\"Purché\" + subjunctive." },
          { type: "multiple-choice", question: "What does the translator ask for in exchange for a lower rate?", options: ["At least a week to deliver", "Payment in advance", "Only literary texts", "A permanent contract"], correctIndex: 0, explanation: "\"A condizione che i tempi di consegna siano di almeno una settimana\"." },
          { type: "listen-choose", audio: "Se si occupasse Lei dei lavori alla vetrina, potrei accettare.", question: "What is the landlord's condition?", options: ["The tenant pays for the shop-window work.", "The tenant leaves in six years.", "The rent is paid in advance.", "The shop changes its sign."], correctIndex: 0, explanation: "\"Occuparsi di\" = to take care of." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That seems excessive to me.", answer: "Mi sembra eccessivo.", altAnswers: ["Mi pare eccessivo.", "Mi sembra troppo."], explanation: "Polite objection." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (Lei).", source: "If you took care of the work, I could accept.", answer: "Se si occupasse Lei dei lavori, potrei accettare.", altAnswers: ["Se Lei si occupasse dei lavori, potrei accettare.", "Se si occupasse lei dei lavori, potrei accettare."], explanation: "Imperfect subjunctive + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can offer you 8 cents a word.", answer: "Possiamo offrirLe 8 centesimi a parola.", altAnswers: ["Possiamo offrirle 8 centesimi a parola.", "Le possiamo offrire 8 centesimi a parola.", "Possiamo offrirLe otto centesimi a parola."], explanation: "\"A parola\" = per word." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For technical texts my rate is 12 cents.", answer: "Per testi tecnici la mia tariffa è di 12 centesimi.", altAnswers: ["Per i testi tecnici la mia tariffa è di 12 centesimi.", "Per testi tecnici la mia tariffa è 12 centesimi."], explanation: "\"Tariffa\" = rate, fee." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I could go down to 10, provided the deadline is at least a week.", answer: "Potrei scendere a 10, a condizione che i tempi di consegna siano di almeno una settimana.", altAnswers: ["Potrei scendere a 10, purché i tempi di consegna siano di almeno una settimana.", "Potrei scendere a 10, a patto che i tempi di consegna siano di almeno una settimana."], explanation: "Concession + subjunctive condition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That works for us.", answer: "Ci va bene.", altAnswers: ["Per noi va bene.", "Ci sta bene."], explanation: "\"Andare bene a qualcuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When the contract expires, the rent will go up to 1,800 euros.", answer: "Alla scadenza del contratto l'affitto passerà a 1.800 euro.", altAnswers: ["Alla scadenza del contratto l'affitto salirà a 1.800 euro.", "Alla scadenza del contratto, l'affitto passerà a 1.800 euro."], explanation: "\"Alla scadenza\" = on expiry." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Then we're agreed.", answer: "Allora siamo d'accordo.", altAnswers: ["Allora siamo d'accordo!", "Allora d'accordo.", "Siamo d'accordo, allora."], explanation: "Closing move." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd be willing to sign, [as long as] the increase stays below 5%.", sentence: "Sarei disposta a firmare, ___ l'aumento resti sotto il 5%.", answer: "purché", altAnswers: ["a patto che", "a condizione che"], explanation: "All take the subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We'll send you [the first assignment] on Monday.", sentence: "Le mandiamo ___ lunedì.", answer: "il primo incarico", altAnswers: ["il primo lavoro"], explanation: "\"Incarico\" = assignment, commission." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd be willing to] sign for another six years. (a woman speaking)", sentence: "___ firmare per altri sei anni.", answer: "Sarei disposta a", altAnswers: ["Sarei pronta a"], explanation: "Feminine agreement." },
      { type: "word-order", prompt: "Put the words in order to say: We could meet you halfway on the rent.", words: ["Potremmo", "venirLe", "incontro", "sull'affitto."], translation: "We could meet you halfway on the rent.", explanation: "\"Venire incontro a\"." },
      { type: "multiple-choice", question: "Which sentence makes a hypothetical offer?", options: ["Se firmasse per sei anni, potrei ridurre l'aumento.", "Firma per sei anni.", "Ha firmato per sei anni.", "Firmerà per sei anni."], correctIndex: 0, explanation: "\"Se\" + imperfect subjunctive + conditional." },
      { type: "dictation", audio: "Potrei scendere a dieci centesimi a parola.", explanation: "\"Scendere a\" for prices." },
      { type: "speak", text: "Mi sembra eccessivo. Sarei disposta a firmare per altri sei anni, purché l'aumento resti sotto il cinque per cento.", prompt: "Negotiate the lease: That seems excessive. I'd be willing to sign for another six years, as long as the increase stays below 5%.", tip: "Calm tone: objection first, then offer.", explanation: "Objection + conditional offer." },
    ],
  },
];
