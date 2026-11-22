// Synced from cheneygross-afk/lengo:src/lib/lessons/es-concepts.ts by scripts/sync-content.mjs -- edit it there, not here.
// The 120 grammar concepts of the redesigned Spanish course (plan:
// "Spanish curriculum redesign", 2026-11-22), in teaching order: 20 per
// level, 3 per unit (the last unit of a level has 2). Each level is tagged
// by difficulty for English speakers. `name` is the plain name learners
// see; `term` is the grammar word, shown only in small print.
//
// This file is the backbone of the reorganisation: every existing lesson
// and question is tagged to one of these ids (es-concept-map.ts), and the
// new units are built from them.

import type { SpanishLevelPath } from "./levels";

export type Difficulty = "easy" | "medium" | "medium-hard" | "hard";

export type EsConcept = {
  id: string;
  /** 1-120: the teaching order. */
  n: number;
  level: SpanishLevelPath;
  /** 1-7 within the level. */
  unit: number;
  name: string;
  term: string;
  example: string;
};

export const LEVEL_DIFFICULTY: Record<SpanishLevelPath, Difficulty> = { a1: "easy", a2: "medium", b1: "medium", b2: "medium-hard", c1: "medium-hard", c2: "hard" };

export const ES_CONCEPTS: EsConcept[] = [
  { id: "subject-pronouns", n: 1, level: "a1", unit: 1, name: "I, you, he, she, we, they", term: "subject pronouns", example: "yo, tú, usted, ellos" },
  { id: "gender", n: 2, level: "a1", unit: 1, name: "Masculine and feminine words", term: "gender", example: "el libro, la mesa" },
  { id: "plurals", n: 3, level: "a1", unit: 1, name: "More than one", term: "plurals", example: "los libros, las ciudades" },
  { id: "articles", n: 4, level: "a1", unit: 2, name: "The, a, some", term: "articles", example: "el, la, un, una, unos" },
  { id: "adjective-agreement", n: 5, level: "a1", unit: 2, name: "Describing words that match", term: "adjective agreement", example: "casas blancas" },
  { id: "adjective-position", n: 6, level: "a1", unit: 2, name: "Where describing words go", term: "adjective position", example: "un coche rojo, un buen día" },
  { id: "ser", n: 7, level: "a1", unit: 3, name: "Ser: who and what someone is", term: "ser", example: "Soy Ana. Es de México" },
  { id: "estar", n: 8, level: "a1", unit: 3, name: "Estar: where and how someone is", term: "estar", example: "Estoy en casa. Está cansada" },
  { id: "ser-vs-estar", n: 9, level: "a1", unit: 3, name: "Ser or estar: the first choices", term: "ser vs. estar", example: "es aburrido / está aburrido" },
  { id: "hay", n: 10, level: "a1", unit: 4, name: "There is, there are", term: "hay", example: "Hay dos bancos" },
  { id: "numbers-time", n: 11, level: "a1", unit: 4, name: "Numbers, prices, time and dates", term: "numbers and time", example: "Son las tres. Cuesta veinte pesos" },
  { id: "present-ar", n: 12, level: "a1", unit: 4, name: "Regular -ar verbs now", term: "present tense -ar", example: "hablo, hablas, habla" },
  { id: "present-er-ir", n: 13, level: "a1", unit: 5, name: "Regular -er and -ir verbs now", term: "present tense -er/-ir", example: "como, vivimos" },
  { id: "negation", n: 14, level: "a1", unit: 5, name: "Saying no", term: "negation", example: "No trabajo hoy" },
  { id: "questions", n: 15, level: "a1", unit: 5, name: "Asking questions", term: "question words", example: "¿Dónde? ¿Cuándo? ¿Por qué?" },
  { id: "possessive-adjectives", n: 16, level: "a1", unit: 6, name: "My, your, our", term: "possessive adjectives", example: "mi casa, nuestros amigos" },
  { id: "demonstratives", n: 17, level: "a1", unit: 6, name: "This, that, that over there", term: "demonstratives", example: "este, ese, aquel" },
  { id: "tener", n: 18, level: "a1", unit: 6, name: "Tener and its phrases", term: "tener", example: "tengo hambre, tengo que ir" },
  { id: "ir-a", n: 19, level: "a1", unit: 7, name: "Ir and going to", term: "ir a + infinitive", example: "Voy a estudiar" },
  { id: "stem-e-ie", n: 20, level: "a1", unit: 7, name: "Verbs that change inside: e to ie", term: "stem change e→ie", example: "quiero, empiezas" },
  { id: "stem-o-ue", n: 21, level: "a2", unit: 1, name: "Verbs that change inside: o to ue", term: "stem change o→ue", example: "puedo, duermes" },
  { id: "stem-e-i", n: 22, level: "a2", unit: 1, name: "Verbs that change inside: e to i", term: "stem change e→i", example: "pido, repites" },
  { id: "yo-irregulars", n: 23, level: "a2", unit: 1, name: "Odd \"I\" forms", term: "irregular yo forms", example: "hago, pongo, salgo, conozco" },
  { id: "saber-conocer", n: 24, level: "a2", unit: 2, name: "Two ways to know: saber and conocer", term: "saber vs. conocer", example: "Sé nadar. Conozco a Luis" },
  { id: "modals", n: 25, level: "a2", unit: 2, name: "Can, want, need, should + verb", term: "modal verbs + infinitive", example: "Puedo ir. Debes comer" },
  { id: "gustar", n: 26, level: "a2", unit: 2, name: "Likes: gustar, encantar, doler", term: "gustar-type verbs", example: "Me gusta el café. Me duele la cabeza" },
  { id: "prepositions", n: 27, level: "a2", unit: 3, name: "Small linking words", term: "prepositions", example: "a, de, en, con, al, del" },
  { id: "personal-a", n: 28, level: "a2", unit: 3, name: "A before people", term: "personal a", example: "Veo a mi madre" },
  { id: "muy-mucho", n: 29, level: "a2", unit: 3, name: "Very, much, a little", term: "muy, mucho, poco", example: "muy, mucho, poco, bien, bueno" },
  { id: "present-progressive", n: 30, level: "a2", unit: 4, name: "Right now: estar + -ing", term: "present progressive", example: "Estoy comiendo" },
  { id: "preterite-regular", n: 31, level: "a2", unit: 4, name: "The finished past, regular verbs", term: "preterite", example: "hablé, comió" },
  { id: "preterite-spelling", n: 32, level: "a2", unit: 4, name: "Spelling changes in the finished past", term: "preterite spelling changes", example: "busqué, leyó" },
  { id: "preterite-irregular", n: 33, level: "a2", unit: 5, name: "The finished past, irregular verbs", term: "irregular preterite", example: "fui, tuve, hice, dije" },
  { id: "preterite-stem", n: 34, level: "a2", unit: 5, name: "Inside changes in the finished past", term: "preterite stem changes", example: "pidió, durmieron" },
  { id: "imperfect", n: 35, level: "a2", unit: 5, name: "The background past", term: "imperfect", example: "comía, éramos" },
  { id: "preterite-vs-imperfect", n: 36, level: "a2", unit: 6, name: "Choosing between the two past tenses", term: "preterite vs. imperfect", example: "Llovía cuando salí" },
  { id: "past-meaning-change", n: 37, level: "a2", unit: 6, name: "Verbs that mean something else in the past", term: "meaning-change verbs", example: "supe, conocí, no quise" },
  { id: "past-progressive", n: 38, level: "a2", unit: 6, name: "Was doing", term: "past progressive", example: "Estaba leyendo" },
  { id: "present-perfect", n: 39, level: "a2", unit: 7, name: "Have done", term: "present perfect", example: "He comido. ¿Has visto?" },
  { id: "irregular-participles", n: 40, level: "a2", unit: 7, name: "Odd \"done\" forms", term: "irregular past participles", example: "hecho, dicho, visto, puesto" },
  { id: "direct-object-pronouns", n: 41, level: "b1", unit: 1, name: "It, them words", term: "direct object pronouns", example: "Lo veo. Las compré" },
  { id: "indirect-object-pronouns", n: 42, level: "b1", unit: 1, name: "To or for whom words", term: "indirect object pronouns", example: "Le doy el libro" },
  { id: "double-object-pronouns", n: 43, level: "b1", unit: 1, name: "Two pronouns together", term: "double object pronouns", example: "Se lo di" },
  { id: "pronoun-placement", n: 44, level: "b1", unit: 2, name: "Where pronouns go", term: "pronoun placement", example: "Lo quiero ver / Quiero verlo" },
  { id: "reflexive", n: 45, level: "b1", unit: 2, name: "Self verbs and routines", term: "reflexive verbs", example: "Me levanto. Te duchas" },
  { id: "se-meaning-change", n: 46, level: "b1", unit: 2, name: "Verbs that change meaning with se", term: "pronominal verbs", example: "ir / irse, dormir / dormirse" },
  { id: "comparisons", n: 47, level: "b1", unit: 3, name: "Comparing: more, less, as much", term: "comparisons", example: "más alto que, tan alto como" },
  { id: "superlatives", n: 48, level: "b1", unit: 3, name: "The most, and -ísimo", term: "superlatives", example: "el más rápido, buenísimo" },
  { id: "irregular-comparatives", n: 49, level: "b1", unit: 3, name: "Better, worse, older, younger", term: "irregular comparatives", example: "mejor, peor, mayor, menor" },
  { id: "future", n: 50, level: "b1", unit: 4, name: "The future", term: "simple future", example: "hablaré, tendrás" },
  { id: "por-para", n: 51, level: "b1", unit: 4, name: "Por and para", term: "por vs. para", example: "por la mañana, para ti" },
  { id: "indefinites-negatives", n: 52, level: "b1", unit: 4, name: "Something, nothing, someone, no one", term: "indefinite and negative words", example: "algo, nada, nadie, nunca" },
  { id: "mente-adverbs", n: 53, level: "b1", unit: 5, name: "-ly words", term: "-mente adverbs", example: "rápidamente" },
  { id: "tu-commands", n: 54, level: "b1", unit: 5, name: "Telling a friend what to do", term: "affirmative tú commands", example: "¡Ven! ¡Hazlo!" },
  { id: "hace-time", n: 55, level: "b1", unit: 5, name: "Ago, and for how long", term: "hace + time", example: "hace dos años, hace un mes que vivo aquí" },
  { id: "acabar-volver-soler", n: 56, level: "b1", unit: 6, name: "Just did, again, usually", term: "acabar de, volver a, soler", example: "acabo de, vuelvo a, suelo" },
  { id: "possessive-pronouns", n: 57, level: "b1", unit: 6, name: "Mine, yours", term: "possessive pronouns", example: "el mío, la tuya" },
  { id: "diminutives", n: 58, level: "b1", unit: 6, name: "Little words: -ito, -ita", term: "diminutives", example: "un cafecito" },
  { id: "relatives-basic", n: 59, level: "b1", unit: 7, name: "Who, which, what (basic)", term: "relative pronouns que, quien, lo que", example: "el chico que, lo que quiero" },
  { id: "diacritic-accents", n: 60, level: "b1", unit: 7, name: "Written accents that change meaning", term: "diacritical accents", example: "tú / tu, sé / se, qué / que" },
  { id: "subjunctive-regular", n: 61, level: "b2", unit: 1, name: "The wish and doubt form: regular", term: "present subjunctive", example: "hable, coma" },
  { id: "subjunctive-irregular", n: 62, level: "b2", unit: 1, name: "The wish and doubt form: irregular", term: "irregular present subjunctive", example: "sea, vaya, haya, sepa" },
  { id: "subjunctive-wishes", n: 63, level: "b2", unit: 1, name: "After wanting and asking", term: "subjunctive after wishes", example: "Quiero que vengas" },
  { id: "subjunctive-emotion", n: 64, level: "b2", unit: 2, name: "After feelings", term: "subjunctive after emotion", example: "Me alegra que estés aquí" },
  { id: "subjunctive-doubt", n: 65, level: "b2", unit: 2, name: "After doubt, and when belief takes the normal form", term: "subjunctive after doubt", example: "No creo que sea / Creo que es" },
  { id: "subjunctive-impersonal", n: 66, level: "b2", unit: 2, name: "After \"it's important that\", and ojalá", term: "impersonal expressions, ojalá", example: "Es importante que llegues. Ojalá llueva" },
  { id: "infinitive-vs-que", n: 67, level: "b2", unit: 3, name: "One verb or que + wish form", term: "infinitive vs. que + subjunctive", example: "Quiero ir / Quiero que vayas" },
  { id: "usted-commands", n: 68, level: "b2", unit: 3, name: "Polite commands", term: "usted/ustedes commands", example: "Pase. Sigan derecho" },
  { id: "negative-commands", n: 69, level: "b2", unit: 3, name: "Don't do it", term: "negative commands", example: "No comas. No lo digas" },
  { id: "nosotros-commands", n: 70, level: "b2", unit: 4, name: "Let's", term: "nosotros commands", example: "Vamos. Comamos" },
  { id: "commands-pronouns", n: 71, level: "b2", unit: 4, name: "Commands with pronouns", term: "commands with pronouns", example: "Dímelo. No me lo digas" },
  { id: "conditional", n: 72, level: "b2", unit: 4, name: "Would", term: "conditional", example: "Me gustaría. ¿Podrías?" },
  { id: "si-real", n: 73, level: "b2", unit: 5, name: "Real \"if\" sentences", term: "real conditionals", example: "Si llueve, me quedo" },
  { id: "pluperfect", n: 74, level: "b2", unit: 5, name: "Had done", term: "past perfect", example: "Ya había salido" },
  { id: "future-conditional-perfect", n: 75, level: "b2", unit: 5, name: "Will have done, would have done", term: "future perfect, conditional perfect", example: "habré terminado, habría ido" },
  { id: "probability", n: 76, level: "b2", unit: 6, name: "Guessing with the future", term: "future of probability", example: "¿Dónde estará? Serán las tres" },
  { id: "se-passive-impersonal", n: 77, level: "b2", unit: 6, name: "Se for \"is sold\" and \"people say\"", term: "passive and impersonal se", example: "Se vende casa. Se dice que" },
  { id: "se-accidental", n: 78, level: "b2", unit: 6, name: "Se for accidents", term: "accidental se", example: "Se me olvidó. Se le cayó" },
  { id: "subjunctive-adjective", n: 79, level: "b2", unit: 7, name: "Looking for someone who...", term: "subjunctive in adjective clauses", example: "Busco a alguien que sepa" },
  { id: "subjunctive-purpose", n: 80, level: "b2", unit: 7, name: "So that, unless, provided that", term: "subjunctive after conjunctions", example: "para que, a menos que, con tal de que" },
  { id: "subjunctive-time", n: 81, level: "c1", unit: 1, name: "When, before, until + wish form", term: "subjunctive in time clauses", example: "Cuando llegues, antes de que salga" },
  { id: "relatives-prepositions", n: 82, level: "c1", unit: 1, name: "Who and which after a, con, en", term: "relatives with prepositions", example: "la persona con quien hablo, el lugar en el que" },
  { id: "present-perfect-subjunctive", n: 83, level: "c1", unit: 1, name: "Have done, wish form", term: "present perfect subjunctive", example: "Espero que hayas comido" },
  { id: "imperfect-subjunctive", n: 84, level: "c1", unit: 2, name: "The past wish form", term: "imperfect subjunctive", example: "hablara, tuviera, fuera" },
  { id: "sequence-of-tenses", n: 85, level: "c1", unit: 2, name: "Matching tenses", term: "sequence of tenses", example: "Quería que vinieras" },
  { id: "si-unreal", n: 86, level: "c1", unit: 2, name: "Unreal \"if\" sentences", term: "hypothetical si-clauses", example: "Si tuviera tiempo, viajaría" },
  { id: "como-si", n: 87, level: "c1", unit: 3, name: "As if", term: "como si", example: "como si fuera rico" },
  { id: "reported-speech", n: 88, level: "c1", unit: 3, name: "Passing on what someone said", term: "reported speech", example: "Dijo que estaba cansado" },
  { id: "verbs-of-change", n: 89, level: "c1", unit: 3, name: "Becoming: ponerse, volverse, hacerse", term: "verbs of change", example: "Se puso rojo. Se hizo médico" },
  { id: "connectors", n: 90, level: "c1", unit: 4, name: "Linking ideas: but, because, so", term: "connectors", example: "sin embargo, ya que, por lo tanto" },
  { id: "si-past-unreal", n: 91, level: "c1", unit: 4, name: "Would have, if I had", term: "pluperfect subjunctive, past conditionals", example: "Si hubiera sabido, habría ido" },
  { id: "si-mixed", n: 92, level: "c1", unit: 4, name: "Mixed \"if\" sentences", term: "mixed conditionals", example: "Si hubiera estudiado, ahora sabría" },
  { id: "aunque", n: 93, level: "c1", unit: 5, name: "Aunque with each form", term: "aunque + indicative/subjunctive", example: "aunque llueve / aunque llueva" },
  { id: "por-mucho-que", n: 94, level: "c1", unit: 5, name: "No matter how much", term: "concessive por mucho que", example: "por mucho que, por más que" },
  { id: "universal-concessives", n: 95, level: "c1", unit: 5, name: "Whatever, however, whoever", term: "reduplicated subjunctive", example: "digas lo que digas, sea como sea" },
  { id: "reported-questions-orders", n: 96, level: "c1", unit: 6, name: "Reported questions, orders and time words", term: "reported questions and commands", example: "Me pidió que fuera. Al día siguiente" },
  { id: "passive-ser", n: 97, level: "c1", unit: 6, name: "Was built", term: "passive with ser", example: "Fue construido en 1900" },
  { id: "estar-ser-participle", n: 98, level: "c1", unit: 6, name: "Is closed vs. was closed", term: "estar + participle vs. ser + participle", example: "Está cerrada / Fue cerrada" },
  { id: "ser-estar-meaning", n: 99, level: "c1", unit: 7, name: "Ser or estar that change the meaning", term: "ser/estar meaning change", example: "es listo / está listo" },
  { id: "haber-estar", n: 100, level: "c1", unit: 7, name: "Haber or estar", term: "haber vs. estar", example: "Hay un banco / El banco está ahí" },
  { id: "cuyo-el-cual", n: 101, level: "c2", unit: 1, name: "Whose, which", term: "cuyo, el cual, lo cual", example: "el autor cuyo libro" },
  { id: "cleft-emphasis", n: 102, level: "c2", unit: 1, name: "Putting the stress on one part", term: "cleft sentences", example: "Fue Ana quien lo dijo" },
  { id: "lo-que-adjective", n: 103, level: "c2", unit: 1, name: "How hard it is", term: "lo + adjective + que", example: "lo difícil que es" },
  { id: "lo-neuter", n: 104, level: "c2", unit: 2, name: "Lo + describing word", term: "neuter lo", example: "lo bueno, lo mejor de todo" },
  { id: "nominalization", n: 105, level: "c2", unit: 2, name: "Formal nouns from verbs", term: "nominalization", example: "la llegada, el aumento" },
  { id: "gerund-infinitive", n: 106, level: "c2", unit: 2, name: "-ing form or base verb", term: "gerund vs. infinitive", example: "Al llegar / Llegando tarde" },
  { id: "periphrases", n: 107, level: "c2", unit: 3, name: "Verb pairs that carry a meaning", term: "verbal periphrases", example: "llevar + -ing, dejar de, ponerse a" },
  { id: "prepositional-verbs", n: 108, level: "c2", unit: 3, name: "Verbs that need a, de, en or con", term: "prepositional verbs", example: "soñar con, depender de" },
  { id: "redundant-pronouns", n: 109, level: "c2", unit: 3, name: "Extra pronouns for emphasis", term: "redundant pronouns", example: "A mí me gusta. Se lo dije a Juan" },
  { id: "softening-subjunctive", n: 110, level: "c2", unit: 4, name: "Softer requests with the wish form", term: "softening subjunctive", example: "Quisiera, Deberías" },
  { id: "el-hecho-de-que", n: 111, level: "c2", unit: 4, name: "The fact that, and que at the start", term: "el hecho de que", example: "El hecho de que vengas" },
  { id: "discourse-markers", n: 112, level: "c2", unit: 4, name: "Joining words for essays", term: "discourse markers", example: "ahora bien, en definitiva" },
  { id: "word-order-focus", n: 113, level: "c2", unit: 5, name: "Word order for focus", term: "topicalization", example: "El libro lo compré yo" },
  { id: "impersonal", n: 114, level: "c2", unit: 5, name: "Saying it without a person", term: "impersonal constructions", example: "Uno nunca sabe. Hay que" },
  { id: "tricky-verb-pairs", n: 115, level: "c2", unit: 5, name: "Tricky verb pairs", term: "verb pairs", example: "pedir / preguntar, llevar / traer" },
  { id: "augmentatives", n: 116, level: "c2", unit: 6, name: "Big and rough endings: -ón, -azo, -ucho", term: "augmentatives and pejoratives", example: "un golpazo, una casucha" },
  { id: "narrative-tenses", n: 117, level: "c2", unit: 6, name: "Tenses in storytelling", term: "historical present", example: "En 1492 llega Colón" },
  { id: "tu-usted-vos", n: 118, level: "c2", unit: 6, name: "Tú, usted and vos", term: "forms of address, voseo", example: "vos tenés, vos sabés" },
  { id: "vosotros", n: 119, level: "c2", unit: 7, name: "Spain's vosotros (to recognise)", term: "vosotros", example: "vosotros tenéis, hablad" },
  { id: "literary-forms", n: 120, level: "c2", unit: 7, name: "Old and legal forms (to recognise)", term: "future subjunctive, pretérito anterior", example: "sea quien fuere, hubo llegado" },
];

const BY_ID = new Map(ES_CONCEPTS.map((c) => [c.id, c] as const));
export const esConcept = (id: string): EsConcept | undefined => BY_ID.get(id);
export const esConceptsFor = (level: SpanishLevelPath): EsConcept[] => ES_CONCEPTS.filter((c) => c.level === level);
