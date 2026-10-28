// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u01-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 1 Extra Practice: Regions and Cities. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_CULTURE_U01_EXTRA: Lesson[] = [
  {
    slug: "culture-regions-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: The Map",
    summary: "Practise regions, their capoluoghi, regional adjectives and what each region is known for.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Who comes from where",
        body: [
          "Regional adjectives are lowercase and agree like any adjective: \"piemontese\", \"lombardo\", \"veneto\", \"ligure\", \"emiliano\", \"toscano\", \"umbro\", \"marchigiano\", \"laziale\", \"abruzzese\", \"molisano\", \"campano\", \"pugliese\", \"lucano\", \"calabrese\", \"siciliano\", \"sardo\". Adjectives in -e have one form for both genders: \"una ragazza pugliese\", \"un ragazzo pugliese\".",
        ],
        examples: [
          { es: "Mio marito è siciliano, io sono lombarda.", en: "My husband is Sicilian, I'm from Lombardy." },
          { es: "Il pesto è un piatto ligure.", en: "Pesto is a Ligurian dish." },
          { es: "Ho una collega calabrese.", en: "I have a colleague from Calabria." },
          { es: "I vini piemontesi sono famosi.", en: "Piedmontese wines are famous." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pesto is a Ligurian dish.", answer: "Il pesto è un piatto ligure.", explanation: "\"Ligure\" ends in -e: same form for masculine and feminine." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have a colleague [from Calabria].", sentence: "Ho una collega ___.", answer: "calabrese", explanation: "\"Calabrese\" doesn't change for gender." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My wife is from Sardinia.", answer: "Mia moglie è sarda.", altAnswers: ["Mia moglie è della Sardegna."], explanation: "\"Sardo\" → \"sarda\" for a woman." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Piedmontese wines are famous.", answer: "I vini piemontesi sono famosi.", explanation: "\"Piemontese\" → plural \"piemontesi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bari is the regional capital of Puglia.", answer: "Bari è il capoluogo della Puglia.", altAnswers: ["Bari è il capoluogo pugliese."], explanation: "\"Capoluogo\", not \"capitale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cagliari is in the south of Sardinia.", answer: "Cagliari è nel sud della Sardegna.", altAnswers: ["Cagliari si trova nel sud della Sardegna.", "Cagliari è nel Sud della Sardegna."], explanation: "\"Nel sud di\" = in the south of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Genoa is the regional capital of Liguria.", answer: "Genova è il capoluogo della Liguria.", explanation: "English Genoa = \"Genova\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tuscan cities are very beautiful.", answer: "Le città toscane sono molto belle.", altAnswers: ["Le città toscane sono bellissime."], explanation: "\"Città\" is feminine and doesn't change in the plural: \"le città toscane\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents live in Abruzzo.", answer: "I miei genitori abitano in Abruzzo.", altAnswers: ["I miei genitori vivono in Abruzzo.", "I miei abitano in Abruzzo.", "I miei vivono in Abruzzo."], explanation: "\"In Abruzzo\", like most regions." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Venice is the regional capital [of Veneto].", sentence: "Venezia è il capoluogo ___.", answer: "del Veneto", explanation: "\"Il Veneto\" is masculine: \"del Veneto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Ancona is the regional capital [of the Marche].", sentence: "Ancona è il capoluogo ___.", answer: "delle Marche", explanation: "Plural region: \"delle Marche\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Potenza is in [Basilicata].", sentence: "Potenza è ___.", answer: "in Basilicata", explanation: "\"In\" + region." },
      { type: "word-order", prompt: "Put the words in order to say: Campobasso is the regional capital of Molise.", words: ["Campobasso", "è", "il", "capoluogo", "del", "Molise."], translation: "Campobasso is the regional capital of Molise.", explanation: "\"Del Molise\": masculine." },
      {
        type: "matching",
        instructions: "Match each region to what it's known for.",
        pairs: [
          { left: "Emilia-Romagna", right: "Parmesan and Ferrari" },
          { left: "Valle d'Aosta", right: "Mont Blanc" },
          { left: "Basilicata", right: "the Sassi of Matera" },
          { left: "Veneto", right: "Venice and Prosecco" },
          { left: "Umbria", right: "Assisi" },
        ],
        explanation: "One landmark or product per region.",
      },
      { type: "multiple-choice", question: "Which adjective describes someone from Basilicata?", options: ["lucano", "basilicano", "lucchese", "barese"], correctIndex: 0, explanation: "Basilicata's old name is Lucania, so its people are \"lucani\". \"Lucchese\" is from Lucca, \"barese\" from Bari." },
      { type: "dictation", audio: "Ancona è il capoluogo delle Marche.", explanation: "\"Delle Marche\": plural." },
      { type: "listen-choose", audio: "Mio marito è siciliano, io sono lombarda.", question: "What does it mean?", options: ["My husband is Sicilian, I'm from Lombardy.", "My husband is from Lombardy, I'm Sicilian.", "We're both Sicilian.", "My husband lives in Sicily."], correctIndex: 0, explanation: "\"Lombarda\": feminine, so it's the speaker." },
      { type: "speak", text: "Il mio amico Luca è veneto, ma vive in Liguria, a Genova.", prompt: "Say it in Italian: My friend Luca is from Veneto, but he lives in Liguria, in Genoa.", tip: "Genova: stress on the first syllable, GE-no-va.", explanation: "Adjective of origin, then \"in\" + region, \"a\" + city." },
    ],
  },
  {
    slug: "culture-regions-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Cities",
    summary: "Read short descriptions of ten Italian cities and talk about them in Italian.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Five cities of the North and Centre",
        body: [
          "Each line below is a short portrait. Cities are feminine in Italian, whatever their ending: \"Torino è bella\", \"Milano è cara\".",
        ],
        examples: [
          { es: "Torino è elegante, con lunghi portici e caffè storici.", en: "Turin is elegant, with long arcades and historic cafés." },
          { es: "Milano è la città del lavoro, della moda e dell'aperitivo.", en: "Milan is the city of work, fashion and the aperitivo." },
          { es: "A Venezia non ci sono macchine: si va a piedi o in vaporetto.", en: "There are no cars in Venice: you walk or take the water bus." },
          { es: "Bologna ha la più antica università del mondo occidentale.", en: "Bologna has the oldest university in the Western world." },
          { es: "Firenze è piena di turisti tutto l'anno.", en: "Florence is full of tourists all year round." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are no cars in Venice.", answer: "A Venezia non ci sono macchine.", altAnswers: ["A Venezia non ci sono auto.", "A Venezia non ci sono automobili.", "Non ci sono macchine a Venezia."], explanation: "\"Non ci sono\" + plural noun, no article." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Milan [is expensive].", sentence: "Milano ___.", answer: "è cara", explanation: "Cities are feminine: \"cara\"." },
        ],
      },
      {
        heading: "Five cities of the South and islands",
        body: [
          "The same pattern, further south. Notice \"ci sono\" for what a city has and \"si\" for what people do there.",
        ],
        examples: [
          { es: "Roma è caotica, ma ogni strada ha una storia.", en: "Rome is chaotic, but every street has a story." },
          { es: "Napoli è rumorosa, vitale e generosa.", en: "Naples is noisy, lively and generous." },
          { es: "A Bari si mangia il crudo di mare sul lungomare.", en: "In Bari people eat raw seafood on the seafront." },
          { es: "Palermo ha mercati pieni di colori e di voci.", en: "Palermo has markets full of colors and voices." },
          { es: "Genova è una città di porto, tra il mare e le colline.", en: "Genoa is a port city, between the sea and the hills." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Naples is noisy but generous.", answer: "Napoli è rumorosa ma generosa.", altAnswers: ["Napoli è rumorosa, ma generosa."], explanation: "Feminine adjectives for a city." },
          { type: "listen-choose", audio: "Palermo ha mercati pieni di colori.", question: "What does it mean?", options: ["Palermo has markets full of colors.", "Palermo has colorful houses.", "Palermo's markets are empty.", "Palermo has one big market."], correctIndex: 0, explanation: "\"Pieni di\" = full of." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turin is elegant.", answer: "Torino è elegante.", explanation: "\"Elegante\" ends in -e: one form for both genders." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Florence is full of tourists.", answer: "Firenze è piena di turisti.", explanation: "\"Piena\" agrees with \"Firenze\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rome is chaotic.", answer: "Roma è caotica.", explanation: "\"Caotico\" → \"caotica\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Venice we walk everywhere.", answer: "A Venezia andiamo dappertutto a piedi.", altAnswers: ["A Venezia andiamo ovunque a piedi.", "A Venezia andiamo a piedi dappertutto.", "A Venezia andiamo a piedi ovunque."], explanation: "\"Andare a piedi\" = to walk somewhere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Genoa is a port city.", answer: "Genova è una città di porto.", altAnswers: ["Genova è una città portuale."], explanation: "\"Di porto\" or \"portuale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every street has a story.", answer: "Ogni strada ha una storia.", altAnswers: ["Ogni via ha una storia."], explanation: "\"Ogni\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bologna is a university city.", answer: "Bologna è una città universitaria.", explanation: "\"Universitaria\" agrees with \"città\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Turin has [long arcades].", sentence: "Torino ha ___.", answer: "lunghi portici", altAnswers: ["portici lunghi"], explanation: "\"Il portico\" → \"i portici\"; \"lunghi\" keeps the hard g with an h." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Bari [people eat] raw seafood.", sentence: "A Bari ___ il crudo di mare.", answer: "si mangia", explanation: "\"Si\" + verb for what people in general do." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Milan is [the city of work].", sentence: "Milano è ___.", answer: "la città del lavoro", explanation: "\"Del lavoro\": \"di\" + \"il\"." },
      { type: "word-order", prompt: "Put the words in order to say: Naples is noisy, lively and generous.", words: ["Napoli", "è", "rumorosa,", "vitale", "e", "generosa."], translation: "Naples is noisy, lively and generous.", explanation: "Three adjectives, all feminine." },
      { type: "word-order", prompt: "Put the words in order to say: Genoa is between the sea and the hills.", words: ["Genova", "è", "tra", "il", "mare", "e", "le", "colline."], translation: "Genoa is between the sea and the hills.", explanation: "\"Tra\" = between." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "i portici", right: "the arcades" },
          { left: "il vaporetto", right: "the water bus" },
          { left: "il lungomare", right: "the seafront" },
          { left: "il porto", right: "the port" },
          { left: "la collina", right: "the hill" },
        ],
        explanation: "City words from the portraits.",
      },
      { type: "dictation", audio: "A Venezia si va a piedi o in vaporetto.", explanation: "\"A piedi\", \"in vaporetto\": on foot, by water bus." },
      { type: "speak", text: "La mia città preferita è Bologna: è vivace, ha i portici e si mangia benissimo.", prompt: "Say it in Italian: My favorite city is Bologna: it's lively, it has arcades and the food is excellent.", tip: "Bo-LO-gna: gn like the ny in canyon.", explanation: "\"Si mangia benissimo\" = the food is excellent." },
    ],
  },
];
