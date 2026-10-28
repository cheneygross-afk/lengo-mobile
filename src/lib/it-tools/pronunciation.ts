// Synced from cheneygross-afk/lengo:src/lib/it-tools/pronunciation.ts by scripts/sync-content.mjs -- edit it there, not here.
// Italian Pronunciation & Spelling (/lessons/it/tools/pronunciation):
// double consonants, stress and written accents, and the letter
// combinations whose sound depends on the next letter, plus the bank for
// the listen-and-choose drill (components/it-tools/ItListenDrill.tsx).
// Pure data, no lesson imports (the page is a server route).
// Checked by scripts/check-italian-extra-tools.ts.

export const IT_PRONUNCIATION_PATH = "/lessons/it/tools/pronunciation";

/** One word with its English meaning. */
export type Word = { it: string; en: string };

/** Single consonant vs double consonant: [single, double]. */
export const DOUBLE_PAIRS: [Word, Word][] = [
  [{ it: "pane", en: "bread" }, { it: "panna", en: "cream" }],
  [{ it: "nona", en: "ninth" }, { it: "nonna", en: "grandmother" }],
  [{ it: "fato", en: "fate" }, { it: "fatto", en: "done; a fact" }],
  [{ it: "sete", en: "thirst" }, { it: "sette", en: "seven" }],
  [{ it: "caro", en: "dear; expensive" }, { it: "carro", en: "cart, float" }],
  [{ it: "pala", en: "shovel" }, { it: "palla", en: "ball" }],
  [{ it: "casa", en: "house" }, { it: "cassa", en: "till, checkout" }],
  [{ it: "copia", en: "copy" }, { it: "coppia", en: "couple" }],
  [{ it: "eco", en: "echo" }, { it: "ecco", en: "here it is" }],
  [{ it: "sono", en: "I am; they are" }, { it: "sonno", en: "sleep, sleepiness" }],
  [{ it: "note", en: "notes" }, { it: "notte", en: "night" }],
  [{ it: "capello", en: "a hair" }, { it: "cappello", en: "hat" }],
  [{ it: "polo", en: "pole" }, { it: "pollo", en: "chicken" }],
  [{ it: "pena", en: "pity; penalty" }, { it: "penna", en: "pen" }],
  [{ it: "rosa", en: "rose; pink" }, { it: "rossa", en: "red" }],
  [{ it: "camino", en: "fireplace" }, { it: "cammino", en: "path, journey" }],
  [{ it: "tuta", en: "tracksuit" }, { it: "tutta", en: "all, whole" }],
  [{ it: "papa", en: "pope" }, { it: "pappa", en: "baby food" }],
];

/** Final stress, written with an accent: [without, with]. */
export const ACCENT_PAIRS: [Word, Word][] = [
  [{ it: "papa", en: "pope" }, { it: "papà", en: "dad" }],
  [{ it: "e", en: "and" }, { it: "è", en: "is" }],
  [{ it: "la", en: "the" }, { it: "là", en: "there" }],
  [{ it: "si", en: "reflexive pronoun" }, { it: "sì", en: "yes" }],
  [{ it: "da", en: "from" }, { it: "dà", en: "gives" }],
  [{ it: "ne", en: "of it" }, { it: "né", en: "nor" }],
  [{ it: "se", en: "if" }, { it: "sé", en: "himself, herself (stressed)" }],
];

/** Words stressed on the last syllable, which always show it. */
export const FINAL_STRESS: Word[] = [
  { it: "città", en: "city" },
  { it: "università", en: "university" },
  { it: "caffè", en: "coffee" },
  { it: "perché", en: "why; because" },
  { it: "però", en: "but, however" },
  { it: "più", en: "more" },
  { it: "giù", en: "down" },
  { it: "lunedì", en: "Monday" },
  { it: "ventitré", en: "twenty-three" },
];

/** Stress on the second-to-last syllable (most words) and further back. */
export const STRESS_EXAMPLES: { it: string; marked: string; en: string }[] = [
  { it: "amico", marked: "a·MI·co", en: "friend" },
  { it: "parlare", marked: "par·LA·re", en: "to speak" },
  { it: "tavolo", marked: "TA·vo·lo", en: "table" },
  { it: "macchina", marked: "MAC·chi·na", en: "car" },
  { it: "telefono", marked: "te·LE·fo·no", en: "telephone" },
  { it: "abitano", marked: "A·bi·ta·no", en: "they live" },
];

export type SpellingRow = {
  spelling: string;
  sound: string;
  examples: Word[];
};

