// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-reinforcement.ts by scripts/sync-content.mjs -- edit it there, not here.
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
        "Remember the rule: a reply mirrors its question with the yo form of the same verb. ¿Cómo te llamas? → Me llamo… ¿De dónde eres? → Soy de… Read the exchange out loud, then answer as the speakers would.",
        [
          ["—Hola, ¿cómo te llamas?", "Hi, what's your name?"],
          ["—Me llamo Lucía. ¿Y tú?", "My name is Lucía. And you?"],
          ["—Soy Diego. Mucho gusto.", "I'm Diego. Nice to meet you."],
          ["—Igualmente.", "Likewise."],
        ],
        [
          mc(
            "At the same party, a woman tells you \"Encantada\" (nice to meet you). What is the most natural reply?",
            ["Igualmente.", "De nada.", "Adiós.", "Por favor."],
            0,
            "Encantada means the same as mucho gusto, so it gets the same answer: igualmente (likewise). De nada answers gracias, adiós is goodbye and por favor is please."
          ),
          mc(
            "Someone asks you \"¿Cómo te llamas?\" Which answer fits?",
            ["Me llamo Sam.", "Te llamas Sam.", "Se llama Sam.", "Soy de Sam."],
            0,
            "The question uses te llamas (you call yourself); your answer turns it into the yo form: me llamo. Te llamas means \"your name is\", se llama is \"his / her name is\", and soy de gives a place."
          ),
        ]
      ),
      sec(
        "Scene 2: Where are you from?",
        "Ser + de tells where someone is from. The question uses the same verb: ¿De dónde eres? → Soy de… Talking about someone else? Switch to their form: es, son.",
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
          toEs(
            "¿De dónde eres?",
            "Soy de Canadá.",
            "The question uses eres (tú); the answer about yourself uses soy, plus de for the place.",
            ["Yo soy de Canadá.", "De Canadá."],
            "Answer the question in Spanish: you're from Canada."
          ),
        ]
      ),
      sec(
        "Scene 3: Formal or informal?",
        "Now Diego meets Lucía's grandfather. With an older stranger, Spanish speakers usually switch from tú to usted — and the verb switches with it: usted takes the él / ella form.",
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
            "With one older person you're being polite to, use usted — and usted takes the él/ella form of ser: es. Eres is for a friend, son ustedes for a group."
          ),
          toEs(
            "¿Tú eres profesor?",
            "¿Usted es profesor?",
            "Formal \"you\" is usted, and the verb switches to the él / ella form: eres → es.",
            ["¿Es usted profesor?", "¿Es profesor?"],
            "Make it formal."
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
      { ...fb(
        "Complete the introduction.",
        "Hola, yo ___ Marta y soy de Madrid.",
        "soy",
        "Yo takes soy. \"Yo me llamo Marta\" would also fit, but this exercise practises ser."
      ), altAnswers: ["me llamo"] },
      mc(
        "You're introducing two friends to your teacher. How do you say \"They are from Mexico\"?",
        ["Ellos son de México.", "Ellos es de México.", "Ellos somos de México.", "Ellos eres de México."],
        0,
        "Ellos → son. Es is singular, somos is nosotros, eres is tú."
      ),
      toEs(
        "¿De dónde son ustedes?",
        "Somos de España.",
        "The question asks about ustedes (you all); you answer for your group with nosotros → somos. The pronoun is optional.",
        ["Nosotros somos de España.", "Nosotras somos de España.", "De España."],
        "Answer the question in Spanish for you and your brother: you're from Spain."
      ),
      toEn(
        "¿Usted es de aquí?",
        "Are you from here?",
        "Usted is the formal \"you,\" but in English it's still just \"you.\"",
        ["Are you from around here?"]
      ),
      wo("¿De dónde es tu profesor?", "Question word first (de dónde), then the verb (es), then the subject (tu profesor).", "Where is your teacher from?"),
      { ...fb("How do you say the bold words in Spanish?", "—¿De dónde ___ tú? —Soy de Chile.", "eres", "The question mirrors the answer: tú eres → yo soy. Es would be for usted."), en: "—Where [are] you from? —I'm from Chile." },
      toEs("Nice to meet you. Likewise.", "Mucho gusto. Igualmente.", "Igualmente is the natural reply to mucho gusto. \"De nada\" means you're welcome, not likewise.", ["Encantado. Igualmente.", "Encantada. Igualmente."]),
      toEs("Good morning, ma'am. Are you from here? (formal)", "Buenos días, señora. ¿Usted es de aquí?", "With an older stranger, use usted + es, not tú eres.", ["Buenos días, señora. ¿Es usted de aquí?", "Buenos días, señora. ¿Es de aquí?"]),
      wo("Buenas noches, señora, ¿de dónde es usted?", "With an older stranger, ask with usted: ¿de dónde es usted? instead of ¿de dónde eres?", "Good evening, ma'am, where are you from?"),
      toEs("I'm from Chile, but my parents are from Peru.", "Soy de Chile, pero mis padres son de Perú.", "Soy for yourself, son for your parents (they): the verb changes with the person even in one sentence.", ["Yo soy de Chile, pero mis padres son de Perú."]),
      toEs(
        "Los padres de Lucía es de Bogotá.",
        "Los padres de Lucía son de Bogotá.",
        "Diego's note has the wrong verb: the subject is los padres (they), so ser is son.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Me llamo es Diego.",
        "Me llamo Diego.",
        "Me llamo already means \"my name is\" (literally \"I call myself\"), so there's no es. Mi nombre es Diego is the other way to say it.",
        ["Mi nombre es Diego.", "Soy Diego."],
        "Correct the sentence."
      ),
      toEs(
        "¿De dónde eres usted?",
        "¿De dónde es usted?",
        "Usted takes es, the él / ella form. Eres goes only with tú.",
        ["¿De dónde eres tú?", "¿De dónde eres?"],
        "Correct the sentence."
      ),
      toEs(
        "Yo es de Toronto.",
        "Yo soy de Toronto.",
        "Yo always takes soy. Es is for él, ella and usted.",
        ["Soy de Toronto."],
        "Correct the sentence."
      ),
      toEs(
        "¿Cómo te llamas? ¿De dónde eres?",
        "¿Cómo se llama usted? ¿De dónde es usted?",
        "To a stranger, te (for tú) becomes se (for usted), and both verbs take the él / ella form: se llama, es.",
        ["¿Cómo se llama? ¿De dónde es?", "¿Cómo se llama usted? ¿De dónde es?", "¿Cómo se llama? ¿De dónde es usted?"],
        "Make it formal."
      ),
      toEs(
        "¿De dónde eres?",
        "¿De dónde son ustedes?",
        "Asking a group: ustedes son in Latin America (and with strangers in Spain), vosotros sois with friends in Spain.",
        ["¿De dónde sois?", "¿De dónde sois vosotros?", "¿De dónde sois vosotras?", "¿De dónde son?"],
        "Make it plural: you're asking two people."
      ),
      toEs(
        "¿De dónde es tu amiga?",
        "Mi amiga es de Madrid.",
        "Answering about someone else, keep the question's form: es. You can also just say Es de Madrid.",
        ["Es de Madrid.", "Marta es de Madrid.", "Mi amiga Marta es de Madrid."],
        "Answer the question in Spanish: your friend Marta is from Madrid."
      ),
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
        "El/la/los/las point to a specific thing (the): one the listener can already identify. Un/una/unos/unas introduce something new or unspecified (a, some). So a thing usually appears first with un/una, and after that with el/la.",
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
            "A specific dog (my neighbor's) takes the definite article, and perro is masculine: el. \"Un\" means a dog, and \"la\" and \"una\" are feminine."
          ),
          mc(
            "\"Tengo un gato. ___ gato es negro.\" Which word fills the gap?",
            ["El", "Un", "La", "Unos"],
            0,
            "The cat was introduced with un; now the listener knows which cat, so it's el gato. Un would sound like a second, different cat."
          ),
        ]
      ),
      sec(
        "Nouns that break the -o/-a pattern",
        "A few everyday nouns don't follow the -o = masculine, -a = feminine shortcut. Learn them with their article attached. Many nouns in -ma come from Greek and are masculine.",
        [
          ["el día", "the day"],
          ["el mapa", "the map"],
          ["el problema", "the problem"],
          ["la mano", "the hand"],
          ["la foto", "the photo"],
        ],
        [
          ms(
            "These nouns are new. Which ones are masculine even though they end in -a?",
            ["tema (topic)", "sistema (system)", "casa (house)", "idioma (language)", "semana (week)"],
            [0, 1, 3],
            "Tema, sistema and idioma are Greek -ma words, masculine like el problema. Casa and semana follow the normal rule: la casa, la semana."
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
        "Problema ends in -a but is masculine, and \"a problem\" needs the indefinite article: un problema. \"Una\" and \"la\" are feminine, and \"el problema\" means the problem."
      ),
      fb("Complete with the correct definite article.", "___ foto de mi familia está en la mesa.", "La", "Foto is short for fotografía, which is feminine → la foto."),
      toEs("The maps are on the table.", "Los mapas están en la mesa.", "Mapa is masculine → el mapa, plural los mapas."),
      toEn("Unas chicas hablan español.", "Some girls speak Spanish.", "Unas is the feminine plural of un/una and means some: unas chicas = some girls.", ["A few girls speak Spanish.", "Some girls are speaking Spanish."]),
      mc(
        "Which pair is correct?",
        ["la ciudad / las ciudades", "el ciudad / los ciudades", "la ciudad / las ciudads", "el ciudad / las ciudades"],
        0,
        "Nouns ending in -dad are feminine, and a noun ending in a consonant adds -es: la ciudad, las ciudades. \"El\" and \"los\" are masculine, and \"ciudads\" adds only -s."
      ),
      wo("El día es muy bonito.", "Article + noun (el día) + verb + adverb + adjective.", "The day is very nice."),
      toEs("Tengo una foto.", "Tengo unas fotos.", "Una → unas, foto → fotos. Foto stays feminine in the plural.", [], "Make it plural."),
      toEs(
        "Busco un mapa.",
        "Busco el mapa.",
        "The meaning changes from any map to a specific one the listener knows about. Mapa is masculine, so un → el.",
        [],
        "Change un to el."
      ),
      toEs("El problema es grande.", "Los problemas son grandes.", "El → los (problema is masculine), es → son, grande → grandes.", [], "Make it plural."),
      toEs("Las mapas son de Pedro.", "Los mapas son de Pedro.", "Mapa is masculine despite its -a, so the plural article is los.", [], "Correct the sentence."),
      toEs("Busco los fotos de Madrid.", "Busco las fotos de Madrid.", "Foto is feminine (la foto, short for la fotografía), so the plural is las fotos.", [], "Correct the sentence."),
      toEs(
        "Tengo un perro. Un perro es negro.",
        "Tengo un perro. El perro es negro.",
        "First mention takes un; once the listener knows which dog, it becomes el perro. A second un sounds like a different dog.",
        ["Tengo un perro y el perro es negro.", "Tengo un perro. Es negro."],
        "Correct the sentence."
      ),
      toEs("a map and the photos", "un mapa y las fotos", "Un mapa: masculine despite the -a, and \"a\" for something new. Las fotos: feminine despite the -o, plural, and \"the\" for specific photos."),
      { ...fb("How do you say the bold words in Spanish?", "Tengo ___ amigas en Madrid.", "unas", "Some + feminine plural = unas. Las would mean \"the friends\"."), en: "I have [some] friends (f.) in Madrid." },
      { ...fb("How do you say the bold words in Spanish?", "___ fotos de la clase son bonitas.", "Las", "Specific photos → definite article, and foto is feminine: las."), en: "[The] class photos are pretty." },
      toEs("The map is big.", "El mapa es grande.", "A specific map → el; mapa is masculine despite its -a."),
      mc("Which means \"I'm looking for some books\"?", ["Busco los libros.", "Busco unos libros.", "Busco unas libros.", "Busco un libros."], 1, "\"Some\" = unos/unas; libros is masculine, so unos. Los libros means \"the books\"."),
      wo("Busco unas fotos de Madrid", "Unas = some, for any photos, not specific ones; foto is feminine, so unas, not unos.", "I'm looking for some photos of Madrid"),
      toEs("Ana's friends (m.) arrive today.", "Los amigos de Ana llegan hoy.", "Specific friends (Ana's) → los. Unos would be just \"some friends\"."),
      toEs("I'm looking for a house; the house is pretty.", "Busco una casa; la casa es bonita.", "First mention → una; once we know which house → la.", ["Busco una casa y la casa es bonita."]),
      toEs("I have a problem; the problem is big.", "Tengo un problema; el problema es grande.", "Problema is masculine (un/el). First mention takes un, the second el.", ["Tengo un problema y el problema es grande."]),
      toEs(
        "The topic (tema) of the class is easy.",
        "El tema de la clase es fácil.",
        "New word, known rule: tema is a Greek -ma word, so it's masculine like el problema. La clase is feminine.",
        []
      ),
      {
        type: "speak",
        prompt: "Respond aloud: say you have a cat, and then that the cat is small.",
        text: "Tengo un gato. El gato es pequeño.",
        explanation: "New information first takes un (un gato); the second time, the listener knows which cat, so it's el gato.",
      },
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
        "Remember the rules: the verb follows the subject, and the article follows the noun's gender and number. So when a sentence looks off, check three things in order: (1) does the verb match the subject? (2) does the article match the noun's gender? (3) does it match the noun's number?",
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
          toEs(
            "Ustedes es de México.",
            "Ustedes son de México.",
            "Check 1, the verb: ustedes is plural and takes son, the same form as ellos.",
            [],
            "Correct the sentence."
          ),
        ]
      ),
      sec(
        "Tú vs. tu, él vs. el",
        "An accent mark can be the whole difference: tú (you) vs. tu (your); él (he) vs. el (the). The pronoun has the accent; the little word before a noun doesn't.",
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
          fb(
            "Complete with tú or tu.",
            "¿___ hermana es de Lima?",
            "Tu",
            "Here the word sits before a noun (hermana) and means \"your\", so no accent: tu. Tú with an accent is the subject \"you\"."
          ),
        ]
      ),
    ],
    [
      mc(
        "Find the correct version of \"Yo es estudiante.\"",
        ["Yo soy estudiante.", "Yo eres estudiante.", "Yo son estudiante.", "Yo estoy estudiante."],
        0,
        "Yo always takes soy: Yo soy estudiante (no un before a bare profession). \"Eres\" is tú, \"son\" is ellos, and estar isn't used to say what someone is."
      ),
      mc(
        "Find the correct version of \"Los chicas son altas.\"",
        ["Las chicas son altas.", "Los chicas es altas.", "Las chicas es altas.", "Los chicos son altas."],
        0,
        "Chicas is feminine plural, so the article is las: Las chicas son altas. \"Los chicas\" and \"es\" mismatch gender and number, and \"Los chicos son altas\" makes the adjective disagree."
      ),
      toEs("Ustedes sois muy simpáticos.", "Ustedes son muy simpáticos.", "Ustedes takes son, in Spain and Latin America alike. Sois goes with vosotros.", ["Vosotros sois muy simpáticos."], "Correct the sentence."),
      toEs("Busco una mapa de la ciudad.", "Busco un mapa de la ciudad.", "Mapa is masculine despite the -a → un mapa.", [], "Correct the sentence."),
      ms(
        "Which of these sentences contain an error?",
        ["Mi hermana es médica.", "Nosotras somos de Cuba.", "Tú es mi mejor amigo.", "El día es largo."],
        [2],
        "Tú takes eres: Tú eres mi mejor amigo. The others are correct."
      ),
      toEs("You (informal) are my teacher.", "Tú eres mi profesor.", "Tú + eres. Remember the accent on tú.", ["Eres mi profesor.", "Tú eres mi profesora.", "Eres mi profesora."]),
      wo("Ellas son las amigas de Pedro.", "Subject + ser + article + noun + de + owner.", "They (f.) are Pedro's friends."),
      toEs("Nosotros sois de Chile.", "Nosotros somos de Chile.", "Check the subject first: nosotros needs somos. Sois is for vosotros.", ["Somos de Chile.", "Vosotros sois de Chile."], "Correct the sentence."),
      toEs("El casa de Ana es bonita.", "La casa de Ana es bonita.", "Casa ends in -a and is feminine, so la casa.", [], "Correct the sentence."),
      toEs("Es una día bonito.", "Es un día bonito.", "Día is masculine despite the -a: un día. Bonito already shows it's masculine.", [], "Correct the sentence."),
      toEs("Tú es de Chile, ¿no?", "Tú eres de Chile, ¿no?", "Tú always takes eres; es is for él, ella and usted.", ["Eres de Chile, ¿no?"], "Correct the sentence."),
      toEs("Las flors son de Ana.", "Las flores son de Ana.", "Flor ends in a consonant, so the plural adds -es: flores.", [], "Correct the sentence."),
      toEs("You (informal) are my neighbor. (to a man)", "Tú eres mi vecino.", "Tú with an accent is \"you\"; tu without one is \"your\". Tú goes with eres.", ["Eres mi vecino."]),
      toEs("Your (informal) friend is from Peru.", "Tu amigo es de Perú.", "\"Your\" is tu, no accent. Tú with an accent is the pronoun \"you\".", ["Tu amiga es de Perú."]),
      toEs("He is the doctor.", "Él es el doctor.", "Él (he) has an accent; el (the) doesn't. This sentence needs both.", ["Él es el médico."]),
      mc("Which is correct?", ["El es mi amigo.", "Él es mi amigo.", "Él es mí amigo.", "El es mí amigo."], 1, "Él (he) needs the accent; mi (my) does not."),
      mc(
        "What's wrong with \"Los mapa son grandes\"?",
        ["Mapa must be plural: los mapas.", "Mapa is feminine: las mapas.", "Son should be es.", "Nothing, it's correct."],
        0,
        "The article and verb are plural, so the noun must be too: los mapas son grandes. Mapa is masculine, so los is right."
      ),
      toEs("The photos are Pedro's.", "Las fotos son de Pedro.", "Foto is feminine, so las fotos, not los fotos."),
      toEs("You all (Latin America) are students.", "Ustedes son estudiantes.", "Ustedes takes son. \"Sois\" is only for vosotros in Spain."),
      wo("Él es tu vecino", "Él (he) with an accent, tu (your) without.", "He is your neighbor"),
      toEs("Are you (informal) the teacher? (to a woman)", "¿Tú eres la profesora?", "Tú eres for informal \"you are\"; a woman teacher is la profesora.", ["¿Eres tú la profesora?", "¿Eres la profesora?"]),
      toEs(
        "¿Usted es de Lima?",
        "¿Tú eres de Lima?",
        "Informal \"you\" is tú, with an accent, and it takes eres. The pronoun can be dropped: ¿Eres de Lima?",
        ["¿Eres de Lima?", "¿Eres tú de Lima?"],
        "Change to tú."
      ),
      toEs(
        "Él es mi vecino.",
        "Ellos son mis vecinos.",
        "Él → ellos, es → son, and both mi and vecino go plural: mis vecinos.",
        ["Son mis vecinos.", "Ellas son mis vecinas."],
        "Make it plural."
      ),
      toEs("Mi amigo es alto.", "Tu amigo es alto.", "\"Your\" before a noun is tu, with no accent. Tú with an accent would mean \"you\".", [], "Change mi to tu."),
      toEs(
        "Él es el doctor de Ana.",
        "Ella es la doctora de Ana.",
        "Él → ella (no accent problem now), el → la, and doctor → doctora.",
        ["Es la doctora de Ana."],
        "Make it feminine."
      ),
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
        "In Spanish, the noun is the first domino. Change its gender or number and the article, the adjective and the verb all fall into line, because each of them copies the noun.",
        [
          ["El gato negro es pequeño.", "The black cat is small."],
          ["Los gatos negros son pequeños.", "The black cats are small."],
          ["La gata negra es pequeña.", "The black (female) cat is small."],
        ],
        [
          toEs(
            "El libro rojo es nuevo.",
            "Los libros rojos son nuevos.",
            "Plural noun → plural article, adjectives and verb: los, rojos, son, nuevos.",
            [],
            "Make it plural."
          ),
        ]
      ),
      sec(
        "Adjectives that don't change for gender",
        "Most adjectives ending in -e or a consonant (grande, inteligente, azul, fácil) keep the same form for masculine and feminine and only change for plural. Exceptions: nationalities and -dor adjectives add -a (see below).",
        [
          ["un chico inteligente / una chica inteligente", "a smart boy / a smart girl"],
          ["el coche azul / los coches azules", "the blue car / the blue cars"],
        ],
        [
          mc(
            "Make it feminine: \"El profesor es muy amable.\"",
            ["La profesora es muy amable.", "La profesora es muy amabla.", "La profesor es muy amable.", "La profesora son muy amable."],
            0,
            "Amable ends in -e, so it's the same for both genders; only the article and noun change: la profesora. \"Amabla\" doesn't exist, \"la profesor\" forgets the noun, and \"son\" is plural."
          ),
        ]
      ),
      sec(
        "Nationality adjectives",
        "Nationalities ending in a consonant add -a for the feminine, and a written accent on the last syllable disappears: español → española, inglés → inglesa, alemán → alemana.",
        [
          ["Él es español. / Ella es española.", "He is Spanish. / She is Spanish."],
          ["Ellos son ingleses.", "They are English."],
        ],
        [
          toEs(
            "Mi amigo es alemán.",
            "Mi amiga es alemana.",
            "Amigo → amiga, and alemán adds -a and drops its accent: alemana.",
            [],
            "Make it feminine."
          ),
        ]
      ),
    ],
    [
      toEs("La casa blanca es bonita.", "Las casas blancas son bonitas.", "Casas is feminine plural, so every adjective ends in -as, and es becomes son.", [], "Make it plural."),
      toEs("El examen es difícil.", "Los exámenes son difíciles.", "Difícil ends in a consonant → add -es: difíciles. Examen → exámenes gains an accent to keep its stress.", [], "Make it plural."),
      mc(
        "Make it masculine: \"Las niñas son simpáticas.\"",
        ["Los niños son simpáticos.", "Los niños son simpáticas.", "Las niños son simpáticos.", "Los niño son simpáticos."],
        0,
        "Every word switches to masculine: las → los, niñas → niños, simpáticas → simpáticos. The wrong options leave one piece feminine (\"simpáticas\", \"Las\") or singular (\"niño\")."
      ),
      mc(
        "Make it singular: \"Unos estudiantes franceses.\"",
        ["Un estudiante francés", "Un estudiante franceses", "Una estudiante francés", "Un estudiantes francés"],
        0,
        "In the singular, everything loses its -s and francés gets its accent back: un estudiante francés. \"Franceses\" and \"estudiantes\" stay plural, and \"una estudiante francés\" mixes genders."
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
      mc(
        "How do you say \"The green cars are fast\"?",
        ["Los coches verdes son rápidos.", "Los coches verdes son rápidas.", "Los coches verde son rápidos.", "Los coche verdes es rápidos."],
        0,
        "Coches is masculine plural, so verde → verdes and rápido → rápidos, with son. Rápidas is feminine, and the other options leave a word singular."
      ),
      wo("Mis hermanas son muy altas.", "Possessive + noun + ser + intensifier + adjective.", "My sisters are very tall."),
      toEs("La mesa es verde.", "Las mesas son verdes.", "Verde doesn't change for gender; for the plural just add -s.", [], "Make it plural."),
      toEs("El chico es feliz.", "Los chicos son felices.", "Feliz ends in a consonant, so add -es, and z becomes c: felices.", [], "Make it plural."),
      toEs("Él es inglés.", "Ella es inglesa.", "Nationalities in a consonant add -a, and the accent disappears: inglesa.", ["Es inglesa."], "Change to ella."),
      toEs("Mi amigo es trabajador.", "Mi amiga es trabajadora.", "-dor adjectives add -a for the feminine, unlike most consonant-ending adjectives.", [], "Make it feminine."),
      fb("Complete with alemán in the right form.", "Las chicas son ___.", "alemanas", "Alemán → alemana → alemanas: add -a, drop the accent, then add -s."),
      toEs("The white dog (f.) is small.", "La perra blanca es pequeña.", "Make the noun feminine and every domino falls: la, perra, blanca, pequeña."),
      {
        type: "speak",
        prompt: "Respond aloud: say in Spanish \"The English teachers (all women) are very kind.\"",
        text: "Las profesoras inglesas son muy amables.",
        explanation: "Inglesas (nationality adds -a, then -s), but amables only adds -s: -e adjectives don't change for gender.",
      },
      wo("Los coches grises son lentos", "Gris → grises (consonant + -es); lento → lentos. Both adjectives come after the noun.", "The gray cars are slow"),
      mc("Make it feminine: \"El chico español es alto.\"", ["La chica español es alta.", "La chica española es alta.", "La chica española es alto.", "La chico española es alta."], 1, "Article, noun, nationality and adjective all switch: la chica española es alta."),
      wo("Los chicos franceses son muy altos", "Plural masculine everywhere: francés → franceses (accent drops), alto → altos.", "The French boys are very tall"),
      toEs("My neighbors (f.) are English and very hard-working.", "Mis vecinas son inglesas y muy trabajadoras.", "Both inglés and trabajador add -a for the feminine, then -s for the plural."),
      toEs("The blue cars are fast, and the green car is slow.", "Los coches azules son rápidos y el coche verde es lento.", "Plural: azules, rápidos, son. Singular: verde, lento, es.", ["Los carros azules son rápidos y el carro verde es lento."]),
      toEs("La chica es inglés.", "La chica es inglesa.", "Nationalities add -a for a woman, and the accent drops: inglesa.", [], "Correct the sentence."),
      toEs("Los coches azul son rápidos.", "Los coches azules son rápidos.", "Azul has to go plural with coches: consonant + -es → azules.", ["Los carros azules son rápidos."], "Correct the sentence."),
      toEs("Las profesoras son trabajadores.", "Las profesoras son trabajadoras.", "-dor adjectives have a feminine: trabajadora → trabajadoras for a group of women.", [], "Correct the sentence."),
      toEs("Mi amiga es francésa.", "Mi amiga es francesa.", "Francés loses its written accent when it adds -a: francesa. The stress falls on -ce- by the normal rule.", [], "Correct the sentence."),
    ]
  ),
  L(
    "adjective-agreement",
    "a1r-spiral-articles-adjectives-ser",
    "Spiral Review: Articles, Adjectives & Ser",
    "A cumulative check of everything so far — pronouns, ser, articles and agreement all in one place.",
    "8 min",
    [
      sec(
        "Recall first",
        "Remember the rules: ser follows the person, and articles and adjectives copy the noun. Before looking at the examples, try to say the six forms of ser aloud: yo…, tú…, él/ella/usted…, nosotros…, vosotros…, ellos/ustedes…. Then check yourself below.",
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
            "Ser is irregular — these forms just have to be memorized. Ustedes shares son with ellos."
          ),
        ]
      ),
      sec(
        "Describe a person",
        "A full description combines all of it: ser in the person's form + adjectives that agree with the person.",
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
        "Two women take ellas son, and both adjectives go feminine plural: altas y rubias. \"Es\" is singular, \"altos y rubios\" is masculine, and \"alta y rubia\" is singular."
      ),
      fb("Complete with the correct article.", "___ problemas de matemáticas son difíciles.", "Los", "Problema ends in -a but is masculine (one of the -ma words from Greek), so its article is los."),
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
      { ...fb("How do you say the bold words in Spanish?", "Vosotros ___ altos.", "sois", "Vosotros takes sois; son is for ustedes."), en: "You all (Spain) [are] tall." },
      { ...fb("How do you say the bold words in Spanish?", "Mi padre ___ alto y simpático.", "es", "One person (mi padre) → es."), en: "My father [is] tall and nice." },
      { ...fb("How do you say the bold words in Spanish?", "La foto es muy ___.", "bonita", "Foto is feminine (la foto), so bonita, not bonito."), en: "The photo is very [pretty]." },
      toEs("My mother is Mexican.", "Mi madre es mexicana.", "Ser for nationality; mexicano becomes mexicana for a woman. Nationalities are lowercase in Spanish."),
      toEs("The problem is easy.", "El problema es fácil.", "El problema is masculine; fácil has one form for both genders."),
      toEs("Las manos son pequeñas.", "La mano es pequeña.", "Singular: la, mano, es, pequeña. Mano stays feminine, so pequeña keeps its -a.", [], "Make it singular."),
      toEs("You (formal, to a woman) are Colombian.", "Usted es colombiana.", "Usted takes es; the adjective follows the real person's gender: colombiana."),
      mc("Which is fully correct?", ["Las mapas son grandes.", "Los mapas son grandes.", "Los mapas es grandes.", "Los mapas son grande."], 1, "Mapa is masculine (los), the verb is plural (son), the adjective is plural (grandes)."),
      toEs("We (men) are tall and strong.", "Somos altos y fuertes.", "Nosotros → somos; altos adds -s, fuerte adds -s.", ["Nosotros somos altos y fuertes."]),
      toEs("Mis abuelos son españoles.", "Mis abuelas son españolas.", "Abuelos → abuelas, and español → españolas: nationalities add -a, then -s.", [], "Make it feminine."),
      wo("La casa de Ana es grande y blanca", "De Ana follows the noun; both adjectives agree with casa.", "Ana's house is big and white"),
      toEs("The (female) teachers are intelligent and kind.", "Las profesoras son inteligentes y amables.", "Inteligente and amable don't change for gender, only for number."),
      toEs("I'm Pablo; I'm Mexican and I'm a student.", "Soy Pablo; soy mexicano y soy estudiante.", "Ser for name, nationality and profession: soy each time.", ["Me llamo Pablo; soy mexicano y soy estudiante.", "Soy Pablo, soy mexicano y soy estudiante.", "Me llamo Pablo, soy mexicano y soy estudiante."]),
      toEs("Some (female) friends are from Germany, and they are very nice.", "Unas amigas son de Alemania y son muy simpáticas.", "Unas for \"some\", son for \"they are\", simpáticas to match amigas."),
      toEs("Mi hermana es simpático.", "Mi hermana es simpática.", "Hermana is feminine, so simpático becomes simpática.", [], "Correct the sentence."),
      toEs("Vosotros son de Perú.", "Vosotros sois de Perú.", "Vosotros takes sois. (Ustedes son de Perú is the other correct pairing.)", ["Ustedes son de Perú."], "Correct the sentence."),
      toEs("Las problemas son difíciles.", "Los problemas son difíciles.", "Problema is masculine despite the -a, so the plural article is los.", [], "Correct the sentence."),
      toEs("Soy alta y morena.", "Somos altas y morenas.", "Nosotras takes somos, and both adjectives go plural: altas, morenas.", ["Nosotras somos altas y morenas."], "Change to nosotras."),
      {
        type: "speak",
        prompt: "Respond aloud: describe a friend in two sentences: name, nationality and two adjectives.",
        text: "Mi amigo se llama Tom. Es inglés, alto y muy simpático.",
        explanation: "Es for one person; the nationality and the adjectives match your friend: inglés, alto, simpático for a man; inglesa, alta, simpática for a woman.",
      },
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
        [
          "Remember the rule: every regular -ar verb keeps its stem and swaps the ending to show who acts: -o, -as, -a, -amos, -áis, -an.",
          "A planner drops most subjects, so the ending is often your only clue to who does what. Read Sofía's week with that in mind.",
        ],
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
            "Cocinamos ends in -amos, the nosotros ending, and the subject is mi hermano y yo, so Sofía and her brother cook together. Only Sofía would be cocino; her friends would be cocinan."
          ),
          mc(
            "Sofía adds a note with no subject: \"Viernes: visito a la abuela.\" Who visits Grandma?",
            ["Sofía herself", "Sofía's friends", "Sofía and her brother", "Grandma"],
            0,
            "Visito ends in -o, and only yo takes -o, so Sofía is writing about herself. Her friends would be visitan, and she and her brother would be visitamos."
          ),
        ]
      ),
      sec(
        "Filling in the planner",
        "Now it's your turn to write entries. Find the subject first, then pick its ending. Watch out for groups: toda la familia is one \"it\" (-a), but mi hermano y yo is \"we\" (-amos).",
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
        "Vosotros (used in Spain) takes -áis for -ar verbs: camináis. \"Caminan\" is ellos/ustedes, \"caminamos\" is nosotros, and \"caminas\" is tú."
      ),
      mt(
        "Match each planner entry to its meaning.",
        [
          ["Tomo café.", "I drink coffee."],
          ["Mandamos mensajes.", "We send messages."],
          ["Ella nada en la piscina.", "She swims in the pool."],
          ["Ustedes miran la tele.", "You all watch TV."],
        ],
        "Tomar can mean \"to take\" or \"to drink\"; mandar = to send; nadar = to swim; mirar = to watch. The endings tell you who: -o (I), -amos (we), -a (she), -an (you all)."
      ),
      toEs("We work on Saturdays.", "Trabajamos los sábados.", "Nosotros → trabajamos. Days of the week take los for \"on ___s.\"", ["Nosotros trabajamos los sábados.", "Nosotras trabajamos los sábados."]),
      wo("Mi padre prepara el desayuno todos los días.", "Mi padre is él, so preparar takes -a: prepara. Order: subject + verb + object + time expression.", "My father makes breakfast every day."),
      fb("Complete Monday's entry with nadar (to swim).", "Lunes: yo ___ en la piscina.", "nado", "Yo → -o: nad- + -o = nado."),
      fb("Complete Tuesday's entry with limpiar (to clean).", "Martes: mi madre ___ la cocina.", "limpia", "Mi madre = ella → -a: limpia."),
      fb("Complete Wednesday's entry with desayunar (to have breakfast).", "Miércoles: tú ___ con Ana.", "desayunas", "Tú → -as: desayunas."),
      fb("Complete with mirar (to watch).", "Vosotros ___ la tele.", "miráis", "Vosotros → -áis, with an accent: miráis."),
      mc("Which form goes with 'mis amigos y yo'?", ["cantan", "cantamos", "canto", "cantáis"], 1, "'My friends and I' = nosotros, so -amos: cantamos. Don't let 'yo' at the end pull you to canto, and don't let 'mis amigos' pull you to cantan: the whole group includes you."),
      toEs("¿Trabajas los domingos?", "¿Trabajan los domingos?", "Ustedes takes the ellos ending -an: trabajas (tú) becomes trabajan. Los domingos = on Sundays, no preposition.", ["¿Ustedes trabajan los domingos?", "¿Trabajan ustedes los domingos?"], "Change to ustedes."),
      toEs("My brother and I listen to music.", "Mi hermano y yo escuchamos música.", "Mi hermano y yo = nosotros → escuchamos. Escuchar already includes 'to'."),
      toEs("Sofía compra pan en el mercado.", "Compramos pan en el mercado.", "Nosotros takes -amos: compra (Sofía, -a) becomes compramos. Nosotros is optional because -amos already says \"we\".", ["Nosotros compramos pan en el mercado.", "Nosotras compramos pan en el mercado."], "Change to nosotros."),
      toEs("Sábado: mis amigas cocina la cena.", "Sábado: mis amigas cocinan la cena.", "Mis amigas is ellas (plural), so the verb needs -an: cocinan. Cocina is the ending for one person.", [], "Correct the sentence."),
      toEs("Ustedes llegáis a las nueve.", "Ustedes llegan a las nueve.", "Ustedes always takes the ellos ending -an, even in Spain: llegan. -áis belongs only to vosotros (vosotros llegáis).", [], "Correct the sentence."),
      toEs("Jueves: yo trabajar en la tienda.", "Jueves: yo trabajo en la tienda.", "Trabajar is the infinitive. A planner entry still needs a conjugated verb: yo → -o, trabajo.", ["Jueves: trabajo en la tienda."], "Correct the sentence."),
      wo("Los jueves mis padres bailan salsa", "Los jueves = on Thursdays; mis padres = ellos, so bailar takes -an: bailan.", "On Thursdays my parents dance salsa"),
      mc(
        "Sofía's brother writes: \"Domingo: ___ fútbol con mis amigos.\" He means \"we play\". Which verb fits? (practicar)",
        ["practicamos", "practican", "practico", "practicáis"],
        0,
        "\"We play\" (my friends and I) is nosotros, so practic- + -amos: practicamos. Practican would leave him out (they play), practico is only him, and practicáis is \"you all\" in Spain."
      ),
      toEs("On Tuesdays I take the bus and walk to school.", "Los martes tomo el autobús y camino a la escuela.", "Both verbs are yo: tomo, camino.", ["Los martes tomo el bus y camino a la escuela.", "Los martes tomo el autobús y camino al colegio."]),
      toEs("On Sundays she rests and I draw.", "Los domingos ella descansa y yo dibujo.", "Ella descansa (-a), yo dibujo (-o). Keep the pronouns to show the contrast."),
      toEs("Do you all (Spain) travel on weekends?", "¿Viajáis los fines de semana?", "Vosotros → -áis: viajáis.", ["¿Vosotros viajáis los fines de semana?"]),
      { type: "speak", prompt: "Say your own Monday entry in Spanish: On Mondays I study, and then my sister and I cook dinner.", text: "Los lunes estudio, y después mi hermana y yo cocinamos la cena.", explanation: "Estudio is yo (-o); mi hermana y yo is nosotros, so cocinamos (-amos)." },
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
        [
          "Remember the rule: the verb ending shows who acts (-o I, -as you, -a he/she/usted, -amos we, -an they/ustedes).",
          "So the answer mirrors the question. A question to you (tú or usted) is answered about yourself: yo, -o. A question to a group (ustedes) is answered by the group: nosotros, -amos. A question about someone else (él, ella, ellos) keeps the same form in the answer.",
        ],
        [
          ["—¿Trabajas mucho? —Sí, trabajo mucho.", "Do you work a lot? Yes, I work a lot. (tú → yo)"],
          ["—¿Estudian ustedes inglés? —No, estudiamos francés.", "Do you all study English? No, we study French. (ustedes → nosotros)"],
        ],
        [
          fb("Answer the question.", "—¿Cantas en la ducha? —Sí, ___ todas las mañanas.", "canto", "The question uses tú (cantas), so answer with yo: canto."),
          mc(
            "Someone asks you: \"¿Usted cocina en casa?\" Which answer fits?",
            ["Sí, cocino en casa.", "Sí, cocina en casa.", "Sí, cocinamos en casa.", "Sí, cocinas en casa."],
            0,
            "Usted is one person, you, so you answer about yourself with yo: cocino. Cocina repeats the usted form (it would mean he or she cooks), cocinamos answers for a group, and cocinas is the tú form."
          ),
        ]
      ),
      sec(
        "A conversation at the gym",
        "Read the full exchange, then answer questions about it. Watch how each answer flips the question's ending.",
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
            "\"Nunca entrenamos juntos\" means we never train together, so the answer is no, never. The dialogue does say it, so it's not \"always\" or \"only on weekends\"."
          ),
          mc(
            "Later someone asks the girlfriend: \"¿Nadas todos los días?\" What does she answer?",
            ["Sí, nado todos los días.", "Sí, nada todos los días.", "Sí, nadas todos los días.", "Sí, nadamos todos los días."],
            0,
            "The question is tú (nadas), so she answers about herself with yo: nado. Nada was right when he talked about her (mi novia nada), but now she is speaking."
          ),
        ]
      ),
    ],
    [
      fb("Answer the question.", "—¿Ustedes miran películas en español? —Sí, ___ muchas.", "miramos", "Ustedes question → nosotros answer: miramos."),
      fb("Answer the question with tocar.", "—¿Tu hermana canta? —No, pero ___ el piano muy bien.", "toca", "Tu hermana = ella → toca. (Tocar = to play an instrument.)"),
      mc(
        "Which question would get the answer \"No, no fumo\"?",
        ["¿Fumas?", "¿Fuman ustedes?", "¿Fuma él?", "¿Fumamos?"],
        0,
        "The answer \"no fumo\" is in the yo form, so the question was asked to tú: ¿Fumas? \"¿Fuman ustedes?\" would get fumamos, \"¿Fuma él?\" would get fuma, and \"¿Fumamos?\" is about us."
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
      toEs("Do you (informal) play the guitar?", "¿Tocas la guitarra?", "Tú → -as: tocas. \"To play\" an instrument is tocar, not jugar.", ["¿Tú tocas la guitarra?"]),
      toEn("No, no escuchamos la radio.", "No, we don't listen to the radio.", "Escuchamos (-amos) is \"we\". No before the verb makes it negative. Escuchar = to listen to (no extra preposition needed).", ["No, we do not listen to the radio."]),
      wo("¿Tus padres trabajan en el hospital?", "Tus padres = ellos → trabajan. In a yes/no question, the word order can stay the same as a statement — the question marks do the work.", "Do your parents work at the hospital?"),
      fb("Answer the question.", "—¿Bailas salsa? —Sí, ___ salsa los sábados.", "bailo", "Asked with tú (bailas) → answer with yo (bailo)."),
      fb("Answer the question.", "—¿Ustedes cocinan en casa? —Sí, ___ todos los días.", "cocinamos", "Asked with ustedes → answer with nosotros: cocinamos, not cocinan."),
      fb("Answer the question.", "—¿Usted trabaja aquí? —No, ___ en el hospital.", "trabajo", "Usted is still one person, 'you', so you answer with yo: trabajo."),
      mc("Which question gets the answer 'Sí, estudiamos mucho'?", ["¿Estudian ustedes mucho?", "¿Estudias mucho?", "¿Estudia usted mucho?", "¿Estudian ellos mucho?"], 0, "Estudiamos is nosotros, so the question was asked to 'you all': ustedes → nosotros. A tú or usted question gets a yo answer (estudio), and a question about ellos gets estudian."),
      toEs("¿Hablas francés?", "Sí, hablo francés.", "The mirror rule: a tú question (hablas) gets a yo answer (hablo).", ["Sí, yo hablo francés."], "Turn it into a yes answer."),
      toEs("¿Ustedes trabajan los sábados?", "No, no trabajamos los sábados.", "A question to ustedes is answered by the group: nosotros, -amos. For a no answer, put no right before the verb: no trabajamos.", ["No, nosotros no trabajamos los sábados.", "No, nosotras no trabajamos los sábados."], "Turn it into a no answer."),
      toEs("¿Bailas salsa?", "¿Bailan salsa?", "Ustedes takes the ellos ending -an: bailas becomes bailan. Ustedes can be added before or after the verb.", ["¿Ustedes bailan salsa?", "¿Bailan ustedes salsa?"], "Change the question to ustedes."),
      toEs("—¿Trabajas aquí? —Sí, trabajas aquí.", "—¿Trabajas aquí? —Sí, trabajo aquí.", "The answer is about the speaker, so it needs yo: trabajo. Repeating trabajas would mean \"Yes, you work here\".", ["¿Trabajas aquí? Sí, trabajo aquí."], "Correct the answer."),
      toEs("—¿Ustedes estudian juntos? —Sí, estudian juntos.", "—¿Ustedes estudian juntos? —Sí, estudiamos juntos.", "Ustedes is answered with nosotros: estudiamos. Estudian would mean \"they study together\".", ["¿Ustedes estudian juntos? Sí, estudiamos juntos."], "Correct the answer."),
      toEs("—¿Usted viaja mucho? —No, no viaja mucho.", "—¿Usted viaja mucho? —No, no viajo mucho.", "Usted is one person, you, so the answer is yo: viajo. Viaja would be talking about someone else.", ["¿Usted viaja mucho? No, no viajo mucho."], "Correct the answer."),
      toEs("Do you (informal) study or work? I study.", "¿Estudias o trabajas? Estudio.", "Tú forms in the question (-as), yo form in the answer (-o).", ["¿Tú estudias o trabajas? Estudio.", "¿Estudias o trabajas? Yo estudio."]),
      toEs("Does your girlfriend swim? Yes, she swims every day.", "¿Tu novia nada? Sí, nada todos los días.", "A question about someone else keeps the same person in the answer: nada (ella) both times.", ["¿Nada tu novia? Sí, nada todos los días.", "¿Su novia nada? Sí, nada todos los días.", "¿Nada su novia? Sí, nada todos los días."]),
      wo("¿Ustedes entrenan juntos los domingos?", "Ustedes takes the ellos ending: entrenan. Time phrases often go at the end.", "Do you all train together on Sundays?"),
      toEs("Do you (informal) sing? No, but I play the guitar.", "¿Cantas? No, pero toco la guitarra.", "Cantas (tú) in the question; toco (yo) in the answer. 'Play' an instrument is tocar."),
      toEs("Do you all (Latin America) travel a lot? No, we never travel.", "¿Ustedes viajan mucho? No, nunca viajamos.", "Ustedes question → nosotros answer: viajamos. Nunca can go before the verb (nunca viajamos) or after it with no (no viajamos nunca).", ["¿Viajan ustedes mucho? No, nunca viajamos.", "¿Ustedes viajan mucho? No, no viajamos nunca.", "¿Viajan ustedes mucho? No, no viajamos nunca."]),
      { type: "speak", prompt: "Answer aloud in Spanish, about yourself: ¿Trabajas o estudias? (Say that you work in a shop.)", text: "Trabajo en una tienda.", explanation: "A tú question gets a yo answer: trabajo, with the -o ending." },
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
        [
          "Remember the rule: -er and -ir verbs share four endings: -o, -es, -e, -en.",
          "So comer and vivir look identical in four of six forms: como/vivo, comes/vives, come/vive, comen/viven. For these forms you don't even need to know which group a verb belongs to.",
        ],
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
        [
          "Only nosotros and vosotros reveal the infinitive: -ER → -emos / -éis; -IR → -imos / -ís.",
          "Why there? These are the two forms where the stress falls on the ending, and the stressed vowel is the infinitive's own vowel: com-E-mos, viv-I-mos. So before you write nosotros or vosotros, look back at the infinitive.",
        ],
        [
          ["comemos · coméis", "we eat · you all eat"],
          ["vivimos · vivís", "we live · you all live"],
        ],
        [
          mc(
            "A new -ir verb: partir (to cut, to split). \"Nosotros ___ la tarta.\"",
            ["partimos", "partemos", "parten", "partís"],
            0,
            "Partir ends in -ir, so nosotros takes -imos: partimos. \"Partemos\" uses the -er ending, \"parten\" is ellos, and \"partís\" is vosotros."
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
        "Leer is an -er verb, so vosotros takes -éis: leéis. \"Leís\" uses the -ir ending, \"leen\" is ellos, and \"leemos\" is nosotros."
      ),
      ms(
        "Which forms are correct?",
        ["decidimos", "correimos", "corremos", "escribemos"],
        [0, 2],
        "Decidir (-IR) → decidimos. Correr (-ER) → corremos. Correimos and escribemos mix up the endings."
      ),
      toEs("We open the windows.", "Abrimos las ventanas.", "Abrir is an -ir verb, so nosotros takes -imos: abrimos.", ["Nosotros abrimos las ventanas."]),
      wo("Mis primos y yo comemos en casa de la abuela.", "A compound subject that includes yo takes the nosotros form, and comer is -er: comemos.", "My cousins and I eat at Grandma's house."),
      fb("Complete with escribir.", "Nosotros ___ cartas.", "escribimos", "Escribir is -ir: -imos. Escribemos is the classic slip."),
      fb("Complete with correr.", "Nosotros ___ mucho.", "corremos", "Correr is -er: -emos."),
      fb("Complete with vivir.", "Vosotros ___ en Sevilla.", "vivís", "-ir verbs: vosotros → -ís."),
      fb("Complete with beber.", "Vosotros ___ café.", "bebéis", "-er verbs: vosotros → -éis."),
      fb("Complete with compartir.", "Nosotros ___ la cena.", "compartimos", "Compartir is -ir: compartimos."),
      mc("Nosotros ___ mucho. (discutir)", ["discutemos", "discutimos", "discutís", "discuten"], 1, "Discutir is -ir, so nosotros takes -imos: discutimos. -emos is only for -er verbs; discutís is vosotros and discuten is ellos."),
      mc("Which pair is correct?", ["comemos / vivimos", "comimos / vivemos", "comemos / vivemos", "comimos / vivimos"], 0, "Comer → -emos, vivir → -imos. The infinitive's vowel shows in the nosotros form."),
      toEs("Vendo libros.", "Vendemos libros.", "Vender is -er, so nosotros takes -emos: vendemos.", ["Nosotros vendemos libros.", "Nosotras vendemos libros."], "Change to nosotros."),
      toEs("Nosotros dividemos el pan.", "Nosotros dividimos el pan.", "Dividir is -ir, so nosotros takes -imos: dividimos. -emos would only be right for an -er verb.", ["Dividimos el pan.", "Nosotras dividimos el pan."], "Correct the sentence."),
      toEs("Leemos mucho.", "Leéis mucho.", "Leer is -er, so vosotros takes -éis: leéis (both e's stay).", ["Vosotros leéis mucho.", "Vosotras leéis mucho."], "Change to vosotros."),
      toEs("Vosotros escribéis bien.", "Vosotros escribís bien.", "Escribir is -ir, so vosotros takes -ís: escribís. -éis belongs to -er verbs (coméis).", ["Escribís bien.", "Vosotras escribís bien."], "Correct the sentence."),
      toEs("Ellos comprenden la lección.", "Comprendemos la lección.", "Comprender is -er, so nosotros takes -emos: comprendemos. Ellos (-en) looked the same as an -ir verb; nosotros is where the group shows.", ["Nosotros comprendemos la lección.", "Nosotras comprendemos la lección."], "Change to nosotros."),
      toEs("Vosotros bebís mucha agua.", "Vosotros bebéis mucha agua.", "Beber is -er, so vosotros takes -éis: bebéis. -ís is the -ir ending (vivís).", ["Bebéis mucha agua.", "Vosotras bebéis mucha agua."], "Correct the sentence."),
      wo("Nosotros comemos y vosotros escribís", "Comemos (-er, -emos) vs. escribís (-ir, -ís).", "We eat and you all (Spain) write"),
      toEs("We learn Spanish and write emails.", "Aprendemos español y escribimos correos.", "Aprender → aprendemos (-er), escribir → escribimos (-ir): same person, different endings.", ["Nosotros aprendemos español y escribimos correos.", "Nosotras aprendemos español y escribimos correos."]),
      { type: "speak", prompt: "Say it in Spanish: We live in the center and we eat late.", text: "Vivimos en el centro y comemos tarde.", explanation: "Same person, two groups: vivir (-ir) → vivimos, comer (-er) → comemos." },
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
        [
          "Remember the rule: in Spanish the words of a sentence have to agree. The verb ending must match its subject, and an adjective must match its noun in gender and number.",
          "Almost every beginner mistake breaks one of those links: (1) using the infinitive instead of conjugating, (2) giving an -IR verb an -ER ending in nosotros or vosotros, (3) forgetting that the adjective has to agree. When you proofread, check each link.",
        ],
        [
          ["✗ Yo hablar español. → ✓ Yo hablo español.", "I speak Spanish. (conjugate for yo)"],
          ["✗ Vivemos en Lima. → ✓ Vivimos en Lima.", "We live in Lima. (vivir is -ir: -imos)"],
          ["✗ Las flores son rojo. → ✓ Las flores son rojas.", "The flowers are red. (feminine plural)"],
        ],
        [
          mc(
            "Which slip is in \"Mi madre trabajar en un banco\"?",
            ["The verb isn't conjugated.", "The adjective doesn't agree.", "Wrong article.", "Wrong -ER/-IR ending."],
            0,
            "Trabajar must be conjugated for mi madre (ella): trabaja. There's no adjective in the sentence, the article is fine, and trabajar is an -ar verb, not -er/-ir."
          ),
          toEs("Nosotros escribemos correos.", "Nosotros escribimos correos.", "Slip 2: escribir is an -ir verb, so nosotros takes -imos: escribimos.", ["Escribimos correos.", "Nosotras escribimos correos."], "Correct the sentence."),
        ]
      ),
      sec(
        "Proofread the note",
        "A classmate wrote this note. Read each line carefully: find the subject, then check that the verb and any adjective match it.",
        [
          ["Hola, me llamo Tomás.", "Hi, my name is Tomás."],
          ["Yo estudia en la universidad.", "(contains an error)"],
          ["Mis clases son muy interesantes.", "My classes are very interesting."],
          ["Mis compañeras son simpáticos.", "(check this line too)"],
        ],
        [
          fb("Fix the error in line 2.", "Yo ___ en la universidad.", "estudio", "Yo → -o: estudio. Estudia is the él/ella form."),
          fb("Fix the error in line 4.", "Mis compañeras son ___.", "simpáticas", "Compañeras is feminine plural, so the adjective must be too: simpáticas."),
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
        "Ellos is plural, so correr takes -en: corren. The other three are correct."
      ),
      mc(
        "Which is correct?",
        ["Las chicas son inteligentes.", "Las chicas son inteligentas.", "Las chicas es inteligentes.", "La chicas son inteligente."],
        0,
        "Inteligente ends in -e, so it only changes for number: inteligentes. \"Inteligentas\" doesn't exist, \"es\" is singular, and \"La chicas\" and \"inteligente\" miss the plural."
      ),
      toEs("My brothers read a lot.", "Mis hermanos leen mucho.", "Mis hermanos = ellos → leen.", []),
      toEn("La comida no es buena.", "The food isn't good.", "No goes before the verb. Buena agrees with comida (feminine).", ["The food is not good."]),
      wo("Nosotros vivimos en una casa pequeña.", "-IR verb with nosotros → vivimos. Adjective after the noun, agreeing with it.", "We live in a small house."),
      toEs("Ella trabajar en una tienda.", "Ella trabaja en una tienda.", "Slip 1: the infinitive must be conjugated. Ella takes -a: trabaja.", [], "Correct the sentence."),
      toEs("Nosotros decidemos mañana.", "Nosotros decidimos mañana.", "Slip 2: decidir is -ir, so nosotros takes -imos, not -emos.", ["Decidimos mañana.", "Nosotras decidimos mañana.", "Mañana decidimos."], "Correct the sentence."),
      toEs("Las mesas son blanco.", "Las mesas son blancas.", "Slip 3: the adjective agrees with las mesas, which is feminine plural: blancas.", [], "Correct the sentence."),
      toEs("Tú corre muy rápido.", "Tú corres muy rápido.", "Tú needs -es: corres. Corre is the él/ella form.", ["Corres muy rápido."], "Correct the sentence."),
      toEs("Ellos vive en Bogotá.", "Ellos viven en Bogotá.", "Ellos is plural, so the verb needs -en: viven.", ["Viven en Bogotá."], "Correct the sentence."),
      toEs("Yo escuchar música.", "Yo escucho música.", "Slip 1: conjugate the verb. Yo → -o: escucho.", ["Escucho música."], "Correct the sentence."),
      mc("Which slip is in 'Las chicas son simpáticos'?", ["The adjective doesn't agree.", "The verb isn't conjugated.", "Wrong -ER/-IR ending.", "Wrong article."], 0, "Chicas is feminine, so the adjective must be simpáticas. The verb son is conjugated and the article las is right."),
      mc("Find the correct version of 'Vosotros vivéis aquí.'", ["Vosotros vivís aquí.", "Vosotros viven aquí.", "Vosotros vivimos aquí.", "Vosotros vivéis aquí."], 0, "Vivir is -ir, so vosotros → vivís; -éis is for -er verbs. Viven and vivimos belong to other subjects."),
      toEs("Recibo muchas cartas.", "Recibimos muchas cartas.", "Recibir is -ir, so nosotros takes -imos: recibimos. Muchas still agrees with cartas.", ["Nosotros recibimos muchas cartas.", "Nosotras recibimos muchas cartas."], "Change to nosotros."),
      toEs("La flor roja es bonita.", "Las flores rojas son bonitas.", "Every link goes plural: las, flores, rojas, son, bonitas. Flor ends in a consonant, so it adds -es.", [], "Make it plural."),
      toEs("My mother works at a hospital.", "Mi madre trabaja en un hospital.", "Conjugate trabajar: mi madre → trabaja, not trabajar.", ["Mi madre trabaja en el hospital."]),
      toEs("Mis amigos son muy amables.", "Mis amigas son muy amables.", "Only the noun changes: amigos → amigas. Amable ends in -e, so it has no feminine form; never \"amablas\".", [], "Make it feminine."),
      wo("Mis amigas comen en un restaurante caro", "Comer → comen (ellas); caro agrees with restaurante, not with amigas.", "My friends (f.) eat at an expensive restaurant"),
      toEs("You (informal) speak Spanish and write English.", "Hablas español y escribes inglés.", "Hablar → hablas, escribir → escribes: both conjugated for tú.", ["Tú hablas español y escribes inglés."]),
      { type: "speak", prompt: "Say the corrected sentence aloud: \"Mis hermanas vive en una ciudad pequeño.\"", text: "Mis hermanas viven en una ciudad pequeña.", explanation: "Two links were broken: mis hermanas needs viven (-en), and ciudad is feminine, so pequeña." },
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
        [
          "Remember the rules so far: ser gives identity and origin (soy, eres, es, somos, sois, son). Every noun has a gender: most -o nouns are masculine, most -a nouns and every -dad noun are feminine, with a few exceptions like el mapa and el problema. Adjectives and articles copy the noun's gender and number.",
          "No hints in the exercises. Each checkpoint tests a different lesson. If one feels shaky, that's the lesson to revisit.",
        ],
        [
          ["Hola, soy Ana y vivo en Quito.", "Hi, I'm Ana and I live in Quito."],
          ["Mis amigos son simpáticos y estudian mucho.", "My friends are nice and study a lot."],
        ],
        [
          fb("Complete with the correct form of ser.", "Tú ___ muy simpático.", "eres", "Tú → eres. Ser is irregular, so its forms have to be learned."),
          mc("Which article goes with \"ciudad\"?", ["la", "el", "los", "un"], 0, "Nouns ending in -dad are feminine and singular here: la ciudad. \"El\" and \"un\" are masculine, and \"los\" is plural."),
        ]
      ),
      sec(
        "Three verb families at once",
        "Hablar, comer, vivir: same subject, three different endings. The stem stays, the ending shows who: -ar verbs keep a (hablas), -er and -ir verbs use e (comes, vives), and only nosotros and vosotros separate -er from -ir (comemos, vivimos).",
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
        "Buenas noches works as a greeting and a goodbye in the evening or at night. Mornings take buenos días, it isn't a thank-you, and it's fine with anyone, not only close friends."
      ),
      fb("Complete with the adjective (español).", "Las profesoras son ___.", "españolas", "Nationality → feminine plural: españolas."),
      fb("Complete with the verb (comprender).", "Yo no ___ la pregunta.", "comprendo", "-ER verb, yo → -o."),
      ms(
        "Which sentences are correct?",
        ["Ellos viven en Chile.", "El problema es fácil.", "Tú hablas muy rápido.", "Nosotros bebemos agua."],
        [0, 1, 2, 3],
        "All four are correct: an -IR verb (ellos viven), ser with a masculine -a noun (el problema es), an -AR verb (tú hablas) and an -ER verb (nosotros bebemos)."
      ),
      toEs("The house is big and white.", "La casa es grande y blanca.", "Grande doesn't change for gender; blanco → blanca.", []),
      toEs("They write emails.", "Escriben correos.", "Ellos/ellas take -en for -ir verbs: escriben. The subject can be dropped.", ["Ellos escriben correos.", "Ellas escriben correos.", "Escriben correos electrónicos.", "Ellos escriben correos electrónicos."]),
      wo("¿Ustedes aprenden español en la universidad?", "Ustedes takes the ellos ending: aprenden. Subject, verb, object, place — then the question marks.", "Do you all learn Spanish at the university?"),
      toEn("Mucho gusto, soy el profesor.", "Nice to meet you, I'm the teacher.", "Mucho gusto = nice to meet you. Soy (ser) gives identity.", ["Pleased to meet you, I'm the teacher.", "Nice to meet you, I am the teacher."]),
      fb("Complete with el or la.", "___ mapa es grande.", "El", "Mapa is masculine despite the -a: el mapa, like el problema and el día."),
      fb("Complete with amarillo.", "Las flores son ___.", "amarillas", "Amarillo → amarillas to match las flores (feminine plural)."),
      fb("Complete with vivir.", "Nosotros ___ en Quito.", "vivimos", "Vivir is -ir: vivimos."),
      fb("Complete with ser.", "Usted ___ el doctor, ¿verdad?", "es", "Usted takes the él/ella form of ser: es."),
      mc("Which subject goes with 'abrimos'?", ["yo", "tú", "nosotros", "ellos"], 2, "-imos is the nosotros ending of -ir verbs. Yo would be abro, tú abres and ellos abren."),
      toEs("La ciudad es grande.", "Las ciudades son grandes.", "Everything goes plural: la → las, ciudad → ciudades (consonant + -es), es → son, grande → grandes.", [], "Make it plural."),
      toEs("Leen y escriben en español.", "Leemos y escribimos en español.", "Leer is -er (leemos), escribir is -ir (escribimos): nosotros is where the two groups split.", ["Nosotros leemos y escribimos en español.", "Nosotras leemos y escribimos en español."], "Change to nosotros."),
      toEs("Do you (informal) live in a big house?", "¿Vives en una casa grande?", "Vivir: tú → vives; grande after the noun.", ["¿Tú vives en una casa grande?"]),
      toEs("La problema es fácil.", "El problema es fácil.", "Problema ends in -a but is masculine: el problema. Fácil has one form for both genders.", [], "Correct the sentence."),
      toEs("Tú es muy inteligente.", "Tú eres muy inteligente.", "Ser with tú is eres. Es is the form for él, ella and usted.", ["Eres muy inteligente."], "Correct the sentence."),
      toEs("Ellas son colombianos.", "Ellas son colombianas.", "Ellas is feminine plural, so the nationality must be too: colombianas.", ["Son colombianas."], "Correct the sentence."),
      wo("Las chicas francesas hablan español", "Francés → francesas (feminine plural); hablar → hablan.", "The French girls speak Spanish"),
      toEs("Hi, I'm Ana; I'm Colombian and I write books.", "Hola, soy Ana; soy colombiana y escribo libros.", "Soy for name and nationality (colombiana for a woman); escribir → escribo for yo.", ["Hola, me llamo Ana; soy colombiana y escribo libros."]),
      toEs("The problem is difficult, but we learn a lot.", "El problema es difícil, pero aprendemos mucho.", "El problema (masculine), aprender → aprendemos.", ["El problema es difícil, pero nosotros aprendemos mucho."]),
      toEs("Nice to meet you. I'm Carlos, I'm from Peru, and I work in an office.", "Mucho gusto. Soy Carlos, soy de Perú y trabajo en una oficina.", "Ser for name and origin, trabajar → trabajo.", ["Mucho gusto. Me llamo Carlos, soy de Perú y trabajo en una oficina."]),
      { type: "speak", prompt: "Introduce a friend aloud in Spanish: My friend Lucía is Mexican, she lives in Lima and she studies medicine.", text: "Mi amiga Lucía es mexicana, vive en Lima y estudia medicina.", explanation: "Ser for identity and nationality (es mexicana, feminine), vivir → vive (-ir), estudiar → estudia (-ar): all ella forms." },
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
        [
          "Remember the rule: ser for who people are and what they're like (identity, job, origin, personality); estar for how they feel and where they are.",
          "You're sending a holiday photo to a friend, and one description needs both verbs. Your friend will ask questions about it, so listen for which verb the question uses: ¿Cómo es? (what is she like?) wants ser, ¿Cómo está? and ¿Dónde está? want estar.",
        ],
        [
          ["Esta es mi prima Clara. Es muy divertida.", "This is my cousin Clara. She's really fun. (who she is, what she's like: ser)"],
          ["En la foto, está un poco cansada.", "In the photo, she's a little tired. (how she is then: estar)"],
          ["Estamos en la playa de Cancún.", "We're at the beach in Cancún. (where: estar)"],
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
            "Being tired is a state she's in → estar. Being fun is part of her personality → ser. Both adjectives are feminine, and both verbs are used for people and things alike."
          ),
          mc(
            "Your friend points at the photo: \"¿Quién es el chico alto?\" What do you answer?",
            ["Es mi hermano Pablo.", "Está mi hermano Pablo.", "Son mi hermano Pablo.", "Estoy con Pablo."],
            0,
            "Saying who someone is takes ser: es mi hermano. \"Está\" would be for how or where he is, \"son\" is plural, and \"estoy con Pablo\" doesn't say who the boy is."
          ),
        ]
      ),
      sec(
        "Adding the details",
        [
          "Where a person, place or thing is takes estar, even for things that never move, like cities and buildings. Origin and material take ser.",
          "One exception: an event (a party, a wedding, a meeting) uses ser for where it takes place: La fiesta es en mi casa.",
        ],
        [
          ["El hotel está cerca del mar.", "The hotel is near the sea. (a building's location: estar)"],
          ["Mi sombrero es de Panamá.", "My hat is from Panama. (origin: ser)"],
        ],
        [
          fb("Complete the caption.", "Cancún ___ en México.", "está", "Location → estar, even for a city that will always be there."),
          toEs(
            "La boda está en un hotel.",
            "La boda es en un hotel.",
            "A wedding is an event, and events take ser for where they happen: la boda es en un hotel. The hotel itself would take estar: el hotel está en el centro.",
            [],
            "Correct the sentence."
          ),
        ]
      ),
    ],
    [
      fb("Complete the caption.", "Mi prima ___ estudiante de medicina.", "es", "A profession or role says who someone is, so ser: mi prima es estudiante."),
      fb("Complete the caption.", "Nosotros ___ muy contentos en la foto.", "estamos", "A feeling at the moment of the photo → estar: nosotros → estamos."),
      { ...fb("Complete the caption.", "La comida del hotel ___ fantástica.", "es", "A general quality of the hotel food → ser. (If you meant \"tastes fantastic right now,\" you could say está.)"), altAnswers: ["está"] },
      ms(
        "Which captions use the right verb?",
        ["El agua está fría hoy.", "Mis padres son en la playa.", "Clara es de Guadalajara.", "Yo estoy alto."],
        [0, 2],
        "The water's temperature today is a state (está fría), and origin takes ser (es de Guadalajara). Where your parents are needs estar (están en la playa), and height is a trait, so soy alto."
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
      mc(
        "Your friend asks: \"¿Dónde está el hotel?\" Which reply answers the question?",
        ["Está cerca de la playa.", "Es cerca de la playa.", "Es muy grande.", "Estoy en el hotel."],
        0,
        "¿Dónde está…? asks for a location, and location takes estar: está cerca de la playa. \"Es cerca\" uses ser for a place, \"es muy grande\" answers a different question (what is it like?), and \"estoy en el hotel\" is about you, not the hotel."
      ),
      mc(
        "Your friend asks: \"¿Cómo es tu hermano?\" Which reply fits?",
        ["Es alto y muy simpático.", "Está en la playa.", "Está bien, gracias.", "Es en la foto."],
        0,
        "¿Cómo es? (with ser) asks what someone is like, so answer with traits: es alto y muy simpático. \"Está en la playa\" answers ¿dónde está?, \"está bien\" answers ¿cómo está?, and \"es en la foto\" uses ser for a location."
      ),
      mc(
        "Your friend asks: \"¿Y tu madre? ¿Cómo está en la foto?\" Which reply fits?",
        ["Está un poco cansada.", "Es un poco cansada.", "Es profesora.", "Está de Lima."],
        0,
        "¿Cómo está? (with estar) asks how someone is at that moment, so answer with a state: está un poco cansada. \"Es cansada\" uses ser for a temporary state, \"es profesora\" says her job, and origin needs ser: es de Lima."
      ),
      toEs(
        "Mi hermano está en el agua.",
        "Mis primos están en el agua.",
        "Location keeps estar; the plural subject mis primos takes están.",
        [],
        "Change to mis primos."
      ),
      toEs(
        "Mi padre es muy simpático.",
        "Mis padres son muy simpáticos.",
        "Personality keeps ser: son. The adjective goes plural with the subject: simpáticos.",
        [],
        "Change to mis padres."
      ),
      toEs(
        "Hoy estoy un poco cansado.",
        "Hoy estamos un poco cansados.",
        "A state keeps estar; nosotros → estamos, and cansado becomes cansados.",
        ["Hoy estamos un poco cansadas.", "Hoy nosotros estamos un poco cansados.", "Estamos un poco cansados hoy."],
        "Change to nosotros."
      ),
      toEs(
        "El restaurante es en el centro.",
        "El restaurante está en el centro.",
        "A place's location takes estar: está en el centro. Only events take ser for where they happen.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "La reunión está en el hotel.",
        "La reunión es en el hotel.",
        "A meeting is an event, so where it takes place uses ser: es en el hotel.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Mis hermanas son en el hotel y están aburridas.",
        "Mis hermanas están en el hotel y están aburridas.",
        "Where people are takes estar, so son must be están. Aburridas (bored) with estar is already right.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Mi papá está alto y en la foto es contento.",
        "Mi papá es alto y en la foto está contento.",
        "The two verbs are swapped: height is a trait (es alto) and the mood in the photo is a state (está contento).",
        ["Mi papá es alto y en la foto está feliz.", "Mi padre es alto y en la foto está contento.", "Mi padre es alto y en la foto está feliz."],
        "Correct the sentence."
      ),
      toEs("This is my brother Pablo. He's very kind.", "Este es mi hermano Pablo. Es muy amable.", "Identity (este es…) and personality (es amable) → ser.", ["Este es mi hermano Pablo. Él es muy amable."]),
      toEs("The museum is in the city center.", "El museo está en el centro de la ciudad.", "Location, even of buildings that never move → estar.", ["El museo está en el centro."]),
      toEs("The sea is blue and very pretty.", "El mar es azul y muy bonito.", "What the sea is like → ser."),
      toEs(
        "We are in Cancún; the hotel is big and the food is tasty.",
        "Estamos en Cancún; el hotel es grande y la comida está rica.",
        "Location → estar; size → ser; taste right now → estar rica.",
        ["Estamos en Cancún, el hotel es grande y la comida está rica.", "Estamos en Cancún; el hotel es grande y la comida está deliciosa."]
      ),
      toEs("We are at the beach and we are happy.", "Estamos en la playa y estamos contentos.", "Both location and a current feeling → estar.", ["Estamos en la playa y estamos felices.", "Nosotros estamos en la playa y estamos contentos.", "Estamos en la playa y estamos contentas."]),
      wo("La playa es bonita pero hoy está sucia.", "Ser for the beach's general beauty; estar for how it is today.", "The beach is pretty, but today it's dirty."),
      wo("Mi hermano es muy tranquilo pero hoy está nervioso", "Ser for personality, estar for today's mood.", "My brother is very calm but today he's nervous"),
      {
        type: "speak",
        prompt: "Your friend asks: ¿Quiénes son? Answer aloud: they're your parents, they're from Lima, and in the photo they're at the hotel.",
        text: "Son mis padres. Son de Lima y en la foto están en el hotel.",
        explanation: "Who they are and where they're from take ser (son mis padres, son de Lima); where they are takes estar (están en el hotel).",
      },
    ]
  ),
  L(
    "ser-vs-estar-mastery-check",
    "a1r-error-hunt-ser-estar",
    "Error Hunt: Ser or Estar?",
    "Learner sentences, some right, some wrong. Diagnose each one before you fix it.",
    "8 min",
    [
      sec(
        "The two most common mistakes",
        [
          "Remember the rule: ser says what something is, estar says how or where it is right now.",
          "Learners most often (1) use ser for location and (2) use estar for jobs. The fix comes from the rule: where a person, thing or place is answers \"where?\", so estar. A job answers \"what is she?\", so ser. Before you fix a sentence, find the verb and ask which question it answers.",
        ],
        [
          ["✗ El baño es a la derecha. → ✓ El baño está a la derecha.", "The bathroom is on the right. (where? → estar)"],
          ["✗ Mi tía está doctora. → ✓ Mi tía es doctora.", "My aunt is a doctor. (what is she? → ser)"],
        ],
        [
          mc(
            "\"¿Dónde es el museo?\" — what's the fix?",
            ["¿Dónde está el museo?", "¿Dónde son el museo?", "¿Dónde estás el museo?", "No fix needed."],
            0,
            "Asking where something is located takes estar: ¿Dónde está el museo? \"Son\" is plural ser, \"estás\" is the tú form, and it does need fixing because es (ser) isn't used for a building's location."
          ),
          toEs(
            "Mis primos son en Madrid ahora.",
            "Mis primos están en Madrid ahora.",
            "Where people are takes estar, and mis primos is plural: están. Ahora is a clue that it's about the present situation.",
            ["Ahora mis primos están en Madrid."],
            "Correct the sentence."
          ),
        ]
      ),
      sec(
        "Trick cases",
        [
          "Events are the exception to location: where a party, a class or a concert takes place uses ser, because you're saying where the event happens, not where an object stands.",
          "And muerto (dead) takes estar even though it's permanent: Spanish treats it as the state something ends up in.",
        ],
        [
          ["La fiesta es en mi casa.", "The party is (takes place) at my house."],
          ["La planta está muerta.", "The plant is dead."],
        ],
        [
          mc(
            "Which sentence is correct?",
            ["El concierto es en el parque.", "El concierto está en el parque.", "El concierto son en el parque.", "El concierto estás en el parque."],
            0,
            "When an event takes place somewhere, Spanish uses ser: El concierto es en el parque. \"Está\" is for where people and things are, not events, and \"son\" and \"estás\" don't match el concierto."
          ),
          fb(
            "Fix the verb.",
            "Mis plantas ___ muertas. (learner wrote: son)",
            "están",
            "Muerto always takes estar, and mis plantas is plural: están muertas.",
            "muerto → estar"
          ),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Mis llaves ___ en la mesa. (learner wrote: son)", "están", "Where objects are located takes estar, and llaves is plural: están, not son."),
      fb("Fix the verb.", "Mi padre ___ ingeniero. (learner wrote: está)", "es", "A profession takes ser: es ingeniero, not está."),
      fb("Fix the verb.", "Hoy yo ___ muy nerviosa. (learner wrote: soy)", "estoy", "A feeling right now takes estar: estoy nerviosa. Soy nerviosa would mean you're a nervous person in general."),
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
        "Ser says what she's like, so ser aburrido = to be boring (a trait); estar says how she is now, so estar aburrido = to be bored (a state)."
      ),
      toEs(
        "El hotel es cerca de la playa.",
        "El hotel está cerca de la playa.",
        "Location takes estar; ser for location is the most common learner error.",
        [],
        "Correct the sentence."
      ),
      toEs("Mi hermano está profesor.", "Mi hermano es profesor.", "Professions take ser, never estar.", [], "Correct the sentence."),
      toEs(
        "Yo soy cansada hoy.",
        "Yo estoy cansada hoy.",
        "A temporary state like tiredness takes estar.",
        ["Estoy cansada hoy.", "Hoy estoy cansada.", "Hoy yo estoy cansada."],
        "Correct the sentence."
      ),
      toEs(
        "Lima es en Perú y es muy grande.",
        "Lima está en Perú y es muy grande.",
        "Only the first verb is wrong: where a city is takes estar (está en Perú). Size is a lasting trait, so es muy grande is right.",
        [],
        "Correct the sentence."
      ),
      toEs("El perro es muerto.", "El perro está muerto.", "Muerto always takes estar, even though it's permanent.", [], "Correct the sentence."),
      toEs(
        "El concierto está en la universidad.",
        "El concierto es en la universidad.",
        "A concert is an event, so where it takes place uses ser: es en la universidad.",
        [],
        "Correct the sentence."
      ),
      mc(
        "Which sentence has NO error?",
        ["Mi padre está médico.", "Mi casa es en el centro.", "La reunión es en la oficina.", "El parque es al lado del museo."],
        2,
        "A meeting is an event, so ser is right. The others need es médico (profession), está en el centro and está al lado (location of a place)."
      ),
      toEs(
        "El baño está a la derecha.",
        "Los baños están a la derecha.",
        "Location keeps estar; the plural subject los baños takes están.",
        [],
        "Make it plural."
      ),
      toEs(
        "Mi tía es abogada.",
        "Mis tías son abogadas.",
        "A job keeps ser in the plural: son. Both the noun and the job word go plural: tías, abogadas.",
        [],
        "Change to mis tías."
      ),
      toEs(
        "La universidad está lejos de aquí.",
        "¿La universidad está lejos de aquí?",
        "A yes/no question keeps the same verb: location still takes estar. Add ¿ ? (and raise your voice at the end).",
        ["¿Está la universidad lejos de aquí?", "¿Está lejos de aquí la universidad?"],
        "Turn it into a question."
      ),
      toEs(
        "La fiesta es en el parque.",
        "La fiesta no es en el parque.",
        "No goes before the verb, and ser stays: a party is an event, even when you say where it isn't.",
        [],
        "Make it negative."
      ),
      toEs("The bathroom is on the left.", "El baño está a la izquierda.", "Where something is located: estar."),
      toEs("The bank is next to the school.", "El banco está al lado de la escuela.", "Location → estar. De + el contracts to del only with el; here it's de la.", ["El banco está junto a la escuela."]),
      toEs(
        "My sisters are doctors and they are at the hospital.",
        "Mis hermanas son médicas y están en el hospital.",
        "Profession with ser, location with estar.",
        ["Mis hermanas son doctoras y están en el hospital."]
      ),
      toEs(
        "The plants are dead and the windows are open.",
        "Las plantas están muertas y las ventanas están abiertas.",
        "Muerto and abierto are states with estar; both agree in feminine plural."
      ),
      wo("La clase es en el aula número cinco.", "The class is an event → ser for where it takes place. (Aula is feminine but takes el because it starts with a stressed a: el aula.)", "The class is in classroom number five."),
      wo("La biblioteca está al lado del parque", "A building's location takes estar; ser for location is the classic error.", "The library is next to the park"),
      {
        type: "speak",
        prompt: "Say it in Spanish: The party is at Ana's house, and the house is near the beach.",
        text: "La fiesta es en la casa de Ana, y la casa está cerca de la playa.",
        explanation: "The party is an event, so ser for where it happens (es en la casa de Ana). The house is a place, so estar for where it is (está cerca de la playa).",
      },
    ]
  ),
  L(
    "ser-vs-estar-mastery-check",
    "a1r-spiral-ser-estar-present",
    "Spiral Review: Ser, Estar & Everyday Verbs",
    "Ser vs. estar meets the present tense and adjective agreement. A cumulative check of everything so far.",
    "8 min",
    [
      sec(
        "Two verbs, two jobs, one sentence",
        [
          "Remember the rules: ser says what someone is (job, origin, personality); estar says how or where they are right now; and an ordinary present-tense verb (trabaja, corro, leen) says what they do, with the ending showing who does it.",
          "Real sentences mix all three. Before you answer, name the job of every verb: describing, locating, feeling, or doing?",
        ],
        [
          ["Mi hermana es profesora y trabaja en una escuela que está en el centro.", "My sister is a teacher (ser: job) and works (doing) at a school that is downtown (estar: location)."],
          ["Estoy cansado porque corro todas las mañanas.", "I'm tired (estar: feeling) because I run (doing) every morning."],
        ],
        [
          fb("Complete with the right verb.", "Nosotros ___ en casa y comemos pizza.", "estamos", "Where people are located takes estar, and nosotros takes estamos. Comemos is the doing verb, with the nosotros ending -emos."),
          fb("Complete with correr.", "Mi perro ___ muy rápido.", "corre", "Mi perro = él, and -er verbs take -e for él: corre."),
        ]
      ),
      sec(
        "Agreement check",
        [
          "Whichever verb you use, the adjective still agrees with the subject: masculine or feminine, singular or plural. Choose the verb first (trait or state?), then check the ending.",
        ],
        [
          ["Las ventanas están abiertas.", "The windows are open. (state: estar; feminine plural)"],
          ["Los niños son simpáticos.", "The children are nice. (trait: ser; masculine plural)"],
        ],
        [
          mc(
            "\"La puerta ___ ___.\" (The door is closed.)",
            ["está cerrada", "es cerrada", "está cerrado", "es cerrado"],
            0,
            "A current condition takes estar, and puerta is feminine: está cerrada. \"Es cerrada\" uses ser, and \"cerrado\" is masculine."
          ),
          toEs(
            "Mis tías es muy simpáticas.",
            "Mis tías son muy simpáticas.",
            "Personality takes ser, and the adjective is already feminine plural, but the verb must be plural too: son.",
            ["Mis tías son muy amables."],
            "Correct the sentence."
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
        "Location takes estar (están), and ellos takes leen. \"Son en la biblioteca\" uses ser for location, \"lean\" is subjunctive, and \"leemos\" is nosotros."
      ),
      fb("Complete with ser or estar.", "¿Cómo ___ tus padres? —Bien, gracias.", "están", "The answer is about how they are doing, so the question uses estar."),
      fb("Complete with ser or estar.", "¿Cómo ___ tus padres? —Altos y muy simpáticos.", "son", "The answer describes what they're like, so the question uses ser. Same question word, different verb, different answer."),
      mt(
        "Match each sentence to its English meaning.",
        [
          ["¿Cómo es?", "What is he like?"],
          ["¿Cómo está?", "How is he doing?"],
          ["¿Dónde está?", "Where is he?"],
          ["¿De dónde es?", "Where is he from?"],
        ],
        "¿Cómo es? asks about character (ser); ¿Cómo está? about condition and ¿Dónde está? about location (estar); ¿De dónde es? about origin (ser)."
      ),
      fb("Complete with ser or estar.", "Ellas ___ en el parque y corren.", "están", "Location takes estar, and ellas takes están. Corren is the doing verb."),
      fb("Complete with trabajar.", "Mi padre es cocinero y ___ en un restaurante.", "trabaja", "Regular -ar verb, él form: trabaja."),
      fb("Complete with ser or estar.", "¿Dónde ___ tú? —En la oficina.", "estás", "A question about location takes estar, and tú takes estás."),
      mc(
        "\"The girls are tall and they're happy today.\"",
        ["Las chicas son altas y hoy están contentas.", "Las chicas están altas y hoy son contentas.", "Las chicas son altos y hoy están contentos.", "Las chicas son altas y hoy son contentas."],
        0,
        "Ser for height (a trait), estar for today's mood; both adjectives feminine plural. Option 2 swaps the verbs, option 3 uses masculine endings, and option 4 uses ser for a mood."
      ),
      toEs(
        "Mi hermano es estudiante y estudia mucho.",
        "Mis hermanos son estudiantes y estudian mucho.",
        "Everything follows the new plural subject: ser → son, estudiante → estudiantes, and estudiar takes the ellos ending: estudia → estudian.",
        [],
        "Make it plural."
      ),
      toEs(
        "Estoy en casa y leo un libro.",
        "Está en casa y lee un libro.",
        "Both verbs change to the ella form: estoy → está, leo → lee. Location still takes estar.",
        ["Ella está en casa y lee un libro."],
        "Change to ella."
      ),
      toEs(
        "La puerta está abierta.",
        "Las puertas están abiertas.",
        "Plural subject → están, and abierta agrees: abiertas.",
        [],
        "Make it plural."
      ),
      toEs(
        "Los estudiantes son de Chile y hablan español.",
        "Los estudiantes no son de Chile y no hablan español.",
        "No goes right before each verb you want to deny. Origin keeps ser.",
        ["Los estudiantes no son de Chile ni hablan español."],
        "Make both verbs negative."
      ),
      toEs(
        "Mi hermana es preocupada porque trabaja mucho.",
        "Mi hermana está preocupada porque trabaja mucho.",
        "Worried is a state, so estar: está preocupada. Trabaja (the habit) is already right.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Hoy las tiendas están abiertos.",
        "Hoy las tiendas están abiertas.",
        "The verb is right (a state), but the adjective must agree with tiendas, which is feminine plural: abiertas.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "La profesora es inteligente y escriben libros.",
        "La profesora es inteligente y escribe libros.",
        "La profesora is one person, so the doing verb needs the ella form: escribe, not escriben.",
        ["La maestra es inteligente y escribe libros."],
        "Correct the sentence."
      ),
      toEs("The soup is cold and I am sad.", "La sopa está fría y estoy triste.", "Both are current states → estar.", ["La sopa está fría y yo estoy triste."]),
      toEs("The doors are closed.", "Las puertas están cerradas.", "A state takes estar, and cerrado agrees: feminine plural cerradas."),
      toEs("The soup is hot and we eat in the kitchen.", "La sopa está caliente y comemos en la cocina.", "The soup's temperature is a state (estar); comemos is nosotros of comer."),
      toEs(
        "You (informal) are nervous because you have an exam.",
        "Estás nervioso porque tienes un examen.",
        "Nervous right now is a state: estar, tú form estás.",
        ["Estás nerviosa porque tienes un examen.", "Tú estás nervioso porque tienes un examen.", "Tú estás nerviosa porque tienes un examen."]
      ),
      toEn("Mis amigos son de Perú pero viven en Chile.", "My friends are from Peru but they live in Chile.", "Ser de = origin; vivir = to live.", ["My friends are from Peru but live in Chile.", "My friends are from Peru, but they live in Chile."]),
      wo("Hoy estamos muy ocupados porque trabajamos mucho.", "Estar for a temporary state (busy today) + a regular -ar verb.", "Today we're very busy because we work a lot."),
      wo("Mis padres son altos y están muy ocupados", "Ser for a trait, estar for a current state; both adjectives masculine plural.", "My parents are tall and they're very busy"),
      {
        type: "speak",
        prompt: "Say it in Spanish: My friend (m.) is from Mexico, he lives in Madrid, and today he's very happy.",
        text: "Mi amigo es de México, vive en Madrid y hoy está muy contento.",
        explanation: "Three jobs, three verbs: ser for origin (es de México), a present-tense verb for what he does (vive), estar for how he feels today (está contento).",
      },
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
        [
          "Remember the rule: the possessive agrees with the thing owned, not the owner (mi llave, mis llaves), and where something is takes estar.",
          "Two roommates are looking for their things. Notice how the possessive flips in each reply: the one asking says mis llaves (my keys); the one answering says tus llaves (your keys). Same keys, different point of view.",
        ],
        [
          ["—¿Dónde están mis llaves?", "Where are my keys?"],
          ["—Tus llaves están encima de la mesa.", "Your keys are on top of the table. (mis → tus)"],
          ["—¿Y mi teléfono?", "And my phone?"],
          ["—Tu teléfono está debajo del sofá.", "Your phone is under the sofa. (de + el = del)"],
        ],
        [
          mc(
            "Where is the phone?",
            ["Under the sofa", "On the table", "Next to the keys", "In the kitchen"],
            0,
            "Debajo del sofá means under the sofa, not on the table, next to the keys or in the kitchen."
          ),
          mc(
            "Your roommate asks: \"¿Dónde están mis gafas?\" They're under the bed. What do you answer?",
            ["Tus gafas están debajo de la cama.", "Mis gafas están debajo de la cama.", "Tu gafas están debajo de la cama.", "Tus gafas son debajo de la cama."],
            0,
            "Their glasses are your glasses from your side: mis → tus, plural because gafas is plural. \"Mis gafas\" would mean your own glasses, \"tu gafas\" doesn't agree, and location needs estar, not son."
          ),
        ]
      ),
      sec(
        "Our things, their things",
        [
          "Nuestro has four forms (nuestro, nuestra, nuestros, nuestras), chosen by the thing owned. Su / sus can mean his, her, its, your (usted / ustedes) or their; context tells you which.",
          "To ask whose something is, use ¿De quién es…? (one thing) or ¿De quién son…? (several), and answer with de + the owner: Es de los vecinos.",
        ],
        [
          ["—¿Es nuestra bicicleta?", "Is it our bicycle?"],
          ["—No, es su bicicleta. Es de los vecinos.", "No, it's their bicycle. It's the neighbors'."],
        ],
        [
          fb("Complete with the correct form of nuestro.", "¿Dónde están ___ libros?", "nuestros", "Libros is masculine plural → nuestros."),
          mc(
            "Your roommate asks: \"¿De quién es este perro?\" It belongs to Ana. What do you answer?",
            ["Es de Ana.", "Es Ana.", "Es a Ana.", "Está de Ana."],
            0,
            "¿De quién…? is answered with de + the owner: es de Ana. \"Es Ana\" would say the dog IS Ana, \"a Ana\" is the wrong preposition, and ownership takes ser, not estar."
          ),
        ]
      ),
    ],
    [
      fb("Complete the answer.", "—¿Es tu mochila? —Sí, es ___ mochila.", "mi", "Answering about your own thing: tu → mi."),
      fb("Complete the answer.", "—¿Son tus gafas? —Sí, son ___ gafas.", "mis", "Possessives agree with the thing owned: gafas is plural, so mis."),
      fb("Complete with de + el.", "La lámpara está al lado ___ sofá.", "del", "De + el always contracts to del."),
      fb("Complete the answer.", "—¿De quién es el libro? —Es ___ Pedro.", "de", "Ownership is de + the owner: es de Pedro. Spanish has no 's."),
      mc(
        "\"Their house is near the park.\"",
        ["Su casa está cerca del parque.", "Sus casa está cerca del parque.", "Su casa está cerca de el parque.", "Su casa es cerca del parque."],
        0,
        "One house takes su even with many owners, de + el contracts to del, and location takes estar. \"Sus casa\" is plural, \"de el\" must contract, and \"es cerca\" uses ser for location."
      ),
      mc(
        "Your roommate asks: \"¿Es tu bicicleta?\" It belongs to the neighbors. Which reply fits?",
        ["No, es de los vecinos.", "No, es los vecinos.", "No, está de los vecinos.", "No, es mi bicicleta."],
        0,
        "De + owner says whose it is: es de los vecinos (or es su bicicleta). \"Es los vecinos\" leaves out de, ownership takes ser not estar, and \"es mi bicicleta\" says the opposite."
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
      toEs(
        "Tu libro está encima de la mesa.",
        "Tus libros están encima de la mesa.",
        "Several books → tus (the possessive follows the thing) and están.",
        ["Sus libros están encima de la mesa."],
        "Make it plural."
      ),
      toEs(
        "Mi llave está en la cocina.",
        "Nuestras llaves están en la cocina.",
        "Llaves is feminine plural, so nuestras, and the verb goes plural: están.",
        [],
        "Change it to \"our keys\"."
      ),
      toEs(
        "Es la casa de los vecinos.",
        "Es su casa.",
        "Su replaces de los vecinos: one house, so su (not sus), even with several owners.",
        [],
        "Replace \"de los vecinos\" with a possessive."
      ),
      toEs(
        "Sus libros están detrás la puerta.",
        "Sus libros están detrás de la puerta.",
        "Detrás always needs de before the noun: detrás de la puerta.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Mis zapatos están debajo de el sofá.",
        "Mis zapatos están debajo del sofá.",
        "De + el always merges into del.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Nuestro gato es detrás de la puerta.",
        "Nuestro gato está detrás de la puerta.",
        "Where something is takes estar, not ser.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Mi gafas están en el baño.",
        "Mis gafas están en el baño.",
        "Gafas is plural, so the possessive must be plural too: mis.",
        ["Mis lentes están en el baño."],
        "Correct the sentence."
      ),
      toEs("Where is my phone?", "¿Dónde está mi teléfono?", "Location with estar; mi for one thing.", ["¿Dónde está mi celular?", "¿Dónde está mi móvil?"]),
      toEs("Is it your (informal) bicycle?", "¿Es tu bicicleta?", "Tu for one thing; ser to identify it.", ["¿Es tu bici?"]),
      toEs(
        "Whose glasses are these? They're Marta's glasses.",
        "¿De quién son estas gafas? Son las gafas de Marta.",
        "Spanish shows ownership with de + owner; there is no 's.",
        ["¿De quién son estas gafas? Son de Marta.", "¿De quién son estos lentes? Son los lentes de Marta.", "¿De quién son estos lentes? Son de Marta."]
      ),
      wo("¿Las llaves de Marta están en su bolso?", "Here su = her (Marta's).", "Are Marta's keys in her bag?"),
      wo("Mi mochila está al lado de tu cama", "Al lado de = next to; possessives come before the noun.", "My backpack is next to your bed"),
      {
        type: "speak",
        prompt: "Your roommate asks: ¿Dónde están tus llaves? Answer aloud: my keys are in my backpack.",
        text: "Mis llaves están en mi mochila.",
        explanation: "Tus in the question becomes mis in your answer (plural llaves), and mi mochila is singular. Location takes estar: están.",
      },
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
        [
          "Remember the rule: a possessive agrees with the thing owned, not the owner. So when the number of things changes, the possessive changes with it: one thing takes mi, tu, su; several take mis, tus, sus.",
          "In a full sentence, everything that refers to the thing follows too: the noun, the verb and any adjective.",
        ],
        [
          ["mi amigo → mis amigos", "my friend → my friends"],
          ["su coche → sus coches", "his/her/their car → his/her/their cars"],
        ],
        [
          fb("Make the object plural.", "tu primo → ___ primos", "tus", "More than one primo → tus."),
          toEs(
            "Mi amiga vive aquí.",
            "Mis amigas viven aquí.",
            "Several friends → mis amigas, and the verb follows: vive → viven.",
            [],
            "Make it plural."
          ),
        ]
      ),
      sec(
        "Change the owner",
        [
          "Now keep the thing the same and change who owns it. The owner picks the word (mi, tu, su, nuestro, vuestro); the thing still picks the ending.",
          "Only nuestro and vuestro care about gender, because they end in -o like an adjective: nuestro perro, nuestra casa, nuestros libros, nuestras llaves.",
        ],
        [
          ["mi casa → nuestra casa", "my house → our house (casa is feminine)"],
          ["mi perro → vuestro perro", "my dog → your (you all's, Spain) dog"],
        ],
        [
          fb("Change \"my\" to \"our.\"", "mi escuela → ___ escuela", "nuestra", "Unlike mi, nuestro changes for gender as well as number, agreeing with the thing owned: escuela is feminine."),
          mc(
            "Change \"mis libros\" to \"our books\".",
            ["nuestros libros", "nuestro libros", "nuestras libros", "nuestra libro"],
            0,
            "Libros is masculine plural, so nuestros. \"Nuestro\" forgets the plural, \"nuestras\" is feminine, and \"nuestra libro\" changes the thing to singular."
          ),
        ]
      ),
      sec(
        "From de + owner to su",
        [
          "El perro de Juan, el perro de Ana and el perro de mis vecinos all become su perro: su replaces de + any owner (his, her, their, your usted). It still counts the things: los perros de Juan → sus perros.",
        ],
        [
          ["el coche de mis padres → su coche", "my parents' car → their car (one car: su)"],
          ["las llaves de Ana → sus llaves", "Ana's keys → her keys (several keys: sus)"],
        ],
        [
          ms(
            "\"Su libro\" could mean…",
            ["his book", "her book", "their book", "my book"],
            [0, 1, 2],
            "Su covers his, her, its, your (usted) and their. It never means my, which is mi."
          ),
        ]
      ),
    ],
    [
      fb("Change \"my\" to \"our.\"", "mis hermanas → ___ hermanas", "nuestras", "Nuestro agrees with the thing owned in gender and number, so a feminine plural noun takes nuestras."),
      fb("Change \"your\" to \"their.\"", "tus padres → ___ padres", "sus", "Tus and sus agree with padres (plural), so sus padres."),
      fb("Make the object plural.", "nuestro profesor → ___ profesores", "nuestros", "Profesores is masculine plural, so nuestro becomes nuestros."),
      mc(
        "Transform \"Mi hija es alta\" to \"Our daughters are tall.\"",
        ["Nuestras hijas son altas.", "Nuestros hijas son altas.", "Nuestra hijas son altas.", "Nuestras hijas es altas."],
        0,
        "Every piece changes: nuestras (feminine plural), hijas, son, altas. \"Nuestros\" is masculine, \"Nuestra\" is singular, and \"es\" is singular."
      ),
      mc(
        "Change \"mi tía\" to \"our aunts\".",
        ["nuestros tías", "nuestras tías", "nuestra tías", "nuestro tías"],
        1,
        "Tías is feminine plural, so nuestras. \"Nuestros\" is masculine, and \"nuestra\" / \"nuestro\" are singular."
      ),
      toEs("Mi libro está en la mesa.", "Mis libros están en la mesa.", "More than one thing owned: mis libros, and the verb follows: están.", [], "Make it plural."),
      toEs("Su hermana vive en Quito.", "Sus hermanas viven en Quito.", "Su becomes sus when the thing owned is plural; vive → viven.", [], "Make it plural."),
      toEs("Mi familia es grande.", "Nuestra familia es grande.", "Familia is feminine singular, so nuestra.", [], "Change \"my\" to \"our\"."),
      toEs("Tu coche es rojo.", "Tus coches son rojos.", "Plural thing owned: tus coches; the verb and adjective follow: son rojos.", ["Tus carros son rojos.", "Tus autos son rojos."], "Make it plural."),
      toEs("Mi abuelo vive en el campo.", "Nuestro abuelo vive en el campo.", "Nuestro agrees with masculine abuelo.", [], "Change \"my\" to \"our\"."),
      toEs(
        "Mi abuela es muy simpática.",
        "Nuestras abuelas son muy simpáticas.",
        "Feminine plural thing owned: nuestras abuelas; son and simpáticas follow the plural.",
        ["Nuestras abuelas son muy amables."],
        "Change it to \"our grandmothers\"."
      ),
      toEs(
        "El perro de mis vecinos es pequeño.",
        "Su perro es pequeño.",
        "Su replaces de + owner. One dog, so su, even though there are several neighbors.",
        [],
        "Replace \"de mis vecinos\" with a possessive."
      ),
      toEs(
        "Los perros de Juan están en el jardín.",
        "Sus perros están en el jardín.",
        "Su replaces de Juan, and it goes plural because there are several dogs: sus perros.",
        [],
        "Replace \"de Juan\" with a possessive."
      ),
      toEs(
        "Nuestro profesoras son muy simpáticas.",
        "Nuestras profesoras son muy simpáticas.",
        "Profesoras is feminine plural, so the possessive must be nuestras.",
        ["Nuestras profesoras son muy amables."],
        "Correct the sentence."
      ),
      toEs("Mis amigos viven con su padres.", "Mis amigos viven con sus padres.", "Padres is plural, so su must be sus.", ["Mis amigas viven con sus padres."], "Correct the sentence."),
      toEs(
        "Vuestro casa está al lado de nuestra escuela.",
        "Vuestra casa está al lado de nuestra escuela.",
        "Vuestro agrees with the thing owned, and casa is feminine: vuestra.",
        ["Vuestra casa está al lado de nuestro colegio."],
        "Correct the sentence."
      ),
      toEs("Tus primo vive en Bogotá.", "Tu primo vive en Bogotá.", "One cousin (primo, vive), so the possessive is singular: tu.", [], "Correct the sentence."),
      toEs("Their dogs are in our garden.", "Sus perros están en nuestro jardín.", "Sus for several dogs; nuestro for one masculine garden.", []),
      toEs(
        "Your (informal) cousins live with our grandparents.",
        "Tus primos viven con nuestros abuelos.",
        "Tus for several cousins; nuestros for masculine plural abuelos.",
        ["Tus primas viven con nuestros abuelos."]
      ),
      wo("Vuestra abuela vive con nuestros tíos.", "Vuestra (fem. sing.) agrees with abuela; nuestros agrees with tíos.", "Your (pl., Spain) grandmother lives with our aunt and uncle."),
      wo("Nuestras hijas viven con sus abuelos", "Nuestras agrees with hijas; sus with abuelos.", "Our daughters live with their grandparents"),
      {
        type: "speak",
        prompt: "Say it in Spanish: Our house is small, but our rooms are big.",
        text: "Nuestra casa es pequeña, pero nuestras habitaciones son grandes.",
        explanation: "Same owner, two endings: nuestra for one feminine casa, nuestras for several feminine habitaciones.",
      },
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
        [
          "Remember the rules: 16-29 are one word, from 31 on it's tens + y + units, and a number ending in uno becomes un before a masculine noun (treinta y un años).",
          "You're signing up at a gym. Ages use tener, not ser. Phone numbers are usually read in pairs: 45 67 89 → cuarenta y cinco, sesenta y siete, ochenta y nueve.",
        ],
        [
          ["Tengo veintiocho años.", "I'm twenty-eight years old. (tener for age)"],
          ["Mi número es el seis, cuarenta y dos, treinta y uno, noventa.", "My number is 6 42 31 90. (read in pairs)"],
        ],
        [
          mc(
            "How do you say \"I'm 31\"?",
            ["Tengo treinta y un años.", "Soy treinta y uno años.", "Tengo treintaiuno años.", "Estoy treinta y un años."],
            0,
            "Age uses tener, and before a masculine noun (años) uno shortens to un: treinta y un años. \"Soy\" and \"Estoy\" use the wrong verb, and \"treintaiuno años\" is one word and doesn't shorten uno to un."
          ),
          fb(
            "Fill in the form: you're 24. Write the number in words.",
            "Edad: tengo ___ años.",
            "veinticuatro",
            "21-29 are one word: veinti- + cuatro = veinticuatro.",
            "one word"
          ),
        ]
      ),
      sec(
        "At the market",
        [
          "Costar (to cost) agrees with what you're buying: ¿Cuánto cuesta? asks about one item, ¿Cuánto cuestan? about several. The answer uses the same form: cuesta dos euros, cuestan tres euros.",
        ],
        [
          ["—¿Cuánto cuestan las manzanas?", "How much are the apples? (several: cuestan)"],
          ["—Cuestan cuarenta y cinco pesos el kilo.", "They're forty-five pesos a kilo."],
        ],
        [
          fb("Complete the question.", "¿Cuánto ___ el melón?", "cuesta", "One melon is singular, so costar (o → ue) becomes cuesta."),
          mc(
            "You want to know the price of the strawberries (las fresas). What do you ask?",
            ["¿Cuánto cuestan las fresas?", "¿Cuánto cuesta las fresas?", "¿Cuántos cuestan las fresas?", "¿Qué cuestan las fresas?"],
            0,
            "Fresas is plural, so cuestan. \"Cuesta\" is for one item, and the price question always uses cuánto (not cuántos or qué)."
          ),
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
        "16–29 are one word; from 31 on, numbers are written with y; exactly 100 is cien."
      ),
      fb("Write the number in words.", "La camiseta cuesta ___ euros. (72)", "setenta y dos", "70 = setenta, + y dos."),
      fb("Write the number in words.", "Mi abuelo tiene ___ años. (81)", "ochenta y un", "Before años, uno becomes un: ochenta y un años."),
      mc(
        "\"Veintiuna personas\" — why veintiuna and not veintiuno?",
        ["Personas is feminine, so the 'one' agrees.", "It's a typo.", "Numbers over 20 are always feminine.", "Because it's plural."],
        0,
        "Numbers ending in one agree with the noun, and personas is feminine: veintiuna. It isn't a typo or a rule about plurals; before a masculine noun it's veintiún libros."
      ),
      mc(
        "\"My number is 6 33 48 15.\"",
        ["Mi número es el seis, treinta y tres, cuarenta y ocho, quince.", "Mi número es el seis, treintitrés, cuarenta ocho, quince.", "Mi número está el seis, treinta y tres, cuarenta y ocho, quince.", "Mi número es el seis, tres tres, cuarenta y ocho, cinco."],
        0,
        "Numbers are read in pairs; 33 and 48 are above 30, so they use y; and ser gives the number. Option 2 squeezes 33 into one word and drops a y, option 3 uses estar, and option 4 reads digits instead of pairs."
      ),
      mc(
        "The seller says: \"Son tres euros con cincuenta.\" How much do you pay?",
        ["€3.50", "€3.15", "€13.50", "€350"],
        0,
        "Tres euros con cincuenta = 3 euros and 50 cents. Quince would be 15, trece 13, and trescientos cincuenta 350."
      ),
      mc(
        "At the gym desk: \"¿Cuántos años tiene usted?\" Which answer fits?",
        ["Tengo cuarenta años.", "Soy cuarenta años.", "Tiene cuarenta años.", "Es cuarenta."],
        0,
        "Answer about yourself with tener in the yo form: tengo. Soy and es use ser, which is never used for age, and \"tiene\" would be about someone else."
      ),
      toEs("¿Cuánto cuesta el tomate?", "¿Cuánto cuestan los tomates?", "Several items: cuestan, and the noun goes plural too.", [], "Make it plural."),
      toEs("La chaqueta cuesta sesenta euros.", "La chaqueta cuesta sesenta y cinco euros.", "Above 30, add y + the unit: sesenta y cinco.", [], "Change the price to 65."),
      toEs("Mi hermana tiene veinte años.", "Mi hermana tiene veintiún años.", "21 is one word, and before masculine años it shortens to veintiún (with an accent).", [], "Change the age to 21."),
      toEs(
        "Tengo veinticinco años.",
        "Mi madre tiene cincuenta y un años.",
        "Mi madre = ella → tiene; 51 before masculine años is cincuenta y un.",
        [],
        "Change it to mi madre, who is 51."
      ),
      toEs("¿Cuánto cuesta las naranjas?", "¿Cuánto cuestan las naranjas?", "Naranjas is plural, so costar must be plural too: cuestan.", [], "Correct the sentence."),
      toEs("Soy veintiséis años.", "Tengo veintiséis años.", "Age uses tener + años, never ser.", [], "Correct the sentence."),
      toEs("Las manzanas cuesta treinta pesos el kilo.", "Las manzanas cuestan treinta pesos el kilo.", "Plural subject (manzanas), so cuestan.", [], "Correct the sentence."),
      toEs(
        "Mi número es el seis, cuarenta ocho, quince.",
        "Mi número es el seis, cuarenta y ocho, quince.",
        "48 is above 30, so it needs y: cuarenta y ocho.",
        [],
        "Correct the sentence."
      ),
      toEs("How old are you? (informal)", "¿Cuántos años tienes?", "Literally \"How many years do you have?\"", ["¿Cuántos años tienes tú?"]),
      toEs("How much is the bread?", "¿Cuánto cuesta el pan?", "One item: cuesta."),
      toEn("Los zapatos cuestan noventa dólares.", "The shoes cost ninety dollars.", "Cuestan agrees with the plural zapatos.", ["The shoes are ninety dollars."]),
      wo("Mi hermana tiene diecinueve años.", "Tener + number + años.", "My sister is nineteen years old."),
      wo("¿Cuánto cuestan los zapatos negros?", "Plural item, so cuestan.", "How much are the black shoes?"),
      {
        type: "speak",
        prompt: "At the market, ask aloud how much the apples are, then say you'd like one kilo.",
        text: "¿Cuánto cuestan las manzanas? Quiero un kilo, por favor.",
        explanation: "Manzanas is plural, so cuestan; kilo is masculine, so un kilo.",
      },
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
        [
          "Remember the rule: ¿Qué hora es? asks what time it is now → Es la… / Son las…. ¿A qué hora…? asks when something happens → A la… / A las…. After half past, count down from the next hour with menos.",
        ],
        [
          ["—¿Qué hora es? —Son las cinco y diez.", "What time is it? It's 5:10. (now: son las)"],
          ["—¿A qué hora sale el autobús? —A las cinco y media.", "What time does the bus leave? At 5:30. (when: a las)"],
        ],
        [
          mc(
            "Someone asks \"¿A qué hora es la clase?\" Which answer fits?",
            ["A las nueve.", "Son las nueve.", "Es nueve.", "Las nueve son."],
            0,
            "¿A qué hora...? is answered with a + time: a las nueve. \"Son las nueve\" tells the current time, and \"Es nueve\" and \"Las nueve son\" aren't how Spanish gives times."
          ),
          fb(
            "Complete the answer.",
            "—¿A qué hora sale el tren? —___ las once.",
            "A",
            "A ¿A qué hora…? question is answered with a + the time: a las once.",
            "at"
          ),
        ]
      ),
      sec(
        "The class timetable",
        [
          "Read the schedule. Any time said with la una (including la una menos cuarto, 12:45) is singular: es la una, a la una. Every other hour is son las, a las.",
        ],
        [
          ["Matemáticas: 8:15 — a las ocho y cuarto", "Math: at a quarter past eight"],
          ["Historia: 12:45 — a la una menos cuarto", "History: at a quarter to one (counted down from one)"],
          ["Arte: 1:30 — a la una y media", "Art: at one thirty"],
        ],
        [
          mc(
            "Your friend reads the timetable: \"¿A qué hora es Historia?\" What do you answer?",
            ["A la una menos cuarto.", "A las doce menos cuarto.", "A las una menos cuarto.", "Es la una menos cuarto."],
            0,
            "12:45 counts down from one: la una menos cuarto, and with la una it's a la (singular). \"Doce menos cuarto\" is 11:45, \"las una\" breaks the agreement, and \"es la\" tells the time now instead of when."
          ),
          fb(
            "Science (Ciencias) is at 2:15. Complete the timetable.",
            "Ciencias es a las dos y ___.",
            "cuarto",
            "Quarter past = y cuarto: a las dos y cuarto (y quince also works).",
            "quarter past"
          ),
        ]
      ),
      sec(
        "The bus timetable",
        [
          "Now a bus schedule. To work out a time after half past, think \"how many minutes to the next hour?\": 7:40 is twenty to eight, a las ocho menos veinte.",
        ],
        [
          ["Línea 5: sale a las 7:40 — a las ocho menos veinte", "Line 5: leaves at twenty to eight"],
          ["Llega al centro a las 8:05 — a las ocho y cinco", "Arrives downtown at five past eight"],
        ],
        [
          mc(
            "Line 5 leaves at 7:40 and the trip takes 25 minutes. When does it arrive?",
            ["A las ocho y cinco.", "A las ocho menos cinco.", "A las siete y cinco.", "Son las ocho y cinco."],
            0,
            "7:40 + 25 minutes = 8:05, five past eight: a las ocho y cinco. \"Ocho menos cinco\" is 7:55, and \"son las\" would tell the time now, not when the bus arrives."
          ),
        ]
      ),
    ],
    [
      fb("Complete the time (2:40).", "Son las tres ___ veinte.", "menos", "2:40 is twenty minutes before three: las tres menos veinte."),
      mc(
        "How do you say 1:05?",
        ["Es la una y cinco.", "Son la una y cinco.", "Son las una y cinco.", "Es las una y cinco."],
        0,
        "One o'clock is singular: es la una y cinco. \"Son\" is plural, and \"las una\" mixes a plural article with one."
      ),
      mt(
        "Match each time to its Spanish form.",
        [
          ["7:15", "las siete y cuarto"],
          ["9:30", "las nueve y media"],
          ["10:50", "las once menos diez"],
          ["12:00 p.m.", "mediodía"],
        ],
        "After :30, count down from the next hour with menos; noon has its own word, mediodía."
      ),
      fb("Complete the answer.", "—¿A qué hora cenas? —Ceno ___ las ocho de la noche.", "a", "At + time → a las."),
      mc(
        "Someone asks \"¿Qué hora es?\". It's four o'clock. Which answer fits?",
        ["A las cuatro.", "Son las cuatro.", "Es las cuatro.", "A la cuatro."],
        1,
        "This asks the time now, so answer with son las, not a las. \"Es las\" mixes singular and plural, and la is only for la una."
      ),
      fb("Complete the answer.", "—¿Qué hora es? —___ la una y diez.", "Es", "Times with la una are singular: es."),
      fb("Complete the timetable.", "La clase de música es ___ la una y cuarto.", "a", "\"At\" a time is a la / a las; la una stays singular."),
      toEs(
        "La clase de arte termina a las dos.",
        "La clase de arte termina a la una y media.",
        "1:30 is said with la una, so a las becomes a la: a la una y media.",
        [],
        "Change the time to 1:30."
      ),
      toEs(
        "El autobús sale a las siete y cuarto.",
        "¿A qué hora sale el autobús?",
        "¿A qué hora…? asks when something happens; the verb comes before the subject.",
        [],
        "Turn it into a question with ¿A qué hora…?"
      ),
      toEs(
        "El tren llega a las ocho.",
        "El tren llega a la una menos cuarto.",
        "12:45 is counted down from one: a la una menos cuarto (singular, because of la una).",
        ["El tren llega a las doce y cuarenta y cinco."],
        "Change the time to 12:45."
      ),
      toEs("El museo abre a las nueve.", "El museo abre a las diez.", "A las + hour for when something happens.", [], "Change the time to ten."),
      toEs(
        "¿A qué hora es la película? Son las nueve.",
        "¿A qué hora es la película? A las nueve.",
        "¿A qué hora…? asks when, so the answer is a + the time: a las nueve. Son las nueve would tell the time now.",
        [],
        "Correct the answer."
      ),
      toEs("La clase de ciencias es a las una y veinte.", "La clase de ciencias es a la una y veinte.", "With la una the article stays singular: a la una y veinte.", [], "Correct the sentence."),
      toEs("Es las tres y veinte.", "Son las tres y veinte.", "Three hours is plural: son las.", [], "Correct the sentence."),
      toEs(
        "El tren sale a las seis menos cuarto de la mañana.",
        "El tren sale a las siete menos cuarto de la mañana.",
        "6:45 is a quarter before seven, so count down from seven: las siete menos cuarto. \"Seis menos cuarto\" is 5:45.",
        ["El tren sale a las seis y cuarenta y cinco de la mañana."],
        "Correct the time so it says 6:45."
      ),
      toEs("At what time is the math class?", "¿A qué hora es la clase de matemáticas?", "¿A qué hora...? for when an event happens."),
      toEs(
        "It's 5:40 and the bus leaves at 6:00.",
        "Son las seis menos veinte y el autobús sale a las seis.",
        "Son las for the time now, a las for the scheduled time; 5:40 counts down from six.",
        ["Son las cinco y cuarenta y el autobús sale a las seis."]
      ),
      toEn("Es medianoche y no tengo sueño.", "It's midnight and I'm not sleepy.", "Medianoche = midnight. Tener sueño = to be sleepy.", ["It is midnight and I am not sleepy."]),
      wo("¿A qué hora es la película?", "¿A qué hora + ser + event? Events take ser.", "What time is the movie?"),
      wo("La clase de arte termina a las dos", "A las + hour for when it ends.", "The art class ends at two"),
      {
        type: "speak",
        prompt: "Someone at the bus stop asks: ¿A qué hora sale el próximo autobús? It leaves at 8:20. Answer aloud.",
        text: "Sale a las ocho y veinte.",
        explanation: "Answer ¿A qué hora…? with a + the time: a las ocho y veinte (before half past, add the minutes with y).",
      },
    ]
  ),
  L(
    "telling-time-2",
    "a1r-spiral-numbers-time-possessives",
    "Spiral Review: Numbers, Time & Possessives",
    "Plan a family day using possessives, numbers and time — plus ser, estar and the present tense from before.",
    "8 min",
    [
      sec(
        "The family plan",
        [
          "Remember the rules: a possessive agrees with the thing owned (mis abuelos, nuestra casa); age takes tener + años; es la / son las tells the time now, a la / a las says when something happens.",
          "Read the plan once. Every line uses at least two of these topics.",
        ],
        [
          ["Mi padre tiene cuarenta y seis años y trabaja hasta las tres.", "My dad is 46 and works until three. (tener for age)"],
          ["Nuestra casa está a veinte minutos del parque.", "Our house is twenty minutes from the park. (nuestra agrees with casa)"],
          ["A las cuatro y media comemos con mis abuelos.", "At 4:30 we eat with my grandparents. (a las: when)"],
        ],
        [
          mc(
            "What time does the family eat?",
            ["4:30", "3:00", "4:20", "3:30"],
            0,
            "A las cuatro y media means at half past four: 4:30. Y media is thirty minutes, not twenty, and cuatro is four, not three."
          ),
          fb("Complete with the correct possessive (our).", "___ abuelos viven en el campo.", "Nuestros", "Abuelos is masculine plural, so nuestros."),
        ]
      ),
      sec(
        "One more check: the shortening rule",
        [
          "Uno, primero and tercero all drop their -o right before a masculine singular noun: un hijo, veintiún años, el primer día, el tercer piso. Before a feminine noun they take -a: una hija, la primera clase.",
        ],
        [
          ["Mis tíos llegan a la una.", "My aunt and uncle arrive at one. (mis: several people; a la una: singular hour)"],
          ["Es el primer cumpleaños de nuestra hija.", "It's our daughter's first birthday. (primer before a masculine noun)"],
        ],
        [
          mc(
            "Which sentence is correct?",
            ["Son las dos y nuestro coche está en el garaje.", "Es las dos y nuestro coche es en el garaje.", "Son las dos y nuestra coche está en el garaje.", "Son las dos y nuestro coche están en el garaje."],
            0,
            "Son las dos (plural, not es), coche is masculine (nuestro), and location takes estar singular: está. The wrong options use \"es las\", ser for location, \"nuestra\", or plural \"están\"."
          ),
          toEs(
            "Mi hermana tiene veintiuno años.",
            "Mi hermana tiene veintiún años.",
            "Años is masculine, so veintiuno shortens to veintiún (with an accent). Tiene is right: age takes tener.",
            [],
            "Correct the sentence."
          ),
        ]
      ),
    ],
    [
      fb("Write the number in words.", "Mis abuelos tienen ___ nietos. (12)", "doce", "Numbers 11–15 (once, doce, trece, catorce, quince) are single irregular words to memorize."),
      fb("Complete with the ordinal (1st).", "Es mi ___ día en el trabajo.", "primer", "Primero drops the -o before a masculine singular noun: primer día."),
      ms(
        "Which are correct ways to answer \"¿A qué hora llegas?\"",
        ["Llego a las diez.", "A las diez.", "Son las diez.", "A la una."],
        [0, 1, 3],
        "¿A qué hora…? is answered with a + time, with or without the verb. \"Son las diez\" answers \"What time is it?\", not \"At what time?\""
      ),
      mc(
        "\"It's 4:30 and our grandparents are at home.\"",
        ["Son las cuatro y media y nuestros abuelos están en casa.", "Es las cuatro y media y nuestros abuelos están en casa.", "Son las cuatro y media y nuestras abuelos están en casa.", "Son las cuatro y media y nuestros abuelos son en casa."],
        0,
        "Son las for 4:30; nuestros for masculine plural abuelos; estar for location. The others use \"es las\", feminine \"nuestras\", or ser for location."
      ),
      fb("Complete with the possessive (my).", "___ padres trabajan hasta las cinco.", "Mis", "Plural thing owned (padres), so mis."),
      fb("Write the number in words.", "Mi abuela tiene ___ años. (78)", "setenta y ocho", "Above 30, three words with y: setenta y ocho."),
      fb("Complete with the right word for \"at\".", "Comemos ___ la una con nuestros tíos.", "a", "A la una for the time something happens."),
      toEs("Mi clase es a las nueve.", "Nuestra clase es a las nueve.", "Nuestra agrees with clase (feminine); a las stays for the event time.", [], "Change \"my\" to \"our\"."),
      toEs("Mi hermano tiene veintidós años.", "Mi hermano tiene veintitrés años.", "Tener for age; veintitrés is one word, with an accent.", [], "Change the age to 23."),
      toEs(
        "Tu hermano llega a las dos.",
        "Tu hermana llega a las dos y cuarto.",
        "Tu stays (one person); 2:15 is las dos y cuarto.",
        ["Tu hermana llega a las dos y quince."],
        "Change it to your sister, at 2:15."
      ),
      toEs(
        "Mi padre tiene un hijo.",
        "Mis padres tienen tres hijos.",
        "Mis for plural padres; tienen agrees with them; un becomes tres.",
        [],
        "Change it to my parents, with three children."
      ),
      toEs("Es mi primer día.", "Es mi primera clase.", "Clase is feminine, so primer becomes primera.", [], "Change día to clase."),
      toEs(
        "Su hijo está en tercero grado.",
        "Su hijo está en tercer grado.",
        "Tercero shortens to tercer before a masculine singular noun.",
        ["Su hijo está en el tercer grado."],
        "Correct the sentence."
      ),
      toEs(
        "Su casa es grande y es cerca del parque.",
        "Su casa es grande y está cerca del parque.",
        "Ser for size is right, but location takes estar: está cerca del parque.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Nuestro casa está a diez minutos de la escuela.",
        "Nuestra casa está a diez minutos de la escuela.",
        "Nuestra agrees with casa (feminine).",
        ["Nuestra casa está a diez minutos del colegio."],
        "Correct the sentence."
      ),
      toEs("Su clase es a la once y media.", "Su clase es a las once y media.", "Eleven is plural: a las. A la is only for la una.", [], "Correct the sentence."),
      toEs(
        "My father works from eight until five.",
        "Mi padre trabaja de ocho a cinco.",
        "De... a... for a time range.",
        ["Mi padre trabaja desde las ocho hasta las cinco.", "Mi padre trabaja de las ocho a las cinco."]
      ),
      toEn("Tengo que estar en casa a las nueve.", "I have to be home at nine.", "Tener que + infinitive = to have to.", ["I have to be at home at nine."]),
      wo("La tercera calle a la derecha es mi calle.", "Ordinal adjectives agree: tercera calle.", "The third street on the right is my street."),
      wo("Nuestros primos llegan a las ocho y media", "Nuestros agrees with primos; a las + time.", "Our cousins arrive at half past eight"),
      {
        type: "speak",
        prompt: "Say it in Spanish: My grandmother is seventy-one and she arrives at one.",
        text: "Mi abuela tiene setenta y un años y llega a la una.",
        explanation: "Tener for age, setenta y un before masculine años, and a la una (singular) for when she arrives.",
      },
    ]
  ),
  L(
    "question-words",
    "a1r-answer-first-build-question",
    "Answer First: Build the Question",
    "Jeopardy-style: you get the answer, and you have to find the question that produced it.",
    "8 min",
    [
      sec(
        "The idea: the answer tells you the question word",
        [
          "Every answer carries one key piece of information. Find it, swap it for the matching question word, and put that word first: a place → ¿dónde?, a time → ¿cuándo? or ¿a qué hora?, a person → ¿quién?, a reason → ¿por qué?, an amount → ¿cuánto?, a description → ¿cómo?, a thing → ¿qué?",
          "Then flip the person: an answer about me (vivo) comes from a question to you (vives). The verb stays the same verb, so estar answers come from estar questions and ser answers from ser questions.",
        ],
        [
          ["Vivo en Lima. → ¿Dónde vives?", "I live in Lima. → Where do you live? (a place; vivo → vives)"],
          ["Porque estoy enfermo. → ¿Por qué no trabajas hoy?", "Because I'm sick. → Why aren't you working today? (a reason)"],
          ["Es mi hermano Pablo. → ¿Quién es?", "It's my brother Pablo. → Who is it? (a person)"],
        ],
        [
          mc(
            "Answer: \"Es alta y simpática.\" What was the question?",
            ["¿Cómo es tu amiga?", "¿Quién es tu amiga?", "¿Cómo está tu amiga?", "¿Dónde está tu amiga?"],
            0,
            "The answer describes what she's like with ser, so the question is ¿Cómo es...? with ser too. ¿Cómo está? asks how she's feeling (estar), ¿Quién es? asks for a name, and ¿Dónde está? asks for a place."
          ),
          toEs("Estudio por la noche.", "¿Cuándo estudias?", "Por la noche is a time, so the question word is cuándo; estudio (I) flips to estudias (you).", ["¿Cuándo estudias tú?"], "Turn the answer into a question (ask with tú)."),
        ]
      ),
      sec(
        "Agreement and direction",
        [
          "Quién and cuánto agree with what you're asking about: quiénes for several people; cuánto / cuánta / cuántos / cuántas to match the noun.",
          "Watch the small word in the answer: en Lima (where you are) → ¿dónde?; a México (where you're going) → ¿adónde?; de Venezuela (where you're from) → ¿de dónde?",
        ],
        [
          ["¿Quiénes son esas chicas? —Son mis compañeras.", "Who are those girls? — They're my classmates. (several people: quiénes)"],
          ["¿Cuántos primos tienes? —Tengo cinco.", "How many cousins do you have? — I have five. (primos: cuántos)"],
          ["Voy a Madrid. → ¿Adónde vas?", "I'm going to Madrid. → Where are you going? (a + place: adónde)"],
        ],
        [
          fb("Complete the question.", "¿___ libros hay en la mesa?", "Cuántos", "Cuánto agrees with the noun it asks about: libros is masculine plural, so cuántos (cuántas casas, cuánta leche)."),
          fb("Complete with dónde, adónde or de dónde.", "—¿___ caminas? —Al parque.", "Adónde", "The answer says where you're heading (al parque = a + el parque), so the question uses adónde. Dónde would ask where you are, de dónde where you come from.", "Look at the little word in the answer."),
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
        "Look at the type of information the answer gives: a time, a place, a person (after con, so the question keeps con too), a price."
      ),
      fb("Build the question.", "—¿___ te llamas? —Me llamo Jorge.", "Cómo", "Asking someone's name uses cómo: ¿Cómo te llamas? (literally \"how do you call yourself?\")."),
      fb("Build the question.", "—¿___ es tu cumpleaños? —Es el cinco de mayo.", "Cuándo", "The answer is a date, so the question asks when: cuándo."),
      mc(
        "Answer: \"Son de Venezuela.\" What was the question?",
        ["¿De dónde son?", "¿Dónde están?", "¿Adónde van?", "¿Quiénes son?"],
        0,
        "The answer gives origin (de Venezuela), so ¿De dónde son? \"¿Dónde están?\" asks where they are now, \"¿Adónde van?\" asks where they're going, and \"¿Quiénes son?\" asks who they are."
      ),
      mc(
        "Answer: \"Viajamos a México.\" What was the question?",
        ["¿Adónde viajan ustedes?", "¿Dónde están ustedes?", "¿De dónde son ustedes?", "¿Cuándo viajan ustedes?"],
        0,
        "Viajamos a México tells where you are travelling to, so the question is ¿Adónde viajan ustedes? (adónde = a + dónde, 'to where', used with verbs of movement). \"¿Dónde están?\" asks location, \"¿De dónde son?\" asks origin, and \"¿Cuándo viajan?\" would need a time."
      ),
      toEs("¿Porque estudias español?", "¿Por qué estudias español?", "To ask why, write two words with an accent: por qué. Porque (one word, no accent) is the answer: because.", ["¿Por qué tú estudias español?"], "Correct the sentence."),
      toEs("¿Quién es ese chico?", "¿Quiénes son esos chicos?", "Several people: quién → quiénes, es → son, and ese chico → esos chicos.", [], "Make it plural."),
      wo("¿Cuántas personas hay en tu familia?", "Cuántas agrees with personas.", "How many people are there in your family?"),
    ]
  ),
  L(
    "review-possessives-prepositions-questions-2",
    "a1r-error-hunt-questions-prepositions",
    "Error Hunt: Questions & Prepositions",
    "Missing accents, missing contractions, the wrong question word — find them and fix them.",
    "8 min",
    [
      sec(
        "Accent marks in question words",
        [
          "Remember the rule: question words always carry an accent (qué, quién, dónde, cuándo, cómo, cuánto, por qué).",
          "Why? The same words without an accent are connectors inside a statement: que (that), donde (where), cuando (when), porque (because). They sound almost the same, so the accent is how the page tells the asking word from the linking word.",
        ],
        [
          ["¿Dónde vives? — Vivo donde vive mi abuela.", "Where do you live? — I live where my grandmother lives. (asking: dónde; linking: donde)"],
          ["¿Qué quieres? — Creo que quiero pasta.", "What do you want? — I think (that) I want pasta. (asking: qué; linking: que)"],
        ],
        [
          ms(
            "Which questions are written correctly?",
            ["¿Cuándo llegas?", "¿Quien es ella?", "¿Qué hora es?", "¿Donde está el baño?"],
            [0, 2],
            "Question words carry an accent: quién, dónde. \"Quien\" and \"Donde\" are missing it, so they read as connectors."
          ),
          fb("Complete with que or qué.", "Creo ___ Ana vive aquí.", "que", "Here the word just links two ideas (I think that Ana lives here), so no accent: que. Qué with an accent asks a question.", "Is it asking, or linking?"),
        ]
      ),
      sec(
        "Contractions: al and del",
        [
          "A + el → al, and de + el → del. They're not optional: the two words run together when you speak, and Spanish writes what it says.",
          "They only happen with el. A la, a los, a las, de la, de los, de las stay apart, and so does the pronoun él (it has its own stress and means he / him). (Voy = I go, vamos = we go: you'll learn ir fully in the 'Key Irregular Verbs: Tener, Ir, Hacer + Hay' lesson.)",
        ],
        [
          ["Voy al mercado.", "I'm going to the market. (a + el)"],
          ["Es el libro del profesor.", "It's the teacher's book. (de + el)"],
          ["Es el libro de él.", "It's his book. (no contraction with the pronoun él)"],
          ["Vamos a la playa.", "We're going to the beach. (a la: no contraction)"],
        ],
        [
          fb("Fix the contraction.", "Caminamos ___ parque después de clase. (learner wrote: a el)", "al", "A + el always contracts: al parque."),
          mc("\"It's the boys' ball.\"", ["Es la pelota de los chicos.", "Es la pelota dels chicos.", "Es la pelota del los chicos.", "Es la pelota de el chico."], 0, "Only de + el contracts. With los the words stay apart: de los chicos. Dels doesn't exist, del los doubles the article, and de el chico is both uncontracted and singular."),
        ]
      ),
    ],
    [
      fb("Fix the contraction.", "La casa ___ señor Ruiz es azul. (learner wrote: de el)", "del", "De + el always contracts: del señor Ruiz."),
      mc(
        "Which sentence is correct?",
        ["Voy a la tienda y al banco.", "Voy al tienda y al banco.", "Voy a la tienda y a el banco.", "Voy al la tienda y al banco."],
        0,
        "La tienda has no contraction (a la), but a + el banco becomes al banco. \"Al tienda\" contracts before a feminine noun, \"a el banco\" doesn't contract, and \"al la\" doubles the article."
      ),
      mc(
        "A learner asks \"¿Qué es tu número de teléfono?\" Most speakers would say…",
        ["¿Cuál es tu número de teléfono?", "¿Quién es tu número de teléfono?", "¿Cómo es tu número de teléfono?", "¿Dónde es tu número de teléfono?"],
        0,
        "Asking for one item from a set of possibilities (a number, a name, an address) → ¿Cuál es…? ¿Qué es...? asks for a definition (what is a phone number?). Quién is for people, cómo for descriptions, dónde for places."
      ),
      fb("Fix the question word.", "¿___ son tus padres? —Son de Bolivia. (learner wrote: Dónde)", "De dónde", "The answer gives origin (de Bolivia), so the question keeps de in front: ¿De dónde?"),
      ms(
        "Which sentences have an error?",
        ["El gato está encima del coche.", "Es la oficina de el director.", "La mochila de él está aquí.", "Vamos a los museos."],
        [1],
        "De + el director → del director. De él (pronoun) doesn't contract, and a los never contracts."
      ),
      toEs("When does the class start? I think that it starts at nine.", "¿Cuándo empieza la clase? Creo que empieza a las nueve.", "Cuándo (question) has an accent; que (that) doesn't.", ["¿Cuándo empieza la clase? Pienso que empieza a las nueve.", "¿A qué hora empieza la clase? Creo que empieza a las nueve.", "¿Cuándo es la clase? Creo que es a las nueve.", "¿Cuándo es la clase? Pienso que es a las nueve."]),
      wo("¿Por qué llegas al hospital tan tarde?", "Por qué + verb + a + el → al.", "Why are you arriving at the hospital so late?"),
      toEs("Voy al parque.", "Voy a la playa.", "La playa is feminine, so the contraction disappears: a + la stays a la. Al only exists for a + el.", ["Yo voy a la playa."], "Change the place to la playa."),
      toEs("Es el coche de Ana.", "Es el coche del profesor.", "De + el profesor must contract: del profesor. A name like Ana has no article, so de Ana stays as it is.", ["Es el carro del profesor.", "Es el auto del profesor."], "Change the owner to el profesor."),
    ]
  ),
  L(
    "gustar-2",
    "a1r-contrast-gusta-gustan",
    "Contrast Clinic: Gusta vs. Gustan",
    "The number of the thing you like — not the number of people who like it — decides gusta or gustan.",
    "8 min",
    [
      sec(
        "Count the things, never the people",
        [
          "Remember the rule: with gustar the thing liked is the subject, so only the thing decides gusta or gustan. A crowd liking one thing still takes gusta; one person liking many things takes gustan.",
          "The trap: two singular things joined by y make a plural subject, so me gustan el té y el café.",
        ],
        [
          ["Nos gusta el café.", "We like coffee. (many people, one thing: gusta)"],
          ["Me gustan los cafés de Colombia.", "I like Colombian coffees. (one person, many things: gustan)"],
          ["Me gustan el té y el café.", "I like tea and coffee. (two things joined by y: gustan)"],
        ],
        [
          mc(
            "\"A mis padres les ___ la música clásica.\"",
            ["gusta", "gustan", "gustamos", "gusto"],
            0,
            "The thing liked is la música (singular), so gusta, even though mis padres is plural. \"Gustan\" would need a plural thing, and \"gustamos\" and \"gusto\" conjugate for the wrong person."
          ),
          fb("Complete with gusta or gustan.", "A mi abuelo le ___ el pan y el queso.", "gustan", "Two things joined by y (el pan y el queso) make a plural subject, so gustan, even though each one is singular.", "How many things?"),
        ]
      ),
      sec(
        "Actions are always singular",
        "An activity (an infinitive) isn't a thing you can count; it's one idea of doing something. So it takes gusta, even when you list several activities.",
        [
          ["Me gusta bailar.", "I like to dance."],
          ["Me gusta cantar y bailar.", "I like to sing and dance. (two actions, still gusta)"],
        ],
        [
          fb("Complete with gusta or gustan.", "A Julia le ___ nadar y correr.", "gusta", "Infinitives → gusta, even two of them. Compare things: le gustan el mar y la playa."),
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
      fb("Complete with gusta or gustan.", "¿Os ___ los videojuegos?", "gustan", "Los videojuegos is plural → gustan. Os (you all) doesn't affect the verb."),
      fb("Complete with gusta or gustan.", "A nosotros nos ___ la montaña.", "gusta", "La montaña is singular → gusta, even though nosotros is plural."),
      mc(
        "Which is correct?",
        ["No me gustan las películas de terror.", "No me gusta las películas de terror.", "No gusto las películas de terror.", "Yo no gustan las películas de terror."],
        0,
        "Películas is plural, so gustan, and no goes before me: No me gustan. \"Gusta\" breaks agreement, and \"No gusto\" and \"Yo no gustan\" leave out the pronoun me."
      ),
      ms(
        "Which sentences are correct?",
        ["Le gustan los gatos.", "Nos gustan la pizza.", "Me gusta viajar.", "Les gusta los deportes."],
        [0, 2],
        "Gustar agrees with the thing liked: le gustan los gatos, me gusta viajar. \"Nos gustan la pizza\" should be gusta (singular), and \"Les gusta los deportes\" should be gustan (plural)."
      ),
      toEs("They like the new songs.", "Les gustan las canciones nuevas.", "Canciones is plural, so gustan, with les for them.", ["A ellos les gustan las canciones nuevas.", "A ellas les gustan las canciones nuevas."]),
      wo("A mi hermano no le gustan las verduras.", "A + person clarifies who; no + pronoun + gustan + plural thing.", "My brother doesn't like vegetables."),
      toEs("A mi hermana le gusta la película.", "A mi hermana le gustan las películas.", "The thing becomes plural (la película → las películas), so the verb follows: gustan. Your sister is still one person, so le stays.", ["Le gustan las películas."], "Change la película to las películas."),
      toEs("Me gustan las naranjas.", "Nos gustan las naranjas.", "Only the pronoun changes (me → nos). The verb stays gustan, because the oranges haven't changed.", ["A nosotros nos gustan las naranjas.", "A nosotras nos gustan las naranjas."], "Change to nosotros."),
      toEs("Me gusta la sopa.", "Me gustan la sopa y la ensalada.", "Adding y la ensalada makes two things, a plural subject: gusta → gustan.", ["A mí me gustan la sopa y la ensalada."], "Change it so you like the soup and the salad."),
    ]
  ),
  L(
    "gustar-mastery-check",
    "a1r-dialogue-me-too-me-neither",
    "Dialogue Lab: Me Too, Me Neither",
    "Agree and disagree about likes — and learn why a mí también (not yo también) is the standard reply after gustar.",
    "8 min",
    [
      sec(
        "Agreeing: mirror the sentence",
        [
          "Remember the rule: a gustar sentence names the person as me / te / le (to me, to you...), never yo. So the short reply mirrors that form: a mí también (me too) after a positive, a mí tampoco (me neither) after a negative.",
          "With an ordinary verb (tengo, como, soy) the person really is yo, so the reply is yo también / yo tampoco. Ask yourself: what form did the first sentence use?",
        ],
        [
          ["—Me gusta el helado. —A mí también.", "I like ice cream. — Me too. (me gusta → a mí)"],
          ["—No me gusta el frío. —A mí tampoco.", "I don't like the cold. — Me neither. (negative → tampoco)"],
          ["—Tengo hambre. —Yo también.", "I'm hungry. — Me too. (tengo is an ordinary verb → yo)"],
        ],
        [
          mc(
            "Your friend says \"No me gustan los lunes.\" You agree. You say…",
            ["A mí tampoco.", "A mí también.", "Yo también.", "Yo tampoco."],
            0,
            "Agreeing with a negative takes tampoco, and gustar replies use a mí: A mí tampoco. \"También\" agrees with a positive, and \"Yo\" doesn't match the me in the original."
          ),
          mc("Your friend says \"Como mucha fruta.\" You do too. You say…", ["Yo también.", "A mí también.", "Yo tampoco.", "A mí sí."], 0, "Como is an ordinary verb with yo as its subject, so the mirror is yo también. A mí también only answers gustar-type verbs, tampoco answers a negative, and a mí sí disagrees with a negative."),
        ]
      ),
      sec(
        "Disagreeing: flip the answer",
        "To disagree, give the opposite of the statement: a mí sí (I do) after a negative, a mí no (I don't) after a positive. It works for anyone: a mi hermano sí, a nosotros no.",
        [
          ["—Me encanta el fútbol. —¡A mí no!", "I love soccer. — I don't!"],
          ["—No me gusta cocinar. —A mí sí.", "I don't like cooking. — I do."],
        ],
        [
          fb("Disagree.", "—Me gustan los perros. —A mí ___.", "no", "The statement is positive and you don't agree, so flip it: a mí no."),
          mc("\"A Ana no le gusta el café.\" Your brother DOES like it. You say…", ["A mi hermano sí.", "A mi hermano también.", "A mi hermano tampoco.", "Mi hermano sí."], 0, "Disagreeing with a negative → sí, and gustar keeps a + person: a mi hermano sí. También and tampoco would agree, and without a it doesn't mirror a Ana."),
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
        "To agree with a positive statement, use también, even with nosotros: a nosotros también. \"Tampoco\" is for agreeing with a negative, and \"sí\" and \"no\" alone would disagree."
      ),
      mc(
        "Why is \"A mí también\", not \"Yo también\", the standard reply to \"Me gusta el té\"?",
        [
          "Gustar's person is expressed with a mí, so the reply mirrors a mí.",
          "Yo is too informal.",
          "También can't follow yo.",
          "It isn't wrong at all.",
        ],
        0,
        "The original sentence has no yo; it has me (a mí), so the standard reply mirrors it: A mí también. Yo también is heard in everyday speech, but it is not the model reply, and with ordinary verbs yo también is fine (Yo también como)."
      ),
      toEs("—No me gustan los tomates. —A mí también.", "—No me gustan los tomates. —A mí tampoco.", "The statement is negative, so agreeing needs tampoco. También only agrees with a positive.", ["No me gustan los tomates. —A mí tampoco.", "No me gustan los tomates. A mí tampoco."], "Correct the sentence."),
      mc("—Me encanta bailar. —¡A mí no! Does the second person love dancing?", ["No: a mí no disagrees with a positive.", "Yes: they love it too.", "They don't say.", "Yes, but only a little."], 0, "After a positive statement, a mí no means \"I don't\". Agreeing would be a mí también."),
      wo("A mis amigos tampoco les gusta el invierno.", "Tampoco can come early in the sentence to mean \"not … either.\"", "My friends don't like winter either."),
      toEs("—Nos gusta la playa. —A nosotros también.", "—Nos gusta la playa. —A nosotros no.", "To disagree with a positive, flip también to no; the a nosotros part stays to mirror nos.", ["Nos gusta la playa. —A nosotros no.", "Nos gusta la playa. A nosotros no.", "—Nos gusta la playa. —A nosotras no."], "Change the reply so it disagrees."),
    ]
  ),
  L(
    "gustar-mastery-check",
    "a1r-spiral-gustar-questions-ser-estar",
    "Spiral Review: Gustar, Questions & Ser/Estar",
    "Interview a new classmate — every question pulls a different topic: ser and estar, question words and gustar.",
    "9 min",
    [
      sec(
        "Remember the rules",
        [
          "Ser says what someone or something IS: origin, personality, identity. Estar says where it is or how it is right NOW. Gustar agrees with the thing liked: gusta for one thing or an action, gustan for several.",
          "In questions, the question word goes first and takes its preposition with it: ¿De dónde eres? ¿A quién le gusta...? A question keeps the same verb as its answer: ¿Cómo es? gets es, ¿Cómo estás? gets estoy.",
        ],
        [
          ["¿De dónde eres? —Soy de Quito.", "Where are you from? — I'm from Quito. (origin: ser)"],
          ["¿Cómo estás? —Estoy cansado.", "How are you? — I'm tired. (how you are now: estar)"],
          ["¿A quién le gusta el fútbol?", "Who likes soccer? (a quién + le: the thing is the subject)"],
        ],
        [
          mc("Which question asks what your sister is like?", ["¿Cómo es tu hermana?", "¿Cómo está tu hermana?", "¿Dónde está tu hermana?", "¿Qué le gusta a tu hermana?"], 0, "What someone is like (personality, looks) is ser: ¿Cómo es? ¿Cómo está? asks how she's feeling now, ¿Dónde está? where she is, and ¿Qué le gusta? what she likes."),
          fb("Complete with es or está.", "Mi profesor ___ muy simpático.", "es", "Being nice is a personality trait, part of what he is, so ser: es.", "A trait, or a state right now?"),
        ]
      ),
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
            "The classmate says \"Estoy en Madrid\", estar for current location. Quito is where they're from (soy de), and a museum and work aren't where they are now."
          ),
          mc(
            "Why \"me encantan\" and not \"me encanta\"?",
            ["Because los museos is plural.", "Because the speaker is plural.", "Because encantar is irregular.", "Both are correct here."],
            0,
            "Encantar, like gustar, agrees with the thing loved: los museos is plural, so encantan. The speaker's number doesn't matter, encantar is regular, and \"encanta\" would be wrong with a plural thing."
          ),
        ]
      ),
    ],
    [
      fb("Complete the interview question.", "¿___ es tu comida favorita?", "Cuál", "¿Qué es…? asks for a definition (What is paella?); asking which one among many (favorite food, number, address) takes ¿Cuál es…?"),
      fb("Complete with ser or estar.", "Mi comida favorita ___ la paella.", "es", "Identifying or defining something takes ser: mi comida favorita es la paella."),
      fb("Complete with gusta or gustan.", "¿Te ___ los deportes?", "gustan", "Los deportes → plural → gustan."),
      mc(
        "\"—¿Cómo estás hoy? —___\"",
        ["Un poco cansado, gracias.", "Soy alto y moreno.", "Soy de Perú.", "Me gusta el cine."],
        0,
        "¿Cómo estás? asks about your current state: un poco cansado. \"Soy alto y moreno\" describes looks, \"Soy de Perú\" gives origin, and \"Me gusta el cine\" gives a preference."
      ),
      ms(
        "Which questions could get the answer \"Mi hermana\"?",
        ["¿Quién es la chica de la foto?", "¿Quién vive con tus padres?", "¿Dónde vives?", "¿Quién cocina en tu casa?"],
        [0, 1, 3],
        "The answer mi hermana is a person, and all three quién questions ask about a person. \"¿Dónde vives?\" asks for a place. (¿Con quién...? or ¿A quién...? would need the preposition in the answer: con mi hermana, a mi hermana.)"
      ),
      toEs("Where is the museum? I like museums a lot.", "¿Dónde está el museo? Me gustan mucho los museos.", "Location → está; plural thing → gustan.", ["¿Dónde está el museo? Me gustan los museos mucho."]),
      wo("¿Por qué no te gusta estudiar por la noche?", "Por qué + no + pronoun + gusta + infinitive.", "Why don't you like studying at night?"),
      toEs("Soy de Colombia.", "¿Eres de Colombia?", "Soy (I) → eres (you); origin stays with ser. A yes / no question keeps the word order and adds the question marks.", ["¿Tú eres de Colombia?", "¿De dónde eres?"], "Turn it into a question (ask with tú)."),
      toEs("¿De dónde estás?", "¿De dónde eres?", "De dónde asks for origin, and origin is part of who you are: ser. ¿Dónde estás? (no de) would ask where you are now.", ["¿Dónde estás?"], "Correct the sentence."),
      toEs("Mi hermano es en el hospital.", "Mi hermano está en el hospital.", "Where someone is right now takes estar, never ser.", [], "Correct the sentence."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-1",
    "a1r-mission-how-do-you-feel",
    "Real-World Mission: Tener for Feelings & Needs",
    "Hungry, cold, sleepy, in a hurry — English uses \"to be,\" Spanish uses tener. Handle a day's worth of situations.",
    "8 min",
    [
      sec(
        "Remember the rule: you HAVE hunger",
        [
          "Hambre, sed, frío, calor, sueño, miedo, prisa and razón are nouns (hunger, thirst, cold...), so Spanish says you have them: tengo hambre, literally \"I have hunger\".",
          "Two things follow. \"Very\" is mucho / mucha, agreeing with the noun, never muy: mucha hambre, mucha sed (feminine), mucho frío, mucho sueño (masculine). And estar + an adjective describes a thing's state instead: la sopa está fría (the soup is cold to the touch).",
        ],
        [
          ["Tengo hambre. ¿Comemos?", "I'm hungry. Shall we eat? (I have hunger)"],
          ["Los niños tienen sueño.", "The kids are sleepy."],
          ["Tengo mucha sed.", "I'm very thirsty. (sed is feminine: mucha)"],
          ["La sopa está fría.", "The soup is cold. (a thing's temperature: estar + adjective)"],
        ],
        [
          mc("You've been running in the sun for an hour. You say…", ["Tengo calor.", "Estoy calor.", "Soy caliente.", "Tengo caliente."], 0, "Feeling hot is tener + the noun calor. Estar can't take a noun, soy caliente describes a lasting trait (and not a polite one!), and caliente is an adjective, so it can't follow tengo."),
          fb("Complete with mucho or mucha.", "Tengo ___ hambre.", "mucha", "Hambre is a feminine noun (it takes el only for sound: el hambre, but mucha hambre), so mucha.", "Is hambre masculine or feminine?"),
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
          mc("Your exam is tomorrow morning and you haven't opened the book. You say…", ["Tengo que leer el libro hoy.", "Tengo leer el libro hoy.", "Estoy que leer el libro hoy.", "Tengo que leo el libro hoy."], 0, "Obligation is tener que + infinitive: tengo que leer. The second option drops que, the third uses estar, and the last conjugates both verbs."),
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
        "Tener que + infinitive: only tener is conjugated, and the second verb stays as is: tenemos que salir. \"Tenemos salir\" drops que, \"que salimos\" conjugates both verbs, and \"Estamos que\" uses the wrong verb."
      ),
      ms(
        "Which sentences are correct?",
        ["Mi hermana tiene veinte años.", "Estoy mucho frío.", "Tengo mucho sueño.", "Ellos tienen que estudiar."],
        [0, 2, 3],
        "Cold is a noun with tener, and nouns take mucho, not muy: tengo mucho frío. \"Estoy mucho frío\" uses estar with a noun. The other three are correct."
      ),
      toEs("Your friend hasn't eaten all day. Ask her (tú) if she's hungry.", "¿Tienes hambre?", "Tener hambre, not estar hambriento, is the everyday way to say it.", ["¿Tú tienes hambre?"]),
      wo("No tengo miedo de los perros grandes.", "No + tener + miedo + de + what scares you.", "I'm not afraid of big dogs."),
      toEs("Tengo mucho sueño.", "Tenemos mucho sueño.", "Only tener changes (tengo → tenemos); sueño and mucho stay, because they agree with each other, not with the person.", ["Nosotros tenemos mucho sueño."], "Change to nosotros."),
      toEs("Tengo muy hambre.", "Tengo mucha hambre.", "Hambre is a noun, so \"very\" is mucho, and it agrees: hambre is feminine, so mucha.", ["Tengo muchísima hambre."], "Correct the sentence."),
      toEs("Mi hermana está miedo de los perros.", "Mi hermana tiene miedo de los perros.", "Miedo is a noun (fear), so you have it: tener miedo de.", [], "Correct the sentence."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-2",
    "a1r-mission-weekend-plans",
    "Real-World Mission: Weekend Plans with Ir A",
    "Text a friend about the weekend — ir a + infinitive for plans, hacer for the weather, hay for what's going on.",
    "9 min",
    [
      sec(
        "The group chat",
        [
          "Remember the rule: ir a + infinitive says what's going to happen, and only ir changes (voy, vas, va, vamos, vais, van); the second verb stays in the infinitive.",
          "Read the messages, then join the chat.",
        ],
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
            "Luis says \"Voy a jugar al fútbol\", so he's going to play soccer, not see a movie, stay home or cook."
          ),
          fb("Complete Marta's reply with ir.", "Yo ___ a descansar en casa.", "voy", "Yo → voy, then a + the infinitive descansar."),
          mc("Marta wants to know when Ana and her friend are going. What does she text?", ["¿A qué hora vais a ir al cine?", "¿A qué hora vais ir al cine?", "¿A qué hora vais a vais al cine?", "¿A qué hora hacéis ir al cine?"], 0, "Two friends in Spain → vosotras: vais, then a + the infinitive ir. The second drops a, the third conjugates both verbs, and hacer can't carry the future."),
        ]
      ),
      sec(
        "Weather and what's there",
        "Weather takes hacer, always in the form hace: hace sol, hace frío, hace calor, hace buen / mal tiempo. What's going on takes hay (there is / are), which never changes form.",
        [
          ["Hace mucho sol hoy.", "It's very sunny today. (weather: hace)"],
          ["Hay tres conciertos en el parque.", "There are three concerts in the park. (what's on: hay)"],
        ],
        [
          mc(
            "\"There are many people at the beach.\"",
            ["Hay mucha gente en la playa.", "Hay muchas gente en la playa.", "Son mucha gente en la playa.", "Hacen mucha gente en la playa."],
            0,
            "Hay expresses existence, and gente is a singular feminine noun: mucha gente. \"Muchas gente\" treats it as plural, and \"Son\" and \"Hacen\" don't mean there are."
          ),
          fb("Complete with hace or hay.", "Esta noche ___ una fiesta en la playa.", "hay", "A party is something going on, not weather, so hay (there is).", "Weather, or what's on?"),
        ]
      ),
    ],
    [
      fb("Complete with ir.", "¿Ustedes ___ a venir a la fiesta?", "van", "Ustedes → van, then a + infinitive."),
      fb("Complete with hacer.", "No vamos a la playa porque ___ frío.", "hace", "Weather → hace (always this form)."),
      mc(
        "\"Is there a pharmacy near here?\"",
        ["¿Hay una farmacia cerca de aquí?", "¿Está una farmacia cerca de aquí?", "¿Es una farmacia cerca de aquí?", "¿Hacen una farmacia cerca de aquí?"],
        0,
        "Asking whether something exists uses hay: ¿Hay una farmacia...? \"Está\" is for where a specific, known thing is, \"Es\" is ser, and \"Hacen\" means they make."
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
      toEs("Your friend texts: \"¿Qué vas a hacer esta noche?\" Answer: you're going to watch a movie.", "Voy a ver una película.", "Answer with the yo form of ir: voy a + infinitive. The question's vas (you) becomes voy (I).", ["Esta noche voy a ver una película.", "Voy a ver una peli.", "Yo voy a ver una película."], "Reply in Spanish."),
      wo("Mañana vamos a hacer una fiesta en casa.", "Time + ir a + infinitive + object + place.", "Tomorrow we're going to have a party at home."),
      toEs("El sábado juego al tenis.", "El sábado voy a jugar al tenis.", "A plan: put ir in the same person (juego → voy) + a + the infinitive jugar.", ["El sábado yo voy a jugar al tenis.", "Voy a jugar al tenis el sábado."], "Change it to a plan with ir a."),
      toEs("Mañana vamos ir a la playa.", "Mañana vamos a ir a la playa.", "Ir a + infinitive always needs the a, even when the infinitive is ir itself: vamos a ir.", ["Mañana vamos a la playa."], "Correct the sentence."),
      toEs("El domingo hay calor y vamos a nadar.", "El domingo hace calor y vamos a nadar.", "Weather takes hacer: hace calor. Hay is for things that exist, like a concert.", ["El domingo va a hacer calor y vamos a nadar."], "Correct the sentence."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-2",
    "a1r-contrast-hay-esta",
    "Contrast Clinic: Hay vs. Está/Están",
    "\"There is a bank\" vs. \"The bank is there\" — one of the trickiest pairs for English speakers.",
    "8 min",
    [
      sec(
        "The idea: a new thing or a known thing?",
        [
          "Hay introduces something new to the conversation: is there one? there is one. Estar tells you where something already known is: the bank you both have in mind, your keys, María.",
          "In real talk you often switch in two steps: first mention with hay, then, now that it's known, estar.",
        ],
        [
          ["Hay un banco en esta calle.", "There's a bank on this street. (new: hay)"],
          ["El banco está en esta calle.", "The bank is on this street. (a known bank: está)"],
          ["Hay un perro en la calle. El perro está al lado de la puerta.", "There's a dog in the street. The dog is next to the door. (first mention hay, then está)"],
        ],
        [
          mc(
            "\"___ una farmacia al lado del hotel.\"",
            ["Hay", "Está", "Es", "Están"],
            0,
            "Una farmacia is new, unspecified information, so hay. \"Está\" needs a specific thing (la farmacia está...), \"Es\" is ser, and \"Están\" is plural."
          ),
          fb("Complete with hay or está.", "Hay un museo en el centro. El museo ___ al lado de la catedral.", "está", "The first sentence introduces the museum (hay). In the second it's already known (el museo), so estar tells you where it is.", "New, or already known?"),
        ]
      ),
      sec(
        "The article is your clue",
        "Un / una / unos / unas, numbers, mucho, or no article → something new → hay. El / la / los / las, possessives (mi, tu...) or names → something known → estar (está for one, están for several).",
        [
          ["Hay dos parques en mi barrio.", "There are two parks in my neighborhood. (a number: hay)"],
          ["Mis padres están en el parque.", "My parents are in the park. (mis: known people, están)"],
        ],
        [
          fb("Complete with hay, está or están.", "Los baños ___ al final del pasillo.", "están", "Los baños = specific → estar, plural → están."),
          mc("\"Where's Pedro?\"", ["¿Dónde está Pedro?", "¿Dónde hay Pedro?", "¿Hay dónde Pedro?", "¿Dónde es Pedro?"], 0, "A name is someone known, so estar locates him: ¿Dónde está Pedro? Hay never goes with a name, and ser isn't used for where a person is."),
        ]
      ),
    ],
    [
      fb("Complete with hay, está or están.", "En la nevera ___ leche y huevos.", "hay", "Hay introduces things without an article (leche, huevos). Están would need specific things: la leche está en la nevera."),
      fb("Complete with hay, está or están.", "La leche ___ en la nevera.", "está", "La leche = specific → está."),
      fb("Complete with hay, está or están.", "¿Dónde ___ mis zapatos?", "están", "Mis zapatos = specific and plural → están."),
      ms(
        "Which sentences are correct?",
        ["Hay muchos estudiantes en la clase.", "Hay el profesor en la clase.", "El profesor está en la clase.", "Están unos libros en la mesa."],
        [0, 2],
        "Hay introduces unspecified things (muchos estudiantes, unos libros); estar locates specific ones (el profesor está). So \"Hay el profesor\" should be El profesor está, and \"Están unos libros\" should be Hay unos libros."
      ),
      mc(
        "How do you ask \"Where is the bus station?\"",
        ["¿Dónde está la estación de autobuses?", "¿Dónde hay la estación de autobuses?", "¿Hay dónde la estación de autobuses?", "¿Dónde es la estación de autobuses?"],
        0,
        "A specific place's location takes estar: ¿Dónde está la estación? \"Hay\" is for whether something exists, not a specific thing's location, and \"es\" uses ser for location."
      ),
      toEs("There is a cat in the garden. The cat is black.", "Hay un gato en el jardín. El gato es negro.", "First mention (un gato) → hay. Then describing what it's like (not where it is) → ser.", []),
      wo("No hay nadie en la oficina ahora.", "No hay nadie = there's nobody: no one exists there, so hay.", "There's nobody in the office now."),
      toEs("Hay una farmacia en la plaza.", "La farmacia está en la plaza.", "Once it's a known pharmacy (la farmacia), hay changes to estar: está.", [], "Change una farmacia to la farmacia."),
      toEs("La biblioteca está cerca.", "¿Hay una biblioteca cerca?", "Asking whether one exists at all is a new-thing question: hay + una.", ["¿Hay alguna biblioteca cerca?"], "Change it to a question about whether there is one."),
      toEs("Hay mi hermano en la cocina.", "Mi hermano está en la cocina.", "Mi hermano is a known person, so you locate him with estar. Hay never goes with possessives or names.", [], "Correct the sentence."),
      toEs("Está un problema con el ordenador.", "Hay un problema con el ordenador.", "Un problema is new information, so hay. Estar needs a known thing: el problema está en...", ["Hay un problema con la computadora."], "Correct the sentence."),
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
        "Two dials: distance and number",
        [
          "Remember the rule: a demonstrative has two separate dials. Distance changes the start of the word: est- (here, near me), es- (there, near you), aquel- (over there, far from both). Number and gender change only the ending, exactly like any adjective.",
          "So to move a thing, swap the start and keep the ending: esta mesa → esa mesa → aquella mesa. Aquel is the only odd one: its masculine singular has no ending at all.",
        ],
        [
          ["este libro · ese libro · aquel libro", "this book · that book · that book over there"],
          ["esta mesa · esa mesa · aquella mesa", "this table · that table · that table over there (only the start changes)"],
        ],
        [
          fb("Move it farther away (near you → far from both).", "esa casa → ___ casa", "aquella", "Distance changes the start (es- → aquel-); casa is still feminine singular, so the ending stays -a: aquella."),
          toEs("Aquel coche es rápido.", "Este coche es rápido.", "Bringing it next to you swaps the start to est-; coche is masculine singular, so este. Nothing else in the sentence changes.", [], "Change it to a car right next to you, the speaker."),
        ]
      ),
      sec(
        "Changing number moves everything",
        [
          "The plural forms: estos/estas, esos/esas, aquellos/aquellas. Note este → estos (not estes).",
          "When the noun goes plural, every word that agrees with it follows: the demonstrative, the noun, the verb (es → son, está → están) and any adjective.",
        ],
        [
          ["Este zapato es negro. → Estos zapatos son negros.", "This shoe is black. → These shoes are black. (four words change)"],
          ["aquel árbol → aquellos árboles", "that tree over there → those trees over there"],
        ],
        [
          fb("Make it plural.", "este chico → ___ chicos", "estos", "Este becomes estos before a masculine plural noun."),
          toEs("Esa puerta está abierta.", "Esas puertas están abiertas.", "Plural moves everything: esa → esas, puerta → puertas, está → están, abierta → abiertas.", [], "Make it plural."),
        ]
      ),
    ],
    [
      fb("Make it plural.", "esa camisa → ___ camisas", "esas", "Demonstratives agree in number: esa → esas before a plural noun."),
      fb("Move it closer (near you → near me).", "ese coche → ___ coche", "este", "Near the speaker, masculine singular → este."),
      fb("Make it plural.", "aquella montaña → ___ montañas", "aquellas", "Demonstratives agree in number: aquella → aquellas before a plural noun."),
      mc(
        "Transform \"Este pastel es rico\" to \"Those cakes (near you) are delicious.\"",
        ["Esos pasteles son ricos.", "Estos pasteles son ricos.", "Esos pasteles es rico.", "Esas pasteles son ricos."],
        0,
        "Near the listener is ese/esos, and everything goes plural: esos pasteles son ricos. \"Estos\" means near the speaker, \"es rico\" is singular, and \"Esas\" is feminine but pastel is masculine."
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
    "A cumulative review of the Beginner level so far, focused on describing people, places and things.",
    "9 min",
    [
      sec(
        "Portrait of a neighbor",
        [
          "Remember the rule: every description is a small set of decisions. Who or what someone is (identity, origin, job, personality) takes ser; how or where they are right now takes estar; age takes tener (tiene setenta años). Then make every adjective, possessive and demonstrative agree with its noun, and make gustar / encantar agree with the thing liked.",
          "Read the paragraph slowly and notice which decision each piece shows.",
        ],
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
            "Contenta describes a mood, a state, so estar, even if it's frequent. Siempre doesn't force estar, age has nothing to do with it, and \"es contenta\" isn't used for a mood."
          ),
          fb("Complete with the right possessive.", "Doña Carmen vive con ___ gato, Bigotes.", "su", "Su means her (also his, their): su gato. It agrees with gato (singular), not with the owner."),
        ]
      ),
      sec(
        "Describe your own",
        "Now pick apart new sentences using the same tools. When the person changes, everything that agrees changes with them.",
        [
          ["Aquellos chicos son mis primos. Son de Cuba.", "Those guys over there are my cousins. They're from Cuba. (origin: ser)"],
          ["Hoy están un poco nerviosos porque tienen un examen.", "Today they're a bit nervous because they have an exam. (today's state: estar)"],
        ],
        [
          fb("Complete with ser or estar.", "Mis primos ___ muy altos.", "son", "Height is a trait → ser."),
          toEs("Mi hermano está cansado.", "Mi hermana está cansada.", "A woman takes the feminine ending: hermana, cansada. Estar stays because tiredness is still a state.", [], "Change mi hermano to mi hermana."),
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
        "Age uses tener, personality uses ser, and the adjective agrees with abuela: es muy divertida. \"Es ochenta años\" uses ser for age, \"son\" is plural, and \"divertido\" is masculine."
      ),
      fb("Complete with the correct demonstrative (this).", "___ chicas son mis compañeras de clase.", "Estas", "Near me, feminine plural → estas."),
      fb("Complete with gusta or gustan.", "A mi vecina le ___ las flores amarillas.", "gustan", "Gustar agrees with the thing liked: las flores is plural, so gustan."),
      ms(
        "Which sentences are correct?",
        ["Nuestros vecinos son muy amables.", "Esa mujer está doctora.", "¿Cuántos años tiene tu padre?", "El parque está cerca de mi casa."],
        [0, 2, 3],
        "A profession takes ser: esa mujer es doctora, so \"Esa mujer está doctora\" is wrong. The other three are correct."
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
    "Part two of the cumulative review: verbs, time, questions and plans from the Beginner level so far.",
    "9 min",
    [
      sec(
        "A busy Friday",
        [
          "Remember the rule: you have three frames for actions. The present for what you do (desayuno, leo); tener que + infinitive for what you have to do; ir a + infinitive for what you're going to do. In the last two, only the first verb changes for the person: the second stays in the infinitive.",
          "This schedule mixes regular verbs, irregulars (tener, ir, hacer), time, and plans with ir a.",
        ],
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
            "\"Tengo que ir al médico\" means I have to go to the doctor. Running, reading the paper and breakfast aren't at ten."
          ),
          fb("Complete with the yo form of hacer.", "Por la noche ___ la tarea.", "hago", "Hacer is irregular in the yo form: hago."),
          toEs("Veo una película.", "Voy a ver una película.", "A plan is ir a + infinitive: voy a, then ver stays in the infinitive (not veo).", [], "Change it to a plan with ir a."),
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
        "¿A qué hora...? asks at what time, then tener que + infinitive: tienes que trabajar. \"¿Qué hora...?\" drops the a, \"tienes trabajar\" drops que, and \"tiene que trabajas\" conjugates the wrong verb."
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
        [
          "Remember the rule: ser describes what a person or place is like (beautiful, small, friendly); estar says where something is and how it is right now (in Oaxaca, a bit sick today).",
          "Read the whole postcard first. Then each checkpoint asks you to explain one of the writer's choices.",
        ],
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
              ["La ciudad es preciosa", "characteristic (beauty)"],
              ["Es pequeño", "characteristic (size)"],
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
          fb("Complete Pablo's reply.", "Mis padres ___ en el trabajo todo el día.", "están", "Where people are takes estar, and mis padres is plural: están."),
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
      toEn("Hoy estamos cansados pero muy contentos.", "Today we're tired but very happy.", "Being tired and being happy are both states, so estar: estamos cansados, estamos contentos.", ["Today we are tired but very happy."]),
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
        [
          "Remember the rule: where something is takes estar, which one it is and when an event happens take ser, and what a place has takes hay (hay never changes, for one thing or many).",
          "Your mission: understand the receptionist, ask for what you need and report problems. Listen for the verb choices.",
        ],
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
            "\"Está en el tercer piso\": tercero shortens to tercer before a masculine noun, and it means third, not fifth (quinto), first (primer) or tenth (décimo)."
          ),
          fb("Complete with ser or estar.", "El restaurante ___ al lado de la recepción.", "está", "Location takes estar: el restaurante está al lado de la recepción."),
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
            "A condition takes estar, and ducha is feminine: está rota. \"Es rota\" uses ser, \"hay rota\" doesn't describe something, and \"roto\" is masculine."
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
        [
          "Remember the rule: the verb ending must match the subject, every time. Error hunting means checking two things: who is the subject, and does this verb have an irregular form for that person?",
          "Most verbs are regular, but a few everyday verbs have a surprise in the yo form: soy, estoy, voy, tengo, hago. Learners often regularize them.",
        ],
        [
          ["✗ Yo teno un perro. → ✓ Yo tengo un perro.", "I have a dog."],
          ["✗ Yo hace la cena. → ✓ Yo hago la cena.", "I make dinner."],
        ],
        [
          mc(
            "Fix \"Yo so estudiante.\"",
            ["Yo soy estudiante.", "Yo es estudiante.", "Yo eres estudiante.", "Yo estoy estudiante."],
            0,
            "Ser is irregular: yo soy. \"Es\" is él/ella, \"eres\" is tú, and \"estoy\" is estar, which isn't used for a profession."
          ),
          toEs("Él va al trabajo en autobús.", "Voy al trabajo en autobús.", "Ir is irregular for yo: voy (never \"vo\" or \"yo va\").", ["Yo voy al trabajo en autobús.", "Voy al trabajo en bus.", "Yo voy al trabajo en bus."], "Change to yo."),
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
          fb("Fix the verb.", "¿Ustedes ___ en el centro? (learner wrote: vivís)", "viven", "Ustedes uses the ellos form: viven. Vivís is vosotros, used in Spain."),
          toEs("Ustedes escriben muy bien.", "Vosotros escribís muy bien.", "Vosotros has its own ending: -ís for -ir verbs. Ustedes borrows the ellos form (escriben).", ["Vosotras escribís muy bien.", "Escribís muy bien."], "Change ustedes to vosotros."),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Yo ___ al gimnasio los martes. (learner wrote: ir)", "voy", "Ir is irregular in the present: yo voy. The infinitive ir isn't used after yo."),
      fb("Fix the verb.", "Mi novio y yo ___ en un restaurante. (learner wrote: trabajan)", "trabajamos", "Mi novio y yo = nosotros → trabajamos."),
      fb("Fix the verb.", "¿Tú ___ el periódico? (learner wrote: lee)", "lees", "Tú takes -es for -er verbs: lees. Lee is the él/ella form."),
      ms(
        "Which sentences are correct?",
        ["Yo hago la tarea.", "Ella tene dos gatos.", "Vosotros corréis mucho.", "Nosotros estamos aquí."],
        [0, 2, 3],
        "Tener is irregular: ella tiene, so \"Ella tene\" is wrong. The other three are correct."
      ),
      mc(
        "Which sentence has NO error?",
        ["Mis padres viven en Lima.", "Mis padres vive en Lima.", "Mis padres vivir en Lima.", "Mis padres vivimos en Lima."],
        0,
        "Mis padres = ellos, so viven. \"Vive\" is singular, \"vivir\" is the infinitive, and \"vivimos\" is nosotros."
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
        [
          "Remember the rule: usted is \"you\" but takes the él / ella ending (trabaja, vende). So a question with usted gets an answer with the yo ending: ¿Trabaja usted? — Sí, trabajo.",
          "Every verb here is in the present tense. Notice how the host uses usted and the baker answers with yo.",
        ],
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
        "Asked with usted, you answer about yourself with yo: vivo. \"Vive\" repeats the usted form, \"Vivimos\" is we, and \"Vives\" is tú."
      ),
      mc(
        "How would the host ask the baker's son the same question informally?",
        ["¿A qué hora trabajas?", "¿A qué hora trabaja usted?", "¿A qué hora trabajan?", "¿A qué hora trabajo?"],
        0,
        "Informal you is tú, so trabajas. \"Trabaja usted\" is formal, \"trabajan\" is plural, and \"trabajo\" is yo."
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
        [
          "A few adjectives drop their final -o when they come right before a masculine singular noun: bueno → buen, malo → mal, primero → primer, tercero → tercer. Feminine and plural forms never shorten.",
          "Why? It's a sound habit, a bit like English \"a\" becoming \"an\": the short form only appears when the adjective runs straight into one masculine noun. After the noun the full form comes back: un día bueno.",
        ],
        [
          ["un buen amigo / una buena amiga", "a good friend (buen: masculine singular)"],
          ["un mal día / unos malos días", "a bad day / some bad days (plural: no shortening)"],
          ["el primer año / la primera semana", "the first year / the first week"],
        ],
        [
          fb("Complete with bueno in the right form.", "Es un ___ libro.", "buen", "Libro is masculine singular and comes right after the adjective, so bueno shortens to buen."),
          fb("Complete with tercero in the right form.", "Es la ___ calle a la derecha.", "tercera", "Calle is feminine, so tercero becomes tercera. Only a masculine singular noun takes the short form tercer."),
        ]
      ),
      sec(
        "Gran vs. grande",
        [
          "Grande after the noun means big. Before a singular noun it becomes gran and usually means great or impressive (with some nouns it can also mean large, as in un gran problema).",
          "Why the change in meaning? After the noun, grande simply describes size; placed first, gran gives your opinion of the whole thing.",
        ],
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
            "Before a noun, grande shortens to gran and means great: un gran artista. \"Grande\" would go after the noun (meaning big), \"grandes\" is plural, and \"buen\" means good."
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
        "Grande after the noun = size; gran before = greatness. Buen shortens before the masculine día, but buena (feminine) never shortens."
      ),
      fb("Complete with malo in the right form.", "Hoy hace ___ tiempo.", "mal", "Tiempo is masculine singular → mal."),
      fb("Complete with primero in the right form.", "Es la ___ vez que viajo sola.", "primera", "Vez is feminine → primera (no shortening)."),
      ms(
        "Which phrases are correct?",
        ["un bueno restaurante", "un buen restaurante", "una gran ciudad", "unos buenos amigos"],
        [1, 2, 3],
        "Bueno shortens to buen before a masculine singular noun, so \"un bueno restaurante\" is wrong. Gran ciudad and buenos amigos are correct."
      ),
      mc(
        "\"My neighbor is a big man\" (about size) is…",
        ["Mi vecino es un hombre grande.", "Mi vecino es un gran hombre.", "Mi vecino es un grande hombre.", "Mi vecino es un hombre gran."],
        0,
        "About size, grande goes after the noun: un hombre grande. \"Un gran hombre\" means a great man, \"grande\" shortens to gran before a noun, and \"gran\" can't go after one."
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
        [
          "Remember the rule: colors are adjectives, so they come after the noun and agree with it. Colors ending in -o change for gender and number (rojo, roja, rojos, rojas); colors ending in -e or a consonant (verde, azul, gris) only change for plural.",
          "Your mission: ask for what you want, react to what the assistant shows you, and pay. Buscar already means \"to look for\", so there's no extra word: Busco una camisa.",
        ],
        [
          ["—Busco una camisa blanca.", "I'm looking for a white shirt."],
          ["—¿Y estos pantalones azules?", "And these blue pants?"],
          ["—Son muy bonitos, pero son caros.", "They're very nice, but they're expensive."],
        ],
        [
          fb("Complete with the color (rojo).", "Me gustan esas faldas ___.", "rojas", "The color takes -as to match faldas, not rojos."),
          mc(
            "The assistant asks: \"¿Le puedo ayudar?\" You want a white shirt. You answer:",
            ["Sí, busco una camisa blanca.", "Sí, busco una camisa blanco.", "Sí, busco para una camisa blanca.", "Sí, buscan una camisa blanca."],
            0,
            "Busco (I'm looking for) needs no para, and blanca agrees with camisa (feminine). Blanco is masculine, and buscan means they are looking."
          ),
        ]
      ),
      sec(
        "Paying",
        "¿Cuánto cuesta? for one item, ¿Cuánto cuestan? for more than one. The item is the subject of costar, so the verb counts the items, not the people buying them.",
        [
          ["—¿Cuánto cuestan los zapatos negros?", "How much are the black shoes? (several shoes: cuestan)"],
          ["—Cuestan sesenta euros.", "They're sixty euros."],
        ],
        [
          mc(
            "\"How much is this jacket?\"",
            ["¿Cuánto cuesta esta chaqueta?", "¿Cuánto cuestan esta chaqueta?", "¿Cuánta cuesta esta chaqueta?", "¿Cuánto es estas chaquetas?"],
            0,
            "One jacket, so cuesta, and cuánto stays masculine here. \"Cuestan\" is plural, \"Cuánta\" doesn't agree with anything, and \"estas chaquetas\" is plural."
          ),
          fb("Complete with cuesta or cuestan.", "¿Cuánto ___ el sombrero?", "cuesta", "One hat is one item, so the singular cuesta. Cuestan is for more than one thing."),
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
        "Adjectives agree with the noun: zapatos is masculine, so baratos, and camisas is feminine, so blancas. \"Son baratas\" and \"blancos\" are wrong; the other two are correct."
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
        [
          "Remember the rule: location uses estar plus a place phrase. Most place phrases end in de (cerca de, lejos de, enfrente de, al lado de), and de + el merges into del. Entre is the exception: no de.",
          "Your mission: read this description of the neighborhood, picture the map, then use it to give directions.",
        ],
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
            "\"La farmacia está entre el banco y el café\", so it's the pharmacy, not the school, park or supermarket."
          ),
          fb("Complete the directions with de + el.", "La escuela está lejos ___ banco.", "del", "Lejos de + el banco merges into del. (With la nothing merges: lejos de la plaza.)"),
          mc(
            "A tourist in the park asks where to get a coffee. What do you say?",
            ["Está enfrente del parque.", "Está entre el parque.", "Es enfrente del parque.", "Está enfrente de el parque."],
            0,
            "The café is across from the park: está enfrente del parque. \"Entre\" needs two places, \"es\" uses ser for a location, and \"de el\" must merge into del."
          ),
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
        "Most place words keep de (enfrente de, lejos de, cerca de); entre is the one that doesn't take de."
      ),
      fb("Complete the direction.", "El banco está a la izquierda ___ la farmacia.", "de", "A la izquierda de = to the left of. La doesn't contract."),
      fb("Complete the direction.", "El hotel está al lado ___ museo.", "del", "Al lado de + el museo → del museo."),
      mc(
        "\"The park is far from the station.\"",
        ["El parque está lejos de la estación.", "El parque es lejos de la estación.", "El parque está lejos la estación.", "El parque está lejos del la estación."],
        0,
        "Location takes estar, and lejos de + la stays separate: está lejos de la estación. \"Es lejos\" uses ser, \"lejos la\" drops de, and \"del la\" doubles the article."
      ),
      ms(
        "Which are correct?",
        ["Vivo cerca del hospital.", "Trabajo entre de dos tiendas.", "El gato está debajo de la cama.", "El cine está a la derecha del banco."],
        [0, 2, 3],
        "Entre never takes de: entre dos tiendas, so \"entre de\" is wrong. The other three are correct."
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
        [
          "English puts the owner first with 's (Ana's car). Spanish has no 's at all, so it puts the thing first and the owner after de: el coche de Ana, literally \"the car of Ana\".",
          "Because de comes right before the owner, de + el merges into del when the owner has el: el libro del profesor.",
        ],
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
            "Possession is thing + de + owner: el cuarto de mi hermano. \"Mi hermano cuarto\" copies English order, \"el hermano de mi cuarto\" is backwards, and \"el cuarto mi hermano\" drops de."
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
      fb("Translate the possessive.", "Es la casa ___ mis abuelos. (my grandparents' house)", "de", "Possession in Spanish is thing + de + owner: la casa de mis abuelos. There's no 's."),
      fb("Translate the possessive.", "Son los libros ___ profesor. (the teacher's books)", "del", "De + el profesor → del profesor."),
      mc(
        "\"Carmen's children are tall.\"",
        ["Los hijos de Carmen son altos.", "Carmen hijos son altos.", "Los Carmen hijos son altos.", "Los hijos de Carmen es altos."],
        0,
        "Possession is thing + de + owner (los hijos de Carmen), and ser agrees with hijos: son. \"Carmen hijos\" copies English 's order, and \"es\" is singular."
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
        [
          "The answer you want decides the question word: a place → dónde, a person → quién, a number → cuántos, a thing or activity → qué. A good interview uses a different one each time.",
          "When it's your turn to answer, reuse the verb from the question in the yo form: ¿Dónde vives? → Vivo en...",
        ],
        [
          ["¿Cómo te llamas?", "What's your name?"],
          ["¿De dónde eres?", "Where are you from?"],
          ["¿Cuántos años tienes?", "How old are you?"],
          ["¿Qué te gusta hacer?", "What do you like to do?"],
        ],
        [
          fb("Write the next question.", "¿___ vives? —Vivo en el barrio de Palermo.", "Dónde", "The answer is a place, so the question word is dónde."),
          fb("Write the next question.", "¿Con ___ vives? —Con mi novia y mi gato.", "quién", "Who you live with → con quién."),
        ]
      ),
      sec(
        "Now you're interviewed",
        "Your coworker asks you the same questions. Answer each one in a complete sentence, switching the verb to the yo form: ¿Tienes...? → Tengo...",
        [
          ["—¿Cuál es tu comida favorita? —Mi comida favorita es la pasta.", "What's your favorite food? My favorite food is pasta."],
        ],
        [
          mc(
            "\"¿Cuántos hermanos tienes?\" The best answer is…",
            ["Tengo dos hermanos.", "Soy dos hermanos.", "Hay dos hermanos.", "Tengo dos años."],
            0,
            "The question uses tener, so the answer does too: tengo dos hermanos. \"Soy dos hermanos\" uses ser, \"Hay\" means there are, and \"dos años\" answers a question about age."
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
        "¿En qué trabajas? asks what you do for work. \"¿Dónde eres?\" isn't a real question, and \"¿Cuál trabajas?\" and \"¿Quién trabajas?\" use the wrong question word."
      ),
      toEs("What is your phone number?", "¿Cuál es tu número de teléfono?", "Cuál, not qué, before es when asking for specific information.", ["¿Cuál es su número de teléfono?"]),
      toEn("¿Qué haces los fines de semana?", "What do you do on weekends?", "Haces is the tú form of hacer (to do/make), and los fines de semana means on weekends.", ["What do you do on the weekends?", "What do you do at the weekend?"]),
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
        [
          "Before ser, use qué to ask for a definition and cuál to pick out a specific one. ¿Qué es la paella? asks what paella is. ¿Cuál es tu plato favorito? asks which one.",
          "Why? Cuál literally means \"which one\", so it needs a set to pick from (colors, names, cities, numbers). Qué asks what something is.",
        ],
        [
          ["¿Qué es un aguacate?", "What is an avocado? (definition)"],
          ["¿Cuál es tu dirección?", "What is your address? (the specific one)"],
        ],
        [
          mc(
            "\"___ es tu color favorito?\"",
            ["¿Cuál", "¿Qué", "¿Quién", "¿Cuánto"],
            0,
            "Before es, cuál picks one from the set of colors. \"Qué es\" would ask for a definition, \"Quién\" asks who, and \"Cuánto\" asks how much."
          ),
        ]
      ),
      sec(
        "Three kinds of where",
        [
          "Dónde = where (location). Adónde = to where (with movement verbs like ir). De dónde = from where (origin).",
          "The little word inside tells you which: adónde contains a (to), as in ir a; de dónde contains de (from), as in ser de.",
        ],
        [
          ["¿Dónde estás?", "Where are you?"],
          ["¿Adónde vas?", "Where are you going?"],
          ["¿De dónde eres?", "Where are you from?"],
        ],
        [
          fb("Complete the question.", "¿___ van ustedes este verano?", "Adónde", "Ir is movement toward a place, so the question word is adónde."),
        ]
      ),
    ],
    [
      fb("Complete the question.", "¿___ es tu profesora? —Es de Uruguay.", "De dónde", "The answer gives origin (de Uruguay), so the question is de dónde."),
      fb("Complete the question.", "¿___ está el baño?", "Dónde", "Asking for location uses dónde, with estar."),
      mc(
        "\"___ es la capital de Perú?\"",
        ["¿Cuál", "¿Qué", "¿Dónde", "¿Cómo"],
        0,
        "Before es, cuál picks one specific item from a set (the answer is Lima). \"Qué es\" would ask for a definition, \"Dónde\" asks where, and \"Cómo\" asks how."
      ),
      mc(
        "\"___ es un 'chivito'?\" (asking for a definition)",
        ["¿Qué", "¿Cuál", "¿Quién", "¿Adónde"],
        0,
        "Asking what something is (a definition) uses qué. \"Cuál\" is for picking from options, \"Quién\" asks who, and \"Adónde\" asks where to."
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
      toEs("Where are you (informal) going tonight?", "¿Adónde vas esta noche?", "With movement toward a place (ir), use adónde; vas is the tú form of ir.", ["¿Adónde vas tú esta noche?", "¿A dónde vas esta noche?"]),
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
        [
          "When you change who likes something, only the pronoun moves: me, te, le, nos, os, les. The verb stays gusta or gustan.",
          "Why? The verb agrees with the thing liked, and the thing hasn't changed. The pronoun only says who it pleases.",
        ],
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
      fb("Change \"you\" (tú) to \"you all\" (vosotros).", "Te gustan las películas. → ___ gustan las películas.", "Os", "The pronoun for vosotros (you all, Spain) is os: os gustan."),
      fb("Change \"he\" to \"I.\"", "A él le encanta cocinar. → A mí ___ encanta cocinar.", "me", "A mí goes with the pronoun me: a mí me encanta."),
      mc(
        "Transform \"Me interesa la historia\" → \"They are interested in history.\"",
        ["Les interesa la historia.", "Les interesan la historia.", "Le interesa la historia.", "Ellos interesan la historia."],
        0,
        "Ellos takes les, and la historia is singular, so interesa. \"Interesan\" is plural, \"Le\" is for one person, and \"Ellos interesan\" uses a subject instead of les."
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
        "Los tacos is plural, so the verb stays gustan whoever likes them: te gustan, a ella le gustan. \"Nos gustamos\" conjugates for the likers, and \"Les gusta los tacos\" is singular with a plural thing."
      ),
      toEs("We love dogs but they don't like cats.", "Nos encantan los perros pero no les gustan los gatos.", "Both verbs agree with the plural things liked.", ["Nos encantan los perros, pero a ellos no les gustan los gatos.", "Nos encantan los perros pero a ellos no les gustan los gatos."]),
      wo("A usted le gusta el café con leche.", "A usted + le + gusta + singular thing.", "You (formal) like coffee with milk."),
    ]
  ),
  L(
    "gustar-drill-3",
    "a1r-mission-dinner-for-friends",
    "Real-World Mission: Planning a Dinner for Friends",
    "Your friends each have likes and dislikes. Use gustar, encantar and interesar to plan a menu everyone can eat.",
    "8 min",
    [
      sec(
        "The guest list",
        [
          "Remember the rule: the verb agrees with the food, not with the guest (A Luis no le gustan las verduras), and a + name + le / les tells you who.",
          "Read the notes about each guest, then use them to plan the menu.",
        ],
        [
          ["A Marta le encanta el pescado.", "Marta loves fish."],
          ["A Luis no le gustan las verduras.", "Luis doesn't like vegetables."],
          ["A los gemelos les gusta todo, menos la carne.", "The twins like everything except meat."],
        ],
        [
          mc(
            "Which dish could Luis have a problem with?",
            ["Una ensalada de verduras", "Pescado con arroz", "Pasta con queso", "Helado de chocolate"],
            0,
            "Luis doesn't like vegetables, so a vegetable salad is the problem. Fish with rice, pasta with cheese and chocolate ice cream have no vegetables."
          ),
          fb("Marta loves fish. Complete the note about the starter.", "A Marta le ___ las sardinas.", "encantan", "Las sardinas is plural, so encantan. The verb agrees with the food, not with Marta."),
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
        "Pattern: a + person + no + le + verb, and la comida picante is singular, so gusta. \"Marta no gusta\" drops le, \"gustan\" is plural, and \"les\" is for more than one person."
      ),
      ms(
        "Which lines could go in your party notes?",
        ["A todos les gusta la pizza.", "A Luis le encantan el arroz.", "No nos interesa el fútbol.", "A mí me gustan las fresas."],
        [0, 2, 3],
        "El arroz is singular, so it's le encanta el arroz; \"A Luis le encantan el arroz\" is wrong. The other three agree correctly."
      ),
      toEs("My friends love Mexican food.", "A mis amigos les encanta la comida mexicana.", "La comida is singular → encanta.", ["A mis amigas les encanta la comida mexicana."]),
      toEn("¿Te interesa cocinar conmigo?", "Are you interested in cooking with me?", "Interesar + infinitive; conmigo = with me.", ["Do you want to cook with me?"]),
      wo("A todos mis amigos les gusta el chocolate.", "A + people + les + gusta + singular thing.", "All my friends like chocolate."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-drill-3",
    "a1r-mission-weather-report",
    "Real-World Mission: The Weather Report",
    "Read a weekend forecast and decide what everyone is going to do — hacer, hay, tener and ir a together.",
    "8 min",
    [
      sec(
        "The forecast",
        [
          "Remember the rule: weather is hace + noun (hace sol, hace calor, hace frío, hace viento, hace buen / mal tiempo); rain and snow have their own verbs (llueve, nieva).",
          "For tomorrow's weather use ir a + the weather verb: va a hacer frío, va a llover. It's always va, because weather has no subject.",
        ],
        [
          ["El sábado hace sol y mucho calor.", "On Saturday it's sunny and very hot."],
          ["El domingo hace viento y hace frío.", "On Sunday it's windy and cold."],
        ],
        [
          mc(
            "What's the weather like on Sunday?",
            ["Windy and cold", "Sunny and hot", "Rainy", "Nice"],
            0,
            "\"Hace viento y hace frío\" means it's windy and cold. It isn't sunny, hot or rainy."
          ),
          fb("Complete the forecast.", "Mañana ___ a llover.", "va", "Future weather is ir a + infinitive, and weather has no subject, so always va: va a llover.", "Ir, but which form?"),
        ]
      ),
      sec(
        "Making plans",
        "Three verbs, three jobs: the weather (hace frío), how a person feels (tener frío), and the plan (ir a + infinitive). Read the forecast, then decide.",
        [
          ["Si hace calor, vamos a ir a la piscina.", "If it's hot, we're going to go to the pool. (weather → plan)"],
          ["El domingo voy a estar en casa porque va a hacer frío.", "On Sunday I'm going to be at home because it's going to be cold."],
          ["Hace viento y mi abuela tiene frío.", "It's windy and my grandmother is cold. (the weather: hace; a person: tiene)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El sábado hace sol, así que ___ a jugar al tenis.", answer: "vamos", en: "On Saturday it's sunny, so [we're going] to play tennis.", explanation: "Nosotros → vamos a + infinitive." },
          mc("The forecast says \"Mañana va a llover.\" Your friend wants plans for tomorrow. You say…", ["Vamos a ver una película en casa.", "Vamos a la playa porque hace sol.", "Tengo calor, vamos a nadar.", "Va a nevar, vamos a esquiar."], 0, "Va a llover = it's going to rain, so a plan indoors fits: vamos a ver una película. The others assume sun, heat or snow."),
        ]
      ),
    ],
    [
      fb("Complete the forecast.", "El lunes ___ mucho viento.", "hace", "Weather expressions use hacer: hace viento, and viento is a noun, so mucho."),
      fb("Complete with tener.", "Hace mucho sol y los niños ___ calor.", "tienen", "People feeling hot → tener calor. The weather itself is hace."),
      mc(
        "\"It's very cold today.\"",
        ["Hoy hace mucho frío.", "Hoy hace muy frío.", "Hoy está mucho frío.", "Hoy es mucho frío."],
        0,
        "Frío is a noun here, so it takes mucho, not muy, with hace: hace mucho frío. \"Muy frío\" treats it as an adjective, and \"está\" and \"es\" aren't used for weather like this."
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
      mc("The report says: \"No hay nubes y hace calor.\" What do you take?", ["Sunglasses and water", "An umbrella", "A warm coat", "Snow boots"], 0, "No hay nubes = there are no clouds (hay for things in the sky) and hace calor = it's hot: sunny, hot weather."),
      wo("Mañana va a hacer mucho viento en la costa.", "Ir a + hacer for future weather.", "Tomorrow it's going to be very windy on the coast."),
      toEs("Hoy hace frío.", "Mañana va a hacer frío.", "Future weather: va a + the infinitive hacer. Hace becomes hacer after va a.", ["Mañana hará frío."], "Change it to tomorrow with ir a."),
      toEs("Hace frío y estoy frío.", "Hace frío y tengo frío.", "A person feeling cold is tener frío. Estar frío would mean you are cold to the touch, like soup.", ["Hace frío y yo tengo frío."], "Correct the sentence."),
      toEs("Mañana van a hacer mucho calor.", "Mañana va a hacer mucho calor.", "Weather has no subject, so ir stays in the él form: va a hacer, even with mucho calor.", [], "Correct the sentence."),
    ]
  ),
  L(
    "tener-ir-hacer-hay-drill-3",
    "a1r-error-hunt-tener-ir-hacer-hay",
    "Error Hunt: Tener, Ir, Hacer & Hay",
    "Where English says \"to be,\" Spanish often doesn't. Catch the slips learners make with these four workhorses.",
    "7 min",
    [
      {
        "heading": "\"To be\" isn't always ser or estar",
        "body": [
          "English uses \"to be\" for all of these, but Spanish sees them differently: age, hunger and cold are things you HAVE (tener), weather is something the day MAKES (hace), and \"there is / are\" is hay. Learners reach for ser or estar out of habit."
        ],
        "examples": [
          {
            "es": "✗ Soy veinte años. → ✓ Tengo veinte años.",
            "en": "I'm twenty."
          },
          {
            "es": "✗ Es frío hoy. → ✓ Hace frío hoy.",
            "en": "It's cold today."
          },
          {
            "es": "✗ Están dos gatos. → ✓ Hay dos gatos.",
            "en": "There are two cats."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Fix «Estoy hambre.»",
            "options": [
              "Tengo hambre.",
              "Soy hambre.",
              "Hay hambre.",
              "Hago hambre."
            ],
            "correctIndex": 0,
            "explanation": "Hunger is something you have: tengo hambre. Soy is the same ser mistake, hay would mean hunger exists, and hacer is for weather."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Correct the sentence.",
            "source": "Mi hijo es diez años.",
            "answer": "Mi hijo tiene diez años.",
            "explanation": "Age is a number of years you have: tener ... años, never ser."
          }
        ]
      },
      {
        "heading": "Ir a needs the a",
        "body": [
          "Ir a + infinitive: the little word a is required, because ir always goes \"to\" something, even a plan. And don't conjugate the second verb: only ir shows the person."
        ],
        "examples": [
          {
            "es": "✗ Voy estudiar. → ✓ Voy a estudiar.",
            "en": "I'm going to study."
          },
          {
            "es": "✗ Vamos a comemos. → ✓ Vamos a comer.",
            "en": "We're going to eat."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Add the missing word.",
            "sentence": "Ellos van ___ viajar en junio.",
            "answer": "a",
            "explanation": "Ir a + infinitive: van a viajar. The a can never be dropped."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Change to nosotros.",
            "source": "Ella va a cocinar.",
            "answer": "Vamos a cocinar.",
            "altAnswers": [
              "Nosotros vamos a cocinar.",
              "Nosotras vamos a cocinar."
            ],
            "explanation": "Only ir changes for the person (va → vamos); cocinar stays an infinitive."
          }
        ]
      }
    ],
    [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Mi abuela es noventa años.",
        "answer": "Mi abuela tiene noventa años.",
        "explanation": "Age takes tener: tiene noventa años."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "En verano es mucho calor aquí.",
        "answer": "En verano hace mucho calor aquí.",
        "altAnswers": [
          "En verano aquí hace mucho calor.",
          "Aquí hace mucho calor en verano."
        ],
        "explanation": "Weather takes hace + noun, not es."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "En mi clase son veinte estudiantes.",
        "answer": "En mi clase hay veinte estudiantes.",
        "altAnswers": [
          "Hay veinte estudiantes en mi clase."
        ],
        "explanation": "To say how many people exist somewhere, use hay."
      },
      {
        "type": "multi-select",
        "question": "Which sentences are correct?",
        "options": [
          "Hay muchas tiendas en el centro.",
          "Voy a cocinar esta noche.",
          "Hace calor, tengo que beber agua.",
          "Tenemos que estudiamos."
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Tener que, like ir a, is followed by an infinitive: tenemos que estudiar. The other three use hay, ir a and hace correctly."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence has NO error?",
        "options": [
          "¿Qué vas a hacer mañana?",
          "¿Qué vas hacer mañana?",
          "¿Qué vas a haces mañana?",
          "¿Qué va a hacer tú mañana?"
        ],
        "correctIndex": 0,
        "explanation": "Vas (tú) + a + infinitive. The others drop the a, conjugate the second verb, or use va with tú."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "There's a lot of traffic and I'm in a hurry.",
        "answer": "Hay mucho tráfico y tengo prisa.",
        "altAnswers": [
          "Hay mucho tráfico y tengo mucha prisa."
        ],
        "explanation": "Existence takes hay; being in a hurry is tener prisa."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "No",
          "hace",
          "frío",
          "pero",
          "tengo",
          "mucho",
          "sueño."
        ],
        "translation": "It isn't cold but I'm very sleepy.",
        "explanation": "Weather with hace; sleepiness with tener."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Soy veinticinco años.",
        "answer": "Tengo veinticinco años.",
        "altAnswers": [
          "Yo tengo veinticinco años."
        ],
        "explanation": "Age uses tener, not ser."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Es sol hoy.",
        "answer": "Hace sol hoy.",
        "altAnswers": [
          "Hoy hace sol."
        ],
        "explanation": "Weather uses hace + noun: hace sol."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Están tres libros en la mesa.",
        "answer": "Hay tres libros en la mesa.",
        "explanation": "New things that exist are introduced with hay, not están."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Voy comer pizza.",
        "answer": "Voy a comer pizza.",
        "altAnswers": [
          "Yo voy a comer pizza."
        ],
        "explanation": "Ir a + infinitive needs the a."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Vamos a bailamos.",
        "answer": "Vamos a bailar.",
        "explanation": "Only ir is conjugated; the second verb stays an infinitive."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Estoy miedo.",
        "answer": "Tengo miedo.",
        "altAnswers": [
          "Yo tengo miedo."
        ],
        "explanation": "Fear is a noun you have: tener miedo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change to ella.",
        "source": "Tengo frío.",
        "answer": "Tiene frío.",
        "altAnswers": [
          "Ella tiene frío."
        ],
        "explanation": "The person changes, the structure doesn't: tener frío → ella tiene frío."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to describe the weather, not a person.",
        "source": "Tenemos frío.",
        "answer": "Hace frío.",
        "altAnswers": [
          "Hoy hace frío."
        ],
        "explanation": "A person feeling cold is tener frío; the weather being cold is hace frío."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it negative.",
        "source": "Hay muchos coches.",
        "answer": "No hay muchos coches.",
        "altAnswers": [
          "No hay muchos carros."
        ],
        "explanation": "No goes before hay."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change to tú.",
        "source": "Mi hermana tiene sueño.",
        "answer": "Tienes sueño.",
        "altAnswers": [
          "Tú tienes sueño."
        ],
        "explanation": "Tú takes tienes; sueño still goes with tener."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to a plan with ir a.",
        "source": "Haces la cena.",
        "answer": "Vas a hacer la cena.",
        "altAnswers": [
          "Tú vas a hacer la cena."
        ],
        "explanation": "Ir takes the person (tú: vas), then a, then hacer in the infinitive."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Tenemos",
          "hambre",
          "y",
          "vamos",
          "a",
          "comer"
        ],
        "translation": "We're hungry and we're going to eat",
        "explanation": "Tener hambre, then ir a + infinitive."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence has NO error?",
        "options": [
          "Hay dos parques en mi ciudad.",
          "Son dos parques en mi ciudad.",
          "Están dos parques en mi ciudad.",
          "Hayn dos parques en mi ciudad."
        ],
        "correctIndex": 0,
        "explanation": "Existence takes hay, which never changes for plurals. Son and están don't introduce new things, and \"hayn\" doesn't exist."
      },
      {
        "type": "multiple-choice",
        "question": "What's wrong with «Estamos sed»?",
        "options": [
          "Thirst takes tener: tenemos sed.",
          "Sed needs an article.",
          "It should be somos sed.",
          "Nothing."
        ],
        "correctIndex": 0,
        "explanation": "Sed is a noun you have: tenemos sed. It needs no article, and ser is the same \"to be\" trap as estar."
      },
      {
        "type": "speak",
        "text": "Tengo treinta años, tengo hambre y hoy hace calor.",
        "prompt": "Respond aloud: say how old you are, that you're hungry, and that it's hot today.",
        "explanation": "Age and hunger take tener; the weather takes hace."
      }
    ]
  ),
  L(
    "numbers-time-drill-3",
    "a1r-mission-weekly-schedule",
    "Real-World Mission: Your Weekly Schedule",
    "Days of the week, times, and routines — plan a week at a new job.",
    "8 min",
    [
      {
        "heading": "Days of the week",
        "body": [
          "Remember the rule: with days, the article does the work of English \"on\": el lunes = on (this) Monday, los lunes = on Mondays, every week. Never add en. Days are masculine and lowercase.",
          "From ... to ... is de ... a ...: de lunes a viernes, de nueve a cinco."
        ],
        "examples": [
          {
            "es": "El lunes tengo una reunión.",
            "en": "On Monday I have a meeting. (this Monday)"
          },
          {
            "es": "Los martes trabajo en casa.",
            "en": "On Tuesdays I work from home. (every Tuesday)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "\"I go to the gym on Fridays\" (every Friday).",
            "options": [
              "Voy al gimnasio los viernes.",
              "Voy al gimnasio el viernes.",
              "Voy al gimnasio en viernes.",
              "Voy al gimnasio en los viernes."
            ],
            "correctIndex": 0,
            "explanation": "A weekly habit takes the plural article: los viernes. El viernes is one particular Friday, and Spanish never puts en before a day."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Change it to every week.",
            "source": "El jueves tengo yoga.",
            "answer": "Los jueves tengo yoga.",
            "explanation": "Every week takes the plural article: los jueves. Jueves doesn't change, since it already ends in -s."
          }
        ]
      },
      {
        "heading": "Marta's schedule",
        "body": [
          "Read Marta's work schedule, then use it to answer questions and fix her notes."
        ],
        "examples": [
          {
            "es": "Lunes a jueves: de nueve a cinco.",
            "en": "Monday to Thursday: nine to five."
          },
          {
            "es": "Viernes: de nueve a una.",
            "en": "Friday: nine to one."
          },
          {
            "es": "Sábados y domingos: libre.",
            "en": "Saturdays and Sundays: free."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "—¿Trabajas los sábados? —No, los sábados ___ libre.",
            "answer": "estoy",
            "en": "—Do you work on Saturdays? —No, on Saturdays I['m] free.",
            "explanation": "Being free is a state: estar libre."
          },
          {
            "type": "multiple-choice",
            "question": "According to the schedule, when does Marta finish on Thursdays?",
            "options": [
              "At five",
              "At one",
              "At nine",
              "She doesn't work on Thursdays"
            ],
            "correctIndex": 0,
            "explanation": "Lunes a jueves: de nueve a cinco, so she finishes at five. One o'clock is only on Fridays, and nine is when she starts."
          }
        ]
      }
    ],
    [
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "—¿A qué hora terminas el viernes? —Termino a la ___.",
        "answer": "una",
        "en": "—What time do you finish on Friday? —I finish at [one].",
        "explanation": "One o'clock is singular: a la una."
      },
      {
        "type": "matching",
        "instructions": "Match the English to the Spanish.",
        "pairs": [
          {
            "left": "on Wednesday",
            "right": "el miércoles"
          },
          {
            "left": "on Wednesdays",
            "right": "los miércoles"
          },
          {
            "left": "on weekends",
            "right": "los fines de semana"
          }
        ],
        "explanation": "The singular article picks one day, the plural one means every week."
      },
      {
        "type": "multiple-choice",
        "question": "Which is correct?",
        "options": [
          "El sábado voy a la playa.",
          "En el sábado voy a la playa.",
          "El Sábado voy a la playa.",
          "Sábado voy en la playa."
        ],
        "correctIndex": 0,
        "explanation": "The article alone means \"on\" (no en), and days are lowercase. \"Sábado voy en la playa\" drops the article and uses the wrong preposition with ir."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "La reunión es a las ___ y cuarto.",
        "answer": "tres",
        "en": "The meeting is at a quarter past [three].",
        "explanation": "A las + hour + y cuarto."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I work from Monday to Friday.",
        "answer": "Trabajo de lunes a viernes.",
        "explanation": "A range of days is de ... a ..., with no article."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "Los domingos comemos con mis abuelos.",
        "answer": "On Sundays we eat with my grandparents.",
        "altAnswers": [
          "We eat with my grandparents on Sundays.",
          "On Sundays we have lunch with my grandparents."
        ],
        "explanation": "Los domingos = every Sunday."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Los",
          "jueves",
          "tengo",
          "clase",
          "de",
          "yoga",
          "a",
          "las",
          "siete."
        ],
        "translation": "On Thursdays I have yoga class at seven.",
        "explanation": "Weekly day first, then the activity and the time."
      },
      {
        "type": "multiple-choice",
        "question": "A friend asks Marta: «¿Trabajas el viernes por la tarde?» Which reply matches the schedule?",
        "options": [
          "No, el viernes trabajo de nueve a una.",
          "Sí, trabajo de nueve a cinco.",
          "No, los viernes estoy libre todo el día.",
          "Sí, el viernes trabajo hasta las ocho."
        ],
        "correctIndex": 0,
        "explanation": "On Fridays she works de nueve a una, so the afternoon is free. Nine to five is Monday to Thursday, and she does work on Friday mornings."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to this Wednesday only.",
        "source": "Los miércoles tengo clase.",
        "answer": "El miércoles tengo clase.",
        "altAnswers": [
          "Este miércoles tengo clase."
        ],
        "explanation": "One particular day takes the singular article: el miércoles."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to every week.",
        "source": "El martes voy al gimnasio.",
        "answer": "Los martes voy al gimnasio.",
        "altAnswers": [
          "Voy al gimnasio los martes."
        ],
        "explanation": "Every week takes los: los martes."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it negative.",
        "source": "Trabajo los fines de semana.",
        "answer": "No trabajo los fines de semana.",
        "explanation": "No goes right before the verb."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "On Thursdays I work from nine to five.",
        "answer": "Los jueves trabajo de nueve a cinco.",
        "altAnswers": [
          "Los jueves trabajo de las nueve a las cinco.",
          "Trabajo de nueve a cinco los jueves."
        ],
        "explanation": "Los jueves for every Thursday; de ... a ... for the hours."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "En sábado estoy libre.",
        "answer": "El sábado estoy libre.",
        "explanation": "Spanish never puts en before a day: the article alone means \"on\"."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "La reunión es el jueves en las diez.",
        "answer": "La reunión es el jueves a las diez.",
        "explanation": "At a clock time is a las, not en las."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "We go to the market on Sundays.",
        "answer": "Vamos al mercado los domingos.",
        "altAnswers": [
          "Los domingos vamos al mercado."
        ],
        "explanation": "Every Sunday is los domingos."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Turn it into a question for tú.",
        "source": "Estudio los jueves.",
        "answer": "¿Estudias los jueves?",
        "altAnswers": [
          "¿Tú estudias los jueves?"
        ],
        "explanation": "Tú takes the -as ending: estudias. The day stays los jueves."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "En lunes tengo clase de inglés.",
        "answer": "Los lunes tengo clase de inglés.",
        "altAnswers": [
          "El lunes tengo clase de inglés."
        ],
        "explanation": "Drop en: the article means \"on\". Los lunes for every Monday (el lunes would be one Monday)."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Trabajo de lunes ___ jueves.",
        "answer": "a",
        "en": "I work Monday [to] Thursday.",
        "explanation": "Ranges use de ... a ..."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Este Sábado voy a la playa.",
        "answer": "Este sábado voy a la playa.",
        "explanation": "Days of the week are lowercase in Spanish."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "En ___, de lunes a jueves trabajo treinta y dos horas.",
        "answer": "total",
        "en": "[In total], from Monday to Thursday I work thirty-two hours.",
        "explanation": "En total = in total: four days of nine to five is 4 × 8 = treinta y dos horas."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "El ___ es el primer día de la semana.",
        "answer": "lunes",
        "en": "[Monday] is the first day of the week.",
        "explanation": "Spanish calendars start the week on lunes."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Los",
          "miércoles",
          "voy",
          "a",
          "clase",
          "de",
          "baile"
        ],
        "translation": "On Wednesdays I go to dance class",
        "explanation": "Los + day comes first for a weekly habit."
      },
      {
        "type": "multiple-choice",
        "question": "\"I'm going to the doctor on Friday\" (this Friday).",
        "options": [
          "Voy al médico el viernes.",
          "Voy al médico los viernes.",
          "Voy al médico en viernes.",
          "Voy al médico en el Viernes."
        ],
        "correctIndex": 0,
        "explanation": "One particular Friday is el viernes; los viernes would mean every Friday. Never en before a day, and no capital letter."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct Marta's note so it matches the schedule.",
        "source": "Los viernes trabajo de nueve a cinco.",
        "answer": "Los viernes trabajo de nueve a una.",
        "explanation": "Check the schedule: on Fridays Marta works de nueve a una. Nine to five is Monday to Thursday."
      },
      {
        "type": "speak",
        "text": "Los sábados voy al mercado con mi madre.",
        "prompt": "Respond aloud: ¿Qué haces los sábados? Give one weekly habit.",
        "explanation": "A weekly habit takes the plural article: los sábados."
      }
    ]
  ),
  L(
    "numbers-time-drill-3",
    "a1r-contrast-cardinal-ordinal",
    "Contrast Clinic: One vs. First, Three vs. Third",
    "Counting numbers and order numbers side by side — plus the shortened forms primer and tercer.",
    "7 min",
    [
      {
        "heading": "How many vs. which one",
        "body": [
          "Cardinal numbers (uno, dos, tres) answer \"how many?\". Ordinal numbers (primero, segundo, tercero) answer \"which one in the line?\", and they are adjectives: they agree with the noun (la segunda puerta), and primero / tercero shorten to primer / tercer before a masculine singular noun."
        ],
        "examples": [
          {
            "es": "Tengo tres hermanos.",
            "en": "I have three siblings. (how many)"
          },
          {
            "es": "Es mi tercer hermano.",
            "en": "He's my third brother. (which one)"
          },
          {
            "es": "Vivo en el quinto piso.",
            "en": "I live on the fifth floor."
          },
          {
            "es": "Es la segunda puerta.",
            "en": "It's the second door. (feminine: segunda)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "\"It's the second street on the left.\"",
            "options": [
              "Es la segunda calle a la izquierda.",
              "Es la dos calle a la izquierda.",
              "Es el segundo calle a la izquierda.",
              "Es la segundo calle a la izquierda."
            ],
            "correctIndex": 0,
            "explanation": "Which street in order needs the ordinal, agreeing with calle (feminine): la segunda. Dos only counts, and el / segundo are masculine."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Change it to say which one in order.",
            "source": "Es la clase número cuatro.",
            "answer": "Es la cuarta clase.",
            "explanation": "Position in a line takes the ordinal, agreeing with clase: la cuarta."
          }
        ]
      },
      {
        "heading": "Dates use cardinals, except the first",
        "body": [
          "Spanish dates use ordinary numbers: el dos, el quince, el treinta. Only the first of the month can be el primero (usual in Latin America; in Spain el uno is more common)."
        ],
        "examples": [
          {
            "es": "Hoy es el quince.",
            "en": "Today is the fifteenth."
          },
          {
            "es": "Mañana es el primero.",
            "en": "Tomorrow is the first."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "Mi cumpleaños es el ___.",
            "answer": "diez",
            "en": "My birthday is on the [tenth].",
            "explanation": "Dates use cardinals: el diez, never el décimo."
          }
        ]
      }
    ],
    [
      {
        "type": "matching",
        "instructions": "Match each cardinal to its ordinal.",
        "pairs": [
          {
            "left": "uno",
            "right": "primero"
          },
          {
            "left": "tres",
            "right": "tercero"
          },
          {
            "left": "cinco",
            "right": "quinto"
          }
        ],
        "explanation": "Uno → primero, tres → tercero, cinco → quinto: the ordinals for 1 to 3 look least like their numbers."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Es el ___ día de vacaciones.",
        "answer": "tercer",
        "en": "It's the [third] day of vacation.",
        "explanation": "Día is masculine singular, so tercero → tercer."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Vivimos en la ___ casa de la calle.",
        "answer": "quinta",
        "en": "We live in the [fifth] house on the street.",
        "explanation": "Casa is feminine, so quinto → quinta."
      },
      {
        "type": "multiple-choice",
        "question": "\"The first four students\"",
        "options": [
          "los cuatro primeros estudiantes",
          "los primeros cuarto estudiantes",
          "los cuarto primeros estudiantes",
          "los primer cuatro estudiantes"
        ],
        "correctIndex": 0,
        "explanation": "Count with the cardinal (cuatro) and order with the ordinal (primeros, plural to agree). Cuarto means fourth, and primer is only for a singular noun."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I live on the second floor.",
        "answer": "Vivo en el segundo piso.",
        "explanation": "Floors are positions, so they take ordinals."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Es",
          "la",
          "primera",
          "vez",
          "que",
          "estoy",
          "en",
          "Lima."
        ],
        "translation": "It's the first time I'm in Lima.",
        "explanation": "Vez is feminine: la primera vez."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change libro to clase.",
        "source": "Es mi primer libro.",
        "answer": "Es mi primera clase.",
        "explanation": "Clase is feminine, so the full feminine form primera; only masculine singular nouns get primer."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I have one class today.",
        "answer": "Tengo una clase hoy.",
        "altAnswers": [
          "Hoy tengo una clase."
        ],
        "explanation": "Counting uses the cardinal una, not primera."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "He's my second son.",
        "answer": "Es mi segundo hijo.",
        "explanation": "Order in the family uses the ordinal segundo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Es la tercer calle a la derecha.",
        "answer": "Es la tercera calle a la derecha.",
        "explanation": "Calle is feminine, so tercera. Tercer only exists before masculine singular nouns."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Hoy es el segundo.",
        "answer": "Hoy es el dos.",
        "explanation": "Dates use cardinals: el dos. Only the first can be el primero."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "My birthday is on the first.",
        "answer": "Mi cumpleaños es el primero.",
        "altAnswers": [
          "Mi cumpleaños es el uno."
        ],
        "explanation": "The first of the month can be el primero (or el uno, common in Spain)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Es el primero libro de la serie.",
        "answer": "Es el primer libro de la serie.",
        "explanation": "Before a masculine singular noun, primero loses its -o: el primer libro."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I have three brothers. Pablo is the third.",
        "answer": "Tengo tres hermanos. Pablo es el tercero.",
        "explanation": "Tres counts them; with no noun after it, the ordinal keeps its full form tercero."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Es el ___ examen del año.",
        "answer": "primer",
        "en": "It's the [first] exam of the year.",
        "explanation": "Before masculine examen, primero shortens to primer."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Vivimos en el ___ piso.",
        "answer": "cuarto",
        "en": "We live on the [fourth] floor.",
        "explanation": "Fourth is cuarto, which is also the word for \"quarter\"."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "La clase es el ___.",
        "answer": "veinte",
        "en": "The class is on the [twentieth].",
        "explanation": "Dates use cardinal numbers: el veinte."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Es la ___ semana de clases.",
        "answer": "segunda",
        "en": "It's the [second] week of classes.",
        "explanation": "Semana is feminine, so segunda."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Es",
          "mi",
          "tercer",
          "viaje",
          "a",
          "México"
        ],
        "translation": "It's my third trip to Mexico",
        "explanation": "Tercero shortens to tercer before masculine viaje."
      },
      {
        "type": "multiple-choice",
        "question": "\"Today is the tenth.\"",
        "options": [
          "Hoy es el décimo.",
          "Hoy es el diez.",
          "Hoy es la diez.",
          "Hoy es la décima."
        ],
        "correctIndex": 1,
        "explanation": "Dates use cardinals with el: el diez. Décimo is never used for dates, and dates are masculine (el día)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to the fifteenth.",
        "source": "La fiesta es el primero.",
        "answer": "La fiesta es el quince.",
        "explanation": "Apart from the first, dates use plain numbers: el quince."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Mi oficina está en el ocho piso.",
        "answer": "Mi oficina está en el octavo piso.",
        "explanation": "A floor is a position, so it takes the ordinal: octavo (eighth), not the cardinal ocho."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it plural.",
        "source": "Es el primer día.",
        "answer": "Son los primeros días.",
        "explanation": "Primer only appears before a singular noun; in the plural the full form comes back and agrees: los primeros días."
      },
      {
        "type": "speak",
        "text": "Vivo en el segundo piso y mi cumpleaños es el doce de mayo.",
        "prompt": "Respond aloud: say which floor you live on (the second) and the date of your birthday (May 12th).",
        "explanation": "The floor is a position (segundo); the date uses a cardinal (el doce)."
      }
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-family-people",
    "Word Web: Family & People",
    "Sort, connect and use Beginner's people words — family members, relationships and the people around you.",
    "8 min",
    [
      sec(
        "The idea: one word, two endings",
        [
          "Most people words come in pairs that differ only in the last letter: -o for a man, -a for a woman (tío / tía, primo / prima, nieto / nieta). Learn one and you have both. Only the oldest words are separate: padre / madre (papá / mamá).",
          "The plural in -os covers men only OR a mixed group: mis tíos can be my uncles, or my aunt and uncle; mis hijos can be my sons, or my children. Only -as means women only. That's why padres means parents.",
        ],
        [
          ["mi tío + mi tía = mis tíos", "my uncle + my aunt = my aunt and uncle (-os covers both)"],
          ["mi nieto + mi nieta = mis nietos", "my grandson + my granddaughter = my grandchildren"],
          ["mis hermanas", "my sisters (-as: women only)"],
          ["mi padre + mi madre = mis padres", "my father + my mother = my parents (two different words, one -s plural)"],
        ],
        [
          mc("Your aunt Rosa and your uncle Luis, together, are…", ["mis tíos", "mis tías", "mis padres", "mis primos"], 0, "A mixed group takes the masculine plural: tío + tía = tíos. Tías would mean only women, padres are your parents, and primos are cousins."),
          fb("Complete with the feminine form.", "Mi primo se llama Pablo y mi ___ se llama Lucía.", "prima", "Lucía is a woman, so primo swaps -o for -a: prima.", "Swap the ending."),
        ]
      ),
      sec(
        "Building the tree: X de Y",
        "Spanish has no 's. To name a relative, say the relationship + de + the person: el hermano de mi madre (my mother's brother). Work it out from the end: my mother → her brother → my uncle.",
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
            "Your mother's mother is your abuela (grandmother): a woman, so -a. \"Tía\" is your mother's sister, \"prima\" your aunt's or uncle's daughter, and \"sobrina\" your brother's or sister's daughter."
          ),
          fb("Complete the family tree.", "El hermano de mi madre es mi ___.", "tío", "Your mother's brother is your uncle: tío, with -o because he's a man."),
        ]
      ),
      sec(
        "People around you",
        "The same -o / -a pattern works beyond the family: vecino / vecina (neighbor), compañero / compañera (classmate, coworker), novio / novia (boyfriend, girlfriend), esposo / esposa (husband, wife), amigo / amiga (friend).",
        [
          ["Mi vecina es muy amable.", "My neighbor (f.) is very kind."],
          ["Mis compañeros de trabajo son simpáticos.", "My coworkers are nice. (-os: men or a mixed group)"],
        ],
        [
          ms(
            "Which words can refer to a woman?",
            ["vecina", "sobrino", "esposa", "nieta"],
            [0, 2, 3],
            "Vecina, esposa and nieta end in -a, so they refer to women. \"Sobrino\" ends in -o (nephew); the woman is sobrina."
          ),
          mc("Un niño is a boy. How do you say \"a girl\"?", ["una niña", "un niña", "una niño", "unas niños"], 0, "Same pattern on a new word: swap -o for -a and make the article match: una niña. Un niña and una niño mix a masculine piece with a feminine one."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["mesa", "tío", "prima", "abuelo"], 0, "Tío, prima and abuelo are family members; mesa is a table. (Its -a shows it's feminine, not that it's a woman: the -o / -a pair only means man / woman on people words.)"),
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
      fb("Complete the sentence.", "No tengo esposa; soy ___.", "soltero", "Not married is soltero (single); a woman would say soltera."),
      fb("Complete the sentence.", "Mis ___ son mi madre y mi padre.", "padres", "Padres, the masculine plural of padre, means parents: the masculine plural covers a mother and a father together."),
      toEs("My cousins live with my grandparents.", "Mis primos viven con mis abuelos.", "Masculine plurals cover mixed groups: primos and abuelos include women too.", ["Mis primas viven con mis abuelos."]),
      fb("Complete the family tree.", "Mi sobrina es la ___ de mi hermano.", "hija", "Your niece is your brother's daughter: hija, with -a because she's a girl."),
      wo("La novia de mi hermano es enfermera.", "Thing + de + owner, then ser + profession.", "My brother's girlfriend is a nurse."),
      toEs("Mi tío es muy simpático.", "Mi tía es muy simpática.", "Swap -o for -a on the person (tío → tía) and on the adjective that describes her (simpático → simpática).", [], "Make it feminine."),
      toEs("Mi primo vive en Lima.", "Mis primos viven en Lima.", "Mi → mis, primo → primos, and the verb follows: vive → viven. Primos can be boys or a mixed group.", ["Mis primas viven en Lima."], "Make it plural."),
      toEs("El hijo de mi tío es mi prima.", "El hijo de mi tío es mi primo.", "A son (hijo) is a man, so the relationship word ends in -o: primo. Prima is a female cousin.", [], "Correct the sentence."),
      toEs("La hermano de mi madre es mi tío.", "El hermano de mi madre es mi tío.", "Hermano is a man, so the article is el. The article always matches the person's ending: el hermano, la hermana.", [], "Correct the sentence."),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-jobs",
    "Word Web: Jobs & Workplaces",
    "Who works where? Connect Beginner's job words to their workplaces and describe what people do.",
    "7 min",
    [
      sec(
        "The idea: one job, two endings",
        [
          "Job words work like adjectives: they change their ending to match the person. A word in -o swaps it for -a (abogado → abogada). A word that ends in a consonant adds -a (profesor → profesora, doctor → doctora).",
          "Words in -ista, and most words in -e, never change. Only the article shows whether you mean a man or a woman: el artista, la artista.",
        ],
        [
          ["el abogado → la abogada", "the lawyer (-o becomes -a)"],
          ["el profesor → la profesora", "the teacher (a consonant ending adds -a)"],
          ["el artista → la artista", "the artist (-ista never changes; only el / la shows who)"],
          ["el estudiante → la estudiante", "the student (most -e words don't change either)"],
        ],
        [
          mc(
            "How do you say \"the engineer\" for a woman? (male: el ingeniero)",
            ["la ingeniera", "la ingeniero", "la ingeniería", "el ingeniero"],
            0,
            "Ingeniero ends in -o, so a woman is la ingeniera. \"La ingeniero\" changes the article but forgets the ending, \"la ingeniería\" means engineering (the subject), and \"el ingeniero\" is a man."
          ),
          toEs(
            "My aunt is a writer.",
            "Mi tía es escritora.",
            "Escritor ends in a consonant, so the feminine adds -a: escritora. No un/una after ser with a bare job.",
            ["Mi tía es una escritora."]
          ),
        ]
      ),
      sec(
        "Where job words come from: -ero and -ista",
        [
          "Many job words are built from the place or the thing the person works with. Add -ero / -era to the noun: la cocina (kitchen) → el cocinero, la cocinera (cook).",
          "Add -ista for a field, a tool or an instrument: el periódico (newspaper) → el / la periodista (journalist). Once you know the pattern you can often guess a job word you have never seen.",
        ],
        [
          ["la cocina → el cocinero, la cocinera", "kitchen → cook"],
          ["la carta → el cartero, la cartera", "letter → mail carrier"],
          ["el periódico → el / la periodista", "newspaper → journalist"],
          ["el diente → el / la dentista", "tooth → dentist"],
        ],
        [
          mc(
            "Someone who plays the guitar (la guitarra) for a living is…",
            ["guitarrista", "guitarrero", "guitarristo", "guitarra"],
            0,
            "An instrument takes -ista: guitarra → guitarrista, the same word for a man or a woman. \"Guitarristo\" wrongly turns -ista into -isto, and \"guitarra\" is the instrument itself."
          ),
          fb(
            "Complete with a job word built from zapato (shoe).",
            "Mi abuelo arregla zapatos: es ___.",
            "zapatero",
            "Thing + -ero: zapato → zapatero (shoemaker). He is a man, so -ero, and no article after es.",
            "zapato + -ero"
          ),
        ]
      ),
      sec(
        "Saying what someone does: ser, and no article",
        [
          "To say what someone does, use ser and the bare job word: Soy enfermero, Es periodista. English says \"a nurse\", Spanish drops the un / una.",
          "The article comes back as soon as you describe the person with an adjective: Es una abogada muy buena. (With buen / buena before the noun it can go again: Es muy buen profesor.) To ask about a job, say ¿En qué trabajas? (What do you do?) and answer with ser, or with trabajar en + the workplace.",
        ],
        [
          ["—¿En qué trabajas? —Soy enfermero.", "What do you do? I'm a nurse. (no un after soy)"],
          ["Mi madre es médica y trabaja en un hospital.", "My mother is a doctor and works at a hospital."],
          ["Es una abogada muy buena.", "She's a very good lawyer. (an adjective brings una back)"],
        ],
        [
          mc(
            "\"My brother is an engineer.\"",
            ["Mi hermano es ingeniero.", "Mi hermano es un ingeniero.", "Mi hermano está ingeniero.", "Mi hermano es ingeniera."],
            0,
            "Ser + profession, with no article: es ingeniero. \"Es un ingeniero\" adds an article Spanish leaves out, \"está\" is estar, and \"ingeniera\" is feminine but hermano is male."
          ),
          toEs(
            "Mi madre es una dentista.",
            "Mi madre es dentista.",
            "A bare job after ser takes no article: es dentista, not es una dentista. You'd only add una with an adjective: es una dentista excelente.",
            [],
            "Correct the sentence."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each person to their workplace.",
        [
          ["la enfermera", "el hospital"],
          ["el profesor", "la universidad"],
          ["el músico", "el concierto"],
          ["el cocinero", "el restaurante"],
        ],
        "Nurses work in hospitals, teachers at a university or school, musicians play at concerts, and a cook (cocinero, from cocina) works in a restaurant kitchen."
      ),
      mc(
        "Odd one out:",
        ["abogado", "escritor", "biblioteca", "enfermero"],
        2,
        "Biblioteca (library) is a place; abogado, escritor and enfermero are all jobs. Notice the endings: jobs end in -o or -or here, and each has a feminine form (abogada, escritora, enfermera)."
      ),
      mc(
        "Which job word stays the same for a man and a woman?",
        ["recepcionista", "camarero", "pintor", "panadero"],
        0,
        "Words in -ista never change: el recepcionista, la recepcionista. The others do: camarera (-o → -a), pintora (consonant + a), panadera (-o → -a)."
      ),
      ms(
        "Which sentences are correct?",
        ["Ella es artista.", "Él es un doctor muy bueno.", "Soy una estudiante.", "Mi padre está profesor."],
        [0, 1],
        "No article without an adjective: es artista, soy estudiante (so \"Soy una estudiante\" is wrong). With an adjective the article returns: un doctor muy bueno. A job takes ser, never estar, so \"está profesor\" is wrong."
      ),
      fb(
        "Complete with a job word built from panadería (bakery).",
        "Mi vecina trabaja en una panadería: es ___.",
        "panadera",
        "Place + -ero / -era: panadería → panadero, and a woman is panadera. No article after es with a bare job.",
        "a woman"
      ),
      fb(
        "Complete with a job word built from flor (flower).",
        "La mujer que vende flores es la ___.",
        "florista",
        "Flor + -ista = florista, the same for a man or a woman: el florista, la florista. Only the article la tells you it's a woman.",
        "-ista"
      ),
      fb(
        "Complete the sentence.",
        "Un ___ escribe libros.",
        "escritor",
        "Escritor (writer) comes from escribir (to write). For a woman, add -a to the consonant: una escritora."
      ),
      toEs(
        "Mi hermano es cocinero.",
        "Mi hermana es cocinera.",
        "Change the person and the job word follows: hermano → hermana, cocinero → cocinera (-o becomes -a).",
        [],
        "Change it to my sister."
      ),
      toEs(
        "El pintor trabaja en casa.",
        "La pintora trabaja en casa.",
        "Pintor ends in a consonant, so the feminine adds -a: la pintora. The article changes too: el → la.",
        [],
        "Make it about a woman."
      ),
      toEs(
        "Mi prima es periodista.",
        "Mi primo es periodista.",
        "Only prima → primo changes. Periodista ends in -ista, so it stays the same for a man.",
        [],
        "Change it to my (male) cousin."
      ),
      toEs(
        "Los profesores trabajan en la escuela.",
        "La profesora trabaja en la escuela.",
        "One woman: la profesora (consonant + a, no -es), and the verb goes to the singular: trabaja.",
        [],
        "Change it to one female teacher."
      ),
      toEs(
        "Mi tía es doctor.",
        "Mi tía es doctora.",
        "Doctor ends in a consonant, so a woman is doctora. Médica is also common.",
        ["Mi tía es médica."],
        "Correct the sentence."
      ),
      toEs(
        "Mi padre está abogado.",
        "Mi padre es abogado.",
        "A profession says who someone is, so it takes ser: es abogado. Estar is for states and places.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Es pintor muy famoso.",
        "Es un pintor muy famoso.",
        "With an adjective (muy famoso) the article comes back: es un pintor muy famoso. Without the adjective it would be just es pintor.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "My neighbor (f.) is a nurse and works at the hospital.",
        "Mi vecina es enfermera y trabaja en el hospital.",
        "After ser, a bare profession takes no article: es enfermera, not es una enfermera. Enfermero → enfermera for a woman.",
        ["Mi vecina es enfermera y trabaja en un hospital."]
      ),
      toEs(
        "My neighbor (m.) is a musician and plays at concerts.",
        "Mi vecino es músico y toca en conciertos.",
        "Es músico (no article); tocar is to play music. A woman musician would be música, the same word as \"music\".",
        []
      ),
      toEs(
        "The gardener (f.) works in the park.",
        "La jardinera trabaja en el parque.",
        "Jardín (garden) + -ero gives jardinero; a woman is la jardinera.",
        []
      ),
      toEs(
        "Are you (formal) a lawyer? (to a woman)",
        "¿Usted es abogada?",
        "Usted + es; abogada for a woman, with no article.",
        ["¿Es usted abogada?", "¿Es abogada?"]
      ),
      toEs(
        "I'm a student, not a teacher. (woman speaking)",
        "Soy estudiante, no profesora.",
        "No articles: soy estudiante. Estudiante doesn't change for a woman, but profesor does: profesora.",
        ["Soy estudiante, no soy profesora."]
      ),
      toEn(
        "¿En qué trabaja tu hermana? —Es taxista.",
        "What does your sister do? — She's a taxi driver.",
        "¿En qué trabaja…? asks about someone's job. Taxista is taxi + -ista, the same for a man or a woman.",
        ["What does your sister do? She's a taxi driver.", "What does your sister do? She is a taxi driver.", "What's your sister's job? She's a taxi driver."]
      ),
      wo("Los ingenieros trabajan en una oficina grande", "Trabajan for ellos; grande follows oficina.", "The engineers work in a big office"),
      wo("Los turistas visitan el museo con un guía.", "Turista is the same for men and women (-ista); el guía is a male guide, la guía a female one.", "The tourists visit the museum with a guide."),
      {
        type: "speak",
        prompt: "Say it in Spanish: My mother is a dentist and my father is a cook.",
        text: "Mi madre es dentista y mi padre es cocinero.",
        explanation: "No articles after es. Dentista stays the same for a woman; cocinero is the masculine form (a woman would be cocinera).",
      },
      {
        type: "speak",
        prompt: "Say it in Spanish: Ask a friend what they do, then answer that you are a journalist.",
        text: "¿En qué trabajas? Soy periodista.",
        explanation: "¿En qué trabajas? asks about a job. Periodista (from periódico + -ista) is the same for a man or a woman, and soy takes no article.",
      },
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
        "The idea: many rooms are named after what you do there",
        [
          "Spanish often builds a room's name from the verb for what happens in it, so you can guess rooms you've never seen. Cocinar (to cook) gives la cocina (kitchen); dormir (to sleep) gives el dormitorio (bedroom); bañarse (to bathe) gives el baño (bathroom).",
          "Gender mostly follows the ending: -a is feminine (la cocina, la cama, la lámpara), -o is masculine (el baño, el armario, el espejo). Learn the rest with their article: el sofá (an exception: -a but masculine), la pared, el sillón (armchair).",
        ],
        [
          ["Cocino en la cocina.", "I cook in the kitchen. (cocinar → cocina)"],
          ["En el dormitorio hay una cama, un armario y una lámpara.", "In the bedroom there's a bed, a wardrobe and a lamp. (dormir → dormitorio)"],
          ["En el baño hay un espejo.", "In the bathroom there's a mirror."],
        ],
        [
          mc(
            "Comer means \"to eat\". What is el comedor most likely to be?",
            ["the dining room", "the bedroom", "the garden", "the bathroom"],
            0,
            "Comer (to eat) → el comedor, the room where you eat: the dining room. Bedroom comes from dormir (el dormitorio), bathroom from bañarse (el baño)."
          ),
          ms(
            "What would you usually find in a bedroom?",
            ["la cama", "la almohada", "el armario", "el jardín"],
            [0, 1, 2],
            "La cama, la almohada and el armario are all in a bedroom. \"El jardín\" (the garden) is outside the house."
          ),
        ]
      ),
      sec(
        "Hay says something exists; estar says where a known thing is",
        [
          "Use hay (there is / there are) to introduce something new: hay + un / una / a number / nothing. Hay never changes, for one thing or ten.",
          "Once the thing is known (el, la, mi, tu…), say where it is with estar: está for one, están for more. That is why you say \"Hay una cama\" but \"La cama está en el dormitorio\".",
        ],
        [
          ["Hay una lámpara en la sala.", "There's a lamp in the living room. (new thing: hay)"],
          ["La lámpara está en la sala.", "The lamp is in the living room. (known thing: está)"],
          ["Hay tres sillas en la cocina.", "There are three chairs in the kitchen. (hay stays hay)"],
        ],
        [
          mc(
            "\"There's a sofa in the dining room.\" Which is correct?",
            ["Hay un sofá en el comedor.", "Está un sofá en el comedor.", "Es un sofá en el comedor.", "Hay el sofá en el comedor."],
            0,
            "Un sofá is new information, so hay. Está needs a known thing (el sofá está…), es doesn't give location, and hay never takes el."
          ),
          fb("Complete with hay, está or están.", "Mis zapatos ___ debajo de la cama.", "están", "Mis zapatos are specific (mi) and plural, so estar in the plural: están. Hay can't follow a known subject."),
        ]
      ),
      sec(
        "Where exactly: a place word + de",
        [
          "Most location phrases end in de: encima de (on top of), debajo de (under), al lado de (next to), dentro de (inside), cerca de (near), lejos de (far from).",
          "De + el always fuses into del (debajo del sofá), but de la never changes (debajo de la mesa).",
        ],
        [
          ["La alfombra está debajo del sofá.", "The rug is under the sofa. (de + el = del)"],
          ["El reloj está en la pared.", "The clock is on the wall. (en for on a wall)"],
          ["Las toallas están cerca de la ducha.", "The towels are near the shower. (de la stays)"],
        ],
        [
          fb("Complete the sentence.", "La lámpara está ___ del escritorio. (on top of)", "encima", "Encima de + el escritorio → encima del escritorio."),
          fb("Complete the sentence.", "El gato duerme debajo ___ mesa.", "de la", "Mesa is feminine: de + la doesn't contract, so debajo de la mesa. Only de + el becomes del."),
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
        "Techo, pared, estante, alfombra. Pared is the one to watch: it ends in -d and is feminine (la pared)."
      ),
      mc(
        "Which word is NOT feminine, even though you might guess from the rule?",
        ["el sofá", "la cocina", "la lámpara", "la ventana"],
        0,
        "Most -a nouns are feminine (la cocina, la lámpara, la ventana), but sofá is an exception: el sofá. Learn it with its article."
      ),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Los libros están en el ___.", answer: "estante", en: "The books are on the [shelf].", explanation: "Books go on a shelf → el estante." },
      toEs("Hay un espejo en el baño.", "Hay dos espejos en el baño.", "Hay doesn't change for plural: only the noun does (un espejo → dos espejos).", ["En el baño hay dos espejos."], "Change it to two mirrors."),
      toEn("La manta está dentro del armario.", "The blanket is inside the wardrobe.", "Dentro de means inside, and de + el contracts to del: dentro del armario.", ["The blanket is inside the closet.", "The blanket is in the wardrobe."]),
      wo("Mi dormitorio es pequeño pero tiene una ventana grande.", "Ser for size; tener for what the room has.", "My bedroom is small but it has a big window."),
    ]
  ),
  L(
    "vocabulary-practice-4",
    "a1r-word-web-food",
    "Word Web: Food & Drink",
    "Order, compare and sort Beginner's food words — breakfast, lunch, dinner and dessert.",
    "8 min",
    [
      sec(
        "The idea: some food vs. food in general",
        [
          "When you eat or drink an unspecified amount, Spanish uses no article: Como pescado (I eat fish), Bebo agua. When you talk about a food in general, as the subject of gustar, the article comes back: Me gusta el pescado.",
          "So the same word changes with its job: no article for \"some\", el / la for the whole category, un / una for one item you order.",
        ],
        [
          ["Como pescado los viernes.", "I eat fish on Fridays. (some fish: no article)"],
          ["Me gusta el pescado.", "I like fish. (fish in general, subject of gusta: el)"],
          ["Quiero un café, por favor.", "I'd like a coffee, please. (one item: un)"],
        ],
        [
          mc("\"I drink milk every day.\" (la leche = milk)", ["Bebo leche todos los días.", "Bebo la leche todos los días.", "Me gusta leche todos los días.", "Bebo un leche todos los días."], 0, "An unspecified amount of milk takes no article: bebo leche. La leche would point to specific milk, me gusta needs el / la and means \"like\", and un is the wrong gender (and you don't drink \"one milk\")."),
          mc("\"I like rice, but I don't eat rice every day.\"", ["Me gusta el arroz, pero no como arroz todos los días.", "Me gusta arroz, pero no como el arroz todos los días.", "Me gustan los arroces, pero no como arroz todos los días.", "Me gusta arroz, pero no como arroz todos los días."], 0, "Two jobs, two forms: rice in general after gusta takes el; eating some rice takes no article."),
        ]
      ),
      sec(
        "Sort the menu",
        "Group the words you know: proteins (carne, pollo, pescado, huevo), sides (arroz, pan, ensalada, sopa), extras (queso, postre), drinks (jugo, café, agua). A Spanish meal comes in courses, each with a set phrase: de primero, de segundo, de postre, para beber.",
        [
          ["De primero, sopa. De segundo, pollo con arroz.", "For the first course, soup. For the second, chicken with rice."],
          ["De postre, fruta. Y para beber, un jugo.", "For dessert, fruit. And to drink, a juice."],
        ],
        [
          ms(
            "Which are types of meat or fish?",
            ["pollo", "pescado", "carne", "pan"],
            [0, 1, 2],
            "Pollo (chicken), pescado (fish) and carne (meat) are all meat or fish. \"Pan\" is bread."
          ),
        ]
      ),
      sec(
        "At the table",
        [
          "Meal verbs already contain the meal: desayunar (to have breakfast), comer (to eat, to have lunch), cenar (to have dinner). So desayuno pan means \"I have bread for breakfast\", with no extra word for have.",
          "To say what a dish is made of, use de + ingredient after the noun, the opposite of English order: sopa de pollo (chicken soup), jugo de naranja (orange juice).",
        ],
        [
          ["Desayuno pan con queso y café.", "For breakfast I have bread with cheese and coffee."],
          ["No me gusta el pescado, pero me encanta el pollo.", "I don't like fish, but I love chicken."],
          ["Un jugo de naranja y una sopa de verduras.", "An orange juice and a vegetable soup. (de + ingredient, after the noun)"],
        ],
        [
          fb("Complete the sentence.", "Por la mañana ___ huevos con pan. (desayunar, yo)", "desayuno", "Desayunar → yo desayuno: the verb already means 'have for breakfast'."),
          mc("\"a tomato salad\" (el tomate = tomato)", ["una ensalada de tomate", "una tomate ensalada", "un tomate de ensalada", "una ensalada tomate"], 0, "Dish first, then de + ingredient: una ensalada de tomate. Una tomate ensalada copies English order, un tomate de ensalada is a tomato for salads, and una ensalada tomate is missing de."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["jugo", "agua", "café", "arroz"], 3, "Jugo, agua and café are drinks; arroz (rice) is food."),
      mt(
        "Match each food to its meaning.",
        [
          ["el huevo", "the egg"],
          ["el queso", "the cheese"],
          ["la sopa", "the soup"],
          ["el postre", "the dessert"],
        ],
        "All from the Beginner food vocabulary, each learned with its article."
      ),
      fb("Complete with gusta or gustan.", "Me ___ mucho los huevos.", "gustan", "Gustar agrees with the thing liked: los huevos is plural, so gustan."),
      mc(
        "Which is a good dinner order?",
        ["Una ensalada y pescado, por favor.", "Una biblioteca, por favor.", "Un estante con arroz, por favor.", "Una almohada de pollo, por favor."],
        0,
        "Ensalada y pescado is the only food order; a library, a shelf and a pillow aren't things you eat."
      ),
      toEs("I eat chicken with rice and salad.", "Como pollo con arroz y ensalada.", "Some chicken, some rice: no articles after como. Con means with.", ["Yo como pollo con arroz y ensalada."]),
      mc("The waiter asks: \"¿Qué quiere de postre?\" Which answer fits?", ["Fruta, por favor.", "Pollo con arroz, por favor.", "Un jugo, por favor.", "Sopa, de primero."], 0, "De postre = for dessert, so you answer with a dessert: fruta. Pollo con arroz is a main course, un jugo is para beber, and sopa is de primero."),
      wo("Para beber, un jugo de naranja, por favor.", "A quick restaurant order: para beber (to drink) + what you want + por favor.", "To drink, an orange juice, please.", "Put the words in order to order a drink."),
      toEs("Como queso.", "Me gusta el queso.", "Eating some cheese takes no article, but liking cheese in general makes it the subject of gusta, and the article comes back: el queso.", ["A mí me gusta el queso."], "Rewrite it with gustar: say you like it."),
      toEs("Quiero una sopa pollo.", "Quiero una sopa de pollo.", "What a dish is made of goes after the noun with de: sopa de pollo.", ["Yo quiero una sopa de pollo."], "Correct the sentence."),
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
        "The idea: many shops are named after what they sell",
        [
          "Spanish builds shop names by adding -ería to the thing sold: pan (bread) → la panadería, fruta → la frutería, zapato → la zapatería. So if you know the product, you can guess the shop, and the other way round.",
          "Every -ería word is feminine (la panadería). One trap: libro gives la librería, the bookshop, where you buy books. The library, where you borrow them, is la biblioteca.",
        ],
        [
          ["Compro pan en la panadería.", "I buy bread at the bakery. (pan → panadería)"],
          ["La frutería está al lado del banco.", "The fruit shop is next to the bank. (fruta → frutería)"],
          ["Busco un libro en la librería.", "I'm looking for a book at the bookshop. (not the library!)"],
        ],
        [
          mc(
            "Helado means \"ice cream\". Where do you buy it?",
            ["en la heladería", "en el heladero", "en la biblioteca", "en la helada"],
            0,
            "Product + -ería = the shop: helado → la heladería. Biblioteca is the library, and the other two aren't shop names."
          ),
          mc(
            "You want fish (pescado). Where do you go?",
            ["a la pescadería", "al pescadería", "a la librería", "a la panadería"],
            0,
            "Pescado → la pescadería. It's an -ería word, so it's feminine: a la, never al. The librería sells books and the panadería bread."
          ),
        ]
      ),
      sec(
        "Places and actions",
        "Every place has its verb. Say where you're going with ir a + place, then why with para + infinitive: para means \"in order to\", so the verb after it never changes for the person.",
        [
          ["Voy a la biblioteca para leer.", "I go to the library to read."],
          ["Vamos al mercado para comprar fruta.", "We go to the market to buy fruit."],
          ["Mis padres van al cine para ver una película.", "My parents go to the movies to watch a film. (van changes, ver doesn't)"],
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
          fb("Complete the sentence.", "Mi hermana va a la piscina para ___.", "nadar", "After para the verb stays in the infinitive (nadar), even though the subject is mi hermana.", "swim"),
        ]
      ),
      sec(
        "Al or a la?",
        "Ir a + el fuses into al, just like de + el fuses into del: al parque, al museo, al hotel. La never fuses, so feminine places keep a la: a la farmacia, a la iglesia, a la estación.",
        [
          ["Voy al aeropuerto.", "I'm going to the airport. (a + el = al)"],
          ["Voy a la estación.", "I'm going to the station. (a la stays)"],
        ],
        [
          fb("Complete with al or a la.", "¿Vas ___ supermercado?", "al", "Supermercado is masculine, and a + el contracts to al: al supermercado."),
          fb("Complete with al or a la.", "Mis amigos van ___ zapatería.", "a la", "Zapatería is an -ería word, so it's feminine, and a la never contracts."),
        ]
      ),
    ],
    [
      fb("Complete with al or a la.", "Los domingos vamos ___ iglesia.", "a la", "Iglesia is feminine → a la."),
      mc("Odd one out:", ["hospital", "farmacia", "montaña", "doctor"], 3, "Hospital, farmacia and montaña are places; doctor is a person."),
      mc(
        "Where do you go to buy medicine?",
        ["a la farmacia", "al museo", "al gimnasio", "a la playa"],
        0,
        "You buy medicine at the farmacia (pharmacy). You don't buy it at a museum, gym or beach."
      ),
      ms(
        "Which sentences are correct?",
        ["Voy al parque para correr.", "Vamos a el museo.", "Ella va a la biblioteca para estudiar.", "Van al restaurante para cenar."],
        [0, 2, 3],
        "A + el contracts to al: vamos al museo, so \"Vamos a el museo\" is wrong. The other three are correct."
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
    "Opposites, causes and reactions — use Beginner's feeling words with estar in real situations.",
    "7 min",
    [
      sec(
        "The idea: a feeling is a state, so it takes estar",
        [
          "How you feel is how you are right now, not who you are, so feelings go with estar: estoy cansado, está contenta. Like any adjective, the feeling word agrees with the person: cansado, cansada, cansados, cansadas.",
          "Many feeling words are built from a verb with -ado / -ido: preocupar (to worry) → preocupado, aburrir (to bore) → aburrido, sorprender → sorprendido. If you know the verb, you can make the feeling.",
        ],
        [
          ["Estoy cansada.", "I'm tired. (said by a woman: -a)"],
          ["Estamos preocupados por el examen.", "We're worried about the exam. (preocupar → preocupado, plural)"],
          ["Mis hermanas están aburridas.", "My sisters are bored. (aburrir → aburrido, feminine plural)"],
        ],
        [
          mc(
            "Emocionar means \"to excite\". How does a woman say \"I'm excited\"?",
            ["Estoy emocionada.", "Soy emocionada.", "Estoy emocionado.", "Estoy emociono."],
            0,
            "Verb → -ado gives the feeling (emocionar → emocionado), it takes estar because it's a state, and a woman uses -a: emocionada. Soy is ser, and emociono is the verb \"I excite\"."
          ),
        ]
      ),
      sec(
        "Opposites",
        "Many feeling and state words come in pairs: contento/triste, tranquilo/nervioso, sano/enfermo, ocupado/libre, limpio/sucio. Learning them in pairs doubles your vocabulary: no está limpio means it's dirty.",
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
        [
          "Use porque to give the reason for a feeling: feeling + porque + reason.",
          "Watch aburrido: estar aburrido means bored (how you feel), but ser aburrido means boring (what something is like). The verb changes the meaning.",
        ],
        [
          ["Estoy nerviosa porque tengo un examen.", "I'm nervous because I have an exam."],
          ["Mi padre está enojado porque el coche está roto.", "My father is angry because the car is broken."],
        ],
        [
          mc(
            "\"Estoy ___ porque mi mejor amigo llega hoy.\"",
            ["contento", "enojado", "enfermo", "aburrido"],
            0,
            "Your best friend arriving today makes you happy: contento. \"Enojado\" is angry, \"enfermo\" sick, and \"aburrido\" bored, none of which fits the reason."
          ),
          mc(
            "\"This film is boring.\"",
            ["Esta película es aburrida.", "Esta película está aburrida.", "Esta película es aburrido.", "Esta película está aburrido."],
            0,
            "Boring describes what the film is like, so ser: es aburrida (feminine, for película). Está aburrida would mean the film itself feels bored."
          ),
        ]
      ),
    ],
    [
      fb("Complete with the right form.", "Mis hermanas están muy ___ porque tienen mucho trabajo. (estresado)", "estresadas", "Feminine plural → estresadas."),
      fb("Complete with the right form.", "Ana está ___ porque no hay nada que hacer. (aburrido)", "aburrida", "Bored → estar aburrida."),
      mc("Odd one out:", ["preocupado", "nervioso", "estresado", "tranquilo"], 3, "Tranquilo (calm) is the only relaxed state; preocupado, nervioso and estresado are all negative states of tension."),
      mc(
        "A friend gets surprising news. She's…",
        ["sorprendida", "ocupada", "casada", "sucia"],
        0,
        "Surprising news makes someone sorprendida (surprised). \"Ocupada\" is busy, \"casada\" married, and \"sucia\" dirty."
      ),
      toEs("We are worried because our dog is sick.", "Estamos preocupados porque nuestro perro está enfermo.", "Feelings and health are states, so estar: estamos preocupados, está enfermo. Preocupados is plural to match nosotros.", ["Estamos preocupadas porque nuestro perro está enfermo."]),
      toEn("¿Por qué estás tan enojado?", "Why are you so angry?", "Tan means so: tan enojado = so angry. Estar is used because anger is a state.", ["Why are you so mad?"]),
      wo("Estoy muy cansado pero estoy feliz.", "Two states joined by pero.", "I'm very tired but I'm happy."),
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-mixed-error-hunt",
    "Beginner Challenge: The Big Error Hunt",
    "The final Beginner challenge series begins: one mistake per sentence, drawn from every Beginner topic. Can you catch them all?",
    "9 min",
    [
      {
        "heading": "Your checklist",
        "body": [
          "Every sentence below has exactly one mistake from somewhere in Beginner. Run the checklist, in this order: verb form (who acts?) · ser or estar (what it is, or how / where it is?) · tener, hace or hay instead of \"to be\" · agreement (article, adjective, possessive) · gustar agrees with the thing liked · a + el = al, de + el = del · accents on question words.",
          "Most mistakes come from copying English, so ask what Spanish needs, not what English says."
        ],
        "examples": [
          {
            "es": "✗ Nosotros somos cansados. → ✓ Nosotros estamos cansados.",
            "en": "We are tired. (a state: estar)"
          },
          {
            "es": "✗ Me gusta los libros. → ✓ Me gustan los libros.",
            "en": "I like books. (gustar agrees with los libros)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "«Mi hermanas son altas.» What's wrong?",
            "options": [
              "Mi should be mis.",
              "Son should be es.",
              "Altas should be altos.",
              "Nothing."
            ],
            "correctIndex": 0,
            "explanation": "A possessive agrees with the thing owned: hermanas is plural, so mis. Son and altas already agree with hermanas."
          },
          {
            "type": "multiple-choice",
            "question": "«Vamos a el cine.» What's wrong?",
            "options": [
              "A el must fuse into al.",
              "Vamos should be van.",
              "Cine is feminine.",
              "Nothing."
            ],
            "correctIndex": 0,
            "explanation": "A + el always fuses into al: vamos al cine. Vamos is right for nosotros, and cine is masculine."
          }
        ]
      },
      {
        "heading": "Fix it, then change it",
        "body": [
          "A fixed sentence is a model you can reuse. Once it's right, change one thing (the person, the number, the gender) and let everything that depends on it follow."
        ],
        "examples": [
          {
            "es": "La chica está cansada. → Las chicas están cansadas.",
            "en": "The girl is tired. → The girls are tired. (verb and adjective follow)"
          },
          {
            "es": "Voy al cine. → Voy a la playa.",
            "en": "I go to the cinema. → I go to the beach. (only a + el fuses)"
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Change el profesor to la profesora.",
            "source": "La casa es del profesor.",
            "answer": "La casa es de la profesora.",
            "explanation": "Only de + el fuses into del. With la there's nothing to fuse: de la profesora."
          }
        ]
      }
    ],
    [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "La profesora es en la clase ahora.",
        "answer": "La profesora está en la clase ahora.",
        "altAnswers": [
          "La profesora está ahora en la clase."
        ],
        "explanation": "Where someone is takes estar, not ser."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Yo soy dieciocho años.",
        "answer": "Yo tengo dieciocho años.",
        "altAnswers": [
          "Tengo dieciocho años."
        ],
        "explanation": "Age takes tener + años."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "¿Cuando es tu cumpleaños?",
        "answer": "¿Cuándo es tu cumpleaños?",
        "explanation": "A question word carries an accent: cuándo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "A ellos le gusta bailar.",
        "answer": "A ellos les gusta bailar.",
        "explanation": "Ellos are several people, so the pronoun is les. Gusta stays singular for the action."
      },
      {
        "type": "multi-select",
        "question": "Which sentences are correct?",
        "options": [
          "Hay un problema con el coche.",
          "Esta es la casa del mi abuelo.",
          "Los niños tienen sueño.",
          "¿Dónde está la farmacia?"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Del mi abuelo\" adds an article before a possessive: it should be de mi abuelo. The other three use hay, tener sueño and estar for location correctly."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence has NO error?",
        "options": [
          "Estos zapatos son muy caros.",
          "Estos zapatos es muy caros.",
          "Estas zapatos son muy caros.",
          "Estos zapatos son muy caras."
        ],
        "correctIndex": 0,
        "explanation": "Zapatos is masculine plural, so estos, son and caros. Each other option breaks one link of that agreement."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "There are three good restaurants near the hotel.",
        "answer": "Hay tres buenos restaurantes cerca del hotel.",
        "altAnswers": [
          "Hay tres restaurantes buenos cerca del hotel."
        ],
        "explanation": "Hay for existence; bueno can go before the noun; de + el = del."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "¿Por",
          "qué",
          "no",
          "te",
          "gustan",
          "las",
          "películas",
          "de",
          "acción?"
        ],
        "translation": "Why don't you like action movies?",
        "explanation": "Por qué first, then no before the pronoun te, and gustan for películas."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Ellas son cansadas.",
        "answer": "Ellas están cansadas.",
        "explanation": "Being tired is a temporary state: estar, not ser."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Me gusta las fresas.",
        "answer": "Me gustan las fresas.",
        "altAnswers": [
          "A mí me gustan las fresas."
        ],
        "explanation": "Las fresas is plural, so gustan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Voy a el parque.",
        "answer": "Voy al parque.",
        "explanation": "A + el must fuse into al."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Mi amigos son de Chile.",
        "answer": "Mis amigos son de Chile.",
        "explanation": "A possessive agrees with the thing owned: amigos is plural, so mis."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "El mesa es grande.",
        "answer": "La mesa es grande.",
        "explanation": "Mesa is feminine, so la."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Ella tiene un perro negra.",
        "answer": "Ella tiene un perro negro.",
        "explanation": "The adjective agrees with perro (masculine), not with ella."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Nosotros vivemos en Lima.",
        "answer": "Nosotros vivimos en Lima.",
        "altAnswers": [
          "Vivimos en Lima."
        ],
        "explanation": "Vivir is an -ir verb, so nosotros takes -imos."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Mi padre es en la oficina.",
        "answer": "Mi padre está en la oficina.",
        "explanation": "Location of a person takes estar."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Hoy es mucho calor.",
        "answer": "Hoy hace mucho calor.",
        "altAnswers": [
          "Hace mucho calor hoy."
        ],
        "explanation": "Weather takes hace + noun."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Las chicas es muy simpáticas.",
        "answer": "Las chicas son muy simpáticas.",
        "explanation": "Plural subject, so son; personality takes ser."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "A mi hermano le gusta los gatos.",
        "answer": "A mi hermano le gustan los gatos.",
        "explanation": "The verb agrees with los gatos, so gustan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it plural.",
        "source": "La niña está cansada.",
        "answer": "Las niñas están cansadas.",
        "explanation": "Article, verb and adjective all follow the plural noun: las, están, cansadas."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change to ella.",
        "source": "Me gustan las fresas.",
        "answer": "Le gustan las fresas.",
        "altAnswers": [
          "A ella le gustan las fresas."
        ],
        "explanation": "Only the pronoun changes (me → le); gustan still agrees with las fresas."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change to nosotros.",
        "source": "Voy al parque.",
        "answer": "Vamos al parque.",
        "altAnswers": [
          "Nosotros vamos al parque."
        ],
        "explanation": "Ir for nosotros is vamos; al stays."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change perro to gata.",
        "source": "Ella tiene un perro negro.",
        "answer": "Ella tiene una gata negra.",
        "altAnswers": [
          "Tiene una gata negra."
        ],
        "explanation": "The article and the adjective follow the new noun: una gata negra."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Mis",
          "hermanos",
          "están",
          "en",
          "la",
          "casa",
          "del",
          "vecino"
        ],
        "translation": "My brothers are at the neighbor's house",
        "explanation": "Location takes están; de + el becomes del."
      },
      {
        "type": "multiple-choice",
        "question": "«Hay muchos gente aquí.» What's wrong?",
        "options": [
          "Muchos should be mucha.",
          "Hay should be son.",
          "Aquí should be allí.",
          "Nothing."
        ],
        "correctIndex": 0,
        "explanation": "Gente is a feminine singular noun, so mucha gente. Hay is right for existence, and aquí is fine."
      },
      {
        "type": "speak",
        "text": "Mi hermana es alta y es de México.",
        "prompt": "Say it correctly aloud: «Mi hermana son alta y está de México.»",
        "explanation": "Two fixes: one sister takes es, and origin takes ser de, not estar."
      }
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-dialogue-marathon",
    "Beginner Challenge: Dialogue Marathon",
    "Four short conversations in a row — meeting, planning, shopping and saying goodbye. Keep up with each one.",
    "9 min",
    [
      {
        "heading": "Conversation 1: A new classmate",
        "body": [
          "Greetings, origin and age. A good reply mirrors the question: ¿De dónde eres? → Soy de...; ¿Cuántos años tienes? → Tengo..."
        ],
        "examples": [
          {
            "es": "—Hola, soy Kenji. Soy de Japón.",
            "en": "Hi, I'm Kenji. I'm from Japan."
          },
          {
            "es": "—¡Bienvenido! ¿Cuántos años tienes?",
            "en": "Welcome! How old are you?"
          },
          {
            "es": "—Tengo veinticuatro.",
            "en": "I'm twenty-four."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "—Mucho gusto, Kenji. Yo ___ Valeria.",
            "answer": "soy",
            "en": "—Nice to meet you, Kenji. I['m] Valeria.",
            "explanation": "Saying who you are takes ser: yo soy."
          },
          {
            "type": "multiple-choice",
            "question": "Kenji answers «Tengo veinticuatro.» Which question did he hear?",
            "options": [
              "¿Cuántos años tienes?",
              "¿De dónde eres?",
              "¿Cómo estás?",
              "¿Dónde vives?"
            ],
            "correctIndex": 0,
            "explanation": "Tengo + a number answers an age question asked with tener. Origin would get soy de, how you are estoy..., and where you live vivo en."
          }
        ]
      },
      {
        "heading": "Conversation 2: Weekend plans",
        "body": [
          "Plans use ir a + infinitive, and gustar / encantar agree with the thing you like."
        ],
        "examples": [
          {
            "es": "—¿Qué vas a hacer el sábado?",
            "en": "What are you going to do on Saturday?"
          },
          {
            "es": "—Voy a ir al museo. Me encantan los museos.",
            "en": "I'm going to go to the museum. I love museums."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Why is it «me encantan»?",
            "options": [
              "Los museos is plural.",
              "The speaker is more than one person.",
              "Encantar is always plural.",
              "Because it's the future."
            ],
            "correctIndex": 0,
            "explanation": "Encantar works like gustar: it agrees with the thing loved, los museos. The person is shown by me, and it says nothing about time."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Answer the question: you're going to go to the beach.",
            "source": "¿Qué vas a hacer el sábado?",
            "answer": "Voy a ir a la playa.",
            "altAnswers": [
              "El sábado voy a ir a la playa.",
              "Voy a la playa."
            ],
            "explanation": "Answer with the yo form of the same structure: vas a hacer → voy a + infinitive."
          }
        ]
      },
      {
        "heading": "Conversation 3: At the market",
        "body": [
          "Prices and demonstratives. Cuesta for one thing, cuestan for several; este / esta for things here, ese / esa for things near the seller, aquel / aquella for things over there."
        ],
        "examples": [
          {
            "es": "—¿Cuánto cuestan estas naranjas?",
            "en": "How much are these oranges?"
          },
          {
            "es": "—Dos euros el kilo. Y esas manzanas, tres.",
            "en": "Two euros a kilo. And those apples, three."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "¿Y cuánto ___ aquel melón?",
            "answer": "cuesta",
            "en": "And how much [does] that melon [cost]?",
            "explanation": "One melon, so cuesta; aquel points to something over there."
          }
        ]
      }
    ],
    [
      {
        "type": "multiple-choice",
        "question": "Conversation 4: Goodbye. Which is the most natural way to say \"See you tomorrow\"?",
        "options": [
          "Hasta mañana.",
          "Buenos días.",
          "Mucho gusto.",
          "De nada."
        ],
        "correctIndex": 0,
        "explanation": "Hasta mañana = until tomorrow. Buenos días is a greeting, mucho gusto is for meeting someone, and de nada answers gracias."
      },
      {
        "type": "matching",
        "instructions": "Match each line to its best reply.",
        "pairs": [
          {
            "left": "¿Tienes hambre?",
            "right": "Sí, mucha. ¿Comemos?"
          },
          {
            "left": "¿Dónde está tu coche?",
            "right": "Está en el garaje."
          },
          {
            "left": "¿De quién es este libro?",
            "right": "Es de Marta."
          }
        ],
        "explanation": "Each reply reuses the question's verb: tienes → (tengo) mucha, está → está, es de → es de."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "—¿Ustedes son hermanos? —Sí, ___ hermanos.",
        "answer": "somos",
        "en": "—Are you siblings? —Yes, we [are] siblings.",
        "explanation": "The question asks ustedes, so the answer is nosotros: somos."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "—¿Qué hora es? —___ las cuatro y cuarto.",
        "answer": "Son",
        "en": "—What time is it? —[It's] quarter past four.",
        "explanation": "Every hour except one o'clock is plural: son las."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Answer the question: you're from Brazil, but you live in Chile.",
        "source": "¿De dónde eres?",
        "answer": "Soy de Brasil, pero vivo en Chile.",
        "altAnswers": [
          "Yo soy de Brasil, pero vivo en Chile.",
          "Soy de Brasil pero vivo en Chile."
        ],
        "explanation": "Answer de dónde eres with soy de...; where you live now is vivir en."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "—¿Vamos al cine esta noche? —¡Buena idea!",
        "answer": "—Shall we go to the cinema tonight? —Good idea!",
        "altAnswers": [
          "Shall we go to the movies tonight? Good idea!",
          "Are we going to the cinema tonight? Good idea!",
          "Let's go to the movies tonight? Good idea!"
        ],
        "explanation": "¿Vamos...? is a common way to suggest doing something together."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Adiós,",
          "hasta",
          "el",
          "lunes",
          "y",
          "buen",
          "fin",
          "de",
          "semana."
        ],
        "translation": "Bye, see you Monday, and have a good weekend.",
        "explanation": "Hasta + day for \"see you\"; buen before a masculine noun."
      },
      {
        "type": "speak",
        "text": "Hola, soy Ana. Soy de Perú.",
        "prompt": "Respond aloud: introduce yourself to Kenji. Your name is Ana and you're from Peru.",
        "explanation": "Your name and your origin both take ser: soy Ana, soy de Perú."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "Nice to meet you. How old are you?",
        "answer": "Mucho gusto. ¿Cuántos años tienes?",
        "altAnswers": [
          "Encantado. ¿Cuántos años tienes?",
          "Encantada. ¿Cuántos años tienes?"
        ],
        "explanation": "Age is asked with cuántos años + tener."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to ask ustedes about Sunday.",
        "source": "¿Qué vas a hacer el sábado?",
        "answer": "¿Qué van a hacer el domingo?",
        "altAnswers": [
          "¿Qué van a hacer ustedes el domingo?"
        ],
        "explanation": "Ustedes takes van; only ir changes, and el domingo replaces el sábado."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it plural.",
        "source": "¿Cuánto cuesta este tomate?",
        "answer": "¿Cuánto cuestan estos tomates?",
        "explanation": "Several tomatoes: the verb becomes cuestan and the demonstrative estos."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "¿Cuánto cuestan ___ manzanas?",
        "answer": "esas",
        "en": "How much are [those] apples?",
        "explanation": "Esas for \"those\" (near the seller); manzanas is feminine plural."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "—Gracias por todo. —De ___.",
        "answer": "nada",
        "en": "—Thanks for everything. —You're [welcome].",
        "explanation": "The set reply to gracias is de nada."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Me",
          "gustan",
          "mucho",
          "los",
          "museos",
          "de",
          "arte"
        ],
        "translation": "I really like art museums",
        "explanation": "Gustan agrees with los museos; mucho comes right after the verb."
      },
      {
        "type": "multiple-choice",
        "question": "—¿Cuántos años tienes? Which reply fits?",
        "options": [
          "Tengo veinte años.",
          "Soy veinte años.",
          "Estoy veinte años.",
          "Hay veinte años."
        ],
        "correctIndex": 0,
        "explanation": "Age takes tener + años, never ser or estar, and hay would mean the years exist."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "¿Cuánto cuesta esos plátanos?",
        "answer": "¿Cuánto cuestan esos plátanos?",
        "explanation": "Esos plátanos is plural, so the verb is cuestan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Me encanta los museos.",
        "answer": "Me encantan los museos.",
        "explanation": "Encantar agrees with the thing loved: los museos is plural, so encantan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the reply.",
        "source": "Estoy de Japón.",
        "answer": "Soy de Japón.",
        "altAnswers": [
          "Yo soy de Japón."
        ],
        "explanation": "Origin takes ser de, never estar."
      },
      {
        "type": "multiple-choice",
        "question": "The seller says «Dos euros el kilo.» You want two kilos. How much do you pay?",
        "options": [
          "Four euros",
          "Two euros",
          "Twelve euros",
          "One euro"
        ],
        "correctIndex": 0,
        "explanation": "El kilo means \"per kilo\": two euros a kilo × two kilos = four euros (cuatro euros)."
      }
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-translation-relay",
    "Beginner Challenge: Translation Relay",
    "Translate in both directions, one topic after another — a fast relay through all of the Beginner level.",
    "9 min",
    [
      {
        "heading": "Leg 1: Say it in Spanish",
        "body": [
          "Think before you type: who is the subject? Which verb does Spanish want (ser, estar, tener, hay, gustar...)? What has to agree with what?"
        ],
        "examples": [
          {
            "es": "We are in the kitchen. → Estamos en la cocina.",
            "en": "(location → estar)"
          },
          {
            "es": "I like dogs. → Me gustan los perros.",
            "en": "(plural thing liked → gustan)"
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Translate to Spanish.",
            "source": "You (informal) are very funny.",
            "answer": "Eres muy divertido.",
            "altAnswers": [
              "Eres muy divertida.",
              "Tú eres muy divertido.",
              "Tú eres muy divertida.",
              "Eres muy gracioso.",
              "Eres muy graciosa."
            ],
            "explanation": "Personality is a trait, so ser: eres."
          },
          {
            "type": "multiple-choice",
            "question": "\"My parents are tall.\" Which verb, and why?",
            "options": [
              "son: height is a lasting trait",
              "están: they are somewhere",
              "tienen: tener + adjective",
              "hay: they exist"
            ],
            "correctIndex": 0,
            "explanation": "Height describes what someone is like, so ser: mis padres son altos. Estar is for states and places, tener goes with nouns like hambre, and hay introduces new things."
          }
        ]
      },
      {
        "heading": "Leg 2: Say it in English",
        "body": [
          "Watch for the Spanish structures that don't map word for word into English: tener + noun, hace for weather, gustar back to front."
        ],
        "examples": [
          {
            "es": "Tengo frío. → I'm cold.",
            "en": "(tener + noun)"
          },
          {
            "es": "Hace sol. → It's sunny.",
            "en": "(hacer for weather)"
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Translate to English.",
            "source": "Mis abuelos tienen ochenta años.",
            "answer": "My grandparents are eighty years old.",
            "altAnswers": [
              "My grandparents are eighty.",
              "My grandparents are 80 years old."
            ],
            "explanation": "Age uses tener in Spanish but \"to be\" in English."
          }
        ]
      },
      {
        "heading": "Leg 3: Change it",
        "body": [
          "The last leg of the relay: take a correct Spanish sentence, change one thing, and let everything that depends on it follow."
        ],
        "examples": [
          {
            "es": "Le gustan las canciones. → Le gusta la canción.",
            "en": "She likes the songs. → She likes the song. (one song: gusta)"
          },
          {
            "es": "Mis padres son altos. → Mi madre es alta.",
            "en": "My parents are tall. → My mother is tall. (singular, feminine)"
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Change to nosotros.",
            "source": "Tengo mucha hambre.",
            "answer": "Tenemos mucha hambre.",
            "altAnswers": [
              "Nosotros tenemos mucha hambre."
            ],
            "explanation": "Only tener changes (tenemos); hambre is still a feminine noun, so mucha."
          }
        ]
      }
    ],
    [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "There is a pharmacy near the park.",
        "answer": "Hay una farmacia cerca del parque.",
        "explanation": "\"There is\" is hay; de + el = del."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "They're going to eat at two.",
        "answer": "Van a comer a las dos.",
        "altAnswers": [
          "Ellos van a comer a las dos.",
          "Ellas van a comer a las dos."
        ],
        "explanation": "Ir a + infinitive; \"at two\" is a las dos."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "My sister's books are on the table.",
        "answer": "Los libros de mi hermana están en la mesa.",
        "explanation": "Spanish has no 's: los libros de mi hermana. Location takes estar."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "¿A qué hora es tu clase de inglés?",
        "answer": "What time is your English class?",
        "altAnswers": [
          "At what time is your English class?",
          "When is your English class?"
        ],
        "explanation": "A qué hora asks at what time something happens."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "No nos gusta el invierno porque hace frío.",
        "answer": "We don't like winter because it's cold.",
        "altAnswers": [
          "We do not like winter because it is cold.",
          "We don't like the winter because it's cold."
        ],
        "explanation": "Gustar back to front: winter isn't pleasing to us. Hace frío is weather."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "Aquellos chicos son mis compañeros de clase.",
        "answer": "Those boys are my classmates.",
        "altAnswers": [
          "Those guys are my classmates.",
          "Those boys over there are my classmates.",
          "Those kids are my classmates."
        ],
        "explanation": "Aquellos points to people over there; compañeros de clase = classmates."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Esta",
          "tarde",
          "tengo",
          "que",
          "limpiar",
          "mi",
          "dormitorio."
        ],
        "translation": "This afternoon I have to clean my bedroom.",
        "explanation": "Time first, then tener que + infinitive."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it negative.",
        "source": "Estamos en la estación.",
        "answer": "No estamos en la estación.",
        "altAnswers": [
          "Nosotros no estamos en la estación."
        ],
        "explanation": "No goes right before the verb."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change to ellos.",
        "source": "Le gustan las canciones.",
        "answer": "Les gustan las canciones.",
        "altAnswers": [
          "A ellos les gustan las canciones."
        ],
        "explanation": "Only the pronoun changes: le → les. Gustan still agrees with las canciones."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Mis padres están altos.",
        "answer": "Mis padres son altos.",
        "explanation": "Height is a lasting trait, so ser."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Estoy mucha hambre.",
        "answer": "Tengo mucha hambre.",
        "altAnswers": [
          "Yo tengo mucha hambre."
        ],
        "explanation": "Hunger is a noun you have: tener hambre."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Es frío en diciembre.",
        "answer": "Hace frío en diciembre.",
        "altAnswers": [
          "En diciembre hace frío."
        ],
        "explanation": "Weather takes hace."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change to yo.",
        "source": "Tenemos que estudiar esta noche.",
        "answer": "Tengo que estudiar esta noche.",
        "altAnswers": [
          "Esta noche tengo que estudiar.",
          "Yo tengo que estudiar esta noche."
        ],
        "explanation": "Only tener changes (tengo); que + infinitive stays."
      },
      {
        "type": "multiple-choice",
        "question": "«¿Cuántos años tiene tu hermana?» What does it ask?",
        "options": [
          "How old your sister is",
          "How many sisters you have",
          "When your sister's birthday is",
          "How long your sister has lived here"
        ],
        "correctIndex": 0,
        "explanation": "Cuántos años + tener asks someone's age: literally \"how many years does your sister have?\"."
      },
      {
        "type": "multiple-choice",
        "question": "«A mi padre le duele la cabeza.» What's wrong with him?",
        "options": [
          "He has a headache.",
          "He's very tired.",
          "He has a sore throat.",
          "He's angry."
        ],
        "correctIndex": 0,
        "explanation": "Doler works like gustar: the head (la cabeza) hurts \"to\" my father, so he has a headache."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "Hay mucha gente en el mercado.",
        "answer": "There are a lot of people at the market.",
        "altAnswers": [
          "There are many people at the market.",
          "There are a lot of people in the market.",
          "There are many people in the market."
        ],
        "explanation": "Hay = there is / are; gente is singular in Spanish but plural in English."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Los zapatos de mi hermano ___ debajo de la cama.",
        "answer": "están",
        "en": "My brother's shoes [are] under the bed.",
        "explanation": "Location takes estar, plural for zapatos."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Este fin de semana ___ a visitar a mis abuelos.",
        "answer": "vamos",
        "en": "This weekend we [are going] to visit my grandparents.",
        "explanation": "Ir a + infinitive: nosotros vamos."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Hay",
          "un",
          "parque",
          "muy",
          "bonito",
          "cerca",
          "de",
          "mi",
          "casa"
        ],
        "translation": "There's a very nice park near my house",
        "explanation": "Hay first, then the noun with its adjective, then the place."
      },
      {
        "type": "multi-select",
        "question": "Select ALL the sentences that need tener in Spanish.",
        "options": [
          "I'm hungry.",
          "I'm tall.",
          "I'm twenty.",
          "I'm at home."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Hunger and age are things you have: tengo hambre, tengo veinte años. Height takes ser (soy alto / alta) and location estar (estoy en casa)."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Mi hermana ___ veinte años.",
        "answer": "tiene",
        "en": "My sister [is] twenty.",
        "explanation": "Age takes tener: tiene veinte años."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "A mi madre le ___ las flores.",
        "answer": "gustan",
        "en": "My mother [likes] flowers.",
        "explanation": "Las flores is plural, so gustan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it plural.",
        "source": "Esa chica es mi vecina.",
        "answer": "Esas chicas son mis vecinas.",
        "explanation": "Everything follows the plural noun: esas, son, mis, vecinas."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "La farmacia es cerca del parque.",
        "answer": "La farmacia está cerca del parque.",
        "explanation": "Where a known place is takes estar, never ser."
      },
      {
        "type": "speak",
        "text": "Hay mucha gente en la playa porque hace calor.",
        "prompt": "Say it in Spanish: there are a lot of people at the beach because it's hot.",
        "explanation": "Hay for existence (mucha gente: singular), hace for the weather."
      }
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-build-a-sentence",
    "Beginner Challenge: Build-a-Sentence",
    "Long sentences, built from the pieces you know. Put every word in its place.",
    "8 min",
    [
      {
        "heading": "Sentence architecture",
        "body": [
          "Beginner sentences follow a reliable blueprint: (time) + subject + verb + object + (place) + (reason). Spanish word order is flexible, but this order is always correct, so build from the verb outward.",
          "Two pieces have fixed spots: no goes right before the verb (and before a pronoun like le or te in front of it), and most adjectives come after their noun."
        ],
        "examples": [
          {
            "es": "Los sábados mi familia come en casa de mis abuelos.",
            "en": "On Saturdays my family eats at my grandparents' house. (time, subject, verb, place)"
          },
          {
            "es": "Hoy no voy a la escuela porque estoy enfermo.",
            "en": "Today I'm not going to school because I'm sick. (no before the verb; reason last)"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Put the words in order.",
            "words": [
              "Por",
              "la",
              "mañana",
              "mi",
              "padre",
              "lee",
              "el",
              "periódico",
              "en",
              "la",
              "cocina."
            ],
            "translation": "In the morning my father reads the newspaper in the kitchen.",
            "explanation": "Time, subject, verb, object, place."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Correct the sentence.",
            "source": "Mi madre no hoy cocina.",
            "answer": "Mi madre no cocina hoy.",
            "altAnswers": [
              "Hoy mi madre no cocina."
            ],
            "explanation": "No goes directly before the verb: no cocina. Hoy can go at the end or the start."
          }
        ]
      },
      {
        "heading": "Joining two ideas",
        "body": [
          "Link two short sentences with y (and), pero (but), porque (because: the reason comes after) or así que (so: the result comes after)."
        ],
        "examples": [
          {
            "es": "Tengo hambre, así que voy a cocinar.",
            "en": "I'm hungry, so I'm going to cook. (result after así que)"
          },
          {
            "es": "Es simpática, pero hoy está cansada.",
            "en": "She's nice, but today she's tired. (contrast with pero)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which linker fits? «Hace sol, ___ vamos a la playa.»",
            "options": [
              "así que",
              "pero",
              "porque",
              "sin"
            ],
            "correctIndex": 0,
            "explanation": "Going to the beach is the result of the sun, so así que. Pero would need a contrast, porque would put the reason after it, and sin means \"without\"."
          }
        ]
      }
    ],
    [
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Mis",
          "amigos",
          "y",
          "yo",
          "vamos",
          "a",
          "cenar",
          "en",
          "un",
          "restaurante",
          "italiano."
        ],
        "translation": "My friends and I are going to have dinner at an Italian restaurant.",
        "explanation": "\"My friends and I\" = nosotros, so vamos a + infinitive."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "¿Por",
          "qué",
          "están",
          "tus",
          "hermanos",
          "tan",
          "contentos",
          "hoy?"
        ],
        "translation": "Why are your brothers so happy today?",
        "explanation": "In a question the verb often comes before the subject."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "A",
          "mi",
          "madre",
          "le",
          "encantan",
          "las",
          "flores",
          "de",
          "este",
          "jardín."
        ],
        "translation": "My mother loves the flowers in this garden.",
        "explanation": "A + person + le, then encantan for las flores."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "En",
          "mi",
          "ciudad",
          "hay",
          "muchos",
          "parques",
          "y",
          "dos",
          "museos",
          "grandes."
        ],
        "translation": "In my city there are many parks and two big museums.",
        "explanation": "Place first, then hay and the things that exist."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Nuestra",
          "profesora",
          "es",
          "de",
          "México",
          "pero",
          "vive",
          "aquí."
        ],
        "translation": "Our teacher is from Mexico but lives here.",
        "explanation": "Two clauses joined by pero."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence is built correctly?",
        "options": [
          "Siempre tengo mucha hambre a las once.",
          "Siempre tengo mucho hambre a las once.",
          "Siempre estoy mucha hambre a las once.",
          "Siempre tengo hambre mucha a las once."
        ],
        "correctIndex": 0,
        "explanation": "Tener hambre, with mucha before the feminine noun. Mucho doesn't agree, estar is the wrong verb, and mucha goes before the noun."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Hoy hace frío, ___ voy a llevar un abrigo.",
        "answer": "así que",
        "en": "It's cold today, [so] I'm going to wear a coat.",
        "altAnswers": [
          "entonces",
          "por eso"
        ],
        "explanation": "The coat is the result of the cold, so así que."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Rewrite it with the time first.",
        "source": "Estudio español en la biblioteca los lunes.",
        "answer": "Los lunes estudio español en la biblioteca.",
        "explanation": "The blueprint puts the time phrase at the start: (time) + verb + object + place."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it negative.",
        "source": "A mi hermana le gustan las verduras.",
        "answer": "A mi hermana no le gustan las verduras.",
        "explanation": "No goes before the pronoun le, which sits right before the verb."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "Tomorrow we're going to eat at my aunt's house.",
        "answer": "Mañana vamos a comer en casa de mi tía.",
        "altAnswers": [
          "Mañana vamos a comer en la casa de mi tía."
        ],
        "explanation": "Time first, then ir a + infinitive; \"at my aunt's house\" is en casa de mi tía."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "En mi barrio hay supermercados dos grandes.",
        "answer": "En mi barrio hay dos supermercados grandes.",
        "altAnswers": [
          "En mi barrio hay dos grandes supermercados."
        ],
        "explanation": "Numbers go before the noun; the adjective grandes after it."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "In the morning I drink coffee in the kitchen.",
        "answer": "Por la mañana bebo café en la cocina.",
        "altAnswers": [
          "Por la mañana tomo café en la cocina.",
          "Bebo café en la cocina por la mañana.",
          "Tomo café en la cocina por la mañana."
        ],
        "explanation": "Por la mañana opens the sentence; the place comes last."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to give a reason: because it's cold.",
        "source": "Vamos a comer en casa.",
        "answer": "Vamos a comer en casa porque hace frío.",
        "explanation": "The reason goes last, after porque; weather takes hace."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "Our teacher (a woman) is very nice, but today she's tired.",
        "answer": "Nuestra profesora es muy simpática, pero hoy está cansada.",
        "altAnswers": [
          "Nuestra profesora es muy simpática, pero está cansada hoy.",
          "Nuestra profesora es muy amable, pero hoy está cansada.",
          "Nuestra profesora es muy amable, pero está cansada hoy."
        ],
        "explanation": "Ser for her personality, estar for today's state; nuestra agrees with profesora."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Los viernes mis amigos y yo ___ al cine.",
        "answer": "vamos",
        "en": "On Fridays my friends and I [go] to the movies.",
        "explanation": "\"My friends and I\" = nosotros, so vamos."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "En el centro ___ muchas tiendas y un museo.",
        "answer": "hay",
        "en": "Downtown [there are] many stores and a museum.",
        "explanation": "Hay covers both plural and singular things."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Mi padre no ___ hoy porque está enfermo.",
        "answer": "trabaja",
        "en": "My father isn't [working] today because he's sick.",
        "altAnswers": [
          "está trabajando"
        ],
        "explanation": "Spanish often uses the simple present where English uses -ing: no trabaja hoy (no está trabajando also works)."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Los",
          "domingos",
          "mis",
          "padres",
          "comen",
          "en",
          "un",
          "restaurante"
        ],
        "translation": "On Sundays my parents eat at a restaurant",
        "explanation": "Time, then subject, verb and place."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Esta",
          "noche",
          "mi",
          "hermana",
          "va",
          "a",
          "cocinar",
          "pasta",
          "en",
          "casa"
        ],
        "translation": "Tonight my sister is going to cook pasta at home",
        "explanation": "Time first, then ir a + infinitive, object, place."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "¿Por",
          "qué",
          "no",
          "te",
          "gusta",
          "el",
          "café",
          "con",
          "leche?"
        ],
        "translation": "Why don't you like coffee with milk?",
        "explanation": "Question word, then no before the pronoun te."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Mi",
          "mejor",
          "amigo",
          "vive",
          "en",
          "una",
          "casa",
          "muy",
          "grande"
        ],
        "translation": "My best friend lives in a very big house",
        "explanation": "Mejor goes before the noun; muy grande after casa."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Por",
          "la",
          "tarde",
          "los",
          "niños",
          "juegan",
          "en",
          "el",
          "parque"
        ],
        "translation": "In the afternoon the children play in the park",
        "explanation": "Time phrase, subject, verb, place."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "A",
          "mis",
          "abuelos",
          "les",
          "encanta",
          "caminar",
          "por",
          "la",
          "playa"
        ],
        "translation": "My grandparents love to walk along the beach",
        "explanation": "A + people + les, then encanta (singular for the infinitive)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "¿Por qué te no gustan los lunes?",
        "answer": "¿Por qué no te gustan los lunes?",
        "explanation": "No goes before the pronoun te, never between te and the verb."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to a plan for tomorrow with ir a.",
        "source": "Mi hermano lava los platos.",
        "answer": "Mañana mi hermano va a lavar los platos.",
        "altAnswers": [
          "Mi hermano va a lavar los platos mañana."
        ],
        "explanation": "Time first (mañana), then ir a + infinitive: va a lavar."
      },
      {
        "type": "speak",
        "text": "Los domingos juego al fútbol en el parque con mis amigos.",
        "prompt": "Respond aloud: build one sentence about your weekend: when, what you do, and where.",
        "explanation": "Time first (los domingos), then the verb, the activity and the place."
      }
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-day-in-madrid-morning",
    "Beginner Challenge: A Day in Madrid — Morning",
    "Follow a tourist through a morning in Madrid: breakfast, directions, and a museum visit.",
    "8 min",
    [
      {
        "heading": "8:00 — Breakfast at the hotel",
        "body": [
          "The tourist, Emma, orders breakfast. Ordering is just naming what you want + por favor; un / una agrees with each item, and only the main noun takes a plural: dos cafés con leche."
        ],
        "examples": [
          {
            "es": "—Buenos días. ¿Qué desea?",
            "en": "Good morning. What would you like?"
          },
          {
            "es": "—Un café con leche y pan con tomate, por favor.",
            "en": "A coffee with milk and bread with tomato, please."
          },
          {
            "es": "—¿Algo más?",
            "en": "Anything else?"
          },
          {
            "es": "—No, gracias. ¿Cuánto es?",
            "en": "No, thanks. How much is it?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does Emma order to drink?",
            "options": [
              "Coffee with milk",
              "Orange juice",
              "Tea",
              "Water"
            ],
            "correctIndex": 0,
            "explanation": "Un café con leche = a coffee with milk. Orange juice would be un zumo (or jugo) de naranja, tea un té, water agua."
          },
          {
            "type": "multiple-choice",
            "question": "The waiter asks «¿Algo más?» Emma doesn't want anything else. What does she say?",
            "options": [
              "No, gracias.",
              "Sí, por favor.",
              "De nada.",
              "Mucho gusto."
            ],
            "correctIndex": 0,
            "explanation": "¿Algo más? = anything else?, so \"no, thanks\" is no, gracias. De nada answers gracias, and mucho gusto is for meeting someone."
          }
        ]
      },
      {
        "heading": "9:30 — Asking for directions",
        "body": [
          "Emma asks a local how to get to the Prado Museum. Where a known place is takes estar (está cerca, está al lado de...); hay asks whether one exists at all (¿hay un banco...?)."
        ],
        "examples": [
          {
            "es": "—Perdón, ¿dónde está el Museo del Prado?",
            "en": "Excuse me, where is the Prado Museum?"
          },
          {
            "es": "—Está cerca, a diez minutos. Está al lado del jardín botánico.",
            "en": "It's close, ten minutes away. It's next to the botanical garden."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "¿Hay un banco ___ del museo?",
            "answer": "cerca",
            "en": "Is there a bank [near] the museum?",
            "explanation": "Near is cerca de; with el it becomes cerca del."
          },
          {
            "type": "multiple-choice",
            "question": "Emma needs the train station. What does she ask?",
            "options": [
              "Perdón, ¿dónde está la estación?",
              "Perdón, ¿dónde es la estación?",
              "Perdón, ¿qué está la estación?",
              "Perdón, ¿hay la estación?"
            ],
            "correctIndex": 0,
            "explanation": "Where a known place is takes estar: ¿dónde está...? Ser isn't used for location, qué asks \"what\", and hay can't go with la (it introduces new things: ¿hay una estación?)."
          }
        ]
      },
      {
        "heading": "11:00 — At the museum",
        "body": [
          "Emma describes what she sees in a message to her mother. Ser describes what things are like (el museo es enorme); estar says how she feels right now (estoy cansada)."
        ],
        "examples": [
          {
            "es": "El museo es enorme y los cuadros son preciosos.",
            "en": "The museum is huge and the paintings are beautiful. (description: ser)"
          },
          {
            "es": "Estoy un poco cansada, pero estoy muy contenta.",
            "en": "I'm a bit tired, but I'm very happy. (feelings now: estar)"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "Hay mucha gente, pero el museo ___ muy tranquilo.",
            "answer": "está",
            "en": "There are lots of people, but right now the museum [is] very quiet.",
            "explanation": "How the museum is right now is a state: estar."
          }
        ]
      }
    ],
    [
      {
        "type": "multiple-choice",
        "question": "How far is the museum from where Emma asks?",
        "options": [
          "Ten minutes",
          "Two minutes",
          "An hour",
          "Thirty minutes"
        ],
        "correctIndex": 0,
        "explanation": "\"Está cerca, a diez minutos\": a + time gives the distance. Diez = ten."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Aquí ___ su café, señora.",
        "answer": "está",
        "en": "Here [is] your coffee, madam.",
        "explanation": "Aquí está = here it is: estar for where something is."
      },
      {
        "type": "matching",
        "instructions": "Match each time to Emma's activity.",
        "pairs": [
          {
            "left": "a las ocho",
            "right": "desayuna"
          },
          {
            "left": "a las nueve y media",
            "right": "pregunta el camino"
          },
          {
            "left": "a las once",
            "right": "visita el museo"
          }
        ],
        "explanation": "A las + hour; nueve y media = 9:30."
      },
      {
        "type": "multi-select",
        "question": "Which sentences describe Emma's morning correctly?",
        "options": [
          "Emma desayuna en el hotel.",
          "Emma está cansada pero contenta.",
          "El museo es pequeño.",
          "Emma bebe café con leche."
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "The museum is enorme (huge), not pequeño. The other three match the story."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "Excuse me, is there a café near here?",
        "answer": "Perdón, ¿hay un café cerca de aquí?",
        "altAnswers": [
          "Perdone, ¿hay un café cerca de aquí?",
          "Disculpe, ¿hay un café cerca de aquí?",
          "Perdón, ¿hay una cafetería cerca de aquí?"
        ],
        "explanation": "Asking whether one exists takes hay."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Después",
          "del",
          "museo",
          "Emma",
          "va",
          "a",
          "comer",
          "en",
          "un",
          "restaurante."
        ],
        "translation": "After the museum Emma is going to eat at a restaurant.",
        "explanation": "Time phrase, then ir a + infinitive."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to two.",
        "source": "Un café con leche, por favor.",
        "answer": "Dos cafés con leche, por favor.",
        "explanation": "Only café, the main noun, becomes plural: dos cafés con leche, never con leches."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "Bread with tomato and an orange juice, please.",
        "answer": "Pan con tomate y un zumo de naranja, por favor.",
        "altAnswers": [
          "Pan con tomate y un jugo de naranja, por favor."
        ],
        "explanation": "Zumo is used in Spain; jugo in Latin America."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Answer the tourist: it's close, five minutes away.",
        "source": "¿Dónde está la estación?",
        "answer": "Está cerca, a cinco minutos.",
        "altAnswers": [
          "La estación está cerca, a cinco minutos."
        ],
        "explanation": "Location takes estar (está cerca); a + time gives the distance."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "El hotel es al lado del museo.",
        "answer": "El hotel está al lado del museo.",
        "explanation": "Location takes estar, never ser."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it plural.",
        "source": "El cuadro es muy bonito.",
        "answer": "Los cuadros son muy bonitos.",
        "altAnswers": [
          "Los cuadros son muy lindos.",
          "Los cuadros son muy hermosos."
        ],
        "explanation": "Article, verb and adjective all follow the plural noun."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Soy de vacaciones en Madrid.",
        "answer": "Estoy de vacaciones en Madrid.",
        "altAnswers": [
          "Estoy en Madrid de vacaciones."
        ],
        "explanation": "Being on vacation is a temporary state: estar de vacaciones."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "El museo está ___ del hotel.",
        "answer": "lejos",
        "en": "The museum is [far] from the hotel.",
        "explanation": "Far from is lejos de; the opposite of cerca de."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "El Museo del Prado ___ muy famoso.",
        "answer": "es",
        "en": "The Prado Museum [is] very famous.",
        "explanation": "Being famous is a lasting description, so ser."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Emma ___ en una cafetería cerca del hotel.",
        "answer": "desayuna",
        "en": "Emma [has breakfast] at a café near the hotel.",
        "explanation": "\"To have breakfast\" is one verb, desayunar."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Perdón,",
          "¿dónde",
          "está",
          "el",
          "jardín",
          "botánico?"
        ],
        "translation": "Excuse me, where is the botanical garden?",
        "explanation": "Perdón first, then the question with dónde está."
      },
      {
        "type": "multiple-choice",
        "question": "\"The Prado is near.\" Which is correct?",
        "options": [
          "El Prado está cerca.",
          "El Prado es cerca.",
          "El Prado hay cerca.",
          "El Prado tiene cerca."
        ],
        "correctIndex": 0,
        "explanation": "The location of a place takes estar. Ser isn't used for location, hay can't follow a known place, and tener means \"have\"."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct Emma's message to her mother.",
        "source": "Mamá, estoy en el museo. Es muy grande y yo soy un poco cansada.",
        "answer": "Mamá, estoy en el museo. Es muy grande y yo estoy un poco cansada.",
        "altAnswers": [
          "Mamá, estoy en el museo. Es muy grande y estoy un poco cansada."
        ],
        "explanation": "Feeling tired right now is a state: estoy cansada. Es muy grande is right: it describes the museum."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to two banks.",
        "source": "Hay un banco cerca del museo.",
        "answer": "Hay dos bancos cerca del museo.",
        "explanation": "Hay stays the same for one or many; only the noun changes."
      },
      {
        "type": "speak",
        "text": "Está cerca, al lado del parque.",
        "prompt": "Respond aloud: a tourist asks you «¿Dónde está el museo?» Say it's near, next to the park.",
        "explanation": "Location takes estar; al lado de + el parque = al lado del parque."
      }
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-day-in-madrid-evening",
    "Beginner Challenge: A Day in Madrid — Evening",
    "Emma's day continues: lunch with a new friend, shopping, and plans for the night.",
    "8 min",
    [
      {
        "heading": "14:30 — Lunch with Lucas",
        "body": [
          "Emma meets a Spanish student at the restaurant. Watch ser and estar: what you are (a profession, a student) takes ser with no article; what's true just now (on vacation) takes estar."
        ],
        "examples": [
          {
            "es": "—¿Eres estudiante?",
            "en": "Are you a student?"
          },
          {
            "es": "—Sí, estudio arte en la universidad. ¿Y tú?",
            "en": "Yes, I study art at the university. And you?"
          },
          {
            "es": "—Soy enfermera, pero ahora estoy de vacaciones.",
            "en": "I'm a nurse, but I'm on vacation right now."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Why does Emma say «estoy de vacaciones» but «soy enfermera»?",
            "options": [
              "Being on vacation is temporary; being a nurse is her profession.",
              "Vacaciones is plural.",
              "Enfermera is feminine.",
              "Both could use ser."
            ],
            "correctIndex": 0,
            "explanation": "A profession is identity, so ser; a vacation is a temporary state, so estar. Number and gender don't decide between the two verbs."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Change it to ask about a teacher (a man).",
            "source": "¿Eres estudiante?",
            "answer": "¿Eres profesor?",
            "explanation": "A profession takes ser and no article, just like estudiante."
          }
        ]
      },
      {
        "heading": "17:00 — Shopping",
        "body": [
          "Emma buys a present for her mother. Gustar agrees with what you like (me gusta este bolso, le gustan estas bufandas), and so does cuesta / cuestan."
        ],
        "examples": [
          {
            "es": "—Me gusta este bolso. ¿Cuánto cuesta?",
            "en": "I like this bag. How much is it?"
          },
          {
            "es": "—Cuarenta euros. ¿Y le gustan estas bufandas?",
            "en": "Forty euros. And do you like these scarves?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "Sí, me ___ mucho. ¡Son muy bonitas!",
            "answer": "gustan",
            "en": "Yes, I [like] them a lot. They're very pretty!",
            "explanation": "Them = las bufandas, plural, so gustan."
          },
          {
            "type": "multiple-choice",
            "question": "The seller asks «¿Le gustan estas bufandas?» Emma loves them. What does she say?",
            "options": [
              "Sí, me encantan.",
              "Sí, me encanta.",
              "Sí, le encantan.",
              "Sí, me gustas."
            ],
            "correctIndex": 0,
            "explanation": "Encantar agrees with the scarves (plural: encantan), and Emma talks about herself (me). Le would mean \"he / she loves them\", and gustas means \"you are pleasing\"."
          }
        ]
      },
      {
        "heading": "21:00 — Plans for tonight",
        "body": [
          "Emma and Lucas make plans: ¿Vamos a...? suggests doing something together, and tener mucha hambre says how hungry you are."
        ],
        "examples": [
          {
            "es": "—¿Vamos a cenar tapas?",
            "en": "Shall we have tapas for dinner?"
          },
          {
            "es": "—¡Sí! Tengo mucha hambre.",
            "en": "Yes! I'm really hungry."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "Perfecto. Hay un bar muy bueno ___ de mi casa.",
            "answer": "al lado",
            "en": "Perfect. There's a really good bar [next to] my house.",
            "explanation": "Next to is al lado de."
          }
        ]
      }
    ],
    [
      {
        "type": "multiple-choice",
        "question": "What does Lucas study?",
        "options": [
          "Art",
          "Nursing",
          "History",
          "Music"
        ],
        "correctIndex": 0,
        "explanation": "\"Estudio arte en la universidad\": he studies art. Emma is the nurse."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Emma y Lucas ___ a cenar tapas.",
        "answer": "van",
        "en": "Emma and Lucas are [going] to have tapas for dinner.",
        "explanation": "Two people = ellos, so van a + infinitive."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Las bufandas ___ de seda.",
        "answer": "son",
        "en": "The scarves [are] made of silk.",
        "explanation": "What something is made of takes ser de."
      },
      {
        "type": "matching",
        "instructions": "Match each moment of the day to Emma's feeling.",
        "pairs": [
          {
            "left": "en el museo",
            "right": "cansada pero contenta"
          },
          {
            "left": "antes de cenar",
            "right": "con mucha hambre"
          },
          {
            "left": "con su regalo",
            "right": "muy feliz"
          }
        ],
        "explanation": "Feelings in the moment: estar cansada, tener hambre, estar feliz."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I like this bag but it's very expensive.",
        "answer": "Me gusta este bolso pero es muy caro.",
        "altAnswers": [
          "Me gusta este bolso, pero es muy caro."
        ],
        "explanation": "One bag, so gusta; caro agrees with bolso."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "Hoy es un día perfecto en Madrid.",
        "answer": "Today is a perfect day in Madrid.",
        "altAnswers": [
          "It's a perfect day in Madrid today."
        ],
        "explanation": "Ser for describing the day."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Mañana",
          "Emma",
          "y",
          "Lucas",
          "van",
          "a",
          "visitar",
          "el",
          "Palacio",
          "Real."
        ],
        "translation": "Tomorrow Emma and Lucas are going to visit the Royal Palace.",
        "explanation": "Time, subject, then ir a + infinitive."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change to Lucas (él).",
        "source": "Estudio historia en la universidad.",
        "answer": "Estudia historia en la universidad.",
        "altAnswers": [
          "Lucas estudia historia en la universidad.",
          "Él estudia historia en la universidad."
        ],
        "explanation": "Él takes the -a ending for -ar verbs: estudia."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Soy médica, pero ahora soy de vacaciones.",
        "answer": "Soy médica, pero ahora estoy de vacaciones.",
        "altAnswers": [
          "Soy médica, pero estoy de vacaciones ahora."
        ],
        "explanation": "The profession takes ser, but being on vacation is temporary: estar de vacaciones."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Make it plural.",
        "source": "Me gusta esta bufanda. ¿Cuánto cuesta?",
        "answer": "Me gustan estas bufandas. ¿Cuánto cuestan?",
        "explanation": "Three words follow the plural noun: gustan, estas and cuestan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "Do you (formal) like these bags?",
        "answer": "¿Le gustan estos bolsos?",
        "altAnswers": [
          "¿A usted le gustan estos bolsos?"
        ],
        "explanation": "Usted takes le; plural bolsos takes gustan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Tengo mucho hambre y mucha sed.",
        "answer": "Tengo mucha hambre y mucha sed.",
        "explanation": "Hambre is feminine, so mucha, just like mucha sed."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "There's a very good restaurant next to the hotel.",
        "answer": "Hay un restaurante muy bueno al lado del hotel.",
        "explanation": "Hay for \"there is\"; al lado del for \"next to the\"."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Las bufandas son muy ___.",
        "answer": "bonitas",
        "en": "The scarves are very [pretty].",
        "altAnswers": [
          "lindas",
          "preciosas"
        ],
        "explanation": "The adjective agrees with bufandas: feminine plural."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "¿Te ___ estos zapatos?",
        "answer": "gustan",
        "en": "Do you [like] these shoes?",
        "explanation": "Estos zapatos is plural, so gustan."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Lucas ___ estudiante de arte.",
        "answer": "es",
        "en": "Lucas [is] an art student.",
        "explanation": "Being a student is identity, so ser, and no article."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Esta",
          "noche",
          "vamos",
          "a",
          "cenar",
          "tapas",
          "en",
          "un",
          "bar"
        ],
        "translation": "Tonight we're going to have tapas at a bar",
        "explanation": "Time, then vamos a + infinitive, object, place."
      },
      {
        "type": "multiple-choice",
        "question": "Emma says \"I'm a nurse.\" Which is right?",
        "options": [
          "Soy enfermera.",
          "Estoy enfermera.",
          "Tengo enfermera.",
          "Soy enfermero."
        ],
        "correctIndex": 0,
        "explanation": "Professions take ser, and Emma uses the feminine enfermera. Estar is for states, tengo means \"I have\", and enfermero is the masculine form."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Emma está enfermera.",
        "answer": "Emma es enfermera.",
        "explanation": "A profession is identity, so ser, with no article."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to a plan with ir a.",
        "source": "Visitamos el Palacio Real.",
        "answer": "Vamos a visitar el Palacio Real.",
        "altAnswers": [
          "Nosotros vamos a visitar el Palacio Real."
        ],
        "explanation": "Ir takes the person (vamos), then a and the infinitive."
      },
      {
        "type": "speak",
        "text": "Me gusta esta camiseta. ¿Cuánto cuesta?",
        "prompt": "Respond aloud: in a shop, say you like this T-shirt and ask how much it costs.",
        "explanation": "One T-shirt: gusta and cuesta, and esta agrees with camiseta."
      }
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-challenge-your-introduction",
    "Beginner Challenge: Write Your Introduction",
    "Assemble a complete self-introduction, line by line — the kind of paragraph you'll write for a language exchange profile.",
    "8 min",
    [
      {
        "heading": "The model profile",
        "body": [
          "Read the model. It uses nearly every Beginner topic in five lines, and each line answers a question: ¿Cómo te llamas? ¿Cuántos años tienes? ¿De dónde eres? ¿Qué haces? ¿Qué te gusta?",
          "Notice the verbs: llamarse for your name, tener for age, ser for origin and profession (no article: soy profesor), vivir and trabajar for where, gustar / encantar agreeing with what you like."
        ],
        "examples": [
          {
            "es": "Me llamo Sam y tengo treinta años.",
            "en": "My name is Sam and I'm thirty."
          },
          {
            "es": "Soy de Toronto, pero ahora vivo en Chicago.",
            "en": "I'm from Toronto, but now I live in Chicago."
          },
          {
            "es": "Soy profesor de música. Trabajo en una escuela.",
            "en": "I'm a music teacher. I work at a school."
          },
          {
            "es": "Me gusta cocinar y me encantan los perros.",
            "en": "I like cooking and I love dogs."
          },
          {
            "es": "Los fines de semana voy al parque con mi perra, Luna.",
            "en": "On weekends I go to the park with my dog, Luna."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Which topics appear in Sam's profile?",
            "options": [
              "age with tener",
              "origin with ser de",
              "gustar / encantar",
              "weather with hacer"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explanation": "Tengo treinta años, soy de Toronto and me gusta / me encantan are all there; Sam never mentions the weather."
          },
          {
            "type": "multiple-choice",
            "question": "Why does Sam say «soy profesor» with no article?",
            "options": [
              "After ser, a profession takes no article.",
              "Profesor is plural.",
              "Sam is talking about the future.",
              "Un is only used for women."
            ],
            "correctIndex": 0,
            "explanation": "Ser + profession drops the article: soy profesor, es enfermera. It has nothing to do with number, time or gender."
          }
        ]
      },
      {
        "heading": "Write yours",
        "body": [
          "Now fill in a profile for Paula, using her notes: 25 · Valencia · nurse · hospital · likes reading · loves the beach. Use the same verbs as Sam, changed for Paula's details."
        ],
        "examples": [
          {
            "es": "Me llamo Paula…",
            "en": "My name is Paula…"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "Me llamo Paula y ___ veinticinco años.",
            "answer": "tengo",
            "en": "My name is Paula and I['m] twenty-five years old.",
            "explanation": "Age takes tener: tengo."
          },
          {
            "type": "fill-blank",
            "prompt": "How do you say the bold words in Spanish?",
            "sentence": "___ de Valencia.",
            "answer": "Soy",
            "en": "[I'm] from Valencia.",
            "explanation": "Origin takes ser de."
          }
        ]
      }
    ],
    [
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Soy enfermera y ___ en un hospital.",
        "answer": "trabajo",
        "en": "I'm a nurse and I [work] in a hospital.",
        "explanation": "Yo takes -o: trabajo."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Me ___ leer y me encanta la playa.",
        "answer": "gusta",
        "en": "I [like] reading and I love the beach.",
        "explanation": "An action (leer) takes singular gusta."
      },
      {
        "type": "multiple-choice",
        "question": "Which line would fit best at the end of a profile?",
        "options": [
          "¡Hasta pronto!",
          "Buenos días, señor.",
          "De nada.",
          "Lo siento."
        ],
        "correctIndex": 0,
        "explanation": "¡Hasta pronto! (see you soon) closes a friendly message. Buenos días is a greeting, de nada answers gracias, and lo siento is an apology."
      },
      {
        "type": "multiple-choice",
        "question": "Which line has an error?",
        "options": [
          "Soy una persona muy tranquila.",
          "Estoy de Valencia.",
          "Tengo dos hermanos.",
          "Me encanta viajar."
        ],
        "correctIndex": 1,
        "explanation": "Origin takes ser de: soy de Valencia. The other lines are correct."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I'm a student and I live with my family.",
        "answer": "Soy estudiante y vivo con mi familia.",
        "explanation": "Ser for being a student (no article), vivir for where you live."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I don't like cold weather, but I love snow.",
        "answer": "No me gusta el frío, pero me encanta la nieve.",
        "explanation": "No goes before me; el frío and la nieve are singular, so gusta / encanta."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order.",
        "words": [
          "Mi",
          "comida",
          "favorita",
          "es",
          "la",
          "pizza",
          "con",
          "mucho",
          "queso."
        ],
        "translation": "My favorite food is pizza with lots of cheese.",
        "explanation": "Subject, ser, then the description."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to Leo's details: Leo, 32.",
        "source": "Me llamo Sam y tengo treinta años.",
        "answer": "Me llamo Leo y tengo treinta y dos años.",
        "altAnswers": [
          "Me llamo Leo y tengo treinta y dos."
        ],
        "explanation": "Only the details change; from 31 up, numbers are three words: treinta y dos."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Estoy de Valencia, pero ahora vivo en Madrid.",
        "answer": "Soy de Valencia, pero ahora vivo en Madrid.",
        "altAnswers": [
          "Soy de Valencia, pero vivo en Madrid ahora."
        ],
        "explanation": "Origin takes ser de, never estar."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Soy un camarero y trabajo en un restaurante.",
        "answer": "Soy camarero y trabajo en un restaurante.",
        "altAnswers": [
          "Soy mesero y trabajo en un restaurante."
        ],
        "explanation": "Ser + profession takes no article."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I like to dance and I love museums.",
        "answer": "Me gusta bailar y me encantan los museos.",
        "explanation": "An action takes gusta; plural museos takes encantan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change mi perro to mis gatos.",
        "source": "Me encanta mi perro.",
        "answer": "Me encantan mis gatos.",
        "explanation": "Encantar and the possessive both follow the plural noun: encantan, mis."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Change it to talk about your sister.",
        "source": "Soy enfermera y trabajo en un hospital.",
        "answer": "Mi hermana es enfermera y trabaja en un hospital.",
        "altAnswers": [
          "Es enfermera y trabaja en un hospital.",
          "Ella es enfermera y trabaja en un hospital."
        ],
        "explanation": "Ella takes es and the -a ending: trabaja. Still no article before the profession."
      },
      {
        "type": "fill-blank",
        "prompt": "How do you say the bold words in Spanish?",
        "sentence": "Los fines de semana ___ a la playa con mis amigos.",
        "answer": "voy",
        "en": "On weekends I [go] to the beach with my friends.",
        "explanation": "Ir for yo is the irregular voy."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Correct the sentence.",
        "source": "Los fines de semana voy a el parque.",
        "answer": "Los fines de semana voy al parque.",
        "explanation": "A + el always fuses into al."
      },
      {
        "type": "speak",
        "text": "Soy estudiante y estudio medicina.",
        "prompt": "Respond aloud: someone asks «¿Trabajas o estudias?» Say you're a student and you study medicine.",
        "explanation": "Ser + estudiante with no article, then estudiar in the yo form."
      }
    ]
  ),
  L(
    "a1-final-review-3",
    "a1r-exit-ticket",
    "Beginner Exit Ticket: Ready for the Elementary level?",
    "The last Beginner lesson: a short, no-hints test of the ten skills Elementary will assume you have.",
    "9 min",
    [
      sec(
        "The ten skills",
        "Elementary builds on these directly: (1) ser (2) estar (3) regular present tense (4) irregular tener/ir/hacer (5) agreement (6) possessives (7) questions (8) gustar (9) numbers and time (10) hay and demonstratives. Each question below tests one.",
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
      fb("Skill 7: questions.", "¿___ cuesta el billete?", "Cuánto", "Asking a price uses cuánto: ¿Cuánto cuesta?"),
      fb("Skill 8: gustar.", "A mis hijos les ___ los videojuegos.", "encantan", "Los videojuegos is plural → encantan.", "encantar"),
      mc("Skill 9: time. 7:45 is…", ["las ocho menos cuarto", "las siete menos cuarto", "las siete y cuarenta", "las ocho y cuarto"], 0, "After half past, count down from the next hour: 7:45 = las ocho menos cuarto. \"Las siete menos cuarto\" is 6:45, \"siete y cuarenta\" is 7:40, and \"ocho y cuarto\" is 8:15."),
      mc(
        "Skill 10: hay and demonstratives. \"There are many people in that store (over there).\"",
        ["Hay mucha gente en aquella tienda.", "Está mucha gente en aquella tienda.", "Hay muchas gentes en aquel tienda.", "Hay mucha gente en aquel tienda."],
        0,
        "Hay + mucha gente (gente is a singular feminine noun), and tienda is feminine: aquella. \"Está\" can't introduce unspecified people, \"muchas gentes\" is plural, and \"aquel\" is masculine."
      ),
    ]
  ),
];
