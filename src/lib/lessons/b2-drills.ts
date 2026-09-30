// Synced from cheneygross-afk/lengo:src/lib/lessons/b2-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// B2 drill lessons -- a second, drill-heavy layer woven into B2_LESSONS
// right after the lesson each one practises (see weave.ts). No new grammar:
// they recycle what has already been taught, with most of the practice going
// to the hardest B2 topics (subjunctive in adjective and adverbial clauses,
// imperfect subjunctive and sequence of tenses, hypothetical si-clauses,
// conditional perfect / pluperfect subjunctive, reported speech). About a
// third of each topic's drills sit further down the track (between
// vocabulary units and stories) for spaced review.
// Formats: práctica de patrones, pares mínimos, circuitos, rondas rápidas,
// frase a frase, corrige el párrafo, cuentos con huecos, cadenas de
// transformaciones, elige y explica, habla de ti, dictados, líneas del
// tiempo and práctica mezclada.
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

export const B2_DRILLS: AnchoredLesson[] = [
  L(
    "subjunctive-adjective-clauses-1",
    "b2d-patron-busco-alguien-que",
    "Práctica de patrones: busco a alguien que…",
    "Un marco fijo para el antecedente desconocido: busco / necesito + alguien que + subjuntivo.",
    "6 min",
    [
      sec(
        "El antecedente que aún no conoces",
        "Si buscas algo o a alguien que todavía no conoces, la descripción va en subjuntivo: Busco un piso que tenga terraza. Necesito a alguien que sepa alemán. Si ya lo conoces, va en indicativo: Tengo un piso que tiene terraza.",
        [
          ["Busco un compañero de piso que no fume.", "I'm looking for a flatmate who doesn't smoke."],
          ["Necesitamos a alguien que hable chino.", "We need someone who speaks Chinese."],
        ],
        [
          fb("Mismo marco.", "Busco un piso que ___ cerca del metro. (estar)", "esté", "Desconocido → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Busco a alguien que ___ arreglar lavadoras. (saber)", "sepa", "Saber → sepa."),
      fb("Mismo marco.", "Busco un coche que no ___ mucha gasolina. (gastar)", "gaste", "Desconocido → subjuntivo."),
      fb("Mismo marco.", "Necesito un portátil que ___ poco. (pesar)", "pese", "Desconocido → subjuntivo."),
      fb("Mismo marco.", "Necesitamos una niñera que ___ los fines de semana. (poder)", "pueda", "o → ue."),
      fb("Mismo marco.", "Quiero un trabajo que me ___ viajar. (permitir)", "permita", "Desconocido → subjuntivo."),
      fb("Mismo marco.", "Buscamos un restaurante que ___ abierto a medianoche. (estar)", "esté", "Estar → esté."),
      mc(
        "«Busco una academia que ___ clases por la tarde.»",
        ["dé", "da", "dará", "daba"],
        0,
        "La academia todavía no se ha encontrado (antecedente buscado), así que va en subjuntivo; dar → dé, con tilde. «Da», «dará» y «daba» son indicativo y supondrían una academia concreta."
      ),
      toEs("I'm looking for a dentist who works on Saturdays.", "Busco un dentista que trabaje los sábados.", "Si aún no sabemos si ese dentista existe, la oración de relativo va en subjuntivo: «trabaje».", ["Busco a un dentista que trabaje los sábados.", "Busco una dentista que trabaje los sábados."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-1",
    "b2d-pares-tengo-busco",
    "Pares mínimos: tengo un amigo que… / busco un amigo que…",
    "El mismo relativo, dos modos: el antecedente conocido o desconocido decide.",
    "6 min",
    [
      sec(
        "Conocido o desconocido",
        "Tengo un vecino que toca el piano (existe, lo conozco → indicativo). Busco un vecino que toque el piano (no sé si existe → subjuntivo). El verbo principal suele dar la pista: tener, conocer, hay → indicativo; buscar, necesitar, querer → subjuntivo.",
        [
          ["Conozco un bar que abre hasta las tres.", "I know a bar that opens until three."],
          ["¿Conoces un bar que abra hasta las tres?", "Do you know a bar that opens until three?"],
        ],
        [
          mc(
            "«Trabajo con una chica que ___ cinco idiomas.»",
            ["habla", "hable", "hablaba", "hablaría"],
            0,
            "La chica existe y la conozco: antecedente concreto → indicativo, habla. «Hable» sería para alguien buscado, «hablaba» cambia el tiempo y «hablaría» es condicional."
          ),
        ]
      ),
    ],
    [
      fb("Par A.", "Tengo un profesor que ___ muy bien. (explicar)", "explica", "Conocido → indicativo."),
      fb("Par B.", "Quiero un profesor que ___ muy bien. (explicar)", "explique", "Desconocido → subjuntivo; c → qu."),
      fb("Par A.", "Vivo en un barrio que ___ muchos parques. (tener)", "tiene", "Conocido."),
      fb("Par B.", "Quiero vivir en un barrio que ___ muchos parques. (tener)", "tenga", "Desconocido."),
      fb("Par A.", "Hay una tienda aquí que ___ pan sin gluten. (vender)", "vende", "Existe → indicativo."),
      fb("Par B.", "¿Hay alguna tienda aquí que ___ pan sin gluten? (vender)", "venda", "Pregunta sobre la existencia → subjuntivo."),
      toEs("I have a friend who lives in Tokyo.", "Tengo un amigo que vive en Tokio.", "Si el antecedente es una persona concreta y conocida, la relativa va en indicativo: «vive».", ["Tengo una amiga que vive en Tokio."]),
      toEs("I want a friend who lives near me.", "Quiero un amigo que viva cerca de mí.", "Si describimos a alguien que todavía no conocemos, la relativa va en subjuntivo: «viva».", ["Quiero una amiga que viva cerca de mí."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-1",
    "b2d-circuito-no-hay-nadie-que",
    "Circuito: no hay nadie que…, no existe nada que…",
    "Antecedentes inexistentes: tres estaciones con negación total.",
    "6 min",
    [
      sec(
        "Lo que no existe",
        "Si niegas la existencia del antecedente, el subjuntivo es obligatorio: No hay nadie que me entienda. No existe ningún método que funcione siempre. No conozco a nadie que cocine como mi abuela.",
        [
          ["No hay nadie que me entienda.", "There's nobody who understands me."],
          ["No conozco a nadie que cocine como mi abuela.", "I don't know anyone who cooks like my grandmother."],
        ],
        [
          fb("Estación 1.", "No hay nadie en mi familia que ___ nadar. (saber)", "sepa", "Inexistente → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "No hay ningún restaurante en el pueblo que ___ los lunes. (abrir)", "abra", "Inexistente."),
      fb("Estación 1.", "No tengo ningún amigo que ___ en el extranjero. (vivir)", "viva", "Inexistente."),
      fb("Estación 2.", "No existe ninguna dieta que ___ milagros. (hacer)", "haga", "Inexistente."),
      fb("Estación 2.", "No conozco a nadie que ___ tan paciente como tú. (ser)", "sea", "Inexistente."),
      fb("Estación 3.", "Aquí no hay nada que me ___. (gustar)", "guste", "Nada que + subjuntivo."),
      fb("Estación 3.", "En esta oficina nadie ___ lo que hace el director. (saber)", "sabe", "Aquí no hay relativo: afirmación directa → indicativo."),
      mc(
        "«No hay ningún tren que ___ directo a esa ciudad.»",
        ["vaya", "va", "irá", "iba"],
        0,
        "Con un antecedente inexistente (ningún tren) se usa subjuntivo: vaya. «Va», «irá» e «iba» son indicativo y supondrían que ese tren existe."
      ),
      toEs("There's nothing that surprises me anymore.", "Ya no hay nada que me sorprenda.", "Con un antecedente negativo («nada»), la relativa va en subjuntivo: «sorprenda».", ["No hay nada que me sorprenda ya."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-1",
    "b2d-elige-cualquiera-que",
    "Elige y explica: cualquiera que, quienquiera que, lo que sea",
    "Posibilidades abiertas: el antecedente no es una persona o cosa concreta.",
    "6 min",
    [
      sec(
        "Abierto a cualquier opción",
        "Cualquiera que, quienquiera que, dondequiera que y lo que + subjuntivo presentan una posibilidad abierta: Cualquiera que lo vea se enamora. Haz lo que quieras. Te sigo dondequiera que vayas.",
        [
          ["Haz lo que quieras.", "Do whatever you want."],
          ["Quienquiera que llame, di que no estoy.", "Whoever calls, say I'm not in."],
        ],
        [
          mc(
            "«Cualquiera que ___ ese libro lo entenderá.»",
            ["lea", "lee", "leyó", "leerá"],
            0,
            "«Cualquiera que» abre una posibilidad, sin persona concreta: subjuntivo, lea. «Lee» y «leyó» son indicativo, y «leerá» (futuro) no se usa en esta relativa."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Come lo que te ___. (apetecer)", "apetezca", "Lo que + subjuntivo: cualquier cosa."),
      fb("Elige.", "Ya he comido lo que me ___ mi madre. (preparar, indefinido)", "preparó", "Algo concreto y pasado → indicativo."),
      fb("Elige.", "Quienquiera que ___ la puerta, que la cierre. (abrir)", "abra", "Quienquiera que + subjuntivo."),
      fb("Elige.", "Iré dondequiera que me ___ el trabajo. (llevar)", "lleve", "Dondequiera que + subjuntivo."),
      fb("Elige.", "Cualquier persona que ___ interesada puede apuntarse. (estar)", "esté", "Cualquier + que + subjuntivo."),
      ms(
        "¿Qué frases hablan de algo abierto (subjuntivo)?",
        ["Dime lo que pienses.", "Pide lo que quieras.", "Me gusta lo que dices.", "Entiendo lo que explicas."],
        [0, 1],
        "«Dime lo que pienses» y «Pide lo que quieras» hablan de algo abierto (subjuntivo); «Me gusta lo que dices» y «Entiendo lo que explicas» hablan de algo concreto (indicativo)."
      ),
      toEs("Whoever wins, we'll celebrate.", "Gane quien gane, lo celebraremos.", "La fórmula «verbo + quien + verbo» en subjuntivo significa «no importa quién»: «gane quien gane».", ["Quienquiera que gane, lo celebraremos."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-1",
    "b2d-preguntas-hay-alguien",
    "Preguntas y respuestas: ¿hay alguien que…? — Sí, hay… / No, no hay…",
    "La pregunta va en subjuntivo; la respuesta cambia según exista o no.",
    "6 min",
    [
      sec(
        "Pregunta y respuesta",
        "—¿Hay alguien que tenga un cargador? —Sí, Marta tiene uno. / —No, no hay nadie que tenga. En la pregunta no sabes si existe (subjuntivo). En la respuesta afirmativa ya sabes que existe (indicativo). En la negativa, no existe (subjuntivo).",
        [
          ["—¿Conoces a alguien que alquile coches? —Sí, conozco a uno que alquila furgonetas.", "Do you know anyone who rents cars? Yes, I know one who rents vans."],
        ],
        [
          fb("Responde.", "—¿Hay alguien aquí que hable ruso? —Sí, Iván ___ ruso. (hablar)", "habla", "Existe → indicativo."),
        ]
      ),
    ],
    [
      fb("Pregunta.", "¿Conoces a algún fontanero que ___ los domingos? (trabajar)", "trabaje", "Pregunta → subjuntivo."),
      fb("Responde.", "—No, no conozco a ninguno que ___ los domingos. (trabajar)", "trabaje", "Inexistente → subjuntivo."),
      fb("Pregunta.", "¿Tienes algún libro que ___ de la Guerra Civil? (tratar)", "trate", "Pregunta → subjuntivo."),
      fb("Responde.", "—Sí, tengo uno que ___ de la vida en Madrid en 1937. (tratar)", "trata", "Existe → indicativo."),
      fb("Pregunta.", "¿Hay alguna farmacia que ___ de guardia esta noche? (estar)", "esté", "Pregunta → subjuntivo."),
      fb("Responde.", "—Sí, la de la plaza ___ de guardia. (estar)", "está", "Existe → indicativo."),
      toEs("Is there anyone who can help me?", "¿Hay alguien que pueda ayudarme?", "Si preguntamos si algo existe, la relativa va en subjuntivo: «pueda».", ["¿Hay alguien que me pueda ayudar?"]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2d-cuento-galeria",
    "Cuento con huecos: la galería busca un cuadro",
    "Una comisaria de arte describe la obra que necesita para una exposición.",
    "7 min",
    [
      sec(
        "El encargo",
        "«Buscamos una obra que hable del mar y que no sea demasiado grande. Necesitamos un artista que tenga experiencia con el óleo. Ya tenemos dos cuadros que muestran la costa, pero no hay ninguno que refleje una tormenta.»",
        [
          ["Buscamos una obra que hable del mar.", "We're looking for a work that deals with the sea."],
          ["Ya tenemos dos cuadros que muestran la costa.", "We already have two paintings that show the coast."],
        ],
        [
          fb("Completa.", "Buscamos una obra que ___ del mar. (hablar)", "hable", "Desconocida → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "…y que no ___ demasiado grande. (ser)", "sea", "Desconocida → subjuntivo."),
      fb("Completa.", "Necesitamos un artista que ___ experiencia con el óleo. (tener)", "tenga", "Desconocido."),
      fb("Completa.", "Ya tenemos dos cuadros que ___ la costa. (mostrar)", "muestran", "Existen → indicativo."),
      fb("Completa.", "No hay ninguno que ___ una tormenta. (reflejar)", "refleje", "Inexistente."),
      fb("Completa.", "El escultor que ___ la exposición anterior era argentino. (preparar, indefinido)", "preparó", "Conocido y pasado → indicativo."),
      mc(
        "«Queremos un catálogo que ___ en tres idiomas.»",
        ["esté", "está", "estará", "estuvo"],
        0,
        "El catálogo que queremos aún no existe o no lo conocemos: subjuntivo, esté. «Está», «estará» y «estuvo» son indicativo y supondrían un catálogo concreto."
      ),
      toEs("There's no painting in the museum that shows a storm.", "No hay ningún cuadro en el museo que muestre una tormenta.", "Con un antecedente que no existe («ningún cuadro»), la relativa va en subjuntivo: «muestre»."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2d-habla-de-ti-pareja-ideal",
    "Habla de ti: tu casa, tu trabajo y tu ciudad ideales",
    "Describe lo que buscas con cláusulas relativas en subjuntivo.",
    "6 min",
    [
      sec(
        "Tus ideales",
        "Mi casa ideal es una casa que tenga jardín. Quiero un trabajo que me deje tiempo libre. Me gustaría vivir en una ciudad que no sea muy cara. Describe lo que aún no tienes.",
        [
          ["Quiero un trabajo que me deje tiempo libre.", "I want a job that leaves me free time."],
        ],
        [
          fb("Tus ideales.", "Quiero una casa que ___ mucha luz. (tener)", "tenga", "Desconocida → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tus ideales.", "Busco un trabajo en el que ___ aprender cosas nuevas. (poder, yo)", "pueda", "En el que + subjuntivo."),
      fb("Tus ideales.", "Quiero vivir en una ciudad donde ___ buen transporte público. (haber)", "haya", "Donde + subjuntivo."),
      fb("Tus ideales.", "Necesito unos compañeros que me ___. (apoyar)", "apoyen", "Desconocidos."),
      fb("Tus ideales.", "Quiero un jefe que ___ las cosas con claridad. (decir)", "diga", "Desconocido."),
      fb("Tus ideales.", "Ahora tengo un piso que ___ muy oscuro. (ser)", "es", "Real → indicativo."),
      toEs("I want a city where people walk a lot.", "Quiero una ciudad donde la gente camine mucho.", "«Donde» con un lugar deseado, aún no concreto, va con subjuntivo: «camine».", ["Quiero una ciudad en la que la gente camine mucho.", "Quiero una ciudad donde la gente pasee mucho."]),
      toEs("I'm looking for a job that is close to home.", "Busco un trabajo que esté cerca de casa.", "Si el trabajo aún no existe para nosotros, la relativa va en subjuntivo: «esté».", ["Busco un trabajo que quede cerca de casa."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2d-corrige-anuncios-busco",
    "Corrige el párrafo: anuncios con el modo equivocado",
    "Anuncios de clasificados con errores de indicativo y subjuntivo.",
    "6 min",
    [
      sec(
        "Los anuncios",
        "«Se busca profesor que tiene experiencia con niños. Vendo bicicleta que esté en perfecto estado. Pareja busca piso que acepta mascotas. Empresa necesita persona que habla portugués.» Cuatro errores.",
        [
          ["Se busca profesor que tenga experiencia con niños.", "Teacher with experience with children wanted."],
        ],
        [
          mc(
            "¿Por qué «vendo bicicleta que esté…» es un error?",
            ["La bicicleta existe y la conoces: indicativo (está).", "Falta el artículo.", "Debe ser «estaría».", "Nada."],
            0,
            "Si vendes la bicicleta, existe y la conoces: indicativo, «que está…». No falta ningún artículo (los anuncios lo omiten), «estaría» no encaja y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Se busca profesor que tiene experiencia con niños.»", "Se busca profesor que tenga experiencia con niños.", "En un anuncio que busca a alguien aún desconocido se usa subjuntivo: «tenga», no «tiene»."),
      toEs("Corrige: «Vendo bicicleta que esté en perfecto estado.»", "Vendo bicicleta que está en perfecto estado.", "La bicicleta que se vende es concreta y conocida, así que va en indicativo: «está», no «esté»."),
      toEs("Corrige: «Pareja busca piso que acepta mascotas.»", "Pareja busca piso que acepte mascotas.", "El piso buscado aún no es concreto, así que va en subjuntivo: «acepte», no «acepta»."),
      toEs("Corrige: «Empresa necesita persona que habla portugués.»", "Empresa necesita persona que hable portugués.", "La persona buscada aún es desconocida, así que va en subjuntivo: «hable», no «habla»."),
      toEs("Corrige: «Alquilo habitación que tenga baño propio.»", "Alquilo habitación que tiene baño propio.", "La habitación que se alquila existe y es concreta, así que va en indicativo: «tiene», no «tenga»."),
      ms(
        "¿Qué anuncios están bien?",
        ["Busco guitarra que no sea muy cara.", "Vendo sofá que tiene tres años.", "Busco gato que es tranquilo.", "Vendo coche que tenga poco uso."],
        [0, 1],
        "Buscar algo desconocido → subjuntivo (que no sea); vender algo real → indicativo (que tiene). «Busco gato que es» y «Vendo coche que tenga» invierten los modos."
      ),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2d-cadena-afirmar-negar",
    "Cadena de transformaciones: hay alguien que → no hay nadie que",
    "Niega la existencia y cambia el modo.",
    "6 min",
    [
      sec(
        "Afirmar y negar",
        "Hay alguien que sabe la respuesta (indicativo). → No hay nadie que sepa la respuesta (subjuntivo). Conozco un sitio que vende sellos. → No conozco ningún sitio que venda sellos.",
        [
          ["Hay algo que me preocupa. → No hay nada que me preocupe.", "There's something that worries me. → There's nothing that worries me."],
        ],
        [
          fb("Niega.", "Hay alguien que conoce el camino. → No hay nadie que ___ el camino.", "conozca", "Con un antecedente inexistente (no hay nadie que…) se usa subjuntivo: conozca (desde conozco)."),
        ]
      ),
    ],
    [
      fb("Niega.", "Conozco un médico que atiende a domicilio. → No conozco ningún médico que ___ a domicilio.", "atienda", "Si niegas conocer a alguien así (ningún médico), el antecedente no existe para ti: subjuntivo, atienda."),
      fb("Niega.", "Tengo una app que traduce menús. → No tengo ninguna app que ___ menús.", "traduzca", "Antecedente negado (ninguna app) → subjuntivo, formado desde traduzco: traduzca."),
      fb("Niega.", "Aquí hay algo que te va a gustar. → Aquí no hay nada que te ___ a gustar.", "vaya", "Antecedente negado (nada) → subjuntivo; ir a → vaya a."),
      fb("Niega.", "Hay un vuelo que sale a las seis. → No hay ningún vuelo que ___ a las seis.", "salga", "Antecedente negado (ningún vuelo) → subjuntivo, desde salgo: salga."),
      fb("Afirma.", "No hay nadie que quiera ayudar. → Hay alguien que ___ ayudar.", "quiere", "Al afirmar que alguien existe, el antecedente es real: indicativo, quiere."),
      fb("Afirma.", "No conozco a nadie que juegue al golf. → Conozco a alguien que ___ al golf.", "juega", "Al afirmar que conoces a alguien, el antecedente es real: indicativo, juega."),
      toEs("There's nobody who knows the truth.", "No hay nadie que sepa la verdad.", "Con un antecedente negativo («nadie»), la relativa va en subjuntivo: «sepa»."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2d-ronda-relativo-subjuntivo",
    "Ronda rápida: ¿indicativo o subjuntivo en la relativa?",
    "Diez antecedentes: conocidos, desconocidos, inexistentes y abiertos.",
    "5 min",
    [
      sec(
        "Cuatro preguntas",
        "¿Existe y lo conozco? → indicativo. ¿Lo busco sin saber si existe? → subjuntivo. ¿No existe? → subjuntivo. ¿Es cualquiera? → subjuntivo.",
        [
          ["El hotel en el que nos alojamos tiene piscina.", "The hotel where we're staying has a pool."],
          ["Busco un hotel en el que admitan perros.", "I'm looking for a hotel where they accept dogs."],
        ],
        [
          fb("Rápido.", "El chico que ___ en la recepción es muy amable. (trabajar)", "trabaja", "Conocido."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Busco un hotel que ___ desayuno. (incluir)", "incluya", "Desconocido; incluir → incluya."),
      fb("Rápido.", "No hay ninguna habitación que ___ vistas al mar. (tener)", "tenga", "Inexistente."),
      fb("Rápido.", "La habitación que nos ___ tiene balcón. (dar, indefinido)", "dieron", "Conocida."),
      fb("Rápido.", "Elige la habitación que ___. (preferir, tú)", "prefieras", "Abierta."),
      fb("Rápido.", "¿Hay algún museo que ___ gratis los domingos? (ser)", "sea", "Pregunta."),
      fb("Rápido.", "El museo que ___ gratis los domingos es el del Prado. (ser)", "es", "Conocido."),
      fb("Rápido.", "No encuentro nada que me ___ bien. (quedar)", "quede", "Inexistente."),
      mc(
        "«Tengo una vecina que ___ perros.»",
        ["cuida", "cuide", "cuidaba", "cuidaría"],
        0,
        "La vecina existe y la conozco: indicativo, cuida. «Cuide» sería para alguien buscado, «cuidaba» cambia el tiempo y «cuidaría» es condicional."
      ),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-linea-buscaba-alguien-que",
    "Línea del tiempo: busco a alguien que sepa / buscaba a alguien que supiera",
    "La relativa en subjuntivo también sigue la secuencia de tiempos.",
    "6 min",
    [
      sec(
        "Presente y pasado",
        "Presente: Busco a alguien que sepa inglés. Pasado: Buscaba a alguien que supiera inglés. Si el verbo principal va en pasado, la relativa desconocida pasa al imperfecto de subjuntivo.",
        [
          ["Buscaba un piso que tuviera terraza.", "I was looking for a flat that had a terrace."],
          ["No había nadie que me entendiera.", "There was nobody who understood me."],
        ],
        [
          fb("Al pasado.", "Busco un piso que tenga terraza. → Buscaba un piso que ___ terraza.", "tuviera", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Se forma desde «tuvieron»: «tuviera»."),
        ]
      ),
    ],
    [
      fb("Al pasado.", "Necesito a alguien que me ayude. → Necesitaba a alguien que me ___.", "ayudara", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Se forma desde «ayudaron»: «ayudara»."),
      fb("Al pasado.", "No hay nadie que conduzca. → No había nadie que ___.", "condujera", "Antecedente negado («nadie») en pasado → imperfecto de subjuntivo. Desde «condujeron»: «condujera»."),
      fb("Al pasado.", "Quiero un coche que no gaste mucho. → Quería un coche que no ___ mucho.", "gastara", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Desde «gastaron»: «gastara»."),
      fb("Al pasado.", "No conozco a nadie que haga eso. → No conocía a nadie que ___ eso.", "hiciera", "Antecedente negado («nadie») en pasado → imperfecto de subjuntivo. Desde «hicieron»: «hiciera»."),
      fb("Al pasado.", "Busco un hotel que esté en el centro. → Buscábamos un hotel que ___ en el centro.", "estuviera", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Desde «estuvieron»: «estuviera»."),
      fb("Al presente.", "No había ningún tren que fuera directo. → No hay ningún tren que ___ directo.", "vaya", "Con el verbo principal en presente («no hay»), el subjuntivo va en presente: «vaya»."),
      mc(
        "«De niño, quería un perro que ___ trucos.»",
        ["supiera hacer", "sepa hacer", "sabía hacer", "sabrá hacer"],
        0,
        "Un perro deseado y desconocido, con el verbo principal en pasado (quería): imperfecto de subjuntivo, supiera hacer. «Sepa» iría con presente, «sabía» es indicativo y «sabrá» es futuro."
      ),
      toEs("We needed a guide who spoke Arabic.", "Necesitábamos un guía que hablara árabe.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «hablara».", ["Necesitábamos una guía que hablara árabe.", "Necesitábamos un guía que hablase árabe."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-dictado-relativas-subjuntivo",
    "Dictado: relativas en subjuntivo",
    "Frases con antecedentes desconocidos o inexistentes, palabra por palabra.",
    "5 min",
    [
      sec(
        "Escucha la relativa",
        "Fíjate en el verbo después de «que»: si el antecedente es desconocido o no existe, va en subjuntivo.",
        [
          ["No hay nada que puedas hacer.", "There's nothing you can do."],
        ],
        [
          wo("Buscamos a alguien que sepa programar.", "Desconocido.", "We're looking for someone who knows how to code."),
        ]
      ),
    ],
    [
      wo("No conozco a nadie que viva en ese barrio.", "Inexistente.", "I don't know anyone who lives in that neighbourhood."),
      wo("¿Hay alguna tienda que abra los domingos?", "Pregunta.", "Is there any shop that opens on Sundays?"),
      wo("Haz lo que te parezca mejor.", "Lo que + subjuntivo.", "Do whatever you think is best."),
      wo("No había nadie que quisiera ayudarnos.", "Pasado inexistente.", "There was nobody who wanted to help us."),
      wo("Quiero una bici que pese poco.", "Desconocida.", "I want a bike that weighs little."),
      toEs("There's no one who can replace you.", "No hay nadie que pueda sustituirte.", "Con un antecedente negativo («nadie»), la relativa va en subjuntivo: «pueda».", ["No hay nadie que te pueda sustituir.", "No hay nadie que pueda reemplazarte."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-frase-a-frase-oferta-empleo",
    "Frase a frase: redacta una oferta de empleo",
    "Construye un anuncio completo con requisitos en subjuntivo.",
    "6 min",
    [
      sec(
        "Las partes del anuncio",
        "1) Qué buscas: Buscamos un diseñador que… 2) Requisitos: que tenga, que domine, que sepa. 3) Lo que ofreces (real, indicativo): Ofrecemos un puesto que incluye formación.",
        [
          ["Buscamos un diseñador que domine Photoshop.", "We're looking for a designer who masters Photoshop."],
          ["Ofrecemos un puesto que incluye formación.", "We offer a position that includes training."],
        ],
        [
          fb("Paso 1.", "Buscamos un diseñador que ___ creativo. (ser)", "sea", "Desconocido."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "…que ___ al menos tres años de experiencia. (tener)", "tenga", "Requisito."),
      fb("Paso 2.", "…que ___ inglés con fluidez. (hablar)", "hable", "Requisito."),
      fb("Paso 2.", "…que ___ trabajar en equipo. (saber)", "sepa", "Requisito."),
      fb("Paso 2.", "…que ___ disponibilidad inmediata. (tener)", "tenga", "Requisito."),
      fb("Paso 3.", "Ofrecemos un contrato que ___ seguro médico. (incluir)", "incluye", "Real → indicativo."),
      fb("Paso 3.", "Nuestra oficina, que ___ en el centro, tiene terraza. (estar)", "está", "Real → indicativo."),
      toEs("We're looking for someone who likes working with people.", "Buscamos a alguien que disfrute trabajando con gente.", "Buscamos a alguien aún desconocido, así que la relativa va en subjuntivo: «disfrute».", ["Buscamos a alguien a quien le guste trabajar con gente.", "Buscamos a alguien que disfrute trabajando con la gente."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-cuento-casting",
    "Cuento con huecos: el casting",
    "Un director de cine describe al actor que busca y al que encontró.",
    "7 min",
    [
      sec(
        "El diario del director",
        "«Durante meses busqué un actor que pudiera cantar y bailar. No había nadie que me convenciera. Un día apareció un chico que tocaba la guitarra en la calle. Ahora busco una actriz que tenga su misma energía.»",
        [
          ["Busqué un actor que pudiera cantar y bailar.", "I looked for an actor who could sing and dance."],
          ["Apareció un chico que tocaba la guitarra.", "A boy who played the guitar appeared."],
        ],
        [
          fb("Completa.", "Busqué un actor que ___ cantar y bailar. (poder)", "pudiera", "Pasado + desconocido."),
        ]
      ),
    ],
    [
      fb("Completa.", "No había nadie que me ___. (convencer)", "convenciera", "Pasado + inexistente."),
      fb("Completa.", "Apareció un chico que ___ la guitarra en la calle. (tocar)", "tocaba", "Conocido → indicativo."),
      fb("Completa.", "Ahora busco una actriz que ___ su misma energía. (tener)", "tenga", "Presente + desconocida."),
      fb("Completa.", "El chico que ___ al final se llama Nico. (elegir, yo, indefinido)", "elegí", "Conocido."),
      fb("Completa.", "Queríamos una canción que ___ fácil de recordar. (ser)", "fuera", "Pasado + desconocida."),
      mc(
        "«No hay ninguna actriz que ___ la voz de Nico.»",
        ["iguale", "iguala", "igualara", "igualaría"],
        0,
        "Antecedente inexistente (ninguna actriz) con verbo principal en presente: presente de subjuntivo, iguale. «Iguala» es indicativo, «igualara» iría con pasado y «igualaría» es condicional."
      ),
      toEs("I was looking for someone who could make me laugh.", "Buscaba a alguien que me hiciera reír.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «hiciera».", ["Buscaba a alguien que pudiera hacerme reír.", "Buscaba a alguien que me hiciese reír."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-ronda-cualquiera-lo-que",
    "Ronda rápida: lo que quieras, donde sea, como prefieras",
    "Expresiones abiertas con subjuntivo en respuestas cotidianas.",
    "5 min",
    [
      sec(
        "Dejar elegir",
        "—¿Qué cenamos? —Lo que quieras. —¿Dónde quedamos? —Donde te venga mejor. —¿Cómo lo hago? —Como prefieras. Todas presentan opciones abiertas.",
        [
          ["—¿A qué hora? —Cuando te venga bien.", "What time? Whenever suits you."],
        ],
        [
          fb("Responde.", "—¿Qué película vemos? —La que tú ___. (elegir)", "elijas", "Abierta; g → j."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Dónde nos sentamos? —Donde ___. (querer, tú)", "quieras", "Abierta."),
      fb("Responde.", "—¿Cómo lo pago? —Como te ___ más cómodo. (resultar)", "resulte", "Abierta."),
      fb("Responde.", "—¿Qué le regalamos? —Lo que ___ más útil. (ser)", "sea", "Abierta."),
      fb("Responde.", "—¿A quién invito? —A quien te ___. (apetecer)", "apetezca", "Abierta."),
      fb("Responde.", "—¿Cuánto pido? —Lo que te ___ justo. (parecer)", "parezca", "Abierta."),
      fb("Responde.", "—¿Qué dijo ella? —Lo que siempre ___: que no tiene tiempo. (decir)", "dice", "Concreto → indicativo."),
      mc(
        "—¿Qué me pongo? —«Lo que te ___ cómoda.»",
        ["haga sentir", "hace sentir", "hiciera sentir", "hará sentir"],
        0,
        "«Lo que» abierto, sin una prenda concreta, pide subjuntivo: lo que te haga sentir cómoda. «Hace» se referiría a algo concreto, «hiciera» rompe la secuencia de tiempos y «hará» no se usa en esta relativa."
      ),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-elige-matices-relativas",
    "Elige y explica: el mismo antecedente, dos intenciones",
    "Cambia el modo y cambia lo que dices sobre la existencia.",
    "6 min",
    [
      sec(
        "Matices",
        "«Quiero leer el libro que me recomendaste» (uno concreto). «Quiero leer un libro que me recomiendes» (cualquiera, todavía no me lo has dicho). El modo cuenta si el hablante sabe cuál es.",
        [
          ["Llamaré al técnico que vino ayer.", "I'll call the technician who came yesterday."],
          ["Llamaré a un técnico que pueda venir hoy.", "I'll call a technician who can come today."],
        ],
        [
          mc(
            "«Vamos al restaurante que ___ Luis.» (Luis ya lo recomendó)",
            ["recomendó", "recomiende", "recomendara", "recomendará"],
            0,
            "Luis ya lo recomendó: restaurante concreto y conocido → indicativo, recomendó. «Recomiende» y «recomendara» son subjuntivo (algo aún desconocido) y «recomendará» es futuro."
          ),
        ]
      ),
    ],
    [
      mc("«Vamos a un restaurante que ___ Luis.» (Luis aún no ha dicho cuál)", ["recomiende", "recomendó", "recomienda", "recomendaba"], 0, "Aún no sabemos cuál recomendará: antecedente desconocido → subjuntivo, recomiende. «Recomendó», «recomienda» y «recomendaba» son indicativo y supondrían un restaurante conocido."),
      mc("«Haré lo que me ___.» (todavía no me lo has dicho)", ["digas", "dices", "dijiste", "dirás"], 0, "Todavía no me lo has dicho: «lo que» abierto → subjuntivo, digas. «Dices» y «dijiste» se refieren a algo ya dicho, y «dirás» no se usa en esta relativa."),
      mc("«Hice lo que me ___.» (me lo dijiste)", ["dijiste", "digas", "dijeras", "dirías"], 0, "Ya me lo dijiste: algo concreto del pasado → indicativo, dijiste. «Digas» y «dijeras» son subjuntivo (algo aún abierto) y «dirías» es condicional."),
      mc("«Los alumnos que ___ el examen pueden irse.» (ya lo han terminado algunos)", ["terminen", "terminaron", "terminan", "terminarán"], 0, "Se habla de cualquier alumno que termine, sin saber aún quiénes serán: subjuntivo, terminen. «Terminaron» y «terminan» señalarían alumnos concretos, y «terminarán» no se usa en esta relativa."),
      fb("Completa.", "Los que ___ tarde ayer no pudieron entrar. (llegar)", "llegaron", "Concreto y pasado → indicativo."),
      fb("Completa.", "Los que ___ tarde mañana no podrán entrar. (llegar)", "lleguen", "Futuro, aún desconocido → subjuntivo."),
      toEs("Whoever finishes first can leave.", "El que termine primero puede irse.", "«El que» + subjuntivo se refiere a una persona aún no identificada: «el que termine».", ["Quien termine primero puede irse.", "El que acabe primero puede irse."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-habla-de-ti-busque-encontre",
    "Habla de ti: lo que buscaste y lo que encontraste",
    "Cuenta una búsqueda de tu vida: piso, trabajo, amigo o mascota.",
    "6 min",
    [
      sec(
        "Tu búsqueda",
        "Cuando me mudé, buscaba un piso que estuviera cerca del trabajo y que no costara mucho. Al final encontré uno que está a diez minutos y que tiene un balcón precioso.",
        [
          ["Buscaba un piso que no costara mucho.", "I was looking for a flat that didn't cost much."],
          ["Encontré uno que tiene un balcón precioso.", "I found one that has a lovely balcony."],
        ],
        [
          fb("Tu búsqueda.", "Buscaba un trabajo que me ___ crecer. (permitir)", "permitiera", "Pasado + desconocido."),
        ]
      ),
    ],
    [
      fb("Tu búsqueda.", "Quería un perro que ___ tranquilo. (ser)", "fuera", "Pasado + desconocido."),
      fb("Tu búsqueda.", "Encontré uno que ___ todo el día. (dormir, imperfecto)", "dormía", "Encontrado → indicativo."),
      fb("Tu búsqueda.", "No había ningún piso que ___ dentro de mi presupuesto. (entrar)", "entrara", "Pasado + inexistente."),
      fb("Tu búsqueda.", "Al final encontré una empresa que ___ el teletrabajo. (permitir, presente)", "permite", "Real → indicativo."),
      fb("Tu búsqueda.", "Ahora busco una escuela que ___ clases de cerámica. (ofrecer)", "ofrezca", "Presente + desconocida."),
      toEs("I was looking for someone who shared my hobbies.", "Buscaba a alguien que compartiera mis aficiones.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «compartiera».", ["Buscaba a alguien que compartiese mis aficiones.", "Buscaba a alguien que tuviera mis mismas aficiones."]),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2d-mezcla-relativas-inmobiliaria",
    "Práctica mezclada: en la inmobiliaria",
    "Presente y pasado, conocido y desconocido en una conversación real.",
    "7 min",
    [
      sec(
        "La conversación",
        "Cliente: «Busco un piso que tenga tres habitaciones y que no esté lejos del colegio.» Agente: «Tengo uno que cumple casi todo, pero no hay ninguno en esa zona que baje de 1500 euros.» Cliente: «El año pasado vi uno que costaba menos.»",
        [
          ["No hay ninguno en esa zona que baje de 1500 euros.", "There's none in that area that goes below 1500 euros."],
        ],
        [
          fb("Completa.", "Busco un piso que ___ tres habitaciones. (tener)", "tenga", "Desconocido."),
        ]
      ),
    ],
    [
      fb("Completa.", "…y que no ___ lejos del colegio. (estar)", "esté", "Desconocido."),
      fb("Completa.", "Tengo uno que ___ casi todo. (cumplir)", "cumple", "Conocido."),
      fb("Completa.", "No hay ninguno en esa zona que ___ de 1500 euros. (bajar)", "baje", "Inexistente."),
      fb("Completa.", "El año pasado vi uno que ___ menos. (costar)", "costaba", "Conocido y pasado."),
      fb("Completa.", "Entonces no había ninguno que me ___. (convencer)", "convenciera", "Pasado + inexistente."),
      fb("Completa.", "¿Tiene algo que ___ garaje? (incluir)", "incluya", "Pregunta."),
      mc(
        "«Le enseñaré los pisos que ___ esta semana.» (ya sé cuáles)",
        ["han entrado", "hayan entrado", "entraran", "entren"],
        0,
        "Ya sé qué pisos han entrado: antecedente conocido → indicativo, han entrado. «Hayan entrado», «entraran» y «entren» son subjuntivo, que supondría pisos aún desconocidos."
      ),
      toEs("Is there anything that is cheaper?", "¿Hay algo que sea más barato?", "Si preguntamos si algo existe, la relativa va en subjuntivo: «sea».", ["¿Hay algo que salga más barato?", "¿Tiene algo que sea más barato?"]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-1",
    "b2d-patron-cuando-llegue",
    "Práctica de patrones: cuando + subjuntivo para el futuro",
    "Un marco fijo: cuando + subjuntivo, futuro o mandato en la principal.",
    "6 min",
    [
      sec(
        "El futuro todavía no ha pasado",
        "Cuando hablas de algo que todavía no ha ocurrido, cuando lleva subjuntivo: Cuando llegue a casa, te llamo. Cuando termines, avísame. Nunca: «cuando llegaré».",
        [
          ["Cuando llegue a casa, te llamo.", "When I get home, I'll call you."],
          ["Cuando termines, avísame.", "When you finish, let me know."],
        ],
        [
          fb("Mismo marco.", "Cuando ___ el tren, te escribo. (salir)", "salga", "Futuro → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Cuando ___ dinero, me compraré una moto. (tener, yo)", "tenga", "Futuro → subjuntivo."),
      fb("Mismo marco.", "Cuando ___ mayor, quiero ser piloto. (ser, yo)", "sea", "Futuro → subjuntivo."),
      fb("Mismo marco.", "Cuando ___ a Madrid, visitad el Retiro. (ir, vosotros)", "vayáis", "Futuro → subjuntivo."),
      fb("Mismo marco.", "Cuando ___ el semáforo verde, cruzamos. (ponerse)", "se ponga", "Futuro → subjuntivo."),
      fb("Mismo marco.", "Cuando ___ tu madre, dale recuerdos. (ver, tú)", "veas", "Futuro → subjuntivo."),
      fb("Mismo marco.", "Cuando ___ las vacaciones, dormiré diez horas. (empezar)", "empiecen", "e → ie, z → c."),
      mc(
        "«¿Qué harás cuando ___ la carrera?»",
        ["termines", "terminarás", "terminas", "terminabas"],
        0,
        "Tras «cuando», una acción futura va en subjuntivo, nunca en futuro: cuando termines. «Terminarás» es futuro, «terminas» describiría una rutina y «terminabas» es pasado."
      ),
      toEs("When you know something, tell me.", "Cuando sepas algo, dímelo.", "«Cuando» + acción futura exige subjuntivo, nunca futuro: «sepas».", ["Cuando sepas algo, avísame.", "Cuando sepas algo, cuéntamelo."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-1",
    "b2d-pares-cuando-llego-llegue",
    "Pares mínimos: cuando llego / cuando llegue / cuando llegué",
    "Hábito, futuro o pasado: tres cuando, dos modos.",
    "6 min",
    [
      sec(
        "Tres cuando",
        "Hábito: Cuando llego a casa, me ducho (siempre). Pasado: Cuando llegué a casa, me duché (ayer). Futuro: Cuando llegue a casa, me ducharé (todavía no). Solo el futuro lleva subjuntivo.",
        [
          ["Cuando llueve, me quedo en casa.", "When it rains, I stay home."],
          ["Cuando llueva, me quedaré en casa.", "When it rains, I'll stay home."],
        ],
        [
          fb("Par.", "Cuando ___ a casa, siempre me ducho. (llegar)", "llego", "Hábito → indicativo."),
        ]
      ),
    ],
    [
      fb("Hábito.", "Cuando ___ estrés, salgo a correr. (tener, yo)", "tengo", "Hábito → indicativo."),
      fb("Futuro.", "Cuando ___ estrés en los exámenes, saldré a correr. (tener, yo)", "tenga", "Futuro → subjuntivo."),
      fb("Pasado.", "Cuando ___ estrés el año pasado, salía a correr. (tener, yo)", "tenía", "Pasado → indicativo."),
      fb("Hábito.", "Mi abuela siempre sonríe cuando nos ___. (ver)", "ve", "Hábito."),
      fb("Futuro.", "Mi abuela sonreirá cuando nos ___ mañana. (ver)", "vea", "Futuro."),
      fb("Pasado.", "Mi abuela sonrió cuando nos ___. (ver)", "vio", "Pasado."),
      ms(
        "¿Qué frases hablan del futuro (subjuntivo)?",
        ["Cuando cumpla treinta años, viajaré.", "Avísame cuando estés lista.", "Cuando cumplí treinta años, viajé.", "Cuando estoy lista, aviso."],
        [0, 1],
        "Cuando + subjuntivo habla del futuro: cuando cumpla, cuando estés lista. «Cuando cumplí… viajé» es pasado y «Cuando estoy lista, aviso» es un hábito: ambos con indicativo."
      ),
      toEs("When I was a child, I lived in Seville.", "Cuando era niño, vivía en Sevilla.", "«Cuando» + acción pasada o habitual va en indicativo: «era».", ["Cuando era niña, vivía en Sevilla.", "Cuando era pequeño, vivía en Sevilla."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-1",
    "b2d-circuito-conjunciones-temporales",
    "Circuito: en cuanto, tan pronto como, hasta que, después de que",
    "Cuatro conjunciones que funcionan igual que cuando.",
    "6 min",
    [
      sec(
        "Mismo patrón",
        "En cuanto / tan pronto como / hasta que / después de que + subjuntivo para el futuro, + indicativo para hábitos y pasado: En cuanto llegues, llámame. Esperé hasta que llegó.",
        [
          ["En cuanto sepa algo, te aviso.", "As soon as I know anything, I'll let you know."],
          ["No me voy hasta que termines.", "I'm not leaving until you finish."],
        ],
        [
          fb("Estación 1.", "En cuanto ___ los resultados, te los mando. (tener, yo)", "tenga", "Futuro."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "En cuanto ___ los resultados ayer, te los mandé. (tener, yo)", "tuve", "Pasado → indicativo."),
      fb("Estación 2.", "Tan pronto como ___ la lluvia, saldremos. (parar)", "pare", "Futuro."),
      fb("Estación 2.", "Siempre salimos tan pronto como ___ la lluvia. (parar)", "para", "Hábito."),
      fb("Estación 3.", "No te levantes hasta que te lo ___ el médico. (decir)", "diga", "Futuro."),
      fb("Estación 3.", "Esperamos hasta que ___ el último autobús. (pasar)", "pasó", "Pasado."),
      fb("Estación 4.", "Después de que ___ los invitados, limpiaremos. (irse)", "se vayan", "Futuro."),
      mc(
        "«Seguiré insistiendo hasta que me ___ caso.»",
        ["hagan", "hacen", "harán", "hicieron"],
        0,
        "«Hasta que» con una acción futura pide subjuntivo: hasta que me hagan caso. «Hacen» es presente, «harán» es futuro (imposible aquí) e «hicieron» es pasado."
      ),
      toEs("As soon as you arrive, call me.", "En cuanto llegues, llámame.", "«En cuanto» + acción futura exige subjuntivo: «llegues».", ["Tan pronto como llegues, llámame."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-1",
    "b2d-ronda-antes-de-que",
    "Ronda rápida: antes de que siempre con subjuntivo",
    "Antes de que no tiene excepciones; antes de + infinitivo si el sujeto es el mismo.",
    "5 min",
    [
      sec(
        "Siempre subjuntivo",
        "Antes de que + subjuntivo, siempre: Sal antes de que llueva. Con el mismo sujeto: antes de + infinitivo: Desayuno antes de salir.",
        [
          ["Vámonos antes de que empiece a llover.", "Let's go before it starts to rain."],
          ["Me lavo las manos antes de comer.", "I wash my hands before eating."],
        ],
        [
          fb("Rápido.", "Recoge tus cosas antes de que ___ tu madre. (volver)", "vuelva", "Antes de que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Apaga el horno antes de que se ___ la tarta. (quemar)", "queme", "Siempre subjuntivo."),
      fb("Rápido.", "Llámala antes de que se ___. (dormir)", "duerma", "o → ue."),
      fb("Rápido.", "Siempre reviso el correo antes de ___. (acostarse, yo)", "acostarme", "Mismo sujeto → infinitivo."),
      fb("Rápido.", "Cómpralo antes de que ___ el precio. (subir)", "suba", "Siempre subjuntivo."),
      fb("Rápido.", "Terminaremos antes de que ___ los clientes. (llegar)", "lleguen", "g → gu."),
      fb("Rápido.", "Dímelo antes de que ___ tarde. (ser)", "sea", "Ser → sea."),
      fb("Rápido.", "Hay que decidir antes de que se ___ las plazas. (agotar)", "agoten", "Siempre subjuntivo."),
      mc(
        "«Piénsalo bien antes de ___.» (tú decides)",
        ["decidir", "que decidas", "que decides", "decidas"],
        0,
        "Si el sujeto es el mismo (tú piensas, tú decides), se usa antes de + infinitivo: antes de decidir. «Que decidas» es para otro sujeto, «que decides» usa indicativo y «decidas» sin «que» no es posible."
      ),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-1",
    "b2d-elige-para-que-para",
    "Elige y explica: para + infinitivo / para que + subjuntivo",
    "Mismo sujeto o sujeto distinto: la finalidad decide la forma.",
    "6 min",
    [
      sec(
        "¿Quién hace la segunda acción?",
        "Mismo sujeto: Estudio para aprobar (yo estudio, yo apruebo). Sujeto distinto: Te lo explico para que lo entiendas (yo explico, tú entiendes). Para que siempre lleva subjuntivo.",
        [
          ["Ahorro para comprarme un coche.", "I save to buy myself a car."],
          ["Ahorro para que mis hijos estudien.", "I save so that my children can study."],
        ],
        [
          mc(
            "«Hablo despacio para que me ___.» (tú entiendes)",
            ["entiendas", "entender", "entiendes", "entenderás"],
            0,
            "Con sujeto distinto (yo hablo, tú entiendes) se usa para que + subjuntivo: entiendas. «Entender» sería para el mismo sujeto, y «entiendes» y «entenderás» son indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Me levanto temprano para ___ el tren. (coger, yo)", "coger", "Mismo sujeto."),
      fb("Elige.", "Te despierto temprano para que ___ el tren. (coger, tú)", "cojas", "Sujeto distinto; g → j."),
      fb("Elige.", "Dejo la luz encendida para que el niño no ___ miedo. (tener)", "tenga", "Sujeto distinto."),
      fb("Elige.", "Voy al gimnasio para ___ en forma. (estar, yo)", "estar", "Mismo sujeto."),
      fb("Elige.", "Te presto el libro para que lo ___ en vacaciones. (leer)", "leas", "Sujeto distinto."),
      fb("Elige.", "El profesor repite la explicación para que todos la ___. (entender)", "entiendan", "Sujeto distinto."),
      toEs("I'm telling you so that you know.", "Te lo digo para que lo sepas.", "«Para que» con sujetos distintos exige subjuntivo: «sepas»."),
      toEs("I'm going to the market to buy fish.", "Voy al mercado para comprar pescado.", "Con el mismo sujeto se usa «para» + infinitivo, no «para que».", ["Voy al mercado a comprar pescado."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-1",
    "b2d-pares-aunque",
    "Pares mínimos: aunque llueve / aunque llueva",
    "Un hecho que conoces o una posibilidad que no descartas.",
    "6 min",
    [
      sec(
        "Dos aunque",
        "Aunque + indicativo: reconoces un hecho real (Aunque llueve, voy a salir: está lloviendo). Aunque + subjuntivo: hipótesis o dato que no importa (Aunque llueva, voy a salir: no sé si lloverá, da igual).",
        [
          ["Aunque está cansado, sigue trabajando.", "Although he's tired, he keeps working."],
          ["Aunque esté cansado, seguirá trabajando.", "Even if he's tired, he'll keep working."],
        ],
        [
          mc(
            "Miras por la ventana y ves que nieva: «Aunque ___, iré a trabajar.»",
            ["nieva", "nieve", "nevará", "nevaba"],
            0,
            "Si ves que nieva, es un hecho: aunque + indicativo, nieva. «Nieve» lo presentaría como posible, «nevará» es futuro y «nevaba» es pasado."
          ),
        ]
      ),
    ],
    [
      mc("No sabes si mañana nevará: «Aunque ___ mañana, iré a trabajar.»", ["nieve", "nieva", "nevó", "nevaba"], 0, "Si no sabes si nevará, es una posibilidad: aunque + subjuntivo, nieve. «Nieva» lo presentaría como un hecho, y «nevó» y «nevaba» son pasado."),
      fb("Hecho.", "Aunque el restaurante ___ caro, siempre está lleno. (ser)", "es", "Sabes que es caro."),
      fb("Hipótesis.", "Aunque ___ caro, pediré el menú degustación. (ser)", "sea", "No sabes el precio / no importa."),
      fb("Hecho.", "Aunque ___ tres idiomas, no encuentra trabajo. (hablar, él)", "habla", "Hecho conocido."),
      fb("Hipótesis.", "Aunque me lo ___ de rodillas, no pienso ir. (pedir, ellos)", "pidan", "Hipótesis."),
      fb("Hecho.", "Aunque ___ temprano, llegué tarde. (salir, yo)", "salí", "Pasado real."),
      toEs("Even if you don't believe me, it's true.", "Aunque no me creas, es verdad.", "«Aunque» + subjuntivo presenta algo que no se da por hecho («aunque no me creas»).", ["Aunque no me creas, es cierto."]),
      toEs("Although it's late, I'm going to call her.", "Aunque es tarde, voy a llamarla.", "«Aunque» + indicativo presenta un hecho real y conocido: «aunque es tarde».", ["Aunque es tarde, la voy a llamar."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2d-cuento-debate-ley",
    "Cuento con huecos: el debate sobre la ley",
    "Una diputada y un diputado discuten una nueva ley de vivienda.",
    "7 min",
    [
      sec(
        "El debate",
        "Diputada: «Votaremos esta ley para que los jóvenes puedan alquilar. Cuando se apruebe, los precios bajarán.» Diputado: «Aunque se apruebe, no cambiará nada hasta que se construyan más viviendas. Hay que actuar antes de que sea demasiado tarde.»",
        [
          ["Cuando se apruebe, los precios bajarán.", "When it's approved, prices will go down."],
          ["Hay que actuar antes de que sea demasiado tarde.", "We must act before it's too late."],
        ],
        [
          fb("Completa.", "Votaremos esta ley para que los jóvenes ___ alquilar. (poder)", "puedan", "Para que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando se ___, los precios bajarán. (aprobar)", "apruebe", "Futuro → subjuntivo."),
      fb("Completa.", "Aunque se ___, no cambiará nada. (aprobar)", "apruebe", "Hipótesis → subjuntivo."),
      fb("Completa.", "…hasta que se ___ más viviendas. (construir)", "construyan", "Futuro; construir → construyan."),
      fb("Completa.", "Hay que actuar antes de que ___ demasiado tarde. (ser)", "sea", "Antes de que."),
      fb("Completa.", "En cuanto ___ la votación, daremos una rueda de prensa. (terminar)", "termine", "Futuro."),
      mc(
        "«El año pasado, cuando se ___ la ley anterior, nada cambió.»",
        ["aprobó", "apruebe", "aprueba", "aprobaba"],
        0,
        "«El año pasado» es un hecho pasado: cuando + indicativo, se aprobó. «Apruebe» sería para el futuro, «aprueba» es presente y «aprobaba» describe un proceso o hábito."
      ),
      toEs("We'll keep fighting until the law changes.", "Seguiremos luchando hasta que cambie la ley.", "«Hasta que» + acción futura exige subjuntivo: «cambie».", ["Seguiremos luchando hasta que la ley cambie."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2d-cadena-unir-oraciones",
    "Cadena de transformaciones: une dos frases con una conjunción",
    "Dos oraciones sueltas se convierten en una con cuando, para que o antes de que.",
    "6 min",
    [
      sec(
        "Unir ideas",
        "Terminas el informe. Luego me lo mandas. → Cuando termines el informe, mándamelo. Yo te lo explico. Tú lo entiendes. → Te lo explico para que lo entiendas.",
        [
          ["Cuando termines el informe, mándamelo.", "When you finish the report, send it to me."],
        ],
        [
          fb("Une.", "Llegas. Luego cenamos. → Cenamos cuando ___.", "llegues", "«Cuando» con una acción futura pide subjuntivo: cuando llegues."),
        ]
      ),
    ],
    [
      fb("Une.", "Te doy mi número. Tú me llamas. → Te doy mi número para que me ___.", "llames", "«Para que» expresa finalidad y siempre pide subjuntivo: para que me llames."),
      fb("Une.", "Sale el sol. Antes, salimos. → Salimos antes de que ___ el sol.", "salga", "«Antes de que» siempre pide subjuntivo: antes de que salga (desde salgo)."),
      fb("Une.", "Encuentro las llaves. Enseguida te aviso. → En cuanto ___ las llaves, te aviso.", "encuentre", "«En cuanto» con una acción futura pide subjuntivo; encontrar cambia o→ue: encuentre."),
      fb("Une.", "Te recuperas. Hasta ese momento, no trabajas. → No trabajes hasta que te ___.", "recuperes", "«Hasta que» con una acción futura pide subjuntivo, con el reflexivo delante: te recuperes."),
      fb("Une.", "Cierro la ventana. Así el gato no se escapa. → Cierro la ventana para que el gato no se ___.", "escape", "«Para que» + otro sujeto (el gato) → subjuntivo: no se escape."),
      fb("Une.", "Los niños se duermen. Después vemos la película. → Vemos la película después de que los niños se ___.", "duerman", "«Después de que» con una acción futura pide subjuntivo; dormir cambia o→ue: se duerman."),
      toEs("I'll call you as soon as I get out of the meeting.", "Te llamaré en cuanto salga de la reunión.", "«En cuanto» + acción futura exige subjuntivo: «salga».", ["Te llamo en cuanto salga de la reunión.", "Te llamaré tan pronto como salga de la reunión."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2d-corrige-cuando-futuro",
    "Corrige el párrafo: el error de «cuando + futuro»",
    "Un correo lleno del error más típico del inglés.",
    "6 min",
    [
      sec(
        "El correo",
        "«Cuando llegaré a Lima, te escribiré. Te mando las fotos para que las ves. Antes de que me voy, quiero verte. Aunque estará cansada, iré a tu fiesta.» Cuatro errores.",
        [
          ["Cuando llegue a Lima, te escribiré.", "When I arrive in Lima, I'll write to you."],
        ],
        [
          mc(
            "¿Qué falla en «cuando llegaré»?",
            ["Tras cuando, el futuro va en subjuntivo: llegue.", "Falta «que».", "Debe ser «llegaba».", "Nada."],
            0,
            "Tras «cuando», el futuro se expresa con subjuntivo: cuando llegue. No falta «que», «llegaba» cambia el tiempo al pasado y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Cuando llegaré a Lima, te escribiré.»", "Cuando llegue a Lima, te escribiré.", "Tras «cuando» con valor futuro nunca va futuro, sino presente de subjuntivo: «llegue»."),
      toEs("Corrige: «Te mando las fotos para que las ves.»", "Te mando las fotos para que las veas.", "«Para que» exige siempre subjuntivo: «veas», no «ves»."),
      toEs("Corrige: «Antes de que me voy, quiero verte.»", "Antes de que me vaya, quiero verte.", "«Antes de que» exige siempre subjuntivo: «vaya», no «voy»."),
      toEs("Corrige: «Aunque estará cansada, iré a tu fiesta.»", "Aunque esté cansada, iré a tu fiesta.", "«Aunque» con una hipótesis futura va en subjuntivo, nunca en futuro: «esté»."),
      toEs("Corrige: «En cuanto sabré la nota, te llamo.»", "En cuanto sepa la nota, te llamo.", "«En cuanto» + acción futura exige subjuntivo, no futuro: «sepa»."),
      ms(
        "¿Qué frases son correctas?",
        ["Te llamo cuando salga.", "Siempre te llamo cuando salgo.", "Te llamaré cuando saldré.", "Te llamo cuando saldría."],
        [0, 1],
        "Futuro → cuando + subjuntivo (cuando salga); hábito → cuando + indicativo (cuando salgo). «Cuando saldré» y «cuando saldría» usan futuro o condicional, imposibles tras cuando."
      ),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2d-habla-de-ti-planes",
    "Habla de ti: tus planes con condiciones",
    "Cuenta qué harás cuando, en cuanto y antes de que pasen ciertas cosas.",
    "6 min",
    [
      sec(
        "Tus planes",
        "Cuando termine este curso, me tomaré unas vacaciones. En cuanto ahorre lo suficiente, viajaré a Perú. Antes de que acabe el año, quiero aprender a nadar.",
        [
          ["En cuanto ahorre lo suficiente, viajaré a Perú.", "As soon as I save enough, I'll travel to Peru."],
        ],
        [
          fb("Tus planes.", "Cuando ___ este curso, me tomaré unas vacaciones. (terminar)", "termine", "Futuro → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tus planes.", "En cuanto ___ lo suficiente, viajaré. (ahorrar)", "ahorre", "Futuro."),
      fb("Tus planes.", "Antes de que ___ el año, quiero aprender a nadar. (acabar)", "acabe", "Antes de que."),
      fb("Tus planes.", "No dejaré de estudiar hasta que ___ el C1. (conseguir)", "consiga", "Hasta que; gu → g."),
      fb("Tus planes.", "Cuando mis padres se ___, iré a vivir cerca de ellos. (jubilar)", "jubilen", "Futuro."),
      fb("Tus planes.", "Voy a ahorrar para que mis hijos ___ estudiar fuera. (poder)", "puedan", "Para que."),
      toEs("When I retire, I'll live by the sea.", "Cuando me jubile, viviré junto al mar.", "«Cuando» + acción futura exige subjuntivo: «me jubile».", ["Cuando me jubile, viviré cerca del mar.", "Cuando me jubile, voy a vivir junto al mar."]),
      toEs("I want to travel before I turn forty.", "Quiero viajar antes de cumplir cuarenta años.", "Mismo sujeto → antes de + infinitivo.", ["Quiero viajar antes de que cumpla cuarenta años.", "Quiero viajar antes de cumplir los cuarenta."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2d-preguntas-cuando-vas-a",
    "Preguntas y respuestas: ¿cuándo vas a…? — Cuando…",
    "Responde a preguntas sobre el futuro con conjunciones temporales.",
    "6 min",
    [
      sec(
        "Respuestas con condición",
        "—¿Cuándo vas a comprarte un coche? —Cuando encuentre trabajo. —¿Hasta cuándo te quedas? —Hasta que se acaben las vacaciones. La respuesta sobre el futuro lleva subjuntivo.",
        [
          ["—¿Cuándo te mudas? —En cuanto firme el contrato.", "When are you moving? As soon as I sign the contract."],
        ],
        [
          fb("Responde.", "—¿Cuándo vas a pintar la casa? —Cuando ___ buen tiempo. (hacer)", "haga", "Futuro."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Hasta cuándo te quedas? —Hasta que se ___ las vacaciones. (acabar)", "acaben", "Hasta que."),
      fb("Responde.", "—¿Cuándo empiezas? —En cuanto me ___ los papeles. (dar, ellos)", "den", "En cuanto."),
      fb("Responde.", "—¿Cuándo me devuelves el libro? —Después de que lo ___ mi hermana. (leer)", "lea", "Después de que."),
      fb("Responde.", "—¿Para qué me das esto? —Para que lo ___ en la nevera. (guardar)", "guardes", "Para que."),
      fb("Responde.", "—¿Cuándo sueles cenar? —Cuando ___ del gimnasio. (volver)", "vuelvo", "Hábito → indicativo."),
      mc(
        "—¿Cuándo me llamas? —«Tan pronto como ___.»",
        ["pueda", "puedo", "podré", "pude"],
        0,
        "«Tan pronto como» con una acción futura pide subjuntivo: pueda. «Puedo» describiría un hábito, «podré» es futuro (imposible aquí) y «pude» es pasado."
      ),
      toEs("When will you tell her? When the time is right.", "¿Cuándo se lo vas a decir? Cuando sea el momento.", "La pregunta «¿cuándo?» lleva tilde; la respuesta «cuando» + futuro va en subjuntivo: «sea».", ["¿Cuándo se lo dirás? Cuando sea el momento adecuado.", "¿Cuándo se lo vas a decir? Cuando llegue el momento."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2d-ronda-adverbiales-mezcla",
    "Ronda rápida: todas las conjunciones",
    "Cuando, en cuanto, hasta que, antes de que, para que, aunque: una decisión por frase.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Siempre subjuntivo: antes de que, para que. Depende del tiempo: cuando, en cuanto, hasta que, después de que (futuro → subjuntivo). Depende del hablante: aunque (hecho → indicativo; hipótesis → subjuntivo).",
        [
          ["Te espero hasta que salgas.", "I'll wait for you until you come out."],
        ],
        [
          fb("Rápido.", "Te lo recuerdo para que no se te ___. (olvidar)", "olvide", "Para que."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Cuando ___ el invierno, iremos a esquiar. (llegar)", "llegue", "Futuro."),
      fb("Rápido.", "Cuando ___ el invierno, siempre vamos a esquiar. (llegar)", "llega", "Hábito."),
      fb("Rápido.", "Me voy antes de que ___ los atascos. (empezar)", "empiecen", "Antes de que."),
      fb("Rápido.", "No cuelgues hasta que te ___. (contestar, ellos)", "contesten", "Futuro."),
      fb("Rápido.", "Aunque ___ mucho, no adelgaza. (correr, él — es un hecho)", "corre", "Hecho."),
      fb("Rápido.", "Aunque ___ mucho, no adelgazará. (correr, él — hipótesis)", "corra", "Hipótesis."),
      fb("Rápido.", "En cuanto ___ la puerta, entra el perro. (abrir, yo — siempre)", "abro", "Hábito."),
      mc(
        "«Guárdalo bien para que nadie lo ___.»",
        ["encuentre", "encuentra", "encontrará", "encontró"],
        0,
        "«Para que» siempre lleva subjuntivo: encuentre. «Encuentra», «encontrará» y «encontró» son indicativo."
      ),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-linea-para-que-pasado",
    "Línea del tiempo: para que venga / para que viniera",
    "Las conjunciones adverbiales también siguen la secuencia de tiempos.",
    "6 min",
    [
      sec(
        "Presente y pasado",
        "Te lo explico para que lo entiendas. → Te lo expliqué para que lo entendieras. Salgo antes de que llueva. → Salí antes de que lloviera. Principal en pasado → imperfecto de subjuntivo.",
        [
          ["Te lo dije para que lo supieras.", "I told you so that you'd know."],
          ["Nos fuimos antes de que empezara a llover.", "We left before it started to rain."],
        ],
        [
          fb("Al pasado.", "Te llamo para que vengas. → Te llamé para que ___.", "vinieras", "«Para que» exige subjuntivo; con la principal en pasado, imperfecto: desde «vinieron», «vinieras»."),
        ]
      ),
    ],
    [
      fb("Al pasado.", "Me voy antes de que llegue el jefe. → Me fui antes de que ___ el jefe.", "llegara", "«Antes de que» siempre exige subjuntivo; en pasado, imperfecto: «llegara»."),
      fb("Al pasado.", "Hablo alto para que me oigan. → Hablé alto para que me ___.", "oyeran", "«Para que» exige subjuntivo; en pasado se forma desde «oyeron»: «oyeran»."),
      fb("Al pasado.", "Guardo el pastel para que no se lo coma el perro. → Guardé el pastel para que no se lo ___ el perro.", "comiera", "«Para que» exige subjuntivo; en pasado se forma desde «comieron»: «comiera»."),
      fb("Al pasado.", "Ahorramos para que los niños puedan estudiar. → Ahorramos para que los niños ___ estudiar.", "pudieran", "«Para que» exige subjuntivo; con «ahorramos» en pasado, imperfecto: «pudieran»."),
      fb("Al pasado.", "Lo hago sin que nadie me ayude. → Lo hice sin que nadie me ___.", "ayudara", "«Sin que» siempre exige subjuntivo; en pasado, imperfecto: «ayudara»."),
      fb("Al presente.", "Salimos antes de que anocheciera. → Salimos antes de que ___. (hoy)", "anochezca", "Si la acción es de hoy y la principal en presente o pretérito cercano, basta el presente de subjuntivo: «anochezca»."),
      mc(
        "«Mi madre me dejó una nota para que no ___ de la cita.»",
        ["me olvidara", "me olvide", "me olvidaba", "me olvidé"],
        0,
        "Con el verbo principal en pasado (dejó), para que va con imperfecto de subjuntivo: me olvidara. «Me olvide» iría con presente, y «me olvidaba» y «me olvidé» son indicativo."
      ),
      toEs("She left before anyone saw her.", "Se fue antes de que nadie la viera.", "Antes de que + imperfecto de subjuntivo.", ["Se marchó antes de que nadie la viera.", "Se fue antes de que alguien la viera."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-dictado-conjunciones",
    "Dictado: conjunciones adverbiales",
    "Frases con cuando, en cuanto, para que, aunque y antes de que.",
    "5 min",
    [
      sec(
        "Escucha la conjunción",
        "La conjunción y el tiempo de la principal te dicen qué modo necesitas.",
        [
          ["En cuanto termine, te llamo.", "As soon as I finish, I'll call you."],
        ],
        [
          wo("Avísame cuando llegues al hotel.", "Futuro → subjuntivo.", "Let me know when you get to the hotel."),
        ]
      ),
    ],
    [
      wo("Aunque no te guste, tienes que ir.", "Aunque + subjuntivo.", "Even if you don't like it, you have to go."),
      wo("Te lo explico para que no te equivoques.", "Para que.", "I'm explaining it so you don't make a mistake."),
      wo("Nos iremos antes de que cierren el metro.", "Antes de que.", "We'll leave before they close the metro."),
      wo("No descansaré hasta que lo encuentre.", "Hasta que.", "I won't rest until I find it."),
      wo("Lo hizo sin que nadie se diera cuenta.", "Sin que + imperfecto de subjuntivo.", "He did it without anyone noticing."),
      toEs("As soon as they arrive, we'll start.", "En cuanto lleguen, empezaremos.", "«En cuanto» + acción futura exige subjuntivo: «lleguen».", ["En cuanto lleguen, empezamos.", "Tan pronto como lleguen, empezaremos."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-circuito-sin-que-con-tal",
    "Circuito: sin que, con tal de que, a menos que, en caso de que",
    "Otras conjunciones que siempre llevan subjuntivo.",
    "6 min",
    [
      sec(
        "Siempre subjuntivo",
        "Sin que (without), con tal de que / siempre que (provided that), a menos que / a no ser que (unless), en caso de que (in case). Todas llevan siempre subjuntivo porque presentan condiciones o acciones no realizadas.",
        [
          ["Te lo presto con tal de que me lo devuelvas.", "I'll lend it to you as long as you give it back."],
          ["Iremos a pie a menos que llueva.", "We'll walk unless it rains."],
        ],
        [
          fb("Estación 1.", "Salió de casa sin que sus padres lo ___. (notar)", "notaran", "Sin que + pasado."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Entra sin que te ___ nadie. (ver)", "vea", "Sin que + presente."),
      fb("Estación 2.", "Te ayudo con tal de que me ___ la cena. (invitar, tú, a)", "invites a", "Con tal de que; el complemento va detrás."),
      fb("Estación 2.", "Puedes usar mi coche siempre que lo ___ limpio. (devolver)", "devuelvas", "Siempre que = con tal de que."),
      fb("Estación 3.", "No iré a menos que ___ tú también. (ir)", "vayas", "A menos que."),
      fb("Estación 3.", "Cenaremos fuera, a no ser que ___ muy tarde. (salir, nosotros)", "salgamos", "A no ser que."),
      fb("Estación 4.", "Lleva un paraguas en caso de que ___. (llover)", "llueva", "En caso de que."),
      mc(
        "«Te dejo mi portátil ___ me lo cuides.»",
        ["con tal de que", "aunque", "porque", "ya que"],
        0,
        "«Con tal de que» expresa una condición y pide subjuntivo: con tal de que me lo cuides. «Aunque» expresa concesión, y «porque» y «ya que» expresan causa (y pedirían indicativo)."
      ),
      toEs("Take my number in case you need something.", "Toma mi número por si necesitas algo.", "Por si + indicativo / en caso de que + subjuntivo.", ["Toma mi número en caso de que necesites algo.", "Apunta mi número por si necesitas algo."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-cuento-mudanza-extranjero",
    "Cuento con huecos: la carta antes de emigrar",
    "Una madre escribe a su hija, que se muda a Canadá.",
    "7 min",
    [
      sec(
        "La carta",
        "«Hija: cuando llegues a Toronto, escríbenos. Aunque haga mucho frío, no te quedes encerrada. Te he metido dinero en la maleta para que tengas algo los primeros días. Y antes de que se me olvide: llama a tu tía en cuanto puedas.»",
        [
          ["Te he metido dinero para que tengas algo los primeros días.", "I've put money in so you have something for the first days."],
        ],
        [
          fb("Completa.", "Cuando ___ a Toronto, escríbenos. (llegar)", "llegues", "Futuro."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque ___ mucho frío, no te quedes encerrada. (hacer)", "haga", "Hipótesis."),
      fb("Completa.", "…para que ___ algo los primeros días. (tener)", "tengas", "Para que."),
      fb("Completa.", "Antes de que se me ___: llama a tu tía. (olvidar)", "olvide", "Antes de que."),
      fb("Completa.", "…en cuanto ___. (poder)", "puedas", "En cuanto + futuro."),
      fb("La respuesta.", "Mamá: cuando ___ al aeropuerto, estaba nevando. (llegar, yo)", "llegué", "Pasado → indicativo."),
      fb("La respuesta.", "Me diste el dinero para que no ___ problemas, y me vino muy bien. (tener, yo)", "tuviera", "Pasado → imperfecto de subjuntivo."),
      toEs("I'll call you as soon as I have internet.", "Te llamaré en cuanto tenga internet.", "«En cuanto» + acción futura exige subjuntivo: «tenga».", ["Te llamo en cuanto tenga internet.", "Os llamaré en cuanto tenga internet."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-corrige-conjunciones-pasado",
    "Corrige el párrafo: la secuencia en las adverbiales",
    "Errores de tiempo después de para que, antes de que y sin que.",
    "6 min",
    [
      sec(
        "El relato",
        "«Ayer salí antes de que amanezca. Dejé una nota para que mi compañero no se preocupe. Volví a casa sin que nadie me vea. Esperé hasta que se durmieron todos.» Tres errores de secuencia; una frase está bien.",
        [
          ["Salí antes de que amaneciera.", "I left before dawn."],
        ],
        [
          mc(
            "¿Qué frase del relato está bien?",
            ["Esperé hasta que se durmieron todos.", "Salí antes de que amanezca.", "Dejé una nota para que no se preocupe.", "Volví sin que nadie me vea."],
            0,
            "«Hasta que» con un hecho pasado real va en indicativo: hasta que se durmieron. En las otras, antes de que, para que y sin que en pasado piden imperfecto de subjuntivo: amaneciera, se preocupara, me viera."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Ayer salí antes de que amanezca.»", "Ayer salí antes de que amaneciera.", "«Antes de que» exige subjuntivo; con «salí» en pasado, imperfecto: «amaneciera»."),
      toEs("Corrige: «Dejé una nota para que mi compañero no se preocupe.»", "Dejé una nota para que mi compañero no se preocupara.", "«Para que» exige subjuntivo; con «dejé» en pasado, imperfecto: «se preocupara»."),
      toEs("Corrige: «Volví a casa sin que nadie me vea.»", "Volví a casa sin que nadie me viera.", "«Sin que» exige subjuntivo; con «volví» en pasado, imperfecto: «viera»."),
      toEs("Corrige: «Cuando lleguemos ayer, ya era tarde.»", "Cuando llegamos ayer, ya era tarde.", "«Cuando» con una acción pasada real va en indicativo: «llegamos», no «lleguemos»."),
      toEs("Corrige: «Te llamaré en cuanto llegaré.»", "Te llamaré en cuanto llegue.", "«En cuanto» + acción futura va en subjuntivo, nunca en futuro: «llegue»."),
      ms(
        "¿Qué frases son correctas?",
        ["Lo compré para que lo usaras.", "Lo compro para que lo uses.", "Lo compré para que lo uses mañana… hace un año.", "Lo compré para que lo usabas."],
        [0, 1],
        "Pasado → imperfecto de subjuntivo (lo compré para que lo usaras); presente → presente (lo compro para que lo uses). «Para que lo uses… hace un año» rompe la secuencia y «para que lo usabas» usa indicativo."
      ),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-elige-aunque-matices",
    "Elige y explica: aunque en todos los tiempos",
    "Aunque sabe, aunque sepa, aunque supiera: hecho, hipótesis e hipótesis lejana.",
    "6 min",
    [
      sec(
        "Tres grados",
        "Aunque llueve (es un hecho). Aunque llueva (puede pasar; da igual). Aunque lloviera (muy improbable o contrario a la realidad; da igual). La principal no cambia: saldré / saldría.",
        [
          ["Aunque me lo pidiera de rodillas, no volvería.", "Even if he begged me, I wouldn't go back."],
        ],
        [
          mc(
            "Es imposible que te toque la lotería. «Aunque me ___ la lotería, seguiría trabajando.»",
            ["tocara", "toca", "toque", "tocó"],
            0,
            "Una hipótesis muy lejana (imposible que te toque) usa aunque + imperfecto de subjuntivo: aunque me tocara. «Toca» sería un hecho, «toque» una posibilidad real y «tocó» es pasado."
          ),
        ]
      ),
    ],
    [
      mc("Está lloviendo ahora. «Aunque ___, voy a correr.»", ["llueve", "llueva", "lloviera", "llovió"], 0, "Está lloviendo ahora: es un hecho, así que aunque + indicativo, llueve. «Llueva» sería posible, «lloviera» hipotético y «llovió» pasado."),
      mc("Quizá llueva mañana. «Aunque ___, iremos de excursión.»", ["llueva", "llueve", "llovió", "llovía"], 0, "Quizá llueva mañana: es posible, así que aunque + presente de subjuntivo, llueva. «Llueve» sería un hecho, y «llovió» y «llovía» son pasado."),
      fb("Elige.", "Aunque ___ millonario, no me compraría un yate. (ser, yo — no lo soy)", "fuera", "Contrario a la realidad."),
      fb("Elige.", "Aunque ___ poco dinero, vivimos bien. (tener, nosotros — es un hecho)", "tenemos", "Hecho."),
      fb("Elige.", "Aunque ___ el examen, tendrás que repetir las prácticas. (aprobar, tú — aún no se sabe)", "apruebes", "Posible."),
      fb("Elige.", "Aunque ___ veinte años menos, no volvería a esa empresa. (tener, yo)", "tuviera", "Imposible → imperfecto de subjuntivo."),
      toEs("Even if you asked me a thousand times, I wouldn't tell you.", "Aunque me lo preguntaras mil veces, no te lo diría.", "«Aunque» + imperfecto de subjuntivo presenta una hipótesis poco probable.", ["Aunque me lo pidieras mil veces, no te lo diría.", "Aunque me lo preguntases mil veces, no te lo diría."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-frase-a-frase-instrucciones",
    "Frase a frase: instrucciones para el cuidador",
    "Construye un mensaje largo con varias conjunciones temporales.",
    "6 min",
    [
      sec(
        "Para el que cuida a tu perro",
        "Cuando llegues, dale de comer. Antes de que anochezca, sácalo a pasear. En cuanto vuelvas, cierra la puerta con llave. Si pasa algo, llámame para que vaya a casa.",
        [
          ["Antes de que anochezca, sácalo a pasear.", "Before it gets dark, take him for a walk."],
        ],
        [
          fb("Paso 1.", "Cuando ___, dale de comer. (llegar, tú)", "llegues", "Futuro."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Antes de que ___, sácalo a pasear. (anochecer)", "anochezca", "Antes de que."),
      fb("Paso 3.", "En cuanto ___, cierra la puerta con llave. (volver, tú)", "vuelvas", "En cuanto."),
      fb("Paso 4.", "Déjale la radio puesta para que no ___ solo. (sentirse)", "se sienta", "Para que."),
      fb("Paso 5.", "No le des galletas aunque te ___ con esos ojos. (mirar)", "mire", "Aunque + hipótesis."),
      fb("Paso 6.", "Quédate con él hasta que se ___. (dormir)", "duerma", "Hasta que."),
      toEs("Walk him before it rains.", "Sácalo a pasear antes de que llueva.", "«Antes de que» exige siempre subjuntivo: «llueva».", ["Pásealo antes de que llueva.", "Sácalo antes de que llueva."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-habla-de-ti-recuerdos-cuando",
    "Habla de ti: cuando era pequeño / cuando sea mayor",
    "El mismo cuando para tu pasado y para tu futuro.",
    "6 min",
    [
      sec(
        "Dos direcciones",
        "Cuando era pequeña, quería ser astronauta (pasado → indicativo). Cuando sea mayor, quiero vivir en el campo (futuro → subjuntivo). Mis padres me compraban libros para que leyera (pasado → imperfecto de subjuntivo).",
        [
          ["Cuando era pequeña, quería ser astronauta.", "When I was little, I wanted to be an astronaut."],
          ["Mis padres me compraban libros para que leyera.", "My parents bought me books so that I would read."],
        ],
        [
          fb("Tu vida.", "Cuando ___ pequeño, vivía con mis abuelos. (ser)", "era", "Pasado."),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Cuando ___ mayor, quiero tener un huerto. (ser)", "sea", "Futuro."),
      fb("Tu vida.", "Mi abuela me contaba cuentos para que me ___. (dormir)", "durmiera", "Pasado → imperfecto de subjuntivo."),
      fb("Tu vida.", "Cuando ___ el colegio, me fui a estudiar fuera. (terminar)", "terminé", "Pasado."),
      fb("Tu vida.", "Cuando ___ la carrera, me tomaré un año libre. (terminar)", "termine", "Futuro."),
      fb("Tu vida.", "Nunca salía de casa sin que mi madre me ___ un beso. (dar)", "diera", "Sin que + pasado."),
      toEs("When I have children, I'll teach them Spanish.", "Cuando tenga hijos, les enseñaré español.", "«Cuando» + acción futura exige subjuntivo: «tenga».", ["Cuando tenga hijos, les voy a enseñar español."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-pares-por-si-en-caso",
    "Pares mínimos: por si / en caso de que",
    "Dos maneras de prevenir: por si + indicativo, en caso de que + subjuntivo.",
    "5 min",
    [
      sec(
        "Por si acaso",
        "Por si + indicativo: Llévate el abrigo por si hace frío. En caso de que + subjuntivo: Llévate el abrigo en caso de que haga frío. El significado es casi el mismo; cambia el modo.",
        [
          ["Llévate dinero por si lo necesitas.", "Take money in case you need it."],
          ["Llévate dinero en caso de que lo necesites.", "Take money in case you need it."],
        ],
        [
          fb("Par.", "Compra pan por si ___ visita. (venir)", "viene", "Por si + indicativo."),
        ]
      ),
    ],
    [
      fb("Par.", "Compra pan en caso de que ___ visita. (venir)", "venga", "En caso de que + subjuntivo."),
      fb("Par.", "Te dejo mi número por si ___ algún problema. (tener, tú)", "tienes", "Por si."),
      fb("Par.", "Te dejo mi número en caso de que ___ algún problema. (tener, tú)", "tengas", "En caso de que."),
      fb("Par.", "Guarda el recibo por si ___ devolverlo. (querer, tú)", "quieres", "Por si."),
      fb("Par.", "Guarda el recibo en caso de que ___ devolverlo. (querer, tú)", "quieras", "En caso de que."),
      mc(
        "«Lleva el cargador ___ se acaba la batería.»",
        ["por si", "en caso de que", "para que", "antes de que"],
        0,
        "«Por si» va con indicativo: por si se acaba la batería. «En caso de que» pediría subjuntivo (se acabe), «para que» expresa finalidad y «antes de que» también pediría subjuntivo."
      ),
      toEs("I'll leave the door open in case you arrive late.", "Dejaré la puerta abierta por si llegas tarde.", "«Por si» (en caso de que) va con indicativo: «por si llegas».", ["Dejaré la puerta abierta en caso de que llegues tarde.", "Dejo la puerta abierta por si llegas tarde."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-mezcla-adverbiales-trabajo",
    "Práctica mezclada: el correo del jefe",
    "Plazos, condiciones y finalidades en un correo de trabajo.",
    "7 min",
    [
      sec(
        "El correo",
        "«Equipo: en cuanto reciban los datos, preparen el informe. Necesito que lo tengan antes de que empiece la reunión. Aunque haya problemas técnicos, no retrasen la entrega. Les mando la plantilla para que no pierdan tiempo. La última vez, cuando entregaron tarde, perdimos el cliente.»",
        [
          ["Les mando la plantilla para que no pierdan tiempo.", "I'm sending you the template so you don't waste time."],
        ],
        [
          fb("Completa.", "En cuanto ___ los datos, preparen el informe. (recibir, ustedes)", "reciban", "Futuro."),
        ]
      ),
    ],
    [
      fb("Completa.", "…antes de que ___ la reunión. (empezar)", "empiece", "Antes de que."),
      fb("Completa.", "Aunque ___ problemas técnicos, no retrasen la entrega. (haber)", "haya", "Hipótesis."),
      fb("Completa.", "Les mando la plantilla para que no ___ tiempo. (perder)", "pierdan", "Para que; e → ie."),
      fb("Completa.", "La última vez, cuando ___ tarde, perdimos el cliente. (entregar, ustedes)", "entregaron", "Pasado."),
      fb("Completa.", "El mes pasado les pedí los datos para que ___ tiempo de revisarlos. (tener)", "tuvieran", "Pasado → imperfecto de subjuntivo."),
      mc(
        "«No envíen nada a menos que yo lo ___.»",
        ["apruebe", "apruebo", "aprobaré", "aprobé"],
        0,
        "«A menos que» siempre pide subjuntivo: a menos que yo lo apruebe. «Apruebo», «aprobaré» y «aprobé» son indicativo."
      ),
      toEs("Call me when you finish, even if it's late.", "Llámame cuando termines, aunque sea tarde.", "«Cuando» con valor futuro y «aunque» con una posibilidad van en subjuntivo: «termines», «sea».", ["Llámame cuando acabes, aunque sea tarde."]),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-ronda-adverbiales-tiempos",
    "Ronda rápida: presente o pasado en la adverbial",
    "Mira el verbo principal y ajusta el subjuntivo.",
    "5 min",
    [
      sec(
        "Ajuste",
        "Principal en presente/futuro/mandato → presente de subjuntivo. Principal en pasado/condicional → imperfecto de subjuntivo.",
        [
          ["Lo repetiré para que lo recuerdes.", "I'll repeat it so you remember."],
          ["Lo repetí para que lo recordaras.", "I repeated it so you'd remember."],
        ],
        [
          fb("Rápido.", "Lo apunté para que no se me ___. (olvidar)", "olvidara", "Pasado."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Lo apunto para que no se me ___. (olvidar)", "olvide", "Presente."),
      fb("Rápido.", "Nos fuimos antes de que ___ la tormenta. (empezar)", "empezara", "Pasado."),
      fb("Rápido.", "Vámonos antes de que ___ la tormenta. (empezar)", "empiece", "Mandato."),
      fb("Rápido.", "Me prestó el coche con tal de que se lo ___ lleno. (devolver, yo)", "devolviera", "Pasado."),
      fb("Rápido.", "Te presto el coche con tal de que me lo ___ lleno. (devolver, tú)", "devuelvas", "Presente."),
      fb("Rápido.", "Saldría contigo a menos que ___ que trabajar. (tener, yo)", "tuviera", "Condicional → imperfecto de subjuntivo."),
      fb("Rápido.", "Saldré contigo a menos que ___ que trabajar. (tener, yo)", "tenga", "Futuro."),
      mc(
        "«Entró sin que ___ nadie.»",
        ["lo oyera", "lo oiga", "lo oyó", "lo oía"],
        0,
        "«Sin que» siempre pide subjuntivo; con el verbo en pasado (entró), imperfecto: sin que lo oyera. «Oiga» iría con presente, y «oyó» y «oía» son indicativo."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-1",
    "b2d-patron-ellos-ron-ra",
    "Práctica de patrones: ellos del indefinido → -ra",
    "Una sola regla de formación, repetida con verbos regulares e irregulares.",
    "6 min",
    [
      sec(
        "La regla",
        "Ellos del indefinido, quita -ron, añade -ra: hablaron → hablara; comieron → comiera; tuvieron → tuviera; fueron → fuera; dijeron → dijera. Nosotros lleva tilde: habláramos, tuviéramos.",
        [
          ["Quería que vinieras.", "I wanted you to come."],
          ["Nos pidió que fuéramos puntuales.", "He asked us to be on time."],
        ],
        [
          fb("Forma.", "pusieron → que yo ___", "pusiera", "El imperfecto de subjuntivo sale de la 3.ª plural del pretérito: pusieron → pusie- + ra."),
        ]
      ),
    ],
    [
      fb("Forma.", "hicieron → que tú ___", "hicieras", "Hicieron → hicie- + ras: hicieras."),
      fb("Forma.", "estuvieron → que ella ___", "estuviera", "Estuvieron → estuvie- + ra: estuviera."),
      fb("Forma.", "pudieron → que nosotros ___", "pudiéramos", "Pudieron → pudié- + ramos; en nosotros se añade tilde: pudiéramos."),
      fb("Forma.", "trajeron → que ellos ___", "trajeran", "Trajeron → traje- + ran: trajeran (sin i, porque el pretérito es trajeron)."),
      fb("Forma.", "durmieron → que vosotros ___", "durmierais", "Durmieron (con o→u) → durmie- + rais: durmierais."),
      fb("Forma.", "leyeron → que usted ___", "leyera", "Leyeron → leye- + ra: leyera (la y se mantiene)."),
      fb("Forma.", "supieron → que yo ___", "supiera", "Supieron → supie- + ra: supiera."),
      mt(
        "Relaciona el indefinido (ellos) con el imperfecto de subjuntivo (yo).",
        [
          ["quisieron", "quisiera"],
          ["vinieron", "viniera"],
          ["dieron", "diera"],
          ["condujeron", "condujera"],
        ],
        "Quita -ron, añade -ra."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-1",
    "b2d-pares-quiero-queria",
    "Pares mínimos: quiero que vengas / quería que vinieras",
    "El verbo principal en pasado arrastra el subjuntivo al imperfecto.",
    "6 min",
    [
      sec(
        "La secuencia de tiempos",
        "Presente, futuro o mandato → presente de subjuntivo: Quiero que vengas. Pasado (indefinido, imperfecto) o condicional → imperfecto de subjuntivo: Quería que vinieras. Me pidió que viniera.",
        [
          ["Te pido que me ayudes.", "I'm asking you to help me."],
          ["Te pedí que me ayudaras.", "I asked you to help me."],
        ],
        [
          fb("Par.", "Espero que ___ bien. (estar, tú) → Esperaba que estuvieras bien.", "estés", "Con «espero» (presente), la subordinada va en presente de subjuntivo: estés; con «esperaba», estuvieras."),
        ]
      ),
    ],
    [
      fb("Par A.", "Mis padres quieren que ___ Derecho. (estudiar, yo)", "estudie", "Presente."),
      fb("Par B.", "Mis padres querían que ___ Derecho. (estudiar, yo)", "estudiara", "Pasado."),
      fb("Par A.", "El médico me recomienda que ___ menos sal. (tomar)", "tome", "Presente."),
      fb("Par B.", "El médico me recomendó que ___ menos sal. (tomar)", "tomara", "Pasado."),
      fb("Par A.", "Me alegra que ___ a verme. (venir, tú)", "vengas", "Presente."),
      fb("Par B.", "Me alegró que ___ a verme. (venir, tú)", "vinieras", "Pasado."),
      mc(
        "«No creía que ___ tan tarde.»",
        ["fuera", "sea", "es", "era"],
        0,
        "«No creía que» (pasado + duda) pide imperfecto de subjuntivo: fuera. «Sea» iría con «no creo», y «es» y «era» son indicativo."
      ),
      toEs("She asked me to close the door.", "Me pidió que cerrara la puerta.", "«Pedir que» exige subjuntivo; con «pidió» en pasado, imperfecto: «cerrara».", ["Me pidió que cerrase la puerta."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-1",
    "b2d-circuito-irregulares-imperfecto",
    "Circuito: los irregulares del imperfecto de subjuntivo",
    "Si el indefinido es irregular, el imperfecto de subjuntivo también.",
    "6 min",
    [
      sec(
        "Heredan la raíz",
        "u: tuviera, estuviera, pudiera, supiera, pusiera, hubiera. i: hiciera, quisiera, viniera. j: dijera, trajera, condujera. y: leyera, oyera, construyera. ser/ir: fuera.",
        [
          ["Ojalá tuviera más tiempo.", "I wish I had more time."],
        ],
        [
          fb("Estación u.", "Me sorprendió que ___ la respuesta. (saber, él)", "supiera", "Supieron → supiera."),
        ]
      ),
    ],
    [
      fb("Estación u.", "No había nadie que ___ ayudarnos. (poder)", "pudiera", "Pudieron."),
      fb("Estación u.", "Le pedí que ___ la mesa. (poner)", "pusiera", "Pusieron."),
      fb("Estación i.", "Queríamos que ___ buen tiempo. (hacer)", "hiciera", "Hicieron."),
      fb("Estación i.", "Me extrañó que no ___ venir. (querer, ella)", "quisiera", "Quisieron."),
      fb("Estación j.", "Nos pidieron que ___ algo de postre. (traer, nosotros)", "trajéramos", "Trajeron; tilde."),
      fb("Estación j.", "Era importante que nadie ___ nada. (decir)", "dijera", "Dijeron."),
      fb("Estación y.", "Me alegró que ___ mi libro. (leer, ellos)", "leyeran", "Leyeron."),
      mc(
        "«Era necesario que ___ más paciente.» (ser, tú)",
        ["fueras", "fuiste", "seas", "eras"],
        0,
        "«Era necesario» está en pasado: imperfecto de subjuntivo, formado desde fueron: fueras. «Fuiste» y «eras» son indicativo, y «seas» iría con «es necesario»."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-1",
    "b2d-cadena-presente-pasado",
    "Cadena de transformaciones: cuenta la misma escena en pasado",
    "Pasa frases completas del presente al pasado respetando la secuencia.",
    "6 min",
    [
      sec(
        "Mover todo al pasado",
        "Mi jefe quiere que llegue temprano. → Mi jefe quería que llegara temprano. Es importante que lo sepas. → Era importante que lo supieras. Dos verbos cambian: el principal y el subjuntivo.",
        [
          ["Es necesario que hablemos. → Era necesario que habláramos.", "It's necessary that we talk. → It was necessary that we talked."],
        ],
        [
          fb("Al pasado.", "Mi jefe quiere que llegue temprano. → Mi jefe quería que ___ temprano.", "llegara", "Con el verbo principal en pasado (quería), imperfecto de subjuntivo: llegaron → llegara."),
        ]
      ),
    ],
    [
      fb("Al pasado.", "Es importante que lo sepas. → Era importante que lo ___.", "supieras", "Con «era importante» (pasado), imperfecto de subjuntivo: supieron → supieras."),
      fb("Al pasado.", "Dudo que tengan razón. → Dudaba que ___ razón.", "tuvieran", "Con «dudaba» (pasado), imperfecto de subjuntivo: tuvieron → tuvieran."),
      fb("Al pasado.", "Me molesta que griten. → Me molestaba que ___.", "gritaran", "Con «me molestaba» (pasado), imperfecto de subjuntivo: gritaron → gritaran."),
      fb("Al pasado.", "Te aconsejo que descanses. → Te aconsejé que ___.", "descansaras", "Con «aconsejé» (pasado), imperfecto de subjuntivo: descansaron → descansaras."),
      fb("Al pasado.", "No hay nadie que lo entienda. → No había nadie que lo ___.", "entendiera", "Antecedente inexistente en pasado (no había nadie) → imperfecto de subjuntivo: entendiera."),
      fb("Al pasado.", "No creo que vuelva. → No creía que ___.", "volviera", "Con «no creía» (pasado), imperfecto de subjuntivo: volvieron → volviera."),
      toEs("It was important that everyone came.", "Era importante que todos vinieran.", "«Era importante que» exige subjuntivo en imperfecto: «vinieran».", ["Era importante que vinieran todos.", "Era importante que todo el mundo viniera."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-1",
    "b2d-cuento-sueno-infancia",
    "Cuento con huecos: el sueño de Julia",
    "Julia recuerda lo que sus padres querían para ella.",
    "7 min",
    [
      sec(
        "El recuerdo",
        "«De niña quería ser bailarina, pero mis padres preferían que estudiara Medicina. Mi madre me decía que era importante que tuviera un trabajo estable. Mi abuela, en cambio, me pedía que nunca dejara de bailar. Me alegraba mucho que ella me apoyara.»",
        [
          ["Mis padres preferían que estudiara Medicina.", "My parents preferred that I studied medicine."],
        ],
        [
          fb("Completa.", "Mis padres preferían que ___ Medicina. (estudiar, yo)", "estudiara", "Pasado."),
        ]
      ),
    ],
    [
      fb("Completa.", "Era importante que ___ un trabajo estable. (tener, yo)", "tuviera", "Pasado."),
      fb("Completa.", "Mi abuela me pedía que nunca ___ de bailar. (dejar)", "dejara", "Pasado."),
      fb("Completa.", "Me alegraba mucho que ella me ___. (apoyar)", "apoyara", "Pasado."),
      fb("Completa.", "Mi padre no creía que el baile ___ una profesión seria. (ser)", "fuera", "Pasado + duda."),
      fb("Completa.", "Hoy mis padres se alegran de que ___ bailarina. (ser, yo)", "sea", "Presente."),
      mc(
        "«Mi profesora de ballet insistía en que ___ todos los días.»",
        ["practicara", "practique", "practicaba", "practicaré"],
        0,
        "«Insistía en que» (pasado) pide imperfecto de subjuntivo: practicara. «Practique» iría con presente, «practicaba» es indicativo y «practicaré» es futuro."
      ),
      toEs("My grandmother asked me never to stop dancing.", "Mi abuela me pidió que nunca dejara de bailar.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «dejara».", ["Mi abuela me pidió que no dejara nunca de bailar.", "Mi abuela me pidió que nunca dejase de bailar."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-1",
    "b2d-ronda-ojala-impersonales-pasado",
    "Ronda rápida: era necesario que, ojalá + imperfecto",
    "Expresiones impersonales y ojalá con la secuencia en pasado.",
    "5 min",
    [
      sec(
        "Impersonales en pasado",
        "Es necesario que vengas → Era necesario que vinieras. Fue una pena que no pudieras venir. Ojalá + imperfecto de subjuntivo expresa un deseo poco probable o imposible en el presente: Ojalá tuviera un coche (no lo tengo).",
        [
          ["Fue una pena que no pudieras venir.", "It was a shame you couldn't come."],
          ["Ojalá supiera cocinar.", "I wish I knew how to cook."],
        ],
        [
          fb("Rápido.", "Fue una pena que ___ el partido. (perder, nosotros)", "perdiéramos", "Tilde en nosotros."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Era lógico que ___ cansados. (estar, ellos)", "estuvieran", "Pasado."),
      fb("Rápido.", "Fue raro que no ___ nadie. (llamar)", "llamara", "Pasado."),
      fb("Rápido.", "Ojalá ___ más alto. (ser, yo — no lo soy)", "fuera", "Deseo imposible."),
      fb("Rápido.", "Ojalá ___ hablar ruso. (saber, yo — no sé)", "supiera", "Deseo improbable."),
      fb("Rápido.", "Ojalá ___ bien mañana. (salir, todo — es posible)", "salga", "Deseo posible → presente."),
      fb("Rápido.", "Sería mejor que ___ temprano. (salir, nosotros)", "saliéramos", "Condicional → imperfecto de subjuntivo."),
      fb("Rápido.", "Estaría bien que me ___. (llamar, tú)", "llamaras", "Condicional."),
      mc(
        "«Ojalá ___ aquí ahora.» (estar, tú — estás lejos)",
        ["estuvieras", "estés", "estás", "estabas"],
        0,
        "Un deseo imposible en el presente (estás lejos) va con ojalá + imperfecto de subjuntivo: estuvieras. «Estés» sería un deseo posible, y «estás» y «estabas» son indicativo."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2d-elige-ojala-presente-imperfecto",
    "Elige y explica: ojalá venga / ojalá viniera",
    "Posible o casi imposible: el tiempo del subjuntivo cambia el mensaje.",
    "6 min",
    [
      sec(
        "Grado de posibilidad",
        "Ojalá + presente: deseo posible (Ojalá venga Ana: quizá venga). Ojalá + imperfecto: deseo poco probable o imposible ahora (Ojalá viniera Ana: sé que no vendrá).",
        [
          ["Ojalá haga sol mañana.", "I hope it's sunny tomorrow."],
          ["Ojalá hiciera sol ahora, pero está diluviando.", "I wish it were sunny now, but it's pouring."],
        ],
        [
          mc(
            "Tienes una entrevista mañana: «Ojalá me ___.»",
            ["contraten", "contrataran", "contratan", "contrataron"],
            0,
            "La entrevista es mañana y es posible que te contraten: ojalá + presente de subjuntivo, contraten. «Contrataran» lo haría sonar improbable, y «contratan» y «contrataron» son indicativo."
          ),
        ]
      ),
    ],
    [
      mc("Vives en un piso minúsculo: «Ojalá ___ un jardín.»", ["tuviera", "tenga", "tengo", "tenía"], 0, "Tener un jardín en un piso minúsculo es imposible ahora: ojalá + imperfecto de subjuntivo, tuviera. «Tenga» sería un deseo posible, y «tengo» y «tenía» son indicativo."),
      mc("Tu amigo quizá venga a la fiesta: «Ojalá ___.»", ["venga", "viniera", "viene", "vino"], 0, "Es posible que venga: ojalá + presente de subjuntivo, venga. «Viniera» lo haría sonar improbable, y «viene» y «vino» son indicativo."),
      mc("Tu abuelo murió hace años: «Ojalá ___ aquí para verlo.»", ["estuviera", "esté", "está", "estará"], 0, "Es imposible que el abuelo esté aquí: ojalá + imperfecto de subjuntivo, estuviera. «Esté» sería un deseo posible, y «está» y «estará» son indicativo."),
      fb("Elige.", "Ojalá ___ lotería este año. (tocarme — quién sabe)", "me toque", "Posible."),
      fb("Elige.", "Ojalá ___ volar. (poder, yo)", "pudiera", "Imposible."),
      fb("Elige.", "Ojalá no ___ tanto tráfico hoy. (haber — ya estás en el atasco)", "hubiera", "Contrario a la realidad presente."),
      toEs("I wish I lived closer to you.", "Ojalá viviera más cerca de ti.", "«Ojalá» + imperfecto de subjuntivo expresa un deseo irreal en el presente: «viviera».", ["Ojalá viviese más cerca de ti."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2d-corrige-secuencia",
    "Corrige el párrafo: errores de secuencia",
    "Un diario con presentes de subjuntivo donde toca imperfecto (y al revés).",
    "6 min",
    [
      sec(
        "El diario",
        "«Ayer mi jefa me pidió que prepare el informe. Me molestó que no me avise antes. Hoy quiero que mis compañeros me ayudaran. Espero que lo terminemos a tiempo.» Tres errores.",
        [
          ["Ayer mi jefa me pidió que preparara el informe.", "Yesterday my boss asked me to prepare the report."],
        ],
        [
          mc(
            "¿Qué frase del diario está bien?",
            ["Espero que lo terminemos a tiempo.", "Me pidió que prepare el informe.", "Me molestó que no me avise.", "Quiero que me ayudaran."],
            0,
            "Presente + presente de subjuntivo: espero que lo terminemos. «Me pidió que prepare» y «Me molestó que no me avise» necesitan imperfecto (preparara, avisara), y «Quiero que me ayudaran» necesita presente (ayuden)."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Ayer mi jefa me pidió que prepare el informe.»", "Ayer mi jefa me pidió que preparara el informe.", "Con «pidió» en pasado, el subjuntivo va en imperfecto: «preparara», no «prepare»."),
      toEs("Corrige: «Me molestó que no me avise antes.»", "Me molestó que no me avisara antes.", "Con «molestó» en pasado, el subjuntivo va en imperfecto: «avisara», no «avise»."),
      toEs("Corrige: «Hoy quiero que mis compañeros me ayudaran.»", "Hoy quiero que mis compañeros me ayuden.", "Con «quiero» en presente, el subjuntivo va en presente: «ayuden», no «ayudaran»."),
      toEs("Corrige: «Era importante que todos vengan.»", "Era importante que todos vinieran.", "Con «era importante» en pasado, el subjuntivo va en imperfecto: «vinieran», no «vengan»."),
      toEs("Corrige: «Te recomendé que lees ese libro.»", "Te recomendé que leyeras ese libro.", "«Recomendar que» exige subjuntivo, y en pasado imperfecto: «leyeras», no «lees»."),
      ms(
        "¿Qué frases respetan la secuencia?",
        ["Le dije que se callara.", "Le digo que se calle.", "Le dije que se calle.", "Le digo que se callara."],
        [0, 1],
        "La secuencia de tiempos: pasado → imperfecto de subjuntivo (le dije que se callara); presente → presente (le digo que se calle). «Le dije que se calle» y «Le digo que se callara» mezclan los tiempos."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2d-habla-de-ti-normas-infancia",
    "Habla de ti: las normas de tu infancia",
    "Cuenta qué te pedían, prohibían y permitían tus padres.",
    "6 min",
    [
      sec(
        "Las normas",
        "Mis padres no me dejaban que viera la tele entre semana. Me pedían que ordenara mi cuarto. Mi madre prefería que jugara fuera. Les parecía importante que cenáramos juntos.",
        [
          ["Me pedían que ordenara mi cuarto.", "They asked me to tidy my room."],
        ],
        [
          fb("Tu infancia.", "Mis padres no me dejaban que ___ la tele entre semana. (ver)", "viera", "Vieron → viera."),
        ]
      ),
    ],
    [
      fb("Tu infancia.", "Me pedían que ___ mi cuarto. (ordenar)", "ordenara", "Pasado."),
      fb("Tu infancia.", "Mi madre prefería que ___ fuera. (jugar)", "jugara", "Pasado."),
      fb("Tu infancia.", "Les parecía importante que ___ juntos. (cenar, nosotros)", "cenáramos", "Tilde."),
      fb("Tu infancia.", "Me prohibían que ___ solo al parque. (ir)", "fuera", "Ir → fuera."),
      fb("Tu infancia.", "Mi padre quería que ___ un instrumento. (aprender, yo)", "aprendiera", "Pasado."),
      toEs("My parents didn't let me go out at night.", "Mis padres no me dejaban que saliera por la noche.", "«Dejar que» exige subjuntivo; en pasado, imperfecto: «saliera».", ["Mis padres no me dejaban salir por la noche.", "Mis padres no me permitían que saliera de noche."]),
      toEs("They wanted me to be happy.", "Querían que fuera feliz.", "«Querer que» con otro sujeto exige subjuntivo; en pasado, imperfecto: «fuera».", ["Ellos querían que yo fuera feliz.", "Querían que fuese feliz."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2d-dictado-imperfecto-subjuntivo",
    "Dictado: el imperfecto de subjuntivo en contexto",
    "Frases reales con quería que, me pidió que, era mejor que.",
    "5 min",
    [
      sec(
        "Escucha la secuencia",
        "Busca el verbo principal en pasado o en condicional y la forma en -ra que lo acompaña.",
        [
          ["Me pidió que no se lo contara a nadie.", "She asked me not to tell anyone."],
        ],
        [
          wo("Queríamos que nuestros hijos aprendieran idiomas.", "Pasado.", "We wanted our children to learn languages."),
        ]
      ),
    ],
    [
      wo("Sería mejor que habláramos mañana.", "Condicional.", "It would be better if we talked tomorrow."),
      wo("Me sorprendió que nadie supiera la respuesta.", "Pasado.", "It surprised me that nobody knew the answer."),
      wo("El profesor nos pidió que leyéramos el capítulo.", "Pasado.", "The teacher asked us to read the chapter."),
      wo("No era necesario que vinieras tan temprano.", "Pasado.", "It wasn't necessary for you to come so early."),
      toEs("I would like you to come with me.", "Me gustaría que vinieras conmigo.", "Tras «me gustaría que», la subordinada va en imperfecto de subjuntivo: «vinieras».", ["Me gustaría que vinieses conmigo."]),
      toEs("It surprised us that the shop was closed.", "Nos sorprendió que la tienda estuviera cerrada.", "Una reacción emocional en pasado («nos sorprendió que») exige imperfecto de subjuntivo.", ["Nos sorprendió que la tienda estuviese cerrada."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2d-preguntas-que-te-dijo",
    "Preguntas y respuestas: ¿qué te pidió?",
    "Cuenta lo que otros te pidieron, aconsejaron o prohibieron.",
    "6 min",
    [
      sec(
        "Peticiones en pasado",
        "—¿Qué te pidió el médico? —Me pidió que dejara de fumar. —¿Qué os aconsejó el guía? —Nos aconsejó que lleváramos agua. Verbo de influencia en pasado → que + imperfecto de subjuntivo.",
        [
          ["Nos aconsejó que lleváramos agua.", "He advised us to bring water."],
        ],
        [
          fb("Responde.", "—¿Qué te pidió el médico? —Me pidió que ___ de fumar. (dejar)", "dejara", "Pasado."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Qué os aconsejó el guía? —Que ___ agua. (llevar, nosotros)", "lleváramos", "Pasado; tilde."),
      fb("Responde.", "—¿Qué os prohibió el profesor? —Que ___ el móvil en clase. (usar, nosotros)", "usáramos", "Pasado."),
      fb("Responde.", "—¿Qué te sugirió tu jefe? —Que ___ unos días libres. (tomarse, yo)", "me tomara", "Pasado."),
      fb("Responde.", "—¿Qué les exigió el casero? —Que ___ el alquiler antes del día cinco. (pagar, ellos)", "pagaran", "Pasado."),
      fb("Responde.", "—¿Qué te recomendó la abogada? —Que no ___ nada sin leerlo. (firmar)", "firmara", "Pasado."),
      mc(
        "—¿Qué te dijo tu madre? —«Me dijo que ___ la chaqueta.»",
        ["me pusiera", "me ponga", "me puse", "me pongo"],
        0,
        "Aquí decir transmite una orden en pasado, así que pide imperfecto de subjuntivo: que me pusiera. «Ponga» iría con presente, «puse» cambia la orden en un hecho y «pongo» es presente."
      ),
      toEs("The doctor told me to rest.", "El médico me dijo que descansara.", "«Decir que» con valor de orden exige subjuntivo: «descansara»; si informa, indicativo.", ["La médica me dijo que descansara.", "El médico me dijo que descansase."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2d-mezcla-secuencia-cortesia",
    "Práctica mezclada: quisiera, me gustaría que, sería mejor que",
    "El imperfecto de subjuntivo en fórmulas de cortesía y sugerencias.",
    "6 min",
    [
      sec(
        "Cortesía",
        "Quisiera (más cortés que quiero): Quisiera hablar con el director. Me gustaría que + imperfecto de subjuntivo: Me gustaría que me llamaras. Sería mejor que + imperfecto de subjuntivo: Sería mejor que lo habláramos.",
        [
          ["Quisiera reservar una mesa para dos.", "I'd like to book a table for two."],
          ["Me gustaría que me lo explicaras.", "I'd like you to explain it to me."],
        ],
        [
          fb("Suaviza.", "Quiero un café. → ___ un café, por favor.", "Quisiera", "«Quisiera» (imperfecto de subjuntivo de querer) es la fórmula más cortés para pedir algo."),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Llámame. → Me gustaría que me ___.", "llamaras", "Tras un condicional de deseo (me gustaría que…) se usa imperfecto de subjuntivo: llamaras."),
      fb("Suaviza.", "Hablemos. → Sería mejor que ___.", "habláramos", "«Sería mejor que» (condicional) pide imperfecto de subjuntivo; en nosotros lleva tilde: habláramos."),
      fb("Suaviza.", "Venid a la reunión. → Estaría bien que ___ a la reunión.", "vinierais", "«Estaría bien que» pide imperfecto de subjuntivo, forma de vosotros: vinierais."),
      fb("Suaviza.", "Revise el contrato. → Le agradecería que ___ el contrato.", "revisara", "«Le agradecería que» (usted) pide imperfecto de subjuntivo: revisara."),
      fb("Suaviza.", "Quiero pedirle un favor. → ___ pedirle un favor.", "Quisiera", "«Quisiera» + infinitivo suaviza mucho la petición: quisiera pedirle un favor."),
      mc(
        "«Me encantaría que ___ a mi boda.»",
        ["vinierais", "vengáis", "venís", "vinisteis"],
        0,
        "Un condicional de deseo (me encantaría) pide imperfecto de subjuntivo: vinierais. «Vengáis» iría con «me encanta», «venís» es indicativo y «vinisteis» es pasado."
      ),
      toEs("I'd be grateful if you sent me the invoice.", "Le agradecería que me enviara la factura.", "Tras «le agradecería que», la subordinada va en imperfecto de subjuntivo: «enviara».", ["Te agradecería que me mandaras la factura.", "Le agradecería que me mandara la factura."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-linea-secuencia-completa",
    "Línea del tiempo: la secuencia en cuatro momentos",
    "El mismo deseo contado en presente, pasado, futuro y condicional.",
    "6 min",
    [
      sec(
        "Cuatro principales",
        "Quiero que vengas (presente). Querré que vengas (futuro). Quería / quise que vinieras (pasado). Querría que vinieras (condicional). Presente y futuro → presente de subjuntivo; pasado y condicional → imperfecto.",
        [
          ["Querría que vinieras a cenar.", "I'd like you to come to dinner."],
        ],
        [
          fb("Futuro.", "Te pediré que me ___ con la mudanza. (ayudar)", "ayudes", "Futuro → presente de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Presente.", "Te pido que me ___ con la mudanza. (ayudar)", "ayudes", "Presente."),
      fb("Pasado.", "Te pedí que me ___ con la mudanza. (ayudar)", "ayudaras", "Pasado."),
      fb("Condicional.", "Te pediría que me ___ con la mudanza. (ayudar)", "ayudaras", "Condicional."),
      fb("Presente.", "Es probable que el vuelo se ___. (retrasar)", "retrase", "Presente."),
      fb("Pasado.", "Era probable que el vuelo se ___. (retrasar)", "retrasara", "Pasado."),
      fb("Condicional.", "Sería raro que el vuelo se ___. (retrasar)", "retrasara", "Condicional."),
      mc(
        "«Nunca he querido que ___ por mí.» (sufrir, tú)",
        ["sufras", "sufrieras", "sufres", "sufriste"],
        0,
        "El pretérito perfecto se liga al presente, así que normalmente lleva presente de subjuntivo: nunca he querido que sufras. «Sufrieras» es posible pero menos habitual aquí, y «sufres» y «sufriste» son indicativo."
      ),
      toEs("I'd prefer that you didn't smoke here.", "Preferiría que no fumaras aquí.", "Tras un condicional («preferiría»), la subordinada va en imperfecto de subjuntivo: «fumaras».", ["Preferiría que no fumases aquí.", "Preferiría que no fumara aquí."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-ronda-formas-ra",
    "Ronda rápida: imperfecto de subjuntivo sin pausa",
    "Doce formas: regulares, irregulares, con tilde y con -y-.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Ellos del indefinido − ron + ra. Nosotros con tilde (fuéramos, tuviéramos). -y- en leyera, oyera, cayera, construyera.",
        [
          ["Si fuéramos más, sería más fácil.", "If there were more of us, it would be easier."],
        ],
        [
          fb("Rápido.", "caer → que yo ___", "cayera", "El imperfecto de subjuntivo sale de la 3.ª persona plural del indefinido: «cayeron» → «cayera»."),
        ]
      ),
    ],
    [
      fb("Rápido.", "construir → que ellos ___", "construyeran", "Se forma desde «construyeron»: se quita «-ron» y se añade «-ran» → «construyeran»."),
      fb("Rápido.", "pedir → que tú ___", "pidieras", "Se forma desde «pidieron», con el cambio e → i: «pidieras»."),
      fb("Rápido.", "sentir → que nosotros ___", "sintiéramos", "Se forma desde «sintieron»; la forma de «nosotros» lleva tilde: «sintiéramos»."),
      fb("Rápido.", "morir → que él ___", "muriera", "Se forma desde «murieron», con el cambio o → u: «muriera»."),
      fb("Rápido.", "andar → que yo ___", "anduviera", "«Andar» tiene indefinido irregular «anduvieron», de ahí «anduviera»."),
      fb("Rápido.", "haber → que ___ (impersonal)", "hubiera", "Desde «hubieron» se forma «hubiera»; como impersonal, siempre en singular."),
      fb("Rápido.", "traducir → que vosotros ___", "tradujerais", "Los verbos en «-ducir» hacen «-dujeron», de ahí «tradujerais»."),
      fb("Rápido.", "ir → que nosotros ___", "fuéramos", "«Ir» y «ser» comparten «fueron»; la forma de «nosotros» lleva tilde: «fuéramos»."),
      mc(
        "«Me pidió que le ___ la verdad.» (decir, yo)",
        ["dijera", "dijiera", "deciera", "diga"],
        0,
        "El imperfecto de subjuntivo sale de dijeron: dijera (sin i). «Dijiera» y «deciera» no existen, y «diga» iría con un verbo principal en presente."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-cuento-carta-abuelo",
    "Cuento con huecos: la carta del abuelo",
    "Un abuelo recuerda las condiciones de su primer trabajo en los años sesenta.",
    "7 min",
    [
      sec(
        "La carta",
        "«En la fábrica, el encargado exigía que llegáramos a las seis. No permitía que habláramos durante el turno. Yo quería que mi hijo estudiara para que no tuviera que trabajar así. Hoy me alegra que mis nietos puedan elegir.»",
        [
          ["El encargado exigía que llegáramos a las seis.", "The foreman demanded that we arrive at six."],
        ],
        [
          fb("Completa.", "El encargado exigía que ___ a las seis. (llegar, nosotros)", "llegáramos", "Pasado; tilde."),
        ]
      ),
    ],
    [
      fb("Completa.", "No permitía que ___ durante el turno. (hablar, nosotros)", "habláramos", "Pasado."),
      fb("Completa.", "Yo quería que mi hijo ___. (estudiar)", "estudiara", "Pasado."),
      fb("Completa.", "…para que no ___ que trabajar así. (tener)", "tuviera", "Para que + pasado."),
      fb("Completa.", "Hoy me alegra que mis nietos ___ elegir. (poder)", "puedan", "Presente."),
      fb("Completa.", "No había nadie que se ___ a protestar. (atrever)", "atreviera", "Pasado + inexistente."),
      mc(
        "«Cuando me jubilé, mis compañeros me pidieron que ___ un discurso.»",
        ["diera", "dé", "di", "daba"],
        0,
        "Con pidieron (pasado), imperfecto de subjuntivo, formado desde dieron: diera. «Dé» iría con presente, y «di» y «daba» son indicativo."
      ),
      toEs("They didn't allow us to rest.", "No permitían que descansáramos.", "«Permitir que» en pasado exige imperfecto de subjuntivo: «descansáramos».", ["No nos permitían descansar.", "No permitían que descansásemos."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-elige-ra-se",
    "Elige y explica: hablara o hablase",
    "Las dos formas del imperfecto de subjuntivo: mismo significado, distinto registro.",
    "5 min",
    [
      sec(
        "Dos terminaciones",
        "hablara = hablase; tuviera = tuviese; fuéramos = fuésemos. La forma -ra es más frecuente en la conversación; la forma -se aparece más en textos escritos y en algunas regiones.",
        [
          ["Me pidió que lo hiciese.", "He asked me to do it."],
        ],
        [
          mc(
            "¿Qué forma equivale a «tuviéramos»?",
            ["tuviésemos", "tuviésamos", "tuvíesemos", "tengamos"],
            0,
            "Las formas en -ra y en -se son equivalentes: tuviéramos = tuviésemos, con tilde en la misma sílaba. «Tuviésamos» y «tuvíesemos» están mal formadas y «tengamos» es presente de subjuntivo."
          ),
        ]
      ),
    ],
    [
      mc("¿Qué forma equivale a «dijera»?", ["dijese", "dijiese", "decise", "diga"], 0, "Dijera = dijese: se cambia -ra por -se sobre la misma raíz (dije-). «Dijiese» y «decise» no existen, y «diga» es presente de subjuntivo."),
      mc("¿Qué forma equivale a «fueran»?", ["fuesen", "fuesan", "fuiesen", "sean"], 0, "Fueran = fuesen: raíz fue- + -sen. «Fuesan» y «fuiesen» no existen, y «sean» es presente de subjuntivo."),
      fb("Transforma.", "Quería que vinieras. → Quería que ___. (forma -se)", "vinieses", "Las formas en «-ra» y «-se» son equivalentes: «vinieras» = «vinieses»."),
      fb("Transforma.", "Era necesario que lo supiéramos. → Era necesario que lo ___. (forma -se)", "supiésemos", "Las formas en «-ra» y «-se» son equivalentes: «supiéramos» = «supiésemos»."),
      fb("Transforma.", "Le rogué que se quedase. → Le rogué que se ___. (forma -ra)", "quedara", "Las formas en «-se» y «-ra» son equivalentes: «quedase» = «quedara»."),
      ms(
        "¿Qué frases son correctas?",
        ["Me pidió que esperase.", "Me pidió que esperara.", "Me pidió que espere ayer.", "Me pidió que esperaría."],
        [0, 1],
        "Las dos formas del imperfecto de subjuntivo (esperase, esperara) son válidas. «Que espere ayer» rompe la secuencia de tiempos y «que esperaría» usa condicional en lugar de subjuntivo."
      ),
      toEs("They asked us to leave.", "Nos pidieron que nos fuéramos.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «nos fuéramos».", ["Nos pidieron que nos fuésemos.", "Nos pidieron que saliéramos."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-cadena-noticia-pasado",
    "Cadena de transformaciones: la noticia de ayer",
    "Un comunicado en presente se convierte en crónica en pasado.",
    "6 min",
    [
      sec(
        "Del comunicado a la crónica",
        "Comunicado: «El ayuntamiento pide que los vecinos no usen el coche.» Crónica: «El ayuntamiento pidió que los vecinos no usaran el coche.»",
        [
          ["El Gobierno pidió que la población no saliera de casa.", "The government asked the population not to leave home."],
        ],
        [
          fb("Crónica.", "El ayuntamiento pide que no se malgaste agua. → El ayuntamiento pidió que no se ___ agua.", "malgastara", "Con «pidió» en pasado, el subjuntivo pasa a imperfecto: «malgastara»."),
        ]
      ),
    ],
    [
      fb("Crónica.", "La policía recomienda que los conductores eviten la A-6. → La policía recomendó que los conductores ___ la A-6.", "evitaran", "Con «recomendó» en pasado, el subjuntivo pasa a imperfecto: «evitaran»."),
      fb("Crónica.", "Es probable que la huelga dure tres días. → Era probable que la huelga ___ tres días.", "durara", "Con «era probable» en pasado, el subjuntivo pasa a imperfecto: «durara»."),
      fb("Crónica.", "Los sindicatos exigen que suban los salarios. → Los sindicatos exigieron que ___ los salarios.", "subieran", "Con «exigieron» en pasado, el subjuntivo pasa a imperfecto: «subieran»."),
      fb("Crónica.", "No hay nadie que acepte el acuerdo. → No había nadie que ___ el acuerdo.", "aceptara", "Con «no había nadie» en pasado, el subjuntivo pasa a imperfecto: «aceptara»."),
      fb("Crónica.", "El alcalde lamenta que haya heridos. → El alcalde lamentó que ___ heridos.", "hubiera", "Con «lamentó» en pasado, «haya» pasa a «hubiera» (impersonal, en singular)."),
      toEs("The government asked citizens to save energy.", "El Gobierno pidió que los ciudadanos ahorraran energía.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «ahorraran».", ["El Gobierno pidió a los ciudadanos que ahorraran energía.", "El gobierno pidió que los ciudadanos ahorrasen energía."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-habla-de-ti-deseos-irreales",
    "Habla de ti: ojalá tuviera, me gustaría que",
    "Deseos sobre tu vida actual que ahora no se cumplen.",
    "6 min",
    [
      sec(
        "Tus deseos imposibles",
        "Ojalá tuviera más vacaciones. Ojalá supiera tocar el piano. Me gustaría que mis amigos vivieran más cerca. Preferiría que mi trabajo fuera más creativo.",
        [
          ["Me gustaría que mis amigos vivieran más cerca.", "I'd like my friends to live closer."],
        ],
        [
          fb("Tus deseos.", "Ojalá ___ más vacaciones. (tener, yo)", "tuviera", "Deseo irreal."),
        ]
      ),
    ],
    [
      fb("Tus deseos.", "Ojalá ___ tocar el piano. (saber, yo)", "supiera", "Deseo irreal."),
      fb("Tus deseos.", "Me gustaría que mis amigos ___ más cerca. (vivir)", "vivieran", "Condicional → imperfecto de subjuntivo."),
      fb("Tus deseos.", "Preferiría que mi trabajo ___ más creativo. (ser)", "fuera", "Condicional."),
      fb("Tus deseos.", "Ojalá mi ciudad ___ playa. (tener)", "tuviera", "Deseo irreal."),
      fb("Tus deseos.", "Me encantaría que mi familia ___ a visitarme. (venir)", "viniera", "Condicional."),
      toEs("I wish I could speak ten languages.", "Ojalá pudiera hablar diez idiomas.", "«Ojalá» + imperfecto de subjuntivo expresa un deseo irreal o muy difícil: «pudiera».", ["Ojalá hablara diez idiomas.", "Ojalá pudiese hablar diez idiomas."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-corrige-cortesia",
    "Corrige el párrafo: un correo demasiado directo",
    "Mejora un correo formal usando quisiera y el imperfecto de subjuntivo.",
    "6 min",
    [
      sec(
        "El correo original",
        "«Quiero hablar con usted. Quiero que me mande el presupuesto. Es mejor que nos veamos el lunes.» Es correcto, pero poco cortés. La versión cortés usa quisiera, le agradecería que + imperfecto de subjuntivo y sería mejor que + imperfecto de subjuntivo.",
        [
          ["Le agradecería que me mandara el presupuesto.", "I'd be grateful if you sent me the estimate."],
        ],
        [
          fb("Suaviza.", "Quiero consultarle una duda. → ___ consultarle una duda.", "Quisiera", "«Quisiera» (imperfecto de subjuntivo) es la forma más cortés de «quiero»."),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Quiero que me mande el presupuesto. → Le agradecería que me ___ el presupuesto.", "mandara", "Tras condicional de cortesía («agradecería»), la subordinada va en imperfecto de subjuntivo."),
      fb("Suaviza.", "Es mejor que nos veamos el lunes. → Sería mejor que nos ___ el lunes.", "viéramos", "Tras «sería mejor que», imperfecto de subjuntivo; «viéramos» lleva tilde."),
      toEs("Corrige la secuencia: «Le agradecería que me responda pronto.»", "Le agradecería que me respondiera pronto.", "Tras «agradecería» (condicional), la subordinada va en imperfecto de subjuntivo: «respondiera»."),
      toEs("Corrige la secuencia: «Me gustaría que venga usted a la reunión.»", "Me gustaría que viniera usted a la reunión.", "Tras «me gustaría» (condicional), la subordinada va en imperfecto de subjuntivo: «viniera»."),
      toEs("Corrige la secuencia: «Sería conveniente que lo revisen.»", "Sería conveniente que lo revisaran.", "Tras «sería conveniente» (condicional), la subordinada va en imperfecto de subjuntivo: «revisaran»."),
      mc(
        "¿Qué frase es la más cortés?",
        ["Quisiera saber si tienen habitaciones libres.", "Quiero saber si tienen habitaciones libres.", "Dígame si tienen habitaciones libres.", "¿Tienen habitaciones libres o no?"],
        0,
        "«Quisiera» (imperfecto de subjuntivo de querer) suaviza mucho la petición. «Quiero» es directo, «Dígame» es una orden y «¿… o no?» suena brusco."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-dictado-secuencia-mixta",
    "Dictado: secuencia de tiempos en contexto",
    "Frases con presente y pasado mezclados, palabra por palabra.",
    "5 min",
    [
      sec(
        "Mira el verbo principal",
        "Antes de escribir el subjuntivo, localiza el verbo principal y su tiempo.",
        [
          ["Siempre les he pedido que me digan la verdad.", "I've always asked them to tell me the truth."],
        ],
        [
          wo("Les pedí que me dijeran la verdad.", "Pasado.", "I asked them to tell me the truth."),
        ]
      ),
    ],
    [
      wo("No creí que fuera tan difícil.", "Pasado + duda.", "I didn't think it would be so hard."),
      wo("Espero que os lo paséis bien.", "Presente.", "I hope you have a good time."),
      wo("Sería increíble que ganáramos el campeonato.", "Condicional.", "It would be incredible if we won the championship."),
      wo("Nos extrañó que no hubiera nadie en la calle.", "Pasado.", "It surprised us that there was nobody in the street."),
      toEs("I was hoping you would call me.", "Esperaba que me llamaras.", "«Esperar que» en pasado exige imperfecto de subjuntivo: «llamaras».", ["Esperaba que me llamases."]),
      toEs("It's strange that nobody answers.", "Es raro que nadie conteste.", "Las valoraciones como «es raro que» exigen subjuntivo; en presente: «conteste».", ["Es raro que nadie responda."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-mezcla-relativas-adverbiales-pasado",
    "Práctica mezclada: relativas, adverbiales y secuencia",
    "Los tres usos del subjuntivo de la unidad, en pasado.",
    "7 min",
    [
      sec(
        "Un viaje difícil",
        "«Buscábamos un hotel que admitiera perros. No había ninguno que tuviera sitio. Llamamos a mi tía para que nos dejara dormir en su casa. Aunque era tarde, nos abrió la puerta antes de que llegáramos al portal.»",
        [
          ["Buscábamos un hotel que admitiera perros.", "We were looking for a hotel that allowed dogs."],
        ],
        [
          fb("Completa.", "Buscábamos un hotel que ___ perros. (admitir)", "admitiera", "Relativa + pasado."),
        ]
      ),
    ],
    [
      fb("Completa.", "No había ninguno que ___ sitio. (tener)", "tuviera", "Inexistente + pasado."),
      fb("Completa.", "Llamamos a mi tía para que nos ___ dormir en su casa. (dejar)", "dejara", "Para que + pasado."),
      fb("Completa.", "Aunque ___ tarde, nos abrió la puerta. (ser — era un hecho)", "era", "Hecho → indicativo."),
      fb("Completa.", "…antes de que ___ al portal. (llegar, nosotros)", "llegáramos", "Antes de que + pasado."),
      fb("Completa.", "Mi tía quería que nos ___ una semana. (quedar)", "quedáramos", "Deseo + pasado."),
      mc(
        "«Cuando ___ a su casa, ya estaba la cena en la mesa.»",
        ["llegamos", "llegáramos", "lleguemos", "llegaremos"],
        0,
        "Un hecho pasado real con cuando va en indicativo: cuando llegamos. «Llegáramos» y «lleguemos» son subjuntivo, y «llegaremos» es futuro."
      ),
      toEs("We needed someone who could look after the dog.", "Necesitábamos a alguien que pudiera cuidar al perro.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «pudiera».", ["Necesitábamos a alguien que cuidara al perro.", "Necesitábamos a alguien que pudiese cuidar del perro."]),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-circuito-verbos-influencia",
    "Circuito: verbos de influencia en pasado",
    "Pedir, exigir, prohibir, aconsejar, permitir: todos piden la secuencia.",
    "6 min",
    [
      sec(
        "Influir sobre otros",
        "Pedir / rogar / exigir / prohibir / permitir / aconsejar / recomendar + que + subjuntivo. En pasado: Me exigieron que presentara el DNI. Nos prohibieron que hiciéramos fotos.",
        [
          ["Nos prohibieron que hiciéramos fotos.", "They forbade us to take photos."],
        ],
        [
          fb("Estación 1.", "Me exigieron que ___ el DNI. (presentar)", "presentara", "Pasado."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Nos rogaron que no ___ ruido. (hacer)", "hiciéramos", "Pasado; tilde."),
      fb("Estación 2.", "El guía nos permitió que ___ las esculturas. (tocar)", "tocáramos", "Pasado."),
      fb("Estación 2.", "Mis amigos me aconsejaron que no ___ ese piso. (alquilar)", "alquilara", "Pasado."),
      fb("Estación 3.", "La profesora nos recomendó que ___ el periódico. (leer)", "leyéramos", "Leyeron; tilde."),
      fb("Estación 3.", "Le supliqué que no se ___. (ir)", "fuera", "Pasado."),
      fb("Estación 4.", "Siempre me piden que ___ el postre. (traer)", "traiga", "Presente."),
      toEs("They asked us not to use the lift.", "Nos pidieron que no usáramos el ascensor.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «no usáramos».", ["Nos pidieron que no utilizáramos el ascensor.", "Nos pidieron que no usásemos el ascensor."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-1",
    "b2d-patron-si-tuviera",
    "Práctica de patrones: si tuviera…, haría…",
    "Un marco fijo para las hipótesis: si + imperfecto de subjuntivo, condicional.",
    "6 min",
    [
      sec(
        "La fórmula",
        "Si + imperfecto de subjuntivo, + condicional: Si tuviera tiempo, viajaría más. El orden puede invertirse: Viajaría más si tuviera tiempo. Nunca condicional después de si.",
        [
          ["Si tuviera tiempo, viajaría más.", "If I had time, I'd travel more."],
          ["Viviría en la playa si pudiera.", "I'd live at the beach if I could."],
        ],
        [
          fb("Mismo marco.", "Si ___ dinero, me compraría una casa. (tener, yo)", "tuviera", "Si + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Si tuviera dinero, ___ una casa. (comprarse, yo)", "me compraría", "Condicional."),
      fb("Mismo marco.", "Si ___ más alto, jugaría al baloncesto. (ser, yo)", "fuera", "Ser → fuera."),
      fb("Mismo marco.", "Si supiera cocinar, ___ cenas para mis amigos. (hacer)", "haría", "Hacer → haría."),
      fb("Mismo marco.", "Si ___ en Madrid, iría al teatro cada semana. (vivir, nosotros)", "viviéramos", "Tilde."),
      fb("Mismo marco.", "Si pudiera volar, ___ a Japón en un momento. (ir)", "iría", "Condicional."),
      fb("Mismo marco.", "Si no ___ tanto, dormirías mejor. (trabajar, tú)", "trabajaras", "Si + imperfecto de subjuntivo."),
      mc(
        "«Si ___ la respuesta, te la diría.»",
        ["supiera", "sabría", "sé", "sepa"],
        0,
        "En una hipótesis, tras si va imperfecto de subjuntivo: si supiera. «Sabría» (condicional) nunca va tras si, «sé» haría la condición real y «sepa» (presente de subjuntivo) no se usa tras si."
      ),
      toEs("If I had a garden, I would grow tomatoes.", "Si tuviera un jardín, cultivaría tomates.", "Si + imperfecto de subjuntivo, condicional.", ["Si tuviese un jardín, cultivaría tomates.", "Cultivaría tomates si tuviera un jardín."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-1",
    "b2d-pares-si-tengo-si-tuviera",
    "Pares mínimos: si tengo tiempo / si tuviera tiempo",
    "Posible o hipotético: el hablante decide cuánto cree en la condición.",
    "6 min",
    [
      sec(
        "Real o imaginado",
        "Si tengo tiempo, te ayudo (es posible, lo veremos). Si tuviera tiempo, te ayudaría (no tengo tiempo, o es poco probable). Real: si + presente, presente/futuro. Hipotético: si + imperfecto de subjuntivo, condicional.",
        [
          ["Si llueve, no iremos.", "If it rains, we won't go."],
          ["Si lloviera, no iríamos.", "If it rained, we wouldn't go."],
        ],
        [
          mc(
            "Sabes que no tienes coche: «Si ___ coche, te llevaría.»",
            ["tuviera", "tengo", "tendría", "tenga"],
            0,
            "Algo contrario a la realidad (no tienes coche) pide si + imperfecto de subjuntivo: si tuviera. «Tengo» sería una condición real, «tendría» no va tras si y «tenga» tampoco."
          ),
        ]
      ),
    ],
    [
      fb("Real.", "Si ___ el examen, lo celebraremos. (aprobar, tú)", "apruebas", "Posible."),
      fb("Hipotético.", "Si ___ el examen sin estudiar, sería un milagro. (aprobar, tú)", "aprobaras", "Improbable."),
      fb("Real.", "Si me ___ el premio, me voy de viaje. (tocar)", "toca", "Posible."),
      fb("Hipotético.", "Si me ___ la lotería, dejaría de trabajar. (tocar)", "tocara", "Improbable."),
      fb("Real.", "Si ___ tiempo mañana, paso por tu casa. (tener, yo)", "tengo", "Posible."),
      fb("Hipotético.", "Si ___ tiempo, estudiaría otro idioma, pero no lo tengo. (tener, yo)", "tuviera", "Contrario a la realidad."),
      toEs("If I see him, I'll tell him.", "Si lo veo, se lo diré.", "Condición real o probable: «si» + presente, y futuro en la consecuencia.", ["Si le veo, se lo diré.", "Si lo veo, se lo digo."]),
      toEs("If I saw him, I would tell him.", "Si lo viera, se lo diría.", "Condición hipotética: «si» + imperfecto de subjuntivo, y condicional en la consecuencia.", ["Si le viera, se lo diría.", "Si lo viese, se lo diría."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-1",
    "b2d-circuito-como-si",
    "Circuito: como si + imperfecto de subjuntivo",
    "Comparar con algo que no es verdad: siempre imperfecto de subjuntivo.",
    "6 min",
    [
      sec(
        "Como si",
        "Como si + imperfecto de subjuntivo, sin importar el tiempo del verbo principal: Habla como si fuera el jefe. Hablaba como si fuera el jefe. Hablará como si fuera el jefe.",
        [
          ["Me mira como si no me conociera.", "He looks at me as if he didn't know me."],
          ["Gasta como si fuera millonario.", "He spends as if he were a millionaire."],
        ],
        [
          fb("Estación 1.", "Habla como si lo ___ todo. (saber)", "supiera", "Como si + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Actúa como si no ___ nada. (pasar)", "pasara", "Como si."),
      fb("Estación 1.", "Duerme como si no ___ preocupaciones. (tener)", "tuviera", "Como si."),
      fb("Estación 2.", "Me trató como si ___ un niño. (ser, yo)", "fuera", "Tiempo principal pasado, igual forma."),
      fb("Estación 2.", "Bailaban como si nadie los ___. (mirar)", "mirara", "Como si."),
      fb("Estación 3.", "No me hables como si ___ tonta. (ser, yo)", "fuera", "Como si."),
      fb("Estación 3.", "Corre como si ___ prisa. (tener)", "tuviera", "Como si."),
      mc(
        "«Se comporta como si ___ el dueño.»",
        ["fuera", "es", "sea", "sería"],
        0,
        "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: como si fuera. «Es», «sea» y «sería» no pueden seguir a «como si»."
      ),
      toEs("She talks to me as if we were friends.", "Me habla como si fuéramos amigas.", "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: «fuéramos».", ["Me habla como si fuéramos amigos.", "Me habla como si fuésemos amigas."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-1",
    "b2d-preguntas-que-harias-si",
    "Preguntas y respuestas: ¿qué harías si…?",
    "Responde a preguntas hipotéticas con el condicional.",
    "6 min",
    [
      sec(
        "Imaginar",
        "—¿Qué harías si fueras invisible? —Si fuera invisible, entraría en un concierto sin pagar. La pregunta ya lleva el imperfecto de subjuntivo; la respuesta usa el condicional.",
        [
          ["—¿Adónde irías si pudieras viajar gratis? —Iría a Nueva Zelanda.", "Where would you go if you could travel for free? I'd go to New Zealand."],
        ],
        [
          fb("Responde.", "—¿Qué harías si fueras invisible? —___ en un concierto sin pagar. (entrar)", "Entraría", "Condicional."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Qué comprarías si te tocara la lotería? —Me ___ una casa en el campo. (comprar)", "compraría", "Condicional."),
      fb("Responde.", "—¿Con quién cenarías si pudieras elegir a cualquiera? —___ con Frida Kahlo. (cenar)", "Cenaría", "Condicional."),
      fb("Responde.", "—¿Qué cambiarías si ___ presidente? —Bajaría los impuestos. (ser, tú)", "fueras", "Si + imperfecto de subjuntivo."),
      fb("Responde.", "—¿Qué dirías si te ___ un ovni? —Diría que estoy soñando. (aparecer)", "apareciera", "Si + imperfecto de subjuntivo."),
      fb("Responde.", "—¿Dónde vivirías si no ___ que trabajar? —En una isla. (tener, tú)", "tuvieras", "Si + imperfecto de subjuntivo."),
      mc(
        "—¿Qué harías si perdieras el pasaporte? —«___ a la embajada.»",
        ["Iría", "Fuera", "Iré", "Voy"],
        0,
        "Para responder a una hipótesis (¿qué harías?) se usa el condicional: iría. «Fuera» es subjuntivo, «iré» es futuro real y «voy» es presente."
      ),
      toEs("What would you do if you had a million euros?", "¿Qué harías si tuvieras un millón de euros?", "Pregunta hipotética: condicional en la principal y «si» + imperfecto de subjuntivo.", ["¿Qué harías si tuvieses un millón de euros?", "¿Qué harías con un millón de euros?"]),
    ]
  ),
  L(
    "hypothetical-si-clauses-1",
    "b2d-corrige-si-condicional",
    "Corrige el párrafo: el condicional después de si",
    "El error más frecuente en las hipótesis: poner condicional en la cláusula con si.",
    "6 min",
    [
      sec(
        "El texto",
        "«Si tendría más tiempo, aprendería a tocar la guitarra. Si fuera rico, compre un barco. Si mi jefe me subiría el sueldo, me quedaría en la empresa.» Tres errores.",
        [
          ["Si tuviera más tiempo, aprendería a tocar la guitarra.", "If I had more time, I'd learn to play the guitar."],
        ],
        [
          mc(
            "¿Qué falla en «si tendría más tiempo»?",
            ["Después de si no va condicional: tuviera.", "Falta un pronombre.", "Debe ser «tenga».", "Nada."],
            0,
            "Tras si no va el condicional; la hipótesis usa imperfecto de subjuntivo: si tuviera. No falta pronombre, «tenga» no va tras si y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Si tendría más tiempo, aprendería a tocar la guitarra.»", "Si tuviera más tiempo, aprendería a tocar la guitarra.", "Tras «si» condicional nunca va condicional: «si tuviera», no «si tendría»."),
      toEs("Corrige: «Si fuera rico, compre un barco.»", "Si fuera rico, compraría un barco.", "En la consecuencia de «si fuera» va condicional: «compraría», no «compre»."),
      toEs("Corrige: «Si mi jefe me subiría el sueldo, me quedaría.»", "Si mi jefe me subiera el sueldo, me quedaría.", "Tras «si» condicional nunca va condicional: «si me subiera», no «si me subiría»."),
      toEs("Corrige: «Si podría, te ayudaría.»", "Si pudiera, te ayudaría.", "Tras «si» condicional nunca va condicional: «si pudiera», no «si podría»."),
      toEs("Corrige: «Si estudiaras más, aprobarás.»", "Si estudiaras más, aprobarías.", "Hipótesis → condicional en la principal.", ["Si estudias más, aprobarás."]),
      ms(
        "¿Qué frases son correctas?",
        ["Si viviera en Roma, comería pasta todos los días.", "Comería pasta todos los días si viviera en Roma.", "Si viviría en Roma, comería pasta.", "Si viviera en Roma, como pasta."],
        [0, 1],
        "Si + imperfecto de subjuntivo + condicional, y el orden de las dos partes puede cambiar. «Si viviría» usa condicional tras si y «Si viviera… como pasta» mezcla hipótesis con presente."
      ),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2d-cuento-debate-ia",
    "Cuento con huecos: el debate sobre la inteligencia artificial",
    "Dos tertulianos imaginan un mundo con más IA.",
    "7 min",
    [
      sec(
        "La tertulia",
        "Ana: «Si las máquinas hicieran todo el trabajo, tendríamos más tiempo libre.» Pedro: «Si eso pasara, mucha gente se quedaría sin empleo.» Ana: «No si el Estado garantizara una renta básica.» Pedro: «Hablas como si fuera tan fácil.»",
        [
          ["Si las máquinas hicieran todo el trabajo, tendríamos más tiempo libre.", "If machines did all the work, we'd have more free time."],
        ],
        [
          fb("Completa.", "Si las máquinas ___ todo el trabajo, tendríamos más tiempo libre. (hacer)", "hicieran", "Si + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "…___ más tiempo libre. (tener, nosotros)", "tendríamos", "Condicional."),
      fb("Completa.", "Si eso ___, mucha gente se quedaría sin empleo. (pasar)", "pasara", "Si + imperfecto de subjuntivo."),
      fb("Completa.", "…mucha gente se ___ sin empleo. (quedar)", "quedaría", "Condicional."),
      fb("Completa.", "No si el Estado ___ una renta básica. (garantizar)", "garantizara", "Si + imperfecto de subjuntivo."),
      fb("Completa.", "Hablas como si ___ tan fácil. (ser)", "fuera", "Como si."),
      mc(
        "«Si los robots ___ sentimientos, ¿tendrían derechos?»",
        ["tuvieran", "tendrían", "tienen", "tengan"],
        0,
        "Una hipótesis presente: si + imperfecto de subjuntivo, tuvieran. «Tendrían» no va tras si, «tienen» haría la condición real y «tengan» no se usa tras si."
      ),
      toEs("If I were you, I wouldn't trust that app.", "Si yo fuera tú, no me fiaría de esa aplicación.", "«Si yo fuera tú» + condicional es la fórmula para dar consejos.", ["Yo que tú, no me fiaría de esa aplicación.", "Si fuera tú, no me fiaría de esa app."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2d-cadena-real-a-hipotetico",
    "Cadena de transformaciones: de lo posible a lo improbable",
    "Transforma condiciones reales en hipotéticas.",
    "6 min",
    [
      sec(
        "Dos pasos",
        "Si + presente → si + imperfecto de subjuntivo. Futuro/presente → condicional. Si vienes, cenamos juntos. → Si vinieras, cenaríamos juntos.",
        [
          ["Si puedo, te llamo. → Si pudiera, te llamaría.", "If I can, I'll call you. → If I could, I'd call you."],
        ],
        [
          fb("Hipotético.", "Si vienes, cenamos juntos. → Si ___, cenaríamos juntos.", "vinieras", "Para pasar a hipótesis: si + imperfecto de subjuntivo, desde vinieron: vinieras."),
        ]
      ),
    ],
    [
      fb("Hipotético.", "Si hace sol, iremos a la playa. → Si ___ sol, iríamos a la playa.", "hiciera", "Hipótesis: si + imperfecto de subjuntivo, desde hicieron: hiciera."),
      fb("Hipotético.", "Si hace sol, iremos a la playa. → Si hiciera sol, ___ a la playa.", "iríamos", "En la hipótesis, la consecuencia va en condicional: iríamos."),
      fb("Hipotético.", "Si me lo pides, te lo doy. → Si me lo pidieras, te lo ___.", "daría", "La consecuencia de si + imperfecto de subjuntivo va en condicional: daría."),
      fb("Hipotético.", "Si están cansados, se quedan. → Si ___ cansados, se quedarían.", "estuvieran", "Hipótesis: si + imperfecto de subjuntivo, desde estuvieron: estuvieran."),
      fb("Hipotético.", "Si sabemos la verdad, la diremos. → Si ___ la verdad, la diríamos.", "supiéramos", "Hipótesis: si + imperfecto de subjuntivo, desde supieron; con tilde en nosotros: supiéramos."),
      fb("Real.", "Si pudiera, iría. → Si ___, iré.", "puedo", "Con consecuencia en futuro (iré), la condición es real: si + presente de indicativo, puedo."),
      toEs("If they invited us, we would go.", "Si nos invitaran, iríamos.", "Condición hipotética: «si» + imperfecto de subjuntivo («invitaran») y condicional («iríamos»).", ["Si nos invitasen, iríamos.", "Iríamos si nos invitaran."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2d-habla-de-ti-si-fueras",
    "Habla de ti: si pudieras cambiar una cosa…",
    "Imagina otras versiones de tu vida con si + imperfecto de subjuntivo.",
    "6 min",
    [
      sec(
        "Otra vida",
        "Si pudiera cambiar de profesión, sería carpintero. Si viviera en otro país, elegiría Portugal. Si tuviera un superpoder, leería mentes. Si no tuviera miedo, haría paracaidismo.",
        [
          ["Si no tuviera miedo, haría paracaidismo.", "If I weren't afraid, I'd go skydiving."],
        ],
        [
          fb("Tu vida.", "Si ___ cambiar de profesión, sería carpintero. (poder)", "pudiera", "Si + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Si viviera en otro país, ___ Portugal. (elegir)", "elegiría", "Condicional."),
      fb("Tu vida.", "Si ___ un superpoder, leería mentes. (tener)", "tuviera", "Si + imperfecto de subjuntivo."),
      fb("Tu vida.", "Si no tuviera miedo, ___ paracaidismo. (hacer)", "haría", "Condicional."),
      fb("Tu vida.", "Si ___ volver a los quince años, estudiaría música. (poder)", "pudiera", "Si + imperfecto de subjuntivo."),
      fb("Tu vida.", "Si mis padres ___ más cerca, los visitaría cada domingo. (vivir)", "vivieran", "Si + imperfecto de subjuntivo."),
      toEs("If I didn't work, I would read all day.", "Si no trabajara, leería todo el día.", "Condición hipotética: «si» + imperfecto de subjuntivo («trabajara») y condicional («leería»).", ["Si no trabajase, leería todo el día.", "Leería todo el día si no trabajara."]),
      toEs("If I could live anywhere, I would choose Mexico.", "Si pudiera vivir en cualquier sitio, elegiría México.", "Condición hipotética: «si» + imperfecto de subjuntivo («pudiera») y condicional («elegiría»).", ["Si pudiera vivir en cualquier lugar, elegiría México."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2d-elige-si-yo-fuera-tu",
    "Elige y explica: dar consejos con si yo fuera tú",
    "Tres fórmulas para aconsejar: si yo fuera tú, yo que tú, yo en tu lugar.",
    "6 min",
    [
      sec(
        "Aconsejar",
        "Si yo fuera tú, hablaría con ella. Yo que tú, hablaría con ella. Yo en tu lugar, hablaría con ella. Las tres terminan en condicional.",
        [
          ["Si yo fuera tú, no firmaría.", "If I were you, I wouldn't sign."],
        ],
        [
          mc(
            "Tu amigo no sabe si aceptar un trabajo lejos: «Si yo ___ tú, lo aceptaría.»",
            ["fuera", "sería", "soy", "sea"],
            0,
            "«Si yo fuera tú» es la fórmula fija para aconsejar (imperfecto de subjuntivo). «Sería» no va tras si, «soy» es imposible y «sea» tampoco se usa tras si."
          ),
        ]
      ),
    ],
    [
      fb("Aconseja.", "—Me duele la muela. —Si yo fuera tú, ___ al dentista hoy. (ir)", "iría", "Condicional."),
      fb("Aconseja.", "—Mi hermano no me habla. —Yo que tú, lo ___. (llamar)", "llamaría", "Condicional."),
      fb("Aconseja.", "—No sé qué estudiar. —Yo en tu lugar, ___ lo que me gusta. (elegir)", "elegiría", "Condicional."),
      fb("Aconseja.", "—Estoy agotada. —Si ___ tú, me tomaría unos días. (ser, yo)", "fuera", "Si yo fuera tú."),
      mc(
        "«Yo que tú, no ___ tanto dinero en ropa.»",
        ["gastaría", "gastara", "gasto", "gaste"],
        0,
        "«Yo que tú» va seguido de condicional: gastaría. «Gastara» y «gaste» son subjuntivo, y «gasto» es presente."
      ),
      toEs("If I were you, I'd tell him the truth.", "Si yo fuera tú, le diría la verdad.", "«Si yo fuera tú» + condicional es la fórmula para dar consejos: «le diría».", ["Yo que tú, le diría la verdad.", "Si fuera tú, le diría la verdad."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2d-ronda-si-hipotetico",
    "Ronda rápida: la cláusula con si y la principal",
    "Diez huecos: a veces en la condición, a veces en la consecuencia.",
    "5 min",
    [
      sec(
        "Dónde va cada forma",
        "Cláusula con si → imperfecto de subjuntivo (tuviera, fuera). Consecuencia → condicional (tendría, sería).",
        [
          ["Si fuera más barato, lo compraría.", "If it were cheaper, I'd buy it."],
        ],
        [
          fb("Rápido.", "Si ___ más barato, lo compraría. (ser)", "fuera", "Condición."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si fuera más barato, lo ___. (comprar, yo)", "compraría", "Consecuencia."),
      fb("Rápido.", "Si ___ más despacio, te entendería. (hablar, tú)", "hablaras", "Condición."),
      fb("Rápido.", "Si hablaras más despacio, te ___. (entender, yo)", "entendería", "Consecuencia."),
      fb("Rápido.", "Si ___ tiempo, saldríamos más. (tener, nosotros)", "tuviéramos", "Condición."),
      fb("Rápido.", "Si no lloviera, ___ a pasear. (salir, nosotros)", "saldríamos", "Consecuencia; salir → saldr-."),
      fb("Rápido.", "Si ___ la verdad, no estarías tan tranquilo. (saber, tú)", "supieras", "Condición."),
      fb("Rápido.", "Si pusieras más sal, ___ mejor. (saber)", "sabría", "Consecuencia; saber → sabr-."),
      mc(
        "«Si me ___ ahora, iría a verte.»",
        ["llamaras", "llamarías", "llamas", "llames"],
        0,
        "La condición hipotética va en imperfecto de subjuntivo: si me llamaras, iría. «Llamarías» no va tras si, «llamas» sería una condición real (iré) y «llames» no se usa tras si."
      ),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-linea-tres-condicionales",
    "Línea del tiempo: tres grados de condición",
    "Posible, improbable e imposible en el pasado: tres estructuras con si.",
    "6 min",
    [
      sec(
        "Tres grados",
        "Posible: Si estudias, apruebas. Improbable o irreal en el presente: Si estudiaras, aprobarías. Imposible (pasado): Si hubieras estudiado, habrías aprobado.",
        [
          ["Si hubieras estudiado, habrías aprobado.", "If you had studied, you would have passed."],
        ],
        [
          mc(
            "Mañana hay examen y quizá estudies: «Si ___, aprobarás.»",
            ["estudias", "estudiaras", "hubieras estudiado", "estudiarías"],
            0,
            "Una posibilidad real: si + presente (si estudias) + futuro. «Estudiaras» y «hubieras estudiado» son hipotéticos, y «estudiarías» no va tras si."
          ),
        ]
      ),
    ],
    [
      mc("No estudias nunca: «Si ___, aprobarías.»", ["estudiaras", "estudias", "hubieras estudiado", "estudiarías"], 0, "No estudias nunca: irreal en el presente → si + imperfecto de subjuntivo, estudiaras. «Estudias» sería real, «hubieras estudiado» se refiere al pasado y «estudiarías» no va tras si."),
      mc("El examen fue ayer y no estudiaste: «Si ___, habrías aprobado.»", ["hubieras estudiado", "estudiaras", "estudias", "habrías estudiado"], 0, "El examen ya pasó: irreal en el pasado → si + pluscuamperfecto de subjuntivo, hubieras estudiado. «Estudiaras» mira al presente, «estudias» es real y «habrías estudiado» no va tras si."),
      fb("Grado.", "Si ___ el autobús de las siete, llegarás pronto. (tomar, tú)", "tomas", "Posible."),
      fb("Grado.", "Si ___ coche, no dependería del tren. (tener, yo)", "tuviera", "Irreal presente."),
      fb("Grado.", "Si hubiéramos salido antes, no ___ el tren. (perder, nosotros)", "habríamos perdido", "Irreal pasado."),
      fb("Grado.", "Si me ___ la verdad, te ayudaré. (contar, tú)", "cuentas", "Posible."),
      toEs("If it were cheaper, I would buy it.", "Si fuera más barato, lo compraría.", "Condición irreal presente: «si fuera» + condicional «compraría».", ["Si fuese más barato, lo compraría.", "Lo compraría si fuera más barato."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-dictado-si-hipotesis",
    "Dictado: hipótesis con si",
    "Reconstruye frases hipotéticas, algunas con el orden invertido.",
    "5 min",
    [
      sec(
        "Escucha el orden",
        "La condición puede ir antes o después: Si pudiera, iría. / Iría si pudiera. Con la condición al principio, se escribe una coma.",
        [
          ["Te lo diría si lo supiera.", "I'd tell you if I knew."],
        ],
        [
          wo("Si viviera más cerca, te visitaría más.", "Si + imperfecto de subjuntivo.", "If I lived closer, I'd visit you more."),
        ]
      ),
    ],
    [
      wo("Te lo diría si lo supiera.", "Orden invertido.", "I'd tell you if I knew."),
      wo("Si no hiciera tanto calor, saldríamos a correr.", "Hipótesis presente.", "If it weren't so hot, we'd go running."),
      wo("¿Qué harías si te ofrecieran ese puesto?", "Pregunta hipotética.", "What would you do if they offered you that job?"),
      wo("Me mira como si no me conociera.", "Como si.", "He looks at me as if he didn't know me."),
      toEs("If you asked me, I would help you.", "Si me lo pidieras, te ayudaría.", "Condición hipotética: «si me lo pidieras» + condicional «te ayudaría».", ["Si me lo pidieses, te ayudaría.", "Te ayudaría si me lo pidieras."]),
      toEs("He acts as if nothing had happened.", "Actúa como si no hubiera pasado nada.", "Como si + pluscuamperfecto de subjuntivo.", ["Se comporta como si no hubiera pasado nada.", "Actúa como si nada hubiera pasado."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-cuento-maquina-tiempo",
    "Cuento con huecos: si tuviera una máquina del tiempo",
    "Una estudiante imagina adónde viajaría en el tiempo.",
    "7 min",
    [
      sec(
        "La redacción",
        "«Si tuviera una máquina del tiempo, viajaría al siglo XVI. Si pudiera, hablaría con Cervantes. Le preguntaría qué haría si viviera hoy. Seguramente se sorprendería si viera los móviles. Aunque, si fuera posible, también me gustaría ver el futuro.»",
        [
          ["Si pudiera, hablaría con Cervantes.", "If I could, I'd talk to Cervantes."],
        ],
        [
          fb("Completa.", "Si ___ una máquina del tiempo, viajaría al siglo XVI. (tener)", "tuviera", "Condición."),
        ]
      ),
    ],
    [
      fb("Completa.", "…___ al siglo XVI. (viajar)", "viajaría", "Consecuencia."),
      fb("Completa.", "Si ___, hablaría con Cervantes. (poder)", "pudiera", "Condición."),
      fb("Completa.", "Le preguntaría qué haría si ___ hoy. (vivir)", "viviera", "Condición."),
      fb("Completa.", "Seguramente se ___ si viera los móviles. (sorprender)", "sorprendería", "Consecuencia."),
      fb("Completa.", "Si ___ posible, también me gustaría ver el futuro. (ser)", "fuera", "Condición."),
      mc(
        "«Si Cervantes ___ Twitter, ¿qué escribiría?»",
        ["tuviera", "tendría", "tiene", "tenga"],
        0,
        "Una condición imaginaria usa si + imperfecto de subjuntivo: si tuviera. «Tendría» no va tras si, «tiene» sería real y «tenga» no se usa tras si."
      ),
      toEs("If I could travel in time, I would go to ancient Rome.", "Si pudiera viajar en el tiempo, iría a la antigua Roma.", "Condición imposible: «si pudiera» + condicional «iría».", ["Si pudiese viajar en el tiempo, iría a la antigua Roma.", "Si pudiera viajar en el tiempo, iría a la Roma antigua."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-pares-como-si-como",
    "Pares mínimos: como si fuera / como es",
    "Comparar con lo real o con lo imaginado.",
    "5 min",
    [
      sec(
        "Real o imaginado",
        "Como + indicativo: modo real (Lo hice como me dijiste). Como si + imperfecto de subjuntivo: comparación irreal (Lo hizo como si fuera fácil, pero no lo era).",
        [
          ["Hazlo como te enseñé.", "Do it the way I taught you."],
          ["Lo hace como si fuera fácil.", "He does it as if it were easy."],
        ],
        [
          fb("Par.", "Haz la paella como la ___ tu abuela. (preparar, presente)", "prepara", "Modo real → indicativo."),
        ]
      ),
    ],
    [
      fb("Par.", "Cocina como si ___ chef profesional. (ser)", "fuera", "Irreal."),
      fb("Par.", "Lo hice como me lo ___. (explicar, tú, indefinido)", "explicaste", "Modo real."),
      fb("Par.", "Me habla como si yo no ___ nada. (entender)", "entendiera", "Irreal."),
      fb("Par.", "Vístete como ___. (querer, tú)", "quieras", "Abierto → subjuntivo presente."),
      fb("Par.", "Se viste como si ___ a una boda. (ir)", "fuera", "Irreal."),
      mc(
        "«Me trataron como si ___ de la familia.»",
        ["fuera", "era", "soy", "sería"],
        0,
        "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: como si fuera. «Era», «soy» y «sería» no pueden seguir a «como si»."
      ),
      toEs("She sings as if nobody were listening.", "Canta como si nadie la escuchara.", "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: «escuchara».", ["Canta como si nadie la estuviera escuchando.", "Canta como si nadie escuchara."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-circuito-de-ser-yo",
    "Circuito: de + infinitivo y otras formas de condicionar",
    "De ser así, de tener tiempo, en tu lugar: alternativas a si que ya conoces.",
    "6 min",
    [
      sec(
        "Otras formas",
        "De + infinitivo puede sustituir a si en registro cuidado: De tener tiempo, iría (= Si tuviera tiempo). De ser así, cancelaríamos (= Si fuera así). Yo en tu lugar también equivale a si yo fuera tú.",
        [
          ["De tener dinero, viajaría más.", "If I had money, I'd travel more."],
        ],
        [
          fb("Estación 1.", "De tener dinero, ___ más. (viajar, yo)", "viajaría", "Condicional."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Si ___ así, cancelaríamos el viaje. (ser)", "fuera", "Si + imperfecto de subjuntivo."),
      fb("Estación 1.", "De ser así, ___ el viaje. (cancelar, nosotros)", "cancelaríamos", "Condicional."),
      fb("Estación 2.", "De saberlo antes, te lo ___. (decir, yo)", "diría", "Condicional."),
      fb("Estación 2.", "Si lo ___ antes, te lo diría. (saber, yo)", "supiera", "Si + imperfecto de subjuntivo."),
      fb("Estación 3.", "Yo en tu lugar, no ___ esa oferta. (aceptar)", "aceptaría", "Condicional."),
      mc(
        "«De ___ más joven, estudiaría medicina.»",
        ["ser", "fuera", "sería", "soy"],
        0,
        "«De» + infinitivo puede sustituir a una condición con si: de ser más joven = si fuera más joven. «Fuera», «sería» y «soy» no pueden ir tras «de»."
      ),
      toEs("If that were the case, we would have to pay more.", "Si fuera así, tendríamos que pagar más.", "Condición hipotética: «si fuera así» + condicional «tendríamos».", ["De ser así, tendríamos que pagar más.", "Si así fuera, tendríamos que pagar más."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-corrige-hipotesis-mixtas",
    "Corrige el párrafo: hipótesis mal construidas",
    "Errores de modo y tiempo en una carta de opinión.",
    "6 min",
    [
      sec(
        "La carta",
        "«Si el ayuntamiento invertiría en transporte, la gente dejaría el coche. Si hay más carriles bici, iría en bici al trabajo, pero no los hay. Hablan como si el problema no existe.» Tres errores.",
        [
          ["Si el ayuntamiento invirtiera en transporte, la gente dejaría el coche.", "If the council invested in transport, people would leave the car."],
        ],
        [
          mc(
            "«Si hay más carriles bici, iría…, pero no los hay». ¿Qué falla?",
            ["Es irreal: si hubiera más carriles.", "Falta un pronombre.", "Debe ser «habría».", "Nada."],
            0,
            "La frase dice «pero no los hay»: es contrario a la realidad, así que va si + imperfecto de subjuntivo: si hubiera más carriles. No falta pronombre, «habría» no va tras si y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Si el ayuntamiento invertiría en transporte, la gente dejaría el coche.»", "Si el ayuntamiento invirtiera en transporte, la gente dejaría el coche.", "Tras «si» condicional nunca va condicional: «invirtiera», no «invertiría»."),
      toEs("Corrige: «Si hay más carriles bici, iría en bici al trabajo.»", "Si hubiera más carriles bici, iría en bici al trabajo.", "Si la consecuencia va en condicional («iría»), la condición va en imperfecto de subjuntivo: «hubiera»."),
      toEs("Corrige: «Hablan como si el problema no existe.»", "Hablan como si el problema no existiera.", "Como si + imperfecto de subjuntivo."),
      toEs("Corrige: «Si tuviera tiempo, te ayudo.»", "Si tuviera tiempo, te ayudaría.", "Con «si tuviera», la consecuencia va en condicional: «ayudaría», no «ayudo».", ["Si tengo tiempo, te ayudo."]),
      toEs("Corrige: «Si sea posible, llámame.»", "Si es posible, llámame.", "Si nunca va con presente de subjuntivo."),
      ms(
        "¿Qué frases son correctas?",
        ["Si pudiera, lo haría.", "Si puedo, lo hago.", "Si pueda, lo hago.", "Si podría, lo haría."],
        [0, 1],
        "Tras si van el presente de indicativo (si puedo) o el imperfecto de subjuntivo (si pudiera). «Si pueda» (presente de subjuntivo) y «Si podría» (condicional) nunca van tras si."
      ),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-habla-de-ti-dilemas",
    "Habla de ti: dilemas morales",
    "¿Qué harías si…? Responde a dilemas con el condicional.",
    "6 min",
    [
      sec(
        "Dilemas",
        "Si encontraras una cartera con 500 euros, ¿qué harías? Si vieras a un amigo copiando en un examen, ¿lo dirías? Responde con si + imperfecto de subjuntivo y condicional.",
        [
          ["Si encontrara una cartera, la llevaría a la policía.", "If I found a wallet, I'd take it to the police."],
        ],
        [
          fb("Tu respuesta.", "Si ___ una cartera, la llevaría a la policía. (encontrar, yo)", "encontrara", "Condición."),
        ]
      ),
    ],
    [
      fb("Tu respuesta.", "Si viera a un amigo copiando, no ___ nada. (decir, yo)", "diría", "Consecuencia."),
      fb("Tu respuesta.", "Si el cajero me ___ cambio de más, se lo devolvería. (dar)", "diera", "Condición."),
      fb("Tu respuesta.", "Si un desconocido me ___ ayuda en la calle, lo ayudaría. (pedir)", "pidiera", "Condición."),
      fb("Tu respuesta.", "Si ___ que mentir para salvar a alguien, mentiría. (tener, yo)", "tuviera", "Condición."),
      fb("Tu respuesta.", "Si mi jefe me ofreciera un ascenso injusto, lo ___. (rechazar)", "rechazaría", "Consecuencia."),
      toEs("If a friend lied to me, I would forgive him.", "Si un amigo me mintiera, lo perdonaría.", "Condición hipotética: «si me mintiera» + condicional «perdonaría».", ["Si un amigo me mintiese, lo perdonaría.", "Si un amigo me mintiera, le perdonaría."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-ronda-si-como-si-ojala",
    "Ronda rápida: si, como si, ojalá",
    "Tres estructuras que comparten el imperfecto de subjuntivo.",
    "5 min",
    [
      sec(
        "Tres puertas al imperfecto",
        "Si fuera… (hipótesis). Como si fuera… (comparación irreal). Ojalá fuera… (deseo irreal). Las tres usan el mismo tiempo.",
        [
          ["Ojalá fuera viernes.", "I wish it were Friday."],
        ],
        [
          fb("Rápido.", "Ojalá ___ viernes. (ser)", "fuera", "Deseo irreal."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si ___ viernes, saldríamos. (ser)", "fuera", "Hipótesis."),
      fb("Rápido.", "Está contento como si ___ viernes. (ser)", "fuera", "Comparación irreal."),
      fb("Rápido.", "Ojalá ___ más paciencia. (tener, yo)", "tuviera", "Deseo irreal."),
      fb("Rápido.", "Si ___ más paciencia, no me enfadaría. (tener, yo)", "tuviera", "Hipótesis."),
      fb("Rápido.", "Gritaba como si ___ un incendio. (haber)", "hubiera", "Comparación irreal."),
      fb("Rápido.", "Ojalá no ___ que madrugar mañana. (tener, nosotros)", "tuviéramos", "Deseo irreal."),
      fb("Rápido.", "Si no ___ que madrugar, nos quedaríamos. (tener, nosotros)", "tuviéramos", "Hipótesis."),
      mc(
        "«Me miró como si ___ un fantasma.»",
        ["viera", "ve", "vería", "vea"],
        0,
        "«Como si» va con imperfecto de subjuntivo: como si viera un fantasma. «Ve», «vería» y «vea» no pueden seguir a «como si»."
      ),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2d-mezcla-si-real-irreal",
    "Práctica mezclada: planes reales e imaginados",
    "Una conversación que pasa de lo posible a lo imposible.",
    "7 min",
    [
      sec(
        "La conversación",
        "Lola: «Si me dan las vacaciones en julio, iremos a Galicia.» Tomás: «¿Y si no te las dan?» Lola: «Entonces iríamos en septiembre, si pudiéramos.» Tomás: «Si fuera por mí, me iría a Australia un año entero.» Lola: «Hablas como si fuéramos ricos.»",
        [
          ["Si me dan las vacaciones en julio, iremos a Galicia.", "If they give me holidays in July, we'll go to Galicia."],
          ["Si fuera por mí, me iría a Australia.", "If it were up to me, I'd go to Australia."],
        ],
        [
          fb("Completa.", "Si me ___ las vacaciones en julio, iremos a Galicia. (dar)", "dan", "Posible."),
        ]
      ),
    ],
    [
      fb("Completa.", "…___ a Galicia. (ir, nosotros, futuro)", "iremos", "Posible → futuro."),
      fb("Completa.", "Entonces ___ en septiembre. (ir, nosotros, condicional)", "iríamos", "Hipótesis."),
      fb("Completa.", "…si ___. (poder, nosotros)", "pudiéramos", "Condición."),
      fb("Completa.", "Si ___ por mí, me iría a Australia. (ser)", "fuera", "Irreal."),
      fb("Completa.", "Hablas como si ___ ricos. (ser, nosotros)", "fuéramos", "Como si."),
      mc(
        "«Si ahorramos este año, el año que viene ___ un viaje largo.»",
        ["haremos", "haríamos", "hiciéramos", "hagamos"],
        0,
        "Una condición real (si ahorramos) lleva la consecuencia en futuro: haremos. «Haríamos» es hipotético, «hiciéramos» es subjuntivo y «hagamos» es presente de subjuntivo."
      ),
      toEs("If it were up to me, we would stay home.", "Si fuera por mí, nos quedaríamos en casa.", "Condición irreal: «si fuera por mí» + condicional «nos quedaríamos».", ["Si dependiera de mí, nos quedaríamos en casa.", "Si fuese por mí, nos quedaríamos en casa."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-1",
    "b2d-patron-si-hubiera-habria",
    "Práctica de patrones: si hubiera…, habría…",
    "El pasado que no fue: una estructura, muchos verbos.",
    "6 min",
    [
      sec(
        "La fórmula del arrepentimiento",
        "Si + pluscuamperfecto de subjuntivo (hubiera + participio), + condicional perfecto (habría + participio): Si hubiera salido antes, habría llegado a tiempo. También se oye hubiera en las dos partes: Si hubiera salido antes, hubiera llegado.",
        [
          ["Si hubiera salido antes, habría llegado a tiempo.", "If I had left earlier, I would have arrived on time."],
          ["Si me lo hubieras dicho, te habría ayudado.", "If you had told me, I would have helped you."],
        ],
        [
          fb("Mismo marco.", "Si ___ antes, habría llegado a tiempo. (salir, yo)", "hubiera salido", "Hubiera + participio."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Si hubiera estudiado, ___ el examen. (aprobar, yo)", "habría aprobado", "Habría + participio."),
      fb("Mismo marco.", "Si ___ el paraguas, no te habrías mojado. (coger, tú)", "hubieras cogido", "Hubieras + participio."),
      fb("Mismo marco.", "Si hubiéramos reservado, ___ mesa. (tener, nosotros)", "habríamos tenido", "Habríamos + participio."),
      fb("Mismo marco.", "Si ___ la verdad, no se habría enfadado. (decir, tú)", "hubieras dicho", "Decir → dicho."),
      fb("Mismo marco.", "Si hubieran puesto la alarma, no ___ tarde. (llegar, ellos)", "habrían llegado", "Habrían + participio."),
      fb("Mismo marco.", "Si ___ el mapa, no nos habríamos perdido. (ver, nosotros)", "hubiéramos visto", "Ver → visto."),
      mc(
        "«Si me ___, te habría llamado.» (acordar)",
        ["hubiera acordado", "habría acordado", "acordara", "había acordado"],
        0,
        "Una condición irreal en el pasado usa si + pluscuamperfecto de subjuntivo: si me hubiera acordado. «Habría acordado» no va tras si, «acordara» mira al presente y «había acordado» es indicativo."
      ),
      toEs("If I had known, I would have come.", "Si lo hubiera sabido, habría venido.", "Condición irreal en el pasado: «si» + pluscuamperfecto de subjuntivo y condicional perfecto.", ["Si lo hubiese sabido, habría venido.", "Si lo hubiera sabido, hubiera venido."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-1",
    "b2d-pares-si-tuviera-hubiera-tenido",
    "Pares mínimos: si tuviera / si hubiera tenido",
    "Irreal en el presente o irreal en el pasado.",
    "6 min",
    [
      sec(
        "Ahora o antes",
        "Si tuviera dinero, compraría la casa (ahora no tengo). Si hubiera tenido dinero, habría comprado la casa (entonces no tenía; la ocasión ya pasó).",
        [
          ["Si tuviera tiempo, iría contigo.", "If I had time, I'd go with you."],
          ["Si hubiera tenido tiempo, habría ido contigo.", "If I had had time, I would have gone with you."],
        ],
        [
          mc(
            "La fiesta fue ayer y no fuiste: «Si ___ invitado, habría ido.»",
            ["me hubieran", "me invitaran", "me invitan", "me habrían"],
            0,
            "La fiesta ya pasó: condición irreal en el pasado → si me hubieran invitado. «Invitaran» mira al presente, «invitan» es real y «habrían» no va tras si."
          ),
        ]
      ),
    ],
    [
      fb("Ahora.", "Si ___ más cerca, te visitaría. (vivir, yo)", "viviera", "Irreal presente."),
      fb("Antes.", "Si ___ más cerca, te habría visitado. (vivir, yo)", "hubiera vivido", "Irreal pasado."),
      fb("Ahora.", "Si supiera nadar, ___ al lago. (tirarse, yo)", "me tiraría", "Condicional simple."),
      fb("Antes.", "Si hubiera sabido nadar, ___ al lago. (tirarse, yo)", "me habría tirado", "Condicional perfecto."),
      fb("Ahora.", "Si no ___ tanto, estarías mejor. (fumar, tú)", "fumaras", "Irreal presente."),
      fb("Antes.", "Si no ___ tanto de joven, estarías mejor ahora. (fumar, tú)", "hubieras fumado", "Condición en el pasado."),
      toEs("If you had called me, I would have gone.", "Si me hubieras llamado, habría ido.", "Condición irreal en el pasado: «si hubieras llamado» + «habría ido».", ["Si me hubieses llamado, habría ido.", "Si me hubieras llamado, hubiera ido."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-1",
    "b2d-circuito-participios-habria",
    "Circuito: habría hecho, habría dicho, habría puesto",
    "Participios irregulares dentro de las estructuras nuevas.",
    "6 min",
    [
      sec(
        "Los participios de siempre",
        "hecho, dicho, visto, puesto, vuelto, escrito, abierto, roto, muerto, resuelto. Ahora con habría y hubiera: Yo lo habría hecho de otra manera. Si hubieras vuelto antes…",
        [
          ["Yo lo habría hecho de otra manera.", "I would have done it differently."],
        ],
        [
          fb("Estación 1.", "Yo en tu lugar no lo ___. (hacer)", "habría hecho", "Hacer → hecho."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Yo no le ___ nada. (decir)", "habría dicho", "Decir → dicho."),
      fb("Estación 2.", "Si ___ antes, la habrías visto. (volver, tú)", "hubieras vuelto", "Volver → vuelto."),
      fb("Estación 2.", "Si ___ la ventana, no haría tanto calor. (abrir, ellos)", "hubieran abierto", "Abrir → abierto; consecuencia en el presente."),
      fb("Estación 3.", "Si hubieras tenido cuidado, no se ___ el jarrón. (romper)", "habría roto", "Romper → roto."),
      fb("Estación 3.", "Si hubiéramos leído las instrucciones, ___ el problema. (resolver)", "habríamos resuelto", "Resolver → resuelto."),
      fb("Estación 4.", "Si me lo ___ por escrito, lo tendría claro. (poner, tú)", "hubieras puesto", "Poner → puesto."),
      mc(
        "«Yo no ___ esa carta.»",
        ["habría escrito", "habría escribido", "hubiera escribido", "habrá escribido"],
        0,
        "Condicional perfecto: habría + participio, y escribir → escrito: habría escrito. «Escribido» no existe, así que las otras tres son incorrectas."
      ),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-1",
    "b2d-habla-de-ti-arrepentimientos",
    "Habla de ti: si hubiera…",
    "Piensa en decisiones pasadas y en lo que habría cambiado.",
    "6 min",
    [
      sec(
        "Otra decisión",
        "Si hubiera estudiado Arte, habría sido más feliz. Si no me hubiera mudado, no habría conocido a mi pareja. Si hubiera aprendido inglés de niño, ahora lo hablaría perfecto.",
        [
          ["Si no me hubiera mudado, no habría conocido a mi pareja.", "If I hadn't moved, I wouldn't have met my partner."],
        ],
        [
          fb("Tu vida.", "Si ___ Arte, habría sido más feliz. (estudiar)", "hubiera estudiado", "Condición pasada."),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Si no me hubiera mudado, no ___ a mi pareja. (conocer)", "habría conocido", "Consecuencia pasada."),
      fb("Tu vida.", "Si ___ inglés de niño, ahora lo hablaría perfecto. (aprender)", "hubiera aprendido", "Condición pasada, consecuencia presente."),
      fb("Tu vida.", "Si hubiera ahorrado más, ahora ___ una casa. (tener)", "tendría", "Consecuencia presente."),
      fb("Tu vida.", "Si no ___ aquel tren, mi vida sería distinta. (perder)", "hubiera perdido", "Condición pasada."),
      fb("Tu vida.", "Si mis padres no se hubieran conocido, yo no ___. (existir)", "existiría", "Consecuencia presente."),
      toEs("If I had listened to my mother, I would have saved money.", "Si hubiera escuchado a mi madre, habría ahorrado dinero.", "Condición irreal en el pasado: «si hubiera escuchado» + «habría ahorrado».", ["Si le hubiera hecho caso a mi madre, habría ahorrado dinero.", "Si hubiese escuchado a mi madre, habría ahorrado dinero."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-2",
    "b2d-elige-ojala-hubiera",
    "Elige y explica: ojalá venga / ojalá viniera / ojalá hubiera venido",
    "Tres ojalás: posible, irreal presente e irreal pasado.",
    "6 min",
    [
      sec(
        "Tres tiempos del deseo",
        "Ojalá venga (quizá venga). Ojalá viniera (sé que no viene). Ojalá hubiera venido (no vino, ya es tarde). El último expresa arrepentimiento.",
        [
          ["Ojalá hubiera venido a la fiesta.", "I wish he had come to the party."],
        ],
        [
          mc(
            "La fiesta fue ayer y tu amigo no vino: «Ojalá ___.»",
            ["hubiera venido", "venga", "viniera", "vendría"],
            0,
            "La fiesta ya fue: un deseo sobre el pasado usa ojalá + pluscuamperfecto de subjuntivo, hubiera venido. «Venga» y «viniera» miran al presente o futuro, y «vendría» es condicional."
          ),
        ]
      ),
    ],
    [
      mc("La fiesta es mañana: «Ojalá ___ tu amigo.»", ["venga", "hubiera venido", "vino", "vendrá"], 0, "La fiesta es mañana y es posible que venga: ojalá + presente de subjuntivo, venga. «Hubiera venido» es para el pasado, «vino» es indicativo y «vendrá» es futuro."),
      mc("Tu amigo vive en Australia: «Ojalá ___ aquí ahora.»", ["estuviera", "esté", "hubiera estado", "está"], 0, "Que esté aquí ahora es imposible (vive en Australia): ojalá + imperfecto de subjuntivo, estuviera. «Esté» sería posible, «hubiera estado» se refiere al pasado y «está» es indicativo."),
      fb("Elige.", "Ojalá no ___ ese mensaje anoche. (enviar, yo)", "hubiera enviado", "Arrepentimiento."),
      fb("Elige.", "Ojalá ___ el examen mañana. (aprobar, yo)", "apruebe", "Posible."),
      fb("Elige.", "Ojalá ___ más en el instituto. (estudiar, yo)", "hubiera estudiado", "Arrepentimiento."),
      fb("Elige.", "Ojalá ___ hablar japonés. (saber, yo)", "supiera", "Irreal presente."),
      toEs("I wish I had said goodbye to her.", "Ojalá me hubiera despedido de ella.", "«Ojalá» + pluscuamperfecto de subjuntivo expresa lamento por algo pasado.", ["Ojalá me hubiese despedido de ella.", "Ojalá le hubiera dicho adiós."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-2",
    "b2d-cuento-conversacion-decisiones",
    "Cuento con huecos: dos amigos y sus decisiones",
    "Nacho y Carla repasan lo que habrían hecho de otra manera.",
    "7 min",
    [
      sec(
        "La conversación",
        "Nacho: «Si hubiera aceptado aquel trabajo en Berlín, ahora hablaría alemán.» Carla: «Y si yo no hubiera dejado el piano, habría tocado en una orquesta.» Nacho: «Ojalá nos hubiéramos atrevido más.» Carla: «Bueno, si hubiéramos hecho todo eso, no nos habríamos conocido.»",
        [
          ["Ojalá nos hubiéramos atrevido más.", "I wish we had dared more."],
        ],
        [
          fb("Completa.", "Si ___ aquel trabajo en Berlín, ahora hablaría alemán. (aceptar, yo)", "hubiera aceptado", "Condición pasada."),
        ]
      ),
    ],
    [
      fb("Completa.", "…ahora ___ alemán. (hablar)", "hablaría", "Consecuencia presente."),
      fb("Completa.", "Si yo no ___ el piano… (dejar)", "hubiera dejado", "Condición pasada."),
      fb("Completa.", "…___ en una orquesta. (tocar, yo)", "habría tocado", "Consecuencia pasada."),
      fb("Completa.", "Ojalá nos ___ más. (atrever)", "hubiéramos atrevido", "Arrepentimiento; tilde."),
      fb("Completa.", "…no nos ___. (conocer)", "habríamos conocido", "Consecuencia pasada."),
      mc(
        "«Si no ___ a aquella fiesta, nunca te habría conocido.»",
        ["hubiera ido", "habría ido", "fuera", "iba"],
        0,
        "Condición irreal en el pasado: si + pluscuamperfecto de subjuntivo, hubiera ido. «Habría ido» no va tras si, «fuera» mira al presente e «iba» es indicativo."
      ),
      toEs("If we hadn't met, my life would be different.", "Si no nos hubiéramos conocido, mi vida sería diferente.", "Condición pasada con efecto en el presente: «si no hubiéramos…» + condicional simple «sería».", ["Si no nos hubiéramos conocido, mi vida sería distinta.", "Si no nos hubiésemos conocido, mi vida sería diferente."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-2",
    "b2d-cadena-real-a-irreal-pasado",
    "Cadena de transformaciones: cuenta lo que no pasó",
    "Convierte hechos pasados en condiciones irreales.",
    "6 min",
    [
      sec(
        "Del hecho a la hipótesis",
        "Hecho: No estudié, así que suspendí. → Hipótesis: Si hubiera estudiado, no habría suspendido. Los dos verbos cambian de afirmativo a negativo (o al revés).",
        [
          ["Llovió y no fuimos a la playa. → Si no hubiera llovido, habríamos ido a la playa.", "It rained and we didn't go to the beach."],
        ],
        [
          fb("Transforma.", "No me llamaste, así que no fui. → Si me ___, habría ido.", "hubieras llamado", "Una condición irreal en el pasado: si + pluscuamperfecto de subjuntivo, hubieras llamado."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Perdí el autobús y llegué tarde. → Si no ___ el autobús, no habría llegado tarde.", "hubiera perdido", "Condición irreal pasada: si no + pluscuamperfecto de subjuntivo, hubiera perdido."),
      fb("Transforma.", "No reservaron y no encontraron sitio. → Si hubieran reservado, ___ sitio.", "habrían encontrado", "La consecuencia de una condición pasada irreal va en condicional perfecto: habrían encontrado."),
      fb("Transforma.", "Comí demasiado y me dolió el estómago. → Si no hubiera comido tanto, no me ___ el estómago.", "habría dolido", "Consecuencia pasada → condicional perfecto: no me habría dolido."),
      fb("Transforma.", "No sabía la dirección y no pude ir. → Si ___ la dirección, habría podido ir.", "hubiera sabido", "Condición pasada irreal → pluscuamperfecto de subjuntivo: hubiera sabido."),
      fb("Transforma.", "No trajiste abrigo y ahora tienes frío. → Si ___ abrigo, ahora no tendrías frío.", "hubieras traído", "Condición pasada (no trajiste) → pluscuamperfecto de subjuntivo; traer → traído (con tilde)."),
      toEs("If it hadn't rained, we would have gone to the beach.", "Si no hubiera llovido, habríamos ido a la playa.", "Condición irreal en el pasado: «si no hubiera llovido» + «habríamos ido».", ["Si no hubiese llovido, habríamos ido a la playa.", "Si no hubiera llovido, hubiéramos ido a la playa."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-2",
    "b2d-corrige-habria-hubiera",
    "Corrige el párrafo: habría en la cláusula con si",
    "El error clásico: «si habría…».",
    "6 min",
    [
      sec(
        "El mensaje",
        "«Si habría sabido que venías, te habría esperado. Si hubieras llamado, te hubiera abierto. Si me habrías avisado, no habría pasado nada.» Dos errores; una frase es correcta.",
        [
          ["Si hubiera sabido que venías, te habría esperado.", "If I had known you were coming, I would have waited for you."],
        ],
        [
          mc(
            "¿Qué frase del mensaje es correcta?",
            ["Si hubieras llamado, te hubiera abierto.", "Si habría sabido, te habría esperado.", "Si me habrías avisado, no habría pasado.", "Ninguna."],
            0,
            "Si + pluscuamperfecto de subjuntivo, y en la principal se acepta habría o hubiera: te hubiera abierto. «Si habría sabido» y «Si me habrías avisado» usan condicional tras si, así que «Ninguna» es falsa."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Si habría sabido que venías, te habría esperado.»", "Si hubiera sabido que venías, te habría esperado.", "Tras «si» condicional nunca va «habría»: se usa «hubiera sabido»."),
      toEs("Corrige: «Si me habrías avisado, no habría pasado nada.»", "Si me hubieras avisado, no habría pasado nada.", "Tras «si» condicional nunca va «habrías»: se usa «hubieras avisado»."),
      toEs("Corrige: «Si hubiera tenido tiempo, habré ido.»", "Si hubiera tenido tiempo, habría ido.", "La consecuencia de «si hubiera tenido» va en condicional perfecto: «habría ido», no «habré ido».", ["Si hubiera tenido tiempo, hubiera ido."]),
      toEs("Corrige: «Ojalá habría venido.»", "Ojalá hubiera venido.", "«Ojalá» va con subjuntivo, nunca con condicional: «hubiera venido»."),
      toEs("Corrige: «Si lo hubiera visto, lo habría decido.»", "Si lo hubiera visto, lo habría dicho.", "El participio de «decir» es irregular: «dicho» («decido» es de «decidir»)."),
      ms(
        "¿Qué frases son correctas?",
        ["Si hubiera llovido, no habríamos salido.", "Si hubiera llovido, no hubiéramos salido.", "Si habría llovido, no habríamos salido.", "Si hubiera llovido, no saliéramos ayer."],
        [0, 1],
        "Tras si va el pluscuamperfecto de subjuntivo; en la principal vale habría o hubiera. «Si habría llovido» usa condicional tras si, y «no saliéramos ayer» usa imperfecto de subjuntivo en lugar de un tiempo compuesto."
      ),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2d-ronda-habria-hubiera",
    "Ronda rápida: ¿habría o hubiera?",
    "Doce huecos para automatizar dónde va cada forma.",
    "5 min",
    [
      sec(
        "Regla de bolsillo",
        "Tras si, ojalá y como si → hubiera. En la consecuencia → habría (o hubiera, también aceptado). Nunca habría después de si.",
        [
          ["Como si no hubiera pasado nada.", "As if nothing had happened."],
        ],
        [
          fb("Rápido.", "Si ___ venido, lo habrías visto. (tú)", "hubieras", "Tras si."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si hubieras venido, lo ___ visto. (tú)", "habrías", "Consecuencia."),
      fb("Rápido.", "Ojalá ___ llegado a tiempo. (nosotros)", "hubiéramos", "Tras ojalá."),
      fb("Rápido.", "Me miró como si ___ visto un fantasma. (él)", "hubiera", "Tras como si."),
      fb("Rápido.", "Yo no lo ___ comprado. (yo)", "habría", "Consecuencia sin si expreso."),
      fb("Rápido.", "Si lo ___ sabido, no habría venido. (yo)", "hubiera", "Tras si."),
      fb("Rápido.", "¿Qué ___ hecho tú en mi lugar? (tú)", "habrías", "Consecuencia."),
      fb("Rápido.", "Habla como si ___ estado allí. (él)", "hubiera", "Tras como si."),
      mc(
        "«En tu lugar, yo ___ aceptado.»",
        ["habría", "hubiera habido", "habré", "había"],
        0,
        "La consecuencia de una hipótesis pasada va en condicional perfecto: habría aceptado. «Hubiera habido» usa el participio de haber, «habré» es futuro y «había» es pluscuamperfecto de indicativo."
      ),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2d-dictado-irreal-pasado",
    "Dictado: el pasado que no fue",
    "Frases de arrepentimiento y reproche, palabra por palabra.",
    "5 min",
    [
      sec(
        "Reproches",
        "Con habría + participio también se hacen reproches: Me lo habrías podido decir. Deberías habérmelo dicho. Con hubiera en ojalá, arrepentimientos: Ojalá no lo hubiera hecho.",
        [
          ["Me lo habrías podido decir.", "You could have told me."],
        ],
        [
          wo("Ojalá no lo hubiera hecho.", "Arrepentimiento.", "I wish I hadn't done it."),
        ]
      ),
    ],
    [
      wo("Si hubiéramos salido antes, no habríamos perdido el tren.", "Irreal pasado.", "If we had left earlier, we wouldn't have missed the train."),
      wo("Me lo habrías podido decir antes.", "«Podrías haber» + participio expresa un reproche sobre el pasado.", "You could have told me before."),
      wo("Yo en tu lugar habría hablado con ella.", "Consejo sobre el pasado.", "In your place I would have talked to her."),
      wo("Si no me hubieras ayudado, no habría terminado.", "Irreal pasado.", "If you hadn't helped me, I wouldn't have finished."),
      toEs("You should have told me.", "Deberías habérmelo dicho.", "«Deberías haber» + participio expresa un reproche sobre el pasado; los pronombres se unen al infinitivo.", ["Me lo deberías haber dicho.", "Tendrías que habérmelo dicho."]),
      toEs("I wish I had studied more.", "Ojalá hubiera estudiado más.", "«Ojalá» + pluscuamperfecto de subjuntivo expresa lamento por algo pasado.", ["Ojalá hubiese estudiado más."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-pares-mixtas",
    "Pares mínimos: condicionales mixtas",
    "Condición en el pasado con consecuencia en el presente, y al revés.",
    "6 min",
    [
      sec(
        "Mezclar tiempos",
        "Pasado → presente: Si hubiera estudiado Medicina, ahora sería médico. Presente → pasado: Si fuera más valiente, le habría dicho lo que pienso. La lógica temporal decide cada parte.",
        [
          ["Si hubiera estudiado Medicina, ahora sería médico.", "If I had studied medicine, I'd be a doctor now."],
          ["Si fuera más valiente, se lo habría dicho.", "If I were braver, I would have told him."],
        ],
        [
          fb("Pasado → presente.", "Si hubiera aceptado el trabajo, ahora ___ en Londres. (vivir, yo)", "viviría", "Consecuencia presente."),
        ]
      ),
    ],
    [
      fb("Pasado → pasado.", "Si hubiera aceptado el trabajo, ___ a Londres en 2019. (mudarse, yo)", "me habría mudado", "Consecuencia pasada."),
      fb("Pasado → presente.", "Si no hubieras comido tanto, ahora no te ___ la tripa. (doler)", "dolería", "Consecuencia presente."),
      fb("Presente → pasado.", "Si ___ más responsable, no habría olvidado la cita. (ser, yo)", "fuera", "Condición presente (rasgo de carácter)."),
      fb("Presente → pasado.", "Si no le ___ tanto miedo a volar, habría ido a Chile. (tener, yo)", "tuviera", "Condición presente."),
      fb("Pasado → presente.", "Si ___ el tren, ya estaríamos en casa. (coger, nosotros)", "hubiéramos cogido", "Condición pasada."),
      mc(
        "«Si hubiera dormido bien anoche, ahora no ___ tan cansado.»",
        ["estaría", "habría estado", "estuviera", "estoy"],
        0,
        "Condición pasada (anoche) con consecuencia en el presente (ahora): condicional simple, estaría. «Habría estado» se refiere al pasado, «estuviera» es subjuntivo y «estoy» es indicativo."
      ),
      toEs("If I spoke French, I would have understood the film.", "Si hablara francés, habría entendido la película.", "Condicional mixta: condición presente («si hablara») con consecuencia pasada («habría entendido»).", ["Si supiera francés, habría entendido la película.", "Si hablase francés, habría entendido la película."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-cuento-historia-alternativa",
    "Cuento con huecos: una historia alternativa",
    "¿Qué habría pasado si Colón no hubiera llegado a América?",
    "7 min",
    [
      sec(
        "La historia que no fue",
        "«Si Colón no hubiera llegado a América, quizá otro navegante lo habría hecho unos años después. Si nadie hubiera cruzado el Atlántico, en Europa no se comerían patatas ni tomates. Y si el chocolate no hubiera llegado a España, los churros no serían lo mismo.»",
        [
          ["En Europa no se comerían patatas.", "In Europe people wouldn't eat potatoes."],
        ],
        [
          fb("Completa.", "Si Colón no ___ a América… (llegar)", "hubiera llegado", "Condición pasada."),
        ]
      ),
    ],
    [
      fb("Completa.", "…otro navegante lo ___ unos años después. (hacer)", "habría hecho", "Consecuencia pasada."),
      fb("Completa.", "Si nadie ___ el Atlántico… (cruzar)", "hubiera cruzado", "Condición pasada."),
      fb("Completa.", "…en Europa no se ___ patatas. (comer)", "comerían", "Consecuencia presente."),
      fb("Completa.", "Si el chocolate no ___ a España… (llegar)", "hubiera llegado", "Condición pasada."),
      fb("Completa.", "…los churros no ___ lo mismo. (ser)", "serían", "Consecuencia presente."),
      mc(
        "«Si no se ___ la imprenta, los libros serían carísimos.»",
        ["hubiera inventado", "habría inventado", "inventara", "inventaría"],
        0,
        "La imprenta se inventó en el pasado: condición irreal pasada → pluscuamperfecto de subjuntivo, hubiera inventado. «Habría inventado» no va tras si, e «inventara» o «inventaría» miran al presente."
      ),
      toEs("If the internet hadn't been invented, we would write more letters.", "Si no se hubiera inventado internet, escribiríamos más cartas.", "Condicional mixta: condición pasada («si no se hubiera inventado») con efecto presente («escribiríamos»).", ["Si no se hubiese inventado internet, escribiríamos más cartas.", "Si no hubieran inventado internet, escribiríamos más cartas."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-circuito-reproches",
    "Circuito: reproches y lamentos",
    "Habrías podido, deberías haber, ojalá hubiera: tres formas de mirar atrás.",
    "6 min",
    [
      sec(
        "Mirar atrás",
        "Reproche: Habrías podido avisarme. / Deberías haberme avisado. Lamento propio: Ojalá te hubiera avisado. / Tendría que haberte avisado.",
        [
          ["Habrías podido avisarme.", "You could have warned me."],
          ["Tendría que haberte avisado.", "I should have warned you."],
        ],
        [
          fb("Estación 1.", "___ podido llamarme. (tú)", "Habrías", "Reproche."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Deberías ___ antes. (salir)", "haber salido", "Deber + haber + participio."),
      fb("Estación 2.", "Tendría que ___ la verdad. (decirte, yo)", "haberte dicho", "Pronombre pegado a haber."),
      fb("Estación 2.", "Ojalá te ___ caso. (hacer, yo)", "hubiera hecho", "Lamento."),
      fb("Estación 3.", "Podríais ___ la mesa. (reservar)", "haber reservado", "Reproche."),
      fb("Estación 3.", "No ___ haberle gritado. (deber, tú)", "deberías", "Reproche con deber en condicional."),
      mc(
        "¿Qué frase es un lamento del propio hablante?",
        ["Ojalá no hubiera dicho eso.", "Habrías podido callarte.", "Deberías haberlo pensado.", "Podrías haber llamado."],
        0,
        "Ojalá + pluscuamperfecto de subjuntivo expresa un lamento propio: ojalá no hubiera dicho eso. «Habrías podido callarte», «Deberías haberlo pensado» y «Podrías haber llamado» son reproches a otra persona."
      ),
      toEs("You should have asked me.", "Deberías habérmelo preguntado.", "«Deberías haber» + participio expresa un reproche; los pronombres se unen al infinitivo.", ["Me lo deberías haber preguntado.", "Tendrías que habérmelo preguntado.", "Deberías haberme preguntado."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-habla-de-ti-otra-epoca",
    "Habla de ti: si hubieras nacido en otra época",
    "Imagina tu vida en otro siglo con condicionales mixtas.",
    "6 min",
    [
      sec(
        "Otra época",
        "Si hubiera nacido en 1900, no habría ido a la universidad. Si hubiera vivido en la Edad Media, ahora sería un fantasma. Si hubiera nacido en el futuro, quizá viviría en Marte.",
        [
          ["Si hubiera nacido en 1900, no habría ido a la universidad.", "If I had been born in 1900, I wouldn't have gone to university."],
        ],
        [
          fb("Tu época.", "Si ___ en 1900, no habría ido a la universidad. (nacer)", "hubiera nacido", "Condición pasada."),
        ]
      ),
    ],
    [
      fb("Tu época.", "Si hubiera nacido en 1900, ___ en el campo. (trabajar)", "habría trabajado", "Consecuencia pasada."),
      fb("Tu época.", "Si hubiera vivido en Roma, ___ latín. (hablar)", "habría hablado", "Consecuencia pasada."),
      fb("Tu época.", "Si ___ en el siglo XXII, quizá viviría en Marte. (nacer)", "hubiera nacido", "Condición."),
      fb("Tu época.", "Si mis abuelos hubieran tenido internet, ___ muchas fotos. (hacer)", "habrían hecho", "Consecuencia pasada."),
      fb("Tu época.", "Si ___ en los años sesenta, habría ido a conciertos de los Beatles. (ser, yo, joven)", "hubiera sido", "Ser → sido."),
      toEs("If I had lived in the 18th century, I would have been a sailor.", "Si hubiera vivido en el siglo XVIII, habría sido marinero.", "Condición irreal en el pasado: «si hubiera vivido» + «habría sido».", ["Si hubiese vivido en el siglo XVIII, habría sido marinero.", "Si hubiera vivido en el siglo XVIII, hubiera sido marinero."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-elige-tiempo-condicional",
    "Elige y explica: ¿qué estructura necesita cada situación?",
    "Real, irreal presente, irreal pasado o mixta.",
    "6 min",
    [
      sec(
        "Cuatro situaciones",
        "Real: Si llueve, no salgo. Irreal presente: Si lloviera, no saldría. Irreal pasado: Si hubiera llovido, no habría salido. Mixta: Si hubiera llovido, ahora el jardín estaría verde.",
        [
          ["Si hubiera llovido, ahora el jardín estaría verde.", "If it had rained, the garden would be green now."],
        ],
        [
          mc(
            "Ayer no llovió y hoy el jardín está seco: «Si ___, ahora el jardín estaría verde.»",
            ["hubiera llovido", "lloviera", "llueve", "habría llovido"],
            0,
            "Condicional mixto: condición pasada (ayer no llovió) → si hubiera llovido; consecuencia presente → estaría. «Lloviera» mira al presente, «llueve» es real y «habría llovido» no va tras si."
          ),
        ]
      ),
    ],
    [
      mc("Mañana puede que haga sol: «Si ___ sol, iremos a la playa.»", ["hace", "hiciera", "hubiera hecho", "haría"], 0, "Posible mañana: condición real, si + presente, hace. «Hiciera» y «hubiera hecho» son hipotéticos, y «haría» no va tras si."),
      mc("Hoy está nublado todo el día: «Si ___ sol, iríamos a la playa.»", ["hiciera", "hace", "hubiera hecho", "haga"], 0, "Hoy está nublado: irreal en el presente → si + imperfecto de subjuntivo, hiciera. «Hace» sería real, «hubiera hecho» se refiere al pasado y «haga» no va tras si."),
      mc("El verano pasado llovió mucho: «Si ___ más sol, habríamos ido más a la playa.»", ["hubiera hecho", "hiciera", "hace", "habría hecho"], 0, "El verano pasado ya pasó: irreal en el pasado → si + pluscuamperfecto de subjuntivo, hubiera hecho. «Hiciera» mira al presente, «hace» es real y «habría hecho» no va tras si."),
      fb("Completa.", "Si ___ la lotería el año pasado, ahora no trabajaría. (ganar, yo)", "hubiera ganado", "Mixta."),
      fb("Completa.", "Si ___ la lotería, dejaría de trabajar. (ganar, yo)", "ganara", "Irreal presente."),
      fb("Completa.", "Si ___ la lotería este sábado, invito a todos. (ganar, yo)", "gano", "Real: si + presente."),
      toEs("If you had come yesterday, you would have met my brother.", "Si hubieras venido ayer, habrías conocido a mi hermano.", "Condición irreal en el pasado: «si hubieras venido» + «habrías conocido».", ["Si hubieses venido ayer, habrías conocido a mi hermano.", "Si hubieras venido ayer, hubieras conocido a mi hermano."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-ronda-irreal-pasado",
    "Ronda rápida: hubiera + participio en todas las personas",
    "Forma rápidamente el pluscuamperfecto de subjuntivo y el condicional perfecto.",
    "5 min",
    [
      sec(
        "Las formas",
        "hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran + participio. habría, habrías, habría, habríamos, habríais, habrían + participio.",
        [
          ["Si hubierais llegado antes, habríais visto el final.", "If you had arrived earlier, you would have seen the end."],
        ],
        [
          fb("Rápido.", "Si ___ antes, habríais visto el final. (llegar, vosotros)", "hubierais llegado", "Vosotros."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si hubierais llegado antes, ___ el final. (ver, vosotros)", "habríais visto", "Vosotros."),
      fb("Rápido.", "Si ellos ___ más, habrían ganado. (entrenar)", "hubieran entrenado", "Ellos."),
      fb("Rápido.", "Si hubiéramos sabido, ___ antes. (venir, nosotros)", "habríamos venido", "Nosotros."),
      fb("Rápido.", "Si usted ___ el formulario, ya tendría la tarjeta. (rellenar)", "hubiera rellenado", "Usted."),
      fb("Rápido.", "Si tú me lo hubieras pedido, yo te lo ___. (dar)", "habría dado", "Persona: yo."),
      fb("Rápido.", "Si no ___ tanto, no se habrían cansado. (correr, ellas)", "hubieran corrido", "Ellas."),
      fb("Rápido.", "Si hubiera nevado, ___ las clases. (suspenderse)", "se habrían suspendido", "Se + habrían."),
      mc(
        "«Si ___ el móvil, te habríamos llamado.» (tener, nosotros)",
        ["hubiéramos tenido", "habríamos tenido", "tuviéramos tenido", "hubiéramos tenemos"],
        0,
        "Pluscuamperfecto de subjuntivo: hubiéramos + participio (tenido). «Habríamos tenido» no va tras si, y «tuviéramos tenido» y «hubiéramos tenemos» no son formas posibles."
      ),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-frase-a-frase-carta-perdon",
    "Frase a frase: una carta de disculpa",
    "Construye una disculpa con arrepentimientos y condiciones irreales.",
    "6 min",
    [
      sec(
        "La disculpa",
        "1) Reconoce el error: Siento no haber venido. 2) Arrepentimiento: Ojalá hubiera ido. 3) Hipótesis: Si hubiera sabido lo importante que era, habría cancelado el viaje. 4) Propuesta: Me encantaría que nos viéramos pronto.",
        [
          ["Siento no haber venido a tu cumpleaños.", "I'm sorry I didn't come to your birthday."],
        ],
        [
          fb("Paso 1.", "Siento no ___ a tu cumpleaños. (venir)", "haber venido", "Siento + infinitivo compuesto."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Ojalá ___ ido. (yo)", "hubiera", "Arrepentimiento."),
      fb("Paso 3.", "Si hubiera sabido lo importante que era, ___ el viaje. (cancelar)", "habría cancelado", "Consecuencia pasada."),
      fb("Paso 3.", "Si me lo ___ antes, habría cambiado mis planes. (decir, tú)", "hubieras dicho", "Condición pasada."),
      fb("Paso 4.", "Me encantaría que nos ___ pronto. (ver)", "viéramos", "Condicional → imperfecto de subjuntivo."),
      fb("Paso 4.", "Si te ___ bien, te invito a cenar el sábado. (venir)", "viene", "Real: si + presente."),
      toEs("I'm sorry I didn't call you.", "Siento no haberte llamado.", "Con el mismo sujeto, «sentir» + infinitivo compuesto habla de algo pasado: «no haberte llamado».", ["Siento no haberte llamado antes.", "Perdona por no haberte llamado."]),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-mezcla-hipotesis-completa",
    "Práctica mezclada: todas las hipótesis",
    "Si, ojalá y como si en presente y pasado.",
    "7 min",
    [
      sec(
        "Un repaso completo",
        "Si + presente (real). Si + imperfecto de subjuntivo (irreal presente). Si + pluscuamperfecto de subjuntivo (irreal pasado). Ojalá y como si siguen el mismo esquema.",
        [
          ["Ojalá lo hubiera sabido.", "I wish I had known."],
        ],
        [
          fb("Completa.", "Si ___ tiempo esta tarde, te llamo. (tener, yo)", "tengo", "Real: si + presente."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ tiempo, estudiaría chino. (tener, yo)", "tuviera", "Irreal presente."),
      fb("Completa.", "Si ___ tiempo el año pasado, habría estudiado chino. (tener, yo)", "hubiera tenido", "Irreal pasado."),
      fb("Completa.", "Ojalá ___ tiempo para todo. (tener, yo)", "tuviera", "Deseo irreal presente."),
      fb("Completa.", "Ojalá ___ más tiempo con mi abuelo. (pasar, yo)", "hubiera pasado", "Lamento pasado."),
      fb("Completa.", "Habla de ese viaje como si ___ ayer. (ser)", "fuera", "Como si + imperfecto."),
      fb("Completa.", "Habla de ese viaje como si ___ allí. (estar, él — pero nunca fue)", "hubiera estado", "Como si + pluscuamperfecto."),
      toEs("If you had asked me, I would have said yes.", "Si me lo hubieras preguntado, habría dicho que sí.", "Condición irreal en el pasado: «si me lo hubieras preguntado» + «habría dicho».", ["Si me lo hubieses preguntado, habría dicho que sí.", "Si me hubieras preguntado, habría dicho que sí."]),
    ]
  ),
  L(
    "reported-speech-1",
    "b2d-patron-dijo-que",
    "Práctica de patrones: «Estoy cansado» → dijo que estaba cansado",
    "Un solo marco (dijo que…) para practicar el retroceso de tiempos.",
    "6 min",
    [
      sec(
        "El retroceso",
        "Con dijo que / contó que / explicó que: presente → imperfecto; indefinido y perfecto → pluscuamperfecto; futuro → condicional. «Estoy cansado» → Dijo que estaba cansado. «Iré mañana» → Dijo que iría al día siguiente.",
        [
          ["«Tengo hambre.» → Dijo que tenía hambre.", "He said he was hungry."],
          ["«Vendré el lunes.» → Dijo que vendría el lunes.", "She said she would come on Monday."],
        ],
        [
          fb("Mismo marco.", "«Vivo en Quito.» → Dijo que ___ en Quito.", "vivía", "En estilo indirecto con dijo, el presente pasa a imperfecto: vivo → vivía."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "«Estoy de vacaciones.» → Dijo que ___ de vacaciones.", "estaba", "Presente → imperfecto: estoy → estaba."),
      fb("Mismo marco.", "«Perdí las llaves.» → Dijo que ___ las llaves.", "había perdido", "El pretérito pasa a pluscuamperfecto: perdí → había perdido."),
      fb("Mismo marco.", "«He terminado.» → Dijo que ___.", "había terminado", "El pretérito perfecto pasa a pluscuamperfecto: he terminado → había terminado."),
      fb("Mismo marco.", "«Llamaré a mi madre.» → Dijo que ___ a su madre.", "llamaría", "El futuro pasa a condicional: llamaré → llamaría."),
      fb("Mismo marco.", "«No puedo ir.» → Dijo que no ___ ir.", "podía", "Presente → imperfecto: no puedo → no podía."),
      fb("Mismo marco.", "«Saldremos pronto.» → Dijeron que ___ pronto.", "saldrían", "Futuro → condicional; salir usa la raíz saldr-: saldrían."),
      mc(
        "«Nunca he visto la nieve.» → Dijo que nunca ___ la nieve.",
        ["había visto", "ha visto", "vio", "vería"],
        0,
        "En estilo indirecto con dijo, el perfecto (he visto) pasa a pluscuamperfecto: había visto. «Ha visto» no retrocede, «vio» pierde el matiz y «vería» es futuro del pasado."
      ),
      toEs("She said she was tired.", "Dijo que estaba cansada.", "En estilo indirecto con «dijo», el presente «estoy» pasa a imperfecto «estaba»."),
    ]
  ),
  L(
    "reported-speech-1",
    "b2d-circuito-marcadores-tiempo",
    "Circuito: hoy → aquel día, mañana → al día siguiente",
    "Las palabras de tiempo y lugar también cambian.",
    "6 min",
    [
      sec(
        "Referencias que se mueven",
        "hoy → ese/aquel día; mañana → al día siguiente; ayer → el día anterior; ahora → entonces; aquí → allí; este → ese/aquel; la semana que viene → la semana siguiente.",
        [
          ["«Llegué ayer.» → Dijo que había llegado el día anterior.", "He said he had arrived the day before."],
        ],
        [
          fb("Estación 1.", "«Hoy no trabajo.» → Dijo que ___ no trabajaba.", "ese día", "En estilo indirecto pasado, «hoy» pasa a «ese día»."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "«Mañana voy al médico.» → Dijo que ___ iba al médico.", "al día siguiente", "«Mañana» pasa a «al día siguiente»."),
      fb("Estación 1.", "«Ayer llovió.» → Dijo que ___ había llovido.", "el día anterior", "«Ayer» pasa a «el día anterior»."),
      fb("Estación 2.", "«Aquí se come muy bien.» → Dijo que ___ se comía muy bien.", "allí", "«Aquí» pasa a «allí», porque el que cuenta ya no está en ese lugar."),
      fb("Estación 2.", "«Ahora estoy ocupado.» → Dijo que ___ estaba ocupado.", "entonces", "«Ahora» pasa a «entonces» (o «en ese momento»)."),
      fb("Estación 3.", "«Este libro es mío.» → Dijo que ___ libro era suyo.", "ese", "Los demostrativos se alejan: «este» pasa a «ese»."),
      fb("Estación 3.", "«Volveré la semana que viene.» → Dijo que volvería la semana ___.", "siguiente", "«La semana que viene» pasa a «la semana siguiente»."),
      mc(
        "«Nos vemos mañana aquí.» → Dijo que nos veríamos ___.",
        ["al día siguiente allí", "mañana aquí", "ayer allí", "hoy aquí"],
        0,
        "En estilo indirecto pasado, mañana → al día siguiente y aquí → allí. Las otras opciones dejan sin cambiar los marcadores o los cambian en la dirección equivocada."
      ),
      toEs("He said he had arrived the day before.", "Dijo que había llegado el día anterior.", "En estilo indirecto, el indefinido pasa a pluscuamperfecto y «ayer» a «el día anterior».", ["Dijo que había llegado el día antes."]),
    ]
  ),
  L(
    "reported-speech-1",
    "b2d-cadena-mandatos-indirectos",
    "Cadena de transformaciones: «Ven» → me dijo que fuera",
    "Los mandatos se convierten en que + subjuntivo, con secuencia de tiempos.",
    "6 min",
    [
      sec(
        "Órdenes contadas",
        "Me dice que + presente de subjuntivo: «Ven» → Me dice que vaya. Me dijo que + imperfecto de subjuntivo: «Ven» → Me dijo que fuera. Ojo: venir/ir y traer/llevar pueden cambiar según la perspectiva.",
        [
          ["«Cierra la puerta.» → Me dijo que cerrara la puerta.", "She told me to close the door."],
          ["«No llegues tarde.» → Me pidió que no llegara tarde.", "He asked me not to be late."],
        ],
        [
          fb("Pasado.", "«Llámame.» → Me dijo que lo ___.", "llamara", "Una orden reportada en pasado va en imperfecto de subjuntivo: que lo llamara."),
        ]
      ),
    ],
    [
      fb("Pasado.", "«Siéntate.» → Me dijo que me ___.", "sentara", "Orden reportada → imperfecto de subjuntivo, con el reflexivo delante: que me sentara."),
      fb("Pasado.", "«No toques nada.» → Me pidió que no ___ nada.", "tocara", "Una orden negativa reportada también va en imperfecto de subjuntivo: que no tocara."),
      fb("Pasado.", "«Traed algo de postre.» → Nos pidió que ___ algo de postre.", "lleváramos", "Traer → llevar desde otro lugar."),
      fb("Pasado.", "«Hazlo ahora.» → Me dijo que lo ___ en ese momento.", "hiciera", "Orden → imperfecto de subjuntivo (hiciera), y «ahora» pasa a «en ese momento»."),
      fb("Presente.", "«Ven a cenar.» → Mi madre dice que ___ a cenar.", "vayas", "Con el verbo introductorio en presente (dice), la orden va en presente de subjuntivo; «ven» pasa a ir, desde la perspectiva de quien cuenta: vayas."),
      fb("Presente.", "«No hagáis ruido.» → El vecino dice que no ___ ruido.", "hagáis", "Con «dice» (presente), la orden se reporta en presente de subjuntivo, sin retroceder: no hagáis."),
      toEs("The teacher told us to be quiet.", "La profesora nos dijo que nos calláramos.", "Una orden en estilo indirecto en pasado va en imperfecto de subjuntivo: «nos calláramos».", ["El profesor nos dijo que nos calláramos.", "La profesora nos dijo que nos callásemos."]),
    ]
  ),
  L(
    "reported-speech-1",
    "b2d-elige-informar-o-pedir",
    "Elige y explica: dijo que venía / dijo que viniera",
    "Decir para informar (indicativo) o para ordenar (subjuntivo).",
    "6 min",
    [
      sec(
        "Dos decir",
        "Informar: «Vengo mañana» → Dijo que venía al día siguiente. Pedir: «Ven mañana» → Dijo que viniera al día siguiente. El modo revela si fue información o petición.",
        [
          ["Dijo que salía temprano.", "He said he was leaving early."],
          ["Dijo que saliera temprano.", "He told me to leave early."],
        ],
        [
          mc(
            "«Salgo a las cinco.» → Dijo que ___ a las cinco.",
            ["salía", "saliera", "salga", "saldría mañana"],
            0,
            "«Salgo a las cinco» es información, así que en estilo indirecto va en indicativo: salía. «Saliera» y «salga» son subjuntivo (para órdenes) y «saldría mañana» cambia el sentido."
          ),
        ]
      ),
    ],
    [
      mc("«Sal a las cinco.» → Me dijo que ___ a las cinco.", ["saliera", "salía", "salgo", "saldría"], 0, "«Sal» es una orden, y una orden reportada en pasado va en imperfecto de subjuntivo: que saliera. «Salía» convierte la orden en información, «salgo» es presente y «saldría» es condicional."),
      fb("Elige.", "«Compro yo el pan.» → Dijo que ___ él el pan.", "compraba", "«Compro yo el pan» es información: se reporta en indicativo, compraba."),
      fb("Elige.", "«Compra tú el pan.» → Me dijo que ___ yo el pan.", "comprara", "«Compra tú» es una orden: se reporta en imperfecto de subjuntivo, comprara."),
      fb("Elige.", "«Estudio en la biblioteca.» → Dijo que ___ en la biblioteca.", "estudiaba", "Información → indicativo, con el presente pasado a imperfecto: estudiaba."),
      fb("Elige.", "«Estudia en la biblioteca.» → Me dijo que ___ en la biblioteca.", "estudiara", "Orden → imperfecto de subjuntivo: estudiara."),
      toEs("She told us to wait outside.", "Nos dijo que esperáramos fuera.", "«Decir que» con valor de orden exige subjuntivo: «esperáramos».", ["Nos dijo que esperásemos fuera.", "Nos dijo que esperáramos afuera."]),
      toEs("She told us she was waiting outside.", "Nos dijo que estaba esperando fuera.", "«Decir que» cuando solo informa va en indicativo: «estaba esperando».", ["Nos dijo que esperaba fuera.", "Nos dijo que estaba esperando afuera."]),
    ]
  ),
  L(
    "reported-speech-2",
    "b2d-cuento-declaracion-oficial",
    "Cuento con huecos: la declaración de la alcaldesa",
    "Un periodista resume lo que dijo la alcaldesa en la rueda de prensa.",
    "7 min",
    [
      sec(
        "Las palabras originales",
        "«Hoy presentamos el nuevo plan de transporte. El año pasado aumentó el tráfico un diez por ciento. Mañana empezarán las obras en el centro. Pido a los vecinos que tengan paciencia.»",
        [
          ["La alcaldesa anunció que ese día presentaban el nuevo plan.", "The mayor announced that they were presenting the new plan that day."],
        ],
        [
          fb("La crónica.", "La alcaldesa anunció que ese día ___ el nuevo plan de transporte. (presentar, ellos)", "presentaban", "Presente → imperfecto."),
        ]
      ),
    ],
    [
      fb("La crónica.", "Explicó que el año anterior ___ el tráfico un diez por ciento. (aumentar)", "había aumentado", "Indefinido → pluscuamperfecto."),
      fb("La crónica.", "Añadió que al día siguiente ___ las obras en el centro. (empezar)", "empezarían", "Futuro → condicional."),
      fb("La crónica.", "Pidió a los vecinos que ___ paciencia. (tener)", "tuvieran", "Pido que + presente → pidió que + imperfecto."),
      fb("La crónica.", "Aseguró que las obras no ___ más de dos meses. (durar)", "durarían", "Futuro → condicional."),
      fb("La crónica.", "Reconoció que el plan ___ polémico. (ser — «es polémico»)", "era", "Presente → imperfecto."),
      mc(
        "«Hemos escuchado a los vecinos.» → Afirmó que ___ a los vecinos.",
        ["habían escuchado", "han escuchado", "escucharon", "escucharían"],
        0,
        "Con afirmó (pasado), el perfecto «hemos escuchado» pasa a pluscuamperfecto: habían escuchado. «Han escuchado» no retrocede, «escucharon» pierde la anterioridad y «escucharían» es futuro del pasado."
      ),
      toEs("She said the works would begin the next day.", "Dijo que las obras empezarían al día siguiente.", "En estilo indirecto con «dijo», el futuro pasa a condicional: «empezarían»; «mañana» pasa a «al día siguiente».", ["Dijo que las obras comenzarían al día siguiente."]),
    ]
  ),
  L(
    "reported-speech-2",
    "b2d-preguntas-indirectas",
    "Preguntas y respuestas: me preguntó si… / me preguntó dónde…",
    "Preguntas en estilo indirecto: si para sí/no, interrogativo con tilde para las demás.",
    "6 min",
    [
      sec(
        "Preguntas contadas",
        "Preguntas de sí o no → si: «¿Tienes hambre?» → Me preguntó si tenía hambre. Con interrogativo: «¿Dónde vives?» → Me preguntó dónde vivía. El interrogativo mantiene la tilde; no se añade «que».",
        [
          ["Me preguntó si tenía hermanos.", "He asked me if I had siblings."],
          ["Me preguntó cuándo volvería.", "She asked me when I would come back."],
        ],
        [
          fb("Indirecta.", "«¿Estás bien?» → Me preguntó ___ estaba bien.", "si", "Una pregunta de sí o no se reporta con «si» (sin tilde): me preguntó si estaba bien."),
        ]
      ),
    ],
    [
      fb("Indirecta.", "«¿Dónde trabajas?» → Me preguntó ___ trabajaba.", "dónde", "La palabra interrogativa se conserva con su tilde: dónde."),
      fb("Indirecta.", "«¿Cuándo llegaste?» → Me preguntó cuándo ___.", "había llegado", "En la pregunta indirecta, el pretérito pasa a pluscuamperfecto: había llegado."),
      fb("Indirecta.", "«¿Vendrás a la boda?» → Me preguntó si ___ a la boda.", "iría", "Futuro → condicional; venir → ir."),
      fb("Indirecta.", "«¿Por qué lloras?» → Me preguntó por qué ___.", "lloraba", "Presente → imperfecto: lloras → lloraba."),
      fb("Indirecta.", "«¿Qué has comprado?» → Me preguntó qué ___.", "había comprado", "Perfecto → pluscuamperfecto: has comprado → había comprado."),
      mc(
        "«¿Cuántos años tienes?» → Me preguntó ___.",
        ["cuántos años tenía", "que cuántos años tengo", "si cuántos años tenía", "cuantos años tenía yo tienes"],
        0,
        "La pregunta indirecta conserva la palabra interrogativa (cuántos) y el presente pasa a imperfecto: tenía. «Que cuántos… tengo» no retrocede el tiempo, «si cuántos» junta dos formas de pregunta y la última mezcla personas."
      ),
      toEs("She asked me if I spoke English.", "Me preguntó si hablaba inglés.", "Una pregunta de sí o no se transmite con «si»: «me preguntó si hablaba».", ["Me preguntó si yo hablaba inglés."]),
    ]
  ),
  L(
    "reported-speech-2",
    "b2d-corrige-estilo-indirecto",
    "Corrige el párrafo: un resumen mal contado",
    "Errores de tiempo y de referencias en estilo indirecto.",
    "6 min",
    [
      sec(
        "El resumen",
        "«Mi hermano me dijo que está muy ocupado y que vendrá mañana. También me preguntó que si necesitaba algo. Me pidió que le llamo antes de salir.» Cuatro errores.",
        [
          ["Me dijo que estaba muy ocupado.", "He told me he was very busy."],
        ],
        [
          mc(
            "¿Qué falla en «me preguntó que si necesitaba algo»?",
            ["En registro cuidado sobra «que» antes de si.", "Falta la tilde.", "Debe ser «necesito».", "Nada."],
            0,
            "En registro cuidado, «preguntar si» va sin «que» delante: me preguntó si necesitaba algo. No falta tilde (si = whether), «necesito» no retrocede el tiempo y sí hay algo que corregir."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Me dijo que está muy ocupado.» (lo dijo la semana pasada)", "Me dijo que estaba muy ocupado.", "Si lo dijo en el pasado, el presente pasa a imperfecto: «estaba»."),
      toEs("Corrige: «Me dijo que vendrá mañana.» (lo dijo hace un mes)", "Me dijo que vendría al día siguiente.", "Futuro → condicional; mañana → al día siguiente.", ["Me dijo que iría al día siguiente."]),
      toEs("Corrige: «Me preguntó que si necesitaba algo.»", "Me preguntó si necesitaba algo.", "En la pregunta indirecta formal va «si» sin «que» delante: «me preguntó si…»."),
      toEs("Corrige: «Me pidió que le llamo antes de salir.»", "Me pidió que lo llamara antes de salir.", "Pedir que + imperfecto de subjuntivo.", ["Me pidió que le llamara antes de salir."]),
      toEs("Corrige: «Me preguntó donde estaba.»", "Me preguntó dónde estaba.", "En la pregunta indirecta, el interrogativo mantiene la tilde: «dónde»."),
      ms(
        "¿Qué frases son correctas?",
        ["Dijo que llegaría tarde.", "Me preguntó si quería café.", "Dijo que llegará tarde ayer.", "Me preguntó qué si quería café."],
        [0, 1],
        "Futuro → condicional (dijo que llegaría) y pregunta de sí/no con «si», sin «que» ni tilde. «Llegará tarde ayer» mezcla tiempos y «qué si» junta dos formas de pregunta."
      ),
    ]
  ),
  L(
    "reported-speech-2",
    "b2d-habla-de-ti-conversacion",
    "Habla de ti: cuenta una conversación reciente",
    "Recuerda algo que te dijeron y cuéntalo en estilo indirecto.",
    "6 min",
    [
      sec(
        "Tu conversación",
        "Ayer hablé con mi amiga Leire. Me contó que había cambiado de trabajo y que estaba muy contenta. Me preguntó si iría a su fiesta. Me pidió que llevara postre.",
        [
          ["Me contó que había cambiado de trabajo.", "She told me she had changed jobs."],
        ],
        [
          fb("Tu conversación.", "Me contó que ___ de trabajo. (cambiar)", "había cambiado", "Indefinido/perfecto → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Tu conversación.", "…y que ___ muy contenta. (estar)", "estaba", "Presente → imperfecto."),
      fb("Tu conversación.", "Me preguntó si ___ a su fiesta. (ir, yo)", "iría", "Futuro → condicional."),
      fb("Tu conversación.", "Me pidió que ___ postre. (llevar)", "llevara", "Petición → imperfecto de subjuntivo."),
      fb("Tu conversación.", "Le dije que no ___ seguro. (estar, yo)", "estaba", "Presente → imperfecto."),
      fb("Tu conversación.", "Le prometí que la ___ el viernes. (llamar)", "llamaría", "Futuro → condicional."),
      toEs("My friend told me she was pregnant.", "Mi amiga me dijo que estaba embarazada.", "En estilo indirecto con «dijo», el presente pasa a imperfecto: «estaba».", ["Mi amiga me contó que estaba embarazada."]),
    ]
  ),
  L(
    "reported-speech-2",
    "b2d-ronda-retroceso",
    "Ronda rápida: el retroceso de tiempos",
    "Diez frases, un cambio de tiempo en cada una.",
    "5 min",
    [
      sec(
        "Tabla mental",
        "presente → imperfecto; imperfecto → imperfecto; indefinido → pluscuamperfecto; perfecto → pluscuamperfecto; futuro → condicional; condicional → condicional; presente de subjuntivo → imperfecto de subjuntivo.",
        [
          ["«Quiero que vengas.» → Dijo que quería que fuera.", "She said she wanted me to come."],
        ],
        [
          fb("Rápido.", "«Trabajo aquí.» → Dijo que ___ allí.", "trabajaba", "Presente → imperfecto: trabajo → trabajaba."),
        ]
      ),
    ],
    [
      fb("Rápido.", "«Trabajaba aquí.» → Dijo que ___ allí.", "trabajaba", "El imperfecto no cambia en estilo indirecto: trabajaba → trabajaba."),
      fb("Rápido.", "«Trabajé aquí.» → Dijo que ___ allí.", "había trabajado", "Pretérito → pluscuamperfecto: trabajé → había trabajado."),
      fb("Rápido.", "«Trabajaré aquí.» → Dijo que ___ allí.", "trabajaría", "Futuro → condicional: trabajaré → trabajaría."),
      fb("Rápido.", "«Trabajaría aquí.» → Dijo que ___ allí.", "trabajaría", "El condicional no cambia en estilo indirecto: trabajaría → trabajaría."),
      fb("Rápido.", "«Quiero que me ayudes.» → Dijo que quería que lo ___.", "ayudara", "Con quería (pasado), el presente de subjuntivo pasa a imperfecto: ayudes → ayudara."),
      fb("Rápido.", "«He dormido mal.» → Dijo que ___ mal.", "había dormido", "Perfecto → pluscuamperfecto: he dormido → había dormido."),
      fb("Rápido.", "«Había llovido.» → Dijo que ___.", "había llovido", "El pluscuamperfecto no cambia: había llovido → había llovido."),
      mc(
        "«Ojalá venga.» → Dijo que ojalá ___.",
        ["viniera", "venga", "vendría", "vino"],
        0,
        "En estilo indirecto pasado, el presente de subjuntivo pasa a imperfecto de subjuntivo: ojalá viniera. «Venga» no retrocede, y «vendría» y «vino» no pueden ir tras ojalá."
      ),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-linea-mensajes-voz",
    "Línea del tiempo: transmitir mensajes de voz",
    "Cuenta hoy lo que alguien dijo ayer, y lo que dijo hace un mes.",
    "6 min",
    [
      sec(
        "Cerca o lejos",
        "Si el mensaje sigue vigente, puedes no retroceder: «Llego el viernes» → Ha dicho que llega el viernes. Si lo cuentas mucho después, retrocedes: Dijo que llegaba el viernes / que llegaría ese viernes.",
        [
          ["Ha dicho que llega el viernes.", "He's said he's arriving on Friday."],
          ["Dijo que llegaría aquel viernes.", "He said he would arrive that Friday."],
        ],
        [
          fb("Hoy.", "«Estoy en el atasco.» → Ha dicho que ___ en el atasco.", "está", "Con «ha dicho» (pasado reciente) y la situación aún vigente, el verbo no cambia: «está»."),
        ]
      ),
    ],
    [
      fb("Hace un mes.", "«Estoy en el atasco.» → Dijo que ___ en el atasco.", "estaba", "Con «dijo» en pasado, el presente pasa a imperfecto: «estaba»."),
      fb("Hoy.", "«Te llamaré luego.» → Ha dicho que te ___ luego.", "llamará", "Con «ha dicho» y la promesa aún vigente, el futuro se mantiene: «llamará»."),
      fb("Hace un mes.", "«Te llamaré luego.» → Dijo que te ___ más tarde.", "llamaría", "Con «dijo» en pasado, el futuro pasa a condicional: «llamaría»."),
      fb("Hoy.", "«Compra leche.» → Ha dicho que ___ leche.", "compres", "Una orden en estilo indirecto va en subjuntivo; con «ha dicho», presente: «compres»."),
      fb("Hace un mes.", "«Compra leche.» → Dijo que ___ leche.", "compraras", "Una orden en estilo indirecto va en subjuntivo; con «dijo», imperfecto: «compraras»."),
      fb("Hoy.", "«He perdido el tren.» → Dice que ___ el tren.", "ha perdido", "Con «dice» en presente, los tiempos no cambian: «ha perdido»."),
      mc(
        "Mensaje de hace una hora: «Llego tarde.» → «Mamá ___ que llega tarde.»",
        ["ha dicho", "había dicho", "diría", "dijera"],
        0,
        "Si el mensaje es reciente, se reporta con pretérito perfecto y sin cambiar los tiempos: ha dicho que llega tarde. «Había dicho» y «diría» sitúan el mensaje en un pasado lejano, y «dijera» es subjuntivo."
      ),
      toEs("She has said she's coming tomorrow.", "Ha dicho que viene mañana.", "Con «ha dicho» y un plan aún vigente, el verbo no cambia: «viene mañana».", ["Ha dicho que vendrá mañana."]),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-verbos-introductores",
    "Circuito: aseguró, admitió, negó, prometió, advirtió",
    "Verbos introductores más precisos que decir.",
    "6 min",
    [
      sec(
        "Más allá de decir",
        "Asegurar (con certeza), admitir / reconocer (aceptar algo), negar (decir que no), prometer (compromiso futuro), advertir (avisar de un peligro), sugerir (proponer), quejarse de que (protestar). Negar que suele llevar subjuntivo: Negó que lo hubiera hecho.",
        [
          ["Admitió que se había equivocado.", "He admitted he had made a mistake."],
          ["Negó que lo hubiera robado.", "He denied having stolen it."],
        ],
        [
          fb("Estación 1.", "«Lo haré sin falta.» → ___ que lo haría sin falta.", "Prometió", "«Prometer» resume un compromiso sobre el futuro: «prometió que lo haría»."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "«Sí, me equivoqué.» → ___ que se había equivocado.", "Admitió", "«Admitir» resume el reconocimiento de un error: «admitió que se había equivocado»."),
      fb("Estación 2.", "«Cuidado, el suelo resbala.» → Nos ___ de que el suelo resbalaba.", "advirtió", "«Advertir de que» resume un aviso de peligro: «nos advirtió de que…»."),
      fb("Estación 2.", "«Yo no rompí la ventana.» → Negó que ___ la ventana.", "hubiera roto", "«Negar que» exige subjuntivo; la acción es anterior, así que va en pluscuamperfecto: «hubiera roto»."),
      fb("Estación 3.", "«¿Y si vamos en tren?» → ___ que fuéramos en tren.", "Sugirió", "«Sugerir que» + subjuntivo resume una propuesta: «sugirió que fuéramos»."),
      fb("Estación 3.", "«Siempre llegáis tarde.» → Se quejó de que siempre ___ tarde.", "llegábamos", "Con «se quejó» en pasado, el presente «llegáis» pasa a imperfecto: «llegábamos»."),
      fb("Estación 4.", "«Estoy seguro de que ganaremos.» → Aseguró que ___.", "ganarían", "Con «aseguró» en pasado, el futuro «ganaremos» pasa a condicional: «ganarían»."),
      mc(
        "«No, yo no dije eso.» → ___ haberlo dicho.",
        ["Negó", "Admitió", "Prometió", "Sugirió"],
        0,
        "«Yo no dije eso» es rechazar algo: negó haberlo dicho. Admitir es lo contrario, prometer es comprometerse y sugerir es proponer."
      ),
      toEs("He promised he would call me.", "Prometió que me llamaría.", "En estilo indirecto con «prometió», el futuro pasa a condicional: «llamaría».", ["Me prometió que me llamaría."]),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-cuento-telefono-roto",
    "Cuento con huecos: el teléfono escacharrado",
    "Un rumor pasa de boca en boca y cambia en cada paso.",
    "7 min",
    [
      sec(
        "El rumor",
        "Ana: «Me voy a mudar a Valencia.» Luis contó a Eva que Ana se iba a mudar a Valencia. Eva le dijo a Pablo que Ana se había mudado ya. Pablo le preguntó a Ana si era verdad que vivía en Valencia. Ana se rió y le dijo que todavía no había hecho ni las maletas.",
        [
          ["Luis contó que Ana se iba a mudar a Valencia.", "Luis said Ana was going to move to Valencia."],
        ],
        [
          fb("Completa.", "Luis contó que Ana se ___ a mudar a Valencia. (ir)", "iba", "Voy a → iba a."),
        ]
      ),
    ],
    [
      fb("Completa.", "Eva le dijo a Pablo que Ana ya se ___. (mudar)", "había mudado", "Pluscuamperfecto."),
      fb("Completa.", "Pablo le preguntó a Ana ___ era verdad. (si/que)", "si", "Pregunta de sí o no."),
      fb("Completa.", "…que ___ en Valencia. (vivir)", "vivía", "Presente → imperfecto."),
      fb("Completa.", "Ana le dijo que todavía no ___ ni las maletas. (hacer)", "había hecho", "Perfecto → pluscuamperfecto."),
      fb("Completa.", "Ana le pidió que no ___ rumores. (difundir)", "difundiera", "Petición en pasado."),
      mc(
        "«Me voy a mudar.» → Dijo que ___.",
        ["se iba a mudar", "se va a mudar ayer", "se fuera a mudar", "se irá a mudar"],
        0,
        "En estilo indirecto pasado, «voy a» pasa a «iba a»: se iba a mudar. «Se va a mudar ayer» mezcla tiempos, «se fuera» es subjuntivo y «se irá» no retrocede."
      ),
      toEs("She asked me if it was true.", "Me preguntó si era verdad.", "Pregunta de sí o no → «si»; el presente pasa a imperfecto: «era».", ["Me preguntó si era cierto."]),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-dictado-estilo-indirecto",
    "Dictado: estilo indirecto",
    "Frases con verbos introductores y cambios de tiempo.",
    "5 min",
    [
      sec(
        "Escucha el cambio",
        "Atención a dos cosas: el verbo introductor (dijo, preguntó, pidió) y el tiempo que viene después.",
        [
          ["Me preguntó si había comido.", "He asked me if I had eaten."],
        ],
        [
          wo("Nos dijo que volvería al día siguiente.", "Futuro → condicional.", "He told us he would come back the next day."),
        ]
      ),
    ],
    [
      wo("Me preguntó dónde había aparcado.", "Pregunta con interrogativo.", "She asked me where I had parked."),
      wo("Les pidió que no hicieran ruido.", "Petición.", "He asked them not to make noise."),
      wo("Reconoció que no había leído el informe.", "Admitir.", "She admitted she hadn't read the report."),
      wo("Me advirtió que la carretera estaba cortada.", "Advertir.", "He warned me that the road was closed."),
      toEs("They told us they had already eaten.", "Nos dijeron que ya habían comido.", "En estilo indirecto, el pretérito perfecto pasa a pluscuamperfecto: «habían comido».", ["Nos contaron que ya habían comido."]),
      toEs("He asked me what time it was.", "Me preguntó qué hora era.", "En la pregunta indirecta se mantiene el interrogativo con tilde («qué») y el presente pasa a imperfecto."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-frase-a-frase-acta",
    "Frase a frase: el acta de la reunión",
    "Convierte las intervenciones de una reunión en un acta formal.",
    "6 min",
    [
      sec(
        "Las intervenciones",
        "Directora: «Las ventas han bajado.» Juan: «Propongo que abramos una tienda online.» Sara: «No estoy de acuerdo; es demasiado caro.» Directora: «Lo decidiremos el mes que viene.»",
        [
          ["La directora informó de que las ventas habían bajado.", "The director reported that sales had fallen."],
        ],
        [
          fb("Acta.", "La directora informó de que las ventas ___. (bajar)", "habían bajado", "Perfecto → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Acta.", "Juan propuso que ___ una tienda online. (abrir, nosotros)", "abriéramos", "Proponer que + imperfecto de subjuntivo."),
      fb("Acta.", "Sara manifestó que no ___ de acuerdo. (estar)", "estaba", "Presente → imperfecto."),
      fb("Acta.", "…porque ___ demasiado caro. (ser)", "era", "Presente → imperfecto."),
      fb("Acta.", "La directora concluyó que lo ___ el mes siguiente. (decidir, ellos)", "decidirían", "Futuro → condicional."),
      fb("Acta.", "Juan preguntó cuánto ___ la web. (costar, condicional)", "costaría", "Pregunta indirecta."),
      toEs("Sara said she didn't agree.", "Sara dijo que no estaba de acuerdo.", "En estilo indirecto con «dijo», el presente pasa a imperfecto: «estaba»."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-corrige-indirecto-mandatos",
    "Corrige el párrafo: mandatos e interrogativos mal transmitidos",
    "Errores de modo en las peticiones y de forma en las preguntas.",
    "6 min",
    [
      sec(
        "La nota",
        "«El jefe me dijo que termino el informe hoy. Me pidió que le mandaba una copia. Después me preguntó que cuándo me iba de vacaciones y si que tenía planes.» Cuatro errores.",
        [
          ["El jefe me dijo que terminara el informe ese día.", "The boss told me to finish the report that day."],
        ],
        [
          mc(
            "¿Por qué «me pidió que le mandaba» es un error?",
            ["Pedir que exige subjuntivo: mandara.", "Falta la tilde.", "Sobra «le».", "Nada."],
            0,
            "«Pedir que» transmite una petición y exige subjuntivo; en pasado, mandara. No falta tilde y «le» no sobra (le = a esa persona)."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «El jefe me dijo que termino el informe hoy.»", "El jefe me dijo que terminara el informe ese día.", "Orden → subjuntivo; hoy → ese día.", ["El jefe me dijo que terminara el informe hoy."]),
      toEs("Corrige: «Me pidió que le mandaba una copia.»", "Me pidió que le mandara una copia.", "«Pedir que» exige subjuntivo; en pasado, imperfecto: «mandara», no «mandaba»."),
      toEs("Corrige: «Me preguntó que cuándo me iba de vacaciones.»", "Me preguntó cuándo me iba de vacaciones.", "En registro cuidado, el interrogativo va directamente tras «preguntó», sin «que»."),
      toEs("Corrige: «Me preguntó si que tenía planes.»", "Me preguntó si tenía planes.", "En la pregunta indirecta va «si» solo, sin «que»: «me preguntó si…»."),
      toEs("Corrige: «Nos dijo que no fumamos en la sala.» (era una orden)", "Nos dijo que no fumáramos en la sala.", "Si «decir» transmite una orden, va con subjuntivo: «no fumáramos»."),
      ms(
        "¿Qué frases transmiten una orden?",
        ["Me dijo que me callara.", "Nos pidió que esperáramos.", "Me dijo que se callaba.", "Nos contó que esperaba."],
        [0, 1],
        "Una orden reportada va con subjuntivo: me dijo que me callara, nos pidió que esperáramos. «Me dijo que se callaba» y «Nos contó que esperaba» usan indicativo: informan de un hecho, no de una orden."
      ),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-mezcla-entrevista",
    "Práctica mezclada: la entrevista de trabajo contada",
    "Afirmaciones, preguntas y peticiones en un solo relato.",
    "7 min",
    [
      sec(
        "La entrevista",
        "Entrevistadora: «¿Por qué quiere trabajar aquí? ¿Ha trabajado antes en equipo? Envíenos sus referencias. Le llamaremos la semana que viene.»",
        [
          ["Me preguntó por qué quería trabajar allí.", "She asked me why I wanted to work there."],
        ],
        [
          fb("Cuéntalo.", "Me preguntó por qué ___ trabajar allí. (querer, yo)", "quería", "Presente → imperfecto."),
        ]
      ),
    ],
    [
      fb("Cuéntalo.", "Me preguntó si ___ antes en equipo. (trabajar)", "había trabajado", "Perfecto → pluscuamperfecto."),
      fb("Cuéntalo.", "Me pidió que les ___ mis referencias. (enviar)", "enviara", "Petición → imperfecto de subjuntivo."),
      fb("Cuéntalo.", "Dijo que me ___ la semana siguiente. (llamar, ellos)", "llamarían", "Futuro → condicional."),
      fb("Cuéntalo.", "Le contesté que siempre ___ en equipo. (haber trabajado)", "había trabajado", "Perfecto → pluscuamperfecto."),
      fb("Cuéntalo.", "Le aseguré que ___ disponibilidad inmediata. (tener, yo)", "tenía", "Presente → imperfecto."),
      mc(
        "«¿Cuándo puede empezar?» → Me preguntó cuándo ___ empezar.",
        ["podía", "puedo", "pudiera", "pueda"],
        0,
        "En la pregunta indirecta pasada, el presente pasa a imperfecto de indicativo: podía. «Puedo» no retrocede, y «pudiera» y «pueda» son subjuntivo, que no se usa en preguntas indirectas."
      ),
      toEs("She told me they would call me.", "Me dijo que me llamarían.", "En estilo indirecto con «dijo», el futuro pasa a condicional: «llamarían».", ["Me dijo que me iban a llamar."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-1",
    "b2d-pares-ser-estar-adjetivos",
    "Pares mínimos: es listo / está listo",
    "Adjetivos que cambian de significado según el verbo.",
    "6 min",
    [
      sec(
        "Dos significados",
        "listo: es listo (inteligente) / está listo (preparado). rico: es rico (tiene dinero) / está rico (sabe bien). malo: es malo (mala persona o calidad) / está malo (enfermo). aburrido: es aburrido (aburre) / está aburrido (siente aburrimiento). Otros: verde, orgulloso, despierto, atento.",
        [
          ["Mi hermano es muy listo.", "My brother is very clever."],
          ["¿Estás listo? Nos vamos.", "Are you ready? We're leaving."],
        ],
        [
          fb("Par.", "Este gazpacho ___ riquísimo. (delicioso)", "está", "Estar rico = saber bien."),
        ]
      ),
    ],
    [
      fb("Par.", "Su familia ___ muy rica; tienen tres casas.", "es", "«Ser rico» = tener dinero, una característica; «estar rico» se dice de la comida sabrosa."),
      fb("Par.", "No voy a trabajar; ___ malo desde ayer.", "estoy", "«Estar malo» = estar enfermo; «ser malo» = ser mala persona o de mala calidad."),
      fb("Par.", "Esa película ___ mala; no la veas.", "es", "Ser malo = de mala calidad."),
      fb("Par.", "El profesor ___ aburrido; nadie atiende en clase.", "es", "«Ser aburrido» = aburrir a los demás, una característica del profesor."),
      fb("Par.", "Los alumnos ___ aburridos; miran por la ventana.", "están", "«Estar aburrido» = sentir aburrimiento en ese momento."),
      fb("Par.", "Los plátanos todavía ___ verdes; no los comas.", "están", "«Estar verde» = no estar maduro; «ser verde» sería el color."),
      mc(
        "«Mi abuelo, con noventa años, todavía ___ muy despierto.»",
        ["está", "es", "hay", "sea"],
        0,
        "«Estar despierto» describe un estado: aquí, seguir lúcido a pesar de la edad. «Es despierto» describiría su carácter (listo), «hay» no lleva sujeto así y «sea» es subjuntivo sin motivo."
      ),
      toEs("The soup is delicious.", "La sopa está riquísima.", "«Estar rico» significa tener buen sabor; «ser rico» es tener dinero.", ["La sopa está buenísima.", "La sopa está muy rica.", "La sopa está deliciosa."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-1",
    "b2d-circuito-hay-esta",
    "Circuito: hay un banco / el banco está",
    "Haber para presentar algo nuevo, estar para situar algo conocido.",
    "6 min",
    [
      sec(
        "Presentar o situar",
        "Hay + un/una/unos/sin artículo/números/mucho: Hay un banco en la esquina. Hay tres farmacias. Estar + el/la/mi/nombre propio: El banco está en la esquina. Mi farmacia está cerrada.",
        [
          ["Hay una farmacia cerca.", "There's a pharmacy nearby."],
          ["La farmacia está al lado del banco.", "The pharmacy is next to the bank."],
        ],
        [
          fb("Estación 1.", "¿___ un supermercado por aquí?", "Hay", "Para preguntar si existe algo no identificado se usa hay: ¿Hay un supermercado por aquí?"),
        ]
      ),
    ],
    [
      fb("Estación 1.", "El supermercado ___ al final de la calle.", "está", "Para ubicar algo ya conocido (el supermercado) se usa estar: está al final de la calle."),
      fb("Estación 2.", "En mi clase ___ veinte alumnos.", "hay", "Con números y cantidades se usa hay: hay veinte alumnos."),
      fb("Estación 2.", "Mis compañeros ___ en la cafetería.", "están", "Para ubicar personas conocidas (mis compañeros) se usa estar."),
      fb("Estación 3.", "No ___ leche en la nevera.", "hay", "Para expresar existencia o ausencia sin artículo definido se usa hay: no hay leche."),
      fb("Estación 3.", "La leche ___ en la nevera, en la puerta.", "está", "Para ubicar algo conocido (la leche) se usa estar."),
      fb("Estación 4.", "Ayer ___ mucha gente en el concierto.", "hubo", "Haber en pasado: hubo, siempre singular."),
      mc(
        "«Ayer ___ dos accidentes en la autopista.»",
        ["hubo", "hubieron", "estuvieron", "fueron"],
        0,
        "El haber impersonal (hay, hubo) es siempre singular: hubo dos accidentes. «Hubieron» es un error frecuente, y estar o ser no expresan que algo ocurrió o existió."
      ),
      toEs("There are many parks in my city.", "En mi ciudad hay muchos parques.", "Para decir que algo existe se usa «hay», no «están».", ["Hay muchos parques en mi ciudad."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-1",
    "b2d-elige-ser-eventos",
    "Elige y explica: la fiesta es en mi casa / la tarta está en mi casa",
    "Ser para localizar eventos, estar para localizar objetos y personas.",
    "6 min",
    [
      sec(
        "Eventos y cosas",
        "Evento (fiesta, reunión, examen, concierto, boda) → ser: La boda es en Sevilla. Objeto o persona → estar: Los novios están en Sevilla. Truco: si puedes decir «tiene lugar», usa ser.",
        [
          ["La reunión es en la sala 3.", "The meeting is in room 3."],
          ["El director está en la sala 3.", "The director is in room 3."],
        ],
        [
          mc(
            "«El examen ___ en el aula magna.»",
            ["es", "está", "hay", "estará"],
            0,
            "Para el lugar de un evento se usa ser: el examen es en el aula magna. «Está» se usa para ubicar objetos o personas, «hay» no lleva sujeto definido y «estará» tiene el mismo problema que está."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "El concierto ___ en el parque. (ser/estar)", "es", "Evento."),
      fb("Elige.", "Los músicos ya ___ en el parque. (ser/estar)", "están", "Personas."),
      fb("Elige.", "La cena de Navidad ___ en casa de mi tía. (ser/estar)", "es", "Evento."),
      fb("Elige.", "Mi tía ___ en la cocina. (ser/estar)", "está", "Persona."),
      fb("Elige.", "¿Dónde ___ la conferencia mañana? (ser/estar, futuro)", "será", "Evento."),
      fb("Elige.", "¿Dónde ___ mis gafas? (ser/estar)", "están", "Objeto."),
      toEs("The wedding is in a church in Toledo.", "La boda es en una iglesia de Toledo.", "Para decir dónde tiene lugar un evento se usa «ser»: «La boda es en una iglesia».", ["La boda es en una iglesia en Toledo.", "La boda será en una iglesia de Toledo."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2d-cuento-psicologo",
    "Cuento con huecos: en la consulta de la psicóloga",
    "Ser, estar y haber en la descripción de un estado de ánimo.",
    "7 min",
    [
      sec(
        "La sesión",
        "«Normalmente soy una persona tranquila, pero últimamente estoy muy nerviosa. Hay días en los que no puedo dormir. Mi jefe es muy exigente y el trabajo está cada vez peor. La próxima reunión es el lunes y ya estoy preocupada.»",
        [
          ["Normalmente soy tranquila, pero estoy nerviosa.", "I'm usually calm, but I'm nervous."],
        ],
        [
          fb("Completa.", "Normalmente ___ una persona tranquila. (ser/estar)", "soy", "Carácter → ser."),
        ]
      ),
    ],
    [
      fb("Completa.", "…pero últimamente ___ muy nerviosa. (ser/estar)", "estoy", "Estado → estar."),
      fb("Completa.", "___ días en los que no puedo dormir. (haber)", "Hay", "Existencia."),
      fb("Completa.", "Mi jefe ___ muy exigente. (ser/estar)", "es", "Carácter."),
      fb("Completa.", "…y el trabajo ___ cada vez peor. (ser/estar)", "está", "Situación cambiante."),
      fb("Completa.", "La próxima reunión ___ el lunes. (ser/estar)", "es", "Evento → ser."),
      mc(
        "«Me doy cuenta de que ___ muy cansada últimamente.»",
        ["estoy", "soy", "hay", "sea"],
        0,
        "Un estado pasajero (últimamente) se expresa con estar: estoy cansada. «Soy» describe cualidades, «hay» no lleva sujeto así y «sea» es subjuntivo sin motivo."
      ),
      toEs("I'm usually happy, but today I'm sad.", "Normalmente soy feliz, pero hoy estoy triste.", "«Ser feliz» describe el carácter habitual; «estar triste» describe el estado de hoy.", ["Normalmente soy alegre, pero hoy estoy triste.", "Suelo ser feliz, pero hoy estoy triste."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2d-corrige-ser-estar-haber",
    "Corrige el párrafo: la reseña del hotel",
    "Errores con ser, estar y haber en una reseña.",
    "6 min",
    [
      sec(
        "La reseña",
        "«El hotel es en el centro. Hay la piscina en la azotea. La habitación era muy limpia y el desayuno fue rico. La recepcionista estaba muy simpática.» Hay varios errores; uno es discutible.",
        [
          ["El hotel está en el centro.", "The hotel is in the centre."],
        ],
        [
          mc(
            "¿Qué falla en «el hotel es en el centro»?",
            ["Un edificio se localiza con estar.", "Falta el artículo.", "Debe ser «hay».", "Nada."],
            0,
            "Un edificio se localiza con estar: el hotel está en el centro. Ser solo indica el lugar de eventos. No falta artículo y «hay» se usa con algo no definido (hay un hotel)."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «El hotel es en el centro.»", "El hotel está en el centro.", "Para la ubicación de un lugar o cosa se usa «estar»: «está en el centro»."),
      toEs("Corrige: «Hay la piscina en la azotea.»", "La piscina está en la azotea.", "Con artículo definido («la piscina») se usa «estar» para la ubicación, no «hay».", ["Hay una piscina en la azotea."]),
      toEs("Corrige: «La habitación era muy limpia.»", "La habitación estaba muy limpia.", "La limpieza en un momento dado es un estado, así que va con «estar»."),
      toEs("Corrige: «El desayuno fue rico.»", "El desayuno estaba rico.", "Para el sabor de una comida se usa «estar rico», no «ser rico».", ["El desayuno estaba muy rico."]),
      toEs("Corrige: «Hubieron muchos problemas con el wifi.»", "Hubo muchos problemas con el wifi.", "«Haber» impersonal va siempre en singular: «hubo», nunca «hubieron»."),
      ms(
        "¿Qué frases son correctas?",
        ["La recepcionista era muy simpática.", "La recepcionista estuvo muy simpática con nosotros.", "La recepcionista hay simpática.", "La recepcionista es en recepción."],
        [0, 1],
        "Ser describe el carácter (era muy simpática) y estar un comportamiento puntual (estuvo simpática con nosotros). «Hay simpática» no es posible y «es en recepción» usa ser para ubicar a una persona."
      ),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2d-habla-de-ti-caracter-estado",
    "Habla de ti: cómo eres y cómo estás",
    "Describe tu carácter, tu estado de hoy y tu entorno.",
    "6 min",
    [
      sec(
        "Tú hoy",
        "Soy una persona curiosa y un poco impaciente. Hoy estoy de buen humor porque es viernes. En mi barrio hay un mercado precioso, que está a cinco minutos de mi casa.",
        [
          ["Hoy estoy de buen humor.", "Today I'm in a good mood."],
        ],
        [
          fb("Tú.", "___ una persona curiosa. (ser/estar)", "Soy", "Carácter."),
        ]
      ),
    ],
    [
      fb("Tú.", "Hoy ___ de buen humor. (ser/estar)", "estoy", "Estado."),
      fb("Tú.", "En mi barrio ___ un mercado precioso. (haber)", "hay", "Existencia."),
      fb("Tú.", "El mercado ___ a cinco minutos. (ser/estar)", "está", "Localización."),
      fb("Tú.", "Mi cumpleaños ___ en mayo. (ser/estar)", "es", "Fecha de un evento."),
      fb("Tú.", "Esta semana ___ muy ocupado. (ser/estar)", "estoy", "Estado temporal."),
      toEs("I'm a calm person, but today I'm stressed.", "Soy una persona tranquila, pero hoy estoy estresado.", "«Ser tranquilo» es el carácter; «estar estresado» es el estado de hoy.", ["Soy una persona tranquila, pero hoy estoy estresada."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2d-ronda-ser-estar-haber",
    "Ronda rápida: ser, estar o haber",
    "Doce huecos con los usos matizados de los tres verbos.",
    "5 min",
    [
      sec(
        "Preguntas rápidas",
        "¿Existencia de algo nuevo? → haber. ¿Localización de algo conocido? → estar. ¿Lugar de un evento? → ser. ¿Carácter o identidad? → ser. ¿Estado o resultado? → estar.",
        [
          ["La fiesta es en el jardín y la comida está en la cocina.", "The party is in the garden and the food is in the kitchen."],
        ],
        [
          fb("Rápido.", "La fiesta ___ en el jardín.", "es", "Para decir dónde tiene lugar un evento se usa «ser»: «La fiesta es en el jardín»."),
        ]
      ),
    ],
    [
      fb("Rápido.", "La comida ___ en la cocina.", "está", "Para la ubicación de una cosa concreta se usa «estar»: «La comida está en la cocina»."),
      fb("Rápido.", "___ mucha comida para todos.", "Hay", "«Hay» presenta la existencia de algo sin artículo determinado: «hay mucha comida»."),
      fb("Rápido.", "Mi vecina ___ médica.", "es", "Para la profesión se usa «ser»: «es médica»."),
      fb("Rápido.", "Mi vecina ___ de guardia esta noche.", "está", "«Estar de guardia» describe una situación temporal, no la profesión."),
      fb("Rápido.", "La puerta ___ abierta; alguien la ha dejado así.", "está", "«Estar» + participio expresa el resultado de una acción: «está abierta»."),
      fb("Rápido.", "La tienda ___ abierta de nueve a nueve.", "está", "«Abierto» expresa un estado, así que va con «estar» incluso para un horario habitual."),
      fb("Rápido.", "Esta chaqueta ___ de cuero.", "es", "Para el material se usa «ser de»: «es de cuero»."),
      mc(
        "«¿Qué hora ___?»",
        ["es", "está", "hay", "estaba ahora"],
        0,
        "La hora se expresa con ser: ¿Qué hora es? «Está» y «estaba ahora» usan estar, y «hay» no se usa para la hora."
      ),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2d-cadena-ser-estar-participio",
    "Cadena de transformaciones: fue construido / está construido",
    "Ser + participio (la acción) y estar + participio (el resultado).",
    "6 min",
    [
      sec(
        "Acción y resultado",
        "Ser + participio = voz pasiva, la acción: El puente fue construido en 1920. Estar + participio = el estado resultante: El puente está construido con piedra. La tienda fue cerrada por la policía (acción). La tienda está cerrada (estado).",
        [
          ["La tienda fue cerrada por la policía.", "The shop was closed by the police."],
          ["La tienda está cerrada.", "The shop is closed."],
        ],
        [
          fb("Acción.", "El cuadro ___ pintado en 1890. (ser, indefinido)", "fue", "Acción pasada."),
        ]
      ),
    ],
    [
      fb("Resultado.", "El cuadro ___ muy bien conservado. (estar, presente)", "está", "Estado actual."),
      fb("Acción.", "Los ladrones ___ detenidos ayer. (ser, indefinido)", "fueron", "Acción."),
      fb("Resultado.", "Los ladrones ___ detenidos en comisaría. (estar, presente)", "están", "Estado."),
      fb("Acción.", "La carta ___ escrita por el rey. (ser, indefinido)", "fue", "Acción."),
      fb("Resultado.", "La carta ___ escrita en latín. (estar, presente)", "está", "Estado resultante."),
      mc(
        "«Cuando llegamos, la cena ya ___ preparada.»",
        ["estaba", "era", "fue", "había"],
        0,
        "El resultado de una acción, visto en un momento del pasado, se expresa con estar: la cena ya estaba preparada. «Era» y «fue» expresarían la acción, y «había» necesitaría otro participio."
      ),
      toEs("The museum was opened in 1995.", "El museo fue inaugurado en 1995.", "La voz pasiva de una acción se forma con «ser» + participio: «fue inaugurado».", ["El museo se inauguró en 1995.", "El museo fue abierto en 1995."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2d-mezcla-ser-estar-descripcion",
    "Práctica mezclada: describe a un personaje",
    "Carácter, aspecto, estado y situación de una persona.",
    "6 min",
    [
      sec(
        "Retrato",
        "«Marta es alta y morena. Es arquitecta y es muy perfeccionista. Esta semana está agotada porque hay un concurso importante. El concurso es el viernes en el ayuntamiento. Marta está segura de que va a ganar.»",
        [
          ["Marta está segura de que va a ganar.", "Marta is sure she's going to win."],
        ],
        [
          fb("Completa.", "Marta ___ alta y morena. (ser/estar)", "es", "Aspecto permanente."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ arquitecta. (ser/estar)", "Es", "Profesión."),
      fb("Completa.", "Esta semana ___ agotada. (ser/estar)", "está", "Estado."),
      fb("Completa.", "…porque ___ un concurso importante. (haber)", "hay", "Existencia."),
      fb("Completa.", "El concurso ___ el viernes. (ser/estar)", "es", "Evento."),
      fb("Completa.", "Marta ___ segura de que va a ganar. (ser/estar)", "está", "Estar seguro de."),
      mc(
        "«Marta ___ una persona segura de sí misma.»",
        ["es", "está", "hay", "estaba ahora"],
        0,
        "Ser + sustantivo (una persona) describe identidad: Marta es una persona segura. Estar no va con sustantivos así, y «hay» no lleva sujeto."
      ),
      toEs("She is tall, but today she looks tired.", "Es alta, pero hoy está cansada.", "«Ser alta» describe una característica; «estar cansada» describe el estado de hoy.", ["Es alta, pero hoy parece cansada."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2d-dictado-ser-estar",
    "Dictado: ser, estar y haber",
    "Frases con los usos más difíciles, palabra por palabra.",
    "5 min",
    [
      sec(
        "Atención al verbo",
        "Fíjate en el adjetivo o el sustantivo que sigue: ahí está la pista.",
        [
          ["La reunión es en la tercera planta.", "The meeting is on the third floor."],
        ],
        [
          wo("La reunión es en la tercera planta.", "Evento → ser.", "The meeting is on the third floor."),
        ]
      ),
    ],
    [
      wo("Este pescado está buenísimo.", "Estar + sabor.", "This fish is delicious."),
      wo("No hay nadie en la oficina.", "Haber.", "There's nobody in the office."),
      wo("Mi abuela está muy bien para su edad.", "Estado.", "My grandmother is very well for her age."),
      wo("Ese chico es muy listo para su edad.", "Carácter.", "That boy is very clever for his age."),
      toEs("There was a lot of traffic yesterday.", "Ayer hubo mucho tráfico.", "«Haber» impersonal va en singular; para un hecho pasado concreto, indefinido: «hubo».", ["Ayer había mucho tráfico.", "Hubo mucho tráfico ayer."]),
      toEs("Where is the party?", "¿Dónde es la fiesta?", "Para preguntar dónde tiene lugar un evento se usa «ser»: «¿Dónde es la fiesta?»."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2d-preguntas-ser-estar",
    "Preguntas y respuestas: ¿cómo es? / ¿cómo está?",
    "Dos preguntas distintas que piden respuestas distintas.",
    "6 min",
    [
      sec(
        "Dos preguntas",
        "¿Cómo es tu jefe? → Es serio pero justo (carácter). ¿Cómo está tu jefe? → Está enfadado hoy (estado). ¿Qué tal está la sopa? → Está salada.",
        [
          ["—¿Cómo es tu piso? —Es pequeño pero luminoso.", "What's your flat like? It's small but bright."],
          ["—¿Cómo está tu padre? —Está mejor, gracias.", "How's your father? He's better, thanks."],
        ],
        [
          fb("Responde.", "—¿Cómo es tu ciudad? —___ bastante tranquila.", "Es", "«¿Cómo es…?» pregunta por las características, y se responde con «ser»."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Cómo está tu hermana después de la operación? —___ mucho mejor.", "Está", "«¿Cómo está…?» pregunta por el estado, y se responde con «estar»."),
      fb("Responde.", "—¿Qué tal está el café? —___ frío.", "Está", "Para el estado de algo en un momento (la temperatura del café) se usa «estar»."),
      fb("Responde.", "—¿Cómo es tu profesor? —___ exigente pero divertido.", "Es", "Para el carácter de una persona se usa «ser»: «es exigente»."),
      fb("Responde.", "—¿Cómo están las calles después de la tormenta? —___ inundadas.", "Están", "«Estar» + participio expresa el resultado de algo: «están inundadas»."),
      fb("Responde.", "—¿Qué ___ en tu barrio? —Hay un cine y dos bibliotecas. (haber)", "hay", "Existencia."),
      mc(
        "—¿Cómo ___ la película? —Muy aburrida, me dormí.",
        ["fue", "estuvo en", "hubo", "estaba en"],
        0,
        "Para valorar un evento completo se usa ser en pretérito: ¿Cómo fue la película? «Estuvo en» y «estaba en» se refieren a ubicación, y «hubo» expresa existencia."
      ),
      toEs("What is your boss like?", "¿Cómo es tu jefe?", "«¿Cómo es…?» pregunta por el carácter o las características de alguien.", ["¿Cómo es tu jefa?"]),
    ]
  ),
  L(
    "verbs-of-change-1",
    "b2d-patron-ponerse",
    "Práctica de patrones: ponerse + adjetivo",
    "Cambios rápidos y temporales: emociones y reacciones físicas.",
    "6 min",
    [
      sec(
        "Ponerse",
        "Ponerse + adjetivo: cambio rápido, a menudo pasajero. Me pongo nervioso antes de los exámenes. Se puso rojo. Nos pusimos muy contentos.",
        [
          ["Se puso rojo cuando le hablé.", "He went red when I spoke to him."],
          ["Me pongo nerviosa antes de hablar en público.", "I get nervous before speaking in public."],
        ],
        [
          fb("Mismo marco.", "Cuando la vi, me ___ muy contento. (ponerse, indefinido)", "puse", "Poner → puse."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Siempre me ___ nervioso en el dentista. (ponerse)", "pongo", "Presente."),
      fb("Mismo marco.", "Mi madre se ___ triste al oír la noticia. (ponerse, indefinido)", "puso", "Indefinido."),
      fb("Mismo marco.", "Nos ___ pálidos al ver la factura. (ponerse, indefinido)", "pusimos", "Nosotros."),
      fb("Mismo marco.", "No te ___ así, no es para tanto. (ponerse)", "pongas", "Negativo → subjuntivo."),
      fb("Mismo marco.", "El cielo se ___ gris de repente. (ponerse, indefinido)", "puso", "Cambio físico rápido."),
      mc(
        "«Cuando ganó el premio, se ___ a llorar de alegría.»",
        ["puso", "hizo", "volvió", "convirtió"],
        0,
        "«Ponerse a» + infinitivo significa empezar algo de repente: se puso a llorar. Hacerse, volverse y convertirse no forman esta perífrasis."
      ),
      toEs("I got angry when he lied to me.", "Me puse furioso cuando me mintió.", "«Ponerse» + adjetivo expresa un cambio emocional repentino: «me puse furioso».", ["Me enfadé cuando me mintió.", "Me puse furiosa cuando me mintió.", "Me puse de mal humor cuando me mintió."]),
    ]
  ),
  L(
    "verbs-of-change-1",
    "b2d-pares-ponerse-volverse",
    "Pares mínimos: se puso serio / se volvió serio",
    "Un momento o una transformación duradera.",
    "6 min",
    [
      sec(
        "¿Cuánto dura el cambio?",
        "Se puso serio (en ese momento, al oír la noticia). Se volvió serio (con los años, su carácter cambió). Volverse: cambio gradual, profundo e involuntario.",
        [
          ["Se puso muy serio al oír la noticia.", "He became very serious when he heard the news."],
          ["Con la edad se volvió muy serio.", "With age he became very serious."],
        ],
        [
          mc(
            "«Desde que ganó la lotería, se ha ___ muy tacaño.»",
            ["vuelto", "puesto", "hecho", "llegado"],
            0,
            "Volverse expresa un cambio de carácter duradero: se ha vuelto tacaño. Ponerse es pasajero, hacerse suele indicar un logro y «llegado» necesitaría «a ser»."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Al ver el precio, se ___ nerviosa. (ponerse/volverse, indefinido)", "puso", "Momento."),
      fb("Elige.", "Después del accidente, se ___ muy prudente. (ponerse/volverse, indefinido)", "volvió", "Transformación."),
      fb("Elige.", "Cuando bebe, se ___ muy pesado. (ponerse/volverse)", "pone", "Momento repetido."),
      fb("Elige.", "Con la fama se ha ___ insoportable. (ponerse/volverse)", "vuelto", "Cambio duradero."),
      fb("Elige.", "Los niños se ___ muy contentos con el regalo. (ponerse/volverse, indefinido)", "pusieron", "Momento."),
      fb("Elige.", "El mundo se ha ___ más rápido con internet. (ponerse/volverse)", "vuelto", "Transformación."),
      toEs("She went pale when she saw the police.", "Se puso pálida al ver a la policía.", "«Ponerse» + adjetivo expresa un cambio físico momentáneo: «se puso pálida».", ["Se puso blanca al ver a la policía.", "Se puso pálida cuando vio a la policía."]),
    ]
  ),
  L(
    "verbs-of-change-1",
    "b2d-circuito-hacerse-llegar-convertirse",
    "Circuito: hacerse, llegar a ser, convertirse en",
    "Cambios con esfuerzo, logros graduales y transformaciones radicales.",
    "6 min",
    [
      sec(
        "Tres verbos",
        "Hacerse + sustantivo/adjetivo: cambio voluntario o con esfuerzo (Se hizo médico. Se hizo rico). Llegar a ser: logro tras un largo proceso (Llegó a ser presidenta). Convertirse en + sustantivo: transformación completa (El pueblo se convirtió en una ciudad).",
        [
          ["Se hizo vegetariano el año pasado.", "He became a vegetarian last year."],
          ["El pueblo se convirtió en una ciudad turística.", "The village became a tourist town."],
        ],
        [
          fb("Estación 1.", "Estudió mucho y se ___ abogada. (hacerse, indefinido)", "hizo", "Esfuerzo."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Con el negocio se ___ rico. (hacerse, indefinido)", "hizo", "Esfuerzo / proceso."),
      fb("Estación 2.", "Empezó de camarero y ___ director del hotel. (llegar a ser, indefinido)", "llegó a ser", "Logro gradual."),
      fb("Estación 2.", "Nunca ___ famosa, pero vivió de su arte. (llegar a ser, indefinido)", "llegó a ser", "Logro (negado)."),
      fb("Estación 3.", "La fábrica se ___ en un museo. (convertirse, indefinido)", "convirtió", "Transformación."),
      fb("Estación 3.", "El agua se ___ en hielo. (convertir, presente)", "convierte", "Transformación completa."),
      fb("Estación 4.", "Se ___ budista tras un viaje a Nepal. (hacerse, indefinido)", "hizo", "Ideología."),
      mc(
        "«La rana se ___ en príncipe.»",
        ["convirtió", "hizo", "puso", "llegó"],
        0,
        "«Convertirse en» + sustantivo expresa una transformación completa: se convirtió en príncipe. Hacerse y ponerse no van con «en» así, y «llegó» necesitaría «a ser»."
      ),
      toEs("She became a nurse.", "Se hizo enfermera.", "Para una profesión alcanzada por esfuerzo se usa «hacerse»: «se hizo enfermera».", ["Se hizo enfermera hace años.", "Llegó a ser enfermera."]),
    ]
  ),
  L(
    "verbs-of-change-2",
    "b2d-cuento-biografia",
    "Cuento con huecos: la biografía de Rosa",
    "Una vida contada con verbos de cambio.",
    "7 min",
    [
      sec(
        "La biografía",
        "«De niña, Rosa se ponía roja cada vez que hablaba en público. En la universidad se hizo actriz de teatro y poco a poco se volvió muy segura de sí misma. Con los años llegó a ser directora del teatro nacional, que se convirtió en el más visitado del país.»",
        [
          ["Poco a poco se volvió muy segura de sí misma.", "Little by little she became very self-confident."],
        ],
        [
          fb("Completa.", "De niña, Rosa se ___ roja al hablar en público. (ponerse, imperfecto)", "ponía", "Reacción repetida."),
        ]
      ),
    ],
    [
      fb("Completa.", "En la universidad se ___ actriz. (hacerse, indefinido)", "hizo", "Decisión."),
      fb("Completa.", "Poco a poco se ___ muy segura de sí misma. (volverse, indefinido)", "volvió", "Cambio de carácter."),
      fb("Completa.", "Con los años ___ directora del teatro nacional. (llegar a ser, indefinido)", "llegó a ser", "Logro."),
      fb("Completa.", "El teatro se ___ en el más visitado del país. (convertirse, indefinido)", "convirtió", "Transformación."),
      fb("Completa.", "El día del estreno se ___ muy nerviosa. (ponerse, indefinido)", "puso", "Momento."),
      mc(
        "«Rosa nunca se ___ arrogante a pesar del éxito.»",
        ["volvió", "puso", "hizo", "convirtió"],
        0,
        "Volverse expresa un cambio de carácter: no se volvió arrogante. Ponerse es un cambio pasajero, hacerse suele ser un logro y convertirse necesita «en» + sustantivo."
      ),
      toEs("She became the director of the theatre.", "Llegó a ser directora del teatro.", "«Llegar a ser» expresa un logro al final de un proceso largo.", ["Se convirtió en directora del teatro.", "Llegó a ser la directora del teatro."]),
    ]
  ),
  L(
    "verbs-of-change-2",
    "b2d-elige-verbo-cambio",
    "Elige y explica: ¿qué verbo de cambio?",
    "Cinco verbos, cinco matices.",
    "6 min",
    [
      sec(
        "Mapa de los verbos",
        "Ponerse: rápido y pasajero. Volverse: gradual e involuntario. Hacerse: voluntario o por esfuerzo. Llegar a ser: logro al final de un camino. Convertirse en: transformación completa en otra cosa.",
        [
          ["Se ha vuelto muy desconfiado.", "He's become very suspicious."],
        ],
        [
          mc(
            "Después de años de ahorro, «se ___ millonario».",
            ["hizo", "puso", "volvió", "convirtió"],
            0,
            "Hacerse expresa un cambio logrado con esfuerzo: se hizo millonario. Ponerse es pasajero, volverse es un cambio de carácter y convertirse necesita «en»."
          ),
        ]
      ),
    ],
    [
      mc("Al oír su nombre, «se ___ colorada».", ["puso", "hizo", "volvió", "llegó a ser"], 0, "Ponerse expresa un cambio físico momentáneo: se puso colorada. Hacerse y volverse expresan cambios duraderos, y llegar a ser un logro."),
      mc("Tras la guerra, «se ___ una persona amargada».", ["volvió", "puso", "hizo", "llegó"], 0, "Volverse expresa un cambio profundo e involuntario de carácter: se volvió una persona amargada. Ponerse es pasajero, hacerse suele ser voluntario y «llegó» necesita «a ser»."),
      mc("El pequeño blog «se ___ en un periódico digital».", ["convirtió", "hizo", "puso", "volvió"], 0, "«Convertirse en» expresa una transformación completa: se convirtió en un periódico. Hacerse, ponerse y volverse no llevan «en» así."),
      mc("Tras décadas de trabajo, «___ ministra».", ["llegó a ser", "se puso", "se volvió", "se convirtió"], 0, "«Llegar a ser» expresa un logro tras un largo proceso: llegó a ser ministra. Ponerse y volverse no se usan con cargos, y convertirse necesitaría «en»."),
      fb("Completa.", "Mi primo se ___ de otro equipo para molestarme. (hacerse, indefinido)", "hizo", "Afiliación voluntaria."),
      fb("Completa.", "Se ___ loco de alegría al saber la noticia. (volverse, indefinido)", "volvió", "Expresión fija: volverse loco."),
      toEs("The village became a small city.", "El pueblo se convirtió en una pequeña ciudad.", "«Convertirse en» + sustantivo expresa una transformación completa.", ["El pueblo se transformó en una pequeña ciudad.", "El pueblo se convirtió en una ciudad pequeña."]),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2d-corrige-verbos-cambio",
    "Corrige el párrafo: verbos de cambio mal elegidos",
    "Un texto con cambios expresados con el verbo equivocado.",
    "6 min",
    [
      sec(
        "El texto",
        "«Mi hermano se puso médico hace dos años. Al principio se hacía nervioso con los pacientes, pero ahora se ha convertido muy tranquilo. Su clínica se volvió en la más conocida del barrio.» Cuatro errores.",
        [
          ["Mi hermano se hizo médico hace dos años.", "My brother became a doctor two years ago."],
        ],
        [
          mc(
            "¿Qué falla en «se puso médico»?",
            ["Una profesión se consigue con hacerse.", "Falta un artículo.", "Debe ser «era».", "Nada."],
            0,
            "Una profesión se alcanza con hacerse: se hizo médico. Ponerse es para estados pasajeros; no falta artículo y «era» no expresa el cambio."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Mi hermano se puso médico hace dos años.»", "Mi hermano se hizo médico hace dos años.", "Para una profesión se usa «hacerse», no «ponerse»: «se hizo médico»."),
      toEs("Corrige: «Al principio se hacía nervioso con los pacientes.»", "Al principio se ponía nervioso con los pacientes.", "Para una reacción emocional momentánea se usa «ponerse», no «hacerse»: «se ponía nervioso»."),
      toEs("Corrige: «Ahora se ha convertido muy tranquilo.»", "Ahora se ha vuelto muy tranquilo.", "Con adjetivo de carácter se usa «volverse»; «convertirse» va con «en» + sustantivo."),
      toEs("Corrige: «Su clínica se volvió en la más conocida del barrio.»", "Su clínica se convirtió en la más conocida del barrio.", "«En» + sustantivo va con «convertirse»; «volverse» va con adjetivo."),
      toEs("Corrige: «Con los años llegó ser jefe.»", "Con los años llegó a ser jefe.", "La perífrasis es «llegar a ser»: necesita la preposición «a»."),
      ms(
        "¿Qué frases son correctas?",
        ["Se puso contento.", "Se hizo famoso.", "Se volvió en rana.", "Se convirtió contento."],
        [0, 1],
        "«Se puso contento» (estado pasajero) y «Se hizo famoso» (logro) son correctas. «Se volvió en rana» añade un «en» que volverse no lleva, y «Se convirtió contento» usa convertirse con un adjetivo."
      ),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2d-cadena-adjetivo-cambio",
    "Cadena de transformaciones: de estar a ponerse",
    "Expresa el momento del cambio en lugar del estado.",
    "6 min",
    [
      sec(
        "Del estado al cambio",
        "Estaba nervioso → Se puso nervioso (el momento en que empezó). Es muy desconfiado (ahora) → Se volvió muy desconfiado (el proceso). Es enfermera → Se hizo enfermera (la decisión).",
        [
          ["Estaba triste. → Se puso triste al oír la canción.", "He was sad. → He got sad when he heard the song."],
        ],
        [
          fb("Transforma.", "Estaba furiosa. → Se ___ furiosa cuando lo vio. (indefinido)", "puso", "«Ponerse» + adjetivo expresa un cambio de estado repentino y pasajero."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Ahora es muy callado. → Con los años se ___ muy callado. (indefinido)", "volvió", "«Volverse» + adjetivo expresa un cambio de carácter lento y duradero."),
      fb("Transforma.", "Es profesora. → Se ___ profesora a los treinta. (indefinido)", "hizo", "«Hacerse» expresa un cambio voluntario o por esfuerzo, como una profesión."),
      fb("Transforma.", "Es directora general. → ___ directora general tras veinte años. (indefinido)", "Llegó a ser", "«Llegar a ser» expresa un logro al final de un proceso largo."),
      fb("Transforma.", "El edificio es un hotel. → El edificio se ___ en un hotel. (indefinido)", "convirtió", "«Convertirse en» + sustantivo expresa una transformación completa."),
      fb("Transforma.", "Estábamos contentos. → Nos ___ contentos con la noticia. (indefinido)", "pusimos", "«Ponerse» + adjetivo expresa una reacción emocional momentánea."),
      toEs("He became very rich.", "Se hizo muy rico.", "«Hacerse» + adjetivo expresa un cambio logrado por esfuerzo: «se hizo rico».", ["Se volvió muy rico.", "Llegó a ser muy rico."]),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2d-habla-de-ti-cambios",
    "Habla de ti: cómo has cambiado",
    "Cuenta tus propios cambios con los cinco verbos.",
    "6 min",
    [
      sec(
        "Tus cambios",
        "Me pongo nervioso en las entrevistas. Con los años me he vuelto más paciente. Me hice vegetariano hace tres años. Mi afición por la cocina se ha convertido en mi trabajo.",
        [
          ["Con los años me he vuelto más paciente.", "Over the years I've become more patient."],
        ],
        [
          fb("Tus cambios.", "Me ___ nervioso en las entrevistas. (ponerse)", "pongo", "Reacción repetida."),
        ]
      ),
    ],
    [
      fb("Tus cambios.", "Con los años me he ___ más paciente. (volverse)", "vuelto", "Carácter."),
      fb("Tus cambios.", "Me ___ vegetariano hace tres años. (hacerse, indefinido)", "hice", "Decisión."),
      fb("Tus cambios.", "Mi afición se ha ___ en mi trabajo. (convertirse)", "convertido", "Transformación."),
      fb("Tus cambios.", "Me ___ muy contento cuando aprobé el carné. (ponerse, indefinido)", "puse", "Momento."),
      fb("Tus cambios.", "Espero ___ a ser un buen profesional. (llegar)", "llegar", "Logro futuro."),
      toEs("I've become more independent.", "Me he vuelto más independiente.", "«Volverse» + adjetivo expresa un cambio de carácter gradual y duradero.", ["Me he hecho más independiente."]),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2d-ronda-verbos-cambio",
    "Ronda rápida: cinco verbos de cambio",
    "Diez frases rápidas con el verbo adecuado.",
    "5 min",
    [
      sec(
        "Pistas",
        "Emoción o color de la cara → ponerse. Carácter con el tiempo → volverse. Profesión, religión, riqueza → hacerse. Meta alcanzada → llegar a ser. Otra cosa distinta → convertirse en.",
        [
          ["Se convirtió en un problema.", "It became a problem."],
        ],
        [
          fb("Rápido.", "Se ___ muy triste al despedirse. (indefinido)", "puso", "Emoción."),
        ]
      ),
    ],
    [
      fb("Rápido.", "La pequeña discusión se ___ en una pelea. (indefinido)", "convirtió", "Transformación."),
      fb("Rápido.", "Se ___ musulmán hace diez años. (indefinido)", "hizo", "Religión."),
      fb("Rápido.", "Con la edad se ha ___ más sabio.", "vuelto", "«Volverse» + adjetivo expresa un cambio de carácter gradual y duradero."),
      fb("Rápido.", "El actor ___ muy famoso. (llegar a ser, indefinido)", "llegó a ser", "Meta alcanzada → llegar a ser."),
      fb("Rápido.", "Me ___ roja cuando me miran. (presente)", "pongo", "Reacción."),
      fb("Rápido.", "Se ___ tarde; vámonos. (hacerse, indefinido)", "hizo", "Hacerse tarde / de noche."),
      fb("Rápido.", "El niño se ___ muy mimado con tantos regalos. (indefinido)", "volvió", "Carácter."),
      mc(
        "«La oruga se ___ en mariposa.»",
        ["convirtió", "volvió", "hizo", "puso"],
        0,
        "«Convertirse en» expresa una transformación completa: se convirtió en mariposa. Volverse, hacerse y ponerse no van con «en» + sustantivo así."
      ),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2d-mezcla-cambio-ciudad",
    "Práctica mezclada: mi ciudad antes y ahora",
    "Verbos de cambio, ser/estar y haber en una descripción.",
    "7 min",
    [
      sec(
        "Antes y ahora",
        "«Hace veinte años mi ciudad era un pueblo industrial. Había fábricas por todas partes. Poco a poco se convirtió en un centro turístico. Los vecinos se volvieron más abiertos, aunque algunos se pusieron furiosos con los precios. Hoy la ciudad está irreconocible.»",
        [
          ["Poco a poco se convirtió en un centro turístico.", "Little by little it became a tourist centre."],
        ],
        [
          fb("Completa.", "Hace veinte años mi ciudad ___ un pueblo industrial. (ser)", "era", "Identidad pasada."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ fábricas por todas partes. (haber)", "Había", "Existencia pasada."),
      fb("Completa.", "Poco a poco se ___ en un centro turístico. (convertir)", "convirtió", "Transformación."),
      fb("Completa.", "Los vecinos se ___ más abiertos. (volverse)", "volvieron", "Carácter."),
      fb("Completa.", "…algunos se ___ furiosos con los precios. (ponerse)", "pusieron", "Reacción."),
      fb("Completa.", "Hoy la ciudad ___ irreconocible. (ser/estar)", "está", "Estado resultante."),
      mc(
        "«El alcalde de entonces ___ ministro años después.»",
        ["llegó a ser", "se puso", "se volvió", "estuvo"],
        0,
        "«Llegar a ser» expresa un logro tras años: llegó a ser ministro. Ponerse y volverse no se usan con cargos, y «estuvo» no expresa cambio."
      ),
      toEs("My neighbourhood has become very expensive.", "Mi barrio se ha vuelto muy caro.", "«Volverse» + adjetivo expresa un cambio gradual y duradero: «se ha vuelto caro».", ["Mi barrio se ha puesto muy caro.", "Mi barrio se ha hecho muy caro."]),
    ]
  ),
  L(
    "advanced-connectors-1",
    "b2d-pares-aunque-sin-embargo",
    "Pares mínimos: aunque / sin embargo / a pesar de",
    "Tres formas de contraste con distinta estructura.",
    "6 min",
    [
      sec(
        "Misma idea, tres estructuras",
        "Aunque une dos cláusulas: Aunque llovía, salimos. Sin embargo / no obstante empieza una nueva oración: Llovía. Sin embargo, salimos. A pesar de + sustantivo/infinitivo: A pesar de la lluvia, salimos. A pesar de que + verbo: A pesar de que llovía, salimos.",
        [
          ["A pesar de la lluvia, salimos.", "Despite the rain, we went out."],
          ["Llovía. Sin embargo, salimos.", "It was raining. However, we went out."],
        ],
        [
          fb("Transforma.", "Aunque estaba cansado, siguió trabajando. → A pesar ___ cansancio, siguió trabajando.", "del", "«A pesar de» + sustantivo; de + el se contrae: a pesar del cansancio."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Estaba cansado. ___, siguió trabajando.", "Sin embargo", "«Sin embargo» empieza una nueva oración para expresar contraste, seguido de coma."),
      fb("Transforma.", "___ estar cansado, siguió trabajando.", "A pesar de", "«A pesar de» + infinitivo, cuando el sujeto es el mismo: a pesar de estar cansado."),
      fb("Transforma.", "A pesar de ___ estaba cansado, siguió trabajando.", "que", "A pesar de que + verbo."),
      fb("Elige.", "El examen era difícil. ___, aprobaron todos.", "No obstante", "«No obstante» es un conector formal de contraste que abre una nueva oración."),
      fb("Elige.", "___ el precio, compraron la casa.", "A pesar del", "A pesar de + el precio."),
      mc(
        "«___ no tenía experiencia, lo contrataron.»",
        ["Aunque", "Sin embargo", "A pesar de", "No obstante"],
        0,
        "«Aunque» une dos cláusulas en la misma oración: Aunque no tenía experiencia, lo contrataron. «Sin embargo» y «no obstante» unen oraciones separadas, y «a pesar de» necesita «que» antes de un verbo conjugado."
      ),
      toEs("Despite the traffic, we arrived on time.", "A pesar del tráfico, llegamos a tiempo.", "«A pesar de» + «el tráfico» se contrae en «a pesar del tráfico».", ["Pese al tráfico, llegamos a tiempo.", "A pesar del tráfico, llegamos puntuales."]),
    ]
  ),
  L(
    "advanced-connectors-1",
    "b2d-circuito-causa-consecuencia",
    "Circuito: ya que, puesto que / por lo tanto, así que",
    "Causa antes o después, consecuencia siempre después.",
    "6 min",
    [
      sec(
        "Causa y consecuencia",
        "Causa: ya que, puesto que, dado que (suelen ir al principio y presentan una causa conocida). Consecuencia: por lo tanto, por consiguiente (formales), así que, de modo que (más coloquiales).",
        [
          ["Ya que estás aquí, ayúdame.", "Since you're here, help me."],
          ["No había luz; por lo tanto, cancelamos la clase.", "There was no electricity; therefore, we cancelled the class."],
        ],
        [
          fb("Estación 1.", "___ hace buen tiempo, comemos en la terraza.", "Ya que", "«Ya que» presenta una causa que el oyente ya conoce y suele ir al principio."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "___ el tren tiene retraso, llegaremos tarde. (formal)", "Dado que", "Causa."),
      fb("Estación 2.", "No tengo dinero, ___ no voy a ir.", "así que", "«Así que» introduce una consecuencia; es la forma más coloquial."),
      fb("Estación 2.", "Los datos son incompletos; ___, no podemos sacar conclusiones.", "por lo tanto", "«Por lo tanto» introduce una consecuencia en registro formal y va entre pausas."),
      fb("Estación 3.", "___ nadie se opone, aprobamos la propuesta.", "Puesto que", "«Puesto que» introduce una causa conocida; es algo más formal que «ya que»."),
      fb("Estación 3.", "Llegó tarde, ___ se perdió el principio.", "de modo que", "«De modo que» introduce la consecuencia de lo dicho antes."),
      ms(
        "¿Qué conectores expresan consecuencia?",
        ["por consiguiente", "así que", "ya que", "puesto que"],
        [0, 1],
        "«Por consiguiente» y «así que» expresan consecuencia. «Ya que» y «puesto que» expresan causa."
      ),
      toEs("Since you know the city, you can be our guide.", "Ya que conoces la ciudad, puedes ser nuestro guía.", "«Ya que» introduce una causa conocida por el oyente y suele ir al principio.", ["Como conoces la ciudad, puedes ser nuestro guía.", "Puesto que conoces la ciudad, puedes ser nuestra guía."]),
    ]
  ),
  L(
    "advanced-connectors-1",
    "b2d-cuento-debate-educacion",
    "Cuento con huecos: el debate sobre los deberes",
    "Una intervención formal con conectores de contraste, causa y adición.",
    "7 min",
    [
      sec(
        "La intervención",
        "«Los deberes son útiles; sin embargo, en exceso pueden ser perjudiciales. Además, no todos los alumnos tienen ayuda en casa. Dado que esto genera desigualdad, proponemos limitarlos. Por consiguiente, pedimos un máximo de una hora diaria.»",
        [
          ["Además, no todos los alumnos tienen ayuda en casa.", "Moreover, not all students have help at home."],
        ],
        [
          fb("Completa.", "Los deberes son útiles; ___, en exceso pueden ser perjudiciales.", "sin embargo", "«Sin embargo» marca contraste con la idea anterior y va entre pausas."),
        ]
      ),
    ],
    [
      fb("Completa.", "___, no todos los alumnos tienen ayuda en casa.", "Además", "«Además» añade un argumento nuevo en la misma dirección."),
      fb("Completa.", "___ esto genera desigualdad, proponemos limitarlos.", "Dado que", "«Dado que» introduce una causa conocida, típica de textos argumentativos."),
      fb("Completa.", "___, pedimos un máximo de una hora diaria.", "Por consiguiente", "«Por consiguiente» introduce una consecuencia en registro formal."),
      fb("Completa.", "___ de que algunos padres se oponen, la mayoría está de acuerdo.", "A pesar", "«A pesar de que» + verbo expresa una objeción que no impide lo principal."),
      fb("Completa.", "Los estudios son claros; ___, más horas no significan mejores notas.", "es más", "«Es más» añade un argumento todavía más fuerte que el anterior."),
      mc(
        "«El plan es barato; ___, es fácil de aplicar.»",
        ["asimismo", "sin embargo", "aunque", "a pesar de"],
        0,
        "«Asimismo» añade otra idea en registro formal: es barato; asimismo, es fácil. «Sin embargo» expresa contraste, y «aunque» y «a pesar de» expresan concesión."
      ),
      toEs("However, not everyone agrees.", "Sin embargo, no todo el mundo está de acuerdo.", "«Sin embargo» introduce un contraste y va seguido de coma.", ["No obstante, no todos están de acuerdo.", "Sin embargo, no todos están de acuerdo."]),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2d-elige-conector",
    "Elige y explica: el conector adecuado",
    "Contraste, causa, consecuencia o adición: identifica la relación.",
    "6 min",
    [
      sec(
        "Cuatro relaciones",
        "Contraste: sin embargo, no obstante, aunque. Causa: ya que, puesto que, dado que. Consecuencia: por lo tanto, así que. Adición: además, asimismo, es más.",
        [
          ["Es caro; además, está lejos.", "It's expensive; besides, it's far away."],
        ],
        [
          mc(
            "«El hotel está muy bien situado; ___, el personal es encantador.»",
            ["además", "sin embargo", "por lo tanto", "ya que"],
            0,
            "Las dos ideas son positivas y se suman: además. «Sin embargo» expresa contraste, «por lo tanto» consecuencia y «ya que» causa."
          ),
        ]
      ),
    ],
    [
      mc("«El hotel es precioso; ___, es carísimo.»", ["sin embargo", "además", "por lo tanto", "ya que"], 0, "La segunda idea contrasta con la primera: sin embargo. «Además» suma, «por lo tanto» expresa consecuencia y «ya que» causa."),
      mc("«El hotel estaba lleno; ___, dormimos en otro.»", ["por lo tanto", "sin embargo", "además", "puesto que"], 0, "Dormir en otro hotel es la consecuencia: por lo tanto. «Sin embargo» expresa contraste, «además» suma y «puesto que» introduce una causa."),
      mc("«___ el hotel estaba lleno, dormimos en otro.»", ["Como", "Sin embargo", "Por lo tanto", "Además"], 0, "Para una causa al principio de la oración se usa «como»: Como estaba lleno, dormimos en otro. «Sin embargo», «por lo tanto» y «además» no introducen una causa."),
      fb("Completa.", "No me gusta el fútbol; ___, fui al partido con mi padre.", "no obstante", "«No obstante» es un conector de contraste formal, equivalente a «sin embargo»."),
      fb("Completa.", "Tengo gripe, ___ no iré a clase.", "así que", "«Así que» introduce la consecuencia: la gripe provoca que no vaya."),
      fb("Completa.", "No iré a clase ___ tengo gripe.", "porque", "«Porque» introduce la causa y suele ir después de la oración principal."),
      toEs("It's cheap; moreover, it's very good.", "Es barato; además, es muy bueno.", "«Además» añade un argumento en la misma dirección; va entre punto y coma y coma.", ["Es barato y, además, es muy bueno.", "Es barato; es más, es muy bueno."]),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2d-corrige-conectores",
    "Corrige el párrafo: conectores mal usados",
    "Un texto argumentativo con conectores fuera de lugar.",
    "6 min",
    [
      sec(
        "El texto",
        "«A pesar de que la contaminación, muchas personas usan el coche. Sin embargo que el metro es barato, la gente no lo usa. Por lo tanto, el gobierno debe actuar ya que.» Tres errores.",
        [
          ["A pesar de la contaminación, muchas personas usan el coche.", "Despite the pollution, many people use their cars."],
        ],
        [
          mc(
            "¿Qué falla en «a pesar de que la contaminación»?",
            ["Ante un sustantivo va a pesar de, sin que.", "Falta un verbo en subjuntivo.", "Debe ser «sin embargo».", "Nada."],
            0,
            "Ante un sustantivo se usa «a pesar de», sin «que»: a pesar de la contaminación. «A pesar de que» necesita un verbo conjugado; no es cuestión de subjuntivo ni de usar «sin embargo»."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «A pesar de que la contaminación, muchas personas usan el coche.»", "A pesar de la contaminación, muchas personas usan el coche.", "«A pesar de» + sustantivo va sin «que»; «a pesar de que» necesita un verbo conjugado."),
      toEs("Corrige: «Sin embargo que el metro es barato, la gente no lo usa.»", "Aunque el metro es barato, la gente no lo usa.", "«Sin embargo» no une dos oraciones con «que»; para una concesión en una sola oración se usa «aunque».", ["A pesar de que el metro es barato, la gente no lo usa."]),
      toEs("Corrige: «Estaba enfermo, sin embargo fue a trabajar.»", "Estaba enfermo; sin embargo, fue a trabajar.", "Sin embargo tras punto y coma y con coma.", ["Estaba enfermo. Sin embargo, fue a trabajar."]),
      toEs("Corrige: «Puesto que llovía, por lo tanto nos quedamos.»", "Puesto que llovía, nos quedamos.", "«Puesto que» ya marca la causa; añadir «por lo tanto» repite la relación y sobra.", ["Llovía; por lo tanto, nos quedamos."]),
      ms(
        "¿Qué frases son correctas?",
        ["A pesar de estar cansada, terminó.", "Aunque estaba cansada, terminó.", "Sin embargo estaba cansada, terminó.", "A pesar de que cansada, terminó."],
        [0, 1],
        "«A pesar de» + infinitivo (a pesar de estar cansada) y «aunque» + verbo conjugado (aunque estaba cansada). «Sin embargo estaba» no introduce una cláusula así, y «a pesar de que cansada» no tiene verbo."
      ),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2d-frase-a-frase-argumento",
    "Frase a frase: construye un párrafo argumentativo",
    "Tesis, argumento, contraargumento y conclusión con conectores.",
    "6 min",
    [
      sec(
        "Las piezas",
        "Tesis: Creo que el teletrabajo es positivo. Argumento: Además, ahorra tiempo. Concesión: Aunque algunos se sienten aislados… Contraste: Sin embargo, hay soluciones. Conclusión: Por lo tanto, las empresas deberían ofrecerlo.",
        [
          ["Por lo tanto, las empresas deberían ofrecerlo.", "Therefore, companies should offer it."],
        ],
        [
          fb("Paso 1.", "Creo que el teletrabajo es positivo, ___ reduce el tráfico.", "ya que", "«Ya que» introduce la causa que justifica la opinión anterior."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "___, ahorra tiempo a los trabajadores.", "Además", "«Además» añade otro argumento a favor en la misma dirección."),
      fb("Paso 3.", "___ algunos se sienten aislados, la mayoría está satisfecha.", "Aunque", "«Aunque» + indicativo presenta un hecho que no impide lo principal."),
      fb("Paso 4.", "Hay problemas de comunicación; ___, existen herramientas para resolverlos.", "sin embargo", "«Sin embargo» contrasta el problema con la solución que sigue."),
      fb("Paso 5.", "___, las empresas deberían ofrecerlo.", "Por lo tanto", "«Por lo tanto» introduce la conclusión del razonamiento."),
      fb("Paso 5.", "___ que los beneficios son claros, no hay motivo para esperar.", "Dado", "«Dado que» introduce una causa conocida en registro formal."),
      toEs("Although it has disadvantages, it is the best option.", "Aunque tiene desventajas, es la mejor opción.", "«Aunque» + indicativo presenta un hecho real que no cambia la conclusión.", ["A pesar de que tiene desventajas, es la mejor opción.", "Aunque tiene inconvenientes, es la mejor opción."]),
    ]
  ),
  L(
    "emphasis-word-order-1",
    "b2d-patron-lo-anteposicion",
    "Práctica de patrones: el libro lo compré yo",
    "Mover el complemento al principio y retomarlo con un pronombre.",
    "6 min",
    [
      sec(
        "Anteposición",
        "Compré el libro ayer → El libro lo compré ayer. Di las llaves a Ana → Las llaves se las di a Ana. Si el complemento directo va delante, hace falta el pronombre lo/la/los/las.",
        [
          ["El pan lo traigo yo.", "I'll bring the bread."],
          ["A tu hermana no la he visto.", "I haven't seen your sister."],
        ],
        [
          fb("Mismo marco.", "He leído esa novela. → Esa novela ya ___ he leído.", "la", "Si el complemento directo va antes del verbo, se repite con pronombre: «novela» → «la»."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Preparo la cena yo. → La cena ___ preparo yo.", "la", "El complemento directo antepuesto se retoma con pronombre: «la cena» → «la»."),
      fb("Mismo marco.", "Vimos esos cuadros en Roma. → Esos cuadros ___ vimos en Roma.", "los", "El complemento directo antepuesto se retoma con pronombre: «esos cuadros» → «los»."),
      fb("Mismo marco.", "No conozco a tus padres. → A tus padres no ___ conozco.", "los", "El complemento directo de persona antepuesto se retoma con «los» (masculino plural)."),
      fb("Mismo marco.", "Di el regalo a mi madre. → El regalo ___ di a mi madre.", "se lo", "Le + lo → se lo."),
      fb("Mismo marco.", "Compré las entradas por internet. → Las entradas ___ compré por internet.", "las", "El complemento directo antepuesto se retoma con pronombre: «las entradas» → «las»."),
      mc(
        "«Los deberes ya ___ he hecho.»",
        ["los", "les", "lo", "—"],
        0,
        "Si el complemento directo va delante del verbo, se repite con un pronombre obligatorio que concuerda: los deberes → los. «Les» es indirecto, «lo» es singular y sin pronombre la frase es incorrecta."
      ),
      toEs("I'll pay for the coffee.", "El café lo pago yo.", "Al anteponer el complemento directo para destacar al sujeto, se repite con pronombre: «el café lo pago yo».", ["El café lo pago yo, tranquilo.", "Yo pago el café."]),
    ]
  ),
  L(
    "emphasis-word-order-1",
    "b2d-cadena-hendidas",
    "Cadena de transformaciones: fue Ana quien lo dijo",
    "Oraciones hendidas para destacar quién, cuándo, dónde o qué.",
    "6 min",
    [
      sec(
        "Ser … que",
        "Ana lo dijo → Fue Ana quien lo dijo (quién). Llegó ayer → Fue ayer cuando llegó (cuándo). Lo encontré aquí → Es aquí donde lo encontré (dónde). Quiero paz → Lo que quiero es paz (qué).",
        [
          ["Fue Ana quien lo dijo.", "It was Ana who said it."],
          ["Lo que necesito es dormir.", "What I need is to sleep."],
        ],
        [
          fb("Destaca quién.", "Luis rompió la ventana. → Fue Luis ___ rompió la ventana.", "quien", "Persona → quien / el que."),
        ]
      ),
    ],
    [
      fb("Destaca cuándo.", "Nos conocimos en 2015. → Fue en 2015 ___ nos conocimos.", "cuando", "En las oraciones hendidas de tiempo se usa «cuando»: «Fue en 2015 cuando…»."),
      fb("Destaca dónde.", "Nací en este hospital. → Es en este hospital ___ nací.", "donde", "En las oraciones hendidas de lugar se usa «donde»: «Es en este hospital donde…»."),
      fb("Destaca qué.", "Me molesta su actitud. → ___ me molesta es su actitud.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que me molesta es…»."),
      fb("Destaca quién.", "Mis padres pagaron el viaje. → Fueron mis padres ___ pagaron el viaje.", "los que", "Plural → los que / quienes."),
      fb("Destaca cómo.", "Lo aprendí así. → Fue así ___ lo aprendí.", "como", "En las oraciones hendidas de modo se usa «como»: «Fue así como…»."),
      mc(
        "«___ tú quien me llamó anoche?»",
        ["¿Fuiste", "¿Eras", "¿Estuviste", "¿Hubo"],
        0,
        "En una hendida en pasado, ser concuerda con el tiempo de la acción: ¿Fuiste tú quien me llamó? «Eras» es imperfecto, «estuviste» es de estar y «hubo» no forma esta estructura."
      ),
      toEs("It was my brother who told me.", "Fue mi hermano quien me lo dijo.", "En las hendidas de persona se usa «quien» (o «el que»): «Fue mi hermano quien…».", ["Fue mi hermano el que me lo dijo.", "Fue mi hermano quien me lo contó."]),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2d-circuito-lo-adjetivo-que",
    "Circuito: lo difícil que es, lo bien que canta",
    "Lo + adjetivo/adverbio + que para enfatizar el grado.",
    "6 min",
    [
      sec(
        "El grado",
        "¡Qué difícil es! → No sabes lo difícil que es. ¡Qué bien canta! → Me sorprende lo bien que canta. El adjetivo concuerda con el sustantivo: lo caras que son las entradas.",
        [
          ["No sabes lo difícil que es.", "You don't know how hard it is."],
          ["Me sorprende lo bien que canta.", "It surprises me how well she sings."],
        ],
        [
          fb("Estación 1.", "¡Qué cansada estoy! → No te imaginas lo ___ que estoy.", "cansada", "En «lo + adjetivo + que», el adjetivo concuerda con el sujeto: «cansada»."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "¡Qué caras son las entradas! → Mira lo ___ que son las entradas.", "caras", "En «lo + adjetivo + que», el adjetivo concuerda con «las entradas»: «caras»."),
      fb("Estación 2.", "¡Qué rápido corre! → Me impresiona lo ___ que corre.", "rápido", "«Rápido» aquí es adverbio (modifica a «corre»), así que no cambia de forma."),
      fb("Estación 2.", "¡Qué altos están tus hijos! → No me creo lo ___ que están tus hijos.", "altos", "En «lo + adjetivo + que», el adjetivo concuerda con «tus hijos»: «altos»."),
      fb("Estación 3.", "¡Qué mal cocina! → Ya sabes lo ___ que cocina.", "mal", "«Mal» es adverbio (modifica a «cocina»), no el adjetivo «malo»."),
      fb("Estación 3.", "¡Qué bonita es la ciudad! → Me encanta lo ___ que es la ciudad.", "bonita", "En «lo + adjetivo + que», el adjetivo concuerda con «la ciudad»: «bonita»."),
      mc(
        "«No sabes lo ___ que están los niños.»",
        ["contentos", "contento", "contentas", "contenta"],
        0,
        "En «lo + adjetivo + que», el adjetivo concuerda con el sustantivo: los niños → contentos. «Contento», «contentas» y «contenta» no concuerdan en género o número."
      ),
      toEs("You can't imagine how tired I am.", "No te imaginas lo cansado que estoy.", "«Lo + adjetivo + que» expresa intensidad; el adjetivo concuerda con el sujeto.", ["No te imaginas lo cansada que estoy.", "No puedes imaginar lo cansado que estoy."]),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2d-elige-neutro-enfatico",
    "Elige y explica: frase neutra o frase enfática",
    "Reconoce qué estructura destaca cada elemento.",
    "6 min",
    [
      sec(
        "¿Qué se destaca?",
        "Neutra: Juan compró el coche. Destaca el objeto: El coche lo compró Juan. Destaca a la persona: Fue Juan quien compró el coche. Inversión formal: Jamás había visto algo así.",
        [
          ["Jamás había visto algo así.", "Never had I seen anything like it."],
        ],
        [
          mc(
            "Quieres dejar claro que fue Marta, y no otra persona: ",
            ["Fue Marta quien pagó.", "Marta pagó.", "Pagó.", "La pagó Marta la cuenta."],
            0,
            "Para destacar quién hizo algo se usa la hendida ser + quien: Fue Marta quien pagó. «Marta pagó» y «Pagó» no enfatizan, y «La pagó Marta la cuenta» repite el objeto sin anteponerlo."
          ),
        ]
      ),
    ],
    [
      mc("Hablas de las fotos (tema ya conocido) y dices quién las hizo:", ["Las fotos las hizo mi hermano.", "Mi hermano hizo fotos.", "Hizo las fotos.", "Las fotos hizo mi hermano."], 0, "Un tema conocido se antepone y se repite con pronombre: Las fotos las hizo mi hermano. «Las fotos hizo mi hermano» omite el pronombre obligatorio, y las otras no anteponen el tema."),
      mc("Registro literario: nunca he estado tan feliz.", ["Jamás había estado tan feliz.", "Había estado jamás tan feliz.", "Tan feliz jamás.", "Estado jamás feliz."], 0, "En registro literario, «jamás» puede ir al principio con el verbo detrás: Jamás había estado tan feliz. Las otras opciones colocan jamás en mal lugar o dejan la frase sin verbo completo."),
      fb("Enfatiza.", "Necesito tiempo. → ___ necesito es tiempo.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que necesito es tiempo»."),
      fb("Enfatiza.", "No he visto nunca un lugar tan bonito. → ___ he visto un lugar tan bonito. (con jamás)", "Jamás", "Adverbio negativo al principio, sin «no»."),
      fb("Enfatiza.", "Esa canción la cantaba mi abuela. → Esa canción ___ cantaba mi abuela.", "la", "El complemento directo antepuesto se retoma obligatoriamente con pronombre: «la»."),
      toEs("What surprises me is his attitude.", "Lo que me sorprende es su actitud.", "Para destacar una cosa se usa «lo que»: «Lo que me sorprende es…».", ["Lo que me sorprende es la actitud que tiene."]),
    ]
  ),
  L(
    "cuyo-el-cual-1",
    "b2d-patron-cuyo",
    "Práctica de patrones: cuyo, cuya, cuyos, cuyas",
    "Cuyo concuerda con lo poseído, no con el poseedor.",
    "6 min",
    [
      sec(
        "Mira lo que viene después",
        "El escritor cuya novela leí (novela → cuya). La casa cuyos balcones son azules (balcones → cuyos). La profesora cuyo hijo estudia conmigo (hijo → cuyo).",
        [
          ["Es el escritor cuya novela leí.", "He's the writer whose novel I read."],
          ["Vivo en una casa cuyos balcones son azules.", "I live in a house whose balconies are blue."],
        ],
        [
          fb("Mismo marco.", "Es la artista ___ cuadros vimos en Madrid.", "cuyos", "«Cuyo» concuerda con lo poseído, no con el poseedor: «cuadros» → «cuyos»."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Es el chico ___ madre es actriz.", "cuya", "«Cuyo» concuerda con lo poseído, no con el poseedor: «madre» → «cuya»."),
      fb("Mismo marco.", "Es la empresa ___ director dimitió.", "cuyo", "«Cuyo» concuerda con lo poseído, no con el poseedor: «director» → «cuyo»."),
      fb("Mismo marco.", "Es un pueblo ___ calles son estrechas.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «calles» → «cuyas»."),
      fb("Mismo marco.", "Es el hombre ___ perro ladra toda la noche.", "cuyo", "«Cuyo» concuerda con lo poseído, no con el poseedor: «perro» → «cuyo»."),
      fb("Mismo marco.", "Son los vecinos ___ hija toca el violín.", "cuya", "«Cuyo» concuerda con lo poseído, no con los poseedores: «hija» → «cuya»."),
      mc(
        "«La autora, ___ libros se venden en todo el mundo, vive en Lima.»",
        ["cuyos", "cuya", "cuyas", "cuyo"],
        0,
        "«Cuyo» concuerda con lo poseído, no con el poseedor: libros (masculino plural) → cuyos. «Cuya», «cuyas» y «cuyo» no concuerdan con «libros»."
      ),
      toEs("She's the woman whose car was stolen.", "Es la mujer cuyo coche robaron.", "«Cuyo» concuerda con lo poseído («coche»), no con «la mujer».", ["Es la mujer a la que le robaron el coche.", "Es la mujer cuyo coche fue robado."]),
    ]
  ),
  L(
    "cuyo-el-cual-1",
    "b2d-cadena-unir-con-cuyo",
    "Cadena de transformaciones: une dos frases con cuyo",
    "Sustituye su/sus por cuyo/cuya/cuyos/cuyas.",
    "6 min",
    [
      sec(
        "De dos a una",
        "Tengo un amigo. Su padre es piloto. → Tengo un amigo cuyo padre es piloto. Visitamos una ciudad. Sus museos son famosos. → Visitamos una ciudad cuyos museos son famosos.",
        [
          ["Tengo un amigo cuyo padre es piloto.", "I have a friend whose father is a pilot."],
        ],
        [
          fb("Une.", "Conocí a una chica. Su hermano juega al fútbol. → Conocí a una chica ___ hermano juega al fútbol.", "cuyo", "«Su» se sustituye por «cuyo», que concuerda con «hermano», no con «chica»."),
        ]
      ),
    ],
    [
      fb("Une.", "Leí un libro. Su final me sorprendió. → Leí un libro ___ final me sorprendió.", "cuyo", "«Su» se sustituye por «cuyo», que concuerda con «final» (masculino singular)."),
      fb("Une.", "Hay un restaurante. Sus precios son muy bajos. → Hay un restaurante ___ precios son muy bajos.", "cuyos", "«Sus» se sustituye por «cuyos», que concuerda con «precios» (masculino plural)."),
      fb("Une.", "Es un país. Su capital es pequeña. → Es un país ___ capital es pequeña.", "cuya", "«Su» se sustituye por «cuya», que concuerda con «capital» (femenino singular)."),
      fb("Une.", "Tengo una vecina. Sus plantas son enormes. → Tengo una vecina ___ plantas son enormes.", "cuyas", "«Sus» se sustituye por «cuyas», que concuerda con «plantas» (femenino plural)."),
      fb("Une.", "Es el profesor. Su clase es la mejor. → Es el profesor ___ clase es la mejor.", "cuya", "«Su» se sustituye por «cuya», que concuerda con «clase», no con «profesor»."),
      toEs("I met a man whose daughter lives in Japan.", "Conocí a un hombre cuya hija vive en Japón.", "«Cuyo» concuerda con lo poseído («hija»), no con «un hombre»."),
    ]
  ),
  L(
    "cuyo-el-cual-1",
    "b2d-circuito-el-cual-preposiciones",
    "Circuito: según el cual, tras la cual, mediante los cuales",
    "El cual tras preposiciones largas, concordando con el antecedente.",
    "6 min",
    [
      sec(
        "El cual con preposiciones",
        "El cual, la cual, los cuales, las cuales concuerdan con el antecedente y aparecen sobre todo tras preposiciones largas: el informe según el cual…, la reunión tras la cual…, los métodos mediante los cuales…",
        [
          ["Es el informe según el cual los precios subirán.", "It's the report according to which prices will rise."],
        ],
        [
          fb("Estación 1.", "Fue una reunión tras ___ todos dimitieron.", "la cual", "Tras preposición, «el cual» concuerda con el antecedente: «reunión» → «la cual»."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Son las razones por ___ me fui.", "las cuales", "Tras preposición, «el cual» concuerda con el antecedente: «razones» → «las cuales»."),
      fb("Estación 2.", "Es una ley según ___ los alquileres bajarán.", "la cual", "Tras preposición, «el cual» concuerda con el antecedente: «ley» → «la cual»."),
      fb("Estación 2.", "Estos son los métodos mediante ___ se fabrica el vidrio.", "los cuales", "Tras preposición, «el cual» concuerda con el antecedente: «métodos» → «los cuales»."),
      fb("Estación 3.", "Es el puente bajo ___ vivía el pintor.", "el cual", "Tras preposición, «el cual» concuerda con el antecedente: «puente» → «el cual»."),
      fb("Estación 3.", "Tengo tres hermanos, dos de ___ viven en Chile.", "los cuales", "Tras cuantificadores como «dos de» se usa «los cuales» (o «los que»), nunca «que» solo."),
      mc(
        "«Presentó un estudio según ___ el café es saludable.»",
        ["el cual", "la cual", "cuyo", "que"],
        0,
        "Tras una preposición como «según» se usa artículo + cual, concordando con el antecedente: el estudio → según el cual. «La cual» no concuerda, «cuyo» indica posesión y «que» solo no va tras según."
      ),
      toEs("These are the reasons for which I left.", "Estas son las razones por las cuales me fui.", "Tras preposición se usa «el cual» concordando con el antecedente: «razones» → «las cuales».", ["Estas son las razones por las que me fui."]),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2d-corrige-cuyo",
    "Corrige el párrafo: concordancia de cuyo",
    "El error típico: hacer concordar cuyo con el poseedor.",
    "6 min",
    [
      sec(
        "El texto",
        "«María, cuyo hijo estudia en Londres, vive aquí. El pueblo, cuya iglesia es románica, es precioso. Es un autor cuya libros no conozco. Es la vecina cuyo perro siempre ladra.» Un error.",
        [
          ["Es un autor cuyos libros no conozco.", "He's an author whose books I don't know."],
        ],
        [
          mc(
            "¿Qué frase tiene un error?",
            ["Es un autor cuya libros no conozco.", "María, cuyo hijo estudia en Londres, vive aquí.", "El pueblo, cuya iglesia es románica, es precioso.", "Es la vecina cuyo perro siempre ladra."],
            0,
            "«Cuyo» concuerda con lo poseído: libros → cuyos, así que «cuya libros» es el error. Cuyo hijo, cuya iglesia y cuyo perro concuerdan bien."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Es un autor cuya libros no conozco.»", "Es un autor cuyos libros no conozco.", "«Cuyo» concuerda con lo poseído: «libros» es masculino plural → «cuyos»."),
      toEs("Corrige: «Es la chica cuya padre es juez.»", "Es la chica cuyo padre es juez.", "«Cuyo» concuerda con lo poseído, no con «la chica»: «padre» → «cuyo»."),
      toEs("Corrige: «Es el museo cuyo obras son famosas.»", "Es el museo cuyas obras son famosas.", "«Cuyo» concuerda con lo poseído, no con «el museo»: «obras» → «cuyas»."),
      toEs("Corrige: «Es el hombre cuyo su coche es rojo.»", "Es el hombre cuyo coche es rojo.", "«Cuyo» ya sustituye al posesivo, así que no se añade «su»."),
      toEs("Corrige: «Es la empresa cuyo la directora es chilena.»", "Es la empresa cuya directora es chilena.", "Tras «cuyo» no va artículo, y concuerda con lo poseído: «cuya directora»."),
      ms(
        "¿Qué frases son correctas?",
        ["Es la calle cuyos árboles son centenarios.", "Es el niño cuya abuela es mi profesora.", "Es la casa cuya ventanas son verdes.", "Es el perro cuyo el dueño es Luis."],
        [0, 1],
        "«Cuyo» concuerda con lo poseído y nunca lleva artículo: cuyos árboles, cuya abuela. «Cuya ventanas» no concuerda en número y «cuyo el dueño» añade un artículo que sobra."
      ),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2d-elige-que-el-cual-cuyo",
    "Elige y explica: que, el cual o cuyo",
    "Tres relativos, tres funciones.",
    "6 min",
    [
      sec(
        "¿Qué necesitas?",
        "Que: el relativo general (El libro que leí). El cual: tras preposición larga o para evitar ambigüedad (El libro según el cual…). Cuyo: posesión (El autor cuyo libro leí).",
        [
          ["El amigo de mi hermana, el cual vive en Roma, viene mañana.", "My sister's friend, who lives in Rome, is coming tomorrow."],
        ],
        [
          mc(
            "«Es la actriz ___ película ganó el Óscar.»",
            ["cuya", "que", "la cual", "cuyo"],
            0,
            "La película es de la actriz: posesión → cuya, concordando con «película». «Que» y «la cual» no expresan posesión, y «cuyo» no concuerda."
          ),
        ]
      ),
    ],
    [
      mc("«La película ___ vimos ganó el Óscar.»", ["que", "cuya", "la cual", "cuyo"], 0, "Sin preposición y sin posesión, el relativo general es «que»: la película que vimos. «Cuya/cuyo» indican posesión y «la cual» sin preposición ni coma suena forzado."),
      mc("«Es la teoría según ___ el universo se expande.»", ["la cual", "que", "cuya", "cuyo"], 0, "Tras una preposición como «según» se usa artículo + cual: según la cual. «Que» solo no va tras según, y «cuya/cuyo» indican posesión."),
      fb("Elige.", "Es el profesor ___ alumnos ganaron el premio.", "cuyos", "Para expresar posesión se usa «cuyo», que concuerda con «alumnos»."),
      fb("Elige.", "Es el profesor ___ me dio clase en primaria.", "que", "Sin posesión ni preposición, el relativo normal es «que»."),
      fb("Elige.", "Es un tema sobre ___ se ha escrito mucho.", "el cual", "Preposición + el cual (también «el que»)."),
      toEs("It's the company whose products we sell.", "Es la empresa cuyos productos vendemos.", "«Cuyo» expresa posesión y concuerda con «productos»: «cuyos».", ["Es la compañía cuyos productos vendemos."]),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2d-cuento-texto-formal",
    "Cuento con huecos: la nota de prensa del museo",
    "Un texto formal con cuyo y el cual.",
    "7 min",
    [
      sec(
        "La nota",
        "«El museo, cuya colección supera las diez mil piezas, inaugura una sala dedicada a Goya. La exposición, para la cual se han restaurado veinte cuadros, estará abierta hasta marzo. Los visitantes cuyas entradas sean de grupo tendrán descuento.»",
        [
          ["El museo, cuya colección supera las diez mil piezas…", "The museum, whose collection exceeds ten thousand pieces…"],
        ],
        [
          fb("Completa.", "El museo, ___ colección supera las diez mil piezas…", "cuya", "«Cuyo» concuerda con lo poseído: «colección» es femenino singular."),
        ]
      ),
    ],
    [
      fb("Completa.", "La exposición, para ___ se han restaurado veinte cuadros…", "la cual", "Tras preposición, «el cual» concuerda con el antecedente: «exposición» → «la cual»."),
      fb("Completa.", "Los visitantes ___ entradas sean de grupo tendrán descuento.", "cuyas", "«Cuyo» concuerda con lo poseído: «entradas» es femenino plural."),
      fb("Completa.", "El pintor, ___ obra conocemos todos, nació en Aragón.", "cuya", "«Cuyo» concuerda con lo poseído: «obra» es femenino singular."),
      fb("Completa.", "Se mostrarán los bocetos mediante ___ Goya preparaba sus cuadros.", "los cuales", "Tras preposición, «el cual» concuerda con el antecedente: «bocetos» → «los cuales»."),
      fb("Completa.", "La sala, ___ paredes son rojas, tiene luz natural.", "cuyas", "«Cuyo» concuerda con lo poseído: «paredes» es femenino plural."),
      toEs("The painter, whose works are famous, was born in Aragon.", "El pintor, cuyas obras son famosas, nació en Aragón.", "«Cuyo» concuerda con lo poseído («obras»), no con «el pintor»."),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-ronda-conectores",
    "Ronda rápida: conectores",
    "Doce huecos: contraste, causa, consecuencia y adición.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Contraste: aunque, sin embargo, no obstante, a pesar de (que). Causa: ya que, puesto que, dado que, como. Consecuencia: por lo tanto, por consiguiente, así que, de modo que. Adición: además, asimismo, es más.",
        [
          ["Como no contestabas, me fui.", "As you weren't answering, I left."],
        ],
        [
          fb("Rápido.", "___ no contestabas, me fui.", "Como", "«Como» causal va siempre al principio de la oración."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Es tarde, ___ me voy a dormir.", "así que", "«Así que» introduce la consecuencia de lo anterior."),
      fb("Rápido.", "Es tarde; ___, no tengo sueño.", "sin embargo", "«Sin embargo» marca contraste con lo que se esperaría."),
      fb("Rápido.", "___ de su edad, corre maratones.", "A pesar", "«A pesar de» + sustantivo presenta una dificultad que no impide lo principal."),
      fb("Rápido.", "Es inteligente y, ___, muy trabajadora.", "además", "«Además» añade una cualidad más, en la misma dirección."),
      fb("Rápido.", "___ todos están de acuerdo, empezamos.", "Puesto que", "«Puesto que» introduce una causa conocida y puede ir al principio."),
      fb("Rápido.", "Hubo un error; ___, se repetirá la votación.", "por consiguiente", "«Por consiguiente» introduce una consecuencia en registro formal."),
      fb("Rápido.", "No me gusta; ___, lo odio.", "es más", "«Es más» añade una idea todavía más fuerte que la anterior."),
      mc(
        "«___ tiene mucho dinero, vive con sencillez.»",
        ["Aunque", "Ya que", "Por lo tanto", "Además"],
        0,
        "«Aunque» une dos ideas que contrastan en la misma oración: Aunque tiene dinero, vive con sencillez. «Ya que» expresa causa, «por lo tanto» consecuencia y «además» suma."
      ),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-cadena-conectores-registro",
    "Cadena de transformaciones: de coloquial a formal",
    "Sustituye los conectores del habla por los de un informe.",
    "6 min",
    [
      sec(
        "Subir el registro",
        "pero → sin embargo / no obstante; así que → por lo tanto / por consiguiente; porque → ya que / dado que; y además → asimismo.",
        [
          ["Los resultados son buenos; no obstante, hay que mejorar.", "The results are good; nevertheless, we must improve."],
        ],
        [
          fb("Formal.", "Los resultados son buenos, pero hay que mejorar. → Los resultados son buenos; ___, hay que mejorar.", "no obstante", "«No obstante» es la versión formal de «pero»; va entre punto y coma y coma."),
        ]
      ),
    ],
    [
      fb("Formal.", "Faltan datos, así que no podemos decidir. → Faltan datos; ___, no podemos decidir.", "por consiguiente", "«Por consiguiente» es la versión formal de «así que»."),
      fb("Formal.", "Cancelamos el acto porque llovía. → Cancelamos el acto ___ llovía.", "dado que", "«Dado que» es una alternativa formal a «porque»."),
      fb("Formal.", "Y además, el proyecto es barato. → ___, el proyecto es económico.", "Asimismo", "«Asimismo» es la versión formal de «y además»."),
      fb("Formal.", "Aunque era caro, lo compraron. → ___ de su precio, lo adquirieron.", "A pesar", "«A pesar de» + sustantivo equivale a «aunque» + verbo."),
      fb("Formal.", "Como no había quórum, se suspendió. → ___ no había quórum, se suspendió.", "Puesto que", "«Puesto que» es la versión formal de «como» causal."),
      toEs("Therefore, we recommend approving the project.", "Por lo tanto, recomendamos aprobar el proyecto.", "«Por lo tanto» introduce la conclusión o la recomendación final.", ["Por consiguiente, recomendamos aprobar el proyecto.", "Por lo tanto, recomendamos que se apruebe el proyecto."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-habla-de-ti-opinion",
    "Habla de ti: tu opinión argumentada",
    "Defiende una opinión con conectores de nivel B2.",
    "6 min",
    [
      sec(
        "Tu argumento",
        "Tema: ¿Es mejor vivir en el campo o en la ciudad? Creo que en el campo, ya que hay menos estrés. Además, la vivienda es más barata. Sin embargo, hay menos servicios. Por lo tanto, depende de la etapa de la vida.",
        [
          ["Por lo tanto, depende de la etapa de la vida.", "Therefore, it depends on the stage of life."],
        ],
        [
          fb("Tu argumento.", "Prefiero el campo, ___ hay menos estrés.", "ya que", "«Ya que» introduce la causa que justifica la preferencia."),
        ]
      ),
    ],
    [
      fb("Tu argumento.", "___, la vivienda es más barata.", "Además", "«Además» añade otro argumento en la misma dirección."),
      fb("Tu argumento.", "___, hay menos servicios.", "Sin embargo", "«Sin embargo» introduce un argumento en contra."),
      fb("Tu argumento.", "___ vivir lejos, se puede teletrabajar.", "A pesar de", "«A pesar de» va seguido de infinitivo o sustantivo, no de verbo conjugado."),
      fb("Tu argumento.", "___, depende de la etapa de la vida.", "Por lo tanto", "«Por lo tanto» introduce la conclusión del razonamiento."),
      fb("Tu argumento.", "___ la ciudad ofrece más cultura, yo elijo el campo.", "Aunque", "«Aunque» + verbo conjugado presenta una objeción que no cambia la decisión."),
      toEs("Although the city is noisy, I love living there.", "Aunque la ciudad es ruidosa, me encanta vivir allí.", "«Aunque» + indicativo presenta un hecho real que no cambia lo principal.", ["A pesar de que la ciudad es ruidosa, me encanta vivir allí.", "Aunque la ciudad es ruidosa, me encanta vivir ahí."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-dictado-conectores",
    "Dictado: conectores en contexto",
    "Frases formales con conectores, palabra por palabra.",
    "5 min",
    [
      sec(
        "Escucha el conector",
        "Fíjate en la puntuación: sin embargo y por lo tanto suelen ir entre punto y coma y coma.",
        [
          ["El plan es ambicioso; sin embargo, es realista.", "The plan is ambitious; however, it's realistic."],
        ],
        [
          wo("A pesar de la crisis, las ventas aumentaron.", "A pesar de + sustantivo.", "Despite the crisis, sales increased."),
        ]
      ),
    ],
    [
      wo("Dado que nadie se opone, aprobamos la propuesta.", "Causa.", "Since nobody objects, we approve the proposal."),
      wo("No tenemos presupuesto, así que tendremos que esperar.", "Consecuencia.", "We don't have a budget, so we'll have to wait."),
      wo("El producto es barato y, además, muy resistente.", "Adición.", "The product is cheap and, moreover, very durable."),
      wo("Aunque llovía mucho, el partido continuó.", "Concesión.", "Although it was raining hard, the match went on."),
      toEs("Since you're tired, I'll drive.", "Ya que estás cansado, conduzco yo.", "«Ya que» introduce una causa conocida por el oyente.", ["Como estás cansado, conduzco yo.", "Puesto que estás cansada, conduzco yo."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-corrige-enfasis",
    "Corrige el párrafo: énfasis mal construido",
    "Pronombres olvidados y hendidas incompletas.",
    "6 min",
    [
      sec(
        "El texto",
        "«El pastel compré yo. Fue en Sevilla que nos conocimos. Lo que me gusta es la gente. A tus padres no he visto todavía.» Dos errores claros (pronombres olvidados) y una construcción que conviene pulir: «fue en Sevilla que» se oye mucho en América, pero en España y en registro formal se prefiere «fue en Sevilla donde».",
        [
          ["El pastel lo compré yo.", "I bought the cake."],
        ],
        [
          mc(
            "¿Qué falla en «el pastel compré yo»?",
            ["Falta el pronombre: el pastel lo compré yo.", "Falta «que».", "Debe ser «fue el pastel».", "Nada."],
            0,
            "Si el objeto va delante del verbo, se repite con un pronombre: el pastel lo compré yo. No falta «que» y «fue el pastel» cambia la estructura."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «El pastel compré yo.»", "El pastel lo compré yo.", "El complemento directo antepuesto se retoma obligatoriamente con pronombre: «lo compré»."),
      toEs("Pule para registro formal: «Fue en Sevilla que nos conocimos.»", "Fue en Sevilla donde nos conocimos.", "Lugar → donde. «Fue en Sevilla que…» es habitual en el habla de América, pero en España y en la escritura formal se prefiere el relativo que concuerda (donde).", ["Fue en Sevilla donde nos conocimos por primera vez."]),
      toEs("Corrige: «A tus padres no he visto todavía.»", "A tus padres no los he visto todavía.", "El complemento directo de persona antepuesto se retoma con pronombre: «no los he visto».", ["A tus padres todavía no los he visto."]),
      toEs("Corrige: «No sabes lo cansado que estoy.» (lo dice una mujer)", "No sabes lo cansada que estoy.", "En «lo + adjetivo + que», el adjetivo concuerda con quien habla: «cansada»."),
      toEs("Corrige: «Fue mis padres quienes pagaron.»", "Fueron mis padres quienes pagaron.", "Ser concuerda con el sujeto plural."),
      ms(
        "¿Qué frases son correctas?",
        ["Lo que más me gusta es viajar.", "Fue ayer cuando llegó.", "La carta escribí yo.", "Fue él que lo hizo."],
        [0, 1],
        "«Lo que más me gusta es viajar» y «Fue ayer cuando llegó» están bien. «La carta escribí yo» necesita el pronombre (la carta la escribí yo) y «Fue él que» necesita quien o el que."
      ),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-habla-de-ti-enfasis",
    "Habla de ti: lo que más te importa",
    "Usa hendidas y lo + adjetivo + que para hablar de ti.",
    "6 min",
    [
      sec(
        "Destaca lo tuyo",
        "Lo que más me importa es mi familia. Fue mi abuela quien me enseñó a cocinar. No te imaginas lo feliz que me hace viajar. El café lo tomo siempre solo.",
        [
          ["Fue mi abuela quien me enseñó a cocinar.", "It was my grandmother who taught me to cook."],
        ],
        [
          fb("Tú.", "___ más me importa es mi familia.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que más me importa es…»."),
        ]
      ),
    ],
    [
      fb("Tú.", "Fue mi abuela ___ me enseñó a cocinar.", "quien", "En las hendidas de persona se usa «quien» (o «la que»): «Fue mi abuela quien…»."),
      fb("Tú.", "No te imaginas lo feliz ___ me hace viajar.", "que", "La estructura de intensidad es «lo + adjetivo + que»: «lo feliz que me hace»."),
      fb("Tú.", "El café ___ tomo siempre solo.", "lo", "El complemento directo antepuesto se retoma con pronombre: «el café» → «lo»."),
      fb("Tú.", "Fue en la universidad ___ descubrí mi vocación.", "donde", "En las hendidas de lugar se usa «donde»: «Fue en la universidad donde…»."),
      fb("Tú.", "Lo que menos soporto ___ la impuntualidad.", "es", "La hendida «lo que + verbo» se completa con «es» + lo destacado."),
      toEs("What I like most is reading on the beach.", "Lo que más me gusta es leer en la playa.", "Para destacar algo se usa «lo que»: «Lo que más me gusta es…».", ["Lo que más me gusta es leer en la playa en verano."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-mezcla-resena-concierto",
    "Práctica mezclada: la crítica del concierto",
    "Énfasis y conectores en una reseña apasionada.",
    "7 min",
    [
      sec(
        "La crítica",
        "«Lo que vimos anoche fue histórico. A pesar de la lluvia, nadie se fue. La última canción la cantó todo el público. No se imaginan lo emocionante que fue. Jamás había visto algo así. Por lo tanto, les recomiendo que no se pierdan la gira.»",
        [
          ["La última canción la cantó todo el público.", "The whole audience sang the last song."],
        ],
        [
          fb("Completa.", "___ vimos anoche fue histórico.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que vimos fue histórico»."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ de la lluvia, nadie se fue.", "A pesar", "«A pesar de» + sustantivo presenta una dificultad que no impide lo principal."),
      fb("Completa.", "La última canción ___ cantó todo el público.", "la", "El complemento directo antepuesto se retoma con pronombre: «la canción» → «la»."),
      fb("Completa.", "No se imaginan lo ___ que fue.", "emocionante", "En «lo + adjetivo + que», el adjetivo expresa intensidad: «lo emocionante que fue»."),
      fb("Completa.", "___ había visto algo así.", "Jamás", "Si el adverbio negativo («jamás», «nunca») va antes del verbo, no se usa «no»."),
      fb("Completa.", "___, les recomiendo que no se pierdan la gira.", "Por lo tanto", "«Por lo tanto» introduce la conclusión o recomendación final."),
      mc(
        "«Fue la cantante ___ pidió silencio al final.»",
        ["quien", "que la", "cual", "cuya"],
        0,
        "En una hendida con persona se usa «quien» (o «la que»): fue la cantante quien pidió silencio. «Que la» añade un pronombre que sobra, «cual» necesita artículo y «cuya» indica posesión."
      ),
      toEs("It was the guitarist who stole the show.", "Fue el guitarrista quien se llevó todos los aplausos.", "En las hendidas de persona se usa «quien» (o «el que»): «Fue el guitarrista quien…».", ["Fue el guitarrista el que se llevó todos los aplausos.", "Fue el guitarrista quien triunfó."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-ronda-cuyo-el-cual",
    "Ronda rápida: cuyo y el cual",
    "Diez huecos de concordancia.",
    "5 min",
    [
      sec(
        "Dos concordancias",
        "Cuyo → con lo poseído (la casa cuyas ventanas). El cual → con el antecedente (la casa en la cual vivo).",
        [
          ["Es la casa en la cual nací.", "It's the house in which I was born."],
        ],
        [
          fb("Rápido.", "Es la casa ___ ventanas dan al mar.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «ventanas» → «cuyas»."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Es la casa en ___ nací.", "la cual", "Tras preposición, «el cual» concuerda con el antecedente: «casa» → «la cual»."),
      fb("Rápido.", "Es el árbol ___ ramas tocan el tejado.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «ramas» → «cuyas»."),
      fb("Rápido.", "Es el árbol bajo ___ nos besamos.", "el cual", "Tras preposición, «el cual» concuerda con el antecedente: «árbol» → «el cual»."),
      fb("Rápido.", "Son los libros ___ autor ganó el Nobel.", "cuyo", "«Cuyo» concuerda con lo poseído, no con el poseedor: «autor» → «cuyo»."),
      fb("Rápido.", "Son los libros gracias a ___ aprendí a leer.", "los cuales", "Tras preposición, «el cual» concuerda con el antecedente: «libros» → «los cuales»."),
      fb("Rápido.", "Es la amiga ___ hermanos viven en Perú.", "cuyos", "«Cuyo» concuerda con lo poseído, no con el poseedor: «hermanos» → «cuyos»."),
      fb("Rápido.", "Es la amiga con ___ viajé a Perú.", "la cual", "Tras preposición, «el cual» concuerda con el antecedente: «amiga» → «la cual»."),
      mc(
        "«Es el barrio ___ fiestas son famosas.»",
        ["cuyas", "cuyos", "cuya", "el cual"],
        0,
        "«Cuyo» concuerda con lo poseído: fiestas (femenino plural) → cuyas. «Cuyos» y «cuya» no concuerdan, y «el cual» no expresa posesión."
      ),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-dictado-cuyo-el-cual",
    "Dictado: relativos formales",
    "Frases con cuyo y el cual, palabra por palabra.",
    "5 min",
    [
      sec(
        "Registro formal",
        "Cuyo y el cual son típicos de textos escritos, noticias e informes.",
        [
          ["El pueblo, cuyos habitantes son pocos, resiste.", "The village, whose inhabitants are few, holds on."],
        ],
        [
          wo("Es una ciudad cuyo centro es muy antiguo.", "Cuyo + centro.", "It's a city whose centre is very old."),
        ]
      ),
    ],
    [
      wo("Es el informe según el cual el paro ha bajado.", "Según el cual.", "It's the report according to which unemployment has fallen."),
      wo("Conocí a una escritora cuyas novelas me encantan.", "Cuyas + novelas.", "I met a writer whose novels I love."),
      wo("Es la razón por la cual dimitió.", "Por la cual.", "It's the reason why he resigned."),
      wo("Tengo dos primos, uno de los cuales vive en Cuba.", "Uno de los cuales.", "I have two cousins, one of whom lives in Cuba."),
      toEs("It's the singer whose songs I listen to every day.", "Es la cantante cuyas canciones escucho todos los días.", "«Cuyo» concuerda con lo poseído («canciones»), no con «la cantante».", ["Es el cantante cuyas canciones escucho todos los días.", "Es la cantante cuyas canciones escucho cada día."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-1",
    "b2d-rep-relativas-anuncios",
    "Circuito acumulativo: se busca / se vende",
    "Repaso espaciado: antecedente conocido o desconocido en anuncios reales.",
    "6 min",
    [
      sec(
        "Recuerda",
        "Se busca / necesito / quiero + algo desconocido → subjuntivo. Se vende / tengo / hay + algo conocido → indicativo.",
        [
          ["Se busca camarero que hable inglés.", "Waiter who speaks English wanted."],
          ["Se vende piso que tiene garaje.", "Flat with garage for sale."],
        ],
        [
          fb("Estación 1.", "Se busca cocinero que ___ experiencia en cocina japonesa. (tener)", "tenga", "Desconocido."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Se vende moto que ___ solo cinco mil kilómetros. (tener)", "tiene", "Conocida."),
      fb("Estación 2.", "Familia busca canguro que ___ con coche. (venir)", "venga", "Desconocida."),
      fb("Estación 2.", "Alquilo estudio que ___ junto a la universidad. (estar)", "está", "Conocido."),
      fb("Estación 3.", "¿Alguien conoce un taller que ___ los domingos? (abrir)", "abra", "Pregunta."),
      fb("Estación 3.", "No hay ningún taller aquí que ___ los domingos. (abrir)", "abra", "Inexistente."),
      mc(
        "«Busco a la persona que ___ mi cartera ayer.» (sé que alguien la encontró)",
        ["encontró", "encontrara", "encuentre", "encontraría"],
        0,
        "Sabes que alguien encontró la cartera: antecedente concreto → indicativo, encontró. «Encontrara» y «encuentre» son subjuntivo (persona desconocida), y «encontraría» es condicional."
      ),
      toEs("I'm looking for a flat that allows pets.", "Busco un piso que admita mascotas.", "El piso buscado aún no es concreto, así que la relativa va en subjuntivo: «admita».", ["Busco un piso que acepte mascotas.", "Busco un piso donde admitan mascotas."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-1",
    "b2d-rep-relativas-pasado",
    "Pares mínimos: busco alguien que sepa / buscaba alguien que supiera",
    "Repaso espaciado: relativas en subjuntivo en presente y en pasado.",
    "6 min",
    [
      sec(
        "Secuencia en la relativa",
        "Presente: No hay nadie que me entienda. Pasado: No había nadie que me entendiera. Condicional: Me gustaría un trabajo que me permitiera viajar.",
        [
          ["Me gustaría un trabajo que me permitiera viajar.", "I'd like a job that let me travel."],
        ],
        [
          fb("Par.", "No había nadie que ___ ayudarme. (querer)", "quisiera", "Pasado."),
        ]
      ),
    ],
    [
      fb("Par.", "No hay nadie que ___ ayudarme. (querer)", "quiera", "Presente."),
      fb("Par.", "Queríamos un hotel que ___ piscina. (tener)", "tuviera", "Pasado."),
      fb("Par.", "Queremos un hotel que ___ piscina. (tener)", "tenga", "Presente."),
      fb("Par.", "Me encantaría un coche que no ___ gasolina. (gastar)", "gastara", "Condicional."),
      fb("Par.", "Necesitaba a alguien que ___ francés. (traducir)", "tradujera", "Pasado."),
      fb("Par.", "Necesito a alguien que ___ francés. (traducir)", "traduzca", "Presente."),
      toEs("There was nobody who could help us.", "No había nadie que pudiera ayudarnos.", "Antecedente negativo en pasado → imperfecto de subjuntivo: «pudiera».", ["No había nadie que nos pudiera ayudar.", "No había nadie que pudiese ayudarnos."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-2",
    "b2d-rep-adverbiales-cuando",
    "Ronda rápida: cuando, en cuanto, hasta que",
    "Repaso espaciado: futuro con subjuntivo, hábito y pasado con indicativo.",
    "5 min",
    [
      sec(
        "Tres tiempos",
        "Futuro → subjuntivo: Cuando llegues, llámame. Hábito → indicativo: Cuando llego, llamo. Pasado → indicativo: Cuando llegué, llamé.",
        [
          ["En cuanto termine, te aviso.", "As soon as I finish, I'll let you know."],
        ],
        [
          fb("Rápido.", "En cuanto ___, te aviso. (terminar, yo)", "termine", "Futuro."),
        ]
      ),
    ],
    [
      fb("Rápido.", "En cuanto ___, siempre me ducho. (llegar, yo)", "llego", "Hábito."),
      fb("Rápido.", "En cuanto ___, me duché. (llegar, yo)", "llegué", "Pasado."),
      fb("Rápido.", "No me iré hasta que me lo ___. (explicar, tú)", "expliques", "Futuro."),
      fb("Rápido.", "No me fui hasta que me lo ___. (explicar, tú)", "explicaste", "Pasado."),
      fb("Rápido.", "Cuando ___ jubilado, viajaré. (estar)", "esté", "Futuro."),
      fb("Rápido.", "Tan pronto como ___ el sol, salimos. (salir)", "salga", "Futuro."),
      fb("Rápido.", "Después de que ___ los invitados, recogimos todo. (irse)", "se fueron", "Pasado."),
      mc(
        "«Llámame cuando ___ la noticia.»",
        ["sepas", "sabes", "sabrás", "supiste"],
        0,
        "Cuando + acción futura → subjuntivo: cuando sepas. «Sabes» describiría un hábito, «sabrás» es futuro (imposible tras cuando) y «supiste» es pasado."
      ),
    ]
  ),
  L(
    "b2-vocabulary-practice-3",
    "b2d-rep-adverbiales-finalidad",
    "Elige y explica: para, para que, sin, sin que",
    "Repaso espaciado: mismo sujeto (infinitivo) o sujeto distinto (subjuntivo).",
    "6 min",
    [
      sec(
        "¿Mismo sujeto?",
        "Para / sin / antes de + infinitivo si el sujeto es el mismo. Para que / sin que / antes de que + subjuntivo si cambia. Salí sin despedirme (yo, yo). Salí sin que nadie me viera (yo, nadie).",
        [
          ["Salí sin despedirme.", "I left without saying goodbye."],
          ["Salí sin que nadie me viera.", "I left without anyone seeing me."],
        ],
        [
          mc(
            "«Lo dejé en la mesa para que lo ___.» (tú lo ves)",
            ["vieras", "ver", "veías", "ves"],
            0,
            "Con sujeto distinto (yo lo dejé, tú lo ves) y verbo principal en pasado: para que + imperfecto de subjuntivo, vieras. «Ver» sería para el mismo sujeto, y «veías» y «ves» son indicativo."
          ),
        ]
      ),
    ],
    [
      mc("«Lo dejé en la mesa para ___ al salir.» (yo lo veo)", ["verlo", "que lo viera", "que lo veo", "verlo yo mismo ayer"], 0, "Con el mismo sujeto (yo lo dejé, yo lo veo) se usa para + infinitivo: para verlo. «Que lo viera» sugiere otro sujeto, «que lo veo» usa indicativo y la última añade palabras que sobran."),
      fb("Elige.", "Entré sin ___ ruido. (hacer, yo)", "hacer", "Mismo sujeto."),
      fb("Elige.", "Entré sin que mis padres me ___. (oír)", "oyeran", "Sujeto distinto, pasado."),
      fb("Elige.", "Te lo explico para que no ___ errores. (cometer)", "cometas", "Sujeto distinto, presente."),
      fb("Elige.", "Estudio para ___ la oposición. (aprobar)", "aprobar", "Mismo sujeto."),
      fb("Elige.", "Me fui antes de que ___ a llover. (empezar)", "empezara", "Antes de que, pasado."),
      toEs("I bought it so that you could use it.", "Lo compré para que pudieras usarlo.", "«Para que» en pasado exige imperfecto de subjuntivo: «pudieras».", ["Lo compré para que lo pudieras usar.", "Lo compré para que lo usaras."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-4",
    "b2d-rep-imperfecto-formas",
    "Práctica de patrones: el imperfecto de subjuntivo sin errores",
    "Repaso espaciado: formación regular e irregular.",
    "6 min",
    [
      sec(
        "La raíz del indefinido",
        "Toma ellos del indefinido: pidieron, durmieron, pusieron, fueron, dijeron. Quita -ron y añade -ra/-ras/-ra/-ramos/-rais/-ran.",
        [
          ["Me pidió que durmiera un poco.", "She asked me to sleep a bit."],
        ],
        [
          fb("Forma.", "Me pidió que ___ un poco. (dormir, yo)", "durmiera", "Durmieron → durmiera."),
        ]
      ),
    ],
    [
      fb("Forma.", "Nos pidió que ___ la verdad. (decir, nosotros)", "dijéramos", "Dijeron; tilde."),
      fb("Forma.", "Quería que ___ la mesa. (poner, vosotros)", "pusierais", "Pusieron."),
      fb("Forma.", "Ojalá ___ más tiempo. (haber)", "hubiera", "Hubieron → hubiera."),
      fb("Forma.", "Le pidieron que ___ el coche. (conducir, él)", "condujera", "Condujeron."),
      fb("Forma.", "Era raro que no ___ nadie. (oír)", "oyera", "Oyeron."),
      fb("Forma.", "Me sorprendió que ___ tan temprano. (venir, ellos)", "vinieran", "Vinieron."),
      mt(
        "Relaciona el infinitivo con el imperfecto de subjuntivo (yo).",
        [
          ["andar", "anduviera"],
          ["caber", "cupiera"],
          ["pedir", "pidiera"],
          ["ser", "fuera"],
        ],
        "Raíz del indefinido."
      ),
    ]
  ),
  L(
    "b2-vocabulary-practice-5",
    "b2d-rep-imperfecto-secuencia",
    "Cadena de transformaciones: la secuencia de tiempos",
    "Repaso espaciado: pasa frases del presente al pasado.",
    "6 min",
    [
      sec(
        "Mover al pasado",
        "Me pide que venga → Me pidió que viniera. Es mejor que lo sepas → Era mejor que lo supieras. Dudo que llegue → Dudaba que llegara.",
        [
          ["Era mejor que lo supieras.", "It was better that you knew."],
        ],
        [
          fb("Al pasado.", "Me pide que venga. → Me pidió que ___.", "viniera", "Con pidió (pasado), imperfecto de subjuntivo: venga → viniera."),
        ]
      ),
    ],
    [
      fb("Al pasado.", "Temo que no lleguemos. → Temía que no ___.", "llegáramos", "Con temía (pasado), imperfecto de subjuntivo; nosotros lleva tilde: llegáramos."),
      fb("Al pasado.", "Le molesta que la interrumpan. → Le molestaba que la ___.", "interrumpieran", "Con molestaba (pasado), imperfecto de subjuntivo: interrumpieron → interrumpieran."),
      fb("Al pasado.", "Es probable que llueva. → Era probable que ___.", "lloviera", "Con era probable (pasado), imperfecto de subjuntivo: llovieron → lloviera."),
      fb("Al pasado.", "No creo que sea verdad. → No creía que ___ verdad.", "fuera", "Con no creía (pasado), imperfecto de subjuntivo de ser: fuera."),
      fb("Al pasado.", "Busco a alguien que me escuche. → Buscaba a alguien que me ___.", "escuchara", "Antecedente buscado en pasado → imperfecto de subjuntivo en la relativa: escuchara."),
      fb("Al pasado.", "Lo hago para que estés contento. → Lo hice para que ___ contento.", "estuvieras", "Con hice (pasado), para que va con imperfecto de subjuntivo: estuvieras."),
      toEs("They wanted us to stay.", "Querían que nos quedáramos.", "«Querer que» en pasado exige imperfecto de subjuntivo: «nos quedáramos».", ["Querían que nos quedásemos."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-6",
    "b2d-rep-si-hipotesis",
    "Preguntas y respuestas: ¿qué harías si…?",
    "Repaso espaciado: hipótesis sobre el presente.",
    "6 min",
    [
      sec(
        "Imagina",
        "Si + imperfecto de subjuntivo, condicional. ¿Qué harías si no tuvieras móvil? Si no tuviera móvil, leería más.",
        [
          ["Si no tuviera móvil, leería más.", "If I didn't have a phone, I'd read more."],
        ],
        [
          fb("Responde.", "—¿Qué harías si no tuvieras móvil? —___ más. (leer)", "Leería", "Condicional."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Adónde irías si ___ un mes libre? (tener, tú) —A Islandia.", "tuvieras", "Si + imperfecto de subjuntivo."),
      fb("Responde.", "—¿Qué cambiarías de tu ciudad si ___ alcalde? (ser, tú)", "fueras", "Si + imperfecto de subjuntivo."),
      fb("Responde.", "—Si fuera alcalde, ___ más parques. (crear)", "crearía", "Condicional."),
      fb("Responde.", "—¿Qué dirías si te ___ un premio? (dar, ellos)", "dieran", "Si + imperfecto de subjuntivo."),
      fb("Responde.", "—Si me dieran un premio, ___ gracias a mi familia. (dar)", "daría", "Condicional."),
      mc(
        "—¿Qué harías si ___ hablar con los animales?",
        ["pudieras", "podrías", "puedes", "puedas"],
        0,
        "Una hipótesis presente usa si + imperfecto de subjuntivo: si pudieras. «Podrías» no va tras si, «puedes» sería una condición real y «puedas» no se usa tras si."
      ),
      toEs("If I were you, I'd rest.", "Si yo fuera tú, descansaría.", "«Si yo fuera tú» + condicional es la fórmula para dar consejos.", ["Yo que tú, descansaría.", "Si fuera tú, descansaría."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-6",
    "b2d-rep-si-corrige",
    "Corrige el párrafo: si + condicional",
    "Repaso espaciado: el error más persistente de las hipótesis.",
    "6 min",
    [
      sec(
        "La redacción",
        "«Si yo sería presidente, bajaría los impuestos. Si tendríamos más tiempo, viajaríamos. Me habla como si soy tonto.» Tres errores.",
        [
          ["Si yo fuera presidente, bajaría los impuestos.", "If I were president, I'd lower taxes."],
        ],
        [
          mc(
            "¿Qué falla en «si yo sería presidente»?",
            ["Tras si, imperfecto de subjuntivo: fuera.", "Falta un artículo.", "Debe ser «soy».", "Nada."],
            0,
            "Tras si nunca va el condicional; la hipótesis usa imperfecto de subjuntivo: si yo fuera presidente. No falta artículo y «soy» haría la condición real, algo absurdo aquí."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Si yo sería presidente, bajaría los impuestos.»", "Si yo fuera presidente, bajaría los impuestos.", "Tras «si» condicional nunca va condicional: «si fuera», no «si sería»."),
      toEs("Corrige: «Si tendríamos más tiempo, viajaríamos.»", "Si tuviéramos más tiempo, viajaríamos.", "Tras «si» condicional nunca va condicional: «si tuviéramos», no «si tendríamos»."),
      toEs("Corrige: «Me habla como si soy tonto.»", "Me habla como si fuera tonto.", "Como si + imperfecto de subjuntivo."),
      toEs("Corrige: «Si hace buen tiempo, iríamos a la playa.»", "Si hace buen tiempo, iremos a la playa.", "Con «si» + presente (condición real), la consecuencia va en futuro: «iremos».", ["Si hiciera buen tiempo, iríamos a la playa."]),
      toEs("Corrige: «Si lo sabría, te lo diría.»", "Si lo supiera, te lo diría.", "Tras «si» condicional nunca va condicional: «si supiera», no «si sabría»."),
      ms(
        "¿Qué frases son correctas?",
        ["Si pudiera, iría.", "Iría si pudiera.", "Si podría, iría.", "Si pudiera, iré."],
        [0, 1],
        "Si + imperfecto de subjuntivo + condicional, en cualquier orden: si pudiera, iría. «Si podría» usa condicional tras si y «Si pudiera, iré» mezcla la hipótesis con futuro."
      ),
    ]
  ),
  L(
    "b2-vocabulary-practice-7",
    "b2d-rep-condicional-perfecto-arrepentimientos",
    "Dictado: arrepentimientos",
    "Repaso espaciado: si hubiera…, habría…; ojalá hubiera…",
    "5 min",
    [
      sec(
        "El pasado que no fue",
        "Si + hubiera + participio, habría + participio. Ojalá + hubiera + participio.",
        [
          ["Ojalá hubiera aprendido a tocar el piano.", "I wish I had learned to play the piano."],
        ],
        [
          wo("Si hubiera salido antes, no habría perdido el avión.", "Irreal pasado.", "If I had left earlier, I wouldn't have missed the plane."),
        ]
      ),
    ],
    [
      wo("Ojalá hubiera aprendido a tocar el piano.", "Lamento.", "I wish I had learned to play the piano."),
      wo("Si me lo hubieras dicho, habría venido.", "Irreal pasado.", "If you had told me, I would have come."),
      wo("Deberías haberme llamado antes.", "Reproche.", "You should have called me earlier."),
      wo("Si hubiéramos reservado, ahora tendríamos mesa.", "Mixta.", "If we had booked, we would have a table now."),
      toEs("If I had known, I wouldn't have gone.", "Si lo hubiera sabido, no habría ido.", "Condición irreal en el pasado: «si lo hubiera sabido» + «no habría ido».", ["Si lo hubiese sabido, no habría ido.", "Si lo hubiera sabido, no hubiera ido."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-8",
    "b2d-rep-estilo-indirecto-mensajes",
    "Frase a frase: transmite un mensaje",
    "Repaso espaciado: estilo indirecto con afirmaciones, preguntas y órdenes.",
    "6 min",
    [
      sec(
        "El mensaje de tu jefa",
        "«Mañana no vengo. ¿Has enviado el informe? Llama al cliente y dile que el pedido llegará el lunes.» → Mi jefa dijo que al día siguiente no iba, me preguntó si había enviado el informe y me pidió que llamara al cliente.",
        [
          ["Me pidió que llamara al cliente.", "She asked me to call the client."],
        ],
        [
          fb("Paso 1.", "Dijo que al día siguiente no ___. (ir)", "iba", "Presente → imperfecto; venir → ir."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Me preguntó si ___ el informe. (enviar)", "había enviado", "Perfecto → pluscuamperfecto."),
      fb("Paso 3.", "Me pidió que ___ al cliente. (llamar)", "llamara", "Orden → imperfecto de subjuntivo."),
      fb("Paso 4.", "…y que le ___ que el pedido llegaría el lunes. (decir)", "dijera", "Orden."),
      fb("Paso 5.", "Dijo que el pedido ___ el lunes. (llegar)", "llegaría", "Futuro → condicional."),
      fb("Paso 6.", "Me preguntó dónde ___ los contratos. (estar)", "estaban", "Presente → imperfecto."),
      toEs("She asked me if I had sent the report.", "Me preguntó si había enviado el informe.", "Pregunta de sí o no → «si»; el pretérito perfecto pasa a pluscuamperfecto: «había enviado».", ["Me preguntó si había mandado el informe."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-9",
    "b2d-rep-ser-estar-haber-ronda",
    "Ronda rápida: ser, estar y haber",
    "Repaso espaciado: los usos matizados.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Evento → ser. Localización de cosas y personas → estar. Existencia → haber. Adjetivos con doble significado: listo, rico, malo, aburrido, verde.",
        [
          ["La cena es a las nueve en casa de Pilar.", "Dinner is at nine at Pilar's."],
        ],
        [
          fb("Rápido.", "La cena ___ a las nueve.", "es", "Para eventos (dónde o cuándo ocurren) se usa «ser»: «La cena es a las nueve»."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Pilar ___ en la cocina.", "está", "Para la ubicación de personas o cosas concretas se usa «estar»."),
      fb("Rápido.", "___ vino en la nevera.", "Hay", "«Hay» presenta algo nuevo sin artículo determinado: «hay vino»."),
      fb("Rápido.", "El vino ___ en la nevera.", "está", "Con algo ya conocido («el vino») la ubicación se expresa con «estar», no con «hay»."),
      fb("Rápido.", "La paella ___ riquísima.", "está", "Para valorar el sabor de una comida se usa «estar»: «está riquísima»."),
      fb("Rápido.", "Su familia ___ muy rica.", "es", "«Ser rico» significa tener dinero; «estar rico» es tener buen sabor."),
      fb("Rápido.", "Mi hijo ___ malo; tiene fiebre.", "está", "«Estar malo» significa estar enfermo; «ser malo» es tener mala conducta."),
      fb("Rápido.", "La película ___ aburridísima.", "es", "«Ser aburrido» significa que algo aburre; «estar aburrido» es sentir aburrimiento."),
      mc(
        "«¿Dónde ___ la boda de tu prima?»",
        ["es", "está", "hay", "estará en"],
        0,
        "Para el lugar de un evento se usa ser: ¿Dónde es la boda? «Está» se usa para objetos o personas, «hay» no lleva sujeto definido y «estará en» repite la preposición."
      ),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2d-rep-verbos-cambio-cuento",
    "Cuento con huecos: el cambio de Andrés",
    "Repaso espaciado: ponerse, volverse, hacerse, llegar a ser, convertirse en.",
    "6 min",
    [
      sec(
        "La historia",
        "«Andrés era tímido y se ponía rojo por todo. En la universidad se hizo periodista y, con los años, se volvió muy seguro. Llegó a ser director de un periódico, que se convirtió en el más leído del país.»",
        [
          ["Se volvió muy seguro.", "He became very confident."],
        ],
        [
          fb("Completa.", "Andrés se ___ rojo por todo. (ponerse, imperfecto)", "ponía", "Reacción."),
        ]
      ),
    ],
    [
      fb("Completa.", "En la universidad se ___ periodista. (hacerse)", "hizo", "Profesión."),
      fb("Completa.", "Con los años se ___ muy seguro. (volverse)", "volvió", "Carácter."),
      fb("Completa.", "___ director de un periódico. (llegar a ser)", "Llegó a ser", "Logro."),
      fb("Completa.", "El periódico se ___ en el más leído del país. (convertirse)", "convirtió", "Transformación."),
      fb("Completa.", "Al recibir el premio, se ___ muy nervioso. (ponerse)", "puso", "Momento."),
      toEs("He became a journalist.", "Se hizo periodista.", "Para una profesión alcanzada por esfuerzo se usa «hacerse»: «se hizo periodista».", ["Llegó a ser periodista."]),
    ]
  ),
  L(
    "b2-comprehensive-review-1",
    "b2d-rep-conectores-elige",
    "Elige y explica: sin embargo, por lo tanto, además, ya que",
    "Repaso espaciado: la relación lógica decide el conector.",
    "6 min",
    [
      sec(
        "Cuatro relaciones",
        "Contraste → sin embargo. Consecuencia → por lo tanto. Adición → además. Causa → ya que.",
        [
          ["Estaba cerrado; por lo tanto, volvimos a casa.", "It was closed; therefore, we went home."],
        ],
        [
          mc(
            "«El museo estaba cerrado; ___, volvimos a casa.»",
            ["por lo tanto", "sin embargo", "además", "ya que"],
            0,
            "Volver a casa es la consecuencia de que estuviera cerrado: por lo tanto. «Sin embargo» es contraste, «además» suma y «ya que» introduce una causa."
          ),
        ]
      ),
    ],
    [
      mc("«El museo estaba cerrado; ___, pudimos ver el jardín.»", ["sin embargo", "por lo tanto", "ya que", "además"], 0, "Ver el jardín contrasta con que el museo estuviera cerrado: sin embargo. «Por lo tanto» es consecuencia, «ya que» causa y «además» suma."),
      mc("«Volvimos a casa ___ el museo estaba cerrado.»", ["ya que", "sin embargo", "por lo tanto", "además"], 0, "Lo que sigue explica la causa de volver: ya que. «Sin embargo» es contraste, «por lo tanto» consecuencia y «además» suma."),
      mc("«El jardín era precioso; ___, era gratis.»", ["además", "sin embargo", "ya que", "por lo tanto"], 0, "Ser gratis se suma a ser precioso: además. «Sin embargo» es contraste, «ya que» causa y «por lo tanto» consecuencia."),
      fb("Completa.", "___ la lluvia, fuimos al parque.", "A pesar de", "«A pesar de» + sustantivo presenta una dificultad que no impide lo principal."),
      fb("Completa.", "___ hacía frío, llevamos abrigo.", "Como", "«Como» causal va al principio y presenta la causa antes del efecto."),
      toEs("Despite everything, it was a good day.", "A pesar de todo, fue un buen día.", "«A pesar de todo» es una concesión fija: las dificultades no impiden el resultado.", ["Pese a todo, fue un buen día."]),
    ]
  ),
  L(
    "b2-comprehensive-review-2",
    "b2d-rep-mezcla-subjuntivo-universo",
    "Práctica mezclada: el universo del subjuntivo",
    "Repaso espaciado: relativas, adverbiales, secuencia y ojalá juntos.",
    "7 min",
    [
      sec(
        "Todos los usos",
        "Relativa (busco a alguien que sepa), adverbial (cuando llegues), influencia (quiero que vengas), emoción (me alegra que estés), duda (dudo que sea), ojalá, y en pasado con -ra.",
        [
          ["Cuando llegues, busca a alguien que te ayude.", "When you arrive, look for someone to help you."],
        ],
        [
          fb("Completa.", "Cuando ___, busca a alguien que te ayude. (llegar)", "llegues", "Adverbial."),
        ]
      ),
    ],
    [
      fb("Completa.", "Busca a alguien que te ___. (ayudar)", "ayude", "Relativa."),
      fb("Completa.", "Me alegra que ___ aquí. (estar, tú)", "estés", "Emoción."),
      fb("Completa.", "Dudaba que ___ a tiempo. (llegar, nosotros)", "llegáramos", "Duda en pasado."),
      fb("Completa.", "Te lo dije para que lo ___. (saber)", "supieras", "Finalidad en pasado."),
      fb("Completa.", "Ojalá ___ un jardín en casa. (tener, nosotros)", "tuviéramos", "Deseo irreal."),
      fb("Completa.", "Aunque ___ tarde, iré. (ser — no lo sé)", "sea", "Hipótesis."),
      toEs("I want you to call me when you arrive.", "Quiero que me llames cuando llegues.", "«Querer que» exige subjuntivo («llames») y «cuando» + futuro también («llegues»).", ["Quiero que me llames en cuanto llegues."]),
    ]
  ),
  L(
    "b2-comprehensive-review-2",
    "b2d-rep-mezcla-dictado-b2",
    "Dictado: frases de nivel B2",
    "Repaso espaciado: estructuras variadas en frases largas.",
    "6 min",
    [
      sec(
        "Frases largas",
        "Cada frase combina dos estructuras de B2. Identifica ambas antes de ordenar.",
        [
          ["Si hubiera sabido que venías, habría preparado algo.", "If I had known you were coming, I'd have prepared something."],
        ],
        [
          wo("Me pidió que lo llamara en cuanto llegara.", "Secuencia + adverbial.", "He asked me to call him as soon as I arrived."),
        ]
      ),
    ],
    [
      wo("No conozco a nadie que haya estado en la Antártida.", "Relativa + perfecto de subjuntivo.", "I don't know anyone who has been to Antarctica."),
      wo("Fue mi abuela quien me enseñó a cocinar.", "Hendida.", "It was my grandmother who taught me to cook."),
      wo("Dijo que volvería cuando terminara el curso.", "Estilo indirecto + adverbial.", "She said she would come back when the course ended."),
      wo("Aunque lo intentara, no lo conseguiría.", "Aunque + hipótesis lejana.", "Even if he tried, he wouldn't manage it."),
      toEs("She told me she would call me when she finished.", "Me dijo que me llamaría cuando terminara.", "En estilo indirecto, el futuro pasa a condicional y «cuando» + futuro a imperfecto de subjuntivo: «terminara».", ["Me dijo que me llamaría cuando acabara.", "Me dijo que me iba a llamar cuando terminara."]),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2d-rep-relativas-habla-de-ti",
    "Habla de ti: la persona que buscas",
    "Repaso espaciado: describe a alguien que todavía no conoces.",
    "6 min",
    [
      sec(
        "Tu compañero ideal",
        "Para un viaje largo busco a alguien que sea paciente, que no ronque y que sepa leer mapas. No conozco a nadie que cumpla todo eso. Mi último compañero, que roncaba, no era ideal.",
        [
          ["No conozco a nadie que cumpla todo eso.", "I don't know anyone who meets all that."],
        ],
        [
          fb("Tu ideal.", "Busco a alguien que ___ paciente. (ser)", "sea", "Desconocido."),
        ]
      ),
    ],
    [
      fb("Tu ideal.", "…que no ___. (roncar)", "ronque", "c → qu."),
      fb("Tu ideal.", "…y que ___ leer mapas. (saber)", "sepa", "Saber → sepa."),
      fb("Tu ideal.", "No conozco a nadie que ___ todo eso. (cumplir)", "cumpla", "Inexistente."),
      fb("Tu ideal.", "Mi último compañero, que ___, no era ideal. (roncar, imperfecto)", "roncaba", "Conocido."),
      fb("Tu ideal.", "Me gustaría encontrar a alguien que ___ cocinar. (saber)", "supiera", "Condicional → imperfecto de subjuntivo."),
      toEs("I'm looking for someone who likes hiking.", "Busco a alguien a quien le guste el senderismo.", "Antecedente desconocido → subjuntivo; con «gustar» se usa «a quien le guste».", ["Busco a alguien que disfrute del senderismo.", "Busco a alguien al que le guste hacer senderismo."]),
    ]
  ),
  L(
    "chef-against-family-wishes",
    "b2d-rep-adverbiales-aunque",
    "Pares mínimos: aunque es / aunque sea / aunque fuera",
    "Repaso espaciado: tres grados de concesión.",
    "6 min",
    [
      sec(
        "Tres grados",
        "Aunque es caro (sé que lo es). Aunque sea caro (quizá lo sea; da igual). Aunque fuera caro (hipótesis lejana; da igual).",
        [
          ["Aunque fuera gratis, no iría.", "Even if it were free, I wouldn't go."],
        ],
        [
          mc(
            "Sabes que el hotel es caro: «Aunque ___ caro, lo reservaré.»",
            ["es", "sea", "fuera", "sería"],
            0,
            "Sabes que es caro, así que es un hecho: aunque + indicativo, es. «Sea» lo presentaría como posible, «fuera» como hipótesis lejana y «sería» es condicional."
          ),
        ]
      ),
    ],
    [
      mc("No sabes el precio: «Aunque ___ caro, lo reservaré.»", ["sea", "es", "fue", "sería"], 0, "No sabes el precio, así que es una posibilidad: aunque + presente de subjuntivo, sea. «Es» lo presentaría como hecho, «fue» es pasado y «sería» es condicional."),
      mc("Es gratis, pero imaginas lo contrario: «Aunque ___ carísimo, lo reservaría.»", ["fuera", "es", "sea", "será"], 0, "Imaginar lo contrario de la realidad pide imperfecto de subjuntivo: aunque fuera carísimo, lo reservaría. «Es» y «será» son indicativo, y «sea» es para posibilidades reales."),
      fb("Grado.", "Aunque ___ mucho, no me canso. (trabajar, yo — hecho)", "trabajo", "Clave: Hecho."),
      fb("Grado.", "Aunque me lo ___ mil veces, no lo haré. (pedir, tú — posible)", "pidas", "Posible."),
      fb("Grado.", "Aunque me ___ un millón, no lo vendería. (pagar, ellos — hipótesis)", "pagaran", "Hipótesis lejana."),
      fb("Grado.", "Aunque ___ temprano, llegamos tarde. (salir, nosotros — pasado real)", "salimos", "Hecho pasado."),
      toEs("Even if it's cold, I'll swim.", "Aunque haga frío, me bañaré.", "«Aunque» + subjuntivo presenta una posibilidad no confirmada: «aunque haga frío».", ["Aunque haga frío, voy a nadar.", "Aunque haga frío, nadaré."]),
    ]
  ),
  L(
    "architect-saves-historic-building",
    "b2d-rep-adverbiales-siempre-subjuntivo",
    "Circuito acumulativo: conjunciones que siempre piden subjuntivo",
    "Repaso espaciado: antes de que, para que, sin que, a menos que, con tal de que, en caso de que.",
    "6 min",
    [
      sec(
        "Sin excepciones",
        "Estas conjunciones siempre llevan subjuntivo, presente o imperfecto según el verbo principal.",
        [
          ["Te llamo en caso de que haya cambios.", "I'll call you in case there are changes."],
        ],
        [
          fb("Estación 1.", "Te lo presto con tal de que me lo ___ mañana. (devolver)", "devuelvas", "Presente."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Te lo presté con tal de que me lo ___ al día siguiente. (devolver)", "devolvieras", "Pasado."),
      fb("Estación 2.", "Iremos a la playa a menos que ___. (llover)", "llueva", "Presente."),
      fb("Estación 2.", "Íbamos a ir a menos que ___. (llover)", "lloviera", "Pasado."),
      fb("Estación 3.", "Lleva el mapa en caso de que te ___. (perder)", "pierdas", "Presente."),
      fb("Estación 3.", "Se marchó sin que nadie se ___ cuenta. (dar)", "diera", "Pasado."),
      fb("Estación 4.", "Recoge todo antes de que ___ tus padres. (volver)", "vuelvan", "Presente."),
      mc(
        "«Les expliqué el plan para que no ___ dudas.»",
        ["tuvieran", "tengan", "tenían", "tendrían"],
        0,
        "Con el verbo principal en pasado (expliqué), para que va con imperfecto de subjuntivo: tuvieran. «Tengan» iría con presente, «tenían» es indicativo y «tendrían» es condicional."
      ),
    ]
  ),
  L(
    "translator-forgotten-manuscript",
    "b2d-rep-imperfecto-deseos",
    "Habla de ti: me gustaría que…",
    "Repaso espaciado: condicional + imperfecto de subjuntivo para deseos sobre otros.",
    "6 min",
    [
      sec(
        "Tus deseos sobre otros",
        "Me gustaría que mis padres viajaran más. Preferiría que mi jefe fuera más flexible. Me encantaría que mis amigos vinieran a verme.",
        [
          ["Me gustaría que mis padres viajaran más.", "I'd like my parents to travel more."],
        ],
        [
          fb("Tus deseos.", "Me gustaría que mis padres ___ más. (viajar)", "viajaran", "Condicional → imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tus deseos.", "Preferiría que mi jefe ___ más flexible. (ser)", "fuera", "Clave: Ser."),
      fb("Tus deseos.", "Me encantaría que mis amigos ___ a verme. (venir)", "vinieran", "Clave: Venir."),
      fb("Tus deseos.", "Estaría bien que el gobierno ___ más en educación. (invertir)", "invirtiera", "Invirtieron."),
      fb("Tus deseos.", "Sería genial que mi hermano ___ trabajo aquí. (encontrar)", "encontrara", "Encontraron."),
      fb("Tus deseos.", "Me gustaría que ___ más tiempo juntos. (pasar, nosotros)", "pasáramos", "Clave: Tilde."),
      toEs("I'd like you to meet my family.", "Me gustaría que conocieras a mi familia.", "Tras «me gustaría que», la subordinada va en imperfecto de subjuntivo: «conocieras».", ["Me gustaría que conocieses a mi familia.", "Me gustaría que conociera a mi familia."]),
    ]
  ),
  L(
    "small-town-doctor-dilemma",
    "b2d-rep-imperfecto-ojala-ronda",
    "Ronda rápida: ojalá con presente, imperfecto y pluscuamperfecto",
    "Repaso espaciado: tres grados de deseo.",
    "5 min",
    [
      sec(
        "Tres ojalás",
        "Posible → ojalá + presente de subjuntivo. Irreal ahora → ojalá + imperfecto. Irreal en el pasado → ojalá + pluscuamperfecto.",
        [
          ["Ojalá hubieras venido.", "I wish you had come."],
        ],
        [
          fb("Rápido.", "Ojalá ___ mañana. (venir, tú — posible)", "vengas", "Posible."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Ojalá ___ aquí ahora. (estar, tú — estás lejos)", "estuvieras", "Irreal presente."),
      fb("Rápido.", "Ojalá ___ a la fiesta ayer. (venir, tú)", "hubieras venido", "Irreal pasado."),
      fb("Rápido.", "Ojalá ___ bien el examen. (salirte — mañana)", "te salga", "Posible."),
      fb("Rápido.", "Ojalá ___ nadar. (saber, yo — no sé)", "supiera", "Irreal presente."),
      fb("Rápido.", "Ojalá ___ más de pequeño. (leer, yo)", "hubiera leído", "Irreal pasado."),
      fb("Rápido.", "Ojalá no ___ tanto calor. (hacer — hoy hace mucho)", "hiciera", "Irreal presente."),
      mc(
        "«Ojalá no le ___ nada ayer.» (decir, yo)",
        ["hubiera dicho", "dijera", "diga", "dije"],
        0,
        "Un deseo sobre algo que ya pasó (ayer) usa ojalá + pluscuamperfecto de subjuntivo: hubiera dicho. «Dijera» y «diga» miran al presente o futuro, y «dije» es indicativo."
      ),
    ]
  ),
  L(
    "small-town-doctor-dilemma",
    "b2d-rep-si-mixtas",
    "Elige y explica: ¿condición real, irreal o pasada?",
    "Repaso espaciado: tres tipos de oraciones con si.",
    "6 min",
    [
      sec(
        "Tres tipos",
        "Real: si + presente → presente/futuro/imperativo. Irreal presente: si + imperfecto de subjuntivo → condicional. Irreal pasado: si + pluscuamperfecto → condicional perfecto.",
        [
          ["Si lo hubiera visto, te lo habría dicho.", "If I had seen it, I'd have told you."],
        ],
        [
          mc(
            "Es posible que lo veas mañana: «Si lo ___, díselo.»",
            ["ves", "vieras", "hubieras visto", "verías"],
            0,
            "Es posible que lo veas, así que es una condición real: si + presente, si lo ves. «Vieras» y «hubieras visto» son hipotéticos, y «verías» no va tras si."
          ),
        ]
      ),
    ],
    [
      mc("No lo ves nunca: «Si lo ___, se lo dirías.»", ["vieras", "ves", "hubieras visto", "verás"], 0, "No lo ves nunca: irreal en el presente → si + imperfecto de subjuntivo, vieras. «Ves» sería una condición real, «hubieras visto» se refiere al pasado y «verás» no va tras si."),
      mc("No lo viste ayer: «Si lo ___, se lo habrías dicho.»", ["hubieras visto", "vieras", "ves", "habrías visto"], 0, "No lo viste ayer: irreal en el pasado → si + pluscuamperfecto de subjuntivo, hubieras visto. «Vieras» mira al presente, «ves» es real y «habrías visto» no va tras si."),
      fb("Tipo.", "Si ___ tiempo esta tarde, paso por tu casa. (tener, yo)", "tengo", "Clave: Real."),
      fb("Tipo.", "Si ___ tiempo, aprendería a bailar. (tener, yo)", "tuviera", "Irreal presente."),
      fb("Tipo.", "Si ___ tiempo, habría ido a la boda. (tener, yo)", "hubiera tenido", "Irreal pasado."),
      toEs("If you study, you'll pass.", "Si estudias, aprobarás.", "Condición real: «si» + presente, y futuro en la consecuencia.", ["Si estudias, vas a aprobar.", "Si estudias, apruebas."]),
    ]
  ),
  L(
    "siblings-dividing-inheritance",
    "b2d-rep-si-cuento",
    "Cuento con huecos: si pudiera empezar de nuevo",
    "Repaso espaciado: hipótesis presentes y pasadas en un monólogo.",
    "7 min",
    [
      sec(
        "El monólogo",
        "«Si pudiera empezar de nuevo, estudiaría Biología. Si hubiera hecho caso a mi profesora, ahora trabajaría en un laboratorio. Pero si no hubiera estudiado Derecho, no habría conocido a mi mujer. Así que, si me preguntaras, te diría que no cambiaría nada.»",
        [
          ["Si pudiera empezar de nuevo, estudiaría Biología.", "If I could start again, I'd study biology."],
        ],
        [
          fb("Completa.", "Si ___ empezar de nuevo, estudiaría Biología. (poder)", "pudiera", "Irreal presente."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ caso a mi profesora… (hacer)", "hubiera hecho", "Irreal pasado."),
      fb("Completa.", "…ahora ___ en un laboratorio. (trabajar)", "trabajaría", "Consecuencia presente."),
      fb("Completa.", "Si no ___ Derecho… (estudiar)", "hubiera estudiado", "Irreal pasado."),
      fb("Completa.", "…no ___ a mi mujer. (conocer)", "habría conocido", "Consecuencia pasada."),
      fb("Completa.", "Si me ___, te diría que no cambiaría nada. (preguntar, tú)", "preguntaras", "Irreal presente."),
      toEs("If I could, I would change nothing.", "Si pudiera, no cambiaría nada.", "Condición irreal presente: «si pudiera» + condicional «no cambiaría».", ["Si pudiese, no cambiaría nada."]),
    ]
  ),
  L(
    "journalist-local-corruption",
    "b2d-rep-condicional-perfecto-reproches",
    "Preguntas y respuestas: ¿qué habrías hecho tú?",
    "Repaso espaciado: condicional perfecto para opinar sobre el pasado.",
    "6 min",
    [
      sec(
        "Opinar sobre el pasado",
        "—Mi jefe me gritó y yo no dije nada. —Yo le habría contestado. / Yo en tu lugar habría hablado con recursos humanos.",
        [
          ["Yo le habría contestado.", "I would have answered him."],
        ],
        [
          fb("Responde.", "—No fui a la entrevista. —Yo ___. (ir)", "habría ido", "Condicional perfecto."),
        ]
      ),
    ],
    [
      fb("Responde.", "—Compré el coche más caro. —Yo ___ uno más barato. (comprar)", "habría comprado", "Condicional perfecto."),
      fb("Responde.", "—No le dije la verdad. —Yo se la ___. (decir)", "habría dicho", "Decir → dicho."),
      fb("Responde.", "—Dejé el trabajo sin avisar. —Yo ___ antes. (avisar)", "habría avisado", "Condicional perfecto."),
      fb("Responde.", "—Me fui de la fiesta a las diez. —Yo ___ más. (quedarse)", "me habría quedado", "Pronombre delante."),
      fb("Responde.", "—Rompí con él por mensaje. —Yo lo ___ en persona. (hacer)", "habría hecho", "Hacer → hecho."),
      mc(
        "—No reservé mesa y no había sitio. —«___ reservado.»",
        ["Deberías haber", "Habrías debido", "Debías haber", "Hubieras debes"],
        0,
        "Un reproche sobre el pasado: deberías haber + participio (deberías haber reservado). «Habrías debido» es raro y formal, «debías haber» es menos natural y «hubieras debes» no existe."
      ),
      toEs("What would you have done?", "¿Qué habrías hecho tú?", "El condicional perfecto («habrías hecho») habla de una acción hipotética en el pasado.", ["¿Tú qué habrías hecho?", "¿Qué hubieras hecho tú?"]),
    ]
  ),
  L(
    "musician-two-paths",
    "b2d-rep-condicional-perfecto-cadena",
    "Cadena de transformaciones: del hecho al arrepentimiento",
    "Repaso espaciado: convierte hechos pasados en hipótesis irreales.",
    "6 min",
    [
      sec(
        "Dos cambios",
        "Hecho: No ahorré y no pude viajar. → Si hubiera ahorrado, habría podido viajar. Cambia la polaridad (sí/no) y los tiempos.",
        [
          ["Si hubiera ahorrado, habría podido viajar.", "If I had saved, I could have travelled."],
        ],
        [
          fb("Transforma.", "No estudié y suspendí. → Si ___, no habría suspendido.", "hubiera estudiado", "Condición pasada irreal → pluscuamperfecto de subjuntivo: si hubiera estudiado."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Salí tarde y perdí el tren. → Si no ___ tarde, no habría perdido el tren.", "hubiera salido", "Condición pasada irreal → si no hubiera salido tarde."),
      fb("Transforma.", "No me llamaste y no fui. → Si me hubieras llamado, ___.", "habría ido", "La consecuencia pasada va en condicional perfecto: habría ido."),
      fb("Transforma.", "No llevé paraguas y me mojé. → Si ___ paraguas, no me habría mojado.", "hubiera llevado", "Condición pasada irreal → pluscuamperfecto de subjuntivo: hubiera llevado."),
      fb("Transforma.", "Comí marisco y me puse malo. → Si no hubiera comido marisco, no me ___ malo.", "habría puesto", "Consecuencia pasada → condicional perfecto; ponerse malo, y poner → puesto: me habría puesto."),
      fb("Transforma.", "No lo sabía y no te avisé. → Si lo ___, te habría avisado.", "hubiera sabido", "Condición pasada irreal → pluscuamperfecto de subjuntivo: si lo hubiera sabido."),
      toEs("If you had come, you would have liked it.", "Si hubieras venido, te habría gustado.", "Condición irreal en el pasado: «si hubieras venido» + «te habría gustado».", ["Si hubieses venido, te habría gustado.", "Si hubieras venido, te hubiera gustado."]),
    ]
  ),
  L(
    "teacher-last-year",
    "b2d-rep-estilo-indirecto-ronda",
    "Ronda rápida: estilo indirecto",
    "Repaso espaciado: tiempos y referencias al contar lo que otros dijeron.",
    "5 min",
    [
      sec(
        "Retroceso",
        "Presente → imperfecto. Indefinido/perfecto → pluscuamperfecto. Futuro → condicional. Imperativo → imperfecto de subjuntivo. Hoy → ese día; mañana → al día siguiente.",
        [
          ["Dijo que lo haría al día siguiente.", "He said he would do it the next day."],
        ],
        [
          fb("Rápido.", "«Lo haré mañana.» → Dijo que lo ___ al día siguiente.", "haría", "Futuro → condicional: lo haré → lo haría (raíz har-)."),
        ]
      ),
    ],
    [
      fb("Rápido.", "«Estoy harto.» → Dijo que ___ harto.", "estaba", "Presente → imperfecto: estoy → estaba."),
      fb("Rápido.", "«Lo vi ayer.» → Dijo que lo ___ el día anterior.", "había visto", "Pretérito → pluscuamperfecto: lo vi → lo había visto."),
      fb("Rápido.", "«Espérame.» → Me pidió que lo ___.", "esperara", "Un imperativo reportado en pasado pasa a imperfecto de subjuntivo: que lo esperara."),
      fb("Rápido.", "«¿Vienes?» → Me preguntó si ___.", "iba", "Presente → imperfecto; venir → ir."),
      fb("Rápido.", "«¿Qué quieres?» → Me preguntó qué ___.", "quería", "En la pregunta indirecta, el presente pasa a imperfecto: quería."),
      fb("Rápido.", "«Hoy cierro yo.» → Dijo que ___ día cerraba él.", "ese", "«Hoy» pasa a «ese día»: dijo que ese día cerraba él."),
      mc(
        "«No toquéis nada.» → Nos dijo que no ___ nada.",
        ["tocáramos", "tocamos", "tocábamos", "tocaríamos"],
        0,
        "Una orden negativa reportada en pasado va en imperfecto de subjuntivo: que no tocáramos. «Tocamos» y «tocábamos» son indicativo, y «tocaríamos» es condicional."
      ),
    ]
  ),
  L(
    "farmer-climate-change",
    "b2d-rep-estilo-indirecto-corrige",
    "Corrige el párrafo: el resumen de la llamada",
    "Repaso espaciado: errores al transmitir una conversación.",
    "6 min",
    [
      sec(
        "El resumen",
        "«Mi madre me dijo que viene el domingo y que me traerá un regalo. Me preguntó que si estaba bien. Me pidió que la llamo más a menudo.» Cuatro errores (lo dijo hace dos semanas).",
        [
          ["Me dijo que venía el domingo.", "She told me she was coming on Sunday."],
        ],
        [
          mc(
            "¿Qué falla en «me pidió que la llamo»?",
            ["Pedir que + imperfecto de subjuntivo: llamara.", "Falta la tilde.", "Sobra «la».", "Nada."],
            0,
            "Una petición en pasado pide imperfecto de subjuntivo: me pidió que la llamara. No falta tilde, «la» no sobra (la llamara a ella) y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Me dijo que viene el domingo.»", "Me dijo que venía el domingo.", "En estilo indirecto con «dijo», el presente pasa a imperfecto: «venía»."),
      toEs("Corrige: «…y que me traerá un regalo.»", "…y que me traería un regalo.", "En estilo indirecto con «dijo», el futuro pasa a condicional: «traería»."),
      toEs("Corrige: «Me preguntó que si estaba bien.»", "Me preguntó si estaba bien.", "En la pregunta indirecta formal va «si» sin «que» delante: «me preguntó si…»."),
      toEs("Corrige: «Me pidió que la llamo más a menudo.»", "Me pidió que la llamara más a menudo.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «llamara», no «llamo»."),
      toEs("Corrige: «Me preguntó cuando volvería.»", "Me preguntó cuándo volvería.", "En la pregunta indirecta, el interrogativo mantiene la tilde: «cuándo»."),
      ms(
        "¿Qué frases son correctas?",
        ["Dijo que había llegado tarde.", "Me pidió que me sentara.", "Dijo que llegará tarde ayer.", "Me pidió que me siento."],
        [0, 1],
        "Información pasada → pluscuamperfecto (había llegado); petición → imperfecto de subjuntivo (que me sentara). «Llegará tarde ayer» mezcla tiempos y «que me siento» usa indicativo."
      ),
    ]
  ),
  L(
    "astronaut-return-ordinary-life",
    "b2d-rep-ser-estar-elige",
    "Elige y explica: ser o estar con participios",
    "Repaso espaciado: acción (ser) y resultado (estar).",
    "6 min",
    [
      sec(
        "Acción o resultado",
        "El libro fue publicado en 2010 (acción). El libro está publicado en tres idiomas (resultado). La puerta fue abierta por el viento. La puerta está abierta.",
        [
          ["La puerta está abierta.", "The door is open."],
        ],
        [
          mc(
            "«La novela ___ traducida al inglés en 2015.»",
            ["fue", "estaba", "hay", "estuvo"],
            0,
            "Una acción con fecha (se tradujo en 2015) es pasiva con ser: fue traducida. «Estaba» y «estuvo» describirían un estado, y «hay» no forma la pasiva."
          ),
        ]
      ),
    ],
    [
      mc("«La novela ya ___ traducida a veinte idiomas.»", ["está", "es", "fue", "hay"], 0, "El resultado actual de una acción se expresa con estar + participio: ya está traducida. «Es traducida» y «fue» expresan la acción, no el estado, y «hay» no forma esta estructura."),
      fb("Elige.", "El ladrón ___ detenido anoche por la policía.", "fue", "Una acción con agente y momento (anoche, por la policía) es pasiva con ser: fue detenido."),
      fb("Elige.", "El ladrón ya ___ detenido; no hay peligro.", "está", "El resultado actual de la acción se expresa con estar + participio: ya está detenido."),
      fb("Elige.", "La carretera ___ cortada por la nieve desde ayer.", "está", "Un estado que dura (desde ayer) se expresa con estar: está cortada."),
      fb("Elige.", "La carretera ___ cortada por la policía a las ocho.", "fue", "Una acción puntual con agente (a las ocho, por la policía) es pasiva con ser: fue cortada."),
      toEs("The bridge was built in the Middle Ages.", "El puente fue construido en la Edad Media.", "La voz pasiva de una acción se forma con «ser» + participio: «fue construido».", ["El puente se construyó en la Edad Media."]),
    ]
  ),
  L(
    "astronaut-return-ordinary-life",
    "b2d-rep-enfasis-cadena",
    "Cadena de transformaciones: pon el foco",
    "Repaso espaciado: anteposición, hendidas y lo + adjetivo + que.",
    "6 min",
    [
      sec(
        "Tres focos",
        "Anteposición: Las llaves las tengo yo. Hendida: Fui yo quien las encontró. Grado: No sabes lo difícil que fue encontrarlas.",
        [
          ["Fui yo quien las encontró.", "It was me who found them."],
        ],
        [
          fb("Foco.", "Tengo las llaves yo. → Las llaves ___ tengo yo.", "las", "El complemento directo antepuesto se retoma con pronombre: «las llaves» → «las»."),
        ]
      ),
    ],
    [
      fb("Foco.", "Yo las encontré. → Fui yo ___ las encontró.", "quien", "En las hendidas de persona se usa «quien» (o «el que»): «Fui yo quien…»."),
      fb("Foco.", "Fue muy difícil encontrarlas. → No sabes lo ___ que fue encontrarlas.", "difícil", "«Lo + adjetivo + que» expresa intensidad: «lo difícil que fue»."),
      fb("Foco.", "Me encanta su sonrisa. → ___ me encanta es su sonrisa.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que me encanta es…»."),
      fb("Foco.", "Nos conocimos en París. → Fue en París ___ nos conocimos.", "donde", "En las hendidas de lugar se usa «donde»: «Fue en París donde…»."),
      fb("Foco.", "Mi hermana hizo la tarta. → La tarta ___ hizo mi hermana.", "la", "El complemento directo antepuesto se retoma con pronombre: «la tarta» → «la»."),
      toEs("It was in 2010 that I moved here.", "Fue en 2010 cuando me mudé aquí.", "En las hendidas de tiempo se usa «cuando»: «Fue en 2010 cuando…».", ["Fue en 2010 cuando me vine aquí."]),
    ]
  ),
  L(
    "rower-comeback-injury",
    "b2d-rep-cuyo-cadena",
    "Cadena de transformaciones: su → cuyo",
    "Repaso espaciado: une frases con cuyo y concordancia.",
    "6 min",
    [
      sec(
        "Unir con cuyo",
        "Es una actriz. Sus películas son famosas. → Es una actriz cuyas películas son famosas. Cuyo concuerda con lo poseído.",
        [
          ["Es una actriz cuyas películas son famosas.", "She's an actress whose films are famous."],
        ],
        [
          fb("Une.", "Es un chef. Su restaurante tiene tres estrellas. → Es un chef ___ restaurante tiene tres estrellas.", "cuyo", "«Cuyo» concuerda con lo poseído: «restaurante» es masculino singular."),
        ]
      ),
    ],
    [
      fb("Une.", "Es una ciudad. Sus playas son preciosas. → Es una ciudad ___ playas son preciosas.", "cuyas", "«Cuyo» concuerda con lo poseído: «playas» es femenino plural."),
      fb("Une.", "Es un escritor. Conozco bien su obra. → Es un escritor ___ obra conozco bien.", "cuya", "«Cuyo» concuerda con lo poseído: «obra» es femenino singular."),
      fb("Une.", "Es una empresa. Sus empleados están contentos. → Es una empresa ___ empleados están contentos.", "cuyos", "«Cuyo» concuerda con lo poseído: «empleados» es masculino plural."),
      fb("Une.", "Es un país. No hablo su idioma. → Es un país ___ idioma no hablo.", "cuyo", "«Cuyo» concuerda con lo poseído: «idioma» es masculino singular."),
      fb("Une.", "Es la vecina. Su hija canta ópera. → Es la vecina ___ hija canta ópera.", "cuya", "«Cuyo» concuerda con lo poseído: «hija» es femenino singular."),
      toEs("It's a band whose songs everyone knows.", "Es un grupo cuyas canciones conoce todo el mundo.", "«Cuyo» concuerda con lo poseído («canciones»), no con «un grupo».", ["Es una banda cuyas canciones conoce todo el mundo.", "Es un grupo cuyas canciones todo el mundo conoce."]),
    ]
  ),
  L(
    "winemaker-family-legacy",
    "b2d-rep-mezcla-carta-formal",
    "Práctica mezclada: una carta de reclamación",
    "Repaso espaciado: registro formal con subjuntivo, conectores y condicional.",
    "7 min",
    [
      sec(
        "La reclamación",
        "«Estimados señores: les escribo porque el pedido, cuyo número adjunto, no ha llegado. Aunque me aseguraron que llegaría el lunes, todavía no lo he recibido. Por lo tanto, les agradecería que me devolvieran el dinero. Si no fuera posible, quisiera que me enviaran otro.»",
        [
          ["Les agradecería que me devolvieran el dinero.", "I would be grateful if you refunded my money."],
        ],
        [
          fb("Completa.", "…el pedido, ___ número adjunto, no ha llegado.", "cuyo", "«Cuyo» expresa posesión y concuerda con lo poseído: «número» es masculino singular."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque me aseguraron que ___ el lunes… (llegar)", "llegaría", "Estilo indirecto: futuro → condicional."),
      fb("Completa.", "___, les agradecería que me devolvieran el dinero.", "Por lo tanto", "«Por lo tanto» introduce la consecuencia lógica de lo expuesto antes."),
      fb("Completa.", "…les agradecería que me ___ el dinero. (devolver)", "devolvieran", "Condicional → imperfecto de subjuntivo."),
      fb("Completa.", "Si no ___ posible… (ser)", "fuera", "Si + imperfecto de subjuntivo."),
      fb("Completa.", "…quisiera que me ___ otro. (enviar)", "enviaran", "Quisiera que + imperfecto de subjuntivo."),
      toEs("If you had informed me, I would have waited.", "Si me hubieran informado, habría esperado.", "Condición irreal en el pasado: «si» + pluscuamperfecto de subjuntivo y «habría» + participio.", ["Si me hubiesen informado, habría esperado.", "Si me hubieran avisado, habría esperado."]),
    ]
  ),
  L(
    "photographer-disappearing-tradition",
    "b2d-rep-relativas-donde-cuando",
    "Práctica de patrones: un lugar donde…, un momento en que…",
    "Repaso espaciado: relativas de lugar y tiempo con subjuntivo.",
    "6 min",
    [
      sec(
        "Donde y en que",
        "Busco un sitio donde pueda leer tranquilo. Espero un momento en que no haya nadie. También con como: Hazlo como quieras.",
        [
          ["Busco un sitio donde pueda leer tranquilo.", "I'm looking for a place where I can read in peace."],
        ],
        [
          fb("Mismo marco.", "Busco un sitio donde ___ aparcar. (poder, yo)", "pueda", "Lugar desconocido."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Busco un bar donde ___ música en directo. (haber)", "haya", "Lugar desconocido."),
      fb("Mismo marco.", "Conozco un bar donde ___ música en directo. (haber)", "hay", "Lugar conocido."),
      fb("Mismo marco.", "Llámame en un momento en que ___ hablar. (poder, tú)", "puedas", "Momento abierto."),
      fb("Mismo marco.", "Queríamos un pueblo donde nadie nos ___. (conocer)", "conociera", "Pasado."),
      fb("Mismo marco.", "Organízalo como te ___ mejor. (parecer)", "parezca", "Modo abierto."),
      fb("Mismo marco.", "No hay ningún sitio donde se ___ tan bien como aquí. (comer)", "coma", "Inexistente."),
      toEs("I need a place where I can work.", "Necesito un sitio donde pueda trabajar.", "Un lugar buscado y aún desconocido lleva «donde» + subjuntivo: «pueda».", ["Necesito un lugar donde pueda trabajar.", "Necesito un sitio en el que pueda trabajar."]),
    ]
  ),
  L(
    "expat-cultural-identity",
    "b2d-rep-relativas-dictado",
    "Dictado: lo que quieras, quien sea, cualquiera que",
    "Repaso espaciado: relativas abiertas.",
    "5 min",
    [
      sec(
        "Opciones abiertas",
        "Lo que + subjuntivo = cualquier cosa. Quien + subjuntivo = cualquier persona. Cualquiera que + subjuntivo.",
        [
          ["Quien quiera venir, que venga.", "Whoever wants to come, let them come."],
        ],
        [
          wo("Quien quiera venir, que venga.", "Quien + subjuntivo.", "Whoever wants to come, let them come."),
        ]
      ),
    ],
    [
      wo("Pide lo que te apetezca.", "Lo que + subjuntivo.", "Order whatever you fancy."),
      wo("Cualquiera que lo pruebe lo recomendará.", "Cualquiera que.", "Anyone who tries it will recommend it."),
      wo("Dime lo que necesites.", "Lo que + subjuntivo.", "Tell me whatever you need."),
      wo("Pase lo que pase, estaré contigo.", "Fórmula reduplicada.", "Whatever happens, I'll be with you."),
      toEs("Say whatever you want.", "Di lo que quieras.", "«Lo que» + subjuntivo significa «cualquier cosa que»: «lo que quieras».", ["Dí lo que quieras.", "Di lo que te dé la gana."]),
    ]
  ),
  L(
    "lighthouse-decommissioned",
    "b2d-rep-adverbiales-corrige",
    "Corrige el párrafo: la nota para el compañero de piso",
    "Repaso espaciado: errores con cuando, hasta que y para que.",
    "6 min",
    [
      sec(
        "La nota",
        "«Cuando llegarás, riega las plantas. No cierres la ventana hasta que se seca la pintura. Te dejo dinero para que compras pan. Llámame antes de que te vas.» Cuatro errores.",
        [
          ["Cuando llegues, riega las plantas.", "When you arrive, water the plants."],
        ],
        [
          mc(
            "¿Qué falla en «hasta que se seca la pintura»?",
            ["Es futuro: hasta que se seque.", "Falta un pronombre.", "Debe ser «se secará».", "Nada."],
            0,
            "Esperar a que se seque es futuro: hasta que + subjuntivo, se seque. No falta ningún pronombre, «se secará» es futuro (imposible tras hasta que) y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Cuando llegarás, riega las plantas.»", "Cuando llegues, riega las plantas.", "Tras «cuando» con valor futuro va presente de subjuntivo, no futuro: «llegues»."),
      toEs("Corrige: «No cierres la ventana hasta que se seca la pintura.»", "No cierres la ventana hasta que se seque la pintura.", "«Hasta que» + acción futura exige subjuntivo: «se seque», no «se seca»."),
      toEs("Corrige: «Te dejo dinero para que compras pan.»", "Te dejo dinero para que compres pan.", "«Para que» exige siempre subjuntivo: «compres», no «compras»."),
      toEs("Corrige: «Llámame antes de que te vas.»", "Llámame antes de que te vayas.", "«Antes de que» exige siempre subjuntivo: «te vayas», no «te vas»."),
      toEs("Corrige: «Aunque es tarde mañana, iré.»", "Aunque sea tarde mañana, iré.", "«Aunque» con una hipótesis futura va en subjuntivo: «sea», no «es».", ["Aunque se haga tarde mañana, iré."]),
      ms(
        "¿Qué frases son correctas?",
        ["Cuando era joven, vivía en Cádiz.", "Cuando sea mayor, viviré en Cádiz.", "Cuando seré mayor, viviré en Cádiz.", "Cuando sea joven, vivía en Cádiz."],
        [0, 1],
        "Pasado → cuando + indicativo (cuando era joven); futuro → cuando + subjuntivo (cuando sea mayor). «Cuando seré» usa futuro tras cuando, y «Cuando sea joven, vivía» mezcla futuro y pasado."
      ),
    ]
  ),
  L(
    "grandmother-secret-talent",
    "b2d-rep-adverbiales-habla-de-ti",
    "Habla de ti: tu semana que viene",
    "Repaso espaciado: planes con cuando, en cuanto, antes de que y para que.",
    "6 min",
    [
      sec(
        "Tus planes",
        "El lunes, en cuanto salga del trabajo, iré al gimnasio. Cuando llegue a casa, llamaré a mi madre. Antes de que acabe la semana, terminaré el libro. Ahorraré para que podamos ir de vacaciones.",
        [
          ["En cuanto salga del trabajo, iré al gimnasio.", "As soon as I leave work, I'll go to the gym."],
        ],
        [
          fb("Tus planes.", "En cuanto ___ del trabajo, iré al gimnasio. (salir)", "salga", "Futuro."),
        ]
      ),
    ],
    [
      fb("Tus planes.", "Cuando ___ a casa, llamaré a mi madre. (llegar)", "llegue", "Futuro."),
      fb("Tus planes.", "Antes de que ___ la semana, terminaré el libro. (acabar)", "acabe", "Antes de que."),
      fb("Tus planes.", "Ahorraré para que ___ ir de vacaciones. (poder, nosotros)", "podamos", "Para que."),
      fb("Tus planes.", "No me acostaré hasta que ___ el informe. (terminar, yo)", "termine", "Hasta que."),
      fb("Tus planes.", "Normalmente, cuando ___ del trabajo, estoy agotado. (salir)", "salgo", "Hábito."),
      toEs("When I finish this course, I'll look for a job.", "Cuando termine este curso, buscaré trabajo.", "«Cuando» + acción futura exige subjuntivo: «termine».", ["Cuando acabe este curso, buscaré trabajo.", "Cuando termine este curso, voy a buscar trabajo."]),
    ]
  ),
  L(
    "grandmother-secret-talent",
    "b2d-rep-imperfecto-cuento",
    "Cuento con huecos: el primer día en la oficina",
    "Repaso espaciado: la secuencia de tiempos en un relato.",
    "7 min",
    [
      sec(
        "El relato",
        "«Mi primer día, la jefa me pidió que llegara a las ocho. Me sorprendió que nadie me saludara. Buscaba a alguien que me explicara el sistema, pero no había nadie que tuviera tiempo. Al final, un compañero me ayudó para que no me perdiera.»",
        [
          ["Me sorprendió que nadie me saludara.", "It surprised me that nobody greeted me."],
        ],
        [
          fb("Completa.", "La jefa me pidió que ___ a las ocho. (llegar)", "llegara", "Petición en pasado."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me sorprendió que nadie me ___. (saludar)", "saludara", "Emoción en pasado."),
      fb("Completa.", "Buscaba a alguien que me ___ el sistema. (explicar)", "explicara", "Relativa en pasado."),
      fb("Completa.", "…no había nadie que ___ tiempo. (tener)", "tuviera", "Inexistente."),
      fb("Completa.", "Un compañero me ayudó para que no me ___. (perder)", "perdiera", "Finalidad en pasado."),
      fb("Completa.", "Hoy me alegra que mis compañeros ___ tan amables. (ser)", "sean", "Presente."),
      toEs("They asked me to sign a lot of papers.", "Me pidieron que firmara muchos papeles.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «firmara».", ["Me pidieron que firmase muchos papeles.", "Me pidieron que firmara muchos documentos."]),
    ]
  ),
  L(
    "startup-founder-ethical-dilemma",
    "b2d-rep-imperfecto-pares",
    "Pares mínimos: me pide que vaya / me pidió que fuera",
    "Repaso espaciado: presente y pasado en la misma frase.",
    "5 min",
    [
      sec(
        "Mismo verbo, dos tiempos",
        "Principal en presente → presente de subjuntivo. Principal en pasado o condicional → imperfecto de subjuntivo.",
        [
          ["Me pidió que fuera.", "He asked me to go."],
        ],
        [
          fb("Par.", "Me pide que ___. (ir)", "vaya", "Presente."),
        ]
      ),
    ],
    [
      fb("Par.", "Me pidió que ___. (ir)", "fuera", "Pasado."),
      fb("Par.", "Es necesario que lo ___. (saber, tú)", "sepas", "Presente."),
      fb("Par.", "Era necesario que lo ___. (saber, tú)", "supieras", "Pasado."),
      fb("Par.", "Prefiero que no ___ nada. (decir, ellos)", "digan", "Presente."),
      fb("Par.", "Preferiría que no ___ nada. (decir, ellos)", "dijeran", "Condicional."),
      fb("Par.", "No creo que ___ razón. (tener, él)", "tenga", "Presente."),
      fb("Par.", "No creí que ___ razón. (tener, él)", "tuviera", "Pasado."),
      mc(
        "«Nos rogaron que ___ silencio.»",
        ["guardáramos", "guardemos", "guardamos", "guardaríamos"],
        0,
        "«Rogar que» con el verbo en pasado (rogaron) pide imperfecto de subjuntivo: guardáramos. «Guardemos» iría con presente, «guardamos» es indicativo y «guardaríamos» es condicional."
      ),
    ]
  ),
  L(
    "librarian-saving-archive",
    "b2d-rep-si-dictado",
    "Dictado: tres tipos de condicionales",
    "Repaso espaciado: real, irreal presente e irreal pasado.",
    "5 min",
    [
      sec(
        "Tres tipos",
        "Si llueve, me quedo. Si lloviera, me quedaría. Si hubiera llovido, me habría quedado.",
        [
          ["Si lloviera, me quedaría.", "If it rained, I'd stay."],
        ],
        [
          wo("Si tienes hambre, come algo.", "Real: si + presente.", "If you're hungry, eat something."),
        ]
      ),
    ],
    [
      wo("Si tuviera hambre, comería algo.", "Irreal presente.", "If I were hungry, I'd eat something."),
      wo("Si hubiera tenido hambre, habría comido algo.", "Irreal pasado.", "If I had been hungry, I'd have eaten something."),
      wo("Si no fuera tan caro, lo compraría.", "Irreal presente.", "If it weren't so expensive, I'd buy it."),
      wo("Si me lo hubieras pedido, te lo habría prestado.", "Irreal pasado.", "If you had asked me, I would have lent it to you."),
      toEs("If I had money, I'd help you.", "Si tuviera dinero, te ayudaría.", "Condición irreal presente: «si tuviera» + condicional «te ayudaría».", ["Si tuviese dinero, te ayudaría."]),
    ]
  ),
  L(
    "diplomat-tense-negotiation",
    "b2d-rep-condicional-perfecto-ronda",
    "Ronda rápida: habría + participio",
    "Repaso espaciado: el condicional perfecto con participios irregulares.",
    "5 min",
    [
      sec(
        "Participios",
        "habría hecho, habría dicho, habría puesto, habría visto, habría vuelto, habría escrito, habría roto, habría abierto.",
        [
          ["Yo no lo habría dicho así.", "I wouldn't have said it like that."],
        ],
        [
          fb("Rápido.", "Yo no lo ___ así. (decir)", "habría dicho", "Decir → dicho."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si hubiera podido, ___ antes. (volver, yo)", "habría vuelto", "Volver → vuelto."),
      fb("Rápido.", "Yo ___ la ventana. (abrir)", "habría abierto", "Abrir → abierto."),
      fb("Rápido.", "Nosotros lo ___ de otra manera. (hacer)", "habríamos hecho", "Hacer → hecho."),
      fb("Rápido.", "Ellos no ___ esa carta. (escribir)", "habrían escrito", "Escribir → escrito."),
      fb("Rápido.", "¿Dónde ___ tú las llaves? (poner)", "habrías puesto", "Poner → puesto."),
      fb("Rápido.", "Con más cuidado, no se ___ el vaso. (romper)", "habría roto", "Romper → roto."),
      mc(
        "«Si hubieras venido, lo ___.»",
        ["habrías visto", "hubieras vido", "habrías veído", "verías visto"],
        0,
        "Condicional perfecto con el participio irregular de ver: habrías visto. «Vido» y «veído» no existen, y «verías visto» no es una forma posible."
      ),
    ]
  ),
  L(
    "mountain-guide-difficult-rescue",
    "b2d-rep-estilo-indirecto-preguntas",
    "Preguntas y respuestas: ¿qué te preguntó?",
    "Repaso espaciado: preguntas indirectas con si y con interrogativo.",
    "6 min",
    [
      sec(
        "Preguntas contadas",
        "«¿Tienes coche?» → Me preguntó si tenía coche. «¿Dónde vives?» → Me preguntó dónde vivía. «¿Qué harás?» → Me preguntó qué haría.",
        [
          ["Me preguntó qué haría.", "She asked me what I would do."],
        ],
        [
          fb("Cuenta.", "«¿Tienes coche?» → Me preguntó ___ tenía coche.", "si", "Una pregunta de sí o no se reporta con «si»: me preguntó si tenía coche."),
        ]
      ),
    ],
    [
      fb("Cuenta.", "«¿Dónde vives?» → Me preguntó dónde ___.", "vivía", "En la pregunta indirecta pasada, el presente pasa a imperfecto: vivía."),
      fb("Cuenta.", "«¿Qué harás?» → Me preguntó qué ___.", "haría", "Futuro → condicional: harás → haría."),
      fb("Cuenta.", "«¿Has comido?» → Me preguntó si ___.", "había comido", "Perfecto → pluscuamperfecto: has comido → había comido."),
      fb("Cuenta.", "«¿Por qué te fuiste?» → Me preguntó por qué me ___.", "había ido", "Pretérito → pluscuamperfecto: te fuiste → me había ido."),
      fb("Cuenta.", "«¿Cuánto cuesta?» → Me preguntó cuánto ___.", "costaba", "Presente → imperfecto: cuesta → costaba."),
      toEs("He asked me where I worked.", "Me preguntó dónde trabajaba.", "En la pregunta indirecta, «dónde» mantiene la tilde y el presente pasa a imperfecto.", ["Me preguntó en qué trabajaba."]),
    ]
  ),
  L(
    "el-hilo-que-no-se-corta",
    "b2d-rep-verbos-cambio-ronda",
    "Ronda rápida: ponerse, volverse, hacerse",
    "Repaso espaciado: el verbo de cambio adecuado.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Ponerse: momento. Volverse: carácter con el tiempo. Hacerse: profesión, ideología o esfuerzo. Convertirse en: transformación. Llegar a ser: logro.",
        [
          ["Se hizo rico con el negocio.", "He got rich with the business."],
        ],
        [
          fb("Rápido.", "Se ___ rico con el negocio. (indefinido)", "hizo", "Esfuerzo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Me ___ nerviosa en los exámenes. (presente)", "pongo", "Momento."),
      fb("Rápido.", "Se ha ___ muy desconfiado.", "vuelto", "«Volverse» + adjetivo expresa un cambio de carácter duradero."),
      fb("Rápido.", "La casa se ___ en un hotel. (indefinido)", "convirtió", "Transformación."),
      fb("Rápido.", "___ campeona del mundo. (llegar a ser, indefinido)", "Llegó a ser", "Clave: Logro."),
      fb("Rápido.", "Se ___ vegano hace un año. (indefinido)", "hizo", "Ideología."),
      fb("Rápido.", "Se ___ pálido al ver la sangre. (indefinido)", "puso", "Momento."),
      mc(
        "«Con la edad se ha ___ más tranquilo.»",
        ["vuelto", "puesto", "hecho", "convertido"],
        0,
        "Volverse expresa un cambio de carácter: se ha vuelto más tranquilo. Ponerse es pasajero, hacerse suele ser un logro y convertirse necesita «en»."
      ),
    ]
  ),
  L(
    "el-hilo-que-no-se-corta",
    "b2d-rep-conectores-cadena",
    "Cadena de transformaciones: aunque → a pesar de → sin embargo",
    "Repaso espaciado: la misma concesión con tres estructuras.",
    "6 min",
    [
      sec(
        "Tres formas",
        "Aunque llovía, salimos. = A pesar de la lluvia, salimos. = Llovía. Sin embargo, salimos.",
        [
          ["A pesar de la lluvia, salimos.", "Despite the rain, we went out."],
        ],
        [
          fb("Transforma.", "Aunque tenía fiebre, fue a trabajar. → A pesar de ___ fiebre, fue a trabajar.", "tener", "«A pesar de» va seguido de infinitivo cuando el sujeto es el mismo."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Aunque tenía fiebre, fue a trabajar. → Tenía fiebre. ___, fue a trabajar.", "Sin embargo", "«Sin embargo» empieza una oración nueva y marca contraste con la anterior."),
      fb("Transforma.", "Aunque hacía frío, nos bañamos. → A pesar ___ frío, nos bañamos.", "del", "«A pesar de» + «el frío» se contrae en «a pesar del frío»."),
      fb("Transforma.", "A pesar de que era caro, lo compró. → ___ era caro, lo compró.", "Aunque", "«Aunque» va directamente con verbo conjugado; «a pesar de» necesita «que»."),
      fb("Transforma.", "Estudió mucho. Sin embargo, suspendió. → ___ estudió mucho, suspendió.", "Aunque", "«Aunque» une las dos ideas en una sola oración, sin necesidad de «sin embargo»."),
      fb("Transforma.", "Aunque estaba cansada, siguió. → A pesar ___ cansancio, siguió.", "del", "«A pesar de» + «el cansancio» se contrae en «a pesar del cansancio»."),
      toEs("Despite the price, it's worth it.", "A pesar del precio, merece la pena.", "«A pesar de» + «el precio» se contrae en «a pesar del precio».", ["Pese al precio, merece la pena.", "A pesar del precio, vale la pena."]),
    ]
  ),
  L(
    "lo-que-no-se-hereda",
    "b2d-rep-cuyo-elige",
    "Elige y explica: cuyo o el cual",
    "Repaso espaciado: posesión o relativo tras preposición.",
    "6 min",
    [
      sec(
        "Dos funciones",
        "Cuyo = whose (posesión, concuerda con lo poseído). El cual = which/whom (tras preposición, concuerda con el antecedente).",
        [
          ["Es la empresa para la cual trabajo.", "It's the company I work for."],
          ["Es la empresa cuyo director conozco.", "It's the company whose director I know."],
        ],
        [
          mc(
            "«Es la empresa para ___ trabajo.»",
            ["la cual", "cuya", "cuyo", "el cual"],
            0,
            "Tras preposición se usa artículo + cual, concordando con «la empresa»: para la cual. «Cuya» y «cuyo» indican posesión y «el cual» no concuerda."
          ),
        ]
      ),
    ],
    [
      mc("«Es la empresa ___ director conozco.»", ["cuyo", "la cual", "cuya", "el cual"], 0, "El director es de la empresa: posesión → cuyo, concordando con «director». «La cual» y «el cual» no expresan posesión, y «cuya» no concuerda con «director»."),
      fb("Elige.", "Es el parque en ___ jugaba de niño.", "el cual", "Tras preposición se usa «el cual» (o «el que»), concordando con «parque»."),
      fb("Elige.", "Es el parque ___ árboles son centenarios.", "cuyos", "Para expresar posesión se usa «cuyo», que concuerda con «árboles»."),
      fb("Elige.", "Son las amigas con ___ viajé a Cuba.", "las cuales", "Tras preposición se usa «las cuales» (o «las que»), concordando con «amigas»."),
      fb("Elige.", "Son las amigas ___ padres tienen un barco.", "cuyos", "Para expresar posesión se usa «cuyo», que concuerda con «padres», no con «amigas»."),
      toEs("It's the city whose name I can't remember.", "Es la ciudad cuyo nombre no recuerdo.", "«Cuyo» expresa posesión y concuerda con «nombre», no con «la ciudad».", ["Es la ciudad de cuyo nombre no me acuerdo."]),
    ]
  ),
  L(
    "la-voz-que-hereda-el-viento",
    "b2d-rep-mezcla-noticia",
    "Práctica mezclada: la noticia del día",
    "Repaso espaciado: estilo indirecto, pasiva, conectores y subjuntivo en una noticia.",
    "7 min",
    [
      sec(
        "La noticia",
        "«El puente, que fue construido en 1890, será restaurado. El alcalde aseguró que las obras terminarían antes del verano. Sin embargo, los vecinos pidieron que se mantuviera abierto un carril. Dado que el tráfico es intenso, es probable que haya retrasos.»",
        [
          ["El alcalde aseguró que las obras terminarían antes del verano.", "The mayor assured that the works would finish before summer."],
        ],
        [
          fb("Completa.", "El puente, que ___ construido en 1890, será restaurado. (ser)", "fue", "Pasiva con ser."),
        ]
      ),
    ],
    [
      fb("Completa.", "El alcalde aseguró que las obras ___ antes del verano. (terminar)", "terminarían", "Estilo indirecto."),
      fb("Completa.", "___, los vecinos pidieron…", "Sin embargo", "«Sin embargo» marca contraste con lo anterior y va seguido de coma."),
      fb("Completa.", "…que se ___ abierto un carril. (mantener)", "mantuviera", "Petición en pasado."),
      fb("Completa.", "___ el tráfico es intenso… (causa)", "Dado que", "Clave: Causa."),
      fb("Completa.", "…es probable que ___ retrasos. (haber)", "haya", "Probabilidad."),
      toEs("The mayor said the bridge would reopen in June.", "El alcalde dijo que el puente volvería a abrir en junio.", "En estilo indirecto con «dijo», el futuro pasa a condicional: «volvería».", ["El alcalde dijo que el puente reabriría en junio."]),
    ]
  ),
  L(
    "el-horno-de-la-calle-mayor",
    "b2d-rep-mezcla-elige-modo",
    "Elige y explica: indicativo o subjuntivo en todas las estructuras",
    "Repaso espaciado: una decisión en cada frase.",
    "6 min",
    [
      sec(
        "La gran pregunta",
        "Indicativo: información, hábito, pasado real, antecedente conocido, certeza. Subjuntivo: deseo, duda, emoción, futuro tras conjunción, antecedente desconocido, finalidad, hipótesis.",
        [
          ["Sé que viene / Espero que venga.", "I know he's coming / I hope he comes."],
        ],
        [
          mc(
            "«Es evidente que ___ razón.»",
            ["tienes", "tengas", "tuvieras", "tendrías"],
            0,
            "«Es evidente que» expresa certeza → indicativo: tienes. «Tengas» y «tuvieras» son subjuntivo, y «tendrías» es condicional."
          ),
        ]
      ),
    ],
    [
      mc("«No es evidente que ___ razón.»", ["tengas", "tienes", "tendrás", "tenías"], 0, "Al negar la certeza (no es evidente) se usa subjuntivo: tengas. «Tienes», «tendrás» y «tenías» son indicativo."),
      mc("«Tengo un amigo que ___ en Oslo.»", ["vive", "viva", "viviera", "viviría"], 0, "El amigo existe y lo conozco: indicativo, vive. «Viva» y «viviera» son subjuntivo (para alguien buscado) y «viviría» es condicional."),
      mc("«Avísame cuando ___ en Oslo.»", ["estés", "estás", "estarás", "estuviste"], 0, "«Cuando» con una acción futura pide subjuntivo: cuando estés. «Estás» describiría un hábito, «estarás» no va tras cuando y «estuviste» es pasado."),
      mc("«Siempre me escribe cuando ___ en Oslo.»", ["está", "esté", "estará", "estuviera"], 0, "Un hábito (siempre me escribe cuando…) va con indicativo: está. «Esté» sería para el futuro, «estará» no va tras cuando y «estuviera» es imperfecto de subjuntivo."),
      fb("Elige.", "Me alegra que ___ bien. (estar, tú)", "estés", "Emoción."),
      fb("Elige.", "Veo que ___ bien. (estar, tú)", "estás", "Percepción."),
      toEs("I don't think it's true.", "No creo que sea verdad.", "«No creo que» expresa duda, así que exige subjuntivo: «sea».", ["No creo que sea cierto."]),
    ]
  ),
  L(
    "el-farero-de-punta-fria",
    "b2d-rep-relativas-preguntas",
    "Preguntas y respuestas: ¿conoces a alguien que…?",
    "Repaso espaciado: preguntas con subjuntivo, respuestas con los dos modos.",
    "6 min",
    [
      sec(
        "Pregunta y respuesta",
        "—¿Conoces a alguien que arregle bicis? —Sí, mi vecino arregla bicis. / —No, no conozco a nadie que las arregle.",
        [
          ["—¿Hay alguien que tenga un bolígrafo? —Yo tengo uno.", "Is there anyone who has a pen? I have one."],
        ],
        [
          fb("Pregunta.", "¿Conoces a alguien que ___ bicis? (arreglar)", "arregle", "Pregunta."),
        ]
      ),
    ],
    [
      fb("Responde.", "—Sí, mi vecino ___ bicis. (arreglar)", "arregla", "Existe."),
      fb("Responde.", "—No, no conozco a nadie que las ___. (arreglar)", "arregle", "Inexistente."),
      fb("Pregunta.", "¿Hay algún médico aquí que ___ inglés? (hablar)", "hable", "Pregunta."),
      fb("Responde.", "—Sí, la doctora Ruiz ___ inglés. (hablar)", "habla", "Existe."),
      fb("Pregunta.", "¿Había alguien que te ___ en el aeropuerto? (esperar)", "esperara", "Pregunta en pasado."),
      toEs("Do you know a place where they sell vinyl records?", "¿Conoces algún sitio donde vendan discos de vinilo?", "Si preguntamos si un lugar existe, la relativa va en subjuntivo: «vendan».", ["¿Conoces algún lugar donde vendan vinilos?", "¿Conoces una tienda donde vendan discos de vinilo?"]),
    ]
  ),
  L(
    "el-ultimo-mural-de-la-fabrica",
    "b2d-rep-adverbiales-cuento",
    "Cuento con huecos: la visita de los abuelos",
    "Repaso espaciado: conjunciones temporales y finales en un plan familiar.",
    "7 min",
    [
      sec(
        "El plan",
        "«Cuando lleguen los abuelos, iremos a buscarlos a la estación. Antes de que lleguen, limpiaremos la habitación de invitados. Les compraremos un mapa para que puedan pasear solos. Y en cuanto se vayan, ¡a dormir la siesta!»",
        [
          ["Antes de que lleguen, limpiaremos la habitación.", "Before they arrive, we'll clean the room."],
        ],
        [
          fb("Completa.", "Cuando ___ los abuelos, iremos a la estación. (llegar)", "lleguen", "Futuro."),
        ]
      ),
    ],
    [
      fb("Completa.", "Antes de que ___, limpiaremos la habitación. (llegar)", "lleguen", "Antes de que."),
      fb("Completa.", "Les compraremos un mapa para que ___ pasear solos. (poder)", "puedan", "Para que."),
      fb("Completa.", "En cuanto se ___, ¡a dormir la siesta! (ir)", "vayan", "Futuro."),
      fb("Completa.", "La última vez, cuando ___, nos trajeron turrón. (venir)", "vinieron", "Pasado."),
      fb("Completa.", "Aunque ___ cansados del viaje, querrán salir. (estar — no lo sabemos)", "estén", "Hipótesis."),
      toEs("We'll go to the station as soon as they call.", "Iremos a la estación en cuanto llamen.", "«En cuanto» + acción futura exige subjuntivo: «llamen».", ["Iremos a la estación tan pronto como llamen."]),
    ]
  ),
  L(
    "el-tallista-de-la-ermita",
    "b2d-rep-adverbiales-pares",
    "Pares mínimos: cuando llegue / cuando llegara",
    "Repaso espaciado: futuro desde el presente y futuro desde el pasado.",
    "6 min",
    [
      sec(
        "Futuro visto desde el pasado",
        "Te llamaré cuando llegue (futuro desde ahora). Dijo que me llamaría cuando llegara (futuro visto desde el pasado → imperfecto de subjuntivo).",
        [
          ["Dijo que me llamaría cuando llegara.", "He said he'd call me when he arrived."],
        ],
        [
          fb("Par.", "Te llamaré cuando ___. (llegar)", "llegue", "Futuro desde ahora."),
        ]
      ),
    ],
    [
      fb("Par.", "Dijo que me llamaría cuando ___. (llegar)", "llegara", "Futuro desde el pasado."),
      fb("Par.", "Me iré en cuanto ___ la película. (terminar)", "termine", "Desde ahora."),
      fb("Par.", "Prometió que se iría en cuanto ___ la película. (terminar)", "terminara", "Desde el pasado."),
      fb("Par.", "Esperaré hasta que me ___. (llamar, tú)", "llames", "Desde ahora."),
      fb("Par.", "Dijo que esperaría hasta que lo ___. (llamar, yo)", "llamara", "Desde el pasado."),
      toEs("She said she would tell me when she knew.", "Dijo que me lo diría cuando lo supiera.", "En estilo indirecto, el futuro pasa a condicional («diría») y «cuando» + futuro a imperfecto de subjuntivo («supiera»).", ["Me dijo que me lo diría cuando lo supiera.", "Dijo que me avisaría cuando lo supiera."]),
    ]
  ),
  L(
    "el-tallista-de-la-ermita",
    "b2d-rep-imperfecto-corrige",
    "Corrige el párrafo: secuencia en una carta",
    "Repaso espaciado: presente de subjuntivo donde toca imperfecto.",
    "6 min",
    [
      sec(
        "La carta",
        "«Querida Ana: el verano pasado mis padres querían que trabaje en su tienda. Yo prefería que me dejen viajar. Al final me permitieron que vaya a Italia con la condición de que les escriba cada semana.» Cuatro errores.",
        [
          ["Mis padres querían que trabajara en su tienda.", "My parents wanted me to work in their shop."],
        ],
        [
          mc(
            "¿Por qué «querían que trabaje» es incorrecto?",
            ["Principal en pasado → imperfecto de subjuntivo.", "Falta un pronombre.", "Debe ser indicativo.", "Nada."],
            0,
            "Si el verbo principal está en pasado (querían), la subordinada va en imperfecto de subjuntivo: que trabajara. No falta pronombre, el indicativo no sirve con querer que y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Mis padres querían que trabaje en su tienda.»", "Mis padres querían que trabajara en su tienda.", "Con «querían» en pasado, el subjuntivo va en imperfecto: «trabajara», no «trabaje»."),
      toEs("Corrige: «Yo prefería que me dejen viajar.»", "Yo prefería que me dejaran viajar.", "Con «prefería» en pasado, el subjuntivo va en imperfecto: «dejaran», no «dejen»."),
      toEs("Corrige: «Me permitieron que vaya a Italia.»", "Me permitieron que fuera a Italia.", "Con «permitieron» en pasado, el subjuntivo va en imperfecto: «fuera», no «vaya»."),
      toEs("Corrige: «…con la condición de que les escriba cada semana.»", "…con la condición de que les escribiera cada semana.", "La condición depende de un verbo en pasado, así que va en imperfecto de subjuntivo: «escribiera»."),
      toEs("Corrige: «Ojalá que el año que viene me dejaran otra vez.» (es posible)", "Ojalá que el año que viene me dejen otra vez.", "Para un deseo posible en el futuro, «ojalá» va con presente de subjuntivo: «dejen»."),
      ms(
        "¿Qué frases respetan la secuencia?",
        ["Quería que vinieras.", "Quiero que vengas.", "Quería que vengas.", "Quiero que vinieras mañana."],
        [0, 1],
        "Pasado → imperfecto de subjuntivo (quería que vinieras); presente → presente (quiero que vengas). «Quería que vengas» y «Quiero que vinieras mañana» mezclan los tiempos."
      ),
    ]
  ),
  L(
    "la-lonja-de-las-seis",
    "b2d-rep-si-habla-de-ti",
    "Habla de ti: si no existiera internet…",
    "Repaso espaciado: hipótesis sobre el mundo actual.",
    "6 min",
    [
      sec(
        "Imagina",
        "Si no existiera internet, escribiría cartas. Si no hubiera coches, iría en bici a todas partes. Si los días tuvieran treinta horas, dormiría más.",
        [
          ["Si no existiera internet, escribiría cartas.", "If the internet didn't exist, I'd write letters."],
        ],
        [
          fb("Imagina.", "Si no ___ internet, escribiría cartas. (existir)", "existiera", "Si + imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Imagina.", "Si no hubiera coches, ___ en bici a todas partes. (ir)", "iría", "Condicional."),
      fb("Imagina.", "Si los días ___ treinta horas, dormiría más. (tener)", "tuvieran", "Si + imperfecto de subjuntivo."),
      fb("Imagina.", "Si no ___ que trabajar, viajaría por el mundo. (tener, yo)", "tuviera", "Si + imperfecto de subjuntivo."),
      fb("Imagina.", "Si pudiera hablar con los animales, le ___ mil cosas a mi gato. (preguntar)", "preguntaría", "Condicional."),
      fb("Imagina.", "Si ___ ser invisible un día, iría al Museo del Prado de noche. (poder)", "pudiera", "Si + imperfecto de subjuntivo."),
      toEs("If there were no phones, we would talk more.", "Si no hubiera móviles, hablaríamos más.", "Condición irreal presente: «si no hubiera» (singular impersonal) + condicional «hablaríamos».", ["Si no existieran los móviles, hablaríamos más.", "Si no hubiera teléfonos, hablaríamos más."]),
    ]
  ),
  L(
    "los-titiriteros-de-siempre",
    "b2d-rep-si-como-si-ronda",
    "Ronda rápida: como si en todos los tiempos",
    "Repaso espaciado: como si + imperfecto o pluscuamperfecto de subjuntivo.",
    "5 min",
    [
      sec(
        "Dos como si",
        "Simultáneo: Habla como si lo supiera todo. Anterior: Habla como si hubiera estado allí. El verbo principal no cambia nada.",
        [
          ["Habla como si hubiera estado allí.", "He talks as if he had been there."],
        ],
        [
          fb("Rápido.", "Me mira como si me ___. (conocer)", "conociera", "Simultáneo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Me miró como si ___ un fantasma. (ver)", "hubiera visto", "Anterior."),
      fb("Rápido.", "Gasta como si ___ millonario. (ser)", "fuera", "Simultáneo."),
      fb("Rápido.", "Actúa como si no ___ nada. (pasar — antes)", "hubiera pasado", "Anterior."),
      fb("Rápido.", "Corre como si le ___ la vida en ello. (ir)", "fuera", "Simultáneo."),
      fb("Rápido.", "Estaba agotado, como si ___ un maratón. (correr)", "hubiera corrido", "Anterior."),
      fb("Rápido.", "Me habla como si ___ su hermano. (ser, yo)", "fuera", "Simultáneo."),
      mc(
        "«Se comporta como si ___ el jefe.»",
        ["fuera", "es", "será", "sea"],
        0,
        "«Como si» siempre va con imperfecto de subjuntivo: como si fuera el jefe. «Es», «será» y «sea» no pueden seguir a «como si»."
      ),
    ]
  ),
  L(
    "la-posada-del-cruce",
    "b2d-rep-condicional-perfecto-habla",
    "Habla de ti: lo que habrías hecho de otra manera",
    "Repaso espaciado: arrepentimientos y condiciones pasadas.",
    "6 min",
    [
      sec(
        "Tu pasado",
        "Si hubiera sabido lo que sé ahora, habría estudiado otra cosa. Ojalá hubiera viajado más de joven. Yo en aquella situación habría actuado diferente.",
        [
          ["Ojalá hubiera viajado más de joven.", "I wish I had travelled more when I was young."],
        ],
        [
          fb("Tu pasado.", "Si ___ lo que sé ahora, habría estudiado otra cosa. (saber)", "hubiera sabido", "Condición pasada."),
        ]
      ),
    ],
    [
      fb("Tu pasado.", "…___ otra cosa. (estudiar)", "habría estudiado", "Consecuencia."),
      fb("Tu pasado.", "Ojalá ___ más de joven. (viajar)", "hubiera viajado", "Lamento."),
      fb("Tu pasado.", "Yo en aquella situación ___ diferente. (actuar)", "habría actuado", "Condicional perfecto."),
      fb("Tu pasado.", "Si no me ___ a esta ciudad, no te habría conocido. (mudar)", "hubiera mudado", "Condición pasada."),
      fb("Tu pasado.", "Si hubiera empezado antes, ahora ___ mejor. (hablar)", "hablaría", "Consecuencia presente."),
      toEs("I wish I had said yes.", "Ojalá hubiera dicho que sí.", "«Ojalá» + pluscuamperfecto de subjuntivo expresa lamento por algo pasado.", ["Ojalá hubiese dicho que sí."]),
    ]
  ),
  L(
    "la-trashumancia-de-don-silvestre",
    "b2d-rep-condicional-perfecto-mixtas",
    "Elige y explica: habría ido o iría",
    "Repaso espaciado: consecuencia en el pasado o en el presente.",
    "6 min",
    [
      sec(
        "¿Cuándo es la consecuencia?",
        "Si hubiera ahorrado, habría comprado un coche (entonces). Si hubiera ahorrado, ahora tendría un coche (ahora). La condición es pasada en ambas.",
        [
          ["Si hubiera ahorrado, ahora tendría un coche.", "If I had saved, I'd have a car now."],
        ],
        [
          mc(
            "«Si hubiera dormido más, ahora no ___ tan cansado.»",
            ["estaría", "habría estado", "estuviera", "estaba"],
            0,
            "Condición pasada con consecuencia en el presente (ahora): condicional simple, estaría. «Habría estado» se refiere al pasado, «estuviera» es subjuntivo y «estaba» es indicativo."
          ),
        ]
      ),
    ],
    [
      mc("«Si hubiera dormido más, ayer no ___ tan cansado.»", ["habría estado", "estaría", "estuviera", "estoy"], 0, "Condición pasada con consecuencia también pasada (ayer): condicional perfecto, habría estado. «Estaría» se refiere al presente, «estuviera» es subjuntivo y «estoy» es presente."),
      fb("Elige.", "Si hubiera aprendido chino, ahora ___ en Pekín. (trabajar)", "trabajaría", "Presente."),
      fb("Elige.", "Si hubiera aprendido chino, el año pasado ___ en Pekín. (trabajar)", "habría trabajado", "Pasado."),
      fb("Elige.", "Si te hubieras puesto crema, ahora no ___ quemado. (estar)", "estarías", "Presente."),
      fb("Elige.", "Si no hubiéramos perdido el tren, ya ___ en casa. (estar)", "estaríamos", "Presente."),
      toEs("If you had called me, I would be there now.", "Si me hubieras llamado, ahora estaría allí.", "Condicional mixta: condición pasada («si hubieras llamado») con efecto presente («estaría»).", ["Si me hubieses llamado, ahora estaría allí.", "Si me hubieras llamado, ahora estaría ahí."]),
    ]
  ),
  L(
    "los-azulejos-de-la-casa-azul",
    "b2d-rep-estilo-indirecto-cuento",
    "Cuento con huecos: la conversación con el casero",
    "Repaso espaciado: contar una conversación con todos los cambios.",
    "7 min",
    [
      sec(
        "Lo que dijo",
        "Casero: «El alquiler subirá en enero. Ya lo he hablado con los otros vecinos. ¿Estáis de acuerdo? Pensadlo y contestadme mañana.»",
        [
          ["Nos dijo que el alquiler subiría en enero.", "He told us the rent would go up in January."],
        ],
        [
          fb("Cuenta.", "Nos dijo que el alquiler ___ en enero. (subir)", "subiría", "Futuro → condicional."),
        ]
      ),
    ],
    [
      fb("Cuenta.", "Añadió que ya lo ___ con los otros vecinos. (hablar)", "había hablado", "Perfecto → pluscuamperfecto."),
      fb("Cuenta.", "Nos preguntó si ___ de acuerdo. (estar)", "estábamos", "Presente → imperfecto."),
      fb("Cuenta.", "Nos pidió que lo ___. (pensar)", "pensáramos", "Orden → imperfecto de subjuntivo."),
      fb("Cuenta.", "…y que le ___ al día siguiente. (contestar)", "contestáramos", "Clave: Orden."),
      fb("Cuenta.", "Le dijimos que no ___ pagar más. (poder)", "podíamos", "Presente → imperfecto."),
      toEs("He asked us if we agreed.", "Nos preguntó si estábamos de acuerdo.", "Una pregunta de sí o no se transmite con «si», y el presente pasa a imperfecto: «estábamos».", ["Nos preguntó si estábamos conformes."]),
    ]
  ),
  L(
    "los-azulejos-de-la-casa-azul",
    "b2d-rep-estilo-indirecto-verbos",
    "Elige y explica: el verbo introductor adecuado",
    "Repaso espaciado: aseguró, admitió, negó, prometió, advirtió, sugirió.",
    "6 min",
    [
      sec(
        "Precisión",
        "Cada verbo introductor aporta un matiz: asegurar (certeza), admitir (reconocer), negar (rechazar), prometer (compromiso), advertir (aviso), sugerir (propuesta).",
        [
          ["Negó que hubiera copiado.", "He denied having copied."],
        ],
        [
          mc(
            "«Te juro que te lo devolveré.» → ___ que me lo devolvería.",
            ["Prometió", "Negó", "Admitió", "Advirtió"],
            0,
            "«Te juro que te lo devolveré» es un compromiso: prometió. Negar es decir que no, admitir es reconocer algo y advertir es avisar de un peligro."
          ),
        ]
      ),
    ],
    [
      mc("«Sí, fui yo quien lo rompió.» → ___ que lo había roto.", ["Admitió", "Negó", "Prometió", "Sugirió"], 0, "Reconocer que uno lo hizo es admitir: admitió que lo había roto. Negar es lo contrario, prometer es comprometerse y sugerir es proponer."),
      mc("«Cuidado con el perro.» → Nos ___ del perro.", ["advirtió", "prometió", "admitió", "negó"], 0, "«Cuidado con…» es un aviso: nos advirtió del perro. Prometer, admitir y negar no expresan un aviso."),
      mc("«¿Por qué no vamos al cine?» → ___ que fuéramos al cine.", ["Sugirió", "Aseguró", "Negó", "Admitió"], 0, "«¿Por qué no vamos…?» es una propuesta: sugirió que fuéramos. Asegurar es afirmar con certeza, y negar y admitir no expresan una propuesta."),
      fb("Completa.", "«Yo no he sido.» → Negó que ___ él. (ser)", "hubiera sido", "«Negar que» exige subjuntivo; como la acción es anterior, se usa el pluscuamperfecto «hubiera sido»."),
      fb("Completa.", "«Llegaremos a tiempo, seguro.» → Aseguró que ___ a tiempo. (llegar)", "llegarían", "En estilo indirecto con verbo en pasado, el futuro «llegaremos» pasa a condicional «llegarían»."),
      toEs("She admitted she had forgotten.", "Admitió que se le había olvidado.", "«Admitir» resume el reconocimiento de algo; el pasado pasa a pluscuamperfecto: «se le había olvidado».", ["Reconoció que lo había olvidado.", "Admitió que lo había olvidado."]),
    ]
  ),
  L(
    "el-huerto-de-la-abuela-amparo",
    "b2d-rep-ser-estar-cuento",
    "Cuento con huecos: la casa de la playa",
    "Repaso espaciado: ser, estar y haber en una descripción.",
    "6 min",
    [
      sec(
        "La casa",
        "«La casa es de mis abuelos y está a cien metros del mar. Hay tres habitaciones. La cocina es pequeña pero está muy bien equipada. La fiesta de verano es siempre en el jardín.»",
        [
          ["La casa está a cien metros del mar.", "The house is a hundred metres from the sea."],
        ],
        [
          fb("Completa.", "La casa ___ de mis abuelos. (ser/estar)", "es", "Posesión."),
        ]
      ),
    ],
    [
      fb("Completa.", "…y ___ a cien metros del mar. (ser/estar)", "está", "Localización."),
      fb("Completa.", "___ tres habitaciones. (haber)", "Hay", "Existencia."),
      fb("Completa.", "La cocina ___ pequeña. (ser/estar)", "es", "Característica."),
      fb("Completa.", "…pero ___ muy bien equipada. (ser/estar)", "está", "Resultado."),
      fb("Completa.", "La fiesta de verano ___ siempre en el jardín. (ser/estar)", "es", "Evento."),
      toEs("There's a big garden, and the party is there.", "Hay un jardín grande y la fiesta es allí.", "«Hay» presenta algo nuevo («un jardín»); para dónde tiene lugar un evento se usa «ser».", ["Hay un jardín grande, y la fiesta es ahí."]),
    ]
  ),
  L(
    "el-luthier-de-paracho",
    "b2d-rep-enfasis-ronda",
    "Ronda rápida: estructuras de énfasis",
    "Repaso espaciado: pronombre de retoma, hendidas y lo + adjetivo + que.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Complemento antepuesto → pronombre (La tarta la hice yo). Ser … que/quien/donde/cuando. Lo + adjetivo + que concuerda.",
        [
          ["Fue aquí donde nos conocimos.", "It was here that we met."],
        ],
        [
          fb("Rápido.", "Las fotos ___ hizo mi padre.", "las", "El complemento directo antepuesto se retoma con pronombre: «las fotos» → «las»."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Fue aquí ___ nos conocimos.", "donde", "En las hendidas de lugar se usa «donde»: «Fue aquí donde…»."),
      fb("Rápido.", "Fue en 1999 ___ nació mi hija.", "cuando", "En las hendidas de tiempo se usa «cuando»: «Fue en 1999 cuando…»."),
      fb("Rápido.", "Fueron ellos ___ lo organizaron.", "quienes", "En las hendidas de persona en plural se usa «quienes» (o «los que»)."),
      fb("Rápido.", "No sabes lo ___ que están las fresas. (rico)", "ricas", "Concordancia."),
      fb("Rápido.", "___ más me preocupa es el precio.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que más me preocupa es…»."),
      fb("Rápido.", "A tu hermano no ___ he visto.", "lo", "El complemento directo de persona antepuesto se retoma con «lo»."),
      mc(
        "«___ había visto algo tan bonito.»",
        ["Jamás", "No jamás", "Jamás no", "Nunca no"],
        0,
        "Si «jamás» va antes del verbo, no se añade «no»: Jamás había visto algo así. «No jamás», «jamás no» y «nunca no» duplican la negación en mal orden."
      ),
    ]
  ),
  L(
    "el-turron-de-los-marin",
    "b2d-rep-mezcla-dialogo-reencuentro",
    "Práctica mezclada: el reencuentro",
    "Repaso espaciado: dos antiguos compañeros se ponen al día.",
    "7 min",
    [
      sec(
        "El diálogo",
        "Marta: «¡Cuánto tiempo! Si me hubieras dicho que venías, te habría preparado algo.» Pablo: «Fue Luis quien me dio tu dirección. Me dijo que te habías hecho arquitecta.» Marta: «Sí, y me encantaría que vieras mi último proyecto, cuya fachada es toda de madera.»",
        [
          ["Me dijo que te habías hecho arquitecta.", "He told me you had become an architect."],
        ],
        [
          fb("Completa.", "Si me ___ que venías, te habría preparado algo. (decir)", "hubieras dicho", "Irreal pasado."),
        ]
      ),
    ],
    [
      fb("Completa.", "Fue Luis ___ me dio tu dirección.", "quien", "En las hendidas de persona se usa «quien» (o «el que»): «Fue Luis quien…»."),
      fb("Completa.", "Me dijo que te ___ arquitecta. (hacerse)", "habías hecho", "Estilo indirecto + verbo de cambio."),
      fb("Completa.", "Me encantaría que ___ mi último proyecto. (ver)", "vieras", "Condicional → imperfecto de subjuntivo."),
      fb("Completa.", "…___ fachada es toda de madera.", "cuya", "«Cuyo» concuerda con lo poseído: «fachada» es femenino singular."),
      fb("Completa.", "Cuando ___ tiempo, te lo enseño. (tener, tú)", "tengas", "Futuro."),
      toEs("It was Luis who gave me your address.", "Fue Luis quien me dio tu dirección.", "En las hendidas de persona se usa «quien» (o «el que»): «Fue Luis quien…».", ["Fue Luis el que me dio tu dirección."]),
    ]
  ),
  L(
    "el-cestero-del-tormes",
    "b2d-rep-mezcla-circuito-condiciones",
    "Circuito acumulativo: condiciones, deseos y consejos",
    "Repaso espaciado: si, ojalá, como si, yo que tú y aunque.",
    "6 min",
    [
      sec(
        "Cinco estaciones",
        "1) si real. 2) si irreal. 3) ojalá. 4) como si. 5) aunque.",
        [
          ["Yo que tú, no lo haría.", "If I were you, I wouldn't do it."],
        ],
        [
          fb("Estación 1.", "Si ___ un rato el sábado, te llamo. (tener, yo)", "tengo", "Real: si + presente."),
        ]
      ),
    ],
    [
      fb("Estación 2.", "Si ___ más tiempo, te ayudaría. (tener, yo)", "tuviera", "Irreal presente."),
      fb("Estación 2.", "Si ___ más tiempo, te habría ayudado. (tener, yo)", "hubiera tenido", "Irreal pasado."),
      fb("Estación 3.", "Ojalá ___ aquí ahora. (estar, tú)", "estuvieras", "Deseo irreal."),
      fb("Estación 4.", "Me habla como si ___ su criado. (ser, yo)", "fuera", "Como si."),
      fb("Estación 5.", "Aunque me lo ___, no iré. (pedir, tú)", "pidas", "Hipótesis."),
      fb("Consejo.", "Yo que tú, no lo ___. (hacer)", "haría", "Condicional."),
      toEs("Even if you asked me, I wouldn't go.", "Aunque me lo pidieras, no iría.", "«Aunque» + imperfecto de subjuntivo presenta una hipótesis poco probable.", ["Aunque me lo pidieses, no iría."]),
    ]
  ),
  L(
    "el-molino-que-no-calla",
    "b2d-rep-relativas-ronda",
    "Ronda rápida: relativas con los dos modos",
    "Repaso espaciado: conocido, desconocido, inexistente y abierto.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Conocido → indicativo. Desconocido, inexistente o abierto → subjuntivo. En pasado, el subjuntivo pasa a -ra.",
        [
          ["No había nada que pudiéramos hacer.", "There was nothing we could do."],
        ],
        [
          fb("Rápido.", "No había nada que ___ hacer. (poder, nosotros)", "pudiéramos", "Inexistente, pasado."),
        ]
      ),
    ],
    [
      fb("Rápido.", "El vestido que ___ ayer es precioso. (comprar, tú)", "compraste", "Conocido."),
      fb("Rápido.", "Cómprate el vestido que más te ___. (gustar)", "guste", "Abierto."),
      fb("Rápido.", "Busco unas botas que ___ impermeables. (ser)", "sean", "Desconocido."),
      fb("Rápido.", "Tengo unas botas que ___ impermeables. (ser)", "son", "Conocido."),
      fb("Rápido.", "No encontré ningún hotel que ___ libre. (estar)", "estuviera", "Inexistente, pasado."),
      fb("Rápido.", "¿Hay alguien que ___ tocar la guitarra? (saber)", "sepa", "Pregunta."),
      mc(
        "«Quería un perro que no ___ mucho.»",
        ["ladrara", "ladre", "ladraba", "ladraría"],
        0,
        "El perro deseado era desconocido y el verbo principal está en pasado: imperfecto de subjuntivo, ladrara. «Ladre» iría con presente, «ladraba» es indicativo y «ladraría» es condicional."
      ),
    ]
  ),
  L(
    "el-acero-de-los-bermudez",
    "b2d-rep-adverbiales-ronda-final",
    "Ronda rápida: todas las conjunciones adverbiales",
    "Repaso espaciado: presente, pasado e indicativo.",
    "5 min",
    [
      sec(
        "Mapa rápido",
        "Siempre subjuntivo: antes de que, para que, sin que, a menos que, con tal de que, en caso de que. Depende del tiempo: cuando, en cuanto, hasta que, después de que. Depende del hablante: aunque.",
        [
          ["Lo haré con tal de que me ayudes.", "I'll do it as long as you help me."],
        ],
        [
          fb("Rápido.", "Lo haré con tal de que me ___. (ayudar, tú)", "ayudes", "Siempre subjuntivo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Siempre ceno cuando ___ del gimnasio. (volver)", "vuelvo", "Hábito."),
      fb("Rápido.", "Cenaré cuando ___ del gimnasio. (volver)", "vuelva", "Futuro."),
      fb("Rápido.", "Salió sin que la ___. (ver, nosotros)", "viéramos", "Pasado."),
      fb("Rápido.", "No iré a menos que me ___. (invitar, ellos)", "inviten", "Siempre subjuntivo."),
      fb("Rápido.", "Aunque ___ cansado, sigue estudiando. (estar — hecho)", "está", "Clave: Hecho."),
      fb("Rápido.", "Te dejé las llaves por si ___ antes. (llegar, tú)", "llegabas", "Por si + indicativo."),
      mc(
        "«Nos quedaremos hasta que ___ la fiesta.»",
        ["termine", "termina", "terminará", "terminó"],
        0,
        "«Hasta que» con una acción futura pide subjuntivo: hasta que termine. «Termina» describiría un hábito, «terminará» no va tras hasta que y «terminó» es pasado."
      ),
    ]
  ),
  L(
    "el-acero-de-los-bermudez",
    "b2d-rep-adverbiales-linea",
    "Línea del tiempo: la misma conjunción en tres momentos",
    "Repaso espaciado: cuando / en cuanto en pasado, hábito y futuro.",
    "6 min",
    [
      sec(
        "Tres momentos",
        "Pasado: En cuanto llegó, se puso a cocinar. Hábito: En cuanto llega, se pone a cocinar. Futuro: En cuanto llegue, se pondrá a cocinar.",
        [
          ["En cuanto llegue, se pondrá a cocinar.", "As soon as he arrives, he'll start cooking."],
        ],
        [
          fb("Pasado.", "En cuanto ___, se puso a cocinar. (llegar)", "llegó", "Pasado."),
        ]
      ),
    ],
    [
      fb("Hábito.", "En cuanto ___, se pone a cocinar. (llegar)", "llega", "Hábito."),
      fb("Futuro.", "En cuanto ___, se pondrá a cocinar. (llegar)", "llegue", "Futuro."),
      fb("Pasado.", "Cuando ___ el concierto, fuimos a cenar. (acabar)", "acabó", "Pasado."),
      fb("Futuro.", "Cuando ___ el concierto, iremos a cenar. (acabar)", "acabe", "Futuro."),
      fb("Hábito.", "Cuando ___ un concierto, siempre vamos a cenar después. (haber)", "hay", "Hábito."),
      toEs("When I finished, I went home.", "Cuando terminé, me fui a casa.", "«Cuando» con una acción pasada va en indicativo: «terminé».", ["Cuando acabé, me fui a casa.", "Cuando terminé, volví a casa."]),
    ]
  ),
  L(
    "la-queseria-de-las-nubes",
    "b2d-rep-imperfecto-habla",
    "Habla de ti: lo que te pedían de pequeño",
    "Repaso espaciado: verbos de influencia en pasado.",
    "6 min",
    [
      sec(
        "Tu infancia",
        "Mis profesores me pedían que hablara menos. Mi abuela quería que comiera más. Mis padres no permitían que viera la tele hasta tarde.",
        [
          ["Mi abuela quería que comiera más.", "My grandmother wanted me to eat more."],
        ],
        [
          fb("Tu infancia.", "Mis profesores me pedían que ___ menos. (hablar)", "hablara", "Pasado."),
        ]
      ),
    ],
    [
      fb("Tu infancia.", "Mi abuela quería que ___ más. (comer)", "comiera", "Pasado."),
      fb("Tu infancia.", "Mis padres no permitían que ___ la tele hasta tarde. (ver)", "viera", "Pasado."),
      fb("Tu infancia.", "Mi madre insistía en que ___ un abrigo. (llevar)", "llevara", "Pasado."),
      fb("Tu infancia.", "Mi hermano mayor me prohibía que ___ en su cuarto. (entrar)", "entrara", "Pasado."),
      fb("Tu infancia.", "Me encantaba que mi padre me ___ cuentos. (leer)", "leyera", "Emoción en pasado."),
      toEs("My parents wanted me to learn to swim.", "Mis padres querían que aprendiera a nadar.", "«Querer que» en pasado exige imperfecto de subjuntivo: «aprendiera».", ["Mis padres querían que aprendiese a nadar."]),
    ]
  ),
  L(
    "el-cantero-de-la-torre",
    "b2d-rep-imperfecto-cadena",
    "Cadena de transformaciones: del presente al condicional",
    "Repaso espaciado: quiero que → querría que.",
    "5 min",
    [
      sec(
        "Suavizar",
        "Quiero que me ayudes → Querría / Me gustaría que me ayudaras. Es mejor que vengas → Sería mejor que vinieras.",
        [
          ["Sería mejor que vinieras.", "It would be better if you came."],
        ],
        [
          fb("Suaviza.", "Quiero que me ayudes. → Me gustaría que me ___.", "ayudaras", "Con condicional en la principal («me gustaría»), la subordinada va en imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Es mejor que vengas. → Sería mejor que ___.", "vinieras", "Con condicional en la principal («sería»), la subordinada va en imperfecto de subjuntivo."),
      fb("Suaviza.", "Te pido que lo revises. → Te pediría que lo ___.", "revisaras", "Con condicional en la principal («pediría»), la subordinada va en imperfecto de subjuntivo."),
      fb("Suaviza.", "Necesito que me llames. → Necesitaría que me ___.", "llamaras", "Con condicional en la principal («necesitaría»), la subordinada va en imperfecto de subjuntivo."),
      fb("Suaviza.", "Prefiero que no fumes. → Preferiría que no ___.", "fumaras", "Con condicional en la principal («preferiría»), la subordinada va en imperfecto de subjuntivo."),
      fb("Suaviza.", "Es importante que asistáis. → Sería importante que ___.", "asistierais", "Con condicional en la principal («sería»), la subordinada va en imperfecto de subjuntivo."),
      toEs("I would prefer you to come tomorrow.", "Preferiría que vinieras mañana.", "Tras un condicional («preferiría»), la subordinada va en imperfecto de subjuntivo: «vinieras».", ["Preferiría que vinieses mañana.", "Preferiría que viniera mañana."]),
    ]
  ),
  L(
    "la-voz-que-quedo",
    "b2d-rep-si-frase-a-frase",
    "Frase a frase: un discurso de campaña",
    "Repaso espaciado: promesas reales e hipótesis en un discurso.",
    "6 min",
    [
      sec(
        "El discurso",
        "«Si me votáis, bajaré los impuestos. Si yo fuera alcaldesa, nadie viviría en la calle. Si el anterior gobierno hubiera invertido más, hoy tendríamos mejores hospitales.»",
        [
          ["Si me votáis, bajaré los impuestos.", "If you vote for me, I'll lower taxes."],
        ],
        [
          fb("Paso 1.", "Si me ___, bajaré los impuestos. (votar, vosotros)", "votáis", "Clave: Real."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Si yo ___ alcaldesa, nadie viviría en la calle. (ser)", "fuera", "Irreal presente."),
      fb("Paso 2.", "Si yo fuera alcaldesa, nadie ___ en la calle. (vivir)", "viviría", "En «si + imperfecto de subjuntivo», la consecuencia va en condicional: «viviría»."),
      fb("Paso 3.", "Si el gobierno ___ más… (invertir)", "hubiera invertido", "Irreal pasado."),
      fb("Paso 3.", "…hoy ___ mejores hospitales. (tener, nosotros)", "tendríamos", "Consecuencia presente."),
      fb("Paso 4.", "Hablan como si todo ___ bien. (ir)", "fuera", "Como si."),
      toEs("If I win, I'll build more schools.", "Si gano, construiré más colegios.", "Condición real o probable: «si» + presente y futuro en la consecuencia.", ["Si gano, construiré más escuelas.", "Si gano, voy a construir más colegios."]),
    ]
  ),
  L(
    "lo-que-quedaba-por-ver",
    "b2d-rep-condicional-perfecto-corrige",
    "Corrige el párrafo: el diario de los errores",
    "Repaso espaciado: habría y hubiera en su sitio.",
    "6 min",
    [
      sec(
        "El diario",
        "«Si habría sabido que llovería, no habría salido. Ojalá habría llevado paraguas. Si hubiera cogido un taxi, no me mojaba.» Tres errores.",
        [
          ["Si hubiera sabido que llovería, no habría salido.", "If I had known it would rain, I wouldn't have gone out."],
        ],
        [
          mc(
            "¿Qué falla en «ojalá habría llevado»?",
            ["Ojalá + pluscuamperfecto de subjuntivo: hubiera llevado.", "Falta que.", "Debe ser «llevara».", "Nada."],
            0,
            "Ojalá + pluscuamperfecto de subjuntivo para lamentar el pasado: ojalá hubiera llevado. No falta «que», y «llevara» se referiría al presente o futuro."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Si habría sabido que llovería, no habría salido.»", "Si hubiera sabido que llovería, no habría salido.", "Tras «si» condicional nunca va «habría»: se usa «hubiera sabido»."),
      toEs("Corrige: «Ojalá habría llevado paraguas.»", "Ojalá hubiera llevado paraguas.", "«Ojalá» va con subjuntivo, nunca con condicional: «hubiera llevado»."),
      toEs("Corrige: «Si hubiera cogido un taxi, no me mojaba.»", "Si hubiera cogido un taxi, no me habría mojado.", "La consecuencia de «si hubiera cogido» va en condicional perfecto: «no me habría mojado».", ["Si hubiera cogido un taxi, no me hubiera mojado."]),
      toEs("Corrige: «Yo lo hubiera hacido de otra forma.»", "Yo lo habría hecho de otra forma.", "El participio de «hacer» es irregular: «hecho». En la consecuencia lo normal es el condicional perfecto: «habría hecho».", ["Yo lo hubiera hecho de otra forma."]),
      ms(
        "¿Qué frases son correctas?",
        ["Si lo hubiera visto, te lo habría dicho.", "Ojalá lo hubiera visto.", "Si lo habría visto, te lo diría.", "Ojalá lo habría visto."],
        [0, 1],
        "Tras si u ojalá, para el pasado, se usa el pluscuamperfecto de subjuntivo: hubiera visto. «Si lo habría visto» y «Ojalá lo habría visto» usan el condicional, imposible en esa posición."
      ),
    ]
  ),
  L(
    "el-rostro-reconocido",
    "b2d-rep-estilo-indirecto-dictado",
    "Dictado: lo que me dijeron",
    "Repaso espaciado: estilo indirecto con distintos verbos.",
    "5 min",
    [
      sec(
        "Frases contadas",
        "Fíjate en el verbo introductor y en el tiempo que sigue.",
        [
          ["Me aseguró que no volvería a pasar.", "He assured me it wouldn't happen again."],
        ],
        [
          wo("Me aseguró que no volvería a pasar.", "Futuro → condicional.", "He assured me it wouldn't happen again."),
        ]
      ),
    ],
    [
      wo("Nos preguntó si habíamos dormido bien.", "Pregunta indirecta.", "She asked us if we had slept well."),
      wo("Le pedí que me esperara en la puerta.", "Petición.", "I asked him to wait for me at the door."),
      wo("Admitió que no sabía la respuesta.", "Admitir.", "He admitted he didn't know the answer."),
      wo("Me advirtió que el museo cerraba temprano.", "Advertir.", "She warned me the museum closed early."),
      toEs("He told me he had lost his job.", "Me dijo que había perdido el trabajo.", "En estilo indirecto, el pasado pasa a pluscuamperfecto: «había perdido».", ["Me contó que había perdido el trabajo.", "Me dijo que había perdido su trabajo."]),
    ]
  ),
  L(
    "buenas-noches-elena",
    "b2d-rep-ser-estar-pares",
    "Pares mínimos: ser o estar cambia el significado",
    "Repaso espaciado: listo, rico, malo, aburrido, verde, orgulloso.",
    "5 min",
    [
      sec(
        "Dos significados",
        "Es listo (inteligente) / Está listo (preparado). Es orgulloso (arrogante) / Está orgulloso (siente orgullo). Es verde (color) / Está verde (inmaduro).",
        [
          ["Estoy orgullosa de ti.", "I'm proud of you."],
        ],
        [
          fb("Par.", "Mi padre ___ muy orgulloso de mí.", "está", "«Estar orgulloso» es sentir orgullo en un momento; «ser orgulloso» es un rasgo de carácter."),
        ]
      ),
    ],
    [
      fb("Par.", "Tu jefe ___ muy orgulloso; nunca pide perdón.", "es", "«Ser orgulloso» describe el carácter (no pide perdón); «estar orgulloso» es sentir orgullo."),
      fb("Par.", "¿___ listos? El taxi está abajo.", "Estáis", "«Estar listo» significa estar preparado; «ser listo» significa ser inteligente."),
      fb("Par.", "Tu hija ___ muy lista.", "es", "«Ser listo» significa ser inteligente; «estar listo» significa estar preparado."),
      fb("Par.", "Todavía ___ muy verde en este trabajo.", "estoy", "«Estar verde» significa ser inexperto o no estar maduro; «ser verde» es el color."),
      fb("Par.", "Mi coche ___ verde.", "es", "Con los colores se usa «ser»: «es verde»; «estar verde» significa inexperto."),
      fb("Par.", "El niño ___ malo; tiene gripe.", "está", "«Estar malo» significa estar enfermo; «ser malo» significa tener mala conducta."),
      toEs("I'm ready; let's go.", "Estoy listo; vámonos.", "«Estar listo» significa estar preparado; «ser listo» es ser inteligente.", ["Estoy lista; vámonos.", "Ya estoy listo, vamos."]),
    ]
  ),
  L(
    "buenas-noches-elena",
    "b2d-rep-verbos-cambio-corrige",
    "Corrige el párrafo: los cambios de Lucía",
    "Repaso espaciado: verbos de cambio mal elegidos.",
    "6 min",
    [
      sec(
        "El texto",
        "«Lucía se volvió enfermera en 2010. Con los años se ha puesto muy paciente. Su afición por la fotografía se hizo en su segundo trabajo.» Tres errores.",
        [
          ["Lucía se hizo enfermera en 2010.", "Lucía became a nurse in 2010."],
        ],
        [
          mc(
            "¿Qué falla en «se volvió enfermera»?",
            ["Profesión → hacerse.", "Falta un artículo.", "Debe ser ponerse.", "Nada."],
            0,
            "Una profesión se alcanza con hacerse: se hizo enfermera. Volverse es para cambios de carácter, ponerse para estados pasajeros y no falta ningún artículo."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Lucía se volvió enfermera en 2010.»", "Lucía se hizo enfermera en 2010.", "Para una profesión se usa «hacerse», no «volverse»: «se hizo enfermera»."),
      toEs("Corrige: «Con los años se ha puesto muy paciente.»", "Con los años se ha vuelto muy paciente.", "Para un cambio de carácter duradero se usa «volverse», no «ponerse»."),
      toEs("Corrige: «Su afición se hizo en su segundo trabajo.»", "Su afición se convirtió en su segundo trabajo.", "Para una transformación en otra cosa se usa «convertirse en» + sustantivo."),
      toEs("Corrige: «Se hizo rojo cuando lo vio.»", "Se puso rojo cuando lo vio.", "Para un cambio físico momentáneo se usa «ponerse»: «se puso rojo»."),
      ms(
        "¿Qué frases son correctas?",
        ["Se puso contenta.", "Se volvió loca de alegría.", "Se hizo triste.", "Se puso en princesa."],
        [0, 1],
        "«Se puso contenta» y «Se volvió loca de alegría» usan bien ponerse y volverse. «Se hizo triste» no se dice (tristeza pasajera → se puso triste) y «Se puso en princesa» mezcla ponerse con «en» (sería se convirtió en)."
      ),
    ]
  ),
  L(
    "el-fallo-invisible",
    "b2d-rep-conectores-dictado",
    "Dictado: conectores formales",
    "Repaso espaciado: no obstante, por consiguiente, asimismo, dado que.",
    "5 min",
    [
      sec(
        "Registro formal",
        "No obstante = sin embargo. Por consiguiente = por lo tanto. Asimismo = además. Dado que = ya que.",
        [
          ["Dado que no hay quórum, se aplaza la votación.", "Since there's no quorum, the vote is postponed."],
        ],
        [
          wo("Dado que no hay quórum, se aplaza la votación.", "Causa formal.", "Since there's no quorum, the vote is postponed."),
        ]
      ),
    ],
    [
      wo("El proyecto es viable; no obstante, es caro.", "Contraste formal.", "The project is viable; nevertheless, it's expensive."),
      wo("Faltan fondos; por consiguiente, se retrasará.", "Consecuencia formal.", "Funds are lacking; consequently, it will be delayed."),
      wo("Asimismo, se crearán cien empleos.", "Adición formal.", "Likewise, a hundred jobs will be created."),
      wo("A pesar de las críticas, el plan siguió adelante.", "Concesión.", "Despite the criticism, the plan went ahead."),
      toEs("Nevertheless, the results are positive.", "No obstante, los resultados son positivos.", "«No obstante» es un conector de contraste formal, como «sin embargo».", ["Sin embargo, los resultados son positivos."]),
    ]
  ),
  L(
    "las-palabras-exactas",
    "b2d-rep-cuyo-cuento",
    "Cuento con huecos: el pueblo de la sierra",
    "Repaso espaciado: cuyo y el cual en una descripción.",
    "6 min",
    [
      sec(
        "El pueblo",
        "«Es un pueblo cuyas casas son de piedra, en el cual viven apenas cien personas. La iglesia, cuyo campanario se ve desde lejos, es del siglo XII. El río junto al cual se levanta el molino baja de la montaña.»",
        [
          ["Es un pueblo cuyas casas son de piedra.", "It's a village whose houses are made of stone."],
        ],
        [
          fb("Completa.", "Es un pueblo ___ casas son de piedra.", "cuyas", "«Cuyo» concuerda con lo poseído: «casas» es femenino plural."),
        ]
      ),
    ],
    [
      fb("Completa.", "…en ___ viven apenas cien personas.", "el cual", "Tras preposición, «el cual» concuerda con el antecedente «pueblo»."),
      fb("Completa.", "La iglesia, ___ campanario se ve desde lejos…", "cuyo", "«Cuyo» concuerda con lo poseído: «campanario» es masculino singular."),
      fb("Completa.", "El río junto al ___ se levanta el molino…", "cual", "«Al» ya contiene el artículo «el», así que solo falta «cual»: «junto al cual»."),
      fb("Completa.", "El alcalde, ___ familia vive aquí desde hace siglos, nos recibió.", "cuya", "«Cuyo» concuerda con lo poseído: «familia» es femenino singular."),
      fb("Completa.", "Las fiestas, durante ___ el pueblo se llena, son en agosto.", "las cuales", "Tras preposición, «el cual» concuerda con el antecedente: «fiestas» → «las cuales»."),
      toEs("It's a village whose streets are very narrow.", "Es un pueblo cuyas calles son muy estrechas.", "«Cuyo» concuerda con lo poseído («calles»), no con «un pueblo»."),
    ]
  ),
  L(
    "detras-del-mostrador",
    "b2d-rep-mezcla-consejos",
    "Práctica mezclada: el consultorio",
    "Repaso espaciado: consejos con condicional, subjuntivo y conectores.",
    "7 min",
    [
      sec(
        "La carta y la respuesta",
        "Carta: «Mi socio quiere que invirtamos todo en un proyecto arriesgado.» Respuesta: «Yo en su lugar, no invertiría todo. Le sugiero que hable con un asesor antes de que sea tarde. Si hubiera un contrato claro, sería distinto. No obstante, la decisión es suya.»",
        [
          ["Le sugiero que hable con un asesor antes de que sea tarde.", "I suggest you talk to an adviser before it's too late."],
        ],
        [
          fb("Completa.", "Mi socio quiere que ___ todo. (invertir, nosotros)", "invirtamos", "Influencia; e → i."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo en su lugar, no ___ todo. (invertir)", "invertiría", "Condicional."),
      fb("Completa.", "Le sugiero que ___ con un asesor. (hablar)", "hable", "Sugerir que."),
      fb("Completa.", "…antes de que ___ tarde. (ser)", "sea", "Antes de que."),
      fb("Completa.", "Si ___ un contrato claro, sería distinto. (haber)", "hubiera", "Irreal presente."),
      fb("Completa.", "___, la decisión es suya.", "No obstante", "«No obstante» marca contraste en registro formal, como «sin embargo»."),
      toEs("If I were you, I would ask for advice.", "Yo en su lugar, pediría consejo.", "«Yo en su lugar» + condicional es otra forma de aconsejar, equivalente a «si yo fuera usted».", ["Si yo fuera usted, pediría consejo.", "Yo que tú, pediría consejo."]),
    ]
  ),
  L(
    "la-lista-de-espera",
    "b2d-rep-mezcla-traduccion",
    "Práctica mezclada: relevo de traducción",
    "Repaso espaciado: traduce frases que mezclan estructuras de B2.",
    "6 min",
    [
      sec(
        "Traducir sin calcar",
        "Piensa en la estructura española antes de traducir: whose → cuyo; as if → como si; I wish → ojalá; when + futuro → cuando + subjuntivo.",
        [
          ["Ojalá lo hubiera sabido.", "I wish I had known."],
        ],
        [
          toEs("I wish I had known.", "Ojalá lo hubiera sabido.", "«Ojalá» + pluscuamperfecto de subjuntivo expresa lamento por algo pasado.", ["Ojalá lo hubiese sabido."]),
        ]
      ),
    ],
    [
      toEs("Call me when you get home.", "Llámame cuando llegues a casa.", "«Cuando» + acción futura exige subjuntivo: «llegues».", ["Llámame en cuanto llegues a casa."]),
      toEs("He acts as if he were the boss.", "Actúa como si fuera el jefe.", "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: «fuera».", ["Se comporta como si fuera el jefe.", "Actúa como si fuese el jefe."]),
      toEs("It's the man whose dog bit me.", "Es el hombre cuyo perro me mordió.", "«Cuyo» concuerda con lo poseído («perro»), no con el poseedor."),
      toEs("She told me to wait.", "Me dijo que esperara.", "Una orden en estilo indirecto en pasado va en imperfecto de subjuntivo: «esperara».", ["Me dijo que esperase.", "Me pidió que esperara."]),
      toEs("I'm looking for a job that I like.", "Busco un trabajo que me guste.", "El trabajo buscado aún no es concreto, así que la relativa va en subjuntivo: «guste»."),
      toEs("If I had time, I'd learn to paint.", "Si tuviera tiempo, aprendería a pintar.", "Condición irreal presente: «si tuviera» + condicional «aprendería».", ["Si tuviese tiempo, aprendería a pintar."]),
    ]
  ),
  L(
    "el-nombre-equivocado",
    "b2d-rep-relativas-corrige-final",
    "Corrige el párrafo: la búsqueda de piso",
    "Repaso espaciado: modo en las relativas, en presente y en pasado.",
    "6 min",
    [
      sec(
        "El mensaje",
        "«Busco un piso que tiene dos habitaciones. El año pasado quería uno que esté cerca del trabajo, pero no había ninguno que me gustaba. Ahora vivo en uno que sea muy ruidoso.» Cuatro errores.",
        [
          ["Busco un piso que tenga dos habitaciones.", "I'm looking for a flat with two bedrooms."],
        ],
        [
          mc(
            "¿Qué falla en «vivo en uno que sea muy ruidoso»?",
            ["Es un piso conocido: indicativo (es).", "Falta un artículo.", "Debe ser «fuera».", "Nada."],
            0,
            "Si ya vives en el piso, es conocido: indicativo, «que es muy ruidoso». No falta artículo, «fuera» no encaja y sí hay error."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Busco un piso que tiene dos habitaciones.»", "Busco un piso que tenga dos habitaciones.", "El piso buscado aún no es concreto, así que la relativa va en subjuntivo: «tenga»."),
      toEs("Corrige: «Quería uno que esté cerca del trabajo.»", "Quería uno que estuviera cerca del trabajo.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «estuviera»."),
      toEs("Corrige: «No había ninguno que me gustaba.»", "No había ninguno que me gustara.", "Con un antecedente negado («ninguno»), la relativa va en subjuntivo: «gustara»."),
      toEs("Corrige: «Ahora vivo en uno que sea muy ruidoso.»", "Ahora vivo en uno que es muy ruidoso.", "El piso donde vivo es concreto y conocido, así que la relativa va en indicativo: «es»."),
      ms(
        "¿Qué frases son correctas?",
        ["Quiero un piso que tenga luz.", "Tengo un piso que tiene luz.", "Tengo un piso que tenga luz.", "Quería un piso que tenga luz."],
        [0, 1],
        "Algo buscado → subjuntivo (quiero un piso que tenga); algo que ya tienes → indicativo (que tiene). «Tengo un piso que tenga» usa subjuntivo con algo conocido, y «Quería… que tenga» rompe la secuencia de tiempos."
      ),
    ]
  ),
  L(
    "el-nombre-equivocado",
    "b2d-rep-adverbiales-mezcla-final",
    "Práctica mezclada: el viaje de fin de curso",
    "Repaso espaciado: todas las conjunciones adverbiales en un texto.",
    "7 min",
    [
      sec(
        "Las instrucciones del profesor",
        "«Cuando lleguemos al hotel, dejad las maletas. No salgáis sin que yo lo sepa. Os doy mi número para que me llaméis si hay problemas. Aunque llueva, haremos la excursión. Volveremos antes de que anochezca.»",
        [
          ["No salgáis sin que yo lo sepa.", "Don't go out without me knowing."],
        ],
        [
          fb("Completa.", "Cuando ___ al hotel, dejad las maletas. (llegar, nosotros)", "lleguemos", "Futuro."),
        ]
      ),
    ],
    [
      fb("Completa.", "No salgáis sin que yo lo ___. (saber)", "sepa", "Sin que."),
      fb("Completa.", "Os doy mi número para que me ___. (llamar)", "llaméis", "Para que."),
      fb("Completa.", "Aunque ___, haremos la excursión. (llover)", "llueva", "Hipótesis."),
      fb("Completa.", "Volveremos antes de que ___. (anochecer)", "anochezca", "Antes de que."),
      fb("Completa.", "El año pasado, cuando ___ al hotel, estaba cerrado. (llegar, nosotros)", "llegamos", "Pasado."),
      toEs("We'll leave as soon as everyone is ready.", "Saldremos en cuanto todos estén listos.", "«En cuanto» + acción futura exige subjuntivo: «estén».", ["Nos iremos en cuanto todos estén listos.", "Saldremos tan pronto como todos estén listos."]),
    ]
  ),
  L(
    "la-firma-pendiente",
    "b2d-rep-imperfecto-dictado",
    "Dictado: el imperfecto de subjuntivo",
    "Repaso espaciado: frases con secuencia en pasado y condicional.",
    "5 min",
    [
      sec(
        "Escucha la forma -ra",
        "Principal en pasado o condicional → imperfecto de subjuntivo en la subordinada.",
        [
          ["Nos pidieron que no hiciéramos fotos.", "They asked us not to take photos."],
        ],
        [
          wo("Nos pidieron que no hiciéramos fotos.", "Pasado.", "They asked us not to take photos."),
        ]
      ),
    ],
    [
      wo("Me sorprendió que no hubiera nadie.", "Emoción en pasado.", "It surprised me that there was nobody."),
      wo("Sería mejor que lo dejáramos para mañana.", "Condicional.", "It would be better if we left it for tomorrow."),
      wo("Buscaba a alguien que hablara ruso.", "Relativa en pasado.", "I was looking for someone who spoke Russian."),
      wo("Le dije que se diera prisa.", "Orden indirecta.", "I told him to hurry up."),
      toEs("They wanted me to stay.", "Querían que me quedara.", "«Querer que» en pasado exige imperfecto de subjuntivo: «me quedara».", ["Querían que me quedase."]),
    ]
  ),
  L(
    "las-cuentas-pendientes",
    "b2d-rep-si-ronda-final",
    "Ronda rápida: todas las condicionales",
    "Repaso espaciado: real, irreal, pasada y mixta.",
    "5 min",
    [
      sec(
        "Cuatro tipos",
        "Real: si + presente. Irreal presente: si + imperfecto de subjuntivo. Irreal pasado: si + pluscuamperfecto. Mixta: si + pluscuamperfecto, condicional simple.",
        [
          ["Si hubiera nacido en Italia, hablaría italiano.", "If I had been born in Italy, I'd speak Italian."],
        ],
        [
          fb("Rápido.", "Si ___ en Italia, hablaría italiano. (nacer, yo)", "hubiera nacido", "Clave: Mixta."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si ___ italiano, trabajaría en Roma. (hablar, yo)", "hablara", "Irreal presente."),
      fb("Rápido.", "Si ___ italiano, iré a Roma. (aprender, yo)", "aprendo", "Clave: Real."),
      fb("Rápido.", "Si ___ italiano, habría trabajado en Roma. (hablar, yo)", "hubiera hablado", "Irreal pasado."),
      fb("Rápido.", "Si hubieras venido, te ___. (gustar)", "habría gustado", "Irreal pasado."),
      fb("Rápido.", "Si vinieras, te ___. (gustar)", "gustaría", "Irreal presente."),
      fb("Rápido.", "Si vienes, te ___. (gustar, futuro)", "gustará", "Clave: Real."),
      mc(
        "«Si no ___ tanto ayer, hoy no me dolería la cabeza.»",
        ["hubiera bebido", "bebiera", "bebo", "habría bebido"],
        0,
        "Condicional mixto: condición pasada (ayer) con pluscuamperfecto de subjuntivo, y consecuencia presente con condicional. «Bebiera» se refiere al presente, «bebo» es real y «habría bebido» no va tras si."
      ),
    ]
  ),
  L(
    "cartas-para-despues",
    "b2d-rep-condicional-perfecto-elige",
    "Elige y explica: lamento, reproche o hipótesis",
    "Repaso espaciado: ojalá hubiera, deberías haber, si hubiera… habría.",
    "6 min",
    [
      sec(
        "Tres miradas al pasado",
        "Lamento propio: Ojalá hubiera estudiado más. Reproche: Deberías haber estudiado más. Hipótesis: Si hubiera estudiado más, habría aprobado.",
        [
          ["Deberías haber estudiado más.", "You should have studied more."],
        ],
        [
          mc(
            "Tu amigo suspendió. Le reprochas:",
            ["Deberías haber estudiado más.", "Ojalá hubiera estudiado más.", "Si estudias, apruebas.", "Estudiarías más."],
            0,
            "Un reproche a otra persona sobre el pasado: deberías haber + participio. «Ojalá hubiera estudiado» es un lamento propio, «Si estudias, apruebas» es una regla general y «Estudiarías más» no reprocha."
          ),
        ]
      ),
    ],
    [
      mc("Tú suspendiste y lo lamentas:", ["Ojalá hubiera estudiado más.", "Deberías haber estudiado.", "Habrías estudiado.", "Si estudias, apruebas."], 0, "Un lamento sobre tu propio pasado: ojalá + pluscuamperfecto de subjuntivo. «Deberías haber estudiado» es un reproche a otro, «Habrías estudiado» no expresa lamento y «Si estudias, apruebas» es una regla general."),
      mc("Imaginas otro resultado:", ["Si hubiera estudiado más, habría aprobado.", "Ojalá estudie.", "Deberías estudiar.", "Estudio más."], 0, "Imaginar otro resultado pasado: si + pluscuamperfecto de subjuntivo + condicional perfecto. «Ojalá estudie» es un deseo futuro, «Deberías estudiar» un consejo y «Estudio más» un hecho presente."),
      fb("Completa.", "Ojalá ___ caso a mi madre. (hacer, yo)", "hubiera hecho", "Lamento."),
      fb("Completa.", "Deberías ___ antes. (avisar, tú)", "haber avisado", "Reproche."),
      fb("Completa.", "Si me hubieras avisado, ___ antes. (venir, yo)", "habría venido", "Hipótesis."),
      toEs("You could have told me.", "Me lo podrías haber dicho.", "«Podrías haber» + participio expresa un reproche sobre el pasado.", ["Podrías habérmelo dicho.", "Me lo habrías podido decir."]),
    ]
  ),
  L(
    "la-llave-que-no-abria-nada",
    "b2d-rep-estilo-indirecto-mezcla",
    "Práctica mezclada: la llamada del médico",
    "Repaso espaciado: afirmaciones, preguntas y órdenes transmitidas.",
    "6 min",
    [
      sec(
        "Lo que dijo el médico",
        "«Los análisis han salido bien. ¿Sigue tomando la medicación? Tómela un mes más y vuelva en junio. No se preocupe.»",
        [
          ["Me dijo que los análisis habían salido bien.", "He told me the tests had come back fine."],
        ],
        [
          fb("Cuenta.", "Me dijo que los análisis ___ bien. (salir)", "habían salido", "Perfecto → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Cuenta.", "Me preguntó si ___ tomando la medicación. (seguir)", "seguía", "Presente → imperfecto."),
      fb("Cuenta.", "Me dijo que la ___ un mes más. (tomar)", "tomara", "Clave: Orden."),
      fb("Cuenta.", "…y que ___ en junio. (volver)", "volviera", "Clave: Orden."),
      fb("Cuenta.", "Me pidió que no me ___. (preocupar)", "preocupara", "Orden negativa."),
      fb("Cuenta.", "Me aseguró que todo ___ bien. (ir, futuro → condicional)", "iría", "Futuro → condicional."),
      toEs("He told me not to worry.", "Me dijo que no me preocupara.", "Una orden en estilo indirecto en pasado va en imperfecto de subjuntivo: «no me preocupara».", ["Me dijo que no me preocupase."]),
    ]
  ),
  L(
    "las-fotos-que-no-recordaba",
    "b2d-rep-ser-estar-dictado-final",
    "Dictado: ser, estar y haber en contexto",
    "Repaso espaciado: frases con los usos más difíciles.",
    "5 min",
    [
      sec(
        "Atención",
        "Evento con ser; resultado con estar; existencia con haber (siempre singular).",
        [
          ["La presentación es en el salón de actos.", "The presentation is in the assembly hall."],
        ],
        [
          wo("La presentación es en el salón de actos.", "Evento.", "The presentation is in the assembly hall."),
        ]
      ),
    ],
    [
      wo("Hubo muchos problemas con el sonido.", "Haber singular.", "There were many problems with the sound."),
      wo("Las sillas ya están colocadas.", "Resultado.", "The chairs are already set out."),
      wo("El ponente es muy listo, pero hoy está nervioso.", "Carácter / estado.", "The speaker is very clever, but today he's nervous."),
      wo("¿Dónde está la sala de prensa?", "Localización.", "Where is the press room?"),
      toEs("The concert is in the cathedral.", "El concierto es en la catedral.", "Para decir dónde tiene lugar un evento se usa «ser»: «El concierto es en la catedral»."),
    ]
  ),
  L(
    "grabaciones-para-marina",
    "b2d-rep-verbos-cambio-habla",
    "Habla de ti: alguien que ha cambiado mucho",
    "Repaso espaciado: describe los cambios de una persona que conoces.",
    "6 min",
    [
      sec(
        "Su historia",
        "Mi primo era muy tímido; se ponía rojo por todo. Se hizo profesor y se volvió mucho más abierto. Llegó a ser director del colegio, que se ha convertido en uno de los mejores de la ciudad.",
        [
          ["Se volvió mucho más abierto.", "He became much more outgoing."],
        ],
        [
          fb("Su historia.", "De niño se ___ rojo por todo. (ponerse, imperfecto)", "ponía", "Reacción."),
        ]
      ),
    ],
    [
      fb("Su historia.", "Se ___ profesor. (hacerse, indefinido)", "hizo", "Profesión."),
      fb("Su historia.", "Se ___ mucho más abierto. (volverse, indefinido)", "volvió", "Carácter."),
      fb("Su historia.", "___ director del colegio. (llegar a ser, indefinido)", "Llegó a ser", "Clave: Logro."),
      fb("Su historia.", "El colegio se ha ___ en uno de los mejores. (convertir)", "convertido", "Transformación."),
      fb("Su historia.", "Cuando le dieron el premio, se ___ a llorar. (poner, indefinido)", "puso", "Ponerse a + infinitivo."),
      toEs("She has become more confident.", "Se ha vuelto más segura de sí misma.", "«Volverse» + adjetivo expresa un cambio de carácter gradual y duradero.", ["Se ha vuelto más segura.", "Se ha hecho más segura de sí misma."]),
    ]
  ),
  L(
    "grabaciones-para-marina",
    "b2d-rep-conectores-corrige-final",
    "Corrige el párrafo: el ensayo final",
    "Repaso espaciado: conectores mal usados en un ensayo.",
    "6 min",
    [
      sec(
        "El ensayo",
        "«A pesar de que los problemas, la ciudad ha mejorado. Sin embargo que hay más tráfico, hay más zonas verdes. Por lo tanto que el balance es positivo.» Tres errores.",
        [
          ["A pesar de los problemas, la ciudad ha mejorado.", "Despite the problems, the city has improved."],
        ],
        [
          mc(
            "¿Qué falla en «por lo tanto que el balance es positivo»?",
            ["Sobra «que».", "Falta la tilde.", "Debe ser «sin embargo».", "Nada."],
            0,
            "«Por lo tanto» es un conector y va seguido de coma, no de «que»: Por lo tanto, el balance es positivo. No falta tilde y «sin embargo» cambiaría el sentido."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «A pesar de que los problemas, la ciudad ha mejorado.»", "A pesar de los problemas, la ciudad ha mejorado.", "«A pesar de» + sustantivo va sin «que»; «a pesar de que» necesita un verbo conjugado."),
      toEs("Corrige: «Sin embargo que hay más tráfico, hay más zonas verdes.»", "Aunque hay más tráfico, hay más zonas verdes.", "«Sin embargo» no une dos oraciones con «que»; para una concesión en una sola oración se usa «aunque».", ["A pesar de que hay más tráfico, hay más zonas verdes."]),
      toEs("Corrige: «Por lo tanto que el balance es positivo.»", "Por lo tanto, el balance es positivo.", "«Por lo tanto» es un conector independiente: va seguido de coma, no de «que»."),
      toEs("Corrige: «Ya que por eso llovía, nos quedamos.»", "Ya que llovía, nos quedamos.", "Basta un solo conector causal: «ya que» ya expresa la causa, así que «por eso» sobra."),
      ms(
        "¿Qué frases están bien?",
        ["Dado que es tarde, me voy.", "Es tarde; por lo tanto, me voy.", "Por lo tanto que es tarde, me voy.", "Sin embargo es tarde, me voy."],
        [0, 1],
        "«Dado que» + causa y «por lo tanto» + consecuencia están bien usados. «Por lo tanto que» añade un «que» que sobra, y «Sin embargo es tarde, me voy» usa un conector de contraste para una causa."
      ),
    ]
  ),
  L(
    "el-chico-del-otro-lado-de-la-pantalla",
    "b2d-rep-enfasis-habla",
    "Habla de ti: lo que más te gusta de tu ciudad",
    "Repaso espaciado: hendidas y anteposición para destacar.",
    "6 min",
    [
      sec(
        "Tu ciudad",
        "Lo que más me gusta de mi ciudad es el mercado. Fue allí donde aprendí a cocinar. El pescado lo compro siempre en el mismo puesto. No te imaginas lo fresco que está.",
        [
          ["Fue allí donde aprendí a cocinar.", "It was there that I learned to cook."],
        ],
        [
          fb("Tu ciudad.", "___ más me gusta de mi ciudad es el mercado.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que más me gusta es…»."),
        ]
      ),
    ],
    [
      fb("Tu ciudad.", "Fue allí ___ aprendí a cocinar.", "donde", "En las hendidas de lugar se usa «donde»: «Fue allí donde…»."),
      fb("Tu ciudad.", "El pescado ___ compro siempre en el mismo puesto.", "lo", "El complemento directo antepuesto se retoma con pronombre: «el pescado» → «lo»."),
      fb("Tu ciudad.", "No te imaginas lo ___ que está. (fresco)", "fresco", "Lo + adjetivo + que."),
      fb("Tu ciudad.", "Fue mi abuelo ___ me llevó allí por primera vez.", "quien", "En las hendidas de persona se usa «quien» (o «el que»): «Fue mi abuelo quien…»."),
      fb("Tu ciudad.", "Las flores ___ venden en la entrada.", "las", "El complemento directo antepuesto se retoma con pronombre: «las flores» → «las»."),
      toEs("What I miss most is the sea.", "Lo que más echo de menos es el mar.", "Para destacar una cosa se usa «lo que»: «Lo que más echo de menos es…».", ["Lo que más extraño es el mar."]),
    ]
  ),
  L(
    "el-verano-del-silbato",
    "b2d-rep-cuyo-dictado-final",
    "Práctica de patrones: cuyo en definiciones",
    "Repaso espaciado: define personas y cosas con cuyo.",
    "5 min",
    [
      sec(
        "Definir con cuyo",
        "Un huérfano es un niño cuyos padres han muerto. Un viudo es un hombre cuya mujer ha muerto. Un mecenas es alguien cuyo dinero apoya el arte.",
        [
          ["Un huérfano es un niño cuyos padres han muerto.", "An orphan is a child whose parents have died."],
        ],
        [
          fb("Define.", "Un viudo es un hombre ___ mujer ha muerto.", "cuya", "«Cuyo» concuerda con lo poseído, no con el poseedor: «mujer» → «cuya»."),
        ]
      ),
    ],
    [
      fb("Define.", "Un huérfano es un niño ___ padres han muerto.", "cuyos", "«Cuyo» concuerda con lo poseído, no con el poseedor: «padres» → «cuyos»."),
      fb("Define.", "Un mecenas es alguien ___ dinero apoya el arte.", "cuyo", "«Cuyo» concuerda con lo poseído, no con el poseedor: «dinero» → «cuyo»."),
      fb("Define.", "Una isla es una tierra ___ costas rodea el mar.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «costas» → «cuyas»."),
      fb("Define.", "Un bilingüe es una persona ___ lenguas maternas son dos.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «lenguas» → «cuyas»."),
      fb("Define.", "Un anfitrión es alguien en ___ casa se celebra algo.", "cuya", "«Cuyo» puede ir tras preposición y concuerda con lo poseído: «casa» → «cuya»."),
      toEs("A widow is a woman whose husband has died.", "Una viuda es una mujer cuyo marido ha muerto.", "«Cuyo» concuerda con lo poseído («marido»), no con «una mujer».", ["Una viuda es una mujer cuyo esposo ha muerto.", "Una viuda es una mujer cuyo marido ha fallecido."]),
    ]
  ),
  L(
    "cien-palabras-nuevas",
    "b2d-rep-mezcla-opinion",
    "Práctica mezclada: ensayo de opinión",
    "Repaso espaciado: argumenta con todas las herramientas de B2.",
    "7 min",
    [
      sec(
        "El ensayo",
        "«Es fundamental que las ciudades reduzcan el tráfico. Si hubiera más transporte público, la gente dejaría el coche. Sin embargo, no basta con que se construyan carriles bici. Lo que hace falta es un cambio de mentalidad, cuyo efecto tardará años.»",
        [
          ["Lo que hace falta es un cambio de mentalidad.", "What's needed is a change of mentality."],
        ],
        [
          fb("Completa.", "Es fundamental que las ciudades ___ el tráfico. (reducir)", "reduzcan", "Valoración."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ más transporte público… (haber)", "hubiera", "Irreal presente."),
      fb("Completa.", "…la gente ___ el coche. (dejar)", "dejaría", "Condicional."),
      fb("Completa.", "___, no basta con que se construyan carriles bici.", "Sin embargo", "«Sin embargo» introduce una objeción a lo dicho antes."),
      fb("Completa.", "…no basta con que se ___ carriles bici. (construir)", "construyan", "Basta con que + subjuntivo."),
      fb("Completa.", "___ hace falta es un cambio de mentalidad.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que hace falta es…»."),
      fb("Completa.", "…___ efecto tardará años.", "cuyo", "«Cuyo» concuerda con lo poseído: «efecto» es masculino singular."),
      toEs("It's essential that we act now.", "Es fundamental que actuemos ya.", "Las valoraciones como «es fundamental que» exigen subjuntivo: «actuemos».", ["Es esencial que actuemos ahora.", "Es fundamental que actuemos ahora."]),
    ]
  ),
  L(
    "vidas-extra",
    "b2d-rep-mezcla-ronda-final",
    "Ronda rápida: B2 en diez segundos",
    "Repaso espaciado: una pregunta de cada tema del nivel.",
    "5 min",
    [
      sec(
        "Todo junto",
        "Relativas, adverbiales, secuencia, si, condicional perfecto, estilo indirecto, ser/estar/haber, verbos de cambio, conectores, énfasis y cuyo.",
        [
          ["Fue ella quien me lo dijo.", "It was her who told me."],
        ],
        [
          fb("Rápido.", "Busco a alguien que ___ chino. (hablar)", "hable", "Relativa."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Avísame en cuanto ___. (saber, tú)", "sepas", "Adverbial."),
      fb("Rápido.", "Me pidió que ___ puntual. (ser, yo)", "fuera", "Secuencia."),
      fb("Rápido.", "Si ___ rico, viajaría. (ser, yo)", "fuera", "Si irreal."),
      fb("Rápido.", "Si me lo hubieras dicho, ___. (venir, yo)", "habría venido", "Condicional perfecto."),
      fb("Rápido.", "Dijo que ___ al día siguiente. (volver)", "volvería", "Estilo indirecto."),
      fb("Rápido.", "La boda ___ en un castillo.", "es", "Para decir dónde o cuándo tiene lugar un evento se usa «ser»: «La boda es en un castillo»."),
      fb("Rápido.", "Se ___ médica en 2015. (hacerse, indefinido)", "hizo", "Verbo de cambio."),
      fb("Rápido.", "Es la escritora ___ novelas leí.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «novelas» → «cuyas»."),
    ]
  ),
  L(
    "el-examen-que-no-hice",
    "b2d-rep-mezcla-circuito-final",
    "Circuito acumulativo: examen final de B2",
    "Repaso espaciado: el último circuito con todos los temas del nivel.",
    "8 min",
    [
      sec(
        "Las estaciones",
        "1) Subjuntivo en relativas y adverbiales. 2) Imperfecto de subjuntivo y secuencia. 3) Condicionales. 4) Estilo indirecto. 5) Ser, estar, haber y verbos de cambio. 6) Conectores, énfasis y cuyo.",
        [
          ["Si lo hubiera sabido, te lo habría dicho.", "If I had known, I would have told you."],
        ],
        [
          fb("Estación 1.", "No conozco a nadie que ___ tan bien como ella. (cantar)", "cante", "Relativa inexistente."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Te llamaré antes de que ___. (salir, yo)", "salga", "Antes de que."),
      fb("Estación 2.", "Era imposible que lo ___. (saber, ellos)", "supieran", "Secuencia."),
      fb("Estación 3.", "Si lo ___, te lo habría dicho. (saber, yo)", "hubiera sabido", "Irreal pasado."),
      fb("Estación 4.", "Me preguntó si ___ cenado. (haber, yo)", "había", "Pluscuamperfecto."),
      fb("Estación 5.", "Con los años se ha ___ muy sabia. (volverse)", "vuelto", "Verbo de cambio."),
      fb("Estación 5.", "___ mucha gente en la manifestación. (haber, indefinido)", "Hubo", "Haber singular."),
      fb("Estación 6.", "___ de todo, seguimos adelante.", "A pesar", "«A pesar de todo» es una concesión fija: las dificultades no impiden seguir."),
      fb("Estación 6.", "Es un país ___ historia me fascina.", "cuya", "«Cuyo» concuerda con lo poseído, no con el poseedor: «historia» → «cuya»."),
    ]
  ),
];
