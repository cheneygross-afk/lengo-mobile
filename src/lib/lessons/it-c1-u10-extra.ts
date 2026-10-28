// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u10-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 10 Extra Practice: Register Shifting. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U10_EXTRA: Lesson[] = [
  {
    slug: "c1-register-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Formal Rewrites",
    summary: "Fresh informal messages to rewrite for a manager, a client or an institution.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "From chat to email",
        body: [
          "Each item quotes an informal message and gives its meaning in English; write the formal version with \"Lei\" (or \"voi\" for a company), formal vocabulary and a polite structure: conditional, \"Le sarei grato/a se\", \"Mi permetto di\", \"La prego di\".",
        ],
        examples: [
          { es: "Mi mandi il contratto? → Potrebbe inviarmi il contratto?", en: "Could you send me the contract?" },
          { es: "Non posso venire. → Purtroppo non mi sarà possibile partecipare.", en: "Unfortunately I will not be able to attend." },
          { es: "Ti ricordo la scadenza. → Mi permetto di ricordarLe la scadenza.", en: "May I remind you of the deadline." },
          { es: "Grazie, sei gentilissimo! → La ringrazio molto per la cortesia.", en: "Thank you very much for your kindness." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei): Non posso venire.", source: "Unfortunately I will not be able to attend.", answer: "Purtroppo non mi sarà possibile partecipare.", altAnswers: ["Purtroppo non potrò partecipare.", "Purtroppo non potrò essere presente."], explanation: "Regret + impersonal future." },
          { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei): Ti ricordo la scadenza.", source: "May I remind you of the deadline.", answer: "Mi permetto di ricordarLe la scadenza.", altAnswers: ["Mi permetto di ricordarle la scadenza.", "Le ricordo la scadenza."], explanation: "\"Mi permetto di\" softens a reminder." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei): Mi mandi il contratto?", source: "Could you send me the contract?", answer: "Potrebbe inviarmi il contratto?", altAnswers: ["Mi potrebbe inviare il contratto?", "Potrebbe trasmettermi il contratto?"], explanation: "\"Inviare\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei): Grazie, sei gentilissimo!", source: "Thank you very much for your kindness.", answer: "La ringrazio molto per la cortesia.", altAnswers: ["La ringrazio molto per la Sua cortesia.", "La ringrazio molto per la gentilezza."], explanation: "Formal thanks." },
      { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei, a woman writing): Mi dici quanto costa?", source: "I would be grateful if you could tell me the price.", answer: "Le sarei grata se potesse indicarmi il prezzo.", altAnswers: ["Le sarei grata se potesse comunicarmi il prezzo.", "Le sarei grata se mi potesse indicare il prezzo."], explanation: "Conditional + \"se\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Rewrite formally (voi, to a company): Il pacco non è arrivato!", source: "We inform you that the package has not yet been delivered.", answer: "Vi informiamo che il pacco non è ancora stato consegnato.", altAnswers: ["Vi comunichiamo che il pacco non è ancora stato consegnato.", "Vi segnaliamo che il pacco non è ancora stato consegnato."], explanation: "Passive + \"Vi informiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei): Scusa se ti disturbo.", source: "I apologize for disturbing you.", answer: "Mi scusi se La disturbo.", altAnswers: ["Mi scusi per il disturbo.", "Le chiedo scusa per il disturbo."], explanation: "\"La disturbo\": Lei object." },
      { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei): Ci vediamo lunedì?", source: "Would it be possible to meet on Monday?", answer: "Sarebbe possibile incontrarci lunedì?", altAnswers: ["Sarebbe possibile vederci lunedì?", "Potremmo incontrarci lunedì?"], explanation: "Impersonal conditional." },
      { type: "translate", direction: "en-es", prompt: "Rewrite formally (Lei): Fammi sapere!", source: "I look forward to your reply.", answer: "Resto in attesa di una Sua risposta.", altAnswers: ["Resto in attesa di un Suo riscontro.", "Attendo una Sua risposta."], explanation: "Formal closing line." },
      { type: "translate", direction: "en-es", prompt: "Rewrite very formally: Vi chiedo i soldi indietro.", source: "I request a refund of the amount paid.", answer: "Chiedo il rimborso dell'importo versato.", altAnswers: ["Richiedo il rimborso dell'importo versato.", "Chiedo cortesemente il rimborso dell'importo versato."], explanation: "Nominal style: \"il rimborso\", \"l'importo\"." },
      { type: "fill-blank", prompt: "Write the formal equivalent of the bold word.", en: "We need [loads of] copies. (formal)", sentence: "Ci servono ___ copie.", answer: "numerose", altAnswers: ["molte", "diverse"], explanation: "No \"un sacco di\" in formal writing." },
      { type: "fill-blank", prompt: "Write the formal equivalent of the bold word.", en: "Please [tell] us your availability. (formal)", sentence: "Vi preghiamo di ___ la Vostra disponibilità.", answer: "comunicarci", explanation: "\"Dire\" → \"comunicare\"." },
      { type: "fill-blank", prompt: "Write the formal opening for the bold words.", en: "[Dear] Director, (to a man)", sentence: "___ Direttore,", answer: "Egregio", altAnswers: ["Gentile"], explanation: "\"Egregio\" or \"Gentile\" + title." },
      { type: "fill-blank", prompt: "Write the formal closing for the bold words.", en: "[Sincerely],", sentence: "___,", answer: "Distinti saluti", altAnswers: ["Cordiali saluti"], explanation: "Formal closing." },
      { type: "multiple-choice", question: "Which is the best formal version of \"Ehi, la fattura è sbagliata!\"?", options: ["Mi permetto di segnalarLe un errore nella fattura.", "La fattura, sbagliata.", "Ehi, la fattura è errata!", "Si segnala che ti sei sbagliato."], correctIndex: 0, explanation: "Softened, Lei, formal verb." },
      { type: "listen-choose", audio: "Mi permetto di ricordarLe che il pagamento è previsto entro venerdì.", question: "What is the speaker doing?", options: ["Politely reminding someone of a payment deadline", "Asking for a loan", "Refusing to pay", "Thanking for a payment"], correctIndex: 0, explanation: "\"Mi permetto di ricordarLe\"." },
      { type: "dictation", audio: "Purtroppo non mi sarà possibile partecipare alla riunione.", explanation: "Formal refusal." },
      { type: "speak", text: "Buongiorno, mi permetto di ricordarLe la scadenza di venerdì. La ringrazio per la cortesia.", prompt: "Leave a formal voicemail: Good morning, may I remind you of Friday's deadline. Thank you for your kindness.", tip: "Calm and courteous; no fillers.", explanation: "Formal reminder." },
    ],
  },
  {
    slug: "c1-register-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Informal Rewrites",
    summary: "Fresh formal texts to rewrite as relaxed messages to friends and family.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "From letter to chat",
        body: [
          "Each item quotes a formal sentence and gives the informal meaning in English; write what you would say to a friend: \"tu\", everyday verbs, short sentences and fillers like \"dai\", \"guarda\", \"tipo\" and \"un sacco\" where natural.",
        ],
        examples: [
          { es: "La riunione è stata rinviata a data da destinarsi. → La riunione è saltata, non si sa quando la fanno.", en: "The meeting's off; nobody knows when they'll hold it." },
          { es: "Si prega di confermare la propria presenza. → Mi dici se vieni?", en: "Can you tell me if you're coming?" },
          { es: "La ringrazio per la cortese ospitalità. → Grazie mille, sei stato un tesoro!", en: "Thanks so much, you've been a sweetheart!" },
          { es: "Necessito di assistenza. → Mi dai una mano?", en: "Can you give me a hand?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): Si prega di confermare la propria presenza.", source: "Can you tell me if you're coming?", answer: "Mi dici se vieni?", altAnswers: ["Mi fai sapere se vieni?", "Mi dici se ci sei?"], explanation: "Short informal question." },
          { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): Necessito di assistenza.", source: "Can you give me a hand?", answer: "Mi dai una mano?", altAnswers: ["Mi daresti una mano?", "Mi aiuti?"], explanation: "\"Dare una mano\" = to help." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): La ringrazio per la cortese ospitalità.", source: "Thanks so much, you've been a sweetheart!", answer: "Grazie mille, sei stato un tesoro!", altAnswers: ["Grazie mille, sei stata un tesoro!", "Grazie di tutto, sei stato un tesoro!"], explanation: "\"Un tesoro\" = a sweetheart." },
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): La riunione è stata rinviata a data da destinarsi.", source: "The meeting's off; nobody knows when they'll hold it.", answer: "La riunione è saltata, non si sa quando la fanno.", altAnswers: ["La riunione è saltata, non si sa quando la faranno.", "Hanno annullato la riunione, non si sa quando la fanno."], explanation: "\"Saltare\" = to be called off." },
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): Le comunico che non mi sarà possibile partecipare.", source: "I can't make it, sorry!", answer: "Non ce la faccio, scusa!", altAnswers: ["Non riesco a venire, scusa!", "Non posso venire, scusa!"], explanation: "\"Farcela\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): Resto in attesa di un Suo cortese riscontro.", source: "Let me know!", answer: "Fammi sapere!", explanation: "Short closing." },
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): Si informa che il locale resterà chiuso per ferie.", source: "Heads up: the bar's closed for vacation.", answer: "Guarda che il bar è chiuso per ferie.", altAnswers: ["Occhio, il bar è chiuso per ferie.", "Ti avviso, il bar è chiuso per ferie."], explanation: "\"Guarda che\" = heads up." },
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): È richiesta la massima puntualità.", source: "Be on time, OK?", answer: "Sii puntuale, eh!", altAnswers: ["Sii puntuale, mi raccomando!", "Arriva puntuale, eh!"], explanation: "\"Sii\" = tu imperative of \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): Numerosi partecipanti hanno manifestato interesse.", source: "Loads of people are interested.", answer: "Un sacco di gente è interessata.", altAnswers: ["Un sacco di persone sono interessate.", "C'è un sacco di gente interessata."], explanation: "\"Un sacco di\" + \"la gente\" (singular)." },
      { type: "translate", direction: "en-es", prompt: "Rewrite informally (tu): Distinti saluti.", source: "Hugs!", answer: "Un abbraccio!", altAnswers: ["Abbracci!", "Baci!"], explanation: "Informal closing." },
      { type: "fill-blank", prompt: "Write the informal equivalent of the bold word.", en: "I'll [send] you the photos. (informal)", sentence: "Ti ___ le foto.", answer: "mando", explanation: "\"Inviare\" → \"mandare\"." },
      { type: "fill-blank", prompt: "Write the informal equivalent of the bold words.", en: "I'm [wiped out]. (informal)", sentence: "Sono ___.", answer: "a pezzi", altAnswers: ["distrutto", "distrutta", "stanco morto", "stanca morta"], explanation: "Informal exaggeration." },
      { type: "fill-blank", prompt: "Write the informal equivalent of the bold words.", en: "[Shall we meet up] later? (informal)", sentence: "___ dopo?", answer: "Ci vediamo", altAnswers: ["Ci becchiamo"], explanation: "Informal arrangement." },
      { type: "fill-blank", prompt: "Write the informal equivalent of the bold word.", en: "[Come on], let's go!", sentence: "___, andiamo!", answer: "Dai", explanation: "\"Dai\" = come on." },
      { type: "multiple-choice", question: "Which is the best informal version of \"La invitiamo a partecipare alla cena\"?", options: ["Vieni a cena con noi?", "La invitiamo a cena.", "Si invita a cena.", "Gentilmente, partecipi alla cena."], correctIndex: 0, explanation: "Direct, \"tu\", a question." },
      { type: "listen-choose", audio: "Guarda che la riunione è saltata, non si sa quando la fanno. Ci becchiamo per un caffè?", question: "What does the speaker suggest?", options: ["Meeting for a coffee instead", "Going to the meeting", "Rescheduling the meeting", "Calling the boss"], correctIndex: 0, explanation: "\"Ci becchiamo per un caffè?\"" },
      { type: "dictation", audio: "Grazie mille, sei stato un tesoro!", explanation: "Informal thanks." },
      { type: "speak", text: "Guarda che la riunione è saltata. Dai, ci vediamo per un caffè? Fammi sapere!", prompt: "Send a friend a voice message: Heads up, the meeting's off. Come on, shall we meet for a coffee? Let me know!", tip: "Relaxed and quick.", explanation: "Informal register aloud." },
    ],
  },
];
