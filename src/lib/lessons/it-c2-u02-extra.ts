// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u02-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 2 Extra Practice: Petrarca and Boccaccio.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U02_EXTRA: Lesson[] = [
  {
    slug: "c2-trecento-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: More Petrarca",
    summary: "Read three more poems of the Canzoniere and render their key lines in modern Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Blessed be the day",
        body: [
          "Sonnet 61 blesses every circumstance of the first meeting, one after another, in a long polysyndeton: \"Benedetto sia 'l giorno, e 'l mese, e l'anno, / e la stagione, e 'l tempo, e l'ora, e 'l punto, / e 'l bel paese, e 'l loco ov'io fui giunto / da' duo begli occhi che legato m'hanno\". \"Fui giunto\" here means I was reached, caught; \"duo\" is \"due\"; \"legato m'hanno\" is \"mi hanno legato\" with the participle first.",
          "Sonnet 134 piles up contradictions: \"e volo sopra 'l cielo, e giaccio in terra; / e nulla stringo, e tutto 'l mondo abbraccio\" (I fly above the sky and lie on the ground; I grasp nothing and embrace the whole world).",
        ],
        examples: [
          { es: "Benedetto sia 'l giorno, e 'l mese, e l'anno", en: "Blessed be the day, and the month, and the year" },
          { es: "da' duo begli occhi che legato m'hanno", en: "by the two lovely eyes that have bound me" },
          { es: "E volo sopra 'l cielo, e giaccio in terra.", en: "I fly above the sky, and lie on the ground." },
          { es: "E nulla stringo, e tutto 'l mondo abbraccio.", en: "I grasp nothing, and embrace the whole world." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Blessed be the day, the month and the year.", answer: "Benedetto sia il giorno, il mese e l'anno.", altAnswers: ["Sia benedetto il giorno, il mese e l'anno.", "Benedetti siano il giorno, il mese e l'anno."], explanation: "Optative subjunctive: \"benedetto sia\" = may it be blessed." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The two lovely eyes that [have bound me].", sentence: "I due begli occhi che ___.", answer: "mi hanno legato", altAnswers: ["mi hanno legata"], explanation: "Petrarca's \"legato m'hanno\" in modern order." },
        ],
      },
      {
        heading: "Clear, fresh, sweet waters",
        body: [
          "Canzone 126 is not a sonnet but a \"canzone\", with long stanzas mixing endecasillabi and settenari. It opens on the place where Laura bathed: \"Chiare, fresche e dolci acque, / ove le belle membra / pose colei che sola a me par donna\". The subject \"colei\" comes after its verb \"pose\" (placed), and \"che sola a me par donna\" means who alone seems to me a woman: no other counts. The line became so famous that \"chiare, fresche e dolci acque\" is still used, sometimes ironically, for any idyllic stream.",
        ],
        examples: [
          { es: "Chiare, fresche e dolci acque, / ove le belle membra / pose colei che sola a me par donna", en: "Clear, fresh, sweet waters, where she who alone seems a woman to me laid her lovely limbs" },
          { es: "Lei sola mi sembra una donna.", en: "She alone seems to me a woman." },
          { es: "La canzone alterna endecasillabi e settenari.", en: "The canzone alternates eleven- and seven-syllable lines." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She alone seems to me a woman.", answer: "Lei sola mi sembra una donna.", altAnswers: ["Solo lei mi sembra una donna.", "Lei sola mi pare una donna.", "Solo lei mi pare una donna."], explanation: "\"A me par\" → \"mi pare\" / \"mi sembra\"." },
          { type: "listen-choose", audio: "Chiare, fresche e dolci acque.", question: "What is being described?", options: ["the waters where Laura bathed", "a glass of wine", "the sea at Avignon", "the rain of spring"], correctIndex: 0, explanation: "The opening of canzone 126." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I grasp nothing and embrace the whole world.", answer: "Non stringo nulla e abbraccio tutto il mondo.", altAnswers: ["Non stringo niente e abbraccio tutto il mondo.", "Nulla stringo e tutto il mondo abbraccio."], explanation: "Modern order puts \"non\" before the verb with \"nulla\" after." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fly above the sky and lie on the ground.", answer: "Volo sopra il cielo e giaccio a terra.", altAnswers: ["Volo sopra il cielo e giaccio in terra.", "Volo sopra il cielo e sto disteso a terra."], explanation: "\"Giacere\" = to lie; \"giaccio\" with double c." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The canzone alternates eleven- and seven-syllable lines.", answer: "La canzone alterna endecasillabi e settenari.", explanation: "\"Settenario\" = seven-syllable line." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Blessed be the place where I was caught.", answer: "Benedetto sia il luogo dove fui catturato.", altAnswers: ["Sia benedetto il luogo dove fui catturato.", "Benedetto sia il luogo dove fui preso.", "Benedetto sia il luogo dove sono stato catturato.", "Sia benedetto il luogo in cui fui catturato."], explanation: "\"Loco ov'io fui giunto\" → \"luogo dove fui catturato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fear and hope, I burn and freeze.", answer: "Temo e spero, ardo e gelo.", altAnswers: ["Temo e spero, brucio e gelo.", "Ho paura e spero, brucio e gelo."], explanation: "The antithesis of sonnet 134 in four verbs." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Where she [laid] her lovely limbs.", sentence: "Dove lei ___ le belle membra.", answer: "pose", altAnswers: ["posò", "adagiò"], explanation: "\"Pose\": \"passato remoto\" of \"porre\"; \"le membra\" is the plural of \"il membro\" (of the body)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Blessed be [the season, the time, the hour] and the moment.", sentence: "Benedetti siano ___ e l'attimo.", answer: "la stagione, il tempo, l'ora", explanation: "Polysyndeton in Petrarca, a list in modern prose." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [two] lovely eyes.", sentence: "I ___ begli occhi.", answer: "due", explanation: "\"Duo\" → \"due\"; \"begli\" before a vowel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I find no peace], and have no means to wage war.", sentence: "___, e non ho da far guerra.", answer: "Non trovo pace", altAnswers: ["Pace non trovo"], explanation: "Modern order for \"Pace non trovo\"." },
      { type: "word-order", prompt: "Put the words in order to say: She alone seems to me a woman.", words: ["Lei", "sola", "mi", "sembra", "una", "donna."], translation: "She alone seems to me a woman.", explanation: "\"Sola\" agrees with \"lei\"." },
      { type: "word-order", prompt: "Put the words in order to say: The two lovely eyes have bound me.", words: ["I", "due", "begli", "occhi", "mi", "hanno", "legato."], translation: "The two lovely eyes have bound me.", explanation: "\"Begli\" before a vowel; participle after the auxiliary." },
      { type: "multiple-choice", question: "What figure dominates \"e 'l giorno, e 'l mese, e l'anno, e la stagione...\"?", options: ["polysyndeton (repeated e)", "oxymoron", "simile", "chiasmus"], correctIndex: 0, explanation: "\"Polisindeto\": the repeated conjunction slows and solemnises the list." },
      { type: "dictation", audio: "Benedetto sia 'l giorno, e 'l mese, e l'anno.", explanation: "Three articles: \"'l\", \"'l\", \"l'\"." },
      { type: "speak", text: "Chiare, fresche e dolci acque, ove le belle membra pose colei che sola a me par donna.", tip: "\"Fresche\": FRE-ske, hard k; \"membra\" with a clear mb.", explanation: "The opening of the most famous canzone." },
    ],
  },
  {
    slug: "c2-trecento-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: More Boccaccio",
    summary: "Meet four more novelle of the Decameron, Andreuccio, Calandrino, Frate Cipolla and Lisabetta, and retell their plots in modern Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Tricks and tricksters",
        body: [
          "Andreuccio da Perugia (II, 5) goes to Naples to buy horses, shows his purse in the market and is robbed by a woman who claims to be his sister; after falling into a cesspit and being shut in an archbishop's tomb, he goes home with a ruby ring. Calandrino (VIII, 3), a gullible painter, is convinced by his friends Bruno and Buffalmacco that a stone, the \"elitropia\", makes him invisible, and comes home weighed down with pebbles. Frate Cipolla (VI, 10), a preacher, promises to show a feather of the Archangel Gabriel; when pranksters replace it with coal, he claims the coals are those on which Saint Lawrence was roasted.",
        ],
        examples: [
          { es: "Andreuccio va a Napoli a comprare cavalli.", en: "Andreuccio goes to Naples to buy horses." },
          { es: "Mostra la borsa al mercato e viene derubato.", en: "He shows his purse in the market and gets robbed." },
          { es: "Calandrino crede che la pietra lo renda invisibile.", en: "Calandrino believes that the stone makes him invisible." },
          { es: "Frate Cipolla trasforma i carboni in una reliquia.", en: "Friar Cipolla turns the coals into a relic." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Calandrino believes that the stone makes him invisible.", answer: "Calandrino crede che la pietra lo renda invisibile.", altAnswers: ["Calandrino crede che la pietra lo faccia diventare invisibile."], explanation: "\"Credere che\" + subjunctive \"renda\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He shows his purse and [gets robbed].", sentence: "Mostra la borsa e ___.", answer: "viene derubato", altAnswers: ["è derubato"], explanation: "\"Venire\" + participle: the passive of an event." },
        ],
      },
      {
        heading: "A tragic novella",
        body: [
          "Not all the Decameron laughs. Lisabetta da Messina (IV, 5) loves Lorenzo, a young man who works for her brothers. The brothers kill him in secret. Lorenzo appears to her in a dream and shows her where he is buried; she finds the body, takes the head and buries it in a pot of basil, which she waters with her tears. The brothers take the pot away and she dies of grief. The image of the basil pot passed into European poetry and painting.",
        ],
        examples: [
          { es: "I fratelli uccidono Lorenzo di nascosto.", en: "The brothers kill Lorenzo in secret." },
          { es: "Lorenzo le appare in sogno.", en: "Lorenzo appears to her in a dream." },
          { es: "Seppellisce la testa in un vaso di basilico.", en: "She buries the head in a pot of basil." },
          { es: "Lisabetta muore di dolore.", en: "Lisabetta dies of grief." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lorenzo appears to her in a dream.", answer: "Lorenzo le appare in sogno.", altAnswers: ["Lorenzo le compare in sogno."], explanation: "\"Apparire a\" + indirect \"le\"; \"in sogno\" = in a dream." },
          { type: "dictation", audio: "Seppellisce la testa in un vaso di basilico.", explanation: "\"Seppellire\" (double p, double l) takes -isc-: \"seppellisce\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Andreuccio goes to Naples to buy horses.", answer: "Andreuccio va a Napoli a comprare cavalli.", altAnswers: ["Andreuccio va a Napoli per comprare cavalli.", "Andreuccio va a Napoli a comprare dei cavalli."], explanation: "\"Andare a\" + infinitive of purpose." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A woman claims to be his sister.", answer: "Una donna sostiene di essere sua sorella.", altAnswers: ["Una donna afferma di essere sua sorella.", "Una donna dice di essere sua sorella.", "Una donna finge di essere sua sorella."], explanation: "\"Sostenere di\" + infinitive = to claim to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He goes home with a ruby ring.", answer: "Torna a casa con un anello con un rubino.", altAnswers: ["Torna a casa con un anello di rubino.", "Torna a casa con un rubino.", "Ritorna a casa con un anello con un rubino."], explanation: "\"Tornare a casa\" = to go home." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The brothers kill Lorenzo in secret.", answer: "I fratelli uccidono Lorenzo di nascosto.", altAnswers: ["I fratelli uccidono Lorenzo in segreto."], explanation: "\"Di nascosto\" = secretly." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She waters the basil with her tears.", answer: "Innaffia il basilico con le sue lacrime.", altAnswers: ["Annaffia il basilico con le sue lacrime.", "Bagna il basilico con le sue lacrime.", "Innaffia il basilico con le lacrime."], explanation: "\"Innaffiare\" and \"annaffiare\" are both correct." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Calandrino comes home weighed down with stones.", answer: "Calandrino torna a casa carico di sassi.", altAnswers: ["Calandrino torna a casa carico di pietre.", "Calandrino rientra a casa carico di sassi."], explanation: "\"Carico di\" = loaded with." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "His friends [convince him] that the stone makes him invisible.", sentence: "Gli amici ___ che la pietra lo rende invisibile.", answer: "lo convincono", altAnswers: ["lo persuadono"], explanation: "\"Convincere qualcuno\" takes a direct object: \"lo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He promises to show [a feather] of the Archangel Gabriel.", sentence: "Promette di mostrare ___ dell'arcangelo Gabriele.", answer: "una penna", altAnswers: ["una piuma"], explanation: "\"Penna\" = feather (and pen)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Lisabetta [dies of grief].", sentence: "Lisabetta ___.", answer: "muore di dolore", altAnswers: ["muore di crepacuore"], explanation: "\"Morire di\" + cause." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The brothers [take the pot away].", sentence: "I fratelli ___.", answer: "portano via il vaso", altAnswers: ["le portano via il vaso", "le tolgono il vaso"], explanation: "\"Portare via\" = to take away." },
      { type: "word-order", prompt: "Put the words in order to say: Friar Cipolla turns the coals into a relic.", words: ["Frate", "Cipolla", "trasforma", "i carboni", "in una", "reliquia."], translation: "Friar Cipolla turns the coals into a relic.", explanation: "\"Trasformare in\" = to turn into." },
      { type: "word-order", prompt: "Put the words in order to say: Lorenzo appears to her in a dream.", words: ["Lorenzo", "le", "appare", "in", "sogno."], translation: "Lorenzo appears to her in a dream.", explanation: "Indirect pronoun before the verb." },
      { type: "matching", instructions: "Match the character to the story.", pairs: [{ left: "Andreuccio", right: "robbed in Naples, ends with a ruby" }, { left: "Calandrino", right: "believes in an invisibility stone" }, { left: "Frate Cipolla", right: "turns coals into a relic" }, { left: "Lisabetta", right: "the pot of basil" }], explanation: "Four novelle, four kinds of story." },
      { type: "listen-choose", audio: "Calandrino crede che la pietra lo renda invisibile.", question: "What does Calandrino believe?", options: ["The stone makes him invisible.", "The stone is worth a fortune.", "His friends are invisible.", "The stone cures illness."], correctIndex: 0, explanation: "The \"elitropia\" of Decameron VIII, 3." },
      { type: "speak", text: "Frate Cipolla, con grande prontezza, trasforma i carboni in una reliquia di San Lorenzo.", prompt: "Say it in Italian: Friar Cipolla, with great presence of mind, turns the coals into a relic of Saint Lawrence.", tip: "\"Cipolla\": double l; \"reliquia\": re-LI-quia.", explanation: "Another \"motto\" of Day VI." },
    ],
  },
];
