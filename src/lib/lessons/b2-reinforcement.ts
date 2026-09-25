import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// B2 reinforcement lessons -- woven into B2_LESSONS right after the lesson
// each one reinforces (see weave.ts). Written in Spanish, like the base B2
// lessons, and built the same way as b1-reinforcement.ts: fresh formats
// (transformations, error hunts, contrast clinics, dialogue labs, story
// detectives, missions, spiral reviews, word webs, a B2 Challenge series)
// plus themed spiral reviews between the reading stories.
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("B2", after, slug, title, summary, duration, sections, exercises);

export const B2_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "subjunctive-adjective-clauses-2",
    "b2r-mission-wanted-ads",
    "Misión real: anuncios de «se busca»",
    "Escribe y lee anuncios en los que se busca algo que quizá no existe — el subjuntivo en las relativas.",
    "7 min",
    [
      sec(
        "Lo que buscamos",
        "Cuando buscas algo sin saber si existe, la relativa va en subjuntivo. Cuando ya lo tienes o sabes que existe, en indicativo.",
        [
          ["Buscamos un diseñador que hable alemán.", "We're looking for a designer who speaks German. (don't know if one exists)"],
          ["Tenemos una diseñadora que habla alemán.", "We have a designer who speaks German. (she exists)"],
        ],
        [
          fb("Completa el anuncio.", "Se busca piso que ___ cerca del metro. (estar)", "esté", "Antecedente desconocido → subjuntivo."),
          fb("Completa el anuncio.", "Vendo una bici que solo ___ un año. (tener)", "tiene", "Antecedente conocido → indicativo."),
        ]
      ),
      sec(
        "Nada ni nadie",
        "Con antecedentes negados (no hay nadie que, no conozco ningún sitio que), el subjuntivo es obligatorio.",
        [
          ["No hay nadie que cocine como mi abuela.", "There's nobody who cooks like my grandmother."],
        ],
        [
          mc(
            "«No conozco ningún restaurante que ___ abierto a las cinco de la mañana.»",
            ["esté", "está", "estaba", "estará"],
            0,
            "Antecedente inexistente → subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "Necesitamos voluntarios que ___ disponibles los fines de semana. (estar)", "estén", "Voluntarios desconocidos → subjuntivo."),
      fb("Completa el anuncio.", "Busco a la persona que ___ mi cartera ayer en el bus. (encontrar)", "encontró", "Una persona concreta y real → indicativo."),
      fb("Completa.", "¿Hay alguien aquí que ___ primeros auxilios? (saber)", "sepa", "Pregunta sobre la existencia → subjuntivo."),
      mt(
        "Relaciona cada principio con su final lógico.",
        [
          ["Busco un compañero de piso que", "no fume."],
          ["Mi compañero de piso es alguien que", "no fuma."],
          ["No hay ningún candidato que", "cumpla los requisitos."],
          ["Contratamos al candidato que", "cumplía los requisitos."],
        ],
        "Desconocido o inexistente → subjuntivo; conocido → indicativo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Quiero un trabajo que me permita viajar.", "Tengo un trabajo que me permita viajar.", "No hay nada que me guste más.", "Cualquiera que lo vea lo entenderá."],
        [0, 2, 3],
        "Tengo un trabajo (existe) → que me permite viajar."
      ),
      toEs("I don't know anyone who can help you.", "No conozco a nadie que pueda ayudarte.", "Antecedente inexistente → subjuntivo.", ["No conozco a nadie que te pueda ayudar."]),
      wo("Se busca profesora que tenga experiencia con niños pequeños.", "Anuncio con antecedente desconocido → subjuntivo.", "Teacher wanted who has experience with young children."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2r-contrast-antecedent",
    "Contraste: «que sabe» / «que sepa»",
    "Pares mínimos con relativas: el mismo verbo en indicativo y en subjuntivo, y lo que cambia el significado.",
    "7 min",
    [
      sec(
        "Conocido o desconocido",
        "La relativa en indicativo afirma que el antecedente existe; en subjuntivo, lo presenta como hipotético o desconocido.",
        [
          ["Quiero el vestido que es rojo.", "I want the dress that is red. (a specific one I've seen)"],
          ["Quiero un vestido que sea rojo.", "I want a dress that's red. (any red one)"],
          ["Haz lo que te dice tu madre.", "Do what your mother tells you. (she has said it)"],
          ["Haz lo que te diga tu madre.", "Do whatever your mother tells you. (she will say it)"],
        ],
        [
          mc(
            "«Pide lo que ___.» (whatever you want — el menú todavía no está decidido)",
            ["quieras", "quieres", "querías", "querrás"],
            0,
            "Lo que + subjuntivo = whatever."
          ),
        ]
      ),
    ],
    [
      fb("¿Indicativo o subjuntivo?", "Voy a comprar el coche que ___ en el escaparate ayer. (ver, nosotros)", "vimos", "Un coche concreto → indicativo."),
      fb("¿Indicativo o subjuntivo?", "Voy a comprar un coche que ___ poco. (gastar)", "gaste", "Cualquier coche con esa característica → subjuntivo."),
      fb("¿Indicativo o subjuntivo?", "Los alumnos que ___ tarde no podrán entrar. (llegar)", "lleguen", "Futuro, alumnos aún no identificados → subjuntivo."),
      fb("¿Indicativo o subjuntivo?", "Los alumnos que ___ tarde ayer no pudieron entrar. (llegar)", "llegaron", "Hecho pasado concreto → indicativo."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Donde tú dices.", "Where you're saying."],
          ["Donde tú digas.", "Wherever you say."],
          ["Como quieres.", "The way you want (I know how)."],
          ["Como quieras.", "However you like."],
        ],
        "El subjuntivo añade el matiz de «-ever»: lo que sea, donde sea."
      ),
      toEs("We'll eat wherever you (tú) want.", "Comeremos donde quieras.", "Donde + subjuntivo = wherever.", ["Comemos donde quieras.", "Vamos a comer donde tú quieras.", "Comeremos donde tú quieras."]),
      wo("El que termine primero puede irse a casa.", "El que + subjuntivo = whoever.", "Whoever finishes first can go home."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2r-error-hunt-relative-subjunctive",
    "Caza de errores: las relativas con subjuntivo",
    "«Busco a alguien que sabe», «No hay nadie que puede», «Tengo un amigo que sepa» — diagnostica y corrige.",
    "7 min",
    [
      sec(
        "Dos errores simétricos",
        "Error 1: indicativo con antecedente desconocido o inexistente. Error 2: subjuntivo con un antecedente real y conocido.",
        [
          ["✗ No hay nadie que puede ayudarte. → ✓ No hay nadie que pueda ayudarte.", "There's nobody who can help you."],
          ["✗ Tengo una hermana que viva en Roma. → ✓ Tengo una hermana que vive en Roma.", "I have a sister who lives in Rome."],
        ],
        [
          ms(
            "¿Qué frases tienen un error?",
            ["Busco un libro que explica la historia de Perú.", "Leí un libro que explica la historia de Perú.", "¿Conoces a alguien que tenga coche?", "No encuentro a nadie que quiere venir."],
            [0, 3],
            "Busco un libro que explique…; No encuentro a nadie que quiera venir."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Necesito una app que me ___ a organizarme. (ayudar; el alumno escribió: ayuda)", "ayude", "Antecedente desconocido → subjuntivo."),
      fb("Corrige.", "Mi jefa es una persona que ___ escuchar. (saber; el alumno escribió: sepa)", "sabe", "Persona real y conocida → indicativo."),
      fb("Corrige.", "No existe ningún método que ___ para todos. (funcionar; el alumno escribió: funciona)", "funcione", "Inexistente → subjuntivo."),
      mc(
        "¿Cuál es correcta?",
        ["Quien quiera participar, que levante la mano.", "Quien quiere participar, que levanta la mano.", "Quien quiera participar, que levanta la mano.", "Quien quiere participar, que levante la mano."],
        0,
        "Quien + subjuntivo (persona indeterminada) y que + subjuntivo como orden."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Hay muchas personas que piensan lo mismo.", "Hay muchas personas que piensen lo mismo.", "No hay muchas personas que piensan lo mismo.", "Hay pocas personas que pensaran lo mismo mañana."],
        0,
        "Existen muchas personas (afirmado) → indicativo."
      ),
      toEs("Is there a pharmacy that is open on Sundays?", "¿Hay alguna farmacia que esté abierta los domingos?", "Pregunta sobre la existencia → subjuntivo.", ["¿Hay una farmacia que esté abierta los domingos?", "¿Hay alguna farmacia que abra los domingos?"]),
      wo("Cualquier persona que venga será bienvenida.", "Cualquier + relativa en subjuntivo.", "Anyone who comes will be welcome."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2r-contrast-cuando-llega-llegue",
    "Contraste: cuando llega / cuando llegue",
    "Hábito frente a futuro: las conjunciones temporales con indicativo y con subjuntivo.",
    "7 min",
    [
      sec(
        "Lo habitual y lo que todavía no ha pasado",
        "Cuando, en cuanto, tan pronto como, hasta que, después de que + indicativo = hábito o pasado. + subjuntivo = futuro no realizado.",
        [
          ["Cuando llega a casa, se ducha.", "When he gets home, he showers. (habit)"],
          ["Cuando llegue a casa, se duchará.", "When he gets home, he'll shower. (future)"],
          ["En cuanto terminó, se fue.", "As soon as he finished, he left. (past)"],
        ],
        [
          fb("¿Hábito o futuro?", "En cuanto ___ el sueldo, pagaré el alquiler. (cobrar, yo)", "cobre", "Futuro → subjuntivo."),
          fb("¿Hábito o futuro?", "Siempre llamo a mi madre cuando ___ del trabajo. (salir, yo)", "salgo", "Hábito → indicativo."),
        ]
      ),
      sec(
        "Antes de que: siempre subjuntivo",
        "Antes de que es la excepción: siempre lleva subjuntivo, porque lo que introduce todavía no ha ocurrido en relación con la otra acción.",
        [
          ["Siempre me voy antes de que llegue el jefe.", "I always leave before the boss arrives."],
        ],
        [
          mc(
            "«Salgamos antes de que ___ a llover.»",
            ["empiece", "empieza", "empezará", "empezó"],
            0,
            "Antes de que → siempre subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No me iré hasta que me ___ la verdad. (decir, tú)", "digas", "Hasta que + futuro → subjuntivo."),
      fb("Completa.", "Esperé hasta que ___ el autobús. (llegar)", "llegó", "Pasado real → indicativo."),
      fb("Completa.", "Tan pronto como ___ las notas, te aviso. (saber, yo)", "sepa", "Futuro → subjuntivo."),
      fb("Completa.", "Después de que ___ la película, siempre hablamos de ella. (ver, nosotros)", "vemos", "Hábito → indicativo."),
      mt(
        "Relaciona cada principio con su final.",
        [
          ["Te llamaré cuando", "llegue al hotel."],
          ["Me llamó cuando", "llegó al hotel."],
          ["Siempre me llama cuando", "llega al hotel."],
          ["Llámame antes de que", "llegues al hotel."],
        ],
        "Futuro → subjuntivo; pasado o hábito → indicativo; antes de que → subjuntivo."
      ),
      toEs("As soon as you (tú) know something, tell me.", "En cuanto sepas algo, dímelo.", "En cuanto + subjuntivo + mandato.", ["Tan pronto como sepas algo, dímelo.", "En cuanto sepas algo, avísame."]),
      wo("Cuando sea mayor quiero vivir cerca del mar.", "Cuando + futuro → subjuntivo.", "When I'm older I want to live near the sea."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2r-mission-plan-event",
    "Misión real: organizar un evento",
    "Planifica una boda, un congreso o una fiesta sorpresa con para que, antes de que, en cuanto, siempre que y a menos que.",
    "8 min",
    [
      sec(
        "La fiesta sorpresa",
        "Planificar exige muchas conjunciones: para que (propósito), antes de que (anterioridad), a menos que (condición negativa), siempre que (condición).",
        [
          ["Escondeos antes de que llegue Ana.", "Hide before Ana arrives."],
          ["Apagad las luces para que no sospeche.", "Turn off the lights so she doesn't suspect."],
          ["La haremos en el jardín, a menos que llueva.", "We'll have it in the garden, unless it rains."],
        ],
        [
          fb("Completa el plan.", "Compra el pastel el viernes para que ___ fresco. (estar)", "esté", "Para que + subjuntivo."),
          fb("Completa el plan.", "Invitaremos a sus compañeros siempre que ___ guardar el secreto. (saber)", "sepan", "Siempre que (condición) + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa el plan.", "No le digas nada a menos que te lo ___ directamente. (preguntar, ella)", "pregunte", "A menos que + subjuntivo."),
      fb("Completa el plan.", "En cuanto ___ el coche, gritad «¡sorpresa!». (oír, vosotros)", "oigáis", "En cuanto + futuro → subjuntivo; oír → oigáis."),
      fb("Completa el plan.", "Te doy mi llave para ___ antes. (entrar, tú mismo)", "entrar", "Mismo sujeto → para + infinitivo."),
      mc(
        "«I'll lend you my car so you can go to the party.»",
        ["Te presto el coche para que puedas ir a la fiesta.", "Te presto el coche para que puedes ir a la fiesta.", "Te presto el coche para poder ir a la fiesta tú.", "Te presto el coche para que podrás ir a la fiesta."],
        0,
        "Sujetos distintos → para que + subjuntivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Sal ahora, no sea que pierdas el tren.", "Iremos con tal de que tú vengas.", "Te ayudo con tal de que me invitas a cenar.", "Avísame en caso de que haya problemas."],
        [0, 1, 3],
        "Con tal de que siempre lleva subjuntivo: con tal de que me invites."
      ),
      toEs("Call me in case you (tú) need anything.", "Llámame en caso de que necesites algo.", "En caso de que + subjuntivo.", ["Llámame por si necesitas algo.", "Llámame si necesitas algo."]),
      wo("Hablad bajo para que el bebé no se despierte.", "Para que + subjuntivo con sujeto distinto.", "Talk quietly so the baby doesn't wake up."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2r-transform-infinitive-que",
    "Transformaciones: para / para que, antes de / antes de que",
    "Cambia el sujeto de la segunda acción y observa cómo el infinitivo se convierte en que + subjuntivo.",
    "7 min",
    [
      sec(
        "Mismo sujeto, distinto sujeto",
        "Mismo sujeto → preposición + infinitivo (para salir, antes de comer, sin decir). Distinto sujeto → conjunción + subjuntivo (para que salgas, antes de que comas, sin que digas).",
        [
          ["Estudio para aprobar. → Estudio para que mis padres estén orgullosos.", "I study to pass. → I study so my parents are proud."],
          ["Me fui sin despedirme. → Me fui sin que nadie me viera.", "I left without saying goodbye. → I left without anyone seeing me."],
        ],
        [
          fb("Cambia el sujeto (tú).", "Lo repito para entenderlo. → Lo repito para que lo ___.", "entiendas", "Para que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Cambia el sujeto (ellos).", "Cenamos antes de salir. → Cenamos antes de que ___.", "salgan", "Antes de que + subjuntivo."),
      fb("Vuelve al mismo sujeto (yo).", "Llamo antes de que tú llegues. → Llamo antes de ___.", "llegar", "Mismo sujeto → antes de + infinitivo."),
      fb("Cambia el sujeto (nosotros).", "Siempre entra sin hacer ruido. → Siempre entra sin que ___ nada. (oír)", "oigamos", "Sin que + subjuntivo; oír → oigamos."),
      fb("Cambia el sujeto (usted).", "Te lo explico para ayudarte. → Se lo explico para que usted ___ decidir. (poder)", "pueda", "Para que + subjuntivo presente."),
      mc(
        "«She always leaves without me noticing.»",
        ["Siempre se va sin que yo me dé cuenta.", "Siempre se va sin darme cuenta.", "Siempre se va sin que yo me doy cuenta.", "Siempre se va sin que me daré cuenta."],
        0,
        "Sujetos distintos → sin que + subjuntivo: me dé cuenta."
      ),
      toEs("Turn off (tú) the TV before you go to bed.", "Apaga la tele antes de acostarte.", "Mismo sujeto (tú) → antes de + infinitivo.", ["Apaga la televisión antes de acostarte.", "Apaga la tele antes de irte a la cama."]),
      wo("Te dejo mi abrigo para que no pases frío.", "Para que + subjuntivo.", "I'll leave you my coat so you don't get cold."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2r-transform-sequence-of-tenses",
    "Transformaciones: la secuencia de tiempos",
    "Pasa frases del presente al pasado: quiere que venga → quería que viniera.",
    "8 min",
    [
      sec(
        "El verbo principal manda",
        "Principal en presente/futuro → subjuntivo presente. Principal en pasado/condicional → imperfecto de subjuntivo.",
        [
          ["Quiero que vengas. → Quería que vinieras.", "I want you to come. → I wanted you to come."],
          ["Es importante que lo sepa. → Era importante que lo supiera.", "It's important he know. → It was important he know."],
        ],
        [
          fb("Pasa al pasado.", "Me pide que le ayude. → Me pidió que le ___.", "ayudara", "Pidió → imperfecto de subjuntivo."),
        ]
      ),
      sec(
        "Formación en tres pasos",
        "Ellos del pretérito (tuvieron) → quita -ron (tuvie-) → añade -ra/-se (tuviera/tuviese). Cualquier irregularidad del pretérito se conserva.",
        [
          ["dijeron → dijera · fueron → fuera · pudieron → pudiera", "said · was/went · could"],
        ],
        [
          fb("Forma el imperfecto de subjuntivo (yo).", "hacer → hicieron → que yo ___", "hiciera", "Hicie- + -ra."),
        ]
      ),
    ],
    [
      fb("Pasa al pasado.", "Dudo que tenga razón. → Dudaba que ___ razón.", "tuviera", "Tuvieron → tuviera."),
      fb("Pasa al pasado.", "Me alegro de que estés aquí. → Me alegré de que ___ allí.", "estuvieras", "Estuvieron → estuvieras."),
      fb("Pasa al pasado.", "Ojalá que vengan. → Ojalá que ___ (pero no vinieron).", "vinieran", "Ojalá + imperfecto: deseo improbable o irreal."),
      fb("Pasa al pasado.", "No hay nadie que lo sepa. → No había nadie que lo ___.", "supiera", "Supieron → supiera."),
      mc(
        "«Mi madre me dice que me ponga el abrigo.» → en pasado:",
        ["Mi madre me dijo que me pusiera el abrigo.", "Mi madre me dijo que me ponga el abrigo.", "Mi madre me dijo que me ponía el abrigo.", "Mi madre me dijo que me pondría el abrigo ahora."],
        0,
        "Dijo (orden) → imperfecto de subjuntivo."
      ),
      mt(
        "Relaciona cada infinitivo con su imperfecto de subjuntivo (él).",
        [
          ["ir", "fuera"],
          ["poder", "pudiera"],
          ["leer", "leyera"],
          ["conducir", "condujera"],
        ],
        "Todos derivan de la tercera persona plural del pretérito."
      ),
      wo("Me sorprendió que nadie me llamara ese día.", "Principal en pasado → imperfecto de subjuntivo.", "It surprised me that nobody called me that day."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2r-error-hunt-imperfect-subjunctive",
    "Caza de errores: el imperfecto de subjuntivo",
    "Formas inventadas, tildes olvidadas y secuencias rotas — corrige los errores más frecuentes.",
    "7 min",
    [
      sec(
        "Formas inventadas",
        "El imperfecto de subjuntivo sale del pretérito, no del infinitivo: ✗ tenera, ✗ hacera → ✓ tuviera, hiciera. Y nosotros lleva tilde: tuviéramos.",
        [
          ["✗ Si yo sabera la respuesta… → ✓ Si yo supiera la respuesta…", "If I knew the answer…"],
          ["✗ Queríais que fueramos. → ✓ Queríais que fuéramos.", "You wanted us to go. (accent on nosotros)"],
        ],
        [
          fb("Corrige.", "Me pidió que ___ más despacio. (conducir; el alumno escribió: conduciera)", "condujera", "Condujeron → condujera."),
        ]
      ),
      sec(
        "Secuencias rotas",
        "Principal en pasado + subjuntivo presente suele ser un error (salvo que la acción siga vigente).",
        [
          ["✗ Quería que me llames. → ✓ Quería que me llamaras.", "I wanted you to call me."],
        ],
        [
          mc(
            "Corrige: «Era necesario que todos estén presentes.»",
            ["Era necesario que todos estuvieran presentes.", "Era necesario que todos estaban presentes.", "Es necesario que todos estuvieran presentes.", "No hay error."],
            0,
            "Era → imperfecto de subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Si ___ más tiempo, viajaría más. (tener, yo; el alumno escribió: tenería)", "tuviera", "Si + imperfecto de subjuntivo."),
      fb("Corrige.", "Nos pidieron que ___ la puerta. (cerrar, nosotros; el alumno escribió: cerraramos)", "cerráramos", "Nosotros lleva tilde: cerráramos."),
      fb("Corrige.", "Esperaba que ___ a la fiesta. (ir, tú; el alumno escribió: vayas)", "fueras", "Esperaba → imperfecto de subjuntivo."),
      ms(
        "¿Qué formas son correctas?",
        ["dijera", "trajera", "poniera", "anduviera"],
        [0, 1, 3],
        "Poner → pusieron → pusiera."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Le dije que no se preocupara.", "Le dije que no se preocupará.", "Le dije que no se preocupaba.", "Le digo que no se preocupara."],
        0,
        "Dije (orden) → imperfecto de subjuntivo."
      ),
      toEs("I wish they had more time.", "Ojalá tuvieran más tiempo.", "Ojalá + imperfecto de subjuntivo para un deseo irreal en el presente.", ["Ojalá que tuvieran más tiempo.", "Ojalá tuviesen más tiempo."]),
      wo("Nadie esperaba que el equipo ganara la final.", "Principal en pasado → imperfecto de subjuntivo.", "Nobody expected the team to win the final."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2r-dialogue-parents-wanted",
    "Laboratorio de diálogo: lo que nuestros padres querían",
    "Dos amigos recuerdan las expectativas de sus padres — y lo que ellos mismos querían.",
    "7 min",
    [
      sec(
        "Recuerdos de la adolescencia",
        "Querían que, esperaban que, les molestaba que, no les gustaba que + imperfecto de subjuntivo.",
        [
          ["—Mis padres querían que estudiara Derecho.", "My parents wanted me to study law."],
          ["—Los míos esperaban que me hiciera cargo de la tienda.", "Mine expected me to take over the shop."],
          ["—A mi madre le molestaba que llegara tarde los sábados.", "It bothered my mother when I came home late on Saturdays."],
        ],
        [
          fb("Completa el recuerdo.", "Mi padre no dejaba que ___ la tele entre semana. (ver, nosotros)", "viéramos", "Dejar que + imperfecto de subjuntivo."),
          fb("Completa el recuerdo.", "Mis abuelos preferían que la familia ___ junta los domingos. (comer)", "comiera", "Preferir que + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo quería que me ___ más libertad. (dar, ellos)", "dieran", "Dieron → dieran."),
      fb("Completa.", "Era normal que ___ con ellos por todo. (discutir, yo)", "discutiera", "Era normal que + imperfecto."),
      fb("Completa.", "Me daba rabia que mis hermanos ___ salir y yo no. (poder)", "pudieran", "Dar rabia que + imperfecto de subjuntivo."),
      mt(
        "Relaciona cada expectativa con su traducción.",
        [
          ["Querían que fuera médico.", "They wanted me to be a doctor."],
          ["Esperaban que me casara joven.", "They expected me to marry young."],
          ["Les preocupaba que viajara solo.", "They worried about me traveling alone."],
          ["Me pedían que ayudara en casa.", "They asked me to help at home."],
        ],
        "Pasado + imperfecto de subjuntivo."
      ),
      mc(
        "«My parents didn't let me go out at night.»",
        ["Mis padres no me dejaban que saliera de noche.", "Mis padres no me dejaban que salgo de noche.", "Mis padres no me dejaban que salga de noche ayer.", "Mis padres no dejaban salgo de noche."],
        0,
        "Dejar que + imperfecto de subjuntivo (también: no me dejaban salir)."
      ),
      toEs("I would like my children to be happy.", "Me gustaría que mis hijos fueran felices.", "Condicional + imperfecto de subjuntivo.", ["Me gustaría que mis hijos fuesen felices.", "Quisiera que mis hijos fueran felices."]),
      wo("Nunca imaginaron que acabaría siendo actriz.", "Pretérito + condicional (futuro del pasado).", "They never imagined I would end up being an actress."),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2r-mission-hypothetical-interview",
    "Misión real: la entrevista hipotética",
    "Una revista te entrevista con preguntas imposibles. Responde con si + imperfecto de subjuntivo + condicional.",
    "7 min",
    [
      sec(
        "Las preguntas",
        "Si + imperfecto de subjuntivo presenta una situación irreal o improbable; la consecuencia va en condicional.",
        [
          ["—Si pudieras cenar con cualquier persona de la historia, ¿con quién cenarías?", "If you could have dinner with anyone in history, who would it be?"],
          ["—Si pudiera, cenaría con Frida Kahlo.", "If I could, I'd have dinner with Frida Kahlo."],
        ],
        [
          fb("Responde.", "Si ___ un superpoder, sería volar. (tener, yo)", "tuviera", "Si + imperfecto de subjuntivo."),
          fb("Responde.", "Si viviera en otra época, ___ en el siglo XIX. (vivir, yo)", "viviría", "Consecuencia → condicional."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ presidente, lo primero que haría sería mejorar la educación. (ser, yo)", "fuera", "Ser → fuera."),
      fb("Completa.", "Si no tuvieras que trabajar, ¿qué ___? (hacer, tú)", "harías", "Hacer → harías."),
      fb("Completa.", "Si ___ hablar con los animales, hablaría con mi gato. (saber, yo)", "supiera", "Saber → supiera."),
      mt(
        "Relaciona cada condición con una consecuencia lógica.",
        [
          ["Si me tocara la lotería,", "dejaría de trabajar."],
          ["Si fuera invisible,", "entraría en los museos de noche."],
          ["Si hablara diez idiomas,", "trabajaría en la ONU."],
          ["Si viviera en una isla,", "iría a todas partes en barco."],
        ],
        "Si + imperfecto de subjuntivo, + condicional."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Si pudiera, viajaría por el mundo.", "Si tendría dinero, compraría una casa.", "Viviría en el campo si no tuviera que trabajar en la ciudad.", "Si fuese más joven, aprendería a surfear."],
        [0, 2, 3],
        "Nunca condicional después de si: si tuviera dinero."
      ),
      toEs("If I were you, I'd accept the offer.", "Si yo fuera tú, aceptaría la oferta.", "Si + imperfecto de subjuntivo + condicional.", ["Si fuera tú, aceptaría la oferta.", "Yo que tú, aceptaría la oferta.", "Si yo fuese tú, aceptaría la oferta."]),
      wo("¿Qué cambiarías de tu vida si pudieras empezar de nuevo?", "Condicional + si + imperfecto de subjuntivo.", "What would you change about your life if you could start over?"),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2r-contrast-si-tengo-tuviera",
    "Contraste: si tengo / si tuviera",
    "Posible frente a improbable o irreal: la misma condición con dos grados de realidad.",
    "7 min",
    [
      sec(
        "Dos grados de realidad",
        "Si + presente = posible y real (quizá pase). Si + imperfecto de subjuntivo = improbable o contrario a la realidad actual.",
        [
          ["Si tengo tiempo, te ayudo.", "If I have time, I'll help you. (it's possible)"],
          ["Si tuviera tiempo, te ayudaría.", "If I had time, I'd help you. (but I don't)"],
        ],
        [
          mc(
            "Sabes que mañana no puedes ir. ¿Qué dices?",
            ["Si pudiera, iría.", "Si puedo, iré.", "Si podré, iría.", "Si pueda, iré."],
            0,
            "Contrario a la realidad → si + imperfecto de subjuntivo."
          ),
        ]
      ),
      sec(
        "Como si",
        "Como si (as if) siempre lleva imperfecto de subjuntivo (o pluscuamperfecto): Habla como si fuera el jefe.",
        [
          ["Me mira como si no me conociera.", "He looks at me as if he didn't know me."],
        ],
        [
          fb("Completa.", "Gasta dinero como si ___ millonario. (ser)", "fuera", "Como si + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("¿Real o irreal?", "Si ___ mañana, iremos al cine. (llover)", "llueve", "Posible → presente."),
      fb("¿Real o irreal?", "Si no ___ tanto, iríamos a la playa. (llover)", "lloviera", "Contrario a la realidad (está lloviendo) → imperfecto."),
      fb("¿Real o irreal?", "Si ___ el tren de las ocho, llegarás a tiempo. (coger, tú)", "coges", "Posible → presente."),
      fb("Completa.", "Nos trata como si ___ niños. (ser, nosotros)", "fuéramos", "Como si + imperfecto de subjuntivo."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Si estudio, apruebo.", "Real: it depends on me."],
          ["Si estudiara, aprobaría.", "Unlikely: I'm not studying."],
          ["Actúa como si supiera.", "He acts as though he knew."],
          ["Si sabes algo, dímelo.", "Possible: you might know."],
        ],
        "El tiempo de la condición marca el grado de realidad."
      ),
      toEs("He talks as if he knew everything.", "Habla como si lo supiera todo.", "Como si + imperfecto de subjuntivo.", ["Habla como si supiera todo.", "Habla como si lo supiese todo."]),
      wo("Si me dieran el trabajo, me mudaría a Barcelona.", "Improbable → si + imperfecto + condicional.", "If they gave me the job, I'd move to Barcelona."),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2r-error-hunt-si-clauses",
    "Caza de errores: las condicionales hipotéticas",
    "«Si tendría», «si sería», «como si es» — los errores más frecuentes del tipo 2, corregidos.",
    "7 min",
    [
      sec(
        "La regla de oro",
        "Nunca condicional después de si (en condiciones). ✗ Si tendría → ✓ Si tuviera. ✗ Si sería → ✓ Si fuera.",
        [
          ["✗ Si sabría nadar, iría contigo. → ✓ Si supiera nadar, iría contigo.", "If I could swim, I'd go with you."],
          ["✗ Actúa como si es el dueño. → ✓ Actúa como si fuera el dueño.", "He acts as if he were the owner."],
        ],
        [
          fb("Corrige.", "Si ___ más cerca, te visitaría más. (vivir, yo; el alumno escribió: viviría)", "viviera", "Si + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Si yo ___ tú, no lo haría. (ser; el alumno escribió: sería)", "fuera", "Si + imperfecto de subjuntivo."),
      fb("Corrige.", "Si tuviera coche, te ___ a casa. (llevar; el alumno escribió: llevara)", "llevaría", "Consecuencia → condicional (en el habla también se oye llevara, pero la norma es el condicional)."),
      fb("Corrige.", "Me habla como si ___ tonto. (ser, yo; el alumno escribió: soy)", "fuera", "Como si + imperfecto de subjuntivo."),
      ms(
        "¿Qué frases tienen un error?",
        ["Si pudiera, te ayudaría.", "Si habría sabido, no habría venido.", "Si fueras más paciente, entenderías.", "Si me llamas, te contesto."],
        [1],
        "Si hubiera sabido (pluscuamperfecto de subjuntivo), que verás en la próxima lección."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Si tuviéramos tiempo, cocinaríamos más.", "Si tuvieramos tiempo, cocinaríamos más.", "Si tendríamos tiempo, cocinaríamos más.", "Si tuviéramos tiempo, cocinaremos más."],
        0,
        "Tilde en nosotros + condicional."
      ),
      toEs("If it weren't so expensive, I'd buy it.", "Si no fuera tan caro, lo compraría.", "Si + imperfecto de subjuntivo + condicional con pronombre.", ["Si no fuese tan caro, lo compraría.", "Lo compraría si no fuera tan caro."]),
      wo("No lo haría ni aunque me pagaran un millón.", "Ni aunque + imperfecto de subjuntivo = not even if.", "I wouldn't do it even if they paid me a million."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2r-dialogue-regrets",
    "Laboratorio de diálogo: arrepentimientos",
    "Dos amigos repasan decisiones del pasado: si hubiera…, habría…; ojalá hubiera…",
    "8 min",
    [
      sec(
        "Mirando atrás",
        "Si + pluscuamperfecto de subjuntivo + condicional perfecto: cómo habría sido el pasado con otra decisión.",
        [
          ["—Si hubiera estudiado Medicina, ahora sería médico.", "If I had studied medicine, I'd be a doctor now. (mixed)"],
          ["—Y si no te hubieras ido a Londres, no habrías conocido a tu mujer.", "And if you hadn't gone to London, you wouldn't have met your wife."],
          ["—Ojalá hubiera aprendido a tocar el piano de niño.", "I wish I had learned to play the piano as a child."],
        ],
        [
          fb("Completa.", "Si ___ el despertador, no habría llegado tarde. (oír, yo; pluscuamperfecto de subjuntivo)", "hubiera oído", "Hubiera + participio."),
          fb("Completa.", "Si hubieras venido, ___ pasado muy bien. (pasarlo, tú; condicional perfecto)", "lo habrías", "Condicional perfecto con el pronombre delante: lo habrías pasado."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá ___ más tiempo con mis abuelos. (pasar, yo; pluscuamperfecto de subjuntivo)", "hubiera pasado", "Ojalá + pluscuamperfecto de subjuntivo = arrepentimiento."),
      fb("Completa.", "Yo en tu lugar no ___ esa decisión. (tomar; condicional perfecto)", "habría tomado", "Habría + participio."),
      fb("Completa.", "Si me lo ___ antes, te habría ayudado. (decir, tú)", "hubieras dicho", "Pluscuamperfecto de subjuntivo."),
      mt(
        "Relaciona cada arrepentimiento con su consecuencia.",
        [
          ["Si hubiera ahorrado,", "habría podido comprar la casa."],
          ["Si no hubiera fumado,", "no habría tenido problemas de salud."],
          ["Si hubiera aprendido inglés,", "habría conseguido ese trabajo."],
          ["Si me hubiera disculpado,", "seguiríamos siendo amigos."],
        ],
        "La última es mixta: pasado → consecuencia presente (condicional simple)."
      ),
      mc(
        "«I wouldn't have said anything.»",
        ["No habría dicho nada.", "No habrá dicho nada.", "No habría decido nada.", "No he dicho nada."],
        0,
        "Condicional perfecto: habría dicho."
      ),
      toEs("If we had left earlier, we wouldn't have missed the plane.", "Si hubiéramos salido antes, no habríamos perdido el avión.", "Tipo 3 completo.", ["Si hubiésemos salido antes, no habríamos perdido el avión.", "Si hubiéramos salido antes, no hubiéramos perdido el avión.", "Si hubiéramos salido más temprano, no habríamos perdido el avión."]),
      wo("Ojalá me hubieras avisado de que venías.", "Ojalá + pluscuamperfecto de subjuntivo.", "I wish you had told me you were coming."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2r-chain-alternative-history",
    "Cadena: historia alternativa",
    "¿Y si las cosas hubieran sido distintas? Encadena consecuencias en el pasado y en el presente.",
    "7 min",
    [
      sec(
        "Una cadena de «si»",
        "Cada consecuencia puede ser la condición de la siguiente. Y a veces la consecuencia llega hasta hoy (condicional simple).",
        [
          ["Si no hubiera perdido el tren, no habría conocido a Marta.", "If I hadn't missed the train, I wouldn't have met Marta."],
          ["Si no hubiera conocido a Marta, no me habría mudado a Chile.", "If I hadn't met Marta, I wouldn't have moved to Chile."],
          ["Si no me hubiera mudado a Chile, ahora no hablaría español.", "If I hadn't moved to Chile, I wouldn't speak Spanish now."],
        ],
        [
          fb("Continúa la cadena.", "Si no hablara español, no ___ en esta empresa. (trabajar, yo; ahora)", "trabajaría", "Consecuencia presente → condicional simple."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si Colón no ___ a América, la historia habría sido distinta. (llegar)", "hubiera llegado", "Pluscuamperfecto de subjuntivo."),
      fb("Completa.", "Si no se hubiera inventado internet, hoy no ___ redes sociales. (existir)", "existirían", "Pasado → consecuencia presente."),
      fb("Completa.", "Si hubiera nacido en Japón, ___ japonés. (hablar, yo; ahora)", "hablaría", "Consecuencia presente."),
      mc(
        "Ordena la cadena: (A) no habría ido al hospital. (B) Si no me hubiera caído de la bici, (C) y no habría conocido a mi mejor amiga, que era enfermera.",
        ["B → A → C", "A → B → C", "C → B → A", "B → C → A"],
        0,
        "Condición → consecuencia → consecuencia de la consecuencia."
      ),
      ms(
        "¿Qué frases mixtas son correctas?",
        ["Si hubiera dormido más, ahora no estaría cansado.", "Si fuera más organizado, no habría perdido el pasaporte.", "Si hubiera estudiado más, habría aprobado.", "Si hubiera estudiado más, apruebo."],
        [0, 1, 2],
        "La última mezcla un pasado irreal con un presente real."
      ),
      toEs("If I hadn't moved, I would still live with my parents.", "Si no me hubiera mudado, todavía viviría con mis padres.", "Mixta: pasado irreal → presente irreal.", ["Si no me hubiese mudado, todavía viviría con mis padres.", "Si no me hubiera mudado, aún viviría con mis padres."]),
      wo("Si no hubiera llovido aquel día, nunca nos habríamos conocido.", "Tipo 3 completo.", "If it hadn't rained that day, we'd never have met."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2r-error-hunt-type-three",
    "Caza de errores: el tipo 3",
    "«Si habría sabido», «si hubiera ido, iría», «ojalá habría» — corrige los errores de las condicionales del pasado.",
    "7 min",
    [
      sec(
        "Los errores clásicos",
        "(1) Condicional perfecto tras si: ✗ si habría sabido → ✓ si hubiera sabido. (2) Ojalá + condicional: ✗ ojalá habría → ✓ ojalá hubiera. (3) Participios mal formados: ✗ hubiera ponido → ✓ hubiera puesto.",
        [
          ["✗ Si habría estudiado, habría aprobado. → ✓ Si hubiera estudiado, habría aprobado.", "If I had studied, I would have passed."],
        ],
        [
          fb("Corrige.", "Ojalá lo ___ antes. (saber, yo; el alumno escribió: habría sabido)", "hubiera sabido", "Ojalá + pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Si me ___ la verdad, te habría perdonado. (decir, tú; el alumno escribió: habrías dicho)", "hubieras dicho", "Si + pluscuamperfecto de subjuntivo."),
      fb("Corrige.", "Si hubieras ___ la mesa, habríamos cenado antes. (poner; el alumno escribió: ponido)", "puesto", "Poner → puesto."),
      fb("Corrige.", "Si hubiéramos salido antes, no ___ el tren. (perder; el alumno escribió: perdíamos)", "habríamos perdido", "Consecuencia en el pasado → condicional perfecto."),
      ms(
        "¿Qué frases son correctas?",
        ["Si lo hubiera sabido, no habría venido.", "Si lo hubiese sabido, no hubiera venido.", "Si lo habría sabido, no habría venido.", "Ojalá hubieras estado allí."],
        [0, 1, 3],
        "Hubiera/hubiese son intercambiables tras si; también en la consecuencia se acepta hubiera. Nunca habría tras si."
      ),
      mc(
        "«I wish you had seen it.»",
        ["Ojalá lo hubieras visto.", "Ojalá lo habrías visto.", "Ojalá lo hubieras vido.", "Ojalá lo viste."],
        0,
        "Ojalá + pluscuamperfecto de subjuntivo; ver → visto."
      ),
      toEs("We would have gone if you had invited us.", "Habríamos ido si nos hubieras invitado.", "Condicional perfecto + si + pluscuamperfecto de subjuntivo.", ["Hubiéramos ido si nos hubieras invitado.", "Habríamos ido si nos hubieses invitado."]),
      wo("Nunca me lo habría imaginado de ti.", "Condicional perfecto con pronombres.", "I would never have imagined it of you."),
    ]
  ),
  L(
    "reported-speech-2",
    "b2r-mission-gossip",
    "Misión real: el cotilleo",
    "Cuenta a tus amigos lo que te dijeron otros — el estilo indirecto en conversaciones cotidianas.",
    "7 min",
    [
      sec(
        "¿Qué te dijo?",
        "En estilo indirecto con verbo en pasado, los tiempos retroceden: presente → imperfecto, pretérito → pluscuamperfecto, futuro → condicional.",
        [
          ["Ana: «Estoy embarazada». → Ana me dijo que estaba embarazada.", "Ana told me she was pregnant."],
          ["Luis: «Me voy a mudar». → Luis dijo que se iba a mudar.", "Luis said he was going to move."],
          ["Marta: «Rompí con Pablo». → Marta me contó que había roto con Pablo.", "Marta told me she had broken up with Pablo."],
        ],
        [
          fb("Cuéntalo.", "Pedro: «Tengo un trabajo nuevo». → Pedro me dijo que ___ un trabajo nuevo.", "tenía", "Presente → imperfecto."),
        ]
      ),
    ],
    [
      fb("Cuéntalo.", "Lucía: «Iré a la boda». → Lucía dijo que ___ a la boda.", "iría", "Futuro → condicional."),
      fb("Cuéntalo.", "Sergio: «He suspendido». → Sergio me contó que ___.", "había suspendido", "Perfecto → pluscuamperfecto."),
      fb("Cuéntalo.", "Eva: «Llámame». → Eva me pidió que la ___.", "llamara", "Mandato → que + imperfecto de subjuntivo."),
      fb("Cuéntalo.", "Raúl: «¿Tienes tiempo?» → Raúl me preguntó si ___ tiempo.", "tenía", "Pregunta sí/no → si + imperfecto."),
      mt(
        "Relaciona cada frase directa con su versión indirecta.",
        [
          ["«Estoy cansado.»", "Dijo que estaba cansado."],
          ["«Estuve enfermo.»", "Dijo que había estado enfermo."],
          ["«Estaré allí.»", "Dijo que estaría allí."],
          ["«Estate tranquilo.»", "Me dijo que estuviera tranquilo."],
        ],
        "Presente, pretérito, futuro e imperativo en estilo indirecto."
      ),
      toEs("She asked me where I lived.", "Me preguntó dónde vivía.", "Pregunta indirecta con dónde + imperfecto.", ["Ella me preguntó dónde vivía."]),
      wo("Me juró que nunca se lo había contado a nadie.", "Jurar que + pluscuamperfecto.", "He swore to me he had never told anyone."),
    ]
  ),
  L(
    "reported-speech-2",
    "b2r-transform-voice-messages",
    "Transformaciones: los mensajes de voz",
    "Resume mensajes de voz de tu buzón en estilo indirecto: cambian tiempos, pronombres y referencias de tiempo y lugar.",
    "8 min",
    [
      sec(
        "Más allá de los tiempos",
        "También cambian las referencias: hoy → aquel día, mañana → al día siguiente, ayer → el día anterior, aquí → allí, este → aquel. Y los pronombres: «te llamo» → que me llamaría.",
        [
          ["«Mañana te llamo desde aquí.» → Dijo que me llamaría al día siguiente desde allí.", "He said he'd call me the next day from there."],
        ],
        [
          fb("Transforma.", "«Ayer vi a tu hermano.» → Me dijo que había visto a mi hermano el día ___.", "anterior", "Ayer → el día anterior."),
          fb("Transforma.", "«Hoy no puedo ir.» → Dijo que aquel día no ___ ir.", "podía", "Presente → imperfecto; hoy → aquel día."),
        ]
      ),
    ],
    [
      fb("Transforma.", "«Te espero aquí.» → Me dijo que me esperaría ___.", "allí", "Aquí → allí."),
      fb("Transforma.", "«Este viernes cenamos juntos.» → Dijo que ___ viernes cenaríamos juntos.", "aquel", "Este → aquel."),
      fb("Transforma.", "«Mañana te devuelvo el libro.» → Me dijo que me devolvería el libro al día ___.", "siguiente", "Mañana → al día siguiente."),
      mc(
        "Mensaje: «No te preocupes, ya he pagado la factura.» → en estilo indirecto:",
        ["Me dijo que no me preocupara, que ya había pagado la factura.", "Me dijo que no te preocupes, que ya ha pagado la factura.", "Me dijo que no me preocupaba, que ya pagaba la factura.", "Me dijo que no se preocupara, que ya había pagado la factura."],
        0,
        "Mandato → que + imperfecto de subjuntivo; perfecto → pluscuamperfecto; te → me."
      ),
      mt(
        "Relaciona cada expresión con su equivalente en estilo indirecto.",
        [
          ["hoy", "aquel día"],
          ["ayer", "el día anterior"],
          ["mañana", "al día siguiente"],
          ["la semana que viene", "a la semana siguiente"],
        ],
        "Cambios de referencias temporales."
      ),
      toEs("She said she would come back the next day.", "Dijo que volvería al día siguiente.", "Futuro → condicional; mañana → al día siguiente.", ["Ella dijo que volvería al día siguiente.", "Dijo que regresaría al día siguiente."]),
      wo("Me explicó que no había podido llamarme antes.", "Explicar que + pluscuamperfecto.", "He explained that he hadn't been able to call me earlier."),
    ]
  ),
  L(
    "reported-speech-2",
    "b2r-error-hunt-reported-speech",
    "Caza de errores: el estilo indirecto",
    "Tiempos que no retroceden, mandatos en indicativo y preguntas sin si — corrige los errores del estilo indirecto.",
    "7 min",
    [
      sec(
        "Tres errores frecuentes",
        "(1) No retroceder el tiempo: ✗ Dijo que viene → ✓ Dijo que venía (si ya no es vigente). (2) Mandatos en indicativo: ✗ Me dijo que me callaba → ✓ que me callara. (3) Preguntas sí/no sin si: ✗ Me preguntó que tenía hambre → ✓ Me preguntó si tenía hambre.",
        [
          ["✗ Me pidió que le ayudaba. → ✓ Me pidió que le ayudara.", "He asked me to help him."],
        ],
        [
          fb("Corrige.", "Me preguntó ___ quería café. (el alumno escribió: que)", "si", "Pregunta de sí/no → si."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El profesor nos dijo que ___ los móviles. (apagar; el alumno escribió: apagábamos)", "apagáramos", "Orden → que + imperfecto de subjuntivo."),
      fb("Corrige.", "Dijo que el año siguiente ___ a estudiar a Italia. (ir; el alumno escribió: irá)", "iría", "Futuro → condicional."),
      fb("Corrige.", "Me contó que ___ a su exnovia la semana anterior. (ver; el alumno escribió: vio)", "había visto", "Pretérito → pluscuamperfecto (también se acepta el pretérito en el habla, pero la norma escrita retrocede)."),
      ms(
        "¿Qué frases son correctas?",
        ["Me preguntó dónde estaba el baño.", "Le dije que no se preocupara.", "Me preguntó que si quería bailar.", "Dijo que llegará ayer."],
        [0, 1, 2],
        "«Que si» es habitual y correcto en el habla. «Dijo que llegará ayer» es incoherente."
      ),
      mc(
        "«Close the door», he told me. → en estilo indirecto:",
        ["Me dijo que cerrara la puerta.", "Me dijo que cerraba la puerta.", "Me dijo que cierre la puerta ayer.", "Me dijo cerrar que la puerta."],
        0,
        "Orden → que + imperfecto de subjuntivo."
      ),
      toEs("They asked us if we had eaten.", "Nos preguntaron si habíamos comido.", "Si + pluscuamperfecto.", ["Nos preguntaron si ya habíamos comido."]),
      wo("El médico me recomendó que durmiera al menos ocho horas.", "Recomendar que + imperfecto de subjuntivo.", "The doctor recommended I sleep at least eight hours."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2r-contrast-meaning-adjectives",
    "Contraste: es listo / está listo",
    "Adjetivos que cambian de significado con ser y estar — pares mínimos para no volver a confundirlos.",
    "7 min",
    [
      sec(
        "Pares que cambian de sentido",
        "Con ser, el adjetivo describe una cualidad; con estar, un estado o una valoración del momento.",
        [
          ["Es listo. / Está listo.", "He's clever. / He's ready."],
          ["Es rico. / Está rico.", "He's rich. / It's delicious."],
          ["Es despierto. / Está despierto.", "He's sharp. / He's awake."],
          ["Es atento. / Está atento.", "He's considerate. / He's paying attention."],
        ],
        [
          mc(
            "«La sopa ___ riquísima.»",
            ["está", "es", "hay", "son"],
            0,
            "Sabor en este momento → estar rico."
          ),
        ]
      ),
      sec(
        "Más pares avanzados",
        "Ser/estar verde (inexperto / sin madurar), ser/estar negro (de color negro / furioso), ser/estar católico (religión / encontrarse bien, coloquial: no estar muy católico).",
        [
          ["Es muy verde en este trabajo.", "He's very green (inexperienced) in this job."],
          ["Los plátanos están verdes.", "The bananas are unripe."],
          ["Estoy negro con este ordenador.", "I'm furious with this computer."],
        ],
        [
          fb("Completa.", "Todavía no puedes comerte las fresas; ___ verdes.", "están", "Sin madurar → estar verde."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Es aburrido.", "He's boring."],
          ["Está aburrido.", "He's bored."],
          ["Es malo.", "He's bad (a bad person)."],
          ["Está malo.", "He's sick."],
        ],
        "Cualidad con ser; estado con estar."
      ),
      fb("Completa.", "Mi abuelo tiene noventa años, pero ___ muy despierto; lo entiende todo.", "es", "Cualidad (agudo, listo) → ser despierto."),
      fb("Completa.", "Son las seis de la mañana y ya ___ despierto.", "estoy", "Estado (no dormido) → estar despierto."),
      fb("Completa.", "Ese chico ___ muy atento: siempre te abre la puerta.", "es", "Cualidad (considerado) → ser atento."),
      ms(
        "¿Qué frases son correctas?",
        ["La reunión es en la sala 3.", "El jefe está en la sala 3.", "La fiesta está en mi casa.", "Hay un problema con el ordenador."],
        [0, 1, 3],
        "Evento → ser: la fiesta es en mi casa."
      ),
      toEs("The cake is ready; it's delicious.", "El pastel está listo; está riquísimo.", "Estar listo (preparado) y estar rico (sabor).", ["La tarta está lista; está riquísima.", "El pastel está listo, está buenísimo.", "El pastel está listo; está delicioso."]),
      wo("No te fíes de él; es muy listo pero poco sincero.", "Ser listo = inteligente (cualidad).", "Don't trust him; he's very clever but not very honest."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2r-mission-character-sketch",
    "Misión real: retrato de un personaje",
    "Escribe el perfil de un personaje para una novela: quién es, cómo está, dónde está y qué hay en su vida.",
    "7 min",
    [
      sec(
        "El perfil",
        "Ser: identidad, carácter, origen, material, eventos. Estar: estados, ubicación, resultados. Haber: existencia.",
        [
          ["Elena es arquitecta y es de Valparaíso.", "Elena is an architect and is from Valparaíso."],
          ["Últimamente está agotada porque hay demasiado trabajo en su estudio.", "Lately she's exhausted because there's too much work at her studio."],
          ["Su casa está en lo alto de un cerro y es de madera.", "Her house is on top of a hill and is made of wood."],
        ],
        [
          fb("Completa el perfil.", "Elena ___ una persona muy perfeccionista.", "es", "Carácter → ser."),
          fb("Completa el perfil.", "En su escritorio ___ planos por todas partes.", "hay", "Existencia → hay."),
        ]
      ),
    ],
    [
      fb("Completa el perfil.", "Su padre ___ muerto desde hace años.", "está", "Muerto se usa con estar."),
      fb("Completa el perfil.", "La inauguración de su último edificio ___ en marzo.", "fue", "Evento → ser (pretérito)."),
      fb("Completa el perfil.", "Ahora ___ enamorada de un músico, pero no se lo ha dicho a nadie.", "está", "Estado emocional → estar."),
      ms(
        "Describiendo su casa: ¿qué rasgos se expresan con estar?",
        ["de madera", "en el tercer piso", "tres ventanas", "recién pintada"],
        [1, 3],
        "Material → ser (es de madera); existencia → haber (hay tres ventanas); ubicación y resultado → estar."
      ),
      mc(
        "«The conference will be in the main auditorium.»",
        ["La conferencia será en el auditorio principal.", "La conferencia estará en el auditorio principal.", "La conferencia habrá en el auditorio principal.", "La conferencia es estando en el auditorio principal."],
        0,
        "Evento → ser."
      ),
      toEs("She is very calm, but today she is nervous.", "Es muy tranquila, pero hoy está nerviosa.", "Carácter → ser; estado del día → estar.", ["Ella es muy tranquila, pero hoy está nerviosa."]),
      wo("En el pueblo donde nació no había ni una sola biblioteca.", "Haber en imperfecto para existencia en el pasado.", "In the village where she was born there wasn't a single library."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2r-error-hunt-ser-estar-haber",
    "Caza de errores: ser, estar y haber en el B2",
    "Los errores que siguen apareciendo en niveles avanzados: eventos, resultados, existencia y adjetivos de doble sentido.",
    "7 min",
    [
      sec(
        "Errores avanzados",
        "(1) Estar para eventos: ✗ El concierto está en el estadio → ✓ es. (2) Haber con artículo definido: ✗ Hay el libro en la mesa → ✓ El libro está en la mesa. (3) Haber en plural: ✗ Habían muchas personas → ✓ Había.",
        [
          ["✗ Habían tres opciones. → ✓ Había tres opciones.", "There were three options."],
          ["✗ La boda está en la iglesia. → ✓ La boda es en la iglesia.", "The wedding is at the church."],
        ],
        [
          fb("Corrige.", "___ muchos problemas en la reunión de ayer. (haber; el alumno escribió: Hubieron)", "Hubo", "Haber impersonal siempre en singular."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El examen ___ en el aula 12. (el alumno escribió: está)", "es", "Evento → ser."),
      fb("Corrige.", "Tus llaves ___ encima de la mesa. (el alumno escribió: hay)", "están", "Cosa concreta → estar."),
      fb("Corrige.", "Esa película ___ muy aburrida; me dormí. (el alumno escribió: está)", "es", "Cualidad de la película → ser aburrida."),
      ms(
        "¿Qué frases tienen un error?",
        ["Había mucha gente en la plaza.", "Habrán más oportunidades.", "La cena está lista.", "El partido es a las nueve."],
        [1],
        "Haber impersonal: habrá más oportunidades."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Puede que haya más personas de las que esperábamos.", "Puede que hayan más personas de las que esperábamos.", "Puede que estén más personas de las que esperábamos.", "Puede que son más personas de las que esperábamos."],
        0,
        "Haber impersonal en subjuntivo: haya (singular)."
      ),
      toEs("There will be many changes next year.", "Habrá muchos cambios el año que viene.", "Haber impersonal en futuro, singular.", ["Habrá muchos cambios el próximo año."]),
      wo("La exposición es en el museo que está junto al río.", "Evento → ser; ubicación de un edificio → estar.", "The exhibition is at the museum that's next to the river."),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2r-story-biographies-of-change",
    "Detective de historias: biografías del cambio",
    "Lee mini-biografías y elige el verbo de cambio exacto para cada transformación.",
    "8 min",
    [
      sec(
        "Tres vidas",
        "Ponerse (cambio rápido, temporal), volverse (cambio profundo, a menudo involuntario), hacerse (cambio por esfuerzo o decisión), llegar a ser (logro gradual), convertirse en (transformación), quedarse (resultado, a menudo negativo).",
        [
          ["Carlos empezó como camarero y llegó a ser director del hotel.", "Carlos started as a waiter and became hotel director."],
          ["Tras la guerra, el pintor se volvió muy callado.", "After the war, the painter became very quiet."],
          ["Lucía se hizo vegetariana a los veinte años.", "Lucía became vegetarian at twenty."],
        ],
        [
          mc(
            "¿Qué verbo describe un logro gradual tras mucho esfuerzo?",
            ["llegar a ser", "ponerse", "quedarse", "volverse"],
            0,
            "Llegar a ser = alcanzar una posición tras un proceso."
          ),
        ]
      ),
      sec(
        "Más cambios",
        "Quedarse suele indicar el resultado de algo: quedarse ciego, quedarse sin trabajo, quedarse viudo.",
        [
          ["Mi abuela se quedó viuda muy joven.", "My grandmother was widowed very young."],
          ["El pueblo se convirtió en un destino turístico.", "The village became a tourist destination."],
        ],
        [
          fb("Completa.", "Cuando cerró la fábrica, mi tío ___ sin trabajo. (quedarse, pretérito)", "se quedó", "Resultado negativo → quedarse."),
        ]
      ),
    ],
    [
      fb("Completa la biografía.", "Al ver al público, la cantante ___ muy nerviosa. (ponerse, pretérito)", "se puso", "Cambio rápido y temporal → ponerse."),
      fb("Completa la biografía.", "Con los años, el empresario ___ cada vez más desconfiado. (volverse, pretérito)", "se volvió", "Cambio de carácter gradual → volverse."),
      fb("Completa la biografía.", "Estudió muchísimo y ___ abogada. (hacerse, pretérito)", "se hizo", "Profesión por esfuerzo → hacerse."),
      fb("Completa la biografía.", "Aquel pequeño taller ___ en una gran empresa. (convertirse, pretérito)", "se convirtió", "Transformación → convertirse en."),
      mt(
        "Relaciona cada cambio con su verbo.",
        [
          ["rojo de vergüenza", "ponerse"],
          ["millonario tras años de trabajo", "hacerse"],
          ["loco", "volverse"],
          ["sin palabras", "quedarse"],
        ],
        "Cada verbo tiene su tipo de cambio."
      ),
      toEs("Her dream became reality.", "Su sueño se convirtió en realidad.", "Convertirse en + sustantivo.", ["Su sueño se hizo realidad.", "Su sueño se volvió realidad."]),
      wo("Con el tiempo, aquella niña tímida llegó a ser una gran líder.", "Llegar a ser = logro gradual.", "Over time, that shy girl became a great leader."),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2r-contrast-ponerse-volverse-hacerse",
    "Contraste: se puso, se volvió, se hizo",
    "La misma persona, tres cambios distintos — elige el verbo según la duración y la voluntad.",
    "7 min",
    [
      sec(
        "Dos preguntas para decidir",
        "¿Es rápido y temporal? → ponerse. ¿Es profundo, a menudo sin querer? → volverse. ¿Es voluntario o por esfuerzo? → hacerse.",
        [
          ["Se puso triste al oír la noticia.", "She got sad when she heard the news. (momentary)"],
          ["Se volvió muy triste después de la pérdida.", "She became a very sad person after the loss. (lasting)"],
          ["Se hizo budista.", "She became a Buddhist. (her choice)"],
        ],
        [
          mc(
            "«Cuando habla en público, siempre ___ rojo.»",
            ["se pone", "se vuelve", "se hace", "llega a ser"],
            0,
            "Cambio físico rápido → ponerse."
          ),
        ]
      ),
    ],
    [
      fb("Elige el verbo.", "Desde que ganó la lotería, ___ muy arrogante. (volverse, perfecto)", "se ha vuelto", "Cambio de carácter → volverse."),
      fb("Elige el verbo.", "Mi hermano ___ socio del club de ajedrez. (hacerse, pretérito)", "se hizo", "Afiliación voluntaria → hacerse."),
      fb("Elige el verbo.", "No ___ así; solo era una broma. (ponerse, tú, negativo)", "te pongas", "Reacción emocional momentánea → ponerse."),
      fb("Elige el verbo.", "El cielo ___ gris de repente. (ponerse, pretérito)", "se puso", "Cambio rápido de aspecto → ponerse."),
      ms(
        "¿Qué frases son naturales?",
        ["Se hizo rico con su negocio.", "Se volvió loco de alegría.", "Se puso médico.", "Me pongo nerviosa en los exámenes."],
        [0, 1, 3],
        "Profesión por esfuerzo → se hizo médico."
      ),
      mc(
        "«He became famous overnight.»",
        ["Se hizo famoso de la noche a la mañana.", "Se puso famoso de la noche a la mañana.", "Se quedó famoso de la noche a la mañana.", "Llegó a famoso de la noche a la mañana."],
        0,
        "Hacerse famoso (también: volverse famoso)."
      ),
      wo("Cuando vio el precio, se quedó sin palabras.", "Quedarse sin + sustantivo = resultado.", "When he saw the price, he was left speechless."),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2r-transform-adjective-to-change",
    "Transformaciones: de «estar» a «ponerse»",
    "Convierte estados en cambios: está nervioso → se puso nervioso; es famoso → se hizo famoso.",
    "7 min",
    [
      sec(
        "Del estado al proceso",
        "Estar + adjetivo describe el estado; ponerse + adjetivo, el momento en que empieza. Ser + adjetivo/sustantivo describe la cualidad; volverse/hacerse, el proceso que llevó a ella.",
        [
          ["Estaba furioso. → Se puso furioso cuando lo vio.", "He was furious. → He got furious when he saw it."],
          ["Es independiente. → Se hizo independiente a los dieciocho.", "She's independent. → She became independent at eighteen."],
        ],
        [
          fb("Transforma.", "Está pálido. → ___ pálido de repente. (ponerse, pretérito)", "Se puso", "Cambio rápido."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Es muy desconfiado. → Con los años, ___ muy desconfiado. (volverse, pretérito)", "se volvió", "Cambio gradual de carácter."),
      fb("Transforma.", "Es ingeniero. → Estudió cinco años y ___ ingeniero. (hacerse, pretérito)", "se hizo", "Profesión por esfuerzo."),
      fb("Transforma.", "Está sordo. → Tras el accidente, ___ sordo. (quedarse, pretérito)", "se quedó", "Resultado de un suceso."),
      fb("Transforma.", "Es una ciudad moderna. → En diez años ___ en una ciudad moderna. (convertirse, pretérito)", "se convirtió", "Convertirse en + sustantivo."),
      mc(
        "«Está muy contento.» → proceso (momento en que empieza):",
        ["Se puso muy contento.", "Se volvió muy contento para siempre.", "Se hizo muy contento.", "Llegó a ser muy contento."],
        0,
        "Emoción momentánea → ponerse."
      ),
      toEs("My grandfather became very forgetful.", "Mi abuelo se volvió muy olvidadizo.", "Cambio gradual e involuntario → volverse.", ["Mi abuelo se ha vuelto muy olvidadizo."]),
      wo("La pequeña librería se convirtió en el centro cultural del barrio.", "Convertirse en + sustantivo.", "The small bookstore became the neighborhood's cultural center."),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2r-build-argumentative-paragraph",
    "Construye: un párrafo argumentativo",
    "Une ideas sueltas en un párrafo coherente con conectores de causa, consecuencia, contraste y adición.",
    "8 min",
    [
      sec(
        "Las piezas",
        "Causa: ya que, puesto que, dado que. Consecuencia: por lo tanto, por consiguiente, así que. Contraste: sin embargo, no obstante, a pesar de que. Adición: además, asimismo, incluso.",
        [
          ["Dado que el transporte público es barato, cada vez más gente lo usa.", "Given that public transport is cheap, more and more people use it."],
          ["Sin embargo, todavía hay barrios mal comunicados.", "However, there are still poorly connected neighborhoods."],
          ["Por lo tanto, es necesario ampliar la red.", "Therefore, it's necessary to expand the network."],
        ],
        [
          fb("Elige el conector.", "El centro está peatonalizado; ___, el aire es más limpio. (therefore)", "por lo tanto", "Consecuencia."),
        ]
      ),
    ],
    [
      fb("Elige el conector.", "___ que llueve mucho, los embalses están llenos. (given)", "Dado", "Dado que + indicativo: causa conocida."),
      fb("Elige el conector.", "Es una buena medida; ___, tiene algunos inconvenientes. (however)", "sin embargo", "Contraste."),
      fb("Elige el conector.", "Reduce la contaminación y, ___, ahorra dinero. (moreover)", "además", "Adición."),
      wo("A pesar de que la ley es reciente, ya ha dado buenos resultados.", "A pesar de que + indicativo (hecho conocido).", "Although the law is recent, it has already produced good results."),
      wo("Puesto que nadie se opuso, la propuesta fue aprobada.", "Puesto que + causa conocida; pasiva.", "Since nobody objected, the proposal was approved."),
      mc(
        "¿Qué conector encaja? «No estudió nada; ___, suspendió.»",
        ["por consiguiente", "no obstante", "además", "a pesar de"],
        0,
        "Consecuencia lógica."
      ),
      toEs("The project is expensive; nevertheless, it's necessary.", "El proyecto es caro; no obstante, es necesario.", "No obstante = sin embargo.", ["El proyecto es caro; sin embargo, es necesario.", "El proyecto es caro, no obstante es necesario."]),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2r-error-hunt-connectors",
    "Caza de errores: los conectores",
    "«A pesar de que el frío», «sin embargo que», «por eso de que» — corrige los conectores mal construidos.",
    "7 min",
    [
      sec(
        "Preposición o conjunción",
        "Algunos conectores cambian según lo que sigue: a pesar de + sustantivo/infinitivo, a pesar de que + verbo conjugado. Lo mismo con debido a / debido a que.",
        [
          ["✗ A pesar de que el frío, salimos. → ✓ A pesar del frío, salimos.", "Despite the cold, we went out."],
          ["✗ Debido a llovía, se canceló. → ✓ Debido a que llovía, se canceló.", "Because it was raining, it was canceled."],
        ],
        [
          fb("Corrige.", "___ la lluvia, el partido continuó. (el alumno escribió: A pesar de que)", "A pesar de", "Sustantivo → a pesar de."),
        ]
      ),
      sec(
        "Posición y puntuación",
        "Sin embargo y no obstante suelen ir tras punto o punto y coma, y seguidos de coma. No llevan que.",
        [
          ["✗ Es caro, sin embargo que es bueno. → ✓ Es caro; sin embargo, es bueno.", "It's expensive; however, it's good."],
        ],
        [
          mc(
            "¿Cuál es correcta?",
            ["Estaba cansado; sin embargo, siguió trabajando.", "Estaba cansado, sin embargo que siguió trabajando.", "Sin embargo estaba cansado que siguió trabajando.", "Estaba cansado sin embargo de siguió trabajando."],
            0,
            "Sin embargo, entre signos de puntuación."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "El vuelo se retrasó debido ___ la niebla. (el alumno escribió: que)", "a", "Debido a + sustantivo."),
      fb("Corrige.", "___ tenía fiebre, fue a trabajar. (el alumno escribió: A pesar de)", "A pesar de que", "Verbo conjugado → a pesar de que."),
      fb("Corrige.", "No vino; ___, no nos avisó. (además; el alumno escribió: sin embargo)", "además", "Se suma otra queja → adición, no contraste."),
      ms(
        "¿Qué frases son correctas?",
        ["Ya que estás aquí, ayúdame.", "Aunque llueve, iremos.", "Por lo tanto que no vino, empezamos.", "Gracias a tu ayuda, terminamos a tiempo."],
        [0, 1, 3],
        "Por lo tanto no lleva que; aquí haría falta «como no vino, empezamos»."
      ),
      mc(
        "«Since you know the answer, tell me.»",
        ["Ya que sabes la respuesta, dímela.", "Ya que sepas la respuesta, dímela.", "Por lo tanto sabes la respuesta, dímela.", "Sin embargo sabes la respuesta, dímela."],
        0,
        "Ya que + indicativo (causa conocida)."
      ),
      toEs("Despite being tired, she finished the race.", "A pesar de estar cansada, terminó la carrera.", "A pesar de + infinitivo.", ["A pesar de que estaba cansada, terminó la carrera.", "Pese a estar cansada, terminó la carrera."]),
      wo("Como no había entradas, nos quedamos en casa.", "Como (causal) al principio de la oración.", "Since there were no tickets, we stayed home."),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2r-transform-pero-sin-embargo",
    "Transformaciones: del registro coloquial al formal",
    "Sustituye pero, porque y así que por sus equivalentes formales en un texto académico.",
    "7 min",
    [
      sec(
        "Subir el registro",
        "Pero → sin embargo / no obstante. Porque → ya que / puesto que / dado que. Así que → por lo tanto / por consiguiente. Y también → además / asimismo.",
        [
          ["Es útil, pero es caro. → Es útil; no obstante, es caro.", "It's useful; nevertheless, it's expensive."],
          ["Lo cancelaron porque no había dinero. → Lo cancelaron, puesto que no había fondos.", "It was canceled since there were no funds."],
        ],
        [
          fb("Sube el registro.", "No hubo acuerdo, así que se aplazó la votación. → No hubo acuerdo; ___, se aplazó la votación.", "por consiguiente", "Así que → por consiguiente (o por lo tanto)."),
        ]
      ),
    ],
    [
      fb("Sube el registro.", "Aumentó la demanda porque bajaron los precios. → Aumentó la demanda, ___ que bajaron los precios.", "dado", "Porque → dado que."),
      fb("Sube el registro.", "El estudio es serio y también es innovador. → El estudio es serio; ___, es innovador.", "asimismo", "Y también → asimismo."),
      fb("Sube el registro.", "Tiene ventajas, pero hay riesgos. → Tiene ventajas; ___, hay riesgos.", "no obstante", "Pero → no obstante."),
      mt(
        "Relaciona cada conector coloquial con uno formal.",
        [
          ["pero", "no obstante"],
          ["porque", "puesto que"],
          ["así que", "por consiguiente"],
          ["además", "asimismo"],
        ],
        "Equivalencias de registro."
      ),
      mc(
        "¿Qué versión es la más formal?",
        ["Dado que los datos son insuficientes, resulta prematuro extraer conclusiones.", "Como no tenemos muchos datos, pues no sé.", "No hay datos, así que nada.", "Porque faltan datos, no podemos decir nada, ¿vale?"],
        0,
        "Dado que + vocabulario formal (resulta prematuro, extraer conclusiones)."
      ),
      toEs("Therefore, further research is needed.", "Por lo tanto, se necesita más investigación.", "Por lo tanto + se pasivo.", ["Por consiguiente, se necesita más investigación.", "Por lo tanto, es necesaria más investigación.", "Por tanto, se necesita más investigación."]),
      wo("Asimismo, conviene destacar la participación de los vecinos.", "Asimismo (adición formal) + conviene + infinitivo.", "Likewise, it's worth highlighting the residents' participation."),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2r-transform-cleft-sentences",
    "Transformaciones: frases hendidas",
    "Destaca quién, qué, cuándo o dónde con ser … que: «Fue María quien lo encontró».",
    "7 min",
    [
      sec(
        "Mover el foco",
        "Ser + elemento destacado + relativo. Para personas: quien / el que. Para cosas: lo que / el que. Para tiempo: cuando. Para lugar: donde. Para modo: como.",
        [
          ["María encontró las llaves. → Fue María quien encontró las llaves.", "It was María who found the keys."],
          ["Nos conocimos en Lima. → Fue en Lima donde nos conocimos.", "It was in Lima that we met."],
          ["Necesito tiempo. → Lo que necesito es tiempo.", "What I need is time."],
        ],
        [
          fb("Destaca el tiempo.", "Llegó el lunes. → Fue el lunes ___ llegó.", "cuando", "Tiempo → cuando."),
        ]
      ),
    ],
    [
      fb("Destaca a la persona.", "Tu hermana me lo dijo. → Fue tu hermana ___ me lo dijo.", "quien", "Persona → quien (o la que)."),
      fb("Destaca el lugar.", "Estudié en Salamanca. → Fue en Salamanca ___ estudié.", "donde", "Lugar → donde."),
      fb("Destaca el objeto.", "Me molesta su actitud. → ___ que me molesta es su actitud.", "Lo", "Lo que me molesta es…"),
      fb("Destaca el modo.", "Lo arreglé así. → Fue así ___ lo arreglé.", "como", "Modo → como."),
      mc(
        "«It was my parents who taught me to read.»",
        ["Fueron mis padres quienes me enseñaron a leer.", "Fue mis padres quien me enseñaron a leer.", "Eran mis padres lo que me enseñaron a leer.", "Fueron mis padres que me enseñaron leer."],
        0,
        "Ser concuerda con el elemento destacado (fueron); plural → quienes."
      ),
      toEs("What I like most is the silence.", "Lo que más me gusta es el silencio.", "Lo que + ser para destacar.", ["Lo que más me gusta es la tranquilidad."]),
      wo("Fue precisamente en ese momento cuando entendí todo.", "Frase hendida temporal.", "It was precisely at that moment that I understood everything."),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2r-mission-passionate-review",
    "Misión real: una crítica apasionada",
    "Escribe una crítica de un concierto que te encantó (o que odiaste) con todas las estructuras de énfasis.",
    "7 min",
    [
      sec(
        "Recursos de énfasis",
        "Lo + adjetivo + que (lo bien que canta), anteposición con pronombre (La canción, la cantó como nadie), ¡Qué + adjetivo!, e inversión con adverbios (Jamás había visto…).",
        [
          ["¡No te imaginas lo bien que tocaron!", "You can't imagine how well they played!"],
          ["Esa canción la cantó a capela.", "That song, she sang a cappella."],
          ["Jamás había oído una voz así.", "Never had I heard a voice like that."],
        ],
        [
          fb("Enfatiza.", "¡No sabes lo ___ que eran las canciones! (emocionante)", "emocionantes", "Lo + adjetivo + que: el adjetivo concuerda con el sustantivo (las canciones)."),
          fb("Enfatiza con anteposición.", "El último tema, ___ tocaron dos veces.", "lo", "Complemento antepuesto + pronombre que lo retoma."),
        ]
      ),
    ],
    [
      fb("Enfatiza.", "Me sorprendió lo ___ que eran las entradas. (barato)", "baratas", "Lo + adjetivo concordado con el sustantivo (entradas)."),
      fb("Enfatiza con anteposición.", "A la cantante, ___ conocí en el camerino.", "la", "Anteposición + pronombre."),
      fb("Enfatiza con inversión.", "Apenas ___ empezado cuando se fue la luz. (haber, ellos)", "habían", "Apenas + pluscuamperfecto."),
      mt(
        "Relaciona cada frase neutra con su versión enfática.",
        [
          ["Toca muy bien.", "¡Lo bien que toca!"],
          ["Nunca había visto nada igual.", "Jamás había visto nada igual."],
          ["Compré las entradas ayer.", "Las entradas las compré ayer."],
          ["El batería me impresionó.", "Fue el batería quien me impresionó."],
        ],
        "Exclamación, inversión, anteposición y frase hendida."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["¡Qué voz tan bonita!", "Lo difícil que es conseguir entradas.", "El concierto lo vi desde la primera fila.", "Lo bonitos que son las canciones."],
        [0, 1, 2],
        "Concordancia: lo bonitas que son las canciones."
      ),
      toEs("You can't imagine how much I enjoyed it!", "¡No te imaginas lo mucho que lo disfruté!", "Lo mucho que + verbo.", ["¡No te imaginas cuánto lo disfruté!", "¡No te puedes imaginar lo mucho que lo disfruté!"]),
      wo("Nunca en mi vida había llorado tanto en un concierto.", "Nunca en mi vida + pluscuamperfecto (énfasis).", "Never in my life had I cried so much at a concert."),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2r-contrast-neutral-emphatic",
    "Contraste: neutro o enfático",
    "La misma información con y sin énfasis: aprende qué matiz añade cada estructura.",
    "7 min",
    [
      sec(
        "¿Qué destaca cada versión?",
        "El orden neutro informa. La anteposición marca el tema, la frase hendida contrasta (fue X, no Y), y lo + adjetivo + que expresa grado o sorpresa.",
        [
          ["Juan rompió el jarrón.", "Juan broke the vase. (neutral)"],
          ["El jarrón lo rompió Juan.", "The vase, Juan broke it. (topic: the vase)"],
          ["Fue Juan quien rompió el jarrón.", "It was Juan who broke the vase. (not someone else)"],
        ],
        [
          mc(
            "Alguien acusa a Pedro. Tú sabes que fue Ana. ¿Qué dices?",
            ["No, fue Ana quien lo hizo.", "Ana lo hizo, sí.", "Lo hizo.", "Lo que hizo Ana."],
            0,
            "Contraste → frase hendida."
          ),
        ]
      ),
    ],
    [
      fb("Hazlo enfático (tema antepuesto).", "Compré el pan esta mañana. → El pan ___ compré esta mañana.", "lo", "Anteposición del objeto + pronombre."),
      fb("Hazlo enfático (contraste).", "Llamé a tu madre, no a tu padre. → Fue a tu madre a ___ llamé.", "quien", "Frase hendida con preposición: a quien."),
      fb("Hazlo enfático (grado).", "Hemos subido montañas enormes. → ¡No sabes lo ___ que son las montañas! (alto)", "altas", "Lo + adjetivo concordado + que."),
      mt(
        "Relaciona cada versión con su función.",
        [
          ["Ana escribió el informe.", "informar"],
          ["El informe lo escribió Ana.", "marcar el tema"],
          ["Fue Ana quien escribió el informe.", "contrastar"],
          ["¡Lo bien que escribe Ana!", "expresar admiración"],
        ],
        "Cada estructura tiene su función comunicativa."
      ),
      ms(
        "¿Qué versiones enfáticas son correctas?",
        ["A mi abuela la visito cada domingo.", "Es aquí donde vivo.", "Fue ayer que llegó.", "Los deberes, no los he hecho."],
        [0, 1, 2, 3],
        "Las cuatro son correctas; «fue ayer que» es frecuente en América (en España se prefiere «fue ayer cuando»)."
      ),
      toEs("It's the price that worries me, not the quality.", "Es el precio lo que me preocupa, no la calidad.", "Frase hendida con lo que.", ["Lo que me preocupa es el precio, no la calidad.", "Es el precio lo que me preocupa y no la calidad."]),
      wo("A ese restaurante no vuelvo nunca más.", "Anteposición del complemento para marcar el tema.", "I'm never going back to that restaurant."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-transform-join-cuyo",
    "Transformaciones: une las frases con cuyo",
    "Convierte «su» en «cuyo»: un escritor cuyos libros…, una ciudad cuyas calles…",
    "7 min",
    [
      sec(
        "De «su» a «cuyo»",
        "Cuyo sustituye a un posesivo (su/sus) y concuerda con lo poseído, no con el poseedor: la mujer cuyo hijo…, el hombre cuyas hijas…",
        [
          ["Conocí a una escritora. Sus libros son famosos. → Conocí a una escritora cuyos libros son famosos.", "I met a writer whose books are famous."],
          ["Vivo en un edificio. Su fachada es azul. → Vivo en un edificio cuya fachada es azul.", "I live in a building whose facade is blue."],
        ],
        [
          fb("Une con cuyo.", "Es el vecino. Su perro ladra toda la noche. → Es el vecino ___ perro ladra toda la noche.", "cuyo", "Perro (masculino singular) → cuyo."),
        ]
      ),
    ],
    [
      fb("Une con cuyo.", "Es una empresa. Sus empleados trabajan desde casa. → Es una empresa ___ empleados trabajan desde casa.", "cuyos", "Empleados (masc. pl.) → cuyos."),
      fb("Une con cuyo.", "Visitamos un pueblo. Sus calles son estrechas. → Visitamos un pueblo ___ calles son estrechas.", "cuyas", "Calles → cuyas."),
      fb("Une con cuyo.", "Es el autor. Leí su novela. → Es el autor ___ novela leí.", "cuya", "Novela → cuya."),
      fb("Une con preposición + cuyo.", "Es la amiga. Me quedé en su casa. → Es la amiga en ___ casa me quedé.", "cuya", "En cuya casa."),
      mc(
        "«The student whose parents are doctors…»",
        ["El alumno cuyos padres son médicos…", "El alumno cuyo padres son médicos…", "El alumno quien padres son médicos…", "El alumno que sus padres son médicos…"],
        0,
        "Cuyos concuerda con padres. (La última forma se oye, pero es incorrecta en la norma.)"
      ),
      toEs("It's a country whose history I don't know well.", "Es un país cuya historia no conozco bien.", "Cuya concuerda con historia.", ["Es un país cuya historia no conozco muy bien."]),
      wo("La película, cuyo final nadie esperaba, ganó tres premios.", "Cuyo en una relativa explicativa.", "The film, whose ending nobody expected, won three awards."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-error-hunt-cuyo-el-cual",
    "Caza de errores: cuyo, el cual y lo cual",
    "«Cuyo que», «que su», «la cual» sin preposición — los errores de los relativos avanzados.",
    "7 min",
    [
      sec(
        "Errores con cuyo",
        "(1) Concordar con el poseedor: ✗ la mujer cuya hijo → ✓ cuyo hijo. (2) Que su en lugar de cuyo: ✗ el chico que su padre → ✓ el chico cuyo padre.",
        [
          ["✗ Es la profesora que su clase me encanta. → ✓ Es la profesora cuya clase me encanta.", "She's the teacher whose class I love."],
        ],
        [
          fb("Corrige.", "Es el museo ___ colección es la más grande del país. (el alumno escribió: que su)", "cuya", "Cuya concuerda con colección."),
        ]
      ),
      sec(
        "El cual y lo cual",
        "El cual/la cual se usan sobre todo tras preposiciones largas o en explicativas formales. Lo cual se refiere a toda una idea anterior.",
        [
          ["Llegó tarde, lo cual me molestó.", "He arrived late, which bothered me."],
          ["La razón por la cual no vine…", "The reason why I didn't come…"],
        ],
        [
          mc(
            "«Suspendió el examen, ___ sorprendió a todos.»",
            ["lo cual", "la cual", "el cual", "cuyo"],
            0,
            "Se refiere a toda la idea → lo cual."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "El señor ___ hijas viven en Canadá es mi tío. (el alumno escribió: cuyo)", "cuyas", "Concuerda con hijas."),
      fb("Corrige.", "Perdí el tren, ___ significa que llegaré tarde. (el alumno escribió: el cual)", "lo cual", "Idea completa → lo cual."),
      fb("Corrige.", "Es el puente debajo del ___ dormían los mendigos. (el alumno escribió: que)", "cual", "Tras preposición compuesta, mejor el cual."),
      ms(
        "¿Qué frases son correctas?",
        ["La casa en la cual crecí ya no existe.", "El autor cuya obra estudiamos es chileno.", "Me mintió, lo cual no le perdono.", "El chico cuyo la madre es médica."],
        [0, 1, 2],
        "Cuyo nunca va seguido de artículo: cuya madre."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Los motivos por los cuales dimitió no están claros.", "Los motivos por los cuyos dimitió no están claros.", "Los motivos por lo cual dimitió no están claros.", "Los motivos por cuales dimitió no están claros."],
        0,
        "Por los cuales concuerda con motivos."
      ),
      toEs("She won the prize, which surprised nobody.", "Ganó el premio, lo cual no sorprendió a nadie.", "Lo cual para la idea completa.", ["Ganó el premio, lo que no sorprendió a nadie."]),
      wo("Hay decisiones cuyas consecuencias duran toda la vida.", "Cuyas concuerda con consecuencias.", "There are decisions whose consequences last a lifetime."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-mission-formal-text",
    "Misión real: un texto formal",
    "Redacta la ficha de un museo y una nota de prensa con relativos avanzados y conectores.",
    "8 min",
    [
      sec(
        "La ficha del museo",
        "Los textos formales usan cuyo, el cual y lo cual para condensar información.",
        [
          ["El museo, cuya colección supera las diez mil piezas, fue fundado en 1890.", "The museum, whose collection exceeds ten thousand pieces, was founded in 1890."],
          ["La sala principal, en la cual se exponen obras de Goya, reabrirá en mayo.", "The main hall, in which works by Goya are displayed, will reopen in May."],
        ],
        [
          fb("Completa la ficha.", "El arquitecto, ___ proyectos se encuentran en tres continentes, diseñó la nueva ala.", "cuyos", "Cuyos concuerda con proyectos."),
        ]
      ),
    ],
    [
      fb("Completa la nota de prensa.", "La exposición se prorrogará hasta junio, ___ permitirá recibir a más visitantes.", "lo cual", "Idea completa → lo cual."),
      fb("Completa la nota de prensa.", "Los cuadros, algunos de ___ nunca se habían expuesto, llegarán de Madrid.", "los cuales", "Algunos de + los cuales."),
      fb("Completa la nota de prensa.", "La directora, ___ gestión ha sido muy elogiada, se jubila este año.", "cuya", "Cuya gestión."),
      mt(
        "Relaciona cada relativo con su uso.",
        [
          ["cuyo/a/os/as", "posesión"],
          ["lo cual", "idea completa"],
          ["el/la cual", "tras preposición (formal)"],
          ["quien", "persona"],
        ],
        "Resumen de relativos avanzados."
      ),
      mc(
        "¿Qué versión es más formal?",
        ["La razón por la cual se cerró el museo fue la falta de fondos.", "Cerraron el museo porque no había pasta.", "El museo cerró por lo del dinero.", "Lo cerraron y ya."],
        0,
        "Por la cual + vocabulario formal."
      ),
      toEs("The city, whose streets are very narrow, has banned cars.", "La ciudad, cuyas calles son muy estrechas, ha prohibido los coches.", "Cuyas + pretérito perfecto.", ["La ciudad, cuyas calles son muy estrechas, prohibió los coches."]),
      wo("Se presentó un informe según el cual la situación ha mejorado.", "Según el cual = according to which.", "A report was presented according to which the situation has improved."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-spiral-subjunctive-universe",
    "Repaso en espiral: el universo del subjuntivo",
    "Lecciones 1–11 del B2: relativas, adverbiales, imperfecto de subjuntivo y condicionales de tipo 2 y 3.",
    "9 min",
    [
      sec(
        "Una carta de un mentor",
        "Lee el fragmento y fíjate en cuántos usos distintos del subjuntivo aparecen.",
        [
          ["Busca un trabajo que te apasione, aunque te paguen menos.", "Look for a job that you're passionate about, even if they pay you less."],
          ["Cuando tengas mi edad, entenderás lo que te digo.", "When you're my age, you'll understand what I'm telling you."],
          ["Si yo tuviera veinte años, viajaría más; si hubiera sido más valiente, habría cambiado de carrera.", "If I were twenty, I'd travel more; if I'd been braver, I'd have changed careers."],
        ],
        [
          ms(
            "¿Qué estructuras aparecen en la carta?",
            ["relativa con subjuntivo", "aunque + subjuntivo", "cuando + subjuntivo", "estilo indirecto"],
            [0, 1, 2],
            "No hay estilo indirecto en el fragmento."
          ),
          fb("Responde al mentor.", "Si no me lo ___ dicho, no lo habría intentado. (haber, usted)", "hubiera", "Si + pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "No hay nadie que ___ tanto como tú. (saber)", "sepa", "Antecedente inexistente."),
      fb("Completa.", "Te lo explico para que no ___ el mismo error. (cometer, tú)", "cometas", "Para que + subjuntivo."),
      fb("Completa.", "Me pidió que no le ___ a nadie. (decir, yo)", "dijera", "Pasado → imperfecto de subjuntivo."),
      fb("Completa.", "Si ___ más dinero, me compraría un piso. (ganar, yo)", "ganara", "Tipo 2."),
      mc(
        "«I wish I had listened to you.»",
        ["Ojalá te hubiera hecho caso.", "Ojalá te hacía caso.", "Ojalá te haga caso ayer.", "Ojalá te habría hecho caso."],
        0,
        "Ojalá + pluscuamperfecto de subjuntivo."
      ),
      toEs("Even if it rains, we'll go.", "Aunque llueva, iremos.", "Aunque + subjuntivo (hipotético).", ["Aunque llueva, vamos a ir.", "Iremos aunque llueva."]),
      wo("Me habló como si nos conociéramos de toda la vida.", "Como si + imperfecto de subjuntivo.", "He talked to me as if we'd known each other all our lives."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-spiral-precision-tools",
    "Repaso en espiral: las herramientas de precisión",
    "Lecciones 12–24 del B2: estilo indirecto, ser/estar/haber, verbos de cambio, conectores, énfasis y relativos.",
    "9 min",
    [
      sec(
        "Una noticia",
        "Lee la noticia y localiza cada herramienta del B2.",
        [
          ["El alcalde declaró que el nuevo parque estaría listo en junio.", "The mayor stated that the new park would be ready in June."],
          ["Sin embargo, los vecinos, cuyas quejas se han multiplicado, se han puesto nerviosos.", "However, the residents, whose complaints have multiplied, have become nervous."],
          ["Lo que más les preocupa es que no hay suficientes árboles.", "What worries them most is that there aren't enough trees."],
        ],
        [
          mt(
            "Relaciona cada fragmento con la herramienta del B2.",
            [
              ["declaró que estaría listo", "estilo indirecto"],
              ["cuyas quejas", "relativo posesivo"],
              ["se han puesto nerviosos", "verbo de cambio"],
              ["Lo que más les preocupa", "énfasis"],
            ],
            "Cuatro herramientas en tres frases."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El alcalde prometió que ___ más árboles. (plantar, ellos)", "plantarían", "Futuro → condicional en estilo indirecto."),
      fb("Completa.", "La inauguración ___ en la plaza mayor. (ser, futuro)", "será", "Evento → ser."),
      fb("Completa.", "Con los años, el barrio ___ en uno de los más caros. (convertirse, perfecto)", "se ha convertido", "Convertirse en."),
      fb("Completa.", "El proyecto es caro; ___, es necesario. (nevertheless)", "no obstante", "Contraste formal."),
      ms(
        "¿Qué frases son correctas?",
        ["Fue el alcalde quien lo anunció.", "Había muchos vecinos en la reunión.", "Me dijo que venía al día siguiente.", "El parque, cuyos diseño es moderno, ya está listo."],
        [0, 1, 2],
        "Cuyo concuerda con lo poseído: cuyo diseño."
      ),
      toEs("She told me that she had become a vegetarian.", "Me dijo que se había hecho vegetariana.", "Estilo indirecto + hacerse.", ["Me contó que se había hecho vegetariana.", "Me dijo que se había vuelto vegetariana."]),
      wo("Lo difícil que es encontrar piso en esta ciudad es increíble.", "Lo + adjetivo + que como sujeto.", "How hard it is to find an apartment in this city is incredible."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2r-dialogue-ideal-partner",
    "Laboratorio de diálogo: en busca de la pareja ideal",
    "Una agencia de citas pregunta qué buscas — y tú describes a alguien que quizá no existe.",
    "7 min",
    [
      sec(
        "La entrevista",
        "Describir a la pareja ideal (desconocida) exige subjuntivo; describir a tu ex (conocido), indicativo.",
        [
          ["—Busco a alguien que tenga sentido del humor y que le guste viajar.", "I'm looking for someone who has a sense of humor and likes to travel."],
          ["—Mi ex era alguien que nunca quería salir de casa.", "My ex was someone who never wanted to leave the house."],
        ],
        [
          fb("Completa.", "Quiero a alguien que me ___ tal como soy. (aceptar)", "acepte", "Persona desconocida → subjuntivo."),
          fb("Completa.", "Mi última pareja era una persona que ___ demasiado. (trabajar, imperfecto)", "trabajaba", "Persona conocida → indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "No me interesa nadie que ___ fumador. (ser)", "sea", "Antecedente indeterminado negado → subjuntivo."),
      fb("Completa.", "¿Conoce usted a alguien que ___ con mi perfil? (encajar)", "encaje", "Pregunta sobre la existencia → subjuntivo."),
      fb("Completa.", "Tenemos un cliente que ___ exactamente lo mismo que usted. (buscar)", "busca", "Cliente real → indicativo."),
      mt(
        "Relaciona cada deseo con su versión real.",
        [
          ["Busco a alguien que cocine.", "Salgo con alguien que cocina."],
          ["Quiero una casa que tenga jardín.", "Vivo en una casa que tiene jardín."],
          ["Necesito un trabajo que me guste.", "Tengo un trabajo que me gusta."],
          ["Prefiero un perro que sea tranquilo.", "Tengo un perro que es tranquilo."],
        ],
        "Deseo (desconocido) → subjuntivo; realidad (conocido) → indicativo."
      ),
      toEs("I've never met anyone who understands me like you.", "Nunca he conocido a nadie que me entienda como tú.", "Antecedente negado → subjuntivo.", ["Nunca conocí a nadie que me entendiera como tú.", "No he conocido a nadie que me entienda como tú."]),
      wo("Lo que busco es alguien con quien pueda hablar de todo.", "Relativa con preposición + subjuntivo.", "What I'm looking for is someone I can talk to about everything."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2r-mission-hotel-review",
    "Misión real: la reseña de un hotel",
    "Un hotel desastroso: no había nada que funcionara, no encontramos a nadie que nos ayudara…",
    "7 min",
    [
      sec(
        "La queja",
        "En el pasado, las relativas con antecedente inexistente usan el imperfecto de subjuntivo.",
        [
          ["No había ni un solo enchufe que funcionara.", "There wasn't a single socket that worked."],
          ["No encontramos a nadie que hablara inglés.", "We didn't find anyone who spoke English."],
        ],
        [
          fb("Completa la reseña.", "No había nadie en recepción que ___ resolver el problema. (saber)", "supiera", "Antecedente inexistente en pasado → imperfecto de subjuntivo."),
        ]
      ),
      sec(
        "Lo positivo",
        "Lo que sí existía se describe en indicativo.",
        [
          ["El único que nos ayudó fue un camarero que hablaba cuatro idiomas.", "The only one who helped us was a waiter who spoke four languages."],
        ],
        [
          fb("Completa.", "La habitación tenía unas vistas que ___ increíbles. (ser, imperfecto)", "eran", "Algo que existía → indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Pedimos una habitación que no ___ ruido. (tener)", "tuviera", "Algo buscado (desconocido) en pasado → imperfecto de subjuntivo."),
      fb("Completa.", "Nos dieron una habitación que ___ encima de la discoteca. (estar)", "estaba", "Habitación concreta → indicativo."),
      fb("Completa.", "Recomiendo este hotel a cualquiera que ___ dormir poco. (querer)", "quiera", "Cualquiera que + subjuntivo."),
      ms(
        "¿Qué frases son correctas?",
        ["No había nada que me gustara.", "Buscábamos un restaurante que estuviera abierto.", "Encontramos un bar que tuviera terraza.", "El recepcionista, que era muy amable, nos ayudó."],
        [0, 1, 3],
        "Encontramos (existe) → que tenía terraza."
      ),
      mc(
        "«There was nothing on the menu that we could eat.»",
        ["No había nada en la carta que pudiéramos comer.", "No había nada en la carta que podíamos comer.", "No había nada en la carta que podamos comer ayer.", "No hay nada en la carta que pudimos comer."],
        0,
        "Antecedente inexistente en pasado → imperfecto de subjuntivo."
      ),
      toEs("We didn't see anything that was worth the price.", "No vimos nada que valiera lo que costaba.", "Antecedente inexistente en pasado.", ["No vimos nada que mereciera la pena por ese precio.", "No vimos nada que valiera el precio."]),
      wo("Busqué por todas partes una farmacia que estuviera de guardia.", "Buscar + relativa en imperfecto de subjuntivo.", "I looked everywhere for a pharmacy that was open all night."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2r-transform-affirm-negate-antecedent",
    "Transformaciones: hay alguien que sabe → no hay nadie que sepa",
    "Niega el antecedente y observa cómo el indicativo se convierte en subjuntivo.",
    "7 min",
    [
      sec(
        "Afirmar y negar la existencia",
        "Hay alguien que + indicativo → No hay nadie que + subjuntivo. Conozco un sitio donde + indicativo → No conozco ningún sitio donde + subjuntivo.",
        [
          ["Hay alguien que sabe la respuesta. → No hay nadie que sepa la respuesta.", "Somebody knows. → Nobody knows."],
          ["Tengo un amigo que vive allí. → No tengo ningún amigo que viva allí.", "I have a friend who lives there. → I don't have any friend who lives there."],
        ],
        [
          fb("Niega el antecedente.", "Hay algo que me preocupa. → No hay nada que me ___.", "preocupe", "Antecedente negado → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Niega el antecedente.", "Conozco un restaurante que abre los lunes. → No conozco ningún restaurante que ___ los lunes.", "abra", "Subjuntivo."),
      fb("Afirma el antecedente.", "No hay ninguna tienda que venda eso. → Hay una tienda que ___ eso.", "vende", "Existe → indicativo."),
      fb("Niega el antecedente (pasado).", "Había alguien que podía ayudarnos. → No había nadie que ___ ayudarnos.", "pudiera", "Pasado → imperfecto de subjuntivo."),
      fb("Niega el antecedente.", "Tengo un libro que explica esto. → No tengo ningún libro que lo ___.", "explique", "Subjuntivo."),
      mc(
        "«Alguien entiende este manual.» → negado:",
        ["Nadie entiende este manual.", "No hay nadie que entienda este manual.", "Las dos son correctas.", "Ninguna es correcta."],
        2,
        "Ambas niegan: una con nadie como sujeto (indicativo), otra con relativa (subjuntivo)."
      ),
      toEs("There's no one in my family who speaks French.", "No hay nadie en mi familia que hable francés.", "Antecedente negado → subjuntivo.", ["En mi familia no hay nadie que hable francés."]),
      wo("No existe ninguna fórmula que garantice el éxito.", "No existe + relativa en subjuntivo.", "There's no formula that guarantees success."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2r-contrast-aunque",
    "Contraste: aunque llueve / aunque llueva",
    "Aunque con indicativo (hecho conocido) y con subjuntivo (hipótesis o hecho que no importa).",
    "7 min",
    [
      sec(
        "Dos aunques",
        "Aunque + indicativo = although (es un hecho y lo reconozco). Aunque + subjuntivo = even if (no sé si es cierto) o even though (es cierto, pero no me importa).",
        [
          ["Aunque llueve, voy a salir.", "Although it's raining, I'm going out. (it IS raining)"],
          ["Aunque llueva, voy a salir.", "Even if it rains, I'm going out. (it might)"],
        ],
        [
          mc(
            "Está nevando ahora mismo. ¿Qué dices?",
            ["Aunque nieva, iremos a la montaña.", "Aunque nieve mañana, iremos.", "Aunque nevaría, iremos.", "Aunque nevar, iremos."],
            0,
            "Un hecho conocido → aunque + indicativo."
          ),
        ]
      ),
    ],
    [
      fb("¿Hecho o hipótesis?", "Aunque ___ mucho dinero, no es feliz. (tener, él; es un hecho)", "tiene", "Hecho → indicativo."),
      fb("¿Hecho o hipótesis?", "Aunque me ___ un millón, no lo haría. (ofrecer, ellos; hipótesis)", "ofrecieran", "Hipótesis improbable → imperfecto de subjuntivo."),
      fb("¿Hecho o hipótesis?", "Aunque ___ cansado, terminaré el informe. (estar, yo; quizá lo esté)", "esté", "Hipótesis futura → subjuntivo presente."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Aunque es caro, lo compro.", "Although it's expensive, I'm buying it."],
          ["Aunque sea caro, lo compraré.", "Even if it's expensive, I'll buy it."],
          ["Aunque fuera caro, lo compraría.", "Even if it were expensive, I'd buy it."],
          ["Aunque hubiera sido caro, lo habría comprado.", "Even if it had been expensive, I'd have bought it."],
        ],
        "Cuatro grados de realidad con aunque."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Aunque no me creas, es verdad.", "Aunque estaba enfermo, fue a trabajar.", "Aunque tendría tiempo, no iría.", "Aunque me lo pidas de rodillas, no pienso ir."],
        [0, 1, 3],
        "Nunca condicional tras aunque en ese sentido: aunque tuviera tiempo."
      ),
      toEs("Even if you (tú) don't like it, you have to eat it.", "Aunque no te guste, tienes que comértelo.", "Aunque + subjuntivo (no importa si te gusta).", ["Aunque no te guste, te lo tienes que comer.", "Aunque no te guste, tienes que comerlo."]),
      wo("Aunque parezca mentira, nunca he visto el mar.", "Aunque parezca mentira = believe it or not.", "Believe it or not, I've never seen the sea."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2r-dialogue-negotiation",
    "Laboratorio de diálogo: la negociación familiar",
    "Una hija negocia con sus padres para ir a un festival: con tal de que, siempre que, a menos que, a condición de que.",
    "7 min",
    [
      sec(
        "Las condiciones",
        "Las conjunciones condicionales siempre llevan subjuntivo: con tal de que, siempre que (= si), a menos que, a no ser que, a condición de que.",
        [
          ["—Puedes ir con tal de que nos llames cada noche.", "You can go as long as you call us every night."],
          ["—No irás a menos que apruebes todo.", "You won't go unless you pass everything."],
        ],
        [
          fb("Completa la condición.", "Te dejamos ir siempre que ___ con tus primos. (ir, tú)", "vayas", "Siempre que (condición) + subjuntivo."),
          fb("Completa la condición.", "No te daremos dinero a no ser que ___ en casa. (ayudar, tú)", "ayudes", "A no ser que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("La hija responde.", "Os llamaré todas las noches, a menos que no ___ cobertura. (haber)", "haya", "A menos que + subjuntivo."),
      fb("La hija responde.", "Lo haré con tal de que me ___ quedarme hasta el domingo. (dejar, vosotros)", "dejéis", "Con tal de que + subjuntivo."),
      fb("Los padres ceden.", "Vale, pero a condición de que ___ antes del lunes. (volver, tú)", "vuelvas", "A condición de que + subjuntivo."),
      mc(
        "«Siempre que viene, trae flores.» ¿Qué significa aquí «siempre que»?",
        ["Whenever (hábito, con indicativo)", "As long as (condición)", "Unless", "Although"],
        0,
        "Con indicativo, siempre que = cada vez que."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Iré a la fiesta siempre que tú vengas.", "Te ayudo con tal de que me invitas.", "No saldré a no ser que me llames.", "Siempre que llueve, se inunda la calle."],
        [0, 2, 3],
        "Con tal de que + subjuntivo: me invites."
      ),
      toEs("I'll lend you the car as long as you bring it back tomorrow.", "Te presto el coche con tal de que me lo devuelvas mañana.", "Con tal de que + subjuntivo + me lo.", ["Te dejo el coche con tal de que me lo devuelvas mañana.", "Te presto el coche siempre que me lo devuelvas mañana."]),
      wo("No pienso ceder a menos que me ofrezcan algo mejor.", "A menos que + subjuntivo.", "I won't give in unless they offer me something better."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2r-chain-time-conjunctions",
    "Cadena: planes con conjunciones temporales",
    "Planifica una mudanza paso a paso: en cuanto…, antes de que…, hasta que…, después de que…",
    "7 min",
    [
      sec(
        "La mudanza",
        "Cada paso depende del anterior. Todas las acciones futuras tras la conjunción van en subjuntivo.",
        [
          ["En cuanto firmemos el contrato, empezaremos a empaquetar.", "As soon as we sign the contract, we'll start packing."],
          ["Antes de que llegue el camión, desmontaremos los muebles.", "Before the truck arrives, we'll take apart the furniture."],
          ["No nos iremos hasta que el piso esté limpio.", "We won't leave until the apartment is clean."],
        ],
        [
          fb("Completa el plan.", "Después de que ___ los muebles, pintaremos. (llegar)", "lleguen", "Después de que + futuro → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa el plan.", "Tan pronto como ___ las llaves, os aviso. (tener, yo)", "tenga", "Tan pronto como + subjuntivo."),
      fb("Completa el plan.", "Dejaremos las cajas en el pasillo hasta que ___ sitio. (haber)", "haya", "Hasta que + subjuntivo."),
      fb("Completa el recuerdo (pasado).", "En cuanto ___ las llaves, fuimos a ver el piso. (recibir, nosotros)", "recibimos", "Pasado real → indicativo."),
      mc(
        "Ordena el plan: (A) cuando esté vacío el piso viejo (B) devolveremos las llaves al casero (C) en cuanto terminemos de limpiar",
        ["C → A → B", "B → A → C", "A → B → C", "C → B → A"],
        0,
        "Limpiar → piso vacío → devolver las llaves."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Cuando terminemos, pediremos pizza.", "Antes de que te vayas, dame tu nueva dirección.", "Hasta que no firmes, no hay trato.", "En cuanto llegaremos, te llamaré."],
        [0, 1, 2],
        "En cuanto + futuro → subjuntivo: en cuanto lleguemos."
      ),
      toEs("We'll wait until everyone arrives.", "Esperaremos hasta que lleguen todos.", "Hasta que + subjuntivo.", ["Esperaremos hasta que llegue todo el mundo.", "Vamos a esperar hasta que lleguen todos."]),
      wo("Te lo devolveré en cuanto me paguen el sueldo.", "En cuanto + subjuntivo.", "I'll give it back to you as soon as I get paid."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2r-story-letter-from-past",
    "Detective de historias: la carta del pasado",
    "Una abuela escribe a su nieta sobre su juventud: lo que le permitían, le prohibían y le pedían.",
    "8 min",
    [
      sec(
        "La carta",
        "Los verbos de influencia en pasado (permitir, prohibir, pedir, obligar) exigen imperfecto de subjuntivo.",
        [
          ["Mi padre no permitía que las chicas estudiaran en la universidad.", "My father didn't allow girls to study at university."],
          ["Mi madre me pedía que no discutiera con él.", "My mother asked me not to argue with him."],
          ["Aun así, conseguí que me dejara ir a Madrid.", "Even so, I got him to let me go to Madrid."],
        ],
        [
          fb("Completa la carta.", "Nos obligaban a que ___ vestido los domingos. (llevar, nosotras)", "lleváramos", "Obligar a que + imperfecto de subjuntivo."),
        ]
      ),
      sec(
        "Lo que desea para su nieta",
        "El presente de la abuela usa subjuntivo presente: espero que, quiero que.",
        [
          ["Espero que tú tengas la libertad que yo no tuve.", "I hope you have the freedom I didn't have."],
        ],
        [
          fb("Completa.", "Quiero que ___ lo que te haga feliz. (estudiar, tú)", "estudies", "Presente → subjuntivo presente."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Me prohibieron que ___ con tu abuelo. (salir, yo)", "saliera", "Prohibir que (pasado) + imperfecto de subjuntivo."),
      fb("Completa la carta.", "Era impensable que una mujer ___ sola. (viajar)", "viajara", "Era impensable que + imperfecto."),
      fb("Completa la carta.", "Ojalá ___ conocido a mi madre; te habría encantado. (haber, tú)", "hubieras", "Ojalá + pluscuamperfecto de subjuntivo."),
      mt(
        "Relaciona cada principio con su final.",
        [
          ["Mi padre no quería que", "me cortara el pelo."],
          ["Hoy quiero que", "hagas lo que quieras."],
          ["Me pidieron que", "no dijera nada."],
          ["Siempre te pediré que", "seas tú misma."],
        ],
        "Principal en pasado → imperfecto; en presente/futuro → presente."
      ),
      mc(
        "¿Qué frase respeta la secuencia de tiempos?",
        ["Mi abuela no permitía que yo jugara en la calle.", "Mi abuela no permitía que yo juegue en la calle.", "Mi abuela no permite que yo jugara en la calle ayer.", "Mi abuela no permitió que jugaba en la calle."],
        0,
        "Permitía → jugara."
      ),
      toEs("They didn't let me choose my own profession.", "No dejaron que eligiera mi propia profesión.", "Dejar que + imperfecto de subjuntivo.", ["No me dejaron elegir mi propia profesión.", "No permitieron que eligiera mi propia profesión."]),
      wo("Nunca pensé que llegaría a contarte todo esto.", "Pretérito + condicional.", "I never thought I'd end up telling you all this."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2r-contrast-ra-se-quisiera",
    "Contraste: -ra, -se y el «quisiera» cortés",
    "Las dos formas del imperfecto de subjuntivo y sus usos especiales de cortesía.",
    "7 min",
    [
      sec(
        "Dos formas equivalentes",
        "Cantara = cantase, tuviera = tuviese, fuéramos = fuésemos. Son intercambiables en casi todos los contextos; -se es algo más frecuente en España y en la escritura.",
        [
          ["Si tuviera tiempo… = Si tuviese tiempo…", "If I had time…"],
          ["Me pidió que viniera. = Me pidió que viniese.", "She asked me to come."],
        ],
        [
          fb("Da la forma en -se.", "fuera → ___", "fuese", "Fue- + -se."),
        ]
      ),
      sec(
        "Quisiera y debiera",
        "Solo las formas en -ra de querer, deber y poder se usan como condicional cortés: Quisiera un café (= querría). Debieras descansar (= deberías).",
        [
          ["Quisiera hacer una reserva.", "I'd like to make a reservation."],
          ["Pudiera ser que tengas razón.", "It could be that you're right. (literario)"],
        ],
        [
          mc(
            "¿Qué forma es más cortés en una tienda?",
            ["Quisiera ver ese reloj.", "Quiero ver ese reloj ya.", "Quisiese ver ese reloj.", "Querré ver ese reloj."],
            0,
            "Quisiera (solo en -ra) = forma de cortesía."
          ),
        ]
      ),
    ],
    [
      fb("Da la forma en -se.", "pudiéramos → ___", "pudiésemos", "Tilde en la sílaba anterior: pudiésemos."),
      fb("Da la forma en -ra.", "hiciese → ___", "hiciera", "Equivalentes."),
      fb("Da la forma en -ra.", "dijesen → ___", "dijeran", "Equivalentes."),
      mt(
        "Relaciona las formas equivalentes.",
        [
          ["estuviera", "estuviese"],
          ["supiéramos", "supiésemos"],
          ["trajeran", "trajesen"],
          ["condujera", "condujese"],
        ],
        "-ra y -se son intercambiables."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Quisiera hablar con la directora.", "Si lo supiese, te lo diría.", "Me alegré de que vinieses.", "Quisiese un vaso de agua, por favor."],
        [0, 1, 2],
        "La cortesía solo usa quisiera (-ra), nunca quisiese."
      ),
      toEs("I would like to ask you a question.", "Quisiera hacerle una pregunta.", "Quisiera = condicional cortés (usted).", ["Me gustaría hacerle una pregunta.", "Querría hacerle una pregunta.", "Quisiera hacerte una pregunta."]),
      wo("Si fuese más valiente, le diría lo que siento.", "Forma en -se en la prótasis.", "If I were braver, I'd tell her how I feel."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2r-mission-study-trip-diary",
    "Misión real: el diario del viaje de estudios",
    "Escribe lo que los profesores os pidieron, os prohibieron y os recomendaron durante un viaje escolar.",
    "7 min",
    [
      sec(
        "Las normas del viaje",
        "Contar normas pasadas: nos pidieron que, nos prohibieron que, era obligatorio que, no dejaban que.",
        [
          ["Nos pidieron que estuviéramos en el hotel a las diez.", "They asked us to be at the hotel by ten."],
          ["Era obligatorio que lleváramos el pasaporte siempre.", "We had to carry our passports at all times."],
        ],
        [
          fb("Completa el diario.", "No dejaban que ___ solos por la ciudad. (salir, nosotros)", "saliéramos", "Imperfecto de subjuntivo con tilde."),
        ]
      ),
    ],
    [
      fb("Completa el diario.", "La guía nos recomendó que ___ el museo por la mañana. (visitar, nosotros)", "visitáramos", "Recomendar (pasado) + imperfecto."),
      fb("Completa el diario.", "Me sorprendió que la comida ___ tan picante. (ser)", "fuera", "Sorprender (pasado) + imperfecto."),
      fb("Completa el diario.", "Nos prometieron que el último día ___ tiempo libre. (tener, nosotros)", "tendríamos", "Prometer que + condicional (futuro del pasado, no subjuntivo)."),
      mc(
        "«The teacher told us to be quiet.»",
        ["La profesora nos dijo que nos calláramos.", "La profesora nos dijo que nos callábamos.", "La profesora nos dijo que nos callemos ayer.", "La profesora nos dijo callarnos que."],
        0,
        "Decir (orden) en pasado → imperfecto de subjuntivo."
      ),
      ms(
        "¿Qué frases del diario son correctas?",
        ["Era necesario que todos firmaran.", "No permitían que usáramos el móvil en las visitas.", "Nos pidieron que llegamos puntuales.", "Me encantó que hubiera tanta gente simpática."],
        [0, 1, 3],
        "Pedir que + subjuntivo: que llegáramos puntuales."
      ),
      toEs("They didn't allow us to go out at night.", "No nos permitían que saliéramos de noche.", "Permitir que + imperfecto de subjuntivo.", ["No nos dejaban salir de noche.", "No nos permitían salir por la noche.", "No nos dejaban salir por la noche."]),
      wo("Fue el mejor viaje que habíamos hecho nunca.", "Superlativo + pluscuamperfecto.", "It was the best trip we had ever taken."),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2r-dialogue-what-would-happen",
    "Laboratorio de diálogo: ¿qué pasaría si…?",
    "Dos amigos debaten escenarios de ciencia ficción: si no existiera internet, si pudiéramos vivir en Marte…",
    "7 min",
    [
      sec(
        "Escenarios",
        "El debate hipotético encadena si + imperfecto de subjuntivo con condicionales.",
        [
          ["—¿Qué pasaría si no existiera internet?", "What would happen if the internet didn't exist?"],
          ["—Pues leeríamos más y escribiríamos cartas.", "Well, we'd read more and write letters."],
          ["—Ya, pero sería imposible trabajar como ahora.", "Yeah, but it would be impossible to work as we do now."],
        ],
        [
          fb("Continúa el debate.", "Si ___ vivir en Marte, ¿irías? (poder, tú)", "pudieras", "Si + imperfecto de subjuntivo."),
          fb("Continúa el debate.", "Yo no iría ni aunque me ___ el viaje. (regalar, ellos)", "regalaran", "Ni aunque + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si los animales ___ hablar, ¿qué nos dirían? (saber)", "supieran", "Saber → supieran."),
      fb("Completa.", "Si no hubiera coches, las ciudades ___ más silenciosas. (ser)", "serían", "Condicional."),
      fb("Completa.", "¿Qué harías si ___ invisible un día? (ser, tú)", "fueras", "Ser → fueras."),
      mt(
        "Relaciona cada escenario con una consecuencia lógica.",
        [
          ["Si no durmiéramos nunca,", "tendríamos más horas para trabajar."],
          ["Si los robots hicieran todo,", "nadie tendría que trabajar."],
          ["Si viviéramos doscientos años,", "tendríamos varias carreras."],
          ["Si no hubiera gravedad,", "flotaríamos por la casa."],
        ],
        "Si + imperfecto de subjuntivo + condicional."
      ),
      mc(
        "«If we could travel in time, where would you go?»",
        ["Si pudiéramos viajar en el tiempo, ¿adónde irías?", "Si podríamos viajar en el tiempo, ¿adónde irías?", "Si pudiéramos viajar en el tiempo, ¿adónde irás?", "Si podemos viajar en el tiempo, ¿adónde irías?"],
        0,
        "Tipo 2 completo."
      ),
      toEs("If there were no money, the world would be very different.", "Si no hubiera dinero, el mundo sería muy diferente.", "Haber impersonal en imperfecto de subjuntivo.", ["Si no existiera el dinero, el mundo sería muy diferente.", "Si no hubiese dinero, el mundo sería muy distinto.", "Si no hubiera dinero, el mundo sería muy distinto."]),
      wo("No sé qué haría yo si me quedara sin móvil una semana.", "Condicional + si + imperfecto de subjuntivo.", "I don't know what I'd do if I were left without my phone for a week."),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2r-transform-real-to-unreal",
    "Transformaciones: de lo posible a lo imposible",
    "Convierte condiciones reales en hipotéticas: si tengo → si tuviera; iré → iría.",
    "7 min",
    [
      sec(
        "Cambiar el grado de realidad",
        "Si + presente, futuro → Si + imperfecto de subjuntivo, condicional. El significado pasa de «puede que pase» a «no pasa / es poco probable».",
        [
          ["Si llueve, no saldremos. → Si lloviera, no saldríamos.", "If it rains… → If it were raining…"],
          ["Si me llamas, te ayudo. → Si me llamaras, te ayudaría.", "If you call me… → If you called me…"],
        ],
        [
          fb("Hazla hipotética.", "Si tengo tiempo, iré. → Si ___ tiempo, iría.", "tuviera", "Tener → tuviera."),
        ]
      ),
    ],
    [
      fb("Hazla hipotética.", "Si vienes, te enseñaré la casa. → Si vinieras, te ___ la casa.", "enseñaría", "Condicional."),
      fb("Hazla hipotética.", "Si puedo, te acompaño. → Si ___, te acompañaría.", "pudiera", "Poder → pudiera."),
      fb("Hazla hipotética.", "Si sabemos algo, os avisaremos. → Si ___ algo, os avisaríamos.", "supiéramos", "Saber → supiéramos."),
      fb("Hazla real.", "Si lo viera, lo reconocería. → Si lo ___, lo reconoceré.", "veo", "Real → presente."),
      mc(
        "«Si hace buen tiempo, comeremos fuera.» → hipotética:",
        ["Si hiciera buen tiempo, comeríamos fuera.", "Si haría buen tiempo, comeríamos fuera.", "Si hiciera buen tiempo, comeremos fuera.", "Si hacía buen tiempo, comíamos fuera ayer."],
        0,
        "Si + imperfecto de subjuntivo + condicional."
      ),
      toEs("If I spoke Japanese, I would work in Tokyo.", "Si hablara japonés, trabajaría en Tokio.", "Tipo 2.", ["Si hablase japonés, trabajaría en Tokio."]),
      wo("Si no fuera por ti, nunca habría terminado la carrera.", "Si no fuera por = if it weren't for (mixta).", "If it weren't for you, I'd never have finished my degree."),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2r-mission-if-i-were-you",
    "Misión real: consejos con «si yo fuera tú»",
    "Responde a mensajes de amigos con problemas usando si yo fuera tú, yo en tu lugar y yo que tú.",
    "7 min",
    [
      sec(
        "Tres fórmulas",
        "Si yo fuera tú, … / Yo en tu lugar, … / Yo que tú, … + condicional. Las tres significan «If I were you».",
        [
          ["Si yo fuera tú, hablaría con tu jefe.", "If I were you, I'd talk to your boss."],
          ["Yo en tu lugar, no le diría nada todavía.", "In your place, I wouldn't tell him anything yet."],
        ],
        [
          fb("Aconseja.", "Yo que tú, ___ un poco antes de decidir. (esperar)", "esperaría", "Condicional."),
        ]
      ),
    ],
    [
      fb("Mensaje: «Mi compañero de piso nunca limpia».", "Si yo fuera tú, le ___ un horario de limpieza. (proponer)", "propondría", "Proponer → propondr-."),
      fb("Mensaje: «Me han ofrecido un trabajo en otra ciudad».", "Yo en tu lugar, lo ___ sin dudarlo. (aceptar)", "aceptaría", "Condicional."),
      fb("Mensaje: «Mi ex me ha escrito».", "Yo que tú, no le ___ todavía. (contestar)", "contestaría", "Condicional negativo."),
      mt(
        "Relaciona cada problema con un consejo.",
        [
          ["Duermo fatal.", "Yo que tú, dejaría el café por la tarde."],
          ["Me aburro en el trabajo.", "Yo en tu lugar, buscaría otro puesto."],
          ["No tengo amigos en la ciudad.", "Si yo fuera tú, me apuntaría a un club."],
          ["Gasto demasiado.", "Yo que tú, haría un presupuesto."],
        ],
        "Tres fórmulas equivalentes + condicional."
      ),
      ms(
        "¿Qué consejos están bien formados?",
        ["Si yo fuera tú, iría al médico.", "Si yo sería tú, iría al médico.", "Yo en tu lugar, pediría perdón.", "Yo que tú, lo pensaría dos veces."],
        [0, 2, 3],
        "Si yo fuera (nunca sería tras si)."
      ),
      toEs("If I were you, I wouldn't buy that car.", "Si yo fuera tú, no compraría ese coche.", "Si yo fuera tú + condicional.", ["Yo que tú, no compraría ese coche.", "Yo en tu lugar, no compraría ese coche.", "Si fuera tú, no compraría ese coche."]),
      wo("Yo en tu lugar le diría exactamente lo que piensas.", "Yo en tu lugar + condicional.", "In your place I'd tell him exactly what you think."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2r-story-alternative-lives",
    "Detective de historias: vidas alternativas",
    "¿Qué habría pasado si…? Reescribe momentos clave de biografías con el tipo 3.",
    "8 min",
    [
      sec(
        "Momentos decisivos",
        "Las biografías alternativas combinan si + pluscuamperfecto de subjuntivo con condicional perfecto (pasado) o condicional simple (presente).",
        [
          ["Si Frida Kahlo no hubiera tenido el accidente, quizá no habría empezado a pintar.", "If Frida Kahlo hadn't had the accident, she might not have started painting."],
          ["Si Cervantes no hubiera estado en la cárcel, tal vez no habría escrito el Quijote.", "If Cervantes hadn't been in prison, perhaps he wouldn't have written Don Quixote."],
        ],
        [
          fb("Completa.", "Si Colón no ___ el viaje, la historia habría sido distinta. (hacer)", "hubiera hecho", "Pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si no hubiera perdido aquel tren, nunca ___ a su futura esposa. (conocer)", "habría conocido", "Condicional perfecto."),
      fb("Completa.", "Si sus padres no ___ emigrado, hoy no hablaría español. (haber)", "hubieran", "Pluscuamperfecto de subjuntivo."),
      fb("Completa.", "Si hubiera nacido cien años antes, no ___ votar. (poder, ella; en ese pasado)", "habría podido", "Consecuencia pasada."),
      mc(
        "¿Qué frase es una mixta (pasado → presente)?",
        ["Si hubiera estudiado Medicina, ahora sería cirujana.", "Si estudiara Medicina, sería cirujana.", "Si hubiera estudiado Medicina, habría sido cirujana.", "Si estudia Medicina, será cirujana."],
        0,
        "Condición pasada, consecuencia presente."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Si no hubiera llovido, habríamos ganado.", "Si hubiera sabido la verdad, no estaría aquí.", "Si habría tenido dinero, habría viajado.", "Ojalá hubiera nacido en otra época."],
        [0, 1, 3],
        "Tras si, nunca habría: si hubiera tenido."
      ),
      toEs("If they hadn't invented the printing press, few people would have learned to read.", "Si no hubieran inventado la imprenta, pocas personas habrían aprendido a leer.", "Tipo 3.", ["Si no se hubiera inventado la imprenta, pocas personas habrían aprendido a leer.", "Si no hubiesen inventado la imprenta, pocas personas habrían aprendido a leer."]),
      wo("¿Qué habría sido de nosotros si no nos hubiéramos conocido?", "Condicional perfecto + si + pluscuamperfecto de subjuntivo.", "What would have become of us if we hadn't met?"),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2r-transform-reproaches",
    "Transformaciones: reproches y lamentos",
    "Convierte quejas directas en reproches con deberías haber, habría sido mejor que y ojalá hubieras.",
    "7 min",
    [
      sec(
        "Del «¿por qué no…?» al reproche",
        "Deberías haber + participio (you should have). Habría sido mejor que + pluscuamperfecto de subjuntivo. Ojalá + pluscuamperfecto de subjuntivo.",
        [
          ["¿Por qué no me llamaste? → Deberías haberme llamado.", "You should have called me."],
          ["¿Por qué no estudiaste? → Habría sido mejor que hubieras estudiado.", "It would have been better if you had studied."],
        ],
        [
          fb("Transforma.", "¿Por qué no me lo dijiste? → Deberías ___ dicho.", "habérmelo", "Deberías + haber + pronombres pegados."),
        ]
      ),
    ],
    [
      fb("Transforma.", "¿Por qué no reservaste? → Deberías haber ___ antes.", "reservado", "Deberías haber + participio."),
      fb("Transforma.", "¿Por qué no viniste? → Ojalá ___ venido.", "hubieras", "Ojalá + pluscuamperfecto de subjuntivo."),
      fb("Transforma.", "¿Por qué no preguntaste? → Habría sido mejor que ___ preguntado.", "hubieras", "Habría sido mejor que + pluscuamperfecto de subjuntivo."),
      fb("Transforma (autorreproche).", "No debí gritarle. → No ___ haberle gritado.", "debería", "Autorreproche: no debería haber + participio."),
      mc(
        "«You could have warned me!»",
        ["¡Podrías haberme avisado!", "¡Podrías habiendo avisado!", "¡Podrías avisarme haber!", "¡Pudieras me haber avisado!"],
        0,
        "Podrías haber + participio (también: ¡Me podrías haber avisado!)."
      ),
      ms(
        "¿Qué reproches son correctos?",
        ["Tendrías que haberlo pensado antes.", "Deberías haber llegado antes.", "Habría sido mejor que te hubieras quedado.", "Ojalá habrías venido."],
        [0, 1, 2],
        "Ojalá + pluscuamperfecto de subjuntivo: ojalá hubieras venido."
      ),
      wo("Nunca debería haber aceptado aquel trabajo.", "Autorreproche con debería haber.", "I should never have accepted that job."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2r-dialogue-courtroom",
    "Laboratorio de diálogo: el juicio",
    "Un abogado reconstruye lo que habría pasado si el acusado hubiera actuado de otra manera.",
    "8 min",
    [
      sec(
        "El interrogatorio",
        "Las hipótesis sobre el pasado dominan un juicio: si usted hubiera…, ¿habría…?",
        [
          ["—Si hubiera visto al ladrón, ¿lo habría reconocido?", "If you had seen the thief, would you have recognized him?"],
          ["—Sí, si hubiera estado más cerca, lo habría reconocido.", "Yes, if I had been closer, I would have recognized him."],
          ["—¿Y habría llamado a la policía?", "And would you have called the police?"],
        ],
        [
          fb("Responde como testigo.", "Si ___ algo sospechoso, habría llamado inmediatamente. (notar, yo)", "hubiera notado", "Pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa la pregunta del abogado.", "¿Qué ___ usted si hubiera oído un grito? (hacer)", "habría hecho", "Condicional perfecto; hacer → hecho."),
      fb("Completa la declaración.", "Si la puerta no hubiera estado abierta, nadie ___ entrar. (poder)", "habría podido", "Condicional perfecto."),
      fb("Completa el alegato final.", "Si mi cliente fuera culpable, no ___ venido a declarar voluntariamente. (haber)", "habría", "Mixta: presente irreal → consecuencia pasada."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Habría ido a la fiesta si lo hubieran invitado?", "Sí, habría ido encantado."],
          ["¿Qué habría hecho con el dinero?", "Lo habría devuelto."],
          ["¿Lo habría denunciado?", "No, no me habría atrevido."],
          ["¿Habría cambiado algo?", "No habría cambiado nada."],
        ],
        "Pregunta y respuesta en condicional perfecto."
      ),
      mc(
        "«If I had known it was him, I wouldn't have opened the door.»",
        ["Si hubiera sabido que era él, no habría abierto la puerta.", "Si habría sabido que era él, no hubiera abierto la puerta.", "Si supiera que era él, no habría abierto la puerta.", "Si hubiera sabido que era él, no abría la puerta."],
        0,
        "Tipo 3 completo."
      ),
      toEs("Nobody would have noticed if the alarm hadn't sounded.", "Nadie se habría dado cuenta si no hubiera sonado la alarma.", "Condicional perfecto + si + pluscuamperfecto de subjuntivo.", ["Nadie se habría dado cuenta si la alarma no hubiera sonado.", "Nadie se hubiera dado cuenta si no hubiera sonado la alarma."]),
      wo("De haberlo sabido, habría actuado de otra manera.", "De + infinitivo compuesto = si lo hubiera sabido.", "Had I known, I would have acted differently."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2r-mission-meeting-minutes",
    "Misión real: el acta de la reunión",
    "Redacta el acta de una reunión: quién dijo qué, quién propuso qué y qué se acordó.",
    "8 min",
    [
      sec(
        "Verbos de habla",
        "Un acta evita repetir «dijo»: afirmó, explicó, propuso, sugirió, advirtió, preguntó, reconoció. Cada verbo tiene su construcción.",
        [
          ["La directora afirmó que las ventas habían subido.", "The director stated that sales had gone up."],
          ["Luis propuso que se contratara a dos personas más.", "Luis proposed hiring two more people."],
          ["Ana advirtió que el presupuesto no sería suficiente.", "Ana warned that the budget wouldn't be enough."],
        ],
        [
          fb("Completa el acta.", "El gerente sugirió que ___ la reunión al viernes. (trasladar, nosotros)", "trasladáramos", "Sugerir (propuesta) + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa el acta.", "Marta explicó que el proyecto ___ retrasado por la lluvia. (haberse)", "se había", "Explicar (información) + pluscuamperfecto: se había retrasado."),
      fb("Completa el acta.", "El director preguntó si alguien ___ alguna objeción. (tener)", "tenía", "Pregunta indirecta con si."),
      fb("Completa el acta.", "Se acordó que la próxima reunión ___ en marzo. (celebrarse, condicional)", "se celebraría", "Futuro del pasado."),
      mt(
        "Relaciona cada verbo con su construcción típica.",
        [
          ["afirmar que", "+ indicativo"],
          ["proponer que", "+ subjuntivo"],
          ["preguntar si", "+ indicativo (pregunta sí/no)"],
          ["pedir que", "+ subjuntivo (petición)"],
        ],
        "Información → indicativo; influencia → subjuntivo."
      ),
      mc(
        "«Let's postpone the vote», she said. → en el acta:",
        ["Propuso que se aplazara la votación.", "Propuso que se aplazaba la votación.", "Propuso aplazar se la votación.", "Propuso que aplacemos la votación ayer."],
        0,
        "Proponer + que + imperfecto de subjuntivo."
      ),
      toEs("The director acknowledged that there had been mistakes.", "La directora reconoció que había habido errores.", "Reconocer que + pluscuamperfecto de haber.", ["El director reconoció que había habido errores."]),
      wo("Todos coincidieron en que era necesario cambiar de estrategia.", "Coincidir en que + indicativo.", "Everyone agreed that it was necessary to change strategy."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2r-dialogue-broken-telephone",
    "Laboratorio de diálogo: el teléfono escacharrado",
    "Un mensaje pasa de persona en persona y cambia en cada paso: practica el estilo indirecto en cadena.",
    "7 min",
    [
      sec(
        "La cadena",
        "Cada persona cuenta lo que le dijo la anterior. Los tiempos retroceden y los pronombres cambian.",
        [
          ["Ana a Luis: «Mañana no vengo porque estoy enferma».", "Ana to Luis: \"I'm not coming tomorrow because I'm sick.\""],
          ["Luis a Eva: «Ana me dijo que al día siguiente no venía porque estaba enferma».", "Luis to Eva: \"Ana told me she wasn't coming the next day because she was sick.\""],
          ["Eva a Pablo: «Luis me contó que Ana le había dicho que no iba a venir».", "Eva to Pablo: \"Luis told me Ana had told him she wasn't going to come.\""],
        ],
        [
          fb("Continúa la cadena.", "Pablo: «Eva me contó que Luis le ___ contado que Ana estaba enferma».", "había", "Pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Jefe: «Terminad el informe hoy». → El jefe nos pidió que ___ el informe ese día.", "termináramos", "Orden → imperfecto de subjuntivo."),
      fb("Transforma.", "Lucía: «¿Has visto mi móvil?» → Lucía me preguntó si ___ su móvil.", "había visto", "Perfecto → pluscuamperfecto."),
      fb("Transforma.", "Pedro: «Nunca volveré a este restaurante». → Pedro juró que nunca ___ a aquel restaurante.", "volvería", "Futuro → condicional; este → aquel."),
      mc(
        "Madre: «No toques eso». → en estilo indirecto:",
        ["Mi madre me dijo que no tocara eso.", "Mi madre me dijo que no toques eso ayer.", "Mi madre me dijo que no tocaba eso.", "Mi madre me dijo no tocar que eso."],
        0,
        "Orden negativa → que no + imperfecto de subjuntivo."
      ),
      ms(
        "¿Qué versiones indirectas son correctas?",
        ["Dijo que estaba cansado.", "Preguntó dónde vivíamos.", "Me pidió que la esperara.", "Me dijo que venga mañana."],
        [0, 1, 2],
        "En pasado: me dijo que viniera al día siguiente."
      ),
      toEs("He told me he would call me when he arrived.", "Me dijo que me llamaría cuando llegara.", "Futuro → condicional; cuando + imperfecto de subjuntivo.", ["Me dijo que me llamaría cuando llegase."]),
      wo("Al final nadie sabía exactamente qué había dicho Ana.", "Pregunta indirecta con qué + pluscuamperfecto.", "In the end nobody knew exactly what Ana had said."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2r-contrast-decir-que",
    "Contraste: «dice que viene» / «dice que vengas»",
    "Decir, escribir o avisar que pueden informar (indicativo) u ordenar (subjuntivo). Aprende a distinguirlos.",
    "7 min",
    [
      sec(
        "Informar u ordenar",
        "Decir que + indicativo transmite información. Decir que + subjuntivo transmite una orden o petición.",
        [
          ["Mamá dice que la cena está lista.", "Mom says dinner is ready. (information)"],
          ["Mamá dice que pongas la mesa.", "Mom says to set the table. (order)"],
          ["Me escribió que llegaba tarde. / Me escribió que lo esperara.", "He wrote that he was late. / He wrote me to wait for him."],
        ],
        [
          mc(
            "«El médico dice que ___ reposo.» (instrucción)",
            ["hagas", "haces", "hiciste", "harás"],
            0,
            "Orden o recomendación → subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("¿Información u orden?", "Dice Juan que no ___ a cenar; se queda en la oficina. (venir, él)", "viene", "Información → indicativo."),
      fb("¿Información u orden?", "Dice Juan que ___ sin él. (empezar, nosotros)", "empecemos", "Orden → subjuntivo."),
      fb("¿Información u orden? (pasado)", "Me avisaron que el vuelo ___ retraso. (tener)", "tenía", "Información → indicativo."),
      fb("¿Información u orden? (pasado)", "Me avisaron que ___ con tiempo al aeropuerto. (ir, yo)", "fuera", "Orden → imperfecto de subjuntivo."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Te digo que te calles.", "I'm telling you to be quiet."],
          ["Te digo que se calla.", "I'm telling you he goes quiet."],
          ["Insiste en que vengas.", "She insists that you come."],
          ["Insiste en que vino.", "She insists that he came."],
        ],
        "El modo cambia el sentido del verbo de habla."
      ),
      toEs("The teacher says (that) we should read chapter three.", "La profesora dice que leamos el capítulo tres.", "Decir + subjuntivo = orden.", ["El profesor dice que leamos el capítulo tres.", "La profesora dice que tenemos que leer el capítulo tres."]),
      wo("Me escribió que la esperara en la puerta del cine.", "Escribir que + imperfecto de subjuntivo (orden).", "She wrote me to wait for her at the cinema door."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2r-mission-doctor-visit",
    "Misión real: en la consulta",
    "Describe síntomas, estados y rasgos en una consulta médica: ser y estar con adjetivos de salud y carácter.",
    "7 min",
    [
      sec(
        "Síntomas y rasgos",
        "Estar para el estado de salud (estoy mareado, está hinchado); ser para rasgos permanentes (soy alérgico, es diabético).",
        [
          ["Estoy mareada desde esta mañana.", "I've been dizzy since this morning."],
          ["Soy alérgica a la penicilina.", "I'm allergic to penicillin."],
          ["El tobillo está muy hinchado.", "The ankle is very swollen."],
        ],
        [
          fb("Completa.", "Mi padre ___ diabético desde hace años.", "es", "Condición crónica como rasgo → ser."),
          fb("Completa.", "Hoy ___ muy cansado y sin apetito.", "estoy", "Estado → estar."),
        ]
      ),
    ],
    [
      fb("Completa.", "La herida ya ___ cicatrizada.", "está", "Resultado → estar + participio."),
      fb("Completa.", "¿___ algún efecto secundario con este medicamento?", "Hay", "Existencia → hay."),
      fb("Completa.", "Tranquilo, no ___ grave; es solo un resfriado.", "es", "Valoración general → ser grave."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Está grave.", "He's seriously ill."],
          ["Es grave.", "It's serious (a serious matter)."],
          ["Está mejor.", "He's feeling better."],
          ["Es mejor.", "It's better (a better option)."],
        ],
        "Ser: valoración; estar: estado del paciente."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Estoy embarazada de tres meses.", "Soy resfriado.", "Hay una farmacia de guardia cerca.", "El análisis está listo."],
        [0, 2, 3],
        "Estado temporal → estoy resfriado."
      ),
      toEs("I'm allergic to pollen, and today I'm very congested.", "Soy alérgico al polen y hoy estoy muy congestionado.", "Rasgo → ser; estado → estar.", ["Soy alérgica al polen y hoy estoy muy congestionada."]),
      wo("No es necesario que vuelva si ya está recuperado.", "Ser necesario (valoración) + estar recuperado (estado).", "There's no need to come back if you've already recovered."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2r-contrast-ser-estar-participle",
    "Contraste: fue cerrada / estaba cerrada",
    "Ser + participio (acción, pasiva) frente a estar + participio (resultado, estado).",
    "7 min",
    [
      sec(
        "Acción o resultado",
        "Ser + participio describe la acción (quién o cuándo se hizo). Estar + participio describe el estado resultante.",
        [
          ["La tienda fue cerrada por la policía.", "The shop was closed (down) by the police. (action)"],
          ["Cuando llegué, la tienda estaba cerrada.", "When I arrived, the shop was closed. (state)"],
        ],
        [
          mc(
            "«El puente ___ construido en 1850 por ingenieros franceses.»",
            ["fue", "estuvo", "estaba", "había"],
            0,
            "Acción con agente y fecha → ser (pasiva)."
          ),
        ]
      ),
    ],
    [
      fb("¿Acción o estado?", "La carta ya ___ escrita; solo falta firmarla.", "está", "Estado resultante → estar."),
      fb("¿Acción o estado?", "La carta ___ escrita por el propio presidente.", "fue", "Acción con agente → ser."),
      fb("¿Acción o estado?", "Cuando entramos, la mesa ya ___ puesta. (imperfecto)", "estaba", "Estado → estar."),
      fb("¿Acción o estado?", "Los ganadores ___ elegidos por votación popular. (pretérito)", "fueron", "Acción → ser."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["La puerta fue abierta a las ocho.", "The door was opened at eight."],
          ["La puerta estaba abierta.", "The door was open."],
          ["El problema fue resuelto.", "The problem was solved."],
          ["El problema está resuelto.", "The problem is solved."],
        ],
        "Acción vs. estado."
      ),
      toEs("The museum is closed on Mondays.", "El museo está cerrado los lunes.", "Estado → estar + participio.", ["Los lunes el museo está cerrado."]),
      wo("La novela fue traducida a más de treinta idiomas.", "Pasiva con ser + agente implícito.", "The novel was translated into more than thirty languages."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2r-transform-hay-esta",
    "Transformaciones: hay un / está el",
    "Pasa de presentar algo nuevo (hay) a localizar algo ya conocido (está) — y al revés.",
    "7 min",
    [
      sec(
        "Nuevo o conocido",
        "Hay + indefinido/número/sin artículo presenta algo nuevo. Está/están + definido localiza algo ya conocido.",
        [
          ["Hay una farmacia en la esquina. → La farmacia está en la esquina.", "There's a pharmacy on the corner. → The pharmacy is on the corner."],
          ["Hay tres sillas en la sala. → Las sillas están en la sala.", "There are three chairs in the room. → The chairs are in the room."],
        ],
        [
          fb("Transforma a estar.", "Hay un gato en el tejado. → El gato ___ en el tejado.", "está", "Algo conocido → estar."),
        ]
      ),
    ],
    [
      fb("Transforma a haber.", "Los libros están en la mesa. → ___ libros en la mesa.", "Hay", "Presentar → hay (sin artículo)."),
      fb("Transforma a estar (pasado).", "Había una ambulancia en la puerta. → La ambulancia ___ en la puerta.", "estaba", "Imperfecto de estar."),
      fb("Transforma a haber (futuro).", "Los invitados estarán en el jardín. → ___ invitados en el jardín.", "Habrá", "Haber impersonal en futuro."),
      mc(
        "¿Cuál es correcta?",
        ["¿Hay un banco por aquí?", "¿Está un banco por aquí?", "¿Hay el banco por aquí?", "¿Están bancos por aquí?"],
        0,
        "Presentar algo nuevo (un banco) → hay."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["¿Dónde está el baño?", "Hay mucha gente en la calle.", "Hay mis padres en casa.", "Mis padres están en casa."],
        [0, 1, 3],
        "Con posesivo → están: mis padres están en casa."
      ),
      toEs("There will be a concert in the square; the stage is already there.", "Habrá un concierto en la plaza; el escenario ya está allí.", "Habrá (nuevo) + está (conocido).", ["Va a haber un concierto en la plaza; el escenario ya está allí.", "Habrá un concierto en la plaza; el escenario ya está ahí."]),
      wo("En la nevera hay leche, pero el queso está en la despensa.", "Hay (sin artículo) frente a está (con artículo).", "There's milk in the fridge, but the cheese is in the pantry."),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2r-dialogue-reunion-old-classmates",
    "Laboratorio de diálogo: el reencuentro de antiguos compañeros",
    "Veinte años después: ¿en qué se ha convertido cada uno? Verbos de cambio en conversación.",
    "7 min",
    [
      sec(
        "¿Qué ha sido de…?",
        "Para hablar de trayectorias: se ha hecho, ha llegado a ser, se ha vuelto, se ha convertido en, se ha quedado.",
        [
          ["—¿Te acuerdas de Marcos? Se ha hecho millonario.", "Remember Marcos? He's become a millionaire."],
          ["—¡No me digas! Y Laura ha llegado a ser jueza.", "No way! And Laura has become a judge."],
          ["—Pues Pedro se ha vuelto muy serio; no parece el mismo.", "Well, Pedro has become very serious; he doesn't seem the same."],
        ],
        [
          fb("Completa.", "El más gamberro de la clase ___ policía. (hacerse, perfecto)", "se ha hecho", "Profesión elegida → hacerse."),
        ]
      ),
    ],
    [
      fb("Completa.", "La tímida de la clase ___ en una actriz famosa. (convertirse, perfecto)", "se ha convertido", "Transformación."),
      fb("Completa.", "Cuando me vio, ___ rojo como un tomate. (ponerse, pretérito)", "se puso", "Reacción momentánea."),
      fb("Completa.", "Desde que se divorció, ___ muy solitario. (volverse, perfecto)", "se ha vuelto", "Cambio de carácter."),
      mt(
        "Relaciona cada cambio con su verbo.",
        [
          ["directora del colegio", "llegar a ser"],
          ["calvo", "quedarse"],
          ["vegano", "hacerse"],
          ["más tranquilo con los años", "volverse"],
        ],
        "Logro, resultado, decisión y cambio gradual."
      ),
      mc(
        "«She's become a very important person in the company.»",
        ["Se ha convertido en una persona muy importante en la empresa.", "Se ha puesto una persona muy importante en la empresa.", "Se ha quedado en una persona muy importante.", "Ha hecho una persona muy importante."],
        0,
        "Convertirse en + sustantivo."
      ),
      toEs("We have all changed a lot.", "Todos hemos cambiado mucho.", "Cambiar (no reflexivo) para el cambio en general.", ["Todos hemos cambiado muchísimo.", "Hemos cambiado todos mucho."]),
      wo("Nadie se esperaba que llegara a ser alcalde del pueblo.", "Esperarse que + imperfecto de subjuntivo + llegar a ser.", "Nobody expected him to become the town's mayor."),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2r-error-hunt-verbs-of-change",
    "Caza de errores: los verbos de cambio",
    "«Se puso médico», «se volvió rojo», «se hizo cansado» — corrige los verbos de cambio mal elegidos.",
    "7 min",
    [
      sec(
        "Combinaciones imposibles",
        "Ponerse no va con profesiones. Hacerse no va con estados físicos momentáneos. Volverse no suele ir con emociones pasajeras.",
        [
          ["✗ Se puso abogado. → ✓ Se hizo abogado.", "He became a lawyer."],
          ["✗ Se hizo nervioso antes del examen. → ✓ Se puso nervioso.", "He got nervous before the exam."],
        ],
        [
          fb("Corrige.", "Al oír la noticia, ___ pálida. (el alumno escribió: se volvió)", "se puso", "Cambio físico instantáneo → ponerse."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Después de años de estudio, ___ arquitecta. (el alumno escribió: se puso)", "se hizo", "Profesión → hacerse."),
      fb("Corrige.", "Con la edad, mi abuelo ___ muy cascarrabias. (el alumno escribió: se puso)", "se volvió", "Cambio de carácter duradero → volverse."),
      fb("Corrige.", "Tras el concierto, ___ afónico. (el alumno escribió: se hizo)", "se quedó", "Resultado → quedarse."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se hizo famoso con su primera novela.", "Se puso contenta al verme.", "Se volvió médico en 2010.", "Se quedó dormido en el sofá."],
        [2],
        "Profesión → se hizo médico."
      ),
      mc(
        "¿Cuál es correcta?",
        ["El pueblo se convirtió en ciudad.", "El pueblo se puso ciudad.", "El pueblo se hizo en ciudad.", "El pueblo llegó a ciudad en."],
        0,
        "Convertirse en + sustantivo."
      ),
      toEs("He fell asleep watching TV.", "Se quedó dormido viendo la tele.", "Quedarse dormido.", ["Se durmió viendo la tele.", "Se quedó dormido viendo la televisión."]),
      wo("Me pongo de mal humor cuando tengo hambre.", "Ponerse de + sustantivo (mal humor).", "I get grumpy when I'm hungry."),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2r-mission-city-before-after",
    "Misión real: el antes y el después de una ciudad",
    "Describe cómo ha cambiado tu ciudad en veinte años — verbos de cambio, comparaciones y pasados.",
    "7 min",
    [
      sec(
        "Antes y ahora",
        "Imperfecto para el antes, perfecto y verbos de cambio para la transformación, presente para el ahora.",
        [
          ["Antes el puerto era una zona peligrosa; ahora se ha convertido en el barrio de moda.", "The port used to be dangerous; now it's become the trendy neighborhood."],
          ["El centro se ha vuelto muy caro.", "The center has become very expensive."],
          ["Muchos vecinos se han quedado sin casa.", "Many residents have been left without a home."],
        ],
        [
          fb("Completa.", "El antiguo mercado ___ en un centro cultural. (convertirse, perfecto)", "se ha convertido", "Transformación."),
        ]
      ),
    ],
    [
      fb("Completa.", "Hace veinte años, el barrio ___ muy tranquilo. (ser)", "era", "Descripción del pasado."),
      fb("Completa.", "Con el turismo, el centro ___ ruidoso. (volverse, perfecto)", "se ha vuelto", "Cambio gradual."),
      fb("Completa.", "Muchas tiendas pequeñas ___ sin clientes. (quedarse, perfecto)", "se han quedado", "Resultado negativo."),
      mt(
        "Relaciona cada antes con su ahora.",
        [
          ["Era un pueblo de pescadores.", "Se ha convertido en un destino turístico."],
          ["La fábrica estaba abandonada.", "Ahora es un museo."],
          ["El río estaba contaminado.", "Se ha vuelto a poder nadar en él."],
          ["No había carril bici.", "Ahora hay kilómetros de carriles."],
        ],
        "Imperfecto para el pasado, presente/perfecto para el cambio."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La ciudad se ha hecho más verde.", "El barrio se ha puesto de moda.", "El alquiler se ha quedado barato.", "La plaza se convirtió en un aparcamiento."],
        [0, 1, 3],
        "Quedarse suele indicar un resultado de pérdida; los alquileres «se han puesto por las nubes» o «se han vuelto caros»."
      ),
      toEs("The neighborhood has become one of the most expensive in the city.", "El barrio se ha convertido en uno de los más caros de la ciudad.", "Convertirse en + superlativo con de.", ["El barrio ha llegado a ser uno de los más caros de la ciudad."]),
      wo("Lo que más ha cambiado es la forma de moverse por la ciudad.", "Lo que + perfecto.", "What has changed most is the way of getting around the city."),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2r-mission-letter-to-editor",
    "Misión real: carta al director",
    "Escribe una carta a un periódico: argumentos, contraargumentos, conclusión — con conectores y énfasis.",
    "8 min",
    [
      sec(
        "La estructura",
        "Introducción (En relación con…), argumentos (En primer lugar… Además…), contraargumento (Si bien es cierto que… no obstante…), conclusión (En definitiva… Por todo ello…).",
        [
          ["En relación con el artículo publicado el lunes, quisiera expresar mi desacuerdo.", "Regarding the article published on Monday, I would like to express my disagreement."],
          ["Si bien es cierto que el tráfico ha aumentado, no es justo culpar a los ciclistas.", "While it's true that traffic has increased, it's not fair to blame cyclists."],
          ["Por todo ello, pido al ayuntamiento que reconsidere su postura.", "For all these reasons, I ask the city council to reconsider its position."],
        ],
        [
          fb("Completa la carta.", "En primer lugar, la medida es injusta; ___, es ineficaz. (in addition)", "además", "Adición."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Si bien es cierto que ___ problemas, la solución no es prohibir. (haber, presente)", "hay", "Si bien es cierto que + indicativo."),
      fb("Completa la carta.", "___ definitiva, la propuesta perjudica a los vecinos.", "En", "En definitiva = in short."),
      fb("Completa la carta.", "Lo que más me indigna es que nadie nos ___ consultado. (haber)", "haya", "Lo que + indignar que + perfecto de subjuntivo."),
      mt(
        "Relaciona cada conector con su función en la carta.",
        [
          ["En relación con", "introducir el tema"],
          ["Si bien es cierto que", "conceder un argumento"],
          ["No obstante", "contraargumentar"],
          ["Por todo ello", "concluir"],
        ],
        "Estructura de un texto argumentativo."
      ),
      mc(
        "¿Qué despedida es adecuada para una carta al director?",
        ["Atentamente,", "¡Chao!", "Un besazo,", "Nos vemos,"],
        0,
        "Registro formal."
      ),
      toEs("It is the residents who will suffer the consequences.", "Son los vecinos quienes sufrirán las consecuencias.", "Frase hendida con ser en plural.", ["Son los vecinos los que sufrirán las consecuencias."]),
      wo("No obstante, conviene reconocer el esfuerzo del ayuntamiento.", "No obstante + conviene + infinitivo.", "Nevertheless, it's worth acknowledging the city council's effort."),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2r-contrast-aunque-a-pesar-sin-embargo",
    "Contraste: aunque, a pesar de, sin embargo",
    "Tres formas de expresar contraste con estructuras distintas — mismo significado, distinta gramática.",
    "7 min",
    [
      sec(
        "Una idea, tres construcciones",
        "Aunque + verbo conjugado. A pesar de + sustantivo/infinitivo (o a pesar de que + verbo). Sin embargo empieza una nueva oración.",
        [
          ["Aunque estaba cansado, fue a trabajar.", "Although he was tired, he went to work."],
          ["A pesar del cansancio, fue a trabajar.", "Despite the tiredness, he went to work."],
          ["Estaba cansado. Sin embargo, fue a trabajar.", "He was tired. However, he went to work."],
        ],
        [
          fb("Reformula con a pesar de.", "Aunque llovía, jugamos. → A pesar ___ la lluvia, jugamos.", "de", "A pesar de + sustantivo."),
        ]
      ),
    ],
    [
      fb("Reformula con a pesar de + infinitivo.", "Aunque es joven, tiene mucha experiencia. → A pesar de ___ joven, tiene mucha experiencia.", "ser", "A pesar de + infinitivo."),
      fb("Reformula con aunque.", "A pesar del frío, salimos. → Aunque ___ frío, salimos. (hacer)", "hacía", "Aunque + verbo conjugado (hecho)."),
      fb("Reformula con sin embargo.", "Aunque estudió, suspendió. → Estudió; ___, suspendió.", "sin embargo", "Sin embargo entre punto y coma y coma."),
      mt(
        "Relaciona cada estructura con lo que la sigue.",
        [
          ["aunque", "verbo conjugado"],
          ["a pesar de", "sustantivo o infinitivo"],
          ["a pesar de que", "que + verbo conjugado"],
          ["sin embargo", "una nueva oración"],
        ],
        "Mismo significado, distinta gramática."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Pese a las críticas, siguió adelante.", "A pesar de que no tenía dinero, viajó.", "Aunque el ruido, dormí bien.", "Sin embargo, nadie se quejó."],
        [0, 1, 3],
        "Aunque necesita verbo: aunque había ruido."
      ),
      toEs("In spite of having little time, she helped us.", "A pesar de tener poco tiempo, nos ayudó.", "A pesar de + infinitivo.", ["Aunque tenía poco tiempo, nos ayudó.", "Pese a tener poco tiempo, nos ayudó."]),
      wo("Por mucho que insistas, no voy a cambiar de opinión.", "Por mucho que + subjuntivo (concesión intensificada).", "However much you insist, I'm not going to change my mind."),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2r-transform-flat-to-emphatic",
    "Transformaciones: de párrafo plano a párrafo con fuerza",
    "Reescribe un texto monótono con conectores, anteposiciones y frases hendidas.",
    "8 min",
    [
      sec(
        "El texto plano",
        "Lee la versión plana: «El proyecto es bueno. Es caro. Mucha gente lo apoya. El alcalde lo presentó.» Ahora mira cómo gana fuerza:",
        [
          ["Si bien el proyecto es caro, es sin duda bueno.", "While the project is expensive, it's undoubtedly good."],
          ["Además, cuenta con un apoyo enorme.", "Moreover, it has enormous support."],
          ["Fue el propio alcalde quien lo presentó.", "It was the mayor himself who presented it."],
        ],
        [
          fb("Añade énfasis.", "El alcalde lo presentó. → Fue el alcalde ___ lo presentó.", "quien", "Frase hendida."),
        ]
      ),
    ],
    [
      fb("Añade un conector.", "Es caro. Vale la pena. → Es caro; ___, vale la pena.", "no obstante", "Contraste formal (también: sin embargo)."),
      fb("Añade énfasis.", "Me sorprendió su éxito. → ___ que me sorprendió fue su éxito.", "Lo", "Lo que … fue …"),
      fb("Antepón el complemento.", "Presentaron el proyecto en marzo. → El proyecto ___ presentaron en marzo.", "lo", "Anteposición + pronombre."),
      fb("Añade un conector de consecuencia.", "Nadie se opuso; ___, se aprobó por unanimidad.", "por consiguiente", "Consecuencia formal (también: por lo tanto)."),
      mc(
        "¿Qué versión tiene más fuerza?",
        ["No solo es barato, sino que además es ecológico.", "Es barato. Es ecológico.", "Es barato y ecológico también, pues.", "Barato, ecológico, sí."],
        0,
        "No solo… sino que además = not only… but also."
      ),
      toEs("Not only is it useful, but it's also beautiful.", "No solo es útil, sino que también es bonito.", "No solo … sino que también.", ["No solo es útil, sino que además es bonito.", "No solo es útil sino también bonito."]),
      wo("Es precisamente por eso por lo que merece nuestro apoyo.", "Frase hendida con causa: es por eso por lo que.", "It's precisely for that reason that it deserves our support."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-art-literature",
    "Red de palabras: arte y literatura",
    "Obras, géneros, técnicas y críticas — el vocabulario del arte con relativas en subjuntivo.",
    "7 min",
    [
      sec(
        "Géneros y oficios",
        "Relaciona obra, autor y género: la novela (el novelista), el poema (el poeta), el cuadro (el pintor), la escultura (el escultor), el ensayo (el ensayista).",
        [
          ["Busco una novela que no sea demasiado larga.", "I'm looking for a novel that isn't too long."],
          ["Es un cuadro cuyo autor se desconoce.", "It's a painting whose author is unknown."],
        ],
        [
          mt(
            "Relaciona cada obra con su autor.",
            [
              ["el ensayo", "el ensayista"],
              ["la escultura", "el escultor"],
              ["el guion", "el guionista"],
              ["el poemario", "el poeta"],
            ],
            "Vocabulario de creación artística."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el soneto", "la novela", "el cuento", "el pincel"], 3, "El pincel es una herramienta; los otros son géneros literarios."),
      fb("Completa.", "El ___ de la novela es un detective retirado. (main character)", "protagonista", "El/la protagonista."),
      fb("Completa.", "Quiero leer un libro que me ___ reflexionar. (hacer)", "haga", "Antecedente desconocido → subjuntivo."),
      fb("Completa.", "La obra fue ___ en el Museo del Prado. (exponer)", "expuesta", "Exponer → expuesto/a."),
      ms(
        "¿Qué palabras pertenecen a la pintura?",
        ["el lienzo", "el óleo", "la acuarela", "la rima"],
        [0, 1, 2],
        "La rima pertenece a la poesía."
      ),
      toEs("It's the most moving poem I've ever read.", "Es el poema más conmovedor que he leído nunca.", "Superlativo + relativa en perfecto.", ["Es el poema más emocionante que he leído nunca.", "Es el poema más conmovedor que jamás he leído."]),
      wo("La crítica elogió la novela, cuyo final sorprendió a todos.", "Cuyo concuerda con final.", "The critics praised the novel, whose ending surprised everyone."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-politics",
    "Red de palabras: política y gobierno",
    "Elecciones, leyes y partidos — el vocabulario político con conjunciones y la voz pasiva.",
    "7 min",
    [
      sec(
        "Instituciones y procesos",
        "El gobierno, el parlamento, el partido, la ley, el ministro, votar, aprobar, derogar, la campaña electoral, la oposición.",
        [
          ["La ley fue aprobada por mayoría absoluta.", "The law was passed by an absolute majority."],
          ["No se aprobará hasta que la oposición dé su apoyo.", "It won't be passed until the opposition gives its support."],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["derogar", "to repeal"],
              ["el escaño", "seat (in parliament)"],
              ["la abstención", "abstention"],
              ["el sondeo", "poll"],
            ],
            "Vocabulario político."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el diputado", "el senador", "el alcalde", "el sindicato"], 3, "El sindicato es una organización, no un cargo político."),
      fb("Completa.", "La reforma ___ aprobada el año pasado. (ser, pretérito)", "fue", "Pasiva con ser."),
      fb("Completa.", "Votaré por quien ___ mejores propuestas. (tener)", "tenga", "Quien + subjuntivo (persona indeterminada)."),
      fb("Completa.", "El partido perdió varios ___ en las últimas elecciones. (seats)", "escaños", "El escaño."),
      ms(
        "¿Qué frases son correctas?",
        ["Es necesario que todos voten.", "La campaña empezará en cuanto se convoquen las elecciones.", "Se derogó la ley el mes pasado.", "El ministro dimitido ayer."],
        [0, 1, 2],
        "Falta el auxiliar: el ministro dimitió ayer."
      ),
      toEs("The president said he would lower taxes.", "El presidente dijo que bajaría los impuestos.", "Estilo indirecto: futuro → condicional.", ["El presidente dijo que iba a bajar los impuestos."]),
      wo("A pesar de las protestas, el gobierno mantuvo la reforma.", "A pesar de + sustantivo.", "Despite the protests, the government maintained the reform."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-dreams",
    "Red de palabras: sueños e imaginación",
    "Soñar, imaginar, fantasear — el mundo interior con el imperfecto de subjuntivo y el como si.",
    "7 min",
    [
      sec(
        "Soñar con, soñar que",
        "Soñar con + sustantivo/infinitivo (to dream of/about). Soñar que + indicativo (to dream that). Imaginar que, fantasear con, tener una pesadilla.",
        [
          ["Sueño con vivir junto al mar.", "I dream of living by the sea."],
          ["Anoche soñé que volaba.", "Last night I dreamed that I was flying."],
          ["Era como si estuviera despierto.", "It was as if I were awake."],
        ],
        [
          fb("Completa.", "De niña soñaba ___ ser astronauta.", "con", "Soñar con + infinitivo."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la pesadilla", "nightmare"],
          ["el insomnio", "insomnia"],
          ["la ensoñación", "daydream"],
          ["despertarse sobresaltado", "to wake up startled"],
        ],
        "Vocabulario de los sueños."
      ),
      mc("¿Cuál no encaja?", ["imaginar", "fantasear", "soñar", "madrugar"], 3, "Madrugar = levantarse temprano."),
      fb("Completa.", "Soñé que ___ en un país desconocido. (estar, yo)", "estaba", "Soñar que + indicativo (imperfecto)."),
      fb("Completa.", "Todo parecía tan real, como si ___ de verdad. (pasar)", "pasara", "Como si + imperfecto de subjuntivo."),
      fb("Completa.", "Ojalá ___ realidad todos tus sueños. (hacerse)", "se hagan", "Ojalá + subjuntivo."),
      toEs("I dreamed that I could speak with animals.", "Soñé que podía hablar con los animales.", "Soñar que + imperfecto de indicativo.", ["Soñé que hablaba con los animales."]),
      wo("Siempre he soñado con recorrer Sudamérica en moto.", "Soñar con + infinitivo.", "I've always dreamed of traveling around South America by motorcycle."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-technology-ai",
    "Red de palabras: tecnología e inteligencia artificial",
    "Algoritmos, datos y automatización — hablar del futuro tecnológico con hipótesis.",
    "7 min",
    [
      sec(
        "Conceptos clave",
        "El algoritmo, los datos, la privacidad, el aprendizaje automático, automatizar, la ciberseguridad, el hackeo, la nube.",
        [
          ["Si las máquinas pensaran por sí solas, ¿quién sería responsable?", "If machines thought for themselves, who would be responsible?"],
          ["Es fundamental que se proteja la privacidad de los datos.", "It's essential that data privacy be protected."],
        ],
        [
          mt(
            "Relaciona cada término con su definición.",
            [
              ["el algoritmo", "conjunto de instrucciones"],
              ["la nube", "almacenamiento en internet"],
              ["automatizar", "hacer que una máquina lo haga sola"],
              ["el hackeo", "acceso no autorizado"],
            ],
            "Vocabulario tecnológico."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el software", "el hardware", "la contraseña", "el martillo"], 3, "El martillo es una herramienta manual."),
      fb("Completa.", "Si la IA ___ todos los trabajos, ¿qué haríamos nosotros? (hacer)", "hiciera", "Si + imperfecto de subjuntivo."),
      fb("Completa.", "Necesitamos un sistema que ___ los datos de forma segura. (almacenar)", "almacene", "Antecedente desconocido → subjuntivo."),
      fb("Completa.", "Los datos ___ robados por un grupo de hackers. (ser, pretérito)", "fueron", "Pasiva con ser."),
      ms(
        "¿Qué frases son correctas?",
        ["Es importante que actualices el software.", "Si no tuviera móvil, estaría más tranquilo.", "Cambia tu contraseña antes de que sea tarde.", "La app que descargué no funcionara."],
        [0, 1, 2],
        "Hecho real → la app que descargué no funcionaba."
      ),
      toEs("Artificial intelligence will change the way we work.", "La inteligencia artificial cambiará la forma en que trabajamos.", "La forma en que + indicativo.", ["La inteligencia artificial va a cambiar la forma en que trabajamos.", "La inteligencia artificial cambiará nuestra forma de trabajar."]),
      wo("Nadie sabe qué pasará cuando las máquinas aprendan solas.", "Cuando + subjuntivo (futuro).", "Nobody knows what will happen when machines learn on their own."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-life-decisions",
    "Red de palabras: decisiones y arrepentimientos",
    "Elegir, dudar, arrepentirse — el vocabulario de las grandes decisiones con el tipo 3.",
    "7 min",
    [
      sec(
        "Decidir y arrepentirse",
        "Tomar una decisión, dar un paso, arriesgarse, dudar, arrepentirse de, echar de menos, la encrucijada, la oportunidad perdida.",
        [
          ["Me arrepiento de no haber estudiado idiomas.", "I regret not having studied languages."],
          ["Si hubiera aprovechado aquella oportunidad, ahora viviría en Londres.", "If I'd taken that chance, I'd live in London now."],
        ],
        [
          mt(
            "Relaciona cada expresión con su significado.",
            [
              ["arriesgarse", "to take a risk"],
              ["arrepentirse de", "to regret"],
              ["la encrucijada", "crossroads"],
              ["dar el paso", "to take the plunge"],
            ],
            "Vocabulario de decisiones."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["dudar", "vacilar", "titubear", "celebrar"], 3, "Celebrar no expresa indecisión."),
      fb("Completa.", "No me arrepiento de ___ aquel trabajo. (dejar, infinitivo compuesto)", "haber dejado", "Arrepentirse de + infinitivo compuesto: haber + participio."),
      fb("Completa.", "Si no me ___ arriesgado, nunca habría montado mi empresa. (haber)", "hubiera", "Pluscuamperfecto de subjuntivo."),
      fb("Completa.", "Ojalá ___ aceptado aquella oferta. (haber, yo)", "hubiera", "Ojalá + pluscuamperfecto de subjuntivo."),
      ms(
        "¿Qué frases son correctas?",
        ["Tomé la decisión sin pensarlo mucho.", "Me arrepiento de que no te lo dije.", "Fue la mejor decisión que he tomado.", "Estoy en una encrucijada."],
        [0, 2, 3],
        "Arrepentirse de que + subjuntivo: de que no te lo dijera (o: de no habértelo dicho)."
      ),
      toEs("I would have made the same decision.", "Yo habría tomado la misma decisión.", "Condicional perfecto.", ["Yo hubiera tomado la misma decisión.", "Habría tomado la misma decisión."]),
      wo("A veces la decisión más difícil es la más acertada.", "Superlativos con la más.", "Sometimes the hardest decision is the wisest one."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-media",
    "Red de palabras: periodismo y medios",
    "Titulares, fuentes y entrevistas — el vocabulario de los medios con el estilo indirecto.",
    "7 min",
    [
      sec(
        "La redacción",
        "El titular, la portada, la fuente, el corresponsal, la rueda de prensa, desmentir, filtrar, informar, las noticias falsas (bulos).",
        [
          ["Según fuentes oficiales, el acuerdo se firmará mañana.", "According to official sources, the agreement will be signed tomorrow."],
          ["El ministro desmintió que fuera a dimitir.", "The minister denied he was going to resign."],
        ],
        [
          mt(
            "Relaciona cada término con su significado.",
            [
              ["desmentir", "to deny"],
              ["filtrar", "to leak"],
              ["el bulo", "hoax / fake news"],
              ["el corresponsal", "correspondent"],
            ],
            "Vocabulario periodístico."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el titular", "la portada", "la columna", "el andén"], 3, "El andén es de una estación de tren."),
      fb("Completa.", "El portavoz afirmó que la situación ___ bajo control. (estar, imperfecto)", "estaba", "Estilo indirecto: presente → imperfecto."),
      fb("Completa.", "La empresa desmintió que ___ despidos. (haber, imperfecto de subjuntivo)", "hubiera", "Desmentir que + subjuntivo (niega la información)."),
      fb("Completa.", "Es importante que los periodistas ___ sus fuentes. (contrastar)", "contrasten", "Es importante que + subjuntivo."),
      ms(
        "¿Qué frases son correctas?",
        ["El diario publicó una exclusiva.", "Se filtró el documento a la prensa.", "Según el corresponsal, la situación había empeorado.", "La noticia fue desmentido."],
        [0, 1, 2],
        "Concordancia: la noticia fue desmentida."
      ),
      toEs("The spokesperson said that they would give more information the next day.", "El portavoz dijo que darían más información al día siguiente.", "Futuro → condicional; mañana → al día siguiente.", ["La portavoz dijo que darían más información al día siguiente."]),
      wo("La noticia que se hizo viral resultó ser un bulo.", "Relativa + resultar ser.", "The news that went viral turned out to be a hoax."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-psychology",
    "Red de palabras: psicología y personalidad",
    "Rasgos, estados y emociones complejas — ser y estar con adjetivos de personalidad.",
    "7 min",
    [
      sec(
        "Rasgos y estados",
        "Ser: extrovertido, introvertido, empático, perfeccionista, impulsivo. Estar: agobiado, desmotivado, deprimido, ilusionado.",
        [
          ["Es muy perfeccionista, por eso está agobiado.", "He's very much a perfectionist; that's why he's overwhelmed."],
          ["Se ha vuelto más empática con los años.", "She's become more empathetic over the years."],
        ],
        [
          mt(
            "Relaciona cada adjetivo con su opuesto.",
            [
              ["extrovertido", "introvertido"],
              ["optimista", "pesimista"],
              ["impulsivo", "reflexivo"],
              ["seguro de sí mismo", "inseguro"],
            ],
            "Pares de rasgos de personalidad."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["empático", "comprensivo", "sensible", "egoísta"], 3, "Egoísta es el único negativo en cuanto a empatía."),
      fb("Completa con ser o estar.", "Últimamente ___ muy desmotivada con el trabajo.", "estoy", "Estado temporal → estar."),
      fb("Completa con ser o estar.", "Mi hermano ___ una persona muy reservada.", "es", "Rasgo → ser."),
      fb("Completa con un verbo de cambio.", "Tras la pérdida, ___ muy retraído. (volverse, pretérito)", "se volvió", "Cambio de carácter → volverse."),
      ms(
        "¿Qué frases son correctas?",
        ["Está ilusionada con su nuevo proyecto.", "Es muy susceptible; se ofende por todo.", "Estoy extrovertido hoy.", "Se puso triste al despedirse."],
        [0, 1, 3],
        "Extrovertido es un rasgo → ser (o: hoy estoy muy sociable)."
      ),
      toEs("She is very sensitive, so she's hurt by criticism.", "Es muy sensible, así que le duelen las críticas.", "Rasgo con ser + doler.", ["Es muy sensible, por eso le afectan las críticas.", "Es muy sensible, así que las críticas le duelen."]),
      wo("La psicóloga le recomendó que expresara sus emociones.", "Recomendar (pasado) + imperfecto de subjuntivo.", "The psychologist recommended that she express her emotions."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-personal-growth",
    "Red de palabras: desarrollo personal",
    "Metas, hábitos y superación — hablar del crecimiento personal con verbos de cambio y conjunciones.",
    "7 min",
    [
      sec(
        "Crecer",
        "Fijarse una meta, superarse, la autoestima, la constancia, salir de la zona de confort, aprender de los errores, llegar a ser.",
        [
          ["Para que un hábito se consolide, hace falta constancia.", "For a habit to stick, you need consistency."],
          ["Con esfuerzo, llegó a ser la mejor de su promoción.", "With effort, she became the best in her class."],
        ],
        [
          mt(
            "Relaciona cada expresión con su significado.",
            [
              ["la autoestima", "self-esteem"],
              ["la constancia", "perseverance"],
              ["superarse", "to better oneself"],
              ["fijarse una meta", "to set a goal"],
            ],
            "Vocabulario del desarrollo personal."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["la perseverancia", "la disciplina", "la constancia", "la pereza"], 3, "La pereza es lo contrario."),
      fb("Completa.", "No lograrás nada a menos que ___ constante. (ser, tú)", "seas", "A menos que + subjuntivo."),
      fb("Completa.", "Desde que medito, ___ una persona más tranquila. (volverse, perfecto)", "me he vuelto", "Cambio de carácter."),
      fb("Completa.", "Lo importante no es caer, sino ___. (levantarse)", "levantarse", "Infinitivo como sustantivo."),
      ms(
        "¿Qué frases son correctas?",
        ["Me he propuesto leer un libro al mes.", "En cuanto termine el curso, buscaré trabajo.", "Salir de la zona de confort da miedo.", "Hasta que no lo intentas, no lo sabrás."],
        [0, 1, 2],
        "Hasta que + futuro → subjuntivo: hasta que no lo intentes."
      ),
      toEs("Every mistake has made me stronger.", "Cada error me ha hecho más fuerte.", "Hacer + adjetivo (causar un cambio).", ["Cada error me ha vuelto más fuerte.", "Cada equivocación me ha hecho más fuerte."]),
      wo("Nunca es tarde para convertirse en la persona que quieres ser.", "Convertirse en + relativa.", "It's never too late to become the person you want to be."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-debate",
    "Red de palabras: debate y argumentación",
    "Argumentar, rebatir, matizar y conceder — el vocabulario del debate con conectores.",
    "7 min",
    [
      sec(
        "Los verbos del debate",
        "Argumentar, sostener, rebatir, refutar, matizar, conceder, defender una postura, el argumento, el contraargumento.",
        [
          ["Sostengo que la medida es injusta, aunque reconozco que tiene ventajas.", "I maintain that the measure is unfair, though I recognize it has advantages."],
          ["Permíteme matizar lo que acabas de decir.", "Allow me to qualify what you've just said."],
        ],
        [
          mt(
            "Relaciona cada verbo con su significado.",
            [
              ["rebatir", "to refute"],
              ["matizar", "to qualify / nuance"],
              ["sostener", "to maintain / argue"],
              ["conceder", "to concede"],
            ],
            "Verbos de argumentación."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["por un lado", "por otro lado", "en cambio", "de postre"], 3, "De postre no es un conector argumentativo."),
      fb("Completa.", "No comparto tu opinión; ___, creo que te equivocas. (moreover)", "además", "Adición."),
      fb("Completa.", "No es que no ___ razón, es que exageras. (tener, tú)", "tengas", "No es que + subjuntivo."),
      fb("Completa.", "Tu argumento es interesante; no ___, carece de datos.", "obstante", "No obstante."),
      ms(
        "¿Qué frases sirven para rebatir?",
        ["No estoy de acuerdo en absoluto.", "Eso no es del todo cierto.", "Tienes toda la razón.", "Discrepo de lo que acabas de decir."],
        [0, 1, 3],
        "Tienes toda la razón expresa acuerdo."
      ),
      toEs("Although you (tú) may be right, I don't agree.", "Aunque puede que tengas razón, no estoy de acuerdo.", "Puede que + subjuntivo; aunque + indicativo.", ["Aunque tengas razón, no estoy de acuerdo.", "Puede que tengas razón, pero no estoy de acuerdo."]),
      wo("Lo que no se puede negar es que el problema existe.", "Lo que + se impersonal + negar.", "What can't be denied is that the problem exists."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-performing-arts",
    "Red de palabras: música y artes escénicas",
    "Ensayos, estrenos y críticas — el vocabulario del escenario con estructuras de énfasis.",
    "7 min",
    [
      sec(
        "Detrás del telón",
        "El ensayo, el estreno, el reparto, el papel, el director de escena, la función, la gira, el aforo, la ovación.",
        [
          ["Fue en el estreno cuando la actriz se consagró.", "It was at the premiere that the actress made her name."],
          ["¡Lo bien que actuó todo el reparto!", "How well the whole cast performed!"],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["el estreno", "premiere"],
              ["el reparto", "cast"],
              ["el aforo", "capacity (of a venue)"],
              ["la gira", "tour"],
            ],
            "Vocabulario escénico."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el violín", "el violonchelo", "la viola", "la batuta"], 3, "La batuta la usa el director; no es un instrumento de cuerda."),
      fb("Completa.", "Fue la soprano ___ recibió la ovación más larga.", "quien", "Frase hendida."),
      fb("Completa.", "No te imaginas lo ___ que estaban los músicos. (nervioso)", "nerviosos", "Lo + adjetivo concordado + que."),
      fb("Completa.", "La obra ___ estrenada en 1936. (ser, pretérito)", "fue", "Pasiva con ser."),
      ms(
        "¿Qué frases son correctas?",
        ["El concierto se agotó en diez minutos.", "Actuó como si fuera su última función.", "El reparto fue elegido por el director.", "Apenas se había levantado el telón cuando se fue la luz."],
        [0, 1, 2, 3],
        "Las cuatro son correctas."
      ),
      toEs("It was the best performance I have ever seen.", "Fue la mejor actuación que he visto nunca.", "Superlativo + perfecto.", ["Ha sido la mejor actuación que he visto nunca.", "Fue la mejor función que he visto nunca."]),
      wo("El público se puso en pie para aplaudir a la orquesta.", "Ponerse en pie + para + infinitivo.", "The audience stood up to applaud the orchestra."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-big-error-hunt",
    "Desafío B2: la gran caza de errores",
    "Comienza el desafío final del B2: un error por frase, de todos los temas del nivel.",
    "9 min",
    [
      sec(
        "La lista de control del B2",
        "Relativas (¿existe el antecedente?), adverbiales (¿futuro o hábito?), secuencia de tiempos, condicionales (nunca condicional tras si), estilo indirecto, ser/estar/haber, verbos de cambio, conectores, énfasis, cuyo.",
        [
          ["✗ Si tendría tiempo, iría. → ✓ Si tuviera tiempo, iría.", "If I had time, I'd go."],
          ["✗ Me pidió que le llamo. → ✓ Me pidió que lo/le llamara.", "He asked me to call him."],
        ],
        [
          mc(
            "«Cuando llegaré a casa, te llamo.» ¿Qué falla?",
            ["Cuando + futuro → subjuntivo: cuando llegue.", "Te llamo debería ser te llamaría.", "Casa lleva artículo.", "Nada."],
            0,
            "Cuando + acción futura → subjuntivo."
          ),
          mc(
            "«Es el autor cuyo novelas leí.» ¿Qué falla?",
            ["Cuyo concuerda con lo poseído: cuyas novelas.", "Debería ser quien.", "Leí debería ser leía.", "Nada."],
            0,
            "Cuyas novelas."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "No hay nadie que ___ la respuesta. (saber; el alumno escribió: sabe)", "sepa", "Antecedente inexistente."),
      fb("Corrige.", "Quería que ___ conmigo. (venir, tú; el alumno escribió: vengas)", "vinieras", "Secuencia de tiempos."),
      fb("Corrige.", "___ muchos problemas el año pasado. (haber; el alumno escribió: Hubieron)", "Hubo", "Haber impersonal en singular."),
      fb("Corrige.", "Al ver la nota, ___ muy contento. (ponerse; el alumno escribió: se hizo)", "se puso", "Emoción momentánea → ponerse."),
      ms(
        "¿Qué frases son correctas?",
        ["Si lo hubiera sabido, no habría venido.", "A pesar de que llovía, salimos.", "Fue María quien lo encontró.", "Dijo que vendría al día siguiente."],
        [0, 1, 2, 3],
        "Las cuatro son correctas."
      ),
      toEs("I'll tell you when I know something, unless it's a secret.", "Te lo diré cuando sepa algo, a menos que sea un secreto.", "Cuando + subjuntivo; a menos que + subjuntivo.", ["Te lo diré cuando sepa algo, salvo que sea un secreto.", "Te lo digo cuando sepa algo, a menos que sea un secreto."]),
      wo("Lo que más me sorprendió fue que nadie se quejara.", "Lo que + pretérito + que + imperfecto de subjuntivo.", "What surprised me most was that nobody complained."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-dialogue-marathon",
    "Desafío B2: maratón de diálogos",
    "Cuatro escenas: una negociación, un reencuentro, una consulta y una discusión de pareja.",
    "9 min",
    [
      sec(
        "Escena 1: la negociación",
        "Condiciones con con tal de que, siempre que, a menos que.",
        [
          ["—Firmamos hoy con tal de que nos hagan un descuento.", "We'll sign today provided you give us a discount."],
          ["—Podríamos hacerlo siempre que el pedido fuera mayor.", "We could do it as long as the order were bigger."],
        ],
        [
          fb("Completa.", "Aceptaremos a menos que el precio ___. (subir)", "suba", "A menos que + subjuntivo."),
        ]
      ),
      sec(
        "Escena 2: el reencuentro",
        "Verbos de cambio y pasados.",
        [
          ["—¡Cuánto has cambiado! Te has vuelto mucho más tranquilo.", "You've changed so much! You've become much calmer."],
          ["—Es que desde que me hice padre, veo las cosas de otra manera.", "Since I became a father, I see things differently."],
        ],
        [
          fb("Completa.", "Y tú ___ en toda una experta en arte. (convertirse, perfecto)", "te has convertido", "Convertirse en."),
        ]
      ),
      sec(
        "Escena 3: la consulta",
        "Ser/estar y recomendaciones.",
        [
          ["—Está usted agotado. Le recomiendo que se tome unos días.", "You're exhausted. I recommend you take a few days off."],
        ],
        [
          fb("Completa.", "Es fundamental que ___ al menos siete horas. (dormir, usted)", "duerma", "Es fundamental que + subjuntivo."),
        ]
      ),
    ],
    [
      mc(
        "Escena 4: la discusión. «Me hablas como si fuera tonto.» ¿Qué expresa?",
        ["Una queja: te sientes tratado como alguien que no entiende.", "Una pregunta sobre inteligencia.", "Un deseo.", "Un plan."],
        0,
        "Como si + imperfecto de subjuntivo."
      ),
      fb("Escena 4.", "Si me lo ___ dicho antes, no me habría enfadado. (haber, tú)", "hubieras", "Tipo 3."),
      fb("Escena 4.", "Te pedí que me ___ si llegabas tarde. (avisar, tú)", "avisaras", "Pedir (pasado) + imperfecto de subjuntivo."),
      mt(
        "Relaciona cada frase con su función.",
        [
          ["Ojalá no hubiera dicho eso.", "arrepentimiento"],
          ["Yo en tu lugar, me disculparía.", "consejo"],
          ["Me dijo que lo sentía.", "estilo indirecto"],
          ["Fue él quien empezó.", "énfasis"],
        ],
        "Cuatro funciones del B2."
      ),
      toEs("I wish we had talked earlier.", "Ojalá hubiéramos hablado antes.", "Ojalá + pluscuamperfecto de subjuntivo.", ["Ojalá hubiésemos hablado antes.", "Ojalá que hubiéramos hablado antes."]),
      wo("No es que no te quiera, es que necesito tiempo.", "No es que + subjuntivo, es que + indicativo.", "It's not that I don't love you, it's that I need time."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-translation-relay",
    "Desafío B2: relevo de traducción",
    "Traduce en ambas direcciones, un tema del B2 tras otro.",
    "9 min",
    [
      sec(
        "Calentamiento",
        "Identifica la trampa antes de traducir: ¿subjuntivo? ¿qué tipo de condicional? ¿estilo indirecto? ¿ser o estar?",
        [
          ["If I had known… → Si hubiera sabido…", "(tipo 3)"],
          ["He told me to wait. → Me dijo que esperara.", "(orden indirecta)"],
        ],
        [
          toEs("I'm looking for a flat that has a balcony.", "Busco un piso que tenga balcón.", "Antecedente desconocido → subjuntivo.", ["Busco un apartamento que tenga balcón.", "Estoy buscando un piso que tenga balcón."]),
        ]
      ),
    ],
    [
      toEs("She said she had already eaten.", "Dijo que ya había comido.", "Estilo indirecto → pluscuamperfecto.", ["Ella dijo que ya había comido."]),
      toEs("If you (tú) had called me, I would have come.", "Si me hubieras llamado, habría venido.", "Tipo 3.", ["Si me hubieras llamado, hubiera venido.", "Si me hubieses llamado, habría venido."]),
      toEs("He became a doctor after ten years of study.", "Se hizo médico después de diez años de estudio.", "Hacerse + profesión.", ["Llegó a ser médico después de diez años de estudio."]),
      toEn("En cuanto sepa los resultados, te llamo.", "As soon as I know the results, I'll call you.", "En cuanto + subjuntivo = as soon as.", ["I'll call you as soon as I know the results."]),
      toEn("Me habla como si fuera su hijo.", "He talks to me as if I were his son.", "Como si + imperfecto de subjuntivo.", ["He speaks to me as if I were his son.", "He talks to me as though I were his son."]),
      toEn("Lo que más me preocupa es la salud de mi madre.", "What worries me most is my mother's health.", "Lo que + énfasis.", []),
      toEn("La ciudad, cuyas calles son estrechas, es preciosa.", "The city, whose streets are narrow, is beautiful.", "Cuyas = whose.", []),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-build-a-sentence",
    "Desafío B2: construye la frase",
    "Frases complejas del B2 con varias cláusulas: ordena cada pieza.",
    "8 min",
    [
      sec(
        "La arquitectura del B2",
        "Las frases del B2 anidan estructuras: una relativa dentro de una condicional, un estilo indirecto con subjuntivo…",
        [
          ["Si encontrara a alguien que hablara ruso, le pediría que me ayudara.", "If I found someone who spoke Russian, I'd ask them to help me."],
        ],
        [
          wo("Me dijo que lo llamara en cuanto supiera algo.", "Estilo indirecto + en cuanto + imperfecto de subjuntivo.", "He told me to call him as soon as I knew anything."),
        ]
      ),
    ],
    [
      wo("Si no hubiera sido por ti, nunca me habría atrevido a cambiar de vida.", "Tipo 3 con si no hubiera sido por.", "If it hadn't been for you, I'd never have dared to change my life."),
      wo("Fue en aquel pueblo donde mi abuelo se hizo carpintero.", "Frase hendida + hacerse.", "It was in that village that my grandfather became a carpenter."),
      wo("Aunque me lo hubieras pedido, no habría podido ayudarte.", "Aunque + pluscuamperfecto de subjuntivo.", "Even if you had asked me, I couldn't have helped you."),
      wo("La casa cuya fachada restauraron está en venta.", "Cuya + relativa.", "The house whose facade they restored is for sale."),
      wo("No creo que haya nadie que lo haga mejor que ella.", "No creer + subjuntivo + antecedente inexistente.", "I don't think there's anyone who does it better than she does."),
      mc(
        "¿Qué frase está bien construida?",
        ["Le pedí que me avisara antes de que se fuera.", "Le pedí que me avisaba antes de que se iba.", "Le pedí que me avise antes de que se fuera ayer.", "Le pedí avisarme que antes de irse."],
        0,
        "Pasado → imperfecto de subjuntivo en ambas cláusulas."
      ),
      fb("Termina la frase.", "___ difícil es encontrar tiempo para todo.", "Lo", "Lo + adjetivo funciona como sustantivo: lo difícil = the hard part."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-subjunctive-gauntlet",
    "Desafío B2: el subjuntivo total",
    "Relativas, adverbiales, concesivas y secuencia de tiempos — doce decisiones sin pistas.",
    "8 min",
    [
      sec(
        "Sin red",
        "Decide modo y tiempo en cada frase. Recuerda: el tiempo del verbo principal manda.",
        [
          ["Quiero que vengas. / Quería que vinieras.", "Present → present; past → imperfect."],
        ],
        [
          fb("Modo y tiempo.", "Buscaban a alguien que ___ chino. (hablar)", "hablara", "Antecedente desconocido en pasado."),
          fb("Modo y tiempo.", "Te lo explicaré para que lo ___. (entender, tú)", "entiendas", "Para que + presente."),
        ]
      ),
    ],
    [
      fb("Modo y tiempo.", "Aunque ___ cansada, fue a la fiesta. (estar; era un hecho)", "estaba", "Hecho conocido → indicativo."),
      fb("Modo y tiempo.", "Me alegré de que ___ el premio. (ganar, tú)", "ganaras", "Pasado → imperfecto."),
      fb("Modo y tiempo.", "Cuando ___ joven, viajaba mucho. (ser, yo)", "era", "Hábito pasado → indicativo."),
      fb("Modo y tiempo.", "Cuando ___ mayor, viajaré mucho. (ser, yo)", "sea", "Futuro → subjuntivo."),
      fb("Modo y tiempo.", "Salimos sin que nadie nos ___. (ver)", "viera", "Sin que + imperfecto (pasado)."),
      fb("Modo y tiempo.", "No es verdad que ___ tanto dinero. (ganar, él)", "gane", "Negación de certeza."),
      fb("Modo y tiempo.", "Es evidente que ___ razón. (tener, tú)", "tienes", "Certeza → indicativo."),
      mc(
        "«Por mucho que ___, no lo conseguirás.»",
        ["insistas", "insistes", "insistirás", "insistías"],
        0,
        "Por mucho que + subjuntivo (concesión)."
      ),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-conditionals-gauntlet",
    "Desafío B2: condicionales de todos los tipos",
    "Tipo 1, tipo 2, tipo 3 y mixtas — elige la estructura según la realidad de la condición.",
    "8 min",
    [
      sec(
        "Cuatro tipos",
        "Tipo 1 (real): si + presente, futuro. Tipo 2 (improbable/irreal): si + imperfecto de subjuntivo, condicional. Tipo 3 (pasado irreal): si + pluscuamperfecto de subjuntivo, condicional perfecto. Mixta: si + pluscuamperfecto, condicional simple.",
        [
          ["Si llueve, me mojaré. / Si lloviera, me mojaría. / Si hubiera llovido, me habría mojado.", "Three degrees of reality."],
        ],
        [
          fb("Tipo 1.", "Si ___ tiempo mañana, te ayudo. (tener, yo)", "tengo", "Real → presente."),
          fb("Tipo 2.", "Si ___ tiempo, te ayudaría. (tener, yo)", "tuviera", "Irreal → imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tipo 3.", "Si ___ tiempo, te habría ayudado. (tener, yo)", "hubiera tenido", "Pasado irreal."),
      fb("Mixta.", "Si hubiera estudiado Derecho, ahora ___ abogado. (ser, yo)", "sería", "Pasado → presente."),
      fb("Tipo 2.", "¿Qué harías si te ___ la lotería? (tocar)", "tocara", "Improbable."),
      fb("Tipo 3.", "Si no ___ el despertador, habría llegado tarde. (sonar)", "hubiera sonado", "Pasado irreal."),
      mt(
        "Relaciona cada condición con su consecuencia.",
        [
          ["Si estudias,", "aprobarás."],
          ["Si estudiaras,", "aprobarías."],
          ["Si hubieras estudiado,", "habrías aprobado."],
          ["Si hubieras estudiado más,", "ahora no estarías tan nervioso."],
        ],
        "Tipo 1, 2, 3 y mixta."
      ),
      mc(
        "«If I were rich, I would have bought that house last year.» (mixta)",
        ["Si fuera rico, habría comprado esa casa el año pasado.", "Si hubiera sido rico, compraría esa casa el año pasado.", "Si sería rico, habría comprado esa casa.", "Si soy rico, habría comprado esa casa."],
        0,
        "Presente irreal → consecuencia pasada."
      ),
      toEs("If you (tú) hadn't helped me, I wouldn't be here now.", "Si no me hubieras ayudado, ahora no estaría aquí.", "Mixta: pasado → presente.", ["Si no me hubieras ayudado, no estaría aquí ahora.", "Si no me hubieses ayudado, ahora no estaría aquí."]),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-reported-speech-gauntlet",
    "Desafío B2: estilo indirecto total",
    "Informaciones, preguntas, órdenes y promesas — transfórmalas todas al estilo indirecto.",
    "8 min",
    [
      sec(
        "Todo lo que cambia",
        "Tiempos (retroceden), pronombres (te → me), referencias (mañana → al día siguiente), órdenes (→ que + subjuntivo), preguntas (→ si / qué / dónde).",
        [
          ["«¿Dónde has estado?» → Me preguntó dónde había estado.", "She asked me where I had been."],
          ["«Ven mañana.» → Me pidió que fuera al día siguiente.", "He asked me to come the next day."],
        ],
        [
          fb("Transforma.", "«Estoy harta». → Dijo que ___ harta.", "estaba", "Presente → imperfecto."),
        ]
      ),
    ],
    [
      fb("Transforma.", "«Lo haré mañana». → Prometió que lo ___ al día siguiente.", "haría", "Futuro → condicional."),
      fb("Transforma.", "«No lo toquéis». → Nos dijo que no lo ___.", "tocáramos", "Orden → imperfecto de subjuntivo."),
      fb("Transforma.", "«¿Has terminado?» → Me preguntó si ___.", "había terminado", "Perfecto → pluscuamperfecto."),
      fb("Transforma.", "«Aquí hace mucho frío». → Comentó que ___ hacía mucho frío.", "allí", "Aquí → allí."),
      mc(
        "«¿Qué quieres cenar?» → en estilo indirecto:",
        ["Me preguntó qué quería cenar.", "Me preguntó que qué quiero cenar ayer.", "Me preguntó si qué quería cenar.", "Me preguntó quería qué cenar."],
        0,
        "Pregunta con qué → qué + imperfecto."
      ),
      ms(
        "¿Qué transformaciones son correctas?",
        ["«Llámame» → Me pidió que la llamara.", "«Iré» → Dijo que iría.", "«Estuve enfermo» → Dijo que había estado enfermo.", "«¿Vienes?» → Preguntó que venía."],
        [0, 1, 2],
        "Pregunta sí/no → preguntó si iba/venía."
      ),
      toEs("They warned us not to swim there.", "Nos advirtieron que no nadáramos allí.", "Advertir (orden) + imperfecto de subjuntivo.", ["Nos advirtieron de que no nadáramos allí.", "Nos avisaron que no nadáramos allí."]),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-ser-estar-change-gauntlet",
    "Desafío B2: ser, estar, haber y los cambios",
    "Los verbos más pequeños y los más engañosos: ser, estar, haber, ponerse, volverse, hacerse, quedarse.",
    "8 min",
    [
      sec(
        "Precisión máxima",
        "Cada verbo tiene su territorio: ser (esencia, eventos), estar (estado, ubicación, resultado), haber (existencia), y los verbos de cambio según duración y voluntad.",
        [
          ["La fiesta es en casa de Ana, que está enfrente. Hay mucha gente y todos se han puesto a bailar.", "The party is at Ana's, which is across the street. There are lots of people and everyone has started dancing."],
        ],
        [
          fb("Completa.", "La boda ___ en la catedral. (evento)", "es", "Evento → ser."),
          fb("Completa.", "La catedral ___ en la plaza mayor.", "está", "Ubicación → estar."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿___ algún problema? Te veo preocupado.", "Hay", "Existencia → hay."),
      fb("Completa.", "Tras el divorcio, ___ muy desconfiado. (volverse, pretérito)", "se volvió", "Cambio de carácter."),
      fb("Completa.", "Se ___ sin batería en mitad de la llamada. (quedar, él, pretérito)", "quedó", "Resultado → quedarse sin."),
      fb("Completa.", "Esta fruta ___ verde; no te la comas.", "está", "Sin madurar → estar verde."),
      mc(
        "«He's a very lively person, but today he's quiet.»",
        ["Es una persona muy animada, pero hoy está callado.", "Está una persona muy animada, pero hoy es callado.", "Es una persona muy animada, pero hoy es callado.", "Hay una persona muy animada, pero hoy está callado."],
        0,
        "Rasgo → ser; estado del día → estar."
      ),
      mt(
        "Relaciona cada cambio con el verbo adecuado.",
        [
          ["rojo de vergüenza", "ponerse"],
          ["socio del club", "hacerse"],
          ["huérfano", "quedarse"],
          ["en un símbolo nacional", "convertirse"],
        ],
        "Rápido, voluntario, resultado, transformación."
      ),
      toEs("There was an accident and the road is closed.", "Hubo un accidente y la carretera está cortada.", "Hubo (evento) + está (resultado).", ["Ha habido un accidente y la carretera está cortada.", "Hubo un accidente y la carretera está cerrada."]),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-mexico-city-1",
    "Desafío B2: una semana en Ciudad de México (1)",
    "Laura, periodista española, pasa una semana en la capital mexicana. Sigue sus primeros días.",
    "8 min",
    [
      sec(
        "Lunes: la llegada",
        "Laura escribe a su editor.",
        [
          ["Llegué anoche. Me recomendaron que no tomara un taxi en la calle, así que pedí uno por la app.", "I arrived last night. They advised me not to take a street taxi, so I ordered one through the app."],
          ["La ciudad es mucho más grande de lo que imaginaba.", "The city is much bigger than I imagined."],
        ],
        [
          fb("Completa.", "Nunca ___ una ciudad tan enorme. (ver, yo, pluscuamperfecto)", "había visto", "Pluscuamperfecto."),
        ]
      ),
      sec(
        "Martes: la entrevista",
        "Laura entrevista a una artista cuyo mural se ha hecho famoso.",
        [
          ["La artista, cuyo mural cubre todo un edificio, me dijo que había tardado dos años en pintarlo.", "The artist, whose mural covers an entire building, told me she had taken two years to paint it."],
        ],
        [
          fb("Completa.", "Me explicó que quería que la gente ___ en el mural su propia historia. (ver)", "viera", "Querer (pasado) + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Miércoles: el mercado.", "Me encantó que los vendedores me ___ probar todo. (dejar)", "dejaran", "Encantar (pasado) + imperfecto."),
      fb("Miércoles: el mercado.", "Si ___ más espacio en la maleta, me llevaría todas las artesanías. (tener, yo)", "tuviera", "Tipo 2."),
      fb("Miércoles: el mercado.", "Busco una salsa que no ___ demasiado picante. (ser)", "sea", "Antecedente desconocido."),
      mc(
        "¿Qué significa «¡Qué padre!» en México?",
        ["¡Qué genial!", "¡Qué papá tan bueno!", "¡Qué aburrido!", "¡Qué caro!"],
        0,
        "Padre (adjetivo coloquial mexicano) = genial."
      ),
      mt(
        "Relaciona cada mexicanismo con su equivalente general.",
        [
          ["el camión", "el autobús"],
          ["la chamba", "el trabajo"],
          ["¿mande?", "¿perdón? / ¿qué?"],
          ["ahorita", "ahora mismo / en un rato"],
        ],
        "Vocabulario de México."
      ),
      toEs("If I had known the food was so good, I would have come earlier.", "Si hubiera sabido que la comida era tan buena, habría venido antes.", "Tipo 3.", ["Si hubiera sabido que la comida era tan rica, habría venido antes.", "Si hubiese sabido que la comida era tan buena, habría venido antes."]),
      wo("Fue en el mercado de Coyoacán donde probé el mejor mole.", "Frase hendida de lugar.", "It was at the Coyoacán market that I tried the best mole."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-mexico-city-2",
    "Desafío B2: una semana en Ciudad de México (2)",
    "La semana de Laura termina: un temblor, un reportaje y una despedida.",
    "8 min",
    [
      sec(
        "Jueves: el temblor",
        "Un pequeño sismo sorprende a Laura en el hotel.",
        [
          ["Estaba escribiendo cuando empezó a sonar la alarma sísmica.", "I was writing when the earthquake alarm started to sound."],
          ["Todos salieron a la calle como si fuera un simulacro.", "Everyone went out into the street as if it were a drill."],
        ],
        [
          fb("Completa.", "El recepcionista nos pidió que ___ la calma. (mantener)", "mantuviéramos", "Pedir (pasado) + imperfecto; tilde en nosotros."),
        ]
      ),
      sec(
        "Viernes: el reportaje",
        "Laura resume sus entrevistas.",
        [
          ["Los vecinos me contaron que el barrio se había convertido en un centro cultural.", "The residents told me the neighborhood had become a cultural hub."],
        ],
        [
          fb("Completa.", "Una vecina me aseguró que antes no ___ ni una galería. (haber)", "había", "Haber impersonal en imperfecto."),
        ]
      ),
    ],
    [
      fb("Sábado: la despedida.", "Mis nuevos amigos me hicieron prometer que ___. (volver, yo, condicional)", "volvería", "Prometer que + condicional."),
      fb("Sábado: la despedida.", "Ojalá ___ quedarme un mes más. (poder, yo)", "pudiera", "Ojalá + imperfecto (deseo irreal)."),
      fb("Sábado: la despedida.", "Lo que más echaré de menos ___ la gente.", "es", "Lo que + ser (énfasis)."),
      mc(
        "«I'll write the article as soon as I get to Madrid.»",
        ["Escribiré el artículo en cuanto llegue a Madrid.", "Escribiré el artículo en cuanto llegaré a Madrid.", "Escribiría el artículo en cuanto llegue a Madrid ayer.", "Escribo el artículo en cuanto llegara a Madrid."],
        0,
        "En cuanto + subjuntivo (futuro)."
      ),
      ms(
        "¿Qué frases del reportaje son correctas?",
        ["La colonia Roma se ha puesto de moda.", "Los precios se han vuelto altísimos.", "Hay artistas cuyas obras se venden en Europa.", "El barrio es muy cambiado."],
        [0, 1, 2],
        "Resultado → el barrio está muy cambiado (o ha cambiado mucho)."
      ),
      toEs("It was the most intense week of my life.", "Fue la semana más intensa de mi vida.", "Superlativo con de.", ["Ha sido la semana más intensa de mi vida."]),
      wo("Aunque solo estuve siete días, me sentí como en casa.", "Aunque + indicativo (hecho).", "Although I was only there seven days, I felt at home."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-opinion-essay",
    "Desafío B2: el ensayo de opinión",
    "Escribe un ensayo breve sobre el turismo masivo: tesis, argumentos, concesión y conclusión.",
    "8 min",
    [
      sec(
        "La estructura",
        "Tesis (Considero que…), argumentos (En primer lugar… Además…), concesión (Si bien es cierto que…), refutación (No obstante…), conclusión (En definitiva…).",
        [
          ["Considero que el turismo masivo perjudica a las ciudades históricas.", "I believe mass tourism harms historic cities."],
          ["Si bien es cierto que genera empleo, no es menos cierto que expulsa a los vecinos.", "While it's true that it creates jobs, it's equally true that it drives out residents."],
          ["En definitiva, es necesario que se regule.", "In short, it needs to be regulated."],
        ],
        [
          fb("Completa la tesis.", "Considero que el turismo ___ regularse. (deber)", "debe", "Considerar que + indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "No creo que prohibir el turismo ___ la solución. (ser)", "sea", "No creer + subjuntivo."),
      fb("Completa.", "Si los ayuntamientos no ___, los barrios perderán su identidad. (actuar)", "actúan", "Tipo 1."),
      fb("Completa.", "Es preciso que ___ un equilibrio entre economía y convivencia. (buscarse)", "se busque", "Es preciso que + subjuntivo (se pasivo)."),
      mt(
        "Relaciona cada conector con su función en el ensayo.",
        [
          ["Considero que", "tesis"],
          ["Si bien es cierto que", "concesión"],
          ["No obstante", "refutación"],
          ["En definitiva", "conclusión"],
        ],
        "Estructura del ensayo de opinión."
      ),
      mc(
        "¿Qué frase de conclusión es más adecuada?",
        ["Por todo lo expuesto, resulta urgente adoptar medidas.", "Y ya está, eso es todo.", "Bueno, pues nada.", "Vale, se acabó."],
        0,
        "Registro formal."
      ),
      toEs("It's the residents who suffer the consequences most.", "Son los vecinos quienes más sufren las consecuencias.", "Frase hendida.", ["Son los vecinos los que más sufren las consecuencias."]),
      wo("Lo que está en juego no es solo la economía, sino la identidad de la ciudad.", "No solo… sino…", "What's at stake is not only the economy but the city's identity."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-exit-ticket",
    "Billete de salida del B2: ¿listo para el C1?",
    "La última lección del B2: diez destrezas que el C1 da por sabidas, una pregunta cada una.",
    "9 min",
    [
      sec(
        "Las diez destrezas",
        "(1) relativas (2) adverbiales (3) imperfecto de subjuntivo (4) tipo 2 (5) tipo 3 (6) estilo indirecto (7) ser/estar/haber (8) verbos de cambio (9) conectores (10) énfasis y cuyo.",
        [
          ["¡Rumbo al C1!", "On to C1!"],
        ],
        [
          fb("Destreza 1.", "No conozco a nadie que ___ tan bien como tú. (bailar)", "baile", "Antecedente inexistente."),
          fb("Destreza 2.", "Llámame en cuanto ___. (llegar, tú)", "llegues", "En cuanto + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Destreza 3.", "Mis padres querían que ___ Medicina. (estudiar, yo)", "estudiara", "Imperfecto de subjuntivo."),
      fb("Destreza 4.", "Si ___ más tiempo, aprendería a tocar el piano. (tener, yo)", "tuviera", "Tipo 2."),
      fb("Destreza 5.", "Si me lo ___ dicho, te habría ayudado. (haber, tú)", "hubieras", "Tipo 3."),
      fb("Destreza 6.", "Me dijo que me ___ al día siguiente. (llamar, él)", "llamaría", "Futuro → condicional."),
      fb("Destreza 7.", "El concierto ___ en el estadio.", "es", "Evento → ser."),
      fb("Destreza 8.", "Al oír su nombre, ___ nervioso. (ponerse, pretérito)", "se puso", "Cambio momentáneo."),
      fb("Destreza 9.", "Es caro; ___, merece la pena. (nevertheless)", "no obstante", "Contraste formal."),
      fb("Destreza 10.", "Es un pintor ___ obras están en el Louvre.", "cuyas", "Cuyas obras."),
    ]
  ),
  // ---- Themed spiral reviews between the reading stories (lessons 65+). ----
  // Each takes the theme of the story it follows and drills mixed B2
  // grammar through it -- never depending on the story's plot details.
  L(
    "chef-against-family-wishes",
    "b2r-tema-tradicion-innovacion",
    "Repaso temático: tradición o innovación",
    "Romper con lo que se espera de ti: expectativas familiares, riesgos y decisiones — con el subjuntivo del B2.",
    "7 min",
    [
      sec(
        "Lo que esperaban de ella",
        "Las expectativas en pasado exigen imperfecto de subjuntivo; las hipótesis, si + imperfecto de subjuntivo.",
        [
          ["Su familia esperaba que continuara con el restaurante tradicional.", "Her family expected her to continue the traditional restaurant."],
          ["Si hubiera seguido sus consejos, nunca habría descubierto su propio estilo.", "If she'd followed their advice, she'd never have found her own style."],
        ],
        [
          fb("Completa.", "Sus padres no querían que ___ la receta de la abuela. (cambiar, ella)", "cambiara", "Querer (pasado) + imperfecto de subjuntivo."),
          fb("Completa.", "Busca un sabor que nadie ___ probado antes. (haber)", "haya", "Antecedente inexistente + perfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque ___ críticas, no pensaba rendirse. (recibir, ella; hipótesis)", "recibiera", "Aunque + imperfecto de subjuntivo (hipotético en el pasado)."),
      fb("Completa.", "Con los años, su restaurante ___ en un referente. (convertirse, perfecto)", "se ha convertido", "Convertirse en."),
      fb("Completa.", "Fue su abuela ___ la animó a arriesgarse.", "quien", "Frase hendida."),
      mc(
        "«If I had listened to them, I would be unhappy now.»",
        ["Si los hubiera escuchado, ahora sería infeliz.", "Si los escuchara, ahora habría sido infeliz.", "Si los habría escuchado, ahora sería infeliz.", "Si los escucho, ahora sería infeliz."],
        0,
        "Mixta: pasado → presente."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Innovar no significa olvidar de dónde vienes.", "Me alegra que por fin te hayas atrevido.", "Nadie creía que tuviera éxito.", "Ojalá mis padres me apoyarían."],
        [0, 1, 2],
        "Ojalá + subjuntivo: me apoyaran."
      ),
      toEs("Tradition is not something you keep, but something you transform.", "La tradición no es algo que se guarda, sino algo que se transforma.", "No… sino… + se impersonal.", ["La tradición no es algo que se conserva, sino algo que se transforma."]),
      wo("Lo que para unos era una traición, para otros era una evolución.", "Lo que + imperfecto; contraste con para unos / para otros.", "What was a betrayal for some was an evolution for others."),
    ]
  ),
  L(
    "architect-saves-historic-building",
    "b2r-tema-patrimonio",
    "Repaso temático: salvar el patrimonio",
    "Edificios históricos, demoliciones y protestas — la voz pasiva, los conectores y la argumentación.",
    "7 min",
    [
      sec(
        "Argumentar para conservar",
        "Los textos sobre patrimonio combinan la pasiva (fue construido, será demolido) con conectores de contraste y consecuencia.",
        [
          ["El edificio fue construido en 1890 por un arquitecto modernista.", "The building was built in 1890 by a modernist architect."],
          ["Si bien necesita reformas, su valor histórico es incalculable.", "Although it needs renovations, its historical value is incalculable."],
        ],
        [
          fb("Completa.", "Está previsto que el edificio ___ demolido en otoño. (ser)", "sea", "Está previsto que + subjuntivo."),
          fb("Completa.", "La fachada, ___ azulejos son originales, debe protegerse.", "cuyos", "Cuyos concuerda con azulejos."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es inaceptable que se ___ un edificio con tanta historia. (derribar)", "derribe", "Es inaceptable que + subjuntivo."),
      fb("Completa.", "Si lo derriban, la ciudad ___ parte de su memoria. (perder, futuro)", "perderá", "Tipo 1."),
      fb("Completa.", "Si no se hubieran movilizado los vecinos, ya lo ___ derribado. (haber, ellos)", "habrían", "Tipo 3."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la fachada", "facade"],
          ["el derribo", "demolition"],
          ["la restauración", "restoration"],
          ["el patrimonio", "heritage"],
        ],
        "Vocabulario de arquitectura y patrimonio."
      ),
      mc(
        "«The building, which had been abandoned for decades, will be turned into a library.»",
        ["El edificio, que llevaba décadas abandonado, se convertirá en una biblioteca.", "El edificio, que llevaba décadas abandonado, se pondrá en una biblioteca.", "El edificio, quien llevaba décadas abandonado, se convertirá en biblioteca.", "El edificio, que llevaba décadas abandonado, se hará una biblioteca en."],
        0,
        "Relativa explicativa + convertirse en."
      ),
      toEs("Despite the protests, the demolition was approved.", "A pesar de las protestas, se aprobó el derribo.", "A pesar de + sustantivo; se pasivo.", ["Pese a las protestas, se aprobó el derribo.", "A pesar de las protestas, el derribo fue aprobado."]),
      wo("Lo que se pierde al derribar un edificio no se puede reconstruir.", "Lo que + se impersonal.", "What is lost when a building is torn down can't be rebuilt."),
    ]
  ),
  L(
    "small-town-doctor-dilemma",
    "b2r-tema-medicina-rural",
    "Repaso temático: la medicina rural",
    "El único médico de un pueblo, sus dilemas y sus pacientes — deber, riesgo y decisiones en condicional.",
    "7 min",
    [
      sec(
        "Deber y riesgo",
        "Los dilemas se expresan con condicionales (¿qué harías si…?) y con expresiones de necesidad (es imprescindible que…).",
        [
          ["¿Qué harías si fueras el único médico en cien kilómetros?", "What would you do if you were the only doctor for a hundred kilometers?"],
          ["Es imprescindible que los pacientes graves sean trasladados cuanto antes.", "It's essential that serious patients be transferred as soon as possible."],
        ],
        [
          fb("Completa.", "Si ___ un hospital más cerca, muchos vecinos vivirían más tranquilos. (haber)", "hubiera", "Tipo 2 con haber."),
          fb("Completa.", "El médico pidió que nadie ___ del pueblo hasta que se aclarara la situación. (salir)", "saliera", "Pedir (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Los síntomas ___ muy extraños; nunca había visto nada igual. (ser, imperfecto)", "eran", "Descripción en el pasado."),
      fb("Completa.", "Tras meses de trabajo sin descanso, ___ agotado. (quedarse, pretérito)", "se quedó", "Resultado."),
      fb("Completa.", "En cuanto ___ los resultados del laboratorio, sabremos qué hacer. (llegar)", "lleguen", "En cuanto + subjuntivo."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el ambulatorio", "health center"],
          ["el contagio", "contagion"],
          ["la cuarentena", "quarantine"],
          ["la guardia", "on-call shift"],
        ],
        "Vocabulario médico."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Si no hubiera actuado rápido, la situación habría empeorado.", "Es necesario que todos se vacunen.", "El paciente está grave, pero estable.", "Hubieron muchos contagios."],
        [0, 1, 2],
        "Haber impersonal: hubo muchos contagios."
      ),
      toEs("Nobody had told him that the job would be so hard.", "Nadie le había dicho que el trabajo sería tan duro.", "Pluscuamperfecto + condicional.", ["Nadie le había dicho que el trabajo iba a ser tan duro."]),
      wo("A pesar del cansancio, atendió a todos los pacientes que llegaron.", "A pesar de + sustantivo; relativa en pretérito.", "Despite his exhaustion, he saw every patient who came in."),
    ]
  ),
  L(
    "siblings-dividing-inheritance",
    "b2r-tema-herencia",
    "Repaso temático: repartir una herencia",
    "Objetos con memoria, desacuerdos entre hermanos y decisiones difíciles — el B2 en un conflicto familiar.",
    "7 min",
    [
      sec(
        "¿Qué hacemos con la casa?",
        "Proponer (propongo que + subjuntivo), discrepar (no creo que + subjuntivo), conceder (aunque + indicativo/subjuntivo).",
        [
          ["Propongo que vendamos la casa y repartamos el dinero.", "I propose we sell the house and split the money."],
          ["No creo que mamá hubiera querido eso.", "I don't think Mom would have wanted that."],
        ],
        [
          fb("Completa.", "Prefiero que la casa se ___ en la familia. (quedar)", "quede", "Preferir que + subjuntivo."),
          fb("Completa.", "Aunque ___ mucho dinero, no la vendería. (valer, hipótesis)", "valiera", "Aunque + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mamá siempre nos pedía que no ___ por dinero. (pelearse, nosotros)", "nos peleáramos", "Pedir (pasado) + imperfecto."),
      fb("Completa.", "El reloj, ___ dueño original era el abuelo, es para ti.", "cuyo", "Cuyo dueño."),
      fb("Completa.", "Si mamá ___ viva, esto no estaría pasando. (estar)", "estuviera", "Tipo 2."),
      mc(
        "«It's the piano that I want to keep, not the house.»",
        ["Es el piano lo que quiero conservar, no la casa.", "Es el piano quien quiero conservar, no la casa.", "Es el piano que lo quiero conservar.", "El piano es lo quiero conservar, no la casa."],
        0,
        "Frase hendida con lo que."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["No es que no quiera la casa, es que no puedo mantenerla.", "Ojalá hubiéramos hablado de esto antes.", "Fue ella quien cuidó de mamá.", "Me dijo que quiere vender ayer."],
        [0, 1, 2],
        "Estilo indirecto: me dijo que quería vender."
      ),
      toEs("We should have talked about it while she was alive.", "Deberíamos haberlo hablado cuando estaba viva.", "Deberíamos haber + participio.", ["Tendríamos que haberlo hablado cuando estaba viva.", "Deberíamos haber hablado de ello cuando estaba viva."]),
      wo("Hay cosas cuyo valor no se puede medir en dinero.", "Cuyo + se impersonal.", "There are things whose value can't be measured in money."),
    ]
  ),
  L(
    "musician-two-paths",
    "b2r-tema-dos-caminos",
    "Repaso temático: estabilidad o pasión",
    "Un trabajo seguro frente a un sueño arriesgado — hipótesis, consejos y consecuencias.",
    "7 min",
    [
      sec(
        "Pros y contras",
        "Las grandes decisiones se piensan en condicional: si aceptara…, si rechazara…",
        [
          ["Si aceptara el puesto en la orquesta, tendría un sueldo fijo.", "If I accepted the orchestra position, I'd have a fixed salary."],
          ["Pero si lo rechazara, podría ir de gira con mi banda.", "But if I turned it down, I could go on tour with my band."],
        ],
        [
          fb("Completa.", "Si ___ la gira, quizá me arrepentiría toda la vida. (rechazar, yo)", "rechazara", "Tipo 2."),
          fb("Completa.", "Yo que tú, ___ lo que te hace feliz. (elegir)", "elegiría", "Yo que tú + condicional."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis padres prefieren que ___ algo seguro. (tener, yo)", "tenga", "Preferir que + subjuntivo."),
      fb("Completa.", "Nadie puede decidir por ti, a menos que tú se lo ___. (permitir)", "permitas", "A menos que + subjuntivo."),
      fb("Completa.", "Si hubiera elegido la seguridad, nunca ___ el mundo. (conocer, yo)", "habría conocido", "Tipo 3."),
      ms(
        "¿Qué argumentos favorecen el puesto en la orquesta?",
        ["un sueldo fijo cada mes", "la libertad de crear", "vacaciones pagadas", "la emoción de las giras"],
        [0, 2],
        "Estabilidad (sueldo, vacaciones) frente a pasión (libertad, giras)."
      ),
      mc(
        "«Whatever you decide, I'll support you.»",
        ["Decidas lo que decidas, te apoyaré.", "Decides lo que decides, te apoyaré.", "Decidirás lo que decidas, te apoyo.", "Lo que decides, te apoyaría."],
        0,
        "Estructura reduplicativa: decidas lo que decidas."
      ),
      toEs("It's not the money that worries me, but the time.", "No es el dinero lo que me preocupa, sino el tiempo.", "Frase hendida con no… sino.", ["Lo que me preocupa no es el dinero, sino el tiempo."]),
      wo("Nunca sabremos qué habría pasado si hubiera elegido el otro camino.", "Pregunta indirecta + tipo 3.", "We'll never know what would have happened if he'd chosen the other path."),
    ]
  ),
  L(
    "teacher-last-year",
    "b2r-tema-jubilacion",
    "Repaso temático: el último año en el aula",
    "Jubilación, legado y despedidas — recuerdos, deseos y balances con el B2.",
    "7 min",
    [
      sec(
        "Balance de una carrera",
        "Mirar atrás: lo que ha cambiado (perfecto), lo que era distinto (imperfecto), lo que habría hecho diferente (condicional perfecto).",
        [
          ["En treinta años, la enseñanza ha cambiado muchísimo.", "In thirty years, teaching has changed enormously."],
          ["Cuando empecé, no había ordenadores en las aulas.", "When I started, there were no computers in classrooms."],
          ["Quizá habría sido más paciente con algunos alumnos.", "Perhaps I would have been more patient with some students."],
        ],
        [
          fb("Completa.", "Espero que mis alumnos ___ de mí algo más que fechas y fórmulas. (recordar)", "recuerden", "Esperar que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis antiguos alumnos me dijeron que nunca me ___. (olvidar, condicional)", "olvidarían", "Estilo indirecto: futuro → condicional."),
      fb("Completa.", "Ojalá ___ tenido más tiempo para cada alumno. (haber, yo)", "hubiera", "Ojalá + pluscuamperfecto."),
      fb("Completa.", "Con los años, ___ más tolerante. (volverse, perfecto)", "me he vuelto", "Cambio de carácter."),
      mc(
        "«What I'll miss most is the students' laughter.»",
        ["Lo que más echaré de menos es la risa de los alumnos.", "El que más echaré de menos son la risa de los alumnos.", "Lo que más echaré de menos serán los alumnos risa.", "Lo más que echaré de menos es la risa."],
        0,
        "Lo que + énfasis."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me pidieron que diera un discurso.", "Fue en este colegio donde di mi primera clase.", "Cuando me jubile, viajaré.", "Aunque me jubilo, seguiré enseñando si me necesitan mañana ayer."],
        [0, 1, 2],
        "La última es incoherente."
      ),
      toEs("If I had to choose again, I would be a teacher again.", "Si tuviera que elegir de nuevo, volvería a ser profesora.", "Tipo 2 + volver a.", ["Si tuviera que elegir otra vez, volvería a ser profesor.", "Si tuviera que elegir de nuevo, sería profesora otra vez."]),
      wo("No hay mayor recompensa que ver crecer a tus alumnos.", "No hay mayor… que + infinitivo.", "There's no greater reward than watching your students grow."),
    ]
  ),
  L(
    "astronaut-return-ordinary-life",
    "b2r-tema-volver-a-la-rutina",
    "Repaso temático: volver a la vida normal",
    "Después de una experiencia extraordinaria, la rutina parece extraña — contrastes, como si y verbos de cambio.",
    "7 min",
    [
      sec(
        "Readaptarse",
        "Como si + imperfecto de subjuntivo describe la sensación de extrañeza; los verbos de cambio, la transformación.",
        [
          ["Caminaba por la calle como si fuera la primera vez.", "I walked down the street as if it were the first time."],
          ["Desde que volví, me he vuelto más consciente de las cosas pequeñas.", "Since I came back, I've become more aware of small things."],
        ],
        [
          fb("Completa.", "Todo me parecía tan lento, como si el tiempo se ___ detenido. (haber)", "hubiera", "Como si + pluscuamperfecto de subjuntivo."),
          fb("Completa.", "Me costaba creer que ___ en casa de nuevo. (estar, yo)", "estuviera", "Costar creer que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Antes del viaje, nunca ___ en lo frágil que es la Tierra. (pensar, pluscuamperfecto)", "había pensado", "Pluscuamperfecto."),
      fb("Completa.", "Si no hubiera ido al espacio, no ___ el planeta de la misma manera. (ver, yo; ahora)", "vería", "Mixta."),
      fb("Completa.", "Mi familia me pidió que les ___ todo con detalle. (contar)", "contara", "Pedir (pasado) + imperfecto."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["echar de menos la ingravidez", "to miss weightlessness"],
          ["readaptarse", "to readjust"],
          ["sentirse fuera de lugar", "to feel out of place"],
          ["recuperar la rutina", "to get back into the routine"],
        ],
        "Vocabulario de la readaptación."
      ),
      mc(
        "«It's as if I had been away for years.»",
        ["Es como si hubiera estado fuera durante años.", "Es como si he estado fuera durante años.", "Es como si estaría fuera durante años.", "Es como si estuve fuera durante años."],
        0,
        "Como si + pluscuamperfecto de subjuntivo."
      ),
      toEs("Nobody understood what I had felt up there.", "Nadie entendía lo que había sentido allí arriba.", "Lo que + pluscuamperfecto.", ["Nadie comprendía lo que yo había sentido allí arriba."]),
      wo("Lo más difícil no fue irse, sino volver.", "Lo más + adjetivo + no… sino.", "The hardest part wasn't leaving but coming back."),
    ]
  ),
  L(
    "rower-comeback-injury",
    "b2r-tema-lesion-y-vuelta",
    "Repaso temático: volver tras una lesión",
    "Rehabilitación, paciencia y competición — conjunciones temporales, condiciones y verbos de cambio.",
    "7 min",
    [
      sec(
        "El plan de recuperación",
        "Los plazos de recuperación usan conjunciones con subjuntivo: hasta que, antes de que, en cuanto, siempre que.",
        [
          ["No podrás competir hasta que el hombro esté totalmente curado.", "You won't be able to compete until your shoulder is fully healed."],
          ["En cuanto el médico te dé el alta, volverás al agua.", "As soon as the doctor discharges you, you'll go back to the water."],
        ],
        [
          fb("Completa.", "Puedes entrenar siempre que no ___ dolor. (sentir, tú)", "sientas", "Siempre que (condición) + subjuntivo."),
          fb("Completa.", "Tienes que parar antes de que la lesión ___. (empeorar)", "empeore", "Antes de que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera descansado más, no me ___ lesionado. (haber, yo)", "habría", "Tipo 3."),
      fb("Completa.", "Tras la operación, ___ muy impaciente. (ponerse, pretérito)", "se puso", "Estado emocional momentáneo."),
      fb("Completa.", "Su entrenadora le dijo que ___ paciencia. (tener, ella)", "tuviera", "Orden en estilo indirecto."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la rehabilitación", "rehabilitation"],
          ["dar el alta", "to discharge (medically)"],
          ["la recaída", "relapse"],
          ["el fisioterapeuta", "physical therapist"],
        ],
        "Vocabulario deportivo y médico."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Por mucho que entrenes, necesitas descansar.", "Volvió a competir como si nada hubiera pasado.", "Cuando esté recuperada, lo intentaré.", "Hasta que no me recupere, no compito mañana ayer."],
        [0, 1, 2],
        "La última es incoherente."
      ),
      toEs("It was her patience that allowed her to return.", "Fue su paciencia lo que le permitió volver.", "Frase hendida con lo que.", ["Fue su paciencia la que le permitió volver."]),
      wo("Aunque tarde meses, volveré a remar con el equipo.", "Aunque + subjuntivo (hipótesis futura).", "Even if it takes months, I'll row with the team again."),
    ]
  ),
  L(
    "photographer-disappearing-tradition",
    "b2r-tema-oficios-perdidos",
    "Repaso temático: los oficios que desaparecen",
    "Artesanos, técnicas antiguas y el paso del tiempo — relativas, pasiva y deseos.",
    "7 min",
    [
      sec(
        "Documentar lo que se va",
        "Buscar a alguien que todavía sepa un oficio (subjuntivo) y describir a quien lo sabe (indicativo).",
        [
          ["Busco artesanos que todavía trabajen el cuero a mano.", "I'm looking for artisans who still work leather by hand."],
          ["Encontré a un anciano que llevaba sesenta años haciendo cestas.", "I found an old man who had been making baskets for sixty years."],
        ],
        [
          fb("Completa.", "Quedan pocos maestros que ___ enseñar este oficio. (saber)", "sepan", "Antecedente indeterminado → subjuntivo."),
          fb("Completa.", "Este oficio ___ transmitido de padres a hijos durante siglos. (ser, perfecto)", "ha sido", "Pasiva con ser en perfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá los jóvenes ___ interés por estas técnicas. (mostrar)", "mostraran", "Ojalá + imperfecto (deseo poco probable)."),
      fb("Completa.", "Si nadie lo aprende, el oficio ___ con él. (desaparecer, futuro)", "desaparecerá", "Tipo 1."),
      fb("Completa.", "El taller, ___ herramientas tienen cien años, parece un museo.", "cuyas", "Cuyas herramientas."),
      mc(
        "«He works as if he had all the time in the world.»",
        ["Trabaja como si tuviera todo el tiempo del mundo.", "Trabaja como si tiene todo el tiempo del mundo.", "Trabaja como si tendría todo el tiempo del mundo.", "Trabaja como si tenga todo el tiempo del mundo."],
        0,
        "Como si + imperfecto de subjuntivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Es una lástima que se pierdan estas técnicas.", "No hay nadie en el pueblo que lo sepa hacer.", "Fue su abuelo quien le enseñó.", "El oficio se ha convertido de un lujo."],
        [0, 1, 2],
        "Convertirse en: se ha convertido en un lujo."
      ),
      toEs("When he retires, nobody will make these pieces anymore.", "Cuando se jubile, ya nadie hará estas piezas.", "Cuando + subjuntivo (futuro).", ["Cuando se retire, ya nadie hará estas piezas.", "Cuando se jubile, nadie hará ya estas piezas."]),
      wo("Cada pieza que sale de sus manos cuenta una historia.", "Relativa con que.", "Every piece that comes out of his hands tells a story."),
    ]
  ),
  L(
    "expat-cultural-identity",
    "b2r-tema-identidad-dos-paises",
    "Repaso temático: entre dos países",
    "Crecer entre dos culturas: pertenencia, idiomas y nostalgia — con hipótesis, como si y verbos de cambio.",
    "7 min",
    [
      sec(
        "¿De dónde eres?",
        "Hablar de identidad mezclada: me siento como si…, si hubiera crecido en…, me he vuelto…",
        [
          ["En España me siento como si fuera extranjera, y en Argentina también.", "In Spain I feel as if I were a foreigner, and in Argentina too."],
          ["Si hubiera crecido en un solo país, quizá no me haría estas preguntas.", "If I had grown up in one country, maybe I wouldn't ask myself these questions."],
        ],
        [
          fb("Completa.", "Me miran como si no ___ de aquí. (ser, yo)", "fuera", "Como si + imperfecto de subjuntivo."),
          fb("Completa.", "Con los años, ___ más consciente de mis raíces. (hacerse, perfecto)", "me he hecho", "Hacerse + adjetivo (proceso)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis padres querían que ___ los dos idiomas. (hablar, yo)", "hablara", "Querer (pasado) + imperfecto."),
      fb("Completa.", "No hay ningún lugar donde me ___ completamente en casa. (sentir)", "sienta", "Antecedente inexistente."),
      fb("Completa.", "Si pudiera elegir, ___ entre los dos países. (vivir, yo)", "viviría", "Tipo 2."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["sentirse dividido", "to feel torn"],
          ["las raíces", "roots"],
          ["el desarraigo", "rootlessness"],
          ["pertenecer a", "to belong to"],
        ],
        "Vocabulario de identidad."
      ),
      mc(
        "«It's not that I don't love Spain, it's that I miss Argentina.»",
        ["No es que no quiera a España, es que echo de menos Argentina.", "No es que no quiero a España, es que echo de menos Argentina.", "No es que no quisiera a España, es que echaba de menos mañana.", "No es no quiera a España, que echo de menos Argentina."],
        0,
        "No es que + subjuntivo, es que + indicativo."
      ),
      toEs("Wherever I live, I'll always be a bit of both.", "Viva donde viva, siempre seré un poco de los dos.", "Estructura reduplicativa con subjuntivo.", ["Viva donde viva, siempre seré un poco de ambos lugares."]),
      wo("Lo que antes era una carga ahora se ha convertido en mi mayor riqueza.", "Lo que + imperfecto + convertirse en.", "What used to be a burden has now become my greatest asset."),
    ]
  ),
  L(
    "grandmother-secret-talent",
    "b2r-tema-secretos-familia",
    "Repaso temático: los secretos de familia",
    "Descubrir el pasado oculto de alguien cercano — pluscuamperfecto, estilo indirecto y sorpresa.",
    "7 min",
    [
      sec(
        "El descubrimiento",
        "Contar un descubrimiento combina el pluscuamperfecto (lo que había pasado) con reacciones en subjuntivo.",
        [
          ["Descubrimos que la abuela había expuesto sus cuadros en París.", "We discovered Grandma had exhibited her paintings in Paris."],
          ["Nos sorprendió que nunca nos lo hubiera contado.", "It surprised us that she'd never told us."],
        ],
        [
          fb("Completa.", "Nadie sabía que ___ tanto talento. (tener, ella; imperfecto)", "tenía", "Saber que + indicativo."),
          fb("Completa.", "Me dolió que nos lo ___ ocultado tantos años. (haber, ella)", "hubiera", "Doler (pasado) + pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Nos contó que ___ de pintar cuando se casó. (dejar, pluscuamperfecto)", "había dejado", "Estilo indirecto."),
      fb("Completa.", "Si no hubiéramos encontrado aquella caja, nunca lo ___. (saber, nosotros)", "habríamos sabido", "Tipo 3."),
      fb("Completa.", "Es increíble que alguien tan tímida ___ sido tan famosa. (haber)", "haya", "Es increíble que + perfecto de subjuntivo."),
      mc(
        "«Why didn't you ever tell us?» → estilo indirecto:",
        ["Le preguntamos por qué nunca nos lo había contado.", "Le preguntamos por qué nunca nos lo contara.", "Le preguntamos que por qué nunca nos lo cuenta ayer.", "Le preguntamos por qué nunca se lo había contado a ella."],
        0,
        "Pregunta con por qué + pluscuamperfecto."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue en el desván donde encontramos los cuadros.", "Nos pidió que no se lo dijéramos a nadie.", "Ojalá la hubiéramos conocido de joven.", "Los cuadros eran pintados por ella."],
        [0, 1, 2],
        "Pasiva con ser en pretérito: fueron pintados por ella."
      ),
      toEs("She had given up her dream so that her children could study.", "Había renunciado a su sueño para que sus hijos pudieran estudiar.", "Pluscuamperfecto + para que + imperfecto de subjuntivo.", ["Había renunciado a su sueño para que sus hijos pudiesen estudiar."]),
      wo("Nunca imaginamos que detrás de aquella mujer tranquila hubiera una artista.", "Imaginar (negado) + subjuntivo.", "We never imagined there was an artist behind that quiet woman."),
    ]
  ),
  L(
    "startup-founder-ethical-dilemma",
    "b2r-tema-etica-datos",
    "Repaso temático: la ética de los datos",
    "Privacidad, inversores y dilemas morales — condicionales, concesiones y argumentación formal.",
    "7 min",
    [
      sec(
        "El dilema",
        "Plantear un dilema: si vendiéramos los datos…, aunque salvara la empresa…, no es ético que…",
        [
          ["Si vendiéramos los datos, salvaríamos la empresa.", "If we sold the data, we'd save the company."],
          ["Aunque salvara la empresa, traicionaríamos a los usuarios.", "Even if it saved the company, we'd betray our users."],
        ],
        [
          fb("Completa.", "No es ético que ___ información personal sin permiso. (compartirse)", "se comparta", "No es ético que + subjuntivo."),
          fb("Completa.", "Los usuarios confían en que ___ sus datos. (proteger, nosotros)", "protejamos", "Confiar en que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si los usuarios se ___, la empresa perdería su reputación. (enterar)", "enteraran", "Tipo 2."),
      fb("Completa.", "Por mucho dinero que nos ___, no deberíamos aceptar. (ofrecer, ellos)", "ofrezcan", "Por mucho que + subjuntivo."),
      fb("Completa.", "El inversor exigió que ___ los datos antes de firmar. (entregar, nosotros)", "entregáramos", "Exigir (pasado) + imperfecto."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la privacidad", "privacy"],
          ["el consentimiento", "consent"],
          ["la filtración", "leak"],
          ["el inversor", "investor"],
        ],
        "Vocabulario de ética tecnológica."
      ),
      mc(
        "¿Qué conector encaja? «La oferta es tentadora; ___, pondría en riesgo nuestra integridad.»",
        ["sin embargo", "por lo tanto", "además", "ya que"],
        0,
        "Contraste."
      ),
      toEs("I would rather close the company than betray our users.", "Preferiría cerrar la empresa antes que traicionar a nuestros usuarios.", "Preferir… antes que…", ["Prefiero cerrar la empresa antes que traicionar a nuestros usuarios.", "Preferiría cerrar la empresa a traicionar a nuestros usuarios."]),
      wo("Lo que está en juego es la confianza de millones de personas.", "Lo que + estar en juego.", "What's at stake is the trust of millions of people."),
    ]
  ),
  L(
    "diplomat-tense-negotiation",
    "b2r-tema-diplomacia",
    "Repaso temático: la negociación diplomática",
    "Acuerdos, condiciones y lenguaje cuidadoso — conjunciones condicionales, condicional de cortesía y estilo indirecto.",
    "7 min",
    [
      sec(
        "Negociar con palabras",
        "La diplomacia suaviza todo: condicional de cortesía (estaríamos dispuestos), condiciones (siempre que, con tal de que) y estilo indirecto formal.",
        [
          ["Estaríamos dispuestos a ceder siempre que se respetara la frontera actual.", "We'd be willing to compromise as long as the current border were respected."],
          ["El ministro declaró que su país no aceptaría ninguna amenaza.", "The minister declared his country would accept no threats."],
        ],
        [
          fb("Completa.", "Firmaremos con tal de que ambas partes ___ el acuerdo. (cumplir)", "cumplan", "Con tal de que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "La delegación advirtió que ___ la mesa si no había avances. (abandonar, condicional)", "abandonaría", "Estilo indirecto: futuro → condicional."),
      fb("Completa.", "Sería conveniente que ambas partes ___ gestos de buena voluntad. (hacer)", "hicieran", "Condicional + imperfecto de subjuntivo."),
      fb("Completa.", "No habrá acuerdo a menos que se ___ las sanciones. (levantar)", "levanten", "A menos que + subjuntivo."),
      mt(
        "Relaciona cada frase directa con su versión diplomática.",
        [
          ["No queremos eso.", "No estaríamos en condiciones de aceptarlo."],
          ["Hagan esto.", "Les rogaríamos que lo consideraran."],
          ["Están equivocados.", "Quizá haya un malentendido."],
          ["Nos vamos.", "Nos veríamos obligados a retirarnos."],
        ],
        "El condicional y el subjuntivo suavizan el mensaje."
      ),
      ms(
        "¿Qué frases son adecuadas en una negociación formal?",
        ["Les agradecería que reconsideraran su postura.", "¡Eso es una tontería!", "Estaríamos abiertos a nuevas propuestas.", "Siempre que haya reciprocidad, cederemos."],
        [0, 2, 3],
        "La segunda es demasiado directa."
      ),
      toEs("Both governments stated that they would continue talking.", "Ambos gobiernos afirmaron que seguirían dialogando.", "Estilo indirecto con condicional.", ["Los dos gobiernos afirmaron que seguirían dialogando.", "Ambos gobiernos declararon que seguirían dialogando."]),
      wo("Fue gracias a la mediación de un tercer país como se llegó a un acuerdo.", "Frase hendida de modo con como.", "It was thanks to a third country's mediation that an agreement was reached."),
    ]
  ),
  L(
    "mountain-guide-difficult-rescue",
    "b2r-tema-rescate",
    "Repaso temático: el rescate en la montaña",
    "Emergencias, decisiones rápidas y trabajo en equipo — conjunciones temporales, órdenes indirectas y tipo 3.",
    "7 min",
    [
      sec(
        "La operación",
        "En una emergencia, las instrucciones y los plazos llevan subjuntivo: antes de que anochezca, en cuanto amaine el viento, que nadie se mueva.",
        [
          ["Tenemos que llegar antes de que anochezca.", "We have to get there before dark."],
          ["El guía ordenó que nadie se separara del grupo.", "The guide ordered that nobody separate from the group."],
        ],
        [
          fb("Completa.", "Saldremos en cuanto ___ el viento. (amainar)", "amaine", "En cuanto + subjuntivo."),
          fb("Completa.", "Le pidieron al escalador que no se ___ hasta que llegaran. (mover)", "moviera", "Pedir (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubieran salido una hora después, no lo ___ encontrado con vida. (haber, ellos)", "habrían", "Tipo 3."),
      fb("Completa.", "El helicóptero no pudo despegar hasta que ___ la niebla. (levantarse, pretérito)", "se levantó", "Hasta que + pasado real → indicativo."),
      fb("Completa.", "Cuando lo encontraron, ___ inconsciente pero vivo.", "estaba", "Estado → estar."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la ventisca", "blizzard"],
          ["el alud", "avalanche"],
          ["la cordada", "roped team"],
          ["la hipotermia", "hypothermia"],
        ],
        "Vocabulario de montaña."
      ),
      mc(
        "«Nobody moves until I say so.»",
        ["Que nadie se mueva hasta que yo lo diga.", "Que nadie se mueve hasta que yo lo digo.", "Nadie se moverá hasta que yo lo diré.", "Que nadie se moviera hasta que lo digo."],
        0,
        "Que + subjuntivo (orden) + hasta que + subjuntivo."
      ),
      toEs("It was his experience that saved the climber's life.", "Fue su experiencia lo que salvó la vida del escalador.", "Frase hendida.", ["Fue su experiencia la que salvó la vida del escalador."]),
      wo("A pesar de la tormenta, el equipo consiguió bajarlo a salvo.", "A pesar de + sustantivo.", "Despite the storm, the team managed to get him down safely."),
    ]
  ),
  L(
    "lo-que-no-se-hereda",
    "b2r-tema-tierra-familia",
    "Repaso temático: la tierra de la familia",
    "Olivares, campos y decisiones entre generaciones — lo que se hereda y lo que no.",
    "7 min",
    [
      sec(
        "¿Vender o conservar?",
        "Las discusiones sobre la tierra familiar mezclan deseos (ojalá), hipótesis (si vendiéramos) y recuerdos (cuando éramos niños).",
        [
          ["Cuando éramos niños, pasábamos los veranos en el olivar.", "When we were kids, we spent summers at the olive grove."],
          ["Si lo vendiéramos, nuestros hijos nunca conocerían este lugar.", "If we sold it, our children would never know this place."],
        ],
        [
          fb("Completa.", "Papá siempre quiso que alguno de nosotros ___ cargo del campo. (hacerse)", "se hiciera", "Querer (pasado) + imperfecto."),
          fb("Completa.", "Ojalá no ___ que decidir esto nunca. (tener, nosotros)", "tuviéramos", "Ojalá + imperfecto (deseo irreal)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque ___ poco dinero, este campo vale mucho para nosotros. (dar)", "da", "Aunque + indicativo (hecho)."),
      fb("Completa.", "No hay nadie en la familia que ___ cultivar olivos. (saber)", "sepa", "Antecedente inexistente."),
      fb("Completa.", "Lo que se hereda no es solo la tierra, ___ también la responsabilidad.", "sino", "No solo… sino también."),
      mc(
        "«If Dad were here, he would know what to do.»",
        ["Si papá estuviera aquí, sabría qué hacer.", "Si papá estaría aquí, sabría qué hacer.", "Si papá está aquí, sabría qué hacer.", "Si papá estuvo aquí, sabría qué hacer."],
        0,
        "Tipo 2."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue aquí donde mi padre aprendió el oficio.", "Me pidió que cuidara los árboles.", "Hay olivos cuya edad supera los quinientos años.", "Si hubiéramos venido más, lo sabríamos cuidar."],
        [0, 1, 2, 3],
        "Las cuatro son correctas (la última es una mixta)."
      ),
      toEs("We'll decide when we're all together.", "Decidiremos cuando estemos todos juntos.", "Cuando + subjuntivo (futuro).", ["Lo decidiremos cuando estemos todos juntos."]),
      wo("Hay cosas que se heredan y otras que hay que ganarse.", "Se pasivo + hay que + infinitivo reflexivo.", "Some things are inherited and others have to be earned."),
    ]
  ),
  L(
    "la-voz-que-hereda-el-viento",
    "b2r-tema-musica-generaciones",
    "Repaso temático: la música entre generaciones",
    "Tradición musical, reinvención y conflicto generacional — opiniones, concesiones y énfasis.",
    "7 min",
    [
      sec(
        "Dos visiones",
        "Opinar con matices: no es que… sino que…, por mucho que…, lo que me molesta es que…",
        [
          ["No es que no me guste su versión, sino que ha perdido la esencia.", "It's not that I don't like her version, but that it's lost the essence."],
          ["Por mucho que la modernice, sigue siendo una copla.", "However much she modernizes it, it's still a copla."],
        ],
        [
          fb("Completa.", "Lo que me duele es que no ___ las letras originales. (respetar, ella)", "respete", "Lo que + doler que + subjuntivo."),
          fb("Completa.", "Aunque la ___ con guitarra eléctrica, la emoción es la misma. (cantar, ella; hecho)", "canta", "Aunque + indicativo (hecho)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mi madre quería que ___ las canciones tal como ella las cantaba. (interpretar, yo)", "interpretara", "Querer (pasado) + imperfecto."),
      fb("Completa.", "Si la tradición no ___, moriría. (evolucionar)", "evolucionara", "Tipo 2."),
      fb("Completa.", "Fue su hija ___ llevó la copla a los jóvenes.", "quien", "Frase hendida."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la letra", "lyrics"],
          ["la versión", "cover / version"],
          ["el repertorio", "repertoire"],
          ["el compás", "rhythm / beat"],
        ],
        "Vocabulario musical."
      ),
      mc(
        "«It's not that I'm against change; it's that I'm afraid of losing it.»",
        ["No es que esté en contra del cambio; es que tengo miedo de perderla.", "No es que estoy en contra del cambio; es que tenga miedo de perderla.", "No es que estuviera en contra; es que tendría miedo ayer.", "No es estar en contra, que tengo miedo perderla."],
        0,
        "No es que + subjuntivo; es que + indicativo."
      ),
      toEs("Every generation makes the songs its own.", "Cada generación hace suyas las canciones.", "Hacer suyo/a = to make one's own.", ["Cada generación se apropia de las canciones.", "Cada generación hace suyas las canciones a su manera."]),
      wo("La canción suena distinta, pero sigue emocionando como el primer día.", "Seguir + gerundio.", "The song sounds different, but it's still as moving as on the first day."),
    ]
  ),
  L(
    "el-farero-de-punta-fria",
    "b2r-tema-automatizacion",
    "Repaso temático: cuando una máquina ocupa tu puesto",
    "Automatización, oficios en extinción y reinvención — hipótesis, arrepentimientos y verbos de cambio.",
    "7 min",
    [
      sec(
        "Un oficio automatizado",
        "Hablar de la automatización: se ha sustituido, se ha quedado sin, si no hubieran automatizado…",
        [
          ["El faro se automatizó y el farero se quedó sin trabajo.", "The lighthouse was automated and the keeper was left without work."],
          ["Si no hubieran instalado el sistema, él seguiría allí.", "If they hadn't installed the system, he'd still be there."],
        ],
        [
          fb("Completa.", "Muchos empleos ___ sustituidos por máquinas en los próximos años. (ser, futuro)", "serán", "Pasiva en futuro."),
          fb("Completa.", "Es triste que un oficio tan antiguo ___. (desaparecer)", "desaparezca", "Es triste que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Tras el cierre, el farero ___ guía turístico. (hacerse, pretérito)", "se hizo", "Profesión nueva → hacerse."),
      fb("Completa.", "Nadie le preguntó qué ___ hacer después. (querer, él; imperfecto)", "quería", "Pregunta indirecta + imperfecto."),
      fb("Completa.", "Si las máquinas ___ todo, ¿qué haríamos los humanos? (hacer)", "hicieran", "Tipo 2."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["automatizar", "to automate"],
          ["sustituir", "to replace"],
          ["reinventarse", "to reinvent oneself"],
          ["quedarse obsoleto", "to become obsolete"],
        ],
        "Vocabulario del cambio laboral."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Su puesto se ha quedado obsoleto.", "Ojalá hubiera sabido que esto pasaría.", "Lo que más echa de menos es el silencio del faro.", "El faro está automatizado por la empresa ayer."],
        [0, 1, 2],
        "Acción con agente y tiempo → fue automatizado por la empresa."
      ),
      toEs("Machines can do the work, but they can't tell the stories.", "Las máquinas pueden hacer el trabajo, pero no pueden contar las historias.", "Contraste con pero.", ["Las máquinas pueden hacer el trabajo, pero no saben contar las historias."]),
      wo("Por mucho que avance la tecnología, algunas cosas no se pueden automatizar.", "Por mucho que + subjuntivo.", "However far technology advances, some things can't be automated."),
    ]
  ),
  L(
    "el-ultimo-mural-de-la-fabrica",
    "b2r-tema-arte-efimero",
    "Repaso temático: el arte efímero",
    "Pintar algo que va a desaparecer — concesiones, finalidad y el valor de lo temporal.",
    "7 min",
    [
      sec(
        "Pintar para nada",
        "¿Por qué crear algo que va a durar un mes? Concesiones (aunque lo derriben) y finalidad (para que la gente recuerde).",
        [
          ["Aunque lo derriben dentro de un mes, lo pintaré con todo mi cuidado.", "Even if they tear it down in a month, I'll paint it with all my care."],
          ["Lo pinto para que la gente recuerde lo que fue esta fábrica.", "I'm painting it so people remember what this factory was."],
        ],
        [
          fb("Completa.", "Quiero pintar algo que ___ a los trabajadores. (homenajear)", "homenajee", "Relativa con finalidad/deseo → subjuntivo."),
          fb("Completa.", "Aunque el mural ___ pronto, habrá valido la pena. (desaparecer)", "desaparezca", "Aunque + subjuntivo (futuro)."),
        ]
      ),
    ],
    [
      fb("Completa.", "La fábrica ___ cerrada en 1998. (ser, pretérito)", "fue", "Pasiva con ser."),
      fb("Completa.", "Me encargaron que ___ la historia del barrio. (pintar, yo)", "pintara", "Encargar (pasado) + imperfecto."),
      fb("Completa.", "Si el mural ___ en un museo, duraría siglos. (estar)", "estuviera", "Tipo 2."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["efímero", "ephemeral"],
          ["el encargo", "commission"],
          ["el boceto", "sketch"],
          ["derribar", "to tear down"],
        ],
        "Vocabulario del arte."
      ),
      mc(
        "«The fact that it disappears is what makes it valuable.»",
        ["El hecho de que desaparezca es lo que lo hace valioso.", "El hecho de que desaparece es lo que lo hace valioso.", "El hecho que desaparecerá es quien lo hace valioso.", "El hecho de desaparezca es lo que lo hace valioso."],
        0,
        "El hecho de que + subjuntivo (valoración)."
      ),
      toEs("Many neighbors came to see it before it was demolished.", "Muchos vecinos vinieron a verlo antes de que lo derribaran.", "Antes de que + imperfecto de subjuntivo (pasado).", ["Muchos vecinos fueron a verlo antes de que lo derribaran.", "Muchos vecinos vinieron a verlo antes de que lo demolieran."]),
      wo("Lo que queda de un mural no es la pared, sino el recuerdo.", "Lo que + no… sino.", "What remains of a mural isn't the wall but the memory."),
    ]
  ),
  L(
    "la-lonja-de-las-seis",
    "b2r-tema-pueblos-pesqueros",
    "Repaso temático: los pueblos que se vacían",
    "Pueblos pesqueros, despoblación y rituales que se pierden — imperfecto, verbos de cambio y deseos.",
    "7 min",
    [
      sec(
        "Antes y ahora",
        "Contrastar el pasado (imperfecto) con el presente, y expresar cómo ha cambiado el pueblo.",
        [
          ["Antes la lonja se llenaba cada mañana; ahora apenas quedan cinco barcos.", "The fish market used to fill up every morning; now barely five boats are left."],
          ["El pueblo se ha quedado casi vacío.", "The village has been left almost empty."],
        ],
        [
          fb("Completa.", "Cuando era niño, el puerto ___ lleno de vida. (estar)", "estaba", "Descripción del pasado."),
          fb("Completa.", "Los jóvenes se van porque no hay nada que los ___. (retener)", "retenga", "Antecedente inexistente."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera más trabajo, los jóvenes no se ___. (ir)", "irían", "Tipo 2."),
      fb("Completa.", "El subastador lamentó que la tradición se ___ perdiendo. (estar)", "estuviera", "Lamentar (pasado) + imperfecto."),
      fb("Completa.", "El pueblo ___ en un destino de fin de semana. (convertirse, perfecto)", "se ha convertido", "Convertirse en."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la lonja", "fish market / auction hall"],
          ["la despoblación", "depopulation"],
          ["la subasta", "auction"],
          ["el pescador", "fisherman"],
        ],
        "Vocabulario del mar."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Ya no queda nadie que sepa reparar redes.", "Ojalá volvieran los tiempos de antes.", "Hace veinte años había treinta barcos.", "El pueblo se ha puesto vacío."],
        [0, 1, 2],
        "Resultado → el pueblo se ha quedado vacío."
      ),
      toEs("When the old people die, nobody will remember these customs.", "Cuando mueran los mayores, nadie recordará estas costumbres.", "Cuando + subjuntivo (futuro).", ["Cuando se mueran los mayores, nadie recordará estas costumbres.", "Cuando los mayores mueran, nadie recordará estas costumbres."]),
      wo("Lo que antes era un ritual diario ahora es casi un recuerdo.", "Lo que + imperfecto + ahora.", "What used to be a daily ritual is now almost a memory."),
    ]
  ),
  L(
    "los-titiriteros-de-siempre",
    "b2r-tema-negocio-familiar",
    "Repaso temático: continuar el negocio familiar",
    "Heredar un oficio itinerante: expectativas, dudas y futuro — subjuntivo, condicionales y estilo indirecto.",
    "7 min",
    [
      sec(
        "¿Seguir o dejarlo?",
        "Expresar expectativas ajenas (esperan que…), dudas propias (no sé si…) e hipótesis (si lo dejara…).",
        [
          ["Mis padres esperan que siga con la compañía.", "My parents expect me to carry on with the company."],
          ["Si lo dejara, sentiría que los traiciono.", "If I quit, I'd feel I was betraying them."],
        ],
        [
          fb("Completa.", "No sé si ___ capaz de hacerlo como ellos. (ser, yo, futuro)", "seré", "No saber si + indicativo."),
          fb("Completa.", "Mi abuelo quería que la compañía ___ viva siempre. (seguir)", "siguiera", "Querer (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me dijeron que ___ libre de elegir. (ser, yo)", "era", "Estilo indirecto: presente → imperfecto."),
      fb("Completa.", "Aunque me ___ otro trabajo, no lo aceptaría. (ofrecer, ellos)", "ofrecieran", "Aunque + imperfecto de subjuntivo (hipótesis)."),
      fb("Completa.", "Fue mi madre ___ me enseñó a mover las marionetas.", "quien", "Frase hendida."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el titiritero", "puppeteer"],
          ["la marioneta", "marionette"],
          ["itinerante", "traveling"],
          ["la función", "show / performance"],
        ],
        "Vocabulario del teatro de títeres."
      ),
      mc(
        "«Whatever I decide, I'll always be part of this family.»",
        ["Decida lo que decida, siempre seré parte de esta familia.", "Decido lo que decido, siempre seré parte de esta familia.", "Decidiré lo que decida, siempre soy parte.", "Lo que decidiera, siempre seré parte ayer."],
        0,
        "Estructura reduplicativa con subjuntivo."
      ),
      toEs("If I hadn't grown up on the road, I wouldn't be who I am.", "Si no hubiera crecido en la carretera, no sería quien soy.", "Mixta: pasado → presente.", ["Si no me hubiera criado en la carretera, no sería quien soy.", "Si no hubiese crecido en la carretera, no sería quien soy."]),
      wo("Cada verano volvíamos a los mismos pueblos como si fuera la primera vez.", "Imperfecto + como si + imperfecto de subjuntivo.", "Every summer we returned to the same towns as if it were the first time."),
    ]
  ),
  L(
    "la-trashumancia-de-don-silvestre",
    "b2r-tema-tradiciones-rurales",
    "Repaso temático: tradiciones rurales",
    "La trashumancia, los caminos antiguos y el relevo generacional — subjuntivo de influencia y concesión.",
    "7 min",
    [
      sec(
        "Un camino antiguo",
        "Hablar de tradiciones amenazadas: es importante que se mantengan, aunque cueste, antes de que desaparezcan.",
        [
          ["Es importante que se mantengan las vías pecuarias.", "It's important that the old drove roads be maintained."],
          ["Aunque cueste, haremos el camino a pie como siempre.", "Even if it's hard, we'll walk the route as always."],
        ],
        [
          fb("Completa.", "Su padre no quería que ___ el camino sola. (hacer, ella)", "hiciera", "Querer (pasado) + imperfecto."),
          fb("Completa.", "Debemos documentarlo antes de que ___. (perderse)", "se pierda", "Antes de que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si no hubiera insistido, su padre no la ___ llevado. (haber)", "habría", "Tipo 3."),
      fb("Completa.", "Es la última generación que ___ este oficio. (conocer)", "conoce", "Antecedente conocido → indicativo."),
      fb("Completa.", "Por muchos kilómetros que ___, no se quejaba. (caminar, ella)", "caminara", "Por mucho que + imperfecto de subjuntivo (pasado)."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el rebaño", "flock"],
          ["el pastor", "shepherd"],
          ["la trashumancia", "seasonal livestock migration"],
          ["el pasto", "pasture"],
        ],
        "Vocabulario rural."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue su hija quien decidió continuar.", "No hay nadie en el pueblo que siga haciéndolo.", "Ojalá los jóvenes valoraran más estas costumbres.", "El camino se hizo cada vez más difícil ayer mañana."],
        [0, 1, 2],
        "La última es incoherente."
      ),
      toEs("She walked as if she had done it all her life.", "Caminaba como si lo hubiera hecho toda la vida.", "Como si + pluscuamperfecto de subjuntivo.", ["Caminaba como si lo hubiese hecho toda su vida.", "Caminaba como si lo hubiera hecho toda su vida."]),
      wo("Lo que su padre veía como una carga ella lo veía como un regalo.", "Lo que + anteposición + pronombre.", "What her father saw as a burden she saw as a gift."),
    ]
  ),
  L(
    "los-azulejos-de-la-casa-azul",
    "b2r-tema-restauracion",
    "Repaso temático: restaurar el pasado",
    "Artesanía, encargos y el valor del trabajo bien hecho — pasiva, relativas con cuyo y condicionales.",
    "7 min",
    [
      sec(
        "El encargo",
        "Describir una restauración: fue construida, cuyos azulejos, habría que, si no se restaura…",
        [
          ["La casa, cuyos azulejos datan del siglo XVIII, se está cayendo.", "The house, whose tiles date back to the 18th century, is falling apart."],
          ["Habría que restaurarla antes de que sea demasiado tarde.", "It would need to be restored before it's too late."],
        ],
        [
          fb("Completa.", "Los azulejos ___ pintados a mano uno por uno. (ser, pretérito)", "fueron", "Pasiva con ser."),
          fb("Completa.", "Aceptó el encargo aunque le ___ muy poco. (pagar, ellos; hecho)", "pagaban", "Aunque + indicativo (hecho conocido)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si no la restauran, la fachada se ___. (derrumbar, futuro)", "derrumbará", "Tipo 1."),
      fb("Completa.", "Busca a un aprendiz que ___ paciencia. (tener)", "tenga", "Antecedente desconocido."),
      fb("Completa.", "Trabajaba con tanto cuidado como si la casa ___ suya. (ser)", "fuera", "Como si + imperfecto."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el azulejo", "glazed tile"],
          ["el esmalte", "glaze"],
          ["el horno", "kiln"],
          ["la fachada", "facade"],
        ],
        "Vocabulario de cerámica."
      ),
      mc(
        "«It's the details that make the difference.»",
        ["Son los detalles los que marcan la diferencia.", "Es los detalles lo que marcan la diferencia.", "Son los detalles quienes marca la diferencia.", "Los detalles son que marcan la diferencia."],
        0,
        "Frase hendida en plural."
      ),
      toEs("If they had asked me earlier, I would have saved more tiles.", "Si me lo hubieran pedido antes, habría salvado más azulejos.", "Tipo 3.", ["Si me lo hubiesen pedido antes, habría salvado más azulejos."]),
      wo("No hay dinero que pague el tiempo que dedicó a esa casa.", "Antecedente inexistente → subjuntivo.", "No amount of money could pay for the time she devoted to that house."),
    ]
  ),
  L(
    "el-luthier-de-paracho",
    "b2r-tema-aprendiz",
    "Repaso temático: aprender de un maestro",
    "El aprendizaje de un oficio artesanal — consejos, órdenes indirectas y verbos de cambio.",
    "7 min",
    [
      sec(
        "El maestro enseña",
        "Las instrucciones del maestro, contadas después, usan estilo indirecto con subjuntivo: me decía que tuviera paciencia.",
        [
          ["Mi tío siempre me decía que escuchara la madera.", "My uncle always told me to listen to the wood."],
          ["Me pedía que no tuviera prisa.", "He asked me not to rush."],
        ],
        [
          fb("Completa.", "Me enseñó ___ elegir la madera antes de cortarla.", "a", "Enseñar a + infinitivo."),
          fb("Completa.", "Insistía en que ___ cada pieza a mano. (lijar, yo)", "lijara", "Insistir en que + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Con los años, ___ una verdadera maestra. (llegar a ser, pretérito)", "llegó a ser", "Logro gradual."),
      fb("Completa.", "Al principio, cada error me ___ de mal humor. (poner)", "ponía", "Ponerse/poner de mal humor, hábito."),
      fb("Completa.", "Si no me hubiera aceptado como aprendiz, hoy no ___ guitarras. (hacer, yo)", "haría", "Mixta."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el luthier", "instrument maker"],
          ["el mástil", "neck (of a guitar)"],
          ["el barniz", "varnish"],
          ["la caja de resonancia", "sound box"],
        ],
        "Vocabulario de lutería."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me dijo que no forzara la madera.", "Fue él quien me enseñó todo lo que sé.", "No hay dos guitarras que suenen igual.", "Me pidió que tengo paciencia."],
        [0, 1, 2],
        "Pedir (pasado) + imperfecto: que tuviera paciencia."
      ),
      toEs("He taught me that every guitar has its own voice.", "Me enseñó que cada guitarra tiene su propia voz.", "Enseñar que + indicativo (verdad general).", ["Me enseñó que cada guitarra tenía su propia voz."]),
      wo("Por mucho que practiques, nunca dejarás de aprender.", "Por mucho que + subjuntivo.", "However much you practice, you'll never stop learning."),
    ]
  ),
  L(
    "el-turron-de-los-marin",
    "b2r-tema-modernizar-empresa",
    "Repaso temático: modernizar el taller familiar",
    "Máquinas o manos, crecer o conservar — argumentación, condicionales y conectores.",
    "7 min",
    [
      sec(
        "Dos hermanos, dos visiones",
        "Uno quiere modernizar; el otro, conservar. Cada uno argumenta con conectores y condicionales.",
        [
          ["Si compráramos máquinas, produciríamos el triple.", "If we bought machines, we'd produce three times as much."],
          ["Sin embargo, el turrón dejaría de ser artesanal.", "However, the nougat would stop being handmade."],
        ],
        [
          fb("Completa.", "Propongo que ___ solo una parte de la producción. (automatizar, nosotros)", "automaticemos", "Proponer que + subjuntivo; z → c."),
          fb("Completa.", "Papá nunca habría permitido que ___ la receta. (cambiar, nosotros)", "cambiáramos", "Condicional perfecto + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "A menos que ___ la producción, no podremos competir. (aumentar, nosotros)", "aumentemos", "A menos que + subjuntivo."),
      fb("Completa.", "El obrador ___ fundado por nuestro bisabuelo en 1920. (ser, pretérito)", "fue", "Pasiva."),
      fb("Completa.", "___ que más valoran los clientes es el sabor de siempre.", "Lo", "Lo que + énfasis."),
      mt(
        "Relaciona cada conector con su función.",
        [
          ["por consiguiente", "consecuencia"],
          ["sin embargo", "contraste"],
          ["dado que", "causa"],
          ["asimismo", "adición"],
        ],
        "Conectores de argumentación."
      ),
      ms(
        "¿Qué argumentos están bien construidos?",
        ["Dado que la demanda ha crecido, necesitamos producir más.", "Aunque ganemos más, perderemos nuestra identidad.", "Si modernizáramos, podríamos exportar.", "Por lo tanto que es caro, no lo hacemos."],
        [0, 1, 2],
        "Por lo tanto no lleva que; aquí: como es caro, no lo hacemos."
      ),
      toEs("We can grow as long as we keep the original recipe.", "Podemos crecer siempre que mantengamos la receta original.", "Siempre que (condición) + subjuntivo.", ["Podemos crecer con tal de que mantengamos la receta original."]),
      wo("No se trata de elegir entre tradición y futuro, sino de unirlos.", "No se trata de… sino de…", "It's not about choosing between tradition and the future, but about joining them."),
    ]
  ),
  L(
    "el-molino-que-no-calla",
    "b2r-tema-desarrollo-vs-patrimonio",
    "Repaso temático: progreso o conservación",
    "Un molino, un complejo turístico y una comunidad dividida — argumentación y subjuntivo de valoración.",
    "7 min",
    [
      sec(
        "Los dos bandos",
        "Valorar (es lógico que, es una vergüenza que) y conceder (si bien es cierto que).",
        [
          ["Es lógico que el pueblo quiera más empleo.", "It's logical that the town wants more jobs."],
          ["Si bien es cierto que el hotel traería dinero, destruiría el paisaje.", "While the hotel would bring money, it would destroy the landscape."],
        ],
        [
          fb("Completa.", "Es una vergüenza que se ___ un molino del siglo XVI. (demoler)", "demuela", "Demoler (o→ue) → demuela."),
        ]
      ),
    ],
    [
      fb("Completa.", "La constructora prometió que ___ doscientos puestos de trabajo. (crear, condicional)", "crearía", "Estilo indirecto."),
      fb("Completa.", "No aceptaremos ningún proyecto que ___ el molino. (destruir)", "destruya", "Antecedente indeterminado."),
      fb("Completa.", "Si el molino desapareciera, el pueblo ___ su símbolo. (perder)", "perdería", "Tipo 2."),
      mt(
        "Relaciona cada argumento con su bando.",
        [
          ["Traerá empleo y turismo.", "a favor del complejo"],
          ["Destruirá el paisaje y la memoria.", "a favor del molino"],
          ["Los jóvenes podrán quedarse en el pueblo.", "argumento económico"],
          ["El molino es patrimonio de todos.", "argumento cultural"],
        ],
        "Argumentos del debate."
      ),
      mc(
        "«Even if they offered us millions, we wouldn't sell.»",
        ["Aunque nos ofrecieran millones, no venderíamos.", "Aunque nos ofrecen millones, no venderíamos ayer.", "Aunque nos ofrecerían millones, no vendemos.", "Aunque nos ofrezcan millones, no vendimos."],
        0,
        "Aunque + imperfecto de subjuntivo + condicional."
      ),
      toEs("It was the grandfather who started the campaign.", "Fue el abuelo quien empezó la campaña.", "Frase hendida.", ["Fue el abuelo el que empezó la campaña.", "Fue el abuelo quien inició la campaña."]),
      wo("Lo que no se protege hoy mañana ya no existirá.", "Lo que + anteposición.", "What isn't protected today won't exist tomorrow."),
    ]
  ),
  L(
    "el-acero-de-los-bermudez",
    "b2r-tema-volver-a-casa",
    "Repaso temático: volver al taller del padre",
    "Huir, regresar y reconciliarse — pasados, arrepentimientos y estilo indirecto.",
    "7 min",
    [
      sec(
        "La vuelta",
        "Un regreso mezcla lo que pasó (pretérito), lo que ya había pasado (pluscuamperfecto) y lo que habría podido ser (tipo 3).",
        [
          ["Cuando volvió, el taller ya no era el mismo.", "When he came back, the workshop wasn't the same."],
          ["Si se hubiera quedado, habría aprendido el oficio de su padre.", "If he had stayed, he would have learned his father's trade."],
        ],
        [
          fb("Completa.", "Se fue a la ciudad porque no quería que su padre le ___ la vida. (decidir)", "decidiera", "Querer (pasado) + imperfecto."),
          fb("Completa.", "Llevaba diez años ___ pisar su pueblo.", "sin", "Llevar + tiempo + sin + infinitivo = hadn't done something for (time)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Su padre le confesó que siempre ___ que volviera. (esperar, pluscuamperfecto)", "había esperado", "Estilo indirecto."),
      fb("Completa.", "Ojalá ___ hablado antes. (haber, nosotros)", "hubiéramos", "Ojalá + pluscuamperfecto."),
      fb("Completa.", "Tras el accidente, su padre ___ sin fuerza en las manos. (quedarse, pretérito)", "se quedó", "Resultado."),
      mc(
        "«It's not that I didn't love you; it's that I needed to leave.»",
        ["No es que no te quisiera; es que necesitaba irme.", "No es que no te quería; es que necesitara irme.", "No era que no te quiero; es que necesité irme mañana.", "No es no te quisiera, necesitaba irme."],
        0,
        "No es que + imperfecto de subjuntivo (pasado); es que + indicativo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Le pidió que se quedara unos días.", "Nunca se había sentido tan en casa.", "Fue en el taller donde se reconciliaron.", "Si hubiera sabido, había vuelto antes."],
        [0, 1, 2],
        "Tipo 3: si hubiera sabido, habría vuelto antes."
      ),
      toEs("He realized that he had missed his father more than he thought.", "Se dio cuenta de que había echado de menos a su padre más de lo que pensaba.", "Pluscuamperfecto + más de lo que.", ["Se dio cuenta de que había extrañado a su padre más de lo que creía."]),
      wo("A veces hay que irse lejos para entender de dónde vienes.", "Hay que + infinitivo + para + infinitivo.", "Sometimes you have to go far away to understand where you come from."),
    ]
  ),
  L(
    "el-cantero-de-la-torre",
    "b2r-tema-mentores",
    "Repaso temático: un mentor inesperado",
    "Un maestro mayor y un joven con problemas — expectativas, cambios y segundas oportunidades.",
    "7 min",
    [
      sec(
        "Segundas oportunidades",
        "Hablar de la transformación de alguien: se volvió, llegó a ser, dejó de…, gracias a que…",
        [
          ["Al principio el chico se ponía agresivo por cualquier cosa.", "At first the boy got aggressive over anything."],
          ["Con el tiempo, se volvió más paciente y responsable.", "Over time, he became more patient and responsible."],
        ],
        [
          fb("Completa.", "El juez ordenó que ___ cien horas de trabajo comunitario. (cumplir, él)", "cumpliera", "Ordenar (pasado) + imperfecto."),
          fb("Completa.", "Nadie creía que ___ a cambiar. (ir, él)", "fuera", "Nadie creía que + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Gracias a que el cantero ___ en él, el chico cambió. (confiar, pretérito)", "confió", "Gracias a que + indicativo (causa real)."),
      fb("Completa.", "Si no lo hubieran enviado allí, quizá ___ en la cárcel. (acabar, condicional perfecto)", "habría acabado", "Tipo 3."),
      fb("Completa.", "Lo que el chico necesitaba no era castigo, ___ alguien que creyera en él.", "sino", "No… sino."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el cantero", "stonemason"],
          ["el cincel", "chisel"],
          ["la cantera", "quarry"],
          ["el trabajo comunitario", "community service"],
        ],
        "Vocabulario del oficio."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Le enseñó a trabajar la piedra con paciencia.", "El chico llegó a ser un buen artesano.", "Es importante que los jóvenes tengan referentes.", "Se hizo más paciente de repente en un segundo."],
        [0, 1, 2],
        "Un cambio gradual de carácter no ocurre «en un segundo»; además, lo natural sería volverse."
      ),
      toEs("He treated him as if he were his own grandson.", "Lo trataba como si fuera su propio nieto.", "Como si + imperfecto de subjuntivo.", ["Le trataba como si fuera su propio nieto.", "Lo trataba como si fuese su propio nieto."]),
      wo("Fue la piedra la que le enseñó a tener paciencia.", "Frase hendida.", "It was the stone that taught him to be patient."),
    ]
  ),
  L(
    "la-voz-que-quedo",
    "b2r-tema-duelo-tecnologia",
    "Repaso temático: el duelo en la era digital",
    "Voces grabadas, recuerdos y despedidas — deseos imposibles, como si y reflexiones.",
    "7 min",
    [
      sec(
        "Hablar con una voz",
        "Los deseos imposibles usan ojalá + imperfecto o pluscuamperfecto de subjuntivo; las sensaciones, como si.",
        [
          ["Ojalá pudiera hablar con él una vez más.", "I wish I could talk to him one more time."],
          ["Le hablaba al altavoz como si él estuviera allí.", "She talked to the speaker as if he were there."],
        ],
        [
          fb("Completa.", "Ojalá le ___ dicho cuánto lo quería. (haber, yo)", "hubiera", "Ojalá + pluscuamperfecto (arrepentimiento)."),
          fb("Completa.", "La voz sonaba como si ___ vivo. (estar, él)", "estuviera", "Como si + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "La psicóloga le aconsejó que ___ poco a poco. (despedirse, ella)", "se despidiera", "Aconsejar (pasado) + imperfecto."),
      fb("Completa.", "No es la voz lo que echa de menos, ___ la persona.", "sino", "No… sino."),
      fb("Completa.", "Si la tecnología no ___, quizá habría aceptado antes la pérdida. (existir, pluscuamperfecto de subjuntivo)", "hubiera existido", "Tipo 3."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["el duelo", "grief / mourning"],
          ["pasar página", "to turn the page"],
          ["aferrarse a", "to cling to"],
          ["despedirse", "to say goodbye"],
        ],
        "Vocabulario del duelo."
      ),
      mc(
        "«What she needed wasn't to hear his voice, but to say goodbye.»",
        ["Lo que necesitaba no era oír su voz, sino despedirse.", "Lo que necesitaba no era oír su voz, pero despedirse.", "El que necesitaba no era oír su voz, sino despedirse.", "Lo que necesitaba no fuera oír su voz, sino despedirse."],
        0,
        "Lo que… no… sino."
      ),
      toEs("It's normal that you (tú) want to hold on to his memory.", "Es normal que quieras aferrarte a su recuerdo.", "Es normal que + subjuntivo.", ["Es normal que quieras agarrarte a su recuerdo.", "Es normal que te quieras aferrar a su recuerdo."]),
      wo("Por mucho que la tecnología avance, no puede devolvernos a quien perdimos.", "Por mucho que + subjuntivo.", "However much technology advances, it can't bring back those we've lost."),
    ]
  ),
  L(
    "el-rostro-reconocido",
    "b2r-tema-vigilancia",
    "Repaso temático: la vigilancia y la privacidad",
    "Reconocimiento facial, responsabilidad del ingeniero y derechos — hipótesis y argumentación ética.",
    "7 min",
    [
      sec(
        "La responsabilidad del creador",
        "Plantear responsabilidad: si hubiera sabido…, no debería haber…, es inadmisible que…",
        [
          ["Si hubiera sabido cómo lo iban a usar, no lo habría diseñado.", "If I'd known how they would use it, I wouldn't have designed it."],
          ["Es inadmisible que se vigile a ciudadanos sin orden judicial.", "It's unacceptable that citizens be monitored without a court order."],
        ],
        [
          fb("Completa.", "Nunca debería ___ ese contrato. (firmar, yo; infinitivo compuesto)", "haber firmado", "Debería haber + participio."),
          fb("Completa.", "La empresa le pidió que no ___ nada a la prensa. (decir, él)", "dijera", "Pedir (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si los datos ___ en malas manos, las consecuencias serían graves. (caer)", "cayeran", "Tipo 2."),
      fb("Completa.", "Es necesario que ___ leyes más estrictas. (aprobarse)", "se aprueben", "Es necesario que + subjuntivo (se pasivo)."),
      fb("Completa.", "Las cámaras ___ instaladas sin informar a los vecinos. (ser, pretérito)", "fueron", "Pasiva."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el reconocimiento facial", "facial recognition"],
          ["la orden judicial", "court order"],
          ["el denunciante", "whistleblower"],
          ["los derechos civiles", "civil rights"],
        ],
        "Vocabulario de privacidad."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Lo que más le preocupaba era el uso político de la tecnología.", "No hay ningún sistema que sea infalible.", "Aunque lo prohibieran, seguiría existiendo.", "Si habría sabido, no lo habría hecho."],
        [0, 1, 2],
        "Si hubiera sabido."
      ),
      toEs("Technology is not good or bad; it depends on who uses it.", "La tecnología no es buena ni mala; depende de quién la use.", "Depender de quién + subjuntivo.", ["La tecnología no es buena ni mala: depende de quién la use.", "La tecnología no es ni buena ni mala; depende de quién la utilice."]),
      wo("Fue en ese momento cuando decidió hacerlo público.", "Frase hendida temporal.", "It was at that moment that he decided to make it public."),
    ]
  ),
  L(
    "buenas-noches-elena",
    "b2r-tema-soledad-robots",
    "Repaso temático: la soledad y los robots de compañía",
    "Envejecer, la soledad y la tecnología que acompaña — deseos, hipótesis y reacciones.",
    "7 min",
    [
      sec(
        "Una compañía artificial",
        "Reaccionar ante algo nuevo: me parece extraño que…, no creo que… pueda…, como si…",
        [
          ["Me parece extraño que una máquina te dé las buenas noches.", "It seems strange to me that a machine says good night to you."],
          ["Al principio lo trataba como si fuera un electrodoméstico.", "At first she treated it as if it were an appliance."],
        ],
        [
          fb("Completa.", "No creo que un robot ___ sustituir a una persona. (poder)", "pueda", "No creer + subjuntivo."),
          fb("Completa.", "Sus hijos le regalaron el robot para que no ___ tan sola. (estar, ella)", "estuviera", "Para que + imperfecto (pasado)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Con el tiempo, el robot ___ en parte de su rutina. (convertirse, pretérito)", "se convirtió", "Convertirse en."),
      fb("Completa.", "Si sus hijos la ___ más, quizá no necesitaría el robot. (visitar)", "visitaran", "Tipo 2."),
      fb("Completa.", "Le sorprendió que la máquina ___ su nombre. (recordar)", "recordara", "Sorprender (pasado) + imperfecto."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["sentirse acompañado", "to feel accompanied"],
          ["la soledad no deseada", "unwanted loneliness"],
          ["la tercera edad", "old age / seniors"],
          ["el cuidador", "caregiver"],
        ],
        "Vocabulario de la vejez."
      ),
      mc(
        "«Whatever the robot says, it's not the same as a hug.»",
        ["Diga lo que diga el robot, no es lo mismo que un abrazo.", "Dice lo que dice el robot, no es lo mismo que un abrazo.", "Dijera lo que dijera el robot, no es igual ayer.", "Lo que diga el robot, no fuera lo mismo que un abrazo."],
        0,
        "Estructura reduplicativa con subjuntivo."
      ),
      toEs("Loneliness has become one of the great problems of our time.", "La soledad se ha convertido en uno de los grandes problemas de nuestro tiempo.", "Convertirse en + expresión.", ["La soledad se ha convertido en uno de los grandes problemas de nuestra época."]),
      wo("Lo que ella echaba de menos no era hablar, sino que alguien la escuchara.", "Lo que + no… sino que + imperfecto de subjuntivo.", "What she missed wasn't talking, but having someone listen to her."),
    ]
  ),
  L(
    "las-palabras-exactas",
    "b2r-tema-traducir-fielmente",
    "Repaso temático: traducir las palabras exactas",
    "Intérpretes, fidelidad y dilemas — el estilo indirecto al servicio de la ética profesional.",
    "7 min",
    [
      sec(
        "Transmitir lo que otro dice",
        "Un intérprete transmite palabras ajenas. Contarlo después exige estilo indirecto preciso.",
        [
          ["El solicitante dijo que había huido porque temía por su vida.", "The applicant said he had fled because he feared for his life."],
          ["El juez le pidió que repitiera exactamente lo que había dicho.", "The judge asked her to repeat exactly what he had said."],
        ],
        [
          fb("Completa.", "«Tengo miedo» → Dijo que ___ miedo.", "tenía", "Presente → imperfecto."),
          fb("Completa.", "«No me devuelvan a mi país» → Suplicó que no lo ___ a su país.", "devolvieran", "Súplica → imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera suavizado sus palabras, ___ traicionado su confianza. (haber, ella)", "habría", "Tipo 3."),
      fb("Completa.", "Es fundamental que el intérprete no ___ su opinión. (añadir)", "añada", "Es fundamental que + subjuntivo."),
      fb("Completa.", "Tradujo cada frase como si ___ la suya. (ser)", "fuera", "Como si + imperfecto."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el intérprete", "interpreter"],
          ["el solicitante de asilo", "asylum seeker"],
          ["la fidelidad", "faithfulness"],
          ["el matiz", "nuance"],
        ],
        "Vocabulario de interpretación."
      ),
      ms(
        "¿Qué transformaciones al estilo indirecto son correctas?",
        ["«Me persiguieron» → Dijo que lo habían perseguido.", "«Ayúdenme» → Pidió que lo ayudaran.", "«Volveré» → Dijo que volvería.", "«¿Me creen?» → Preguntó que lo creían."],
        [0, 1, 2],
        "Pregunta sí/no → preguntó si lo creían."
      ),
      toEs("A single word can change a person's destiny.", "Una sola palabra puede cambiar el destino de una persona.", "Presente para verdades generales.", ["Una única palabra puede cambiar el destino de una persona."]),
      wo("Lo que está en juego no son palabras, sino vidas.", "Lo que + no… sino.", "What's at stake isn't words but lives."),
    ]
  ),
  L(
    "detras-del-mostrador",
    "b2r-tema-dilemas-profesionales",
    "Repaso temático: dilemas detrás del mostrador",
    "Cuando el deber profesional choca con la sospecha — hipótesis, deber y argumentación.",
    "7 min",
    [
      sec(
        "¿Qué harías tú?",
        "Los dilemas profesionales se plantean con condicionales y con deber + infinitivo.",
        [
          ["Si sospecharas que una receta es falsa, ¿la dispensarías?", "If you suspected a prescription was fake, would you fill it?"],
          ["Debería llamar al médico antes de decidir.", "I should call the doctor before deciding."],
        ],
        [
          fb("Completa.", "Yo en su lugar, ___ al médico que la firmó. (llamar)", "llamaría", "Condicional."),
          fb("Completa.", "Es obligatorio que el farmacéutico ___ cualquier irregularidad. (comunicar)", "comunique", "Es obligatorio que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si se la hubiera dado, quizá ___ contribuido a una adicción. (haber, ella)", "habría", "Tipo 3."),
      fb("Completa.", "No dispensaré nada hasta que el médico me lo ___. (confirmar)", "confirme", "Hasta que + subjuntivo."),
      fb("Completa.", "El cliente insistió en que se la ___ inmediatamente. (dar, ella)", "diera", "Insistir en que (pasado) + imperfecto."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la receta", "prescription"],
          ["dispensar", "to dispense"],
          ["el deber profesional", "professional duty"],
          ["la sospecha", "suspicion"],
        ],
        "Vocabulario de farmacia."
      ),
      mc(
        "«She acted as she thought was right, although it cost her a client.»",
        ["Actuó como creía que era correcto, aunque le costó un cliente.", "Actuó como creyera que fuera correcto, aunque le cueste un cliente.", "Actuó como creía que sea correcto, aunque le costara ayer.", "Actuó como cree que es correcto, aunque le costaría."],
        0,
        "Hechos → indicativo."
      ),
      toEs("It's not easy to say no to someone who is suffering.", "No es fácil decirle que no a alguien que está sufriendo.", "No es fácil + infinitivo; relativa con indicativo (persona concreta).", ["No es fácil decir que no a alguien que sufre.", "No es fácil decirle que no a alguien que sufre."]),
      wo("Por mucho que insistiera, no pensaba cambiar de opinión.", "Por mucho que + imperfecto de subjuntivo.", "However much he insisted, she had no intention of changing her mind."),
    ]
  ),
  L(
    "el-nombre-equivocado",
    "b2r-tema-integridad-periodistica",
    "Repaso temático: la integridad periodística",
    "Filtraciones, fuentes y consecuencias — estilo indirecto, pasiva y dilemas en condicional.",
    "7 min",
    [
      sec(
        "Publicar o no publicar",
        "Los periodistas informan con estilo indirecto y la pasiva, y deciden con condicionales.",
        [
          ["Según los documentos filtrados, el dinero había sido desviado.", "According to the leaked documents, the money had been diverted."],
          ["Si publicara la noticia, perjudicaría a alguien cercano.", "If she published the story, she'd harm someone close to her."],
        ],
        [
          fb("Completa.", "Los documentos ___ enviados de forma anónima. (ser, pretérito)", "fueron", "Pasiva."),
          fb("Completa.", "La fuente pidió que no ___ su nombre. (revelar, ella)", "revelara", "Pedir (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es imprescindible que se ___ los datos antes de publicar. (verificar)", "verifiquen", "Es imprescindible que + subjuntivo."),
      fb("Completa.", "El director dijo que la noticia ___ en portada. (ir, condicional)", "iría", "Estilo indirecto."),
      fb("Completa.", "Aunque ___ a su propio hermano, publicó la verdad. (afectar; era un hecho)", "afectaba", "Aunque + indicativo (hecho)."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la fuente", "source"],
          ["la filtración", "leak"],
          ["la exclusiva", "scoop"],
          ["desviar fondos", "to divert funds"],
        ],
        "Vocabulario periodístico."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue la verdad lo que la obligó a publicarlo.", "Si hubiera callado, nunca se lo habría perdonado.", "Nadie esperaba que tuviera el valor de hacerlo.", "Según las fuentes, el dinero fuera desviado."],
        [0, 1, 2],
        "Según + indicativo: el dinero había sido desviado."
      ),
      toEs("Journalism exists so that citizens know the truth.", "El periodismo existe para que los ciudadanos conozcan la verdad.", "Para que + subjuntivo.", ["El periodismo existe para que la ciudadanía conozca la verdad."]),
      wo("No es su trabajo proteger a nadie, sino informar con rigor.", "No… sino + infinitivo.", "Her job isn't to protect anyone, but to report rigorously."),
    ]
  ),
  L(
    "la-firma-pendiente",
    "b2r-tema-denunciar",
    "Repaso temático: callar o denunciar",
    "Accidentes laborales, presiones y valentía — el subjuntivo de influencia y los arrepentimientos.",
    "7 min",
    [
      sec(
        "La presión",
        "Las presiones se cuentan con verbos de influencia en pasado + imperfecto de subjuntivo.",
        [
          ["Su jefe le sugirió que firmara el informe sin hacer preguntas.", "Her boss suggested she sign the report without asking questions."],
          ["Sus compañeros le pedían que no complicara las cosas.", "Her coworkers asked her not to complicate things."],
        ],
        [
          fb("Completa.", "Le prohibieron que ___ con los inspectores. (hablar, ella)", "hablara", "Prohibir (pasado) + imperfecto."),
          fb("Completa.", "Le daba miedo que la ___ si decía la verdad. (despedir, ellos)", "despidieran", "Dar miedo (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera firmado, ___ la conciencia intranquila para siempre. (tener, ella; ahora)", "tendría", "Mixta."),
      fb("Completa.", "Es inaceptable que la empresa ___ ocultar el accidente. (querer)", "quiera", "Es inaceptable que + subjuntivo."),
      fb("Completa.", "Al final, ___ la valentía de denunciarlo. (tener, ella, pretérito)", "tuvo", "Pretérito."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["denunciar", "to report / blow the whistle"],
          ["el accidente laboral", "workplace accident"],
          ["encubrir", "to cover up"],
          ["las represalias", "reprisals"],
        ],
        "Vocabulario laboral."
      ),
      mc(
        "«If nobody speaks up, it will happen again.»",
        ["Si nadie habla, volverá a pasar.", "Si nadie hablara, volverá a pasar.", "Si nadie hablará, vuelve a pasar.", "Si nadie hable, volverá a pasar."],
        0,
        "Tipo 1."
      ),
      toEs("She would never have forgiven herself if she had kept quiet.", "Nunca se habría perdonado si se hubiera callado.", "Tipo 3 invertido.", ["Nunca se lo habría perdonado a sí misma si se hubiera callado.", "Nunca se hubiera perdonado si se hubiera callado."]),
      wo("Lo más difícil no fue hablar, sino soportar las consecuencias.", "Lo más + no… sino.", "The hardest part wasn't speaking up but bearing the consequences."),
    ]
  ),
  L(
    "cartas-para-despues",
    "b2r-tema-mensajes-despues",
    "Repaso temático: mensajes para después",
    "Cartas que se leerán en el futuro — cuando + subjuntivo, deseos y consejos a los que quedan.",
    "7 min",
    [
      sec(
        "Escribir para el futuro",
        "Las cartas para después están llenas de cuando + subjuntivo y de deseos: cuando leas esto…, espero que…, ojalá…",
        [
          ["Cuando leas esta carta, ya no estaré contigo.", "When you read this letter, I'll no longer be with you."],
          ["Espero que seas feliz y que no tengas miedo de vivir.", "I hope you're happy and not afraid to live."],
        ],
        [
          fb("Completa.", "Cuando ___ tu primer trabajo, recuerda lo orgullosa que estoy de ti. (conseguir, tú)", "consigas", "Cuando + subjuntivo."),
          fb("Completa.", "Quiero que ___ que siempre te quise. (saber, tú)", "sepas", "Querer que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá ___ estado ahí para verlo. (haber, yo)", "hubiera", "Ojalá + pluscuamperfecto (imposible)."),
      fb("Completa.", "No dejes que nadie te ___ lo que puedes hacer. (decir)", "diga", "Dejar que + subjuntivo."),
      fb("Completa.", "Si tuviera más tiempo, te ___ cien cartas más. (escribir)", "escribiría", "Tipo 2."),
      mt(
        "Relaciona cada momento con el mensaje.",
        [
          ["Cuando te gradúes,", "celebra como si yo estuviera ahí."],
          ["Cuando te enamores,", "no tengas miedo."],
          ["Cuando estés triste,", "relee esta carta."],
          ["Cuando tengas hijos,", "cuéntales historias de mí."],
        ],
        "Cuando + subjuntivo + mandato."
      ),
      mc(
        "«Whatever happens, never stop laughing.»",
        ["Pase lo que pase, nunca dejes de reír.", "Pasa lo que pasa, nunca dejes de reír.", "Pase lo que pasara, nunca dejas de reír.", "Lo que pase, nunca deja de reír."],
        0,
        "Pase lo que pase + mandato negativo."
      ),
      toEs("I want you to remember me smiling.", "Quiero que me recuerdes sonriendo.", "Querer que + subjuntivo + gerundio.", ["Quiero que me recuerdes sonriente."]),
      wo("Aunque no me veas, estaré en cada cosa que hagas.", "Aunque + subjuntivo; relativa con subjuntivo (futuro).", "Even if you can't see me, I'll be in everything you do."),
    ]
  ),
  L(
    "la-llave-que-no-abria-nada",
    "b2r-tema-casa-infancia",
    "Repaso temático: la casa de la infancia",
    "Volver al lugar donde creciste — imperfecto, pluscuamperfecto, relativas y nostalgia.",
    "7 min",
    [
      sec(
        "Todo había cambiado",
        "El regreso contrasta lo que era (imperfecto) con lo que encontró (pretérito) y lo que había cambiado (pluscuamperfecto).",
        [
          ["La casa donde crecí estaba pintada de otro color.", "The house where I grew up was painted a different color."],
          ["Habían cortado el árbol al que me subía de niño.", "They had cut down the tree I used to climb as a child."],
        ],
        [
          fb("Completa.", "Los nuevos dueños ___ la cocina por completo. (reformar, pluscuamperfecto)", "habían reformado", "Pluscuamperfecto."),
          fb("Completa.", "Era como si nunca ___ vivido allí. (haber, yo)", "hubiera", "Como si + pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "La habitación en la ___ dormía era ahora un despacho.", "que", "En la que."),
      fb("Completa.", "Les pedí que me ___ entrar un momento. (dejar, ellos)", "dejaran", "Pedir (pasado) + imperfecto."),
      fb("Completa.", "Si no hubiera vuelto, ___ el recuerdo intacto. (conservar, yo; ahora)", "conservaría", "Mixta."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la nostalgia", "nostalgia"],
          ["el desván", "attic"],
          ["reformar", "to renovate"],
          ["el recuerdo", "memory (of something)"],
        ],
        "Vocabulario de la casa y la memoria."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Todo parecía más pequeño de lo que recordaba.", "Fue en ese pasillo donde aprendí a andar.", "No quedaba nada que me resultara familiar.", "La llave que guardaba no abrió ninguna puerta ya no."],
        [0, 1, 2],
        "Doble negación mal construida al final: ya no abría ninguna puerta."
      ),
      toEs("The key I had kept for thirty years didn't open anything.", "La llave que había guardado durante treinta años no abría nada.", "Relativa con pluscuamperfecto + imperfecto.", ["La llave que había guardado treinta años no abría nada."]),
      wo("Lo que buscaba no estaba en la casa, sino en mí.", "Lo que + no… sino.", "What I was looking for wasn't in the house but in me."),
    ]
  ),
  L(
    "grabaciones-para-marina",
    "b2r-tema-memoria",
    "Repaso temático: grabar la memoria",
    "Enfermedad, olvido y mensajes a uno mismo — futuro, subjuntivo temporal y consejos.",
    "7 min",
    [
      sec(
        "Mensajes al yo del futuro",
        "Hablarle a tu futuro yo exige cuando + subjuntivo y mandatos: cuando no te acuerdes de mí, escucha esto.",
        [
          ["Cuando no recuerdes quién eres, escucha esta grabación.", "When you don't remember who you are, listen to this recording."],
          ["Quiero que sepas que tu vida ha sido buena.", "I want you to know that your life has been good."],
        ],
        [
          fb("Completa.", "Cuando ___ miedo, recuerda que no estás sola. (tener, tú)", "tengas", "Cuando + subjuntivo."),
          fb("Completa.", "Te grabo esto para que no ___ quién eres. (olvidar, tú)", "olvides", "Para que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque ___ mi nombre, seguiré siendo tu hija. (olvidar, tú)", "olvides", "Aunque + subjuntivo (hipótesis futura)."),
      fb("Completa.", "El médico nos dijo que la enfermedad ___ lentamente. (avanzar, condicional)", "avanzaría", "Estilo indirecto."),
      fb("Completa.", "Ojalá ___ detener el tiempo. (poder, nosotros)", "pudiéramos", "Ojalá + imperfecto (deseo imposible)."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["perder la memoria", "to lose one's memory"],
          ["el diagnóstico", "diagnosis"],
          ["olvidarse de", "to forget about"],
          ["reconocer a alguien", "to recognize someone"],
        ],
        "Vocabulario de la memoria."
      ),
      mc(
        "«Even if you don't recognize me, I'll recognize you.»",
        ["Aunque no me reconozcas, yo te reconoceré.", "Aunque no me reconoces, yo te reconocería.", "Aunque no me reconocieras, yo te reconozco ayer.", "Aunque no me reconocerás, te reconozco."],
        0,
        "Aunque + subjuntivo + futuro."
      ),
      toEs("What matters is not remembering, but having lived.", "Lo que importa no es recordar, sino haber vivido.", "Lo que + no… sino + infinitivo compuesto.", ["Lo importante no es recordar, sino haber vivido."]),
      wo("Si algún día me olvido de todo, que alguien me cuente esta historia.", "Si + presente + que + subjuntivo (deseo).", "If one day I forget everything, may someone tell me this story."),
    ]
  ),
  L(
    "el-chico-del-otro-lado-de-la-pantalla",
    "b2r-tema-identidad-online",
    "Repaso temático: quién hay al otro lado",
    "Amistades en línea, engaños y confianza — como si, pluscuamperfecto y consejos.",
    "7 min",
    [
      sec(
        "El engaño",
        "Descubrir un engaño: nunca había sospechado que…, hablaba como si…, si lo hubiera sabido…",
        [
          ["Hablaba como si tuviera mi edad.", "He talked as if he were my age."],
          ["Nunca había sospechado que no fuera quien decía.", "I had never suspected he wasn't who he claimed to be."],
        ],
        [
          fb("Completa.", "Me escribía como si me ___ desde siempre. (conocer, él)", "conociera", "Como si + imperfecto."),
          fb("Completa.", "Si lo ___ sabido antes, no le habría contado tantas cosas. (haber, yo)", "hubiera", "Tipo 3."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis padres me aconsejaron que nunca ___ datos personales en internet. (dar, yo)", "diera", "Aconsejar (pasado) + imperfecto."),
      fb("Completa.", "Es importante que ___ con un adulto si algo te parece raro. (hablar, tú)", "hables", "Es importante que + subjuntivo."),
      fb("Completa.", "Resultó que la persona con ___ hablaba era mucho mayor.", "quien", "Con quien."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el perfil falso", "fake profile"],
          ["suplantar", "to impersonate"],
          ["bloquear", "to block"],
          ["denunciar una cuenta", "to report an account"],
        ],
        "Vocabulario de seguridad en línea."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["No confíes en nadie que te pida fotos.", "Fue su madre quien descubrió el engaño.", "Ojalá le hubiera hecho caso a mi hermana.", "Se comportaba como si era un amigo de verdad."],
        [0, 1, 2],
        "Como si + imperfecto de subjuntivo: como si fuera."
      ),
      toEs("He understood me better than anyone, or so I thought.", "Me entendía mejor que nadie, o eso creía yo.", "Imperfecto + mejor que nadie.", ["Me comprendía mejor que nadie, o eso creía yo.", "Me entendía mejor que nadie, o eso pensaba."]),
      wo("Lo que parecía una amistad resultó ser una mentira.", "Lo que + resultar ser.", "What seemed like a friendship turned out to be a lie."),
    ]
  ),
  L(
    "cien-palabras-nuevas",
    "b2r-tema-aprender-idioma-nino",
    "Repaso temático: cien palabras nuevas",
    "Un niño que llega a un país nuevo y aprende su idioma — logros, emociones y cambios.",
    "7 min",
    [
      sec(
        "Las primeras palabras",
        "Contar el proceso: al principio no entendía nada, poco a poco se fue soltando, llegó a hablar con fluidez.",
        [
          ["Al principio se sentía como si estuviera en otro planeta.", "At first he felt as if he were on another planet."],
          ["Poco a poco se fue soltando y hizo su primer amigo.", "Little by little he loosened up and made his first friend."],
        ],
        [
          fb("Completa.", "Su profesora le pidió a un compañero que lo ___. (ayudar)", "ayudara", "Pedir (pasado) + imperfecto."),
          fb("Completa.", "Le daba vergüenza que los demás se ___ de su acento. (reír)", "rieran", "Dar vergüenza (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "En seis meses, ___ a hablar casi sin acento. (llegar, pretérito)", "llegó", "Llegar a + infinitivo = to manage to."),
      fb("Completa.", "Si no hubiera tenido a su amigo, le ___ costado mucho más. (haber)", "habría", "Tipo 3."),
      fb("Completa.", "Cada palabra que ___ era una pequeña victoria. (aprender, él)", "aprendía", "Relativa con imperfecto (hábito)."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["soltarse", "to loosen up"],
          ["el acento", "accent"],
          ["adaptarse", "to adapt"],
          ["hacerse entender", "to make oneself understood"],
        ],
        "Vocabulario del aprendizaje de idiomas."
      ),
      mc(
        "«It was his friend who taught him the first hundred words.»",
        ["Fue su amigo quien le enseñó las primeras cien palabras.", "Fue su amigo que le enseñó las primeras cien palabras.", "Era su amigo quien le enseñaba las primeras cien palabras ayer.", "Fue su amigo lo que le enseñó las cien primeras."],
        0,
        "Frase hendida con quien."
      ),
      toEs("Now he speaks as if he had been born here.", "Ahora habla como si hubiera nacido aquí.", "Como si + pluscuamperfecto de subjuntivo.", ["Ahora habla como si hubiese nacido aquí."]),
      wo("No hay idioma que no se pueda aprender con paciencia.", "Antecedente inexistente + se pasivo.", "There's no language that can't be learned with patience."),
    ]
  ),
  L(
    "vidas-extra",
    "b2r-tema-amistad-online",
    "Repaso temático: amistades que empiezan en línea",
    "Videojuegos, confianza y amistades reales — relativas, conjunciones y estilo indirecto.",
    "7 min",
    [
      sec(
        "Del juego a la vida real",
        "Contar cómo nace una amistad: nos conocimos jugando, no sabía que…, me contó que…",
        [
          ["Nos conocimos en un juego en línea en el que había que cooperar.", "We met in an online game where you had to cooperate."],
          ["Me contó que en el colegio se sentía muy solo.", "He told me that at school he felt very lonely."],
        ],
        [
          fb("Completa.", "Nunca pensé que ___ tan buenos amigos. (llegar a ser, nosotros; condicional)", "llegaríamos a ser", "Futuro del pasado + llegar a ser."),
          fb("Completa.", "Me pidió que no se lo ___ a nadie. (contar, yo)", "contara", "Pedir (pasado) + imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Quedamos en vernos en cuanto ___ las vacaciones. (empezar)", "empezaran", "En cuanto + imperfecto (futuro visto desde el pasado)."),
      fb("Completa.", "No había nadie en clase que lo ___ como yo. (entender)", "entendiera", "Antecedente inexistente en pasado."),
      fb("Completa.", "Si no nos hubiéramos conocido en el juego, nunca ___ hablado en el colegio. (haber, nosotros)", "habríamos", "Tipo 3."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la partida", "game / match"],
          ["cooperar", "to cooperate"],
          ["quedar con alguien", "to meet up with someone"],
          ["la vida extra", "extra life"],
        ],
        "Vocabulario de videojuegos."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue en el juego donde empezamos a confiar el uno en el otro.", "Aunque apenas hablábamos en clase, en línea éramos inseparables.", "Me alegro de que por fin nos hayamos visto en persona.", "Me dijo que se sienta solo en el colegio ayer."],
        [0, 1, 2],
        "Estilo indirecto: me dijo que se sentía solo."
      ),
      toEs("A real friend is someone who is there when you need them.", "Un amigo de verdad es alguien que está ahí cuando lo necesitas.", "Relativa con indicativo (definición general) + cuando + indicativo (hábito).", ["Un verdadero amigo es alguien que está ahí cuando lo necesitas.", "Un amigo de verdad es alguien que está cuando lo necesitas."]),
      wo("Lo que empezó como un juego se convirtió en una amistad para toda la vida.", "Lo que + convertirse en.", "What started as a game became a lifelong friendship."),
    ]
  ),
];
