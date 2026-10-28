// Synced from cheneygross-afk/lengo:src/lib/it-tools/articles.ts by scripts/sync-content.mjs -- edit it there, not here.
// Italian Articles & Prepositions (/lessons/it/tools/articles-prepositions):
// the article and articulated-preposition tables, the partitive, and the
// bank for the quick drill (components/it-tools/ItArticlesDrill.tsx).
// Pure data, no lesson imports (the page is a server route).
// Checked by scripts/check-italian-extra-tools.ts: every drill answer
// must be one of its row's forms and must match the rule the table gives.

export const IT_ARTICLES_PATH = "/lessons/it/tools/articles-prepositions";

export type ArticleSlot = "il" | "lo" | "l'" | "la" | "i" | "gli" | "le";
export const ARTICLE_SLOTS: ArticleSlot[] = ["il", "lo", "l'", "la", "i", "gli", "le"];

export const INDEFINITE_FORMS = ["un", "uno", "una", "un'"] as const;

export type Preposition = "di" | "a" | "da" | "in" | "su";
export const PREPOSITIONS: Preposition[] = ["di", "a", "da", "in", "su"];

/** The articulated prepositions: preposition × article. */
export const ARTICULATED: Record<Preposition, Record<ArticleSlot, string>> = {
  di: { il: "del", lo: "dello", "l'": "dell'", la: "della", i: "dei", gli: "degli", le: "delle" },
  a: { il: "al", lo: "allo", "l'": "all'", la: "alla", i: "ai", gli: "agli", le: "alle" },
  da: { il: "dal", lo: "dallo", "l'": "dall'", la: "dalla", i: "dai", gli: "dagli", le: "dalle" },
  in: { il: "nel", lo: "nello", "l'": "nell'", la: "nella", i: "nei", gli: "negli", le: "nelle" },
  su: { il: "sul", lo: "sullo", "l'": "sull'", la: "sulla", i: "sui", gli: "sugli", le: "sulle" },
};

/** Join a form and the next word: "l'" + "amico" = "l'amico", "il" + "libro" = "il libro". */
export function joinForm(form: string, next: string): string {
  return form.endsWith("'") ? `${form}${next}` : `${form} ${next}`;
}

// ---- The tables --------------------------------------------------------

export type ArticleRow = {
  /** "Masculine singular" ... */
  label: string;
  form: string;
  /** When it is used, in English, with Italian in "double quotes". */
  when: string;
  examples: string[];
};

export const DEFINITE_ROWS: ArticleRow[] = [
  { label: "Masculine singular", form: "il", when: "before most consonants", examples: ["il libro", "il treno", "il caffè", "il weekend"] },
  {
    label: "Masculine singular",
    form: "lo",
    when: "before s + consonant, z, gn, ps, pn, x and y",
    examples: ["lo studente", "lo zaino", "lo gnocco", "lo psicologo", "lo pneumatico", "lo xilofono", "lo yogurt"],
  },
  { label: "Masculine singular", form: "l'", when: "before a vowel (and a silent h)", examples: ["l'amico", "l'albero", "l'ufficio", "l'hotel"] },
  { label: "Feminine singular", form: "la", when: "before any consonant", examples: ["la casa", "la scuola", "la zia", "la psicologa"] },
  { label: "Feminine singular", form: "l'", when: "before a vowel", examples: ["l'amica", "l'acqua", "l'isola", "l'ora"] },
  { label: "Masculine plural", form: "i", when: "the plural of \"il\"", examples: ["i libri", "i treni", "i caffè"] },
  {
    label: "Masculine plural",
    form: "gli",
    when: "the plural of \"lo\" and \"l'\"",
    examples: ["gli studenti", "gli zaini", "gli psicologi", "gli yogurt", "gli amici", "gli alberi"],
  },
  { label: "Feminine plural", form: "le", when: "every feminine plural, never shortened", examples: ["le case", "le scuole", "le amiche", "le isole"] },
];

