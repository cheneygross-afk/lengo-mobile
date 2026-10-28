// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u15.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 15: "If" Sentences, Part 1: Real Conditions. Se + present,
// se + future, se + passato prossimo, se or quando, in caso di.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U15: Lesson[] = [
  {
    slug: "b1-if-real-present",
    level: "IT-B1",
    number: 1,
    title: "If It Rains: Se + Present",
    summary: "Talk about real, likely conditions with se + present, followed by a present, a future or a command: se piove, prendo l'ombrello.",
    duration: "17 min",
    sections: [
      {
        heading: "Se piove, resto a casa",
        body: [
          "A real condition is one that may well come true: if it rains, if you're hungry, if you want. Italian uses \"se\" + the present indicative, just like English: \"Se piove, resto a casa\" (if it rains, I stay at home). No subjunctive here: \"se piova\" is a mistake.",
          "The main clause can be in the present, for habits and general truths (\"Se ho tempo, vado in palestra\", if I have time, I go to the gym), or for near plans, as Italian often uses the present for the future: \"Se piove domani, resto a casa\".",
          "The \"se\" clause can come first or second, as in English. When it comes first, a comma usually follows it: \"Se vuoi, ti accompagno\" / \"Ti accompagno, se vuoi\".",
        ],
        examples: [
          { es: "Se piove, prendo l'ombrello.", en: "If it rains, I take my umbrella." },
          { es: "Se ho tempo, vado in palestra.", en: "If I have time, I go to the gym." },
          { es: "Se vuoi, ti accompagno.", en: "If you like, I'll go with you." },
          { es: "Se scaldi il ghiaccio, si scioglie.", en: "If you heat ice, it melts." },
          { es: "Se domani c'è il sole, andiamo al lago.", en: "If it's sunny tomorrow, we're going to the lake." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you like, I'll go with you. (to a friend)", answer: "Se vuoi, ti accompagno.", altAnswers: ["Ti accompagno, se vuoi.", "Se vuoi ti accompagno."], explanation: "\"Se\" + present; the present \"accompagno\" works for a near future." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If it's sunny] tomorrow, we're going to the lake.", sentence: "___ domani, andiamo al lago.", answer: "Se c'è il sole", altAnswers: ["Se fa bel tempo", "Se c'è sole"], explanation: "Real condition: \"se\" + present indicative." },
          { type: "multiple-choice", question: "How do you say: if it rains, I'll stay at home?", options: ["Se piove, resto a casa.", "Se piova, resto a casa.", "Se piovesse, resto a casa.", "Se piove, resterei a casa."], correctIndex: 0, explanation: "Real condition: present indicative in both clauses; no subjunctive, no conditional." },
        ],
      },
      {
        heading: "Se hai fame, mangia qualcosa",
        body: [
          "Advice and instructions put an imperative in the main clause: \"Se hai fame, mangia qualcosa\" (if you're hungry, eat something), \"Se hai bisogno, chiamami\" (if you need anything, call me). Pronouns attach to \"tu\", \"noi\" and \"voi\" commands as usual.",
          "With \"Lei\" the command comes before: \"Se ha domande, mi chiami\" (if you have questions, call me), the standard phrasing at an office or in a shop.",
        ],
        examples: [
          { es: "Se hai fame, mangia qualcosa.", en: "If you're hungry, eat something." },
          { es: "Se hai bisogno, chiamami.", en: "If you need anything, call me." },
          { es: "Se siete stanchi, riposatevi.", en: "If you're tired, have a rest. (plural)" },
          { es: "Se ha domande, mi chiami.", en: "If you have any questions, call me. (polite)" },
          { es: "Se non ti piace, lascialo.", en: "If you don't like it, leave it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you need anything, call me. (to a friend)", answer: "Se hai bisogno, chiamami.", altAnswers: ["Se hai bisogno di qualcosa, chiamami.", "Chiamami se hai bisogno.", "Se ti serve qualcosa, chiamami."], explanation: "\"Se\" + present, then a \"tu\" command with the pronoun attached." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you have any questions, call me. (polite)", answer: "Se ha domande, mi chiami.", altAnswers: ["Se ha delle domande, mi chiami.", "Se ha qualche domanda, mi chiami.", "Mi chiami se ha domande."], explanation: "\"Lei\" command: the pronoun goes before, \"mi chiami\"." },
        ],
      },
      {
        heading: "Se vuoi and other fixed phrases",
        body: [
          "Some \"se\" phrases are fixed and very frequent: \"se vuoi\" / \"se volete\" (if you like), \"se non sbaglio\" (if I'm not mistaken), \"se ti va\" (if you feel like it), \"se possibile\" (if possible), \"se non altro\" (if nothing else, at least).",
          "\"Se no\" or \"sennò\" means otherwise: \"Sbrigati, sennò perdiamo il treno\" (hurry up, otherwise we'll miss the train).",
        ],
        examples: [
          { es: "Se non sbaglio, il museo chiude alle sette.", en: "If I'm not mistaken, the museum closes at seven." },
          { es: "Se ti va, stasera andiamo al cinema.", en: "If you feel like it, let's go to the cinema tonight." },
          { es: "Mi risponda, se possibile, entro venerdì.", en: "Please reply, if possible, by Friday. (polite)" },
          { es: "Sbrigati, sennò perdiamo il treno.", en: "Hurry up, otherwise we'll miss the train." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I'm not mistaken, the museum closes at seven.", answer: "Se non sbaglio, il museo chiude alle sette.", altAnswers: ["Se non sbaglio, il museo chiude alle 19.", "Il museo chiude alle sette, se non sbaglio."], explanation: "\"Se non sbaglio\" = if I'm not mistaken." },
          { type: "listen-choose", audio: "Sbrigati, sennò perdiamo il treno.", question: "What does it mean?", options: ["Hurry up, otherwise we'll miss the train.", "Hurry up, if we miss the train.", "Don't hurry, we won't miss the train.", "Hurry up, we've missed the train."], correctIndex: 0, explanation: "\"Sennò\" = otherwise." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it rains, I take my umbrella.", answer: "Se piove, prendo l'ombrello.", altAnswers: ["Se piove prendo l'ombrello.", "Prendo l'ombrello se piove."], explanation: "\"Se\" + present indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I have time, I go to the gym.", answer: "Se ho tempo, vado in palestra.", altAnswers: ["Vado in palestra se ho tempo.", "Se ho tempo vado in palestra."], explanation: "A habit: present in both clauses." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're hungry, eat something. (to a friend)", answer: "Se hai fame, mangia qualcosa.", altAnswers: ["Mangia qualcosa se hai fame.", "Se hai fame mangia qualcosa."], explanation: "\"Avere fame\" = to be hungry; imperative in the main clause." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're tired, have a rest. (plural)", answer: "Se siete stanchi, riposatevi.", altAnswers: ["Se siete stanche, riposatevi.", "Riposatevi se siete stanchi."], explanation: "\"Voi\" command with \"vi\" attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you feel like it, let's go to the cinema tonight.", answer: "Se ti va, stasera andiamo al cinema.", altAnswers: ["Se ti va, andiamo al cinema stasera.", "Stasera andiamo al cinema, se ti va."], explanation: "\"Se ti va\" = if you feel like it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you heat ice, [it melts].", sentence: "Se scaldi il ghiaccio, ___.", answer: "si scioglie", explanation: "A general truth: present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you don't like it], leave it. (to a friend)", sentence: "___, lascialo.", answer: "Se non ti piace", explanation: "\"Se\" + negative present." },
      { type: "word-order", prompt: "Put the words in order to say: If you want, I'll pick you up at the station.", words: ["Se", "vuoi,", "ti", "vengo", "a", "prendere", "alla", "stazione."], translation: "If you want, I'll pick you up at the station.", explanation: "\"Venire a prendere\" = to come and pick up." },
      { type: "multiple-choice", question: "A customer asks the hotel receptionist what to do if the heating doesn't work. What does the receptionist say?", options: ["Se non funziona, mi chiami.", "Se non funziona, chiamami.", "Se non funzionasse, mi chiamava.", "Se non funziona, mi chiamerebbe."], correctIndex: 0, explanation: "Polite \"Lei\" command: \"mi chiami\"." },
      { type: "dictation", audio: "Se ti va, ci vediamo dopo cena.", explanation: "\"Se ti va\": a fixed phrase." },
      { type: "speak", text: "Se piove, restiamo a casa; se c'è il sole, andiamo al mare.", prompt: "Say it in Italian: If it rains, we'll stay at home; if it's sunny, we'll go to the seaside.", tip: "Pause slightly after each \"se\" clause.", explanation: "Two real conditions with the present." },
    ],
  },
  {
    slug: "b1-if-real-future",
    level: "IT-B1",
    number: 2,
    title: "If You Come: Se + Future",
    summary: "Use se + future for future conditions: se verrai a Roma, ti porterò al Colosseo; the future in both clauses in careful Italian, the present in speech.",
    duration: "17 min",
    sections: [
      {
        heading: "Se verrai, sarò contento",
        body: [
          "English never puts will after if: if you come to Rome, I'll take you to the Colosseum. Italian, being more logical about time, can: the coming is in the future, so careful Italian puts it in the future: \"Se verrai a Roma, ti porterò al Colosseo\".",
          "The rule of thumb is consistency. If the main clause is in the future, the \"se\" clause is in the future too: \"Se studierai, passerai l'esame\" (if you study, you'll pass the exam). This is the form for writing, formal speech and anything planned or distant.",
          "English speakers tend to write \"se vieni ..., ti porterò\". That's very common and perfectly understandable; just know that the all-future version is what a teacher or examiner expects.",
        ],
        examples: [
          { es: "Se verrai a Roma, ti porterò al Colosseo.", en: "If you come to Rome, I'll take you to the Colosseum." },
          { es: "Se studierai, passerai l'esame.", en: "If you study, you'll pass the exam." },
          { es: "Se avremo tempo, passeremo anche da Siena.", en: "If we have time, we'll also stop off in Siena." },
          { es: "Se pioverà, la festa si farà al chiuso.", en: "If it rains, the party will be held indoors." },
          { es: "Se l'azienda crescerà, assumeremo altre persone.", en: "If the company grows, we'll hire more people." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you come to Rome, I'll take you to the Colosseum. (to a friend)", answer: "Se verrai a Roma, ti porterò al Colosseo.", altAnswers: ["Se vieni a Roma, ti porto al Colosseo.", "Ti porterò al Colosseo se verrai a Roma.", "Se vieni a Roma, ti porterò al Colosseo."], explanation: "Careful Italian: future in both clauses; the present is fine in speech." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If we have] time, we'll also stop off in Siena.", sentence: "___ tempo, passeremo anche da Siena.", answer: "Se avremo", altAnswers: ["Se abbiamo"], explanation: "Future main clause, so \"se avremo\" in careful Italian." },
          { type: "listen-choose", audio: "Se studierai, passerai l'esame.", question: "What does it mean?", options: ["If you study, you'll pass the exam.", "If you studied, you'd pass the exam.", "When you studied, you passed the exam.", "If you've studied, you've passed the exam."], correctIndex: 0, explanation: "Future in both clauses: a real future condition." },
        ],
      },
      {
        heading: "In conversation: present + present",
        body: [
          "In everyday speech, especially for the near future, Italians often use the present in both clauses: \"Se vieni sabato, ti presento mia sorella\" (if you come on Saturday, I'll introduce you to my sister). The present + future mix is also common: \"Se vieni, ti presenterò\".",
          "What doesn't work is the conditional: \"se vieni, ti presenterei\" mixes a real condition with an unreal result. And the subjunctive never follows a real \"se\".",
        ],
        examples: [
          { es: "Se vieni sabato, ti presento mia sorella.", en: "If you come on Saturday, I'll introduce you to my sister." },
          { es: "Se finisco presto, passo da te.", en: "If I finish early, I'll drop by your place." },
          { es: "Se perdi il treno, ti vengo a prendere io.", en: "If you miss the train, I'll come and get you." },
          { es: "Se non ti sbrighi, arriviamo tardi.", en: "If you don't hurry, we'll be late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I finish early, I'll drop by your place.", answer: "Se finisco presto, passo da te.", altAnswers: ["Se finirò presto, passerò da te.", "Se finisco presto, passerò da te.", "Passo da te se finisco presto."], explanation: "Present + present is natural in speech; future + future in careful Italian." },
          { type: "multiple-choice", question: "Which version is NOT correct?", options: ["Se vieni, ti presenterei mia sorella.", "Se vieni, ti presento mia sorella.", "Se verrai, ti presenterò mia sorella.", "Se vieni, ti presenterò mia sorella."], correctIndex: 0, explanation: "A real condition never takes the conditional in the main clause." },
        ],
      },
      {
        heading: "Se + future, imperative",
        body: [
          "A future condition can also lead to an instruction: \"Se arriverai prima di me, aspettami al bar\" (if you get there before me, wait for me at the bar). In speech: \"Se arrivi prima, aspettami\".",
          "In formal emails, the future is standard: \"Se avrà bisogno di ulteriori informazioni, non esiti a contattarci\" (should you need further information, do not hesitate to contact us).",
        ],
        examples: [
          { es: "Se arriverai prima di me, aspettami al bar.", en: "If you get there before me, wait for me at the bar." },
          { es: "Se avrà bisogno di ulteriori informazioni, non esiti a contattarci.", en: "Should you need further information, do not hesitate to contact us." },
          { es: "Se ci sarà sciopero, prendete l'autobus.", en: "If there's a strike, take the bus. (plural)" },
          { es: "Se vorrete fermarvi a cena, sarete i benvenuti.", en: "If you want to stay for dinner, you'll be very welcome. (plural)" },
          { es: "Se il volo sarà cancellato, la compagnia vi rimborserà.", en: "If the flight is cancelled, the airline will refund you. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's a strike, take the bus. (plural)", answer: "Se ci sarà sciopero, prendete l'autobus.", altAnswers: ["Se c'è sciopero, prendete l'autobus.", "Se ci sarà lo sciopero, prendete l'autobus.", "Se c'è lo sciopero, prendete l'autobus."], explanation: "Future or present in the \"se\" clause, \"voi\" command in the main clause." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Should you need further information, [do not hesitate] to contact us.", sentence: "Se avrà bisogno di ulteriori informazioni, ___ a contattarci.", answer: "non esiti", explanation: "Formal \"Lei\" negative command: \"non esiti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it rains, the party will be held indoors.", answer: "Se pioverà, la festa si farà al chiuso.", altAnswers: ["Se piove, la festa si farà al chiuso.", "Se piove, la festa si fa al chiuso.", "Se pioverà, la festa sarà al chiuso."], explanation: "\"Al chiuso\" = indoors; future in both clauses in careful Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the company grows, we'll hire more people.", answer: "Se l'azienda crescerà, assumeremo altre persone.", altAnswers: ["Se l'azienda cresce, assumeremo altre persone.", "Se l'azienda crescerà, assumeremo più persone."], explanation: "\"Assumere\" = to hire (a false friend: not to assume)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you miss the train, I'll come and get you. (to a friend)", answer: "Se perdi il treno, ti vengo a prendere io.", altAnswers: ["Se perderai il treno, verrò a prenderti io.", "Se perdi il treno, vengo a prenderti io.", "Se perdi il treno, ti vengo a prendere."], explanation: "Spoken present + present, or careful future + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you don't hurry, we'll be late. (to a friend)", answer: "Se non ti sbrighi, arriviamo tardi.", altAnswers: ["Se non ti sbrighi, arriveremo tardi.", "Se non ti sbrigherai, arriveremo tardi.", "Se non ti sbrighi, arriviamo in ritardo."], explanation: "\"Sbrigarsi\" = to hurry." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you get there before me, wait for me at the bar. (to a friend)", answer: "Se arriverai prima di me, aspettami al bar.", altAnswers: ["Se arrivi prima di me, aspettami al bar."], explanation: "Future or present condition + imperative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you save, [you'll be able to] buy a house. (to a friend)", sentence: "Se risparmierai, ___ comprare una casa.", answer: "potrai", explanation: "Future in both clauses." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If they win] the match, they'll go to the final.", sentence: "___ la partita, andranno in finale.", answer: "Se vinceranno", altAnswers: ["Se vincono"], explanation: "Careful Italian: \"se vinceranno\"." },
      { type: "word-order", prompt: "Put the words in order to say: If you come on Saturday, I'll introduce you to my sister.", words: ["Se", "vieni", "sabato,", "ti", "presento", "mia", "sorella."], translation: "If you come on Saturday, I'll introduce you to my sister.", explanation: "Relaxed spoken Italian: present + present." },
      { type: "multiple-choice", question: "Which sentence would a teacher expect in a formal letter?", options: ["Se avrà domande, La contatteremo.", "Se ha domande, La contatteremmo.", "Se avesse domande, La contattiamo.", "Se avrà domande, La contattavamo."], correctIndex: 0, explanation: "Future in both clauses." },
      { type: "dictation", audio: "Se verrete a trovarci, vi porteremo al mare.", explanation: "Future in both clauses: \"verrete\", \"porteremo\"." },
      { type: "speak", text: "Se verrai a Napoli, ti porterò a mangiare la pizza più buona della città.", prompt: "Say it in Italian: If you come to Naples, I'll take you to eat the best pizza in town.", tip: "\"Pizza\": the zz is a long ts sound, PIT-tsa.", explanation: "Future in both clauses." },
    ],
  },
  {
    slug: "b1-if-past-condition",
    level: "IT-B1",
    number: 3,
    title: "Se + Past",
    summary: "Use se + passato prossimo for conditions about something that may already have happened: se hai finito, possiamo andare.",
    duration: "17 min",
    sections: [
      {
        heading: "Se hai finito, possiamo andare",
        body: [
          "Sometimes the condition is about something that may or may not have happened already: if you've finished, if you haven't seen it yet. Italian uses \"se\" + passato prossimo: \"Se hai finito, possiamo andare\" (if you've finished, we can go).",
          "The result can be in any tense that makes sense: present (\"possiamo andare\"), future (\"Se hai sbagliato, dovrai rifarlo\", if you've made a mistake, you'll have to redo it) or imperative (\"Se non l'hai ancora visto, guardalo!\").",
          "This is still a real condition: nothing hypothetical. You simply don't know yet whether it happened.",
        ],
        examples: [
          { es: "Se hai finito, possiamo andare.", en: "If you've finished, we can go." },
          { es: "Se non l'hai ancora visto, devi vederlo.", en: "If you haven't seen it yet, you must see it." },
          { es: "Se hai sbagliato, dovrai rifarlo.", en: "If you've made a mistake, you'll have to redo it." },
          { es: "Se avete già mangiato, prendiamo solo un caffè.", en: "If you've already eaten, let's just have a coffee. (plural)" },
          { es: "Se è già partito, lo chiamo sul cellulare.", en: "If he's already left, I'll call him on his mobile." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you've finished, we can go. (to a friend)", answer: "Se hai finito, possiamo andare.", altAnswers: ["Se hai finito possiamo andare.", "Possiamo andare, se hai finito.", "Se hai finito, possiamo andarcene."], explanation: "\"Se\" + passato prossimo for something that may already be done." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you haven't seen it] yet, you must see it. (to a friend)", sentence: "___ ancora, devi vederlo.", answer: "Se non l'hai visto", altAnswers: ["Se non lo hai visto"], explanation: "\"Lo\" elides before \"hai\": \"l'hai visto\"." },
          { type: "listen-choose", audio: "Se avete già mangiato, prendiamo solo un caffè.", question: "What does the speaker suggest?", options: ["Just a coffee, if they've already eaten", "Lunch, if they haven't eaten", "Coffee after lunch", "Eating now, then coffee"], correctIndex: 0, explanation: "\"Se avete già mangiato\" = if you've already eaten." },
        ],
      },
      {
        heading: "Se + imperfetto: if it was true",
        body: [
          "For a real condition about a past state, use the imperfetto: \"Se era malato, ha fatto bene a restare a casa\" (if he was ill, he was right to stay home). The speaker doesn't know, but accepts that it may be true.",
          "Careful: English if I was rich, I would ... is not this. That's an unreal condition, which needs the subjunctive and comes at Upper Intermediate. Use \"se\" + imperfetto only when the past state may really have been true.",
        ],
        examples: [
          { es: "Se era malato, ha fatto bene a restare a casa.", en: "If he was ill, he was right to stay at home." },
          { es: "Se lo sapevi, perché non me l'hai detto?", en: "If you knew, why didn't you tell me?" },
          { es: "Se c'era tanta gente, avete fatto bene ad andare via.", en: "If there were so many people, you were right to leave. (plural)" },
          { es: "Se il negozio era chiuso, non è colpa tua.", en: "If the shop was closed, it's not your fault." },
          { es: "Se eri stanco, potevi dirmelo.", en: "If you were tired, you could have told me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you knew, why didn't you tell me? (to a friend)", answer: "Se lo sapevi, perché non me l'hai detto?", altAnswers: ["Se lo sapevi, perché non me lo hai detto?", "Ma se lo sapevi, perché non me l'hai detto?"], explanation: "A real past condition: \"se\" + imperfetto." },
          { type: "multiple-choice", question: "Which sentence is a real condition about the past?", options: ["Se il negozio era chiuso, non è colpa tua.", "Se il negozio fosse chiuso, non sarebbe colpa tua.", "Se il negozio sarà chiuso, non sarà colpa tua.", "Se il negozio chiude, non è colpa tua."], correctIndex: 0, explanation: "\"Se\" + imperfetto: maybe it really was closed." },
        ],
      },
      {
        heading: "In caso di, nel caso in cui",
        body: [
          "Notices and contracts often avoid \"se\". \"In caso di\" + noun means in the event of: \"In caso di pioggia, la cena si terrà all'interno\" (in the event of rain, the dinner will be held indoors). \"Nel caso in cui\" takes the subjunctive (\"nel caso in cui piova\"); you'll meet it more at Upper Intermediate.",
          "You've also met \"a meno che non\" + subjunctive (unless): \"Ci vediamo alle otto, a meno che non piova\".",
        ],
        examples: [
          { es: "In caso di pioggia, la cena si terrà all'interno.", en: "In the event of rain, the dinner will be held indoors." },
          { es: "In caso di emergenza, chiamare il 112.", en: "In an emergency, call 112." },
          { es: "Nel caso in cui piova, rimandiamo.", en: "In case it rains, we'll postpone." },
          { es: "Ci vediamo alle otto, a meno che non piova.", en: "See you at eight, unless it rains." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the event of rain, the dinner will be held indoors.", answer: "In caso di pioggia, la cena si terrà all'interno.", altAnswers: ["In caso di pioggia, la cena si farà all'interno.", "In caso di pioggia, la cena si terrà al chiuso.", "In caso di pioggia, la cena sarà all'interno."], explanation: "\"In caso di\" + noun, no verb needed." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "See you at eight, [unless it rains].", sentence: "Ci vediamo alle otto, ___.", answer: "a meno che non piova", explanation: "\"A meno che non\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you've made a mistake, you'll have to redo it. (to a friend)", answer: "Se hai sbagliato, dovrai rifarlo.", altAnswers: ["Se hai fatto un errore, dovrai rifarlo.", "Se hai sbagliato, devi rifarlo."], explanation: "Passato prossimo in the condition, future in the result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If he's already left, I'll call him on his mobile.", answer: "Se è già partito, lo chiamo sul cellulare.", altAnswers: ["Se è già partito, lo chiamerò sul cellulare.", "Se è già uscito, lo chiamo sul cellulare."], explanation: "\"Se è già partito\": maybe he has." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If he was ill, he was right to stay at home.", answer: "Se era malato, ha fatto bene a restare a casa.", altAnswers: ["Se era malato, ha fatto bene a rimanere a casa.", "Ha fatto bene a restare a casa, se era malato."], explanation: "Real past state: \"se\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In an emergency, call 112.", answer: "In caso di emergenza, chiamare il 112.", altAnswers: ["In caso di emergenza, chiamate il 112.", "In caso di emergenza, chiami il 112.", "In caso di emergenza, chiama il 112."], explanation: "Notices use the infinitive as an instruction." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you've already eaten, let's just have a coffee. (plural)", answer: "Se avete già mangiato, prendiamo solo un caffè.", altAnswers: ["Se avete già mangiato, prendiamo soltanto un caffè.", "Se avete già pranzato, prendiamo solo un caffè."], explanation: "\"Prendiamo\" = let's have." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you've received] the parcel, let me know. (to a friend)", sentence: "___ il pacco, fammi sapere.", answer: "Se hai ricevuto", altAnswers: ["Se hai già ricevuto"], explanation: "Passato prossimo: maybe it has arrived." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the shop was closed, [it's not your fault].", sentence: "Se il negozio era chiuso, ___.", answer: "non è colpa tua", explanation: "\"Colpa\" = fault." },
      { type: "word-order", prompt: "Put the words in order to say: If you haven't booked yet, do it today.", words: ["Se", "non", "hai", "ancora", "prenotato,", "fallo", "oggi."], translation: "If you haven't booked yet, do it today.", explanation: "\"Fallo\": \"fa'\" + \"lo\" doubles the l." },
      { type: "multiple-choice", question: "Which sentence fits a contract or notice?", options: ["In caso di ritardo, il cliente riceverà un rimborso.", "Se fosse in ritardo, il cliente riceveva un rimborso.", "Se ritardi, ti rimborserei.", "In caso che ritardo, rimborso."], correctIndex: 0, explanation: "\"In caso di\" + noun is the formal, written way to say if." },
      { type: "dictation", audio: "Se non l'hai ancora letto, te lo presto.", explanation: "\"L'hai letto\": elision; \"te lo presto\" = I'll lend it to you." },
      { type: "speak", text: "Se hai finito di lavorare, possiamo uscire. Se non hai ancora cenato, ti porto in trattoria.", prompt: "Say it in Italian: If you've finished work, we can go out. If you haven't had dinner yet, I'll take you to a trattoria.", tip: "\"Trattoria\": double t at the start, trat-to-RI-a.", explanation: "Two conditions in the passato prossimo." },
    ],
  },
  {
    slug: "b1-drill-real-conditions",
    level: "IT-B1",
    number: 4,
    title: "Drill: Real Conditions",
    summary: "High-repetition production of real if sentences with the present, the future and the passato prossimo.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Present, future or past?",
        body: [
          "Habits and near plans: \"se\" + present, present. Planned or distant future: \"se\" + future, future (present in speech). Something that may already have happened: \"se\" + passato prossimo. Never the subjunctive or the conditional in a real condition.",
        ],
        examples: [
          { es: "Se bevo caffè la sera, non dormo.", en: "If I drink coffee in the evening, I don't sleep." },
          { es: "Se troverò un lavoro a Milano, mi trasferirò.", en: "If I find a job in Milan, I'll move." },
          { es: "Se hai perso le chiavi, chiama il portiere.", en: "If you've lost your keys, call the porter." },
          { es: "Se non c'è posto, andiamo da un'altra parte.", en: "If there's no room, we'll go somewhere else." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I drink coffee in the evening, I don't sleep.", answer: "Se bevo caffè la sera, non dormo.", altAnswers: ["Se bevo il caffè la sera, non dormo.", "Se la sera bevo caffè, non dormo.", "Non dormo se bevo caffè la sera."], explanation: "A habit: present + present." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I find a job in Milan, I'll move.", answer: "Se troverò un lavoro a Milano, mi trasferirò.", altAnswers: ["Se trovo un lavoro a Milano, mi trasferisco.", "Se trovo lavoro a Milano, mi trasferirò.", "Se troverò lavoro a Milano, mi trasferirò.", "Se trovo un lavoro a Milano, mi trasferirò."], explanation: "Future + future in careful Italian." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you've lost your keys, call the porter. (to a friend)", answer: "Se hai perso le chiavi, chiama il portiere.", altAnswers: ["Chiama il portiere se hai perso le chiavi."], explanation: "\"Se\" + passato prossimo + imperative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's no room, we'll go somewhere else.", answer: "Se non c'è posto, andiamo da un'altra parte.", altAnswers: ["Se non c'è posto, andremo da un'altra parte.", "Se non c'è posto, andiamo altrove."], explanation: "\"Da un'altra parte\" = somewhere else." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're cold, close the window. (to a friend)", answer: "Se hai freddo, chiudi la finestra.", altAnswers: ["Chiudi la finestra se hai freddo."], explanation: "\"Avere freddo\" = to be cold." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they sell the house, they'll go and live in the country.", answer: "Se venderanno la casa, andranno a vivere in campagna.", altAnswers: ["Se vendono la casa, vanno a vivere in campagna.", "Se vendono la casa, andranno a vivere in campagna."], explanation: "Future + future, or present in speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you've already paid, you can go in. (polite)", answer: "Se ha già pagato, può entrare.", altAnswers: ["Se Lei ha già pagato, può entrare."], explanation: "\"Lei\" form, passato prossimo condition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the baby sleeps, we'll have dinner in peace.", answer: "Se il bambino dorme, ceniamo in pace.", altAnswers: ["Se il bambino dormirà, ceneremo in pace.", "Se il bambino dorme, ceneremo in pace.", "Se la bambina dorme, ceniamo in pace."], explanation: "Near future: present + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you don't like fish, I'll make you some pasta. (to a friend)", answer: "Se non ti piace il pesce, ti faccio la pasta.", altAnswers: ["Se il pesce non ti piace, ti faccio la pasta.", "Se non ti piace il pesce, ti preparo la pasta.", "Se non ti piace il pesce, ti faccio un po' di pasta."], explanation: "\"Piacere\": the fish is the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the train is late, we'll miss the connection.", answer: "Se il treno è in ritardo, perdiamo la coincidenza.", altAnswers: ["Se il treno sarà in ritardo, perderemo la coincidenza.", "Se il treno ritarda, perdiamo la coincidenza.", "Se il treno è in ritardo, perderemo la coincidenza."], explanation: "\"La coincidenza\" = the connection (trains)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you go] to the supermarket, buy some milk. (to a friend)", sentence: "___ al supermercato, compra il latte.", answer: "Se vai", altAnswers: ["Se passi"], explanation: "\"Se\" + present + imperative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you study every day, [you'll improve]. (to a friend)", sentence: "Se studierai ogni giorno, ___.", answer: "migliorerai", explanation: "Future main clause matches the future condition." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If they've already left], we'll see them tomorrow.", sentence: "___, li vediamo domani.", answer: "Se sono già partiti", altAnswers: ["Se sono già andati via", "Se se ne sono già andati", "Se sono già usciti"], explanation: "Passato prossimo with \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If it snows, [the schools will close].", sentence: "Se nevicherà, ___.", answer: "le scuole chiuderanno", altAnswers: ["chiuderanno le scuole"], explanation: "Future in both clauses." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you want] to come, there's room in the car. (plural)", sentence: "___ venire, c'è posto in macchina.", answer: "Se volete", explanation: "\"Voi\": \"volete\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you add salt now, [the sauce will be] too salty.", sentence: "Se aggiungi il sale adesso, ___ troppo salato.", answer: "il sugo sarà", altAnswers: ["il sugo viene", "il sugo verrà"], explanation: "Future result of a present condition." },
      { type: "word-order", prompt: "Put the words in order to say: If you've finished your homework, you can play.", words: ["Se", "hai", "finito", "i", "compiti,", "puoi", "giocare."], translation: "If you've finished your homework, you can play.", explanation: "\"I compiti\" = homework." },
      { type: "multiple-choice", question: "Which sentence is a correct real condition?", options: ["Se vieni, ti preparo un caffè.", "Se venga, ti preparo un caffè.", "Se vieni, ti preparerei un caffè.", "Se verresti, ti preparo un caffè."], correctIndex: 0, explanation: "Present indicative in both clauses." },
      { type: "listen-choose", audio: "Se arriverete tardi, lasciate la chiave sotto lo zerbino.", question: "What should they do if they arrive late?", options: ["Leave the key under the doormat", "Ring the bell", "Call the speaker", "Wait outside"], correctIndex: 0, explanation: "\"Lo zerbino\" = the doormat." },
      { type: "dictation", audio: "Se hai bisogno di aiuto, chiamami.", explanation: "\"Avere bisogno di\" = to need." },
      { type: "dictation", audio: "Se pioverà, andremo al museo.", explanation: "Future in both clauses." },
      { type: "speak", text: "Se trovo un lavoro a Bologna, mi trasferisco; se no, resto qui.", prompt: "Say it in Italian: If I find a job in Bologna, I'll move; if not, I'll stay here.", tip: "\"Se no\": a quick pause before it, then a falling tone.", explanation: "Present + present for a near plan." },
    ],
  },
  {
    slug: "b1-contrast-se-quando",
    level: "IT-B1",
    number: 5,
    title: "Contrast Clinic: Se or Quando?",
    summary: "Choose between se (if: maybe it will happen) and quando (when: it will happen), and keep the future after both.",
    duration: "17 min",
    sections: [
      {
        heading: "Maybe or certainly?",
        body: [
          "\"Se\" means if: the speaker isn't sure it will happen. \"Quando\" means when: it will happen, the only question is the moment. \"Se arriva Marco, iniziamo\" (if Marco comes, we'll start: maybe he won't) / \"Quando arriva Marco, iniziamo\" (when Marco arrives, we'll start: he's coming).",
          "English works the same way, so the choice itself is easy. The trap is elsewhere: English puts the present after both if and when, while careful Italian puts the future after both when the main clause is future.",
        ],
        examples: [
          { es: "Se arriva Marco, iniziamo.", en: "If Marco comes, we'll start." },
          { es: "Quando arriva Marco, iniziamo.", en: "When Marco arrives, we'll start." },
          { es: "Se avrò tempo, ti scriverò.", en: "If I have time, I'll write to you." },
          { es: "Quando avrò tempo, ti scriverò.", en: "When I have time, I'll write to you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When Marco arrives, we'll start.", answer: "Quando arriva Marco, iniziamo.", altAnswers: ["Quando arriverà Marco, inizieremo.", "Quando Marco arriva, iniziamo.", "Quando Marco arriverà, inizieremo.", "Quando arriva Marco, cominciamo."], explanation: "\"Quando\": he's certainly coming." },
          { type: "multiple-choice", question: "You're not sure your sister will come to the party. Which sentence fits?", options: ["Se viene mia sorella, porta il dolce.", "Quando viene mia sorella, porta il dolce.", "Quando verrebbe mia sorella, porta il dolce.", "Se venga mia sorella, porta il dolce."], correctIndex: 0, explanation: "Uncertain: \"se\"." },
        ],
      },
      {
        heading: "Future after both",
        body: [
          "After both \"se\" and \"quando\", careful Italian uses the future when the time is future: \"Quando sarò in pensione, viaggerò\" (when I'm retired, I'll travel), \"Se sarò in pensione, viaggerò\" would mean you doubt you'll ever retire.",
          "In speech, the present after both is common for the near future: \"Quando arrivi, chiamami\". For the earlier of two events, remember the future perfect: \"Quando avrò finito, ...\".",
        ],
        examples: [
          { es: "Quando sarò in pensione, viaggerò.", en: "When I'm retired, I'll travel." },
          { es: "Quando arrivi, chiamami.", en: "When you arrive, call me." },
          { es: "Se arrivi tardi, chiamami.", en: "If you arrive late, call me." },
          { es: "Quando avrò finito, ti chiamerò.", en: "When I've finished, I'll call you." },
          { es: "Se un giorno avrò figli, gli insegnerò l'italiano.", en: "If I have children one day, I'll teach them Italian." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I'm retired, I'll travel.", answer: "Quando sarò in pensione, viaggerò.", altAnswers: ["Quando andrò in pensione, viaggerò.", "Quando sarò in pensione viaggerò."], explanation: "Future after \"quando\" for a future time." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you arrive] late, call me. (to a friend)", sentence: "___ tardi, chiamami.", answer: "Se arrivi", altAnswers: ["Se arriverai"], explanation: "Uncertain: \"se\"." },
        ],
      },
      {
        heading: "Se as whether",
        body: [
          "\"Se\" also means whether, after verbs like \"sapere\", \"chiedere\" and \"dipendere\": \"Non so se viene\" (I don't know if / whether he's coming), \"Dipende se piove\" (it depends whether it rains). \"Quando\" can't replace it here.",
          "And \"quando\" for a repeated situation means whenever: \"Quando piove, il traffico è un disastro\" (whenever it rains, the traffic is a disaster).",
        ],
        examples: [
          { es: "Non so se viene.", en: "I don't know if he's coming." },
          { es: "Dipende se piove.", en: "It depends whether it rains." },
          { es: "Quando piove, il traffico è un disastro.", en: "Whenever it rains, the traffic is a disaster." },
          { es: "Mi chiedo se ha ricevuto la lettera.", en: "I wonder whether she got the letter." },
          { es: "Quando finisco di lavorare, vado sempre a correre.", en: "Whenever I finish work, I always go running." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know if he's coming.", answer: "Non so se viene.", altAnswers: ["Non so se verrà.", "Non so se lui viene."], explanation: "\"Se\" = whether after \"sapere\"." },
          { type: "listen-choose", audio: "Quando piove, il traffico è un disastro.", question: "What does it mean?", options: ["Whenever it rains, the traffic is a disaster.", "If it rains, the traffic might be a disaster.", "When it rained, the traffic was a disaster.", "It will rain, and the traffic will be a disaster."], correctIndex: 0, explanation: "\"Quando\" + present for a repeated situation: whenever." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I have time, I'll write to you. (to a friend)", answer: "Se avrò tempo, ti scriverò.", altAnswers: ["Se ho tempo, ti scrivo.", "Se ho tempo, ti scriverò.", "Ti scriverò se avrò tempo."], explanation: "Uncertain: \"se\"; future in both clauses in careful Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I have time, I'll write to you. (to a friend)", answer: "Quando avrò tempo, ti scriverò.", altAnswers: ["Quando ho tempo, ti scrivo.", "Ti scriverò quando avrò tempo."], explanation: "Sure to happen: \"quando\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It depends whether it rains.", answer: "Dipende se piove.", altAnswers: ["Dipende se pioverà.", "Dipende dal fatto che piova o no."], explanation: "\"Se\" = whether." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you arrive, call me. (to a friend)", answer: "Quando arrivi, chiamami.", altAnswers: ["Quando arriverai, chiamami.", "Chiamami quando arrivi."], explanation: "Sure to arrive: \"quando\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wonder whether she got the letter.", answer: "Mi chiedo se ha ricevuto la lettera.", altAnswers: ["Mi domando se ha ricevuto la lettera.", "Chissà se ha ricevuto la lettera."], explanation: "\"Chiedersi se\" = to wonder whether." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[When] the film finishes, we'll go for a pizza.", sentence: "___ finisce il film, andiamo a mangiare una pizza.", answer: "Quando", explanation: "The film will certainly finish: \"quando\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If] the film is boring, we'll leave.", sentence: "___ il film è noioso, usciamo.", answer: "Se", explanation: "Maybe it will be boring: \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[When I'm] in Rome, I'll visit you. (to a friend)", sentence: "___ a Roma, verrò a trovarti.", answer: "Quando sarò", altAnswers: ["Quando starò"], explanation: "Future after \"quando\" in careful Italian." },
      { type: "multiple-choice", question: "Your flight lands at 6pm. What do you write to your friend?", options: ["Quando atterro, ti mando un messaggio.", "Se atterro, ti mando un messaggio.", "Se atterrassi, ti mando un messaggio.", "Quando atterrerei, ti mando un messaggio."], correctIndex: 0, explanation: "Landing is expected: \"quando\". \"Se atterro\" would sound alarming!" },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "Se vinciamo, festeggiamo.", right: "If we win, we'll celebrate." }, { left: "Quando vinciamo, festeggiamo.", right: "Whenever we win, we celebrate." }, { left: "Non so se vinciamo.", right: "I don't know whether we'll win." }, { left: "Quando avremo vinto, festeggeremo.", right: "When we've won, we'll celebrate." }], explanation: "\"Se\" = if or whether; \"quando\" = when or whenever." },
      { type: "dictation", audio: "Quando sarai grande, capirai.", explanation: "Future after \"quando\": \"sarai\"." },
      { type: "speak", text: "Quando arrivo a Firenze ti chiamo, e se ho tempo passo a trovarti.", prompt: "Say it in Italian: When I get to Florence I'll call you, and if I have time I'll drop by to see you.", tip: "\"Firenze\": stress on RE, fi-REN-ze.", explanation: "Certain arrival: \"quando\"; uncertain time: \"se\"." },
    ],
  },
  {
    slug: "b1-drill-conditions-and-commands",
    level: "IT-B1",
    number: 6,
    title: "Drill: If ... Then Do This",
    summary: "High-repetition production of se + present or future followed by a command, for tu, voi and Lei.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Condition + command",
        body: [
          "\"Se\" + present (or future, or passato prossimo), then an imperative. \"Tu\" / \"voi\": pronouns attach (\"chiamami\", \"scriveteci\"); negative \"tu\" uses \"non\" + infinitive (\"non preoccuparti\"). \"Lei\": pronouns before (\"mi chiami\", \"non si preoccupi\").",
        ],
        examples: [
          { es: "Se ti perdi, chiamami.", en: "If you get lost, call me." },
          { es: "Se fa freddo, mettetevi il cappotto.", en: "If it's cold, put your coats on. (plural)" },
          { es: "Se non trova il parcheggio, lasci la macchina in garage.", en: "If you can't find parking, leave the car in the garage. (polite)" },
          { es: "Se il bambino piange, non preoccuparti.", en: "If the baby cries, don't worry." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you get lost, call me. (to a friend)", answer: "Se ti perdi, chiamami.", altAnswers: ["Chiamami se ti perdi.", "Se ti perdi, telefonami."], explanation: "Reflexive \"perdersi\"; \"tu\" command with \"mi\" attached." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the baby cries, don't worry. (to a friend)", answer: "Se il bambino piange, non preoccuparti.", altAnswers: ["Se il bambino piange, non ti preoccupare.", "Se la bambina piange, non preoccuparti.", "Se la bambina piange, non ti preoccupare."], explanation: "Negative \"tu\" command: \"non\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it's cold, put your coats on. (plural)", answer: "Se fa freddo, mettetevi il cappotto.", altAnswers: ["Se fa freddo, mettetevi i cappotti.", "Mettetevi il cappotto se fa freddo."], explanation: "\"Voi\" reflexive command: \"mettetevi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you can't find parking, leave the car in the garage. (polite)", answer: "Se non trova parcheggio, lasci la macchina in garage.", altAnswers: ["Se non trova il parcheggio, lasci la macchina in garage.", "Se non trova posto, lasci la macchina in garage."], explanation: "\"Lei\" command: \"lasci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you see Luca, say hello to him for me. (to a friend)", answer: "Se vedi Luca, salutamelo.", altAnswers: ["Se vedi Luca, salutalo da parte mia.", "Se vedi Luca, salutalo per me."], explanation: "\"Salutamelo\" = say hello to him for me." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you need the car, take it. (to a friend)", answer: "Se ti serve la macchina, prendila.", altAnswers: ["Se hai bisogno della macchina, prendila.", "Prendi la macchina se ti serve."], explanation: "\"Servire\" = to be needed; \"prendila\": pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you have a fever, stay in bed. (plural)", answer: "Se avete la febbre, restate a letto.", altAnswers: ["Se avete la febbre, rimanete a letto.", "Restate a letto se avete la febbre."], explanation: "\"Voi\" command." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you don't feel well, sit down. (polite)", answer: "Se non si sente bene, si sieda.", altAnswers: ["Se non sta bene, si sieda.", "Si sieda se non si sente bene."], explanation: "\"Lei\" reflexive command: \"si sieda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they call, tell them I'm not here. (to a friend)", answer: "Se chiamano, di' che non ci sono.", altAnswers: ["Se chiamano, digli che non ci sono.", "Se telefonano, di' che non ci sono.", "Se telefonano, digli che non ci sono."], explanation: "\"Di'\" is the short \"tu\" command of \"dire\"; \"digli\" = tell them." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you've finished, hand in the test. (plural)", answer: "Se avete finito, consegnate il compito.", altAnswers: ["Se avete finito, consegnate la verifica.", "Consegnate il compito se avete finito."], explanation: "Passato prossimo condition + \"voi\" command." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you go out, [close the door]. (to a friend)", sentence: "Se esci, ___.", answer: "chiudi la porta", explanation: "\"Tu\" command: \"chiudi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you're late, [don't run]. (to a friend)", sentence: "Se sei in ritardo, ___.", answer: "non correre", explanation: "Negative \"tu\" command: \"non\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you want more information, [write to us]. (polite)", sentence: "Se desidera altre informazioni, ___.", answer: "ci scriva", explanation: "\"Lei\" command: pronoun before." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you find the keys, [give them to me]. (to a friend)", sentence: "Se trovi le chiavi, ___.", answer: "dammele", explanation: "\"Da'\" + \"me\" + \"le\": the d doubles the m." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If it rains, [don't go out]. (plural)", sentence: "Se piove, ___.", answer: "non uscite", explanation: "Negative \"voi\" command keeps the normal form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you have any problems, [don't hesitate] to contact me. (polite)", sentence: "Se ha problemi, ___ a contattarmi.", answer: "non esiti", explanation: "Negative \"Lei\" command." },
      { type: "word-order", prompt: "Put the words in order to say: If you're thirsty, take some water from the fridge.", words: ["Se", "hai", "sete,", "prendi", "l'acqua", "dal", "frigo."], translation: "If you're thirsty, take some water from the fridge.", explanation: "\"Avere sete\" = to be thirsty." },
      { type: "multiple-choice", question: "Which is the correct Lei command? If you've lost your ticket, go to the counter.", options: ["Se ha perso il biglietto, vada allo sportello.", "Se ha perso il biglietto, vai allo sportello.", "Se ha perso il biglietto, va' allo sportello.", "Se ha perso il biglietto, andrebbe allo sportello."], correctIndex: 0, explanation: "\"Lei\" imperative of \"andare\": \"vada\"." },
      { type: "listen-choose", audio: "Se senti l'allarme, esci subito dall'edificio.", question: "What should you do if you hear the alarm?", options: ["Leave the building immediately", "Call the speaker", "Stay inside", "Switch it off"], correctIndex: 0, explanation: "\"Esci subito\" = go out immediately." },
      { type: "dictation", audio: "Se hai dubbi, chiedi pure.", explanation: "\"Pure\" softens the command: go ahead and ask." },
      { type: "dictation", audio: "Se non trova la strada, mi chiami.", explanation: "\"Lei\" command: \"mi chiami\"." },
      { type: "speak", text: "Se arrivi prima di me, prendi le chiavi dalla vicina e accomodati.", prompt: "Say it in Italian: If you get there before me, get the keys from the neighbour and make yourself at home.", tip: "\"Accomodati\": double c and double m, ac-CO-mo-da-ti.", explanation: "Condition + two \"tu\" commands." },
    ],
  },
  {
    slug: "b1-error-hunt-real-if",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Real Conditions",
    summary: "Fix the classic slips: se piove domani, rimarrei a casa; se piova; and see why se sarà bel tempo, andiamo is fine in speech but not in writing.",
    duration: "17 min",
    sections: [
      {
        heading: "No conditional, no subjunctive",
        body: [
          "Each sentence below was written by a learner and has one mistake. \"Se piove domani, rimarrei a casa\" mixes a real condition with a conditional result. If the rain is a real possibility, the result is real too: \"resto a casa\" or \"rimarrò a casa\".",
          "\"Se piova\" borrows the subjunctive from \"penso che\" and \"benché\". A real \"se\" takes the indicative: \"se piove\".",
        ],
        examples: [
          { es: "Se piove domani, resto a casa.", en: "If it rains tomorrow, I'll stay at home." },
          { es: "Se pioverà domani, rimarrò a casa.", en: "If it rains tomorrow, I'll stay at home." },
          { es: "Se hai tempo, passa da me.", en: "If you have time, drop by." },
          { es: "Se il negozio è aperto, compro il pane.", en: "If the shop's open, I'll buy bread." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se piove domani, rimarrei a casa\". Write it correctly: If it rains tomorrow, I'll stay at home.", source: "If it rains tomorrow, I'll stay at home.", answer: "Se piove domani, resto a casa.", altAnswers: ["Se pioverà domani, rimarrò a casa.", "Se piove domani, rimango a casa.", "Se piove domani, rimarrò a casa.", "Se domani piove, resto a casa.", "Se domani pioverà, rimarrò a casa."], explanation: "Real condition, real result: present or future, never the conditional." },
          { type: "fill-blank", prompt: "A learner wrote \"Se abbia tempo, passa da me\". Write the Italian for the bold words.", en: "[If you have] time, drop by.", sentence: "___ tempo, passa da me.", answer: "Se hai", explanation: "Real \"se\" + indicative: \"se hai\"." },
        ],
      },
      {
        heading: "Mixing tenses: speech and writing",
        body: [
          "\"Se sarà bel tempo, andiamo al mare\" isn't wrong in conversation, but it's lopsided: future in the condition, present in the result. In writing, match the tenses: \"Se sarà bel tempo, andremo al mare\", or keep both in the present: \"Se è bel tempo, andiamo al mare\".",
          "Another slip: \"Quando arrivi domani, ti chiamerei\". The conditional has no place here: \"ti chiamo\" or \"ti chiamerò\".",
        ],
        examples: [
          { es: "Se sarà bel tempo, andremo al mare.", en: "If the weather's nice, we'll go to the seaside." },
          { es: "Se è bel tempo, andiamo al mare.", en: "If the weather's nice, we'll go to the seaside. (spoken)" },
          { es: "Quando arrivi domani, ti chiamo.", en: "When you arrive tomorrow, I'll call you." },
          { es: "Se vincerai, ti porterò a cena.", en: "If you win, I'll take you to dinner." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se sarà bel tempo, andiamo al mare\" in an essay. Write it in careful written Italian: If the weather's nice, we'll go to the seaside.", source: "If the weather's nice, we'll go to the seaside.", answer: "Se sarà bel tempo, andremo al mare.", altAnswers: ["Se farà bel tempo, andremo al mare.", "Se è bel tempo, andiamo al mare.", "Se fa bel tempo, andiamo al mare."], explanation: "In writing, match the tenses: future + future, or present + present." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Quando arrivi domani, ti chiamo.", "Quando arrivi domani, ti chiamerei.", "Quando arriveresti domani, ti chiamo.", "Quando arrivassi domani, ti chiamo."], correctIndex: 0, explanation: "No conditional or subjunctive with a real \"quando\"." },
        ],
      },
      {
        heading: "Se: pronouns and elision",
        body: [
          "Last trap: \"Se tu vuoi\" is correct but heavy; Italians drop the pronoun unless it contrasts: \"Se vuoi\". And \"se\" never elides: \"se è\", not \"s'è\" (which is a different word, a short form of \"si è\").",
        ],
        examples: [
          { es: "Se vuoi, vengo anch'io.", en: "If you like, I'll come too." },
          { es: "Se è vero, è una bella notizia.", en: "If it's true, it's good news." },
          { es: "Se tu non vieni, non vengo neanche io.", en: "If you're not coming, I'm not coming either." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it's true, it's good news.", answer: "Se è vero, è una bella notizia.", altAnswers: ["Se è vero, è una buona notizia.", "Se è vero è una bella notizia."], explanation: "\"Se è\": no elision." },
          { type: "listen-choose", audio: "Se tu non vieni, non vengo neanche io.", question: "Why does the speaker say \"tu\"?", options: ["To contrast you and me", "Because \"se\" always needs a pronoun", "To be polite", "Because it's a question"], correctIndex: 0, explanation: "Subject pronouns appear for contrast: you ... I." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se avresti tempo, chiamami\". Write it correctly: If you have time, call me.", source: "If you have time, call me.", answer: "Se hai tempo, chiamami.", altAnswers: ["Chiamami se hai tempo.", "Se avrai tempo, chiamami."], explanation: "Never the conditional after a real \"se\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se mangi troppo, staresti male\". Write it correctly: If you eat too much, you'll feel ill.", source: "If you eat too much, you'll feel ill.", answer: "Se mangi troppo, stai male.", altAnswers: ["Se mangi troppo, starai male.", "Se mangerai troppo, starai male."], explanation: "Real result: present or future." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se sia possibile, vorrei un tavolo vicino alla finestra\". Write it correctly: If it's possible, I'd like a table near the window.", source: "If it's possible, I'd like a table near the window.", answer: "Se è possibile, vorrei un tavolo vicino alla finestra.", altAnswers: ["Se possibile, vorrei un tavolo vicino alla finestra.", "Vorrei un tavolo vicino alla finestra, se è possibile."], explanation: "\"Se è possibile\" or simply \"se possibile\"; \"vorrei\" is a polite request, not part of the condition." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se studierai, passi l'esame\" in an essay. Write it in careful Italian: If you study, you'll pass the exam.", source: "If you study, you'll pass the exam.", answer: "Se studierai, passerai l'esame.", altAnswers: ["Se studi, passi l'esame.", "Se studierai, supererai l'esame."], explanation: "Match the tenses in writing." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se vengono, li darei il regalo\". Write it correctly: If they come, I'll give them the present.", source: "If they come, I'll give them the present.", answer: "Se vengono, gli do il regalo.", altAnswers: ["Se verranno, gli darò il regalo.", "Se vengono, darò loro il regalo.", "Se verranno, darò loro il regalo."], explanation: "Two fixes: real result (\"do\" / \"darò\") and the indirect pronoun \"gli\" (to them)." },
      { type: "fill-blank", prompt: "A learner wrote \"Se pioverebbe, prendiamo l'autobus\". Write the Italian for the bold words.", en: "[If it rains], we'll take the bus.", sentence: "___, prendiamo l'autobus.", answer: "Se piove", explanation: "Present indicative after \"se\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Se hai finito, potresti andare\" meaning permission. Write the Italian for the bold words.", en: "If you've finished, [you can go].", sentence: "Se hai finito, ___.", answer: "puoi andare", explanation: "Real permission: present \"puoi\"." },
      { type: "word-order", prompt: "Put the words in order to say: If you're not coming, I'm not coming either.", words: ["Se", "tu", "non", "vieni,", "non", "vengo", "neanche", "io."], translation: "If you're not coming, I'm not coming either.", explanation: "Pronouns for contrast; \"neanche io\" = me neither." },
      { type: "multiple-choice", question: "Which sentence has no mistake?", options: ["Se trovi un taxi, prendilo.", "Se trovi un taxi, prenderesti.", "Se trovassi un taxi, prendilo.", "Se troverai un taxi, prenderesti."], correctIndex: 0, explanation: "Real condition + imperative." },
      { type: "dictation", audio: "Se domani piove, rimandiamo la gita.", explanation: "Present + present: \"rimandare\" = to postpone." },
      { type: "speak", text: "Se domani piove, restiamo a casa; se è bel tempo, andiamo in montagna.", prompt: "Say it in Italian: If it rains tomorrow, we'll stay at home; if the weather's nice, we'll go to the mountains.", tip: "\"Montagna\": gn as in canyon, mon-TA-gna.", explanation: "Two real conditions, present + present." },
    ],
  },
  {
    slug: "b1-dialogue-lab-weekend-plan-b",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: Plan B",
    summary: "Plan a Saturday hike in the hills above Genoa with a back-up for everything: se piove, andiamo al museo; se c'è sciopero, prendiamo la macchina.",
    duration: "17 min",
    sections: [
      {
        heading: "Plan A",
        body: [
          "Chiara and Matteo, two friends from Genoa, are planning a hike on the coastal path to Portofino on Saturday. Chiara is the organiser; Matteo worries about everything. Listen for \"se\" + present in quick planning talk.",
          "Chiara: \"Se partiamo alle otto, arriviamo a Camogli alle nove\". Matteo: \"E se piove?\".",
        ],
        examples: [
          { es: "Se partiamo alle otto, arriviamo a Camogli alle nove.", en: "If we leave at eight, we'll get to Camogli at nine." },
          { es: "Da lì il sentiero è bellissimo.", en: "From there the path is beautiful." },
          { es: "E se piove?", en: "And what if it rains?" },
          { es: "Se piove, andiamo all'Acquario.", en: "If it rains, we'll go to the Aquarium." },
          { es: "Ok, ma se piove solo la mattina?", en: "OK, but what if it only rains in the morning?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we leave at eight, we'll get to Camogli at nine.", answer: "Se partiamo alle otto, arriviamo a Camogli alle nove.", altAnswers: ["Se partiremo alle otto, arriveremo a Camogli alle nove.", "Se partiamo alle otto, arriviamo alle nove a Camogli."], explanation: "Near plan in speech: present + present." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And what if it rains?", answer: "E se piove?", altAnswers: ["E se pioverà?"], explanation: "\"E se ...?\" = what if ...?" },
        ],
      },
      {
        heading: "Plan B, C and D",
        body: [
          "Matteo keeps going. Strike? \"Se c'è sciopero dei treni, prendiamo la macchina\", says Chiara. No parking? \"Se non troviamo parcheggio, la lasciamo a Recco e prendiamo il battello\" (we leave it in Recco and take the boat).",
          "Matteo, with a smile: \"E se ci perdiamo?\" Chiara: \"Se ci perdiamo, chiediamo. Dai, Matteo!\"",
        ],
        examples: [
          { es: "Se c'è sciopero dei treni, prendiamo la macchina.", en: "If there's a train strike, we'll take the car." },
          { es: "Se non troviamo parcheggio, la lasciamo a Recco.", en: "If we don't find parking, we'll leave it in Recco." },
          { es: "E poi prendiamo il battello.", en: "And then we'll take the boat." },
          { es: "E se ci perdiamo?", en: "And what if we get lost?" },
          { es: "Se ci perdiamo, chiediamo. Dai, Matteo!", en: "If we get lost, we'll ask. Come on, Matteo!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's a train strike, we'll take the car.", answer: "Se c'è sciopero dei treni, prendiamo la macchina.", altAnswers: ["Se c'è lo sciopero dei treni, prendiamo la macchina.", "Se ci sarà sciopero dei treni, prenderemo la macchina.", "Se c'è uno sciopero dei treni, prendiamo la macchina."], explanation: "\"Sciopero\" = strike; present + present." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "And what if [we get lost]?", sentence: "E se ___?", answer: "ci perdiamo", explanation: "Reflexive \"perdersi\": \"ci perdiamo\"." },
          { type: "listen-choose", audio: "Se non troviamo parcheggio, la lasciamo a Recco.", question: "What will they do if there's no parking?", options: ["Leave the car in Recco", "Go home", "Park illegally", "Take the train instead"], correctIndex: 0, explanation: "\"La lasciamo a Recco\": \"la\" = the car." },
        ],
      },
      {
        heading: "The deal",
        body: [
          "Finally they agree. Chiara sums up in the future, the careful version: \"Allora: se sabato farà bel tempo, faremo il sentiero; se pioverà, andremo all'Acquario\". Matteo adds one condition of his own: \"Se arriviamo a Portofino, il gelato lo offro io\" (if we make it to Portofino, the ice cream's on me).",
        ],
        examples: [
          { es: "Se sabato farà bel tempo, faremo il sentiero.", en: "If the weather's nice on Saturday, we'll do the path." },
          { es: "Se pioverà, andremo all'Acquario.", en: "If it rains, we'll go to the Aquarium." },
          { es: "Se arriviamo a Portofino, il gelato lo offro io.", en: "If we make it to Portofino, the ice cream's on me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we make it to Portofino, the ice cream's on me.", answer: "Se arriviamo a Portofino, il gelato lo offro io.", altAnswers: ["Se arriviamo a Portofino, offro io il gelato.", "Se arriveremo a Portofino, il gelato lo offro io."], explanation: "\"Offrire\" = to treat; \"il gelato lo offro io\" puts the ice cream first for emphasis." },
          { type: "multiple-choice", question: "Chiara's summary uses the future in both clauses. Why?", options: ["It's a careful, complete plan for a future day.", "Because it's a hypothesis that won't happen.", "Because \"se\" always needs the future.", "Because she's talking about the past."], correctIndex: 0, explanation: "Future + future is the careful form; present + present is the relaxed one." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it rains, we'll go to the Aquarium.", answer: "Se piove, andiamo all'Acquario.", altAnswers: ["Se pioverà, andremo all'Acquario.", "Se piove, andremo all'Acquario."], explanation: "Present + present, or future + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we get lost, we'll ask.", answer: "Se ci perdiamo, chiediamo.", altAnswers: ["Se ci perderemo, chiederemo.", "Se ci perdiamo, chiederemo."], explanation: "Reflexive \"perdersi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "From there the path is beautiful.", answer: "Da lì il sentiero è bellissimo.", altAnswers: ["Da lì il sentiero è molto bello."], explanation: "\"Il sentiero\" = the path, the trail." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the weather's nice on Saturday, we'll do the path.", answer: "Se sabato farà bel tempo, faremo il sentiero.", altAnswers: ["Se sabato fa bel tempo, facciamo il sentiero.", "Se farà bel tempo sabato, faremo il sentiero."], explanation: "\"Fare bel tempo\" for nice weather." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we're tired, we'll take the boat back.", answer: "Se siamo stanchi, torniamo in battello.", altAnswers: ["Se saremo stanchi, torneremo in battello.", "Se siamo stanche, torniamo in battello.", "Se siamo stanchi, torniamo col battello.", "Se siamo stanchi, torniamo con il battello."], explanation: "\"In battello\" = by boat." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If it only rains in the morning, [we'll leave] after lunch.", sentence: "Se piove solo la mattina, ___ dopo pranzo.", answer: "partiamo", altAnswers: ["partiremo"], explanation: "Present or future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you bring] the sandwiches, I'll bring the water. (to a friend)", sentence: "___ i panini, io porto l'acqua.", answer: "Se porti", altAnswers: ["Se tu porti"], explanation: "\"Se porti ..., io porto ...\": contrast with \"io\"." },
      { type: "word-order", prompt: "Put the words in order to say: If there's a strike, we'll take the car.", words: ["Se", "c'è", "sciopero,", "prendiamo", "la", "macchina."], translation: "If there's a strike, we'll take the car.", explanation: "Present + present for a near plan." },
      { type: "multiple-choice", question: "Matteo says \"E se ci perdiamo?\". What is he doing?", options: ["Raising a worry about getting lost", "Saying they got lost", "Promising they won't get lost", "Asking for directions"], correctIndex: 0, explanation: "\"E se ...?\" introduces a what-if worry." },
      { type: "dictation", audio: "Se c'è il sole, facciamo il bagno a Portofino.", explanation: "\"Fare il bagno\" = to go for a swim." },
      { type: "speak", text: "Allora: se fa bel tempo, facciamo il sentiero; se piove, andiamo al museo; se c'è sciopero, prendiamo la macchina.", prompt: "Sum up the plan: So: if the weather's nice, we'll do the path; if it rains, we'll go to the museum; if there's a strike, we'll take the car.", tip: "Give each condition a rising tone, each result a falling one.", explanation: "Three real conditions in relaxed spoken Italian." },
    ],
  },
  {
    slug: "b1-reading-lab-instructions",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: Instructions and Warnings",
    summary: "Read if-sentences in a manual, a station notice and a holiday-flat sheet, where Italian uses the infinitive for instructions.",
    duration: "18 min",
    sections: [
      {
        heading: "A washing machine manual",
        body: [
          "Manuals and notices give instructions in the infinitive, not the imperative: \"Se il display lampeggia, premere il tasto Start\" (if the display flashes, press the Start button). It's impersonal and neutral, like English press here.",
          "Read these lines from the manual of a washing machine. The conditions use \"se\" + present, and \"in caso di\" + noun.",
        ],
        examples: [
          { es: "Se il display lampeggia, premere il tasto Start.", en: "If the display flashes, press the Start button." },
          { es: "Se l'oblò non si apre, attendere due minuti.", en: "If the door won't open, wait two minutes." },
          { es: "In caso di perdite d'acqua, chiudere il rubinetto.", en: "In the event of water leaks, turn off the tap." },
          { es: "Se il problema persiste, contattare l'assistenza.", en: "If the problem persists, contact customer service." },
          { es: "Non aprire lo sportello se la macchina è in funzione.", en: "Do not open the door while the machine is running." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the style of a manual.", source: "If the problem persists, contact customer service.", answer: "Se il problema persiste, contattare l'assistenza.", altAnswers: ["Se il problema persiste, contattare il servizio clienti."], explanation: "Manuals use the infinitive for instructions." },
          { type: "multiple-choice", question: "\"Se l'oblò non si apre, attendere due minuti.\" What should you do?", options: ["Wait two minutes", "Call for help", "Press Start", "Turn off the tap"], correctIndex: 0, explanation: "\"Attendere\" = to wait (formal)." },
        ],
      },
      {
        heading: "At the station",
        body: [
          "A notice at Firenze Santa Maria Novella. Signs mix \"in caso di\", \"se\" and the infinitive, and they love formal verbs: \"rivolgersi\" (to apply to, to go to), \"convalidare\" (to validate).",
        ],
        examples: [
          { es: "In caso di sciopero, consultare il sito per i treni garantiti.", en: "In the event of a strike, check the website for guaranteed trains." },
          { es: "Se il biglietto è cartaceo, convalidarlo prima di salire.", en: "If your ticket is on paper, validate it before boarding." },
          { es: "In caso di smarrimento, rivolgersi all'ufficio Oggetti Smarriti.", en: "If you lose something, go to the Lost Property office." },
          { es: "In caso di emergenza, premere il pulsante rosso.", en: "In an emergency, press the red button." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the style of a notice.", source: "In an emergency, press the red button.", answer: "In caso di emergenza, premere il pulsante rosso.", altAnswers: ["In caso di emergenza premere il pulsante rosso."], explanation: "\"In caso di\" + noun, then an infinitive." },
          { type: "listen-choose", audio: "Se il biglietto è cartaceo, convalidarlo prima di salire.", question: "What does the notice ask?", options: ["Validate a paper ticket before boarding", "Buy a paper ticket on board", "Show your ticket at the exit", "Print your ticket at home"], correctIndex: 0, explanation: "\"Cartaceo\" = on paper; \"convalidarlo\" = validate it." },
        ],
      },
      {
        heading: "The holiday flat",
        body: [
          "Finally, the sheet a host leaves in a holiday flat in Lecce. Here the tone is friendly, so it uses \"voi\" commands instead of infinitives.",
        ],
        examples: [
          { es: "Se salta la corrente, controllate il contatore vicino alla porta.", en: "If the power goes off, check the meter by the door." },
          { es: "Se uscite, chiudete bene le finestre: qui il vento è forte.", en: "If you go out, close the windows properly: the wind is strong here." },
          { es: "Se avete bisogno di qualcosa, scriveteci su WhatsApp.", en: "If you need anything, message us on WhatsApp." },
          { es: "Se partite presto, lasciate le chiavi nella cassetta.", en: "If you leave early, leave the keys in the box." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you need anything, message us on WhatsApp. (plural)", answer: "Se avete bisogno di qualcosa, scriveteci su WhatsApp.", altAnswers: ["Se vi serve qualcosa, scriveteci su WhatsApp.", "Se avete bisogno, scriveteci su WhatsApp."], explanation: "Friendly \"voi\" command; \"ci\" attached." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the power goes off, [check] the meter by the door. (plural)", sentence: "Se salta la corrente, ___ il contatore vicino alla porta.", answer: "controllate", explanation: "\"Voi\" command: \"controllate\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the style of a manual.", source: "If the display flashes, press the Start button.", answer: "Se il display lampeggia, premere il tasto Start.", altAnswers: ["Se il display lampeggia, premere il pulsante Start."], explanation: "Infinitive for instructions." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the style of a manual.", source: "In the event of water leaks, turn off the tap.", answer: "In caso di perdite d'acqua, chiudere il rubinetto.", altAnswers: ["In caso di perdite, chiudere il rubinetto."], explanation: "\"In caso di\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you go out, close the windows properly. (plural)", answer: "Se uscite, chiudete bene le finestre.", altAnswers: ["Chiudete bene le finestre se uscite."], explanation: "\"Bene\" = properly." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you leave early, leave the keys in the box. (plural)", answer: "Se partite presto, lasciate le chiavi nella cassetta.", altAnswers: ["Se partite presto, lasciate le chiavi nella cassetta delle chiavi."], explanation: "\"Partire\" (to leave a place) vs \"lasciare\" (to leave something)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in the style of a manual.", en: "Do not open the door [if the machine is running].", sentence: "Non aprire lo sportello ___.", answer: "se la macchina è in funzione", explanation: "\"In funzione\" = running, in operation." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in the style of a notice.", en: "If you lose something, [go to] the Lost Property office.", sentence: "In caso di smarrimento, ___ all'ufficio Oggetti Smarriti.", answer: "rivolgersi", explanation: "\"Rivolgersi a\" = to go to, contact (formal)." },
      { type: "word-order", prompt: "Put the words in order to say: If the door won't open, wait two minutes.", words: ["Se", "l'oblò", "non", "si", "apre,", "attendere", "due", "minuti."], translation: "If the door won't open, wait two minutes.", explanation: "\"L'oblò\" = the round door of a washing machine." },
      { type: "multiple-choice", question: "Why do manuals write \"premere\" instead of \"premi\" or \"prema\"?", options: ["The infinitive is the neutral, impersonal form for written instructions.", "Because \"premere\" is the future.", "Because the reader is always formal.", "Because \"se\" requires the infinitive."], correctIndex: 0, explanation: "Instructions, recipes and notices use the infinitive." },
      { type: "multi-select", question: "Which sentences sound like a manual or a notice? Choose all that apply.", options: ["In caso di incendio, non usare l'ascensore.", "Se hai fame, mangia qualcosa!", "Se il problema persiste, contattare l'assistenza.", "Se ti va, andiamo al cinema."], correctIndexes: [0, 2], explanation: "Infinitives and \"in caso di\" mark written instructions." },
      { type: "dictation", audio: "In caso di incendio, non usare l'ascensore.", explanation: "Negative instruction: \"non\" + infinitive." },
      { type: "speak", text: "Se salta la corrente, controllate il contatore; se avete bisogno, scriveteci.", prompt: "Tell your guests: If the power goes off, check the meter; if you need anything, message us.", tip: "\"Scriveteci\": stress on VE, scri-VE-te-ci.", explanation: "Friendly \"voi\" commands after \"se\"." },
    ],
  },
  {
    slug: "b1-mission-house-sitting",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: If Anything Happens",
    summary: "Write instructions for a house-sitter in your flat in Turin: se suona l'allarme, chiama questo numero; se il gatto non mangia, non preoccuparti.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The emergencies",
        body: [
          "Your mission: you're going away for two weeks and your friend Giacomo is staying in your flat in Turin to look after the cat. Write him a note. Start with the emergencies: \"Se suona l'allarme, chiama questo numero\", \"Se c'è una perdita d'acqua, chiudi il rubinetto generale sotto il lavello\".",
          "With a friend, use \"tu\" commands, not infinitives: the note should sound like you.",
        ],
        examples: [
          { es: "Se suona l'allarme, chiama questo numero.", en: "If the alarm goes off, call this number." },
          { es: "Se c'è una perdita d'acqua, chiudi il rubinetto generale sotto il lavello.", en: "If there's a water leak, turn off the main tap under the sink." },
          { es: "Se salta la luce, il quadro elettrico è nell'ingresso.", en: "If the electricity goes, the fuse box is in the hall." },
          { es: "Se perdi le chiavi, ce n'è una copia dalla portinaia.", en: "If you lose the keys, there's a copy with the concierge." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the alarm goes off, call this number. (to a friend)", answer: "Se suona l'allarme, chiama questo numero.", altAnswers: ["Se scatta l'allarme, chiama questo numero.", "Chiama questo numero se suona l'allarme."], explanation: "\"Se\" + present + \"tu\" command." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you lose the keys, [there's a copy] with the concierge.", sentence: "Se perdi le chiavi, ___ dalla portinaia.", answer: "ce n'è una copia", explanation: "\"Ce n'è una\" = there's one (of them)." },
        ],
      },
      {
        heading: "The cat and the plants",
        body: [
          "Next, everyday care: \"Se il gatto non mangia, non preoccuparti: fa sempre così i primi giorni\" (if the cat doesn't eat, don't worry: he always does that the first few days). \"Se fa caldo, innaffia le piante ogni sera\" (if it's hot, water the plants every evening).",
        ],
        examples: [
          { es: "Se il gatto non mangia, non preoccuparti.", en: "If the cat doesn't eat, don't worry." },
          { es: "Fa sempre così i primi giorni.", en: "He always does that the first few days." },
          { es: "Se fa caldo, innaffia le piante ogni sera.", en: "If it's hot, water the plants every evening." },
          { es: "Se miagola di notte, dagli un biscotto.", en: "If he meows at night, give him a treat." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it's hot, water the plants every evening. (to a friend)", answer: "Se fa caldo, innaffia le piante ogni sera.", altAnswers: ["Se fa caldo, annaffia le piante ogni sera.", "Innaffia le piante ogni sera se fa caldo."], explanation: "\"Innaffiare\" and \"annaffiare\" are both correct." },
          { type: "listen-choose", audio: "Se miagola di notte, dagli un biscotto.", question: "What should Giacomo do if the cat meows at night?", options: ["Give him a treat", "Let him out", "Ignore him", "Call the owner"], correctIndex: 0, explanation: "\"Dagli\" = give him: \"da'\" + \"gli\" doubles the g." },
        ],
      },
      {
        heading: "Making yourself at home",
        body: [
          "End warmly: \"Se hai fame, nel frigo c'è di tutto: serviti pure\" (if you're hungry, there's everything in the fridge: help yourself). \"Se vuoi, invita pure degli amici\". And the future for later: \"Se ci saranno problemi, ti chiamerò io dal Portogallo\".",
        ],
        examples: [
          { es: "Se hai fame, nel frigo c'è di tutto: serviti pure.", en: "If you're hungry, there's everything in the fridge: help yourself." },
          { es: "Se vuoi, invita pure degli amici.", en: "If you like, feel free to invite some friends." },
          { es: "Grazie mille, sei un tesoro!", en: "Thanks so much, you're a treasure!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you like, feel free to invite some friends. (to a friend)", answer: "Se vuoi, invita pure degli amici.", altAnswers: ["Se vuoi, invita pure qualche amico.", "Se ti va, invita pure degli amici."], explanation: "\"Pure\" after a command = feel free to." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Help yourself. (to a friend)", answer: "Serviti pure.", altAnswers: ["Serviti."], explanation: "\"Servirsi\" = to help yourself; \"pure\" makes it welcoming." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's a water leak, turn off the main tap. (to a friend)", answer: "Se c'è una perdita d'acqua, chiudi il rubinetto generale.", altAnswers: ["Se c'è una perdita, chiudi il rubinetto generale."], explanation: "\"Il rubinetto generale\" = the main water tap." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the cat doesn't eat, don't worry. (to a friend)", answer: "Se il gatto non mangia, non preoccuparti.", altAnswers: ["Se il gatto non mangia, non ti preoccupare.", "Non preoccuparti se il gatto non mangia."], explanation: "Negative \"tu\" command: \"non preoccuparti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If he meows at night, give him a treat. (to a friend)", answer: "Se miagola di notte, dagli un biscotto.", altAnswers: ["Se di notte miagola, dagli un biscotto.", "Se miagola di notte, dagli un premio."], explanation: "\"Dagli\": double g after \"da'\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the neighbours complain, tell them to call me. (to a friend)", answer: "Se i vicini si lamentano, di' loro di chiamarmi.", altAnswers: ["Se i vicini si lamentano, digli di chiamarmi.", "Se i vicini protestano, digli di chiamarmi."], explanation: "\"Lamentarsi\" = to complain; \"digli\" = tell them." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there are problems, I'll call you from Portugal.", answer: "Se ci saranno problemi, ti chiamerò dal Portogallo.", altAnswers: ["Se ci sono problemi, ti chiamo dal Portogallo.", "Se ci saranno problemi, ti chiamerò io dal Portogallo."], explanation: "Future + future for the coming weeks." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If the electricity goes], the fuse box is in the hall.", sentence: "___, il quadro elettrico è nell'ingresso.", answer: "Se salta la luce", altAnswers: ["Se salta la corrente", "Se va via la luce"], explanation: "\"Saltare\" = to trip, go off (power)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you're hungry, [help yourself]. (to a friend)", sentence: "Se hai fame, ___.", answer: "serviti pure", altAnswers: ["serviti"], explanation: "Reflexive \"tu\" command." },
      { type: "word-order", prompt: "Put the words in order to say: If you go out, lock the door twice.", words: ["Se", "esci,", "chiudi", "la", "porta", "a", "doppia", "mandata."], translation: "If you go out, lock the door twice.", explanation: "\"A doppia mandata\" = double-locked." },
      { type: "multiple-choice", question: "Which tone fits a note to a friend house-sitting?", options: ["Se suona l'allarme, chiama questo numero.", "Se suona l'allarme, chiamare questo numero.", "In caso di allarme, si prega di chiamare.", "Se suona l'allarme, chiami questo numero."], correctIndex: 0, explanation: "A friend gets \"tu\" commands; infinitives and \"si prega\" are for notices." },
      { type: "dictation", audio: "Se hai bisogno di qualcosa, chiedi alla signora del piano di sotto.", explanation: "\"Del piano di sotto\" = from the floor below." },
      { type: "speak", text: "Se il gatto non mangia, non preoccuparti; se suona l'allarme, chiama questo numero; e se hai fame, serviti pure!", prompt: "Give Giacomo the three key instructions: if the cat doesn't eat, don't worry; if the alarm goes off, call this number; and if you're hungry, help yourself!", tip: "\"Preoccuparti\": double c, pre-oc-cu-PAR-ti.", explanation: "Three real conditions with \"tu\" commands." },
    ],
  },
];

export const IT_B1_U15_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your Italian colleague Federica is coming to stay in your city for a weekend and will arrive while you're still at work. Write her a message: tell her what to do in different situations (if her train is late, if she's hungry, if she gets lost, if it rains on Saturday), and what you'll do together depending on the weather.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses se + present with a present, future or tu command (se il treno è in ritardo, scrivimi)",
    "Uses se + future with a future in the main clause for at least one plan (se farà bel tempo, andremo ...)",
    "Uses quando for something certain and se for something uncertain",
    "Never uses the conditional or subjunctive after a real se",
  ],
  modelAnswer: "Ciao Federica! Non vedo l'ora di vederti. Venerdì esco dall'ufficio alle sei, quindi ecco qualche istruzione. Quando arrivi in stazione, prendi l'autobus 12 fino a Piazza Garibaldi. Se il treno è in ritardo, scrivimi un messaggio. Se ti perdi, chiamami: rispondo sempre. Le chiavi sono dal barista sotto casa: se hai fame, prendi pure un panino da lui, offro io! Sabato, se farà bel tempo, andremo al lago in bicicletta; se pioverà, visiteremo il museo di arte moderna e poi andremo al cinema. Se hai altre idee, dimmelo. A venerdì!",
  explanation: "\"Quando arrivi\" is certain; \"se il treno è in ritardo\", \"se ti perdi\" and \"se hai fame\" are possible, each followed by a \"tu\" command. \"Se farà bel tempo, andremo\" and \"se pioverà, visiteremo\" keep the future in both clauses for the planned weekend. \"Offro io\" means it's on me.",
};
