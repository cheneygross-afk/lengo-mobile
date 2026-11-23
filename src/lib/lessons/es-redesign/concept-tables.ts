// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/concept-tables.ts by scripts/sync-content.mjs -- edit it there, not here.
// The reference tables of the redesigned Spanish course, one or two per
// concept (es-concepts.ts). Every lesson on a concept shows the same table
// (on its teaching card, and in the drawer beside its questions), so a
// pattern always looks the same wherever a learner meets it. Tables stay
// small: a phone screen, about 4 columns and 8 rows at most. A cell
// starting with "*" is highlighted.
import type { LessonTable } from "../types";

export const SER: LessonTable = {
  caption: "Ser (to be)",
  head: ["Who", "Ser", "Example"],
  rows: [
    ["yo (I)", "soy", "Soy de Chile."],
    ["tú (you, friend)", "eres", "Eres estudiante."],
    ["usted (you, polite)", "es", "Usted es profesor."],
    ["él / ella (he / she)", "es", "Ella es de Perú."],
    ["nosotros / nosotras (we)", "somos", "Somos amigos."],
    ["ustedes (you all)", "son", "Ustedes son de aquí."],
    ["ellos / ellas (they)", "son", "Ellos son médicos."],
  ],
  note: "Spain also uses vosotros sois for \"you all\" among friends. You only need to recognize it.",
};

export const TU_USTED: LessonTable = {
  caption: "Tú or usted?",
  head: ["", "Tú", "Usted"],
  rows: [
    ["Who", "friends, family, children", "strangers, older people, at work"],
    ["Ser", "eres", "es (like él and ella)"],
    ["Ask a name", "¿Cómo te llamas?", "¿Cómo se llama?"],
    ["Ask where from", "¿De dónde eres?", "¿De dónde es?"],
  ],
  note: "Not sure? Start with usted. People will tell you if tú is fine.",
};

export const GREETINGS: LessonTable = {
  caption: "Greetings by time of day",
  head: ["When", "Say", "Works as"],
  rows: [
    ["morning, until lunch", "Buenos días", "hello and goodbye"],
    ["afternoon, until dark", "Buenas tardes", "hello and goodbye"],
    ["after dark", "Buenas noches", "hello and goodbye"],
    ["any time", "Hola / Adiós", "hello / goodbye"],
  ],
};

export const ARTICLES: LessonTable = {
  caption: "The and a",
  head: ["", "Masculine", "Feminine"],
  rows: [
    ["the (one)", "el libro", "la mesa"],
    ["the (more)", "los libros", "las mesas"],
    ["a / an", "un libro", "una mesa"],
    ["some", "unos libros", "unas mesas"],
  ],
};

export const GENDER_ENDINGS: LessonTable = {
  caption: "Endings that tell you the gender",
  head: ["Ending", "Usually", "Example"],
  rows: [
    ["-o", "masculine", "el libro"],
    ["-a", "feminine", "la mesa"],
    ["-dad, -ción, -sión", "always feminine", "la ciudad, la canción"],
    ["-e or a consonant", "learn it with el/la", "el café, la pared"],
  ],
  note: "Common exceptions: el día, el mapa, el problema, la mano, la foto.",
};

export const PLURALS: LessonTable = {
  caption: "Making nouns plural",
  head: ["Noun ends in", "Add", "Example"],
  rows: [
    ["a vowel", "-s", "la casa → las casas"],
    ["a consonant", "-es", "la ciudad → las ciudades"],
    ["-z", "z → c + -es", "el lápiz → los lápices"],
    ["unstressed -s", "nothing", "el lunes → los lunes"],
  ],
};

export const PEOPLE: LessonTable = {
  caption: "Words for people: man → woman",
  head: ["Ending", "Change", "Example"],
  rows: [
    ["-o", "-o → -a", "abogado → abogada"],
    ["consonant", "add -a", "profesor → profesora"],
    ["-e or -ista", "no change", "estudiante, dentista"],
  ],
};

export const ESTAR: LessonTable = {
  caption: "Estar (to be: how and where)",
  head: ["Who", "Estar", "Example"],
  rows: [
    ["yo", "estoy", "Estoy cansado."],
    ["tú", "estás", "¿Estás bien?"],
    ["usted / él / ella", "está", "Ella está en casa."],
    ["nosotros / nosotras", "estamos", "Estamos contentos."],
    ["ustedes / ellos / ellas", "están", "Están en Lima."],
  ],
};

export const SER_OR_ESTAR: LessonTable = {
  caption: "Ser or estar?",
  head: ["Ser: what it is", "Estar: how or where it is now"],
  rows: [
    ["who and what: Es mi hermano.", "feelings: Estoy contenta."],
    ["job: Soy profesora.", "conditions: El café está frío."],
    ["origin: Somos de Perú.", "where things are: Lima está en Perú."],
    ["what someone is like: Es alto.", "how someone looks today: Está cansado."],
    ["time: Son las dos.", ""],
  ],
  note: "Where an event takes place uses ser: La fiesta es en mi casa.",
};

export const SER_ESTAR_MEANING: LessonTable = {
  caption: "Same word, two meanings",
  head: ["Word", "With ser", "With estar"],
  rows: [
    ["aburrido", "boring", "bored"],
    ["listo", "clever", "ready"],
    ["malo", "bad", "sick, or gone off"],
    ["rico", "rich", "tasty"],
  ],
};

export const AR_ENDINGS: LessonTable = {
  caption: "Regular -ar verbs: hablar (to speak)",
  head: ["Who", "Ending", "Hablar"],
  rows: [
    ["yo", "-o", "hablo"],
    ["tú", "-as", "hablas"],
    ["usted / él / ella", "-a", "habla"],
    ["nosotros / nosotras", "-amos", "hablamos"],
    ["ustedes / ellos / ellas", "-an", "hablan"],
  ],
  note: "Every regular -ar verb works the same way: trabajar → trabajo, estudiar → estudias.",
};

export const NUMBERS_BUILD: LessonTable = {
  caption: "How numbers are built",
  head: ["Range", "How", "Example"],
  rows: [
    ["0-15", "words to learn", "cero, uno, dos ... quince"],
    ["16-19", "dieci + unit, one word", "dieciséis, diecisiete"],
    ["21-29", "veinti + unit, one word", "veintiuno, veintidós"],
    ["31-99", "tens + y + unit, three words", "treinta y uno, cuarenta y cinco"],
    ["101-199", "ciento + number, no y", "ciento uno, ciento veinte"],
  ],
  note: "Exactly 100 is cien.",
};

export const CLOCK: LessonTable = {
  caption: "Telling the time",
  head: ["Time", "Spanish"],
  rows: [
    ["1:00", "Es la una."],
    ["3:00", "Son las tres."],
    ["3:10", "Son las tres y diez."],
    ["3:15", "Son las tres y cuarto."],
    ["3:30", "Son las tres y media."],
    ["3:45", "Son las cuatro menos cuarto."],
  ],
  note: "Es only with la una. Every other hour takes son las.",
};

export const WHEN: LessonTable = {
  caption: "The time now, or when something happens",
  head: ["", "Ask", "Answer"],
  rows: [
    ["The time now", "¿Qué hora es?", "Son las dos."],
    ["When it happens", "¿A qué hora es la clase?", "A las dos."],
    ["Morning / afternoon / night", "", "de la mañana / de la tarde / de la noche"],
  ],
};

export const DATES: LessonTable = {
  caption: "Days, months and dates",
  head: ["English", "Spanish", "Rule"],
  rows: [
    ["on Monday", "el lunes", "el, not en"],
    ["on Mondays", "los lunes", "los for every week"],
    ["in July", "en julio", "en + month"],
    ["July 4", "el cuatro de julio", "el + number + de + month"],
    ["October 1", "el primero de octubre", "only the 1st is special"],
  ],
  note: "Days and months have no capital letter.",
};

export const ER_IR_ENDINGS: LessonTable = {
  caption: "Regular -er and -ir verbs",
  head: ["Who", "comer (to eat)", "vivir (to live)"],
  rows: [
    ["yo", "como", "vivo"],
    ["tú", "comes", "vives"],
    ["usted / él / ella", "come", "vive"],
    ["nosotros / nosotras", "*comemos", "*vivimos"],
    ["ustedes / ellos / ellas", "comen", "viven"],
  ],
  note: "Only the nosotros form is different: -emos for -er verbs, -imos for -ir verbs.",
};

export const QUESTION_WORDS: LessonTable = {
  caption: "Question words",
  head: ["Spanish", "English", "Example"],
  rows: [
    ["¿Qué?", "What?", "¿Qué comes?"],
    ["¿Quién? / ¿Quiénes?", "Who?", "¿Quién es ella?"],
    ["¿Dónde?", "Where?", "¿Dónde vives?"],
    ["¿Cuándo?", "When?", "¿Cuándo trabajas?"],
    ["¿Por qué?", "Why?", "¿Por qué estudias?"],
    ["¿Cómo?", "How?", "¿Cómo estás?"],
    ["¿Cuánto? / ¿Cuánta?", "How much?", "¿Cuánto cuesta?"],
    ["¿Cuántos? / ¿Cuántas?", "How many?", "¿Cuántos años tienes?"],
  ],
  note: "Every question word has an accent mark, and questions open with ¿.",
};

