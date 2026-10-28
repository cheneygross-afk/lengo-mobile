// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u24-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 24 Extra Practice: Work and Job Hunting. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U24_EXTRA: Lesson[] = [
  {
    slug: "b1-work-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Formal Emails",
    summary: "Fresh formal emails: asking for information, confirming, apologizing and following up.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Four kinds of formal email",
        body: [
          "The frame stays the same (\"Gentile ...\", reason, request, \"Cordiali saluti\"); only the middle changes. Asking: \"Vorrei sapere se ...\". Confirming: \"Le confermo la mia presenza\". Apologizing: \"Mi scuso per il ritardo nella risposta\". Following up: \"Le scrivo per sapere se ha avuto modo di leggere la mia candidatura\" (whether you've had a chance to read).",
        ],
        examples: [
          { es: "Vorrei sapere se la posizione è ancora aperta.", en: "I'd like to know whether the position is still open." },
          { es: "Le confermo la mia presenza al colloquio di martedì.", en: "I confirm I'll attend Tuesday's interview." },
          { es: "Mi scuso per il ritardo nella risposta.", en: "I apologize for the late reply." },
          { es: "Le scrivo per sapere se ha avuto modo di leggere la mia candidatura.", en: "I'm writing to ask whether you've had a chance to read my application." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I apologize for the late reply.", answer: "Mi scuso per il ritardo nella risposta.", altAnswers: ["Mi scuso per il ritardo.", "Mi scusi per il ritardo nella risposta.", "Chiedo scusa per il ritardo nella risposta."], explanation: "\"Scusarsi per\" = to apologize for." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I confirm I'll attend the interview.", answer: "Le confermo la mia presenza al colloquio.", altAnswers: ["Confermo la mia presenza al colloquio.", "Le confermo che sarò presente al colloquio."], explanation: "\"Confermare la presenza\": the set phrase." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to know whether the position is still open.", answer: "Vorrei sapere se la posizione è ancora aperta.", altAnswers: ["Vorrei sapere se la posizione è ancora disponibile.", "Vorrei sapere se il posto è ancora libero."], explanation: "\"Se\" = whether; indicative after it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you tell me the salary?", answer: "Potrebbe indicarmi la retribuzione?", altAnswers: ["Potrebbe dirmi lo stipendio?", "Mi potrebbe dire lo stipendio?", "Mi potrebbe indicare la retribuzione?", "Potrebbe dirmi la retribuzione?"], explanation: "\"Lo stipendio\" (monthly pay) or \"la retribuzione\" (formal)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unfortunately I can't come on Thursday.", answer: "Purtroppo non posso venire giovedì.", altAnswers: ["Purtroppo giovedì non posso venire.", "Purtroppo giovedì non potrò venire.", "Purtroppo non potrò venire giovedì."], explanation: "No article before the day: this Thursday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would it be possible to move the interview?", answer: "Sarebbe possibile spostare il colloquio?", altAnswers: ["Si potrebbe spostare il colloquio?", "Potremmo spostare il colloquio?"], explanation: "\"Sarebbe possibile\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you for the opportunity. (formal)", answer: "La ringrazio per l'opportunità.", altAnswers: ["La ringrazio dell'opportunità.", "Grazie per l'opportunità."], explanation: "\"La ringrazio\": direct object." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I attach the requested documents.", answer: "Allego i documenti richiesti.", altAnswers: ["In allegato i documenti richiesti.", "Le allego i documenti richiesti."], explanation: "\"Richiesti\" agrees with \"documenti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I remain available for any clarification.", answer: "Resto a disposizione per qualsiasi chiarimento.", altAnswers: ["Rimango a disposizione per qualsiasi chiarimento.", "Resto a disposizione per eventuali chiarimenti.", "Rimango a disposizione per eventuali chiarimenti."], explanation: "\"Qualsiasi\" + singular, \"eventuali\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you had a chance to read my CV? (formal)", answer: "Ha avuto modo di leggere il mio curriculum?", altAnswers: ["Ha avuto modo di leggere il mio CV?", "Ha avuto l'occasione di leggere il mio curriculum?"], explanation: "\"Avere modo di\" = to have the chance to." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Best regards], Marco Neri", sentence: "___, Marco Neri", answer: "Cordiali saluti", altAnswers: ["Distinti saluti"], explanation: "Formal closings." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm writing to you] about your ad. (formal)", sentence: "___ in merito al Suo annuncio.", answer: "Le scrivo", explanation: "\"Le\" = to you." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope [you are] well. (formal)", sentence: "Spero che ___ bene.", answer: "stia", altAnswers: ["Lei stia"], explanation: "\"Sperare che\" + subjunctive of \"stare\": \"stia\"." },
      { type: "word-order", prompt: "Put the words in order to say: I apologize for the inconvenience.", words: ["Mi", "scuso", "per", "il", "disagio."], translation: "I apologize for the inconvenience.", explanation: "\"Il disagio\" = the inconvenience." },
      { type: "multiple-choice", question: "Which line follows up politely on an application?", options: ["Le scrivo per sapere se ha avuto modo di leggere la mia candidatura.", "Perché non mi hai risposto?", "Allora? Il lavoro è mio?", "Ti scrivo di nuovo per il lavoro."], correctIndex: 0, explanation: "Formal, indirect, and with \"Lei\"." },
      { type: "dictation", audio: "Resto a disposizione per qualsiasi chiarimento.", explanation: "\"Chiarimento\" = clarification." },
      { type: "speak", text: "Buongiorno, Le scrivo per sapere se la posizione è ancora aperta.", prompt: "Say it in Italian: Good morning, I'm writing to find out whether the position is still open.", tip: "\"Aperta\": stress on the e, a-PER-ta.", explanation: "\"Per sapere se\" = to find out whether." },
    ],
  },
  {
    slug: "b1-work-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Interview Answers",
    summary: "Answer fresh interview questions about your studies, experience, motivation and plans.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Questions you'll hear",
        body: [
          "Beyond the classics, expect \"Come mai ha lasciato il lavoro precedente?\" (why did you leave), \"Come gestisce lo stress?\", \"Che aspettative ha di stipendio?\" (salary expectations) and \"Quando potrebbe iniziare?\". \"Come mai\" is a softer why.",
        ],
        examples: [
          { es: "Come mai ha lasciato il lavoro precedente?", en: "How come you left your previous job?" },
          { es: "Cercavo nuove opportunità di crescita.", en: "I was looking for new opportunities to grow." },
          { es: "Che aspettative ha di stipendio?", en: "What are your salary expectations?" },
          { es: "Potrei iniziare dal primo del mese.", en: "I could start from the first of the month." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was looking for new opportunities to grow.", answer: "Cercavo nuove opportunità di crescita.", altAnswers: ["Cercavo nuove opportunità per crescere.", "Cercavo nuove possibilità di crescita."], explanation: "Imperfetto for the reason behind a decision." },
          { type: "listen-choose", audio: "Quando potrebbe iniziare?", question: "What are they asking?", options: ["When could you start?", "When did you start?", "Why do you want to start?", "Where would you start?"], correctIndex: 0, explanation: "\"Potrebbe\": conditional, Lei form." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How come you left your previous job? (formal)", answer: "Come mai ha lasciato il lavoro precedente?", altAnswers: ["Perché ha lasciato il lavoro precedente?", "Come mai ha lasciato il Suo lavoro precedente?"], explanation: "\"Come mai\" takes normal word order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract had ended.", answer: "Il contratto era scaduto.", altAnswers: ["Il contratto era finito."], explanation: "Trapassato prossimo: it had already ended before you left." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I handle stress by organizing my day.", answer: "Gestisco lo stress organizzando la giornata.", altAnswers: ["Gestisco lo stress organizzando la mia giornata.", "Gestisco lo stress organizzandomi la giornata."], explanation: "The gerund \"organizzando\" = by organizing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to grow professionally.", answer: "Vorrei crescere professionalmente.", altAnswers: ["Mi piacerebbe crescere professionalmente.", "Vorrei crescere a livello professionale.", "Mi piacerebbe crescere a livello professionale."], explanation: "Conditional for wishes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I could start next month.", answer: "Potrei iniziare il mese prossimo.", altAnswers: ["Potrei cominciare il mese prossimo.", "Potrei iniziare dal mese prossimo.", "Potrei cominciare dal mese prossimo."], explanation: "\"Potrei\": conditional of \"potere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've always been interested in fashion.", answer: "Mi è sempre interessata la moda.", altAnswers: ["Mi sono sempre interessato di moda.", "Mi sono sempre interessata di moda.", "La moda mi è sempre interessata.", "Mi sono sempre interessato alla moda.", "Mi sono sempre interessata alla moda."], explanation: "\"Interessare\" works like \"piacere\", or use \"interessarsi di / a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In five years I see myself as a team leader.", answer: "Tra cinque anni mi vedo come responsabile di un gruppo.", altAnswers: ["Fra cinque anni mi vedo come responsabile di un gruppo.", "Tra cinque anni mi vedo come team leader.", "Fra cinque anni mi vedo come team leader."], explanation: "\"Tra\" / \"fra\" + time = in (the future)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm used to working with foreign clients.", answer: "Sono abituato a lavorare con clienti stranieri.", altAnswers: ["Sono abituata a lavorare con clienti stranieri.", "Sono abituato a lavorare con clienti esteri.", "Sono abituata a lavorare con clienti esteri."], explanation: "\"Essere abituato a\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What are your salary expectations]? (formal)", sentence: "___?", answer: "Che aspettative ha di stipendio", altAnswers: ["Quali sono le Sue aspettative di stipendio", "Quali sono le sue aspettative economiche"], explanation: "\"Aspettative\" = expectations." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I chose your company [because] it works internationally.", sentence: "Ho scelto la vostra azienda ___ lavora a livello internazionale.", answer: "perché", altAnswers: ["poiché", "dato che", "visto che"], explanation: "\"Perché\" with an acute accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm a person [who] likes challenges.", sentence: "Sono una persona ___ ama le sfide.", answer: "che", explanation: "\"Che\" as subject relative." },
      { type: "word-order", prompt: "Put the words in order to say: I'm used to working under pressure.", words: ["Sono", "abituata", "a", "lavorare", "sotto", "pressione."], translation: "I'm used to working under pressure.", explanation: "\"Abituata\": a woman speaking." },
      { type: "multiple-choice", question: "\"Come mai vuole cambiare settore?\" What is being asked?", options: ["Why do you want to change sector?", "How do you want to change sector?", "When will you change sector?", "Have you ever changed sector?"], correctIndex: 0, explanation: "\"Come mai\" = how come, why." },
      { type: "dictation", audio: "Cercavo un ambiente più dinamico.", explanation: "\"Ambiente\" here = work environment." },
      { type: "speak", text: "Ho lasciato il lavoro precedente perché cercavo nuove opportunità di crescita.", prompt: "Answer aloud: I left my previous job because I was looking for new opportunities to grow.", tip: "\"Opportunità\": stress the final à.", explanation: "Passato prossimo for the decision, imperfetto for the reason." },
    ],
  },
  {
    slug: "b1-work-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Workplace Vocabulary",
    summary: "Fresh sentences with the vocabulary of contracts, pay, colleagues and office life.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Contracts and pay",
        body: [
          "\"Lo stipendio\" is monthly pay (\"la busta paga\" is the payslip); \"lordo\" = gross, \"netto\" = net. Italians often get a thirteenth month's pay (\"la tredicesima\") in December. \"Assumere\" is to hire, \"licenziare\" to fire, \"dimettersi\" to resign; \"il periodo di prova\" is the probation period.",
        ],
        examples: [
          { es: "Lo stipendio netto è di 1.600 euro al mese.", en: "The net salary is 1,600 euros a month." },
          { es: "A dicembre arriva la tredicesima.", en: "In December the thirteenth month's pay arrives." },
          { es: "Mi hanno assunta dopo tre mesi di prova.", en: "They hired me after a three-month probation period." },
          { es: "Si è dimesso perché non andava d'accordo con il capo.", en: "He resigned because he didn't get along with the boss." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They hired me in September.", answer: "Mi hanno assunto a settembre.", altAnswers: ["Mi hanno assunta a settembre.", "Sono stato assunto a settembre.", "Sono stata assunta a settembre.", "Mi hanno assunto in settembre.", "Mi hanno assunta in settembre."], explanation: "\"Assumere\" → \"assunto\" (irregular participle)." },
          { type: "dictation", audio: "Lo stipendio netto è di milleseicento euro.", explanation: "\"Netto\" with double t." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the gross salary?", answer: "Qual è lo stipendio lordo?", altAnswers: ["Quant'è lo stipendio lordo?", "Quanto è lo stipendio lordo?"], explanation: "\"Qual è\" with no apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was fired last month.", answer: "È stato licenziato il mese scorso.", altAnswers: ["L'hanno licenziato il mese scorso.", "Il mese scorso è stato licenziato."], explanation: "Passive with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My colleagues are very helpful.", answer: "I miei colleghi sono molto disponibili.", altAnswers: ["I miei colleghi sono molto gentili.", "Le mie colleghe sono molto disponibili."], explanation: "\"Disponibile\" = helpful, willing; \"collega\" plural \"colleghi\" with an h." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work from home two days a week.", answer: "Lavoro da casa due giorni alla settimana.", altAnswers: ["Lavoro da casa due giorni a settimana.", "Faccio smart working due giorni alla settimana.", "Faccio smart working due giorni a settimana."], explanation: "Italians call remote work \"smart working\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The probation period lasts three months.", answer: "Il periodo di prova dura tre mesi.", explanation: "\"Durare\" = to last." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She resigned in June.", answer: "Si è dimessa a giugno.", altAnswers: ["Si è dimessa in giugno.", "Lei si è dimessa a giugno."], explanation: "\"Dimettersi\": participle \"dimesso / dimessa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've used up all my vacation days.", answer: "Ho finito tutte le ferie.", altAnswers: ["Ho già finito tutte le ferie.", "Ho esaurito tutte le ferie.", "Ho usato tutte le ferie."], explanation: "\"Le ferie\": plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shift starts at six.", answer: "Il turno comincia alle sei.", altAnswers: ["Il turno inizia alle sei.", "Il turno attacca alle sei."], explanation: "\"Il turno\" = the shift. In speech people also say \"attacco alle sei\" (I start at six), which is informal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I get [my payslip] at the end of the month.", sentence: "Ricevo ___ a fine mese.", answer: "la busta paga", explanation: "\"Busta paga\": literally pay envelope." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The boss] is on a business trip.", sentence: "___ è in trasferta.", answer: "Il capo", altAnswers: ["Il responsabile", "La responsabile", "Il direttore", "La direttrice"], explanation: "\"In trasferta\" = on a work trip." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have [a fixed-term contract].", sentence: "Ho ___.", answer: "un contratto a tempo determinato", explanation: "\"Determinato\" = with an end date." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "assumere", right: "to hire" }, { left: "licenziare", right: "to fire" }, { left: "dimettersi", right: "to resign" }, { left: "il turno", right: "the shift" }, { left: "lo stipendio", right: "the salary" }, { left: "le ferie", right: "vacation days" }], explanation: "Core contract vocabulary." },
      { type: "word-order", prompt: "Put the words in order to say: I work from home on Fridays.", words: ["Il", "venerdì", "lavoro", "da", "casa."], translation: "I work from home on Fridays.", altOrders: [["Lavoro", "da", "casa", "il", "venerdì."]], explanation: "\"Il venerdì\" = every Friday." },
      { type: "listen-choose", audio: "Mi hanno rinnovato il contratto per un altro anno.", question: "What happened?", options: ["The contract was renewed for a year.", "The contract ended a year ago.", "They hired someone else.", "The contract became permanent."], correctIndex: 0, explanation: "\"Rinnovare\" = to renew." },
      { type: "speak", text: "Ho un contratto a tempo indeterminato e lavoro da casa il venerdì.", prompt: "Say it in Italian: I have a permanent contract and I work from home on Fridays.", tip: "\"Indeterminato\": keep all six syllables.", explanation: "Contract type and remote work." },
    ],
  },
];
