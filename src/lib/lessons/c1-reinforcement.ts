// Synced from cheneygross-afk/lengo:src/lib/lessons/c1-reinforcement.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// C1 reinforcement lessons -- woven into C1_LESSONS right after the lesson
// each one reinforces (see weave.ts). Entirely in Spanish, like the base
// C1 lessons. Every multi-part C1 topic gets reinforcement at three points
// (not only at the end), so retrieval practice recurs while the topic is
// still being taught. Formats: transformations, error hunts, contrast
// clinics, dialogue labs, text detectives, style workshops (rewriting for
// register), missions, spiral reviews and a closing C1 Challenge series.
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("C1", after, slug, title, summary, duration, sections, exercises);

export const C1_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "subjunctive-mastery-review-2",
    "c1r-contrast-aspect-subjunctive",
    "Contraste: que venga / que haya venido",
    "El aspecto en el subjuntivo: acción en curso o futura frente a acción ya concluida.",
    "7 min",
    [
      sec(
        "Presente o perfecto de subjuntivo",
        "Con el verbo principal en presente, el presente de subjuntivo presenta la acción como simultánea o posterior; el perfecto de subjuntivo, como anterior y concluida.",
        [
          ["Me alegro de que vengas.", "I'm glad you're coming. (now / later)"],
          ["Me alegro de que hayas venido.", "I'm glad you came. (already done)"],
          ["Espero que lo terminen. / Espero que lo hayan terminado.", "I hope they finish it. / I hope they've finished it."],
        ],
        [
          mc(
            "Son las diez de la noche. «Espero que ya ___ la cena.» (acción que debería estar terminada)",
            ["hayan preparado", "preparen", "prepararan", "hubieran preparado"],
            0,
            "La acción debería estar ya concluida respecto al presente («ya», «son las diez»), así que va en perfecto de subjuntivo: «hayan preparado». «Preparen» la presenta como futura, y «prepararan» o «hubieran preparado» exigen un verbo principal en pasado («Esperaba que…»)."
          ),
        ]
      ),
      sec(
        "El imperfecto frente al pluscuamperfecto",
        "Con el verbo principal en pasado, el imperfecto de subjuntivo marca simultaneidad o posterioridad; el pluscuamperfecto, anterioridad.",
        [
          ["Me sorprendió que llegara tarde.", "It surprised me that he arrived late. (at that moment)"],
          ["Me sorprendió que ya se hubiera ido.", "It surprised me that he had already left. (before that moment)"],
        ],
        [
          fb("Completa.", "Lamenté que no me ___ avisado antes. (haber, ellos)", "hubieran", "Acción anterior al lamento → pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Elige el tiempo.", "No creo que ___ el informe todavía. (leer, él; acción concluida)", "haya leído", "«Todavía» y «acción concluida» piden perfecto de subjuntivo: «no creo que haya leído»."),
      fb("Elige el tiempo.", "No creo que ___ el informe mañana. (leer, él)", "lea", "Acción posterior a un verbo en presente («no creo»): presente de subjuntivo, «lea»."),
      fb("Elige el tiempo.", "Dudaba que ___ en tan poco tiempo. (terminar, ellos; anterior)", "hubieran terminado", "Acción anterior a un verbo principal en pasado («dudaba»): pluscuamperfecto de subjuntivo, «hubieran terminado»."),
      fb("Elige el tiempo.", "Le pedí que ___ más despacio. (hablar, ella)", "hablara", "Acción posterior a un verbo en pasado («pedí»): imperfecto de subjuntivo, «hablara»."),
      mt(
        "Relaciona cada frase con su interpretación temporal.",
        [
          ["Es raro que no llame.", "que no llame ahora o en adelante"],
          ["Es raro que no haya llamado.", "que no haya llamado hasta ahora"],
          ["Era raro que no llamara.", "que no llamara en aquel momento"],
          ["Era raro que no hubiera llamado.", "que no hubiera llamado antes de aquel momento"],
        ],
        "El aspecto y la referencia temporal deciden el tiempo."
      ),
      toEs("I'm sorry you've had to wait so long.", "Siento que hayas tenido que esperar tanto.", "Perfecto de subjuntivo para una acción ya ocurrida.", ["Lamento que hayas tenido que esperar tanto.", "Siento que haya tenido que esperar tanto."]),
      wo("Me extraña que todavía no hayan contestado al correo.", "Perfecto de subjuntivo con todavía no.", "I find it strange that they still haven't answered the email."),
    ]
  ),
  L(
    "subjunctive-mastery-review-2",
    "c1r-error-hunt-tense-concordance",
    "Caza de errores: la concordancia temporal",
    "Subjuntivos que no respetan el eje temporal — diagnostica y corrige en textos auténticos.",
    "7 min",
    [
      sec(
        "Errores de nivel avanzado",
        "A este nivel los errores no están en la forma, sino en la elección temporal: un presente donde hace falta un perfecto, un imperfecto donde el hecho es anterior.",
        [
          ["✗ Me alegro de que ya terminas. → ✓ Me alegro de que ya hayas terminado.", "I'm glad you've already finished. (concluded action → perfect subjunctive)"],
          ["✗ No sabía que llegues hoy. → ✓ No sabía que llegabas hoy.", "Saber (negado en pasado) suele llevar indicativo: no sabía que llegabas."],
        ],
        [
          mc(
            "Corrige: «Temía que el tren ya salga.»",
            ["Temía que el tren ya hubiera salido.", "Temía que el tren ya haya salido.", "Temía que el tren ya sale.", "No hay error."],
            0,
            "Con el verbo principal en pasado («temía») y una acción anterior («ya»), corresponde pluscuamperfecto de subjuntivo: «hubiera salido». «Haya salido» concuerda con un presente («temo»), «sale» es indicativo tras un verbo de temor y la frase original sí tiene error."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Nos exigieron que ___ antes del viernes. (entregar, nosotros; el alumno escribió: entreguemos)", "entregáramos", "«Exigieron» está en pasado, así que la acción posterior va en imperfecto de subjuntivo: «entregáramos», no «entreguemos»."),
      fb("Corrige.", "Es probable que ya ___ la noticia. (saber, ellos; el alumno escribió: supieran)", "sepan", "Presente de probabilidad sobre el presente → presente de subjuntivo."),
      fb("Corrige.", "No me pareció normal que nadie lo ___ antes. (notar; el alumno escribió: note)", "hubiera notado", "Acción anterior a «pareció» (pasado): pluscuamperfecto de subjuntivo, «hubiera notado», no «note»."),
      ms(
        "¿Qué frases respetan la concordancia?",
        ["Quería que me lo dijeras.", "Me molesta que no me lo hayas dicho.", "Esperaba que lo hayas terminado.", "Me habría gustado que vinieras."],
        [0, 1, 3],
        "Con el verbo principal en pasado («esperaba») el subjuntivo no puede ir en perfecto: lo correcto es «que lo hubieras terminado». Las demás respetan la concordancia: pasado con imperfecto («quería que dijeras», «habría gustado que vinieras») y presente con perfecto («me molesta que no hayas dicho»)."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Ojalá lo hubiera sabido antes.", "Ojalá lo haya sabido antes ayer.", "Ojalá lo sepa antes, ayer.", "Ojalá lo supe antes."],
        0,
        "Para un deseo irrealizable sobre el pasado, «ojalá» va con pluscuamperfecto de subjuntivo: «ojalá lo hubiera sabido». «Haya sabido… ayer» y «sepa… ayer» chocan con la referencia pasada cerrada, y «ojalá» no admite indefinido («supe»)."
      ),
      toEs("They were surprised that we had arrived so early.", "Les sorprendió que hubiéramos llegado tan pronto.", "Verbo principal en pasado («sorprendió») + acción anterior: pluscuamperfecto de subjuntivo, «hubiéramos llegado».", ["Les extrañó que hubiéramos llegado tan pronto.", "Les sorprendió que hubiéramos llegado tan temprano."]),
      wo("Nadie esperaba que el proyecto hubiera avanzado tanto en un mes.", "Esperaba (pasado) + pluscuamperfecto de subjuntivo.", "Nobody expected the project to have progressed so much in a month."),
    ]
  ),
  L(
    "subjunctive-mastery-review-4",
    "c1r-transform-universal-concessive",
    "Transformaciones: las fórmulas concesivo-universales",
    "Pase lo que pase, digan lo que digan, sea quien sea — convierte frases en fórmulas reduplicativas.",
    "7 min",
    [
      sec(
        "La estructura reduplicativa",
        "Verbo en subjuntivo + relativo (lo que, quien, donde, como, cuando) + el mismo verbo en subjuntivo: expresa que nada de eso cambia el resultado.",
        [
          ["No importa lo que digan. → Digan lo que digan.", "Whatever they say."],
          ["No importa quién sea. → Sea quien sea.", "Whoever it is."],
          ["No importa dónde vivas. → Vivas donde vivas.", "Wherever you live."],
        ],
        [
          fb("Transforma.", "No importa cómo lo hagas. → ___, saldrá bien.", "Lo hagas como lo hagas", "Verbo + como + mismo verbo, ambos en subjuntivo."),
        ]
      ),
      sec(
        "En pasado",
        "Con referencia pasada, se usa el imperfecto de subjuntivo: Hiciera lo que hiciera, nunca estaba satisfecho.",
        [
          ["Fuera donde fuera, lo reconocían.", "Wherever he went, people recognized him."],
        ],
        [
          fb("Transforma al pasado.", "Diga lo que diga, nadie lo escucha. → ___, nadie lo escuchaba.", "Dijera lo que dijera", "En pasado, la fórmula pasa al imperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Transforma.", "No importa cuánto cueste. → ___, lo compraremos.", "Cueste lo que cueste", "Fórmula concesivo-universal: subjuntivo + «lo que» + mismo subjuntivo, «cueste lo que cueste»."),
      fb("Transforma.", "No importa cuándo llegues. → Llegues ___ llegues, te esperaremos.", "cuando", "Concesiva reduplicativa: el verbo se repite en subjuntivo con el relativo en medio, «llegues cuando llegues»."),
      fb("Transforma al pasado.", "Pase lo que pase, sigue adelante. → ___, seguía adelante.", "Pasara lo que pasara", "Imperfecto de subjuntivo en ambas posiciones."),
      mc(
        "«Whoever calls, I'm not in.»",
        ["Llame quien llame, no estoy.", "Llama quien llama, no estoy.", "Quien llame quien, no estoy.", "Llamara quien llama, no estoy."],
        0,
        "La fórmula concesivo-universal repite el verbo en subjuntivo con un relativo en medio: «Llame quien llame». «Llama quien llama» usa indicativo, «Quien llame quien» deshace la estructura y «Llamara quien llama» mezcla tiempos y modos."
      ),
      mt(
        "Relaciona cada fórmula con su traducción.",
        [
          ["Sea como sea", "Be that as it may / One way or another"],
          ["Digan lo que digan", "Whatever they say"],
          ["Vayas adonde vayas", "Wherever you go"],
          ["Quieras o no", "Whether you like it or not"],
        ],
        "Fórmulas concesivo-universales."
      ),
      toEs("Whatever happens, I'll be there.", "Pase lo que pase, estaré allí.", "«Pase lo que pase» es la fórmula fija para «whatever happens»: subjuntivo repetido con «lo que».", ["Pase lo que pase, estaré ahí."]),
      wo("Por mucho que lo intentara, fuera cual fuera el método, no lo conseguía.", "Por mucho que + fuera cual fuera (reduplicación con cual).", "However hard he tried, whatever the method, he couldn't do it."),
    ]
  ),
  L(
    "subjunctive-mastery-review-4",
    "c1r-workshop-attenuation",
    "Taller de estilo: el subjuntivo que suaviza",
    "Quisiera, no es que…, no digo que… — usa el subjuntivo para matizar y atenuar en situaciones delicadas.",
    "7 min",
    [
      sec(
        "Atenuar sin perder claridad",
        "El subjuntivo permite rebajar la fuerza de una afirmación o una petición: quisiera (en vez de quiero), no es que no me guste (en vez de no me gusta), no digo que sea malo, pero…",
        [
          ["Quisiera comentarle un asunto delicado.", "I'd like to discuss a delicate matter with you."],
          ["No es que el informe esté mal, pero podría mejorarse.", "It's not that the report is bad, but it could be improved."],
          ["No digo que tengas la culpa, sino que deberíamos hablarlo.", "I'm not saying it's your fault, but that we should talk about it."],
        ],
        [
          fb("Suaviza.", "Quiero hablar con usted. → ___ hablar con usted.", "Quisiera", "Quisiera: imperfecto de subjuntivo de cortesía (no condicional, aunque equivale a «querría»)."),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Tu propuesta no me convence. → No es que tu propuesta no me ___, pero tengo dudas.", "convenza", "«No es que» niega o atenúa una razón y exige subjuntivo: «no es que no me convenza»."),
      fb("Suaviza.", "Estás equivocado. → No digo que ___ equivocado, pero quizá haya otra perspectiva.", "estés", "«No digo que» niega lo afirmado y pide subjuntivo: «no digo que estés equivocado»."),
      fb("Suaviza.", "Hágalo hoy. → Le agradecería que lo ___ hoy.", "hiciera", "Agradecería que + imperfecto de subjuntivo."),
      mt(
        "Relaciona cada frase directa con su versión atenuada.",
        [
          ["Quiero un descuento.", "Quisiera saber si sería posible un descuento."],
          ["No me gusta.", "No es que no me guste, pero no me convence del todo."],
          ["Te equivocas.", "Puede que haya un pequeño error."],
          ["Llegas tarde.", "Sería conveniente que llegaras a la hora."],
        ],
        "Condicional, subjuntivo y posibilidad para atenuar."
      ),
      ms(
        "¿Qué frases resultan atenuadas y correctas?",
        ["Quizá no sea el mejor momento para hablarlo.", "Me permitiría sugerir que lo revisáramos.", "No es que no quiero ir.", "Tal vez convendría esperar."],
        [0, 1, 3],
        "«No es que» exige subjuntivo, así que «No es que no quiero ir» es incorrecta: debe ser «no es que no quiera ir». Las demás atenúan bien con «quizá» + subjuntivo, el condicional de cortesía («me permitiría», «convendría») y «tal vez»."
      ),
      toEs("I wouldn't say it's impossible, but it's very difficult.", "No diría que sea imposible, pero es muy difícil.", "«No diría que» niega la afirmación y lleva subjuntivo: «no diría que sea imposible».", ["Yo no diría que sea imposible, pero es muy difícil.", "No diría que es imposible, pero es muy difícil."]),
      wo("Quisiera pedirle que reconsiderara su decisión.", "Quisiera + pedir que + imperfecto de subjuntivo.", "I'd like to ask you to reconsider your decision."),
    ]
  ),
  L(
    "subjunctive-mastery-review-6",
    "c1r-text-detective-subjunctive",
    "Detective de textos: el subjuntivo en un editorial",
    "Analiza un fragmento de un editorial: por qué cada verbo está en el modo y el tiempo que está.",
    "8 min",
    [
      sec(
        "El texto",
        "Lee el fragmento con atención antes de responder.",
        [
          ["Resulta inaceptable que, a estas alturas, no se haya aprobado aún el plan de vivienda.", "It is unacceptable that, at this point, the housing plan still has not been approved."],
          ["Sea cual sea el motivo del retraso, los ciudadanos merecen que se les explique.", "Whatever the reason for the delay, citizens deserve an explanation."],
          ["Nadie pretende que el problema se resuelva de un día para otro; ahora bien, sí cabe exigir que se actúe.", "Nobody expects the problem to be solved overnight; that said, it's fair to demand action."],
        ],
        [
          ms(
            "¿Qué formas del texto están en perfecto de subjuntivo?",
            ["se haya aprobado", "sea", "se resuelva", "se les explique"],
            [0],
            "Solo «se haya aprobado» combina «haya» + participio, la forma del perfecto de subjuntivo. «Sea», «se resuelva» y «se les explique» son presentes de subjuntivo, formas simples sin auxiliar."
          ),
          mc(
            "¿Qué función cumple «Sea cual sea el motivo»?",
            ["Concesiva universal: el motivo no cambia la conclusión.", "Condicional real.", "Final.", "Causal."],
            0,
            "«Sea cual sea el motivo» es una concesiva universal reduplicativa: cualquier motivo posible no cambia la conclusión. No es condicional (no plantea un requisito), ni final (no expresa propósito), ni causal (no da la razón de nada)."
          ),
        ]
      ),
    ],
    [
      fb("Continúa el editorial.", "Es de esperar que el gobierno ___ explicaciones esta misma semana. (dar)", "dé", "Es de esperar que + subjuntivo."),
      fb("Continúa el editorial.", "De haberse aprobado a tiempo, miles de familias ___ ya una vivienda. (tener, condicional)", "tendrían", "De + infinitivo compuesto = condición irreal; consecuencia presente."),
      fb("Continúa el editorial.", "No basta con que se ___ promesas; hacen falta hechos. (hacer)", "hagan", "No basta con que + subjuntivo."),
      mt(
        "Relaciona cada estructura con su valor.",
        [
          ["Resulta inaceptable que + subjuntivo", "valoración"],
          ["Sea cual sea", "concesión universal"],
          ["Nadie pretende que + subjuntivo", "negación de una intención"],
          ["Cabe exigir que + subjuntivo", "influencia / exigencia"],
        ],
        "Valores del subjuntivo en un texto argumentativo."
      ),
      toEs("It is essential that the authorities act before it is too late.", "Es imprescindible que las autoridades actúen antes de que sea demasiado tarde.", "Dos subjuntivos: valoración y antes de que.", ["Resulta imprescindible que las autoridades actúen antes de que sea demasiado tarde.", "Es fundamental que las autoridades actúen antes de que sea demasiado tarde."]),
      wo("Que se haya tardado tanto dice mucho de la voluntad política.", "Oración sustantiva de sujeto con subjuntivo.", "The fact that it has taken so long says a lot about political will."),
    ]
  ),
  L(
    "subjunctive-mastery-review-6",
    "c1r-spiral-subjunctive-b2-c1",
    "Repaso en espiral: el subjuntivo del B2 al C1",
    "Relativas, adverbiales, condicionales y los matices del C1 — un recorrido completo sin pistas.",
    "8 min",
    [
      sec(
        "Del B2 al C1",
        "En el C1 el subjuntivo ya no es una regla, sino una herramienta de precisión. Cada checkpoint mezcla un uso de base con un matiz avanzado.",
        [
          ["Busco a alguien que haya trabajado en el sector.", "I'm looking for someone who has worked in the sector."],
          ["Si lo hubiera sabido, te lo habría dicho, fuera cual fuera la consecuencia.", "If I had known, I'd have told you, whatever the consequence."],
        ],
        [
          fb("Completa.", "No conozco a nadie que ___ vivido en Islandia. (haber)", "haya", "Antecedente inexistente («nadie») + acción ya realizada: perfecto de subjuntivo, «haya vivido»."),
          fb("Completa.", "Te lo explicaré de nuevo para que no ___ dudas. (quedar)", "queden", "«Para que» (finalidad con sujeto distinto) exige subjuntivo: «queden»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando ___ el máster, buscaré trabajo en el extranjero. (terminar, yo)", "termine", "«Cuando» con valor futuro exige presente de subjuntivo, nunca futuro: «cuando termine»."),
      fb("Completa.", "Me hablaba como si nunca nos ___ visto. (haber, nosotros)", "hubiéramos", "«Como si» solo admite imperfecto o pluscuamperfecto de subjuntivo; con anterioridad, «hubiéramos visto»."),
      fb("Completa.", "Por muy difícil que ___, lo intentaremos. (parecer)", "parezca", "Por muy + adjetivo + que + subjuntivo."),
      fb("Completa.", "El hecho de que no ___ contestado no significa nada. (haber, él)", "haya", "El hecho de que + subjuntivo."),
      mc(
        "«Had I known, I wouldn't have come.»",
        ["De haberlo sabido, no habría venido.", "De saberlo, no vendría ayer.", "Si lo habría sabido, no habría venido.", "Habiéndolo sabido, no vine."],
        0,
        "«De + infinitivo compuesto» equivale a una condicional irreal del pasado: «de haberlo sabido» = «si lo hubiera sabido». «De saberlo, no vendría ayer» mezcla un condicional simple con «ayer», «si lo habría sabido» es incorrecto (tras «si» no va condicional) y «Habiéndolo sabido, no vine» narra un hecho real, no una hipótesis."
      ),
      toEs("It's not that I don't trust you; it's that I need proof.", "No es que no confíe en ti; es que necesito pruebas.", "No es que + subjuntivo; es que + indicativo.", ["No es que no me fíe de ti; es que necesito pruebas."]),
      wo("Ojalá hubiéramos tenido esta conversación hace años.", "Ojalá + pluscuamperfecto.", "I wish we'd had this conversation years ago."),
    ]
  ),
  L(
    "concessive-aunque-2",
    "c1r-contrast-aunque-modes",
    "Contraste: aunque llueve / aunque llueva / aunque lloviera",
    "Tres grados de concesión: el hecho asumido, la hipótesis y la concesión minimizada.",
    "7 min",
    [
      sec(
        "Tres aunques",
        "Aunque + indicativo: el hablante asume el hecho y lo presenta como información nueva. Aunque + subjuntivo: el hecho es hipotético o, aunque sea cierto, se le resta importancia. Aunque + imperfecto de subjuntivo: la concesión es improbable o contraria a la realidad.",
        [
          ["Aunque es tarde, te llamo.", "Although it's late, I'll call you. (I'm informing you it's late)"],
          ["Aunque sea tarde, te llamo.", "Even if it's late / Late as it is, I'll call you. (it doesn't matter)"],
          ["Aunque fuera medianoche, te llamaría.", "Even if it were midnight, I'd call you."],
        ],
        [
          mc(
            "Tu amigo sabe que eres rico. Le dices: «___ rico, no me gusta derrochar.»",
            ["Aunque sea", "Aunque fuera", "Aunque soy (como información nueva)", "Aunque sería"],
            0,
            "Cuando el hecho es conocido por ambos y se le resta importancia, «aunque» va con presente de subjuntivo: «Aunque sea rico». «Aunque soy» lo presentaría como información nueva, «aunque fuera» lo convertiría en hipótesis y el condicional «sería» no va tras «aunque» en este sentido."
          ),
        ]
      ),
    ],
    [
      fb("Elige el modo.", "Aunque ___ mucho estudio, no aprobé. (hacer, yo; hecho que informo)", "hice", "Hecho asumido y nuevo → indicativo."),
      fb("Elige el modo.", "Aunque me lo ___ de rodillas, no lo haría. (pedir, tú; hipótesis improbable)", "pidieras", "Hipótesis improbable con «aunque»: imperfecto de subjuntivo, «pidieras», en correlación con «haría»."),
      fb("Elige el modo.", "Sí, ya sé que es tu hermano, pero aunque ___ tu hermano, no tiene derecho a hablarte así. (ser)", "sea", "El hecho es conocido («ya sé que es tu hermano») y se minimiza: «aunque» + subjuntivo, «sea»."),
      mt(
        "Relaciona cada frase con su matiz.",
        [
          ["Aunque tiene talento, no trabaja.", "Informo de que tiene talento."],
          ["Aunque tenga talento, no trabaja.", "Doy por sabido su talento y le resto importancia."],
          ["Aunque tuviera talento, no bastaría.", "Planteo una hipótesis poco probable."],
          ["Aunque hubiera tenido talento, no habría triunfado.", "Hipótesis irreal sobre el pasado."],
        ],
        "Cuatro grados de concesión."
      ),
      ms(
        "¿Qué frases son correctas y naturales?",
        ["Aunque me cueste admitirlo, tenías razón.", "Aunque estaba lloviendo, salimos a correr.", "Aunque habría tiempo, no iría.", "Aunque no lo creas, es cierto."],
        [0, 1, 3],
        "Para una hipótesis, aunque va con imperfecto de subjuntivo, no con condicional: aunque hubiera tiempo, no iría. El condicional sí es correcto cuando la concesiva expresa un hecho real atenuado por cortesía: «Aunque me gustaría, no puedo»."
      ),
      toEs("Even though it may seem strange, I prefer winter.", "Aunque parezca raro, prefiero el invierno.", "Aunque + subjuntivo (hecho que se minimiza).", ["Aunque parezca extraño, prefiero el invierno.", "Aunque resulte raro, prefiero el invierno."]),
      wo("Aunque no lo reconozca, sé que me echa de menos.", "Aunque + subjuntivo (no importa que lo reconozca).", "Even if he won't admit it, I know he misses me."),
    ]
  ),
  L(
    "concessive-aunque-2",
    "c1r-error-hunt-concessives",
    "Caza de errores: las concesivas",
    "Aunque + condicional, a pesar de sin que, por mucho que con indicativo — corrige los errores avanzados.",
    "7 min",
    [
      sec(
        "Errores frecuentes",
        "(1) Condicional en una concesiva hipotética: ✗ aunque tendría más dinero, no lo compraría → ✓ aunque tuviera. (Ojo: el condicional de cortesía sí es correcto con aunque cuando se trata de un hecho real: «Aunque me gustaría, no puedo».) (2) A pesar de + verbo conjugado sin que: ✗ a pesar de llovía → ✓ a pesar de que llovía. (3) Por mucho que con futuro: ✗ por mucho que insistirás → ✓ por mucho que insistas.",
        [
          ["✗ Aunque sabría la respuesta, no la diría. → ✓ Aunque supiera la respuesta, no la diría.", "Even if I knew the answer, I wouldn't say it."],
        ],
        [
          fb("Corrige.", "A pesar ___ estaba enfermo, fue a trabajar. (el alumno escribió: de)", "de que", "Verbo conjugado → a pesar de que."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Por mucho que ___, no te daré la razón. (insistir, tú; el alumno escribió: insistirás)", "insistas", "«Por mucho que» con valor de futuro o hipotético exige subjuntivo, nunca futuro: «insistas»."),
      fb("Corrige.", "Aunque ___ más dinero, no se compraría ese coche. (tener, él; el alumno escribió: tendría)", "tuviera", "En una concesiva hipotética, «aunque» va con imperfecto de subjuntivo, no con condicional: «tuviera»."),
      fb("Corrige.", "El coche es caro y, por muy ___ que sea, no me convence. (bonito; el alumno escribió: bonita)", "bonito", "El adjetivo concuerda con «coche» (masculino singular): «por muy bonito que sea»."),
      ms(
        "¿Qué frases tienen un error?",
        ["Pese a que llovía, el partido siguió.", "Aun cuando lo supiera, no diría nada.", "Por mucho que insistirás, no cambiaré de idea.", "Por más que lo intento, no me sale."],
        [2],
        "«Por mucho que» no admite futuro: debe ser «por mucho que insistas». Las demás son correctas: «pese a que» con indicativo para un hecho real, «aun cuando» con subjuntivo hipotético y «por más que lo intento» con indicativo para una experiencia constatada."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Si bien el plan es ambicioso, es viable.", "Si bien el plan sea ambicioso, es viable.", "Si bien el plan sería ambicioso, es viable.", "Si bien que el plan es ambicioso, es viable."],
        0,
        "«Si bien» es un concesivo que presenta un hecho real y va con indicativo: «Si bien el plan es ambicioso». No admite subjuntivo («sea») ni condicional («sería») en este uso, y «si bien que» añade un «que» que no existe en la locución."
      ),
      toEs("However much you explain it to me, I don't understand it.", "Por mucho que me lo expliques, no lo entiendo.", "«Por mucho que» con un hecho no constatado lleva subjuntivo: «por mucho que me lo expliques».", ["Por más que me lo expliques, no lo entiendo."]),
      wo("Aun a riesgo de equivocarme, diré lo que pienso.", "Aun a riesgo de + infinitivo (concesión).", "Even at the risk of being wrong, I'll say what I think."),
    ]
  ),
  L(
    "concessive-aunque-4",
    "c1r-transform-concessive-connectors",
    "Transformaciones: seis maneras de conceder",
    "Reformula la misma idea con aunque, a pesar de (que), si bien, por más que, pese a y aun así.",
    "7 min",
    [
      sec(
        "Una idea, seis formas",
        "Cada conector tiene su construcción y su registro: si bien (formal, + indicativo), pese a (formal), aun así (coloquial-neutro, inicia oración).",
        [
          ["Aunque es caro, merece la pena.", "Although it's expensive, it's worth it."],
          ["Si bien es caro, merece la pena.", "(more formal)"],
          ["Pese a su precio, merece la pena.", "(formal, + sustantivo)"],
          ["Es caro. Aun así, merece la pena.", "(new sentence)"],
        ],
        [
          fb("Reformula.", "Aunque llovía, salimos. → ___ a la lluvia, salimos.", "Pese", "«Pese a» + sustantivo equivale a «a pesar de»: «pese a la lluvia»."),
        ]
      ),
    ],
    [
      fb("Reformula.", "Aunque trabaja mucho, gana poco. → ___ bien trabaja mucho, gana poco.", "Si", "«Si bien» es concesivo, algo formal, y va con indicativo: «si bien trabaja mucho»."),
      fb("Reformula.", "Aunque lo intento, no puedo. → Por ___ que lo intento, no puedo.", "más", "«Por más que» + indicativo para un esfuerzo real y comprobado: «por más que lo intento»."),
      fb("Reformula.", "Aunque estaba cansada, siguió. → Estaba cansada. ___ así, siguió.", "Aun", "«Aun así» significa «incluso así» y se escribe sin tilde (sustituible por «incluso»)."),
      fb("Reformula.", "Aunque es joven, es muy sensato. → A pesar de ___ joven, es muy sensato.", "ser", "«A pesar de» va seguido de infinitivo cuando comparte sujeto: «a pesar de ser joven»."),
      mt(
        "Relaciona cada conector con su registro o construcción.",
        [
          ["si bien", "formal, + indicativo"],
          ["pese a", "formal, + sustantivo o infinitivo"],
          ["aun así", "inicia una nueva oración"],
          ["por más que", "concesión intensiva"],
        ],
        "Conectores concesivos."
      ),
      toEs("In spite of having all the data, they made the wrong decision.", "Pese a tener todos los datos, tomaron la decisión equivocada.", "«Pese a» + infinitivo expresa concesión con el mismo sujeto: «pese a tener todos los datos».", ["A pesar de tener todos los datos, tomaron la decisión equivocada.", "Pese a contar con todos los datos, tomaron la decisión equivocada."]),
      wo("Si bien la propuesta es interesante, carece de financiación.", "Si bien + indicativo (registro formal).", "While the proposal is interesting, it lacks funding."),
    ]
  ),
  L(
    "concessive-aunque-4",
    "c1r-dialogue-concessive-debate",
    "Laboratorio de diálogo: conceder para ganar",
    "En un debate, la concesión es estratégica: reconoces un punto para refutarlo mejor.",
    "7 min",
    [
      sec(
        "Conceder y refutar",
        "Estructura clásica: concesión (Es cierto que… / Admito que… / Si bien…) + refutación (pero, ahora bien, sin embargo).",
        [
          ["—Es cierto que el teletrabajo ahorra tiempo; ahora bien, aísla a los empleados.", "It's true that remote work saves time; that said, it isolates employees."],
          ["—Admito que puede aislar, aunque eso dependa de cada empresa.", "I admit it can isolate people, although that may depend on each company."],
        ],
        [
          fb("Responde con una concesión.", "Si bien ___ cierto que hay riesgos, las ventajas son mayores. (ser)", "es", "«Si bien» concede un hecho real y va con indicativo: «si bien es cierto que…»."),
        ]
      ),
    ],
    [
      fb("Concede y refuta.", "Reconozco que ___ razón en parte; sin embargo, olvidas un dato clave. (tener, tú)", "tienes", "«Reconocer que» presenta algo como cierto y rige indicativo: «reconozco que tienes razón»."),
      fb("Concede y refuta.", "Aun admitiendo que ___ así, eso no justifica la medida. (ser)", "sea", "Aun admitiendo que + subjuntivo (hipótesis concedida)."),
      fb("Concede y refuta.", "Por más ___ se repita, no es verdad.", "que", "La locución concesiva es «por más que» (o «por mucho que»), siempre con «que»."),
      mc(
        "¿Qué respuesta concede y refuta a la vez?",
        ["No te niego que sea caro, pero a largo plazo se ahorra.", "Es caro y ya está.", "No, no es caro.", "Tienes razón, lo dejamos."],
        0,
        "«No te niego que sea caro» concede con subjuntivo y «pero a largo plazo se ahorra» refuta: hace las dos cosas. «Es caro y ya está» solo afirma, «No, no es caro» solo niega y «Tienes razón, lo dejamos» se rinde sin refutar."
      ),
      ms(
        "¿Qué fórmulas sirven para conceder?",
        ["Es verdad que…", "No te lo discuto, pero…", "Concedo que…", "Por lo tanto…"],
        [0, 1, 2],
        "«Es verdad que…», «No te lo discuto, pero…» y «Concedo que…» reconocen parte del argumento contrario. «Por lo tanto» no concede nada: introduce una consecuencia."
      ),
      toEs("Granted, it's not perfect; even so, it's the best option we have.", "De acuerdo, no es perfecto; aun así, es la mejor opción que tenemos.", "Se concede («de acuerdo, no es perfecto») y se contrargumenta con «aun así», sin tilde.", ["Es cierto que no es perfecto; aun así, es la mejor opción que tenemos.", "Vale, no es perfecto; aun así, es la mejor opción que tenemos."]),
      wo("No le quito la razón, pero tampoco se la doy del todo.", "Quitar/dar la razón = to disagree/agree.", "I'm not saying he's wrong, but I don't fully agree either."),
    ]
  ),
  L(
    "concessive-aunque-5",
    "c1r-mission-concessive-review",
    "Misión real: la reseña matizada",
    "Escribe una crítica equilibrada de un restaurante, un libro o una serie, concediendo lo bueno y señalando lo malo.",
    "7 min",
    [
      sec(
        "El equilibrio",
        "Una crítica madura concede méritos antes de señalar defectos: Si bien la ambientación es impecable, el guion flojea.",
        [
          ["Si bien la ambientación es impecable, el guion flojea en la segunda mitad.", "While the setting is impeccable, the script weakens in the second half."],
          ["Por muy brillante que sea la protagonista, no logra sostener la historia.", "However brilliant the lead actress is, she can't carry the story."],
        ],
        [
          fb("Completa la reseña.", "Por muy ___ que sean los platos, el servicio deja mucho que desear. (sabroso)", "sabrosos", "Por muy + adjetivo concordado + que."),
        ]
      ),
    ],
    [
      fb("Completa la reseña.", "Aunque la novela ___ algo larga, se lee de un tirón. (resultar)", "resulte", "Aunque + subjuntivo (se minimiza el defecto)."),
      fb("Completa la reseña.", "Pese ___ su duración, la serie engancha.", "a", "La locución es «pese a» + sustantivo, equivalente a «a pesar de»."),
      fb("Completa la reseña.", "El local es precioso; ___ así, los precios son excesivos.", "aun", "«Aun así» (= incluso así) introduce una objeción tras conceder; sin tilde."),
      mt(
        "Relaciona cada concesión con su refutación lógica.",
        [
          ["Si bien la carta es original,", "las raciones son escasas."],
          ["Aunque el primer capítulo sea lento,", "la trama mejora mucho."],
          ["Pese a su éxito comercial,", "la crítica la ha ignorado."],
          ["Por más que lo intente,", "el final no convence."],
        ],
        "Concesión + contraargumento."
      ),
      ms(
        "¿Qué frases son adecuadas para una reseña matizada?",
        ["No es una obra maestra, pero tiene momentos brillantes.", "Aun reconociendo su ambición, el resultado es desigual.", "Es horrible y punto.", "Si bien el reparto es sólido, la dirección es irregular."],
        [0, 1, 3],
        "Una reseña matizada concede y objeta: «No es… pero tiene…», «Aun reconociendo…» y «Si bien… la dirección es irregular». «Es horrible y punto» es un juicio categórico sin ningún matiz."
      ),
      toEs("Although it isn't a masterpiece, it's worth seeing.", "Aunque no sea una obra maestra, merece la pena verla.", "«Aunque» + subjuntivo resta importancia al hecho; con indicativo («no es») también vale, como información asumida.", ["Aunque no es una obra maestra, merece la pena verla.", "Aunque no sea una obra maestra, vale la pena verla."]),
      wo("Con todo y con eso, es una de las mejores series del año.", "Con todo y con eso = even so, all things considered.", "All things considered, it's one of the best series of the year."),
    ]
  ),
  L(
    "concessive-aunque-5",
    "c1r-spiral-concessive-conditional",
    "Repaso en espiral: concesión y condición",
    "Aunque, si, como, a menos que, por mucho que — la frontera entre conceder y condicionar.",
    "8 min",
    [
      sec(
        "Dos familias vecinas",
        "La condición plantea un requisito (si, a menos que, con tal de que); la concesión, un obstáculo que no impide el resultado (aunque, por mucho que, aun si).",
        [
          ["Iré si me invitan. / Iré aunque no me inviten.", "I'll go if they invite me. / I'll go even if they don't invite me."],
          ["Como no llegues a tiempo, nos vamos sin ti.", "If you don't get here on time, we're leaving without you. (como + subjuntivo = condicional, amenaza)"],
        ],
        [
          mc(
            "«Como no me ___, me enfado.» (condición-amenaza)",
            ["llames", "llamas", "llamarás", "llamaras"],
            0,
            "«Como» + subjuntivo al inicio tiene valor condicional, a menudo de amenaza: «Como no me llames, me enfado». Con indicativo («llamas») «como» sería causal, «llamarás» no cabe tras «como» y «llamaras» no concuerda con el presente «me enfado»."
          ),
        ]
      ),
    ],
    [
      { ...fb("¿Condición o concesión?", "Lo haré ___ no me paguen, porque me apetece.", "aunque", "Aunque = even if: concesión (lo haré de todos modos)."), en: "I'll do it [even if] they don't pay me, because I feel like it." },
      fb("¿Condición o concesión?", "Lo haré ___ me paguen; si no, no. (only if)", "si", "Es una condición, no una concesión: solo lo haré con la condición de que me paguen; si no, no."),
      fb("Completa.", "Aun si ___ razón, no deberías hablarle así. (tener, tú)", "tuvieras", "Aun si + imperfecto de subjuntivo."),
      fb("Completa.", "No iremos a menos que ___ buen tiempo. (hacer)", "haga", "«A menos que» expresa una condición negativa y exige siempre subjuntivo: «haga»."),
      ms(
        "¿Qué conectores son concesivos (no condicionales)?",
        ["con tal de que", "por mucho que", "en caso de que", "aun cuando"],
        [1, 3],
        "Con tal de que y en caso de que plantean condiciones; por mucho que y aun cuando, concesiones."
      ),
      toEs("Even if they had asked me, I would have said no.", "Aunque me lo hubieran pedido, habría dicho que no.", "Concesiva irreal sobre el pasado: «aunque» + pluscuamperfecto de subjuntivo y condicional compuesto.", ["Aun si me lo hubieran pedido, habría dicho que no.", "Aunque me lo hubiesen pedido, habría dicho que no."]),
      wo("Como vuelvas a llegar tarde, hablaré con el director.", "Como + subjuntivo (condición-advertencia).", "If you're late again, I'll speak to the principal."),
    ]
  ),
  L(
    "nominalization-part-1-mastery-check",
    "c1r-transform-verb-to-noun",
    "Transformaciones: del verbo al sustantivo",
    "Convierte oraciones verbales en sintagmas nominales: «el gobierno decidió» → «la decisión del gobierno».",
    "7 min",
    [
      sec(
        "Condensar la información",
        "La nominalización transforma un verbo en sustantivo y su sujeto en un complemento con de: El precio subió → la subida del precio.",
        [
          ["Los precios subieron. → la subida de los precios", "prices rose → the rise in prices"],
          ["El tren llegó tarde. → la llegada tardía del tren", "the train arrived late → the late arrival of the train"],
        ],
        [
          fb("Nominaliza.", "La empresa despidió a cien trabajadores. → el ___ de cien trabajadores", "despido", "El sustantivo de «despedir» es «el despido» (acción de despedir a alguien)."),
        ]
      ),
      sec(
        "Sufijos productivos",
        "-ción/-sión (construir → construcción), -miento (crecer → crecimiento), -dad (posible → posibilidad), -eza (bello → belleza), -ura (fresco → frescura).",
        [
          ["crecer → el crecimiento · reducir → la reducción · debilitar → el debilitamiento", "grow → growth · reduce → reduction · weaken → weakening"],
        ],
        [
          mt(
            "Relaciona cada verbo con su sustantivo.",
            [
              ["mejorar", "la mejora"],
              ["aumentar", "el aumento"],
              ["desarrollar", "el desarrollo"],
              ["resolver", "la resolución"],
            ],
            "No todos los sustantivos usan sufijo: mejora y aumento son derivados regresivos."
          ),
        ]
      ),
    ],
    [
      fb("Nominaliza.", "Aprobaron la ley. → la ___ de la ley", "aprobación", "Los verbos en -ar suelen nominalizarse con -ción: aprobar → la aprobación."),
      fb("Nominaliza.", "Los ríos se contaminan. → la ___ de los ríos", "contaminación", "Contaminar → la contaminación: sufijo -ción, sustantivo femenino."),
      fb("Nominaliza.", "El paro disminuyó. → la ___ del paro", "disminución", "Disminuir → la disminución: los verbos en -uir forman el sustantivo en -ución."),
      fb("Nominaliza.", "Los vecinos se quejan. → las ___ de los vecinos", "quejas", "El sustantivo de «quejarse» es «la queja»; aquí en plural, «las quejas»."),
      mc(
        "«Since the factory closed, unemployment has grown.» → versión nominal:",
        ["Desde el cierre de la fábrica, ha crecido el desempleo.", "Desde que cerrar la fábrica, ha crecido el desempleo.", "Desde la cerrada de la fábrica, crece el desempleo.", "Desde cerramiento de fábrica, desempleo creció."],
        0,
        "El sustantivo de «cerrar» es «el cierre»: «Desde el cierre de la fábrica». «Desde que cerrar» mezcla la conjunción con un infinitivo, «la cerrada» no es la nominalización de este verbo y «cerramiento» (que significa cerco o muro) va además sin artículos."
      ),
      toEn("La reducción de las emisiones exige la colaboración de todos los países.", "Reducing emissions requires the collaboration of all countries.", "El sustantivo español a menudo se traduce con un gerundio en inglés.", ["The reduction of emissions requires the collaboration of all countries.", "Reducing emissions requires cooperation from all countries."]),
      wo("La llegada masiva de turistas ha provocado el encarecimiento de la vivienda.", "Dos nominalizaciones: llegada y encarecimiento.", "The mass arrival of tourists has caused housing prices to rise."),
    ]
  ),
  L(
    "nominalization-part-1-mastery-check",
    "c1r-contrast-el-hecho-de-que",
    "Contraste: el hecho de que / lo + adjetivo / el + infinitivo",
    "Tres formas de convertir una idea en sustantivo — cada una con su gramática y su matiz.",
    "7 min",
    [
      sec(
        "Tres herramientas",
        "El hecho de que + (normalmente) subjuntivo nominaliza una proposición. Lo + adjetivo sustantiva una cualidad abstracta. El + infinitivo nominaliza una acción.",
        [
          ["El hecho de que no haya llamado me preocupa.", "The fact that he hasn't called worries me."],
          ["Lo difícil es empezar.", "The hard part is starting."],
          ["El continuo quejarse de algunos cansa a todos.", "Some people's constant complaining tires everyone."],
        ],
        [
          fb("Completa.", "El hecho de que ___ tan tarde demuestra su falta de interés. (llegar, él)", "llegue", "El hecho de que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ bueno de esta ciudad es su gente.", "Lo", "«Lo» + adjetivo convierte la cualidad en concepto abstracto: «lo bueno»."),
      fb("Completa.", "El ___ temprano tiene sus ventajas. (madrugar)", "madrugar", "«El» + infinitivo funciona como sustantivo: «el madrugar»."),
      fb("Completa.", "Lo ___ del asunto es que nadie se dio cuenta. (curioso)", "curioso", "Tras «lo», el adjetivo va siempre en masculino singular: «lo curioso»."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Lo mejor del viaje", "The best part of the trip"],
          ["Lo mío", "My thing / what's mine"],
          ["El hecho de que mienta", "The fact that he lies"],
          ["El ir y venir de la gente", "The coming and going of people"],
        ],
        "Tres tipos de nominalización."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Lo peor fue la espera.", "El hecho de que sea caro no significa que sea bueno.", "El vivir en el campo tiene su encanto.", "La difícil es empezar."],
        [0, 1, 2],
        "Para una cualidad abstracta se usa «lo» + adjetivo, así que «La difícil es empezar» es incorrecta: debe ser «lo difícil». Las demás son correctas: «lo peor», «el hecho de que» + subjuntivo y «el vivir» (infinitivo sustantivado)."
      ),
      toEs("The strangest thing is that nobody saw anything.", "Lo más extraño es que nadie vio nada.", "«Lo más» + adjetivo expresa el aspecto superlativo: «lo más extraño es que…».", ["Lo más raro es que nadie vio nada.", "Lo más extraño es que nadie viera nada."]),
      wo("El hecho de que sea gratis no garantiza que sea útil.", "El hecho de que + subjuntivo + garantizar que + subjuntivo.", "The fact that it's free doesn't guarantee that it's useful."),
    ]
  ),
  L(
    "nominalization-part-2-2",
    "c1r-workshop-formal-register",
    "Taller de estilo: nominalizar para el registro formal",
    "Reescribe un párrafo coloquial en estilo formal, condensando con nominalizaciones.",
    "8 min",
    [
      sec(
        "De lo oral a lo escrito",
        "El registro formal prefiere sustantivos a verbos: «Como subieron los precios, la gente compra menos» → «La subida de los precios ha provocado un descenso del consumo».",
        [
          ["Coloquial: Como la gente usa más el coche, hay más contaminación.", "Colloquial: Since people use the car more, there's more pollution."],
          ["Formal: El aumento del uso del coche ha incrementado la contaminación.", "Formal: The increase in car use has raised pollution."],
        ],
        [
          fb("Formaliza.", "Porque se retrasaron las obras, … → Debido al ___ de las obras, …", "retraso", "El sustantivo de «retrasar(se)» es «el retraso»: «debido al retraso»."),
        ]
      ),
    ],
    [
      fb("Formaliza.", "Si mejoran las condiciones… → Con la ___ de las condiciones…", "mejora", "El sustantivo de «mejorar» es «la mejora» (en América también «el mejoramiento»)."),
      fb("Formaliza.", "Cuando llegaron los inversores… → Tras la ___ de los inversores…", "llegada", "El sustantivo de «llegar» es «la llegada», formado con el participio femenino."),
      fb("Formaliza.", "Como no hay suficientes médicos… → Ante la ___ de médicos…", "escasez", "Escasear / escaso → la escasez."),
      fb("Formaliza.", "Para que la empresa crezca… → Para el ___ de la empresa…", "crecimiento", "Crecer → el crecimiento: muchos verbos en -er forman el sustantivo en -miento."),
      mc(
        "¿Qué versión es más formal?",
        ["La implantación de la medida requiere una evaluación previa.", "Para poner la medida, hay que evaluarla antes.", "Antes de poner la medida, la evaluamos, ¿vale?", "Ponemos la medida y luego vemos."],
        0,
        "Las nominalizaciones («implantación», «evaluación») y la construcción impersonal son propias del registro formal. «Para poner la medida, hay que evaluarla» es neutro y coloquial («poner» por «implantar»), «¿vale?» es oral y «Ponemos la medida y luego vemos» es muy informal."
      ),
      toEs("The closure of the airport caused the cancellation of two hundred flights.", "El cierre del aeropuerto provocó la cancelación de doscientos vuelos.", "Doble nominalización: cerrar → el cierre; cancelar → la cancelación.", ["El cierre del aeropuerto causó la cancelación de doscientos vuelos.", "El cierre del aeropuerto ocasionó la cancelación de doscientos vuelos."]),
      wo("La falta de inversión ha dificultado la modernización del sector.", "Nominalizaciones: falta, inversión, modernización.", "The lack of investment has hindered the sector's modernization."),
    ]
  ),
  L(
    "nominalization-part-2-2",
    "c1r-error-hunt-derivation",
    "Caza de errores: la derivación nominal",
    "Sufijos inventados, géneros equivocados y calcos del inglés — corrige los sustantivos mal formados.",
    "7 min",
    [
      sec(
        "Sufijos que no existen",
        "Cada verbo tiene su sustantivo establecido; no se puede elegir el sufijo al azar. ✗ el cerramiento (de un negocio) → ✓ el cierre; ✗ la comprensividad → ✓ la comprensión.",
        [
          ["✗ la aumentación → ✓ el aumento", "the increase"],
          ["✗ el decidimiento → ✓ la decisión", "the decision"],
        ],
        [
          fb("Corrige.", "La ___ del informe se retrasó. (entregar; el alumno escribió: entregación)", "entrega", "El sustantivo de «entregar» es «la entrega»; «entregación» no existe."),
        ]
      ),
      sec(
        "Calcos del inglés",
        "Algunos sustantivos parecen españoles pero son calcos: ✗ la implementación está bien, pero ✗ la aplicación de un trabajo (application) → ✓ la solicitud.",
        [
          ["✗ Envié mi aplicación. → ✓ Envié mi solicitud.", "I sent my application."],
        ],
        [
          mc(
            "«The realization that…» (darse cuenta) →",
            ["La toma de conciencia de que…", "La realización de que…", "La realizamiento de que…", "El darse de cuenta de que…"],
            0,
            "«Darse cuenta» se nominaliza como «la toma de conciencia». «La realización» es un falso amigo: significa llevar a cabo algo (realizar un proyecto), no darse cuenta; «realizamiento» no existe y «el darse de cuenta» añade una preposición indebida."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "El ___ de la población ha sido muy rápido. (envejecer; el alumno escribió: envejeción)", "envejecimiento", "El sustantivo de «envejecer» es «el envejecimiento» (-miento), no «envejeción»."),
      fb("Corrige.", "Hubo una ___ de precios. (bajar; el alumno escribió: bajamiento)", "bajada", "El sustantivo de «bajar» es «la bajada» (o «la baja»); «bajamiento» no existe."),
      fb("Corrige.", "Admiro su ___. (sincero; el alumno escribió: sincereza)", "sinceridad", "Sincero → la sinceridad, con -idad; «sincereza» no existe."),
      ms(
        "¿Qué sustantivos están bien formados?",
        ["la pobreza", "el sufrimiento", "la llegada", "la amabilez"],
        [0, 1, 2],
        "«La amabilez» no existe: los adjetivos en -ble forman el sustantivo en -bilidad, «la amabilidad». «La pobreza», «el sufrimiento» y «la llegada» están bien formados."
      ),
      mt(
        "Relaciona cada adjetivo con su sustantivo.",
        [
          ["triste", "la tristeza"],
          ["ancho", "la anchura"],
          ["feliz", "la felicidad"],
          ["valiente", "la valentía"],
        ],
        "Sufijos -eza, -ura, -dad, -ía."
      ),
      toEs("The resignation of the minister surprised everyone.", "La dimisión del ministro sorprendió a todos.", "El sustantivo de «dimitir» es «la dimisión»; en América es más frecuente «la renuncia».", ["La renuncia del ministro sorprendió a todos.", "La dimisión de la ministra sorprendió a todos."]),
      wo("La sensación de soledad es cada vez más frecuente entre los jóvenes.", "Sustantivos abstractos: sensación, soledad.", "The feeling of loneliness is increasingly common among young people."),
    ]
  ),
  L(
    "nominalization-part-2-3",
    "c1r-text-detective-headlines",
    "Detective de textos: los titulares nominales",
    "Los titulares condensan noticias en sintagmas nominales. Descífralos y reconstruye la oración completa.",
    "7 min",
    [
      sec(
        "Titulares sin verbo",
        "La prensa usa titulares nominales: «Subida del IVA a partir de enero» = El IVA subirá a partir de enero.",
        [
          ["Detención de un ex alcalde por corrupción", "Ex-mayor arrested for corruption"],
          ["Aprobación definitiva de la reforma laboral", "Labor reform definitively approved"],
          ["Caída de las ventas en el sector textil", "Sales drop in the textile sector"],
        ],
        [
          fb("Reconstruye la oración.", "«Cierre temporal del museo por obras» → El museo ___ temporalmente por obras.", "cierra", "Para deshacer el titular nominal, «el cierre» vuelve a ser el verbo «cerrar»: «el museo cierra»."),
        ]
      ),
    ],
    [
      fb("Reconstruye la oración.", "«Aumento del número de turistas» → El número de turistas ___. (perfecto)", "ha aumentado", "«Aumento» vuelve a su verbo, «aumentar», en pretérito perfecto: «ha aumentado»."),
      fb("Reconstruye la oración.", "«Dimisión de la directora del hospital» → La directora del hospital ___. (pretérito)", "dimitió", "«Dimisión» vuelve al verbo «dimitir» en pretérito: «dimitió»."),
      fb("Crea un titular nominal.", "Rescataron a tres montañeros. → «___ de tres montañeros»", "Rescate", "El sustantivo de «rescatar» es «el rescate», típico de los titulares nominales."),
      fb("Crea un titular nominal.", "Suspendieron el concierto por lluvia. → «___ del concierto por lluvia»", "Suspensión", "El sustantivo de «suspender» es «la suspensión» (-sión)."),
      mt(
        "Relaciona cada titular con su versión verbal.",
        [
          ["Llegada de la ola de calor", "Llega la ola de calor."],
          ["Hallazgo de un yacimiento romano", "Se ha encontrado un yacimiento romano."],
          ["Victoria del equipo local", "Ganó el equipo local."],
          ["Retraso en las obras del metro", "Las obras del metro se retrasan."],
        ],
        "Titular nominal ↔ oración verbal."
      ),
      mc(
        "«Elections called for March» → titular nominal:",
        ["Convocatoria de elecciones para marzo", "Convocar elecciones en marzo", "Elecciones convocan marzo", "Convocamiento de elecciones marzo"],
        0,
        "Un titular nominal usa el sustantivo del verbo: convocar → «la convocatoria». «Convocar elecciones en marzo» es verbal, «Elecciones convocan marzo» es agramatical y «convocamiento» no existe."
      ),
      wo("Fuerte subida del precio de la luz durante el invierno", "Titular nominal.", "Sharp rise in electricity prices during the winter"),
    ]
  ),
  L(
    "nominalization-part-2-3",
    "c1r-spiral-nominalization-subjunctive",
    "Repaso en espiral: nominalización y subjuntivo",
    "El hecho de que, lo + adjetivo, sustantivos abstractos — con los matices del subjuntivo y la concesión.",
    "7 min",
    [
      sec(
        "Mezclando herramientas",
        "Muchos sustantivos abstractos rigen subjuntivo en su complemento: la posibilidad de que, la necesidad de que, el miedo a que.",
        [
          ["Existe la posibilidad de que se cancele el vuelo.", "There's a possibility that the flight will be canceled."],
          ["La necesidad de que todos colaboren es evidente.", "The need for everyone to collaborate is evident."],
        ],
        [
          fb("Completa.", "Tengo miedo a que ___ tarde. (llegar, nosotros)", "lleguemos", "«Miedo a que» expresa temor y exige subjuntivo: «lleguemos»."),
          fb("Completa.", "La probabilidad de que ___ es baja. (llover)", "llueva", "«La probabilidad de que» presenta algo incierto y exige subjuntivo: «llueva»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Lo ___ de la situación es que nadie se atreve a hablar. (grave)", "grave", "«Lo» + adjetivo en masculino singular nombra la cualidad: «lo grave»."),
      fb("Completa.", "La idea de que la tierra ___ plana es absurda. (ser)", "sea", "La idea de que + subjuntivo (proposición que se rechaza)."),
      fb("Completa.", "El anuncio de que la fábrica ___ generó protestas. (cerrar, condicional)", "cerraría", "Anuncio de que + indicativo (información)."),
      mc(
        "¿Qué sustantivo suele ir con indicativo en su complemento?",
        ["la noticia de que", "el temor a que", "la esperanza de que", "la exigencia de que"],
        0,
        "«La noticia de que» presenta un hecho informado, por eso suele llevar indicativo («la noticia de que ha dimitido»). «El temor a que», «la esperanza de que» y «la exigencia de que» expresan emoción, deseo u orden y rigen subjuntivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Tengo la sensación de que nos están mintiendo.", "Existe el riesgo de que el proyecto fracase.", "La esperanza de que vuelve nos mantiene.", "Lo sorprendente fue su reacción."],
        [0, 1, 3],
        "«La esperanza de que» expresa deseo y exige subjuntivo, así que «La esperanza de que vuelve» es incorrecta: debe ser «vuelva». Las demás son correctas: «la sensación de que» presenta algo percibido (indicativo), «el riesgo de que» pide subjuntivo y «lo sorprendente» es lo + adjetivo."
      ),
      toEs("The possibility that they might lie didn't occur to me.", "No se me ocurrió la posibilidad de que mintieran.", "Posibilidad de que + imperfecto de subjuntivo.", ["No se me pasó por la cabeza la posibilidad de que mintieran.", "No se me ocurrió la posibilidad de que estuvieran mintiendo."]),
      wo("Lo preocupante no es el error, sino la falta de reacción.", "Lo + adjetivo + no… sino + nominalización.", "What's worrying isn't the mistake but the lack of response."),
    ]
  ),
  L(
    "gerund-infinitive-advanced-part-1-mastery-check",
    "c1r-error-hunt-gerund-posteriority",
    "Caza de errores: el gerundio de posterioridad",
    "«Chocó, muriendo al instante» — el gerundio incorrecto más frecuente en textos formales, y cómo evitarlo.",
    "7 min",
    [
      sec(
        "Simultaneidad sí, posterioridad no",
        "El gerundio expresa acciones simultáneas o inmediatamente anteriores, no posteriores ni consecuencias: ✗ Estudió en Madrid, trasladándose después a Roma → ✓ Estudió en Madrid y después se trasladó a Roma.",
        [
          ["✓ Salió corriendo.", "He ran out. (simultaneous)"],
          ["✗ Se cayó, rompiéndose la pierna. → ✓ Se cayó y se rompió la pierna.", "He fell and broke his leg."],
        ],
        [
          mc(
            "Corrige: «El presidente habló durante una hora, siendo aplaudido al final.»",
            ["El presidente habló durante una hora y fue aplaudido al final.", "El presidente habló durante una hora, aplaudiéndose al final.", "Hablando el presidente una hora, aplaudido al final.", "No hay error."],
            0,
            "El aplauso es posterior al discurso, así que se coordina con «y» y verbo conjugado: «y fue aplaudido». «Aplaudiéndose» sigue siendo un gerundio de posterioridad (y cambia el sentido), «Hablando el presidente…» deja la frase sin verbo principal y la original sí tiene error."
          ),
        ]
      ),
      sec(
        "El gerundio especificativo",
        "Tampoco es correcto el gerundio como adjetivo de un sustantivo: ✗ una caja conteniendo libros → ✓ una caja que contenía libros.",
        [
          ["✗ Se busca secretaria hablando inglés. → ✓ Se busca secretaria que hable inglés.", "Secretary who speaks English wanted."],
        ],
        [
          fb("Corrige.", "Recibí una carta ___ la fecha de la entrevista. (el alumno escribió: indicando)", "que indicaba", "El gerundio no puede especificar un sustantivo («una carta indicando»); se usa una relativa: «que indicaba»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El coche chocó contra un árbol y el conductor ___ herido. (el alumno escribió: resultando)", "resultó", "Una consecuencia posterior se expresa con verbo conjugado, no con gerundio: «y el conductor resultó herido»."),
      fb("Corrige.", "Se aprobó una ley ___ el uso de plásticos. (el alumno escribió: prohibiendo)", "que prohíbe", "Para especificar el sustantivo se usa una relativa, no un gerundio: «una ley que prohíbe»."),
      mt(
        "Relaciona cada gerundio con su valor.",
        [
          ["Llegó sonriendo.", "modo (correcto)"],
          ["Estudiando, aprobarás.", "condición (correcto)"],
          ["Viendo que llovía, se quedó.", "causa (correcto)"],
          ["Se casó en 2010, divorciándose en 2012.", "posterioridad (incorrecto)"],
        ],
        "Valores del gerundio."
      ),
      ms(
        "¿Qué frases tienen un gerundio incorrecto?",
        ["Entró en la sala saludando a todos.", "Nació en Lima, mudándose a Quito a los diez años.", "Hay un hombre esperando fuera.", "Un paquete conteniendo documentos llegó ayer."],
        [1, 3],
        "«Mudándose» expresa una acción posterior a nacer y «conteniendo» especifica un sustantivo: ambos usos son incorrectos. «Entró saludando» (simultaneidad) y «un hombre esperando fuera» (tras «hay», admitido) son correctos."
      ),
      toEs("She graduated in 2015 and then moved to Chile.", "Se graduó en 2015 y después se mudó a Chile.", "Coordinación en lugar de gerundio de posterioridad.", ["Se licenció en 2015 y luego se trasladó a Chile.", "Se graduó en 2015 y luego se mudó a Chile."]),
      wo("Salió de casa dando un portazo.", "Gerundio de simultaneidad (modo).", "He left the house slamming the door."),
    ]
  ),
  L(
    "gerund-infinitive-advanced-part-1-mastery-check",
    "c1r-contrast-seguir-dejar",
    "Contraste: sigue fumando / ha dejado de fumar",
    "Perífrasis de continuidad, interrupción y fin: seguir + gerundio, dejar de, terminar de, acabar de, volver a.",
    "7 min",
    [
      sec(
        "Las fases de una acción",
        "Empezar a + inf. (inicio), seguir/continuar + gerundio (continuidad), dejar de + inf. (interrupción), terminar de + inf. (fin), volver a + inf. (repetición), acabar de + inf. (pasado reciente).",
        [
          ["Sigue viviendo con sus padres.", "He's still living with his parents."],
          ["Dejó de fumar hace un año.", "She quit smoking a year ago."],
          ["Acabo de llegar.", "I've just arrived."],
        ],
        [
          fb("Completa.", "A pesar de la lluvia, los niños ___ jugando. (seguir)", "siguieron", "«Seguir» + gerundio indica que la acción continúa: «siguieron jugando»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Por fin ha ___ de llover.", "dejado", "«Dejar de» + infinitivo marca el final de una acción: «ha dejado de llover»."),
      fb("Completa.", "No me interrumpas; todavía no he terminado ___ hablar.", "de", "«Terminar de» + infinitivo: se termina lo que estaba en curso («terminado de hablar»)."),
      fb("Completa.", "Después de años sin verse, ___ a encontrarse en una boda. (volver, pretérito)", "volvieron", "«Volver a» + infinitivo expresa repetición: «volvieron a encontrarse»."),
      fb("Completa.", "Continúa ___ en la misma empresa. (trabajar)", "trabajando", "«Continuar» + gerundio, como «seguir», indica que la acción sigue: «trabajando»."),
      mt(
        "Relaciona cada perífrasis con su significado.",
        [
          ["acabar de salir", "to have just left"],
          ["seguir esperando", "to keep waiting"],
          ["dejar de insistir", "to stop insisting"],
          ["volver a intentarlo", "to try again"],
        ],
        "Perífrasis aspectuales."
      ),
      mc(
        "«She still hasn't finished reading the book.»",
        ["Todavía no ha terminado de leer el libro.", "Todavía sigue sin leyendo el libro.", "Todavía no ha dejado leer el libro.", "Todavía no acaba leer el libro."],
        0,
        "«Terminar de» + infinitivo expresa que una acción en curso no ha concluido: «no ha terminado de leer». «Sigue sin leyendo» es agramatical (sería «sin leer»), «no ha dejado leer» significa no permitir y «no acaba leer» omite el «de»."
      ),
      toEs("He keeps saying the same thing.", "Sigue diciendo lo mismo.", "«Seguir» + gerundio traduce «keep + -ing»: «sigue diciendo».", ["Sigue repitiendo lo mismo.", "Continúa diciendo lo mismo."]),
      wo("Nunca dejaré de agradecerte lo que hiciste por mí.", "Dejar de + infinitivo en negativo = never stop.", "I'll never stop thanking you for what you did for me."),
    ]
  ),
  L(
    "gerund-infinitive-advanced-part-2-2",
    "c1r-contrast-progressive-periphrases",
    "Contraste: está haciendo / va haciendo / viene haciendo / lleva haciendo",
    "Cuatro perífrasis progresivas con matices distintos: en curso, gradual, desde el pasado, duración.",
    "7 min",
    [
      sec(
        "Cuatro verbos auxiliares",
        "Estar + gerundio: acción en curso. Ir + gerundio: progreso gradual hacia delante. Venir + gerundio: acción que se repite desde el pasado hasta ahora. Llevar + tiempo + gerundio: duración acumulada.",
        [
          ["Está lloviendo.", "It's raining."],
          ["Poco a poco vamos entendiendo el problema.", "Little by little we're coming to understand the problem."],
          ["Vengo diciéndotelo desde hace meses.", "I've been telling you for months."],
          ["Llevo tres años estudiando chino.", "I've been studying Chinese for three years."],
        ],
        [
          fb("Completa.", "___ dos horas esperando al técnico. (llevar, nosotros)", "Llevamos", "«Llevar» + cantidad de tiempo + gerundio expresa la duración hasta ahora: «llevamos dos horas esperando»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Con la práctica, ___ mejorando. (ir, tú)", "vas", "«Ir» + gerundio expresa un progreso gradual: «vas mejorando»."),
      fb("Completa.", "La empresa ___ perdiendo dinero desde 2020. (venir, presente)", "viene", "Venir + gerundio (en presente): tendencia desde el pasado."),
      fb("Completa.", "¿Cuánto tiempo ___ trabajando aquí? (llevar, tú)", "llevas", "«Llevar» + gerundio pregunta por la duración de la acción: «¿cuánto tiempo llevas trabajando?»."),
      mt(
        "Relaciona cada frase con su matiz.",
        [
          ["Estoy leyendo.", "en este momento"],
          ["Voy leyendo poco a poco.", "progreso gradual"],
          ["Vengo leyendo sobre el tema.", "desde hace un tiempo, repetidamente"],
          ["Llevo un mes leyendo.", "duración acumulada"],
        ],
        "Matices de las perífrasis progresivas."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Llevo años queriendo decírtelo.", "Los precios vienen subiendo desde enero.", "Ya vamos acostumbrándonos al clima.", "Llevo estudiando."],
        [0, 1, 2],
        "«Llevar» + gerundio necesita un complemento de tiempo, así que «Llevo estudiando» está incompleta: «llevo un año estudiando». Las demás son correctas: «llevo años queriendo», «vienen subiendo» (persistencia) y «vamos acostumbrándonos» (progreso gradual)."
      ),
      toEs("I've been living here for ten years.", "Llevo diez años viviendo aquí.", "«Llevar» + tiempo + gerundio traduce «have been -ing for»: «llevo diez años viviendo aquí».", ["Llevo viviendo aquí diez años.", "Hace diez años que vivo aquí."]),
      wo("Las cosas se van poniendo cada vez más difíciles.", "Ir + gerundio (progreso) con reflexivo.", "Things are getting more and more difficult."),
    ]
  ),
  L(
    "gerund-infinitive-advanced-part-2-2",
    "c1r-transform-infinitive-subject",
    "Transformaciones: el infinitivo como sujeto y como mandato",
    "Reescribe oraciones usando el infinitivo como sujeto (Fumar mata) y como instrucción impersonal (No fumar).",
    "7 min",
    [
      sec(
        "Infinitivo sujeto",
        "El infinitivo funciona como sustantivo y puede ser sujeto: Viajar abre la mente. Con artículo adquiere un tono más literario: El viajar abre la mente.",
        [
          ["Es sano hacer deporte. → Hacer deporte es sano.", "Doing sport is healthy."],
          ["Me encanta cocinar.", "I love cooking. (cocinar = sujeto de encantar)"],
        ],
        [
          fb("Transforma.", "Cuando lees, aprendes. → ___ te enseña mucho.", "Leer", "El infinitivo funciona como sujeto con valor de sustantivo: «Leer te enseña mucho»."),
        ]
      ),
      sec(
        "Infinitivo de instrucción",
        "En carteles e instrucciones impersonales se usa el infinitivo: No fumar. Agitar antes de usar. Consumir preferentemente antes de…",
        [
          ["No tocar.", "Do not touch."],
          ["Mantener fuera del alcance de los niños.", "Keep out of the reach of children."],
        ],
        [
          fb("Crea la instrucción.", "Prohibido el estacionamiento. → No ___. (verbo: aparcar)", "aparcar", "Las instrucciones y prohibiciones impersonales usan «no» + infinitivo: «No aparcar»."),
        ]
      ),
    ],
    [
      fb("Crea la instrucción.", "Hay que lavarlo a mano. → ___ a mano.", "Lavar", "En instrucciones impersonales (etiquetas, manuales) se usa el infinitivo: «Lavar a mano»."),
      fb("Transforma.", "Es difícil que aprendas si no practicas. → Aprender sin ___ es difícil.", "practicar", "Tras una preposición («sin») el verbo va siempre en infinitivo: «sin practicar»."),
      fb("Transforma (mismo sujeto).", "Me molesta que yo tenga que hacer cola. → Me molesta ___ que hacer cola. (infinitivo de tener)", "tener", "Mismo sujeto → infinitivo: me molesta tener que hacer cola."),
      mt(
        "Relaciona cada cartel con su lugar.",
        [
          ["No pisar el césped.", "un parque"],
          ["Agitar antes de usar.", "un medicamento"],
          ["No asomarse a la ventanilla.", "un tren"],
          ["Mantener la puerta cerrada.", "un edificio"],
        ],
        "Infinitivo de instrucción."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Equivocarse es humano.", "El saber no ocupa lugar.", "Me gusta que nadar.", "Conducir de noche me cansa."],
        [0, 1, 3],
        "Con el mismo sujeto, «gustar» va con infinitivo sin «que»: «me gusta nadar», así que «Me gusta que nadar» es incorrecta. «Equivocarse es humano», «El saber no ocupa lugar» y «Conducir de noche me cansa» usan correctamente el infinitivo como sujeto."
      ),
      toEs("Lying never solves anything.", "Mentir nunca soluciona nada.", "El infinitivo funciona como sujeto, equivalente al gerundio inglés: «Mentir nunca soluciona nada».", ["Mentir no soluciona nunca nada.", "Mentir nunca resuelve nada."]),
      wo("Tomar una decisión así requiere mucho valor.", "Infinitivo sujeto con complemento.", "Making a decision like that takes a lot of courage."),
    ]
  ),
  L(
    "gerund-infinitive-advanced-part-2-mastery-check",
    "c1r-mission-instructions-manual",
    "Misión real: el manual de instrucciones",
    "Redacta las instrucciones de un aparato con infinitivos, gerundios correctos y perífrasis.",
    "7 min",
    [
      sec(
        "Instrucciones claras",
        "Los manuales combinan infinitivos de instrucción (Pulsar el botón), gerundios de modo (manteniéndolo pulsado) y perífrasis (hasta que deje de parpadear).",
        [
          ["Pulsar el botón de encendido manteniéndolo presionado tres segundos.", "Press the power button, holding it down for three seconds."],
          ["Esperar hasta que la luz deje de parpadear.", "Wait until the light stops blinking."],
        ],
        [
          fb("Completa el manual.", "___ el cable a la toma de corriente. (conectar)", "Conectar", "Los manuales usan el infinitivo para instrucciones impersonales: «Conectar el cable»."),
        ]
      ),
    ],
    [
      fb("Completa el manual.", "Girar la rueda ___ el volumen deseado. (hasta + alcanzar)", "hasta alcanzar", "Mismo sujeto → hasta + infinitivo."),
      fb("Completa el manual.", "Limpiar el filtro ___ un paño húmedo. (usar, gerundio)", "usando", "El gerundio de modo indica cómo se hace la acción principal: «usando un paño»."),
      fb("Completa el manual.", "Si el aparato ___ de funcionar, consultar al servicio técnico. (dejar)", "deja", "Si + presente; dejar de + infinitivo."),
      mc(
        "¿Qué instrucción está bien redactada?",
        ["Retirar el embalaje con cuidado, evitando dañar la pantalla.", "Retirar el embalaje, dañándose la pantalla después.", "Retirando el embalaje con cuidado.", "Retiramiento del embalaje con cuidado."],
        0,
        "El gerundio es correcto si expresa el modo simultáneo: «Retirar…, evitando dañar la pantalla». «Dañándose la pantalla después» es un gerundio de posterioridad, «Retirando…» solo no es una instrucción completa y «retiramiento» no existe (sería «la retirada»)."
      ),
      ms(
        "¿Qué instrucciones son correctas?",
        ["No sumergir en agua.", "Cargar la batería antes del primer uso.", "Volver a pulsar para apagar.", "Enchufando el aparato antes de limpiarlo."],
        [0, 1, 2],
        "En las instrucciones se usa el infinitivo (desenchufar el aparato antes de limpiarlo), no el gerundio; «enchufando el aparato…» no funciona como instrucción."
      ),
      toEs("Keep pressing until you hear a beep.", "Seguir pulsando hasta oír un pitido.", "Infinitivo de instrucción + seguir + gerundio + hasta + infinitivo.", ["Mantener pulsado hasta oír un pitido.", "Siga pulsando hasta que oiga un pitido."]),
      wo("Desconectar el aparato antes de limpiarlo.", "Infinitivo + antes de + infinitivo con pronombre.", "Unplug the device before cleaning it."),
    ]
  ),
  L(
    "gerund-infinitive-advanced-part-2-mastery-check",
    "c1r-spiral-gerund-nominal",
    "Repaso en espiral: formas no personales y nominalización",
    "Gerundio, infinitivo, participio y sustantivos abstractos — elige la forma adecuada en cada contexto.",
    "8 min",
    [
      sec(
        "Elegir la forma",
        "¿Infinitivo (sustantivo, tras preposición), gerundio (simultaneidad, modo), participio (resultado) o nominalización (registro formal)?",
        [
          ["Al llegar, vi que estaba todo roto.", "On arriving, I saw that everything was broken."],
          ["Terminado el discurso, empezó el debate.", "Once the speech was over, the debate began."],
        ],
        [
          fb("Completa.", "___ el informe, lo enviamos al director. (terminar, participio absoluto)", "Terminado", "El participio absoluto expresa una acción ya concluida: «terminado el informe» = una vez terminado."),
          fb("Completa.", "Al ___ la noticia, se echó a llorar. (oír)", "oír", "«Al» + infinitivo equivale a «cuando» + verbo conjugado: «al oír» = cuando oyó."),
        ]
      ),
    ],
    [
      fb("Completa.", "Lleva media hora ___ por teléfono. (hablar)", "hablando", "«Llevar» + tiempo + gerundio expresa duración hasta ahora: «lleva media hora hablando»."),
      fb("Completa.", "El ___ de los precios preocupa a todos. (subir, nominalización)", "aumento", "Subir los precios → el aumento (o la subida)."),
      fb("Completa.", "De ___ sabido, no habría venido. (haber)", "haber", "De + infinitivo compuesto = condicional."),
      mt(
        "Relaciona cada estructura con su equivalente.",
        [
          ["Al salir", "Cuando salí / salgo"],
          ["De haberlo sabido", "Si lo hubiera sabido"],
          ["Terminada la reunión", "Cuando terminó la reunión"],
          ["Estudiando más", "Si estudias más"],
        ],
        "Formas no personales con valor adverbial."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Una vez resuelto el problema, seguimos trabajando.", "Al entrar, saludó a todos.", "Nació en 1990, falleciendo en 2020.", "Viendo que nadie venía, nos fuimos."],
        [0, 1, 3],
        "«Nació en 1990, falleciendo en 2020» usa un gerundio de posterioridad, incorrecto: debe ser «nació en 1990 y falleció en 2020». Las demás son correctas: participio absoluto («una vez resuelto»), «al» + infinitivo y gerundio causal («viendo que nadie venía»)."
      ),
      toEs("On seeing the price, she changed her mind.", "Al ver el precio, cambió de opinión.", "«Al» + infinitivo expresa simultaneidad inmediata: «al ver» = en el momento en que vio.", ["Cuando vio el precio, cambió de opinión.", "Al ver el precio, cambió de idea."]),
      wo("Dicho esto, pasemos al siguiente punto del orden del día.", "Participio absoluto (dicho esto).", "That said, let's move on to the next item on the agenda."),
    ]
  ),
  L(
    "passive-impersonal-mastery-2",
    "c1r-transform-three-passives",
    "Transformaciones: tres formas de ocultar al agente",
    "Pasiva perifrástica, pasiva refleja e impersonal: reescribe noticias con cada una y valora el registro.",
    "7 min",
    [
      sec(
        "Tres registros",
        "Ser + participio (formal, periodístico, admite agente con por). Se pasivo (neutro, sin agente, concuerda con el sujeto). Tercera persona del plural (coloquial: Dicen que…, Han abierto…).",
        [
          ["El puente fue inaugurado por la alcaldesa.", "The bridge was inaugurated by the mayor. (formal)"],
          ["Se inauguró el puente.", "The bridge was inaugurated. (neutral)"],
          ["Inauguraron el puente.", "They opened the bridge. (colloquial)"],
        ],
        [
          fb("Pasa a pasiva refleja.", "Fueron detenidos tres sospechosos. → ___ a tres sospechosos.", "Se detuvo", "Con a + personas, el se es impersonal y el verbo va en singular."),
        ]
      ),
    ],
    [
      fb("Pasa a pasiva perifrástica.", "Se publicaron los resultados. → Los resultados ___ publicados.", "fueron", "Pasiva perifrástica: «ser» conjugado + participio concordado con el sujeto, «fueron publicados»."),
      fb("Pasa a pasiva refleja.", "Fue aprobado el presupuesto. → Se ___ el presupuesto.", "aprobó", "En la pasiva refleja, el verbo concuerda con el sujeto singular «el presupuesto»: «se aprobó»."),
      fb("Pasa a construcción coloquial.", "Se han subido los precios. → ___ subido los precios. (ellos)", "Han", "La tercera persona del plural sin sujeto expreso es impersonal y coloquial: «han subido los precios»."),
      mt(
        "Relaciona cada versión con su registro.",
        [
          ["El acuerdo fue firmado por ambas partes.", "formal (con agente)"],
          ["Se firmó el acuerdo.", "neutro (sin agente)"],
          ["Firmaron el acuerdo.", "coloquial"],
          ["El acuerdo está firmado.", "estado resultante"],
        ],
        "Cuatro formas de presentar el mismo hecho."
      ),
      mc(
        "¿Qué versión es propia de un informe oficial?",
        ["Las medidas fueron adoptadas por el consejo de administración.", "Tomaron las medidas y ya.", "Las medidas, las tomaron.", "Se tomaron las medidas, ¿no?"],
        0,
        "La pasiva perifrástica con agente explícito («fueron adoptadas por el consejo») es propia del registro oficial. «Tomaron las medidas y ya», «Las medidas, las tomaron» y el «¿no?» final son marcas coloquiales, impropias de un informe."
      ),
      toEs("The contract will be signed next week.", "El contrato se firmará la semana que viene.", "Pasiva refleja en futuro (o: será firmado).", ["El contrato será firmado la semana que viene.", "El contrato se firmará la próxima semana."]),
      wo("Se espera que las obras concluyan antes del verano.", "Se impersonal con verbo de expectativa + subjuntivo.", "The works are expected to be finished before summer."),
    ]
  ),
  L(
    "passive-impersonal-mastery-2",
    "c1r-error-hunt-se-agreement",
    "Caza de errores: la concordancia con se",
    "«Se vende pisos», «se buscan a los culpables», «se alquila habitaciones» — errores frecuentes incluso entre nativos.",
    "7 min",
    [
      sec(
        "Dos reglas",
        "Se pasivo: el verbo concuerda con el sujeto (cosa): Se venden pisos. Se impersonal: con a + persona, el verbo va en singular: Se busca a los culpables.",
        [
          ["✗ Se vende pisos. → ✓ Se venden pisos.", "Apartments for sale."],
          ["✗ Se buscan a los testigos. → ✓ Se busca a los testigos.", "The witnesses are being sought."],
        ],
        [
          fb("Corrige.", "Se ___ clases de inglés. (dar; el alumno escribió: da)", "dan", "Pasiva refleja: el verbo concuerda con el sujeto plural «clases», «se dan»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Se ___ a los mejores candidatos. (entrevistar, pretérito; el alumno escribió: entrevistaron)", "entrevistó", "Con «a» + personas la construcción es impersonal y el verbo va en singular: «se entrevistó a…»."),
      fb("Corrige.", "En ese restaurante se ___ platos típicos. (servir; el alumno escribió: sirve)", "sirven", "Pasiva refleja: «platos» es sujeto plural, así que «se sirven»."),
      fb("Corrige.", "Se ___ a los ganadores durante la gala. (premiar, futuro; el alumno escribió: premiarán)", "premiará", "Con «a» + personas, el «se» es impersonal y el verbo queda en singular: «se premiará a los ganadores»."),
      ms(
        "¿Qué frases son correctas?",
        ["Se necesitan voluntarios.", "Se informó a los vecinos.", "Se reparan bicicletas.", "Se contrataron a dos ingenieros."],
        [0, 1, 2],
        "Con «a» + personas el verbo va en singular, así que «Se contrataron a dos ingenieros» es incorrecta: «se contrató a dos ingenieros». «Se necesitan voluntarios» y «Se reparan bicicletas» concuerdan en plural (pasiva refleja) y «Se informó a los vecinos» es impersonal en singular."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Se ha detenido a los autores del robo.", "Se han detenido a los autores del robo.", "Se ha detenidos los autores del robo.", "Se detenieron los autores."],
        0,
        "Con «a» + personas, el «se» es impersonal y el verbo queda en singular: «Se ha detenido a los autores». «Se han detenido a…» mezcla plural con la «a» personal, «Se ha detenidos» hace concordar el participio y «detenieron» no existe (el pretérito es «detuvieron»)."
      ),
      toEs("The injured were taken to the hospital.", "Se trasladó a los heridos al hospital.", "A + personas → se impersonal en singular.", ["Los heridos fueron trasladados al hospital.", "Se llevó a los heridos al hospital."]),
      wo("Se ruega a los pasajeros que mantengan sus pertenencias vigiladas.", "Se impersonal + a + personas + que + subjuntivo.", "Passengers are requested to keep an eye on their belongings."),
    ]
  ),
  L(
    "passive-impersonal-mastery-4",
    "c1r-contrast-ser-estar-participle-c1",
    "Contraste: fue reformado / está reformado",
    "El proceso frente al estado resultante: ser y estar con participio en textos técnicos y periodísticos.",
    "7 min",
    [
      sec(
        "Proceso y resultado",
        "Ser + participio describe la acción (cuándo, quién). Estar + participio describe el resultado actual. En anuncios inmobiliarios, se prefiere estar: Piso reformado / está reformado.",
        [
          ["El edificio fue reformado en 2019 por un estudio catalán.", "The building was renovated in 2019 by a Catalan studio. (action)"],
          ["El edificio está reformado y listo para entrar a vivir.", "The building is renovated and ready to move into. (state)"],
        ],
        [
          mc(
            "«La carretera ___ cortada desde ayer por la nieve.» (estado que continúa)",
            ["está", "fue", "es", "ha sido por"],
            0,
            "Un estado resultante que sigue vigente («desde ayer») se expresa con «estar» + participio: «está cortada». «Fue» narraría la acción de cortar, «es cortada» sería una pasiva de acción habitual y «ha sido por» es agramatical."
          ),
        ]
      ),
    ],
    [
      fb("¿Ser o estar?", "La novela ___ escrita en 1605. (pretérito)", "fue", "Una acción fechada en el pasado se expresa con pasiva de «ser»: «fue escrita en 1605»."),
      fb("¿Ser o estar?", "La novela ___ escrita en un español muy arcaico.", "está", "Característica resultante del texto → estar."),
      fb("¿Ser o estar?", "Las entradas ya ___ vendidas; no queda ninguna.", "están", "«Estar» + participio describe el estado resultante: «ya están vendidas»."),
      fb("¿Ser o estar?", "Las entradas ___ vendidas en solo una hora. (pretérito)", "fueron", "La acción de vender, delimitada («en una hora»), va con pasiva de «ser»: «fueron vendidas»."),
      mt(
        "Relaciona cada frase con su interpretación.",
        [
          ["La puerta fue cerrada a las diez.", "Alguien la cerró a esa hora."],
          ["La puerta estaba cerrada a las diez.", "Ese era su estado a esa hora."],
          ["El caso fue resuelto.", "Alguien lo resolvió."],
          ["El caso está resuelto.", "Ya no hay caso pendiente."],
        ],
        "Proceso frente a estado."
      ),
      toEs("The museum is being restored.", "El museo está siendo restaurado.", "Estar siendo + participio: pasiva progresiva (frecuente en la prensa).", ["Se está restaurando el museo.", "Están restaurando el museo."]),
      wo("El proyecto ya está aprobado, pero todavía no ha sido financiado.", "Estado (está aprobado) frente a acción (ha sido financiado).", "The project is already approved, but it hasn't been funded yet."),
    ]
  ),
  L(
    "passive-impersonal-mastery-4",
    "c1r-mission-press-release",
    "Misión real: la nota de prensa",
    "Redacta un comunicado oficial combinando pasiva perifrástica, pasiva refleja e impersonalidad.",
    "8 min",
    [
      sec(
        "El comunicado",
        "Las notas de prensa evitan el yo y el nosotros: se informa, ha sido aprobado, se prevé que, cabe destacar.",
        [
          ["Se informa a la ciudadanía de que el servicio ha sido restablecido.", "Citizens are informed that the service has been restored."],
          ["Se prevé que las obras concluyan en marzo.", "The works are expected to conclude in March."],
          ["Cabe destacar que no se han registrado heridos.", "It is worth noting that no injuries have been reported."],
        ],
        [
          fb("Completa el comunicado.", "El presupuesto ___ aprobado ayer por el pleno. (ser, pretérito)", "fue", "Pasiva perifrástica con agente («por el pleno»): «ser» en pretérito + participio, «fue aprobado»."),
        ]
      ),
    ],
    [
      fb("Completa el comunicado.", "Se ___ que el nuevo horario entre en vigor el lunes. (prever)", "prevé", "«Se prevé que» es impersonal; el verbo concuerda en singular con la oración que sigue."),
      fb("Completa el comunicado.", "Se ___ a los usuarios disculpas por las molestias. (pedir, presente)", "piden", "Pasiva refleja: el sujeto es «disculpas» (plural), así que «se piden»."),
      fb("Completa el comunicado.", "Hasta el momento no se ___ incidencias. (registrar, perfecto)", "han registrado", "Pasiva refleja en perfecto que concuerda con «incidencias» (plural): «se han registrado»."),
      mt(
        "Relaciona cada fórmula con su función.",
        [
          ["Se informa de que…", "comunicar un hecho"],
          ["Se ruega que…", "pedir algo"],
          ["Se prevé que…", "anunciar una previsión"],
          ["Cabe destacar que…", "subrayar un dato"],
        ],
        "Fórmulas impersonales del registro institucional."
      ),
      mc(
        "¿Qué frase NO encaja en una nota de prensa oficial?",
        ["Bueno, pues al final lo hemos arreglado, ¿vale?", "El suministro ha sido restablecido.", "Se agradece la colaboración ciudadana.", "Se recomienda evitar la zona."],
        0,
        "«Bueno, pues al final lo hemos arreglado, ¿vale?» usa muletillas orales («bueno», «pues», «¿vale?») impropias de una nota de prensa. La pasiva («ha sido restablecido») y el «se» impersonal («se agradece», «se recomienda») sí son registro oficial."
      ),
      toEs("The public is advised to use public transport.", "Se recomienda a la población que utilice el transporte público.", "Se impersonal + a + personas + que + subjuntivo.", ["Se recomienda a la ciudadanía utilizar el transporte público.", "Se aconseja a la población que use el transporte público."]),
      wo("Se agradece de antemano la comprensión de todos los vecinos.", "Se impersonal + de antemano.", "Thank you in advance to all residents for your understanding."),
    ]
  ),
  L(
    "passive-impersonal-mastery-6",
    "c1r-contrast-se-functions",
    "Contraste: los mil usos de se",
    "Reflexivo, recíproco, pronominal, pasivo, impersonal, dativo (se lo) y accidental — identifica cada se.",
    "8 min",
    [
      sec(
        "Siete ses",
        "Reflexivo (se lava), recíproco (se abrazan), pronominal (se arrepiente), pasivo (se venden pisos), impersonal (se vive bien), variante de le (se lo di) y accidental (se me rompió).",
        [
          ["Se miran al espejo. / Se miran el uno al otro.", "They look at themselves. / They look at each other."],
          ["Se me cayó el vaso.", "I dropped the glass (accidentally)."],
          ["Aquí se trabaja mucho.", "People work hard here."],
        ],
        [
          mc(
            "¿Qué tipo de se hay en «Se lo expliqué ayer»?",
            ["variante de le (dativo)", "reflexivo", "pasivo", "impersonal"],
            0,
            "«Le» se convierte en «se» ante «lo/la/los/las»: «se lo expliqué» = «le expliqué eso». No es reflexivo (no me lo expliqué a mí mismo), ni pasivo, ni impersonal: el «se» es aquí el complemento indirecto."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con el tipo de se.",
        [
          ["Se venden coches usados.", "pasivo"],
          ["Se abrazaron al despedirse.", "recíproco"],
          ["Se me olvidaron las llaves.", "accidental"],
          ["Se duchó con agua fría.", "reflexivo"],
        ],
        "Cuatro usos distintos del mismo pronombre."
      ),
      ms(
        "¿En qué frases el se es impersonal?",
        ["Se está muy bien en esta terraza.", "Se vendieron todas las entradas.", "Se trata de un asunto delicado.", "Se come bien en este barrio."],
        [0, 2, 3],
        "«Se está muy bien», «se trata de» y «se come bien» no tienen sujeto: son impersonales. «Se vendieron todas las entradas» es pasiva refleja, porque el verbo concuerda con «entradas»."
      ),
      fb("Completa con el se accidental.", "A mis padres ___ les estropeó el coche en el viaje.", "se", "Se + le(s) + verbo: accidente involuntario."),
      fb("Completa.", "Mi hermano ___ arrepintió de lo que dijo.", "se", "«Arrepentirse» es un verbo pronominal: siempre lleva el pronombre, «se arrepintió»."),
      mc(
        "«The coffee spilled on me.» (accidental)",
        ["Se me derramó el café.", "Me derramé el café.", "Se derramé el café.", "Me se derramó el café."],
        0,
        "Para un accidente involuntario se usa «se» + pronombre de la persona afectada + verbo: «Se me derramó». «Me derramé el café» implica que lo hice yo, «Se derramé» no concuerda con el sujeto «el café» y «Me se» invierte el orden obligatorio (siempre «se» primero)."
      ),
      toEs("They wrote to each other for years.", "Se escribieron durante años.", "El «se» recíproco expresa acción mutua: «se escribieron» = el uno al otro.", ["Se escribieron cartas durante años.", "Estuvieron escribiéndose durante años."]),
      wo("Se nos hizo tarde y se nos escapó el último tren.", "Se accidental dos veces.", "It got late on us and we missed the last train."),
    ]
  ),
  L(
    "passive-impersonal-mastery-6",
    "c1r-spiral-passive-nominal-subj",
    "Repaso en espiral: impersonalidad y registro formal",
    "Pasiva, se, nominalización y subjuntivo: los recursos de impersonalidad del C1, combinados.",
    "8 min",
    [
      sec(
        "El texto impersonal",
        "Los textos formales combinan nominalizaciones (la aprobación), pasivas (fue aprobada), se (se prevé) y subjuntivo (es preciso que).",
        [
          ["Tras la aprobación de la norma, se prevé que su aplicación sea inmediata.", "Following the approval of the rule, its application is expected to be immediate."],
          ["Es preciso que se evalúe el impacto antes de que la medida sea ampliada.", "The impact must be assessed before the measure is extended."],
        ],
        [
          fb("Completa.", "Es necesario que se ___ los datos antes de publicarlos. (contrastar)", "contrasten", "«Es necesario que» exige subjuntivo, y la pasiva refleja concuerda con «los datos»: «se contrasten»."),
          fb("Completa.", "Tras la ___ del informe, se abrió un debate. (publicar, nominalización)", "publicación", "Publicar → la publicación: sustantivo en -ción."),
        ]
      ),
    ],
    [
      fb("Completa.", "La propuesta ___ rechazada por falta de apoyos. (ser, pretérito)", "fue", "Pasiva perifrástica con «ser» en pretérito: «fue rechazada», concordando con «la propuesta»."),
      fb("Completa.", "Se ha comprobado que el sistema ___ fallos. (presentar)", "presenta", "Se ha comprobado que + indicativo (hecho)."),
      fb("Completa.", "Cabe la posibilidad de que se ___ el plazo. (ampliar)", "amplíe", "«La posibilidad de que» exige subjuntivo: «se amplíe»."),
      mc(
        "¿Qué versión es más impersonal y formal?",
        ["Se considera imprescindible la revisión del protocolo.", "Pienso que tenemos que revisar el protocolo.", "Hay que revisar el protocolo, ¿no?", "Revisamos el protocolo y listo."],
        0,
        "El «se» impersonal con nominalización («la revisión») borra al hablante y suena formal. «Pienso que tenemos que…» usa la primera persona, «¿no?» es una coletilla oral y «y listo» es coloquial."
      ),
      ms(
        "¿Qué recursos de impersonalidad aparecen en «Se recomienda que la documentación sea entregada antes del plazo»?",
        ["se impersonal", "subjuntivo", "pasiva perifrástica", "primera persona"],
        [0, 1, 2],
        "Hay «se» impersonal («se recomienda»), subjuntivo («sea entregada») y pasiva perifrástica («sea entregada»). No hay primera persona: justo lo que evita un texto impersonal."
      ),
      toEs("It has been decided that the meeting will be postponed.", "Se ha decidido que la reunión se aplace.", "Se impersonal + subjuntivo (decisión de futuro).", ["Se ha decidido aplazar la reunión.", "Se ha decidido que la reunión sea aplazada."]),
      wo("La implantación del sistema ha sido valorada positivamente por los usuarios.", "Nominalización + pasiva perifrástica.", "The implementation of the system has been rated positively by users."),
    ]
  ),
  L(
    "free-indirect-style-part-1-mastery-check",
    "c1r-transform-three-styles",
    "Transformaciones: directo, indirecto e indirecto libre",
    "La misma reflexión de un personaje contada de tres maneras.",
    "8 min",
    [
      sec(
        "Tres voces",
        "Directo: la voz del personaje, entre comillas. Indirecto: el narrador la resume con un verbo introductor. Indirecto libre: el narrador adopta la voz del personaje sin verbo introductor ni comillas, con los tiempos desplazados.",
        [
          ["Directo: Pensó: «¿Por qué siempre me pasa esto a mí?»", "He thought: \"Why does this always happen to me?\""],
          ["Indirecto: Se preguntó por qué siempre le pasaba eso a él.", "He wondered why that always happened to him."],
          ["Indirecto libre: ¿Por qué siempre le pasaba eso a él?", "Why did this always happen to him?"],
        ],
        [
          fb("Pasa a indirecto libre.", "Pensó: «Mañana hablaré con ella». → Mañana ___ con ella.", "hablaría", "Futuro → condicional, sin verbo introductor."),
        ]
      ),
    ],
    [
      fb("Pasa a indirecto libre.", "Se dijo: «Estoy harta de esperar». → ___ harta de esperar.", "Estaba", "En el estilo indirecto libre el presente pasa a imperfecto y a tercera persona: «Estaba harta»."),
      fb("Pasa a indirecto libre.", "Pensó: «¿Me habrá olvidado?» → ¿La ___ olvidado?", "habría", "El futuro compuesto de conjetura pasa a condicional compuesto: «¿La habría olvidado?»."),
      fb("Pasa a estilo indirecto.", "Pensó: «Nunca volveré aquí». → Pensó que nunca ___ allí.", "volvería", "Futuro → condicional; aquí → allí."),
      mt(
        "Relaciona cada fragmento con su estilo.",
        [
          ["«No puedo más», dijo.", "directo"],
          ["Dijo que no podía más.", "indirecto"],
          ["No podía más. Ya no.", "indirecto libre"],
          ["Pensaba en todo lo que había perdido.", "narración"],
        ],
        "Tres estilos y la narración pura."
      ),
      mc(
        "¿Cuál es la marca más clara del estilo indirecto libre?",
        ["Tiempos desplazados sin verbo introductor, con expresividad del personaje.", "Uso de comillas.", "Verbo introductor seguido de que.", "Primera persona del presente."],
        0,
        "El estilo indirecto libre desplaza los tiempos (presente → imperfecto) sin verbo introductor y conserva la expresividad del personaje. Las comillas son del estilo directo, el verbo introductor con «que» del indirecto y la primera persona del presente del directo o el monólogo."
      ),
      toEn("¿Y si él no volvía nunca? No, no podía ser.", "And what if he never came back? No, it couldn't be.", "Estilo indirecto libre: preguntas y exclamaciones del personaje en tercera persona y pasado.", ["What if he never came back? No, that couldn't be."]),
      wo("Mañana se lo diría todo, pasara lo que pasara.", "Indirecto libre: mañana + condicional.", "Tomorrow she would tell him everything, whatever happened."),
    ]
  ),
  L(
    "free-indirect-style-part-1-mastery-check",
    "c1r-text-detective-free-indirect",
    "Detective de textos: ¿quién habla aquí?",
    "Lee fragmentos literarios y decide qué frases son del narrador y cuáles de la conciencia del personaje.",
    "8 min",
    [
      sec(
        "El fragmento",
        "Lee con atención. Busca deícticos (aquí, ahora, mañana), exclamaciones, preguntas y léxico propio del personaje.",
        [
          ["Clara cerró la puerta y se sentó junto a la ventana.", "Clara closed the door and sat by the window."],
          ["¡Qué idiota había sido! Ahora todo el pueblo lo sabría.", "What an idiot she'd been! Now the whole village would know."],
          ["Afuera, la lluvia seguía cayendo sobre los tejados.", "Outside, the rain kept falling on the roofs."],
        ],
        [
          ms(
            "¿Qué frases pertenecen a la conciencia de Clara (estilo indirecto libre)?",
            ["Clara cerró la puerta y se sentó junto a la ventana.", "¡Qué idiota había sido!", "Ahora todo el pueblo lo sabría.", "Afuera, la lluvia seguía cayendo."],
            [1, 2],
            "«¡Qué idiota había sido!» (exclamación) y «Ahora todo el pueblo lo sabría» (deíctico + condicional) son la voz de Clara. «Clara cerró la puerta…» y «Afuera, la lluvia seguía cayendo» son narración externa."
          ),
        ]
      ),
    ],
    [
      mc(
        "En «Ahora todo el pueblo lo sabría», ¿qué marca el estilo indirecto libre?",
        ["El deíctico ahora combinado con el condicional (futuro del pasado).", "La tercera persona sola.", "El uso de comillas.", "El verbo introductor."],
        0,
        "«Ahora» sitúa la frase en el presente del personaje y el condicional expresa el futuro visto desde el pasado. La tercera persona sola no basta (también la usa el narrador) y no hay comillas ni verbo introductor."
      ),
      fb("Continúa en estilo indirecto libre.", "¿Y qué ___ su madre cuando se enterara? (decir, condicional)", "diría", "La pregunta del personaje sobre el futuro va en condicional: «¿qué diría?»."),
      fb("Continúa en estilo indirecto libre.", "No, no ___ llorar. Tenía que ser fuerte. (poder, imperfecto)", "podía", "La voz del personaje pasa del presente al imperfecto: «no podía llorar»."),
      fb("Continúa como narrador.", "Clara ___ la carta y la guardó en un cajón. (doblar, pretérito)", "dobló", "Las acciones que hacen avanzar la narración van en pretérito indefinido: «dobló»."),
      mt(
        "Relaciona cada rasgo con su efecto.",
        [
          ["exclamaciones", "emoción del personaje"],
          ["preguntas sin verbo introductor", "dudas del personaje"],
          ["deícticos como ahora o mañana", "perspectiva del personaje"],
          ["pretérito indefinido narrativo", "voz del narrador"],
        ],
        "Rasgos del estilo indirecto libre."
      ),
      toEn("Mañana se iría. Sí, mañana, sin falta.", "Tomorrow she would leave. Yes, tomorrow, without fail.", "Estilo indirecto libre: mañana + condicional.", ["She'd leave tomorrow. Yes, tomorrow, no matter what."]),
      wo("¿Cómo había podido ser tan ingenua durante tantos años?", "Pregunta del personaje en pluscuamperfecto.", "How could she have been so naive for so many years?"),
    ]
  ),
  L(
    "free-indirect-style-part-2-2",
    "c1r-workshop-write-free-indirect",
    "Taller de estilo: escribe en estilo indirecto libre",
    "Convierte monólogos interiores en estilo indirecto libre, como haría un novelista.",
    "8 min",
    [
      sec(
        "La técnica",
        "Primera persona → tercera. Presente → imperfecto. Pretérito/perfecto → pluscuamperfecto. Futuro → condicional. Se conservan las exclamaciones, las preguntas y el léxico del personaje.",
        [
          ["Monólogo: «¡Otra vez tarde! ¿Qué voy a decirle al jefe?»", "Monologue: \"Late again! What am I going to tell the boss?\""],
          ["Indirecto libre: ¡Otra vez tarde! ¿Qué iba a decirle al jefe?", "Late again! What was he going to tell the boss?"],
        ],
        [
          fb("Transforma.", "«No he dormido nada.» → No ___ dormido nada.", "había", "El pretérito perfecto pasa a pluscuamperfecto: «no había dormido»."),
        ]
      ),
    ],
    [
      fb("Transforma.", "«¿Dónde he dejado las llaves?» → ¿Dónde ___ dejado las llaves?", "había", "El perfecto de la pregunta original pasa a pluscuamperfecto: «¿dónde había dejado…?»."),
      fb("Transforma.", "«Mañana todo será distinto.» → Mañana todo ___ distinto.", "sería", "El futuro pasa a condicional (futuro del pasado): «sería distinto»."),
      fb("Transforma.", "«¡Qué tonta soy!» → ¡Qué tonta ___!", "era", "El presente pasa a imperfecto y se conserva la exclamación: «¡Qué tonta era!»."),
      fb("Transforma.", "«Esta vez no voy a ceder.» → Esta vez no ___ a ceder.", "iba", "Ir a (presente) → iba a."),
      mc(
        "«¿Por qué no me llama? ¿Estará enfadado?» → estilo indirecto libre:",
        ["¿Por qué no la llamaba? ¿Estaría enfadado?", "¿Por qué no me llama? ¿Estará enfadado?", "Se preguntó por qué no la llamaba.", "¿Por qué no la llamó? ¿Estuvo enfadado?"],
        0,
        "Se pasa a tercera persona («la»), el presente a imperfecto («llamaba») y el futuro de probabilidad a condicional («estaría»). Dejarlo igual es estilo directo, «Se preguntó por qué…» es indirecto con verbo introductor y el pretérito («llamó», «estuvo») pierde la conjetura."
      ),
      toEs("Would she ever forgive him? Probably not.", "¿Lo perdonaría algún día? Seguramente no.", "La duda del personaje sobre el futuro se expresa con condicional: «¿Lo perdonaría?».", ["¿Le perdonaría algún día? Seguramente no.", "¿Lo perdonaría alguna vez? Probablemente no."]),
      wo("Ya no aguantaba más aquella casa ni aquel silencio.", "Voz del personaje en imperfecto.", "She couldn't stand that house or that silence any longer."),
    ]
  ),
  L(
    "free-indirect-style-part-2-2",
    "c1r-contrast-narrative-tenses",
    "Contraste: los tiempos del relato",
    "Pretérito, imperfecto, pluscuamperfecto y condicional en la narración literaria — cada uno con su función.",
    "7 min",
    [
      sec(
        "La arquitectura temporal del relato",
        "Pretérito: acciones que hacen avanzar la trama. Imperfecto: descripción, fondo y conciencia del personaje. Pluscuamperfecto: retrospección. Condicional: prospección (futuro desde el pasado).",
        [
          ["Llegó a la estación. Llovía. El tren ya había salido. Tendría que esperar hasta el día siguiente.", "He reached the station. It was raining. The train had already left. He'd have to wait until the next day."],
        ],
        [
          mt(
            "Relaciona cada verbo del ejemplo con su función.",
            [
              ["llegó", "avance de la trama"],
              ["llovía", "descripción de fondo"],
              ["había salido", "retrospección"],
              ["tendría", "prospección"],
            ],
            "Cuatro tiempos, cuatro funciones."
          ),
        ]
      ),
    ],
    [
      fb("Completa el relato.", "Cuando abrió los ojos, ya ___ de día. (ser)", "era", "Las descripciones de fondo van en imperfecto: «ya era de día»."),
      fb("Completa el relato.", "Alguien ___ la ventana durante la noche. (abrir, pluscuamperfecto)", "había abierto", "El pluscuamperfecto marca una acción anterior al momento narrado: «había abierto»."),
      fb("Completa el relato.", "Se ___ rápidamente y bajó a la cocina. (vestir, pretérito)", "vistió", "Las acciones sucesivas que hacen avanzar el relato van en pretérito: «se vistió»."),
      fb("Completa el relato.", "Allí la ___ una sorpresa que cambiaría su vida. (esperar, imperfecto)", "esperaba", "El imperfecto describe el fondo o la situación: «la esperaba una sorpresa»."),
      mc(
        "¿Qué tiempo introduce una anticipación del futuro dentro del relato?",
        ["El condicional (cambiaría su vida).", "El pretérito.", "El presente.", "El pluscuamperfecto."],
        0,
        "El condicional funciona como futuro del pasado («cambiaría su vida») y anticipa lo que vendrá. El pretérito narra acciones, el presente rompe el marco del pasado y el pluscuamperfecto mira hacia atrás, no hacia delante."
      ),
      toEs("Years later, she would remember that afternoon.", "Años después, recordaría aquella tarde.", "El condicional de prospección anticipa el futuro desde el pasado narrado: «recordaría».", ["Años más tarde, recordaría aquella tarde."]),
      wo("Nunca olvidaría el día en que había conocido a su padre.", "Condicional + pluscuamperfecto en la misma frase.", "She would never forget the day she had met her father."),
    ]
  ),
  L(
    "free-indirect-style-part-2-mastery-check",
    "c1r-mission-short-story",
    "Misión real: escribe un microrrelato",
    "Construye un microrrelato con narración, estilo indirecto libre y los tiempos del relato.",
    "8 min",
    [
      sec(
        "El microrrelato",
        "Un buen microrrelato alterna la voz del narrador con la conciencia del personaje. Lee el modelo.",
        [
          ["El viejo abrió la carta con las manos temblorosas.", "The old man opened the letter with trembling hands."],
          ["¿Sería de ella? Después de cuarenta años, ¿se habría acordado de él?", "Would it be from her? After forty years, would she have remembered him?"],
          ["La letra era inconfundible.", "The handwriting was unmistakable."],
        ],
        [
          ms(
            "¿Qué frases del modelo son estilo indirecto libre?",
            ["El viejo abrió la carta…", "¿Sería de ella?", "¿se habría acordado de él?", "La letra era inconfundible."],
            [1, 2],
            "«¿Sería de ella?» y «¿se habría acordado de él?» son preguntas del personaje con condicional de conjetura. «El viejo abrió la carta…» y «La letra era inconfundible» son narración y descripción externas."
          ),
        ]
      ),
    ],
    [
      fb("Continúa el microrrelato.", "Leyó la primera línea y ___ que el corazón se le detenía. (sentir, pretérito)", "sintió", "Una acción puntual que hace avanzar la historia va en pretérito: «sintió»."),
      fb("Continúa el microrrelato.", "¡Cuántos años ___ esperado aquellas palabras! (haber, él)", "había", "La exclamación del personaje mira a un pasado anterior: pluscuamperfecto, «había esperado»."),
      fb("Continúa el microrrelato.", "Mañana mismo ___ el primer tren a Valparaíso. (tomar, condicional)", "tomaría", "La decisión del personaje sobre el futuro, vista desde el pasado, va en condicional: «tomaría»."),
      mc(
        "¿Qué final mantiene la coherencia de tiempos?",
        ["Guardó la carta en el bolsillo y, por primera vez en años, sonrió.", "Guarda la carta y sonreirá.", "Guardaría la carta y sonrió ayer.", "Guardando la carta, sonriendo."],
        0,
        "El cierre de un relato en pasado usa el pretérito narrativo: «Guardó… y sonrió». «Guarda… y sonreirá» cambia a presente y futuro, «Guardaría… y sonrió ayer» mezcla tiempos sin lógica y «Guardando…, sonriendo» no tiene verbo conjugado."
      ),
      mt(
        "Relaciona cada elemento con su función en el microrrelato.",
        [
          ["abrió la carta", "acción"],
          ["las manos temblorosas", "descripción"],
          ["¿Sería de ella?", "duda del personaje"],
          ["tomaría el tren", "decisión futura"],
        ],
        "Componentes del relato."
      ),
      toEs("Would she recognize him after so many years?", "¿Lo reconocería después de tantos años?", "La duda del personaje sobre el futuro, en estilo indirecto libre, va en condicional: «¿Lo reconocería?».", ["¿Le reconocería después de tantos años?", "¿Lo reconocería tras tantos años?"]),
      wo("Aquella noche no durmió; tenía demasiadas cosas en las que pensar.", "Pretérito + imperfecto.", "That night he didn't sleep; he had too many things to think about."),
    ]
  ),
  L(
    "free-indirect-style-part-2-mastery-check",
    "c1r-spiral-narration-reported",
    "Repaso en espiral: narrar y citar",
    "Estilo directo, indirecto e indirecto libre, tiempos del relato y concordancia temporal del subjuntivo.",
    "8 min",
    [
      sec(
        "Todo junto",
        "Narrar exige elegir constantemente: ¿cito directamente, resumo o me meto en la cabeza del personaje?",
        [
          ["Le pidió que se quedara. Él dudó: ¿de verdad quería que se quedara?", "She asked him to stay. He hesitated: did she really want him to stay?"],
        ],
        [
          fb("Completa.", "Le rogó que no ___ nada a nadie. (contar, él)", "contara", "Estilo indirecto con subjuntivo en pasado."),
          fb("Completa (indirecto libre).", "¿Y si lo ___ todo? No, no se atrevería. (confesar, él)", "confesaba", "En la hipótesis coloquial «¿y si…?» del personaje se usa el imperfecto de indicativo: «¿Y si lo confesaba todo?»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Le preguntó si ___ alguna vez en París. (estar, pluscuamperfecto)", "había estado", "Pregunta indirecta con «si» y anterioridad al pasado: pluscuamperfecto, «había estado»."),
      fb("Completa.", "Le dijo que ___ al día siguiente. (volver, condicional)", "volvería", "En estilo indirecto con verbo introductor en pasado, el futuro pasa a condicional: «volvería»."),
      fb("Completa (narración).", "Mientras él ___, ella preparaba la maleta. (dormir, imperfecto)", "dormía", "Dos acciones simultáneas de fondo con «mientras» van en imperfecto: «dormía»."),
      mt(
        "Relaciona cada versión con su estilo.",
        [
          ["«Vete», le dijo.", "directo"],
          ["Le dijo que se fuera.", "indirecto"],
          ["Que se fuera. Eso era lo que ella quería.", "indirecto libre"],
          ["Ella quería que él se fuera.", "narración con subjuntivo"],
        ],
        "Cuatro maneras de presentar la misma idea."
      ),
      mc(
        "«I'll wait for you», she told him. → estilo indirecto:",
        ["Ella le dijo que lo esperaría.", "Ella le dijo que lo esperará.", "Ella le dijo que lo esperara.", "Ella le dijo: lo esperaría."],
        0,
        "Con el verbo introductor en pasado, el futuro «esperaré» pasa a condicional: «que lo esperaría». «Esperará» no retrocede el tiempo, «esperara» (subjuntivo) convertiría la frase en una orden y «dijo: lo esperaría» mezcla estilo directo con el tiempo del indirecto."
      ),
      toEs("He asked her not to tell anyone what she had seen.", "Le pidió que no le contara a nadie lo que había visto.", "Pedir + imperfecto de subjuntivo + pluscuamperfecto.", ["Le pidió que no contara a nadie lo que había visto."]),
      wo("¿Qué habría pasado si aquella tarde no hubiera ido a la estación?", "Pregunta del personaje con tipo 3.", "What would have happened if she hadn't gone to the station that afternoon?"),
    ]
  ),
  L(
    "por-para-precision-2",
    "c1r-contrast-por-para-legal",
    "Contraste: por y para en contratos y empresas",
    "Causa, finalidad, representación y beneficiario: la precisión que exige el lenguaje profesional.",
    "7 min",
    [
      sec(
        "Matices profesionales",
        "Por: causa, motivo, representación (firmar por alguien), medio. Para: finalidad, destinatario, plazo, punto de vista.",
        [
          ["Firmo por el director, que está de viaje.", "I'm signing on behalf of the director, who is traveling."],
          ["Este informe es para el director.", "This report is for the director."],
          ["Fue despedido por incumplimiento de contrato.", "He was dismissed for breach of contract."],
        ],
        [
          mc(
            "«La empresa fue sancionada ___ no respetar la normativa.»",
            ["por", "para", "a", "de"],
            0,
            "«Por» introduce la causa o el motivo de la sanción: «por no respetar la normativa». «Para» indicaría finalidad (sancionar con el objetivo de no respetar, absurdo), y «a» o «de» no expresan causa con este verbo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Trabajo ___ una multinacional alemana. (empleador)", "para", "«Trabajar para» indica el empleador; «trabajar por» significaría sustituir a alguien o hacerlo en su favor."),
      fb("Completa.", "Me presento ___ la vacante de analista. (finalidad)", "para", "«Para» expresa finalidad u objetivo: me presento con el fin de conseguir la vacante."),
      fb("Completa.", "El contrato quedó anulado ___ un defecto de forma.", "por", "«Por» introduce la causa: el contrato se anuló a causa de un defecto de forma."),
      fb("Completa.", "La reunión está prevista ___ el próximo trimestre.", "para", "«Para» marca un plazo o destino temporal: «para el próximo trimestre»."),
      mt(
        "Relaciona cada frase con su valor.",
        [
          ["Hablo por mis compañeros.", "en representación de"],
          ["Hablo para mis compañeros.", "destinatarios del discurso"],
          ["Lo hizo por dinero.", "motivo"],
          ["Lo hizo para ganar dinero.", "finalidad"],
        ],
        "Por (causa, representación) frente a para (finalidad, destinatario)."
      ),
      toEs("The agreement was signed on behalf of both companies.", "El acuerdo fue firmado por los representantes de ambas empresas.", "«Por» introduce al agente (o a quien actúa en nombre de otro); «en nombre de» traduce literalmente «on behalf of».", ["El acuerdo se firmó en nombre de ambas empresas.", "El acuerdo fue firmado en nombre de ambas empresas."]),
      wo("Para ser su primer año, ha conseguido resultados excelentes.", "Para + comparación con lo esperable.", "For her first year, she has achieved excellent results."),
    ]
  ),
  L(
    "por-para-precision-2",
    "c1r-error-hunt-por-para-c1",
    "Caza de errores: por y para en el nivel avanzado",
    "Errores sutiles: «estar por», «para mí que», «por lo que respecta», «para con» — corrige y matiza.",
    "7 min",
    [
      sec(
        "Expresiones fijas avanzadas",
        "Estar por + infinitivo (a punto de, con ganas de), estar para + infinitivo (a punto de / en condiciones de), para con (hacia una persona), por lo que respecta a.",
        [
          ["Estoy por llamarla. (tengo ganas de)", "I'm tempted to call her."],
          ["El tren está para salir. (a punto de)", "The train is about to leave."],
          ["Es muy amable para con sus alumnos.", "She is very kind toward her students."],
        ],
        [
          mc(
            "«No estoy ___ bromas hoy.» (no estoy de humor)",
            ["para", "por", "a", "en"],
            0,
            "«No estar para bromas» significa no estar de humor para algo; «para» indica disposición. «Por» no tiene ese sentido aquí, y «a» o «en» no forman la expresión."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "___ lo que respecta al presupuesto, no hay cambios. (el alumno escribió: Para)", "Por", "La locución fija es «por lo que respecta a» (= en cuanto a), siempre con «por»."),
      fb("Corrige.", "Su actitud ___ con los clientes es impecable. (el alumno escribió: por)", "para", "«Para con» significa «hacia, respecto a» una persona: «su actitud para con los clientes»."),
      fb("Corrige.", "Cambié el turno ___ el de mi compañero. (el alumno escribió: para)", "por", "«Por» expresa intercambio o sustitución: cambiar una cosa por otra."),
      ms(
        "¿Qué frases son correctas?",
        ["Estoy por dejarlo todo y mudarme.", "El informe está para mañana.", "Para mí que no viene.", "Lo compré para veinte euros."],
        [0, 1, 2],
        "El precio se expresa con «por»: «lo compré por veinte euros», así que «para veinte euros» es incorrecta. «Estoy por dejarlo» (a punto de, tentado), «está para mañana» (plazo) y «para mí que no viene» (coloquial, = creo que) son correctas."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Queda mucho por hacer.", "Queda mucho para hacer por.", "Queda mucho a hacer.", "Queda mucho de hacer."],
        0,
        "«Quedar por» + infinitivo significa estar pendiente de hacerse: «queda mucho por hacer». «Para hacer por» es agramatical, y «a hacer» o «de hacer» no forman esta perífrasis."
      ),
      toEs("The contract is still to be signed.", "El contrato está todavía por firmar.", "Estar por + infinitivo = pendiente.", ["El contrato aún está por firmar.", "El contrato todavía está sin firmar."]),
      wo("Por más que lo intento, no consigo entender su postura.", "Por más que (concesión).", "However hard I try, I can't understand her position."),
    ]
  ),
  L(
    "por-para-precision-4",
    "c1r-mission-business-email-por-para",
    "Misión real: correo profesional con por y para",
    "Redacta un correo de trabajo en el que cada por y para debe ser exacto.",
    "7 min",
    [
      sec(
        "El correo",
        "Lee el modelo y fíjate en cada preposición.",
        [
          ["Le escribo por encargo de la directora para confirmarle la reunión.", "I'm writing at the director's request to confirm the meeting."],
          ["Le enviaremos el presupuesto por correo electrónico para el viernes.", "We'll email you the quote by Friday."],
          ["Gracias de antemano por su atención.", "Thank you in advance for your attention."],
        ],
        [
          fb("Completa el correo.", "Le agradecemos su confianza y le escribimos ___ informarle de las novedades.", "para", "«Para» + infinitivo expresa la finalidad del correo: «para informarle»."),
        ]
      ),
    ],
    [
      fb("Completa el correo.", "El envío se retrasará ___ causas ajenas a la empresa.", "por", "«Por» introduce la causa: «por causas ajenas a la empresa»."),
      fb("Completa el correo.", "Necesitamos la documentación ___ el día 15.", "para", "«Para» marca el plazo límite: «para el día 15»."),
      fb("Completa el correo.", "Puede ponerse en contacto con nosotros ___ teléfono.", "por", "«Por» indica el medio de comunicación: «por teléfono», «por correo»."),
      fb("Completa el correo.", "Este descuento es exclusivo ___ clientes preferentes.", "para", "«Para» indica el destinatario: exclusivo para los clientes preferentes."),
      mc(
        "¿Qué cierre es correcto?",
        ["Sin otro particular, le saluda atentamente.", "Sin otro particular, para le saluda.", "Sin otro particular, por saludarle.", "Por otro particular, le saluda."],
        0,
        "«Sin otro particular, le saluda atentamente» es la fórmula fija de cierre de la correspondencia formal. Las variantes con «para le saluda» o «por saludarle» son agramaticales, y «Por otro particular» altera la fórmula."
      ),
      toEs("We apologize for the inconvenience.", "Le pedimos disculpas por las molestias.", "«Disculparse» o «pedir disculpas» llevan «por» + la causa: «por las molestias».", ["Pedimos disculpas por las molestias.", "Disculpe las molestias.", "Les pedimos disculpas por las molestias."]),
      wo("Quedo a su disposición para cualquier aclaración.", "Para + sustantivo (finalidad).", "I remain at your disposal for any clarification."),
    ]
  ),
  L(
    "por-para-precision-4",
    "c1r-contrast-idiomatic-por-para",
    "Contraste: expresiones fijas con por y para",
    "Por si acaso, para colmo, por lo visto, para nada — expresiones que no siguen la lógica general.",
    "7 min",
    [
      sec(
        "Memorizar en bloque",
        "Muchas expresiones con por y para son fijas: no se deducen de la regla, se aprenden enteras.",
        [
          ["Lleva paraguas por si acaso.", "Take an umbrella just in case."],
          ["Llegó tarde y, para colmo, sin los documentos.", "He arrived late and, to top it off, without the documents."],
          ["Por lo visto, van a cerrar la fábrica.", "Apparently, they're going to close the factory."],
        ],
        [
          mc(
            "«¿Te molesta? —___, al contrario.»",
            ["Para nada", "Por nada", "Por supuesto", "Para colmo"],
            0,
            "«Para nada» significa «en absoluto» y encaja con «al contrario». «Por nada» responde a «gracias», «Por supuesto» significaría que sí molesta y «Para colmo» añade algo negativo."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["por si acaso", "just in case"],
          ["para colmo", "to top it all off"],
          ["por lo visto", "apparently"],
          ["por las buenas o por las malas", "one way or another"],
        ],
        "Expresiones fijas."
      ),
      fb("Completa.", "___ fin terminó la reunión.", "Por", "«Por fin» es la locución fija que expresa alivio tras una espera."),
      fb("Completa.", "Esto no sirve ___ nada.", "para", "«Servir para» expresa utilidad o finalidad: «no sirve para nada»."),
      fb("Completa.", "Lo dijo ___ decir, sin pensarlo.", "por", "Por decir = sin intención real."),
      ms(
        "¿Qué expresiones son correctas?",
        ["por lo general", "para siempre", "por supuesto", "para supuesto"],
        [0, 1, 2],
        "«Para supuesto» no existe: la expresión fija es «por supuesto». «Por lo general», «para siempre» y «por supuesto» son locuciones correctas."
      ),
      toEs("Apparently, nobody knew anything.", "Por lo visto, nadie sabía nada.", "«Por lo visto» (= al parecer) presenta información que se sabe de oídas.", ["Al parecer, nadie sabía nada.", "Por lo visto nadie sabía nada."]),
      wo("Guarda una copia por si acaso se pierde el original.", "Por si acaso + indicativo.", "Keep a copy just in case the original gets lost."),
    ]
  ),
  L(
    "por-para-precision-6",
    "c1r-text-detective-contract",
    "Detective de textos: la cláusula del contrato",
    "Analiza una cláusula contractual y justifica cada por y para.",
    "7 min",
    [
      sec(
        "La cláusula",
        "Lee la cláusula antes de responder.",
        [
          ["El arrendatario se compromete a abonar la renta por meses anticipados.", "The tenant undertakes to pay the rent monthly in advance."],
          ["El contrato podrá rescindirse por cualquiera de las partes con un preaviso de treinta días.", "The contract may be terminated by either party with thirty days' notice."],
          ["La fianza se destinará a cubrir posibles desperfectos.", "The deposit will be used to cover possible damage."],
        ],
        [
          mt(
            "Relaciona cada preposición de la cláusula con su valor.",
            [
              ["por meses", "distribución / periodicidad"],
              ["por cualquiera de las partes", "agente de la pasiva"],
              ["a cubrir", "finalidad (régimen de destinar)"],
              ["por escrito", "medio"],
            ],
            "Valores de por y para en el lenguaje jurídico."
          ),
        ]
      ),
    ],
    [
      fb("Completa la cláusula.", "Las reparaciones serán asumidas ___ el propietario.", "por", "El agente de la pasiva se introduce con «por»: «asumidas por el propietario»."),
      fb("Completa la cláusula.", "Cualquier modificación deberá realizarse ___ escrito.", "por", "«Por escrito» es la locución fija para el medio: en un documento, no de palabra."),
      fb("Completa la cláusula.", "El inmueble se destinará exclusivamente ___ vivienda.", "a", "«Destinar» rige «a»: se destina algo a un uso, «destinarse a vivienda»."),
      fb("Completa la cláusula.", "El plazo ___ la entrega de llaves vence el día 30.", "para", "«Plazo para» + sustantivo indica el objetivo del plazo: «el plazo para la entrega»."),
      mc(
        "¿Qué frase es propia del lenguaje jurídico?",
        ["La presente cláusula será de aplicación a partir de la fecha de su firma.", "Esto vale desde que firmamos, ¿vale?", "Firmamos y ya está.", "La cláusula mola."],
        0,
        "«La presente cláusula será de aplicación…» usa fórmulas jurídicas («la presente», «ser de aplicación», futuro normativo). «¿Vale?», «y ya está» y «mola» son coloquialismos impropios de un contrato."
      ),
      toEs("The contract may be renewed by mutual agreement.", "El contrato podrá renovarse por mutuo acuerdo.", "«Por mutuo acuerdo» (o «de mutuo acuerdo») es la fórmula jurídica para «by mutual agreement».", ["El contrato podrá ser renovado de mutuo acuerdo.", "El contrato podrá renovarse de mutuo acuerdo."]),
      wo("En caso de impago, el arrendador podrá rescindir el contrato.", "En caso de + sustantivo (registro jurídico).", "In the event of non-payment, the landlord may terminate the contract."),
    ]
  ),
  L(
    "por-para-precision-6",
    "c1r-spiral-prepositions-register",
    "Repaso en espiral: preposiciones y registro",
    "Por y para, pasiva y conectores concesivos en textos profesionales.",
    "8 min",
    [
      sec(
        "Precisión en contexto",
        "Un texto profesional combina por/para con pasivas y concesivas. Cada elección tiene consecuencias de significado.",
        [
          ["Si bien la propuesta fue presentada por el equipo técnico, su aprobación depende de la dirección.", "Although the proposal was submitted by the technical team, its approval depends on management."],
        ],
        [
          fb("Completa.", "El proyecto fue financiado ___ fondos europeos.", "por", "Agente de la pasiva / medio."),
          fb("Completa.", "Pese ___ los retrasos, se cumplió el plazo.", "a", "La locución concesiva es «pese a» + sustantivo, equivalente a «a pesar de»."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ muy urgente que sea, necesita la firma del director.", "Por", "Por muy + adjetivo + que."),
      fb("Completa.", "La reunión se aplazó ___ la ausencia del ponente.", "por", "«Por» introduce la causa del aplazamiento: «por la ausencia del ponente»."),
      fb("Completa.", "Se han tomado medidas ___ evitar nuevos incidentes.", "para", "«Para» + infinitivo expresa la finalidad de las medidas: «para evitar»."),
      mc(
        "¿Qué frase es correcta?",
        ["Para ser un proyecto piloto, los resultados son prometedores.", "Por ser un proyecto piloto, los resultados son prometedores para.", "Para ser un proyecto piloto, los resultados son prometedores por.", "Por siendo piloto, prometedores."],
        0,
        "«Para» + infinitivo compara con lo esperado: teniendo en cuenta que es solo un piloto, los resultados son buenos. «Por ser» daría una causa y las otras dejan preposiciones colgando al final («para», «por»), y «Por siendo» es agramatical."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Por lo que respecta a los costes, no habrá cambios.", "El documento fue revisado por dos expertos.", "Aunque el plazo sea corto, lo cumpliremos.", "Necesitamos el informe por el lunes."],
        [0, 1, 2],
        "Un plazo se expresa con «para», así que «Necesitamos el informe por el lunes» es incorrecta: «para el lunes». Las demás son correctas: «por lo que respecta a», el agente «por dos expertos» y «aunque» + subjuntivo."
      ),
      toEs("Despite being expensive, the investment paid off.", "A pesar de ser cara, la inversión mereció la pena.", "«A pesar de» + infinitivo expresa concesión con el mismo sujeto: «a pesar de ser cara».", ["Pese a ser cara, la inversión valió la pena.", "Aunque era cara, la inversión mereció la pena."]),
      wo("Por consiguiente, se propone que el plazo sea ampliado.", "Conector + se impersonal + subjuntivo + pasiva.", "Consequently, it is proposed that the deadline be extended."),
    ]
  ),
  L(
    "ser-estar-haber-limits-part-1-mastery-check",
    "c1r-contrast-evaluative-estar",
    "Contraste: es / está con adjetivos valorativos",
    "Está guapísima hoy, es guapa; está muy joven para su edad — el estar evaluativo del C1.",
    "7 min",
    [
      sec(
        "La percepción del hablante",
        "Estar + adjetivo puede expresar una valoración subjetiva o una percepción del momento, incluso con adjetivos de cualidad: Esta sopa está salada (la percibo así), Tu hijo está altísimo (me sorprende).",
        [
          ["Es alto. / ¡Qué alto está tu hijo!", "He's tall. / How tall your son has gotten!"],
          ["Es joven. / Está muy joven para tener sesenta años.", "She's young. / She looks very young for sixty."],
        ],
        [
          mc(
            "No ves a tu prima desde hace años y te sorprende su cambio: «¡Qué mayor ___!»",
            ["estás", "eres", "hay", "has"],
            0,
            "Para expresar el cambio que percibes se usa «estar»: «¡Qué mayor estás!». «Eres mayor» sería un rasgo o una clasificación sin idea de cambio, y «hay» o «has» no pueden funcionar como copulativos."
          ),
        ]
      ),
    ],
    [
      fb("¿Ser o estar?", "Esta paella ___ buenísima; felicita al cocinero.", "está", "Valorar el sabor de un plato concreto se hace con «estar»: «está buenísima»."),
      fb("¿Ser o estar?", "La paella ___ un plato típico de Valencia.", "es", "Clasificar o definir algo se hace con «ser»: «es un plato típico»."),
      fb("¿Ser o estar?", "Con ese traje ___ muy elegante.", "estás", "Una impresión del momento («con ese traje») se expresa con «estar»: «estás elegante»."),
      fb("¿Ser o estar?", "Tu madre ___ muy elegante; siempre viste bien.", "es", "Una cualidad permanente («siempre viste bien») va con «ser»: «es elegante»."),
      mt(
        "Relaciona cada frase con su matiz.",
        [
          ["El agua es fría en este lago.", "característica general"],
          ["El agua está fría hoy.", "estado del momento"],
          ["Es muy delgado.", "complexión"],
          ["Está muy delgado.", "ha adelgazado (valoración)"],
        ],
        "Cualidad frente a percepción."
      ),
      toEs("You look great!", "¡Estás estupendo!", "Estar + adjetivo para una valoración del aspecto.", ["¡Estás genial!", "¡Estás estupenda!", "¡Qué bien estás!", "¡Estás guapísima!", "¡Estás guapísimo!"]),
      wo("La película es larga, pero no se hace pesada.", "Ser para la característica; hacerse pesado (percepción).", "The film is long, but it doesn't drag."),
    ]
  ),
  L(
    "ser-estar-haber-limits-part-1-mastery-check",
    "c1r-error-hunt-location-events",
    "Caza de errores: ubicación de eventos y objetos",
    "«La boda está en la iglesia», «hay la reunión», «el examen está a las diez» — corrige los casos límite.",
    "7 min",
    [
      sec(
        "Eventos con ser, objetos con estar",
        "El lugar o el momento de un evento se expresan con ser (tener lugar). La ubicación física de personas y objetos, con estar.",
        [
          ["✗ La conferencia está en el aula magna. → ✓ La conferencia es en el aula magna.", "The lecture is in the main hall."],
          ["✓ El conferenciante está en el aula magna.", "The speaker is in the main hall."],
        ],
        [
          fb("Corrige.", "La cena de empresa ___ en un hotel del centro. (el alumno escribió: está)", "es", "Los eventos se localizan con «ser», no con «estar»: «la cena es en un hotel»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿Dónde ___ la reunión de mañana? (el alumno escribió: está)", "es", "«La reunión» es un evento y se localiza con «ser»: «¿dónde es?»."),
      fb("Corrige.", "¿Dónde ___ los documentos de la reunión? (el alumno escribió: son)", "están", "Los objetos físicos se localizan con «estar»: «¿dónde están los documentos?»."),
      fb("Corrige.", "El concierto ___ a las nueve en el parque. (el alumno escribió: está)", "es", "Un evento se sitúa en tiempo y lugar con «ser»: «el concierto es a las nueve»."),
      ms(
        "¿Qué frases tienen un error?",
        ["La boda fue en una ermita.", "Los novios estaban en la ermita.", "El accidente estuvo en la autopista.", "Hay una fiesta en casa de Ana."],
        [2],
        "Un accidente es un evento y se localiza con «ser»: «el accidente fue en la autopista», así que «estuvo» es el error. «La boda fue en una ermita» (evento con «ser»), «Los novios estaban» (personas con «estar») y «Hay una fiesta» son correctas."
      ),
      mc(
        "¿Cuál es correcta?",
        ["El partido será en el estadio nuevo.", "El partido estará en el estadio nuevo.", "El partido habrá en el estadio nuevo.", "El partido está siendo en el estadio."],
        0,
        "Un evento se localiza con «ser»: «El partido será en el estadio nuevo». «Estará» lo trataría como objeto, «habrá» exigiría quitar el artículo («habrá partido») y «está siendo» se usa para acciones en curso, no para localizar."
      ),
      toEs("The exam is in room 5, but the teacher is in the office.", "El examen es en el aula 5, pero la profesora está en el despacho.", "Evento → ser; persona → estar.", ["El examen es en el aula 5, pero el profesor está en el despacho."]),
      wo("La presentación será en la sala donde estuvimos ayer.", "Ser (evento) + estar (personas).", "The presentation will be in the room where we were yesterday."),
    ]
  ),
  L(
    "ser-estar-haber-limits-part-2-2",
    "c1r-contrast-hybrid-cases",
    "Contraste: es claro / está claro, es bueno / está bueno",
    "Los casos híbridos donde ser y estar comparten terreno pero no significado.",
    "7 min",
    [
      sec(
        "Pares con matiz",
        "Está claro que (es evidente) / Es claro (de color o de estilo). Es bueno (de calidad, bondadoso) / Está bueno (sabroso; coloquial: atractivo). Es seguro (sin riesgo) / Está seguro (convencido).",
        [
          ["Está claro que no quiere venir.", "It's clear he doesn't want to come."],
          ["Es un azul muy claro.", "It's a very light blue."],
          ["Es seguro viajar allí. / Estoy seguro de que vendrá.", "It's safe to travel there. / I'm sure he'll come."],
        ],
        [
          mc(
            "«___ seguro de que lo he dejado aquí.»",
            ["Estoy", "Soy", "Es", "Hay"],
            0,
            "«Estar seguro» significa estar convencido; «ser seguro» significa no tener riesgo. «Soy seguro» no expresa convicción, y «es» o «hay» no concuerdan con el sujeto de primera persona."
          ),
        ]
      ),
    ],
    [
      fb("¿Ser o estar?", "Este barrio ___ muy seguro; se puede pasear de noche.", "es", "«Ser seguro» describe un lugar sin peligro; «estar seguro» sería estar convencido."),
      fb("¿Ser o estar?", "No ___ seguro de haber cerrado la puerta.", "estoy", "«Estar seguro de» significa estar convencido de algo: «no estoy seguro»."),
      fb("¿Ser o estar?", "Ya ___ claro que no nos van a pagar.", "está", "«Estar claro» presenta algo como evidente a partir de lo observado: «ya está claro que…»."),
      fb("¿Ser o estar?", "Este vino ___ bueno; es de una bodega famosa.", "es", "«Ser bueno» valora la calidad estable del vino; «está bueno» valoraría cómo sabe en un momento dado."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Es vivo.", "Es espabilado, listo."],
          ["Está vivo.", "No ha muerto."],
          ["Es interesado.", "Solo piensa en su beneficio."],
          ["Está interesado.", "Tiene interés en algo."],
        ],
        "Pares que cambian de significado."
      ),
      toEs("It's obvious that he's lying.", "Está claro que miente.", "«Está claro que» afirma una evidencia y va con indicativo: «está claro que miente».", ["Es evidente que miente.", "Está claro que está mintiendo."]),
      wo("No está nada claro que el proyecto sea viable.", "No estar claro que + subjuntivo (duda).", "It's not at all clear that the project is viable."),
    ]
  ),
  L(
    "ser-estar-haber-limits-part-2-2",
    "c1r-transform-haber-estar-tener",
    "Transformaciones: haber, estar y tener",
    "Existencia, localización y posesión: reformula la misma realidad con cada verbo.",
    "7 min",
    [
      sec(
        "Tres perspectivas",
        "Hay (existencia, algo nuevo), está(n) (localización de algo conocido), tiene (posesión o característica).",
        [
          ["Hay una piscina en el hotel. → El hotel tiene piscina.", "There's a pool at the hotel. → The hotel has a pool."],
          ["La piscina está en la azotea.", "The pool is on the roof."],
        ],
        [
          fb("Reformula con tener.", "En la ciudad hay tres museos. → La ciudad ___ tres museos.", "tiene", "«Tener» presenta los museos como característica de la ciudad: «la ciudad tiene tres museos»."),
        ]
      ),
    ],
    [
      fb("Reformula con haber.", "El pueblo tiene una iglesia románica. → En el pueblo ___ una iglesia románica.", "hay", "«Hay» (haber impersonal) expresa la existencia de algo en un lugar: «en el pueblo hay…»."),
      fb("Reformula con estar.", "Hay una iglesia en la plaza (la del pueblo). → La iglesia ___ en la plaza.", "está", "Una entidad ya identificada («la iglesia del pueblo») se localiza con «estar», no con «hay»."),
      fb("Reformula con haber (pasado).", "La casa tenía un jardín enorme. → En la casa ___ un jardín enorme.", "había", "«Haber» impersonal en imperfecto expresa existencia en el pasado: «había un jardín»."),
      mc(
        "¿Cuál es correcta?",
        ["En la reunión había veinte personas.", "En la reunión habían veinte personas.", "En la reunión estaban veinte personas indefinidas.", "La reunión había veinte personas."],
        0,
        "«Haber» impersonal no tiene sujeto y va siempre en singular: «había veinte personas». «Habían» concuerda por error con el complemento, «estaban veinte personas» usa «estar» con un grupo indeterminado y «La reunión había…» convierte «reunión» en sujeto de «haber», imposible."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Tengo hambre.", "Hay que tener paciencia.", "Está un problema con el ordenador.", "Hubo una tormenta anoche."],
        [0, 1, 3],
        "Algo nuevo e indeterminado se presenta con «hay», no con «estar»: «hay un problema con el ordenador», así que «Está un problema…» es incorrecta. «Tengo hambre», «Hay que tener paciencia» y «Hubo una tormenta» son correctas."
      ),
      toEs("There will be more people than expected.", "Habrá más gente de la esperada.", "«Haber» impersonal en futuro, siempre en singular: «habrá más gente».", ["Habrá más gente de lo esperado.", "Habrá más personas de las esperadas."]),
      wo("El edificio donde está la oficina tiene veinte plantas.", "Estar (localización) + tener (característica).", "The building where the office is has twenty floors."),
    ]
  ),
  L(
    "ser-estar-haber-limits-part-2-mastery-check",
    "c1r-mission-real-estate-listing",
    "Misión real: el anuncio inmobiliario de lujo",
    "Redacta un anuncio preciso: qué es, cómo está, dónde está, qué hay y qué tiene.",
    "7 min",
    [
      sec(
        "El anuncio",
        "Los anuncios inmobiliarios exigen precisión con ser, estar, haber y tener.",
        [
          ["Es una vivienda de estilo modernista que está totalmente reformada.", "It's a modernist-style home that is fully renovated."],
          ["Está situada en pleno centro y tiene vistas al mar.", "It's located right downtown and has sea views."],
          ["En la planta baja hay un local comercial.", "On the ground floor there's a commercial space."],
        ],
        [
          fb("Completa el anuncio.", "El ático ___ orientado al sur y recibe luz todo el día.", "está", "«Estar orientado» describe la situación u orientación del ático: «está orientado al sur»."),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "La finca ___ de 1920, aunque se ha rehabilitado recientemente.", "es", "«Ser de» + fecha indica origen o época: «la finca es de 1920»."),
      fb("Completa el anuncio.", "En la zona ___ colegios, parques y transporte público.", "hay", "Para presentar la existencia de elementos indeterminados se usa «hay»."),
      fb("Completa el anuncio.", "El piso ___ amueblado y listo para entrar a vivir.", "está", "«Estar amueblado» describe el estado actual del piso, resultado de amueblarlo."),
      fb("Completa el anuncio.", "La vivienda ___ tres dormitorios y dos baños.", "tiene", "«Tener» presenta las partes o características de la vivienda: «tiene tres dormitorios»."),
      mt(
        "Relaciona cada rasgo con su verbo.",
        [
          ["de estilo colonial", "ser"],
          ["a cinco minutos de la playa", "estar"],
          ["una piscina comunitaria", "haber"],
          ["garaje propio", "tener"],
        ],
        "Cuatro verbos para describir una vivienda."
      ),
      toEs("It's a bright apartment that is in perfect condition.", "Es un piso luminoso que está en perfecto estado.", "«Ser» para la característica («es un piso luminoso») y «estar» para el estado («está en perfecto estado»).", ["Es un apartamento luminoso que está en perfecto estado.", "Se trata de un piso luminoso que está en perfecto estado."]),
      wo("Se trata de una oportunidad única que no estará disponible por mucho tiempo.", "Tratarse de + relativa con estar.", "It's a unique opportunity that won't be available for long."),
    ]
  ),
  L(
    "ser-estar-haber-limits-part-2-mastery-check",
    "c1r-spiral-copulative-c1",
    "Repaso en espiral: los verbos copulativos en el C1",
    "Ser, estar, haber, verbos de cambio y pasivas: la precisión que distingue a un hablante avanzado.",
    "8 min",
    [
      sec(
        "Precisión máxima",
        "Cada checkpoint mezcla ser/estar/haber con verbos de cambio o con la pasiva.",
        [
          ["El pueblo, que antes era tranquilo, se ha convertido en un destino turístico y está siempre lleno.", "The village, which used to be quiet, has become a tourist destination and is always packed."],
        ],
        [
          fb("Completa.", "Desde que ganó el premio, ___ un escritor muy conocido. (volverse/hacerse, perfecto)", "se ha hecho", "Hacerse + adjetivo/sustantivo (proceso de logro)."),
          fb("Completa.", "La obra ___ estrenada en 2010 y desde entonces sigue en cartel. (ser, pretérito)", "fue", "Acción puntual → pasiva con ser."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando llegamos, la tienda ya ___ cerrada.", "estaba", "«Estar» + participio describe el estado resultante: «ya estaba cerrada»."),
      fb("Completa.", "Esa decisión ___ tomada sin consultar a nadie. (ser, pretérito)", "fue", "Pasiva de acción con «ser» en pretérito: «fue tomada»."),
      fb("Completa.", "Al oír la noticia, ___ pálido. (ponerse, pretérito)", "se puso", "«Ponerse» + adjetivo expresa un cambio momentáneo de estado: «se puso pálido»."),
      mc(
        "«The situation has become unbearable.»",
        ["La situación se ha vuelto insoportable.", "La situación se ha puesto de insoportable.", "La situación ha hecho insoportable.", "La situación está volviendo insoportable."],
        0,
        "«Volverse» + adjetivo expresa un cambio profundo o duradero: «se ha vuelto insoportable». «Ponerse de» + adjetivo es agramatical, «ha hecho insoportable» necesita un complemento («ha hecho la vida insoportable») y «está volviendo» sin «se» no es pronominal."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Está claro que hay un error.", "El problema está resuelto.", "Hubo muchas quejas.", "La fiesta estuvo en el jardín."],
        [0, 1, 2],
        "La fiesta es un evento y se localiza con «ser»: «la fiesta fue en el jardín», así que «estuvo» es el error. «Está claro que…», «El problema está resuelto» y «Hubo muchas quejas» son correctas."
      ),
      toEs("There was a time when this neighborhood was dangerous.", "Hubo una época en que este barrio era peligroso.", "Hubo (existencia) + era (característica en el pasado).", ["Hubo una época en la que este barrio era peligroso.", "Hubo un tiempo en que este barrio era peligroso."]),
      wo("Lo que antes era un taller abandonado ahora es un centro cultural.", "Lo que + ser en dos tiempos.", "What used to be an abandoned workshop is now a cultural center."),
    ]
  ),
  L(
    "prepositional-verbs-part-1-mastery-check",
    "c1r-sort-prepositional-verbs",
    "Clasificación: verbos con a, de, en y con",
    "Agrupa verbos por su preposición y úsalos en contexto — la mejor forma de fijar el régimen verbal.",
    "7 min",
    [
      sec(
        "Por familias",
        "Con a: acostumbrarse, atreverse, negarse, dedicarse. Con de: depender, acordarse, darse cuenta, arrepentirse. Con en: confiar, insistir, fijarse, tardar. Con con: soñar, contar, casarse, conformarse.",
        [
          ["Me niego a firmar eso.", "I refuse to sign that."],
          ["No me acordaba de su nombre.", "I couldn't remember his name."],
          ["Insistió en pagar la cuenta.", "She insisted on paying the bill."],
          ["Cuento contigo.", "I'm counting on you."],
        ],
        [
          ms(
            "¿Qué verbos rigen la preposición en?",
            ["confiar", "tardar", "fijarse", "atreverse"],
            [0, 1, 2],
            "«Confiar en», «tardar en» y «fijarse en» rigen «en». «Atreverse» rige «a»: «atreverse a hacer algo»."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se dedica ___ la investigación genética.", "a", "«Dedicarse» rige «a»: «se dedica a la investigación»."),
      fb("Completa.", "No me di cuenta ___ la hora.", "de", "«Darse cuenta» rige «de»: «no me di cuenta de la hora»."),
      fb("Completa.", "Siempre ha soñado ___ vivir junto al mar.", "con", "«Soñar» rige «con», no «de» (calco del inglés «dream of»)."),
      fb("Completa.", "¿Te has fijado ___ lo cansado que está?", "en", "«Fijarse» (prestar atención) rige «en»: «¿te has fijado en…?»."),
      mt(
        "Relaciona cada verbo con su preposición.",
        [
          ["depender", "de"],
          ["conformarse", "con"],
          ["negarse", "a"],
          ["consistir", "en"],
        ],
        "Régimen preposicional."
      ),
      toEs("It depends on the weather.", "Depende del tiempo.", "Depender de + el → del.", ["Depende del clima.", "Eso depende del tiempo."]),
      wo("Tardó más de una hora en darse cuenta del error.", "Tardar en + darse cuenta de.", "It took him more than an hour to notice the mistake."),
    ]
  ),
  L(
    "prepositional-verbs-part-1-mastery-check",
    "c1r-contrast-meaning-by-preposition",
    "Contraste: el verbo cambia con la preposición",
    "Pensar en / pensar de, dar con / dar a, acabar con / acabar de — la preposición cambia el significado.",
    "7 min",
    [
      sec(
        "Pares que engañan",
        "Pensar en (tener en la mente) / pensar de (opinar). Dar con (encontrar) / dar a (tener vistas a). Acabar con (eliminar) / acabar de (hacer algo hace poco). Quedar en (acordar) / quedar con (citarse).",
        [
          ["Pienso mucho en ti. / ¿Qué piensas de él?", "I think about you a lot. / What do you think of him?"],
          ["Por fin di con la solución. / La ventana da al jardín.", "I finally found the solution. / The window faces the garden."],
          ["Quedamos en vernos el lunes. / He quedado con Ana.", "We agreed to meet on Monday. / I've arranged to meet Ana."],
        ],
        [
          mc(
            "«¿Qué opinas? ¿Qué piensas ___ la propuesta?»",
            ["de", "en", "con", "a"],
            0,
            "«Pensar de» pide o expresa una opinión: «¿qué piensas de la propuesta?». «Pensar en» es tener algo en la mente, y «pensar con» o «pensar a» no se usan con este sentido."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Esta ley pretende acabar ___ la corrupción.", "con", "«Acabar con» significa eliminar o poner fin a algo: «acabar con la corrupción»."),
      fb("Completa.", "Acabo ___ enterarme de la noticia.", "de", "Acabar de = hace muy poco."),
      fb("Completa.", "Quedamos ___ hablarlo mañana.", "en", "«Quedar en» significa acordar algo: «quedamos en hablarlo mañana»."),
      fb("Completa.", "Después de horas buscando, dimos ___ el problema.", "con", "«Dar con» significa encontrar algo tras buscarlo: «dimos con el problema»."),
      mt(
        "Relaciona cada verbo con su significado.",
        [
          ["dar a", "tener vistas a"],
          ["dar con", "encontrar"],
          ["quedar con", "citarse"],
          ["quedar en", "acordar"],
        ],
        "La preposición cambia el significado."
      ),
      toEs("I've arranged to meet my sister at eight.", "He quedado con mi hermana a las ocho.", "«Quedar con» alguien significa citarse con esa persona.", ["Quedé con mi hermana a las ocho.", "He quedado con mi hermana a las 8."]),
      wo("La habitación da a un patio interior muy tranquilo.", "Dar a = tener vistas a.", "The room overlooks a very quiet inner courtyard."),
    ]
  ),
  L(
    "prepositional-verbs-part-2-2",
    "c1r-error-hunt-interference",
    "Caza de errores: la interferencia del inglés",
    "«Depende en», «consiste de», «enamorarse con», «soñar de» — los calcos más frecuentes.",
    "7 min",
    [
      sec(
        "Calcos típicos",
        "Depend on → depender de (no en). Consist of → consistir en (no de). Fall in love with → enamorarse de (no con). Dream of → soñar con (no de). Think about → pensar en.",
        [
          ["✗ Depende en ti. → ✓ Depende de ti.", "It depends on you."],
          ["✗ Se enamoró con su profesor. → ✓ Se enamoró de su profesor.", "She fell in love with her teacher."],
        ],
        [
          fb("Corrige.", "El examen consiste ___ tres partes. (el alumno escribió: de)", "en", "«Consistir» rige «en», no «de» (calco del inglés «consist of»)."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Anoche soñé ___ mi abuela. (el alumno escribió: de)", "con", "«Soñar con» es el régimen correcto; «soñar de» es un calco del inglés o del francés."),
      fb("Corrige.", "Estoy pensando ___ cambiar de trabajo. (el alumno escribió: sobre)", "en", "«Pensar en» + infinitivo expresa la intención de hacer algo; «pensar sobre» es un calco."),
      fb("Corrige.", "Se casó ___ una compañera de clase. (el alumno escribió: a)", "con", "«Casarse» rige «con»: «se casó con una compañera»."),
      ms(
        "¿Qué frases tienen un error de preposición?",
        ["Me alegro de verte.", "Consiste de dos fases.", "Me olvidé de llamarte.", "Se enamoró con ella."],
        [1, 3],
        "«Consiste de» y «se enamoró con» son errores: lo correcto es «consistir en» y «enamorarse de». «Me alegro de verte» y «Me olvidé de llamarte» usan bien sus preposiciones."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Tardé tres horas en terminarlo.", "Tardé tres horas para terminarlo.", "Tardé tres horas a terminarlo.", "Tardé tres horas de terminarlo."],
        0,
        "«Tardar» + tiempo rige «en» + infinitivo: «tardé tres horas en terminarlo». «Para», «a» o «de» son calcos o errores frecuentes de régimen."
      ),
      toEs("It's up to you.", "Depende de ti.", "«Depender» rige «de»: «depende de ti» (no «depende en», calco de «depend on»).", ["Eso depende de ti.", "La decisión depende de ti."]),
      wo("Nadie se atrevió a contradecir al director.", "Atreverse a + infinitivo.", "Nobody dared to contradict the director."),
    ]
  ),
  L(
    "prepositional-verbs-part-2-2",
    "c1r-transform-queismo-dequeismo",
    "Transformaciones: queísmo y dequeísmo",
    "«Me acuerdo que» (queísmo) y «pienso de que» (dequeísmo): aprende cuándo va de que y cuándo solo que.",
    "8 min",
    [
      sec(
        "La prueba de la sustitución",
        "Sustituye la oración por eso: si el verbo pide de + eso, se escribe de que (me acuerdo de eso → me acuerdo de que). Si no, solo que (pienso eso → pienso que).",
        [
          ["✗ Me acuerdo que… → ✓ Me acuerdo de que…", "I remember that… (queísmo)"],
          ["✗ Pienso de que… → ✓ Pienso que…", "I think that… (dequeísmo)"],
        ],
        [
          fb("Corrige.", "Estoy seguro ___ que vendrá. (el alumno escribió: que)", "de", "Estar seguro de eso → estoy seguro de que."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Me di cuenta ___ que nadie me escuchaba. (el alumno escribió: que)", "de", "Darse cuenta de eso → de que."),
      fb("Corrige.", "Creo ___ tienes razón. (el alumno escribió: de que)", "que", "«Creer» es transitivo (creo eso), así que no lleva «de»: «creo que». «Creo de que» es dequeísmo."),
      fb("Corrige.", "Insistió ___ que nos quedáramos. (el alumno escribió: que)", "en", "Insistir en eso → en que."),
      fb("Corrige.", "Me dijo ___ llegaría tarde. (el alumno escribió: de que)", "que", "Se dice «decir algo», no «decir de algo»: «me dijo que». «Dijo de que» es dequeísmo."),
      ms(
        "¿Qué frases son correctas?",
        ["Tengo miedo de que se pierda.", "Es posible de que llueva.", "Me alegro de que hayas venido.", "Opino de que es un error."],
        [0, 2],
        "«Es posible de que» y «Opino de que» son dequeísmo: se dice «es posible que» y «opino que». «Tener miedo de que» y «alegrarse de que» sí llevan «de», porque se dice «tener miedo de algo» y «alegrarse de algo»."
      ),
      mc(
        "¿Cuál es correcta?",
        ["No cabe duda de que es el mejor.", "No cabe duda que de es el mejor.", "No cabe de duda que es el mejor.", "No cabe duda de es el mejor."],
        0,
        "Se dice «no cabe duda de algo», así que la forma correcta es «no cabe duda de que». Las otras colocan mal «de» o «que», o suprimen el «que» obligatorio."
      ),
      wo("Me enteré de que habían cancelado el vuelo.", "Enterarse de que.", "I found out that they had canceled the flight."),
    ]
  ),
  L(
    "prepositional-verbs-part-2-mastery-check",
    "c1r-mission-cover-letter-verbs",
    "Misión real: la carta de motivación",
    "Redacta una carta de motivación con verbos preposicionales precisos: aspirar a, contar con, destacar por…",
    "7 min",
    [
      sec(
        "Los verbos del currículum",
        "Aspirar a, contar con, destacar por, dedicarse a, especializarse en, encargarse de, interesarse por, adaptarse a.",
        [
          ["Aspiro a un puesto en el que pueda crecer profesionalmente.", "I'm aiming for a position where I can grow professionally."],
          ["Cuento con cinco años de experiencia en el sector.", "I have five years' experience in the sector."],
          ["Me encargué de coordinar un equipo de diez personas.", "I was in charge of coordinating a team of ten."],
        ],
        [
          fb("Completa la carta.", "Me especialicé ___ marketing digital.", "en", "«Especializarse» rige «en»: «me especialicé en marketing digital»."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Siempre me he interesado ___ la sostenibilidad.", "por", "«Interesarse» rige «por»: «me he interesado por…» (con «interesado en» también se oye, pero la forma verbal pide «por»)."),
      fb("Completa la carta.", "Me adapto fácilmente ___ nuevos entornos.", "a", "«Adaptarse» rige «a»: «me adapto a nuevos entornos»."),
      fb("Completa la carta.", "Destaco ___ mi capacidad de trabajo en equipo.", "por", "«Destacar por» indica la cualidad que sobresale: «destaco por mi capacidad…»."),
      fb("Completa la carta.", "Estaría encantado ___ ampliar esta información en una entrevista.", "de", "«Estar encantado» rige «de» + infinitivo: «estaría encantado de ampliar…»."),
      mt(
        "Relaciona cada verbo con su preposición.",
        [
          ["aspirar", "a"],
          ["encargarse", "de"],
          ["contar", "con"],
          ["especializarse", "en"],
        ],
        "Régimen verbal del lenguaje profesional."
      ),
      toEs("I'm confident that I can contribute to the company's growth.", "Confío en que puedo contribuir al crecimiento de la empresa.", "Confiar en que + indicativo; contribuir a.", ["Confío en poder contribuir al crecimiento de la empresa.", "Estoy seguro de que puedo contribuir al crecimiento de la empresa."]),
      wo("Quedo a la espera de sus noticias y les agradezco su atención.", "Quedar a la espera de.", "I look forward to hearing from you and thank you for your attention."),
    ]
  ),
  L(
    "prepositional-verbs-part-2-mastery-check",
    "c1r-spiral-verbs-subjunctive",
    "Repaso en espiral: régimen verbal y subjuntivo",
    "Verbos preposicionales que introducen oraciones con que: insistir en que, contar con que, confiar en que…",
    "8 min",
    [
      sec(
        "Preposición + que + ¿qué modo?",
        "Insistir en que + subjuntivo (influencia) o indicativo (afirmar). Contar con que + subjuntivo (esperar algo) o indicativo (dar por hecho). Confiar en que + subjuntivo (deseo) o indicativo (certeza).",
        [
          ["Insistió en que nos quedáramos.", "She insisted that we stay. (influencia)"],
          ["Insistió en que era inocente.", "He insisted that he was innocent. (afirmación)"],
        ],
        [
          fb("Completa.", "Confío en que ___ bien el examen. (salirte)", "te salga", "«Confiar en que» expresa esperanza sobre algo futuro y lleva subjuntivo: «te salga»."),
        ]
      ),
    ],
    [
      fb("Completa.", "El acusado insiste en que no ___ nada. (hacer, pluscuamperfecto de indicativo)", "había hecho", "Afirmación de un hecho → indicativo."),
      fb("Completa.", "Me opongo a que ___ el parque. (cerrar, ellos)", "cierren", "«Oponerse a que» expresa rechazo de la acción de otros y exige subjuntivo: «cierren»."),
      fb("Completa.", "No cuentes con que te ___ ayudar. (ir, ellos)", "vayan", "Contar con que (expectativa) + subjuntivo."),
      fb("Completa.", "Me acuerdo de que ___ un día precioso. (hacer, imperfecto)", "hacía", "Acordarse de que + indicativo (recuerdo)."),
      mc(
        "¿Cuál es correcta?",
        ["Se negó a que lo acompañáramos.", "Se negó a que lo acompañábamos.", "Se negó que lo acompañáramos.", "Se negó de que lo acompañáramos."],
        0,
        "«Negarse» rige «a», y cuando cambia el sujeto va con «que» + subjuntivo: «se negó a que lo acompañáramos». «Acompañábamos» es indicativo, «Se negó que» omite la preposición y «de que» usa la preposición equivocada."
      ),
      toEs("I'm counting on you to be there.", "Cuento con que estés allí.", "«Contar con que» expresa expectativa sobre otra persona y lleva subjuntivo: «cuento con que estés».", ["Cuento con que estés ahí.", "Cuento contigo para que estés allí."]),
      wo("Me alegro de que por fin te hayas atrevido a dar el paso.", "Alegrarse de que + perfecto de subjuntivo + atreverse a.", "I'm glad you finally dared to take the plunge."),
    ]
  ),
  L(
    "advanced-discourse-markers-2",
    "c1r-transform-ahora-bien",
    "Transformaciones: matizar con ahora bien y dicho esto",
    "Convierte un simple «pero» en una matización elegante: ahora bien, dicho esto, eso sí, con todo.",
    "7 min",
    [
      sec(
        "Matizar tras conceder",
        "Ahora bien y dicho esto introducen una restricción tras reconocer algo. Eso sí añade una condición o salvedad. Con todo equivale a «a pesar de todo».",
        [
          ["El plan es bueno. Ahora bien, es caro.", "The plan is good. That said, it's expensive."],
          ["Puedes ir; eso sí, vuelve antes de las doce.", "You can go; just make sure you're back before twelve."],
        ],
        [
          fb("Matiza.", "La propuesta es interesante; ___ bien, carece de financiación.", "ahora", "Ahora bien = however, that said."),
        ]
      ),
    ],
    [
      fb("Matiza.", "Te presto el coche; eso ___, llénale el depósito.", "sí", "Eso sí = but mind you."),
      fb("Matiza.", "Hay muchos problemas. ___ todo, seguimos adelante.", "Con", "«Con todo» (= aun así) introduce una conclusión a pesar de lo dicho."),
      fb("Matiza.", "Es un buen candidato. Dicho ___, hay otros con más experiencia.", "esto", "«Dicho esto» cierra lo anterior y da paso a un matiz; equivale a «that said»."),
      mt(
        "Relaciona cada marcador con su función.",
        [
          ["ahora bien", "restricción tras conceder"],
          ["eso sí", "salvedad o condición"],
          ["con todo", "a pesar de lo anterior"],
          ["dicho esto", "transición con matiz"],
        ],
        "Marcadores de matización."
      ),
      mc(
        "¿Qué marcador encaja? «Tienes razón en lo básico; ___, hay detalles que revisar.»",
        ["ahora bien", "por consiguiente", "en primer lugar", "es decir"],
        0,
        "«Ahora bien» introduce una restricción tras conceder («tienes razón en lo básico»). «Por consiguiente» introduciría una consecuencia, «en primer lugar» abriría una enumeración y «es decir» una reformulación."
      ),
      toEs("It's a good idea; that said, we need more time.", "Es una buena idea; dicho esto, necesitamos más tiempo.", "«Dicho esto» (o «ahora bien») concede y da paso al matiz: «dicho esto, necesitamos más tiempo».", ["Es una buena idea; ahora bien, necesitamos más tiempo.", "Es buena idea; dicho esto, necesitamos más tiempo."]),
      wo("Acepto tu propuesta; eso sí, con una condición.", "Eso sí = salvedad.", "I accept your proposal; but with one condition."),
    ]
  ),
  L(
    "advanced-discourse-markers-2",
    "c1r-mission-report-highlighting",
    "Misión real: destacar lo importante en un informe",
    "Cabe destacar, conviene precisar, merece la pena señalar — subraya datos en un informe profesional.",
    "7 min",
    [
      sec(
        "Subrayar con elegancia",
        "Cabe destacar que, conviene precisar que, cabe señalar que, merece la pena subrayar que, es preciso recordar que.",
        [
          ["Cabe destacar que las ventas han crecido un 20 %.", "It's worth highlighting that sales have grown by 20%."],
          ["Conviene precisar que estos datos son provisionales.", "It should be noted that these figures are provisional."],
        ],
        [
          fb("Completa.", "___ señalar que el plazo vence el lunes.", "Cabe", "«Cabe» + infinitivo es una fórmula formal para destacar algo: «cabe señalar que…»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Conviene ___ que no todos los datos están verificados. (precisar)", "precisar", "«Conviene» + infinitivo introduce una aclaración recomendable: «conviene precisar que…»."),
      fb("Completa.", "Merece la ___ subrayar el esfuerzo del equipo.", "pena", "La expresión fija es «merecer la pena» (en América, más «valer la pena»)."),
      fb("Completa.", "Es preciso ___ que el presupuesto es limitado. (recordar)", "recordar", "«Es preciso» + infinitivo (= es necesario) es una fórmula formal: «es preciso recordar»."),
      mc(
        "¿Qué fórmula NO es propia de un informe formal?",
        ["Ojo, que esto es importante.", "Cabe destacar que…", "Conviene precisar que…", "Merece la pena señalar que…"],
        0,
        "«Ojo, que esto es importante» es coloquial y oral, impropio de un informe. «Cabe destacar que», «Conviene precisar que» y «Merece la pena señalar que» son fórmulas formales para resaltar información."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Cabe destacar la participación de los vecinos.", "Conviene tener en cuenta que el coste es alto.", "Cabe de destacar que…", "Es preciso señalar que los resultados son positivos."],
        [0, 1, 3],
        "«Cabe destacar» no lleva «de», así que «Cabe de destacar que…» es incorrecta. Las demás usan bien las fórmulas: «cabe destacar», «conviene tener en cuenta» y «es preciso señalar»."
      ),
      toEs("It should be noted that the survey was anonymous.", "Cabe señalar que la encuesta fue anónima.", "«Cabe señalar que» introduce un dato que se presenta como hecho, por eso lleva indicativo.", ["Conviene precisar que la encuesta fue anónima.", "Hay que señalar que la encuesta era anónima."]),
      wo("Cabe destacar que ningún participante abandonó el estudio.", "Cabe destacar + indicativo.", "It is worth highlighting that no participant left the study."),
    ]
  ),
  L(
    "advanced-discourse-markers-4",
    "c1r-contrast-conclusion-markers",
    "Contraste: en definitiva, en última instancia, al fin y al cabo",
    "Tres formas de cerrar un argumento con matices distintos: resumen, decisión final, verdad de fondo.",
    "7 min",
    [
      sec(
        "Cerrar con precisión",
        "En definitiva: resumen conclusivo. En última instancia: la decisión o el factor final. Al fin y al cabo: recuerda una verdad de fondo que justifica algo.",
        [
          ["En definitiva, el proyecto es viable.", "In short, the project is viable."],
          ["En última instancia, la decisión es del consejo.", "Ultimately, the decision rests with the board."],
          ["No te enfades con él; al fin y al cabo, es tu hermano.", "Don't be angry with him; after all, he's your brother."],
        ],
        [
          mc(
            "«No le des tanta importancia; ___, solo es un examen.»",
            ["al fin y al cabo", "en última instancia", "por consiguiente", "a saber"],
            0,
            "«Al fin y al cabo» introduce una verdad de fondo que relativiza lo anterior. «En última instancia» remite a la decisión final, «por consiguiente» a una consecuencia y «a saber» introduce una enumeración."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En ___ instancia, será el juez quien decida.", "última", "«En última instancia» significa «como último recurso, al final de todo»."),
      fb("Completa.", "En ___, no hay razones para cambiar de estrategia.", "definitiva", "«En definitiva» resume y cierra un razonamiento."),
      fb("Completa.", "Perdónalo; al fin y al ___, todos cometemos errores.", "cabo", "La locución fija es «al fin y al cabo» (= después de todo)."),
      mt(
        "Relaciona cada marcador con su función.",
        [
          ["en definitiva", "resumir y concluir"],
          ["en última instancia", "señalar el factor decisivo"],
          ["al fin y al cabo", "recordar una verdad de fondo"],
          ["a fin de cuentas", "sinónimo de al fin y al cabo"],
        ],
        "Marcadores de conclusión."
      ),
      ms(
        "¿Qué frases son naturales?",
        ["En definitiva, estamos ante una oportunidad única.", "Al fin y al cabo, el dinero no lo es todo.", "En última instancia, dependerá del presupuesto.", "En definitiva, para empezar, veamos el primer punto."],
        [0, 1, 2],
        "«En definitiva» cierra o resume, así que no puede abrir una enumeración con «para empezar». Las demás son naturales: «en definitiva» como resumen, «al fin y al cabo» como verdad de fondo y «en última instancia» como decisión final."
      ),
      toEs("After all, it's only a game.", "Al fin y al cabo, solo es un juego.", "«Al fin y al cabo» (o «a fin de cuentas») traduce «after all».", ["A fin de cuentas, solo es un juego.", "Al fin y al cabo, no es más que un juego."]),
      wo("En definitiva, lo que está en juego es la confianza de los ciudadanos.", "En definitiva + lo que + estar en juego.", "In short, what's at stake is citizens' trust."),
    ]
  ),
  L(
    "advanced-discourse-markers-4",
    "c1r-error-hunt-risk-markers",
    "Caza de errores: so pena de, a riesgo de, bajo pena de",
    "Marcadores de advertencia y riesgo: construcción, significado y registro.",
    "7 min",
    [
      sec(
        "Advertir del riesgo",
        "So pena de + infinitivo (literario: con el riesgo de sufrir). A riesgo de + infinitivo (aceptando el riesgo de). Bajo pena de + sustantivo (jurídico: bajo sanción de).",
        [
          ["Debemos actuar ya, so pena de perderlo todo.", "We must act now, or risk losing everything."],
          ["A riesgo de parecer pesado, lo repetiré.", "At the risk of sounding tiresome, I'll repeat it."],
          ["Queda prohibido fumar, bajo pena de multa.", "Smoking is prohibited, subject to a fine."],
        ],
        [
          fb("Corrige.", "A riesgo ___ equivocarme, diré que no. (el alumno escribió: a)", "de", "La locución es «a riesgo de» + infinitivo: asumo el riesgo de equivocarme."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Es obligatorio llevar casco, ___ pena de sanción. (el alumno escribió: sobre)", "bajo", "La fórmula normativa es «bajo pena de» + sustantivo (con la amenaza de una sanción)."),
      fb("Corrige.", "Hay que decidir hoy, ___ pena de perder la oferta. (registro literario; el alumno escribió: sin)", "so", "«So pena de» es la variante culta y arcaizante de «bajo pena de»; «so» significa «bajo»."),
      fb("Corrige.", "A riesgo de ___ repetitivo, insisto en este punto. (ser; el alumno escribió: siendo)", "ser", "Tras una preposición («de») el verbo va en infinitivo, no en gerundio: «a riesgo de ser»."),
      mc(
        "¿Qué frase es propia del lenguaje jurídico?",
        ["Queda prohibida la reproducción total o parcial, bajo pena de sanción.", "No lo copies o te la cargas.", "A riesgo de copiarlo, lo copio.", "So pena de copia, copia."],
        0,
        "El lenguaje jurídico usa fórmulas impersonales como «Queda prohibida…» y «bajo pena de» + sustantivo. «O te la cargas» es coloquial, y las frases con «a riesgo de copiarlo» y «so pena de copia, copia» no tienen sentido jurídico."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["A riesgo de parecer maleducado, me marcho.", "Debe presentarse antes del lunes, so pena de perder la plaza.", "Bajo pena de multa, se prohíbe aparcar.", "A riesgo que me equivoco, lo diré."],
        [0, 1, 2],
        "«A riesgo de» va con infinitivo, así que «A riesgo que me equivoco» es incorrecta: «a riesgo de equivocarme». Las demás usan bien «a riesgo de» + infinitivo, «so pena de» + infinitivo y «bajo pena de» + sustantivo."
      ),
      toEs("At the risk of repeating myself, I'll say it again.", "A riesgo de repetirme, lo diré otra vez.", "«A riesgo de» + infinitivo traduce «at the risk of» + -ing: «a riesgo de repetirme».", ["A riesgo de repetirme, lo vuelvo a decir.", "Aun a riesgo de repetirme, lo diré de nuevo."]),
      wo("Los participantes deberán respetar las normas bajo pena de expulsión.", "Bajo pena de + sustantivo.", "Participants must respect the rules or face expulsion."),
    ]
  ),
  L(
    "advanced-discourse-markers-6",
    "c1r-build-cohesive-text",
    "Construye: un texto cohesionado",
    "Ordena y conecta las ideas de un artículo de opinión con marcadores de todos los tipos.",
    "8 min",
    [
      sec(
        "Las piezas del texto",
        "Un texto cohesionado combina marcadores de estructura (en primer lugar, por otra parte), de matización (ahora bien, eso sí), de énfasis (cabe destacar) y de conclusión (en definitiva).",
        [
          ["En primer lugar, conviene analizar las causas.", "First, it's worth analyzing the causes."],
          ["Por otra parte, cabe destacar el papel de la educación.", "On the other hand, the role of education should be highlighted."],
          ["En definitiva, se trata de un problema complejo.", "In short, it's a complex problem."],
        ],
        [
          wo("En primer lugar, conviene definir con precisión el problema.", "Marcador de estructura + conviene + infinitivo.", "First, it's worth defining the problem precisely."),
        ]
      ),
    ],
    [
      wo("Por otra parte, cabe señalar que los datos son todavía provisionales.", "Marcador de adición + cabe señalar.", "On the other hand, it should be noted that the data is still provisional."),
      wo("Ahora bien, esto no significa que debamos renunciar al proyecto.", "Ahora bien + no significa que + subjuntivo.", "That said, this doesn't mean we should give up the project."),
      wo("En definitiva, la solución pasa por la cooperación entre todos.", "En definitiva + pasar por.", "In short, the solution lies in cooperation among everyone."),
      mc(
        "Ordena: (A) En definitiva, … (B) En primer lugar, … (C) Ahora bien, … (D) Por otra parte, …",
        ["B → D → C → A", "A → B → C → D", "C → A → B → D", "B → A → D → C"],
        0,
        "Un texto cohesionado abre («En primer lugar»), añade («Por otra parte»), matiza («Ahora bien») y concluye («En definitiva»). Los otros órdenes empiezan por la conclusión o por un matiz, o ponen el cierre en medio."
      ),
      mt(
        "Relaciona cada marcador con su función textual.",
        [
          ["en primer lugar", "ordenar"],
          ["por otra parte", "añadir"],
          ["ahora bien", "matizar"],
          ["en definitiva", "concluir"],
        ],
        "Funciones de los marcadores."
      ),
      toEs("To sum up, it is a necessary but insufficient measure.", "En definitiva, se trata de una medida necesaria pero insuficiente.", "«En definitiva» cierra con una síntesis y «se trata de» presenta la valoración.", ["En resumen, se trata de una medida necesaria pero insuficiente.", "En definitiva, es una medida necesaria pero insuficiente."]),
    ]
  ),
  L(
    "advanced-discourse-markers-6",
    "c1r-spiral-markers-concessive",
    "Repaso en espiral: marcadores, concesión y énfasis",
    "Marcadores discursivos del C1 combinados con concesivas y estructuras enfáticas del B2.",
    "8 min",
    [
      sec(
        "Argumentar con matices",
        "Un argumento sofisticado concede (si bien), matiza (ahora bien), enfatiza (lo que realmente importa es…) y concluye (en definitiva).",
        [
          ["Si bien la inversión es elevada, lo que realmente importa es su rentabilidad a largo plazo.", "Although the investment is high, what really matters is its long-term profitability."],
        ],
        [
          fb("Completa.", "Si ___ es cierto que hay riesgos, las ventajas son claras.", "bien", "«Si bien» es un conector concesivo formal (= aunque) que va con indicativo."),
          fb("Completa.", "Lo que realmente importa ___ la seguridad de los usuarios.", "es", "En la pseudoescindida «lo que… + ser», el verbo «ser» enlaza con el elemento destacado: «es la seguridad»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Por mucho que ___ el precio, seguirá siendo competitivo. (subir)", "suba", "«Por mucho que» ante un hecho futuro o hipotético lleva subjuntivo: «suba»."),
      fb("Completa.", "Es una buena propuesta; eso ___, habría que revisarla.", "sí", "«Eso sí» introduce una matización o condición tras una valoración positiva."),
      fb("Completa.", "Al fin y al ___, somos nosotros quienes decidimos.", "cabo", "La locución fija es «al fin y al cabo» (= después de todo)."),
      mc(
        "¿Qué conector concesivo exige indicativo?",
        ["si bien", "por mucho que (futuro)", "aun cuando (hipótesis)", "a menos que"],
        0,
        "«Si bien» concede un hecho real y va siempre con indicativo. «Por mucho que» con valor futuro y «aun cuando» hipotético llevan subjuntivo, y «a menos que» (condicional, no concesivo) exige siempre subjuntivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue precisamente eso lo que nos convenció.", "Ahora bien, no conviene precipitarse.", "Si bien sea caro, merece la pena.", "Cabe destacar que nadie se opuso."],
        [0, 1, 3],
        "«Si bien» exige indicativo, así que «Si bien sea caro» es incorrecta: «si bien es caro». Las demás son correctas: hendida con «fue… lo que», «ahora bien» para matizar y «cabe destacar que»."
      ),
      toEs("What matters is not the cost, but the result.", "Lo que importa no es el coste, sino el resultado.", "Pseudoescindida («lo que importa es») + «no… sino» para corregir el foco.", ["Lo importante no es el coste, sino el resultado.", "Lo que importa no es el precio, sino el resultado."]),
      wo("Con todo, conviene no perder de vista los riesgos.", "Con todo + conviene + infinitivo.", "Even so, it's wise not to lose sight of the risks."),
    ]
  ),
  L(
    "emphatic-structures-2",
    "c1r-transform-cleft-sentences",
    "Transformaciones: de la frase neutra a la hendida",
    "Convierte frases neutras en oraciones hendidas (es… quien, fue… cuando, es… donde) para destacar un elemento.",
    "7 min",
    [
      sec(
        "El relativo depende de lo que destacas",
        "Persona → quien / el que. Lugar → donde. Tiempo → cuando. Modo → como. Cosa → lo que / el que. El verbo ser concuerda en tiempo con el verbo principal: «Fue ayer cuando llamó».",
        [
          ["Marta rompió el jarrón. → Fue Marta quien rompió el jarrón.", "It was Marta who broke the vase."],
          ["Nos conocimos en Sevilla. → Fue en Sevilla donde nos conocimos.", "It was in Seville that we met."],
          ["Lo hizo así. → Fue así como lo hizo.", "That's how he did it."],
        ],
        [
          mc(
            "Destaca el tiempo: «Llegaron a las tres.»",
            ["Fue a las tres cuando llegaron.", "Fue a las tres donde llegaron.", "Fue a las tres quien llegaron.", "Fue a las tres como llegaron."],
            0,
            "En la oración hendida el relativo depende del elemento destacado: para un tiempo, «cuando». «Donde» es para lugares, «quien» para personas y «como» para el modo."
          ),
        ]
      ),
    ],
    [
      fb("Destaca el lugar.", "Fue en este bar ___ se firmó el acuerdo.", "donde", "Si el elemento destacado es un lugar, la hendida usa «donde»."),
      fb("Destaca a la persona.", "Es tu hermano ___ tiene que disculparse, no tú.", "quien", "Persona → quien (o el que)."),
      fb("Destaca el modo.", "Es con paciencia ___ se aprende un idioma.", "como", "Si el elemento destacado es un modo, la hendida usa «como»."),
      mc(
        "Transforma: «Me preocupa el presupuesto.» (destaca «el presupuesto»)",
        ["Lo que me preocupa es el presupuesto.", "Lo cual me preocupa es el presupuesto.", "Que me preocupa es el presupuesto.", "El que me preocupa es el presupuesto."],
        0,
        "Para destacar algo no personal se usa «lo que»: «Lo que me preocupa es…». «Lo cual» necesita un antecedente previo, «Que» solo no funciona como sujeto y «El que» remitiría a un sustantivo masculino concreto."
      ),
      mc(
        "¿Qué forma de ser encaja? «___ en 1492 cuando Colón llegó a América.»",
        ["Fue", "Es", "Era", "Será"],
        0,
        "En la hendida, «ser» concuerda en tiempo con el verbo de la relativa («llegó», pretérito): «Fue en 1492». «Es» y «será» rompen la concordancia temporal, y «era» no encaja con un hecho puntual."
      ),
      toEs("It was the noise that woke me up.", "Fue el ruido lo que me despertó.", "Hendida con cosa → lo que (también el que).", ["Fue el ruido el que me despertó.", "Fue el ruido lo que me despertó a mí."]),
      wo("Es aquí donde vamos a construir la nueva biblioteca.", "Hendida de lugar.", "It's here that we're going to build the new library."),
    ]
  ),
  L(
    "emphatic-structures-2",
    "c1r-dialogue-lab-correcting-with-emphasis",
    "Laboratorio de diálogo: corregir con énfasis",
    "Cuando alguien se equivoca, la hendida corrige sin repetir toda la frase: «No, fue Luis quien lo dijo».",
    "6 min",
    [
      sec(
        "Rectificar lo que otro dijo",
        "En la conversación, la oración hendida sirve para contradecir un dato concreto: «—Lo pagó Ana. —No, fue Pedro quien lo pagó». También con «sino»: «No fue el lunes, sino el martes cuando…».",
        [
          ["—¿Te llamó el jefe? —No, fue su secretaria la que me llamó.", "—Did the boss call you? —No, it was his secretary who called me."],
          ["—Lo compraste en Zara, ¿no? —Qué va, fue en un mercadillo donde lo encontré.", "—You bought it at Zara, right? —No way, it was at a flea market that I found it."],
        ],
        [
          mc(
            "«—Llegaste a las diez, ¿verdad? —No, ___ a las once cuando llegué.»",
            ["fue", "estuvo", "era", "hubo"],
            0,
            "La hendida temporal usa «ser» en el mismo tiempo que el verbo de la relativa («llegué»): «fue a las once cuando…». «Estuvo», «era» y «hubo» no forman esta estructura."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—El problema es el precio. —No, ___ me preocupa es el plazo.»",
        ["lo que", "que", "el cual", "cuyo"],
        0,
        "Para destacar un concepto no personal se usa «lo que»: «lo que me preocupa es el plazo». «Que» solo no funciona como sujeto, «el cual» necesita antecedente y «cuyo» es posesivo."
      ),
      fb("Completa la réplica.", "—¿Lo escribió Cervantes? —No, fue Lope ___ lo escribió.", "quien", "Persona → quien (o el que)."),
      fb("Completa la réplica.", "—¿Os conocisteis en Madrid? —No, fue en Lima ___ nos conocimos.", "donde", "Si se destaca un lugar («en Lima»), el relativo de la hendida es «donde»."),
      fb("Completa la réplica.", "—¿Lo arreglaste con cinta? —No, fue con pegamento ___ lo arreglé.", "como", "Si se destaca el modo o el instrumento («con pegamento»), la hendida usa «como»."),
      ms(
        "¿Qué réplicas son correctas? «—Lo rompió el gato.»",
        ["No, fue el perro el que lo rompió.", "No, fue el perro quien lo rompió.", "No, fue el perro donde lo rompió.", "No, fue el perro cual lo rompió."],
        [0, 1],
        "Si el elemento destacado es persona o animal, se usa «el que» o «quien». «Donde» es solo para lugares y «cual» sin artículo no funciona como relativo aquí."
      ),
      toEs("No, it was on Friday that they told us.", "No, fue el viernes cuando nos lo dijeron.", "Hendida temporal: «fue» + tiempo + «cuando» para corregir el dato («no, fue el viernes»).", ["No, fue el viernes cuando nos lo contaron."]),
      wo("No fue mi idea, fue la tuya la que ganó.", "Hendida contrastiva.", "It wasn't my idea, it was yours that won."),
    ]
  ),
  L(
    "emphatic-structures-4",
    "c1r-contrast-lo-que-lo-adj",
    "Contraste: lo que, lo + adjetivo + que, lo de",
    "Tres formas de «lo» enfático: lo que me gusta, lo difícil que es, lo de ayer.",
    "7 min",
    [
      sec(
        "Tres «lo» distintos",
        "Lo que + verbo = la cosa que («Lo que necesito es dormir»). Lo + adjetivo/adverbio + que = intensidad («No sabes lo cansada que estoy»; el adjetivo concuerda). Lo de + nombre/infinitivo = el asunto de («Lo de mañana está confirmado»).",
        [
          ["Lo que más me gusta es el silencio.", "What I like most is the silence."],
          ["¡No te imaginas lo lejos que vive!", "You can't imagine how far away he lives!"],
          ["Lo de la reunión, ¿al final qué?", "About the meeting, what happened in the end?"],
        ],
        [
          mc(
            "«No sabes lo ___ que son estas sillas.»",
            ["cómodas", "cómodo", "cómodamente", "comodidad"],
            0,
            "En «lo + adjetivo + que», «lo» es invariable y el adjetivo concuerda con el sustantivo: «lo cómodas que son las sillas». «Cómodo» no concuerda, «cómodamente» es un adverbio y «comodidad» un sustantivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (intensidad).", "Me sorprendió lo ___ que habla tu hijo. (well)", "bien", "Lo + adverbio + que; con adverbio no hay concordancia."),
      fb("Completa (el asunto).", "¿Te has enterado de lo ___ Marta? Se muda a Chile.", "de", "Lo de + persona = el asunto de."),
      fb("Completa.", "Lo ___ no entiendo es por qué no avisó.", "que", "«Lo que» introduce la parte que se va a destacar: «lo que no entiendo es…»."),
      mt(
        "Relaciona cada estructura con su valor.",
        [
          ["lo que dijo", "la cosa que dijo"],
          ["lo guapa que está", "cuánto (intensidad)"],
          ["lo del coche", "el asunto del coche"],
        ],
        "Tres usos de lo."
      ),
      mc(
        "¿Cuál es correcta?",
        ["¡Mira lo altos que están los niños!", "¡Mira lo alto que están los niños!", "¡Mira lo altos que es los niños!", "¡Mira los altos que están los niños!"],
        0,
        "«Lo» es invariable y el adjetivo concuerda con «los niños»: «lo altos que están». «Lo alto» no concuerda, «es» no concuerda con el plural y «los altos» cambia el neutro por un artículo."
      ),
      toEs("You don't know how hard it was.", "No sabes lo difícil que fue.", "«Lo» + adjetivo + «que» expresa intensidad: «no sabes lo difícil que fue».", ["No sabes lo duro que fue.", "No te imaginas lo difícil que fue."]),
      wo("Lo de ayer no volverá a pasar, te lo prometo.", "Lo de = el asunto de.", "What happened yesterday won't happen again, I promise."),
    ]
  ),
  L(
    "emphatic-structures-4",
    "c1r-error-hunt-emphasis",
    "Caza de errores: hendidas y énfasis",
    "Encuentra el fallo: relativo equivocado, ser que no concuerda, «que» galicado.",
    "7 min",
    [
      sec(
        "Los fallos más comunes",
        "1) «Que galicado»: «Es por eso que…», «Fue aquí que nos vimos» o «Fue entonces que lo supe» son muy frecuentes en América y no se consideran errores en el habla, pero en España y en registro cuidado se prefiere el relativo que concuerda: «Es por eso por lo que…» (o «Por eso…»), «Fue aquí donde nos vimos», «Fue entonces cuando lo supe». 2) Tiempo de ser: ✗ «Es en 1990 cuando nació» → ✓ «Fue en 1990 cuando nació». 3) Lo invariable: ✗ «la difícil que es» → ✓ «lo difícil que es».",
        [
          ["Fue entonces que lo supe (habla de América) → Fue entonces cuando lo supe (registro cuidado).", "That was when I found out."],
          ["Es a ti que busco (habla de América) → Es a ti a quien busco (registro cuidado).", "It's you I'm looking for."],
        ],
        [
          mc(
            "Versión más cuidada:",
            ["Fue en la cocina donde empezó el incendio.", "Fue en la cocina que empezó el incendio.", "Fue en la cocina cual empezó el incendio.", "Fue en la cocina quien empezó el incendio."],
            0,
            "En la hendida de lugar, la variante cuidada es «donde»: «Fue en la cocina donde…». «Fue en la cocina que…» se oye mucho en América pero la norma culta prefiere «donde»; «cual» sin artículo no sirve y «quien» es solo para personas."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el relativo.", "Es a ella a ___ tienes que pedir perdón. (el alumno puso: que)", "quien", "Con preposición repetida: a ella a quien / a la que."),
      fb("Corrige el tiempo de ser.", "___ en 2008 cuando empezó la crisis. (el alumno puso: Es)", "Fue", "En la hendida, «ser» concuerda en tiempo con el verbo de la relativa («empezó»): «Fue en 2008»."),
      fb("Corrige.", "¡No sabes ___ contenta que estoy! (el alumno puso: la)", "lo", "En «lo + adjetivo + que», «lo» es invariable aunque el adjetivo sea femenino: «lo contenta»."),
      ms(
        "¿Qué frases están bien?",
        ["Es por esta razón por la que me voy.", "Fue así como lo descubrimos.", "Fue ayer donde me lo dijo.", "Es de esto de lo que quería hablarte."],
        [0, 1, 3],
        "Para un momento, el relativo es «cuando»: fue ayer cuando me lo dijo (en el habla de América también se oye «fue ayer que»). «Donde» solo vale para lugares."
      ),
      mc(
        "¿Dónde está el error? «Lo que me molestan son los ruidos.»",
        ["molestan → molesta", "Lo → Los", "son → es", "No hay error"],
        0,
        "«Lo que» es neutro y singular, así que el verbo de la relativa va en singular: «lo que me molesta». El error está en «molestan»: «lo» no cambia, y «son» es correcto porque «ser» concuerda con el atributo plural «los ruidos»."
      ),
      toEs("It was with him that I wanted to talk.", "Era con él con quien quería hablar.", "En la hendida, la preposición se repite ante el relativo: «con él con quien».", ["Era con él con el que quería hablar.", "Es con él con quien quería hablar."]),
      wo("Es de esto de lo que nadie quiere hablar.", "Hendida con preposición repetida.", "This is what nobody wants to talk about."),
    ]
  ),
  L(
    "emphatic-structures-6",
    "c1r-mission-persuasive-speech",
    "Misión real: un discurso que convence",
    "Prepara un breve discurso para una asamblea vecinal usando hendidas, «sí que», anteposición y «lo + adj + que».",
    "8 min",
    [
      sec(
        "Herramientas del orador",
        "Hendida para señalar el problema: «Lo que necesitamos es un parque». Sí que para reafirmar: «Esto sí que es urgente». Anteposición de complemento: «Dinero hay; lo que falta es voluntad». Lo + adj + que para intensificar: «Vean lo abandonado que está el solar».",
        [
          ["Dinero hay; lo que falta es voluntad.", "There's money; what's missing is will."],
          ["Esto sí que es una prioridad.", "This really is a priority."],
          ["Fíjense en lo peligroso que es este cruce.", "Look at how dangerous this crossing is."],
        ],
        [
          mc(
            "¿Qué frase reafirma con más fuerza?",
            ["Esto sí que es importante.", "Esto es algo importante.", "Esto quizás es importante.", "Esto es importante, creo."],
            0,
            "«Sí que» + verbo reafirma con fuerza frente a una duda. «Es algo importante» es neutro, y «quizás» o «creo» atenúan en vez de reforzar."
          ),
        ]
      ),
    ],
    [
      fb("Completa el discurso.", "No es falta de dinero; ___ falta es voluntad política.", "lo que", "«Lo que» + verbo destaca el concepto que corrige lo anterior: «lo que falta es…»."),
      fb("Completa.", "Vean ustedes lo ___ que está la plaza. (sucio)", "sucia", "El adjetivo concuerda con «la plaza» (femenino), aunque «lo» sea invariable: «lo sucia»."),
      fb("Completa (reafirmación).", "Este barrio ___ que merece un centro de salud.", "sí", "«Sí que» + verbo reafirma algo con énfasis frente a una opinión contraria."),
      mc(
        "¿Qué frase antepone el elemento para darle relieve?",
        ["Promesas hemos oído muchas; hechos, ninguno.", "Hemos oído muchas promesas y ningún hecho.", "Muchas promesas se oyeron y ningún hecho.", "No hubo hechos después de las promesas."],
        0,
        "«Promesas hemos oído muchas» antepone el complemento directo para darle relieve y contrastarlo con «hechos, ninguno». Las demás siguen el orden neutro o lo reformulan sin destacar ningún elemento."
      ),
      mc(
        "Cierra el discurso con una hendida:",
        ["Somos nosotros quienes decidimos el futuro del barrio.", "Nosotros decidimos el futuro del barrio.", "Decidimos nosotros el futuro.", "El futuro del barrio se decide."],
        0,
        "La hendida «Somos nosotros quienes…» destaca al sujeto; con persona se usa «quien(es)». «Nosotros decidimos» y «Decidimos nosotros» no tienen estructura hendida, y «se decide» borra al agente."
      ),
      toEs("What this neighborhood needs is a library.", "Lo que este barrio necesita es una biblioteca.", "Pseudoescindida con «lo que… es» para destacar el objeto: «lo que necesita es una biblioteca».", ["Lo que necesita este barrio es una biblioteca."]),
      wo("Voluntad sí que hay, lo que falta son recursos.", "Sí que + hendida.", "There really is will; what's lacking is resources."),
    ]
  ),
  L(
    "emphatic-structures-6",
    "c1r-spiral-emphasis-subjunctive-markers",
    "Repaso en espiral: énfasis, subjuntivo y conectores",
    "Combina hendidas con subjuntivo, conectores y régimen preposicional de lecciones anteriores.",
    "8 min",
    [
      sec(
        "Todo junto",
        "Las hendidas se combinan con lo que ya sabes: «Lo que quiero es que me escuches» (subjuntivo), «Es de eso de lo que me arrepiento» (régimen), «Ahora bien, lo que no acepto es…» (conector).",
        [
          ["Lo que te pido es que seas sincero.", "What I'm asking is that you be honest."],
          ["Es en ti en quien confío.", "It's you I trust."],
        ],
        [
          mc(
            "«Lo que quiero es que ___ a tiempo.»",
            ["llegues", "llegas", "llegar", "llegarás"],
            0,
            "«Querer que» con sujeto distinto exige subjuntivo: «que llegues». «Llegas» y «llegarás» son indicativo, y «que llegar» no admite infinitivo tras «que»."
          ),
        ]
      ),
    ],
    [
      fb("Completa (régimen de arrepentirse).", "Es de eso ___ lo que me arrepiento.", "de", "Arrepentirse de → de lo que."),
      fb("Completa (subjuntivo).", "Lo único que pido es que me ___ la verdad. (decir, tú)", "digas", "«Pedir que» con sujeto distinto exige subjuntivo: «que me digas»."),
      fb("Completa (confiar en).", "Es en tu criterio ___ el que confío.", "en", "Confiar en → en el que."),
      mc(
        "«Tienes razón en parte. ___, lo que no puedo aceptar es el tono.»",
        ["Ahora bien", "Por consiguiente", "Es decir", "Por ende"],
        0,
        "«Ahora bien» introduce una objeción tras conceder («tienes razón en parte»). «Por consiguiente» y «por ende» introducen consecuencias, y «es decir» una reformulación."
      ),
      mc(
        "«Por mucho que insistas, lo que no voy a hacer es ___.»",
        ["mentir", "que miento", "mintiendo", "mienta"],
        0,
        "Con el mismo sujeto («yo»), la hendida usa infinitivo: «lo que no voy a hacer es mentir». «Que miento» y «que mienta» introducen una conjunción innecesaria y «mintiendo» es un gerundio que no funciona como atributo."
      ),
      toEs("What surprises me is that nobody has complained.", "Lo que me sorprende es que nadie se haya quejado.", "Pseudoescindida con verbo de emoción («sorprender»): exige subjuntivo, «que nadie se haya quejado».", ["Lo que me sorprende es que nadie se queje.", "Lo que me extraña es que nadie se haya quejado."]),
      wo("Lo que más me dolió fue que no me lo dijeras.", "Hendida + imperfecto de subjuntivo.", "What hurt me most was that you didn't tell me."),
    ]
  ),
  L(
    "future-conditional-conjecture-2",
    "c1r-transform-probability-present",
    "Transformaciones: del «probablemente» al futuro de conjetura",
    "Sustituye «probablemente / seguramente + presente» por el futuro simple de probabilidad.",
    "7 min",
    [
      sec(
        "Presente probable → futuro simple",
        "Para hacer una suposición sobre el presente, el español usa el futuro: «Probablemente tiene hambre» = «Tendrá hambre». En preguntas expresa duda o intriga: «¿Dónde estará mi móvil?».",
        [
          ["Probablemente son las ocho. → Serán las ocho.", "It's probably eight o'clock."],
          ["Supongo que está en el trabajo. → Estará en el trabajo.", "He's probably at work."],
          ["¿Quién llama a estas horas? → ¿Quién será?", "Who could that be?"],
        ],
        [
          mc(
            "«Seguramente tiene unos cuarenta años.» →",
            ["Tendrá unos cuarenta años.", "Tuvo unos cuarenta años.", "Tenía unos cuarenta años.", "Tenga unos cuarenta años."],
            0,
            "El futuro simple expresa una conjetura sobre el presente: «Tendrá unos cuarenta años». «Tuvo» y «tenía» hablan del pasado y «tenga» (subjuntivo) no funciona como oración independiente."
          ),
        ]
      ),
    ],
    [
      fb("Transforma con futuro.", "Probablemente hay atasco. → ___ atasco.", "Habrá", "El futuro simple expresa una suposición sobre el presente: «habrá atasco»."),
      fb("Transforma con futuro.", "Supongo que sabe la respuesta. → ___ la respuesta.", "Sabrá", "El futuro de probabilidad: «supongo que sabe» → «sabrá»."),
      fb("Transforma con futuro.", "Seguramente vienen cansados. → ___ cansados.", "Vendrán", "El futuro de conjetura sobre el presente: «vendrán cansados» (futuro irregular de «venir»)."),
      fb("Pregunta con intriga.", "¿Qué ___ en esa caja tan grande? (haber)", "habrá", "Futuro en pregunta = me pregunto."),
      mc(
        "«Llaman a la puerta.» Conjetura natural:",
        ["Será el cartero.", "Fue el cartero.", "Sea el cartero.", "Habría sido el cartero."],
        0,
        "Para una suposición sobre el presente se usa el futuro: «Será el cartero». «Fue» afirma un hecho pasado, «Sea» (subjuntivo) no funciona como oración independiente y «Habría sido» hace una conjetura sobre el pasado."
      ),
      toEs("She's probably asleep.", "Estará dormida.", "El futuro de probabilidad traduce «probably» sobre el presente: «estará dormida».", ["Estará durmiendo.", "Ya estará dormida."]),
      wo("¿Qué hora será en Tokio ahora mismo?", "Pregunta de conjetura.", "I wonder what time it is in Tokyo right now."),
    ]
  ),
  L(
    "future-conditional-conjecture-2",
    "c1r-dialogue-lab-guessing",
    "Laboratorio de diálogo: adivinar entre amigos",
    "Dos amigos especulan sobre un vecino misterioso: practica la conjetura en conversación.",
    "6 min",
    [
      sec(
        "Especular en voz alta",
        "En la conversación se encadenan conjeturas: «—¿A qué se dedicará? —Será músico, siempre lleva una funda de guitarra». Para responder a una conjetura del otro: «Puede ser», «Vete tú a saber», «Qué sé yo».",
        [
          ["—¿Por qué no saluda nunca? —Será tímido.", "—Why does he never say hi? —He must be shy."],
          ["—¿Tendrá familia? —Vete tú a saber.", "—Could he have a family? —Who knows."],
        ],
        [
          mc(
            "«—¿Cuántos años tendrá? —No sé, ___ unos treinta.»",
            ["tendrá", "tiene seguro", "tuvo", "tenga"],
            0,
            "La respuesta mantiene el futuro de conjetura: «tendrá unos treinta». «Tiene seguro» afirma con certeza, lo que choca con «no sé»; «tuvo» es pasado y «tenga» no funciona sin un verbo que lo rija."
          ),
        ]
      ),
    ],
    [
      fb("Completa la conjetura.", "—Siempre llega en taxi. —___ mucho dinero. (tener)", "Tendrá", "Futuro de conjetura sobre el presente para deducir una causa: «tendrá mucho dinero»."),
      fb("Completa la conjetura.", "—Nunca está en casa. —___ viajando por trabajo. (estar)", "Estará", "Futuro progresivo de conjetura: «estará viajando» = probablemente está viajando."),
      fb("Completa.", "—¿Qué ___ haciendo ahí dentro tanto rato? (estar, él)", "estará", "Las preguntas de conjetura usan el futuro: «¿qué estará haciendo?» = me pregunto qué hace."),
      mc(
        "¿Qué respuesta expresa ignorancia total?",
        ["Vete tú a saber.", "Seguro que sí.", "Claro que lo será.", "Lo es, sin duda."],
        0,
        "«Vete tú a saber» expresa que nadie puede saberlo. «Seguro que sí», «Claro que lo será» y «Lo es, sin duda» expresan certeza, justo lo contrario."
      ),
      mc(
        "¿Qué frase NO es una conjetura?",
        ["Es médico, me lo dijo él.", "Será médico.", "Debe de ser médico.", "Será médico o algo así."],
        0,
        "«Es médico, me lo dijo él» expresa certeza con una fuente directa. «Será médico», «Debe de ser médico» y «Será médico o algo así» son conjeturas."
      ),
      toEs("Who could he be talking to?", "¿Con quién estará hablando?", "El futuro progresivo en pregunta expresa conjetura: «¿con quién estará hablando?».", ["¿Con quién hablará?"]),
      wo("No sé qué le pasará, pero lleva días muy callado.", "Conjetura en frase subordinada.", "I don't know what's wrong with him, but he's been very quiet for days."),
    ]
  ),
  L(
    "future-conditional-conjecture-4",
    "c1r-contrast-four-conjecture-tenses",
    "Contraste: habrá, habría, sería, será",
    "Futuro, futuro perfecto, condicional y condicional perfecto: cada uno sitúa la conjetura en un momento distinto.",
    "8 min",
    [
      sec(
        "Mapa temporal de la conjetura",
        "Presente probable → futuro (Estará en casa). Pasado reciente/perfecto probable → futuro perfecto (Habrá salido). Pasado (imperfecto/indefinido) probable → condicional (Estaría cansado; Serían las diez). Pluscuamperfecto probable → condicional perfecto (Ya habría cenado cuando llamé).",
        [
          ["Probablemente ha salido. → Habrá salido.", "He must have gone out."],
          ["Probablemente eran las diez. → Serían las diez.", "It must have been about ten."],
          ["Probablemente ya había cenado. → Ya habría cenado.", "He must have already had dinner."],
        ],
        [
          mc(
            "«Probablemente estaba enfermo ayer.» →",
            ["Estaría enfermo ayer.", "Estará enfermo ayer.", "Habrá estado enfermo mañana.", "Esté enfermo ayer."],
            0,
            "Una conjetura sobre el pasado en imperfecto se expresa con condicional: «Estaría enfermo ayer». «Estará» es conjetura sobre el presente, «habrá estado… mañana» es incoherente y «Esté» (subjuntivo) no funciona como oración independiente."
          ),
        ]
      ),
    ],
    [
      fb("Transforma.", "Probablemente se ha perdido. → Se ___ perdido.", "habrá", "Pretérito perfecto probable → futuro perfecto."),
      fb("Transforma.", "Probablemente tenía veinte años entonces. → ___ veinte años entonces.", "Tendría", "Una conjetura sobre el pasado (imperfecto) se expresa con condicional simple: «tendría»."),
      fb("Transforma.", "Probablemente ya se habían ido. → Ya se ___ ido.", "habrían", "Una conjetura sobre una acción anterior a otra pasada usa el condicional compuesto: «se habrían ido»."),
      mt(
        "Relaciona la conjetura con lo que suponemos.",
        [
          ["Estará en clase.", "Probablemente está en clase."],
          ["Habrá estado en clase.", "Probablemente ha estado en clase."],
          ["Estaría en clase.", "Probablemente estaba en clase."],
        ],
        "Cada tiempo retrocede un paso."
      ),
      mc(
        "«Cuando llegué, la puerta estaba abierta. Alguien la ___ abierto.»",
        ["habría dejado", "habrá dejado", "dejará", "deje"],
        0,
        "Se hace una conjetura sobre algo anterior a otro momento pasado («cuando llegué»), así que va en condicional compuesto: «la habría dejado». «Habrá dejado» conjetura desde el presente, «dejará» es futuro y «deje» es subjuntivo sin nada que lo rija."
      ),
      toEs("They must have missed the train.", "Habrán perdido el tren.", "El futuro perfecto expresa una conjetura sobre un pasado reciente: «habrán perdido» = seguramente han perdido.", ["Habrán perdido el tren, seguramente.", "Debe de haber perdido el tren."]),
      wo("Serían las tres de la mañana cuando sonó el teléfono.", "Condicional de conjetura en el pasado.", "It must have been three in the morning when the phone rang."),
    ]
  ),
  L(
    "future-conditional-conjecture-4",
    "c1r-story-detective-conjecture",
    "Detective de textos: ¿qué habrá pasado?",
    "Lee las pistas de una escena y formula hipótesis con el tiempo adecuado.",
    "7 min",
    [
      sec(
        "La escena",
        "«La inspectora entra en el piso. La cafetera está caliente, hay dos tazas en la mesa, una de ellas con carmín. La ventana está abierta y hay barro en el alféizar. En el suelo, un billete de tren usado con fecha de ayer.» La inspectora razona en voz alta con conjeturas.",
        [
          ["El café está caliente: se habrá ido hace poco.", "The coffee is hot: he must have left recently."],
          ["Tendría compañía: hay dos tazas.", "He must have had company: there are two cups."],
        ],
        [
          mc(
            "Por el billete, la inspectora deduce que ayer…",
            ["estaría de viaje.", "estará de viaje.", "está de viaje.", "esté de viaje."],
            0,
            "Una conjetura sobre el pasado («ayer») se expresa con condicional: «estaría de viaje». «Estará» y «está» hablan del presente, y «esté» (subjuntivo) no funciona como oración independiente."
          ),
        ]
      ),
    ],
    [
      fb("La inspectora razona.", "La ventana está abierta: alguien ___ salido por ahí. (haber, perfecto)", "habrá", "El futuro perfecto hace una conjetura sobre algo ya ocurrido: «habrá salido» = probablemente ha salido."),
      fb("La inspectora razona.", "Hay carmín en la taza: la visita ___ una mujer. (ser, presente)", "será", "Conjetura sobre la identidad → futuro."),
      mc(
        "¿Qué deducción es más lógica por el barro?",
        ["Habrá llovido y alguien habrá entrado por la ventana.", "Llueve siempre en esa ciudad.", "La ventana será nueva.", "No habrá nadie en la casa nunca."],
        0,
        "El barro permite deducir hechos recientes con futuro perfecto: «Habrá llovido y alguien habrá entrado». Que llueva siempre allí no explica el barro de hoy, «la ventana será nueva» no tiene relación con él y «no habrá nadie nunca» es absurdo."
      ),
      ms(
        "¿Qué frases son conjeturas?",
        ["Serían dos personas.", "Habrán discutido.", "La cafetera está caliente.", "Estará escondido cerca."],
        [0, 1, 3],
        "«Serían dos personas», «Habrán discutido» y «Estará escondido» son conjeturas (condicional y futuro). «La cafetera está caliente» es un hecho observado, no una suposición."
      ),
      fb("Completa.", "Cuando llegó la policía, el sospechoso ya ___ huido. (haber, conjetura sobre pasado anterior)", "habría", "Conjetura sobre una acción anterior a otro pasado («cuando llegó la policía»): condicional compuesto, «habría huido»."),
      toEs("Someone must have warned him.", "Alguien lo habrá avisado.", "El futuro perfecto traduce «must have» + participio en conjeturas: «lo habrá avisado».", ["Alguien le habrá avisado.", "Alguien le habría avisado."]),
      wo("No habrán ido muy lejos con tanta lluvia.", "Conjetura negativa.", "They can't have gone very far in this rain."),
    ]
  ),
  L(
    "future-conditional-conjecture-6",
    "c1r-contrast-concessive-future",
    "Contraste: «será caro, pero…» — el futuro concesivo",
    "El futuro y el condicional también conceden un punto antes de objetar: no expresan duda, sino «admito que…».",
    "7 min",
    [
      sec(
        "Conceder con el futuro",
        "«Será muy listo, pero no sabe trabajar en equipo» = admito que es listo, pero… En el pasado se usa el condicional: «Sería famoso, pero era muy humilde». Hay que distinguirlo del futuro de probabilidad por el «pero» que sigue.",
        [
          ["Será caro, pero merece la pena.", "It may be expensive, but it's worth it."],
          ["Tendrá mucho dinero, pero no es feliz.", "He may have a lot of money, but he's not happy."],
          ["Estaría cansada, pero no se quejó ni una vez.", "She may have been tired, but she didn't complain once."],
        ],
        [
          mc(
            "«Será muy guapo, pero…» significa:",
            ["Admito que es guapo, pero…", "Probablemente es guapo.", "Será guapo en el futuro.", "Ojalá sea guapo."],
            0,
            "El futuro seguido de «pero» tiene valor concesivo: «Será muy guapo, pero…» = admito que lo es, pero… No expresa probabilidad aquí, ni habla del futuro, ni formula un deseo («ojalá»)."
          ),
        ]
      ),
    ],
    [
      fb("Concede en futuro.", "___ muy rápido, pero comete muchos errores. (ser)", "Será", "El futuro concesivo admite algo para después objetarlo: «será muy rápido, pero…»."),
      fb("Concede en pasado.", "___ mucha experiencia, pero aquella vez se equivocó. (tener)", "Tendría", "El condicional concesivo admite algo del pasado para objetarlo: «tendría mucha experiencia, pero…»."),
      mc(
        "¿En qué frase el futuro es concesivo (no de probabilidad)?",
        ["Sabrá mucho, pero no sabe explicarlo.", "¿Dónde estará Luis?", "Serán las cinco.", "Tendrá unos treinta años."],
        0,
        "«Sabrá mucho, pero no sabe explicarlo» concede algo para objetarlo después con «pero». En «¿Dónde estará Luis?», «Serán las cinco» y «Tendrá unos treinta años» el futuro expresa probabilidad."
      ),
      mc(
        "Parafrasea: «Habrá estudiado mucho, pero suspendió.»",
        ["Aunque haya estudiado mucho, suspendió.", "Como estudió mucho, suspendió.", "Porque estudió, suspendió.", "Si estudia, suspenderá."],
        0,
        "El futuro concesivo equivale a una concesiva con «aunque»: «Aunque haya estudiado mucho, suspendió». «Como» y «porque» son causales (y el resultado no sería lógico) y «Si estudia, suspenderá» es una condicional."
      ),
      fb("Completa la paráfrasis.", "Será rico, pero es tacaño. = ___ sea rico, es tacaño.", "Aunque", "Futuro concesivo ≈ aunque + subjuntivo."),
      toEs("He may be your friend, but he lied to you.", "Será tu amigo, pero te mintió.", "El futuro concesivo traduce «may be…, but»: «Será tu amigo, pero te mintió».", ["Será amigo tuyo, pero te mintió."]),
      wo("Será muy moderno, pero a mí no me gusta nada.", "Concesión con futuro.", "It may be very modern, but I don't like it at all."),
    ]
  ),
  L(
    "future-conditional-conjecture-6",
    "c1r-spiral-conjecture-modals",
    "Repaso en espiral: conjetura con futuro, deber de y adverbios",
    "Alterna las distintas formas de suponer: futuro, deber de + infinitivo, a lo mejor, puede que, seguramente.",
    "8 min",
    [
      sec(
        "Mismo contenido, distinto grado de certeza",
        "Seguramente / Estará (alta probabilidad) → Debe de estar (deducción) → Puede que esté / Quizás esté (posibilidad, subjuntivo) → A lo mejor está (posibilidad, indicativo). Cuidado: deber de = probabilidad; deber sin de = obligación (aunque en el habla se mezclan).",
        [
          ["Debe de estar enfermo; no ha venido.", "He must be sick; he hasn't come."],
          ["Puede que llegue tarde.", "He might arrive late."],
          ["A lo mejor está en la biblioteca.", "Maybe she's at the library."],
        ],
        [
          mc(
            "«Puede que ___ razón.»",
            ["tengas", "tienes", "tendrás", "tener"],
            0,
            "«Puede que» expresa posibilidad y exige subjuntivo: «tengas». «Tienes» y «tendrás» son indicativo, y «que tener» no admite infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (indicativo).", "A lo mejor ___ mañana. (llover)", "llueve", "«A lo mejor» va siempre con indicativo: «a lo mejor llueve»."),
      fb("Completa (deducción).", "Debe ___ ser muy tarde; ya no hay nadie.", "de", "Deber de + infinitivo = probabilidad."),
      fb("Completa (subjuntivo).", "Quizás no ___ la dirección. (saber, ellos)", "sepan", "«Quizás» con subjuntivo refuerza la duda: «quizás no sepan»."),
      mc(
        "«Debes estudiar más» expresa…",
        ["obligación", "probabilidad", "concesión", "deseo"],
        0,
        "«Deber» + infinitivo (sin «de») expresa obligación. La probabilidad se expresa con «deber de» + infinitivo («debe de estar en casa»); no hay concesión ni deseo."
      ),
      mt(
        "Relaciona cada forma con el modo que exige.",
        [
          ["a lo mejor", "indicativo"],
          ["puede que", "subjuntivo"],
          ["deber de", "infinitivo"],
        ],
        "Cada marcador tiene su sintaxis."
      ),
      toEs("She must have forgotten.", "Se le habrá olvidado.", "El futuro perfecto expresa una conjetura sobre algo ya ocurrido: «se le habrá olvidado».", ["Debe de haberlo olvidado.", "Lo habrá olvidado.", "Debe de habérsele olvidado."]),
      wo("Puede que no lo sepa todavía, así que no le digas nada.", "Puede que + subjuntivo.", "He might not know yet, so don't tell him anything."),
    ]
  ),
  L(
    "formal-informal-register-2",
    "c1r-transform-tu-to-usted",
    "Transformaciones: de tú a usted sin dejar cabos sueltos",
    "Pasar de tú a usted no es solo cambiar el verbo: también cambian pronombres, posesivos e imperativos.",
    "7 min",
    [
      sec(
        "Todo lo que cambia",
        "Verbo en 3.ª persona (tienes → tiene). Imperativo (siéntate → siéntese; no te preocupes → no se preocupe). Pronombre átono (te llamo → le/lo llamo). Posesivo (tu → su; tuyo → suyo). Tras preposición (para ti → para usted; contigo → con usted).",
        [
          ["¿Te apetece un café? → ¿Le apetece un café?", "Would you like a coffee?"],
          ["Pasa y siéntate. → Pase y siéntese.", "Come in and sit down."],
          ["¿Esta chaqueta es tuya? → ¿Esta chaqueta es suya?", "Is this jacket yours?"],
        ],
        [
          mc(
            "«No te preocupes» en usted:",
            ["No se preocupe.", "No le preocupe.", "No te preocupe.", "No se preocupa."],
            0,
            "El imperativo negativo de usted usa el subjuntivo con el pronombre delante: «No se preocupe». «Le» no es el pronombre reflexivo, «te» corresponde a tú y «preocupa» es indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Pásalo a usted.", "Acompáñame, por favor. → ___, por favor.", "Acompáñeme", "Imperativo afirmativo de usted (subjuntivo) con el pronombre detrás: «acompáñeme»."),
      fb("Pásalo a usted.", "¿Puedo ir contigo? → ¿Puedo ir con ___?", "usted", "«Contigo» corresponde a tú; con usted se dice «con usted»."),
      fb("Pásalo a usted.", "Te he traído tu informe. → Le he traído ___ informe.", "su", "El posesivo de usted es «su» (tercera persona), no «tu»."),
      fb("Pásalo a usted.", "Dime qué necesitas. → ___ qué necesita.", "Dígame", "Imperativo de usted de «decir» es «diga», con el pronombre unido: «dígame»."),
      mc(
        "¿Qué versión en usted es coherente de principio a fin?",
        ["Disculpe, ¿me deja su bolígrafo? Se lo devuelvo enseguida.", "Disculpe, ¿me dejas su bolígrafo? Se lo devuelvo enseguida.", "Disculpa, ¿me deja tu bolígrafo? Te lo devuelvo enseguida.", "Disculpe, ¿me deja tu bolígrafo? Se lo devuelvo enseguida."],
        0,
        "Con usted, todo va en tercera persona: «disculpe», «me deja», «su bolígrafo», «se lo devuelvo». Las demás mezclan formas de tú («dejas», «disculpa», «tu», «te lo») con formas de usted."
      ),
      toEs("Don't worry, I'll call you tomorrow. (usted)", "No se preocupe, lo llamo mañana.", "Con usted: «no se preocupe» (subjuntivo) y «lo/le llamo» (tercera persona).", ["No se preocupe, le llamo mañana.", "No se preocupe, lo llamaré mañana.", "No se preocupe, le llamaré mañana."]),
      wo("Siéntese aquí y dígame en qué puedo ayudarle.", "Imperativos de usted con enclíticos.", "Sit here and tell me how I can help you."),
    ]
  ),
  L(
    "formal-informal-register-2",
    "c1r-dialogue-lab-invitation-to-tutear",
    "Laboratorio de diálogo: «¿Nos tuteamos?»",
    "Cómo se propone, se acepta y se rechaza con elegancia el paso de usted a tú.",
    "6 min",
    [
      sec(
        "El momento del cambio",
        "Proponer: «Puede tutearme», «¿Nos tuteamos?», «Trátame de tú, por favor». Aceptar: «Encantado, entonces tú también». Rechazar con cortesía (poco habitual): «Si no le importa, prefiero mantener el usted de momento». Tras aceptar, el cambio debe ser inmediato y coherente.",
        [
          ["—Por favor, trátame de tú. —De acuerdo, entonces tú también.", "—Please, call me tú. —All right, then you too."],
          ["—¿Le importa si nos tuteamos? —Para nada.", "—Do you mind if we use tú? —Not at all."],
        ],
        [
          mc(
            "Tras «—Puedes tutearme», la respuesta coherente es:",
            ["Vale, gracias. ¿Y tú de dónde eres?", "Vale, gracias. ¿Y usted de dónde es?", "Muy bien, señor. ¿Y de dónde es?", "Vale. ¿Y ustedes de dónde son?"],
            0,
            "Si te invitan a tutear, se pasa al tú de inmediato: «¿Y tú de dónde eres?». Seguir con «usted» o «señor» ignora la invitación, y «ustedes» es plural, no corresponde."
          ),
        ]
      ),
    ],
    [
      fb("Completa la propuesta.", "Por favor, no me hable de usted; puede ___. (tratar de tú)", "tutearme", "«Tutear» es tratar a alguien de tú; con el pronombre: «puede tutearme»."),
      fb("Completa.", "—¿Nos ___? —Claro, será más cómodo.", "tuteamos", "«Tutearse» en forma recíproca propone el tú mutuo: «¿nos tuteamos?»."),
      mc(
        "¿Qué respuesta rechaza el tuteo con cortesía?",
        ["Se lo agradezco, pero si no le importa, prefiero seguir tratándolo de usted.", "Ni hablar, no te tuteo.", "Vale, tú también.", "¿Por qué no?"],
        0,
        "Agradecer, dar una preferencia y atenuarla («si no le importa») rechaza el tuteo con cortesía. «Ni hablar, no te tuteo» es brusco (y además tutea), «Vale, tú también» acepta y «¿Por qué no?» también acepta."
      ),
      mc(
        "¿Quién suele proponer el tuteo en una relación jerárquica?",
        ["La persona de mayor edad o rango.", "La persona de menor rango.", "Nadie; siempre se tutea.", "Siempre el cliente."],
        0,
        "Por convención, propone el tuteo quien tiene más edad o rango. No lo propone la persona de menor rango, no siempre se tutea y el cliente no tiene esa prerrogativa automática."
      ),
      ms(
        "¿Qué fórmulas proponen tutearse?",
        ["Trátame de tú.", "Puede tutearme.", "¿Nos tuteamos?", "Háblenos de usted."],
        [0, 1, 2],
        "«Trátame de tú», «Puede tutearme» y «¿Nos tuteamos?» proponen el tú. «Háblenos de usted» pide mantener el usted, justo lo contrario."
      ),
      toEs("Please, call me tú.", "Por favor, trátame de tú.", "«Tratar de tú» (o «tutear») traduce «call me tú»: «trátame de tú».", ["Por favor, tutéame.", "Por favor, puedes tutearme."]),
      wo("Si le parece bien, podemos tutearnos a partir de ahora.", "Propuesta formal de tuteo.", "If it's all right with you, we can use tú from now on."),
    ]
  ),
  L(
    "formal-informal-register-4",
    "c1r-error-hunt-register-clash",
    "Caza de errores: el registro que se rompe",
    "Mensajes que empiezan en usted y se escapan al tú (o al revés). Detecta y repara la incoherencia.",
    "7 min",
    [
      sec(
        "Mezclas que delatan",
        "Un error típico del estudiante avanzado es arrancar en usted y deslizarse al tú en mitad de la frase: «Señora López, le escribo porque necesito que me mandes el contrato». También es frecuente usar «su» y luego «te», o «ustedes» con «vuestro» (en España: vosotros ↔ vuestro; ustedes ↔ su).",
        [
          ["✗ Le agradezco que me hayas respondido. → ✓ Le agradezco que me haya respondido.", "Thank you for replying."],
          ["✗ Ustedes pueden dejar vuestras maletas aquí. → ✓ Ustedes pueden dejar sus maletas aquí.", "You can leave your suitcases here."],
        ],
        [
          mc(
            "¿Dónde está la incoherencia? «Don Pedro, ¿podría firmar aquí? Luego te devuelvo la copia.»",
            ["te → le", "podría → podrías", "firmar → firme", "No hay error"],
            0,
            "Si se trata de usted («Don Pedro», «podría»), el pronombre debe ser «le»: «luego le devuelvo la copia». «Podría» ya es correcto con usted, «firmar» va bien tras «podría» y sí hay error."
          ),
        ]
      ),
    ],
    [
      fb("Repara la coherencia.", "Estimado cliente: si tiene dudas, ___ con nosotros. (el alumno puso: contacta)", "contacte", "El imperativo de usted es el subjuntivo: «contacte», no «contacta» (tú)."),
      fb("Repara.", "Señores, pueden sentarse en ___ asientos. (el alumno puso: vuestros)", "sus", "Con ustedes, el posesivo es «su/sus», no «vuestros» (vosotros)."),
      fb("Repara.", "Doctora, gracias por ___ tiempo. (el alumno puso: tu)", "su", "El posesivo de usted es «su», no «tu»."),
      ms(
        "¿Qué frases son coherentes?",
        ["Profesora, ¿me puede revisar el examen? Se lo dejo en la mesa.", "Chicos, ¿habéis traído vuestros libros?", "Señor, ¿le importa si te hago una pregunta?", "Chicos, ¿han traído vuestros libros?"],
        [0, 1],
        "Son coherentes la frase de la profesora (todo en usted) y la de los chicos con «habéis… vuestros» (todo en vosotros). «Señor, ¿le importa si te hago…» mezcla «le» con «te», y «¿han traído vuestros libros?» mezcla ustedes con vosotros."
      ),
      mc(
        "¿Qué versión es correcta en el Río de la Plata para un amigo?",
        ["Che, ¿vos querés venir con nosotros?", "Che, ¿vos quieres venir con nosotros?", "Che, ¿usted querés venir?", "Che, ¿vos quiera venir?"],
        0,
        "El voseo rioplatense usa «vos» con la forma voseante: «¿vos querés?». «Vos quieres» mezcla vos con la forma de tú, «usted querés» mezcla usted con voseo y «vos quiera» usa subjuntivo sin motivo."
      ),
      toEs("Madam, may I ask you a question? (usted)", "Señora, ¿le puedo hacer una pregunta?", "Con usted, el complemento indirecto es «le»: «¿le puedo hacer una pregunta?».", ["Señora, ¿puedo hacerle una pregunta?", "Señora, ¿me permite hacerle una pregunta?"]),
      wo("Le ruego que disculpe las molestias que le hayamos causado.", "Registro formal coherente.", "Please accept our apologies for any inconvenience we may have caused you."),
    ]
  ),
  L(
    "formal-informal-register-4",
    "c1r-contrast-ustedeo-regions",
    "Contraste: el usted que no es distante",
    "En Colombia, Costa Rica o partes de Centroamérica, el usted también es de confianza. Aprende a leerlo.",
    "7 min",
    [
      sec(
        "Usted de cariño",
        "En zonas de Colombia (Bogotá, Boyacá, Antioquia en parte), Costa Rica y otras regiones, el usted se usa entre amigos, parejas o de padres a hijos: el ustedeo no siempre marca distancia. En España, en cambio, usar usted con un joven de tu edad suena frío. El contexto, no la forma, define la distancia.",
        [
          ["—Mijo, ¿usted ya comió? (madre a hijo, Colombia)", "—Honey, have you eaten yet?"],
          ["—¿Usted qué va a pedir, mi amor? (pareja, Costa Rica)", "—What are you having, love?"],
        ],
        [
          mc(
            "En Bogotá, una madre le dice a su hijo: «¿Usted ya hizo las tareas?». Esto indica…",
            ["un uso afectivo o habitual del usted", "un enfado muy grave necesariamente", "que no es su hijo", "un error gramatical"],
            0,
            "En Colombia (sobre todo en Bogotá y Boyacá) el usted entre familiares puede ser afectivo o simplemente la norma local. No implica necesariamente enfado, no dice nada sobre el parentesco y es gramaticalmente correcto."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Dónde sonaría más extraño ustedear a un compañero de clase de tu edad?",
        ["En Madrid", "En Bogotá", "En San José de Costa Rica", "En Tunja (Boyacá)"],
        0,
        "En España el tuteo entre iguales es casi universal, así que ustedear a un compañero sonaría rarísimo. En Bogotá, San José y Tunja el usted entre iguales, e incluso en familia, es habitual."
      ),
      fb("Completa (ustedeo afectivo).", "—Mi amor, ¿usted ___ frío? (tener)", "tiene", "Usted se conjuga en tercera persona, también en su uso afectivo: «¿usted tiene frío?»."),
      fb("Completa.", "—Mijo, cuídese mucho y ___ cuando llegue. (llamar, usted, imperativo + me)", "llámeme", "Imperativo de usted (subjuntivo) con el pronombre detrás: «llámeme»."),
      ms(
        "¿Qué factores deciden si el usted es distante o cercano?",
        ["la región", "la relación entre los hablantes", "la entonación y el vocabulario afectivo", "la longitud de la frase"],
        [0, 1, 2],
        "La región, la relación entre los hablantes, la entonación y el vocabulario afectivo determinan si el usted suena distante o cariñoso. La longitud de la frase no influye."
      ),
      mc(
        "Un viajero español en Costa Rica oye «Tranquilo, usted sabe que aquí lo queremos». ¿Qué debe entender?",
        ["Cercanía: es un uso afectivo.", "Le están echando del país.", "Le tratan con frialdad.", "Hay un error de concordancia."],
        0,
        "En Costa Rica el ustedeo es la norma general y aquí es afectivo: «tranquilo» y «lo queremos» lo confirman. No hay expulsión, frialdad ni error de concordancia."
      ),
      toEs("Honey, are you coming to dinner? (usted, afectivo)", "Mi amor, ¿usted viene a cenar?", "El ustedeo afectivo (Colombia, Costa Rica…) usa usted con cariño: «Mi amor, ¿usted viene…?».", ["Mi amor, ¿viene a cenar?", "Mijo, ¿usted viene a cenar?"]),
      wo("En algunas regiones el usted expresa cariño y no distancia.", "Idea central de la lección.", "In some regions usted expresses affection, not distance."),
    ]
  ),
  L(
    "formal-informal-register-6",
    "c1r-mission-three-messages",
    "Misión real: un mismo mensaje, tres destinatarios",
    "Tienes que cancelar una reunión. Escribe a tu jefa (usted), a un colega (tú) y a un amigo argentino (vos).",
    "8 min",
    [
      sec(
        "Adaptar sin cambiar el contenido",
        "Contenido: la reunión del jueves se cancela y se propone el lunes. A la jefa: «Lamento comunicarle que… ¿Le vendría bien el lunes?». Al colega: «Oye, se cancela lo del jueves. ¿Te va bien el lunes?». Al amigo argentino: «Che, se cae lo del jueves. ¿Te queda bien el lunes? Avisame».",
        [
          ["¿Le vendría bien el lunes?", "Would Monday suit you? (formal)"],
          ["¿Te va bien el lunes?", "Does Monday work for you? (tú)"],
          ["Avisame si podés.", "Let me know if you can. (vos)"],
        ],
        [
          mc(
            "¿Cuál va al amigo argentino?",
            ["¿Podés el lunes? Avisame.", "¿Puede el lunes? Avíseme.", "¿Puedes el lunes? Avísame.", "¿Podéis el lunes? Avisadme."],
            0,
            "Al amigo argentino se le vosea: «¿Podés…? Avisame» (sin tilde, porque es aguda en -e). «¿Puede…? Avíseme» es usted, «¿Puedes…? Avísame» es tuteo y «¿Podéis…? Avisadme» es vosotros, propio de España."
          ),
        ]
      ),
    ],
    [
      fb("A la jefa.", "Lamento ___ que la reunión del jueves queda cancelada. (comunicar + le)", "comunicarle", "Con usted, el pronombre es «le» y se une al infinitivo: «comunicarle»."),
      fb("Al colega.", "¿___ bien el lunes a las diez? (ir, tú, + te)", "Te va", "«Irle bien a alguien» significa convenirle; con tú: «¿te va bien…?»."),
      fb("Al amigo argentino.", "Si ___ el lunes, avisame. (poder, vos)", "podés", "El presente de vos de «poder» es «podés», sin diptongo y con acento en la última sílaba."),
      mt(
        "Relaciona el cierre con el destinatario.",
        [
          ["Quedo a la espera de su respuesta.", "la jefa"],
          ["¡Un abrazo, nos vemos!", "el colega"],
          ["Dale, abrazo grande.", "el amigo argentino"],
        ],
        "Cada cierre marca un registro."
      ),
      mc(
        "¿Qué disculpa encaja con la jefa?",
        ["Le pido disculpas por las molestias.", "Perdona el lío.", "Perdoná, che.", "Sorry, tío."],
        0,
        "Con la jefa corresponde el registro formal: «Le pido disculpas por las molestias». «Perdona el lío» tutea, «Perdoná, che» vosea con coloquialismo y «Sorry, tío» es muy informal."
      ),
      toEs("Would it be possible to move the meeting to Monday? (formal)", "¿Sería posible trasladar la reunión al lunes?", "El condicional de cortesía («¿sería posible…?») suaviza una petición formal.", ["¿Sería posible cambiar la reunión al lunes?", "¿Sería posible pasar la reunión al lunes?", "¿Sería posible mover la reunión al lunes?"]),
      wo("Che, se cae lo del jueves, ¿te queda bien el lunes?", "Registro rioplatense coloquial.", "Hey, Thursday's off, does Monday work for you?"),
    ]
  ),
  L(
    "formal-informal-register-6",
    "c1r-spiral-register-softening",
    "Repaso en espiral: registro, cortesía y condicional",
    "Suaviza peticiones con condicional, imperfecto de cortesía y subjuntivo, adecuando el tratamiento.",
    "7 min",
    [
      sec(
        "Escalera de cortesía",
        "Directo: «Dame el informe». Suavizado: «¿Me das el informe?». Más cortés: «¿Me podrías dar el informe?». Formal: «¿Sería tan amable de enviarme el informe?». Muy formal: «Le agradecería que me enviara el informe». El imperfecto también suaviza: «Quería pedirle un favor».",
        [
          ["Quería preguntarle una cosa.", "I wanted to ask you something."],
          ["Le agradecería que me respondiera antes del viernes.", "I'd appreciate a reply before Friday."],
        ],
        [
          mc(
            "La opción más formal:",
            ["¿Sería tan amable de cerrar la puerta?", "Cierra la puerta.", "¿Cierras la puerta?", "¿Me cierras la puerta, porfa?"],
            0,
            "El condicional con «tan amable de» es la fórmula más cortés y formal. «Cierra la puerta» es un imperativo directo, y «¿Cierras…?» y «porfa» son informales."
          ),
        ]
      ),
    ],
    [
      fb("Completa (subjuntivo).", "Le agradecería que me ___ los documentos. (enviar, usted)", "enviara", "Condicional + que + imperfecto de subjuntivo."),
      fb("Completa (imperfecto de cortesía).", "Buenos días, ___ saber si queda alguna plaza. (querer, yo)", "quería", "El imperfecto de cortesía («quería») suaviza una petición en el presente."),
      fb("Completa.", "¿Sería usted tan amable ___ indicarme la salida?", "de", "La fórmula es «ser tan amable de» + infinitivo: «¿Sería usted tan amable de…?»."),
      mc(
        "Ordena de menos a más cortés: (a) ¿Me pasas la sal? (b) Pásame la sal. (c) ¿Podrías pasarme la sal?",
        ["b, a, c", "a, b, c", "c, a, b", "b, c, a"],
        0,
        "De menos a más cortés: el imperativo («Pásame»), la pregunta en presente («¿Me pasas…?») y el condicional («¿Podrías…?»). Los otros órdenes colocan el condicional o el imperativo fuera de su lugar."
      ),
      ms(
        "¿Qué recursos suavizan una petición?",
        ["condicional (podría)", "imperfecto (quería)", "¿le importaría…?", "imperativo sin por favor"],
        [0, 1, 2],
        "El condicional («podría»), el imperfecto de cortesía («quería») y «¿le importaría…?» suavizan. El imperativo sin «por favor» es lo más directo, lo contrario de suavizar."
      ),
      toEs("Would you mind waiting a moment? (usted)", "¿Le importaría esperar un momento?", "«¿Le importaría» + infinitivo es la fórmula cortés de usted para pedir un favor.", ["¿Le importaría esperar un momentito?", "¿No le importaría esperar un momento?"]),
      wo("Le estaría muy agradecido si pudiera responderme cuanto antes.", "Cortesía formal con condicional.", "I would be very grateful if you could answer me as soon as possible."),
    ]
  ),
  L(
    "voseo-part-1-mastery-check",
    "c1r-transform-tu-to-vos",
    "Transformaciones: de tú a vos",
    "Convierte frases tuteantes al voseo rioplatense: presente, imperativo y pronombres.",
    "7 min",
    [
      sec(
        "Las reglas de conversión",
        "Presente: acento en la última sílaba y sin diptongo (tienes → tenés, puedes → podés, eres → sos). Imperativo: sin la -d final de vosotros (venid → vení, decid → decí; sentaos → sentate). Pronombres: te y tu se mantienen; tras preposición, vos (para vos, con vos).",
        [
          ["¿Tú quieres venir? → ¿Vos querés venir?", "Do you want to come?"],
          ["Ven aquí y siéntate. → Vení acá y sentate.", "Come here and sit down."],
          ["Esto es para ti. → Esto es para vos.", "This is for you."],
        ],
        [
          mc(
            "«Tú eres muy simpático.» en voseo:",
            ["Vos sos muy simpático.", "Vos eres muy simpático.", "Vos erés muy simpático.", "Vos es muy simpático."],
            0,
            "El presente de vos del verbo «ser» es «sos». «Vos eres» mezcla vos con la forma de tú, «erés» no existe y «es» es la forma de él o de usted."
          ),
        ]
      ),
    ],
    [
      fb("Pásalo a vos.", "¿Tú sabes dónde está? → ¿Vos ___ dónde está?", "sabés", "El voseo lleva el acento en la terminación: «sabés»."),
      fb("Pásalo a vos.", "Duermes muy poco. → ___ muy poco.", "Dormís", "El voseo no diptonga en presente: «dormís», no «duermes»."),
      fb("Pásalo a vos (imperativo).", "Dime la verdad. → ___ la verdad.", "Decime", "El imperativo de vos de «decir» es «decí»; con el pronombre, «decime»."),
      fb("Pásalo a vos.", "Voy contigo. → Voy con ___.", "vos", "Con vos (no «contigo» en el voseo pleno)."),
      mt(
        "Relaciona tú y vos.",
        [
          ["tienes", "tenés"],
          ["piensas", "pensás"],
          ["vienes", "venís"],
          ["pides", "pedís"],
        ],
        "Presente voseante: sin diptongo ni cambio vocálico."
      ),
      toEs("Do you want to come with me? (vos)", "¿Querés venir conmigo?", "El presente de vos de «querer» no diptonga y lleva acento final: «querés».", ["¿Vos querés venir conmigo?"]),
      wo("Vení a casa mañana y traé la guitarra.", "Imperativos voseantes.", "Come over tomorrow and bring the guitar."),
    ]
  ),
  L(
    "voseo-part-1-mastery-check",
    "c1r-error-hunt-voseo-forms",
    "Caza de errores: formas voseantes mal construidas",
    "«Vos eres», «vos tienés», «ti» con vos, «vení» con tilde mal puesta: repara los híbridos.",
    "7 min",
    [
      sec(
        "Híbridos que no existen",
        "✗ vos eres (→ sos). ✗ vos tienés (→ tenés: se pierde el diptongo). ✗ para ti (→ para vos). ✗ sentáte (→ sentate: con enclítico, la palabra se vuelve llana y no lleva tilde). El imperativo simple sí lleva tilde: vení, decí, comé.",
        [
          ["✗ Vos puedés hacerlo. → ✓ Vos podés hacerlo.", "You can do it."],
          ["✗ Callaté. → ✓ Callate.", "Be quiet."],
        ],
        [
          mc(
            "¿Cuál está bien escrita?",
            ["Decime", "Decíme", "Dicime", "Dícime"],
            0,
            "«Decí» + «me» da «decime», palabra llana terminada en vocal, que no lleva tilde. «Decíme» conserva una tilde que sobra, y «Dicime» y «Dícime» cambian la vocal de la raíz."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Vos ___ razón. (el alumno puso: tienés)", "tenés", "El presente de vos no diptonga: «tenés», no «tienés»."),
      fb("Corrige.", "¿Vos ___ de Córdoba? (el alumno puso: eres)", "sos", "El presente de vos de «ser» es «sos»; «eres» es la forma de tú."),
      fb("Corrige.", "Este regalo es para ___. (el alumno puso: ti)", "vos", "Tras preposición, en zonas voseantes se usa «vos», no «ti»: «para vos»."),
      fb("Corrige la tilde.", "___, que te vas a caer. (el alumno puso: Agarráte)", "Agarrate", "«Agarrá» + «te» forma una palabra llana terminada en vocal: «agarrate», sin tilde."),
      ms(
        "¿Qué formas son correctas en el voseo rioplatense?",
        ["vos querés", "vos quieres", "vos jugás", "vos juegás"],
        [0, 2],
        "El voseo rioplatense no diptonga en presente: «querés», «jugás». «Vos quieres» mezcla vos con la forma de tú, y «juegás» mantiene un diptongo que no corresponde."
      ),
      mc(
        "¿Qué imperativo voseante de «ir» es el más usado en el Río de la Plata?",
        ["andá", "í", "vé", "vení"],
        0,
        "Para el imperativo de «ir», en el Río de la Plata se usa «andá» (de «andar»). «Í» no se usa, «vé» es una forma de tú mal acentuada y «vení» es el imperativo de «venir»."
      ),
      wo("Tranquilo, vos podés con esto y con mucho más.", "Voseo correcto.", "Relax, you can handle this and much more."),
    ]
  ),
  L(
    "voseo-part-2-2",
    "c1r-dialogue-lab-porteno",
    "Laboratorio de diálogo: una charla porteña",
    "Participa en una conversación en Buenos Aires: voseo, «che», «dale», «¿viste?» y demás marcadores.",
    "7 min",
    [
      sec(
        "Marcadores rioplatenses",
        "Che: llamar la atención. Dale: de acuerdo / vamos. ¿Viste?: ¿sabes? / ¿entiendes? (apoyo). Mirá vos: expresión de sorpresa. Bárbaro: genial. Todos se combinan con el voseo: «Che, ¿vos venís? —Dale, bárbaro».",
        [
          ["—¿Nos vemos a las ocho? —Dale.", "—See you at eight? —Sure."],
          ["—Se mudó a Madrid. —¡Mirá vos!", "—He moved to Madrid. —Well, how about that!"],
        ],
        [
          mc(
            "«—¿Vamos al cine? —___, ¿a qué hora?»",
            ["Dale", "Che", "Mirá vos", "¿Viste?"],
            0,
            "«Dale» significa «de acuerdo» y acepta el plan. «Che» es un vocativo, «Mirá vos» expresa sorpresa y «¿Viste?» es una muletilla de confirmación."
          ),
        ]
      ),
    ],
    [
      fb("Completa (voseo).", "Che, ¿vos ___ algo de Martín? (saber)", "sabés", "Presente de vos de «saber»: «sabés», con acento en la última sílaba."),
      fb("Completa (imperativo).", "___ que te cuento lo que pasó. (esperar, vos)", "Esperá", "El imperativo de vos quita la -r final y lleva tilde: «esperá»."),
      mc(
        "«—Ganó la lotería y se fue a vivir a la playa. —¡___!»",
        ["Mirá vos", "Dale", "Che", "Bárbaro, dale"],
        0,
        "«Mirá vos» expresa sorpresa ante una noticia. «Dale» y «Bárbaro, dale» aceptan un plan, y «Che» solo llama la atención."
      ),
      mt(
        "Relaciona el marcador con su función.",
        [
          ["che", "llamar la atención"],
          ["dale", "aceptar"],
          ["¿viste?", "buscar complicidad"],
          ["bárbaro", "valorar positivamente"],
        ],
        "Marcadores rioplatenses."
      ),
      fb("Completa.", "Si ___ tiempo, pasá por casa. (tener, vos)", "tenés", "El presente de vos de «tener» no diptonga: «tenés»."),
      toEs("Hey, are you coming tonight? (vos)", "Che, ¿venís esta noche?", "Presente de vos de «venir»: «venís», sin diptongo.", ["Che, ¿vos venís esta noche?", "Che, ¿venís hoy a la noche?"]),
      wo("Dale, nos vemos a las nueve en la esquina de siempre.", "Aceptar con dale.", "Sure, see you at nine at the usual corner."),
    ]
  ),
  L(
    "voseo-part-2-2",
    "c1r-contrast-voseo-varieties",
    "Contraste: voseo rioplatense, chileno y centroamericano",
    "El voseo no es uno solo: en Chile, «¿cómo estái?»; en Centroamérica, formas parecidas a las rioplatenses con otra valoración social.",
    "7 min",
    [
      sec(
        "Tres voseos",
        "Rioplatense: pronombre vos + verbo voseante (vos tenés), prestigioso y general. Chileno: verbo voseante con pronombre tú (tú estái, ¿qué querís?), coloquial. Centroamericano: vos + formas parecidas a las rioplatenses (vos sos, vos tenés), extendido pero históricamente estigmatizado en algunos países.",
        [
          ["¿Cómo estái? (Chile, coloquial)", "How are you?"],
          ["Vos sabés que te quiero. (Río de la Plata / Centroamérica)", "You know I love you."],
        ],
        [
          mc(
            "«¿Qué querís hacer hoy?» es típico de…",
            ["Chile", "Argentina", "España", "México"],
            0,
            "Las terminaciones -ís y -ái («querís», «estái») son el voseo verbal chileno. En Argentina se diría «querés», y en España y México «quieres»."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué voseo combina el pronombre tú con verbo voseante?",
        ["el chileno", "el rioplatense", "el centroamericano", "ninguno"],
        0,
        "En Chile se combina el pronombre «tú» con verbo voseante («tú querís»). El rioplatense usa «vos» + verbo voseante y en Centroamérica también predomina «vos»."
      ),
      mc(
        "¿En qué zona el voseo es norma culta en medios y escuela?",
        ["Río de la Plata", "España", "Caribe insular", "México central"],
        0,
        "En Argentina y Uruguay el voseo es la norma culta, también en medios y escuela. En España, el Caribe insular y el centro de México se tutea."
      ),
      ms(
        "¿Qué países tienen voseo extendido?",
        ["Argentina", "Uruguay", "Nicaragua", "República Dominicana"],
        [0, 1, 2],
        "Argentina, Uruguay y Nicaragua tienen voseo extendido. República Dominicana, como el resto del Caribe insular, tutea."
      ),
      fb("Completa (chileno coloquial).", "¿Cómo ___? (estar, tú, voseo chileno)", "estái", "El voseo verbal chileno coloquial usa -ái en los verbos en -ar: «estái»."),
      fb("Completa (rioplatense).", "¿Vos ___ el colectivo o caminás? (tomar)", "tomás", "Presente de vos: «tomás», con acento en la terminación."),
      toEs("You know I'm right. (vos, rioplatense)", "Vos sabés que tengo razón.", "Presente de vos de «saber»: «sabés».", ["Sabés que tengo razón."]),
      wo("En Chile se vosea el verbo pero se mantiene el tú.", "Idea clave.", "In Chile the verb takes voseo but tú is kept."),
    ]
  ),
  L(
    "voseo-part-2-mastery-check",
    "c1r-mission-buenos-aires-flat",
    "Misión real: alquilar un departamento en Buenos Aires",
    "Negocia por WhatsApp con un dueño porteño: voseo, léxico rioplatense y cortesía.",
    "8 min",
    [
      sec(
        "El chat con el dueño",
        "El dueño escribe: «Hola, ¿vos sos el que preguntó por el depto de Palermo? Está re lindo, tiene balcón. ¿Querés pasar a verlo mañana?». Léxico útil: depto (piso), ambiente (habitación), expensas (gastos de comunidad), luminoso, a estrenar.",
        [
          ["¿Las expensas están incluidas?", "Are the building fees included?"],
          ["Es un dos ambientes muy luminoso.", "It's a bright one-bedroom (two rooms)."],
        ],
        [
          mc(
            "«Expensas» en el Río de la Plata equivale a…",
            ["gastos de comunidad", "fianza", "muebles", "vecinos"],
            0,
            "En el Río de la Plata, «expensas» son los gastos comunes del edificio (gastos de comunidad). La fianza es el «depósito» o la «garantía», y no se refiere a muebles ni a vecinos."
          ),
        ]
      ),
    ],
    [
      fb("Responde al dueño (voseo).", "Hola, sí, soy yo. ¿Mañana a las seis ___? (poder, vos)", "podés", "Presente de vos de «poder», sin diptongo: «podés»."),
      fb("Pregunta.", "¿Me ___ decir cuánto son las expensas? (poder, vos, condicional de cortesía)", "podrías", "El condicional de vos coincide con el de tú."),
      mc(
        "El dueño escribe: «Pasá cuando quieras». Significa…",
        ["Ven cuando quieras.", "Pasa de largo.", "No vengas.", "Pagá cuando quieras."],
        0,
        "«Pasá» es el imperativo de vos de «pasar» = ven, entra. No significa pasar de largo ni rechazar la visita, y no tiene nada que ver con «pagar»."
      ),
      mc(
        "«Un dos ambientes» es…",
        ["un piso con salón y un dormitorio", "un piso de dos dormitorios", "dos pisos", "un estudio sin cocina"],
        0,
        "En Argentina se cuentan los ambientes: un «dos ambientes» tiene living (salón) y un dormitorio. Dos dormitorios serían «tres ambientes», no son dos pisos y un estudio sería «monoambiente»."
      ),
      fb("Cierra el trato.", "Dale, ___ mañana. ¡Gracias! (verse, nosotros)", "nos vemos", "«Nos vemos» (verse, recíproco) es la despedida habitual para quedar."),
      toEs("Can you send me more photos? (vos)", "¿Me podés mandar más fotos?", "Presente de vos: «¿me podés mandar…?»; en el Río de la Plata se usa «mandar» por «enviar».", ["¿Podés mandarme más fotos?", "¿Me mandás más fotos?"]),
      wo("¿Vos sabés si el edificio tiene ascensor?", "Pregunta voseante.", "Do you know if the building has an elevator?"),
    ]
  ),
  L(
    "voseo-part-2-mastery-check",
    "c1r-spiral-voseo-subjunctive-imperative",
    "Repaso en espiral: voseo con subjuntivo e imperativo negativo",
    "El subjuntivo y el imperativo negativo del voseo: la norma culta usa las formas de tú (no vengas), el habla, a veces, no vengás.",
    "8 min",
    [
      sec(
        "Dos normas en convivencia",
        "Imperativo afirmativo: vení, decí, tené. Imperativo negativo y subjuntivo: la norma culta rioplatense prefiere las formas tuteantes (no vengas, quiero que tengas cuidado); en el habla informal aparecen formas agudas (no vengás, que tengás). Pretérito: igual que tú (vos hablaste).",
        [
          ["No te preocupes, yo me encargo.", "Don't worry, I'll take care of it."],
          ["Quiero que me digas la verdad.", "I want you to tell me the truth."],
          ["¿Vos viste el partido ayer?", "Did you see the match yesterday?"],
        ],
        [
          mc(
            "Forma culta rioplatense: «No ___ tarde.» (llegar, vos)",
            ["llegues", "llegá", "llegás", "llegar"],
            0,
            "El imperativo negativo usa el subjuntivo, y la norma culta rioplatense prefiere la forma tuteante: «No llegues tarde» («llegués» se oye en el habla coloquial). «Llegá» es afirmativo, «llegás» indicativo y «llegar» infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (imperativo afirmativo).", "___ cuidado con el perro. (tener, vos)", "Tené", "El imperativo de vos de «tener» es «tené», con tilde."),
      fb("Completa (subjuntivo, norma culta).", "Espero que ___ un buen viaje. (tener, vos)", "tengas", "En la norma culta rioplatense, el subjuntivo de vos coincide con el de tú: «tengas»."),
      fb("Completa (pretérito).", "¿Vos ___ la película que te recomendé? (ver)", "viste", "En el pretérito, la forma de vos coincide con la de tú en la norma culta: «viste»."),
      mc(
        "«Si vos ___ más tiempo, ¿vendrías?» (tener)",
        ["tuvieras", "tenés", "tuviste", "tengás"],
        0,
        "La condición irreal lleva imperfecto de subjuntivo, igual que con tú: «Si vos tuvieras». «Tenés» sería una condición real (y no concuerda con «vendrías»), «tuviste» es pasado y «tengás» es presente de subjuntivo, que no va tras «si»."
      ),
      ms(
        "¿Qué frases son correctas en el voseo culto?",
        ["Andá y decile que venga.", "No te olvides de llamarme.", "Vos hablastes muy bien.", "Ojalá que puedas venir."],
        [0, 1, 3],
        "«Hablastes» es una forma no estándar: el pretérito de vos es «hablaste», igual que el de tú. «Andá y decile», «No te olvides» y «Ojalá que puedas» son voseo culto correcto."
      ),
      toEs("Don't tell him anything. (vos)", "No le digas nada.", "El imperativo negativo usa el subjuntivo: «no le digas» (coloquial, «no le digás»).", ["No le digás nada.", "No le cuentes nada."]),
      wo("Decile que no se preocupe, que ya lo arreglamos.", "Imperativo voseante + subjuntivo.", "Tell him not to worry, we've already fixed it."),
    ]
  ),
  L(
    "regional-lexical-variation-2",
    "c1r-word-web-everyday-objects",
    "Red de palabras: objetos cotidianos en seis países",
    "Coche, carro, auto; zumo, jugo; móvil, celular: organiza el vocabulario cotidiano por región.",
    "7 min",
    [
      sec(
        "Un objeto, muchos nombres",
        "Coche (España) / carro (México, Colombia, Caribe) / auto (Cono Sur). Zumo (España) / jugo (América). Móvil (España) / celular (América). Ordenador (España) / computadora o computador (América). Gafas (España) / lentes o anteojos (América). Conducir (España) / manejar (América).",
        [
          ["Se me olvidó el celular en el carro. (México)", "I left my phone in the car."],
          ["Me he dejado el móvil en el coche. (España)", "I've left my phone in the car."],
        ],
        [
          mc(
            "¿Qué palabra usaría un argentino para «coche»?",
            ["auto", "carro", "guagua", "buseta"],
            0,
            "En el Cono Sur se dice «auto». «Carro» es de México, Centroamérica y parte de Sudamérica; «guagua» es autobús en el Caribe y «buseta» es un autobús pequeño en Colombia o Venezuela."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la palabra de España con su equivalente más extendido en América.",
        [
          ["zumo", "jugo"],
          ["móvil", "celular"],
          ["ordenador", "computadora"],
          ["conducir", "manejar"],
        ],
        "Pares España / América."
      ),
      fb("Adapta a México.", "Voy a aparcar el coche. → Voy a estacionar el ___.", "carro", "En México se dice «carro» (y «estacionar» por «aparcar»)."),
      fb("Adapta a Argentina.", "Me compré unas gafas nuevas. → Me compré unos ___ nuevos.", "anteojos", "En Argentina se dice «anteojos» (también «lentes»); «gafas» es de España."),
      mc(
        "¿Qué frase suena claramente española (de España)?",
        ["¿Me dejas tu ordenador un momento?", "¿Me prestás tu computadora?", "¿Me prestas tu computadora?", "¿Me prestás la compu?"],
        0,
        "«Ordenador» y el tuteo con «dejar» son propios de España. «Computadora», «compu» y el voseo («prestás») son americanos."
      ),
      ms(
        "¿Qué palabras significan «teléfono portátil»?",
        ["móvil", "celular", "cel", "ordenador"],
        [0, 1, 2],
        "«Móvil» (España), «celular» y «cel» (América) designan el teléfono portátil. «Ordenador» es la computadora."
      ),
      toEs("I'll drive; you look at the map. (América)", "Yo manejo; tú mira el mapa.", "En América se dice «manejar» por «conducir».", ["Yo manejo, tú mira el mapa.", "Manejo yo; tú mira el mapa."]),
      wo("En Colombia le dicen carro y en Chile le dicen auto.", "Variación léxica.", "In Colombia they call it carro and in Chile they call it auto."),
    ]
  ),
  L(
    "regional-lexical-variation-2",
    "c1r-mission-market-shopping",
    "Misión real: hacer la compra en tres mercados",
    "Compras fruta y verdura en Madrid, Ciudad de México y Santiago: pide lo mismo con palabras distintas.",
    "7 min",
    [
      sec(
        "La lista de la compra viaja",
        "Patata (España) / papa (América). Fresa (España, México) / frutilla (Cono Sur). Melocotón (España) / durazno (América). Aguacate (España, México) / palta (Cono Sur, Perú). Judías (España) / frijoles (México) / porotos (Cono Sur). Maíz / choclo (mazorca, Cono Sur y Andes) / elote (México).",
        [
          ["Un kilo de paltas y medio de frutillas, por favor. (Chile)", "A kilo of avocados and half a kilo of strawberries, please."],
          ["¿A cómo están los elotes? (México)", "How much is the corn on the cob?"],
        ],
        [
          mc(
            "En Santiago de Chile pides «aguacates». ¿Qué palabra entenderán mejor?",
            ["paltas", "elotes", "porotos", "duraznos"],
            0,
            "En Chile, el aguacate se llama «palta». Los «elotes» son mazorcas de maíz (México), los «porotos» son judías o frijoles y los «duraznos» son melocotones."
          ),
        ]
      ),
    ],
    [
      fb("Adapta a Chile.", "Medio kilo de fresas. → Medio kilo de ___.", "frutillas", "En el Cono Sur las fresas se llaman «frutillas»."),
      fb("Adapta a México.", "Un kilo de judías negras. → Un kilo de ___ negros.", "frijoles", "En México las judías se llaman «frijoles» (masculino: «frijoles negros»)."),
      fb("Adapta a América en general.", "Tres kilos de patatas. → Tres kilos de ___.", "papas", "En toda América se dice «papa»; «patata» es de España."),
      mt(
        "Relaciona la palabra con el país donde la oirías.",
        [
          ["choclo", "Chile"],
          ["elote", "México"],
          ["melocotón", "España"],
        ],
        "Mazorca y fruta por región."
      ),
      mc(
        "«Durazno» es…",
        ["melocotón", "ciruela", "calabaza", "pera"],
        0,
        "En América, «durazno» es el melocotón. La ciruela, la calabaza y la pera tienen otros nombres."
      ),
      toEs("A kilo of peaches, please. (América)", "Un kilo de duraznos, por favor.", "En América, el melocotón se llama «durazno».", ["Un kilo de durazno, por favor.", "Me da un kilo de duraznos, por favor."]),
      wo("¿Me da medio kilo de porotos y dos paltas?", "Pedido en el Cono Sur.", "Can I have half a kilo of beans and two avocados?"),
    ]
  ),
  L(
    "regional-lexical-variation-4",
    "c1r-error-hunt-false-friends-dialectal",
    "Caza de errores: falsos amigos entre países",
    "Tinto, guagua, pena, coger: palabras que en otro país significan otra cosa (o algo que no conviene decir).",
    "7 min",
    [
      sec(
        "Mismo término, otro sentido",
        "Tinto: vino tinto (España) / café solo (Colombia). Guagua: autobús (Cuba, Canarias) / bebé (Chile, Andes). Pena: tristeza (España) / vergüenza (México, Centroamérica, Colombia). Coger: tomar, agarrar (neutro en España, Colombia y buena parte del Caribe) / término vulgar (México, Argentina, Uruguay, Venezuela y gran parte de Centroamérica): allí se dice tomar o agarrar.",
        [
          ["¿Te tomas un tinto? (Bogotá = café)", "Would you like a coffee?"],
          ["Me da pena hablar en público. (México = vergüenza)", "I'm embarrassed to speak in public."],
        ],
        [
          mc(
            "Un chileno dice «La guagua está durmiendo». Se refiere a…",
            ["un bebé", "un autobús", "un perro", "un taxi"],
            0,
            "En Chile (y en la zona andina), «guagua» significa bebé. El autobús es «guagua» en el Caribe, pero no en Chile; tampoco significa perro ni taxi."
          ),
        ]
      ),
    ],
    [
      mc(
        "Estás en Buenos Aires. ¿Qué frase es la adecuada para ir al centro?",
        ["Voy a tomar el colectivo.", "Voy a coger el colectivo.", "Voy a coger la guagua.", "Voy a tomar la guagua."],
        0,
        "En Argentina el autobús es el «colectivo» y se usa «tomar», porque «coger» es allí malsonante. «Guagua» es el autobús del Caribe, no de Buenos Aires."
      ),
      fb("Adapta a México.", "Voy a coger un taxi. → Voy a ___ un taxi.", "tomar", "En México coger es vulgar; allí (y en Argentina, Uruguay o gran parte de Centroamérica) se dice tomar. En Colombia y el Caribe, en cambio, coger es neutro."),
      mt(
        "Relaciona la palabra con su sentido en el lugar indicado.",
        [
          ["tinto (Colombia)", "café solo"],
          ["guagua (Cuba)", "autobús"],
          ["pena (México)", "vergüenza"],
        ],
        "Falsos amigos dialectales."
      ),
      mc(
        "Un colombiano te ofrece «un tintico». ¿Qué te va a dar?",
        ["un café pequeño", "un vino tinto pequeño", "una mancha", "un refresco"],
        0,
        "En Colombia, «tinto» es un café solo y «tintico» su diminutivo afectivo. No es vino tinto, ni una mancha, ni un refresco."
      ),
      ms(
        "¿Qué palabras conviene evitar o usar con cuidado según el país?",
        ["coger", "concha", "tomar", "caminar"],
        [0, 1],
        "«Coger» y «concha» son malsonantes en varios países (el Río de la Plata, México…), así que conviene evitarlos o usarlos con cuidado. «Tomar» y «caminar» son neutros en todas partes."
      ),
      toEs("I was embarrassed to ask. (México)", "Me dio pena preguntar.", "En México y Centroamérica, «dar pena» significa dar vergüenza.", ["Me dio pena preguntarle.", "Me daba pena preguntar."]),
      wo("En Colombia un tinto es un café, no un vino.", "Falso amigo dialectal.", "In Colombia a tinto is a coffee, not a wine."),
    ]
  ),
  L(
    "regional-lexical-variation-4",
    "c1r-contrast-cool-and-slang",
    "Contraste: «guay», «chévere», «padre», «bacán», «copado»",
    "Cada país tiene su palabra para «genial». Reconócelas y elige la adecuada según el interlocutor.",
    "6 min",
    [
      sec(
        "Genial en el mundo hispano",
        "Guay (España). Chévere (Venezuela, Colombia, Caribe, Perú). Padre / chido (México). Bacán (Chile, Perú, Colombia). Copado / genial (Argentina). Tuanis (Costa Rica). Todas son coloquiales; en un registro formal: excelente, estupendo.",
        [
          ["¡Qué padre está tu casa! (México)", "Your house is so cool!"],
          ["La fiesta estuvo bacán. (Chile)", "The party was great."],
        ],
        [
          mc(
            "Un venezolano diría:",
            ["¡Qué chévere!", "¡Qué guay!", "¡Qué padre!", "¡Qué tuanis!"],
            0,
            "«Chévere» es típico de Venezuela (también de Colombia y el Caribe). «Guay» es de España, «padre» de México y «tuanis» de Costa Rica."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la palabra con su país más característico.",
        [
          ["guay", "España"],
          ["chido", "México"],
          ["copado", "Argentina"],
          ["tuanis", "Costa Rica"],
        ],
        "Palabras para «genial»."
      ),
      mc(
        "¿Qué frase es adecuada en un informe formal?",
        ["Los resultados han sido excelentes.", "Los resultados han sido guays.", "Los resultados han estado bacanes.", "Los resultados han estado chidos."],
        0,
        "En un informe formal se usan adjetivos neutros como «excelentes». «Guays» (España), «bacanes» (Chile, Colombia) y «chidos» (México) son coloquiales y regionales."
      ),
      fb("Completa (México).", "¡Qué ___ está tu coche nuevo! (genial, adjetivo mexicano de 5 letras)", "padre", "En México, «padre» significa genial o estupendo: «¡qué padre!»."),
      fb("Completa (España).", "Esa peli es muy ___.", "guay", "En España, «guay» es el adjetivo coloquial para «genial»."),
      ms(
        "¿Qué palabras significan «genial»?",
        ["bacán", "chévere", "fome", "copado"],
        [0, 1, 3],
        "«Bacán» (Chile, Perú, Colombia), «chévere» (Venezuela, Colombia) y «copado» (Argentina) significan genial. «Fome» es chileno y significa aburrido."
      ),
      toEs("The concert was awesome. (Chile)", "El concierto estuvo bacán.", "En Chile, «bacán» significa genial o increíble.", ["El concierto fue bacán.", "El concierto estuvo muy bacán."]),
      wo("Qué chévere que hayas venido a la fiesta.", "Chévere + subjuntivo.", "How great that you came to the party."),
    ]
  ),
  L(
    "regional-lexical-variation-7",
    "c1r-story-detective-where-am-i",
    "Detective de textos: ¿de dónde es quien habla?",
    "Lee monólogos breves y deduce el país por el vocabulario, el tratamiento y los marcadores.",
    "8 min",
    [
      sec(
        "Pistas lingüísticas",
        "El léxico (colectivo, guagua, carro), el tratamiento (vos, vosotros, ustedes) y las muletillas (che, güey, tío, pues, po, ¿cachái?) delatan el origen. Ejemplo: «Oye, tío, ¿vosotros vais a coger el metro?» → España (tío, vosotros, coger).",
        [
          ["Che, ¿vamos en colectivo o en subte? → Argentina", "Hey, shall we take the bus or the subway?"],
          ["¿Cachái que el pololo de la Cata se fue? → Chile", "Do you get that Cata's boyfriend left?"],
        ],
        [
          mc(
            "«Güey, ¿vamos por unos tacos? Está bien padre el lugar.»",
            ["México", "España", "Chile", "Argentina"],
            0,
            "«Güey» y «padre» (= genial) son marcas inconfundibles de México. En España se diría «tío» y «guay», en Chile «bacán» y en Argentina «che» y «copado»."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Tía, ¿habéis visto qué guay está el piso nuevo de Lucía?»",
        ["España", "México", "Colombia", "Uruguay"],
        0,
        "«Tía» como vocativo, «habéis» (vosotros), «guay» y «piso» apuntan a España. En México, Colombia o Uruguay no se usa «vosotros» y se diría «departamento» o «apartamento»."
      ),
      mc(
        "«Parce, ¿nos tomamos un tinto antes de coger el bus?»",
        ["Colombia", "Argentina", "España", "Cuba"],
        0,
        "«Parce» y «tinto» (café) son colombianos, y allí «coger» es neutro. En Argentina se diría «che» y «colectivo», en España «tío» y en Cuba «guagua»."
      ),
      mc(
        "«Vos sabés que el partido estuvo re aburrido, ¿viste?»",
        ["Argentina o Uruguay", "México", "España", "Puerto Rico"],
        0,
        "El voseo («sabés»), el intensificador «re» y la muletilla «¿viste?» son del Río de la Plata. En México, España o Puerto Rico se tutea."
      ),
      mc(
        "«Oye, ¿cogemos la guagua o vamos a pie? Está brutal el calor, mano.»",
        ["Puerto Rico / Caribe", "Chile", "Argentina", "Perú"],
        0,
        "«Guagua» (autobús), «brutal» y «mano» (de hermano) apuntan al Caribe, como Puerto Rico. En Chile «guagua» es bebé, y en Argentina y Perú el autobús tiene otros nombres."
      ),
      fb("Completa la pista chilena.", "¿Cachái lo que te digo, ___?", "po", "«Po» (de «pues») es una muletilla muy chilena al final de la frase."),
      ms(
        "¿Qué pistas apuntan a España?",
        ["vosotros", "tío/tía como vocativo", "guay", "che"],
        [0, 1, 2],
        "«Vosotros», «tío/tía» como vocativo y «guay» apuntan a España. «Che» es típico del Río de la Plata."
      ),
      wo("Por el vocabulario se puede adivinar de dónde es alguien.", "Idea de la lección.", "From vocabulary you can guess where someone is from."),
    ]
  ),
  L(
    "regional-lexical-variation-7",
    "c1r-spiral-regional-register",
    "Repaso en espiral: variación, registro y voseo",
    "Combina lo aprendido: elige palabra, tratamiento y registro según el país y la situación.",
    "7 min",
    [
      sec(
        "Tres decisiones a la vez",
        "Cuando hablas en otro país decides: 1) la palabra (auto/carro/coche), 2) el tratamiento (tú/vos/usted/vosotros/ustedes), 3) el registro (formal/coloquial). Ejemplo: a un taxista en Buenos Aires: «¿Me lleva al aeropuerto, por favor?» (usted, formal) o «¿Me llevás…?» (vos, si hay confianza).",
        [
          ["Disculpe, ¿dónde puedo tomar el colectivo 60? (Buenos Aires)", "Excuse me, where can I take bus 60?"],
          ["Perdona, ¿dónde se coge el autobús 27? (Madrid)", "Excuse me, where do I catch bus 27?"],
        ],
        [
          mc(
            "Pregunta a una señora mayor en Ciudad de México:",
            ["Disculpe, señora, ¿dónde tomo el camión al centro?", "Oye, tía, ¿dónde cojo el bus?", "Che, ¿dónde tomo el bondi?", "Güey, ¿dónde está el camión?"],
            0,
            "A una señora mayor en México se le habla de usted («Disculpe, señora») y el autobús es el «camión». «Oye, tía… cojo» es tuteo coloquial de España, «Che… bondi» es argentino y «Güey» es demasiado coloquial para una desconocida."
          ),
        ]
      ),
    ],
    [
      fb("Buenos Aires, a un amigo.", "¿___ si hay subte a esta hora? (saber, vos)", "Sabés", "En Buenos Aires, con un amigo se vosea: «¿Sabés…?», con acento final."),
      fb("Madrid, a unos amigos.", "¿___ venir a cenar el sábado? (querer, vosotros)", "Queréis", "En España, para varios amigos se usa vosotros: «¿Queréis…?»."),
      fb("Bogotá, a un desconocido.", "Disculpe, ¿me ___ decir la hora? (poder, usted)", "puede", "Con un desconocido en Bogotá se usa usted: «¿me puede decir…?»."),
      mc(
        "En Sevilla, a unos clientes en una tienda:",
        ["¿Qué desean ustedes?", "¿Qué deseáis vos?", "¿Qué querés?", "¿Qué desean vosotros?"],
        0,
        "Con clientes se usa «ustedes» (formal): «¿Qué desean ustedes?». «Deseáis vos» mezcla vosotros con vos, «querés» es voseo informal y «desean vosotros» no concuerda."
      ),
      mc(
        "Un mensaje en español neutro para toda Latinoamérica evitaría…",
        ["el voseo y el vosotros", "el usted", "el presente", "los adjetivos"],
        0,
        "El español neutro evita las formas marcadas regionalmente, como el voseo y el vosotros, y usa tú/usted y ustedes. El usted, el presente y los adjetivos son comunes a todas las variedades."
      ),
      toEs("Excuse me, sir, where can I catch a taxi? (América)", "Disculpe, señor, ¿dónde puedo tomar un taxi?", "Tomar es la opción segura en toda América: coger es vulgar en México, Argentina y otros países (aunque neutro en Colombia y el Caribe).", ["Disculpe, señor, ¿dónde tomo un taxi?", "Perdone, señor, ¿dónde puedo tomar un taxi?"]),
      wo("Antes de hablar, piensa en la palabra, el tratamiento y el registro.", "Resumen de la lección.", "Before speaking, think about the word, the form of address and the register."),
    ]
  ),
  L(
    "neutral-vs-colloquial-2",
    "c1r-style-workshop-colloquial-to-neutral",
    "Taller de estilo: de coloquial a neutro",
    "Reescribe mensajes de amigos para un comunicado: fuera muletillas, apócopes e intensificadores coloquiales.",
    "7 min",
    [
      sec(
        "Qué se elimina y qué se sustituye",
        "Muletillas (o sea, en plan, pues, tipo) → se eliminan. Apócopes (finde, peli, profe, cole) → forma completa. Intensificadores (súper, re, mogollón, un montón) → muy, gran cantidad de. Verbos coloquiales (currar, flipar, pillar) → trabajar, sorprenderse, entender/conseguir.",
        [
          ["Mogollón de gente flipó con la peli. → Mucha gente se sorprendió con la película.", "Loads of people were blown away by the movie."],
          ["El finde curro. → Trabajo el fin de semana.", "I'm working this weekend."],
        ],
        [
          mc(
            "Versión neutra de «Había un montón de gente»:",
            ["Había una gran cantidad de personas.", "Había mogollón de gente.", "Había súper mucha gente.", "Había re mucha gente."],
            0,
            "La versión neutra es «una gran cantidad de personas». «Mogollón» es coloquial de España, «súper mucha» es coloquial y poco gramatical, y «re mucha» es rioplatense."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza.", "La profe nos explicó el examen. → La ___ nos explicó el examen.", "profesora", "En registro neutro se evita la apócope coloquial «profe»: «la profesora»."),
      fb("Neutraliza.", "No pillo lo que dice. → No ___ lo que dice.", "entiendo", "«Pillar» (entender) es coloquial de España; la forma neutra es «entender»."),
      fb("Neutraliza.", "Está súper cansado. → Está ___ cansado.", "muy", "«Súper» como intensificador es coloquial; en registro neutro se dice «muy»."),
      mt(
        "Relaciona la palabra coloquial con su equivalente neutro.",
        [
          ["currar", "trabajar"],
          ["flipar", "sorprenderse"],
          ["cole", "colegio"],
          ["tele", "televisión"],
        ],
        "Coloquial → neutro."
      ),
      mc(
        "¿Qué versión es neutra?",
        ["La reunión fue muy productiva.", "O sea, la reunión estuvo en plan bien.", "La reunión estuvo re buena, ¿viste?", "La reunión molaba mogollón."],
        0,
        "«La reunión fue muy productiva» no tiene muletillas ni léxico regional. «O sea… en plan» son muletillas coloquiales, «re buena, ¿viste?» es rioplatense y «molaba mogollón» es jerga de España."
      ),
      toEs("The meeting is next weekend. (neutral)", "La reunión es el próximo fin de semana.", "En registro neutro se dice «fin de semana», no la apócope coloquial «finde».", ["La reunión será el próximo fin de semana."]),
      wo("Los resultados de la encuesta sorprendieron a muchas personas.", "Registro neutro.", "The survey results surprised many people."),
    ]
  ),
  L(
    "neutral-vs-colloquial-2",
    "c1r-dialogue-lab-filler-words",
    "Laboratorio de diálogo: las muletillas y su función",
    "«Pues», «o sea», «bueno», «vamos», «es que»: no son relleno sin más; cada una tiene una función en la charla.",
    "6 min",
    [
      sec(
        "Pequeñas palabras, grandes funciones",
        "Pues: arranca una respuesta («—¿Vienes? —Pues no sé»). O sea: reformula («Llegó tarde, o sea, como siempre»). Bueno: acepta a medias o cambia de tema. Vamos: resume o intensifica («Un desastre, vamos»). Es que: justifica («Es que no me encuentro bien»).",
        [
          ["—¿Por qué no viniste? —Es que tenía fiebre.", "—Why didn't you come? —Well, I had a fever."],
          ["Fue un fracaso total, vamos.", "It was a total failure, basically."],
        ],
        [
          mc(
            "«—¿Por qué no me llamaste? —___ me quedé sin batería.»",
            ["Es que", "O sea", "Vamos", "Por ende"],
            0,
            "«Es que» introduce una justificación o excusa. «O sea» reformula, «Vamos» concluye con énfasis y «Por ende» es un conector formal de consecuencia, fuera de lugar en una charla."
          ),
        ]
      ),
    ],
    [
      fb("Completa (reformular).", "No le gusta nada el trabajo, o ___, está buscando otro.", "sea", "«O sea» reformula o saca una conclusión de lo dicho."),
      mc(
        "«—¿Qué tal la película? —___, no estaba mal, pero esperaba más.»",
        ["Bueno", "Es que", "Por consiguiente", "O sea que no"],
        0,
        "«Bueno» marca una aceptación parcial o una valoración matizada. «Es que» justifica, «Por consiguiente» introduce una consecuencia formal y «O sea que no» contradice la frase siguiente."
      ),
      mc(
        "«No ha estudiado nada, no ha ido a clase… Que va a suspender, ___.»",
        ["vamos", "pues", "es que", "bueno"],
        0,
        "«Vamos» al final refuerza una conclusión evidente. «Pues» y «bueno» suelen iniciar la frase y «es que» introduce una justificación."
      ),
      mt(
        "Relaciona la muletilla con su función.",
        [
          ["es que", "justificar"],
          ["o sea", "reformular"],
          ["pues", "iniciar una respuesta"],
        ],
        "Funciones discursivas."
      ),
      mc(
        "¿En qué texto sobran estas muletillas?",
        ["un informe técnico", "una charla entre amigos", "un mensaje de voz a tu hermano", "una conversación en un bar"],
        0,
        "Las muletillas son propias de la oralidad informal, así que sobran en un informe técnico. En una charla entre amigos, un audio a tu hermano o una conversación en un bar son naturales."
      ),
      toEs("Well, I don't know, I'm a bit tired.", "Pues no sé, es que estoy un poco cansado.", "«Pues» inicia la respuesta con duda y «es que» introduce la justificación.", ["Pues no sé, estoy un poco cansado.", "Bueno, no sé, es que estoy un poco cansado."]),
      wo("Es que no me dio tiempo a terminarlo.", "Es que justificativo.", "It's just that I didn't have time to finish it."),
    ]
  ),
  L(
    "neutral-vs-colloquial-4",
    "c1r-contrast-same-meaning-different-tone",
    "Contraste: mismo contenido, distinto efecto",
    "«Metió la pata» vs. «cometió un error»: la elección del registro cambia la actitud del mensaje.",
    "7 min",
    [
      sec(
        "Carga afectiva del registro",
        "Metedura (Esp.) / metida (Am.) de pata → error: el coloquial añade complicidad o ironía. Estar hasta las narices (España) → estar harto. Costar un ojo de la cara → ser muy caro. Ponerse las pilas → esforzarse más. El registro formal es más distante y evaluativo.",
        [
          ["El ministro metió la pata. / El ministro cometió un error.", "The minister blundered. / The minister made a mistake."],
          ["Me costó un ojo de la cara. / Resultó muy costoso.", "It cost me an arm and a leg. / It was very expensive."],
        ],
        [
          mc(
            "Versión formal de «Tienes que ponerte las pilas»:",
            ["Debe usted esforzarse más.", "Tienes que cargar las pilas.", "Ponte las pilas ya.", "Tienes que ponerte a tope."],
            0,
            "«Ponerse las pilas» significa esforzarse o espabilar; su versión formal es «Debe usted esforzarse más». «Cargar las pilas» significa descansar, y «Ponte las pilas ya» y «ponerse a tope» siguen siendo coloquiales."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la expresión coloquial con su equivalente neutro.",
        [
          ["meter la pata", "equivocarse"],
          ["estar hasta las narices (España)", "estar harto"],
          ["costar un ojo de la cara", "ser muy caro"],
          ["no pegar ojo", "no dormir"],
        ],
        "Coloquial → neutro."
      ),
      fb("Neutraliza.", "Esta noche no he pegado ojo. → Esta noche no he ___.", "dormido", "No pegar ojo = no dormir."),
      fb("Neutraliza.", "Estoy hasta las narices del ruido. → Estoy ___ del ruido.", "harto", "«Estar hasta las narices» es coloquial; en registro neutro, «estar harto de»."),
      mc(
        "¿Qué efecto tiene decir «El Gobierno ha metido la pata» en un titular?",
        ["Tono irónico o crítico cercano al lector", "Mayor objetividad", "Tono técnico", "Ninguno; es neutro"],
        0,
        "El coloquialismo «meter la pata» añade una actitud irónica o crítica y acerca el texto al lector. No aporta objetividad ni tono técnico, y no es neutro."
      ),
      mc(
        "¿En qué contexto es adecuada «Me costó un ojo de la cara»?",
        ["contándoselo a un amigo", "en una factura", "en un contrato", "en un informe contable"],
        0,
        "«Costar un ojo de la cara» es una expresión coloquial para contarle algo a un amigo. En una factura, un contrato o un informe contable se da el importe exacto."
      ),
      toEs("The company made a serious mistake. (neutral)", "La empresa cometió un error grave.", "En registro neutro, «cometer un error grave»; «meter la pata» sería coloquial.", ["La empresa cometió un grave error.", "La compañía cometió un error grave."]),
      wo("Con ese comentario, el director metió la pata delante de todos.", "Registro coloquial.", "With that comment, the director put his foot in it in front of everyone."),
    ]
  ),
  L(
    "neutral-vs-colloquial-4",
    "c1r-error-hunt-register-mismatch",
    "Caza de errores: coloquialismos donde no tocan",
    "Correos de trabajo, reseñas académicas y avisos oficiales contaminados de expresiones coloquiales.",
    "7 min",
    [
      sec(
        "Detectar el intruso",
        "En un texto formal chirrían: vocativos (tío, güey, che), intensificadores (súper, re), muletillas (o sea, en plan), expresiones idiomáticas coloquiales (a tope, chido, mola) y apócopes (info, finde).",
        [
          ["✗ Adjunto la info del proyecto. → ✓ Adjunto la información del proyecto.", "I'm attaching the project information."],
          ["✗ El informe está súper completo. → ✓ El informe es muy completo.", "The report is very thorough."],
        ],
        [
          mc(
            "¿Qué palabra desentona en un correo a un cliente? «Le envío la info solicitada.»",
            ["info", "envío", "solicitada", "Le"],
            0,
            "«Info» es una apócope coloquial que desentona con un cliente: «la información solicitada». «Le envío», «solicitada» y el tratamiento de usted son adecuados."
          ),
        ]
      ),
    ],
    [
      fb("Corrige para un aviso oficial.", "Se ruega a los vecinos que dejen el portal ___ limpio. (el alumno puso: súper)", "muy", "En un aviso oficial se usa «muy», no el coloquial «súper»."),
      fb("Corrige para un correo formal.", "Nos vemos en la reunión del ___. (el alumno puso: finde)", "fin de semana", "En un correo formal se escribe «fin de semana», no la apócope «finde»."),
      ms(
        "¿Qué elementos sobran en un artículo académico?",
        ["o sea", "a tope", "no obstante", "en plan"],
        [0, 1, 3],
        "«O sea», «a tope» y «en plan» son coloquiales y sobran en un artículo académico. «No obstante» es un conector formal, perfectamente adecuado."
      ),
      mc(
        "Versión adecuada para una reseña académica:",
        ["El autor defiende una tesis sólida y bien documentada.", "El autor se lo curra un montón.", "El libro está chido.", "El autor mola mogollón."],
        0,
        "«Defiende una tesis sólida y bien documentada» es registro académico. «Se lo curra un montón» y «mola mogollón» son coloquiales de España, y «chido» es coloquial de México."
      ),
      mc(
        "¿Dónde es aceptable «¡Qué pasada de concierto!»?",
        ["en un mensaje a un amigo", "en una crónica de un periódico serio", "en una memoria anual", "en un contrato"],
        0,
        "«¡Qué pasada!» es una expresión coloquial de España, adecuada en un mensaje a un amigo. En una crónica seria, una memoria anual o un contrato desentonaría."
      ),
      toEs("I'm attaching the requested information. (formal)", "Adjunto la información solicitada.", "«Adjunto la información solicitada» es la fórmula formal, sin apócopes como «info».", ["Le adjunto la información solicitada.", "Adjunto la información que me solicitó."]),
      wo("Le agradecemos que nos haya enviado la documentación completa.", "Registro formal.", "Thank you for sending us the complete documentation."),
    ]
  ),
  L(
    "neutral-vs-colloquial-6",
    "c1r-mission-subtitle-neutral",
    "Misión real: subtitular para toda Latinoamérica",
    "Adaptas diálogos de una serie española para un doblaje neutro: fuera vosotros, léxico peninsular y localismos.",
    "8 min",
    [
      sec(
        "Criterios del español neutro audiovisual",
        "Ustedes en lugar de vosotros. Léxico de amplia difusión: computadora, carro/auto, celular, departamento, jugo. Evitar voseo, muletillas locales (tío, güey, che) y palabras malsonantes regionales (coger). Preferir expresiones transparentes: ¡Qué bien! en vez de ¡Qué guay!",
        [
          ["¿Vosotros venís? → ¿Ustedes vienen?", "Are you guys coming?"],
          ["Tío, ¡qué guay tu móvil! → Oye, ¡qué bien tu celular!", "Hey, your phone is great!"],
        ],
        [
          mc(
            "Adaptación neutra de «¿Habéis cogido las llaves?»:",
            ["¿Tomaron las llaves?", "¿Habéis tomado las llaves?", "¿Cogieron las llaves?", "¿Agarrasteis las llaves?"],
            0,
            "El neutro usa ustedes y «tomar»: «¿Tomaron las llaves?». «Habéis» y «agarrasteis» son formas de vosotros, y «coger» es malsonante en varios países americanos."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza.", "Coged vuestras cosas. → Tomen ___ cosas.", "sus", "Con ustedes, el posesivo es «sus», no «vuestras»."),
      fb("Neutraliza.", "Voy a por el coche. → Voy por el ___.", "auto", "«Auto» (o «carro») es comprensible en toda América; «coche» es de España, e «ir a por» también."),
      fb("Neutraliza.", "¡Qué guay! → ¡Qué ___!", "bien", "«Guay» es coloquial de España; «¡Qué bien!» se entiende en todas partes."),
      mc(
        "¿Qué frase está en español neutro?",
        ["¿Ustedes quieren un jugo?", "¿Queréis un zumo?", "¿Vos querés un jugo?", "¿Queréis un jugo, güey?"],
        0,
        "«¿Ustedes quieren un jugo?» evita las marcas regionales. «Queréis» y «zumo» son de España, «vos querés» es rioplatense y «güey» es mexicano."
      ),
      ms(
        "¿Qué cambios exige el neutro?",
        ["vosotros → ustedes", "móvil → celular", "tío → (eliminar)", "usted → vos"],
        [0, 1, 2],
        "El neutro sustituye vosotros por ustedes, «móvil» por «celular» y elimina vocativos regionales como «tío». Cambiar usted por vos introduciría el voseo, justo lo que el neutro evita."
      ),
      toEs("Are you guys ready? Let's go. (neutral)", "¿Están listos? Vámonos.", "El neutro usa ustedes para el plural informal: «¿Están listos?».", ["¿Ya están listos? Vámonos.", "¿Están listos? Vamos."]),
      wo("¿Ustedes saben dónde dejé mi celular?", "Español neutro.", "Do you guys know where I left my phone?"),
    ]
  ),
  L(
    "neutral-vs-colloquial-6",
    "c1r-spiral-register-emphasis",
    "Repaso en espiral: registro, énfasis y conjetura",
    "Reescribe entre registros manteniendo hendidas, conjeturas y matices de cortesía.",
    "8 min",
    [
      sec(
        "Pasar de un registro a otro sin perder matices",
        "Coloquial: «Lo que me flipa es que no haya dicho nada». Neutro: «Lo que me sorprende es que no haya dicho nada». La hendida y el subjuntivo se mantienen; solo cambia el léxico. Igual con la conjetura: «Estará liadísimo» → «Estará muy ocupado».",
        [
          ["Estará liadísimo. → Estará muy ocupado.", "He must be swamped."],
          ["Lo que me mola es… → Lo que me gusta es…", "What I like is…"],
        ],
        [
          mc(
            "Versión neutra de «Lo que me flipa es su cara dura»:",
            ["Lo que me sorprende es su descaro.", "Lo que me flipa es su descaro.", "Me flipa su cara dura.", "Flipo con su cara."],
            0,
            "«Flipar» y «cara dura» son coloquiales de España; en neutro: «Lo que me sorprende es su descaro». Las otras opciones conservan «flipa», «flipo» o «cara dura»."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza (se mantiene la conjetura).", "Estará hecho polvo. → Estará muy ___.", "cansado", "«Estar hecho polvo» es coloquial; en neutro, «estará muy cansado», con el mismo futuro de conjetura."),
      fb("Neutraliza (se mantiene la hendida).", "Lo que me mola de este trabajo es el horario. → Lo que me ___ de este trabajo es el horario.", "gusta", "«Molar» es coloquial de España; en neutro, «gustar», manteniendo la hendida."),
      fb("Mantén el subjuntivo.", "Lo que me fastidia es que nadie ___ nada. (decir)", "diga", "Un verbo de emoción («fastidiar») + «que» exige subjuntivo: «que nadie diga nada»."),
      mc(
        "Versión coloquial (España) de «Habrá estado muy ocupado»:",
        ["Habrá estado liadísimo.", "Ha estado muy ocupado seguro.", "Estaría muy ocupado ahora.", "Estuvo ocupado."],
        0,
        "Se cambia solo el registro y se conserva el futuro perfecto de conjetura: «Habrá estado liadísimo». Las demás cambian el tiempo o la certeza («ha estado… seguro», «estaría… ahora», «estuvo») y además no son coloquiales."
      ),
      mc(
        "Neutraliza sin perder el énfasis: «Esto sí que mola.»",
        ["Esto sí que me gusta.", "Esto me gusta.", "Esto es algo.", "Esto quizás me gusta."],
        0,
        "Se mantiene el énfasis de «sí que» y se neutraliza «mola» → «me gusta». «Esto me gusta» pierde el énfasis, «Esto es algo» cambia el sentido y «quizás» añade duda."
      ),
      toEs("What bothers me is that he didn't warn us. (neutral)", "Lo que me molesta es que no nos haya avisado.", "Pseudoescindida con verbo de emoción («molestar»): «que no nos haya avisado», en subjuntivo.", ["Lo que me molesta es que no nos avisara."]),
      wo("Lo que más me sorprende es que nadie se haya quejado.", "Hendida con subjuntivo.", "What surprises me most is that nobody has complained."),
    ]
  ),
  L(
    "formal-correspondence-2",
    "c1r-sort-greetings-closings",
    "Clasificación: saludos y despedidas según la distancia",
    "Ordena las fórmulas de apertura y cierre de la más solemne a la más cercana y elige la adecuada para cada destinatario.",
    "7 min",
    [
      sec(
        "La escala de formalidad",
        "Apertura: Muy señor mío / Distinguido señor (muy solemne) → Estimado/a señor/a + apellido (formal estándar) → Estimado/a + nombre (formal cercano) → Hola, + nombre (semiformal). Cierre: Le saluda atentamente (formal) → Atentamente / Un cordial saludo → Saludos cordiales → Un saludo (semiformal). Tras el saludo formal se usan dos puntos, no coma.",
        [
          ["Estimada señora Martínez:", "Dear Ms. Martínez,"],
          ["Sin otro particular, le saluda atentamente,", "Yours faithfully,"],
        ],
        [
          mc(
            "¿Qué signo sigue a «Estimado señor Gil» en español?",
            ["dos puntos", "coma", "punto y coma", "punto"],
            0,
            "En español, el saludo de una carta formal va seguido de dos puntos: «Estimado señor Gil:». La coma es un anglicismo, y el punto y coma o el punto no se usan ahí."
          ),
        ]
      ),
    ],
    [
      mc(
        "Escribes por primera vez a un organismo público sin nombre de destinatario:",
        ["Estimados señores:", "Hola, equipo:", "Querido amigo:", "¡Buenas!"],
        0,
        "Sin nombre de destinatario, la fórmula formal genérica es «Estimados señores:». «Hola, equipo:» y «¡Buenas!» son informales, y «Querido amigo:» es personal."
      ),
      mc(
        "Cierre más formal:",
        ["Le saluda atentamente,", "Un saludo,", "Besos,", "Nos vemos,"],
        0,
        "«Le saluda atentamente» es el cierre más solemne. «Un saludo» es neutro-cordial, y «Besos» y «Nos vemos» son informales."
      ),
      fb("Completa el cierre.", "Sin otro ___, le saluda atentamente.", "particular", "«Sin otro particular» (= sin nada más que añadir) es la fórmula fija de cierre."),
      fb("Completa la apertura.", "___ señora López: (apertura formal estándar)", "Estimada", "La apertura formal estándar es «Estimada» + tratamiento + apellido, seguida de dos puntos."),
      mt(
        "Relaciona cada cierre con su grado de formalidad.",
        [
          ["Le saluda atentamente", "muy formal"],
          ["Un cordial saludo", "formal"],
          ["Un saludo", "semiformal"],
          ["Un abrazo", "informal"],
        ],
        "Escala de cierres."
      ),
      toEs("Dear Mr. Ruiz, (formal opening)", "Estimado señor Ruiz:", "«Estimado señor Ruiz» seguido de dos puntos, no de coma como en inglés.", ["Estimado Sr. Ruiz:", "Distinguido señor Ruiz:"]),
      wo("Sin otro particular, le saluda atentamente.", "Cierre formal completo.", "Yours faithfully."),
    ]
  ),
  L(
    "formal-correspondence-2",
    "c1r-transform-email-openers",
    "Transformaciones: el primer párrafo de un correo formal",
    "Convierte el motivo del correo en fórmulas de apertura: me dirijo a usted, le escribo en relación con, por medio de la presente.",
    "7 min",
    [
      sec(
        "Anunciar el motivo",
        "Me dirijo a usted para + infinitivo. Le escribo en relación con / con respecto a + nombre. Por medio de la presente, le comunico que… En respuesta a su correo del día 3… Tengo el gusto de comunicarle que… (buena noticia) / Lamento comunicarle que… (mala noticia).",
        [
          ["Me dirijo a usted para solicitar información sobre el máster.", "I am writing to request information about the master's program."],
          ["En respuesta a su correo del 3 de marzo, le confirmo…", "In reply to your email of March 3, I confirm…"],
        ],
        [
          mc(
            "Para una mala noticia:",
            ["Lamento comunicarle que su solicitud no ha sido aceptada.", "Tengo el gusto de comunicarle que su solicitud no ha sido aceptada.", "Me alegra decirle que no.", "Por fin le digo que no."],
            0,
            "Para una mala noticia se usa «Lamento comunicarle que…». «Tengo el gusto de» es para buenas noticias, y «Me alegra decirle que no» y «Por fin le digo que no» son inadecuados y descorteses."
          ),
        ]
      ),
    ],
    [
      fb("Transforma.", "Quiero pedir información. → Me ___ a usted para solicitar información.", "dirijo", "«Dirigirse a alguien» es la fórmula formal de apertura: «me dirijo a usted»."),
      fb("Transforma.", "Le escribo por lo del pedido. → Le escribo en ___ con el pedido.", "relación", "«En relación con» (= con respecto a) es la variante formal de «por lo de»."),
      fb("Transforma.", "Contesto a su correo del lunes. → En ___ a su correo del lunes…", "respuesta", "«En respuesta a» es la fórmula formal para contestar un escrito."),
      fb("Buena noticia.", "Tengo el ___ de comunicarle que ha sido seleccionada.", "gusto", "«Tener el gusto de» + infinitivo introduce una buena noticia de forma cortés."),
      mc(
        "¿Qué apertura NO es adecuada en un correo formal?",
        ["Te escribo porque quería preguntarte una cosa.", "Me pongo en contacto con usted para…", "Le escribo con relación a…", "Por medio de la presente…"],
        0,
        "«Te escribo porque quería preguntarte una cosa» tutea y tiene un tono conversacional, inadecuado en un correo formal. «Me pongo en contacto con usted», «Le escribo con relación a» y «Por medio de la presente» son aperturas formales."
      ),
      toEs("I am writing to request an appointment.", "Me dirijo a usted para solicitar una cita.", "«Me dirijo a usted para» + infinitivo es una apertura formal habitual.", ["Le escribo para solicitar una cita.", "Me pongo en contacto con usted para solicitar una cita."]),
      wo("Por medio de la presente le comunico mi decisión de renunciar al puesto.", "Apertura solemne.", "I hereby inform you of my decision to resign from the position."),
    ]
  ),
  L(
    "formal-correspondence-4",
    "c1r-error-hunt-complaint-letter",
    "Caza de errores: la carta de reclamación",
    "Una reclamación eficaz es firme pero cortés. Detecta tonos agresivos, imprecisiones y fallos de registro.",
    "8 min",
    [
      sec(
        "Firme sin ser grosero",
        "Precisión: fecha, número de pedido, importe. Hechos antes que emociones: «El producto llegó dañado» mejor que «Son ustedes unos incompetentes». Petición clara con cortesía: «Les ruego que procedan al reembolso». Plazo razonable: «en un plazo de diez días hábiles».",
        [
          ["✗ ¡Quiero mi dinero YA! → ✓ Les ruego que procedan al reembolso a la mayor brevedad.", "Please issue a refund as soon as possible."],
          ["✗ El otro día compré algo. → ✓ El 12 de mayo realicé el pedido n.º 4471.", "On May 12 I placed order no. 4471."],
        ],
        [
          mc(
            "¿Qué frase es firme y cortés a la vez?",
            ["Les ruego que me devuelvan el importe en un plazo de diez días.", "Devuélvanme el dinero o los denuncio.", "Me da igual, pero quiero el dinero.", "A lo mejor podrían, si quieren, devolverlo."],
            0,
            "«Les ruego que me devuelvan el importe en un plazo de diez días» combina una petición clara, un plazo y cortesía. «O los denuncio» es una amenaza, «Me da igual» es descortés y «A lo mejor podrían, si quieren» es tan tímida que no exige nada."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el tono.", "Les ___ que procedan a la sustitución del artículo. (rogar; el alumno puso: exijo a gritos)", "ruego", "«Rogar que» + subjuntivo es firme y cortés; «exigir a gritos» es agresivo."),
      fb("Precisa.", "El artículo llegó ___ (el alumno puso: fatal).", "dañado", "En una reclamación se usa un adjetivo preciso y neutro («dañado»), no el coloquial «fatal»."),
      fb("Completa.", "Les agradecería que me lo ___ a la mayor brevedad. (enviar)", "enviaran", "«Agradecería» (condicional) + «que» exige imperfecto de subjuntivo: «que me lo enviaran»."),
      ms(
        "¿Qué elementos debe tener una reclamación eficaz?",
        ["número de pedido o referencia", "fecha de los hechos", "petición concreta", "insultos para dejar clara la molestia"],
        [0, 1, 2],
        "Una reclamación eficaz incluye la referencia del pedido, la fecha de los hechos y una petición concreta. Los insultos restan credibilidad y no ayudan a resolver nada."
      ),
      mc(
        "¿Qué frase es demasiado vaga?",
        ["Hace un tiempo les compré una cosa que no va bien.", "El 3 de junio adquirí una lavadora modelo X-200.", "La factura n.º 889 recoge un cargo duplicado.", "El técnico no acudió a la cita del día 8."],
        0,
        "«Hace un tiempo les compré una cosa que no va bien» no da fecha, producto ni problema concretos. Las demás incluyen una fecha, un modelo, un número de factura o una cita concreta."
      ),
      toEs("I would be grateful if you could refund the amount.", "Les agradecería que me reembolsaran el importe.", "«Agradecería» + «que» + imperfecto de subjuntivo: «que me reembolsaran el importe».", ["Le agradecería que me reembolsara el importe.", "Les agradecería que me devolvieran el importe."]),
      wo("Adjunto copia de la factura y fotografías del producto dañado.", "Documentación de la reclamación.", "I am attaching a copy of the invoice and photos of the damaged product."),
    ]
  ),
  L(
    "formal-correspondence-4",
    "c1r-contrast-adjunto-remito-envio",
    "Contraste: adjuntar, remitir, enviar, reenviar",
    "Verbos de la correspondencia que se confunden: cuál usar para archivos, documentos y mensajes ajenos.",
    "6 min",
    [
      sec(
        "Precisión en el verbo",
        "Adjuntar: incluir un archivo en el correo («Adjunto el CV»). Remitir: enviar formalmente o derivar a otra persona («Le remito su consulta al departamento legal»). Enviar: verbo general. Reenviar: mandar a otro un mensaje recibido. Adjunto es invariable como verbo en 1.ª persona, pero como adjetivo concuerda: «los documentos adjuntos».",
        [
          ["Adjunto le envío el presupuesto.", "Please find the quote attached."],
          ["Le reenvío el correo de la directora.", "I'm forwarding you the director's email."],
        ],
        [
          mc(
            "«Encontrará ___ los documentos solicitados.»",
            ["adjuntos", "adjunto", "adjunta", "adjuntas"],
            0,
            "Tras «encontrará», «adjunto» funciona como adjetivo y concuerda con «los documentos»: «adjuntos». «Adjunto», «adjunta» y «adjuntas» no concuerdan en género o número."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Le ___ el mensaje que recibí ayer del proveedor. (mandar a otro un mensaje recibido, yo)", "reenvío", "«Reenviar» es mandar a otra persona un mensaje que has recibido: «le reenvío»."),
      fb("Completa.", "Su consulta ha sido ___ al servicio técnico. (derivar formalmente)", "remitida", "«Remitir» es el verbo formal para enviar o derivar a otra instancia: «ha sido remitida»."),
      fb("Completa (concordancia).", "Revise las facturas ___, por favor.", "adjuntas", "«Adjunto» como adjetivo concuerda con el sustantivo: «las facturas adjuntas»."),
      mt(
        "Relaciona cada verbo con su uso.",
        [
          ["adjuntar", "incluir un archivo"],
          ["reenviar", "mandar a otro un correo recibido"],
          ["remitir", "derivar formalmente"],
        ],
        "Verbos de la correspondencia."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Adjunto le envío el informe.", "Adjunta le envío el informe.", "Adjuntos le envío el informe.", "Adjuntado le envío el informe."],
        0,
        "En la fórmula fija «Adjunto le envío…», «adjunto» funciona como adverbio invariable (también es posible «Le envío adjunto el informe»). «Adjunta» y «adjuntos» no concuerdan con «el informe», y «adjuntado» no se usa en esta fórmula."
      ),
      toEs("I am attaching my CV and a cover letter.", "Adjunto mi currículum y una carta de presentación.", "«Adjuntar» es el verbo para enviar documentos anexos: «adjunto mi currículum».", ["Le adjunto mi currículum y una carta de presentación.", "Adjunto mi CV y una carta de presentación."]),
      wo("Le remito su solicitud al departamento de recursos humanos.", "Remitir = derivar.", "I'm forwarding your request to the human resources department."),
    ]
  ),
  L(
    "formal-correspondence-6",
    "c1r-mission-job-follow-up",
    "Misión real: el correo después de la entrevista",
    "Escribe el agradecimiento tras una entrevista de trabajo: saludo, recuerdo, interés, disponibilidad y cierre.",
    "8 min",
    [
      sec(
        "Estructura del seguimiento",
        "1) Saludo: Estimada señora Ortega: 2) Agradecimiento: Quisiera agradecerle la oportunidad de reunirme con usted ayer. 3) Recuerdo concreto: Me resultó especialmente interesante conocer el proyecto de expansión. 4) Interés: Reitero mi interés en el puesto. 5) Disponibilidad: Quedo a su disposición para cualquier información adicional. 6) Cierre: Un cordial saludo.",
        [
          ["Reitero mi interés en formar parte de su equipo.", "I reiterate my interest in joining your team."],
          ["Quedo a la espera de sus noticias.", "I look forward to hearing from you."],
        ],
        [
          mc(
            "¿Qué frase refuerza el interés?",
            ["Reitero mi interés en el puesto.", "Bueno, si quieren, me llaman.", "A ver qué pasa.", "Supongo que no me elegirán."],
            0,
            "«Reitero mi interés en el puesto» vuelve a expresar el interés de forma firme y formal. «Si quieren, me llaman» y «A ver qué pasa» suenan indiferentes, y «Supongo que no me elegirán» es derrotista."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Quisiera ___ la oportunidad de conocer a su equipo. (agradecer + le)", "agradecerle", "Con usted, el pronombre de complemento indirecto es «le» y va unido al infinitivo: «agradecerle»."),
      fb("Completa.", "Quedo a la ___ de sus noticias.", "espera", "«Quedar a la espera de» es la fórmula de cierre para anunciar que se aguarda respuesta."),
      fb("Completa.", "Quedo a su ___ para cualquier información adicional.", "disposición", "«Quedar a su disposición» ofrece ayuda o información adicional; es una fórmula de cierre formal."),
      mc(
        "Orden lógico de los párrafos:",
        ["agradecimiento → recuerdo concreto → interés → disponibilidad", "disponibilidad → agradecimiento → interés → recuerdo", "interés → cierre → agradecimiento", "cierre → saludo → agradecimiento"],
        0,
        "Un correo de seguimiento agradece primero, recuerda un detalle concreto, reitera el interés y cierra ofreciendo disponibilidad. Los otros órdenes empiezan por el cierre o la disponibilidad y dejan el agradecimiento fuera de lugar."
      ),
      mc(
        "¿Qué detalle hace el correo más memorable?",
        ["Mencionar un tema concreto de la entrevista.", "Repetir el CV entero.", "Preguntar el salario en la primera línea.", "Escribir todo en mayúsculas."],
        0,
        "Mencionar un tema concreto de la entrevista personaliza el correo. Repetir el CV entero cansa, preguntar el salario de entrada parece interesado y escribir en mayúsculas equivale a gritar."
      ),
      toEs("Thank you for your time yesterday. (formal)", "Le agradezco el tiempo que me dedicó ayer.", "«Agradecer» + «le» (usted): «le agradezco el tiempo que me dedicó».", ["Le agradezco su tiempo ayer.", "Gracias por el tiempo que me dedicó ayer."]),
      wo("Me resultó muy interesante conocer los proyectos del departamento.", "Recuerdo concreto.", "I found it very interesting to learn about the department's projects."),
    ]
  ),
  L(
    "formal-correspondence-6",
    "c1r-spiral-correspondence-subjunctive",
    "Repaso en espiral: correspondencia, subjuntivo y conectores",
    "Las fórmulas epistolares exigen subjuntivo, condicional y conectores formales: repásalos juntos.",
    "7 min",
    [
      sec(
        "Gramática al servicio de la cortesía",
        "Rogar / agradecer / solicitar que + subjuntivo: «Le ruego que me confirme…». Condicional + imperfecto de subjuntivo: «Le agradecería que me enviara…». Conectores: asimismo (además), no obstante (sin embargo), por consiguiente (por tanto), a tal efecto (con ese fin).",
        [
          ["Asimismo, le solicito que me indique el plazo de entrega.", "Likewise, I ask you to tell me the delivery time."],
          ["No obstante, estaríamos dispuestos a negociar.", "Nevertheless, we would be willing to negotiate."],
        ],
        [
          mc(
            "«Le ruego que me ___ la recepción de este correo.»",
            ["confirme", "confirma", "confirmará", "confirmar"],
            0,
            "«Rogar que» expresa una petición y exige subjuntivo: «que me confirme». «Confirma» y «confirmará» son indicativo, y «que confirmar» no admite infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (conector de adición).", "Le adjunto el contrato. ___, le envío el anexo II.", "Asimismo", "«Asimismo» (= además, también) añade información en registro formal."),
      fb("Completa (subjuntivo).", "Le solicitamos que ___ el formulario antes del día 15. (rellenar)", "rellene", "«Solicitar que» expresa una petición y exige subjuntivo: «que rellene»."),
      fb("Completa.", "Nos gustaría que nos ___ una nueva fecha. (proponer, usted)", "propusiera", "Con el condicional «nos gustaría», la subordinada va en imperfecto de subjuntivo: «propusiera»."),
      mc(
        "«El plazo ha vencido. ___, estudiaremos su caso de forma excepcional.»",
        ["No obstante", "Asimismo", "Por consiguiente", "Es decir"],
        0,
        "«No obstante» introduce un contraste: aunque el plazo ha vencido, se hará una excepción. «Asimismo» añade, «Por consiguiente» da una consecuencia (que aquí sería ilógica) y «Es decir» reformula."
      ),
      mc(
        "«Necesitamos su firma. A tal ___, le enviamos el documento.»",
        ["efecto", "caso", "fin de", "manera"],
        0,
        "La locución formal es «a tal efecto» (= con ese fin). «A tal caso» no existe (sería «en tal caso»), «a tal fin de» sobra la preposición y «a tal manera» no se usa."
      ),
      toEs("We would be grateful if you could confirm your attendance.", "Le agradeceríamos que confirmara su asistencia.", "«Agradeceríamos» (condicional) + «que» + imperfecto de subjuntivo: «que confirmara».", ["Les agradeceríamos que confirmaran su asistencia.", "Agradeceríamos que confirmara su asistencia."]),
      wo("Por consiguiente, le rogamos que regularice la situación cuanto antes.", "Conector + subjuntivo.", "Consequently, we ask you to settle the matter as soon as possible."),
    ]
  ),
  L(
    "academic-essay-writing-part-1-mastery-check",
    "c1r-transform-depersonalize",
    "Transformaciones: quitar el «yo» del ensayo",
    "Convierte opiniones en primera persona en formulaciones impersonales o de plural académico.",
    "7 min",
    [
      sec(
        "Recursos de impersonalidad",
        "Se impersonal / pasiva refleja: «Se observa que…», «Se ha demostrado que…». Plural de modestia: «Consideramos que…», «Como hemos visto…». Construcciones con sujeto no humano: «Los datos indican…», «Este trabajo propone…». Expresiones impersonales: «Cabe señalar que…», «Es preciso destacar que…».",
        [
          ["Creo que los datos son fiables. → Los datos parecen fiables.", "I think the data is reliable. → The data seems reliable."],
          ["En este ensayo voy a analizar… → Este ensayo analiza…", "In this essay I will analyze… → This essay analyzes…"],
        ],
        [
          mc(
            "Versión académica de «Yo he visto que los resultados mejoran»:",
            ["Se observa una mejora de los resultados.", "Yo observo que mejoran.", "He visto mejoras, creo.", "Mejoran, lo he visto yo."],
            0,
            "El «se» impersonal con nominalización («se observa una mejora») borra al autor, como pide el registro académico. «Yo observo» mantiene la primera persona, y «creo» o «lo he visto yo» son personales y coloquiales."
          ),
        ]
      ),
    ],
    [
      fb("Despersonaliza.", "Yo pienso que es necesario revisar la ley. → ___ necesario revisar la ley.", "Resulta", "Un verbo impersonal como «resulta» (o «parece») + adjetivo evita la primera persona."),
      fb("Despersonaliza.", "Voy a demostrar que… → El presente trabajo ___ demostrar que…", "pretende", "En el registro académico se usa un sujeto no humano («el presente trabajo pretende»)."),
      fb("Despersonaliza.", "Tengo que señalar que… → ___ señalar que…", "Cabe", "«Cabe» + infinitivo es impersonal y formal: «cabe señalar que…»."),
      mc(
        "¿Qué frase es propia del registro académico?",
        ["Los resultados sugieren una correlación positiva.", "Yo creo que hay correlación, la verdad.", "Me parece que está clarísimo.", "Obviamente, tengo razón."],
        0,
        "Un sujeto no humano con verbo atenuado («Los resultados sugieren…») es propio del registro académico. «Yo creo… la verdad», «está clarísimo» y «Obviamente, tengo razón» son personales, coloquiales o rotundos."
      ),
      ms(
        "¿Qué recursos despersonalizan el discurso?",
        ["se + verbo", "plural de modestia", "sujeto no humano (este estudio…)", "yo opino que…"],
        [0, 1, 2],
        "El «se» + verbo, el plural de modestia («consideramos») y los sujetos no humanos («este estudio muestra») despersonalizan. «Yo opino que» es explícitamente personal."
      ),
      toEs("It has been shown that sleep improves memory.", "Se ha demostrado que el sueño mejora la memoria.", "Pasiva refleja en perfecto: «se ha demostrado que…», sin mencionar quién lo demostró.", ["Se ha comprobado que el sueño mejora la memoria.", "Está demostrado que el sueño mejora la memoria."]),
      wo("Cabe señalar que la muestra es relativamente reducida.", "Expresión impersonal + atenuación.", "It should be noted that the sample is relatively small."),
    ]
  ),
  L(
    "academic-essay-writing-part-1-mastery-check",
    "c1r-contrast-tesis-hipotesis-argumento",
    "Contraste: tesis, hipótesis, argumento, evidencia",
    "Cuatro conceptos que el ensayo distingue con precisión: aprende a identificarlos en fragmentos.",
    "7 min",
    [
      sec(
        "Las piezas del razonamiento",
        "Tesis: la afirmación central que el ensayo defiende. Hipótesis: suposición provisional que se somete a prueba. Argumento: razonamiento que apoya la tesis. Evidencia: datos, ejemplos o citas que sostienen el argumento. Contraargumento: objeción que el autor anticipa y refuta.",
        [
          ["Tesis: el teletrabajo aumenta la productividad.", "Thesis: remote work increases productivity."],
          ["Evidencia: un estudio de 2022 registró un 13 % más de rendimiento.", "Evidence: a 2022 study recorded 13% higher output."],
        ],
        [
          mc(
            "«Si la hipótesis es correcta, los grupos con más horas de sueño obtendrán mejores notas.» Este enunciado es…",
            ["una hipótesis", "una evidencia", "una conclusión", "una cita"],
            0,
            "Es una hipótesis: una suposición cuya predicción («obtendrán mejores notas») se somete a prueba. Una evidencia serían datos ya obtenidos, una conclusión cerraría el argumento y una cita reproduciría palabras de otro autor."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada fragmento con su función.",
        [
          ["Este ensayo defiende que la educación debe ser gratuita.", "tesis"],
          ["Según la OCDE, el gasto medio es del 5 % del PIB.", "evidencia"],
          ["Podría objetarse que el coste sería inasumible.", "contraargumento"],
        ],
        "Piezas del ensayo."
      ),
      mc(
        "¿Qué fórmula introduce un contraargumento?",
        ["Podría objetarse que…", "Por consiguiente…", "Según los datos…", "En primer lugar…"],
        0,
        "«Podría objetarse que…» anticipa un argumento contrario. «Por consiguiente» introduce una consecuencia, «Según los datos» aporta una evidencia y «En primer lugar» ordena los argumentos."
      ),
      mc(
        "¿Cuál es la mejor tesis (clara y discutible)?",
        ["Las redes sociales deberían regularse para proteger a los menores.", "Las redes sociales existen.", "Hay muchas redes sociales.", "Las redes sociales son un tema."],
        0,
        "Una buena tesis es clara y discutible: «Las redes sociales deberían regularse…» admite una postura contraria. «Existen», «hay muchas» y «son un tema» son obviedades que nadie discute."
      ),
      fb("Completa.", "Para refutar el contraargumento: «Sin ___, esta objeción no tiene en cuenta…»", "embargo", "«Sin embargo» introduce el contraste con el que se refuta la objeción."),
      fb("Completa.", "Los datos ___ esta hipótesis: el 80 % de los casos coincide. (apoyar)", "apoyan", "Los datos «apoyan» (o «respaldan») una hipótesis cuando la confirman; el verbo concuerda con «los datos»."),
      toEs("It could be argued that the cost is too high.", "Podría objetarse que el coste es demasiado alto.", "«Podría objetarse que» (condicional + «se») anticipa una objeción de forma impersonal.", ["Podría argumentarse que el coste es demasiado alto.", "Podría objetarse que el costo es demasiado alto."]),
      wo("La evidencia disponible respalda la tesis principal del ensayo.", "Relación evidencia-tesis.", "The available evidence supports the essay's main thesis."),
    ]
  ),
  L(
    "academic-essay-writing-part-2-2",
    "c1r-transform-hedging",
    "Transformaciones: atenuar afirmaciones rotundas",
    "Convierte afirmaciones absolutas en afirmaciones académicas con reserva epistémica.",
    "7 min",
    [
      sec(
        "La reserva epistémica",
        "Verbos atenuadores: sugerir, apuntar a, parecer. Condicional: «podría deberse a…». Adverbios: posiblemente, probablemente, en cierta medida. Construcciones: «todo parece indicar que…», «no sería descabellado pensar que…». Se evitan: siempre, nunca, está claro que, sin duda (salvo con evidencia sólida).",
        [
          ["El cambio climático causa esto. → Todo parece indicar que el cambio climático influye en esto.", "Everything seems to indicate that climate change influences this."],
          ["Está claro que funciona. → Los datos sugieren que funciona.", "The data suggests it works."],
        ],
        [
          mc(
            "Atenúa: «La crisis se debe a la inflación.»",
            ["La crisis podría deberse, en parte, a la inflación.", "La crisis se debe siempre a la inflación.", "Sin duda, la crisis es la inflación.", "La crisis es la inflación, está claro."],
            0,
            "El condicional y «en parte» atenúan la afirmación: «podría deberse, en parte, a…». «Siempre», «sin duda» y «está claro» la hacen aún más rotunda."
          ),
        ]
      ),
    ],
    [
      fb("Atenúa.", "Los resultados demuestran una relación. → Los resultados ___ una relación.", "sugieren", "«Sugerir» es menos rotundo que «demostrar» y deja espacio a otras interpretaciones."),
      fb("Atenúa.", "Es la causa principal. → ___ ser la causa principal.", "Podría", "El condicional de «poder» atenúa la afirmación: «podría ser la causa»."),
      fb("Atenúa.", "Todo ___ indicar que el fenómeno se repetirá. (parecer)", "parece", "«Todo parece indicar que» presenta una conclusión probable, no segura."),
      ms(
        "¿Qué expresiones atenúan?",
        ["en cierta medida", "posiblemente", "sin lugar a dudas", "cabría pensar que"],
        [0, 1, 3],
        "«En cierta medida», «posiblemente» y «cabría pensar que» atenúan la afirmación. «Sin lugar a dudas» es rotundo, lo contrario de atenuar."
      ),
      mc(
        "¿Qué frase es excesivamente rotunda para un ensayo?",
        ["Todos los jóvenes son adictos al móvil.", "Un porcentaje considerable de jóvenes hace un uso intensivo del móvil.", "Parece existir una dependencia creciente.", "Los datos apuntan a un uso excesivo."],
        0,
        "«Todos los jóvenes son adictos al móvil» es una generalización absoluta, inaceptable en un ensayo. «Un porcentaje considerable», «Parece existir» y «Los datos apuntan a» matizan la afirmación."
      ),
      toEs("These results could be explained by the small sample size.", "Estos resultados podrían explicarse por el reducido tamaño de la muestra.", "El condicional atenuador presenta la explicación como posible: «podrían explicarse por…».", ["Estos resultados podrían deberse al reducido tamaño de la muestra.", "Estos resultados podrían explicarse por el pequeño tamaño de la muestra."]),
      wo("No sería descabellado pensar que la tendencia se mantendrá.", "Atenuación.", "It would not be unreasonable to think the trend will continue."),
    ]
  ),
  L(
    "academic-essay-writing-part-2-2",
    "c1r-story-detective-essay-structure",
    "Detective de textos: reconstruye el ensayo",
    "Fragmentos desordenados de un ensayo: identifica introducción, desarrollo, refutación y conclusión por sus marcadores.",
    "8 min",
    [
      sec(
        "Marcadores de cada parte",
        "Introducción: «El presente ensayo sostiene que…», «Cabe preguntarse si…». Desarrollo: «En primer lugar…», «Asimismo…», «A ello se suma…». Refutación: «Podría objetarse que…; sin embargo…». Conclusión: «En definitiva…», «En suma…», «A modo de conclusión…».",
        [
          ["En suma, los datos respaldan la tesis inicial.", "In sum, the data supports the initial thesis."],
          ["A ello se suma el coste medioambiental.", "Added to this is the environmental cost."],
        ],
        [
          mc(
            "«En definitiva, la medida resulta tan necesaria como urgente.» pertenece a…",
            ["la conclusión", "la introducción", "la refutación", "la evidencia"],
            0,
            "«En definitiva» y el tono de síntesis sitúan la frase en la conclusión. La introducción presenta el tema, la refutación rebate una objeción y la evidencia aporta datos."
          ),
        ]
      ),
    ],
    [
      mc(
        "«El presente trabajo se propone examinar si la semana laboral de cuatro días es viable.»",
        ["introducción", "conclusión", "refutación", "desarrollo"],
        0,
        "Presentar el objetivo («se propone examinar») es propio de la introducción. La conclusión cierra el razonamiento, la refutación rebate objeciones y el desarrollo aporta argumentos."
      ),
      mc(
        "«Podría argumentarse que reduciría la producción; no obstante, los estudios piloto indican lo contrario.»",
        ["refutación", "introducción", "conclusión", "título"],
        0,
        "Es una refutación: plantea una objeción («Podría argumentarse…») y la rebate («no obstante, los estudios…»). No presenta el tema, no cierra el ensayo y no es un título."
      ),
      mc(
        "«En segundo lugar, cabe mencionar la mejora en la salud mental de los empleados.»",
        ["desarrollo", "introducción", "conclusión", "refutación"],
        0,
        "«En segundo lugar» enumera argumentos, lo propio del desarrollo. La introducción presenta el tema, la conclusión cierra y la refutación rebate objeciones."
      ),
      fb("Completa (adición en el desarrollo).", "A ello se ___ el ahorro energético de las oficinas.", "suma", "«A ello se suma» añade un argumento nuevo en registro formal."),
      fb("Completa (conclusión).", "En ___, la propuesta resulta viable a medio plazo.", "suma", "«En suma» (= en resumen) introduce la conclusión."),
      ms(
        "¿Qué marcadores son propios de la conclusión?",
        ["en definitiva", "a modo de conclusión", "en primer lugar", "en suma"],
        [0, 1, 3],
        "«En definitiva», «a modo de conclusión» y «en suma» cierran el texto. «En primer lugar» abre la enumeración del desarrollo."
      ),
      wo("A modo de conclusión, conviene recordar las limitaciones del estudio.", "Marcador de cierre.", "By way of conclusion, the study's limitations should be recalled."),
    ]
  ),
  L(
    "academic-essay-writing-part-2-4",
    "c1r-mission-abstract",
    "Misión real: redactar un resumen académico",
    "Escribe el resumen (abstract) de un trabajo: objetivo, método, resultados y conclusión en pocas líneas.",
    "8 min",
    [
      sec(
        "Las cuatro partes del resumen",
        "Objetivo: «El presente estudio tiene como objetivo analizar…». Método: «Para ello, se realizó una encuesta a 300 estudiantes…». Resultados: «Los resultados muestran que…». Conclusión: «Se concluye que…» / «Estos hallazgos sugieren que…». Se redacta en tercera persona o impersonal, sin citas ni ejemplos.",
        [
          ["El presente estudio tiene como objetivo analizar el uso de las redes sociales.", "This study aims to analyze social media use."],
          ["Para ello, se entrevistó a 40 docentes.", "To this end, 40 teachers were interviewed."],
        ],
        [
          mc(
            "¿Qué frase describe el método?",
            ["Se aplicó un cuestionario a 200 participantes.", "Se concluye que el uso es excesivo.", "El objetivo es analizar el uso.", "Estos hallazgos sugieren cambios."],
            0,
            "El método describe qué se hizo: «Se aplicó un cuestionario a 200 participantes». «Se concluye…» es la conclusión, «El objetivo es…» es el objetivo y «Estos hallazgos sugieren…» es la discusión."
          ),
        ]
      ),
    ],
    [
      fb("Completa (objetivo).", "El presente estudio tiene como ___ analizar los hábitos de lectura.", "objetivo", "«Tener como objetivo» + infinitivo presenta el propósito del estudio."),
      fb("Completa (método).", "Para ___, se analizaron 50 artículos de prensa.", "ello", "Para ello = con ese fin."),
      fb("Completa (resultados).", "Los resultados ___ que la lectura digital ha aumentado. (mostrar)", "muestran", "«Los resultados muestran que» + indicativo presenta los hallazgos como datos."),
      mc(
        "Orden correcto del resumen:",
        ["objetivo → método → resultados → conclusión", "conclusión → objetivo → método", "método → conclusión → objetivo", "resultados → objetivo → método"],
        0,
        "El orden estándar de un resumen académico es objetivo, método, resultados y conclusión. Los otros órdenes ponen la conclusión o los resultados antes de explicar qué y cómo se investigó."
      ),
      mc(
        "¿Qué NO debe aparecer en un resumen académico?",
        ["anécdotas personales", "el objetivo", "los resultados principales", "la conclusión"],
        0,
        "Las anécdotas personales no caben en un resumen académico, que es sintético e impersonal. El objetivo, los resultados principales y la conclusión sí deben aparecer."
      ),
      toEs("These findings suggest that further research is needed.", "Estos hallazgos sugieren que se necesita más investigación.", "«Estos hallazgos sugieren que» cierra el resumen con una conclusión atenuada.", ["Estos hallazgos sugieren que es necesaria más investigación.", "Estos resultados sugieren que se necesita más investigación.", "Estos hallazgos sugieren que hace falta más investigación."]),
      wo("Se concluye que la intervención tuvo un efecto moderado.", "Conclusión impersonal.", "It is concluded that the intervention had a moderate effect."),
    ]
  ),
  L(
    "academic-essay-writing-part-2-4",
    "c1r-spiral-academic-nominalization",
    "Repaso en espiral: registro académico y nominalización",
    "El estilo académico nominaliza: «aumentó el paro» → «el aumento del paro». Repasa nominalización, pasiva e impersonalidad juntas.",
    "8 min",
    [
      sec(
        "Densidad nominal",
        "El ensayo prefiere sustantivos a verbos: «Cuando se aprobó la ley» → «Tras la aprobación de la ley». «Porque subieron los precios» → «Debido al aumento de los precios». Se combina con pasivas («fue aprobada») y se impersonal («se observa»).",
        [
          ["Tras la aprobación de la ley, se observó un descenso del desempleo.", "After the law was passed, a drop in unemployment was observed."],
          ["Debido al encarecimiento de la vivienda…", "Due to rising housing costs…"],
        ],
        [
          mc(
            "Nominaliza: «cuando se privatizó la empresa»",
            ["tras la privatización de la empresa", "tras privatizando la empresa", "tras la empresa privatizada fue", "tras privatizarse la empresa fue"],
            0,
            "El sustantivo de «privatizar» es «la privatización»: «tras la privatización de la empresa». «Tras privatizando» usa un gerundio tras preposición, y las otras dos dejan un verbo «fue» sin sentido en la frase."
          ),
        ]
      ),
    ],
    [
      fb("Nominaliza.", "Porque bajaron los tipos de interés… → Debido al ___ de los tipos de interés…", "descenso", "Para «bajar» (los tipos de interés), el sustantivo formal es «el descenso»."),
      fb("Nominaliza.", "Antes de que se publicara el informe… → Antes de la ___ del informe…", "publicación", "Publicar → la publicación."),
      fb("Nominaliza.", "Si se reduce el gasto… → La ___ del gasto…", "reducción", "Reducir → la reducción (-ción)."),
      mt(
        "Relaciona cada verbo con su nominalización.",
        [
          ["aumentar", "aumento"],
          ["analizar", "análisis"],
          ["crecer", "crecimiento"],
          ["mejorar", "mejora"],
        ],
        "Nominalización académica."
      ),
      mc(
        "¿Qué versión es más académica?",
        ["El aumento de la temperatura provocó la desaparición de varias especies.", "Como subió mucho la temperatura, se murieron muchas especies.", "Subió la temperatura y se murieron especies.", "Las especies se murieron porque hacía más calor."],
        0,
        "La nominalización («el aumento», «la desaparición») y el léxico preciso son propios del registro académico. Las otras versiones usan verbos coloquiales («se murieron», «hacía más calor») y una sintaxis conversacional."
      ),
      toEs("After the reform was implemented, costs fell.", "Tras la implantación de la reforma, los costes disminuyeron.", "Nominalización: «tras la implantación de la reforma» en lugar de «después de que se implantara».", ["Tras la aplicación de la reforma, los costes disminuyeron.", "Tras la implementación de la reforma, los costos bajaron.", "Tras la implantación de la reforma, los costes bajaron."]),
      wo("La reducción del gasto público fue objeto de numerosas críticas.", "Estilo nominal.", "The reduction in public spending was widely criticized."),
    ]
  ),
  L(
    "subjunctive-advanced-nuances-drill-3",
    "c1r-extra-subjunctive-meaning-shift",
    "Práctica extra: verbos que cambian de sentido con el modo",
    "Decir, sentir, comprender, pensar: con indicativo informan; con subjuntivo ordenan, lamentan o valoran.",
    "7 min",
    [
      sec(
        "Mismo verbo, dos mensajes",
        "Decir que + indicativo = informar («Dice que viene»); + subjuntivo = ordenar («Dice que vengas»). Sentir que + indicativo = percibir («Siento que me miran»); + subjuntivo = lamentar («Siento que no puedas venir»). Comprender que + indicativo = darse cuenta; + subjuntivo = considerar lógico («Comprendo que estés enfadado»).",
        [
          ["Me escribió que llegaba el martes. / Me escribió que lo llamara.", "He wrote that he was arriving Tuesday. / He wrote telling me to call him."],
          ["Siento que algo va mal. / Siento que te hayas enterado así.", "I sense something is wrong. / I'm sorry you found out this way."],
        ],
        [
          mc(
            "«Mi madre insiste en que ___ la chaqueta.» (orden)",
            ["me lleve", "me llevo", "me llevaré", "me llevé"],
            0,
            "Cuando «insistir en que» expresa una orden o exigencia, lleva subjuntivo: «que me lleve». Con indicativo («me llevo», «me llevé») significaría afirmar con insistencia un hecho, y «llevaré» no encaja con la orden."
          ),
        ]
      ),
    ],
    [
      fb("Informa.", "El médico dice que la operación ___ bien. (salir, pretérito)", "salió", "Decir que + indicativo = informar."),
      fb("Ordena.", "El médico dice que ___ reposo una semana. (hacer, tú)", "hagas", "Decir que + subjuntivo = mandato."),
      fb("Lamenta.", "Siento mucho que no te ___ el puesto. (dar, ellos)", "hayan dado", "Sentir que + subjuntivo = lamentar."),
      fb("Percibe.", "Siento que alguien me ___ desde hace rato. (observar, presente continuo)", "está observando", "Sentir que + indicativo = percibir."),
      mc(
        "«Comprendo que ___ nervioso: es tu primer día.»",
        ["estés", "estás", "estarás", "estuviste"],
        0,
        "«Comprender que» + subjuntivo significa considerar comprensible o justificado: «comprendo que estés nervioso». Con indicativo («estás») significaría darse cuenta de un hecho, y «estarás» o «estuviste» no encajan en el contexto."
      ),
      mc(
        "«Al leer la carta, comprendió que lo ___ engañado durante años.»",
        ["habían", "hubieran", "hayan", "habrán"],
        0,
        "«Comprender que» con el sentido de darse cuenta lleva indicativo: «comprendió que lo habían engañado». Con subjuntivo («hubieran», «hayan») significaría considerarlo comprensible, y «habrán» rompe la concordancia temporal."
      ),
      toEs("She wrote to me telling me to call her.", "Me escribió que la llamara.", "Escribir que + subjuntivo = petición.", ["Me escribió que la llamase.", "Me escribió para que la llamara."]),
    ]
  ),
  L(
    "subjunctive-advanced-nuances-drill-3",
    "c1r-extra-subjunctive-reduplicative",
    "Práctica extra: fórmulas reduplicativas y concesivas",
    "Digan lo que digan, pase lo que pase, sea como sea, quieras o no. El subjuntivo que no se negocia.",
    "7 min",
    [
      sec(
        "Estructura verbo + relativo + verbo",
        "Se repite el mismo verbo en subjuntivo: «Hagas lo que hagas», «Vayas donde vayas», «Llame quien llame». Con dos opciones: «Quieras o no», «Llueva o no». Significan «no importa…». En pasado: «Hiciera lo que hiciera, nunca estaba contento».",
        [
          ["Vayas donde vayas, te encontraré.", "Wherever you go, I'll find you."],
          ["Hiciera lo que hiciera, lo criticaban.", "Whatever he did, they criticized him."],
        ],
        [
          mc(
            "«___ quien llame, di que no estoy.»",
            ["Llame", "Llama", "Llamará", "Llamó"],
            0,
            "La fórmula reduplicativa repite el verbo en subjuntivo: «Llame quien llame». «Llama» y «llamará» son indicativo y «llamó» es pasado."
          ),
        ]
      ),
    ],
    [
      fb("Completa la concesiva.", "Por muy cansado que ___, siempre termina el trabajo. (estar, él)", "esté", "Por muy + adjetivo + que + subjuntivo."),
      fb("Completa la fórmula.", "___ o no, mañana tenemos que madrugar. (querer, tú)", "Quieras", "«Quieras o no» es una fórmula concesiva fija con subjuntivo."),
      fb("Completa (pasado).", "Por más que ___, nunca sacaba buenas notas. (estudiar, él)", "estudiaba", "Por más que + indicativo: hecho real y conocido."),
      mc(
        "Parafrasea «Cueste lo que cueste, lo conseguiremos».",
        ["Sin importar el precio o el esfuerzo, lo conseguiremos.", "Si cuesta poco, lo conseguiremos.", "Como cuesta mucho, no lo conseguiremos.", "Lo conseguiremos porque es barato."],
        0,
        "«Cueste lo que cueste» significa sin importar el precio o el esfuerzo. «Si cuesta poco» la convierte en condición, «Como cuesta mucho, no…» invierte el sentido y «porque es barato» da una causa que la frase no contiene."
      ),
      mt(
        "Relaciona la fórmula con su paráfrasis.",
        [
          ["Pase lo que pase", "en cualquier circunstancia"],
          ["Vayas adonde vayas", "en cualquier lugar"],
          ["Sea quien sea", "cualquier persona"],
        ],
        "Fórmulas reduplicativas."
      ),
      toEs("Whatever happens, call me.", "Pase lo que pase, llámame.", "«Pase lo que pase» (reduplicativa con subjuntivo) traduce «whatever happens».", ["Pase lo que pase, llámame por favor.", "Ocurra lo que ocurra, llámame."]),
      wo("Por mucho que lo intente, no consigo olvidarlo.", "Concesiva con por mucho que.", "However hard I try, I can't forget it."),
    ]
  ),
  L(
    "subjunctive-advanced-nuances-drill-3",
    "c1r-extra-subjunctive-mixed-circuit",
    "Práctica extra: circuito mixto de subjuntivo",
    "Diez contextos distintos en ronda rápida: relativo, temporal, final, concesivo, emoción, duda y el hecho de que.",
    "8 min",
    [
      sec(
        "Checklist rápido",
        "Antecedente desconocido → subjuntivo («Busco a alguien que hable ruso»). Cuando + futuro → subjuntivo. Para que → siempre subjuntivo. El hecho de que → normalmente subjuntivo. No es que + subjuntivo («No es que no quiera, es que no puedo»). Como + subjuntivo al inicio = condición/amenaza («Como no vengas, me enfado»).",
        [
          ["No es que me moleste, es que me sorprende.", "It's not that it bothers me, it's that it surprises me."],
          ["Como vuelvas a llegar tarde, hablaré con tu jefe.", "If you're late again, I'll talk to your boss."],
        ],
        [
          mc(
            "«Como no me ___ la verdad, me voy.»",
            ["digas", "dices", "dirás", "dijiste"],
            0,
            "«Como» + subjuntivo al principio de la frase expresa una condición, a menudo con tono de amenaza: «Como no me digas la verdad…». Con indicativo («dices», «dijiste») «como» sería causal, y «dirás» no cabe en esta estructura."
          ),
        ]
      ),
    ],
    [
      fb("Relativo.", "Necesitamos un piso que ___ ascensor. (tener)", "tenga", "Cuando el antecedente no es concreto (cualquier piso con ascensor), la relativa va en subjuntivo: «que tenga»."),
      fb("Temporal.", "En cuanto ___ los resultados, os aviso. (saber, yo)", "sepa", "«En cuanto» con una acción futura exige subjuntivo, nunca futuro: «en cuanto sepa»."),
      fb("No es que.", "No es que no te ___, es que necesito tiempo. (querer, yo)", "quiera", "«No es que» niega una razón o interpretación y exige subjuntivo: «no es que no te quiera»."),
      fb("El hecho de que.", "El hecho de que ___ rico no le da derecho a todo. (ser, él)", "sea", "El hecho de que + subjuntivo."),
      mc(
        "«Te lo explico despacio para que lo ___.»",
        ["entiendas", "entiendes", "entender", "entenderás"],
        0,
        "«Para que» con sujetos distintos exige subjuntivo: «para que lo entiendas». «Entiendes» y «entenderás» son indicativo, y el infinitivo solo va con el mismo sujeto («para entenderlo»)."
      ),
      mc(
        "«Como ___ tanto, nos quedamos en casa.»",
        ["llovía", "lloviera", "llueva", "haya llovido"],
        0,
        "«Como» al principio de la frase y con indicativo es causal (= porque): «Como llovía tanto…». Con subjuntivo («lloviera», «llueva», «haya llovido») pasaría a ser condicional, lo que no encaja con un hecho ya ocurrido."
      ),
      toEs("It's not that I don't want to; I can't.", "No es que no quiera; es que no puedo.", "«No es que» + subjuntivo niega la razón aparente; «es que» introduce la verdadera.", ["No es que no quiera, es que no puedo.", "No es que no quiera; no puedo."]),
    ]
  ),
  L(
    "nominalization-drill-3",
    "c1r-extra-nominalization-headlines",
    "Práctica extra: titulares nominales",
    "La prensa comprime frases enteras en sustantivos: «Detenido el alcalde», «Subida del IVA». Descomprime y comprime titulares.",
    "7 min",
    [
      sec(
        "El estilo de titular",
        "Sustantivo deverbal: «El Gobierno sube el IVA» → «Subida del IVA». Participio sin verbo: «Han detenido al alcalde» → «Detenido el alcalde». Sustantivo + de + agente/paciente: «Los médicos protestan» → «Protesta de los médicos».",
        [
          ["Aprobada la nueva ley de vivienda.", "New housing law approved."],
          ["Caída de las ventas en diciembre.", "Sales drop in December."],
        ],
        [
          mc(
            "Titular nominal para «Los agricultores protestan en Madrid»:",
            ["Protesta de agricultores en Madrid", "Protestando agricultores en Madrid", "Agricultores protestaron Madrid", "Madrid protesta agricultores"],
            0,
            "Un titular nominal usa el sustantivo del verbo: «Protesta de agricultores en Madrid». «Protestando agricultores» usa un gerundio, y las otras dos omiten preposiciones o confunden sujeto y lugar."
          ),
        ]
      ),
    ],
    [
      fb("Comprime.", "Los precios del alquiler bajan. → ___ de los precios del alquiler.", "Bajada", "Bajar → la bajada (o «el descenso»), para comprimir en estilo de titular."),
      fb("Comprime.", "Han cerrado la frontera por la tormenta. → ___ la frontera por la tormenta.", "Cerrada", "Participio de titular, concuerda con frontera."),
      fb("Comprime.", "Dimite la ministra de Sanidad. → ___ de la ministra de Sanidad.", "Dimisión", "Dimitir → la dimisión, sustantivo en -sión."),
      mc(
        "Descomprime: «Rescatados tres montañeros en los Pirineos»",
        ["Han rescatado a tres montañeros en los Pirineos.", "Tres montañeros rescatan en los Pirineos.", "Los Pirineos rescatan a tres montañeros.", "Rescatar tres montañeros es en los Pirineos."],
        0,
        "El titular con participio equivale a una pasiva o a una activa impersonal: «Han rescatado a tres montañeros». «Tres montañeros rescatan» invierte los papeles, «Los Pirineos rescatan» hace sujeto al lugar y «Rescatar… es en los Pirineos» es agramatical."
      ),
      mt(
        "Relaciona verbo y sustantivo de titular.",
        [
          ["huir", "huida"],
          ["detener", "detención"],
          ["llegar", "llegada"],
          ["elegir", "elección"],
        ],
        "Sustantivos deverbales."
      ),
      toEs("Rise in unemployment in the south.", "Aumento del paro en el sur.", "Titular nominal: «aumento» (de «aumentar») + complemento con «de».", ["Subida del paro en el sur.", "Aumento del desempleo en el sur."]),
      wo("Hallado un manuscrito inédito de Lorca en Granada.", "Titular con participio.", "Unpublished Lorca manuscript found in Granada."),
    ]
  ),
  L(
    "nominalization-drill-3",
    "c1r-extra-nominalization-denominalize",
    "Práctica extra: desnominalizar para aclarar",
    "El exceso de sustantivos oscurece. Practica el camino inverso: devolver verbos al texto para que se entienda mejor.",
    "7 min",
    [
      sec(
        "Cuando la nominalización sobra",
        "«Se procedió a la realización de la revisión del documento» → «Se revisó el documento». Las cadenas de «la + sustantivo + de» (realización, efectuación, procedimiento) cansan al lector. Criterio: si un verbo expresa la idea, úsalo.",
        [
          ["Se llevó a cabo la limpieza de la sala. → Se limpió la sala.", "The room was cleaned."],
          ["Realizamos la compra de material. → Compramos material.", "We bought materials."],
        ],
        [
          mc(
            "Versión más clara de «Se efectuó la reparación de la avería»:",
            ["Se reparó la avería.", "Se hizo efectiva la reparación de la avería.", "Se realizó la efectuación de la reparación.", "La avería fue objeto de reparación efectuada."],
            0,
            "Un verbo directo es más claro que un verbo comodín + nominalización: «Se reparó la avería». Las otras opciones añaden más relleno («hacer efectiva», «efectuación», «fue objeto de») en lugar de quitarlo."
          ),
        ]
      ),
    ],
    [
      fb("Desnominaliza.", "Procedimos a la firma del contrato. → ___ el contrato.", "Firmamos", "Se sustituye «proceder a la firma» por el verbo directo «firmar»: «firmamos»."),
      fb("Desnominaliza.", "Se hizo la entrega de los premios. → Se ___ los premios.", "entregaron", "«Hacer la entrega» → «entregar», en pasiva refleja plural con «los premios»: «se entregaron»."),
      fb("Desnominaliza.", "Tomaron la decisión de marcharse. → ___ marcharse.", "Decidieron", "«Tomar la decisión de» equivale al verbo directo «decidir»: «decidieron marcharse»."),
      mc(
        "¿Qué frase es más legible?",
        ["El comité aprobó el presupuesto.", "Por parte del comité se procedió a la aprobación del presupuesto.", "Se llevó a cabo la aprobación presupuestaria por parte del comité.", "La aprobación del presupuesto fue efectuada por el comité."],
        0,
        "Sujeto + verbo + objeto es lo más legible: «El comité aprobó el presupuesto». Las otras versiones inflan el texto con «por parte de», «se procedió a», «se llevó a cabo» o «fue efectuada»."
      ),
      ms(
        "¿Qué expresiones suelen inflar el texto innecesariamente?",
        ["proceder a la realización de", "llevar a cabo la ejecución de", "efectuar la limpieza de", "revisar"],
        [0, 1, 2],
        "«Proceder a la realización de», «llevar a cabo la ejecución de» y «efectuar la limpieza de» inflan el texto. «Revisar» es el verbo directo, la alternativa recomendable."
      ),
      toEs("They cancelled the meeting. (plain style)", "Cancelaron la reunión.", "Estilo llano: sujeto (implícito) + verbo directo, «cancelaron la reunión».", ["Se canceló la reunión.", "Suspendieron la reunión."]),
      wo("Revisamos los datos y corregimos los errores.", "Estilo verbal claro.", "We reviewed the data and corrected the errors."),
    ]
  ),
  L(
    "nominalization-drill-3",
    "c1r-extra-nominalization-infinitive-lo",
    "Práctica extra: nominalizar con infinitivo, lo y el que",
    "No solo hay sustantivos deverbales: el infinitivo (el comer), lo + adjetivo (lo bueno) y el que + subjuntivo también nominalizan.",
    "7 min",
    [
      sec(
        "Otras vías de nominalización",
        "Infinitivo con artículo: «El continuo quejarse de Luis agota». Lo + adjetivo: «Lo importante es participar». El (hecho de) que + subjuntivo como sujeto: «El que no llamara me preocupó». Adjetivo sustantivado: «los mayores», «el tonto de Pedro».",
        [
          ["Lo curioso es que nadie lo notó.", "The curious thing is that nobody noticed."],
          ["El que no respondiera me extrañó.", "The fact that he didn't reply surprised me."],
        ],
        [
          mc(
            "«___ de este plan es que es barato.»",
            ["Lo bueno", "El bueno", "La buena", "Lo buena"],
            0,
            "«Lo» + adjetivo en masculino singular nombra una cualidad abstracta: «Lo bueno». «El bueno» y «La buena» se referirían a una persona o cosa concreta, y «Lo buena» no concuerda."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "___ que dimitiera tan pronto sorprendió a todos.", "El", "El que + subjuntivo como sujeto."),
      fb("Completa.", "Lo ___ de todo fue la espera. (peor)", "peor", "«Lo» + adjetivo, aquí comparativo: «lo peor»."),
      fb("Completa.", "El ___ de las olas me relaja. (sonar, infinitivo)", "sonar", "El infinitivo con artículo funciona como sustantivo: «el sonar de las olas»."),
      mc(
        "«El que ___ tarde otra vez no es buena señal.» (llegar, él)",
        ["llegue", "llega", "llegará", "llegar"],
        0,
        "«El que» (= el hecho de que) al principio de la frase suele llevar subjuntivo: «El que llegue tarde otra vez…». Con «llega» o «llegará» suena poco natural en posición de sujeto, y «llegar» no puede ir tras «que»."
      ),
      ms(
        "¿Qué frases contienen una nominalización?",
        ["Lo difícil fue empezar.", "Su constante mentir cansaba a todos.", "Me gusta la playa.", "El que lo supieras me alivió."],
        [0, 1, 3],
        "«Lo difícil», «su constante mentir» y «El que lo supieras» nominalizan un adjetivo, un infinitivo y una oración. «La playa» es un sustantivo común, no una nominalización."
      ),
      toEs("The best thing is that it's free.", "Lo mejor es que es gratis.", "«Lo» + adjetivo («lo mejor») nombra el aspecto destacado: «lo mejor es que…».", ["Lo mejor es que es gratuito."]),
      wo("Lo que más valoro de ella es su sinceridad.", "Lo que + verbo.", "What I value most about her is her honesty."),
    ]
  ),
  L(
    "gerundio-vs-infinitivo-drill-3",
    "c1r-extra-gerund-posteriority",
    "Práctica extra: el gerundio de posterioridad y otros usos incorrectos",
    "«Se cayó, rompiéndose el brazo» o «Una caja conteniendo libros»: los gerundios que la norma rechaza y cómo arreglarlos.",
    "7 min",
    [
      sec(
        "Gerundios problemáticos",
        "Gerundio de posterioridad: ✗ «Estudió en Salamanca, trasladándose después a Madrid» → «…y después se trasladó a Madrid». Gerundio especificativo (como adjetivo): ✗ «Una ley regulando el alquiler» → «Una ley que regula el alquiler». Válido: simultaneidad o anterioridad inmediata («Salió corriendo»; «Abriendo la puerta, vio a su padre»).",
        [
          ["✗ Chocó con un árbol, muriendo en el acto. → ✓ Chocó con un árbol y murió en el acto.", "He crashed into a tree and died instantly."],
          ["✗ Se busca secretaria hablando inglés. → ✓ Se busca secretaria que hable inglés.", "Secretary who speaks English wanted."],
        ],
        [
          mc(
            "¿Qué frase usa bien el gerundio?",
            ["Entró en casa silbando.", "Envió un paquete conteniendo documentos.", "Nació en Lima, muriendo en París.", "Firmó el decreto, entrando en vigor al día siguiente."],
            0,
            "El gerundio es correcto cuando es simultáneo: «Entró en casa silbando». «Un paquete conteniendo» es especificativo (incorrecto), y «muriendo en París» y «entrando en vigor» expresan posterioridad."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Recibí una carta ___ informaba del cambio. (el alumno puso: carta informando)", "que", "El gerundio no puede especificar un sustantivo («carta informando»); se usa una relativa: «que informaba»."),
      fb("Corrige.", "Se graduó en 2010 y ___ a trabajar en Chile en 2012. (el alumno puso: …, empezando a trabajar)", "empezó", "Una acción posterior se expresa con verbo conjugado, no con gerundio: «y empezó a trabajar»."),
      mc(
        "Versión correcta de «Hubo un incendio, resultando heridas tres personas»:",
        ["Hubo un incendio en el que resultaron heridas tres personas.", "Hubo un incendio resultando tres heridos.", "Resultando heridas tres personas, hubo un incendio.", "Hubo un incendio, resultado heridas tres."],
        0,
        "Se sustituye el gerundio de posterioridad por una oración conjugada: «en el que resultaron heridas…». «Resultando tres heridos» mantiene el error, anteponerlo invierte la lógica y «resultado heridas» es agramatical."
      ),
      ms(
        "¿Qué gerundios son correctos?",
        ["Llegó sonriendo.", "Estando enfermo, no pudo venir.", "Una caja conteniendo joyas.", "Viendo el panorama, decidimos irnos."],
        [0, 1, 3],
        "«Llegó sonriendo» (simultáneo), «Estando enfermo» (causal) y «Viendo el panorama» (causal) son correctos. «Una caja conteniendo joyas» es un gerundio especificativo: debería ser «que contenía»."
      ),
      fb("Completa (causal, correcto).", "___ tan tarde, cogimos un taxi. (ser)", "Siendo", "El gerundio causal equivale a «como era tan tarde»: «siendo tan tarde»."),
      toEs("They published a decree that regulates prices.", "Publicaron un decreto que regula los precios.", "Para especificar el sustantivo se usa una relativa («que regula»), no un gerundio.", ["Se publicó un decreto que regula los precios.", "Publicaron un decreto que regulaba los precios."]),
      wo("Salió de la reunión dando un portazo.", "Gerundio de modo.", "He left the meeting slamming the door."),
    ]
  ),
  L(
    "gerundio-vs-infinitivo-drill-3",
    "c1r-extra-periphrasis-aspect",
    "Práctica extra: perífrasis de aspecto",
    "Llevar + gerundio, andar + gerundio, acabar + gerundio, ponerse a, dejar de, volver a: el matiz está en la perífrasis.",
    "7 min",
    [
      sec(
        "Gerundio o infinitivo según la perífrasis",
        "Con gerundio (duración, proceso): llevar (tiempo) + gerundio, seguir/continuar + gerundio, andar + gerundio (actividad dispersa, a veces peyorativa), acabar + gerundio (resultado final). Con infinitivo (fases): ponerse a (inicio), dejar de (fin), volver a (repetición), acabar de (pasado inmediato), llegar a (culminación).",
        [
          ["Llevo tres años estudiando chino.", "I've been studying Chinese for three years."],
          ["Anda diciendo por ahí que me voy.", "He's going around saying I'm leaving."],
          ["Al final acabó aceptando.", "In the end he ended up accepting."],
        ],
        [
          mc(
            "«Después de tantas discusiones, acabaron ___.»",
            ["divorciándose", "de divorciarse", "a divorciarse", "divorciarse"],
            0,
            "«Acabar» + gerundio expresa el resultado final de un proceso: «acabaron divorciándose». «Acabar de divorciarse» significaría hacerlo hace poco, y «a divorciarse» o «divorciarse» sin más no forman esta perífrasis."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Lleva dos horas ___ el teléfono. (buscar)", "buscando", "«Llevar» + tiempo + gerundio expresa duración: «lleva dos horas buscando»."),
      fb("Completa.", "Cuando lo vio, se puso ___ llorar.", "a", "«Ponerse a» + infinitivo marca el inicio repentino de una acción."),
      fb("Completa.", "Hace un año que dejó ___ fumar.", "de", "«Dejar de» + infinitivo marca el fin de una acción o hábito."),
      mc(
        "«Anda ___ mentiras sobre todo el mundo.»",
        ["contando", "a contar", "de contar", "contar"],
        0,
        "«Andar» + gerundio indica una acción repetida, a menudo con matiz peyorativo: «anda contando mentiras». «A contar», «de contar» y «contar» no forman esta perífrasis."
      ),
      mt(
        "Relaciona la perífrasis con su significado.",
        [
          ["volver a + inf.", "repetición"],
          ["llegar a + inf.", "culminación"],
          ["seguir + ger.", "continuidad"],
          ["acabar de + inf.", "pasado inmediato"],
        ],
        "Perífrasis aspectuales."
      ),
      toEs("She has been working here for ten years.", "Lleva diez años trabajando aquí.", "«Llevar» + tiempo + gerundio traduce «has been -ing for».", ["Lleva trabajando aquí diez años.", "Hace diez años que trabaja aquí."]),
      wo("Nunca llegó a entender por qué se fue.", "Llegar a + infinitivo.", "He never came to understand why she left."),
    ]
  ),
  L(
    "gerundio-vs-infinitivo-drill-3",
    "c1r-extra-infinitive-subject-object",
    "Práctica extra: el infinitivo como sujeto y el inglés -ing",
    "«Swimming is healthy» no se traduce con gerundio: en español el sujeto es infinitivo. Evita la trampa del -ing.",
    "7 min",
    [
      sec(
        "Del -ing inglés al infinitivo español",
        "Sujeto: Smoking kills → Fumar mata. Tras preposición: before leaving → antes de salir; without saying → sin decir; after eating → después de comer. Tras verbos de gusto: I like reading → Me gusta leer. Solo se usa gerundio para la acción en curso (estar + gerundio) y el modo.",
        [
          ["Viajar sola me ha enseñado mucho.", "Traveling alone has taught me a lot."],
          ["Se fue sin despedirse.", "He left without saying goodbye."],
        ],
        [
          mc(
            "«Reading before bed helps me sleep.»",
            ["Leer antes de dormir me ayuda a conciliar el sueño.", "Leyendo antes de dormir me ayuda a dormir.", "El leyendo antes de dormir me ayuda.", "Leyendo antes de durmiendo me ayuda."],
            0,
            "En español el infinitivo funciona como sujeto: «Leer antes de dormir…». El gerundio no puede ser sujeto («Leyendo… me ayuda»), no admite artículo («El leyendo») y tras preposición va infinitivo («antes de dormir»)."
          ),
        ]
      ),
    ],
    [
      fb("Traduce el -ing.", "Después de ___ la noticia, llamó a su hermana. (leer)", "leer", "Tras preposición («después de») el verbo va en infinitivo, no en gerundio."),
      fb("Traduce el -ing.", "___ idiomas abre muchas puertas. (aprender)", "Aprender", "El -ing inglés en función de sujeto se traduce por infinitivo: «Aprender idiomas…»."),
      fb("Traduce el -ing.", "Estoy harto de ___ siempre lo mismo. (oír)", "oír", "Tras «de» (preposición) se usa el infinitivo: «harto de oír»."),
      mc(
        "«Thank you for coming.»",
        ["Gracias por venir.", "Gracias por viniendo.", "Gracias para venir.", "Gracias de viniendo."],
        0,
        "«Dar las gracias por» + infinitivo: «Gracias por venir». Tras preposición no va gerundio («por viniendo», «de viniendo»), y «para» expresaría finalidad."
      ),
      ms(
        "¿Qué frases están bien?",
        ["Nadar es mi deporte favorito.", "Nadando es mi deporte favorito.", "Me encanta cocinar para mis amigos.", "Antes de salir, apaga la luz."],
        [0, 2, 3],
        "El gerundio no puede ser sujeto, así que «Nadando es mi deporte favorito» es incorrecta: «Nadar es…». Las demás usan bien el infinitivo como sujeto, como complemento de «encantar» y tras «antes de»."
      ),
      toEs("Learning a language takes time.", "Aprender un idioma lleva tiempo.", "El infinitivo funciona como sujeto: «Aprender un idioma lleva tiempo».", ["Aprender un idioma requiere tiempo.", "Aprender una lengua lleva tiempo."]),
      wo("Salió de casa sin decir a nadie adónde iba.", "Sin + infinitivo.", "He left home without telling anyone where he was going."),
    ]
  ),
  L(
    "passive-voice-impersonal-se-drill-3",
    "c1r-extra-passive-news-rewrite",
    "Práctica extra: reescritura de noticias en pasiva",
    "Una misma noticia en voz activa, pasiva perifrástica y pasiva refleja: elige según el registro y el foco.",
    "7 min",
    [
      sec(
        "Tres versiones, tres focos",
        "Activa: «La policía detuvo a dos sospechosos» (foco en el agente). Pasiva perifrástica: «Dos sospechosos fueron detenidos por la policía» (registro periodístico, agente opcional). Pasiva refleja: «Se detuvo a dos sospechosos» (agente irrelevante; con persona se usa a y el verbo va en singular).",
        [
          ["El museo fue inaugurado por la alcaldesa.", "The museum was opened by the mayor."],
          ["Se inauguraron dos salas nuevas.", "Two new rooms were opened."],
        ],
        [
          mc(
            "Pasiva refleja de «Vendieron todas las entradas»:",
            ["Se vendieron todas las entradas.", "Se vendió todas las entradas.", "Fueron vendido todas las entradas.", "Se vendían por todas las entradas."],
            0,
            "En la pasiva refleja el verbo concuerda con el sujeto plural: «Se vendieron todas las entradas». «Se vendió» no concuerda, «fueron vendido» no concuerda el participio y «se vendían por» cambia el sentido."
          ),
        ]
      ),
    ],
    [
      fb("Pasiva perifrástica.", "Los bomberos rescataron a la familia. → La familia fue ___ por los bomberos.", "rescatada", "En la pasiva perifrástica el participio concuerda con el sujeto: «la familia fue rescatada»."),
      fb("Pasiva refleja.", "El ayuntamiento abrirá dos parques. → Se ___ dos parques. (inaugurar, futuro)", "inaugurarán", "Pasiva refleja en futuro, concordando con «dos parques»: «se inaugurarán»."),
      fb("Impersonal con persona.", "Evacuaron a los vecinos. → Se ___ a los vecinos.", "evacuó", "Se + singular + a + persona."),
      mc(
        "«Las obras ___ terminadas en marzo.» (pasiva de resultado)",
        ["estarán", "serán estando", "se estarán", "habrán estando"],
        0,
        "La pasiva de resultado usa «estar» + participio: «estarán terminadas». «Serán estando» y «habrán estando» mezclan formas de modo agramatical, y «se estarán terminadas» añade un «se» imposible."
      ),
      mc(
        "¿Qué versión omite el agente de forma natural?",
        ["Se aprobó la reforma por unanimidad.", "La reforma fue aprobada por el Congreso.", "El Congreso aprobó la reforma.", "El Congreso fue quien aprobó la reforma."],
        0,
        "La pasiva refleja omite el agente de forma natural: «Se aprobó la reforma por unanimidad» («por unanimidad» es el modo, no el agente). Las demás mencionan al Congreso como agente."
      ),
      toEs("Three suspects were arrested yesterday.", "Tres sospechosos fueron detenidos ayer.", "Pasiva perifrástica: «ser» + participio concordado con «sospechosos».", ["Ayer fueron detenidos tres sospechosos.", "Ayer se detuvo a tres sospechosos.", "Se detuvo ayer a tres sospechosos."]),
      wo("El cuadro fue robado durante la noche sin que nadie lo notara.", "Pasiva perifrástica + sin que.", "The painting was stolen during the night without anyone noticing."),
    ]
  ),
  L(
    "passive-voice-impersonal-se-drill-3",
    "c1r-extra-se-accidental",
    "Práctica extra: el se accidental («se me olvidó»)",
    "Se me cayó, se nos acabó, se le rompió: el español presenta los accidentes como algo que le pasa a alguien.",
    "7 min",
    [
      sec(
        "Se + me/te/le/nos/os/les + verbo",
        "El objeto es el sujeto gramatical y el verbo concuerda con él; la persona afectada va en dativo: «Se me cayeron las llaves». Verbos típicos: caer, olvidar, romper, perder, acabar, ocurrir, escapar, quemar. Resta responsabilidad: «Rompí el vaso» (yo lo hice) vs. «Se me rompió el vaso» (fue sin querer).",
        [
          ["Se nos acabó la leche.", "We ran out of milk."],
          ["¿Se te ha ocurrido alguna idea?", "Have you come up with any idea?"],
        ],
        [
          mc(
            "«A Pedro ___ las gafas en el tren.»",
            ["se le olvidaron", "se le olvidó", "le se olvidaron", "se olvidó a él"],
            0,
            "En el «se» accidental, el verbo concuerda con lo olvidado («las gafas») y la persona afectada va en dativo: «se le olvidaron». «Se le olvidó» no concuerda con el plural, «le se» invierte el orden y «se olvidó a él» no es la estructura."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se ___ quemó la cena mientras hablaba por teléfono. (a mí)", "me", "En el «se» accidental, la persona afectada va en dativo: «se me quemó»."),
      fb("Completa (concordancia).", "Se les ___ los billetes en el taxi. (perder, pretérito)", "perdieron", "El verbo concuerda con lo perdido («los billetes»): «se les perdieron»."),
      fb("Completa.", "¿Cómo se os ___ semejante idea? (ocurrir, pretérito)", "ocurrió", "«Ocurrírsele algo a alguien»: el verbo concuerda con «semejante idea» (singular): «se os ocurrió»."),
      mc(
        "¿Qué frase admite responsabilidad?",
        ["Rompí la ventana con la pelota.", "Se me rompió la ventana.", "Se rompió la ventana.", "Se nos rompió la ventana."],
        0,
        "La construcción activa transitiva «Rompí la ventana» asume la responsabilidad. Las opciones con «se me/se nos rompió» presentan el hecho como accidental, y «Se rompió» ni siquiera menciona a nadie."
      ),
      ms(
        "¿Cuáles están bien construidas?",
        ["Se me escapó el perro.", "Se me escaparon los perros.", "Se me escapé el perro.", "Me se escapó el perro."],
        [0, 1],
        "El orden es «se» + «me», y el verbo concuerda con lo que se escapa: «se me escapó el perro», «se me escaparon los perros». «Se me escapé» no concuerda con «el perro» y «Me se» invierte el orden."
      ),
      toEs("I dropped my phone. (accidental)", "Se me cayó el móvil.", "«Se me cayó» presenta la caída como involuntaria; el verbo concuerda con «el móvil».", ["Se me cayó el celular.", "Se me cayó el teléfono."]),
      wo("Se nos hizo tarde y perdimos el último tren.", "Hacérsele tarde a alguien.", "It got late on us and we missed the last train."),
    ]
  ),
  L(
    "passive-voice-impersonal-se-drill-3",
    "c1r-extra-impersonal-alternatives",
    "Práctica extra: cinco formas de no decir quién",
    "Se impersonal, 3.ª plural, uno, tú genérico y la gente: elige la impersonalidad adecuada al registro.",
    "7 min",
    [
      sec(
        "Escala de impersonalidad",
        "Se (neutro, formal): «Se vive bien aquí». 3.ª plural (agente indeterminado, coloquial): «Llaman a la puerta». Uno/una (incluye al hablante): «Uno nunca sabe». Tú genérico (coloquial): «Aquí trabajas y no te pagan». La gente (colectivo): «La gente no lee». Con verbos pronominales no se puede usar se: «Uno se acostumbra» (no ✗ «se se acostumbra»).",
        [
          ["Uno se cansa de repetir lo mismo.", "One gets tired of repeating the same thing."],
          ["Dicen que va a nevar.", "They say it's going to snow."],
        ],
        [
          mc(
            "Impersonal de «acostumbrarse»:",
            ["Uno se acostumbra a todo.", "Se se acostumbra a todo.", "Se acostumbra uno a se todo.", "Acostumbran se a todo."],
            0,
            "Los verbos pronominales ya llevan «se», así que su impersonal se forma con «uno»: «Uno se acostumbra a todo». «Se se» duplica el pronombre, y las otras dos colocan mal los pronombres."
          ),
        ]
      ),
    ],
    [
      fb("3.ª plural indeterminada.", "___ que el restaurante ha cerrado. (decir)", "Dicen", "La tercera persona del plural sin sujeto expresa un agente indeterminado: «dicen que…»."),
      fb("Se impersonal.", "En este país ___ cena muy tarde.", "se", "El «se» impersonal generaliza sin sujeto concreto: «se cena muy tarde»."),
      fb("Uno.", "___ nunca sabe lo que puede pasar.", "Uno", "«Uno» es un impersonal que incluye al hablante: «uno nunca sabe»."),
      mc(
        "¿Cuál es la forma más adecuada para un informe?",
        ["Se recomienda revisar los datos.", "Uno recomienda revisar los datos.", "Recomiendas revisar los datos.", "La gente recomienda revisar los datos."],
        0,
        "El «se» impersonal es propio del registro formal: «Se recomienda…». «Uno recomienda» y «Recomiendas» son coloquiales, y «La gente recomienda» es vago e impreciso."
      ),
      mc(
        "«Aquí trabajas doce horas y nadie te da las gracias.» El tú es…",
        ["genérico (cualquier persona)", "el interlocutor concreto", "un error", "plural"],
        0,
        "Es un «tú» genérico: habla de lo que le pasa a cualquier persona que trabaja allí. No se refiere al interlocutor concreto, no es un error y no es plural."
      ),
      toEs("They're knocking at the door.", "Llaman a la puerta.", "La tercera persona del plural sin sujeto expresa un agente desconocido: «llaman a la puerta».", ["Están llamando a la puerta.", "Tocan a la puerta.", "Tocan la puerta."]),
      wo("Cuando uno se pone nervioso, se le olvida todo.", "Uno + se accidental.", "When you get nervous, you forget everything."),
    ]
  ),
  L(
    "estilo-indirecto-libre-drill-3",
    "c1r-extra-reported-speech-shifts",
    "Práctica extra: los desplazamientos del estilo indirecto",
    "Tiempo verbal, pronombres, deícticos (aquí → allí, mañana → al día siguiente): todo se desplaza al contar en pasado.",
    "7 min",
    [
      sec(
        "Qué se desplaza",
        "Tiempos: presente → imperfecto; perfecto/indefinido → pluscuamperfecto; futuro → condicional; imperativo → imperfecto de subjuntivo. Deícticos: hoy → aquel día; mañana → al día siguiente; ayer → el día anterior; aquí → allí; este → aquel. Pronombres y posesivos: según quién cuenta.",
        [
          ["«Mañana te llamo» → Dijo que me llamaría al día siguiente.", "He said he would call me the next day."],
          ["«Ven aquí» → Me pidió que fuera allí.", "She asked me to go there."],
        ],
        [
          mc(
            "«Ayer perdí las llaves» → Dijo que…",
            ["había perdido las llaves el día anterior.", "perdió las llaves mañana.", "pierde las llaves ayer.", "perdería las llaves hoy."],
            0,
            "En estilo indirecto con verbo introductor en pasado, el indefinido pasa a pluscuamperfecto y «ayer» a «el día anterior»: «había perdido las llaves el día anterior». Las demás no desplazan los tiempos o combinan tiempos y adverbios incompatibles («perdió… mañana», «pierde… ayer»)."
          ),
        ]
      ),
    ],
    [
      fb("Desplaza el deíctico.", "«Hoy no puedo» → Dijo que ___ día no podía.", "aquel", "Al reproducir palabras de otro momento, «hoy» pasa a «aquel día» (o «ese día»)."),
      fb("Desplaza el tiempo.", "«Lo terminaré pronto» → Aseguró que lo ___ pronto.", "terminaría", "En estilo indirecto con verbo introductor en pasado, el futuro pasa a condicional: «terminaría»."),
      fb("Desplaza el imperativo.", "«Cierra la puerta» → Me pidió que ___ la puerta.", "cerrara", "Un imperativo reproducido tras un verbo de petición en pasado pasa a imperfecto de subjuntivo: «que cerrara»."),
      fb("Desplaza el lugar.", "«Te espero aquí» → Me dijo que me esperaba ___.", "allí", "Al reproducir palabras dichas en otro lugar, «aquí» pasa a «allí»."),
      mt(
        "Relaciona cada deíctico con su versión desplazada.",
        [
          ["mañana", "al día siguiente"],
          ["ayer", "el día anterior"],
          ["este mes", "aquel mes"],
          ["ahora", "en ese momento"],
        ],
        "Deícticos en estilo indirecto."
      ),
      toEs("She told me she would come back the next day.", "Me dijo que volvería al día siguiente.", "El futuro pasa a condicional («volvería») y «tomorrow» a «al día siguiente».", ["Me dijo que regresaría al día siguiente.", "Me contó que volvería al día siguiente."]),
      wo("Nos advirtió que no tocáramos nada hasta que llegara la policía.", "Imperativo → subjuntivo.", "He warned us not to touch anything until the police arrived."),
    ]
  ),
  L(
    "estilo-indirecto-libre-drill-3",
    "c1r-extra-free-indirect-identify",
    "Práctica extra: ¿directo, indirecto o indirecto libre?",
    "Identifica el tipo de discurso en fragmentos literarios por sus marcas: comillas, verbo de habla, preguntas del personaje sin verbo introductor.",
    "7 min",
    [
      sec(
        "Tres voces",
        "Directo: palabras literales con guion o comillas («—Estoy cansada —dijo»). Indirecto: verbo introductor + que + tiempos desplazados («Dijo que estaba cansada»). Indirecto libre: sin verbo introductor ni que; tiempos del narrador, pero voz y emociones del personaje («Estaba cansada. ¿Por qué tenía que aguantar aquello otra vez?»).",
        [
          ["—¿Dónde está mi hijo? —gritó.", "Direct speech."],
          ["Preguntó dónde estaba su hijo.", "Indirect speech."],
          ["¿Dónde estaría su hijo? Dios mío, ¿y si le había pasado algo?", "Free indirect speech."],
        ],
        [
          mc(
            "«Miró el reloj. Otra vez tarde. ¡Qué pensaría su jefe!» es…",
            ["estilo indirecto libre", "estilo directo", "estilo indirecto", "un diálogo"],
            0,
            "Es estilo indirecto libre: la exclamación del personaje aparece sin verbo introductor, en tercera persona y en tiempo pasado. El estilo directo usaría guion o comillas, el indirecto «pensó que…», y no hay diálogo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Juan dijo que no pensaba volver.»",
        ["indirecto", "directo", "indirecto libre", "monólogo en presente"],
        0,
        "Es estilo indirecto: verbo introductor («dijo») + «que» con los tiempos desplazados. El directo reproduciría las palabras literales, el indirecto libre no tendría «dijo que» y no hay presente de monólogo."
      ),
      mc(
        "«—No pienso volver —dijo Juan.»",
        ["directo", "indirecto", "indirecto libre", "narración pura"],
        0,
        "Es estilo directo: guion y palabras literales del personaje. En el indirecto habría «dijo que no pensaba», el indirecto libre no tendría guion ni verbo introductor, y no es narración pura."
      ),
      mc(
        "«Juan cerró la maleta. No, no pensaba volver. ¿Para qué? ¿Para que lo humillaran otra vez?»",
        ["indirecto libre", "directo", "indirecto", "resumen objetivo"],
        0,
        "Es estilo indirecto libre: la voz de Juan («¿Para qué?») aparece dentro de la narración sin verbo introductor. No hay guion (directo), ni «pensó que» (indirecto), y las preguntas no son un resumen objetivo."
      ),
      ms(
        "¿Qué marcas son típicas del estilo indirecto libre?",
        ["preguntas y exclamaciones del personaje", "tiempos del pasado del narrador", "ausencia de verbo introductor", "comillas y guiones"],
        [0, 1, 2],
        "Las preguntas y exclamaciones del personaje, los tiempos del pasado del narrador y la ausencia de verbo introductor caracterizan el indirecto libre. Las comillas y los guiones son del estilo directo."
      ),
      fb("Pasa a indirecto libre.", "Pensó: «¿Me habrá mentido?» → ¿Le ___ mentido?", "habría", "El futuro perfecto de conjetura pasa a condicional perfecto: «¿Le habría mentido?»."),
      fb("Pasa a indirecto libre.", "Pensó: «Mañana se lo digo» → Al día siguiente se lo ___.", "diría", "Presente con valor futuro → condicional."),
      wo("¿Y si nadie se acordaba de su cumpleaños?", "Pregunta del personaje en indirecto libre.", "What if nobody remembered her birthday?"),
    ]
  ),
  L(
    "estilo-indirecto-libre-drill-3",
    "c1r-extra-reporting-verbs",
    "Práctica extra: verbos introductores precisos",
    "Más allá de «decir»: admitir, reprochar, advertir, prometer, sugerir, negar… y el modo que exige cada uno.",
    "7 min",
    [
      sec(
        "El verbo interpreta",
        "Admitir / reconocer / negar que + indicativo (negar suele llevar subjuntivo: «Negó que lo hubiera hecho»). Prometer / asegurar que + indicativo (condicional). Sugerir / aconsejar / reprochar / exigir que + subjuntivo. Advertir que + indicativo (aviso) / + subjuntivo (orden).",
        [
          ["Reconoció que se había equivocado.", "He admitted he had been wrong."],
          ["Me reprochó que no la hubiera llamado.", "She reproached me for not having called her."],
        ],
        [
          mc(
            "«—Yo no he sido.» → Negó que ___.",
            ["lo hubiera hecho", "lo había hecho", "lo haría", "lo hace"],
            0,
            "«Negar que» exige subjuntivo, y la acción es anterior al pasado: «lo hubiera hecho». «Lo había hecho» usa indicativo tras «negar», «lo haría» es futuro del pasado y «lo hace» es presente."
          ),
        ]
      ),
    ],
    [
      fb("Elige el modo.", "«Deberías descansar» → Me aconsejó que ___. (descansar)", "descansara", "«Aconsejar que» (influencia) exige subjuntivo; con verbo en pasado, imperfecto: «descansara»."),
      fb("Elige el modo.", "«Sí, fui yo» → Admitió que ___ sido él.", "había", "«Admitir que» presenta algo como cierto y rige indicativo: «había sido él»."),
      fb("Elige el modo.", "«Siempre llegas tarde» → Me reprochó que siempre ___ tarde. (llegar)", "llegara", "«Reprochar que» valora un hecho y lleva subjuntivo: «que siempre llegara tarde»."),
      mt(
        "Relaciona la cita con el verbo introductor que mejor la resume.",
        [
          ["«Te juro que volveré»", "prometer"],
          ["«¿Y si vamos en tren?»", "sugerir"],
          ["«Cuidado, el suelo resbala»", "advertir"],
          ["«Yo no he tocado nada»", "negar"],
        ],
        "El verbo introductor interpreta el acto de habla."
      ),
      mc(
        "«—¿Y si cenamos fuera?» → Propuso que ___ fuera.",
        ["cenáramos", "cenábamos", "cenaremos", "cenamos"],
        0,
        "«Proponer que» (influencia) exige subjuntivo; con verbo en pasado, imperfecto: «que cenáramos». «Cenábamos», «cenaremos» y «cenamos» son indicativo."
      ),
      toEs("He promised he would pay me back.", "Prometió que me devolvería el dinero.", "«Prometer» + condicional reproduce un compromiso futuro desde el pasado: «devolvería».", ["Me prometió que me devolvería el dinero.", "Prometió devolverme el dinero."]),
      wo("La profesora nos exigió que entregáramos el trabajo el lunes.", "Exigir que + subjuntivo.", "The teacher demanded that we hand in the paper on Monday."),
    ]
  ),
  L(
    "ser-estar-haber-casos-limite-drill-3",
    "c1r-extra-ser-estar-adjective-meaning",
    "Práctica extra: adjetivos que cambian con ser y estar",
    "Ser listo / estar listo, ser rico / estar rico, ser verde / estar verde: diez pares en ronda rápida.",
    "7 min",
    [
      sec(
        "Pares de significado distinto",
        "Listo: ser (inteligente) / estar (preparado). Rico: ser (con dinero) / estar (sabroso). Verde: ser (color) / estar (inmaduro, poco preparado). Despierto: ser (espabilado) / estar (no dormido). Malo: ser (malvado, de mala calidad) / estar (enfermo, en mal estado). Orgulloso: ser (soberbio) / estar (satisfecho de algo). Negro: ser (color) / estar (harto, furioso).",
        [
          ["Estoy orgullosa de ti.", "I'm proud of you."],
          ["Este chico es muy despierto para su edad.", "This boy is very sharp for his age."],
        ],
        [
          mc(
            "«Todavía ___ muy verde en contabilidad.»",
            ["está", "es", "hay", "estará siendo"],
            0,
            "«Estar verde» significa ser inexperto o estar poco preparado: «está muy verde en contabilidad». «Ser verde» se refiere al color (o a lo obsceno: «un chiste verde»), «hay» no es copulativo y «estará siendo» es forzado."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Ese hombre ___ muy orgulloso: nunca pide ayuda.", "es", "«Ser orgulloso» es un rasgo de carácter (soberbio); «estar orgulloso de» es sentir satisfacción."),
      fb("Completa.", "Me tienes negra con tus retrasos: ya ___ negra.", "estoy", "«Estar negro» es estar harto o muy enfadado (coloquial); «ser negro» se refiere al color."),
      fb("Completa.", "¿___ despierto? Te oigo moverte. (tú)", "Estás", "«Estar despierto» significa no estar dormido; «ser despierto» es ser listo, espabilado."),
      fb("Completa.", "No te comas ese yogur, ___ malo.", "está", "Estar malo = en mal estado."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Es muy vivo.", "Es espabilado."],
          ["Está vivo.", "No ha muerto."],
          ["Es atento.", "Es amable."],
          ["Está atento.", "Presta atención."],
        ],
        "Ser/estar cambian el sentido."
      ),
      toEs("This soup is delicious.", "Esta sopa está riquísima.", "«Estar rico» significa estar sabroso; «ser rico» es tener mucho dinero.", ["Esta sopa está muy rica.", "Esta sopa está deliciosa.", "Esta sopa está rica."]),
      wo("Estamos muy orgullosos de todo lo que has conseguido.", "Estar orgulloso de.", "We're very proud of everything you've achieved."),
    ]
  ),
  L(
    "ser-estar-haber-casos-limite-drill-3",
    "c1r-extra-haber-vs-estar-location",
    "Práctica extra: hay, está, es — ubicar cosas y eventos",
    "¿Dónde hay una farmacia? ¿Dónde está la farmacia? ¿Dónde es el concierto? Tres verbos para tres tipos de ubicación.",
    "7 min",
    [
      sec(
        "Existencia, ubicación, evento",
        "Haber (hay): existencia de algo no identificado (un, una, algunos, sin artículo, números). Estar: ubicación de algo identificado (el, la, mi, este, nombre propio). Ser: lugar o momento de un evento («La fiesta es en mi casa», «La boda fue en mayo»). Haber impersonal no concuerda: ✗ «Habían muchas personas» → ✓ «Había muchas personas».",
        [
          ["¿Hay un cajero por aquí? / ¿Dónde está el cajero?", "Is there an ATM around here? / Where is the ATM?"],
          ["El examen es en el aula 5.", "The exam is in room 5."],
        ],
        [
          mc(
            "«¿Dónde ___ la reunión de mañana?»",
            ["es", "está", "hay", "hace"],
            0,
            "Un evento («la reunión») se localiza con «ser»: «¿Dónde es?». «Está» se usa para objetos y personas, «hay» para presentar algo indeterminado («¿hay reunión?») y «hace» no tiene sentido aquí."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En la fiesta ___ más de cien invitados. (haber, imperfecto)", "había", "«Haber» impersonal va siempre en singular, también con complemento plural: «había»."),
      fb("Completa.", "Tus gafas ___ en la mesilla.", "están", "Un objeto identificado («tus gafas») se localiza con «estar»."),
      fb("Completa.", "La boda ___ en una ermita junto al mar. (pretérito)", "fue", "Un evento («la boda») se localiza con «ser»: «fue en una ermita»."),
      fb("Completa.", "¿___ algún restaurante vegetariano en este barrio?", "Hay", "Para preguntar por la existencia de algo no identificado se usa «hay»."),
      ms(
        "¿Qué frases son correctas?",
        ["Hubo varios accidentes ayer.", "Hubieron varios accidentes ayer.", "El accidente fue en la autopista.", "El accidente estuvo en la autopista."],
        [0, 2],
        "«Haber» impersonal va en singular («Hubo varios accidentes») y los eventos se localizan con «ser» («El accidente fue en la autopista»). «Hubieron» concuerda por error con el complemento y «estuvo» trata el accidente como un objeto."
      ),
      toEs("There were a lot of people at the concert.", "Había mucha gente en el concierto.", "«Haber» impersonal en singular: «había mucha gente» (o «hubo» para el evento cerrado).", ["Hubo mucha gente en el concierto.", "En el concierto había mucha gente."]),
      wo("La conferencia es en el salón de actos del segundo piso.", "Evento → ser.", "The lecture is in the auditorium on the second floor."),
    ]
  ),
  L(
    "ser-estar-haber-casos-limite-drill-3",
    "c1r-extra-ser-estar-passive-result",
    "Práctica extra: ser y estar + participio",
    "«La puerta fue cerrada» (acción) frente a «La puerta estaba cerrada» (estado resultante): lee el matiz y elige.",
    "7 min",
    [
      sec(
        "Acción frente a resultado",
        "Ser + participio = pasiva de acción: «El puente fue construido en 1920». Estar + participio = estado resultante: «El puente está construido en piedra»; «Las tiendas están cerradas los domingos». Truco: si puedes añadir «por + agente», suele ser ser.",
        [
          ["La carta fue escrita por el propio rey.", "The letter was written by the king himself."],
          ["La carta está escrita a mano.", "The letter is handwritten."],
        ],
        [
          mc(
            "«Cuando llegamos, la tienda ya ___ cerrada.»",
            ["estaba", "fue", "era", "había"],
            0,
            "Un estado resultante se expresa con «estar» + participio: «ya estaba cerrada». «Fue cerrada» narraría la acción de cerrarla, «era cerrada» sería una característica y «había cerrada» es agramatical."
          ),
        ]
      ),
    ],
    [
      fb("Completa (acción).", "El ladrón ___ detenido por dos agentes. (pretérito)", "fue", "Una acción con agente («por dos agentes») es pasiva con «ser»: «fue detenido»."),
      fb("Completa (estado).", "El problema ya ___ resuelto; no te preocupes.", "está", "El estado resultante de resolverse va con «estar»: «ya está resuelto»."),
      fb("Completa (acción).", "La ley ___ aprobada ayer por el Parlamento.", "fue", "Una acción puntual con agente («por el Parlamento») usa pasiva con «ser»: «fue aprobada»."),
      fb("Completa (estado).", "Todo el texto ___ escrito en latín.", "está", "«Estar escrito en» describe una característica resultante del texto."),
      mc(
        "¿Qué frase describe una acción, no un estado?",
        ["El edificio fue demolido en 2015.", "El edificio está demolido.", "El edificio estaba en ruinas.", "El edificio está vacío."],
        0,
        "«Fue demolido en 2015» narra una acción puntual con «ser» + participio. «Está demolido», «estaba en ruinas» y «está vacío» describen estados."
      ),
      toEs("The windows were broken when we arrived.", "Las ventanas estaban rotas cuando llegamos.", "El estado de las ventanas al llegar se describe con «estar» + participio: «estaban rotas».", ["Cuando llegamos, las ventanas estaban rotas."]),
      wo("El acusado fue declarado inocente por el jurado.", "Pasiva de acción con agente.", "The defendant was found not guilty by the jury."),
    ]
  ),
  L(
    "verbos-preposicionales-drill-3",
    "c1r-extra-prep-verbs-relative",
    "Práctica extra: verbo preposicional + relativo",
    "La preposición del verbo viaja al relativo: «la persona con la que sueño», «el tema del que te hablé».",
    "7 min",
    [
      sec(
        "La preposición va delante del relativo",
        "Soñar con → la casa con la que sueño. Hablar de → el libro del que te hablé. Confiar en → la gente en quien confío. Contar con → el apoyo con el que contamos. Error típico: ✗ «el libro que te hablé» (se pierde la preposición).",
        [
          ["Es el proyecto del que más me enorgullezco.", "It's the project I'm proudest of."],
          ["No es alguien en quien se pueda confiar.", "He isn't someone you can trust."],
        ],
        [
          mc(
            "«Es la chica ___ me enamoré.»",
            ["de la que", "que", "con que", "a la que"],
            0,
            "El relativo conserva la preposición del verbo: «enamorarse de» → «de la que». «Que» solo la pierde, «con que» usa la preposición equivocada y «a la que» tampoco corresponde."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Esa es la ciudad ___ la que siempre he soñado.", "con", "El relativo conserva la preposición del verbo: «soñar con» → «con la que»."),
      fb("Completa.", "Es un tema ___ el que no me gusta hablar.", "del", "Hablar de + el que → del que."),
      fb("Completa.", "Son los recursos ___ los que contamos.", "con", "«Contar con» → «con los que»: la preposición del verbo va delante del relativo."),
      fb("Completa.", "Es el error ___ el que más me arrepiento.", "del", "«Arrepentirse de» → «del que» (de + el que)."),
      mc(
        "Corrige: «Es el amigo que te hablé.»",
        ["Es el amigo del que te hablé.", "Es el amigo que te hablé de.", "Es el amigo quien te hablé.", "Es el amigo cual te hablé."],
        0,
        "Se dice «hablar de alguien», así que el relativo lleva «de»: «del que te hablé». «Que te hablé de» deja la preposición al final como en inglés, «quien» sin preposición no sirve y «cual» necesita artículo."
      ),
      toEs("That's the job I applied for.", "Ese es el puesto al que me presenté.", "«Presentarse a» un puesto → «al que me presenté».", ["Ese es el trabajo al que me presenté.", "Ese es el puesto que solicité."]),
      wo("No encuentro las notas en las que apunté su dirección.", "Apuntar en + relativo.", "I can't find the notes I wrote her address in."),
    ]
  ),
  L(
    "verbos-preposicionales-drill-3",
    "c1r-extra-prep-verbs-pronominal",
    "Práctica extra: verbos pronominales con preposición",
    "Acordarse de, fijarse en, burlarse de, negarse a, empeñarse en: el pronombre y la preposición van juntos.",
    "7 min",
    [
      sec(
        "Pronombre + preposición obligatorios",
        "Recordar algo / acordarse de algo. Olvidar algo / olvidarse de algo. Negar algo / negarse a hacer algo. Empeñarse en (insistir con obstinación). Burlarse de. Quejarse de. Atreverse a. Fiarse de. Error típico: ✗ «Me recuerdo de ti» → ✓ «Me acuerdo de ti» / «Te recuerdo».",
        [
          ["Se empeñó en pagar él.", "He insisted on paying."],
          ["No me fío de ese vendedor.", "I don't trust that salesman."],
        ],
        [
          mc(
            "¿Cuál es correcta?",
            ["Me acuerdo de aquel verano.", "Me recuerdo de aquel verano.", "Recuerdo de aquel verano.", "Me acuerdo aquel verano."],
            0,
            "Se dice «acordarse de» (pronominal) o «recordar» (sin «de»): «Me acuerdo de aquel verano». «Me recuerdo de» mezcla ambos verbos, «Recuerdo de» añade una preposición que sobra y «Me acuerdo aquel verano» la omite."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se negó ___ firmar el acuerdo.", "a", "«Negarse» rige «a» + infinitivo: «se negó a firmar»."),
      fb("Completa.", "No te burles ___ él; lo está pasando mal.", "de", "«Burlarse» rige «de»: «burlarse de alguien»."),
      fb("Completa.", "Se ha empeñado ___ estudiar medicina.", "en", "«Empeñarse» rige «en» + infinitivo: «se ha empeñado en estudiar»."),
      fb("Completa.", "No me atrevo ___ decírselo.", "a", "«Atreverse» rige «a» + infinitivo: «no me atrevo a decírselo»."),
      mt(
        "Relaciona el verbo pronominal con su preposición.",
        [
          ["fiarse", "de"],
          ["fijarse", "en"],
          ["atreverse", "a"],
          ["conformarse", "con"],
        ],
        "Régimen de pronominales."
      ),
      toEs("I forgot to buy bread.", "Se me olvidó comprar pan.", "«Se me olvidó» presenta el olvido como involuntario; también vale «me olvidé de».", ["Me olvidé de comprar pan.", "Olvidé comprar pan."]),
      wo("Nunca se queja de nada aunque trabaja muchísimo.", "Quejarse de.", "She never complains about anything even though she works a lot."),
    ]
  ),
  L(
    "verbos-preposicionales-drill-3",
    "c1r-extra-prep-verbs-cloze",
    "Práctica extra: texto con huecos de régimen",
    "Una carta personal llena de verbos preposicionales: rellena cada hueco con la preposición exigida.",
    "8 min",
    [
      sec(
        "La carta de Irene",
        "«Querida Ana: Por fin me he decidido a escribirte. Desde que me mudé, pienso mucho en ti y me acuerdo de nuestras tardes en el parque. Aquí me he acostumbrado a casi todo, aunque todavía no me atrevo a conducir. Mi jefe confía en mí y cuento con un buen equipo. Sueño con que vengas a verme. Un abrazo, Irene.»",
        [
          ["Me he decidido a escribirte.", "I've made up my mind to write to you."],
          ["Sueño con que vengas a verme.", "I dream of you coming to see me."],
        ],
        [
          mc(
            "Según la carta, ¿qué no hace todavía Irene?",
            ["conducir", "trabajar", "escribir", "ir al parque"],
            0,
            "La carta dice «Todavía no me atrevo a conducir». Irene sí trabaja, escribe y va al parque."
          ),
        ]
      ),
    ],
    [
      fb("Completa como en la carta.", "Pienso mucho ___ ti.", "en", "«Pensar en» alguien es tenerlo en la mente: «pienso en ti»."),
      fb("Completa.", "Mi jefe confía ___ mí.", "en", "«Confiar» rige «en»: «confía en mí»."),
      fb("Completa.", "Me he acostumbrado ___ madrugar.", "a", "«Acostumbrarse» rige «a»: «me he acostumbrado a madrugar»."),
      fb("Completa.", "Sueño ___ volver a veros.", "con", "«Soñar» rige «con»: «sueño con volver»."),
      mc(
        "«Sueño con que vengas» lleva subjuntivo porque…",
        ["expresa un deseo", "es una pregunta", "es un hecho pasado", "el sujeto es el mismo"],
        0,
        "«Soñar con que» expresa un deseo sobre otra persona, y deseo con sujetos distintos exige subjuntivo. No es una pregunta ni un hecho pasado, y los sujetos son distintos (yo sueño / tú vienes)."
      ),
      toEs("I've finally decided to write to you.", "Por fin me he decidido a escribirte.", "«Decidirse a» + infinitivo expresa la resolución tras dudar: «me he decidido a escribirte».", ["Por fin me decidí a escribirte.", "Por fin he decidido escribirte."]),
      wo("Cuento con vosotros para la mudanza del sábado.", "Contar con.", "I'm counting on you for the move on Saturday."),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-extra-voseo-imperative-clitics",
    "Práctica extra: imperativos voseantes con pronombres",
    "Decime, dámelo, sentate, andate, contámelo: la tilde aparece y desaparece según los pronombres.",
    "7 min",
    [
      sec(
        "Regla de tildes",
        "Imperativo simple (aguda en vocal): vení, contá, decí. + un pronombre (llana en vocal): decime, contame, sentate (sin tilde). + dos pronombres (esdrújula): contámelo, decímelo, dámelo (con tilde). Irregular útil: ir → andá / andate.",
        [
          ["Contame qué pasó.", "Tell me what happened."],
          ["Decímelo en la cara.", "Say it to my face."],
        ],
        [
          mc(
            "«Contar» + me + lo (vos):",
            ["contámelo", "contamelo", "cóntamelo", "contamélo"],
            0,
            "«Contá» + «me» + «lo» da una palabra esdrújula («con-tá-me-lo»), que lleva tilde: «contámelo». «Contamelo» la pierde, «cóntamelo» la pone en la sílaba equivocada y «contamélo» también."
          ),
        ]
      ),
    ],
    [
      fb("Forma el imperativo.", "Vení y ___ a mi lado. (sentarse, vos)", "sentate", "«Sentá» + «te» da una palabra llana terminada en vocal: «sentate», sin tilde."),
      fb("Forma el imperativo.", "Si tenés el libro, ___. (prestar + me + lo, vos)", "prestámelo", "Con dos pronombres, la palabra es esdrújula y lleva tilde: «prestámelo»."),
      fb("Forma el imperativo.", "___ de acá ya mismo. (irse, vos)", "Andate", "Ir → andá; irse → andate."),
      mt(
        "Relaciona tú y vos.",
        [
          ["dime", "decime"],
          ["cállate", "callate"],
          ["dámelo", "dámelo"],
          ["ven", "vení"],
        ],
        "Imperativos voseantes."
      ),
      ms(
        "¿Qué formas están bien acentuadas?",
        ["pasame", "pasámelo", "pasáme", "pasamelo"],
        [0, 1],
        "Con un pronombre la forma voseante es llana y no lleva tilde («pasame»); con dos es esdrújula y la lleva («pasámelo»). Por eso «pasáme» sobra la tilde y «pasamelo» le falta."
      ),
      toEs("Tell me the truth. (vos)", "Decime la verdad.", "Imperativo de vos «decí» + «me» = «decime» (llana, sin tilde).", ["Decime la verdad, por favor."]),
      wo("Tomate tu tiempo y contámelo con calma.", "Imperativos con pronombres.", "Take your time and tell me calmly."),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-extra-voseo-listening-script",
    "Práctica extra: guion de un audio de WhatsApp",
    "Lee la transcripción de un audio rioplatense y responde: voseo, léxico y marcadores en contexto real.",
    "7 min",
    [
      sec(
        "El audio de Martina",
        "«Hola, Juli, ¿cómo andás? Mirá, te cuento: al final no puedo ir al asado del sábado porque tengo que laburar. Re mal, ya sé. Pero ¿vos por qué no venís a casa el domingo? Hago unas pastas y charlamos tranqui. Avisame, ¿dale? Besito.»",
        [
          ["¿Cómo andás?", "How are you doing?"],
          ["Tengo que laburar.", "I have to work."],
        ],
        [
          mc(
            "¿Por qué no va Martina al asado?",
            ["Tiene que trabajar.", "Está enferma.", "No le gusta la carne.", "No la invitaron."],
            0,
            "Martina no va porque tiene que trabajar: «laburar» es trabajar en el Río de la Plata. No dice que esté enferma, que no le guste la carne ni que no la hayan invitado."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué propone Martina?",
        ["Que Juli vaya a su casa el domingo.", "Cancelar el asado.", "Ir juntas al asado.", "Salir a cenar el sábado."],
        0,
        "Martina propone que Juli vaya a su casa el domingo: «¿Vos por qué no venís a casa el domingo?». No cancela el asado, no van juntas y no habla de cenar el sábado."
      ),
      mc(
        "«Tranqui» significa…",
        ["con calma", "rápido", "en silencio", "temprano"],
        0,
        "«Tranqui» es la apócope coloquial de «tranquilo» o «tranquilamente»: con calma. No significa rápido, en silencio ni temprano."
      ),
      fb("Completa como en el audio.", "Mirá, te ___: al final no puedo ir. (contar, yo)", "cuento", "El presente de «contar» con yo diptonga («cuento»); el voseo solo afecta a la forma de vos."),
      fb("Completa como en el audio.", "¿Vos por qué no ___ a casa? (venir)", "venís", "Presente de vos de «venir», sin diptongo: «venís»."),
      ms(
        "¿Qué palabras son rioplatenses coloquiales?",
        ["laburar", "re", "dale", "vale"],
        [0, 1, 2],
        "«Laburar» (trabajar), «re» (muy) y «dale» (de acuerdo) son coloquiales rioplatenses. «Vale» es típico de España."
      ),
      toEs("Let me know, okay? (vos)", "Avisame, ¿dale?", "Imperativo de vos «avisá» + «me» = «avisame» (sin tilde), y «¿dale?» pide confirmación.", ["Avisame, ¿sí?", "Avisame, ¿de acuerdo?"]),
      wo("¿Por qué no venís el domingo y charlamos tranqui?", "Propuesta rioplatense.", "Why don't you come on Sunday and we'll chat in peace?"),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-extra-voseo-full-conjugation",
    "Práctica extra: el voseo en todos los tiempos",
    "Presente, pretérito, futuro, condicional, subjuntivo e imperativo: dónde cambia el voseo y dónde no.",
    "7 min",
    [
      sec(
        "Mapa del voseo rioplatense",
        "Cambian: presente de indicativo (tenés, sos, vas) e imperativo afirmativo (tené, sé, andá). No cambian (iguales que tú): pretérito indefinido (tuviste), imperfecto (tenías), futuro (tendrás), condicional (tendrías), imperfecto de subjuntivo (tuvieras). Presente de subjuntivo: en la norma culta, igual que tú (tengas).",
        [
          ["¿Vos vendrías conmigo?", "Would you come with me?"],
          ["¿Adónde fuiste ayer?", "Where did you go yesterday?"],
        ],
        [
          mc(
            "Futuro con vos de «poder»:",
            ["podrás", "podrés", "podés", "pudás"],
            0,
            "El futuro no cambia con vos: «podrás», igual que con tú. «Podrés» no existe, «podés» es el presente y «pudás» es un subjuntivo voseante coloquial."
          ),
        ]
      ),
    ],
    [
      fb("Presente (cambia).", "¿Vos ___ ir mañana? (poder)", "podés", "En presente, el voseo tiene forma propia sin diptongo: «podés»."),
      fb("Imperfecto (no cambia).", "Cuando eras chico, ¿vos ___ en Rosario? (vivir)", "vivías", "El imperfecto de vos coincide con el de tú: «vivías»."),
      fb("Condicional (no cambia).", "¿Vos qué ___ en mi lugar? (hacer)", "harías", "El condicional de vos coincide con el de tú: «harías»."),
      fb("Imperativo (cambia).", "___ paciencia, ya casi terminamos. (tener, vos)", "Tené", "El imperativo afirmativo de vos quita la -r y lleva tilde: «tené»."),
      ms(
        "¿Qué tiempos tienen forma propia en el voseo rioplatense culto?",
        ["presente de indicativo", "imperativo afirmativo", "futuro", "pretérito indefinido"],
        [0, 1],
        "En el voseo rioplatense culto, solo el presente de indicativo («tenés») y el imperativo afirmativo («tené») tienen forma propia. El futuro («tendrás») y el indefinido («tuviste») coinciden con tú."
      ),
      toEs("What would you do if you won the lottery? (vos)", "¿Qué harías si ganaras la lotería?", "Condicional e imperfecto de subjuntivo iguales que tú.", ["¿Vos qué harías si ganaras la lotería?", "¿Qué harías si ganaras la lotería vos?"]),
      wo("Si vos querés, mañana te paso a buscar temprano.", "Presente voseante.", "If you want, I'll pick you up early tomorrow."),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-big-error-hunt",
    "Desafío C1: la gran caza de errores",
    "Empieza el desafío final del C1: cada frase esconde un error de un tema distinto del nivel.",
    "8 min",
    [
      sec(
        "Cómo funciona el desafío",
        "Las trece lecciones del Desafío C1 mezclan todos los temas del nivel: subjuntivo avanzado, concesivas, nominalización, gerundio, pasiva, estilo indirecto, ser/estar/haber, régimen preposicional, conectores, énfasis, conjetura, registro, voseo y escritura formal. Aquí, cada frase tiene un error: localízalo y corrígelo.",
        [
          ["✗ Habían muchos problemas. → ✓ Había muchos problemas.", "There were many problems."],
          ["✗ Depende en ti. → ✓ Depende de ti.", "It depends on you."],
        ],
        [
          mc(
            "¿Dónde está el error? «Aunque mañana llueve, iremos de excursión.» (hecho no confirmado)",
            ["llueve → llueva", "iremos → vayamos", "Aunque → Porque", "No hay error"],
            0,
            "Si el hecho no está confirmado (una previsión para mañana), «aunque» va con subjuntivo: «aunque mañana llueva». «Iremos» es correcto en la principal, «Porque» cambiaría el sentido y sí hay error."
          ),
        ]
      ),
    ],
    [
      fb("Corrige (gerundio).", "Envió una carta que ___ su dimisión. (el alumno puso: carta anunciando)", "anunciaba", "El gerundio no puede especificar un sustantivo («carta anunciando»); se usa una relativa: «que anunciaba»."),
      fb("Corrige (régimen).", "Se enamoró ___ su vecina. (el alumno puso: con)", "de", "«Enamorarse» rige «de», no «con»: «se enamoró de su vecina»."),
      fb("Corrige (hendida).", "Fue en Quito ___ nos conocimos. (el alumno puso: que)", "donde", "En la hendida de lugar, la norma culta prefiere «donde»: «Fue en Quito donde…»."),
      fb("Corrige (estilo indirecto).", "Me pidió que la ___ al día siguiente. (el alumno puso: llamo)", "llamara", "Pedir que + imperfecto de subjuntivo."),
      fb("Corrige (voseo).", "Vos ___ razón, che. (el alumno puso: tienes)", "tenés", "En el voseo rioplatense, el presente de «tener» es «tenés»; «tienes» es la forma de tú."),
      mc(
        "¿Dónde está el error? «Lo que me preocupan son las fechas.»",
        ["preocupan → preocupa", "Lo → Los", "son → es", "las → los"],
        0,
        "«Lo que» es neutro y singular, así que el verbo de la relativa va en singular: «lo que me preocupa». «Lo» no cambia, «son» concuerda correctamente con «las fechas» y «las» es correcto."
      ),
      mc(
        "¿Dónde está el error? «Se vendió todos los pisos en una semana.»",
        ["vendió → vendieron", "Se → Le", "todos → todo", "en → por"],
        0,
        "En la pasiva refleja el verbo concuerda con el sujeto plural «todos los pisos»: «se vendieron». «Le» no funciona aquí, «todo» rompe la concordancia y «en una semana» es correcto."
      ),
      ms(
        "¿Qué frases están bien?",
        ["Le agradecería que me respondiera pronto.", "Me acuerdo de aquel viaje.", "Siendo las diez, salimos.", "Pienso de que tienes razón."],
        [0, 1, 2],
        "«Pienso de que» es dequeísmo: se dice «pienso que». Las demás son correctas: «agradecería que» + imperfecto de subjuntivo, «acordarse de» y el gerundio temporal «Siendo las diez»."
      ),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-register-marathon",
    "Desafío C1: maratón de registros",
    "Una misma idea, cuatro destinatarios: un amigo, una jefa, un público general y un lector académico.",
    "8 min",
    [
      sec(
        "Ajustar el tono sin cambiar el contenido",
        "Idea: el proyecto se retrasa porque faltan fondos. Amigo: «Lo del proyecto va para largo, no hay pasta». Jefa: «Lamento comunicarle que el proyecto sufrirá un retraso por falta de financiación». Público general: «El proyecto se retrasará por falta de fondos». Académico: «La insuficiencia de financiación podría explicar el retraso del proyecto».",
        [
          ["No hay pasta. → Faltan fondos.", "There's no cash. → Funds are lacking."],
          ["Va para largo. → Sufrirá un retraso.", "It's going to take a while. → It will be delayed."],
        ],
        [
          mc(
            "¿Qué versión es académica?",
            ["La insuficiencia de financiación podría explicar el retraso.", "No hay pasta, así que va para largo.", "Lamento comunicarle el retraso.", "El proyecto se retrasa, ¿viste?"],
            0,
            "La nominalización («la insuficiencia de financiación») y la atenuación («podría explicar») son registro académico. «No hay pasta» es coloquial, «Lamento comunicarle» es propio de una carta formal y «¿viste?» es coloquial rioplatense."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada versión con su destinatario.",
        [
          ["Va para largo, tío.", "un amigo"],
          ["Lamento informarle del retraso.", "la jefa"],
          ["El retraso podría deberse a varios factores.", "un lector académico"],
        ],
        "Registro según destinatario."
      ),
      fb("Registro formal.", "Lamento ___ que la entrega se retrasará. (comunicar + le)", "comunicarle", "«Lamento comunicarle que» es la fórmula formal para dar una mala noticia; «le» (usted) va unido al infinitivo."),
      fb("Registro académico.", "La ___ de fondos explicaría el retraso. (faltar, sustantivo)", "falta", "La nominalización de «faltar» es «la falta», propia del registro académico."),
      fb("Registro coloquial (España).", "No tenemos ni un duro, o ___, estamos sin dinero.", "sea", "«O sea» reformula en registro coloquial: «no tenemos ni un duro» = estamos sin dinero."),
      mc(
        "¿Qué frase mezcla registros de forma inadecuada?",
        ["Estimada directora: el proyecto va fatal, tía.", "Estimada directora: el proyecto presenta dificultades.", "Oye, el proyecto va fatal.", "El proyecto presenta dificultades significativas."],
        0,
        "«Estimada directora: el proyecto va fatal, tía» abre de forma formal y sigue con coloquialismos («fatal», «tía»). Las demás mantienen un registro coherente: formal, coloquial o neutro de principio a fin."
      ),
      mc(
        "Versión neutra para un comunicado de prensa:",
        ["La inauguración se aplaza hasta nuevo aviso.", "Lo de la inauguración se va al garete.", "Pues nada, sin inauguración.", "Mira, la inauguración, ni de coña."],
        0,
        "«La inauguración se aplaza hasta nuevo aviso» es neutra, propia de un comunicado. «Se va al garete», «Pues nada» y «ni de coña» son coloquiales."
      ),
      toEs("We regret to inform you that the event has been cancelled.", "Lamentamos comunicarle que el evento ha sido cancelado.", "«Lamentamos comunicarle que» es la fórmula formal para una mala noticia.", ["Lamentamos informarle de que el evento ha sido cancelado.", "Lamentamos comunicarles que el evento se ha cancelado.", "Lamentamos informarle que el evento ha sido cancelado."]),
      wo("Todo parece indicar que el retraso se debe a la falta de fondos.", "Atenuación académica.", "Everything seems to indicate the delay is due to a lack of funds."),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-translation-relay",
    "Desafío C1: relevo de traducción",
    "Traduce en las dos direcciones frases que concentran los temas más difíciles del C1.",
    "8 min",
    [
      sec(
        "Pensar en español, no traducir palabra por palabra",
        "Las frases del C1 rara vez se traducen literalmente: «It must have been hard» → «Habrá sido duro» o «Debió de ser duro»; «No matter what they say» → «Digan lo que digan»; «What I need is time» → «Lo que necesito es tiempo»; «I dropped it» → «Se me cayó».",
        [
          ["Digan lo que digan, no me rindo.", "No matter what they say, I'm not giving up."],
          ["Habrá sido difícil para ella.", "It must have been hard for her."],
        ],
        [
          mc(
            "«However much you insist…»",
            ["Por mucho que insistas…", "Por mucho que insistes…", "Aunque mucho insistas…", "Por insistiendo mucho…"],
            0,
            "«Por mucho que» + subjuntivo traduce «however much»: «Por mucho que insistas». «Insistes» presenta el hecho como real y constatado, «Aunque mucho insistas» altera el orden fijo y «Por insistiendo» usa un gerundio tras preposición."
          ),
        ]
      ),
    ],
    [
      toEs("What surprises me is how calm she is.", "Lo que me sorprende es lo tranquila que está.", "Hendida + lo + adj + que.", ["Lo que me sorprende es lo tranquila que es.", "Me sorprende lo tranquila que está."]),
      toEs("I ran out of patience.", "Se me acabó la paciencia.", "El «se» accidental presenta el hecho como involuntario: «se me acabó la paciencia».", ["Se me agotó la paciencia."]),
      toEs("They must have left already.", "Ya se habrán ido.", "El futuro perfecto expresa una conjetura sobre algo ya ocurrido: «ya se habrán ido».", ["Ya se habrán marchado.", "Ya deben de haberse ido.", "Se habrán ido ya."]),
      toEn("Es de eso de lo que quería hablarte.", "That's what I wanted to talk to you about.", "La hendida «es de eso de lo que…» repite la preposición; en inglés la preposición va al final: «talk to you about».", ["That is what I wanted to talk to you about.", "It's that that I wanted to talk to you about."]),
      toEn("Como no llegues a tiempo, nos vamos sin ti.", "If you don't arrive on time, we're leaving without you.", "«Como» + subjuntivo al principio expresa una condición con tono de amenaza: «if you don't…».", ["If you're not on time, we're leaving without you.", "If you don't get here on time, we'll leave without you."]),
      toEn("Por más que lo intento, no me sale.", "However hard I try, I can't do it.", "Por más que + indicativo (hecho real).", ["No matter how hard I try, I can't do it.", "However much I try, I can't get it right."]),
      toEs("It's not that I don't care; I'm exhausted.", "No es que no me importe; es que estoy agotado.", "«No es que» + subjuntivo niega la razón aparente; «es que» da la verdadera.", ["No es que no me importe, es que estoy agotado.", "No es que no me importe; estoy agotada."]),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-subjunctive-no-net",
    "Desafío C1: el subjuntivo sin red",
    "Diez decisiones sin pistas: indicativo, subjuntivo o infinitivo, en los contextos más finos del C1.",
    "8 min",
    [
      sec(
        "Criterios finales",
        "Información nueva vs. conocida (aunque). Real vs. virtual (antecedentes). Mismo sujeto → infinitivo («Quiero ir»). Emoción, valoración, voluntad → subjuntivo. Verbos de percepción/opinión afirmados → indicativo; negados → subjuntivo («No creo que venga»). Temporales con futuro → subjuntivo.",
        [
          ["No creo que sea tan grave.", "I don't think it's that serious."],
          ["Creo que es grave.", "I think it's serious."],
        ],
        [
          mc(
            "«No me parece que ___ la mejor opción.»",
            ["sea", "es", "será", "ser"],
            0,
            "Una opinión negada («no me parece que») lleva subjuntivo: «sea». «Es» y «será» son indicativo, correctos solo en la afirmación («me parece que es»), y «ser» no puede ir tras «que»."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Me alegro de ___ aquí contigo. (estar, yo)", "estar", "Con el mismo sujeto (yo me alegro / yo estoy) se usa infinitivo: «me alegro de estar»."),
      fb("Elige.", "Me alegro de que ___ aquí conmigo. (estar, tú)", "estés", "Emoción + sujetos distintos (yo me alegro / tú estás) = «que» + subjuntivo: «estés»."),
      fb("Elige.", "Está claro que nos ___ mentido. (haber, ellos)", "han", "«Está claro que» expresa certeza y rige indicativo: «han mentido»."),
      fb("Elige.", "No está claro que nos ___ mentido. (haber, ellos)", "hayan", "Al negar la certeza («no está claro que»), se usa subjuntivo: «hayan mentido»."),
      fb("Elige.", "Conozco a alguien que ___ tres idiomas. (hablar)", "habla", "Con un antecedente real y conocido («conozco a alguien»), la relativa va en indicativo: «habla»."),
      fb("Elige.", "¿Conoces a alguien que ___ japonés? (hablar)", "hable", "Con un antecedente desconocido o hipotético (se pregunta si existe), la relativa va en subjuntivo: «hable»."),
      mc(
        "«Cuando ___ jubilado, viajaré por Asia.»",
        ["esté", "estoy", "estaré", "estaría"],
        0,
        "«Cuando» con valor futuro exige presente de subjuntivo: «Cuando esté jubilado». «Estoy» sería habitual o presente, «estaré» (futuro) no va tras «cuando» temporal y «estaría» no concuerda con «viajaré»."
      ),
      mc(
        "«Ojalá me lo ___ antes; ahora ya es tarde.»",
        ["hubieras dicho", "has dicho", "dijeras", "dirás"],
        0,
        "Un deseo imposible sobre el pasado se expresa con «ojalá» + pluscuamperfecto de subjuntivo: «hubieras dicho». «Has dicho» es indicativo, «dijeras» se refiere al presente o futuro y «dirás» es futuro."
      ),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-connector-chain",
    "Desafío C1: conectores en cadena",
    "Un texto argumentativo con los conectores borrados: restitúyelos respetando la lógica.",
    "8 min",
    [
      sec(
        "El texto",
        "«El turismo aporta riqueza a las ciudades. [1] genera empleo y dinamiza el comercio. [2], su crecimiento descontrolado encarece la vivienda. [3], muchos vecinos abandonan el centro. [4] es necesario regularlo; [5], sin demonizar una actividad de la que viven miles de familias.»",
        [
          ["[1] Asimismo / Además", "Adición."],
          ["[2] No obstante / Sin embargo", "Contraste."],
        ],
        [
          mc(
            "[3] introduce una consecuencia:",
            ["Como consecuencia", "Sin embargo", "Es decir", "En cambio"],
            0,
            "«Como consecuencia» introduce una consecuencia. «Sin embargo» y «en cambio» expresan contraste, y «es decir» reformula."
          ),
        ]
      ),
    ],
    [
      mc(
        "[4] introduce la conclusión:",
        ["Por todo ello,", "Aun así,", "Por ejemplo,", "En cambio,"],
        0,
        "«Por todo ello» introduce la conclusión a partir de lo dicho. «Aun así» contrasta, «Por ejemplo» ilustra y «En cambio» opone."
      ),
      mc(
        "[5] añade una restricción:",
        ["ahora bien", "por consiguiente", "en primer lugar", "así pues"],
        0,
        "«Ahora bien» introduce una restricción u objeción. «Por consiguiente» y «así pues» introducen consecuencias, y «en primer lugar» ordena."
      ),
      fb("Completa con un conector de reformulación.", "El turismo es estacional; es ___, se concentra en verano.", "decir", "«Es decir» reformula o aclara lo anterior."),
      fb("Completa con un conector de ejemplificación.", "Algunas ciudades, ___ ejemplo Ámsterdam, ya lo han regulado.", "por", "«Por ejemplo» introduce un caso concreto que ilustra lo dicho."),
      mt(
        "Relaciona el conector con su función.",
        [
          ["no obstante", "contraste"],
          ["por consiguiente", "consecuencia"],
          ["asimismo", "adición"],
          ["en definitiva", "conclusión"],
        ],
        "Mapa de conectores."
      ),
      ms(
        "¿Qué conectores expresan contraste?",
        ["sin embargo", "no obstante", "en cambio", "por ende"],
        [0, 1, 2],
        "«Sin embargo», «no obstante» y «en cambio» expresan contraste. «Por ende» expresa consecuencia."
      ),
      wo("No obstante, conviene no generalizar a partir de un solo caso.", "Conector + atenuación.", "Nevertheless, one should not generalize from a single case."),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-build-the-sentence",
    "Desafío C1: construye la frase",
    "Ordena frases largas del C1 con hendidas, subjuntivo, pasiva y régimen preposicional.",
    "8 min",
    [
      sec(
        "Pistas de orden",
        "Busca primero el verbo principal y su régimen; después, la subordinada (que + subjuntivo), y por último los complementos. En las hendidas, ser va antes del elemento destacado y el relativo lo sigue.",
        [
          ["Lo que más me preocupa es que no haya un plan B.", "What worries me most is that there's no plan B."],
        ],
        [
          mc(
            "¿Qué orden es correcto?",
            ["Fue entonces cuando me di cuenta del error.", "Entonces fue cuando del error me di cuenta.", "Cuando fue entonces me di cuenta del error.", "Me di cuenta fue entonces del error cuando."],
            0,
            "La hendida sigue el orden «ser» + elemento destacado + relativo + resto: «Fue entonces cuando me di cuenta del error». Las demás desordenan la estructura o separan «del error» de su verbo."
          ),
        ]
      ),
    ],
    [
      wo("Por mucho que se lo expliques, no va a cambiar de opinión.", "Concesiva + pronombres.", "However much you explain it to him, he won't change his mind."),
      wo("Es a tu hermana a quien deberías pedirle perdón.", "Hendida con preposición.", "It's your sister you should apologize to."),
      wo("El acuerdo fue firmado tras meses de negociación.", "Pasiva + nominalización.", "The agreement was signed after months of negotiation."),
      wo("No sé qué le habrá pasado, pero no contesta.", "Conjetura.", "I don't know what can have happened to him, but he isn't answering."),
      wo("Nos pidió que no le contáramos nada a nadie.", "Estilo indirecto.", "She asked us not to tell anyone anything."),
      wo("Lo que no entiendo es por qué se negó a firmar.", "Hendida + negarse a.", "What I don't understand is why he refused to sign."),
      wo("Andá a descansar, que mañana tenés que madrugar.", "Voseo.", "Go get some rest, you have to get up early tomorrow."),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-express-transformations",
    "Desafío C1: transformaciones exprés",
    "Una instrucción, una frase, una transformación: activa → pasiva, verbo → nombre, directo → indirecto, tú → usted, tú → vos.",
    "8 min",
    [
      sec(
        "Cinco transformaciones",
        "Activa → pasiva refleja. Verbo → nominalización. Estilo directo → indirecto. Tú → usted. Tú → vos. En cada una cambia algo más que una palabra: revisa concordancias, pronombres y tiempos.",
        [
          ["Construyeron el puente en 1900. → El puente fue construido en 1900.", "The bridge was built in 1900."],
          ["«Ven» → Me pidió que fuera.", "She asked me to come."],
        ],
        [
          mc(
            "Pasiva refleja: «Venden pisos.»",
            ["Se venden pisos.", "Se vende pisos.", "Son vendido pisos.", "Se venden a pisos."],
            0,
            "En la pasiva refleja el verbo concuerda con el sujeto plural: «Se venden pisos». «Se vende pisos» no concuerda, «Son vendido» no concuerda el participio y «a pisos» usa la «a» personal con cosas."
          ),
        ]
      ),
    ],
    [
      fb("Nominaliza.", "Cuando llegó el presidente… → Tras la ___ del presidente…", "llegada", "Llegar → la llegada: «tras la llegada del presidente»."),
      fb("Estilo indirecto.", "«No volveré» → Dijo que no ___.", "volvería", "En estilo indirecto con verbo en pasado, el futuro pasa a condicional: «no volvería»."),
      fb("Tú → usted.", "Pasa, siéntate. → Pase, ___.", "siéntese", "Imperativo de usted de «sentarse» (subjuntivo) + «se»: «siéntese»."),
      fb("Tú → vos.", "¿Quieres venir? → ¿___ venir?", "Querés", "Presente de vos de «querer», sin diptongo: «querés»."),
      fb("Activa → pasiva perifrástica.", "El jurado premió la novela. → La novela fue ___ por el jurado.", "premiada", "En la pasiva perifrástica el participio concuerda con el sujeto: «la novela fue premiada»."),
      fb("Neutra → hendida.", "Llegaron tarde por el tráfico. → Fue por el tráfico por lo ___ llegaron tarde.", "que", "En la hendida causal con «por», el relativo lleva la misma preposición: «por lo que»."),
      mc(
        "Probabilidad: «Probablemente estaba dormido.» →",
        ["Estaría dormido.", "Estará dormido.", "Habrá estado dormido mañana.", "Esté dormido."],
        0,
        "Una conjetura sobre el pasado se expresa con condicional: «Estaría dormido». «Estará» conjetura sobre el presente, «habrá estado… mañana» es incoherente y «Esté» no funciona sin un verbo que lo rija."
      ),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-text-detective",
    "Desafío C1: detective de textos",
    "Lee un fragmento narrativo complejo y responde a preguntas de comprensión, estilo y gramática.",
    "9 min",
    [
      sec(
        "El texto",
        "«Clara cerró el portátil. Otra vez aquel correo. ¿Quién se habría creído que era el nuevo director para hablarle así? Por mucho que se esforzara, nunca era suficiente. Fue en ese momento cuando lo decidió: al día siguiente presentaría su dimisión. Lo que más le dolía no era el trato, sino haber tardado tanto en darse cuenta.»",
        [
          ["¿Quién se habría creído que era…?", "Who did he think he was…?"],
          ["Lo que más le dolía no era el trato, sino…", "What hurt her most wasn't the treatment, but…"],
        ],
        [
          mc(
            "¿Qué decide Clara?",
            ["Dimitir al día siguiente.", "Hablar con el director.", "Cambiar de departamento.", "Ignorar el correo."],
            0,
            "Clara decide dimitir: «Al día siguiente presentaría su dimisión». El texto no dice que vaya a hablar con el director, cambiar de departamento o ignorar el correo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Quién se habría creído que era…?» es un ejemplo de…",
        ["estilo indirecto libre", "estilo directo", "pasiva refleja", "voseo"],
        0,
        "La pregunta del personaje sin verbo introductor es estilo indirecto libre. No hay guion (directo), ni pasiva refleja, ni voseo."
      ),
      mc(
        "«Se habría creído» expresa…",
        ["indignación y conjetura sobre el pasado", "una orden", "una condición real", "un hecho seguro"],
        0,
        "El condicional perfecto expresa una conjetura sobre el pasado, aquí con matiz de indignación. No es una orden, ni una condición real, ni un hecho seguro."
      ),
      mc(
        "«Fue en ese momento cuando lo decidió» es una…",
        ["oración hendida", "pasiva refleja", "concesiva", "perífrasis"],
        0,
        "Es una oración hendida: «ser» + elemento destacado («en ese momento») + «cuando». No es pasiva refleja, ni concesiva, ni perífrasis."
      ),
      mc(
        "¿Por qué «esforzara» está en subjuntivo?",
        ["Por mucho que + subjuntivo (concesiva universal)", "Porque es una orden", "Porque es futuro", "Porque hay negación"],
        0,
        "«Por mucho que» es concesiva y lleva subjuntivo; en pasado, imperfecto: «esforzara». No es una orden, no se refiere al futuro y no hay negación que lo exija."
      ),
      fb("Completa según el texto.", "Lo que más le dolía era haber tardado tanto en darse ___.", "cuenta", "La locución es «darse cuenta» (de algo)."),
      ms(
        "¿Qué recursos del C1 aparecen en el texto?",
        ["hendida", "estilo indirecto libre", "concesiva con por mucho que", "voseo"],
        [0, 1, 2],
        "En el texto aparecen una hendida, estilo indirecto libre y una concesiva con «por mucho que». No hay voseo."
      ),
      toEn("Por mucho que se esforzara, nunca era suficiente.", "However hard she tried, it was never enough.", "«Por mucho que» + subjuntivo se traduce por «however hard» o «no matter how hard».", ["No matter how hard she tried, it was never enough.", "However much she tried, it was never enough."]),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-prepositions-no-hints",
    "Desafío C1: preposiciones sin pistas",
    "Por, para, a, de, en, con: ronda final sin explicaciones previas ni verbos entre paréntesis.",
    "8 min",
    [
      sec(
        "Recordatorio mínimo",
        "Por: causa, medio, precio, intercambio, agente de la pasiva, «a través de». Para: finalidad, destinatario, plazo, opinión. Régimen: cada verbo pide la suya (depender de, consistir en, contar con, atreverse a).",
        [
          ["Lo hice por ti. / Lo hice para ti.", "I did it because of you. / I did it for you."],
        ],
        [
          mc(
            "«Lo terminaremos ___ el viernes.» (plazo)",
            ["para", "por", "en", "a"],
            0,
            "«Para» marca un plazo o fecha límite: «para el viernes». «Por el viernes» indicaría una fecha aproximada, «en el viernes» no se usa y «a el viernes» no es posible."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Me cambió el libro ___ un disco.", "por", "«Por» expresa intercambio: cambiar una cosa por otra."),
      fb("Completa.", "___ ser tan joven, habla con mucha madurez.", "Para", "«Para» + infinitivo compara con lo esperable: siendo tan joven, sorprende su madurez."),
      fb("Completa.", "El proyecto consiste ___ reducir el consumo.", "en", "«Consistir» rige «en»: «consiste en reducir»."),
      fb("Completa.", "Todo depende ___ lo que decida el comité.", "de", "«Depender» rige «de»: «depende de lo que decida»."),
      fb("Completa.", "No me atrevo ___ preguntárselo.", "a", "«Atreverse» rige «a» + infinitivo: «no me atrevo a preguntárselo»."),
      fb("Completa.", "El cuadro fue pintado ___ Goya.", "por", "El agente de la pasiva se introduce con «por»: «pintado por Goya»."),
      fb("Completa.", "___ mí, es la mejor opción.", "Para", "«Para mí» introduce la opinión de quien habla (= en mi opinión)."),
      fb("Completa.", "Paseamos ___ el casco antiguo toda la tarde.", "por", "«Por» + lugar expresa movimiento a través de un espacio: «por el casco antiguo»."),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-conjecture-emphasis",
    "Desafío C1: conjetura y énfasis en contexto",
    "Diálogos breves donde tienes que suponer, conceder o destacar con la forma exacta.",
    "8 min",
    [
      sec(
        "Tres herramientas expresivas",
        "Conjetura (futuro/condicional): «Estará en el atasco». Concesión con futuro: «Será listo, pero es un maleducado». Énfasis (hendidas, lo + adj + que, sí que): «Esto sí que no me lo esperaba».",
        [
          ["—No contesta. —Estará conduciendo.", "—He's not answering. —He must be driving."],
          ["Esto sí que es una sorpresa.", "Now this is a surprise."],
        ],
        [
          mc(
            "«—Nadie abre. —___ de vacaciones.»",
            ["Estarán", "Estuvieron", "Estén", "Estarían sido"],
            0,
            "El futuro simple expresa una conjetura sobre el presente: «Estarán de vacaciones». «Estuvieron» afirma un pasado, «Estén» no funciona sin un verbo que lo rija y «Estarían sido» es agramatical."
          ),
        ]
      ),
    ],
    [
      fb("Conjetura.", "—¿Por qué no vino ayer? —___ enfermo. (estar)", "Estaría", "Una conjetura sobre el pasado («ayer») se expresa con condicional: «estaría enfermo»."),
      fb("Conjetura.", "—La cocina huele a quemado. —Se le ___ quemado la cena. (haber)", "habrá", "El futuro perfecto hace una conjetura sobre algo recién ocurrido: «se le habrá quemado»."),
      fb("Concesión.", "___ muy famoso, pero conmigo es un encanto. (ser)", "Será", "El futuro concesivo admite un hecho para contrastarlo: «será muy famoso, pero…»."),
      fb("Énfasis.", "¡No te imaginas lo ___ que estaba la carretera! (peligroso)", "peligrosa", "En «lo + adjetivo + que», el adjetivo concuerda con «la carretera»: «lo peligrosa»."),
      fb("Énfasis.", "Esto ___ que no lo pienso tolerar.", "sí", "«Sí que» + verbo refuerza la afirmación con énfasis."),
      mc(
        "«—¿Lo hizo Marta? —No, ___ Pablo quien lo hizo.»",
        ["fue", "era", "es", "sería"],
        0,
        "En la hendida, «ser» concuerda en tiempo con el verbo de la relativa («hizo», pretérito): «fue Pablo quien…». «Era», «es» y «sería» rompen esa concordancia."
      ),
      toEs("They must have got lost.", "Se habrán perdido.", "El futuro perfecto de conjetura traduce «must have» + participio: «se habrán perdido».", ["Se habrán perdido, seguro.", "Deben de haberse perdido."]),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-final-formal-email",
    "Desafío C1: misión final — el correo formal completo",
    "Redacta, pieza a pieza, un correo formal para solicitar una beca: saludo, motivo, argumentos, petición y cierre.",
    "9 min",
    [
      sec(
        "La tarea",
        "Escribes a la Fundación Lumen para solicitar una beca de investigación. Debes: saludar formalmente, presentar el motivo, justificar tu candidatura con conectores, pedir con cortesía (condicional + subjuntivo), mencionar los documentos adjuntos y cerrar adecuadamente.",
        [
          ["Me dirijo a ustedes para solicitar la beca de investigación Lumen.", "I am writing to apply for the Lumen research grant."],
          ["Les agradecería que tuvieran en cuenta mi candidatura.", "I would be grateful if you would consider my application."],
        ],
        [
          mc(
            "Saludo adecuado:",
            ["Estimados miembros del comité:", "Hola, chicos:", "Querida Fundación,", "¡Buenas!"],
            0,
            "Para un comité, el saludo formal y colectivo es «Estimados miembros del comité:». «Hola, chicos» y «¡Buenas!» son informales, y «Querida Fundación» es demasiado afectivo (y lleva coma en lugar de dos puntos)."
          ),
        ]
      ),
    ],
    [
      fb("Motivo.", "Me ___ a ustedes para solicitar la beca.", "dirijo", "«Dirigirse a» alguien es la fórmula formal de apertura: «me dirijo a ustedes»."),
      fb("Argumento (adición).", "Cuento con experiencia en el sector. ___, he publicado dos artículos.", "Asimismo", "«Asimismo» (= además) añade un argumento en registro formal."),
      fb("Petición.", "Les agradecería que ___ en cuenta mi solicitud. (tener)", "tuvieran", "«Agradecería» (condicional) + «que» exige imperfecto de subjuntivo: «tuvieran»."),
      fb("Documentos.", "Encontrarán ___ mi currículum y dos cartas de recomendación.", "adjuntos", "Concordancia con currículum y cartas (masculino plural)."),
      fb("Cierre.", "Quedo a la ___ de su respuesta.", "espera", "«Quedar a la espera de» es la fórmula fija de cierre para anunciar que se aguarda respuesta."),
      mc(
        "Despedida adecuada:",
        ["Atentamente,", "Besos,", "Chao,", "Nos vemos,"],
        0,
        "«Atentamente» es el cierre formal estándar. «Besos», «Chao» y «Nos vemos» son informales."
      ),
      mc(
        "¿Qué frase NO debería aparecer en este correo?",
        ["Sé que soy el mejor y me la tienen que dar.", "Considero que mi perfil se ajusta a los requisitos.", "Mi investigación podría contribuir al campo.", "Agradezco de antemano su atención."],
        0,
        "«Sé que soy el mejor y me la tienen que dar» es arrogante y coloquial. Las demás («Considero que…», «podría contribuir…», «Agradezco de antemano…») son adecuadas en una solicitud formal."
      ),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-variation-voseo",
    "Desafío C1: variación, tratamiento y voseo",
    "Viaja por el mundo hispano en ocho situaciones: elige palabra, tratamiento y forma verbal.",
    "8 min",
    [
      sec(
        "Recuerda",
        "Léxico regional (carro/coche/auto; celular/móvil). Tratamiento (tú/usted/vos; vosotros/ustedes). Voseo: presente e imperativo propios; resto de tiempos igual que tú.",
        [
          ["¿Vos sabés dónde queda la parada del colectivo?", "Do you know where the bus stop is?"],
          ["¿Vosotros sabéis dónde está la parada del autobús?", "Do you guys know where the bus stop is?"],
        ],
        [
          mc(
            "En Montevideo, a un amigo:",
            ["¿Querés tomar un mate?", "¿Queréis tomar un mate?", "¿Quiere usted tomar un mate?", "¿Quieres tomar un mate, güey?"],
            0,
            "En Montevideo se vosea a un amigo: «¿Querés tomar un mate?». «Queréis» es plural de España, «usted» es demasiado formal con un amigo y «güey» es mexicano."
          ),
        ]
      ),
    ],
    [
      mc(
        "En Madrid, a tres amigos:",
        ["¿Os apetece ir al cine?", "¿Les apetece ir al cine, che?", "¿Te apetecés ir al cine?", "¿Vos querés ir al cine?"],
        0,
        "En España, para varios amigos se usa vosotros: «¿Os apetece…?». «Les… che» mezcla ustedes con un vocativo rioplatense, «Te apetecés» es agramatical y «Vos querés» es singular y rioplatense."
      ),
      mc(
        "En Ciudad de México, a tres amigos:",
        ["¿Quieren ir al cine?", "¿Queréis ir al cine?", "¿Querés ir al cine?", "¿Quieres ir al cine vosotros?"],
        0,
        "En América, el plural de confianza es ustedes: «¿Quieren ir al cine?». «Queréis» es de España, «Querés» es voseo singular y «Quieres… vosotros» mezcla singular y plural."
      ),
      fb("En Buenos Aires.", "Che, ___ acá que te muestro algo. (venir, vos)", "vení", "El imperativo de vos de «venir» es «vení», con tilde."),
      fb("En Bogotá, a un taxista.", "Señor, ¿me ___ en la esquina, por favor? (dejar, usted)", "deja", "Con un taxista en Bogotá se usa usted: «¿me deja…?» (tercera persona)."),
      fb("En Chile, en el mercado.", "Un kilo de ___, por favor. (aguacates)", "paltas", "En Chile, el aguacate se llama «palta»."),
      fb("Voseo, pretérito.", "¿Vos ___ la película ayer? (ver)", "viste", "En el pretérito, la forma de vos coincide con la de tú: «viste»."),
      mc(
        "En Colombia te ofrecen «un tinto». Es…",
        ["un café", "un vino", "un zumo", "un té"],
        0,
        "En Colombia, «un tinto» es un café solo. No es vino, ni zumo, ni té."
      ),
    ]
  ),
  L(
    "el-voseo-drill-3",
    "c1r-challenge-exit-ticket",
    "Desafío C1: examen de salida",
    "La prueba final del nivel: una pregunta de cada gran tema del C1. Si la superas, estás listo para el C2.",
    "10 min",
    [
      sec(
        "Antes de pasar al C2",
        "Este examen recorre el C1 completo. Si fallas una pregunta, vuelve a la lección de práctica extra de ese tema antes de empezar el C2: el C2 da por dominados todos estos contenidos.",
        [
          ["Pase lo que pase, sigue adelante.", "Whatever happens, keep going."],
        ],
        [
          mc(
            "«Aunque ___ mucho dinero, no es feliz.» (hecho conocido)",
            ["tiene", "tenga", "tendría", "tuviera"],
            0,
            "Con indicativo, «aunque» presenta el hecho como real y lo afirma: «Aunque tiene mucho dinero, no es feliz». «Tendría» y «tuviera» lo convertirían en una hipótesis, y «tenga» lo presentaría como algo no confirmado o que se minimiza."
          ),
        ]
      ),
    ],
    [
      mc(
        "Nominalización de «cuando se aprobó el plan»:",
        ["tras la aprobación del plan", "tras aprobando el plan", "tras aprobar el plan fue", "tras aprobado el plan de"],
        0,
        "Aprobar → la aprobación: «tras la aprobación del plan». «Tras aprobando» usa un gerundio tras preposición, y las otras dos dejan fragmentos sin sentido («fue», «de»)."
      ),
      mc(
        "Gerundio correcto:",
        ["Entró en la sala temblando.", "Un paquete conteniendo libros.", "Se casó en 2001, divorciándose en 2005.", "Buscamos empleado hablando inglés."],
        0,
        "El gerundio es correcto cuando es simultáneo: «Entró en la sala temblando». «Un paquete conteniendo» y «empleado hablando inglés» son especificativos (incorrectos), y «divorciándose en 2005» expresa posterioridad."
      ),
      fb("Pasiva refleja.", "Se ___ a los heridos al hospital. (trasladar, pretérito)", "trasladó", "Se + singular + a + persona."),
      fb("Estilo indirecto.", "«Llámame mañana» → Me pidió que lo ___ al día siguiente.", "llamara", "Un imperativo reproducido tras «pidió» (pasado) pasa a imperfecto de subjuntivo: «que lo llamara»."),
      fb("Ser/estar.", "La conferencia ___ en el aula magna.", "es", "Un evento («la conferencia») se localiza con «ser»: «es en el aula magna»."),
      fb("Régimen.", "Nunca se arrepintió ___ aquella decisión.", "de", "«Arrepentirse» rige «de»: «se arrepintió de aquella decisión»."),
      fb("Conjetura.", "No contesta; ___ en una reunión. (estar)", "estará", "El futuro simple expresa una conjetura sobre el presente: «estará en una reunión»."),
      fb("Voseo.", "¿Vos ___ de acá? (ser)", "sos", "El presente de vos de «ser» es «sos»."),
    ]
  ),
];