export const WHERE_WORDS: LessonTable = {
  caption: "Three ways to ask where",
  head: ["Question", "Asks", "Answer"],
  rows: [
    ["¿Dónde estás?", "where you are", "Estoy en Lima."],
    ["¿Adónde vas?", "where you're going", "Voy a México."],
    ["¿De dónde eres?", "where you're from", "Soy de Venezuela."],
  ],
  note: "The small word (en, a, de) in the answer tells you which one was asked.",
};

export const TENER: LessonTable = {
  caption: "Tener (to have)",
  head: ["Who", "Tener", "Example"],
  rows: [
    ["yo", "*tengo", "Tengo un carro."],
    ["tú", "*tienes", "¿Tienes hambre?"],
    ["usted / él / ella", "*tiene", "Tiene veinte años."],
    ["nosotros / nosotras", "tenemos", "Tenemos dos perros."],
    ["ustedes / ellos / ellas", "*tienen", "Tienen frío."],
  ],
  note: "Only tenemos keeps the plain ten-.",
};

export const TENER_PHRASES: LessonTable = {
  caption: "English \"to be\", Spanish tener",
  head: ["English", "Spanish", "Word for word"],
  rows: [
    ["I'm 20.", "Tengo 20 años.", "I have 20 years."],
    ["I'm hungry.", "Tengo hambre.", "I have hunger."],
    ["I'm thirsty.", "Tengo sed.", "I have thirst."],
    ["I'm cold / hot.", "Tengo frío / calor.", "I have cold / heat."],
    ["I'm sleepy.", "Tengo sueño.", "I have sleep."],
    ["I'm in a hurry.", "Tengo prisa.", "I have hurry."],
  ],
  note: "\"Very\" is mucho or mucha here, not muy: Tengo mucha hambre.",
};

export const IR: LessonTable = {
  caption: "Ir (to go)",
  head: ["Who", "Ir", "Example"],
  rows: [
    ["yo", "voy", "Voy al gimnasio."],
    ["tú", "vas", "¿Vas a la playa?"],
    ["usted / él / ella", "va", "Ella va a la escuela."],
    ["nosotros / nosotras", "vamos", "Vamos al cine."],
    ["ustedes / ellos / ellas", "van", "Van a casa."],
  ],
  note: "a + el = al: Voy al parque. a + la stays: Voy a la playa.",
};

export const IR_A: LessonTable = {
  caption: "Going to: ir + a + verb",
  head: ["ir", "a", "verb (never changes)", "Meaning"],
  rows: [
    ["Voy", "a", "estudiar.", "I'm going to study."],
    ["Vas", "a", "comer.", "You're going to eat."],
    ["Vamos", "a", "viajar.", "We're going to travel."],
    ["No van", "a", "salir.", "They aren't going to go out."],
  ],
};

export const ADJ_FORMS: LessonTable = {
  caption: "Describing words match their noun",
  head: ["", "One", "More than one"],
  rows: [
    ["Masculine", "el carro rojo", "los carros rojos"],
    ["Feminine", "la casa roja", "las casas rojas"],
    ["Ends in -e", "el libro grande", "los libros grandes"],
    ["Ends in a consonant", "la mesa azul", "las mesas azules"],
  ],
  note: "Words in -e or a consonant don't change for masculine and feminine.",
};

export const ADJ_PLACE: LessonTable = {
  caption: "Where describing words go",
  head: ["Before the noun", "After the noun"],
  rows: [
    ["numbers: dos carros", "colors: un carro rojo"],
    ["mi, tu, su: mi casa", "nationality: una amiga mexicana"],
    ["mucho, poco: muchos libros", "most others: una casa grande"],
    ["*buen, mal, gran: un buen día", "bueno, malo, grande: un día bueno"],
  ],
  note: "Bueno and malo drop the -o before a masculine noun. Grande becomes gran before any single noun.",
};

export const NEGATION: LessonTable = {
  caption: "Saying no",
  head: ["Yes", "No"],
  rows: [
    ["Trabajo hoy.", "*No trabajo hoy."],
    ["Soy de aquí.", "*No soy de aquí."],
    ["Me llamo Ana.", "*No me llamo Ana."],
    ["¿Hablas inglés? Sí, hablo inglés.", "No, *no hablo inglés."],
  ],
  note: "No goes right before the verb, or before me, te, se when there is one.",
};

export const POSSESSIVES: LessonTable = {
  caption: "My, your, our",
  head: ["English", "One thing", "More than one"],
  rows: [
    ["my", "mi libro", "mis libros"],
    ["your (friend)", "tu casa", "tus casas"],
    ["his, her, your (polite), their", "su carro", "sus carros"],
    ["our", "nuestro amigo / nuestra amiga", "nuestros amigos / nuestras amigas"],
  ],
  note: "They match the thing owned, not the owner. Only nuestro changes for masculine and feminine.",
};

export const DEMONSTRATIVES: LessonTable = {
  caption: "This, that, that over there",
  head: ["", "Near me", "Near you", "Far from both"],
  rows: [
    ["Masculine", "este libro", "ese libro", "aquel libro"],
    ["Feminine", "esta casa", "esa casa", "aquella casa"],
    ["Masc. plural", "estos libros", "esos libros", "aquellos libros"],
    ["Fem. plural", "estas casas", "esas casas", "aquellas casas"],
  ],
  note: "Esto and eso are for a thing you haven't named: ¿Qué es esto?",
};

export const STEM_E_IE: LessonTable = {
  caption: "e → ie: querer (to want)",
  head: ["Who", "Querer", "Changes?"],
  rows: [
    ["yo", "*quiero", "yes"],
    ["tú", "*quieres", "yes"],
    ["usted / él / ella", "*quiere", "yes"],
    ["nosotros / nosotras", "queremos", "no"],
    ["ustedes / ellos / ellas", "*quieren", "yes"],
  ],
  note: "Same pattern: pensar (pienso), empezar (empiezo), entender (entiendo), preferir (prefiero).",
};

export const STEM_O_UE: LessonTable = {
  caption: "o → ue: poder (can)",
  head: ["Who", "Poder", "Changes?"],
  rows: [
    ["yo", "*puedo", "yes"],
    ["tú", "*puedes", "yes"],
    ["usted / él / ella", "*puede", "yes"],
    ["nosotros / nosotras", "podemos", "no"],
    ["ustedes / ellos / ellas", "*pueden", "yes"],
  ],
  note: "Same pattern: dormir (duermo), volver (vuelvo), encontrar (encuentro), costar (cuesta). Jugar: u → ue (juego).",
};

export const STEM_E_I: LessonTable = {
  caption: "e → i: pedir (to ask for)",
  head: ["Who", "Pedir", "Changes?"],
  rows: [
    ["yo", "*pido", "yes"],
    ["tú", "*pides", "yes"],
    ["usted / él / ella", "*pide", "yes"],
    ["nosotros / nosotras", "pedimos", "no"],
    ["ustedes / ellos / ellas", "*piden", "yes"],
  ],
  note: "Same pattern, -ir verbs only: servir (sirvo), repetir (repito), seguir (sigo).",
};

export const YO_IRREGULARS: LessonTable = {
  caption: "Odd \"I\" forms",
  head: ["Verb", "Yo", "The rest is regular"],
  rows: [
    ["hacer (to do)", "*hago", "haces, hace"],
    ["poner (to put)", "*pongo", "pones, pone"],
    ["salir (to go out)", "*salgo", "sales, sale"],
    ["traer (to bring)", "*traigo", "traes, trae"],
    ["dar (to give)", "*doy", "das, da"],
    ["ver (to see)", "*veo", "ves, ve"],
    ["saber (to know)", "*sé", "sabes, sabe"],
    ["conocer (to know)", "*conozco", "conoces, conoce"],
  ],
};

export const SABER_CONOCER: LessonTable = {
  caption: "Two ways to know",
  head: ["Saber", "Conocer"],
  rows: [
    ["facts: Sé tu nombre.", "people: Conozco a Luis."],
    ["how to: Sé nadar.", "places: Conozco Lima."],
    ["with que, dónde, cuándo: Sé dónde vive.", "things you're familiar with: Conozco ese libro."],
  ],
  note: "Yo forms: sé, conozco. Conocer takes a before a person.",
};

export const MODALS: LessonTable = {
  caption: "Verb + whole verb",
  head: ["Meaning", "First verb", "Example"],
  rows: [
    ["can", "poder", "Puedo ir."],
    ["want to", "querer", "Quiero comer."],
    ["need to", "necesitar", "Necesito estudiar."],
    ["should", "deber", "Debes descansar."],
    ["have to", "tener que", "Tengo que trabajar."],
  ],
  note: "Only the first verb changes. The second stays whole: -ar, -er or -ir.",
};

export const GUSTAR: LessonTable = {
  caption: "Gustar: \"it pleases me\"",
  head: ["Who likes it", "One thing or a verb", "More than one thing"],
  rows: [
    ["I", "Me gusta el café.", "Me gustan los gatos."],
    ["you (friend)", "Te gusta bailar.", "Te gustan las películas."],
    ["he, she, you (polite)", "Le gusta la playa.", "Le gustan los libros."],
    ["we", "Nos gusta viajar.", "Nos gustan los perros."],
    ["they, you all", "Les gusta el fútbol.", "Les gustan las fiestas."],
  ],
  note: "Gusta or gustan follows the thing liked, not the person. Encantar and doler work the same: Me duele la cabeza.",
};

