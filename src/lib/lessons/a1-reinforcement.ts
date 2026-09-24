import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A1 reinforcement lessons -- woven into A1_LESSONS right after the lesson
// each one reinforces (see weave.ts). They teach nothing brand-new; each
// one re-presents material the learner has just covered (or covered
// earlier -- the "Spiral Review" lessons deliberately reach back several
// topics) in a different format from the base lessons' drills:
//   - Dialogue Lab: a short scripted conversation to complete and respond to
//   - Error Hunt: spot and fix the mistakes learners actually make
//   - Contrast Clinic: minimal pairs where one small change flips the meaning
//   - Transformations: take a sentence and change its person/number/gender
//   - Real-World Mission: a task (a form, a schedule, a menu) that needs the grammar
//   - Spiral Review: cumulative retrieval across several earlier lessons
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A1", after, slug, title, summary, duration, sections, exercises);

export const A1_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "greetings-pronouns-ser-2",
    "a1r-dialogue-first-meetings",
    "Dialogue Lab: First Meetings",
    "Walk through a real first conversation — greetings, names, and where people are from — and fill in what's missing.",
    "7 min",
    [
      sec(
        "Scene 1: At a party",
        "Two strangers meet. Read the exchange out loud before answering — notice how each reply mirrors the question it answers.",
        [
          ["—Hola, ¿cómo te llamas?", "Hi, what's your name?"],
          ["—Me llamo Lucía. ¿Y tú?", "My name is Lucía. And you?"],
          ["—Soy Diego. Mucho gusto.", "I'm Diego. Nice to meet you."],
          ["—Igualmente.", "Likewise."],
        ],
        [
          mc(
            "Diego says \"Mucho gusto.\" What is the most natural reply?",
            ["Igualmente.", "De nada.", "Adiós.", "Por favor."],
            0,
            "Igualmente (likewise) is the standard answer to mucho gusto. De nada answers gracias, not a greeting."
          ),
        ]
      ),
      sec(
        "Scene 2: Where are you from?",
        "Ser + de tells where someone is from. The question uses the same verb: ¿De dónde eres? → Soy de…",
        [
          ["—¿De dónde eres?", "Where are you from?"],
          ["—Soy de Colombia. ¿Y tú?", "I'm from Colombia. And you?"],
          ["—Yo soy de Canadá, pero mi madre es de Perú.", "I'm from Canada, but my mother is from Peru."],
        ],
        [
          fb(
            "Complete Lucía's answer with the right form of ser.",
            "Mis padres ___ de Bogotá.",
            "son",
            "Mis padres = ellos, so ser becomes son.",
            "ellos → ?"
          ),
        ]
      ),
      sec(
        "Scene 3: Formal or informal?",
        "Now Diego meets Lucía's grandfather. With an older stranger, Spanish speakers usually switch from tú to usted — and the verb switches with it.",
        [
          ["—Buenas tardes, señor. ¿Cómo se llama usted?", "Good afternoon, sir. What's your name?"],
          ["—Me llamo Andrés. ¿Y usted es de aquí?", "My name is Andrés. And are you from here?"],
          ["—No, señor, soy de Toronto.", "No, sir, I'm from Toronto."],
        ],
        [
          mc(
            "Which question should Diego use with Lucía's grandfather?",
            ["¿De dónde es usted?", "¿De dónde eres tú?", "¿De dónde son ustedes?", "¿De dónde soy yo?"],
            0,
            "With one older person you're being polite to, use usted — and usted takes the él/ella form of ser: es."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each line to the reply that fits it best.",
        [
          ["¿Cómo te llamas?", "Me llamo Sara."],
          ["¿De dónde eres?", "Soy de Chile."],
          ["Mucho gusto.", "Igualmente."],
          ["¿Cómo estás?", "Muy bien, gracias."],
        ],
        "Each reply reuses the verb or idea of its question: llamas → llamo, eres → soy."
      ),
      fb(
        "Complete the introduction.",
        "Hola, yo ___ Marta y soy de Madrid.",
        "soy",
        "Yo takes soy. You can also say me llamo Marta — but only soy fits this blank on its own."
      ),
      mc(
        "You're introducing two friends to your teacher. How do you say \"They are from Mexico\"?",
        ["Ellos son de México.", "Ellos es de México.", "Ellos somos de México.", "Ellos eres de México."],
        0,
        "Ellos → son. Es is singular, somos is nosotros, eres is tú."
      ),
      toEs(
        "We are from Spain.",
        "Somos de España.",
        "Nosotros → somos. The pronoun is optional because somos already tells you who.",
        ["Nosotros somos de España.", "Nosotras somos de España."]
      ),
      toEn(
        "¿Usted es de aquí?",
        "Are you from here?",
        "Usted is the formal \"you,\" but in English it's still just \"you.\"",
        ["Are you from around here?"]
      ),
      wo("¿De dónde es tu profesor?", "Question word first (de dónde), then the verb (es), then the subject (tu profesor).", "Where is your teacher from?"),
    ]
  ),
  L(
    "gender-number-articles-2",
    "a1r-contrast-articles",
    "Contrast Clinic: El, La, Un, Una",
    "Minimal pairs that show exactly when to use the, a, and some — and how one letter changes the meaning.",
    "7 min",
    [
      sec(
        "Definite vs. indefinite",
        "El/la/los/las point to a specific thing (the). Un/una/unos/unas introduce something new or unspecified (a, some). Compare each pair before answering.",
        [
          ["Tengo un libro.", "I have a book. (any book, new information)"],
          ["El libro es interesante.", "The book is interesting. (the one we mentioned)"],
          ["Busco una casa.", "I'm looking for a house. (any house)"],
          ["La casa es grande.", "The house is big. (a specific house)"],
        ],
        [
          mc(
            "\"___ perro de mi vecino es muy grande.\" (My neighbor's dog — a specific dog.)",
            ["El", "Un", "La", "Una"],
            0,
            "A specific dog that belongs to someone → definite article. Perro is masculine → el."
          ),
        ]
      ),
      sec(
        "Nouns that break the -o/-a pattern",
        "A few everyday nouns don't follow the -o = masculine, -a = feminine shortcut. Learn them with their article attached.",
        [
          ["el día", "the day"],
          ["el mapa", "the map"],
          ["el problema", "the problem"],
          ["la mano", "the hand"],
          ["la foto", "the photo"],
        ],
        [
          ms(
            "Which of these are masculine even though they end in -a?",
            ["día", "mapa", "problema", "casa"],
            [0, 1, 2],
            "Día, mapa and problema are masculine: el día, el mapa, el problema. Casa follows the normal rule: la casa."
          ),
        ]
      ),
      sec(
        "Plural articles change meaning too",
        "Unos/unas means \"some\" or \"a few.\" Los/las means \"the\" (all of a specific group).",
        [
          ["Unas amigas llegan hoy.", "Some friends (f.) arrive today."],
          ["Las amigas de Ana llegan hoy.", "Ana's friends (f.) arrive today."],
        ],
        [
          fb(
            "Complete with the correct indefinite article (\"some\").",
            "Necesito ___ lápices para la clase.",
            "unos",
            "Lápices is masculine plural (el lápiz → los lápices), so \"some\" is unos."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each noun to its article.",
        [
          ["mano", "la"],
          ["día", "el"],
          ["ciudades", "las"],
          ["problemas", "los"],
        ],
        "La mano and el día are the classic exceptions. -dad nouns are feminine (la ciudad → las ciudades)."
      ),
      mc(
        "Which sentence means \"I have a problem\"?",
        ["Tengo un problema.", "Tengo una problema.", "Tengo el problema.", "Tengo la problema."],
        0,
        "Problema is masculine, and \"a\" = indefinite → un problema."
      ),
      fb("Complete with the correct definite article.", "___ foto de mi familia está en la mesa.", "La", "Foto is short for fotografía, which is feminine → la foto."),
      toEs("The maps are on the table.", "Los mapas están en la mesa.", "Mapa is masculine → el mapa, plural los mapas.", ["Los mapas estan en la mesa."]),
      toEn("Unas chicas hablan español.", "Some girls speak Spanish.", "Unas = some (feminine plural).", ["A few girls speak Spanish.", "Some girls are speaking Spanish."]),
      mc(
        "Which pair is correct?",
        ["la ciudad / las ciudades", "el ciudad / los ciudades", "la ciudad / las ciudads", "el ciudad / las ciudades"],
        0,
        "Nouns ending in -dad are feminine, and a noun ending in a consonant adds -es in the plural."
      ),
      wo("El día es muy bonito.", "Article + noun (el día) + verb + adverb + adjective.", "The day is very nice."),
    ]
  ),
  L(
    "review-pronouns-ser-gender-articles",
    "a1r-error-hunt-pronouns-articles",
    "Error Hunt: Pronouns, Ser & Articles",
    "Every sentence here was written by a learner. Find what's wrong, then fix it.",
    "7 min",
    [
      sec(
        "How to hunt",
        "When a sentence looks off, check three things in order: (1) does the verb match the subject? (2) does the article match the noun's gender? (3) does it match the noun's number?",
        [
          ["✗ Nosotros es estudiantes. → ✓ Nosotros somos estudiantes.", "We are students."],
          ["✗ El casa es grande. → ✓ La casa es grande.", "The house is big."],
        ],
        [
          mc(
            "What's wrong with \"Ella son de Argentina\"?",
            [
              "The verb should be es, because ella is singular.",
              "Ella should be él.",
              "De should be en.",
              "Nothing — it's correct.",
            ],
            0,
            "Ella is one person, so ser must be es: Ella es de Argentina."
          ),
        ]
      ),
      sec(
        "Tú vs. tu, él vs. el",
        "An accent mark can be the whole difference: tú (you) vs. tu (your); él (he) vs. el (the).",
        [
          ["Tú eres mi amigo.", "You are my friend."],
          ["Tu amigo es simpático.", "Your friend is nice."],
          ["Él es el profesor.", "He is the teacher."],
        ],
        [
          ms(
            "Which sentences are written correctly?",
            ["Tú eres de Chile.", "Tu eres de Chile.", "Él es alto.", "El es alto."],
            [0, 2],
            "\"You\" as a subject is tú (with accent). \"He\" is él (with accent). Without accents, they mean \"your\" and \"the.\""
          ),
        ]
      ),
    ],
    [
      mc(
        "Find the correct version of \"Yo es un estudiante.\"",
        ["Yo soy un estudiante.", "Yo eres un estudiante.", "Yo son un estudiante.", "Yo es una estudiante."],
        0,
        "Yo always takes soy."
      ),
      mc(
        "Find the correct version of \"Los chicas son altas.\"",
        ["Las chicas son altas.", "Los chicas es altas.", "Las chicas es altas.", "Los chicos son altas."],
        0,
        "Chicas is feminine plural → las chicas."
      ),
      fb("Fix the verb.", "Ustedes ___ muy simpáticos. (learner wrote: sois)", "son", "In Latin America ustedes is used for everyone, and it takes son. Sois goes with vosotros."),
      fb("Fix the article.", "Busco ___ mapa de la ciudad. (learner wrote: una)", "un", "Mapa is masculine despite the -a → un mapa."),
      ms(
        "Which of these sentences contain an error?",
        ["Mi hermana es médica.", "Nosotras somos de Cuba.", "Tú es mi mejor amigo.", "El día es largo."],
        [2],
        "Tú takes eres: Tú eres mi mejor amigo. The others are correct."
      ),
      toEs("You (informal) are my teacher.", "Tú eres mi profesor.", "Tú + eres. Remember the accent on tú.", ["Eres mi profesor.", "Tú eres mi profesora.", "Eres mi profesora."]),
      wo("Ellas son las amigas de Pedro.", "Subject + ser + article + noun + de + owner.", "They are Pedro's friends."),
    ]
  ),
  L(
    "adjective-agreement",
    "a1r-transform-agreement",
    "Transformations: Make It Plural, Make It Feminine",
    "Take a sentence, change one thing, and watch everything else change with it.",
    "8 min",
    [
      sec(
        "The domino rule",
        "In Spanish, the noun is the first domino. Change its gender or number and the article, the adjective and the verb all fall into line.",
        [
          ["El gato negro es pequeño.", "The black cat is small."],
          ["Los gatos negros son pequeños.", "The black cats are small."],
          ["La gata negra es pequeña.", "The black (female) cat is small."],
        ],
        [
          fb("Make it plural: El libro rojo es nuevo.", "Los libros rojos son ___.", "nuevos", "Plural noun → plural adjective: nuevo → nuevos."),
        ]
      ),
      sec(
        "Adjectives that don't change for gender",
        "Adjectives ending in -e or a consonant (grande, inteligente, azul, fácil) keep the same form for masculine and feminine. They only change for plural.",
        [
          ["un chico inteligente / una chica inteligente", "a smart boy / a smart girl"],
          ["el coche azul / los coches azules", "the blue car / the blue cars"],
        ],
        [
          mc(
            "Make it feminine: \"El profesor es muy amable.\"",
            ["La profesora es muy amable.", "La profesora es muy amabla.", "La profesor es muy amable.", "La profesora son muy amable."],
            0,
            "Amable ends in -e, so it stays the same. Only the noun and article change."
          ),
        ]
      ),
      sec(
        "Nationality adjectives",
        "Nationalities ending in a consonant add -a for the feminine and lose the accent: español → española, inglés → inglesa, alemán → alemana.",
        [
          ["Él es español. / Ella es española.", "He is Spanish. / She is Spanish."],
          ["Ellos son ingleses.", "They are English."],
        ],
        [
          fb("Make it feminine.", "Mi amigo es alemán. → Mi amiga es ___.", "alemana", "Alemán → alemana (add -a, drop the accent)."),
        ]
      ),
    ],
    [
      fb("Make it plural.", "La casa blanca es bonita. → Las casas blancas son ___.", "bonitas", "Feminine plural → bonitas."),
      fb("Make it plural.", "El examen es difícil. → Los exámenes son ___.", "difíciles", "Difícil ends in a consonant → add -es: difíciles."),
      mc(
        "Make it masculine: \"Las niñas son simpáticas.\"",
        ["Los niños son simpáticos.", "Los niños son simpáticas.", "Las niños son simpáticos.", "Los niño son simpáticos."],
        0,
        "Every word flips: las → los, niñas → niños, simpáticas → simpáticos."
      ),
      mc(
        "Make it singular: \"Unos estudiantes franceses.\"",
        ["Un estudiante francés", "Un estudiante franceses", "Una estudiante francés", "Un estudiantes francés"],
        0,
        "Franceses → francés (the accent comes back in the singular)."
      ),
      mt(
        "Match each masculine form to its feminine form.",
        [
          ["inglés", "inglesa"],
          ["trabajador", "trabajadora"],
          ["feliz", "feliz"],
          ["alto", "alta"],
        ],
        "Nationalities and -dor adjectives add -a. Feliz ends in -z and doesn't change for gender."
      ),
      toEs("The green cars are fast.", "Los coches verdes son rápidos.", "Verde ends in -e → verdes. Rápido → rápidos.", ["Los carros verdes son rápidos.", "Los autos verdes son rápidos."]),
      wo("Mis hermanas son muy altas.", "Possessive + noun + ser + intensifier + adjective.", "My sisters are very tall."),
    ]
  ),
  L(
    "adjective-agreement",
    "a1r-spiral-articles-adjectives-ser",
    "Spiral Review: Articles, Adjectives & Ser",
    "A cumulative check that reaches back to lessons 1–6 — pronouns, ser, articles and agreement all in one place.",
    "8 min",
    [
      sec(
        "Recall first",
        "Before looking at the examples, try to say the six forms of ser aloud: yo…, tú…, él/ella/usted…, nosotros…, vosotros…, ellos/ustedes…. Then check yourself below.",
        [
          ["yo soy · tú eres · él/ella/usted es", "I am · you are · he/she is, you (formal) are"],
          ["nosotros somos · vosotros sois · ellos/ustedes son", "we are · you all (Spain) are · they/you all are"],
        ],
        [
          mt(
            "Match each subject with its form of ser.",
            [
              ["yo", "soy"],
              ["tú", "eres"],
              ["nosotras", "somos"],
              ["ustedes", "son"],
            ],
            "Ser is irregular — these forms just have to be memorized."
          ),
        ]
      ),
      sec(
        "Describe a person",
        "A full description combines all of it: ser + adjective that agrees with the person.",
        [
          ["Mi madre es alta y simpática.", "My mother is tall and nice."],
          ["Mis abuelos son mexicanos.", "My grandparents are Mexican."],
        ],
        [
          fb("Complete with the correct form of ser.", "Mi hermano y yo ___ bajos.", "somos", "Mi hermano y yo = nosotros → somos."),
        ]
      ),
    ],
    [
      mc(
        "Which description of \"Ana and Laura\" is fully correct?",
        ["Ellas son altas y rubias.", "Ellas es altas y rubias.", "Ellas son altos y rubios.", "Ellos son alta y rubia."],
        0,
        "Two women → ellas son, and both adjectives go feminine plural."
      ),
      fb("Complete with the correct article.", "___ problemas de matemáticas son difíciles.", "Los", "Problema is masculine → los problemas."),
      fb("Complete with the correct adjective form (trabajador).", "Las doctoras son muy ___.", "trabajadoras", "-dor adjectives add -a for the feminine and -s for plural: trabajadoras."),
      ms(
        "Which sentences are correct?",
        ["Vosotros sois estudiantes.", "Usted es muy amable.", "Nosotros son de Perú.", "La mano es pequeña."],
        [0, 1, 3],
        "Nosotros takes somos, not son. The others are correct."
      ),
      toEs("My friend (f.) is Colombian and very intelligent.", "Mi amiga es colombiana y muy inteligente.", "Colombiano → colombiana; inteligente doesn't change for gender.", []),
      toEn("Los problemas son fáciles.", "The problems are easy.", "Problema is masculine; fácil → fáciles in the plural.", []),
      wo("Nosotras somos unas chicas muy felices.", "Subject + ser + indefinite article + noun + intensifier + adjective.", "We are some very happy girls."),
    ]
  ),
  L(
    "present-tense-ar-verbs",
    "a1r-ar-verbs-in-real-life",
    "Real-World Mission: A Week of -AR Verbs",
    "Read a student's weekly planner and use -AR verbs to talk about who does what.",
    "8 min",
    [
      sec(
        "Sofía's planner",
        "Every verb here is a regular -AR verb. Drop -ar and add -o, -as, -a, -amos, -áis, -an.",
        [
          ["Lunes: estudio en la biblioteca.", "Monday: I study at the library."],
          ["Martes: mi hermano y yo cocinamos la cena.", "Tuesday: my brother and I cook dinner."],
          ["Miércoles: mis amigas bailan salsa.", "Wednesday: my friends dance salsa."],
          ["Jueves: ¿tú trabajas en la tienda?", "Thursday: do you work at the store?"],
        ],
        [
          mc(
            "On Tuesday, who cooks?",
            ["Sofía and her brother", "Only Sofía", "Sofía's friends", "Sofía's mother"],
            0,
            "Cocinamos = nosotros (mi hermano y yo) — Sofía and her brother."
          ),
        ]
      ),
      sec(
        "Filling in the planner",
        "Now it's your turn to write entries. Match the ending to the subject, not to what sounds familiar.",
        [
          ["Viernes: mis padres visitan a mi abuela.", "Friday: my parents visit my grandmother."],
          ["Sábado: nosotros escuchamos música.", "Saturday: we listen to music."],
        ],
        [
          fb("Complete the Sunday entry with descansar.", "Domingo: toda la familia ___ en casa.", "descansa", "Toda la familia is grammatically singular (it), so descansar → descansa."),
        ]
      ),
    ],
    [
      fb("Complete with hablar.", "Mis abuelos ___ por teléfono todos los domingos.", "hablan", "Mis abuelos = ellos → hablan."),
      fb("Complete with comprar.", "¿Qué ___ tú en el mercado?", "compras", "Tú → -as: compras."),
      fb("Complete with llegar.", "Yo ___ a la escuela a las ocho.", "llego", "Yo → -o: llego."),
      mc(
        "\"Vosotros ___ en el parque.\" (caminar)",
        ["camináis", "caminan", "caminamos", "caminas"],
        0,
        "Vosotros → -áis (used in Spain): camináis."
      ),
      mt(
        "Match each planner entry to its meaning.",
        [
          ["Tomo café.", "I drink coffee."],
          ["Mandamos mensajes.", "We send messages."],
          ["Ella nada en la piscina.", "She swims in the pool."],
          ["Ustedes miran la tele.", "You all watch TV."],
        ],
        "Tomar can mean \"to take\" or \"to drink\"; mandar = to send; nadar = to swim; mirar = to watch."
      ),
      toEs("We work on Saturdays.", "Trabajamos los sábados.", "Nosotros → trabajamos. Days of the week take los for \"on ___s.\"", ["Nosotros trabajamos los sábados.", "Nosotras trabajamos los sábados."]),
      wo("Mi padre prepara el desayuno todos los días.", "Subject + verb + object + time expression.", "My father makes breakfast every day."),
    ]
  ),
  L(
    "present-tense-ar-verbs",
    "a1r-dialogue-what-do-you-do",
    "Dialogue Lab: What Do You Do?",
    "Ask and answer questions about daily life — the question's verb form tells you how to answer.",
    "7 min",
    [
      sec(
        "The mirror rule",
        "When someone asks you something with tú, you answer with yo. When they ask ustedes, you answer with nosotros. The verb ending flips with it.",
        [
          ["—¿Trabajas mucho? —Sí, trabajo mucho.", "Do you work a lot? Yes, I work a lot."],
          ["—¿Estudian ustedes inglés? —No, estudiamos francés.", "Do you all study English? No, we study French."],
        ],
        [
          fb("Answer the question.", "—¿Cantas en la ducha? —Sí, ___ todas las mañanas.", "canto", "The question uses tú (cantas), so answer with yo: canto."),
        ]
      ),
      sec(
        "A conversation at the gym",
        "Read the full exchange, then answer questions about it.",
        [
          ["—¿Practicas deporte?", "Do you play sports?"],
          ["—Sí, practico tenis. Y mi novia nada.", "Yes, I play tennis. And my girlfriend swims."],
          ["—¿Y ustedes entrenan juntos?", "And do you two train together?"],
          ["—No, nunca entrenamos juntos.", "No, we never train together."],
        ],
        [
          mc(
            "Do they train together?",
            ["No, never.", "Yes, always.", "Only on weekends.", "The dialogue doesn't say."],
            0,
            "Nunca entrenamos juntos = we never train together."
          ),
        ]
      ),
    ],
    [
      fb("Answer the question.", "—¿Ustedes miran películas en español? —Sí, ___ muchas.", "miramos", "Ustedes question → nosotros answer: miramos."),
      fb("Answer the question.", "—¿Tu hermana toca el piano? —Sí, ___ muy bien.", "toca", "Tu hermana = ella → toca."),
      mc(
        "Which question would get the answer \"No, no fumo\"?",
        ["¿Fumas?", "¿Fuman ustedes?", "¿Fuma él?", "¿Fumamos?"],
        0,
        "Fumo is yo, so the question was addressed to tú: ¿Fumas?"
      ),
      mt(
        "Match each question with its answer.",
        [
          ["¿Bailas bien?", "No, bailo muy mal."],
          ["¿Ellos viajan mucho?", "Sí, viajan cada mes."],
          ["¿Ustedes llegan tarde?", "No, llegamos temprano."],
          ["¿Usted habla inglés?", "Sí, hablo un poco."],
        ],
        "Tú and usted questions get yo answers; ustedes questions get nosotros answers; ellos questions stay ellos."
      ),
      toEs("Do you (informal) play the guitar?", "¿Tocas la guitarra?", "\"To play\" an instrument is tocar, not jugar.", ["¿Tú tocas la guitarra?"]),
      toEn("No, no escuchamos la radio.", "No, we don't listen to the radio.", "No before the verb makes it negative. Escuchar = to listen to (no extra preposition needed).", ["No, we do not listen to the radio."]),
      wo("¿Tus padres trabajan en el hospital?", "In a yes/no question, the word order can stay the same as a statement — the question marks do the work.", "Do your parents work at the hospital?"),
    ]
  ),
  L(
    "present-tense-er-ir-verbs-2",
    "a1r-contrast-er-ir",
    "Contrast Clinic: -ER vs. -IR Endings",
    "-ER and -IR verbs share almost every ending. Here you'll drill the only two forms where they split.",
    "7 min",
    [
      sec(
        "Where they match",
        "Comer and vivir look identical in four of six forms: como/vivo, comes/vives, come/vive, comen/viven.",
        [
          ["Yo como pan. / Yo vivo aquí.", "I eat bread. / I live here."],
          ["Ellos comen tarde. / Ellos viven lejos.", "They eat late. / They live far away."],
        ],
        [
          fb("Complete with escribir.", "Mi abuela ___ cartas a mano.", "escribe", "Ella form of an -IR verb: -e, same as -ER."),
        ]
      ),
      sec(
        "Where they split: nosotros and vosotros",
        "Only nosotros and vosotros reveal the infinitive: -ER → -emos / -éis; -IR → -imos / -ís.",
        [
          ["comemos · coméis", "we eat · you all eat"],
          ["vivimos · vivís", "we live · you all live"],
        ],
        [
          mc(
            "\"Nosotros ___ en un apartamento.\" (vivir)",
            ["vivimos", "vivemos", "viven", "vivís"],
            0,
            "Vivir is an -IR verb → nosotros vivimos."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each nosotros form to its infinitive.",
        [
          ["bebemos", "beber"],
          ["abrimos", "abrir"],
          ["leemos", "leer"],
          ["subimos", "subir"],
        ],
        "-emos comes from -ER verbs; -imos from -IR verbs."
      ),
      fb("Complete with aprender.", "Nosotros ___ español en la escuela.", "aprendemos", "Aprender is -ER → -emos."),
      fb("Complete with recibir.", "Nosotros ___ muchos correos.", "recibimos", "Recibir is -IR → -imos."),
      mc(
        "\"¿Vosotros ___ el periódico?\" (leer)",
        ["leéis", "leís", "leen", "leemos"],
        0,
        "Leer is -ER → vosotros leéis."
      ),
      ms(
        "Which forms are correct?",
        ["decidimos", "correimos", "corremos", "escribemos"],
        [0, 2],
        "Decidir (-IR) → decidimos. Correr (-ER) → corremos. Correimos and escribemos mix up the endings."
      ),
      toEs("We open the windows.", "Abrimos las ventanas.", "Abrir is -IR → abrimos.", ["Nosotros abrimos las ventanas."]),
      wo("Mis primos y yo comemos en casa de la abuela.", "A compound subject that includes yo takes the nosotros form.", "My cousins and I eat at Grandma's house."),
    ]
  ),
  L(
    "review-adjectives-ar-er-ir-verbs",
    "a1r-error-hunt-verbs-agreement",
    "Error Hunt: Verb Endings & Agreement",
    "Spot the slip-ups learners make with present-tense endings and adjective agreement.",
    "7 min",
    [
      sec(
        "Three classic slips",
        "(1) Using the infinitive instead of conjugating. (2) Giving an -IR verb an -ER ending. (3) Forgetting the adjective has to agree.",
        [
          ["✗ Yo hablar español. → ✓ Yo hablo español.", "I speak Spanish."],
          ["✗ Vivemos en Lima. → ✓ Vivimos en Lima.", "We live in Lima."],
          ["✗ Las flores son rojo. → ✓ Las flores son rojas.", "The flowers are red."],
        ],
        [
          mc(
            "Which slip is in \"Mi madre trabajar en un banco\"?",
            ["The verb isn't conjugated.", "The adjective doesn't agree.", "Wrong article.", "Wrong -ER/-IR ending."],
            0,
            "Trabajar must be conjugated for mi madre: trabaja."
          ),
        ]
      ),
      sec(
        "Proofread the note",
        "A classmate wrote this note. Read each line carefully.",
        [
          ["Hola, me llamo Tomás.", "Hi, my name is Tomás."],
          ["Yo estudia en la universidad.", "(contains an error)"],
          ["Mis clases son muy interesantes.", "My classes are very interesting."],
        ],
        [
          fb("Fix the error in line 2.", "Yo ___ en la universidad.", "estudio", "Yo → -o: estudio. Estudia is the él/ella form."),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Ustedes ___ mucho café. (learner wrote: bebéis)", "beben", "Ustedes → -en: beben. Bebéis is the vosotros form."),
      fb("Fix the adjective.", "Los libros son ___. (learner wrote: aburrida)", "aburridos", "Los libros → masculine plural: aburridos."),
      ms(
        "Which sentences contain an error?",
        ["Ella escribe muy bien.", "Nosotros comemos juntos.", "Tú vives cerca.", "Ellos corre en el parque."],
        [3],
        "Ellos takes corren. The other three are correct."
      ),
      mc(
        "Which is correct?",
        ["Las chicas son inteligentes.", "Las chicas son inteligentas.", "Las chicas es inteligentes.", "La chicas son inteligente."],
        0,
        "Inteligente only changes for number: inteligentes."
      ),
      toEs("My brothers read a lot.", "Mis hermanos leen mucho.", "Mis hermanos = ellos → leen.", []),
      toEn("La comida no es buena.", "The food isn't good.", "No goes before the verb. Buena agrees with comida.", ["The food is not good."]),
      wo("Nosotros vivimos en una casa pequeña.", "-IR verb with nosotros → vivimos. Adjective after the noun, agreeing with it.", "We live in a small house."),
    ]
  ),
  L(
    "review-adjectives-ar-er-ir-verbs",
    "a1r-spiral-lessons-1-10",
    "Spiral Review: Your First Ten Lessons",
    "A mixed workout that pulls from every lesson so far — greetings, ser, articles, agreement and all three verb groups.",
    "9 min",
    [
      sec(
        "Mixed recall",
        "No hints this time. Each checkpoint tests a different lesson. If one feels shaky, that's the lesson to revisit.",
        [
          ["Hola, soy Ana y vivo en Quito.", "Hi, I'm Ana and I live in Quito."],
          ["Mis amigos son simpáticos y estudian mucho.", "My friends are nice and study a lot."],
        ],
        [
          fb("Complete with the correct form of ser.", "Tú ___ muy simpático.", "eres", "Tú → eres."),
          mc("Which article goes with \"ciudad\"?", ["la", "el", "los", "un"], 0, "-dad nouns are feminine: la ciudad."),
        ]
      ),
      sec(
        "Three verb families at once",
        "Hablar, comer, vivir: same subject, three different endings. Say the yo, tú and nosotros forms of each before continuing.",
        [
          ["hablo · como · vivo", "I speak · I eat · I live"],
          ["hablamos · comemos · vivimos", "we speak · we eat · we live"],
        ],
        [
          mt(
            "Match each verb to its tú form.",
            [
              ["bailar", "bailas"],
              ["beber", "bebes"],
              ["abrir", "abres"],
              ["ser", "eres"],
            ],
            "-AR → -as; -ER and -IR → -es; ser is irregular."
          ),
        ]
      ),
    ],
    [
      mc(
        "\"Buenas noches\" is used…",
        ["in the evening, to greet or say goodbye", "only in the morning", "only to say thank you", "only with close friends"],
        0,
        "Buenas noches works both as a greeting and a goodbye in the evening."
      ),
      fb("Complete with the adjective (español).", "Las profesoras son ___.", "españolas", "Nationality → feminine plural: españolas."),
      fb("Complete with the verb (comprender).", "Yo no ___ la pregunta.", "comprendo", "-ER verb, yo → -o."),
      ms(
        "Which sentences are correct?",
        ["Ellos viven en Chile.", "El problema es fácil.", "Tú hablas muy rápido.", "Nosotros bebemos agua."],
        [0, 1, 2, 3],
        "All four are correct — ser, a masculine -a noun, an -AR verb and an -ER verb, each used properly."
      ),
      toEs("The house is big and white.", "La casa es grande y blanca.", "Grande doesn't change for gender; blanco → blanca.", []),
      toEs("They write emails.", "Escriben correos.", "Ellos → escriben.", ["Ellos escriben correos.", "Ellas escriben correos.", "Escriben correos electrónicos.", "Ellos escriben correos electrónicos."]),
      wo("¿Ustedes aprenden español en la universidad?", "Subject, verb, object, place — then the question marks.", "Do you all learn Spanish at the university?"),
      toEn("Mucho gusto, soy el profesor.", "Nice to meet you, I'm the teacher.", "Mucho gusto = nice to meet you.", ["Pleased to meet you, I'm the teacher.", "Nice to meet you, I am the teacher."]),
    ]
  ),
  L(
    "ser-vs-estar-2",
    "a1r-mission-describe-a-photo",
    "Real-World Mission: Describe a Photo",
    "You're sending a vacation photo to a friend. Describe who's in it, what they're like, how they feel and where they are.",
    "8 min",
    [
      sec(
        "The photo",
        "In one description you'll need both verbs: ser for who people are and what they're like, estar for how they feel and where they are.",
        [
          ["Esta es mi prima Clara. Es muy divertida.", "This is my cousin Clara. She's really fun."],
          ["En la foto, está un poco cansada.", "In the photo, she's a little tired."],
          ["Estamos en la playa de Cancún.", "We're at the beach in Cancún."],
        ],
        [
          mc(
            "Why does the description say \"está cansada\" but \"es divertida\"?",
            [
              "Being tired is a temporary state; being fun is part of who she is.",
              "Cansada is feminine and divertida is masculine.",
              "Estar is used for people, ser for things.",
              "There's no difference — they're interchangeable.",
            ],
            0,
            "Temporary states and feelings → estar. Lasting characteristics → ser."
          ),
        ]
      ),
      sec(
        "Adding the details",
        "Location always takes estar — even for things that never move, like cities and buildings. Origin and material take ser.",
        [
          ["El hotel está cerca del mar.", "The hotel is near the sea."],
          ["Mi sombrero es de Panamá.", "My hat is from Panama."],
        ],
        [
          fb("Complete the caption.", "Cancún ___ en México.", "está", "Location → estar, even for a city that will always be there."),
        ]
      ),
    ],
    [
      fb("Complete the caption.", "Mi prima ___ estudiante de medicina.", "es", "Profession or role → ser."),
      fb("Complete the caption.", "Nosotros ___ muy contentos en la foto.", "estamos", "A feeling at the moment of the photo → estar."),
      fb("Complete the caption.", "La comida del hotel ___ fantástica.", "es", "A general quality of the hotel food → ser. (If you meant \"tastes fantastic right now,\" you could say está.)"),
      ms(
        "Which captions use the right verb?",
        ["El agua está fría hoy.", "Mis padres son en la playa.", "Clara es de Guadalajara.", "Yo estoy alto."],
        [0, 2],
        "Location → están en la playa. Height is a trait → soy alto."
      ),
      mt(
        "Match each caption to the reason for the verb.",
        [
          ["Es mi hermano.", "identity"],
          ["Está enfermo.", "temporary condition"],
          ["Está en el hotel.", "location"],
          ["Es de Chile.", "origin"],
        ],
        "Identity and origin → ser. Conditions and location → estar."
      ),
      toEs("We are at the beach and we are happy.", "Estamos en la playa y estamos contentos.", "Both location and a current feeling → estar.", ["Estamos en la playa y estamos felices.", "Nosotros estamos en la playa y estamos contentos.", "Estamos en la playa y estamos contentas."]),
      wo("La playa es bonita pero hoy está sucia.", "Ser for the beach's general beauty; estar for how it is today.", "The beach is pretty, but today it's dirty."),
    ]
  ),
  L(
    "ser-vs-estar-mastery-check",
    "a1r-error-hunt-ser-estar",
    "Error Hunt: Ser or Estar?",
    "Ten learner sentences, some right, some wrong. Diagnose each one before you fix it.",
    "8 min",
    [
      sec(
        "The two most common mistakes",
        "Learners most often (1) use ser for location and (2) use estar for professions. Location of a thing or person → estar. What someone does for a living → ser.",
        [
          ["✗ El baño es a la derecha. → ✓ El baño está a la derecha.", "The bathroom is on the right."],
          ["✗ Mi tía está doctora. → ✓ Mi tía es doctora.", "My aunt is a doctor."],
        ],
        [
          mc(
            "\"¿Dónde es el museo?\" — what's the fix?",
            ["¿Dónde está el museo?", "¿Dónde son el museo?", "¿Dónde estás el museo?", "No fix needed."],
            0,
            "Asking where something is located → estar: ¿Dónde está…?"
          ),
        ]
      ),
      sec(
        "Trick cases",
        "Events are the exception to location: where a party or a concert takes place uses ser. And \"muerto\" (dead) takes estar even though it's permanent.",
        [
          ["La fiesta es en mi casa.", "The party is (takes place) at my house."],
          ["La planta está muerta.", "The plant is dead."],
        ],
        [
          mc(
            "Which sentence is correct?",
            ["El concierto es en el parque.", "El concierto está en el parque.", "El concierto son en el parque.", "El concierto estás en el parque."],
            0,
            "An event taking place somewhere → ser."
          ),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Mis llaves ___ en la mesa. (learner wrote: son)", "están", "Location of objects → estar."),
      fb("Fix the verb.", "Mi padre ___ ingeniero. (learner wrote: está)", "es", "Profession → ser."),
      fb("Fix the verb.", "Hoy yo ___ muy nerviosa. (learner wrote: soy)", "estoy", "A feeling today → estar."),
      ms(
        "Which sentences are already correct?",
        ["Son las tres de la tarde.", "La reunión está en la oficina.", "El café está frío.", "Madrid es en España."],
        [0, 2],
        "Time → ser. Temporary temperature → estar. An event (la reunión) takes ser: es en la oficina. A city's location takes estar: está en España."
      ),
      mc(
        "\"Ana es aburrida\" and \"Ana está aburrida\" mean…",
        ["Ana is boring / Ana is bored", "Ana is bored / Ana is boring", "both mean Ana is bored", "both mean Ana is boring"],
        0,
        "Ser aburrido = to be boring (a trait); estar aburrido = to be bored (a state)."
      ),
      toEs("The bank is next to the school.", "El banco está al lado de la escuela.", "Location → estar. De + el contracts to del only with el — here it's de la.", ["El banco está junto a la escuela."]),
      wo("La clase es en el aula número cinco.", "The class is an event → ser for where it takes place.", "The class is in classroom number five."),
    ]
  ),
  L(
    "ser-vs-estar-mastery-check",
    "a1r-spiral-ser-estar-present",
    "Spiral Review: Ser, Estar & Everyday Verbs",
    "Ser vs. estar meets the present tense and adjective agreement. A cumulative check from lessons 1–13.",
    "8 min",
    [
      sec(
        "Two verbs, two jobs, one sentence",
        "Real sentences mix things. Before each checkpoint, name the job of every verb: is it describing, locating, feeling, or doing?",
        [
          ["Mi hermana es profesora y trabaja en una escuela que está en el centro.", "My sister is a teacher and works at a school that is downtown."],
          ["Estoy cansado porque corro todas las mañanas.", "I'm tired because I run every morning."],
        ],
        [
          fb("Complete with the right verb.", "Nosotros ___ en casa y comemos pizza.", "estamos", "Where we are → estar."),
          fb("Complete with correr.", "Mi perro ___ muy rápido.", "corre", "Mi perro = él → corre."),
        ]
      ),
      sec(
        "Agreement check",
        "Whichever verb you use, the adjective still has to agree with the subject.",
        [
          ["Las ventanas están abiertas.", "The windows are open."],
          ["Los niños son simpáticos.", "The children are nice."],
        ],
        [
          mc(
            "\"La puerta ___ ___.\" (The door is closed.)",
            ["está cerrada", "es cerrada", "está cerrado", "es cerrado"],
            0,
            "A current condition → estar; puerta is feminine → cerrada."
          ),
        ]
      ),
    ],
    [
      mc(
        "Which sentence means \"The students are in the library and they read a lot\"?",
        [
          "Los estudiantes están en la biblioteca y leen mucho.",
          "Los estudiantes son en la biblioteca y leen mucho.",
          "Los estudiantes están en la biblioteca y lean mucho.",
          "Los estudiantes están en la biblioteca y leemos mucho.",
        ],
        0,
        "Location → están; ellos → leen."
      ),
      fb("Complete with ser or estar.", "¿Cómo ___ tus padres? —Bien, gracias.", "están", "Asking how someone is doing → estar."),
      fb("Complete with ser or estar.", "¿Cómo ___ tus padres? —Altos y muy simpáticos.", "son", "Asking what someone is like → ser. Same question word, different verb, different answer."),
      mt(
        "Match each sentence to its English meaning.",
        [
          ["¿Cómo es?", "What is he like?"],
          ["¿Cómo está?", "How is he doing?"],
          ["¿Dónde está?", "Where is he?"],
          ["¿De dónde es?", "Where is he from?"],
        ],
        "¿Cómo es? asks about character; ¿Cómo está? asks about condition."
      ),
      toEs("The soup is cold and I am sad.", "La sopa está fría y estoy triste.", "Both are current states → estar.", ["La sopa está fría y yo estoy triste."]),
      toEn("Mis amigos son de Perú pero viven en Chile.", "My friends are from Peru but they live in Chile.", "Ser de = origin; vivir = to live.", ["My friends are from Peru but live in Chile."]),
      wo("Hoy estamos muy ocupados porque trabajamos mucho.", "Estar for a temporary state (busy today) + a regular -AR verb.", "Today we're very busy because we work a lot."),
    ]
  ),
  L(
    "possessives-prepositions",
    "a1r-dialogue-whose-where",
    "Dialogue Lab: Whose Is It? Where Is It?",
    "A roommate conversation about lost things — practice possessives and location words together.",
    "7 min",
    [
      sec(
        "Scene: The messy apartment",
        "Two roommates are looking for their things. Pay attention to who owns each item — the possessive agrees with the item, not the owner.",
        [
          ["—¿Dónde están mis llaves?", "Where are my keys?"],
          ["—Tus llaves están encima de la mesa.", "Your keys are on top of the table."],
          ["—¿Y mi teléfono?", "And my phone?"],
          ["—Tu teléfono está debajo del sofá.", "Your phone is under the sofa."],
        ],
        [
          mc(
            "Where is the phone?",
            ["Under the sofa", "On the table", "Next to the keys", "In the kitchen"],
            0,
            "Debajo del sofá = under the sofa."
          ),
        ]
      ),
      sec(
        "Our things, their things",
        "Nuestro/nuestra has four forms. Su/sus can mean his, her, its, your (usted/ustedes) or their — context tells you which.",
        [
          ["—¿Es nuestra bicicleta?", "Is it our bicycle?"],
          ["—No, es su bicicleta. Es de los vecinos.", "No, it's their bicycle. It's the neighbors'."],
        ],
        [
          fb("Complete with the correct form of nuestro.", "¿Dónde están ___ libros?", "nuestros", "Libros is masculine plural → nuestros."),
        ]
      ),
    ],
    [
      fb("Complete the answer.", "—¿Es tu mochila? —Sí, es ___ mochila.", "mi", "Answering about your own thing: tu → mi."),
      fb("Complete the answer.", "—¿Son tus gafas? —Sí, son ___ gafas.", "mis", "Gafas is plural → mis."),
      fb("Complete with de + el.", "La lámpara está al lado ___ sofá.", "del", "De + el always contracts to del."),
      mc(
        "\"Their house is near the park.\"",
        ["Su casa está cerca del parque.", "Sus casa está cerca del parque.", "Su casa está cerca de el parque.", "Su casa es cerca del parque."],
        0,
        "One house → su (even with many owners). De + el → del. Location → está."
      ),
      mt(
        "Match each location word to its meaning.",
        [
          ["encima de", "on top of"],
          ["debajo de", "under"],
          ["detrás de", "behind"],
          ["delante de", "in front of"],
        ],
        "All of these combine with de, which contracts with el to del."
      ),
      toEs("Our cat is behind the door.", "Nuestro gato está detrás de la puerta.", "Gato is masculine singular → nuestro.", []),
      wo("¿Las llaves de Marta están en su bolso?", "Here su = her (Marta's).", "Are Marta's keys in her bag?"),
    ]
  ),
  L(
    "possessives-prepositions",
    "a1r-transform-possessives",
    "Transformations: Possessives",
    "Change the owner, change the number of things owned — and keep every possessive correct.",
    "7 min",
    [
      sec(
        "Change the number of things",
        "Possessives follow the thing owned. One thing: mi, tu, su. Several: mis, tus, sus.",
        [
          ["mi amigo → mis amigos", "my friend → my friends"],
          ["su coche → sus coches", "his/her/their car → his/her/their cars"],
        ],
        [
          fb("Make the object plural.", "tu primo → ___ primos", "tus", "More than one primo → tus."),
        ]
      ),
      sec(
        "Change the owner",
        "Now keep the thing the same and change who owns it. Only nuestro and vuestro care about gender.",
        [
          ["mi casa → nuestra casa", "my house → our house"],
          ["mi perro → vuestro perro", "my dog → your (you all's, Spain) dog"],
        ],
        [
          fb("Change \"my\" to \"our.\"", "mi escuela → ___ escuela", "nuestra", "Escuela is feminine singular → nuestra."),
        ]
      ),
    ],
    [
      fb("Change \"my\" to \"our.\"", "mis hermanas → ___ hermanas", "nuestras", "Hermanas is feminine plural → nuestras."),
      fb("Change \"your\" to \"their.\"", "tus padres → ___ padres", "sus", "Padres is plural → sus."),
      fb("Make the object plural.", "nuestro profesor → ___ profesores", "nuestros", "Masculine plural → nuestros."),
      mc(
        "Transform \"Mi hija es alta\" to \"Our daughters are tall.\"",
        ["Nuestras hijas son altas.", "Nuestros hijas son altas.", "Nuestra hijas son altas.", "Nuestras hijas es altas."],
        0,
        "Every piece changes: nuestras, hijas, son, altas."
      ),
      ms(
        "\"Su libro\" could mean…",
        ["his book", "her book", "their book", "my book"],
        [0, 1, 2],
        "Su covers his, her, its, your (formal) and their — never my."
      ),
      toEs("Their dogs are in our garden.", "Sus perros están en nuestro jardín.", "Sus for several dogs; nuestro for one masculine garden.", []),
      wo("Vuestra abuela vive con nuestros tíos.", "Vuestra (fem. sing.) agrees with abuela; nuestros agrees with tíos.", "Your grandmother lives with our aunt and uncle."),
    ]
  ),
  L(
    "numbers-0-100-2",
    "a1r-mission-prices-ages-phones",
    "Real-World Mission: Prices, Ages & Phone Numbers",
    "Fill out a sign-up form and pay at a market stall — numbers the way you'll actually hear them.",
    "8 min",
    [
      sec(
        "The sign-up form",
        "Ages use tener, not ser. Phone numbers are usually read in pairs: 45 67 89 → cuarenta y cinco, sesenta y siete, ochenta y nueve.",
        [
          ["Tengo veintiocho años.", "I'm twenty-eight years old."],
          ["Mi número es el seis, cuarenta y dos, treinta y uno, noventa.", "My number is 6 42 31 90."],
        ],
        [
          mc(
            "How do you say \"I'm 31\"?",
            ["Tengo treinta y un años.", "Soy treinta y uno años.", "Tengo treintaiuno años.", "Estoy treinta y un años."],
            0,
            "Tener for age. Before a masculine noun (años), uno shortens to un."
          ),
        ]
      ),
      sec(
        "At the market",
        "¿Cuánto cuesta? asks about one item; ¿Cuánto cuestan? asks about several.",
        [
          ["—¿Cuánto cuestan las manzanas?", "How much are the apples?"],
          ["—Cuestan cuarenta y cinco pesos el kilo.", "They're forty-five pesos a kilo."],
        ],
        [
          fb("Complete the question.", "¿Cuánto ___ el melón?", "cuesta", "One melon → cuesta."),
        ]
      ),
    ],
    [
      mt(
        "Match each number to its written form.",
        [
          ["16", "dieciséis"],
          ["27", "veintisiete"],
          ["55", "cincuenta y cinco"],
          ["100", "cien"],
        ],
        "16–29 are one word; from 31 on, numbers are written with y."
      ),
      fb("Write the number in words.", "La camiseta cuesta ___ euros. (72)", "setenta y dos", "70 = setenta, + y dos."),
      fb("Write the number in words.", "Mi abuelo tiene ___ años. (81)", "ochenta y un", "Before años, uno becomes un: ochenta y un años."),
      mc(
        "\"Veintiuna personas\" — why veintiuna and not veintiuno?",
        ["Personas is feminine, so the 'one' agrees.", "It's a typo.", "Numbers over 20 are always feminine.", "Because it's plural."],
        0,
        "Numbers ending in one agree with the noun: veintiún libros, veintiuna personas."
      ),
      toEs("How old are you? (informal)", "¿Cuántos años tienes?", "Literally \"How many years do you have?\"", ["¿Cuántos años tienes tú?"]),
      toEn("Los zapatos cuestan noventa dólares.", "The shoes cost ninety dollars.", "Cuestan agrees with the plural zapatos.", ["The shoes are ninety dollars."]),
      wo("Mi hermana tiene diecinueve años.", "Tener + number + años.", "My sister is nineteen years old."),
    ]
  ),
  L(
    "telling-time-2",
    "a1r-mission-timetable",
    "Real-World Mission: Reading a Timetable",
    "Use a bus schedule and a class timetable to answer ¿Qué hora es? and ¿A qué hora…?",
    "8 min",
    [
      sec(
        "Two different questions",
        "¿Qué hora es? asks what time it is now → Es la… / Son las…. ¿A qué hora…? asks when something happens → A la… / A las….",
        [
          ["—¿Qué hora es? —Son las cinco y diez.", "What time is it? It's 5:10."],
          ["—¿A qué hora sale el autobús? —A las cinco y media.", "What time does the bus leave? At 5:30."],
        ],
        [
          mc(
            "Someone asks \"¿A qué hora es la clase?\" Which answer fits?",
            ["A las nueve.", "Son las nueve.", "Es nueve.", "Las nueve son."],
            0,
            "¿A qué hora…? is answered with a + time."
          ),
        ]
      ),
      sec(
        "The class timetable",
        "Read the schedule. Remember: es la una for anything in the one o'clock hour; son las for everything else.",
        [
          ["Matemáticas: 8:15 — a las ocho y cuarto", "Math: at a quarter past eight"],
          ["Historia: 12:45 — a la una menos cuarto", "History: at a quarter to one"],
          ["Arte: 1:30 — a la una y media", "Art: at one thirty"],
        ],
        [
          fb("Write the time for Art class.", "Arte es a la una y ___.", "media", "1:30 = la una y media."),
        ]
      ),
    ],
    [
      fb("Complete the time (2:40, using menos).", "Son las tres ___ veinte.", "menos", "2:40 is twenty minutes before three: las tres menos veinte."),
      mc(
        "How do you say 1:05?",
        ["Es la una y cinco.", "Son la una y cinco.", "Son las una y cinco.", "Es las una y cinco."],
        0,
        "One o'clock is singular → es la una."
      ),
      mt(
        "Match each time to its Spanish form.",
        [
          ["7:15", "las siete y cuarto"],
          ["9:30", "las nueve y media"],
          ["10:50", "las once menos diez"],
          ["12:00 p.m.", "mediodía"],
        ],
        "After :30, count down from the next hour with menos."
      ),
      fb("Complete the answer.", "—¿A qué hora cenas? —Ceno ___ las ocho de la noche.", "a", "At + time → a las."),
      toEs("The train leaves at 6:45 in the morning.", "El tren sale a las siete menos cuarto de la mañana.", "6:45 = a quarter to seven. De la mañana = a.m.", ["El tren sale a las seis y cuarenta y cinco de la mañana."]),
      toEn("Es medianoche y no tengo sueño.", "It's midnight and I'm not sleepy.", "Medianoche = midnight. Tener sueño = to be sleepy.", ["It is midnight and I am not sleepy."]),
      wo("¿A qué hora es la película?", "¿A qué hora + ser + event? Events take ser.", "What time is the movie?"),
    ]
  ),
  L(
    "telling-time-2",
    "a1r-spiral-numbers-time-possessives",
    "Spiral Review: Numbers, Time & Possessives",
    "Plan a family day using everything from lessons 14–18 — plus ser, estar and the present tense from before.",
    "8 min",
    [
      sec(
        "The family plan",
        "Read the plan once. Every line uses at least two topics you've studied.",
        [
          ["Mi padre tiene cuarenta y seis años y trabaja hasta las tres.", "My dad is 46 and works until three."],
          ["Nuestra casa está a veinte minutos del parque.", "Our house is twenty minutes from the park."],
          ["A las cuatro y media comemos con mis abuelos.", "At 4:30 we eat with my grandparents."],
        ],
        [
          mc(
            "What time does the family eat?",
            ["4:30", "3:00", "4:20", "3:30"],
            0,
            "A las cuatro y media = at 4:30."
          ),
          fb("Complete with the correct possessive (our).", "___ abuelos viven en el campo.", "Nuestros", "Abuelos → masculine plural → nuestros."),
        ]
      ),
    ],
    [
      fb("Write the number in words.", "Mis abuelos tienen ___ nietos. (12)", "doce", "12 = doce."),
      mc(
        "Which sentence is correct?",
        ["Son las dos y nuestro coche está en el garaje.", "Es las dos y nuestro coche es en el garaje.", "Son las dos y nuestra coche está en el garaje.", "Son las dos y nuestro coche están en el garaje."],
        0,
        "Son las dos; coche is masculine singular → nuestro … está."
      ),
      fb("Complete with the ordinal (1st).", "Es mi ___ día en el trabajo.", "primer", "Primero drops the -o before a masculine singular noun: primer día."),
      ms(
        "Which are correct ways to answer \"¿A qué hora llegas?\"",
        ["Llego a las diez.", "A las diez.", "Son las diez.", "A la una."],
        [0, 1, 3],
        "\"Son las diez\" answers \"What time is it?\", not \"At what time?\""
      ),
      toEs("Their class is at 11:30.", "Su clase es a las once y media.", "Su = their. Events take ser: la clase es a las…", []),
      toEn("Tengo que estar en casa a las nueve.", "I have to be home at nine.", "Tener que + infinitive = to have to.", ["I have to be at home at nine."]),
      wo("La tercera calle a la derecha es mi calle.", "Ordinal adjectives agree: tercera calle.", "The third street on the right is my street."),
    ]
  ),
  L(
    "question-words",
    "a1r-answer-first-build-question",
    "Answer First: Build the Question",
    "Jeopardy-style: you get the answer, and you have to find the question that produced it.",
    "7 min",
    [
      sec(
        "Work backward",
        "Look at what information the answer gives. A place → ¿dónde? A time → ¿cuándo? or ¿a qué hora? A person → ¿quién? A reason → ¿por qué? An amount → ¿cuánto?",
        [
          ["Answer: Vivo en Lima. → ¿Dónde vives?", "Where do you live?"],
          ["Answer: Porque estoy enfermo. → ¿Por qué no trabajas hoy?", "Why aren't you working today?"],
        ],
        [
          mc(
            "Answer: \"Es mi hermano Pablo.\" What was the question?",
            ["¿Quién es?", "¿Qué es?", "¿Cómo es?", "¿Dónde está?"],
            0,
            "The answer identifies a person → ¿Quién?"
          ),
        ]
      ),
      sec(
        "Agreement in question words",
        "Quién and cuánto change to match what you're asking about: quiénes for several people; cuánto/cuánta/cuántos/cuántas for amounts.",
        [
          ["¿Quiénes son ellos?", "Who are they?"],
          ["¿Cuántas hermanas tienes?", "How many sisters do you have?"],
        ],
        [
          fb("Complete the question.", "¿___ libros hay en la mesa?", "Cuántos", "Libros is masculine plural → cuántos."),
        ]
      ),
    ],
    [
      mt(
        "Match each answer to its question.",
        [
          ["Mañana.", "¿Cuándo?"],
          ["En el parque.", "¿Dónde?"],
          ["Con mi madre.", "¿Con quién?"],
          ["Diez euros.", "¿Cuánto cuesta?"],
        ],
        "Look at the type of information the answer gives."
      ),
      fb("Build the question.", "—¿___ te llamas? —Me llamo Jorge.", "Cómo", "Asking someone's name uses cómo: ¿Cómo te llamas?"),
      fb("Build the question.", "—¿___ es tu cumpleaños? —Es el cinco de mayo.", "Cuándo", "A date → cuándo."),
      mc(
        "Answer: \"Son de Venezuela.\" What was the question?",
        ["¿De dónde son?", "¿Dónde están?", "¿Adónde van?", "¿Quiénes son?"],
        0,
        "Origin → ¿De dónde?"
      ),
      mc(
        "Answer: \"Vamos al cine.\" What was the question?",
        ["¿Adónde van ustedes?", "¿Dónde están ustedes?", "¿De dónde son ustedes?", "¿Cuándo van ustedes?"],
        0,
        "Movement toward a place → ¿Adónde?"
      ),
      toEs("Why are you (informal) studying Spanish?", "¿Por qué estudias español?", "Por qué (two words, accent) asks why.", ["¿Por qué tú estudias español?", "¿Por qué estás estudiando español?"]),
      wo("¿Cuántas personas hay en tu familia?", "Cuántas agrees with personas.", "How many people are there in your family?"),
    ]
  ),
  L(
    "review-possessives-prepositions-questions-2",
    "a1r-error-hunt-questions-prepositions",
    "Error Hunt: Questions & Prepositions",
    "Missing accents, missing contractions, the wrong question word — find them and fix them.",
    "7 min",
    [
      sec(
        "Accent marks in question words",
        "Question words always carry an accent: qué, quién, dónde, cuándo, cómo, cuánto. Without the accent they're connectors: que (that), donde (where, in a statement), cuando (when, in a statement).",
        [
          ["¿Dónde vives? — Vivo donde vive mi abuela.", "Where do you live? — I live where my grandmother lives."],
          ["¿Qué comes? — Creo que como pasta.", "What are you eating? — I think that I'm eating pasta."],
        ],
        [
          ms(
            "Which questions are written correctly?",
            ["¿Cuándo llegas?", "¿Quien es ella?", "¿Qué hora es?", "¿Donde está el baño?"],
            [0, 2],
            "Quién and dónde need their accents in a question."
          ),
        ]
      ),
      sec(
        "Contractions: al and del",
        "A + el → al, and de + el → del. They're not optional. They don't happen with la, los or las, or with the pronoun él.",
        [
          ["Voy al mercado.", "I'm going to the market."],
          ["Es el libro del profesor.", "It's the teacher's book."],
          ["Es el libro de él.", "It's his book. (no contraction with the pronoun él)"],
        ],
        [
          fb("Fix the contraction.", "Vamos ___ parque después de clase. (learner wrote: a el)", "al", "A + el → al."),
        ]
      ),
    ],
    [
      fb("Fix the contraction.", "La casa ___ señor Ruiz es azul. (learner wrote: de el)", "del", "De + el → del."),
      mc(
        "Which sentence is correct?",
        ["Voy a la tienda y al banco.", "Voy al tienda y al banco.", "Voy a la tienda y a el banco.", "Voy al la tienda y al banco."],
        0,
        "La tienda has no contraction; el banco → al banco."
      ),
      mc(
        "A learner asks \"¿Qué es tu número de teléfono?\" Most speakers would say…",
        ["¿Cuál es tu número de teléfono?", "¿Quién es tu número de teléfono?", "¿Cómo es tu número de teléfono?", "¿Dónde es tu número de teléfono?"],
        0,
        "Asking for one item from a set of possibilities (a number, a name, an address) → ¿Cuál es…?"
      ),
      fb("Fix the question word.", "¿___ son tus padres? —Son de Bolivia. (learner wrote: Dónde)", "De dónde", "The answer gives origin → ¿De dónde?"),
      ms(
        "Which sentences have an error?",
        ["El gato está encima del coche.", "Es la oficina de el director.", "La mochila de él está aquí.", "Vamos a los museos."],
        [1],
        "De + el director → del director. De él (pronoun) doesn't contract, and a los never contracts."
      ),
      toEs("When does the class start? I think that it starts at nine.", "¿Cuándo es la clase? Creo que es a las nueve.", "Cuándo (question) has an accent; que (that) doesn't.", ["¿Cuándo es la clase? Pienso que es a las nueve."]),
      wo("¿Por qué vas al hospital hoy?", "Por qué + verb + a + el → al.", "Why are you going to the hospital today?"),
    ]
  ),
  L(
    "gustar-2",
    "a1r-contrast-gusta-gustan",
    "Contrast Clinic: Gusta vs. Gustan",
    "The number of the thing you like — not the number of people who like it — decides gusta or gustan.",
    "7 min",
    [
      sec(
        "Who likes vs. what is liked",
        "Gustar agrees with what's liked. Me gusta el perro, me gustan los perros — the person (me) never changes the verb. Nos gusta el perro still uses gusta, even though \"we\" is plural.",
        [
          ["Nos gusta el café.", "We like coffee."],
          ["Me gustan los cafés de Colombia.", "I like Colombian coffees."],
        ],
        [
          mc(
            "\"A mis padres les ___ la música clásica.\"",
            ["gusta", "gustan", "gustamos", "gusto"],
            0,
            "The thing liked is la música (singular) → gusta, even though mis padres is plural."
          ),
        ]
      ),
      sec(
        "Actions are always singular",
        "When what you like is an activity (an infinitive), use gusta — even if there are several activities.",
        [
          ["Me gusta bailar.", "I like to dance."],
          ["Me gusta cantar y bailar.", "I like to sing and dance."],
        ],
        [
          fb("Complete with gusta or gustan.", "A Julia le ___ nadar y correr.", "gusta", "Infinitives → gusta, even two of them."),
        ]
      ),
    ],
    [
      mt(
        "Match each sentence to the reason for its verb.",
        [
          ["Te gustan las fresas.", "plural thing liked"],
          ["Te gusta la fresa.", "singular thing liked"],
          ["Te gusta leer.", "activity liked"],
          ["Les gusta el cine.", "singular thing, many people liking"],
        ],
        "Only the thing liked decides the verb."
      ),
      fb("Complete with gusta or gustan.", "¿Os ___ los videojuegos?", "gustan", "Los videojuegos is plural → gustan."),
      fb("Complete with gusta or gustan.", "A nosotros nos ___ la playa.", "gusta", "La playa is singular → gusta."),
      mc(
        "Which is correct?",
        ["No me gustan las películas de terror.", "No me gusta las películas de terror.", "No gusto las películas de terror.", "Yo no gustan las películas de terror."],
        0,
        "Películas is plural → gustan. No goes before me."
      ),
      ms(
        "Which sentences are correct?",
        ["Le gustan los gatos.", "Nos gustan la pizza.", "Me gusta viajar.", "Les gusta los deportes."],
        [0, 2],
        "Nos gusta la pizza; les gustan los deportes."
      ),
      toEs("They like the new songs.", "Les gustan las canciones nuevas.", "Canciones is plural → gustan.", ["A ellos les gustan las canciones nuevas.", "A ellas les gustan las canciones nuevas."]),
      wo("A mi hermano no le gustan las verduras.", "A + person clarifies who; no + pronoun + gustan + plural thing.", "My brother doesn't like vegetables."),
    ]
  ),
  L(
    "gustar-mastery-check",
    "a1r-dialogue-me-too-me-neither",
    "Dialogue Lab: Me Too, Me Neither",
    "Agree and disagree about likes — and learn why \"yo también\" is wrong after gustar.",
    "7 min",
    [
      sec(
        "Agreeing",
        "Because gustar sentences start with a mí / a ti, agreement mirrors that: A mí también (me too) after a positive, A mí tampoco (me neither) after a negative.",
        [
          ["—Me gusta el helado. —A mí también.", "I like ice cream. — Me too."],
          ["—No me gusta el frío. —A mí tampoco.", "I don't like the cold. — Me neither."],
        ],
        [
          mc(
            "Your friend says \"No me gustan los lunes.\" You agree. You say…",
            ["A mí tampoco.", "A mí también.", "Yo también.", "Yo tampoco."],
            0,
            "Agreeing with a negative gustar sentence → A mí tampoco."
          ),
        ]
      ),
      sec(
        "Disagreeing",
        "To disagree, flip the answer: A mí sí (I do) after a negative, A mí no (I don't) after a positive.",
        [
          ["—Me encanta el fútbol. —¡A mí no!", "I love soccer. — I don't!"],
          ["—No me gusta cocinar. —A mí sí.", "I don't like cooking. — I do."],
        ],
        [
          fb("Disagree.", "—Me gustan los perros. —A mí ___.", "no", "Disagreeing with a positive → a mí no."),
        ]
      ),
    ],
    [
      mt(
        "Match each statement with a reply that agrees.",
        [
          ["Me gusta la playa.", "A mí también."],
          ["No me gusta el tráfico.", "A mí tampoco."],
          ["Tengo hambre.", "Yo también."],
          ["No me interesa la política.", "A mí tampoco me interesa."],
        ],
        "También agrees with a positive; tampoco agrees with a negative. With an ordinary verb like tener (subject yo), the reply is yo también — a mí is only for gustar-type verbs."
      ),
      fb("Disagree.", "—No me gusta el café. —A mí ___.", "sí", "Disagreeing with a negative → a mí sí."),
      mc(
        "\"—Nos gusta mucho la ciudad. —A nosotros ___.\" (the speaker agrees)",
        ["también", "tampoco", "sí", "no"],
        0,
        "Agreement with a positive, even for nosotros → también."
      ),
      mc(
        "Why is \"Yo también\" wrong as a reply to \"Me gusta el té\"?",
        [
          "Gustar's person is expressed with a mí, so the reply mirrors a mí.",
          "Yo is too informal.",
          "También can't follow yo.",
          "It isn't wrong at all.",
        ],
        0,
        "The original sentence has no yo — it has me (a mí). The reply matches that form: A mí también."
      ),
      toEs("I don't like tomatoes. — Me neither.", "No me gustan los tomates. —A mí tampoco.", "Plural thing → gustan; agreeing with a negative → tampoco.", ["No me gustan los tomates. A mí tampoco."]),
      toEn("—Me encanta bailar. —¡A mí no!", "I love dancing. — I don't!", "Encantar works like gustar and means \"to love\" (a thing or activity).", ["I love to dance. I don't!", "I love dancing. Not me!"]),
      wo("A mis amigos tampoco les gusta el invierno.", "Tampoco can come early in the sentence to mean \"not … either.\"", "My friends don't like winter either."),
    ]
  ),
  L(
    "gustar-mastery-check",
    "a1r-spiral-gustar-questions-ser-estar",
    "Spiral Review: Gustar, Questions & Ser/Estar",
    "Interview a new classmate — every question pulls a different topic from lessons 11–24.",
    "8 min",
    [
      sec(
        "The interview",
        "Read the full interview. Then answer the checkpoints without scrolling back up — that's where the learning happens.",
        [
          ["—¿De dónde eres?", "Where are you from?"],
          ["—Soy de Quito, pero ahora estoy en Madrid por el trabajo.", "I'm from Quito, but I'm in Madrid now for work."],
          ["—¿Qué te gusta hacer los fines de semana?", "What do you like to do on weekends?"],
          ["—Me gusta pasear y me encantan los museos.", "I like to go for walks and I love museums."],
        ],
        [
          mc(
            "Where is the classmate right now?",
            ["In Madrid", "In Quito", "At a museum", "At work"],
            0,
            "Estoy en Madrid — estar for current location."
          ),
          mc(
            "Why \"me encantan\" and not \"me encanta\"?",
            ["Because los museos is plural.", "Because the speaker is plural.", "Because encantar is irregular.", "Both are correct here."],
            0,
            "Encantar, like gustar, agrees with the thing loved: los museos → encantan."
          ),
        ]
      ),
    ],
    [
      fb("Complete the interview question.", "¿___ es tu comida favorita?", "Cuál", "Picking one option from many → ¿Cuál es…?"),
      fb("Complete with ser or estar.", "Mi comida favorita ___ la paella.", "es", "Identifying something → ser."),
      fb("Complete with gusta or gustan.", "¿Te ___ los deportes?", "gustan", "Los deportes → plural → gustan."),
      mc(
        "\"—¿Cómo estás hoy? —___\"",
        ["Un poco cansado, gracias.", "Soy alto y moreno.", "Soy de Perú.", "Me gusta el cine."],
        0,
        "¿Cómo estás? asks about your current state."
      ),
      ms(
        "Which questions could get the answer \"Mi hermana\"?",
        ["¿Quién es la chica de la foto?", "¿Con quién vives?", "¿Dónde vives?", "¿A quién le gusta el chocolate?"],
        [0, 1, 3],
        "All three ask about a person. ¿Dónde? would need a place."
      ),
      toEs("Where is the museum? I like museums a lot.", "¿Dónde está el museo? Me gustan mucho los museos.", "Location → está; plural thing → gustan.", ["¿Dónde está el museo? Me gustan los museos mucho."]),
      wo("¿Por qué no te gusta estudiar por la noche?", "Por qué + no + pronoun + gusta + infinitive.", "Why don't you like studying at night?"),
    ]
  ),
  L(
    "tener-ir-hacer-hay-1",
    "a1r-mission-how-do-you-feel",
    "Real-World Mission: Tener for Feelings & Needs",
    "Hungry, cold, sleepy, in a hurry — English uses \"to be,\" Spanish uses tener. Handle a day's worth of situations.",
    "7 min",
    [
      sec(
        "Tener, not estar",
        "Many physical states use tener + a noun: tener hambre (hungry), sed (thirsty), frío (cold), calor (hot), sueño (sleepy), miedo (scared), prisa (in a hurry), razón (right).",
        [
          ["Tengo hambre. ¿Comemos?", "I'm hungry. Shall we eat?"],
          ["Los niños tienen sueño.", "The kids are sleepy."],
        ],
        [
          mc(
            "\"I'm thirsty.\"",
            ["Tengo sed.", "Estoy sed.", "Soy sed.", "Tengo sediento."],
            0,
            "Thirst is a noun (la sed) used with tener."
          ),
        ]
      ),
      sec(
        "Tener que: things you have to do",
        "Tener que + infinitive expresses obligation. Only tener changes; the second verb stays in the infinitive.",
        [
          ["Tenemos que estudiar esta noche.", "We have to study tonight."],
          ["Tienes que llamar a tu madre.", "You have to call your mom."],
        ],
        [
          fb("Complete with tener.", "Mi padre ___ que trabajar el sábado.", "tiene", "Mi padre = él → tiene."),
        ]
      ),
    ],
    [
      mt(
        "Match each situation to the right expression.",
        [
          ["It's 40°C outside.", "Tengo calor."],
          ["You skipped lunch.", "Tengo hambre."],
          ["The bus leaves in 2 minutes.", "Tengo prisa."],
          ["You're watching a horror movie.", "Tengo miedo."],
        ],
        "All four use tener + a noun where English uses \"to be\" + adjective."
      ),
      fb("Complete with tener.", "¿___ frío, chicos? Aquí hay una manta.", "Tenéis", "Chicos addressed in Spain → vosotros tenéis. (In Latin America: ¿Tienen frío?)"),
      fb("Complete with tener.", "Tú ___ razón: el examen es mañana.", "tienes", "Tú → tienes. Tener razón = to be right."),
      mc(
        "\"We have to leave now.\"",
        ["Tenemos que salir ahora.", "Tenemos salir ahora.", "Tenemos que salimos ahora.", "Estamos que salir ahora."],
        0,
        "Tener que + infinitive: the second verb doesn't conjugate."
      ),
      ms(
        "Which sentences are correct?",
        ["Mi hermana tiene veinte años.", "Estoy mucho frío.", "Tengo mucho sueño.", "Ellos tienen que estudiar."],
        [0, 2, 3],
        "Cold with tener: tengo mucho frío. Because these are nouns, use mucho/mucha, not muy."
      ),
      toEs("Are you (informal) hungry?", "¿Tienes hambre?", "Tener hambre, not estar hambriento, is the everyday way to say it.", ["¿Tú tienes hambre?"]),
      wo("No tengo miedo de los perros grandes.", "No + tener + miedo + de + what scares you.", "I'm not afraid of big dogs."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-2",
    "a1r-mission-weekend-plans",
    "Real-World Mission: Weekend Plans with Ir A",
    "Text a friend about the weekend — ir a + infinitive for plans, hacer for the weather, hay for what's going on.",
    "8 min",
    [
      sec(
        "The group chat",
        "Read the messages. Ir a + infinitive talks about what's going to happen; only ir changes form.",
        [
          ["Marta: ¿Qué vais a hacer el sábado?", "Marta: What are you all going to do on Saturday?"],
          ["Luis: Voy a jugar al fútbol. Hace buen tiempo.", "Luis: I'm going to play soccer. The weather's nice."],
          ["Ana: Nosotras vamos a ir al cine. Hay una película nueva.", "Ana: We're going to the movies. There's a new film."],
        ],
        [
          mc(
            "What is Luis going to do?",
            ["Play soccer", "Go to the movies", "Stay home", "Cook"],
            0,
            "Voy a jugar al fútbol."
          ),
          fb("Complete Marta's reply with ir.", "Yo ___ a descansar en casa.", "voy", "Yo → voy."),
        ]
      ),
      sec(
        "Weather and what's there",
        "Weather with hacer: hace sol, hace frío, hace calor, hace buen/mal tiempo. Hay (there is/are) never changes form.",
        [
          ["Hace mucho sol hoy.", "It's very sunny today."],
          ["Hay tres conciertos en el parque.", "There are three concerts in the park."],
        ],
        [
          mc(
            "\"There are many people at the beach.\"",
            ["Hay mucha gente en la playa.", "Hay muchas gente en la playa.", "Son mucha gente en la playa.", "Hacen mucha gente en la playa."],
            0,
            "Hay for existence; gente is a singular feminine noun → mucha gente."
          ),
        ]
      ),
    ],
    [
      fb("Complete with ir.", "¿Ustedes ___ a venir a la fiesta?", "van", "Ustedes → van."),
      fb("Complete with hacer.", "No vamos a la playa porque ___ frío.", "hace", "Weather → hace (always this form)."),
      mc(
        "\"Is there a pharmacy near here?\"",
        ["¿Hay una farmacia cerca de aquí?", "¿Está una farmacia cerca de aquí?", "¿Es una farmacia cerca de aquí?", "¿Hacen una farmacia cerca de aquí?"],
        0,
        "Asking whether something exists → ¿Hay…?"
      ),
      mt(
        "Match each text message to its meaning.",
        [
          ["Vamos a comer a las dos.", "We're going to eat at two."],
          ["Va a llover.", "It's going to rain."],
          ["Hace calor.", "It's hot."],
          ["No hay pan.", "There's no bread."],
        ],
        "Ir a + infinitive for plans and predictions; hacer for weather; hay for existence."
      ),
      toEs("I'm going to visit my grandparents on Sunday.", "Voy a visitar a mis abuelos el domingo.", "Voy a + infinitive. Visiting people adds the personal a.", ["El domingo voy a visitar a mis abuelos.", "Yo voy a visitar a mis abuelos el domingo."]),
      toEn("¿Qué vas a hacer esta noche?", "What are you going to do tonight?", "Vas a hacer = you're going to do.", ["What are you doing tonight?"]),
      wo("Mañana vamos a hacer una fiesta en casa.", "Time + ir a + infinitive + object + place.", "Tomorrow we're going to have a party at home."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-2",
    "a1r-contrast-hay-esta",
    "Contrast Clinic: Hay vs. Está/Están",
    "\"There is a bank\" vs. \"The bank is there\" — one of the trickiest pairs for English speakers.",
    "7 min",
    [
      sec(
        "Existence vs. location",
        "Hay says that something exists — usually with un/una, a number, or no article. Está/están says where a specific thing is — usually with el/la/los/las or a name.",
        [
          ["Hay un banco en esta calle.", "There's a bank on this street."],
          ["El banco está en esta calle.", "The bank is on this street."],
        ],
        [
          mc(
            "\"___ una farmacia al lado del hotel.\"",
            ["Hay", "Está", "Es", "Están"],
            0,
            "Una farmacia = something new, unspecified → hay."
          ),
        ]
      ),
      sec(
        "The article is your clue",
        "Un/una/unos/unas, numbers, or nothing → hay. El/la/los/las, possessives, or names → estar.",
        [
          ["Hay dos parques en mi barrio.", "There are two parks in my neighborhood."],
          ["Mis padres están en el parque.", "My parents are in the park."],
        ],
        [
          fb("Complete with hay, está or están.", "Los baños ___ al final del pasillo.", "están", "Los baños = specific → estar, plural → están."),
        ]
      ),
    ],
    [
      fb("Complete with hay, está or están.", "En la nevera ___ leche y huevos.", "hay", "No article → hay."),
      fb("Complete with hay, está or están.", "La leche ___ en la nevera.", "está", "La leche = specific → está."),
      fb("Complete with hay, está or están.", "¿Dónde ___ mis zapatos?", "están", "Mis zapatos = specific and plural → están."),
      ms(
        "Which sentences are correct?",
        ["Hay muchos estudiantes en la clase.", "Hay el profesor en la clase.", "El profesor está en la clase.", "Están unos libros en la mesa."],
        [0, 2],
        "Specific el profesor → está. Unspecified unos libros → hay unos libros."
      ),
      mc(
        "How do you ask \"Where is the bus station?\"",
        ["¿Dónde está la estación de autobuses?", "¿Dónde hay la estación de autobuses?", "¿Hay dónde la estación de autobuses?", "¿Dónde es la estación de autobuses?"],
        0,
        "A specific place's location → está."
      ),
      toEs("There is a cat in the garden. The cat is black.", "Hay un gato en el jardín. El gato es negro.", "First mention (un gato) → hay. Then describing it → ser.", []),
      wo("No hay nadie en la oficina ahora.", "No hay nadie = there's nobody.", "There's nobody in the office now."),
    ]
  ),
  L(
    "demonstratives-2",
    "a1r-transform-demonstratives",
    "Transformations: This, That & Those",
    "Move things closer or farther away and change their number — every demonstrative has to follow.",
    "7 min",
    [
      sec(
        "Three distances",
        "este (here, near me) · ese (there, near you) · aquel (over there, far from both). Each has four forms that agree with the noun.",
        [
          ["este libro · ese libro · aquel libro", "this book · that book · that book over there"],
          ["esta mesa · esa mesa · aquella mesa", "this table · that table · that table over there"],
        ],
        [
          fb("Move it farther away (near you → far from both).", "esa casa → ___ casa", "aquella", "Feminine singular, far away → aquella."),
        ]
      ),
      sec(
        "Changing number",
        "The plural forms: estos/estas, esos/esas, aquellos/aquellas. Note este → estos (not estes).",
        [
          ["este zapato → estos zapatos", "this shoe → these shoes"],
          ["aquel árbol → aquellos árboles", "that tree over there → those trees over there"],
        ],
        [
          fb("Make it plural.", "este chico → ___ chicos", "estos", "Este → estos."),
        ]
      ),
    ],
    [
      fb("Make it plural.", "esa camisa → ___ camisas", "esas", "Esa → esas."),
      fb("Move it closer (near you → near me).", "ese coche → ___ coche", "este", "Near the speaker, masculine singular → este."),
      fb("Make it plural.", "aquella montaña → ___ montañas", "aquellas", "Aquella → aquellas."),
      mc(
        "Transform \"Este pastel es rico\" to \"Those cakes (near you) are delicious.\"",
        ["Esos pasteles son ricos.", "Estos pasteles son ricos.", "Esos pasteles es rico.", "Esas pasteles son ricos."],
        0,
        "Near the listener → esos; plural agreement: pasteles son ricos."
      ),
      mt(
        "Match each demonstrative to its noun.",
        [
          ["estas", "flores"],
          ["aquel", "edificio"],
          ["esa", "silla"],
          ["estos", "platos"],
        ],
        "Match gender and number: flores (f. pl.), edificio (m. sing.), silla (f. sing.), platos (m. pl.)."
      ),
      toEs("I like this shirt but I don't like those pants (near you).", "Me gusta esta camisa pero no me gustan esos pantalones.", "Esta (near me), esos (near you); gustan for plural pantalones.", []),
      wo("¿Cuánto cuestan aquellas gafas de sol?", "Cuestan agrees with the plural gafas; aquellas = far from both of us.", "How much are those sunglasses over there?"),
    ]
  ),
  L(
    "demonstratives-2",
    "a1r-spiral-people-descriptions",
    "Spiral Review: Everything So Far — People & Descriptions",
    "A cumulative review of lessons 1–28 focused on describing people, places and things.",
    "9 min",
    [
      sec(
        "Portrait of a neighbor",
        "Read the paragraph slowly and notice which lesson each piece comes from: ser, estar, agreement, possessives, numbers, gustar, demonstratives.",
        [
          ["Esta es mi vecina, doña Carmen. Tiene setenta y dos años.", "This is my neighbor, Doña Carmen. She's seventy-two."],
          ["Es muy simpática y siempre está contenta.", "She's very nice and she's always happy."],
          ["Su casa está enfrente de nuestro edificio. Le encantan las plantas.", "Her house is across from our building. She loves plants."],
        ],
        [
          mc(
            "\"Siempre está contenta\" uses estar even with siempre. Why?",
            [
              "Contenta describes a mood — a state — even if it's frequent.",
              "Because siempre always takes estar.",
              "Because she's old.",
              "It should be es contenta.",
            ],
            0,
            "Happy (contento) is a feeling → estar. Frequency doesn't turn a state into a trait."
          ),
          fb("Complete with the right possessive.", "Doña Carmen vive con ___ gato, Bigotes.", "su", "Her cat → su."),
        ]
      ),
      sec(
        "Describe your own",
        "Now pick apart new sentences using the same tools.",
        [
          ["Aquellos chicos son mis primos. Son de Cuba.", "Those guys over there are my cousins. They're from Cuba."],
          ["Hoy están un poco nerviosos porque tienen un examen.", "Today they're a bit nervous because they have an exam."],
        ],
        [
          fb("Complete with ser or estar.", "Mis primos ___ muy altos.", "son", "Height is a trait → ser."),
        ]
      ),
    ],
    [
      mc(
        "Which description is fully correct?",
        [
          "Mi abuela tiene ochenta años y es muy divertida.",
          "Mi abuela es ochenta años y está muy divertida.",
          "Mi abuela tiene ochenta años y son muy divertida.",
          "Mi abuela tiene ochenta años y es muy divertido.",
        ],
        0,
        "Age with tener; personality with ser; adjective agrees with abuela."
      ),
      fb("Complete with the correct demonstrative (this).", "___ chicas son mis compañeras de clase.", "Estas", "Near me, feminine plural → estas."),
      fb("Complete with gusta or gustan.", "A mi vecina le ___ las flores amarillas.", "gustan", "Las flores → gustan."),
      ms(
        "Which sentences are correct?",
        ["Nuestros vecinos son muy amables.", "Esa mujer está doctora.", "¿Cuántos años tiene tu padre?", "El parque está cerca de mi casa."],
        [0, 2, 3],
        "Profession → ser: esa mujer es doctora."
      ),
      toEs("My cousins are funny but today they are tired.", "Mis primos son divertidos pero hoy están cansados.", "Trait → ser; today's state → estar.", ["Mis primos son graciosos pero hoy están cansados.", "Mis primas son divertidas pero hoy están cansadas."]),
      toEn("Aquella casa blanca es de mis abuelos.", "That white house over there is my grandparents'.", "Ser de = to belong to.", ["That white house over there belongs to my grandparents."]),
      wo("Esta es mi amiga Lucía y aquel es su novio.", "Demonstratives used alone as pronouns: esta (this one), aquel (that one over there).", "This is my friend Lucía and that's her boyfriend over there."),
    ]
  ),
  L(
    "demonstratives-2",
    "a1r-spiral-actions-plans",
    "Spiral Review: Everything So Far — Actions & Plans",
    "Part two of the cumulative review: verbs, time, questions and plans from lessons 7–28.",
    "9 min",
    [
      sec(
        "A busy Friday",
        "This schedule mixes regular verbs, irregulars (tener, ir, hacer), time, and plans with ir a.",
        [
          ["A las ocho desayuno y leo el periódico.", "At eight I have breakfast and read the paper."],
          ["A las diez tengo que ir al médico.", "At ten I have to go to the doctor."],
          ["Por la tarde voy a correr porque hace buen tiempo.", "In the afternoon I'm going to run because the weather's good."],
        ],
        [
          mc(
            "What does the person have to do at ten?",
            ["Go to the doctor", "Run", "Read the paper", "Have breakfast"],
            0,
            "Tengo que ir al médico — tener que expresses obligation."
          ),
          fb("Complete with the yo form of hacer.", "Por la noche ___ la tarea.", "hago", "Hacer is irregular in the yo form: hago."),
        ]
      ),
    ],
    [
      mt(
        "Match each yo form to its infinitive.",
        [
          ["tengo", "tener"],
          ["voy", "ir"],
          ["hago", "hacer"],
          ["soy", "ser"],
        ],
        "These four irregular yo forms show up in almost every conversation."
      ),
      fb("Complete with ir.", "Mis amigos y yo ___ a la playa los domingos.", "vamos", "Mis amigos y yo = nosotros → vamos."),
      fb("Complete the question word.", "¿___ vas a hacer después de clase?", "Qué", "Asking about an action → qué."),
      mc(
        "\"At what time do you (informal) have to work?\"",
        ["¿A qué hora tienes que trabajar?", "¿Qué hora tienes que trabajar?", "¿A qué hora tienes trabajar?", "¿A qué hora tiene que trabajas?"],
        0,
        "A qué hora + tener que + infinitive."
      ),
      ms(
        "Which sentences are correct?",
        ["Hace calor, vamos a nadar.", "Tengo que estudio mucho.", "Ellos van a comer a la una.", "¿Qué haces los sábados?"],
        [0, 2, 3],
        "After tener que the verb stays in the infinitive: tengo que estudiar mucho. The others are correct."
      ),
      toEs("What are you all going to do tomorrow?", "¿Qué van a hacer mañana?", "Ustedes → van a + infinitive.", ["¿Qué van a hacer ustedes mañana?", "¿Qué vais a hacer mañana?", "¿Qué vais a hacer vosotros mañana?"]),
      wo("Mi hermana siempre hace ejercicio por la mañana.", "Subject + adverb + hacer ejercicio + time of day.", "My sister always exercises in the morning."),
    ]
  ),
  L(
    "ser-vs-estar-drill-3",
    "a1r-story-postcard-oaxaca",
    "Story Detective: A Postcard from Oaxaca",
    "Read a postcard and work out why each ser and estar was chosen — then write the reply.",
    "8 min",
    [
      sec(
        "The postcard",
        "Read the whole postcard first. Then each checkpoint asks you to explain one of the writer's choices.",
        [
          ["¡Hola, Pablo! Estoy en Oaxaca con mi familia.", "Hi Pablo! I'm in Oaxaca with my family."],
          ["La ciudad es preciosa y la gente es muy amable.", "The city is beautiful and the people are very friendly."],
          ["Nuestro hotel está en el centro. Es pequeño pero cómodo.", "Our hotel is downtown. It's small but comfortable."],
          ["Hoy estoy un poco enfermo, pero mañana vamos al mercado.", "Today I'm a bit sick, but tomorrow we're going to the market."],
        ],
        [
          mt(
            "Match each phrase from the postcard to the reason for its verb.",
            [
              ["Estoy en Oaxaca", "location"],
              ["La ciudad es preciosa", "characteristic"],
              ["Es pequeño", "description of size"],
              ["Estoy un poco enfermo", "temporary condition"],
            ],
            "Location and temporary conditions → estar. Characteristics and descriptions → ser."
          ),
        ]
      ),
      sec(
        "Write the reply",
        "Now Pablo writes back. Choose each verb the way the postcard writer did.",
        [
          ["¡Qué bien! Yo estoy en casa. Mi ciudad no es tan bonita.", "Great! I'm at home. My city isn't as pretty."],
        ],
        [
          fb("Complete Pablo's reply.", "Mis padres ___ en el trabajo todo el día.", "están", "Where they are → estar."),
          fb("Complete Pablo's reply.", "Mi nuevo apartamento ___ muy grande.", "es", "Size as a description → ser."),
        ]
      ),
    ],
    [
      mc(
        "Why does the writer say \"la gente es muy amable\"?",
        ["Friendliness is a general characteristic of the people.", "The people are there right now.", "Gente is plural.", "Amable only goes with ser."],
        0,
        "A general quality → ser. (Gente is grammatically singular, which is why it's es, not son.)"
      ),
      fb("Complete with ser or estar.", "El mercado de Oaxaca ___ famoso por su chocolate.", "es", "Being famous is a characteristic → ser."),
      fb("Complete with ser or estar.", "El chocolate ___ caliente, ¡cuidado!", "está", "Its temperature right now → estar."),
      ms(
        "Which sentences could appear in a postcard correctly?",
        ["La playa está muy limpia hoy.", "Mi hermana es en la piscina.", "El museo es enorme.", "Nosotros somos muy contentos."],
        [0, 2],
        "Location → está en la piscina. A feeling → estamos muy contentos."
      ),
      toEs("The market is near the hotel and it's very big.", "El mercado está cerca del hotel y es muy grande.", "Location → estar; size → ser.", ["El mercado está cerca del hotel y es enorme."]),
      toEn("Hoy estamos cansados pero muy contentos.", "Today we're tired but very happy.", "Both are states → estar.", ["Today we are tired but very happy."]),
      wo("La comida de Oaxaca es deliciosa y muy barata.", "Characteristics of the food → ser.", "The food in Oaxaca is delicious and very cheap."),
    ]
  ),
  L(
    "ser-vs-estar-drill-3",
    "a1r-mission-hotel-check-in",
    "Real-World Mission: Checking Into a Hotel",
    "You're at the front desk. Understand the receptionist and ask what you need — ser, estar, hay and time all at once.",
    "8 min",
    [
      sec(
        "At the front desk",
        "Listen for the verb choices: the room's location uses estar, times of events use ser, and what the hotel has uses hay.",
        [
          ["—Buenas tardes. Su habitación es la 305. Está en el tercer piso.", "Good afternoon. Your room is 305. It's on the third floor."],
          ["—¿A qué hora es el desayuno?", "What time is breakfast?"],
          ["—Es de siete a diez. El restaurante está al lado de la recepción.", "It's from seven to ten. The restaurant is next to reception."],
          ["—¿Hay wifi en las habitaciones?", "Is there wifi in the rooms?"],
        ],
        [
          mc(
            "What floor is the room on?",
            ["The third", "The fifth", "The first", "The tenth"],
            0,
            "Está en el tercer piso — tercero shortens to tercer before a masculine noun."
          ),
          fb("Complete with ser or estar.", "El restaurante ___ al lado de la recepción.", "está", "Location → estar."),
        ]
      ),
      sec(
        "Problems with the room",
        "Something's wrong. Complaints about a room's condition use estar.",
        [
          ["La habitación está sucia.", "The room is dirty."],
          ["El aire acondicionado no funciona y hace mucho calor.", "The AC doesn't work and it's very hot."],
        ],
        [
          mc(
            "\"The shower is broken.\"",
            ["La ducha está rota.", "La ducha es rota.", "La ducha hay rota.", "La ducha está roto."],
            0,
            "A condition → estar; ducha is feminine → rota."
          ),
        ]
      ),
    ],
    [
      fb("Ask the receptionist.", "¿Dónde ___ el ascensor?", "está", "Location of a specific thing → está."),
      fb("Ask the receptionist.", "¿___ una piscina en el hotel?", "Hay", "Asking whether something exists → hay."),
      fb("Complete the receptionist's answer.", "La piscina ___ abierta hasta las nueve.", "está", "Open/closed is a changing condition → estar."),
      mt(
        "Match each question to the receptionist's answer.",
        [
          ["¿Cuál es mi habitación?", "Es la 212."],
          ["¿Dónde está el gimnasio?", "Está en el sótano."],
          ["¿Hay toallas limpias?", "Sí, hay en el armario."],
          ["¿A qué hora es la salida?", "Es a las doce."],
        ],
        "Identification and scheduled times → ser; location → estar; existence → hay."
      ),
      toEs("Excuse me, the room is very noisy.", "Perdón, la habitación es muy ruidosa.", "Noisy as a general feature of the room → ser. If it's noisy just right now, está muy ruidosa also works.", ["Disculpe, la habitación es muy ruidosa.", "Perdón, la habitación está muy ruidosa.", "Disculpe, la habitación está muy ruidosa."]),
      toEn("La salida es a las once y el taxi está en la puerta.", "Check-out is at eleven and the taxi is at the door.", "Scheduled time → ser; location → estar.", ["Checkout is at eleven and the taxi is at the door."]),
      wo("Nuestra habitación está en el segundo piso.", "Possessive + noun + estar + location.", "Our room is on the second floor."),
    ]
  ),
  L(
    "present-tense-verbs-drill-3",
    "a1r-error-hunt-present-traps",
    "Error Hunt: Present-Tense Traps",
    "Unconjugated verbs, mixed-up persons and irregular yo forms — the most common present-tense slips, caught in the act.",
    "8 min",
    [
      sec(
        "Trap 1: The irregular yo",
        "Most verbs are regular, but a few everyday verbs have a surprise in the yo form: soy, estoy, voy, tengo, hago. Learners often regularize them.",
        [
          ["✗ Yo teno un perro. → ✓ Yo tengo un perro.", "I have a dog."],
          ["✗ Yo hace la cena. → ✓ Yo hago la cena.", "I make dinner."],
        ],
        [
          mc(
            "Fix \"Yo so estudiante.\"",
            ["Yo soy estudiante.", "Yo es estudiante.", "Yo eres estudiante.", "Yo estoy estudiante."],
            0,
            "Ser → yo soy."
          ),
        ]
      ),
      sec(
        "Trap 2: Ustedes vs. vosotros",
        "Ustedes always takes the ellos form (-an/-en). Vosotros has its own form (-áis/-éis/-ís). Mixing them is a very common slip.",
        [
          ["✗ Ustedes habláis. → ✓ Ustedes hablan.", "You all speak."],
          ["✓ Vosotros habláis.", "You all speak. (Spain)"],
        ],
        [
          fb("Fix the verb.", "¿Ustedes ___ en el centro? (learner wrote: vivís)", "viven", "Ustedes → ellos form: viven."),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Yo ___ al gimnasio los martes. (learner wrote: ir)", "voy", "Ir is irregular: yo voy."),
      fb("Fix the verb.", "Mi novio y yo ___ en un restaurante. (learner wrote: trabajan)", "trabajamos", "Mi novio y yo = nosotros → trabajamos."),
      fb("Fix the verb.", "¿Tú ___ el periódico? (learner wrote: lee)", "lees", "Tú → -es: lees."),
      ms(
        "Which sentences are correct?",
        ["Yo hago la tarea.", "Ella tene dos gatos.", "Vosotros corréis mucho.", "Nosotros estamos aquí."],
        [0, 2, 3],
        "Tener → ella tiene."
      ),
      mc(
        "Which sentence has NO error?",
        ["Mis padres viven en Lima.", "Mis padres vive en Lima.", "Mis padres vivir en Lima.", "Mis padres vivimos en Lima."],
        0,
        "Mis padres = ellos → viven."
      ),
      toEs("I do my homework and then I go to the park.", "Hago mi tarea y luego voy al parque.", "Two irregular yo forms: hago and voy.", ["Yo hago mi tarea y luego voy al parque.", "Hago la tarea y luego voy al parque.", "Hago mi tarea y después voy al parque."]),
      wo("Yo estoy en casa y tengo mucho trabajo.", "Two irregular yo forms in one sentence: estoy and tengo.", "I'm at home and I have a lot of work."),
    ]
  ),
  L(
    "present-tense-verbs-drill-3",
    "a1r-dialogue-a-day-in-the-life",
    "Dialogue Lab: A Day in the Life",
    "A radio host interviews a baker about her day. Follow the conversation and answer in character.",
    "8 min",
    [
      sec(
        "The interview",
        "Every verb here is in the present tense. Notice how the host uses usted and the baker answers with yo.",
        [
          ["—¿A qué hora trabaja usted?", "What time do you work?"],
          ["—Trabajo de cuatro a doce. Preparo el pan muy temprano.", "I work from four to twelve. I make the bread very early."],
          ["—¿Y su familia la ayuda?", "And does your family help you?"],
          ["—Sí, mi hijo vende el pan y mi marido limpia la panadería.", "Yes, my son sells the bread and my husband cleans the bakery."],
        ],
        [
          mt(
            "Who does what at the bakery?",
            [
              ["La panadera", "prepara el pan"],
              ["Su hijo", "vende el pan"],
              ["Su marido", "limpia la panadería"],
            ],
            "Prepara, vende, limpia — each verb matches its él/ella subject."
          ),
        ]
      ),
      sec(
        "Answer in character",
        "Now you're the baker. Answer the host's questions with yo forms.",
        [
          ["—¿Descansa usted por la tarde? —Sí, descanso dos horas.", "Do you rest in the afternoon? Yes, I rest for two hours."],
        ],
        [
          fb("Answer as the baker.", "—¿Usted come en la panadería? —No, ___ en casa.", "como", "The question uses usted, so you answer with yo: como."),
        ]
      ),
    ],
    [
      fb("Answer as the baker.", "—¿Usted abre la tienda a las siete? —Sí, ___ a las siete.", "abro", "Abrir → yo abro."),
      fb("Answer as the baker.", "—¿Ustedes venden pasteles? —Sí, ___ pasteles los domingos.", "vendemos", "An ustedes question → nosotros answer: vendemos."),
      mc(
        "The host asks \"¿Dónde vive usted?\" Which answer fits?",
        ["Vivo encima de la panadería.", "Vive encima de la panadería.", "Vivimos encima de la panadería usted.", "Vives encima de la panadería."],
        0,
        "Usted question → yo answer: vivo."
      ),
      mc(
        "How would the host ask the baker's son the same question informally?",
        ["¿A qué hora trabajas?", "¿A qué hora trabaja usted?", "¿A qué hora trabajan?", "¿A qué hora trabajo?"],
        0,
        "Informal tú → trabajas."
      ),
      toEs("My husband cleans and my son sells the bread.", "Mi marido limpia y mi hijo vende el pan.", "Both subjects are él → -a / -e endings.", ["Mi esposo limpia y mi hijo vende el pan."]),
      toEn("¿Usted descansa los domingos?", "Do you rest on Sundays?", "Los domingos = on Sundays (every Sunday).", ["Do you rest on Sunday?"]),
      wo("Mi familia y yo trabajamos juntos en la panadería.", "Mi familia y yo = nosotros → trabajamos.", "My family and I work together at the bakery."),
    ]
  ),
  L(
    "adjectives-gender-number-drill-3",
    "a1r-contrast-buen-gran",
    "Contrast Clinic: Buen, Gran & Adjectives Before the Noun",
    "Some adjectives shorten before a noun, and grande even changes its meaning. Minimal pairs make it stick.",
    "7 min",
    [
      sec(
        "Shortened forms",
        "Before a masculine singular noun, bueno → buen, malo → mal, primero → primer, tercero → tercer. The feminine and plural forms don't shorten.",
        [
          ["un buen amigo / una buena amiga", "a good friend"],
          ["un mal día / unos malos días", "a bad day / some bad days"],
        ],
        [
          fb("Complete with bueno in the right form.", "Es un ___ libro.", "buen", "Before a masculine singular noun → buen."),
        ]
      ),
      sec(
        "Gran vs. grande",
        "Grande after the noun means big. Before any singular noun it becomes gran and means great.",
        [
          ["una casa grande", "a big house"],
          ["una gran casa", "a great house"],
          ["un hombre grande / un gran hombre", "a big man / a great man"],
        ],
        [
          mc(
            "\"Picasso es un ___ artista.\" (Picasso is a great artist.)",
            ["gran", "grande", "grandes", "buen"],
            0,
            "Before the noun, meaning \"great\" → gran."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["un amigo grande", "a big friend"],
          ["un gran amigo", "a great friend"],
          ["un buen día", "a good day"],
          ["una buena idea", "a good idea"],
        ],
        "Grande after the noun = size; gran before = greatness. Buena doesn't shorten."
      ),
      fb("Complete with malo in the right form.", "Hoy hace ___ tiempo.", "mal", "Tiempo is masculine singular → mal."),
      fb("Complete with primero in the right form.", "Es la ___ vez que viajo sola.", "primera", "Vez is feminine → primera (no shortening)."),
      ms(
        "Which phrases are correct?",
        ["un bueno restaurante", "un buen restaurante", "una gran ciudad", "unos buenos amigos"],
        [1, 2, 3],
        "Bueno shortens to buen before a masculine singular noun."
      ),
      mc(
        "\"Madrid is a big city\" (about size) is…",
        ["Madrid es una ciudad grande.", "Madrid es una gran ciudad.", "Madrid es una grande ciudad.", "Madrid es una ciudad gran."],
        0,
        "Size → grande after the noun."
      ),
      toEs("He is a good teacher and a great person.", "Es un buen profesor y una gran persona.", "Buen before masculine profesor; gran before persona.", ["Él es un buen profesor y una gran persona."]),
      wo("Hoy es el primer día de clase.", "Primero → primer before día.", "Today is the first day of class."),
    ]
  ),
  L(
    "adjectives-gender-number-drill-3",
    "a1r-mission-clothes-shopping",
    "Real-World Mission: Shopping for Clothes",
    "Colors, sizes and prices at a clothing store — every adjective has to agree with what you're buying.",
    "8 min",
    [
      sec(
        "In the store",
        "Colors are adjectives: they come after the noun and agree with it. Colors ending in -e or a consonant (verde, azul, gris) only change for plural.",
        [
          ["—Busco una camisa blanca.", "I'm looking for a white shirt."],
          ["—¿Y estos pantalones azules?", "And these blue pants?"],
          ["—Son muy bonitos, pero son caros.", "They're very nice, but they're expensive."],
        ],
        [
          fb("Complete with the color (rojo).", "Me gustan esas faldas ___.", "rojas", "Faldas is feminine plural → rojas."),
        ]
      ),
      sec(
        "Paying",
        "¿Cuánto cuesta? for one item, ¿Cuánto cuestan? for more than one.",
        [
          ["—¿Cuánto cuestan los zapatos negros?", "How much are the black shoes?"],
          ["—Cuestan sesenta euros.", "They're sixty euros."],
        ],
        [
          mc(
            "\"How much is this jacket?\"",
            ["¿Cuánto cuesta esta chaqueta?", "¿Cuánto cuestan esta chaqueta?", "¿Cuánta cuesta esta chaqueta?", "¿Cuánto es estas chaquetas?"],
            0,
            "One jacket → cuesta. Cuánto doesn't change here."
          ),
        ]
      ),
    ],
    [
      fb("Complete with the color (verde).", "Tengo dos camisetas ___.", "verdes", "Verde → verdes in the plural."),
      fb("Complete with the color (gris).", "Busco un abrigo ___.", "gris", "Masculine singular → gris (no change)."),
      mt(
        "Match each item to its correct description.",
        [
          ["los calcetines", "blancos"],
          ["la corbata", "amarilla"],
          ["las botas", "marrones"],
          ["el vestido", "negro"],
        ],
        "Masculine plural, feminine singular, plural of marrón, masculine singular."
      ),
      ms(
        "Which sentences are correct?",
        ["Esta falda es muy cara.", "Los zapatos son baratas.", "Me gusta el suéter azul.", "Las camisas blancos son bonitas."],
        [0, 2],
        "Zapatos → baratos. Camisas → blancas."
      ),
      toEs("These black pants are very expensive.", "Estos pantalones negros son muy caros.", "Pantalones is masculine plural — every word agrees.", []),
      toEn("¿Tiene esta camisa en azul?", "Do you have this shirt in blue?", "Usted form (tiene) — polite with a shop assistant.", ["Do you have this shirt in blue color?"]),
      wo("La chaqueta roja cuesta cincuenta dólares.", "Noun + color + cuesta + price.", "The red jacket costs fifty dollars."),
    ]
  ),
  L(
    "possessives-prepositions-drill-3",
    "a1r-mission-around-town",
    "Real-World Mission: Around Town",
    "Read a neighborhood map description and locate everything with prepositions of place.",
    "8 min",
    [
      sec(
        "The neighborhood",
        "Picture it as you read. Every location phrase ends in de, which contracts with el to del.",
        [
          ["La farmacia está entre el banco y el café.", "The pharmacy is between the bank and the café."],
          ["El café está enfrente del parque.", "The café is across from the park."],
          ["La escuela está lejos del centro.", "The school is far from downtown."],
          ["El supermercado está cerca de mi casa.", "The supermarket is near my house."],
        ],
        [
          mc(
            "What's between the bank and the café?",
            ["The pharmacy", "The school", "The park", "The supermarket"],
            0,
            "La farmacia está entre el banco y el café."
          ),
          fb("Complete with de + el.", "El café está enfrente ___ parque.", "del", "De + el → del."),
        ]
      ),
    ],
    [
      mt(
        "Match each preposition to its meaning.",
        [
          ["entre", "between"],
          ["enfrente de", "across from"],
          ["lejos de", "far from"],
          ["cerca de", "near"],
        ],
        "Note that entre doesn't take de."
      ),
      fb("Complete the direction.", "El banco está a la izquierda ___ la farmacia.", "de", "A la izquierda de = to the left of. La doesn't contract."),
      fb("Complete the direction.", "El hotel está al lado ___ museo.", "del", "Al lado de + el museo → del museo."),
      mc(
        "\"The park is far from the station.\"",
        ["El parque está lejos de la estación.", "El parque es lejos de la estación.", "El parque está lejos la estación.", "El parque está lejos del la estación."],
        0,
        "Location → está; lejos de + la (no contraction)."
      ),
      ms(
        "Which are correct?",
        ["Vivo cerca del hospital.", "Trabajo entre de dos tiendas.", "El gato está debajo de la cama.", "El cine está a la derecha del banco."],
        [0, 2, 3],
        "Entre doesn't take de: entre dos tiendas."
      ),
      toEs("The school is next to the park and near my house.", "La escuela está al lado del parque y cerca de mi casa.", "Al lado de + el → del.", []),
      wo("¿Hay un restaurante cerca del hotel?", "Hay + something + cerca de + el → del.", "Is there a restaurant near the hotel?"),
    ]
  ),
  L(
    "possessives-prepositions-drill-3",
    "a1r-contrast-apostrophe-s",
    "Contrast Clinic: Saying 's in Spanish",
    "Spanish has no 's. Practice turning English possessives into de phrases and possessive adjectives.",
    "7 min",
    [
      sec(
        "Turn it around",
        "English puts the owner first (Ana's car). Spanish puts the thing first and the owner after de: el coche de Ana.",
        [
          ["el coche de Ana", "Ana's car"],
          ["los perros de mis vecinos", "my neighbors' dogs"],
          ["la madre de mi amigo", "my friend's mother"],
        ],
        [
          mc(
            "\"My brother's room\"",
            ["el cuarto de mi hermano", "mi hermano cuarto", "el hermano de mi cuarto", "el cuarto mi hermano"],
            0,
            "Thing + de + owner."
          ),
        ]
      ),
      sec(
        "When su is ambiguous",
        "Su coche could be his, her, their or your car. When it's unclear, use de + person instead: el coche de él, el coche de ella, el coche de ustedes.",
        [
          ["Ana y Luis tienen coches. El coche de ella es rojo.", "Ana and Luis have cars. Her car is red."],
        ],
        [
          fb("Clarify \"his.\"", "El coche de ___ es azul.", "él", "De + the pronoun él doesn't contract — and it keeps its accent."),
        ]
      ),
    ],
    [
      fb("Translate the possessive.", "Es la casa ___ mis abuelos. (my grandparents' house)", "de", "Thing + de + owner."),
      fb("Translate the possessive.", "Son los libros ___ profesor. (the teacher's books)", "del", "De + el profesor → del profesor."),
      mc(
        "\"Carmen's children are tall.\"",
        ["Los hijos de Carmen son altos.", "Carmen hijos son altos.", "Los Carmen hijos son altos.", "Los hijos de Carmen es altos."],
        0,
        "Los hijos de Carmen, and ser agrees with hijos → son."
      ),
      mt(
        "Match the English to the Spanish.",
        [
          ["the boy's ball", "la pelota del niño"],
          ["the girls' ball", "la pelota de las niñas"],
          ["her ball", "la pelota de ella"],
          ["their ball", "la pelota de ellos"],
        ],
        "De + el contracts; de + las, de + ella, de + ellos don't."
      ),
      toEs("My mother's sister lives in Chile.", "La hermana de mi madre vive en Chile.", "Thing (la hermana) + de + owner (mi madre).", ["La hermana de mi mamá vive en Chile."]),
      toEn("La bicicleta de mi hermana es nueva.", "My sister's bicycle is new.", "De + owner → 's in English.", ["My sister's bike is new."]),
      wo("¿Dónde está el teléfono de tu padre?", "Thing + de + owner inside a question.", "Where is your father's phone?"),
    ]
  ),
  L(
    "question-words-drill-3",
    "a1r-interview-lab",
    "Interview Lab: Getting to Know Someone",
    "Conduct a full get-to-know-you interview with a new coworker — you ask, then you answer.",
    "8 min",
    [
      sec(
        "Your questions",
        "A good interview uses a different question word each time. Here's the start of yours.",
        [
          ["¿Cómo te llamas?", "What's your name?"],
          ["¿De dónde eres?", "Where are you from?"],
          ["¿Cuántos años tienes?", "How old are you?"],
          ["¿Qué te gusta hacer?", "What do you like to do?"],
        ],
        [
          fb("Write the next question.", "¿___ vives? —Vivo en el barrio de Palermo.", "Dónde", "A place → dónde."),
          fb("Write the next question.", "¿Con ___ vives? —Con mi novia y mi gato.", "quién", "Who you live with → con quién."),
        ]
      ),
      sec(
        "Now you're interviewed",
        "Your coworker asks you the same questions. Answer each one in a complete sentence.",
        [
          ["—¿Cuál es tu comida favorita? —Mi comida favorita es la pasta.", "What's your favorite food? My favorite food is pasta."],
        ],
        [
          mc(
            "\"¿Cuántos hermanos tienes?\" The best answer is…",
            ["Tengo dos hermanos.", "Soy dos hermanos.", "Hay dos hermanos.", "Tengo dos años."],
            0,
            "The question uses tener, so the answer does too: tengo dos hermanos."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each question to a good answer.",
        [
          ["¿Cuándo es tu cumpleaños?", "Es el sábado."],
          ["¿Por qué estudias español?", "Porque me encanta viajar."],
          ["¿Cómo es tu jefe?", "Es serio pero amable."],
          ["¿Adónde vas de vacaciones?", "Voy a la playa."],
        ],
        "Cuándo → time, por qué → reason (porque), cómo es → description, adónde → destination."
      ),
      fb("Complete the question.", "¿___ idiomas hablas? —Hablo tres.", "Cuántos", "Idiomas is masculine plural (el idioma) → cuántos."),
      fb("Answer the question.", "—¿Por qué estás cansado? —___ trabajo mucho.", "Porque", "Answering why → porque (one word, no accent)."),
      mc(
        "Which question would you ask to find out someone's job?",
        ["¿En qué trabajas?", "¿Dónde eres?", "¿Cuál trabajas?", "¿Quién trabajas?"],
        0,
        "¿En qué trabajas? = What do you do for work?"
      ),
      toEs("What is your phone number?", "¿Cuál es tu número de teléfono?", "Cuál, not qué, before es when asking for specific information.", ["¿Cuál es su número de teléfono?"]),
      toEn("¿Qué haces los fines de semana?", "What do you do on weekends?", "Haces = you do (hacer).", ["What do you do on the weekends?", "What do you do at the weekend?"]),
      wo("¿Por qué no te gusta tu trabajo?", "Por qué + no + te gusta + noun.", "Why don't you like your job?"),
    ]
  ),
  L(
    "question-words-drill-3",
    "a1r-contrast-que-cual-donde",
    "Contrast Clinic: Qué vs. Cuál · Dónde, Adónde, De dónde",
    "Two families of question words that trip up English speakers — sorted out with side-by-side pairs.",
    "7 min",
    [
      sec(
        "Qué vs. cuál",
        "Before ser, use qué to ask for a definition and cuál to pick out a specific one. ¿Qué es la paella? asks what paella is. ¿Cuál es tu plato favorito? asks which one.",
        [
          ["¿Qué es un aguacate?", "What is an avocado? (definition)"],
          ["¿Cuál es tu dirección?", "What is your address? (the specific one)"],
        ],
        [
          mc(
            "\"___ es tu color favorito?\"",
            ["¿Cuál", "¿Qué", "¿Quién", "¿Cuánto"],
            0,
            "Picking one from the set of colors → cuál."
          ),
        ]
      ),
      sec(
        "Three kinds of where",
        "Dónde = where (location). Adónde = to where (with movement verbs like ir). De dónde = from where (origin).",
        [
          ["¿Dónde estás?", "Where are you?"],
          ["¿Adónde vas?", "Where are you going?"],
          ["¿De dónde eres?", "Where are you from?"],
        ],
        [
          fb("Complete the question.", "¿___ van ustedes este verano?", "Adónde", "Ir = movement → adónde."),
        ]
      ),
    ],
    [
      fb("Complete the question.", "¿___ es tu profesora? —Es de Uruguay.", "De dónde", "Origin → de dónde."),
      fb("Complete the question.", "¿___ está el baño?", "Dónde", "Location → dónde."),
      mc(
        "\"___ es la capital de Perú?\"",
        ["¿Cuál", "¿Qué", "¿Dónde", "¿Cómo"],
        0,
        "Picking one specific city → cuál. (The answer: Lima.)"
      ),
      mc(
        "\"___ es un 'chivito'?\" (asking for a definition)",
        ["¿Qué", "¿Cuál", "¿Quién", "¿Adónde"],
        0,
        "Asking what something is → qué."
      ),
      mt(
        "Match each question to its answer.",
        [
          ["¿Dónde trabajas?", "En un hospital."],
          ["¿Adónde vas?", "Al hospital."],
          ["¿De dónde es el doctor?", "De Colombia."],
          ["¿Qué es un hospital?", "Un lugar para los enfermos."],
        ],
        "En (in) answers dónde, a (to) answers adónde, de (from) answers de dónde, and a definition answers qué es."
      ),
      toEs("Where are you going tonight?", "¿Adónde vas esta noche?", "Movement → adónde.", ["¿Adónde vas tú esta noche?", "¿A dónde vas esta noche?"]),
      wo("¿Cuál es el nombre de tu perro?", "Cuál es + the specific item.", "What's your dog's name?"),
    ]
  ),
  L(
    "gustar-drill-3",
    "a1r-transform-gustar-persons",
    "Transformations: Gustar Across Every Person",
    "Keep the thing liked, change the person who likes it — six people, one sentence.",
    "7 min",
    [
      sec(
        "Only the pronoun changes",
        "When you change who likes something, only the pronoun moves: me, te, le, nos, os, les. The verb stays gusta or gustan.",
        [
          ["Me gusta el chocolate. → Nos gusta el chocolate.", "I like chocolate. → We like chocolate."],
          ["Te gustan los gatos. → Les gustan los gatos.", "You like cats. → They like cats."],
        ],
        [
          fb("Change \"I\" to \"we.\"", "Me gusta la música. → ___ gusta la música.", "Nos", "Nosotros → nos. The verb doesn't change."),
        ]
      ),
      sec(
        "Adding a + person",
        "Le and les are ambiguous, so Spanish often adds a + person for clarity or emphasis: A Juan le gusta… / A ellas les gusta…",
        [
          ["A mi madre le encanta el jazz.", "My mother loves jazz."],
          ["A mis abuelos les gustan los parques.", "My grandparents like parks."],
        ],
        [
          fb("Change \"my mother\" to \"my parents.\"", "A mi madre le gusta el té. → A mis padres ___ gusta el té.", "les", "Plural person → les. The thing (el té) is still singular → gusta."),
        ]
      ),
    ],
    [
      fb("Change \"you\" (tú) to \"you all\" (vosotros).", "Te gustan las películas. → ___ gustan las películas.", "Os", "Vosotros → os."),
      fb("Change \"he\" to \"I.\"", "A él le encanta cocinar. → A mí ___ encanta cocinar.", "me", "A mí → me."),
      mc(
        "Transform \"Me interesa la historia\" → \"They are interested in history.\"",
        ["Les interesa la historia.", "Les interesan la historia.", "Le interesa la historia.", "Ellos interesan la historia."],
        0,
        "Ellos → les. La historia is singular → interesa."
      ),
      mt(
        "Match each person to the right pronoun.",
        [
          ["a ti", "te"],
          ["a nosotras", "nos"],
          ["a usted", "le"],
          ["a ustedes", "les"],
        ],
        "Usted and ustedes use the third-person pronouns le and les."
      ),
      ms(
        "Which transformations of \"Me gustan los tacos\" are correct?",
        ["Te gustan los tacos.", "Nos gustamos los tacos.", "A ella le gustan los tacos.", "Les gusta los tacos."],
        [0, 2],
        "The verb always stays gustan here, because los tacos is plural."
      ),
      toEs("We love dogs but they don't like cats.", "Nos encantan los perros pero no les gustan los gatos.", "Both verbs agree with the plural things liked.", ["Nos encantan los perros, pero a ellos no les gustan los gatos.", "Nos encantan los perros pero a ellos no les gustan los gatos."]),
      wo("A usted le gusta el café con leche.", "A usted + le + gusta + singular thing.", "You (formal) like coffee with milk."),
    ]
  ),
  L(
    "gustar-drill-3",
    "a1r-mission-dinner-for-friends",
    "Real-World Mission: Planning a Dinner for Friends",
    "Your friends each have likes, dislikes and allergies. Use gustar, encantar and interesar to plan a menu everyone can eat.",
    "8 min",
    [
      sec(
        "The guest list",
        "Read the notes about each guest. Pay attention to whether the verb is gusta or gustan.",
        [
          ["A Marta le encanta el pescado.", "Marta loves fish."],
          ["A Luis no le gustan las verduras.", "Luis doesn't like vegetables."],
          ["A los gemelos les gusta todo, pero no comen carne.", "The twins like everything, but they don't eat meat."],
        ],
        [
          mc(
            "Which dish could Luis have a problem with?",
            ["Una ensalada de verduras", "Pescado con arroz", "Pasta con queso", "Helado de chocolate"],
            0,
            "Luis doesn't like vegetables — a vegetable salad is the obvious problem."
          ),
          fb("Complete the note.", "A los gemelos no les ___ la carne.", "gusta", "La carne is singular → gusta."),
        ]
      ),
      sec(
        "Your menu",
        "Write the plan: what you're going to cook and why each guest will like it.",
        [
          ["Voy a cocinar pescado porque a Marta le encanta.", "I'm going to cook fish because Marta loves it."],
          ["De postre, hay helado. ¡A todos nos gusta el helado!", "For dessert there's ice cream. We all like ice cream!"],
        ],
        [
          fb("Complete the plan.", "También hay pasta porque a los gemelos les ___ mucho.", "gusta", "Referring back to la pasta (singular) → gusta."),
        ]
      ),
    ],
    [
      mt(
        "Match each guest note to its meaning.",
        [
          ["Le encanta el queso.", "She loves cheese."],
          ["No le interesan los postres.", "He's not interested in desserts."],
          ["Les gustan las frutas.", "They like fruit."],
          ["Nos gusta cocinar juntos.", "We like cooking together."],
        ],
        "Encantar = to love; interesar = to interest. All work like gustar."
      ),
      fb("Complete with encantar.", "A mi hermana le ___ los postres de chocolate.", "encantan", "Los postres is plural → encantan."),
      mc(
        "\"Marta doesn't like spicy food.\"",
        ["A Marta no le gusta la comida picante.", "Marta no gusta la comida picante.", "A Marta no le gustan la comida picante.", "A Marta no les gusta la comida picante."],
        0,
        "A + person + no + le + gusta + singular thing."
      ),
      ms(
        "Which lines could go in your party notes?",
        ["A todos les gusta la pizza.", "A Luis le encantan el arroz.", "No nos interesa el fútbol.", "A mí me gustan las fresas."],
        [0, 2, 3],
        "El arroz is singular → le encanta el arroz."
      ),
      toEs("My friends love Mexican food.", "A mis amigos les encanta la comida mexicana.", "La comida is singular → encanta.", ["Mis amigos les encanta la comida mexicana.", "A mis amigas les encanta la comida mexicana."]),
      toEn("¿Te interesa cocinar conmigo?", "Are you interested in cooking with me?", "Interesar + infinitive; conmigo = with me.", ["Do you want to cook with me?", "Are you interested in cooking with me?"]),
      wo("A todos mis amigos les gusta el chocolate.", "A + people + les + gusta + singular thing.", "All my friends like chocolate."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-drill-3",
    "a1r-mission-weather-report",
    "Real-World Mission: The Weather Report",
    "Read a weekend forecast and decide what everyone is going to do — hacer, hay, tener and ir a together.",
    "7 min",
    [
      sec(
        "The forecast",
        "Weather uses hace + noun: hace sol, hace calor, hace frío, hace viento, hace buen/mal tiempo. To ask: ¿Qué tiempo hace?",
        [
          ["El sábado hace sol y mucho calor.", "On Saturday it's sunny and very hot."],
          ["El domingo hace viento y hace frío.", "On Sunday it's windy and cold."],
        ],
        [
          mc(
            "What's the weather like on Sunday?",
            ["Windy and cold", "Sunny and hot", "Rainy", "Nice"],
            0,
            "Hace viento y hace frío."
          ),
        ]
      ),
      sec(
        "Making plans",
        "Now connect the weather to plans: ir a + infinitive, and tener for how you feel.",
        [
          ["Si hace calor, vamos a ir a la piscina.", "If it's hot, we're going to go to the pool."],
          ["El domingo voy a estar en casa porque tengo frío.", "On Sunday I'm going to be at home because I'm cold."],
        ],
        [
          fb("Complete the plan.", "El sábado hace sol, así que ___ a jugar al tenis.", "vamos", "Nosotros → vamos a + infinitive."),
        ]
      ),
    ],
    [
      fb("Complete the forecast.", "Hoy ___ mal tiempo.", "hace", "Weather → hace."),
      fb("Complete with tener.", "Hace mucho sol y los niños ___ calor.", "tienen", "People feeling hot → tener calor."),
      mc(
        "\"It's very cold today.\"",
        ["Hoy hace mucho frío.", "Hoy hace muy frío.", "Hoy está mucho frío.", "Hoy es mucho frío."],
        0,
        "Frío is a noun here → mucho frío, with hace."
      ),
      mt(
        "Match each forecast to a plan.",
        [
          ["Hace sol.", "Vamos a la playa."],
          ["Hace frío.", "Voy a llevar un abrigo."],
          ["Hace viento.", "Vamos a volar una cometa."],
          ["Hace mal tiempo.", "Vamos a ver una película en casa."],
        ],
        "Each plan uses ir a + infinitive (or ir a + place)."
      ),
      toEs("What's the weather like today? — It's nice out.", "¿Qué tiempo hace hoy? —Hace buen tiempo.", "Hace buen tiempo = the weather's nice.", ["¿Qué tiempo hace hoy? Hace buen tiempo."]),
      toEn("No hay nubes y hace calor.", "There are no clouds and it's hot.", "Hay for existence; hace for weather.", ["There aren't any clouds and it's hot.", "There are no clouds and it is hot."]),
      wo("Mañana va a hacer mucho viento en la costa.", "Ir a + hacer for future weather.", "Tomorrow it's going to be very windy on the coast."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-drill-3",
    "a1r-error-hunt-tener-ir-hacer-hay",
    "Error Hunt: Tener, Ir, Hacer & Hay",
    "Where English says \"to be,\" Spanish often doesn't. Catch the slips learners make with these four workhorses.",
    "7 min",
    [
      sec(
        "\"To be\" isn't always ser or estar",
        "Age, hunger and cold use tener. Weather uses hacer. \"There is/are\" uses hay. Learners often reach for ser or estar out of habit.",
        [
          ["✗ Soy veinte años. → ✓ Tengo veinte años.", "I'm twenty."],
          ["✗ Es frío hoy. → ✓ Hace frío hoy.", "It's cold today."],
          ["✗ Están dos gatos. → ✓ Hay dos gatos.", "There are two cats."],
        ],
        [
          mc(
            "Fix \"Estoy hambre.\"",
            ["Tengo hambre.", "Soy hambre.", "Hay hambre.", "Hago hambre."],
            0,
            "Hunger → tener hambre."
          ),
        ]
      ),
      sec(
        "Ir a needs the a",
        "Ir a + infinitive: the little word a is required. And don't conjugate the second verb.",
        [
          ["✗ Voy estudiar. → ✓ Voy a estudiar.", "I'm going to study."],
          ["✗ Vamos a comemos. → ✓ Vamos a comer.", "We're going to eat."],
        ],
        [
          fb("Fix the sentence.", "Ellos van ___ viajar en junio. (learner wrote: van viajar)", "a", "Ir + a + infinitive."),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Mi abuela ___ noventa años. (learner wrote: es)", "tiene", "Age → tener."),
      fb("Fix the verb.", "En verano ___ mucho calor aquí. (learner wrote: es)", "hace", "Weather → hacer."),
      fb("Fix the verb.", "En mi clase ___ veinte estudiantes. (learner wrote: son)", "hay", "Existence/number of things → hay."),
      ms(
        "Which sentences are correct?",
        ["Hay muchas tiendas en el centro.", "Voy a cocinar esta noche.", "Hace calor, tengo que beber agua.", "Tenemos que estudiamos."],
        [0, 1, 2],
        "Tener que + infinitive: tenemos que estudiar."
      ),
      mc(
        "Which sentence has NO error?",
        ["¿Qué vas a hacer mañana?", "¿Qué vas hacer mañana?", "¿Qué vas a haces mañana?", "¿Qué va a hacer tú mañana?"],
        0,
        "Vas (tú) + a + infinitive."
      ),
      toEs("There's a lot of traffic and I'm in a hurry.", "Hay mucho tráfico y tengo prisa.", "Hay for existence; tener prisa for being in a hurry.", ["Hay mucho tráfico y yo tengo prisa."]),
      wo("No hace frío pero tengo mucho sueño.", "Hacer for weather; tener for being sleepy.", "It isn't cold but I'm very sleepy."),
    ]
  ),
  L(
    "numbers-time-drill-3",
    "a1r-mission-weekly-schedule",
    "Real-World Mission: Your Weekly Schedule",
    "Days of the week, times, and routines — plan a week at a new job.",
    "8 min",
    [
      sec(
        "Days of the week",
        "The days are lowercase in Spanish and all masculine: el lunes (on Monday — this one), los lunes (on Mondays — every week). The article replaces English \"on.\"",
        [
          ["El lunes tengo una reunión.", "On Monday I have a meeting. (this Monday)"],
          ["Los martes trabajo en casa.", "On Tuesdays I work from home. (every Tuesday)"],
        ],
        [
          mc(
            "\"I go to the gym on Fridays\" (every Friday).",
            ["Voy al gimnasio los viernes.", "Voy al gimnasio el viernes.", "Voy al gimnasio en viernes.", "Voy al gimnasio en los viernes."],
            0,
            "A regular, repeated day → los viernes. No en."
          ),
        ]
      ),
      sec(
        "The schedule",
        "Read the schedule, then answer questions about it.",
        [
          ["Lunes a jueves: de nueve a cinco.", "Monday to Thursday: nine to five."],
          ["Viernes: de nueve a una.", "Friday: nine to one."],
          ["Sábados y domingos: libre.", "Saturdays and Sundays: free."],
        ],
        [
          fb("Complete the answer.", "—¿Trabajas los sábados? —No, los sábados ___ libre.", "estoy", "Being free (available) is a temporary state → estar libre."),
        ]
      ),
    ],
    [
      fb("Complete the answer.", "—¿A qué hora terminas el viernes? —Termino a la ___.", "una", "Viernes: de nueve a una."),
      mt(
        "Match the English to the Spanish.",
        [
          ["on Wednesday", "el miércoles"],
          ["on Wednesdays", "los miércoles"],
          ["on weekends", "los fines de semana"],
          ["from Monday to Friday", "de lunes a viernes"],
        ],
        "The article replaces \"on\"; de … a … = from … to …."
      ),
      mc(
        "Which is correct?",
        ["El sábado voy a la playa.", "En el sábado voy a la playa.", "El Sábado voy a la playa.", "Sábado voy en la playa."],
        0,
        "Days are lowercase and take el, not en."
      ),
      fb("Write the time in words.", "La reunión es a las ___ y cuarto. (3:15)", "tres", "3:15 = las tres y cuarto."),
      toEs("I work from Monday to Friday.", "Trabajo de lunes a viernes.", "De … a … for a range.", ["Yo trabajo de lunes a viernes."]),
      toEn("Los domingos comemos con mis abuelos.", "On Sundays we eat with my grandparents.", "Los domingos = every Sunday.", ["On Sundays we have lunch with my grandparents.", "We eat with my grandparents on Sundays."]),
      wo("Los jueves tengo clase de yoga a las siete.", "Day + tener + class + time.", "On Thursdays I have yoga class at seven."),
    ]
  ),
  L(
    "numbers-time-drill-3",
    "a1r-contrast-cardinal-ordinal",
    "Contrast Clinic: One vs. First, Three vs. Third",
    "Counting numbers and order numbers side by side — plus the shortened forms primer and tercer.",
    "7 min",
    [
      sec(
        "How many vs. which one",
        "Cardinal numbers count (uno, dos, tres). Ordinal numbers put things in order (primero, segundo, tercero) and agree like adjectives.",
        [
          ["Tengo tres hermanos.", "I have three siblings."],
          ["Es mi tercer hermano.", "He's my third brother."],
          ["Vivo en el quinto piso.", "I live on the fifth floor."],
        ],
        [
          mc(
            "\"It's the second street on the left.\"",
            ["Es la segunda calle a la izquierda.", "Es la dos calle a la izquierda.", "Es el segundo calle a la izquierda.", "Es la segundo calle a la izquierda."],
            0,
            "Order → segunda; calle is feminine."
          ),
        ]
      ),
      sec(
        "Dates use cardinals — except the first",
        "Spanish dates use ordinary numbers: el dos, el quince. Only the first of the month can be el primero (though el uno is also common in Latin America).",
        [
          ["Hoy es el quince.", "Today is the fifteenth."],
          ["Mañana es el primero.", "Tomorrow is the first."],
        ],
        [
          fb("Write the date.", "Mi cumpleaños es el ___. (the 10th, in words)", "diez", "Dates use cardinal numbers: el diez."),
        ]
      ),
    ],
    [
      mt(
        "Match each cardinal to its ordinal.",
        [
          ["uno", "primero"],
          ["tres", "tercero"],
          ["cinco", "quinto"],
          ["diez", "décimo"],
        ],
        "Primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo."
      ),
      fb("Complete with tercero in the right form.", "Es el ___ día de vacaciones.", "tercer", "Tercero → tercer before a masculine singular noun."),
      fb("Complete with quinto in the right form.", "Vivimos en la ___ casa de la calle.", "quinta", "Casa is feminine → quinta. Only primero and tercero shorten, and only before masculine nouns."),
      mc(
        "\"The first four students\"",
        ["los cuatro primeros estudiantes", "los primeros cuarto estudiantes", "los cuarto primeros estudiantes", "los primer cuatro estudiantes"],
        0,
        "Spanish usually puts the cardinal first: los cuatro primeros."
      ),
      toEs("I live on the second floor.", "Vivo en el segundo piso.", "Segundo agrees with piso (masculine).", ["Yo vivo en el segundo piso.", "Vivo en la segunda planta."]),
      wo("Es la primera vez que estoy en Lima.", "La primera vez = the first time.", "It's the first time I've been in Lima."),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-family-people",
    "Word Web: Family & People",
    "Sort, connect and use A1's people words — family members, relationships and the people around you.",
    "7 min",
    [
      sec(
        "Build the family tree",
        "Family words come in masculine/feminine pairs. The masculine plural covers mixed groups: los padres = parents, los hermanos = siblings, los abuelos = grandparents.",
        [
          ["el padre de mi padre = mi abuelo", "my father's father = my grandfather"],
          ["la hija de mi tío = mi prima", "my uncle's daughter = my cousin"],
          ["el hijo de mi hermana = mi sobrino", "my sister's son = my nephew"],
        ],
        [
          mc(
            "La madre de mi madre es mi…",
            ["abuela", "tía", "prima", "sobrina"],
            0,
            "Your mother's mother is your grandmother."
          ),
          fb("Complete the family tree.", "El hermano de mi madre es mi ___.", "tío", "Your mother's brother is your uncle."),
        ]
      ),
      sec(
        "People around you",
        "Beyond family: vecino (neighbor), compañero (classmate/coworker), novio (boyfriend), esposo (husband), amigo (friend).",
        [
          ["Mi vecina es muy amable.", "My neighbor (f.) is very kind."],
          ["Mis compañeros de trabajo son simpáticos.", "My coworkers are nice."],
        ],
        [
          ms(
            "Which words can refer to a woman?",
            ["vecina", "sobrino", "esposa", "nieta"],
            [0, 2, 3],
            "Sobrino is masculine; the feminine is sobrina."
          ),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["mesa", "tío", "prima", "abuelo"], 0, "Tío, prima and abuelo are family members; mesa is a table."),
      mt(
        "Match each relationship.",
        [
          ["el hijo de mi hijo", "mi nieto"],
          ["el hijo de mi tía", "mi primo"],
          ["los padres de mis padres", "mis abuelos"],
          ["la hermana de mi padre", "mi tía"],
        ],
        "Your son's son is your grandson; your aunt's son is your cousin; your parents' parents are your grandparents; your father's sister is your aunt."
      ),
      fb("Complete the sentence.", "No tengo esposa; soy ___.", "soltero", "Not married → soltero (single)."),
      fb("Complete the sentence.", "Mis ___ son mi madre y mi padre.", "padres", "Los padres = parents (mother and father)."),
      toEs("My cousins live with my grandparents.", "Mis primos viven con mis abuelos.", "Masculine plurals cover mixed groups.", ["Mis primas viven con mis abuelos."]),
      toEn("Mi sobrina es la hija de mi hermano.", "My niece is my brother's daughter.", "Sobrina = niece.", []),
      wo("La novia de mi hermano es enfermera.", "Thing + de + owner, then ser + profession.", "My brother's girlfriend is a nurse."),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-jobs",
    "Word Web: Jobs & Workplaces",
    "Who works where? Connect A1's job words to their workplaces and describe what people do.",
    "7 min",
    [
      sec(
        "Who works where",
        "Most job words have masculine/feminine forms (doctor/doctora, abogado/abogada). Some ending in -ista are the same for both: el/la artista, el/la turista.",
        [
          ["El doctor trabaja en el hospital.", "The doctor works at the hospital."],
          ["La profesora trabaja en la escuela.", "The teacher works at the school."],
          ["El abogado trabaja en una oficina.", "The lawyer works in an office."],
        ],
        [
          mt(
            "Match each person to their workplace.",
            [
              ["la enfermera", "el hospital"],
              ["el profesor", "la universidad"],
              ["el músico", "el concierto"],
              ["el ingeniero", "la oficina"],
            ],
            "Hospital, university, concert, office."
          ),
        ]
      ),
      sec(
        "Talking about jobs",
        "With ser + profession, Spanish drops the article: Soy profesor (not soy un profesor) — unless you add an adjective: Es un profesor excelente.",
        [
          ["Mi madre es abogada.", "My mother is a lawyer."],
          ["Es una abogada muy buena.", "She's a very good lawyer."],
        ],
        [
          mc(
            "\"My brother is an engineer.\"",
            ["Mi hermano es ingeniero.", "Mi hermano es un ingeniero.", "Mi hermano está ingeniero.", "Mi hermano es ingeniera."],
            0,
            "Ser + profession, no article."
          ),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["abogado", "escritor", "biblioteca", "enfermero"], 2, "Biblioteca (library) is a place; the others are jobs."),
      fb("Complete with the feminine form.", "Mi tía es ___. (escritor)", "escritora", "-or → -ora."),
      fb("Complete the sentence.", "Un ___ escribe libros.", "escritor", "Escribir → escritor (writer)."),
      ms(
        "Which sentences are correct?",
        ["Ella es artista.", "Él es un doctor muy bueno.", "Soy una estudiante.", "Mi padre está profesor."],
        [0, 1],
        "No article without an adjective: soy estudiante. Profession → ser, not estar."
      ),
      toEs("My neighbor is a nurse and she works at the hospital.", "Mi vecina es enfermera y trabaja en el hospital.", "No article before the profession.", []),
      toEn("¿En qué trabaja tu padre? —Es ingeniero.", "What does your father do? — He's an engineer.", "¿En qué trabaja…? asks about someone's job.", ["What does your dad do? He's an engineer."]),
      wo("Los turistas visitan el museo con una guía.", "Subject + verb + object + con + person.", "The tourists visit the museum with a guide."),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-house",
    "Word Web: House & Furniture",
    "Put every piece of furniture in the right room — and say where it is.",
    "7 min",
    [
      sec(
        "Room by room",
        "The rooms: la cocina (kitchen), el baño (bathroom), el dormitorio (bedroom), el jardín (garden). Say what's in each with hay.",
        [
          ["En el dormitorio hay una cama, un armario y una lámpara.", "In the bedroom there's a bed, a wardrobe and a lamp."],
          ["En el baño hay un espejo.", "In the bathroom there's a mirror."],
        ],
        [
          ms(
            "What would you usually find in a bedroom?",
            ["la cama", "la almohada", "el armario", "el jardín"],
            [0, 1, 2],
            "The garden is outside the house."
          ),
        ]
      ),
      sec(
        "Where exactly?",
        "Combine furniture words with location phrases and estar.",
        [
          ["La alfombra está debajo del sofá.", "The rug is under the sofa."],
          ["El reloj está en la pared.", "The clock is on the wall."],
        ],
        [
          fb("Complete the sentence.", "La lámpara está ___ del escritorio. (on top of)", "encima", "Encima de + el → encima del."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["almohada", "manta", "cama", "espejo"], 3, "Almohada, manta and cama all go together on the bed. Espejo (mirror) doesn't."),
      mt(
        "Match each item to its meaning.",
        [
          ["el techo", "the ceiling"],
          ["la pared", "the wall"],
          ["el estante", "the shelf"],
          ["la alfombra", "the rug"],
        ],
        "Techo, pared, estante, alfombra — all from the A1 home vocabulary."
      ),
      fb("Complete the sentence.", "Cocino en la ___.", "cocina", "Cocinar (to cook) → la cocina (the kitchen)."),
      fb("Complete the sentence.", "Los libros están en el ___.", "estante", "Books go on a shelf → el estante."),
      toEs("There is a mirror in the bathroom.", "Hay un espejo en el baño.", "Hay + un + noun for existence.", ["En el baño hay un espejo."]),
      toEn("La manta está dentro del armario.", "The blanket is inside the wardrobe.", "Dentro de = inside.", ["The blanket is inside the closet.", "The blanket is in the wardrobe."]),
      wo("Mi dormitorio es pequeño pero tiene una ventana grande.", "Ser for size; tener for what the room has.", "My bedroom is small but it has a big window."),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-food",
    "Word Web: Food & Drink",
    "Order, compare and sort A1's food words — breakfast, lunch, dinner and dessert.",
    "7 min",
    [
      sec(
        "Sort the menu",
        "Group the words you know: proteins (carne, pollo, pescado, huevo), sides (arroz, pan, ensalada, sopa), extras (queso, postre), drinks (jugo, café, agua).",
        [
          ["De primero, sopa. De segundo, pollo con arroz.", "For the first course, soup. For the second, chicken with rice."],
          ["De postre, fruta. Y para beber, un jugo.", "For dessert, fruit. And to drink, a juice."],
        ],
        [
          ms(
            "Which are types of meat or fish?",
            ["pollo", "pescado", "carne", "pan"],
            [0, 1, 2],
            "Pan is bread."
          ),
        ]
      ),
      sec(
        "At the table",
        "Food talk uses verbs you know: comer, beber, tomar, desayunar, cenar — plus gustar for opinions.",
        [
          ["Desayuno pan con queso y café.", "For breakfast I have bread with cheese and coffee."],
          ["No me gusta el pescado, pero me encanta el pollo.", "I don't like fish, but I love chicken."],
        ],
        [
          fb("Complete the sentence.", "Por la mañana ___ huevos con pan. (desayunar, yo)", "desayuno", "Desayunar → yo desayuno."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["jugo", "agua", "café", "arroz"], 3, "Jugo, agua and café are drinks; arroz (rice) isn't."),
      mt(
        "Match each food to its meaning.",
        [
          ["el huevo", "the egg"],
          ["el queso", "the cheese"],
          ["la sopa", "the soup"],
          ["el postre", "the dessert"],
        ],
        "All from the A1 food vocabulary."
      ),
      fb("Complete with gusta or gustan.", "Me ___ mucho los huevos.", "gustan", "Los huevos → gustan."),
      mc(
        "Which is a good dinner order?",
        ["Una ensalada y pescado, por favor.", "Una biblioteca, por favor.", "Un estante con arroz, por favor.", "Una almohada de pollo, por favor."],
        0,
        "Only the first option is food."
      ),
      toEs("I eat chicken with rice and salad.", "Como pollo con arroz y ensalada.", "Comer → como.", ["Yo como pollo con arroz y ensalada."]),
      toEn("¿Qué hay de postre?", "What's for dessert?", "Literally \"What is there for dessert?\"", ["What is there for dessert?"]),
      wo("Para beber, un jugo de naranja, por favor.", "A quick restaurant order: para beber (to drink) + what you want + por favor.", "To drink, an orange juice, please.", "Put the words in order to order a drink."),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-places",
    "Word Web: Places & What You Do There",
    "Connect each place in town to the activity you do there — ir a + place, then what you do.",
    "7 min",
    [
      sec(
        "Places and actions",
        "Every place has its verb. Say where you're going (voy al/a la…) and what you do there.",
        [
          ["Voy a la biblioteca para leer.", "I go to the library to read."],
          ["Vamos al mercado para comprar fruta.", "We go to the market to buy fruit."],
          ["Mis padres van al cine para mirar una película.", "My parents go to the movies to watch a film."],
        ],
        [
          mt(
            "Match each place to its activity.",
            [
              ["el gimnasio", "hacer ejercicio"],
              ["la playa", "nadar"],
              ["el aeropuerto", "viajar"],
              ["el banco", "sacar dinero"],
            ],
            "Para + infinitive explains the purpose of going."
          ),
        ]
      ),
      sec(
        "Al or a la?",
        "Ir a + el → al: al parque, al museo, al hotel. Feminine places keep a la: a la farmacia, a la iglesia, a la estación.",
        [
          ["Voy al aeropuerto.", "I'm going to the airport."],
          ["Voy a la estación.", "I'm going to the station."],
        ],
        [
          fb("Complete with al or a la.", "¿Vas ___ supermercado?", "al", "Supermercado is masculine → al."),
        ]
      ),
    ],
    [
      fb("Complete with al or a la.", "Los domingos vamos ___ iglesia.", "a la", "Iglesia is feminine → a la."),
      mc("Odd one out:", ["hospital", "farmacia", "montaña", "doctor"], 3, "Hospital, farmacia and montaña are places. Doctor is a person."),
      mc(
        "Where do you go para comprar medicinas?",
        ["a la farmacia", "al museo", "al gimnasio", "a la playa"],
        0,
        "Medicine → pharmacy."
      ),
      ms(
        "Which sentences are correct?",
        ["Voy al parque para correr.", "Vamos a el museo.", "Ella va a la biblioteca para estudiar.", "Van al restaurante para cenar."],
        [0, 2, 3],
        "A + el → al museo."
      ),
      toEs("We're going to the beach to swim.", "Vamos a la playa para nadar.", "Ir a + place + para + infinitive.", ["Vamos a la playa a nadar.", "Nosotros vamos a la playa para nadar."]),
      toEn("Mi hermano va al hotel para trabajar.", "My brother goes to the hotel to work.", "Para + infinitive = in order to.", ["My brother is going to the hotel to work."]),
      wo("¿Vas a la estación para tomar el tren?", "Ir + a la + place + para + infinitive.", "Are you going to the station to take the train?"),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-feelings",
    "Word Web: Feelings & States",
    "Opposites, causes and reactions — use A1's feeling words with estar in real situations.",
    "7 min",
    [
      sec(
        "Opposites",
        "Many feeling and state words come in pairs: contento/triste, tranquilo/nervioso, sano/enfermo, ocupado/libre, limpio/sucio.",
        [
          ["Hoy estoy ocupado, pero mañana estoy libre.", "Today I'm busy, but tomorrow I'm free."],
          ["El niño está enfermo; no está sano.", "The boy is sick; he isn't healthy."],
        ],
        [
          mt(
            "Match each word to its opposite.",
            [
              ["contento", "triste"],
              ["tranquilo", "nervioso"],
              ["ocupado", "libre"],
              ["limpio", "sucio"],
            ],
            "All of these describe states, so they normally go with estar."
          ),
        ]
      ),
      sec(
        "Why do you feel that way?",
        "Use porque to give the reason for a feeling.",
        [
          ["Estoy nerviosa porque tengo un examen.", "I'm nervous because I have an exam."],
          ["Mi padre está enojado porque el coche está roto.", "My father is angry because the car is broken."],
        ],
        [
          mc(
            "\"Estoy ___ porque mi mejor amigo llega hoy.\"",
            ["contento", "enojado", "enfermo", "aburrido"],
            0,
            "Your best friend arriving → happy."
          ),
        ]
      ),
    ],
    [
      fb("Complete with the right form.", "Mis hermanas están muy ___ porque tienen mucho trabajo. (estresado)", "estresadas", "Feminine plural → estresadas."),
      fb("Complete with the right form.", "Ana está ___ porque no hay nada que hacer. (aburrido)", "aburrida", "Bored → estar aburrida."),
      mc("Odd one out:", ["preocupado", "nervioso", "estresado", "tranquilo"], 3, "Tranquilo (calm) is the only positive, relaxed state."),
      mc(
        "A friend gets surprising news. She's…",
        ["sorprendida", "ocupada", "casada", "sucia"],
        0,
        "Surprised → sorprendida."
      ),
      toEs("We are worried because our dog is sick.", "Estamos preocupados porque nuestro perro está enfermo.", "Feelings and health → estar.", ["Estamos preocupadas porque nuestro perro está enfermo."]),
      toEn("¿Por qué estás tan enojado?", "Why are you so angry?", "Tan = so.", ["Why are you so mad?"]),
      wo("Estoy muy cansado pero estoy feliz.", "Two states joined by pero.", "I'm very tired but I'm happy."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-mixed-error-hunt",
    "A1 Challenge: The Big Error Hunt",
    "The final A1 challenge series begins: one mistake per sentence, drawn from every A1 topic. Can you catch them all?",
    "9 min",
    [
      sec(
        "Your checklist",
        "For every sentence, run the full A1 checklist: verb form · ser vs. estar · articles and agreement · gustar agreement · contractions · question-word accents.",
        [
          ["✗ Nosotros somos cansados. → ✓ Nosotros estamos cansados.", "We are tired."],
          ["✗ Me gusta los libros. → ✓ Me gustan los libros.", "I like books."],
        ],
        [
          mc(
            "\"Mi hermanas son altas.\" What's wrong?",
            ["Mi should be mis.", "Son should be es.", "Altas should be altos.", "Nothing."],
            0,
            "Hermanas is plural → mis hermanas."
          ),
          mc(
            "\"Vamos a el cine.\" What's wrong?",
            ["A el must contract to al.", "Vamos should be van.", "Cine is feminine.", "Nothing."],
            0,
            "A + el → al: Vamos al cine."
          ),
        ]
      ),
    ],
    [
      fb("Fix it.", "La profesora ___ en la clase ahora. (learner wrote: es)", "está", "Location → estar."),
      fb("Fix it.", "Yo ___ dieciocho años. (learner wrote: soy)", "tengo", "Age → tener."),
      fb("Fix it.", "¿___ es tu cumpleaños? (learner wrote: Cuando)", "Cuándo", "Question words take an accent."),
      fb("Fix it.", "A ellos ___ gusta bailar. (learner wrote: le)", "les", "A ellos → les."),
      ms(
        "Which sentences are correct?",
        ["Hay un problema con el coche.", "Esta es la casa del mi abuelo.", "Los niños tienen sueño.", "¿Dónde está la farmacia?"],
        [0, 2, 3],
        "With a possessive there's no article: la casa de mi abuelo."
      ),
      mc(
        "Which sentence has NO error?",
        ["Estos zapatos son muy caros.", "Estos zapatos es muy caros.", "Estas zapatos son muy caros.", "Estos zapatos son muy caras."],
        0,
        "Zapatos is masculine plural: estos, son, caros."
      ),
      toEs("There are three good restaurants near the hotel.", "Hay tres buenos restaurantes cerca del hotel.", "Hay for existence; buenos (plural, no shortening); cerca de + el → del.", ["Hay tres restaurantes buenos cerca del hotel."]),
      wo("¿Por qué no te gustan las películas de acción?", "Por qué + no + te + gustan + plural thing.", "Why don't you like action movies?"),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-dialogue-marathon",
    "A1 Challenge: Dialogue Marathon",
    "Four short conversations in a row — meeting, planning, shopping and saying goodbye. Keep up with each one.",
    "9 min",
    [
      sec(
        "Conversation 1: A new classmate",
        "Greetings, origin and age.",
        [
          ["—Hola, soy Kenji. Soy de Japón.", "Hi, I'm Kenji. I'm from Japan."],
          ["—¡Bienvenido! ¿Cuántos años tienes?", "Welcome! How old are you?"],
          ["—Tengo veinticuatro.", "I'm twenty-four."],
        ],
        [
          fb("Reply to Kenji.", "—Mucho gusto, Kenji. Yo ___ Valeria.", "soy", "Introducing yourself → yo soy."),
        ]
      ),
      sec(
        "Conversation 2: Weekend plans",
        "Ir a + infinitive and gustar.",
        [
          ["—¿Qué vas a hacer el sábado?", "What are you going to do on Saturday?"],
          ["—Voy a ir al museo. Me encantan los museos.", "I'm going to go to the museum. I love museums."],
        ],
        [
          mc(
            "Why is it \"me encantan\"?",
            ["Los museos is plural.", "The speaker loves more than one thing.", "Encantar is always plural.", "Because it's the future."],
            0,
            "The verb agrees with what is loved: los museos."
          ),
        ]
      ),
      sec(
        "Conversation 3: At the market",
        "Prices and demonstratives.",
        [
          ["—¿Cuánto cuestan estas naranjas?", "How much are these oranges?"],
          ["—Dos euros el kilo. Y esas manzanas, tres.", "Two euros a kilo. And those apples, three."],
        ],
        [
          fb("Complete the question.", "¿Y cuánto ___ aquel melón?", "cuesta", "One melon → cuesta."),
        ]
      ),
    ],
    [
      mc(
        "Conversation 4: Goodbye. Which is the most natural way to say \"See you tomorrow\"?",
        ["Hasta mañana.", "Buenos días.", "Mucho gusto.", "De nada."],
        0,
        "Hasta mañana = see you tomorrow."
      ),
      mt(
        "Match each line to its best reply.",
        [
          ["¿Tienes hambre?", "Sí, mucha. ¿Comemos?"],
          ["¿Dónde está tu coche?", "Está en el garaje."],
          ["¿De quién es este libro?", "Es de Marta."],
          ["Me gusta el té.", "A mí también."],
        ],
        "Tener hambre, location with estar, possession with ser de, and agreeing with gustar."
      ),
      fb("Complete the reply.", "—¿Ustedes son hermanos? —Sí, ___ hermanos.", "somos", "Ustedes question → nosotros answer."),
      fb("Complete the reply.", "—¿Qué hora es? —___ las cuatro y cuarto.", "Son", "Plural hours → son las."),
      toEs("Where are you from? — I'm from Brazil, but I live in Chile.", "¿De dónde eres? —Soy de Brasil, pero vivo en Chile.", "Ser de for origin; vivir en for residence.", ["¿De dónde eres? Soy de Brasil, pero vivo en Chile.", "¿De dónde es usted? —Soy de Brasil, pero vivo en Chile."]),
      toEn("—¿Vamos al cine esta noche? —¡Buena idea!", "Shall we go to the movies tonight? — Good idea!", "¿Vamos…? can be an invitation: shall we…?", ["Are we going to the movies tonight? Good idea!", "Should we go to the movies tonight? Good idea!"]),
      wo("Adiós, hasta el lunes y buen fin de semana.", "Goodbye + see you Monday + have a good weekend (buen before a masculine noun).", "Goodbye, see you Monday, and have a good weekend."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-translation-relay",
    "A1 Challenge: Translation Relay",
    "Translate in both directions, one topic after another — a fast relay through all of A1.",
    "9 min",
    [
      sec(
        "Warm-up: Say it in Spanish",
        "Think before you type: who's the subject? Which verb? Does anything need to agree?",
        [
          ["We are in the kitchen. → Estamos en la cocina.", "(location → estar)"],
          ["I like dogs. → Me gustan los perros.", "(plural thing liked → gustan)"],
        ],
        [
          toEs("You (informal) are very funny.", "Eres muy divertido.", "Personality → ser; tú → eres.", ["Tú eres muy divertido.", "Eres muy divertida.", "Tú eres muy divertida.", "Eres muy gracioso.", "Eres muy graciosa."]),
        ]
      ),
      sec(
        "Warm-up: Say it in English",
        "Watch for the Spanish structures that don't map word-for-word into English.",
        [
          ["Tengo frío. → I'm cold.", "(tener + noun)"],
          ["Hace sol. → It's sunny.", "(hacer for weather)"],
        ],
        [
          toEn("Mis abuelos tienen ochenta años.", "My grandparents are eighty years old.", "Tener … años = to be … years old.", ["My grandparents are eighty."]),
        ]
      ),
    ],
    [
      toEs("There is a pharmacy near the park.", "Hay una farmacia cerca del parque.", "Hay for existence; de + el → del.", []),
      toEs("They're going to eat at two.", "Van a comer a las dos.", "Ir a + infinitive; a las + time.", ["Ellos van a comer a las dos.", "Ellas van a comer a las dos."]),
      toEs("My sister's books are on the table.", "Los libros de mi hermana están en la mesa.", "Thing + de + owner; location → están.", []),
      toEn("¿A qué hora es tu clase de inglés?", "What time is your English class?", "¿A qué hora…? = At what time…? Events take ser.", ["When is your English class?", "At what time is your English class?"]),
      toEn("No nos gusta el invierno porque hace frío.", "We don't like winter because it's cold.", "Nos gusta = we like; hace frío = it's cold.", ["We don't like the winter because it's cold.", "We do not like winter because it is cold."]),
      toEn("Aquellos chicos son mis compañeros de clase.", "Those boys over there are my classmates.", "Aquellos = those (far away).", ["Those guys over there are my classmates.", "Those boys are my classmates."]),
      wo("Esta tarde tengo que limpiar mi dormitorio.", "Time + tener que + infinitive + object.", "This afternoon I have to clean my bedroom."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-build-a-sentence",
    "A1 Challenge: Build-a-Sentence",
    "Long sentences, built from the pieces you know. Put every word in its place.",
    "8 min",
    [
      sec(
        "Sentence architecture",
        "A1 sentences follow a reliable blueprint: (time) + subject + verb + object/complement + (place) + (reason). Build from the verb outward.",
        [
          ["Los sábados mi familia come en casa de mis abuelos.", "On Saturdays my family eats at my grandparents' house."],
          ["Hoy no voy a la escuela porque estoy enfermo.", "Today I'm not going to school because I'm sick."],
        ],
        [
          wo("Por la mañana mi padre lee el periódico en la cocina.", "Time + subject + verb + object + place.", "In the morning my father reads the paper in the kitchen."),
        ]
      ),
    ],
    [
      wo("Mis amigos y yo vamos a cenar en un restaurante italiano.", "Compound subject → vamos; ir a + infinitive; adjective after the noun.", "My friends and I are going to have dinner at an Italian restaurant."),
      wo("¿Por qué están tus hermanos tan contentos hoy?", "In questions, the verb often comes before the subject.", "Why are your brothers so happy today?"),
      wo("A mi madre le encantan las flores de este jardín.", "A + person + le + encantan + plural thing + de + demonstrative + noun.", "My mother loves the flowers in this garden."),
      wo("En mi ciudad hay muchos parques y dos museos grandes.", "Place + hay + quantities + nouns + adjective.", "In my city there are lots of parks and two big museums."),
      wo("Nuestra profesora es de México pero vive aquí.", "Possessive + noun + ser de + pero + second verb.", "Our teacher is from Mexico but she lives here."),
      mc(
        "Which sentence is built correctly?",
        ["Siempre tengo mucha hambre a las once.", "Siempre tengo mucho hambre a las once.", "Siempre estoy mucha hambre a las once.", "Siempre tengo hambre mucha a las once."],
        0,
        "Hambre is feminine (el hambre, but mucha hambre) and goes with tener."
      ),
      fb("Finish the sentence.", "Hoy hace frío, ___ que voy a llevar un abrigo.", "así", "Así que = so (as a result)."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-day-in-madrid-morning",
    "A1 Challenge: A Day in Madrid — Morning",
    "Follow a tourist through a morning in Madrid: breakfast, directions, and a museum visit.",
    "8 min",
    [
      sec(
        "8:00 — Breakfast at the hotel",
        "The tourist, Emma, orders breakfast.",
        [
          ["—Buenos días. ¿Qué desea?", "Good morning. What would you like?"],
          ["—Un café con leche y pan con tomate, por favor.", "A coffee with milk and bread with tomato, please."],
          ["—¿Algo más?", "Anything else?"],
          ["—No, gracias. ¿Cuánto es?", "No, thanks. How much is it?"],
        ],
        [
          mc("What does Emma order to drink?", ["Coffee with milk", "Orange juice", "Tea", "Water"], 0, "Un café con leche."),
        ]
      ),
      sec(
        "9:30 — Asking for directions",
        "Emma asks a local how to get to the Prado Museum.",
        [
          ["—Perdón, ¿dónde está el Museo del Prado?", "Excuse me, where is the Prado Museum?"],
          ["—Está cerca, a diez minutos. Está al lado del jardín botánico.", "It's close, ten minutes away. It's next to the botanical garden."],
        ],
        [
          fb("Complete Emma's question.", "¿Hay un banco ___ del museo?", "cerca", "Cerca de + el → cerca del."),
        ]
      ),
      sec(
        "11:00 — At the museum",
        "Emma describes what she sees in a message to her mother.",
        [
          ["El museo es enorme y los cuadros son preciosos.", "The museum is huge and the paintings are beautiful."],
          ["Estoy un poco cansada, pero estoy muy contenta.", "I'm a bit tired, but I'm very happy."],
        ],
        [
          fb("Complete Emma's message.", "Hay mucha gente, pero el museo ___ muy tranquilo.", "está", "How the museum feels right now → estar."),
        ]
      ),
    ],
    [
      mc(
        "How far is the museum from where Emma asks?",
        ["Ten minutes", "Two minutes", "An hour", "Thirty minutes"],
        0,
        "A diez minutos = ten minutes away."
      ),
      fb("Complete the waiter's line.", "Aquí ___ su café, señora.", "está", "Aquí está… = here is… (location)."),
      mt(
        "Match each time to Emma's activity.",
        [
          ["a las ocho", "desayuna"],
          ["a las nueve y media", "pregunta direcciones"],
          ["a las once", "visita el museo"],
        ],
        "Present tense for a narrated schedule."
      ),
      ms(
        "Which sentences describe Emma's morning correctly?",
        ["Emma desayuna en el hotel.", "Emma está cansada pero contenta.", "El museo es pequeño.", "Emma bebe café con leche."],
        [0, 1, 3],
        "The museum is enorme."
      ),
      toEs("Excuse me, is there a café near here?", "Perdón, ¿hay un café cerca de aquí?", "Hay for existence.", ["Disculpe, ¿hay un café cerca de aquí?", "Perdón, ¿hay una cafetería cerca de aquí?"]),
      wo("Después del museo Emma va a comer en un restaurante.", "Después de + el → del; ir a + infinitive.", "After the museum Emma is going to eat at a restaurant."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-day-in-madrid-evening",
    "A1 Challenge: A Day in Madrid — Evening",
    "Emma's day continues: lunch with a new friend, shopping, and plans for the night.",
    "8 min",
    [
      sec(
        "14:30 — Lunch with Lucas",
        "Emma meets a Spanish student at the restaurant.",
        [
          ["—¿Eres estudiante?", "Are you a student?"],
          ["—Sí, estudio arte en la universidad. ¿Y tú?", "Yes, I study art at the university. And you?"],
          ["—Soy enfermera, pero ahora estoy de vacaciones.", "I'm a nurse, but I'm on vacation right now."],
        ],
        [
          mc(
            "Why does Emma say \"estoy de vacaciones\" but \"soy enfermera\"?",
            ["Being on vacation is temporary; being a nurse is her profession.", "Vacaciones is plural.", "Enfermera is feminine.", "Both could use ser."],
            0,
            "Estar de vacaciones = to be on vacation (a temporary situation). Profession → ser."
          ),
        ]
      ),
      sec(
        "17:00 — Shopping",
        "Emma buys a present for her mother.",
        [
          ["—Me gusta este bolso. ¿Cuánto cuesta?", "I like this bag. How much is it?"],
          ["—Cuarenta euros. ¿Y le gustan estas bufandas?", "Forty euros. And do you like these scarves?"],
        ],
        [
          fb("Complete Emma's answer.", "Sí, me ___ mucho. ¡Son muy bonitas!", "gustan", "Estas bufandas → gustan."),
        ]
      ),
      sec(
        "21:00 — Plans for tonight",
        "Emma and Lucas make plans.",
        [
          ["—¿Vamos a cenar tapas?", "Shall we have tapas for dinner?"],
          ["—¡Sí! Tengo mucha hambre.", "Yes! I'm really hungry."],
        ],
        [
          fb("Complete Lucas's reply.", "Perfecto. Hay un bar muy bueno ___ lado de mi casa.", "al", "Al lado de = next to."),
        ]
      ),
    ],
    [
      mc("What does Lucas study?", ["Art", "Nursing", "History", "Music"], 0, "Estudio arte."),
      fb("Complete with ir.", "Emma y Lucas ___ a cenar tapas.", "van", "Emma y Lucas = ellos → van."),
      fb("Complete with the right form of ser.", "Las bufandas ___ de seda.", "son", "Material → ser de."),
      mt(
        "Match each moment of the day to Emma's feeling.",
        [
          ["en el museo", "cansada pero contenta"],
          ["antes de cenar", "con mucha hambre"],
          ["con su regalo", "muy feliz"],
        ],
        "Estar for feelings, tener for hunger."
      ),
      toEs("I like this bag but it's very expensive.", "Me gusta este bolso pero es muy caro.", "Gusta (singular thing); este (near me); ser for price as a characteristic.", ["Me gusta este bolso, pero es muy caro."]),
      toEn("Hoy es un día perfecto en Madrid.", "Today is a perfect day in Madrid.", "Hoy es… for describing the day.", ["Today's a perfect day in Madrid."]),
      wo("Mañana Emma y Lucas van a visitar el Palacio Real.", "Time + compound subject + van a + infinitive + place.", "Tomorrow Emma and Lucas are going to visit the Royal Palace."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-your-introduction",
    "A1 Challenge: Write Your Introduction",
    "Assemble a complete self-introduction, line by line — the kind of paragraph you'll write for a language exchange profile.",
    "8 min",
    [
      sec(
        "The model profile",
        "Read the model. It uses nearly every A1 topic in eight lines.",
        [
          ["Me llamo Sam y tengo treinta años.", "My name is Sam and I'm thirty."],
          ["Soy de Toronto, pero ahora vivo en Chicago.", "I'm from Toronto, but now I live in Chicago."],
          ["Soy profesor de música. Trabajo en una escuela.", "I'm a music teacher. I work at a school."],
          ["Me gusta cocinar y me encantan los perros.", "I like cooking and I love dogs."],
          ["Los fines de semana voy al parque con mi perra, Luna.", "On weekends I go to the park with my dog, Luna."],
        ],
        [
          ms(
            "Which topics appear in Sam's profile?",
            ["age with tener", "origin with ser de", "gustar/encantar", "weather with hacer"],
            [0, 1, 2],
            "There's no weather sentence in the profile."
          ),
        ]
      ),
      sec(
        "Write yours",
        "Now fill in a profile for Paula, using her notes: 25 · Valencia · nurse · hospital · likes reading · loves the beach.",
        [
          ["Me llamo Paula…", "My name is Paula…"],
        ],
        [
          fb("Paula's profile, line 1.", "Me llamo Paula y ___ veinticinco años.", "tengo", "Age → tener."),
          fb("Paula's profile, line 2.", "___ de Valencia.", "Soy", "Origin → ser de."),
        ]
      ),
    ],
    [
      fb("Paula's profile, line 3.", "Soy enfermera y ___ en un hospital.", "trabajo", "Trabajar → yo trabajo."),
      fb("Paula's profile, line 4.", "Me ___ leer y me encanta la playa.", "gusta", "An activity → gusta."),
      mc(
        "Which line would fit best at the end of a profile?",
        ["¡Hasta pronto!", "Buenos días, señor.", "De nada.", "Lo siento."],
        0,
        "Hasta pronto = see you soon — a friendly sign-off."
      ),
      mc(
        "Which line has an error?",
        ["Soy una persona muy tranquila.", "Estoy de Valencia.", "Tengo dos hermanos.", "Me encanta viajar."],
        1,
        "Origin → soy de Valencia."
      ),
      toEs("I'm a student and I live with my family.", "Soy estudiante y vivo con mi familia.", "Profession without an article; vivir → vivo.", ["Yo soy estudiante y vivo con mi familia."]),
      toEs("I don't like cold weather, but I love snow.", "No me gusta el frío, pero me encanta la nieve.", "Gustar and encantar both agree with the singular thing.", ["No me gusta el frío pero me encanta la nieve."]),
      wo("Mi comida favorita es la pizza con mucho queso.", "Possessive + noun + adjective + ser + article + noun.", "My favorite food is pizza with lots of cheese."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-exit-ticket",
    "A1 Exit Ticket: Ready for A2?",
    "The last A1 lesson: a short, no-hints test of the ten skills A2 will assume you have.",
    "9 min",
    [
      sec(
        "The ten skills",
        "A2 builds on these directly: (1) ser (2) estar (3) regular present tense (4) irregular tener/ir/hacer (5) agreement (6) possessives (7) questions (8) gustar (9) numbers and time (10) hay and demonstratives. Each question below tests one.",
        [
          ["¡Tú puedes!", "You can do it!"],
        ],
        [
          fb("Skill 1: ser.", "Vosotros ___ muy buenos estudiantes.", "sois", "Vosotros → sois."),
          fb("Skill 2: estar.", "¿Dónde ___ mis gafas?", "están", "Location of a plural thing → están."),
        ]
      ),
    ],
    [
      fb("Skill 3: regular present.", "Mi hermano y yo ___ en el mismo edificio. (vivir)", "vivimos", "Nosotros, -IR → vivimos."),
      fb("Skill 4: irregulars.", "¿Qué ___ tú los domingos? (hacer)", "haces", "Hacer → tú haces."),
      fb("Skill 5: agreement.", "Las casas de esta calle son muy ___. (antiguo)", "antiguas", "Feminine plural → antiguas."),
      fb("Skill 6: possessives.", "Ellos venden ___ coche. (their)", "su", "One car → su."),
      fb("Skill 7: questions.", "¿___ cuesta el billete?", "Cuánto", "Price → cuánto."),
      fb("Skill 8: gustar.", "A mis hijos les ___ los videojuegos.", "encantan", "Los videojuegos is plural → encantan.", "encantar"),
      mc("Skill 9: time. 7:45 is…", ["las ocho menos cuarto", "las siete menos cuarto", "las siete y cuarenta", "las ocho y cuarto"], 0, "After half past, count down from the next hour."),
      mc(
        "Skill 10: hay and demonstratives. \"There are many people in that store (over there).\"",
        ["Hay mucha gente en aquella tienda.", "Está mucha gente en aquella tienda.", "Hay muchas gentes en aquel tienda.", "Hay mucha gente en aquel tienda."],
        0,
        "Hay + mucha gente; tienda is feminine → aquella."
      ),
    ]
  ),
];
