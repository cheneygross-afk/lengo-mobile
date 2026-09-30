// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-additions.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Core A1 lessons added after the curriculum review: grammar the rest of
// the course already leans on but that no lesson taught. Stem-changing
// verbs show up in A1 exercises (juego, pido) and A2 explains reflexives
// as "conjugates like a stem-changing e→ie verb"; estar + gerund is
// "reminded" in the A1 drills; days, months and dates had no lesson at
// all. Woven in like the reinforcement lessons (see weave.ts), anchored
// after the lesson each one builds on.
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

export const A1_ADDITIONS: AnchoredLesson[] = [
  L(
    "present-tense-er-ir-verbs-2",
    "stem-changing-verbs-e-ie",
    "Stem-Changing Verbs: E → IE",
    "Querer, pensar, preferir and friends: the vowel in the stem changes, the endings don't.",
    "9 min",
    [
      sec(
        "The boot pattern",
        [
          "Some very common verbs change the last vowel of their stem when it's stressed. In querer (to want), the e becomes ie: quiero, quieres, quiere, quieren.",
          "The endings are the regular ones you already know. Only nosotros and vosotros keep the original e, because the stress moves onto the ending. If you draw the six forms in a grid, the changed forms make the shape of a boot.",
        ],
        [
          ["yo quiero", "I want"],
          ["tú quieres", "you want"],
          ["él / ella / usted quiere", "he / she wants, you (formal) want"],
          ["nosotros queremos", "we want"],
          ["vosotros queréis", "you all want (Spain)"],
          ["ellos / ellas / ustedes quieren", "they / you all want"],
        ],
        [
          ms(
            "Which forms of querer have the stem change (ie)?",
            ["quiero", "queremos", "quieren", "queréis"],
            [0, 2],
            "Yo and ellos are inside the boot, so they change. Nosotros (queremos) and vosotros (queréis) keep the e."
          ),
        ]
      ),
      sec(
        "Common e → ie verbs",
        "These all follow the same boot pattern. Learn them as a set.",
        [
          ["pensar → pienso", "to think → I think"],
          ["preferir → prefiero", "to prefer → I prefer"],
          ["empezar → empiezo", "to begin → I begin"],
          ["entender → entiendo", "to understand → I understand"],
          ["cerrar → cierro", "to close → I close"],
          ["Pensamos que es fácil.", "We think it's easy."],
        ],
        [
          fb("Complete with pensar.", "Ella ___ que la clase es interesante.", "piensa", "Ella is inside the boot: pensar → piensa.", "pensar, ella"),
          fb("Complete with empezar.", "Nosotros ___ a las nueve.", "empezamos", "Nosotros is outside the boot, so the e stays: empezamos.", "empezar, nosotros"),
        ]
      ),
      sec(
        "Querer and preferir + infinitive",
        "Querer and preferir are often followed by a second verb in the infinitive, just like \"want to\" and \"prefer to\" in English. Only the first verb is conjugated.",
        [
          ["Quiero comer.", "I want to eat."],
          ["¿Quieres ir al cine?", "Do you want to go to the movies?"],
          ["Prefieren estudiar en casa.", "They prefer to study at home."],
        ],
        [
          wo("¿Quieres tomar un café?", "Conjugate querer (quieres) and leave the second verb as an infinitive (tomar).", "Do you want to have a coffee?"),
        ]
      ),
    ],
    [
      fb("Complete with querer.", "Yo ___ un té, por favor.", "quiero", "Yo is inside the boot: querer → quiero.", "querer, yo"),
      fb("Complete with preferir.", "¿Tú ___ el café o el té?", "prefieres", "Tú is inside the boot: preferir → prefieres.", "preferir, tú"),
      fb("Complete with entender.", "Nosotros no ___ la pregunta.", "entendemos", "Nosotros keeps the e: entendemos.", "entender, nosotros"),
      fb("Complete with cerrar.", "La tienda ___ a las ocho.", "cierra", "La tienda = ella, inside the boot: cerrar → cierra.", "cerrar, ella"),
      mc(
        "Which sentence is correct?",
        ["Nosotros queremos pizza.", "Nosotros quieremos pizza.", "Nosotros quiermos pizza.", "Nosotros querimos pizza."],
        0,
        "Nosotros is outside the boot, so the stem stays queremos. \"Quieremos\" changes a stem that shouldn't change, \"quiermos\" drops the -e- of the ending, and \"querimos\" uses the -ir ending on an -er verb."
      ),
      mc(
        "\"They begin at ten.\"",
        ["Empiezan a las diez.", "Empezan a las diez.", "Empiezamos a las diez.", "Empieza a las diez."],
        0,
        "Ellos is inside the boot, so e → ie, plus the -an ending: empiezan. \"Empezan\" is missing the stem change, \"Empiezamos\" mixes a boot stem with the nosotros ending, and \"Empieza\" is the singular él/ella form."
      ),
      toEs("I want to learn Spanish.", "Quiero aprender español.", "Querer → quiero, then the infinitive aprender.", ["Yo quiero aprender español."]),
      toEs("We prefer to eat at home.", "Preferimos comer en casa.", "Nosotros keeps the e: preferimos. Comer stays in the infinitive.", ["Nosotros preferimos comer en casa.", "Nosotras preferimos comer en casa."]),
      toEn("¿Entiendes la lección?", "Do you understand the lesson?", "Entender → entiendes (tú, inside the boot).", ["Do you understand the class?"]),
      mt(
        "Match each infinitive to its yo form.",
        [
          ["pensar", "pienso"],
          ["cerrar", "cierro"],
          ["entender", "entiendo"],
          ["preferir", "prefiero"],
        ],
        "In every one, the stressed e in the stem becomes ie in the yo form."
      ),
    ]
  ),
  L(
    "present-tense-er-ir-verbs-2",
    "stem-changing-verbs-o-ue-e-i",
    "Stem-Changing Verbs: O → UE and E → I",
    "Poder, dormir, volver, jugar and pedir: two more vowel changes with the same boot shape.",
    "9 min",
    [
      sec(
        "O → UE: poder, dormir, volver",
        [
          "A second group changes a stressed o into ue. The boot is the same one you learned for e → ie: every form changes except nosotros and vosotros.",
        ],
        [
          ["puedo, puedes, puede, pueden", "I can, you can, he/she can, they can"],
          ["podemos, podéis", "we can, you all can (Spain)"],
          ["dormir → duermo", "to sleep → I sleep"],
          ["volver → vuelvo", "to return → I come back"],
          ["costar → cuesta", "to cost → it costs"],
          ["encontrar → encuentro", "to find → I find"],
        ],
        [
          fb("Complete with poder.", "¿___ (tú) abrir la ventana?", "Puedes", "Tú is inside the boot: poder → puedes.", "poder, tú"),
          mc("How much does it cost?", ["¿Cuánto cuesta?", "¿Cuánto costa?", "¿Cuánto custa?", "¿Cuánto cuestan?"], 0, "Costar changes o → ue inside the boot: cuesta. \"Costa\" and \"custa\" are missing the ue change, and \"cuestan\" is plural, for when several things cost something."),
        ]
      ),
      sec(
        "Jugar: the only U → UE verb",
        "Jugar (to play a sport or game) is the one common verb whose u becomes ue. It follows the same boot, and it takes a before the game: jugar al fútbol.",
        [
          ["Juego al fútbol los sábados.", "I play soccer on Saturdays."],
          ["¿Juegas al tenis?", "Do you play tennis?"],
          ["Jugamos a las cartas.", "We play cards."],
        ],
        [
          fb("Complete with jugar.", "Mis hermanos ___ al baloncesto.", "juegan", "Ellos is inside the boot: jugar → juegan.", "jugar, ellos"),
        ]
      ),
      sec(
        "E → I: pedir, servir, repetir",
        "A third group, all -ir verbs, changes e into a plain i. Same boot again.",
        [
          ["pedir → pido", "to ask for, to order → I order"],
          ["servir → sirve", "to serve → he/she serves"],
          ["repetir → repites", "to repeat → you repeat"],
          ["Pedimos la cuenta.", "We ask for the bill."],
        ],
        [
          fb("Complete with pedir.", "Yo siempre ___ agua con la comida.", "pido", "Yo is inside the boot: pedir → pido.", "pedir, yo"),
        ]
      ),
    ],
    [
      fb("Complete with dormir.", "Los niños ___ ocho horas.", "duermen", "Ellos is inside the boot: dormir → duermen.", "dormir, ellos"),
      fb("Complete with volver.", "Nosotros ___ a casa a las seis.", "volvemos", "Nosotros keeps the o: volvemos.", "volver, nosotros"),
      fb("Complete with poder.", "Yo no ___ ir hoy.", "puedo", "Yo is inside the boot: poder → puedo.", "poder, yo"),
      fb("Complete with servir.", "El restaurante ___ comida mexicana.", "sirve", "El restaurante = él, inside the boot: servir → sirve.", "servir, él"),
      fb("Complete with repetir.", "¿Puede usted ___ la pregunta?", "repetir", "After puede, the second verb stays in the infinitive: repetir."),
      mc(
        "Which verb has the WRONG form?",
        ["nosotros podemos", "ellos pueden", "yo jugo", "tú pides"],
        2,
        "Jugar is the only u → ue verb, so yo is juego, not \"jugo\". The others are right: \"podemos\" keeps its o outside the boot, \"pueden\" has o → ue inside it, and \"pides\" has e → i."
      ),
      ms(
        "Which of these forms have a stem change?",
        ["encuentro", "dormimos", "sirven", "pedimos"],
        [0, 2],
        "Encuentro (yo) and sirven (ellos) are inside the boot. Dormimos and pedimos are nosotros forms, so they keep the original vowel."
      ),
      toEs("Can you help me?", "¿Puedes ayudarme?", "Poder → puedes, followed by the infinitive ayudar with me attached.", ["¿Me puedes ayudar?", "¿Puede ayudarme?", "¿Me puede ayudar?"]),
      toEs("I sleep a lot on weekends.", "Duermo mucho los fines de semana.", "Dormir → duermo in the yo form.", ["Yo duermo mucho los fines de semana."]),
      toEn("¿Cuánto cuestan los zapatos?", "How much do the shoes cost?", "Costar → cuestan, plural because los zapatos is plural.", ["How much are the shoes?"]),
      mt(
        "Match each infinitive to its él/ella form.",
        [
          ["poder", "puede"],
          ["jugar", "juega"],
          ["pedir", "pide"],
          ["volver", "vuelve"],
        ],
        "O → ue (puede, vuelve), u → ue (juega), e → i (pide)."
      ),
    ]
  ),
  L(
    "present-tense-er-ir-verbs-2",
    "a1r-contrast-stem-changers",
    "Contrast Clinic: Which Vowel Changes?",
    "Sort stem-changing verbs by their pattern and catch the nosotros trap.",
    "7 min",
    [
      sec(
        "Three patterns, one boot",
        "Every stem-changer uses the same boot: change in yo, tú, él and ellos; no change in nosotros and vosotros. What differs is which vowel changes and what it becomes.",
        [
          ["e → ie: quiero, pienso, empiezo", "I want, I think, I begin"],
          ["o → ue: puedo, duermo, vuelvo", "I can, I sleep, I return"],
          ["e → i: pido, sirvo, repito", "I ask for, I serve, I repeat"],
          ["u → ue: juego", "I play"],
        ],
        [
          mt(
            "Match each verb to its pattern.",
            [
              ["entender", "e → ie"],
              ["encontrar", "o → ue"],
              ["repetir", "e → i"],
              ["jugar", "u → ue"],
            ],
            "Entiendo, encuentro, repito, juego."
          ),
        ]
      ),
      sec(
        "The nosotros trap",
        "The most common mistake is putting the change into nosotros too. If the ending is -amos, -emos or -imos, the stem stays as it is in the infinitive.",
        [
          ["podemos (not puedemos)", "we can"],
          ["queremos (not quieremos)", "we want"],
          ["pedimos (not pidimos)", "we ask for"],
        ],
        [
          mc("\"We sleep a lot.\"", ["Dormimos mucho.", "Duermimos mucho.", "Duermemos mucho.", "Dormemos mucho."], 0, "Nosotros is outside the boot, so the o stays, and dormir is an -ir verb: dormimos. \"Duermimos\" and \"Duermemos\" put a boot stem where it doesn't belong, and \"Dormemos\" uses the -er ending."),
        ]
      ),
    ],
    [
      fb("Complete.", "Tú ___ muy rápido. (pensar)", "piensas", "E → ie inside the boot: piensas."),
      fb("Complete.", "Nosotros ___ al fútbol. (jugar)", "jugamos", "Nosotros keeps the u: jugamos."),
      fb("Complete.", "Ella ___ un café. (pedir)", "pide", "E → i inside the boot: pide."),
      fb("Complete.", "Ustedes ___ la puerta. (cerrar)", "cierran", "Ustedes takes the ellos form, inside the boot: cierran."),
      fb("Complete.", "Yo no ___ las llaves. (encontrar)", "encuentro", "O → ue in yo: encuentro."),
      mc(
        "Find the mistake: \"Nosotros pidimos la cuenta.\"",
        ["pidimos should be pedimos", "Nosotros should be Nosotras", "la cuenta should be el cuenta", "There is no mistake."],
        0,
        "Nosotros is outside the boot, so pedir keeps its e: pedimos. \"Nosotros\" is fine for a mixed or male group, and \"la cuenta\" is right because cuenta is feminine."
      ),
      toEs("They want to play tennis.", "Quieren jugar al tenis.", "Querer → quieren; jugar stays in the infinitive and takes al before the sport.", ["Ellos quieren jugar al tenis.", "Ellas quieren jugar al tenis.", "Quieren jugar tenis."]),
      toEn("No entiendo. ¿Puedes repetir?", "I don't understand. Can you repeat?", "Entender → entiendo, poder → puedes, repetir stays in the infinitive.", ["I don't understand. Can you repeat that?", "I don't understand. Could you repeat?"]),
    ]
  ),
  L(
    "ser-vs-estar-mastery-check",
    "present-progressive",
    "Estar + Gerund: What's Happening Right Now",
    "Use estoy hablando, está comiendo and friends for actions in progress at this moment.",
    "8 min",
    [
      sec(
        "Building the gerund",
        [
          "To say something is happening right now, use estar plus the gerund (the -ing form). For -ar verbs, replace -ar with -ando. For -er and -ir verbs, replace the ending with -iendo.",
          "Only estar changes to match the person. The gerund never changes.",
        ],
        [
          ["hablar → hablando", "speak → speaking"],
          ["comer → comiendo", "eat → eating"],
          ["escribir → escribiendo", "write → writing"],
          ["Estoy hablando por teléfono.", "I'm talking on the phone."],
          ["Estamos comiendo.", "We're eating."],
        ],
        [
          fb("Complete with estar.", "Mi madre ___ trabajando.", "está", "Mi madre = ella → está. The gerund trabajando stays the same."),
          fb("Complete with the gerund of vivir.", "Ahora estoy ___ en Madrid.", "viviendo", "-ir verbs take -iendo: vivir → viviendo."),
        ]
      ),
      sec(
        "Gerunds with a twist",
        "When the stem ends in a vowel, -iendo becomes -yendo. And -ir stem-changers change their vowel in the gerund too: o → u and e → i.",
        [
          ["leer → leyendo", "read → reading"],
          ["dormir → durmiendo", "sleep → sleeping"],
          ["pedir → pidiendo", "ask for → asking for"],
          ["El bebé está durmiendo.", "The baby is sleeping."],
        ],
        [
          mc("\"I'm reading a book.\"", ["Estoy leyendo un libro.", "Estoy leiendo un libro.", "Soy leyendo un libro.", "Estoy leer un libro."], 0, "Leer → leyendo (the i becomes y between vowels), and the progressive always uses estar. \"Leiendo\" misses the y, \"Soy leyendo\" uses ser, and \"Estoy leer\" uses the infinitive instead of the gerund."),
        ]
      ),
      sec(
        "Right now vs. in general",
        "Spanish uses the progressive only for what is actually in progress. For habits and general facts, use the simple present.",
        [
          ["Trabajo en un banco.", "I work at a bank. (in general)"],
          ["Ahora estoy trabajando.", "Right now I'm working."],
        ],
        [
          mc(
            "Which sentence describes a habit?",
            ["Estudio español todos los días.", "Estoy estudiando español ahora.", "Están estudiando en la biblioteca.", "¿Qué estás estudiando?"],
            0,
            "Todos los días marks a habit, and habits take the simple present: estudio. The other options use estar + gerund, which describes something happening right now, not a routine."
          ),
        ]
      ),
    ],
    [
      fb("Complete with estar.", "Los niños ___ jugando en el parque.", "están", "Los niños = ellos → están."),
      fb("Complete with the gerund of aprender.", "Estamos ___ mucho.", "aprendiendo", "-er verbs take -iendo: aprendiendo."),
      fb("Complete with the gerund of dormir.", "¡Silencio! Papá está ___.", "durmiendo", "Dormir changes o → u in the gerund: durmiendo."),
      mc("\"What are you doing?\"", ["¿Qué estás haciendo?", "¿Qué eres haciendo?", "¿Qué estás hacer?", "¿Qué haces haciendo?"], 0, "The progressive is estar (estás) + gerund (haciendo). \"Eres\" is ser, which never forms the progressive, \"estás hacer\" uses the infinitive instead of the gerund, and \"haces haciendo\" doubles the verb."),
      mc(
        "Which sentence is correct?",
        ["Ella está escribiendo un correo.", "Ella es escribiendo un correo.", "Ella está escribendo un correo.", "Ella está escribiendos un correo."],
        0,
        "Estar + gerund: está escribiendo. \"Es escribiendo\" uses ser, which can't form the progressive; \"escribendo\" is misspelled (-ir verbs take -iendo), and the gerund never adds -s, so \"escribiendos\" is wrong."
      ),
      toEs("I'm cooking dinner.", "Estoy cocinando la cena.", "Estar → estoy, cocinar → cocinando.", ["Yo estoy cocinando la cena.", "Estoy haciendo la cena."]),
      toEs("They're watching TV.", "Están viendo la tele.", "Ver → viendo. Estar → están for ellos.", ["Ellos están viendo la tele.", "Están viendo la televisión.", "Ellos están viendo la televisión.", "Están mirando la tele."]),
      toEn("¿Estás leyendo el periódico?", "Are you reading the newspaper?", "Leer → leyendo: an action in progress.", ["Are you reading the paper?"]),
      wo("Mi hermano está hablando por teléfono.", "Estar comes right before the gerund.", "My brother is talking on the phone."),
    ]
  ),
  L(
    "telling-time-2",
    "days-months-dates",
    "Days, Months & Dates",
    "Say what day it is, name the months, and give a full date the Spanish way.",
    "9 min",
    [
      sec(
        "Days of the week",
        [
          "Spanish weeks start on Monday. Days are masculine and written in lowercase.",
          "Use el for one specific day (el lunes = on Monday) and los for every week (los lunes = on Mondays). There's no word for \"on\".",
        ],
        [
          ["lunes, martes, miércoles", "Monday, Tuesday, Wednesday"],
          ["jueves, viernes", "Thursday, Friday"],
          ["sábado, domingo", "Saturday, Sunday"],
          ["Hoy es viernes.", "Today is Friday."],
          ["Tengo clase los martes.", "I have class on Tuesdays."],
        ],
        [
          mc("\"I work on Saturdays.\"", ["Trabajo los sábados.", "Trabajo en sábado.", "Trabajo el Sábados.", "Trabajo en los sábados."], 0, "To say something happens every week, use los + the plural day: los sábados. \"En sábado\" and \"en los sábados\" add a preposition Spanish doesn't use, and \"el Sábados\" mixes a singular article with a plural day and a capital."),
        ]
      ),
      sec(
        "Months",
        "Months are also lowercase. Use en with a month: en julio (in July).",
        [
          ["enero, febrero, marzo, abril", "January, February, March, April"],
          ["mayo, junio, julio, agosto", "May, June, July, August"],
          ["septiembre, octubre, noviembre, diciembre", "September, October, November, December"],
          ["Mi cumpleaños es en mayo.", "My birthday is in May."],
        ],
        [
          fb("Complete.", "Vamos a la playa ___ agosto.", "en", "Use en with months: en agosto."),
        ]
      ),
      sec(
        "Giving the date",
        "Spanish puts the day before the month: el + number + de + month. The first of the month can be el uno or el primero.",
        [
          ["¿Qué fecha es hoy?", "What's the date today?"],
          ["Hoy es el quince de marzo.", "Today is March fifteenth."],
          ["el primero de enero", "January first"],
          ["Mi cumpleaños es el tres de junio.", "My birthday is June third."],
        ],
        [
          wo("Hoy es el diez de octubre.", "El + number + de + month.", "Today is October tenth."),
        ]
      ),
    ],
    [
      mt(
        "Match each day to the one that comes after it.",
        [
          ["lunes", "martes"],
          ["miércoles", "jueves"],
          ["viernes", "sábado"],
          ["domingo", "lunes"],
        ],
        "The Spanish week runs lunes to domingo."
      ),
      fb("Complete.", "Hoy es el veinte ___ abril.", "de", "El + number + de + month."),
      fb("Complete.", "No tengo clase ___ domingos.", "los", "Los + day means every week: los domingos = on Sundays. El domingo would mean one particular Sunday."),
      mc("How do you write \"July 4\" in Spanish?", ["el cuatro de julio", "julio cuatro", "el julio cuatro", "el cuatro julio"], 0, "Spanish dates put the day first, then de + month: el cuatro de julio. \"Julio cuatro\" and \"el julio cuatro\" copy English order, and \"el cuatro julio\" is missing de."),
      mc("Which is written correctly?", ["El lunes tengo un examen.", "El Lunes tengo un examen.", "En lunes tengo un examen.", "El lunes tengo un examen en Mayo."], 0, "Days and months are lowercase in Spanish, and a day takes el with no preposition: el lunes. \"El Lunes\" and \"Mayo\" wrongly use capitals, and \"En lunes\" adds a preposition Spanish doesn't use."),
      toEs("My birthday is in November.", "Mi cumpleaños es en noviembre.", "Months take en (en noviembre = in November) and are written lowercase."),
      toEs("Today is Wednesday.", "Hoy es miércoles.", "Hoy es + the day, with no article: hoy es miércoles. Days are lowercase."),
      toEn("Hoy es el primero de mayo.", "Today is May first.", "El primero de mayo = May 1.", ["Today is May 1st.", "Today is the first of May.", "Today is May 1."]),
      toEn("¿Qué fecha es hoy?", "What's the date today?", "Fecha means date, so ¿Qué fecha es hoy? asks for today's date (not the day of the week).", ["What is today's date?", "What's today's date?", "What is the date today?"]),
    ]
  ),
];