export const PREPOSITIONS: LessonTable = {
  caption: "Small linking words",
  head: ["Word", "Meaning", "Example"],
  rows: [
    ["a", "to", "Voy a la playa."],
    ["de", "of, from", "Soy de Chile. El libro de Ana."],
    ["en", "in, on, at", "Estoy en casa."],
    ["con", "with", "Vivo con mi hermana."],
    ["*al (a + el)", "to the", "Voy al banco."],
    ["*del (de + el)", "of the, from the", "Vengo del trabajo."],
  ],
  note: "A + el always joins into al, and de + el into del.",
};

export const PERSONAL_A: LessonTable = {
  caption: "A before people",
  head: ["A thing", "A person"],
  rows: [
    ["Veo la casa.", "Veo *a mi madre."],
    ["Busco mi teléfono.", "Busco *a Luis."],
    ["Conozco Lima.", "Conozco *a tu hermano."],
  ],
  note: "No a after tener or hay: Tengo dos hermanos. Hay un doctor.",
};

export const MUY_MUCHO: LessonTable = {
  caption: "Very, a lot, a little",
  head: ["Word", "Goes with", "Example"],
  rows: [
    ["muy (very)", "a describing word", "Es muy alto."],
    ["mucho (a lot)", "a verb", "Trabaja mucho."],
    ["mucho, mucha, muchos, muchas", "a noun, and it matches", "Tengo muchos amigos."],
    ["poco (a little)", "works like mucho", "Come poco. Tengo poco tiempo."],
  ],
  note: "Never muy mucho. For \"very much\" say muchísimo.",
};

export const PROGRESSIVE: LessonTable = {
  caption: "Right now: estar + -ando / -iendo",
  head: ["Verb", "Change", "Example"],
  rows: [
    ["-ar: hablar", "-ar → -ando", "Estoy hablando."],
    ["-er: comer", "-er → -iendo", "Estás comiendo."],
    ["-ir: vivir", "-ir → -iendo", "Están viviendo aquí."],
    ["leer, dormir", "odd forms", "leyendo, durmiendo"],
  ],
  note: "Only estar changes for the person.",
};

export const PRETERITE_REGULAR: LessonTable = {
  caption: "The finished past: regular verbs",
  head: ["Who", "hablar", "comer / vivir"],
  rows: [
    ["yo", "hablé", "comí / viví"],
    ["tú", "hablaste", "comiste / viviste"],
    ["usted / él / ella", "habló", "comió / vivió"],
    ["nosotros / nosotras", "hablamos", "comimos / vivimos"],
    ["ustedes / ellos / ellas", "hablaron", "comieron / vivieron"],
  ],
  note: "The accent matters: hablo (I speak), habló (he spoke).",
};

export const PRETERITE_SPELLING: LessonTable = {
  caption: "Spelling changes in the finished past",
  head: ["Verbs in", "Yo form", "Example"],
  rows: [
    ["-car", "c → qu", "buscar → busqué"],
    ["-gar", "g → gu", "llegar → llegué"],
    ["-zar", "z → c", "empezar → empecé"],
    ["leer, oír, creer", "i → y for él and ellos", "leyó, leyeron"],
  ],
  note: "Only the spelling changes; the sound stays the same.",
};

export const PRETERITE_IRREGULAR: LessonTable = {
  caption: "The finished past: irregular verbs",
  head: ["Verb", "Yo", "Él / ella", "Ellos"],
  rows: [
    ["ser / ir", "fui", "fue", "fueron"],
    ["tener", "tuve", "tuvo", "tuvieron"],
    ["estar", "estuve", "estuvo", "estuvieron"],
    ["hacer", "hice", "hizo", "hicieron"],
    ["decir", "dije", "dijo", "dijeron"],
    ["poder", "pude", "pudo", "pudieron"],
    ["venir", "vine", "vino", "vinieron"],
  ],
  note: "No accents on these. Ser and ir share the same forms.",
};

export const PRETERITE_STEM: LessonTable = {
  caption: "Inside changes in the finished past",
  head: ["Verb", "Yo (no change)", "Él / ella", "Ellos"],
  rows: [
    ["pedir (e → i)", "pedí", "*pidió", "*pidieron"],
    ["servir (e → i)", "serví", "*sirvió", "*sirvieron"],
    ["dormir (o → u)", "dormí", "*durmió", "*durmieron"],
    ["morir (o → u)", "morí", "*murió", "*murieron"],
  ],
  note: "Only -ir verbs, and only in the él and ellos forms.",
};

export const IMPERFECT: LessonTable = {
  caption: "The background past",
  head: ["Who", "hablar", "comer / vivir"],
  rows: [
    ["yo", "hablaba", "comía / vivía"],
    ["tú", "hablabas", "comías / vivías"],
    ["usted / él / ella", "hablaba", "comía / vivía"],
    ["nosotros / nosotras", "hablábamos", "comíamos / vivíamos"],
    ["ustedes / ellos / ellas", "hablaban", "comían / vivían"],
  ],
  note: "Only three irregular verbs: ser (era), ir (iba), ver (veía).",
};

export const PRET_VS_IMP: LessonTable = {
  caption: "Which past?",
  head: ["Finished past (hablé)", "Background past (hablaba)"],
  rows: [
    ["what happened, once: Ayer llovió.", "what was going on: Llovía."],
    ["a finished action: Comí a las dos.", "a habit: Siempre comía a las dos."],
    ["the next event: Entró y saludó.", "the scene: Era tarde y hacía frío."],
    ["the interruption: ... cuando sonó el teléfono.", "what it interrupted: Dormía ..."],
  ],
};

export const PAST_MEANING: LessonTable = {
  caption: "Verbs that mean something else in the finished past",
  head: ["Verb", "Background past", "Finished past"],
  rows: [
    ["saber", "sabía: I knew", "supe: I found out"],
    ["conocer", "conocía: I knew", "conocí: I met"],
    ["querer", "quería: I wanted", "quise: I tried"],
    ["no querer", "no quería: I didn't want to", "no quise: I refused"],
    ["poder", "podía: I was able to", "pude: I managed to"],
  ],
};

export const PAST_PROGRESSIVE: LessonTable = {
  caption: "Was doing: estaba + -ando / -iendo",
  head: ["Who", "Estar", "Example"],
  rows: [
    ["yo", "estaba", "Estaba leyendo."],
    ["tú", "estabas", "¿Qué estabas haciendo?"],
    ["usted / él / ella", "estaba", "Estaba durmiendo."],
    ["nosotros / nosotras", "estábamos", "Estábamos comiendo."],
    ["ustedes / ellos / ellas", "estaban", "Estaban hablando."],
  ],
  note: "Use it for what was in progress when something else happened: Estaba leyendo cuando llamaste.",
};

export const PRESENT_PERFECT: LessonTable = {
  caption: "Have done: haber + -ado / -ido",
  head: ["Who", "Haber", "Example"],
  rows: [
    ["yo", "he", "He comido."],
    ["tú", "has", "¿Has visto la película?"],
    ["usted / él / ella", "ha", "Ha llegado."],
    ["nosotros / nosotras", "hemos", "Hemos terminado."],
    ["ustedes / ellos / ellas", "han", "Han vivido aquí."],
  ],
  note: "-ar → -ado (hablado); -er and -ir → -ido (comido, vivido). Nothing goes between haber and the second word.",
};

export const PARTICIPLES: LessonTable = {
  caption: "Odd \"done\" forms",
  head: ["Verb", "Done form", "Example"],
  rows: [
    ["hacer", "*hecho", "He hecho la tarea."],
    ["decir", "*dicho", "¿Qué has dicho?"],
    ["ver", "*visto", "Hemos visto la película."],
    ["poner", "*puesto", "Ha puesto la mesa."],
    ["escribir", "*escrito", "He escrito una carta."],
    ["abrir", "*abierto", "Han abierto la tienda."],
    ["volver", "*vuelto", "Ha vuelto a casa."],
    ["romper", "*roto", "Ha roto el vaso."],
  ],
};

export const HAY: LessonTable = {
  caption: "Hay: there is, there are",
  head: ["", "English", "Spanish"],
  rows: [
    ["one", "There is a bank.", "*Hay un banco."],
    ["more", "There are two banks.", "*Hay dos bancos."],
    ["none", "There's no milk.", "*No hay leche."],
    ["ask", "Is there a bank?", "*¿Hay un banco?"],
  ],
  note: "Hay never changes. After it: un, una, a number or nothing, never el or la.",
};

export const DIRECT_OBJECT: LessonTable = {
  caption: "It and them: lo, la, los, las",
  head: ["Replaces", "Pronoun", "Example"],
  rows: [
    ["el libro (masc.)", "lo", "Lo leo."],
    ["la carta (fem.)", "la", "La escribo."],
    ["los libros", "los", "Los compro."],
    ["las llaves", "las", "Las tengo."],
    ["me, you, us", "me, te, nos", "Me ve. Te llamo. Nos invitan."],
  ],
  note: "The pronoun goes before the verb: Lo veo, not Veo lo.",
};

export const INDIRECT_OBJECT: LessonTable = {
  caption: "To or for whom: me, te, le, nos, les",
  head: ["To whom", "Pronoun", "Example"],
  rows: [
    ["to me", "me", "Me da el libro."],
    ["to you (friend)", "te", "Te escribo una carta."],
    ["to him, her, you (polite)", "le", "Le digo la verdad."],
    ["to us", "nos", "Nos manda fotos."],
    ["to them, you all", "les", "Les doy las llaves."],
  ],
  note: "Le and les are the same for men and women. Add a + person to be clear: Le doy el libro a Ana.",
};

