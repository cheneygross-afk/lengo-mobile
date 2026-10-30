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
const { mc, ms, fb, toEs, wo, mt, sec } = authoring("es");
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
        [
          "Recuerda la regla: si buscas, necesitas o quieres algo o a alguien que todavía no conoces, la descripción (que…, donde…) va en subjuntivo. Si ya existe y lo conoces, va en indicativo: Busco un piso que tenga terraza / Tengo un piso que tiene terraza.",
          "¿Por qué? Lo que buscas solo existe como idea: describes las condiciones que debe cumplir, no una cosa real. Dos detalles del marco: con personas desconocidas la a personal es opcional (Busco un médico / Busco a alguien), pero con alguien y nadie siempre va: «Busco a alguien que…». Y los verbos irregulares mantienen su raíz de yo: conozco → conozca, quepo → quepa, hago → haga.",
        ],
        [
          ["Busco un compañero de piso que no fume.", "I'm looking for a flatmate who doesn't smoke. (cualquier persona que cumpla eso)"],
          ["Necesitamos a alguien que hable chino.", "We need someone who speaks Chinese. (a personal delante de alguien)"],
          ["Quiero un barrio donde los niños puedan jugar en la calle.", "I want a neighbourhood where kids can play in the street. (donde + subjuntivo: lugar aún desconocido)"],
        ],
        [
          fb("Completa con el verbo en la forma correcta.", "Busco un piso que ___ cerca del metro. (estar)", "esté", "Todavía no tienes ese piso: antecedente desconocido → subjuntivo (esté). La ubicación va con estar, no con ser."),
          mc(
            "«Necesito un abrigo que me ___ del frío de verdad.»",
            ["proteja", "protege", "protegerá", "protegía"],
            0,
            "El abrigo aún no existe para ti: subjuntivo. Proteger cambia g → j delante de a (proteja) para conservar el sonido. «Protege», «protegerá» y «protegía» son indicativo y supondrían un abrigo concreto."
          ),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Busco a alguien que ___ arreglar lavadoras. (saber)", "sepa", "Persona desconocida → subjuntivo. Saber es irregular: sepa, no «sabe» (indicativo) ni «saba»."),
      fb("Mismo marco.", "Busco un coche que no ___ mucha gasolina. (gastar)", "gaste", "Coche aún sin elegir → subjuntivo. En los verbos en -ar, el subjuntivo cambia la a por e: gasta → gaste."),
      fb("Mismo marco.", "Necesito un portátil que ___ poco. (pesar)", "pese", "Portátil desconocido → subjuntivo: pesa → pese (-ar cambia a e)."),
      fb("Mismo marco.", "Necesitamos una niñera que ___ los fines de semana. (poder)", "pueda", "Niñera aún desconocida → subjuntivo. Poder diptonga o → ue en las formas acentuadas: pueda."),
      fb("Mismo marco.", "Quiero un trabajo que me ___ viajar. (permitir)", "permita", "Querer + trabajo que aún no tienes → subjuntivo. En -ir, la i/e del indicativo pasa a a: permite → permita."),
      fb("Mismo marco.", "Buscamos un restaurante que ___ abierto a medianoche. (estar)", "esté", "Restaurante desconocido → subjuntivo de estar: esté, con tilde. Estar abierto es un estado, por eso estar y no ser."),
      mc(
        "«Busco una academia que ___ clases por la tarde.»",
        ["dé", "da", "dará", "daba"],
        0,
        "La academia todavía no se ha encontrado (antecedente buscado), así que va en subjuntivo; dar → dé, con tilde para distinguirlo de la preposición de. «Da», «dará» y «daba» son indicativo y supondrían una academia concreta."
      ),
      toEs("I'm looking for a dentist who works on Saturdays.", "Busco un dentista que trabaje los sábados.", "Si aún no sabemos si ese dentista existe, la oración de relativo va en subjuntivo: «trabaje». «Trabaja» diría que ya tienes uno en mente.", ["Busco a un dentista que trabaje los sábados.", "Busco una dentista que trabaje los sábados.", "Busco a una dentista que trabaje los sábados."]),
      toEs("Tengo una vecina que habla tres idiomas.", "Necesito una vecina que hable tres idiomas.", "Con «necesito», la vecina ya no es una persona concreta sino una condición: subjuntivo (hable). Con «tengo» existía: indicativo (habla).", [], "Cambia «Tengo» por «Necesito»."),
      toEs("Busco a alguien que sabe cocinar para veinte personas.", "Busco a alguien que sepa cocinar para veinte personas.", "Buscas a alguien que todavía no conoces: subjuntivo (sepa). «Sabe» solo sería posible si hablaras de una persona concreta, y entonces no la buscarías.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: la misma frase cambia de modo según el antecedente sea real y conocido (indicativo) o desconocido / inexistente (subjuntivo). Tengo un vecino que toca el piano (existe). Busco un vecino que toque el piano (no sé si existe).",
          "El verbo principal suele dar la pista: tener, conocer, hay, vivir en, trabajar en (en afirmaciones) → indicativo; buscar, necesitar, querer → subjuntivo. Pero lo que decide es el significado, no el verbo: en preguntas y negaciones sobre la existencia (¿Conoces a alguien que…?, No hay…) va subjuntivo, mientras que un antecedente concreto sigue en indicativo aunque haya negación: No tengo el libro que me pediste.",
        ],
        [
          ["Conozco un bar que abre hasta las tres.", "I know a bar that's open until three. (lo conozco: indicativo)"],
          ["¿Conoces un bar que abra hasta las tres?", "Do you know a bar that's open until three? (no sé si existe: subjuntivo)"],
          ["No encuentro las gafas que compré ayer.", "I can't find the glasses I bought yesterday. (negación, pero gafas concretas: indicativo)"],
        ],
        [
          mc(
            "«Trabajo con una chica que ___ cinco idiomas.»",
            ["habla", "hable", "hablaba", "hablaría"],
            0,
            "La chica existe y la conozco: antecedente concreto → indicativo, habla. «Hable» sería para alguien buscado, «hablaba» cambia el tiempo y «hablaría» es condicional."
          ),
          fb("Completa con el verbo en la forma correcta.", "Nos hace falta un fontanero que ___ hoy mismo. (venir)", "venga", "«Nos hace falta» = necesitamos: el fontanero aún es desconocido → subjuntivo. Venir toma la raíz de vengo: venga."),
        ]
      ),
    ],
    [
      fb("Par A.", "Tengo un profesor que ___ muy bien. (explicar)", "explica", "Tener + un profesor concreto que ya conoces → indicativo (explica). «Explique» supondría que aún lo buscas."),
      fb("Par B.", "Quiero un profesor que ___ muy bien. (explicar)", "explique", "Querer + profesor aún desconocido → subjuntivo. Ojo a la ortografía: c → qu delante de e (explique) para mantener el sonido /k/."),
      fb("Par A.", "Vivo en un barrio que ___ muchos parques. (tener)", "tiene", "Es tu barrio real: antecedente conocido → indicativo (tiene)."),
      fb("Par B.", "Quiero vivir en un barrio que ___ muchos parques. (tener)", "tenga", "El barrio que quieres aún no existe para ti → subjuntivo (tenga, de tengo)."),
      fb("Par A.", "Hay una tienda aquí que ___ pan sin gluten. (vender)", "vende", "«Hay» en una afirmación presenta algo que existe → indicativo (vende)."),
      fb("Par B.", "¿Hay alguna tienda aquí que ___ pan sin gluten? (vender)", "venda", "En la pregunta no sabes si existe esa tienda → subjuntivo (venda). «Alguna» refuerza la duda."),
      toEs("I have a friend who lives in Tokyo.", "Tengo un amigo que vive en Tokio.", "Si el antecedente es una persona concreta y conocida, la relativa va en indicativo: «vive».", ["Tengo una amiga que vive en Tokio."]),
      toEs("Tengo un amigo que vive cerca de mí.", "Quiero un amigo que viva cerca de mí.", "Con «quiero» describes a alguien que todavía no conoces: subjuntivo (viva). Con «tengo» era una persona real: indicativo (vive).", [], "Cambia «Tengo» por «Quiero»."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-1",
    "b2d-circuito-no-hay-nadie-que",
    "Circuito: no hay nadie que…, no existe nada que…",
    "Cuando niegas que algo exista (no hay nadie que, no existe nada que, no conozco a nadie que), la relativa va en subjuntivo.",
    "6 min",
    [
      sec(
        "Lo que no existe",
        [
          "Recuerda la regla: si niegas la existencia del antecedente, la relativa va siempre en subjuntivo: No hay nadie que me entienda. No existe ningún método que funcione siempre. No conozco a nadie que cocine como mi abuela.",
          "¿Por qué? El indicativo afirma cosas sobre algo real; si acabas de decir que ese algo no existe, no hay nada que afirmar. Las señales son nadie, nada, ningún / ninguna, no hay, no existe, no conozco a nadie. Cuidado con la trampa: si nadie es el sujeto del verbo principal (Nadie sabe la respuesta), no hay relativa y el verbo va en indicativo.",
        ],
        [
          ["No hay nadie que me entienda.", "There's nobody who understands me. (nadie es el antecedente: subjuntivo)"],
          ["No tengo ningún libro que hable de eso.", "I don't have any book that talks about that. (ningún libro: no existe)"],
          ["Nadie entiende lo que pasa.", "Nobody understands what's going on. (nadie es el sujeto, no hay relativa: indicativo)"],
        ],
        [
          fb("Estación 1.", "No hay nadie en mi familia que ___ nadar. (saber)", "sepa", "«No hay nadie que» niega que exista esa persona → subjuntivo irregular de saber: sepa. «Sabe» afirmaría que alguien sabe."),
          mc(
            "¿Qué frase es correcta?",
            ["No existe ninguna app que te ayude a dormir mejor.", "No existe ninguna app que te ayuda a dormir mejor.", "Mi hermana tiene una app que le ayude a dormir.", "Nadie duerma bien con el móvil en la cama."],
            0,
            "«No existe ninguna app que…» niega la existencia → subjuntivo (ayude); por eso la segunda falla. En la tercera la app existe (ayuda, indicativo), y en la cuarta nadie es el sujeto, sin relativa: duerme."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1.", "No hay ningún restaurante en el pueblo que ___ los lunes. (abrir)", "abra", "«Ningún restaurante» niega la existencia → subjuntivo (abra). «Abre» supondría que hay uno."),
      fb("Estación 1.", "No tengo ningún amigo que ___ en el extranjero. (vivir)", "viva", "«No tengo ningún amigo que…»: ese amigo no existe → subjuntivo (viva)."),
      fb("Estación 2.", "No existe ninguna dieta que ___ milagros. (hacer)", "haga", "«No existe ninguna…» → subjuntivo. Hacer toma la raíz de hago: haga."),
      fb("Estación 2.", "No conozco a nadie que ___ tan paciente como tú. (ser)", "sea", "«No conozco a nadie que…» → subjuntivo irregular de ser: sea, no «es»."),
      fb("Estación 3.", "Aquí no hay nada que me ___. (gustar)", "guste", "«No hay nada que…» → subjuntivo (guste). Con gustar, el sujeto es «nada», por eso singular."),
      fb("Estación 3.", "En esta oficina nadie ___ lo que hace el director. (saber)", "sabe", "«Nadie» es aquí el sujeto del verbo principal, no el antecedente de una relativa: afirmación directa → indicativo. El subjuntivo solo aparece en la relativa que describe a nadie (No hay nadie que sepa…)."),
      mc(
        "«No hay ningún tren que ___ directo a esa ciudad.»",
        ["vaya", "va", "irá", "iba"],
        0,
        "Con un antecedente inexistente (ningún tren) se usa subjuntivo: vaya. «Va», «irá» e «iba» son indicativo y supondrían que ese tren existe."
      ),
      toEs("There's nothing that surprises me anymore.", "Ya no hay nada que me sorprenda.", "Con un antecedente negativo («nada»), la relativa va en subjuntivo: «sorprenda». «Sorprende» afirmaría que algo te sorprende.", ["No hay nada que me sorprenda ya."]),
      toEs("Conozco a alguien que habla cinco idiomas.", "No conozco a nadie que hable cinco idiomas.", "Al negar (no… nadie), la persona deja de existir: subjuntivo (hable). Alguien se convierte en nadie y la a personal se mantiene.", [], "Cambia a negativa."),
      toEs("No hay ningún museo en esta ciudad que tiene entrada gratuita los lunes.", "No hay ningún museo en esta ciudad que tenga entrada gratuita los lunes.", "«No hay ningún museo que…» niega la existencia → subjuntivo (tenga). Error típico: dejar el indicativo «tiene» por inercia.", ["En esta ciudad no hay ningún museo que tenga entrada gratuita los lunes."], "Corrige la frase."),
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
        [
          "Recuerda la regla: cualquiera que, quienquiera que, dondequiera que, lo que, donde y quien + subjuntivo presentan una posibilidad abierta, sin persona, cosa o lugar concreto: Cualquiera que lo vea se enamora. Haz lo que quieras. Te sigo dondequiera que vayas.",
          "¿Por qué? Es el mismo principio del antecedente desconocido: no sabes quién, qué ni dónde será. Por eso el mismo «lo que» cambia de modo: «Come lo que quieras» (cualquier cosa, aún no elegida) frente a «Me gusta lo que cocinas» (un plato concreto, indicativo). Fórmula muy natural: verbo + quien/donde/lo que + el mismo verbo, en subjuntivo: Gane quien gane, Vayas donde vayas, Digan lo que digan.",
        ],
        [
          ["Haz lo que quieras.", "Do whatever you want. (cualquier cosa: subjuntivo)"],
          ["Me encanta lo que haces.", "I love what you do. (algo concreto que ya conozco: indicativo)"],
          ["Quienquiera que llame, di que no estoy.", "Whoever calls, say I'm not in. (no sé quién llamará)"],
          ["Digan lo que digan, voy a ir.", "Whatever they say, I'm going. (fórmula reduplicada)"],
        ],
        [
          mc(
            "«Cualquiera que ___ ese libro lo entenderá.»",
            ["lea", "lee", "leyó", "leerá"],
            0,
            "«Cualquiera que» abre una posibilidad, sin persona concreta: subjuntivo, lea. «Lee» y «leyó» son indicativo, y «leerá» (futuro) no se usa en esta relativa."
          ),
          fb("Completa con el verbo en la forma correcta.", "Pase lo que ___, no te preocupes. (pasar)", "pase", "Fórmula reduplicada: el mismo verbo se repite en subjuntivo (pase lo que pase = no importa qué pase)."),
        ]
      ),
    ],
    [
      fb("Elige.", "Come lo que te ___. (apetecer)", "apetezca", "Lo que + subjuntivo: cualquier cosa que te apetezca, aún no elegida. Apetecer toma la raíz de apetezco: apetezca."),
      fb("Elige.", "Ya he comido lo que me ___ mi madre. (preparar, indefinido)", "preparó", "Aquí lo que remite a algo concreto y ya pasado (la comida que preparó) → indicativo, no subjuntivo."),
      fb("Elige.", "Quienquiera que ___ la puerta, que la cierre. (abrir)", "abra", "Quienquiera que + subjuntivo: no sabemos quién la abrirá (abra)."),
      fb("Elige.", "Iré dondequiera que me ___ el trabajo. (llevar)", "lleve", "Dondequiera que + subjuntivo: el lugar aún es desconocido (lleve)."),
      fb("Elige.", "Cualquier persona que ___ interesada puede apuntarse. (estar)", "esté", "Cualquier persona que + subjuntivo: no hablas de nadie concreto (esté, con tilde)."),
      ms(
        "¿Qué frases hablan de algo abierto (subjuntivo)?",
        ["Dime lo que pienses.", "Pide lo que quieras.", "Me gusta lo que dices.", "Entiendo lo que explicas."],
        [0, 1],
        "«Dime lo que pienses» y «Pide lo que quieras» hablan de algo abierto, aún no dicho ni elegido (subjuntivo); «Me gusta lo que dices» y «Entiendo lo que explicas» hablan de algo concreto que ya estás oyendo (indicativo)."
      ),
      toEs("Whoever wins, we'll celebrate.", "Gane quien gane, lo celebraremos.", "La fórmula «verbo + quien + verbo» en subjuntivo significa «no importa quién»: «gane quien gane».", ["Quienquiera que gane, lo celebraremos.", "Gane quien gane, lo vamos a celebrar."]),
      toEs("No importa lo que digan tus amigos: tú decides.", "Digan lo que digan tus amigos, tú decides.", "«No importa lo que + subjuntivo» equivale a la fórmula reduplicada: verbo en subjuntivo + lo que + el mismo verbo (digan lo que digan).", ["Digan lo que digan tus amigos: tú decides."], "Reescribe con la fórmula «digan lo que digan»."),
      toEs("Cualquiera que tiene coche puede llevar a alguien.", "Cualquiera que tenga coche puede llevar a alguien.", "Cualquiera que no señala a una persona concreta: posibilidad abierta → subjuntivo (tenga), no «tiene».", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: en una pregunta sobre si algo existe, la relativa va en subjuntivo, porque no lo sabes: ¿Hay alguien que tenga un cargador? La respuesta depende de lo que contestes: si existe, indicativo (Sí, Marta tiene uno / Sí, hay una chica que tiene uno); si no existe, subjuntivo (No, no hay nadie que tenga uno).",
          "¿Por qué cambia? El modo sigue a lo que sabe quien habla en cada momento: quien pregunta duda; quien responde «sí» ya conoce a la persona; quien responde «no» niega que exista. Por eso el mismo verbo puede aparecer tres veces en tres modos distintos en un solo diálogo.",
        ],
        [
          ["—¿Conoces a alguien que alquile coches? —Sí, conozco a uno que alquila furgonetas.", "Do you know anyone who rents cars? Yes, I know one who rents vans. (duda → subjuntivo; respuesta real → indicativo)"],
          ["—¿Hay algún bar que abra a las siete? —No, no hay ninguno que abra tan pronto.", "Is there a bar that opens at seven? No, there isn't one that opens so early. (respuesta negativa → subjuntivo)"],
        ],
        [
          fb("Responde.", "—¿Hay alguien aquí que hable ruso? —Sí, Iván ___ ruso. (hablar)", "habla", "La respuesta afirma algo de una persona concreta (Iván) → indicativo (habla). «Hable» solo cabía en la pregunta."),
          fb("Responde.", "—¿Tienes algún paraguas que me ___? —No, no tengo ninguno que te pueda dejar. (prestar)", "prestes", "En la pregunta no sabes si hay alguno → subjuntivo (prestes, tú). La respuesta negativa también lleva subjuntivo (pueda)."),
        ]
      ),
    ],
    [
      fb("Pregunta.", "¿Conoces a algún fontanero que ___ los domingos? (trabajar)", "trabaje", "Pregunta sobre la existencia: no sabes si hay alguno → subjuntivo (trabaje)."),
      fb("Responde.", "—No, no conozco a ninguno que ___ los domingos. (trabajar)", "trabaje", "Respuesta negativa: niegas que exista → subjuntivo (trabaje), igual que en la pregunta."),
      fb("Pregunta.", "¿Tienes algún libro que ___ de la Guerra Civil? (tratar)", "trate", "Pregunta de existencia → subjuntivo (trate)."),
      fb("Responde.", "—Sí, tengo uno que ___ de la vida en Madrid en 1937. (tratar)", "trata", "Respuesta afirmativa: el libro existe y lo tienes → indicativo (trata)."),
      fb("Pregunta.", "¿Hay alguna farmacia que ___ de guardia esta noche? (estar)", "esté", "Pregunta de existencia → subjuntivo de estar (esté)."),
      fb("Responde.", "—Sí, la de la plaza ___ de guardia. (estar)", "está", "La farmacia de la plaza es concreta → indicativo (está)."),
      toEs("Is there anyone who can help me?", "¿Hay alguien que pueda ayudarme?", "Si preguntamos si algo existe, la relativa va en subjuntivo: «pueda».", ["¿Hay alguien que me pueda ayudar?"]),
      toEs("Sí, hay alguien en recepción que puede ayudarte.", "No, no hay nadie en recepción que pueda ayudarte.", "En la respuesta negativa la persona no existe: subjuntivo (pueda). Alguien pasa a nadie y aparece la doble negación (no hay nadie).", ["No, no hay nadie en recepción que te pueda ayudar."], "Cambia a respuesta negativa."),
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
        [
          "Recuerda la regla: lo que la comisaria busca o necesita todavía no existe para ella → subjuntivo; lo que la galería ya tiene existe → indicativo; lo que no hay (ninguno que…) → subjuntivo.",
          "Completa el encargo en los ejercicios: «Buscamos una obra que ___ (hablar) del mar y que no ___ (ser) demasiado grande. Necesitamos un artista que ___ (tener) experiencia con el óleo. Ya tenemos dos cuadros que ___ (mostrar) la costa, pero no hay ninguno que ___ (reflejar) una tormenta.»",
        ],
        [
          ["La galería busca un escultor que trabaje el bronce.", "The gallery is looking for a sculptor who works in bronze. (aún no sabe quién: subjuntivo)"],
          ["La galería tiene un escultor que trabaja el bronce.", "The gallery has a sculptor who works in bronze. (ya existe: indicativo)"],
        ],
        [
          fb("Completa el encargo.", "Buscamos una obra que ___ del mar. (hablar)", "hable", "La obra que buscan aún no existe para ellos → subjuntivo (hable). «Habla» supondría una obra concreta."),
        ]
      ),
    ],
    [
      fb("Completa el encargo.", "…y que no ___ demasiado grande. (ser)", "sea", "Sigue describiendo la obra buscada → subjuntivo de ser: sea."),
      fb("Completa el encargo.", "Necesitamos un artista que ___ experiencia con el óleo. (tener)", "tenga", "Necesitar + artista aún desconocido → subjuntivo (tenga)."),
      fb("Completa el encargo.", "Ya tenemos dos cuadros que ___ la costa. (mostrar)", "muestran", "«Ya tenemos»: los cuadros existen → indicativo (muestran, con diptongo o → ue)."),
      fb("Completa el encargo.", "No hay ninguno que ___ una tormenta. (reflejar)", "refleje", "«No hay ninguno que…» niega la existencia → subjuntivo (refleje)."),
      fb("Completa.", "El escultor que ___ la exposición anterior era argentino. (preparar, indefinido)", "preparó", "Una persona concreta y un hecho pasado → indicativo (preparó)."),
      mc(
        "«Queremos un catálogo que ___ en tres idiomas.»",
        ["esté", "está", "estará", "estuvo"],
        0,
        "El catálogo que queremos aún no existe o no lo conocemos: subjuntivo, esté. «Está», «estará» y «estuvo» son indicativo y supondrían un catálogo concreto."
      ),
      toEs("There's no painting in the museum that shows a storm.", "No hay ningún cuadro en el museo que muestre una tormenta.", "Con un antecedente que no existe («ningún cuadro»), la relativa va en subjuntivo: «muestre».", ["En el museo no hay ningún cuadro que muestre una tormenta."]),
      toEs("La comisaria encuentra a un pintor que pinta tormentas.", "La comisaria busca un pintor que pinte tormentas.", "Con «busca», el pintor aún no existe para ella → subjuntivo (pinte); la a personal suele desaparecer con una persona indeterminada.", ["La comisaria busca a un pintor que pinte tormentas."], "Cambia «encuentra a» por «busca»."),
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
        [
          "Recuerda la regla: lo ideal es, por definición, algo que aún no tienes, así que sus relativas van en subjuntivo (una casa que tenga jardín, una ciudad donde haya playa). Lo que ya tienes es real y va en indicativo (ahora vivo en un piso que no tiene ascensor).",
          "Fíjate en los nexos: que, donde y en el que / en la que siguen la misma regla. Para describir tu ideal puedes empezar con Quiero…, Busco…, Me gustaría… o Mi … ideal es uno/una que…",
        ],
        [
          ["Mi casa ideal es una casa que tenga jardín.", "My ideal house is one that has a garden. (ideal: subjuntivo)"],
          ["Ahora vivo en un piso que no tiene ascensor.", "Right now I live in a flat that has no lift. (real: indicativo)"],
          ["Me gustaría un trabajo en el que no haya reuniones inútiles.", "I'd like a job with no pointless meetings. (en el que + subjuntivo)"],
        ],
        [
          fb("Tus ideales.", "Quiero una casa que ___ mucha luz. (recibir)", "reciba", "Una casa ideal aún no existe para ti → subjuntivo (reciba). «Recibe» describiría tu casa real."),
        ]
      ),
    ],
    [
      fb("Tus ideales.", "Busco un trabajo en el que ___ aprender cosas nuevas. (poder, yo)", "pueda", "En el que + trabajo aún no encontrado → subjuntivo (pueda)."),
      fb("Tus ideales.", "Quiero vivir en una ciudad donde ___ buen transporte público. (haber)", "haya", "Donde + ciudad ideal → subjuntivo de haber: haya, no «hay»."),
      fb("Tus ideales.", "Necesito unos compañeros que me ___. (apoyar)", "apoyen", "Compañeros aún desconocidos → subjuntivo, en plural: apoyen."),
      fb("Tus ideales.", "Quiero un jefe que ___ las cosas con claridad. (decir)", "diga", "Jefe ideal → subjuntivo; decir toma la raíz de digo: diga."),
      fb("Tus ideales.", "Ahora tengo un piso que ___ muy oscuro. (ser)", "es", "«Ahora tengo»: es tu piso real → indicativo (es)."),
      toEs("I want a city where people walk a lot.", "Quiero una ciudad donde la gente camine mucho.", "«Donde» con un lugar deseado, aún no concreto, va con subjuntivo: «camine».", ["Quiero una ciudad en la que la gente camine mucho.", "Quiero una ciudad donde la gente pasee mucho.", "Quiero una ciudad donde la gente ande mucho."]),
      toEs("I'm looking for a job that is close to home.", "Busco un trabajo que esté cerca de casa.", "Si el trabajo aún no existe para nosotros, la relativa va en subjuntivo: «esté» (ubicación → estar).", ["Busco un trabajo que quede cerca de casa."]),
      toEs("Ahora tengo un jefe que me deja trabajar desde casa.", "Quiero un jefe que me deje trabajar desde casa.", "Al pasar de lo que tienes a lo que quieres, el jefe deja de ser real → subjuntivo (deje).", [], "Cambia «Ahora tengo» por «Quiero»."),
      { type: "speak", prompt: "Responde en voz alta: ¿cómo es tu barrio ideal? Di una cosa que tenga y otra que no haya.", text: "Quiero un barrio que tenga parques y donde no haya mucho tráfico.", explanation: "Barrio ideal → subjuntivo en las dos relativas: que tenga, donde no haya. Cambia los detalles a tu gusto, pero mantén el modo." },
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
        [
          "Recuerda la regla: el tipo de anuncio decide el modo. Se busca, busco, se necesita → el antecedente aún es desconocido → subjuntivo. Vendo, alquilo, ofrezco, regalo → lo que anuncias existe → indicativo.",
          "Estos anuncios tienen cuatro errores; corrígelos en los ejercicios: «Se busca profesor que tiene experiencia con niños. Vendo bicicleta que esté en perfecto estado. Pareja busca piso que acepta mascotas. Empresa necesita persona que habla portugués.»",
        ],
        [
          ["Se necesita cocinero que sepa hacer paella.", "Cook needed who can make paella. (se necesita: subjuntivo)"],
          ["Ofrezco clases de piano que se adaptan a tu horario.", "I offer piano lessons that fit your schedule. (ofrezco algo real: indicativo)"],
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
      toEs("Vendo moto que gasta muy poca gasolina.", "Busco moto que gaste muy poca gasolina.", "Al pasar de vender a buscar, la moto deja de ser real → subjuntivo (gaste).", [], "Cambia «Vendo» por «Busco»."),
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
        [
          "Recuerda la regla: si afirmas que algo existe, la relativa va en indicativo; si lo niegas, en subjuntivo. Al negar cambian tres cosas a la vez: alguien → nadie, algo → nada, un / una / algún → ningún / ninguna; aparece el no delante del verbo (doble negación), y el verbo de la relativa pasa a subjuntivo.",
          "Al revés también funciona: si conviertes una negación en afirmación, el antecedente vuelve a existir y vuelve el indicativo. El subjuntivo se forma desde la primera persona del presente: conozco → conozca, salgo → salga, traduzco → traduzca.",
        ],
        [
          ["Hay algo que me preocupa. → No hay nada que me preocupe.", "There's something that worries me. → There's nothing that worries me."],
          ["Conozco un sitio que vende sellos. → No conozco ningún sitio que venda sellos.", "I know a place that sells stamps. → I don't know any place that sells stamps."],
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
      toEs("There's nobody who knows the truth.", "No hay nadie que sepa la verdad.", "Con un antecedente negativo («nadie»), la relativa va en subjuntivo: «sepa». «Sabe» afirmaría algo de alguien que no existe."),
      toEs("No tengo ningún vecino que hable inglés. → Tengo un vecino que hable inglés.", "Tengo un vecino que habla inglés.", "Al afirmar, el vecino existe y vuelve el indicativo (habla). Error típico: dejar el subjuntivo de la frase negativa.", [], "Corrige la transformación."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2d-ronda-relativo-subjuntivo",
    "Ronda rápida: ¿indicativo o subjuntivo en la relativa?",
    "Ronda rápida de relativas: antecedentes conocidos, desconocidos, inexistentes y abiertos.",
    "5 min",
    [
      sec(
        "Cuatro preguntas",
        [
          "Recuerda la regla con cuatro preguntas: ¿existe y lo conozco? → indicativo. ¿Lo busco sin saber si existe? → subjuntivo. ¿No existe? → subjuntivo. ¿Es cualquiera, todavía sin elegir? → subjuntivo.",
          "Un truco para ir rápido: si puedes señalarlo («ese de ahí», «el que ya conozco»), indicativo. Si solo puedes describir las condiciones que debe cumplir, subjuntivo.",
        ],
        [
          ["El hotel en el que nos alojamos tiene piscina.", "The hotel where we're staying has a pool. (lo puedo señalar: indicativo)"],
          ["Busco un hotel en el que admitan perros.", "I'm looking for a hotel where they accept dogs. (solo una condición: subjuntivo)"],
        ],
        [
          fb("Rápido.", "El chico que ___ en la recepción es muy amable. (trabajar)", "trabaja", "«El chico» es una persona concreta que puedes señalar → indicativo (trabaja)."),
          fb("Rápido.", "Pide una habitación que no ___ ruido. (hacer)", "haga", "Cualquier habitación que cumpla la condición → subjuntivo; hacer toma la raíz de hago: haga."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Busco un hotel que ___ desayuno. (incluir)", "incluya", "Hotel desconocido → subjuntivo; los verbos en -uir añaden y: incluya."),
      fb("Rápido.", "No hay ninguna habitación que ___ vistas al mar. (tener)", "tenga", "«No hay ninguna» niega la existencia → subjuntivo (tenga)."),
      fb("Rápido.", "La habitación que nos ___ tiene balcón. (dar, indefinido)", "dieron", "Una habitación concreta que ya nos dieron → indicativo (dieron)."),
      fb("Rápido.", "Elige la habitación que ___. (preferir, tú)", "prefieras", "Cualquier habitación, aún sin elegir → subjuntivo; preferir diptonga e → ie: prefieras."),
      fb("Rápido.", "¿Hay algún museo que ___ gratis los domingos? (ser)", "sea", "Pregunta de existencia → subjuntivo de ser: sea."),
      fb("Rápido.", "El museo que ___ gratis los domingos es el del Prado. (ser)", "es", "Museo concreto e identificado (el del Prado) → indicativo (es)."),
      fb("Rápido.", "No encuentro nada que me ___ bien. (quedar)", "quede", "«No encuentro nada que…»: la cosa no existe para ti → subjuntivo (quede)."),
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
        [
          "Recuerda la regla: presente: busco a alguien que sepa inglés. Pasado: buscaba a alguien que supiera inglés. Si el verbo principal va en pasado, la relativa con antecedente desconocido o negado pasa al imperfecto de subjuntivo, que se forma desde la tercera persona plural del pretérito: supieron → supiera, tuvieron → tuviera, pudieron → pudiera.",
          "Por qué: el subjuntivo sigue al verbo principal en el tiempo. El modo lo decide el antecedente (desconocido → subjuntivo); el tiempo lo decide el verbo principal (pasado → imperfecto).",
        ],
        [
          ["Buscaba un piso que tuviera terraza.", "I was looking for a flat that had a terrace."],
          ["No había nadie que me entendiera.", "There was nobody who understood me."],
        ],
        [
          fb("Cambia al pasado.", "Busco un piso que tenga terraza. → Buscaba un piso que ___ terraza.", "tuviera", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Se forma desde «tuvieron»: «tuviera»."),
          mc(
            "Elige: «Cuando llegué a Lima, no conocía a nadie que me ___ alojar.»",
            ["pudiera", "pueda", "podía", "podrá"],
            0,
            "Nadie es un antecedente negado (subjuntivo) y conocía está en pasado (imperfecto): pudiera. Pueda iría con un verbo principal en presente y podía es indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Cambia al pasado.", "Necesito a alguien que me ayude. → Necesitaba a alguien que me ___.", "ayudara", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Se forma desde «ayudaron»: «ayudara»."),
      fb("Cambia al pasado.", "No hay nadie que conduzca. → No había nadie que ___.", "condujera", "Antecedente negado («nadie») en pasado → imperfecto de subjuntivo. Desde «condujeron»: «condujera»."),
      fb("Cambia al pasado.", "Quiero un coche que no gaste mucho. → Quería un coche que no ___ mucho.", "gastara", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Desde «gastaron»: «gastara»."),
      fb("Cambia al pasado.", "No conozco a nadie que haga eso. → No conocía a nadie que ___ eso.", "hiciera", "Antecedente negado («nadie») en pasado → imperfecto de subjuntivo. Desde «hicieron»: «hiciera»."),
      fb("Cambia al pasado.", "Busco un hotel que esté en el centro. → Buscábamos un hotel que ___ en el centro.", "estuviera", "Antecedente no conocido en pasado → imperfecto de subjuntivo. Desde «estuvieron»: «estuviera»."),
      fb("Cambia al presente.", "No había ningún tren que fuera directo. → No hay ningún tren que ___ directo.", "vaya", "Con el verbo principal en presente («no hay»), el subjuntivo va en presente: «vaya»."),
      mc(
        "«De niño, quería un perro que ___ trucos.»",
        ["supiera hacer", "sepa hacer", "sabía hacer", "sabrá hacer"],
        0,
        "Un perro deseado y desconocido, con el verbo principal en pasado (quería): imperfecto de subjuntivo, supiera hacer. «Sepa» iría con presente, «sabía» es indicativo y «sabrá» es futuro."
      ),
      toEs("We needed a guide who spoke Arabic.", "Necesitábamos un guía que hablara árabe.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «hablara».", ["Necesitábamos una guía que hablara árabe.", "Necesitábamos un guía que hablase árabe."]),
      toEs("Busco una academia que dé clases los sábados.", "Buscaba una academia que diera clases los sábados.", "Con el verbo principal en pasado, el presente de subjuntivo (dé) pasa a imperfecto: dieron → diera.", ["Buscaba una academia que diese clases los sábados."], "Cambia «Busco» por «Buscaba» y adapta el verbo."),
      toEs("Quería un trabajo que estuviera cerca de casa.", "Quiero un trabajo que esté cerca de casa.", "Con el verbo principal en presente, el subjuntivo vuelve al presente: estuviera → esté.", [], "Cambia «Quería» por «Quiero» y adapta el verbo."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: el verbo que va después de «que» depende del antecedente. Si el antecedente es concreto y sabes que existe (tengo un amigo que…, conozco un bar que…), la relativa va en indicativo. Si es desconocido, buscado o inexistente (busco a alguien que…, no hay nada que…, ¿hay alguien que…?), va en subjuntivo.",
          "Por qué: el indicativo describe algo que presentas como real; con un antecedente que no conoces o que niegas no hay nada real que describir, y el español lo marca con el subjuntivo. En el dictado, escucha la terminación: habla/hable, vive/viva, tiene/tenga.",
        ],
        [
          ["No hay nada que puedas hacer.", "There's nothing you can do."],
          ["Tengo una vecina que cuida perros.", "I have a neighbour who looks after dogs."],
        ],
        [
          mc(
            "Elige: «Buscamos a alguien que ___ programar.»",
            ["sepa", "sabe", "supo", "sabrá"],
            0,
            "Ese alguien todavía no tiene nombre: antecedente desconocido, subjuntivo (sepa). Sabe daría a entender que ya conoces a esa persona concreta."
          ),
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
      toEs("Conozco a alguien que repara relojes antiguos.", "No conozco a nadie que repare relojes antiguos.", "Al negar, alguien pasa a nadie y el antecedente deja de existir: la relativa pasa a subjuntivo (repara → repare).", ["Yo no conozco a nadie que repare relojes antiguos."], "Cambia la frase a negativa con «nadie»."),
      toEs("Tengo un primo que vive en Noruega.", "Busco a alguien que viva en Noruega.", "Con buscar el antecedente es desconocido: la relativa pasa de indicativo (vive) a subjuntivo (viva).", ["Busco alguien que viva en Noruega.", "Busco a una persona que viva en Noruega."], "Cambia «Tengo un primo» por «Busco a alguien» y adapta el verbo."),
      toEs("No hay ningún restaurante en el pueblo que sirva comida vegana.", "Hay un restaurante en el pueblo que sirve comida vegana.", "Al afirmar, el restaurante existe y es concreto: la relativa vuelve al indicativo (sirva → sirve).", ["En el pueblo hay un restaurante que sirve comida vegana."], "Cambia la frase a afirmativa."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: en una oferta de empleo, lo que buscas va en subjuntivo y lo que ofreces va en indicativo. 1) Qué buscas: Buscamos un diseñador que… 2) Requisitos: que tenga, que domine, que sepa. 3) Lo que ofreces: Ofrecemos un puesto que incluye formación.",
          "Por qué: el candidato todavía no existe para la empresa (es un antecedente desconocido), así que sus cualidades se describen en subjuntivo. El puesto, el sueldo o la oficina sí existen y son concretos: se describen en indicativo. Cuando ya has contratado a alguien, esa persona es real y vuelve el indicativo.",
        ],
        [
          ["Buscamos un diseñador que domine Photoshop.", "We're looking for a designer who has a good command of Photoshop."],
          ["Ofrecemos un puesto que incluye formación.", "We offer a position that includes training."],
        ],
        [
          fb("Paso 1.", "Buscamos un diseñador que ___ creativo. (ser)", "sea", "El diseñador aún no existe para la empresa: antecedente desconocido, subjuntivo (sea)."),
          mc(
            "Elige: «Ofrecemos unas oficinas que ___ junto al metro.»",
            ["están", "estén", "estuvieran", "estarán"],
            0,
            "Las oficinas que ofreces son reales y concretas: indicativo (están). Estén solo valdría si buscaras unas oficinas que todavía no tienes."
          ),
        ]
      ),
    ],
    [
      fb("Paso 2.", "…que ___ al menos tres años de experiencia. (tener)", "tenga", "Requisito de un candidato desconocido: subjuntivo (tenga)."),
      fb("Paso 2.", "…que ___ inglés con fluidez. (hablar)", "hable", "Requisito de un candidato desconocido: subjuntivo (hable)."),
      fb("Paso 2.", "…que ___ trabajar en equipo. (saber)", "sepa", "Requisito de un candidato desconocido: subjuntivo (sepa)."),
      fb("Paso 2.", "…que ___ disponibilidad inmediata. (tener)", "tenga", "Requisito de un candidato desconocido: subjuntivo (tenga)."),
      fb("Paso 3.", "Ofrecemos un contrato que ___ seguro médico. (incluir)", "incluye", "Lo que ofreces es real → indicativo (incluye)."),
      fb("Paso 3.", "Nuestra oficina, que ___ en el centro, tiene terraza. (estar)", "está", "Información real sobre la oficina → indicativo (está)."),
      toEs("We're looking for someone who likes working with people.", "Buscamos a alguien que disfrute trabajando con gente.", "Buscamos a alguien aún desconocido, así que la relativa va en subjuntivo: «disfrute».", ["Buscamos a alguien a quien le guste trabajar con gente.", "Buscamos a alguien que disfrute trabajando con la gente."]),
      toEs("Tenemos un técnico que sabe reparar estas máquinas.", "Buscamos un técnico que sepa reparar estas máquinas.", "Con buscamos el técnico pasa a ser desconocido: la relativa cambia de indicativo (sabe) a subjuntivo (sepa).", ["Buscamos a un técnico que sepa reparar estas máquinas."], "Cambia «Tenemos» por «Buscamos» y adapta el verbo."),
      toEs("Buscamos una cocinera que prepare postres caseros.", "Hemos contratado a una cocinera que prepara postres caseros.", "Una vez contratada, la cocinera es una persona concreta: la relativa vuelve al indicativo (prepare → prepara).", [], "Cambia «Buscamos» por «Hemos contratado a» y adapta el verbo."),
      toEs("Buscamos un programador que domine Python.", "Buscábamos un programador que dominara Python.", "El antecedente sigue siendo desconocido (subjuntivo), pero con el verbo principal en pasado el subjuntivo pasa a imperfecto: dominaron → dominara.", ["Buscábamos un programador que dominase Python.", "Buscábamos a un programador que dominara Python."], "Cambia la frase al pasado con «Buscábamos»."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: lo que el director busca, quiere o no encuentra va en subjuntivo; lo que ya ha visto o encontrado va en indicativo. Y el tiempo lo marca el verbo principal: busco un actor que pueda (presente) / busqué un actor que pudiera (pasado).",
          "Por qué: un actor buscado o inexistente no es real todavía, y el subjuntivo marca esa falta de realidad. El chico que apareció en la calle sí existe, así que se describe en indicativo (tocaba). «Durante meses busqué un actor que pudiera cantar y bailar. No había nadie que me convenciera. Un día apareció un chico que tocaba la guitarra en la calle. Ahora busco una actriz que tenga su misma energía.»",
        ],
        [
          ["Busqué un actor que pudiera cantar y bailar.", "I looked for an actor who could sing and dance."],
          ["Apareció un chico que tocaba la guitarra.", "A boy who played the guitar appeared."],
        ],
        [
          fb("Completa.", "Para el decorado busqué un pintor que ___ hacer murales enormes. (saber)", "supiera", "Pintor desconocido (subjuntivo) con el verbo principal en pasado (imperfecto): supiera. Sabía describiría a un pintor concreto que ya conocías."),
          mc(
            "Elige: «El primer día del rodaje conocí a una maquilladora que ___ en Hollywood.»",
            ["había trabajado", "hubiera trabajado", "haya trabajado", "trabaje"],
            0,
            "La maquilladora existe y la conociste: antecedente concreto, indicativo (había trabajado). Hubiera trabajado describiría a alguien imaginado o buscado."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No había nadie que me ___. (convencer)", "convenciera", "Nadie es un antecedente inexistente y había está en pasado: imperfecto de subjuntivo (convenciera)."),
      fb("Completa.", "Apareció un chico que ___ la guitarra en la calle. (tocar)", "tocaba", "El chico existe y lo viste: indicativo (tocaba)."),
      fb("Completa.", "Ahora busco una actriz que ___ su misma energía. (tener)", "tenga", "Actriz desconocida con busco en presente: presente de subjuntivo (tenga)."),
      fb("Completa.", "El chico que ___ al final se llama Nico. (elegir, yo, indefinido)", "elegí", "El chico es concreto, ya lo elegiste: indicativo (elegí)."),
      fb("Completa.", "Queríamos una canción que ___ fácil de recordar. (ser)", "fuera", "Canción deseada (subjuntivo) con queríamos en pasado: imperfecto (fuera)."),
      mc(
        "«No hay ninguna actriz que ___ la voz de Nico.»",
        ["iguale", "iguala", "igualara", "igualaría"],
        0,
        "Antecedente inexistente (ninguna actriz) con verbo principal en presente: presente de subjuntivo, iguale. «Iguala» es indicativo, «igualara» iría con pasado y «igualaría» es condicional."
      ),
      toEs("I was looking for someone who could make me laugh.", "Buscaba a alguien que me hiciera reír.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «hiciera».", ["Buscaba a alguien que pudiera hacerme reír.", "Buscaba a alguien que me hiciese reír."]),
      toEs("Busco un fotógrafo que trabaje de noche.", "Buscaba un fotógrafo que trabajara de noche.", "El fotógrafo sigue siendo desconocido (subjuntivo), pero con buscaba en pasado el subjuntivo pasa a imperfecto: trabajaron → trabajara.", ["Buscaba un fotógrafo que trabajase de noche.", "Buscaba a un fotógrafo que trabajara de noche."], "Cambia la frase al pasado con «Buscaba»."),
      toEs("Necesitábamos un actor que bailara claqué.", "Al final contratamos a un actor que bailaba claqué.", "Una vez contratado, el actor es real y concreto: la relativa pasa al indicativo (bailara → bailaba).", [], "Cambia «Necesitábamos» por «Al final contratamos a» y adapta el verbo."),
      toEs("Había alguien en el plató que hablaba ruso.", "No había nadie en el plató que hablara ruso.", "Al negar, alguien pasa a nadie y el antecedente deja de existir: imperfecto de subjuntivo (hablara).", ["No había nadie en el plató que hablase ruso."], "Cambia la frase a negativa con «nadie»."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: lo que, donde, como, cuando, quien y el/la que van con subjuntivo cuando dejan la elección abierta (lo que quieras = cualquier cosa) y con indicativo cuando hablan de algo concreto y conocido (lo que dijiste = eso que ya dijiste). —¿Qué cenamos? —Lo que quieras. —¿Dónde quedamos? —Donde te venga mejor. —¿Cómo lo hago? —Como prefieras.",
          "Por qué: si la cosa, el lugar o la persona todavía no están decididos, no hay nada real que describir y el español usa el subjuntivo, igual que con un antecedente desconocido. Si ya ocurrió o es un hábito conocido (lo que siempre dice), va el indicativo.",
        ],
        [
          ["—¿A qué hora? —Cuando te venga bien.", "What time? Whenever suits you."],
          ["Ayer cenamos lo que preparó Luis.", "Yesterday we had what Luis made."],
        ],
        [
          fb("Responde.", "—¿Qué película vemos? —La que tú ___. (elegir)", "elijas", "La película aún no está elegida: la que + subjuntivo (elijas; g → j delante de a)."),
          mc(
            "Elige: «El año pasado viajamos adonde ___ mi hermana.»",
            ["quiso", "quiera", "quisiera", "querrá"],
            0,
            "Es un viaje pasado y el destino ya es conocido: indicativo (quiso). Quiera dejaría la elección abierta, algo que no encaja con un hecho ya ocurrido."
          ),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Dónde nos sentamos? —Donde ___. (querer, tú)", "quieras", "Lugar sin decidir: donde + subjuntivo (quieras)."),
      fb("Responde.", "—¿Cómo lo pago? —Como te ___ más cómodo. (resultar)", "resulte", "Forma de pago abierta: como + subjuntivo (resulte)."),
      fb("Responde.", "—¿Qué le regalamos? —Lo que ___ más útil. (ser)", "sea", "Regalo aún no elegido: lo que + subjuntivo (sea)."),
      fb("Responde.", "—¿A quién invito? —A quien te ___. (apetecer)", "apetezca", "Persona sin decidir: quien + subjuntivo (apetezca)."),
      fb("Responde.", "—¿Cuánto pido? —Lo que te ___ justo. (parecer)", "parezca", "Cantidad abierta: lo que + subjuntivo (parezca)."),
      fb("Responde.", "—¿Qué dijo ella? —Lo que siempre ___: que no tiene tiempo. (decir)", "dice", "Es algo concreto y conocido, un hábito: indicativo (dice)."),
      mc(
        "—¿Qué me pongo? —«Lo que te ___ cómoda.»",
        ["haga sentir", "hace sentir", "hiciera sentir", "hará sentir"],
        0,
        "«Lo que» abierto, sin una prenda concreta, pide subjuntivo: lo que te haga sentir cómoda. «Hace» se referiría a algo concreto, «hiciera» rompe la secuencia de tiempos y «hará» no se usa en esta relativa."
      ),
      toEs("Ayer compré lo que me recomendaste.", "Mañana compraré lo que me recomiendes.", "Ayer la recomendación ya era conocida (indicativo); mañana todavía no sabes qué recomendarás, así que lo que pasa a subjuntivo (recomiendes).", [], "Cambia «Ayer compré» por «Mañana compraré» y adapta el verbo."),
      toEs("Ayer fuimos donde tú querías.", "Mañana iremos donde tú quieras.", "En el futuro el lugar aún no está decidido: donde + subjuntivo (quieras) en lugar del indicativo (querías).", ["Mañana iremos donde quieras."], "Cambia «Ayer fuimos» por «Mañana iremos» y adapta el verbo."),
      toEs("Invité a quien me cayó bien.", "Invita a quien te caiga bien.", "Con la orden, las personas aún no están elegidas: quien + subjuntivo (caiga). En el pasado eran personas concretas (cayó).", [], "Cambia la frase a una orden con «Invita» (tú) y adapta el verbo."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: con el mismo antecedente puedes usar los dos modos, y cada uno dice algo distinto. Indicativo = el hablante sabe cuál es (quiero leer el libro que me recomendaste: uno concreto). Subjuntivo = todavía no sabe cuál es o si existe (quiero leer un libro que me recomiendes: cualquiera, aún no me lo has dicho).",
          "Por qué: el modo de la relativa no depende del verbo principal, sino de lo que el hablante sabe del antecedente. Pistas: el/la + algo ya pasado → indicativo; un/cualquier/los que + algo futuro o por elegir → subjuntivo.",
        ],
        [
          ["Llamaré al técnico que vino ayer.", "I'll call the technician who came yesterday."],
          ["Llamaré a un técnico que pueda venir hoy.", "I'll call a technician who can come today."],
        ],
        [
          mc(
            "«Vamos al restaurante que ___ Luis.» (Luis ya nos habló de uno concreto)",
            ["recomendó", "recomiende", "recomendara", "recomendará"],
            0,
            "Luis ya lo recomendó: restaurante concreto y conocido → indicativo, recomendó. «Recomiende» y «recomendara» son subjuntivo (algo aún desconocido) y «recomendará» es futuro."
          ),
          mc(
            "Elige: «Pintaremos la habitación del color que ___ los niños.» (aún no han decidido)",
            ["elijan", "eligen", "eligieron", "elegirán"],
            0,
            "Los niños todavía no han elegido: antecedente por decidir → subjuntivo (elijan). Eligieron hablaría de un color ya escogido y elegirán no se usa en esta relativa."
          ),
        ]
      ),
    ],
    [
      mc("«Vamos a un restaurante que ___ Luis.» (Luis aún no ha dicho cuál)", ["recomiende", "recomendó", "recomienda", "recomendaba"], 0, "Aún no sabemos cuál recomendará: antecedente desconocido → subjuntivo, recomiende. «Recomendó», «recomienda» y «recomendaba» son indicativo y supondrían un restaurante conocido."),
      mc("«Haré lo que me ___.» (todavía no me lo has dicho)", ["digas", "dices", "dijiste", "dirás"], 0, "Todavía no me lo has dicho: «lo que» abierto → subjuntivo, digas. «Dices» y «dijiste» se refieren a algo ya dicho, y «dirás» no se usa en esta relativa."),
      mc("«Hice lo que me ___.» (seguí tus instrucciones de ayer)", ["dijiste", "digas", "dijeras", "dirías"], 0, "Ya me lo dijiste: algo concreto del pasado → indicativo, dijiste. «Digas» y «dijeras» son subjuntivo (algo aún abierto) y «dirías» es condicional."),
      mc("«Los alumnos que ___ el examen podrán irse.» (todavía no ha terminado nadie)", ["terminen", "terminaron", "terminan", "terminarán"], 0, "Se habla de cualquier alumno que termine, sin saber aún quiénes serán: subjuntivo, terminen. «Terminaron» señalaría alumnos concretos, «terminan» enunciaría una norma general (posible, pero aquí se habla de quien acabe hoy) y «terminarán» no se usa en esta relativa."),
      fb("Completa.", "Los que ___ tarde ayer no pudieron entrar. (llegar)", "llegaron", "Personas concretas en un hecho pasado → indicativo (llegaron)."),
      fb("Completa.", "Los que ___ tarde mañana no podrán entrar. (llegar)", "lleguen", "En el futuro aún no se sabe quiénes serán → subjuntivo (lleguen)."),
      toEs("Whoever finishes first can leave.", "El que termine primero puede irse.", "«El que» + subjuntivo se refiere a una persona aún no identificada: «el que termine».", ["Quien termine primero puede irse.", "El que acabe primero puede irse."]),
      toEs("Leeré el libro que me regalaste.", "Leeré el libro que me regales.", "Si el regalo aún no existe, el libro es desconocido: la relativa pasa a subjuntivo (regalaste → regales).", ["Leeré un libro que me regales.", "Leeré cualquier libro que me regales."], "Transforma la frase para hablar de un libro que todavía no te han regalado."),
      toEs("Los que llegaron tarde se quedaron sin cena.", "Los que lleguen tarde se quedarán sin cena.", "En futuro no se sabe quiénes llegarán tarde: los que + subjuntivo (lleguen).", ["Los que lleguen tarde van a quedarse sin cena.", "Los que lleguen tarde se van a quedar sin cena."], "Cambia la frase al futuro (se quedarán) y adapta el verbo."),
      toEs("Busco un hotel que tenga piscina.", "Me alojo en un hotel que tiene piscina.", "Si ya estás en el hotel, es concreto y conocido: la relativa pasa al indicativo (tenga → tiene).", [], "Cambia «Busco» por «Me alojo en» y adapta el verbo."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: al contar una búsqueda, lo que buscabas va en imperfecto de subjuntivo (buscaba un piso que estuviera cerca) y lo que encontraste va en indicativo (encontré uno que está a diez minutos). Si no existía, también subjuntivo: no había ningún piso que costara menos.",
          "Por qué: mientras buscabas, el piso ideal no era real para ti (subjuntivo); el que encontraste sí existe, así que se describe en indicativo. El verbo principal en pasado (buscaba, quería) pone el subjuntivo en imperfecto. Ejemplo: «Cuando me mudé, buscaba un piso que estuviera cerca del trabajo y que no costara mucho. Al final encontré uno que está a diez minutos y que tiene un balcón precioso.»",
        ],
        [
          ["Buscaba un piso que no costara mucho.", "I was looking for a flat that didn't cost much."],
          ["Encontré uno que tiene un balcón precioso.", "I found one that has a lovely balcony."],
        ],
        [
          fb("Tu búsqueda.", "Buscaba un trabajo que me ___ crecer. (permitir)", "permitiera", "Trabajo aún desconocido (subjuntivo) con buscaba en pasado (imperfecto): permitiera."),
          mc(
            "Elige: «Después de mucho buscar, adopté una perra que ___ tres años.»",
            ["tenía", "tuviera", "tenga", "tendría"],
            0,
            "La perra adoptada es real y concreta: indicativo (tenía). Tuviera solo valdría para la perra que buscabas antes de encontrarla."
          ),
        ]
      ),
    ],
    [
      fb("Tu búsqueda.", "Quería un perro que ___ tranquilo. (ser)", "fuera", "Perro deseado (subjuntivo) con quería en pasado (imperfecto): fuera."),
      fb("Tu búsqueda.", "Encontré uno que ___ todo el día. (dormir, imperfecto)", "dormía", "El perro encontrado es real → indicativo (dormía)."),
      fb("Tu búsqueda.", "No había ningún piso que ___ dentro de mi presupuesto. (entrar)", "entrara", "Ningún piso no existe y había está en pasado: imperfecto de subjuntivo (entrara)."),
      fb("Tu búsqueda.", "Al final encontré una empresa que ___ el teletrabajo. (permitir, presente)", "permite", "La empresa encontrada es real → indicativo (permite)."),
      fb("Tu búsqueda.", "Ahora busco una escuela que ___ clases de cerámica. (ofrecer)", "ofrezca", "Escuela desconocida con busco en presente: presente de subjuntivo (ofrezca)."),
      toEs("I was looking for someone who shared my hobbies.", "Buscaba a alguien que compartiera mis aficiones.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «compartiera».", ["Buscaba a alguien que compartiese mis aficiones.", "Buscaba a alguien que tuviera mis mismas aficiones."]),
      toEs("Busco un dentista que no sea caro.", "Buscaba un dentista que no fuera caro.", "El dentista sigue siendo desconocido (subjuntivo); con buscaba en pasado, el subjuntivo pasa a imperfecto: sea → fuera.", ["Buscaba a un dentista que no fuera caro.", "Buscaba un dentista que no fuese caro."], "Cambia la frase al pasado con «Buscaba»."),
      toEs("Buscaba un piso que tuviera jardín.", "Encontré un piso que tenía jardín.", "Al encontrarlo, el piso es real y concreto: la relativa pasa al indicativo (tuviera → tenía).", [], "Cambia «Buscaba» por «Encontré» y adapta el verbo."),
      toEs("Conocía a alguien que hablaba alemán.", "No conocía a nadie que hablara alemán.", "Al negar, alguien pasa a nadie y el antecedente deja de existir: imperfecto de subjuntivo (hablara).", ["No conocía a nadie que hablase alemán."], "Cambia la frase a negativa con «nadie»."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: decide primero el modo y después el tiempo. Modo: el piso que buscas o que no existe va en subjuntivo (busco un piso que tenga…, no hay ninguno que baje…); el que tienes o ya viste va en indicativo (tengo uno que cumple…, vi uno que costaba…). Tiempo: con el verbo principal en pasado, el subjuntivo pasa a imperfecto (no había ninguno que me convenciera).",
          "Por qué: el subjuntivo marca lo que todavía no es real para el hablante y el indicativo lo que ya conoce. Cliente: «Busco un piso que tenga tres habitaciones y que no esté lejos del colegio.» Agente: «Tengo uno que cumple casi todo, pero no hay ninguno en esa zona que baje de 1500 euros.» Cliente: «El año pasado vi uno que costaba menos.»",
        ],
        [
          ["No hay ninguno en esa zona que baje de 1500 euros.", "There's none in that area that goes below 1500 euros."],
          ["El año pasado vi uno que costaba menos.", "Last year I saw one that cost less."],
        ],
        [
          fb("Completa.", "Busco un piso que ___ tres habitaciones. (tener)", "tenga", "El piso que buscas aún es desconocido: subjuntivo (tenga)."),
          mc(
            "Elige: «Al final alquilamos un dúplex que ___ dos terrazas.»",
            ["tenía", "tuviera", "tenga", "tendría"],
            0,
            "El dúplex alquilado es real y concreto: indicativo (tenía). Tuviera describiría un dúplex que todavía buscabais."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "…y que no ___ lejos del colegio. (estar)", "esté", "Sigue siendo el piso buscado, desconocido: subjuntivo (esté)."),
      fb("Completa.", "Tengo uno que ___ casi todo. (cumplir)", "cumple", "El agente tiene ese piso: antecedente conocido, indicativo (cumple)."),
      fb("Completa.", "No hay ninguno en esa zona que ___ de 1500 euros. (bajar)", "baje", "Ninguno es un antecedente inexistente: subjuntivo (baje)."),
      fb("Completa.", "El año pasado vi uno que ___ menos. (costar)", "costaba", "Piso visto, real y pasado: indicativo (costaba)."),
      fb("Completa.", "Entonces no había ninguno que me ___. (convencer)", "convenciera", "Ninguno no existía y había está en pasado: imperfecto de subjuntivo (convenciera)."),
      fb("Completa.", "¿Tiene algo que ___ garaje? (incluir)", "incluya", "Preguntas si existe: antecedente desconocido, subjuntivo (incluya)."),
      mc(
        "«Le enseñaré los pisos que ___ esta semana.» (ya sé cuáles)",
        ["han entrado", "hayan entrado", "entraran", "entren"],
        0,
        "Ya sé qué pisos han entrado: antecedente conocido → indicativo, han entrado. «Hayan entrado», «entraran» y «entren» son subjuntivo, que supondría pisos aún desconocidos."
      ),
      toEs("Is there anything that is cheaper?", "¿Hay algo que sea más barato?", "Si preguntamos si algo existe, la relativa va en subjuntivo: «sea».", ["¿Hay algo que salga más barato?", "¿Tiene algo que sea más barato?"]),
      toEs("Busco un ático que tenga terraza.", "Buscaba un ático que tuviera terraza.", "El ático sigue siendo desconocido (subjuntivo); con buscaba en pasado, el subjuntivo pasa a imperfecto: tenga → tuviera.", ["Buscaba un ático que tuviese terraza."], "Cambia la frase al pasado con «Buscaba»."),
      toEs("Queremos una casa que esté cerca del mar.", "Hemos comprado una casa que está cerca del mar.", "La casa comprada es real y concreta: la relativa pasa al indicativo (esté → está).", [], "Cambia «Queremos» por «Hemos comprado» y adapta el verbo."),
      toEs("En este edificio hay un piso que se alquila por meses.", "En este edificio no hay ningún piso que se alquile por meses.", "Al negar, un piso pasa a ningún piso y el antecedente deja de existir: subjuntivo (se alquila → se alquile).", ["No hay ningún piso en este edificio que se alquile por meses."], "Cambia la frase a negativa con «ningún»."),
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
        [
          "Recuerda la regla: cuando hablas de algo que todavía no ha ocurrido, cuando lleva presente de subjuntivo, y la oración principal va en futuro, en presente con valor de futuro o en imperativo: Cuando llegue a casa, te llamo. Cuando termines, avísame. Nunca: «cuando llegaré».",
          "¿Por qué? Lo que aún no ha pasado no se presenta como un hecho, y el subjuntivo es el modo de lo no realizado. El futuro solo cabe en la otra mitad de la frase. Los irregulares mantienen la raíz de yo: tengo → tenga, salgo → salga, voy → vaya.",
        ],
        [
          ["Cuando llegue a casa, te llamo.", "When I get home, I'll call you. (presente con valor de futuro)"],
          ["Cuando termines, avísame.", "When you finish, let me know. (imperativo en la principal)"],
          ["Cuando sean las ocho, cerraremos la tienda.", "When it's eight o'clock, we'll close the shop. (futuro en la principal)"],
        ],
        [
          fb("Mismo marco.", "Cuando ___ el tren, te escribo. (salir)", "salga", "El tren aún no ha salido → cuando + subjuntivo; salir toma la raíz de salgo: salga."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Cuando ___ dinero, me compraré una moto. (tener, yo)", "tenga", "Todavía no tienes el dinero → subjuntivo; raíz de tengo: tenga."),
      fb("Mismo marco.", "Cuando ___ mayor, quiero ser piloto. (ser, yo)", "sea", "Ser mayor está en el futuro → subjuntivo irregular de ser: sea. Aunque la principal vaya en presente (quiero), el hecho es futuro."),
      fb("Mismo marco.", "Cuando ___ a Madrid, visitad el Retiro. (ir, vosotros)", "vayáis", "Imperativo en la principal + viaje futuro → subjuntivo de ir: vayáis."),
      fb("Mismo marco.", "Cuando ___ el semáforo verde, cruzaremos. (ponerse)", "se ponga", "Futuro → subjuntivo; poner toma la raíz de pongo: se ponga."),
      fb("Mismo marco.", "Cuando ___ tu madre, dale recuerdos. (ver, tú)", "veas", "Imperativo (dale) + acción aún no realizada → subjuntivo: veas."),
      fb("Mismo marco.", "Cuando ___ las vacaciones, dormiré diez horas. (empezar)", "empiecen", "Futuro → subjuntivo. Empezar cambia e → ie y z → c delante de e: empiecen."),
      mc(
        "«¿Qué harás cuando ___ la carrera?»",
        ["termines", "terminarás", "terminas", "terminabas"],
        0,
        "Tras «cuando», una acción futura va en subjuntivo, nunca en futuro: cuando termines. «Terminarás» es futuro, «terminas» describiría una rutina y «terminabas» es pasado."
      ),
      toEs("When you (tú) know something, tell me.", "Cuando sepas algo, dímelo.", "«Cuando» + acción futura exige subjuntivo, nunca futuro: «sepas».", ["Cuando sepas algo, avísame.", "Cuando sepas algo, cuéntamelo."]),
      toEs("Cuando podrás, ven a verme.", "Cuando puedas, ven a verme.", "Detrás de cuando no va el futuro: una acción aún no realizada va en presente de subjuntivo (puedas).", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: hábito → Cuando llego a casa, me ducho (siempre). Pasado → Cuando llegué a casa, me duché (ayer). Futuro → Cuando llegue a casa, me ducharé (todavía no). Solo el futuro lleva subjuntivo.",
          "¿Por qué? El hábito y el pasado son hechos que conoces; el futuro todavía no lo es. El verbo principal te da la pista: presente de costumbre → indicativo; pasado → indicativo; futuro o imperativo → subjuntivo detrás de cuando.",
        ],
        [
          ["Cuando llueve, me quedo en casa.", "When it rains, I stay home. (costumbre)"],
          ["Cuando llueva, me quedaré en casa.", "When it rains, I'll stay home. (futuro)"],
          ["Cuando llovió, nos quedamos en casa.", "When it rained, we stayed home. (pasado)"],
        ],
        [
          fb("Par.", "Cuando ___ a casa, siempre me ducho. (llegar)", "llego", "«Siempre me ducho» es una costumbre → cuando + indicativo (llego)."),
          mc(
            "«Cuando ___ el examen el lunes, te llamaré.»",
            ["acabe", "acabo", "acabé", "acabaré"],
            0,
            "«El lunes» + «te llamaré»: futuro → cuando + subjuntivo (acabe). «Acabo» sería una costumbre, «acabé» pasado, y el futuro «acabaré» nunca va detrás de cuando."
          ),
        ]
      ),
    ],
    [
      fb("Hábito.", "Cuando ___ estrés, salgo a correr. (tener, yo)", "tengo", "Costumbre (salgo a correr siempre que…) → indicativo (tengo)."),
      fb("Futuro.", "Cuando ___ estrés en los exámenes, saldré a correr. (tener, yo)", "tenga", "La principal está en futuro (saldré) → cuando + subjuntivo (tenga)."),
      fb("Pasado.", "Cuando ___ estrés el año pasado, salía a correr. (tener, yo)", "tenía", "Hábito en el pasado → indicativo, en imperfecto (tenía)."),
      fb("Hábito.", "Mi abuela siempre sonríe cuando nos ___. (ver)", "ve", "«Siempre» marca costumbre → indicativo (ve)."),
      fb("Futuro.", "Mi abuela sonreirá cuando nos ___ mañana. (ver)", "vea", "«Mañana» + futuro en la principal → subjuntivo (vea)."),
      fb("Pasado.", "Mi abuela sonrió cuando nos ___. (ver)", "vio", "Un hecho pasado concreto → indicativo, en indefinido (vio, sin tilde)."),
      ms(
        "¿Qué frases hablan del futuro (subjuntivo)?",
        ["Cuando cumpla treinta años, viajaré.", "Avísame cuando estés lista.", "Cuando cumplí treinta años, viajé.", "Cuando estoy lista, aviso."],
        [0, 1],
        "Cuando + subjuntivo habla del futuro: cuando cumpla, cuando estés lista. «Cuando cumplí… viajé» es pasado y «Cuando estoy lista, aviso» es un hábito: ambos con indicativo."
      ),
      toEs("When I was a child, I lived in Seville.", "Cuando era niño, vivía en Sevilla.", "«Cuando» + acción pasada o habitual va en indicativo: «era».", ["Cuando era niña, vivía en Sevilla.", "Cuando era pequeño, vivía en Sevilla.", "Cuando era pequeña, vivía en Sevilla."]),
      toEs("Cuando sea pequeño, vivía en Sevilla.", "Cuando era pequeño, vivía en Sevilla.", "Hablas del pasado (vivía): cuando + indicativo (era). El subjuntivo «sea» solo sirve para el futuro.", ["Cuando era niño, vivía en Sevilla."], "Corrige la frase."),
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
        [
          "Recuerda la regla: en cuanto, tan pronto como (= as soon as), hasta que (= until) y después de que (= after) funcionan igual que cuando: subjuntivo para una acción futura, indicativo para hábitos y para el pasado. En cuanto llegues, llámame. Esperé hasta que llegó.",
          "La razón es la misma: lo que todavía no ha pasado va en subjuntivo. Un detalle de hasta que: en negativa (No me voy hasta que termines) también es futuro, así que también lleva subjuntivo. Con después de que en pasado oirás también subjuntivo (después de que se fueran); con en cuanto y hasta que, en pasado, usa indicativo.",
        ],
        [
          ["En cuanto sepa algo, te aviso.", "As soon as I know anything, I'll let you know. (futuro)"],
          ["No me voy hasta que termines.", "I'm not leaving until you finish. (futuro, en negativa)"],
          ["Siempre espero hasta que se enfría el café.", "I always wait until the coffee cools down. (costumbre)"],
        ],
        [
          fb("Estación 1.", "En cuanto ___ los resultados, te los mando. (tener, yo)", "tenga", "Todavía no tienes los resultados: en cuanto + futuro → subjuntivo (tenga)."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "En cuanto ___ los resultados ayer, te los mandé. (tener, yo)", "tuve", "«Ayer»: hecho pasado → indicativo, en indefinido (tuve)."),
      fb("Estación 2.", "Tan pronto como ___ la lluvia, saldremos. (parar)", "pare", "La principal va en futuro (saldremos) → tan pronto como + subjuntivo (pare)."),
      fb("Estación 2.", "Siempre salimos tan pronto como ___ la lluvia. (parar)", "para", "«Siempre» marca costumbre → indicativo (para)."),
      fb("Estación 3.", "No te levantes hasta que te lo ___ el médico. (decir)", "diga", "Orden + acción aún no ocurrida → hasta que + subjuntivo (diga)."),
      fb("Estación 3.", "Esperamos hasta que ___ el último autobús. (pasar)", "pasó", "El autobús ya pasó: hecho pasado → indicativo (pasó)."),
      fb("Estación 4.", "Después de que ___ los invitados, limpiaremos. (irse)", "se vayan", "Futuro (limpiaremos) → después de que + subjuntivo de irse: se vayan."),
      mc(
        "«Seguiré insistiendo hasta que me ___ caso.»",
        ["hagan", "hacen", "harán", "hicieron"],
        0,
        "«Hasta que» con una acción futura pide subjuntivo: hasta que me hagan caso. «Hacen» es presente, «harán» es futuro (imposible aquí) e «hicieron» es pasado."
      ),
      toEs("As soon as you arrive, call me.", "En cuanto llegues, llámame.", "«En cuanto» + acción futura exige subjuntivo: «llegues».", ["Tan pronto como llegues, llámame.", "En cuanto llegue, llámeme."]),
      toEs("Tan pronto como sabré la fecha, te la diré.", "Tan pronto como sepa la fecha, te la diré.", "Detrás de tan pronto como, una acción futura va en presente de subjuntivo (sepa), nunca en futuro.", ["En cuanto sepa la fecha, te la diré."], "Corrige la frase."),
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
        [
          "Recuerda la regla: antes de que + subjuntivo, siempre, incluso en hábitos y en el pasado: Sal antes de que llueva. Siempre llego antes de que abran. Con el mismo sujeto en las dos partes no hay «que»: antes de + infinitivo (Desayuno antes de salir).",
          "¿Por qué no tiene excepciones? En el momento de la acción principal, lo que va detrás de antes de que todavía no ha ocurrido; por eso nunca puede presentarse como un hecho, ni siquiera en una costumbre. Es la gran diferencia con cuando y después de que.",
        ],
        [
          ["Vámonos antes de que empiece a llover.", "Let's go before it starts to rain. (sujetos distintos)"],
          ["Me lavo las manos antes de comer.", "I wash my hands before eating. (mismo sujeto: infinitivo)"],
          ["Siempre salgo antes de que se haga de noche.", "I always leave before it gets dark. (costumbre, y aun así subjuntivo)"],
        ],
        [
          fb("Rápido.", "Recoge tus cosas antes de que ___ tu madre. (volver)", "vuelva", "Antes de que + subjuntivo siempre; volver diptonga o → ue: vuelva."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Apaga el horno antes de que se ___ la tarta. (quemar)", "queme", "Antes de que lleva siempre subjuntivo: queme, no «quema»."),
      fb("Rápido.", "Llámala antes de que se ___. (dormir)", "duerma", "Antes de que + subjuntivo; dormir diptonga o → ue: se duerma."),
      fb("Rápido.", "Siempre reviso el correo antes de ___. (acostarse, yo)", "acostarme", "Yo reviso y yo me acuesto: mismo sujeto → antes de + infinitivo, con el pronombre pegado (acostarme)."),
      fb("Rápido.", "Cómpralo antes de que ___ el precio. (subir)", "suba", "Antes de que + subjuntivo: suba (el precio aún no ha subido)."),
      fb("Rápido.", "Terminaremos antes de que ___ los clientes. (llegar)", "lleguen", "Antes de que + subjuntivo; g → gu delante de e para mantener el sonido: lleguen."),
      fb("Rápido.", "Dímelo antes de que ___ tarde. (ser)", "sea", "Antes de que + subjuntivo irregular de ser: sea."),
      fb("Rápido.", "Hay que decidir antes de que se ___ las plazas. (agotar)", "agoten", "Antes de que + subjuntivo, en plural porque concuerda con las plazas: agoten."),
      mc(
        "«Piénsalo bien antes de ___.» (tú decides)",
        ["decidir", "que decidan", "que decides", "decidas"],
        0,
        "Si el sujeto es el mismo (tú piensas, tú decides), se usa antes de + infinitivo: antes de decidir. «Que decidan» introduce otro sujeto distinto de «tú», «que decides» usa indicativo y «decidas» sin «que» no es posible."
      ),
      toEs("Siempre ceno antes de que empieza el telediario.", "Siempre ceno antes de que empiece el telediario.", "Aunque sea una costumbre (siempre), antes de que no admite indicativo: empiece.", ["Siempre ceno antes de que empiece el noticiero."], "Corrige la frase."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-1",
    "b2d-elige-para-que-para",
    "Elige y explica: para + infinitivo / para que + subjuntivo",
    "Mismo sujeto o sujeto distinto: el sujeto decide entre para + infinitivo y para que + subjuntivo.",
    "6 min",
    [
      sec(
        "¿Quién hace la segunda acción?",
        [
          "Recuerda la regla: pregúntate quién hace la segunda acción. Mismo sujeto → para + infinitivo: Estudio para aprobar (yo estudio, yo apruebo). Sujeto distinto → para que + subjuntivo: Te lo explico para que lo entiendas (yo explico, tú entiendes).",
          "¿Por qué subjuntivo? La finalidad es algo que todavía no se ha cumplido: lo buscas, no lo afirmas. Y el infinitivo no tiene persona, así que solo sirve cuando el sujeto ya es el de la oración principal. Ojo: el sujeto puede ser una cosa (Abro la ventana para que entre aire: entra el aire, no yo).",
        ],
        [
          ["Ahorro para comprarme un coche.", "I save to buy myself a car. (yo ahorro, yo compro)"],
          ["Ahorro para que mis hijos estudien.", "I save so that my children can study. (yo ahorro, ellos estudian)"],
          ["Riego las plantas para que no se sequen.", "I water the plants so they don't dry out. (el sujeto de secarse son las plantas)"],
        ],
        [
          mc(
            "«Hablo despacio para que me ___.» (tú entiendes)",
            ["entiendas", "entender", "entiendes", "entenderás"],
            0,
            "Con sujeto distinto (yo hablo, tú entiendes) se usa para que + subjuntivo: entiendas. «Entender» sería para el mismo sujeto, y «entiendes» y «entenderás» son indicativo."
          ),
          fb("Elige.", "Pongo la alarma para no ___ dormido. (quedarse, yo)", "quedarme", "Yo pongo la alarma y yo no me quedo dormido: mismo sujeto → para + infinitivo, con el pronombre pegado (quedarme)."),
        ]
      ),
    ],
    [
      fb("Elige.", "Me levanto temprano para ___ el tren. (coger, yo)", "coger", "Yo me levanto y yo cojo el tren: mismo sujeto → para + infinitivo."),
      fb("Elige.", "Te despierto temprano para que ___ el tren. (coger, tú)", "cojas", "Yo despierto, tú coges: sujeto distinto → para que + subjuntivo. Coger cambia g → j delante de a: cojas."),
      fb("Elige.", "Dejo la luz encendida para que el niño no ___ miedo. (tener)", "tenga", "Yo dejo la luz; el niño tiene miedo: sujeto distinto → para que + subjuntivo (tenga)."),
      fb("Elige.", "Voy al gimnasio para ___ en forma. (estar, yo)", "estar", "Yo voy y yo estoy en forma: mismo sujeto → para + infinitivo."),
      fb("Elige.", "Te presto el libro para que lo ___ en vacaciones. (leer)", "leas", "Yo presto, tú lees: para que + subjuntivo (leas)."),
      fb("Elige.", "El profesor repite la explicación para que todos la ___. (entender)", "entiendan", "El profesor repite, todos entienden: para que + subjuntivo, en plural y con diptongo: entiendan."),
      toEs("I'm telling you so that you know.", "Te lo digo para que lo sepas.", "«Para que» con sujetos distintos exige subjuntivo: «sepas» (yo digo, tú sabes)."),
      toEs("I'm going to the market to buy fish.", "Voy al mercado para comprar pescado.", "Con el mismo sujeto se usa «para» + infinitivo, no «para que». Con verbos de movimiento también vale «a» + infinitivo.", ["Voy al mercado a comprar pescado."]),
      toEs("Te llamo para que recordarte la cita.", "Te llamo para recordarte la cita.", "Yo llamo y yo te recuerdo la cita: mismo sujeto → para + infinitivo. «Para que» nunca va seguido de infinitivo.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: aunque + indicativo reconoce un hecho real (Aunque llueve, voy a salir: está lloviendo). Aunque + subjuntivo presenta una hipótesis o un dato que no importa (Aunque llueva, voy a salir: no sé si lloverá, y da igual).",
          "¿Cómo decidir? Pregúntate si quien habla sabe que es verdad y lo está informando. Si sí, indicativo (en inglés, although / even though). Si no lo sabe, o lo sabe pero le quita importancia, subjuntivo (en inglés, even if). En pasado, un hecho ocurrido va en indicativo: Aunque salí temprano, llegué tarde.",
        ],
        [
          ["Aunque está cansado, sigue trabajando.", "Although he's tired, he keeps working. (lo sé: indicativo)"],
          ["Aunque esté cansado, seguirá trabajando.", "Even if he's tired, he'll keep working. (no lo sé: subjuntivo)"],
          ["Aunque sea tu hermano, no tiene razón.", "He may be your brother, but he's not right. (es verdad, pero no importa)"],
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
      fb("Hecho.", "Aunque el restaurante ___ caro, siempre está lleno. (ser)", "es", "Sabes que es caro y lo afirmas → aunque + indicativo (es)."),
      fb("Hipótesis.", "Aunque ___ caro, pediré el menú degustación. (ser)", "sea", "No sabes el precio, o te da igual → aunque + subjuntivo (sea)."),
      fb("Hecho.", "Aunque ___ tres idiomas, no encuentra trabajo. (hablar, él)", "habla", "Es un dato conocido sobre él → aunque + indicativo (habla)."),
      fb("Hipótesis.", "Aunque me lo ___ de rodillas, no pienso ir. (pedir, ellos)", "pidan", "Una situación imaginada que no cambia nada → aunque + subjuntivo; pedir cambia e → i: pidan."),
      fb("Hecho.", "Aunque ___ temprano, llegué tarde. (salir, yo)", "salí", "Un hecho pasado que ocurrió de verdad → aunque + indicativo (salí)."),
      toEs("Even if you don't believe me, it's true.", "Aunque no me creas, es verdad.", "«Aunque» + subjuntivo presenta algo que no se da por hecho («aunque no me creas»).", ["Aunque no me creas, es cierto."]),
      toEs("Although it's late, I'm going to call her.", "Aunque es tarde, voy a llamarla.", "«Aunque» + indicativo presenta un hecho real y conocido: «aunque es tarde».", ["Aunque es tarde, la voy a llamar."]),
      toEs("Aunque haya estudiado mucho ayer, suspendí el examen.", "Aunque estudié mucho ayer, suspendí el examen.", "Hablas de un hecho pasado que conoces (ayer estudiaste): aunque + indicativo, en indefinido (estudié).", ["Aunque había estudiado mucho, suspendí el examen."], "Corrige la frase."),
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
        [
          "Recuerda la regla: para que y antes de que llevan siempre subjuntivo; cuando, en cuanto y hasta que, subjuntivo si la acción aún no ha ocurrido; aunque, subjuntivo si es una hipótesis o un dato que no importa, e indicativo si es un hecho que se reconoce.",
          "Completa el debate en los ejercicios. Diputada: «Votaremos esta ley para que los jóvenes ___ (poder) alquilar. Cuando se ___ (aprobar), los precios bajarán.» Diputado: «Aunque se ___ (aprobar), no cambiará nada hasta que se ___ (construir) más viviendas. Hay que actuar antes de que ___ (ser) demasiado tarde.»",
        ],
        [
          ["Cuando gobernemos, bajaremos el IVA.", "When we're in government, we'll cut VAT. (futuro: subjuntivo)"],
          ["Aunque la economía crece, el paro no baja.", "Although the economy is growing, unemployment isn't falling. (hecho: indicativo)"],
        ],
        [
          fb("Completa el debate.", "Votaremos esta ley para que los jóvenes ___ alquilar. (poder)", "puedan", "Nosotros votamos, los jóvenes pueden: sujetos distintos → para que + subjuntivo (puedan)."),
        ]
      ),
    ],
    [
      fb("Completa el debate.", "Cuando se ___, los precios bajarán. (aprobar)", "apruebe", "La ley aún no está aprobada (bajarán, futuro) → cuando + subjuntivo; aprobar diptonga o → ue: apruebe."),
      fb("Completa el debate.", "Aunque se ___, no cambiará nada. (aprobar)", "apruebe", "El diputado no sabe si se aprobará y le da igual → aunque + subjuntivo (apruebe)."),
      fb("Completa el debate.", "…hasta que se ___ más viviendas. (construir)", "construyan", "Hasta que + acción futura → subjuntivo; los verbos en -uir añaden y: construyan."),
      fb("Completa el debate.", "Hay que actuar antes de que ___ demasiado tarde. (ser)", "sea", "Antes de que lleva siempre subjuntivo: sea."),
      fb("Completa.", "En cuanto ___ la votación, daremos una rueda de prensa. (terminar)", "termine", "La votación aún no ha terminado (daremos, futuro) → en cuanto + subjuntivo (termine)."),
      mc(
        "«El año pasado, cuando se ___ la ley anterior, nada cambió.»",
        ["aprobó", "apruebe", "aprueba", "aprobaba"],
        0,
        "«El año pasado» es un hecho pasado: cuando + indicativo, se aprobó. «Apruebe» sería para el futuro, «aprueba» es presente y «aprobaba» describe un proceso o hábito."
      ),
      toEs("We'll keep fighting until the law changes.", "Seguiremos luchando hasta que cambie la ley.", "«Hasta que» + acción futura exige subjuntivo: «cambie».", ["Seguiremos luchando hasta que la ley cambie."]),
      toEs("Aunque la ley se aprobó, los alquileres siguen subiendo.", "Aunque la ley se apruebe, los alquileres seguirán subiendo.", "Si la ley todavía no se ha votado, la concesión es una hipótesis → aunque + subjuntivo (se apruebe), y la principal pasa a futuro (seguirán).", ["Aunque se apruebe la ley, los alquileres seguirán subiendo."], "Cambia la frase: la ley todavía no se ha votado."),
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
        [
          "Recuerda la regla: al unir dos frases, la conjunción decide el modo. Para que y antes de que → siempre subjuntivo. Cuando, en cuanto, hasta que y después de que → subjuntivo si la acción es futura, indicativo si es costumbre o pasado.",
          "Para unir bien, sigue tres pasos: 1) elige la conjunción por el significado (tiempo, finalidad, anterioridad); 2) mira si la acción ya es un hecho o todavía no; 3) conjuga. Ejemplo: Terminas el informe. Luego me lo mandas. → Cuando termines el informe, mándamelo.",
        ],
        [
          ["Cuando termines el informe, mándamelo.", "When you finish the report, send it to me. (futuro: subjuntivo)"],
          ["Yo te lo explico. Tú lo entiendes. → Te lo explico para que lo entiendas.", "I explain it to you so that you understand it. (finalidad: subjuntivo)"],
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
      toEs("Mi abuelo llega a casa. Siempre se echa la siesta.", "Cuando mi abuelo llega a casa, siempre se echa la siesta.", "Es una costumbre (siempre), no un plan: cuando + indicativo (llega). El subjuntivo solo aparecería si hablaras de una vez futura.", ["Mi abuelo siempre se echa la siesta cuando llega a casa."], "Transforma: une las dos frases con «cuando»."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2d-corrige-cuando-futuro",
    "Corrige el párrafo: el error de «cuando + futuro»",
    "Corrige un correo con el error típico de los angloparlantes: futuro o indicativo tras cuando, para que, antes de que y después de que.",
    "6 min",
    [
      sec(
        "El correo",
        [
          "Recuerda la regla: detrás de cuando, en cuanto, hasta que y después de que, una acción futura va en presente de subjuntivo, nunca en futuro; el futuro se queda en la otra mitad de la frase. Para que y antes de que llevan siempre subjuntivo. Error típico de quien piensa en inglés o en futuro: «cuando llegaré».",
          "Este correo tiene cuatro errores; corrígelos en los ejercicios: «Cuando llegaré a Lima, te escribiré. Te mando las fotos para que las ves. Antes de que me voy, quiero verte. Te llamaré después de que aterrizará el avión.»",
        ],
        [
          ["Cuando vuelva de Perú, te enseñaré las fotos.", "When I get back from Peru, I'll show you the photos. (futuro solo en la principal)"],
          ["Siempre te llamo cuando aterrizo.", "I always call you when I land. (costumbre: indicativo, sin corregir de más)"],
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
      toEs("Corrige: «Te llamaré después de que aterrizará el avión.»", "Te llamaré después de que aterrice el avión.", "«Después de que» con una acción futura exige subjuntivo, nunca futuro: «aterrice» (z → c delante de e)."),
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
        [
          "Recuerda la regla: un plan habla del futuro, así que detrás de cuando, en cuanto, hasta que y después de que va el presente de subjuntivo, y la otra mitad lleva futuro, «ir a» o «querer» + infinitivo. Antes de que y para que, siempre subjuntivo. Si el sujeto es el mismo, antes de / para + infinitivo.",
          "Para hablar de ti, combina una condición con tu plan: Cuando termine este curso, me tomaré unas vacaciones. Antes de que acabe el año, quiero aprender a nadar.",
        ],
        [
          ["Cuando termine este curso, me tomaré unas vacaciones.", "When I finish this course, I'll take a holiday. (cuando + subjuntivo, futuro en la principal)"],
          ["Antes de que acabe el año, quiero aprender a nadar.", "Before the year ends, I want to learn to swim. (antes de que: siempre subjuntivo)"],
        ],
        [
          fb("Tus planes.", "Cuando ___ el examen de inglés, lo celebraré. (aprobar)", "apruebe", "El examen está en el futuro (celebraré) → cuando + subjuntivo; aprobar diptonga o → ue: apruebe."),
        ]
      ),
    ],
    [
      fb("Tus planes.", "En cuanto ___ un buen trabajo, me independizaré. (encontrar)", "encuentre", "Plan futuro → en cuanto + subjuntivo; encontrar diptonga: encuentre."),
      fb("Tus planes.", "Antes de que ___ el verano, quiero perder dos kilos. (llegar)", "llegue", "Antes de que lleva siempre subjuntivo; g → gu delante de e: llegue."),
      fb("Tus planes.", "No dejaré de estudiar hasta que ___ el nivel C1. (conseguir)", "consiga", "Hasta que + acción futura → subjuntivo. Conseguir pierde la u delante de a: consiga."),
      fb("Tus planes.", "Cuando mis padres se ___, iré a vivir cerca de ellos. (jubilar)", "jubilen", "La jubilación aún no ha llegado → cuando + subjuntivo (se jubilen)."),
      fb("Tus planes.", "Voy a ahorrar para que mis hijos ___ estudiar fuera. (poder)", "puedan", "Yo ahorro, mis hijos pueden: sujetos distintos → para que + subjuntivo (puedan)."),
      toEs("When I retire, I'll live by the sea.", "Cuando me jubile, viviré junto al mar.", "«Cuando» + acción futura exige subjuntivo: «me jubile».", ["Cuando me jubile, viviré cerca del mar.", "Cuando me jubile, voy a vivir junto al mar."]),
      toEs("I want to travel before I turn forty.", "Quiero viajar antes de cumplir cuarenta años.", "Yo viajo y yo cumplo: mismo sujeto → antes de + infinitivo, aunque en inglés diga «before I turn».", ["Quiero viajar antes de cumplir los cuarenta."]),
      toEs("Cuando tengo vacaciones, voy a la playa.", "Cuando tenga vacaciones, iré a la playa.", "De costumbre a plan: cuando pasa a subjuntivo (tenga) y la principal a futuro (iré).", ["Cuando tenga vacaciones, voy a ir a la playa."], "Cambia de costumbre a plan para el próximo verano."),
      { type: "speak", prompt: "Responde en voz alta: ¿qué harás cuando termines este curso?", text: "Cuando termine este curso, buscaré trabajo en el extranjero.", explanation: "Plan futuro: cuando + presente de subjuntivo (termine) y futuro en la otra parte (buscaré). Cambia el plan a tu gusto, pero no digas «cuando terminaré»." },
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
        [
          "Recuerda la regla: a una pregunta sobre el futuro (¿Cuándo vas a…?, ¿Hasta cuándo…?) se responde con una conjunción + subjuntivo, porque lo que la respuesta describe aún no ha ocurrido: —¿Cuándo vas a comprarte un coche? —Cuando encuentre trabajo.",
          "Si la pregunta es sobre una costumbre (¿Cuándo sueles…?), la respuesta va en indicativo: —Cuando vuelvo del trabajo. Ojo a la tilde: ¿cuándo? (pregunta) lleva tilde; cuando (conjunción) no.",
        ],
        [
          ["—¿Cuándo te mudas? —En cuanto firme el contrato.", "When are you moving? As soon as I sign the contract. (futuro: subjuntivo)"],
          ["—¿Cuándo sueles leer? —Cuando me acuesto.", "When do you usually read? When I go to bed. (costumbre: indicativo)"],
        ],
        [
          fb("Responde.", "—¿Cuándo vas a pintar la casa? —Cuando ___ buen tiempo. (hacer)", "haga", "La pregunta mira al futuro: cuando + subjuntivo; hacer toma la raíz de hago: haga."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Hasta cuándo te quedas? —Hasta que se ___ las vacaciones. (acabar)", "acaben", "Las vacaciones aún no han acabado → hasta que + subjuntivo (se acaben)."),
      fb("Responde.", "—¿Cuándo empiezas? —En cuanto me ___ los papeles. (dar, ellos)", "den", "Respuesta sobre el futuro → en cuanto + subjuntivo de dar: den."),
      fb("Responde.", "—¿Cuándo me devuelves el libro? —Después de que lo ___ mi hermana. (leer)", "lea", "Mi hermana aún no lo ha leído → después de que + subjuntivo (lea)."),
      fb("Responde.", "—¿Para qué me das esto? —Para que lo ___ en la nevera. (guardar)", "guardes", "Para que lleva siempre subjuntivo: guardes."),
      fb("Responde.", "—¿Cuándo sueles cenar? —Cuando ___ del gimnasio. (volver)", "vuelvo", "«Sueles» pregunta por una costumbre → cuando + indicativo (vuelvo)."),
      mc(
        "—¿Cuándo me llamas? —«Tan pronto como ___.»",
        ["pueda", "puedo", "podré", "pude"],
        0,
        "«Tan pronto como» con una acción futura pide subjuntivo: pueda. «Puedo» describiría un hábito, «podré» es futuro (imposible aquí) y «pude» es pasado."
      ),
      toEs("When will you tell her? When the time is right.", "¿Cuándo se lo vas a decir? Cuando sea el momento.", "La pregunta «¿cuándo?» lleva tilde; la respuesta «cuando» + futuro va en subjuntivo: «sea».", ["¿Cuándo se lo dirás? Cuando sea el momento adecuado.", "¿Cuándo se lo vas a decir? Cuando llegue el momento.", "¿Cuándo se lo dirás? Cuando sea el momento."]),
      toEs("Normalmente ceno cuando vuelvo del gimnasio.", "Esta noche cenaré cuando vuelva del gimnasio.", "Al pasar de la costumbre (normalmente) a una vez futura (esta noche), cuando cambia a subjuntivo (vuelva) y la principal a futuro (cenaré).", ["Esta noche voy a cenar cuando vuelva del gimnasio."], "Cambia «normalmente» por «esta noche»."),
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
        [
          "Recuerda la regla: siempre subjuntivo con antes de que y para que, porque lo que introducen todavía no ha ocurrido (un objetivo, algo que vendrá después). Depende del tiempo con cuando, en cuanto, hasta que y después de que: futuro u orden → subjuntivo; hábito o pasado → indicativo. Depende del hablante con aunque: hecho que admite → indicativo; hipótesis o dato que no le importa → subjuntivo.",
          "¿Por qué? El indicativo presenta algo como real y comprobado; el subjuntivo, algo pendiente o no afirmado. Truco rápido: mira el verbo principal. Si es futuro o imperativo (iremos, espera), la conjunción temporal casi siempre va con subjuntivo; si es presente habitual o pasado (siempre vamos, fuimos), con indicativo.",
        ],
        [
          ["Te espero hasta que salgas.", "I'll wait for you until you come out. (futuro: subjuntivo)"],
          ["Siempre la espero hasta que sale.", "I always wait for her until she comes out. (hábito: indicativo)"],
          ["Aunque está cansado, sigue trabajando.", "Although he's tired, he keeps working. (hecho: indicativo)"],
          ["Lo repito para que quede claro.", "I'm repeating it so that it's clear. (para que: siempre subjuntivo)"],
        ],
        [
          fb("Rápido.", "Te lo recuerdo para que no se te ___. (olvidar)", "olvide", "«Para que» siempre lleva subjuntivo, porque la finalidad aún no se ha cumplido: olvide."),
          mc(
            "«En cuanto ___ las notas, te las mando.»",
            ["publiquen", "publican", "publicarán", "publicaron"],
            0,
            "Las notas aún no están publicadas y la principal mira al futuro (te las mando): en cuanto + subjuntivo, publiquen. «Publican» sería un hábito, «publicarán» nunca va detrás de en cuanto y «publicaron» es pasado."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Cuando ___ el invierno, iremos a esquiar. (llegar)", "llegue", "La principal está en futuro (iremos): el invierno aún no ha llegado → cuando + subjuntivo (llegue, con -gu- para mantener el sonido)."),
      fb("Rápido.", "Cuando ___ el invierno, siempre vamos a esquiar. (llegar)", "llega", "«Siempre vamos» indica costumbre → cuando + indicativo (llega). El subjuntivo «llegue» solo va con una vez futura."),
      fb("Rápido.", "Me voy antes de que ___ los atascos. (empezar)", "empiecen", "«Antes de que» siempre pide subjuntivo: los atascos aún no han empezado cuando me voy. Empezar diptonga (e → ie) y cambia z → c: empiecen."),
      fb("Rápido.", "No cuelgues hasta que te ___. (contestar, ellos)", "contesten", "Con una orden (no cuelgues), la respuesta todavía no ha llegado → hasta que + subjuntivo: contesten."),
      fb("Rápido.", "Aunque ___ mucho, no adelgaza. (correr, él — es un hecho)", "corre", "Sabemos que corre mucho: es un hecho admitido → aunque + indicativo (corre). «Corra» lo presentaría como una suposición."),
      fb("Rápido.", "Aunque ___ mucho, no adelgazará. (correr, él — hipótesis)", "corra", "Es una suposición sobre el futuro (aunque llegue a correr mucho) → aunque + subjuntivo: corra."),
      fb("Rápido.", "En cuanto ___ la puerta, entra el perro. (abrir, yo — siempre)", "abro", "«Siempre» marca un hábito → en cuanto + indicativo (abro). Con una sola vez futura diríamos «en cuanto abra la puerta, entrará»."),
      mc(
        "«Guárdalo bien para que nadie lo ___.»",
        ["encuentre", "encuentra", "encontrará", "encontró"],
        0,
        "«Para que» siempre lleva subjuntivo, porque expresa un objetivo aún no cumplido: encuentre. «Encuentra», «encontrará» y «encontró» son formas de indicativo y no pueden ir detrás de para que."
      ),
      toEs("Siempre salimos a pasear cuando se pone el sol.", "Mañana saldremos a pasear cuando se ponga el sol.", "Al pasar de la costumbre (siempre) a una sola vez futura (mañana), la principal va en futuro (saldremos) y cuando cambia a subjuntivo: se ponga.", ["Mañana vamos a salir a pasear cuando se ponga el sol.", "Mañana salimos a pasear cuando se ponga el sol."], "Cambia «siempre» por «mañana»."),
      toEs("Ayer me llamó antes de que salía de casa.", "Ayer me llamó antes de que saliera de casa.", "«Antes de que» lleva subjuntivo incluso en pasado, porque cuando me llamó yo aún no había salido: en pasado se usa el imperfecto de subjuntivo (saliera / saliese). «Salía» es indicativo y es el error.", ["Ayer me llamó antes de que saliese de casa."], "Corrige la frase."),
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
        "La regla: el verbo principal marca el tiempo",
        [
          "Recuerda la regla: para que, antes de que y sin que siempre llevan subjuntivo, pero el tiempo del subjuntivo depende del verbo principal. Principal en presente, futuro, imperativo o pretérito perfecto → presente de subjuntivo (venga). Principal en indefinido, imperfecto, pluscuamperfecto o condicional → imperfecto de subjuntivo (viniera).",
          "¿Por qué? Lo que expresa el subjuntivo ocurre después de la acción principal. Si esa acción está en el pasado, su «después» también queda en el pasado, y el imperfecto de subjuntivo es el que mira hacia adelante desde un momento pasado. Se forma desde ellos del indefinido: vinieron → viniera, oyeron → oyera, pudieron → pudiera.",
        ],
        [
          ["Te lo explico para que lo entiendas.", "I'm explaining it to you so that you understand it. (presente → entiendas)"],
          ["Te lo expliqué para que lo entendieras.", "I explained it to you so that you'd understand it. (indefinido → entendieras)"],
          ["Te he traído una manta para que no pases frío.", "I've brought you a blanket so you won't be cold. (pretérito perfecto → presente de subjuntivo)"],
          ["Nos fuimos antes de que empezara a llover.", "We left before it started to rain. (antes de que en pasado → empezara)"],
        ],
        [
          fb("Al pasado.", "Te llamo para que vengas. → Te llamé para que ___.", "vinieras", "«Para que» exige subjuntivo; con la principal en pasado (llamé), imperfecto: desde «vinieron», «vinieras»."),
          mc(
            "«Anoche los vecinos bajaron la música para que el bebé ___.»",
            ["durmiera", "duerma", "dormía", "durmió"],
            0,
            "Bajaron está en indefinido, así que para que va en imperfecto de subjuntivo: durmiera (de durmieron). «Duerma» iría con una principal en presente, y «dormía» y «durmió» son indicativo, imposible tras para que."
          ),
        ]
      ),
      sec(
        "El matiz: cuando el propósito sigue pendiente",
        "Si el propósito todavía está en el futuro desde hoy, el presente de subjuntivo también es posible después de un indefinido: «Te compré este diccionario para que lo uses en la universidad el año que viene». Si el propósito ya quedó en el pasado, solo vale el imperfecto: «…para que lo usaras aquel verano».",
        [
          ["Te compré este diccionario para que lo uses el año que viene.", "I bought you this dictionary so that you'll use it next year. (el propósito sigue abierto)"],
          ["Te compré un diccionario para que lo usaras aquel verano.", "I bought you a dictionary so that you'd use it that summer. (propósito ya pasado)"],
        ],
        [
          mc(
            "¿Qué frase es correcta?",
            ["Ayer te dejé las llaves para que pudieras entrar anoche.", "Ayer te dejé las llaves para que puedas entrar anoche.", "Ayer te dejé las llaves para que podías entrar anoche.", "Ayer te dejo las llaves para que pudieras entrar anoche."],
            0,
            "Anoche ya pasó: el propósito es pasado y pide imperfecto de subjuntivo (pudieras). «Puedas» solo valdría para un propósito aún pendiente, «podías» es indicativo y «ayer te dejo» mezcla presente con ayer."
          ),
        ]
      ),
    ],
    [
      fb("Al pasado.", "Me voy antes de que llegue el jefe. → Me fui antes de que ___ el jefe.", "llegara", "«Antes de que» siempre exige subjuntivo; en pasado, imperfecto: «llegara»."),
      fb("Al pasado.", "Hablo alto para que me oigan. → Hablé alto para que me ___.", "oyeran", "«Para que» exige subjuntivo; en pasado se forma desde «oyeron»: «oyeran»."),
      fb("Al pasado.", "Guardo el pastel para que no se lo coma el perro. → Guardé el pastel para que no se lo ___ el perro.", "comiera", "«Para que» exige subjuntivo; en pasado se forma desde «comieron»: «comiera»."),
      fb("Al pasado.", "Ahorramos para que los niños puedan estudiar. → El año pasado ahorramos para que los niños ___ estudiar.", "pudieran", "«Para que» exige subjuntivo; con «ahorramos» en pasado (el año pasado), imperfecto: «pudieran»."),
      fb("Al pasado.", "Lo hago sin que nadie me ayude. → Lo hice sin que nadie me ___.", "ayudara", "«Sin que» siempre exige subjuntivo; en pasado, imperfecto: «ayudara»."),
      fb("Al presente de subjuntivo.", "Salimos antes de que anocheciera. → Saldremos antes de que ___.", "anochezca", "Con la principal en futuro («saldremos»), «antes de que» va en presente de subjuntivo: «anochezca»."),
      mc(
        "«Mi madre me dejó una nota para que no ___ de la cita.»",
        ["me olvidara", "me olvide", "me olvidaba", "me olvidé"],
        0,
        "Con el verbo principal en pasado (dejó), para que va con imperfecto de subjuntivo: me olvidara. «Me olvide» iría con presente, y «me olvidaba» y «me olvidé» son indicativo."
      ),
      toEs("She left before anyone saw her.", "Se fue antes de que nadie la viera.", "Se fue (pasado) + antes de que → imperfecto de subjuntivo: viera. Tras antes de que, «nadie» tiene valor de «alguien».", ["Se marchó antes de que nadie la viera.", "Se fue antes de que alguien la viera."]),
      toEs(
        "Mis padres me dan dinero para que estudie en el extranjero.",
        "Mis padres me dieron dinero para que estudiara en el extranjero.",
        "Con la principal en indefinido (dieron), para que pasa al imperfecto de subjuntivo: estudiara (de estudiaron).",
        ["Mis padres me dieron dinero para que estudiase en el extranjero."],
        "Pasa la frase al pretérito indefinido."
      ),
      toEs(
        "Siempre apago el móvil antes de que empiece la película.",
        "Ayer apagué el móvil antes de que empezara la película.",
        "Antes de que sigue en subjuntivo, pero con apagué (pasado) pasa al imperfecto: empezara.",
        ["Ayer apagué el móvil antes de que empezase la película.", "Ayer apagué el celular antes de que empezara la película.", "Ayer apagué el móvil antes de que comenzara la película."],
        "Cambia «siempre» por «ayer»."
      ),
      toEs(
        "Te escribí para que no te preocuparas.",
        "Te escribo para que no te preocupes.",
        "Principal en presente (escribo) → presente de subjuntivo: no te preocupes.",
        ["Te escribo para que no te preocupes más."],
        "Pasa la frase al presente."
      ),
      toEs(
        "El profesor habló despacio para que todos lo entiendan.",
        "El profesor habló despacio para que todos lo entendieran.",
        "Habló está en indefinido y el propósito (entender la clase) ya pasó: imperfecto de subjuntivo, entendieran.",
        ["El profesor habló despacio para que todos lo entendiesen.", "La profesora habló despacio para que todos la entendieran."],
        "Corrige la frase."
      ),
      toEs(
        "Salí de la reunión sin que nadie se dé cuenta.",
        "Salí de la reunión sin que nadie se diera cuenta.",
        "Sin que + pasado (salí) → imperfecto de subjuntivo: se diera cuenta (de dieron).",
        ["Salí de la reunión sin que nadie se diese cuenta."],
        "Corrige la frase."
      ),
      toEs(
        "Ayer cerré las ventanas antes de que empezó a llover.",
        "Ayer cerré las ventanas antes de que empezara a llover.",
        "Antes de que nunca lleva indicativo, ni siquiera para un hecho pasado: imperfecto de subjuntivo, empezara.",
        ["Ayer cerré las ventanas antes de que empezase a llover.", "Ayer cerré las ventanas antes de que comenzara a llover."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla: escucha la conjunción y el tiempo",
        [
          "Recuerda la regla: para que, antes de que y sin que siempre van con subjuntivo. Cuando, en cuanto y hasta que van con subjuntivo si hablan del futuro y con indicativo si cuentan un hábito o un hecho pasado. Aunque lleva indicativo para un hecho que aceptas y subjuntivo para una posibilidad o algo que no importa.",
          "En el dictado, la terminación te da la pista: -e/-a «al revés» (llegues, termine, salga) es subjuntivo presente; -ra/-se (viniera, diese) es imperfecto de subjuntivo. Si oyes un futuro (-ré, -rá) justo después de cuando o en cuanto, lo has oído mal: ahí nunca va el futuro.",
        ],
        [
          ["En cuanto termine, te llamo.", "As soon as I finish, I'll call you. (futuro → termine)"],
          ["Cuando termino, siempre te llamo.", "When I finish, I always call you. (hábito → termino)"],
          ["Salió sin que lo viéramos.", "He left without us seeing him. (sin que en pasado → viéramos)"],
        ],
        [
          wo("Avísame cuando llegues al hotel.", "Instrucción para el futuro: cuando + presente de subjuntivo (llegues). «Cuando llegas» describiría una costumbre.", "Let me know when you get to the hotel."),
          { type: "dictation", audio: "Te esperaré hasta que salgas del trabajo.", explanation: "Hasta que + acción futura → presente de subjuntivo: salgas (salir → salg-). Ojo: «hasta» sin h al final y «salgas» con g." },
        ]
      ),
    ],
    [
      wo("Aunque no te guste, tienes que ir.", "Aunque + subjuntivo (guste): que te guste o no, no cambia nada.", "Even if you don't like it, you have to go."),
      wo("Te lo explico para que no te equivoques.", "Para que siempre lleva subjuntivo: equivoques (c → qu delante de e).", "I'm explaining it so you don't make a mistake."),
      wo("Nos iremos antes de que cierren el metro.", "Antes de que + subjuntivo siempre: cierren (e → ie).", "We'll leave before they close the metro."),
      wo("No descansaré hasta que lo encuentre.", "Hasta que + acción futura → subjuntivo: encuentre (o → ue).", "I won't rest until I find it."),
      wo("Lo hizo sin que nadie se diera cuenta.", "Sin que + principal en pasado → imperfecto de subjuntivo: se diera cuenta.", "He did it without anyone noticing."),
      toEs("As soon as they arrive, we'll start.", "En cuanto lleguen, empezaremos.", "«En cuanto» + acción futura exige subjuntivo: «lleguen».", ["En cuanto lleguen, empezamos.", "Tan pronto como lleguen, empezaremos."]),
      { type: "dictation", audio: "Aunque haga frío, saldremos a pasear.", explanation: "Aunque + posibilidad futura → subjuntivo: haga (con h y g). La principal va en futuro: saldremos." },
      { type: "dictation", audio: "Cuando era joven, trabajaba en un hotel.", explanation: "Hecho pasado y habitual: cuando + imperfecto de indicativo (era, trabajaba). Aquí no hay subjuntivo." },
      toEs(
        "Cuando llego a casa, me ducho.",
        "Cuando llegue a casa, me ducharé.",
        "Al pasar del hábito al futuro, cuando deja el indicativo (llego) y toma el presente de subjuntivo (llegue); la principal va en futuro.",
        ["Cuando llegue a casa, me voy a duchar.", "Cuando llegue a casa, voy a ducharme.", "Cuando llegue a casa, me ducho."],
        "Pasa la frase al futuro: hoy, no todos los días."
      ),
      toEs(
        "Te lo digo para que lo sepas.",
        "Te lo dije para que lo supieras.",
        "Principal en indefinido (dije) → imperfecto de subjuntivo: supieras (de supieron).",
        ["Te lo dije para que lo supieses."],
        "Pasa la frase al pretérito indefinido."
      ),
      toEs(
        "Avísame en cuanto sabrás algo.",
        "Avísame en cuanto sepas algo.",
        "Tras en cuanto nunca va el futuro: una acción que aún no ha pasado va en presente de subjuntivo, sepas.",
        ["Avísame tan pronto como sepas algo."],
        "Corrige la frase."
      ),
      toEs(
        "Salimos antes de que cierran el museo.",
        "Salimos antes de que cerraran el museo.",
        "Antes de que siempre va con subjuntivo; con salimos en pasado, imperfecto: cerraran. Si salimos fuera presente, sería «antes de que cierren».",
        ["Salimos antes de que cierren el museo.", "Salimos antes de que cerrasen el museo."],
        "Corrige la frase."
      ),
      toEs(
        "Cuando vengas ayer, yo no estaba en casa.",
        "Cuando viniste ayer, yo no estaba en casa.",
        "Ayer marca un hecho pasado: cuando + indicativo (viniste). El subjuntivo (vengas) solo sirve para una visita futura: «Cuando vengas mañana…».",
        ["Cuando viniste ayer, no estaba en casa."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-circuito-sin-que-con-tal",
    "Circuito: sin que, con tal de que, a menos que, en caso de que",
    "Aprenderás a usar sin que, con tal de que, a menos que y en caso de que con subjuntivo, en presente y en pasado.",
    "6 min",
    [
      sec(
        "La regla: condiciones y acciones que no ocurren",
        [
          "Recuerda la regla: sin que (without), con tal de que / siempre que (provided that), a menos que / a no ser que (unless) y en caso de que (in case) llevan siempre subjuntivo: presente si la principal está en presente o futuro, imperfecto si está en pasado o condicional.",
          "¿Por qué? Ninguna de ellas presenta un hecho: con tal de que y en caso de que plantean una condición todavía no cumplida, a menos que una excepción posible y sin que una acción que no llega a ocurrir. Dos trampas: siempre que + indicativo significa «cada vez que» (un hábito real), y por si, que expresa casi lo mismo que en caso de que, va con indicativo.",
        ],
        [
          ["Te lo presto con tal de que me lo devuelvas.", "I'll lend it to you as long as you give it back. (condición → devuelvas)"],
          ["Iremos a pie a menos que llueva.", "We'll walk unless it rains. (excepción posible → llueva)"],
          ["Salió sin que nadie lo viera.", "He left without anyone seeing him. (pasado → imperfecto de subjuntivo)"],
          ["Siempre que voy a Sevilla, como en el mismo bar.", "Whenever I go to Seville, I eat at the same bar. (siempre que = cada vez que → indicativo)"],
        ],
        [
          fb("Estación 1.", "Salió de casa sin que sus padres lo ___. (notar)", "notaran", "Sin que + principal en pasado (salió) → imperfecto de subjuntivo: notaran."),
          mc(
            "«Siempre que ___ a casa de mi abuela, me prepara croquetas.» (cada vez que voy)",
            ["voy", "vaya", "fuera", "iré"],
            0,
            "Aquí siempre que significa «cada vez que» y describe una costumbre real: indicativo, voy. Con «vaya» significaría «con tal de que vaya», «fuera» es imperfecto de subjuntivo y el futuro no va tras siempre que."
          ),
        ]
      ),
      sec(
        "Sin que o sin + infinitivo",
        "Sin que solo se usa cuando hay dos sujetos distintos: «Entró sin que lo oyéramos». Si el sujeto es el mismo, se usa sin + infinitivo: «Entró sin hacer ruido». Lo mismo pasa con para que / para.",
        [
          ["Se fue sin despedirse.", "He left without saying goodbye. (mismo sujeto → infinitivo)"],
          ["Se fue sin que nadie se despidiera de él.", "He left without anyone saying goodbye to him. (sujetos distintos → sin que)"],
        ],
        [
          mc(
            "«Marta terminó el examen ___.» (Marta no miró los apuntes)",
            ["sin mirar los apuntes", "sin que mirara los apuntes", "sin que mira los apuntes", "sin mira los apuntes"],
            0,
            "El sujeto es el mismo (Marta termina y Marta no mira): sin + infinitivo. «Sin que mirara» exigiría otro sujeto, «sin que mira» usa indicativo y «sin mira» no es español."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Entra sin que te ___ nadie. (ver)", "vea", "Sin que + principal en imperativo (entra) → presente de subjuntivo: vea."),
      fb("Estación 2.", "Te ayudo con tal de que me ___ a cenar. (invitar, tú)", "invites", "«Con tal de que» presenta una condición y siempre va con subjuntivo: invites."),
      fb("Estación 2.", "Puedes usar mi coche siempre que lo ___ limpio. (devolver)", "devuelvas", "Aquí siempre que = con tal de que (una condición), así que va con subjuntivo: devuelvas. Con indicativo significaría «cada vez que»."),
      fb("Estación 3.", "No iré a menos que ___ tú también. (ir)", "vayas", "A menos que + subjuntivo siempre; ir → vayas."),
      fb("Estación 3.", "Cenaremos fuera, a no ser que ___ muy tarde. (salir, nosotros)", "salgamos", "A no ser que = a menos que, siempre con subjuntivo: salgamos (salir → salg-)."),
      fb("Estación 4.", "Lleva un paraguas en caso de que ___. (llover)", "llueva", "En caso de que + subjuntivo: llueva. Con «por si» diríamos «por si llueve»."),
      mc(
        "«Te dejo mi portátil ___ me lo cuides.»",
        ["con tal de que", "aunque", "porque", "ya que"],
        0,
        "«Con tal de que» expresa una condición y pide subjuntivo: con tal de que me lo cuides. «Aunque» expresa concesión, y «porque» y «ya que» expresan causa (y pedirían indicativo)."
      ),
      toEs("Take my number in case you need something.", "Toma mi número por si necesitas algo.", "Por si + indicativo (necesitas) / en caso de que + subjuntivo (necesites): las dos versiones son correctas.", ["Toma mi número en caso de que necesites algo.", "Apunta mi número por si necesitas algo."]),
      toEs(
        "Te dejo la bici con tal de que me la devuelvas esta noche.",
        "Te dejé la bici con tal de que me la devolvieras esa noche.",
        "Con la principal en pasado (dejé), con tal de que pasa al imperfecto de subjuntivo: devolvieras (de devolvieron).",
        ["Te dejé la bici con tal de que me la devolvieras esta noche.", "Te dejé la bici con tal de que me la devolvieses esa noche.", "Te dejé la bicicleta con tal de que me la devolvieras esa noche."],
        "Pasa la frase al pasado: «Te dejé la bici…»."
      ),
      toEs(
        "Cenaremos en la terraza si no llueve.",
        "Cenaremos en la terraza a menos que llueva.",
        "A menos que ya contiene la negación (= si no), por eso el verbo va en positivo y en subjuntivo: llueva.",
        ["Cenaremos en la terraza a no ser que llueva."],
        "Reescribe con «a menos que»."
      ),
      toEs(
        "Llévate una chaqueta por si hace frío.",
        "Llévate una chaqueta en caso de que haga frío.",
        "Por si va con indicativo (hace); en caso de que, con subjuntivo (haga). El sentido no cambia.",
        ["Llévate una chaqueta en caso de que haga fresco."],
        "Cambia «por si» por «en caso de que»."
      ),
      toEs(
        "Te ayudo con la mudanza con tal de que me pagarás la gasolina.",
        "Te ayudo con la mudanza con tal de que me pagues la gasolina.",
        "Con tal de que + subjuntivo siempre: pagues. El futuro nunca va detrás de esta conjunción.",
        ["Te ayudo con la mudanza siempre que me pagues la gasolina.", "Te ayudaré con la mudanza con tal de que me pagues la gasolina."],
        "Corrige la frase."
      ),
      toEs(
        "Los niños salieron al jardín sin que sus padres los ven.",
        "Los niños salieron al jardín sin que sus padres los vieran.",
        "Sin que siempre lleva subjuntivo, y con salieron (pasado) en imperfecto: vieran.",
        ["Los niños salieron al jardín sin que sus padres los viesen."],
        "Corrige la frase."
      ),
      toEs(
        "No iré a la boda a menos que los novios me lo pedirán.",
        "No iré a la boda a menos que los novios me lo pidan.",
        "A menos que + presente de subjuntivo (pidan, de pedir: e → i), nunca futuro.",
        ["No iré a la boda a no ser que los novios me lo pidan."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla y lee la carta",
        [
          "Recuerda la regla: la madre escribe sobre el futuro de su hija, así que todas sus conjunciones van con presente de subjuntivo (cuando llegues, aunque haga, para que tengas, en cuanto puedas). Cuando la hija conteste contando lo que ya pasó, cuando y en cuanto pasarán al indicativo (cuando llegué) y para que, al imperfecto de subjuntivo (para que tuviera).",
          "«Hija: cuando llegues a Toronto, escríbenos. Aunque haga mucho frío, no te quedes encerrada. Te he metido dinero en la maleta para que tengas algo los primeros días. Y antes de que se me olvide: llama a tu tía en cuanto puedas.»",
        ],
        [
          ["Te he metido dinero para que tengas algo los primeros días.", "I've put money in so you have something for the first days. (perfecto → presente de subjuntivo)"],
          ["Cuando llegué, estaba nevando.", "When I arrived, it was snowing. (la respuesta: hecho pasado → indicativo)"],
        ],
        [
          fb("Completa.", "Cuando ___ a Toronto, escríbenos. (llegar)", "llegues", "La llegada es futura y la principal es un imperativo: cuando + presente de subjuntivo, llegues."),
          mc(
            "Según la carta, ¿cuándo tiene que llamar la hija a su tía?",
            ["En cuanto pueda.", "Antes de irse.", "Cuando haga frío.", "Los primeros días, sin falta."],
            0,
            "La carta dice «llama a tu tía en cuanto puedas»: en cuanto + subjuntivo (puedas) marca el primer momento posible en el futuro. «Antes de que se me olvide» se refiere a la madre, no a la llamada."
          ),
        ]
      ),
      sec(
        "La respuesta de la hija",
        "Un mes después, la hija contesta. Lo que pasó va en indicativo (cuando llegué, en cuanto salí); lo que su madre quería conseguir, en imperfecto de subjuntivo, porque el verbo principal está en pasado (me diste dinero para que no tuviera problemas).",
        [
          ["Me diste el dinero para que no tuviera problemas.", "You gave me the money so that I wouldn't have problems. (pasado → tuviera)"],
        ],
        [
          fb("La respuesta.", "En cuanto ___ del avión, noté el frío. (salir, yo)", "salí", "Hecho pasado y real: en cuanto + indicativo, salí. «Salga» solo serviría si todavía no hubiera salido."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque ___ mucho frío, no te quedes encerrada. (hacer)", "haga", "Aunque + subjuntivo: haga frío o no, el consejo es el mismo. «Hace» afirmaría que ya hace frío."),
      fb("Completa.", "…para que ___ algo los primeros días. (tener)", "tengas", "Para que siempre va con subjuntivo; con «he metido» (perfecto), presente: tengas."),
      fb("Completa.", "Antes de que se me ___: llama a tu tía. (olvidar)", "olvide", "Antes de que + subjuntivo siempre; la principal es un imperativo → presente: se me olvide."),
      fb("Completa.", "…en cuanto ___. (poder)", "puedas", "En cuanto + acción futura → presente de subjuntivo: puedas (o → ue)."),
      fb("La respuesta.", "Mamá: cuando ___ al aeropuerto, estaba nevando. (llegar, yo)", "llegué", "Es un hecho pasado: cuando + indicativo, llegué."),
      fb("La respuesta.", "Me diste el dinero para que no ___ problemas, y me vino muy bien. (tener, yo)", "tuviera", "Para que + principal en pasado (diste) → imperfecto de subjuntivo: tuviera."),
      toEs("I'll call you as soon as I have internet.", "Te llamaré en cuanto tenga internet.", "«En cuanto» + acción futura exige subjuntivo: «tenga».", ["Te llamo en cuanto tenga internet.", "Os llamaré en cuanto tenga internet."]),
      toEs(
        "Llama a tu tía en cuanto puedas.",
        "Mi madre me dijo que llamara a mi tía en cuanto pudiera.",
        "Al contarlo en pasado (me dijo), el imperativo pasa a imperfecto de subjuntivo (llamara) y en cuanto, que era futuro desde aquel momento, también: pudiera.",
        ["Mi madre me dijo que llamase a mi tía en cuanto pudiese.", "Mi madre me dijo que llamara a mi tía en cuanto pudiese.", "Mi mamá me dijo que llamara a mi tía en cuanto pudiera."],
        "Transforma en estilo indirecto: «Mi madre me dijo que…»."
      ),
      toEs(
        "Cuando llegues a Toronto, escríbenos.",
        "Mis padres me pidieron que les escribiera cuando llegara a Toronto.",
        "Pidieron (pasado) → imperfecto de subjuntivo en las dos partes: que les escribiera y cuando llegara (la llegada era futura en aquel momento).",
        ["Mis padres me pidieron que les escribiese cuando llegase a Toronto.", "Mis padres me pidieron que les escribiera en cuanto llegara a Toronto."],
        "Transforma en estilo indirecto: «Mis padres me pidieron que…»."
      ),
      toEs(
        "Te meto dinero en la maleta para que tengas algo.",
        "Mi madre me metió dinero en la maleta para que tuviera algo.",
        "Con la principal en indefinido (metió), para que pasa al imperfecto de subjuntivo: tuviera.",
        ["Mi madre me metió dinero en la maleta para que tuviese algo.", "Mi mamá me metió dinero en la maleta para que tuviera algo."],
        "Pasa la frase al pasado, desde la hija: «Mi madre me metió…»."
      ),
      toEs(
        "Mamá: en cuanto salga del avión, noté un frío horrible.",
        "Mamá: en cuanto salí del avión, noté un frío horrible.",
        "La hija cuenta un hecho pasado (noté): en cuanto + indicativo, salí. El subjuntivo (salga) es para lo que todavía no ha ocurrido.",
        ["Mamá: nada más salir del avión, noté un frío horrible."],
        "Corrige la frase."
      ),
      toEs(
        "La tía Rosa vino a buscarme para que no me pierda en el metro.",
        "La tía Rosa vino a buscarme para que no me perdiera en el metro.",
        "Vino está en pasado: para que va en imperfecto de subjuntivo, me perdiera.",
        ["La tía Rosa vino a buscarme para que no me perdiese en el metro."],
        "Corrige la frase."
      ),
      toEs(
        "Os escribiré en cuanto tendré internet en el piso.",
        "Os escribiré en cuanto tenga internet en el piso.",
        "En cuanto + acción futura → presente de subjuntivo (tenga), nunca futuro.",
        ["Les escribiré en cuanto tenga internet en el piso.", "Os escribiré en cuanto tenga internet en el departamento."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2d-corrige-conjunciones-pasado",
    "Corrige el párrafo: la secuencia en las adverbiales",
    "Corrige errores de modo y tiempo tras para que, antes de que, sin que, cuando, en cuanto y hasta que, según hablen del pasado o del futuro.",
    "6 min",
    [
      sec(
        "La regla para corregir",
        [
          "Recuerda la regla, en dos preguntas. 1) ¿La conjunción pide siempre subjuntivo? Para que, antes de que y sin que, sí; cuando, en cuanto y hasta que, solo si la acción todavía no había ocurrido. 2) ¿En qué tiempo está el verbo principal? Presente o futuro → presente de subjuntivo; pasado → imperfecto de subjuntivo.",
          "¿Por qué fallamos? En el relato en pasado es fácil arrastrar el presente de subjuntivo (para que no se preocupe) aunque la acción principal ya pasó. Y con cuando + hecho pasado sobra el subjuntivo: lo ocurrido es un hecho.",
          "«Ayer salí antes de que amanezca. Dejé una nota para que mi compañero no se preocupe. Volví a casa sin que nadie me vea. Esperé hasta que se durmieron todos.» Tres errores de secuencia; una frase está bien.",
        ],
        [
          ["Me fui de la fiesta antes de que empezara el karaoke.", "I left the party before the karaoke started. (pasado → empezara)"],
          ["Esperé hasta que cerraron la tienda.", "I waited until they closed the shop. (hecho pasado → indicativo)"],
          ["Esperaré hasta que cierren la tienda.", "I'll wait until they close the shop. (futuro → subjuntivo)"],
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
        ["Lo compré para que lo usaras.", "Lo compro para que lo uses.", "Lo compré hace un año para que lo uses aquel verano.", "Lo compré para que lo usabas."],
        [0, 1],
        "Pasado → imperfecto de subjuntivo (lo compré para que lo usaras); presente → presente (lo compro para que lo uses). «Para que lo uses aquel verano» rompe la secuencia, porque el propósito ya es pasado (si el propósito sigue pendiente, «lo compré para que lo uses» sí es posible), y «para que lo usabas» usa indicativo."
      ),
      toEs(
        "Ayer salí antes de que amaneciera.",
        "Mañana saldré antes de que amanezca.",
        "Con la principal en futuro (saldré), antes de que pasa al presente de subjuntivo: amanezca (amanecer → amanezc-).",
        ["Mañana voy a salir antes de que amanezca."],
        "Cambia «ayer» por «mañana»."
      ),
      toEs(
        "Siempre esperamos hasta que se duermen los niños.",
        "Anoche esperamos hasta que se durmieron los niños.",
        "Un hecho pasado concreto: hasta que + indicativo (se durmieron). El hábito presente también va en indicativo; solo el futuro pediría subjuntivo.",
        ["Anoche esperamos hasta que los niños se durmieron."],
        "Cambia «siempre» por «anoche»."
      ),
      toEs(
        "Escondo las llaves para que los niños no las encuentren.",
        "Escondí las llaves para que los niños no las encontraran.",
        "Al pasar escondo → escondí, el subjuntivo también retrocede: encuentren → encontraran.",
        ["Escondí las llaves para que los niños no las encontrasen."],
        "Pasa la frase al pretérito indefinido."
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
        "La regla: tres grados de realidad",
        [
          "Recuerda la regla: aunque + indicativo presenta un hecho que conoces y comunicas (aunque llueve = está lloviendo). Aunque + presente de subjuntivo presenta una posibilidad, o un hecho que no te importa discutir (aunque llueva = puede que llueva, da igual). Aunque + imperfecto de subjuntivo presenta algo muy improbable o contrario a la realidad (aunque lloviera = no va a llover / no llueve), y la principal va en condicional.",
          "¿Por qué? El modo indica cuánto se compromete el hablante con lo que dice. En los tres casos la decisión no cambia; cambia cómo vemos el obstáculo. Por eso el tiempo de la principal acompaña: saldré / salgo con llueve o llueva, saldría con lloviera.",
        ],
        [
          ["Aunque llueve, voy a correr.", "Although it's raining, I'm going running. (está lloviendo: hecho)"],
          ["Aunque llueva mañana, iremos a la playa.", "Even if it rains tomorrow, we'll go to the beach. (posible)"],
          ["Aunque me lo pidiera de rodillas, no volvería.", "Even if he begged me, I wouldn't go back. (improbable → condicional)"],
          ["Aunque sea tu jefe, no le permitas que te grite.", "Even though he's your boss, don't let him shout at you. (hecho conocido, pero no importa → subjuntivo)"],
        ],
        [
          mc(
            "Es imposible que me toque la lotería. «Aunque me ___ la lotería, seguiría trabajando.»",
            ["tocara", "toca", "toque", "tocó"],
            0,
            "Una hipótesis muy lejana (imposible que me toque) usa aunque + imperfecto de subjuntivo: aunque me tocara. «Toca» sería un hecho, «toque» una posibilidad real y «tocó» es pasado."
          ),
          mc(
            "Ana trabaja mucho, lo sabemos. «Aunque Ana ___ mucho, siempre tiene tiempo para sus amigos.»",
            ["trabaja", "trabajara", "trabajaría", "trabajará"],
            0,
            "Es un hecho conocido que se comunica: aunque + indicativo, trabaja. «Trabajara» lo presentaría como irreal y el condicional no va detrás de aunque."
          ),
        ]
      ),
    ],
    [
      mc("Está lloviendo ahora. «Aunque ___, voy a correr.»", ["llueve", "llueva", "lloviera", "llovió"], 0, "Está lloviendo ahora: es un hecho, así que aunque + indicativo, llueve. «Llueva» sería posible, «lloviera» hipotético y «llovió» pasado."),
      mc("Mañana puede haber tormenta. «Aunque ___, iremos de excursión.»", ["llueva", "llueve", "llovió", "llovía"], 0, "Quizá llueva mañana: es posible, así que aunque + presente de subjuntivo, llueva. «Llueve» sería un hecho, y «llovió» y «llovía» son pasado."),
      fb("Elige.", "Aunque ___ millonario, no me compraría un yate. (ser, yo — no lo soy)", "fuera", "No lo soy: hipótesis contraria a la realidad → aunque + imperfecto de subjuntivo (fuera), con la principal en condicional (compraría)."),
      fb("Elige.", "Aunque ___ poco dinero, vivimos bien. (tener, nosotros — es un hecho)", "tenemos", "Es un hecho que comunicamos: aunque + indicativo, tenemos."),
      fb("Elige.", "Aunque ___ el examen, tendrás que repetir las prácticas. (aprobar, tú — aún no se sabe)", "apruebes", "Todavía no se sabe: posibilidad → aunque + presente de subjuntivo, apruebes (o → ue). La principal va en futuro."),
      fb("Elige.", "Aunque ___ veinte años menos, no volvería a esa empresa. (tener, yo)", "tuviera", "Tener veinte años menos es imposible: aunque + imperfecto de subjuntivo (tuviera) con condicional (volvería)."),
      toEs("Even if you asked me a thousand times, I wouldn't tell you.", "Aunque me lo preguntaras mil veces, no te lo diría.", "«Aunque» + imperfecto de subjuntivo presenta una hipótesis poco probable.", ["Aunque me lo pidieras mil veces, no te lo diría.", "Aunque me lo preguntases mil veces, no te lo diría."]),
      toEs(
        "Aunque está nublado, vamos a la playa.",
        "Aunque estuviera nublado, iríamos a la playa.",
        "Para una hipótesis (ahora no está nublado), aunque pasa al imperfecto de subjuntivo (estuviera) y la principal al condicional (iríamos).",
        ["Aunque estuviese nublado, iríamos a la playa."],
        "Cambia a una hipótesis: hoy hace sol."
      ),
      toEs(
        "Aunque me lo pidas, no iré.",
        "Aunque me lo pidió, no fui.",
        "Contado como hecho pasado (te lo pidió de verdad), aunque va con indicativo: pidió; la principal también en indefinido (fui).",
        ["Aunque me lo pidió, no me fui."],
        "Pasa la frase al pasado: te lo pidió de verdad."
      ),
      toEs(
        "Aunque fuera rico, no dejaría de trabajar.",
        "Aunque soy rico, no dejo de trabajar.",
        "Si la riqueza es un hecho, aunque va con indicativo (soy) y la principal en presente (dejo): ya no hay hipótesis ni condicional.",
        ["Aunque soy rica, no dejo de trabajar."],
        "Cambia a un hecho real: eres rico."
      ),
      toEs(
        "Aunque tendría tiempo, no iría a esa reunión.",
        "Aunque tuviera tiempo, no iría a esa reunión.",
        "El condicional nunca va detrás de aunque: la hipótesis lejana se expresa con imperfecto de subjuntivo (tuviera) y el condicional queda en la principal (iría).",
        ["Aunque tuviese tiempo, no iría a esa reunión."],
        "Corrige la frase."
      ),
      toEs(
        "Aunque me ofrezcan el doble, no aceptaría ese puesto.",
        "Aunque me ofrecieran el doble, no aceptaría ese puesto.",
        "Con condicional en la principal (aceptaría), la hipótesis es lejana: imperfecto de subjuntivo, ofrecieran. El presente de subjuntivo iría con futuro (no aceptaré).",
        ["Aunque me ofreciesen el doble, no aceptaría ese puesto.", "Aunque me ofrezcan el doble, no aceptaré ese puesto."],
        "Corrige la frase."
      ),
      toEs(
        "No sé si vendrá, pero aunque viene, no le abriré la puerta.",
        "No sé si vendrá, pero aunque venga, no le abriré la puerta.",
        "«No sé si vendrá»: su llegada es solo una posibilidad, así que aunque va con presente de subjuntivo (venga). El indicativo afirmaría que viene.",
        ["No sé si vendrá, pero aunque venga, no le voy a abrir la puerta."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla: una orden mira al futuro",
        [
          "Recuerda la regla: unas instrucciones siempre hablan de lo que todavía no ha pasado. Por eso, con un imperativo en la principal, cuando, en cuanto y hasta que van en presente de subjuntivo (cuando llegues, dale…), igual que para que, antes de que y aunque (con el sentido de «da igual que»).",
          "Truco: la orden va en imperativo y la condición, en subjuntivo; nunca en futuro. «Cuando llegarás» es un error típico de quien traduce «when you get» pensando en el futuro.",
          "Nota para el cuidador: «Cuando llegues, dale de comer. Antes de que anochezca, sácalo a pasear. En cuanto vuelvas, cierra la puerta con llave. Si pasa algo, llámame para que vaya a casa.»",
        ],
        [
          ["Cuando terminéis de cenar, recoged la mesa.", "When you (all) finish dinner, clear the table. (vosotros: imperativo + subjuntivo)"],
          ["No le abra la puerta a nadie hasta que yo vuelva.", "Don't open the door to anyone until I get back. (usted)"],
          ["Déjale agua fresca aunque no la pida.", "Leave him fresh water even if he doesn't ask for it."],
        ],
        [
          fb("Paso 1.", "Cuando ___, dale de comer. (llegar, tú)", "llegues", "La orden mira al futuro: cuando + presente de subjuntivo, llegues (g → gu delante de e)."),
          mc(
            "«Riega las plantas en cuanto ___ el sol.»",
            ["se ponga", "se pone", "se pondrá", "se puso"],
            0,
            "Orden en imperativo + momento futuro: en cuanto + presente de subjuntivo, se ponga. «Se pone» sería un hábito, «se pondrá» es futuro (imposible tras en cuanto) y «se puso», pasado."
          ),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Antes de que ___, sácalo a pasear. (anochecer)", "anochezca", "Antes de que + subjuntivo siempre: anochezca (anochecer → anochezc-, como conocer → conozca)."),
      fb("Paso 3.", "En cuanto ___, cierra la puerta con llave. (volver, tú)", "vuelvas", "En cuanto + acción futura → presente de subjuntivo: vuelvas (o → ue)."),
      fb("Paso 4.", "Déjale la radio puesta para que no ___ solo. (sentirse)", "se sienta", "Para que + subjuntivo; sentirse → se sienta (e → ie). Hay dos sujetos (tú dejas, él se siente), por eso para que y no para + infinitivo."),
      fb("Paso 5.", "No le des galletas aunque te ___ con esos ojos. (mirar)", "mire", "Aunque + subjuntivo: que te mire así o no, la orden no cambia."),
      fb("Paso 6.", "Quédate con él hasta que se ___. (dormir)", "duerma", "Hasta que + acción futura → presente de subjuntivo: se duerma (o → ue)."),
      toEs("Walk him before it rains.", "Sácalo a pasear antes de que llueva.", "«Antes de que» exige siempre subjuntivo: «llueva».", ["Paséalo antes de que llueva.", "Sácalo antes de que llueva."]),
      toEs(
        "Cuando llegues, dale de comer.",
        "Cuando llegue, dele de comer.",
        "Con usted cambian el subjuntivo (llegue) y el imperativo (dele, con tilde porque lleva pronombre). La regla de cuando + subjuntivo no cambia.",
        ["Cuando usted llegue, dele de comer."],
        "Cambia a usted."
      ),
      toEs(
        "En cuanto vuelvas, cierra la puerta con llave.",
        "En cuanto volváis, cerrad la puerta con llave.",
        "Con vosotros: subjuntivo volváis (sin cambio de raíz en vosotros) e imperativo cerrad.",
        ["En cuanto volváis, cerrad con llave la puerta."],
        "Cambia a vosotros."
      ),
      toEs(
        "Ayer le puse un jersey al perro para que no pasara frío.",
        "Hoy ponle un jersey al perro para que no pase frío.",
        "Con un imperativo en la principal, para que va en presente de subjuntivo: pase (no pasara).",
        [],
        "Cambia a una instrucción para hoy: «Hoy ponle…»."
      ),
      toEs(
        "Cuando terminará de comer, dale la pastilla.",
        "Cuando termine de comer, dale la pastilla.",
        "Tras cuando nunca va el futuro: la acción futura va en presente de subjuntivo, termine.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Cepíllalo antes de que se mete en la cama.",
        "Cepíllalo antes de que se meta en la cama.",
        "Antes de que nunca va con indicativo: se meta (presente de subjuntivo, porque la principal es una orden).",
        [],
        "Corrige la frase."
      ),
      toEs(
        "No le des chocolate aunque te lo pide.",
        "No le des chocolate aunque te lo pida.",
        "Es una posibilidad que no cambia la orden: aunque + subjuntivo (pida, de pedir: e → i). Con indicativo afirmarías que ya te lo pide.",
        [],
        "Corrige la frase."
      ),
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
        "Recuerda la regla: dos direcciones",
        [
          "Recuerda la regla: cuando mira hacia atrás con indicativo y hacia adelante con subjuntivo. Para recuerdos y hábitos del pasado: cuando era, cuando vivíamos, cuando terminé (indicativo). Para tu futuro: cuando sea mayor, cuando tenga hijos (presente de subjuntivo, nunca futuro).",
          "¿Por qué? Lo que recuerdas es un hecho; lo que planeas todavía no lo es. Y si en un recuerdo aparece una finalidad (mis padres me compraban libros para que leyera), va en imperfecto de subjuntivo porque el verbo principal está en pasado.",
        ],
        [
          ["Cuando tenía ocho años, me rompí un brazo.", "When I was eight, I broke my arm. (recuerdo → indicativo)"],
          ["Cuando tenga hijos, les leeré cuentos.", "When I have children, I'll read them stories. (futuro → subjuntivo)"],
          ["Mis padres me compraban libros para que leyera.", "My parents bought me books so that I would read. (pasado + para que → leyera)"],
        ],
        [
          fb("Tu vida.", "Cuando ___ pequeño, vivía con mis abuelos. (ser)", "era", "Recuerdo de una etapa pasada: cuando + imperfecto de indicativo, era."),
          mc(
            "«Cuando ___ los cuarenta, quiero correr un maratón.»",
            ["cumpla", "cumplo", "cumpliré", "cumplí"],
            0,
            "Es un plan futuro: cuando + presente de subjuntivo, cumpla. «Cumplo» sería un hábito, «cumpliré» es futuro (imposible tras cuando) y «cumplí» habla del pasado."
          ),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Cuando ___ mayor, quiero tener un huerto. (ser)", "sea", "Hacia el futuro: cuando + presente de subjuntivo, sea."),
      fb("Tu vida.", "Mi abuela me contaba cuentos para que me ___. (dormir)", "durmiera", "Para que + principal en pasado (contaba) → imperfecto de subjuntivo: durmiera (o → u, como durmieron)."),
      fb("Tu vida.", "Cuando ___ el colegio, me fui a estudiar fuera. (terminar)", "terminé", "Hecho pasado: cuando + indicativo, terminé (indefinido, como me fui)."),
      fb("Tu vida.", "Cuando ___ la carrera, me tomaré un año libre. (terminar)", "termine", "Plan futuro: cuando + presente de subjuntivo, termine."),
      fb("Tu vida.", "Nunca salía de casa sin que mi madre me ___ un beso. (dar)", "diera", "Sin que siempre lleva subjuntivo; con salía (pasado) en imperfecto: diera."),
      toEs("When I have children, I'll teach them Spanish.", "Cuando tenga hijos, les enseñaré español.", "«Cuando» + acción futura exige subjuntivo: «tenga».", ["Cuando tenga hijos, les voy a enseñar español."]),
      { type: "speak", prompt: "Responde en voz alta: ¿qué querías ser cuando eras pequeño o pequeña? Empieza con «Cuando era pequeño…».", text: "Cuando era pequeño, quería ser bombero.", explanation: "Recuerdo de la infancia: cuando + imperfecto de indicativo (era) y otro imperfecto para el deseo de entonces (quería)." },
      { type: "speak", prompt: "Responde en voz alta: ¿qué harás cuando te jubiles? Empieza con «Cuando me jubile…».", text: "Cuando me jubile, viviré cerca del mar.", explanation: "Plan futuro: cuando + presente de subjuntivo (me jubile) y la principal en futuro (viviré)." },
      toEs(
        "Cuando era niña, tenía un perro.",
        "Cuando sea mayor, tendré un perro.",
        "Hacia el futuro, cuando deja el indicativo (era) y toma el presente de subjuntivo (sea); la principal pasa al futuro (tendré).",
        ["Cuando sea mayor, voy a tener un perro."],
        "Cambia la frase al futuro: «Cuando sea mayor…»."
      ),
      toEs(
        "Mi abuelo me lleva al río para que aprenda a pescar.",
        "Mi abuelo me llevaba al río para que aprendiera a pescar.",
        "Con la principal en imperfecto (llevaba), para que pasa al imperfecto de subjuntivo: aprendiera (de aprendieron).",
        ["Mi abuelo me llevaba al río para que aprendiese a pescar."],
        "Pasa la frase al pretérito imperfecto: era una costumbre de tu infancia."
      ),
      toEs(
        "Cuando sea mayor, quiero ser médica.",
        "Cuando era pequeña, quería ser médica.",
        "Al mirar atrás, cuando va con indicativo (era) y el deseo de entonces en imperfecto (quería).",
        ["Cuando era niña, quería ser médica."],
        "Cambia la frase a un recuerdo: «Cuando era pequeña…»."
      ),
      toEs(
        "Cuando sea pequeño, mi familia vivía en Bilbao.",
        "Cuando era pequeño, mi familia vivía en Bilbao.",
        "Es un recuerdo: cuando + imperfecto de indicativo (era). El subjuntivo (sea) solo mira al futuro.",
        ["Cuando era niño, mi familia vivía en Bilbao."],
        "Corrige la frase."
      ),
      toEs(
        "Cuando tendré nietos, les contaré mi vida.",
        "Cuando tenga nietos, les contaré mi vida.",
        "Tras cuando nunca va el futuro: tenga (presente de subjuntivo).",
        ["Cuando tenga nietos, les voy a contar mi vida."],
        "Corrige la frase."
      ),
      toEs(
        "Mi madre me dejaba la luz encendida para que no tengo miedo.",
        "Mi madre me dejaba la luz encendida para que no tuviera miedo.",
        "Para que siempre lleva subjuntivo; con dejaba (pasado), en imperfecto: tuviera.",
        ["Mi madre me dejaba la luz encendida para que no tuviese miedo.", "Mi mamá me dejaba la luz encendida para que no tuviera miedo."],
        "Corrige la frase."
      ),
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
        "La regla: el mismo sentido, distinto modo",
        [
          "Recuerda la regla: para prevenir algo tienes dos fórmulas con casi el mismo significado. Por si + indicativo (por si hace frío) y en caso de que + subjuntivo (en caso de que haga frío).",
          "¿Por qué? Por si contiene si, y el si condicional nunca va con presente de subjuntivo: «por si haga» es imposible. En caso de que funciona como las demás conjunciones de condición (con tal de que, a menos que) y pide siempre subjuntivo. En pasado, por si admite imperfecto de indicativo o de subjuntivo (por si llovía / por si lloviera), y en caso de que, imperfecto de subjuntivo (en caso de que lloviera).",
        ],
        [
          ["Llévate dinero por si lo necesitas.", "Take money in case you need it. (por si → indicativo)"],
          ["Llévate dinero en caso de que lo necesites.", "Take money in case you need it. (en caso de que → subjuntivo)"],
          ["Cogí un jersey por si refrescaba.", "I took a jumper in case it got cooler. (pasado: por si + imperfecto)"],
        ],
        [
          fb("Par.", "Compra pan por si ___ visita. (venir)", "viene", "Por si + indicativo: viene. «Venga» solo iría con en caso de que."),
          mc(
            "«Apunta la dirección ___ se te olvide.»",
            ["en caso de que", "por si", "porque", "ya que"],
            0,
            "Se te olvide es subjuntivo, así que solo encaja en caso de que. Por si pediría indicativo (por si se te olvida), y porque y ya que expresan causa, no prevención."
          ),
        ]
      ),
    ],
    [
      fb("Par.", "Compra pan en caso de que ___ visita. (venir)", "venga", "En caso de que + subjuntivo: venga (venir → veng-)."),
      fb("Par.", "Te dejo mi número por si ___ algún problema. (tener, tú)", "tienes", "Por si + indicativo: tienes."),
      fb("Par.", "Te dejo mi número en caso de que ___ algún problema. (tener, tú)", "tengas", "En caso de que + subjuntivo: tengas."),
      fb("Par.", "Guarda el recibo por si ___ devolverlo. (querer, tú)", "quieres", "Por si + indicativo: quieres."),
      fb("Par.", "Guarda el recibo en caso de que ___ devolverlo. (querer, tú)", "quieras", "En caso de que + subjuntivo: quieras."),
      mc(
        "«Lleva el cargador ___ se acaba la batería.»",
        ["por si", "en caso de que", "para que", "antes de que"],
        0,
        "«Por si» va con indicativo: por si se acaba la batería. «En caso de que» pediría subjuntivo (se acabe), «para que» expresa finalidad y «antes de que» también pediría subjuntivo."
      ),
      toEs("I'll leave the door open in case you arrive late.", "Dejaré la puerta abierta por si llegas tarde.", "«Por si» va con indicativo («por si llegas»); «en caso de que» va con subjuntivo («en caso de que llegues»).", ["Dejaré la puerta abierta en caso de que llegues tarde.", "Dejo la puerta abierta por si llegas tarde."]),
      toEs(
        "Lleva una linterna por si se va la luz.",
        "Lleva una linterna en caso de que se vaya la luz.",
        "Al cambiar a en caso de que, el verbo pasa al subjuntivo: se va → se vaya.",
        [],
        "Cambia «por si» por «en caso de que»."
      ),
      toEs(
        "Reserva mesa en caso de que vengan tus primos.",
        "Reserva mesa por si vienen tus primos.",
        "Con por si el verbo vuelve al indicativo: vengan → vienen.",
        [],
        "Cambia «en caso de que» por «por si»."
      ),
      toEs(
        "Me llevo el paraguas por si llueve.",
        "Me llevé el paraguas por si llovía.",
        "En pasado, por si va con imperfecto: llovía (indicativo) o lloviera (subjuntivo).",
        ["Me llevé el paraguas por si lloviera."],
        "Pasa la frase al pasado: «Me llevé el paraguas…»."
      ),
      toEs(
        "Ponte crema por si haga sol en la montaña.",
        "Ponte crema por si hace sol en la montaña.",
        "Por si nunca va con presente de subjuntivo: hace (indicativo). Con subjuntivo hay que cambiar de fórmula: en caso de que haga sol.",
        ["Ponte crema en caso de que haga sol en la montaña."],
        "Corrige la frase."
      ),
      toEs(
        "Deja la llave al vecino en caso de que vienen los del gas.",
        "Deja la llave al vecino en caso de que vengan los del gas.",
        "En caso de que pide siempre subjuntivo: vengan.",
        ["Deja la llave al vecino por si vienen los del gas.", "Déjale la llave al vecino en caso de que vengan los del gas."],
        "Corrige la frase."
      ),
      toEs(
        "Te dejo algo de comida por si tengas hambre esta noche.",
        "Te dejo algo de comida por si tienes hambre esta noche.",
        "Por si + indicativo: tienes. «Tengas» solo es posible con en caso de que.",
        ["Te dejo algo de comida en caso de que tengas hambre esta noche."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla y lee el correo",
        [
          "Recuerda la regla: en un correo de trabajo se mezclan plazos (en cuanto, antes de que), condiciones (a menos que, con tal de que), finalidades (para que) y concesiones (aunque). Lo que está por hacer va en presente de subjuntivo; lo que ya pasó, con cuando o en cuanto, en indicativo; y si el verbo principal está en pasado, para que y antes de que van en imperfecto de subjuntivo.",
          "«Equipo: en cuanto reciban los datos, preparen el informe. Necesito que lo tengan antes de que empiece la reunión. Aunque haya problemas técnicos, no retrasen la entrega. Les mando la plantilla para que no pierdan tiempo. La última vez, cuando entregaron tarde, perdimos al cliente.»",
        ],
        [
          ["Les adjunto el contrato para que lo revisen.", "I'm attaching the contract so that you can review it. (para que → presente de subjuntivo)"],
          ["Cuando entregaron tarde, perdimos al cliente.", "When you delivered late, we lost the client. (hecho pasado → indicativo)"],
          ["Les pedí los datos para que tuvieran tiempo de revisarlos.", "I asked you for the data so you'd have time to review it. (pasado → tuvieran)"],
        ],
        [
          fb("Completa.", "En cuanto ___ los datos, preparen el informe. (recibir, ustedes)", "reciban", "Todavía no los han recibido: en cuanto + presente de subjuntivo, reciban."),
          mc(
            "«Pueden trabajar desde casa el viernes, ___ estén conectados a las nueve.»",
            ["siempre que", "porque", "aunque", "ya que"],
            0,
            "Es una condición: siempre que (= con tal de que) + subjuntivo, estén. «Porque» y «ya que» dan una causa y pedirían indicativo; «aunque» presentaría un obstáculo, no una condición."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "…antes de que ___ la reunión. (empezar)", "empiece", "Antes de que + subjuntivo siempre: empiece (e → ie; z → c delante de e)."),
      fb("Completa.", "Aunque ___ problemas técnicos, no retrasen la entrega. (haber)", "haya", "Aunque + subjuntivo: haya problemas o no, la orden es la misma."),
      fb("Completa.", "Les mando la plantilla para que no ___ tiempo. (perder)", "pierdan", "Para que + subjuntivo; perder cambia e → ie: pierdan."),
      fb("Completa.", "La última vez, cuando ___ tarde, perdimos al cliente. (entregar, ustedes)", "entregaron", "Hecho pasado: cuando + indicativo, entregaron."),
      fb("Completa.", "El mes pasado les pedí los datos para que ___ tiempo de revisarlos. (tener)", "tuvieran", "Para que + principal en pasado (pedí) → imperfecto de subjuntivo: tuvieran."),
      mc(
        "«No envíen nada a menos que yo lo ___.»",
        ["apruebe", "apruebo", "aprobaré", "aprobé"],
        0,
        "«A menos que» siempre pide subjuntivo: a menos que yo lo apruebe. «Apruebo», «aprobaré» y «aprobé» son indicativo."
      ),
      toEs("Call me when you finish, even if it's late.", "Llámame cuando termines, aunque sea tarde.", "«Cuando» con valor futuro y «aunque» con una posibilidad van en subjuntivo: «termines», «sea».", ["Llámame cuando acabes, aunque sea tarde."]),
      toEs(
        "En cuanto reciban los datos, preparen el informe.",
        "En cuanto recibáis los datos, preparad el informe.",
        "Con vosotros cambian el subjuntivo (recibáis) y el imperativo (preparad); en cuanto sigue en subjuntivo porque la acción es futura.",
        [],
        "Cambia de ustedes a vosotros."
      ),
      toEs(
        "Les mando la plantilla para que no pierdan tiempo.",
        "Les mandé la plantilla para que no perdieran tiempo.",
        "Con la principal en indefinido (mandé), para que pasa al imperfecto de subjuntivo: perdieran.",
        ["Les mandé la plantilla para que no perdiesen tiempo."],
        "Pasa la frase al pretérito indefinido."
      ),
      toEs(
        "Cuando el cliente firma, celebramos con una comida.",
        "Cuando el cliente firme, celebraremos con una comida.",
        "Del hábito al plan: cuando pasa del indicativo (firma) al presente de subjuntivo (firme) y la principal al futuro.",
        ["Cuando el cliente firme, vamos a celebrarlo con una comida.", "Cuando el cliente firme, lo celebraremos con una comida.", "Cuando la clienta firme, celebraremos con una comida."],
        "Pasa la frase al futuro: el cliente aún no ha firmado."
      ),
      toEs(
        "Necesito el informe antes de que empieza la reunión.",
        "Necesito el informe antes de que empiece la reunión.",
        "Antes de que nunca va con indicativo: empiece (presente de subjuntivo, porque necesito está en presente).",
        ["Necesito el informe antes de que comience la reunión."],
        "Corrige la frase."
      ),
      toEs(
        "El año pasado, cuando nos cambien el programa, perdimos dos semanas.",
        "El año pasado, cuando nos cambiaron el programa, perdimos dos semanas.",
        "Es un hecho pasado (el año pasado, perdimos): cuando + indicativo, cambiaron.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Les mandé la plantilla para que no pierdan tiempo en el informe de ayer.",
        "Les mandé la plantilla para que no perdieran tiempo en el informe de ayer.",
        "El informe de ayer ya pasó: con mandé, para que va en imperfecto de subjuntivo (perdieran).",
        ["Les mandé la plantilla para que no perdiesen tiempo en el informe de ayer."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla: mira el verbo principal",
        [
          "Recuerda la regla: principal en presente, futuro, imperativo o pretérito perfecto → presente de subjuntivo (para que lo recuerdes). Principal en indefinido, imperfecto o condicional → imperfecto de subjuntivo (para que lo recordaras).",
          "¿Por qué el condicional va con el imperfecto? Porque el condicional es un «futuro visto desde el pasado» o una hipótesis: saldría contigo a menos que tuviera que trabajar. El presente de subjuntivo queda para lo que todavía es posible desde hoy: saldré contigo a menos que tenga que trabajar.",
        ],
        [
          ["Lo repetiré para que lo recuerdes.", "I'll repeat it so you remember. (futuro → recuerdes)"],
          ["Lo repetí para que lo recordaras.", "I repeated it so you'd remember. (indefinido → recordaras)"],
          ["Te ayudaría con tal de que me lo pidieras.", "I'd help you as long as you asked me. (condicional → pidieras)"],
        ],
        [
          fb("Rápido.", "Lo apunté para que no se me ___. (olvidar)", "olvidara", "Apunté (indefinido) → imperfecto de subjuntivo: olvidara."),
          mc(
            "«Te he dejado la cena en el horno para que no ___ que cocinar.»",
            ["tengas", "tuvieras", "tienes", "tendrás"],
            0,
            "El pretérito perfecto (he dejado) se siente cerca del presente y pide presente de subjuntivo: tengas. «Tuvieras» iría con un indefinido, y «tienes» y «tendrás» son indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Lo apunto para que no se me ___. (olvidar)", "olvide", "Apunto (presente) → presente de subjuntivo: olvide."),
      fb("Rápido.", "Nos fuimos antes de que ___ la tormenta. (empezar)", "empezara", "Nos fuimos (indefinido) → imperfecto de subjuntivo: empezara."),
      fb("Rápido.", "Vámonos antes de que ___ la tormenta. (empezar)", "empiece", "Vámonos es un imperativo → presente de subjuntivo: empiece."),
      fb("Rápido.", "Me prestó el coche con tal de que se lo ___ lleno. (devolver, yo)", "devolviera", "Prestó (indefinido) → imperfecto de subjuntivo: devolviera."),
      fb("Rápido.", "Te presto el coche con tal de que me lo ___ lleno. (devolver, tú)", "devuelvas", "Presto (presente) → presente de subjuntivo: devuelvas."),
      fb("Rápido.", "Saldría contigo a menos que ___ que trabajar. (tener, yo)", "tuviera", "Condicional (saldría) → imperfecto de subjuntivo: tuviera."),
      fb("Rápido.", "Saldré contigo a menos que ___ que trabajar. (tener, yo)", "tenga", "Futuro (saldré) → presente de subjuntivo: tenga."),
      mc(
        "«Entró sin que ___ nadie.»",
        ["lo oyera", "lo oiga", "lo oyó", "lo oía"],
        0,
        "«Sin que» siempre pide subjuntivo; con el verbo en pasado (entró), imperfecto: sin que lo oyera. «Oiga» iría con presente, y «oyó» y «oía» son indicativo."
      ),
      toEs(
        "Te llamo para que me cuentes las novedades.",
        "Te llamé para que me contaras las novedades.",
        "Llamé (indefinido) → imperfecto de subjuntivo: contaras (de contaron).",
        ["Te llamé para que me contases las novedades."],
        "Pasa la frase al pretérito indefinido."
      ),
      toEs(
        "Iré a la reunión a menos que me necesiten en la oficina.",
        "Iría a la reunión a menos que me necesitaran en la oficina.",
        "Con la principal en condicional (iría), a menos que pasa al imperfecto de subjuntivo: necesitaran.",
        ["Iría a la reunión a menos que me necesitasen en la oficina."],
        "Cambia «iré» por «iría»."
      ),
      toEs(
        "Mis abuelos ahorraban para que sus hijos estudiaran.",
        "Mis abuelos ahorran para que sus nietos estudien.",
        "Ahorran (presente) → presente de subjuntivo: estudien.",
        [],
        "Pasa la frase al presente y cambia «hijos» por «nietos»."
      ),
      toEs(
        "Ayer me fui a casa antes de que empiece el partido.",
        "Ayer me fui a casa antes de que empezara el partido.",
        "Me fui (indefinido) → imperfecto de subjuntivo: empezara. El presente de subjuntivo no encaja con un hecho de ayer.",
        ["Ayer me fui a casa antes de que empezase el partido.", "Ayer me fui a casa antes de que comenzara el partido."],
        "Corrige la frase."
      ),
      toEs(
        "Te compraría un móvil nuevo con tal de que lo cuides.",
        "Te compraría un móvil nuevo con tal de que lo cuidaras.",
        "Con condicional en la principal (compraría), con tal de que va en imperfecto de subjuntivo: cuidaras.",
        ["Te compraría un móvil nuevo con tal de que lo cuidases.", "Te compraría un celular nuevo con tal de que lo cuidaras.", "Te compraré un móvil nuevo con tal de que lo cuides."],
        "Corrige la frase."
      ),
      toEs(
        "Lo escribo en la pizarra para que nadie lo olvidara.",
        "Lo escribo en la pizarra para que nadie lo olvide.",
        "Escribo (presente) → presente de subjuntivo: olvide.",
        ["Lo escribí en la pizarra para que nadie lo olvidara."],
        "Corrige la frase."
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
        [
          "Recuerda la regla: ellos del indefinido, quita -ron, añade -ra, -ras, -ra, -ramos, -rais, -ran: hablaron → hablara; comieron → comiera; tuvieron → tuviera; fueron → fuera; dijeron → dijera. Nosotros lleva tilde: habláramos, tuviéramos.",
          "¿Por qué funciona con todos los verbos? Porque la raíz se toma del pretérito, que ya contiene la irregularidad: si el pretérito cambia la vocal (pidieron, durmieron), pierde la i (dijeron, trajeron) o lleva y (leyeron, oyeron), el imperfecto de subjuntivo lo copia. El error típico es partir del infinitivo (✗ tenieran, ✗ diciera). La tilde de nosotros cae siempre en la vocal antes de -ramos: fuéramos, pudiéramos.",
        ],
        [
          ["Quería que vinieras.", "I wanted you to come. (vinieron → viniera)"],
          ["Nos pidió que fuéramos puntuales.", "He asked us to be on time. (fueron → fuéramos, con tilde)"],
          ["Me pidieron que no lo repitiera.", "They asked me not to repeat it. (repitieron → repitiera: e → i)"],
        ],
        [
          fb("Forma.", "pusieron → que yo ___", "pusiera", "El imperfecto de subjuntivo sale de la 3.ª plural del pretérito: pusieron → pusie- + ra. Nunca «poniera»: la raíz irregular pus- viene del pretérito."),
          mc(
            "Construyeron → que ellos ___",
            ["construyeran", "construieran", "construían", "construyan"],
            0,
            "Construyeron → construye- + ran: construyeran, con la y del pretérito. «Construieran» no existe, «construían» es imperfecto de indicativo y «construyan» es presente de subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Forma.", "hicieron → que tú ___", "hicieras", "Hicieron → hicie- + ras: hicieras. La raíz hic- es la del pretérito, no la de hacer."),
      fb("Forma.", "estuvieron → que ella ___", "estuviera", "Estuvieron → estuvie- + ra: estuviera (la irregularidad -uv- viene del pretérito)."),
      fb("Forma.", "pudieron → que nosotros ___", "pudiéramos", "Pudieron → pudié- + ramos; en nosotros se añade tilde en la vocal anterior a -ramos: pudiéramos."),
      fb("Forma.", "trajeron → que ellos ___", "trajeran", "Trajeron → traje- + ran: trajeran (sin i, porque el pretérito es trajeron)."),
      fb("Forma.", "durmieron → que vosotros ___", "durmierais", "Durmieron (con o→u) → durmie- + rais: durmierais. La u del pretérito se conserva."),
      fb("Forma.", "leyeron → que usted ___", "leyera", "Leyeron → leye- + ra: leyera (la y se mantiene)."),
      fb("Forma.", "supieron → que yo ___", "supiera", "Supieron → supie- + ra: supiera. Yo y él/ella coinciden: el contexto aclara quién."),
      mt(
        "Relaciona el indefinido (ellos) con el imperfecto de subjuntivo (yo).",
        [
          ["quisieron", "quisiera"],
          ["vinieron", "viniera"],
          ["dieron", "diera"],
          ["condujeron", "condujera"],
        ],
        "Quita -ron, añade -ra: la irregularidad de cada pretérito (quis-, vin-, condujo sin i) pasa intacta al subjuntivo."
      ),
      toEs("Quería que me ayudaran y que me dicieran qué hacer.", "Quería que me ayudaran y que me dijeran qué hacer.", "La raíz sale del pretérito dijeron (con j y sin i), no del infinitivo decir: dijeran. «Dicieran» es el error de partir del infinitivo.", [], "Corrige la frase."),
      toEs("Quiero que vengáis y que traigáis algo de beber.", "Quería que vinierais y que trajerais algo de beber.", "Con el verbo principal en pasado, los dos subjuntivos pasan al imperfecto, desde el pretérito: vinieron → vinierais, trajeron → trajerais.", ["Quería que vinieseis y que trajeseis algo de beber."], "Pasa la frase al pasado (quería)."),
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
        [
          "Recuerda la regla: presente, futuro o mandato → presente de subjuntivo: Quiero que vengas. Pasado (indefinido, imperfecto) o condicional → imperfecto de subjuntivo: Quería que vinieras. Me pidió que viniera.",
          "¿Por qué? El verbo principal decide desde qué momento miramos. Si el deseo o el consejo es de ahora, lo deseado se sitúa en presente o futuro; si el deseo fue en el pasado, lo deseado también pertenece a ese pasado. El condicional (sería mejor, me gustaría) aleja la idea de la realidad y funciona como un pasado. Mezclar los planos (✗ quería que vengas) suena tan raro como en inglés «I wanted that you come».",
        ],
        [
          ["Te pido que me ayudes.", "I'm asking you to help me. (presente → ayudes)"],
          ["Te pedí que me ayudaras.", "I asked you to help me. (pasado → ayudaras)"],
          ["Me gustaría que me ayudaras.", "I'd like you to help me. (condicional → ayudaras)"],
        ],
        [
          fb("Completa el par con el presente de subjuntivo.", "Espero que ___ bien. (estar, tú) → Esperaba que estuvieras bien.", "estés", "Con «espero» (presente), la subordinada va en presente de subjuntivo: estés; con «esperaba», estuvieras."),
          mc(
            "«Nos dirán que ___ en la puerta.» (esperar, nosotros)",
            ["esperemos", "esperáramos", "esperamos", "esperaríamos"],
            0,
            "Dirán (futuro, como orden) → presente de subjuntivo: esperemos. «Esperáramos» iría con un pasado (nos dijeron), «esperamos» es indicativo (sería información, no una orden) y «esperaríamos» es condicional."
          ),
        ]
      ),
    ],
    [
      fb("Par A.", "Mis padres quieren que ___ Derecho. (estudiar, yo)", "estudie", "Quieren (presente) → presente de subjuntivo: estudie."),
      fb("Par B.", "Mis padres querían que ___ Derecho. (estudiar, yo)", "estudiara", "Querían (pasado) → imperfecto de subjuntivo: estudiaron → estudiara."),
      fb("Par A.", "El médico me recomienda que ___ menos sal. (tomar)", "tome", "Recomienda (presente) → presente de subjuntivo: tome."),
      fb("Par B.", "El médico me recomendó que ___ menos sal. (tomar)", "tomara", "Recomendó (pasado) → imperfecto de subjuntivo: tomaron → tomara."),
      fb("Par A.", "Me alegra que ___ a verme. (venir, tú)", "vengas", "Alegra (presente) → presente de subjuntivo: vengas (de vengo)."),
      fb("Par B.", "Me alegró que ___ a verme. (venir, tú)", "vinieras", "Alegró (pasado) → imperfecto de subjuntivo, con la raíz del pretérito vinieron: vinieras."),
      mc(
        "«No creía que ___ tan tarde.»",
        ["fuera", "sea", "es", "era"],
        0,
        "«No creía que» (pasado + duda) pide imperfecto de subjuntivo: fuera. «Sea» iría con «no creo», y «es» y «era» son indicativo."
      ),
      toEs("She asked me to close the door.", "Me pidió que cerrara la puerta.", "«Pedir que» exige subjuntivo; con «pidió» en pasado, imperfecto: «cerrara».", ["Me pidió que cerrase la puerta."]),
      toEs("Mi jefe quería que vuelva a la oficina el lunes.", "Mi jefe quería que volviera a la oficina el lunes.", "Quería (pasado) arrastra el imperfecto de subjuntivo: volvieron → volviera. «Vuelva» es presente y rompe la secuencia.", ["Mi jefe quería que volviese a la oficina el lunes."], "Corrige la frase."),
      toEs("Os prohíbo que salgáis de noche.", "Os prohibí que salierais de noche.", "Al pasar el principal al pasado (prohibí), el subjuntivo pasa al imperfecto: salieron → salierais.", ["Os prohibí que salieseis de noche."], "Pasa la frase al pasado (os prohibí)."),
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
        [
          "Recuerda la regla: el imperfecto de subjuntivo hereda la raíz de «ellos» del indefinido, así que los irregulares se agrupan por la letra de esa raíz. u: tuviera, estuviera, pudiera, supiera, pusiera, hubiera. i: hiciera, quisiera, viniera. j: dijera, trajera, condujera (sin i después de la j). y: leyera, oyera, construyera. ser/ir: fuera.",
          "¿Por qué agruparlos así? Porque si recuerdas el pretérito ya tienes el subjuntivo: no hay irregularidades nuevas. Los dos errores típicos son partir del infinitivo (✗ sabiera, ✗ teniera, ✗ hacera) y añadir una i después de la j (✗ dijiera, ✗ trajiera). Recuerda la tilde en nosotros: tuviéramos, dijéramos.",
        ],
        [
          ["Ojalá tuviera más tiempo.", "I wish I had more time. (tuvieron → tuviera)"],
          ["Me pidió que le trajera un café.", "She asked me to bring her a coffee. (trajeron → trajera, sin i)"],
          ["No creía que lo oyeran.", "I didn't think they heard it. (oyeron → oyeran, con y)"],
        ],
        [
          fb("Estación u.", "Me sorprendió que ___ la respuesta. (saber, él)", "supiera", "Supieron → supie- + ra: supiera. Nunca «sabiera»: la raíz sup- viene del pretérito."),
          mc(
            "«Les pedí que ___ despacio.» (conducir, ellos)",
            ["condujeran", "condujieran", "conducieran", "conduzcan"],
            0,
            "Conducir → condujeron (sin i tras la j) → condujeran. «Condujieran» añade una i que no existe, «conducieran» parte del infinitivo y «conduzcan» es presente de subjuntivo, que no concuerda con «pedí»."
          ),
        ]
      ),
    ],
    [
      fb("Estación u.", "No había nadie que ___ ayudarnos. (poder)", "pudiera", "Pudieron → pudiera (raíz pud-, con u)."),
      fb("Estación u.", "Le pedí que ___ la mesa. (poner)", "pusiera", "Pusieron → pusiera (raíz pus-, con u)."),
      fb("Estación i.", "Queríamos que ___ buen tiempo. (hacer)", "hiciera", "Hicieron → hiciera (raíz hic-, con i)."),
      fb("Estación i.", "Me extrañó que no ___ venir. (querer, ella)", "quisiera", "Quisieron → quisiera (raíz quis-, con i)."),
      fb("Estación j.", "Nos pidieron que ___ algo de postre. (traer, nosotros)", "trajéramos", "Trajeron → traje- + ramos, con tilde en nosotros: trajéramos (sin i tras la j)."),
      fb("Estación j.", "Era importante que nadie ___ nada. (decir)", "dijera", "Dijeron → dijera (raíz dij-, sin i después de la j)."),
      fb("Estación y.", "Me alegró que ___ mi libro. (leer, ellos)", "leyeran", "Leyeron → leyeran: la y del pretérito se mantiene."),
      mc(
        "«Era necesario que ___ más paciente.» (ser, tú)",
        ["fueras", "fuiste", "seas", "eras"],
        0,
        "«Era necesario» está en pasado: imperfecto de subjuntivo, formado desde fueron: fueras. «Fuiste» y «eras» son indicativo, y «seas» iría con «es necesario»."
      ),
      toEs("Ojalá sabiera tocar la guitarra.", "Ojalá supiera tocar la guitarra.", "La raíz se toma del pretérito supieron, no del infinitivo saber: supiera. «Sabiera» no existe.", ["Ojalá supiese tocar la guitarra."], "Corrige la frase."),
      toEs("Quiero que hagas la cena y que pongas la mesa.", "Quería que hicieras la cena y que pusieras la mesa.", "Con quería (pasado) los dos verbos pasan al imperfecto de subjuntivo, con las raíces del pretérito: hicieron → hicieras, pusieron → pusieras.", ["Quería que hicieses la cena y que pusieses la mesa."], "Pasa la frase al pasado (quería)."),
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
        "La regla: el verbo principal marca el reloj",
        [
          "Recuerda la regla: el subjuntivo de la subordinada sigue el tiempo del verbo principal. Principal en presente, futuro o imperativo → presente de subjuntivo (quiere que llegue). Principal en pasado (indefinido, imperfecto) o en condicional → imperfecto de subjuntivo (quería que llegara).",
          "¿Por qué? La acción de la subordinada se mira desde el momento del verbo principal. Si llevas toda la escena al pasado, los dos relojes se mueven juntos: cambian los DOS verbos. Lo que no cambia es el disparador: querer, es importante, no creer, buscar a alguien que... siguen pidiendo subjuntivo.",
          "Forma: ellos del indefinido sin -ron + -ra: supieron → supiera, fueron → fuera, pidieron → pidiera. Nosotros lleva tilde: supiéramos.",
        ],
        [
          ["Es necesario que hablemos. → Era necesario que habláramos.", "It's necessary that we talk. → It was necessary for us to talk. (valoración impersonal)"],
          ["Te pido que me esperes. → Te pedí que me esperaras.", "I ask you to wait for me. → I asked you to wait for me. (influencia)"],
          ["No creo que mientan. → No creía que mintieran.", "I don't think they're lying. → I didn't think they were lying. (duda; mintieron → mintieran)"],
          ["Busco un piso que tenga terraza. → Buscaba un piso que tuviera terraza.", "I'm looking for a flat with a terrace. → I was looking for... (antecedente desconocido)"],
        ],
        [
          fb("Pasa al pasado.", "Mi jefe quiere que llegue temprano. → Mi jefe quería que ___ temprano.", "llegara", "Quería está en pasado, así que la subordinada pasa a imperfecto de subjuntivo: llegaron → llegara. «Llegue» solo vale con un principal en presente."),
        ]
      ),
      sec(
        "El condicional también arrastra al imperfecto",
        "Un principal en condicional (sería, me gustaría, preferiría) se comporta como un pasado: pide imperfecto de subjuntivo. Por eso «Me gustaría que vinieras», nunca «me gustaría que vengas» en el español estándar.",
        [
          ["Es mejor que no salgas. → Sería mejor que no salieras.", "It's better that you don't go out. → It would be better if you didn't go out."],
          ["Prefiero que me llames. → Preferiría que me llamaras.", "I prefer you to call me. → I'd prefer you to call me."],
        ],
        [
          mc(
            "«Me encantaría que ___ a la cena.» (venir, vosotros)",
            ["vinierais", "vengáis", "venís", "vendríais"],
            0,
            "Encantaría es condicional: pide imperfecto de subjuntivo, vinieron → vinierais. «Vengáis» iría con «me encanta»; «venís» es indicativo y «vendríais» repite el condicional donde no toca."
          ),
        ]
      ),
    ],
    [
      fb("Pasa al pasado.", "Es importante que lo sepas. → Era importante que lo ___.", "supieras", "Era importante (impersonal en pasado) → imperfecto de subjuntivo: supieron → supieras. Saber es irregular también aquí."),
      fb("Pasa al pasado.", "Dudo que tengan razón. → Dudaba que ___ razón.", "tuvieran", "Dudaba (duda en pasado) → imperfecto de subjuntivo: tuvieron → tuvieran."),
      fb("Pasa al pasado.", "Me molesta que griten. → Me molestaba que ___.", "gritaran", "Me molestaba (emoción en pasado) → imperfecto de subjuntivo: gritaron → gritaran."),
      fb("Pasa al pasado.", "No hay nadie que lo entienda. → No había nadie que lo ___.", "entendiera", "Antecedente inexistente (no había nadie) en pasado → imperfecto de subjuntivo: entendiera. La negación del antecedente es lo que pide subjuntivo; el pasado decide el tiempo."),
      toEs("Te aconsejo que descanses.", "Te aconsejé que descansaras.", "Al pasar aconsejo → aconsejé, la subordinada cambia también: descansaran → descansaras. Dejar «descanses» mezclaría dos relojes.", ["Te aconsejaba que descansaras."], "Cambia la frase al pasado (indefinido)."),
      toEs("Mi madre me pidió que la llame.", "Mi madre me pidió que la llamara.", "Pidió es pasado, así que la subordinada va en imperfecto de subjuntivo: llamara. «Llame» solo concuerda con un principal en presente (me pide que la llame).", ["Mi madre me pidió que la llamase."], "Corrige la frase."),
      toEs("Sería genial que nos veamos el sábado.", "Sería genial que nos viéramos el sábado.", "Sería es condicional: arrastra la subordinada al imperfecto de subjuntivo, nos viéramos (con tilde en nosotros).", ["Sería genial que nos viésemos el sábado."], "Corrige la frase."),
      mc(
        "Pasa al pasado: «No creo que vuelva.»",
        ["No creía que volviera.", "No creía que vuelva.", "No creía que volvía.", "No creo que volviera."],
        0,
        "Al pasado cambian los dos verbos: creía y volviera (volvieron → volviera). «Vuelva» deja la subordinada en presente; «volvía» es indicativo, que no va tras «no creer que»."
      ),
      toEs("It was important that everyone came.", "Era importante que todos vinieran.", "«Era importante que» está en pasado: imperfecto de subjuntivo, vinieran (de vinieron).", ["Era importante que vinieran todos.", "Era importante que todo el mundo viniera."]),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: cuando el verbo que expresa deseo, emoción, duda o valoración está en pasado (querían, me pedía, era importante, no creía), la subordinada va en imperfecto de subjuntivo: estudiara, tuviera, fuera. Si el verbo principal está en presente, la subordinada vuelve al presente de subjuntivo.",
          "En un relato de recuerdos casi todo va en pasado, así que el imperfecto de subjuntivo aparece una y otra vez. Fíjate siempre en el verbo que manda, no en la idea de la frase.",
        ],
        [
          ["Mis padres preferían que estudiara Medicina.", "My parents preferred me to study medicine. (preferían → estudiara)"],
          ["Hoy mis padres quieren que siga bailando.", "Today my parents want me to keep dancing. (quieren, presente → siga)"],
        ],
        [
          mc(
            "Julia, hoy: «Ahora mi madre me pide que ___ más.» (descansar)",
            ["descanse", "descansara", "descanso", "descansaba"],
            0,
            "Pide está en presente → presente de subjuntivo: descanse. «Descansara» iría con un principal en pasado (me pedía); «descanso» y «descansaba» son indicativo, que no va tras «pedir que»."
          ),
        ]
      ),
      sec(
        "El recuerdo de Julia",
        "«De niña quería ser bailarina, pero mis padres preferían que estudiara Medicina. Mi madre me decía que era importante que tuviera un trabajo estable. Mi abuela, en cambio, me pedía que nunca dejara de bailar. Me alegraba mucho que ella me apoyara.»",
        [],
        [
          fb("Completa la continuación del relato.", "Mi abuelo me compraba discos de música clásica para que ___ en casa. (ensayar, yo)", "ensayara", "Para que con otro sujeto lleva subjuntivo, y con el verbo principal en pasado (compraba) va en imperfecto: ensayara."),
        ]
      ),
    ],
    [
      fb("Completa.", "Era importante que ___ un trabajo estable. (tener, yo)", "tuviera", "Era importante: valoración impersonal en pasado → imperfecto de subjuntivo, tuvieron → tuviera."),
      fb("Completa.", "Mi abuela me pedía que nunca ___ de bailar. (dejar)", "dejara", "Pedía (influencia en pasado) → imperfecto de subjuntivo: dejara."),
      fb("Completa.", "Me alegraba mucho que ella me ___. (apoyar)", "apoyara", "Me alegraba (emoción en pasado) → imperfecto de subjuntivo: apoyara."),
      fb("Completa.", "Mi padre no creía que el baile ___ una profesión seria. (ser)", "fuera", "No creía (duda en pasado) → imperfecto de subjuntivo: fueron → fuera. Con «creía que» afirmativo iría indicativo (era)."),
      fb("Completa.", "Hoy mis padres se alegran de que ___ bailarina. (ser, yo)", "sea", "Se alegran está en presente y la situación es actual → presente de subjuntivo: sea. El verbo principal decide el tiempo."),
      mc(
        "«Mi profesora de ballet insistía en que ___ todos los días.»",
        ["practicara", "practique", "practicaba", "practicaré"],
        0,
        "«Insistía en que» (pasado) pide imperfecto de subjuntivo: practicara. «Practique» iría con presente, «practicaba» es indicativo y «practicaré» es futuro."
      ),
      toEs("Mis padres querían que estudio Medicina.", "Mis padres querían que estudiara Medicina.", "Querían expresa deseo sobre otra persona: subjuntivo, y como está en pasado, imperfecto de subjuntivo (estudiara). «Estudio» es indicativo presente.", ["Mis padres querían que estudiase Medicina."], "Corrige la frase."),
      toEs("Mi madre me dice que es importante que tenga un trabajo estable.", "Mi madre me decía que era importante que tuviera un trabajo estable.", "Al contar el recuerdo en pasado cambian los tres verbos: decía, era y tuviera (imperfecto de subjuntivo tras «era importante»).", ["Mi madre me dijo que era importante que tuviera un trabajo estable."], "Cambia la frase al pasado (imperfecto)."),
      toEs("Every Christmas my grandfather asked me to dance for the whole family.", "Cada Navidad mi abuelo me pedía que bailara para toda la familia.", "Pedía (influencia en pasado) → imperfecto de subjuntivo: bailara. El imperfecto pedía encaja con la costumbre (cada Navidad).", ["Cada Navidad mi abuelo me pidió que bailara para toda la familia.", "Todas las Navidades mi abuelo me pedía que bailara para toda la familia.", "Cada Navidad mi abuelo me pedía que bailase para toda la familia."]),
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
        "Impersonales en pasado y en condicional",
        [
          "Recuerda la regla: una valoración impersonal (es necesario, es una pena, es raro que...) pide subjuntivo. Si la valoración está en pasado (era, fue) o en condicional (sería, estaría bien), la subordinada va en imperfecto de subjuntivo: Era necesario que vinieras. Sería mejor que salieras.",
          "Fue o era: «Fue una pena que no vinieras» valora un hecho concreto y cerrado; «Era una pena que no vinieras nunca» describe una situación habitual. Las dos piden el mismo imperfecto de subjuntivo.",
        ],
        [
          ["Fue una pena que no pudieras venir.", "It was a shame you couldn't come. (fue → pudieras)"],
          ["Era normal que los niños tuvieran miedo.", "It was normal for the children to be scared. (era → tuvieran)"],
          ["Sería mejor que nos fuéramos ya.", "It would be better if we left now. (sería, condicional → fuéramos)"],
        ],
        [
          fb("Completa.", "Fue una pena que ___ el partido. (perder, nosotros)", "perdiéramos", "Fue una pena (pasado) → imperfecto de subjuntivo: perdieron → perdiéramos, con tilde en la forma nosotros."),
        ]
      ),
      sec(
        "Ojalá: el tiempo dice cuánto crees en el deseo",
        [
          "Ojalá + presente de subjuntivo = deseo posible: Ojalá llueva mañana (puede pasar). Ojalá + imperfecto de subjuntivo = deseo improbable o contrario a la realidad presente: Ojalá supiera cocinar (no sé).",
          "La diferencia no es de tiempo cronológico sino de distancia: el imperfecto aleja el deseo de la realidad, como en inglés «I wish I knew».",
        ],
        [
          ["Ojalá supiera cocinar.", "I wish I knew how to cook. (no sé: imposible ahora)"],
          ["Ojalá apruebes el examen.", "I hope you pass the exam. (posible: presente)"],
        ],
        [
          mc(
            "No tienes coche y te haría mucha falta: «Ojalá ___ coche.»",
            ["tuviera", "tenga", "tengo", "tendría"],
            0,
            "No lo tienes: deseo contrario a la realidad presente → ojalá + imperfecto de subjuntivo, tuviera. «Tenga» lo presentaría como algo que puede pasar pronto; «tengo» y «tendría» no van tras ojalá."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Era lógico que ___ cansados. (estar, ellos)", "estuvieran", "Era lógico (impersonal en pasado) → imperfecto de subjuntivo: estuvieron → estuvieran."),
      fb("Rápido.", "Fue raro que no ___ nadie. (llamar)", "llamara", "Fue raro (valoración en pasado) → imperfecto de subjuntivo: llamara."),
      fb("Rápido.", "Ojalá ___ más alto. (ser, yo — no lo soy)", "fuera", "No lo soy: deseo contrario a la realidad → ojalá + imperfecto de subjuntivo, fuera."),
      fb("Rápido.", "Ojalá todo ___ bien mañana. (salir — es posible)", "salga", "Deseo posible sobre el futuro → ojalá + presente de subjuntivo: salga. «Saliera» lo haría sonar poco probable."),
      fb("Rápido.", "Estaría bien que me ___. (llamar, tú)", "llamaras", "Estaría bien es condicional → imperfecto de subjuntivo: llamaras."),
      toEs("Es imprescindible que firmes hoy.", "Era imprescindible que firmaras hoy.", "Al pasar «es» a «era», la subordinada pasa a imperfecto de subjuntivo: firmaras.", ["Fue imprescindible que firmaras hoy.", "Era imprescindible que firmases hoy."], "Cambia «es» por «era»."),
      toEs("Ojalá tengo más tiempo libre.", "Ojalá tuviera más tiempo libre.", "Ojalá nunca va con indicativo. Para un deseo poco realista sobre el presente se usa el imperfecto de subjuntivo: tuviera.", ["Ojalá tenga más tiempo libre.", "Ojalá tuviese más tiempo libre."], "Corrige la frase."),
      toEs("Sería mejor que salgamos temprano.", "Sería mejor que saliéramos temprano.", "Sería es condicional y pide imperfecto de subjuntivo: saliéramos. «Salgamos» solo concuerda con «es mejor».", ["Sería mejor que saliésemos temprano."], "Corrige la frase."),
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
        [
          "La regla: ojalá siempre lleva subjuntivo, nunca indicativo. Lo que elige el hablante es el tiempo, y ese tiempo no indica cuándo pasa algo sino cuánto cree en ello.",
          "Ojalá + presente de subjuntivo = deseo posible (Ojalá venga Ana: quizá venga). Ojalá + imperfecto de subjuntivo = deseo poco probable o contrario a la realidad de ahora (Ojalá viniera Ana: sé que no vendrá). Por eso el contexto (ya estás en el atasco, mido 1,60) es la pista que decide.",
        ],
        [
          ["Ojalá haga sol mañana.", "I hope it's sunny tomorrow. (puede pasar → haga)"],
          ["Ojalá hiciera sol ahora, pero está diluviando.", "I wish it were sunny now, but it's pouring. (contrario a la realidad → hiciera)"],
          ["Ojalá me llamara, pero ya no tiene mi número.", "I wish he'd call, but he doesn't have my number any more. (casi imposible)"],
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
      mc("Tu amigo todavía no sabe si irá a la fiesta: «Ojalá ___.»", ["venga", "viniera", "viene", "vino"], 0, "Es posible que venga: ojalá + presente de subjuntivo, venga. «Viniera» lo haría sonar improbable, y «viene» y «vino» son indicativo."),
      mc("Tu abuelo murió hace años: «Ojalá ___ aquí para verlo.»", ["estuviera", "esté", "está", "estará"], 0, "Es imposible que el abuelo esté aquí: ojalá + imperfecto de subjuntivo, estuviera. «Esté» sería un deseo posible, y «está» y «estará» son indicativo."),
      fb("Elige el tiempo.", "Ojalá ___ la lotería este año. (tocarme — quién sabe)", "me toque", "Quién sabe: es posible, así que ojalá + presente de subjuntivo, me toque. «Me tocara» lo daría casi por imposible."),
      fb("Elige el tiempo.", "Ojalá ___ volar. (poder, yo)", "pudiera", "Las personas no pueden volar: deseo imposible → ojalá + imperfecto de subjuntivo, pudiera (de pudieron)."),
      fb("Elige el tiempo.", "Ojalá no ___ tanto tráfico hoy. (haber — ya estás en el atasco)", "hubiera", "Ya estás en el atasco: deseo contrario a la realidad presente → imperfecto de subjuntivo, hubiera."),
      toEs("Ojalá encuentre las llaves.", "Ojalá encontrara las llaves.", "Pasar del presente al imperfecto de subjuntivo cambia el mensaje: ahora lo ves casi imposible (encontrara, de encontraron).", ["Ojalá encontrase las llaves."], "Cambia el deseo para que suene casi imposible."),
      toEs("Ojalá mañana hace buen tiempo.", "Ojalá mañana haga buen tiempo.", "Ojalá nunca va con indicativo. Como mañana puede hacer buen tiempo, va presente de subjuntivo: haga.", ["Ojalá haga buen tiempo mañana.", "Ojalá que mañana haga buen tiempo."], "Corrige la frase."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: mira primero el verbo principal. Presente, futuro o imperativo → presente de subjuntivo (quiero que me ayuden). Pasado o condicional → imperfecto de subjuntivo (me pidió que preparara).",
          "El error suele ir en las dos direcciones: un pasado con presente de subjuntivo (✗ me pidió que prepare) o un presente con imperfecto (✗ quiero que me ayudaran). La única excepción frecuente: con un principal en presente puedes usar imperfecto si lo dudado o lamentado ya pasó (Dudo que ayer llegaran a tiempo).",
        ],
        [
          ["Ayer mi jefa me pidió que preparara el informe.", "Yesterday my boss asked me to prepare the report. (pidió → preparara)"],
          ["Hoy quiero que mis compañeros me ayuden.", "Today I want my colleagues to help me. (quiero → ayuden)"],
        ],
        []
      ),
      sec(
        "El diario",
        "«Ayer mi jefa me pidió que prepare el informe. Me molestó que no me avise antes. Hoy quiero que mis compañeros me ayudaran. Espero que lo terminemos a tiempo.» Tres errores.",
        [],
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
      toEs("Me molestó que no me avise antes.", "Me molestó que no me avisara antes.", "Con «molestó» en pasado, el subjuntivo va en imperfecto: «avisara», no «avise».", ["Me molestó que no me avisase antes."], "Corrige la frase."),
      toEs("Era importante que todos vengan.", "Era importante que todos vinieran.", "Con «era importante» en pasado, el subjuntivo va en imperfecto: «vinieran», no «vengan».", ["Era importante que vinieran todos.", "Era importante que todos viniesen."], "Corrige la frase."),
      toEs("Te recomendé que lees ese libro.", "Te recomendé que leyeras ese libro.", "«Recomendar que» exige subjuntivo, y en pasado imperfecto: «leyeras», no «lees».", ["Te recomendé que leyeses ese libro."], "Corrige la frase."),
      toEs("Espero que lo terminemos a tiempo.", "Esperaba que lo termináramos a tiempo.", "Al pasar espero → esperaba, la subordinada pasa al imperfecto de subjuntivo: termináramos, con tilde.", ["Esperaba que lo terminásemos a tiempo."], "Cambia la frase al pasado (imperfecto)."),
      toEs("Mi jefa me pidió que preparara el informe.", "Mi jefa me pide que prepare el informe.", "Al volver al presente (pide), la subordinada vuelve al presente de subjuntivo: prepare.", [], "Cambia la frase al presente."),
      ms(
        "¿Qué frases respetan la secuencia?",
        ["Le dije que se callara.", "Le digo que se calle.", "Le diré que se callara.", "Le digo que se callara."],
        [0, 1],
        "La secuencia de tiempos: pasado → imperfecto de subjuntivo (le dije que se callara); presente o futuro → presente (le digo / le diré que se calle). «Le diré que se callara» y «Le digo que se callara» mezclan los tiempos."
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
        "Recuerda la regla",
        [
          "Recuerda la regla: las normas de la infancia son costumbres pasadas, así que el verbo de influencia va en imperfecto (me pedían, no me dejaban, me prohibían, les parecía importante) y la subordinada en imperfecto de subjuntivo: Me pedían que ordenara mi cuarto.",
          "Ojo con dejar y prohibir: admiten dos construcciones con el mismo sentido. No me dejaban que saliera = No me dejaban salir. Con infinitivo es más frecuente en la conversación; con que + subjuntivo es igual de correcto.",
        ],
        [
          ["Me pedían que ordenara mi cuarto.", "They asked me to tidy my room. (pedían → ordenara)"],
          ["No me dejaban salir entre semana. = No me dejaban que saliera.", "They didn't let me go out on weekdays. (dejar + infinitivo o que + subjuntivo)"],
          ["Les parecía importante que cenáramos juntos.", "They thought it was important for us to have dinner together."],
        ],
        [
          fb("Tu infancia.", "Mis padres no me dejaban que ___ videojuegos antes de cenar. (jugar)", "jugara", "No me dejaban que (permiso en pasado) → imperfecto de subjuntivo: jugaron → jugara."),
        ]
      ),
    ],
    [
      fb("Tu infancia.", "Mi madre prefería que ___ en la calle. (jugar)", "jugara", "Prefería (deseo en pasado) → imperfecto de subjuntivo: jugara."),
      fb("Tu infancia.", "Les parecía importante que ___ juntos. (cenar, nosotros)", "cenáramos", "Les parecía importante (pasado) → imperfecto de subjuntivo; nosotros lleva tilde porque es esdrújula (ce-NÁ-ra-mos)."),
      fb("Tu infancia.", "Me prohibían que ___ solo al parque. (ir)", "fuera", "Prohibían (pasado) → imperfecto de subjuntivo de ir: fueron → fuera (igual que el de ser)."),
      fb("Tu infancia.", "Mi padre quería que ___ un instrumento. (aprender, yo)", "aprendiera", "Quería + otra persona → imperfecto de subjuntivo: aprendieron → aprendiera."),
      toEs("Mis padres me piden que ordene mi cuarto.", "Mis padres me pedían que ordenara mi cuarto.", "Al contarlo como costumbre de la infancia (pedían), la subordinada pasa al imperfecto de subjuntivo: ordenara.", ["Mis padres me pedían que ordenase mi cuarto."], "Cambia la frase al pasado (imperfecto)."),
      toEs("No me dejaban que veo la tele entre semana.", "No me dejaban que viera la tele entre semana.", "Dejar que pide subjuntivo, y en pasado, imperfecto: vieron → viera. «Veo» es indicativo presente.", ["No me dejaban ver la tele entre semana.", "No me dejaban que viese la tele entre semana."], "Corrige la frase."),
      { type: "speak", prompt: "¿Qué te prohibían tus padres de pequeño? Responde en voz alta con «Me prohibían que…» (por ejemplo: comer en el sofá).", text: "Me prohibían que comiera en el sofá.", explanation: "Prohibían (costumbre pasada) + que + imperfecto de subjuntivo: comiera. También vale «Me prohibían comer en el sofá»." },
      toEs("My parents didn't let me go out at night.", "Mis padres no me dejaban que saliera por la noche.", "«Dejar que» exige subjuntivo; en pasado, imperfecto: «saliera». También se dice «no me dejaban salir».", ["Mis padres no me permitían que saliera de noche.", "Mis padres no me dejaban salir por la noche.", "Mis padres no me dejaban salir de noche."]),
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
        [
          "Recuerda la regla: si oyes un verbo principal en pasado o en condicional (quería, me pidió, era mejor, sería mejor), la forma que viene después de que será un imperfecto de subjuntivo en -ra: aprendieran, contara, habláramos.",
          "Al escribir, tres pistas: la raíz es la del indefinido (supieron → supiera, condujeron → condujera); la forma nosotros lleva tilde (esperáramos); y las demás formas son llanas y no llevan tilde (vinieras, fueran).",
        ],
        [
          ["Me pidió que no se lo contara a nadie.", "She asked me not to tell anyone. (pidió → contara)"],
          ["Sería mejor que esperáramos aquí.", "It would be better if we waited here. (sería → esperáramos, con tilde)"],
        ],
        [
          wo("Queríamos que nuestros hijos aprendieran idiomas.", "Querer que con otro sujeto pide subjuntivo; como «queríamos» está en pasado, el verbo subordinado va en imperfecto de subjuntivo: aprendieran.", "We wanted our children to learn languages."),
        ]
      ),
    ],
    [
      wo("Sería mejor que habláramos mañana.", "Sería (condicional) → imperfecto de subjuntivo: habláramos, con tilde en nosotros.", "It would be better if we talked tomorrow."),
      wo("Me sorprendió que nadie supiera la respuesta.", "Sorprendió (emoción en pasado) → imperfecto de subjuntivo: supiera, de supieron (con p).", "It surprised me that nobody knew the answer."),
      wo("El profesor nos pidió que leyéramos el capítulo.", "Pidió (influencia en pasado) → imperfecto de subjuntivo: leyéramos, con y y tilde.", "The teacher asked us to read the chapter."),
      wo("No era necesario que vinieras tan temprano.", "No era necesario (valoración en pasado) → imperfecto de subjuntivo: vinieras, con v y sin tilde.", "It wasn't necessary for you to come so early."),
      toEs("Es mejor que no digas nada.", "Era mejor que no dijeras nada.", "Al pasar es → era, la subordinada pasa al imperfecto de subjuntivo: dijeron → dijeras (con j, sin i añadida).", ["Era mejor que no dijeses nada.", "Fue mejor que no dijeras nada."], "Cambia «es» por «era»."),
      toEs("Me pidió que no se lo contará a nadie.", "Me pidió que no se lo contara a nadie.", "Con tilde, «contará» es futuro de indicativo. Tras «me pidió que» va el imperfecto de subjuntivo, contara, sin tilde (es llana acabada en vocal).", ["Me pidió que no se lo contase a nadie."], "Corrige la frase."),
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
        [
          "Recuerda la regla: al contar una petición, un consejo o una prohibición del pasado, el verbo de influencia va en pasado (me pidió, nos aconsejó, les prohibió) y lo que se pide va en que + imperfecto de subjuntivo: Me pidió que dejara de fumar.",
          "En la respuesta corta se conserva el que: —¿Qué te dijo? —Que descansara. Y cuidado con decir: con indicativo informa (Me dijo que estaba cansado), con subjuntivo ordena (Me dijo que descansara).",
        ],
        [
          ["—¿Qué os aconsejó el guía? —Nos aconsejó que lleváramos agua.", "—What did the guide advise you? —He advised us to bring water."],
          ["—¿Qué te dijo? —Que lo esperara en la puerta.", "—What did he tell you? —To wait for him at the door. (respuesta corta con que)"],
          ["Me dijo que estaba cansado. / Me dijo que descansara.", "He told me he was tired. / He told me to rest. (informa / ordena)"],
        ],
        [
          fb("Responde.", "—¿Qué te pidió el médico? —Me pidió que ___ de fumar. (dejar)", "dejara", "Pidió (influencia en pasado) → imperfecto de subjuntivo: dejaron → dejara."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Qué os prohibió el profesor? —Que ___ el móvil en clase. (usar, nosotros)", "usáramos", "Prohibió (pasado) → imperfecto de subjuntivo: usáramos, con tilde en nosotros."),
      fb("Responde.", "—¿Qué te sugirió tu jefe? —Que ___ unos días libres. (tomarse, yo)", "me tomara", "Sugirió (pasado) → imperfecto de subjuntivo, con el pronombre delante: me tomara."),
      fb("Responde.", "—¿Qué les exigió el casero? —Que ___ el alquiler antes del día cinco. (pagar, ellos)", "pagaran", "Exigió (pasado) → imperfecto de subjuntivo: pagaran. «Paguen» iría con «les exige»."),
      fb("Responde.", "—¿Qué te recomendó la abogada? —Que no ___ nada sin leerlo. (firmar)", "firmara", "Recomendó (pasado) → imperfecto de subjuntivo: firmara."),
      toEs("«Deja el móvil», me dijo mi padre.", "Mi padre me dijo que dejara el móvil.", "Una orden en estilo directo (imperativo deja) pasa a estilo indirecto en pasado como que + imperfecto de subjuntivo: dejara.", ["Mi padre me dijo que dejase el móvil."], "Cambia a estilo indirecto."),
      toEs("«Traed el pasaporte», nos pidió la guía.", "La guía nos pidió que lleváramos el pasaporte.", "Traed (imperativo) → nos pidió que + imperfecto de subjuntivo. En estilo indirecto, traer suele pasar a llevar porque cambia el punto de vista.", ["La guía nos pidió que trajéramos el pasaporte.", "La guía nos pidió que lleváramos los pasaportes.", "La guía nos pidió que trajéramos los pasaportes."], "Cambia a estilo indirecto."),
      toEs("—¿Qué te dijo la profesora? —Que repaso el tema cinco.", "—¿Qué te dijo la profesora? —Que repasara el tema cinco.", "Aquí decir transmite una orden: que + imperfecto de subjuntivo (repasara). «Repaso» es indicativo presente y convertiría la orden en un hecho.", ["—¿Qué te dijo la profesora? —Que repasase el tema cinco."], "Corrige la respuesta."),
      mc(
        "—¿Qué te dijo tu madre? —«Esta mañana me dijo que ___ la chaqueta, pero luego salió el sol y ya no hizo falta.»",
        ["me pusiera", "me ponga", "me puse", "me pongo"],
        0,
        "Aquí decir transmite una orden en pasado que ya no está vigente (luego salió el sol y no hizo falta), así que pide imperfecto de subjuntivo: que me pusiera. «Ponga» solo valdría si la orden siguiera vigente ahora, «puse» cambia la orden en un hecho y «pongo» es presente."
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
        "Cortesía: alejar la petición",
        [
          "La idea: en español, igual que en inglés (I'd like, would you mind), una petición suena más amable si se «aleja» de la realidad. Por eso se usan formas de condicional o de imperfecto de subjuntivo aunque hablemos del presente: quiero → quisiera / querría / me gustaría.",
          "Si la petición recae sobre otra persona, el condicional pide que + imperfecto de subjuntivo: Me gustaría que me llamaras. Sería mejor que lo habláramos. Estaría bien que vinierais. Le agradecería que revisara el contrato (muy formal, frecuente en correos).",
        ],
        [
          ["Quisiera reservar una mesa para dos.", "I'd like to book a table for two. (quisiera + infinitivo)"],
          ["Me gustaría que me lo explicaras.", "I'd like you to explain it to me. (otra persona → explicaras)"],
          ["Le agradecería que me enviara el presupuesto.", "I'd be grateful if you sent me the quote. (usted, formal)"],
        ],
        [
          { ...fb("Suaviza.", "Quiero un café. → ___ un café, por favor.", "Quisiera", "«Quisiera» (imperfecto de subjuntivo de querer) es la fórmula más cortés para pedir algo."), altAnswers: ["Querría", "Me gustaría"] },
        ]
      ),
    ],
    [
      fb("Suaviza.", "Hablemos. → Sería mejor que ___.", "habláramos", "«Sería mejor que» (condicional) pide imperfecto de subjuntivo; en nosotros lleva tilde: habláramos."),
      fb("Suaviza.", "Venid a la reunión. → Estaría bien que ___ a la reunión.", "vinierais", "«Estaría bien que» pide imperfecto de subjuntivo, forma de vosotros: vinierais."),
      fb("Suaviza.", "Revise el contrato. → Le agradecería que ___ el contrato.", "revisara", "«Le agradecería que» (usted) pide imperfecto de subjuntivo: revisara."),
      { ...fb("Suaviza.", "Quiero pedirle un favor. → ___ pedirle un favor.", "Quisiera", "«Quisiera» + infinitivo suaviza mucho la petición: quisiera pedirle un favor."), altAnswers: ["Querría", "Me gustaría"] },
      toEs("Llámame esta tarde.", "Me gustaría que me llamaras esta tarde.", "Una orden directa (llámame) se suaviza con me gustaría que + imperfecto de subjuntivo: llamaras.", ["Me gustaría que me llamases esta tarde.", "Me encantaría que me llamaras esta tarde."], "Transforma la orden en una petición cortés con «me gustaría que»."),
      toEs("Le agradecería que me conteste antes del viernes.", "Le agradecería que me contestara antes del viernes.", "Agradecería es condicional: pide imperfecto de subjuntivo, contestara. «Conteste» iría con «le agradezco que».", ["Le agradecería que me contestase antes del viernes.", "Le agradezco que me conteste antes del viernes."], "Corrige la frase."),
      mc(
        "«Me encantaría que ___ a mi boda.»",
        ["vinierais", "vengáis", "venís", "vinisteis"],
        0,
        "Un condicional de deseo (me encantaría) pide imperfecto de subjuntivo: vinierais. «Vengáis» iría con «me encanta», «venís» es indicativo y «vinisteis» es pasado."
      ),
      toEs("I'd be grateful if you sent me the invoice.", "Le agradecería que me enviara la factura.", "Tras «le agradecería que», la subordinada va en imperfecto de subjuntivo: «enviara».", ["Te agradecería que me mandaras la factura.", "Le agradecería que me mandara la factura.", "Te agradecería que me enviaras la factura."]),
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
        "La regla: dos grupos de verbos principales",
        [
          "Recuerda la regla: los tiempos del verbo principal forman dos grupos. Presente, futuro, imperativo y pretérito perfecto → presente de subjuntivo (quiero / querré / he querido que vengas). Indefinido, imperfecto, pluscuamperfecto y condicional → imperfecto de subjuntivo (quise / quería / querría que vinieras).",
          "¿Por qué el condicional va con el pasado? El condicional nació como «futuro del pasado» y además expresa lo hipotético; en los dos casos se aleja del presente real, y el imperfecto de subjuntivo es la forma «alejada» del subjuntivo. Por eso «querría que vengas» suena mal en la norma: mezcla los dos grupos.",
        ],
        [
          ["Quiero que vengas a cenar.", "I want you to come to dinner. (presente → vengas)"],
          ["Querré que estés allí.", "I'll want you to be there. (futuro → estés)"],
          ["Quería que vinieras a cenar.", "I wanted you to come to dinner. (pasado → vinieras)"],
          ["Querría que me llamaras más.", "I'd like you to call me more. (condicional → llamaras)"],
        ],
        [
          fb("Futuro.", "Te pediré que me ___ con la mudanza. (ayudar)", "ayudes", "Futuro (pediré) → presente de subjuntivo: ayudes."),
          mc(
            "«Sería estupendo que el concierto ___ gratis.»",
            ["fuera", "sea", "es", "será"],
            0,
            "Sería (condicional) pertenece al grupo del pasado: imperfecto de subjuntivo, fuera. «Sea» iría con «es estupendo», y «es» y «será» son indicativo, imposible tras una valoración."
          ),
        ]
      ),
    ],
    [
      fb("Presente.", "Te pido que me ___ con la mudanza. (ayudar)", "ayudes", "Pido (presente) → presente de subjuntivo: ayudes."),
      fb("Pasado.", "Te pedí que me ___ con la mudanza. (ayudar)", "ayudaras", "Pedí (indefinido) → imperfecto de subjuntivo: ayudaras."),
      fb("Condicional.", "Te pediría que me ___ con la mudanza. (ayudar)", "ayudaras", "Pediría (condicional) → imperfecto de subjuntivo, igual que el pasado: ayudaras."),
      fb("Presente.", "Es probable que el vuelo se ___. (retrasar)", "retrase", "Es probable (presente) → presente de subjuntivo: se retrase."),
      fb("Pasado.", "Era probable que el vuelo se ___. (retrasar)", "retrasara", "Era probable (imperfecto) → imperfecto de subjuntivo: se retrasara."),
      fb("Condicional.", "Sería raro que el vuelo se ___. (retrasar)", "retrasara", "Sería raro (condicional) → imperfecto de subjuntivo: se retrasara."),
      mc(
        "«Nunca he querido que ___ por mí.» (sufrir, tú)",
        ["sufras", "sufrirás", "sufres", "sufriste"],
        0,
        "El pretérito perfecto se liga al presente, así que normalmente lleva presente de subjuntivo: nunca he querido que sufras. «Sufrirás», «sufres» y «sufriste» son indicativo y no van tras «querer que»."
      ),
      toEs("I'd prefer that you didn't smoke here.", "Preferiría que no fumaras aquí.", "Tras un condicional («preferiría»), la subordinada va en imperfecto de subjuntivo: «fumaras».", ["Preferiría que no fumases aquí.", "Preferiría que no fumara aquí."]),
      toEs(
        "Necesito que me ayudes con el informe.",
        "Necesitaba que me ayudaras con el informe.",
        "Necesitaba (imperfecto) → imperfecto de subjuntivo: ayudaras.",
        ["Necesitaba que me ayudases con el informe."],
        "Pasa la frase al pretérito imperfecto: «Necesitaba…»."
      ),
      toEs(
        "Me gustaría que vinierais a la boda.",
        "Me gustará que vengáis a la boda.",
        "Con el futuro (gustará) se vuelve al presente de subjuntivo: vengáis.",
        [],
        "Cambia «me gustaría» por «me gustará»."
      ),
      toEs(
        "Es importante que lo sepas.",
        "Sería importante que lo supieras.",
        "Sería (condicional) → imperfecto de subjuntivo: supieras (de supieron).",
        ["Sería importante que lo supieses."],
        "Cambia «es» por «sería»."
      ),
      toEs(
        "Querría que me acompañes al médico.",
        "Querría que me acompañaras al médico.",
        "Querría es condicional: va con imperfecto de subjuntivo (acompañaras). El presente (acompañes) iría con quiero.",
        ["Querría que me acompañases al médico.", "Quiero que me acompañes al médico."],
        "Corrige la frase."
      ),
      toEs(
        "El año pasado les pedí que me envíen las fotos.",
        "El año pasado les pedí que me enviaran las fotos.",
        "Pedí (indefinido, el año pasado) → imperfecto de subjuntivo: enviaran.",
        ["El año pasado les pedí que me enviasen las fotos.", "El año pasado les pedí que me mandaran las fotos."],
        "Corrige la frase."
      ),
      toEs(
        "Te he dicho mil veces que no dejaras la puerta abierta.",
        "Te he dicho mil veces que no dejes la puerta abierta.",
        "El pretérito perfecto (he dicho) se siente cercano al presente y pide presente de subjuntivo: dejes.",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2d-ronda-formas-ra",
    "Ronda rápida: imperfecto de subjuntivo sin pausa",
    "Practica con rapidez el imperfecto de subjuntivo: raíces irregulares, cambios e→i / o→u, tilde en nosotros y -y- entre vocales.",
    "5 min",
    [
      sec(
        "Recuerda la regla: todo sale de «ellos» del indefinido",
        [
          "Recuerda la regla: toma ellos del indefinido, quita -ron y añade -ra, -ras, -ra, -ramos, -rais, -ran. Todo lo irregular del indefinido pasa al subjuntivo: tuvieron → tuviera, pidieron → pidiera, durmieron → durmiera, leyeron → leyera.",
          "¿Por qué funciona? Porque el imperfecto de subjuntivo se construye sobre esa forma, así que no hay irregularidades nuevas que aprender. Dos detalles: nosotros lleva siempre tilde (fuéramos, tuviéramos), y tras j no aparece la i (dijeron → dijera, nunca «dijiera»).",
        ],
        [
          ["Si fuéramos más, sería más fácil.", "If there were more of us, it would be easier. (fueron → fuéramos)"],
          ["Me pidió que lo trajera.", "She asked me to bring it. (trajeron → trajera, sin i)"],
          ["Ojalá durmieras mejor.", "I wish you slept better. (durmieron → durmieras: o → u)"],
        ],
        [
          fb("Rápido.", "caer → que yo ___", "cayera", "El imperfecto de subjuntivo sale de la 3.ª persona plural del indefinido: «cayeron» → «cayera»."),
          mc(
            "¿Cuál es el imperfecto de subjuntivo de «producir» para «ellos»?",
            ["produjeran", "producieran", "produjieran", "produzcan"],
            0,
            "Producir tiene indefinido produjeron (como todos los -ducir): produjeran. «Producieran» usa la raíz del infinitivo, «produjieran» añade una i tras j y «produzcan» es presente de subjuntivo."
          ),
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
      toEs(
        "Quería que tú lo supieras.",
        "Quería que nosotros lo supiéramos.",
        "Solo cambia la persona del subjuntivo: supieras → supiéramos, con tilde en nosotros.",
        ["Quería que lo supiéramos.", "Quería que nosotros lo supiésemos."],
        "Cambia «tú» por «nosotros»."
      ),
      toEs(
        "Le pedí que me trajera un café.",
        "Les pedí que me trajeran un café.",
        "Al pasar a ellos: les pedí y trajeran (de trajeron, sin i tras la j).",
        ["Les pedí que me trajesen un café."],
        "Cambia la frase a plural: «Les pedí…»."
      ),
      toEs(
        "Espero que duermas bien.",
        "Esperaba que durmieras bien.",
        "Esperaba (pasado) → imperfecto de subjuntivo; dormir mantiene el cambio o → u del indefinido (durmieron): durmieras.",
        ["Esperaba que durmieses bien."],
        "Pasa la frase al pretérito imperfecto: «Esperaba…»."
      ),
      toEs(
        "Mi madre no quería que yo ponieras los pies en el sofá.",
        "Mi madre no quería que yo pusiera los pies en el sofá.",
        "Poner hace pusieron en el indefinido, así que el subjuntivo es pusiera, y con yo, sin -s.",
        ["Mi madre no quería que yo pusiese los pies en el sofá.", "Mi mamá no quería que yo pusiera los pies en el sofá."],
        "Corrige la frase."
      ),
      toEs(
        "Era raro que nadie sabiera la respuesta.",
        "Era raro que nadie supiera la respuesta.",
        "Saber tiene indefinido supieron: el imperfecto de subjuntivo es supiera. «Sabiera» no existe.",
        ["Era raro que nadie supiese la respuesta."],
        "Corrige la frase."
      ),
      toEs(
        "Ojalá mis hijos conducieran con más cuidado.",
        "Ojalá mis hijos condujeran con más cuidado.",
        "Conducir hace condujeron (raíz conduj-, sin i): condujeran.",
        ["Ojalá mis hijos condujesen con más cuidado.", "Ojalá mis hijos manejaran con más cuidado."],
        "Corrige la frase."
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
        "Recuerda la regla y lee la carta",
        [
          "Recuerda la regla: el abuelo cuenta el pasado, así que los verbos de influencia (exigir, permitir, querer) y las finalidades (para que) van con imperfecto de subjuntivo. Cuando vuelve al presente (hoy me alegra que…), el subjuntivo vuelve al presente: así ves que lo que decide el tiempo es el verbo principal, no la época de la historia.",
          "«En la fábrica, el encargado exigía que llegáramos a las seis. No permitía que habláramos durante el turno. Yo quería que mi hijo estudiara para que no tuviera que trabajar así. Hoy me alegra que mis nietos puedan elegir.»",
        ],
        [
          ["El encargado no dejaba que nos sentáramos.", "The foreman didn't let us sit down. (pasado → sentáramos)"],
          ["Hoy me parece bien que los jóvenes cambien de trabajo.", "Today I think it's fine that young people change jobs. (presente → cambien)"],
        ],
        [
          fb("Completa.", "El encargado exigía que ___ a las seis. (llegar, nosotros)", "llegáramos", "Exigía (pasado) + que → imperfecto de subjuntivo, con tilde en nosotros: llegáramos."),
          mc(
            "Según la carta, ¿por qué quería el abuelo que su hijo estudiara?",
            ["Para que no tuviera que trabajar como él.", "Porque el encargado se lo exigía.", "Para que llegara a las seis a la fábrica.", "Porque sus nietos podían elegir."],
            0,
            "La carta dice «quería que mi hijo estudiara para que no tuviera que trabajar así»: para que + imperfecto de subjuntivo expresa la finalidad en el pasado. Las otras opciones mezclan datos de otras frases."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No permitía que ___ durante el turno. (hablar, nosotros)", "habláramos", "Permitía (pasado) → imperfecto de subjuntivo: habláramos."),
      fb("Completa.", "Yo quería que mi hijo ___. (estudiar)", "estudiara", "Quería (pasado) con otro sujeto → imperfecto de subjuntivo: estudiara."),
      fb("Completa.", "…para que no ___ que trabajar así. (tener)", "tuviera", "Para que + principal en pasado → imperfecto de subjuntivo: tuviera (de tuvieron)."),
      fb("Completa.", "Hoy me alegra que mis nietos ___ elegir. (poder)", "puedan", "Me alegra (presente) → presente de subjuntivo: puedan."),
      fb("Completa.", "No había nadie que se ___ a protestar. (atrever)", "atreviera", "Nadie = antecedente inexistente → subjuntivo; con había (pasado), imperfecto: atreviera."),
      mc(
        "«Cuando me jubilé, mis compañeros me pidieron que ___ un discurso.»",
        ["diera", "dé", "di", "daba"],
        0,
        "Con pidieron (pasado), imperfecto de subjuntivo, formado desde dieron: diera. «Dé» iría con presente, y «di» y «daba» son indicativo."
      ),
      toEs("They didn't allow us to rest.", "No permitían que descansáramos.", "«Permitir que» en pasado exige imperfecto de subjuntivo: «descansáramos».", ["No nos permitían descansar.", "No permitían que descansásemos.", "No nos dejaban descansar.", "No nos dejaron descansar.", "No nos permitieron descansar."]),
      toEs(
        "El encargado nos pide que limpiemos las máquinas cada tarde.",
        "El encargado nos pedía que limpiáramos las máquinas cada tarde.",
        "Pedía (pasado) → imperfecto de subjuntivo: limpiáramos, con tilde en nosotros.",
        ["El encargado nos pedía que limpiásemos las máquinas cada tarde."],
        "Pasa la frase al pretérito imperfecto: es un recuerdo."
      ),
      toEs(
        "Me preocupaba que mi hijo no encontrara trabajo.",
        "Me preocupa que mi nieto no encuentre trabajo.",
        "Me preocupa (presente) → presente de subjuntivo: encuentre (o → ue).",
        [],
        "Pasa la frase al presente y cambia «mi hijo» por «mi nieto»."
      ),
      toEs(
        "Ahorro para que mis hijos vayan a la escuela.",
        "Ahorraba para que mis hijos fueran a la escuela.",
        "Para que + principal en pasado (ahorraba) → imperfecto de subjuntivo: fueran (de fueron).",
        ["Ahorraba para que mis hijos fuesen a la escuela.", "Ahorraba para que mis hijos fueran al colegio."],
        "Pasa la frase al pretérito imperfecto."
      ),
      toEs(
        "El encargado no permitía que fumábamos en la nave.",
        "El encargado no permitía que fumáramos en la nave.",
        "Permitir que siempre lleva subjuntivo: fumáramos (imperfecto de subjuntivo), no fumábamos (indicativo).",
        ["El encargado no permitía que fumásemos en la nave.", "El encargado no nos permitía fumar en la nave."],
        "Corrige la frase."
      ),
      toEs(
        "Mi padre quería que yo aprenda un oficio.",
        "Mi padre quería que yo aprendiera un oficio.",
        "Quería está en pasado: imperfecto de subjuntivo, aprendiera.",
        ["Mi padre quería que yo aprendiese un oficio.", "Mi papá quería que yo aprendiera un oficio."],
        "Corrige la frase."
      ),
      toEs(
        "Hoy me alegra que los jóvenes tuvieran más derechos.",
        "Hoy me alegra que los jóvenes tengan más derechos.",
        "Hoy me alegra (presente) habla de la situación actual: presente de subjuntivo, tengan.",
        [],
        "Corrige la frase."
      ),
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
        "La regla: misma raíz, otra terminación",
        [
          "Recuerda la regla: hablara = hablase; tuviera = tuviese; fuéramos = fuésemos. Para pasar de una a otra se cambia solo la terminación (-ra → -se, -ras → -ses, -ramos → -semos…); la raíz y la tilde se quedan donde estaban.",
          "¿Cuándo se elige? En la subordinada da igual; -ra es más frecuente en la conversación y -se aparece más en textos escritos, formales o literarios y en algunas regiones de España. La única diferencia de uso: la cortesía (quisiera, debiera) solo admite -ra.",
        ],
        [
          ["Me pidió que lo hiciese.", "He asked me to do it. (= que lo hiciera)"],
          ["El reglamento exigía que los socios pagasen la cuota.", "The rules required members to pay the fee. (registro escrito)"],
        ],
        [
          mc(
            "¿Qué forma equivale a «tuviéramos»?",
            ["tuviésemos", "tuviésamos", "tuvíesemos", "tengamos"],
            0,
            "Las formas en -ra y en -se son equivalentes: tuviéramos = tuviésemos, con tilde en la misma sílaba. «Tuviésamos» y «tuvíesemos» están mal formadas y «tengamos» es presente de subjuntivo."
          ),
          fb("Transforma.", "Nos rogaron que nos quedáramos. → Nos rogaron que nos ___. (forma -se)", "quedásemos", "Se cambia -ramos por -semos y la tilde sigue en la misma sílaba: quedásemos."),
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
      toEs(
        "Me pidieron que trajese el vino.",
        "Me pidieron que trajera el vino.",
        "Solo cambia la terminación: trajese → trajera, sobre la misma raíz traj- (sin i tras la j, igual que trajeron).",
        [],
        "Cambia a la forma en -ra."
      ),
      toEs(
        "Quisiese pedirle un favor, señora.",
        "Quisiera pedirle un favor, señora.",
        "Para la cortesía solo vale la forma en -ra: quisiera (= querría). «Quisiese» solo funciona dentro de una subordinada.",
        ["Querría pedirle un favor, señora.", "Me gustaría pedirle un favor, señora."],
        "Corrige la frase."
      ),
      toEs(
        "El director pidió que nadie hiciese ruido y que todos apaguen el móvil.",
        "El director pidió que nadie hiciese ruido y que todos apagasen el móvil.",
        "Pidió (pasado) exige imperfecto de subjuntivo en las dos subordinadas; si la primera va en -se, lo natural es mantener -se: apagasen.",
        ["El director pidió que nadie hiciese ruido y que todos apagaran el móvil.", "El director pidió que nadie hiciera ruido y que todos apagaran el móvil."],
        "Corrige la frase."
      ),
      toEs(
        "Si tuviésemos más tiempo, lo haríamos mejor.",
        "Si tuviéramos más tiempo, lo haríamos mejor.",
        "Tuviésemos y tuviéramos son equivalentes: se cambia solo la terminación, con la tilde en la misma sílaba.",
        [],
        "Cambia a la forma en -ra."
      ),
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
        "La regla: del comunicado a la crónica",
        [
          "Recuerda la regla: al pasar un comunicado (presente) a una crónica (pasado), cambia el verbo principal y el subjuntivo lo sigue: pide que no usen → pidió que no usaran; es probable que dure → era probable que durara; lamenta que haya → lamentó que hubiera.",
          "¿Por qué? La subordinada no tiene tiempo propio: se sitúa respecto al verbo principal. Lo que no cambia es el modo: si la frase pedía subjuntivo en presente (influencia, valoración, emoción, antecedente inexistente), lo sigue pidiendo en pasado. Lo que era indicativo (informa que, dice que) pasa a otro indicativo (informó que había…).",
        ],
        [
          ["Comunicado: «El ayuntamiento pide que los vecinos no usen el coche.»", "Statement: the council asks residents not to use their cars."],
          ["Crónica: «El ayuntamiento pidió que los vecinos no usaran el coche.»", "Report: the council asked residents not to use their cars. (pidió → usaran)"],
          ["Crónica: «Informó de que la carretera estaba cortada.»", "Report: it said the road was closed. (informar → indicativo)"],
        ],
        [
          fb("Crónica.", "El ayuntamiento pide que no se malgaste agua. → El ayuntamiento pidió que no se ___ agua.", "malgastara", "Con «pidió» en pasado, el subjuntivo pasa a imperfecto: «malgastara»."),
          mc(
            "Comunicado: «Los médicos temen que el virus se extienda.» Crónica: «Los médicos temían que el virus ___.»",
            ["se extendiera", "se extienda", "se extendía", "se extendió"],
            0,
            "Temer que (emoción) pide subjuntivo; con temían en pasado, imperfecto: se extendiera. «Se extienda» no sigue al pasado, y «se extendía» y «se extendió» son indicativo."
          ),
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
      toEs(
        "La alcaldesa pide que los vecinos tengan paciencia.",
        "La alcaldesa pidió que los vecinos tuvieran paciencia.",
        "Pidió (pasado) → imperfecto de subjuntivo: tuvieran (de tuvieron).",
        ["La alcaldesa pidió que los vecinos tuviesen paciencia.", "La alcaldesa pidió a los vecinos que tuvieran paciencia."],
        "Cambia la noticia al pasado."
      ),
      toEs(
        "Es posible que el metro cierre a medianoche.",
        "Era posible que el metro cerrara a medianoche.",
        "Era posible (pasado) → imperfecto de subjuntivo: cerrara.",
        ["Era posible que el metro cerrase a medianoche."],
        "Cambia la noticia al pasado: «Era posible…»."
      ),
      toEs(
        "Los vecinos se quejan de que no haya autobuses nocturnos.",
        "Los vecinos se quejaron de que no hubiera autobuses nocturnos.",
        "Quejarse de que (emoción) en pasado → imperfecto de subjuntivo: hubiera, siempre en singular porque haber es impersonal.",
        ["Los vecinos se quejaron de que no hubiese autobuses nocturnos.", "Los vecinos se quejaban de que no hubiera autobuses nocturnos."],
        "Cambia la noticia al pasado."
      ),
      toEs(
        "El ministro pidió que los ciudadanos no viajen durante el puente.",
        "El ministro pidió que los ciudadanos no viajaran durante el puente.",
        "Pidió (pasado) → imperfecto de subjuntivo: viajaran. El presente de subjuntivo (viajen) no sigue al pasado.",
        ["El ministro pidió que los ciudadanos no viajasen durante el puente.", "La ministra pidió que los ciudadanos no viajaran durante el puente."],
        "Corrige la frase."
      ),
      toEs(
        "Los bomberos recomendaron que nadie se acercaba a la zona.",
        "Los bomberos recomendaron que nadie se acercara a la zona.",
        "Recomendar que es un verbo de influencia: siempre subjuntivo, aquí en imperfecto (se acercara), nunca indicativo.",
        ["Los bomberos recomendaron que nadie se acercase a la zona."],
        "Corrige la frase."
      ),
      toEs(
        "El portavoz informó de que la autopista estuviera cortada.",
        "El portavoz informó de que la autopista estaba cortada.",
        "Informar de que transmite un hecho: indicativo (estaba). El subjuntivo es para pedir, valorar o desear, no para informar.",
        ["El portavoz informó que la autopista estaba cortada."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla: deseos que hoy no se cumplen",
        [
          "Recuerda la regla: para un deseo sobre el presente que no se cumple (o es muy difícil), se usa ojalá + imperfecto de subjuntivo (ojalá tuviera más tiempo = no lo tengo). Con me gustaría que, preferiría que o me encantaría que, el condicional pide también imperfecto de subjuntivo.",
          "¿Por qué el imperfecto si hablamos de hoy? Aquí no marca pasado, sino distancia de la realidad. Compara: ojalá tenga tiempo mañana (es posible) / ojalá tuviera tiempo ahora (no lo tengo). Si el sujeto es el mismo, se usa infinitivo: me gustaría vivir en la costa.",
        ],
        [
          ["Ojalá supiera tocar la guitarra.", "I wish I could play the guitar. (no sé: deseo irreal)"],
          ["Ojalá haga sol el sábado.", "I hope it's sunny on Saturday. (posible → presente)"],
          ["Me encantaría que mi hermana viviera en mi ciudad.", "I'd love my sister to live in my city. (condicional → viviera)"],
        ],
        [
          fb("Tus deseos.", "Ojalá ___ más vacaciones. (tener, yo)", "tuviera", "No las tengo: deseo irreal sobre el presente → ojalá + imperfecto de subjuntivo, tuviera."),
          mc(
            "Mañana tienes una entrevista y no sabes cómo irá. «Ojalá me ___.»",
            ["vaya bien", "fuera bien", "va bien", "iría bien"],
            0,
            "Es posible que vaya bien: ojalá + presente de subjuntivo. «Fuera bien» lo presentaría como casi imposible, y «va» e «iría» son indicativo, que ojalá no admite."
          ),
        ]
      ),
    ],
    [
      fb("Tus deseos.", "Ojalá ___ tocar el piano. (saber, yo)", "supiera", "No sé tocarlo: deseo irreal → ojalá + imperfecto de subjuntivo, supiera."),
      fb("Tus deseos.", "Me gustaría que mis primos ___ en mi barrio. (vivir)", "vivieran", "Me gustaría (condicional) + otro sujeto → imperfecto de subjuntivo: vivieran."),
      fb("Tus deseos.", "Preferiría que mi trabajo ___ más creativo. (ser)", "fuera", "Preferiría (condicional) → imperfecto de subjuntivo: fuera."),
      fb("Tus deseos.", "Ojalá mi ciudad ___ playa. (tener)", "tuviera", "Mi ciudad no tiene playa: deseo irreal → tuviera."),
      fb("Tus deseos.", "Me encantaría que mi familia ___ a visitarme. (venir)", "viniera", "Me encantaría (condicional) → imperfecto de subjuntivo: viniera."),
      toEs("I wish I could speak ten languages.", "Ojalá pudiera hablar diez idiomas.", "«Ojalá» + imperfecto de subjuntivo expresa un deseo irreal o muy difícil: «pudiera».", ["Ojalá hablara diez idiomas.", "Ojalá pudiese hablar diez idiomas."]),
      { type: "speak", prompt: "Responde en voz alta: ¿qué te gustaría cambiar de tu ciudad? Empieza con «Me gustaría que mi ciudad…».", text: "Me gustaría que mi ciudad tuviera más parques.", explanation: "Me gustaría (condicional) + otro sujeto (mi ciudad) → imperfecto de subjuntivo: tuviera." },
      { type: "speak", prompt: "Responde en voz alta: di algo que no sabes hacer y te gustaría saber. Empieza con «Ojalá…».", text: "Ojalá supiera bailar salsa.", explanation: "Deseo irreal sobre el presente: ojalá + imperfecto de subjuntivo (supiera, de supieron)." },
      toEs(
        "No tengo coche.",
        "Ojalá tuviera coche.",
        "Para desear lo contrario de una realidad presente: ojalá + imperfecto de subjuntivo, en positivo (tuviera).",
        ["Ojalá tuviese coche.", "Ojalá tuviera un coche.", "Ojalá tuviera carro."],
        "Transforma el hecho en un deseo con «ojalá»."
      ),
      toEs(
        "Mi jefe no me escucha.",
        "Me gustaría que mi jefe me escuchara.",
        "Me gustaría + otro sujeto (mi jefe) → que + imperfecto de subjuntivo: escuchara.",
        ["Me gustaría que mi jefe me escuchase.", "Me gustaría que mi jefa me escuchara."],
        "Transforma la queja en un deseo: «Me gustaría que…»."
      ),
      toEs(
        "Quiero que me llames más.",
        "Querría que me llamaras más.",
        "Querría (condicional) suaviza el deseo y pide imperfecto de subjuntivo: llamaras.",
        ["Querría que me llamases más."],
        "Cambia «quiero» por «querría»."
      ),
      toEs(
        "Ojalá tengo más tiempo libre.",
        "Ojalá tuviera más tiempo libre.",
        "Ojalá nunca va con indicativo. Si el deseo es irreal (ahora no tienes tiempo), imperfecto de subjuntivo: tuviera.",
        ["Ojalá tuviese más tiempo libre.", "Ojalá tenga más tiempo libre."],
        "Corrige la frase."
      ),
      toEs(
        "Me gustaría que mis padres viven más cerca.",
        "Me gustaría que mis padres vivieran más cerca.",
        "Me gustaría que + otro sujeto → imperfecto de subjuntivo (vivieran), nunca indicativo.",
        ["Me gustaría que mis padres viviesen más cerca."],
        "Corrige la frase."
      ),
      toEs(
        "Me encantaría que yo hablara francés.",
        "Me encantaría hablar francés.",
        "Si el que desea y el que habla son la misma persona, no hay que + subjuntivo: se usa el infinitivo (hablar).",
        [],
        "Corrige la frase."
      ),
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
        "La regla: el condicional suaviza, el subjuntivo lo sigue",
        [
          "Recuerda la regla: para suavizar una petición se pasa del presente al condicional (le agradecería, sería mejor, me gustaría) o se usa quisiera. Y como el condicional pertenece al grupo del pasado, lo que depende de él va en imperfecto de subjuntivo: le agradecería que me mandara…",
          "¿Por qué es más cortés? El condicional y el imperfecto de subjuntivo alejan la petición de la realidad: presentan lo que pides como una posibilidad, no como una orden. En América se oye mucho «le agradecería que me responda», pero en un correo formal la norma prefiere el imperfecto.",
          "El correo original: «Quiero hablar con usted. Quiero que me mande el presupuesto. Es mejor que nos veamos el lunes.» Es correcto, pero poco cortés.",
        ],
        [
          ["Le agradecería que me mandara el presupuesto.", "I'd be grateful if you sent me the estimate. (condicional → mandara)"],
          ["Sería conveniente que habláramos antes de firmar.", "It would be advisable for us to talk before signing."],
        ],
        [
          { ...fb("Suaviza.", "Quiero consultarle una duda. → ___ consultarle una duda.", "Quisiera", "«Quisiera» (imperfecto de subjuntivo) es la forma más cortés de «quiero»."), altAnswers: ["Querría", "Me gustaría"] },
          mc(
            "«Le agradeceríamos que nos ___ antes del viernes.»",
            ["contestara", "conteste", "contesta", "contestaría"],
            0,
            "Agradeceríamos es condicional: en la norma formal pide imperfecto de subjuntivo, contestara. «Conteste» se oye pero es menos cuidado; «contesta» es indicativo y el condicional no va tras que en esta estructura."
          ),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Quiero que me mande el presupuesto. → Le agradecería que me ___ el presupuesto.", "mandara", "Tras condicional de cortesía («agradecería»), la subordinada va en imperfecto de subjuntivo."),
      fb("Suaviza.", "Es mejor que nos veamos el lunes. → Sería mejor que nos ___ el lunes.", "viéramos", "Tras «sería mejor que», imperfecto de subjuntivo; «viéramos» lleva tilde."),
      toEs("Corrige la secuencia: «Le agradecería que me responda pronto.»", "Le agradecería que me respondiera pronto.", "Tras «agradecería» (condicional), la norma culta prefiere el imperfecto de subjuntivo: «respondiera» («responda» se oye mucho, sobre todo en América, pero en un correo formal es mejor el imperfecto).", ["Le agradecería que me respondiese pronto.", "Le agradecería que me contestara pronto."]),
      toEs("Corrige la secuencia: «Me gustaría que venga usted a la reunión.»", "Me gustaría que viniera usted a la reunión.", "Tras «me gustaría» (condicional), la subordinada va en imperfecto de subjuntivo: «viniera»."),
      toEs("Corrige la secuencia: «Sería conveniente que lo revisen.»", "Sería conveniente que lo revisaran.", "Tras «sería conveniente» (condicional), la subordinada va en imperfecto de subjuntivo: «revisaran»."),
      mc(
        "¿Qué frase es la más cortés?",
        ["Quisiera saber si tienen habitaciones libres.", "Quiero saber si tienen habitaciones libres.", "Dígame si tienen habitaciones libres.", "¿Tienen habitaciones libres o no?"],
        0,
        "«Quisiera» (imperfecto de subjuntivo de querer) suaviza mucho la petición. «Quiero» es directo, «Dígame» es una orden y «¿… o no?» suena brusco."
      ),
      toEs(
        "Mándeme la factura hoy.",
        "Le agradecería que me mandara la factura hoy.",
        "Del imperativo a la cortesía: le agradecería (condicional) + que + imperfecto de subjuntivo (mandara).",
        ["Le agradecería que me enviara la factura hoy.", "Le agradecería que me mandase la factura hoy."],
        "Transforma la orden en una petición cortés con «le agradecería que»."
      ),
      toEs(
        "Es mejor que cambiemos la fecha.",
        "Sería mejor que cambiáramos la fecha.",
        "Sería mejor (condicional) → imperfecto de subjuntivo, con tilde en nosotros: cambiáramos.",
        ["Sería mejor que cambiásemos la fecha."],
        "Cambia «es mejor» por «sería mejor»."
      ),
      toEs(
        "Quiero que me llame mañana.",
        "Me gustaría que me llamara mañana.",
        "Me gustaría (condicional) suaviza el deseo y pide imperfecto de subjuntivo: llamara.",
        ["Me gustaría que me llamase mañana.", "Querría que me llamara mañana.", "Quisiera que me llamara mañana."],
        "Transforma en una petición cortés con «me gustaría que»."
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
        "Recuerda la regla: localiza el verbo principal",
        [
          "Recuerda la regla: antes de escribir el subjuntivo, localiza el verbo principal y su tiempo. Presente, futuro, imperativo o pretérito perfecto → presente de subjuntivo (espero que os lo paséis bien). Indefinido, imperfecto o condicional → imperfecto de subjuntivo (les pedí que me dijeran).",
          "En el dictado, escucha la sílaba tónica: el imperfecto de subjuntivo en nosotros es esdrújulo y lleva tilde (ganáramos, supiéramos); el presente de subjuntivo cambia la vocal (-ar → -e, -er/-ir → -a: llame, coma, viva).",
        ],
        [
          ["Siempre les he pedido que me digan la verdad.", "I've always asked them to tell me the truth. (perfecto → digan)"],
          ["Sería increíble que ganáramos la liga.", "It would be incredible if we won the league. (condicional → ganáramos, con tilde)"],
        ],
        [
          wo("Les pedí que me dijeran la verdad.", "Pedí (indefinido) → imperfecto de subjuntivo: dijeran (de dijeron, sin i).", "I asked them to tell me the truth."),
          { type: "dictation", audio: "Me alegro de que hayáis venido.", explanation: "Me alegro (presente) → presente de subjuntivo; aquí en perfecto (hayáis venido) porque la venida ya ha ocurrido. Hayáis con y y tilde." },
        ]
      ),
    ],
    [
      wo("No creí que fuera tan difícil.", "No creer que (duda) en pasado → imperfecto de subjuntivo: fuera.", "I didn't think it would be so hard."),
      wo("Espero que os lo paséis bien.", "Espero (presente) → presente de subjuntivo: paséis.", "I hope you have a good time."),
      wo("Sería increíble que ganáramos el campeonato.", "Sería (condicional) → imperfecto de subjuntivo: ganáramos.", "It would be incredible if we won the championship."),
      wo("Nos extrañó que no hubiera nadie en la calle.", "Nos extrañó (emoción en pasado) → imperfecto de subjuntivo: hubiera.", "It surprised us that there was nobody in the street."),
      toEs("I was hoping you would call me.", "Esperaba que me llamaras.", "«Esperar que» en pasado exige imperfecto de subjuntivo: «llamaras».", ["Esperaba que me llamases."]),
      toEs("It's strange that nobody answers.", "Es raro que nadie conteste.", "Las valoraciones como «es raro que» exigen subjuntivo; en presente: «conteste».", ["Es raro que nadie responda."]),
      { type: "dictation", audio: "Era imposible que llegáramos a tiempo.", explanation: "Era imposible (pasado) → imperfecto de subjuntivo: llegáramos, esdrújula con tilde (lle-GÁ-ra-mos)." },
      { type: "dictation", audio: "Dile que me espere en la puerta.", explanation: "Imperativo (dile) + que con valor de orden → presente de subjuntivo: espere." },
      toEs(
        "Nos piden que traigamos algo de comer.",
        "Nos pidieron que trajéramos algo de comer.",
        "Pidieron (indefinido) → imperfecto de subjuntivo: trajéramos (de trajeron), con tilde en nosotros.",
        ["Nos pidieron que trajésemos algo de comer."],
        "Pasa la frase al pretérito indefinido: «Nos pidieron…»."
      ),
      toEs(
        "Me sorprendió que nadie lo supiera.",
        "Me sorprende que nadie lo sepa.",
        "Me sorprende (presente) → presente de subjuntivo: sepa.",
        [],
        "Pasa la frase al presente: «Me sorprende…»."
      ),
      toEs(
        "Esperaba que me lo explicaran despacio.",
        "Esperaría que me lo explicaran despacio.",
        "El condicional (esperaría) pertenece al mismo grupo que el pasado: el subjuntivo sigue en imperfecto.",
        ["Esperaría que me lo explicasen despacio."],
        "Cambia «esperaba» por «esperaría»."
      ),
      toEs(
        "No creí que fuese tan tarde.",
        "No creo que sea tan tarde.",
        "No creo (presente) → presente de subjuntivo: sea.",
        [],
        "Pasa la frase al presente: «No creo…»."
      ),
      toEs(
        "Ayer el médico me dijo que descanse unos días.",
        "Ayer el médico me dijo que descansara unos días.",
        "Dijo (orden en pasado) → imperfecto de subjuntivo: descansara.",
        ["Ayer el médico me dijo que descansase unos días.", "Ayer la médica me dijo que descansara unos días."],
        "Corrige la frase."
      ),
      toEs(
        "Os he pedido muchas veces que no gritarais.",
        "Os he pedido muchas veces que no gritéis.",
        "El pretérito perfecto (he pedido) pide presente de subjuntivo: gritéis.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Sería una pena que se perdía el partido.",
        "Sería una pena que se perdiera el partido.",
        "Tras una valoración (sería una pena) siempre subjuntivo; con condicional, imperfecto: se perdiera.",
        ["Sería una pena que se perdiese el partido."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla: tres preguntas en pasado",
        [
          "Recuerda la regla, con tres preguntas. 1) Relativa: ¿el antecedente era conocido? Sí → indicativo (el hotel que tenía piscina); no, o no existía → subjuntivo (un hotel que admitiera perros). 2) Adverbial: para que, antes de que y sin que, siempre subjuntivo; cuando y aunque con un hecho real, indicativo. 3) Tiempo: con el verbo principal en pasado, el subjuntivo va en imperfecto.",
          "«Buscábamos un hotel que admitiera perros. No había ninguno que tuviera sitio. Llamamos a mi tía para que nos dejara dormir en su casa. Aunque era tarde, nos abrió la puerta antes de que llegáramos al portal.»",
        ],
        [
          ["Queríamos un piso que tuviera ascensor.", "We wanted a flat that had a lift. (desconocido → tuviera)"],
          ["Al final alquilamos un piso que tenía ascensor.", "In the end we rented a flat that had a lift. (conocido → tenía)"],
          ["Aunque llovía, salimos.", "Although it was raining, we went out. (hecho → indicativo)"],
        ],
        [
          fb("Completa.", "Buscábamos un hotel que ___ perros. (admitir)", "admitiera", "Un hotel todavía desconocido + buscábamos (pasado) → imperfecto de subjuntivo: admitiera."),
          mc(
            "«Al final encontramos una pensión que ___ perros.»",
            ["admitía", "admitiera", "admita", "admitirá"],
            0,
            "Con encontramos, la pensión ya es conocida y existe: indicativo, admitía. «Admitiera» y «admita» la presentarían como desconocida, y «admitirá» es futuro."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No había ninguno que ___ sitio. (tener)", "tuviera", "Ninguno = antecedente inexistente → subjuntivo; con había (pasado), imperfecto: tuviera."),
      fb("Completa.", "Llamamos a mi tía para que nos ___ dormir en su casa. (dejar)", "dejara", "Para que + principal en pasado (llamamos) → imperfecto de subjuntivo: dejara."),
      fb("Completa.", "Aunque ___ tarde, nos abrió la puerta. (ser — era un hecho)", "era", "Aunque + hecho real → indicativo: era."),
      fb("Completa.", "…antes de que ___ al portal. (llegar, nosotros)", "llegáramos", "Antes de que + pasado → imperfecto de subjuntivo: llegáramos (con tilde)."),
      fb("Completa.", "Mi tía quería que nos ___ una semana. (quedar)", "quedáramos", "Quería (deseo en pasado) + otro sujeto → imperfecto de subjuntivo: quedáramos."),
      mc(
        "«Cuando ___ a su casa, ya estaba la cena en la mesa.»",
        ["llegamos", "llegáramos", "lleguemos", "llegaremos"],
        0,
        "Un hecho pasado real con cuando va en indicativo: cuando llegamos. «Llegáramos» y «lleguemos» son subjuntivo, y «llegaremos» es futuro."
      ),
      toEs("We needed someone who could look after the dog.", "Necesitábamos a alguien que pudiera cuidar al perro.", "Antecedente desconocido con verbo en pasado → imperfecto de subjuntivo: «pudiera».", ["Necesitábamos a alguien que cuidara al perro.", "Necesitábamos a alguien que pudiese cuidar del perro.", "Necesitábamos a alguien que pudiera cuidar del perro."]),
      toEs(
        "Busco un piso que tenga terraza.",
        "Buscaba un piso que tuviera terraza.",
        "El antecedente sigue siendo desconocido (subjuntivo), y con buscaba en pasado pasa al imperfecto: tuviera.",
        ["Buscaba un piso que tuviese terraza.", "Buscaba un departamento que tuviera terraza."],
        "Pasa la frase al pretérito imperfecto."
      ),
      toEs(
        "Buscábamos un restaurante que abriera los lunes.",
        "Encontramos un restaurante que abría los lunes.",
        "Con encontramos, el restaurante ya es real y conocido: la relativa pasa al indicativo (abría).",
        [],
        "Cambia «buscábamos» por «encontramos»."
      ),
      toEs(
        "Te dejo las llaves para que entres.",
        "Te dejé las llaves para que entraras.",
        "Para que + principal en pasado (dejé) → imperfecto de subjuntivo: entraras.",
        ["Te dejé las llaves para que entrases."],
        "Pasa la frase al pretérito indefinido."
      ),
      toEs(
        "No conocíamos a nadie que hablaba ruso.",
        "No conocíamos a nadie que hablara ruso.",
        "Nadie es un antecedente inexistente: subjuntivo, y en pasado, imperfecto (hablara).",
        ["No conocíamos a nadie que hablase ruso."],
        "Corrige la frase."
      ),
      toEs(
        "Salimos del hotel sin que el recepcionista nos vea.",
        "Salimos del hotel sin que el recepcionista nos viera.",
        "Sin que + principal en pasado (salimos) → imperfecto de subjuntivo: viera.",
        ["Salimos del hotel sin que el recepcionista nos viese.", "Salimos del hotel sin que la recepcionista nos viera."],
        "Corrige la frase."
      ),
      toEs(
        "Aunque estuviéramos cansados, anoche fuimos a la fiesta porque era el cumpleaños de Ana.",
        "Aunque estábamos cansados, anoche fuimos a la fiesta porque era el cumpleaños de Ana.",
        "Es un hecho real del pasado que contamos: aunque + indicativo (estábamos).",
        [],
        "Corrige la frase: el cansancio era un hecho."
      ),
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
        "La regla: influir sobre otro = subjuntivo",
        [
          "Recuerda la regla: pedir, rogar, exigir, prohibir, permitir, aconsejar, recomendar o suplicar + que + subjuntivo, siempre que quien influye y quien actúa sean personas distintas. En pasado, el subjuntivo va en imperfecto: me exigieron que presentara el DNI.",
          "¿Por qué subjuntivo? Lo que se pide o se prohíbe todavía no se ha hecho: es una acción deseada, no un hecho. Con algunos de estos verbos también vale el infinitivo con un pronombre: nos prohibieron hacer fotos = nos prohibieron que hiciéramos fotos. Y ojo con decir: con orden lleva subjuntivo (me dijo que viniera), con información, indicativo (me dijo que venía).",
        ],
        [
          ["Nos prohibieron que hiciéramos fotos.", "They forbade us to take photos. (prohibieron → hiciéramos)"],
          ["El médico me aconseja que camine más.", "The doctor advises me to walk more. (presente → camine)"],
          ["Me dijo que venía.", "She told me she was coming. (decir = informar → indicativo)"],
        ],
        [
          fb("Estación 1.", "Me exigieron que ___ el DNI. (presentar)", "presentara", "Exigieron (pasado) → imperfecto de subjuntivo: presentara."),
          mc(
            "«Mi hermana me dijo que ___ a buscarla a las ocho.» (era una orden)",
            ["fuera", "iba", "iría", "voy"],
            0,
            "Decir con valor de orden lleva subjuntivo; con dijo (pasado), imperfecto: fuera. «Iba» e «iría» transmitirían una información, no una orden, y «voy» no sigue al pasado."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Nos rogaron que no ___ ruido. (hacer)", "hiciéramos", "Rogaron (pasado) → imperfecto de subjuntivo, con tilde en nosotros: hiciéramos."),
      fb("Estación 2.", "El guía nos permitió que ___ las esculturas. (tocar)", "tocáramos", "Permitió (pasado) → imperfecto de subjuntivo: tocáramos."),
      fb("Estación 2.", "Mis amigos me aconsejaron que no ___ ese piso. (alquilar)", "alquilara", "Aconsejaron (pasado) → imperfecto de subjuntivo: alquilara."),
      fb("Estación 3.", "La profesora nos recomendó que ___ el periódico. (leer)", "leyéramos", "Recomendó (pasado) → imperfecto de subjuntivo desde leyeron, con tilde: leyéramos."),
      fb("Estación 3.", "Le supliqué que no se ___. (ir)", "fuera", "Supliqué (pasado) → imperfecto de subjuntivo: se fuera (ir → fueron)."),
      fb("Estación 4.", "Siempre me piden que ___ el postre. (traer)", "traiga", "Piden (presente) → presente de subjuntivo: traiga."),
      toEs("They asked us not to use the lift.", "Nos pidieron que no usáramos el ascensor.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «no usáramos».", ["Nos pidieron que no utilizáramos el ascensor.", "Nos pidieron que no usásemos el ascensor."]),
      toEs(
        "El entrenador nos exige que corramos diez kilómetros.",
        "El entrenador nos exigió que corriéramos diez kilómetros.",
        "Exigió (pasado) → imperfecto de subjuntivo: corriéramos.",
        ["El entrenador nos exigió que corriésemos diez kilómetros.", "La entrenadora nos exigió que corriéramos diez kilómetros."],
        "Pasa la frase al pretérito indefinido."
      ),
      toEs(
        "Nos prohibieron usar el móvil en el examen.",
        "Nos prohibieron que usáramos el móvil en el examen.",
        "Prohibir admite infinitivo o que + subjuntivo; con que, y en pasado, imperfecto: usáramos.",
        ["Nos prohibieron que usásemos el móvil en el examen."],
        "Reescribe con «que» + subjuntivo."
      ),
      toEs(
        "Me aconsejaron que no firmara nada.",
        "Me aconsejan que no firme nada.",
        "Aconsejan (presente) → presente de subjuntivo: firme.",
        [],
        "Pasa la frase al presente."
      ),
      toEs(
        "La directora nos pidió que llegamos antes de las ocho.",
        "La directora nos pidió que llegáramos antes de las ocho.",
        "Pedir que es influencia: subjuntivo siempre, aquí en imperfecto (llegáramos), no indicativo.",
        ["La directora nos pidió que llegásemos antes de las ocho.", "El director nos pidió que llegáramos antes de las ocho."],
        "Corrige la frase."
      ),
      toEs(
        "Mis padres me permitieron que vaya al concierto.",
        "Mis padres me permitieron que fuera al concierto.",
        "Permitieron (pasado) → imperfecto de subjuntivo: fuera. El presente (vaya) no sigue al indefinido.",
        ["Mis padres me permitieron que fuese al concierto.", "Mis padres me permitieron ir al concierto."],
        "Corrige la frase."
      ),
      toEs(
        "El policía nos ordenó que nos apartaríamos.",
        "El policía nos ordenó que nos apartáramos.",
        "Ordenar que lleva subjuntivo, no condicional: nos apartáramos (imperfecto, porque ordenó está en pasado).",
        ["El policía nos ordenó que nos apartásemos.", "La policía nos ordenó que nos apartáramos."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: si + imperfecto de subjuntivo, + condicional. La condición imaginada va en subjuntivo (tuviera) y la consecuencia imaginada en condicional (viajaría). El orden puede invertirse sin cambiar los tiempos: Viajaría más si tuviera tiempo.",
          "Nunca condicional después del si condicional (✗ si tendría). Ojo: sí puede ir tras el si de una pregunta indirecta, que significa «whether»: No sé si podría ir.",
        ],
        [
          ["Si tuviera tiempo, viajaría más.", "If I had time, I'd travel more."],
          ["Viviría en la playa si pudiera.", "I'd live at the beach if I could. (orden invertido, mismos tiempos)"],
          ["No sé si podría ir.", "I don't know whether I could go. (si = whether → condicional posible)"],
        ],
        [
          fb("Mismo marco.", "Si ___ el coche, iríamos a la sierra. (arreglar, ellos)", "arreglaran", "La condición imaginada va en imperfecto de subjuntivo: arreglaron → arreglaran. «Arreglarían» no puede ir tras si."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Si tuviera dinero, ___ una casa. (comprarse, yo)", "me compraría", "La consecuencia imaginada va en condicional, con el pronombre delante: me compraría."),
      fb("Mismo marco.", "Si ___ más alto, jugaría al baloncesto. (ser, yo)", "fuera", "Si + imperfecto de subjuntivo de ser: fueron → fuera."),
      fb("Mismo marco.", "Si supiera cocinar, ___ cenas para mis amigos. (hacer)", "haría", "Consecuencia en condicional; hacer tiene raíz irregular: har- → haría."),
      fb("Mismo marco.", "Si ___ en Madrid, iría al teatro cada semana. (vivir, nosotros)", "viviéramos", "Si + imperfecto de subjuntivo; lleva tilde porque es esdrújula (vi-VIÉ-ra-mos)."),
      fb("Mismo marco.", "Si pudiera volar, ___ a Japón en un momento. (ir)", "iría", "Consecuencia en condicional: ir → iría (regular en condicional)."),
      toEs("Si no trabajas tanto, duermes mejor.", "Si no trabajaras tanto, dormirías mejor.", "Para convertir el consejo en hipótesis, la condición pasa a imperfecto de subjuntivo (trabajaras) y la consecuencia a condicional (dormirías).", ["Si no trabajases tanto, dormirías mejor.", "Dormirías mejor si no trabajaras tanto."], "Cambia la frase a una hipótesis (si + imperfecto de subjuntivo)."),
      toEs("Si podría elegir, viviría en el campo.", "Si pudiera elegir, viviría en el campo.", "Tras si nunca va condicional: si + imperfecto de subjuntivo, pudiera (de pudieron).", ["Si pudiese elegir, viviría en el campo.", "Viviría en el campo si pudiera elegir."], "Corrige la frase."),
      mc(
        "«Si ___ la respuesta, te la diría.»",
        ["supiera", "sabría", "sé", "sepa"],
        0,
        "En una hipótesis, tras si va imperfecto de subjuntivo: si supiera. «Sabría» (condicional) nunca va tras si, «sé» haría la condición real y «sepa» (presente de subjuntivo) no se usa tras si."
      ),
      toEs("If I had a garden, I would grow tomatoes.", "Si tuviera un jardín, cultivaría tomates.", "Si + imperfecto de subjuntivo (tuviera), + condicional (cultivaría).", ["Si tuviese un jardín, cultivaría tomates.", "Cultivaría tomates si tuviera un jardín.", "Si tuviera jardín, cultivaría tomates."]),
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
        [
          "La regla: real o probable → si + presente de indicativo, y presente, futuro o imperativo en la otra parte (Si tengo tiempo, te ayudo). Hipotético o contrario a la realidad → si + imperfecto de subjuntivo, y condicional (Si tuviera tiempo, te ayudaría).",
          "Lo decide el hablante: la misma situación puede ir de las dos formas según cuánto crea en ella. «Si llueve» cuenta con la lluvia; «Si lloviera» la ve poco probable. Y nunca presente de subjuntivo tras si (✗ si tenga).",
        ],
        [
          ["Si llueve, no iremos.", "If it rains, we won't go. (cuenta con que puede llover)"],
          ["Si lloviera, no iríamos.", "If it rained, we wouldn't go. (lo ve poco probable)"],
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
      fb("Real.", "Si ___ el examen, lo celebraremos. (aprobar, tú)", "apruebas", "Es posible y lo celebraremos (futuro): condición real → si + presente de indicativo, apruebas."),
      fb("Hipotético.", "Si ___ el examen sin estudiar, sería un milagro. (aprobar, tú)", "aprobaras", "Sería un milagro: improbable → si + imperfecto de subjuntivo, aprobaras."),
      fb("Real.", "Si me ___ el premio, me voy de viaje. (tocar)", "toca", "Me voy (presente) indica que lo ves posible: si + presente de indicativo, toca."),
      fb("Hipotético.", "Si me ___ la lotería, dejaría de trabajar. (tocar)", "tocara", "Dejaría (condicional) marca hipótesis: si + imperfecto de subjuntivo, tocara."),
      fb("Real.", "Si ___ tiempo mañana, paso por tu casa. (tener, yo)", "tengo", "Plan posible para mañana: si + presente de indicativo, tengo."),
      fb("Hipotético.", "Si ___ tiempo, estudiaría otro idioma, pero no lo tengo. (tener, yo)", "tuviera", "Pero no lo tengo: contrario a la realidad → si + imperfecto de subjuntivo, tuviera."),
      toEs("Si me invitan, voy a la boda.", "Si me invitaran, iría a la boda.", "Para verlo como poco probable: si + imperfecto de subjuntivo (invitaran) y condicional (iría).", ["Si me invitasen, iría a la boda.", "Iría a la boda si me invitaran."], "Cambia la condición real por una hipotética."),
      toEs("Si tenga vacaciones en julio, iré a Perú.", "Si tengo vacaciones en julio, iré a Perú.", "Tras si nunca va presente de subjuntivo. Como el plan es posible y la consecuencia está en futuro (iré), va presente de indicativo: tengo.", ["Si tuviera vacaciones en julio, iría a Perú."], "Corrige la frase."),
      toEs("If I see him, I'll tell him.", "Si lo veo, se lo diré.", "Condición real o probable: «si» + presente, y futuro en la consecuencia.", ["Si le veo, se lo diré.", "Si lo veo, se lo digo."]),
      toEs("If I saw him, I would tell him.", "Si lo viera, se lo diría.", "Condición hipotética: «si» + imperfecto de subjuntivo, y condicional en la consecuencia.", ["Si le viera, se lo diría.", "Si lo viese, se lo diría."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-1",
    "b2d-circuito-como-si",
    "Circuito: como si + imperfecto de subjuntivo",
    "Comparar con algo que no es verdad: como si + imperfecto (o pluscuamperfecto) de subjuntivo.",
    "6 min",
    [
      sec(
        "Como si",
        [
          "La regla: como si compara la realidad con algo que no es verdad (o que el hablante no cree), así que va siempre con imperfecto de subjuntivo: Habla como si fuera el jefe (no lo es). Si la comparación se refiere a algo anterior, pluscuamperfecto: como si no hubiera pasado nada.",
          "A diferencia de la secuencia normal, el tiempo del verbo principal no cambia nada: Habla / Hablaba / Hablará como si fuera el jefe. Nunca indicativo ni presente de subjuntivo tras como si (✗ como si es, ✗ como si sea).",
        ],
        [
          ["Me mira como si no me conociera.", "He looks at me as if he didn't know me. (presente → conociera)"],
          ["Me miró como si no me conociera.", "He looked at me as if he didn't know me. (pasado → la misma forma)"],
          ["Sonríe como si no hubiera pasado nada.", "She smiles as if nothing had happened. (algo anterior → pluscuamperfecto)"],
        ],
        [
          fb("Estación 1.", "Habla como si lo ___ todo. (saber)", "supiera", "Como si + imperfecto de subjuntivo: supieron → supiera. No lo sabe todo: por eso subjuntivo."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Actúa como si no ___ nada. (pasar)", "pasara", "Como si + imperfecto de subjuntivo: pasara (algo pasa, pero actúa como si no)."),
      fb("Estación 1.", "Duerme como si no ___ preocupaciones. (tener)", "tuviera", "Como si + imperfecto de subjuntivo: tuvieron → tuviera."),
      fb("Estación 2.", "Me trató como si ___ un niño. (ser, yo)", "fuera", "Aunque el verbo principal esté en pasado (trató), como si lleva la misma forma: fuera."),
      fb("Estación 2.", "Bailaban como si nadie los ___. (mirar)", "mirara", "Como si + imperfecto de subjuntivo: mirara; nadie es singular."),
      fb("Estación 3.", "No me hables como si ___ tonta. (ser, yo)", "fuera", "Como si + imperfecto de subjuntivo de ser: fuera, también con un imperativo en la principal."),
      fb("Estación 3.", "Corre como si ___ prisa. (tener)", "tuviera", "Como si + imperfecto de subjuntivo: tuviera."),
      toEs("Habla como si fuera el dueño.", "Hablaba como si fuera el dueño.", "Solo cambia el verbo principal (hablaba); tras como si la forma es la misma, fuera, sea cual sea el tiempo de la principal.", ["Habló como si fuera el dueño.", "Hablaba como si fuese el dueño."], "Cambia el verbo principal al imperfecto."),
      toEs("Grita como si está enfadado.", "Grita como si estuviera enfadado.", "Como si nunca va con indicativo: compara con algo irreal, así que pide imperfecto de subjuntivo, estuviera.", ["Grita como si estuviese enfadado."], "Corrige la frase."),
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
        [
          "Recuerda la regla: la pregunta hipotética tiene dos piezas: condicional para la acción imaginada (¿qué harías?) y si + imperfecto de subjuntivo para la condición (si fueras invisible). La respuesta repite el condicional: Entraría en un concierto sin pagar.",
          "Si repites la condición en la respuesta, se queda en imperfecto de subjuntivo: Si fuera invisible, entraría... Y la persona cambia: la pregunta va con tú (harías, fueras), la respuesta con yo (haría, fuera).",
        ],
        [
          ["—¿Adónde irías si pudieras viajar gratis? —Iría a Nueva Zelanda.", "Where would you go if you could travel for free? I'd go to New Zealand. (irías → iría)"],
          ["—¿Qué harías si fueras invisible? —Si fuera invisible, entraría en un concierto sin pagar.", "What would you do if you were invisible? If I were invisible, I'd sneak into a concert."],
        ],
        [
          fb("Responde.", "—¿Qué harías si tuvieras un día libre mañana? —___ hasta mediodía. (dormir)", "Dormiría", "La respuesta a «¿qué harías?» va en condicional y en primera persona: dormiría."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Qué comprarías si te tocara la lotería? —Me ___ una casa en el campo. (comprar)", "compraría", "Respuesta a una hipótesis → condicional en primera persona: me compraría."),
      fb("Responde.", "—¿Con quién cenarías si pudieras elegir a cualquiera? —___ con Frida Kahlo. (cenar)", "Cenaría", "Cenarías (tú) → cenaría (yo): la respuesta mantiene el condicional."),
      fb("Responde.", "—¿Qué cambiarías si ___ presidente? —Bajaría los impuestos. (ser, tú)", "fueras", "La condición de la pregunta va en si + imperfecto de subjuntivo: fueras."),
      fb("Responde.", "—¿Qué dirías si te ___ un ovni? —Diría que estoy soñando. (aparecer)", "apareciera", "Si + imperfecto de subjuntivo: aparecieron → apareciera. Un ovni es el sujeto (singular)."),
      fb("Responde.", "—¿Dónde vivirías si no ___ que trabajar? —En una isla. (tener, tú)", "tuvieras", "Si + imperfecto de subjuntivo: tuvieras."),
      mc(
        "—¿Qué harías si perdieras el pasaporte? —«___ a la embajada.»",
        ["Iría", "Fuera", "Iré", "Voy"],
        0,
        "Para responder a una hipótesis (¿qué harías?) se usa el condicional: iría. «Fuera» es subjuntivo, «iré» es futuro real y «voy» es presente."
      ),
      toEs("¿Qué haces si pierdes las llaves?", "¿Qué harías si perdieras las llaves?", "Para que la pregunta sea hipotética: condicional (harías) y si + imperfecto de subjuntivo (perdieras).", ["¿Qué harías si perdieses las llaves?"], "Cambia la pregunta a una hipótesis."),
      toEs("—¿Qué harías si ganaras un viaje? —Me iría a Japón si lo ganaría.", "—¿Qué harías si ganaras un viaje? —Me iría a Japón si lo ganara.", "En la respuesta, la condición sigue llevando si + imperfecto de subjuntivo (ganara). El condicional va solo en la consecuencia (me iría).", ["—¿Qué harías si ganaras un viaje? —Si lo ganara, me iría a Japón.", "—¿Qué harías si ganaras un viaje? —Me iría a Japón si lo ganase."], "Corrige la respuesta."),
      { type: "speak", prompt: "¿Qué harías si pudieras hablar cualquier idioma? Responde en voz alta con el condicional (por ejemplo: viajar por toda Asia).", text: "Si pudiera hablar cualquier idioma, viajaría por toda Asia.", explanation: "Repites la condición con si + imperfecto de subjuntivo (pudiera) y respondes con el condicional (viajaría)." },
      toEs("What would you do if you had a million euros?", "¿Qué harías si tuvieras un millón de euros?", "Pregunta hipotética: condicional en la principal y «si» + imperfecto de subjuntivo.", ["¿Qué harías si tuvieses un millón de euros?"]),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: en la hipótesis, cada mitad tiene su tiempo. La mitad con si lleva imperfecto de subjuntivo (si tuviera); la otra mitad lleva condicional (aprendería). El error típico es poner condicional en las dos (✗ si tendría... aprendería), porque en inglés «would» a veces aparece en las dos partes.",
          "Truco: busca el si. Si el verbo que lo sigue acaba en -ría, está mal. El segundo error típico es el contrario: poner presente o subjuntivo en la consecuencia (✗ si fuera rico, compre un barco).",
        ],
        [
          ["Si tuviera más tiempo, aprendería a tocar la guitarra.", "If I had more time, I'd learn to play the guitar. (si + -ra, consecuencia en -ría)"],
          ["Me quedaría en la empresa si me subieran el sueldo.", "I'd stay at the company if they raised my salary. (orden invertido, mismos tiempos)"],
        ],
        []
      ),
      sec(
        "El texto",
        "«Si tendría más tiempo, aprendería a tocar la guitarra. Si fuera rico, compre un barco. Si mi jefe me subiría el sueldo, me quedaría en la empresa.» Tres errores.",
        [],
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
      toEs("Si fuera rico, compre un barco.", "Si fuera rico, compraría un barco.", "En la consecuencia de «si fuera» va condicional: «compraría», no «compre».", ["Si fuera rica, compraría un barco.", "Si fuese rico, compraría un barco."], "Corrige la frase."),
      toEs("Si mi jefe me subiría el sueldo, me quedaría.", "Si mi jefe me subiera el sueldo, me quedaría.", "Tras «si» condicional nunca va condicional: «si me subiera», no «si me subiría».", ["Si mi jefa me subiera el sueldo, me quedaría.", "Si mi jefe me subiese el sueldo, me quedaría."], "Corrige la frase."),
      toEs("Si podría, te ayudaría.", "Si pudiera, te ayudaría.", "Tras «si» condicional nunca va condicional: «si pudiera», no «si podría».", ["Si pudiese, te ayudaría.", "Te ayudaría si pudiera."], "Corrige la frase."),
      toEs("Si estudiaras más, aprobarás.", "Si estudiaras más, aprobarías.", "Con si + imperfecto de subjuntivo (hipótesis), la consecuencia va en condicional: aprobarías. «Aprobarás» solo iría con «si estudias».", ["Si estudias más, aprobarás."], "Corrige la frase."),
      toEs("Si tengo hambre, como algo.", "Si tuviera hambre, comería algo.", "Para convertir la condición real en hipótesis, cambian las dos mitades: si + imperfecto de subjuntivo (tuviera) y condicional (comería).", ["Si tuviese hambre, comería algo.", "Comería algo si tuviera hambre."], "Cambia la condición real por una hipotética."),
      toEs("Si me llamas, te lo cuento.", "Si me llamaras, te lo contaría.", "Hipótesis: si + imperfecto de subjuntivo (llamaras) y condicional (contaría). Nunca «si me llamarías».", ["Si me llamases, te lo contaría.", "Te lo contaría si me llamaras."], "Cambia la condición real por una hipotética."),
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
    "Practica si + imperfecto de subjuntivo + condicional y como si en un debate sobre la inteligencia artificial.",
    "7 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Recuerda la regla: en un debate sobre el futuro se imaginan escenarios. El escenario va con si + imperfecto de subjuntivo (si las máquinas hicieran...) y su efecto en condicional (tendríamos...). Para criticar cómo habla alguien, como si + imperfecto de subjuntivo: Hablas como si fuera fácil.",
          "Fíjate en que cada hablante puede presentar la misma idea como real o como hipótesis: «Si el Estado garantiza una renta» (lo da por posible) / «si garantizara» (lo ve lejano).",
        ],
        [
          ["Si los coches se condujeran solos, habría menos accidentes.", "If cars drove themselves, there would be fewer accidents. (escenario + efecto)"],
          ["Habla del futuro como si lo conociera.", "He talks about the future as if he knew it. (como si + conociera)"],
        ],
        []
      ),
      sec(
        "La tertulia",
        "Ana: «Si las máquinas hicieran todo el trabajo, tendríamos más tiempo libre.» Pedro: «Si eso pasara, mucha gente se quedaría sin empleo.» Ana: «No si el Estado garantizara una renta básica.» Pedro: «Hablas como si fuera tan fácil.»",
        [],
        [
          fb("Continúa el debate.", "Pedro: «Además, si una máquina ___ un error médico, nadie sabría a quién culpar.» (cometer)", "cometiera", "Nuevo escenario imaginado: si + imperfecto de subjuntivo, cometieron → cometiera; la consecuencia va en condicional (sabría)."),
        ]
      ),
    ],
    [
      fb("Completa.", "…___ más tiempo libre. (tener, nosotros)", "tendríamos", "La consecuencia de la hipótesis va en condicional; tener tiene raíz irregular: tendr- → tendríamos."),
      fb("Completa.", "Si eso ___, mucha gente se quedaría sin empleo. (pasar)", "pasara", "La condición imaginada va en imperfecto de subjuntivo: pasara."),
      fb("Completa.", "…mucha gente se ___ sin empleo. (quedar)", "quedaría", "Consecuencia en condicional: se quedaría (gente es singular)."),
      fb("Completa.", "No si el Estado ___ una renta básica. (garantizar)", "garantizara", "Si + imperfecto de subjuntivo: garantizara. Ana presenta la renta como hipótesis."),
      fb("Completa.", "Hablas como si ___ tan fácil. (ser)", "fuera", "Como si + imperfecto de subjuntivo: fuera. Pedro cree que no es fácil."),
      mc(
        "«Si los robots ___ sentimientos, ¿tendrían derechos?»",
        ["tuvieran", "tendrían", "tienen", "tengan"],
        0,
        "Una hipótesis presente: si + imperfecto de subjuntivo, tuvieran. «Tendrían» no va tras si, «tienen» haría la condición real y «tengan» no se usa tras si."
      ),
      mc(
        "Ana dice: «Si las máquinas trabajaran por nosotros, podríamos dedicarnos al arte». ¿Qué le responde Pedro con sentido?",
        ["Hablas como si todos quisiéramos ser artistas.", "Hablas como si todos queremos ser artistas.", "Si trabajarían por nosotros, nos aburriríamos.", "Hablas como si todos querríamos ser artistas."],
        0,
        "Para criticar la idea de Ana, como si + imperfecto de subjuntivo: quisiéramos. «Queremos» (indicativo) y «querríamos» (condicional) no van tras como si, y «si trabajarían» pone condicional tras si."
      ),
      toEs("Si la IA escribe nuestros correos, ahorraremos tiempo.", "Si la IA escribiera nuestros correos, ahorraríamos tiempo.", "Al convertirlo en escenario imaginado: escribiera (imperfecto de subjuntivo) tras si y ahorraríamos (condicional).", ["Si la IA escribiese nuestros correos, ahorraríamos tiempo.", "Ahorraríamos tiempo si la IA escribiera nuestros correos."], "Cambia la condición real por una hipotética."),
      toEs("Si los robots harían las tareas de casa, tendríamos más tiempo.", "Si los robots hicieran las tareas de casa, tendríamos más tiempo.", "Tras si nunca va condicional: hicieran (de hicieron). El condicional solo va en la consecuencia: tendríamos.", ["Si los robots hiciesen las tareas de casa, tendríamos más tiempo."], "Corrige la frase."),
      toEs("If I were you, I wouldn't trust that app.", "Si yo fuera tú, no me fiaría de esa aplicación.", "«Si yo fuera tú» + condicional es la fórmula para dar consejos.", ["Si fuera tú, no me fiaría de esa app.", "Si yo fuera tú, no confiaría en esa aplicación."]),
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
        [
          "Recuerda la regla: para pasar de lo posible a lo improbable, cambian las dos mitades. 1) La condición: si + presente de indicativo → si + imperfecto de subjuntivo (vienes → vinieras). 2) La consecuencia: presente, futuro o imperativo → condicional (cenamos / cenaremos → cenaríamos).",
          "Si solo cambias una mitad, la frase queda coja: ✗ Si vinieras, cenamos. Y para formar el imperfecto de subjuntivo, parte siempre de ellos del indefinido: vinieron → vinieras, pusieron → pusieras.",
        ],
        [
          ["Si puedo, te llamo. → Si pudiera, te llamaría.", "If I can, I'll call you. → If I could, I'd call you."],
          ["Si hay tiempo, comeremos fuera. → Si hubiera tiempo, comeríamos fuera.", "If there's time, we'll eat out. → If there were time, we'd eat out."],
        ],
        [
          fb("Hipotético.", "Si vienes, cenamos juntos. → Si ___, cenaríamos juntos.", "vinieras", "Para pasar a hipótesis: si + imperfecto de subjuntivo; la raíz sale de la forma ellos del indefinido (vinieron → vinieras)."),
        ]
      ),
    ],
    [
      fb("Hipotético.", "Si hace sol, iremos a la playa. → Si ___ sol, iríamos a la playa.", "hiciera", "Hipótesis: si + imperfecto de subjuntivo; la raíz sale de la forma ellos del indefinido (hicieron → hiciera)."),
      fb("Hipotético.", "Si hace sol, iremos a la playa. → Si hiciera sol, ___ a la playa.", "iríamos", "En la hipótesis, la consecuencia va en condicional: iríamos."),
      fb("Hipotético.", "Si me lo pides, te lo doy. → Si me lo pidieras, te lo ___.", "daría", "La consecuencia de si + imperfecto de subjuntivo va en condicional: daría."),
      fb("Hipotético.", "Si están cansados, se quedan. → Si ___ cansados, se quedarían.", "estuvieran", "Hipótesis: si + imperfecto de subjuntivo; la raíz sale de la forma ellos del indefinido (estuvieron → estuvieran)."),
      fb("Hipotético.", "Si sabemos la verdad, la diremos. → Si ___ la verdad, la diríamos.", "supiéramos", "Hipótesis: si + imperfecto de subjuntivo; la raíz sale de la forma ellos del indefinido (supieron); con tilde en nosotros: supiéramos."),
      fb("Real.", "Si pudiera, iría. → Si ___, iré.", "puedo", "Con consecuencia en futuro (iré), la condición es real: si + presente de indicativo, puedo."),
      mc(
        "¿Cuál es la versión hipotética de «Si tienes tiempo, me ayudas»?",
        ["Si tuvieras tiempo, me ayudarías.", "Si tendrías tiempo, me ayudarías.", "Si tuvieras tiempo, me ayudas.", "Si tengas tiempo, me ayudarías."],
        0,
        "Cambian las dos mitades: tienes → tuvieras (imperfecto de subjuntivo) y ayudas → ayudarías (condicional). «Si tendrías» pone condicional tras si, la tercera solo cambia una mitad y «si tengas» usa presente de subjuntivo, imposible tras si."
      ),
      toEs("Si me lo dirías, te ayudaría.", "Si me lo dijeras, te ayudaría.", "En la transformación solo la consecuencia va en condicional (ayudaría); tras si va imperfecto de subjuntivo: dijeras, de dijeron.", ["Si me lo dijeses, te ayudaría."], "Corrige la frase."),
      toEs("Si tuviera más dinero, me compro un coche.", "Si tuviera más dinero, me compraría un coche.", "Si cambias la condición a imperfecto de subjuntivo, la consecuencia también tiene que cambiar: condicional, me compraría.", ["Si tuviese más dinero, me compraría un coche.", "Si tuviera más dinero, me compraría un carro."], "Corrige la frase."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: para imaginar otra versión de tu vida, la situación imaginada va con si + imperfecto de subjuntivo (si pudiera, si viviera, si no tuviera) y lo que harías, en condicional (sería, elegiría, haría).",
          "Ojo con los condicionales irregulares, que salen mucho al hablar de ti: hacer → haría, tener → tendría, poder → podría, salir → saldría, decir → diría, querer → querría.",
        ],
        [
          ["Si no tuviera miedo, haría paracaidismo.", "If I weren't afraid, I'd go skydiving. (tuviera / haría)"],
          ["Si viviera en otro país, elegiría Portugal.", "If I lived in another country, I'd choose Portugal."],
        ],
        [
          fb("Tu vida.", "Si ___ cambiar de profesión, sería carpintero. (poder)", "pudiera", "La situación imaginada va en imperfecto de subjuntivo: pudieron → pudiera. «Podría» no va tras si."),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Si ___ un superpoder, leería mentes. (tener)", "tuviera", "Si + imperfecto de subjuntivo: tuvieron → tuviera."),
      fb("Tu vida.", "Si ___ volver a los quince años, estudiaría música. (poder)", "pudiera", "Si + imperfecto de subjuntivo: pudiera."),
      fb("Tu vida.", "Si mis padres ___ más cerca, los visitaría cada domingo. (vivir)", "vivieran", "Si + imperfecto de subjuntivo con sujeto plural (mis padres): vivieran."),
      mc(
        "Un amigo te pregunta qué harías con un mes libre. ¿Qué respondes?",
        ["Si tuviera un mes libre, aprendería a surfear.", "Si tendría un mes libre, aprendería a surfear.", "Si tuviera un mes libre, aprendo a surfear.", "Si tengo un mes libre, aprendería a surfear."],
        0,
        "Situación imaginada: si + imperfecto de subjuntivo (tuviera) y condicional (aprendería). La segunda pone condicional tras si; la tercera y la cuarta mezclan tiempos de hipótesis y de condición real."
      ),
      toEs("Si vivo en la costa, voy a nadar cada mañana.", "Si viviera en la costa, iría a nadar cada mañana.", "Para imaginarlo (no vives en la costa): viviera (imperfecto de subjuntivo) y iría (condicional).", ["Si viviese en la costa, iría a nadar cada mañana.", "Iría a nadar cada mañana si viviera en la costa."], "Cambia la frase a una situación imaginada."),
      toEs("Si no trabajaría tanto, saldría más con mis amigos.", "Si no trabajara tanto, saldría más con mis amigos.", "Tras si nunca va condicional: trabajara. El condicional va en la consecuencia: saldría (irregular, no «saliría»).", ["Si no trabajase tanto, saldría más con mis amigos.", "Si no trabajara tanto, saldría más con mis amigas."], "Corrige la frase."),
      { type: "speak", prompt: "Si pudieras cambiar una cosa de tu vida, ¿qué cambiarías? Responde en voz alta (por ejemplo: vivir más cerca del mar).", text: "Si pudiera cambiar una cosa, viviría más cerca del mar.", explanation: "Si + imperfecto de subjuntivo (pudiera) y condicional (viviría) para una situación imaginada." },
      toEs("If I didn't work, I would read all day.", "Si no trabajara, leería todo el día.", "Condición hipotética: «si» + imperfecto de subjuntivo («trabajara») y condicional («leería»).", ["Si no trabajase, leería todo el día.", "Leería todo el día si no trabajara."]),
      toEs("If I could live anywhere, I would choose Mexico.", "Si pudiera vivir en cualquier sitio, elegiría México.", "Condición hipotética: «si» + imperfecto de subjuntivo («pudiera») y condicional («elegiría»).", ["Si pudiera vivir en cualquier lugar, elegiría México.", "Si pudiera vivir en cualquier lugar, escogería México."]),
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
        [
          "La idea: para aconsejar sin dar órdenes, te imaginas en el lugar del otro. Por eso se usa una hipótesis: Si yo fuera tú (imperfecto de subjuntivo) + condicional (hablaría con ella). El condicional suaviza: no le dices qué hacer, le dices qué harías tú.",
          "Hay dos atajos sin si, muy frecuentes en la conversación: Yo que tú, hablaría con ella. Yo en tu lugar, hablaría con ella. Las tres fórmulas terminan en condicional, y se adaptan a la persona: si yo fuera usted / ella, yo que usted, yo en su lugar.",
        ],
        [
          ["Si yo fuera tú, no firmaría.", "If I were you, I wouldn't sign."],
          ["Yo que usted, pediría factura.", "If I were you (formal), I'd ask for a receipt. (atajo sin si)"],
          ["Yo en su lugar, esperaría un poco.", "In her place, I'd wait a bit."],
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
      fb("Aconseja.", "—Me duele la muela. —Si yo fuera tú, ___ al dentista hoy. (ir)", "iría", "El consejo va en condicional: iría. «Fuera» ya está en la parte de si."),
      fb("Aconseja.", "—Mi hermano no me habla. —Yo que tú, lo ___. (llamar)", "llamaría", "Tras «yo que tú» el consejo va en condicional: llamaría."),
      fb("Aconseja.", "—No sé qué estudiar. —Yo en tu lugar, ___ lo que te guste. (elegir)", "elegiría", "Tras «yo en tu lugar», condicional: elegiría. Lo que te guste va en subjuntivo porque es abierto."),
      fb("Aconseja.", "—Estoy agotada. —Si ___ tú, me tomaría unos días. (ser, yo)", "fuera", "La fórmula fija es «si yo fuera tú»: imperfecto de subjuntivo de ser."),
      mc(
        "«Yo que tú, no ___ tanto dinero en ropa.»",
        ["gastaría", "gastara", "gasto", "gaste"],
        0,
        "«Yo que tú» va seguido de condicional: gastaría. «Gastara» y «gaste» son subjuntivo, y «gasto» es presente."
      ),
      toEs("Habla con tu jefe.", "Si yo fuera tú, hablaría con tu jefe.", "Para convertir la orden en un consejo amable: si yo fuera tú + condicional (hablaría).", ["Yo que tú, hablaría con tu jefe.", "Yo en tu lugar, hablaría con tu jefe."], "Transforma la orden en un consejo con «si yo fuera tú»."),
      toEs("Yo que tú, no compres ese coche.", "Yo que tú, no compraría ese coche.", "Tras «yo que tú» va condicional, no imperativo ni subjuntivo: no compraría.", ["Yo que tú, no me compraría ese coche.", "Yo que tú, no compraría ese carro."], "Corrige la frase."),
      toEs("If I were you, I'd tell him the truth.", "Si yo fuera tú, le diría la verdad.", "«Si yo fuera tú» + condicional es la fórmula para dar consejos: «le diría».", ["Yo que tú, le diría la verdad.", "Si fuera tú, le diría la verdad.", "Yo en tu lugar, le diría la verdad."]),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2d-ronda-si-hipotetico",
    "Ronda rápida: la cláusula con si y la principal",
    "Practica cuándo va imperfecto de subjuntivo (cláusula con si) y cuándo condicional (consecuencia).",
    "5 min",
    [
      sec(
        "Dónde va cada forma",
        [
          "Recuerda la regla: la parte con si (la condición) → imperfecto de subjuntivo: tuviera, fuera, hablaras. La otra parte (la consecuencia) → condicional: tendría, sería, entendería. No importa qué parte vaya primero.",
          "Para la ronda, mira si el hueco está justo detrás de si: si es así, -ra; si no, -ría. Cuidado con los condicionales irregulares: saldr-, sabr-, tendr-, podr-, har-, dir-.",
        ],
        [
          ["Si fuera más barato, lo compraría.", "If it were cheaper, I'd buy it. (si + fuera / compraría)"],
          ["Lo compraría si fuera más barato.", "I'd buy it if it were cheaper. (mismo reparto en otro orden)"],
        ],
        [
          fb("Rápido.", "Si ___ más grande, cabríamos todos. (ser, el coche)", "fuera", "El hueco está detrás de si: condición → imperfecto de subjuntivo, fuera."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si el piso tuviera terraza, lo ___. (alquilar, yo)", "alquilaría", "Consecuencia (no hay si delante) → condicional: alquilaría."),
      fb("Rápido.", "Si ___ más despacio, te entendería. (hablar, tú)", "hablaras", "Condición tras si → imperfecto de subjuntivo: hablaras."),
      fb("Rápido.", "Si el profesor escribiera en la pizarra, lo ___ mejor. (entender, nosotros)", "entenderíamos", "Consecuencia → condicional: entenderíamos."),
      fb("Rápido.", "Si ___ tiempo, saldríamos más. (tener, nosotros)", "tuviéramos", "Condición tras si → imperfecto de subjuntivo, con tilde en nosotros: tuviéramos."),
      fb("Rápido.", "Si no lloviera, ___ a pasear. (salir, nosotros)", "saldríamos", "Consecuencia → condicional; salir tiene raíz irregular saldr-: saldríamos."),
      fb("Rápido.", "Si ___ la verdad, no estarías tan tranquilo. (saber, tú)", "supieras", "Condición tras si → imperfecto de subjuntivo: supieron → supieras."),
      fb("Rápido.", "Si pusieras más sal, ___ mejor. (saber)", "sabría", "Consecuencia → condicional; saber tiene raíz irregular sabr-: sabría (aquí, «tener sabor»)."),
      toEs("Si hace sol, comemos fuera.", "Si hiciera sol, comeríamos fuera.", "Para la hipótesis, la condición pasa a imperfecto de subjuntivo (hiciera) y la consecuencia a condicional (comeríamos).", ["Si hiciese sol, comeríamos fuera.", "Comeríamos fuera si hiciera sol.", "Si hiciera sol, comeríamos afuera."], "Cambia la condición real por una hipotética."),
      toEs("Si tendría las llaves, abriría la puerta.", "Si tuviera las llaves, abriría la puerta.", "El hueco detrás de si nunca lleva condicional: tuviera. «Tendría» solo podría ir en la consecuencia.", ["Si tuviese las llaves, abriría la puerta."], "Corrige la frase."),
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
    "Posible, improbable o irreal en el presente, e imposible en el pasado: tres estructuras con si.",
    "6 min",
    [
      sec(
        "La regla: tres grados de realidad",
        [
          "Recuerda la regla: 1) posible → si + presente, y futuro / presente / imperativo (si estudias, aprobarás). 2) improbable o irreal en el presente → si + imperfecto de subjuntivo, y condicional (si estudiaras, aprobarías). 3) imposible porque ya pasó → si + pluscuamperfecto de subjuntivo, y condicional perfecto (si hubieras estudiado, habrías aprobado).",
          "¿Por qué tres? Cada paso aleja la condición un grado más de la realidad, y los verbos retroceden con ella: presente → imperfecto → pluscuamperfecto. Lo que nunca cambia: tras el si condicional no van ni el futuro, ni el condicional, ni el presente de subjuntivo.",
        ],
        [
          ["Si sales ya, cogerás el último autobús.", "If you leave now, you'll catch the last bus. (posible)"],
          ["Si vivieras más cerca, nos veríamos más.", "If you lived closer, we'd see each other more. (irreal presente)"],
          ["Si hubieras venido, te habrías divertido.", "If you had come, you'd have had fun. (imposible: ya pasó)"],
        ],
        [
          mc(
            "Mañana hay examen y quizá estudies: «Si ___, aprobarás.»",
            ["estudias", "estudiaras", "hubieras estudiado", "estudiarías"],
            0,
            "Una posibilidad real: si + presente (si estudias) + futuro. «Estudiaras» y «hubieras estudiado» son hipotéticos, y «estudiarías» no va tras si."
          ),
          fb("Grado.", "La fiesta fue ayer y no fui: si ___, me habría divertido. (ir, yo)", "hubiera ido", "Ya pasó: si + pluscuamperfecto de subjuntivo (hubiera ido) con condicional perfecto (habría divertido)."),
        ]
      ),
    ],
    [
      mc("No estudias nunca: «Si ___, aprobarías.»", ["estudiaras", "estudias", "hubieras estudiado", "estudiarías"], 0, "No estudias nunca: irreal en el presente → si + imperfecto de subjuntivo, estudiaras. «Estudias» sería real, «hubieras estudiado» se refiere al pasado y «estudiarías» no va tras si."),
      mc("El examen fue ayer y no estudiaste: «Si ___, habrías aprobado.»", ["hubieras estudiado", "estudiaras", "estudias", "habrías estudiado"], 0, "El examen ya pasó: irreal en el pasado → si + pluscuamperfecto de subjuntivo, hubieras estudiado. «Estudiaras» mira al presente, «estudias» sería real y «habrías estudiado» no va tras si."),
      fb("Grado.", "Si ___ el autobús de las siete, llegarás pronto. (tomar, tú)", "tomas", "Posible (llegarás, futuro): si + presente de indicativo, tomas."),
      fb("Grado.", "Si ___ coche, no dependería del tren. (tener, yo)", "tuviera", "Irreal en el presente (dependería, condicional): si + imperfecto de subjuntivo, tuviera."),
      fb("Grado.", "Si hubiéramos salido antes, no ___ el tren. (perder, nosotros)", "habríamos perdido", "Irreal en el pasado: con si + pluscuamperfecto de subjuntivo, condicional perfecto (habríamos perdido)."),
      { ...fb("Grado.", "Si me ___ la verdad, te ayudaré. (contar, tú)", "cuentas", "Posible (ayudaré, futuro): si + presente de indicativo, cuentas."), altAnswers: ["dices"] },
      toEs("If it were cheaper, I would buy it.", "Si fuera más barato, lo compraría.", "Condición irreal presente: «si fuera» + condicional «compraría».", ["Si fuese más barato, lo compraría.", "Lo compraría si fuera más barato."]),
      toEs(
        "Si llueve, cancelaremos la excursión.",
        "Si lloviera, cancelaríamos la excursión.",
        "Del grado 1 al 2: si + imperfecto de subjuntivo (lloviera) y condicional (cancelaríamos).",
        ["Si lloviese, cancelaríamos la excursión."],
        "Transforma en el segundo grado: es muy improbable que llueva."
      ),
      toEs(
        "Si tuviera dinero, me compraría esa moto.",
        "Si hubiera tenido dinero, me habría comprado esa moto.",
        "Al tercer grado (la oportunidad ya pasó): si + pluscuamperfecto de subjuntivo (hubiera tenido) y condicional perfecto (habría comprado).",
        ["Si hubiese tenido dinero, me habría comprado esa moto.", "Si hubiera tenido dinero, me hubiera comprado esa moto."],
        "Transforma en el tercer grado: la moto se vendió el año pasado."
      ),
      toEs(
        "Si me hubieras avisado, habría ido a buscarte.",
        "Si me avisas, iré a buscarte.",
        "Al primer grado (todavía es posible): si + presente (avisas) y futuro (iré).",
        ["Si me avisas, voy a buscarte.", "Si me avisas, te iré a buscar."],
        "Transforma en el primer grado: todavía puede avisarte."
      ),
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
        "Recuerda la regla: el orden cambia, los tiempos no",
        [
          "Recuerda la regla: en una hipótesis, la condición va con si + imperfecto de subjuntivo y la consecuencia en condicional, en el orden que quieras: Si pudiera, iría. / Iría si pudiera. Lo que va pegado al si es siempre el subjuntivo.",
          "Puntuación: con la condición al principio se escribe coma (Si pudiera, iría); con la condición al final, normalmente no (Iría si pudiera). En el dictado, escucha la terminación: -ra / -se tras si, -ría en la otra parte.",
        ],
        [
          ["Te lo diría si lo supiera.", "I'd tell you if I knew. (condición al final: sin coma)"],
          ["Si no hiciera tanto viento, iríamos en bici.", "If it weren't so windy, we'd go by bike. (condición al principio: coma)"],
        ],
        [
          wo("Si viviera más cerca, te visitaría más.", "Si + imperfecto de subjuntivo (viviera) + condicional (visitaría), con coma tras la condición.", "If I lived closer, I'd visit you more."),
          { type: "dictation", audio: "Compraríamos una casa si tuviéramos más ahorros.", explanation: "Condición al final, sin coma: condicional (compraríamos) + si + imperfecto de subjuntivo (tuviéramos, con tilde)." },
        ]
      ),
    ],
    [
      wo("Me lo dirías si lo supieras.", "Orden invertido: el condicional (dirías) va primero y si + imperfecto de subjuntivo (supieras) al final, sin coma.", "You'd tell me if you knew."),
      wo("Si no hiciera tanto calor, saldríamos a correr.", "Hipótesis sobre el presente: si + imperfecto de subjuntivo (hiciera) + condicional (saldríamos).", "If it weren't so hot, we'd go running."),
      wo("¿Qué harías si te ofrecieran ese puesto?", "Pregunta hipotética: condicional (harías) + si + imperfecto de subjuntivo (ofrecieran).", "What would you do if they offered you that job?"),
      wo("Me mira como si no me conociera.", "Como si va siempre con imperfecto de subjuntivo: conociera.", "He looks at me as if he didn't know me."),
      toEs("If you asked me, I would help you.", "Si me lo pidieras, te ayudaría.", "Condición hipotética: «si me lo pidieras» + condicional «te ayudaría».", ["Si me lo pidieses, te ayudaría.", "Te ayudaría si me lo pidieras."]),
      toEs("I would call him if I had his number.", "Lo llamaría si tuviera su número.", "Condición hipotética: si + imperfecto de subjuntivo (tuviera) + condicional (llamaría).", ["Lo llamaría si tuviese su número.", "Si tuviera su número, lo llamaría.", "Si tuviese su número, lo llamaría.", "Le llamaría si tuviera su número.", "Si tuviera su número, le llamaría."]),
      { type: "dictation", audio: "Si me tocara la lotería, dejaría de trabajar.", explanation: "Si + imperfecto de subjuntivo (tocara) y coma; la consecuencia en condicional (dejaría)." },
      { type: "dictation", audio: "¿Adónde irías si pudieras elegir?", explanation: "Pregunta con condicional (irías) y la condición al final: si pudieras, sin coma. Adónde lleva tilde por ser interrogativo." },
      toEs(
        "Si tuviera más tiempo, aprendería a tocar el violín.",
        "Aprendería a tocar el violín si tuviera más tiempo.",
        "Al invertir el orden, los tiempos no cambian (aprendería… si tuviera) y desaparece la coma.",
        ["Aprendería a tocar el violín si tuviese más tiempo."],
        "Cambia el orden: empieza por la consecuencia."
      ),
      toEs(
        "Iríamos a la playa si hiciera sol.",
        "Si hiciera sol, iríamos a la playa.",
        "Con la condición al principio se escribe coma; los tiempos se mantienen (si hiciera…, iríamos).",
        ["Si hiciese sol, iríamos a la playa."],
        "Cambia el orden: empieza por la condición."
      ),
      toEs(
        "Te ayudaría si sabría cómo.",
        "Te ayudaría si supiera cómo.",
        "Aunque el si vaya al final, tras él nunca va el condicional: supiera (imperfecto de subjuntivo).",
        ["Te ayudaría si supiese cómo.", "Si supiera cómo, te ayudaría."],
        "Corrige la frase."
      ),
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
        "Recuerda la regla y lee la redacción",
        [
          "Recuerda la regla: una situación imposible en el presente se cuenta con si + imperfecto de subjuntivo y condicional, y una vez abierta la hipótesis, todas las frases siguientes siguen en condicional (viajaría, hablaría, le preguntaría…). Volver al presente o al futuro sacaría al lector del mundo imaginado.",
          "«Si tuviera una máquina del tiempo, viajaría al siglo XVI. Si pudiera, hablaría con Cervantes. Le preguntaría qué haría si viviera hoy. Seguramente se sorprendería si viera los móviles. Aunque, si fuera posible, también me gustaría ver el futuro.»",
        ],
        [
          ["Si pudiera, conocería a Frida Kahlo.", "If I could, I'd meet Frida Kahlo. (pudiera + conocería)"],
          ["Me quedaría un mes entero en el Egipto antiguo.", "I'd stay a whole month in ancient Egypt. (la historia sigue en condicional)"],
        ],
        [
          fb("Completa.", "Si ___ una máquina del tiempo, viajaría al siglo XVI. (tener)", "tuviera", "Situación imposible: si + imperfecto de subjuntivo, tuviera."),
          mc(
            "Según la redacción, ¿qué le preguntaría a Cervantes?",
            ["Qué haría si viviera hoy.", "Si tenía un móvil.", "Cuándo escribió el Quijote.", "Si quería ver el futuro."],
            0,
            "La redacción dice «le preguntaría qué haría si viviera hoy»: dentro de la pregunta se mantiene la hipótesis (haría… si viviera). Las otras opciones no aparecen en el texto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "…___ al siglo XVI. (viajar)", "viajaría", "Consecuencia de si tuviera: condicional, viajaría."),
      fb("Completa.", "Si ___, hablaría con Cervantes. (poder)", "pudiera", "Condición imposible: si + imperfecto de subjuntivo, pudiera."),
      fb("Completa.", "Le preguntaría qué haría si ___ hoy. (vivir)", "viviera", "Condición imaginaria dentro de la pregunta: si + imperfecto de subjuntivo, viviera."),
      fb("Completa.", "Seguramente se ___ si viera los móviles. (sorprender)", "sorprendería", "Consecuencia de si viera: condicional, sorprendería."),
      fb("Completa.", "Si ___ posible, también me gustaría ver el futuro. (ser)", "fuera", "Condición: si + imperfecto de subjuntivo, fuera."),
      mc(
        "«Si Cervantes ___ Twitter, ¿qué escribiría?»",
        ["tuviera", "tendría", "tiene", "tenga"],
        0,
        "Una condición imaginaria usa si + imperfecto de subjuntivo: si tuviera. «Tendría» no va tras si, «tiene» sería real y «tenga» no se usa tras si."
      ),
      toEs("If I could travel in time, I would go to ancient Rome.", "Si pudiera viajar en el tiempo, iría a la antigua Roma.", "Condición imposible: «si pudiera» + condicional «iría».", ["Si pudiese viajar en el tiempo, iría a la antigua Roma.", "Si pudiera viajar en el tiempo, iría a la Roma antigua."]),
      toEs(
        "Si tengo vacaciones, iré a Roma.",
        "Si tuviera una máquina del tiempo, iría a la Roma antigua.",
        "El plan real (si tengo…, iré) pasa a hipótesis imposible: si + imperfecto de subjuntivo (tuviera) y condicional (iría).",
        ["Si tuviese una máquina del tiempo, iría a la Roma antigua.", "Si tuviera una máquina del tiempo, iría a la antigua Roma."],
        "Transforma el plan en una fantasía: «Si tuviera una máquina del tiempo…»."
      ),
      toEs(
        "Si pudiera, hablaría con Cervantes.",
        "Si pudieras, ¿con quién hablarías?",
        "Para preguntar a un amigo, cambian las personas (pudieras, hablarías) y la hipótesis se mantiene.",
        ["¿Con quién hablarías si pudieras?"],
        "Transforma la frase en una pregunta para un compañero: «Si pudieras, ¿con quién…?»."
      ),
      toEs(
        "Si viajara al siglo XVI, me vestiría como la gente de la época y aprendo a montar a caballo.",
        "Si viajara al siglo XVI, me vestiría como la gente de la época y aprendería a montar a caballo.",
        "Las dos consecuencias dependen de si viajara: las dos en condicional (vestiría, aprendería).",
        ["Si viajase al siglo XVI, me vestiría como la gente de la época y aprendería a montar a caballo."],
        "Corrige la frase."
      ),
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
        "La regla: real, abierto o imaginado",
        [
          "Recuerda la regla: como + indicativo describe un modo real que conocemos (Lo hice como me dijiste). Como + presente de subjuntivo deja el modo abierto, a elección del otro (Vístete como quieras). Como si + imperfecto de subjuntivo compara con algo que no es verdad (Lo hizo como si fuera fácil, pero no lo era).",
          "¿Por qué como si siempre va con imperfecto (o pluscuamperfecto) de subjuntivo, aunque hablemos del presente? Porque lleva dentro un si hipotético: la comparación es imaginaria. Nunca va con presente de indicativo ni de subjuntivo: «como si es», «como si sea» son errores.",
        ],
        [
          ["Hazlo como te enseñé.", "Do it the way I taught you. (modo real → indicativo)"],
          ["Ponlo donde quieras, como te parezca mejor.", "Put it wherever you want, however you think best. (abierto → subjuntivo)"],
          ["Lo hace como si fuera fácil.", "He does it as if it were easy. (irreal → como si + fuera)"],
        ],
        [
          fb("Par.", "Haz la paella como la ___ tu abuela. (preparar, presente)", "prepara", "Tu abuela la prepara de verdad así: modo real → como + indicativo, prepara."),
          mc(
            "«Mi perro me mira como si ___ todo lo que digo.»",
            ["entendiera", "entiende", "entienda", "entendería"],
            0,
            "La comparación es imaginaria (el perro no entiende): como si + imperfecto de subjuntivo, entendiera. «Entiende» y «entienda» son presentes, que como si no admite, y el condicional tampoco va tras como si."
          ),
        ]
      ),
    ],
    [
      fb("Par.", "Cocina como si ___ chef profesional. (ser)", "fuera", "No es chef: comparación irreal → como si + imperfecto de subjuntivo, fuera."),
      fb("Par.", "Lo hice como me lo ___. (explicar, tú, indefinido)", "explicaste", "Modo real: me lo explicaste de verdad → como + indicativo, explicaste."),
      fb("Par.", "Me habla como si yo no ___ nada. (entender)", "entendiera", "Comparación irreal: como si + imperfecto de subjuntivo, entendiera."),
      fb("Par.", "Vístete como ___. (querer, tú)", "quieras", "Modo abierto, a tu elección → como + presente de subjuntivo, quieras."),
      fb("Par.", "Se viste como si ___ a una boda. (ir)", "fuera", "No va a una boda: como si + imperfecto de subjuntivo, fuera (ir)."),
      mc(
        "«Me trataron como si ___ de la familia.»",
        ["fuera", "era", "soy", "sería"],
        0,
        "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: como si fuera. «Era», «soy» y «sería» no pueden seguir a «como si»."
      ),
      toEs("She sings as if nobody were listening.", "Canta como si nadie la escuchara.", "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: «escuchara».", ["Canta como si nadie la estuviera escuchando.", "Canta como si nadie escuchara."]),
      toEs(
        "Habla como un experto.",
        "Habla como si fuera un experto.",
        "Con como si la comparación se presenta como falsa (no es experto) y el verbo va en imperfecto de subjuntivo: fuera.",
        ["Habla como si fuese un experto."],
        "Transforma la comparación en irreal con «como si»: no es experto."
      ),
      toEs(
        "Monta la estantería como dicen las instrucciones.",
        "Monta la estantería como quieras.",
        "Para dejar el modo abierto, como + presente de subjuntivo: quieras.",
        ["Monta la estantería como prefieras."],
        "Transforma la instrucción para dejar libertad: «como quieras»."
      ),
      toEs(
        "Corre como si lo persigue un perro.",
        "Corre como si lo persiguiera un perro.",
        "Como si + imperfecto de subjuntivo (persiguiera, de persiguieron), nunca presente de indicativo.",
        ["Corre como si le persiguiera un perro.", "Corre como si lo persiguiese un perro."],
        "Corrige la frase."
      ),
      toEs(
        "Haz el pastel como si dice la receta.",
        "Haz el pastel como dice la receta.",
        "La receta existe y dice algo real: como + indicativo, sin si. «Como si» solo sirve para comparaciones imaginarias.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Nos miró como si estemos locos.",
        "Nos miró como si estuviéramos locos.",
        "Como si nunca va con presente de subjuntivo: estuviéramos (imperfecto de subjuntivo, con tilde).",
        ["Nos miró como si estuviésemos locos."],
        "Corrige la frase."
      ),
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
        "La regla: de + infinitivo = si + verbo conjugado",
        [
          "Recuerda la regla: en un registro cuidado, de + infinitivo puede sustituir a si: de tener tiempo, iría = si tuviera tiempo, iría. El infinitivo no se conjuga, así que es el contexto (la otra parte de la frase) el que dice si la condición es real (de ser así, tendremos que…) o hipotética (de ser así, tendríamos que…).",
          "¿Por qué funciona? La preposición de ya marca la condición, igual que si, y el infinitivo deja la persona y el tiempo a la otra parte. Por eso detrás de de nunca va un verbo conjugado (de tuviera, de sería), y los pronombres se pegan al infinitivo: de saberlo, de ofrecérmelo.",
        ],
        [
          ["De tener más espacio, tendríamos un perro.", "If we had more space, we'd have a dog. (= si tuviéramos)"],
          ["De ser así, habrá que avisar al jefe.", "If so, we'll have to tell the boss. (real: futuro)"],
          ["De conocerla, te la presentaría.", "If I knew her, I'd introduce her to you. (pronombre pegado al infinitivo)"],
        ],
        [
          fb("Estación 1.", "De tener dinero, ___ más. (viajar, yo)", "viajaría", "De tener = si tuviera: hipótesis → condicional, viajaría."),
          mc(
            "«De ___ antes, habría comprado las entradas.» (saber, yo)",
            ["saberlo", "lo saber", "supiera", "lo supiera"],
            0,
            "Tras de va el infinitivo, con el pronombre pegado al final: saberlo. «Lo saber» separa el pronombre, y «supiera» o «lo supiera» son formas conjugadas, que solo van con si."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Si ___ así, cancelaríamos el viaje. (ser)", "fuera", "Con si sí se conjuga: si + imperfecto de subjuntivo, fuera."),
      fb("Estación 1.", "De ser así, ___ el viaje. (cancelar, nosotros)", "cancelaríamos", "De ser así como hipótesis → condicional: cancelaríamos."),
      fb("Estación 2.", "De saberlo antes, te lo ___. (decir, yo)", "diría", "De saberlo = si lo supiera → condicional: diría."),
      fb("Estación 2.", "Si lo ___ antes, te lo diría. (saber, yo)", "supiera", "Con si, el verbo se conjuga: imperfecto de subjuntivo, supiera."),
      fb("Estación 3.", "Yo en tu lugar, no ___ esa oferta. (aceptar)", "aceptaría", "Yo en tu lugar = si yo fuera tú → condicional: aceptaría."),
      mc(
        "«De ___ más joven, estudiaría medicina.»",
        ["ser", "fuera", "sería", "soy"],
        0,
        "«De» + infinitivo puede sustituir a una condición con si: de ser más joven = si fuera más joven. «Fuera», «sería» y «soy» no pueden ir tras «de»."
      ),
      toEs("If that were the case, we would have to pay more.", "Si fuera así, tendríamos que pagar más.", "Condición hipotética: «si fuera así» + condicional «tendríamos».", ["De ser así, tendríamos que pagar más.", "Si así fuera, tendríamos que pagar más."]),
      toEs(
        "Si tuviera coche, iría a trabajar en coche.",
        "De tener coche, iría a trabajar en coche.",
        "Si tuviera → de tener: el infinitivo sustituye al verbo conjugado y la consecuencia no cambia (iría).",
        ["De tener carro, iría a trabajar en carro."],
        "Reescribe la condición con «de» + infinitivo."
      ),
      toEs(
        "De llover mucho, se suspendería el concierto.",
        "Si lloviera mucho, se suspendería el concierto.",
        "De llover → si lloviera: con si hay que conjugar, y como la consecuencia está en condicional, en imperfecto de subjuntivo.",
        ["Si lloviese mucho, se suspendería el concierto."],
        "Reescribe la condición con «si»."
      ),
      toEs(
        "Si yo fuera tú, hablaría con un abogado.",
        "Yo en tu lugar, hablaría con un abogado.",
        "Yo en tu lugar sustituye a si yo fuera tú; el consejo sigue en condicional.",
        ["Yo que tú, hablaría con un abogado."],
        "Reescribe el consejo con «yo en tu lugar»."
      ),
      toEs(
        "De la viera, la saludaría.",
        "De verla, la saludaría.",
        "Tras de va el infinitivo con el pronombre pegado (verla); la forma conjugada (la viera) solo va con si.",
        ["Si la viera, la saludaría."],
        "Corrige la frase."
      ),
      toEs(
        "De estaría aquí tu madre, se enfadaría.",
        "De estar aquí tu madre, se enfadaría.",
        "Detrás de de nunca va el condicional ni otro verbo conjugado: infinitivo, estar.",
        ["Si estuviera aquí tu madre, se enfadaría.", "Si tu madre estuviera aquí, se enfadaría."],
        "Corrige la frase."
      ),
      toEs(
        "Si ser necesario, trabajaremos el domingo.",
        "Si es necesario, trabajaremos el domingo.",
        "Con si el verbo va conjugado (es); el infinitivo solo va con de: de ser necesario.",
        ["De ser necesario, trabajaremos el domingo."],
        "Corrige la frase."
      ),
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
        "La regla para corregir",
        [
          "Recuerda la regla, en tres comprobaciones. 1) Tras el si condicional solo van el presente de indicativo (si puedo) o el imperfecto / pluscuamperfecto de subjuntivo (si pudiera, si hubiera podido); nunca futuro, condicional ni presente de subjuntivo. 2) Las dos partes concuerdan: si puedo → lo haré / lo hago; si pudiera → lo haría. 3) Como si siempre va con imperfecto (o pluscuamperfecto) de subjuntivo.",
          "¿Por qué fallamos? Porque en inglés «would» aparece en las dos partes, y porque «si» parece pedir el mismo subjuntivo que «cuando» (si sea es imposible).",
          "«Si el ayuntamiento invertiría en transporte, la gente dejaría el coche. Si hay más carriles bici, iría en bici al trabajo, pero no los hay. Hablan como si el problema no existe.» Tres errores.",
        ],
        [
          ["Si el gobierno bajara los precios, más gente usaría el tren.", "If the government lowered prices, more people would use the train. (si + bajara, usaría)"],
          ["Si puedo, iré en bici.", "If I can, I'll go by bike. (posible: presente + futuro)"],
          ["Actúan como si no hubiera problemas.", "They act as if there were no problems. (como si + hubiera)"],
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
      toEs("Corrige: «Hablan como si el problema no existe.»", "Hablan como si el problema no existiera.", "Como si + imperfecto de subjuntivo (existiera), nunca presente de indicativo."),
      toEs("Corrige: «Si tuviera tiempo, te ayudo.»", "Si tuviera tiempo, te ayudaría.", "Con «si tuviera», la consecuencia va en condicional: «ayudaría», no «ayudo».", ["Si tengo tiempo, te ayudo."]),
      toEs("Corrige: «Si sea posible, llámame.»", "Si es posible, llámame.", "Si nunca va con presente de subjuntivo: una condición posible va en presente de indicativo (es)."),
      ms(
        "¿Qué frases son correctas?",
        ["Si pudiera, lo haría.", "Si puedo, lo hago.", "Si pueda, lo hago.", "Si podría, lo haría."],
        [0, 1],
        "Tras si van el presente de indicativo (si puedo) o el imperfecto de subjuntivo (si pudiera). «Si pueda» (presente de subjuntivo) y «Si podría» (condicional) nunca van tras si."
      ),
      toEs(
        "Si el alcalde escucha a los vecinos, cambiará el plan.",
        "Si el alcalde escuchara a los vecinos, cambiaría el plan.",
        "Para presentarlo como poco probable: si + imperfecto de subjuntivo (escuchara) y condicional (cambiaría).",
        ["Si el alcalde escuchase a los vecinos, cambiaría el plan.", "Si la alcaldesa escuchara a los vecinos, cambiaría el plan."],
        "Transforma en una hipótesis: el alcalde nunca escucha."
      ),
      toEs(
        "Si hubiera autobuses nocturnos, no usaría el coche.",
        "Si hay autobuses nocturnos, no usaré el coche.",
        "Si la condición es posible (quizá los pongan), si + presente (hay) y futuro (usaré).",
        ["Si hay autobuses nocturnos, no voy a usar el coche.", "Si hay autobuses nocturnos, no usaré el carro."],
        "Transforma en una condición real: van a poner autobuses nocturnos."
      ),
      toEs(
        "El concejal habla de la contaminación como un experto.",
        "El concejal habla de la contaminación como si fuera un experto.",
        "Para decir que la comparación es falsa (no es experto), como si + imperfecto de subjuntivo: fuera.",
        ["El concejal habla de la contaminación como si fuese un experto.", "La concejala habla de la contaminación como si fuera una experta."],
        "Transforma la comparación en irreal con «como si»: no sabe nada del tema."
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
        "Recuerda la regla: responder a una situación imaginaria",
        [
          "Recuerda la regla: un dilema es una situación imaginaria, así que la pregunta y la respuesta van con si + imperfecto de subjuntivo y condicional: —Si encontraras una cartera con 500 euros, ¿qué harías? —La llevaría a la policía.",
          "En la respuesta no hace falta repetir el si: basta el condicional (la llevaría). Si contestas en presente o futuro («la llevo», «la llevaré»), suena a algo que ya está pasando o que has decidido de verdad. Para negar: no + pronombre + condicional (no se lo diría).",
        ],
        [
          ["—Si vieras a un amigo copiando, ¿lo dirías? —No, no diría nada.", "If you saw a friend cheating, would you say so? — No, I wouldn't say anything."],
          ["Si un desconocido me pidiera dinero, se lo daría.", "If a stranger asked me for money, I'd give it to him. (pidiera + daría)"],
        ],
        [
          fb("Tu respuesta.", "Si ___ un móvil en el autobús, se lo daría al conductor. (encontrar, yo)", "encontrara", "Situación imaginaria: si + imperfecto de subjuntivo, encontrara."),
          mc(
            "—Si tu jefe te pidiera mentir a un cliente, ¿qué harías? ¿Qué respuesta encaja?",
            ["Me negaría y se lo explicaría con calma.", "Me niego y se lo explico con calma.", "Me negaré y se lo explicaré con calma.", "Me negara y se lo explicara con calma."],
            0,
            "La pregunta es hipotética (pidiera, harías): la respuesta va en condicional, me negaría. El presente y el futuro presentan la situación como real, y el imperfecto de subjuntivo no va solo en la respuesta."
          ),
        ]
      ),
    ],
    [
      fb("Tu respuesta.", "Si viera a un amigo copiando, no ___ nada. (decir, yo)", "diría", "Consecuencia de si viera: condicional, diría (decir → dir-)."),
      fb("Tu respuesta.", "Si el cajero me ___ cambio de más, se lo devolvería. (dar)", "diera", "Condición imaginaria: si + imperfecto de subjuntivo, diera (de dieron)."),
      fb("Tu respuesta.", "Si un desconocido me ___ ayuda en la calle, lo ayudaría. (pedir)", "pidiera", "Si + imperfecto de subjuntivo: pidiera (e → i, de pidieron)."),
      fb("Tu respuesta.", "Si ___ que mentir para salvar a alguien, mentiría. (tener, yo)", "tuviera", "Si + imperfecto de subjuntivo: tuviera."),
      fb("Tu respuesta.", "Si mi jefe me ofreciera un ascenso injusto, lo ___. (rechazar)", "rechazaría", "Consecuencia de si ofreciera: condicional, rechazaría."),
      toEs("If a friend lied to me, I would forgive him.", "Si un amigo me mintiera, lo perdonaría.", "Condición hipotética: «si me mintiera» + condicional «perdonaría».", ["Si un amigo me mintiese, lo perdonaría.", "Si un amigo me mintiera, le perdonaría."]),
      { type: "speak", prompt: "Responde en voz alta: si encontraras 100 euros en el suelo de un bar, ¿qué harías? Empieza con «Si encontrara…».", text: "Si encontrara cien euros en el suelo, se los daría al camarero.", explanation: "Si + imperfecto de subjuntivo (encontrara) y condicional (daría); se los = a él + los euros." },
      { type: "speak", prompt: "Responde en voz alta: ¿qué harías si vieras a alguien robando en una tienda? Contesta en condicional.", text: "Avisaría al guardia de seguridad.", explanation: "En la respuesta a un dilema basta el condicional (avisaría): la hipótesis ya está en la pregunta." },
      toEs(
        "Si veo a alguien copiando en un examen, se lo digo al profesor.",
        "Si viera a alguien copiando en un examen, se lo diría al profesor.",
        "Para presentarlo como dilema imaginario: si + imperfecto de subjuntivo (viera) y condicional (diría).",
        ["Si viese a alguien copiando en un examen, se lo diría al profesor."],
        "Transforma en un dilema imaginario."
      ),
      toEs(
        "Si me pidieras ayuda, te ayudaría.",
        "Si me pidiera ayuda, lo ayudaría.",
        "Al cambiar tú por él, cambian el subjuntivo (pidiera) y el pronombre (lo); la estructura hipotética se mantiene.",
        ["Si me pidiera ayuda, le ayudaría."],
        "Cambia «tú» por «él»."
      ),
      toEs(
        "Yo nunca mentiría a un amigo.",
        "¿Mentirías a un amigo si eso lo salvara de un problema?",
        "Una pregunta hipotética lleva condicional (mentirías) y si + imperfecto de subjuntivo (salvara).",
        ["¿Le mentirías a un amigo si eso lo salvara de un problema?", "¿Mentirías a un amigo si eso le salvara de un problema?"],
        "Transforma la frase en una pregunta hipotética: «¿Mentirías a un amigo si eso lo salvara…?»."
      ),
      toEs(
        "Si un compañero copiaría en el examen, no diría nada.",
        "Si un compañero copiara en el examen, no diría nada.",
        "Tras el si condicional nunca va el condicional: copiara (imperfecto de subjuntivo).",
        ["Si un compañero copiase en el examen, no diría nada."],
        "Corrige la frase."
      ),
      toEs(
        "Si viera un accidente, llamaré a una ambulancia.",
        "Si viera un accidente, llamaría a una ambulancia.",
        "Con si + imperfecto de subjuntivo (viera), la consecuencia va en condicional (llamaría), no en futuro.",
        ["Si viese un accidente, llamaría a una ambulancia.", "Si veo un accidente, llamaré a una ambulancia."],
        "Corrige la frase."
      ),
      toEs(
        "Si mi hermano me pida dinero, se lo prestaría.",
        "Si mi hermano me pidiera dinero, se lo prestaría.",
        "Tras si nunca va el presente de subjuntivo: con condicional en la consecuencia, imperfecto de subjuntivo (pidiera).",
        ["Si mi hermano me pidiese dinero, se lo prestaría."],
        "Corrige la frase."
      ),
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
        "La regla: tres puertas al imperfecto de subjuntivo",
        [
          "Recuerda la regla: si fuera… (hipótesis, con condicional en la otra parte), como si fuera… (comparación irreal) y ojalá fuera… (deseo irreal o muy difícil) usan el mismo tiempo: imperfecto de subjuntivo, aunque hablen del presente.",
          "¿Por qué el mismo? Las tres miran a algo que no es real ahora; el imperfecto de subjuntivo marca esa distancia de la realidad. La diferencia: ojalá también admite presente de subjuntivo para un deseo posible (ojalá llueva mañana), mientras que si y como si nunca lo admiten.",
        ],
        [
          ["Ojalá tuviera un jardín.", "I wish I had a garden. (deseo irreal)"],
          ["Si tuviera un jardín, plantaría flores.", "If I had a garden, I'd plant flowers. (hipótesis + condicional)"],
          ["Habla como si tuviera un jardín enorme.", "He talks as if he had a huge garden. (comparación irreal)"],
        ],
        [
          fb("Rápido.", "Ojalá ___ viernes. (ser)", "fuera", "Hoy no es viernes: deseo irreal → ojalá + imperfecto de subjuntivo, fuera."),
          mc(
            "Mañana es tu cumpleaños y es posible que venga tu hermano. «Ojalá ___.»",
            ["venga", "viniera", "viene", "vendría"],
            0,
            "Es un deseo posible sobre el futuro: ojalá + presente de subjuntivo, venga. «Viniera» lo presentaría como casi imposible, y ojalá no admite indicativo (viene) ni condicional (vendría)."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si ___ viernes, saldríamos. (ser)", "fuera", "Hipótesis con condicional (saldríamos): si + imperfecto de subjuntivo, fuera."),
      fb("Rápido.", "Está contento como si ___ viernes. (ser)", "fuera", "Comparación irreal: como si + imperfecto de subjuntivo, fuera."),
      fb("Rápido.", "Ojalá ___ más paciencia. (tener, yo)", "tuviera", "Deseo irreal: ojalá + imperfecto de subjuntivo, tuviera."),
      fb("Rápido.", "Si ___ más paciencia, no me enfadaría. (tener, yo)", "tuviera", "Hipótesis: si + imperfecto de subjuntivo, tuviera."),
      fb("Rápido.", "Gritaba como si ___ un incendio. (haber)", "hubiera", "Comparación irreal: como si + hubiera (haber, impersonal)."),
      fb("Rápido.", "Ojalá no ___ que madrugar mañana. (tener, nosotros)", "tuviéramos", "Deseo muy difícil (sí hay que madrugar): ojalá + imperfecto de subjuntivo, tuviéramos."),
      fb("Rápido.", "Si no ___ que madrugar, nos quedaríamos. (tener, nosotros)", "tuviéramos", "Hipótesis: si + imperfecto de subjuntivo, tuviéramos (con tilde)."),
      mc(
        "«Me miró como si ___ un fantasma.»",
        ["viera", "ve", "vería", "vea"],
        0,
        "«Como si» va con imperfecto de subjuntivo: como si viera un fantasma. «Ve», «vería» y «vea» no pueden seguir a «como si»."
      ),
      toEs(
        "No tengo vacaciones.",
        "Ojalá tuviera vacaciones.",
        "Para desear lo contrario de una realidad presente: ojalá + imperfecto de subjuntivo, en positivo.",
        ["Ojalá tuviese vacaciones."],
        "Transforma el hecho en un deseo con «ojalá»."
      ),
      toEs(
        "Ojalá supiera conducir.",
        "Si supiera conducir, iría a trabajar en coche.",
        "El mismo imperfecto de subjuntivo (supiera) sirve para la hipótesis; solo hay que añadir la consecuencia en condicional.",
        ["Si supiese conducir, iría a trabajar en coche.", "Si supiera manejar, iría a trabajar en carro."],
        "Transforma el deseo en una hipótesis: «Si supiera conducir, iría a trabajar en coche»."
      ),
      toEs(
        "Habla como un profesor.",
        "Habla como si fuera profesor.",
        "Como si + imperfecto de subjuntivo presenta la comparación como falsa: no es profesor.",
        ["Habla como si fuera un profesor.", "Habla como si fuese profesor."],
        "Transforma la comparación en irreal con «como si»."
      ),
      toEs(
        "Se comporta como si es el dueño del bar.",
        "Se comporta como si fuera el dueño del bar.",
        "Como si nunca va con presente de indicativo: fuera (imperfecto de subjuntivo).",
        ["Se comporta como si fuese el dueño del bar."],
        "Corrige la frase."
      ),
      toEs(
        "Si tendría tiempo, iría al gimnasio.",
        "Si tuviera tiempo, iría al gimnasio.",
        "Tras el si condicional nunca va el condicional: tuviera.",
        ["Si tuviese tiempo, iría al gimnasio."],
        "Corrige la frase."
      ),
      toEs(
        "Ojalá podría quedarme más días.",
        "Ojalá pudiera quedarme más días.",
        "Ojalá no admite condicional: deseo irreal → imperfecto de subjuntivo, pudiera.",
        ["Ojalá pudiese quedarme más días.", "Ojalá me pudiera quedar más días."],
        "Corrige la frase."
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
        "Recuerda la regla y lee la conversación",
        [
          "Recuerda la regla: lo que puede pasar va con si + presente y futuro (si me dan las vacaciones, iremos); lo improbable o imaginario, con si + imperfecto de subjuntivo y condicional (si fuera por mí, me iría). La misma conversación puede cambiar de grado según lo que cada uno ve posible.",
          "Lola: «Si me dan las vacaciones en julio, iremos a Galicia.» Tomás: «¿Y si no te las dan?» Lola: «Entonces iríamos en septiembre, si pudiéramos.» Tomás: «Si fuera por mí, me iría a Australia un año entero.» Lola: «Hablas como si fuéramos ricos.»",
        ],
        [
          ["Si me suben el sueldo, cambiaré de coche.", "If they raise my salary, I'll change cars. (posible)"],
          ["Si dependiera de mí, viviríamos en la playa.", "If it depended on me, we'd live on the beach. (imaginario)"],
        ],
        [
          fb("Completa.", "Si me ___ las vacaciones en julio, iremos a Galicia. (dar)", "dan", "Posible (iremos): si + presente de indicativo, dan."),
          mc(
            "Según la conversación, ¿por qué dice Lola «hablas como si fuéramos ricos»?",
            ["Porque ir a Australia un año es caro y no son ricos.", "Porque ya tienen las vacaciones en julio.", "Porque Tomás quiere ir a Galicia.", "Porque son ricos de verdad."],
            0,
            "Como si + imperfecto de subjuntivo (fuéramos) compara con algo falso: no son ricos. Por eso el plan de Tomás le parece imposible."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "…___ a Galicia. (ir, nosotros, futuro)", "iremos", "Condición posible → futuro en la consecuencia: iremos."),
      fb("Completa.", "Entonces ___ en septiembre. (ir, nosotros, condicional)", "iríamos", "Hipótesis menos segura → condicional: iríamos."),
      fb("Completa.", "…si ___. (poder, nosotros)", "pudiéramos", "Con condicional en la otra parte: si + imperfecto de subjuntivo, pudiéramos."),
      fb("Completa.", "Si ___ por mí, me iría a Australia. (ser)", "fuera", "Imaginario (me iría): si + imperfecto de subjuntivo, fuera."),
      fb("Completa.", "Hablas como si ___ ricos. (ser, nosotros)", "fuéramos", "Como si + imperfecto de subjuntivo: fuéramos, con tilde."),
      mc(
        "«Si ahorramos este año, el año que viene ___ un viaje largo.»",
        ["haremos", "haríamos", "hiciéramos", "hagamos"],
        0,
        "Una condición real (si ahorramos) lleva la consecuencia en futuro: haremos. «Haríamos» es hipotético, «hiciéramos» es subjuntivo y «hagamos» es presente de subjuntivo."
      ),
      toEs("If it were up to me, we would stay home.", "Si fuera por mí, nos quedaríamos en casa.", "Condición irreal: «si fuera por mí» + condicional «nos quedaríamos».", ["Si dependiera de mí, nos quedaríamos en casa.", "Si fuese por mí, nos quedaríamos en casa."]),
      toEs(
        "Si me toca la lotería, me iré a Australia.",
        "Si me tocara la lotería, me iría a Australia.",
        "Que te toque la lotería es muy improbable: si + imperfecto de subjuntivo (tocara) y condicional (iría).",
        ["Si me tocase la lotería, me iría a Australia."],
        "Transforma en una hipótesis: es casi imposible que te toque."
      ),
      toEs(
        "Si tuviéramos tiempo, iríamos al concierto.",
        "Si tenemos tiempo, iremos al concierto.",
        "Si ahora es posible: si + presente (tenemos) y futuro (iremos).",
        ["Si tenemos tiempo, vamos a ir al concierto.", "Si tenemos tiempo, vamos al concierto."],
        "Transforma en una condición real: puede que salgáis pronto del trabajo."
      ),
      toEs(
        "Si llueve, nos quedamos en casa.",
        "Si lloviera, nos quedaríamos en casa.",
        "Para un caso improbable: si + imperfecto de subjuntivo (lloviera) y condicional (nos quedaríamos).",
        ["Si lloviese, nos quedaríamos en casa."],
        "Transforma en una hipótesis: casi nunca llueve en agosto."
      ),
      toEs(
        "Si me darían el día libre, iría a ver a mis padres.",
        "Si me dieran el día libre, iría a ver a mis padres.",
        "Tras el si condicional nunca va el condicional: dieran (imperfecto de subjuntivo de dar).",
        ["Si me diesen el día libre, iría a ver a mis padres."],
        "Corrige la frase."
      ),
      toEs(
        "Si mañana hace sol, iríamos a la playa.",
        "Si mañana hace sol, iremos a la playa.",
        "Una condición posible (si hace) lleva futuro en la consecuencia (iremos), no condicional.",
        ["Si mañana hace sol, vamos a ir a la playa.", "Si mañana hiciera sol, iríamos a la playa."],
        "Corrige la frase."
      ),
      toEs(
        "Si fuera más barato, lo compraré.",
        "Si fuera más barato, lo compraría.",
        "Con si + imperfecto de subjuntivo (fuera), la consecuencia va en condicional (compraría).",
        ["Si fuese más barato, lo compraría.", "Si es más barato, lo compraré."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: para un pasado que no ocurrió, si + pluscuamperfecto de subjuntivo (hubiera + participio), + condicional perfecto (habría + participio): Si hubiera salido antes, habría llegado a tiempo.",
          "Solo cambia el auxiliar con la persona (hubiera, hubieras, hubiéramos...; habría, habrías, habríamos...); el participio queda fijo. Ojo con los participios irregulares: dicho, hecho, puesto, visto, vuelto, escrito, roto, abierto, muerto. En el habla también se oye hubiera en las dos partes (Si hubiera salido antes, hubiera llegado).",
        ],
        [
          ["Si hubiera salido antes, habría llegado a tiempo.", "If I had left earlier, I would have arrived on time."],
          ["Si me lo hubieras dicho, te habría ayudado.", "If you had told me, I would have helped you. (decir → dicho)"],
        ],
        [
          fb("Mismo marco.", "Si ___ la lista, no habría olvidado la leche. (hacer, yo)", "hubiera hecho", "Condición pasada: hubiera + participio irregular de hacer, hecho (no «hacido»)."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Si hubiera estudiado, ___ el examen. (aprobar, yo)", "habría aprobado", "Consecuencia pasada no realizada: habría + participio, aprobado."),
      fb("Mismo marco.", "Si ___ el paraguas, no te habrías mojado. (coger, tú)", "hubieras cogido", "Condición pasada tras si: hubieras + participio, cogido."),
      fb("Mismo marco.", "Si hubiéramos reservado, ___ mesa. (tener, nosotros)", "habríamos tenido", "Consecuencia: habríamos + participio, tenido (regular)."),
      fb("Mismo marco.", "Si ___ la verdad, no se habría enfadado. (decir, tú)", "hubieras dicho", "Condición pasada: hubieras + participio irregular de decir, dicho."),
      fb("Mismo marco.", "Si hubieran puesto la alarma, no ___ tarde. (llegar, ellos)", "habrían llegado", "Consecuencia: habrían + participio, llegado."),
      { ...fb("Mismo marco.", "Si ___ el mapa, no nos habríamos perdido. (ver, nosotros)", "hubiéramos visto", "Condición pasada: hubiéramos + participio irregular de ver, visto."), altAnswers: ["hubiéramos mirado", "hubiéramos consultado", "hubiésemos visto"] },
      toEs("Si salgo antes, llego a tiempo.", "Si hubiera salido antes, habría llegado a tiempo.", "Para hablar de un pasado que no ocurrió, la condición pasa a pluscuamperfecto de subjuntivo (hubiera salido) y la consecuencia a condicional perfecto (habría llegado).", ["Si hubiese salido antes, habría llegado a tiempo.", "Si hubiera salido antes, hubiera llegado a tiempo."], "Cambia la frase a un pasado que no ocurrió."),
      toEs("Si hubieras ponido la alarma, te habrías despertado.", "Si hubieras puesto la alarma, te habrías despertado.", "Poner tiene participio irregular: puesto, no «ponido». La estructura (hubieras + participio, habrías + participio) es correcta.", ["Si hubieses puesto la alarma, te habrías despertado.", "Si hubieras puesto la alarma, te hubieras despertado."], "Corrige la frase."),
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
        [
          "La regla: irreal ahora → si + imperfecto de subjuntivo, + condicional simple (Si tuviera dinero, compraría la casa: ahora no tengo). Irreal en el pasado → si + pluscuamperfecto de subjuntivo, + condicional perfecto (Si hubiera tenido dinero, habría comprado la casa: la ocasión ya pasó).",
          "Cada mitad elige su tiempo por separado, así que se pueden mezclar: condición pasada con resultado presente (Si hubiera estudiado Derecho, ahora sería abogado). Las pistas temporales (ahora, ayer, de joven, anoche) deciden.",
        ],
        [
          ["Si tuviera tiempo, iría contigo.", "If I had time, I'd go with you. (ahora)"],
          ["Si hubiera tenido tiempo, habría ido contigo.", "If I had had time, I would have gone with you. (entonces)"],
          ["Si hubiera dormido más, ahora no estaría tan cansado.", "If I had slept more, I wouldn't be so tired now. (antes → ahora)"],
        ],
        [
          mc(
            "La fiesta fue ayer y no fuiste: «Si ___, habría ido.»",
            ["me hubieran invitado", "me invitaran", "me invitan", "me habrían invitado"],
            0,
            "La fiesta ya pasó: condición irreal en el pasado → si me hubieran invitado. «Invitaran» mira al presente, «invitan» es real y «habrían invitado» (condicional) no va tras si."
          ),
        ]
      ),
    ],
    [
      fb("Ahora.", "Si ___ más cerca, te visitaría. (vivir, yo)", "viviera", "Visitaría (condicional simple) → irreal en el presente: si + imperfecto de subjuntivo, viviera."),
      fb("Antes.", "Si ___ más cerca, te habría visitado. (vivir, yo)", "hubiera vivido", "Habría visitado (condicional perfecto) → irreal en el pasado: si + pluscuamperfecto de subjuntivo, hubiera vivido."),
      { ...fb("Ahora.", "Si supiera nadar, ___ al lago. (tirarse, yo)", "me tiraría", "Con supiera (presente irreal), la consecuencia va en condicional simple: me tiraría."), altAnswers: ["me lanzaría", "saltaría"] },
      { ...fb("Antes.", "Si hubiera sabido nadar, ___ al lago. (tirarse, yo)", "me habría tirado", "Con hubiera sabido (pasado irreal), la consecuencia pasada va en condicional perfecto: me habría tirado."), altAnswers: ["me hubiera tirado", "habría saltado", "me habría lanzado"] },
      fb("Ahora.", "Si no ___ tanto, estarías mejor. (fumar, tú)", "fumaras", "Hábito actual que es real (fumas): irreal en el presente → fumaras."),
      fb("Antes.", "Si no ___ tanto de joven, estarías mejor ahora. (fumar, tú)", "hubieras fumado", "De joven: la condición es pasada (hubieras fumado), aunque el resultado sea presente (estarías)."),
      toEs("Si tuviera coche, te llevaría al aeropuerto.", "Si hubiera tenido coche, te habría llevado al aeropuerto.", "La ocasión ya pasó: las dos mitades pasan a forma compuesta, hubiera tenido y habría llevado.", ["Si hubiese tenido coche, te habría llevado al aeropuerto.", "Si hubiera tenido coche, te hubiera llevado al aeropuerto.", "Si hubiera tenido carro, te habría llevado al aeropuerto."], "Cambia la frase: el viaje fue la semana pasada."),
      toEs("Si hubiera aprendido inglés de niño, ahora habría trabajado en Londres.", "Si hubiera aprendido inglés de niño, ahora trabajaría en Londres.", "Ahora marca un resultado presente: condicional simple (trabajaría). La condición sí es pasada (de niño): hubiera aprendido.", ["Si de niño hubiera aprendido inglés, ahora trabajaría en Londres.", "Si hubiese aprendido inglés de niño, ahora trabajaría en Londres."], "Corrige la frase."),
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
        [
          "Recuerda la regla: habría y hubiera se combinan con el mismo participio que ya usas en he hecho o había dicho. Los irregulares no cambian por estar en una estructura nueva: hecho, dicho, visto, puesto, vuelto, escrito, abierto, roto, muerto, resuelto, cubierto.",
          "Pista para los compuestos: heredan el participio de su base. Volver → vuelto, así que devolver → devuelto y resolver → resuelto; poner → puesto, así que proponer → propuesto; cubrir → cubierto, así que descubrir → descubierto.",
        ],
        [
          ["Yo lo habría hecho de otra manera.", "I would have done it differently. (hacer → hecho)"],
          ["Si hubieras vuelto antes, la habrías visto.", "If you had come back earlier, you would have seen her. (vuelto, visto)"],
        ],
        [
          fb("Estación 1.", "Si me lo hubieran ___ antes, habría aceptado la oferta. (proponer)", "propuesto", "Proponer es un compuesto de poner: hereda su participio irregular, puesto → propuesto (no «proponido»)."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Yo en tu lugar no lo ___. (hacer)", "habría hecho", "Condicional perfecto: habría + hecho (participio irregular de hacer)."),
      fb("Estación 1.", "Yo no le ___ nada. (decir)", "habría dicho", "Habría + dicho (participio irregular de decir, no «decido»)."),
      fb("Estación 2.", "Si ___ la ventana, no haría tanto calor. (abrir, ellos)", "hubieran abierto", "Hubieran + abierto (abrir → abierto); aquí la consecuencia está en el presente (haría)."),
      fb("Estación 3.", "Si hubieras tenido cuidado, no se ___ el jarrón. (romper)", "habría roto", "Habría + roto (romper → roto, no «rompido»)."),
      fb("Estación 3.", "Si hubiéramos leído las instrucciones, ___ el problema. (resolver)", "habríamos resuelto", "Habríamos + resuelto: resolver sigue el modelo de volver → vuelto."),
      fb("Estación 4.", "Si me lo ___ por escrito, lo tendría claro. (poner, tú)", "hubieras puesto", "Hubieras + puesto (poner → puesto); poner algo por escrito = escribirlo."),
      toEs("Si me lo dices, lo hago.", "Si me lo hubieras dicho, lo habría hecho.", "Al llevarlo a un pasado que no ocurrió: hubieras dicho y habría hecho, dos participios irregulares (decir → dicho, hacer → hecho).", ["Si me lo hubieses dicho, lo habría hecho.", "Si me lo hubieras dicho, lo hubiera hecho."], "Cambia la frase a un pasado que no ocurrió."),
      toEs("Si hubieras devolvido el libro, no habrías pagado la multa.", "Si hubieras devuelto el libro, no habrías pagado la multa.", "Devolver hereda el participio de volver: devuelto, no «devolvido».", ["Si hubieses devuelto el libro, no habrías pagado la multa.", "Si hubieras devuelto el libro, no hubieras pagado la multa."], "Corrige la frase."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: una decisión pasada que no tomaste va en si + pluscuamperfecto de subjuntivo (si hubiera estudiado Arte). Su efecto depende de cuándo lo sitúas: en el pasado → condicional perfecto (habría sido más feliz); en tu vida de ahora → condicional simple (ahora sería pintora).",
          "Pregúntate: ¿el resultado imaginado también terminó, o seguiría siendo verdad hoy? Ahora, hoy, todavía piden condicional simple.",
        ],
        [
          ["Si no me hubiera mudado, no habría conocido a mi pareja.", "If I hadn't moved, I wouldn't have met my partner. (resultado pasado)"],
          ["Si hubiera aprendido inglés de niño, ahora lo hablaría perfectamente.", "If I had learned English as a child, I'd speak it perfectly now. (resultado presente)"],
        ],
        [
          fb("Tu vida.", "Si ___ Arte, habría sido más feliz. (estudiar)", "hubiera estudiado", "La decisión pasada no tomada va en pluscuamperfecto de subjuntivo: hubiera estudiado."),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Si hubiera ahorrado más, ahora ___ una casa. (tener)", "tendría", "Ahora: el resultado es presente → condicional simple, tendría (no «habría tenido»)."),
      fb("Tu vida.", "Si no ___ aquel tren, mi vida sería distinta. (perder)", "hubiera perdido", "Perder el tren ocurrió en el pasado → si + pluscuamperfecto de subjuntivo, hubiera perdido."),
      fb("Tu vida.", "Si mis padres no se hubieran conocido, yo no ___. (existir)", "existiría", "Existir es un estado de ahora → condicional simple: existiría."),
      fb("Tu vida.", "Si me hubiera quedado en Madrid, ___ a mi mejor amiga. (conocer, no)", "no habría conocido", "Conocer a alguien es un hecho del pasado → condicional perfecto: no habría conocido."),
      toEs("Si hubiera estudiado Derecho, habría trabajado en un bufete.", "Si hubiera estudiado Derecho, ahora trabajaría en un bufete.", "Al situar el resultado en tu vida de hoy (ahora), la consecuencia pasa a condicional simple: trabajaría. La condición sigue en pasado.", ["Si hubiera estudiado Derecho, trabajaría ahora en un bufete.", "Si hubiese estudiado Derecho, ahora trabajaría en un bufete."], "Cambia el resultado al presente (añade «ahora»)."),
      toEs("Si habría aprendido a nadar, habría ido a la playa con vosotros.", "Si hubiera aprendido a nadar, habría ido a la playa con vosotros.", "Tras si nunca va condicional: hubiera aprendido. El condicional perfecto va solo en la consecuencia (habría ido).", ["Si hubiese aprendido a nadar, habría ido a la playa con vosotros.", "Si hubiera aprendido a nadar, habría ido a la playa con ustedes."], "Corrige la frase."),
      { type: "speak", prompt: "Piensa en una decisión de tu pasado. Responde en voz alta con «Si hubiera…, ahora…» (por ejemplo: estudiar música / ser músico).", text: "Si hubiera estudiado música, ahora sería músico.", explanation: "Condición pasada (hubiera estudiado) con resultado en tu vida de hoy: condicional simple (sería)." },
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
        [
          "Recuerda la regla: ojalá siempre va con subjuntivo, y el tiempo del subjuntivo dice cuánto crees en tu deseo. Presente (ojalá venga): todavía es posible. Imperfecto (ojalá viniera): es improbable o imposible ahora. Pluscuamperfecto (ojalá hubiera venido): ya pasó y no se puede cambiar, por eso suena a lamento.",
          "Por qué importa: «Ojalá viniera» y «Ojalá hubiera venido» pueden hablar de la misma persona; lo que cambia es si el momento ya pasó. Hubiese venido es igual de correcto, y «ojalá que» también se usa.",
        ],
        [
          ["Ojalá llueva mañana.", "I hope it rains tomorrow. (presente: aún es posible)"],
          ["Ojalá tuviera más paciencia.", "I wish I had more patience. (imperfecto: ahora no la tengo)"],
          ["Ojalá hubiera venido a la fiesta.", "I wish he had come to the party. (pluscuamperfecto: la fiesta ya pasó)"],
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
      fb("Elige.", "Ojalá no ___ ese mensaje anoche. (enviar, yo)", "hubiera enviado", "«Anoche» ya pasó: lamento sobre el pasado, ojalá + pluscuamperfecto de subjuntivo (hubiera enviado; también hubiese enviado). «Enviara» hablaría de ahora."),
      fb("Elige.", "Ojalá ___ el examen mañana. (aprobar, yo)", "apruebe", "El examen es mañana y aprobar es posible: ojalá + presente de subjuntivo (apruebe). Con «aprobara» dirías que lo ves casi imposible."),
      fb("Elige.", "Ojalá ___ más en el instituto. (estudiar, yo)", "hubiera estudiado", "El instituto ya terminó: lamento por el pasado, hubiera estudiado (o hubiese estudiado). «Estudiara» se referiría al presente."),
      fb("Elige.", "Ojalá ___ hablar japonés. (saber, yo)", "supiera", "No sabes japonés ahora: deseo irreal en el presente, ojalá + imperfecto de subjuntivo (supiera, de saber, irregular). «Sepa» lo presentaría como algo posible."),
      toEs("Ojalá me despida de ella antes de que se vaya.", "Ojalá me hubiera despedido de ella antes de que se fuera.", "Si ya se fue, el deseo pasa al pluscuamperfecto de subjuntivo (me hubiera despedido) y «antes de que» pasa al imperfecto de subjuntivo (se fuera) para concordar con el pasado.", ["Ojalá me hubiese despedido de ella antes de que se fuera.", "Ojalá me hubiera despedido de ella antes de que se fuese.", "Ojalá me hubiese despedido de ella antes de que se fuese."], "Cambia el deseo al pasado: ella ya se fue y no te despediste."),
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
        [
          "Recuerda la regla: para imaginar un pasado distinto, la condición va en pluscuamperfecto de subjuntivo (si hubiera aceptado). La consecuencia va en condicional compuesto si también es pasada (habría tocado) y en condicional simple si llega hasta hoy (ahora hablaría). Ojalá + hubiera + participio expresa el lamento.",
          "Nacho: «Si hubiera aceptado aquel trabajo en Berlín, ahora hablaría alemán.» Carla: «Y si yo no hubiera dejado el piano, habría tocado en una orquesta.» Nacho: «Ojalá nos hubiéramos atrevido más.» Carla: «Bueno, si hubiéramos hecho todo eso, no nos habríamos conocido.»",
        ],
        [
          ["Ojalá nos hubiéramos atrevido más.", "I wish we had dared more. (lamento sobre el pasado)"],
        ],
        [
          fb("Completa lo que cuenta Carla de su hermano.", "Si mi hermano no se ___ a Chile, ahora viviría cerca de nosotros. (mudar)", "hubiera mudado", "La mudanza ya pasó: condición pasada con si + pluscuamperfecto de subjuntivo (se hubiera mudado). La consecuencia es actual (ahora viviría), por eso va en condicional simple."),
        ]
      ),
    ],
    [
      mc("Según Carla, ¿qué habría pasado si se hubieran atrevido a todo?", ["No se habrían conocido.", "Habrían tocado juntos en una orquesta.", "Ahora hablarían alemán los dos.", "Se habrían ido juntos a Berlín."], 0, "Carla dice «no nos habríamos conocido»: condicional compuesto porque la consecuencia es pasada (el momento de conocerse ya pasó). Las otras opciones mezclan los planes de cada uno."),
      mc("¿Por qué Nacho dice «ahora hablaría alemán» y no «ahora habría hablado alemán»?", ["Porque la consecuencia es actual: hoy no habla alemán.", "Porque la condición está en presente.", "Porque después de si siempre va el condicional simple.", "Porque «habría hablado» no existe."], 0, "La condición es pasada (hubiera aceptado), pero el resultado llega hasta hoy, y «ahora» lo marca: condicional simple (hablaría). Es una condicional mixta. «Habría hablado» existe, pero hablaría de un resultado ya terminado."),
      toEs("Si Nacho ahorra más, monta su propio bar.", "Si Nacho hubiera ahorrado más, habría montado su propio bar.", "Para imaginar un pasado distinto: si + pluscuamperfecto de subjuntivo (hubiera ahorrado) y condicional compuesto (habría montado). El presente de indicativo (ahorra, monta) solo sirve para condiciones reales.", ["Si Nacho hubiese ahorrado más, habría montado su propio bar.", "Si Nacho hubiera ahorrado más, hubiera montado su propio bar."], "Pasa la frase al irreal de pasado: Nacho no ahorró y no montó nada."),
      fb("Completa la respuesta de Carla.", "—Nunca me apunté al conservatorio. Ojalá me ___ cuando tenía quince años. (apuntar)", "hubiera apuntado", "Lamento sobre algo que ya no tiene remedio: ojalá + pluscuamperfecto de subjuntivo (me hubiera apuntado, o me hubiese apuntado). «Apuntara» se referiría al presente."),
      toEs("Si Nacho habría estudiado idiomas, ahora trabajaría en Berlín.", "Si Nacho hubiera estudiado idiomas, ahora trabajaría en Berlín.", "Después de si nunca va el condicional: la condición pasada va en pluscuamperfecto de subjuntivo (hubiera estudiado). La consecuencia «ahora trabajaría» está bien: es actual.", ["Si Nacho hubiese estudiado idiomas, ahora trabajaría en Berlín."], "Corrige la frase."),
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
        [
          "Recuerda la regla: para contar lo que no pasó, la condición va en pluscuamperfecto de subjuntivo (si hubiera estudiado) y la consecuencia en condicional compuesto (no habría suspendido). Si el resultado llega hasta hoy, condicional simple (ahora no estaría cansado).",
          "Por qué cambian los signos: la hipótesis imagina el mundo contrario a los hechos. Hecho: No estudié, así que suspendí. → Hipótesis: Si hubiera estudiado, no habría suspendido. Lo afirmativo pasa a negativo y lo negativo a afirmativo.",
        ],
        [
          ["Llovió y no fuimos a la playa. → Si no hubiera llovido, habríamos ido a la playa.", "It rained and we didn't go to the beach. → If it hadn't rained, we would have gone to the beach."],
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
      toEs("Si no habría hecho tanto viento, habríamos salido en barco.", "Si no hubiera hecho tanto viento, habríamos salido en barco.", "Error típico: habría en las dos partes. Tras si va el pluscuamperfecto de subjuntivo (hubiera hecho, o hubiese hecho); habría solo va en la consecuencia.", ["Si no hubiese hecho tanto viento, habríamos salido en barco.", "Si no hubiera hecho tanto viento, hubiéramos salido en barco."], "Corrige la frase."),
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
        [
          "Recuerda la regla: en la parte con si va el pluscuamperfecto de subjuntivo (si hubiera sabido, si hubieras llamado), nunca el condicional. Habría + participio solo va en la consecuencia, donde también se acepta hubiera: te habría abierto / te hubiera abierto.",
          "Por qué se cuela el error: en inglés «would have» aparece a veces en las dos partes en el habla coloquial, y en algunas zonas de España se oye «si habría». En la norma culta es incorrecto, y en un examen o un correo de trabajo se nota.",
          "El mensaje: «Si habría sabido que venías, te habría esperado. Si hubieras llamado, te hubiera abierto. Si me habrías avisado, no habría pasado nada.» Dos errores; una frase es correcta.",
        ],
        [
          ["Si hubiera salido antes, no habría perdido el tren.", "If I had left earlier, I wouldn't have missed the train. (hubiera tras si, habría en la consecuencia)"],
          ["Si me hubieras avisado, te hubiera esperado.", "If you had told me, I would have waited for you. (hubiera también vale en la consecuencia)"],
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
      toEs("Si habría sabido que venías, te habría esperado.", "Si hubiera sabido que venías, te habría esperado.", "Tras «si» condicional nunca va «habría»: se usa «hubiera sabido» (o «hubiese sabido»). La consecuencia, «te habría esperado», está bien.", ["Si hubiese sabido que venías, te habría esperado.", "Si hubiera sabido que venías, te hubiera esperado."], "Corrige la frase."),
      toEs("Si me habrías avisado, no habría pasado nada.", "Si me hubieras avisado, no habría pasado nada.", "Tras «si» condicional nunca va «habrías»: se usa «hubieras avisado» (o «hubieses avisado»).", ["Si me hubieses avisado, no habría pasado nada.", "Si me hubieras avisado, no hubiera pasado nada."], "Corrige la frase."),
      toEs("Si hubiera tenido tiempo, habré ido.", "Si hubiera tenido tiempo, habría ido.", "La consecuencia de «si hubiera tenido» va en condicional compuesto: «habría ido». «Habré ido» es futuro compuesto y habla de algo probable, no imaginado.", ["Si hubiera tenido tiempo, hubiera ido.", "Si hubiese tenido tiempo, habría ido."], "Corrige la frase."),
      toEs("Ojalá habría venido.", "Ojalá hubiera venido.", "«Ojalá» va con subjuntivo, nunca con condicional: para lamentar el pasado, «hubiera venido» (o «hubiese venido»).", ["Ojalá hubiese venido."], "Corrige la frase."),
      toEs("Si lo hubiera visto, lo habría decido.", "Si lo hubiera visto, lo habría dicho.", "Aquí los tiempos están bien; el error es el participio. El de «decir» es irregular: «dicho» («decidido» es de «decidir»).", ["Si lo hubiera visto, lo hubiera dicho.", "Si lo hubiese visto, lo habría dicho."], "Corrige la frase."),
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
    "Practica cuándo usar hubiera (tras si, ojalá, como si) y cuándo habría (en la consecuencia).",
    "5 min",
    [
      sec(
        "Regla de bolsillo",
        [
          "Recuerda la regla: tras si, ojalá y como si referidos al pasado → hubiera (es subjuntivo: la condición, el deseo o la comparación no son hechos). En la consecuencia → habría (o hubiera, también aceptado). Nunca habría después de si.",
          "Truco rápido: si en la frase no hay si, ojalá ni como si, y opinas sobre lo que habría pasado (yo no lo habría comprado, ¿qué habrías hecho?), es habría.",
        ],
        [
          ["Como si no hubiera pasado nada.", "As if nothing had happened. (como si → hubiera)"],
          ["Yo no lo habría dicho.", "I wouldn't have said it. (opinión sin si → habría)"],
        ],
        [
          fb("Rápido.", "Si ___ venido, lo habrías visto. (tú)", "hubieras", "Tras si va el pluscuamperfecto de subjuntivo: hubieras venido. Habrías solo va en la consecuencia (lo habrías visto)."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si hubieras estudiado, ___ aprobado. (tú)", "habrías", "Es la consecuencia de una condición pasada: condicional compuesto, habrías aprobado (también se acepta hubieras)."),
      fb("Rápido.", "Ojalá ___ llegado a tiempo. (nosotros)", "hubiéramos", "Ojalá siempre pide subjuntivo: hubiéramos llegado. «Habríamos» es condicional y no va tras ojalá."),
      fb("Rápido.", "Me miró como si ___ visto un fantasma. (él)", "hubiera", "Como si siempre va con imperfecto o pluscuamperfecto de subjuntivo; para algo anterior, hubiera visto."),
      fb("Rápido.", "Yo no lo ___ comprado. (yo)", "habría", "No hay si ni ojalá: es una opinión sobre lo que habrías hecho, con la condición implícita (si hubiera sido yo). Va habría."),
      toEs("Si lo habría sabido, no habría venido.", "Si lo hubiera sabido, no habría venido.", "Tras si nunca va habría: hubiera sabido (o hubiese sabido). En la consecuencia, habría venido es correcto.", ["Si lo hubiese sabido, no habría venido.", "Si lo hubiera sabido, no hubiera venido."], "Corrige la frase."),
      fb("Rápido.", "¿Qué ___ hecho tú en mi lugar? (tú)", "habrías", "«En mi lugar» es la condición implícita; la pregunta es la consecuencia: habrías hecho."),
      fb("Rápido.", "Habla como si ___ estado allí. (él)", "hubiera", "Como si + pluscuamperfecto de subjuntivo: hubiera estado. Aunque «habla» esté en presente, como si nunca lleva presente de subjuntivo."),
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
        [
          "Recuerda la regla: el reproche sobre el pasado se hace con habrías podido + infinitivo (me lo habrías podido decir) o con deberías / podrías haber + participio (deberías habérmelo dicho). El arrepentimiento propio, con ojalá + hubiera + participio (ojalá no lo hubiera hecho).",
          "Al escribirlo, fíjate en la ortografía: habría, hubiera y haber llevan h (no confundas habrías con abrías, de abrir); los participios irregulares no cambian: dicho, hecho, escrito, traído (con tilde). Los pronombres se pegan a haber: habérmelo (con tilde, porque pasa a esdrújula).",
        ],
        [
          ["Me lo habrías podido decir.", "You could have told me. (reproche: habrías podido + infinitivo)"],
          ["Deberías habérselo explicado a tu madre.", "You should have explained it to your mother. (pronombres pegados a haber)"],
        ],
        [
          wo("Ojalá no se lo hubiera contado a nadie.", "Arrepentimiento propio: ojalá + hubiera + participio. Los pronombres (se lo) van delante del auxiliar hubiera.", "I wish I hadn't told anyone."),
        ]
      ),
    ],
    [
      wo("Si hubiéramos salido antes, no habríamos perdido el tren.", "Irreal de pasado: hubiéramos (con h y tilde) tras si, habríamos en la consecuencia.", "If we had left earlier, we wouldn't have missed the train."),
      wo("Me lo habrías podido contar ayer.", "«Habrías podido» + infinitivo (= «podrías haber» + participio) expresa un reproche sobre el pasado; los pronombres van delante del auxiliar.", "You could have told me yesterday."),
      wo("Yo en tu lugar habría hablado con ella.", "Consejo tardío sobre el pasado: «yo en tu lugar» + condicional compuesto (habría hablado).", "In your place, I would have talked to her."),
      wo("Si no me hubieras ayudado, no habría terminado.", "Irreal de pasado: si no me hubieras ayudado (pronombre delante del auxiliar) + no habría terminado.", "If you hadn't helped me, I wouldn't have finished."),
      toEs("Dímelo.", "Deberías habérmelo dicho.", "Para reprochar algo que ya no tiene arreglo: deberías + haber + participio (dicho). Los pronombres se pegan a haber y la palabra lleva tilde: habérmelo.", ["Me lo deberías haber dicho.", "Tendrías que habérmelo dicho.", "Me lo tendrías que haber dicho."], "Cambia la orden a un reproche sobre el pasado con «deberías haber»."),
      toEs("Ojalá habría estudiado más.", "Ojalá hubiera estudiado más.", "Ojalá nunca va con condicional: para lamentar el pasado pide pluscuamperfecto de subjuntivo, hubiera estudiado (con h, del verbo haber).", ["Ojalá hubiese estudiado más."], "Corrige la frase."),
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
        "Cada mitad mira a su propio tiempo",
        [
          "Recuerda la regla: en una condicional mixta cada mitad lleva el tiempo de su momento. Condición pasada → si + pluscuamperfecto de subjuntivo (si hubiera estudiado); consecuencia de ahora → condicional simple (ahora sería). Al revés, un rasgo actual o permanente → si + imperfecto de subjuntivo (si fuera más valiente) y un hecho ya ocurrido → condicional perfecto (se lo habría dicho).",
          "¿Por qué? El español no te obliga a usar el mismo «tipo» en las dos partes: decide cada mitad por separado. Las pistas son las palabras de tiempo: ahora, hoy, ya, todavía (presente) frente a ayer, aquel día, en 2019 (pasado).",
        ],
        [
          ["Si hubiera estudiado Medicina, ahora sería médico.", "If I had studied medicine, I'd be a doctor now. (pasado → presente)"],
          ["Si fuera más valiente, se lo habría dicho.", "If I were braver, I would have told him. (rasgo actual → hecho pasado)"],
          ["Si no hubiéramos perdido el vuelo, ya estaríamos en Lima.", "If we hadn't missed the flight, we'd already be in Lima. (ya = ahora)"],
          ["Si no fueras tan despistado, no te habrías dejado las llaves.", "If you weren't so absent-minded, you wouldn't have left your keys behind."],
        ],
        [
          fb("Pasado → presente.", "Si hubiera aceptado el trabajo, ahora ___ en Londres. (vivir, yo)", "viviría", "«Ahora» sitúa la consecuencia en el presente, así que va en condicional simple: viviría. «Habría vivido» hablaría de una época ya terminada."),
          mc(
            "Marta es muy tímida y ayer no habló en la reunión: «Si no ___ tan tímida, habría hablado.»",
            ["fuera", "sería", "habría sido", "es"],
            0,
            "La timidez es un rasgo actual, así que la condición va en imperfecto de subjuntivo: fuera. «Sería» y «habría sido» son condicionales y nunca van detrás de «si»; «es» presentaría la condición como real."
          ),
        ]
      ),
    ],
    [
      fb("Pasado → pasado.", "Si hubiera aceptado el trabajo, ___ a Londres en 2019. (mudarse, yo)", "me habría mudado", "«En 2019» es un momento pasado, así que la consecuencia va en condicional perfecto: me habría mudado. El pronombre «me» va delante de «habría»."),
      fb("Pasado → presente.", "Si no hubieras comido tanto, ahora no te ___ la tripa. (doler)", "dolería", "Comer tanto es pasado, pero el dolor es de «ahora»: condicional simple, dolería. «Habría dolido» situaría el dolor en el pasado."),
      fb("Presente → pasado.", "Si ___ más responsable, no habría olvidado la cita. (ser, yo)", "fuera", "Ser responsable es un rasgo de carácter que sigue siendo verdad hoy: imperfecto de subjuntivo, fuera. La consecuencia (olvidar la cita) ya pasó y va en condicional perfecto."),
      fb("Presente → pasado.", "Si no le ___ tanto miedo a volar, habría ido a Chile. (tener, yo)", "tuviera", "El miedo a volar es un estado actual: si + imperfecto de subjuntivo, tuviera. El viaje que no hice va en condicional perfecto (habría ido)."),
      { ...fb("Pasado → presente.", "Si ___ el tren, ya estaríamos en casa. (coger, nosotros)", "hubiéramos cogido", "Perder el tren ocurrió antes, así que la condición va en pluscuamperfecto de subjuntivo: hubiéramos cogido. «Ya estaríamos» describe ahora."), altAnswers: ["hubiéramos tomado"] },
      mc(
        "«Si hubiera dormido bien anoche, ahora no ___ tan cansado.»",
        ["estaría", "habría estado", "estuviera", "estoy"],
        0,
        "Condición pasada (anoche) con consecuencia en el presente (ahora): condicional simple, estaría. «Habría estado» se refiere al pasado, «estuviera» es subjuntivo y «estoy» es indicativo."
      ),
      toEs("If I spoke French, I would have understood the film.", "Si hablara francés, habría entendido la película.", "Condicional mixta: hablar francés es una capacidad actual («si hablara») y la película ya la vi («habría entendido»).", ["Si supiera francés, habría entendido la película.", "Si hablara francés, hubiera entendido la película."]),
      toEs("Si hubiera ahorrado, habría podido viajar el verano pasado.", "Si hubiera ahorrado, ahora podría viajar.", "Al cambiar el momento de la consecuencia a «ahora», el condicional perfecto pasa a condicional simple: podría. La condición (ahorrar antes) no cambia.", ["Si hubiera ahorrado, podría viajar ahora."], "Cambia la consecuencia para que hable de ahora (usa «ahora»)."),
      toEs("Si no estuviera tan cansada, saldría esta noche.", "Si no estuviera tan cansada, anoche habría salido.", "El cansancio sigue siendo actual (estuviera), pero la salida ahora es de anoche, un hecho pasado: condicional perfecto, habría salido.", ["Si no estuviera tan cansada, habría salido anoche.", "Si no estuviera tan cansada, anoche hubiera salido.", "Si no estuviera tan cansada, hubiera salido anoche."], "Cambia la consecuencia al pasado con «anoche»."),
      toEs("Si hubiera nacido en Argentina, ahora habría hablado con acento porteño.", "Si hubiera nacido en Argentina, ahora hablaría con acento porteño.", "«Ahora» exige condicional simple en la consecuencia: hablaría. «Habría hablado» es condicional perfecto y choca con «ahora».", ["Si hubiera nacido en Argentina, hablaría ahora con acento porteño."], "Corrige la frase."),
      toEs("Si habría sido más ordenado, no habría perdido el pasaporte.", "Si fuera más ordenado, no habría perdido el pasaporte.", "Detrás de «si» nunca va condicional. Como ser ordenado es un rasgo actual, lo natural es «si fuera»; «si hubiera sido» también vale si piensas solo en aquel momento.", ["Si hubiera sido más ordenado, no habría perdido el pasaporte.", "Si fuera más ordenado, no hubiera perdido el pasaporte.", "Si hubiera sido más ordenado, no hubiera perdido el pasaporte."], "Corrige la frase."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-cuento-historia-alternativa",
    "Cuento con huecos: una historia alternativa",
    "Practicarás los condicionales de tipo 3 y mixtos (si + pluscuamperfecto de subjuntivo con habría o condicional simple) completando una historia alternativa.",
    "7 min",
    [
      sec(
        "La historia que no fue",
        [
          "Recuerda la regla: para cambiar la historia, la condición va siempre en pluscuamperfecto de subjuntivo (si no hubiera llegado), porque el hecho ya ocurrió. La consecuencia depende de cuándo se nota: si se nota en aquel pasado, condicional perfecto (lo habría hecho); si se nota hoy, condicional simple (no se comerían).",
          "Lee el cuento: «Si Colón no hubiera llegado a América, quizá otro navegante lo habría hecho unos años después. Si nadie hubiera cruzado el Atlántico, en Europa no se comerían patatas ni tomates. Y si el chocolate no hubiera llegado a España, los churros no serían lo mismo.»",
        ],
        [
          ["Otro navegante lo habría hecho unos años después.", "Another navigator would have done it a few years later. (efecto en aquel pasado)"],
          ["En Europa no se comerían patatas.", "In Europe people wouldn't eat potatoes. (efecto que se nota hoy)"],
          ["Si no se hubiera inventado la imprenta, los libros serían carísimos.", "If the printing press hadn't been invented, books would be very expensive. (se hubiera inventado: pasiva con se)"],
        ],
        [
          fb("Completa.", "Si los vikingos ___ en América, hoy se hablaría noruego en Canadá. (quedarse)", "se hubieran quedado", "Quedarse en América es un hecho pasado que no ocurrió: si + pluscuamperfecto de subjuntivo, se hubieran quedado. El pronombre «se» va delante de hubieran."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si Colón no ___ a América… (llegar)", "hubiera llegado", "La llegada de Colón es un hecho de 1492: para imaginar lo contrario se usa si + pluscuamperfecto de subjuntivo, hubiera llegado."),
      fb("Completa.", "…otro navegante lo ___ unos años después. (hacer)", "habría hecho", "«Unos años después» sigue en el pasado: condicional perfecto con el participio irregular hecho."),
      fb("Completa.", "Si nadie ___ el Atlántico… (cruzar)", "hubiera cruzado", "Condición irreal sobre un hecho pasado: pluscuamperfecto de subjuntivo, hubiera cruzado. «Habría cruzado» nunca va detrás de «si»."),
      fb("Completa.", "…en Europa no se ___ patatas. (comer)", "comerían", "Comer patatas es algo de hoy, así que el efecto va en condicional simple: comerían (plural, porque concuerda con patatas)."),
      fb("Completa.", "Si el chocolate no ___ a España… (llegar)", "hubiera llegado", "El chocolate llegó en el siglo XVI: condición pasada, hubiera llegado."),
      fb("Completa.", "…los churros no ___ lo mismo. (ser)", "serían", "Los churros de hoy: consecuencia presente, condicional simple serían. «Habrían sido» hablaría de los churros de otra época."),
      mc(
        "«Si no se ___ la imprenta, los libros serían carísimos.»",
        ["hubiera inventado", "habría inventado", "inventara", "inventaría"],
        0,
        "La imprenta se inventó en el pasado: condición irreal pasada → pluscuamperfecto de subjuntivo, hubiera inventado. «Habría inventado» no va tras si, e «inventara» o «inventaría» miran al presente."
      ),
      toEs("If the internet hadn't been invented, we would write more letters.", "Si no se hubiera inventado internet, escribiríamos más cartas.", "Condicional mixta: condición pasada («si no se hubiera inventado») con efecto presente («escribiríamos»).", ["Si no hubieran inventado internet, escribiríamos más cartas."]),
      toEs("Si no hubieran descubierto la penicilina, muchos soldados habrían muerto en la guerra.", "Si no hubieran descubierto la penicilina, hoy muchas infecciones serían mortales.", "La condición sigue en el pasado, pero el efecto ahora es actual: condicional simple, serían. «Hoy» es la pista.", ["Si no hubieran descubierto la penicilina, muchas infecciones serían mortales hoy.", "Si no se hubiera descubierto la penicilina, hoy muchas infecciones serían mortales."], "Cambia la consecuencia a hoy: «hoy muchas infecciones serían mortales»."),
      toEs("Si el avión no se habría inventado, los viajes largos durarían semanas.", "Si el avión no se hubiera inventado, los viajes largos durarían semanas.", "Detrás de «si» nunca va condicional perfecto: se usa el pluscuamperfecto de subjuntivo, se hubiera inventado.", ["Si no se hubiera inventado el avión, los viajes largos durarían semanas."], "Corrige la frase."),
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
        [
          "Recuerda la regla: para criticar o lamentar algo pasado, el verbo modal va en condicional y lo que no se hizo va en infinitivo compuesto: deberías / tendrías que / podrías + haber + participio. Con «ojalá» se usa el pluscuamperfecto de subjuntivo: ojalá hubiera…",
          "¿Por qué? El condicional suaviza (es una crítica, no una orden) y «haber + participio» sitúa la acción en el pasado. A quién va dirigido lo decide la persona: «deberías» es un reproche a otro; «debería» u «ojalá (yo) hubiera», un lamento propio. Los pronombres se pegan a haber: habérmelo dicho.",
        ],
        [
          ["Habrías podido avisarme.", "You could have warned me. (reproche)"],
          ["Tendría que haberte avisado.", "I should have warned you. (lamento propio)"],
          ["Ojalá no hubiéramos vendido la casa.", "I wish we hadn't sold the house."],
          ["No deberíais habérselo contado.", "You shouldn't have told him. (pronombres pegados a haber)"],
        ],
        [
          fb("Estación 1.", "___ podido llamarme. (tú)", "Habrías", "Reproche a otra persona: condicional de haber + podido. También es posible «Podrías haberme llamado», con el modal en condicional."),
          fb("Estación 1.", "Ojalá nos ___ antes. (conocer, nosotros)", "hubiéramos conocido", "Ojalá + pluscuamperfecto de subjuntivo expresa un lamento sobre el pasado; con «ojalá» nunca va condicional."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Deberías ___ antes. (salir)", "haber salido", "Reproche: deber en condicional + haber + participio. «Deberías salir» sería un consejo para ahora."),
      fb("Estación 2.", "Tendría que ___ la verdad. (decirte, yo)", "haberte dicho", "El pronombre se pega a haber, el infinitivo: haberte dicho. Decir tiene participio irregular, dicho."),
      fb("Estación 2.", "Ojalá te ___ caso. (hacer, yo)", "hubiera hecho", "Lamento propio con ojalá: pluscuamperfecto de subjuntivo, hubiera hecho (participio irregular)."),
      fb("Estación 3.", "Podríais ___ la mesa. (reservar)", "haber reservado", "Reproche a vosotros: podríais + haber + participio. Solo el modal cambia de persona; «haber reservado» no varía."),
      fb("Estación 3.", "No ___ haberle gritado. (deber, tú)", "deberías", "Reproche a otra persona: deber en condicional, segunda persona (deberías). «Debías» también existe, pero el condicional es la forma habitual del reproche."),
      mc(
        "¿Qué frase es un lamento del propio hablante?",
        ["Ojalá no hubiera dicho eso.", "Habrías podido callarte.", "Deberías haberlo pensado.", "Podrías haber llamado."],
        0,
        "Ojalá + pluscuamperfecto de subjuntivo expresa un lamento propio: ojalá no hubiera dicho eso. «Habrías podido callarte», «Deberías haberlo pensado» y «Podrías haber llamado» son reproches a otra persona."
      ),
      toEs("You should have asked me.", "Deberías habérmelo preguntado.", "«Deberías haber» + participio expresa un reproche; los pronombres se unen al infinitivo.", ["Me lo deberías haber preguntado.", "Tendrías que habérmelo preguntado.", "Deberías haberme preguntado."]),
      toEs("Deberías haber cerrado la ventana.", "Debería haber cerrado la ventana.", "Al pasar el reproche a uno mismo, solo cambia la persona del modal: deberías → debería. «Haber cerrado» se queda igual.", ["Tendría que haber cerrado la ventana.", "Yo debería haber cerrado la ventana."], "Cambia el reproche a un lamento propio (yo)."),
      toEs("¿Por qué no me avisaste del cambio de hora?", "Podrías haberme avisado del cambio de hora.", "La queja con «¿por qué no…?» se convierte en reproche con podrías + haber + participio; el pronombre «me» se pega a haber.", ["Habrías podido avisarme del cambio de hora.", "Me podrías haber avisado del cambio de hora."], "Transforma la queja en un reproche con «podrías»."),
      toEs("Ojalá habría estudiado más para el examen.", "Ojalá hubiera estudiado más para el examen.", "«Ojalá» va siempre con subjuntivo; para el pasado, pluscuamperfecto de subjuntivo: hubiera estudiado. El condicional (habría) es incorrecto aquí.", [], "Corrige la frase."),
      toEs("Tendrías que haber me llamado antes de venir.", "Tendrías que haberme llamado antes de venir.", "El pronombre átono se escribe pegado al infinitivo haber (haberme) o va delante del modal (Me tendrías que haber llamado); nunca suelto entre los dos.", ["Me tendrías que haber llamado antes de venir."], "Corrige la frase."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-habla-de-ti-otra-epoca",
    "Habla de ti: si hubieras nacido en otra época",
    "Imagina tu vida en otro siglo con condicionales irreales de pasado y mixtas.",
    "6 min",
    [
      sec(
        "Otra época",
        [
          "Recuerda la regla: «si hubiera nacido / vivido en…» va en pluscuamperfecto de subjuntivo, porque tu nacimiento ya ocurrió. La consecuencia elige su tiempo: lo que habrías hecho en aquella vida va en condicional perfecto (habría ido); lo que serías o harías ahora mismo, en condicional simple (ahora sería, viviría).",
          "¿Por qué? Pregúntate si hablas de aquella vida terminada o de hoy. Si hubiera nacido en el futuro, la consecuencia ni siquiera ha empezado: quizá viviría en Marte.",
        ],
        [
          ["Si hubiera nacido en 1900, no habría ido a la universidad.", "If I had been born in 1900, I wouldn't have gone to university."],
          ["Si hubiera vivido en la Edad Media, ahora sería un fantasma.", "If I had lived in the Middle Ages, I'd be a ghost now. (ahora → condicional simple)"],
          ["Si mis abuelos hubieran sido ricos, quizá yo habría estudiado en el extranjero.", "If my grandparents had been rich, maybe I'd have studied abroad."],
        ],
        [
          fb("Tu época.", "Si ___ en la época de los dinosaurios, no habría sobrevivido ni un día. (vivir, yo)", "hubiera vivido", "Condición irreal sobre el pasado: si + pluscuamperfecto de subjuntivo, hubiera vivido. «Habría vivido» nunca va detrás de «si»."),
        ]
      ),
    ],
    [
      fb("Tu época.", "Si hubiera nacido en 1900, ___ en el campo. (trabajar)", "habría trabajado", "Aquella vida ya habría terminado: condicional perfecto, habría trabajado."),
      fb("Tu época.", "Si hubiera vivido en Roma, ___ latín. (hablar)", "habría hablado", "Hablar latín pertenece a aquella vida en la antigua Roma: condicional perfecto. Con «ahora» diríamos «hablaría»."),
      fb("Tu época.", "Si ___ en el siglo XXII, quizá viviría en Marte. (nacer)", "hubiera nacido", "Aunque el siglo XXII es futuro, tu nacimiento es un hecho ya ocurrido: la condición va en pluscuamperfecto de subjuntivo."),
      fb("Tu época.", "Si mis abuelos hubieran tenido internet, ___ muchas fotos. (hacer)", "habrían hecho", "La juventud de los abuelos ya pasó: condicional perfecto, con el participio irregular hecho y en plural (ellos)."),
      fb("Tu época.", "Si ___ joven en los años sesenta, habría ido a conciertos de los Beatles. (ser, yo)", "hubiera sido", "Pluscuamperfecto de subjuntivo de ser: hubiera sido. «Fuera joven» hablaría de un rasgo actual, y no lo es."),
      toEs("If I had lived in the 18th century, I would have been a sailor.", "Si hubiera vivido en el siglo XVIII, habría sido marinero.", "Condición irreal en el pasado: «si hubiera vivido» + «habría sido».", ["Si hubiera vivido en el siglo XVIII, hubiera sido marinero.", "Si hubiera vivido en el siglo XVIII, habría sido marinera."]),
      toEs("Si hubiera nacido en Japón, habría aprendido a escribir con kanji en el colegio.", "Si hubiera nacido en Japón, ahora escribiría con kanji.", "La consecuencia pasa del colegio (pasado, habría aprendido) a «ahora»: condicional simple, escribiría.", ["Si hubiera nacido en Japón, escribiría con kanji ahora."], "Cambia la consecuencia para hablar de ahora: «ahora escribiría con kanji»."),
      toEs("Si yo habría vivido en el siglo XIX, habría viajado en tren de vapor.", "Si yo hubiera vivido en el siglo XIX, habría viajado en tren de vapor.", "En la parte del «si» va el pluscuamperfecto de subjuntivo (hubiera vivido); el condicional perfecto (habría viajado) solo va en la consecuencia.", ["Si yo hubiera vivido en el siglo XIX, hubiera viajado en tren de vapor."], "Corrige la frase."),
      { type: "speak", text: "Si hubiera nacido en otra época, habría sido artesano y ahora viviría en un pueblo.", prompt: "Responde en voz alta: ¿cómo habría sido tu vida en otra época y cómo sería ahora?", explanation: "Combina las dos consecuencias: condicional perfecto para aquella vida (habría sido) y condicional simple para hoy (viviría)." },
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-elige-tiempo-condicional",
    "Elige y explica: ¿qué estructura necesita cada situación?",
    "Aprenderás a elegir entre si + presente, si + imperfecto de subjuntivo, si + pluscuamperfecto de subjuntivo y los condicionales mixtos según la situación.",
    "6 min",
    [
      sec(
        "Cuatro situaciones",
        [
          "Recuerda la regla: el tiempo detrás de «si» depende de lo real que sea la condición. Posible → si + presente (Si llueve, no salgo). Irreal o improbable ahora → si + imperfecto de subjuntivo + condicional (Si lloviera, no saldría). Imposible porque ya pasó → si + pluscuamperfecto de subjuntivo + condicional perfecto (Si hubiera llovido, no habría salido). Mixta → condición pasada y efecto actual (Si hubiera llovido, ahora el jardín estaría verde).",
          "¿Por qué? Cuanto más lejos de la realidad, más «atrás» va el verbo. Y una regla fija: detrás de este «si» nunca van ni el futuro ni el condicional.",
        ],
        [
          ["Si me llamas, te lo cuento.", "If you call me, I'll tell you. (posible)"],
          ["Si viviera en la costa, nadaría todos los días.", "If I lived on the coast, I'd swim every day. (irreal ahora)"],
          ["Si hubieras venido, te habrías divertido.", "If you had come, you'd have had fun. (ya pasó)"],
          ["Si hubiera llovido, ahora el jardín estaría verde.", "If it had rained, the garden would be green now. (mixta)"],
        ],
        [
          mc(
            "Ayer no llovió y hoy el jardín está seco: «Si ___, ahora el jardín estaría verde.»",
            ["hubiera llovido", "lloviera", "llueve", "habría llovido"],
            0,
            "Condicional mixto: condición pasada (ayer no llovió) → si hubiera llovido; consecuencia presente → estaría. «Lloviera» mira al presente, «llueve» es real y «habría llovido» no va tras si."
          ),
          mc(
            "No tienes coche, pero te gustaría: «Si ___ coche, iría al trabajo en veinte minutos.»",
            ["tuviera", "tengo", "tendría", "hubiera tenido"],
            0,
            "No tener coche es la realidad de ahora: irreal presente, si + imperfecto de subjuntivo (tuviera). «Tengo» la presentaría como posible, «tendría» nunca va tras si y «hubiera tenido» hablaría del pasado."
          ),
        ]
      ),
    ],
    [
      mc("Mañana puede que haga sol: «Si ___ sol, iremos a la playa.»", ["hace", "hiciera", "hubiera hecho", "haría"], 0, "Posible mañana: condición real, si + presente, hace. «Hiciera» y «hubiera hecho» son hipotéticos, y «haría» no va tras si."),
      mc("Hoy está nublado todo el día: «Si ___ sol, iríamos a la playa.»", ["hiciera", "hace", "hubiera hecho", "haga"], 0, "Hoy está nublado: irreal en el presente → si + imperfecto de subjuntivo, hiciera. «Hace» sería real, «hubiera hecho» se refiere al pasado y «haga» no va tras si."),
      mc("El verano pasado llovió mucho: «Si ___ más sol, habríamos ido más a la playa.»", ["hubiera hecho", "hiciera", "hace", "habría hecho"], 0, "El verano pasado ya pasó: irreal en el pasado → si + pluscuamperfecto de subjuntivo, hubiera hecho. «Hiciera» mira al presente, «hace» es real y «habría hecho» no va tras si."),
      fb("Completa.", "Si ___ la lotería el año pasado, ahora no trabajaría. (ganar, yo)", "hubiera ganado", "Mixta: el sorteo fue el año pasado (pluscuamperfecto de subjuntivo) y el efecto es de ahora (no trabajaría)."),
      fb("Completa.", "Si ___ la lotería, dejaría de trabajar. (ganar, yo)", "ganara", "Ganar la lotería es muy improbable y la consecuencia va en condicional: irreal presente, si + imperfecto de subjuntivo (ganara)."),
      fb("Completa.", "Si ___ la lotería este sábado, invito a todos. (ganar, yo)", "gano", "Este sábado, presentado como posible y con «invito» en presente: condición real, si + presente de indicativo (gano)."),
      toEs("If you had come yesterday, you would have met my brother.", "Si hubieras venido ayer, habrías conocido a mi hermano.", "Condición irreal en el pasado: «si hubieras venido» + «habrías conocido».", ["Si hubieras venido ayer, hubieras conocido a mi hermano."]),
      toEs("Si tengo dinero, me compro la moto.", "Si tuviera dinero, me compraría la moto.", "Para hacer la condición irreal en el presente, «si» pasa a imperfecto de subjuntivo (tuviera) y la consecuencia a condicional (me compraría).", ["Si tuviera dinero, me compraba la moto."], "Cambia a una hipótesis irreal sobre el presente (no tienes dinero)."),
      toEs("Si tuviera dinero, me compraría la moto.", "Si hubiera tenido dinero el año pasado, me habría comprado la moto.", "Al pasar la hipótesis al pasado, la condición va en pluscuamperfecto de subjuntivo (hubiera tenido) y la consecuencia en condicional perfecto (me habría comprado).", ["Si el año pasado hubiera tenido dinero, me habría comprado la moto.", "Si hubiera tenido dinero el año pasado, me hubiera comprado la moto."], "Pasa la frase al pasado: «el año pasado»."),
      toEs("Si haría buen tiempo mañana, iremos a la playa.", "Si hace buen tiempo mañana, iremos a la playa.", "Mañana es posible: condición real con si + presente (hace). El condicional (haría) nunca va detrás de «si».", ["Si mañana hace buen tiempo, iremos a la playa.", "Si hace buen tiempo mañana, vamos a ir a la playa."], "Corrige la frase."),
      toEs("Si me tocara la lotería el año pasado, ahora no trabajaría.", "Si me hubiera tocado la lotería el año pasado, ahora no trabajaría.", "«El año pasado» es un hecho ya imposible: la condición va en pluscuamperfecto de subjuntivo (me hubiera tocado). «Tocara» solo sirve para el presente o el futuro.", ["Si el año pasado me hubiera tocado la lotería, ahora no trabajaría."], "Corrige la frase."),
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
        [
          "Recuerda la regla: en el irreal del pasado solo cambia el auxiliar; el participio no varía nunca. Condición: hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran + participio. Consecuencia: habría, habrías, habría, habríamos, habríais, habrían + participio.",
          "¿Por qué? Haber lleva la persona y el tiempo, y el participio solo la acción. Por eso basta con aprender seis formas de cada auxiliar y los participios irregulares: hecho, dicho, visto, puesto, vuelto, abierto, escrito, roto.",
        ],
        [
          ["Si hubierais llegado antes, habríais visto el final.", "If you had arrived earlier, you would have seen the end. (vosotros)"],
          ["Si hubiéramos puesto la alarma, no nos habríamos dormido.", "If we had set the alarm, we wouldn't have overslept. (puesto: irregular)"],
          ["Si usted hubiera escrito antes, le habrían contestado.", "If you had written earlier, they would have answered you. (usted → 3.ª persona)"],
        ],
        [
          fb("Rápido.", "Si tú ___ la verdad, te habrían perdonado. (decir)", "hubieras dicho", "Segunda persona en la condición: hubieras + el participio irregular dicho."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si hubierais llegado antes, ___ el principio. (ver, vosotros)", "habríais visto", "Consecuencia con vosotros: habríais + visto (participio irregular de ver)."),
      fb("Rápido.", "Si ellos ___ más, habrían ganado. (entrenar)", "hubieran entrenado", "Ellos en la condición: hubieran + entrenado. «Habrían entrenado» no puede ir detrás de «si»."),
      fb("Rápido.", "Si hubiéramos sabido, ___ antes. (venir, nosotros)", "habríamos venido", "Nosotros en la consecuencia: habríamos (con tilde) + venido."),
      fb("Rápido.", "Si usted ___ el formulario, ya tendría la tarjeta. (rellenar)", "hubiera rellenado", "Usted usa la tercera persona: hubiera rellenado. La consecuencia es actual (ya tendría): es una mixta."),
      fb("Rápido.", "Si tú me lo hubieras pedido, yo te lo ___. (dar)", "habría dado", "La persona cambia entre las dos partes: tú en la condición, yo en la consecuencia (habría dado)."),
      fb("Rápido.", "Si no ___ tanto, no se habrían cansado. (correr, ellas)", "hubieran corrido", "Ellas en la condición: hubieran + corrido."),
      fb("Rápido.", "Si hubiera nevado, ___ las clases. (suspenderse)", "se habrían suspendido", "Pasiva con se: el verbo concuerda con «las clases» (plural) y el pronombre va delante del auxiliar: se habrían suspendido."),
      mc(
        "«Si ___ el móvil, te habríamos llamado.» (tener, nosotros)",
        ["hubiéramos tenido", "habríamos tenido", "tuviéramos tenido", "hubiéramos tenemos"],
        0,
        "Pluscuamperfecto de subjuntivo: hubiéramos + participio (tenido). «Habríamos tenido» no va tras si, y «tuviéramos tenido» y «hubiéramos tenemos» no son formas posibles."
      ),
      toEs("Si hubiera leído el contrato, no habría firmado.", "Si hubiéramos leído el contrato, no habríamos firmado.", "Con nosotros cambian los dos auxiliares: hubiéramos y habríamos. Los participios (leído, firmado) se quedan igual.", [], "Cambia el sujeto a «nosotros»."),
      toEs("Si tuvieras paciencia, lo entenderías.", "Si hubieras tenido paciencia, lo habrías entendido.", "Para llevar la hipótesis al pasado, cada verbo se convierte en auxiliar + participio: tuvieras → hubieras tenido, entenderías → habrías entendido.", ["Si hubieras tenido paciencia, lo hubieras entendido."], "Pasa la frase al pasado."),
      toEs("Si me lo habrías pedido, te habría ayudado.", "Si me lo hubieras pedido, te habría ayudado.", "En la parte de «si» va el pluscuamperfecto de subjuntivo (hubieras pedido); el condicional perfecto solo va en la consecuencia.", ["Si me lo hubieras pedido, te hubiera ayudado."], "Corrige la frase."),
      toEs("Si hubiéramos ponido la alarma, no nos habríamos dormido.", "Si hubiéramos puesto la alarma, no nos habríamos dormido.", "Poner tiene participio irregular: puesto. Lo mismo pasa con hacer (hecho), volver (vuelto) y abrir (abierto).", ["Si hubiéramos puesto el despertador, no nos habríamos dormido."], "Corrige la frase."),
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
        [
          "Recuerda la regla: una buena disculpa combina cuatro estructuras. 1) Reconocer el error: siento (no) haber + participio, porque el sujeto de sentir y de la acción es el mismo (siento no haber ido). 2) Arrepentimiento: ojalá + pluscuamperfecto de subjuntivo (ojalá hubiera ido). 3) Hipótesis: si hubiera sabido…, habría… 4) Propuesta: me encantaría que + imperfecto de subjuntivo (que nos viéramos).",
          "¿Por qué? El infinitivo compuesto (haber ido) sitúa la falta en el pasado sin cambiar de sujeto; en la propuesta, el condicional «me encantaría» arrastra el imperfecto de subjuntivo, y eso la hace más cortés.",
        ],
        [
          ["Siento no haber ido a tu cumpleaños.", "I'm sorry I didn't come to your birthday."],
          ["Siento haberte hablado así.", "I'm sorry I spoke to you like that. (sin «no»: lo que sí hice)"],
          ["Si hubiera sabido lo importante que era, habría cancelado el viaje.", "If I had known how important it was, I would have cancelled the trip."],
          ["Me encantaría que nos viéramos pronto.", "I'd love for us to see each other soon."],
        ],
        [
          fb("Paso 1.", "Siento no ___ antes de irme. (despedirme)", "haberme despedido", "Mismo sujeto (yo siento, yo no me despedí): infinitivo compuesto, con el pronombre pegado a haber: haberme despedido."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Ojalá ___ ido. (yo)", "hubiera", "Arrepentimiento por algo pasado: ojalá + pluscuamperfecto de subjuntivo (hubiera ido). Con «ojalá» nunca va «habría»."),
      fb("Paso 3.", "Si hubiera sabido lo importante que era, ___ la reunión. (cancelar)", "habría cancelado", "Consecuencia de una hipótesis pasada: condicional perfecto, habría cancelado."),
      fb("Paso 3.", "Si me lo ___ antes, habría cambiado mis planes. (decir, tú)", "hubieras dicho", "Condición irreal pasada con tú: hubieras + dicho (participio irregular)."),
      fb("Paso 4.", "Me encantaría que ___ juntos el domingo. (comer, nosotros)", "comiéramos", "Tras un condicional (me encantaría) y con otro sujeto, va el imperfecto de subjuntivo: comiéramos."),
      fb("Paso 4.", "Si te ___ bien, te invito a cenar el sábado. (venir)", "viene", "Propuesta real: si + presente de indicativo (si te viene bien). Aquí no hay hipótesis irreal."),
      toEs("I'm sorry I didn't call you.", "Siento no haberte llamado.", "Con el mismo sujeto, «sentir» + infinitivo compuesto habla de algo pasado: «no haberte llamado».", ["Siento no haberte llamado antes.", "Perdona por no haberte llamado.", "Lamento no haberte llamado."]),
      toEs("No te llamé el día de tu operación.", "Siento no haberte llamado el día de tu operación.", "Para disculparte por algo que no hiciste: siento + no + haber + participio. El pronombre te se pega a haber.", ["Lamento no haberte llamado el día de tu operación."], "Transforma el hecho en una disculpa con «siento no haber»."),
      toEs("Quiero que tomemos un café juntos.", "Me encantaría que tomáramos un café juntos.", "Con el condicional «me encantaría», la oración subordinada pasa a imperfecto de subjuntivo: tomemos → tomáramos. Suena más cortés.", ["Me encantaría que nos tomáramos un café juntos."], "Cambia la propuesta a una forma más cortés con «me encantaría que»."),
      toEs("Siento que no he ido a tu cumpleaños.", "Siento no haber ido a tu cumpleaños.", "Cuando quien siente y quien no fue son la misma persona, se usa el infinitivo compuesto (no haber ido), no «que» + verbo conjugado.", ["Siento no haber venido a tu cumpleaños.", "Lamento no haber ido a tu cumpleaños."], "Corrige la frase."),
      toEs("Me encantaría que nos veamos el sábado.", "Me encantaría que nos viéramos el sábado.", "Un condicional como «me encantaría» pide imperfecto de subjuntivo en la subordinada: viéramos. «Veamos» iría con «me encanta» o «quiero».", ["Me gustaría que nos viéramos el sábado."], "Corrige la frase."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2d-mezcla-hipotesis-completa",
    "Práctica mezclada: todas las hipótesis",
    "Practicarás el tiempo verbal tras si, ojalá y como si en situaciones reales, irreales del presente e irreales del pasado.",
    "7 min",
    [
      sec(
        "Un repaso completo",
        [
          "Recuerda la regla: si + presente (real); si + imperfecto de subjuntivo (irreal presente); si + pluscuamperfecto de subjuntivo (irreal pasado). Ojalá + imperfecto de subjuntivo es un deseo difícil sobre el presente y ojalá + pluscuamperfecto, un lamento sobre el pasado. «Como si» lleva siempre imperfecto o pluscuamperfecto de subjuntivo.",
          "¿Por qué? «Como si» compara con algo que no es verdad, así que nunca admite indicativo ni presente de subjuntivo. Elige imperfecto si lo imaginado ocurre a la vez (como si fuera el jefe) y pluscuamperfecto si es anterior (como si hubiera visto un fantasma).",
        ],
        [
          ["Ojalá lo hubiera sabido.", "I wish I had known. (lamento pasado)"],
          ["Ojalá tuviera más tiempo.", "I wish I had more time. (deseo sobre ahora)"],
          ["Está pálido, como si hubiera visto un fantasma.", "He's pale, as if he had seen a ghost. (algo anterior)"],
        ],
        [
          fb("Completa.", "Si ___ tiempo esta tarde, te llamo. (tener, yo)", "tengo", "Esta tarde es posible y la consecuencia está en presente: condición real, si + presente de indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ tiempo, estudiaría chino. (tener, yo)", "tuviera", "La consecuencia en condicional (estudiaría) marca irreal presente: si + imperfecto de subjuntivo."),
      fb("Completa.", "Si ___ tiempo el año pasado, habría estudiado chino. (tener, yo)", "hubiera tenido", "«El año pasado» y «habría estudiado»: irreal pasado, si + pluscuamperfecto de subjuntivo."),
      fb("Completa.", "Ojalá ___ tiempo para todo. (tener, yo)", "tuviera", "Deseo difícil sobre el presente: ojalá + imperfecto de subjuntivo. «Tenga» lo presentaría como más posible."),
      fb("Completa.", "Ojalá ___ más tiempo con mi abuelo. (pasar, yo)", "hubiera pasado", "Lamento sobre algo que ya no se puede cambiar: ojalá + pluscuamperfecto de subjuntivo."),
      fb("Completa.", "Habla de ese viaje como si ___ ayer. (ser)", "fuera", "«Como si» + imperfecto de subjuntivo: lo imaginado (que fue ayer) se compara con el momento en que habla."),
      fb("Completa.", "Habla de ese viaje como si ___ allí. (estar, él — pero nunca fue)", "hubiera estado", "Lo imaginado es anterior al momento de hablar: como si + pluscuamperfecto de subjuntivo."),
      toEs("If you had asked me, I would have said yes.", "Si me lo hubieras preguntado, habría dicho que sí.", "Condición irreal en el pasado: «si me lo hubieras preguntado» + «habría dicho».", ["Si me hubieras preguntado, habría dicho que sí.", "Si me lo hubieras preguntado, hubiera dicho que sí."]),
      toEs("Ojalá apruebe el examen.", "Ojalá hubiera aprobado el examen.", "El examen ya pasó y no aprobaste: el deseo se convierte en lamento, ojalá + pluscuamperfecto de subjuntivo.", [], "Cambia el deseo al pasado: el examen fue ayer y no aprobaste."),
      toEs("Si puedo, te ayudo con la mudanza.", "Si pudiera, te ayudaría con la mudanza.", "Si sabes que no puedes, la condición es irreal: si + imperfecto de subjuntivo (pudiera) y consecuencia en condicional (ayudaría).", [], "Cambia a una hipótesis irreal: sabes que no puedes."),
      toEs("Habla de París como si estuvo allí mil veces.", "Habla de París como si hubiera estado allí mil veces.", "«Como si» nunca va con indicativo. Lo imaginado (haber estado) es anterior al momento de hablar: pluscuamperfecto de subjuntivo.", ["Habla de París como si hubiera estado mil veces allí."], "Corrige la frase."),
      toEs("Ojalá tengo más vacaciones.", "Ojalá tuviera más vacaciones.", "«Ojalá» exige subjuntivo, nunca indicativo. Para un deseo difícil sobre el presente, imperfecto de subjuntivo (tuviera); «tenga» también es correcto si lo ves posible.", ["Ojalá tenga más vacaciones."], "Corrige la frase."),
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
        [
          "Recuerda la regla: con dijo que / contó que / explicó que, cada tiempo da un paso atrás: presente → imperfecto; indefinido y perfecto → pluscuamperfecto; futuro → condicional. «Estoy cansado» → Dijo que estaba cansado. «Iré mañana» → Dijo que iría al día siguiente.",
          "Por qué: tú cuentas desde tu ahora, y lo que la otra persona dijo ya quedó en el pasado. Cambian también las personas y los pronombres (te daré → me daría) y las referencias de tiempo (mañana → al día siguiente). El imperfecto y el pluscuamperfecto no cambian: ya están en el pasado.",
        ],
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
      toEs("«Estoy harta del ruido de la obra.»", "Dijo que estaba harta del ruido de la obra.", "Con «dijo que», el presente retrocede al imperfecto: estoy → estaba. Harta (femenino) concuerda con quien lo dijo.", [], "Pasa la frase al estilo indirecto: empieza por «Dijo que»."),
    ]
  ),
  L(
    "reported-speech-1",
    "b2d-circuito-marcadores-tiempo",
    "Circuito: hoy → aquel día, mañana → al día siguiente",
    "Aprende a cambiar las palabras de tiempo y lugar (hoy → ese día, mañana → al día siguiente, aquí → allí) al contar lo que alguien dijo.",
    "6 min",
    [
      sec(
        "Referencias que se mueven",
        [
          "Recuerda la regla: hoy → ese/aquel día; mañana → al día siguiente; ayer → el día anterior; ahora → entonces; aquí → allí; este → ese/aquel; esta noche → esa noche; la semana que viene → la semana siguiente.",
          "Por qué cambian: estas palabras se miden desde quien habla. Si lo cuentas otro día y en otro sitio, «mañana» ya no es tu mañana ni «aquí» es tu aquí. Si lo cuentas el mismo día y en el mismo lugar, puedes dejarlas: «Me ha dicho que hoy no viene».",
        ],
        [
          ["«Llegué ayer.» → Dijo que había llegado el día anterior.", "He said he had arrived the day before."],
        ],
        [
          fb("Estación 1.", "«Hoy no trabajo.» → Dijo que ___ no trabajaba.", "ese día", "En estilo indirecto pasado, «hoy» pasa a «ese día» (o «aquel día»)."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "«Mañana voy al médico.» → Dijo que ___ iba al médico.", "al día siguiente", "«Mañana» pasa a «al día siguiente»."),
      fb("Estación 1.", "«Ayer llovió.» → Dijo que ___ había llovido.", "el día anterior", "«Ayer» pasa a «el día anterior»."),
      fb("Estación 2.", "«Aquí se come muy bien.» → Dijo que ___ se comía muy bien.", "allí", "«Aquí» pasa a «allí», porque el que cuenta ya no está en ese lugar."),
      fb("Estación 2.", "«Ahora estoy ocupado.» → Dijo que ___ estaba ocupado.", "entonces", "«Ahora» pasa a «entonces» (o «en ese momento»)."),
      fb("Estación 3.", "«Este libro es mío.» → Dijo que ___ libro era suyo.", "ese", "Los demostrativos se alejan: «este» pasa a «ese» (o «aquel»)."),
      fb("Estación 3.", "«Volveré la semana que viene.» → Dijo que volvería la semana ___.", "siguiente", "«La semana que viene» pasa a «la semana siguiente»."),
      mc(
        "«Nos vemos mañana aquí.» → Dijo que nos veríamos ___.",
        ["al día siguiente allí", "mañana aquí", "ayer allí", "hoy aquí"],
        0,
        "En estilo indirecto pasado, mañana → al día siguiente y aquí → allí. Las otras opciones dejan sin cambiar los marcadores o los cambian en la dirección equivocada."
      ),
      toEs("«Me operaron ayer.»", "Dijo que lo habían operado el día anterior.", "Al contarlo otro día, el indefinido pasa a pluscuamperfecto (habían operado) y «ayer» a «el día anterior». El «me» de quien habla pasa a «lo» o «le».", ["Dijo que le habían operado el día anterior.", "Dijo que el día anterior lo habían operado.", "Dijo que el día anterior le habían operado."], "Pasa la frase al estilo indirecto: lo dijo un amigo hace una semana. Empieza por «Dijo que»."),
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
        [
          "Recuerda la regla: una orden contada se convierte en que + subjuntivo, porque ya no informa de un hecho sino de lo que alguien quiere que pase. Me dice que + presente de subjuntivo: «Ven» → Me dice que vaya. Me dijo / me pidió que + imperfecto de subjuntivo: «Ven» → Me dijo que fuera.",
          "Ojo con el contraste: «Me dijo que venía» (indicativo) informa de que él venía; «Me dijo que viniera» (subjuntivo) es una orden para mí. Y venir/ir, traer/llevar y los pronombres cambian según dónde está quien lo cuenta.",
        ],
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
      { ...fb("Pasado.", "«Traed algo de postre.» → Nos pidió que ___ algo de postre.", "lleváramos", "Traer → llevar desde otro lugar; si quien lo cuenta está donde se celebra, también «trajéramos»."), altAnswers: ["trajéramos"] },
      fb("Pasado.", "«Hazlo ahora.» → Me dijo que lo ___ en ese momento.", "hiciera", "Orden → imperfecto de subjuntivo (hiciera), y «ahora» pasa a «en ese momento»."),
      { ...fb("Presente.", "«Ven a cenar.» → Mi madre dice que ___ a cenar.", "vayas", "Con el verbo introductorio en presente (dice), la orden va en presente de subjuntivo; «ven» pasa a ir, desde la perspectiva de quien cuenta: vayas (o «vengas», si quien lo cuenta está en casa de su madre)."), altAnswers: ["vengas"] },
      fb("Presente.", "«No hagáis ruido.» → El vecino dice que no ___ ruido.", "hagáis", "Con «dice» (presente), la orden se reporta en presente de subjuntivo, sin retroceder: no hagáis."),
      toEs("La profesora nos dijo que nos callamos.", "La profesora nos dijo que nos calláramos.", "Era una orden («¡Callaos!»): en estilo indirecto en pasado va en imperfecto de subjuntivo, nos calláramos. «Nos callamos» (indicativo) contaría un hecho.", ["La profesora nos dijo que nos callásemos."], "Corrige la frase: era una orden de la profesora."),
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
        [
          "Recuerda la regla: decir, escribir o avisar tienen dos usos. Si informan de un hecho, la subordinada va en indicativo: «Vengo mañana» → Dijo que venía al día siguiente. Si transmiten una orden o petición, va en subjuntivo: «Ven mañana» → Dijo que viniera al día siguiente.",
          "Por qué: el subjuntivo marca lo que alguien quiere que pase, no lo que pasa. Por eso el modo es la única pista de lo que se dijo: «Me dijo que lo llamaba» (él me iba a llamar) frente a «Me dijo que lo llamara» (yo tenía que llamarlo).",
        ],
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
      { ...fb("Elige.", "«Compro yo el pan.» → Dijo que ___ él el pan.", "compraba", "«Compro yo el pan» es información: se reporta en indicativo, compraba."), altAnswers: ["compraría"] },
      fb("Elige.", "«Compra tú el pan.» → Me dijo que ___ yo el pan.", "comprara", "«Compra tú» es una orden: se reporta en imperfecto de subjuntivo, comprara."),
      fb("Elige.", "«Estudio en la biblioteca.» → Dijo que ___ en la biblioteca.", "estudiaba", "Información → indicativo, con el presente pasado a imperfecto: estudiaba."),
      fb("Elige.", "«Estudia en la biblioteca.» → Me dijo que ___ en la biblioteca.", "estudiara", "Orden → imperfecto de subjuntivo: estudiara."),
      toEs("«Esperad fuera.»", "Nos dijo que esperáramos fuera.", "Es una orden: «decir que» con valor de orden exige subjuntivo, y tras dijo, imperfecto: esperáramos.", ["Nos dijo que esperásemos fuera.", "Nos dijo que esperáramos afuera."], "Transforma la orden en estilo indirecto: empieza por «Nos dijo que»."),
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
        [
          "Recuerda la regla: una crónica cuenta en pasado lo que dijo alguien. Los verbos que informan (anunció, explicó, añadió, aseguró, reconoció) llevan indicativo con retroceso: presente → imperfecto, indefinido → pluscuamperfecto, futuro → condicional. Los que piden (pidió, rogó) llevan imperfecto de subjuntivo. Y las referencias se alejan: hoy → ese día, mañana → al día siguiente, el año pasado → el año anterior.",
          "Las palabras originales de la alcaldesa: «Hoy presentamos el nuevo plan de transporte. El año pasado aumentó el tráfico un diez por ciento. Mañana empezarán las obras en el centro. Pido a los vecinos que tengan paciencia.»",
        ],
        [
          ["La alcaldesa anunció que ese día presentaban el nuevo plan.", "The mayor announced that they were presenting the new plan that day. (presentamos → presentaban, hoy → ese día)"],
        ],
        [
          fb("Otra frase de la rueda de prensa.", "«Necesitamos más autobuses nocturnos.» → Reconoció que ___ más autobuses nocturnos.", "necesitaban", "Reconocer informa, así que va en indicativo, y el presente retrocede al imperfecto: necesitamos → necesitaban."),
        ]
      ),
    ],
    [
      fb("La crónica.", "Explicó que el año anterior ___ el tráfico un diez por ciento. (aumentar)", "había aumentado", "El indefinido (aumentó) retrocede al pluscuamperfecto, porque el aumento es anterior al momento en que ella habló."),
      fb("La crónica.", "Añadió que al día siguiente ___ las obras en el centro. (empezar)", "empezarían", "Futuro → condicional: empezarán → empezarían, el futuro visto desde el pasado."),
      fb("La crónica.", "Pidió a los vecinos que ___ paciencia. (tener)", "tuvieran", "Pedir lleva subjuntivo: «pido que tengan» → «pidió que tuvieran» (imperfecto, porque pidió es pasado)."),
      fb("La crónica.", "Aseguró que las obras no ___ más de dos meses. (durar)", "durarían", "Asegurar informa → indicativo; «no durarán» → no durarían (futuro → condicional)."),
      fb("La crónica.", "Reconoció que el plan ___ polémico. (ser — «es polémico»)", "era", "Reconocer informa → indicativo con retroceso: es → era."),
      mc(
        "«Hemos escuchado a los vecinos.» → Afirmó que ___ a los vecinos.",
        ["habían escuchado", "han escuchado", "escucharon", "escucharían"],
        0,
        "Con afirmó (pasado), el perfecto «hemos escuchado» pasa a pluscuamperfecto: habían escuchado. «Han escuchado» no retrocede, «escucharon» pierde la anterioridad y «escucharían» es futuro del pasado."
      ),
      toEs("La alcaldesa dijo que las obras empezarían mañana.", "La alcaldesa dijo que las obras empezarían al día siguiente.", "La crónica se publica días después: «mañana» ya no es el mañana del lector, así que pasa a «al día siguiente». El condicional (empezarían) ya estaba bien.", ["La alcaldesa dijo que las obras comenzarían al día siguiente.", "La alcaldesa dijo que al día siguiente empezarían las obras."], "Corrige la crónica: se publica una semana después."),
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
        [
          "Recuerda la regla: preguntas de sí o no → si: «¿Tienes hambre?» → Me preguntó si tenía hambre. Con interrogativo: «¿Dónde vives?» → Me preguntó dónde vivía. Los tiempos retroceden como en cualquier estilo indirecto.",
          "Por qué la tilde se mantiene: qué, quién, dónde, cuánto, por qué siguen siendo interrogativos aunque la frase ya no lleve signos de interrogación. Si, en cambio, no lleva tilde: no es interrogativo, solo significa «whether». En registro cuidado no se añade «que» (en el habla es frecuente «me preguntó que dónde vivía»).",
        ],
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
      fb("Indirecta.", "«¿Vendrás a la boda?» → Me preguntó si ___ a la boda.", "iría", "Futuro → condicional; venir suele pasar a ir (iría), aunque «vendría» también vale según dónde esté quien lo cuenta."),
      fb("Indirecta.", "«¿Por qué lloras?» → Me preguntó por qué ___.", "lloraba", "Presente → imperfecto: lloras → lloraba."),
      fb("Indirecta.", "«¿Qué has comprado?» → Me preguntó qué ___.", "había comprado", "Perfecto → pluscuamperfecto: has comprado → había comprado."),
      mc(
        "«¿Cuántos años tienes?» → Me preguntó ___.",
        ["cuántos años tenía", "que cuántos años tengo", "si cuántos años tenía", "cuantos años tenía yo tienes"],
        0,
        "La pregunta indirecta conserva la palabra interrogativa (cuántos) y el presente pasa a imperfecto: tenía. «Que cuántos… tengo» no retrocede el tiempo, «si cuántos» junta dos formas de pregunta y la última mezcla personas."
      ),
      toEs("«¿Hablas inglés?»", "Me preguntó si hablaba inglés.", "Una pregunta de sí o no se transmite con «si» (sin tilde), y el presente retrocede: hablas → hablaba.", ["Me preguntó si yo hablaba inglés."], "Transforma la pregunta en estilo indirecto: empieza por «Me preguntó»."),
    ]
  ),
  L(
    "reported-speech-2",
    "b2d-corrige-estilo-indirecto",
    "Corrige el párrafo: un resumen mal contado",
    "Corrige errores frecuentes del estilo indirecto: tiempos que no retroceden, referencias de tiempo, «que si» y mandatos en indicativo.",
    "6 min",
    [
      sec(
        "El resumen",
        [
          "Recuerda la regla: si lo cuentas tiempo después, los tiempos retroceden (está → estaba, vendrá → vendría) y las referencias se alejan (mañana → al día siguiente). Las peticiones van en imperfecto de subjuntivo (me pidió que lo llamara). Las preguntas de sí o no, con si, sin «que» delante en un texto cuidado; las demás, con el interrogativo con tilde.",
          "El resumen: «Mi hermano me dijo que está muy ocupado y que vendrá mañana. También me preguntó que si necesitaba algo. Me pidió que le llamo antes de salir.» Cuatro errores.",
        ],
        [
          ["Me dijo que tenía prisa.", "He told me he was in a hurry. (tengo → tenía)"],
          ["Me pidió que lo esperara.", "She asked me to wait for her. (petición → imperfecto de subjuntivo)"],
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
      toEs("Me dijo que está muy ocupado.", "Me dijo que estaba muy ocupado.", "Si lo dijo en el pasado y ya no es vigente, el presente pasa a imperfecto: «estaba».", [], "Corrige la frase: lo dijo la semana pasada."),
      toEs("Me dijo que vendrá mañana.", "Me dijo que vendría al día siguiente.", "Dos cambios: futuro → condicional (vendría) y mañana → al día siguiente, porque ese «mañana» ya pasó.", ["Me dijo que iría al día siguiente.", "Me dijo que al día siguiente vendría."], "Corrige la frase: lo dijo hace un mes."),
      toEs("Me preguntó que si necesitaba algo.", "Me preguntó si necesitaba algo.", "En registro cuidado, la pregunta indirecta va con «si» solo: «me preguntó si…». «Que si» es normal en la conversación, pero no en un texto escrito.", [], "Corrige la frase para un texto escrito."),
      toEs("Me pidió que le llamo antes de salir.", "Me pidió que lo llamara antes de salir.", "Pedir que + imperfecto de subjuntivo: llamara. «Llamo» es presente de indicativo e informaría de un hecho.", ["Me pidió que le llamara antes de salir.", "Me pidió que lo llamase antes de salir."], "Corrige la frase."),
      toEs("Me preguntó donde estuviera.", "Me preguntó dónde estaba.", "La pregunta indirecta va en indicativo, con retroceso (estoy → estaba): preguntar no pide subjuntivo. Además, dónde conserva la tilde.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: para contar una conversación, los verbos que informan (me contó, me dijo, le expliqué) llevan indicativo con retroceso: está → estaba, ha cambiado → había cambiado, iré → iría. Los que piden (me pidió, le rogué) llevan imperfecto de subjuntivo. Las preguntas van con si o con el interrogativo con tilde.",
          "Un ejemplo: Ayer hablé con mi amiga Leire. Me contó que había cambiado de trabajo y que estaba muy contenta. Me preguntó si iría a su fiesta. Me pidió que llevara postre. Ahora cuenta tú una conversación tuya.",
        ],
        [
          ["Me contó que había cambiado de trabajo.", "She told me she had changed jobs. (he cambiado → había cambiado)"],
          ["Le pedí que no llegara tarde.", "I asked her not to be late. (petición → imperfecto de subjuntivo)"],
        ],
        [
          fb("Tu conversación.", "Mi vecino me contó que ___ un perro. (adoptar)", "había adoptado", "«He adoptado un perro» → había adoptado: el perfecto retrocede al pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Tu conversación.", "…y que ___ muy contenta. (estar)", "estaba", "«Estoy muy contenta» → estaba: el presente retrocede al imperfecto tras contó."),
      fb("Tu conversación.", "Me preguntó si ___ a su fiesta. (ir, yo)", "iría", "«¿Irás a mi fiesta?» → si iría: pregunta de sí o no con si, y futuro → condicional."),
      { ...fb("Tu conversación.", "Me pidió que ___ postre. (llevar)", "llevara", "Pedir es un verbo de petición: que + imperfecto de subjuntivo, llevara (o trajera, si lo cuentas desde casa de Leire)."), altAnswers: ["trajera"] },
      fb("Tu conversación.", "Le dije que no ___ seguro. (estar, yo)", "estaba", "«No estoy seguro» → no estaba: presente → imperfecto."),
      fb("Tu conversación.", "Le prometí que la ___ el viernes. (llamar)", "llamaría", "«Te llamaré el viernes» → la llamaría: futuro → condicional, y te → la."),
      toEs("«¡Estoy embarazada!»", "Mi amiga me dijo que estaba embarazada.", "Con «dijo», el presente retrocede al imperfecto: estoy → estaba. Los signos de exclamación desaparecen en el estilo indirecto.", ["Mi amiga me contó que estaba embarazada."], "Transforma la noticia de tu amiga en estilo indirecto: empieza por «Mi amiga me dijo que»."),
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
        [
          "Recuerda la regla (tabla mental): presente → imperfecto; imperfecto → imperfecto; indefinido → pluscuamperfecto; perfecto → pluscuamperfecto; futuro → condicional; condicional → condicional; presente de subjuntivo → imperfecto de subjuntivo.",
          "Por qué algunos no cambian: el retroceso consiste en dar un paso hacia el pasado. El imperfecto, el pluscuamperfecto y el condicional ya miran desde el pasado, así que no tienen adónde retroceder y se quedan igual.",
        ],
        [
          ["«Quiero que vengas.» → Dijo que quería que viniera.", "She said she wanted me to come."],
        ],
        [
          fb("Rápido.", "«Trabajo aquí.» → Dijo que ___ allí.", "trabajaba", "Presente → imperfecto: trabajo → trabajaba."),
        ]
      ),
    ],
    [
      fb("Rápido.", "«Vivía en el centro.» → Dijo que ___ en el centro.", "vivía", "El imperfecto no cambia en estilo indirecto: vivía → vivía. Ya mira desde el pasado."),
      fb("Rápido.", "«Trabajé aquí.» → Dijo que ___ allí.", "había trabajado", "Pretérito → pluscuamperfecto: trabajé → había trabajado."),
      fb("Rápido.", "«Trabajaré aquí.» → Dijo que ___ allí.", "trabajaría", "Futuro → condicional: trabajaré → trabajaría."),
      fb("Rápido.", "«Me quedaría un día más.» → Dijo que se ___ un día más.", "quedaría", "El condicional no cambia en estilo indirecto: quedaría → quedaría. Solo cambia el pronombre: me → se."),
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
        [
          "Recuerda la regla: si el mensaje es reciente y sigue vigente, usa «dice» o «ha dicho» y mantén los tiempos (Ha dicho que llega el viernes). Si lo cuentas mucho después con «dijo», retrocede: presente → imperfecto, futuro → condicional, he + participio → había + participio, orden → imperfecto de subjuntivo.",
          "¿Por qué? El retroceso señala que el mensaje pertenece a otro momento. Si lo que dijo todavía es actual, retroceder no es obligatorio; si ya ha pasado tiempo, mantener el presente sonaría a noticia de hoy.",
        ],
        [
          ["Ha dicho que llega el viernes.", "He's said he's arriving on Friday. (reciente)"],
          ["Dijo que llegaría aquel viernes.", "He said he would arrive that Friday. (lejano)"],
          ["Ha dicho que la esperes. / Dijo que la esperaras.", "She's said you should wait for her. / She said you should wait for her."],
        ],
        [
          fb("Cuéntalo hoy mismo.", "«Estoy en el atasco.» → Ha dicho que ___ en el atasco.", "está", "Con «ha dicho» (pasado reciente) y la situación aún vigente, el verbo no cambia: «está»."),
        ]
      ),
    ],
    [
      fb("Cuéntalo un mes después.", "«Estoy en el atasco.» → Dijo que ___ en el atasco.", "estaba", "Con «dijo» en pasado, el presente pasa a imperfecto: «estaba»."),
      fb("Cuéntalo hoy mismo.", "«Te llamaré luego.» → Ha dicho que te ___ luego.", "llamará", "Con «ha dicho» y la promesa aún vigente, el futuro se mantiene: «llamará»."),
      fb("Cuéntalo un mes después.", "«Te llamaré luego.» → Dijo que te ___ más tarde.", "llamaría", "Con «dijo» en pasado, el futuro pasa a condicional: «llamaría»."),
      fb("Cuéntalo hoy mismo.", "«Compra leche.» → Ha dicho que ___ leche.", "compres", "Una orden en estilo indirecto va en subjuntivo; con «ha dicho», presente: «compres»."),
      fb("Cuéntalo un mes después.", "«Compra leche.» → Dijo que ___ leche.", "compraras", "Una orden en estilo indirecto va en subjuntivo; con «dijo», imperfecto: «compraras»."),
      fb("Cuéntalo hoy mismo.", "«He perdido el tren.» → Dice que ___ el tren.", "ha perdido", "Con «dice» en presente, los tiempos no cambian: «ha perdido»."),
      mc(
        "Mensaje de hace una hora: «Llego tarde.» → «Mamá ___ que llega tarde.»",
        ["ha dicho", "había dicho", "diría", "dijera"],
        0,
        "Si el mensaje es reciente, se reporta con pretérito perfecto y sin cambiar los tiempos: ha dicho que llega tarde. «Había dicho» y «diría» sitúan el mensaje en un pasado lejano, y «dijera» es subjuntivo."
      ),
      toEs("She has said she's coming tomorrow.", "Ha dicho que viene mañana.", "Con «ha dicho» y un plan aún vigente, el verbo no cambia: «viene mañana».", ["Ha dicho que vendrá mañana."]),
      toEs("Ha dicho que llega a las nueve.", "Dijo que llegaba a las nueve.", "Contado mucho después, «ha dicho» pasa a «dijo» y el presente retrocede a imperfecto (llegaba); también vale el condicional (llegaría).", ["Dijo que llegaría a las nueve."], "Cambia el mensaje a un mes después, empezando por «Dijo»."),
      toEs("Mamá ha dicho que compres pan.", "Mamá dijo que compraras pan.", "La orden contada mucho después retrocede a imperfecto de subjuntivo: compres → compraras.", [], "Cambia el mensaje a un mes después, empezando por «Mamá dijo»."),
      toEs("Hace un año Raquel dijo que se muda a Chile.", "Hace un año Raquel dijo que se mudaba a Chile.", "Un mensaje de hace un año se cuenta con retroceso: el presente pasa a imperfecto (se mudaba) o a condicional (se mudaría).", ["Hace un año Raquel dijo que se mudaría a Chile."], "Corrige la frase."),
      toEs("Hace un rato Luis ha dicho que llamara al fontanero.", "Hace un rato Luis ha dicho que llames al fontanero.", "Con «ha dicho» (mensaje reciente) la orden va en presente de subjuntivo: llames. El imperfecto (llamara) corresponde a «dijo».", ["Hace un rato Luis ha dicho que llames al plomero."], "Corrige la frase."),
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
        [
          "Recuerda la regla: cada verbo introductor resume la intención del hablante y trae su construcción. Asegurar, admitir, reconocer, advertir (de) y quejarse de van con indicativo, porque transmiten hechos. Prometer va con condicional (un compromiso futuro visto desde el pasado). Sugerir y proponer piden subjuntivo, porque son propuestas. Negar que suele llevar subjuntivo.",
          "¿Por qué? El modo sigue al significado: si el verbo presenta algo como verdadero, indicativo; si lo presenta como propuesta o lo rechaza, subjuntivo. Y con el verbo en pasado, todo retrocede igual que con «dijo».",
        ],
        [
          ["Admitió que se había equivocado.", "He admitted he had made a mistake. (hecho → indicativo)"],
          ["Negó que lo hubiera robado.", "He denied having stolen it. (negar → subjuntivo)"],
          ["Nos sugirió que saliéramos antes.", "She suggested we leave earlier. (propuesta → subjuntivo)"],
        ],
        [
          { ...fb("Estación 1: resume con un verbo introductor.", "«Lo haré sin falta.» → ___ que lo haría sin falta.", "Prometió", "«Prometer» resume un compromiso sobre el futuro: «prometió que lo haría» (también vale «aseguró»)."), altAnswers: ["Aseguró", "Me prometió", "Nos prometió"] },
        ]
      ),
    ],
    [
      { ...fb("Estación 1: resume con un verbo introductor.", "«Sí, me equivoqué.» → ___ que se había equivocado.", "Admitió", "«Admitir» (o «reconocer») resume el reconocimiento de un error: «admitió que se había equivocado»."), altAnswers: ["Reconoció", "Confesó"] },
      fb("Estación 2: resume con un verbo introductor.", "«Cuidado, el suelo resbala.» → Nos ___ de que el suelo resbalaba.", "advirtió", "«Advertir de que» resume un aviso de peligro y va con indicativo: «nos advirtió de que resbalaba»."),
      fb("Estación 2.", "«Yo no rompí la ventana.» → Negó que ___ la ventana.", "hubiera roto", "«Negar que» exige subjuntivo; la acción es anterior, así que va en pluscuamperfecto: «hubiera roto»."),
      { ...fb("Estación 3: resume con un verbo introductor.", "«¿Y si vamos en tren?» → ___ que fuéramos en tren.", "Sugirió", "«Sugerir que» (o «proponer que») + subjuntivo resume una propuesta: «sugirió que fuéramos»."), altAnswers: ["Propuso", "Nos sugirió", "Nos propuso"] },
      fb("Estación 3.", "«Siempre llegáis tarde.» → Se quejó de que siempre ___ tarde.", "llegábamos", "«Quejarse de que» presenta un hecho: indicativo, y con el verbo en pasado el presente «llegáis» pasa a imperfecto, «llegábamos»."),
      { ...fb("Estación 4.", "«Estoy seguro de que ganaremos.» → Aseguró que ___.", "ganarían", "Con «aseguró» en pasado, el futuro «ganaremos» pasa a condicional: «ganarían»."), altAnswers: ["ganaríamos"] },
      mc(
        "«No, yo no dije eso.» → ___ haberlo dicho.",
        ["Negó", "Admitió", "Prometió", "Sugirió"],
        0,
        "«Yo no dije eso» es rechazar algo: negó haberlo dicho. Admitir es lo contrario, prometer es comprometerse y sugerir es proponer."
      ),
      toEs("He promised he would call me.", "Prometió que me llamaría.", "En estilo indirecto con «prometió», el futuro pasa a condicional: «llamaría».", ["Me prometió que me llamaría."]),
      toEs("«No he tocado tu ordenador.»", "Negó que hubiera tocado mi ordenador.", "Con «negar que» la acción rechazada va en subjuntivo; como es anterior, pluscuamperfecto de subjuntivo. «Tu» pasa a «mi» porque el ordenador es mío.", ["Negó haber tocado mi ordenador.", "Negó que hubiera tocado mi computadora.", "Negó haber tocado mi computadora."], "Transforma la frase en estilo indirecto con «negó»."),
      toEs("«Te devolveré el dinero el lunes.»", "Me prometió que me devolvería el dinero el lunes.", "Prometer + condicional: devolveré → devolvería. «Te» pasa a «me» porque ahora lo cuento yo.", ["Me prometió que me devolvería el dinero el lunes siguiente.", "Prometió que me devolvería el dinero el lunes."], "Transforma la frase en estilo indirecto con «me prometió»."),
      toEs("Sugirió que íbamos en tren.", "Sugirió que fuéramos en tren.", "Una propuesta lleva subjuntivo: fuéramos. Con indicativo (íbamos) solo contaría lo que hacíamos.", ["Nos sugirió que fuéramos en tren."], "Corrige la frase: era una propuesta."),
      toEs("Se quejó que nadie la ayudaba.", "Se quejó de que nadie la ayudaba.", "Quejarse se construye con «de»: quejarse de algo → se quejó de que… Omitir la preposición es un error frecuente (queísmo).", [], "Corrige la frase."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2d-cuento-telefono-roto",
    "Cuento con huecos: el teléfono escacharrado",
    "Practicarás el estilo indirecto en una cadena de rumores: el retroceso de los tiempos, las preguntas con si, los ruegos y el cambio de pronombres y marcadores de tiempo.",
    "7 min",
    [
      sec(
        "El rumor",
        [
          "Recuerda la regla: al contar lo que otro dijo con un verbo en pasado, «voy a» pasa a «iba a», el presente a imperfecto, lo ya hecho a pluscuamperfecto, las preguntas de sí/no van con «si» y los ruegos con «que» + imperfecto de subjuntivo.",
          "Lee el cuento: «Ana: —Me voy a mudar a Valencia. Luis contó a Eva que Ana se iba a mudar a Valencia. Eva le dijo a Pablo que Ana se había mudado ya. Pablo le preguntó a Ana si era verdad que vivía en Valencia. Ana se rio y le dijo que todavía no había hecho ni las maletas, y le pidió que no difundiera rumores.»",
        ],
        [
          ["Marta contó que su jefe se iba a jubilar.", "Marta said her boss was going to retire. (va a → iba a)"],
          ["Me pidió que no se lo contara a nadie.", "She asked me not to tell anyone. (ruego → subjuntivo)"],
        ],
        [
          fb("Completa.", "Rosa contó que su hermano ___ a casarse en mayo. (ir)", "iba", "«Va a casarse» se cuenta en pasado como «iba a casarse»: el presente de ir retrocede a imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Luis contó que Ana se ___ a mudar a Valencia. (ir)", "iba", "«Me voy a mudar» pasa a «se iba a mudar»: voy a → iba a."),
      fb("Completa.", "Eva le dijo a Pablo que Ana ya se ___. (mudar)", "había mudado", "Eva cree que la mudanza ya ocurrió antes de hablar: pluscuamperfecto, se había mudado."),
      fb("Completa.", "Pablo le preguntó a Ana ___ era verdad. (si/que)", "si", "Una pregunta de sí o no se introduce con «si», sin tilde."),
      fb("Completa.", "…que ___ en Valencia. (vivir)", "vivía", "«¿Vives en Valencia?» → el presente retrocede a imperfecto: vivía."),
      fb("Completa.", "Ana le dijo que todavía no ___ ni las maletas. (hacer)", "había hecho", "«No he hecho» (pretérito perfecto) pasa a pluscuamperfecto, con el participio irregular hecho."),
      fb("Completa.", "Ana le pidió que no ___ rumores. (difundir)", "difundiera", "Un ruego contado con «pidió» va en imperfecto de subjuntivo: difundiera."),
      mc(
        "«Me voy a mudar.» → Dijo que ___.",
        ["se iba a mudar", "se va a mudar ayer", "se fuera a mudar", "se irá a mudar"],
        0,
        "En estilo indirecto pasado, «voy a» pasa a «iba a»: se iba a mudar. «Se va a mudar ayer» mezcla tiempos, «se fuera» es subjuntivo y «se irá» no retrocede."
      ),
      toEs("She asked me if it was true.", "Me preguntó si era verdad.", "Pregunta de sí o no → «si»; el presente pasa a imperfecto: «era».", ["Me preguntó si era cierto."]),
      toEs("Pablo a Ana: «¿Te has mudado ya?»", "Pablo le preguntó a Ana si ya se había mudado.", "Pregunta de sí/no → «si»; el pretérito perfecto (te has mudado) pasa a pluscuamperfecto y el pronombre te pasa a se.", ["Pablo le preguntó a Ana si se había mudado ya."], "Transforma la pregunta en estilo indirecto, empezando por «Pablo le preguntó a Ana»."),
      toEs("Ana: «No difundáis rumores.»", "Ana nos pidió que no difundiéramos rumores.", "El ruego negativo pasa a «que no» + imperfecto de subjuntivo; vosotros → nosotros porque ahora cuento yo, que estaba entre ellos.", [], "Transforma la orden en estilo indirecto, empezando por «Ana nos pidió»."),
      toEs("Eva le contó a Pablo que su prima ya se ha casado.", "Eva le contó a Pablo que su prima ya se había casado.", "Con «contó» en pasado, lo que ya había ocurrido cuando habló va en pluscuamperfecto: se había casado.", [], "Corrige la frase."),
      toEs("Marcos me dijo que todavía no encontró piso.", "Marcos me dijo que todavía no había encontrado piso.", "«Todavía no» marca algo que no había ocurrido antes del momento en que habló: pluscuamperfecto (no había encontrado), no pretérito.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: al escuchar una frase en estilo indirecto, fíjate en dos cosas. Primero, el verbo introductor: dijo / contó (información → indicativo), preguntó (si o palabra interrogativa con tilde), pidió (subjuntivo). Segundo, el tiempo que viene después: imperfecto, pluscuamperfecto (había + participio), condicional o imperfecto de subjuntivo.",
          "¿Por qué? Muchas de estas formas suenan parecido (había / habían, viniera / vendría). Saber qué tiempo pide el verbo introductor te ayuda a oír y a escribir la forma correcta, con su h y sus tildes.",
        ],
        [
          ["Me preguntó si había comido.", "He asked me if I had eaten."],
          ["Nos pidió que habláramos más bajo.", "She asked us to speak more quietly. (pidió → subjuntivo)"],
        ],
        [
          wo("Nos dijo que volvería al día siguiente.", "Dijo + futuro de la cita → condicional (volvería), con tilde en la í.", "He told us he would come back the next day."),
        ]
      ),
    ],
    [
      wo("Me preguntó dónde había aparcado.", "Pregunta con palabra interrogativa: «dónde» lleva tilde y el verbo va en pluscuamperfecto (había, con h).", "She asked me where I had parked."),
      wo("Les pidió que no hicieran ruido.", "Pedir que + imperfecto de subjuntivo: hicieran, con h.", "He asked them not to make noise."),
      wo("Reconoció que no había leído el informe.", "Reconocer transmite un hecho: indicativo, en pluscuamperfecto porque la lectura era anterior.", "She admitted she hadn't read the report."),
      wo("Me advirtió que la carretera estaba cortada.", "Advertir de un hecho: indicativo (estaba).", "He warned me that the road was closed."),
      toEs("They told us they had already eaten.", "Nos dijeron que ya habían comido.", "En estilo indirecto, el pretérito perfecto pasa a pluscuamperfecto: «habían comido».", ["Nos contaron que ya habían comido."]),
      toEs("He asked me what time it was.", "Me preguntó qué hora era.", "En la pregunta indirecta se mantiene el interrogativo con tilde («qué») y el presente pasa a imperfecto."),
      toEs("«¿Has cerrado la puerta?»", "Me preguntó si había cerrado la puerta.", "Pregunta de sí/no: «si» sin tilde, y el pretérito perfecto pasa a pluscuamperfecto (había cerrado).", [], "Transforma la pregunta en estilo indirecto, empezando por «Me preguntó»."),
      toEs("Nos dijo que volverá al día siguiente.", "Nos dijo que volvería al día siguiente.", "«Al día siguiente» se mide desde aquel pasado, así que el futuro retrocede a condicional: volvería.", [], "Corrige la frase."),
      toEs("Les pidió que no ponían la música alta.", "Les pidió que no pusieran la música alta.", "Pedir que + imperfecto de subjuntivo: poner → pusieran. «Ponían» es indicativo y no transmite la petición.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: el acta cuenta en pasado lo que se dijo. Informar de que, manifestar y concluir van con indicativo (con el tiempo retrocedido); proponer y pedir, con imperfecto de subjuntivo; preguntar, con «si» o con la palabra interrogativa.",
          "Las intervenciones: Directora: «Las ventas han bajado.» Juan: «Propongo que abramos una tienda online.» Sara: «No estoy de acuerdo; es demasiado caro.» Directora: «Lo decidiremos el mes que viene.»",
        ],
        [
          ["La directora informó de que las ventas habían bajado.", "The director reported that sales had fallen. (han bajado → habían bajado)"],
          ["Juan propuso que abriéramos una tienda online.", "Juan proposed that we open an online shop. (abramos → abriéramos)"],
        ],
        [
          fb("Acta.", "El jefe de ventas informó de que los pedidos ___ un veinte por ciento. (aumentar)", "habían aumentado", "«Han aumentado» pasa a pluscuamperfecto en el acta: habían aumentado. Informar de que va con indicativo."),
        ]
      ),
    ],
    [
      fb("Acta.", "La directora informó de que las ventas ___. (bajar)", "habían bajado", "El pretérito perfecto de la intervención (han bajado) pasa a pluscuamperfecto en el acta."),
      fb("Acta.", "Juan propuso que ___ una tienda online. (abrir, nosotros)", "abriéramos", "Proponer que + subjuntivo; con «propuso» en pasado, imperfecto de subjuntivo."),
      fb("Acta.", "Sara manifestó que no ___ de acuerdo. (estar)", "estaba", "Manifestar transmite una opinión: indicativo, y el presente pasa a imperfecto."),
      fb("Acta.", "…porque ___ demasiado caro. (ser)", "era", "El presente «es» retrocede a imperfecto: era."),
      fb("Acta.", "La directora concluyó que lo ___ el mes siguiente. (decidir, ellos)", "decidirían", "El futuro (decidiremos) pasa a condicional; «el mes que viene» pasa a «el mes siguiente»."),
      fb("Acta.", "Juan preguntó cuánto ___ la web. (costar, condicional)", "costaría", "Pregunta abierta: se conserva «cuánto» y el futuro de la pregunta pasa a condicional."),
      toEs("Sara said she didn't agree.", "Sara dijo que no estaba de acuerdo.", "En estilo indirecto con «dijo», el presente pasa a imperfecto: «estaba»."),
      toEs("Tesorero: «No hay dinero para el viaje.»", "El tesorero informó de que no había dinero para el viaje.", "Informar de que + indicativo; el presente impersonal «hay» pasa a «había».", ["El tesorero informó que no había dinero para el viaje.", "El tesorero manifestó que no había dinero para el viaje."], "Transforma la intervención en una línea del acta con «informó de que»."),
      toEs("Luisa: «¿Cuándo se publicarán los resultados?»", "Luisa preguntó cuándo se publicarían los resultados.", "Pregunta abierta: se conserva «cuándo» con tilde y el futuro pasa a condicional (se publicarían).", [], "Transforma la intervención en una línea del acta con «preguntó»."),
      toEs("Sara propuso que hacíamos una encuesta.", "Sara propuso que hiciéramos una encuesta.", "Proponer expresa una propuesta: imperfecto de subjuntivo (hiciéramos), no indicativo.", [], "Corrige la frase."),
      toEs("Sara manifestó que no esté de acuerdo.", "Sara manifestó que no estaba de acuerdo.", "Manifestar presenta una opinión como hecho: indicativo, y en pasado, imperfecto (estaba).", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: una orden o petición contada en pasado va con «que» + imperfecto de subjuntivo (me dijo que terminara, me pidió que le mandara). Una pregunta de sí/no va con «si» solo; una pregunta abierta conserva la palabra interrogativa con tilde y no lleva «si».",
          "¿Por qué? Con indicativo (me dijo que termino) la frase dejaría de ser una orden y pasaría a ser información. En la lengua oral se oye «preguntó que cuándo», pero en un texto escrito se quita ese «que».",
          "Lee la nota y busca los fallos: «El jefe me dijo que termino el informe hoy. Me pidió que le mandaba una copia. Después me preguntó que cuándo me iba de vacaciones y si que tenía planes.»",
        ],
        [
          ["El jefe me dijo que terminara el informe ese día.", "The boss told me to finish the report that day."],
          ["Me preguntó si tenía hambre y qué quería cenar.", "He asked me if I was hungry and what I wanted for dinner. (si / qué, sin «que»)"],
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
      toEs("Corrige: «El jefe me dijo que termino el informe hoy.»", "El jefe me dijo que terminara el informe ese día.", "Una orden transmitida va en imperfecto de subjuntivo (terminara); contado más tarde, «hoy» pasa a «ese día».", ["El jefe me dijo que terminara el informe hoy."]),
      toEs("Corrige: «Me pidió que le mandaba una copia.»", "Me pidió que le mandara una copia.", "«Pedir que» exige subjuntivo; en pasado, imperfecto: «mandara», no «mandaba»."),
      toEs("Pule para un texto escrito: «Me preguntó que cuándo me iba de vacaciones.»", "Me preguntó cuándo me iba de vacaciones.", "«Me preguntó que cuándo…» es correcto y muy frecuente en la lengua oral; en un texto escrito o formal se prefiere quitar el «que».", [], "Corrige la frase para un texto escrito."),
      toEs("Corrige: «Me preguntó si que tenía planes.»", "Me preguntó si tenía planes.", "En la pregunta indirecta va «si» solo, sin «que»: «me preguntó si…»."),
      toEs("Corrige: «Nos dijo que no fumamos en la sala.» (era una orden)", "Nos dijo que no fumáramos en la sala.", "Si «decir» transmite una orden, va con subjuntivo: «no fumáramos»."),
      ms(
        "¿Qué frases transmiten una orden?",
        ["Me dijo que me callara.", "Nos pidió que esperáramos.", "Me dijo que se callaba.", "Nos contó que esperaba."],
        [0, 1],
        "Una orden reportada va con subjuntivo: me dijo que me callara, nos pidió que esperáramos. «Me dijo que se callaba» y «Nos contó que esperaba» usan indicativo: informan de un hecho, no de una orden."
      ),
      toEs("«Traed los libros mañana.»", "La profesora nos dijo que trajéramos los libros al día siguiente.", "La orden (traed) pasa a «que» + imperfecto de subjuntivo (trajéramos, irregular) y «mañana» a «al día siguiente».", ["La profesora nos dijo que lleváramos los libros al día siguiente.", "La profesora nos dijo que al día siguiente trajéramos los libros.", "La profesora nos dijo que trajéramos los libros el día siguiente."], "Transforma la orden en estilo indirecto, empezando por «La profesora nos dijo»."),
      toEs("«¿A qué hora cierra la farmacia?»", "Me preguntó a qué hora cerraba la farmacia.", "Pregunta abierta: se conserva «a qué hora», sin «si» ni «que», y el presente pasa a imperfecto.", [], "Transforma la pregunta en estilo indirecto, empezando por «Me preguntó»."),
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
        [
          "Recuerda la regla: al contar una entrevista mezclas tres cosas. Afirmaciones → dijo / aseguró que + indicativo retrocedido; preguntas → preguntó si / preguntó por qué, cuándo… + indicativo; peticiones → pidió que + imperfecto de subjuntivo.",
          "¿Por qué? Cada acto de habla tiene su forma: el verbo introductor y el modo le dicen al oyente si fue un dato, una pregunta o una petición.",
          "La entrevistadora dijo: «¿Por qué quiere trabajar aquí? ¿Ha trabajado antes en equipo? Envíenos sus referencias. Le llamaremos la semana que viene.»",
        ],
        [
          ["Me preguntó qué sabía de la empresa.", "She asked me what I knew about the company. (sé → sabía)"],
          ["Me pidió que le explicara mis puntos débiles.", "She asked me to explain my weak points. (petición → subjuntivo)"],
        ],
        [
          fb("Cuéntalo.", "Me preguntó dónde ___ ahora. (vivir, yo)", "vivía", "Pregunta abierta: se conserva «dónde» y el presente pasa a imperfecto."),
        ]
      ),
    ],
    [
      fb("Cuéntalo.", "Me preguntó si ___ antes en equipo. (trabajar)", "había trabajado", "«¿Ha trabajado…?» → pregunta con «si» y pluscuamperfecto (había trabajado)."),
      fb("Cuéntalo.", "Me pidió que les ___ mis referencias. (enviar)", "enviara", "«Envíenos» es una petición: imperfecto de subjuntivo, enviara."),
      fb("Cuéntalo.", "Dijo que me ___ la semana siguiente. (llamar, ellos)", "llamarían", "«Le llamaremos» → futuro que pasa a condicional: llamarían."),
      fb("Cuéntalo.", "Le contesté que siempre ___ en equipo. (haber trabajado)", "había trabajado", "Mi respuesta «siempre he trabajado en equipo» pasa a pluscuamperfecto."),
      fb("Cuéntalo.", "Le aseguré que ___ disponibilidad inmediata. (tener, yo)", "tenía", "Asegurar + indicativo; el presente «tengo» pasa a imperfecto."),
      mc(
        "«¿Cuándo puede empezar?» → Me preguntó cuándo ___ empezar.",
        ["podía", "puedo", "pudiera", "pueda"],
        0,
        "En la pregunta indirecta pasada, el presente pasa a imperfecto de indicativo: podía. «Puedo» no retrocede, y «pudiera» y «pueda» son subjuntivo, que no se usa en preguntas indirectas."
      ),
      toEs("She told me they would call me.", "Me dijo que me llamarían.", "En estilo indirecto con «dijo», el futuro pasa a condicional: «llamarían».", ["Me dijo que me iban a llamar."]),
      toEs("«¿Por qué quiere trabajar aquí?»", "Me preguntó por qué quería trabajar allí.", "Pregunta abierta: se conserva «por qué» (separado y con tilde), quiere → quería y aquí → allí.", [], "Transforma la pregunta en estilo indirecto, empezando por «Me preguntó»."),
      toEs("Me pidió que le envío mis referencias.", "Me pidió que le enviara mis referencias.", "«Pedir que» exige subjuntivo, y con «pidió», imperfecto de subjuntivo: enviara.", ["Me pidió que les enviara mis referencias."], "Corrige la frase."),
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
        "La idea: ser clasifica, estar describe un estado",
        [
          "Recuerda la regla: con ser, el adjetivo dice cómo es alguien o algo por naturaleza (lo clasifica); con estar, dice en qué estado se encuentra ahora o cómo lo percibimos en este momento.",
          "Por eso algunos adjetivos cambian de significado: ser listo (inteligente) / estar listo (preparado); ser rico (tener dinero) / estar rico (saber bien); ser malo (mala persona, mala calidad) / estar malo (enfermo); ser aburrido (aburrir a otros) / estar aburrido (sentir aburrimiento). Verde, orgulloso, despierto y atento funcionan igual: ser = rasgo, estar = estado.",
        ],
        [
          ["Mi hermano es muy listo.", "My brother is very clever. (ser listo: un rasgo)"],
          ["¿Estás listo? Nos vamos.", "Are you ready? We're leaving. (estar listo: un estado)"],
          ["Mi abuelo está malo y no sale de casa.", "My grandfather is ill and doesn't go out. (estar malo = enfermo)"],
          ["Esa serie es aburridísima.", "That series is really boring. (ser aburrido: aburre a quien la ve)"],
        ],
        [
          fb("Completa con ser o estar.", "Este gazpacho ___ riquísimo. (delicioso)", "está", "Hablamos del sabor de este gazpacho, el que estamos probando: estar rico = saber bien. «Es rico» se dice de una persona con dinero."),
          mc(
            "«Mi sobrina ___ muy despierta: lo entiende todo a la primera.»",
            ["es", "está", "hay", "sea"],
            0,
            "«Lo entiende todo a la primera» describe su carácter: ser despierto = espabilado, rápido de mente. «Está despierta» solo diría que no duerme."
          ),
        ]
      ),
    ],
    [
      fb("Completa con ser o estar.", "Su familia ___ muy rica; tienen tres casas.", "es", "«Ser rico» = tener dinero, una característica; «estar rico» se dice de la comida sabrosa."),
      fb("Completa con ser o estar.", "No voy a trabajar; ___ malo desde ayer.", "estoy", "«Estar malo» = estar enfermo; «ser malo» = ser mala persona o de mala calidad."),
      fb("Completa con ser o estar.", "Esa película ___ mala; no la veas.", "es", "Hablamos de la calidad de la película, un rasgo suyo → ser mala. Una película no puede «estar mala» (enferma)."),
      fb("Completa con ser o estar.", "El profesor ___ aburrido; nadie atiende en clase.", "es", "«Ser aburrido» = aburrir a los demás, una característica del profesor."),
      fb("Completa con ser o estar.", "Los alumnos ___ aburridos; miran por la ventana.", "están", "«Estar aburrido» = sentir aburrimiento en ese momento."),
      fb("Completa con ser o estar.", "Los plátanos todavía ___ verdes; no los comas.", "están", "«Estar verde» = no estar maduro; «ser verde» sería el color."),
      mc(
        "«Son las seis de la mañana y mi abuelo ya ___ despierto.»",
        ["está", "es", "hay", "sea"],
        0,
        "«Estar despierto» describe un estado: no estar dormido. «Es despierto» describiría su carácter (listo), «hay» no lleva sujeto así y «sea» es subjuntivo sin motivo."
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
        [
          "Recuerda la regla: hay presenta algo que el oyente todavía no tiene identificado (¿existe?); estar sitúa algo que ya está identificado (¿dónde está?).",
          "Por eso hay va con un/una/unos, números, mucho/poco, alguno/ningún o sin artículo (hay un banco, hay tres farmacias, no hay leche), y estar va con el/la, posesivos, este/ese y nombres propios (el banco está en la esquina, mi farmacia está cerrada, Pedro está fuera). Hay es impersonal: siempre singular (hay, había, hubo, habrá), también con plurales.",
        ],
        [
          ["Hay una farmacia cerca.", "There's a pharmacy nearby. (algo nuevo → hay)"],
          ["La farmacia está al lado del banco.", "The pharmacy is next to the bank. (ya sabemos cuál → está)"],
          ["En el pueblo no había ningún cajero.", "There was no cash machine in the village. (ausencia → haber, en singular)"],
          ["¿Dónde están mis gafas?", "Where are my glasses? (algo concreto, en plural → están)"],
        ],
        [
          fb("Estación 1: completa con haber o estar.", "¿___ un supermercado por aquí?", "Hay", "Preguntamos si existe un supermercado que aún no identificamos (un) → hay. «¿Está un supermercado?» no es posible: estar necesita algo ya conocido."),
          mc(
            "«Mañana ___ huelga de taxis, así que salid antes.»",
            ["habrá", "estará", "habrán", "será"],
            0,
            "Presentamos algo nuevo (huelga, sin artículo) → haber, en futuro: habrá. «Habrán» es incorrecto porque haber impersonal no tiene plural, y estar necesitaría un sujeto concreto (la huelga)."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1: completa con haber o estar.", "El supermercado ___ al final de la calle.", "está", "Para ubicar algo ya conocido (el supermercado) se usa estar: está al final de la calle."),
      fb("Estación 2: completa con haber o estar.", "En mi clase ___ veinte alumnos.", "hay", "Con números y cantidades se usa hay: hay veinte alumnos."),
      fb("Estación 2: completa con estar o haber.", "Mis compañeros ___ en la cafetería.", "están", "Para ubicar personas conocidas (mis compañeros) se usa estar."),
      fb("Estación 3: completa con haber o estar.", "No ___ leche en la nevera.", "hay", "Para expresar existencia o ausencia sin artículo definido se usa hay: no hay leche."),
      fb("Estación 3: completa con haber o estar.", "La leche ___ en la nevera, en la puerta.", "está", "Para ubicar algo conocido (la leche) se usa estar."),
      { ...fb("Estación 4: completa con haber o estar en pasado.", "Ayer ___ mucha gente en el concierto.", "hubo", "Haber en pasado: hubo (o «había», si describes la escena), siempre singular."), altAnswers: ["había"] },
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
        [
          "Recuerda la regla: para decir dónde (o cuándo) tiene lugar un evento se usa ser; para decir dónde se encuentra una persona, un objeto o un edificio se usa estar.",
          "¿Por qué? Un evento no «se encuentra» en un sitio: ocurre allí. Ser aquí equivale a «tener lugar» (fiesta, reunión, examen, concierto, boda, clase). Truco: si puedes decir «tiene lugar», usa ser; si puedes decir «se encuentra», usa estar.",
        ],
        [
          ["La reunión es en la sala 3.", "The meeting is in room 3. (tiene lugar → ser)"],
          ["El director está en la sala 3.", "The director is in room 3. (se encuentra → estar)"],
          ["La boda fue en un pueblo de Asturias.", "The wedding was in a village in Asturias. (evento pasado → fue)"],
          ["La iglesia está en la plaza.", "The church is on the square. (un edificio no ocurre → está)"],
        ],
        [
          mc(
            "«El examen ___ en el aula magna.»",
            ["es", "está", "hay", "estará"],
            0,
            "Para el lugar de un evento se usa ser: el examen es en el aula magna. «Está» se usa para ubicar objetos o personas, «hay» no lleva sujeto definido y «estará» tiene el mismo problema que está."
          ),
          fb("Elige.", "El mercadillo de antigüedades ___ los domingos en la plaza mayor. (ser/estar)", "es", "El mercadillo aquí es una actividad que tiene lugar los domingos → ser. Si habláramos del puesto o del edificio del mercado, diríamos «está»."),
        ]
      ),
    ],
    [
      fb("Elige.", "El concierto ___ en el parque. (ser/estar)", "es", "El concierto tiene lugar en el parque → ser. «Está» solo serviría para algo que se encuentra allí, como el escenario o los músicos."),
      fb("Elige.", "Los músicos ya ___ en el parque. (ser/estar)", "están", "Los músicos son personas que se encuentran en un lugar → estar. Ser solo localiza eventos."),
      fb("Elige.", "La cena de Navidad ___ en casa de mi tía. (ser/estar)", "es", "La cena de Navidad es una celebración: tiene lugar en casa de mi tía → ser."),
      fb("Elige.", "Mi tía ___ en la cocina. (ser/estar)", "está", "Una persona se encuentra en un lugar → estar."),
      { ...fb("Elige.", "¿Dónde ___ la conferencia mañana? (ser/estar, futuro)", "será", "La conferencia es un evento → ser, aquí en futuro (será o va a ser). «Estará» trataría la conferencia como un objeto."), altAnswers: ["va a ser", "es"] },
      fb("Elige.", "¿Dónde ___ mis gafas? (ser/estar)", "están", "Unas gafas son un objeto: se encuentran en un sitio → estar, en plural."),
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
        [
          "Recuerda la regla: al hablar de cómo te sientes, ser describe tu forma de ser (soy tranquila, mi jefe es exigente), estar describe cómo te encuentras ahora o últimamente (estoy nerviosa, el trabajo está peor), y haber presenta algo que existe sin identificarlo (hay días en los que…). El lugar o la hora de un evento, como una reunión o una sesión, va con ser.",
          "Lee lo que cuenta Marta en su primera sesión y completa después su relato: «Normalmente soy una persona tranquila, pero últimamente estoy muy nerviosa. Hay días en los que no puedo dormir. Mi jefe es muy exigente y el trabajo está cada vez peor. La próxima reunión es el lunes y ya estoy preocupada.»",
        ],
        [
          ["Normalmente soy tranquila, pero estoy nerviosa.", "I'm usually calm, but I'm nervous. (carácter → soy; estado → estoy)"],
          ["Hay noches en las que me despierto a las tres.", "There are nights when I wake up at three. (hay, sin artículo definido)"],
        ],
        [
          fb("Completa.", "Mi pareja ___ una persona muy optimista, y eso me ayuda. (ser/estar)", "es", "Ser optimista describe su carácter, cómo es siempre → ser. Con estar diríamos que solo hoy se siente así."),
        ]
      ),
    ],
    [
      fb("Completa.", "…pero últimamente ___ muy nerviosa. (ser/estar)", "estoy", "«Últimamente» marca un estado de estos días → estar nerviosa. «Soy nerviosa» describiría su carácter de siempre."),
      fb("Completa.", "___ días en los que no puedo dormir. (haber)", "Hay", "Presenta algo que existe sin artículo definido (días) → hay, siempre en singular."),
      fb("Completa.", "Mi jefe ___ muy exigente. (ser/estar)", "es", "Exigente es un rasgo de su carácter, no un estado del momento → ser."),
      fb("Completa.", "…y el trabajo ___ cada vez peor. (ser/estar)", "está", "«Cada vez peor» describe una situación que cambia → estar. Ser presentaría el trabajo como malo por naturaleza."),
      fb("Completa.", "La próxima reunión ___ el lunes. (ser/estar)", "es", "La reunión es un evento: su fecha se da con ser (tiene lugar el lunes)."),
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
        [
          "Recuerda las reglas antes de corregir: un edificio o un objeto se sitúa con estar (el hotel está en el centro); hay solo presenta algo sin artículo definido (hay una piscina, no «hay la piscina»); el estado en que encuentras algo o el sabor de lo que comes van con estar (la habitación estaba limpia, el desayuno estaba rico); haber impersonal va siempre en singular (hubo problemas).",
          "Ser y estar con personas pueden convivir con matices: ser describe el carácter (era muy simpática) y estar el comportamiento en una ocasión (estuvo muy simpática con nosotros). Ahora lee la reseña: «El hotel es en el centro. Hay la piscina en la azotea. La habitación era muy limpia y el desayuno fue rico. La recepcionista estaba muy simpática.» Hay varios errores; uno es discutible.",
        ],
        [
          ["El hotel está en el centro.", "The hotel is in the centre. (un edificio se sitúa con estar)"],
          ["Hay una piscina en la azotea.", "There's a pool on the roof. (algo nuevo, con «una» → hay)"],
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
      toEs("El museo es en el centro.", "El museo está en el centro.", "Un museo, como un hotel, es un edificio: para su ubicación se usa «estar». Ser solo sitúa eventos (la exposición es en el museo).", undefined, "Corrige la frase."),
      toEs("Hay la piscina en la azotea.", "La piscina está en la azotea.", "Con artículo definido («la piscina») se usa «estar» para la ubicación, no «hay».", ["Hay una piscina en la azotea."], "Corrige la frase."),
      toEs("La habitación era muy limpia.", "La habitación estaba muy limpia.", "Al valorar cómo encontraste la habitación se usa «estar limpia»; «era limpia» presenta la limpieza como cualidad habitual y suena menos natural aquí.", undefined, "Corrige la frase."),
      toEs("El desayuno fue rico.", "El desayuno estaba rico.", "Para el sabor de una comida se usa «estar rico», no «ser rico».", ["El desayuno estaba muy rico.", "El desayuno estuvo rico.", "El desayuno estuvo muy rico."], "Corrige la frase."),
      toEs("Hubieron muchos problemas con el wifi.", "Hubo muchos problemas con el wifi.", "«Haber» impersonal va siempre en singular: «hubo», nunca «hubieron».", undefined, "Corrige la frase."),
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
        [
          "Recuerda la regla para hablar de ti: ser para lo que te define (carácter, origen, profesión) y para la fecha o el lugar de un evento (mi cumpleaños es en mayo); estar para cómo te encuentras hoy o estos días y para dónde está algo concreto (el mercado está a cinco minutos); hay para presentar algo de tu entorno que el otro no conoce (hay un mercado).",
          "Las palabras de tiempo ayudan: normalmente, siempre, de carácter → ser; hoy, ahora, esta semana, últimamente → estar. Ejemplo de presentación: Soy una persona curiosa y un poco impaciente. Hoy estoy de buen humor porque es viernes. En mi barrio hay un mercado precioso, que está a cinco minutos de mi casa.",
        ],
        [
          ["Soy de Bilbao, pero ahora estoy en Madrid por trabajo.", "I'm from Bilbao, but now I'm in Madrid for work. (origen → soy; ubicación actual → estoy)"],
          ["Hoy estoy de buen humor.", "Today I'm in a good mood. (estado de hoy)"],
          ["En mi calle hay dos panaderías.", "There are two bakeries on my street. (presentar algo nuevo → hay)"],
        ],
        [
          fb("Tú.", "Normalmente ___ bastante paciente, pero hoy no aguanto nada. (ser/estar)", "soy", "«Normalmente» señala un rasgo de tu carácter → ser. «Hoy no aguanto nada» habla del estado de hoy, que iría con estar."),
        ]
      ),
    ],
    [
      fb("Tú.", "Hoy ___ muy contento porque he aprobado el examen. (ser/estar)", "estoy", "Un estado provocado por algo de hoy (he aprobado) → estar. «Soy contento» no se usa: contento es siempre un estado."),
      fb("Tú.", "En mi barrio ___ un cine antiguo precioso. (haber)", "hay", "Presentas algo que el otro no conoce, con «un» → hay, nunca «está un cine»."),
      fb("Tú.", "El cine ___ al lado de la estación. (ser/estar)", "está", "Ahora el cine ya es conocido (el cine) y lo sitúas → estar."),
      fb("Tú.", "Mi cumpleaños ___ en mayo. (ser/estar)", "es", "Un cumpleaños (la celebración, la fecha) es un evento: su fecha se da con ser."),
      fb("Tú.", "Esta semana ___ muy ocupado. (ser/estar)", "estoy", "«Esta semana» marca un estado temporal → estar ocupado."),
      toEs("I'm a calm person, but today I'm stressed.", "Soy una persona tranquila, pero hoy estoy estresado.", "«Ser tranquilo» es el carácter; «estar estresado» es el estado de hoy.", ["Soy una persona tranquila, pero hoy estoy estresada."]),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2d-ronda-ser-estar-haber",
    "Ronda rápida: ser, estar o haber",
    "Practicarás en una ronda rápida la elección de ser, estar o haber (existencia, lugar, eventos, profesión, material, estados) en frases para completar y traducciones breves.",
    "5 min",
    [
      sec(
        "Preguntas rápidas",
        [
          "Recuerda la regla: ¿existe algo nuevo? → haber (hay). ¿Dónde está algo o alguien conocido? → estar. ¿Dónde o cuándo es un evento? → ser. ¿Identidad, profesión, carácter, material, hora? → ser. ¿Estado o resultado? → estar.",
          "¿Por qué? Elegir rápido es hacer siempre la misma pregunta: ¿qué es, cómo o dónde está, o existe? Ojo con las trampas: un horario habitual («abierto de nueve a nueve») sigue siendo un estado, y «de guardia» es una situación, no una profesión.",
        ],
        [
          ["La fiesta es en el jardín y la comida está en la cocina.", "The party is in the garden and the food is in the kitchen."],
          ["Mi hermana es enfermera y hoy está de guardia.", "My sister is a nurse and she's on call today. (profesión / situación)"],
        ],
        [
          fb("Rápido.", "El partido ___ en el campo municipal.", "es", "Para decir dónde tiene lugar un evento se usa «ser»: el partido es en el campo municipal."),
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
        ["es", "está", "hay", "son"],
        0,
        "La hora se expresa con ser y en singular cuando preguntamos: ¿Qué hora es? «Está» y «hay» no se usan para la hora, y «son» solo aparece en la respuesta con un plural (son las tres)."
      ),
      toEs("Hay una cafetería en la estación.", "La cafetería está en la estación.", "Al pasar de «una cafetería» (nueva) a «la cafetería» (conocida), hay se convierte en está.", [], "Sustituye «una cafetería» por «la cafetería»."),
      toEs("La tienda está abierta.", "Cuando llegué, la tienda estaba abierta.", "Abierto sigue siendo un estado en pasado: estar en imperfecto (estaba), porque describe cómo la encontré.", ["Cuando llegué la tienda estaba abierta."], "Pasa la frase al pasado empezando por «Cuando llegué»."),
      toEs("El concierto está en el auditorio.", "El concierto es en el auditorio.", "Un concierto es un evento: el lugar donde tiene lugar va con ser.", [], "Corrige la frase."),
      toEs("Esta mesa está de madera.", "Esta mesa es de madera.", "El material se expresa con ser de, porque dice qué es la mesa.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: ser + participio es la voz pasiva y cuenta la acción (El puente fue construido en 1920). Estar + participio describe el estado que queda (El puente está construido con piedra). El participio concuerda siempre con el sujeto.",
          "¿Por qué? Una misma acción tiene dos momentos: cuando se hace (ser) y lo que queda después (estar). En una cadena: Los obreros pintaron la valla → La valla fue pintada por los obreros → La valla ya está pintada.",
        ],
        [
          ["La tienda fue cerrada por la policía.", "The shop was closed by the police. (acción)"],
          ["La tienda está cerrada.", "The shop is closed. (resultado)"],
          ["Las cartas fueron enviadas ayer y ya están recibidas.", "The letters were sent yesterday and have already been received."],
        ],
        [
          fb("Acción.", "El cuadro ___ pintado en 1890. (ser, indefinido)", "fue", "Una fecha concreta indica la acción de pintar: ser en pretérito + participio."),
        ]
      ),
    ],
    [
      fb("Resultado.", "El cuadro ___ muy bien conservado. (estar, presente)", "está", "«Bien conservado» describe cómo se encuentra hoy el cuadro: estado, estar + participio."),
      fb("Acción.", "Los ladrones ___ detenidos ayer. (ser, indefinido)", "fueron", "«Ayer» sitúa la acción de detener: pasiva con ser en pretérito, en plural por «los ladrones»."),
      fb("Resultado.", "Los ladrones ___ detenidos en comisaría. (estar, presente)", "están", "Ahora se encuentran detenidos: estado resultante, estar + participio."),
      fb("Acción.", "La carta ___ escrita por el rey. (ser, indefinido)", "fue", "Con agente (por el rey) se cuenta quién hizo la acción: ser + participio."),
      fb("Resultado.", "La carta ___ escrita en latín. (estar, presente)", "está", "La lengua en que está escrita es una característica del resultado: estar + participio."),
      mc(
        "«Cuando llegamos, la cena ya ___ preparada.»",
        ["estaba", "era", "fue", "había"],
        0,
        "El resultado de una acción, visto en un momento del pasado, se expresa con estar: la cena ya estaba preparada. «Era» y «fue» expresarían la acción, y «había» necesitaría «sido» («había sido preparada») y hablaría de la acción, no del resultado."
      ),
      toEs("The museum was opened in 1995.", "El museo fue inaugurado en 1995.", "La voz pasiva de una acción se forma con «ser» + participio: «fue inaugurado».", ["El museo se inauguró en 1995.", "El museo fue abierto en 1995."]),
      toEs("Los obreros pintaron la valla ayer.", "La valla fue pintada ayer por los obreros.", "Pasiva: el objeto (la valla) pasa a sujeto, ser + participio concordado en femenino (pintada) y el agente con «por».", ["La valla fue pintada por los obreros ayer.", "Ayer la valla fue pintada por los obreros."], "Transforma la frase en pasiva con ser."),
      toEs("La valla fue pintada ayer por los obreros.", "La valla ya está pintada.", "Para lo que queda hoy, el resultado, se usa estar + participio: ya está pintada.", [], "Transforma la frase para describir el resultado de hoy: «La valla ya…»."),
      toEs("Las camas ya son hechas.", "Las camas ya están hechas.", "«Ya» señala el resultado de hacer las camas: estar + participio (están hechas).", [], "Corrige la frase."),
      toEs("Los ladrones están detenidos ayer por la tarde.", "Los ladrones fueron detenidos ayer por la tarde.", "Con un momento concreto del pasado se cuenta la acción: pasiva con ser en pretérito (fueron detenidos).", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: en un retrato, ser da lo que define a la persona (aspecto, profesión, carácter, origen) y estar, cómo se encuentra ahora (agotada, nerviosa, segura de algo) y dónde está. Hay presenta algo nuevo en la escena y ser sitúa los eventos.",
          "¿Por qué? Un buen retrato combina los dos planos: quién es alguien y cómo está hoy. «Estar seguro de» es un estado de certeza; «ser una persona segura», un rasgo.",
          "«Marta es alta y morena. Es arquitecta y es muy perfeccionista. Esta semana está agotada porque hay un concurso importante. El concurso es el viernes en el ayuntamiento. Marta está segura de que va a ganar.»",
        ],
        [
          ["Marta está segura de que va a ganar.", "Marta is sure she's going to win. (estado de certeza)"],
          ["Mi abuelo es de Galicia, pero ahora está en Madrid.", "My grandfather is from Galicia, but now he's in Madrid. (origen / ubicación)"],
        ],
        [
          fb("Completa.", "Marta ___ alta y morena. (ser/estar)", "es", "El aspecto físico que define a Marta va con ser."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ arquitecta. (ser/estar)", "Es", "La profesión va con ser y sin artículo."),
      fb("Completa.", "Esta semana ___ agotada. (ser/estar)", "está", "«Esta semana» marca un estado temporal: estar."),
      fb("Completa.", "…porque ___ un concurso importante. (haber)", "hay", "Un concurso aparece por primera vez: hay."),
      fb("Completa.", "El concurso ___ el viernes. (ser/estar)", "es", "El concurso es un evento: su fecha y su lugar van con ser."),
      fb("Completa.", "Marta ___ segura de que va a ganar. (ser/estar)", "está", "«Estar seguro de que» expresa la certeza del momento."),
      mc(
        "«Marta ___ una persona segura de sí misma.»",
        ["es", "está", "hay", "son"],
        0,
        "Ser + sustantivo (una persona) describe identidad: Marta es una persona segura. Estar no va con sustantivos así, «hay» no lleva sujeto y «son» no concuerda con Marta."
      ),
      toEs("She is tall, but today she looks tired.", "Es alta, pero hoy está cansada.", "«Ser alta» describe una característica; «estar cansada» describe el estado de hoy.", ["Es alta, pero hoy parece cansada."]),
      toEs("Hoy Luis está muy tranquilo.", "Luis es una persona muy tranquila.", "Para hablar del carácter, no del estado de hoy, se usa ser; con un sustantivo (una persona) solo es posible ser.", ["Luis es una persona tranquila."], "Cambia la frase para hablar del carácter de Luis: «Luis… una persona…»."),
      toEs("El concurso está el viernes en el ayuntamiento.", "El concurso es el viernes en el ayuntamiento.", "Un concurso es un evento: su fecha y su lugar van con ser, no con estar.", [], "Corrige la frase."),
      toEs("Marta es segura de que va a ganar.", "Marta está segura de que va a ganar.", "La certeza sobre algo concreto es un estado: estar seguro de. «Ser seguro» describe a una persona o una cosa fiable.", [], "Corrige la frase."),
      { type: "speak", prompt: "Describe en voz alta a un amigo: cómo es y cómo está hoy.", text: "Mi amigo Pablo es alto y muy simpático, pero hoy está cansado.", explanation: "Rasgos (alto, simpático) con ser; el estado de hoy (cansado) con estar." },
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
        [
          "Recuerda la regla: la pista está en lo que sigue al verbo. Un evento → ser (la reunión es en…); un sabor o un estado → estar (está buenísimo, está muy bien); algo que existe o no existe → haber, siempre en singular (hay, había, hubo); un rasgo → ser.",
          "¿Por qué? Al escuchar, «es», «está» y «hay» se distinguen bien, pero en pasado hay que elegir entre hubo (un suceso: hubo un accidente) y había (una descripción: había mucha gente).",
        ],
        [
          ["La boda es en una finca a las seis.", "The wedding is at an estate at six. (evento → ser)"],
          ["Anoche hubo una tormenta y había agua por todas partes.", "Last night there was a storm and there was water everywhere. (suceso / descripción)"],
        ],
        [
          wo("La reunión es en la tercera planta.", "La reunión es un evento: el lugar donde tiene lugar va con ser.", "The meeting is on the third floor."),
        ]
      ),
    ],
    [
      wo("Este pescado está buenísimo.", "El sabor de un plato concreto va con estar.", "This fish is delicious."),
      wo("No hay nadie en la oficina.", "Con «nadie» se niega la existencia: haber (no hay).", "There's nobody in the office."),
      wo("Mi abuela está muy bien para su edad.", "«Bien» describe un estado (salud): estar.", "My grandmother is very well for her age."),
      wo("Ese chico es muy listo para su edad.", "Ser listo = inteligente, una cualidad.", "That boy is very clever for his age."),
      toEs("There was a lot of traffic yesterday.", "Ayer hubo mucho tráfico.", "«Haber» impersonal va en singular; para un hecho pasado concreto, indefinido: «hubo».", ["Ayer había mucho tráfico.", "Hubo mucho tráfico ayer."]),
      toEs("Where is the party being held?", "¿Dónde es la fiesta?", "Para preguntar dónde tiene lugar un evento se usa «ser»: «¿Dónde es la fiesta?»."),
      toEs("Hay un concierto en el parque.", "El concierto es en el parque.", "Con «el concierto» ya no se presenta con hay; pero, como es un evento, su lugar va con ser, no con estar.", [], "Sustituye «un concierto» por «el concierto». ¡Cuidado: es un evento!"),
      toEs("Hay una tormenta esta noche.", "Anoche hubo una tormenta.", "Un suceso concreto del pasado se expresa con hubo (pretérito de haber), en singular.", [], "Pasa la frase al pasado con «anoche»."),
      toEs("Ayer estuvo un accidente en la autopista.", "Ayer hubo un accidente en la autopista.", "Para decir que un suceso ocurrió se usa haber (hubo), no estar.", [], "Corrige la frase."),
      toEs("La cena es lista; ya podemos comer.", "La cena está lista; ya podemos comer.", "Estar listo = preparado. «Ser listo» significa inteligente.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: «¿Cómo es…?» pide una descripción (carácter, aspecto, características) y se responde con ser. «¿Cómo está…?» o «¿Qué tal está…?» pide el estado de ahora (salud, ánimo, temperatura, punto de la comida) y se responde con estar. Para un evento pasado: ¿Cómo fue? (o ¿Cómo estuvo?).",
          "¿Por qué? La pregunta ya elige el verbo de la respuesta: a «¿Cómo está tu padre?» no se responde «Es simpático», sino «Está mejor».",
        ],
        [
          ["—¿Cómo es tu piso? —Es pequeño pero luminoso.", "What's your flat like? It's small but bright."],
          ["—¿Cómo está tu padre? —Está mejor, gracias.", "How's your father? He's better, thanks."],
          ["—¿Qué tal está la sopa? —Está salada.", "How's the soup? It's salty. (sabor ahora → estar)"],
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
      fb("Responde.", "—¿Qué ___ en tu barrio? —Hay un cine y dos bibliotecas. (haber)", "hay", "Se pregunta por lo que existe en el barrio: haber, la misma forma que en la respuesta."),
      mc(
        "—¿Cómo ___ la película? —Muy aburrida, me dormí.",
        ["fue", "hubo", "estaba", "había"],
        0,
        "Para valorar un evento ya terminado se usa ser en pretérito: ¿Cómo fue la película? («¿Cómo estuvo?» también es muy frecuente). «Hubo» y «había» hablan de existencia, y «estaba» no se usa para valorar una película."
      ),
      toEs("What is your boss like?", "¿Cómo es tu jefe?", "«¿Cómo es…?» pregunta por el carácter o las características de alguien.", ["¿Cómo es tu jefa?"]),
      toEs("¿Cómo es tu hermano?", "¿Cómo está tu hermano después del accidente?", "Para preguntar por su estado (salud, ánimo) tras el accidente se usa estar: ¿cómo está?", [], "Cambia la pregunta para preguntar por su estado después del accidente."),
      toEs("¿Cómo es el hotel?", "¿Cómo era el hotel?", "Para pedir una descripción en pasado se usa el imperfecto de ser: ¿cómo era?", [], "Pasa la pregunta al pasado: hablas de tus vacaciones del verano pasado."),
      toEs("—¿Cómo es tu madre hoy? —Está cansada.", "—¿Cómo está tu madre hoy? —Está cansada.", "«Hoy» y la respuesta «está cansada» piden preguntar por el estado: ¿cómo está?", [], "Corrige la pregunta."),
      toEs("—¿Cómo son tus vecinos? —Están muy simpáticos.", "—¿Cómo son tus vecinos? —Son muy simpáticos.", "A «¿cómo son?» se responde con ser: el carácter no es un estado del momento.", [], "Corrige la respuesta."),
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
        [
          "Recuerda la regla: ponerse + adjetivo cuenta el momento en que alguien (o algo) pasa a estar de una manera: un cambio rápido y casi siempre pasajero, emocional (nervioso, contento, triste) o físico (rojo, pálido, enfermo). Piensa en «empezar a estar»: me pongo nervioso → estoy nervioso.",
          "Ponerse se conjuga como poner, con todas sus irregularidades (me pongo, se puso, nos pusimos, no te pongas, ponte), y el adjetivo concuerda con el sujeto. No va con sustantivos ni con profesiones: para eso están hacerse o convertirse en.",
        ],
        [
          ["Se puso rojo cuando le hablé.", "He went red when I spoke to him. (cambio físico)"],
          ["Me pongo nerviosa antes de hablar en público.", "I get nervous before speaking in public. (reacción que se repite)"],
          ["Nos pusimos muy contentos con la noticia.", "We were delighted with the news. (pusimos: indefinido irregular)"],
        ],
        [
          fb("Mismo marco.", "Cuando vio el examen, Lucía se ___ blanca. (ponerse, indefinido)", "puso", "Un cambio físico repentino → ponerse; el indefinido de poner es irregular: se puso (sin tilde). «Se ponió» no existe."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Siempre me ___ nervioso en el dentista. (ponerse)", "pongo", "Una reacción que se repite cada vez → presente de ponerse; la primera persona lleva -g-: me pongo."),
      fb("Mismo marco.", "Mi madre se ___ triste al oír la noticia. (ponerse, indefinido)", "puso", "Un cambio emocional en un momento concreto del pasado → indefinido: se puso."),
      fb("Mismo marco.", "Nos ___ pálidos al ver la factura. (ponerse, indefinido)", "pusimos", "Nosotros en indefinido irregular: nos pusimos; el adjetivo concuerda en plural (pálidos)."),
      fb("Mismo marco.", "No te ___ así, no es para tanto. (ponerse)", "pongas", "El imperativo negativo se forma con el presente de subjuntivo: no te pongas. «No te pones» sería indicativo."),
      fb("Mismo marco.", "El cielo se ___ gris de repente. (ponerse, indefinido)", "puso", "«De repente» marca un cambio físico rápido → ponerse, también con cosas: el cielo se puso gris."),
      mc(
        "«Cuando se enteró de la noticia, se ___ muy contento.»",
        ["puso", "hizo", "volvió", "convirtió"],
        0,
        "Ponerse + adjetivo expresa un cambio emocional rápido: se puso contento. Hacerse suele implicar esfuerzo, volverse un cambio duradero y convertirse en + sustantivo una transformación."
      ),
      toEs("I got angry when he lied to me.", "Me puse furioso cuando me mintió.", "«Ponerse» + adjetivo expresa un cambio emocional repentino: «me puse furioso».", ["Me enfadé cuando me mintió.", "Me puse furiosa cuando me mintió.", "Me puse de mal humor cuando me mintió."]),
    ]
  ),
  L(
    "verbs-of-change-1",
    "b2d-pares-ponerse-volverse",
    "Pares mínimos: se puso serio / se volvió serio",
    "Distingue ponerse (un cambio momentáneo) de volverse (una transformación duradera del carácter).",
    "6 min",
    [
      sec(
        "¿Cuánto dura el cambio?",
        [
          "Recuerda la regla: con el mismo adjetivo, ponerse cuenta una reacción del momento (después vuelves a ser como antes) y volverse cuenta una transformación duradera, normalmente gradual e involuntaria (pasas a ser así).",
          "Prueba de la paráfrasis: ponerse = empezar a estar (se puso serio → estaba serio en ese momento); volverse = empezar a ser (se volvió serio → ahora es una persona seria). Las pistas del contexto ayudan: al oír…, cuando…, de repente → ponerse; con los años, desde que…, cada vez más → volverse.",
        ],
        [
          ["Se puso muy serio al oír la noticia.", "He became very serious when he heard the news. (en ese momento)"],
          ["Con la edad se volvió muy serio.", "With age he became very serious. (su carácter cambió)"],
          ["Se pone de mal humor cuando pierde su equipo.", "He gets in a bad mood when his team loses. (reacción que se repite: sigue siendo ponerse)"],
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
      fb("Elige.", "Al ver el precio, se ___ nerviosa. (ponerse/volverse, indefinido)", "puso", "«Al ver el precio» marca una reacción en un momento concreto → ponerse: se puso nerviosa."),
      fb("Elige.", "Después del accidente, se ___ muy prudente. (ponerse/volverse, indefinido)", "volvió", "El accidente cambió su forma de ser a partir de entonces → volverse: ahora es prudente."),
      fb("Elige.", "Cuando bebe, se ___ muy pesado. (ponerse/volverse)", "pone", "Es una reacción que aparece cada vez que bebe y luego pasa → ponerse, aunque se repita."),
      fb("Elige.", "Con la fama se ha ___ insoportable. (ponerse/volverse)", "vuelto", "La fama ha cambiado su carácter de forma duradera → volverse (participio irregular: vuelto)."),
      fb("Elige.", "Los niños se ___ muy contentos con el regalo. (ponerse/volverse, indefinido)", "pusieron", "Una alegría del momento → ponerse: se pusieron contentos."),
      fb("Elige.", "El mundo se ha ___ más rápido con internet. (ponerse/volverse)", "vuelto", "Una transformación profunda y gradual de cómo es el mundo → volverse."),
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
        [
          "Recuerda la regla: hacerse + sustantivo o adjetivo = cambio voluntario o fruto del esfuerzo, sobre todo profesión, religión, ideología o estatus (se hizo médico, se hizo rico). Llegar a ser = la meta al final de un proceso largo (llegó a ser presidenta; en negativa, no la alcanzó). Convertirse en + sustantivo = una cosa pasa a ser otra completamente distinta (el pueblo se convirtió en una ciudad).",
          "Para elegir, pregúntate: ¿lo decidió o lo trabajó? → hacerse. ¿Es la cumbre de una trayectoria? → llegar a ser. ¿Algo se transforma en otra cosa, con «en»? → convertirse en. Ponerse no sirve para ninguno de estos cambios.",
        ],
        [
          ["Se hizo vegetariano el año pasado.", "He became a vegetarian last year. (decisión → hacerse)"],
          ["Llegó a ser capitana del equipo nacional.", "She went on to become captain of the national team. (meta de una trayectoria)"],
          ["El pueblo se convirtió en una ciudad turística.", "The village became a tourist town. (transformación → convertirse en)"],
        ],
        [
          fb("Estación 1.", "Estudió mucho y se ___ abogada. (hacerse, indefinido)", "hizo", "Una profesión conseguida con esfuerzo → hacerse; indefinido irregular: se hizo (sin tilde)."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Con el negocio se ___ rico. (hacerse, indefinido)", "hizo", "El dinero llega como resultado de su actividad → hacerse rico."),
      fb("Estación 2.", "Empezó de camarero y ___ director del hotel. (llegar a ser, indefinido)", "llegó a ser", "De camarero a director: la cumbre de un largo camino → llegar a ser."),
      fb("Estación 2.", "Nunca ___ famosa, pero vivió de su arte. (llegar a ser, indefinido)", "llegó a ser", "Llegar a ser en negativa dice que la meta no se alcanzó, a pesar del recorrido."),
      fb("Estación 3.", "La fábrica se ___ en un museo. (convertirse, indefinido)", "convirtió", "La fábrica pasa a ser otra cosa (un museo) → convertirse en; indefinido con cambio vocálico: convirtió."),
      fb("Estación 3.", "El agua se ___ en hielo. (convertir, presente)", "convierte", "Transformación completa de una sustancia en otra → convertirse en; presente con diptongo: convierte."),
      fb("Estación 4.", "Se ___ budista tras un viaje a Nepal. (hacerse, indefinido)", "hizo", "Una religión que se adopta por decisión propia → hacerse."),
      mc(
        "«La rana se ___ en príncipe.»",
        ["convirtió", "hizo", "puso", "llegó"],
        0,
        "«Convertirse en» + sustantivo expresa una transformación completa: se convirtió en príncipe. Hacerse y ponerse no van con «en» así, y «llegó» necesitaría «a ser»."
      ),
      toEs("She became a nurse.", "Se hizo enfermera.", "Para una profesión alcanzada por esfuerzo se usa «hacerse»: «se hizo enfermera».", ["Llegó a ser enfermera.", "Se convirtió en enfermera."]),
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
        [
          "Recuerda la regla antes de completar la vida de Rosa: ponerse = reacción rápida y pasajera (se ponía roja); hacerse = cambio elegido o trabajado, como una profesión (se hizo actriz); volverse = cambio gradual del carácter (se volvió segura); llegar a ser = la cumbre de una trayectoria (llegó a ser directora); convertirse en + sustantivo = algo pasa a ser otra cosa (se convirtió en el más visitado).",
          "En una biografía también cuenta el tiempo verbal: una reacción que se repetía va en imperfecto (de niña se ponía roja cada vez que…); un cambio en un momento concreto, en indefinido (el día del estreno se puso nerviosa). Lee: «De niña, Rosa se ponía roja cada vez que hablaba en público. En la universidad se hizo actriz de teatro y poco a poco se volvió muy segura de sí misma. Con los años llegó a ser directora del teatro nacional, que se convirtió en el más visitado del país.»",
        ],
        [
          ["Con el tiempo, mi abuelo se volvió más tranquilo.", "Over time, my grandfather became calmer. (cambio gradual del carácter)"],
          ["De niño, mi hermano se ponía rojo en las fotos.", "As a boy, my brother used to go red in photos. (reacción repetida → imperfecto)"],
        ],
        [
          fb("Completa.", "Su madre se ___ a llorar el día que Rosa se fue a Madrid. (ponerse, indefinido)", "puso", "Una reacción en un momento concreto del pasado (el día que se fue) → indefinido: se puso. «Ponerse a» + infinitivo significa empezar a hacer algo."),
        ]
      ),
    ],
    [
      fb("Completa.", "En la universidad se ___ actriz. (hacerse, indefinido)", "hizo", "Una profesión elegida y trabajada → hacerse: se hizo actriz."),
      fb("Completa.", "Poco a poco se ___ muy segura de sí misma. (volverse, indefinido)", "volvió", "«Poco a poco» y un rasgo de carácter → volverse."),
      fb("Completa.", "Con los años ___ directora del teatro nacional. (llegar a ser, indefinido)", "llegó a ser", "La cumbre de su carrera, «con los años» → llegar a ser."),
      fb("Completa.", "El teatro se ___ en el más visitado del país. (convertirse, indefinido)", "convirtió", "El teatro pasa a ser otra cosa (el más visitado) → convertirse en; indefinido: se convirtió."),
      fb("Completa.", "El día del estreno se ___ muy nerviosa. (ponerse, indefinido)", "puso", "Una reacción pasajera en un día concreto → ponerse, en indefinido: se puso."),
      mc(
        "«Con el paso de los años, Rosa nunca se ___ arrogante a pesar del éxito.»",
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
    "Elige entre ponerse, volverse, hacerse, llegar a ser y convertirse en según el tipo de cambio.",
    "6 min",
    [
      sec(
        "Mapa de los verbos",
        [
          "Recuerda la regla con tres preguntas. ¿Es rápido y pasajero? → ponerse + adjetivo (se puso colorada). ¿Es un cambio profundo y duradero que ocurre solo? → volverse (se volvió desconfiado). ¿Lo decidió o lo consiguió con esfuerzo? → hacerse (se hizo médico, se hizo socio) o, si es la cumbre de un camino largo, llegar a ser (llegó a ser ministra).",
          "Y si algo pasa a ser otra cosa distinta, con un sustantivo detrás → convertirse en (el blog se convirtió en un periódico). La preposición «en» es la pista más clara: solo convertirse la lleva.",
        ],
        [
          ["Se ha vuelto muy desconfiado.", "He's become very suspicious. (cambio duradero e involuntario)"],
          ["Se puso colorada al verlo.", "She blushed when she saw him. (reacción pasajera)"],
          ["El garaje se convirtió en una tienda.", "The garage became a shop. (una cosa pasa a ser otra)"],
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
      mc("Al oír su nombre, «se ___ roja como un tomate».", ["puso", "hizo", "volvió", "llegó a ser"], 0, "Ponerse expresa un cambio físico momentáneo: se puso roja. Hacerse y volverse expresan cambios duraderos, y llegar a ser un logro."),
      mc("Tras la guerra, «se ___ una persona amargada».", ["volvió", "puso", "hizo", "llegó"], 0, "Volverse expresa un cambio profundo e involuntario de carácter: se volvió una persona amargada. Ponerse es pasajero, hacerse suele ser voluntario y «llegó» necesita «a ser»."),
      mc("El pequeño blog «se ___ en un periódico digital».", ["convirtió", "hizo", "puso", "volvió"], 0, "«Convertirse en» expresa una transformación completa: se convirtió en un periódico. Hacerse, ponerse y volverse no llevan «en» así."),
      mc("Tras décadas de trabajo, «___ ministra».", ["llegó a ser", "se puso", "se volvió", "se convirtió"], 0, "«Llegar a ser» expresa un logro tras un largo proceso: llegó a ser ministra. Ponerse y volverse no se usan con cargos, y convertirse necesitaría «en»."),
      fb("Completa.", "Mi primo se ___ de otro equipo para molestarme. (hacerse, indefinido)", "hizo", "Hacerse de un equipo o de un club es una afiliación voluntaria → hacerse."),
      fb("Completa.", "Se ___ loco de alegría al saber la noticia. (volverse, indefinido)", "volvió", "«Volverse loco» es una expresión fija, también para reacciones del momento (loco de alegría). «Ponerse loco» se oye en el habla coloquial, pero lo normal es volverse."),
      toEs("The village became a small city.", "El pueblo se convirtió en una pequeña ciudad.", "«Convertirse en» + sustantivo expresa una transformación completa.", ["El pueblo se transformó en una pequeña ciudad.", "El pueblo se convirtió en una ciudad pequeña."]),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2d-corrige-verbos-cambio",
    "Corrige el párrafo: verbos de cambio mal elegidos",
    "Detecta y corrige verbos de cambio mal elegidos (ponerse, volverse, hacerse, convertirse en, llegar a ser) y sus preposiciones.",
    "6 min",
    [
      sec(
        "El texto",
        [
          "Recuerda la regla antes de corregir: ponerse + adjetivo para reacciones pasajeras; volverse + adjetivo para cambios de carácter duraderos; hacerse para profesiones y cambios buscados; convertirse en + sustantivo cuando algo pasa a ser otra cosa; llegar a ser para una meta tras un largo camino. ¿Por qué se confunden? Porque en inglés todos son «become»; en español cada uno tiene su tipo de cambio y su construcción (solo convertirse lleva «en», y llegar necesita «a ser»).",
          "Ahora busca los cuatro errores: «Mi hermano se puso médico hace dos años. Al principio se hacía nervioso con los pacientes, pero ahora se ha convertido muy tranquilo. Su clínica se volvió en la más conocida del barrio.»",
        ],
        [
          ["Mi prima se hizo enfermera el año pasado.", "My cousin became a nurse last year. (profesión → hacerse)"],
          ["Se ha vuelto muy paciente con los años.", "He's become very patient over the years. (carácter → volverse + adjetivo)"],
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
      toEs("Mi hermano se puso médico hace dos años.", "Mi hermano se hizo médico hace dos años.", "Para una profesión se usa «hacerse», no «ponerse»: «se hizo médico». Ponerse solo va con adjetivos de estados pasajeros.", [], "Corrige la frase."),
      toEs("Al principio se hacía nervioso con los pacientes.", "Al principio se ponía nervioso con los pacientes.", "Para una reacción emocional momentánea se usa «ponerse», no «hacerse»: «se ponía nervioso». Hacerse implica un cambio buscado.", [], "Corrige la frase."),
      toEs("Ahora se ha convertido muy tranquilo.", "Ahora se ha vuelto muy tranquilo.", "Con adjetivo de carácter se usa «volverse»; «convertirse» va con «en» + sustantivo.", [], "Corrige la frase."),
      toEs("Su clínica se volvió en la más conocida del barrio.", "Su clínica se convirtió en la más conocida del barrio.", "«En» + sustantivo va con «convertirse»; «volverse» no lleva «en».", [], "Corrige la frase."),
      toEs("Con los años se puso jefe de su departamento.", "Con los años llegó a ser jefe de su departamento.", "Un cargo alcanzado al final de un largo camino («con los años») se expresa con llegar a ser. Ponerse no va con cargos ni profesiones.", ["Con los años se hizo jefe de su departamento."], "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["Se puso contento.", "Se hizo famoso.", "Se volvió en rana.", "Se convirtió contento."],
        [0, 1],
        "«Se puso contento» (estado pasajero) y «Se hizo famoso» (logro) son correctas. «Se volvió en rana» añade un «en» que volverse no lleva, y «Se convirtió contento» usa convertirse con un adjetivo."
      ),
      fb("Transforma el estado en el cambio.", "Es muy desconfiada. → Desde el robo, ___ muy desconfiada. (pretérito perfecto)", "se ha vuelto", "Un rasgo de carácter que cambia de forma duradera y sin querer («desde el robo») → volverse: se ha vuelto desconfiada."),
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
        "Recuerda la regla: del estado al cambio",
        [
          "Ser y estar describen cómo ES o cómo ESTÁ algo; un verbo de cambio cuenta el momento o el proceso en que llegó a serlo. Para elegirlo, mira el tipo de cambio, no la traducción de «to become / to get»:",
          "estar + adjetivo (estado pasajero) → ponerse (el instante en que empieza: se puso nervioso). Ser + adjetivo de carácter → volverse (proceso lento y no buscado: se volvió desconfiado). Ser + profesión, ideología o religión → hacerse (decisión o esfuerzo: se hizo enfermera). Un logro al final de un camino largo → llegar a ser. Ser + otra cosa (sustantivo) → convertirse en. Quedarse = el estado que queda tras un hecho (se quedó sola).",
        ],
        [
          ["Estaba triste. → Se puso triste al oír la canción.", "He was sad. → He got sad when he heard the song. (estado pasajero → ponerse)"],
          ["Es muy desconfiado. → Con los años se volvió muy desconfiado.", "He's very distrustful. → Over the years he became very distrustful. (carácter → volverse)"],
          ["Es enfermera. → Se hizo enfermera a los veinte.", "She's a nurse. → She became a nurse at twenty. (profesión elegida → hacerse)"],
        ],
        [
          fb("Transforma.", "Estaba furiosa. → Se ___ furiosa cuando lo vio. (indefinido)", "puso", "Furiosa con estar es un estado pasajero; el momento en que empieza se cuenta con ponerse. «Se volvió furiosa» indicaría un cambio de carácter permanente."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Ahora es muy callado. → Con los años se ___ muy callado. (indefinido)", "volvió", "Es callado describe el carácter, y con los años indica un proceso lento: volverse. «Se puso callado» sería solo un momento."),
      fb("Transforma.", "Es profesora. → Se ___ profesora a los treinta. (indefinido)", "hizo", "Una profesión elegida se consigue con hacerse. Ponerse no admite profesiones."),
      fb("Transforma.", "Es directora general. → ___ directora general tras veinte años. (indefinido)", "Llegó a ser", "Tras veinte años marca el final de una trayectoria: llegar a ser expresa ese logro. Hacerse también existe, pero no subraya el largo camino."),
      fb("Transforma.", "El edificio es un hotel. → El edificio se ___ en un hotel. (indefinido)", "convirtió", "Un hotel es un sustantivo: el edificio pasa a ser otra cosa, y el «en» que ya está en la frase solo encaja con convertirse."),
      fb("Transforma.", "Estábamos contentos. → Nos ___ contentos con la noticia. (indefinido)", "pusimos", "Estar contento es un estado; el momento en que empieza, provocado por la noticia, es ponerse (nosotros: nos pusimos)."),
      toEs("He became very rich.", "Se hizo muy rico.", "Rico como resultado de su trabajo: hacerse + adjetivo («se hizo rico»). «Se puso rico» sería coloquial y pasajero; «se volvió rico» suena a cambio no buscado.", ["Llegó a ser muy rico."]),
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
        "Recuerda la regla: cada cambio, su verbo",
        [
          "Para hablar de cómo has cambiado, elige el verbo por el TIPO de cambio: ponerse = reacción pasajera (me pongo nervioso); volverse = cambio de carácter lento, a menudo sin quererlo (me he vuelto más paciente); hacerse = algo que decides o consigues (me hice vegetariano); convertirse en + sustantivo = una cosa pasa a ser otra (mi afición se convirtió en mi trabajo); quedarse = lo que resulta de un hecho (me quedé sin trabajo); llegar a ser = una meta tras un largo camino.",
          "Y el tiempo verbal dice cuándo: presente para lo que te pasa siempre (me pongo rojo cuando…), perfecto para cambios que llegan hasta hoy (con los años me he vuelto…), indefinido para un momento cerrado (me hice vegetariano en 2020).",
        ],
        [
          ["Me pongo nervioso en las entrevistas.", "I get nervous in interviews. (reacción que se repite → presente de ponerse)"],
          ["Desde que vivo solo me he vuelto más ordenado.", "Since I've lived alone I've become tidier. (carácter, hasta hoy → perfecto de volverse)"],
          ["Mi afición por la cocina se convirtió en mi trabajo.", "My love of cooking turned into my job. (una cosa pasa a ser otra → convertirse en)"],
        ],
        [
          fb("Tus cambios.", "Me ___ colorado cuando alguien me hace un cumplido. (ponerse)", "pongo", "Ponerse colorado es una reacción física pasajera que se repite: presente de ponerse. Volverse colorado no se dice."),
        ]
      ),
    ],
    [
      fb("Tus cambios.", "Desde que trabajo de cara al público, me he ___ más paciente. (volverse)", "vuelto", "La paciencia es un rasgo de carácter que cambia poco a poco: volverse. Perfecto porque el cambio llega hasta hoy (desde que trabajo)."),
      fb("Tus cambios.", "Me ___ vegetariano hace tres años. (hacerse, indefinido)", "hice", "Ser vegetariano es una decisión: hacerse. Hace tres años es un momento cerrado → indefinido (me hice)."),
      fb("Tus cambios.", "Mi afición se ha ___ en mi trabajo. (convertirse)", "convertido", "Una afición que pasa a ser otra cosa (mi trabajo, un sustantivo): convertirse en."),
      fb("Tus cambios.", "Me ___ muy contento cuando aprobé el carné. (ponerse, indefinido)", "puse", "La alegría de un momento concreto (cuando aprobé) es una reacción pasajera: ponerse, en indefinido."),
      fb("Tus cambios.", "Espero ___ a ser un buen profesional. (llegar)", "llegar", "Una meta a largo plazo: llegar a ser. Después de esperar va el infinitivo."),
      toEs("I've become more independent.", "Me he vuelto más independiente.", "«Volverse» + adjetivo expresa un cambio de carácter gradual y duradero; el perfecto, porque llega hasta hoy.", ["Me he hecho más independiente."]),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2d-ronda-verbos-cambio",
    "Ronda rápida: cinco verbos de cambio",
    "Practicarás en una ronda rápida la elección entre ponerse, volverse, hacerse, llegar a ser, quedarse y convertirse en según el tipo de cambio.",
    "5 min",
    [
      sec(
        "Recuerda la regla: las pistas del cambio",
        [
          "El español elige el verbo según cómo es el cambio: emoción, color de la cara o estado físico pasajero → ponerse. Carácter que cambia con el tiempo, sin quererlo → volverse. Profesión, religión, ideología, riqueza (lo que eliges o consigues) → hacerse. Meta alcanzada tras un largo camino → llegar a ser. Una cosa que pasa a ser otra (sustantivo) → convertirse en. Lo que queda tras un hecho → quedarse.",
          "Truco rápido: si detrás viene «en» + sustantivo, solo vale convertirse; si viene una profesión, hacerse o llegar a ser; si el cambio dura un rato, ponerse.",
        ],
        [
          ["La reunión se convirtió en un problema.", "The meeting turned into a problem. (en + sustantivo)"],
          ["Se puso pálido al ver la factura.", "He went pale when he saw the bill. (cambio físico de un momento)"],
          ["Con la fama se volvió muy arrogante.", "With fame he became very arrogant. (carácter, con el tiempo)"],
        ],
        [
          fb("Rápido.", "Se ___ muy triste al despedirse. (indefinido)", "puso", "La tristeza de una despedida es una emoción pasajera: ponerse. «Se volvió triste» describiría un cambio de carácter."),
        ]
      ),
    ],
    [
      fb("Rápido.", "La pequeña discusión se ___ en una pelea. (indefinido)", "convirtió", "Detrás viene «en» + sustantivo (una pelea): solo convertirse funciona; la discusión pasa a ser otra cosa."),
      fb("Rápido.", "Se ___ musulmán hace diez años. (indefinido)", "hizo", "Una religión que se elige: hacerse. Ponerse no va con religiones."),
      { ...fb("Rápido.", "Con la edad se ha ___ más sabio.", "vuelto", "«Volverse» + adjetivo expresa un cambio de carácter gradual y duradero (también vale «se ha hecho»)."), altAnswers: ["hecho"] },
      fb("Rápido.", "El actor ___ muy famoso. (llegar a ser, indefinido)", "llegó a ser", "La fama como meta alcanzada al final de una carrera: llegar a ser (también se dice «se hizo famoso»)."),
      fb("Rápido.", "Me ___ roja cuando me miran. (presente)", "pongo", "Ponerse rojo es una reacción física pasajera que se repite: presente de ponerse."),
      fb("Rápido.", "Se ___ tarde; vámonos. (hacerse, indefinido)", "hizo", "Hacerse tarde / de noche es una expresión fija para el paso del tiempo."),
      fb("Rápido.", "El niño se ___ muy mimado con tantos regalos. (indefinido)", "volvió", "Mimado describe el carácter que cambia poco a poco y sin querer: volverse."),
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
        "Recuerda la regla: ser, estar, haber y los verbos de cambio",
        [
          "Una descripción de un lugar combina cuatro herramientas. Ser = qué ES algo (identidad: era un pueblo industrial) y dónde se celebra un evento (el festival es en el parque). Estar = dónde está algo y en qué estado se encuentra (el mercado está junto a la catedral; la ciudad está irreconocible). Haber = qué existe (había fábricas; hoy hay hoteles), siempre en singular. Y los verbos de cambio cuentan el paso de una cosa a otra: convertirse en, volverse, ponerse, quedarse, llegar a ser.",
          "¿Por qué estar con «irreconocible»? Porque describe el resultado de un cambio, un estado, no la identidad de la ciudad. Y un suceso puntual del pasado se cuenta con hubo, no con había: había describe el fondo.",
        ],
        [
          ["Hace veinte años mi ciudad era un pueblo industrial.", "Twenty years ago my city was an industrial town. (identidad pasada → ser, imperfecto)"],
          ["El concierto de anoche fue en la plaza mayor y hubo mucho público.", "Last night's concert was in the main square and there was a big audience. (evento → ser; suceso → hubo)"],
          ["Después de las obras, el puerto está precioso.", "After the works, the port looks lovely. (estado resultante → estar)"],
        ],
        [
          fb("Completa.", "Antes, en la estación ___ siempre muchos taxis. (haber)", "había", "Lo que existía habitualmente en el pasado: había (imperfecto de haber, en singular aunque taxis sea plural). «Hubo» contaría un suceso puntual."),
        ]
      ),
    ],
    [
      fb("Completa la descripción.", "Hace veinte años, ___ fábricas por todas partes. (haber)", "había", "Existencia en el fondo del pasado: había, en singular aunque fábricas sea plural."),
      fb("Completa la descripción.", "Poco a poco la zona del puerto se ___ en un barrio turístico. (convertir)", "convirtió", "Una cosa pasa a ser otra (un barrio turístico, sustantivo): convertirse en, en indefinido porque es un cambio completado."),
      fb("Completa la descripción.", "Con el tiempo los vecinos se ___ más abiertos. (volverse)", "volvieron", "Abiertos describe el carácter, que cambia poco a poco: volverse."),
      fb("Completa la descripción.", "Aunque algunos se ___ furiosos con la subida de precios. (ponerse)", "pusieron", "El enfado es una reacción emocional ante un hecho: ponerse."),
      fb("Completa la descripción.", "Hoy la avenida principal ___ irreconocible. (ser/estar)", "está", "Irreconocible describe el estado que resulta del cambio, no la identidad: estar."),
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
        [
          "Recuerda la regla: el contraste se puede expresar con tres estructuras, y cada una pide algo distinto detrás. Aunque une dos cláusulas en una sola frase: Aunque llovía, salimos. Sin embargo / no obstante empiezan una oración nueva, tras punto o punto y coma y con coma detrás: Llovía. Sin embargo, salimos. A pesar de funciona como una preposición: + sustantivo o infinitivo (a pesar de la lluvia), y + que cuando sigue un verbo conjugado (a pesar de que llovía).",
          "Para elegir, mira lo que viene detrás: ¿un verbo conjugado? aunque o a pesar de que. ¿Un sustantivo o un infinitivo? a pesar de. ¿Una oración nueva después de un punto? sin embargo.",
        ],
        [
          ["A pesar de la lluvia, salimos.", "Despite the rain, we went out. (sustantivo → a pesar de)"],
          ["Llovía. Sin embargo, salimos.", "It was raining. However, we went out. (oración nueva → sin embargo)"],
          ["A pesar de estar enfermo, vino a la boda.", "Despite being ill, he came to the wedding. (mismo sujeto → infinitivo)"],
        ],
        [
          fb("Transforma.", "Aunque estaba cansado, siguió trabajando. → A pesar ___ cansancio, siguió trabajando.", "del", "Cansancio es un sustantivo: a pesar de + el cansancio, y de + el se contrae en del. «A pesar de que» solo va delante de un verbo conjugado."),
        ]
      ),
    ],
    [
      { ...fb("Transforma.", "Estaba cansado. ___, siguió trabajando.", "Sin embargo", "Tras punto empieza una oración nueva: el contraste lo abre sin embargo (o no obstante), con coma detrás. Aunque no puede abrir una oración principal sola."), altAnswers: ["No obstante"] },
      fb("Transforma.", "___ estar cansado, siguió trabajando.", "A pesar de", "Detrás hay un infinitivo (estar) y el sujeto es el mismo en las dos partes: a pesar de + infinitivo. Aunque necesitaría un verbo conjugado (aunque estaba)."),
      fb("Transforma.", "A pesar de ___ estaba cansado, siguió trabajando.", "que", "Estaba es un verbo conjugado, así que a pesar de necesita que: a pesar de que estaba."),
      { ...fb("Completa con un conector de contraste.", "El examen era difícil. ___, aprobaron todos.", "No obstante", "Oración nueva tras punto, con coma detrás: no obstante (formal) o sin embargo."), altAnswers: ["Sin embargo"] },
      { ...fb("Completa con un conector de concesión.", "___ precio, compraron la casa.", "A pesar del", "Precio es un sustantivo: a pesar de + el precio = a pesar del precio. Pese a funciona igual (pese al precio)."), altAnswers: ["Pese al"] },
      mc(
        "«___ no tenía experiencia, lo contrataron.»",
        ["Aunque", "Sin embargo", "A pesar de", "No obstante"],
        0,
        "Detrás viene un verbo conjugado (tenía) dentro de la misma frase: aunque. «Sin embargo» y «no obstante» unen oraciones separadas, y «a pesar de» necesitaría «que» delante de un verbo conjugado."
      ),
      toEs("Despite the traffic, we arrived on time.", "A pesar del tráfico, llegamos a tiempo.", "Tráfico es un sustantivo: a pesar de + el tráfico = a pesar del tráfico.", ["Pese al tráfico, llegamos a tiempo.", "A pesar del tráfico, llegamos puntuales."]),
    ]
  ),
  L(
    "advanced-connectors-1",
    "b2d-circuito-causa-consecuencia",
    "Circuito: ya que, puesto que / por lo tanto, así que",
    "Practica los conectores de causa (ya que, puesto que, dado que) y de consecuencia (por lo tanto, así que, de modo que) y su posición en la frase.",
    "6 min",
    [
      sec(
        "Causa y consecuencia",
        [
          "Recuerda la regla: los conectores de causa (ya que, puesto que, dado que, como) acompañan a la razón y suelen ir al principio de la frase: Ya que estás aquí, ayúdame. Los de consecuencia (por lo tanto, por consiguiente, así que, de modo que) acompañan al resultado y siempre van detrás de la causa.",
          "Por eso la misma idea se puede decir de dos formas: Como llovía, nos quedamos en casa = Llovía, así que nos quedamos en casa. Al cambiar de conector cambia de sitio la causa. Registro: por lo tanto y por consiguiente son formales y van entre pausas (; por lo tanto,); así que y de modo que son más corrientes y van tras una simple coma. Como, a diferencia de ya que, solo puede ir al principio.",
        ],
        [
          ["Ya que estás aquí, ayúdame.", "Since you're here, help me. (causa conocida, al principio)"],
          ["No había luz; por lo tanto, cancelamos la clase.", "There was no electricity; therefore, we cancelled the class. (resultado, formal)"],
          ["Como no contestabas, me fui.", "As you weren't answering, I left. (como: solo al principio)"],
        ],
        [
          { ...fb("Estación 1: completa con un conector de causa.", "___ hace buen tiempo, comemos en la terraza.", "Ya que", "El buen tiempo es la razón y va al principio: conector de causa (ya que, puesto que, dado que, como). Así que o por lo tanto irían delante del resultado, nunca delante de la causa."), altAnswers: ["Como", "Puesto que", "Dado que"] },
        ]
      ),
    ],
    [
      fb("Estación 1.", "___ el tren tiene retraso, llegaremos tarde. (formal)", "Dado que", "El retraso es la causa y abre la frase; en registro formal, dado que (o puesto que)."),
      { ...fb("Estación 2: completa con un conector de consecuencia.", "No tengo dinero, ___ no voy a ir.", "así que", "No ir es el resultado de no tener dinero: conector de consecuencia tras una coma, así que (coloquial) o de modo que."), altAnswers: ["de modo que", "por lo que", "conque"] },
      { ...fb("Estación 2: completa con un conector de consecuencia formal.", "Los datos son incompletos; ___, no podemos sacar conclusiones.", "por lo tanto", "Resultado en registro formal, entre punto y coma y coma: por lo tanto o por consiguiente."), altAnswers: ["por consiguiente", "por tanto"] },
      { ...fb("Estación 3: completa con un conector de causa.", "___ nadie se opone, aprobamos la propuesta.", "Puesto que", "Que nadie se oponga es la razón y va al principio: puesto que (algo más formal que ya que)."), altAnswers: ["Ya que", "Dado que", "Como"] },
      { ...fb("Estación 3: completa con un conector de consecuencia.", "Llegó tarde, ___ se perdió el principio.", "de modo que", "Perderse el principio es el resultado de llegar tarde: de modo que o así que, detrás de la causa."), altAnswers: ["así que", "por lo que"] },
      ms(
        "¿Qué conectores expresan consecuencia?",
        ["por consiguiente", "así que", "ya que", "puesto que"],
        [0, 1],
        "Por consiguiente y así que van delante del resultado. Ya que y puesto que van delante de la razón: son de causa."
      ),
      toEs("Since you know the city, you can be our guide.", "Ya que conoces la ciudad, puedes ser nuestro guía.", "La razón conocida va al principio con ya que (o puesto que, como).", ["Como conoces la ciudad, puedes ser nuestro guía.", "Puesto que conoces la ciudad, puedes ser nuestra guía."]),
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
        [
          "Recuerda la regla: en un texto argumentativo cada conector anuncia qué viene. Sin embargo / no obstante → giro en contra; además / asimismo / es más → otro argumento en la misma dirección (es más, uno aún más fuerte); dado que / puesto que → la razón, al principio; por consiguiente / por lo tanto → la conclusión; a pesar de (que) → una objeción que no impide lo principal.",
          "Lee la intervención de una madre en el consejo escolar y decide qué conector va en cada hueco: «Los deberes son útiles; (1) ___, en exceso pueden ser perjudiciales. (2) ___, no todos los alumnos tienen ayuda en casa. (3) ___ esto genera desigualdad, proponemos limitarlos. (4) ___, pedimos un máximo de una hora diaria.»",
        ],
        [
          ["El horario es largo; además, hay poco tiempo para jugar.", "The timetable is long; moreover, there's little time to play. (otro argumento del mismo signo)"],
          ["Dado que faltan profesores, las clases son muy grandes.", "Given that there aren't enough teachers, classes are very big. (la razón, al principio)"],
        ],
        [
          fb("Hueco 1.", "Los deberes son útiles; ___, en exceso pueden ser perjudiciales.", "sin embargo", "La frase gira en contra de lo anterior (útiles → perjudiciales): conector de contraste entre pausas, sin embargo o no obstante."),
        ]
      ),
    ],
    [
      fb("Hueco 2.", "___, no todos los alumnos tienen ayuda en casa.", "Además", "Es un argumento nuevo que va en la misma dirección (más problemas de los deberes): además o asimismo, no un conector de contraste."),
      fb("Hueco 3.", "___ esto genera desigualdad, proponemos limitarlos.", "Dado que", "La desigualdad es la razón de la propuesta y va al principio: dado que (o puesto que, ya que)."),
      fb("Hueco 4.", "___, pedimos un máximo de una hora diaria.", "Por consiguiente", "La petición es la conclusión de todo lo anterior: por consiguiente (o por lo tanto), en registro formal."),
      fb("Completa la respuesta del director.", "___ de que algunos padres se oponen, la mayoría está de acuerdo.", "A pesar", "Objeción con verbo conjugado (se oponen) que no impide lo principal: a pesar de que."),
      { ...fb("Completa.", "Los deberes no mejoran los resultados; ___, perjudican el descanso.", "es más", "Se añade un argumento todavía más fuerte que el anterior (no solo no ayudan, sino que perjudican): es más."), altAnswers: ["además", "asimismo"] },
      mc(
        "«El plan es barato; ___, es fácil de aplicar.»",
        ["asimismo", "sin embargo", "aunque", "a pesar de"],
        0,
        "Ser fácil de aplicar es otra ventaja del mismo signo: asimismo (adición formal). «Sin embargo» expresaría contraste, y «aunque» y «a pesar de» una concesión."
      ),
      toEs("However, not everyone agrees.", "Sin embargo, no todo el mundo está de acuerdo.", "Giro en contra al principio de la oración: sin embargo, con coma detrás.", ["No obstante, no todos están de acuerdo.", "Sin embargo, no todos están de acuerdo."]),
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
        [
          "Recuerda la regla: antes de elegir el conector, decide qué relación hay entre las dos ideas. ¿La segunda va en contra de lo que esperabas? Contraste: sin embargo, no obstante, aunque. ¿Explica por qué? Causa: ya que, puesto que, dado que, porque. ¿Es el resultado? Consecuencia: por lo tanto, así que. ¿Suma otro dato en la misma dirección? Adición: además, asimismo, es más.",
          "Un truco: pregúntate «¿y entonces?» (consecuencia), «¿por qué?» (causa), «¿y qué más?» (adición) o «¿y aun así?» (contraste). El mismo par de ideas puede pedir dos conectores distintos según el orden: la causa al principio va con ya que; el resultado al final, con así que.",
        ],
        [
          ["Es caro; además, está lejos.", "It's expensive; besides, it's far away. (¿y qué más? → adición)"],
          ["Es caro; sin embargo, lo compraré.", "It's expensive; however, I'll buy it. (¿y aun así? → contraste)"],
          ["Ya que es caro, buscaremos otro.", "Since it's expensive, we'll look for another one. (¿por qué? → causa)"],
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
      mc("«___ el hotel estaba lleno, dormimos en otro.»", ["Puesto que", "Sin embargo", "Por lo tanto", "Además"], 0, "Para una causa al principio de la oración hace falta un conector causal, y de estas opciones solo lo es «puesto que» (también valdrían «ya que» o «dado que»): Puesto que estaba lleno, dormimos en otro. «Sin embargo», «por lo tanto» y «además» no introducen una causa."),
      { ...fb("Completa.", "No me gusta el fútbol; ___, fui al partido con mi padre.", "no obstante", "«No obstante» es un conector de contraste formal, equivalente a «sin embargo»."), altAnswers: ["sin embargo", "aun así"] },
      { ...fb("Completa.", "Tengo gripe, ___ no iré a clase.", "así que", "«Así que» introduce la consecuencia: la gripe provoca que no vaya."), altAnswers: ["de modo que", "por lo que"] },
      { ...fb("Completa.", "No iré a clase ___ tengo gripe.", "porque", "«Porque» introduce la causa y suele ir después de la oración principal."), altAnswers: ["ya que", "puesto que", "dado que"] },
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
        [
          "Recuerda la regla: cada conector tiene su propia gramática. A pesar de + sustantivo o infinitivo; a pesar de que / aunque + verbo conjugado. Sin embargo nunca lleva que: enlaza dos oraciones completas, con punto o punto y coma delante y coma detrás. Y una misma relación no se marca dos veces: si la causa ya lleva puesto que, la consecuencia no lleva por lo tanto (y si aunque marca el contraste, sobra pero).",
          "Este párrafo de un alumno tiene tres errores: «A pesar de que la contaminación, muchas personas usan el coche. Sin embargo que el metro es barato, la gente no lo usa. Puesto que la gente no usa el metro, por lo tanto el gobierno debe actuar.»",
        ],
        [
          ["A pesar del ruido, nos quedamos en el bar.", "Despite the noise, we stayed in the bar. (sustantivo → sin que)"],
          ["El bar era ruidoso; sin embargo, nos quedamos.", "The bar was noisy; however, we stayed. (sin embargo: dos oraciones, sin que)"],
          ["Como no había mesas, nos fuimos.", "As there were no tables, we left. (una sola marca de causa)"],
        ],
        [
          mc(
            "¿Qué falla en «a pesar de que la contaminación»?",
            ["Ante un sustantivo va «a pesar de», sin «que».", "Falta un verbo en subjuntivo.", "Debe ser «sin embargo».", "Nada."],
            0,
            "Ante un sustantivo se usa «a pesar de», sin «que»: a pesar de la contaminación. «A pesar de que» necesita un verbo conjugado; no es cuestión de subjuntivo ni de usar «sin embargo»."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «A pesar de que la contaminación, muchas personas usan el coche.»", "A pesar de la contaminación, muchas personas usan el coche.", "«A pesar de» + sustantivo va sin «que»; «a pesar de que» necesita un verbo conjugado.", ["A pesar de que hay contaminación, muchas personas usan el coche."]),
      toEs("Corrige: «Sin embargo que el metro es barato, la gente no lo usa.»", "Aunque el metro es barato, la gente no lo usa.", "«Sin embargo» no une dos oraciones con «que»; para una concesión en una sola oración se usa «aunque».", ["A pesar de que el metro es barato, la gente no lo usa.", "El metro es barato; sin embargo, la gente no lo usa."]),
      toEs("Corrige: «Estaba enfermo, sin embargo que fue a trabajar.»", "Estaba enfermo; sin embargo, fue a trabajar.", "Sin embargo nunca lleva que: va tras punto y coma (o punto) y con coma detrás.", ["Estaba enfermo. Sin embargo, fue a trabajar.", "Aunque estaba enfermo, fue a trabajar."]),
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
        [
          "Recuerda la regla: un párrafo argumentativo se monta pieza a pieza, y cada pieza tiene sus conectores. Tesis + causa (creo que…, ya que / puesto que…) → otro argumento (además, asimismo) → concesión: reconoces lo que dirían en contra (aunque, a pesar de que, si bien + indicativo, porque es un hecho que admites) → contraste: vuelves a tu postura (sin embargo, no obstante) → conclusión (por lo tanto, por consiguiente) con un condicional que suaviza la recomendación (deberían…).",
          "¿Por qué conceder? Porque reconocer una objeción antes de rebatirla hace el argumento más convincente. Vas a construir, paso a paso, un párrafo a favor del teletrabajo.",
        ],
        [
          ["Creo que leer en papel es mejor, ya que cansa menos la vista.", "I think reading on paper is better, since it's less tiring for the eyes. (tesis + causa)"],
          ["Si bien el libro digital es práctico, no transmite lo mismo.", "Although e-books are practical, they don't convey the same feeling. (concesión)"],
          ["Por consiguiente, las bibliotecas deberían mantener sus fondos en papel.", "Consequently, libraries should keep their paper collections. (conclusión + condicional)"],
        ],
        [
          { ...fb("Paso 1: da la causa con un conector.", "Creo que el teletrabajo es positivo, ___ reduce el tráfico.", "ya que", "Después de la tesis, la razón que la justifica va con un conector de causa: ya que (o puesto que, porque)."), altAnswers: ["porque", "puesto que", "dado que"] },
        ]
      ),
    ],
    [
      { ...fb("Paso 2: añade otro argumento con un conector.", "___, ahorra tiempo a los trabajadores.", "Además", "«Además» añade otro argumento a favor en la misma dirección."), altAnswers: ["Asimismo"] },
      { ...fb("Paso 3: reconoce una objeción con un conector de concesión.", "___ algunos se sienten aislados, la mayoría está satisfecha.", "Aunque", "La concesión admite un hecho contrario que no impide lo principal: aunque + indicativo (se sienten), porque reconoces que es verdad."), altAnswers: ["A pesar de que", "Si bien"] },
      { ...fb("Paso 4: contrasta con un conector.", "Hay problemas de comunicación; ___, existen herramientas para resolverlos.", "sin embargo", "Tras el problema, sin embargo devuelve el párrafo a tu postura (la solución)."), altAnswers: ["no obstante"] },
      { ...fb("Paso 5: concluye con un conector de consecuencia.", "___, las empresas deberían ofrecerlo.", "Por lo tanto", "«Por lo tanto» introduce la conclusión del razonamiento; el condicional deberían suaviza la recomendación."), altAnswers: ["Por consiguiente", "Por tanto", "En conclusión"] },
      { ...fb("Paso 6: da la causa con un conector.", "___ que los beneficios son claros, no hay motivo para esperar.", "Dado", "«Dado que» introduce una causa conocida en registro formal."), altAnswers: ["Puesto", "Ya"] },
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
        [
          "Recuerda la regla: si el complemento directo va delante del verbo como tema (aquello de lo que hablamos, ya conocido), se retoma con el pronombre lo / la / los / las, que concuerda con él en género y número: Compré el libro ayer → El libro lo compré ayer. El pronombre ocupa el lugar que el complemento ha dejado vacío, por eso es obligatorio.",
          "Si además hay un complemento indirecto, le / les se convierte en se delante de lo / la: Di las llaves a Ana → Las llaves se las di a Ana. ¿Para qué sirve? Para poner primero lo conocido y dejar al final lo nuevo o lo importante: El pan lo traigo yo (lo importante es quién).",
        ],
        [
          ["El pan lo traigo yo.", "I'll bring the bread. (el pan → lo)"],
          ["A tu hermana no la he visto.", "I haven't seen your sister. (persona femenina → la)"],
          ["Los papeles se los di al abogado.", "I gave the papers to the lawyer. (los + le → se los)"],
        ],
        [
          fb("Completa con el pronombre que retoma el complemento antepuesto.", "He leído esa novela. → Esa novela ya ___ he leído.", "la", "Si el complemento directo va antes del verbo, se repite con pronombre: «novela» → «la»."),
        ]
      ),
    ],
    [
      fb("Completa con el pronombre que retoma el complemento antepuesto.", "Preparo la cena yo. → La cena ___ preparo yo.", "la", "El complemento directo antepuesto se retoma con pronombre: «la cena» → «la»."),
      fb("Completa con el pronombre que retoma el complemento antepuesto.", "Vimos esos cuadros en Roma. → Esos cuadros ___ vimos en Roma.", "los", "El complemento directo antepuesto se retoma con pronombre: «esos cuadros» → «los»."),
      fb("Completa con el pronombre que retoma el complemento antepuesto.", "No conozco a tus padres. → A tus padres no ___ conozco.", "los", "El complemento directo de persona antepuesto (a tus padres) se retoma con «los», masculino plural; la «a» personal no lo convierte en indirecto."),
      fb("Completa con el pronombre que retoma el complemento antepuesto.", "Di el regalo a mi madre. → El regalo ___ di a mi madre.", "se lo", "Hay dos pronombres: el regalo → lo y a mi madre → le. Delante de lo, le se convierte en se: se lo (nunca «le lo»)."),
      fb("Completa con el pronombre que retoma el complemento antepuesto.", "Compré las entradas por internet. → Las entradas ___ compré por internet.", "las", "El complemento directo antepuesto se retoma con pronombre: «las entradas» → «las»."),
      mc(
        "«Los deberes ya ___ he hecho.»",
        ["los", "les", "lo", "—"],
        0,
        "Si el complemento directo va delante del verbo, se repite con un pronombre obligatorio que concuerda: los deberes → los. «Les» es indirecto, «lo» es singular y sin pronombre la frase es incorrecta."
      ),
      toEs("I'll pay for the coffee (start with «el café»).", "El café lo pago yo.", "Al anteponer el complemento directo para destacar al sujeto, se repite con pronombre: «el café lo pago yo».", ["El café lo pagaré yo.", "El café lo pago yo, tranquilo."]),
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
        [
          "Recuerda la regla: la oración hendida parte la frase en dos para poner el foco en un solo elemento, normalmente porque corrige o contrasta (Fue Ana quien lo dijo, no Marta). Fórmula: ser + elemento destacado + relativo + el resto. El relativo depende de lo que destacas: persona → quien / el que (plural: quienes / los que); tiempo → cuando; lugar → donde; modo → como; cosa o idea → lo que, que puede ir delante (Lo que quiero es paz).",
          "Ser concuerda en número con lo destacado (Fueron mis padres quienes…) y suele ir en el mismo tiempo que el verbo principal (Fue ayer cuando llegó / Es aquí donde vivo). En inglés todo se dice con «that», pero en español cada relativo es distinto.",
        ],
        [
          ["Fue Ana quien lo dijo.", "It was Ana who said it. (persona → quien)"],
          ["Lo que necesito es dormir.", "What I need is to sleep. (idea → lo que)"],
          ["Fue en Granada donde se conocieron.", "It was in Granada that they met. (lugar → donde)"],
        ],
        [
          { ...fb("Destaca quién.", "Luis rompió la ventana. → Fue Luis ___ rompió la ventana.", "quien", "Lo destacado es una persona (Luis): quien o el que, en singular."), altAnswers: ["el que"] },
        ]
      ),
    ],
    [
      fb("Destaca cuándo.", "Nos conocimos en 2015. → Fue en 2015 ___ nos conocimos.", "cuando", "En las oraciones hendidas de tiempo se usa «cuando»: «Fue en 2015 cuando…»."),
      fb("Destaca dónde.", "Nací en este hospital. → Es en este hospital ___ nací.", "donde", "En las oraciones hendidas de lugar se usa «donde»: «Es en este hospital donde…»."),
      fb("Destaca qué.", "Me molesta su actitud. → ___ me molesta es su actitud.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que me molesta es…»."),
      { ...fb("Destaca quién.", "Mis padres pagaron el viaje. → Fueron mis padres ___ pagaron el viaje.", "los que", "Persona en plural (mis padres): los que o quienes, y ser también en plural (fueron)."), altAnswers: ["quienes"] },
      fb("Destaca cómo.", "Lo aprendí así. → Fue así ___ lo aprendí.", "como", "En las oraciones hendidas de modo se usa «como»: «Fue así como…»."),
      mc(
        "«___ tú quien me llamó anoche?»",
        ["¿Fuiste", "¿Eras", "¿Estuviste", "¿Hubo"],
        0,
        "En una hendida sobre una acción pasada, lo más natural es que ser vaya también en pasado: ¿Fuiste tú quien me llamó? «Eras» es imperfecto, «estuviste» es de estar y «hubo» no forma esta estructura."
      ),
      toEs("It was my brother who told me.", "Fue mi hermano quien me lo dijo.", "En las oraciones hendidas de persona se usa «quien» (o «el que»): «Fue mi hermano quien…».", ["Fue mi hermano el que me lo dijo.", "Fue mi hermano quien me lo contó."]),
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
        [
          "Recuerda la regla: una exclamación con qué (¡Qué difícil es!) puede meterse dentro de otra frase con lo + adjetivo o adverbio + que: No sabes lo difícil que es. Así el grado se convierte en el objeto de verbos como saber, imaginar, sorprender, encantar o darse cuenta de.",
          "La trampa es la concordancia. Lo es neutro y no cambia, pero el adjetivo concuerda con el sustantivo del que habla: lo caras que son las entradas, lo altos que están tus hijos. Un adverbio (bien, mal, rápido cuando modifica a un verbo, lejos) no tiene género ni número, así que nunca cambia: lo bien que cantan.",
          "Y el nexo es siempre que, no como ni cuánto: lo mal que juega, no «lo mal como juega».",
        ],
        [
          ["¡Qué grande es tu jardín! → Me encanta lo grande que es tu jardín.", "I love how big your garden is."],
          ["¡Qué bien bailan! → Mira lo bien que bailan.", "Look how well they dance. (bien es adverbio: no cambia)"],
        ],
        [
          fb("Estación 1: completa con la palabra de la exclamación.", "¡Qué cansada estoy! → No te imaginas lo ___ que estoy.", "cansada", "En «lo + adjetivo + que», el adjetivo concuerda con el sujeto: «cansada»."),
        ]
      ),
    ],
    [
      fb("Estación 1: completa con la palabra de la exclamación.", "¡Qué caras son las entradas! → Mira lo ___ que son las entradas.", "caras", "En «lo + adjetivo + que», el adjetivo concuerda con «las entradas»: «caras»."),
      fb("Estación 2: transforma la exclamación.", "¡Qué rápido corre! → Me impresiona lo ___ que corre.", "rápido", "«Rápido» aquí es adverbio (modifica a «corre»), así que no cambia de forma."),
      fb("Estación 2: transforma la exclamación.", "¡Qué altos están tus hijos! → No me creo lo ___ que están tus hijos.", "altos", "En «lo + adjetivo + que», el adjetivo concuerda con «tus hijos»: «altos»."),
      fb("Estación 3: transforma la exclamación.", "¡Qué mal cocina! → Ya sabes lo ___ que cocina.", "mal", "«Mal» es adverbio (modifica a «cocina»), no el adjetivo «malo»."),
      fb("Estación 3: completa con la palabra de la exclamación.", "¡Qué bonita es la ciudad! → Me encanta lo ___ que es la ciudad.", "bonita", "En «lo + adjetivo + que», el adjetivo concuerda con «la ciudad»: «bonita»."),
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
        [
          "Recuerda la regla: antes de elegir la estructura, decide qué quieres destacar. Orden neutro (Juan compró el coche): solo informa. Tema conocido delante (El coche lo compró Juan): el objeto ya está en la conversación y se retoma con lo / la / los / las. Hendida (Fue Juan quien compró el coche): contrasta, es decir, Juan y no otro; el relativo cambia según lo destacado (quien, donde, cuando, lo que).",
          "Adverbio negativo al principio (Jamás / Nunca había visto algo así): da énfasis a la experiencia. Cuando nunca o jamás van delante del verbo, el no desaparece; solo se usa el no si van detrás (No había visto nunca algo así).",
        ],
        [
          ["Nunca he probado un café tan fuerte.", "I have never tried such strong coffee. (nunca delante: sin no)"],
          ["Fue el portero quien encontró las llaves.", "It was the doorman who found the keys. (contraste de persona)"],
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
      mc("Hablas de las fotos (tema ya conocido) y dices quién las hizo:", ["Las fotos las hizo mi hermano.", "Mi hermano hizo fotos.", "Hizo las fotos.", "Las fotos hizo mi hermano."], 0, "Un tema conocido se antepone y se repite con pronombre: Las fotos las hizo mi hermano. «Las fotos hizo mi hermano» omite el pronombre que marca el tema conocido (sin él la frase pasa a ser un contraste), y las otras no anteponen el tema."),
      mc("Di lo mismo con «jamás» al principio: nunca había estado tan feliz.", ["Jamás había estado tan feliz.", "Había estado jamás tan feliz.", "Tan feliz jamás.", "Estado jamás feliz."], 0, "«Jamás» puede ir al principio, sin «no» y con el verbo detrás: Jamás había estado tan feliz. Las otras opciones colocan jamás en mal lugar o dejan la frase sin verbo completo."),
      fb("Transforma la frase para destacar lo que necesitas.", "Necesito tiempo. → ___ necesito es tiempo.", "Lo que", "Para destacar una cosa se usa «lo que» + verbo + es: «Lo que necesito es tiempo». Quien solo sirve para personas."),
      { ...fb("Enfatiza.", "No he visto nunca un lugar tan bonito. → ___ he visto un lugar tan bonito. (adverbio negativo al principio, sin «no»)", "Jamás", "Con jamás o nunca delante del verbo, el no desaparece: «Jamás he visto…». «No he visto nunca» es la versión neutra con el adverbio detrás."), altAnswers: ["Nunca"] },
      fb("Transforma la frase: antepón el tema.", "Mi abuela cantaba esa canción. → Esa canción ___ cantaba mi abuela.", "la", "Un complemento directo antepuesto como tema se retoma con pronombre: «la» (sin pronombre solo es posible con un contraste muy marcado)."),
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
        [
          "Recuerda la regla: cuyo sustituye al posesivo «su» dentro de una relativa, y como «su», «nuestra» o «vuestros», concuerda con lo poseído, la palabra que viene justo DESPUÉS: El escritor cuya novela leí (novela → cuya). La casa cuyos balcones son azules (balcones → cuyos).",
          "Truco para no fallar: tapa el poseedor y mira solo el sustantivo que sigue a cuyo. El género del poseedor (el escritor, la casa) no cuenta nunca, aunque sea lo primero que oyes.",
        ],
        [
          ["Es el escritor cuya novela leí.", "He's the writer whose novel I read. (novela → cuya)"],
          ["Vivo en una casa cuyos balcones son azules.", "I live in a house whose balconies are blue. (balcones → cuyos)"],
          ["Es la profesora cuyo hijo estudia conmigo.", "She's the teacher whose son studies with me. (hijo → cuyo)"],
        ],
        [
          fb("Completa con cuyo, cuya, cuyos o cuyas.", "Es la artista ___ cuadros vimos en Madrid.", "cuyos", "Tapa «la artista» y mira lo que viene después: cuadros, masculino plural → cuyos."),
          fb("Completa con cuyo, cuya, cuyos o cuyas.", "Es un hotel ___ piscina está en la azotea.", "cuya", "Lo poseído es piscina (femenino singular) → cuya, aunque hotel sea masculino."),
        ]
      ),
    ],
    [
      fb("Completa con cuyo, cuya, cuyos o cuyas.", "Es el chico ___ madre es actriz.", "cuya", "Cuyo concuerda con lo poseído, no con el poseedor: madre → cuya (el chico no cuenta)."),
      fb("Completa con cuyo, cuya, cuyos o cuyas.", "Es la empresa ___ director dimitió.", "cuyo", "Lo poseído es director (masculino singular) → cuyo, aunque empresa sea femenino."),
      fb("Completa con cuyo, cuya, cuyos o cuyas.", "Es un pueblo ___ calles son estrechas.", "cuyas", "Calles es femenino plural → cuyas; pueblo (masculino) no influye."),
      fb("Completa con cuyo, cuya, cuyos o cuyas.", "Es el hombre ___ perro ladra toda la noche.", "cuyo", "Aquí poseedor y poseído coinciden en género, pero la concordancia la sigue marcando perro → cuyo."),
      fb("Completa con cuyo, cuya, cuyos o cuyas.", "Son los vecinos ___ hija toca el violín.", "cuya", "Los poseedores son plurales, pero lo poseído es una sola hija → cuya, en singular."),
      mc(
        "«La autora, ___ libros se venden en todo el mundo, vive en Lima.»",
        ["cuyos", "cuya", "cuyas", "cuyo"],
        0,
        "Cuyo concuerda con lo poseído, no con el poseedor: libros (masculino plural) → cuyos. «Cuya» es la trampa: concuerda con la autora, que es el poseedor."
      ),
      toEs("She's the woman whose car was stolen.", "Es la mujer cuyo coche robaron.", "Cuyo concuerda con lo poseído (coche), no con la mujer.", ["Es la mujer a la que le robaron el coche.", "Es la mujer cuyo coche fue robado.", "Es la mujer cuyo carro robaron.", "Es la mujer cuyo auto robaron."]),
      toEs("Es la mujer cuyo coche robaron.", "Es la mujer cuya moto robaron.", "Al cambiar lo poseído, cambia cuyo: moto es femenino → cuya. La mujer sigue igual porque no decide nada.", [], "Sustituye «coche» por «moto» y adapta la frase."),
      toEs("Es un actor cuya película ganó un Óscar.", "Es un actor cuyas películas ganaron un Óscar.", "Lo poseído pasa a plural y cuyo lo sigue: cuyas películas; el verbo también concuerda (ganaron).", [], "Cambia «película» al plural y adapta la frase."),
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
        [
          "Recuerda la regla: para unir dos frases cuando la segunda habla de algo que pertenece a alguien de la primera, el posesivo su/sus se convierte en cuyo/cuya/cuyos/cuyas, y la segunda frase se coloca justo detrás del poseedor. Cuyo no se suma a su (✗ cuyas sus), lo sustituye, y por eso concuerda como él: con lo poseído.",
          "Si lo poseído no era el sujeto de la segunda frase, «cuyo + sustantivo» pasa al principio de la relativa: Es una canción. Nunca recuerdo su letra. → Es una canción cuya letra nunca recuerdo. Y si llevaba preposición, la preposición se adelanta con él: Tengo un amigo. Viajé con su hermano. → Tengo un amigo con cuyo hermano viajé.",
        ],
        [
          ["Tengo un amigo. Su padre es piloto. → Tengo un amigo cuyo padre es piloto.", "I have a friend whose father is a pilot. (su padre → cuyo padre)"],
          ["Visitamos una ciudad. Sus museos son famosos. → Visitamos una ciudad cuyos museos son famosos.", "We visited a city whose museums are famous. (sus museos → cuyos museos)"],
          ["Es una canción. Nunca recuerdo su letra. → Es una canción cuya letra nunca recuerdo.", "It's a song whose lyrics I never remember. (cuya letra va al principio de la relativa)"],
        ],
        [
          fb("Une.", "Conocí a una chica. Su hermano juega al fútbol. → Conocí a una chica ___ hermano juega al fútbol.", "cuyo", "«Su» se sustituye por «cuyo», que concuerda con «hermano», no con «chica»."),
          fb("Une.", "Es un pintor. Admiro mucho sus retratos. → Es un pintor ___ retratos admiro mucho.", "cuyos", "Sus retratos era el complemento de admiro: pasa al principio de la relativa como «cuyos retratos», concordando con retratos."),
        ]
      ),
    ],
    [
      fb("Une.", "Leí un libro. Su final me sorprendió. → Leí un libro ___ final me sorprendió.", "cuyo", "«Su» se sustituye por «cuyo», que concuerda con «final» (masculino singular)."),
      fb("Une.", "Hay un restaurante. Sus precios son muy bajos. → Hay un restaurante ___ precios son muy bajos.", "cuyos", "«Sus» se sustituye por «cuyos», que concuerda con «precios» (masculino plural)."),
      fb("Une.", "Es un país. Su capital es pequeña. → Es un país ___ capital es pequeña.", "cuya", "«Su» se sustituye por «cuya», que concuerda con «capital» (femenino singular), aunque país sea masculino."),
      fb("Une.", "Tengo una vecina. Sus plantas son enormes. → Tengo una vecina ___ plantas son enormes.", "cuyas", "«Sus» se sustituye por «cuyas», que concuerda con «plantas» (femenino plural)."),
      fb("Une.", "Es el profesor. Su clase es la mejor. → Es el profesor ___ clase es la mejor.", "cuya", "«Su» se sustituye por «cuya», que concuerda con «clase», no con «profesor»."),
      toEs("I met a man whose daughter lives in Japan.", "Conocí a un hombre cuya hija vive en Japón.", "«Cuyo» concuerda con lo poseído («hija»), no con «un hombre».", ["Conocí a un señor cuya hija vive en Japón."]),
      toEs("Tengo una amiga. Trabajé con su madre.", "Tengo una amiga con cuya madre trabajé.", "La preposición de la segunda frase (con su madre) se adelanta junto con cuyo: con cuya madre, y cuya concuerda con madre.", [], "Transforma las dos frases en una sola con cuyo."),
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
        [
          "Recuerda la regla: el cual, la cual, los cuales y las cuales concuerdan con el antecedente (el sustantivo que va justo antes de la preposición) y aparecen sobre todo tras preposiciones largas o locuciones: el informe según el cual…, la reunión tras la cual…, los métodos mediante los cuales…",
          "¿Por qué no basta «que»? Detrás de una preposición, «que» solo no deja ver a qué sustantivo se refiere; el artículo (el, la, los, las) recupera el género y el número del antecedente. Por eso «según que» o «tras que» son imposibles. Con preposiciones breves también vale «el que»; tras según y tras cuantificadores (dos de, ninguna de) lo natural es el cual.",
        ],
        [
          ["Es el informe según el cual los precios subirán.", "It's the report according to which prices will rise. (el cual → informe)"],
          ["Hubo una crisis tras la cual cerraron cien tiendas.", "There was a crisis after which a hundred shops closed. (la cual → crisis)"],
          ["Tengo cinco sobrinos, dos de los cuales son gemelos.", "I have five nephews, two of whom are twins. (cuantificador + de los cuales)"],
        ],
        [
          { ...fb("Estación 1: completa con la forma correcta de «el cual».", "Fue una reunión tras ___ todos dimitieron.", "la cual", "Tras preposición, el cual concuerda con el antecedente: reunión (femenino singular) → la cual."), altAnswers: ["la que"] },
          fb("Estación 1: completa con la forma correcta de «el cual».", "Recibí diez correos, ninguno de ___ era importante.", "los cuales", "Tras un cuantificador (ninguno de) se usa de los cuales, que concuerda con correos; «de que» es imposible."),
        ]
      ),
    ],
    [
      { ...fb("Estación 1: completa con la forma correcta de «el cual».", "Son las razones por ___ me fui.", "las cuales", "Tras preposición, el cual concuerda con el antecedente: razones (femenino plural) → las cuales."), altAnswers: ["las que"] },
      fb("Estación 2: completa con la forma correcta de «el cual».", "Es una ley según ___ los alquileres bajarán.", "la cual", "Según exige artículo + cual: ley es femenino → según la cual."),
      fb("Estación 2: completa con la forma correcta de «el cual».", "Estos son los métodos mediante ___ se fabrica el vidrio.", "los cuales", "Mediante + el cual concordando con métodos (masculino plural) → los cuales; el vidrio no es el antecedente."),
      { ...fb("Estación 3: completa con la forma correcta de «el cual».", "Es el puente bajo ___ vivía el pintor.", "el cual", "Tras preposición, el cual concuerda con el antecedente: puente → el cual."), altAnswers: ["el que"] },
      fb("Estación 3: completa con la forma correcta de «el cual».", "Tengo tres hermanos, dos de ___ viven en Chile.", "los cuales", "Tras cuantificadores como «dos de» se usa «los cuales» (o «los que»), nunca «que» solo."),
      mc(
        "«Presentó un estudio según ___ el café es saludable.»",
        ["el cual", "la cual", "cuyo", "que"],
        0,
        "Tras una preposición como «según» se usa artículo + cual, concordando con el antecedente: el estudio → según el cual. «La cual» no concuerda, «cuyo» indica posesión y «que» solo no va tras según."
      ),
      toEs("These are the walls inside which the monks lived.", "Estos son los muros dentro de los cuales vivían los monjes.", "Tras una locución (dentro de) se usa artículo + cual: los cuales concuerda con muros.", ["Estos son los muros dentro de los que vivían los monjes.", "Estas son las murallas dentro de las cuales vivían los monjes."]),
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
        [
          "Recuerda la regla: cuyo ocupa el lugar del posesivo su, y por eso concuerda con lo poseído (lo que viene justo detrás), nunca con el poseedor. El error típico es dejarse llevar por el primer sustantivo que se oye: ✗ Es un autor cuya libros (por «la» idea de autora o por costumbre) → ✓ cuyos libros. Otros dos errores frecuentes: dejar el posesivo (✗ cuyo su coche) o añadir artículo (✗ cuya la directora).",
          "Lee el párrafo y busca el único error: «María, cuyo hijo estudia en Londres, vive aquí. El pueblo, cuya iglesia es románica, es precioso. Es un autor cuya libros no conozco. Es la vecina cuyo perro siempre ladra.»",
        ],
        [
          ["María, cuyo hijo estudia en Londres, vive aquí.", "María, whose son studies in London, lives here. (cuyo → hijo, aunque María sea mujer)"],
          ["El pueblo, cuya iglesia es románica, es precioso.", "The village, whose church is Romanesque, is beautiful. (cuya → iglesia)"],
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
      toEs("Es un autor cuya libros no conozco.", "Es un autor cuyos libros no conozco.", "«Cuyo» concuerda con lo poseído: «libros» es masculino plural → «cuyos». El poseedor (autor) no decide nada.", [], "Corrige la frase."),
      toEs("Es la chica que su padre es juez.", "Es la chica cuyo padre es juez.", "«Que su» es coloquial e incorrecto en un registro cuidado: la posesión se expresa con cuyo, que concuerda con padre (cuyo), no con la chica.", [], "Corrige la frase."),
      toEs("Es el museo cuyo obras son famosas.", "Es el museo cuyas obras son famosas.", "«Cuyo» concuerda con lo poseído, no con «el museo»: «obras» es femenino plural → «cuyas».", [], "Corrige la frase."),
      toEs("Es el hombre cuyo su coche es rojo.", "Es el hombre cuyo coche es rojo.", "«Cuyo» ya sustituye al posesivo, así que no se añade «su».", [], "Corrige la frase."),
      toEs("Es la empresa cuyo la directora es chilena.", "Es la empresa cuya directora es chilena.", "Tras «cuyo» no va artículo, y concuerda con lo poseído: «cuya directora».", [], "Corrige la frase."),
      toEs("Es un autor cuyos libros no conozco.", "Es un autor cuya novela no conozco.", "Al cambiar lo poseído cambia cuyo: novela es femenino singular → cuya. El autor sigue igual porque no decide la concordancia.", [], "Sustituye «libros» por «novela» y adapta la frase."),
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
    "Elige entre que (relativo general), el cual (tras preposición o para evitar ambigüedad) y cuyo (posesión).",
    "6 min",
    [
      sec(
        "¿Qué necesitas?",
        [
          "Recuerda la regla con tres preguntas, en este orden. ¿Hay posesión (el libro del autor)? → cuyo, concordando con lo poseído (el autor cuyo libro leí). ¿Hay una preposición delante del relativo, sobre todo larga (según, durante, junto a)? → el cual / la cual, concordando con el antecedente (la teoría según la cual…). Si no hay ni posesión ni preposición → que, el relativo general (el libro que leí).",
          "El cual también sirve, entre comas, para deshacer una ambigüedad gracias a su género: El amigo de mi hermana, el cual vive en Roma… (vive en Roma el amigo). Sin coma ni preposición, nunca: ✗ la película la cual vimos.",
        ],
        [
          ["El libro que leí era de mi abuelo.", "The book I read was my grandfather's. (sin posesión ni preposición: que)"],
          ["Es la teoría según la cual el universo se expande.", "It's the theory according to which the universe is expanding. (preposición: la cual)"],
          ["El amigo de mi hermana, el cual vive en Roma, viene mañana.", "My sister's friend, who lives in Rome, is coming tomorrow. (el cual → el amigo, sin ambigüedad)"],
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
      mc("«La película ___ vimos ganó el Óscar.»", ["que", "cuya", "la cual", "cuyo"], 0, "Sin preposición y sin posesión, el relativo general es «que»: la película que vimos. «Cuya/cuyo» indican posesión y «la cual» no es posible sin preposición ni coma."),
      mc("«Es el método según ___ aprendí a leer.»", ["el cual", "que", "cuya", "cuyo"], 0, "Tras una preposición como «según» se usa artículo + cual, concordando con método: según el cual. «Que» solo no va tras según, y «cuya/cuyo» indican posesión."),
      fb("Completa con que, el cual o cuyo, en la forma correcta.", "Es el profesor ___ alumnos ganaron el premio.", "cuyos", "Para expresar posesión se usa «cuyo», que concuerda con «alumnos»."),
      fb("Completa con que, el cual o cuyo, en la forma correcta.", "Es el profesor ___ me dio clase en primaria.", "que", "Sin posesión ni preposición, el relativo normal es «que»."),
      { ...fb("Completa con que, el cual o cuyo, en la forma correcta.", "Es un tema sobre ___ se ha escrito mucho.", "el cual", "Hay preposición (sobre) y no hay posesión: el cual, concordando con tema (también «el que»)."), altAnswers: ["el que"] },
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
        [
          "Recuerda la regla antes de completar la nota: en un texto formal, cuyo (posesión) concuerda con lo poseído, y el cual (tras preposición) concuerda con el antecedente. Para decidir, mira qué viene detrás del hueco: si es un sustantivo que pertenece al anterior (___ colección), cuyo; si es el verbo o el resto de la relativa tras una preposición (para ___ se han restaurado), el cual.",
          "La nota: «El museo, cuya colección supera las diez mil piezas, inaugura una sala dedicada a Goya. La exposición, para la cual se han restaurado veinte cuadros, estará abierta hasta marzo. Los visitantes cuyas entradas sean de grupo tendrán descuento.»",
        ],
        [
          ["La biblioteca, cuyo fondo antiguo es enorme, abre los domingos.", "The library, whose old collection is huge, opens on Sundays. (cuyo → fondo)"],
          ["La sala, en la cual se exponen los grabados, es nueva.", "The hall, in which the prints are displayed, is new. (la cual → sala)"],
        ],
        [
          fb("Completa.", "El museo, ___ colección supera las diez mil piezas…", "cuya", "Detrás del hueco hay un sustantivo poseído (la colección del museo): cuyo, que concuerda con colección (femenino singular)."),
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
    "Ronda rápida de conectores: completa huecos, traduce y ordena frases con contraste, causa, consecuencia y adición.",
    "5 min",
    [
      sec(
        "Recuerda la regla: primero la relación, luego el conector",
        [
          "Antes de elegir, pregúntate qué relación hay entre las dos ideas. Contraste (lo segundo va contra lo esperado): aunque, a pesar de (que), sin embargo, no obstante. Causa (lo segundo explica lo primero): ya que, puesto que, dado que, como. Consecuencia (lo segundo es el resultado): así que, de modo que, por lo tanto, por consiguiente. Adición (lo segundo suma): además, asimismo, es más.",
          "Dos detalles de posición: como causal va siempre al principio («Como llovía, me quedé»; detrás significaría «de la manera que»), y los conectores como sin embargo, por lo tanto o además van entre pausas (; … ,).",
        ],
        [
          ["Como había huelga, fuimos andando.", "As there was a strike, we walked. (causa: como al principio)"],
          ["Había huelga; por lo tanto, fuimos andando.", "There was a strike; therefore, we walked. (la misma idea, vista como consecuencia)"],
          ["Había huelga; sin embargo, llegamos a tiempo.", "There was a strike; however, we arrived on time. (contraste: resultado inesperado)"],
        ],
        [
          fb("Rápido.", "___ no contestabas, te dejé un mensaje.", "Como", "Causa al principio de la oración: como (o ya que, puesto que). «Porque» no suele abrir la frase, y «aunque» expresaría contraste."),
        ]
      ),
    ],
    [
      { ...fb("Rápido.", "Es tarde, ___ me voy a dormir.", "así que", "Irse a dormir es el resultado de que sea tarde: consecuencia, y en registro hablado, así que."), altAnswers: ["de modo que", "de manera que", "por lo que"] },
      { ...fb("Rápido.", "Es tarde; ___, no tengo sueño.", "sin embargo", "Lo esperable sería tener sueño: el segundo hecho va en contra de esa expectativa, así que contraste (sin embargo, no obstante, aun así)."), altAnswers: ["no obstante", "aun así"] },
      fb("Rápido.", "___ de su edad, corre maratones.", "A pesar", "Detrás viene de + sustantivo (su edad): solo encaja la preposición a pesar de. Aunque necesitaría un verbo conjugado."),
      fb("Rápido.", "Es inteligente y, ___, muy trabajadora.", "además", "«Además» añade una cualidad más en la misma dirección; no hay contraste ni causa."),
      { ...fb("Rápido.", "___ todos están de acuerdo, empezamos.", "Puesto que", "Estar de acuerdo es la causa conocida de empezar: puesto que, ya que, dado que o como, al principio."), altAnswers: ["Ya que", "Dado que", "Como"] },
      { ...fb("Rápido.", "Hubo un error; ___, se repetirá la votación.", "por consiguiente", "Repetir la votación es la consecuencia del error; en un aviso oficial, conector formal: por consiguiente, por lo tanto."), altAnswers: ["por lo tanto", "por tanto", "en consecuencia"] },
      fb("Rápido.", "No me gusta; ___, lo odio.", "es más", "Odiar es más fuerte que no gustar: es más añade una idea que supera a la anterior."),
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
        "Recuerda la regla: misma lógica, otro registro",
        [
          "Subir el registro no cambia la relación lógica, solo la palabra que la marca: pero → sin embargo / no obstante; así que → por lo tanto / por consiguiente; porque / como → ya que / dado que / puesto que; y además → asimismo; aunque → a pesar de (que) / pese a (que).",
          "¿Por qué no basta con «pero» en un informe? Porque los conectores coloquiales son cortos y van pegados a la frase; los formales van entre pausas (; no obstante,) y hacen visible la estructura del argumento, que es lo que espera el lector de un texto escrito. Cuidado: el conector nuevo debe expresar la MISMA relación; un «por consiguiente» en lugar de «pero» cambia el sentido.",
        ],
        [
          ["Las ventas han crecido; no obstante, el margen ha bajado.", "Sales have grown; nevertheless, the margin has fallen. (pero → no obstante)"],
          ["Faltaba personal; por consiguiente, se cerró la sala.", "There was a staff shortage; consequently, the room was closed. (así que → por consiguiente)"],
          ["Pese a las quejas, se mantuvo el horario.", "Despite the complaints, the timetable was kept. (aunque hubo quejas → pese a + sustantivo)"],
        ],
        [
          fb("Transforma al registro formal.", "Los resultados son buenos, pero hay que mejorar. → Los resultados son buenos; ___, hay que mejorar.", "no obstante", "«No obstante» (o «sin embargo») es la versión formal de «pero»: misma relación de contraste, entre punto y coma y coma."),
        ]
      ),
    ],
    [
      fb("Transforma al registro formal.", "Faltan datos, así que no podemos decidir. → Faltan datos; ___, no podemos decidir.", "por consiguiente", "«Por consiguiente» (o «por lo tanto») es la versión formal de «así que»: los dos marcan consecuencia."),
      fb("Transforma al registro formal.", "Cancelamos el acto porque llovía. → Cancelamos el acto ___ llovía.", "dado que", "«Dado que» (o «ya que», «puesto que») es una alternativa formal a «porque»: la causa se mantiene."),
      fb("Transforma al registro formal.", "Y además, el proyecto es barato. → ___, el proyecto es económico.", "Asimismo", "«Asimismo» es la versión formal de «y además»; fíjate también en el léxico: barato → económico."),
      fb("Transforma al registro formal.", "Aunque era caro, lo compraron. → ___ de su precio, lo adquirieron.", "A pesar", "«A pesar de» + sustantivo (su precio) equivale a «aunque» + verbo (era caro); comprar sube a adquirir."),
      fb("Transforma al registro formal.", "Como no había quórum, se suspendió. → ___ no había quórum, se suspendió.", "Puesto que", "«Puesto que» (o «dado que») es la versión formal de «como» causal y también puede abrir la oración."),
      toEs("Therefore, we recommend approving the project.", "Por lo tanto, recomendamos aprobar el proyecto.", "«Por lo tanto» introduce la conclusión o la recomendación final de un informe.", ["Por consiguiente, recomendamos aprobar el proyecto.", "Por lo tanto, recomendamos que se apruebe el proyecto."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-habla-de-ti-opinion",
    "Habla de ti: tu opinión argumentada",
    "Defiende una opinión con conectores de nivel Avanzado.",
    "6 min",
    [
      sec(
        "Recuerda la regla: opinión, razones, objeción, conclusión",
        [
          "Una opinión convence cuando el oyente ve cómo encaja cada frase. Opinión → creo que / me parece que + indicativo. Razón → ya que, puesto que, dado que (causa). Más razones → además, es más. Objeción que no cambia tu postura → aunque + verbo, a pesar de + sustantivo / infinitivo, sin embargo. Conclusión → por lo tanto, por eso, en definitiva.",
          "¿Por qué conceder una objeción? Porque mostrar que conoces el lado contrario («Aunque la ciudad ofrece más cultura, …») hace tu opinión más creíble. Fíjate en la gramática de cada pieza: aunque lleva verbo conjugado; a pesar de, sustantivo o infinitivo.",
        ],
        [
          ["Creo que es mejor alquilar, ya que te da más libertad.", "I think renting is better, since it gives you more freedom. (opinión + causa)"],
          ["Aunque comprar es una inversión, ahora los precios son muy altos.", "Although buying is an investment, prices are very high right now. (objeción con aunque + indicativo)"],
          ["En definitiva, todo depende de tus planes.", "In short, it all depends on your plans. (conclusión)"],
        ],
        [
          { ...fb("Tu argumento.", "Prefiero el campo, ___ hay menos estrés.", "ya que", "«Ya que» introduce la causa que justifica la preferencia (también valen «porque», «puesto que» y «dado que»). «Aunque» sería una objeción, no una razón."), altAnswers: ["porque", "puesto que", "dado que"] },
        ]
      ),
    ],
    [
      fb("Completa tu argumento.", "Prefiero el campo porque hay menos estrés. ___, la vivienda es más barata.", "Además", "«Además» añade otro argumento en la misma dirección que el anterior."),
      { ...fb("Completa tu argumento.", "La vivienda es más barata. ___, hay menos servicios.", "Sin embargo", "Tener menos servicios va en contra de lo anterior: «sin embargo» introduce un argumento contrario en una oración nueva."), altAnswers: ["No obstante", "Aun así"] },
      { ...fb("Completa tu argumento.", "___ vivir lejos, se puede trabajar para empresas de la ciudad.", "A pesar de", "Detrás va un infinitivo (vivir): hace falta la preposición «a pesar de» (o «pese a»). «Aunque» necesitaría verbo conjugado: aunque vivas lejos."), altAnswers: ["Pese a"] },
      { ...fb("Completa tu argumento.", "Hay ventajas e inconvenientes. ___, la respuesta cambia según la etapa de la vida.", "Por lo tanto", "«Por lo tanto» introduce la conclusión que se saca de lo anterior."), altAnswers: ["Por consiguiente", "Por eso", "Por ello", "Por tanto", "En definitiva"] },
      { ...fb("Completa tu argumento.", "___ la ciudad ofrece más cultura, yo elijo el campo.", "Aunque", "«Aunque» + verbo conjugado (ofrece) presenta una objeción que no cambia la decisión. «A pesar de» necesitaría un sustantivo."), altAnswers: ["A pesar de que", "Si bien"] },
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
        "Recuerda la regla: el conector se oye en la pausa",
        [
          "Al escuchar, la entonación te dice qué tipo de pieza es cada conector. Los conectores (sin embargo, no obstante, por lo tanto, además, en cambio) van entre dos pausas: se oye un pequeño corte antes y otro después, y por eso se escriben entre punto y coma (o punto) y coma: «; sin embargo,». Las conjunciones (aunque, ya que, así que, porque) van pegadas a su verbo, sin pausa detrás: «, así que tendremos…».",
          "Y la preposición a pesar de va seguida de sustantivo o infinitivo; si oyes un verbo conjugado detrás, falta un que: a pesar de que.",
        ],
        [
          ["El plan es ambicioso; sin embargo, es realista.", "The plan is ambitious; however, it's realistic. (pausa antes y después: ; sin embargo,)"],
          ["Es caro, así que lo pensaré.", "It's expensive, so I'll think about it. (sin pausa tras así que)"],
        ],
        [
          wo("A pesar de la crisis, las ventas aumentaron.", "A pesar de + sustantivo (la crisis); la coma marca el final del complemento antepuesto.", "Despite the crisis, sales increased."),
          mc(
            "¿Cuál está bien puntuada?",
            ["Llovía; no obstante, el partido siguió.", "Llovía, no obstante el partido, siguió.", "Llovía no obstante, el partido siguió.", "Llovía; no obstante el partido siguió."],
            0,
            "No obstante como conector va entre pausas: punto y coma delante y coma detrás. En las otras falta una de las dos pausas o la coma cae en un sitio que corta la oración."
          ),
        ]
      ),
    ],
    [
      wo("Dado que nadie se opone, aprobamos la propuesta.", "Dado que introduce la causa conocida y abre la oración; la coma separa la causa de la principal.", "Since nobody objects, we approve the proposal."),
      wo("No tenemos presupuesto, así que tendremos que esperar.", "Así que introduce la consecuencia; va tras coma y sin coma detrás.", "We don't have a budget, so we'll have to wait."),
      wo("El producto es barato y, además, muy resistente.", "Además intercalado va entre comas: «y, además,».", "The product is cheap and, moreover, very durable."),
      wo("Aunque llovía mucho, el partido continuó.", "Aunque + indicativo (llovía) para un hecho real que no impidió la acción.", "Although it was raining hard, the match went on."),
      toEs("Since you're tired, I'll drive.", "Ya que estás cansado, conduzco yo.", "«Ya que» introduce una causa conocida por el oyente y puede abrir la oración; conduzco yo pone el foco en quién conduce.", ["Como estás cansado, conduzco yo.", "Puesto que estás cansada, conduzco yo."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-corrige-enfasis",
    "Corrige el párrafo: énfasis mal construido",
    "Aprende a corregir el pronombre que falta cuando el objeto va antes del verbo, y a pulir hendidas y estructuras con «lo + adjetivo + que».",
    "6 min",
    [
      sec(
        "Recuerda la regla: lo que se adelanta deja un pronombre",
        [
          "Cuando sacas el complemento directo o indirecto de su sitio y lo pones al principio como tema, el verbo necesita un pronombre que lo recoja: «Compré el pan» → «El pan LO compré yo»; «Di el regalo a Ana» → «A Ana LE di el regalo». ¿Por qué? Porque el pronombre marca qué función tiene ese elemento adelantado; sin él, la frase suena incompleta (solo se omite con un contraste muy marcado: «Pan compré, no fruta»).",
          "En las hendidas, ser concuerda con lo destacado (Fueron mis padres quienes…) y el relativo depende de qué destacas: persona → quien / el que; lugar → donde; tiempo → cuando. «Fue en Sevilla que…» se oye mucho en América, pero en España y en registro formal se prefiere donde. Y en «lo + adjetivo + que», el adjetivo concuerda con aquello de lo que hablas: lo cansada que estoy (una mujer).",
        ],
        [
          ["La sopa la hizo mi abuela.", "My grandmother made the soup. (CD antepuesto → la)"],
          ["A mis vecinos les presté la escalera.", "I lent my neighbours the ladder. (CI antepuesto → les)"],
          ["Fue en Granada donde estudié.", "It was in Granada that I studied. (lugar → donde)"],
          ["No sabes lo difíciles que son estos exámenes.", "You don't know how hard these exams are. (difíciles concuerda con exámenes)"],
        ],
        [
          mc(
            "¿Qué falla en «la bici vendí el mes pasado»?",
            ["Falta el pronombre: la bici la vendí el mes pasado.", "Falta «que».", "Debe ser «fue la bici».", "Nada."],
            0,
            "La bici, complemento directo, va delante del verbo, así que se repite con un pronombre: la bici la vendí. No falta «que», y «fue la bici» sería otra estructura (una hendida) con otro sentido."
          ),
        ]
      ),
    ],
    [
      toEs("El pastel compré yo.", "El pastel lo compré yo.", "Un complemento directo antepuesto como tema se retoma con pronombre: «lo compré» (sin pronombre solo es posible con un contraste muy marcado).", [], "Corrige la frase."),
      toEs("Fue en Sevilla que nos conocimos.", "Fue en Sevilla donde nos conocimos.", "Lugar → donde. «Fue en Sevilla que…» es habitual en el habla de América, pero en España y en la escritura formal se prefiere el relativo que corresponde al lugar (donde).", ["Fue en Sevilla donde nos conocimos por primera vez."], "Cambia la frase al registro formal: usa el relativo de lugar."),
      toEs("A tus padres no he visto todavía.", "A tus padres no los he visto todavía.", "El complemento directo de persona antepuesto (a tus padres) se retoma con pronombre: «no los he visto».", ["A tus padres todavía no los he visto."], "Corrige la frase."),
      toEs("No sabes lo cansado que estoy. (lo dice una mujer)", "No sabes lo cansada que estoy.", "En «lo + adjetivo + que», el adjetivo concuerda con quien habla: si es una mujer, «cansada». Lo no cambia: es neutro.", [], "Cambia la frase para que la diga una mujer."),
      toEs("Fue mis padres quienes pagaron.", "Fueron mis padres quienes pagaron.", "Ser concuerda con el elemento destacado: mis padres es plural, así que fueron.", ["Fueron mis padres los que pagaron."], "Corrige la frase."),
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
        "Recuerda la regla: cuatro formas de destacar lo tuyo",
        [
          "Para subrayar lo que te importa, el español mueve la información importante al final o la marca con una estructura fija. Lo que + verbo + ser + lo destacado (Lo que más me importa es mi familia). Ser + persona / lugar / tiempo + quien / donde / cuando (Fue mi tío quien…, Fue en Roma donde…). Lo + adjetivo + que para la intensidad (No te imaginas lo feliz que me hace…). Y el objeto adelantado con pronombre (El café lo tomo solo).",
          "Dos detalles que se olvidan: ser va en el tiempo del verbo (lo que más me ayudó FUE…) y concuerda con lo destacado (Fueron mis padres quienes…); y en «lo + adjetivo + que», el adjetivo concuerda con el sustantivo (lo orgullosos que están mis padres).",
        ],
        [
          ["Lo que más echo de menos es el mar.", "What I miss most is the sea. (lo que + verbo + es)"],
          ["Fue en un viaje a México donde aprendí a bucear.", "It was on a trip to Mexico that I learned to dive. (lugar → donde)"],
          ["No te imaginas lo nerviosa que estaba.", "You can't imagine how nervous I was. (lo + adjetivo + que; nerviosa = lo dice una mujer)"],
        ],
        [
          fb("Tú.", "___ más me importa es mi familia.", "Lo que", "Para destacar una cosa o una idea se usa «lo que» (neutro): «Lo que más me importa es…». «Que» solo o «el que» no funcionan sin un sustantivo al que referirse."),
        ]
      ),
    ],
    [
      { ...fb("Tú.", "Fue mi profesora de música ___ me animó a cantar.", "quien", "En las hendidas de persona se usa «quien» (o «la que», que concuerda en género): «Fue mi profesora quien…». «Que» solo no basta en el español estándar."), altAnswers: ["la que"] },
      fb("Tú.", "No te imaginas lo feliz ___ me hace viajar.", "que", "La estructura de intensidad es «lo + adjetivo + que»: «lo feliz que me hace». El inglés «how» no se traduce con «cómo» aquí."),
      fb("Tú.", "El té ___ tomo siempre con limón.", "lo", "El complemento directo antepuesto (el té) se retoma con pronombre: masculino singular → «lo»."),
      fb("Tú.", "Fue en la universidad ___ descubrí mi vocación.", "donde", "Lo destacado es un lugar (en la universidad), así que el relativo es «donde»."),
      fb("Tú.", "Lo que menos soporto ___ la impuntualidad.", "es", "La hendida «lo que + verbo» se completa con «es» + lo destacado; presente, porque soporto está en presente."),
      toEs("What I like most is reading on the beach.", "Lo que más me gusta es leer en la playa.", "Para destacar algo se usa «lo que»: «Lo que más me gusta es…»; lo destacado (leer) va al final.", []),
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
        "Recuerda la regla: una reseña con fuerza",
        [
          "Una buena crítica combina las dos herramientas del tema. Énfasis: lo que + verbo + ser (Lo que vimos fue histórico), ser + persona + quien (Fue la cantante quien…), objeto adelantado + pronombre (La canción la cantó todo el público), lo + adjetivo + que (No se imaginan lo emocionante que fue) y jamás / nunca delante del verbo, sin no. Conectores: a pesar de + sustantivo (contraste), sin embargo (contraste entre oraciones), además (suma), por lo tanto (conclusión o recomendación).",
          "¿Por qué funcionan en una reseña? Porque el lector busca la opinión: estas estructuras colocan la valoración (histórico, emocionante, la cantante) en la posición de foco, y los conectores guían hacia la recomendación final.",
        ],
        [
          ["Lo que más me gustó fue la voz del cantante.", "What I liked most was the singer's voice. (lo que + verbo + fue)"],
          ["El primer tema lo tocaron sin luces.", "They played the first song without lights. (objeto adelantado → lo)"],
          ["Nunca había oído un público tan entregado.", "I had never heard such a devoted audience. (nunca delante: sin no)"],
        ],
        [
          fb("Completa la crítica.", "___ vimos anoche fue histórico.", "Lo que", "Para destacar una cosa o un hecho se usa «lo que» (neutro): «Lo que vimos fue histórico». «Que» solo no puede abrir la frase."),
        ]
      ),
    ],
    [
      fb("Completa la crítica.", "___ de la lluvia, nadie se fue.", "A pesar", "Detrás viene de + sustantivo (la lluvia): solo encaja «a pesar de». La lluvia no impidió lo principal."),
      fb("Completa la crítica.", "La última canción ___ cantó todo el público.", "la", "El complemento directo antepuesto se retoma con pronombre: «la canción» (femenino singular) → «la»."),
      fb("Completa la crítica.", "No se imaginan lo ___ que fue.", "emocionante", "En «lo + adjetivo + que», el adjetivo expresa intensidad: «lo emocionante que fue».", "thrilling"),
      { ...fb("Completa la crítica.", "___ había visto algo así.", "Jamás", "Si el adverbio negativo («jamás», «nunca») va antes del verbo, no se usa «no»: «Jamás había visto…»."), altAnswers: ["Nunca"] },
      fb("Completa la crítica.", "___, les recomiendo que no se pierdan la gira.", "Por lo tanto", "«Por lo tanto» introduce la conclusión o recomendación final que se saca de todo lo anterior."),
      mc(
        "«Fue la cantante ___ pidió silencio al final.»",
        ["quien", "que la", "cual", "cuya"],
        0,
        "En una hendida con persona se usa «quien» (o «la que»): fue la cantante quien pidió silencio. «Que la» añade un pronombre que sobra, «cual» necesita artículo y «cuya» indica posesión."
      ),
      toEs("It was the guitarist who stole the show.", "Fue el guitarrista quien se llevó todos los aplausos.", "En las oraciones hendidas de persona se usa «quien» (o «el que»): «Fue el guitarrista quien…».", ["Fue el guitarrista el que se llevó todos los aplausos.", "Fue el guitarrista quien triunfó."]),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2d-ronda-cuyo-el-cual",
    "Ronda rápida: cuyo y el cual",
    "Practica cuyo (concuerda con lo poseído) y el cual / la cual / los cuales (concuerdan con el antecedente) en huecos, traducciones y frases ordenadas.",
    "5 min",
    [
      sec(
        "Recuerda la regla: dos concordancias distintas",
        [
          "Cuyo significa «de quien / del cual» y funciona como un posesivo (su): por eso concuerda con lo POSEÍDO, la palabra que va detrás, no con el poseedor: la casa cuyas ventanas (ventanas → cuyas), el autor cuya novela (novela → cuya). El cual / la cual / los cuales / las cuales es un relativo con artículo que recoge al ANTECEDENTE, sobre todo detrás de una preposición: la casa en la cual vivo, los amigos con los cuales viajé.",
          "Error típico: «que su» en lugar de cuyo («la empresa que sus ventas…»). Es muy oído, pero no es correcto en la lengua cuidada. Y el cual / la que son intercambiables tras preposición; el cual suena más formal y se prefiere tras preposiciones largas (detrás de las cuales).",
        ],
        [
          ["Es el pueblo cuyas fiestas son famosas.", "It's the town whose festivals are famous. (cuyas → fiestas)"],
          ["Es la mesa sobre la cual dejé las llaves.", "It's the table on which I left the keys. (la cual → mesa)"],
        ],
        [
          fb("Rápido.", "Es la casa ___ ventanas dan al mar.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «ventanas» (femenino plural) → «cuyas». «Cuya» concordaría con casa, que es el error típico."),
        ]
      ),
    ],
    [
      { ...fb("Rápido.", "Es la casa en ___ nací.", "la cual", "Tras preposición, «el cual» concuerda con el antecedente: «casa» → «la cual»."), altAnswers: ["la que", "que"] },
      fb("Rápido.", "Es el árbol ___ ramas tocan el tejado.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «ramas» → «cuyas»."),
      { ...fb("Rápido.", "Es el árbol bajo ___ nos besamos.", "el cual", "Tras preposición, «el cual» concuerda con el antecedente: «árbol» → «el cual»."), altAnswers: ["el que"] },
      fb("Rápido.", "Son los libros ___ autor ganó el Nobel.", "cuyo", "«Cuyo» concuerda con lo poseído, no con el poseedor: «autor» → «cuyo», aunque libros sea plural."),
      { ...fb("Rápido.", "Son los libros gracias a ___ aprendí a leer.", "los cuales", "Tras preposición, «el cual» concuerda con el antecedente: «libros» → «los cuales»."), altAnswers: ["los que"] },
      fb("Rápido.", "Es la amiga ___ hermanos viven en Perú.", "cuyos", "«Cuyo» concuerda con lo poseído, no con el poseedor: «hermanos» → «cuyos», aunque amiga sea femenino."),
      { ...fb("Rápido.", "Es la amiga con ___ viajé a Perú.", "la cual", "Tras preposición, «el cual» concuerda con el antecedente: «amiga» → «la cual»."), altAnswers: ["la que", "quien"] },
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
        "Recuerda la regla: cuyo y el cual al oído",
        [
          "Cuyo / cuya / cuyos / cuyas es un posesivo (= su) y concuerda con la palabra que va DETRÁS (lo poseído): una ciudad cuyo centro, un autor cuyas novelas. El cual / la cual / los cuales / las cuales recoge al antecedente, normalmente tras una preposición (según el cual, por la cual, uno de los cuales).",
          "Al escuchar, la terminación de cuyo te la da el sustantivo siguiente, no el anterior: si oyes «…cuyas novelas», escribe cuyas aunque antes hablaras de un hombre. Son típicos de textos escritos, noticias e informes; en la conversación se prefiere «que» o «el que».",
        ],
        [
          ["El pueblo, cuyos habitantes son pocos, resiste.", "The village, whose inhabitants are few, holds on. (cuyos → habitantes)"],
          ["Tengo tres hermanas, dos de las cuales son médicas.", "I have three sisters, two of whom are doctors. (las cuales → hermanas)"],
        ],
        [
          wo("Es una ciudad cuyo centro es muy antiguo.", "Cuyo concuerda con centro (masculino singular), lo poseído, aunque ciudad sea femenino.", "It's a city whose centre is very old."),
          mc(
            "Oyes: «Es un pintor ___ obras están en el Prado». ¿Qué escribes?",
            ["cuyas", "cuyo", "cuya", "el cual"],
            0,
            "Cuyo concuerda con lo poseído, que va detrás: obras (femenino plural) → cuyas. «Cuyo» concordaría con pintor, que es el error típico, y «el cual» no expresa posesión."
          ),
        ]
      ),
    ],
    [
      wo("Es el informe según el cual el paro ha bajado.", "Según el cual: el relativo concuerda con informe (masculino singular) tras la preposición según.", "It's the report according to which unemployment has fallen."),
      wo("Conocí a una escritora cuyas novelas me encantan.", "Cuyas concuerda con novelas (femenino plural), lo poseído.", "I met a writer whose novels I love."),
      wo("Es la razón por la cual dimitió.", "Por la cual: concuerda con razón (femenino singular); equivale a «por la que» o «por eso».", "It's the reason why he resigned."),
      wo("Tengo dos primos, uno de los cuales vive en Cuba.", "Uno de los cuales: los cuales recoge a primos; el verbo va en singular porque el sujeto es uno.", "I have two cousins, one of whom lives in Cuba."),
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
        [
          "Recuerda la regla: se busca, necesito, quiero + algo que todavía no tienes ni identificas → la relativa va en subjuntivo. Se vende, se alquila, tengo, ofrezco + algo que ya existe y conoces → indicativo.",
          "¿Por qué? Quien vende describe una cosa real (la moto tiene cinco mil kilómetros: es un dato). Quien busca describe un requisito: la persona que cumpla ese requisito aún no tiene cara, así que el verbo no puede afirmarse como real. Por eso el mismo verbo cambia según el anuncio: «Se busca piso que tenga terraza» frente a «Se vende piso que tiene terraza».",
        ],
        [
          ["Se busca camarero que hable inglés.", "Waiter who speaks English wanted. (aún desconocido: subjuntivo)"],
          ["Se vende piso que tiene garaje.", "Flat with garage for sale. (existe: indicativo)"],
          ["¿Alguien sabe de una academia que dé clases de noche?", "Does anyone know of an academy that gives evening classes? (pregunta por la existencia: subjuntivo)"],
          ["No hay ninguna farmacia que abra a esta hora.", "There's no pharmacy open at this hour. (negado: subjuntivo)"],
        ],
        [
          fb("Estación 1.", "Se busca cocinero que ___ experiencia en cocina japonesa. (tener)", "tenga", "El cocinero aún no existe para la empresa: es un requisito → subjuntivo, tenga."),
          mc(
            "«Ofrezco una habitación que ___ baño propio.»",
            ["tiene", "tenga", "tuviera", "tendría"],
            0,
            "Quien ofrece describe algo que ya existe → indicativo: tiene. «Tenga» y «tuviera» son subjuntivo (servirían si la habitación se estuviera buscando) y «tendría» es condicional."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Se vende moto que ___ solo cinco mil kilómetros. (tener)", "tiene", "Se vende → la moto existe y el dato es real → indicativo: tiene."),
      fb("Estación 2.", "Familia busca canguro que ___ con coche. (venir)", "venga", "La canguro todavía no está elegida: requisito → subjuntivo. Venir toma la raíz de vengo: venga."),
      fb("Estación 2.", "Alquilo estudio que ___ junto a la universidad. (estar)", "está", "Alquilo → el estudio existe → indicativo. Ubicación → estar: está."),
      fb("Estación 3.", "¿Alguien conoce un taller que ___ los domingos? (abrir)", "abra", "Preguntas si existe ese taller: no lo das por real → subjuntivo, abra."),
      fb("Estación 3.", "No hay ningún taller aquí que ___ los domingos. (abrir)", "abra", "Con un antecedente negado (no hay ningún) no hay nada real que describir → subjuntivo: abra."),
      mc(
        "«Busco a la persona que ___ mi cartera ayer.» (es una persona concreta: la vi recogerla del suelo)",
        ["encontró", "encontrara", "encuentre", "encontraría"],
        0,
        "Sabes que alguien encontró la cartera: antecedente concreto → indicativo, encontró. «Encontrara» y «encuentre» son subjuntivo (persona desconocida), y «encontraría» es condicional. Ojo: «busco» no basta para el subjuntivo; lo que decide es si el antecedente es real."
      ),
      toEs("I'm looking for a flat that allows pets.", "Busco un piso que admita mascotas.", "El piso buscado aún no es concreto, así que la relativa va en subjuntivo: «admita».", ["Busco un piso que acepte mascotas.", "Busco un piso donde admitan mascotas."]),
      toEs("Se busca dependienta que sabe idiomas.", "Se busca dependienta que sepa idiomas.", "Se busca → la dependienta todavía es un requisito, no una persona concreta → subjuntivo: sepa (irregular, de sé). «Sabe» afirmaría que ya existe.", [], "Corrige el anuncio."),
      toEs("Vendo un coche que gasta poco.", "Busco un coche que gaste poco.", "Al pasar de vender (el coche existe) a buscar (el coche es un requisito), la relativa pasa de indicativo (gasta) a subjuntivo (gaste).", ["Estoy buscando un coche que gaste poco."], "Cambia «vendo» por «busco»."),
    ]
  ),
  L(
    "b2-vocabulary-practice-1",
    "b2d-rep-relativas-pasado",
    "Pares mínimos: busco alguien que sepa / buscaba alguien que supiera",
    "Relativas en subjuntivo en presente y en pasado: un primer contacto con el imperfecto de subjuntivo (quisiera, tuviera), que se estudia a fondo en la lección «Imperfecto de Subjuntivo y Secuencia de Tiempos».",
    "6 min",
    [
      sec(
        "Secuencia en la relativa",
        [
          "Recuerda la regla: la decisión indicativo / subjuntivo no cambia (antecedente desconocido o negado → subjuntivo), pero el tiempo del subjuntivo sigue al verbo principal. Principal en presente o futuro → presente de subjuntivo (No hay nadie que me entienda). Principal en pasado o condicional → imperfecto de subjuntivo (No había nadie que me entendiera; Me gustaría un trabajo que me permitiera viajar).",
          "¿Por qué? Los dos verbos deben situarse en el mismo plano temporal: si buscabas algo ayer, el requisito también pertenece a ayer. Para formar el imperfecto de subjuntivo, toma «ellos» del pretérito, quita -ron y añade -ra: entendieron → entendiera, tuvieron → tuviera, dijeron → dijera. Así las irregularidades del pretérito pasan solas al subjuntivo.",
        ],
        [
          ["Me gustaría un trabajo que me permitiera viajar.", "I'd like a job that would let me travel. (condicional → imperfecto de subjuntivo)"],
          ["Busco un piso que esté cerca del trabajo.", "I'm looking for a flat that's near work. (presente → presente de subjuntivo)"],
          ["Buscaba un piso que estuviera cerca del trabajo.", "I was looking for a flat near work. (pasado → estuvieron → estuviera)"],
        ],
        [
          fb("Par.", "No había nadie que ___ ayudarme. (querer)", "quisiera", "Principal en pasado (había) → imperfecto de subjuntivo. Querer: quisieron → quisiera."),
          mc(
            "«Necesitábamos un mecánico que ___ venir el domingo.»",
            ["pudiera", "pueda", "podía", "podrá"],
            0,
            "Necesitábamos (pasado) + mecánico desconocido → imperfecto de subjuntivo: pudieron → pudiera. «Pueda» es presente de subjuntivo (no concuerda con el pasado), «podía» es indicativo (mecánico conocido) y «podrá» es futuro."
          ),
        ]
      ),
    ],
    [
      fb("Par.", "No hay nadie que ___ ayudarme. (querer)", "quiera", "Principal en presente (hay) + antecedente negado → presente de subjuntivo: quiera."),
      fb("Par.", "Queríamos un hotel que ___ piscina. (tener)", "tuviera", "Principal en pasado (queríamos) → imperfecto de subjuntivo: tuvieron → tuviera."),
      fb("Par.", "Queremos un hotel que ___ piscina. (tener)", "tenga", "Principal en presente (queremos) → presente de subjuntivo: tenga."),
      fb("Par.", "Me encantaría un coche que no ___ gasolina. (gastar)", "gastara", "Me encantaría (condicional) se trata como un pasado → imperfecto de subjuntivo: gastaron → gastara."),
      fb("Par.", "Necesitaba a alguien que ___ francés. (traducir)", "tradujera", "Pasado → imperfecto de subjuntivo. Traducir tiene pretérito irregular (tradujeron), y de ahí sale tradujera, sin i."),
      fb("Par.", "Necesito a alguien que ___ francés. (traducir)", "traduzca", "Presente → presente de subjuntivo. Traducir: traduzco → traduzca."),
      toEs("There was nobody who could help us.", "No había nadie que pudiera ayudarnos.", "Antecedente negativo en pasado → imperfecto de subjuntivo: «pudiera».", ["No había nadie que nos pudiera ayudar.", "No había nadie que pudiese ayudarnos."]),
      toEs("Busco un compañero que sepa cocinar.", "Buscaba un compañero que supiera cocinar.", "Al pasar la principal al pasado (buscaba), la relativa sigue en subjuntivo pero en imperfecto: supieron → supiera.", ["Buscaba a un compañero que supiera cocinar."], "Pasa la frase al pasado (buscaba)."),
      toEs("De joven quería una pareja que me entienda.", "De joven quería una pareja que me entendiera.", "La principal está en pasado (quería), así que el subjuntivo también debe ir en pasado: entendiera. «Entienda» mezcla dos planos temporales.", [], "Corrige la frase."),
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
        "Recuerda la regla: tres tiempos",
        [
          "Recuerda la regla: cuando, en cuanto, tan pronto como, hasta que y después de que llevan subjuntivo solo si la acción todavía no ha ocurrido (futuro): Cuando llegues, llámame. Si hablas de un hábito o de algo ya pasado, el hecho es real y va en indicativo: Cuando llego, llamo. Cuando llegué, llamé.",
          "Pregúntate: ¿esto ya es un hecho (pasa siempre o ya pasó) o todavía es una posibilidad? Detrás de cuando nunca va futuro (✗ cuando llegarás).",
        ],
        [
          ["En cuanto termine, te aviso.", "As soon as I finish, I'll let you know. (todavía no he terminado → subjuntivo)"],
          ["En cuanto termino, siempre aviso.", "As soon as I finish, I always let people know. (hábito → indicativo)"],
          ["En cuanto terminé, te avisé.", "As soon as I finished, I let you know. (pasado → indicativo)"],
        ],
        [
          fb("Rápido.", "Tan pronto como ___ las notas, te las mando. (publicar, ellos)", "publiquen", "Las notas todavía no se han publicado: acción futura → presente de subjuntivo, publiquen (c → qu delante de e)."),
        ]
      ),
    ],
    [
      fb("Rápido.", "En cuanto ___, siempre me ducho. (llegar, yo)", "llego", "Siempre marca un hábito: el hecho es real → indicativo, llego."),
      fb("Rápido.", "En cuanto ___, me duché. (llegar, yo)", "llegué", "Me duché indica pasado: el hecho ya ocurrió → indicativo, llegué."),
      fb("Rápido.", "No me iré hasta que me lo ___. (explicar, tú)", "expliques", "Me iré es futuro: la explicación todavía no ha ocurrido → presente de subjuntivo, expliques."),
      fb("Rápido.", "No me fui hasta que me lo ___. (explicar, tú)", "explicaste", "No me fui es pasado: la explicación ya ocurrió → indefinido, explicaste."),
      fb("Rápido.", "Cuando ___ jubilado, viajaré. (estar)", "esté", "Viajaré indica futuro → cuando + presente de subjuntivo: esté. Nunca «estaré» tras cuando."),
      fb("Rápido.", "Después de que ___ los invitados, recogimos todo. (irse)", "se fueron", "Recogimos es pasado: los invitados ya se fueron → indicativo. (En registro culto también se oye «después de que se fueran».)"),
      fb("Rápido.", "Mañana, tan pronto como ___ el sol, salimos. (salir)", "salga", "Mañana: el sol todavía no ha salido → presente de subjuntivo, salga. El presente salimos en la principal tiene aquí valor de futuro."),
      toEs("Cuando llegue a casa, te escribo.", "Cuando llegué a casa, te escribí.", "Al contarlo en pasado, el hecho ya es real: cuando + indefinido (llegué), no subjuntivo.", [], "Cambia la frase al pasado (indefinido)."),
      toEs("Cuando salgo del trabajo, voy al gimnasio.", "Cuando salga del trabajo, iré al gimnasio.", "Un hábito (salgo) se vuelve plan futuro: cuando + presente de subjuntivo (salga) y futuro en la principal (iré).", ["Cuando salga del trabajo, voy a ir al gimnasio.", "Cuando salga del trabajo, voy al gimnasio."], "Cambia el hábito por un plan para mañana."),
      toEs("Avísame en cuanto llegarás al hotel.", "Avísame en cuanto llegues al hotel.", "Tras en cuanto no va futuro. La llegada aún no ha ocurrido: presente de subjuntivo, llegues.", [], "Corrige la frase."),
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
    "Repaso espaciado: forma el imperfecto de subjuntivo a partir de la tercera persona plural del indefinido, con verbos regulares e irregulares (dijera, pusiera, condujera, hubiera…).",
    "6 min",
    [
      sec(
        "La raíz del indefinido",
        [
          "Recuerda la regla: toma la forma de ellos del pretérito indefinido (pidieron, durmieron, pusieron, fueron, dijeron), quita -ron y añade -ra, -ras, -ra, -ramos, -rais, -ran. La forma de nosotros lleva tilde: pidiéramos.",
          "Por qué funciona: el imperfecto de subjuntivo se construye sobre esa raíz, así que hereda todas sus irregularidades: e→i (pidieron → pidiera), o→u (durmieron → durmiera), raíces fuertes (pusieron → pusiera, tuvieron → tuviera), la j sin i (dijeron → dijera, condujeron → condujera) y la y entre vocales (leyeron → leyera). Si sabes el indefinido, sabes el subjuntivo.",
        ],
        [
          ["Me pidió que durmiera un poco.", "She asked me to sleep a bit. (durmieron → durmiera)"],
          ["Quería que lo dijéramos nosotros.", "He wanted us to say it. (dijeron → dijéramos, con tilde)"],
        ],
        [
          fb("Forma.", "Nos sorprendió que ___ quedarse en casa. (preferir, ellos)", "prefirieran", "Prefirieron → prefirieran: el cambio e→i del indefinido de los verbos en -ir pasa al subjuntivo (no «preferieran»)."),
        ]
      ),
    ],
    [
      fb("Forma.", "Nos pidió que ___ la verdad. (decir, nosotros)", "dijéramos", "Dijeron → dijé-ramos: tras j no se añade i (no «dijiéramos»), y la forma de nosotros lleva tilde."),
      fb("Forma.", "Quería que ___ la mesa. (poner, vosotros)", "pusierais", "Pusieron → pusierais: la raíz irregular pus- del indefinido pasa al subjuntivo (no «ponierais»)."),
      fb("Forma.", "Ojalá ___ más tiempo. (haber)", "hubiera", "Hubieron (pretérito de haber) → hubiera; el haber impersonal va siempre en singular: ojalá hubiera."),
      fb("Forma.", "Le pidieron que ___ el coche. (conducir, él)", "condujera", "Condujeron → condujera: los verbos en -ducir tienen raíz en j y no añaden i (no «conduciera» ni «condujiera»)."),
      fb("Forma.", "Era raro que nadie ___ nada. (oír)", "oyera", "Oyeron → oyera: la i entre vocales se escribe y, igual que en el indefinido."),
      fb("Forma.", "Me sorprendió que ___ tan temprano. (venir, ellos)", "vinieran", "Vinieron → vinieran: el cambio e→i del indefinido de venir se mantiene (no «venieran»)."),
      mt(
        "Relaciona el infinitivo con el imperfecto de subjuntivo (yo).",
        [
          ["andar", "anduviera"],
          ["caber", "cupiera"],
          ["pedir", "pidiera"],
          ["ser", "fuera"],
        ],
        "Todos salen de la raíz del indefinido: anduvieron → anduviera, cupieron → cupiera, pidieron → pidiera, fueron → fuera."
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
        [
          "Recuerda la regla: el subjuntivo sigue el tiempo del verbo que lo pide. Si el verbo principal está en presente (pide, es mejor, dudo), va el presente de subjuntivo (venga, sepas, llegue). Si pasa al pasado (pidió, era mejor, dudaba), el subjuntivo también retrocede al imperfecto: viniera, supieras, llegara.",
          "Por qué: las dos acciones se miran desde el mismo momento. «Me pidió que venga» mezcla un ahora y un entonces. Para formar el imperfecto de subjuntivo, toma la 3.ª persona plural del indefinido y cambia -ron por -ra: vinieron → viniera, supieron → supiera.",
        ],
        [
          ["Dudaba que llegara a tiempo.", "I doubted he would arrive on time. (dudo que llegue → dudaba que llegara)"],
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
      toEs("Quieren que nos quedemos.", "Querían que nos quedáramos.", "Quieren → querían arrastra al subjuntivo: quedemos → quedáramos (de quedaron), con tilde en nosotros.", ["Querían que nos quedásemos."], "Pasa la frase al pasado: empieza por «Querían»."),
    ]
  ),
  L(
    "b2-vocabulary-practice-6",
    "b2d-rep-si-hipotesis",
    "Preguntas y respuestas: ¿qué harías si…? (repaso)",
    "Repaso espaciado: hipótesis sobre el presente.",
    "6 min",
    [
      sec(
        "Imagina",
        [
          "Recuerda la regla: la pregunta y la respuesta hipotéticas usan la misma estructura. La parte con si lleva imperfecto de subjuntivo (si tuvieras, si pudiera); la otra parte, condicional (¿qué harías?, leería).",
          "Al contestar, solo cambias la persona: ¿Qué harías si no tuvieras móvil? → Si no tuviera móvil, leería más. Muchas veces la respuesta corta omite la parte con si y deja solo el condicional: —¿Adónde irías? —Iría a Islandia.",
        ],
        [
          ["—¿Qué harías si no tuvieras móvil? —Si no tuviera móvil, leería más.", "—What would you do without a phone? —If I didn't have one, I'd read more. (tuvieras → tuviera; harías → leería)"],
          ["—¿Dónde vivirías si pudieras elegir? —En Lisboa.", "—Where would you live if you could choose? —In Lisbon. (respuesta corta)"],
        ],
        [
          fb("Responde.", "—¿Qué comerías si fueras vegetariano? —___ más legumbres. (comer, yo)", "Comería", "La respuesta a una hipótesis va en condicional, como la pregunta: comerías → comería (yo). El imperfecto de subjuntivo solo va en la parte con si."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Adónde irías si ___ un mes libre? (tener, tú) —A Islandia.", "tuvieras", "La parte con si de una hipótesis va en imperfecto de subjuntivo; tener es irregular: tuvieras. «Tendrías» es condicional y no va tras si."),
      fb("Responde.", "—¿Qué cambiarías de tu ciudad si ___ alcalde? (ser, tú)", "fueras", "Si + imperfecto de subjuntivo de ser: fueras. Es la misma forma que ir (fueras), y el contexto decide."),
      fb("Responde.", "—Si fuera alcalde, ___ más parques. (crear)", "crearía", "La respuesta repite la estructura: la consecuencia en condicional (crearía)."),
      fb("Responde.", "—¿Qué dirías si te ___ un premio? (dar, ellos)", "dieran", "Si + imperfecto de subjuntivo de dar: dieran (sin tilde). «Darían» es condicional."),
      fb("Responde.", "—Si me dieran un premio, ___ gracias a mi familia. (dar)", "daría", "Consecuencia de la hipótesis → condicional: daría las gracias."),
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
    "Repaso espaciado: corrige el condicional o el futuro tras «si» y «como si», y practica si + imperfecto de subjuntivo + condicional.",
    "6 min",
    [
      sec(
        "La redacción",
        [
          "Recuerda la regla: detrás del si condicional nunca van el condicional ni el futuro. Condición posible → si + presente de indicativo, y futuro o presente en la consecuencia (si llueve, nos quedaremos). Condición irreal → si + imperfecto de subjuntivo, y condicional en la consecuencia (si lloviera, nos quedaríamos). «Como si» compara con algo irreal y va siempre con imperfecto (o pluscuamperfecto) de subjuntivo.",
          "¿Por qué el error es tan frecuente? Porque en inglés «would» aparece a veces en las dos partes y porque el condicional «suena» hipotético. Pero en español el condicional es el resultado, no la condición. Busca los tres errores de esta redacción: «Si yo sería presidente, bajaría los impuestos. Si tendríamos más tiempo, viajaríamos. Me habla como si soy tonto.»",
        ],
        [
          ["Si yo fuera presidente, bajaría los impuestos.", "If I were president, I'd lower taxes. (sería → fuera)"],
          ["Si hace sol, iremos a la playa.", "If it's sunny, we'll go to the beach. (condición posible: presente + futuro)"],
        ],
        [
          mc(
            "¿Qué falla en «si yo sería presidente»?",
            ["Tras si, imperfecto de subjuntivo: fuera.", "Falta un artículo.", "Debe ser «soy».", "Nada."],
            0,
            "Tras el si de condición nunca va el condicional; la hipótesis usa imperfecto de subjuntivo: si yo fuera presidente. No falta artículo y «soy» haría la condición real, algo absurdo aquí."
          ),
          fb("Completa.", "Si mañana ___ huelga de metro, iré en bici. (haber)", "hay", "Condición posible sobre el futuro → si + presente de indicativo: hay. «Habrá» es futuro, que nunca va tras si, y la consecuencia «iré» muestra que no es una hipótesis irreal."),
        ]
      ),
    ],
    [
      toEs("Si yo sería alcalde, bajaría los impuestos.", "Si yo fuera alcalde, bajaría los impuestos.", "Tras «si» condicional nunca va condicional: «si fuera», no «si sería».", ["Si fuera alcalde, bajaría los impuestos."], "Corrige la frase."),
      toEs("Si tendríamos más tiempo, viajaríamos.", "Si tuviéramos más tiempo, viajaríamos.", "Tras «si» condicional nunca va condicional: «si tuviéramos», no «si tendríamos».", ["Si tuviésemos más tiempo, viajaríamos."], "Corrige la frase."),
      toEs("Me habla como si soy tonto.", "Me habla como si fuera tonto.", "«Como si» compara con algo irreal y exige imperfecto de subjuntivo: fuera, nunca presente de indicativo.", ["Me habla como si fuese tonto.", "Me habla como si yo fuera tonto."], "Corrige la frase."),
      toEs("Si hace buen tiempo, iríamos a la playa.", "Si hace buen tiempo, iremos a la playa.", "Con «si» + presente (condición real), la consecuencia va en futuro: «iremos».", ["Si hiciera buen tiempo, iríamos a la playa.", "Si hace buen tiempo, vamos a la playa."], "Corrige la frase."),
      toEs("Si lo sabría, te lo diría.", "Si lo supiera, te lo diría.", "Tras «si» condicional nunca va condicional: «si supiera», no «si sabría».", ["Si lo supiese, te lo diría."], "Corrige la frase."),
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
        [
          "Recuerda la regla: para imaginar un pasado distinto se usa si + pluscuamperfecto de subjuntivo (hubiera + participio) y, en la consecuencia, condicional compuesto (habría + participio): Si hubiera salido antes, no habría perdido el tren. Para lamentar algo que hiciste o no hiciste: ojalá + hubiera + participio. Para un reproche: debería / deberías + haber + participio.",
          "¿Por qué? El hecho ya ocurrió y no se puede cambiar, así que la condición es irreal y va en subjuntivo. Detrás de si y de ojalá nunca va el condicional (✗ si habría sabido, ✗ ojalá habría ido); el condicional solo aparece en la consecuencia.",
        ],
        [
          ["Ojalá hubiera aprendido a tocar el piano.", "I wish I had learned to play the piano. (lamento)"],
          ["Si hubiera salido antes, no habría perdido el tren.", "If I had left earlier, I wouldn't have missed the train. (irreal pasado)"],
          ["Deberías haberme avisado.", "You should have warned me. (reproche)"],
        ],
        [
          mc("«Si ___ el despertador, habría llegado a la entrevista.»", ["hubiera oído", "habría oído", "oyera", "he oído"], 0, "Condición irreal en el pasado → si + pluscuamperfecto de subjuntivo: hubiera oído. «Habría oído» es condicional, que nunca va detrás de si; «oyera» hablaría del presente y «he oído» es un hecho real."),
        ]
      ),
    ],
    [
      wo("Ojalá hubiera estudiado medicina como mi madre.", "Lamento sobre el pasado: ojalá + hubiera + participio.", "I wish I had studied medicine like my mother."),
      wo("Si me lo hubieras dicho, habría venido.", "Irreal pasado: si + hubieras dicho, consecuencia con habría venido.", "If you had told me, I would have come."),
      wo("Deberías haber revisado el contrato antes de firmarlo.", "Reproche sobre el pasado: deberías + haber + participio.", "You should have checked the contract before signing it."),
      wo("Si hubiéramos reservado, ahora tendríamos mesa.", "Condicional mixta: la condición es pasada (hubiéramos reservado) y la consecuencia es presente (ahora tendríamos).", "If we had booked, we would have a table now."),
      toEs("If I had known, I wouldn't have gone.", "Si lo hubiera sabido, no habría ido.", "Condición irreal en el pasado: «si lo hubiera sabido» + «no habría ido».", ["Si lo hubiese sabido, no habría ido.", "Si lo hubiera sabido, no hubiera ido."]),
      toEs("Ojalá habría aceptado aquella beca en Italia.", "Ojalá hubiera aceptado aquella beca en Italia.", "Detrás de ojalá nunca va el condicional: el lamento sobre el pasado se expresa con pluscuamperfecto de subjuntivo (hubiera aceptado).", ["Ojalá hubiese aceptado aquella beca en Italia.", "Ojalá hubiera aceptado esa beca en Italia."], "Corrige la frase."),
      toEs("No me puse crema y me quemé en la playa.", "Si me hubiera puesto crema, no me habría quemado en la playa.", "Para imaginar lo contrario de un hecho pasado, el hecho negativo pasa a condición afirmativa en pluscuamperfecto de subjuntivo (me hubiera puesto) y la consecuencia va en condicional compuesto y en negativo (no me habría quemado).", ["Si me hubiera puesto crema, no me habría quemado.", "Si me hubiese puesto crema, no me habría quemado en la playa.", "Si me hubiera puesto crema, no me hubiera quemado en la playa."], "Transforma en una condición irreal del pasado: empieza con «Si me hubiera…»."),
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
        [
          "Recuerda la regla: al transmitir un mensaje en pasado, cada tipo de frase tiene su fórmula. Afirmación → dijo que + tiempo un paso atrás (presente → imperfecto, futuro → condicional, perfecto → pluscuamperfecto). Pregunta de sí o no → preguntó si; pregunta con interrogativo → preguntó dónde / cuándo / qué (con tilde). Orden o petición → pidió / dijo que + imperfecto de subjuntivo.",
          "Ojo con los verbos de movimiento y las referencias que cambian de punto de vista: venir → ir (ya no estás en ese lugar), mañana → al día siguiente, aquí → allí.",
          "Tu jefa te dejó este mensaje de voz y se lo cuentas a un compañero: «Mañana no vengo. ¿Has enviado el informe? Llama al cliente y dile que el pedido llegará el lunes. ¿Dónde están los contratos?»",
        ],
        [
          ["«Te llamo esta tarde.» → Dijo que me llamaba esa tarde.", "He said he'd call me that afternoon. (presente → imperfecto; esta → esa)"],
          ["«¿Puedes venir?» → Me preguntó si podía ir.", "She asked me if I could come. (si; venir → ir)"],
          ["«Cierra la puerta.» → Me dijo que cerrara la puerta.", "He told me to close the door. (orden → imperfecto de subjuntivo)"],
        ],
        [
          fb("Paso 1.", "Dijo que al día siguiente no ___. (ir)", "iba", "El presente (vengo) retrocede a imperfecto, y venir pasa a ir porque cuentas el mensaje desde otro lugar: iba."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Me preguntó si ___ el informe. (enviar)", "había enviado", "Pregunta de sí o no → si; el pretérito perfecto (has enviado) pasa a pluscuamperfecto: había enviado."),
      fb("Paso 3.", "Me pidió que ___ al cliente. (llamar)", "llamara", "Una orden (llama) contada con pidió pasa a que + imperfecto de subjuntivo: llamara."),
      fb("Paso 4.", "…y que le ___ que el pedido llegaría el lunes. (decir)", "dijera", "Segunda orden del mensaje (dile): también que + imperfecto de subjuntivo, dijera."),
      fb("Paso 5.", "Dijo que el pedido ___ el lunes. (llegar)", "llegaría", "Una afirmación en futuro (llegará) pasa a condicional: llegaría."),
      fb("Paso 6.", "Me preguntó dónde ___ los contratos. (estar)", "estaban", "Pregunta con interrogativo: se mantiene dónde (con tilde) y el presente (están) pasa a imperfecto: estaban."),
      toEs("She asked me if I had booked the room.", "Me preguntó si había reservado la sala.", "Pregunta de sí o no → «si»; el pretérito perfecto («¿Has reservado…?») pasa a pluscuamperfecto: «había reservado».", ["Me preguntó si había reservado la habitación."]),
    ]
  ),
  L(
    "b2-vocabulary-practice-9",
    "b2d-rep-ser-estar-haber-ronda",
    "Ronda rápida: ser, estar y haber",
    "Repaso espaciado: ser para eventos, estar para ubicación, haber para existencia y adjetivos que cambian de significado.",
    "5 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Recuerda la regla: para decir dónde está algo, la pregunta clave es qué tipo de cosa es. Un objeto o una persona concretos se localizan con estar (El vino está en la nevera). Un evento, algo que ocurre, se localiza con ser, porque decir dónde y cuándo es equivale a decir dónde tiene lugar (La cena es en casa de Pilar). Y si presentas algo nuevo, sin artículo determinado, usas haber: Hay vino en la nevera.",
          "Por eso «el vino» va con estar y «vino» o «un vino» van con hay: el artículo determinado indica que ya sabemos de qué hablamos. Hay no cambia en plural (hay tres bares) y en pasado es había o hubo, siempre en singular.",
          "Algunos adjetivos cambian de significado: ser rico (tener dinero) / estar rico (tener buen sabor); ser malo (portarse mal) / estar malo (estar enfermo); ser aburrido (aburrir) / estar aburrido (sentir aburrimiento); ser listo (inteligente) / estar listo (preparado).",
        ],
        [
          ["La cena es a las nueve en casa de Pilar.", "Dinner is at nine at Pilar's. (un evento: ser)"],
          ["Pilar está en la cocina y hay vino en la nevera.", "Pilar is in the kitchen and there's wine in the fridge. (persona concreta: estar; algo nuevo: hay)"],
          ["Los niños están listos, pero la película es aburrida.", "The kids are ready, but the film is boring. (estar listo = preparado; ser aburrido = que aburre)"],
        ],
        [
          fb("Completa con ser, estar o haber.", "La reunión de vecinos ___ en el portal.", "es", "Una reunión es un evento: para decir dónde tiene lugar se usa ser. «Está» serviría para un objeto o una persona."),
          fb("Completa con ser, estar o haber.", "En el portal ___ una carta para ti.", "hay", "Presentas algo nuevo con artículo indeterminado (una carta): haber. Con «tu carta» dirías «está»."),
        ]
      ),
    ],
    [
      fb("Completa con ser, estar o haber.", "Pilar ___ en la cocina.", "está", "Para la ubicación de personas o cosas concretas se usa estar: Pilar es una persona identificada."),
      fb("Completa con ser, estar o haber.", "___ vino en la nevera.", "Hay", "«Hay» presenta algo nuevo sin artículo determinado: «hay vino». Con «el vino» se diría «está»."),
      fb("Completa con ser, estar o haber.", "El vino ___ en la nevera.", "está", "Con algo ya conocido («el vino») la ubicación se expresa con estar, no con hay: el artículo determinado lo marca."),
      fb("Completa con ser, estar o haber.", "Al probarla, la paella ___ riquísima.", "está", "Para valorar el sabor de una comida que acabas de probar se usa estar: «está riquísima». Con «es» se hablaría de su calidad en general."),
      fb("Completa con ser, estar o haber.", "Su familia ___ muy rica.", "es", "«Ser rico» significa tener dinero (una característica); «estar rico» es tener buen sabor."),
      fb("Completa con ser, estar o haber.", "Mi hijo ___ malo; tiene fiebre.", "está", "«Estar malo» significa estar enfermo (un estado: tiene fiebre); «ser malo» es portarse mal."),
      fb("Completa con ser, estar o haber.", "La película ___ aburridísima.", "es", "«Ser aburrido» significa que algo aburre a los demás; «estar aburrido» es sentir aburrimiento. Una película no siente nada: es aburrida."),
      mc(
        "«¿Dónde ___ la boda de tu prima?»",
        ["es", "está", "hay", "estará en"],
        0,
        "Para el lugar de un evento se usa ser: ¿Dónde es la boda? «Está» se usa para objetos o personas, «hay» no lleva sujeto definido y «estará en» repite la preposición."
      ),
      mc(
        "Tu amigo dice: «Ya estoy listo». ¿Qué quiere decir?",
        ["Que está preparado para salir.", "Que es muy inteligente.", "Que ha terminado de estudiar una carrera.", "Que tiene mucha suerte."],
        0,
        "Estar listo = estar preparado (un estado). «Ser listo» significaría ser inteligente, una característica de la persona."
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
        "Recuerda la regla",
        [
          "Cinco verbos para «become», cada uno con su tipo de cambio. Ponerse + adjetivo: reacción o estado del momento (se puso rojo, nervioso). Volverse + adjetivo: cambio de carácter que se queda (se volvió seguro). Hacerse: profesión, ideología o algo conseguido (se hizo periodista, famosa). Llegar a ser: la cima de un proceso largo (llegó a ser director). Convertirse en + sustantivo: pasar a ser otra cosa (se convirtió en el más leído).",
          "Pregúntate dos cosas: ¿le sigue un adjetivo o un sustantivo? y ¿el cambio dura un momento o toda una etapa?",
        ],
        [
          ["Se volvió muy seguro.", "He became very confident. (carácter: volverse)"],
          ["Su blog se convirtió en una revista.", "Her blog turned into a magazine. (sustantivo: convertirse en)"],
        ],
        [
          mc(
            "Elige: «Mi abuela ___ budista a los sesenta años.»",
            ["se hizo", "se puso", "se volvió en", "llegó"],
            0,
            "Una religión o ideología que se adopta se expresa con hacerse. Ponerse es pasajero, «volverse en» no existe y llegar necesita a ser."
          ),
        ]
      ),
      sec(
        "La historia",
        "«Andrés era tímido y se ponía rojo por todo. En la universidad se hizo periodista y, con los años, se volvió muy seguro. Llegó a ser director de un periódico, que se convirtió en el más leído del país.»",
        [
          ["Andrés era muy tímido de niño.", "Andrés was very shy as a child."],
        ],
        [
          fb("Completa.", "Andrés se ___ rojo por todo. (ponerse, imperfecto)", "ponía", "Ponerse rojo es una reacción del momento; el imperfecto indica que pasaba a menudo."),
        ]
      ),
    ],
    [
      fb("Completa.", "En la universidad se ___ periodista. (hacerse)", "hizo", "Una profesión se alcanza con hacerse."),
      fb("Completa.", "Con los años se ___ muy seguro. (volverse)", "volvió", "Cambio de carácter duradero: volverse."),
      fb("Completa.", "___ director de un periódico. (llegar a ser)", "Llegó a ser", "Llegar a ser: un logro tras un proceso largo."),
      fb("Completa.", "El periódico se ___ en el más leído del país. (convertirse)", "convirtió", "Convertirse en + sustantivo: una transformación."),
      fb("Completa.", "Al recibir el premio, se ___ muy nervioso. (ponerse)", "puso", "Reacción del momento: ponerse."),
      toEs("He became a journalist.", "Se hizo periodista.", "Para una profesión alcanzada por esfuerzo se usa «hacerse»: «se hizo periodista».", ["Llegó a ser periodista.", "Se convirtió en periodista."]),
      toEs("Con los años se hizo piloto.", "Con los años se convirtió en una leyenda.", "Hacerse va con la profesión sin artículo; ante un sustantivo con artículo que dice en qué se transforma (una leyenda), convertirse en.", ["Con los años llegó a ser una leyenda."], "Cambia «piloto» por «una leyenda» y adapta el verbo."),
      toEs("En un momento se puso muy seria.", "Con los años se volvió muy seria.", "Un estado de un momento va con ponerse; el mismo adjetivo como rasgo que se instala con los años va con volverse.", [], "Cambia «En un momento» por «Con los años» y adapta el verbo."),
      toEs("Se puso nerviosa antes del vuelo.", "Se ponía nerviosa antes de cada vuelo.", "Un hábito del pasado va en imperfecto (se ponía); ponerse sigue siendo el verbo porque cada vez es una reacción pasajera.", [], "Transforma en un hábito del pasado con «antes de cada vuelo»."),
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
        "Recuerda la regla: la relación lógica decide",
        [
          "Antes de elegir el conector, pregúntate qué hace la segunda idea respecto a la primera. ¿Va en contra de lo esperado? → contraste: sin embargo. ¿Es el resultado? → consecuencia: por lo tanto. ¿Suma algo en la misma dirección? → adición: además. ¿Explica por qué? → causa: ya que (o como, al principio).",
          "Truco: por lo tanto y ya que son la misma relación vista desde lados opuestos. «Llovía; por lo tanto, me quedé» = «Me quedé ya que llovía». Si las cambias de sitio, la lógica se rompe.",
        ],
        [
          ["Había huelga de metro; por lo tanto, fui en bici.", "There was a metro strike; therefore, I cycled. (resultado)"],
          ["Fui en bici ya que había huelga de metro.", "I cycled since there was a metro strike. (la misma relación, empezando por el efecto)"],
          ["Había huelga de metro; sin embargo, llegué puntual.", "There was a metro strike; however, I arrived on time. (resultado inesperado)"],
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
      { ...fb("Completa.", "Llovía mucho; ___, fuimos al parque.", "sin embargo", "Ir al parque contrasta con la lluvia: sin embargo. «Por lo tanto» sería consecuencia, «además» suma y «ya que» causa."), altAnswers: ["no obstante", "aun así"] },
      { ...fb("Completa.", "___ hacía frío, llevamos abrigo.", "Como", "«Como» causal va al principio y presenta la causa antes del efecto."), altAnswers: ["Ya que", "Puesto que", "Dado que"] },
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
        "Recuerda la regla: subjuntivo = no lo afirmo como hecho",
        [
          "Todos los usos del subjuntivo comparten una idea: lo que va en subjuntivo no se presenta como un hecho real y comprobado, sino como algo buscado, futuro, deseado, valorado o dudoso. Relativa con antecedente desconocido (busco a alguien que sepa), adverbial con futuro (cuando llegues), influencia (quiero que vengas), emoción o valoración (me alegra que estés), duda (dudo que sea), finalidad (para que lo sepas), ojalá, y aunque para una hipótesis (aunque sea tarde).",
          "El tiempo lo decide el verbo principal: presente o futuro → presente de subjuntivo (quiero que vengas); pasado o condicional → imperfecto de subjuntivo en -ra (quería que vinieras). Y para algo anterior a un pasado, pluscuamperfecto (me molestó que no hubieras llamado).",
        ],
        [
          ["Cuando termines, avísame.", "When you finish, let me know. (futuro → presente de subjuntivo)"],
          ["Mis padres querían que estudiara Derecho.", "My parents wanted me to study law. (principal en pasado → -ra)"],
          ["Me sorprendió que no hubieran avisado.", "I was surprised they hadn't warned us. (anterior a un pasado → hubieran + participio)"],
        ],
        [
          fb("Completa.", "En cuanto ___ el sueldo, te devuelvo el dinero. (cobrar, yo)", "cobre", "En cuanto con una acción futura: presente de subjuntivo (cobre). «Cobro» lo presentaría como costumbre, y el futuro (cobraré) no va tras en cuanto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Necesitamos un piso que ___ ascensor. (tener)", "tenga", "Antecedente desconocido (no sabemos si existe ese piso): relativa en subjuntivo. «Tiene» describiría un piso concreto que ya conocemos."),
      fb("Completa.", "Me alegra que ___ aquí. (estar, tú)", "estés", "Una emoción (me alegra) sobre otra persona pide subjuntivo; presente porque alegra está en presente."),
      fb("Completa.", "Dudaba que ___ a tiempo. (llegar, nosotros)", "llegáramos", "Duda en pasado (dudaba) → imperfecto de subjuntivo: llegáramos, con tilde en la a."),
      fb("Completa.", "Te lo dije para que lo ___. (saber)", "supieras", "Para que siempre lleva subjuntivo; con dije (pasado), imperfecto: supieras, de la raíz irregular sup-."),
      fb("Completa.", "Ojalá ___ un jardín en casa. (tener, nosotros)", "tuviéramos", "Ojalá + imperfecto de subjuntivo para un deseo poco probable sobre el presente: tuviéramos (raíz tuv-)."),
      fb("Completa.", "Aunque ___ tarde, iré. (ser — no lo sé)", "sea", "Aunque + subjuntivo cuando no sabes si es así (hipótesis) o no te importa; «aunque es tarde» afirmaría que ya lo es."),
      toEs("I want you to call me when you arrive.", "Quiero que me llames cuando llegues.", "«Querer que» exige subjuntivo («llames») y «cuando» + futuro también («llegues»).", ["Quiero que me llames en cuanto llegues."]),
    ]
  ),
  L(
    "b2-comprehensive-review-2",
    "b2d-rep-mezcla-dictado-b2",
    "Dictado: frases de nivel Avanzado",
    "Repaso espaciado: estructuras variadas en frases largas.",
    "6 min",
    [
      sec(
        "Recuerda la regla: identifica las dos estructuras",
        [
          "Cada frase combina dos estructuras del nivel Avanzado. Antes de escribir, identifícalas: te dirán qué formas esperar. Condición irreal de pasado → si hubiera + participio, habría + participio. Estilo indirecto en pasado → el futuro pasa a condicional (volveré → dijo que volvería). Cuando / en cuanto / antes de que con algo pendiente → subjuntivo, en -ra si el verbo principal está en pasado. Relativa con antecedente que no existe o no conoces → subjuntivo (nadie que haya estado). Hendida → ser + persona + quien.",
          "¿Por qué ayuda? Porque muchas formas suenan parecidas (llamara / llamaría, hubiera / habría): si sabes qué estructura es, sabes cuál toca. En la condición va hubiera; en la consecuencia, habría.",
        ],
        [
          ["Si hubiera sabido que venías, habría preparado algo.", "If I had known you were coming, I'd have prepared something. (si + hubiera, habría)"],
          ["Me prometió que vendría en cuanto pudiera.", "She promised she would come as soon as she could. (indirecto: vendría; pendiente en pasado: pudiera)"],
        ],
        [
          wo("Me pidió que lo llamara en cuanto llegara.", "Dos estructuras: pedir que en pasado + imperfecto de subjuntivo (llamara) y en cuanto con algo pendiente (llegara).", "He asked me to call him as soon as I arrived."),
          mc(
            "Oyes «…si lo ___ sabido, te habría avisado». ¿Qué escribes?",
            ["hubiera", "habría", "había", "haya"],
            0,
            "En la parte de si de una condición irreal de pasado va el pluscuamperfecto de subjuntivo: hubiera sabido. Habría es para la consecuencia (te habría avisado), y había o haya no encajan con la estructura."
          ),
        ]
      ),
    ],
    [
      wo("No conozco a nadie que haya estado en la Antártida.", "Relativa con antecedente negado (nadie) → subjuntivo; perfecto de subjuntivo porque es una experiencia hasta hoy.", "I don't know anyone who has been to Antarctica."),
      wo("Fue mi abuela quien me enseñó a cocinar.", "Hendida de persona: fue + mi abuela + quien; ser en pasado como enseñó.", "It was my grandmother who taught me to cook."),
      wo("Dijo que volvería cuando terminara el curso.", "Estilo indirecto (volveré → volvería) + cuando con algo pendiente en el pasado (terminara).", "She said she would come back when the course ended."),
      wo("Aunque lo intentara, no lo conseguiría.", "Aunque + imperfecto de subjuntivo para una hipótesis lejana, con condicional en la principal.", "Even if he tried, he wouldn't manage it."),
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
        [
          "Recuerda la regla: cuando describes a alguien que todavía no conoces (tu compañero de viaje ideal, la pareja que buscas), las relativas van en subjuntivo; cuando hablas de alguien real (tu último compañero), en indicativo; si niegas que exista (no conozco a nadie que…), otra vez subjuntivo.",
          "Hablar de tus preferencias es justo el terreno del subjuntivo: describes un perfil, no a una persona. Con verbos como gustar o importar, la relativa empieza por «a quien» o «al que»: busco a alguien a quien le guste…",
        ],
        [
          ["Para un viaje largo busco a alguien que sea paciente y que sepa leer mapas.", "For a long trip I'm looking for someone who's patient and can read maps. (un perfil: subjuntivo)"],
          ["Mi último compañero, que roncaba, no era ideal.", "My last companion, who snored, wasn't ideal. (persona real: indicativo)"],
          ["No conozco a nadie que cumpla todo eso.", "I don't know anyone who meets all that. (negado: subjuntivo)"],
        ],
        [
          fb("Tu ideal.", "Busco a alguien que no ___ en el coche. (fumar)", "fume", "Describes un perfil, no a una persona concreta → subjuntivo (fume)."),
          mc(
            "Hablas de tu compañera del año pasado: «Era una chica que ___ muchísimo.»",
            ["hablaba", "hablara", "hable", "hablaría"],
            0,
            "Es una persona real del pasado → indicativo, en imperfecto porque la describes: hablaba. «Hable» y «hablara» son subjuntivo, solo para alguien buscado o negado; «hablaría» es condicional."
          ),
        ]
      ),
    ],
    [
      fb("Tu ideal.", "…que no se ___ a las diez de la noche. (dormir)", "duerma", "Perfil desconocido → subjuntivo. Dormir diptonga o → ue: se duerma."),
      fb("Tu ideal.", "…y que ___ conducir de noche. (poder)", "pueda", "Sigue el mismo perfil → subjuntivo; poder diptonga: pueda."),
      fb("Tu ideal.", "No conozco a nadie que ___ ocho horas de coche sin quejarse. (aguantar)", "aguante", "«No conozco a nadie que…» niega que exista → subjuntivo (aguante)."),
      fb("Tu ideal.", "Mi última compañera, que siempre ___ las rutas, era fantástica. (planear, imperfecto)", "planeaba", "Persona real del pasado → indicativo, en imperfecto porque describe un hábito: planeaba."),
      fb("Tu ideal.", "Quiero encontrar a alguien que ___ cocinar. (saber)", "sepa", "Persona aún desconocida → subjuntivo irregular de saber: sepa."),
      toEs("I'm looking for someone who likes hiking.", "Busco a alguien a quien le guste el senderismo.", "Antecedente desconocido → subjuntivo; con «gustar» se usa «a quien le guste».", ["Busco a alguien que disfrute del senderismo.", "Busco a alguien al que le guste el senderismo.", "Busco a alguien al que le guste hacer senderismo.", "Busco a alguien a quien le guste hacer senderismo."]),
      toEs("Tengo un compañero que siempre llega puntual.", "Quiero un compañero que siempre llegue puntual.", "Con «quiero» describes un perfil, no a tu compañero real → subjuntivo (llegue, con u para mantener el sonido de la g).", [], "Cambia «Tengo» por «Quiero»."),
      { type: "speak", prompt: "Responde en voz alta: ¿cómo es tu compañero de viaje ideal? Di dos cosas.", text: "Busco a alguien que sea tranquilo y que no ronque.", explanation: "Describes un perfil, no a una persona real: las dos relativas van en subjuntivo (sea, ronque). Puedes cambiar los adjetivos y los verbos; lo importante es el modo." },
    ]
  ),
  L(
    "chef-against-family-wishes",
    "b2d-rep-adverbiales-aunque",
    "Pares mínimos: aunque es / aunque sea / aunque fuera",
    "Tres grados de concesión: aunque es (hecho), aunque sea (posibilidad) y un primer contacto con aunque fuera (hipótesis lejana), que se estudia a fondo en la lección «Imperfecto de Subjuntivo y Secuencia de Tiempos».",
    "6 min",
    [
      sec(
        "Tres grados",
        [
          "Recuerda la regla: aunque es caro (sé que lo es: indicativo). Aunque sea caro (quizá lo sea, o no me importa: presente de subjuntivo). Aunque fuera caro (hipótesis lejana o contraria a la realidad: imperfecto de subjuntivo, con condicional en la otra parte: no lo compraría).",
          "Cuanto más se aleja el hablante de la realidad, más «lejos» va el verbo: del indicativo al presente de subjuntivo y de ahí al imperfecto de subjuntivo. «Fuera» sale de «fueron» (quita -ron, añade -ra): tuvieron → tuviera, pidieron → pidiera. La formación se estudia a fondo más adelante.",
        ],
        [
          ["Aunque fuera gratis, no iría.", "Even if it were free, I wouldn't go. (no es gratis: hipótesis)"],
          ["Aunque sea gratis, no iré.", "Even if it's free, I won't go. (no sé si lo es)"],
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
      fb("Grado.", "Aunque ___ mucho, no me canso. (trabajar, yo — hecho)", "trabajo", "Sabes que trabajas mucho: es un hecho real, así que aunque + indicativo."),
      fb("Grado.", "Aunque me lo ___ mil veces, no lo haré. (pedir, tú — posible)", "pidas", "Una posibilidad real que no cambia nada (no lo haré) → presente de subjuntivo; pedir cambia e → i: pidas."),
      fb("Grado.", "Aunque me ___ un millón, no lo vendería. (pagar, ellos — hipótesis)", "pagaran", "Hipótesis lejana con condicional (vendería) → imperfecto de subjuntivo: pagaron → pagaran."),
      fb("Grado.", "Aunque ___ temprano, llegamos tarde. (salir, nosotros — pasado real)", "salimos", "Un hecho pasado que ocurrió → indicativo (salimos)."),
      toEs("Even if it's cold, I'll swim.", "Aunque haga frío, me bañaré.", "«Aunque» + subjuntivo presenta una posibilidad no confirmada: «aunque haga frío».", ["Aunque haga frío, voy a nadar.", "Aunque haga frío, nadaré.", "Aunque haga frío, me voy a bañar."]),
      toEs("Aunque haga frío, me bañaré.", "Aunque hiciera frío, me bañaría.", "Al alejar la hipótesis, el presente de subjuntivo pasa a imperfecto (haga → hiciera) y el futuro a condicional (bañaré → bañaría).", [], "Cambia a hipótesis lejana (condicional)."),
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
        [
          "Recuerda la regla: antes de que, para que, sin que, a menos que, con tal de que y en caso de que siempre llevan subjuntivo. Solo cambia el tiempo: verbo principal en presente, futuro o imperativo → presente de subjuntivo; verbo principal en pasado o condicional → imperfecto de subjuntivo.",
          "¿Por qué siempre? Todas presentan algo que no es un hecho en el momento de la acción principal: una finalidad (para que), una condición (con tal de que, a menos que), una posibilidad (en caso de que), algo que aún no ha pasado (antes de que) o que no llega a pasar (sin que). Por eso nunca admiten indicativo, ni siquiera en pasado: «salió sin que lo vieran», nunca «sin que lo vieron».",
        ],
        [
          ["Te llamo en caso de que haya cambios.", "I'll call you in case there are changes. (presente → haya)"],
          ["Te llamé en caso de que hubiera cambios.", "I called you in case there were changes. (pasado → hubiera)"],
          ["No iré a menos que me invites.", "I won't go unless you invite me. (futuro → invites)"],
        ],
        [
          fb("Estación 1.", "Te lo presto con tal de que me lo ___ mañana. (devolver)", "devuelvas", "Con tal de que siempre lleva subjuntivo; principal en presente (presto) → presente: devuelvas (o → ue)."),
          mc(
            "«Salió de la reunión sin que nadie lo ___.»",
            ["notara", "notó", "note", "notaba"],
            0,
            "«Sin que» siempre pide subjuntivo, y con el principal en pasado (salió) va el imperfecto: notara. «Notó» y «notaba» son indicativo (imposibles tras sin que) y «note» es presente de subjuntivo, que no concuerda con el pasado."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Te lo presté con tal de que me lo ___ al día siguiente. (devolver)", "devolvieras", "Mismo patrón, pero el principal está en pasado (presté) → imperfecto de subjuntivo: devolvieron → devolvieras."),
      fb("Estación 2.", "Iremos a la playa a menos que ___. (llover)", "llueva", "A menos que + subjuntivo; principal en futuro (iremos) → presente: llueva."),
      fb("Estación 2.", "Íbamos a ir a menos que ___. (llover)", "lloviera", "Principal en pasado (íbamos) → imperfecto de subjuntivo: llovieron → lloviera."),
      fb("Estación 3.", "Lleva el mapa en caso de que te ___. (perder)", "pierdas", "Con un imperativo (lleva) → presente de subjuntivo: pierdas (e → ie)."),
      fb("Estación 3.", "Se marchó sin que nadie se ___ cuenta. (dar)", "diera", "Sin que siempre lleva subjuntivo; marchó (pasado) → imperfecto: dieron → diera. «Dio» sería indicativo."),
      fb("Estación 4.", "Recoge todo antes de que ___ tus padres. (volver)", "vuelvan", "Antes de que + subjuntivo; imperativo (recoge) → presente: vuelvan."),
      mc(
        "«Les expliqué el plan para que no ___ dudas.»",
        ["tuvieran", "tengan", "tenían", "tendrían"],
        0,
        "Con el verbo principal en pasado (expliqué), para que va con imperfecto de subjuntivo: tuvieran. «Tengan» iría con presente, «tenían» es indicativo y «tendrían» es condicional."
      ),
      toEs("Lo hice antes de que me lo pedían.", "Lo hice antes de que me lo pidieran.", "«Antes de que» nunca lleva indicativo, ni siquiera en pasado: cuando lo hice, aún no me lo habían pedido. Hice (pasado) → imperfecto de subjuntivo, desde pidieron (e → i): pidieran. «Pedían» es indicativo.", ["Lo hice antes de que me lo pidiesen."], "Corrige la frase."),
      toEs("Te doy la llave para que puedas entrar.", "Te di la llave para que pudieras entrar.", "Al pasar el principal al pasado (di), para que sigue en subjuntivo pero en imperfecto: pudieron → pudieras.", ["Te di la llave para que pudieses entrar."], "Pasa la frase al pasado (te di)."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: un deseo en condicional (me gustaría, preferiría, me encantaría, sería genial) que recae sobre OTRA persona lleva que + imperfecto de subjuntivo: Me gustaría que mis padres viajaran más. El condicional suaviza el deseo y arrastra la subordinada al imperfecto.",
          "Si el deseo es sobre ti mismo, no hay que ni subjuntivo: Me gustaría viajar más. Y con me gusta (presente) la subordinada va en presente de subjuntivo: Me gusta que mis padres viajen.",
        ],
        [
          ["Me gustaría que mis padres viajaran más.", "I'd like my parents to travel more. (otra persona → que + viajaran)"],
          ["Me gustaría viajar más.", "I'd like to travel more. (mismo sujeto → infinitivo)"],
          ["Me gusta que mis padres viajen.", "I like it that my parents travel. (me gusta, presente → viajen)"],
        ],
        [
          fb("Tus deseos.", "Me encantaría que mis primos ___ a vivir a mi barrio. (mudarse)", "se mudaran", "Me encantaría (condicional) + otra persona → imperfecto de subjuntivo: mudaron → se mudaran, con el pronombre delante."),
        ]
      ),
    ],
    [
      fb("Tus deseos.", "Preferiría que mi jefe ___ más flexible. (ser)", "fuera", "Un condicional de deseo (preferiría) pide imperfecto de subjuntivo: ser → fueron → fuera."),
      fb("Tus deseos.", "Me encantaría que mis amigos ___ a verme. (venir)", "vinieran", "Un deseo en condicional (me encantaría que…) pide imperfecto de subjuntivo: vinieron → vinieran."),
      fb("Tus deseos.", "Estaría bien que el gobierno ___ más en educación. (invertir)", "invirtiera", "Estaría bien (condicional) → imperfecto de subjuntivo. Invertir cambia e → i en el indefinido (invirtieron), y ese cambio pasa a invirtiera."),
      fb("Tus deseos.", "Sería genial que mi hermano ___ trabajo aquí. (encontrar)", "encontrara", "Sería genial (condicional) → imperfecto de subjuntivo: encontraron → encontrara. El cambio o → ue del presente no aparece aquí."),
      fb("Tus deseos.", "Me gustaría que ___ más tiempo juntos. (pasar, nosotros)", "pasáramos", "«Me gustaría» (condicional) pide imperfecto de subjuntivo; la forma de nosotros lleva tilde: pasáramos."),
      toEs("Me gusta que mis vecinos me saluden.", "Me gustaría que mis vecinos me saludaran.", "Al cambiar me gusta por me gustaría (condicional), la subordinada pasa a imperfecto de subjuntivo: saludaran.", ["Me gustaría que mis vecinos me saludasen."], "Cambia «me gusta» por «me gustaría»."),
      toEs("Me gustaría que yo aprendiera a tocar la guitarra.", "Me gustaría aprender a tocar la guitarra.", "Cuando quien desea y quien aprende son la misma persona, no se usa que + subjuntivo sino el infinitivo: me gustaría aprender.", [], "Corrige la frase."),
      toEs("Preferiría que mis hijos no vean tanta tele.", "Preferiría que mis hijos no vieran tanta tele.", "Preferiría es condicional: pide imperfecto de subjuntivo, vieran (de vieron). «Vean» iría con «prefiero».", ["Preferiría que mis hijos no vieran tanta televisión.", "Preferiría que mis hijos no viesen tanta tele."], "Corrige la frase."),
      { type: "speak", prompt: "¿Qué te gustaría que cambiara en tu ciudad? Responde en voz alta con «Me gustaría que…» (por ejemplo: más carriles bici).", text: "Me gustaría que hubiera más carriles bici.", explanation: "Me gustaría (condicional) + que + imperfecto de subjuntivo: hubiera (de hubieron, el imperfecto de subjuntivo de hay)." },
      toEs("I'd like you to meet my family.", "Me gustaría que conocieras a mi familia.", "Tras «me gustaría que», la subordinada va en imperfecto de subjuntivo: «conocieras».", ["Me gustaría que conocieses a mi familia.", "Me gustaría que conociera a mi familia."]),
    ]
  ),
  L(
    "small-town-doctor-dilemma",
    "b2d-rep-imperfecto-ojala-ronda",
    "Ronda rápida: ojalá con presente, imperfecto y pluscuamperfecto",
    "Repaso de ojalá + presente e imperfecto de subjuntivo, con un primer contacto con ojalá + pluscuamperfecto (hubiera + participio), que se estudia a fondo más adelante.",
    "5 min",
    [
      sec(
        "Tres ojalás",
        [
          "Recuerda la regla: ojalá siempre va con subjuntivo, y el tiempo indica a qué realidad apunta el deseo. Posible (puede pasar) → presente: Ojalá vengas mañana. Irreal ahora (sabes que no es así) → imperfecto: Ojalá estuvieras aquí. Irreal en el pasado (ya pasó y no se puede cambiar) → pluscuamperfecto, hubiera + participio: Ojalá hubieras venido.",
          "Las pistas están en el contexto: mañana, ahora, ayer, «pero no sé», «murió antes de que naciera».",
        ],
        [
          ["Ojalá llegues a tiempo.", "I hope you get there on time. (posible → llegues)"],
          ["Ojalá viviéramos más cerca.", "I wish we lived closer. (irreal ahora → viviéramos)"],
          ["Ojalá hubieras venido.", "I wish you had come. (irreal pasado → hubieras venido)"],
        ],
        [
          { ...fb("Rápido.", "Ojalá ___ el tren de las ocho. (coger, nosotros — todavía podemos)", "cojamos", "Todavía es posible: ojalá + presente de subjuntivo, cojamos (g → j delante de a)."), altAnswers: ["tomemos"] },
        ]
      ),
    ],
    [
      fb("Rápido.", "Ojalá ___ mañana. (venir, tú — posible)", "vengas", "Mañana y posible → ojalá + presente de subjuntivo: vengas."),
      fb("Rápido.", "Ojalá ___ aquí ahora. (estar, tú — estás lejos)", "estuvieras", "Estás lejos: irreal en el presente → imperfecto de subjuntivo, estuvieras."),
      fb("Rápido.", "Ojalá ___ a la fiesta ayer. (venir, tú)", "hubieras venido", "Ayer ya pasó: irreal en el pasado → pluscuamperfecto de subjuntivo, hubieras venido."),
      fb("Rápido.", "Ojalá ___ bien el examen mañana. (salirte)", "te salga", "Mañana: deseo posible → presente de subjuntivo, te salga."),
      { ...fb("Rápido.", "Ojalá ___ nadar. (saber, yo — no sé)", "supiera", "No sé nadar: irreal ahora → imperfecto de subjuntivo, supiera."), altAnswers: ["supiese", "pudiera"] },
      fb("Rápido.", "Ojalá ___ más de pequeño. (leer, yo)", "hubiera leído", "De pequeño ya pasó: pluscuamperfecto de subjuntivo, hubiera leído (leído con tilde)."),
      fb("Rápido.", "Ojalá no ___ tanto calor. (hacer — hoy hace mucho)", "hiciera", "Hoy hace mucho calor: contrario a la realidad presente → imperfecto de subjuntivo, hiciera."),
      toEs("Ojalá venga Pedro a la cena.", "Ojalá hubiera venido Pedro a la cena.", "La cena ya pasó y Pedro no vino: el deseo pasa al pluscuamperfecto de subjuntivo (hubiera venido).", ["Ojalá Pedro hubiera venido a la cena.", "Ojalá hubiese venido Pedro a la cena."], "Cambia el deseo: la cena ya fue ayer y Pedro no vino."),
      toEs("Ojalá tengo más vacaciones este año.", "Ojalá tuviera más vacaciones este año.", "Ojalá nunca va con indicativo. Si las vacaciones ya están fijadas y son pocas, es irreal: imperfecto de subjuntivo, tuviera.", ["Ojalá tenga más vacaciones este año.", "Ojalá tuviese más vacaciones este año."], "Corrige la frase."),
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
        [
          "Recuerda la regla: elige según cómo ve el hablante la condición. Real o posible: si + presente → presente, futuro o imperativo (Si lo ves, díselo). Irreal ahora: si + imperfecto de subjuntivo → condicional (Si lo vieras, se lo dirías). Irreal en el pasado: si + pluscuamperfecto de subjuntivo → condicional perfecto (Si lo hubieras visto, se lo habrías dicho).",
          "En ningún caso va futuro, condicional o presente de subjuntivo justo detrás de si.",
        ],
        [
          ["Si lo ves, díselo.", "If you see him, tell him. (posible)"],
          ["Si lo vieras más, se lo dirías.", "If you saw him more, you'd tell him. (irreal ahora)"],
          ["Si lo hubiera visto, te lo habría dicho.", "If I had seen it, I'd have told you. (irreal pasado)"],
        ],
        [
          mc(
            "Es posible que la encuentres mañana en la oficina: «Si la ___, dale las gracias.»",
            ["encuentras", "encontraras", "hubieras encontrado", "encontrarías"],
            0,
            "Es posible: condición real, si + presente de indicativo (encuentras), con un imperativo en la otra parte. «Encontraras» y «hubieras encontrado» son hipotéticos y «encontrarías» no va tras si."
          ),
        ]
      ),
    ],
    [
      mc("No lo ves nunca: «Si lo ___, se lo dirías.»", ["vieras", "ves", "hubieras visto", "verás"], 0, "No lo ves nunca: irreal en el presente → si + imperfecto de subjuntivo, vieras. «Ves» sería una condición real, «hubieras visto» se refiere al pasado y «verás» no va tras si."),
      mc("No lo viste ayer: «Si lo ___, se lo habrías dicho.»", ["hubieras visto", "vieras", "ves", "habrías visto"], 0, "No lo viste ayer: irreal en el pasado → si + pluscuamperfecto de subjuntivo, hubieras visto. «Vieras» mira al presente, «ves» es real y «habrías visto» no va tras si."),
      fb("Tipo.", "Si ___ tiempo esta tarde, paso por tu casa. (tener, yo)", "tengo", "Es posible que tengas tiempo esta tarde: condición real, si + presente de indicativo."),
      fb("Tipo.", "Si ___ tiempo, aprendería a bailar. (tener, yo)", "tuviera", "Aprendería (condicional simple) → irreal en el presente: si + imperfecto de subjuntivo, tuviera."),
      fb("Tipo.", "Si ___ tiempo, habría ido a la boda. (tener, yo)", "hubiera tenido", "Habría ido (condicional perfecto) → irreal en el pasado: si + pluscuamperfecto de subjuntivo, hubiera tenido."),
      toEs("Si me invitan, iré.", "Si me hubieran invitado, habría ido.", "La fiesta ya pasó y no te invitaron: la condición pasa a pluscuamperfecto de subjuntivo (hubieran invitado) y la consecuencia a condicional perfecto (habría ido).", ["Si me hubiesen invitado, habría ido.", "Si me hubieran invitado, hubiera ido."], "Cambia la frase: la fiesta ya fue y no te invitaron."),
      toEs("Si llovería mañana, nos quedaremos en casa.", "Si llueve mañana, nos quedaremos en casa.", "La lluvia de mañana es posible y la consecuencia está en futuro: condición real, si + presente de indicativo (llueve). Nunca condicional tras si.", ["Si mañana llueve, nos quedaremos en casa."], "Corrige la frase."),
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
        [
          "Recuerda la regla: cada mitad de la frase mira a su propio tiempo. La condición va en imperfecto de subjuntivo si habla de ahora (si pudiera) y en pluscuamperfecto si habla del pasado (si hubiera hecho caso). La consecuencia va en condicional simple si es actual (ahora trabajaría) y en compuesto si es pasada (no habría conocido). Por eso se pueden mezclar: pasado que cambia el presente.",
          "«Si pudiera empezar de nuevo, estudiaría Biología. Si hubiera hecho caso a mi profesora, ahora trabajaría en un laboratorio. Pero si no hubiera estudiado Derecho, no habría conocido a mi mujer. Así que, si me preguntaras, te diría que no cambiaría nada.»",
        ],
        [
          ["Si pudiera empezar de nuevo, estudiaría Biología.", "If I could start again, I'd study biology. (presente + presente)"],
          ["Si hubiera hecho caso a mi profesora, ahora trabajaría en un laboratorio.", "If I had listened to my teacher, I'd be working in a lab now. (pasado + presente)"],
        ],
        [
          fb("Completa otra hipótesis del narrador.", "Si ___ más tiempo libre, aprendería a tocar el violonchelo. (tener)", "tuviera", "Habla de ahora (no tiene tiempo libre): si + imperfecto de subjuntivo (tuviera, o tuviese) + condicional simple (aprendería)."),
        ]
      ),
    ],
    [
      mc("¿Por qué el narrador, al final, dice que no cambiaría nada?", ["Porque estudiando Derecho conoció a su mujer.", "Porque nunca le gustó la Biología.", "Porque su profesora le aconsejó Derecho.", "Porque ya trabaja en un laboratorio."], 0, "Lo dice la frase «si no hubiera estudiado Derecho, no habría conocido a mi mujer»: condición y consecuencia en pasado (hubiera estudiado + habría conocido), porque las dos cosas ya ocurrieron."),
      toEs("Si mi hermano estudia Medicina, trabaja en un hospital.", "Si mi hermano hubiera estudiado Medicina, ahora trabajaría en un hospital.", "Condicional mixta: la condición es pasada (no estudió) → hubiera estudiado; el resultado es actual (hoy no trabaja allí) → condicional simple, trabajaría.", ["Si mi hermano hubiera estudiado Medicina, trabajaría ahora en un hospital.", "Si mi hermano hubiese estudiado Medicina, ahora trabajaría en un hospital."], "Transforma en una condicional mixta: no estudió Medicina y hoy no trabaja en un hospital. Usa «ahora»."),
      toEs("Si no habría vivido en Sevilla, no habría aprendido a bailar flamenco.", "Si no hubiera vivido en Sevilla, no habría aprendido a bailar flamenco.", "Tras si nunca va el condicional: la condición pasada lleva pluscuamperfecto de subjuntivo (hubiera vivido, o hubiese vivido). Habría aprendido, en la consecuencia, es correcto.", ["Si no hubiese vivido en Sevilla, no habría aprendido a bailar flamenco.", "Si no hubiera vivido en Sevilla, no hubiera aprendido a bailar flamenco."], "Corrige la frase."),
      mc("«Si no hubiera estudiado Derecho, no ___ a mi mujer.» ¿Por qué no vale «conocería»?", ["Porque conocerla ya ocurrió: la consecuencia es pasada y pide habría conocido.", "Porque conocer es irregular en condicional.", "Porque tras «no» siempre va un tiempo compuesto.", "Sí vale: «conocería» es igual de correcto."], 0, "Conocer a su mujer es un hecho terminado en el pasado, así que la consecuencia va en condicional compuesto (habría conocido). «Conocería» la situaría en el presente o el futuro, y eso no tiene sentido aquí."),
      toEs("Si me preguntas, te digo la verdad.", "Si me preguntaras, te diría la verdad.", "Al pasar de condición real a hipótesis, la condición va en imperfecto de subjuntivo (preguntaras) y la consecuencia en condicional (diría, de decir, irregular).", ["Si me preguntases, te diría la verdad."], "Cambia a una hipótesis: crees que nunca te lo va a preguntar."),
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
        [
          "Recuerda la regla: para decir qué habrías hecho tú en una situación que ya pasó, usa el condicional compuesto: habría + participio (yo le habría contestado). Detrás está una condición implícita: «si hubiera sido yo». Los pronombres van delante de habría: me habría quedado, se lo habría dicho.",
          "Para reprochar, deberías haber + participio (deberías haberle contestado) o podrías haber + participio. Son más directos que «yo habría…», que suena a consejo tardío.",
          "—Mi jefe me gritó y yo no dije nada. —Yo le habría contestado. / Yo en tu lugar habría hablado con recursos humanos.",
        ],
        [
          ["Yo le habría contestado.", "I would have answered him. (opinión: lo que yo habría hecho)"],
          ["Deberías haberle contestado.", "You should have answered him. (reproche)"],
        ],
        [
          fb("Responde.", "—No fui a la entrevista. —Yo ___. (ir)", "habría ido", "Opinas sobre una decisión pasada de otra persona: condicional compuesto, habría ido. «Iría» hablaría de ahora o del futuro."),
        ]
      ),
    ],
    [
      fb("Responde.", "—Compré el coche más caro. —Yo ___ uno más barato. (comprar)", "habría comprado", "Lo que tú habrías hecho en su lugar, en el pasado: habría + participio (habría comprado). También se oye hubiera comprado."),
      fb("Responde.", "—No le dije la verdad. —Yo se la ___. (decir)", "habría dicho", "Condicional compuesto con participio irregular: decir → dicho. Los pronombres (se la) van delante del auxiliar."),
      fb("Responde.", "—Dejé el trabajo sin avisar. —Yo ___ antes. (avisar)", "habría avisado", "Opinión sobre una acción pasada: habría avisado. «Avisaría» sonaría a un plan futuro."),
      toEs("—Me fui de la fiesta a las diez. —Yo habría me quedado más.", "—Me fui de la fiesta a las diez. —Yo me habría quedado más.", "Con los tiempos compuestos, el pronombre va delante del auxiliar, nunca entre habría y el participio: me habría quedado.", ["—Me fui de la fiesta a las diez. —Yo me hubiera quedado más.", "—Me fui de la fiesta a las diez. —Me habría quedado más."], "Corrige la respuesta."),
      fb("Responde.", "—Rompí con él por mensaje. —Yo lo ___ en persona. (hacer)", "habría hecho", "Condicional compuesto con participio irregular: hacer → hecho (no «hacido»)."),
      mc(
        "—No reservé mesa y no había sitio. —«___ reservado.»",
        ["Deberías haber", "Habrías debido", "Deberías", "Hubieras debes"],
        0,
        "Un reproche sobre el pasado: deberías haber + participio (deberías haber reservado; también se oye «debías haber reservado»). «Habrías debido reservado» y «deberías reservado» son agramaticales, y «hubieras debes» no existe."
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
        [
          "Recuerda la regla: para convertir un hecho pasado en arrepentimiento hay dos cambios. Los tiempos: la condición pasa a pluscuamperfecto de subjuntivo (si hubiera ahorrado) y el resultado a condicional compuesto (habría podido viajar). Y la polaridad: lo que fue sí pasa a no y al revés, porque imaginas justo el mundo contrario.",
          "Hecho: No ahorré y no pude viajar. → Si hubiera ahorrado, habría podido viajar. Los pronombres van delante de los dos auxiliares: si me hubieras llamado, lo habría hecho.",
        ],
        [
          ["Si hubiera ahorrado, habría podido viajar.", "If I had saved, I could have travelled. (no ahorré → si hubiera ahorrado)"],
          ["Si no me hubiera caído, no me habría roto el brazo.", "If I hadn't fallen, I wouldn't have broken my arm. (me caí → si no me hubiera caído)"],
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
      toEs("Si habrías venido, te habría gustado.", "Si hubieras venido, te habría gustado.", "Tras si nunca va el condicional: la condición pasada lleva pluscuamperfecto de subjuntivo (hubieras venido, o hubieses venido). «Te habría gustado» está bien.", ["Si hubieses venido, te habría gustado.", "Si hubieras venido, te hubiera gustado."], "Corrige la frase."),
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
        [
          "Recuerda la regla: con el verbo introductorio en pasado, presente → imperfecto; indefinido y perfecto → pluscuamperfecto; futuro → condicional; imperativo → imperfecto de subjuntivo. Hoy → ese día; mañana → al día siguiente.",
          "Las preguntas: si la pregunta es de sí o no, se introduce con si; si tiene interrogativo (qué, dónde, cuánto), se usa el interrogativo con tilde y sin si. Ronda rápida: decide en cada frase qué tipo de frase era y qué tiempo tenía.",
        ],
        [
          ["Dijo que lo haría al día siguiente.", "He said he would do it the next day. (haré → haría, mañana → al día siguiente)"],
        ],
        [
          fb("Rápido.", "«Saldré temprano.» → Dijo que ___ temprano.", "saldría", "Futuro → condicional, con la misma raíz irregular: saldré → saldría."),
        ]
      ),
    ],
    [
      fb("Rápido.", "«Estoy harto.» → Dijo que ___ harto.", "estaba", "Presente → imperfecto: estoy → estaba."),
      fb("Rápido.", "«Lo vi ayer.» → Dijo que lo ___ el día anterior.", "había visto", "Pretérito → pluscuamperfecto: lo vi → lo había visto."),
      fb("Rápido.", "«Espérame.» → Me pidió que lo ___.", "esperara", "Un imperativo reportado en pasado pasa a imperfecto de subjuntivo: que lo esperara."),
      { ...fb("Rápido.", "«¿Vienes?» → Me preguntó si ___.", "iba", "Presente → imperfecto; venir → ir (o «venía», si quien lo cuenta está en ese lugar)."), altAnswers: ["venía"] },
      fb("Rápido.", "«¿Qué quieres?» → Me preguntó qué ___.", "quería", "En la pregunta indirecta, el presente pasa a imperfecto: quería."),
      fb("Rápido.", "«Hoy cierro yo.» → Dijo que ___ día cerraba él.", "ese", "«Hoy» pasa a «ese día» (o «aquel día»): dijo que ese día cerraba él."),
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
        [
          "Recuerda la regla: si lo cuentas dos semanas después, todo se mide desde tu ahora. Los tiempos retroceden (viene → venía, traerá → traería), las peticiones van en imperfecto de subjuntivo (que la llamara) y las preguntas de sí o no se introducen con si, sin «que» delante en un texto cuidado; los interrogativos (cuándo, cómo) conservan la tilde.",
          "El resumen: «Mi madre me dijo que viene el domingo y que me traiga un regalo. Me preguntó que si estaba bien. Me pidió que la llamo más a menudo.» Cuatro errores (lo dijo hace dos semanas).",
        ],
        [
          ["Me dijo que estaba cansada del viaje.", "She told me she was tired from the trip. (estoy → estaba)"],
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
      toEs("Me dijo que viene el domingo.", "Me dijo que venía el domingo.", "Lo dijo hace dos semanas: con «dijo», el presente pasa a imperfecto, venía.", ["Me dijo que vendría el domingo."], "Corrige la frase: lo dijo hace dos semanas."),
      toEs("Me dijo que me traiga un regalo.", "Me dijo que me traería un regalo.", "Era información («Te traeré un regalo»), no una petición: indicativo con retroceso, futuro → condicional, traería. «Traiga» convertiría la frase en un encargo.", [], "Corrige la frase."),
      toEs("Me preguntó que si estaba bien.", "Me preguntó si estaba bien.", "En registro cuidado, la pregunta indirecta va con «si» solo: «me preguntó si…». «Que si» es normal en la conversación, pero no en un texto escrito.", [], "Corrige la frase para un texto escrito."),
      toEs("Me pidió que la llamo más a menudo.", "Me pidió que la llamara más a menudo.", "«Pedir que» en pasado exige imperfecto de subjuntivo: «llamara», no «llamo».", ["Me pidió que la llamase más a menudo."], "Corrige la frase."),
      toEs("Me preguntó cuando volveré.", "Me preguntó cuándo volvería.", "Dos errores: el interrogativo mantiene la tilde (cuándo) y, contado dos semanas después, el futuro pasa a condicional (volveré → volvería).", [], "Corrige la frase: hay dos errores."),
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
        [
          "Recuerda la regla: ser + participio es la voz pasiva y cuenta una acción (alguien hizo algo en un momento): El libro fue publicado en 2010. Estar + participio describe el estado que queda después de esa acción: El libro está publicado en tres idiomas.",
          "Pistas: una fecha, un momento puntual o un agente con «por» (por el viento, por la policía) → ser. «Ya», «todavía», «desde ayer» o una descripción de cómo se encuentra algo ahora → estar. En los dos casos el participio concuerda con el sujeto.",
        ],
        [
          ["La puerta fue abierta por el viento.", "The door was blown open by the wind. (acción con agente → ser)"],
          ["La puerta está abierta.", "The door is open. (resultado → estar)"],
          ["Las cartas fueron enviadas el lunes.", "The letters were sent on Monday. (acción fechada; concordancia en femenino plural)"],
        ],
        [
          mc(
            "«La novela ___ traducida al inglés en 2015.»",
            ["fue", "estaba", "hay", "estuvo"],
            0,
            "Una acción con fecha (se tradujo en 2015) es pasiva con ser: fue traducida. «Estaba» y «estuvo» describirían un estado, y «hay» no forma la pasiva."
          ),
          fb("Completa con ser o estar.", "No toques la pared: todavía ___ recién pintada.", "está", "«Todavía» y «recién» describen cómo se encuentra la pared ahora, el resultado de pintarla → estar. Con ser contaríamos la acción (fue pintada ayer)."),
        ]
      ),
    ],
    [
      mc("«La novela ya ___ traducida a veinte idiomas.»", ["está", "es", "fue", "hay"], 0, "El resultado actual de una acción se expresa con estar + participio: ya está traducida. «Es traducida» y «fue» expresan la acción, no el estado, y «hay» no forma esta estructura."),
      fb("Completa con ser o estar.", "El ladrón ___ detenido anoche por la policía.", "fue", "Una acción con agente y momento (anoche, por la policía) es pasiva con ser: fue detenido."),
      fb("Completa con ser o estar.", "El ladrón ya ___ detenido; no hay peligro.", "está", "El resultado actual de la acción se expresa con estar + participio: ya está detenido."),
      fb("Completa con ser o estar.", "La carretera ___ cortada por la nieve desde ayer.", "está", "Un estado que dura (desde ayer) se expresa con estar: está cortada."),
      fb("Completa con ser o estar.", "La carretera ___ cortada por la policía a las ocho.", "fue", "Una acción puntual con agente (a las ocho, por la policía) es pasiva con ser: fue cortada."),
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
        [
          "Recuerda la regla: hay tres maneras de poner el foco. 1) Anteposición: mueves el complemento directo al principio para convertirlo en el tema, y entonces el español exige repetirlo con un pronombre (lo, la, los, las) que concuerda con él: El libro lo tengo yo. Sin ese pronombre la frase es incorrecta.",
          "2) Hendida: ser + elemento destacado + relativo. El relativo depende de lo que destacas: persona → quien / el que (Fue Ana quien…), lugar → donde, tiempo → cuando, cosa o idea → lo que (Lo que quiero es…). En español estándar no se usa un simple «que» tras el lugar o el tiempo.",
          "3) Grado: lo + adjetivo o adverbio + que expresa intensidad. Lo es neutro, pero el adjetivo concuerda con el sustantivo (lo cara que es la casa); un adverbio (bien, rápido) no cambia.",
        ],
        [
          ["Fue mi abuela quien me enseñó a cocinar.", "It was my grandmother who taught me to cook. (persona → quien)"],
          ["No sabes lo cansadas que estábamos.", "You don't know how tired we were. (cansadas concuerda con nosotras)"],
        ],
        [
          fb("Completa la versión enfática.", "Tengo las llaves yo. → Las llaves ___ tengo yo.", "las", "El complemento directo antepuesto se retoma con pronombre: «las llaves» → «las»."),
        ]
      ),
    ],
    [
      { ...fb("Completa la versión enfática.", "Yo las encontré. → Fui yo ___ las encontró.", "quien", "En las oraciones hendidas de persona se usa «quien» (o «el que», «la que»): «Fui yo quien…»."), altAnswers: ["el que", "la que"] },
      fb("Completa la versión enfática.", "Fue muy difícil encontrarlas. → No sabes lo ___ que fue encontrarlas.", "difícil", "«Lo + adjetivo + que» expresa intensidad: «lo difícil que fue»."),
      fb("Completa la versión enfática.", "Me encanta su sonrisa. → ___ me encanta es su sonrisa.", "Lo que", "Para destacar una cosa o idea se usa «lo que»: «Lo que me encanta es…». Quien solo sirve para personas."),
      fb("Completa la versión enfática.", "Nos conocimos en París. → Fue en París ___ nos conocimos.", "donde", "En las hendidas de lugar se usa «donde»: «Fue en París donde…». Un simple «que» aquí se considera calco y no es estándar."),
      fb("Completa la versión enfática.", "Mi hermana hizo la tarta. → La tarta ___ hizo mi hermana.", "la", "El complemento directo antepuesto se retoma con pronombre: «la tarta» → «la»."),
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
        [
          "Recuerda la regla: para unir dos frases con cuyo, el posesivo su/sus desaparece y su lugar lo ocupa cuyo, que concuerda como él con lo poseído (películas → cuyas). La relativa se pega al poseedor, y si lo poseído era el objeto de la segunda frase, el bloque «cuyo + sustantivo» pasa delante del verbo: Conozco bien su obra → cuya obra conozco bien.",
          "Es una sustitución, no una suma: ni «cuyas sus películas» ni «que sus películas».",
        ],
        [
          ["Es una actriz. Sus películas son famosas. → Es una actriz cuyas películas son famosas.", "She's an actress whose films are famous. (sus películas → cuyas películas)"],
          ["Es un país. No hablo su idioma. → Es un país cuyo idioma no hablo.", "It's a country whose language I don't speak. (el objeto pasa delante del verbo)"],
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
      fb("Une.", "Es un actor. No recuerdo su apellido. → Es un actor ___ apellido no recuerdo.", "cuyo", "«Su apellido» era el objeto de recuerdo: pasa delante como «cuyo apellido», masculino singular."),
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
        [
          "Recuerda las reglas del registro formal: las peticiones se suavizan con el condicional (les agradecería, quisiera) y, como piden algo a otra persona, van seguidas de que + imperfecto de subjuntivo (les agradecería que me devolvieran…). Nunca «agradecería si…» con condicional. Las hipótesis usan si + imperfecto de subjuntivo (si no fuera posible), lo que te dijeron se cuenta con el futuro pasado a condicional (me aseguraron que llegaría) y los conectores formales (por lo tanto, dado que) ordenan el texto.",
          "Completa la carta de Elena: «Estimados señores: les escribo porque el pedido, (1) ___ número adjunto, no ha llegado. Aunque me aseguraron que (2) ___ el lunes, todavía no lo he recibido. (3) ___, les agradecería que me (4) ___ el dinero. Si no (5) ___ posible, quisiera que me (6) ___ otro.»",
        ],
        [
          ["Le agradecería que me enviara el formulario.", "I'd be grateful if you sent me the form. (agradecería que + imperfecto de subjuntivo)"],
          ["Me prometieron que el técnico vendría el martes.", "They promised me the technician would come on Tuesday. (futuro → condicional)"],
          ["Si no fuera molestia, quisiera hablar con el director.", "If it's no trouble, I'd like to speak to the director. (si + imperfecto de subjuntivo)"],
        ],
        [
          fb("Hueco 1: el relativo posesivo (whose).", "…el pedido, ___ número adjunto, no ha llegado.", "cuyo", "«Cuyo» expresa posesión y concuerda con lo poseído: «número» es masculino singular, aunque el poseedor sea el pedido."),
        ]
      ),
    ],
    [
      fb("Hueco 2.", "Aunque me aseguraron que ___ el lunes… (llegar)", "llegaría", "Lo que dijeron («llegará») se cuenta desde el pasado: el futuro pasa a condicional, llegaría."),
      fb("Hueco 3.", "___, les agradecería que me devolvieran el dinero.", "Por lo tanto", "La petición es la consecuencia lógica del retraso: por lo tanto (o por consiguiente), formal y seguido de coma."),
      fb("Hueco 4.", "…les agradecería que me ___ el dinero. (devolver)", "devolvieran", "Agradecería (condicional) + que con otro sujeto pide imperfecto de subjuntivo: devolvieran."),
      fb("Hueco 5.", "Si no ___ posible… (ser)", "fuera", "Hipótesis: si + imperfecto de subjuntivo. «Si no sería» es un error frecuente: el condicional nunca va detrás de si."),
      fb("Hueco 6.", "…quisiera que me ___ otro. (enviar)", "enviaran", "Quisiera (forma cortés) + que + imperfecto de subjuntivo: enviaran."),
      toEs("If you had informed me, I would have waited (ustedes).", "Si me hubieran informado, habría esperado.", "Condición irreal en el pasado: «si» + pluscuamperfecto de subjuntivo y «habría» + participio.", ["Si me hubiesen informado, habría esperado.", "Si me hubieran avisado, habría esperado."]),
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
        [
          "Recuerda la regla: donde (lugar), en que / en el que (tiempo) y como (modo) funcionan igual que «que» en las relativas. Si el lugar, el momento o la manera ya existen y los conoces → indicativo. Si todavía los buscas, los dejas abiertos o los niegas → subjuntivo.",
          "¿Por qué? El subjuntivo marca que lo descrito aún no es un hecho: «un sitio donde pueda leer» es un requisito, no un sitio que puedas señalar. Compara: «Conozco un sitio donde se lee tranquilo» (existe) / «Busco un sitio donde se lea tranquilo» (aún no). Con como pasa lo mismo: «Hazlo como quieras» deja la manera abierta; «Lo hago como me enseñó mi madre» describe una manera real.",
        ],
        [
          ["Busco un sitio donde pueda leer tranquilo.", "I'm looking for a place where I can read in peace. (lugar buscado: subjuntivo)"],
          ["Este es el parque donde leo los domingos.", "This is the park where I read on Sundays. (lugar conocido: indicativo)"],
          ["Ven a la hora en que te venga bien.", "Come at whatever time suits you. (momento abierto: subjuntivo)"],
          ["Lo cocino como lo cocinaba mi abuela.", "I cook it the way my grandmother used to. (manera real: indicativo)"],
        ],
        [
          fb("Mismo marco.", "Busco un sitio donde ___ aparcar. (poder, yo)", "pueda", "El sitio todavía no lo has encontrado → donde + subjuntivo: pueda."),
          mc(
            "«Esta es la plaza donde ___ cada sábado el mercadillo.»",
            ["ponen", "pongan", "pondrán", "pusieran"],
            0,
            "«Esta es la plaza» señala un lugar real y conocido → indicativo: ponen. «Pongan» y «pusieran» tratarían la plaza como desconocida y «pondrán» no encaja con «cada sábado» (hábito)."
          ),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Busco un bar donde ___ música en directo. (haber)", "haya", "Lugar todavía desconocido → donde + subjuntivo: haya."),
      fb("Mismo marco.", "Conozco un bar donde ___ música en directo. (haber)", "hay", "«Conozco» presenta un bar real → indicativo: hay."),
      fb("Mismo marco.", "Llámame en un momento en que ___ hablar. (poder, tú)", "puedas", "El momento queda abierto (tú lo eliges) → en que + subjuntivo: puedas."),
      fb("Mismo marco.", "Queremos un pueblo donde nadie nos ___. (conocer)", "conozca", "El pueblo es un deseo, aún sin nombre → subjuntivo. Conocer: conozco → conozca."),
      fb("Mismo marco.", "Organízalo como te ___ mejor. (parecer)", "parezca", "La manera queda abierta → como + subjuntivo: parezca (parezco → parezca)."),
      fb("Mismo marco.", "No hay ningún sitio donde se ___ tan bien como aquí. (comer)", "coma", "Antecedente negado (no hay ningún sitio): no hay nada real que describir → subjuntivo, coma."),
      toEs("I need a place where I can work.", "Necesito un sitio donde pueda trabajar.", "Un lugar buscado y aún desconocido lleva «donde» + subjuntivo: «pueda».", ["Necesito un lugar donde pueda trabajar.", "Necesito un sitio en el que pueda trabajar."]),
      toEs("Mañana nos sentaremos en la mesa donde haya más luz.", "Siempre nos sentamos en la mesa donde hay más luz.", "Mañana, la mesa aún está por elegir → subjuntivo (haya). Con «siempre» hablamos de una costumbre y de una mesa real que ya conocemos → presente (nos sentamos) y donde + indicativo (hay).", ["Nos sentamos siempre en la mesa donde hay más luz."], "Cambia «mañana» por «siempre»."),
      toEs("Vivo en una calle donde nunca se oiga ruido.", "Vivo en una calle donde nunca se oye ruido.", "«Vivo en» describe un lugar real que conoces → indicativo: se oye. El subjuntivo «se oiga» solo iría con una calle buscada: «Busco una calle donde nunca se oiga ruido».", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: lo que, quien, cualquiera que, donde y cuando llevan subjuntivo si se refieren a algo abierto o todavía no identificado (cualquier cosa, cualquier persona): Pide lo que quieras. Llevan indicativo si hablas de algo concreto que ya conoces: Pide lo que quieres (sé qué quieres: pídelo).",
          "Las fórmulas reduplicadas (pase lo que pase, digan lo que digan, hagas lo que hagas) repiten el mismo verbo en subjuntivo y significan «da igual lo que...».",
        ],
        [
          ["Quien quiera venir, que venga.", "Whoever wants to come, let them come. (cualquier persona)"],
          ["Pide lo que quieras. / Pide lo que quieres.", "Order whatever you like. / Order what (I know) you want. (abierto / concreto)"],
        ],
        [
          wo("Puedes sentarte donde prefieras.", "Donde + subjuntivo: cualquier sitio, el que tú elijas (prefieras).", "You can sit wherever you prefer."),
        ]
      ),
    ],
    [
      wo("Pide lo que te apetezca.", "Lo que + subjuntivo (apetezca): cualquier cosa, todavía no sé qué.", "Order whatever you fancy."),
      wo("Cualquiera que lo pruebe lo recomendará.", "Cualquiera que + subjuntivo (pruebe): no sabemos quién lo probará.", "Anyone who tries it will recommend it."),
      wo("Dime lo que necesites.", "Lo que + subjuntivo (necesites): cualquier cosa que necesites.", "Tell me whatever you need."),
      wo("Pase lo que pase, estaré contigo.", "Fórmula reduplicada: el mismo verbo en subjuntivo dos veces (pase lo que pase) = da igual lo que pase.", "Whatever happens, I'll be with you."),
      toEs("Te compro lo que necesitas.", "Te compro lo que necesites.", "Si todavía no sabes qué necesita, lo que es abierto (= cualquier cosa) y va en subjuntivo: necesites.", ["Te compraré lo que necesites."], "Cambia la frase: todavía no sabes qué necesita."),
      toEs("Pase lo que pasa, estaré contigo.", "Pase lo que pase, estaré contigo.", "La fórmula reduplicada repite el mismo verbo en subjuntivo: pase lo que pase. «Pasa» es indicativo.", [], "Corrige la frase."),
      toEs("Say whatever you want.", "Di lo que quieras.", "«Lo que» + subjuntivo significa «cualquier cosa que»: «lo que quieras».", ["Di lo que te dé la gana."]),
    ]
  ),
  L(
    "lighthouse-decommissioned",
    "b2d-rep-adverbiales-corrige",
    "Corrige el párrafo: la nota para el compañero de piso",
    "Repaso espaciado: corrige errores con cuando, hasta que, para que y antes de que.",
    "6 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Recuerda la regla: cuando, hasta que, en cuanto + subjuntivo si la acción todavía no ha ocurrido (Cuando llegues, riega las plantas), pero + indicativo si es un hábito o algo ya pasado (Cuando llego, riego las plantas / Cuando llegué, regué las plantas). Nunca futuro detrás de cuando.",
          "Para que y antes de que son distintos: llevan subjuntivo SIEMPRE, también en pasado y en hábitos, porque la acción que introducen todavía no ha ocurrido respecto a la principal.",
        ],
        [
          ["Cuando llegues, riega las plantas.", "When you arrive, water the plants. (futuro → subjuntivo)"],
          ["Cuando llegué, regué las plantas.", "When I arrived, I watered the plants. (pasado → indicativo)"],
          ["Siempre llamo antes de que salgan.", "I always call before they leave. (antes de que: siempre subjuntivo)"],
        ],
        []
      ),
      sec(
        "La nota",
        "«Cuando llegarás, riega las plantas. No cierres la ventana hasta que se seca la pintura. Te dejo dinero para que compras pan. Llámame antes de que te vas.» Cuatro errores.",
        [],
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
      toEs("Cuando llegarás, riega las plantas.", "Cuando llegues, riega las plantas.", "Tras «cuando» con valor futuro va presente de subjuntivo, no futuro: «llegues».", [], "Corrige la frase."),
      toEs("No cierres la ventana hasta que se seca la pintura.", "No cierres la ventana hasta que se seque la pintura.", "«Hasta que» + acción futura exige subjuntivo: «se seque», no «se seca».", [], "Corrige la frase."),
      toEs("Te dejo dinero para que compras pan.", "Te dejo dinero para que compres pan.", "«Para que» exige siempre subjuntivo: «compres», no «compras».", [], "Corrige la frase."),
      toEs("Llámame antes de que te vas.", "Llámame antes de que te vayas.", "«Antes de que» exige siempre subjuntivo: «te vayas», no «te vas».", ["Llámame antes de que te marches."], "Corrige la frase."),
      toEs("Avísame cuando sabrás algo.", "Avísame cuando sepas algo.", "Tras «cuando» con valor futuro va presente de subjuntivo, no futuro: «sepas», no «sabrás».", [], "Corrige la frase."),
      toEs("Cuando vuelvas, cenamos juntos.", "Cuando volviste, cenamos juntos.", "Al contarlo como algo ya ocurrido, cuando pasa a indicativo (volviste). El subjuntivo solo va tras cuando si la acción es futura.", ["Cuando volviste, cenamos juntas."], "Cambia la frase al pasado: ya ocurrió."),
      toEs("Te dejo la llave para que entres.", "Te dejé la llave para que entraras.", "Para que lleva siempre subjuntivo; al pasar dejo → dejé, el subjuntivo pasa al imperfecto: entraras.", ["Te dejé la llave para que entrases."], "Cambia la frase al pasado (indefinido)."),
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
        "Recuerda la regla",
        [
          "Recuerda la regla: al contar tus planes, todo lo que va detrás de cuando, en cuanto, hasta que o después de que todavía no ha ocurrido, así que va en presente de subjuntivo; la acción principal va en futuro (o presente con valor de futuro): Cuando llegue a casa, llamaré a mi madre.",
          "Antes de que y para que llevan subjuntivo siempre. Pero si hablas de tus costumbres (normalmente, siempre), cuando vuelve al indicativo: Cuando salgo del trabajo, estoy agotado.",
        ],
        [
          ["En cuanto salga del trabajo, iré al gimnasio.", "As soon as I leave work, I'll go to the gym. (plan → salga)"],
          ["Normalmente, cuando salgo del trabajo, estoy agotado.", "Usually, when I leave work, I'm exhausted. (hábito → salgo)"],
          ["Ahorraré para que podamos ir de vacaciones.", "I'll save so that we can go on holiday. (para que: siempre subjuntivo)"],
        ],
        [
          fb("Tus planes.", "El viernes, en cuanto ___ la última reunión, me iré a la sierra. (terminar)", "termine", "Plan futuro: en cuanto + presente de subjuntivo, termine. «Terminaré» nunca va tras en cuanto."),
        ]
      ),
    ],
    [
      fb("Tus planes.", "Cuando ___ a casa, llamaré a mi madre. (llegar)", "llegue", "Plan futuro: cuando + presente de subjuntivo, llegue (g → gu delante de e)."),
      fb("Tus planes.", "Antes de que ___ la semana, terminaré el libro. (acabar)", "acabe", "Antes de que lleva siempre subjuntivo: acabe."),
      fb("Tus planes.", "Ahorraré para que ___ ir de vacaciones. (poder, nosotros)", "podamos", "Para que con otro sujeto (nosotros) → subjuntivo: podamos."),
      fb("Tus planes.", "No me acostaré hasta que ___ el informe. (terminar, yo)", "termine", "Hasta que + acción futura → presente de subjuntivo: termine."),
      fb("Tus planes.", "Normalmente, cuando ___ del trabajo, estoy agotado. (salir)", "salgo", "Normalmente marca un hábito: el hecho es real → indicativo, salgo."),
      toEs("Cuando llego a casa, me ducho.", "Cuando llegue a casa, me ducharé.", "Al convertir el hábito en plan, cuando pasa a subjuntivo (llegue) y la principal a futuro (me ducharé).", ["Cuando llegue a casa, me voy a duchar.", "Cuando llegue a casa, voy a ducharme.", "Cuando llegue a casa, me ducho."], "Cambia el hábito por un plan para esta noche."),
      toEs("El sábado, cuando me levantaré, haré la compra.", "El sábado, cuando me levante, haré la compra.", "Detrás de cuando no va futuro: un plan va con presente de subjuntivo, me levante. El futuro va solo en la principal (haré).", [], "Corrige la frase."),
      { type: "speak", prompt: "¿Qué harás cuando termine esta semana? Responde en voz alta con «Cuando termine la semana, …» (por ejemplo: dormir mucho).", text: "Cuando termine la semana, dormiré mucho.", explanation: "Plan futuro: cuando + presente de subjuntivo (termine) y futuro en la principal (dormiré)." },
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
        [
          "Recuerda la regla: cuando el verbo principal está en pasado (pidió, sorprendió, buscaba, ayudó), el subjuntivo que depende de él pasa al imperfecto: que llegara, que saludara, para que no me perdiera. El relato está en pasado y todo el subjuntivo lo acompaña. Si el verbo principal vuelve al presente (hoy me alegra), vuelve el presente de subjuntivo.",
          "«Mi primer día, la jefa me pidió que llegara a las ocho. Me sorprendió que nadie me saludara. Buscaba a alguien que me explicara el sistema, pero no había nadie que tuviera tiempo. Al final, un compañero me ayudó para que no me perdiera.»",
        ],
        [
          ["Me sorprendió que nadie me saludara.", "It surprised me that nobody greeted me. (sorprendió, pasado → saludara)"],
        ],
        [
          fb("Completa otro momento del día.", "El informático me pidió que ___ la contraseña antes de las doce. (cambiar)", "cambiara", "Pidió está en pasado y hay cambio de sujeto: que + imperfecto de subjuntivo (cambiara, o cambiase). «Cambie» rompería la concordancia con el pasado."),
        ]
      ),
    ],
    [
      mc("¿Por qué el relato dice «me sorprendió que nadie me saludara» y no «que nadie me saluda»?", ["Una reacción (sorprender) pide subjuntivo, y en pasado va en imperfecto.", "Porque nadie siempre exige el condicional.", "Porque saludar es un verbo irregular.", "Porque el imperfecto de subjuntivo es más educado."], 0, "Los verbos de emoción o reacción (sorprender, alegrar, molestar) llevan subjuntivo en la subordinada. Como sorprendió está en pasado, el subjuntivo va en imperfecto: saludara. «Saluda» es indicativo, imposible aquí."),
      toEs("Necesito un compañero que me enseñe dónde está la cafetería.", "Necesitaba un compañero que me enseñara dónde estaba la cafetería.", "Al pasar necesito a necesitaba, el subjuntivo de la relativa (antecedente desconocido) pasa al imperfecto: enseñara. Estaba también acompaña al pasado.", ["Necesitaba un compañero que me enseñase dónde estaba la cafetería.", "Necesitaba a un compañero que me enseñara dónde estaba la cafetería."], "Pasa la frase al pasado: empieza con «Necesitaba»."),
      toEs("En la oficina no había nadie que sabía usar la impresora.", "En la oficina no había nadie que supiera usar la impresora.", "Con un antecedente que no existe (no había nadie que) la relativa va en subjuntivo; en pasado, imperfecto: supiera (de saber, irregular). «Sabía» sería indicativo.", ["En la oficina no había nadie que supiese usar la impresora."], "Corrige la frase."),
      toEs("Mi compañera me dibuja un plano para que no me pierda.", "Mi compañera me dibujó un plano para que no me perdiera.", "Para que siempre lleva subjuntivo; si el verbo principal pasa al pretérito (dibujó), el subjuntivo pasa al imperfecto: perdiera.", ["Mi compañera me dibujó un plano para que no me perdiese."], "Pasa la frase al pasado: el plano te lo dibujó ayer."),
      fb("Completa.", "Hoy me alegra que mis compañeros ___ tan amables. (ser)", "sean", "Aquí el verbo principal está en presente (hoy me alegra), así que el subjuntivo vuelve al presente: sean. «Fueran» solo iría con «me alegró» o «me alegraba»."),
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
        [
          "Recuerda la regla: el subjuntivo de la subordinada sigue al verbo principal. Principal en presente (o futuro, o imperativo) → presente de subjuntivo: me pide que vaya. Principal en pasado o en condicional → imperfecto de subjuntivo: me pidió que fuera, me gustaría que vinieras.",
          "Por qué el condicional también arrastra el imperfecto: «me gustaría que vinieras» presenta el deseo como hipotético, y el imperfecto de subjuntivo es el tiempo de lo hipotético. «Me gustaría que vengas» se oye en algunas zonas de América, pero la norma general es vinieras.",
        ],
        [
          ["Me pidió que fuera.", "He asked me to go. (pidió → fuera)"],
          ["Me encantaría que vinieras.", "I'd love you to come. (condicional → vinieras)"],
        ],
        [
          fb("Par.", "Me pide que ___. (ir)", "vaya", "El verbo principal está en presente (pide): presente de subjuntivo, vaya."),
        ]
      ),
    ],
    [
      toEs("Mi jefa me pide que vaya a su despacho.", "Mi jefa me pidió que fuera a su despacho.", "Con el verbo principal en pasado (pidió), el subjuntivo pasa al imperfecto: vaya → fuera (de ir).", ["Mi jefa me pidió que fuese a su despacho."], "Pasa la frase al pasado: empieza por «Mi jefa me pidió»."),
      fb("Par.", "Es necesario que lo ___. (saber, tú)", "sepas", "Es necesario está en presente: presente de subjuntivo de saber, sepas."),
      fb("Par.", "Era necesario que lo ___. (saber, tú)", "supieras", "Era necesario está en pasado: imperfecto de subjuntivo, supieras (de supieron)."),
      fb("Par.", "Prefiero que no ___ nada. (decir, ellos)", "digan", "Prefiero (presente) → presente de subjuntivo: digan."),
      fb("Par.", "Preferiría que no ___ nada. (decir, ellos)", "dijeran", "El condicional en la principal (preferiría) pide imperfecto de subjuntivo: dijeran, no «digan»."),
      fb("Par.", "No creo que ___ razón. (tener, él)", "tenga", "No creo que (presente) → presente de subjuntivo: tenga."),
      fb("Par.", "No creí que ___ razón. (tener, él)", "tuviera", "No creí (pasado) → imperfecto de subjuntivo: tuviera (de tuvieron)."),
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
        [
          "Recuerda la regla: el tiempo tras si dice cuánto crees en la condición. Real: si + presente (si llueve, me quedo / me quedaré). Irreal de presente: si + imperfecto de subjuntivo + condicional (si lloviera, me quedaría). Irreal de pasado: si + pluscuamperfecto de subjuntivo + condicional compuesto (si hubiera llovido, me habría quedado). Tras si nunca van el futuro ni el condicional.",
          "Al escribir lo que oyes: habría, hubiera y haber llevan h (habría no es abría, de abrir); hubiéramos y tuviéramos llevan tilde; la coma separa la condición cuando va primero.",
        ],
        [
          ["Si lloviera, me quedaría.", "If it rained, I'd stay. (irreal de presente)"],
          ["Si hubiera llovido, me habría quedado.", "If it had rained, I'd have stayed. (irreal de pasado)"],
        ],
        [
          wo("Si tienes hambre, come algo.", "Condición real: si + presente, y la consecuencia puede ser un imperativo (come).", "If you're hungry, eat something."),
        ]
      ),
    ],
    [
      wo("Si tuviera hambre, comería algo.", "Irreal de presente: si + imperfecto de subjuntivo (tuviera) + condicional (comería).", "If I were hungry, I'd eat something."),
      wo("Si hubiera tenido hambre, habría comido algo.", "Irreal de pasado: hubiera + participio y habría + participio, los dos con h.", "If I had been hungry, I'd have eaten something."),
      wo("Si no fuera tan caro, lo compraría.", "Irreal de presente con ser: fuera + compraría.", "If it weren't so expensive, I'd buy it."),
      wo("Si me lo hubieras pedido, te lo habría prestado.", "Irreal de pasado; los pronombres van delante de los auxiliares (me lo hubieras, te lo habría).", "If you had asked me, I would have lent it to you."),
      toEs("Si tengo dinero, te ayudo.", "Si tuviera dinero, te ayudaría.", "De condición real a irreal de presente: tengo → tuviera (imperfecto de subjuntivo) y ayudo → ayudaría (condicional).", ["Si tuviese dinero, te ayudaría."], "Cambia a irreal de presente: no tienes dinero."),
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
        [
          "Recuerda la regla: condicional compuesto = habría, habrías, habría, habríamos, habríais, habrían + participio. Solo cambia habría; el participio es invariable. Los irregulares más frecuentes: hecho, dicho, puesto, visto, vuelto, escrito, roto, abierto, cubierto, muerto, resuelto.",
          "El truco de las familias: los compuestos heredan el participio irregular de su verbo base. Poner → puesto, así que componer → compuesto, proponer → propuesto. Volver → vuelto: devolver → devuelto, envolver → envuelto. Escribir → escrito: describir → descrito. Hacer → hecho: deshacer → deshecho, satisfacer → satisfecho.",
        ],
        [
          ["Yo no lo habría dicho así.", "I wouldn't have said it like that. (decir → dicho)"],
          ["Habrían propuesto otra fecha.", "They would have proposed another date. (poner → puesto, proponer → propuesto)"],
        ],
        [
          fb("Rápido.", "Tú nunca le ___ eso a tu madre. (decir)", "habrías dicho", "Condicional compuesto de tú: habrías + participio irregular dicho (no «decido»)."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si hubiera podido, ___ antes. (volver, yo)", "habría vuelto", "Consecuencia de un pasado irreal: habría + participio irregular vuelto (no «volvido»)."),
      fb("Rápido.", "Yo ___ la ventana. (abrir)", "habría abierto", "Abrir tiene participio irregular: abierto (no «abrido»)."),
      fb("Rápido.", "Nosotros lo ___ de otra manera. (hacer)", "habríamos hecho", "Nosotros: habríamos + hecho (participio irregular de hacer)."),
      fb("Rápido.", "Ellos no ___ esa carta. (escribir)", "habrían escrito", "Ellos: habrían + escrito (no «escribido»)."),
      fb("Rápido.", "¿Dónde ___ tú las llaves? (poner)", "habrías puesto", "Tú: habrías + puesto (no «ponido»)."),
      fb("Rápido.", "Con más cuidado, no se ___ el vaso. (romper)", "habría roto", "«Con más cuidado» funciona como condición; romper → roto (no «rompido»)."),
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
        [
          "Recuerda la regla: una pregunta de sí o no se cuenta con si (¿Tienes coche? → Me preguntó si tenía coche). Una pregunta con interrogativo lo conserva, con su tilde (¿Dónde vives? → Me preguntó dónde vivía). Con preguntó en pasado, los tiempos retroceden: presente → imperfecto, futuro → condicional, perfecto e indefinido → pluscuamperfecto.",
          "¿Por qué? Porque cuentas la pregunta desde un momento posterior: lo que era presente para quien preguntaba ya es pasado para ti. El modo no cambia: la pregunta indirecta sigue en indicativo, nunca en subjuntivo.",
        ],
        [
          ["Me preguntó si tenía hermanos.", "She asked me if I had brothers and sisters. (sí/no → si; presente → imperfecto)"],
          ["Le preguntaron cuándo volvería.", "They asked him when he would come back. (futuro → condicional)"],
          ["Quiso saber dónde había comprado el abrigo.", "She wanted to know where I had bought the coat. (indefinido → pluscuamperfecto)"],
        ],
        [
          fb("Pasa a estilo indirecto.", "«¿Juegas al tenis?» → Me preguntó ___ jugaba al tenis.", "si", "Una pregunta de sí o no se cuenta con «si»: me preguntó si jugaba al tenis. «Que» no introduce preguntas."),
        ]
      ),
    ],
    [
      fb("Pasa a estilo indirecto.", "«¿Dónde vives?» → Me preguntó dónde ___.", "vivía", "En la pregunta indirecta pasada, el presente pasa a imperfecto: vives → vivía. Dónde conserva la tilde."),
      fb("Pasa a estilo indirecto.", "«¿Qué estudiarás?» → Me preguntó qué ___.", "estudiaría", "Futuro → condicional al contarlo en pasado: estudiarás → estudiaría."),
      fb("Pasa a estilo indirecto.", "«¿Has comido?» → Me preguntó si ___.", "había comido", "Perfecto → pluscuamperfecto: has comido → había comido."),
      { ...fb("Pasa a estilo indirecto.", "«¿Por qué te fuiste?» → Me preguntó por qué me ___.", "había ido", "El indefinido suele pasar a pluscuamperfecto (te fuiste → me había ido), aunque también es correcto mantenerlo (me fui)."), altAnswers: ["fui"] },
      fb("Pasa a estilo indirecto.", "«¿Cuánto cuesta?» → Me preguntó cuánto ___.", "costaba", "Presente → imperfecto: cuesta → costaba."),
      toEs("He asked me where I worked.", "Me preguntó dónde trabajaba.", "En la pregunta indirecta, «dónde» mantiene la tilde y el presente pasa a imperfecto.", ["Me preguntó dónde estaba trabajando."]),
      toEs("Me preguntó dónde haya aparcado el coche.", "Me preguntó dónde había aparcado el coche.", "La pregunta indirecta va en indicativo, nunca en subjuntivo: dónde había aparcado (pluscuamperfecto, porque aparcar es anterior a la pregunta).", ["Me preguntó dónde había dejado el coche."], "Corrige la frase."),
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
        [
          "Recuerda la regla: el español no tiene un solo verbo para «become / get»; eliges según el tipo de cambio. Ponerse + adjetivo: un cambio rápido y pasajero de estado o emoción (se puso rojo, me pongo nerviosa). Volverse + adjetivo: un cambio de carácter que llega poco a poco y se queda (se ha vuelto desconfiado).",
          "Hacerse: un cambio que la persona busca o consigue, como una profesión, una religión o una ideología (se hizo abogado, se hizo vegano) o el dinero (hacerse rico). Convertirse en + sustantivo: una transformación en otra cosa, siempre con «en». Llegar a ser: la meta final de un proceso largo, sin «se».",
          "Pregúntate: ¿dura un momento (ponerse), cambia la personalidad (volverse), lo ha buscado (hacerse), se transforma en otra cosa (convertirse en) o es la cima de una carrera (llegar a ser)?",
        ],
        [
          ["Se puso colorado cuando le hicieron el cumplido.", "He went red when they paid him the compliment. (momento: ponerse)"],
          ["Se hizo médica después de muchos años de guardias.", "She became a doctor after many years of shifts. (profesión buscada: hacerse)"],
        ],
        [
          fb("Rápido.", "Se ___ rico con el negocio. (indefinido)", "hizo", "Enriquecerse con trabajo es un cambio conseguido, así que va con hacerse: se hizo rico. Ponerse rico es coloquial y volverse rico no se usa."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Me ___ nerviosa en los exámenes. (presente)", "pongo", "Los nervios de un examen llegan y se van: es un estado pasajero, así que ponerse (me pongo). Volverse nerviosa significaría que ha cambiado su carácter."),
      fb("Completa con el participio de ponerse, volverse o hacerse.", "Con los años, se ha ___ muy desconfiado.", "vuelto", "«Volverse» + adjetivo expresa un cambio de carácter duradero."),
      fb("Rápido.", "La casa se ___ en un hotel. (indefinido)", "convirtió", "La casa pasa a ser otra cosa (un hotel): transformación con convertirse en. Fíjate en que el «en» ya está en la frase; volverse o hacerse no llevan «en»."),
      fb("Rápido.", "___ campeona del mundo. (llegar a ser, indefinido)", "Llegó a ser", "Ser campeona del mundo es la cima de una trayectoria: llegar a ser, que no es pronominal (no lleva «se»)."),
      { ...fb("Rápido.", "Se ___ vegano hace un año. (indefinido)", "hizo", "Hacerse vegano es una decisión propia, como adoptar una ideología o una religión: hacerse. Ponerse no vale porque no es un estado pasajero."), altAnswers: ["volvió"] },
      fb("Rápido.", "Se ___ pálido al ver la sangre. (indefinido)", "puso", "Ponerse pálido es una reacción física inmediata y breve: ponerse. Volverse pálido sugeriría un cambio permanente."),
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
        [
          "Recuerda la regla: la misma concesión admite tres estructuras, y al pasar de una a otra cambia lo que viene detrás del conector. Aunque + verbo conjugado (Aunque llovía, salimos). A pesar de + sustantivo o infinitivo (A pesar de la lluvia / A pesar de estar cansados, salimos), o a pesar de que + verbo conjugado. Sin embargo abre una oración nueva tras punto o punto y coma, con coma detrás (Llovía. Sin embargo, salimos).",
          "Para transformar: con a pesar de, busca el sustantivo de la familia del verbo (llover → la lluvia, cansarse → el cansancio) o usa el infinitivo si el sujeto es el mismo; con sin embargo, separa las dos ideas en dos oraciones y quita el aunque.",
        ],
        [
          ["A pesar de la lluvia, salimos.", "Despite the rain, we went out. (llovía → la lluvia)"],
          ["A pesar de estar agotados, seguimos.", "Despite being exhausted, we carried on. (mismo sujeto → infinitivo)"],
        ],
        [
          fb("Transforma.", "Aunque tenía fiebre, fue a trabajar. → A pesar de ___ fiebre, fue a trabajar.", "tener", "«A pesar de» va seguido de infinitivo cuando el sujeto es el mismo: tenía → tener."),
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
        [
          "Recuerda la regla: para elegir, pregúntate qué relación hay entre los dos sustantivos. Si el segundo pertenece al primero (el director de la empresa), es posesión: cuyo = whose, y concuerda con lo poseído (cuyo director). Si solo hay una preposición que une la relativa con el antecedente (trabajo para la empresa), es el cual = which/whom, y concuerda con el antecedente (para la cual).",
          "Una pista visual: cuyo va siempre seguido de un sustantivo (cuyo director, cuyas ventanas); el cual va seguido directamente del verbo o del sujeto de la relativa (para la cual trabajo). Cuyo también puede ir tras preposición: la vecina en cuyo jardín jugábamos.",
        ],
        [
          ["Es la empresa para la cual trabajo.", "It's the company I work for. (preposición → la cual, concuerda con empresa)"],
          ["Es la empresa cuyo director conozco.", "It's the company whose director I know. (posesión → cuyo, concuerda con director)"],
          ["Es la vecina en cuyo jardín jugábamos.", "She's the neighbour in whose garden we used to play. (preposición + cuyo)"],
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
      fb("Completa con cuyo o el cual, en la forma correcta.", "Es el parque en ___ jugaba de niño.", "el cual", "Tras preposición se usa «el cual» (o «el que»), concordando con «parque»."),
      fb("Completa con cuyo o el cual, en la forma correcta.", "Es el parque ___ árboles son centenarios.", "cuyos", "Para expresar posesión se usa «cuyo», que concuerda con «árboles»."),
      fb("Completa con cuyo o el cual, en la forma correcta.", "Son las amigas con ___ viajé a Cuba.", "las cuales", "Tras preposición se usa «las cuales» (o «las que»), concordando con «amigas»."),
      fb("Completa con cuyo o el cual, en la forma correcta.", "Son las amigas ___ padres tienen un barco.", "cuyos", "Para expresar posesión se usa «cuyo», que concuerda con «padres», no con «amigas»."),
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
        [
          "Una noticia mezcla cuatro reglas. Pasiva con ser: cuando importa lo que le pasa a algo y no quién lo hace, usas ser + participio, que concuerda con el sujeto (el puente fue construido, las calles serán asfaltadas).",
          "Estilo indirecto: con un verbo de lengua en pasado (aseguró, dijo, anunció) el futuro pasa a condicional (terminarán → terminarían), porque se cuenta desde el pasado. Si el verbo pide algo (pedir, exigir), la subordinada va en imperfecto de subjuntivo (pidieron que se mantuviera).",
          "Conectores: sin embargo marca un contraste, dado que / ya que introducen una causa conocida con indicativo. Y las valoraciones de probabilidad (es probable que, es posible que) piden subjuntivo, porque no afirman un hecho. Vas a completar esta noticia: «El puente, que ___ construido en 1890, será restaurado. El alcalde aseguró que las obras ___ antes del verano. ___, los vecinos pidieron que se ___ abierto un carril. ___ el tráfico es intenso, es probable que ___ retrasos.»",
        ],
        [
          ["La concejala anunció que la piscina abriría en julio.", "The councillor announced that the pool would open in July. (abrirá → abriría)"],
          ["Las calles serán asfaltadas en otoño.", "The streets will be paved in autumn. (asfaltadas concuerda con calles)"],
        ],
        [
          fb("Completa.", "El puente, que ___ construido en 1890, será restaurado. (ser)", "fue", "Pasiva con ser + participio: el puente recibe la acción. Indefinido (fue) porque es una acción terminada con fecha (1890); «era construido» describiría un proceso."),
        ]
      ),
    ],
    [
      fb("Completa.", "El alcalde aseguró que las obras ___ antes del verano. (terminar)", "terminarían", "Estilo indirecto con verbo en pasado (aseguró): lo que el alcalde dijo en futuro (terminarán) pasa a condicional. Aseguró transmite información, así que no lleva subjuntivo."),
      fb("Completa.", "___, los vecinos pidieron…", "Sin embargo", "«Sin embargo» marca contraste con lo anterior y va seguido de coma."),
      fb("Completa.", "…que se ___ abierto un carril. (mantener)", "mantuviera", "Pedir que expresa influencia, así que va con subjuntivo, y como pidieron está en pasado, el subjuntivo es imperfecto: mantuviera (no mantenga ni mantenía)."),
      fb("Completa.", "___ el tráfico es intenso… (causa)", "Dado que", "El tráfico intenso es la causa conocida de los retrasos: dado que (o ya que, puesto que) + indicativo. Sin embargo o aunque expresarían contraste."),
      fb("Completa.", "…es probable que ___ retrasos. (haber)", "haya", "Es probable que valora, no afirma, así que pide subjuntivo: haya. El presente de subjuntivo sirve también para el futuro."),
      toEs("The mayor said the bridge would reopen in June.", "El alcalde dijo que el puente volvería a abrir en junio.", "En estilo indirecto con «dijo», el futuro pasa a condicional: «volvería».", ["El alcalde dijo que el puente reabriría en junio."]),
    ]
  ),
  L(
    "el-horno-de-la-calle-mayor",
    "b2d-rep-mezcla-elige-modo",
    "Elige y explica: indicativo o subjuntivo en todas las estructuras",
    "Repaso espaciado: decide entre indicativo y subjuntivo tras verbos de certeza y emoción, con antecedentes conocidos o no y con cuando.",
    "6 min",
    [
      sec(
        "La gran pregunta",
        [
          "Recuerda la gran pregunta que decide el modo: ¿lo presento como información real y comprobada, o no? Indicativo para lo que afirmas: información y certeza (sé que, es evidente que, creo que), hábitos y hechos pasados (siempre que llega, cuando era niño), antecedentes conocidos (tengo un vecino que repara…).",
          "Subjuntivo para lo que no afirmas: deseo (espero que), duda o negación (no creo que, dudo que), emoción o valoración ante un hecho (me alegra que), futuro tras conjunción (cuando llegues), antecedente desconocido (busco a alguien que sepa), finalidad (para que) e hipótesis. Fíjate en las parejas: una sola palabra (no, cuando + futuro, busco/tengo) cambia el modo.",
        ],
        [
          ["Sé que viene / Espero que venga.", "I know he's coming / I hope he comes. (información / deseo)"],
          ["Creo que tienes razón / No creo que tengas razón.", "I think you're right / I don't think you're right. (la negación cambia el modo)"],
          ["Siempre me llama cuando llega / Llámame cuando llegues.", "He always calls me when he arrives / Call me when you arrive. (hábito / futuro)"],
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
      fb("Elige.", "Me alegra que ___ bien. (estar, tú)", "estés", "Una emoción ante un hecho (me alegra que) pide subjuntivo: estés."),
      fb("Elige.", "Veo que ___ bien. (estar, tú)", "estás", "Un verbo de percepción (veo que) presenta información comprobada: indicativo, estás."),
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
        [
          "Recuerda la regla: el modo de la relativa depende de si el antecedente existe para quien habla. En la pregunta no sabes si existe → subjuntivo (¿conoces a alguien que arregle bicis?). En una respuesta afirmativa ya es alguien concreto → indicativo (mi vecino arregla bicis). En una respuesta negativa no existe → subjuntivo (no conozco a nadie que las arregle).",
          "Por eso en una misma conversación el verbo cambia de modo: no es un error, es la señal de que el antecedente ha pasado de incierto a real (o a inexistente).",
        ],
        [
          ["—¿Hay alguien que tenga un bolígrafo? —Yo tengo uno.", "Is there anyone who has a pen? I have one. (pregunta: tenga; respuesta real: tengo)"],
          ["—¿Conoces a alguien que arregle bicis? —No, no conozco a nadie que las arregle.", "Do you know anyone who fixes bikes? No, I don't know anyone who fixes them. (inexistente: subjuntivo)"],
        ],
        [
          fb("Pregunta.", "¿Conoces a alguien que ___ muebles a domicilio? (montar)", "monte", "Preguntas por alguien que quizá no existe: la relativa va en subjuntivo, monte."),
        ]
      ),
    ],
    [
      fb("Responde.", "—Sí, mi cuñado ___ muebles los fines de semana. (montar)", "monta", "Ahora hablas de una persona real y concreta (mi cuñado): indicativo, monta."),
      fb("Responde.", "—No, no conozco a nadie que ___ a domicilio. (venir)", "venga", "Con nadie como antecedente, la persona no existe para ti: subjuntivo, venga."),
      fb("Pregunta.", "¿Hay algún médico aquí que ___ inglés? (hablar)", "hable", "No sabes si existe ese médico: subjuntivo, hable."),
      fb("Responde.", "—Sí, la doctora Ruiz ___ inglés. (hablar)", "habla", "La respuesta nombra a una persona concreta: indicativo, habla. El subjuntivo era solo para la pregunta."),
      fb("Pregunta.", "¿Había alguien en el aeropuerto que te ___ ayudar? (poder)", "pudiera", "Antecedente incierto en una pregunta en pasado (había): imperfecto de subjuntivo, pudiera."),
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
        [
          "Recuerda la regla: cuando, en cuanto, hasta que o después de que llevan subjuntivo si hablan de algo que aún no ha pasado (cuando lleguen) e indicativo si hablan de un hábito o del pasado (cuando vinieron). Para que y antes de que llevan siempre subjuntivo, porque lo que introducen todavía no es un hecho. Con el mismo sujeto se usa el infinitivo: antes de salir, para poder pasear.",
          "«Cuando lleguen los abuelos, iremos a buscarlos a la estación. Antes de que lleguen, limpiaremos la habitación de invitados. Les compraremos un mapa para que puedan pasear solos. Y en cuanto se vayan, ¡a dormir la siesta!»",
        ],
        [
          ["Antes de que lleguen, limpiaremos la habitación.", "Before they arrive, we'll clean the room. (antes de que: siempre subjuntivo)"],
        ],
        [
          fb("Completa otro momento del plan.", "Cuando los abuelos ___ el jardín nuevo, se van a quedar con la boca abierta. (ver)", "vean", "Todavía no lo han visto: cuando + acción futura pide presente de subjuntivo (vean). «Verán» tras cuando es un error típico."),
        ]
      ),
    ],
    [
      mc("¿Por qué el plan dice «antes de que lleguen, limpiaremos» y no «antes de llegar, limpiaremos»?", ["Porque los sujetos son distintos: ellos llegan, nosotros limpiamos.", "Porque antes de nunca va con infinitivo.", "Porque llegar es irregular.", "Porque el plan está en futuro y el futuro exige que."], 0, "Con sujetos distintos se usa antes de que + subjuntivo (lleguen). «Antes de llegar» significaría que nosotros llegamos. Antes de + infinitivo es correcto cuando el sujeto es el mismo."),
      toEs("Les dejo una bici para que vayan solos al pueblo.", "Les dejé una bici para que fueran solos al pueblo.", "Para que siempre lleva subjuntivo; si el verbo principal pasa al pretérito (dejé), el subjuntivo pasa al imperfecto: fueran (de ir).", ["Les dejé una bici para que fuesen solos al pueblo.", "Les dejé una bicicleta para que fueran solos al pueblo."], "Pasa la frase al pasado: la bici se la dejaste el verano pasado."),
      toEs("En cuanto el abuelo se despertará, iremos al mercado.", "En cuanto el abuelo se despierte, iremos al mercado.", "En cuanto con valor de futuro lleva presente de subjuntivo (se despierte), nunca futuro. El futuro va solo en la oración principal (iremos).", ["En cuanto se despierte el abuelo, iremos al mercado."], "Corrige la frase."),
      fb("Completa.", "La última vez, cuando ___, nos trajeron turrón. (venir)", "vinieron", "«La última vez» habla de un hecho pasado: cuando + indicativo (vinieron). El subjuntivo (vengan) solo va con cuando si la acción es futura."),
      fb("Completa.", "Aunque ___ cansados del viaje, querrán salir. (estar — no lo sabemos)", "estén", "No sabemos si estarán cansados: aunque + subjuntivo (estén) presenta una posibilidad. Con indicativo (aunque están) afirmarías que ya lo sabes."),
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
        [
          "Recuerda la regla: cuando, en cuanto, hasta que y antes de que llevan subjuntivo si lo que introducen todavía no ha pasado. El tiempo del subjuntivo depende del punto de vista: desde ahora, presente (te llamaré cuando llegue); desde un momento pasado, imperfecto (dijo que me llamaría cuando llegara).",
          "Por qué: en «dijo que me llamaría cuando llegara», la llegada era futura para él cuando lo dijo, aunque para ti ya sea pasado. El condicional (llamaría) y el imperfecto de subjuntivo (llegara) son el «futuro visto desde el pasado».",
        ],
        [
          ["Dijo que me llamaría cuando llegara.", "He said he'd call me when he arrived. (futuro desde el pasado)"],
          ["Te llamaré cuando llegue.", "I'll call you when I arrive. (futuro desde ahora)"],
        ],
        [
          fb("Par.", "Os escribiremos en cuanto ___ el resultado. (saber, nosotros)", "sepamos", "Futuro visto desde ahora (escribiremos): en cuanto + presente de subjuntivo, sepamos. Nunca «en cuanto sabremos»."),
        ]
      ),
    ],
    [
      toEs("«Te llamaré cuando llegue a Bogotá.»", "Dijo que me llamaría cuando llegara a Bogotá.", "Futuro visto desde el pasado: llamaré → llamaría y cuando llegue → cuando llegara (imperfecto de subjuntivo). El te de quien habla pasa a me.", ["Me dijo que me llamaría cuando llegara a Bogotá.", "Dijo que me llamaría cuando llegase a Bogotá."], "Pasa la frase al estilo indirecto: te lo dijo tu hermano. Empieza por «Dijo que»."),
      fb("Par.", "Me iré en cuanto ___ la película. (terminar)", "termine", "Futuro desde ahora (me iré): en cuanto + presente de subjuntivo, termine."),
      fb("Par.", "Prometió que se iría en cuanto ___ la película. (terminar)", "terminara", "Futuro visto desde el pasado (prometió, se iría): en cuanto + imperfecto de subjuntivo, terminara."),
      fb("Par.", "Esperaré hasta que me ___. (llamar, tú)", "llames", "Desde ahora (esperaré): hasta que + presente de subjuntivo, llames."),
      fb("Par.", "Dijo que esperaría hasta que la ___. (llamar, yo)", "llamara", "Desde el pasado (dijo, esperaría): hasta que + imperfecto de subjuntivo, llamara."),
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
        [
          "Recuerda la regla de la secuencia de tiempos: si el verbo que pide el subjuntivo está en pasado (querían, prefería, permitieron), el subjuntivo también se pone en pasado: imperfecto de subjuntivo (trabajara, dejaran, fuera). El presente de subjuntivo (trabaje) solo sigue a un verbo en presente o futuro.",
          "¿Por qué? El subjuntivo se ancla en el tiempo del verbo principal: una petición hecha en el pasado se cumplía (o no) en ese pasado. Ahora busca los cuatro errores de esta carta: «Querida Ana: el verano pasado mis padres querían que trabaje en su tienda. Yo prefería que me dejen viajar. Al final me permitieron que vaya a Italia con la condición de que les escriba cada semana.»",
        ],
        [
          ["Mi jefe quería que trabajara los sábados.", "My boss wanted me to work on Saturdays. (quería → trabajara)"],
          ["Mi jefe quiere que trabaje los sábados.", "My boss wants me to work on Saturdays. (quiere → trabaje)"],
        ],
        [
          mc(
            "¿Por qué «querían que trabaje» es incorrecto?",
            ["Principal en pasado → imperfecto de subjuntivo.", "Falta un pronombre.", "Debe ser indicativo.", "Nada."],
            0,
            "Si el verbo principal está en pasado (querían), la subordinada va en imperfecto de subjuntivo: que trabajara. No falta pronombre, el indicativo no sirve con querer que y sí hay error."
          ),
          fb("Completa.", "Mi entrenador nos exigió que ___ a las siete en punto. (llegar)", "llegáramos", "«Exigió» es un verbo de influencia en pasado → imperfecto de subjuntivo: llegáramos (con tilde en nosotros). «Lleguemos» rompería la secuencia."),
        ]
      ),
    ],
    [
      toEs("Mis padres querían que trabaje en su tienda.", "Mis padres querían que trabajara en su tienda.", "Con «querían» en pasado, el subjuntivo va en imperfecto: «trabajara», no «trabaje».", ["Mis padres querían que trabajase en su tienda."], "Corrige la frase."),
      toEs("Yo prefería que me dejen viajar.", "Yo prefería que me dejaran viajar.", "Con «prefería» en pasado, el subjuntivo va en imperfecto: «dejaran», no «dejen».", ["Prefería que me dejaran viajar."], "Corrige la frase."),
      toEs("Me permitieron que vaya a Italia.", "Me permitieron que fuera a Italia.", "Con «permitieron» en pasado, el subjuntivo va en imperfecto: «fuera», no «vaya».", ["Me permitieron ir a Italia."], "Corrige la frase."),
      toEs("…con la condición de que les escriba cada semana.", "…con la condición de que les escribiera cada semana.", "La condición depende de un verbo en pasado, así que va en imperfecto de subjuntivo: «escribiera».", ["con la condición de que les escribiera cada semana."], "Corrige la frase."),
      toEs("Ojalá que el año que viene me dejaran otra vez.", "Ojalá que el año que viene me dejen otra vez.", "«Ojalá me dejaran» no es incorrecto, pero presenta el deseo como poco probable; si lo ves posible, lo natural es el presente de subjuntivo: «dejen».", ["Ojalá el año que viene me dejen otra vez."], "Cambia el verbo para presentar el deseo como posible."),
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
        [
          "Recuerda la regla: para imaginar un presente distinto del real se usa si + imperfecto de subjuntivo (existiera, hubiera, tuviera) y, en la consecuencia, condicional (escribiría, iría). El imperfecto de subjuntivo marca que la condición no es real ahora.",
          "Dos trampas: después de si nunca va el condicional (✗ si tendría) ni el presente de subjuntivo (✗ si tenga); y haber impersonal sigue en singular: si no hubiera coches. El orden de las dos partes puede cambiar: Dormiría más si los días tuvieran treinta horas.",
        ],
        [
          ["Si no existiera internet, escribiría cartas.", "If the internet didn't exist, I'd write letters."],
          ["Si no hubiera coches, iría en bici a todas partes.", "If there were no cars, I'd cycle everywhere. (hubiera, singular)"],
          ["Viajaría más si no tuviera hijos pequeños.", "I'd travel more if I didn't have small children. (la consecuencia puede ir delante)"],
        ],
        [
          fb("Imagina.", "Si los aviones no ___, tardaríamos semanas en cruzar el océano. (existir)", "existieran", "Imaginamos un presente que no es real → si + imperfecto de subjuntivo: existieran (concuerda con «los aviones»). «Existirían» es condicional y nunca va detrás de si."),
        ]
      ),
    ],
    [
      fb("Imagina.", "Si no hubiera supermercados, ___ la comida en el mercado del barrio. (comprar, yo)", "compraría", "La consecuencia de una hipótesis irreal va en condicional: compraría. El imperfecto de subjuntivo ya está en la parte con si."),
      fb("Imagina.", "Si los días ___ treinta horas, dormiría más. (tener)", "tuvieran", "Detrás de si, para una hipótesis irreal, imperfecto de subjuntivo; tener es irregular: tuvieran. «Tendrían» es condicional y no va tras si."),
      fb("Imagina.", "Si no ___ que trabajar, viajaría por el mundo. (tener, yo)", "tuviera", "Si + imperfecto de subjuntivo de tener (yo): tuviera. Nunca «tendría» ni «tenga» después de si."),
      fb("Imagina.", "Si pudiera hablar con los animales, le ___ mil cosas a mi gato. (preguntar)", "preguntaría", "Es la consecuencia de la hipótesis (si pudiera…) → condicional: preguntaría."),
      fb("Imagina.", "Si ___ ser invisible un día, iría al Museo del Prado de noche. (poder)", "pudiera", "Si + imperfecto de subjuntivo; poder cambia la raíz: pudiera, no «podiera»."),
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
        [
          "Recuerda la regla: «como si» compara con algo que no es real, y por eso solo admite dos tiempos, los dos de subjuntivo en pasado. Si lo imaginado ocurre al mismo tiempo → imperfecto de subjuntivo: Habla como si lo supiera todo. Si es anterior → pluscuamperfecto de subjuntivo: Habla como si hubiera estado allí.",
          "El tiempo del verbo principal no cambia nada (habla, habló, hablará… como si fuera). Nunca va presente de indicativo ni de subjuntivo detrás de como si: ✗ como si es, ✗ como si sea.",
        ],
        [
          ["Habla como si lo supiera todo.", "He talks as if he knew everything. (al mismo tiempo → supiera)"],
          ["Habla como si hubiera estado allí.", "He talks as if he had been there. (antes → hubiera estado)"],
        ],
        [
          fb("Rápido.", "Me mira como si me ___. (conocer)", "conociera", "Conocerme sería algo simultáneo a mirarme → como si + imperfecto de subjuntivo: conociera. «Conoce» o «conozca» no pueden ir tras como si."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Me miró como si ___ un fantasma. (ver)", "hubiera visto", "Ver el fantasma sería anterior a mirarme así → pluscuamperfecto de subjuntivo: hubiera visto (participio irregular)."),
      fb("Rápido.", "Gasta como si ___ millonario. (ser)", "fuera", "Ser millonario sería simultáneo a gastar → imperfecto de subjuntivo: fuera."),
      fb("Rápido.", "Actúa como si no ___ nada. (pasar — antes)", "hubiera pasado", "La pista «antes» indica anterioridad → pluscuamperfecto de subjuntivo: hubiera pasado."),
      fb("Rápido.", "Corre como si le ___ la vida en ello. (ir)", "fuera", "«Irle a alguien la vida en algo» es simultáneo a correr → imperfecto de subjuntivo de ir: fuera."),
      fb("Rápido.", "Estaba agotado, como si ___ un maratón. (correr)", "hubiera corrido", "El maratón imaginado sería anterior al cansancio → pluscuamperfecto: hubiera corrido."),
      fb("Rápido.", "Me habla como si ___ su hermano. (ser, yo)", "fuera", "Simultáneo y primera persona: como si (yo) fuera su hermano."),
      mc(
        "«Se comporta como si ___ el jefe.»",
        ["fuera", "es", "será", "sea"],
        0,
        "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: como si fuera el jefe. «Es», «será» y «sea» no pueden seguir a «como si»."
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
        [
          "Recuerda la regla: para imaginar un pasado distinto del real se usa si + pluscuamperfecto de subjuntivo (si hubiera sabido) y, en la consecuencia, condicional compuesto (habría estudiado). Para lamentar algo que ya no se puede cambiar: ojalá + pluscuamperfecto de subjuntivo (ojalá hubiera viajado).",
          "Si la consecuencia llega hasta hoy (ahora, hoy), va en condicional simple: Si hubiera empezado antes, ahora hablaría mejor. Y la condición puede ir escondida en una expresión: yo en tu lugar…, con más paciencia…, sin tu ayuda… + condicional compuesto.",
        ],
        [
          ["Si hubiera sabido lo que sé ahora, habría estudiado otra cosa.", "If I'd known what I know now, I'd have studied something else."],
          ["Ojalá hubiera viajado más de joven.", "I wish I had travelled more when I was young."],
          ["Si me hubiera quedado en mi pueblo, ahora tendría una vida más tranquila.", "If I'd stayed in my village, I'd have a quieter life now. (consecuencia presente → condicional simple)"],
        ],
        [
          fb("Tu pasado.", "Si no ___ el autobús aquel día, nunca habría conocido a mi mujer. (perder, yo)", "hubiera perdido", "Condición irreal sobre el pasado → si + pluscuamperfecto de subjuntivo: hubiera perdido. Nunca «habría perdido» después de si."),
        ]
      ),
    ],
    [
      fb("Tu pasado.", "Si me hubieran ofrecido ese puesto, lo ___ sin dudar. (aceptar, yo)", "habría aceptado", "Consecuencia de una condición pasada → condicional compuesto: habría aceptado (también se oye «hubiera aceptado»)."),
      fb("Tu pasado.", "Ojalá ___ más de joven. (leer, yo)", "hubiera leído", "Lamento sobre el pasado → ojalá + pluscuamperfecto de subjuntivo; ojo a la tilde del participio: leído."),
      fb("Tu pasado.", "Yo en aquella situación ___ de otra manera. (actuar)", "habría actuado", "«En aquella situación» funciona como condición escondida (si yo hubiera estado allí) → condicional compuesto: habría actuado."),
      fb("Tu pasado.", "Si no me ___ a esta ciudad, no te habría conocido. (mudar)", "hubiera mudado", "Tras si, condición pasada irreal → pluscuamperfecto de subjuntivo; el pronombre va delante del auxiliar: me hubiera mudado."),
      fb("Tu pasado.", "Si hubiera empezado antes, ahora ___ mejor. (hablar)", "hablaría", "«Ahora» lleva la consecuencia al presente → condicional simple: hablaría. «Habría hablado» situaría la consecuencia en el pasado."),
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
        [
          "Recuerda la regla: en las dos frases la condición es pasada (si + pluscuamperfecto de subjuntivo: si hubiera ahorrado). Lo que decide el tiempo de la consecuencia es CUÁNDO habría ocurrido: si habría sido entonces, en el pasado → condicional compuesto (habría comprado un coche); si se notaría hoy → condicional simple (ahora tendría un coche).",
          "Las palabras de tiempo lo delatan: ayer, el año pasado, en 2015, anoche → habría + participio; ahora, hoy, ya, todavía → condicional simple. Estas frases se llaman condicionales mixtas.",
        ],
        [
          ["Si hubiera ahorrado, habría comprado un coche.", "If I had saved, I would have bought a car. (entonces)"],
          ["Si hubiera ahorrado, ahora tendría un coche.", "If I had saved, I'd have a car now. (ahora)"],
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
      fb("Elige.", "Si hubiera aprendido chino, ahora ___ en Pekín. (trabajar)", "trabajaría", "«Ahora» sitúa la consecuencia en el presente → condicional simple: trabajaría."),
      fb("Elige.", "Si hubiera aprendido chino, el año pasado ___ en Pekín. (trabajar)", "habría trabajado", "«El año pasado» sitúa la consecuencia en el pasado → condicional compuesto: habría trabajado."),
      fb("Elige.", "Si te hubieras puesto crema, ahora no ___ quemado. (estar)", "estarías", "La quemadura se nota ahora → condicional simple: no estarías quemado."),
      fb("Elige.", "Si no hubiéramos perdido el tren, ya ___ en casa. (estar)", "estaríamos", "«Ya» habla de este momento → condicional simple: estaríamos."),
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
        [
          "Recuerda la regla: cuando cuentas en pasado (dijo, preguntó, pidió) lo que alguien dijo, los tiempos retroceden un paso, porque ahora lo miras desde un momento posterior: presente → imperfecto (está → estaba), futuro → condicional (subirá → subiría), pretérito perfecto o indefinido → pluscuamperfecto (he hablado → había hablado). Las órdenes pasan a que + imperfecto de subjuntivo (pensadlo → que lo pensáramos) y las preguntas de sí o no se introducen con si.",
          "También cambian las personas y las referencias de tiempo: mañana → al día siguiente, ayer → el día anterior.",
          "Esto dijo el casero: «El alquiler subirá en enero. Ya lo he hablado con los otros vecinos. ¿Estáis de acuerdo? Pensadlo y contestadme mañana.» Cuéntaselo a una amiga.",
        ],
        [
          ["«Mañana os traigo las llaves.» → Dijo que al día siguiente nos traería las llaves.", "He said he'd bring us the keys the next day. (presente con valor de futuro → condicional; mañana → al día siguiente)"],
          ["«¿Habéis visto el anuncio?» → Nos preguntó si habíamos visto el anuncio.", "He asked us if we'd seen the ad. (pregunta de sí o no → si; perfecto → pluscuamperfecto)"],
        ],
        [
          fb("Cuenta.", "Nos dijo que el alquiler ___ en enero. (subir)", "subiría", "«Subirá» es futuro; contado desde el pasado pasa a condicional: subiría."),
        ]
      ),
    ],
    [
      fb("Cuenta.", "Añadió que ya lo ___ con los otros vecinos. (hablar)", "había hablado", "«He hablado» (pretérito perfecto) retrocede a pluscuamperfecto: había hablado."),
      fb("Cuenta.", "Nos preguntó si ___ de acuerdo. (estar)", "estábamos", "Pregunta de sí o no → si; el presente «estáis» pasa a imperfecto y la persona cambia a nosotros: estábamos."),
      fb("Cuenta.", "Nos pidió que lo ___. (pensar)", "pensáramos", "Una orden (pensadlo) contada con pedir en pasado pasa a que + imperfecto de subjuntivo: pensáramos."),
      fb("Cuenta.", "…y que le ___ al día siguiente. (contestar)", "contestáramos", "Otra orden (contestadme) → que + imperfecto de subjuntivo; y «mañana» se convierte en «al día siguiente»."),
      fb("Cuenta.", "Le dijimos que no ___ pagar más. (poder)", "podíamos", "Lo que dijimos («no podemos») está en presente → imperfecto: podíamos."),
      toEs("The landlady asked me if I was happy in the flat.", "La casera me preguntó si estaba a gusto en el piso.", "Una pregunta de sí o no («¿Estás a gusto?») se transmite con si, y el presente pasa a imperfecto: estaba.", ["La casera me preguntó si estaba contento en el piso.", "La casera me preguntó si estaba contenta en el piso.", "La casera me preguntó si estaba a gusto en el apartamento.", "La dueña me preguntó si estaba a gusto en el piso."]),
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
        [
          "Recuerda la regla: en vez de repetir siempre «dijo», el verbo introductor resume la intención del hablante: asegurar (certeza), admitir (reconocer), negar (rechazar), prometer (compromiso), advertir (aviso), sugerir (propuesta).",
          "El verbo elegido decide también el modo. Asegurar, admitir y prometer presentan algo como verdadero o seguro → indicativo (admitió que lo había roto). Negar quita la verdad a lo que sigue y sugerir presenta algo que aún no es real (una propuesta) → subjuntivo (negó que lo hubiera roto; sugirió que fuéramos). Advertir funciona según el sentido: si es un aviso para que alguien actúe, subjuntivo (nos advirtió que no nos acercáramos); si informa de un hecho, indicativo (me advirtió que el suelo estaba mojado).",
        ],
        [
          ["Negó que hubiera copiado.", "He denied having copied. (negar → subjuntivo)"],
          ["Admitió que había copiado.", "He admitted he had copied. (admitir → indicativo)"],
          ["Nos sugirió que saliéramos antes.", "She suggested we leave earlier. (sugerir → subjuntivo)"],
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
      { ...fb("Completa.", "«Yo no he sido.» → Negó que ___ él. (ser)", "hubiera sido", "«Negar que» exige subjuntivo: el pluscuamperfecto «hubiera sido» marca que la acción es anterior, aunque «fuera» también es muy frecuente."), altAnswers: ["fuera", "hubiese sido", "fuese"] },
      { ...fb("Completa.", "«Llegaremos a tiempo, seguro.» → Aseguró que ___ a tiempo. (llegar)", "llegarían", "En estilo indirecto con verbo en pasado, el futuro «llegaremos» pasa a condicional «llegarían»."), altAnswers: ["llegaríamos"] },
      toEs("She admitted she had forgotten.", "Admitió que se le había olvidado.", "«Admitir» presenta un hecho reconocido, así que va con indicativo; el pasado pasa a pluscuamperfecto: «se le había olvidado».", ["Reconoció que lo había olvidado.", "Admitió que lo había olvidado."]),
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
        [
          "Recuerda la regla: ser identifica y clasifica (posesión, material, características, y también dónde tiene lugar un evento: la fiesta es en el jardín). Estar sitúa cosas y personas y expresa estados o resultados (la casa está junto al mar, la cocina está equipada). Haber (hay) presenta algo nuevo o indeterminado: hay tres habitaciones, no hay ningún bar.",
          "La pista está en el sustantivo: con un/una, números o ningún → hay; con el/la/mi + objeto o persona → estar para el lugar; si el sujeto es un acontecimiento (fiesta, concierto, examen) → ser para el lugar.",
          "Completa la descripción de Lucía: «La casa (1) ___ de mis abuelos y (2) ___ a cien metros del mar. (3) ___ tres habitaciones. La cocina (4) ___ pequeña pero (5) ___ muy bien equipada. La fiesta de verano (6) ___ siempre en el jardín.»",
        ],
        [
          ["El piso es de mi hermano y está en el centro.", "The flat belongs to my brother and is in the centre. (posesión / lugar)"],
          ["Hay un museo nuevo; el museo está cerca del puerto.", "There's a new museum; the museum is near the port. (algo nuevo / objeto ya conocido)"],
          ["La cena es en el patio.", "The dinner is in the courtyard. (evento → ser)"],
        ],
        [
          fb("Hueco 1.", "La casa ___ de mis abuelos. (ser/estar)", "es", "Ser de expresa posesión: la casa es de mis abuelos. Estar de no indica a quién pertenece algo."),
        ]
      ),
    ],
    [
      fb("Hueco 2.", "…y ___ a cien metros del mar. (ser/estar)", "está", "Situar un lugar u objeto en el espacio (a cien metros) se hace con estar."),
      fb("Hueco 3.", "___ tres habitaciones. (haber)", "Hay", "Con un número se presenta algo nuevo: hay, invariable aunque el sustantivo sea plural."),
      fb("Hueco 4.", "La cocina ___ pequeña. (ser/estar)", "es", "El tamaño es una característica de la cocina: ser."),
      fb("Hueco 5.", "…pero ___ muy bien equipada. (ser/estar)", "está", "Equipada es el resultado de equiparla: estar + participio."),
      fb("Hueco 6.", "La fiesta de verano ___ siempre en el jardín. (ser/estar)", "es", "La fiesta es un evento: el lugar donde tiene lugar se expresa con ser, no con estar."),
      toEs("There's a big garden, and the party is there.", "Hay un jardín grande y la fiesta es allí.", "Hay presenta algo nuevo (un jardín); para dónde tiene lugar un evento se usa ser.", ["Hay un jardín grande, y la fiesta es ahí."]),
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
        [
          "Recuerda las tres herramientas de énfasis y por qué funcionan. (1) Si adelantas el complemento directo o indirecto para destacarlo, lo repites con un pronombre (La tarta la hice yo; A mi abuela le escribo cada semana): el pronombre recuerda al oyente qué función cumple ese elemento.",
          "(2) La hendida separa lo destacado con ser y un relativo que depende de qué es: persona → quien / el que, lugar → donde, tiempo → cuando, cosa → lo que (Fue en Lima donde nos conocimos). (3) Lo + adjetivo o adverbio + que expresa grado; lo no cambia, pero el adjetivo concuerda con el sustantivo (lo caras que son las entradas, lo bien que canta).",
        ],
        [
          ["La tarta la hice yo.", "I made the cake. (complemento antepuesto + pronombre la)"],
          ["Fue en Lima donde nos conocimos.", "It was in Lima that we met. (hendida de lugar: donde)"],
          ["No sabes lo caras que son las entradas.", "You don't know how expensive the tickets are. (lo + adjetivo concordado + que)"],
        ],
        [
          fb("Completa la estructura enfática.", "Las fotos ___ hizo mi padre.", "las", "El complemento directo antepuesto se retoma con pronombre: «las fotos» (femenino plural) → «las»."),
          fb("Completa la estructura enfática.", "Fue a las tres de la mañana ___ sonó el teléfono.", "cuando", "Lo destacado es un momento: en la hendida de tiempo se usa cuando."),
        ]
      ),
    ],
    [
      fb("Completa la estructura enfática.", "Fue en este bar ___ me pidió matrimonio.", "donde", "En las hendidas de lugar se usa «donde»: «Fue en este bar donde…»."),
      fb("Completa la estructura enfática.", "Fue en 1999 ___ nació mi hija.", "cuando", "En las hendidas de tiempo se usa «cuando»: «Fue en 1999 cuando…»."),
      { ...fb("Completa la estructura enfática.", "Fueron ellos ___ lo organizaron.", "quienes", "En las oraciones hendidas de persona en plural se usa «quienes» (o «los que»)."), altAnswers: ["los que"] },
      { ...fb("Rápido.", "No sabes lo ___ que están las fresas. (rico)", "ricas", "En lo + adjetivo + que, lo no cambia, pero el adjetivo concuerda con fresas: ricas (femenino plural)."), altAnswers: ["buenas", "sabrosas"] },
      fb("Completa la estructura enfática.", "___ más me preocupa es el precio.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que más me preocupa es…»."),
      { ...fb("Completa la estructura enfática.", "A tu hermano no ___ he visto.", "lo", "El complemento directo de persona antepuesto se retoma con «lo»."), altAnswers: ["le"] },
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
        "Recuerda la regla",
        [
          "Ponerse al día con alguien mezcla cinco recursos. Contar lo que te dijeron: estilo indirecto en pasado (ha vuelto → me dijo que había vuelto). Lamentar lo que no pasó: si + pluscuamperfecto de subjuntivo + condicional compuesto (si me hubieras avisado, habría ido). Destacar quién o dónde: oración hendida (fue Luis quien…, fue en Valencia donde…). Desear con cortesía: me encantaría que + imperfecto de subjuntivo (que vinieras). Y añadir un dato de posesión: cuyo, que concuerda con lo poseído.",
          "Por qué: todo lo que se cuenta desde el pasado retrocede un tiempo; por eso el presente pasa a imperfecto y el perfecto a pluscuamperfecto.",
        ],
        [
          ["Me contó que te habías ido a vivir a Bilbao.", "She told me you had gone to live in Bilbao. (te has ido → te habías ido)"],
          ["Fue en el instituto donde nos conocimos.", "It was at secondary school that we met. (hendida de lugar: donde)"],
        ],
        [
          mc(
            "Pablo dice: «Me han contado que ya no vives en Valencia.» ¿Qué le contesta Marta?",
            ["Sí, me mudé a Bilbao hace dos años.", "Sí, me mudaría a Bilbao hace dos años.", "Sí, me hubiera mudado a Bilbao hace dos años.", "Sí, me mude a Bilbao hace dos años."],
            0,
            "Con «hace dos años» se cuenta un hecho terminado: pretérito indefinido (me mudé). El condicional y el pluscuamperfecto de subjuntivo hablarían de algo hipotético, y «me mude» es presente de subjuntivo."
          ),
        ]
      ),
      sec(
        "El diálogo",
        "Marta: «¡Cuánto tiempo! Si me hubieras dicho que venías, te habría preparado algo.» Pablo: «Fue Luis quien me dio tu dirección. Me dijo que te habías hecho arquitecta.» Marta: «Sí, y me encantaría que vieras mi último proyecto, cuya fachada es toda de madera.»",
        [
          ["Me encantaría que conocieras a mis hijos.", "I'd love you to meet my children. (me encantaría que + imperfecto de subjuntivo)"],
        ],
        [
          fb("Completa.", "Si me ___ que venías, te habría preparado algo. (decir)", "hubieras dicho", "Irreal del pasado: si + pluscuamperfecto de subjuntivo (hubieras dicho) + condicional compuesto (habría preparado)."),
          mc(
            "Marta quiere invitar a Pablo a cenar con cortesía. ¿Qué le dice?",
            ["Me encantaría que vinieras a cenar el sábado.", "Me encantaría que vienes a cenar el sábado.", "Me encanta que vendrías a cenar el sábado.", "Me encantaría que venir a cenar el sábado."],
            0,
            "Me encantaría (condicional de cortesía) + que + otro sujeto pide imperfecto de subjuntivo: vinieras. El indicativo (vienes) y el condicional (vendrías) no van detrás de «que» aquí, y el infinitivo solo sirve si el sujeto es el mismo."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Fue Luis ___ me dio tu dirección.", "quien", "En las oraciones hendidas de persona se usa «quien» (o «el que»): «Fue Luis quien…»."), altAnswers: ["el que"] },
      fb("Completa.", "Me dijo que te ___ arquitecta. (hacerse)", "habías hecho", "Estilo indirecto: el perfecto (te has hecho) retrocede a pluscuamperfecto; hacerse es el verbo de cambio para una profesión."),
      fb("Completa.", "Me encantaría que ___ mi último proyecto. (ver)", "vieras", "Me encantaría (condicional) + que + otro sujeto → imperfecto de subjuntivo."),
      fb("Completa.", "…___ fachada es toda de madera.", "cuya", "«Cuyo» concuerda con lo poseído: «fachada» es femenino singular."),
      fb("Completa.", "Cuando ___ tiempo, te lo enseño. (tener, tú)", "tengas", "Cuando referido al futuro lleva presente de subjuntivo."),
      toEs("It was Luis who gave me your address.", "Fue Luis quien me dio tu dirección.", "En las oraciones hendidas de persona se usa «quien» (o «el que»): «Fue Luis quien…».", ["Fue Luis el que me dio tu dirección."]),
      toEs("Luis se ha casado.", "Pablo me dijo que Luis se había casado.", "Al contar desde el pasado, el pretérito perfecto (se ha casado) retrocede a pluscuamperfecto (se había casado).", ["Pablo me dijo que Luis se casó."], "Pasa al estilo indirecto empezando por «Pablo me dijo que…»."),
      toEs("Mi hermana me dio la noticia.", "Fue mi hermana quien me dio la noticia.", "Hendida de persona: ser en el mismo tiempo que el verbo (fue) + elemento destacado + quien o la que.", ["Fue mi hermana la que me dio la noticia."], "Transforma en una oración hendida que destaque «mi hermana»."),
      toEs("Si vienes a la cena, verás a todos.", "Si hubieras venido a la cena, habrías visto a todos.", "Para lo que ya no puede pasar: si + pluscuamperfecto de subjuntivo y condicional compuesto.", ["Si hubieses venido a la cena, habrías visto a todos.", "Si hubieras venido a la cena, hubieras visto a todos."], "Cambia a una condición irreal del pasado."),
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
        [
          "Recuerda la regla de cada estación. 1) Si real: si + presente de indicativo (si tengo tiempo, te llamo). 2) Si irreal: si + imperfecto de subjuntivo + condicional en el presente (si tuviera tiempo, te llamaría); si + pluscuamperfecto de subjuntivo + habría en el pasado. 3) Ojalá + subjuntivo: presente si es posible (ojalá venga), imperfecto si es difícil (ojalá viniera). 4) Como si + imperfecto o pluscuamperfecto de subjuntivo, nunca indicativo. 5) Aunque + indicativo para un hecho que se sabe, + subjuntivo para una posibilidad.",
          "¿Por qué cambian los modos? El indicativo presenta hechos o condiciones reales; el subjuntivo, lo irreal, lo deseado o lo que no se sabe. Y el consejo con yo que tú va siempre con condicional, porque te imaginas en el lugar del otro.",
        ],
        [
          ["Yo que tú, aceptaría la oferta.", "If I were you, I'd accept the offer. (consejo → condicional)"],
          ["Aunque llueva, saldremos.", "Even if it rains, we'll go out. (posibilidad → subjuntivo)"],
          ["Aunque llueve, saldremos.", "Even though it's raining, we'll go out. (hecho → indicativo)"],
        ],
        [
          fb("Estación 1.", "Si ___ un rato el sábado, te llamo. (tener, yo)", "tengo", "Condición real y posible → si + presente de indicativo: tengo. Nunca futuro ni presente de subjuntivo detrás de si."),
        ]
      ),
    ],
    [
      fb("Estación 2.", "Si ___ más tiempo, te ayudaría. (tener, yo)", "tuviera", "Irreal en el presente (no tengo tiempo) → si + imperfecto de subjuntivo; la consecuencia va en condicional (ayudaría)."),
      fb("Estación 2.", "Si ___ más tiempo, te habría ayudado. (tener, yo)", "hubiera tenido", "Irreal en el pasado (habría ayudado) → si + pluscuamperfecto de subjuntivo: hubiera tenido."),
      fb("Estación 3.", "Ojalá ___ aquí ahora. (estar, tú)", "estuvieras", "Deseo irreal en el presente (no estás aquí) → ojalá + imperfecto de subjuntivo: estuvieras."),
      fb("Estación 4.", "Me habla como si ___ su criado. (ser, yo)", "fuera", "Comparación irreal y simultánea → como si + imperfecto de subjuntivo: fuera."),
      fb("Estación 5.", "Aunque me lo ___, no iré. (pedir, tú)", "pidas", "Aunque + presente de subjuntivo para una posibilidad futura que no cambia nada: pidas. «Pides» sería un hecho real."),
      fb("Consejo.", "Yo que tú, no lo ___. (hacer)", "haría", "Yo que tú + condicional para aconsejar: haría."),
      toEs("Even if you asked me, I wouldn't go.", "Aunque me lo pidieras, no iría.", "«Aunque» + imperfecto de subjuntivo presenta una hipótesis poco probable.", ["Aunque me lo pidieses, no iría."]),
      toEs("Me mira como si soy un extraterrestre.", "Me mira como si fuera un extraterrestre.", "Detrás de como si nunca va el indicativo: comparación irreal simultánea → imperfecto de subjuntivo (fuera), aunque la frase esté en presente.", ["Me mira como si fuese un extraterrestre."], "Corrige la frase."),
      fb("Transforma en una condición irreal en el presente.", "Si tengo dinero, viajo a Japón. → Si ___ dinero, viajaría a Japón.", "tuviera", "Al pasar de una condición real a una irreal, si + presente pasa a si + imperfecto de subjuntivo (tuviera), y la consecuencia a condicional (viajaría)."),
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
        [
          "Recuerda la regla: la relativa va en indicativo si el antecedente es conocido y existe (el vestido que compraste). Va en subjuntivo si es desconocido (busco unas botas que sean…), inexistente (no hay nada que…), o abierto, sin concretar todavía (cómprate el que más te guste).",
          "¿Por qué? El indicativo afirma que algo existe tal como se describe; el subjuntivo deja esa existencia sin afirmar. En pasado, el subjuntivo pasa a imperfecto (-ra): no había nada que pudiéramos hacer.",
        ],
        [
          ["Tengo unas botas que son impermeables.", "I have some boots that are waterproof. (conocidas → indicativo)"],
          ["No había nada que pudiéramos hacer.", "There was nothing we could do. (inexistente, pasado → -ra)"],
        ],
        [
          fb("Rápido.", "No conocí a nadie en la fiesta que ___ de mi pueblo. (ser)", "fuera", "Antecedente inexistente (nadie) en pasado → imperfecto de subjuntivo: fuera. «Era» afirmaría que esa persona existía."),
        ]
      ),
    ],
    [
      fb("Rápido.", "El vestido que ___ ayer es precioso. (comprar, tú)", "compraste", "Un vestido concreto que ya existe y compraste → indicativo."),
      fb("Rápido.", "Cómprate el vestido que más te ___. (gustar)", "guste", "Todavía no sabemos cuál será → antecedente abierto → subjuntivo: guste."),
      fb("Rápido.", "Busco unas botas que ___ impermeables. (ser)", "sean", "Buscar presenta unas botas desconocidas, quizá inexistentes → subjuntivo: sean."),
      fb("Rápido.", "Necesito un abrigo que ___ capucha. (tener)", "tenga", "Un abrigo que aún no tienes ni conoces → subjuntivo: tenga. Con «tengo un abrigo que…» iría indicativo (tiene)."),
      fb("Rápido.", "No encontré ningún hotel que ___ libre. (estar)", "estuviera", "Antecedente inexistente (ningún hotel) en pasado → imperfecto de subjuntivo: estuviera."),
      { ...fb("Rápido.", "¿Hay alguien que ___ tocar la guitarra? (saber)", "sepa", "Preguntamos si existe esa persona → subjuntivo: sepa (o pueda)."), altAnswers: ["pueda"] },
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
    "Repaso espaciado: decide entre indicativo y subjuntivo (presente o imperfecto) con todas las conjunciones adverbiales.",
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
      fb("Rápido.", "Aunque ___ cansado, sigue estudiando. (estar — hecho)", "está", "Que está cansado es un hecho conocido, así que aunque + indicativo."),
      { ...fb("Rápido.", "Te dejé las llaves por si ___ antes. (llegar, tú)", "llegabas", "Por si + indicativo (también imperfecto de subjuntivo: «por si llegaras»)."), altAnswers: ["llegaras", "llegases"] },
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
        [
          "Recuerda la regla: con cuando, en cuanto, hasta que, tan pronto como… el modo depende de si la acción ya es real. Pasado (ya ocurrió) → indicativo: En cuanto llegó, se puso a cocinar. Hábito (ocurre siempre) → indicativo: En cuanto llega, se pone a cocinar. Futuro (todavía no ha ocurrido) → presente de subjuntivo: En cuanto llegue, se pondrá a cocinar.",
          "¿Por qué? El subjuntivo marca lo que aún no es un hecho. Por eso, detrás de cuando nunca va el futuro (✗ cuando llegará), aunque la acción sea futura: el futuro aparece en la otra parte de la frase.",
        ],
        [
          ["En cuanto llegó, se puso a cocinar.", "As soon as he arrived, he started cooking. (pasado → indicativo)"],
          ["En cuanto llegue, se pondrá a cocinar.", "As soon as he arrives, he'll start cooking. (futuro → subjuntivo)"],
        ],
        [
          fb("Pasado.", "Tan pronto como ___ la película, nos fuimos a dormir. (terminar)", "terminó", "La acción ya ocurrió (nos fuimos) → indicativo, en indefinido: terminó. «Termine» solo iría si hablaras del futuro."),
        ]
      ),
    ],
    [
      fb("Hábito.", "En cuanto ___ a casa, se quita los zapatos. (llegar)", "llega", "Algo que hace siempre (se quita, presente habitual) → indicativo: llega."),
      fb("Futuro.", "En cuanto ___ a casa, se quitará los zapatos. (llegar)", "llegue", "Acción futura (se quitará) → presente de subjuntivo: llegue. Nunca «llegará» detrás de en cuanto."),
      fb("Pasado.", "Cuando ___ el concierto, fuimos a cenar. (acabar)", "acabó", "Hecho pasado ya ocurrido → indicativo, indefinido: acabó."),
      fb("Futuro.", "Cuando ___ el concierto, iremos a cenar. (acabar)", "acabe", "Acción futura → cuando + presente de subjuntivo: acabe."),
      fb("Hábito.", "Cuando ___ un concierto, siempre vamos a cenar después. (haber)", "hay", "«Siempre» marca una costumbre → indicativo: hay."),
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
        [
          "Recuerda la regla: con verbos de influencia (querer, pedir, permitir, prohibir, insistir en) o de emoción (encantar, molestar) + que + otro sujeto, el segundo verbo va en subjuntivo. Si el primer verbo está en pasado (quería, pedían, permitían), el subjuntivo pasa a imperfecto: hablara, comiera, viera.",
          "¿Por qué? Porque lo que se pedía o se quería no era todavía un hecho, y el tiempo del subjuntivo se ajusta al del verbo principal: quiere que coma → quería que comiera. El indicativo (✗ quería que comía) no sirve.",
        ],
        [
          ["Mi abuela quería que comiera más.", "My grandmother wanted me to eat more. (querer en pasado → comiera)"],
          ["Mis padres no permitían que saliéramos solos.", "My parents didn't allow us to go out alone. (permitir en pasado → saliéramos)"],
        ],
        [
          fb("Tu infancia.", "Mis profesores me pedían que ___ menos. (hablar)", "hablara", "Pedir que + otro sujeto → subjuntivo; con pedían en pasado, imperfecto de subjuntivo: hablara."),
        ]
      ),
    ],
    [
      fb("Tu infancia.", "Mi tío quería que ___ la guitarra con él. (tocar)", "tocara", "Querer que + otro sujeto, con quería en pasado → imperfecto de subjuntivo: tocara."),
      fb("Tu infancia.", "Mis padres no permitían que ___ la tele hasta tarde. (ver)", "viera", "Permitir que en pasado → imperfecto de subjuntivo: viera (de vieron)."),
      fb("Tu infancia.", "Mi madre insistía en que ___ un abrigo. (llevar)", "llevara", "Insistir en que (influencia) en pasado → imperfecto de subjuntivo: llevara. No olvides «en»."),
      fb("Tu infancia.", "Mi hermano mayor me prohibía que ___ en su cuarto. (entrar)", "entrara", "Prohibir que en pasado → imperfecto de subjuntivo: entrara."),
      fb("Tu infancia.", "Me encantaba que mi padre me ___ cuentos. (leer)", "leyera", "Verbo de emoción (encantaba) + que + otro sujeto → imperfecto de subjuntivo: leyera (de leyeron)."),
      toEs("My parents wanted me to learn to swim.", "Mis padres querían que aprendiera a nadar.", "«Querer que» en pasado exige imperfecto de subjuntivo: «aprendiera».", ["Mis padres querían que aprendiese a nadar."]),
      toEs("Mi profesora de lengua quería que leía un libro al mes.", "Mi profesora de lengua quería que leyera un libro al mes.", "Querer que + otro sujeto exige subjuntivo, no indicativo: leía → leyera (imperfecto de subjuntivo, porque quería está en pasado).", ["Mi profesora de lengua quería que leyese un libro al mes."], "Corrige la frase."),
      fb("Pasa a pasado.", "Mi madre quiere que vuelva pronto. → Mi madre quería que ___ pronto.", "volviera", "Al pasar el verbo principal a pasado (quería), el presente de subjuntivo pasa a imperfecto de subjuntivo: vuelva → volviera."),
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
        [
          "Recuerda la regla: para suavizar un deseo, una petición o una valoración, el verbo principal pasa del presente al condicional (quiero → querría / me gustaría, es mejor → sería mejor). Y como el subjuntivo sigue al verbo principal (concordancia de tiempos), la subordinada pasa del presente al imperfecto de subjuntivo: Quiero que me ayudes → Me gustaría que me ayudaras.",
          "«Me gustaría que me ayudes» es un error muy frecuente: el condicional nunca va con presente de subjuntivo. Y si el sujeto es el mismo, no hay que: preferiría ir yo.",
        ],
        [
          ["Sería mejor que vinieras.", "It would be better if you came. (es mejor que vengas → sería mejor que vinieras)"],
          ["¿Te importaría que cerrara la puerta?", "Would you mind if I closed the door?"],
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
        [
          "Recuerda la regla: el tiempo tras si depende de lo real que veas la condición. Promesa posible: si + presente de indicativo → futuro (o imperativo). Hipótesis irreal en el presente: si + imperfecto de subjuntivo → condicional simple (si fuera alcaldesa, haría…). Hipótesis sobre un pasado que ya no se puede cambiar: si + pluscuamperfecto de subjuntivo → condicional compuesto (habría…) o, si la consecuencia es de hoy, condicional simple (hoy tendríamos…).",
          "Dos errores que hay que evitar: tras si nunca va el futuro, el condicional ni el presente de subjuntivo. Y como si, que compara con algo irreal, siempre pide imperfecto o pluscuamperfecto de subjuntivo.",
          "Vas a completar este discurso: «Si me ___, bajaré los impuestos. Si yo ___ alcaldesa, nadie viviría en la calle. Si el anterior gobierno ___ más, hoy ___ mejores hospitales.»",
        ],
        [
          ["Si me eligen, abriré el polideportivo los domingos.", "If you elect me, I'll open the sports centre on Sundays. (promesa real)"],
          ["Si tuviéramos más parques, los niños jugarían en la calle.", "If we had more parks, children would play outside. (hipótesis irreal)"],
        ],
        [
          fb("Paso 1.", "Si me ___, bajaré los impuestos. (votar, vosotros)", "votáis", "Condición real y posible: si + presente de indicativo, nunca presente de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Paso 2.", "Si yo ___ alcaldesa, nadie viviría en la calle. (ser)", "fuera", "La candidata no es alcaldesa: hipótesis irreal en el presente, si + imperfecto de subjuntivo (fuera). «Si sería» es un error: tras si no va el condicional."),
      fb("Paso 2: otra promesa irreal.", "Si gobernáramos nosotros, ningún niño ___ sin plaza en el colegio. (quedarse)", "se quedaría", "Tras si + imperfecto de subjuntivo (gobernáramos), la consecuencia va en condicional simple: se quedaría. El futuro (se quedará) solo sirve para promesas reales."),
      fb("Paso 3.", "Si el gobierno ___ más… (invertir)", "hubiera invertido", "La inversión no se hizo y ya no se puede cambiar: si + pluscuamperfecto de subjuntivo (hubiera invertido), no «había invertido»."),
      fb("Paso 3.", "…hoy ___ mejores hospitales. (tener, nosotros)", "tendríamos", "Condicional mixta: la condición es pasada, pero «hoy» indica que la consecuencia es presente, así que va en condicional simple (tendríamos), no compuesto (habríamos tenido)."),
      fb("Paso 4.", "Hablan como si todo ___ bien. (ir)", "fuera", "Como si compara con algo irreal y siempre lleva subjuntivo imperfecto (o pluscuamperfecto si es anterior): como si todo fuera bien. Nunca va con indicativo (va) ni presente de subjuntivo (vaya)."),
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
        [
          "Recuerda la regla: para imaginar un pasado que no ocurrió, la condición (detrás de si) y el deseo (detrás de ojalá) van en pluscuamperfecto de subjuntivo: hubiera + participio. La consecuencia va en condicional perfecto: habría + participio. ¿Por qué? Si y ojalá presentan algo irreal, y lo irreal pide subjuntivo; el condicional solo describe el resultado imaginado. Por eso «si habría» u «ojalá habría» son siempre errores.",
          "En la consecuencia también se oye hubiera (no lo hubiera hecho), sobre todo en la lengua hablada, pero en la condición nunca cabe habría. Y si la consecuencia es actual, va en condicional simple: Si hubiera estudiado medicina, ahora sería médico.",
          "Este diario tiene tres errores: «Si habría sabido que llovería, no habría salido. Ojalá habría llevado paraguas. Si hubiera cogido un taxi, no me mojaba.»",
        ],
        [
          ["Si me hubieras escuchado, no te habrías perdido.", "If you had listened to me, you wouldn't have got lost. (si + hubiera / habría)"],
          ["Ojalá no hubiéramos vendido el coche.", "I wish we hadn't sold the car. (ojalá + hubiera)"],
          ["Si hubiera estudiado medicina, ahora sería médica.", "If I had studied medicine, I'd be a doctor now. (consecuencia actual → condicional simple)"],
        ],
        [
          mc(
            "¿Qué falla en «ojalá habría llevado»?",
            ["Ojalá + pluscuamperfecto de subjuntivo: hubiera llevado.", "Falta que.", "Debe ser «llevara».", "Nada."],
            0,
            "Ojalá expresa un deseo irreal sobre el pasado y pide pluscuamperfecto de subjuntivo: ojalá hubiera llevado. No falta «que» (es opcional), y «llevara» se referiría al presente o al futuro."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Si habría sabido que llovería, no habría salido.»", "Si hubiera sabido que llovería, no habría salido.", "Detrás de si nunca va habría: la condición irreal pide pluscuamperfecto de subjuntivo, hubiera sabido. El habría de la consecuencia está bien.", ["Si hubiera sabido que llovería, no hubiera salido."]),
      toEs("Corrige: «Ojalá habría llevado paraguas.»", "Ojalá hubiera llevado paraguas.", "Ojalá va con subjuntivo, nunca con condicional: para el pasado, hubiera llevado."),
      toEs("Corrige: «Si hubiera cogido un taxi, no me mojaba.»", "Si hubiera cogido un taxi, no me habría mojado.", "La consecuencia de una condición irreal en el pasado va en condicional perfecto (no me habría mojado); el imperfecto «mojaba» describe hábitos reales.", ["Si hubiera cogido un taxi, no me hubiera mojado.", "Si hubiera tomado un taxi, no me habría mojado.", "Si hubiera tomado un taxi, no me hubiera mojado."]),
      toEs("Corrige: «Yo lo hubiera hacido de otra forma.»", "Yo lo habría hecho de otra forma.", "El participio de hacer es irregular: hecho. En la consecuencia lo normal es el condicional perfecto: habría hecho (hubiera hecho también se oye).", ["Yo lo hubiera hecho de otra forma."]),
      ms(
        "¿Qué frases son correctas?",
        ["Si lo hubiera visto, te lo habría dicho.", "Ojalá lo hubiera visto.", "Si lo habría visto, te lo diría.", "Ojalá lo habría visto."],
        [0, 1],
        "Tras si u ojalá, para el pasado, se usa el pluscuamperfecto de subjuntivo: hubiera visto. «Si lo habría visto» y «Ojalá lo habría visto» ponen el condicional donde solo cabe el subjuntivo."
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
        [
          "Recuerda la regla: cuando cuentas en pasado lo que alguien dijo (dijo, aseguró, admitió, advirtió), los tiempos del mensaje dan un paso atrás, porque ya no hablas desde el momento en que se dijo. Presente → imperfecto (estoy → estaba); pretérito perfecto o indefinido → pluscuamperfecto (he perdido → había perdido); futuro → condicional (volverá → volvería).",
          "El verbo introductor decide la estructura: si informa (decir, asegurar, admitir, advertir), sigue un indicativo; si pide u ordena (pedir, rogar, decir que + orden), sigue que + imperfecto de subjuntivo; si pregunta sí/no, se usa si; si pregunta con dónde, cuándo o qué, la palabra interrogativa se mantiene con tilde.",
        ],
        [
          ["«No volverá a pasar.» → Me aseguró que no volvería a pasar.", "He assured me it wouldn't happen again. (futuro → condicional)"],
          ["«¿Has dormido bien?» → Me preguntó si había dormido bien.", "She asked me if I had slept well. (pregunta sí/no → si)"],
          ["«Espérame en la puerta.» → Me pidió que lo esperara en la puerta.", "He asked me to wait for him at the door. (orden → que + imperfecto de subjuntivo)"],
        ],
        [
          wo("Me juró que nunca lo había contado", "«Nunca lo he contado» → nunca lo había contado: el pretérito perfecto pasa a pluscuamperfecto.", "She swore to me she had never told it"),
        ]
      ),
    ],
    [
      wo("Nos preguntó si habíamos dormido bien", "Pregunta de sí/no → si; el perfecto «habéis dormido» pasa a pluscuamperfecto (habíamos dormido).", "She asked us if we had slept well"),
      wo("Le pedí que me esperara en la puerta", "Petición en pasado → que + imperfecto de subjuntivo (esperara).", "I asked him to wait for me at the door"),
      wo("Admitió que no sabía la respuesta", "Admitir informa de un hecho: indicativo, y el presente «no sé» pasa a imperfecto (no sabía).", "He admitted he didn't know the answer"),
      wo("Me advirtió que el museo cerraba temprano", "Advertir informa: el presente «cierra» pasa a imperfecto (cerraba).", "She warned me the museum closed early"),
      toEs("He told me he had lost his job.", "Me dijo que había perdido el trabajo.", "En estilo indirecto, el pasado del mensaje («he perdido» o «perdí») pasa a pluscuamperfecto: «había perdido».", ["Me contó que había perdido el trabajo.", "Me dijo que había perdido su trabajo."]),
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
        [
          "Recuerda la regla: ser dice cómo es algo o alguien (clase, carácter, rasgo permanente); estar dice cómo está en un momento (estado, resultado, sensación). Con la mayoría de adjetivos eso solo cambia el matiz, pero con algunos cambia el significado por completo.",
          "Es listo (inteligente) / Está listo (preparado). Es orgulloso (arrogante) / Está orgulloso de algo (siente orgullo). Es verde (color) / Está verde (inmaduro, inexperto). Es rico (tiene dinero) / Está rico (sabe bien). Es malo (mala persona, mala calidad) / Está malo (enfermo, en mal estado). Es aburrido (aburre a los demás) / Está aburrido (siente aburrimiento).",
        ],
        [
          ["Estoy orgullosa de ti.", "I'm proud of you. (sentimiento → estar)"],
          ["Es una persona muy orgullosa.", "She's a very proud (arrogant) person. (carácter → ser)"],
          ["La paella está riquísima.", "The paella is delicious. (sabor → estar)"],
        ],
        [
          fb("Completa con ser o estar.", "Mi padre ___ muy orgulloso de mí.", "está", "«Estar orgulloso» es sentir orgullo en un momento; «ser orgulloso» es un rasgo de carácter."),
        ]
      ),
    ],
    [
      fb("Completa con ser o estar.", "Tu jefe ___ muy orgulloso; nunca pide perdón.", "es", "«Ser orgulloso» describe el carácter (no pide perdón); «estar orgulloso» es sentir orgullo."),
      fb("Completa con ser o estar.", "¿___ listos? El taxi está abajo.", "Estáis", "«Estar listo» significa estar preparado; «ser listo» significa ser inteligente."),
      fb("Completa con ser o estar.", "Tu hija ___ muy lista.", "es", "«Ser listo» significa ser inteligente; «estar listo» significa estar preparado."),
      { ...fb("Completa con ser o estar.", "Todavía ___ muy verde en este trabajo.", "estoy", "«Estar verde (en algo)» significa ser inexperto o no estar maduro; de una persona también se dice «ser muy verde». «Ser verde», además, es el color."), altAnswers: ["soy"] },
      fb("Completa con ser o estar.", "Mi coche ___ verde.", "es", "Con los colores se usa «ser»: «es verde»; «estar verde» significa no estar maduro o, en una persona, ser inexperto."),
      fb("Completa con ser o estar.", "El niño ___ malo; tiene gripe.", "está", "«Estar malo» significa estar enfermo; «ser malo» significa tener mala conducta."),
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
        "Recuerda la regla",
        [
          "El español no tiene un solo «become»: el verbo dice qué tipo de cambio es. Ponerse + adjetivo = estado pasajero (se puso rojo, nervioso). Volverse + adjetivo = cambio de carácter duradero, a menudo no buscado (se volvió desconfiado). Hacerse = profesión, religión o cambio logrado con esfuerzo (se hizo médica, rico). Convertirse en + sustantivo = transformación en otra cosa (se convirtió en un museo). Quedarse + adjetivo = resultado, a menudo una pérdida (se quedó calvo, viudo). Llegar a ser = meta alcanzada tras un proceso.",
          "Pregúntate: ¿dura poco o cambia la persona? ¿Lo eligió? ¿Le sigue un adjetivo o un sustantivo? Con esas tres preguntas eliges el verbo.",
        ],
        [
          ["Se puso nerviosa antes de la entrevista.", "She got nervous before the interview. (pasajero: ponerse)"],
          ["Con los años se ha vuelto muy tacaño.", "Over the years he has become very stingy. (carácter: volverse)"],
          ["El garaje se convirtió en un estudio.", "The garage became a studio. (sustantivo: convertirse en)"],
        ],
        [
          mc(
            "¿Qué verbo completa «Mi abuela ___ sorda después de la operación»?",
            ["se quedó", "se puso", "se hizo", "se convirtió"],
            0,
            "Perder un sentido es un resultado no buscado: quedarse + adjetivo. «Se puso sorda» sugiere algo de un momento, «se hizo» implica voluntad y «se convirtió» necesita «en» + sustantivo."
          ),
        ]
      ),
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
          mc(
            "Elige el verbo: «Su pequeña tienda ___ una cadena de cuarenta locales.»",
            ["se convirtió en", "se volvió", "se puso", "se quedó"],
            0,
            "Ante un sustantivo que nombra lo que algo pasa a ser (una cadena), se usa convertirse en. Volverse, ponerse y quedarse van con adjetivos."
          ),
        ]
      ),
    ],
    [
      toEs("Lucía se volvió enfermera en 2010.", "Lucía se hizo enfermera en 2010.", "Para una profesión se usa «hacerse», no «volverse»: «se hizo enfermera».", ["Lucía llegó a ser enfermera en 2010."], "Corrige la frase."),
      toEs("Con los años se ha puesto muy paciente.", "Con los años se ha vuelto muy paciente.", "Para un cambio de carácter duradero se usa «volverse», no «ponerse»: ponerse indicaría solo un momento.", [], "Corrige la frase."),
      toEs("Su afición se hizo en su segundo trabajo.", "Su afición se convirtió en su segundo trabajo.", "Para una transformación en otra cosa se usa «convertirse en» + sustantivo; «hacerse en» no existe.", [], "Corrige la frase."),
      toEs("Se hizo rojo cuando lo vio.", "Se puso rojo cuando lo vio.", "Para un cambio físico momentáneo (un color en la cara) se usa «ponerse»: «se puso rojo».", ["Se puso colorado cuando lo vio."], "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["Se puso contenta.", "Se volvió muy desconfiada con los años.", "Se hizo triste.", "Se puso en princesa."],
        [0, 1],
        "«Se puso contenta» y «Se volvió muy desconfiada con los años» usan bien ponerse (estado pasajero) y volverse (cambio de carácter). «Se hizo triste» no se dice (tristeza pasajera → se puso triste) y «Se puso en princesa» mezcla ponerse con «en» (sería se convirtió en)."
      ),
      toEs("Mi padre se puso nervioso.", "Mi padre se quedó calvo.", "Calvo es un resultado que nadie elige y que no se pasa: quedarse + adjetivo, no ponerse.", [], "Sustituye «nervioso» por «calvo» y adapta el verbo."),
      toEs("Mi prima se puso pálida.", "Mi prima se hizo médica.", "Una profesión se alcanza con hacerse (o llegar a ser); ponerse solo sirve para estados pasajeros.", ["Mi prima llegó a ser médica.", "Mi prima se hizo doctora.", "Mi prima llegó a ser doctora."], "Sustituye «pálida» por «médica» y adapta el verbo."),
      toEs("Con el dinero se volvió egoísta.", "Con el dinero se convirtió en un egoísta.", "Egoísta como adjetivo va con volverse; como sustantivo (un egoísta) necesita convertirse en.", [], "Cambia «egoísta» por «un egoísta» y adapta el verbo."),
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
        "Recuerda la regla: cada conector formal tiene una función fija, y hay que elegirlo por la relación lógica entre las dos ideas, no por cómo suena. No obstante (= sin embargo) marca contraste: la segunda idea limita o contradice la primera. Por consiguiente (= por lo tanto, en consecuencia) marca consecuencia: la segunda idea se deriva de la primera. Asimismo (= además) suma una idea en la misma línea. Dado que (= ya que) da una causa conocida y va con indicativo; no lleva «de» (nunca «dado de que»). A pesar de va con un sustantivo o un infinitivo; si sigue un verbo conjugado, hace falta a pesar de que. ¿Por qué importa? Porque en un texto formal un conector equivocado cambia la lógica: «es caro; por consiguiente, lo compramos» no tiene sentido. Entre dos frases completas, se escriben tras punto y coma y seguidos de coma.",
        [
          ["Dado que no hay quórum, se aplaza la votación.", "Since there's no quorum, the vote is postponed."],
          ["El hotel está completo; por consiguiente, buscaremos otro alojamiento.", "The hotel is full; consequently, we'll look for other accommodation."],
          ["A pesar de que llovía, la feria abrió sus puertas.", "Even though it was raining, the fair opened its doors."],
        ],
        [
          mc("Elige el conector: «La sede está en obras; ___, la reunión será en línea.»", ["por consiguiente", "no obstante", "asimismo", "a pesar de"], 0, "Que la reunión sea en línea es la consecuencia de las obras, así que va por consiguiente. No obstante supondría un contraste que no existe, y asimismo solo sumaría otra idea."),
          mc("Elige el conector: «Al informe le faltan algunos datos; ___, es muy útil.»", ["no obstante", "por consiguiente", "dado que", "asimismo"], 0, "Que sea útil va en contra de lo esperable (le faltan datos): es un contraste, así que va no obstante. Por consiguiente diría que es útil porque le faltan datos, lo que no tiene lógica."),
        ]
      ),
    ],
    [
      wo("El proyecto es viable; no obstante, es caro.", "No obstante marca contraste formal (ser caro limita lo positivo de ser viable); va entre punto y coma y coma.", "The project is viable; nevertheless, it's expensive."),
      wo("Faltan fondos; por consiguiente, se retrasará.", "Por consiguiente introduce la consecuencia: el retraso se deriva de la falta de fondos.", "Funds are lacking; consequently, it will be delayed."),
      wo("Asimismo, se crearán cien empleos.", "Asimismo suma una idea en la misma línea, como además, en registro formal.", "Likewise, a hundred jobs will be created."),
      wo("A pesar de las críticas, el plan siguió adelante.", "A pesar de + sustantivo (las críticas) presenta un obstáculo que no impidió la acción; con verbo conjugado haría falta a pesar de que.", "Despite the criticism, the plan went ahead."),
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
        "Recuerda la regla",
        [
          "Cuyo expresa posesión (= del cual, de quien) y concuerda con lo poseído, el sustantivo que va justo detrás: un pueblo cuyas casas…, una iglesia cuyo campanario… El poseedor no influye. El cual, en cambio, concuerda con el antecedente y se usa sobre todo tras preposición: el pueblo en el cual viven, las fiestas durante las cuales…",
          "Por qué dos relativos: cuyo une dos sustantivos (el pueblo y sus casas); el cual retoma un sustantivo para situar algo respecto a él. Error típico: «que su» en lugar de cuyo.",
        ],
        [
          ["Es un pueblo cuyas casas son de piedra.", "It's a village whose houses are made of stone. (cuyas → casas)"],
          ["La sierra, en la cual nace el río, está nevada.", "The mountain range, in which the river rises, is snowy. (la cual → sierra)"],
        ],
        [
          mc(
            "Elige: «El castillo, ___ torres se ven desde la carretera, está en ruinas.»",
            ["cuyas", "cuyo", "en el cual", "que sus"],
            0,
            "Hay posesión (las torres del castillo), así que va cuyo, concordando con torres: cuyas. Cuyo concordaría con castillo, que no manda, y «que sus» es el error típico."
          ),
        ]
      ),
      sec(
        "El pueblo",
        "«Es un pueblo cuyas casas son de piedra, en el cual viven apenas cien personas. La iglesia, cuyo campanario se ve desde lejos, es del siglo XII. El río junto al cual se levanta el molino baja de la montaña.»",
        [
          ["Junto al río se levanta un molino.", "A mill stands beside the river."],
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
      toEs("El pueblo está en un valle. Sus casas son blancas.", "El pueblo, cuyas casas son blancas, está en un valle.", "Cuyas sustituye a «sus» y concuerda con casas (femenino plural).", ["El pueblo cuyas casas son blancas está en un valle."], "Transforma las dos frases en una con cuyo."),
      toEs("Esta es la plaza. En la plaza se celebra el mercado.", "Esta es la plaza en la cual se celebra el mercado.", "La preposición (en) va delante del relativo, que concuerda con plaza: en la cual (o en la que).", ["Esta es la plaza en la que se celebra el mercado.", "Esta es la plaza donde se celebra el mercado."], "Transforma las dos frases en una con preposición + el cual."),
      toEs("El puente, cuyo origen es romano, sigue en pie.", "Las murallas, cuyo origen es romano, siguen en pie.", "Cuyo no cambia: concuerda con origen (lo poseído), no con el poseedor. Solo cambia el verbo principal: siguen.", [], "Cambia «el puente» por «las murallas» y adapta la frase."),
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
        "Recuerda la regla",
        [
          "Un consejo en español tiene tres moldes. Ponerte en el lugar del otro: yo en tu lugar / yo que tú / si yo fuera tú + condicional (yo en tu lugar, esperaría). Influir en el otro: te sugiero / te recomiendo / es mejor que + subjuntivo (te sugiero que esperes). Imaginar otra situación: si + imperfecto de subjuntivo + condicional (si hubiera un contrato, sería distinto). Y para matizar, un conector de contraste: no obstante, sin embargo.",
          "Por qué el subjuntivo: lo que aconsejas todavía no ha pasado y depende de la otra persona; por eso no va en indicativo.",
        ],
        [
          ["Le sugiero que hable con un asesor antes de que sea tarde.", "I suggest you talk to an adviser before it's too late. (sugerir que + subjuntivo)"],
          ["Yo que tú, no firmaría nada todavía.", "If I were you, I wouldn't sign anything yet. (yo que tú + condicional)"],
        ],
        [
          mc(
            "Un lector escribe: «Mi jefe me grita delante de todos.» ¿Qué respuesta es correcta?",
            ["Le aconsejo que hable con recursos humanos.", "Le aconsejo que habla con recursos humanos.", "Le aconsejo que hablará con recursos humanos.", "Le aconsejo que hablaría con recursos humanos."],
            0,
            "Aconsejar que + otro sujeto pide subjuntivo: hable. El indicativo (habla), el futuro y el condicional no expresan una influencia sobre lo que hará el otro."
          ),
        ]
      ),
      sec(
        "La carta y la respuesta",
        "Carta: «Mi socio quiere que invirtamos todo en un proyecto arriesgado.» Respuesta: «Yo en su lugar, no invertiría todo. Le sugiero que hable con un asesor antes de que sea tarde. Si hubiera un contrato claro, sería distinto. No obstante, la decisión es suya.»",
        [
          ["Mi socio quiere que lo arriesguemos todo.", "My partner wants us to risk everything. (querer que + subjuntivo)"],
        ],
        [
          fb("Completa.", "Mi socio quiere que ___ todo. (invertir, nosotros)", "invirtamos", "Querer que + otro sujeto → subjuntivo; invertir cambia e → i: invirtamos."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo en su lugar, no ___ todo. (invertir)", "invertiría", "Yo en su lugar + condicional."),
      fb("Completa.", "Le sugiero que ___ con un asesor. (hablar)", "hable", "Sugerir que + subjuntivo."),
      fb("Completa.", "…antes de que ___ tarde. (ser)", "sea", "Antes de que siempre lleva subjuntivo."),
      fb("Completa.", "Si ___ un contrato claro, sería distinto. (haber)", "hubiera", "Irreal presente: si + imperfecto de subjuntivo."),
      fb("Completa.", "___, la decisión es suya.", "No obstante", "«No obstante» marca contraste en registro formal, como «sin embargo»."),
      toEs("If I were you, I would ask for advice.", "Yo en tu lugar, pediría consejo.", "«Yo en tu lugar» + condicional es otra forma de aconsejar, equivalente a «si yo fuera tú» (con usted: «yo en su lugar»).", ["Yo en su lugar, pediría consejo.", "Si yo fuera tú, pediría consejo.", "Si yo fuera usted, pediría consejo.", "Yo que tú, pediría consejo."]),
      toEs("Deberías dormir más.", "Yo en tu lugar, dormiría más.", "Yo en tu lugar + condicional da el consejo poniéndote en la situación del otro.", ["Yo que tú, dormiría más.", "Si yo fuera tú, dormiría más.", "Yo en tu lugar dormiría más."], "Cambia el consejo a «yo en tu lugar» + condicional."),
      toEs("Te recomiendo que descanses.", "Le recomiendo que descanse.", "Con usted, el pronombre pasa a le y el subjuntivo a tercera persona: descanse.", [], "Cambia a usted."),
      toEs("Habla con tu jefa.", "Te sugiero que hables con tu jefa.", "Sugerir que + otro sujeto → presente de subjuntivo: hables. El imperativo se convierte en una sugerencia más suave.", [], "Transforma la orden en una sugerencia empezando por «Te sugiero que…»."),
    ]
  ),
  L(
    "la-lista-de-espera",
    "b2d-rep-mezcla-traduccion",
    "Práctica mezclada: relevo de traducción",
    "Repaso espaciado: traduce frases que mezclan estructuras del nivel Avanzado.",
    "6 min",
    [
      sec(
        "Traducir sin calcar",
        [
          "Recuerda la regla: no traduzcas palabra por palabra; busca la estructura española. Whose → cuyo, que concuerda con lo poseído (nunca «que su»). As if → como si + imperfecto de subjuntivo. I wish → ojalá + subjuntivo. When / as soon as + futuro → cuando / en cuanto + presente de subjuntivo. If + had → si + pluscuamperfecto de subjuntivo, nunca condicional detrás de si.",
          "Por qué fallan los calcos: el inglés marca el futuro o la hipótesis en el verbo (will, would); el español lo marca con el modo subjuntivo en la subordinada.",
        ],
        [
          ["Ojalá lo hubiera sabido.", "I wish I had known. (ojalá + pluscuamperfecto de subjuntivo)"],
          ["Avísame en cuanto salgas.", "Let me know as soon as you leave. (no «saldrás»)"],
        ],
        [
          mc(
            "¿Cuál es la versión española sin calco de «Tell me when you know» (tú)?",
            ["Dímelo cuando lo sepas.", "Dímelo cuando lo sabrás.", "Dímelo cuando lo sabes.", "Dímelo cuando lo supieras."],
            0,
            "Cuando + acción futura lleva presente de subjuntivo: sepas. «Sabrás» calca el will inglés, «sabes» sirve para hábitos y «supieras» es imperfecto, que no corresponde a una orden presente."
          ),
        ]
      ),
    ],
    [
      toEs("Call me when you get home.", "Llámame cuando llegues a casa.", "«Cuando» + acción futura exige subjuntivo: «llegues».", ["Llámame en cuanto llegues a casa."]),
      toEs("He acts as if he were the boss.", "Actúa como si fuera el jefe.", "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: «fuera».", ["Se comporta como si fuera el jefe.", "Actúa como si fuese el jefe."]),
      toEs("Es el hombre que su perro me mordió.", "Es el hombre cuyo perro me mordió.", "«Que su» calca la estructura sin relativo de posesión; en español se usa cuyo, que concuerda con lo poseído (perro).", [], "Corrige la frase."),
      toEs("She told me to wait.", "Me dijo que esperara.", "Una orden en estilo indirecto en pasado va en imperfecto de subjuntivo: «esperara».", ["Me dijo que esperase.", "Me pidió que esperara."]),
      toEs("I'm looking for a job that I like.", "Busco un trabajo que me guste.", "El trabajo buscado aún no es concreto, así que la relativa va en subjuntivo: «guste».", ["Estoy buscando un trabajo que me guste.", "Busco un empleo que me guste.", "Estoy buscando un empleo que me guste."]),
      toEs("If I had time, I'd learn to paint.", "Si tuviera tiempo, aprendería a pintar.", "Condición irreal presente: «si tuviera» + condicional «aprendería».", ["Si tuviese tiempo, aprendería a pintar."]),
      toEs("Nos pide que lleguemos pronto.", "Nos pidió que llegáramos pronto.", "Si el verbo de influencia pasa al pasado, la subordinada pasa a imperfecto de subjuntivo: llegáramos.", ["Nos pidió que llegásemos pronto.", "Nos pedía que llegáramos pronto."], "Cambia el verbo principal al pretérito."),
      toEs("Si me llamas, iré.", "Si me hubieras llamado, habría ido.", "Para lo que ya no puede ocurrir: si + pluscuamperfecto de subjuntivo y condicional compuesto.", ["Si me hubieses llamado, habría ido.", "Si me hubieras llamado, hubiera ido."], "Cambia a una condición irreal del pasado."),
      mc("¿Cómo se dice «I wish you were here» (tú)?", ["Ojalá estuvieras aquí.", "Ojalá estás aquí.", "Deseo que estás aquí.", "Quisiera que estarías aquí."], 0, "Un deseo irreal sobre el presente: ojalá + imperfecto de subjuntivo (estuvieras). El indicativo (estás) y el condicional (estarías) no expresan deseo detrás de ojalá o de que."),
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
        [
          "Recuerda la regla: cuando el verbo principal está en pasado o en condicional (pidieron, sorprendió, buscaba, sería, me gustaría), el subjuntivo de la subordinada pasa al imperfecto: -ra (hiciéramos, hubiera, hablara). Es la concordancia de tiempos: la subordinada se sitúa en el mismo momento que el verbo principal.",
          "Para escribirlo bien al dictado: la forma se forma con la tercera persona plural del indefinido (hicieron → hiciera, dijeron → dijera, tuvieron → tuviera), y la forma de nosotros lleva tilde (hiciéramos, pudiéramos).",
        ],
        [
          ["Nos pidieron que no hiciéramos fotos.", "They asked us not to take photos. (pidieron → hiciéramos)"],
          ["Sería mejor que lo dejáramos para mañana.", "It would be better if we left it for tomorrow. (condicional → dejáramos)"],
        ],
        [
          wo("Nos prohibieron que tocáramos los cuadros", "Prohibir en pasado (prohibieron) pide imperfecto de subjuntivo: tocáramos, con tilde en nosotros.", "They forbade us to touch the paintings"),
        ]
      ),
    ],
    [
      wo("Me sorprendió que no hubiera nadie", "Emoción en pasado (sorprendió) → imperfecto de subjuntivo de haber: hubiera.", "It surprised me that there was nobody"),
      wo("Buscaba a alguien que hablara ruso", "Antecedente desconocido en pasado (buscaba) → imperfecto de subjuntivo: hablara.", "I was looking for someone who spoke Russian"),
      wo("Le dije que se diera prisa", "Orden indirecta en pasado (le dije que…) → imperfecto de subjuntivo: se diera prisa.", "I told him to hurry up"),
      toEs("They wanted me to stay.", "Querían que me quedara.", "«Querer que» en pasado exige imperfecto de subjuntivo: «me quedara».", ["Querían que me quedase."]),
      toEs("Me piden que no haga ruido.", "Me pidieron que no hiciera ruido.", "Al pasar pedir al pasado (pidieron), el subjuntivo retrocede a imperfecto: haga → hiciera.", ["Me pidieron que no hiciese ruido."], "Cambia el verbo principal al pretérito indefinido (pidieron) y adapta la frase."),
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
        "Real: si + presente. Irreal presente: si + imperfecto de subjuntivo. Irreal pasado: si + pluscuamperfecto de subjuntivo. Mixta: si + pluscuamperfecto de subjuntivo, condicional simple.",
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
      fb("Rápido.", "Si ___ italiano, iré a Roma. (aprender, yo)", "aprendo", "Condición real (iré): si + presente de indicativo."),
      fb("Rápido.", "Si ___ italiano, habría trabajado en Roma. (hablar, yo)", "hubiera hablado", "Irreal pasado."),
      fb("Rápido.", "Si hubieras venido, te ___. (gustar)", "habría gustado", "Irreal pasado."),
      fb("Rápido.", "Si vinieras, te ___. (gustar)", "gustaría", "Irreal presente."),
      fb("Rápido.", "Si vienes, te ___. (gustar, futuro)", "gustará", "Condición real (si vienes): la consecuencia va en futuro."),
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
        [
          "Recuerda la regla: hay tres maneras de mirar algo que ya no se puede cambiar, y cada una tiene su forma. Lamento sobre ti mismo o sobre algo que deseabas: ojalá + pluscuamperfecto de subjuntivo (ojalá hubiera ido). Reproche a alguien: deberías / tendrías que / podrías + haber + participio (deberías haber avisado). Hipótesis con otro resultado: si + pluscuamperfecto de subjuntivo → condicional compuesto (si hubiera ido, habría disfrutado).",
          "Dos errores frecuentes: tras si y tras ojalá nunca va el condicional ni el indicativo (si habría…, ojalá había…), y en el reproche el verbo deber va en condicional seguido de haber, no de un participio solo (deberías avisado).",
        ],
        [
          ["Ojalá hubiera aceptado aquel trabajo.", "I wish I had accepted that job. (lamento)"],
          ["Tendrías que haber cerrado la ventana.", "You should have closed the window. (reproche)"],
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
      fb("Completa.", "Ojalá ___ caso a mi madre. (hacer, yo)", "hubiera hecho", "Lamento propio sobre el pasado: ojalá + pluscuamperfecto de subjuntivo (hubiera hecho caso). «Ojalá haga» sería un deseo todavía posible."),
      fb("Completa.", "Deberías ___ antes. (avisar, tú)", "habernos avisado", "Reproche sobre el pasado: deberías + haber + participio; el pronombre puede ir pegado a haber (habernos avisado) o delante de deberías (nos deberías haber avisado)."),
      fb("Completa.", "Si me hubieras avisado, ___ antes. (venir, yo)", "habría venido", "Hipótesis sobre el pasado: si + pluscuamperfecto de subjuntivo (hubieras avisado) → condicional compuesto (habría venido). «Había venido» es indicativo y no expresa hipótesis."),
      toEs("You could have told me.", "Me lo podrías haber dicho.", "«Podrías haber» + participio expresa un reproche sobre el pasado.", ["Podrías habérmelo dicho.", "Me lo habrías podido decir.", "Pudiste habérmelo dicho.", "Podías habérmelo dicho."]),
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
        "El médico dijo: «Los análisis han salido bien. ¿Sigue tomando la medicación? Tómela un mes más y vuelva en junio. No se preocupe.» Recuerda la regla para contarlo con un verbo en pasado (me dijo, me preguntó, me pidió): los tiempos dan un paso atrás. El presente pasa a imperfecto (sigue → seguía), el perfecto y el indefinido a pluscuamperfecto (han salido → habían salido) y el futuro a condicional (irá → iría). Las preguntas de sí o no se introducen con si, y las demás conservan su interrogativo (dónde, cuándo), siempre en indicativo. Las órdenes, afirmativas o negativas, pasan a que + imperfecto de subjuntivo (tómela → que la tomara; no se preocupe → que no me preocupara). ¿Por qué? Porque ahora todo se mira desde el momento en que hablas, que es posterior a lo que se dijo. Por eso también cambian mañana → al día siguiente y aquí → allí.",
        [
          ["Me dijo que los análisis habían salido bien.", "He told me the tests had come back fine."],
          ["Me pidió que volviera en junio.", "She asked me to come back in June."],
        ],
        [
          fb("Cuenta.", "«La farmacia cierra a las nueve.» → Me dijo que la farmacia ___ a las nueve. (cerrar)", "cerraba", "Con dijo en pasado, el presente da un paso atrás: cierra → cerraba (imperfecto)."),
          fb("Cuenta.", "«Descanse dos días.» → Me recomendó que ___ dos días. (descansar)", "descansara", "Una orden (descanse) transmitida en pasado pasa a que + imperfecto de subjuntivo: descansara, no «descansa»."),
        ]
      ),
    ],
    [
      fb("Cuenta.", "Me preguntó si ___ tomando la medicación. (seguir)", "seguía", "Pregunta de sí o no → si + indicativo; el presente (sigue) da un paso atrás: seguía."),
      fb("Cuenta.", "Me dijo que la ___ un mes más. (tomar)", "tomara", "Era una orden (tómela): con dijo en pasado pasa a que + imperfecto de subjuntivo, tomara. «Tomaba» contaría un hábito, no una orden."),
      fb("Cuenta.", "…y que ___ en junio. (volver)", "volviera", "Otra orden (vuelva) transmitida: que + imperfecto de subjuntivo, volviera."),
      fb("Cuenta.", "Me pidió que no me ___. (preocupar)", "preocupara", "La orden negativa (no se preocupe) también pasa a imperfecto de subjuntivo; el pronombre cambia de persona: no me preocupara."),
      fb("Cuenta.", "Me aseguró que todo ___ bien. (ir, futuro → condicional)", "iría", "El futuro de lo dicho (irá) pasa a condicional en estilo indirecto pasado: iría."),
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
        "Recuerda la regla",
        [
          "Tres verbos, tres preguntas. ¿Dónde o cuándo tiene lugar un evento (una boda, un concierto, una reunión)? Ser: la reunión es en la sala 2. ¿Dónde está una persona o una cosa, o en qué estado ha quedado? Estar: la sala está en el segundo piso, las sillas están colocadas. ¿Existe algo que no se ha mencionado antes? Haber, siempre en singular: hay, hubo, había, habrá dos salas.",
          "Por qué: un evento «es» porque ocurre; un lugar o un objeto «está» porque ocupa un sitio. Y haber impersonal no tiene sujeto, así que no concuerda con lo que sigue: hubo problemas, nunca «hubieron».",
        ],
        [
          ["La presentación es en el salón de actos.", "The presentation is in the assembly hall. (evento: ser)"],
          ["El salón de actos está al final del pasillo.", "The assembly hall is at the end of the corridor. (lugar: estar)"],
          ["Había más de cien personas.", "There were more than a hundred people. (haber: singular)"],
        ],
        [
          wo("La cena es a las nueve en casa de mis tíos.", "La hora y el lugar de un evento (la cena) van con ser.", "The dinner is at nine at my aunt and uncle's house."),
          mc(
            "Completa: «Mañana ___ dos conferencias en el aula magna.»",
            ["habrá", "habrán", "estarán", "estará"],
            0,
            "Para la existencia de algo nuevo se usa haber, siempre en singular: habrá dos conferencias. «Habrán» es el error típico de concordancia, y estar exigiría unas conferencias ya conocidas."
          ),
        ]
      ),
    ],
    [
      wo("Hubo muchos problemas con el sonido.", "Haber impersonal es singular aunque «problemas» sea plural.", "There were many problems with the sound."),
      wo("Las sillas ya están colocadas.", "Resultado de una acción: estar + participio.", "The chairs are already set out."),
      wo("El ponente es muy listo, pero hoy está nervioso.", "Ser para el carácter (listo = inteligente); estar para el estado de hoy.", "The speaker is very clever, but today he's nervous."),
      wo("¿Dónde está la sala de prensa?", "La localización de un lugar o una cosa va con estar.", "Where is the press room?"),
      toEs("The concert is in the cathedral.", "El concierto es en la catedral.", "Para decir dónde tiene lugar un evento se usa «ser»: «El concierto es en la catedral»."),
      toEs("La boda es en el jardín.", "La novia está en el jardín.", "La boda es un evento (ser); la novia es una persona que ocupa un lugar (estar).", [], "Cambia «la boda» por «la novia» y adapta el verbo."),
      toEs("Hay una manifestación en la plaza.", "Hubo una manifestación en la plaza.", "Haber impersonal en pretérito es hubo (un hecho terminado); había describiría la escena.", ["Había una manifestación en la plaza."], "Pasa al pasado."),
      toEs("Hay un problema con el proyector.", "Hay varios problemas con el proyector.", "Hay no cambia en plural: haber impersonal es siempre singular.", ["Hay problemas con el proyector.", "Hay muchos problemas con el proyector.", "Hay unos problemas con el proyector.", "Hay algunos problemas con el proyector."], "Cambia «un problema» al plural."),
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
        "Recuerda la regla",
        [
          "Para describir cómo ha cambiado alguien, elige el verbo según el tipo de cambio. Ponerse + adjetivo: reacción del momento (se ponía rojo). Volverse + adjetivo: cambio de carácter que dura (se volvió abierto). Hacerse: profesión, religión o algo logrado con esfuerzo (se hizo profesor, rico). Llegar a ser: meta alcanzada tras un camino largo. Convertirse en + sustantivo: pasar a ser otra cosa.",
          "Truco: si le sigue un sustantivo sin artículo de profesión, hacerse; si es un sustantivo con artículo (un museo, un destino turístico), convertirse en; si es un adjetivo, piensa si dura poco (ponerse) o mucho (volverse).",
        ],
        [
          ["Con los años mi tía se volvió muy generosa.", "Over the years my aunt became very generous. (carácter: volverse)"],
          ["Se hizo rica con una tienda en línea.", "She got rich with an online shop. (esfuerzo: hacerse)"],
        ],
        [
          fb("Su historia.", "De niño se ___ rojo por todo. (ponerse, imperfecto)", "ponía", "Ponerse rojo es una reacción del momento; el imperfecto indica que pasaba a menudo."),
          mc(
            "Elige: «Mi hermano ___ millonario con su empresa de software.»",
            ["se hizo", "se puso", "se volvió en", "se quedó"],
            0,
            "Hacerse rico o millonario es un cambio logrado con esfuerzo. Ponerse es pasajero, «volverse en» no existe y quedarse indica un resultado no buscado."
          ),
        ]
      ),
      sec(
        "Su historia",
        "Mi primo era muy tímido; se ponía rojo por todo. Se hizo profesor y se volvió mucho más abierto. Llegó a ser director del colegio, que se ha convertido en uno de los mejores de la ciudad.",
        [
          ["Mi primo era muy tímido de pequeño.", "My cousin was very shy as a child."],
        ],
        []
      ),
    ],
    [
      fb("Su historia.", "Se ___ profesor. (hacerse, indefinido)", "hizo", "Una profesión se alcanza con hacerse."),
      fb("Su historia.", "Se ___ mucho más abierto. (volverse, indefinido)", "volvió", "Cambio de carácter duradero: volverse."),
      fb("Su historia.", "___ director del colegio. (llegar a ser, indefinido)", "Llegó a ser", "Llegar a ser: un logro tras un proceso largo."),
      fb("Su historia.", "El colegio se ha ___ en uno de los mejores. (convertir)", "convertido", "Convertirse en + sustantivo: una transformación."),
      { ...fb("Su historia.", "Cuando le dieron el premio, se ___ a llorar. (poner, indefinido)", "puso", "Ponerse a + infinitivo: empezar de repente a hacer algo."), altAnswers: ["echó"] },
      toEs("She has become more confident.", "Se ha vuelto más segura de sí misma.", "«Volverse» + adjetivo expresa un cambio de carácter gradual y duradero.", ["Se ha vuelto más segura.", "Se ha hecho más segura de sí misma."]),
      toEs("Con los años se hizo abogado.", "Con los años se volvió muy desconfiado.", "Hacerse va con la profesión; para un rasgo de carácter que se instala con el tiempo, volverse + adjetivo.", [], "Cambia «abogado» por «muy desconfiado» y adapta el verbo."),
      toEs("El castillo se convirtió en un hotel.", "El castillo se hizo muy famoso.", "Convertirse en va con un sustantivo; con el adjetivo famoso se usa hacerse (o volverse).", ["El castillo se volvió muy famoso."], "Cambia «un hotel» por «muy famoso» y adapta el verbo."),
      toEs("Al final consiguió ser campeona del mundo.", "Al final llegó a ser campeona del mundo.", "Llegar a ser resume una meta alcanzada tras un largo esfuerzo.", [], "Transforma la frase con «llegar a ser»."),
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
        "Recuerda la regla",
        [
          "Para destacar algo, el español lo mueve al principio. Con una hendida: ser + lo destacado + el relativo que le corresponde (quien para personas, donde para lugares, cuando para tiempos, lo que para cosas o ideas): Fue allí donde aprendí a cocinar. Con anteposición: si el complemento directo va delante, se repite con un pronombre: El pescado lo compro aquí. Y para ponderar: lo + adjetivo + que, con el adjetivo concordando con el sustantivo (lo fresca que está la fruta).",
          "Por qué: al mover el complemento delante del verbo, el pronombre recuerda qué función tiene; sin él, la frase suena incompleta.",
        ],
        [
          ["Fue allí donde aprendí a cocinar.", "It was there that I learned to cook. (lugar: donde)"],
          ["Las naranjas las traen de Valencia.", "The oranges, they bring them from Valencia. (anteposición: las)"],
        ],
        [
          fb("Completa la frase enfática sobre tu ciudad.", "___ más me gusta de mi ciudad es el mercado.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que más me gusta es…»."),
          mc(
            "Elige: «Fue en 2015 ___ me mudé al centro.»",
            ["cuando", "donde", "quien", "lo que"],
            0,
            "Lo destacado es un momento (en 2015), así que el relativo es cuando. Donde sería para un lugar y quien para una persona."
          ),
        ]
      ),
      sec(
        "Tu ciudad",
        "Lo que más me gusta de mi ciudad es el mercado. Fue allí donde aprendí a cocinar. El pescado lo compro siempre en el mismo puesto. No te imaginas lo fresco que está.",
        [
          ["El pan lo hacen en un horno de leña.", "The bread, they make it in a wood-fired oven."],
        ],
        []
      ),
    ],
    [
      fb("Completa la frase enfática sobre tu ciudad.", "Fue allí ___ aprendí a cocinar.", "donde", "En las hendidas de lugar se usa «donde»: «Fue allí donde…»."),
      fb("Completa la frase enfática sobre tu ciudad.", "El pescado ___ compro siempre en el mismo puesto.", "lo", "El complemento directo antepuesto se retoma con pronombre: «el pescado» → «lo»."),
      fb("Tu ciudad.", "No te imaginas lo ___ que está. (fresco)", "fresco", "Lo + adjetivo + que: lo no cambia y el adjetivo concuerda con el pescado (masculino)."),
      { ...fb("Completa la frase enfática sobre tu ciudad.", "Fue mi abuelo ___ me llevó allí por primera vez.", "quien", "En las oraciones hendidas de persona se usa «quien» (o «el que»): «Fue mi abuelo quien…»."), altAnswers: ["el que"] },
      fb("Completa la frase enfática sobre tu ciudad.", "Las flores ___ cultiva una señora del pueblo.", "las", "El complemento directo antepuesto se retoma con pronombre: «las flores» → «las»."),
      toEs("What I miss most is the sea.", "Lo que más echo de menos es el mar.", "Para destacar una cosa se usa «lo que»: «Lo que más echo de menos es…».", ["Lo que más extraño es el mar."]),
      toEs("Aprendí a nadar en el puerto.", "Fue en el puerto donde aprendí a nadar.", "Hendida de lugar: ser en el tiempo del verbo (fue) + lugar con su preposición + donde.", ["Fue en el puerto donde yo aprendí a nadar."], "Transforma en una hendida que destaque «en el puerto»."),
      toEs("Compro las verduras en el mercado.", "Las verduras las compro en el mercado.", "Al anteponer el complemento directo, se repite con el pronombre que concuerda con él: las verduras → las.", [], "Cambia el orden para destacar «las verduras»."),
      toEs("Las calles del centro son muy estrechas.", "No te imaginas lo estrechas que son las calles del centro.", "Lo + adjetivo + que: lo es invariable y el adjetivo concuerda con calles (estrechas).", ["No te puedes imaginar lo estrechas que son las calles del centro."], "Transforma la frase empezando por «No te imaginas lo…»."),
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
        "Un huérfano es un niño cuyos padres han muerto. Un viudo es un hombre cuya mujer ha muerto. Un mecenas es alguien cuyo dinero apoya el arte. Con preposición: un anfitrión es alguien en cuya casa se celebra algo.",
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
      fb("Define.", "Una isla es una tierra ___ costas baña el mar por todas partes.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «costas» → «cuyas»."),
      fb("Define.", "Una persona bilingüe es alguien ___ lenguas maternas son dos.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «lenguas» → «cuyas»."),
      fb("Define.", "Un anfitrión es alguien en ___ casa se celebra algo.", "cuya", "«Cuyo» puede ir tras preposición y concuerda con lo poseído: «casa» → «cuya»."),
      toEs("A widow is a woman whose husband has died.", "Una viuda es una mujer cuyo marido ha muerto.", "«Cuyo» concuerda con lo poseído («marido»), no con «una mujer».", ["Una viuda es una mujer cuyo esposo ha muerto.", "Una viuda es una mujer cuyo marido ha fallecido."]),
    ]
  ),
  L(
    "cien-palabras-nuevas",
    "b2d-rep-mezcla-opinion",
    "Práctica mezclada: ensayo de opinión",
    "Repaso espaciado: argumenta con todas las herramientas del nivel Avanzado.",
    "7 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Un ensayo de opinión distingue lo que das por cierto de lo que valoras o deseas. Certeza (es evidente que, está claro que, creo que) + indicativo: es evidente que el tráfico ha aumentado. Valoración, necesidad o duda (es fundamental que, es una lástima que, no creo que, basta con que) + subjuntivo: es fundamental que se reduzca. Para imaginar alternativas, si + imperfecto de subjuntivo + condicional. Y los conectores ordenan el argumento: sin embargo / no obstante (contraste), por lo tanto (consecuencia), a pesar de (que) (concesión).",
          "Por qué: lo que valoras todavía no es un hecho, sino tu postura ante él; por eso no va en indicativo.",
        ],
        [
          ["Es una pena que tantos niños no puedan ir al colegio en bici.", "It's a shame so many children can't cycle to school. (valoración: subjuntivo)"],
          ["Está claro que el aire de la ciudad ha empeorado.", "It's clear that the city's air has got worse. (certeza: indicativo)"],
        ],
        [
          mc(
            "Elige: «Es evidente que el sistema ___ cambios.»",
            ["necesita", "necesite", "necesitara", "necesitaría"],
            0,
            "Es evidente que presenta algo como cierto, así que va en indicativo: necesita. Con una valoración (es necesario que) sí iría el subjuntivo necesite."
          ),
        ]
      ),
      sec(
        "El ensayo",
        "«Es fundamental que las ciudades reduzcan el tráfico. Si hubiera más transporte público, la gente dejaría el coche. Sin embargo, no basta con que se construyan carriles bici. Lo que hace falta es un cambio de mentalidad, cuyo efecto tardará años.»",
        [
          ["No basta con buenas intenciones.", "Good intentions aren't enough."],
        ],
        [
          fb("Completa.", "Es fundamental que las ciudades ___ el tráfico. (reducir)", "reduzcan", "Es fundamental que es una valoración: subjuntivo (reducir → reduzcan)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ más transporte público… (haber)", "hubiera", "Irreal presente: si + imperfecto de subjuntivo."),
      fb("Completa.", "…la gente ___ el coche. (dejar)", "dejaría", "Condicional en la consecuencia de una hipótesis."),
      { ...fb("Completa.", "___, no basta con que se construyan carriles bici.", "Sin embargo", "«Sin embargo» introduce una objeción a lo dicho antes (también valen «No obstante» y «Ahora bien»)."), altAnswers: ["No obstante", "Ahora bien"] },
      fb("Completa.", "…no basta con que se ___ carriles bici. (construir)", "construyan", "Basta con que + subjuntivo."),
      fb("Completa.", "___ hace falta es un cambio de mentalidad.", "Lo que", "Para destacar una cosa se usa «lo que»: «Lo que hace falta es…»."),
      fb("Completa.", "…___ efecto tardará años.", "cuyo", "«Cuyo» concuerda con lo poseído: «efecto» es masculino singular."),
      toEs("It's essential that we act now.", "Es fundamental que actuemos ya.", "Las valoraciones como «es fundamental que» exigen subjuntivo: «actuemos».", ["Es esencial que actuemos ahora.", "Es fundamental que actuemos ahora."]),
      toEs("Es evidente que el gobierno escucha a los vecinos.", "Es fundamental que el gobierno escuche a los vecinos.", "Es evidente que (certeza) va con indicativo; es fundamental que (valoración) pide subjuntivo: escuche.", [], "Cambia «Es evidente que» por «Es fundamental que» y adapta el verbo."),
      toEs("Si hay más bibliotecas, la gente leerá más.", "Si hubiera más bibliotecas, la gente leería más.", "Para presentar la propuesta como hipótesis: si + imperfecto de subjuntivo (hubiera) y condicional (leería).", ["Si hubiese más bibliotecas, la gente leería más."], "Cambia a una hipótesis irreal del presente."),
      toEs("Aunque el plan es caro, lo apoyo.", "A pesar de que el plan es caro, lo apoyo.", "A pesar de que (con «de» delante de que) equivale a aunque y mantiene el indicativo para un hecho real.", ["Pese a que el plan es caro, lo apoyo."], "Transforma con «a pesar de que»."),
    ]
  ),
  L(
    "vidas-extra",
    "b2d-rep-mezcla-ronda-final",
    "Ronda rápida: Avanzado en diez segundos",
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
    "Circuito acumulativo: examen final del nivel Avanzado",
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
      fb("Estación 1.", "Te llamaré antes de que ___. (salir, tú)", "salgas", "Antes de que + subjuntivo con sujetos distintos (con el mismo sujeto: «antes de salir»)."),
      fb("Estación 2.", "Era imposible que lo ___. (saber, ellos)", "supieran", "Secuencia."),
      fb("Estación 3.", "Si lo ___, te lo habría dicho. (saber, yo)", "hubiera sabido", "Irreal pasado."),
      fb("Estación 4.", "Me preguntó si ___ cenado. (haber, yo)", "había", "Pluscuamperfecto."),
      fb("Estación 5.", "Con los años se ha ___ muy sabia. (volverse)", "vuelto", "Verbo de cambio."),
      fb("Estación 5.", "___ mucha gente en la manifestación. (haber, indefinido)", "Hubo", "Haber singular."),
      fb("Estación 6: completa con la expresión concesiva.", "___ de todo, seguimos adelante.", "A pesar", "«A pesar de todo» es una concesión fija: las dificultades no impiden seguir."),
      fb("Estación 6: completa con el relativo adecuado.", "Es un país ___ historia me fascina.", "cuya", "«Cuyo» concuerda con lo poseído, no con el poseedor: «historia» → «cuya»."),
    ]
  ),
];
