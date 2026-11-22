// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1.ts by scripts/sync-content.mjs -- edit it there, not here.
// Redesign patches for the Beginner lessons (see patch.ts). Section numbers
// are the lesson's own section indexes. Every reteach text is at most 300
// characters and speaks to the exact mistake, in plain words.
import type { LessonPatch } from "./patch";
import { SER, TU_USTED, GREETINGS, ARTICLES, GENDER_ENDINGS, PLURALS, PEOPLE, ESTAR, SER_OR_ESTAR, SER_ESTAR_MEANING, AR_ENDINGS, NUMBERS_BUILD, CLOCK, WHEN, DATES, ER_IR_ENDINGS, QUESTION_WORDS, WHERE_WORDS } from "./concept-tables";

export const A1_PATCHES: Record<string, LessonPatch> = {
  "greetings-pronouns-ser-1": {
    goal: "introduce yourself, say where you're from with ser, and choose tú or usted.",
    sections: {
      0: { reteach: "Three pieces make an introduction: Hola, Me llamo + your name, Soy de + your country. Hola, me llamo Ana. Soy de México." },
      1: {
        addTables: [SER],
        reteach: "Each person has its own form of ser: soy, eres, es, somos, son. The form already says who, so the pronoun is usually left out: Soy de Chile, not always Yo soy de Chile.",
      },
      2: {
        addTables: [TU_USTED],
        reteach: "Usted is polite \"you\", and it takes the same form as él and ella: usted es, never usted eres. Tú is for friends: tú eres.",
      },
      3: { reteach: "The course uses Latin American Spanish: ustedes for \"you all\", with friends and strangers alike. Vosotros is used in Spain; you only need to recognize it." },
      4: {
        reteach: "Ser + de says where someone is from: Soy de Perú. Keep the de. For a plain job, drop un/una: Soy estudiante, Es profesora.",
      },
      5: {
        addTables: [GREETINGS],
        reteach: "The time of day picks the greeting: buenos días in the morning, buenas tardes in the afternoon, buenas noches after dark. Día is masculine, so it's buenos; tarde and noche are feminine, so buenas.",
      },
    },
  },
  "greetings-pronouns-ser-2": {
    goal: "say what you're not with no, and name people's jobs for a man or a woman.",
    sections: {
      0: { reteach: "No goes right before the verb: No soy de aquí. If me, te or se comes first, no goes before that: No me llamo Ana. Questions keep the same order: ¿Eres de aquí?" },
      1: {
        addTables: [PEOPLE],
        reteach: "To talk about a woman, change -o to -a (abogado → abogada) or add -a after a consonant (profesor → profesora). Words in -e or -ista stay the same: la estudiante, la dentista.",
      },
      2: { reteach: "Each job word follows one of three patterns: -o/-a pairs, consonant + a, or one form for both. Check the ending first, then pick the form." },
      3: { reteach: "In a first conversation, answer the question you were asked: ¿Cómo te llamas? → Me llamo... ¿De dónde eres? → Soy de... ¿A qué te dedicas? → Soy + job." },
    },
  },
  "gender-number-articles-1": {
    goal: "tell masculine from feminine nouns, pick el, la, un or una, and make nouns plural.",
    sections: {
      1: {
        addTables: [GENDER_ENDINGS],
        reteach: "Look at the ending: -o is usually masculine (el libro), -a usually feminine (la mesa). -dad and -ción are always feminine: la ciudad, la canción.",
      },
      2: {
        addTables: [ARTICLES],
        reteach: "The article copies the noun: el/un for masculine, la/una for feminine, los/las for plural. Unos/unas means \"some\": unas manos, because mano is feminine.",
      },
      3: {
        addTables: [PLURALS],
        reteach: "Vowel at the end? Add -s: casas. Consonant? Add -es: ciudades. A final z becomes c: lápices. A word like lunes doesn't change: los lunes.",
      },
      4: { reteach: "A group of only women is feminine: las chicas, ellas. A mixed group is masculine, even with one man: los chicos, ellos." },
      5: { reteach: "The words around a noun copy its gender: la puerta bonita, el carro bonito. If the article and the noun don't match, check the noun's gender first." },
    },
  },
  "gender-number-articles-2": {
    goal: "learn nouns with their article, say there is with hay, and say whose things are with de.",
    sections: {
      1: {
        watchOut: true,
        addTables: [GENDER_ENDINGS],
        reteach: "When the ending doesn't tell you (la pared, el reloj, el sofá), learn the noun with its article. Watch the exceptions: el día, el mapa, la mano.",
      },
      2: {
        reteach: "Hay is one word for \"there is\" and \"there are\": Hay una cama. Hay tres sillas. After hay, use un/una or a number, not el/la.",
        addTables: [{ head: ["Say", "Not"], rows: [["Hay una lámpara.", "Hay la lámpara."], ["Hay dos sillas.", "Hay las sillas."]] }],
      },
      3: { reteach: "Spanish has no 's. Put the thing first, then de + the owner: el sofá de Ana (Ana's sofa). El libro es de Luis." },
      4: { reteach: "Most -a nouns take la and most -o nouns take el. For the others (la pared, el reloj, el sofá, el jardín), the article is part of the word." },
    },
  },
  "a1r-dialogue-first-meetings": {
    goal: "hold a first conversation: names, where you're from, jobs, and tú or usted.",
    sections: {
      0: { reteach: "Answer with the yo form of the verb in the question: ¿Cómo te llamas? → Me llamo... ¿De dónde eres? → Soy de..." },
      1: { addTables: [SER], reteach: "Where someone is from is ser + de: Soy de Chile, Ella es de Cuba, Ellos son de México. Match the form to the person you're talking about." },
      2: { addTables: [TU_USTED], reteach: "With an older stranger, switch to usted, and the verb switches too: ¿Cómo se llama? ¿De dónde es? Usted takes the él/ella form." },
      3: { reteach: "Tú for coworkers your age, usted for clients, managers you don't know and older people. When in doubt, start with usted." },
      4: { reteach: "To introduce someone, say Él es... or Ella es...: Ella es Marta. Then the job, with no un/una: Es enfermera." },
    },
  },
  "a1r-dialogue-first-meetings-part-2": {
    goal: "use what you know in longer first conversations, with friends and with strangers.",
    sections: { 0: { addTables: [SER], reteach: "Es for one person, son for more than one: Ella es de México. Ellos son de México. Usted takes es too." } },
    optionNotes: { 0: ["", "Es is for one person; ellos is more than one, so it's son.", "Somos is for \"we\", not \"they\".", "Eres is for tú, one friend, not for ellos."] },
  },
  "greetings-pronouns-ser-1-unit-review": {
    goal: "show you can hear, say and write everything from this unit.",
    optionNotes: {
      4: ["El without an accent means \"the\". \"He\" is él.", "", "Mi (my) has no accent. Mí with an accent means \"me\", as in para mí.", "Él (he) needs its accent, and mi (my) doesn't."],
      5: ["Mano ends in -o but is feminine: la mano, so unas manos.", "", "Las manos means \"the hands\", not \"some hands\".", "Mano is plural with just -s: manos."],
    },
  },
  "a1r-contrast-articles": {
    goal: "choose between el/la and un/una, and know when Spanish leaves the article out.",
    sections: {
      1: { addTables: [ARTICLES], reteach: "Un/una brings in something new; el/la points to something the listener already knows. First Tengo un perro, then El perro es grande." },
      2: { watchOut: true, reteach: "Three places Spanish and English differ: no un/una before a plain job (Soy médico); no unos/unas for things you can't count (Quiero agua); and el/la for things in general (Me gusta el café)." },
      3: { reteach: "Unos/unas means \"some\" with things you can count, but Spanish often just drops it: Necesito lápices. Los/las means \"the\", a specific group." },
    },
    optionNotes: {
      0: ["", "Problema ends in -a but is masculine: un problema.", "El problema is \"the problem\", one you both already know.", "Problema is masculine, and la means \"the\"."],
      2: ["Una foto is any photo, not the one your friend knows.", "", "Unas fotos is more than one photo, and not a specific one.", "Foto is feminine (short for la fotografía), so it's unas, not unos."],
      12: ["Los libros means \"the books\", specific ones.", "", "Libro is masculine, so it's unos, not unas.", "Un is for one; libros is plural."],
    },
  },
  "a1r-error-hunt-pronouns-articles": {
    goal: "find and fix mistakes with ser, articles, accents and describing words.",
    sections: {
      0: { reteach: "Check in order: verb matches the subject, article matches the noun's gender and number, each describing word matches its noun. Yo soy, la casa blanca, los libros rojos." },
      1: { watchOut: true, reteach: "The accent changes the word: tú (you) and tu (your), él (he) and el (the). The pronoun has the accent; the word before a noun doesn't: Él es tu amigo." },
    },
    optionNotes: {
      0: ["Eres goes with tú, not yo.", "Son goes with ellos or ustedes.", "Somos goes with nosotros.", ""],
      14: ["El without an accent means \"the\". \"He\" is él.", "", "Mí with an accent means \"me\". \"My\" is mi.", "Both are wrong: él (he) needs the accent, mi (my) doesn't."],
      15: ["", "Mapa ends in -a but is masculine: el mapa, los mapas.", "Son is right, because the subject is plural.", "Los and mapa don't match: one is plural, one isn't."],
    },
  },
  "adjective-agreement": {
    goal: "make describing words match their noun and put them in the right place.",
    sections: {
      1: {
        addTables: [{ caption: "One describing word, four forms", head: ["", "One", "More than one"], rows: [["Masculine", "el carro rojo", "los carros rojos"], ["Feminine", "la casa roja", "las casas rojas"], ["-e or consonant", "el libro grande / la mesa azul", "los libros grandes / las mesas azules"]] }],
        reteach: "The describing word copies its noun. -o words have four forms: rojo, roja, rojos, rojas. Words in -e or a consonant have two: grande, grandes; azul, azules.",
      },
      2: { reteach: "Plural describing words work like nouns: -s after a vowel (altos), -es after a consonant (azules), z becomes c (felices)." },
      3: {
        addTables: [{ head: ["Before the noun", "After the noun"], rows: [["un, dos, mi, muchos", "rojo, inteligente, mexicano"], ["mi casa", "una casa grande"]] }],
        reteach: "Describing words usually go after the noun: un carro rojo, una mujer inteligente. Counting words and mi/tu go before: dos carros, mi carro.",
      },
      4: { reteach: "Find each describing word's noun first, then check that both have the same gender and number." },
    },
    optionNotes: { 13: ["Inglés is the masculine form; hermana is a woman.", "Ingleses is plural, and it's masculine.", "", "Inglesa has no accent: the accent drops when -a is added."] },
  },
  "a1r-transform-agreement": {
    goal: "change a whole sentence to plural or feminine without losing a single ending.",
    sections: {
      0: {
        build: [
          { text: "El niño es alto.", note: "Start: one boy." },
          { text: "La niña ...", note: "Change the noun, and the article follows." },
          { text: "La niña es alta.", note: "The describing word follows too." },
          { text: "Las niñas son altas.", note: "Plural: article, noun, verb and describing word all change." },
        ],
        reteach: "Change the noun first, then fix each word that copies it: the article, the describing word and the verb. El niño es alto → Las niñas son altas.",
      },
      1: { watchOut: true, reteach: "Words in -e or a consonant don't change for a woman: el chico inteligente, la chica inteligente. They only add -s or -es in the plural: inteligentes, azules." },
      2: { watchOut: true, reteach: "Nationalities ending in a consonant add -a for a woman and lose the accent: español → española, inglés → inglesa, alemán → alemana." },
    },
    optionNotes: {
      2: ["", "Simpáticas is still feminine; niños needs simpáticos.", "Las is feminine; niños needs los.", "Niño is one boy; the sentence is plural: niños."],
      3: ["", "Franceses is plural; one student is francés.", "Una is feminine, but francés is the masculine form.", "Un is for one; estudiantes is plural."],
      5: ["", "Coches is masculine, so it's rápidos.", "Verde must go plural with coches: verdes.", "Los needs coches, and the verb must be son."],
      15: ["Español must become española to match chica.", "", "Alto must become alta to match chica.", "La doesn't go with chico."],
    },
  },
  "adjectives-gender-number-drill-1": {
    goal: "pick el, la, los or las fast, including the nouns that break the rule.",
    sections: {
      0: { addTables: [GENDER_ENDINGS], reteach: "The ending is the clue: -o is usually masculine, -a usually feminine, and -dad and -ción are always feminine. La ciudad, la canción, el libro, la mesa." },
      1: { watchOut: true, reteach: "Some nouns break the pattern. Masculine: el problema, el idioma, el sistema, el clima, el día, el mapa. Feminine: la mano, la foto." },
      2: { addTables: [ARTICLES], reteach: "Ask two things: masculine or feminine, and one or more? El/la for one, los/las for more. A mixed group is masculine: los amigos." },
    },
    optionNotes: { 0: ["", "Clima ends in -a but is masculine, like el problema and el idioma."] },
  },
  "adjectives-gender-number-drill-1-part-2": {
    goal: "keep choosing the right article with new nouns, at speed.",
    sections: { 0: { addTables: [GENDER_ENDINGS, ARTICLES], reteach: "Find the noun's gender from its ending, then pick the matching article. Remember the rule breakers: el día, el mapa, el problema, la mano, la foto." } },
    optionNotes: {
      2: ["Flor is feminine: la flor, so unas flores.", "", "Un is for one; flores is plural.", "Una is for one; flores is plural."],
      11: ["Mano is feminine even though it ends in -o.", "", "The word is manos; only the article changes.", "The word is manos, and it's feminine."],
    },
  },
  "adjectives-gender-number-drill-2": {
    goal: "use un, una, unos and unas, make plurals, and match describing words.",
    sections: {
      0: { addTables: [ARTICLES], reteach: "Un and una mean \"a\"; unos and unas mean \"some\". They copy the noun: un libro, una mesa, unos libros, unas mesas." },
      1: { addTables: [PLURALS], reteach: "Add -s after a vowel (casas) and -es after a consonant (papeles). A final z becomes c: pez → peces." },
      2: { reteach: "The describing word goes after the noun and copies it: un carro rojo, unas casas rojas. Words in -e or a consonant only change for plural: verde, verdes." },
    },
  },
  "adjectives-gender-number-drill-3": {
    goal: "use buen, mal and gran before a noun, and build whole phrases that match.",
    sections: {
      0: {
        addTables: [{ caption: "Short forms before a noun", head: ["Word", "Before a masculine noun", "Before a feminine noun"], rows: [["bueno", "un buen amigo", "una buena amiga"], ["malo", "un mal día", "una mala idea"], ["grande", "un gran hombre", "una gran mujer"]], note: "After the noun nothing shortens: un amigo bueno, una casa grande." }],
        reteach: "Before a masculine noun, bueno and malo drop the -o: un buen amigo, un mal día. Grande becomes gran before any single noun: un gran hombre, una gran mujer.",
      },
      1: { reteach: "Build in order: article + noun + describing word, and check that all three match. Gran before the noun means \"great\"; grande after it means \"big\"." },
    },
    optionNotes: {
      3: ["", "Grande stays whole only after the noun: una casa grande.", "Grandes is the plural form.", "Gran is one word."],
      18: ["Before a single noun, grande shortens to gran.", "", "Gran only goes before the noun.", "Hombre is masculine: un."],
    },
  },
  "review-pronouns-ser-gender-articles": {
    goal: "show you can use ser, gender and articles together.",
    sections: { 0: { addTables: [SER, ARTICLES], reteach: "Two checks fix most mistakes here: the form of ser matches the person (usted es, ustedes son), and the article matches the noun (la mano, el día)." } },
    optionNotes: {
      0: ["Tú goes with eres.", "Nosotros goes with somos.", "", "Ustedes goes with son. Sois is Spain's vosotros form."],
      4: ["Nosotros and ingenieros are for men or a mixed group.", "", "Ingeniero is one man; the group is plural and all women.", "Both words must be feminine and plural."],
      12: ["Eres is the tú form, too familiar for an older stranger.", "Sois is for a group of friends in Spain.", "", "Ustedes is for more than one person."],
      15: ["", "Mano is feminine: la mano.", "One hand takes es, not son.", "Las is plural; mano is one."],
    },
  },
  "ser-vs-estar-1": {
    goal: "choose ser for what something is and estar for how or where it is.",
    sections: {
      0: { addTables: [SER], reteach: "Ser says what something is: who, job, origin, what it's like, the time. María es doctora. Es de Chile. Son las tres. These don't change from one moment to the next." },
      1: { addTables: [ESTAR], reteach: "Estar says how or where something is right now: Estoy cansado. El agua está fría. El hospital está lejos. Where a person, thing or place is always takes estar." },
      2: { addTables: [SER_OR_ESTAR], reteach: "Ask: is it where something is? Estar. Is it what it is (who, job, origin, traits, time)? Ser. Is it how it is right now? Estar." },
    },
    optionNotes: {
      1: ["", "A job says what María is, so ser, not estar.", "Son is for more than one person.", "Están is estar, and plural."],
      2: ["", "Cold today is how the water is now, so estar.", "Eres is for tú.", "Estamos is for nosotros."],
      3: ["", "Where something is takes estar, even a building.", "Están is plural; there's one hospital.", "Estás is for tú."],
    },
  },
  "ser-vs-estar-2": {
    goal: "talk about feelings with estar, personality with ser, and words that change meaning.",
    sections: {
      0: { addTables: [SER_OR_ESTAR], reteach: "Name the verb's job first: who someone is or what they're like → ser. How they feel or where they are → estar." },
      1: { reteach: "Feelings and conditions are how someone is now, so estar: Estoy contento, Está enferma. Personality is what someone is like, so ser: Es amable." },
      2: { watchOut: true, addTables: [SER_ESTAR_MEANING], reteach: "A few words change meaning. With ser it's what something is like: Es aburrido (boring). With estar it's how it is now: Está aburrido (bored)." },
    },
    optionNotes: { 5: ["", "Está aburrida means the movie is bored.", "Película is feminine: aburrida.", "One movie takes es, not son."] },
  },
  "ser-vs-estar-mastery-check": {
    goal: "pick ser or estar in the cases learners most often miss.",
    sections: { 0: { addTables: [SER_OR_ESTAR], reteach: "What it is → ser. How or where it is right now → estar. Food that tastes good today, coffee that has gone cold, being married: all estar." } },
    optionNotes: {
      4: ["Es rica says the soup is always good. \"Today\" makes it estar.", "", "Son is plural and ser.", "Están is plural; there's one soup."],
      7: ["Eres is for tú, and casada takes estar.", "", "Son is plural and ser.", "Estás is for tú."],
      11: ["Es frío says coffee is cold by nature. This cup is cold now: estar.", "", "Son is plural.", "Estás is for tú."],
    },
  },
  "ser-vs-estar-mastery-check-part-2": {
    goal: "keep choosing ser or estar with new sentences.",
    sections: { 0: { addTables: [SER_OR_ESTAR], reteach: "What it is → ser. How or where it is right now → estar. Check which question the sentence answers before you choose." } },
  },
  "a1r-error-hunt-ser-estar": {
    goal: "spot and fix ser and estar mistakes.",
    sections: {
      0: { addTables: [SER_OR_ESTAR], reteach: "The two usual mistakes: ser for where something is (say Mi casa está en el centro) and estar for a job (say Mi padre es médico)." },
      1: { watchOut: true, reteach: "Where an event takes place uses ser: La reunión es en la oficina. And muerto takes estar, even though it's permanent: Está muerto." },
    },
    optionNotes: {
      4: ["", "It's the other way round: ser is what she's like, estar is how she feels.", "Es aburrida means she's boring.", "Está aburrida means she's bored."],
      11: ["A job takes ser: es médico.", "Where a house is takes estar.", "", "Where a park is takes estar."],
    },
  },
  "ser-vs-estar-drill-1": {
    goal: "use ser for who, what and when, and estar for where.",
    sections: {
      0: { addTables: [SER], reteach: "Ser is for who or what someone is: Soy estudiante. Es de Cuba. Ask \"what is it?\" If that's the question, use ser." },
      1: { reteach: "Clocks, dates and family are ser too: Son las dos. Hoy es lunes. Ana es mi prima." },
      2: { addTables: [ESTAR], reteach: "Where a person, thing or place is takes estar: La leche está en el refrigerador. Only events use ser: La fiesta es en mi casa." },
    },
    optionNotes: {
      0: ["", "Being a student says what you are: ser.", "Es is for él or ella.", "Está is estar, and for él or ella."],
      1: ["Where a thing is takes estar.", "", "Son is plural and ser.", "Están is plural; milk is one thing."],
      14: ["Where people are takes estar.", "", "Padres is plural: están.", "Hay means \"there is\"; it can't follow mis padres."],
    },
  },
  "ser-vs-estar-drill-2": {
    goal: "use estar for feelings and conditions, and tell boring from bored.",
    sections: {
      0: { addTables: [ESTAR], reteach: "How someone feels or how something is right now takes estar: Estoy nervioso. La puerta está cerrada." },
      1: { watchOut: true, addTables: [SER_ESTAR_MEANING], reteach: "Aburrido, listo, malo and rico change meaning: es aburrido (boring), está aburrido (bored); es malo (bad), está malo (sick or gone off)." },
      2: { reteach: "Something happening right now is estar + the -ando or -iendo form: Estoy hablando. Están comiendo." },
    },
    optionNotes: {
      0: ["", "Está aburrida would mean the film feels bored.", "Son is plural.", "Están is plural."],
      1: ["Somos aburridos means \"we are boring\".", "", "Es is for one person.", "Está is for one person."],
      14: ["Es mala says milk is a bad thing in general.", "", "One milk: está, mala.", "Leche is feminine: mala."],
    },
  },
  "ser-vs-estar-drill-3": {
    goal: "choose ser or estar quickly in any sentence.",
    sections: {
      0: { addTables: [SER_OR_ESTAR], reteach: "What it is (who, job, origin, time, events) → ser. Where it is and how it is right now → estar." },
      1: { reteach: "For the time, use es with one o'clock and son with the rest: Es la una. Son las dos. ¿Qué hora es?" },
    },
    optionNotes: {
      5: ["", "The time always takes ser.", "The question is always ¿Qué hora es?, with es.", "The time takes ser, not estar."],
      14: ["A party is an event, and where an event happens takes ser.", "", "Hay can't follow la fiesta.", "One party: es."],
    },
  },
  "a1r-mission-describe-a-photo": {
    goal: "describe the people and places in a photo using ser and estar together.",
    sections: {
      0: { addTables: [SER_OR_ESTAR], reteach: "¿Cómo es? asks what someone is like: Es alto y simpático. ¿Cómo está? asks how they are now: Está cansada. ¿Dónde está? asks where." },
      1: { reteach: "Where a place or thing is takes estar, even if it never moves: El hotel está cerca de la playa. Where someone is from takes ser: Es de Lima." },
    },
    optionNotes: {
      5: ["", "Where the hotel is takes estar.", "That says what the hotel is like, not where it is.", "That says where you are, not the hotel."],
      6: ["", "That says where he is. ¿Cómo es? asks what he's like.", "That answers ¿Cómo está?, how he is.", "Where someone is takes estar, and it doesn't answer the question."],
      7: ["", "Tired is how she is now: estar.", "That's her job, not how she is.", "Where someone is from takes ser: Es de Lima."],
    },
  },
  "a1r-contrast-hay-esta": {
    goal: "choose hay for something new and está for something already known.",
    sections: {
      0: { reteach: "Hay brings in something new: Hay un banco cerca. Está says where a known thing is: El banco está en la plaza. Often you use both, one after the other." },
      1: {
        addTables: [{ head: ["After hay", "Before está / están"], rows: [["un, una, unos, unas", "el, la, los, las"], ["dos, tres, muchos", "mi, tu, su"], ["no article", "a name: Ana, Lima"]] }],
        reteach: "Look at the little word. Un, una, a number or no article → hay. El, la, mi or a name → está or están.",
      },
    },
    optionNotes: { 19: ["Un hospital is something new, so hay, not está.", "", "Es says what something is, not that it exists.", "After hay, use un, not el."] },
  },
  "numbers-0-100-1": {
    goal: "count from 0 to 199 and build any number from its parts.",
    sections: {
      0: { addTables: [NUMBERS_BUILD], reteach: "16 to 29 are one word: dieciséis, veintidós. Learn 0 to 15 by heart; the rest are built from parts." },
      1: { reteach: "From 31 on, write three words with y in the middle: treinta y uno, cuarenta y cinco. Only 16 to 29 are squeezed into one word." },
      2: { watchOut: true, reteach: "Exactly 100 is cien. With more after it, it becomes ciento, with no y: ciento uno (101), ciento veinte (120)." },
    },
    optionNotes: {
      0: ["Treinta y uno is right, but it's three words.", "", "Cuarenta y dos is three words.", "It's ciento uno, with no y."],
      6: ["Cien is only for exactly 100.", "", "No y after ciento.", "Cien becomes ciento, and there's no y."],
    },
  },
  "numbers-0-100-2": {
    goal: "use un, una and uno, say first to tenth, and give ages, phone numbers and prices.",
    sections: {
      0: {
        addTables: [{ caption: "One: un, una or uno?", head: ["Where", "Form", "Example"], rows: [["before a masculine noun", "un", "un año, veintiún años"], ["before a feminine noun", "una", "una mesa, veintiuna mesas"], ["no noun after it", "uno", "Tengo uno."]] }],
        reteach: "Before a masculine noun, uno becomes un: un año. Before a feminine noun, una: una mesa. Alone, it stays uno: Tengo uno.",
      },
      1: { watchOut: true, reteach: "First to tenth match the noun: la segunda puerta, el segundo piso. Primero and tercero drop the -o before a masculine noun: el primer día, el tercer piso." },
      2: { reteach: "Age uses tener, not ser: Tengo veinticinco años, never Soy veinticinco. Prices are a plain number plus the money: diez pesos." },
    },
    optionNotes: {
      0: ["Tercero drops its -o before a masculine noun.", "", "Piso is masculine, so not tercera.", "Tres means three, not third."],
      4: ["Puerta is feminine: la segunda.", "", "Segundo must match puerta: segunda.", "Dos means two, not second."],
    },
  },
  "telling-time-1": {
    goal: "ask and tell the time, with half past, quarter past and quarter to.",
    sections: {
      0: { addTables: [CLOCK], reteach: "¿Qué hora es? never changes. Answer Es la una for one o'clock, and Son las... for every other hour: Son las tres." },
      1: { reteach: "Half past is y media, quarter past is y cuarto. Quarter to counts back from the next hour: 3:45 is las cuatro menos cuarto." },
      2: { reteach: "Up to half past, add minutes with y: las tres y diez. After half past, take them from the next hour with menos: 4:40 is las cinco menos veinte." },
    },
    optionNotes: {
      0: ["", "¿A qué hora es? asks when something happens.", "The question uses qué, not cuál.", "Tiempo is time in general, or the weather."],
      4: ["That's 1:35. Count back from the next hour, three.", "", "That's 3:25.", "Two takes son las, and Spanish counts back after half past."],
    },
  },
  "telling-time-2": {
    goal: "say morning, afternoon or night, and say at what time things happen.",
    sections: {
      0: { reteach: "No AM or PM: add de la mañana, de la tarde or de la noche. Son las ocho de la mañana. Noon and midnight have no la or las: Es mediodía. Es medianoche." },
      1: { addTables: [WHEN], reteach: "The time now: Es la una, Son las dos. When something happens: a la una, a las dos. ¿A qué hora es la clase? A las nueve." },
      2: { reteach: "To make a plan, say the time with a: Nos vemos a las siete. Use la for one o'clock and las for the rest." },
    },
    optionNotes: {
      3: ["That makes it 3 in the morning.", "", "Three is still afternoon, not night.", "En punto means \"exactly\"."],
      4: ["One o'clock takes la, not las.", "", "For when something happens, use a, not es.", "The part of the day takes de: de la tarde."],
    },
  },
  "days-months-dates": {
    goal: "say the day, the month and the date, and when things happen.",
    sections: {
      0: { addTables: [DATES], reteach: "\"On Monday\" is el lunes, with no en. \"On Mondays\" is los lunes. Days have no capital letter." },
      1: { reteach: "Months take en: en julio, en mayo. No capital letter." },
      2: { reteach: "A date is el + number + de + month: el cuatro de julio. Use a plain number; only the first can be el primero." },
    },
    optionNotes: {
      3: ["", "Spanish puts the day first, with el and de.", "The day comes first: el cuatro de julio.", "Don't drop de."],
      4: ["", "Days have no capital letter.", "\"On Monday\" is el lunes, not en lunes.", "Months have no capital letter either."],
      5: ["", "That's the day of the week; fecha asks for the date.", "That's the time.", "That says \"it's in May\", not today's date."],
      17: ["It needs de, and the first is el primero.", "", "The day comes first, with el and de.", "Primero only shortens right before a noun."],
    },
  },
  "present-tense-ar-verbs": {
    goal: "say what people do with any regular -ar verb.",
    sections: {
      0: {
        addTables: [AR_ENDINGS],
        build: [
          { text: "hablar", note: "the whole verb: to speak" },
          { text: "habl-", note: "take off -ar" },
          { text: "habl + amos", note: "add the ending for nosotros" },
          { text: "hablamos", note: "we speak" },
        ],
        reteach: "Take off -ar and add the ending for the person: -o, -as, -a, -amos, -an. Hablo, hablas, habla, hablamos, hablan.",
      },
      1: { watchOut: true, reteach: "Usted uses the él ending and ustedes the ellos ending: usted trabaja, ustedes trabajan. A group with yo in it is nosotros: Mi hermano y yo trabajamos." },
      2: { reteach: "The ending tells you who: -o is I, -as is you, -a is he or she, -amos is we, -an is they." },
      3: { reteach: "A new -ar verb works like hablar: descansar → descanso, descansas, descansa, descansamos, descansan." },
    },
    optionNotes: {
      2: ["Trabajo is the yo form.", "Trabajas is the tú form.", "", "Trabajan is for ellos or ustedes."],
      14: ["", "Descansan is \"they rest\".", "Descanso is \"I rest\".", "Descansáis is Spain's vosotros form."],
    },
  },
  "a1r-error-hunt-verbs-agreement": {
    goal: "find and fix wrong verb endings and describing words that don't match.",
    sections: {
      0: { addTables: [AR_ENDINGS], reteach: "Check two links: the verb ending matches who does it (yo hablo, ellos hablan), and the describing word matches its noun (las chicas simpáticas)." },
      1: { reteach: "Find the subject first. Then check the verb ending, then each describing word." },
    },
    optionNotes: {
      3: ["", "Inteligente has no -a form: inteligentes.", "Las chicas is plural: son.", "La must be las, and inteligente must be plural."],
      13: ["", "Son is the right form.", "There's no -er or -ir verb here.", "Las is right for chicas."],
    },
  },
  "present-tense-verbs-drill-1": {
    goal: "produce the right verb ending quickly.",
    sections: {
      0: { addTables: [AR_ENDINGS], reteach: "For yo, -ar verbs end in -o: hablo. For tú, in -as: hablas." },
      1: { reteach: "The plural -ar endings: -amos for nosotros, -an for ustedes and ellos. Hablamos, hablan." },
      2: { reteach: "-er verbs use e where -ar verbs use a: como, comes, come, comemos, comen." },
    },
    optionNotes: {
      3: ["", "Escribe is for él, ella or usted.", "Escribes is for tú.", "Escribimos is for nosotros."],
      4: ["Trabajo is for yo.", "Trabajas is for tú.", "", "Trabajan is for ustedes, more than one person."],
    },
  },
  "present-tense-er-ir-verbs-1": {
    goal: "say what people do with regular -er and -ir verbs.",
    sections: {
      0: {
        addTables: [ER_IR_ENDINGS],
        build: [
          { text: "comer", note: "the whole verb: to eat" },
          { text: "com-", note: "take off -er" },
          { text: "com + en", note: "add the ending for ellos" },
          { text: "comen", note: "they eat" },
        ],
        reteach: "-er verbs work like -ar verbs with e in place of a: como, comes, come, comemos, comen.",
      },
      1: { watchOut: true, reteach: "-ir verbs use the -er endings except for nosotros: vivimos, escribimos, with i. Not vivemos or escribemos." },
      2: { reteach: "Beber, leer, aprender, escribir and abrir are all regular: bebo, lees, aprende, escribimos, abren." },
    },
    optionNotes: {
      2: ["Escribo is for yo.", "", "Escribes is for tú.", "Escriben is for ellos or ustedes."],
      13: ["Escribir is an -ir verb, so nosotros takes -imos.", "", "Escriben is for ellos.", "Escribís is Spain's vosotros form."],
      19: ["", "-er verbs take -en, not -an.", "Vendimos isn't a present form, and it's not for \"they\".", "Vende is for one person."],
    },
  },
  "present-tense-er-ir-verbs-2": {
    goal: "use -er and -ir verbs in a real conversation, and learn twenty more.",
    sections: {
      0: { addTables: [ER_IR_ENDINGS], reteach: "-er and -ir verbs share -o, -es, -e, -en. Only nosotros is different: comemos, but vivimos." },
      1: { reteach: "For a new verb, look at the last two letters. -er → nosotros in -emos (vendemos). -ir → nosotros in -imos (añadimos)." },
    },
    optionNotes: { 17: ["", "Añadir is an -ir verb: -imos.", "Añaden is \"they add\".", "Añadís is Spain's vosotros form."] },
  },
  "a1r-contrast-er-ir": {
    goal: "never mix up -emos and -imos again.",
    sections: {
      0: { addTables: [ER_IR_ENDINGS], reteach: "Comer and vivir look the same in four forms: como/vivo, comes/vives, come/vive, comen/viven." },
      1: { watchOut: true, reteach: "Only nosotros shows the difference. -er verbs: comemos, leemos. -ir verbs: vivimos, escribimos." },
    },
    optionNotes: {
      12: ["Discutir is an -ir verb: -imos.", "", "Discutís is Spain's vosotros form.", "Discuten is for ellos."],
      13: ["", "The endings are swapped.", "Vivir is an -ir verb: vivimos.", "Comer is an -er verb: comemos."],
    },
  },
  "question-words": {
    goal: "ask who, what, where, when, why, how and how many.",
    sections: {
      0: {
        addTables: [QUESTION_WORDS],
        build: [
          { text: "Tu hermano vive en Lima.", note: "a statement" },
          { text: "¿Dónde ...?", note: "the question word goes first" },
          { text: "¿Dónde vive ...?", note: "then the verb, with no \"does\"" },
          { text: "¿Dónde vive tu hermano?", note: "the subject comes last" },
        ],
        reteach: "Question word first, then the verb, then the subject: ¿Dónde vive tu hermano? Spanish has no word for \"do\" or \"does\".",
      },
      1: { watchOut: true, addTables: [WHERE_WORDS], reteach: "The small word goes to the front, not the end: ¿De dónde es tu profesor? ¿Con quién vives? And cuánto matches its noun: cuántos años, cuántas personas." },
      2: { reteach: "In an interview, each answer copies the verb of its question: ¿Dónde vives? → Vivo en... ¿Qué estudias? → Estudio..." },
      3: { reteach: "Each question word has its own answers: ¿Cuándo? → hoy, mañana, siempre. ¿Dónde? → a place. ¿Quién? → a person. ¿Cuánto? → an amount." },
    },
    optionNotes: {
      2: ["Cuándo asks when.", "", "Cuánto asks how much.", "Quién asks who."],
      11: ["", "De can't stay at the end; it goes first.", "De goes before dónde.", "Dónde needs its accent mark in a question."],
    },
  },
  "a1r-answer-first-build-question": {
    goal: "work out the question from its answer.",
    sections: {
      0: { addTables: [QUESTION_WORDS], reteach: "Find the key piece of the answer and swap it for a question word: a place → ¿dónde?, a time → ¿cuándo?, a person → ¿quién?, a reason → ¿por qué?" },
      1: { addTables: [WHERE_WORDS], reteach: "Look at the small word in the answer: en Lima → ¿dónde?, a México → ¿adónde?, de Venezuela → ¿de dónde?" },
    },
    optionNotes: {
      3: ["", "That asks where they are; the answer would use están en.", "That asks where they're going; the answer would use van a.", "That asks who they are."],
      4: ["", "That asks where you are, not where you're going.", "That asks where you're from.", "That asks when; the answer gives a place."],
      19: ["That asks when; porque gives a reason.", "", "That asks where.", "That asks what you're like."],
    },
  },
};
