// Synced from cheneygross-afk/lengo:src/lib/lessons/level-test-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import { authoring } from "./authoring";
import { dict, wr } from "./skills-authoring";
import { listeningItems, mcFirst, readingSection, type LevelTest } from "./level-test-authoring";

// The C2 level test (see level-tests.ts): C2 material -- legal,
// administrative and medical Spanish, idioms and refranes, figurative
// language, euphemism and irony, augmentatives, debate and rhetoric,
// citation verbs, the pretérito anterior and learned register.
const { fe, sec } = authoring("es");

export const LEVEL_TEST_C2: LevelTest = {
  title: "Prueba de nivel C2: examen de maestría",
  summary:
    "La prueba final de C2: comprensión de lectura y auditiva, léxico, registro y expresiones idiomáticas, y una reseña crítica. 46 preguntas sobre lo que enseña C2; se aprueba con un 70%.",
  duration: "60 min",
  sections: [
    readingSection(
      "Parte 1 · Lectura: una resolución administrativa",
      "Lea la resolución y conteste las cinco preguntas.",
      [
        "RESOLUCIÓN. Visto el recurso de reposición interpuesto por D. Andrés Molina contra la sanción impuesta el 3 de marzo, y considerando que el interesado no ha aportado prueba alguna que desvirtúe los hechos constatados por la Inspección, esta Dirección RESUELVE desestimar el recurso y confirmar la sanción en todos sus extremos.",
        "Contra la presente resolución, que pone fin a la vía administrativa, podrá interponerse recurso contencioso-administrativo en el plazo de dos meses a contar desde el día siguiente al de su notificación. Lo que se comunica a los efectos oportunos.",
      ],
      [
        [
          "¿Qué ha decidido la Dirección?",
          ["Rechazar el recurso y mantener la sanción", "Anular la sanción", "Reducir la sanción a la mitad", "Pedir más pruebas al interesado"],
          "«Desestimar el recurso y confirmar la sanción»: desestimar es rechazar.",
        ],
        [
          "¿Por qué?",
          ["El interesado no aportó pruebas que contradijeran los hechos", "La Inspección cometió un error", "El recurso se presentó fuera de plazo", "El interesado reconoció los hechos"],
          "«No ha aportado prueba alguna que desvirtúe los hechos»: desvirtuar es quitar valor o fundamento.",
        ],
        [
          "«Pone fin a la vía administrativa» significa que…",
          ["ya no cabe recurso ante la Administración, solo ante los tribunales", "la sanción queda anulada", "el procedimiento vuelve a empezar", "no se puede recurrir de ninguna forma"],
          "Agotada la vía administrativa, queda la vía judicial: el recurso contencioso-administrativo.",
        ],
        [
          "¿De cuánto tiempo dispone el interesado para acudir a los tribunales?",
          ["Dos meses desde el día siguiente a la notificación", "Dos meses desde el 3 de marzo", "Un mes desde hoy", "No hay plazo"],
          "«En el plazo de dos meses a contar desde el día siguiente al de su notificación.»",
        ],
        [
          "«Confirmar la sanción en todos sus extremos» quiere decir…",
          ["mantenerla íntegramente", "aumentarla", "revisarla en parte", "aplicar solo su parte económica"],
          "«En todos sus extremos» = en todos sus puntos, sin cambiar nada.",
        ],
      ]
    ),
    readingSection(
      "Parte 1 · Lectura: una columna de opinión",
      "Lea la columna y conteste las preguntas.",
      [
        "Dicen que de aquellos polvos vienen estos lodos, y pocas veces el refrán ha resultado tan oportuno como en el caso de nuestra política urbanística. Durante décadas se construyó a troche y moche, sin más brújula que el beneficio inmediato; los ayuntamientos hacían la vista gorda y los promotores se frotaban las manos.",
        "Hoy, cuando las costas amanecen salpicadas de esqueletos de hormigón, algunos se rasgan las vestiduras como si el desaguisado hubiera caído del cielo. Convendría, cuando menos, un ejercicio de memoria: nadie puede llamarse a engaño cuando las advertencias se hicieron, y por escrito, hace más de veinte años.",
      ],
      [
        [
          "«De aquellos polvos vienen estos lodos» sugiere que…",
          ["los problemas de hoy son consecuencia de errores pasados", "todo tiempo pasado fue mejor", "el problema no tiene solución", "la culpa es del clima"],
          "El refrán atribuye un mal presente a descuidos o errores del pasado.",
        ],
        [
          "«Construir a troche y moche» significa…",
          ["construir sin control ni medida", "construir con materiales de calidad", "construir despacio", "construir solo en la costa"],
          "«A troche y moche» = sin orden ni medida, a diestro y siniestro.",
        ],
        [
          "«Hacer la vista gorda» significa…",
          ["fingir no ver algo para no intervenir", "vigilar con mucha atención", "ver mal de lejos", "exagerar un problema"],
          "Hacer la vista gorda es disimular, fingir que no se ha visto algo.",
        ],
        [
          "¿Qué critica el autor de quienes «se rasgan las vestiduras»?",
          ["Su escándalo hipócrita, como si no supieran nada", "Que derriben los edificios", "Que no paguen impuestos", "Que viajen a la costa"],
          "Rasgarse las vestiduras es escandalizarse de forma exagerada, aquí con hipocresía: «como si el desaguisado hubiera caído del cielo».",
        ],
        [
          "«Nadie puede llamarse a engaño» significa que…",
          ["nadie puede alegar que lo engañaron, porque se avisó", "todos fueron engañados", "alguien mintió por escrito", "hay que denunciar el engaño"],
          "Llamarse a engaño es quejarse de haber sido engañado; aquí, nadie puede hacerlo porque hubo advertencias por escrito.",
        ],
      ]
    ),
    {
      heading: "Parte 2 · Comprensión auditiva",
      body: [
        "Active el sonido. Cada pregunta reproduce una parte de una grabación: escúchela las veces que quiera y elija la respuesta. Las dos últimas son dictados: escriba exactamente lo que oye.",
      ],
      checkpoint: [
        ...listeningItems(
          [
            "Bueno, los resultados de la analítica son, en general, tranquilizadores. Tiene el colesterol algo elevado, pero nada que no se pueda corregir con la dieta.",
            "Lo que sí me preocupa un poco es la tensión: está en el límite. No vamos a medicar todavía; prefiero que se la tome en casa durante dos semanas, por la mañana y por la noche, y que lo apunte.",
            "Ah, y para la próxima analítica, recuerde venir en ayunas, porque esta vez había desayunado y eso altera los valores.",
          ],
          [
            [0, "Escuche. ¿Qué opina la médica de los resultados en general?", ["Son tranquilizadores", "Son muy graves", "No son fiables", "Son perfectos"], "«Los resultados de la analítica son, en general, tranquilizadores.»"],
            [1, "¿Qué le preocupa más?", ["La tensión, que está en el límite", "El colesterol", "El peso", "El azúcar"], "«Lo que sí me preocupa un poco es la tensión: está en el límite.»"],
            [
              1,
              "¿Qué le pide al paciente?",
              ["Que se tome la tensión en casa dos semanas y la anote", "Que empiece a tomar pastillas", "Que se haga una operación", "Que vuelva mañana"],
              "«No vamos a medicar todavía; prefiero que se la tome en casa durante dos semanas… y que lo apunte.»",
            ],
            [
              2,
              "¿Por qué debe venir en ayunas la próxima vez?",
              ["Porque haber desayunado alteró los valores", "Porque le van a operar", "Porque tiene el colesterol alto", "Porque la prueba es por la tarde"],
              "«Esta vez había desayunado y eso altera los valores.»",
            ],
          ]
        ),
        ...listeningItems(
          [
            "Con todo respeto, lo que plantea mi colega no se sostiene.",
            "Afirma que la medida no ha funcionado porque el paro no ha bajado; ahora bien, omite que, sin ella, la caída del empleo habría sido mucho mayor.",
            "Confundir correlación con causalidad es un error de manual. No seré yo quien niegue que el programa admite mejoras, faltaría más, pero de ahí a pedir su supresión media un abismo.",
          ],
          [
            [0, "Escuche. ¿Qué hace el hablante con lo que plantea su colega?", ["Lo refuta", "Lo apoya", "Lo resume sin opinar", "Lo deja para otro día"], "«Lo que plantea mi colega no se sostiene»: lo rebate con argumentos."],
            [
              1,
              "¿Qué omite el colega, según el hablante?",
              ["Que sin la medida el empleo habría caído más", "Que el paro ha bajado", "Que la medida es cara", "Que el programa ya se suprimió"],
              "«Omite que, sin ella, la caída del empleo habría sido mucho mayor.»",
            ],
            [
              2,
              "¿Qué error le atribuye?",
              ["Confundir correlación con causalidad", "Inventar datos", "Citar mal una ley", "Contradecirse en las cifras"],
              "«Confundir correlación con causalidad es un error de manual.»",
            ],
            [
              2,
              "«De ahí a pedir su supresión media un abismo» significa que…",
              ["reconocer fallos no justifica eliminar el programa", "el programa debe suprimirse", "hay que mejorar el programa de inmediato", "el colega tiene toda la razón"],
              "Concede que el programa admite mejoras, pero niega que eso lleve a suprimirlo.",
            ],
          ]
        ),
        dict("No por mucho madrugar amanece más temprano.", "No por mucho madrugar amanece más temprano: las cosas tienen su tiempo y no se adelantan por darse prisa."),
        dict("Apenas hubo terminado el discurso, se marchó.", "Apenas hubo terminado el discurso, se marchó. «Hubo terminado» es pretérito anterior: acción inmediatamente anterior."),
      ],
    },
    sec(
      "Parte 3 · Léxico, registro y expresiones",
      "Escriba en español las palabras en negrita y conteste las preguntas de opción múltiple. Se aceptan pequeños errores de tildes, con una nota.",
      [],
      [
        fe("Los responsables tendrán que ___ cuentas ante los ciudadanos.", "rendir", "Those responsible will have to [render] account to the citizens.", "Rendir cuentas: responder de los propios actos.", ["dar"]),
        fe("El juez ___ sentencia la semana próxima.", "dictará", "The judge [will hand down] sentence next week.", "Colocación jurídica: dictar sentencia.", ["emitirá"]),
        fe("El acusado fue ___ por falta de pruebas.", "absuelto", "The defendant was [acquitted] for lack of evidence.", "Absolver → absuelto (participio irregular)."),
        fe("El paciente debe acudir en ___ a la extracción de sangre.", "ayunas", "The patient must come to the blood test [on an empty stomach].", "Estar o venir en ayunas: sin haber comido."),
        fe("Firme el ___ informado antes de la operación.", "consentimiento", "Sign the informed [consent] before the operation.", "El consentimiento informado."),
        fe(
          "Apenas ___ el sol, emprendieron la marcha.",
          "hubo salido",
          "No sooner [had the sun risen] than they set off.",
          "En registro literario, el pretérito anterior: apenas hubo salido. Hoy también se dice apenas salió.",
          ["salió", "había salido"]
        ),
        fe("La propuesta fue aprobada por ___.", "unanimidad", "The proposal was approved [unanimously].", "Por unanimidad."),
        fe("La negociación ha llegado a un ___ muerto.", "punto", "The negotiation has reached a [deadlock].", "Llegar a un punto muerto: no avanzar."),
        fe("Hay que ___ las cartas sobre la mesa.", "poner", "We need to [put] our cards on the table.", "Poner las cartas sobre la mesa: hablar con total claridad."),
        fe("Su discurso estuvo plagado de ___ comunes.", "lugares", "His speech was full of [clichés].", "Un lugar común es un tópico, una idea muy repetida."),
        fe(
          "Como ___ Ortega y Gasset, «yo soy yo y mi circunstancia».",
          "afirmó",
          "As Ortega y Gasset [stated], 'I am I and my circumstance'.",
          "Verbos de cita: afirmó, escribió, sostuvo, señaló…",
          ["afirma", "afirmaba", "escribió", "dijo", "sostiene", "sostuvo", "señala", "señaló"]
        ),
        fe("Ese argumento es una ___ de autoridad.", "falacia", "That argument is a [fallacy] of authority.", "Falacia de autoridad (ad verecundiam): algo es verdad porque lo dice alguien prestigioso."),
        fe("La empresa registró ___ por valor de dos millones.", "pérdidas", "The company posted [losses] worth two million.", "Registrar pérdidas (o beneficios)."),
        fe("El ministro presentó su ___ tras el escándalo.", "dimisión", "The minister handed in his [resignation] after the scandal.", "Presentar la dimisión (renuncia, en buena parte de América).", ["renuncia"]),
        fe("La noticia cayó como un jarro de agua ___.", "fría", "The news came as a [cold] shower.", "Caer como un jarro de agua fría: decepcionar de golpe."),
        fe("Se me hizo un ___ en la garganta.", "nudo", "I got a [lump] in my throat.", "Hacérsele a alguien un nudo en la garganta: no poder hablar por la emoción."),
        fe("Dime con quién andas y te diré ___.", "quién eres", "Tell me who you go around with and I'll tell you [who you are].", "Refrán: las compañías revelan cómo es uno."),
        mcFirst(
          "«Estar con el agua al cuello» significa…",
          ["estar en una situación muy apurada, sobre todo de dinero", "nadar muy bien", "estar resfriado", "tener mucha sed"],
          "Estar con el agua al cuello es estar en un gran apuro, a menudo económico."
        ),
        mcFirst(
          "¿Qué aporta el sufijo en «Se ha comprado un cochazo»?",
          ["Valoración: un coche grande o impresionante", "Desprecio: un coche viejo", "Tamaño pequeño", "Un golpe dado con un coche"],
          "Aquí -azo es aumentativo y ponderativo (un cochazo); en otras palabras indica golpe (un portazo)."
        ),
        mcFirst(
          "En una esquela, «nos ha dejado» significa que la persona…",
          ["ha muerto", "se ha mudado", "ha dimitido", "ha roto con su pareja"],
          "Es un eufemismo de morir."
        ),
        mcFirst(
          "Tras una presentación desastrosa, alguien comenta: «¡Pues sí que ha ido bien la cosa!». ¿Qué recurso usa?",
          ["Ironía", "Hipérbole", "Metonimia", "Eufemismo"],
          "Dice lo contrario de lo que piensa: ironía."
        ),
        mcFirst(
          "«Se tomó un par de copas»: ¿qué figura hay en «copas»?",
          ["Metonimia: el recipiente por el contenido", "Ironía", "Hipérbole", "Eufemismo"],
          "Se nombra el recipiente (la copa) por lo que contiene (la bebida): metonimia."
        ),
        mcFirst(
          "«¿Acaso alguien cree que esto se arregla solo?» es…",
          ["una pregunta retórica que afirma que no se arregla solo", "una pregunta real que espera respuesta", "una petición de información", "una fórmula de cortesía"],
          "«¿Acaso…?» no busca respuesta: afirma lo contrario de lo que pregunta."
        ),
        mcFirst(
          "En un artículo académico, ¿qué formulación es más adecuada?",
          ["«Los datos sugieren que…»", "«Está clarísimo que…»", "«Todo el mundo sabe que…»", "«Yo creo que, obviamente…»"],
          "El registro académico atenúa y se apoya en los datos: «los datos sugieren que»."
        ),
        mcFirst(
          "«El arrendador» de un piso es…",
          ["el propietario que lo alquila", "quien vive en él de alquiler", "el notario", "el agente inmobiliario"],
          "El arrendador cede el piso; el arrendatario lo toma en alquiler."
        ),
      ]
    ),
  ],
  exercises: [
    wr(
      "Parte 4 · Expresión escrita. Escriba una reseña crítica de una película, una novela o una exposición que conozca bien: sitúe la obra, valore sus aciertos y sus carencias con argumentos y termine con una valoración global. Use un registro culto, con alguna cita o referencia y algún recurso retórico.",
      [200, 260],
      [
        "Sitúa la obra (autor, contexto, género) en pocas líneas",
        "Valora aciertos y carencias con argumentos concretos, no solo con adjetivos",
        "Usa léxico preciso y evaluativo, y al menos un recurso retórico (pregunta retórica, metáfora, ironía)",
        "Incluye una cita o referencia con un verbo de cita adecuado",
        "Cierra con una valoración global coherente con lo anterior",
      ],
      "Con «La casa de los espíritus», Isabel Allende inauguró en 1982 una trayectoria que la convertiría en una de las voces más leídas de la literatura en español. La novela narra, a lo largo de cuatro generaciones, la historia de la familia Trueba, y en ella resuenan, sin nombrarse, los años más convulsos de la historia chilena. Su mayor acierto reside en la construcción de personajes femeninos: Clara, Blanca y Alba no son meros testigos, sino el hilo que cose la memoria familiar frente al olvido. La prosa, generosa en imágenes, convierte lo cotidiano en prodigio sin que el lector sienta artificio alguno. ¿Puede pedirse más a una primera novela? Quizá sí. La deuda con García Márquez resulta, por momentos, demasiado evidente, y algunos críticos han señalado que el realismo mágico funciona aquí más como decorado que como necesidad del relato. Tampoco el desenlace escapa a cierto didactismo: la voluntad de cerrar las heridas pesa más que la ambigüedad que la historia venía cultivando. Con todo, sería injusto reducir la obra a sus influencias. Como afirmó la propia autora, escribir fue para ella una forma de «recuperar lo perdido», y esa urgencia se percibe en cada página. En suma, una novela imperfecta pero imprescindible, que sigue interpelando a quien se acerca a ella.",
      "La reseña sitúa la obra, argumenta aciertos y carencias con ejemplos, usa una pregunta retórica y una metáfora («el hilo que cose la memoria»), cita con un verbo adecuado (afirmó) y cierra con una valoración matizada («imperfecta pero imprescindible»)."
    ),
  ],
};
