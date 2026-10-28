// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u28-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 28 Extra Practice: Listening Lab.
// Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U28_EXTRA: Lesson[] = [
  {
    slug: "b2-listening-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: More Radio",
    summary: "Fresh radio news items: traffic, culture, economy and local news, with the passive and the conditional of hearsay.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Four short news items",
        body: [
          "Traffic news: \"code\" (traffic backups), \"rallentamenti\" (slowdowns), \"un incidente\", \"la carreggiata\" (one side of a road or highway). Culture: \"la mostra\" (exhibition), \"inaugurare\". Economy: \"il PIL\" (GDP), \"le stime\" (estimates). Local: \"il Comune\", \"i residenti\".",
        ],
        examples: [
          { es: "Sull'A1 si registrano code per un incidente tra Firenze e Bologna.", en: "On the A1 there are traffic jams due to an accident between Florence and Bologna." },
          { es: "È stata inaugurata ieri la mostra dedicata alla fotografia italiana.", en: "The exhibition devoted to Italian photography opened yesterday." },
          { es: "Secondo le stime, il PIL crescerebbe dell'uno per cento.", en: "According to estimates, GDP would grow by one percent." },
          { es: "Il Comune ha approvato il nuovo piano per i parcheggi.", en: "The city council has approved the new parking plan." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Sull'A1 si registrano code per un incidente tra Firenze e Bologna.", question: "Why are there traffic jams?", options: ["an accident", "road work", "snow", "a strike"], correctIndex: 0, explanation: "\"Per un incidente\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in news style.", source: "The exhibition opened yesterday.", answer: "La mostra è stata inaugurata ieri.", altAnswers: ["È stata inaugurata ieri la mostra."], explanation: "Passive with \"inaugurare\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "È stata inaugurata ieri la mostra dedicata alla fotografia italiana.", question: "What is the exhibition about?", options: ["Italian photography", "Italian painting", "Italian cinema", "Italian fashion"], correctIndex: 0, explanation: "\"Fotografia italiana\"." },
      { type: "listen-choose", audio: "Secondo le stime, il PIL crescerebbe dell'uno per cento.", question: "Is the growth figure certain?", options: ["No, it's an estimate.", "Yes, it's official.", "It's last year's figure.", "The text doesn't say."], correctIndex: 0, explanation: "\"Secondo le stime\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in news style.", source: "There are traffic jams due to an accident.", answer: "Si registrano code per un incidente.", altAnswers: ["Ci sono code per un incidente.", "Si registrano code a causa di un incidente."], explanation: "\"Si registrano\" = there are (news)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in news style.", source: "According to estimates, GDP would grow by one percent.", answer: "Secondo le stime, il PIL crescerebbe dell'uno per cento.", altAnswers: ["Secondo le stime, il PIL crescerebbe dell'1%.", "Secondo le stime il PIL crescerebbe dell'uno per cento."], explanation: "Conditional for an estimate." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city council has approved the new parking plan.", answer: "Il Comune ha approvato il nuovo piano per i parcheggi.", altAnswers: ["Il comune ha approvato il nuovo piano per i parcheggi.", "Il Comune ha approvato il nuovo piano parcheggi."], explanation: "\"Il Comune\" = the city or town government." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in news style.", source: "Two people were reportedly injured.", answer: "Due persone sarebbero rimaste ferite.", altAnswers: ["Ci sarebbero due feriti.", "Due persone sarebbero state ferite."], explanation: "Past conditional of hearsay." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Slowdowns on the northbound lanes.", answer: "Rallentamenti sulla carreggiata nord.", altAnswers: ["Rallentamenti in carreggiata nord.", "Rallentamenti sulla carreggiata in direzione nord."], explanation: "Traffic news without a verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in news style.", source: "The exhibition will stay open until June.", answer: "La mostra resterà aperta fino a giugno.", altAnswers: ["La mostra rimarrà aperta fino a giugno.", "La mostra sarà aperta fino a giugno."], explanation: "Future of \"restare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[According to estimates], prices will rise.", sentence: "___, i prezzi aumenteranno.", answer: "Secondo le stime", explanation: "\"Le stime\" = estimates." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There are [traffic jams] on the highway.", sentence: "Ci sono ___ in autostrada.", answer: "code", altAnswers: ["delle code"], explanation: "\"La coda\" = a line of backed-up traffic." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in news style.", en: "The thief [reportedly escaped].", sentence: "Il ladro ___.", answer: "sarebbe fuggito", altAnswers: ["sarebbe scappato"], explanation: "Conditional of hearsay." },
      { type: "word-order", prompt: "Put the words in order to say: The city council has approved the new plan.", words: ["Il Comune", "ha approvato", "il nuovo", "piano."], translation: "The city council has approved the new plan.", explanation: "Simple news sentence." },
      { type: "multiple-choice", question: "\"Si registrano code\" in a traffic report means ...", options: ["there are traffic jams", "lines are being counted", "you must register", "the road is closed"], correctIndex: 0, explanation: "\"Registrarsi\" here = to be recorded, to occur." },
      { type: "dictation", audio: "Sull'A1 si registrano code per un incidente tra Firenze e Bologna.", explanation: "Traffic news formula." },
      { type: "speak", text: "Secondo le stime, il PIL crescerebbe dell'uno per cento quest'anno.", prompt: "Read the economic news: According to estimates, GDP would grow by one percent this year.", tip: "cre-sce-REB-be: double b.", explanation: "Conditional for estimates." },
    ],
  },
  {
    slug: "b2-listening-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: More Interviews",
    summary: "Fresh interview extracts: a nurse, a chef and a student talk about work, choices and plans.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three voices",
        body: [
          "Three short interviews. Listen for the person's job, a difficulty, and a plan or opinion. Interviewers' questions: \"Che cosa La spinge a\" (what drives you to), \"Qual è stata la difficoltà più grande?\", \"Che consiglio darebbe a\".",
        ],
        examples: [
          { es: "Faccio l'infermiera da quindici anni e non cambierei lavoro.", en: "I've been a nurse for fifteen years and I wouldn't change jobs." },
          { es: "La difficoltà più grande sono i turni di notte.", en: "The biggest difficulty is the night shifts." },
          { es: "Ho aperto il ristorante nonostante la crisi.", en: "I opened the restaurant despite the crisis." },
          { es: "A chi vuole studiare all'estero consiglierei di partire senza paura.", en: "To anyone who wants to study abroad I'd advise going without fear." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "La difficoltà più grande sono i turni di notte.", question: "What's hardest for the nurse?", options: ["night shifts", "the pay", "the patients", "the commute"], correctIndex: 0, explanation: "\"I turni di notte\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been a nurse for fifteen years.", answer: "Faccio l'infermiera da quindici anni.", altAnswers: ["Sono infermiera da quindici anni.", "Faccio l'infermiere da quindici anni.", "Sono infermiere da quindici anni."], explanation: "Present + \"da\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Ho aperto il ristorante nonostante la crisi.", question: "When did the chef open the restaurant?", options: ["during a difficult economic period", "after winning a prize", "when he retired", "last summer"], correctIndex: 0, explanation: "\"Nonostante la crisi\"." },
      { type: "listen-choose", audio: "A chi vuole studiare all'estero consiglierei di partire senza paura.", question: "What does the student advise?", options: ["to go abroad without fear", "to stay at home", "to learn English first", "to save money first"], correctIndex: 0, explanation: "\"Partire senza paura\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wouldn't change jobs.", answer: "Non cambierei lavoro.", explanation: "Conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The biggest difficulty is the night shifts.", answer: "La difficoltà più grande sono i turni di notte.", altAnswers: ["La difficoltà maggiore sono i turni di notte."], explanation: "The verb agrees with the plural complement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I opened the restaurant despite the crisis.", answer: "Ho aperto il ristorante nonostante la crisi.", altAnswers: ["Ho aperto il ristorante malgrado la crisi."], explanation: "\"Nonostante\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "What advice would you give to young people?", answer: "Che consiglio darebbe ai giovani?", altAnswers: ["Quale consiglio darebbe ai giovani?", "Che consigli darebbe ai giovani?"], explanation: "Conditional with \"Lei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd advise going without fear.", answer: "Consiglierei di partire senza paura.", altAnswers: ["Consiglierei di andare senza paura."], explanation: "\"Consigliare di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "What drives you to do this job?", answer: "Che cosa La spinge a fare questo lavoro?", altAnswers: ["Che cosa la spinge a fare questo lavoro?", "Cosa La spinge a fare questo lavoro?", "Cosa la spinge a fare questo lavoro?"], explanation: "\"Spingere a\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I work [night shifts].", sentence: "Faccio ___.", answer: "i turni di notte", altAnswers: ["turni di notte"], explanation: "\"Il turno\" = shift." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Despite] the crisis, it's going well.", sentence: "___ la crisi, va bene.", answer: "Nonostante", altAnswers: ["Malgrado"], explanation: "Concession with a noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, formally.", en: "[What advice would you give] to students?", sentence: "___ agli studenti?", answer: "Che consiglio darebbe", altAnswers: ["Quale consiglio darebbe"], explanation: "Polite conditional." },
      { type: "word-order", prompt: "Put the words in order to say: I've been a nurse for fifteen years.", words: ["Faccio", "l'infermiera", "da", "quindici anni."], translation: "I've been a nurse for fifteen years.", explanation: "\"Fare\" + article + job." },
      { type: "multiple-choice", question: "\"Che cosa La spinge a farlo?\" asks about ...", options: ["motivation", "salary", "schedule", "location"], correctIndex: 0, explanation: "\"Spingere\" = to push, drive." },
      { type: "dictation", audio: "Faccio l'infermiera da quindici anni e non cambierei lavoro.", explanation: "Present + \"da\", then conditional." },
      { type: "speak", text: "A chi vuole studiare all'estero consiglierei di partire senza paura.", prompt: "Give advice: To anyone who wants to study abroad I'd advise going without fear.", tip: "con-si-glie-REI: stress on rei.", explanation: "\"A chi\" = to anyone who." },
    ],
  },
  {
    slug: "b2-listening-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: More Dictation",
    summary: "Fresh Upper Intermediate dictation: subjunctives, conditionals, pronouns and accents in longer sentences.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Listen and write",
        body: [
          "Write each sentence clause by clause. Check at the end: double consonants (\"avrebbe\", \"dovessi\"), accents (\"perché\", \"già\", \"così\"), pronoun clusters (\"glielo\", \"me ne\", \"ce l'ho\").",
        ],
        examples: [
          { es: "Gliel'ho detto mille volte, ma non mi ascolta.", en: "I've told him a thousand times, but he doesn't listen to me." },
          { es: "Se dovessi trovare le chiavi, chiamami subito.", en: "If you should find the keys, call me right away." },
          { es: "Me ne sono andato perché non ce la facevo più.", en: "I left because I couldn't take it anymore." },
          { es: "Era già partita quando sono arrivato.", en: "She had already left when I arrived." },
        ],
        checkpoint: [
          { type: "dictation", audio: "Gliel'ho detto mille volte, ma non mi ascolta.", explanation: "\"Gliel'ho\" = \"glielo ho\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you should find the keys, call me.", answer: "Se dovessi trovare le chiavi, chiamami.", altAnswers: ["Se dovessi trovare le chiavi chiamami.", "Se trovi le chiavi, chiamami."], explanation: "\"Se dovessi\" = if you should." },
        ],
      },
    ],
    exercises: [
      { type: "dictation", audio: "Me ne sono andato perché non ce la facevo più.", explanation: "\"Andarsene\" and \"farcela\"." },
      { type: "dictation", audio: "Era già partita quando sono arrivato alla stazione.", explanation: "\"Già\" with an accent." },
      { type: "dictation", audio: "Credevo che l'avessero già pagato, invece no.", explanation: "Pluperfect subjunctive." },
      { type: "dictation", audio: "Ce l'ho fatta: ho superato l'esame al primo tentativo!", explanation: "\"Ce l'ho fatta\" = I made it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've told him a thousand times.", answer: "Gliel'ho detto mille volte.", altAnswers: ["Gliel'ho detto un sacco di volte.", "Glielo ho detto mille volte."], explanation: "\"Glielo\" + \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I left because I couldn't take it anymore.", answer: "Me ne sono andato perché non ce la facevo più.", altAnswers: ["Me ne sono andata perché non ce la facevo più."], explanation: "\"Andarsene\", \"farcela\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She had already left when I arrived.", answer: "Era già partita quando sono arrivato.", altAnswers: ["Era già partita quando sono arrivata.", "Se n'era già andata quando sono arrivato.", "Se n'era già andata quando sono arrivata."], explanation: "Pluperfect for the earlier action." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought they had already paid.", answer: "Credevo che l'avessero già pagato.", altAnswers: ["Pensavo che avessero già pagato.", "Credevo che avessero già pagato."], explanation: "Pluperfect subjunctive after a past opinion." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I made it: I passed the exam.", answer: "Ce l'ho fatta: ho superato l'esame.", altAnswers: ["Ce l'ho fatta: ho passato l'esame."], explanation: "\"Farcela\" = to make it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've got it], don't worry.", sentence: "___, non preoccuparti.", answer: "Ce l'ho", explanation: "\"Averci\" + \"lo\" = \"ce l'ho\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [would have] called if he'd had your number.", sentence: "___ chiamato se avesse avuto il tuo numero.", answer: "Avrebbe", explanation: "Double b." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Why] didn't you tell me?", sentence: "___ non me l'hai detto?", answer: "Perché", explanation: "Acute accent: \"perché\"." },
      { type: "word-order", prompt: "Put the words in order to say: If you should find the keys, call me right away.", words: ["Se dovessi", "trovare", "le chiavi,", "chiamami", "subito."], translation: "If you should find the keys, call me right away.", explanation: "\"Se dovessi\" for an unlikely condition." },
      { type: "multiple-choice", question: "Which spelling is correct?", options: ["Gliel'ho detto.", "Glie l'ho detto.", "Gli l'ho detto.", "Glielò detto."], correctIndex: 0, explanation: "One word with an apostrophe: \"gliel'ho\"." },
      { type: "speak", text: "Ce l'ho fatta: ho superato l'esame al primo tentativo!", prompt: "Celebrate: I made it: I passed the exam on the first try!", tip: "ten-TA-ti-vo: stress on ta.", explanation: "\"Farcela\" in the passato prossimo." },
    ],
  },
];
