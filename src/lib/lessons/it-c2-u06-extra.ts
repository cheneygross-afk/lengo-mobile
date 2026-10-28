// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u06-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 6 Extra Practice: Fine Shades of Meaning.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U06_EXTRA: Lesson[] = [
  {
    slug: "c2-shades-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Near-Synonyms",
    summary: "Work with fresh near-synonym sets: streets, laughter, tiredness and talk.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Streets and laughter",
        body: [
          "Streets: \"strada\" (general), \"via\" (named street, \"via Roma\"), \"viale\" (a wide tree-lined avenue), \"vicolo\" (a narrow alley), \"corso\" (a main street, often for strolling), \"stradina\" (a little road). Laughter: \"ridere\" (to laugh), \"sorridere\" (to smile), \"ridacchiare\" (to snigger), \"sghignazzare\" (to guffaw, mockingly), \"scoppiare a ridere\" (to burst out laughing).",
        ],
        examples: [
          { es: "Abitiamo in un vicolo del centro.", en: "We live in an alley in the centre." },
          { es: "La sera tutti passeggiano lungo il corso.", en: "In the evening everyone strolls along the main street." },
          { es: "Quando l'ha visto è scoppiata a ridere.", en: "When she saw him she burst out laughing." },
          { es: "In fondo all'aula due ragazzi sghignazzavano.", en: "At the back of the classroom two boys were guffawing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When she saw him she burst out laughing.", answer: "Quando l'ha visto è scoppiata a ridere.", altAnswers: ["Quando lo vide scoppiò a ridere.", "Quando l'ha visto, è scoppiata a ridere."], explanation: "\"Scoppiare a ridere\"." },
          { type: "multiple-choice", question: "Which word names a narrow alley?", options: ["vicolo", "viale", "corso", "piazzale"], correctIndex: 0, explanation: "\"Vicolo\" = alley." },
        ],
      },
      {
        heading: "Tiredness and talk",
        body: [
          "Tiredness: \"stanco\" (tired), \"affaticato\" (fatigued, often medical), \"sfinito\" (worn out), \"esausto\" (exhausted, formal or emphatic), \"distrutto\" and \"a pezzi\" (wrecked, colloquial). Talk: \"parlare\", \"chiacchierare\" (to chat), \"conversare\" (to converse, formal), \"discutere\" (to discuss, or to argue), \"litigare\" (to quarrel), \"spettegolare\" (to gossip).",
        ],
        examples: [
          { es: "Dopo la maratona era sfinito.", en: "After the marathon he was worn out." },
          { es: "Sono a pezzi, vado a letto.", en: "I'm wrecked, I'm going to bed." },
          { es: "Abbiamo chiacchierato fino a mezzanotte.", en: "We chatted until midnight." },
          { es: "Non stiamo litigando, stiamo discutendo.", en: "We're not quarrelling, we're discussing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We chatted until midnight.", answer: "Abbiamo chiacchierato fino a mezzanotte.", altAnswers: ["Chiacchierammo fino a mezzanotte.", "Abbiamo chiacchierato fino alla mezzanotte."], explanation: "\"Chiacchierare\": friendly talk." },
          { type: "listen-choose", audio: "Non stiamo litigando, stiamo discutendo.", question: "What does the speaker claim?", options: ["They are discussing, not quarrelling.", "They are quarrelling.", "They are gossiping.", "They are chatting about nothing."], correctIndex: 0, explanation: "\"Discutere\" vs \"litigare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We live in an alley in the centre.", answer: "Abitiamo in un vicolo del centro.", altAnswers: ["Viviamo in un vicolo del centro.", "Abitiamo in un vicolo in centro."], explanation: "\"Vicolo\": narrow street." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After the marathon he was worn out.", answer: "Dopo la maratona era sfinito.", altAnswers: ["Dopo la maratona era esausto.", "Dopo la maratona lui era sfinito."], explanation: "\"Sfinito\": completely drained." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm wrecked, I'm going to bed.", answer: "Sono a pezzi, vado a letto.", altAnswers: ["Sono distrutto, vado a letto.", "Sono distrutta, vado a letto.", "Sono a pezzi, vado a dormire."], explanation: "Colloquial \"a pezzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She smiled without saying anything.", answer: "Sorrise senza dire niente.", altAnswers: ["Ha sorriso senza dire niente.", "Sorrise senza dire nulla.", "Ha sorriso senza dire nulla."], explanation: "\"Sorridere\" = to smile." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbours gossip about everyone.", answer: "I vicini spettegolano su tutti.", altAnswers: ["I vicini spettegolano di tutti.", "I vicini fanno pettegolezzi su tutti."], explanation: "\"Spettegolare\" = to gossip." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The avenue is lined with trees.", answer: "Il viale è alberato.", altAnswers: ["Il viale è fiancheggiato da alberi.", "Lungo il viale ci sono alberi."], explanation: "\"Viale alberato\": the usual collocation." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Two boys [were guffawing] at the back.", sentence: "In fondo due ragazzi ___.", answer: "sghignazzavano", explanation: "\"Sghignazzare\": loud, mocking laughter." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The doctor said I'm [fatigued].", sentence: "Il medico ha detto che sono ___.", answer: "affaticato", altAnswers: ["affaticata"], explanation: "\"Affaticato\": medical register." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [quarrel] about money every day.", sentence: "___ per i soldi ogni giorno.", answer: "Litigano", explanation: "\"Litigare\": a quarrel, not a discussion." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the evening everyone strolls [along the main street].", sentence: "La sera tutti passeggiano ___.", answer: "lungo il corso", altAnswers: ["sul corso", "per il corso"], explanation: "\"Il corso\": the main street for the evening stroll." },
      { type: "word-order", prompt: "Put the words in order to say: He sniggered behind the teacher's back.", words: ["Ridacchiava", "alle", "spalle", "dell'insegnante."], translation: "He sniggered behind the teacher's back.", explanation: "\"Alle spalle di\" = behind someone's back." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "sfinito", right: "worn out" }, { left: "sghignazzare", right: "to guffaw" }, { left: "conversare", right: "to converse" }, { left: "viale", right: "avenue" }], explanation: "Fresh near-synonyms." },
      { type: "multiple-choice", question: "A formal dinner invitation promises an evening of elegant conversation. Which verb fits?", options: ["conversare", "spettegolare", "litigare", "sghignazzare"], correctIndex: 0, explanation: "\"Conversare\": formal." },
      { type: "dictation", audio: "Abbiamo chiacchierato fino a mezzanotte nel vicolo.", explanation: "Two words from this practice." },
      { type: "speak", text: "Non stiamo litigando, stiamo solo discutendo.", prompt: "Calm a friend down: We're not quarrelling, we're just discussing.", tip: "Gentle tone; stress \"solo\".", explanation: "\"Litigare\" vs \"discutere\"." },
    ],
  },
  {
    slug: "c2-shades-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Collocations",
    summary: "Practise verb-noun, adjective-noun and adverb-adjective collocations in fresh sentences.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Verbs with nouns",
        body: [
          "Fresh pairs: \"stringere amicizia\" (to make friends), \"fare la fila\" (to queue), \"sporgere denuncia\" (to file a complaint with the police), \"stipulare un contratto\", \"rivolgere la parola\" (to speak to someone), \"prestare servizio\" (to serve, work in an institution), \"intraprendere una carriera\", \"saldare un conto\" (to settle a bill).",
        ],
        examples: [
          { es: "Al mare abbiamo stretto amicizia con una coppia di Lecce.", en: "At the seaside we made friends with a couple from Lecce." },
          { es: "Ha sporto denuncia contro ignoti.", en: "She filed a complaint against persons unknown." },
          { es: "Non mi rivolge più la parola.", en: "He doesn't speak to me any more." },
          { es: "Ho saldato il conto in contanti.", en: "I settled the bill in cash." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He doesn't speak to me any more.", answer: "Non mi rivolge più la parola.", altAnswers: ["Non mi parla più.", "Lui non mi rivolge più la parola."], explanation: "\"Rivolgere la parola a\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [filed a complaint] against persons unknown.", sentence: "Ha ___ contro ignoti.", answer: "sporto denuncia", altAnswers: ["presentato denuncia", "fatto denuncia"], explanation: "\"Sporgere denuncia\": legal collocation." },
        ],
      },
      {
        heading: "Adjectives and adverbs",
        body: [
          "Fresh pairs: \"un silenzio tombale\" (deathly silence), \"una fame da lupi\", \"un freddo cane\" (bitter cold), \"un caldo afoso\" (muggy heat), \"un dolore lancinante\" (piercing pain), \"un'attesa snervante\" (nerve-racking wait); \"perdutamente innamorato\", \"profondamente deluso\", \"pienamente soddisfatto\", \"categoricamente escluso\".",
        ],
        examples: [
          { es: "Nella sala calò un silenzio tombale.", en: "A deathly silence fell over the room." },
          { es: "Fa un freddo cane.", en: "It's bitterly cold." },
          { es: "È perdutamente innamorato di lei.", en: "He's madly in love with her." },
          { es: "Un rinvio è categoricamente escluso.", en: "A postponement is categorically ruled out." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's bitterly cold.", answer: "Fa un freddo cane.", altAnswers: ["Fa un freddo terribile.", "Fa freddissimo."], explanation: "\"Un freddo cane\": colloquial and very common." },
          { type: "listen-choose", audio: "Nella sala calò un silenzio tombale.", question: "What happened in the room?", options: ["Total silence fell.", "People started shouting.", "The lights went out.", "Music began."], correctIndex: 0, explanation: "\"Calare\" is the verb for silence falling." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the seaside we made friends with a couple from Lecce.", answer: "Al mare abbiamo stretto amicizia con una coppia di Lecce.", altAnswers: ["Al mare abbiamo fatto amicizia con una coppia di Lecce."], explanation: "\"Stringere\" or \"fare amicizia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I settled the bill in cash.", answer: "Ho saldato il conto in contanti.", altAnswers: ["Ho pagato il conto in contanti.", "Saldai il conto in contanti."], explanation: "\"Saldare un conto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's madly in love with her.", answer: "È perdutamente innamorato di lei.", altAnswers: ["Lui è perdutamente innamorato di lei.", "È follemente innamorato di lei."], explanation: "\"Perdutamente innamorato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A postponement is categorically ruled out.", answer: "Un rinvio è categoricamente escluso.", altAnswers: ["Il rinvio è categoricamente escluso.", "Un rinvio è assolutamente escluso."], explanation: "\"Categoricamente escluso\": firm denial." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We are fully satisfied.", answer: "Siamo pienamente soddisfatti.", altAnswers: ["Siamo pienamente soddisfatte.", "Siamo del tutto soddisfatti."], explanation: "\"Pienamente soddisfatto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She worked as a nurse for twenty years.", answer: "Ha prestato servizio come infermiera per vent'anni.", altAnswers: ["Ha lavorato come infermiera per vent'anni.", "Prestò servizio come infermiera per vent'anni."], explanation: "\"Prestare servizio\": institutional work." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I felt [a piercing pain].", sentence: "Ho sentito ___.", answer: "un dolore lancinante", altAnswers: ["un dolore acuto"], explanation: "\"Lancinante\": piercing, stabbing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was [a nerve-racking wait].", sentence: "È stata ___.", answer: "un'attesa snervante", explanation: "\"Snervante\" = exhausting for the nerves." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [queued] for an hour.", sentence: "Abbiamo ___ per un'ora.", answer: "fatto la fila", altAnswers: ["fatto la coda"], explanation: "\"Fare la fila\" / \"fare la coda\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In August there's [a muggy heat].", sentence: "Ad agosto c'è ___.", answer: "un caldo afoso", altAnswers: ["un caldo umido"], explanation: "\"Afoso\": hot and humid." },
      { type: "word-order", prompt: "Put the words in order to say: He embarked on a diplomatic career.", words: ["Ha", "intrapreso", "la", "carriera", "diplomatica."], translation: "He embarked on a diplomatic career.", explanation: "\"Intraprendere una carriera\"." },
      { type: "matching", instructions: "Match the noun to its verb.", pairs: [{ left: "amicizia", right: "stringere" }, { left: "denuncia", right: "sporgere" }, { left: "un contratto", right: "stipulare" }, { left: "un conto", right: "saldare" }], explanation: "Verb-noun pairs." },
      { type: "multiple-choice", question: "Which collocation means 'deathly silence'?", options: ["silenzio tombale", "silenzio cane", "silenzio afoso", "silenzio lancinante"], correctIndex: 0, explanation: "\"Tombale\", from \"tomba\"." },
      { type: "dictation", audio: "Fa un freddo cane e ho una fame da lupi.", explanation: "Two colloquial intensity collocations." },
      { type: "speak", text: "Sono profondamente deluso: un rinvio era categoricamente escluso.", prompt: "Complain formally: I'm deeply disappointed: a postponement had been categorically ruled out.", tip: "Long adverbs: keep the stress on \"-MEN-\".", explanation: "Adverb-adjective collocations." },
    ],
  },
];
