// Synced from cheneygross-afk/lengo:src/lib/lessons/c1-gaps.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// C1 lessons that close a gap found by a review of the course against
// the Instituto Cervantes Plan Curricular: leísmo, laísmo and loísmo --
// what they are, where you'll hear them and what the RAE accepts. Taught
// in Spanish. They sit in the Neutral vs. Colloquial Spanish unit (see
// units.ts).

const { mc, ms, fe, toEs, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("C1", after, slug, title, summary, duration, sections, exercises);

export const C1_GAPS: AnchoredLesson[] = [
  L(
    "neutral-vs-colloquial-6",
    "c1g-leismo",
    "El leísmo: «le vi» por «lo vi»",
    "Qué es el leísmo, dónde se oye, qué acepta la norma (el leísmo de persona masculino singular) y qué no, y los casos en que le es correcto aunque parezca complemento directo.",
    "12 min",
    [
      sec(
        "La norma etimológica y el leísmo",
        [
          "En la norma general, lo / la / los / las son pronombres de complemento directo (CD) y le / les de complemento indirecto (CI): Vi a Juan → Lo vi. Di un libro a Juan → Le di un libro.",
          "El leísmo consiste en usar le / les como complemento directo: «A Juan le vi ayer» en lugar de «A Juan lo vi ayer».",
          "Es muy frecuente en el centro y el norte de España (Madrid, Castilla y León, parte de Castilla-La Mancha, el País Vasco) y en registros cultos de toda España. En América es poco frecuente, salvo en algunas zonas, como Ecuador o Paraguay (por contacto con lenguas indígenas), y en fórmulas de cortesía.",
        ],
        [
          ["Vi a Juan ayer. → Lo vi ayer. (general)", "I saw Juan yesterday. → I saw him yesterday."],
          ["Vi a Juan ayer. → Le vi ayer. (leísmo)", "I saw him yesterday. (Central Spain)"],
          ["Le di el libro a Juan.", "I gave Juan the book. (CI: le is standard)"],
          ["¿Conoces a mi hermano? — Sí, lo / le conozco.", "Do you know my brother? — Yes, I know him."],
        ],
        [
          mc(
            "¿En cuál de estas frases hay leísmo?",
            ["A Pedro le llevé al aeropuerto.", "A Pedro le di las llaves.", "A Pedro le gusta el cine.", "A Pedro le duele la espalda."],
            0,
            "Llevar a alguien es transitivo: Pedro es CD, así que la norma general pide lo llevé. En las otras frases, le es CI (dar algo a alguien) o el experimentador de gustar y doler: le es correcto."
          ),
        ]
      ),
      sec(
        "Qué acepta la RAE",
        [
          "La RAE y la ASALE aceptan el leísmo de persona masculino singular: Le vi (a Juan) es correcto, aunque recomiendan lo vi como forma general.",
          "El leísmo de persona masculino plural (Les vi a tus hermanos) está muy extendido en España, pero no se considera aceptable en la lengua cuidada: mejor Los vi.",
          "El leísmo femenino (A María le vi) y el leísmo de cosa (El libro le compré ayer) no se aceptan en ningún registro cuidado.",
          "Hay un leísmo de cortesía muy extendido en todo el mundo hispano con usted: Le saludo atentamente. ¿Le acompaño? Se tolera tanto para hombres como para mujeres, porque evita la ambigüedad de lo / la.",
        ],
        [
          ["A tu primo le vi en la fiesta. (aceptado)", "I saw your cousin at the party."],
          ["A tus primos los vi en la fiesta. (recomendado)", "I saw your cousins at the party."],
          ["A tu prima la vi en la fiesta. (no: le vi)", "I saw your cousin (f.) at the party."],
          ["El coche lo compré en marzo. (no: le compré)", "I bought the car in March."],
          ["Le saluda atentamente, Ana Pérez.", "Yours sincerely, Ana Pérez."],
        ],
        [
          ms(
            "¿Qué frases acepta la norma culta?",
            ["A Luis le esperé una hora.", "A Luis lo esperé una hora.", "La maleta le dejé en el hotel.", "A Marta le esperé una hora."],
            [0, 1],
            "Con persona masculina singular (Luis), le y lo son aceptables. Maleta es una cosa: la dejé. Marta es CD femenino: la esperé."
          ),
        ]
      ),
      sec(
        "Cuando le es correcto aunque parezca CD",
        [
          "Algunos verbos alternan de forma legítima: con verbos de afección (preocupar, molestar, asustar, sorprender, divertir), le es habitual cuando el sujeto es una cosa y la acción no es voluntaria: Le preocupa la situación. Le molesta el ruido. Con sujeto de persona y acción voluntaria, lo / la: Lo asustaron a propósito.",
          "Con el se impersonal y un CD de persona, en España es normal le: Se le considera el mejor pintor de su generación. En gran parte de América se prefiere lo / la: Se lo considera...",
          "Llamar con un complemento predicativo lleva le: Le llaman «el Rubio». Pero llamar por teléfono es transitivo: Lo / La llamé ayer (y le llamé con persona masculina, por leísmo aceptado).",
          "Ayudar, obedecer, creer y avisar dudan entre los dos usos según la región: Le ayudo / Lo ayudo. Ambas se oyen en textos cuidados.",
        ],
        [
          ["Le preocupa mucho su salud.", "Her health worries her a lot."],
          ["Se le considera un experto.", "He is considered an expert. (Spain)"],
          ["Se lo considera un experto.", "He is considered an expert. (Latin America)"],
          ["En el barrio le llaman «el Profe».", "In the neighbourhood they call him \"el Profe\"."],
        ],
        [
          mc(
            "¿Qué frase es correcta en cualquier variedad culta?",
            ["A mi madre le molesta el humo.", "A mi madre le vi ayer.", "El móvil le perdí.", "A mis vecinas les saludé."],
            0,
            "Con molestar y sujeto de cosa (el humo), le es el uso normal. Las otras son leísmo femenino, de cosa o femenino plural."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su valoración normativa.",
        [
          ["A Carlos le vi.", "leísmo aceptado"],
          ["A Carlos lo vi.", "norma general"],
          ["A Carmen le vi.", "leísmo no aceptado"],
          ["El reloj le perdí.", "leísmo de cosa, no aceptado"],
        ],
        "Solo el leísmo de persona masculino singular está admitido en la norma culta."
      ),
      fe(
        "¿Y la carta? — ___ envié ayer por correo certificado.",
        "La",
        "And the letter? — I sent [it] yesterday by registered post.",
        "La carta es CD femenino de cosa: la envié. «Le envié» sería leísmo de cosa, no aceptado."
      ),
      fe(
        "A tus hermanas ___ conocí en la boda.",
        "las",
        "Your sisters? I met [them] at the wedding.",
        "CD femenino plural de persona: las. «Les conocí» sería leísmo no aceptado."
      ),
      fe(
        "A los niños ___ encanta el parque.",
        "les",
        "The children love the park. (Literally: the park delights [them].)",
        "Con encantar (como gustar), el experimentador es CI: les. No es leísmo."
      ),
      fe(
        "A Julián ___ nombraron director el año pasado.",
        "lo",
        "Julián was appointed director last year. (Literally: they appointed [him].)",
        "Nombrar a alguien es transitivo: lo nombraron. Le nombraron es leísmo de persona masculino singular, aceptado.",
        ["le"]
      ),
      toEs(
        "I called her yesterday.",
        "La llamé ayer.",
        "Llamar por teléfono es transitivo; con CD femenino, la. «Le llamé» con mujer es leísmo no aceptado en la norma culta, aunque se oye mucho en España.",
        ["Ayer la llamé.", "La llamé ayer por teléfono."]
      ),
      toEs(
        "He is considered one of the best chefs in the country.",
        "Se le considera uno de los mejores cocineros del país.",
        "Se impersonal + CD de persona: le en España, lo en gran parte de América. Las dos son correctas.",
        ["Se lo considera uno de los mejores cocineros del país.", "Está considerado uno de los mejores cocineros del país.", "Es considerado uno de los mejores cocineros del país.", "Se le considera uno de los mejores chefs del país.", "Se lo considera uno de los mejores chefs del país."]
      ),
      mc(
        "Un periodista mexicano escribe «Al ministro lo recibieron en el aeropuerto». Un periodista madrileño escribe «Al ministro le recibieron en el aeropuerto». ¿Qué pasa?",
        ["Las dos son correctas: la segunda es leísmo de persona masculino singular, aceptado.", "Solo la primera es correcta.", "Solo la segunda es correcta.", "Las dos son incorrectas."],
        0,
        "Con persona masculina singular, la norma admite los dos usos. El madrileño refleja el leísmo del centro de España."
      ),
      wo(
        "Le saluda atentamente el director del centro.",
        "Leísmo de cortesía con usted, habitual en cartas formales de todo el mundo hispano.",
        "Yours sincerely, the director of the school."
      ),
      ms(
        "¿Qué frases contienen leísmo NO aceptado por la norma?",
        ["A Lucía le acompañé a casa.", "Los libros les devolví a la biblioteca.", "A Andrés le acompañé a casa.", "A los vecinos les vimos en el mercado."],
        [0, 1, 3],
        "Solo «A Andrés le acompañé» (persona, masculino, singular) está aceptado. Lucía es femenino, los libros son cosas y los vecinos es plural."
      ),
    ]
  ),
  L(
    "neutral-vs-colloquial-6",
    "c1g-laismo-loismo",
    "Laísmo y loísmo: «la dije» y «lo pegaron»",
    "El laísmo (la dije que viniera) y el loísmo (lo di un golpe): dónde se oyen, por qué la norma no los acepta y un truco para elegir siempre el pronombre correcto.",
    "12 min",
    [
      sec(
        "El laísmo",
        [
          "El laísmo consiste en usar la / las como complemento indirecto femenino: «La dije que viniera» en lugar de «Le dije que viniera». «A mi hermana la regalé un libro» en lugar de «le regalé».",
          "Se oye sobre todo en el habla coloquial de Madrid y de buena parte de Castilla (Valladolid, Segovia, Ávila, Toledo...). Muchos hablantes de esas zonas lo usan sin darse cuenta, y aparece en novelas y series para retratar el habla madrileña.",
          "La RAE y la ASALE no lo aceptan en la lengua cuidada. En un texto formal, en un examen o en una entrevista de trabajo, evítalo.",
        ],
        [
          ["La dije que viniera. (laísmo)", "I told her to come."],
          ["Le dije que viniera. (norma)", "I told her to come."],
          ["A Laura la di las llaves. (laísmo)", "I gave Laura the keys."],
          ["A Laura le di las llaves. (norma)", "I gave Laura the keys."],
        ],
        [
          mc(
            "¿Qué frase sigue la norma culta?",
            ["A mi madre le escribí una carta.", "A mi madre la escribí una carta.", "A mi madre lo escribí una carta.", "A mi madre les escribí una carta."],
            0,
            "Una carta es el CD; mi madre recibe la carta, así que es CI: le. «La escribí» es laísmo."
          ),
        ]
      ),
      sec(
        "El loísmo",
        [
          "El loísmo es usar lo / los como complemento indirecto masculino: «Lo di un regalo» en lugar de «Le di un regalo». «Los dije la verdad» en lugar de «Les dije la verdad».",
          "Es mucho menos frecuente que el leísmo y el laísmo, y está más estigmatizado: se asocia a hablas rurales de algunas zonas de Castilla y se percibe como un error claro.",
          "Cuidado con el plural: «se los dije» es correcto cuando los es el CD (los resultados → se los dije). No confundas este caso con el loísmo.",
          "Otro caso frecuente en América, que no es loísmo sino una concordancia coloquial: «Se los dije» con sentido de «se lo dije a ustedes». Es muy común en México y otros países, aunque la norma culta prefiere «se lo dije».",
        ],
        [
          ["Lo di un regalo a Pablo. (loísmo)", "I gave Pablo a present."],
          ["Le di un regalo a Pablo. (norma)", "I gave Pablo a present."],
          ["¿Los resultados? Ya se los dije. (correcto: los = los resultados)", "The results? I already told him what they were."],
          ["Ya se los dije, chicos. (coloquial en América: se lo dije a ustedes)", "I already told you, guys."],
        ],
        [
          ms(
            "¿En qué frases hay loísmo?",
            ["A mis primos los mandé una postal.", "A mis primos les mandé una postal.", "Las postales se las mandé a mis primos.", "A Rafa lo di un abrazo."],
            [0, 3],
            "Una postal y un abrazo son el CD; los primos y Rafa son CI: les mandé, le di. En la tercera, las es el CD (las postales) y se es el CI: es correcta."
          ),
        ]
      ),
      sec(
        "Un truco para elegir el pronombre",
        [
          "Paso 1: busca si en la frase hay otra cosa que funcione como CD (lo que se da, se dice, se manda...). Si la hay, la persona es CI y va le / les: Le dije la verdad. Le di un libro.",
          "Paso 2: si no hay otro CD, prueba a pasar la frase a pasiva. Si funciona, la persona es CD: Vieron a María → María fue vista → La vieron.",
          "Paso 3: con verbos de lengua o de petición (decir, pedir, preguntar, rogar), lo que se dice o se pide es el CD y la persona es CI: Le pedí que me ayudara (aunque sea una mujer).",
          "Este truco vale para cualquier variedad del español: si lo aplicas, evitarás el leísmo no aceptado, el laísmo y el loísmo.",
        ],
        [
          ["Le pedí a Elena que me ayudara.", "I asked Elena to help me."],
          ["A Elena la vieron en el concierto.", "Elena was seen at the concert."],
          ["A los alumnos les explicó el ejercicio.", "She explained the exercise to the students."],
          ["A los alumnos los felicitó por el examen.", "She congratulated the students on the exam."],
        ],
        [
          mc(
            "«A las vecinas ___ pregunté por el ruido.»",
            ["les", "las", "los", "lo"],
            0,
            "Preguntar algo a alguien: la persona es CI (lo que se pregunta es el CD, aunque no aparezca). Les pregunté. «Las pregunté» es laísmo."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con el fenómeno que contiene.",
        [
          ["La conté un secreto.", "laísmo"],
          ["Lo conté un secreto.", "loísmo"],
          ["Le conté un secreto.", "norma general"],
          ["A la jefa le vi ayer.", "leísmo no aceptado"],
        ],
        "Contar un secreto a alguien: el secreto es CD, la persona es CI (le)."
      ),
      fe(
        "A Sofía ___ regalaron una bicicleta por su cumpleaños.",
        "le",
        "They gave Sofía a bike for her birthday. (Literally: they gave [her] a bike.)",
        "La bicicleta es CD; Sofía es CI: le regalaron. «La regalaron» sería laísmo."
      ),
      fe(
        "A mis padres ___ escribo todas las semanas.",
        "les",
        "I write to my parents every week. (Literally: I write [to them] every week.)",
        "Escribir a alguien: la persona es CI (lo escrito es el CD implícito). Les escribo. «Los escribo» sería loísmo."
      ),
      fe(
        "A tu hermana ___ encontré muy cambiada.",
        "la",
        "Your sister? I found [her] very changed.",
        "Encontrar a alguien es transitivo: la persona es CD femenino, la."
      ),
      fe(
        "Cuando vi a mis alumnos, ___ di la enhorabuena.",
        "les",
        "When I saw my students, I congratulated [them].",
        "Dar la enhorabuena a alguien: la enhorabuena es CD, los alumnos CI: les."
      ),
      toEs(
        "I told her the truth.",
        "Le dije la verdad.",
        "La verdad es el CD; ella es CI: le. «La dije la verdad» es laísmo.",
        ["Le conté la verdad.", "Yo le dije la verdad.", "Le dije la verdad a ella."]
      ),
      toEs(
        "We asked them (women) for help.",
        "Les pedimos ayuda.",
        "Pedir algo a alguien: la ayuda es CD y ellas son CI: les. «Las pedimos ayuda» es laísmo.",
        ["Les pedimos ayuda a ellas.", "A ellas les pedimos ayuda."]
      ),
      mc(
        "Una serie ambientada en Madrid hace decir a un personaje «¡La he dicho mil veces que no toque eso!». ¿Qué refleja?",
        ["El laísmo coloquial de la zona de Madrid", "Un error de traducción", "El voseo", "La norma culta"],
        0,
        "Los guionistas usan el laísmo para retratar el habla coloquial madrileña. En la norma: «Le he dicho mil veces...»."
      ),
      wo(
        "A mi abuela le compré unas flores.",
        "Las flores son el CD; la abuela recibe las flores: CI, le.",
        "I bought my grandmother some flowers."
      ),
      ms(
        "¿Qué frases siguen la norma culta?",
        ["A Nuria le mandé un mensaje.", "A Nuria la mandé un mensaje.", "A Nuria la llamé por teléfono.", "A mis tíos los visité en verano."],
        [0, 2, 3],
        "Mandar algo a alguien: CI (le). Llamar y visitar a alguien: CD (la, los). «La mandé un mensaje» es laísmo."
      ),
    ]
  ),
];
