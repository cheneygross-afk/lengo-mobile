// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u06-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 6 Extra Practice: Art and Architecture. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_CULTURE_U06_EXTRA: Lesson[] = [
  {
    slug: "culture-art-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Artists",
    summary: "Fresh sentences about the great Italian artists: who they were, where they worked and what they made.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Lives in brief",
        body: [
          "Biographies use \"nascere\" and \"morire\" with \"essere\", \"dipingere\" (\"dipinto\"), \"scolpire\" (to sculpt) and \"lavorare per\" (to work for). Centuries are often named by hundreds: \"il Quattrocento\" is the 1400s, \"il Cinquecento\" the 1500s, \"il Seicento\" the 1600s.",
        ],
        examples: [
          { es: "Botticelli lavorava per i Medici.", en: "Botticelli worked for the Medici." },
          { es: "Leonardo è nato a Vinci nel 1452.", en: "Leonardo was born in Vinci in 1452." },
          { es: "Bernini ha scolpito Apollo e Dafne.", en: "Bernini sculpted Apollo and Daphne." },
          { es: "Caravaggio è un pittore del Seicento.", en: "Caravaggio is a painter of the 1600s." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Botticelli worked for the Medici.", answer: "Botticelli lavorava per i Medici.", altAnswers: ["Botticelli ha lavorato per i Medici.", "Botticelli lavorò per i Medici."], explanation: "\"Lavorare per\" = to work for." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Caravaggio is a painter [of the 1600s].", sentence: "Caravaggio è un pittore ___.", answer: "del Seicento", explanation: "\"Il Seicento\" = the 1600s." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leonardo was born in Vinci.", answer: "Leonardo è nato a Vinci.", altAnswers: ["Leonardo nacque a Vinci."], explanation: "\"Nascere\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Michelangelo sculpted the David.", answer: "Michelangelo ha scolpito il David.", altAnswers: ["Michelangelo scolpì il David."], explanation: "\"Scolpire\" → \"scolpito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Raphael was born in Urbino.", answer: "Raffaello è nato a Urbino.", altAnswers: ["Raffaello nacque a Urbino."], explanation: "\"Raffaello\": double f, double l." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giotto painted frescoes.", answer: "Giotto dipingeva affreschi.", altAnswers: ["Giotto ha dipinto affreschi.", "Giotto dipinse affreschi.", "Giotto dipingeva gli affreschi."], explanation: "\"L'affresco\" → \"gli affreschi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Modigliani lived in Paris.", answer: "Modigliani viveva a Parigi.", altAnswers: ["Modigliani ha vissuto a Parigi.", "Modigliani abitava a Parigi."], explanation: "\"Parigi\" = Paris." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bernini and Borromini were rivals.", answer: "Bernini e Borromini erano rivali.", explanation: "Imperfetto for a lasting state." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Brunelleschi was an architect.", answer: "Brunelleschi era un architetto.", altAnswers: ["Brunelleschi fu un architetto."], explanation: "\"Architetto\": ch = k." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Botticelli is a painter [of the 1400s].", sentence: "Botticelli è un pittore ___.", answer: "del Quattrocento", explanation: "\"Il Quattrocento\" = the 1400s." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Raphael [died] young.", sentence: "Raffaello ___ giovane.", answer: "è morto", altAnswers: ["morì"], explanation: "\"Morire\" with \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Caravaggio [painted] ordinary people.", sentence: "Caravaggio ___ gente comune.", answer: "dipingeva", altAnswers: ["ha dipinto", "dipinse"], explanation: "Imperfetto for a habit of style." },
      { type: "word-order", prompt: "Put the words in order to say: The Futurists loved machines.", words: ["I", "futuristi", "amavano", "le", "macchine."], translation: "The Futurists loved machines.", explanation: "\"La macchina\" = machine or car." },
      { type: "word-order", prompt: "Put the words in order to say: De Chirico painted empty squares.", words: ["De", "Chirico", "dipingeva", "piazze", "vuote."], translation: "De Chirico painted empty squares.", explanation: "\"Vuote\" agrees with \"piazze\"." },
      {
        type: "matching",
        instructions: "Match the century to its Italian name.",
        pairs: [
          { left: "il Trecento", right: "the 1300s" },
          { left: "il Quattrocento", right: "the 1400s" },
          { left: "il Cinquecento", right: "the 1500s" },
          { left: "il Seicento", right: "the 1600s" },
          { left: "il Novecento", right: "the 1900s" },
        ],
        explanation: "Italians name centuries by hundreds.",
      },
      { type: "multiple-choice", question: "Who painted \"La Nascita di Venere\"?", options: ["Botticelli", "Caravaggio", "Bernini", "Giotto"], correctIndex: 0, explanation: "It hangs in the Uffizi." },
      { type: "listen-choose", audio: "Leonardo è nato a Vinci nel 1452.", question: "Where was Leonardo born?", options: ["in Vinci", "in Florence", "in Milan", "in Rome"], correctIndex: 0, explanation: "\"Da Vinci\" = from Vinci." },
      { type: "dictation", audio: "Bernini ha scolpito Apollo e Dafne.", explanation: "\"Scolpito\" = sculpted." },
      { type: "speak", text: "Caravaggio è il mio pittore preferito del Seicento.", prompt: "Say it in Italian: Caravaggio is my favorite painter of the 1600s.", tip: "SEI-cen-to: stress on the first syllable.", explanation: "\"Del Seicento\" = of the 1600s." },
    ],
  },
  {
    slug: "culture-art-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Buildings",
    summary: "Fresh sentences about Italian buildings: churches, towers, domes, squares and the words to describe them.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Describing a building",
        body: [
          "Useful words: \"la facciata\" (façade), \"la cupola\" (dome), \"il campanile\" (bell tower), \"l'arco\" (arch), \"la colonna\" (column), \"il chiostro\" (cloister). \"Il Duomo\" is a city's main church, usually its cathedral.",
        ],
        examples: [
          { es: "La facciata è di marmo bianco.", en: "The façade is white marble." },
          { es: "Dalla cupola si vede tutta la città.", en: "From the dome you can see the whole city." },
          { es: "Il chiostro è molto tranquillo.", en: "The cloister is very peaceful." },
          { es: "Il campanile è alto più di ottanta metri.", en: "The bell tower is over eighty meters tall." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "From the dome you can see the whole city.", answer: "Dalla cupola si vede tutta la città.", altAnswers: ["Dalla cupola si può vedere tutta la città.", "Dalla cupola vedi tutta la città."], explanation: "\"Si vede\" = you can see." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The façade is [white marble].", sentence: "La facciata è di ___.", answer: "marmo bianco", explanation: "\"Di marmo\" = made of marble." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cloister is very peaceful.", answer: "Il chiostro è molto tranquillo.", altAnswers: ["Il chiostro è tranquillissimo."], explanation: "\"Chiostro\": chi = k sound." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dome is enormous.", answer: "La cupola è enorme.", altAnswers: ["La cupola è grandissima."], explanation: "\"Enorme\" ends in -e for both genders." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The church has a Gothic façade.", answer: "La chiesa ha una facciata gotica.", explanation: "\"Gotico\" → \"gotica\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's climb the bell tower!", answer: "Saliamo sul campanile!", altAnswers: ["Saliamo in cima al campanile!"], explanation: "\"Salire su\" = to climb up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cathedral is in the main square.", answer: "Il Duomo è nella piazza principale.", altAnswers: ["Il duomo è nella piazza principale.", "La cattedrale è nella piazza principale."], explanation: "\"Il Duomo\" = the main church." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The columns are Roman.", answer: "Le colonne sono romane.", altAnswers: ["Le colonne sono di epoca romana."], explanation: "Agreement: \"romane\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tower is leaning.", answer: "La torre è pendente.", altAnswers: ["La torre pende."], explanation: "\"Pendente\" = leaning." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bell tower is [over eighty meters tall].", sentence: "Il campanile è ___.", answer: "alto più di ottanta metri", altAnswers: ["alto oltre ottanta metri"], explanation: "\"Alto\" + measurement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There are 463 [steps].", sentence: "Ci sono 463 ___.", answer: "gradini", altAnswers: ["scalini"], explanation: "\"Il gradino\" = step." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The arches are [round].", sentence: "Gli archi sono ___.", answer: "a tutto sesto", altAnswers: ["rotondi", "tondi"], explanation: "Architects say \"a tutto sesto\"." },
      { type: "word-order", prompt: "Put the words in order to say: The baptistery is in front of the cathedral.", words: ["Il", "battistero", "è", "davanti", "al", "Duomo."], translation: "The baptistery is in front of the cathedral.", explanation: "\"Davanti a\" = in front of." },
      { type: "word-order", prompt: "Put the words in order to say: The roof is covered in marble spires.", words: ["Il", "tetto", "è", "pieno", "di", "guglie", "di", "marmo."], translation: "The roof is covered in marble spires.", explanation: "\"La guglia\" = spire." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la facciata", right: "the façade" },
          { left: "la cupola", right: "the dome" },
          { left: "il chiostro", right: "the cloister" },
          { left: "la guglia", right: "the spire" },
          { left: "il battistero", right: "the baptistery" },
        ],
        explanation: "Building vocabulary.",
      },
      { type: "multiple-choice", question: "What is \"il Duomo\" in an Italian city?", options: ["the main church, usually the cathedral", "the town hall", "the main square", "the castle"], correctIndex: 0, explanation: "From Latin \"domus\", house (of God)." },
      { type: "listen-choose", audio: "Dalla cupola si vede tutta la città.", question: "What can you see from the dome?", options: ["the whole city", "nothing", "only the square", "the sea"], correctIndex: 0, explanation: "\"Tutta la città\"." },
      { type: "dictation", audio: "La facciata è di marmo bianco.", explanation: "\"Facciata\": double c." },
      { type: "speak", text: "Saliamo sulla cupola? Da lassù la vista è spettacolare.", prompt: "Say it in Italian: Shall we climb the dome? From up there the view is spectacular.", tip: "CU-po-la: stress the first syllable.", explanation: "\"Lassù\" = up there." },
    ],
  },
];
