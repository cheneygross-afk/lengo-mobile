// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u08-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 8 Extra Practice: Cinema. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md).
export const IT_CULTURE_U08_EXTRA: Lesson[] = [
  {
    slug: "culture-cinema-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Directors",
    summary: "Fresh sentences about the great Italian directors: where they came from, what they filmed and how they worked.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Talking about directors",
        body: [
          "A film director is \"il regista\" (or \"la regista\"), and directing is \"la regia\". Directors \"girano\" (shoot) films, \"dirigono\" actors and \"scrivono la sceneggiatura\" (write the screenplay). \"Un film di Fellini\" means a film by Fellini.",
        ],
        examples: [
          { es: "È un film di Rossellini.", en: "It's a film by Rossellini." },
          { es: "La regia è di Sergio Leone.", en: "It's directed by Sergio Leone." },
          { es: "Ha scritto anche la sceneggiatura.", en: "He also wrote the screenplay." },
          { es: "La regista è romana.", en: "The director is from Rome." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a film by Rossellini.", answer: "È un film di Rossellini.", explanation: "\"Di\" = by, for authors." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He also wrote the [screenplay].", sentence: "Ha scritto anche la ___.", answer: "sceneggiatura", explanation: "\"Lo sceneggiatore\" = screenwriter." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's directed by Sergio Leone.", answer: "La regia è di Sergio Leone.", altAnswers: ["È diretto da Sergio Leone.", "È un film di Sergio Leone."], explanation: "\"La regia\" = direction." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fellini worked with Mastroianni.", answer: "Fellini ha lavorato con Mastroianni.", altAnswers: ["Fellini lavorava con Mastroianni."], explanation: "\"Lavorare con\" = to work with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "De Sica was also an actor.", answer: "De Sica era anche attore.", altAnswers: ["De Sica era anche un attore.", "De Sica faceva anche l'attore."], explanation: "No article needed with a profession after \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The director is from Rome.", answer: "La regista è romana.", altAnswers: ["Il regista è romano.", "La regista è di Roma.", "Il regista è di Roma."], explanation: "\"Regista\" is the same for men and women." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His films are very personal.", answer: "I suoi film sono molto personali.", altAnswers: ["I suoi film sono personalissimi."], explanation: "\"Film\" doesn't change in the plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tornatore is Sicilian.", answer: "Tornatore è siciliano.", altAnswers: ["Tornatore è di origine siciliana."], explanation: "Adjectives of origin are lowercase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leone loved close-ups.", answer: "Leone amava i primi piani.", altAnswers: ["A Leone piacevano i primi piani."], explanation: "\"Il primo piano\" = close-up." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Fellini [shot] many films at Cinecittà.", sentence: "Fellini ___ molti film a Cinecittà.", answer: "ha girato", altAnswers: ["girò", "girava"], explanation: "\"Girare\" = to shoot." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Monicelli [directed] \"I soliti ignoti\".", sentence: "Monicelli ___ I soliti ignoti.", answer: "ha diretto", altAnswers: ["diresse"], explanation: "\"Dirigere\" → \"diretto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Benigni [won] the Oscar for best actor.", sentence: "Benigni ___ l'Oscar come miglior attore.", answer: "ha vinto", altAnswers: ["vinse"], explanation: "\"Come miglior attore\" = for best actor." },
      { type: "word-order", prompt: "Put the words in order to say: Fellini's wife was an actress.", words: ["La", "moglie", "di", "Fellini", "era", "un'attrice."], translation: "Fellini's wife was an actress.", explanation: "Italian has no 's: \"la moglie di\"." },
      { type: "word-order", prompt: "Put the words in order to say: Every director has their own style.", words: ["Ogni", "regista", "ha", "il", "suo", "stile."], translation: "Every director has their own style.", explanation: "\"Ogni\" + singular noun." },
      {
        type: "matching",
        instructions: "Match the director to the film.",
        pairs: [
          { left: "Rossellini", right: "Roma città aperta" },
          { left: "De Sica", right: "Ladri di biciclette" },
          { left: "Risi", right: "Il sorpasso" },
          { left: "Moretti", right: "La stanza del figlio" },
        ],
        explanation: "Directors and their best-known films.",
      },
      { type: "multiple-choice", question: "What does \"il primo piano\" mean in cinema?", options: ["a close-up", "the first scene", "the opening night", "the main actor"], correctIndex: 0, explanation: "Elsewhere it also means first floor." },
      { type: "listen-choose", audio: "La regia è di Sergio Leone.", question: "What does the speaker say?", options: ["It's directed by Sergio Leone.", "Sergio Leone is the main actor.", "Sergio Leone wrote the music.", "Sergio Leone is in the audience."], correctIndex: 0, explanation: "\"La regia\" = direction." },
      { type: "dictation", audio: "Ha scritto anche la sceneggiatura.", explanation: "\"Sceneggiatura\": sc + e = sh." },
      { type: "speak", text: "Il mio regista italiano preferito è Fellini, perché i suoi film sembrano sogni.", prompt: "Say it in Italian: My favorite Italian director is Fellini, because his films seem like dreams.", tip: "SEM-bra-no: stress on the first syllable.", explanation: "\"Sembrare\" = to seem." },
    ],
  },
  {
    slug: "culture-cinema-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Films",
    summary: "Fresh sentences for talking about films: plots, actors, genres, opinions and watching at home or at the movies.",
    duration: "15 min",
    sections: [
      {
        heading: "Talking about films",
        body: [
          "Genres: \"un film drammatico\" (a drama), \"una commedia\", \"un giallo\" (a thriller or mystery, from the yellow covers of old crime novels), \"un film d'animazione\", \"un film horror\". \"Il cast\" is borrowed from English, and \"la trama\" is the plot.",
        ],
        examples: [
          { es: "Ti piacciono i gialli?", en: "Do you like thrillers?" },
          { es: "È una commedia romantica.", en: "It's a romantic comedy." },
          { es: "La trama è semplice.", en: "The plot is simple." },
          { es: "Gli attori sono tutti bravi.", en: "The actors are all good." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you like thrillers?", answer: "Ti piacciono i gialli?", altAnswers: ["Ti piacciono i thriller?"], explanation: "\"Il giallo\" = mystery or thriller." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [plot] is simple.", sentence: "La ___ è semplice.", answer: "trama", explanation: "\"La trama\" = plot." },
        ],
      },
    ],
    optional: true,
    kind: "drill",
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a romantic comedy.", answer: "È una commedia romantica.", explanation: "Adjective after the noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The actors are all good.", answer: "Gli attori sono tutti bravi.", altAnswers: ["Tutti gli attori sono bravi."], explanation: "\"Bravo\" for performers." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already seen this film.", answer: "Ho già visto questo film.", altAnswers: ["Questo film l'ho già visto."], explanation: "\"Già\" goes between \"ho\" and \"visto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How does it end?", answer: "Come finisce?", explanation: "\"Finire\" → \"finisce\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's watch a film at home tonight.", answer: "Stasera guardiamo un film a casa.", altAnswers: ["Guardiamo un film a casa stasera.", "Stasera vediamo un film a casa."], explanation: "\"A casa\" = at home." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film lasts two hours.", answer: "Il film dura due ore.", explanation: "\"Durare\" = to last." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's in it?", answer: "Chi c'è nel film?", altAnswers: ["Chi recita nel film?", "Chi sono gli attori?"], explanation: "\"Recitare\" = to act." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [fell asleep] during the film.", sentence: "___ durante il film.", answer: "Mi sono addormentato", altAnswers: ["Mi sono addormentata"], explanation: "\"Addormentarsi\" = to fall asleep." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film is [based on] a novel.", sentence: "Il film è ___ un romanzo.", answer: "tratto da", altAnswers: ["basato su"], explanation: "\"Tratto da\" = taken from." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [special effects] are amazing.", sentence: "Gli ___ sono incredibili.", answer: "effetti speciali", explanation: "\"L'effetto\" → \"gli effetti\"." },
      { type: "word-order", prompt: "Put the words in order to say: The film is set in Naples.", words: ["Il", "film", "è", "ambientato", "a", "Napoli."], translation: "The film is set in Naples.", explanation: "\"Ambientato a\" + city." },
      { type: "word-order", prompt: "Put the words in order to say: I prefer the original version with subtitles.", words: ["Preferisco", "la", "versione", "originale", "con", "i", "sottotitoli."], translation: "I prefer the original version with subtitles.", explanation: "\"Con i sottotitoli\" = with subtitles." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il giallo", right: "the mystery film" },
          { left: "la trama", right: "the plot" },
          { left: "il protagonista", right: "the main character" },
          { left: "il lieto fine", right: "the happy ending" },
          { left: "la colonna sonora", right: "the soundtrack" },
        ],
        explanation: "Film vocabulary.",
      },
      { type: "multiple-choice", question: "Why is a mystery called \"un giallo\" in Italian?", options: ["old crime novels had yellow covers", "detectives wore yellow", "it was filmed in the desert", "it's shown in the afternoon"], correctIndex: 0, explanation: "\"Giallo\" = yellow." },
      { type: "listen-choose", audio: "Mi sono addormentato durante il film.", question: "What happened?", options: ["He fell asleep during the film.", "He left during the film.", "He cried during the film.", "He laughed during the film."], correctIndex: 0, explanation: "\"Addormentarsi\" = to fall asleep." },
      { type: "dictation", audio: "Il film è tratto da un romanzo.", explanation: "\"Tratto\": double t." },
      { type: "speak", text: "È un giallo ambientato a Napoli, con una trama piena di colpi di scena.", prompt: "Say it in Italian: It's a mystery set in Naples, with a plot full of twists.", tip: "COL-pi di SCE-na: \"sce\" sounds like \"she\".", explanation: "\"Il colpo di scena\" = plot twist." },
    ],
  },
];