export const INDEFINITE_ROWS: ArticleRow[] = [
  { label: "Masculine", form: "un", when: "before most consonants and every vowel (no apostrophe)", examples: ["un libro", "un treno", "un amico", "un albero"] },
  {
    label: "Masculine",
    form: "uno",
    when: "before s + consonant, z, gn, ps, pn, x and y",
    examples: ["uno studente", "uno zaino", "uno gnomo", "uno psicologo", "uno yogurt"],
  },
  { label: "Feminine", form: "una", when: "before any consonant", examples: ["una casa", "una scuola", "una zia", "una studentessa"] },
  { label: "Feminine", form: "un'", when: "before a vowel (with an apostrophe)", examples: ["un'amica", "un'isola", "un'idea", "un'ora"] },
];

/** Examples of the articulated prepositions in use: [Italian, English]. */
export const ARTICULATED_EXAMPLES: [string, string][] = [
  ["il libro dello studente", "the student's book"],
  ["Vado al mare.", "I'm going to the seaside."],
  ["Torno dalla stazione.", "I'm coming back from the station."],
  ["Le chiavi sono nella borsa.", "The keys are in the bag."],
  ["Il gatto dorme sul divano.", "The cat is sleeping on the sofa."],
  ["le foto degli amici", "the friends' photos"],
];

/** The partitive (some): di + article. [Italian, English]. */
export const PARTITIVE_EXAMPLES: [string, string][] = [
  ["Compro del pane.", "I'm buying some bread."],
  ["Metto dello zucchero nel caffè.", "I put some sugar in my coffee."],
  ["Vuoi dell'acqua?", "Would you like some water?"],
  ["Prendo della frutta.", "I'll have some fruit."],
  ["Ci sono dei biscotti in cucina.", "There are some biscuits in the kitchen."],
  ["Abbiamo invitato degli amici.", "We've invited some friends."],
  ["Ho comprato delle mele.", "I've bought some apples."],
];

/** Other ways to say some. [Italian, English]. */
export const PARTITIVE_ALTERNATIVES: [string, string][] = [
  ["un po' di pane", "a bit of bread (things you can't count)"],
  ["qualche biscotto", "some biscuits (always with a singular noun)"],
  ["alcuni amici, alcune mele", "some friends, some apples"],
  ["Non ho pane.", "I don't have any bread (no partitive in the negative)"],
];

// ---- The drill ---------------------------------------------------------

export type ArticleDrillKind = "definite" | "indefinite" | "preposition" | "partitive";

export const ARTICLE_DRILL_KINDS: { id: ArticleDrillKind; label: string }[] = [
  { id: "definite", label: "The (il, lo, la ...)" },
  { id: "indefinite", label: "A, an (un, uno ...)" },
  { id: "preposition", label: "Prepositions + the" },
  { id: "partitive", label: "Some (del, dello ...)" },
];

export type ArticleDrillItem = {
  id: string;
  kind: ArticleDrillKind;
  /** For preposition items: the preposition whose row the options come from. */
  prep?: Preposition;
  /** Italian before the gap ("Vado"), if any. */
  before?: string;
  /** Italian right after the gap: the word the form depends on, plus the rest. */
  after: string;
  answer: string;
  /** English meaning of the whole phrase. */
  en: string;
  /** Why, in English, with Italian in "double quotes". */
  why: string;
};

/** The forms the learner chooses from for an item. */
export function drillOptions(item: ArticleDrillItem): string[] {
  if (item.kind === "definite") return [...ARTICLE_SLOTS];
  if (item.kind === "indefinite") return [...INDEFINITE_FORMS];
  const prep = item.kind === "partitive" ? "di" : item.prep!;
  return ARTICLE_SLOTS.map((s) => ARTICULATED[prep][s]);
}

/** The whole Italian phrase with the answer filled in. */
export function drillPhrase(item: ArticleDrillItem, form = item.answer): string {
  const joined = joinForm(form, item.after);
  return item.before ? `${item.before} ${joined}` : joined;
}

