// Synced from cheneygross-afk/lengo:src/lib/grammar/guides-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";

export const A1_GUIDES: GrammarGuide[] = [
  {
    slug: "spanish-subject-pronouns",
    title: "Spanish Subject Pronouns: Yo, Tú, Usted and When to Drop Them",
    metaTitle: "Spanish Subject Pronouns (Yo, Tú, Usted, Vosotros) Explained",
    description:
      "Learn the Spanish subject pronouns, the difference between tú, usted, vosotros and ustedes, and why native speakers usually leave the pronoun out.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Subject pronouns are the words for I, you, he, she, we and they. Spanish has more of them than English because it has several ways to say \"you,\" depending on how many people you are talking to and how formal the situation is.",
      "The other surprise for English speakers is that Spanish usually leaves the pronoun out. The verb ending already tells you who is doing the action, so hablo on its own means \"I speak.\"",
    ],
    sections: [
      {
        heading: "The full set",
        body: [
          "Here are the subject pronouns with the present tense of ser (to be), so you can see how each one pairs with its verb form.",
        ],
        table: {
          headers: ["Person", "Pronoun", "English", "ser"],
          rows: [
            ["1st singular", "yo", "I", "soy"],
            ["2nd singular, informal", "tú (vos)", "you", "eres (sos)"],
            ["2nd singular, formal", "usted", "you", "es"],
            ["3rd singular", "él / ella", "he / she", "es"],
            ["1st plural", "nosotros / nosotras", "we", "somos"],
            ["2nd plural, informal (Spain)", "vosotros / vosotras", "you all", "sois"],
            ["2nd plural", "ustedes", "you all", "son"],
            ["3rd plural", "ellos / ellas", "they", "son"],
          ],
        },
        examples: [
          { es: "Yo soy estudiante y ella es profesora.", en: "I'm a student and she's a teacher." },
          { es: "Nosotras somos de Colombia.", en: "We (all women) are from Colombia." },
          { es: "Ellos son mis primos.", en: "They're my cousins." },
        ],
      },
      {
        heading: "Tú or usted? Vosotros or ustedes?",
        body: [
          "Use tú with friends, family, children and people your age in relaxed settings. Use usted with strangers, older people, customers and anyone you want to show respect to. Usted takes the same verb form as él and ella.",
          "In the plural, Spain uses vosotros for a group of friends and ustedes for a formal group. Latin America uses ustedes for every group, friendly or formal. Both are correct; pick the one that matches the Spanish you hear most.",
          "In Argentina, Uruguay and much of Central America, vos replaces tú. See the voseo guide for its verb forms.",
        ],
        examples: [
          { es: "¿Tú tienes hermanos?", en: "Do you have brothers and sisters? (to a friend)" },
          { es: "¿Usted tiene una reserva?", en: "Do you have a reservation? (to a customer)" },
          { es: "¿Vosotros sois de aquí?", en: "Are you all from here? (Spain, informal)" },
          { es: "¿Ustedes son de aquí?", en: "Are you all from here? (Latin America, or formal in Spain)" },
        ],
      },
      {
        heading: "Dropping the pronoun",
        body: [
          "Because each verb form is different, Spanish speakers normally drop the subject pronoun. Saying it every time sounds heavy, a bit like saying \"I, I went to the shop\" in English.",
          "Keep the pronoun when you want to contrast people, add emphasis, or avoid confusion between forms that look the same (usted, él and ella all share es).",
        ],
        examples: [
          { es: "Hablo español y trabajo en un banco.", en: "I speak Spanish and I work in a bank." },
          { es: "Yo trabajo, pero él no.", en: "I work, but he doesn't. (contrast)" },
          { es: "¿Y usted? ¿De dónde es?", en: "And you? Where are you from? (clarity)" },
        ],
      },
      {
        heading: "\"It\" has no pronoun",
        body: [
          "Spanish has no subject pronoun for \"it.\" Just use the verb: Es interesante (It's interesting), Llueve (It's raining). Never translate \"it\" as ello or lo at the start of a sentence.",
        ],
        examples: [
          { es: "Es muy caro.", en: "It's very expensive." },
          { es: "Hace frío.", en: "It's cold." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Yo soy Ana. Yo soy de Perú. Yo tengo veinte años.",
        right: "Soy Ana. Soy de Perú. Tengo veinte años.",
        why: "Repeating yo in every sentence sounds unnatural. The verb ending already says who.",
      },
      {
        wrong: "Él es lloviendo.",
        right: "Está lloviendo.",
        why: "There's no pronoun for \"it\" in Spanish, and the progressive uses estar.",
      },
      {
        wrong: "¿Usted eres de Madrid?",
        right: "¿Usted es de Madrid?",
        why: "Usted means \"you\" but takes the third-person verb form, like él and ella.",
      },
    ],
    faqs: [
      {
        q: "Do I need to learn vosotros?",
        a: "If you'll spend time in Spain, yes: it's used all the time there. If you're learning Latin American Spanish, you only need to recognize it; ustedes covers every group.",
      },
      {
        q: "Is it rude to use tú with a stranger?",
        a: "It depends on the country and the setting. Young people and informal places lean toward tú, especially in Spain. When in doubt, start with usted and switch if the other person uses tú with you.",
      },
      {
        q: "What's the difference between nosotros and nosotras?",
        a: "Nosotras is for a group made only of women. Any mixed group uses nosotros. The same goes for vosotros/vosotras and ellos/ellas.",
      },
    ],
    related: ["ser-vs-estar", "present-tense-regular-verbs", "register-and-politeness"],
  },
  {
    slug: "spanish-articles-and-gender",
    title: "Spanish Articles and Noun Gender: El, La, Un, Una",
    metaTitle: "Spanish Noun Gender and Articles (El, La, Los, Las, Un, Una)",
    description:
      "How to tell if a Spanish noun is masculine or feminine, when to use el, la, los, las, un and una, how plurals work, and the exceptions that trip learners up.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Every Spanish noun is either masculine or feminine, even nouns for objects and ideas. The gender decides which article you use (el or la, un or una) and the form of any adjective that goes with it.",
      "Gender is a grammatical category, not a statement about the thing itself. The trick is to learn every noun together with its article: not mesa, but la mesa.",
    ],
    sections: [
      {
        heading: "The articles",
        body: [
          "Spanish has definite articles (the) and indefinite articles (a, an, some). Both change for gender and number.",
        ],
        table: {
          headers: ["", "Masculine", "Feminine"],
          rows: [
            ["the (singular)", "el libro", "la casa"],
            ["the (plural)", "los libros", "las casas"],
            ["a / an", "un libro", "una casa"],
            ["some", "unos libros", "unas casas"],
          ],
        },
        examples: [
          { es: "El perro y la gata duermen.", en: "The dog and the cat are sleeping." },
          { es: "Tengo unos amigos en Quito.", en: "I have some friends in Quito." },
        ],
      },
      {
        heading: "How to guess the gender",
        body: [
          "Most nouns ending in -o are masculine and most ending in -a are feminine. Nouns ending in -ción, -sión, -dad, -tad, -tud and -umbre are feminine. Nouns ending in -aje, -or and -ma (from Greek) are usually masculine.",
          "The big exceptions are worth memorizing early: el día, el mapa, el problema, el idioma, el sistema, el planeta are masculine; la mano, la foto, la moto, la radio are feminine.",
        ],
        examples: [
          { es: "la canción, la ciudad, la libertad", en: "the song, the city, freedom (feminine endings)" },
          { es: "el viaje, el color, el tema", en: "the trip, the color, the topic (masculine)" },
          { es: "Buenos días.", en: "Good morning. (día is masculine)" },
          { es: "Me duele la mano.", en: "My hand hurts. (mano is feminine)" },
        ],
      },
      {
        heading: "Making nouns plural",
        body: [
          "Add -s to a noun ending in a vowel and -es to a noun ending in a consonant. A final -z becomes -ces. Some words gain or lose a written accent in the plural to keep their stress: joven becomes jóvenes, canción becomes canciones.",
        ],
        examples: [
          { es: "el gato → los gatos", en: "the cat → the cats" },
          { es: "la flor → las flores", en: "the flower → the flowers" },
          { es: "el lápiz → los lápices", en: "the pencil → the pencils" },
          { es: "la lección → las lecciones", en: "the lesson → the lessons" },
        ],
      },
      {
        heading: "El agua, but las aguas",
        body: [
          "Feminine nouns that start with a stressed a- or ha- take el and un in the singular, simply because la agua would be hard to say. They are still feminine: adjectives stay feminine, and the plural goes back to las.",
          "Two contractions are compulsory: a + el becomes al, and de + el becomes del. (They don't happen with the pronoun él or with names like El Salvador.)",
        ],
        examples: [
          { es: "El agua está fría.", en: "The water is cold. (feminine adjective)" },
          { es: "Tengo un hambre terrible.", en: "I'm terribly hungry." },
          { es: "Vamos al parque.", en: "We're going to the park." },
          { es: "Es la casa del profesor.", en: "It's the teacher's house." },
        ],
      },
      {
        heading: "When Spanish uses the article and English doesn't",
        body: [
          "Spanish uses the definite article for things in general, for days of the week (on Monday), for titles when talking about someone (el señor García) and with body parts and clothes where English uses \"my.\"",
          "It leaves out un/una with professions, nationality and religion after ser: Soy profesora, not Soy una profesora.",
        ],
        examples: [
          { es: "Me gusta el café.", en: "I like coffee (in general)." },
          { es: "Tengo clase el lunes.", en: "I have class on Monday." },
          { es: "El doctor Pérez no está.", en: "Dr. Pérez isn't in." },
          { es: "Me lavo las manos.", en: "I wash my hands." },
          { es: "Mi madre es abogada.", en: "My mother is a lawyer." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "la problema",
        right: "el problema",
        why: "Many nouns ending in -ma come from Greek and are masculine: el problema, el tema, el sistema.",
      },
      {
        wrong: "Soy un estudiante.",
        right: "Soy estudiante.",
        why: "Drop un/una with a bare profession or role after ser. Add it only when there's an adjective: Es un estudiante excelente.",
      },
      {
        wrong: "Voy a el mercado.",
        right: "Voy al mercado.",
        why: "a + el always contracts to al, and de + el to del.",
      },
      {
        wrong: "El agua está frío.",
        right: "El agua está fría.",
        why: "Agua takes el only for pronunciation. It's feminine, so the adjective is feminine.",
      },
    ],
    faqs: [
      {
        q: "Is there a rule that works for every noun?",
        a: "No. The endings above cover most nouns, but you'll always meet exceptions. Learning each noun with its article (la mano, el mapa) is the only fully reliable method.",
      },
      {
        q: "What about nouns for people, like estudiante?",
        a: "Nouns ending in -ista or -nte often keep the same form and change only the article: el/la estudiante, el/la turista, el/la artista.",
      },
      {
        q: "Why do I sometimes see \"lo\" before an adjective?",
        a: "Lo is the neuter article. Lo bueno means \"the good thing\" or \"what's good.\" It never goes before a noun.",
      },
    ],
    related: ["spanish-adjective-agreement", "spanish-demonstratives", "spanish-possessives"],
  },
  {
    slug: "spanish-adjective-agreement",
    title: "Spanish Adjective Agreement and Position",
    metaTitle: "Spanish Adjective Agreement: Gender, Number and Word Order",
    description:
      "Spanish adjectives change to match their noun. Learn the agreement patterns, where adjectives go, why buen and gran get shortened, and the meaning changes with position.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "In Spanish, an adjective matches the noun it describes in gender (masculine or feminine) and number (singular or plural). A red car is un coche rojo; red houses are unas casas rojas.",
      "Adjectives also usually come after the noun, the opposite of English. A handful go in front, and a few change meaning depending on where you put them.",
    ],
    sections: [
      {
        heading: "The four forms",
        body: [
          "Adjectives ending in -o have four forms. Adjectives ending in -e or a consonant usually have two, one singular and one plural. Nationality adjectives ending in a consonant add -a for the feminine.",
        ],
        table: {
          headers: ["Ending", "Masc. sing.", "Fem. sing.", "Masc. pl.", "Fem. pl."],
          rows: [
            ["-o", "alto", "alta", "altos", "altas"],
            ["-e", "grande", "grande", "grandes", "grandes"],
            ["consonant", "azul", "azul", "azules", "azules"],
            ["nationality", "español", "española", "españoles", "españolas"],
            ["-dor", "trabajador", "trabajadora", "trabajadores", "trabajadoras"],
          ],
        },
        examples: [
          { es: "un chico alto, una chica alta", en: "a tall boy, a tall girl" },
          { es: "unos zapatos azules", en: "some blue shoes" },
          { es: "Mi amiga es inglesa.", en: "My friend is English." },
        ],
      },
      {
        heading: "Mixed groups and several nouns",
        body: [
          "When an adjective describes a group of masculine and feminine nouns together, use the masculine plural.",
        ],
        examples: [
          { es: "Mis padres son simpáticos.", en: "My parents are nice." },
          { es: "La falda y el abrigo son nuevos.", en: "The skirt and the coat are new." },
        ],
      },
      {
        heading: "Where adjectives go",
        body: [
          "Descriptive adjectives (color, shape, nationality, most qualities) go after the noun. Numbers, quantities and possessives go before it: dos, muchos, poco, mi, este.",
          "Bueno, malo, primero, tercero and alguno/ninguno drop their final -o before a masculine singular noun: buen, mal, primer, tercer, algún, ningún. Grande becomes gran before any singular noun.",
        ],
        examples: [
          { es: "una camisa blanca", en: "a white shirt" },
          { es: "muchas personas", en: "many people" },
          { es: "Es un buen libro.", en: "It's a good book." },
          { es: "el primer día", en: "the first day" },
          { es: "una gran idea", en: "a great idea" },
        ],
      },
      {
        heading: "Adjectives that change meaning with position",
        body: [
          "A few common adjectives mean one thing after the noun (their literal meaning) and another before it (a more subjective or figurative one).",
        ],
        examples: [
          { es: "un hombre grande / un gran hombre", en: "a big man / a great man" },
          { es: "un coche viejo / un viejo amigo", en: "an old car / a long-time friend" },
          { es: "una familia pobre / ¡Pobre familia!", en: "a poor (not rich) family / Poor (unlucky) family!" },
          { es: "un piso nuevo / un nuevo piso", en: "a brand-new flat / a different flat (new to me)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "las casas blanco",
        right: "las casas blancas",
        why: "The adjective must match the noun: feminine plural.",
      },
      {
        wrong: "un bueno día",
        right: "un buen día",
        why: "Bueno drops the -o before a masculine singular noun.",
      },
      {
        wrong: "una roja camisa",
        right: "una camisa roja",
        why: "Colors go after the noun.",
      },
    ],
    faqs: [
      {
        q: "Do adjectives ending in -ista change for gender?",
        a: "No. Optimista, realista and similar words are the same for both genders: un chico optimista, una chica optimista.",
      },
      {
        q: "Can any adjective go before the noun?",
        a: "Many can, especially in writing, where it adds a subjective or poetic tone (la hermosa ciudad). As a learner, put descriptive adjectives after the noun and you'll almost always be right.",
      },
    ],
    related: ["spanish-articles-and-gender", "ser-vs-estar", "comparisons-and-superlatives"],
  },
  {
    slug: "present-tense-regular-verbs",
    title: "The Spanish Present Tense: Regular -AR, -ER and -IR Verbs",
    metaTitle: "Spanish Present Tense Conjugation: Regular Verbs Chart",
    description:
      "Conjugate regular -ar, -er and -ir verbs in the Spanish present tense, with charts, examples, and the many English meanings the present can carry.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Spanish verbs are grouped by the last two letters of the infinitive: -ar (hablar), -er (comer) and -ir (vivir). To conjugate a regular verb, remove that ending and add the ending for the person doing the action.",
      "The present tense covers more ground than in English. Hablo can mean \"I speak,\" \"I'm speaking,\" \"I do speak,\" and even \"I'll speak\" for a near, planned future.",
    ],
    sections: [
      {
        heading: "The endings",
        body: [
          "-er and -ir verbs share every ending except nosotros and vosotros.",
        ],
        table: {
          headers: ["", "hablar", "comer", "vivir"],
          rows: [
            ["yo", "hablo", "como", "vivo"],
            ["tú", "hablas", "comes", "vives"],
            ["él / ella / usted", "habla", "come", "vive"],
            ["nosotros", "hablamos", "comemos", "vivimos"],
            ["vosotros", "habláis", "coméis", "vivís"],
            ["ellos / ustedes", "hablan", "comen", "viven"],
          ],
        },
        examples: [
          { es: "Trabajo en una oficina.", en: "I work in an office." },
          { es: "¿Comes carne?", en: "Do you eat meat?" },
          { es: "Mis abuelos viven en el campo.", en: "My grandparents live in the country." },
          { es: "Escribimos muchos correos.", en: "We write a lot of emails." },
        ],
      },
      {
        heading: "What the present tense can mean",
        body: [
          "Use it for habits and facts, for what's happening now, and for arrangements in the near future, especially with a time word. English \"do/does\" in questions and negatives has no Spanish equivalent: just use the verb.",
        ],
        examples: [
          { es: "Siempre desayuno a las ocho.", en: "I always have breakfast at eight." },
          { es: "¿Qué haces? — Leo un libro.", en: "What are you doing? — I'm reading a book." },
          { es: "Mañana llamo a mi madre.", en: "I'll call my mother tomorrow." },
          { es: "No bebo café.", en: "I don't drink coffee." },
        ],
      },
      {
        heading: "Questions and negatives",
        body: [
          "Make a verb negative by putting no in front of it. Make a yes/no question with rising intonation, and in writing with ¿ at the start and ? at the end. The subject can move after the verb, but it doesn't have to.",
        ],
        examples: [
          { es: "No hablo alemán.", en: "I don't speak German." },
          { es: "¿Tu hermano estudia medicina?", en: "Does your brother study medicine?" },
          { es: "¿Estudia medicina tu hermano?", en: "Does your brother study medicine?" },
        ],
      },
      {
        heading: "Spelling changes that keep the sound",
        body: [
          "A few regular verbs change a letter in the yo form only to keep the pronunciation: coger → cojo, escoger → escojo, seguir → sigo, convencer → convenzo. Verbs ending in -uir add y: construir → construyo, construyes.",
        ],
        examples: [
          { es: "Escojo el rojo.", en: "I'll choose the red one." },
          { es: "Construyen una casa.", en: "They're building a house." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "¿Do tú hablas inglés? / ¿Hablas tú inglés, sí?",
        right: "¿Hablas inglés?",
        why: "There's no helper verb like \"do\" in Spanish questions. The verb alone, with question intonation, is enough.",
      },
      {
        wrong: "Estoy trabajo aquí.",
        right: "Trabajo aquí.",
        why: "\"I work here\" is a simple present. Don't add estar unless you mean \"I'm working (right now)\": Estoy trabajando.",
      },
      {
        wrong: "Nosotros vivemos en Lima.",
        right: "Nosotros vivimos en Lima.",
        why: "-ir verbs use -imos for nosotros; -er verbs use -emos.",
      },
    ],
    faqs: [
      {
        q: "How do I know if a verb is regular?",
        a: "You can't tell from the infinitive alone. Most -ar verbs are regular, and dictionaries and verb tables mark the irregular ones. The most common verbs (ser, estar, tener, ir, hacer) are irregular, so they get their own guide.",
      },
      {
        q: "Can I use the present for the future?",
        a: "Yes, for plans and arrangements, usually with a time expression: El tren sale a las cinco. Ir a + infinitive and the future tense are also available.",
      },
    ],
    related: ["stem-changing-verbs", "irregular-present-tense-verbs", "present-progressive"],
  },
  {
    slug: "stem-changing-verbs",
    title: "Stem-Changing Verbs in Spanish (e→ie, o→ue, e→i)",
    metaTitle: "Spanish Stem-Changing Verbs: e→ie, o→ue, e→i With Charts",
    description:
      "Learn how Spanish stem-changing (\"boot\") verbs like querer, poder and pedir work in the present tense, which forms change, and the most common verbs in each group.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Some Spanish verbs have regular endings but change a vowel in their stem when that vowel is stressed. Querer becomes quiero, poder becomes puedo, pedir becomes pido.",
      "The change happens in every present-tense form except nosotros and vosotros, because in those two the stress falls on the ending. Draw a line around the changing forms in a conjugation table and you get the shape of a boot, which is why teachers call them boot verbs.",
    ],
    sections: [
      {
        heading: "The three groups",
        body: [
          "The endings are regular. Only the stressed stem vowel changes.",
        ],
        table: {
          headers: ["", "querer (e→ie)", "poder (o→ue)", "pedir (e→i)"],
          rows: [
            ["yo", "quiero", "puedo", "pido"],
            ["tú", "quieres", "puedes", "pides"],
            ["él / ella / usted", "quiere", "puede", "pide"],
            ["nosotros", "queremos", "podemos", "pedimos"],
            ["vosotros", "queréis", "podéis", "pedís"],
            ["ellos / ustedes", "quieren", "pueden", "piden"],
          ],
        },
      },
      {
        heading: "Common verbs in each group",
        body: [
          "e→ie: querer, pensar, empezar, entender, preferir, cerrar, sentir, perder, despertarse.",
          "o→ue: poder, dormir, volver, encontrar, contar, costar, recordar, acostarse, morir. Jugar is the one u→ue verb: juego, juegas, juega, jugamos.",
          "e→i (only -ir verbs): pedir, servir, repetir, seguir, vestirse, decir (which is also irregular in the yo form: digo).",
        ],
        examples: [
          { es: "Empiezo a trabajar a las nueve.", en: "I start work at nine." },
          { es: "¿Cuánto cuesta este libro?", en: "How much does this book cost?" },
          { es: "Duermo ocho horas.", en: "I sleep eight hours." },
          { es: "Los niños juegan en el parque.", en: "The children play in the park." },
          { es: "Siempre pido la sopa.", en: "I always order the soup." },
        ],
      },
      {
        heading: "Nosotros and vosotros stay regular",
        body: [
          "The unstressed stem keeps its original vowel. This is the part learners forget most.",
        ],
        examples: [
          { es: "Podemos ir mañana.", en: "We can go tomorrow." },
          { es: "¿Queréis venir?", en: "Do you all want to come?" },
          { es: "Volvemos a casa a las diez.", en: "We get back home at ten." },
        ],
      },
      {
        heading: "The change shows up in other tenses too",
        body: [
          "The same stem change appears in the present subjunctive (quiera, pueda, pida) and in commands (cierra, vuelve, pide). -ir stem-changers also change in the preterite third person (durmió, pidieron) and in the gerund (durmiendo, pidiendo).",
        ],
        examples: [
          { es: "Cierra la puerta, por favor.", en: "Close the door, please." },
          { es: "El bebé está durmiendo.", en: "The baby is sleeping." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Nosotros pueden / Nosotros puedemos",
        right: "Nosotros podemos",
        why: "Nosotros and vosotros keep the original stem vowel.",
      },
      {
        wrong: "Yo jugo al fútbol.",
        right: "Yo juego al fútbol.",
        why: "Jugar changes u→ue in the stressed forms.",
      },
      {
        wrong: "Pensamos que el hotel cuesta poco, pero custa mucho.",
        right: "...pero cuesta mucho.",
        why: "Costar is an o→ue verb: cuesta, cuestan.",
      },
    ],
    faqs: [
      {
        q: "How can I tell if a verb changes its stem?",
        a: "You can't from the spelling (compare pensar, which changes, and pasar, which doesn't). Dictionaries often mark it as pensar (ie). Learn the common ones as a list; they're among the most frequent verbs in the language.",
      },
      {
        q: "Why is the change only in some forms?",
        a: "It only happens when the stem vowel is stressed. In podemos and podéis the stress moves to the ending, so the vowel stays o.",
      },
    ],
    related: ["present-tense-regular-verbs", "irregular-present-tense-verbs", "reflexive-verbs"],
  },
  {
    slug: "irregular-present-tense-verbs",
    title: "Irregular Present Tense Verbs: Ser, Ir, Tener, Hacer and the Yo-Go Verbs",
    metaTitle: "Spanish Irregular Verbs in the Present Tense (Ser, Ir, Tener, Hacer)",
    description:
      "The most common Spanish verbs are irregular. Learn ser, estar, ir, tener, hacer, decir, venir, the \"yo-go\" verbs, and the uses of hay, with charts and examples.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "The verbs you use most are the ones most likely to be irregular. That's no accident: frequent words resist the smoothing that makes rare ones regular.",
      "The good news is that the irregularities follow a few patterns. Many verbs are only irregular in the yo form, and several of those add a -g-: tengo, hago, pongo, salgo, vengo, digo.",
    ],
    sections: [
      {
        heading: "The four essentials",
        body: [
          "Ser and ir are completely irregular. Estar is irregular in yo and has accents elsewhere. Tener combines a yo-go form with an e→ie stem change.",
        ],
        table: {
          headers: ["", "ser", "estar", "ir", "tener"],
          rows: [
            ["yo", "soy", "estoy", "voy", "tengo"],
            ["tú", "eres", "estás", "vas", "tienes"],
            ["él / usted", "es", "está", "va", "tiene"],
            ["nosotros", "somos", "estamos", "vamos", "tenemos"],
            ["vosotros", "sois", "estáis", "vais", "tenéis"],
            ["ellos / ustedes", "son", "están", "van", "tienen"],
          ],
        },
      },
      {
        heading: "Yo-go verbs and other irregular yo forms",
        body: [
          "These verbs are regular except for yo (tener, venir and decir also change their stem): hacer → hago, poner → pongo, salir → salgo, traer → traigo, caer → caigo, oír → oigo, venir → vengo, decir → digo.",
          "Other verbs with only an irregular yo: saber → sé, dar → doy, ver → veo, conocer → conozco (and most verbs in -cer/-cir: conduzco, ofrezco, traduzco).",
        ],
        examples: [
          { es: "Hago la cena y pongo la mesa.", en: "I make dinner and set the table." },
          { es: "Salgo de casa a las siete.", en: "I leave the house at seven." },
          { es: "No sé la respuesta.", en: "I don't know the answer." },
          { es: "Conozco a su hermano.", en: "I know his brother." },
          { es: "Vengo del trabajo.", en: "I'm coming from work." },
        ],
      },
      {
        heading: "Expressions with tener, hacer and ir",
        body: [
          "Tener is used for many states that English expresses with \"to be\": age, hunger, thirst, cold, heat, fear, sleepiness, being in a hurry, being right. Tener que + infinitive means \"to have to.\"",
          "Hacer describes the weather. Ir a + infinitive talks about plans.",
        ],
        examples: [
          { es: "Tengo treinta años.", en: "I'm thirty years old." },
          { es: "¿Tienes hambre?", en: "Are you hungry?" },
          { es: "Tenemos que salir ya.", en: "We have to leave now." },
          { es: "Hace calor y hace sol.", en: "It's hot and sunny." },
          { es: "Voy a estudiar esta tarde.", en: "I'm going to study this afternoon." },
        ],
      },
      {
        heading: "Hay: there is, there are",
        body: [
          "Hay (from haber) means both \"there is\" and \"there are.\" It never changes for plural. Hay que + infinitive means \"one has to\" or \"you need to\" in general.",
        ],
        examples: [
          { es: "Hay un banco en la esquina.", en: "There's a bank on the corner." },
          { es: "Hay muchos turistas en verano.", en: "There are lots of tourists in summer." },
          { es: "Hay que reservar mesa.", en: "You need to book a table." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Soy veinte años. / Tengo veinte años viejo.",
        right: "Tengo veinte años.",
        why: "Age uses tener, and there's no word for \"old.\"",
      },
      {
        wrong: "Hacen muchos coches en la calle.",
        right: "Hay muchos coches en la calle.",
        why: "\"There are\" is hay, which never becomes plural.",
      },
      {
        wrong: "Yo hazo / Yo teno",
        right: "Yo hago / Yo tengo",
        why: "These are yo-go verbs: the yo form adds a -g-.",
      },
    ],
    faqs: [
      {
        q: "Is \"estoy calor\" or \"soy frío\" ever right?",
        a: "No. Feeling hot or cold is tener calor / tener frío. The weather is hace calor / hace frío. Estar caliente/frío describes objects (la sopa está fría).",
      },
      {
        q: "What's the difference between hay and está?",
        a: "Hay introduces something new or unspecified (Hay un libro en la mesa). Está locates something already known (El libro está en la mesa). See the hay vs. estar guide.",
      },
    ],
    related: ["hay-vs-estar", "stem-changing-verbs", "ser-vs-estar"],
  },
  {
    slug: "hay-vs-estar",
    title: "Hay vs. Está: \"There Is\" or \"It Is\"?",
    metaTitle: "Hay vs. Estar in Spanish: How to Say Where Things Are",
    description:
      "Hay means \"there is/there are\" and estar tells you where something is. Learn when to use each, why hay never goes with el or la, and the mistakes learners make.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Both hay and estar come up when you talk about where things are, and English speakers mix them up constantly. The rule is simple once you see it: hay introduces something, estar locates something you already know about.",
    ],
    sections: [
      {
        heading: "Hay: something exists, or something new",
        body: [
          "Use hay with a noun that is new to the conversation: a noun with un/una, a number, a quantity word like mucho or algún, or no article at all.",
        ],
        examples: [
          { es: "Hay una farmacia cerca de aquí.", en: "There's a pharmacy near here." },
          { es: "¿Hay leche en la nevera?", en: "Is there any milk in the fridge?" },
          { es: "En mi clase hay doce estudiantes.", en: "There are twelve students in my class." },
          { es: "No hay problema.", en: "There's no problem." },
        ],
      },
      {
        heading: "Estar: where a known thing is",
        body: [
          "Use estar with a specific noun: one with el/la, a possessive (mi, tu), a demonstrative (este), or a name. The verb agrees with the noun: está for one thing, están for several.",
        ],
        examples: [
          { es: "La farmacia está en la plaza.", en: "The pharmacy is in the square." },
          { es: "¿Dónde están mis llaves?", en: "Where are my keys?" },
          { es: "Lima está en Perú.", en: "Lima is in Peru." },
        ],
      },
      {
        heading: "Asking questions",
        body: [
          "¿Hay un...? asks whether something exists. ¿Dónde está el...? asks where a particular thing is. When you're looking for any bathroom, either works; when you know there is one, use estar.",
        ],
        examples: [
          { es: "¿Hay un cajero por aquí?", en: "Is there an ATM around here?" },
          { es: "¿Dónde está el cajero más cercano?", en: "Where's the nearest ATM?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Hay el museo en el centro.",
        right: "El museo está en el centro.",
        why: "El museo is a specific, known place, so it takes estar. Hay never goes with el/la/los/las.",
      },
      {
        wrong: "Está un restaurante en mi calle.",
        right: "Hay un restaurante en mi calle.",
        why: "A restaurant you're introducing for the first time takes hay.",
      },
      {
        wrong: "Hayn muchas personas.",
        right: "Hay muchas personas.",
        why: "Hay has one form for singular and plural.",
      },
    ],
    faqs: [
      {
        q: "What's the past of hay?",
        a: "Había for description (Había mucha gente, \"There were a lot of people\") and hubo for a single event (Hubo un accidente). The future is habrá.",
      },
      {
        q: "Can I say \"hay\" with a person?",
        a: "Yes, when you're introducing them: Hay un señor en la puerta (There's a man at the door). For a specific person, use estar: Tu padre está en la puerta.",
      },
    ],
    related: ["irregular-present-tense-verbs", "ser-vs-estar", "spanish-articles-and-gender"],
  },
  {
    slug: "spanish-demonstratives",
    title: "Spanish Demonstratives: Este, Ese and Aquel",
    metaTitle: "Este, Ese, Aquel: Spanish Demonstratives Explained",
    description:
      "Spanish has three words for \"this\" and \"that\": este, ese and aquel. Learn all their forms, when to use each, the neuter esto/eso/aquello, and the accent question.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "English has two demonstratives (this, that). Spanish has three distances: este (this, near me), ese (that, near you or not far) and aquel (that over there, far from both of us, or long ago).",
      "Like adjectives, they agree with the noun in gender and number.",
    ],
    sections: [
      {
        heading: "All the forms",
        body: [
          "Note that the masculine singular forms end in -e or -el, not -o.",
        ],
        table: {
          headers: ["", "this / these", "that / those", "that / those (over there)"],
          rows: [
            ["masc. singular", "este", "ese", "aquel"],
            ["fem. singular", "esta", "esa", "aquella"],
            ["masc. plural", "estos", "esos", "aquellos"],
            ["fem. plural", "estas", "esas", "aquellas"],
            ["neuter", "esto", "eso", "aquello"],
          ],
        },
        examples: [
          { es: "Este café está frío.", en: "This coffee is cold." },
          { es: "¿Me das esa revista?", en: "Can you give me that magazine (near you)?" },
          { es: "Aquellas montañas son los Andes.", en: "Those mountains (over there) are the Andes." },
        ],
      },
      {
        heading: "Ese or aquel?",
        body: [
          "In everyday speech, especially in Latin America, ese covers most of \"that\" and aquel is reserved for things clearly far away, or for the distant past.",
        ],
        examples: [
          { es: "En aquella época no había internet.", en: "Back in those days there was no internet." },
          { es: "Ese restaurante es muy bueno.", en: "That restaurant is very good." },
        ],
      },
      {
        heading: "Using them as pronouns",
        body: [
          "Drop the noun and the demonstrative stands in for it: este (this one), esa (that one). Older spelling put an accent on these (éste, ésa); the Real Academia no longer requires it, and most modern texts don't use it.",
        ],
        examples: [
          { es: "No quiero esta camisa, quiero esa.", en: "I don't want this shirt, I want that one." },
          { es: "¿Cuál prefieres, este o aquel?", en: "Which do you prefer, this one or that one over there?" },
        ],
      },
      {
        heading: "Esto, eso, aquello: for things with no name",
        body: [
          "The neuter forms refer to an idea, a situation, or an object you haven't identified. They never go before a noun and never take an accent.",
        ],
        examples: [
          { es: "¿Qué es esto?", en: "What's this?" },
          { es: "Eso es verdad.", en: "That's true." },
          { es: "Por eso no vine.", en: "That's why I didn't come." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "esto libro",
        right: "este libro",
        why: "Esto is neuter and never goes before a noun. Use este with a masculine noun.",
      },
      {
        wrong: "estes chicos",
        right: "estos chicos",
        why: "The masculine plural is estos, esos, aquellos.",
      },
      {
        wrong: "¿Qué es este?",
        right: "¿Qué es esto?",
        why: "When you don't know what something is, you can't know its gender, so use neuter esto.",
      },
    ],
    faqs: [
      {
        q: "Do I need the accent on éste and ése?",
        a: "No. Since 2010 the Real Academia recommends writing them without an accent. You'll still see it in older books.",
      },
      {
        q: "Is aquel old-fashioned?",
        a: "Not at all, but it's used less than ese in speech. It's common in stories and for anything far away in space or time.",
      },
    ],
    related: ["spanish-possessives", "spanish-articles-and-gender", "spanish-adjective-agreement"],
  },
  {
    slug: "spanish-possessives",
    title: "Spanish Possessives: Mi, Tu, Su and Mío, Tuyo, Suyo",
    metaTitle: "Spanish Possessive Adjectives and Pronouns (Mi, Mío, El Mío)",
    description:
      "How to say my, your, his, our and theirs in Spanish: the short forms (mi, tu, su), the long forms (mío, tuyo), possessive pronouns (el mío), and how to avoid confusion with su.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Spanish possessives agree with the thing owned, not with the owner. Mis libros means \"my books\" because libros is plural, even though there's one owner.",
      "There are two sets: short forms that go before the noun (mi casa) and long forms that go after it or stand alone (una amiga mía, es mía, la mía).",
    ],
    sections: [
      {
        heading: "Short forms: before the noun",
        body: [
          "Only nuestro and vuestro change for gender. The others change only for number.",
        ],
        table: {
          headers: ["Owner", "Singular noun", "Plural noun"],
          rows: [
            ["yo", "mi", "mis"],
            ["tú", "tu", "tus"],
            ["él / ella / usted", "su", "sus"],
            ["nosotros", "nuestro / nuestra", "nuestros / nuestras"],
            ["vosotros", "vuestro / vuestra", "vuestros / vuestras"],
            ["ellos / ustedes", "su", "sus"],
          ],
        },
        examples: [
          { es: "Mi hermana vive en Cali.", en: "My sister lives in Cali." },
          { es: "¿Dónde están tus zapatos?", en: "Where are your shoes?" },
          { es: "Nuestra casa es pequeña.", en: "Our house is small." },
        ],
      },
      {
        heading: "Long forms and possessive pronouns",
        body: [
          "The long forms are mío, tuyo, suyo, nuestro, vuestro, suyo, each with four endings (-o, -a, -os, -as). Use them after ser (Es mío), after a noun for emphasis or for \"of mine\" (un amigo mío), and with the article as pronouns meaning \"mine,\" \"yours\" and so on (el mío, la tuya).",
        ],
        examples: [
          { es: "Este abrigo es mío.", en: "This coat is mine." },
          { es: "Un amigo mío es piloto.", en: "A friend of mine is a pilot." },
          { es: "Mi coche es rojo; el tuyo es azul.", en: "My car is red; yours is blue." },
          { es: "Nuestras notas son buenas, pero las suyas son mejores.", en: "Our grades are good, but theirs are better." },
        ],
      },
      {
        heading: "Making su clear",
        body: [
          "Su can mean his, her, its, your (usted/ustedes) or their. Context usually makes it clear. When it doesn't, replace it with de + the owner: el libro de ella, la casa de ustedes.",
          "Spanish has no apostrophe-s. \"Maria's car\" is el coche de María.",
        ],
        examples: [
          { es: "Ana y Luis vienen con su perro.", en: "Ana and Luis are coming with their dog." },
          { es: "¿Es el coche de él o de ella?", en: "Is it his car or hers?" },
          { es: "Es la bicicleta de mi hermano.", en: "It's my brother's bike." },
        ],
      },
      {
        heading: "Body parts and clothes",
        body: [
          "With body parts and clothing, Spanish usually uses the article, not a possessive, because a reflexive or indirect pronoun already shows whose they are.",
        ],
        examples: [
          { es: "Me duele la cabeza.", en: "My head hurts." },
          { es: "Se puso el abrigo.", en: "He put on his coat." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "mi libros",
        right: "mis libros",
        why: "The possessive agrees with the noun owned (plural), not the owner.",
      },
      {
        wrong: "María's casa / la María casa",
        right: "la casa de María",
        why: "Spanish shows possession with de, not with an apostrophe.",
      },
      {
        wrong: "Me lavo mis manos.",
        right: "Me lavo las manos.",
        why: "The reflexive pronoun already shows whose hands they are.",
      },
    ],
    faqs: [
      {
        q: "Do tú (you) and tu (your) sound different?",
        a: "No, they sound the same. The accent only marks the pronoun in writing: tú tienes tu libro.",
      },
      {
        q: "Can I say \"es el mío\" or just \"es mío\"?",
        a: "Both. Es mío simply says who owns it. Es el mío picks it out from others: \"it's mine (not yours).\"",
      },
    ],
    related: ["spanish-demonstratives", "spanish-articles-and-gender", "prepositions-a-en-de-con"],
  },
  {
    slug: "spanish-question-words",
    title: "Spanish Question Words: Qué, Cuál, Dónde, Cuándo and More",
    metaTitle: "Spanish Question Words: Qué vs. Cuál and the Full List",
    description:
      "The Spanish question words with examples: qué, cuál, quién, dónde, adónde, cuándo, cómo, cuánto and por qué, plus how to choose between qué and cuál.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Spanish question words always carry a written accent: qué, quién, dónde. The accent doesn't change the sound; it tells you the word is asking something. The same words without an accent (que, donde, cuando) join clauses instead.",
      "Questions are written with an opening ¿ and a closing ?, and the verb usually comes straight after the question word.",
    ],
    sections: [
      {
        heading: "The full list",
        body: [
          "Quién, cuál and cuánto have plural forms (quiénes, cuáles, cuántos/cuántas).",
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["qué", "what", "¿Qué quieres?"],
            ["cuál / cuáles", "which, what", "¿Cuál es tu número?"],
            ["quién / quiénes", "who", "¿Quién es ella?"],
            ["dónde", "where", "¿Dónde vives?"],
            ["adónde", "where to", "¿Adónde vas?"],
            ["de dónde", "where from", "¿De dónde eres?"],
            ["cuándo", "when", "¿Cuándo llegas?"],
            ["cómo", "how", "¿Cómo te llamas?"],
            ["cuánto / cuánta", "how much", "¿Cuánto cuesta?"],
            ["cuántos / cuántas", "how many", "¿Cuántas hermanas tienes?"],
            ["por qué", "why", "¿Por qué no vienes?"],
          ],
        },
      },
      {
        heading: "Qué or cuál?",
        body: [
          "Before a noun, use qué: ¿Qué libro lees? Before ser, use cuál to ask for one item from a set of possibilities (a name, a number, a date, an address), and qué to ask for a definition.",
          "Before other verbs, qué asks in general and cuál asks you to choose between options you can see.",
        ],
        examples: [
          { es: "¿Cuál es tu apellido?", en: "What's your surname?" },
          { es: "¿Cuál es la capital de Chile?", en: "What's the capital of Chile?" },
          { es: "¿Qué es un apellido?", en: "What is a surname? (definition)" },
          { es: "¿Qué color te gusta?", en: "What color do you like?" },
          { es: "Hay dos. ¿Cuál prefieres?", en: "There are two. Which one do you prefer?" },
        ],
      },
      {
        heading: "Prepositions go first",
        body: [
          "English lets a preposition hang at the end (\"Who are you talking to?\"). Spanish never does: the preposition goes before the question word.",
        ],
        examples: [
          { es: "¿Con quién hablas?", en: "Who are you talking to?" },
          { es: "¿De qué habláis?", en: "What are you talking about?" },
          { es: "¿Para qué sirve esto?", en: "What's this for?" },
        ],
      },
      {
        heading: "Por qué, porque, el porqué",
        body: [
          "Por qué (two words, accent) asks why. Porque (one word, no accent) answers: because. El porqué (one word, accent) is a noun: the reason.",
        ],
        examples: [
          { es: "¿Por qué estudias español? — Porque me gusta.", en: "Why do you study Spanish? — Because I like it." },
          { es: "No entiendo el porqué.", en: "I don't understand the reason why." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "¿Qué es tu nombre?",
        right: "¿Cuál es tu nombre? / ¿Cómo te llamas?",
        why: "Asking for a name, number or date from a set of possibilities uses cuál before ser.",
      },
      {
        wrong: "¿Quién hablas con?",
        right: "¿Con quién hablas?",
        why: "Prepositions go before the question word in Spanish.",
      },
      {
        wrong: "¿Cuántos años tú tienes?",
        right: "¿Cuántos años tienes?",
        why: "The verb comes right after the question phrase, and the pronoun is usually dropped.",
      },
    ],
    faqs: [
      {
        q: "Do I need the upside-down question mark?",
        a: "Yes, in writing. It shows where the question starts, which matters because Spanish word order doesn't always signal a question. In casual texting people often skip it.",
      },
      {
        q: "Does ¿Cómo? mean \"what?\" when I didn't hear?",
        a: "Yes. ¿Cómo? and ¿Perdón? are the polite ways to ask someone to repeat. ¿Qué? on its own can sound abrupt.",
      },
    ],
    related: ["spanish-subject-pronouns", "present-tense-regular-verbs", "spanish-accent-marks"],
  },
  {
    slug: "present-progressive",
    title: "The Present Progressive: Estar + Gerund",
    metaTitle: "Spanish Present Progressive (Estoy Hablando) Explained",
    description:
      "Learn how to form the Spanish present progressive with estar and the gerund (-ando, -iendo), when to use it, when not to, and how it differs from English \"-ing.\"",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "The present progressive describes an action in progress right now: Estoy comiendo, \"I'm eating.\" It's formed with estar plus the gerund.",
      "Spanish uses it much less than English uses \"-ing.\" The simple present often does the same job, and the progressive is never used for future plans.",
    ],
    sections: [
      {
        heading: "Forming the gerund",
        body: [
          "-ar verbs take -ando; -er and -ir verbs take -iendo. When the stem ends in a vowel, -iendo becomes -yendo. -ir stem-changing verbs change e→i and o→u.",
        ],
        table: {
          headers: ["Infinitive", "Gerund", "Pattern"],
          rows: [
            ["hablar", "hablando", "-ar → -ando"],
            ["comer", "comiendo", "-er → -iendo"],
            ["escribir", "escribiendo", "-ir → -iendo"],
            ["leer", "leyendo", "vowel + -iendo → -yendo"],
            ["dormir", "durmiendo", "o → u"],
            ["pedir", "pidiendo", "e → i"],
            ["ir", "yendo", "irregular"],
          ],
        },
      },
      {
        heading: "Estar + gerund",
        body: [
          "Conjugate estar and keep the gerund unchanged. Object and reflexive pronouns can go before estar or be attached to the gerund, which then needs an accent.",
        ],
        examples: [
          { es: "Estoy estudiando para el examen.", en: "I'm studying for the exam." },
          { es: "¿Qué estás haciendo?", en: "What are you doing?" },
          { es: "Los niños están durmiendo.", en: "The children are sleeping." },
          { es: "Me estoy duchando. / Estoy duchándome.", en: "I'm having a shower." },
        ],
      },
      {
        heading: "When not to use it",
        body: [
          "Don't use the progressive for future plans (use the present or ir a), for states like tener, saber or querer, or for going and coming, where the simple verb is normal.",
        ],
        examples: [
          { es: "Salgo mañana para Madrid.", en: "I'm leaving for Madrid tomorrow." },
          { es: "Llevo una chaqueta azul.", en: "I'm wearing a blue jacket." },
          { es: "Ya voy.", en: "I'm coming." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Estoy yendo al cine mañana.",
        right: "Voy al cine mañana.",
        why: "Future plans never use the progressive in Spanish.",
      },
      {
        wrong: "Estoy teniendo un coche.",
        right: "Tengo un coche.",
        why: "States like having, knowing and wanting use the simple present.",
      },
      {
        wrong: "Estoy lavandome.",
        right: "Estoy lavándome.",
        why: "Attaching a pronoun to the gerund moves the stress count, so it needs a written accent.",
      },
    ],
    faqs: [
      {
        q: "Is \"¿Qué haces?\" the same as \"¿Qué estás haciendo?\"",
        a: "Often, yes. ¿Qué haces? can mean \"What are you doing (right now)?\" or \"What do you do (for a living)?\" The progressive leaves no doubt that you mean right now.",
      },
      {
        q: "Can I use the gerund as a noun, like \"Swimming is fun\"?",
        a: "No. Spanish uses the infinitive for that: Nadar es divertido. See the gerund vs. infinitive guide.",
      },
    ],
    related: ["present-tense-regular-verbs", "spanish-verb-periphrases", "gerund-vs-infinitive"],
  },
  {
    slug: "prepositions-a-en-de-con",
    title: "Spanish Prepositions: A, En, De and Con",
    metaTitle: "Spanish Prepositions A, En, De, Con: Uses and Examples",
    description:
      "The four most common Spanish prepositions don't map neatly onto English. Learn the main uses of a, en, de and con, the contractions al and del, and conmigo/contigo.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "A, en, de and con are among the ten most frequent words in Spanish. Each has a core meaning, but none lines up one-to-one with an English preposition: en can be \"in,\" \"on\" or \"at,\" and de can be \"of,\" \"from\" or \"about.\"",
      "Learn each preposition by its main jobs, and learn common phrases whole.",
    ],
    sections: [
      {
        heading: "A: direction, time and people",
        body: [
          "A marks movement toward a place, clock time, distance, and the person who receives an action (the personal a). A + el contracts to al.",
        ],
        examples: [
          { es: "Voy a la playa.", en: "I'm going to the beach." },
          { es: "La clase empieza a las diez.", en: "Class starts at ten." },
          { es: "Vivo a dos calles del metro.", en: "I live two streets from the metro." },
          { es: "Llamo a mi madre.", en: "I call my mother." },
          { es: "Llegamos al hotel.", en: "We arrived at the hotel." },
        ],
      },
      {
        heading: "En: in, on, at (location) and means of transport",
        body: [
          "En covers being in, on or at a place, months, years and seasons, and means of transport.",
        ],
        examples: [
          { es: "Estoy en casa.", en: "I'm at home." },
          { es: "Las llaves están en la mesa.", en: "The keys are on the table." },
          { es: "Nací en 1995, en agosto.", en: "I was born in 1995, in August." },
          { es: "Viajamos en tren.", en: "We travel by train." },
        ],
      },
      {
        heading: "De: of, from, about, made of",
        body: [
          "De expresses origin, possession, material, topic and the parts of the day after a clock time. It also joins two nouns where English puts one noun in front of another: a coffee cup is una taza de café. De + el contracts to del.",
        ],
        examples: [
          { es: "Soy de Bogotá.", en: "I'm from Bogotá." },
          { es: "el libro del profesor", en: "the teacher's book" },
          { es: "una mesa de madera", en: "a wooden table" },
          { es: "Hablamos de política.", en: "We talk about politics." },
          { es: "a las ocho de la mañana", en: "at eight in the morning" },
          { es: "el zumo de naranja", en: "orange juice" },
        ],
      },
      {
        heading: "Con: with",
        body: [
          "Con means \"with.\" With mí and ti it becomes one word: conmigo, contigo. (With usted and él it stays separate: con usted, con él.)",
        ],
        examples: [
          { es: "Un café con leche, por favor.", en: "A coffee with milk, please." },
          { es: "¿Vienes conmigo?", en: "Are you coming with me?" },
          { es: "Quiero hablar contigo.", en: "I want to talk to you." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Estoy a casa.",
        right: "Estoy en casa.",
        why: "Being at a place is en. A is for movement toward it: Voy a casa.",
      },
      {
        wrong: "con mí / con ti",
        right: "conmigo / contigo",
        why: "These are fixed single-word forms.",
      },
      {
        wrong: "Pienso sobre ti.",
        right: "Pienso en ti.",
        why: "Pensar takes en for \"think about.\" Many verbs have a fixed preposition; see the verbs with prepositions guide.",
      },
      {
        wrong: "una naranja zumo",
        right: "un zumo de naranja",
        why: "Spanish joins nouns with de, and the main noun comes first.",
      },
    ],
    faqs: [
      {
        q: "Is it \"en la mañana\" or \"por la mañana\"?",
        a: "Por la mañana is standard in Spain and understood everywhere. En la mañana is common in much of Latin America. After a clock time, use de: a las nueve de la mañana.",
      },
      {
        q: "How do I say \"on Monday\"?",
        a: "With the article and no preposition: el lunes. \"On Mondays\" is los lunes.",
      },
    ],
    related: ["personal-a", "por-vs-para", "verbs-with-prepositions"],
  },
];
