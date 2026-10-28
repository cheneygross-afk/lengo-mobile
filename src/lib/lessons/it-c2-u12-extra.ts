// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u12-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 12 Extra Practice: Economic and Financial Italian.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U12_EXTRA: Lesson[] = [
  {
    slug: "c2-finance-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Markets",
    summary: "Fresh market sentences: indices, bonds, currencies, commodities and the verbs of rising and falling.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A week on the markets",
        body: [
          "New words for this practice: \"il rimbalzo\" (rebound), \"le prese di beneficio\" (profit-taking), \"il massimo storico\" (all-time high), \"i minimi\" (lows), \"la volatilità\", \"il bene rifugio\" (safe-haven asset, such as gold, \"l'oro\").",
          "Remember the article before percentages and \"lo\" before \"spread\" and \"0,…\".",
        ],
        examples: [
          { es: "Dopo il crollo di lunedì, la Borsa ha messo a segno un rimbalzo.", en: "After Monday's crash, the exchange posted a rebound." },
          { es: "Nel pomeriggio sono arrivate le prese di beneficio.", en: "In the afternoon came the profit-taking." },
          { es: "L'oro ha toccato un nuovo massimo storico.", en: "Gold hit a new all-time high." },
          { es: "Il titolo è tornato sui minimi di marzo.", en: "The stock went back to its March lows." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Gold hit a new all-time high.", answer: "L'oro ha toccato un nuovo massimo storico.", altAnswers: ["L'oro ha raggiunto un nuovo massimo storico.", "L'oro ha segnato un nuovo massimo storico."], explanation: "\"Toccare un massimo\" = to hit a high." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the afternoon came the profit-taking.", answer: "Nel pomeriggio sono arrivate le prese di beneficio.", altAnswers: ["Nel pomeriggio sono arrivate le prese di profitto.", "Le prese di beneficio sono arrivate nel pomeriggio."], explanation: "\"Le prese di beneficio\" (or \"di profitto\") is plural: \"sono arrivate\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After Monday's crash, the exchange posted a rebound.", answer: "Dopo il crollo di lunedì, la Borsa ha messo a segno un rimbalzo.", altAnswers: ["Dopo il crollo di lunedì la Borsa ha messo a segno un rimbalzo.", "Dopo il crollo di lunedì, la Borsa ha registrato un rimbalzo."], explanation: "\"Mettere a segno\" = to score, to post (a gain)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The stock went back to its March lows.", answer: "Il titolo è tornato sui minimi di marzo.", altAnswers: ["Il titolo è tornato ai minimi di marzo."], explanation: "\"Sui minimi\" / \"ai minimi\"; months lower-case." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Volatility remains high.", answer: "La volatilità resta alta.", altAnswers: ["La volatilità rimane alta.", "La volatilità resta elevata.", "La volatilità rimane elevata."], explanation: "\"Volatilità\" ends in stressed -à: feminine and invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Investors are buying gold as a safe haven.", answer: "Gli investitori comprano oro come bene rifugio.", altAnswers: ["Gli investitori stanno comprando oro come bene rifugio.", "Gli investitori acquistano oro come bene rifugio.", "Gli investitori comprano l'oro come bene rifugio."], explanation: "\"Bene rifugio\": the second noun works as an adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ten-year BTP yield rose to 3.9%.", answer: "Il rendimento del BTP decennale è salito al 3,9%.", altAnswers: ["Il rendimento del BTP a dieci anni è salito al 3,9%.", "Il rendimento del decennale è salito al 3,9%."], explanation: "\"Al 3,9%\" = to 3.9%." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The euro weakened against the dollar.", answer: "L'euro si è indebolito sul dollaro.", altAnswers: ["L'euro si è indebolito nei confronti del dollaro.", "L'euro si è deprezzato sul dollaro.", "L'euro si è indebolito rispetto al dollaro."], explanation: "\"Sul dollaro\" or \"nei confronti del dollaro\" = against the dollar." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The index [gained 0.4%].", sentence: "L'indice ___.", answer: "ha guadagnato lo 0,4%", altAnswers: ["ha guadagnato lo 0,4 per cento", "è salito dello 0,4%"], explanation: "\"Lo 0,4%\": zero starts with z." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luxury stocks [collapsed].", sentence: "I titoli del lusso sono ___.", answer: "crollati", altAnswers: ["precipitati"], explanation: "\"Crollare\" takes \"essere\"; plural agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The spread [narrowed] to 120 points.", sentence: "Lo spread si è ___ a 120 punti.", answer: "ristretto", altAnswers: ["ridotto"], explanation: "\"Restringersi\" = to narrow; participle \"ristretto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Demand at the auction was [twice] the supply.", sentence: "All'asta la domanda è stata pari a ___ l'offerta.", answer: "due volte", explanation: "\"Due volte l'offerta\" = twice the amount offered." },
      { type: "word-order", prompt: "Put the words in order to say: The company debuted on the stock exchange today.", words: ["La", "società", "ha", "debuttato", "oggi", "in", "Borsa."], translation: "The company debuted on the stock exchange today.", altOrders: [["Oggi", "la", "società", "ha", "debuttato", "in", "Borsa."], ["La", "società", "ha", "debuttato", "in", "Borsa", "oggi."]], explanation: "\"Debuttare in Borsa\" = to make one's market debut." },
      { type: "multiple-choice", question: "\"Il titolo è sui massimi\" means ...", options: ["The stock is at its highs.", "The headline is the biggest.", "The stock is at its lows.", "The title is very long."], correctIndex: 0, explanation: "\"I massimi\" = highs; \"i minimi\" = lows." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il rimbalzo", right: "rebound" },
          { left: "le prese di beneficio", right: "profit-taking" },
          { left: "il bene rifugio", right: "safe-haven asset" },
          { left: "mettere a segno", right: "to post (a gain)" },
          { left: "la matricola", right: "newly listed company" },
        ],
        explanation: "Market words from this practice.",
      },
      { type: "listen-choose", audio: "Seduta in altalena per Piazza Affari, che alla fine chiude in lieve calo.", question: "How did the session go?", options: ["Up and down, ending slightly lower", "Steadily higher all day", "A sharp crash at the close", "Closed for a holiday"], correctIndex: 0, explanation: "\"In altalena\" = see-sawing; \"in lieve calo\" = slightly down." },
      { type: "dictation", audio: "L'oro ha toccato un nuovo massimo storico.", explanation: "\"Massimo storico\" = all-time high." },
      { type: "speak", text: "Dopo il crollo di lunedì, la Borsa ha messo a segno un rimbalzo del due per cento.", prompt: "Say it in Italian: After Monday's crash, the exchange posted a 2% rebound.", tip: "\"Rimbalzo\": rim-BAL-zo, with a voiced z.", explanation: "\"Un rimbalzo del 2%\": \"di\" + article for the size." },
    ],
  },
  {
    slug: "c2-finance-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Public Finance",
    summary: "Fresh sentences on the budget, debt, taxes and the political debate around them.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Budget news",
        body: [
          "New words: \"la spending review\" (spending cuts, an English term used in Italian), \"il gettito\" (tax take, revenue raised), \"l'extragettito\" (unexpected extra revenue), \"il bonus\" (a one-off benefit), \"la rottamazione delle cartelle\" (a scheme to settle tax bills without penalties).",
        ],
        examples: [
          { es: "Il gettito dell'IVA è stato superiore alle attese.", en: "VAT revenue was higher than expected." },
          { es: "L'extragettito servirà a finanziare il taglio delle tasse.", en: "The extra revenue will fund the tax cut." },
          { es: "La rottamazione delle cartelle è stata prorogata.", en: "The tax settlement scheme has been extended." },
          { es: "Il governo punta sulla spending review per trovare le coperture.", en: "The government is counting on spending cuts to find the funding." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "VAT revenue was higher than expected.", answer: "Il gettito dell'IVA è stato superiore alle attese.", altAnswers: ["Il gettito IVA è stato superiore alle attese.", "Il gettito dell'IVA è stato più alto del previsto.", "Il gettito dell'IVA è stato superiore al previsto."], explanation: "\"Il gettito\" = revenue raised by a tax; \"superiore alle attese\" = above expectations." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The scheme has been extended.", answer: "La misura è stata prorogata.", altAnswers: ["Il provvedimento è stato prorogato.", "La misura è stata estesa."], explanation: "\"Prorogare\" = to extend a deadline; \"la proroga\" = the extension." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The extra revenue will fund the tax cut.", answer: "L'extragettito servirà a finanziare il taglio delle tasse.", altAnswers: ["L'extragettito finanzierà il taglio delle tasse.", "L'extragettito servirà per finanziare il taglio delle tasse."], explanation: "\"Servire a\" + infinitive = to be used for." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Public debt rose again last year.", answer: "L'anno scorso il debito pubblico è salito di nuovo.", altAnswers: ["Il debito pubblico è aumentato di nuovo l'anno scorso.", "L'anno scorso il debito pubblico è aumentato ancora.", "Il debito pubblico è salito di nuovo l'anno scorso."], explanation: "\"Di nuovo\" or \"ancora\" = again." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Commission could open an infringement procedure.", answer: "La Commissione potrebbe aprire una procedura d'infrazione.", altAnswers: ["La Commissione potrebbe avviare una procedura d'infrazione.", "La Commissione potrebbe aprire una procedura di infrazione."], explanation: "\"Procedura d'infrazione\" = EU infringement procedure." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The opposition says the government is putting its hands in Italians' pockets.", answer: "L'opposizione dice che il governo mette le mani nelle tasche degli italiani.", altAnswers: ["L'opposizione sostiene che il governo mette le mani nelle tasche degli italiani.", "L'opposizione accusa il governo di mettere le mani nelle tasche degli italiani."], explanation: "The stock accusation of raising taxes. Nationalities are lower-case." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tax evasion costs the state billions every year.", answer: "L'evasione fiscale costa allo Stato miliardi ogni anno.", altAnswers: ["L'evasione fiscale costa ogni anno miliardi allo Stato.", "L'evasione costa allo Stato miliardi ogni anno."], explanation: "\"Lo Stato\" with a capital S for the state." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The government is counting on [spending cuts].", sentence: "Il governo punta sulla ___.", answer: "spending review", altAnswers: ["revisione della spesa"], explanation: "\"La spending review\" is feminine in Italian." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The deficit [is expected to] fall next year.", sentence: "Il deficit ___ scendere l'anno prossimo.", answer: "dovrebbe", explanation: "\"Dovrebbe\" + infinitive for a forecast." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The budget law must be approved [by] December 31.", sentence: "La legge di bilancio va approvata ___ 31 dicembre.", answer: "entro il", explanation: "\"Entro il\" + date = by. \"Va approvata\" = must be approved." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A one-off [benefit] for families.", sentence: "Un ___ una tantum per le famiglie.", answer: "bonus", explanation: "\"Bonus\" is invariable; \"una tantum\" = one-off, from Latin." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The tax burden] fell slightly.", sentence: "___ è scesa leggermente.", answer: "La pressione fiscale", explanation: "Feminine: \"è scesa\"." },
      { type: "word-order", prompt: "Put the words in order to say: The margins are tight but the accounts are in order.", words: ["I", "margini", "sono", "stretti,", "ma", "i", "conti", "sono", "in", "ordine."], translation: "The margins are tight but the accounts are in order.", explanation: "Two stock phrases of budget politics." },
      { type: "multiple-choice", question: "Which sentence describes tax avoidance, not evasion?", options: ["La società ha sfruttato una lacuna della legge per pagare meno.", "La società non ha dichiarato metà dei ricavi.", "La società ha emesso fatture false.", "La società non ha mai pagato l'IVA."], correctIndex: 0, explanation: "Exploiting a loophole is \"elusione\"; hiding income is \"evasione\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il gettito", right: "tax take" },
          { left: "prorogare", right: "to extend (a deadline)" },
          { left: "una tantum", right: "one-off" },
          { left: "l'esercizio provvisorio", right: "provisional budget" },
          { left: "il credito d'imposta", right: "tax credit" },
        ],
        explanation: "Public finance vocabulary.",
      },
      { type: "listen-choose", audio: "Il governo assicura che i conti sono in ordine, ma l'opposizione parla di manovra senza coperture.", question: "What does the opposition say?", options: ["The budget has no funding.", "The accounts are in order.", "Taxes are being cut too little.", "The deficit is too low."], correctIndex: 0, explanation: "\"Senza coperture\" = unfunded." },
      { type: "dictation", audio: "Il rapporto tra debito e PIL resta sopra il 130%.", answer: "Il rapporto tra debito e PIL resta sopra il 130%.", altAnswers: ["Il rapporto tra debito e PIL resta sopra il 130 per cento.", "Il rapporto tra debito e PIL resta sopra il centotrenta per cento."], explanation: "\"Il 130%\": the article again." },
      { type: "speak", text: "Il gettito è stato superiore alle attese, ma i margini per nuove spese restano stretti.", prompt: "Say it in Italian: Revenue was higher than expected, but the room for new spending remains tight.", tip: "GET-ti-to: double t, stress on the first syllable.", explanation: "\"Gettito\" and \"margini\": two key budget words." },
    ],
  },
];