/** Typed answers: case, curly apostrophes and spaces after an apostrophe don't count. */
export function normalizeForm(s: string): string {
  return s.trim().toLowerCase().replace(/[’‘`´]/g, "'").replace(/'\s+/g, "'").replace(/\s+/g, " ");
}

export function isDrillAnswerRight(item: ArticleDrillItem, given: string): boolean {
  let g = normalizeForm(given);
  // A learner may type the noun too ("l'amico"): accept it.
  const full = normalizeForm(joinForm(item.answer, item.after.split(" ")[0]));
  if (g === full) return true;
  if (item.answer.endsWith("'") && !g.endsWith("'") && `${g}'` === normalizeForm(item.answer)) g = `${g}'`;
  return g === normalizeForm(item.answer);
}

const def = (id: string, after: string, answer: ArticleSlot, en: string, why: string): ArticleDrillItem => ({ id, kind: "definite", after, answer, en, why });
const ind = (id: string, after: string, answer: string, en: string, why: string): ArticleDrillItem => ({ id, kind: "indefinite", after, answer, en, why });
const prep = (id: string, p: Preposition, before: string, after: string, answer: string, en: string, why: string): ArticleDrillItem => ({
  id,
  kind: "preposition",
  prep: p,
  before: before || undefined,
  after,
  answer,
  en,
  why,
});
const part = (id: string, before: string, after: string, answer: string, en: string, why: string): ArticleDrillItem => ({
  id,
  kind: "partitive",
  before: before || undefined,
  after,
  answer,
  en,
  why,
});

export const ARTICLE_DRILL: ArticleDrillItem[] = [
  // The
  def("d-libro", "libro", "il", "the book", "A masculine word starting with an ordinary consonant: \"il\"."),
  def("d-studente", "studente", "lo", "the student", "S + consonant takes \"lo\": \"lo studente\", \"lo sport\"."),
  def("d-zaino", "zaino", "lo", "the backpack", "Masculine words starting with \"z\" take \"lo\"."),
  def("d-amico", "amico", "l'", "the friend (a man)", "Before a vowel \"lo\" shortens to \"l'\"."),
  def("d-casa", "casa", "la", "the house", "Feminine singular before a consonant: \"la\"."),
  def("d-scuola", "scuola", "la", "the school", "Feminine words always take \"la\" before a consonant, even s + consonant."),
  def("d-amica", "amica", "l'", "the friend (a woman)", "Before a vowel \"la\" shortens to \"l'\"."),
  def("d-libri", "libri", "i", "the books", "\"Il libro\", \"i libri\"."),
  def("d-studenti", "studenti", "gli", "the students", "\"Lo studente\", \"gli studenti\"."),
  def("d-amici", "amici", "gli", "the friends (men, or a mixed group)", "The plural of \"l'\" for masculine words is \"gli\": \"gli amici\"."),
  def("d-case", "case", "le", "the houses", "Every feminine plural takes \"le\"."),
  def("d-amiche", "amiche", "le", "the friends (women)", "\"Le\" never shortens in modern Italian: \"le amiche\", \"le isole\"."),
  def("d-psicologo", "psicologo", "lo", "the psychologist (a man)", "\"Ps\" takes \"lo\": \"lo psicologo\", \"gli psicologi\"."),
  def("d-yogurt", "yogurt", "lo", "the yogurt", "Words starting with \"y\" take \"lo\": \"lo yogurt\"."),
  def("d-gnocco", "gnocco", "lo", "the gnocco (one dumpling)", "\"Gn\" takes \"lo\": \"lo gnocco\", \"gli gnocchi\"."),
  def("d-zii", "zii", "gli", "the uncles (or the aunt and uncle)", "\"Lo zio\", \"gli zii\"."),
  def("d-hotel", "hotel", "l'", "the hotel", "The \"h\" is silent, so \"hotel\" counts as starting with a vowel: \"l'hotel\"."),
  def("d-acqua", "acqua", "l'", "the water", "Feminine before a vowel: \"l'acqua\"."),
  def("d-papa", "papà", "il", "the dad", "\"Papà\" is masculine and starts with \"p\": \"il papà\"."),
  def("d-weekend", "weekend", "il", "the weekend", "Most English loanwords are masculine; \"w\" counts as an ordinary consonant: \"il weekend\"."),
  def("d-sport", "sport", "lo", "the sport", "S + consonant: \"lo sport\" (plural \"gli sport\")."),
  def("d-spaghetti", "spaghetti", "gli", "the spaghetti", "\"Spaghetti\" is masculine plural and starts with s + consonant: \"gli spaghetti\"."),
  def("d-arancia", "arancia", "l'", "the orange", "Feminine before a vowel: \"l'arancia\"."),
  def("d-specchi", "specchi", "gli", "the mirrors", "\"Lo specchio\", \"gli specchi\"."),
  def("d-professore", "professore", "il", "the teacher (a man)", "An ordinary consonant: \"il professore\"."),
  def("d-zucchero", "zucchero", "lo", "the sugar", "\"Z\" takes \"lo\": \"lo zucchero\"."),
  def("d-nuovo-studente", "nuovo studente", "il", "the new student", "The article goes with the word right after it: \"lo studente\", but \"il nuovo studente\"."),
  def("d-vecchi-amici", "vecchi amici", "i", "the old friends", "The article goes with the next word: \"gli amici\", but \"i vecchi amici\"."),
  def("d-isole", "isole", "le", "the islands", "Feminine plural: \"le isole\", never \"l'isole\"."),
  def("d-euro", "euro", "l'", "the euro", "Before a vowel: \"l'euro\" (plural \"gli euro\")."),

  // A, an
  ind("u-libro", "libro", "un", "a book", "Masculine before an ordinary consonant: \"un\"."),
  ind("u-studente", "studente", "uno", "a student (a man)", "S + consonant takes \"uno\", like \"lo\"."),
  ind("u-zaino", "zaino", "uno", "a backpack", "\"Z\" takes \"uno\"."),
  ind("u-amico", "amico", "un", "a friend (a man)", "Masculine before a vowel: \"un amico\", with no apostrophe."),
  ind("u-amica", "amica", "un'", "a friend (a woman)", "Feminine before a vowel: \"un'amica\", with an apostrophe."),
  ind("u-casa", "casa", "una", "a house", "Feminine before a consonant: \"una\"."),
  ind("u-penna", "penna", "una", "a pen", "Feminine before a consonant: \"una penna\"."),
  ind("u-isola", "isola", "un'", "an island", "Feminine before a vowel: \"un'isola\"."),
  ind("u-psicologo", "psicologo", "uno", "a psychologist (a man)", "\"Ps\" takes \"uno\"."),
  ind("u-yogurt", "yogurt", "uno", "a yogurt", "\"Y\" takes \"uno\"."),
  ind("u-albero", "albero", "un", "a tree", "Masculine before a vowel: \"un albero\", no apostrophe."),
  ind("u-idea", "idea", "un'", "an idea", "Feminine before a vowel: \"un'idea\"."),
  ind("u-caffe", "caffè", "un", "a coffee", "\"Caffè\" is masculine: \"un caffè\"."),
  ind("u-stazione", "stazione", "una", "a station", "\"Stazione\" is feminine (most nouns in \"-zione\" are): \"una stazione\"."),
  ind("u-errore", "errore", "un", "a mistake", "\"Errore\" is masculine and starts with a vowel: \"un errore\"."),
  ind("u-ora", "ora", "un'", "an hour", "Feminine before a vowel: \"un'ora\"."),
  ind("u-specchio", "specchio", "uno", "a mirror", "S + consonant: \"uno specchio\"."),
  ind("u-zio", "zio", "uno", "an uncle", "\"Z\" takes \"uno\": \"uno zio\"."),
  ind("u-hotel", "hotel", "un", "a hotel", "Silent \"h\", masculine: \"un hotel\"."),
  ind("u-studentessa", "studentessa", "una", "a student (a woman)", "Feminine takes \"una\" before any consonant, s + consonant too."),
  ind("u-bella-idea", "bella idea", "una", "a good idea", "The article goes with the next word: \"un'idea\", but \"una bella idea\"."),
  ind("u-altro", "altro caffè", "un", "another coffee", "\"Altro\" is masculine here: \"un altro caffè\", no apostrophe."),

  // Prepositions + the
  prep("p-dello", "di", "il libro", "studente", "dello", "the student's book", "\"Di\" + \"lo\" = \"dello\"."),
  prep("p-dei", "di", "la casa", "nonni", "dei", "the grandparents' house", "\"Di\" + \"i\" = \"dei\"."),
  prep("p-del", "di", "il colore", "mare", "del", "the colour of the sea", "\"Di\" + \"il\" = \"del\"."),
  prep("p-dell", "di", "la porta", "aula", "dell'", "the classroom door", "\"Di\" + \"l'\" = \"dell'\": \"dell'aula\"."),
  prep("p-delle", "di", "i nomi", "strade", "delle", "the names of the streets", "\"Di\" + \"le\" = \"delle\"."),
  prep("p-degli", "di", "le foto", "amici", "degli", "the friends' photos", "\"Di\" + \"gli\" = \"degli\"."),
  prep("p-della", "di", "la fine", "settimana", "della", "the end of the week", "\"Di\" + \"la\" = \"della\"."),
  prep("p-al", "a", "Vado", "mare.", "al", "I'm going to the seaside.", "\"A\" + \"il\" = \"al\": \"al mare\"."),
  prep("p-agli", "a", "Scrivo", "amici.", "agli", "I'm writing to my friends.", "\"A\" + \"gli\" = \"agli\"."),
  prep("p-alla", "a", "Siamo", "stazione.", "alla", "We're at the station.", "\"A\" + \"la\" = \"alla\"."),
  prep("p-allo", "a", "Ho dato il libro", "studente.", "allo", "I gave the book to the student.", "\"A\" + \"lo\" = \"allo\"."),
  prep("p-alle", "a", "Ci vediamo", "otto.", "alle", "See you at eight.", "Times take \"alle\" (\"a\" + \"le ore\"): \"alle otto\", but \"all'una\"."),
  prep("p-all", "a", "Penso", "esame.", "all'", "I'm thinking about the exam.", "\"Pensare a\": \"a\" + \"l'\" = \"all'\"."),
  prep("p-ai", "a", "Do da mangiare", "gatti.", "ai", "I'm feeding the cats.", "\"A\" + \"i\" = \"ai\"."),
  prep("p-dall", "da", "Esco", "ufficio alle sei.", "dall'", "I leave the office at six.", "\"Da\" + \"l'\" = \"dall'\"."),
  prep("p-dalla", "da", "Torno", "stazione.", "dalla", "I'm coming back from the station.", "\"Da\" + \"la\" = \"dalla\"."),
  prep("p-dal", "da", "Vado", "dentista.", "dal", "I'm going to the dentist's.", "\"Da\" + a person means at or to their place: \"dal dentista\"."),
  prep("p-dallo", "da", "Vado", "zio Paolo.", "dallo", "I'm going to Uncle Paolo's.", "\"Da\" + \"lo\" = \"dallo\": \"dallo zio\"."),
  prep("p-dagli", "da", "un regalo", "zii", "dagli", "a present from my aunt and uncle", "\"Da\" + \"gli\" = \"dagli\"."),
  prep("p-dai", "da", "Ceniamo", "nonni.", "dai", "We're having dinner at the grandparents'.", "\"Da\" + \"i\" = \"dai\"."),
  prep("p-nella", "in", "Le chiavi sono", "borsa.", "nella", "The keys are in the bag.", "\"In\" + \"la\" = \"nella\"."),
  prep("p-nel", "in", "Il latte è", "frigo.", "nel", "The milk is in the fridge.", "\"In\" + \"il\" = \"nel\"."),
  prep("p-nello", "in", "Metti i libri", "zaino.", "nello", "Put the books in the backpack.", "\"In\" + \"lo\" = \"nello\"."),
  prep("p-nell", "in", "C'è un errore", "esercizio.", "nell'", "There's a mistake in the exercise.", "\"In\" + \"l'\" = \"nell'\"."),
  prep("p-negli", "in", "Mia sorella vive", "Stati Uniti.", "negli", "My sister lives in the United States.", "\"Gli Stati Uniti\" is plural, so \"negli Stati Uniti\"."),
  prep("p-nei", "in", "Ci sono molti turisti", "musei.", "nei", "There are a lot of tourists in the museums.", "\"In\" + \"i\" = \"nei\"."),
  prep("p-nelle", "in", "Ho messo le foto", "cartelle giuste.", "nelle", "I've put the photos in the right folders.", "\"In\" + \"le\" = \"nelle\"."),
  prep("p-sul", "su", "Il gatto dorme", "divano.", "sul", "The cat is sleeping on the sofa.", "\"Su\" + \"il\" = \"sul\"."),
  prep("p-sullo", "su", "Ho letto un articolo", "sciopero.", "sullo", "I read an article about the strike.", "\"Su\" also means about: \"su\" + \"lo\" = \"sullo\"."),
  prep("p-sull", "su", "Il vaso è", "armadio.", "sull'", "The vase is on the wardrobe.", "\"Su\" + \"l'\" = \"sull'\"."),
  prep("p-sulle", "su", "I quadri sono", "pareti.", "sulle", "The paintings are on the walls.", "\"Su\" + \"le\" = \"sulle\"."),
  prep("p-sulla", "su", "Scrivi il nome", "lavagna.", "sulla", "Write the name on the board.", "\"Su\" + \"la\" = \"sulla\"."),
  prep("p-sugli", "su", "un documentario", "animali", "sugli", "a documentary about animals", "\"Su\" + \"gli\" = \"sugli\"."),
  prep("p-sui", "su", "Ci sono scritte", "muri.", "sui", "There's writing on the walls.", "\"Su\" + \"i\" = \"sui\"."),

  // Some
  part("s-pane", "Compro", "pane.", "del", "I'm buying some bread.", "\"Di\" + \"il\" = \"del\": \"del pane\"."),
  part("s-acqua", "Vuoi", "acqua?", "dell'", "Would you like some water?", "\"Di\" + \"l'\" = \"dell'\"."),
  part("s-zucchero", "Metto", "zucchero nel caffè.", "dello", "I put some sugar in my coffee.", "\"Zucchero\" takes \"lo\", so \"dello zucchero\"."),
  part("s-mele", "Ho comprato", "mele.", "delle", "I've bought some apples.", "\"Di\" + \"le\" = \"delle\"."),
  part("s-biscotti", "Ci sono", "biscotti in cucina.", "dei", "There are some biscuits in the kitchen.", "\"Di\" + \"i\" = \"dei\"."),
  part("s-amici", "Abbiamo invitato", "amici.", "degli", "We've invited some friends.", "\"Di\" + \"gli\" = \"degli\"."),
  part("s-frutta", "Prendo", "frutta.", "della", "I'll have some fruit.", "\"Di\" + \"la\" = \"della\"."),
  part("s-spinaci", "Ho cucinato", "spinaci.", "degli", "I've cooked some spinach.", "\"Spinaci\" is masculine plural with s + consonant: \"degli spinaci\"."),
  part("s-vino", "Hai", "vino rosso?", "del", "Do you have any red wine?", "\"Di\" + \"il\" = \"del\"."),
  part("s-studenti", "Ho conosciuto", "studenti di Bari.", "degli", "I met some students from Bari.", "\"Gli studenti\", so \"degli studenti\"."),
];

/** Lessons that teach these points: [level path, slug, title]. */
export const ARTICLES_LESSONS: [string, string, string][] = [
  ["a1", "a1-indefinite-article", "A, An: Un, Uno, Una, Un'"],
  ["a1", "a1-definite-article-1", "The Definite Article, Part 1 of 2: Singular"],
  ["a1", "a1-definite-article-2", "The Definite Article, Part 2 of 2: Plural"],
  ["a1", "a1-contrast-il-lo-la", "Contrast Clinic: Il or Lo? Gli or I?"],
  ["a1", "a1-prepositions-a-in", "A or In? Cities, Countries and Places"],
  ["a1", "a1-prepositions-di-da-con-per", "Di, Da, Con, Per, Tra"],
  ["a1", "a1-first-articulated-prepositions", "Al Bar, Nella Piazza: First Contractions"],
];