export const DOUBLE_OBJECT: LessonTable = {
  caption: "Two pronouns together",
  head: ["Order", "Example", "Meaning"],
  rows: [
    ["person, then thing", "Me lo da.", "He gives it to me."],
    ["person, then thing", "Te la mando.", "I'm sending it to you."],
    ["*le / les → se", "Se lo doy.", "I give it to him / her / them."],
    ["*le / les → se", "Se las compré.", "I bought them for her."],
  ],
  note: "Never le lo or les la. Before lo, la, los, las, le and les become se.",
};

export const PRONOUN_PLACE: LessonTable = {
  caption: "Where pronouns go",
  head: ["With", "Place", "Example"],
  rows: [
    ["one verb", "before it", "Lo compro."],
    ["no + verb", "between no and the verb", "No lo compro."],
    ["verb + whole verb", "before, or joined to the end", "Lo quiero ver. / Quiero verlo."],
    ["estar + -ndo", "before, or joined to the end", "Lo estoy leyendo. / Estoy leyéndolo."],
    ["a command", "joined to the end", "Cómpralo."],
    ["a \"don't\" command", "before the verb", "No lo compres."],
  ],
};

export const REFLEXIVE: LessonTable = {
  caption: "Self verbs: levantarse (to get up)",
  head: ["Who", "Pronoun", "Example"],
  rows: [
    ["yo", "me", "Me levanto a las siete."],
    ["tú", "te", "Te duchas."],
    ["usted / él / ella", "se", "Se acuesta tarde."],
    ["nosotros / nosotras", "nos", "Nos despertamos."],
    ["ustedes / ellos / ellas", "se", "Se visten."],
  ],
  note: "The pronoun matches who does it. With a whole verb it can join the end: Voy a ducharme.",
};

export const SE_MEANING: LessonTable = {
  caption: "Verbs that change meaning with se",
  head: ["Without se", "With se"],
  rows: [
    ["ir: to go", "irse: to leave"],
    ["dormir: to sleep", "dormirse: to fall asleep"],
    ["quedar: to arrange to meet", "quedarse: to stay"],
    ["llamar: to call", "llamarse: to be called"],
    ["poner: to put", "ponerse: to put on, to become"],
    ["parecer: to seem", "parecerse a: to look like"],
  ],
};

export const COMPARISONS: LessonTable = {
  caption: "Comparing",
  head: ["Meaning", "Pattern", "Example"],
  rows: [
    ["more ... than", "más + word + que", "Ana es más alta que Luis."],
    ["less ... than", "menos + word + que", "Es menos caro que el otro."],
    ["as ... as", "tan + word + como", "Es tan alto como yo."],
    ["as much / many ... as", "tanto, tanta, tantos, tantas + noun + como", "Tengo tantos libros como tú."],
    ["more than + number", "más de", "Más de diez personas."],
  ],
};

export const SUPERLATIVES: LessonTable = {
  caption: "The most, and extremely",
  head: ["Meaning", "Pattern", "Example"],
  rows: [
    ["the most", "el / la + más + word", "Es la más alta."],
    ["the most ... in", "el / la + más + word + de", "Es el más rápido de la clase."],
    ["the least", "el / la + menos + word", "Es el menos caro."],
    ["extremely", "word + -ísimo / -ísima", "Es buenísimo. Está riquísima."],
  ],
  note: "\"In the class\" is de la clase, not en la clase.",
};

export const IRREG_COMPARATIVES: LessonTable = {
  caption: "Better, worse, older, younger",
  head: ["Word", "Comparing", "Example"],
  rows: [
    ["bueno, bien", "*mejor (better)", "Este café es mejor."],
    ["malo, mal", "*peor (worse)", "Hoy estoy peor."],
    ["age: older", "*mayor", "Mi hermana es mayor que yo."],
    ["age: younger", "*menor", "Soy menor que ella."],
  ],
  note: "They only change for plural: mejores, peores, mayores, menores. Más joven and más viejo are also used.",
};

export const FUTURE: LessonTable = {
  caption: "The future: whole verb + ending",
  head: ["Who", "Ending", "hablar"],
  rows: [
    ["yo", "-é", "hablaré"],
    ["tú", "-ás", "hablarás"],
    ["usted / él / ella", "-á", "hablará"],
    ["nosotros / nosotras", "-emos", "hablaremos"],
    ["ustedes / ellos / ellas", "-án", "hablarán"],
  ],
  note: "Odd stems, same endings: tendr- (tener), har- (hacer), podr- (poder), dir- (decir), saldr- (salir), vendr- (venir).",
};

export const POR_PARA: LessonTable = {
  caption: "Por or para?",
  head: ["Por", "Para"],
  rows: [
    ["the reason: Gracias por tu ayuda.", "the goal: Estudio para aprender."],
    ["through, along: Camino por el parque.", "the destination: Salgo para Lima."],
    ["how long: Viví allí por dos años.", "the deadline: Es para el lunes."],
    ["in exchange: Lo compré por diez pesos.", "who gets it: Es para ti."],
    ["by means of: Hablamos por teléfono.", "an opinion: Para mí, es fácil."],
  ],
  note: "Por looks back at the cause; para looks ahead to the goal.",
};

export const INDEFINITES: LessonTable = {
  caption: "Something and nothing",
  head: ["Yes", "No"],
  rows: [
    ["algo (something)", "nada (nothing)"],
    ["alguien (someone)", "nadie (no one)"],
    ["algún, alguna (some)", "ningún, ninguna (none, not any)"],
    ["siempre (always)", "nunca (never)"],
    ["también (also)", "tampoco (neither)"],
  ],
  note: "After the verb, keep no in front: No veo nada. No viene nadie. Before the verb, no no: Nadie viene.",
};

export const MENTE: LessonTable = {
  caption: "-ly words: feminine form + -mente",
  head: ["Describing word", "Feminine", "-ly word"],
  rows: [
    ["rápido", "rápida", "rápidamente"],
    ["lento", "lenta", "lentamente"],
    ["fácil", "fácil", "fácilmente"],
    ["normal", "normal", "normalmente"],
  ],
  note: "The accent stays: fácil → fácilmente. Good and bad are bien and mal.",
};

export const TU_COMMANDS: LessonTable = {
  caption: "Telling a friend what to do",
  head: ["Verb", "Command", "Tip"],
  rows: [
    ["hablar", "¡Habla!", "same as the él form"],
    ["comer", "¡Come!", "same as the él form"],
    ["decir / hacer", "*¡Di! / ¡Haz!", "odd"],
    ["ir / ser", "*¡Ve! / ¡Sé!", "odd"],
    ["poner / salir", "*¡Pon! / ¡Sal!", "odd"],
    ["tener / venir", "*¡Ten! / ¡Ven!", "odd"],
  ],
  note: "Pronouns join the end: Dime. Hazlo. Levántate.",
};

export const HACE_TIME: LessonTable = {
  caption: "Ago, and for how long",
  head: ["Meaning", "Pattern", "Example"],
  rows: [
    ["ago", "hace + time", "Llegué hace dos años."],
    ["for (and still going)", "hace + time + que + present", "Hace un mes que vivo aquí."],
    ["since", "desde + a point in time", "Vivo aquí desde enero."],
    ["for (and still going)", "desde hace + time", "Vivo aquí desde hace un mes."],
  ],
  note: "Still true now? Spanish uses the present: vivo, not he vivido.",
};

export const ACABAR_VOLVER_SOLER: LessonTable = {
  caption: "Just did, again, usually",
  head: ["Meaning", "Pattern", "Example"],
  rows: [
    ["just did", "acabar de + whole verb", "Acabo de comer."],
    ["do again", "volver a + whole verb", "Vuelvo a intentar."],
    ["usually do", "soler + whole verb", "Suelo desayunar a las ocho."],
  ],
  note: "Volver and soler change o → ue: vuelvo, suelo.",
};

export const POSSESSIVE_PRONOUNS: LessonTable = {
  caption: "Mine, yours, ours",
  head: ["English", "One thing", "More than one"],
  rows: [
    ["mine", "el mío / la mía", "los míos / las mías"],
    ["yours (friend)", "el tuyo / la tuya", "los tuyos / las tuyas"],
    ["his, hers, yours (polite), theirs", "el suyo / la suya", "los suyos / las suyas"],
    ["ours", "el nuestro / la nuestra", "los nuestros / las nuestras"],
  ],
  note: "They match the thing owned. After ser, el and la drop: Es mío.",
};

export const DIMINUTIVES: LessonTable = {
  caption: "Little words: -ito, -ita",
  head: ["Word ends in", "Add", "Example"],
  rows: [
    ["-o or -a", "-ito / -ita", "gato → gatito, casa → casita"],
    ["-e, -n or -r", "-cito / -cita", "café → cafecito, pan → pancito"],
    ["-co, -ca", "c → qu", "poco → poquito, chica → chiquita"],
    ["-go, -ga", "g → gu", "amigo → amiguito"],
  ],
  note: "It can mean small, cute or just friendly: un momentito, ahorita.",
};

export const RELATIVES_BASIC: LessonTable = {
  caption: "Joining two ideas",
  head: ["Word", "Use", "Example"],
  rows: [
    ["que", "people and things", "El chico que vive aquí. El libro que leo."],
    ["quien, quienes", "people, after a, con, de, para", "La amiga con quien vivo."],
    ["lo que", "\"what\", \"the thing that\"", "Lo que quiero es descansar."],
    ["donde", "places", "La casa donde vivo."],
  ],
  note: "Spanish can't drop que: \"the book I'm reading\" is el libro que leo.",
};