/** How c, g, sc, gli, gn, z, ch, gh and h sound. */
export const SPELLING_ROWS: SpellingRow[] = [
  {
    spelling: "c + a, o, u",
    sound: "hard k, as in cat",
    examples: [
      { it: "casa", en: "house" },
      { it: "cosa", en: "thing" },
      { it: "cuore", en: "heart" },
    ],
  },
  {
    spelling: "ch + e, i",
    sound: "hard k: the h keeps the c hard",
    examples: [
      { it: "che", en: "what" },
      { it: "chiave", en: "key" },
      { it: "anche", en: "also" },
    ],
  },
  {
    spelling: "c + e, i",
    sound: "ch, as in church",
    examples: [
      { it: "cena", en: "dinner" },
      { it: "cinema", en: "cinema" },
      { it: "dolce", en: "sweet" },
    ],
  },
  {
    spelling: "ci + a, o, u",
    sound: "ch, with a silent i",
    examples: [
      { it: "ciao", en: "hi, bye" },
      { it: "cioccolato", en: "chocolate" },
      { it: "ciuffo", en: "tuft, quiff" },
    ],
  },
  {
    spelling: "g + a, o, u",
    sound: "hard g, as in go",
    examples: [
      { it: "gatto", en: "cat" },
      { it: "gola", en: "throat" },
      { it: "gusto", en: "taste, flavour" },
    ],
  },
  {
    spelling: "gh + e, i",
    sound: "hard g: the h keeps the g hard",
    examples: [
      { it: "spaghetti", en: "spaghetti" },
      { it: "funghi", en: "mushrooms" },
      { it: "ghiaccio", en: "ice" },
    ],
  },
  {
    spelling: "g + e, i; gi + a, o, u",
    sound: "j, as in jam",
    examples: [
      { it: "gelato", en: "ice cream" },
      { it: "giro", en: "tour, ride" },
      { it: "giorno", en: "day" },
    ],
  },
  {
    spelling: "sc + a, o, u; sch + e, i",
    sound: "sk",
    examples: [
      { it: "scuola", en: "school" },
      { it: "scarpe", en: "shoes" },
      { it: "schiena", en: "back" },
    ],
  },
  {
    spelling: "sc + e, i; sci + a, o, u",
    sound: "sh, as in shop",
    examples: [
      { it: "scena", en: "scene" },
      { it: "sciopero", en: "strike" },
      { it: "prosciutto", en: "ham" },
    ],
  },
  {
    spelling: "gli",
    sound: "like lli in million, said with the tongue flat",
    examples: [
      { it: "figlio", en: "son" },
      { it: "famiglia", en: "family" },
      { it: "luglio", en: "July" },
    ],
  },
  {
    spelling: "gn",
    sound: "like ny in canyon",
    examples: [
      { it: "gnocchi", en: "gnocchi" },
      { it: "bagno", en: "bathroom" },
      { it: "signora", en: "madam, lady" },
    ],
  },
  {
    spelling: "z, zz",
    sound: "ts or dz, depending on the word (and the region)",
    examples: [
      { it: "pizza", en: "pizza" },
      { it: "grazie", en: "thank you" },
      { it: "zero", en: "zero" },
    ],
  },
  {
    spelling: "h",
    sound: "always silent",
    examples: [
      { it: "ho", en: "I have" },
      { it: "hanno", en: "they have" },
      { it: "hotel", en: "hotel" },
    ],
  },
  {
    spelling: "qu, cq",
    sound: "kw",
    examples: [
      { it: "quando", en: "when" },
      { it: "questo", en: "this" },
      { it: "acqua", en: "water" },
    ],
  },
];

/** Same sound, different spelling: the h of avere. */
export const SILENT_H_PAIRS: [Word, Word][] = [
  [{ it: "ho", en: "I have" }, { it: "o", en: "or" }],
  [{ it: "ha", en: "has" }, { it: "a", en: "to, at" }],
  [{ it: "hanno", en: "they have" }, { it: "anno", en: "year" }],
];

// ---- The listen-and-choose drill ----------------------------------------

export type ListenItem = {
  id: string;
  /** What's played: always options[answer]. */
  answer: number;
  options: Word[];
  /** What to listen for, in English with Italian in "double quotes". */
  tip: string;
  group: "double" | "accent" | "letters";
};

const dbl = (single: Word, double: Word, playDouble: boolean): ListenItem => ({
  id: `dbl-${playDouble ? double.it : single.it}`,
  answer: playDouble ? 1 : 0,
  options: [single, double],
  tip: `Listen to the consonant: "${double.it}" holds it for a moment longer than "${single.it}", and the vowel before it is shorter.`,
  group: "double",
});

