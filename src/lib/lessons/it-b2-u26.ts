// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u26.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 26: Word Formation, Part 2. Compound
// nouns and their plurals, nouns from verbs and adjectives, verb families
// and the nominal style of formal writing.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U26: Lesson[] = [
  {
    slug: "b2-compound-nouns",
    level: "IT-B2",
    number: 1,
    title: "Compound Nouns",
    summary: "Understand and use compound nouns like portafoglio, cavatappi, asciugacapelli, grattacielo and capolavoro, and form their plurals.",
    duration: "17 min",
    sections: [
      {
        heading: "Verb + noun: tools and objects",
        body: [
          "Italian builds many everyday words by joining a verb stem and a noun: \"apri-\" + \"scatole\" gives \"l'apriscatole\" (can opener), \"cava-\" + \"tappi\" gives \"il cavatappi\" (corkscrew), \"asciuga-\" + \"capelli\" gives \"l'asciugacapelli\" (hairdryer). The verb part is the \"tu\" imperative form, and the whole word is usually masculine, whatever the gender of the noun inside: \"il portacenere\" (ashtray), although \"la cenere\" is feminine.",
          "These compounds are easy to guess once you know the verb: \"lo stuzzicadenti\" (toothpick: \"stuzzicare\", to poke, + \"denti\"), \"il portaombrelli\" (umbrella stand), \"il tagliaerba\" (lawnmower). The stem \"porta-\" (carries, holds) is especially productive: \"il portachiavi\" (key ring), \"il portamonete\" (coin purse), \"il portapenne\" (pencil case).",
          "If the noun inside is already plural, the compound doesn't change in the plural: \"il cavatappi\" → \"i cavatappi\", \"l'apriscatole\" → \"gli apriscatole\", \"la lavastoviglie\" → \"le lavastoviglie\" (one of the few feminine ones, from \"la macchina lavastoviglie\").",
        ],
        examples: [
          { es: "Hai visto il cavatappi? Non riesco ad aprire il vino.", en: "Have you seen the corkscrew? I can't open the wine." },
          { es: "In albergo c'era l'asciugacapelli in bagno.", en: "At the hotel there was a hairdryer in the bathroom." },
          { es: "Abbiamo due apriscatole, ma nessuno funziona.", en: "We have two can openers, but neither works." },
          { es: "Metti i piatti nella lavastoviglie.", en: "Put the plates in the dishwasher." },
          { es: "I portachiavi erano in offerta al mercato.", en: "The key rings were on sale at the market." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you seen the corkscrew? (to a friend)", answer: "Hai visto il cavatappi?", explanation: "\"Cava-\" (cavare, to pull out) + \"tappi\" (corks)." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We have two [can openers].", sentence: "Abbiamo due ___.", answer: "apriscatole", explanation: "The noun inside is plural, so the compound doesn't change." },
          { type: "multiple-choice", question: "What's the plural of \"il cavatappi\"?", options: ["i cavatappi", "i cavatappis", "i cavatappii", "le cavatappi"], correctIndex: 0, explanation: "Invariable: the noun part is already plural." },
        ],
      },
      {
        heading: "Plurals that change",
        body: [
          "When the noun inside is masculine singular, the compound takes a normal plural: \"il grattacielo\" → \"i grattacieli\" (skyscrapers), \"il passaporto\" → \"i passaporti\", \"il portafoglio\" → \"i portafogli\". When it's feminine singular, the compound is invariable: \"l'aspirapolvere\" → \"gli aspirapolvere\" (vacuum cleaners), \"il portacenere\" → \"i portacenere\" (ashtrays).",
          "Noun + noun compounds usually change only the end: \"l'arcobaleno\" → \"gli arcobaleni\", \"il capolavoro\" → \"i capolavori\" (masterpieces). Noun + adjective compounds change both parts: \"la cassaforte\" → \"le casseforti\" (safes).",
          "A few compounds are written as two separate words: \"la parola chiave\" → \"le parole chiave\" (keywords), \"il treno merci\" → \"i treni merci\" (freight trains), \"la pausa pranzo\" → \"le pause pranzo\". Here only the first noun takes the plural, because the second one works like a description.",
        ],
        examples: [
          { es: "New York è famosa per i grattacieli.", en: "New York is famous for its skyscrapers." },
          { es: "Ho perso il portafoglio con tutti i documenti.", en: "I lost my wallet with all my documents." },
          { es: "Al controllo ci chiesero i passaporti.", en: "At the check they asked for our passports." },
          { es: "Gli Uffizi sono pieni di capolavori.", en: "The Uffizi is full of masterpieces." },
          { es: "Le casseforti delle camere sono nell'armadio.", en: "The room safes are in the closet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I lost my wallet.", answer: "Ho perso il portafoglio.", altAnswers: ["Ho perso il mio portafoglio.", "Ho perso il portafogli."], explanation: "\"Il portafoglio\": plural \"i portafogli\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Uffizi is full of masterpieces.", answer: "Gli Uffizi sono pieni di capolavori.", altAnswers: ["Gli Uffizi sono pieni zeppi di capolavori.", "La Galleria degli Uffizi è piena di capolavori."], explanation: "\"Gli Uffizi\" is plural; \"capolavoro\" → \"capolavori\"." },
          { type: "listen-choose", audio: "Le casseforti delle camere sono nell'armadio.", question: "Where are the safes?", options: ["in the closet", "at reception", "under the bed", "in the bathroom"], correctIndex: 0, explanation: "\"Nell'armadio\"; \"casseforti\" changes both parts." },
        ],
      },
      {
        heading: "Capo-: head of, or a thing",
        body: [
          "Compounds with \"capo-\" depend on meaning. When the word is a person who is head of something, \"capo\" takes the plural and the rest stays: \"il capostazione\" → \"i capistazione\" (station masters), \"il capoufficio\" → \"i capiufficio\". When it's a thing, only the end changes: \"il capolavoro\" → \"i capolavori\", \"il capoluogo\" → \"i capoluoghi\" (regional capitals).",
          "For a woman: \"la capoufficio\" → \"le capoufficio\" (invariable). If you're unsure, the dictionary gives the plural, and in speech many people simply avoid it: \"i responsabili dell'ufficio\".",
        ],
        examples: [
          { es: "Il capostazione ha fischiato e il treno è partito.", en: "The station master blew the whistle and the train left." },
          { es: "I capiufficio si riuniscono il lunedì.", en: "The office heads meet on Mondays." },
          { es: "Bologna è il capoluogo dell'Emilia-Romagna.", en: "Bologna is the regional capital of Emilia-Romagna." },
          { es: "L'Italia ha venti capoluoghi di regione.", en: "Italy has twenty regional capitals." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bologna is the regional capital of Emilia-Romagna.", answer: "Bologna è il capoluogo dell'Emilia-Romagna.", altAnswers: ["Bologna è il capoluogo di regione dell'Emilia-Romagna.", "Bologna è il capoluogo dell'Emilia Romagna."], explanation: "\"Il capoluogo\" = the main town of a region or province." },
          { type: "speak", text: "Il capostazione ha fischiato e il treno è partito.", prompt: "Tell the story: The station master blew the whistle and the train left.", tip: "fi-SCHIA-to: sch is hard, like sk.", explanation: "\"Capostazione\": plural \"capistazione\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Put the plates in the dishwasher. (to a friend)", answer: "Metti i piatti nella lavastoviglie.", altAnswers: ["Metti i piatti in lavastoviglie."], explanation: "\"La lavastoviglie\", feminine and invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "New York is famous for its skyscrapers.", answer: "New York è famosa per i grattacieli.", altAnswers: ["New York è famosa per i suoi grattacieli."], explanation: "\"Gratta-\" + \"cielo\": scratches the sky." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the check they asked for our passports.", answer: "Al controllo ci hanno chiesto i passaporti.", altAnswers: ["Al controllo ci chiesero i passaporti.", "Al controllo ci hanno chiesto il passaporto."], explanation: "\"Passaporto\" → \"passaporti\": regular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The vacuum cleaners are on the second floor.", answer: "Gli aspirapolvere sono al secondo piano.", explanation: "Feminine noun inside (\"la polvere\"): invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy has twenty regional capitals.", answer: "L'Italia ha venti capoluoghi di regione.", altAnswers: ["L'Italia ha 20 capoluoghi di regione.", "In Italia ci sono venti capoluoghi di regione."], explanation: "\"Capoluogo\" → \"capoluoghi\": a thing, the end changes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The office heads meet on Mondays.", answer: "I capiufficio si riuniscono il lunedì.", altAnswers: ["I capiufficio si riuniscono di lunedì."], explanation: "People: \"capo\" takes the plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There are two [rainbows] in the sky!", sentence: "Ci sono due ___ nel cielo!", answer: "arcobaleni", explanation: "Noun + noun: only the end changes." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The room [safes] don't work.", sentence: "Le ___ delle camere non funzionano.", answer: "casseforti", explanation: "Noun + adjective: both parts change." },
      { type: "word-order", prompt: "Put the words in order to say: At the hotel there was a hairdryer in the bathroom.", words: ["In albergo", "c'era", "l'asciugacapelli", "in bagno."], translation: "At the hotel there was a hairdryer in the bathroom.", explanation: "\"Asciuga-\" + \"capelli\"." },
      { type: "matching", instructions: "Match the compound to its meaning.", pairs: [{ left: "il cavatappi", right: "corkscrew" }, { left: "l'apriscatole", right: "can opener" }, { left: "il grattacielo", right: "skyscraper" }, { left: "il portafoglio", right: "wallet" }, { left: "il capolavoro", right: "masterpiece" }], explanation: "Verb + noun and noun + noun compounds." },
      { type: "dictation", audio: "Ho perso il portafoglio e i passaporti alla stazione.", explanation: "\"Passaporti\": regular plural." },
      { type: "speak", text: "Gli asciugacapelli e gli apriscatole non cambiano al plurale.", prompt: "State the rule: Hairdryers and can openers don't change in the plural.", tip: "a-sciu-ga-CA-pel-li: stress on the noun part.", explanation: "Invariable compounds." },
    ],
  },
  {
    slug: "b2-nominalization-verbs",
    level: "IT-B2",
    number: 2,
    title: "Verbs into Nouns",
    summary: "Turn verbs into nouns: aumentare → aumento, crescere → crescita, scegliere → scelta, partire → partenza, decidere → decisione.",
    duration: "17 min",
    sections: [
      {
        heading: "-mento and -zione",
        body: [
          "The most productive endings are \"-mento\" (masculine) and \"-zione\" / \"-sione\" (feminine). \"Pagare\" → \"il pagamento\", \"cambiare\" → \"il cambiamento\", \"migliorare\" → \"il miglioramento\", \"investire\" → \"l'investimento\". \"Ridurre\" → \"la riduzione\", \"costruire\" → \"la costruzione\", \"decidere\" → \"la decisione\", \"discutere\" → \"la discussione\".",
          "The \"-sione\" nouns often follow the past participle: \"deciso\" → \"decisione\", \"espresso\" → \"espressione\", \"diviso\" → \"divisione\". You already know many from Intermediate: here the aim is to produce them quickly and use them in sentences.",
          "A few common verbs have two nouns with different meanings: \"cambiare\" → \"il cambio\" (exchange, swap, gear change: \"il cambio dell'olio\") and \"il cambiamento\" (change, transformation); \"sentire\" → \"il sentimento\" (feeling, emotion) and \"la sensazione\" (sensation, impression). Choose the noun that fits the context.",
        ],
        examples: [
          { es: "Il pagamento va effettuato entro fine mese.", en: "Payment must be made by the end of the month." },
          { es: "C'è stato un miglioramento evidente.", en: "There has been a clear improvement." },
          { es: "La riduzione delle tasse è stata rinviata.", en: "The tax cut has been postponed." },
          { es: "La decisione è stata presa all'unanimità.", en: "The decision was taken unanimously." },
          { es: "Dopo una lunga discussione, abbiamo cambiato idea.", en: "After a long discussion, we changed our minds." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There has been a clear improvement.", answer: "C'è stato un miglioramento evidente.", altAnswers: ["C'è stato un netto miglioramento.", "C'è stato un chiaro miglioramento.", "C'è stato un miglioramento netto."], explanation: "\"Migliorare\" → \"il miglioramento\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The decision] was taken unanimously.", sentence: "___ è stata presa all'unanimità.", answer: "La decisione", explanation: "\"Decidere\" → \"deciso\" → \"la decisione\"; you \"prendi\" a decision." },
          { type: "multiple-choice", question: "Which is the noun from \"ridurre\"?", options: ["la riduzione", "il riducimento", "la riducenza", "la ridotta"], correctIndex: 0, explanation: "\"Ridurre\" → \"la riduzione\"." },
        ],
      },
      {
        heading: "Nouns from the participle: -ita, -ata, -ura",
        body: [
          "Many feminine nouns end in \"-ita\", \"-uta\", \"-sa\", \"-ta\" or \"-ura\", close to the past participle or to an older form of the stem. Learn them as pairs: \"crescere\" → \"la crescita\", \"nascere\" → \"la nascita\", \"vendere\" → \"la vendita\", \"perdere\" → \"la perdita\", \"uscire\" → \"l'uscita\", \"cadere\" → \"la caduta\", \"spendere\" → \"la spesa\", \"scegliere\" → \"la scelta\", \"chiudere\" → \"la chiusura\", \"aprire\" → \"l'apertura\".",
          "Note \"la spesa\" (spending, and the shopping) and \"la scelta\" (choice), from the irregular participles \"speso\" and \"scelto\".",
          "Some of these nouns have a second, everyday meaning: \"la spesa\" is also the food shopping (\"fare la spesa\"), \"l'uscita\" is the exit and \"l'entrata\" the entrance, \"la caduta\" is a fall, \"la perdita\" a loss and also a leak (\"una perdita d'acqua\"). Formal reports love them: \"la crescita del PIL\" (GDP growth), \"la perdita di posti di lavoro\".",
        ],
        examples: [
          { es: "La crescita economica è stata lenta.", en: "Economic growth has been slow." },
          { es: "Le vendite sono calate del dieci per cento.", en: "Sales have fallen by ten percent." },
          { es: "La chiusura del negozio è prevista per giugno.", en: "The closure of the store is planned for June." },
          { es: "Hai fatto una buona scelta.", en: "You made a good choice." },
          { es: "Le spese di spedizione sono incluse.", en: "Shipping costs are included." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Economic growth has been slow.", answer: "La crescita economica è stata lenta.", explanation: "\"Crescere\" → \"la crescita\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You made a good choice. (to a friend)", answer: "Hai fatto una buona scelta.", altAnswers: ["Hai fatto un'ottima scelta."], explanation: "\"Scegliere\" → \"scelto\" → \"la scelta\"." },
          { type: "listen-choose", audio: "Le vendite sono calate del dieci per cento.", question: "What happened to sales?", options: ["They fell by ten percent.", "They rose by ten percent.", "They fell by two percent.", "They stayed the same."], correctIndex: 0, explanation: "\"Calare\" = to fall; \"del\" for the amount." },
        ],
      },
      {
        heading: "Short nouns and -enza / -anza",
        body: [
          "Some nouns are just the stem + \"-o\" or \"-a\": \"aumentare\" → \"l'aumento\", \"arrivare\" → \"l'arrivo\", \"rinviare\" → \"il rinvio\", \"sostare\" → \"la sosta\", \"verificare\" → \"la verifica\". Verbs ending in -ire and -ere often give \"-enza\", and verbs ending in -are give \"-anza\": \"partire\" → \"la partenza\", \"esistere\" → \"l'esistenza\", \"tollerare\" → \"la tolleranza\".",
          "Short nouns are typical of economic news: \"il calo\" (fall, from \"calare\"), \"il rialzo\" (rise), \"il ribasso\" (fall in price), \"il taglio\" (cut, from \"tagliare\"), \"il blocco\" (freeze, block). They combine with \"di\" and a figure: \"un calo del 5%\", \"un taglio dei costi del 10%\", \"il blocco degli affitti\".",
        ],
        examples: [
          { es: "L'aumento dei prezzi preoccupa le famiglie.", en: "The rise in prices worries families." },
          { es: "La partenza è alle sette in punto.", en: "Departure is at seven sharp." },
          { es: "Il rinvio della riunione non è stato comunicato.", en: "The postponement of the meeting wasn't announced." },
          { es: "All'arrivo troverete le chiavi alla reception.", en: "On arrival you will find the keys at reception." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rise in prices worries families.", answer: "L'aumento dei prezzi preoccupa le famiglie.", explanation: "\"Aumentare\" → \"l'aumento\"; \"dei prezzi\" = in prices." },
          { type: "speak", text: "La partenza è alle sette in punto: all'arrivo troverete le chiavi.", prompt: "Brief the group: Departure is at seven sharp: on arrival you'll find the keys.", tip: "par-TEN-za: the z is voiceless, ts.", explanation: "Nouns instead of verbs: \"partenza\", \"arrivo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Payment must be made by the end of the month.", answer: "Il pagamento va effettuato entro fine mese.", altAnswers: ["Il pagamento va effettuato entro la fine del mese.", "Il pagamento deve essere effettuato entro fine mese.", "Il pagamento va fatto entro fine mese."], explanation: "\"Pagare\" → \"il pagamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tax cut has been postponed.", answer: "La riduzione delle tasse è stata rinviata.", altAnswers: ["La riduzione delle tasse è stata rimandata.", "Il taglio delle tasse è stato rinviato."], explanation: "\"Ridurre\" → \"la riduzione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The closure of the store is planned for June.", answer: "La chiusura del negozio è prevista per giugno.", altAnswers: ["La chiusura del negozio è prevista a giugno."], explanation: "\"Chiudere\" → \"la chiusura\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shipping costs are included.", answer: "Le spese di spedizione sono incluse.", altAnswers: ["Le spese di spedizione sono comprese."], explanation: "\"Spendere\" → \"la spesa\"; plural \"le spese\" = costs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The birth of the baby changed everything.", answer: "La nascita del bambino ha cambiato tutto.", altAnswers: ["La nascita della bambina ha cambiato tutto."], explanation: "\"Nascere\" → \"la nascita\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The company has recorded a loss.", answer: "L'azienda ha registrato una perdita.", altAnswers: ["La società ha registrato una perdita.", "L'azienda ha avuto una perdita."], explanation: "\"Perdere\" → \"la perdita\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Departure] is at seven sharp.", sentence: "___ è alle sette in punto.", answer: "La partenza", explanation: "\"Partire\" → \"la partenza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The opening] of the new library is on Saturday.", sentence: "___ della nuova biblioteca è sabato.", answer: "L'apertura", altAnswers: ["L'inaugurazione"], explanation: "\"Aprire\" → \"l'apertura\"." },
      { type: "word-order", prompt: "Put the words in order to say: After a long discussion, we changed our minds.", words: ["Dopo", "una lunga", "discussione,", "abbiamo cambiato", "idea."], translation: "After a long discussion, we changed our minds.", explanation: "\"Discutere\" → \"la discussione\"." },
      { type: "matching", instructions: "Match the verb to its noun.", pairs: [{ left: "crescere", right: "la crescita" }, { left: "scegliere", right: "la scelta" }, { left: "aumentare", right: "l'aumento" }, { left: "partire", right: "la partenza" }, { left: "cambiare", right: "il cambiamento" }], explanation: "Different endings, same idea." },
      { type: "dictation", audio: "Il rinvio della riunione non è stato comunicato a tutti.", explanation: "\"Rinviare\" → \"il rinvio\"." },
      { type: "speak", text: "L'aumento dei prezzi e la crescita lenta preoccupano le famiglie.", prompt: "Sum up the news: The rise in prices and the slow growth worry families.", tip: "CRE-sci-ta: stress on the first syllable.", explanation: "Two nouns as subject: plural verb." },
    ],
  },
  {
    slug: "b2-nominalization-adjectives",
    level: "IT-B2",
    number: 3,
    title: "Adjectives into Nouns",
    summary: "Turn adjectives into abstract nouns: felice → felicità, libero → libertà, bello → bellezza, debole → debolezza, paziente → pazienza.",
    duration: "17 min",
    sections: [
      {
        heading: "-ità: felicità, libertà",
        body: [
          "The ending \"-ità\" makes feminine, invariable nouns with a stressed final syllable: \"felice\" → \"la felicità\", \"libero\" → \"la libertà\", \"facile\" → \"la facilità\", \"serio\" → \"la serietà\", \"possibile\" → \"la possibilità\", \"utile\" → \"l'utilità\", \"vero\" → \"la verità\". The plural is the same: \"le possibilità\".",
          "The final \"à\" always has an accent, and many of these words look like English nouns in -ity: \"l'università\", \"la qualità\", \"la quantità\", \"la curiosità\". That makes them easy to understand, but beware of false friends: \"la sensibilità\" is sensitivity, and \"la comodità\" is comfort or convenience, not a commodity (\"una merce\").",
          "Adjectives in \"-bile\" become \"-bilità\": \"responsabile\" → \"la responsabilità\", \"disponibile\" → \"la disponibilità\" (availability, willingness).",
          "Watch the article. When English uses an abstract noun in a general sense, it drops the article; Italian keeps it: \"la libertà è preziosa\" (freedom is precious), \"la pazienza è una virtù\" (patience is a virtue), \"la verità fa male\" (the truth hurts, where English happens to keep it). Leave the article out only after \"con\", \"senza\" and \"per\" in set phrases: \"con pazienza\", \"senza difficoltà\", \"per curiosità\".",
        ],
        examples: [
          { es: "La libertà di stampa è un diritto fondamentale.", en: "Freedom of the press is a fundamental right." },
          { es: "Ho apprezzato la serietà dell'azienda.", en: "I appreciated the company's reliability." },
          { es: "Grazie per la disponibilità.", en: "Thank you for your help." },
          { es: "Ci sono due possibilità.", en: "There are two possibilities." },
          { es: "Dimmi la verità.", en: "Tell me the truth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are two possibilities.", answer: "Ci sono due possibilità.", explanation: "\"-ità\" nouns are invariable in the plural." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a big [responsibility].", sentence: "È una grande ___.", answer: "responsabilità", explanation: "\"-bile\" → \"-bilità\"." },
          { type: "multiple-choice", question: "\"Grazie per la disponibilità\" in an email means ...", options: ["thanks for your help and willingness", "thanks for being available on the phone", "thanks for the products in stock", "thanks for your patience"], correctIndex: 0, explanation: "A standard polite formula." },
        ],
      },
      {
        heading: "-ezza and -ia",
        body: [
          "\"-ezza\" is common with short adjectives: \"bello\" → \"la bellezza\", \"debole\" → \"la debolezza\", \"triste\" → \"la tristezza\", \"chiaro\" → \"la chiarezza\", \"sicuro\" → \"la sicurezza\", \"ricco\" → \"la ricchezza\", \"lento\" → \"la lentezza\". \"-ia\" gives \"allegro\" → \"l'allegria\", \"cortese\" → \"la cortesia\", \"geloso\" → \"la gelosia\".",
          "There is no rule that tells you which ending a given adjective takes, so learn the noun with the adjective.",
          "Some adjectives give two nouns with different shades: \"giovane\" → \"la gioventù\" (youth as a period or a generation) and \"la giovinezza\" (youth as a stage of life). A few nouns don't look like their adjective at all: \"buono\" → \"la bontà\" (goodness, kindness), \"caldo\" → \"il calore\" (warmth, physical or emotional), \"umile\" → \"l'umiltà\" (humility).",
        ],
        examples: [
          { es: "La bellezza del paesaggio mi ha lasciato senza parole.", en: "The beauty of the landscape left me speechless." },
          { es: "La sua debolezza è la gola.", en: "His weakness is food." },
          { es: "La sicurezza dei passeggeri viene prima di tutto.", en: "Passenger safety comes first." },
          { es: "Ha risposto con molta cortesia.", en: "She replied very courteously." },
          { es: "Mi ha colpito la lentezza della burocrazia.", en: "I was struck by the slowness of the bureaucracy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Passenger safety comes first.", answer: "La sicurezza dei passeggeri viene prima di tutto.", altAnswers: ["La sicurezza dei passeggeri è al primo posto."], explanation: "\"Sicuro\" → \"la sicurezza\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was struck by the slowness of the bureaucracy.", answer: "Mi ha colpito la lentezza della burocrazia.", altAnswers: ["Mi ha colpito la lentezza burocratica."], explanation: "\"Lento\" → \"la lentezza\"; \"mi ha colpito\" = struck me." },
          { type: "listen-choose", audio: "La bellezza del paesaggio mi ha lasciato senza parole.", question: "What left the speaker speechless?", options: ["the beauty of the landscape", "the price of the trip", "the slowness of the train", "the kindness of the people"], correctIndex: 0, explanation: "\"La bellezza del paesaggio\"." },
        ],
      },
      {
        heading: "-enza, -anza and -itudine",
        body: [
          "Adjectives in \"-ente\" and \"-ante\" give \"-enza\" and \"-anza\": \"paziente\" → \"la pazienza\", \"presente\" → \"la presenza\", \"importante\" → \"l'importanza\", \"elegante\" → \"l'eleganza\". A few formal nouns end in \"-itudine\": \"solo\" → \"la solitudine\", \"grato\" → \"la gratitudine\".",
          "These nouns are the backbone of formal writing and of polite formulas: \"grazie per la pazienza\", \"ci scusiamo per l'inconveniente\", \"apprezziamo la Sua disponibilità\". In conversation Italians usually prefer the adjective with a verb: \"sei stato molto paziente\" rather than \"hai dimostrato grande pazienza\". Use the noun when you write and the adjective when you chat.",
        ],
        examples: [
          { es: "Ci vuole molta pazienza con i bambini piccoli.", en: "You need a lot of patience with small children." },
          { es: "Non sottovalutare l'importanza del riposo.", en: "Don't underestimate the importance of rest." },
          { es: "Vorrei esprimere la mia gratitudine a tutti voi.", en: "I'd like to express my gratitude to all of you." },
          { es: "La solitudine pesa soprattutto agli anziani.", en: "Loneliness weighs most on the elderly." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need a lot of patience.", answer: "Ci vuole molta pazienza.", altAnswers: ["Serve molta pazienza.", "Ci vuole tanta pazienza."], explanation: "\"Paziente\" → \"la pazienza\"." },
          { type: "speak", text: "Vorrei esprimere la mia gratitudine a tutti voi.", prompt: "In a speech: I'd like to express my gratitude to all of you.", tip: "gra-ti-TU-di-ne: stress on tu.", explanation: "\"Grato\" → \"la gratitudine\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Freedom of the press is a fundamental right.", answer: "La libertà di stampa è un diritto fondamentale.", explanation: "\"Libero\" → \"la libertà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tell me the truth. (to a friend)", answer: "Dimmi la verità.", explanation: "\"Vero\" → \"la verità\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His weakness is chocolate.", answer: "La sua debolezza è il cioccolato.", altAnswers: ["Il suo punto debole è il cioccolato.", "La sua debolezza è la cioccolata."], explanation: "\"Debole\" → \"la debolezza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't underestimate the importance of rest. (to a friend)", answer: "Non sottovalutare l'importanza del riposo.", explanation: "\"Importante\" → \"l'importanza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Happiness is made of small things.", answer: "La felicità è fatta di piccole cose.", explanation: "\"Felice\" → \"la felicità\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I appreciated the clarity of the explanation.", answer: "Ho apprezzato la chiarezza della spiegazione.", explanation: "\"Chiaro\" → \"la chiarezza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She replied with great [courtesy].", sentence: "Ha risposto con grande ___.", answer: "cortesia", explanation: "\"Cortese\" → \"la cortesia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Loneliness] weighs on the elderly.", sentence: "___ pesa agli anziani.", answer: "La solitudine", explanation: "\"Solo\" → \"la solitudine\"." },
      { type: "word-order", prompt: "Put the words in order to say: The beauty of the landscape left me speechless.", words: ["La bellezza", "del paesaggio", "mi ha lasciato", "senza parole."], translation: "The beauty of the landscape left me speechless.", explanation: "\"Bello\" → \"la bellezza\"." },
      { type: "matching", instructions: "Match the adjective to its noun.", pairs: [{ left: "libero", right: "la libertà" }, { left: "triste", right: "la tristezza" }, { left: "allegro", right: "l'allegria" }, { left: "elegante", right: "l'eleganza" }, { left: "grato", right: "la gratitudine" }], explanation: "Five different endings." },
      { type: "dictation", audio: "Ho apprezzato molto la serietà e la disponibilità dell'azienda.", explanation: "Two \"-ità\" nouns." },
      { type: "speak", text: "Per questo lavoro servono pazienza, precisione e senso di responsabilità.", prompt: "Describe the job: This job takes patience, precision and a sense of responsibility.", tip: "re-spon-sa-bi-li-TÀ: stress on the final à.", explanation: "Three abstract nouns." },
    ],
  },
  {
    slug: "b2-nominal-style",
    level: "IT-B2",
    number: 4,
    title: "The Nominal Style",
    summary: "Rewrite sentences in the formal nominal style of news, notices and reports: dopo l'arrivo del treno, in seguito alla decisione.",
    duration: "17 min",
    sections: [
      {
        heading: "From clause to noun phrase",
        body: [
          "Formal Italian likes to replace a whole clause with a noun: \"dopo che il treno è arrivato\" becomes \"dopo l'arrivo del treno\"; \"prima che partiate\" becomes \"prima della partenza\". The subject of the verb turns into \"di\" + noun: \"il treno arriva\" → \"l'arrivo del treno\"; the object does the same: \"aprire il museo\" → \"l'apertura del museo\".",
          "The result is shorter and more impersonal, which is why it dominates notices, reports, headlines and official letters. In speech it can sound stiff, so use it when you write.",
          "Watch what happens to the other words. A subject or object becomes \"di\" + article (\"l'arrivo del treno\", \"la chiusura delle scuole\"); the agent of a passive becomes \"da parte di\" (\"l'approvazione della legge da parte del Parlamento\"). Adverbs turn into adjectives: \"decidere rapidamente\" → \"una decisione rapida\", \"il treno è arrivato in ritardo\" → \"l'arrivo in ritardo del treno\".",
        ],
        examples: [
          { es: "Dopo l'arrivo del treno, i passeggeri sono scesi.", en: "After the train arrived, the passengers got off." },
          { es: "Prima della partenza, controllate i documenti.", en: "Before departure, check your documents." },
          { es: "L'apertura del museo è prevista per maggio.", en: "The museum is due to open in May." },
          { es: "Al momento della firma, il contratto diventa valido.", en: "When it is signed, the contract becomes valid." },
          { es: "Durante la costruzione del ponte, la strada resterà chiusa.", en: "While the bridge is being built, the road will stay closed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "After the train arrived, the passengers got off.", answer: "Dopo l'arrivo del treno, i passeggeri sono scesi.", altAnswers: ["Dopo l'arrivo del treno i passeggeri sono scesi.", "Dopo l'arrivo del treno, i passeggeri scesero."], explanation: "\"Il treno è arrivato\" → \"l'arrivo del treno\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[Before departure], check your documents.", sentence: "___, controllate i documenti.", answer: "Prima della partenza", explanation: "\"Prima di\" + article + noun." },
          { type: "multiple-choice", question: "Which is the nominal version of \"quando il contratto viene firmato\"?", options: ["al momento della firma del contratto", "quando si firma il contratto", "firmando il contratto", "dopo aver firmato il contratto"], correctIndex: 0, explanation: "A noun (\"la firma\") replaces the verb." },
        ],
      },
      {
        heading: "Cause and consequence as nouns",
        body: [
          "Causes and results become prepositional phrases: \"in seguito a\" (following), \"a causa di\" (because of), \"per\" + noun, \"grazie a\", \"in vista di\" (in view of, ahead of), \"in caso di\" (in case of). \"Poiché il governo ha deciso\" → \"in seguito alla decisione del governo\"; \"se piove\" → \"in caso di pioggia\".",
          "Purpose and concession work the same way. \"Per\" + infinitive becomes \"per\" or \"ai fini di\" + noun: \"per ridurre i costi\" → \"per la riduzione dei costi\". \"Anche se\" + verb becomes \"nonostante\" or \"malgrado\" + noun: \"anche se pioveva\" → \"nonostante la pioggia\", \"anche se il treno era in ritardo\" → \"malgrado il ritardo del treno\".",
        ],
        examples: [
          { es: "In seguito alla decisione del governo, le scuole resteranno chiuse.", en: "Following the government's decision, schools will remain closed." },
          { es: "A causa dello sciopero, molti treni sono stati cancellati.", en: "Because of the strike, many trains were canceled." },
          { es: "In caso di pioggia, il concerto si terrà al chiuso.", en: "If it rains, the concert will be held indoors." },
          { es: "In vista dell'estate, il Comune ha aumentato i controlli.", en: "Ahead of the summer, the council has stepped up checks." },
          { es: "Grazie all'intervento dei vigili del fuoco, nessuno è rimasto ferito.", en: "Thanks to the firefighters, nobody was hurt." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "If it rains, the concert will be held indoors.", answer: "In caso di pioggia, il concerto si terrà al chiuso.", altAnswers: ["In caso di pioggia il concerto si terrà al chiuso.", "In caso di maltempo, il concerto si terrà al chiuso."], explanation: "\"Se piove\" → \"in caso di pioggia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Because of the strike, many trains were canceled.", answer: "A causa dello sciopero, molti treni sono stati cancellati.", altAnswers: ["A causa dello sciopero, molti treni sono stati soppressi.", "A causa dello sciopero molti treni sono stati cancellati."], explanation: "\"A causa di\" + noun." },
          { type: "listen-choose", audio: "In seguito alla decisione del governo, le scuole resteranno chiuse.", question: "Why will schools stay closed?", options: ["because the government decided so", "because of a strike", "because of the weather", "because of repairs"], correctIndex: 0, explanation: "\"In seguito alla decisione del governo\"." },
        ],
      },
      {
        heading: "Headlines and notices",
        body: [
          "Headlines often drop the verb altogether: \"Aumento dei prezzi: proteste dei consumatori\", \"Chiusura della A1 per lavori\", \"Rinvio della partita per maltempo\". Notices use \"è prevista\" / \"è vietata\" + noun: \"è prevista la chiusura\", \"è vietata la sosta\".",
          "Typical headline vocabulary: \"il via libera\" (the green light), \"lo stop\" (halt), \"la stretta su\" (crackdown on), \"il caos\". A comma or a colon separates topic and news: \"Treni, nuovo sciopero venerdì\", \"Scuola: via libera alla riforma\". To read headlines, mentally put the verb back: \"è stato dato il via libera alla riforma\".",
        ],
        examples: [
          { es: "Chiusura dell'autostrada per lavori nel fine settimana.", en: "Highway closed for road work on the weekend." },
          { es: "Rinvio della partita per maltempo.", en: "Game postponed because of bad weather." },
          { es: "È prevista la riapertura della biblioteca a settembre.", en: "The library is expected to reopen in September." },
          { es: "È vietata la sosta su entrambi i lati.", en: "Parking is prohibited on both sides." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a headline.", source: "Game postponed because of bad weather.", answer: "Rinvio della partita per maltempo.", altAnswers: ["Partita rinviata per maltempo.", "Rinvio della partita a causa del maltempo."], explanation: "Headline style: noun, no verb." },
          { type: "speak", text: "È prevista la riapertura della biblioteca a settembre.", prompt: "Read the notice: The library is expected to reopen in September.", tip: "ri-a-per-TU-ra: stress on tu.", explanation: "\"È prevista\" + noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The museum is due to open in May.", answer: "L'apertura del museo è prevista per maggio.", altAnswers: ["L'apertura del museo è prevista a maggio.", "L'apertura del museo è prevista in maggio."], explanation: "\"Aprire il museo\" → \"l'apertura del museo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "While the bridge is being built, the road will stay closed.", answer: "Durante la costruzione del ponte, la strada resterà chiusa.", altAnswers: ["Durante la costruzione del ponte la strada resterà chiusa.", "Durante i lavori di costruzione del ponte, la strada resterà chiusa.", "Durante la costruzione del ponte, la strada rimarrà chiusa."], explanation: "\"Durante\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Following the government's decision, schools will remain closed.", answer: "In seguito alla decisione del governo, le scuole resteranno chiuse.", altAnswers: ["In seguito alla decisione del governo le scuole resteranno chiuse.", "In seguito alla decisione del governo, le scuole rimarranno chiuse."], explanation: "\"In seguito a\" = following." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Thanks to the firefighters, nobody was hurt.", answer: "Grazie all'intervento dei vigili del fuoco, nessuno è rimasto ferito.", altAnswers: ["Grazie ai vigili del fuoco, nessuno è rimasto ferito.", "Grazie all'intervento dei pompieri, nessuno è rimasto ferito."], explanation: "\"L'intervento\" makes the action a noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a headline.", source: "Highway closed for road work.", answer: "Chiusura dell'autostrada per lavori.", altAnswers: ["Autostrada chiusa per lavori."], explanation: "Headline: noun phrase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a notice.", source: "Parking is prohibited on both sides.", answer: "È vietata la sosta su entrambi i lati.", altAnswers: ["Divieto di sosta su entrambi i lati.", "Sosta vietata su entrambi i lati."], explanation: "\"La sosta\" from \"sostare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[When it is signed], the contract becomes valid.", sentence: "___, il contratto diventa valido.", answer: "Al momento della firma", explanation: "\"Al momento di\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[Ahead of the summer], checks have been stepped up.", sentence: "___, sono stati aumentati i controlli.", answer: "In vista dell'estate", explanation: "\"In vista di\" = in view of, ahead of." },
      { type: "word-order", prompt: "Put the words in order to say: The library is expected to reopen in September.", words: ["È prevista", "la riapertura", "della biblioteca", "a settembre."], translation: "The library is expected to reopen in September.", explanation: "Subject after \"è prevista\"." },
      { type: "multiple-choice", question: "Which phrase is the nominal version of \"perché il prezzo è aumentato\"?", options: ["a causa dell'aumento del prezzo", "perché si aumenta il prezzo", "aumentando il prezzo", "dopo che il prezzo aumentava"], correctIndex: 0, explanation: "\"Aumentare\" → \"l'aumento\" after \"a causa di\"." },
      { type: "dictation", audio: "A causa dello sciopero, molti treni sono stati cancellati.", explanation: "\"A causa di\" + noun." },
      { type: "speak", text: "In caso di pioggia, il concerto si terrà al chiuso.", prompt: "Make the announcement: If it rains, the concert will be held indoors.", tip: "si ter-RÀ: double r, stress on the last syllable.", explanation: "\"In caso di\" + noun." },
    ],
  },
  {
    slug: "b2-drill-word-formation-2",
    level: "IT-B2",
    number: 5,
    title: "Drill: Word Families",
    summary: "High-repetition production of verb, noun and adjective families: produrre, produzione, produttore, produttivo.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "One root, four words",
        body: [
          "Pattern: verb → action noun → person noun → adjective. \"Produrre\" → \"la produzione\" → \"il produttore\" → \"produttivo\". \"Lavorare\" → \"il lavoro\" → \"il lavoratore\" → \"lavorativo\". \"Insegnare\" → \"l'insegnamento\" → \"l'insegnante\". \"Scrivere\" → \"la scrittura\" → \"lo scrittore\" → \"scritto\".",
        ],
        examples: [
          { es: "La produzione di vino è aumentata.", en: "Wine production has increased." },
          { es: "È un piccolo produttore di olio.", en: "He's a small olive oil producer." },
          { es: "È stata una giornata molto produttiva.", en: "It was a very productive day." },
          { es: "L'orario lavorativo è di otto ore.", en: "The working day is eight hours long." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wine production has increased.", answer: "La produzione di vino è aumentata.", altAnswers: ["La produzione del vino è aumentata."], explanation: "\"Produrre\" → \"la produzione\"." },
          { type: "listen-choose", audio: "È un piccolo produttore di olio.", question: "Who is he?", options: ["an olive oil producer", "an oil company manager", "an olive oil seller", "a mechanic"], correctIndex: 0, explanation: "\"Il produttore\" = producer." },
        ],
      },
      {
        heading: "People and qualities",
        body: [
          "Person nouns: \"-tore\" / \"-trice\" (\"il traduttore\", \"la traduttrice\"), \"-ante\" / \"-ente\" (\"il cantante\", \"il dirigente\"), \"-ista\" (\"il giornalista\"). Adjectives: \"-ivo\", \"-ale\", \"-bile\", \"-oso\": \"creativo\", \"culturale\", \"leggibile\", \"faticoso\".",
        ],
        examples: [
          { es: "Mia sorella fa la traduttrice.", en: "My sister is a translator." },
          { es: "Il direttore ha incontrato i dirigenti.", en: "The director met the managers." },
          { es: "La sua firma non è leggibile.", en: "His signature isn't legible." },
          { es: "È un lavoro creativo ma faticoso.", en: "It's creative but tiring work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister is a translator.", answer: "Mia sorella fa la traduttrice.", altAnswers: ["Mia sorella è traduttrice.", "Mia sorella è una traduttrice."], explanation: "\"-tore\" → \"-trice\" for a woman." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's creative but tiring work.", answer: "È un lavoro creativo ma faticoso.", altAnswers: ["È un lavoro creativo però faticoso."], explanation: "\"Creare\" → \"creativo\"; \"la fatica\" → \"faticoso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a very productive day.", answer: "È stata una giornata molto produttiva.", altAnswers: ["È stata una giornata produttivissima."], explanation: "\"Produttivo\" agrees with \"giornata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Teaching is a difficult job.", answer: "L'insegnamento è un lavoro difficile.", altAnswers: ["Insegnare è un lavoro difficile.", "L'insegnamento è un mestiere difficile."], explanation: "\"Insegnare\" → \"l'insegnamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The workers are on strike.", answer: "I lavoratori sono in sciopero.", altAnswers: ["I lavoratori scioperano.", "I lavoratori stanno scioperando."], explanation: "\"Lavorare\" → \"il lavoratore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her handwriting is beautiful.", answer: "La sua scrittura è bellissima.", altAnswers: ["Ha una bellissima scrittura.", "Ha una scrittura bellissima.", "La sua calligrafia è bellissima."], explanation: "\"Scrivere\" → \"la scrittura\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city has a rich cultural life.", answer: "La città ha una ricca vita culturale.", altAnswers: ["La città ha una vita culturale ricca."], explanation: "\"La cultura\" → \"culturale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The investors want guarantees.", answer: "Gli investitori vogliono garanzie.", altAnswers: ["Gli investitori vogliono delle garanzie."], explanation: "\"Investire\" → \"l'investitore\"; \"garantire\" → \"la garanzia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This text isn't readable.", answer: "Questo testo non è leggibile.", explanation: "\"Leggere\" → \"leggibile\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The director met the managers.", answer: "Il direttore ha incontrato i dirigenti.", altAnswers: ["La direttrice ha incontrato i dirigenti."], explanation: "\"Dirigere\" → \"il direttore\", \"il dirigente\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's a famous [writer].", sentence: "È una ___ famosa.", answer: "scrittrice", explanation: "\"Scrittore\" → \"scrittrice\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The climb was [exhausting].", sentence: "La salita è stata ___.", answer: "faticosa", altAnswers: ["molto faticosa"], explanation: "\"La fatica\" → \"faticoso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's a [singer] in a band.", sentence: "Fa il ___ in un gruppo.", answer: "cantante", explanation: "\"Cantare\" → \"il cantante\"." },
      { type: "word-order", prompt: "Put the words in order to say: He's a small olive oil producer.", words: ["È", "un piccolo", "produttore", "di olio."], translation: "He's a small olive oil producer.", explanation: "\"Produttore\" from \"produrre\"." },
      { type: "dictation", audio: "La produzione è aumentata grazie ai nuovi investimenti.", explanation: "\"Produzione\" and \"investimenti\": two action nouns." },
      { type: "speak", text: "Il produttore, il prodotto, la produzione: è tutta la stessa famiglia.", prompt: "Say the word family: Producer, product, production: it's all the same family.", tip: "pro-du-ZIO-ne: stress on zio.", explanation: "Words from \"produrre\"." },
    ],
  },
  {
    slug: "b2-drill-nominal-rewriting",
    level: "IT-B2",
    number: 6,
    title: "Drill: Nominal Rewriting",
    summary: "High-repetition rewriting of everyday sentences into formal nominal style.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Time clauses into nouns",
        body: [
          "Pattern: \"dopo che\" / \"prima che\" / \"quando\" / \"mentre\" + verb → \"dopo\" / \"prima di\" / \"al momento di\" / \"durante\" + noun. The subject or object follows with \"di\": \"quando l'aereo atterra\" → \"all'atterraggio dell'aereo\".",
        ],
        examples: [
          { es: "Dopo la chiusura dei seggi, inizia lo spoglio.", en: "After the polling stations close, the count begins." },
          { es: "All'atterraggio dell'aereo, restate seduti.", en: "When the plane lands, remain seated." },
          { es: "Durante la visita è vietato fotografare.", en: "Photography is forbidden during the visit." },
          { es: "Prima dell'inizio dello spettacolo, spegnete i telefoni.", en: "Before the show begins, switch off your phones." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Before the show begins, switch off your phones.", answer: "Prima dell'inizio dello spettacolo, spegnete i telefoni.", altAnswers: ["Prima dell'inizio dello spettacolo spegnete i telefoni.", "Prima dell'inizio dello spettacolo, spegnete i cellulari."], explanation: "\"Iniziare\" → \"l'inizio\"." },
          { type: "listen-choose", audio: "All'atterraggio dell'aereo, restate seduti.", question: "When must passengers stay seated?", options: ["when the plane lands", "during take-off", "during the whole flight", "when the meal is served"], correctIndex: 0, explanation: "\"Atterrare\" → \"l'atterraggio\"." },
        ],
      },
      {
        heading: "Reasons and purposes into nouns",
        body: [
          "Pattern: \"perché\" + verb → \"per\" / \"a causa di\" + noun; \"per\" + infinitive → \"per\" / \"ai fini di\" + noun. \"Per ridurre i costi\" → \"per la riduzione dei costi\"; \"per iscriversi\" → \"ai fini dell'iscrizione\" (bureaucratic).",
        ],
        examples: [
          { es: "Il negozio è chiuso per ferie.", en: "The store is closed for vacation." },
          { es: "Sono necessari due documenti ai fini dell'iscrizione.", en: "Two documents are needed to enroll." },
          { es: "Il volo è stato cancellato per un guasto tecnico.", en: "The flight was canceled because of a technical fault." },
          { es: "Il piano prevede la riduzione dei costi.", en: "The plan involves cutting costs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The flight was canceled because of a technical fault.", answer: "Il volo è stato cancellato per un guasto tecnico.", altAnswers: ["Il volo è stato cancellato a causa di un guasto tecnico."], explanation: "\"Per\" + noun for the cause." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The plan involves cutting costs.", answer: "Il piano prevede la riduzione dei costi.", altAnswers: ["Il piano prevede il taglio dei costi."], explanation: "\"Prevedere\" + noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "After the polling stations close, the count begins.", answer: "Dopo la chiusura dei seggi, inizia lo spoglio.", altAnswers: ["Dopo la chiusura dei seggi inizia lo spoglio.", "Dopo la chiusura dei seggi, comincia lo spoglio."], explanation: "\"Chiudere\" → \"la chiusura\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Photography is forbidden during the visit.", answer: "Durante la visita è vietato fotografare.", altAnswers: ["Durante la visita è vietato scattare fotografie.", "Durante la visita è vietato fare fotografie."], explanation: "\"Durante\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The store is closed for vacation.", answer: "Il negozio è chiuso per ferie.", explanation: "\"Per ferie\": a fixed notice phrase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Two documents are needed to enroll.", answer: "Sono necessari due documenti ai fini dell'iscrizione.", altAnswers: ["Sono necessari due documenti per l'iscrizione.", "Per l'iscrizione sono necessari due documenti."], explanation: "\"Iscriversi\" → \"l'iscrizione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "When the results are published, we will contact you.", answer: "Alla pubblicazione dei risultati, La contatteremo.", altAnswers: ["Alla pubblicazione dei risultati, la contatteremo.", "Dopo la pubblicazione dei risultati, La contatteremo.", "Dopo la pubblicazione dei risultati, la contatteremo.", "Al momento della pubblicazione dei risultati, La contatteremo."], explanation: "\"Pubblicare\" → \"la pubblicazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Following the complaints, the price was lowered.", answer: "In seguito ai reclami, il prezzo è stato abbassato.", altAnswers: ["In seguito alle lamentele, il prezzo è stato abbassato.", "In seguito ai reclami il prezzo è stato ridotto."], explanation: "\"In seguito a\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Because the road is being repaired, buses will take a detour.", answer: "Per lavori di riparazione della strada, gli autobus faranno una deviazione.", altAnswers: ["A causa della riparazione della strada, gli autobus faranno una deviazione.", "Per la riparazione della strada, gli autobus faranno una deviazione.", "A causa dei lavori sulla strada, gli autobus faranno una deviazione."], explanation: "\"Riparare\" → \"la riparazione\"; \"deviare\" → \"la deviazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Before you leave, return the keys.", answer: "Prima della partenza, restituite le chiavi.", altAnswers: ["Prima della partenza restituite le chiavi.", "Prima della partenza, riconsegnate le chiavi.", "Prima della partenza, restituisca le chiavi."], explanation: "\"Partire\" → \"la partenza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[After the meeting ended], we went home.", sentence: "___, siamo tornati a casa.", answer: "Dopo la fine della riunione", altAnswers: ["Al termine della riunione", "Alla fine della riunione"], explanation: "\"Finire\" → \"la fine\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[When the plane lands], remain seated.", sentence: "___, restate seduti.", answer: "All'atterraggio dell'aereo", altAnswers: ["Al momento dell'atterraggio"], explanation: "\"Atterrare\" → \"l'atterraggio\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "The project aims [to improve the service].", sentence: "Il progetto punta ___.", answer: "al miglioramento del servizio", explanation: "\"Puntare a\" + noun." },
      { type: "word-order", prompt: "Put the words in order to say: Following the complaints, the price was lowered.", words: ["In seguito", "ai reclami,", "il prezzo", "è stato", "abbassato."], translation: "Following the complaints, the price was lowered.", explanation: "Cause as a noun phrase." },
      { type: "dictation", audio: "Dopo la chiusura dei seggi, inizia lo spoglio delle schede.", explanation: "\"Lo spoglio\" = the count." },
      { type: "speak", text: "In seguito ai reclami dei clienti, il prezzo è stato abbassato.", prompt: "Report the news: Following customers' complaints, the price was lowered.", tip: "re-CLA-mi: stress on cla.", explanation: "\"In seguito a\" + noun." },
    ],
  },
  {
    slug: "b2-error-hunt-compounds",
    level: "IT-B2",
    number: 7,
    title: "Error Hunt: Compounds and Nouns",
    summary: "Fix the typical mistakes with compound plurals and nouns from verbs: *i portafoglii, *la creschita, *la scegliuta.",
    duration: "17 min",
    sections: [
      {
        heading: "Compound plurals",
        body: [
          "\"*I portafoglii\": nouns in \"-glio\" lose the \"o\" and keep a single \"i\": \"il portafoglio\" → \"i portafogli\", like \"il figlio\" → \"i figli\". \"*Gli apriscatoli\": the noun inside is already plural, so it doesn't change: \"gli apriscatole\". \"*I capostazioni\": for people, \"capo\" takes the plural: \"i capistazione\".",
          "\"*Le cassaforti\": with noun + adjective, both parts change: \"le casseforti\". \"*I grattacielo\": the noun inside is masculine singular, so it takes a normal plural: \"i grattacieli\".",
        ],
        examples: [
          { es: "Nel cassetto ci sono due portafogli vecchi.", en: "There are two old wallets in the drawer." },
          { es: "Gli apriscatole sono nel secondo cassetto.", en: "The can openers are in the second drawer." },
          { es: "I capistazione hanno scioperato ieri.", en: "The station masters went on strike yesterday." },
          { es: "Le casseforti sono state forzate.", en: "The safes were broken into." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are two old wallets in the drawer.", answer: "Nel cassetto ci sono due portafogli vecchi.", altAnswers: ["Nel cassetto ci sono due vecchi portafogli.", "Ci sono due portafogli vecchi nel cassetto."], explanation: "\"Portafogli\" with one i." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The safes] were broken into.", sentence: "___ sono state forzate.", answer: "Le casseforti", explanation: "Both parts change: \"casse\" + \"forti\"." },
          { type: "multiple-choice", question: "Which plural is correct?", options: ["gli apriscatole", "gli apriscatoli", "le apriscatole", "gli aprescatole"], correctIndex: 0, explanation: "Invariable: \"scatole\" is already plural." },
        ],
      },
      {
        heading: "Nouns from verbs",
        body: [
          "\"*La creschita\": the noun is \"la crescita\", spelled with \"sc\" like the verb, no h. \"*La scegliuta\": \"scegliere\" has the irregular participle \"scelto\", and the noun is \"la scelta\". \"*Il pagazione\": the noun from \"pagare\" is \"il pagamento\". \"*La decidizione\": it's \"la decisione\", from \"deciso\".",
          "When in doubt, think of a related word you know: \"spesa\" from \"speso\", \"scelta\" from \"scelto\", \"risposta\" from \"risposto\".",
        ],
        examples: [
          { es: "La crescita dei prezzi è rallentata.", en: "Price growth has slowed." },
          { es: "È stata una scelta difficile.", en: "It was a difficult choice." },
          { es: "Il pagamento è stato rifiutato.", en: "The payment was declined." },
          { es: "Aspetto ancora una risposta.", en: "I'm still waiting for an answer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a difficult choice.", answer: "È stata una scelta difficile.", explanation: "\"Scegliere\" → \"la scelta\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The payment was declined.", answer: "Il pagamento è stato rifiutato.", altAnswers: ["Il pagamento è stato respinto.", "Il pagamento non è andato a buon fine."], explanation: "\"Pagare\" → \"il pagamento\"." },
          { type: "listen-choose", audio: "La crescita dei prezzi è rallentata.", question: "What has slowed?", options: ["price growth", "sales", "the economy", "wages"], correctIndex: 0, explanation: "\"La crescita dei prezzi\"." },
        ],
      },
      {
        heading: "Nouns from adjectives",
        body: [
          "\"*La felicitezza\": it's \"la felicità\". \"*La bellità\": it's \"la bellezza\". \"*La liberazza\": it's \"la libertà\" (\"la liberazione\" exists, but means liberation). Each adjective has its own ending: learn them in pairs.",
        ],
        examples: [
          { es: "La felicità non si compra.", en: "Happiness can't be bought." },
          { es: "La bellezza salverà il mondo, dicono.", en: "Beauty will save the world, they say." },
          { es: "Il 25 aprile si festeggia la Liberazione.", en: "On April 25 Italy celebrates Liberation Day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Happiness can't be bought.", answer: "La felicità non si compra.", altAnswers: ["La felicità non si può comprare."], explanation: "\"Felice\" → \"la felicità\"." },
          { type: "speak", text: "La felicità non si compra, ma la bellezza aiuta.", prompt: "Say it: Happiness can't be bought, but beauty helps.", tip: "fe-li-ci-TÀ: stress on the final à.", explanation: "Two abstract nouns with different endings." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The can openers are in the second drawer.", answer: "Gli apriscatole sono nel secondo cassetto.", explanation: "Invariable compound." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The station masters went on strike yesterday.", answer: "I capistazione hanno scioperato ieri.", altAnswers: ["Ieri i capistazione hanno scioperato.", "I capistazione ieri hanno scioperato."], explanation: "People: \"capi\" + \"stazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Milan has many skyscrapers now.", answer: "Milano ha molti grattacieli ormai.", altAnswers: ["Ormai Milano ha molti grattacieli.", "Adesso Milano ha molti grattacieli.", "Milano ora ha molti grattacieli."], explanation: "\"Grattacielo\" → \"grattacieli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm still waiting for an answer.", answer: "Aspetto ancora una risposta.", altAnswers: ["Sto ancora aspettando una risposta."], explanation: "\"Rispondere\" → \"risposto\" → \"la risposta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The decision surprised everyone.", answer: "La decisione ha sorpreso tutti.", altAnswers: ["La decisione ha stupito tutti."], explanation: "\"Decidere\" → \"la decisione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Beauty will save the world.", answer: "La bellezza salverà il mondo.", explanation: "\"Bello\" → \"la bellezza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My children lost their [wallets].", sentence: "I miei figli hanno perso i ___.", answer: "portafogli", explanation: "One i, like \"figli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Economic [growth] is slow.", sentence: "___ economica è lenta.", answer: "La crescita", explanation: "\"Sc\" + i: no h." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Freedom] of speech matters.", sentence: "___ di parola è importante.", answer: "La libertà", explanation: "Not \"liberazione\", which is liberation." },
      { type: "multi-select", question: "Which forms are correct?", options: ["i portafogli", "la scelta", "la creschita", "le casseforti", "i capostazioni"], correctIndexes: [0, 1, 3], explanation: "Correct: \"portafogli\", \"scelta\", \"casseforti\". The others should be \"crescita\" and \"capistazione\"." },
      { type: "dictation", audio: "È stata una scelta difficile, ma la crescita è ripartita.", explanation: "\"Scelta\" and \"crescita\"." },
      { type: "speak", text: "I portafogli e gli apriscatole sono nel cassetto.", prompt: "Say where they are: The wallets and the can openers are in the drawer.", tip: "por-ta-FO-gli: gli as in million.", explanation: "Two compound plurals." },
    ],
  },
  {
    slug: "b2-reading-lab-formal-text",
    level: "IT-B2",
    number: 8,
    title: "Reading Lab: A Formal Text",
    summary: "Read a town council notice about road work and spot the nominalizations that make it formal.",
    duration: "17 min",
    sections: [
      {
        heading: "The notice",
        body: [
          "Below is \"un avviso\" from a town council, the kind posted on the website and on walls. Read it once for the facts (what, where, when), then a second time to spot every noun that replaces a verb.",
          "Notices like this follow a fixed order: \"Oggetto\" (subject), the facts with dates and places, the restrictions with \"è vietato\" or \"è vietata\", the exceptions with \"è consentito\" or \"è garantito\", and the expected end. Dates use \"a partire dal\" (starting from) and \"fino al\" (until).",
        ],
        examples: [
          { es: "Oggetto: lavori di rifacimento della pavimentazione di via Garibaldi.", en: "Subject: resurfacing works in via Garibaldi." },
          { es: "A partire dal 3 marzo è prevista la chiusura al traffico del tratto compreso tra piazza Dante e via Verdi.", en: "From March 3 the stretch between piazza Dante and via Verdi will be closed to traffic." },
          { es: "La durata dei lavori è stimata in sei settimane.", en: "The works are expected to last six weeks." },
          { es: "Durante l'esecuzione dei lavori è vietata la sosta su entrambi i lati.", en: "While the works are carried out, parking is prohibited on both sides." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is happening in via Garibaldi?", options: ["The road surface is being redone.", "A new parking lot is being built.", "The street is being renamed.", "A market is being set up."], correctIndex: 0, explanation: "\"Rifacimento della pavimentazione\" = resurfacing." },
          { type: "multiple-choice", question: "How long will the works last?", options: ["about six weeks", "three months", "until March 3", "six days"], correctIndex: 0, explanation: "\"Stimata in sei settimane\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The works are expected to last six weeks.", answer: "La durata dei lavori è stimata in sei settimane.", altAnswers: ["La durata dei lavori è prevista in sei settimane.", "La durata prevista dei lavori è di sei settimane."], explanation: "\"Durare\" → \"la durata\"." },
        ],
      },
      {
        heading: "Access and transport",
        body: [
          "The second part deals with exceptions and buses. \"Consentito\" (allowed) and \"garantito\" (guaranteed) are typical; \"residenti\" are people who live in the street, \"mezzi di soccorso\" emergency vehicles.",
        ],
        examples: [
          { es: "Sarà comunque garantito l'accesso ai residenti e ai mezzi di soccorso.", en: "Access will nonetheless be guaranteed for residents and emergency vehicles." },
          { es: "Le linee 4 e 7 subiranno una deviazione lungo viale Mazzini.", en: "Bus routes 4 and 7 will be diverted along viale Mazzini." },
          { es: "La fermata di piazza Dante sarà temporaneamente sospesa.", en: "The piazza Dante stop will be temporarily suspended." },
          { es: "Al termine dei lavori è prevista la riapertura al traffico.", en: "At the end of the works the road will reopen to traffic." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Who can still drive into the street?", options: ["residents and emergency vehicles", "nobody", "buses only", "delivery vans"], correctIndex: 0, explanation: "\"L'accesso ai residenti e ai mezzi di soccorso\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Bus routes 4 and 7 will be diverted.", answer: "Le linee 4 e 7 subiranno una deviazione.", altAnswers: ["Le linee 4 e 7 saranno deviate."], explanation: "\"Subire una deviazione\" = to be diverted." },
          { type: "listen-choose", audio: "La fermata di piazza Dante sarà temporaneamente sospesa.", question: "What happens to the bus stop?", options: ["It's suspended for a while.", "It moves permanently.", "It gets a new shelter.", "It stays open at night only."], correctIndex: 0, explanation: "\"Temporaneamente sospesa\"." },
        ],
      },
      {
        heading: "Spotting the nouns",
        body: [
          "Count the action nouns: \"il rifacimento\" (rifare), \"la pavimentazione\" (pavimentare), \"la chiusura\" (chiudere), \"la durata\" (durare), \"l'esecuzione\" (eseguire), \"la sosta\" (sostare), \"l'accesso\" (accedere), \"la deviazione\" (deviare), \"il termine\" (terminare), \"la riapertura\" (riaprire). Ten in a short notice: that's the nominal style.",
        ],
        examples: [
          { es: "Rifare la strada → il rifacimento della strada.", en: "To redo the road → the redoing of the road." },
          { es: "Eseguire i lavori → l'esecuzione dei lavori.", en: "To carry out the works → the carrying out of the works." },
          { es: "Riaprire la strada → la riapertura della strada.", en: "To reopen the road → the reopening of the road." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The carrying out] of the works.", sentence: "___ dei lavori.", answer: "L'esecuzione", explanation: "\"Eseguire\" → \"l'esecuzione\"." },
          { type: "speak", text: "Al termine dei lavori è prevista la riapertura al traffico.", prompt: "Read the last line: At the end of the works the road will reopen to traffic.", tip: "ri-a-per-TU-ra: stress on tu.", explanation: "Two nouns: \"termine\", \"riapertura\"." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Can you park in via Garibaldi during the works?", options: ["No, on neither side.", "Yes, on one side.", "Only residents can.", "Only at night."], correctIndex: 0, explanation: "\"È vietata la sosta su entrambi i lati\"." },
      { type: "multiple-choice", question: "Which word in the notice is NOT a noun formed from a verb?", options: ["residenti", "chiusura", "deviazione", "riapertura"], correctIndex: 0, explanation: "\"Residenti\" is a person noun from an adjective; the others are action nouns." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "From March 3 the road will be closed to traffic.", answer: "A partire dal 3 marzo è prevista la chiusura della strada al traffico.", altAnswers: ["Dal 3 marzo è prevista la chiusura della strada al traffico.", "A partire dal 3 marzo è prevista la chiusura al traffico della strada."], explanation: "\"È prevista la chiusura\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Access will be guaranteed for residents.", answer: "Sarà garantito l'accesso ai residenti.", altAnswers: ["L'accesso ai residenti sarà garantito.", "Sarà comunque garantito l'accesso ai residenti."], explanation: "\"Accedere\" → \"l'accesso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Parking is prohibited during the works.", answer: "Durante i lavori è vietata la sosta.", altAnswers: ["È vietata la sosta durante i lavori.", "Durante l'esecuzione dei lavori è vietata la sosta."], explanation: "\"Sostare\" → \"la sosta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The stop will be temporarily suspended.", answer: "La fermata sarà temporaneamente sospesa.", altAnswers: ["La fermata verrà temporaneamente sospesa.", "La fermata sarà sospesa temporaneamente."], explanation: "Future passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "At the end of the works the road will reopen.", answer: "Al termine dei lavori è prevista la riapertura della strada.", altAnswers: ["Al termine dei lavori è prevista la riapertura.", "Alla fine dei lavori è prevista la riapertura della strada."], explanation: "\"Riaprire\" → \"la riapertura\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Resurfacing works] in via Garibaldi.", sentence: "___ della pavimentazione in via Garibaldi.", answer: "Lavori di rifacimento", explanation: "\"Rifare\" → \"il rifacimento\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The routes will [be diverted].", sentence: "Le linee ___.", answer: "subiranno una deviazione", altAnswers: ["saranno deviate", "verranno deviate"], explanation: "Nominal: \"subire una deviazione\"." },
      { type: "word-order", prompt: "Put the words in order to say: The works are expected to last six weeks.", words: ["La durata", "dei lavori", "è stimata", "in sei", "settimane."], translation: "The works are expected to last six weeks.", explanation: "\"Stimare in\" = to estimate at." },
      { type: "dictation", audio: "Durante l'esecuzione dei lavori è vietata la sosta su entrambi i lati.", explanation: "\"L'esecuzione\" and \"la sosta\"." },
      { type: "speak", text: "Hanno chiuso via Garibaldi per sei settimane: rifanno la strada e gli autobus fanno un giro diverso.", prompt: "Tell a neighbor in plain speech: They've closed via Garibaldi for six weeks: they're redoing the road and the buses go a different way.", tip: "ri-FAN-no: double n.", explanation: "The same news without the nominal style." },
    ],
  },
  {
    slug: "b2-dialogue-lab-objects",
    level: "IT-B2",
    number: 9,
    title: "Dialogue Lab: What Do You Call It?",
    summary: "Describe objects you can't name in a hardware store, and learn the compound names the assistant gives you.",
    duration: "17 min",
    sections: [
      {
        heading: "I don't know the word",
        body: [
          "Sophie has just moved into an apartment in Turin and goes to \"la ferramenta\" (the hardware store) with a list but without the words. She uses the classic strategies: \"come si chiama quella cosa che\" + verb, \"è una specie di\" (it's a kind of), \"serve per\" / \"si usa per\" + infinitive (it's used for), and the vague nouns \"il coso\" and \"l'aggeggio\" (the thingy, the gadget).",
          "The store owner helps with \"intende\" (do you mean), \"forse cerca\" and \"ah, ho capito\".",
        ],
        examples: [
          { es: "Buongiorno, cerco una cosa ma non so come si chiama.", en: "Good morning, I'm looking for something but I don't know what it's called." },
          { es: "È una specie di pinza che serve per aprire le noci.", en: "It's a kind of pincer that's used for opening walnuts." },
          { es: "Ah, intende uno schiaccianoci!", en: "Ah, you mean a nutcracker!" },
          { es: "Sì, quel coso lì! Ne avete uno?", en: "Yes, that thing! Do you have one?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for something but I don't know what it's called.", answer: "Cerco una cosa ma non so come si chiama.", altAnswers: ["Sto cercando una cosa ma non so come si chiama.", "Cerco una cosa, ma non so come si chiama."], explanation: "\"Come si chiama\" = what it's called." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a kind of pincer that's used for opening walnuts.", answer: "È una specie di pinza che serve per aprire le noci.", altAnswers: ["È una specie di pinza che serve ad aprire le noci.", "È una specie di pinza che si usa per aprire le noci."], explanation: "\"Servire per / a\" + infinitive = to be used for." },
          { type: "multiple-choice", question: "\"Lo schiaccianoci\" is built from ...", options: ["schiaccia (crush) + noci (walnuts)", "schiaccia + noce (one walnut) + -ci", "a brand name", "schiaccio + anoci"], correctIndex: 0, explanation: "Verb + plural noun: invariable." },
        ],
      },
      {
        heading: "Shape, material, use",
        body: [
          "To describe an object, give its shape (\"è rotondo\", \"ha la forma di\"), its material (\"è di plastica\", \"di metallo\", \"di legno\"), where it goes (\"si attacca al muro\", \"si mette sulla porta\") and what it does (\"serve a tenere\", \"si usa per appendere\").",
        ],
        examples: [
          { es: "È di legno, si attacca al muro e ci si appendono i cappotti.", en: "It's wooden, it goes on the wall and you hang coats on it." },
          { es: "Allora le serve un attaccapanni.", en: "Then you need a coat rack." },
          { es: "Poi una cosa di metallo per spremere i limoni.", en: "Then a metal thing for squeezing lemons." },
          { es: "Uno spremiagrumi. Manuale o elettrico?", en: "A citrus squeezer. Manual or electric?" },
          { es: "E quell'aggeggio con tanti buchi per scolare la pasta.", en: "And that gadget with lots of holes for draining pasta." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, to the store owner.", source: "It's wooden and it goes on the wall.", answer: "È di legno e si attacca al muro.", altAnswers: ["È di legno e si appende al muro.", "È di legno e va attaccato al muro."], explanation: "\"Di\" + material." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Then you need [a coat rack].", sentence: "Allora le serve ___.", answer: "un attaccapanni", explanation: "\"Attacca\" (hang) + \"panni\" (clothes)." },
          { type: "listen-choose", audio: "E quell'aggeggio con tanti buchi per scolare la pasta.", question: "What is Sophie describing?", options: ["a colander", "a grater", "a ladle", "a sieve for flour"], correctIndex: 0, explanation: "\"Per scolare la pasta\" → \"lo scolapasta\"." },
        ],
      },
      {
        heading: "Checking out",
        body: [
          "At the register, Sophie repeats the new words to fix them: \"quindi: lo schiaccianoci, l'attaccapanni, lo spremiagrumi e lo scolapasta\". The owner adds a tip and a joke: \"Le serve anche un portaombrelli? A Torino piove spesso!\"",
        ],
        examples: [
          { es: "Quindi: lo schiaccianoci, l'attaccapanni, lo spremiagrumi e lo scolapasta.", en: "So: the nutcracker, the coat rack, the citrus squeezer and the colander." },
          { es: "Le serve anche un portaombrelli?", en: "Do you need an umbrella stand too?" },
          { es: "Grazie, oggi ho imparato quattro parole nuove!", en: "Thanks, today I've learned four new words!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the store owner.", source: "Do you need an umbrella stand too?", answer: "Le serve anche un portaombrelli?", altAnswers: ["Le occorre anche un portaombrelli?", "Ha bisogno anche di un portaombrelli?"], explanation: "\"Porta\" + \"ombrelli\": invariable." },
          { type: "speak", text: "Grazie, oggi ho imparato quattro parole nuove!", prompt: "Thank the owner: Thanks, today I've learned four new words!", tip: "im-pa-RA-to: stress on ra.", explanation: "Passato prossimo with \"oggi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the store owner.", source: "Ah, you mean a nutcracker!", answer: "Ah, intende uno schiaccianoci!", altAnswers: ["Ah, vuole dire uno schiaccianoci!", "Ah, intende lo schiaccianoci!"], explanation: "\"Intende\" = do you mean (Lei)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need a metal thing for squeezing lemons.", answer: "Mi serve una cosa di metallo per spremere i limoni.", altAnswers: ["Ho bisogno di una cosa di metallo per spremere i limoni.", "Mi serve un aggeggio di metallo per spremere i limoni."], explanation: "\"Mi serve\" = I need." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You hang coats on it.", answer: "Ci si appendono i cappotti.", altAnswers: ["Ci si appendono le giacche.", "Ci appendi i cappotti."], explanation: "\"Ci\" (on it) + impersonal \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's round and made of plastic.", answer: "È rotondo e di plastica.", altAnswers: ["È rotondo ed è di plastica.", "È rotonda e di plastica."], explanation: "\"Di\" + material." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to the store owner.", source: "What's that thing called that you use to open bottles?", answer: "Come si chiama quella cosa che si usa per aprire le bottiglie?", altAnswers: ["Come si chiama quella cosa che serve per aprire le bottiglie?", "Come si chiama quella cosa che serve ad aprire le bottiglie?"], explanation: "It's \"l'apribottiglie\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today I've learned four new words.", answer: "Oggi ho imparato quattro parole nuove.", altAnswers: ["Oggi ho imparato quattro nuove parole."], explanation: "Passato prossimo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like [a citrus squeezer], please.", sentence: "Vorrei ___, per favore.", answer: "uno spremiagrumi", explanation: "\"Spremi\" + \"agrumi\": \"uno\" before s + consonant." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's [a kind of] pincer.", sentence: "È ___ pinza.", answer: "una specie di", altAnswers: ["un tipo di"], explanation: "\"Una specie di\" = a kind of." },
      { type: "word-order", prompt: "Put the words in order to say: It's a kind of pincer that's used for opening walnuts.", words: ["È una specie", "di pinza", "che serve", "per aprire", "le noci."], translation: "It's a kind of pincer that's used for opening walnuts.", explanation: "\"Servire per\" + infinitive." },
      { type: "matching", instructions: "Match the compound to what it does.", pairs: [{ left: "lo schiaccianoci", right: "cracks walnuts" }, { left: "l'attaccapanni", right: "holds coats" }, { left: "lo spremiagrumi", right: "squeezes citrus fruit" }, { left: "il portaombrelli", right: "holds umbrellas" }, { left: "l'apribottiglie", right: "opens bottles" }], explanation: "Verb + noun compounds." },
      { type: "dictation", audio: "È una specie di pinza che serve per aprire le noci.", explanation: "Describing an object by its use." },
      { type: "speak", text: "Cerco quell'aggeggio con tanti buchi che serve per scolare la pasta.", prompt: "Ask in the store: I'm looking for that gadget with lots of holes that you use to drain pasta.", tip: "ag-GEG-gio: two double g sounds.", explanation: "It's \"lo scolapasta\"." },
    ],
  },
  {
    slug: "b2-mission-formal-summary",
    level: "IT-B2",
    number: 10,
    title: "Real-World Mission: A Formal Summary",
    summary: "Summarize a plain-language text in formal nominal style, as for a report, a newsletter or a notice.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "The plain text",
        body: [
          "You work for a cultural association and must summarize this email from the town council for the members' newsletter. First, the plain version: \"Abbiamo deciso di ristrutturare la biblioteca di via Roma. Cominceremo a giugno e finiremo, speriamo, a dicembre. Mentre lavoriamo, i libri si potranno prendere in prestito nella sala civica. Quando riapriremo, ci sarà anche una sala studio più grande.\"",
        ],
        examples: [
          { es: "Abbiamo deciso di ristrutturare la biblioteca di via Roma.", en: "We have decided to renovate the library in via Roma." },
          { es: "Cominceremo a giugno e finiremo, speriamo, a dicembre.", en: "We'll start in June and finish, we hope, in December." },
          { es: "Mentre lavoriamo, i libri si potranno prendere in prestito nella sala civica.", en: "While we work, books can be borrowed in the community hall." },
          { es: "Quando riapriremo, ci sarà anche una sala studio più grande.", en: "When we reopen, there'll also be a bigger study room." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Where can people borrow books during the works?", options: ["in the community hall", "in a school", "online only", "nowhere"], correctIndex: 0, explanation: "\"Nella sala civica\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have decided to renovate the library.", answer: "Abbiamo deciso di ristrutturare la biblioteca.", explanation: "\"Ristrutturare\" = to renovate." },
        ],
      },
      {
        heading: "The nominal version",
        body: [
          "Turn each verb into a noun: \"decidere\" → \"la decisione\", \"ristrutturare\" → \"la ristrutturazione\", \"cominciare\" → \"l'inizio\", \"finire\" → \"la conclusione\" or \"il termine\", \"prendere in prestito\" → \"il prestito\", \"riaprire\" → \"la riapertura\". Use \"è prevista\", \"durante\", \"in occasione di\" (on the occasion of) and the impersonal or passive.",
        ],
        examples: [
          { es: "Ristrutturazione della biblioteca di via Roma.", en: "Renovation of the via Roma library." },
          { es: "L'inizio dei lavori è previsto per giugno, la conclusione per dicembre.", en: "Work is due to start in June and end in December." },
          { es: "Durante i lavori, il servizio di prestito sarà garantito presso la sala civica.", en: "During the works, the lending service will be available at the community hall." },
          { es: "In occasione della riapertura sarà inaugurata una nuova sala studio.", en: "When it reopens, a new study room will be opened." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Work is due to start in June.", answer: "L'inizio dei lavori è previsto per giugno.", altAnswers: ["L'inizio dei lavori è previsto a giugno."], explanation: "\"Cominciare\" → \"l'inizio\"." },
          { type: "listen-choose", audio: "Durante i lavori, il servizio di prestito sarà garantito presso la sala civica.", question: "What will the community hall offer?", options: ["the lending service", "a study room", "concerts", "meetings"], correctIndex: 0, explanation: "\"Il servizio di prestito\"." },
        ],
      },
      {
        heading: "Polishing the summary",
        body: [
          "Check three things: every noun has the right article and preposition (\"l'inizio dei lavori\", \"il termine dei lavori\"); \"previsto\" agrees with its noun (\"è prevista la riapertura\", \"è previsto l'inizio\"); and the hedge in the original (\"speriamo\") becomes \"salvo imprevisti\" (barring unforeseen events).",
        ],
        examples: [
          { es: "Il termine dei lavori è previsto, salvo imprevisti, per dicembre.", en: "The works are due to finish, barring unforeseen events, in December." },
          { es: "È prevista la riapertura entro la fine dell'anno.", en: "The library is expected to reopen by the end of the year." },
          { es: "Si ringraziano i soci per la pazienza.", en: "We thank the members for their patience." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The works are due to finish, barring unforeseen events, in December.", answer: "Il termine dei lavori è previsto, salvo imprevisti, per dicembre.", altAnswers: ["La conclusione dei lavori è prevista, salvo imprevisti, per dicembre.", "Il termine dei lavori è previsto per dicembre, salvo imprevisti.", "La fine dei lavori è prevista, salvo imprevisti, per dicembre."], explanation: "\"Previsto\" agrees with \"il termine\"." },
          { type: "speak", text: "Si ringraziano i soci per la pazienza.", prompt: "Close the newsletter: We thank the members for their patience.", tip: "rin-GRA-zia-no: stress on gra.", explanation: "Impersonal \"si\" + plural verb." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a headline.", source: "Renovation of the via Roma library.", answer: "Ristrutturazione della biblioteca di via Roma.", explanation: "\"Ristrutturare\" → \"la ristrutturazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Following the council's decision, the library will close in June.", answer: "In seguito alla decisione del Comune, la biblioteca chiuderà a giugno.", altAnswers: ["In seguito alla decisione del comune, la biblioteca chiuderà a giugno.", "In seguito alla decisione del Comune, la chiusura della biblioteca è prevista per giugno."], explanation: "\"In seguito a\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "During the works, lending will continue at the community hall.", answer: "Durante i lavori, il prestito continuerà presso la sala civica.", altAnswers: ["Durante i lavori il prestito continuerà presso la sala civica.", "Durante i lavori, il servizio di prestito continuerà presso la sala civica."], explanation: "\"Presso\" = at (formal)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The library is expected to reopen by the end of the year.", answer: "È prevista la riapertura della biblioteca entro la fine dell'anno.", altAnswers: ["La riapertura della biblioteca è prevista entro la fine dell'anno.", "È prevista la riapertura della biblioteca entro fine anno."], explanation: "\"Prevista\" agrees with \"la riapertura\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We thank the members for their patience.", answer: "Si ringraziano i soci per la pazienza.", altAnswers: ["Ringraziamo i soci per la pazienza."], explanation: "Impersonal formal close." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "When it reopens, a new study room will be opened.", answer: "In occasione della riapertura sarà inaugurata una nuova sala studio.", altAnswers: ["In occasione della riapertura verrà inaugurata una nuova sala studio.", "Alla riapertura sarà inaugurata una nuova sala studio."], explanation: "\"Inaugurare\" = to open officially." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Barring unforeseen events], the works will end in December.", sentence: "___, i lavori termineranno a dicembre.", answer: "Salvo imprevisti", explanation: "\"Salvo imprevisti\" = barring the unexpected." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[The start of the works] is planned for June.", sentence: "___ è previsto per giugno.", answer: "L'inizio dei lavori", explanation: "\"Cominciare\" → \"l'inizio\"." },
      { type: "word-order", prompt: "Put the words in order to say: Work is due to start in June.", words: ["L'inizio", "dei lavori", "è previsto", "per giugno."], translation: "Work is due to start in June.", explanation: "\"Previsto\" agrees with \"l'inizio\"." },
      { type: "multiple-choice", question: "Which is the best nominal version of \"quando riapriremo\"?", options: ["in occasione della riapertura", "quando si riaprirà", "riaprendo", "dopo che abbiamo riaperto"], correctIndex: 0, explanation: "A noun phrase replaces the clause." },
      { type: "dictation", audio: "Il termine dei lavori è previsto, salvo imprevisti, per dicembre.", explanation: "Nominal style with a formal hedge." },
      { type: "speak", text: "L'inizio dei lavori è previsto per giugno e la riapertura per dicembre.", prompt: "Summarize aloud: Work is due to start in June and the reopening is planned for December.", tip: "pre-VI-sto: stress on vi.", explanation: "Two nouns, one participle each." },
    ],
  },
];

export const IT_B2_U26_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your neighborhood association received this message: \"Abbiamo deciso di chiudere il parco giochi di piazza Verdi perché dobbiamo sostituire le altalene e rifare il pavimento. Cominciamo il 10 aprile e speriamo di finire a fine maggio. Mentre lavoriamo, i bambini possono andare al parco di via Monti. Quando riapriamo, ci saranno anche nuove panchine.\" Write a formal summary for the association's notice board in nominal style: a headline, then the decision, the reasons, the dates, the alternative and the reopening.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Opens with a verbless headline built on a noun (Chiusura del parco giochi di piazza Verdi)",
    "Turns most verbs into nouns with the right article and preposition (la chiusura, la sostituzione delle altalene, il rifacimento della pavimentazione, l'inizio dei lavori, la riapertura)",
    "Uses nominal connectors (in seguito a, per, durante, in occasione di, salvo imprevisti) and è previsto / prevista with correct agreement",
    "Keeps an impersonal, formal tone throughout, with no first-person verbs from the original",
  ],
  modelAnswer: "Chiusura temporanea del parco giochi di piazza Verdi\n\nSi comunica che, in seguito alla decisione del Comune, il parco giochi di piazza Verdi resterà chiuso per lavori di manutenzione. Gli interventi riguardano la sostituzione delle altalene e il rifacimento della pavimentazione.\n\nL'inizio dei lavori è previsto per il 10 aprile; la conclusione, salvo imprevisti, per la fine di maggio. Durante la chiusura, l'area giochi di via Monti resterà a disposizione delle famiglie.\n\nIn occasione della riapertura saranno inoltre installate nuove panchine.\n\nSi ringraziano i residenti per la collaborazione.",
  explanation: "The summary opens with a noun headline and replaces almost every verb with a noun: \"la sostituzione\", \"il rifacimento\", \"l'inizio\", \"la conclusione\", \"la chiusura\", \"la riapertura\". Formal connectors (\"in seguito a\", \"durante\", \"in occasione di\", \"salvo imprevisti\") and the impersonal \"si comunica\" / \"si ringraziano\" keep it objective.",
};