export const DIACRITICS: LessonTable = {
  caption: "Accents that change the meaning",
  head: ["With accent", "Without"],
  rows: [
    ["tú (you)", "tu (your)"],
    ["él (he)", "el (the)"],
    ["mí (me)", "mi (my)"],
    ["sé (I know)", "se (himself, herself)"],
    ["sí (yes)", "si (if)"],
    ["té (tea)", "te (you)"],
    ["más (more)", "mas (but, old style)"],
    ["qué, cómo, dónde (in questions)", "que, como, donde (joining words)"],
  ],
};

export const SUBJ_REGULAR: LessonTable = {
  caption: "The wish and doubt form: swap the vowel",
  head: ["Who", "hablar (a → e)", "comer / vivir (e → a)"],
  rows: [
    ["yo", "hable", "coma / viva"],
    ["tú", "hables", "comas / vivas"],
    ["usted / él / ella", "hable", "coma / viva"],
    ["nosotros / nosotras", "hablemos", "comamos / vivamos"],
    ["ustedes / ellos / ellas", "hablen", "coman / vivan"],
  ],
  note: "Start from the yo form: tengo → tenga, hago → haga, conozco → conozca.",
};

export const SUBJ_IRREGULAR: LessonTable = {
  caption: "The wish and doubt form: six odd verbs",
  head: ["Verb", "Yo / él", "Nosotros", "Ellos"],
  rows: [
    ["ser", "sea", "seamos", "sean"],
    ["ir", "vaya", "vayamos", "vayan"],
    ["haber", "haya", "hayamos", "hayan"],
    ["saber", "sepa", "sepamos", "sepan"],
    ["estar", "esté", "estemos", "estén"],
    ["dar", "dé", "demos", "den"],
  ],
};

export const SUBJ_WISHES: LessonTable = {
  caption: "After wanting and asking",
  head: ["Starter + que", "Example"],
  rows: [
    ["querer que", "Quiero que vengas."],
    ["esperar que", "Espero que estés bien."],
    ["pedir que", "Te pido que me ayudes."],
    ["recomendar que", "Te recomiendo que descanses."],
    ["necesitar que", "Necesito que me escuches."],
  ],
  note: "Two different people: one wants, the other does. That's what brings in the wish form.",
};

export const SUBJ_EMOTION: LessonTable = {
  caption: "After feelings",
  head: ["Starter + que", "Example"],
  rows: [
    ["me alegra que", "Me alegra que estés aquí."],
    ["me gusta que", "Me gusta que me llames."],
    ["siento que", "Siento que no puedas venir."],
    ["me molesta que", "Me molesta que lleguen tarde."],
    ["tengo miedo de que", "Tengo miedo de que llueva."],
  ],
};

export const SUBJ_DOUBT: LessonTable = {
  caption: "Doubt or belief?",
  head: ["Belief → normal form", "Doubt → wish form"],
  rows: [
    ["Creo que es verdad.", "No creo que sea verdad."],
    ["Pienso que viene.", "No pienso que venga."],
    ["Es cierto que llueve.", "No es cierto que llueva."],
    ["Estoy seguro de que tiene razón.", "Dudo que tenga razón."],
  ],
  note: "If the speaker presents it as true, normal form. If not, wish form.",
};

export const SUBJ_IMPERSONAL: LessonTable = {
  caption: "It's important that..., and ojalá",
  head: ["Starter", "Example"],
  rows: [
    ["es importante que", "Es importante que llegues a tiempo."],
    ["es necesario que", "Es necesario que estudies."],
    ["es posible que", "Es posible que llueva."],
    ["es mejor que", "Es mejor que te quedes."],
    ["ojalá (que)", "Ojalá llueva. Ojalá que puedas venir."],
  ],
  note: "Facts take the normal form: Es verdad que llueve. Es obvio que tiene razón.",
};

export const INF_VS_QUE: LessonTable = {
  caption: "One verb, or que + wish form?",
  head: ["Same person → whole verb", "Two people → que + wish form"],
  rows: [
    ["Quiero ir.", "Quiero que vayas."],
    ["Espero llegar a tiempo.", "Espero que llegues a tiempo."],
    ["Es importante estudiar.", "Es importante que estudies."],
    ["Estudio para aprender.", "Te lo explico para que aprendas."],
  ],
};

export const USTED_COMMANDS: LessonTable = {
  caption: "Polite commands: the wish form",
  head: ["Verb", "Usted", "Ustedes"],
  rows: [
    ["hablar", "Hable.", "Hablen."],
    ["comer", "Coma.", "Coman."],
    ["venir", "Venga.", "Vengan."],
    ["ir", "Vaya.", "Vayan."],
    ["seguir", "Siga derecho.", "Sigan derecho."],
  ],
  note: "Pronouns join the end: Siéntese. Dígame. With no, they go before: No se siente.",
};

export const NEGATIVE_COMMANDS: LessonTable = {
  caption: "Do it, don't do it",
  head: ["Verb", "Do it (tú)", "Don't (tú)"],
  rows: [
    ["hablar", "Habla.", "*No hables."],
    ["comer", "Come.", "*No comas."],
    ["decir", "Di.", "*No digas."],
    ["hacer", "Haz.", "*No hagas."],
    ["ir", "Ve.", "*No vayas."],
  ],
  note: "\"Don't\" always uses the wish form. Pronouns go before the verb: No lo digas.",
};

export const NOSOTROS_COMMANDS: LessonTable = {
  caption: "Let's",
  head: ["Way", "Example", "Note"],
  rows: [
    ["vamos a + whole verb", "Vamos a comer.", "the everyday way"],
    ["the wish form", "Comamos. Hablemos.", "a bit more formal"],
    ["ir", "*Vamos.", "not vayamos"],
    ["let's not", "No comamos. No vayamos.", "always the wish form"],
  ],
  note: "With nos, the -s drops: Sentémonos. Vámonos.",
};

export const COMMANDS_PRONOUNS: LessonTable = {
  caption: "Commands with pronouns",
  head: ["Do it: joined to the end", "Don't: before the verb"],
  rows: [
    ["Dime.", "No me digas."],
    ["Hazlo.", "No lo hagas."],
    ["Dámelo.", "No me lo des."],
    ["Siéntese.", "No se siente."],
    ["Levántate.", "No te levantes."],
  ],
  note: "When pronouns join the end, an accent keeps the stress in place: dame, but dámelo.",
};

export const CONDITIONAL: LessonTable = {
  caption: "Would: whole verb + -ía",
  head: ["Who", "Ending", "hablar"],
  rows: [
    ["yo", "-ía", "hablaría"],
    ["tú", "-ías", "hablarías"],
    ["usted / él / ella", "-ía", "hablaría"],
    ["nosotros / nosotras", "-íamos", "hablaríamos"],
    ["ustedes / ellos / ellas", "-ían", "hablarían"],
  ],
  note: "Same odd stems as the future: tendría, haría, podría, diría. Polite: Me gustaría, ¿Podrías?",
};

export const SI_REAL: LessonTable = {
  caption: "Real \"if\" sentences",
  head: ["If ...", "... then", "Example"],
  rows: [
    ["si + present", "present", "Si llueve, me quedo en casa."],
    ["si + present", "future", "Si estudias, aprobarás."],
    ["si + present", "command", "Si puedes, llámame."],
  ],
  note: "Never the future right after si: Si llueve, not Si lloverá.",
};

export const PLUPERFECT: LessonTable = {
  caption: "Had done: había + -ado / -ido",
  head: ["Who", "Haber", "Example"],
  rows: [
    ["yo", "había", "Ya había comido."],
    ["tú", "habías", "¿Habías estado aquí?"],
    ["usted / él / ella", "había", "Ya había salido."],
    ["nosotros / nosotras", "habíamos", "No lo habíamos visto."],
    ["ustedes / ellos / ellas", "habían", "Ya se habían ido."],
  ],
  note: "It's the past before the past: Cuando llegué, ya había salido.",
};

export const FUTURE_COND_PERFECT: LessonTable = {
  caption: "Will have done, would have done",
  head: ["Meaning", "Pattern", "Example"],
  rows: [
    ["will have done", "habré + -ado / -ido", "Para las seis habré terminado."],
    ["would have done", "habría + -ado / -ido", "Yo habría ido."],
    ["a guess about the past", "habrá + -ado / -ido", "Habrá salido."],
  ],
};

export const PROBABILITY: LessonTable = {
  caption: "Guessing",
  head: ["A guess about", "Use", "Example"],
  rows: [
    ["now", "the future", "¿Dónde estará? Serán las tres."],
    ["the past", "the conditional", "Serían las tres cuando llegó."],
    ["something finished", "habrá + -ado / -ido", "Habrá perdido el tren."],
  ],
  note: "English says \"must be\" or \"I wonder\": Estará en casa = He must be at home.",
};

export const SE_PASSIVE: LessonTable = {
  caption: "Se for \"is sold\" and \"people say\"",
  head: ["Use", "Verb", "Example"],
  rows: [
    ["one thing", "él form", "Se vende casa."],
    ["more than one thing", "ellos form", "Se venden casas."],
    ["people in general", "él form", "Se dice que es verdad."],
    ["rules and signs", "él form", "No se puede fumar aquí."],
  ],
};

