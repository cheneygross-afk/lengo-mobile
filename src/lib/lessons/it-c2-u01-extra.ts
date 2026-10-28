// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u01-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 1 Extra Practice: Dante and the Origins of Italian.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U01_EXTRA: Lesson[] = [
  {
    slug: "c2-dante-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: More Inferno",
    summary: "Read fresh passages from the Inferno, Farinata, Ulysses and Ugolino, and render them in modern Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Farinata and Ulysses",
        body: [
          "In Inferno X the Ghibelline leader Farinata hears Dante's Florentine accent: \"O Tosco che per la città del foco / vivo ten vai così parlando onesto, / piacciati di restare in questo loco.\" \"Tosco\" is Tuscan, \"ten vai\" is \"te ne vai\", \"piacciati\" is an enclitic subjunctive: may it please you. He asks at once: \"Chi fuor li maggior tui?\" (who were your ancestors?), with \"fuor\" for \"furono\".",
          "In Inferno XXVI Ulysses describes the last voyage: \"de' remi facemmo ali al folle volo\" (we made wings of our oars for the mad flight), until \"'l mar fu sovra noi richiuso\" (the sea closed over us).",
        ],
        examples: [
          { es: "O Tosco che per la città del foco / vivo ten vai così parlando onesto", en: "O Tuscan, who go alive through the city of fire, speaking so courteously" },
          { es: "Piacciati di restare in questo loco.", en: "May it please you to stay in this place." },
          { es: "Chi fuor li maggior tui?", en: "Who were your ancestors?" },
          { es: "De' remi facemmo ali al folle volo.", en: "We made wings of our oars for the mad flight." },
          { es: "Infin che 'l mar fu sovra noi richiuso.", en: "Until the sea closed over us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who were your ancestors?", answer: "Chi furono i tuoi antenati?", altAnswers: ["Chi erano i tuoi antenati?", "Chi furono i tuoi avi?", "Chi erano i tuoi avi?"], explanation: "\"Fuor li maggior tui\" → \"furono i tuoi antenati\"; \"i maggiori\" once meant forebears." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[May it please you] to stay in this place.", sentence: "___ restare in questo luogo.", answer: "Ti piaccia", altAnswers: ["Ti prego di", "Che ti piaccia"], explanation: "\"Piacciati\" = \"ti piaccia\", an optative subjunctive with the pronoun attached." },
        ],
      },
      {
        heading: "Ugolino",
        body: [
          "Inferno XXXIII opens on Count Ugolino gnawing the skull of his enemy: \"La bocca sollevò dal fiero pasto / quel peccator\" (that sinner raised his mouth from the savage meal). He tells how he and his sons starved in a tower in Pisa, and ends with the most debated line of the poem: \"Poscia, più che 'l dolor, poté 'l digiuno.\" Then hunger did what grief could not: it killed him, or, in the darker reading, drove him to eat. \"Poscia\" means then, afterwards; \"poté\" is the passato remoto of \"potere\".",
        ],
        examples: [
          { es: "La bocca sollevò dal fiero pasto / quel peccator.", en: "That sinner raised his mouth from the savage meal." },
          { es: "Poscia, più che 'l dolor, poté 'l digiuno.", en: "Then hunger had more power than grief." },
          { es: "Poi la fame poté più del dolore.", en: "Then hunger proved stronger than grief. (paraphrase)" },
          { es: "Il verso è ambiguo e i critici ne discutono ancora.", en: "The line is ambiguous and critics still argue about it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Then hunger proved stronger than grief.", answer: "Poi la fame poté più del dolore.", altAnswers: ["Poi la fame fu più forte del dolore.", "Poi il digiuno poté più del dolore.", "Poi la fame ha potuto più del dolore."], explanation: "\"Potere più di\" = to be stronger than; \"poscia\" → \"poi\"." },
          { type: "listen-choose", audio: "Il verso è ambiguo e i critici ne discutono ancora.", question: "What does it mean?", options: ["The line is ambiguous and critics still argue about it.", "The line is clear and critics agree.", "The critics wrote the line.", "The line was removed by critics."], correctIndex: 0, explanation: "\"Ne discutono\" = discuss it; \"ne\" stands for \"del verso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That sinner raised his mouth from the savage meal.", answer: "Quel peccatore sollevò la bocca dal fiero pasto.", altAnswers: ["Quel peccatore alzò la bocca dal fiero pasto.", "Quel peccatore sollevò la bocca dal pasto feroce.", "Quel peccatore alzò la bocca dal pasto feroce."], explanation: "Subject first: Dante delays \"quel peccator\" to the next line." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Until the sea closed over us.", answer: "Finché il mare si richiuse sopra di noi.", altAnswers: ["Finché il mare non si richiuse sopra di noi.", "Fino a quando il mare si richiuse sopra di noi.", "Finché il mare si chiuse sopra di noi."], explanation: "\"Infin che\" → \"finché\"; \"sovra noi\" → \"sopra di noi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We made wings of our oars.", answer: "Dei remi facemmo ali.", altAnswers: ["Facemmo dei remi le nostre ali.", "Facemmo ali dei remi.", "Abbiamo fatto dei remi le nostre ali."], explanation: "\"Fare di qualcosa\" + noun = to turn something into." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You are going away, alive, through the city of fire.", answer: "Te ne vai vivo per la città del fuoco.", altAnswers: ["Te ne vai vivo attraverso la città del fuoco.", "Vai vivo per la città del fuoco.", "Te ne vai vivo nella città del fuoco."], explanation: "\"Ten vai\" = \"te ne vai\"; \"foco\" → \"fuoco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Critics still argue about this line.", answer: "I critici discutono ancora di questo verso.", altAnswers: ["I critici discutono ancora su questo verso.", "I critici ne discutono ancora.", "La critica discute ancora di questo verso."], explanation: "\"Discutere di / su\" = to argue about." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Farinata recognises Dante's accent.", answer: "Farinata riconosce l'accento di Dante.", altAnswers: ["Farinata riconosce l'accento toscano di Dante."], explanation: "Present tense for the story." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Then] hunger proved stronger than grief.", sentence: "___ la fame poté più del dolore.", answer: "Poi", altAnswers: ["Poscia", "Dopo"], explanation: "\"Poscia\" = \"poi\", afterwards." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who [were] your ancestors?", sentence: "Chi ___ i tuoi antenati?", answer: "furono", altAnswers: ["erano"], explanation: "Dante's \"fuor\" is \"furono\" cut short." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Stay [in this place].", sentence: "Resta ___.", answer: "in questo luogo", altAnswers: ["qui"], explanation: "\"Loco\" → \"luogo\": the modern diphthong and g." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The mad flight] ended in the ocean.", sentence: "___ finì nell'oceano.", answer: "Il folle volo", explanation: "\"Folle volo\": Ulysses' journey, a phrase still quoted for reckless ventures." },
      { type: "word-order", prompt: "Put the words in order to say: The line is ambiguous.", words: ["Il", "verso", "è", "ambiguo."], translation: "The line is ambiguous.", explanation: "\"Il verso\" = the line of poetry." },
      { type: "word-order", prompt: "Put the words in order to say: Then hunger proved stronger than grief.", words: ["Poi", "la", "fame", "poté", "più", "del dolore."], translation: "Then hunger proved stronger than grief.", explanation: "Modern order for \"Poscia, più che 'l dolor, poté 'l digiuno\"." },
      { type: "matching", instructions: "Match the Old Italian to the modern form.", pairs: [{ left: "Tosco", right: "toscano" }, { left: "ten vai", right: "te ne vai" }, { left: "fuor", right: "furono" }, { left: "poscia", right: "poi" }, { left: "sovra", right: "sopra" }], explanation: "Cut forms, enclitics and old vowels." },
      { type: "dictation", audio: "Poscia, più che 'l dolor, poté 'l digiuno.", explanation: "Two \"'l\" for \"il\"; \"poté\" with an acute accent." },
      { type: "speak", text: "O Tosco che per la città del foco vivo ten vai così parlando onesto, piacciati di restare in questo loco.", tip: "\"Piacciati\": PIAC-cia-ti, double c.", explanation: "Farinata's greeting, with three Old Italian forms." },
    ],
  },
  {
    slug: "c2-dante-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Purgatorio and Paradiso",
    summary: "Read short passages from the Purgatorio and the Paradiso and paraphrase them in modern Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Purgatorio",
        body: [
          "The Purgatorio opens in light after the dark: \"Dolce color d'orïental zaffiro\" (the sweet colour of eastern sapphire). Virgil presents Dante to Cato, guardian of the shore: \"libertà va cercando, ch'è sì cara, / come sa chi per lei vita rifiuta\" (he goes seeking freedom, which is so precious, as one knows who gives up life for it). In canto VI Dante attacks the divided Italy of his time: \"Ahi serva Italia, di dolore ostello, / nave sanza nocchiere in gran tempesta\". \"Ostello\" is an inn, a dwelling; \"nocchiere\" a helmsman.",
        ],
        examples: [
          { es: "Dolce color d'orïental zaffiro", en: "The sweet colour of eastern sapphire" },
          { es: "Libertà va cercando, ch'è sì cara, / come sa chi per lei vita rifiuta.", en: "He seeks freedom, so dear, as one knows who gives up life for it." },
          { es: "Ahi serva Italia, di dolore ostello, / nave sanza nocchiere in gran tempesta", en: "Ah, enslaved Italy, inn of sorrow, ship without a helmsman in a great storm" },
          { es: "Biondo era e bello e di gentile aspetto.", en: "He was fair and handsome and of noble bearing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He is seeking freedom, which is so precious.", answer: "Va cercando la libertà, che è così preziosa.", altAnswers: ["Cerca la libertà, che è così preziosa.", "Sta cercando la libertà, che è così cara.", "Cerca la libertà, che è così cara.", "Va cercando la libertà, che è così cara."], explanation: "\"Andare\" + gerund stresses a continuing search; \"sì\" → \"così\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A ship [without a helmsman] in a great storm.", sentence: "Una nave ___ in una grande tempesta.", answer: "senza timoniere", altAnswers: ["senza nocchiere", "senza pilota"], explanation: "\"Sanza nocchiere\": the image of Italy without a ruler." },
        ],
      },
      {
        heading: "Paradiso",
        body: [
          "The Paradiso opens: \"La gloria di colui che tutto move / per l'universo penetra, e risplende / in una parte più e meno altrove.\" \"Colui che tutto move\" is God, the one who moves everything; \"move\" is the old form of \"muove\". Piccarda, in canto III, sums up the peace of the blessed: \"E 'n la sua volontade è nostra pace.\" The last canto begins with a prayer to the Virgin, \"Vergine Madre, figlia del tuo figlio\", a paradox, and the poem ends on its hundredth line of light: \"l'amor che move il sole e l'altre stelle\". Each cantica ends on the word \"stelle\".",
        ],
        examples: [
          { es: "La gloria di colui che tutto move / per l'universo penetra, e risplende", en: "The glory of the One who moves all things penetrates the universe and shines" },
          { es: "E 'n la sua volontade è nostra pace.", en: "And in His will is our peace." },
          { es: "Vergine Madre, figlia del tuo figlio", en: "Virgin Mother, daughter of your Son" },
          { es: "L'amor che move il sole e l'altre stelle.", en: "The love that moves the sun and the other stars." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And in his will is our peace.", answer: "E nella sua volontà è la nostra pace.", altAnswers: ["E nella sua volontà sta la nostra pace.", "E la nostra pace è nella sua volontà.", "La nostra pace è nella sua volontà."], explanation: "\"'N la\" → \"nella\", \"volontade\" → \"volontà\"." },
          { type: "dictation", audio: "L'amor che move il sole e l'altre stelle.", explanation: "The last line of the Commedia; \"move\" = \"muove\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The love that moves the sun and the other stars.", answer: "L'amore che muove il sole e le altre stelle.", altAnswers: ["L'amore che fa muovere il sole e le altre stelle."], explanation: "\"Amor\" → \"amore\", \"move\" → \"muove\", \"l'altre\" → \"le altre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The glory of the one who moves everything shines throughout the universe.", answer: "La gloria di colui che muove tutto risplende in tutto l'universo.", altAnswers: ["La gloria di colui che tutto muove risplende in tutto l'universo.", "La gloria di colui che muove ogni cosa risplende in tutto l'universo.", "La gloria di colui che muove tutto risplende per tutto l'universo."], explanation: "\"Colui che\" = the one who; modern \"muove\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was fair and handsome and of noble bearing.", answer: "Era biondo e bello e di nobile aspetto.", altAnswers: ["Era biondo, bello e di nobile aspetto.", "Era biondo, bello e di aspetto nobile.", "Era biondo e bello e di aspetto gentile."], explanation: "Manfredi in Purgatorio III: \"Biondo era e bello e di gentile aspetto\"; \"gentile\" here means noble." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Each cantica ends with the word 'stars'.", answer: "Ogni cantica si chiude con la parola «stelle».", altAnswers: ["Ogni cantica finisce con la parola «stelle».", "Ogni cantica termina con la parola «stelle»."], explanation: "\"Chiudersi con\" = to end with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy is like a ship without a helmsman.", answer: "L'Italia è come una nave senza timoniere.", altAnswers: ["L'Italia è come una nave senza nocchiere.", "L'Italia è come una nave senza pilota."], explanation: "Dante's metaphor in Purgatorio VI, made into a simile." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sweet colour of eastern sapphire.", answer: "Il dolce colore dello zaffiro orientale.", altAnswers: ["Il dolce colore di uno zaffiro orientale."], explanation: "\"Lo zaffiro\": \"lo\" before z; \"color\" → \"colore\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Virgin Mother, [daughter of your son].", sentence: "Vergine Madre, ___.", answer: "figlia del tuo figlio", explanation: "A paradox (\"ossimoro\" in the broad sense) at the start of Paradiso XXXIII." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As one knows [who gives up] life for it.", sentence: "Come sa chi per essa ___ la vita.", answer: "rifiuta", altAnswers: ["rinuncia a", "sacrifica"], explanation: "\"Chi\" = whoever, with a singular verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Ah, enslaved Italy, [home of sorrow].", sentence: "Ahi serva Italia, ___.", answer: "dimora del dolore", altAnswers: ["casa del dolore", "albergo del dolore", "di dolore ostello"], explanation: "\"Ostello\" is a lodging; modern \"ostello\" is a youth hostel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The glory of [the one who] moves everything.", sentence: "La gloria di ___ muove tutto.", answer: "colui che", explanation: "\"Colui che\" = the one who, formal demonstrative." },
      { type: "word-order", prompt: "Put the words in order to say: And in his will is our peace.", words: ["E", "nella", "sua", "volontà", "è", "la nostra pace."], translation: "And in his will is our peace.", explanation: "Modern spelling of Piccarda's line." },
      { type: "word-order", prompt: "Put the words in order to say: He goes seeking freedom, which is so precious.", words: ["Va", "cercando", "la", "libertà,", "che è", "così preziosa."], translation: "He goes seeking freedom, which is so precious.", explanation: "\"Andare\" + gerund: a continuing search." },
      { type: "multiple-choice", question: "Who is \"colui che tutto move\"?", options: ["God", "Virgil", "the Emperor", "the Sun"], correctIndex: 0, explanation: "The prime mover of the universe, in Paradiso I." },
      { type: "listen-choose", audio: "Ahi serva Italia, di dolore ostello, nave sanza nocchiere in gran tempesta.", question: "What is the tone of this passage?", options: ["An angry lament for a divided Italy", "A love poem to a woman", "A prayer to the Virgin", "A description of a sea voyage"], correctIndex: 0, explanation: "Purgatorio VI: Dante's invective against an Italy without leadership." },
      { type: "speak", text: "L'amor che move il sole e l'altre stelle.", tip: "Slow down: it is the last line of the poem. \"Move\" in two syllables, MO-ve.", explanation: "The final endecasillabo of the Commedia." },
    ],
  },
];