export const LISTEN_DRILL: ListenItem[] = [
  dbl(DOUBLE_PAIRS[0][0], DOUBLE_PAIRS[0][1], true),
  dbl(DOUBLE_PAIRS[1][0], DOUBLE_PAIRS[1][1], true),
  dbl(DOUBLE_PAIRS[2][0], DOUBLE_PAIRS[2][1], false),
  dbl(DOUBLE_PAIRS[3][0], DOUBLE_PAIRS[3][1], true),
  dbl(DOUBLE_PAIRS[4][0], DOUBLE_PAIRS[4][1], false),
  dbl(DOUBLE_PAIRS[5][0], DOUBLE_PAIRS[5][1], true),
  dbl(DOUBLE_PAIRS[6][0], DOUBLE_PAIRS[6][1], false),
  dbl(DOUBLE_PAIRS[7][0], DOUBLE_PAIRS[7][1], true),
  dbl(DOUBLE_PAIRS[8][0], DOUBLE_PAIRS[8][1], true),
  dbl(DOUBLE_PAIRS[9][0], DOUBLE_PAIRS[9][1], false),
  dbl(DOUBLE_PAIRS[10][0], DOUBLE_PAIRS[10][1], true),
  dbl(DOUBLE_PAIRS[11][0], DOUBLE_PAIRS[11][1], true),
  dbl(DOUBLE_PAIRS[12][0], DOUBLE_PAIRS[12][1], true),
  dbl(DOUBLE_PAIRS[13][0], DOUBLE_PAIRS[13][1], false),
  dbl(DOUBLE_PAIRS[14][0], DOUBLE_PAIRS[14][1], true),
  dbl(DOUBLE_PAIRS[15][0], DOUBLE_PAIRS[15][1], false),
  {
    id: "acc-papa-dad",
    answer: 1,
    options: [ACCENT_PAIRS[0][0], ACCENT_PAIRS[0][1]],
    tip: "Listen to where the stress falls: \"PA-pa\" (the pope) or \"pa-PÀ\" (dad). A stressed final vowel is always written with an accent.",
    group: "accent",
  },
  {
    id: "acc-papa-pope",
    answer: 0,
    options: [ACCENT_PAIRS[0][0], ACCENT_PAIRS[0][1]],
    tip: "Listen to where the stress falls: \"PA-pa\" (the pope) or \"pa-PÀ\" (dad).",
    group: "accent",
  },
  {
    id: "let-cina",
    answer: 0,
    options: [{ it: "Cina", en: "China" }, { it: "china", en: "slope" }],
    tip: "\"Ci\" sounds ch, as in cheese; \"chi\" sounds k: the h keeps the c hard.",
    group: "letters",
  },
  {
    id: "let-china",
    answer: 1,
    options: [{ it: "Cina", en: "China" }, { it: "china", en: "slope" }],
    tip: "\"Chi\" sounds k: the h keeps the c hard. \"Ci\" would sound ch.",
    group: "letters",
  },
  {
    id: "let-giro",
    answer: 0,
    options: [{ it: "giro", en: "tour, ride" }, { it: "ghiro", en: "dormouse" }],
    tip: "\"Gi\" sounds j, as in jeep; \"ghi\" sounds hard, as in gift.",
    group: "letters",
  },
  {
    id: "let-ghiro",
    answer: 1,
    options: [{ it: "giro", en: "tour, ride" }, { it: "ghiro", en: "dormouse" }],
    tip: "\"Ghi\" sounds hard, as in gift; \"gi\" would sound j.",
    group: "letters",
  },
  {
    id: "let-schiena",
    answer: 1,
    options: [{ it: "scena", en: "scene" }, { it: "schiena", en: "back" }],
    tip: "\"Sce\" sounds sh; \"schie\" sounds sk.",
    group: "letters",
  },
  {
    id: "let-scena",
    answer: 0,
    options: [{ it: "scena", en: "scene" }, { it: "schiena", en: "back" }],
    tip: "\"Sce\" sounds sh, as in shed; \"schie\" would sound sk.",
    group: "letters",
  },
  {
    id: "let-figli",
    answer: 0,
    options: [{ it: "figli", en: "children, sons" }, { it: "fili", en: "threads" }],
    tip: "\"Gli\" is one soft sound, the tongue flat against the palate; \"li\" is an ordinary l.",
    group: "letters",
  },
  {
    id: "let-campagna",
    answer: 0,
    options: [{ it: "campagna", en: "countryside" }, { it: "campana", en: "bell" }],
    tip: "\"Gn\" sounds like ny in canyon; a plain \"n\" doesn't have that y.",
    group: "letters",
  },
];

/** Lessons that teach these sounds: [level path, slug, title]. */
export const PRONUNCIATION_LESSONS: [string, string, string][] = [
  ["a1", "a1-how-italian-sounds", "How Italian Sounds"],
  ["a1", "a1-reading-italian-aloud", "Reading Italian Aloud"],
  ["a1", "a1-sound-double-consonants-1", "Sounds: Double Consonants, Part 1"],
  ["a1", "a1-sound-double-consonants-2", "Sounds: Double Consonants, Part 2"],
  ["a1", "a1-sound-gli", "Sounds: Gli"],
  ["a1", "a1-sound-sc", "Sounds: Sc"],
  ["a1", "a1-sound-z", "Sounds: Z"],
  ["a1", "a1-sound-stress-in-verbs", "Sounds: Stress in Verbs"],
  ["a1", "a1-contrast-cerco-cerchi", "Contrast Clinic: Spelling and Sound"],
];