export const SE_ACCIDENTAL: LessonTable = {
  caption: "Se for accidents",
  head: ["Whose accident", "One thing", "More than one"],
  rows: [
    ["mine", "Se me olvidó la llave.", "Se me olvidaron las llaves."],
    ["yours", "Se te cayó el vaso.", "Se te cayeron los vasos."],
    ["his, hers", "Se le rompió el teléfono.", "Se le rompieron los lentes."],
    ["ours", "Se nos acabó el café.", "Se nos acabaron las ideas."],
  ],
  note: "The verb follows the thing, not the person. It says it happened by accident.",
};

export const SUBJ_ADJECTIVE: LessonTable = {
  caption: "Known, or still looking?",
  head: ["It exists and you know it → normal form", "You don't know if it exists → wish form"],
  rows: [
    ["Tengo un amigo que habla chino.", "Busco a alguien que hable chino."],
    ["Hay una tienda que vende eso.", "¿Hay una tienda que venda eso?"],
    ["Conozco a alguien que sabe.", "No conozco a nadie que sepa."],
  ],
};

export const SUBJ_PURPOSE: LessonTable = {
  caption: "Joining words that always take the wish form",
  head: ["Joining word", "Meaning", "Example"],
  rows: [
    ["para que", "so that", "Te llamo para que sepas."],
    ["a menos que", "unless", "Voy, a menos que llueva."],
    ["con tal de que", "provided that", "Te ayudo con tal de que me escuches."],
    ["sin que", "without", "Salió sin que lo vieran."],
    ["en caso de que", "in case", "Lleva paraguas en caso de que llueva."],
    ["antes de que", "before", "Llámame antes de que salgas."],
  ],
};

export const SUBJ_TIME: LessonTable = {
  caption: "Cuando: habit, past or future?",
  head: ["Time", "Form after cuando", "Example"],
  rows: [
    ["a habit", "normal form", "Cuando llego a casa, ceno."],
    ["the past", "normal form", "Cuando llegué, cené."],
    ["*the future", "*wish form", "Cuando llegue, cenaré."],
  ],
  note: "The same goes for hasta que, en cuanto, tan pronto como and después de que. Antes de que always takes the wish form.",
};

export const RELATIVES_PREP: LessonTable = {
  caption: "Who and which after a small word",
  head: ["For", "Pattern", "Example"],
  rows: [
    ["people", "a, con, de, para + quien", "La persona con quien hablo."],
    ["people and things", "small word + el que / la que", "El lugar en el que vivo."],
    ["formal", "small word + el cual / la cual", "La razón por la cual vine."],
    ["places", "donde", "La ciudad donde nací."],
  ],
  note: "The small word goes before, never at the end: la chica con la que salgo.",
};

export const PERFECT_SUBJ: LessonTable = {
  caption: "Have done, wish form: haya + -ado / -ido",
  head: ["Who", "Haber", "Example"],
  rows: [
    ["yo", "haya", "No creen que haya terminado."],
    ["tú", "hayas", "Espero que hayas comido."],
    ["usted / él / ella", "haya", "Me alegra que haya venido."],
    ["nosotros / nosotras", "hayamos", "Dudan que hayamos llegado."],
    ["ustedes / ellos / ellas", "hayan", "Ojalá hayan llegado bien."],
  ],
};

export const IMPERFECT_SUBJ: LessonTable = {
  caption: "The past wish form: from the ellos past",
  head: ["Ellos past", "Take off -ron", "Add -ra"],
  rows: [
    ["hablaron", "habla-", "hablara, hablaras, hablara, habláramos, hablaran"],
    ["comieron", "comie-", "comiera, comieras, comiera, comiéramos, comieran"],
    ["tuvieron", "tuvie-", "tuviera"],
    ["fueron (ser, ir)", "fue-", "fuera"],
    ["dijeron", "dije-", "dijera"],
  ],
  note: "Every verb follows this, even the irregular ones. The -se forms (hablase) mean the same.",
};

export const SEQUENCE: LessonTable = {
  caption: "Matching tenses",
  head: ["First verb", "Second verb", "Example"],
  rows: [
    ["present", "present wish form", "Quiero que vengas."],
    ["future or command", "present wish form", "Dile que venga."],
    ["*past", "*past wish form", "Quería que vinieras."],
    ["*would", "*past wish form", "Me gustaría que vinieras."],
  ],
};

export const SI_UNREAL: LessonTable = {
  caption: "Unreal \"if\" sentences",
  head: ["If ... (past wish form)", "... would", "Meaning"],
  rows: [
    ["Si tuviera tiempo,", "viajaría.", "If I had time, I'd travel."],
    ["Si fuera rico,", "compraría una casa.", "If I were rich, I'd buy a house."],
    ["Si pudieras,", "¿vendrías?", "If you could, would you come?"],
  ],
  note: "Never would after si: Si tuviera, not Si tendría.",
};

export const COMO_SI: LessonTable = {
  caption: "As if",
  head: ["Time", "Pattern", "Example"],
  rows: [
    ["same time", "como si + past wish form", "Habla como si fuera rico."],
    ["earlier", "como si + hubiera + -ado / -ido", "Me mira como si hubiera hecho algo malo."],
  ],
  note: "Como si never takes the present.",
};

export const REPORTED_SPEECH: LessonTable = {
  caption: "Passing on what someone said",
  head: ["They said", "You report (Dijo que...)"],
  rows: [
    ["\"Estoy cansado.\" (present)", "... estaba cansado."],
    ["\"Fui al cine.\" (finished past)", "... había ido al cine."],
    ["\"Iré mañana.\" (future)", "... iría al día siguiente."],
    ["\"He comido.\" (have done)", "... había comido."],
  ],
  note: "If the first verb is present (Dice que...), nothing changes: Dice que está cansado.",
};

export const VERBS_OF_CHANGE: LessonTable = {
  caption: "Becoming",
  head: ["Verb", "Kind of change", "Example"],
  rows: [
    ["ponerse", "sudden, a mood or look", "Se puso rojo."],
    ["volverse", "deep, lasting", "Se volvió loco."],
    ["hacerse", "by effort: job, belief", "Se hizo médico."],
    ["quedarse", "a result, often a loss", "Se quedó sin trabajo."],
    ["convertirse en", "into something else", "Se convirtió en un problema."],
    ["llegar a ser", "after a long path", "Llegó a ser presidenta."],
  ],
};

export const CONNECTORS: LessonTable = {
  caption: "Linking ideas",
  head: ["Job", "Everyday", "More formal"],
  rows: [
    ["but", "pero", "sin embargo, no obstante"],
    ["because", "porque", "ya que, puesto que, dado que"],
    ["so", "así que", "por lo tanto, por eso"],
    ["although", "aunque", "a pesar de que"],
    ["also", "también", "además"],
  ],
  note: "Sin embargo and por lo tanto start a new sentence or follow a semicolon.",
};

export const SI_PAST_UNREAL: LessonTable = {
  caption: "Would have, if I had",
  head: ["If ... (hubiera + -ado / -ido)", "... would have (habría + -ado / -ido)"],
  rows: [
    ["Si hubiera sabido,", "habría ido."],
    ["Si hubieras estudiado,", "habrías aprobado."],
    ["Si no hubiera llovido,", "habríamos salido."],
  ],
  note: "It's about a past that didn't happen.",
};

export const SI_MIXED: LessonTable = {
  caption: "Mixed \"if\" sentences",
  head: ["If ...", "... then", "Example"],
  rows: [
    ["a past that didn't happen", "a result now", "Si hubiera estudiado, ahora sabría la respuesta."],
    ["something untrue in general", "a result in the past", "Si fuera más alto, habría jugado baloncesto."],
  ],
};

export const AUNQUE: LessonTable = {
  caption: "Aunque: although or even if?",
  head: ["Form", "Meaning", "Example"],
  rows: [
    ["normal form", "although (a fact)", "Aunque llueve, salgo."],
    ["wish form", "even if (maybe)", "Aunque llueva, saldré."],
    ["past wish form", "even if (unlikely)", "Aunque lloviera, saldría."],
  ],
};

export const POR_MUCHO_QUE: LessonTable = {
  caption: "No matter how much",
  head: ["Pattern", "Example"],
  rows: [
    ["por mucho que + verb", "Por mucho que estudie, no apruebo."],
    ["por más que + verb", "Por más que lo intento, no puedo."],
    ["por muy + word + que", "Por muy cansado que esté, voy."],
    ["por mucho, mucha + noun + que", "Por mucho dinero que tenga, no es feliz."],
  ],
  note: "A known fact can take the normal form; anything open takes the wish form.",
};

export const UNIVERSAL_CONCESSIVES: LessonTable = {
  caption: "Whatever, however, whoever",
  head: ["Pattern", "Meaning"],
  rows: [
    ["digas lo que digas", "whatever you say"],
    ["sea como sea", "however it may be"],
    ["pase lo que pase", "whatever happens"],
    ["vayas donde vayas", "wherever you go"],
    ["sea quien sea", "whoever it is"],
  ],
  note: "The same wish form twice, with lo que, como, donde or quien in the middle.",
};

export const REPORTED_ORDERS: LessonTable = {
  caption: "Reported questions, orders and time words",
  head: ["They said", "You report"],
  rows: [
    ["\"¿Dónde vives?\"", "Me preguntó dónde vivía."],
    ["\"¿Vienes?\"", "Me preguntó si venía."],
    ["\"Ven.\"", "Me pidió que fuera."],
    ["hoy, mañana, ayer", "ese día, al día siguiente, el día anterior"],
    ["aquí, este", "allí, ese / aquel"],
  ],
  note: "An order becomes que + the past wish form.",
};

