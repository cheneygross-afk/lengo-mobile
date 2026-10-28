// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u12-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 12 Extra Practice: Italian Literature, Part 1. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
// Quotations are short, from public-domain texts, lightly adapted.
export const IT_C1_U12_EXTRA: Lesson[] = [
  {
    slug: "c1-literature-1-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: More Manzoni",
    summary: "Three more famous moments of I promessi sposi: Carneade, the farewell to the mountains, and la sventurata rispose.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three lines every Italian knows",
        body: [
          "Chapter 8 opens with don Abbondio reading a book and stumbling on an ancient philosopher he has never heard of: \"Carneade! Chi era costui?\" (Carneades! Who was that fellow?). Italians still say \"un Carneade\" for an obscure person. \"Costui\" is a slightly scornful this man.",
          "Lucia, forced to flee by night across the lake, says goodbye to her home: \"Addio, monti sorgenti dall'acque, ed elevati al cielo\" (farewell, mountains rising from the waters and lifted to the sky). \"Sorgenti\" is a present participle used as an adjective: rising.",
          "The nun Gertrude, shut in a convent against her will, is approached by a young man, Egidio. Manzoni sums up her fall in three words: \"La sventurata rispose\" (the unhappy woman answered). The short sentence after long pages is a masterpiece of understatement.",
        ],
        examples: [
          { es: "Carneade! Chi era costui?", en: "Carneades! Who was that fellow?" },
          { es: "Addio, monti sorgenti dall'acque, ed elevati al cielo.", en: "Farewell, mountains rising from the waters and lifted to the sky." },
          { es: "La sventurata rispose.", en: "The unhappy woman answered." },
          { es: "Il nuovo direttore? Per me è un Carneade.", en: "The new director? I've never heard of him." },
          { es: "Lucia lascia il paese di notte, in barca.", en: "Lucia leaves the village at night, by boat." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who was that fellow?", answer: "Chi era costui?", altAnswers: ["Chi era quello?", "Chi era quel tale?"], explanation: "\"Costui\" is literary and a little scornful." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lucia leaves the village at night, by boat.", answer: "Lucia lascia il paese di notte, in barca.", altAnswers: ["Lucia lascia il villaggio di notte, in barca.", "Lucia lascia di notte il paese, in barca.", "Di notte Lucia lascia il paese in barca."], explanation: "Present for plot summary; \"in barca\" = by boat." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The unhappy woman answered.", answer: "La sventurata rispose.", altAnswers: ["La sventurata ha risposto.", "L'infelice rispose."], explanation: "Manzoni's famous three words." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Gertrude was forced to become a nun.", answer: "Gertrude fu costretta a farsi monaca.", altAnswers: ["Gertrude è stata costretta a farsi suora.", "Gertrude fu costretta a diventare monaca.", "Gertrude fu costretta a farsi suora.", "Gertrude è stata costretta a diventare suora.", "Gertrude fu costretta a prendere il velo."], explanation: "\"Essere costretto a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The new director? I've never heard of him.", answer: "Il nuovo direttore? Non l'ho mai sentito nominare.", altAnswers: ["Il nuovo direttore? Mai sentito.", "Il nuovo direttore? Per me è un Carneade.", "Il nuovo direttore? Non ne ho mai sentito parlare."], explanation: "\"Sentir nominare\" or the Manzonian \"un Carneade\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The mountains rise from the water.", answer: "I monti sorgono dall'acqua.", altAnswers: ["Le montagne sorgono dall'acqua.", "I monti si alzano dall'acqua."], explanation: "\"Sorgere\" = to rise; Manzoni's \"sorgenti\" is its participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don Abbondio was reading a book about ancient philosophers.", answer: "Don Abbondio leggeva un libro sui filosofi antichi.", altAnswers: ["Don Abbondio stava leggendo un libro sui filosofi antichi.", "Don Abbondio leggeva un libro di filosofi antichi."], explanation: "Imperfetto for background." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The short sentence is a masterpiece of understatement.", answer: "La frase breve è un capolavoro di reticenza.", altAnswers: ["La frase breve è un capolavoro di sobrietà.", "La breve frase è un capolavoro di reticenza."], explanation: "\"Reticenza\" = holding back what could be said." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Farewell], mountains!", sentence: "___, monti!", answer: "Addio", explanation: "\"Addio\": a final goodbye." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Lucia [is forced to] flee.", sentence: "Lucia ___ fuggire.", answer: "è costretta a", altAnswers: ["deve"], explanation: "\"Essere costretto a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who [was] Carneades?", sentence: "Chi ___ Carneade?", answer: "era", explanation: "Imperfetto for identity in the past." },
      { type: "word-order", prompt: "Put the words in order to say: Lucia says goodbye to her mountains.", words: ["Lucia", "dice", "addio", "ai", "suoi", "monti."], translation: "Lucia says goodbye to her mountains.", explanation: "\"Dire addio a\"." },
      { type: "multiple-choice", question: "A colleague calls a little-known author \"un Carneade\". What does she mean?", options: ["Nobody has heard of him.", "He's a great philosopher.", "He's very old.", "He's a coward."], correctIndex: 0, explanation: "From don Abbondio's \"Carneade! Chi era costui?\"." },
      {
        type: "matching",
        instructions: "Match the Manzoni line to its meaning.",
        pairs: [
          { left: "Carneade! Chi era costui?", right: "Who on earth was that?" },
          { left: "La sventurata rispose.", right: "The unhappy woman answered." },
          { left: "Questo matrimonio non s'ha da fare.", right: "This wedding must not happen." },
          { left: "Il coraggio, uno non se lo può dare.", right: "You can't give yourself courage." },
        ],
        explanation: "Four lines quoted in everyday Italian.",
      },
      { type: "listen-choose", audio: "Addio, monti sorgenti dall'acque, ed elevati al cielo.", question: "What does the speaker do?", options: ["Says farewell to the mountains", "Climbs the mountains", "Describes a storm on the lake", "Prays to the sky"], correctIndex: 0, explanation: "Lucia's farewell." },
      { type: "dictation", audio: "Carneade! Chi era costui?", explanation: "\"Costui\" = that fellow." },
      { type: "speak", text: "Addio, monti sorgenti dall'acque, ed elevati al cielo.", prompt: "Read Lucia's farewell aloud.", tip: "Slow down: sor-GEN-ti, e-le-VA-ti.", explanation: "A lyrical moment in a realist novel." },
    ],
  },
  {
    slug: "c1-literature-1-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: More Verga",
    summary: "The opening of I Malavoglia and of Cavalleria rusticana: proverbs, the village chorus and the impersonal narrator.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The Malavoglia and Turiddu",
        body: [
          "I Malavoglia (1881) follows a family of fishermen in Aci Trezza. It opens: \"Un tempo i Malavoglia erano stati numerosi come i sassi della strada vecchia di Trezza\". The patriarch, padron 'Ntoni, argues in proverbs about family solidarity, such as the one about the five fingers that must help each other to pull the oar.",
          "Cavalleria rusticana (1880), later an opera by Mascagni, opens with Turiddu Macca, back from military service, showing off in the square every Sunday in his bersagliere uniform and red cap. \"Pavoneggiarsi\" (from \"pavone\", peacock) means to strut. The village watches, gossips and judges: the community is the true narrator.",
        ],
        examples: [
          { es: "Un tempo i Malavoglia erano stati numerosi come i sassi della strada vecchia di Trezza.", en: "Once the Malavoglias had been as many as the stones of the old road of Trezza." },
          { es: "Per menare il remo bisogna che le cinque dita s'aiutino l'un l'altro.", en: "To pull the oar the five fingers must help each other. (after Verga)" },
          { es: "Turiddu, tornato da fare il soldato, si pavoneggiava in piazza.", en: "Turiddu, back from the army, strutted around the square." },
          { es: "Il paese intero guardava e chiacchierava.", en: "The whole village watched and gossiped." },
          { es: "Padron 'Ntoni parla quasi sempre per proverbi.", en: "Padron 'Ntoni almost always speaks in proverbs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turiddu strutted around the square every Sunday.", answer: "Turiddu si pavoneggiava in piazza ogni domenica.", altAnswers: ["Ogni domenica Turiddu si pavoneggiava in piazza."], explanation: "Imperfetto for a repeated past action." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The five fingers must help each other.", answer: "Le cinque dita devono aiutarsi l'un l'altro.", altAnswers: ["Le cinque dita devono aiutarsi a vicenda.", "Bisogna che le cinque dita si aiutino l'un l'altro.", "Bisogna che le cinque dita si aiutino a vicenda."], explanation: "\"Le dita\": feminine plural. \"Bisogna che\" + subjunctive in Verga's version." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once the family had been very numerous.", answer: "Un tempo la famiglia era stata molto numerosa.", altAnswers: ["Una volta la famiglia era stata molto numerosa."], explanation: "Trapassato prossimo for a distant background." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Padron 'Ntoni almost always speaks in proverbs.", answer: "Padron 'Ntoni parla quasi sempre per proverbi.", altAnswers: ["Padron 'Ntoni parla quasi sempre con i proverbi.", "Padron 'Ntoni si esprime quasi sempre per proverbi."], explanation: "\"Parlare per proverbi\" = to speak in proverbs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The whole village watched and gossiped.", answer: "Tutto il paese guardava e chiacchierava.", altAnswers: ["Il paese intero guardava e chiacchierava.", "Tutto il paese guardava e spettegolava.", "Il paese intero guardava e spettegolava."], explanation: "\"Chiacchierare\" or \"spettegolare\" = to gossip." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He came back from military service.", answer: "Tornò dal servizio militare.", altAnswers: ["È tornato dal servizio militare.", "Tornò da fare il soldato.", "Tornò dal militare.", "È tornato dal militare."], explanation: "Verga writes \"tornò da fare il soldato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The opera by Mascagni is based on Verga's story.", answer: "L'opera di Mascagni è tratta dalla novella di Verga.", altAnswers: ["L'opera di Mascagni si basa sulla novella di Verga.", "L'opera di Mascagni è basata sulla novella di Verga.", "L'opera di Mascagni è tratta dal racconto di Verga."], explanation: "\"Essere tratto da\" for adaptations." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The community is the real narrator.", answer: "La comunità è il vero narratore.", altAnswers: ["Il vero narratore è la comunità."], explanation: "Verga's regression." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They were [as many as] the stones of the road.", sentence: "Erano ___ i sassi della strada.", answer: "numerosi come", altAnswers: ["tanti quanti", "tanti come"], explanation: "Verga's village simile." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He wore [a red cap].", sentence: "Portava ___.", answer: "il berretto rosso", altAnswers: ["un berretto rosso"], explanation: "\"Il berretto\" = the cap." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The fishermen [went out to sea] at dawn.", sentence: "I pescatori ___ all'alba.", answer: "uscivano in mare", altAnswers: ["andavano in mare", "prendevano il mare", "uscirono in mare"], explanation: "\"Uscire in mare\"." },
      { type: "word-order", prompt: "Put the words in order to say: The family lived in Aci Trezza.", words: ["La", "famiglia", "viveva", "ad", "Aci", "Trezza."], translation: "The family lived in Aci Trezza.", explanation: "\"Ad\" before a vowel." },
      { type: "multiple-choice", question: "\"Si pavoneggiava in piazza\" means ...", options: ["he strutted in the square", "he sold peacocks in the square", "he paved the square", "he hid in the square"], correctIndex: 0, explanation: "From \"pavone\", peacock." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "pavoneggiarsi", right: "to strut, show off" },
          { left: "il proverbio", right: "the proverb" },
          { left: "il pescatore", right: "the fisherman" },
          { left: "fare il soldato", right: "to do military service" },
        ],
        explanation: "Vocabulary from Verga's openings.",
      },
      { type: "listen-choose", audio: "Il paese intero guardava Turiddu e chiacchierava.", question: "What did the village do?", options: ["It watched Turiddu and gossiped.", "It ignored Turiddu.", "It welcomed Turiddu with a party.", "It sent Turiddu away."], correctIndex: 0, explanation: "The village as chorus." },
      { type: "dictation", audio: "Padron 'Ntoni parla quasi sempre per proverbi.", explanation: "\"'Ntoni\" is short for Antonio." },
      { type: "speak", text: "Un tempo i Malavoglia erano stati numerosi come i sassi della strada vecchia di Trezza.", prompt: "Read the opening of I Malavoglia aloud.", tip: "Ma-la-VO-glia: the gli is one soft sound.", explanation: "Verga's village simile." },
    ],
  },
];
