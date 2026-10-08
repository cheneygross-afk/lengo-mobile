// Synced from cheneygross-afk/lengo:src/lib/lessons/cosas-coloquiales-reinforcement.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Cosas Coloquiales reinforcement lessons -- woven into
// COSAS_COLOQUIALES_LESSONS right after the lesson each one reinforces (see
// weave.ts). Entirely in Spanish, like the base lessons. Each cultural topic
// gets extra practice in a new format: dialogue labs, error hunts, contrast
// clinics, real-world missions and spiral reviews that recycle the
// colloquial language taught in the topic.
const { mc, ms, fb, toEs, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("C1/C2", after, slug, title, summary, duration, sections, exercises);

export const COSAS_COLOQUIALES_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "festivals-traditions-hispanic-world-1",
    "ccr-festival-calendar-match",
    "Red de palabras: el calendario festivo",
    "Día de Muertos, Reyes, San Fermín, Inti Raymi, Fallas: relaciona cada fiesta con su país, su fecha y su vocabulario.",
    "7 min",
    [
      sec(
        "Un año de fiestas",
        "Reyes Magos (6 de enero; roscón, cabalgata). Carnaval (febrero; comparsas, disfraces). Fallas de Valencia (marzo; ninots, mascletà, cremà). Semana Santa (pasos, cofradías, nazarenos). San Fermín (Pamplona, 7 de julio; encierros). Inti Raymi (Cusco, 24 de junio; fiesta del Sol). Día de Muertos (México, 1-2 de noviembre; ofrendas, calaveritas, pan de muerto). Nochevieja (uvas a medianoche en España).",
        [
          ["En Nochevieja nos comemos las doce uvas.", "On New Year's Eve we eat the twelve grapes."],
          ["Pusimos una ofrenda con pan de muerto y cempasúchil.", "We set up an offering with bread of the dead and marigolds."],
        ],
        [
          mc(
            "¿En qué fiesta se queman grandes figuras de cartón piedra?",
            ["las Fallas", "el Inti Raymi", "el Día de Muertos", "los Reyes Magos"],
            0,
            "En la cremà de las Fallas de Valencia se queman los ninots, grandes figuras de cartón piedra. El Inti Raymi celebra al Sol, el Día de Muertos honra a los difuntos con ofrendas y los Reyes Magos traen regalos; en ninguna se quema nada."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada fiesta con su lugar.",
        [
          ["San Fermín", "Pamplona"],
          ["Inti Raymi", "Cusco"],
          ["Día de Muertos", "México"],
          ["Fallas", "Valencia"],
        ],
        "Geografía festiva."
      ),
      fb("Completa.", "El 6 de enero se come el ___ de Reyes.", "roscón", "Se dice «roscón de Reyes» en España; en México es «rosca de Reyes». Es el dulce típico del 6 de enero."),
      fb("Completa.", "Las flores naranjas de las ofrendas se llaman ___. (nombre de origen náhuatl; también «flor de muerto»)", "cempasúchil", "Flor típica del Día de Muertos; también se escribe cempoalxóchitl."),
      fb("Completa.", "En San Fermín, los toros corren por las calles en los ___.", "encierros", "El encierro es la carrera de los toros por las calles hasta la plaza; en plural, «los encierros» de San Fermín."),
      mc(
        "«Echar la casa por la ventana» en Nochevieja significa…",
        ["gastar mucho para celebrar", "limpiar la casa", "mudarse", "enfadarse"],
        0,
        "«Echar la casa por la ventana» es gastar mucho, sin reparar en gastos, para celebrar algo. No tiene sentido literal: no se refiere a limpiar ni a mudarse, ni expresa enfado."
      ),
      ms(
        "¿Qué elementos pertenecen al Día de Muertos?",
        ["ofrenda", "calaveritas de azúcar", "pan de muerto", "mascletà"],
        [0, 1, 2],
        "La ofrenda, las calaveritas de azúcar y el pan de muerto son elementos del Día de Muertos mexicano. La mascletà, en cambio, es el estruendo de petardos de las Fallas de Valencia."
      ),
      wo("En Nochevieja nos comemos una uva con cada campanada.", "Tradición española.", "On New Year's Eve we eat one grape with each chime."),
    ]
  ),
  L(
    "festivals-traditions-hispanic-world-2",
    "ccr-festival-dialogue-invitation",
    "Laboratorio de diálogo: te invitan a una fiesta del pueblo",
    "Un amigo te invita a las fiestas de su pueblo: acepta, pregunta por las costumbres y reacciona como un nativo.",
    "7 min",
    [
      sec(
        "Las fiestas patronales",
        "Casi todos los pueblos de España celebran a su santo patrón con fiestas: verbena (baile popular nocturno), procesión, peñas (grupos de amigos con local propio), charanga (banda que recorre las calles), vaquillas, fuegos artificiales. Expresiones: «¡Vente a las fiestas!», «Nos vamos de verbena», «Aquí se trasnocha».",
        [
          ["—¿Te vienes a las fiestas de mi pueblo? —¡Claro! ¿Qué se hace?", "—Want to come to my village's festival? —Sure! What happens?"],
          ["Por la noche hay verbena en la plaza.", "At night there's a dance in the square."],
        ],
        [
          mc(
            "«Verbena» es…",
            ["un baile popular nocturno al aire libre", "una planta medicinal solamente", "un desfile militar", "una misa"],
            0,
            "En contexto festivo, una verbena es un baile popular nocturno al aire libre. Aunque «verbena» también es el nombre de una planta, no es «solamente» eso, y no tiene nada de desfile militar ni de misa."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "—¿Te ___ a las fiestas de mi pueblo? (venirse, tú)", "vienes", "«Venirse» (con «te») es muy coloquial para invitar a alguien a acompañarte: ¿te vienes? = ¿vienes conmigo?"),
      fb("Completa.", "Mis amigos y yo tenemos una ___ con local propio. (grupo festivo)", "peña", "Peña = grupo de amigos con local propio en fiestas."),
      fb("Completa.", "La ___ recorre las calles tocando pasodobles. (banda popular)", "charanga", "La charanga es una banda popular de viento y percusión que anima las fiestas por la calle."),
      mc(
        "«Aquí se trasnocha mucho» significa…",
        ["la gente se acuesta muy tarde", "hace frío por la noche", "no hay fiestas", "la gente madruga"],
        0,
        "«Trasnochar» es acostarse muy tarde o pasar la noche despierto. Lo contrario es «madrugar» (levantarse temprano); y la palabra no tiene que ver con el frío ni con la falta de fiestas."
      ),
      mc(
        "Tu amigo dice: «Prepárate, que en mi pueblo las fiestas son la leche». Significa que…",
        ["son estupendas", "hay mucha leche", "son aburridas", "son peligrosas"],
        0,
        "«Ser la leche» es coloquial de España y, en positivo, significa ser increíble o estupendo. No se toma en sentido literal (no hay leche), y aquí el tono entusiasta descarta «aburridas» o «peligrosas»."
      ),
      toEs("There's a dance in the square tonight.", "Esta noche hay verbena en la plaza.", "«Verbena» es el baile popular nocturno de las fiestas; «hay verbena» funciona sin artículo, como «hay baile».", ["Esta noche hay baile en la plaza.", "Hay verbena en la plaza esta noche."]),
      wo("Las fiestas del pueblo son en honor a su santo patrón.", "Fiestas patronales.", "The village festival is in honor of its patron saint."),
    ]
  ),
  L(
    "festivals-traditions-hispanic-world-3",
    "ccr-festival-mission-explain",
    "Misión real: explica una fiesta a un extranjero",
    "Un amigo extranjero no entiende el Día de Muertos: explícale su sentido sin caer en el tópico de «Halloween mexicano».",
    "8 min",
    [
      sec(
        "Explicar el sentido, no solo el ritual",
        "Contraste: «No es Halloween: no se trata de dar miedo, sino de recordar». Sentido: «Se cree que las almas vuelven a visitar a sus familias». Rituales: ofrendas, velas, fotos, comida favorita del difunto, visitas al panteón. Tono: festivo y afectuoso, no lúgubre. Vocabulario: difuntos, ánimas, calaveritas literarias (versos humorísticos).",
        [
          ["No se trata de dar miedo, sino de recordar a los que se fueron.", "It's not about scaring people, but about remembering those who are gone."],
          ["Ponemos la comida favorita del difunto en la ofrenda.", "We put the deceased's favorite food on the altar."],
        ],
        [
          mc(
            "¿Qué frase explica mejor el sentido de la fiesta?",
            ["Es una celebración para recordar con cariño a los difuntos.", "Es el Halloween de México.", "Es una fiesta para asustar.", "Es una fiesta de disfraces."],
            0,
            "Presentar el Día de Muertos como un recuerdo afectuoso de los difuntos capta su sentido. Llamarlo «el Halloween de México» o una fiesta «para asustar» o «de disfraces» repite el tópico: el objetivo no es dar miedo, sino honrar a los muertos."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No se trata de dar miedo, ___ de recordar.", "sino", "«No… sino…» corrige una negación: tras «no», la alternativa verdadera se introduce con «sino» (no «pero»)."),
      fb("Completa.", "Se cree que las almas ___ a visitar a sus familias. (volver)", "vuelven", "Tras «se cree que» se usa indicativo (vuelven), porque se presenta la creencia como afirmación."),
      fb("Completa.", "Las calaveritas ___ son versos humorísticos sobre la muerte. (de literatura)", "literarias", "El adjetivo concuerda con «calaveritas» (femenino plural): calaveritas literarias."),
      mc(
        "¿Cuál es el tono de la fiesta?",
        ["festivo y afectuoso", "lúgubre y triste", "de terror", "solemne sin alegría"],
        0,
        "El Día de Muertos tiene un tono festivo y afectuoso: se recibe a los difuntos con música, comida y humor. «Lúgubre y triste», «de terror» o «solemne sin alegría» corresponden a otras visiones de la muerte, no a esta fiesta."
      ),
      ms(
        "¿Qué se pone en una ofrenda?",
        ["fotos del difunto", "velas", "su comida favorita", "una calabaza con cara de miedo"],
        [0, 1, 2],
        "En la ofrenda se ponen fotos del difunto, velas y su comida favorita para recibir su visita. La calabaza con cara de miedo es un símbolo de Halloween, ajeno a esta tradición."
      ),
      toEs("It's not about being scared; it's about remembering.", "No se trata de tener miedo, sino de recordar.", "«No se trata de X, sino de Y» corrige la idea: tras la negación, «sino» introduce la alternativa verdadera.", ["No se trata de asustarse, sino de recordar.", "No es cuestión de tener miedo, sino de recordar."]),
      wo("Ese día las familias visitan el panteón y comparten comida con sus difuntos.", "Ritual.", "That day families visit the cemetery and share food with their departed."),
    ]
  ),
  L(
    "food-culture-sobremesa-1",
    "ccr-food-sobremesa-contrast",
    "Contraste: sobremesa, aperitivo, merienda y picoteo",
    "Momentos de la comida que no tienen traducción exacta: cuándo son, qué se hace y cómo se habla de ellos.",
    "7 min",
    [
      sec(
        "Los momentos de comer",
        "Aperitivo: antes de comer, una caña o un vermú con algo de picar (España). Sobremesa: la charla después de comer, sin levantarse. Merienda: comida ligera por la tarde (onces en Chile). Picoteo (España): comer un poco de todo, informalmente, de platos compartidos. Tapear / ir de tapas: ir de bar en bar. Ir de cañas: salir a tomar cervezas.",
        [
          ["Nos quedamos de sobremesa hasta las seis.", "We stayed chatting at the table until six."],
          ["¿Tomamos el aperitivo antes de comer?", "Shall we have a drink and a snack before lunch?"],
        ],
        [
          mc(
            "En Chile, la merienda de la tarde se llama…",
            ["las onces", "el aperitivo", "la sobremesa", "el picoteo"],
            0,
            "En Chile, «las onces» es la merienda-cena de la tarde. El aperitivo va antes de comer, la sobremesa es la charla tras la comida y el picoteo es comer cosas variadas de forma informal."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el momento con su descripción.",
        [
          ["aperitivo", "bebida y algo de picar antes de comer"],
          ["sobremesa", "charla después de comer"],
          ["merienda", "comida ligera por la tarde"],
          ["tapeo", "ir de bar en bar comiendo tapas"],
        ],
        "Momentos gastronómicos."
      ),
      fb("Completa.", "Nos quedamos de ___ hasta que se hizo de noche.", "sobremesa", "«Quedarse de sobremesa» es seguir charlando en la mesa después de comer."),
      fb("Completa.", "Esta tarde vamos a ___ por el centro: de bar en bar, una tapa en cada uno. (ir de tapas, infinitivo)", "tapear", "«Tapear» es ir de bar en bar tomando tapas; tras «vamos a» va el infinitivo."),
      fb("Completa.", "Los niños ___ un bocadillo a las seis. (tomar la merienda)", "meriendan", "«Merendar» es tomar la merienda; diptonga en presente: ellos meriendan."),
      mc(
        "«Hay picoteo en casa de Ana» significa que…",
        ["habrá cosas variadas para picar, de manera informal", "habrá una cena de gala con varios platos", "solo habrá bebidas", "habrá que llevar la comida de casa"],
        0,
        "El picoteo es una comida informal a base de cosas variadas para picar. Una cena de gala con varios platos es lo contrario; «solo bebidas» no incluye comida, y llevar la comida de casa no es lo que indica la palabra."
      ),
      toEs("We stayed chatting at the table for hours.", "Nos quedamos de sobremesa durante horas.", "«Quedarse (o estar) de sobremesa» es la forma natural de decir que se sigue charlando en la mesa tras comer.", ["Estuvimos de sobremesa durante horas.", "Nos quedamos horas de sobremesa."]),
      wo("Antes de comer siempre tomamos el aperitivo en el bar de la esquina.", "Aperitivo.", "Before lunch we always have a drink and snack at the corner bar."),
    ]
  ),
  L(
    "food-culture-sobremesa-2",
    "ccr-food-table-etiquette-error-hunt",
    "Caza de errores: metidas de pata en la mesa",
    "Un invitado extranjero comete errores de etiqueta en una comida familiar: detéctalos y explica cómo lo haría un nativo.",
    "7 min",
    [
      sec(
        "Normas tácitas",
        "No empezar a comer antes que el anfitrión («¡Que aproveche!» o «¡Buen provecho!» da la señal). No levantarse nada más terminar. Rechazar la segunda ración una vez es cortesía; la anfitriona insistirá. Elogiar la comida. Pedir la cuenta cuesta: todos quieren invitar («Esta la pago yo», «Ni hablar, invito yo»).",
        [
          ["¡Que aproveche!", "Enjoy your meal!"],
          ["Ni hablar, esta vez invito yo.", "No way, this time it's on me."],
        ],
        [
          mc(
            "Terminas de comer y el anfitrión sigue charlando. Lo adecuado es…",
            ["quedarse a la sobremesa", "levantarse y marcharse enseguida", "pedir la cuenta", "mirar el móvil"],
            0,
            "La sobremesa forma parte de la comida: si el anfitrión sigue charlando, lo educado es quedarse. Levantarse y marcharse enseguida o mirar el móvil resulta descortés, y pedir la cuenta no tiene sentido en una casa particular."
          ),
        ]
      ),
    ],
    [
      mc(
        "El invitado empieza a comer antes de que se sirva a todos. Error:",
        ["no esperar la señal del anfitrión", "comer demasiado rápido", "usar cubiertos", "hablar"],
        0,
        "El error es no esperar a que se sirva a todos y a la señal del anfitrión (el «¡que aproveche!» o un «empezad»). Comer rápido, usar cubiertos o hablar no son el problema que describe la escena."
      ),
      mc(
        "Te ofrecen más paella. Respuesta natural:",
        ["Uy, no, que ya he comido muchísimo. Venga, pero solo un poquito.", "No.", "Dame todo.", "No me gusta."],
        0,
        "Lo natural es el ritual de rechazo cortés que acaba aceptando («Uy, no… venga, pero solo un poquito»). Un «No.» seco o «No me gusta» suenan bruscos, y «Dame todo» resulta maleducado."
      ),
      fb("Completa.", "¡Que ___! (deseo antes de comer)", "aproveche", "«¡Que aproveche!» es el deseo habitual antes de comer (o al ver a alguien comiendo); aproveche va en subjuntivo por ser un deseo."),
      fb("Completa.", "—Pago yo. —Ni ___, esta vez invito yo.", "hablar", "«Ni hablar» es un rechazo rotundo y coloquial: aquí, «de ningún modo, pago yo»."),
      fb("Completa.", "Esto está ___: tienes que darme la receta. (muy bueno, coloquial)", "buenísimo", "El superlativo coloquial de «bueno» es «buenísimo»; «bonísimo» existe pero suena culto y raro en la conversación."),
      ms(
        "¿Qué comportamientos son adecuados?",
        ["elogiar la comida", "quedarse a la sobremesa", "insistir en pagar", "levantarse sin despedirse"],
        [0, 1, 2],
        "Elogiar la comida, quedarse a la sobremesa e insistir en pagar son gestos esperados de buena educación. Levantarse sin despedirse, en cambio, se considera descortés."
      ),
      wo("Esta vez no te dejo pagar, que la última invitaste tú.", "Pugna por invitar.", "This time I won't let you pay, since you treated last time."),
    ]
  ),
  L(
    "food-culture-sobremesa-3",
    "ccr-food-leaving-dialogue",
    "Laboratorio de diálogo: irse de una comida (sin irse)",
    "«Bueno, ya me voy yendo»: el ritual de la despedida larga y cómo gestionarlo con naturalidad.",
    "6 min",
    [
      sec(
        "La despedida en fases",
        "1) Anuncio: «Bueno, ya me voy yendo». 2) Resistencia del anfitrión: «¿Ya? Si es prontísimo». 3) Justificación: «Es que mañana madrugo». 4) Nueva charla en la puerta. 5) Despedida real: «Venga, que lo he pasado genial». Irse sin este ritual puede parecer frío.",
        [
          ["Bueno, ya me voy yendo, que mañana madrugo.", "Well, I'd better get going, I have an early start tomorrow."],
          ["¿Ya te vas? ¡Si es prontísimo!", "Leaving already? It's so early!"],
        ],
        [
          mc(
            "«Ya me voy yendo» indica…",
            ["que empiezas el proceso de despedida", "que ya te has ido", "que no te vas", "que te enfadas"],
            0,
            "«Ya me voy yendo» anuncia con suavidad que empiezas a despedirte, aunque aún tardes un rato. No significa que ya te hayas ido ni que no te vayas, y no expresa enfado."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Bueno, ya me voy ___. (gerundio de ir)", "yendo", "«Irse yendo» (ir + gerundio) presenta la marcha como un proceso gradual; el gerundio de ir es «yendo»."),
      fb("Completa.", "—¿Ya te vas? ¡Si es ___! (muy pronto)", "prontísimo", "El sufijo -ísimo intensifica también adverbios: pronto → prontísimo."),
      fb("Completa.", "Es que mañana ___ temprano. (levantarse, coloquial: madrugar)", "madrugo", "«Madrugar» ya significa levantarse temprano; en presente con valor de futuro: mañana madrugo."),
      mc(
        "Tras despedirte, seguís hablando veinte minutos en la puerta. Esto es…",
        ["normal y parte del ritual", "una grosería", "muy raro", "un error del anfitrión"],
        0,
        "Las despedidas largas, que siguen en la puerta, son normales y forman parte del ritual. No son una grosería ni un error del anfitrión: cortar en seco sí resultaría brusco."
      ),
      mt(
        "Relaciona cada frase con su fase.",
        [
          ["Bueno, ya me voy yendo.", "anuncio"],
          ["¿Ya? Quédate un poco más.", "resistencia"],
          ["Venga, lo he pasado genial.", "despedida final"],
        ],
        "Fases de la despedida."
      ),
      toEs("Well, I'd better get going.", "Bueno, ya me voy yendo.", "«Me voy yendo» es la fórmula coloquial para empezar a despedirse, con el gerundio que suaviza la marcha.", ["Bueno, me voy yendo.", "Bueno, me tengo que ir yendo."]),
      wo("Venga, que lo he pasado genial; a la próxima invito yo.", "Despedida final.", "Come on, I've had a great time; next time it's on me."),
    ]
  ),
  L(
    "soccer-popular-passion-1",
    "ccr-soccer-metaphors-everyday",
    "Contraste: metáforas futbolísticas fuera del campo",
    "Meter un gol, estar en fuera de juego, casarse con alguien de penalti, echar balones fuera: del estadio a la vida.",
    "7 min",
    [
      sec(
        "Del campo a la calle",
        "Meterle un gol a alguien: engañarlo, colarle algo. Estar en fuera de juego: estar desinformado o fuera de lugar. Echar balones fuera: eludir una responsabilidad. Casarse de penalti (España): por un embarazo inesperado (coloquial). Pasar la pelota: transferir la responsabilidad. Salvar en el último minuto / en el descuento (España; en América: en el tiempo de reposición o de descuento). Sacar tarjeta roja: rechazar o expulsar.",
        [
          ["Cuando le pregunté, echó balones fuera.", "When I asked him, he dodged the question."],
          ["Me han metido un gol con este coche usado.", "They've conned me with this used car."],
        ],
        [
          mc(
            "«Estás en fuera de juego» dicho a alguien que no sabe la noticia significa…",
            ["no estás enterado", "estás castigado", "juegas mal", "estás de vacaciones"],
            0,
            "«Estar en fuera de juego» es, en sentido figurado, no estar enterado de algo. No significa estar castigado ni jugar mal, y no tiene relación con las vacaciones."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la metáfora con su significado.",
        [
          ["echar balones fuera", "eludir una responsabilidad"],
          ["meterle un gol a alguien", "engañar"],
          ["pasar la pelota", "transferir la responsabilidad"],
          ["en el descuento", "en el último momento"],
        ],
        "Metáforas futbolísticas."
      ),
      fb("Completa.", "Aprobamos el presupuesto en el ___: a las 23:59.", "descuento", "«En el descuento» (el tiempo añadido del partido) significa en el último momento."),
      fb("Completa.", "El ministro echó balones ___ cuando le preguntaron por la crisis.", "fuera", "«Echar balones fuera» es eludir una pregunta o una responsabilidad, como el jugador que despeja sin más."),
      fb("Completa.", "El vendedor me metió un ___: el móvil era de segunda mano.", "gol", "«Meterle un gol a alguien» es engañarlo o colársela."),
      mc(
        "«La jefa le sacó tarjeta roja a la propuesta» significa que…",
        ["la rechazó", "la aprobó", "la pospuso", "la mejoró"],
        0,
        "«Sacar tarjeta roja» a algo es rechazarlo de forma tajante, como el árbitro que expulsa a un jugador. No equivale a aprobar, posponer ni mejorar la propuesta."
      ),
      toEs("He always passes the buck to someone else.", "Siempre le pasa la pelota a otro.", "«Pasar la pelota» a alguien es traspasarle una responsabilidad incómoda; equivale a «to pass the buck».", ["Siempre le pasa la pelota a otra persona.", "Siempre pasa la pelota a otro."]),
      wo("Cuando le preguntaron por el error, echó balones fuera.", "Eludir.", "When asked about the mistake, he dodged the question."),
    ]
  ),
  L(
    "soccer-popular-passion-2",
    "ccr-soccer-commentator-style",
    "Taller de estilo: narra como un comentarista",
    "Convierte una jugada contada con frialdad en una narración radiofónica apasionada, con el léxico del fútbol.",
    "7 min",
    [
      sec(
        "El registro del comentarista",
        "Presente narrativo y frases cortas: «Recibe, gira, dispara… ¡gooool!». Léxico: centro, remate, cabezazo, pase filtrado, contragolpe, larguero, travesaño, portero (guardameta, arquero en América), hinchada / afición. Hipérbole: «partido de infarto», «golazo de otro planeta». Apodos: «el Pibe», «el Niño».",
        [
          ["¡Golazo de otro planeta!", "A goal from another planet!"],
          ["Partido de infarto en el Metropolitano.", "A heart-stopping match at the Metropolitano."],
        ],
        [
          mc(
            "En América, el portero se llama a menudo…",
            ["arquero", "defensa", "delantero", "árbitro"],
            0,
            "En gran parte de América se dice «arquero» (o «guardameta»); en España, «portero». Defensa, delantero y árbitro son otros puestos o figuras del partido, no quien está en la portería."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El balón se estrella en el ___. (palo horizontal de la portería)", "larguero", "El larguero (o travesaño) es el palo horizontal de la portería; los postes son los verticales."),
      fb("Completa.", "Centro al área y ___ de cabeza… ¡gol! (rematar, presente)", "remata", "Los comentaristas narran en presente para dar inmediatez: centro al área y remata."),
      fb("Completa.", "Fue un partido de ___: se decidió en el último minuto.", "infarto", "«Un partido de infarto» es una hipérbole: tan emocionante que casi da un ataque al corazón."),
      mc(
        "Versión de comentarista de «El jugador marcó un gol»:",
        ["¡Recibe, se perfila, dispara… golazo!", "El jugador marcó un gol.", "Se hizo un gol.", "Hubo un gol en el partido."],
        0,
        "El estilo de comentarista encadena verbos en presente con ritmo y emoción («recibe, se perfila, dispara… ¡golazo!»). «El jugador marcó un gol» o «Hubo un gol en el partido» son neutros e informativos, y «Se hizo un gol» ni siquiera es natural."
      ),
      mt(
        "Relaciona el término con su definición.",
        [
          ["contragolpe", "ataque rápido tras recuperar el balón"],
          ["hinchada", "aficionados de un equipo"],
          ["cabezazo", "golpe al balón con la cabeza"],
        ],
        "Léxico futbolístico."
      ),
      toEs("What a goal! A goal from another planet!", "¡Qué golazo! ¡Un gol de otro planeta!", "«Golazo» (aumentativo) y «de otro planeta» son hipérboles típicas de la narración deportiva.", ["¡Menudo golazo! ¡Un gol de otro planeta!", "¡Qué golazo, de otro planeta!"]),
      wo("La hinchada no para de cantar en ningún momento del partido.", "Léxico.", "The fans don't stop singing for a moment during the match."),
    ]
  ),
  L(
    "music-dance-regional-identity-1",
    "ccr-music-genre-map",
    "Red de palabras: el mapa musical hispano",
    "Tango, flamenco, cumbia, son, vallenato, ranchera, joropo, bachata: relaciona cada género con su región y su vocabulario.",
    "7 min",
    [
      sec(
        "Géneros e identidades",
        "Tango (Río de la Plata; bandoneón, milonga). Flamenco (Andalucía; cante, toque, baile, duende, palmas). Cumbia (Colombia, extendida por toda Latinoamérica). Son cubano (Cuba; tres, clave). Vallenato (Colombia; acordeón). Ranchera y mariachi (México). Joropo (Venezuela y Colombia; arpa llanera). Bachata y merengue (República Dominicana).",
        [
          ["Ese cantaor tiene duende.", "That flamenco singer has soul."],
          ["El bandoneón es el alma del tango.", "The bandoneon is the soul of tango."],
        ],
        [
          mc(
            "El instrumento emblemático del tango es…",
            ["el bandoneón", "el arpa llanera", "el tres cubano", "el acordeón vallenato"],
            0,
            "El bandoneón, un tipo de concertina, es el instrumento emblemático del tango rioplatense. El arpa llanera es del joropo venezolano y colombiano, el tres cubano del son y el acordeón del vallenato."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el género con su país o región.",
        [
          ["vallenato", "Colombia"],
          ["bachata", "República Dominicana"],
          ["ranchera", "México"],
          ["flamenco", "Andalucía"],
        ],
        "Mapa musical."
      ),
      fb("Completa.", "En flamenco, el que canta es el ___.", "cantaor", "En el flamenco se dice «cantaor/cantaora» (con la -d- caída) para quien canta flamenco; «cantante» es el término general."),
      fb("Completa.", "Cuando una actuación emociona profundamente se dice que tiene ___.", "duende", "«Tener duende» es tener ese encanto misterioso que conmueve, sobre todo en el flamenco."),
      fb("Completa.", "Una reunión o un salón donde se baila tango se llama ___.", "milonga", "Milonga: el baile social de tango (y también un género musical emparentado)."),
      mc(
        "«Tocar las palmas» en flamenco significa…",
        ["acompañar el ritmo con aplausos", "saludar", "tocar un instrumento de madera", "dejar de cantar"],
        0,
        "Tocar las palmas es acompañar el ritmo con palmadas, una técnica esencial del flamenco. No es un saludo, ni un instrumento de madera (eso serían las castañuelas o el cajón), ni significa dejar de cantar."
      ),
      toEs("That singer really has soul.", "Ese cantaor tiene mucho duende.", "«Tener duende» expresa la emoción profunda que transmite un artista; «cantaor» es el cantante de flamenco.", ["Ese cantante tiene mucho duende.", "Esa cantaora tiene mucho duende."]),
      wo("La cumbia nació en Colombia y hoy se baila en toda Latinoamérica.", "Géneros.", "Cumbia was born in Colombia and is now danced all over Latin America."),
    ]
  ),
  L(
    "music-dance-regional-identity-2",
    "ccr-music-lyrics-slang",
    "Detective de textos: jerga en las letras",
    "Versos de canciones populares (inventados) con jerga regional: descifra perreo, gozar, parcero, flow y más.",
    "7 min",
    [
      sec(
        "Letras que hablan en coloquial",
        "Reguetón y música urbana: perrear (bailar reguetón), flow (estilo), janguear (salir, Puerto Rico), parcero/parce (amigo, Colombia), bichota (mujer poderosa). Salsa: gozar (disfrutar bailando), sabor, ¡azúcar!, guaguancó. Tango: lunfardo (jerga porteña): mina (mujer), bulín (cuarto), laburo (trabajo), morfar (comer).",
        [
          ["Esta noche salimos a janguear, parcero.", "Tonight we're going out, bro."],
          ["Me voy al laburo y después a la milonga.", "I'm off to work and then to the tango dance."],
        ],
        [
          mc(
            "«Laburo» en lunfardo significa…",
            ["trabajo", "baile", "comida", "mujer"],
            0,
            "«Laburo» viene del italiano «lavoro» y en lunfardo rioplatense significa trabajo (de ahí «laburar»). Las demás opciones tienen su propia palabra lunfarda: por ejemplo, «mina» es mujer."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la palabra con su significado.",
        [
          ["janguear", "salir de fiesta"],
          ["parcero", "amigo"],
          ["morfar", "comer"],
          ["gozar", "disfrutar bailando"],
        ],
        "Jerga musical."
      ),
      fb("Completa (lunfardo).", "La ___ del barrio bailaba como nadie. (mujer)", "mina", "En lunfardo, «mina» significa mujer; es muy frecuente en las letras de tango."),
      fb("Completa (salsa).", "¡A ___ se ha dicho! Que suene la orquesta. (disfrutar bailando)", "gozar", "«¡A gozar!» es el grito típico de la salsa para disfrutar bailando; tras «a» va el infinitivo."),
      mc(
        "«Ese cantante tiene mucho flow» significa que…",
        ["tiene mucho estilo", "canta muy bajo", "está cansado", "habla demasiado"],
        0,
        "«Tener flow», anglicismo del reguetón y el rap, significa tener estilo y soltura. No se refiere al volumen de la voz, al cansancio ni a hablar demasiado."
      ),
      mc(
        "El lunfardo es la jerga típica de…",
        ["Buenos Aires y Montevideo", "Madrid", "La Habana", "Ciudad de México"],
        0,
        "El lunfardo nació en Buenos Aires y Montevideo, a orillas del Río de la Plata. Madrid, La Habana y Ciudad de México tienen sus propias jergas (el cheli, la jerga cubana, el caló mexicano), pero no el lunfardo."
      ),
      toEs("Tonight we're going out dancing, bro. (Colombia)", "Esta noche salimos a bailar, parce.", "«Parce» o «parcero» es la forma colombiana, sobre todo de Medellín, de decir amigo o colega.", ["Esta noche nos vamos a bailar, parcero.", "Esta noche salimos a bailar, parcero."]),
      wo("Después del laburo nos vamos a la milonga del barrio.", "Lunfardo.", "After work we're going to the neighborhood tango dance."),
    ]
  ),
  L(
    "superstitions-folk-beliefs-1",
    "ccr-superstitions-contrast-countries",
    "Contraste: supersticiones de aquí y de allá",
    "Martes 13 frente a viernes 13, tocar madera, el gato negro, la sal derramada: lo que da mala suerte según el país.",
    "7 min",
    [
      sec(
        "La mala suerte cambia de fecha",
        "En el mundo hispano, el día de mala suerte es el martes 13: «En martes, ni te cases ni te embarques». Comunes: tocar madera, no pasar por debajo de una escalera, derramar sal, romper un espejo (siete años de mala suerte), abrir un paraguas en casa, gato negro. Expresiones: «¡Lagarto, lagarto!» (España, para ahuyentar la mala suerte), «Toco madera».",
        [
          ["En martes, ni te cases ni te embarques.", "On Tuesday, neither marry nor set sail."],
          ["Todo va bien, toco madera.", "Everything's going well, knock on wood."],
        ],
        [
          mc(
            "El día de mala suerte en la mayor parte del mundo hispano es…",
            ["el martes 13", "el viernes 13", "el lunes 1", "el domingo 7"],
            0,
            "En la mayor parte del mundo hispano el día aciago es el martes 13 («en martes, ni te cases ni te embarques»). El viernes 13 es la superstición anglosajona, y el lunes 1 y el domingo 7 no tienen fama de mala suerte."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En martes, ni te cases ni te ___.", "embarques", "El refrán completo es «En martes, ni te cases ni te embarques»; embarcarse es subirse a un barco, es decir, emprender un viaje."),
      fb("Completa.", "Hasta ahora no ha pasado nada, toco ___.", "madera", "«Tocar madera» es el gesto y la frase para no gafar algo bueno que se acaba de decir."),
      fb("Completa.", "Romper un espejo trae siete años de mala ___.", "suerte", "«Traer mala suerte» es la colocación fija: siete años de mala suerte."),
      mc(
        "En España, «¡lagarto, lagarto!» se dice para…",
        ["ahuyentar la mala suerte", "llamar a un animal", "saludar", "pedir comida"],
        0,
        "«¡Lagarto, lagarto!» es un conjuro popular en España para ahuyentar la mala suerte cuando se menciona algo que la trae. No sirve para llamar a un animal, ni es un saludo o una forma de pedir comida."
      ),
      ms(
        "¿Qué da mala suerte según la tradición?",
        ["abrir un paraguas dentro de casa", "derramar la sal", "pasar por debajo de una escalera", "encontrar un trébol de cuatro hojas"],
        [0, 1, 2],
        "Abrir un paraguas bajo techo, derramar la sal y pasar por debajo de una escalera son supersticiones clásicas de mala suerte. El trébol de cuatro hojas, en cambio, trae buena suerte."
      ),
      toEs("Everything's going fine, knock on wood.", "Todo va bien, toco madera.", "El equivalente de «knock on wood» es «toco madera», en presente y primera persona.", ["Todo marcha bien, toco madera.", "Va todo bien, toco madera."]),
      wo("Mi abuela nunca abre un paraguas dentro de casa.", "Superstición.", "My grandmother never opens an umbrella indoors."),
    ]
  ),
  L(
    "superstitions-folk-beliefs-2",
    "ccr-superstitions-new-year-mission",
    "Misión real: los rituales de Año Nuevo",
    "Prepara tu Nochevieja al estilo hispano: uvas, ropa interior de color, maletas, lentejas: explica cada ritual y su propósito.",
    "7 min",
    [
      sec(
        "Rituales para el año nuevo",
        "Doce uvas con las campanadas (España, y hoy también en muchos países latinoamericanos): una por cada mes de suerte. Ropa interior amarilla (dinero y felicidad) o roja (amor). Salir con una maleta a dar la vuelta a la manzana (viajes) — típico de varios países latinoamericanos. Comer lentejas (prosperidad). Tirar un cubo de agua por la ventana (alejar lo malo; Cuba, Puerto Rico). Poner un anillo de oro en la copa de cava (España).",
        [
          ["Llevo ropa interior amarilla para atraer la abundancia.", "I'm wearing yellow underwear to attract abundance."],
          ["Salimos con la maleta para viajar mucho este año.", "We went out with a suitcase so we'd travel a lot this year."],
        ],
        [
          mc(
            "¿Para qué se sale con una maleta vacía a la calle en Nochevieja?",
            ["para atraer viajes en el año nuevo", "para mudarse", "para guardar las uvas", "para regalarla"],
            0,
            "Salir con una maleta vacía en Nochevieja es un ritual, muy extendido en Latinoamérica, para atraer viajes en el año nuevo. No tiene que ver con mudarse, con guardar las uvas ni con hacer un regalo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Nos comemos una uva con cada ___ del reloj.", "campanada", "Las campanadas son los golpes del reloj a medianoche; se come una uva con cada una."),
      fb("Completa.", "La ropa interior ___ atrae el amor, según la tradición. (color)", "roja", "El adjetivo concuerda con «ropa» (femenino): ropa interior roja."),
      fb("Completa (subjuntivo).", "Comemos lentejas para que no nos ___ el dinero. (faltar)", "falte", "«Para que» exige subjuntivo porque expresa finalidad: para que no nos falte."),
      mt(
        "Relaciona el ritual con su propósito.",
        [
          ["maleta vacía", "viajar"],
          ["ropa interior roja", "amor"],
          ["lentejas", "abundancia"],
          ["agua por la ventana", "alejar lo malo"],
        ],
        "Rituales de Año Nuevo."
      ),
      mc(
        "«Creer sin creer del todo» describe…",
        ["practicar rituales aunque uno diga que no es supersticioso", "no hacer nada", "ser muy religioso", "tener miedo"],
        0,
        "«Creer sin creer del todo» describe a quien dice no ser supersticioso pero, por si acaso, cumple los rituales. No es no hacer nada, ni una devoción religiosa, ni miedo real."
      ),
      toEs("We eat lentils so that we won't lack money.", "Comemos lentejas para que no nos falte el dinero.", "«Para que» + subjuntivo expresa finalidad: para que no nos falte.", ["Comemos lentejas para que no nos falte dinero."]),
      wo("No es que sea supersticiosa, pero por si acaso me pongo algo amarillo.", "Creer sin creer.", "It's not that I'm superstitious, but just in case I wear something yellow."),
    ]
  ),
  L(
    "piropos-cortesia-trato-social-1",
    "ccr-piropos-respect-line",
    "Contraste: el piropo cariñoso y el piropo inaceptable",
    "Entre amigos y familia, el piropo es cariño; en la calle y a desconocidas, hoy se considera acoso. Aprende a distinguirlos.",
    "7 min",
    [
      sec(
        "Contexto y consentimiento",
        "Aceptables: entre personas con confianza, ingeniosos y respetuosos («¡Qué guapa estás hoy, abuela!», «Si cocinas como bailas, me caso contigo», dicho en broma entre amigos). Inaceptables: dirigidos a desconocidas en la calle, con contenido sexual o insistentes: hoy muchos países los consideran acoso callejero, y en algunos están sancionados.",
        [
          ["¡Qué guapa estás hoy, mamá!", "You look so pretty today, Mom!"],
          ["El acoso callejero está penado en varios países.", "Street harassment is punishable in several countries."],
        ],
        [
          mc(
            "¿Qué piropo es aceptable?",
            ["A tu mejor amiga: «¡Qué bien te sienta ese vestido!»", "A una desconocida en la calle, un comentario sobre su cuerpo.", "Silbar a alguien desde un coche.", "Seguir a alguien diciéndole cosas."],
            0,
            "El cumplido a tu mejor amiga es aceptable porque hay confianza y respeto. Comentar el cuerpo de una desconocida, silbar desde un coche o seguir a alguien diciéndole cosas es acoso callejero, no un piropo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "¡Qué bien te ___ ese color! (quedar, presente)", "queda", "«Quedarle bien algo a alguien» concuerda con la cosa (el color): te queda."),
      fb("Completa.", "Los comentarios no deseados en la calle se consideran acoso ___.", "callejero", "«Acoso callejero» es el término para los comentarios no deseados en la vía pública; el adjetivo concuerda con «acoso»."),
      mc(
        "¿Qué determina si un piropo es aceptable hoy?",
        ["la relación, el contexto y el respeto", "que rime", "que sea largo", "que lo diga un hombre"],
        0,
        "Lo que decide si un piropo es aceptable es la relación, el contexto y el respeto (y si es bienvenido). Que rime, que sea largo o quién lo diga no cambia que un comentario no deseado sea invasivo."
      ),
      ms(
        "¿Qué rasgos hacen inaceptable un comentario?",
        ["dirigirse a una desconocida", "contenido sexual", "insistencia", "ingenio entre amigos"],
        [0, 1, 2],
        "Dirigirse a una desconocida, el contenido sexual y la insistencia convierten un comentario en acoso. El ingenio entre amigos, con confianza, no es problema."
      ),
      mc(
        "«Si cocinas como bailas, me caso contigo» dicho entre amigos es…",
        ["un piropo humorístico y cariñoso", "una propuesta seria de matrimonio", "un insulto", "acoso"],
        0,
        "Entre amigos, esta frase es un piropo humorístico y cariñoso: nadie la toma como una propuesta seria de matrimonio. La confianza es lo que impide que sea un insulto o acoso."
      ),
      toEs("That color really suits you.", "Ese color te queda muy bien.", "«Quedarle bien» o «sentarle bien» algo a alguien equivale a «to suit»: te queda muy bien.", ["Ese color te sienta muy bien.", "Te queda genial ese color."]),
      wo("Entre amigos, un piropo ingenioso puede ser una muestra de cariño.", "Contexto.", "Among friends, a witty compliment can be a sign of affection."),
    ]
  ),
  L(
    "piropos-cortesia-trato-social-2",
    "ccr-compliments-ping-pong",
    "Laboratorio de diálogo: el ping-pong del cumplido",
    "«¡Qué camisa tan bonita!» — «¿Esta? Si es viejísima»: practica la respuesta que resta importancia y devuelve el cumplido.",
    "7 min",
    [
      sec(
        "Recibir un cumplido a la hispana",
        "Restar importancia: «¿Esto? Si me costó dos euros», «Qué va, es viejísimo». Devolver: «Pues anda que tú, que estás estupenda». Agradecer con humildad: «Gracias, eres muy amable», «Eso es que me miras con buenos ojos» (mirar a alguien con buenos ojos = verlo con simpatía). Aceptarlo sin más («Sí, lo sé») puede sonar arrogante en muchos contextos.",
        [
          ["—¡Qué bien cocinas! —Qué va, es una receta facilísima.", "—You cook so well! —Oh no, it's a super easy recipe."],
          ["Eso es que me miras con buenos ojos.", "You're just seeing me kindly."],
        ],
        [
          mc(
            "«—¡Qué chaqueta tan bonita!» Respuesta típica:",
            ["¿Esta? Si la tengo desde hace años.", "Sí, ya lo sé, es preciosa.", "No me hables.", "¿Y a ti qué?"],
            0,
            "Lo típico es restar importancia al cumplido («¿Esta? Si la tengo desde hace años»). «Sí, ya lo sé, es preciosa» suena arrogante, y «No me hables» o «¿Y a ti qué?» son respuestas bruscas."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "—¡Qué guapa estás! —Pues ___ que tú, que estás estupenda.", "anda", "«Pues anda que tú» devuelve el cumplido con naturalidad: «y tú todavía más»."),
      fb("Completa.", "Eso es que tú me miras con buenos ___.", "ojos", "Mirar (o ver) a alguien con buenos ojos = verlo con simpatía, favorablemente."),
      fb("Completa.", "—¡Cocinas de maravilla! —Qué ___, si es lo más fácil del mundo.", "va", "«Qué va» niega con suavidad y resta importancia al elogio."),
      mc(
        "¿Qué respuesta puede sonar arrogante?",
        ["Sí, lo sé, cocino mejor que nadie.", "Gracias, eres muy amable.", "Qué va, es una receta sencilla.", "Me alegro de que te guste."],
        0,
        "Aceptar el elogio sin ninguna modestia («cocino mejor que nadie») suena arrogante. Dar las gracias, restarle importancia («qué va») o alegrarse de que guste son respuestas corteses."
      ),
      mt(
        "Relaciona la respuesta con su estrategia.",
        [
          ["¿Esto? Si es viejísimo.", "restar importancia"],
          ["Pues anda que tú…", "devolver el cumplido"],
          ["Gracias, eres muy amable.", "agradecer con humildad"],
        ],
        "Estrategias de cortesía."
      ),
      toEs("You're just being kind.", "Eres muy amable.", "Ante un cumplido se responde con modestia, atribuyéndolo a la amabilidad o el cariño del otro.", ["Qué amable eres.", "Lo dices porque me quieres.", "Eso es que me miras con buenos ojos.", "Me miras con buenos ojos."]),
      wo("Qué va, si esta camisa la compré en un mercadillo.", "Restar importancia.", "Oh no, I bought this shirt at a street market."),
    ]
  ),
];