export const PASSIVE_SER: LessonTable = {
  caption: "Was built: ser + -ado / -ido",
  head: ["Subject", "Example"],
  rows: [
    ["masculine, one", "El puente fue construido en 1900."],
    ["feminine, one", "La novela fue escrita por Allende."],
    ["masculine, more", "Los ladrones fueron detenidos."],
    ["feminine, more", "Las cartas fueron enviadas ayer."],
  ],
  note: "The -ado / -ido word matches the subject. Por names who did it. In speech, se is more common: Se construyó en 1900.",
};

export const ESTAR_SER_PARTICIPLE: LessonTable = {
  caption: "Is closed, or was closed?",
  head: ["Estar: the result", "Ser: the action"],
  rows: [
    ["La puerta está cerrada.", "La puerta fue cerrada a las diez."],
    ["El trabajo está hecho.", "El trabajo fue hecho por Ana."],
    ["Las luces están apagadas.", "Las luces fueron apagadas."],
  ],
};

export const SER_ESTAR_ADVANCED: LessonTable = {
  caption: "Ser or estar: the meaning changes",
  head: ["Word", "With ser", "With estar"],
  rows: [
    ["listo", "clever", "ready"],
    ["aburrido", "boring", "bored"],
    ["rico", "rich", "tasty"],
    ["malo", "bad", "sick"],
    ["verde", "green", "unripe"],
    ["vivo", "sharp, lively", "alive"],
    ["atento", "polite", "paying attention"],
    ["seguro", "safe", "sure"],
  ],
};

export const HABER_ESTAR: LessonTable = {
  caption: "Hay or está?",
  head: ["", "Hay", "Está / están"],
  rows: [
    ["It answers", "Is there one?", "Where is it?"],
    ["Comes before", "un, una, dos, mucho, no article", "el, la, mi, a name"],
    ["Example", "Hay un banco en la plaza.", "El banco está en la plaza."],
    ["Past", "Había mucha gente.", "La gente estaba en la plaza."],
  ],
  note: "Había and hubo stay singular: Había muchos problemas, not Habían.",
};

export const CUYO: LessonTable = {
  caption: "Whose and which, in formal Spanish",
  head: ["Word", "Meaning", "Example"],
  rows: [
    ["cuyo, cuya, cuyos, cuyas", "whose", "El autor cuyo libro leí. La mujer cuyas hijas conozco."],
    ["el cual, la cual", "which, who (formal)", "La razón por la cual vine."],
    ["lo cual", "which (a whole idea)", "Llegó tarde, lo cual me molestó."],
  ],
  note: "Cuyo matches the thing owned, not the owner.",
};

export const CLEFT: LessonTable = {
  caption: "Putting the stress on one part",
  head: ["Stress on", "Pattern", "Example"],
  rows: [
    ["a person", "ser + person + quien", "Fue Ana quien lo dijo."],
    ["a thing", "lo que ... es", "Lo que quiero es descansar."],
    ["a place", "ser + place + donde", "Fue en Lima donde nos conocimos."],
    ["a time", "ser + time + cuando", "Fue ayer cuando llegó."],
    ["a way", "ser + así + como", "Es así como se hace."],
  ],
};

export const LO_QUE_ADJ: LessonTable = {
  caption: "How hard it is: lo + word + que",
  head: ["Spanish", "English"],
  rows: [
    ["No sabes lo difícil que es.", "You don't know how hard it is."],
    ["Mira lo altas que son.", "Look how tall they are."],
    ["Me sorprende lo bien que habla.", "I'm surprised how well she speaks."],
  ],
  note: "Lo never changes, but the describing word still matches: lo altas que son.",
};

export const LO_NEUTER: LessonTable = {
  caption: "Lo + describing word",
  head: ["Spanish", "English"],
  rows: [
    ["lo bueno", "the good thing"],
    ["lo mejor de todo", "the best part of all"],
    ["lo importante es...", "the important thing is..."],
    ["lo de ayer", "the matter from yesterday"],
    ["lo mío", "my thing, what's mine"],
  ],
  note: "Lo stands for an idea, never a person or a named thing.",
};

export const NOMINALIZATION: LessonTable = {
  caption: "Formal nouns from verbs",
  head: ["Verb", "Noun", "Ending"],
  rows: [
    ["llegar", "la llegada", "-ada"],
    ["aumentar", "el aumento", "-o"],
    ["crecer", "el crecimiento", "-miento"],
    ["reducir", "la reducción", "-ción"],
    ["decidir", "la decisión", "-sión"],
    ["probar", "la prueba", "-a"],
  ],
  note: "News and reports prefer the noun: Tras la llegada del presidente...",
};

export const GERUND_INFINITIVE: LessonTable = {
  caption: "-ndo form or whole verb?",
  head: ["Use", "Form", "Example"],
  rows: [
    ["as a noun (subject)", "whole verb", "Fumar es malo."],
    ["after a small word", "whole verb", "Antes de salir. Sin decir nada."],
    ["on doing something", "al + whole verb", "Al llegar, me llamó."],
    ["how, or while", "-ndo form", "Aprendí escuchando."],
  ],
  note: "English -ing is often the whole verb in Spanish: I like swimming = Me gusta nadar.",
};

export const PERIPHRASES: LessonTable = {
  caption: "Verb pairs that carry a meaning",
  head: ["Pair", "Meaning", "Example"],
  rows: [
    ["llevar + -ndo", "have been doing", "Llevo dos años estudiando."],
    ["seguir + -ndo", "keep doing", "Sigue lloviendo."],
    ["dejar de + verb", "stop doing", "Dejé de fumar."],
    ["ponerse a + verb", "start doing", "Se puso a llorar."],
    ["estar a punto de + verb", "be about to", "Estoy a punto de salir."],
    ["acabar + -ndo", "end up doing", "Acabó aceptando."],
  ],
};

export const PREP_VERBS: LessonTable = {
  caption: "Verbs that need a small word",
  head: ["Small word", "Verbs"],
  rows: [
    ["a", "empezar a, aprender a, ayudar a, atreverse a"],
    ["de", "acordarse de, depender de, tratar de, enamorarse de"],
    ["en", "pensar en, confiar en, insistir en, fijarse en"],
    ["con", "soñar con, contar con, casarse con"],
  ],
  note: "They often differ from English: dream of = soñar con; depend on = depender de.",
};

export const REDUNDANT_PRONOUNS: LessonTable = {
  caption: "Extra pronouns",
  head: ["Pattern", "Example", "Why"],
  rows: [
    ["a mí me, a ti te", "A mí me gusta.", "emphasis or contrast"],
    ["le ... a + person", "Le dije a Juan.", "normal, almost always there"],
    ["se lo ... a + person", "Se lo di a María.", "makes se clear"],
    ["thing first + lo / la", "El libro lo compré yo.", "needed when the thing goes first"],
  ],
};

export const SOFTENING: LessonTable = {
  caption: "Softer requests",
  head: ["Direct", "Softer"],
  rows: [
    ["Quiero un café.", "Quisiera un café."],
    ["¿Puedes ayudarme?", "¿Podrías ayudarme?"],
    ["Debes descansar.", "Deberías descansar."],
    ["Quiero pedirte algo.", "Quería pedirte algo."],
  ],
};

export const HECHO_DE_QUE: LessonTable = {
  caption: "The fact that",
  head: ["Pattern", "Example"],
  rows: [
    ["el hecho de que + wish form", "El hecho de que vengas me alegra."],
    ["que + wish form, at the start", "Que llegue tarde no me sorprende."],
    ["el que + wish form", "El que no conteste es raro."],
  ],
  note: "When it gives new information as a plain fact, the normal form is also used.",
};

export const DISCOURSE_MARKERS: LessonTable = {
  caption: "Joining words for essays",
  head: ["Job", "Words"],
  rows: [
    ["open", "en primer lugar, para empezar"],
    ["add", "además, asimismo, por otra parte"],
    ["contrast", "sin embargo, ahora bien, en cambio"],
    ["give a result", "por lo tanto, por consiguiente, de ahí que"],
    ["rephrase", "es decir, o sea, dicho de otro modo"],
    ["close", "en definitiva, en resumen, en conclusión"],
  ],
};

export const WORD_ORDER: LessonTable = {
  caption: "Word order for focus",
  head: ["Order", "Example", "Effect"],
  rows: [
    ["neutral", "Yo compré el libro.", "plain statement"],
    ["thing first + lo", "El libro lo compré yo.", "about the book; I'm the one who bought it"],
    ["subject last", "Lo dijo Ana.", "stress on who"],
    ["verb first", "Llegó el tren.", "normal for arrivals and events"],
  ],
};

export const IMPERSONAL: LessonTable = {
  caption: "Saying it without a person",
  head: ["Way", "Example"],
  rows: [
    ["se + él form", "Se vive bien aquí."],
    ["uno", "Uno nunca sabe."],
    ["hay que + whole verb", "Hay que estudiar."],
    ["they (ellos form)", "Dicen que va a llover."],
    ["tú, in general", "Si no duermes, no rindes."],
  ],
};

export const TRICKY_PAIRS: LessonTable = {
  caption: "Tricky verb pairs",
  head: ["Pair", "First", "Second"],
  rows: [
    ["pedir / preguntar", "ask for something", "ask a question"],
    ["llevar / traer", "take (there)", "bring (here)"],
    ["ir / venir", "go (there)", "come (here)"],
    ["saber / conocer", "know a fact", "know a person or place"],
    ["salir / dejar", "go out, leave a place", "leave something behind"],
    ["tocar / jugar", "play an instrument", "play a game"],
  ],
};

