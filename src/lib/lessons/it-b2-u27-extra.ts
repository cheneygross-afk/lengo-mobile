// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u27-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 27 Extra Practice: Synonyms and
// Precision. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U27_EXTRA: Lesson[] = [
  {
    slug: "b2-synonyms-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Verbs",
    summary: "Fresh sentences with precise verbs: dichiarare, riferire, svolgere, effettuare, inserire, possedere and more.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Precise verbs in context",
        body: [
          "New collocations: \"esprimere un'opinione\" (instead of \"dire\"), \"prendere\" or \"assumere una decisione\" (formal), \"stipulare un contratto\" (to draw up and sign), \"sostenere un esame\" (to take an exam), \"rivolgere una domanda a\" (to address a question to), \"intraprendere un viaggio\" (to undertake).",
        ],
        examples: [
          { es: "Ognuno ha espresso la propria opinione.", en: "Everyone expressed their own opinion." },
          { es: "Domani sostengo l'esame di diritto.", en: "Tomorrow I'm taking the law exam." },
          { es: "Abbiamo stipulato il contratto davanti al notaio.", en: "We signed the contract before the notary." },
          { es: "Hanno intrapreso un lungo viaggio in Asia.", en: "They undertook a long journey in Asia." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow I'm taking the law exam.", answer: "Domani sostengo l'esame di diritto.", altAnswers: ["Domani do l'esame di diritto.", "Domani ho l'esame di diritto."], explanation: "\"Sostenere un esame\" = to take an exam." },
          { type: "listen-choose", audio: "Ognuno ha espresso la propria opinione.", question: "What did everyone do?", options: ["expressed their opinion", "voted", "left early", "signed a contract"], correctIndex: 0, explanation: "\"Esprimere un'opinione\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone expressed their own opinion.", answer: "Ognuno ha espresso la propria opinione.", altAnswers: ["Ognuno ha espresso la sua opinione.", "Ciascuno ha espresso la propria opinione."], explanation: "\"Esprimere\" instead of \"dire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We signed the contract before the notary.", answer: "Abbiamo stipulato il contratto davanti al notaio.", altAnswers: ["Abbiamo firmato il contratto davanti al notaio."], explanation: "\"Stipulare un contratto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They undertook a long journey.", answer: "Hanno intrapreso un lungo viaggio.", explanation: "\"Intraprendere\" = to undertake." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "The board made an important decision.", answer: "Il consiglio ha preso una decisione importante.", altAnswers: ["Il consiglio ha assunto una decisione importante.", "Il consiglio di amministrazione ha preso una decisione importante."], explanation: "\"Prendere / assumere una decisione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The journalists addressed a question to the minister.", answer: "I giornalisti hanno rivolto una domanda al ministro.", altAnswers: ["I giornalisti hanno posto una domanda al ministro."], explanation: "\"Rivolgere una domanda a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without fare.", source: "The check was carried out yesterday.", answer: "Il controllo è stato effettuato ieri.", altAnswers: ["Il controllo è stato eseguito ieri.", "Ieri è stato effettuato il controllo."], explanation: "\"Effettuare un controllo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without dire.", source: "The suspect declared he was innocent.", answer: "Il sospettato si è dichiarato innocente.", altAnswers: ["Il sospettato ha dichiarato di essere innocente.", "L'indagato si è dichiarato innocente."], explanation: "\"Dichiararsi innocente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without avere.", source: "She possesses great patience.", answer: "Possiede una grande pazienza.", altAnswers: ["Possiede grande pazienza.", "È dotata di grande pazienza."], explanation: "\"Possedere\" for qualities." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [took] three exams in June.", sentence: "Ho ___ tre esami a giugno.", answer: "sostenuto", altAnswers: ["dato"], explanation: "\"Sostenere un esame\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without mettere.", en: "[Insert] a coin.", sentence: "___ una moneta.", answer: "Inserire", altAnswers: ["Inserisci", "Inserisca"], explanation: "\"Inserire\" = to insert." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, without dire.", en: "I'll [pass on] the message.", sentence: "___ il messaggio.", answer: "Riferirò", explanation: "\"Riferire\" = to pass on." },
      { type: "word-order", prompt: "Put the words in order to say: They undertook a long journey in Asia.", words: ["Hanno", "intrapreso", "un lungo", "viaggio", "in Asia."], translation: "They undertook a long journey in Asia.", explanation: "\"Intraprendere\"." },
      { type: "multiple-choice", question: "Which verb goes with \"un esame\" meaning to take it?", options: ["sostenere", "svolgere", "effettuare", "porre"], correctIndex: 0, explanation: "\"Sostenere un esame\"; \"dare un esame\" in speech." },
      { type: "dictation", audio: "Abbiamo stipulato il contratto davanti al notaio.", explanation: "\"Stipulare\" a contract." },
      { type: "speak", text: "Domani sostengo l'esame e poi intraprendo un lungo viaggio.", prompt: "Share your plans: Tomorrow I'm taking the exam and then I'm setting off on a long journey.", tip: "in-TRA-pren-do: stress on tra.", explanation: "Two precise verbs." },
    ],
  },
  {
    slug: "b2-synonyms-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Adjectives",
    summary: "Fresh sentences with precise adjectives for places, food, books, people and experiences.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The right adjective",
        body: [
          "People: \"simpatico\" (likeable), \"cordiale\" (warm, friendly), \"disponibile\" (helpful, willing), \"scortese\" (rude), \"antipatico\" (unpleasant). Experiences: \"indimenticabile\" (unforgettable), \"faticoso\" (tiring), \"noioso\" (boring), \"rilassante\". Places: \"pittoresco\" (picturesque), \"caotico\", \"desolato\" (bleak, deserted).",
        ],
        examples: [
          { es: "Il personale è stato cordiale e disponibile.", en: "The staff were warm and helpful." },
          { es: "È stato un viaggio indimenticabile.", en: "It was an unforgettable trip." },
          { es: "Il centro è pittoresco ma un po' caotico.", en: "The center is picturesque but a bit chaotic." },
          { es: "Il cameriere era piuttosto scortese.", en: "The waiter was rather rude." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The staff were warm and helpful.", answer: "Il personale è stato cordiale e disponibile.", altAnswers: ["Il personale era cordiale e disponibile."], explanation: "\"Il personale\" is singular." },
          { type: "listen-choose", audio: "Il centro è pittoresco ma un po' caotico.", question: "What is the center like?", options: ["picturesque but chaotic", "modern and quiet", "dirty and empty", "expensive but charming"], correctIndex: 0, explanation: "\"Pittoresco\", \"caotico\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was an unforgettable trip.", answer: "È stato un viaggio indimenticabile.", explanation: "\"Indimenticabile\" = unforgettable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The waiter was rather rude.", answer: "Il cameriere era piuttosto scortese.", altAnswers: ["Il cameriere è stato piuttosto scortese."], explanation: "\"Scortese\" instead of \"brutto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The village is picturesque.", answer: "Il paese è pittoresco.", altAnswers: ["Il borgo è pittoresco.", "Il villaggio è pittoresco."], explanation: "\"Pittoresco\" = picturesque." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The walk was tiring but worth it.", answer: "La passeggiata è stata faticosa ma ne valeva la pena.", altAnswers: ["La camminata è stata faticosa ma ne valeva la pena.", "La passeggiata era faticosa ma ne valeva la pena."], explanation: "\"Ne valeva la pena\" = it was worth it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The beach was deserted in winter.", answer: "La spiaggia era deserta d'inverno.", altAnswers: ["La spiaggia era desolata d'inverno.", "D'inverno la spiaggia era deserta.", "La spiaggia era deserta in inverno."], explanation: "\"Deserto\" = empty; \"desolato\" adds bleakness." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The spa was very relaxing.", answer: "La spa è stata molto rilassante.", altAnswers: ["Il centro benessere è stato molto rilassante.", "La spa era molto rilassante.", "Il centro benessere era molto rilassante."], explanation: "\"Rilassante\" = relaxing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The traffic in Naples is chaotic.", answer: "Il traffico a Napoli è caotico.", altAnswers: ["A Napoli il traffico è caotico."], explanation: "\"Caotico\" = chaotic." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The meeting was long and boring.", answer: "La riunione è stata lunga e noiosa.", altAnswers: ["La riunione era lunga e noiosa."], explanation: "\"Noioso\" = boring." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The receptionist was very [helpful].", sentence: "La receptionist è stata molto ___.", answer: "disponibile", explanation: "\"Disponibile\" = helpful, willing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a [gripping] book.", sentence: "È un libro ___.", answer: "avvincente", altAnswers: ["coinvolgente"], explanation: "Instead of \"interessante\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "What a [splendid] evening!", sentence: "Che serata ___!", answer: "splendida", altAnswers: ["magnifica"], explanation: "Feminine agreement." },
      { type: "word-order", prompt: "Put the words in order to say: The center is picturesque but a bit chaotic.", words: ["Il centro", "è pittoresco", "ma", "un po'", "caotico."], translation: "The center is picturesque but a bit chaotic.", explanation: "Two precise adjectives." },
      { type: "matching", instructions: "Match the adjective to its opposite.", pairs: [{ left: "cordiale", right: "scortese" }, { left: "rilassante", right: "faticoso" }, { left: "avvincente", right: "noioso" }, { left: "tranquillo", right: "caotico" }], explanation: "Precise opposites." },
      { type: "dictation", audio: "Il personale è stato cordiale e disponibile per tutto il soggiorno.", explanation: "Two adjectives for people." },
      { type: "speak", text: "È stato un viaggio indimenticabile: il paese è pittoresco e la gente cordiale.", prompt: "Sum up the trip: It was an unforgettable trip: the town is picturesque and the people warm.", tip: "in-di-men-ti-CA-bi-le: stress on ca.", explanation: "Three precise adjectives." },
    ],
  },
  {
    slug: "b2-synonyms-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Register",
    summary: "Fresh sentences moving between everyday and formal synonyms in emails, notices and messages.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Same meaning, two registers",
        body: [
          "More pairs: \"ricevere\" → \"pervenire\" (to reach, arrive: \"la Sua richiesta ci è pervenuta\"), \"dare\" → \"consegnare\" (hand in, deliver), \"togliere\" → \"rimuovere\", \"vedere\" → \"prendere visione di\" (to examine a document), \"rispondere\" → \"dare riscontro\" (to reply, in business emails), \"aspettare\" → \"attendere\".",
        ],
        examples: [
          { es: "La Sua richiesta ci è pervenuta ieri.", en: "We received your request yesterday." },
          { es: "Restiamo in attesa di un Suo riscontro.", en: "We look forward to your reply." },
          { es: "La preghiamo di prendere visione del documento allegato.", en: "Please examine the attached document." },
          { es: "Si prega di attendere il proprio turno.", en: "Please wait for your turn." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in a formal email.", source: "We look forward to your reply.", answer: "Restiamo in attesa di un Suo riscontro.", altAnswers: ["Restiamo in attesa di un suo riscontro.", "In attesa di un Suo cortese riscontro."], explanation: "\"Riscontro\" = reply (business)." },
          { type: "listen-choose", audio: "Si prega di attendere il proprio turno.", question: "Where might you hear this?", options: ["at a counter or office", "at a party", "in a text from a friend", "in a song"], correctIndex: 0, explanation: "Formal notice: \"attendere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "We received your request yesterday.", answer: "La Sua richiesta ci è pervenuta ieri.", altAnswers: ["La sua richiesta ci è pervenuta ieri.", "Abbiamo ricevuto ieri la Sua richiesta."], explanation: "\"Pervenire\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a notice.", source: "Please wait for your turn.", answer: "Si prega di attendere il proprio turno.", altAnswers: ["Si prega di attendere il turno."], explanation: "\"Attendere\" = formal wait." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "Wait for me outside.", answer: "Aspettami fuori.", explanation: "Everyday \"aspettare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "Please examine the attached document.", answer: "La preghiamo di prendere visione del documento allegato.", altAnswers: ["La preghiamo di prendere visione del documento in allegato.", "Si prega di prendere visione del documento allegato."], explanation: "\"Prendere visione di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "The application must be handed in by Monday.", answer: "La domanda va consegnata entro lunedì.", altAnswers: ["La domanda deve essere consegnata entro lunedì."], explanation: "\"Consegnare\" = to hand in." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a notice.", source: "Vehicles parked here will be removed.", answer: "I veicoli parcheggiati qui saranno rimossi.", altAnswers: ["I veicoli in sosta saranno rimossi.", "I veicoli parcheggiati verranno rimossi."], explanation: "\"Rimuovere\" = formal \"togliere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "Take your shoes off.", answer: "Togliti le scarpe.", explanation: "Everyday \"togliersi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "Payment has not yet reached us.", answer: "Il pagamento non ci è ancora pervenuto.", altAnswers: ["Il pagamento non è ancora pervenuto."], explanation: "\"Pervenire\" = to reach." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, formally.", en: "Please [wait] in the waiting room.", sentence: "Si prega di ___ in sala d'attesa.", answer: "attendere", explanation: "\"Attendere\" in notices." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, formally.", en: "We look forward to [your reply].", sentence: "Restiamo in attesa di ___.", answer: "un Suo riscontro", altAnswers: ["un suo riscontro", "una Sua risposta", "una sua risposta"], explanation: "\"Riscontro\" in business emails." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, to a friend.", en: "I [got] your message.", sentence: "Ho ___ il tuo messaggio.", answer: "ricevuto", explanation: "Everyday \"ricevere\"." },
      { type: "word-order", prompt: "Put the words in order to say: We received your request yesterday.", words: ["La Sua", "richiesta", "ci è", "pervenuta", "ieri."], translation: "We received your request yesterday.", explanation: "\"Pervenire\" with \"essere\" and agreement." },
      { type: "multiple-choice", question: "Which is right for a text to a friend?", options: ["Ti aspetto davanti al bar.", "La attendo davanti al bar.", "Si prega di attendere davanti al bar.", "Resto in attesa di un Suo riscontro."], correctIndex: 0, explanation: "Everyday \"aspettare\" with \"tu\"." },
      { type: "dictation", audio: "La preghiamo di prendere visione del documento allegato.", explanation: "Formal \"prendere visione di\"." },
      { type: "speak", text: "La Sua richiesta ci è pervenuta: restiamo in attesa di un Suo riscontro.", prompt: "Reply formally on the phone: Your request has reached us: we await your reply.", tip: "per-ve-NU-ta: stress on nu.", explanation: "\"Pervenire\" and \"riscontro\"." },
    ],
  },
];
