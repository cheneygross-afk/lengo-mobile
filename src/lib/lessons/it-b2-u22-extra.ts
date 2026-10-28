// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u22-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 22 Extra Practice: Arts and
// Heritage. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U22_EXTRA: Lesson[] = [
  {
    slug: "b2-arts-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Paintings",
    summary: "Fresh descriptions of paintings: placing figures, light, color and meaning.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Look and describe",
        body: [
          "Use the guide's toolkit: \"in primo piano\", \"sullo sfondo\", \"si vede / si vedono\", \"la luce proviene da\", \"di un\" + color, \"sembra che\" + subjunctive, \"trasmette\". New words: \"il paesaggio\" (landscape), \"la natura morta\" (still life), \"il gesto\" (gesture), \"lo sguardo\" (gaze), \"in lontananza\" (in the distance).",
        ],
        examples: [
          { es: "È una natura morta con un vaso di fiori e un limone.", en: "It's a still life with a vase of flowers and a lemon." },
          { es: "In lontananza si vedono delle colline azzurre.", en: "In the distance you can see some blue hills." },
          { es: "Il santo alza la mano in un gesto di benedizione.", en: "The saint raises his hand in a gesture of blessing." },
          { es: "Lo sguardo della donna è rivolto verso lo spettatore.", en: "The woman's gaze is directed at the viewer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the distance you can see some hills.", answer: "In lontananza si vedono delle colline.", altAnswers: ["In lontananza si vedono alcune colline.", "In lontananza ci sono delle colline.", "In lontananza si vedono colline."], explanation: "Plural subject: \"si vedono\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a still life with a vase of flowers.", answer: "È una natura morta con un vaso di fiori.", explanation: "\"La natura morta\" = still life." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The woman's gaze is directed at the viewer.", answer: "Lo sguardo della donna è rivolto verso lo spettatore.", altAnswers: ["Lo sguardo della donna è rivolto allo spettatore."], explanation: "\"Rivolto verso\" = directed at." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The saint raises his hand.", answer: "Il santo alza la mano.", altAnswers: ["Il santo solleva la mano."], explanation: "Italian uses the article, not a possessive, with body parts." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The landscape is very detailed.", answer: "Il paesaggio è molto dettagliato.", altAnswers: ["Il paesaggio è ricchissimo di dettagli.", "Il paesaggio è dettagliatissimo."], explanation: "\"Il paesaggio\" = landscape." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colors are dull and cold.", answer: "I colori sono spenti e freddi.", explanation: "\"Spenti\" = dull, literally switched off." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The light comes from a window behind the figures.", answer: "La luce proviene da una finestra dietro le figure.", altAnswers: ["La luce viene da una finestra dietro le figure.", "La luce entra da una finestra dietro le figure.", "La luce proviene da una finestra alle spalle delle figure."], explanation: "\"Dietro\" + article, no \"di\" before a noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boy seems to be listening to someone.", answer: "Sembra che il ragazzo stia ascoltando qualcuno.", altAnswers: ["Sembra che il ragazzo ascolti qualcuno.", "Il ragazzo sembra ascoltare qualcuno."], explanation: "\"Sembra che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The painting conveys a sense of peace.", answer: "Il quadro trasmette un senso di pace.", altAnswers: ["Il dipinto trasmette un senso di pace."], explanation: "\"Trasmettere\" = to convey." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two angels in pink robes float in the sky.", answer: "Due angeli con vesti rosa fluttuano nel cielo.", altAnswers: ["Due angeli vestiti di rosa fluttuano nel cielo.", "Due angeli in vesti rosa volano nel cielo.", "Due angeli con vesti rosa volano nel cielo."], explanation: "\"Rosa\" doesn't change." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sea is [a dark blue].", sentence: "Il mare è ___.", answer: "di un blu scuro", altAnswers: ["di un azzurro scuro"], explanation: "\"Di un\" + color noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What strikes me] is the gesture.", sentence: "___ è il gesto.", answer: "Quello che mi colpisce", altAnswers: ["Ciò che mi colpisce"], explanation: "\"Quello che\" = what." },
      { type: "word-order", prompt: "Put the words in order to say: In the foreground there's a sleeping dog.", words: ["In primo", "piano", "c'è", "un cane", "che dorme."], translation: "In the foreground there's a sleeping dog.", explanation: "\"Che dorme\" = sleeping." },
      { type: "multiple-choice", question: "What is \"una natura morta\"?", options: ["a still life", "a dead landscape", "a painting of a funeral", "a damaged painting"], correctIndex: 0, explanation: "Still life = \"natura morta\"." },
      { type: "listen-choose", audio: "Lo sguardo della donna è rivolto verso lo spettatore.", question: "Where is the woman looking?", options: ["at the viewer", "at the sky", "at the child", "out of the window"], correctIndex: 0, explanation: "\"Lo spettatore\" = the viewer." },
      { type: "dictation", audio: "In lontananza si vedono delle colline azzurre.", explanation: "\"Azzurre\" agrees with \"colline\"." },
      { type: "speak", text: "È una natura morta: in primo piano c'è un limone, sullo sfondo un vaso di fiori.", prompt: "Describe it: It's a still life: in the foreground there's a lemon, in the background a vase of flowers.", tip: "li-MO-ne: stress on mo.", explanation: "Place phrases organize the description." },
    ],
  },
  {
    slug: "b2-arts-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Architecture",
    summary: "Fresh guidebook texts about churches, palazzi and squares, with centuries, passives and relative clauses.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "From the guidebook",
        body: [
          "Guidebook Italian: \"risale al\" + century, \"fu costruito / ricostruito / restaurato\", \"la cui facciata\", \"in stile\" + adjective. New words: \"il porticato\" (arcade), \"la loggia\", \"la torre\", \"le mura\" (city walls, a feminine plural), \"il terremoto\" (earthquake).",
        ],
        examples: [
          { es: "Le mura medievali circondano ancora il centro storico.", en: "The medieval walls still surround the historic center." },
          { es: "Il duomo fu ricostruito dopo il terremoto del 1693.", en: "The cathedral was rebuilt after the 1693 earthquake." },
          { es: "Bologna è famosa per i suoi porticati.", en: "Bologna is famous for its arcades." },
          { es: "La torre risale al Duecento.", en: "The tower dates back to the thirteenth century." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The medieval walls still surround the center.", answer: "Le mura medievali circondano ancora il centro.", altAnswers: ["Le mura medioevali circondano ancora il centro."], explanation: "City walls: \"le mura\", feminine plural." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, naming the century the Italian way.", source: "The tower dates back to the thirteenth century.", answer: "La torre risale al Duecento.", altAnswers: ["La torre risale al XIII secolo.", "La torre risale al tredicesimo secolo."], explanation: "The 1200s = \"il Duecento\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "The cathedral was rebuilt after the earthquake.", answer: "Il duomo fu ricostruito dopo il terremoto.", altAnswers: ["La cattedrale fu ricostruita dopo il terremoto.", "Il duomo venne ricostruito dopo il terremoto."], explanation: "\"Ricostruito\" agrees with \"il duomo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bologna is famous for its arcades.", answer: "Bologna è famosa per i suoi porticati.", altAnswers: ["Bologna è famosa per i suoi portici.", "Bologna è celebre per i suoi portici."], explanation: "Cities are feminine: \"famosa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The square is surrounded by Renaissance palazzi.", answer: "La piazza è circondata da palazzi rinascimentali.", altAnswers: ["La piazza è circondata da palazzi del Rinascimento."], explanation: "\"Circondata da\"; \"rinascimentali\" agrees with \"palazzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a church whose bell tower is leaning.", answer: "È una chiesa il cui campanile è pendente.", altAnswers: ["È una chiesa il cui campanile pende."], explanation: "\"Il cui\" + masculine noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The palazzo was restored ten years ago.", answer: "Il palazzo è stato restaurato dieci anni fa.", altAnswers: ["Il palazzo fu restaurato dieci anni fa."], explanation: "Recent past: passato prossimo passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The town is famous for its Baroque churches.", answer: "La città è famosa per le sue chiese barocche.", altAnswers: ["Il paese è famoso per le sue chiese barocche.", "La città è celebre per le sue chiese barocche."], explanation: "\"Barocche\": -che in the feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "From the loggia you can see the whole city.", answer: "Dalla loggia si vede tutta la città.", altAnswers: ["Dalla loggia si vede l'intera città."], explanation: "\"Si vede\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, naming the century the Italian way.", source: "The cloister dates back to the fifteenth century.", answer: "Il chiostro risale al Quattrocento.", altAnswers: ["Il chiostro risale al XV secolo.", "Il chiostro risale al quindicesimo secolo."], explanation: "The 1400s = \"il Quattrocento\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The church [was built] on the ruins of a Roman temple.", sentence: "La chiesa ___ sulle rovine di un tempio romano.", answer: "fu costruita", altAnswers: ["è stata costruita", "venne costruita"], explanation: "\"Costruita\" agrees with \"la chiesa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The building is [in Gothic style].", sentence: "L'edificio è ___.", answer: "in stile gotico", explanation: "\"In stile\" + adjective, lower case." },
      { type: "word-order", prompt: "Put the words in order to say: The medieval walls still surround the historic center.", words: ["Le mura", "medievali", "circondano", "ancora", "il centro", "storico."], translation: "The medieval walls still surround the historic center.", explanation: "\"Le mura\" takes a plural verb." },
      { type: "multiple-choice", question: "\"Il Settecento\" is ...", options: ["the eighteenth century", "the seventeenth century", "the seventh century", "the year 700"], correctIndex: 0, explanation: "\"Settecento\" = the 1700s." },
      { type: "listen-choose", audio: "Il duomo fu ricostruito dopo il terremoto del 1693.", question: "Why was the cathedral rebuilt?", options: ["after an earthquake", "after a fire", "after a war", "after a flood"], correctIndex: 0, explanation: "\"Il terremoto\" = the earthquake." },
      { type: "dictation", audio: "La torre risale al Duecento e il porticato al Cinquecento.", explanation: "\"Duecento\" = 1200s, \"Cinquecento\" = 1500s." },
      { type: "speak", text: "Questa chiesa fu costruita nel Duecento, ma la facciata è barocca.", prompt: "Say it in Italian: This church was built in the thirteenth century, but the façade is Baroque.", tip: "ba-ROC-ca: double c.", explanation: "Passato remoto passive, then the present." },
    ],
  },
  {
    slug: "b2-arts-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Film",
    summary: "Fresh film reviews: plot, direction, acting and verdicts.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Short reviews",
        body: [
          "Review language: \"è ambientato\", \"racconta\", \"diretto da\", \"interpretato da\", \"la regia\", \"la sceneggiatura\", \"mi ha colpito\", \"da non perdere\". New: \"il ritmo\" (pace), \"il colpo di scena\" (plot twist), \"il seguito\" (sequel), \"la prima\" (premiere), \"il botteghino\" (box office).",
        ],
        examples: [
          { es: "Il ritmo è lento nella prima parte, ma il finale è pieno di colpi di scena.", en: "The pace is slow in the first half, but the ending is full of twists." },
          { es: "Il film ha avuto un grande successo al botteghino.", en: "The film was a big box-office success." },
          { es: "Il seguito è peggio del primo film.", en: "The sequel is worse than the first film." },
          { es: "Alla prima c'erano tutti gli attori.", en: "All the actors were at the premiere." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sequel is worse than the first film.", answer: "Il seguito è peggio del primo film.", altAnswers: ["Il seguito è peggiore del primo film.", "Il sequel è peggio del primo film.", "Il sequel è peggiore del primo film."], explanation: "\"Peggiore\" (adjective) or, in speech, \"peggio\"; \"di\" + article for than." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ending is full of twists.", answer: "Il finale è pieno di colpi di scena.", explanation: "\"Il colpo di scena\" → \"i colpi di scena\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film was a big box-office success.", answer: "Il film ha avuto un grande successo al botteghino.", altAnswers: ["Il film è stato un grande successo al botteghino."], explanation: "\"Il botteghino\" = box office." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pace is too slow.", answer: "Il ritmo è troppo lento.", explanation: "\"Il ritmo\" = pace." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's set in Turin in the seventies.", answer: "È ambientato a Torino negli anni Settanta.", altAnswers: ["È ambientato a Torino negli anni '70.", "Il film è ambientato a Torino negli anni Settanta."], explanation: "\"Ambientato a\" + city." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The main character is played by a young actress.", answer: "La protagonista è interpretata da una giovane attrice.", altAnswers: ["Il protagonista è interpretato da una giovane attrice.", "La protagonista è interpretata da un'attrice giovane."], explanation: "\"Interpretata da\" agrees with \"la protagonista\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The direction is excellent, but the screenplay is weak.", answer: "La regia è ottima, ma la sceneggiatura è debole.", altAnswers: ["La regia è eccellente, ma la sceneggiatura è debole."], explanation: "\"La regia\" = direction." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ending left me puzzled.", answer: "Il finale mi ha lasciato perplesso.", altAnswers: ["Il finale mi ha lasciata perplessa."], explanation: "\"Perplesso\" agrees with the speaker." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's worth seeing in a theater.", answer: "Vale la pena vederlo al cinema.", altAnswers: ["Merita di essere visto al cinema.", "Vale la pena di vederlo al cinema."], explanation: "\"Vale la pena\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the funniest film I've ever seen.", answer: "È il film più divertente che abbia mai visto.", altAnswers: ["È il film più divertente che io abbia mai visto."], explanation: "Superlative + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film [is based on] a true story.", sentence: "Il film ___ una storia vera.", answer: "è tratto da", altAnswers: ["è basato su", "si ispira a"], explanation: "\"Tratto da\" = based on." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The dialogue struck me].", sentence: "___ i dialoghi.", answer: "Mi hanno colpito", altAnswers: ["Mi hanno colpita"], explanation: "Plural subject \"i dialoghi\"." },
      { type: "word-order", prompt: "Put the words in order to say: All the actors were at the premiere.", words: ["Alla", "prima", "c'erano", "tutti gli", "attori."], translation: "All the actors were at the premiere.", explanation: "\"La prima\" = the premiere." },
      { type: "multiple-choice", question: "What is \"un colpo di scena\"?", options: ["a plot twist", "a fight scene", "a scene cut by the editor", "a stage set"], correctIndex: 0, explanation: "\"Colpo di scena\" = twist." },
      { type: "listen-choose", audio: "Il ritmo è lento nella prima parte, ma il finale è pieno di colpi di scena.", question: "What does the reviewer say?", options: ["Slow at first, full of twists at the end.", "Fast all the way through.", "Good start, disappointing end.", "Too many twists at the start."], correctIndex: 0, explanation: "\"Lento\" then \"pieno di colpi di scena\"." },
      { type: "dictation", audio: "La regia è ottima, ma la sceneggiatura è debole.", explanation: "\"Regia\" and \"sceneggiatura\"." },
      { type: "speak", text: "È ambientato a Napoli, il ritmo è lento, ma il finale mi ha colpito molto.", prompt: "Review it in one breath: It's set in Naples, the pace is slow, but the ending really struck me.", tip: "am-bien-TA-to: stress on ta.", explanation: "Setting, criticism, reaction." },
    ],
  },
];