export const AUGMENTATIVES: LessonTable = {
  caption: "Big and rough endings",
  head: ["Ending", "Meaning", "Example"],
  rows: [
    ["-ón, -ona", "big", "un hombrón, una casona"],
    ["-azo", "big, or a blow", "un golazo, un portazo"],
    ["-ote, -ota", "big and clumsy", "un grandote, una palabrota"],
    ["-ucho, -ucha", "poor quality", "una casucha, un cuartucho"],
  ],
  note: "These carry feeling. The tone decides if it's praise or an insult.",
};

export const NARRATIVE_TENSES: LessonTable = {
  caption: "Tenses in storytelling",
  head: ["Tense", "Job in a story", "Example"],
  rows: [
    ["finished past", "the events", "Entró y cerró la puerta."],
    ["background past", "the scene", "Llovía y no había nadie."],
    ["had done", "before the story", "Había vivido allí de niño."],
    ["present, for the past", "makes it vivid", "En 1492 Colón llega a América."],
    ["would", "the future, seen from the past", "Años después volvería."],
  ],
};

export const ADDRESS: LessonTable = {
  caption: "Tú, usted and vos",
  head: ["Form", "Where and with whom", "Example"],
  rows: [
    ["tú", "friends and family, most countries", "Tú tienes razón."],
    ["usted", "respect and distance, everywhere", "Usted tiene razón."],
    ["vos", "friends, in Argentina, Uruguay and parts of Central America", "Vos tenés razón."],
    ["ustedes", "any group, all of Latin America", "Ustedes tienen razón."],
  ],
  note: "Vos forms: tenés, sabés, querés, sos. Commands: vení, decime.",
};

export const VOSOTROS: LessonTable = {
  caption: "Spain's vosotros (to recognise)",
  head: ["Tense", "-ar", "-er / -ir"],
  rows: [
    ["present", "habláis", "coméis / vivís"],
    ["finished past", "hablasteis", "comisteis / vivisteis"],
    ["wish form", "habléis", "comáis / viváis"],
    ["command", "hablad", "comed / vivid"],
    ["pronouns", "os, vuestro, vuestra", ""],
  ],
  note: "Used in Spain for a group of friends. Latin America says ustedes.",
};

export const LITERARY_FORMS: LessonTable = {
  caption: "Old and legal forms (to recognise)",
  head: ["Form", "Looks like", "Today you'd say"],
  rows: [
    ["future wish form", "sea quien fuere", "sea quien sea"],
    ["future wish form", "el que hiciere", "el que haga"],
    ["past before the past", "apenas hubo llegado", "apenas llegó"],
    ["-se past wish form", "si tuviese", "si tuviera"],
  ],
  note: "You'll meet these in laws, proverbs and old books. You don't need to produce them.",
};

/** The tables each concept's lessons share. */
export const CONCEPT_TABLES: Record<string, LessonTable[]> = {
  "subject-pronouns": [SER, TU_USTED],
  gender: [GENDER_ENDINGS],
  plurals: [PLURALS],
  articles: [ARTICLES],
  ser: [SER],
  estar: [ESTAR],
  "ser-vs-estar": [SER_OR_ESTAR, SER_ESTAR_MEANING],
  hay: [HAY],
  "adjective-agreement": [ADJ_FORMS],
  "adjective-position": [ADJ_PLACE],
  negation: [NEGATION],
  "possessive-adjectives": [POSSESSIVES],
  demonstratives: [DEMONSTRATIVES],
  "stem-e-ie": [STEM_E_IE],
  "stem-o-ue": [STEM_O_UE],
  "stem-e-i": [STEM_E_I],
  "yo-irregulars": [YO_IRREGULARS],
  "saber-conocer": [SABER_CONOCER],
  modals: [MODALS],
  gustar: [GUSTAR],
  prepositions: [PREPOSITIONS],
  "personal-a": [PERSONAL_A],
  "muy-mucho": [MUY_MUCHO],
  "present-progressive": [PROGRESSIVE],
  "preterite-regular": [PRETERITE_REGULAR],
  "preterite-spelling": [PRETERITE_SPELLING],
  "preterite-irregular": [PRETERITE_IRREGULAR],
  "preterite-stem": [PRETERITE_STEM],
  imperfect: [IMPERFECT],
  "preterite-vs-imperfect": [PRET_VS_IMP],
  "past-meaning-change": [PAST_MEANING],
  "past-progressive": [PAST_PROGRESSIVE],
  "present-perfect": [PRESENT_PERFECT],
  "irregular-participles": [PARTICIPLES],
  "direct-object-pronouns": [DIRECT_OBJECT],
  "indirect-object-pronouns": [INDIRECT_OBJECT],
  "double-object-pronouns": [DOUBLE_OBJECT],
  "pronoun-placement": [PRONOUN_PLACE],
  reflexive: [REFLEXIVE],
  "se-meaning-change": [SE_MEANING],
  comparisons: [COMPARISONS],
  superlatives: [SUPERLATIVES],
  "irregular-comparatives": [IRREG_COMPARATIVES],
  future: [FUTURE],
  "por-para": [POR_PARA],
  "indefinites-negatives": [INDEFINITES],
  "mente-adverbs": [MENTE],
  "tu-commands": [TU_COMMANDS],
  "hace-time": [HACE_TIME],
  "acabar-volver-soler": [ACABAR_VOLVER_SOLER],
  "possessive-pronouns": [POSSESSIVE_PRONOUNS],
  diminutives: [DIMINUTIVES],
  "relatives-basic": [RELATIVES_BASIC],
  "diacritic-accents": [DIACRITICS],
  "subjunctive-regular": [SUBJ_REGULAR],
  "subjunctive-irregular": [SUBJ_IRREGULAR],
  "subjunctive-wishes": [SUBJ_WISHES],
  "subjunctive-emotion": [SUBJ_EMOTION],
  "subjunctive-doubt": [SUBJ_DOUBT],
  "subjunctive-impersonal": [SUBJ_IMPERSONAL],
  "infinitive-vs-que": [INF_VS_QUE],
  "usted-commands": [USTED_COMMANDS],
  "negative-commands": [NEGATIVE_COMMANDS],
  "nosotros-commands": [NOSOTROS_COMMANDS],
  "commands-pronouns": [COMMANDS_PRONOUNS],
  conditional: [CONDITIONAL],
  "si-real": [SI_REAL],
  pluperfect: [PLUPERFECT],
  "future-conditional-perfect": [FUTURE_COND_PERFECT],
  probability: [PROBABILITY],
  "se-passive-impersonal": [SE_PASSIVE],
  "se-accidental": [SE_ACCIDENTAL],
  "subjunctive-adjective": [SUBJ_ADJECTIVE],
  "subjunctive-purpose": [SUBJ_PURPOSE],
  "subjunctive-time": [SUBJ_TIME],
  "relatives-prepositions": [RELATIVES_PREP],
  "present-perfect-subjunctive": [PERFECT_SUBJ],
  "imperfect-subjunctive": [IMPERFECT_SUBJ],
  "sequence-of-tenses": [SEQUENCE],
  "si-unreal": [SI_UNREAL],
  "como-si": [COMO_SI],
  "reported-speech": [REPORTED_SPEECH],
  "verbs-of-change": [VERBS_OF_CHANGE],
  connectors: [CONNECTORS],
  "si-past-unreal": [SI_PAST_UNREAL],
  "si-mixed": [SI_MIXED],
  aunque: [AUNQUE],
  "por-mucho-que": [POR_MUCHO_QUE],
  "universal-concessives": [UNIVERSAL_CONCESSIVES],
  "reported-questions-orders": [REPORTED_ORDERS],
  "passive-ser": [PASSIVE_SER],
  "estar-ser-participle": [ESTAR_SER_PARTICIPLE],
  "ser-estar-meaning": [SER_ESTAR_ADVANCED],
  "haber-estar": [HABER_ESTAR],
  "cuyo-el-cual": [CUYO],
  "cleft-emphasis": [CLEFT],
  "lo-que-adjective": [LO_QUE_ADJ],
  "lo-neuter": [LO_NEUTER],
  nominalization: [NOMINALIZATION],
  "gerund-infinitive": [GERUND_INFINITIVE],
  periphrases: [PERIPHRASES],
  "prepositional-verbs": [PREP_VERBS],
  "redundant-pronouns": [REDUNDANT_PRONOUNS],
  "softening-subjunctive": [SOFTENING],
  "el-hecho-de-que": [HECHO_DE_QUE],
  "discourse-markers": [DISCOURSE_MARKERS],
  "word-order-focus": [WORD_ORDER],
  impersonal: [IMPERSONAL],
  "tricky-verb-pairs": [TRICKY_PAIRS],
  augmentatives: [AUGMENTATIVES],
  "narrative-tenses": [NARRATIVE_TENSES],
  "tu-usted-vos": [ADDRESS],
  vosotros: [VOSOTROS],
  "literary-forms": [LITERARY_FORMS],
  "numbers-time": [NUMBERS_BUILD, CLOCK, DATES],
  "present-ar": [AR_ENDINGS],
  "present-er-ir": [ER_IR_ENDINGS],
  questions: [QUESTION_WORDS, WHERE_WORDS],
  tener: [TENER, TENER_PHRASES],
  "ir-a": [IR, IR_A],
};
