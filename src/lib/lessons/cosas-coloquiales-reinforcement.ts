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
            "La cremà de las Fallas."
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
      fb("Completa.", "El 6 de enero se come el ___ de Reyes.", "roscón", "Roscón (España) / rosca (México)."),
      fb("Completa.", "Las flores naranjas de las ofrendas se llaman ___. (flor de muerto, en náhuatl)", "cempasúchil", "Flor típica del Día de Muertos."),
      fb("Completa.", "En San Fermín, los toros corren por las calles en los ___.", "encierros", "Encierro."),
      mc(
        "«Echar la casa por la ventana» en Nochevieja significa…",
        ["gastar mucho para celebrar", "limpiar la casa", "mudarse", "enfadarse"],
        0,
        "Derrochar en la celebración."
      ),
      ms(
        "¿Qué elementos pertenecen al Día de Muertos?",
        ["ofrenda", "calaveritas de azúcar", "pan de muerto", "mascletà"],
        [0, 1, 2],
        "La mascletà es de las Fallas."
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
        "Casi todos los pueblos celebran a su santo patrón con fiestas: verbena (baile popular nocturno), procesión, peñas (grupos de amigos con local propio), charanga (banda que recorre las calles), vaquillas, fuegos artificiales. Expresiones: «¡Vente a las fiestas!», «Nos vamos de verbena», «Aquí se trasnocha».",
        [
          ["—¿Te vienes a las fiestas de mi pueblo? —¡Claro! ¿Qué se hace?", "—Want to come to my village's festival? —Sure! What happens?"],
          ["Por la noche hay verbena en la plaza.", "At night there's a dance in the square."],
        ],
        [
          mc(
            "«Verbena» es…",
            ["un baile popular nocturno al aire libre", "una planta medicinal solamente", "un desfile militar", "una misa"],
            0,
            "En contexto festivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "—¿Te ___ a las fiestas de mi pueblo? (venirse, tú)", "vienes", "Venirse = acompañar."),
      fb("Completa.", "Mis amigos y yo tenemos una ___ con local propio. (grupo festivo)", "peña", "Peña = grupo de amigos con local propio en fiestas."),
      fb("Completa.", "La ___ recorre las calles tocando pasodobles. (banda popular)", "charanga", "Charanga."),
      mc(
        "«Aquí se trasnocha mucho» significa…",
        ["la gente se acuesta muy tarde", "hace frío por la noche", "no hay fiestas", "la gente madruga"],
        0,
        "Trasnochar."
      ),
      mc(
        "Tu amigo dice: «Prepárate, que en mi pueblo las fiestas son la leche». Significa que…",
        ["son estupendas", "hay mucha leche", "son aburridas", "son peligrosas"],
        0,
        "Ser la leche (coloquial España) = ser increíble."
      ),
      toEs("There's a dance in the square tonight.", "Esta noche hay verbena en la plaza.", "Vocabulario festivo.", ["Esta noche hay baile en la plaza.", "Hay verbena en la plaza esta noche."]),
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
            "Evita el tópico."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No se trata de dar miedo, ___ de recordar.", "sino", "No… sino…"),
      fb("Completa.", "Se cree que las almas ___ a visitar a sus familias. (volver)", "vuelven", "Creencia."),
      fb("Completa.", "Las calaveritas ___ son versos humorísticos sobre la muerte. (de literatura)", "literarias", "Calaveritas literarias."),
      mc(
        "¿Cuál es el tono de la fiesta?",
        ["festivo y afectuoso", "lúgubre y triste", "de terror", "solemne sin alegría"],
        0,
        "Celebración de la memoria."
      ),
      ms(
        "¿Qué se pone en una ofrenda?",
        ["fotos del difunto", "velas", "su comida favorita", "una calabaza con cara de miedo"],
        [0, 1, 2],
        "La calabaza es de Halloween."
      ),
      toEs("It's not about being scared; it's about remembering.", "No se trata de tener miedo, sino de recordar.", "Explicación.", ["No se trata de asustarse, sino de recordar.", "No es cuestión de tener miedo, sino de recordar."]),
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
        "Aperitivo: antes de comer, una caña o un vermú con algo de picar (España). Sobremesa: la charla después de comer, sin levantarse. Merienda: comida ligera por la tarde (onces en Chile). Picoteo: comer un poco de todo, informalmente. Tapear / ir de tapas: ir de bar en bar. Ir de cañas: salir a tomar cervezas.",
        [
          ["Nos quedamos de sobremesa hasta las seis.", "We stayed chatting at the table until six."],
          ["¿Tomamos el aperitivo antes de comer?", "Shall we have a drink and a snack before lunch?"],
        ],
        [
          mc(
            "En Chile, la merienda de la tarde se llama…",
            ["las onces", "el aperitivo", "la sobremesa", "el picoteo"],
            0,
            "Onces."
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
      fb("Completa.", "Nos quedamos de ___ hasta que se hizo de noche.", "sobremesa", "Sobremesa."),
      fb("Completa.", "Esta tarde vamos a ___ por el centro: de bar en bar, una tapa en cada uno. (ir de tapas, infinitivo)", "tapear", "Tapear = ir de tapas."),
      fb("Completa.", "Los niños ___ un bocadillo a las seis. (tomar la merienda)", "meriendan", "Merendar."),
      mc(
        "«Hay picoteo en casa de Ana» significa que…",
        ["habrá varios platillos para comer informalmente", "habrá una cena de gala", "no habrá comida", "Ana cocina pájaros"],
        0,
        "Picoteo."
      ),
      toEs("We stayed chatting at the table for hours.", "Nos quedamos de sobremesa durante horas.", "Sobremesa.", ["Estuvimos de sobremesa durante horas.", "Nos quedamos horas de sobremesa."]),
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
            "La sobremesa es parte de la comida."
          ),
        ]
      ),
    ],
    [
      mc(
        "El invitado empieza a comer antes de que se sirva a todos. Error:",
        ["no esperar la señal del anfitrión", "comer demasiado rápido", "usar cubiertos", "hablar"],
        0,
        "Se espera a todos."
      ),
      mc(
        "Te ofrecen más paella. Respuesta natural:",
        ["Uy, no, que ya he comido muchísimo. Venga, pero solo un poquito.", "No.", "Dame todo.", "No me gusta."],
        0,
        "Rechazo cortés que acaba aceptando."
      ),
      fb("Completa.", "¡Que ___! (deseo antes de comer)", "aproveche", "¡Que aproveche!"),
      fb("Completa.", "—Pago yo. —Ni ___, esta vez invito yo.", "hablar", "Ni hablar."),
      fb("Completa.", "Esto está ___: tienes que darme la receta. (muy bueno, coloquial)", "buenísimo", "Elogiar la comida."),
      ms(
        "¿Qué comportamientos son adecuados?",
        ["elogiar la comida", "quedarse a la sobremesa", "insistir en pagar", "levantarse sin despedirse"],
        [0, 1, 2],
        "Irse sin despedirse es descortés."
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
            "Anuncio suave."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Bueno, ya me voy ___. (gerundio de ir)", "yendo", "Irse yendo."),
      fb("Completa.", "—¿Ya te vas? ¡Si es ___! (muy pronto)", "prontísimo", "Superlativo."),
      fb("Completa.", "Es que mañana ___ temprano. (levantarse, coloquial: madrugar)", "madrugo", "Madrugar."),
      mc(
        "Tras despedirte, seguís hablando veinte minutos en la puerta. Esto es…",
        ["normal y parte del ritual", "una grosería", "muy raro", "un error del anfitrión"],
        0,
        "Despedida larga."
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
      toEs("Well, I'd better get going.", "Bueno, ya me voy yendo.", "Fórmula de despedida.", ["Bueno, me voy yendo.", "Bueno, me tengo que ir yendo."]),
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
        "Meter un gol a alguien: engañarlo. Estar en fuera de juego: estar desinformado o fuera de lugar. Echar balones fuera: eludir una responsabilidad. Casarse de penalti: por un embarazo inesperado (coloquial). Pasar la pelota: transferir la responsabilidad. Salvar en el último minuto / en el descuento. Sacar tarjeta roja: rechazar o expulsar.",
        [
          ["Cuando le pregunté, echó balones fuera.", "When I asked him, he dodged the question."],
          ["Me han metido un gol con este coche usado.", "They've conned me with this used car."],
        ],
        [
          mc(
            "«Estás en fuera de juego» dicho a alguien que no sabe la noticia significa…",
            ["no estás enterado", "estás castigado", "juegas mal", "estás de vacaciones"],
            0,
            "Desinformado."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la metáfora con su significado.",
        [
          ["echar balones fuera", "eludir una responsabilidad"],
          ["meter un gol", "engañar"],
          ["pasar la pelota", "transferir la responsabilidad"],
          ["en el descuento", "en el último momento"],
        ],
        "Metáforas futbolísticas."
      ),
      fb("Completa.", "Aprobamos el presupuesto en el ___: a las 23:59.", "descuento", "En el descuento."),
      fb("Completa.", "El ministro echó balones ___ cuando le preguntaron por la crisis.", "fuera", "Eludir."),
      fb("Completa.", "El vendedor me metió un ___: el móvil era de segunda mano.", "gol", "Engañar."),
      mc(
        "«La jefa le sacó tarjeta roja a la propuesta» significa que…",
        ["la rechazó", "la aprobó", "la pospuso", "la mejoró"],
        0,
        "Rechazo."
      ),
      toEs("He always passes the buck to someone else.", "Siempre le pasa la pelota a otro.", "Metáfora futbolística.", ["Siempre le pasa la pelota a otra persona.", "Siempre pasa la pelota a otro."]),
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
            "Arquero / guardameta."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El balón se estrella en el ___. (palo horizontal de la portería)", "larguero", "Larguero / travesaño."),
      fb("Completa.", "Centro al área y ___ de cabeza… ¡gol! (rematar, presente)", "remata", "Presente narrativo."),
      fb("Completa.", "Fue un partido de ___: se decidió en el último minuto.", "infarto", "Hipérbole."),
      mc(
        "Versión de comentarista de «El jugador marcó un gol»:",
        ["¡Recibe, se perfila, dispara… golazo!", "El jugador marcó un gol.", "Se hizo un gol.", "Hubo un gol en el partido."],
        0,
        "Ritmo y emoción."
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
      toEs("What a goal! A goal from another planet!", "¡Qué golazo! ¡Un gol de otro planeta!", "Hipérbole.", ["¡Menudo golazo! ¡Un gol de otro planeta!", "¡Qué golazo, de otro planeta!"]),
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
            "Bandoneón."
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
      fb("Completa.", "En flamenco, el que canta es el ___.", "cantaor", "Cantaor/a."),
      fb("Completa.", "Cuando una actuación emociona profundamente se dice que tiene ___.", "duende", "Duende."),
      fb("Completa.", "Un baile de tango se llama ___. (reunión para bailar tango)", "milonga", "Milonga."),
      mc(
        "«Tocar las palmas» en flamenco significa…",
        ["acompañar el ritmo con aplausos", "saludar", "tocar un instrumento de madera", "dejar de cantar"],
        0,
        "Palmas."
      ),
      toEs("That singer really has soul.", "Ese cantaor tiene mucho duende.", "Vocabulario flamenco.", ["Ese cantante tiene mucho duende.", "Esa cantaora tiene mucho duende."]),
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
            "Del italiano lavoro."
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
      fb("Completa (lunfardo).", "La ___ del barrio bailaba como nadie. (mujer)", "mina", "Mina = mujer, en lunfardo."),
      fb("Completa (salsa).", "¡A ___ se ha dicho! Que suene la orquesta. (disfrutar bailando)", "gozar", "Gozar."),
      mc(
        "«Ese cantante tiene mucho flow» significa que…",
        ["tiene mucho estilo", "canta muy bajo", "está cansado", "tiene mucha agua"],
        0,
        "Flow = estilo."
      ),
      mc(
        "El lunfardo es la jerga típica de…",
        ["Buenos Aires y Montevideo", "Madrid", "La Habana", "Ciudad de México"],
        0,
        "Jerga porteña."
      ),
      toEs("Tonight we're going out dancing, bro. (Colombia)", "Esta noche salimos a bailar, parce.", "Jerga colombiana.", ["Esta noche nos vamos a bailar, parcero.", "Esta noche salimos a bailar, parcero."]),
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
        "En el mundo hispano, el día de mala suerte es el martes 13: «En martes, ni te cases ni te embarques». Comunes: tocar madera, no pasar por debajo de una escalera, derramar sal, romper un espejo (siete años de mala suerte), abrir un paraguas en casa, gato negro. Expresiones: «¡Lagarto, lagarto!» (para ahuyentar la mala suerte), «Toco madera».",
        [
          ["En martes, ni te cases ni te embarques.", "On Tuesday, neither marry nor set sail."],
          ["Todo va bien, toco madera.", "Everything's going well, knock on wood."],
        ],
        [
          mc(
            "El día de mala suerte en España y Latinoamérica es…",
            ["el martes 13", "el viernes 13", "el lunes 1", "el domingo 7"],
            0,
            "Martes 13."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En martes, ni te cases ni te ___.", "embarques", "Refrán."),
      fb("Completa.", "Hasta ahora no ha pasado nada, toco ___.", "madera", "Tocar madera."),
      fb("Completa.", "Romper un espejo trae siete años de mala ___.", "suerte", "Superstición."),
      mc(
        "«¡Lagarto, lagarto!» se dice para…",
        ["ahuyentar la mala suerte", "llamar a un animal", "saludar", "pedir comida"],
        0,
        "Conjuro popular."
      ),
      ms(
        "¿Qué da mala suerte según la tradición?",
        ["abrir un paraguas dentro de casa", "derramar la sal", "pasar por debajo de una escalera", "encontrar un trébol de cuatro hojas"],
        [0, 1, 2],
        "El trébol da buena suerte."
      ),
      toEs("Everything's going fine, knock on wood.", "Todo va bien, toco madera.", "Tocar madera.", ["Todo marcha bien, toco madera.", "Va todo bien, toco madera."]),
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
        "Doce uvas con las campanadas (España): una por cada mes de suerte. Ropa interior amarilla (dinero y felicidad) o roja (amor). Salir con una maleta a dar la vuelta a la manzana (viajes) — típico de varios países latinoamericanos. Comer lentejas (prosperidad). Tirar agua por la ventana (alejar lo malo). Poner un anillo de oro en la copa de cava.",
        [
          ["Llevo ropa interior amarilla para atraer la abundancia.", "I'm wearing yellow underwear to attract abundance."],
          ["Salimos con la maleta para viajar mucho este año.", "We went out with a suitcase so we'd travel a lot this year."],
        ],
        [
          mc(
            "¿Para qué se sale con una maleta vacía a la calle en Nochevieja?",
            ["para atraer viajes en el año nuevo", "para mudarse", "para guardar las uvas", "para regalarla"],
            0,
            "Ritual de viajes."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Nos comemos una uva con cada ___ del reloj.", "campanada", "Campanadas."),
      fb("Completa.", "La ropa interior ___ atrae el amor, según la tradición. (color)", "roja", "Rojo = amor."),
      fb("Completa (subjuntivo).", "Comemos lentejas para que no nos ___ el dinero. (faltar)", "falte", "Para que + subjuntivo."),
      mt(
        "Relaciona el ritual con su propósito.",
        [
          ["maleta vacía", "viajar"],
          ["ropa interior amarilla", "prosperidad y felicidad"],
          ["lentejas", "abundancia"],
          ["agua por la ventana", "alejar lo malo"],
        ],
        "Rituales de Año Nuevo."
      ),
      mc(
        "«Creer sin creer del todo» describe…",
        ["practicar rituales aunque uno diga que no es supersticioso", "no hacer nada", "ser muy religioso", "tener miedo"],
        0,
        "Actitud típica ante las supersticiones."
      ),
      toEs("We eat lentils so that we won't lack money.", "Comemos lentejas para que no nos falte el dinero.", "Para que + subjuntivo.", ["Comemos lentejas para que no nos falte dinero."]),
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
            "Confianza y respeto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "¡Qué bien te ___ ese color! (quedar, presente)", "queda", "Quedarle bien algo a alguien."),
      fb("Completa.", "Los comentarios no deseados en la calle se consideran acoso ___.", "callejero", "Acoso callejero."),
      mc(
        "¿Qué determina si un piropo es aceptable hoy?",
        ["la relación, el contexto y el respeto", "que rime", "que sea largo", "que lo diga un hombre"],
        0,
        "Contexto y consentimiento."
      ),
      ms(
        "¿Qué rasgos hacen inaceptable un comentario?",
        ["dirigirse a una desconocida", "contenido sexual", "insistencia", "ingenio entre amigos"],
        [0, 1, 2],
        "El ingenio entre amigos no es problema."
      ),
      mc(
        "«Si cocinas como bailas, me caso contigo» dicho entre amigos es…",
        ["un piropo humorístico y cariñoso", "una propuesta seria de matrimonio", "un insulto", "acoso"],
        0,
        "Contexto de confianza."
      ),
      toEs("That color really suits you.", "Ese color te queda muy bien.", "Cumplido.", ["Ese color te sienta muy bien.", "Te queda genial ese color."]),
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
        "Restar importancia: «¿Esto? Si me costó dos euros», «Qué va, es viejísimo». Devolver: «Pues anda que tú, que estás estupenda». Agradecer con humildad: «Gracias, eres muy amable», «Me lo dices con buenos ojos». Aceptarlo sin más («Sí, lo sé») puede sonar arrogante en muchos contextos.",
        [
          ["—¡Qué bien cocinas! —Qué va, es una receta facilísima.", "—You cook so well! —Oh no, it's a super easy recipe."],
          ["Me lo dices con buenos ojos.", "You're just being kind."],
        ],
        [
          mc(
            "«—¡Qué chaqueta tan bonita!» Respuesta típica:",
            ["¿Esta? Si la tengo desde hace años.", "Sí, ya lo sé, es preciosa.", "No me hables.", "¿Y a ti qué?"],
            0,
            "Restar importancia."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "—¡Qué guapa estás! —Pues ___ que tú, que estás estupenda.", "anda", "Devolver el cumplido."),
      fb("Completa.", "Me lo dices con buenos ___.", "ojos", "Con buenos ojos = con cariño."),
      fb("Completa.", "—¡Cocinas de maravilla! —Qué ___, si es lo más fácil del mundo.", "va", "Qué va = restar importancia."),
      mc(
        "¿Qué respuesta puede sonar arrogante?",
        ["Sí, lo sé, cocino mejor que nadie.", "Gracias, eres muy amable.", "Qué va, es una receta sencilla.", "Me alegro de que te guste."],
        0,
        "Aceptación sin modestia."
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
      toEs("You're just being kind.", "Me lo dices con buenos ojos.", "Modestia.", ["Eres muy amable.", "Lo dices porque me quieres."]),
      wo("Qué va, si esta camisa la compré en un mercadillo.", "Restar importancia.", "Oh no, I bought this shirt at a street market."),
    ]
  ),
];
