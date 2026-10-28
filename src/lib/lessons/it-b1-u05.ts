// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u05.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 5: The Trapassato Prossimo. Forms (imperfetto of avere /
// essere + participle), agreement, use with quando / dopo che / perché /
// già / mai, contrast with the passato prossimo.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U05: Lesson[] = [
  {
    slug: "b1-trapassato-forms",
    level: "IT-B1",
    number: 1,
    title: "The Trapassato Prossimo: Forms",
    summary: "Form the past perfect with the imperfetto of avere or essere plus the participle: avevo fatto, era uscita, eravamo arrivati.",
    duration: "17 min",
    sections: [
      {
        heading: "Avevo + participle",
        body: [
          "The trapassato prossimo is the Italian past perfect (I had done). Build it exactly like the passato prossimo, but put the auxiliary in the imperfetto: \"ho mangiato\" → \"avevo mangiato\" (I had eaten), \"ha detto\" → \"aveva detto\" (she had said).",
          "The auxiliary forms are ones you know: \"avevo, avevi, aveva, avevamo, avevate, avevano\". The participle doesn't change: \"avevamo finito\", \"avevano visto\".",
          "Any verb that takes \"avere\" in the passato prossimo takes \"avevo\" here, with the same irregular participles: \"fatto, detto, preso, messo, scritto, letto, visto, aperto\".",
        ],
        examples: [
          { es: "Avevo già mangiato.", en: "I had already eaten." },
          { es: "Non avevi detto che venivi?", en: "Hadn't you said you were coming?" },
          { es: "Giulia aveva preso le chiavi.", en: "Giulia had taken the keys." },
          { es: "Avevamo prenotato un tavolo per le otto.", en: "We had booked a table for eight." },
          { es: "Avevano visto il film due volte.", en: "They had seen the film twice." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had already eaten.", answer: "Avevo già mangiato.", altAnswers: ["Io avevo già mangiato."], explanation: "\"Avevo\" + participle; \"già\" in the middle." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [had booked] a table for eight.", sentence: "___ un tavolo per le otto.", answer: "Avevamo prenotato", explanation: "Imperfetto of \"avere\" + participle." },
        ],
      },
      {
        heading: "Ero + participle, with agreement",
        body: [
          "Verbs that take \"essere\" (movement, change of state, reflexives) use \"ero, eri, era, eravamo, eravate, erano\", and the participle agrees with the subject, as in the passato prossimo: \"ero partito\" (a man), \"ero partita\" (a woman), \"eravamo arrivati\".",
          "Reflexive verbs follow the same pattern: \"mi ero svegliato\", \"si era addormentata\", \"ci eravamo conosciuti\".",
        ],
        examples: [
          { es: "Ero appena arrivata a casa.", en: "I had just got home." },
          { es: "Marco era già uscito.", en: "Marco had already gone out." },
          { es: "Eravamo partiti alle sei.", en: "We had left at six." },
          { es: "Si erano conosciuti a Bologna.", en: "They had met in Bologna." },
          { es: "Mi ero dimenticato il portafoglio.", en: "I'd forgotten my wallet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco had already gone out.", answer: "Marco era già uscito.", explanation: "\"Uscire\" takes \"essere\": \"era uscito\"." },
          { type: "multiple-choice", question: "Chiara says: I had just got home. Which is right?", options: ["Ero appena arrivata a casa.", "Avevo appena arrivato a casa.", "Ero appena arrivato a casa.", "Sono appena arrivata a casa."], correctIndex: 0, explanation: "\"Essere\" + agreement with Chiara; \"ero\" for the trapassato." },
        ],
      },
      {
        heading: "Pronouns in the trapassato",
        body: [
          "Pronouns behave as in the passato prossimo: before the auxiliary, with agreement for \"lo, la, li, le, ne\": \"L'avevo vista\" (I had seen her), \"Me l'aveva detto\" (he had told me), \"Ne avevo comprate tre\".",
          "In speech \"avevo\" + pronoun often shortens: \"l'avevo\", \"gliel'avevo detto\", \"te l'avevo detto!\" (I told you so!), a phrase you'll hear all the time.",
        ],
        examples: [
          { es: "Te l'avevo detto!", en: "I told you so!" },
          { es: "La lettera? L'avevo già spedita.", en: "The letter? I'd already sent it." },
          { es: "Le chiavi? Me le aveva date Sara.", en: "The keys? Sara had given them to me." },
          { es: "Biglietti? Ne avevamo comprati quattro.", en: "Tickets? We'd bought four." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I told you so! (to a friend)", answer: "Te l'avevo detto!", explanation: "Trapassato: \"te l'avevo detto\"." },
          { type: "listen-choose", audio: "La lettera? L'avevo già spedita.", question: "What did you hear?", options: ["L'avevo già spedita.", "L'ho già spedita.", "L'avevo già spedito.", "La avevo già spedita."], correctIndex: 0, explanation: "\"Spedita\" agrees with \"la lettera\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia had taken the keys.", answer: "Giulia aveva preso le chiavi.", explanation: "\"Prendere\" → \"preso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They had seen the film twice.", answer: "Avevano visto il film due volte.", altAnswers: ["Loro avevano visto il film due volte.", "Avevano già visto il film due volte."], explanation: "\"Avevano\" + \"visto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had left at six.", answer: "Eravamo partiti alle sei.", altAnswers: ["Eravamo partite alle sei.", "Noi eravamo partiti alle sei."], explanation: "\"Partire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They had met in Bologna.", answer: "Si erano conosciuti a Bologna.", altAnswers: ["Si erano conosciute a Bologna."], explanation: "Reflexive: \"si erano\" + agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd forgotten my wallet. (a woman speaking)", answer: "Mi ero dimenticata il portafoglio.", altAnswers: ["Avevo dimenticato il portafoglio.", "Mi ero scordata il portafoglio."], explanation: "\"Dimenticarsi\" with \"essere\"; plain \"dimenticare\" with \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys? Sara had given them to me.", answer: "Le chiavi? Me le aveva date Sara.", altAnswers: ["Le chiavi? Sara me le aveva date."], explanation: "\"Date\" agrees with \"le chiavi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Hadn't you [said] you were coming?", sentence: "Non ___ che venivi?", answer: "avevi detto", explanation: "\"Avevi\" + \"detto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [had fallen asleep] on the sofa.", sentence: "I bambini ___ sul divano.", answer: "si erano addormentati", explanation: "Reflexive with \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: We had never been to Venice.", words: ["Non", "eravamo", "mai", "stati", "a", "Venezia."], translation: "We had never been to Venice.", explanation: "\"Essere stato\" = to have been." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "avevo letto", right: "I had read" }, { left: "era venuta", right: "she had come" }, { left: "avevamo scritto", right: "we had written" }, { left: "erano tornati", right: "they had come back" }, { left: "ti eri alzato", right: "you had got up" }], explanation: "Imperfetto of the auxiliary + participle." },
      { type: "dictation", audio: "Ero già uscita quando hai chiamato.", explanation: "\"Ero uscita\": essere + agreement." },
      { type: "speak", text: "Te l'avevo detto: avevamo prenotato per le otto, non per le nove!", prompt: "Say it in Italian: I told you so: we had booked for eight, not for nine!", tip: "a-ve-VA-mo: stress on the third syllable.", explanation: "Two trapassato forms." },
    ],
  },
  {
    slug: "b1-trapassato-use",
    level: "IT-B1",
    number: 2,
    title: "Had Done: Using the Trapassato",
    summary: "Use the trapassato for what had already happened before another past event: quando sono arrivato, il film era già cominciato.",
    duration: "17 min",
    sections: [
      {
        heading: "The earlier of two past events",
        body: [
          "Use the trapassato when you're already in the past and you step further back: \"Quando sono arrivato, il film era già cominciato\" (when I arrived, the film had already started). The arrival is the main event; the start of the film came before it.",
          "English often lets the simple past do this job (when I arrived, the film started already sounds wrong, but after she left, I cried is fine). Italian is stricter: if one event clearly comes before another past event, the trapassato marks it.",
          "\"Già\" (already), \"appena\" (just) and \"ancora\" (yet) are the typical companions: \"era già partito\", \"avevamo appena cenato\", \"non avevo ancora finito\".",
        ],
        examples: [
          { es: "Quando sono arrivato, il film era già cominciato.", en: "When I arrived, the film had already started." },
          { es: "Avevamo appena cenato quando è arrivata Sofia.", en: "We had just had dinner when Sofia arrived." },
          { es: "Non avevo ancora finito quando è suonata la campanella.", en: "I hadn't finished yet when the bell rang." },
          { es: "Siamo andati alla stazione, ma il treno era già partito.", en: "We went to the station, but the train had already left." },
          { es: "Ho trovato il libro che avevo perso.", en: "I found the book I had lost." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I arrived, the film had already started.", answer: "Quando sono arrivato, il film era già cominciato.", altAnswers: ["Quando sono arrivata, il film era già cominciato.", "Quando sono arrivato, il film era già iniziato.", "Quando sono arrivata, il film era già iniziato."], explanation: "Main event in the passato prossimo; the earlier one in the trapassato." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We went to the station, but the train [had already left].", sentence: "Siamo andati alla stazione, ma il treno ___.", answer: "era già partito", explanation: "\"Partire\" + essere; \"già\" in the middle." },
        ],
      },
      {
        heading: "Mai prima: experiences up to a past moment",
        body: [
          "\"Non ero mai stato a Venezia prima\" (I'd never been to Venice before): the trapassato counts experiences up to a moment in the past, just as English had never does. \"Era la prima volta che...\" (it was the first time that...) often goes with it.",
        ],
        examples: [
          { es: "Non ero mai stato a Venezia prima.", en: "I'd never been to Venice before." },
          { es: "Non avevo mai mangiato i ricci di mare.", en: "I'd never eaten sea urchins." },
          { es: "Era la prima volta che guidava in città.", en: "It was the first time she had driven in town." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd never been to Venice before. (a woman speaking)", answer: "Non ero mai stata a Venezia prima.", altAnswers: ["Prima non ero mai stata a Venezia."], explanation: "\"Essere stato / stata\" + agreement." },
          { type: "listen-choose", audio: "Non avevo mai mangiato i ricci di mare.", question: "What does it mean?", options: ["I'd never eaten sea urchins.", "I've never eaten sea urchins.", "I didn't eat the sea urchins.", "I never eat sea urchins."], correctIndex: 0, explanation: "\"Avevo mangiato\" = had eaten." },
        ],
      },
      {
        heading: "Explaining why: perché + trapassato",
        body: [
          "To explain a past event, the cause often comes before it: \"Sono arrivato tardi perché avevo perso l'autobus\" (because I'd missed the bus). And when you report what someone said, their past becomes your trapassato: \"Mi ha detto che aveva perso il treno\" (he told me he had missed the train).",
        ],
        examples: [
          { es: "Sono arrivato tardi perché avevo perso l'autobus.", en: "I arrived late because I'd missed the bus." },
          { es: "Mi ha detto che aveva perso il treno.", en: "He told me he had missed the train." },
          { es: "Era stanca perché non aveva dormito.", en: "She was tired because she hadn't slept." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told me he had missed the train.", answer: "Mi ha detto che aveva perso il treno.", explanation: "Reported past → trapassato." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She was tired because she hadn't slept.", answer: "Era stanca perché non aveva dormito.", explanation: "The cause came first: trapassato." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had just had dinner when Sofia arrived.", answer: "Avevamo appena cenato quando è arrivata Sofia.", altAnswers: ["Avevamo appena cenato quando Sofia è arrivata."], explanation: "\"Appena\" = just." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I found the book I had lost.", answer: "Ho trovato il libro che avevo perso.", explanation: "The losing came before the finding." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hadn't finished yet when the bell rang.", answer: "Non avevo ancora finito quando è suonata la campanella.", altAnswers: ["Non avevo ancora finito quando la campanella è suonata."], explanation: "\"Non ... ancora\" = not yet." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I arrived late because I'd missed the bus.", answer: "Sono arrivato tardi perché avevo perso l'autobus.", altAnswers: ["Sono arrivata tardi perché avevo perso l'autobus.", "Sono arrivato in ritardo perché avevo perso l'autobus.", "Sono arrivata in ritardo perché avevo perso l'autobus."], explanation: "Cause before the event: trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was the first time she had driven in town.", answer: "Era la prima volta che guidava in città.", altAnswers: ["Era la prima volta che aveva guidato in città."], explanation: "After \"la prima volta che\" Italian often uses the imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They told us they had already eaten.", answer: "Ci hanno detto che avevano già mangiato.", explanation: "Reported past → trapassato." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When we got to the shop, it [had already closed].", sentence: "Quando siamo arrivati al negozio, ___.", answer: "aveva già chiuso", explanation: "A shop closing: \"avere\" + \"chiuso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [had never seen] the sea before.", sentence: "Prima ___ il mare.", answer: "non avevo mai visto", explanation: "\"Non ... mai\" around the auxiliary." },
      { type: "word-order", prompt: "Put the words in order to say: When I called, she had already left.", words: ["Quando", "ho", "chiamato,", "era", "già", "partita."], translation: "When I called, she had already left.", explanation: "Main event + earlier event." },
      { type: "multiple-choice", question: "Which sentence means the guests arrived BEFORE you finished cooking?", options: ["Gli ospiti erano già arrivati quando ho finito di cucinare.", "Gli ospiti sono arrivati quando avevo finito di cucinare.", "Gli ospiti sono arrivati dopo che avevo finito di cucinare.", "Gli ospiti arrivavano quando cucinavo."], correctIndex: 0, explanation: "The trapassato marks the earlier event: the guests' arrival." },
      { type: "dictation", audio: "Mi ha detto che aveva perso le chiavi.", explanation: "\"Aveva perso\": reported past." },
      { type: "speak", text: "Sono arrivata tardi perché avevo perso l'autobus, e il film era già cominciato.", prompt: "Say it in Italian: I arrived late because I'd missed the bus, and the film had already started.", tip: "a-VE-vo PER-so: keep both clear.", explanation: "Two earlier events, two trapassati." },
    ],
  },
  {
    slug: "b1-drill-trapassato-forms",
    level: "IT-B1",
    number: 3,
    title: "Drill: Trapassato Forms",
    summary: "Produce the trapassato of forty everyday verbs, with avere and essere, in every person.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Auxiliary in the imperfetto",
        body: [
          "\"Avevo, avevi, aveva, avevamo, avevate, avevano\" or \"ero, eri, era, eravamo, eravate, erano\" + participle. With \"essere\", agree with the subject. Irregular participles: \"aperto, bevuto, chiesto, chiuso, corso, deciso, letto, messo, morto, nato, perso, preso, rimasto, risposto, scelto, scritto, speso, venuto, vissuto\".",
        ],
        examples: [
          { es: "Avevi chiuso la porta?", en: "Had you shut the door?" },
          { es: "Era nata a Palermo.", en: "She had been born in Palermo." },
          { es: "Avevamo speso troppo.", en: "We'd spent too much." },
          { es: "Erano rimasti a casa.", en: "They had stayed at home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Had you shut the door? (to a friend)", answer: "Avevi chiuso la porta?", altAnswers: ["Tu avevi chiuso la porta?"], explanation: "\"Chiudere\" → \"chiuso\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They had stayed at home.", answer: "Erano rimasti a casa.", altAnswers: ["Erano rimaste a casa.", "Loro erano rimasti a casa."], explanation: "\"Rimanere\" → \"rimasto\", with essere." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had written to the landlord.", answer: "Avevo scritto al padrone di casa.", altAnswers: ["Avevo scritto al proprietario."], explanation: "\"Scritto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She had chosen the red dress.", answer: "Aveva scelto il vestito rosso.", explanation: "\"Scegliere\" → \"scelto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had come by train.", answer: "Eravamo venuti in treno.", altAnswers: ["Eravamo venute in treno."], explanation: "\"Venire\" → \"venuto\", essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You had drunk too much. (plural)", answer: "Avevate bevuto troppo.", altAnswers: ["Voi avevate bevuto troppo."], explanation: "\"Bere\" → \"bevuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He had lived in London for ten years.", answer: "Aveva vissuto a Londra per dieci anni.", altAnswers: ["Era vissuto a Londra per dieci anni."], explanation: "\"Vivere\" → \"vissuto\"; \"avere\" is more common." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They had answered immediately.", answer: "Avevano risposto subito.", explanation: "\"Rispondere\" → \"risposto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had decided to stay.", answer: "Avevo deciso di restare.", altAnswers: ["Avevo deciso di rimanere."], explanation: "\"Decidere\" → \"deciso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She had run ten kilometres.", answer: "Aveva corso dieci chilometri.", explanation: "\"Correre\" + distance: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Had you got up early? (to a friend)", answer: "Ti eri alzato presto?", altAnswers: ["Ti eri alzata presto?"], explanation: "Reflexive with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had opened the windows.", answer: "Avevamo aperto le finestre.", explanation: "\"Aprire\" → \"aperto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Grandpa [had been born] in 1940.", sentence: "Il nonno ___ nel 1940.", answer: "era nato", explanation: "\"Nascere\" → \"nato\", essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [had asked] for information.", sentence: "___ informazioni.", answer: "Avevano chiesto", explanation: "\"Chiedere\" → \"chiesto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [had put] the money in the drawer.", sentence: "___ i soldi nel cassetto.", answer: "Avevo messo", explanation: "\"Mettere\" → \"messo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara and Sara [had become] friends.", sentence: "Chiara e Sara ___ amiche.", answer: "erano diventate", explanation: "\"Diventare\": essere + feminine plural." },
      { type: "dictation", audio: "Avevamo letto il libro, ma non avevamo visto il film.", explanation: "\"Letto\", \"visto\": irregular participles." },
      { type: "dictation", audio: "Si erano sposati a giugno ed erano andati in Grecia.", explanation: "\"Ed\" before a vowel; two essere verbs." },
      { type: "speak", text: "Avevo già speso tutto: ero rimasta senza un euro.", prompt: "Say it in Italian: I had already spent everything: I'd been left without a euro.", tip: "SPE-so, ri-MA-sta.", explanation: "\"Avere\" + \"speso\", \"essere\" + \"rimasta\"." },
    ],
  },
  {
    slug: "b1-contrast-pp-trapassato",
    level: "IT-B1",
    number: 4,
    title: "Contrast Clinic: Ha Mangiato or Aveva Mangiato?",
    summary: "Order two past events correctly: passato prossimo for the main event, trapassato for what came before it.",
    duration: "17 min",
    sections: [
      {
        heading: "One timeline, two tenses",
        body: [
          "Compare \"Quando sono arrivata, Luca ha mangiato\" (when I arrived, Luca ate: he started eating then) with \"Quando sono arrivata, Luca aveva mangiato\" (Luca had already eaten). Change the tense, change the order of events.",
          "The passato prossimo moves the story forward. The trapassato looks back from a past moment. If you can add already or before that in English, Italian wants the trapassato.",
        ],
        examples: [
          { es: "Quando sono arrivata, Luca ha mangiato.", en: "When I arrived, Luca ate. (then)" },
          { es: "Quando sono arrivata, Luca aveva mangiato.", en: "When I arrived, Luca had eaten. (before)" },
          { es: "Ho chiamato Marta e lei è venuta.", en: "I called Marta and she came." },
          { es: "Ho chiamato Marta, ma lei era già venuta.", en: "I called Marta, but she had already come." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence says Luca finished eating BEFORE you arrived?", options: ["Quando sono arrivata, Luca aveva mangiato.", "Quando sono arrivata, Luca ha mangiato.", "Quando sono arrivata, Luca mangiava.", "Quando arrivo, Luca mangia."], correctIndex: 0, explanation: "The trapassato places the eating earlier." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I called Marta, but she had already left.", answer: "Ho chiamato Marta, ma era già partita.", altAnswers: ["Ho chiamato Marta, ma lei era già partita.", "Ho chiamato Marta, ma era già uscita.", "Ho chiamato Marta, ma se n'era già andata."], explanation: "The leaving came before the call." },
        ],
      },
      {
        heading: "Dopo che and prima",
        body: [
          "After \"dopo che\" (after) the earlier event naturally takes the trapassato in a narrative: \"Dopo che aveva finito, è uscito\" (after he had finished, he went out). English often says after he finished; Italian prefers the trapassato.",
          "With \"prima\" (before), the order is reversed: \"Prima di uscire, aveva finito tutto\" (before going out, he'd finished everything).",
        ],
        examples: [
          { es: "Dopo che aveva finito, è uscito.", en: "After he'd finished, he went out." },
          { es: "Dopo che i bambini si erano addormentati, abbiamo guardato un film.", en: "After the kids had fallen asleep, we watched a film." },
          { es: "Prima di partire, aveva salutato tutti.", en: "Before leaving, she had said goodbye to everyone." },
          { es: "L'ho riconosciuto subito: l'avevo visto in TV.", en: "I recognised him immediately: I'd seen him on TV." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After the kids had fallen asleep, we watched a film.", answer: "Dopo che i bambini si erano addormentati, abbiamo guardato un film.", altAnswers: ["Dopo che i bambini si erano addormentati, abbiamo visto un film."], explanation: "\"Dopo che\" + trapassato for the earlier event." },
          { type: "listen-choose", audio: "L'ho riconosciuto subito: l'avevo visto in TV.", question: "Why did the speaker recognise him?", options: ["They had seen him on TV before.", "They saw him on TV at that moment.", "He was on TV the next day.", "They often watch TV with him."], correctIndex: 0, explanation: "\"L'avevo visto\" = I had seen him (earlier)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I arrived, Luca had already eaten.", answer: "Quando sono arrivata, Luca aveva già mangiato.", altAnswers: ["Quando sono arrivato, Luca aveva già mangiato."], explanation: "\"Già\" + trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I arrived, Luca started eating.", answer: "Quando sono arrivata, Luca ha cominciato a mangiare.", altAnswers: ["Quando sono arrivato, Luca ha cominciato a mangiare.", "Quando sono arrivato, Luca ha iniziato a mangiare.", "Quando sono arrivata, Luca ha iniziato a mangiare."], explanation: "Same moment, so both in the passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I recognised him immediately: I'd seen him on TV.", answer: "L'ho riconosciuto subito: l'avevo visto in TV.", altAnswers: ["L'ho riconosciuto subito: l'avevo visto in televisione."], explanation: "The seeing came first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After he'd finished, he went out.", answer: "Dopo che aveva finito, è uscito.", altAnswers: ["Dopo che aveva finito, è andato fuori."], explanation: "\"Dopo che\" + trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought a new phone because I'd lost the old one.", answer: "Ho comprato un telefono nuovo perché avevo perso quello vecchio.", altAnswers: ["Ho comprato un nuovo telefono perché avevo perso quello vecchio."], explanation: "The loss came before the purchase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I lost my phone and I bought a new one.", answer: "Ho perso il telefono e ne ho comprato uno nuovo.", altAnswers: ["Ho perso il telefono e ho comprato un telefono nuovo."], explanation: "Events in order: both in the passato prossimo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Before leaving, she [had said goodbye] to everyone.", sentence: "Prima di partire, ___ tutti.", answer: "aveva salutato", explanation: "Earlier than the leaving." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I opened the fridge: someone [had eaten] my yogurt.", sentence: "Ho aperto il frigo: qualcuno ___ il mio yogurt.", answer: "aveva mangiato", explanation: "Discovered later, happened earlier." },
      { type: "word-order", prompt: "Put the words in order to say: When we got there, the party had finished.", words: ["Quando", "siamo", "arrivati,", "la", "festa", "era", "finita."], translation: "When we got there, the party had finished.", explanation: "\"Finire\" (intransitive) takes \"essere\"." },
      { type: "multiple-choice", question: "\"Ho chiamato il ristorante, ma ___ già chiuso.\"", options: ["aveva", "ha", "era", "avesse"], correctIndex: 0, explanation: "The closing came first: \"aveva chiuso\"." },
      { type: "dictation", audio: "Quando sono arrivato, erano già andati via.", explanation: "\"Erano andati\": essere + plural." },
      { type: "speak", text: "Ho aperto il frigo e ho visto che qualcuno aveva mangiato la mia torta.", prompt: "Say it in Italian: I opened the fridge and saw that someone had eaten my cake.", tip: "qual-CU-no a-VE-va man-GIA-to.", explanation: "Main events, then the earlier one." },
    ],
  },
  {
    slug: "b1-drill-trapassato-sequence",
    level: "IT-B1",
    number: 5,
    title: "Drill: Before and After",
    summary: "Join two past events into one sentence, putting the earlier one in the trapassato.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Join the events",
        body: [
          "Two facts: \"Sono arrivato\". \"Il treno è partito prima\". One sentence: \"Quando sono arrivato, il treno era già partito\". Find the earlier event, put it in the trapassato, and link with \"quando\", \"perché\", \"dopo che\", \"ma\" or \"che\".",
        ],
        examples: [
          { es: "Sono uscita. Prima avevo chiuso il gas.", en: "I went out. I had turned off the gas first." },
          { es: "Sono uscita dopo che avevo chiuso il gas.", en: "I went out after I'd turned off the gas." },
          { es: "Era contento perché aveva vinto.", en: "He was happy because he had won." },
          { es: "Ha restituito il libro che le avevo prestato.", en: "She returned the book I had lent her." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was happy because he had won.", answer: "Era contento perché aveva vinto.", altAnswers: ["Era felice perché aveva vinto."], explanation: "Cause first: \"aveva vinto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She returned the book I had lent her.", answer: "Ha restituito il libro che le avevo prestato.", altAnswers: ["Mi ha restituito il libro che le avevo prestato.", "Mi ha ridato il libro che le avevo prestato."], explanation: "The lending came first." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I got home, my parents had already gone to bed.", answer: "Quando sono tornato a casa, i miei erano già andati a letto.", altAnswers: ["Quando sono tornata a casa, i miei erano già andati a letto.", "Quando sono tornato a casa, i miei genitori erano già andati a letto.", "Quando sono tornata a casa, i miei genitori erano già andati a letto."], explanation: "Earlier: \"erano andati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I couldn't get in because I'd forgotten the keys.", answer: "Non sono potuto entrare perché avevo dimenticato le chiavi.", altAnswers: ["Non sono potuta entrare perché avevo dimenticato le chiavi.", "Non ho potuto entrare perché avevo dimenticato le chiavi.", "Non riuscivo a entrare perché avevo dimenticato le chiavi."], explanation: "Cause: trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me she had found a job.", answer: "Mi ha detto che aveva trovato lavoro.", altAnswers: ["Mi ha detto che aveva trovato un lavoro."], explanation: "Reported past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We ate the cake that Grandma had made.", answer: "Abbiamo mangiato la torta che aveva fatto la nonna.", altAnswers: ["Abbiamo mangiato la torta che la nonna aveva fatto.", "Abbiamo mangiato la torta che aveva preparato la nonna."], explanation: "The baking came first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After they had paid, they left.", answer: "Dopo che avevano pagato, sono andati via.", altAnswers: ["Dopo che avevano pagato, se ne sono andati.", "Dopo che avevano pagato, sono usciti."], explanation: "\"Dopo che\" + trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was nervous because I'd never spoken in public.", answer: "Ero nervoso perché non avevo mai parlato in pubblico.", altAnswers: ["Ero nervosa perché non avevo mai parlato in pubblico.", "Ero agitato perché non avevo mai parlato in pubblico.", "Ero agitata perché non avevo mai parlato in pubblico."], explanation: "Experience up to that moment." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When the police arrived, the thieves had run away.", answer: "Quando è arrivata la polizia, i ladri erano scappati.", altAnswers: ["Quando la polizia è arrivata, i ladri erano scappati.", "Quando è arrivata la polizia, i ladri erano già scappati."], explanation: "\"Scappare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wore the shoes I had bought in Milan.", answer: "Ho messo le scarpe che avevo comprato a Milano.", altAnswers: ["Mi sono messa le scarpe che avevo comprato a Milano.", "Mi sono messo le scarpe che avevo comprato a Milano."], explanation: "No agreement after \"che\": \"avevo comprato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The restaurant was full because we [hadn't booked].", sentence: "Il ristorante era pieno e noi ___.", answer: "non avevamo prenotato", explanation: "Earlier omission." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He failed because he [hadn't studied].", sentence: "È stato bocciato perché ___.", answer: "non aveva studiato", explanation: "Cause first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I phoned Sara, but she [had gone out].", sentence: "Ho telefonato a Sara, ma ___.", answer: "era uscita", explanation: "\"Uscire\": essere + feminine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They showed us the photos they [had taken] in Sicily.", sentence: "Ci hanno mostrato le foto che ___ in Sicilia.", answer: "avevano fatto", explanation: "\"Fare una foto\" = to take a photo." },
      { type: "dictation", audio: "Non sono potuto entrare perché avevo dimenticato le chiavi.", explanation: "\"Sono potuto\" with \"entrare\", which takes essere." },
      { type: "dictation", audio: "Quando è arrivata la polizia, i ladri erano scappati.", explanation: "\"Erano scappati\": essere + plural." },
      { type: "listen-choose", audio: "Mi ha detto che aveva trovato lavoro.", question: "What had happened?", options: ["She had found a job.", "She was looking for a job.", "She was going to find a job.", "She had lost her job."], correctIndex: 0, explanation: "\"Aveva trovato\" = had found." },
      { type: "speak", text: "Quando sono arrivata, la festa era già finita e tutti erano andati via.", prompt: "Say it in Italian: When I arrived, the party had already finished and everyone had left.", tip: "fi-NI-ta, an-DA-ti: stress the participles.", explanation: "Two trapassati looking back." },
    ],
  },
  {
    slug: "b1-error-hunt-trapassato",
    level: "IT-B1",
    number: 6,
    title: "Error Hunt: The Trapassato",
    summary: "Fix trapassato mistakes: the wrong tense for an earlier event, avevo andato, ero mangiato.",
    duration: "17 min",
    sections: [
      {
        heading: "The wrong tense",
        body: [
          "\"Quando sono arrivato, il treno è già partito\" mixes two times: the \"già\" shows the departure came first, so it must be \"era già partito\". This is the most common mistake English speakers make, because English allows the simple past here.",
          "The opposite slip also happens: using the trapassato for events in sequence. \"Mi sono alzato e avevo fatto colazione\" should be \"Mi sono alzato e ho fatto colazione\" (one after the other).",
        ],
        examples: [
          { es: "Quando sono arrivato, il treno era già partito.", en: "When I arrived, the train had already left." },
          { es: "Mi sono alzato e ho fatto colazione.", en: "I got up and had breakfast." },
          { es: "Ho capito che avevo sbagliato strada.", en: "I realised I'd taken the wrong road." },
          { es: "Mi ha detto che era stata malata.", en: "She told me she had been ill." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Quando sono arrivato, il treno è già partito\". Write it correctly: When I arrived, the train had already left.", source: "When I arrived, the train had already left.", answer: "Quando sono arrivato, il treno era già partito.", altAnswers: ["Quando sono arrivata, il treno era già partito."], explanation: "\"Già\" + earlier event: trapassato." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho capito che ho sbagliato strada\". Write it correctly: I realised I'd taken the wrong road.", source: "I realised I'd taken the wrong road.", answer: "Ho capito che avevo sbagliato strada.", altAnswers: ["Mi sono reso conto che avevo sbagliato strada.", "Mi sono resa conto che avevo sbagliato strada."], explanation: "The mistake came before the realisation." },
        ],
      },
      {
        heading: "The wrong auxiliary",
        body: [
          "\"Avevo andato\" and \"ero mangiato\" swap the auxiliaries. The rule is the passato prossimo's: movement and change of state take \"essere\" (\"ero andato\"), actions with an object take \"avere\" (\"avevo mangiato\").",
          "And with \"essere\" don't forget agreement: \"Anna era uscito\" should be \"Anna era uscita\".",
        ],
        examples: [
          { es: "Ero andato a Roma.", en: "I had gone to Rome. (not: avevo andato)" },
          { es: "Avevo mangiato troppo.", en: "I had eaten too much. (not: ero mangiato)" },
          { es: "Anna era uscita.", en: "Anna had gone out. (not: era uscito)" },
          { es: "Ci eravamo persi.", en: "We had got lost. (not: ci avevamo persi)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Avevo andato a Roma\". Write it correctly: I had gone to Rome.", source: "I had gone to Rome.", answer: "Ero andato a Roma.", altAnswers: ["Ero andata a Roma."], explanation: "\"Andare\": essere." },
          { type: "multiple-choice", question: "Which is correct for: We had got lost?", options: ["Ci eravamo persi.", "Ci avevamo persi.", "Eravamo perso.", "Ci siamo persi."], correctIndex: 0, explanation: "Reflexive: essere + agreement; \"ci siamo persi\" is the passato prossimo." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ero mangiato troppo\". Write it correctly: I had eaten too much.", source: "I had eaten too much.", answer: "Avevo mangiato troppo.", explanation: "\"Mangiare\": avere." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Anna era uscito\". Write it correctly: Anna had gone out.", source: "Anna had gone out.", answer: "Anna era uscita.", explanation: "Agreement with Anna." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mi ha detto che ha perso il passaporto\". Write it correctly: He told me he had lost his passport.", source: "He told me he had lost his passport.", answer: "Mi ha detto che aveva perso il passaporto.", explanation: "Reported earlier event." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Non avevo mai stato a Napoli\". Write it correctly: I had never been to Naples.", source: "I had never been to Naples.", answer: "Non ero mai stato a Napoli.", altAnswers: ["Non ero mai stata a Napoli."], explanation: "\"Essere stato\": essere." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Dopo che ha finito, è andato a casa\" in a story. Write it with the earlier event marked: After he had finished, he went home.", source: "After he had finished, he went home.", answer: "Dopo che aveva finito, è andato a casa.", altAnswers: ["Dopo che aveva finito, è tornato a casa."], explanation: "In narration, \"dopo che\" + trapassato." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Le foto? Le avevo mandato\". Write it correctly: The photos? I had sent them.", source: "The photos? I had sent them.", answer: "Le foto? Le avevo mandate.", explanation: "Agreement with \"le\"." },
      { type: "fill-blank", prompt: "A learner wrote \"si aveva svegliato\". Write the Italian for the bold words.", en: "She [had woken up] at five.", sentence: "___ alle cinque.", answer: "Si era svegliata", explanation: "Reflexive: essere." },
      { type: "fill-blank", prompt: "A learner wrote \"avevamo arrivati\". Write the Italian for the bold words.", en: "We [had arrived] late.", sentence: "___ tardi.", answer: "Eravamo arrivati", altAnswers: ["Eravamo arrivate"], explanation: "\"Arrivare\": essere." },
      { type: "word-order", prompt: "Put the words in order to say: She told me she had been ill.", words: ["Mi", "ha", "detto", "che", "era", "stata", "malata."], translation: "She told me she had been ill.", explanation: "\"Era stata\": essere + agreement." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["Ero andata.", "Avevo andato.", "Avevamo visto.", "Si era alzato.", "Ero mangiato.", "Erano partiti."], correctIndexes: [0, 2, 3, 5], explanation: "Same auxiliary as the passato prossimo." },
      { type: "dictation", audio: "Mi sono accorto che avevo sbagliato treno.", explanation: "\"Accorgersi\" = to notice." },
      { type: "speak", text: "Non ero mai stato a Napoli, e mi sono perso subito!", prompt: "Say it in Italian: I had never been to Naples, and I got lost straight away!", tip: "E-ro: stress the first syllable.", explanation: "Trapassato for experience, then the event." },
    ],
  },
  {
    slug: "b1-dialogue-lab-missed-train",
    level: "IT-B1",
    number: 7,
    title: "Dialogue Lab: Explaining Why You Were Late",
    summary: "Explain to a friend why you missed dinner: ero già uscito quando mi hai chiamato, avevo dimenticato le chiavi.",
    duration: "17 min",
    sections: [
      {
        heading: "Dove eri finito?",
        body: [
          "Matteo was supposed to meet Francesca for dinner in Florence at eight. He arrives at half past nine. Francesca is not pleased: \"Dove eri finito?\" (where on earth were you?). Matteo explains, and every excuse looks back from the moment things went wrong.",
          "Excuses are a natural home for the trapassato: something had already happened, so something else went wrong.",
        ],
        examples: [
          { es: "Dove eri finito? Ti ho chiamato dieci volte!", en: "Where on earth were you? I called you ten times!" },
          { es: "Lo so, scusa. Avevo lasciato il telefono in ufficio.", en: "I know, sorry. I'd left my phone at the office." },
          { es: "Quando me ne sono accorto, ero già sul treno.", en: "When I realised, I was already on the train." },
          { es: "Il treno era partito in ritardo.", en: "The train had left late." },
          { es: "E poi avevo dimenticato le chiavi di casa.", en: "And then I'd forgotten my house keys." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know, sorry. I'd left my phone at the office.", answer: "Lo so, scusa. Avevo lasciato il telefono in ufficio.", altAnswers: ["Lo so, scusami. Avevo lasciato il telefono in ufficio."], explanation: "The cause came first: \"avevo lasciato\"." },
          { type: "listen-choose", audio: "Il treno era partito in ritardo.", question: "What was the problem?", options: ["The train had left late.", "The train was cancelled.", "He had missed the train.", "The train arrived early."], correctIndex: 0, explanation: "\"Era partito in ritardo\" = had left late." },
        ],
      },
      {
        heading: "The whole story",
        body: [
          "Francesca checks the timeline: \"Ma non eri uscito alle sette?\" (but hadn't you left at seven?). Matteo: \"Sì, ero già uscito quando mi hai chiamato, ma...\". In the end she laughs: \"Te l'avevo detto di prendere il treno prima!\".",
        ],
        examples: [
          { es: "Ma non eri uscito alle sette?", en: "But hadn't you left at seven?" },
          { es: "Sì, ero già uscito quando mi hai chiamato.", en: "Yes, I'd already left when you called me." },
          { es: "Te l'avevo detto di prendere il treno prima!", en: "I told you to take the earlier train!" },
          { es: "Hai ragione. La prossima volta ti ascolto.", en: "You're right. Next time I'll listen to you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, I'd already left when you called me.", answer: "Sì, ero già uscito quando mi hai chiamato.", altAnswers: ["Sì, ero già uscita quando mi hai chiamato.", "Sì, ero già uscito quando mi hai telefonato."], explanation: "Earlier: \"ero uscito\"; the call: passato prossimo." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I told you] to take the earlier train!", sentence: "___ di prendere il treno prima!", answer: "Te l'avevo detto", explanation: "\"Te l'avevo detto\" = I told you (before)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where on earth were you? I called you ten times!", answer: "Dove eri finito? Ti ho chiamato dieci volte!", altAnswers: ["Dove eri finita? Ti ho chiamato dieci volte!", "Dove eri finito? Ti ho chiamata dieci volte!"], explanation: "\"Dove eri finito?\" = where did you get to?" },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I realised, I was already on the train.", answer: "Quando me ne sono accorto, ero già sul treno.", altAnswers: ["Quando me ne sono accorta, ero già sul treno.", "Quando me ne sono reso conto, ero già sul treno."], explanation: "\"Accorgersene\" = to notice it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And then I'd forgotten my house keys.", answer: "E poi avevo dimenticato le chiavi di casa.", altAnswers: ["E poi mi ero dimenticato le chiavi di casa.", "E poi mi ero dimenticata le chiavi di casa."], explanation: "Trapassato for the earlier slip." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "But hadn't you left at seven?", answer: "Ma non eri uscito alle sette?", altAnswers: ["Ma non eri partito alle sette?", "Ma non eri uscita alle sette?"], explanation: "Checking an earlier fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right. Next time I'll listen to you.", answer: "Hai ragione. La prossima volta ti ascolto.", altAnswers: ["Hai ragione. La prossima volta ti ascolterò."], explanation: "\"Avere ragione\" = to be right." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant had given our table away.", answer: "Il ristorante aveva dato via il nostro tavolo.", altAnswers: ["Il ristorante aveva dato il nostro tavolo a qualcun altro."], explanation: "\"Dare via\" = to give away." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train [had left] late.", sentence: "Il treno ___ in ritardo.", answer: "era partito", explanation: "\"Partire\": essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hadn't eaten because [I'd waited for you].", sentence: "Non avevo mangiato perché ___.", answer: "ti avevo aspettato", altAnswers: ["ti avevo aspettata"], explanation: "Earlier than the moment of speaking about." },
      { type: "word-order", prompt: "Put the words in order to say: I'd left my phone at the office.", words: ["Avevo", "lasciato", "il", "telefono", "in", "ufficio."], translation: "I'd left my phone at the office.", explanation: "\"Lasciare\" = to leave something somewhere." },
      { type: "multiple-choice", question: "Francesca asks \"Perché non hai risposto?\". Which answer explains it best?", options: ["Avevo lasciato il telefono in ufficio.", "Lascio il telefono in ufficio.", "Lascerò il telefono in ufficio.", "Lasciavo il telefono in ufficio."], correctIndex: 0, explanation: "The earlier cause: trapassato." },
      { type: "dictation", audio: "Ero già uscito quando mi hai chiamato.", explanation: "\"Ero uscito\" before \"hai chiamato\"." },
      { type: "speak", text: "Scusa il ritardo! Avevo dimenticato le chiavi e il treno era già partito.", prompt: "Apologise: Sorry I'm late! I'd forgotten my keys and the train had already left.", tip: "di-men-ti-CA-to: stress on -ca-.", explanation: "Two earlier events explain the delay." },
    ],
  },
  {
    slug: "b1-reading-lab-short-story",
    level: "IT-B1",
    number: 8,
    title: "Reading Lab: A Short Story",
    summary: "Read a short story in the past tenses and work out what happened first.",
    duration: "18 min",
    sections: [
      {
        heading: "La valigia sbagliata, part 1",
        body: [
          "Read the story in the examples. It's told in the three past tenses: the imperfetto sets the scene, the passato prossimo moves the story, and the trapassato looks back. After each part, decide what happened first.",
          "Elena is flying home to Bari after a work trip to Turin. Something is wrong with her suitcase.",
        ],
        examples: [
          { es: "Era venerdì sera ed Elena era stanchissima.", en: "It was Friday evening and Elena was exhausted." },
          { es: "Aveva lavorato tutta la settimana a Torino.", en: "She had worked all week in Turin." },
          { es: "All'aeroporto di Bari ha preso la sua valigia blu ed è salita su un taxi.", en: "At Bari airport she took her blue suitcase and got into a taxi." },
          { es: "A casa l'ha aperta e ha trovato vestiti da uomo.", en: "At home she opened it and found men's clothes." },
          { es: "Qualcuno aveva preso la sua valigia per errore.", en: "Someone had taken her suitcase by mistake." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What happened first?", options: ["Someone took Elena's suitcase by mistake.", "Elena opened the suitcase at home.", "Elena got into a taxi.", "Elena found men's clothes."], correctIndex: 0, explanation: "\"Aveva preso\": the trapassato points back to the earliest event." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She had worked all week in Turin.", answer: "Aveva lavorato tutta la settimana a Torino.", explanation: "Background before the story's events." },
        ],
      },
      {
        heading: "La valigia sbagliata, part 2",
        body: [
          "Elena finds a business card in the suitcase and calls the number. A man answers, laughing: he had opened his suitcase too.",
        ],
        examples: [
          { es: "Nella valigia c'era un biglietto da visita.", en: "In the suitcase there was a business card." },
          { es: "Elena ha chiamato il numero e ha risposto un certo Paolo.", en: "Elena called the number and a man called Paolo answered." },
          { es: "Anche lui aveva già aperto la valigia.", en: "He had already opened the suitcase too." },
          { es: "Aveva trovato i vestiti di Elena e un libro in inglese.", en: "He had found Elena's clothes and a book in English." },
          { es: "Il giorno dopo si sono incontrati in un bar e si sono scambiati le valigie.", en: "The next day they met in a café and swapped suitcases." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Anche lui aveva già aperto la valigia.", question: "What do we learn about Paolo?", options: ["He had already opened the suitcase.", "He opened the suitcase after the call.", "He never opened the suitcase.", "He lost the suitcase."], correctIndex: 0, explanation: "\"Aveva già aperto\" = had already opened." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The next day they met in a café and swapped suitcases.", answer: "Il giorno dopo si sono incontrati in un bar e si sono scambiati le valigie.", altAnswers: ["Il giorno dopo si sono visti in un bar e si sono scambiati le valigie."], explanation: "Story events: passato prossimo." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Why was Elena tired?", options: ["She had worked all week in Turin.", "She had lost her suitcase.", "The flight was late.", "She had gone to a party."], correctIndex: 0, explanation: "\"Aveva lavorato tutta la settimana\"." },
      { type: "multiple-choice", question: "How did Elena find Paolo?", options: ["From a business card in the suitcase.", "At the airport desk.", "Through the taxi driver.", "On social media."], correctIndex: 0, explanation: "\"C'era un biglietto da visita\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was Friday evening and Elena was exhausted.", answer: "Era venerdì sera ed Elena era stanchissima.", explanation: "Imperfetto for the scene; \"ed\" before a vowel." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone had taken her suitcase by mistake.", answer: "Qualcuno aveva preso la sua valigia per errore.", altAnswers: ["Qualcuno aveva preso la sua valigia per sbaglio."], explanation: "The earliest event." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At home she opened it and found men's clothes.", answer: "A casa l'ha aperta e ha trovato vestiti da uomo.", altAnswers: ["A casa l'ha aperta e ha trovato dei vestiti da uomo."], explanation: "\"L'ha aperta\": agreement with \"la valigia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He had found Elena's clothes and a book in English.", answer: "Aveva trovato i vestiti di Elena e un libro in inglese.", explanation: "Before the phone call." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Elena [called] the number and a man called Paolo [answered].", sentence: "Elena ha chiamato il numero e ___ un certo Paolo.", answer: "ha risposto", explanation: "Story event: passato prossimo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Paolo [had already opened] the suitcase too.", sentence: "Anche Paolo ___ la valigia.", answer: "aveva già aperto", explanation: "Earlier than the call." },
      { type: "word-order", prompt: "Put the words in order to say: In the suitcase there was a business card.", words: ["Nella", "valigia", "c'era", "un", "biglietto", "da", "visita."], translation: "In the suitcase there was a business card.", explanation: "\"C'era\": description." },
      { type: "multiple-choice", question: "In the story, which tense tells you what happened BEFORE the main events?", options: ["the trapassato (aveva preso)", "the imperfetto (era stanca)", "the passato prossimo (ha chiamato)", "the present (chiama)"], correctIndex: 0, explanation: "The trapassato looks back." },
      { type: "dictation", audio: "Qualcuno aveva preso la sua valigia per errore.", explanation: "\"Aveva preso\": trapassato." },
      { type: "speak", text: "Ho aperto la valigia e ho capito che qualcuno l'aveva scambiata con la mia.", prompt: "Retell: I opened the suitcase and realised someone had swapped it with mine.", tip: "scam-BIA-ta: one m, then b.", explanation: "Main events + trapassato." },
    ],
  },
  {
    slug: "b1-mission-incident-report",
    level: "IT-B1",
    number: 9,
    title: "Real-World Mission: An Incident Report",
    summary: "Write a short report of a problem at work, putting events in order with the trapassato.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "What happened, in order",
        body: [
          "Your mission: you work at a hotel reception in Verona. Last night a guest's room was flooded. Your manager wants a short written report (\"una relazione\") for the insurance: what happened, when, and what had caused it.",
          "Reports use a neutral, factual style: dates and times, the passato prossimo for the events, the imperfetto for the situation, and the trapassato for causes: \"La perdita era cominciata nella camera 204\".",
        ],
        examples: [
          { es: "Il 14 novembre, alle 23:15, il cliente della camera 104 ha chiamato la reception.", en: "On 14 November, at 11:15 p.m., the guest in room 104 called reception." },
          { es: "Il bagno era allagato.", en: "The bathroom was flooded." },
          { es: "L'acqua veniva dal soffitto.", en: "The water was coming from the ceiling." },
          { es: "Il cliente della camera 204 aveva lasciato il rubinetto aperto.", en: "The guest in room 204 had left the tap running." },
          { es: "Si era addormentato mentre la vasca si riempiva.", en: "He had fallen asleep while the bath was filling." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guest in room 204 had left the tap running.", answer: "Il cliente della camera 204 aveva lasciato il rubinetto aperto.", explanation: "The cause: trapassato." },
          { type: "listen-choose", audio: "L'acqua veniva dal soffitto.", question: "Where was the water coming from?", options: ["the ceiling", "the window", "the floor", "the shower"], correctIndex: 0, explanation: "\"Il soffitto\" = the ceiling." },
        ],
      },
      {
        heading: "What we did",
        body: [
          "Then list the actions: \"Abbiamo spostato il cliente in un'altra camera\", \"Abbiamo chiamato l'idraulico\". Close with the result: \"Il danno è limitato al bagno\".",
        ],
        examples: [
          { es: "Abbiamo spostato il cliente nella camera 110.", en: "We moved the guest to room 110." },
          { es: "L'idraulico è arrivato alle 23:50.", en: "The plumber arrived at 11:50 p.m." },
          { es: "Quando è arrivato, avevamo già chiuso l'acqua.", en: "When he arrived, we had already turned the water off." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When he arrived, we had already turned the water off.", answer: "Quando è arrivato, avevamo già chiuso l'acqua.", explanation: "Earlier action: trapassato." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We moved] the guest to room 110.", sentence: "___ il cliente nella camera 110.", answer: "Abbiamo spostato", explanation: "Action in sequence: passato prossimo." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On 14 November, at 11:15 p.m., the guest in room 104 called reception.", answer: "Il 14 novembre, alle 23:15, il cliente della camera 104 ha chiamato la reception.", altAnswers: ["Il 14 novembre alle 23:15 il cliente della camera 104 ha chiamato la reception."], explanation: "Date day-month; 24-hour time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bathroom was flooded.", answer: "Il bagno era allagato.", explanation: "Imperfetto for the situation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He had fallen asleep while the bath was filling.", answer: "Si era addormentato mentre la vasca si riempiva.", explanation: "Trapassato + \"mentre\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The plumber arrived at 11:50 p.m.", answer: "L'idraulico è arrivato alle 23:50.", explanation: "\"Idraulico\" = plumber." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The damage is limited to the bathroom.", answer: "Il danno è limitato al bagno.", altAnswers: ["I danni sono limitati al bagno."], explanation: "Present for the current state." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guest had not noticed anything.", answer: "Il cliente non si era accorto di niente.", altAnswers: ["Il cliente non si era accorto di nulla."], explanation: "\"Accorgersi di\": reflexive, essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The leak [had started] in room 204.", sentence: "La perdita ___ nella camera 204.", answer: "era cominciata", altAnswers: ["era iniziata"], explanation: "\"Cominciare\" without an object: essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The night porter [had already called] the manager.", sentence: "Il portiere di notte ___ il direttore.", answer: "aveva già chiamato", explanation: "Earlier action." },
      { type: "word-order", prompt: "Put the words in order to say: We moved the guest to another room.", words: ["Abbiamo", "spostato", "il", "cliente", "in", "un'altra", "camera."], translation: "We moved the guest to another room.", explanation: "\"Un'altra\": apostrophe for the feminine." },
      { type: "multiple-choice", question: "Which sentence gives the CAUSE in a report?", options: ["Il cliente aveva lasciato il rubinetto aperto.", "Il cliente lascerà il rubinetto aperto.", "Il cliente lascia il rubinetto aperto.", "Il cliente lasciava sempre il rubinetto aperto."], correctIndex: 0, explanation: "The trapassato marks what had caused the problem." },
      { type: "dictation", audio: "Quando è arrivato l'idraulico, avevamo già chiuso l'acqua.", explanation: "\"Avevamo chiuso\": earlier." },
      { type: "speak", text: "Alle 23:15 il cliente ha chiamato: il bagno era allagato perché qualcuno aveva lasciato il rubinetto aperto.", prompt: "Report to your manager: At 11:15 p.m. the guest called: the bathroom was flooded because someone had left the tap running.", tip: "al-la-GA-to: double l.", explanation: "Three past tenses in one report." },
    ],
  },
  {
    slug: "b1-listening-lab-anecdotes",
    level: "IT-B1",
    number: 10,
    title: "Listening Lab: Anecdotes",
    summary: "Follow natural-speed anecdotes told with all the past tenses, and work out the order of events.",
    duration: "18 min",
    sections: [
      {
        heading: "Anecdote 1: the wrong wedding",
        body: [
          "Italians love a good \"aneddoto\". Listen to Luca's: he went to a wedding in a village near Lecce and... it wasn't the right one. Keep track of the tenses: the trapassato tells you what had already happened.",
        ],
        examples: [
          { es: "Ero arrivato in chiesa con mezz'ora di anticipo.", en: "I'd arrived at the church half an hour early." },
          { es: "Mi sono seduto e ho aspettato gli sposi.", en: "I sat down and waited for the bride and groom." },
          { es: "Quando è entrata la sposa, non l'avevo mai vista prima!", en: "When the bride came in, I'd never seen her before!" },
          { es: "Avevo sbagliato chiesa: il matrimonio di mio cugino era nel paese accanto.", en: "I'd got the wrong church: my cousin's wedding was in the next village." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Avevo sbagliato chiesa: il matrimonio di mio cugino era nel paese accanto.", question: "What had Luca done?", options: ["He'd gone to the wrong church.", "He'd missed the wedding.", "He'd forgotten the present.", "He'd arrived late."], correctIndex: 0, explanation: "\"Avevo sbagliato chiesa\" = I'd got the wrong church." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd arrived at the church half an hour early.", answer: "Ero arrivato in chiesa con mezz'ora di anticipo.", altAnswers: ["Ero arrivato in chiesa mezz'ora prima.", "Ero arrivata in chiesa con mezz'ora di anticipo."], explanation: "\"Con mezz'ora di anticipo\" = half an hour early." },
        ],
      },
      {
        heading: "Anecdote 2: the borrowed car",
        body: [
          "Chiara's anecdote: she borrowed her father's car in Palermo and found a surprise in the boot. Listen for \"aveva messo\" and \"avevo promesso\".",
        ],
        examples: [
          { es: "Mio padre mi aveva prestato la macchina per il weekend.", en: "My father had lent me the car for the weekend." },
          { es: "Al mare ho aperto il bagagliaio per prendere l'ombrellone.", en: "At the beach I opened the boot to get the beach umbrella." },
          { es: "Dentro c'erano dieci chili di arance: le aveva messe lì per mia zia!", en: "Inside there were ten kilos of oranges: he'd put them there for my aunt!" },
          { es: "Gli avevo promesso di portargliele, ma me n'ero dimenticata.", en: "I'd promised him to take them to her, but I'd forgotten." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Dentro c'erano dieci chili di arance: le aveva messe lì per mia zia!", question: "Who were the oranges for?", options: ["Chiara's aunt", "Chiara", "Chiara's father", "the beach bar"], correctIndex: 0, explanation: "\"Per mia zia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[He'd put them] there for my aunt.", sentence: "___ lì per mia zia.", answer: "Le aveva messe", explanation: "Agreement with \"le arance\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Quando è entrata la sposa, non l'avevo mai vista prima!", question: "Why was Luca surprised?", options: ["He'd never seen the bride before.", "The bride was late.", "The bride was his cousin.", "The bride didn't come in."], correctIndex: 0, explanation: "\"Non l'avevo mai vista\" = I'd never seen her." },
      { type: "listen-choose", audio: "Gli avevo promesso di portargliele, ma me n'ero dimenticata.", question: "What had Chiara done?", options: ["promised and then forgotten", "delivered the oranges", "refused to take them", "lost the car keys"], correctIndex: 0, explanation: "\"Avevo promesso\", \"me n'ero dimenticata\"." },
      { type: "dictation", audio: "Mio padre mi aveva prestato la macchina.", explanation: "\"Aveva prestato\": trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I sat down and waited for the bride and groom.", answer: "Mi sono seduto e ho aspettato gli sposi.", altAnswers: ["Mi sono seduta e ho aspettato gli sposi."], explanation: "Story events in sequence." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When the bride came in, I'd never seen her before!", answer: "Quando è entrata la sposa, non l'avevo mai vista prima!", altAnswers: ["Quando la sposa è entrata, non l'avevo mai vista prima!"], explanation: "\"Vista\" agrees with \"la sposa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My father had lent me the car for the weekend.", answer: "Mio padre mi aveva prestato la macchina per il weekend.", altAnswers: ["Mio padre mi aveva prestato la macchina per il fine settimana."], explanation: "Background event before the story." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd promised him to take them to her, but I'd forgotten.", answer: "Gli avevo promesso di portargliele, ma me n'ero dimenticata.", altAnswers: ["Gli avevo promesso di portargliele, ma me ne ero dimenticata.", "Gli avevo promesso di portargliele, ma me n'ero dimenticato."], explanation: "\"Dimenticarsene\" with essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the beach I opened the boot to get the beach umbrella.", answer: "Al mare ho aperto il bagagliaio per prendere l'ombrellone.", explanation: "\"Bagagliaio\" = boot; \"ombrellone\" = beach umbrella." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [had got] the wrong church.", sentence: "___ chiesa.", answer: "Avevo sbagliato", explanation: "\"Sbagliare\" + noun = get the wrong ..." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My cousin's wedding [was] in the next village.", sentence: "Il matrimonio di mio cugino ___ nel paese accanto.", answer: "era", explanation: "Imperfetto for where something was." },
      { type: "word-order", prompt: "Put the words in order to say: I'd never seen her before.", words: ["Non", "l'avevo", "mai", "vista", "prima."], translation: "I'd never seen her before.", explanation: "\"Vista\": agreement with \"l'\" (la)." },
      { type: "speak", text: "Ero arrivato in anticipo, ma avevo sbagliato chiesa!", prompt: "Tell the punchline: I'd arrived early, but I'd got the wrong church!", tip: "Pause before \"ma\" for comic effect.", explanation: "Two trapassati in one anecdote." },
    ],
  },
];

export const IT_B1_U05_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write an email to your Italian teacher explaining why you missed yesterday's lesson. Tell what happened in order, and explain the causes: what had already happened before (you had lost something, the bus had already left, you had forgotten...). Apologise and ask what you missed.",
  minWords: 60,
  maxWords: 130,
  rubric: [
    "Forms the trapassato with the imperfetto of avere / essere + participle (avevo perso, era partito)",
    "Uses the trapassato for causes and earlier events, and the passato prossimo for the main events",
    "Chooses the right auxiliary and makes participles agree with essere and with lo / la / li / le",
    "Writes a polite email to a teacher (Gentile professoressa..., Le scrivo..., Cordiali saluti)",
  ],
  modelAnswer: "Gentile professoressa Bianchi, Le scrivo per scusarmi: ieri non sono venuto a lezione. Ero uscito di casa alle sei, ma quando sono arrivato alla fermata l'autobus era già partito. Allora ho deciso di prendere un taxi, ma mi sono accorto che avevo lasciato il portafoglio a casa! Sono tornato indietro e alla fine ero troppo in ritardo. Mi dispiace molto. Potrebbe dirmi che cosa avete fatto? Avevo già preparato gli esercizi del libro. Cordiali saluti, Tom",
  explanation: "\"Ero uscito\", \"era già partito\" and \"avevo lasciato\" are trapassati: they happened before the main events (\"sono arrivato\", \"ho deciso\", \"mi sono accorto\"). \"Uscire\", \"partire\" and \"tornare\" take \"essere\"; \"lasciare\" and \"preparare\" take \"avere\". The formal \"Le scrivo\" and \"Potrebbe\" suit a teacher.",
};
