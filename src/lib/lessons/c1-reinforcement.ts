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
            "Acción anterior y concluida respecto al presente → perfecto de subjuntivo."
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
      fb("Elige el tiempo.", "No creo que ___ el informe todavía. (leer, él; acción concluida)", "haya leído", "Perfecto de subjuntivo."),
      fb("Elige el tiempo.", "No creo que ___ el informe mañana. (leer, él)", "lea", "Posterior → presente de subjuntivo."),
      fb("Elige el tiempo.", "Dudaba que ___ en tan poco tiempo. (terminar, ellos; anterior)", "hubieran terminado", "Anterior al pasado → pluscuamperfecto."),
      fb("Elige el tiempo.", "Le pedí que ___ más despacio. (hablar, ella)", "hablara", "Posterior al pasado → imperfecto."),
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
            "Pasado + acción anterior → pluscuamperfecto de subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Nos exigieron que ___ antes del viernes. (entregar, nosotros; el alumno escribió: entreguemos)", "entregáramos", "Exigir en pasado → imperfecto."),
      fb("Corrige.", "Es probable que ya ___ la noticia. (saber, ellos; el alumno escribió: supieran)", "sepan", "Presente de probabilidad sobre el presente → presente de subjuntivo."),
      fb("Corrige.", "No me pareció normal que nadie lo ___ antes. (notar; el alumno escribió: note)", "hubiera notado", "Anterior al pasado → pluscuamperfecto."),
      ms(
        "¿Qué frases respetan la concordancia?",
        ["Quería que me lo dijeras.", "Me molesta que no me lo hayas dicho.", "Esperaba que lo hayas terminado.", "Me habría gustado que vinieras."],
        [0, 1, 3],
        "Esperaba (pasado) → que lo hubieras terminado."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Ojalá lo hubiera sabido antes.", "Ojalá lo haya sabido antes ayer.", "Ojalá lo sepa antes, ayer.", "Ojalá lo supe antes."],
        0,
        "Ojalá + pluscuamperfecto: deseo irrealizable sobre el pasado."
      ),
      toEs("They were surprised that we had arrived so early.", "Les sorprendió que hubiéramos llegado tan pronto.", "Pasado + anterioridad → pluscuamperfecto.", ["Les extrañó que hubiéramos llegado tan pronto.", "Les sorprendió que hubiéramos llegado tan temprano."]),
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
      fb("Transforma.", "No importa cuánto cueste. → ___, lo compraremos.", "Cueste lo que cueste", "Fórmula concesivo-universal."),
      fb("Transforma.", "No importa cuándo llegues. → Llegues ___ llegues, te esperaremos.", "cuando", "Llegues cuando llegues."),
      fb("Transforma al pasado.", "Pase lo que pase, sigue adelante. → ___, seguía adelante.", "Pasara lo que pasara", "Imperfecto de subjuntivo en ambas posiciones."),
      mc(
        "«Whoever calls, I'm not in.»",
        ["Llame quien llame, no estoy.", "Llama quien llama, no estoy.", "Quien llame quien, no estoy.", "Llamara quien llama, no estoy."],
        0,
        "Llame quien llame."
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
      toEs("Whatever happens, I'll be there.", "Pase lo que pase, estaré allí.", "Fórmula fija.", ["Pase lo que pase, estaré ahí."]),
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
          fb("Suaviza.", "Quiero hablar con usted. → ___ hablar con usted.", "Quisiera", "Quisiera: condicional de cortesía."),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Tu propuesta no me convence. → No es que tu propuesta no me ___, pero tengo dudas.", "convenza", "No es que + subjuntivo."),
      fb("Suaviza.", "Estás equivocado. → No digo que ___ equivocado, pero quizá haya otra perspectiva.", "estés", "No decir que + subjuntivo."),
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
        "No es que + subjuntivo: no es que no quiera ir."
      ),
      toEs("I wouldn't say it's impossible, but it's very difficult.", "No diría que sea imposible, pero es muy difícil.", "No diría que + subjuntivo.", ["Yo no diría que sea imposible, pero es muy difícil.", "No diría que es imposible, pero es muy difícil."]),
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
            "Solo «se haya aprobado» (acción que debería haber concluido ya)."
          ),
          mc(
            "¿Qué función cumple «Sea cual sea el motivo»?",
            ["Concesiva universal: el motivo no cambia la conclusión.", "Condicional real.", "Final.", "Causal."],
            0,
            "Fórmula concesivo-universal reduplicativa."
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
          fb("Completa.", "No conozco a nadie que ___ vivido en Islandia. (haber)", "haya", "Antecedente inexistente + perfecto."),
          fb("Completa.", "Te lo explicaré de nuevo para que no ___ dudas. (quedar)", "queden", "Para que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando ___ el máster, buscaré trabajo en el extranjero. (terminar, yo)", "termine", "Cuando + futuro."),
      fb("Completa.", "Me hablaba como si nunca nos ___ visto. (haber, nosotros)", "hubiéramos", "Como si + pluscuamperfecto."),
      fb("Completa.", "Por muy difícil que ___, lo intentaremos. (parecer)", "parezca", "Por muy + adjetivo + que + subjuntivo."),
      fb("Completa.", "El hecho de que no ___ contestado no significa nada. (haber, él)", "haya", "El hecho de que + subjuntivo."),
      mc(
        "«Had I known, I wouldn't have come.»",
        ["De haberlo sabido, no habría venido.", "De saberlo, no vendría ayer.", "Si lo habría sabido, no habría venido.", "Habiéndolo sabido, no vine."],
        0,
        "De + infinitivo compuesto = si lo hubiera sabido."
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
            "El hecho es conocido y se minimiza → subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Elige el modo.", "Aunque ___ mucho estudio, no aprobé. (hacer, yo; hecho que informo)", "hice", "Hecho asumido y nuevo → indicativo."),
      fb("Elige el modo.", "Aunque me lo ___ de rodillas, no lo haría. (pedir, tú; hipótesis improbable)", "pidieras", "Improbable → imperfecto de subjuntivo."),
      fb("Elige el modo.", "Sí, ya sé que es tu hermano, pero aunque ___ tu hermano, no tiene derecho a hablarte así. (ser)", "sea", "Hecho conocido minimizado → subjuntivo."),
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
        "Nunca condicional en la concesiva: aunque hubiera tiempo."
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
        "(1) Condicional en la concesiva: ✗ aunque tendría → ✓ aunque tuviera. (2) A pesar de + verbo conjugado sin que: ✗ a pesar de llovía → ✓ a pesar de que llovía. (3) Por mucho que con futuro: ✗ por mucho que insistirás → ✓ por mucho que insistas.",
        [
          ["✗ Aunque sabría la respuesta, no la diría. → ✓ Aunque supiera la respuesta, no la diría.", "Even if I knew the answer, I wouldn't say it."],
        ],
        [
          fb("Corrige.", "A pesar ___ estaba enfermo, fue a trabajar. (el alumno escribió: de)", "de que", "Verbo conjugado → a pesar de que."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Por mucho que ___, no te daré la razón. (insistir, tú; el alumno escribió: insistirás)", "insistas", "Por mucho que + subjuntivo."),
      fb("Corrige.", "Aunque ___ más dinero, no se compraría ese coche. (tener, él; el alumno escribió: tendría)", "tuviera", "Aunque + imperfecto de subjuntivo."),
      fb("Corrige.", "El coche es caro y, por muy ___ que sea, no me convence. (bonito; el alumno escribió: bonita)", "bonito", "Concordancia con coche."),
      ms(
        "¿Qué frases tienen un error?",
        ["Pese a que llovía, el partido siguió.", "Aun cuando lo supiera, no diría nada.", "Aunque lloverá mañana, iremos.", "Por más que lo intento, no me sale."],
        [2],
        "Con un futuro hipotético: aunque llueva mañana (o aunque va a llover, si se presenta como hecho previsto)."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Si bien el plan es ambicioso, es viable.", "Si bien el plan sea ambicioso, es viable.", "Si bien el plan sería ambicioso, es viable.", "Si bien que el plan es ambicioso, es viable."],
        0,
        "Si bien (concesivo) + indicativo."
      ),
      toEs("However much you explain it to me, I don't understand it.", "Por mucho que me lo expliques, no lo entiendo.", "Por mucho que + subjuntivo.", ["Por más que me lo expliques, no lo entiendo."]),
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
          fb("Reformula.", "Aunque llovía, salimos. → ___ a la lluvia, salimos.", "Pese", "Pese a + sustantivo."),
        ]
      ),
    ],
    [
      fb("Reformula.", "Aunque trabaja mucho, gana poco. → ___ bien trabaja mucho, gana poco.", "Si", "Si bien + indicativo."),
      fb("Reformula.", "Aunque lo intento, no puedo. → Por ___ que lo intento, no puedo.", "más", "Por más que."),
      fb("Reformula.", "Aunque estaba cansada, siguió. → Estaba cansada. ___ así, siguió.", "Aun", "Aun así (sin tilde)."),
      fb("Reformula.", "Aunque es joven, es muy sensato. → A pesar de ___ joven, es muy sensato.", "ser", "A pesar de + infinitivo."),
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
      toEs("In spite of having all the data, they made the wrong decision.", "Pese a tener todos los datos, tomaron la decisión equivocada.", "Pese a + infinitivo.", ["A pesar de tener todos los datos, tomaron la decisión equivocada.", "Pese a contar con todos los datos, tomaron la decisión equivocada."]),
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
          fb("Responde con una concesión.", "Si bien ___ cierto que hay riesgos, las ventajas son mayores. (ser)", "es", "Si bien + indicativo."),
        ]
      ),
    ],
    [
      fb("Concede y refuta.", "Reconozco que ___ razón en parte; sin embargo, olvidas un dato clave. (tener, tú)", "tienes", "Reconocer que + indicativo."),
      fb("Concede y refuta.", "Aun admitiendo que ___ así, eso no justifica la medida. (ser)", "sea", "Aun admitiendo que + subjuntivo (hipótesis concedida)."),
      fb("Concede y refuta.", "Por más ___ se repita, no es verdad.", "que", "Por más que."),
      mc(
        "¿Qué respuesta concede y refuta a la vez?",
        ["No te niego que sea caro, pero a largo plazo se ahorra.", "Es caro y ya está.", "No, no es caro.", "Tienes razón, lo dejamos."],
        0,
        "No te niego que + subjuntivo (concesión) + pero (refutación)."
      ),
      ms(
        "¿Qué fórmulas sirven para conceder?",
        ["Es verdad que…", "No te lo discuto, pero…", "Concedo que…", "Por lo tanto…"],
        [0, 1, 2],
        "Por lo tanto introduce una consecuencia."
      ),
      toEs("Granted, it's not perfect; even so, it's the best option we have.", "De acuerdo, no es perfecto; aun así, es la mejor opción que tenemos.", "Concesión + aun así.", ["Es cierto que no es perfecto; aun así, es la mejor opción que tenemos.", "Vale, no es perfecto; aun así, es la mejor opción que tenemos."]),
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
      fb("Completa la reseña.", "Pese ___ su duración, la serie engancha.", "a", "Pese a + sustantivo."),
      fb("Completa la reseña.", "El local es precioso; ___ así, los precios son excesivos.", "aun", "Aun así."),
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
        "«Es horrible y punto» no matiza."
      ),
      toEs("Although it isn't a masterpiece, it's worth seeing.", "Aunque no sea una obra maestra, merece la pena verla.", "Aunque + subjuntivo (se minimiza).", ["Aunque no es una obra maestra, merece la pena verla.", "Aunque no sea una obra maestra, vale la pena verla."]),
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
            "Como + subjuntivo = condicional (a menudo amenaza)."
          ),
        ]
      ),
    ],
    [
      fb("¿Condición o concesión?", "Lo haré ___ me paguen, porque me apetece. (even if)", "aunque", "Concesión."),
      fb("¿Condición o concesión?", "Lo haré ___ me paguen; si no, no. (only if)", "si", "Condición."),
      fb("Completa.", "Aun si ___ razón, no deberías hablarle así. (tener, tú)", "tuvieras", "Aun si + imperfecto de subjuntivo."),
      fb("Completa.", "No iremos a menos que ___ buen tiempo. (hacer)", "haga", "A menos que + subjuntivo."),
      ms(
        "¿Qué conectores son concesivos (no condicionales)?",
        ["con tal de que", "por mucho que", "en caso de que", "aun cuando"],
        [1, 3],
        "Con tal de que y en caso de que plantean condiciones; por mucho que y aun cuando, concesiones."
      ),
      toEs("Even if they had asked me, I would have said no.", "Aunque me lo hubieran pedido, habría dicho que no.", "Concesiva irreal sobre el pasado.", ["Aun si me lo hubieran pedido, habría dicho que no.", "Aunque me lo hubiesen pedido, habría dicho que no."]),
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
          fb("Nominaliza.", "La empresa despidió a cien trabajadores. → el ___ de cien trabajadores", "despido", "Despedir → el despido."),
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
      fb("Nominaliza.", "Aprobaron la ley. → la ___ de la ley", "aprobación", "Aprobar → aprobación."),
      fb("Nominaliza.", "Los ríos se contaminan. → la ___ de los ríos", "contaminación", "Contaminar → contaminación."),
      fb("Nominaliza.", "El paro disminuyó. → la ___ del paro", "disminución", "Disminuir → disminución."),
      fb("Nominaliza.", "Los vecinos se quejan. → las ___ de los vecinos", "quejas", "Quejarse → la queja."),
      mc(
        "«Since the factory closed, unemployment has grown.» → versión nominal:",
        ["Desde el cierre de la fábrica, ha crecido el desempleo.", "Desde que cerrar la fábrica, ha crecido el desempleo.", "Desde la cerrada de la fábrica, crece el desempleo.", "Desde cerramiento de fábrica, desempleo creció."],
        0,
        "Cerrar → el cierre."
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
      fb("Completa.", "___ bueno de esta ciudad es su gente.", "Lo", "Lo + adjetivo."),
      fb("Completa.", "El ___ temprano tiene sus ventajas. (madrugar)", "madrugar", "El + infinitivo."),
      fb("Completa.", "Lo ___ del asunto es que nadie se dio cuenta. (curioso)", "curioso", "Lo + adjetivo masculino singular."),
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
        "Cualidad abstracta → lo difícil."
      ),
      toEs("The strangest thing is that nobody saw anything.", "Lo más extraño es que nadie vio nada.", "Lo + superlativo.", ["Lo más raro es que nadie vio nada.", "Lo más extraño es que nadie viera nada."]),
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
          fb("Formaliza.", "Porque se retrasaron las obras, … → Debido al ___ de las obras, …", "retraso", "Retrasarse → el retraso."),
        ]
      ),
    ],
    [
      fb("Formaliza.", "Si mejoran las condiciones… → Con la ___ de las condiciones…", "mejora", "Mejorar → la mejora."),
      fb("Formaliza.", "Cuando llegaron los inversores… → Tras la ___ de los inversores…", "llegada", "Llegar → la llegada."),
      fb("Formaliza.", "Como no hay suficientes médicos… → Ante la ___ de médicos…", "escasez", "Escasear / escaso → la escasez."),
      fb("Formaliza.", "Para que la empresa crezca… → Para el ___ de la empresa…", "crecimiento", "Crecer → el crecimiento."),
      mc(
        "¿Qué versión es más formal?",
        ["La implantación de la medida requiere una evaluación previa.", "Para poner la medida, hay que evaluarla antes.", "Antes de poner la medida, la evaluamos, ¿vale?", "Ponemos la medida y luego vemos."],
        0,
        "Nominalizaciones (implantación, evaluación) + registro formal."
      ),
      toEs("The closure of the airport caused the cancellation of two hundred flights.", "El cierre del aeropuerto provocó la cancelación de doscientos vuelos.", "Nominalización doble.", ["El cierre del aeropuerto causó la cancelación de doscientos vuelos.", "El cierre del aeropuerto ocasionó la cancelación de doscientos vuelos."]),
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
          fb("Corrige.", "La ___ del informe se retrasó. (entregar; el alumno escribió: entregación)", "entrega", "Entregar → la entrega."),
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
            "Realización = llevar a cabo algo; darse cuenta → toma de conciencia."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "El ___ de la población ha sido muy rápido. (envejecer; el alumno escribió: envejeción)", "envejecimiento", "Envejecer → envejecimiento."),
      fb("Corrige.", "Hubo una ___ de precios. (bajar; el alumno escribió: bajamiento)", "bajada", "Bajar → la bajada."),
      fb("Corrige.", "Admiro su ___. (sincero; el alumno escribió: sincereza)", "sinceridad", "Sincero → sinceridad."),
      ms(
        "¿Qué sustantivos están bien formados?",
        ["la pobreza", "el sufrimiento", "la llegada", "la amabilez"],
        [0, 1, 2],
        "Amable → amabilidad."
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
      toEs("The resignation of the minister surprised everyone.", "La dimisión del ministro sorprendió a todos.", "Dimitir → la dimisión.", ["La renuncia del ministro sorprendió a todos.", "La dimisión de la ministra sorprendió a todos."]),
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
          fb("Reconstruye la oración.", "«Cierre temporal del museo por obras» → El museo ___ temporalmente por obras.", "cierra", "Cierre → cerrar."),
        ]
      ),
    ],
    [
      fb("Reconstruye la oración.", "«Aumento del número de turistas» → El número de turistas ___. (perfecto)", "ha aumentado", "Aumento → aumentar."),
      fb("Reconstruye la oración.", "«Dimisión de la directora del hospital» → La directora del hospital ___. (pretérito)", "dimitió", "Dimisión → dimitir."),
      fb("Crea un titular nominal.", "Rescataron a tres montañeros. → «___ de tres montañeros»", "Rescate", "Rescatar → el rescate."),
      fb("Crea un titular nominal.", "Suspendieron el concierto por lluvia. → «___ del concierto por lluvia»", "Suspensión", "Suspender → la suspensión."),
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
        "Convocar → la convocatoria."
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
          fb("Completa.", "Tengo miedo a que ___ tarde. (llegar, nosotros)", "lleguemos", "Miedo a que + subjuntivo."),
          fb("Completa.", "La probabilidad de que ___ es baja. (llover)", "llueva", "Probabilidad de que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Lo ___ de la situación es que nadie se atreve a hablar. (grave)", "grave", "Lo + adjetivo."),
      fb("Completa.", "La idea de que la tierra ___ plana es absurda. (ser)", "sea", "La idea de que + subjuntivo (proposición que se rechaza)."),
      fb("Completa.", "El anuncio de que la fábrica ___ generó protestas. (cerrar, condicional)", "cerraría", "Anuncio de que + indicativo (información)."),
      mc(
        "¿Qué sustantivo suele ir con indicativo en su complemento?",
        ["la noticia de que", "el temor a que", "la esperanza de que", "la exigencia de que"],
        0,
        "Noticia informa un hecho → indicativo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Tengo la sensación de que nos están mintiendo.", "Existe el riesgo de que el proyecto fracase.", "La esperanza de que vuelve nos mantiene.", "Lo sorprendente fue su reacción."],
        [0, 1, 3],
        "Esperanza de que + subjuntivo: vuelva."
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
            "El aplauso es posterior → coordinación con y."
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
          fb("Corrige.", "Recibí una carta ___ la fecha de la entrevista. (el alumno escribió: indicando)", "que indicaba", "Gerundio especificativo → relativa."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El coche chocó contra un árbol y el conductor ___ herido. (el alumno escribió: resultando)", "resultó", "Consecuencia posterior → verbo conjugado."),
      fb("Corrige.", "Se aprobó una ley ___ el uso de plásticos. (el alumno escribió: prohibiendo)", "que prohíbe", "Gerundio especificativo → relativa."),
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
        "Posterioridad (mudándose) y gerundio especificativo (conteniendo)."
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
          fb("Completa.", "A pesar de la lluvia, los niños ___ jugando. (seguir)", "siguieron", "Seguir + gerundio."),
        ]
      ),
    ],
    [
      fb("Completa.", "Por fin ha ___ de llover.", "dejado", "Dejar de + infinitivo."),
      fb("Completa.", "No me interrumpas; todavía no he terminado ___ hablar.", "de", "Terminar de + infinitivo."),
      fb("Completa.", "Después de años sin verse, ___ a encontrarse en una boda. (volver, pretérito)", "volvieron", "Volver a + infinitivo."),
      fb("Completa.", "Continúa ___ en la misma empresa. (trabajar)", "trabajando", "Continuar + gerundio."),
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
        "Terminar de + infinitivo."
      ),
      toEs("He keeps saying the same thing.", "Sigue diciendo lo mismo.", "Seguir + gerundio.", ["Sigue repitiendo lo mismo.", "Continúa diciendo lo mismo."]),
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
          fb("Completa.", "___ dos horas esperando al técnico. (llevar, nosotros)", "Llevamos", "Llevar + tiempo + gerundio."),
        ]
      ),
    ],
    [
      fb("Completa.", "Con la práctica, ___ mejorando. (ir, tú)", "vas", "Ir + gerundio: progreso gradual."),
      fb("Completa.", "La empresa ___ perdiendo dinero desde 2020. (venir, presente)", "viene", "Venir + gerundio (en presente): tendencia desde el pasado."),
      fb("Completa.", "¿Cuánto tiempo ___ trabajando aquí? (llevar, tú)", "llevas", "Llevar + gerundio."),
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
        "Llevar necesita un complemento temporal: llevo un año estudiando."
      ),
      toEs("I've been living here for ten years.", "Llevo diez años viviendo aquí.", "Llevar + tiempo + gerundio.", ["Llevo viviendo aquí diez años.", "Hace diez años que vivo aquí."]),
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
          fb("Transforma.", "Cuando lees, aprendes. → ___ te enseña mucho.", "Leer", "Infinitivo sujeto."),
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
          fb("Crea la instrucción.", "Prohibido el estacionamiento. → No ___. (verbo: aparcar)", "aparcar", "Infinitivo de instrucción negativo."),
        ]
      ),
    ],
    [
      fb("Crea la instrucción.", "Hay que lavarlo a mano. → ___ a mano.", "Lavar", "Infinitivo de instrucción."),
      fb("Transforma.", "Es difícil que aprendas si no practicas. → Aprender sin ___ es difícil.", "practicar", "Infinitivo tras preposición."),
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
        "Me gusta nadar (sin que)."
      ),
      toEs("Lying never solves anything.", "Mentir nunca soluciona nada.", "Infinitivo sujeto.", ["Mentir no soluciona nunca nada.", "Mentir nunca resuelve nada."]),
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
          fb("Completa el manual.", "___ el cable a la toma de corriente. (conectar)", "Conectar", "Infinitivo de instrucción."),
        ]
      ),
    ],
    [
      fb("Completa el manual.", "Girar la rueda ___ el volumen deseado. (hasta + alcanzar)", "hasta alcanzar", "Mismo sujeto → hasta + infinitivo."),
      fb("Completa el manual.", "Limpiar el filtro ___ un paño húmedo. (usar, gerundio)", "usando", "Gerundio de modo."),
      fb("Completa el manual.", "Si el aparato ___ de funcionar, consultar al servicio técnico. (dejar)", "deja", "Si + presente; dejar de + infinitivo."),
      mc(
        "¿Qué instrucción está bien redactada?",
        ["Retirar el embalaje con cuidado, evitando dañar la pantalla.", "Retirar el embalaje, dañándose la pantalla después.", "Retirando el embalaje con cuidado.", "Retiramiento del embalaje con cuidado."],
        0,
        "Gerundio de modo simultáneo."
      ),
      ms(
        "¿Qué instrucciones son correctas?",
        ["No sumergir en agua.", "Cargar la batería antes del primer uso.", "Volver a pulsar para apagar.", "Enchufándolo, funcionando."],
        [0, 1, 2],
        "La última carece de sentido."
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
          fb("Completa.", "___ el informe, lo enviamos al director. (terminar, participio absoluto)", "Terminado", "Participio absoluto: una vez terminado."),
          fb("Completa.", "Al ___ la noticia, se echó a llorar. (oír)", "oír", "Al + infinitivo = cuando."),
        ]
      ),
    ],
    [
      fb("Completa.", "Lleva media hora ___ por teléfono. (hablar)", "hablando", "Llevar + gerundio."),
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
        "Gerundio de posterioridad incorrecto: nació en 1990 y falleció en 2020."
      ),
      toEs("On seeing the price, she changed her mind.", "Al ver el precio, cambió de opinión.", "Al + infinitivo.", ["Cuando vio el precio, cambió de opinión.", "Al ver el precio, cambió de idea."]),
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
      fb("Pasa a pasiva perifrástica.", "Se publicaron los resultados. → Los resultados ___ publicados.", "fueron", "Ser + participio concordado."),
      fb("Pasa a pasiva refleja.", "Fue aprobado el presupuesto. → Se ___ el presupuesto.", "aprobó", "Se + verbo en singular."),
      fb("Pasa a construcción coloquial.", "Se han subido los precios. → ___ subido los precios. (ellos)", "Han", "Tercera persona del plural impersonal."),
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
        "Pasiva perifrástica con agente."
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
          fb("Corrige.", "Se ___ clases de inglés. (dar; el alumno escribió: da)", "dan", "Clases → plural."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Se ___ a los mejores candidatos. (entrevistar, pretérito; el alumno escribió: entrevistaron)", "entrevistó", "A + personas → singular."),
      fb("Corrige.", "En ese restaurante se ___ platos típicos. (servir; el alumno escribió: sirve)", "sirven", "Platos → plural."),
      fb("Corrige.", "Se ___ a los ganadores durante la gala. (premiar, futuro; el alumno escribió: premiarán)", "premiará", "A + personas → singular."),
      ms(
        "¿Qué frases son correctas?",
        ["Se necesitan voluntarios.", "Se informó a los vecinos.", "Se reparan bicicletas.", "Se contrataron a dos ingenieros."],
        [0, 1, 2],
        "A + personas → se contrató a dos ingenieros."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Se ha detenido a los autores del robo.", "Se han detenido a los autores del robo.", "Se ha detenidos los autores del robo.", "Se detenieron los autores."],
        0,
        "A + personas → singular."
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
            "Estado resultante que sigue vigente → estar."
          ),
        ]
      ),
    ],
    [
      fb("¿Ser o estar?", "La novela ___ escrita en 1605. (pretérito)", "fue", "Acción fechada → ser."),
      fb("¿Ser o estar?", "La novela ___ escrita en un español muy arcaico.", "está", "Característica resultante del texto → estar."),
      fb("¿Ser o estar?", "Las entradas ya ___ vendidas; no queda ninguna.", "están", "Estado resultante → estar."),
      fb("¿Ser o estar?", "Las entradas ___ vendidas en solo una hora. (pretérito)", "fueron", "Acción → ser."),
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
          fb("Completa el comunicado.", "El presupuesto ___ aprobado ayer por el pleno. (ser, pretérito)", "fue", "Pasiva perifrástica con agente."),
        ]
      ),
    ],
    [
      fb("Completa el comunicado.", "Se ___ que el nuevo horario entre en vigor el lunes. (prever)", "prevé", "Se impersonal + subjuntivo."),
      fb("Completa el comunicado.", "Se ___ a los usuarios disculpas por las molestias. (pedir, presente)", "piden", "Disculpas (plural) → se piden."),
      fb("Completa el comunicado.", "Hasta el momento no se ___ incidencias. (registrar, perfecto)", "han registrado", "Se pasivo plural en perfecto."),
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
        "Registro demasiado coloquial."
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
            "Se sustituye a le ante lo."
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
        "Se vendieron las entradas es pasiva refleja (concuerda con entradas)."
      ),
      fb("Completa con el se accidental.", "A mis padres ___ les estropeó el coche en el viaje.", "se", "Se + le(s) + verbo: accidente involuntario."),
      fb("Completa.", "Mi hermano ___ arrepintió de lo que dijo.", "se", "Verbo pronominal (arrepentirse)."),
      mc(
        "«The coffee spilled on me.» (accidental)",
        ["Se me derramó el café.", "Me derramé el café.", "Se derramé el café.", "Me se derramó el café."],
        0,
        "Orden: se + me + verbo."
      ),
      toEs("They wrote to each other for years.", "Se escribieron durante años.", "Se recíproco.", ["Se escribieron cartas durante años.", "Estuvieron escribiéndose durante años."]),
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
          fb("Completa.", "Es necesario que se ___ los datos antes de publicarlos. (contrastar)", "contrasten", "Se pasivo en subjuntivo, plural."),
          fb("Completa.", "Tras la ___ del informe, se abrió un debate. (publicar, nominalización)", "publicación", "Publicar → publicación."),
        ]
      ),
    ],
    [
      fb("Completa.", "La propuesta ___ rechazada por falta de apoyos. (ser, pretérito)", "fue", "Pasiva perifrástica."),
      fb("Completa.", "Se ha comprobado que el sistema ___ fallos. (presentar)", "presenta", "Se ha comprobado que + indicativo (hecho)."),
      fb("Completa.", "Cabe la posibilidad de que se ___ el plazo. (ampliar)", "amplíe", "Posibilidad de que + subjuntivo."),
      mc(
        "¿Qué versión es más impersonal y formal?",
        ["Se considera imprescindible la revisión del protocolo.", "Pienso que tenemos que revisar el protocolo.", "Hay que revisar el protocolo, ¿no?", "Revisamos el protocolo y listo."],
        0,
        "Se + nominalización."
      ),
      ms(
        "¿Qué recursos de impersonalidad aparecen en «Se recomienda que la documentación sea entregada antes del plazo»?",
        ["se impersonal", "subjuntivo", "pasiva perifrástica", "primera persona"],
        [0, 1, 2],
        "No hay primera persona."
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
      fb("Pasa a indirecto libre.", "Se dijo: «Estoy harta de esperar». → ___ harta de esperar.", "Estaba", "Presente → imperfecto, tercera persona."),
      fb("Pasa a indirecto libre.", "Pensó: «¿Me habrá olvidado?» → ¿La ___ olvidado?", "habría", "Futuro compuesto → condicional compuesto."),
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
        "Ni comillas ni verbo introductor; la subjetividad del personaje se funde con la voz narrativa."
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
            "Exclamación y ahora + condicional: perspectiva del personaje."
          ),
        ]
      ),
    ],
    [
      mc(
        "En «Ahora todo el pueblo lo sabría», ¿qué marca el estilo indirecto libre?",
        ["El deíctico ahora combinado con el condicional (futuro del pasado).", "La tercera persona sola.", "El uso de comillas.", "El verbo introductor."],
        0,
        "Ahora (perspectiva del personaje) + condicional (futuro desde el pasado)."
      ),
      fb("Continúa en estilo indirecto libre.", "¿Y qué ___ su madre cuando se enterara? (decir, condicional)", "diría", "Pregunta del personaje con condicional."),
      fb("Continúa en estilo indirecto libre.", "No, no ___ llorar. Tenía que ser fuerte. (poder, imperfecto)", "podía", "Voz del personaje en imperfecto."),
      fb("Continúa como narrador.", "Clara ___ la carta y la guardó en un cajón. (doblar, pretérito)", "dobló", "Narración de acciones → pretérito."),
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
          fb("Transforma.", "«No he dormido nada.» → No ___ dormido nada.", "había", "Perfecto → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Transforma.", "«¿Dónde he dejado las llaves?» → ¿Dónde ___ dejado las llaves?", "había", "Pluscuamperfecto."),
      fb("Transforma.", "«Mañana todo será distinto.» → Mañana todo ___ distinto.", "sería", "Futuro → condicional."),
      fb("Transforma.", "«¡Qué tonta soy!» → ¡Qué tonta ___!", "era", "Presente → imperfecto."),
      fb("Transforma.", "«Esta vez no voy a ceder.» → Esta vez no ___ a ceder.", "iba", "Ir a (presente) → iba a."),
      mc(
        "«¿Por qué no me llama? ¿Estará enfadado?» → estilo indirecto libre:",
        ["¿Por qué no la llamaba? ¿Estaría enfadado?", "¿Por qué no me llama? ¿Estará enfadado?", "Se preguntó por qué no la llamaba.", "¿Por qué no la llamó? ¿Estuvo enfadado?"],
        0,
        "Tercera persona, imperfecto, futuro de probabilidad → condicional de probabilidad."
      ),
      toEs("Would she ever forgive him? Probably not.", "¿Lo perdonaría algún día? Seguramente no.", "Pregunta del personaje en condicional.", ["¿Le perdonaría algún día? Seguramente no.", "¿Lo perdonaría alguna vez? Probablemente no."]),
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
      fb("Completa el relato.", "Cuando abrió los ojos, ya ___ de día. (ser)", "era", "Descripción → imperfecto."),
      fb("Completa el relato.", "Alguien ___ la ventana durante la noche. (abrir, pluscuamperfecto)", "había abierto", "Retrospección."),
      fb("Completa el relato.", "Se ___ rápidamente y bajó a la cocina. (vestir, pretérito)", "vistió", "Acción que avanza."),
      fb("Completa el relato.", "Allí la ___ una sorpresa que cambiaría su vida. (esperar, imperfecto)", "esperaba", "Fondo/estado."),
      mc(
        "¿Qué tiempo introduce una anticipación del futuro dentro del relato?",
        ["El condicional (cambiaría su vida).", "El pretérito.", "El presente.", "El pluscuamperfecto."],
        0,
        "Condicional = futuro del pasado."
      ),
      toEs("Years later, she would remember that afternoon.", "Años después, recordaría aquella tarde.", "Condicional de prospección.", ["Años más tarde, recordaría aquella tarde."]),
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
            "Preguntas del personaje con condicional de conjetura."
          ),
        ]
      ),
    ],
    [
      fb("Continúa el microrrelato.", "Leyó la primera línea y ___ que el corazón se le detenía. (sentir, pretérito)", "sintió", "Acción → pretérito."),
      fb("Continúa el microrrelato.", "¡Cuántos años ___ esperado aquellas palabras! (haber, él)", "había", "Exclamación del personaje + pluscuamperfecto."),
      fb("Continúa el microrrelato.", "Mañana mismo ___ el primer tren a Valparaíso. (tomar, condicional)", "tomaría", "Decisión del personaje → condicional."),
      mc(
        "¿Qué final mantiene la coherencia de tiempos?",
        ["Guardó la carta en el bolsillo y, por primera vez en años, sonrió.", "Guarda la carta y sonreirá.", "Guardaría la carta y sonrió ayer.", "Guardando la carta, sonriendo."],
        0,
        "Pretérito narrativo para el cierre."
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
      toEs("Would she recognize him after so many years?", "¿Lo reconocería después de tantos años?", "Pregunta del personaje con condicional.", ["¿Le reconocería después de tantos años?", "¿Lo reconocería tras tantos años?"]),
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
          fb("Completa (indirecto libre).", "¿Y si lo ___ todo? No, no se atrevería. (confesar, él)", "confesaba", "Hipótesis del personaje con imperfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Le preguntó si ___ alguna vez en París. (estar, pluscuamperfecto)", "había estado", "Pregunta indirecta con si."),
      fb("Completa.", "Le dijo que ___ al día siguiente. (volver, condicional)", "volvería", "Futuro → condicional."),
      fb("Completa (narración).", "Mientras él ___, ella preparaba la maleta. (dormir, imperfecto)", "dormía", "Acciones simultáneas de fondo."),
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
        "Futuro → condicional (información, no orden)."
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
            "Causa → por."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Trabajo ___ una multinacional alemana. (empleador)", "para", "Empleador/destinatario → para."),
      fb("Completa.", "Me presento ___ la vacante de analista. (finalidad)", "para", "Finalidad → para."),
      fb("Completa.", "El contrato quedó anulado ___ un defecto de forma.", "por", "Causa → por."),
      fb("Completa.", "La reunión está prevista ___ el próximo trimestre.", "para", "Plazo/destino temporal → para."),
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
      toEs("The agreement was signed on behalf of both companies.", "El acuerdo fue firmado por los representantes de ambas empresas.", "Por + agente/representación.", ["El acuerdo se firmó en nombre de ambas empresas.", "El acuerdo fue firmado en nombre de ambas empresas."]),
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
            "No estar para bromas = no estar de humor."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "___ lo que respecta al presupuesto, no hay cambios. (el alumno escribió: Para)", "Por", "Por lo que respecta a."),
      fb("Corrige.", "Su actitud ___ con los clientes es impecable. (el alumno escribió: por)", "para", "Para con = hacia."),
      fb("Corrige.", "Cambié el turno ___ el de mi compañero. (el alumno escribió: para)", "por", "Intercambio → por."),
      ms(
        "¿Qué frases son correctas?",
        ["Estoy por dejarlo todo y mudarme.", "El informe está para mañana.", "Para mí que no viene.", "Lo compré para veinte euros."],
        [0, 1, 2],
        "Precio → por veinte euros."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Queda mucho por hacer.", "Queda mucho para hacer por.", "Queda mucho a hacer.", "Queda mucho de hacer."],
        0,
        "Quedar por + infinitivo = pendiente de hacer."
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
          fb("Completa el correo.", "Le agradecemos su confianza y le escribimos ___ informarle de las novedades.", "para", "Finalidad."),
        ]
      ),
    ],
    [
      fb("Completa el correo.", "El envío se retrasará ___ causas ajenas a la empresa.", "por", "Causa."),
      fb("Completa el correo.", "Necesitamos la documentación ___ el día 15.", "para", "Plazo."),
      fb("Completa el correo.", "Puede ponerse en contacto con nosotros ___ teléfono.", "por", "Medio."),
      fb("Completa el correo.", "Este descuento es exclusivo ___ clientes preferentes.", "para", "Destinatario."),
      mc(
        "¿Qué cierre es correcto?",
        ["Sin otro particular, le saluda atentamente.", "Sin otro particular, para le saluda.", "Sin otro particular, por saludarle.", "Por otro particular, le saluda."],
        0,
        "Fórmula fija."
      ),
      toEs("We apologize for the inconvenience.", "Le pedimos disculpas por las molestias.", "Disculparse por + causa.", ["Pedimos disculpas por las molestias.", "Disculpe las molestias.", "Les pedimos disculpas por las molestias."]),
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
            "Para nada = not at all."
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
      fb("Completa.", "___ fin terminó la reunión.", "Por", "Por fin."),
      fb("Completa.", "Esto no sirve ___ nada.", "para", "No servir para nada."),
      fb("Completa.", "Lo dijo ___ decir, sin pensarlo.", "por", "Por decir = sin intención real."),
      ms(
        "¿Qué expresiones son correctas?",
        ["por lo general", "para siempre", "por supuesto", "para supuesto"],
        [0, 1, 2],
        "Por supuesto (nunca para)."
      ),
      toEs("Apparently, nobody knew anything.", "Por lo visto, nadie sabía nada.", "Por lo visto = aparentemente.", ["Al parecer, nadie sabía nada.", "Por lo visto nadie sabía nada."]),
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
      fb("Completa la cláusula.", "Las reparaciones serán asumidas ___ el propietario.", "por", "Agente de la pasiva."),
      fb("Completa la cláusula.", "Cualquier modificación deberá realizarse ___ escrito.", "por", "Medio → por escrito."),
      fb("Completa la cláusula.", "El inmueble se destinará exclusivamente ___ vivienda.", "a", "Destinar a (régimen del verbo)."),
      fb("Completa la cláusula.", "El plazo ___ la entrega de llaves vence el día 30.", "para", "Plazo para + sustantivo."),
      mc(
        "¿Qué frase es propia del lenguaje jurídico?",
        ["La presente cláusula será de aplicación a partir de la fecha de su firma.", "Esto vale desde que firmamos, ¿vale?", "Firmamos y ya está.", "La cláusula mola."],
        0,
        "Registro jurídico."
      ),
      toEs("The contract may be renewed by mutual agreement.", "El contrato podrá renovarse por mutuo acuerdo.", "Por + mutuo acuerdo.", ["El contrato podrá ser renovado de mutuo acuerdo.", "El contrato podrá renovarse de mutuo acuerdo."]),
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
          fb("Completa.", "Pese ___ los retrasos, se cumplió el plazo.", "a", "Pese a."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ muy urgente que sea, necesita la firma del director.", "Por", "Por muy + adjetivo + que."),
      fb("Completa.", "La reunión se aplazó ___ la ausencia del ponente.", "por", "Causa."),
      fb("Completa.", "Se han tomado medidas ___ evitar nuevos incidentes.", "para", "Finalidad."),
      mc(
        "¿Qué frase es correcta?",
        ["Para ser un proyecto piloto, los resultados son prometedores.", "Por ser un proyecto piloto, los resultados son prometedores para.", "Para ser un proyecto piloto, los resultados son prometedores por.", "Por siendo piloto, prometedores."],
        0,
        "Para + comparación con lo esperado."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Por lo que respecta a los costes, no habrá cambios.", "El documento fue revisado por dos expertos.", "Aunque el plazo sea corto, lo cumpliremos.", "Necesitamos el informe por el lunes."],
        [0, 1, 2],
        "Plazo → para el lunes."
      ),
      toEs("Despite being expensive, the investment paid off.", "A pesar de ser cara, la inversión mereció la pena.", "A pesar de + infinitivo.", ["Pese a ser cara, la inversión valió la pena.", "Aunque era cara, la inversión mereció la pena."]),
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
            "Percepción del cambio → estar."
          ),
        ]
      ),
    ],
    [
      fb("¿Ser o estar?", "Esta paella ___ buenísima; felicita al cocinero.", "está", "Valoración del sabor → estar."),
      fb("¿Ser o estar?", "La paella ___ un plato típico de Valencia.", "es", "Clasificación → ser."),
      fb("¿Ser o estar?", "Con ese traje ___ muy elegante.", "estás", "Percepción del momento → estar."),
      fb("¿Ser o estar?", "Tu madre ___ muy elegante; siempre viste bien.", "es", "Cualidad permanente → ser."),
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
          fb("Corrige.", "La cena de empresa ___ en un hotel del centro. (el alumno escribió: está)", "es", "Evento → ser."),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿Dónde ___ la reunión de mañana? (el alumno escribió: está)", "es", "Evento → ser."),
      fb("Corrige.", "¿Dónde ___ los documentos de la reunión? (el alumno escribió: son)", "están", "Objetos → estar."),
      fb("Corrige.", "El concierto ___ a las nueve en el parque. (el alumno escribió: está)", "es", "Evento → ser."),
      ms(
        "¿Qué frases tienen un error?",
        ["La boda fue en una ermita.", "Los novios estaban en la ermita.", "El accidente estuvo en la autopista.", "Hay una fiesta en casa de Ana."],
        [2],
        "Evento → el accidente fue en la autopista."
      ),
      mc(
        "¿Cuál es correcta?",
        ["El partido será en el estadio nuevo.", "El partido estará en el estadio nuevo.", "El partido habrá en el estadio nuevo.", "El partido está siendo en el estadio."],
        0,
        "Evento → ser."
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
            "Estar seguro = estar convencido."
          ),
        ]
      ),
    ],
    [
      fb("¿Ser o estar?", "Este barrio ___ muy seguro; se puede pasear de noche.", "es", "Sin riesgo → ser seguro."),
      fb("¿Ser o estar?", "No ___ seguro de haber cerrado la puerta.", "estoy", "Convencido → estar seguro."),
      fb("¿Ser o estar?", "Ya ___ claro que no nos van a pagar.", "está", "Evidente → está claro."),
      fb("¿Ser o estar?", "Este vino ___ bueno; es de una bodega famosa.", "es", "Calidad → ser bueno."),
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
      toEs("It's obvious that he's lying.", "Está claro que miente.", "Estar claro que + indicativo.", ["Es evidente que miente.", "Está claro que está mintiendo."]),
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
          fb("Reformula con tener.", "En la ciudad hay tres museos. → La ciudad ___ tres museos.", "tiene", "Posesión/característica → tener."),
        ]
      ),
    ],
    [
      fb("Reformula con haber.", "El pueblo tiene una iglesia románica. → En el pueblo ___ una iglesia románica.", "hay", "Existencia → hay."),
      fb("Reformula con estar.", "Hay una iglesia en la plaza (la del pueblo). → La iglesia ___ en la plaza.", "está", "Localización → estar."),
      fb("Reformula con haber (pasado).", "La casa tenía un jardín enorme. → En la casa ___ un jardín enorme.", "había", "Existencia en el pasado."),
      mc(
        "¿Cuál es correcta?",
        ["En la reunión había veinte personas.", "En la reunión habían veinte personas.", "En la reunión estaban veinte personas indefinidas.", "La reunión había veinte personas."],
        0,
        "Haber impersonal siempre en singular."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Tengo hambre.", "Hay que tener paciencia.", "Está un problema con el ordenador.", "Hubo una tormenta anoche."],
        [0, 1, 3],
        "Algo nuevo e indeterminado → hay un problema."
      ),
      toEs("There will be more people than expected.", "Habrá más gente de la esperada.", "Haber impersonal en futuro.", ["Habrá más gente de lo esperado.", "Habrá más personas de las esperadas."]),
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
          fb("Completa el anuncio.", "El ático ___ orientado al sur y recibe luz todo el día.", "está", "Orientación → estar."),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "La finca ___ de 1920, aunque se ha rehabilitado recientemente.", "es", "Origen/época → ser de."),
      fb("Completa el anuncio.", "En la zona ___ colegios, parques y transporte público.", "hay", "Existencia → hay."),
      fb("Completa el anuncio.", "El piso ___ amueblado y listo para entrar a vivir.", "está", "Estado → estar."),
      fb("Completa el anuncio.", "La vivienda ___ tres dormitorios y dos baños.", "tiene", "Característica → tener."),
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
      toEs("It's a bright apartment that is in perfect condition.", "Es un piso luminoso que está en perfecto estado.", "Ser (característica) + estar (estado).", ["Es un apartamento luminoso que está en perfecto estado.", "Se trata de un piso luminoso que está en perfecto estado."]),
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
      fb("Completa.", "Cuando llegamos, la tienda ya ___ cerrada.", "estaba", "Estado resultante."),
      fb("Completa.", "Esa decisión ___ tomada sin consultar a nadie. (ser, pretérito)", "fue", "Pasiva de acción."),
      fb("Completa.", "Al oír la noticia, ___ pálido. (ponerse, pretérito)", "se puso", "Cambio momentáneo."),
      mc(
        "«The situation has become unbearable.»",
        ["La situación se ha vuelto insoportable.", "La situación se ha puesto de insoportable.", "La situación ha hecho insoportable.", "La situación está volviendo insoportable."],
        0,
        "Volverse + adjetivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Está claro que hay un error.", "El problema está resuelto.", "Hubo muchas quejas.", "La fiesta estuvo en el jardín."],
        [0, 1, 2],
        "Evento → la fiesta fue en el jardín."
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
            "Atreverse a."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se dedica ___ la investigación genética.", "a", "Dedicarse a."),
      fb("Completa.", "No me di cuenta ___ la hora.", "de", "Darse cuenta de."),
      fb("Completa.", "Siempre ha soñado ___ vivir junto al mar.", "con", "Soñar con."),
      fb("Completa.", "¿Te has fijado ___ lo cansado que está?", "en", "Fijarse en."),
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
            "Pensar de = opinar."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Esta ley pretende acabar ___ la corrupción.", "con", "Acabar con = eliminar."),
      fb("Completa.", "Acabo ___ enterarme de la noticia.", "de", "Acabar de = hace muy poco."),
      fb("Completa.", "Quedamos ___ hablarlo mañana.", "en", "Quedar en = acordar."),
      fb("Completa.", "Después de horas buscando, dimos ___ el problema.", "con", "Dar con = encontrar."),
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
      toEs("I've arranged to meet my sister at eight.", "He quedado con mi hermana a las ocho.", "Quedar con = citarse.", ["Quedé con mi hermana a las ocho.", "He quedado con mi hermana a las 8."]),
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
          fb("Corrige.", "El examen consiste ___ tres partes. (el alumno escribió: de)", "en", "Consistir en."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Anoche soñé ___ mi abuela. (el alumno escribió: de)", "con", "Soñar con."),
      fb("Corrige.", "Estoy pensando ___ cambiar de trabajo. (el alumno escribió: sobre)", "en", "Pensar en + infinitivo."),
      fb("Corrige.", "Se casó ___ una compañera de clase. (el alumno escribió: a)", "con", "Casarse con."),
      ms(
        "¿Qué frases tienen un error de preposición?",
        ["Me alegro de verte.", "Consiste de dos fases.", "Me olvidé de llamarte.", "Se enamoró con ella."],
        [1, 3],
        "Consistir en; enamorarse de."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Tardé tres horas en terminarlo.", "Tardé tres horas para terminarlo.", "Tardé tres horas a terminarlo.", "Tardé tres horas de terminarlo."],
        0,
        "Tardar en + infinitivo."
      ),
      toEs("It's up to you.", "Depende de ti.", "Depender de.", ["Eso depende de ti.", "La decisión depende de ti."]),
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
      fb("Corrige.", "Creo ___ tienes razón. (el alumno escribió: de que)", "que", "Creo eso → creo que."),
      fb("Corrige.", "Insistió ___ que nos quedáramos. (el alumno escribió: que)", "en", "Insistir en eso → en que."),
      fb("Corrige.", "Me dijo ___ llegaría tarde. (el alumno escribió: de que)", "que", "Decir eso → dijo que."),
      ms(
        "¿Qué frases son correctas?",
        ["Tengo miedo de que se pierda.", "Es posible de que llueva.", "Me alegro de que hayas venido.", "Opino de que es un error."],
        [0, 2],
        "Es posible que; opino que."
      ),
      mc(
        "¿Cuál es correcta?",
        ["No cabe duda de que es el mejor.", "No cabe duda que de es el mejor.", "No cabe de duda que es el mejor.", "No cabe duda de es el mejor."],
        0,
        "Caber duda de eso → de que."
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
          fb("Completa la carta.", "Me especialicé ___ marketing digital.", "en", "Especializarse en."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Siempre me he interesado ___ la sostenibilidad.", "por", "Interesarse por."),
      fb("Completa la carta.", "Me adapto fácilmente ___ nuevos entornos.", "a", "Adaptarse a."),
      fb("Completa la carta.", "Destaco ___ mi capacidad de trabajo en equipo.", "por", "Destacar por."),
      fb("Completa la carta.", "Estaría encantado ___ ampliar esta información en una entrevista.", "de", "Estar encantado de."),
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
          fb("Completa.", "Confío en que ___ bien el examen. (salirte)", "te salga", "Deseo → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "El acusado insiste en que no ___ nada. (hacer, pluscuamperfecto de indicativo)", "había hecho", "Afirmación de un hecho → indicativo."),
      fb("Completa.", "Me opongo a que ___ el parque. (cerrar, ellos)", "cierren", "Oponerse a que + subjuntivo."),
      fb("Completa.", "No cuentes con que te ___ ayudar. (ir, ellos)", "vayan", "Contar con que (expectativa) + subjuntivo."),
      fb("Completa.", "Me acuerdo de que ___ un día precioso. (hacer, imperfecto)", "hacía", "Acordarse de que + indicativo (recuerdo)."),
      mc(
        "¿Cuál es correcta?",
        ["Se negó a que lo acompañáramos.", "Se negó a que lo acompañábamos.", "Se negó que lo acompañáramos.", "Se negó de que lo acompañáramos."],
        0,
        "Negarse a que + subjuntivo."
      ),
      toEs("I'm counting on you to be there.", "Cuento con que estés allí.", "Contar con que + subjuntivo.", ["Cuento con que estés ahí.", "Cuento contigo para que estés allí."]),
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
      fb("Matiza.", "Hay muchos problemas. ___ todo, seguimos adelante.", "Con", "Con todo = even so."),
      fb("Matiza.", "Es un buen candidato. Dicho ___, hay otros con más experiencia.", "esto", "Dicho esto = that said."),
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
        "Restricción tras conceder."
      ),
      toEs("It's a good idea; that said, we need more time.", "Es una buena idea; dicho esto, necesitamos más tiempo.", "Dicho esto.", ["Es una buena idea; ahora bien, necesitamos más tiempo.", "Es buena idea; dicho esto, necesitamos más tiempo."]),
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
          fb("Completa.", "___ señalar que el plazo vence el lunes.", "Cabe", "Cabe señalar."),
        ]
      ),
    ],
    [
      fb("Completa.", "Conviene ___ que no todos los datos están verificados. (precisar)", "precisar", "Conviene precisar."),
      fb("Completa.", "Merece la ___ subrayar el esfuerzo del equipo.", "pena", "Merece la pena."),
      fb("Completa.", "Es preciso ___ que el presupuesto es limitado. (recordar)", "recordar", "Es preciso recordar."),
      mc(
        "¿Qué fórmula NO es propia de un informe formal?",
        ["Ojo, que esto es importante.", "Cabe destacar que…", "Conviene precisar que…", "Merece la pena señalar que…"],
        0,
        "Registro coloquial."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Cabe destacar la participación de los vecinos.", "Conviene tener en cuenta que el coste es alto.", "Cabe de destacar que…", "Es preciso señalar que los resultados son positivos."],
        [0, 1, 3],
        "Cabe destacar (sin de)."
      ),
      toEs("It should be noted that the survey was anonymous.", "Cabe señalar que la encuesta fue anónima.", "Cabe señalar que + indicativo.", ["Conviene precisar que la encuesta fue anónima.", "Hay que señalar que la encuesta era anónima."]),
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
            "Verdad de fondo que relativiza."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En ___ instancia, será el juez quien decida.", "última", "En última instancia."),
      fb("Completa.", "En ___, no hay razones para cambiar de estrategia.", "definitiva", "En definitiva."),
      fb("Completa.", "Perdónalo; al fin y al ___, todos cometemos errores.", "cabo", "Al fin y al cabo."),
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
        ["En definitiva, estamos ante una oportunidad única.", "Al fin y al cabo, el dinero no lo es todo.", "En última instancia, dependerá del presupuesto.", "Al fin y al cabo, primeramente."],
        [0, 1, 2],
        "La última no tiene sentido."
      ),
      toEs("After all, it's only a game.", "Al fin y al cabo, solo es un juego.", "Al fin y al cabo.", ["A fin de cuentas, solo es un juego.", "Al fin y al cabo, no es más que un juego."]),
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
          fb("Corrige.", "A riesgo ___ equivocarme, diré que no. (el alumno escribió: a)", "de", "A riesgo de + infinitivo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Es obligatorio llevar casco, ___ pena de sanción. (el alumno escribió: sobre)", "bajo", "Bajo pena de."),
      fb("Corrige.", "Hay que decidir hoy, ___ pena de perder la oferta. (registro literario; el alumno escribió: sin)", "so", "So pena de."),
      fb("Corrige.", "A riesgo de ___ repetitivo, insisto en este punto. (ser; el alumno escribió: siendo)", "ser", "A riesgo de + infinitivo."),
      mc(
        "¿Qué frase es propia del lenguaje jurídico?",
        ["Queda prohibida la reproducción total o parcial, bajo pena de sanción.", "No lo copies o te la cargas.", "A riesgo de copiarlo, lo copio.", "So pena de copia, copia."],
        0,
        "Bajo pena de + sustantivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["A riesgo de parecer maleducado, me marcho.", "Debe presentarse antes del lunes, so pena de perder la plaza.", "Bajo pena de multa, se prohíbe aparcar.", "A riesgo que me equivoco, lo diré."],
        [0, 1, 2],
        "A riesgo de equivocarme."
      ),
      toEs("At the risk of repeating myself, I'll say it again.", "A riesgo de repetirme, lo diré otra vez.", "A riesgo de + infinitivo.", ["A riesgo de repetirme, lo vuelvo a decir.", "Aun a riesgo de repetirme, lo diré de nuevo."]),
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
        "Inicio → adición → matización → conclusión."
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
      toEs("To sum up, it is a necessary but insufficient measure.", "En definitiva, se trata de una medida necesaria pero insuficiente.", "En definitiva + tratarse de.", ["En resumen, se trata de una medida necesaria pero insuficiente.", "En definitiva, es una medida necesaria pero insuficiente."]),
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
          fb("Completa.", "Si ___ es cierto que hay riesgos, las ventajas son claras.", "bien", "Si bien."),
          fb("Completa.", "Lo que realmente importa ___ la seguridad de los usuarios.", "es", "Oración pseudoescindida."),
        ]
      ),
    ],
    [
      fb("Completa.", "Por mucho que ___ el precio, seguirá siendo competitivo. (subir)", "suba", "Por mucho que + subjuntivo."),
      fb("Completa.", "Es una buena propuesta; eso ___, habría que revisarla.", "sí", "Eso sí."),
      fb("Completa.", "Al fin y al ___, somos nosotros quienes decidimos.", "cabo", "Al fin y al cabo."),
      mc(
        "¿Qué conector concesivo exige indicativo?",
        ["si bien", "por mucho que (futuro)", "aun cuando (hipótesis)", "a menos que"],
        0,
        "Si bien + indicativo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue precisamente eso lo que nos convenció.", "Ahora bien, no conviene precipitarse.", "Si bien sea caro, merece la pena.", "Cabe destacar que nadie se opuso."],
        [0, 1, 3],
        "Si bien + indicativo: si bien es caro."
      ),
      toEs("What matters is not the cost, but the result.", "Lo que importa no es el coste, sino el resultado.", "Pseudoescindida + no… sino.", ["Lo importante no es el coste, sino el resultado.", "Lo que importa no es el precio, sino el resultado."]),
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
            "Tiempo → cuando."
          ),
        ]
      ),
    ],
    [
      fb("Destaca el lugar.", "Fue en este bar ___ se firmó el acuerdo.", "donde", "Lugar → donde."),
      fb("Destaca a la persona.", "Es tu hermano ___ tiene que disculparse, no tú.", "quien", "Persona → quien (o el que)."),
      fb("Destaca el modo.", "Es con paciencia ___ se aprende un idioma.", "como", "Modo → como."),
      mc(
        "Transforma: «Me preocupa el presupuesto.» (destaca «el presupuesto»)",
        ["Lo que me preocupa es el presupuesto.", "Lo cual me preocupa es el presupuesto.", "Que me preocupa es el presupuesto.", "El que me preocupa es el presupuesto."],
        0,
        "Cosa abstracta → lo que."
      ),
      mc(
        "¿Qué forma de ser encaja? «___ en 1492 cuando Colón llegó a América.»",
        ["Fue", "Es", "Era", "Será"],
        0,
        "Concordancia temporal: el verbo principal (llegó) está en pretérito."
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
            "Hendida temporal con ser en pretérito."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—El problema es el precio. —No, ___ me preocupa es el plazo.»",
        ["lo que", "que", "el cual", "cuyo"],
        0,
        "Lo que + verbo + es…"
      ),
      fb("Completa la réplica.", "—¿Lo escribió Cervantes? —No, fue Lope ___ lo escribió.", "quien", "Persona → quien (o el que)."),
      fb("Completa la réplica.", "—¿Os conocisteis en Madrid? —No, fue en Lima ___ nos conocimos.", "donde", "Lugar → donde."),
      fb("Completa la réplica.", "—¿Lo arreglaste con cinta? —No, fue con pegamento ___ lo arreglé.", "como", "Modo/instrumento → como."),
      ms(
        "¿Qué réplicas son correctas? «—Lo rompió el gato.»",
        ["No, fue el perro el que lo rompió.", "No, fue el perro quien lo rompió.", "No, fue el perro donde lo rompió.", "No, fue el perro cual lo rompió."],
        [0, 1],
        "Con persona o animal: el que / quien."
      ),
      toEs("No, it was on Friday that they told us.", "No, fue el viernes cuando nos lo dijeron.", "Hendida temporal.", ["No, fue el viernes cuando nos lo contaron."]),
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
            "Lo + adjetivo + que: el adjetivo concuerda con el sustantivo (sillas)."
          ),
        ]
      ),
    ],
    [
      fb("Completa (intensidad).", "Me sorprendió lo ___ que habla tu hijo. (well)", "bien", "Lo + adverbio + que; con adverbio no hay concordancia."),
      fb("Completa (el asunto).", "¿Te has enterado de lo ___ Marta? Se muda a Chile.", "de", "Lo de + persona = el asunto de."),
      fb("Completa.", "Lo ___ no entiendo es por qué no avisó.", "que", "Lo que + verbo."),
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
        "Lo (invariable) + adjetivo concordado + que."
      ),
      toEs("You don't know how hard it was.", "No sabes lo difícil que fue.", "Lo + adjetivo + que.", ["No sabes lo duro que fue.", "No te imaginas lo difícil que fue."]),
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
        "1) «Que galicado»: ✗ «Es por eso que…» se admite en América, pero en registro cuidado se prefiere «Es por eso por lo que…» o «Por eso…». ✗ «Fue aquí que nos vimos» → ✓ «Fue aquí donde nos vimos». 2) Tiempo de ser: ✗ «Es en 1990 cuando nació» → ✓ «Fue en 1990 cuando nació». 3) Lo invariable: ✗ «la difícil que es» → ✓ «lo difícil que es».",
        [
          ["✗ Fue entonces que lo supe. → ✓ Fue entonces cuando lo supe.", "That was when I found out."],
          ["✗ Es a ti que busco. → ✓ Es a ti a quien busco.", "It's you I'm looking for."],
        ],
        [
          mc(
            "Versión más cuidada:",
            ["Fue en la cocina donde empezó el incendio.", "Fue en la cocina que empezó el incendio.", "Fue en la cocina cual empezó el incendio.", "Fue en la cocina quien empezó el incendio."],
            0,
            "Lugar → donde."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el relativo.", "Es a ella a ___ tienes que pedir perdón. (el alumno puso: que)", "quien", "Con preposición repetida: a ella a quien / a la que."),
      fb("Corrige el tiempo de ser.", "___ en 2008 cuando empezó la crisis. (el alumno puso: Es)", "Fue", "Concordancia con el pretérito."),
      fb("Corrige.", "¡No sabes ___ contenta que estoy! (el alumno puso: la)", "lo", "Lo es invariable."),
      ms(
        "¿Qué frases están bien?",
        ["Es por esta razón por la que me voy.", "Fue así como lo descubrimos.", "Fue ayer que me lo dijo.", "Es de esto de lo que quería hablarte."],
        [0, 1, 3],
        "«Fue ayer que» es el que galicado; mejor «fue ayer cuando»."
      ),
      mc(
        "¿Dónde está el error? «Lo que me molestan son los ruidos.»",
        ["molestan → molesta", "Lo → Los", "son → es", "No hay error"],
        0,
        "Lo que + verbo en singular; ser concuerda con el atributo plural (son los ruidos)."
      ),
      toEs("It was with him that I wanted to talk.", "Era con él con quien quería hablar.", "Preposición repetida en la hendida.", ["Era con él con el que quería hablar.", "Es con él con quien quería hablar."]),
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
            "Sí que + verbo = énfasis afirmativo."
          ),
        ]
      ),
    ],
    [
      fb("Completa el discurso.", "No es falta de dinero; ___ falta es voluntad política.", "lo que", "Lo que + verbo."),
      fb("Completa.", "Vean ustedes lo ___ que está la plaza. (sucio)", "sucia", "Concuerda con plaza."),
      fb("Completa (reafirmación).", "Este barrio ___ que merece un centro de salud.", "sí", "Sí que = énfasis."),
      mc(
        "¿Qué frase antepone el elemento para darle relieve?",
        ["Promesas hemos oído muchas; hechos, ninguno.", "Hemos oído muchas promesas y ningún hecho.", "Muchas promesas se oyeron y ningún hecho.", "No hubo hechos después de las promesas."],
        0,
        "Anteposición del complemento directo."
      ),
      mc(
        "Cierra el discurso con una hendida:",
        ["Somos nosotros quienes decidimos el futuro del barrio.", "Nosotros decidimos el futuro del barrio.", "Decidimos nosotros el futuro.", "El futuro del barrio se decide."],
        0,
        "Ser + persona + quien."
      ),
      toEs("What this neighborhood needs is a library.", "Lo que este barrio necesita es una biblioteca.", "Hendida con lo que.", ["Lo que necesita este barrio es una biblioteca."]),
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
            "Querer que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (régimen de arrepentirse).", "Es de eso ___ lo que me arrepiento.", "de", "Arrepentirse de → de lo que."),
      fb("Completa (subjuntivo).", "Lo único que pido es que me ___ la verdad. (decir, tú)", "digas", "Pedir que + subjuntivo."),
      fb("Completa (confiar en).", "Es en tu criterio ___ el que confío.", "en", "Confiar en → en el que."),
      mc(
        "«Tienes razón en parte. ___, lo que no puedo aceptar es el tono.»",
        ["Ahora bien", "Por consiguiente", "Es decir", "Por ende"],
        0,
        "Ahora bien introduce una objeción."
      ),
      mc(
        "«Por mucho que insistas, lo que no voy a hacer es ___.»",
        ["mentir", "que miento", "mintiendo", "mienta"],
        0,
        "Lo que no voy a hacer es + infinitivo (mismo sujeto)."
      ),
      toEs("What surprises me is that nobody has complained.", "Lo que me sorprende es que nadie se haya quejado.", "Hendida + subjuntivo tras emoción.", ["Lo que me sorprende es que nadie se queje.", "Lo que me extraña es que nadie se haya quejado."]),
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
            "Futuro simple = conjetura sobre el presente."
          ),
        ]
      ),
    ],
    [
      fb("Transforma con futuro.", "Probablemente hay atasco. → ___ atasco.", "Habrá", "Haber → habrá."),
      fb("Transforma con futuro.", "Supongo que sabe la respuesta. → ___ la respuesta.", "Sabrá", "Saber → sabrá."),
      fb("Transforma con futuro.", "Seguramente vienen cansados. → ___ cansados.", "Vendrán", "Venir → vendrán."),
      fb("Pregunta con intriga.", "¿Qué ___ en esa caja tan grande? (haber)", "habrá", "Futuro en pregunta = me pregunto."),
      mc(
        "«Llaman a la puerta.» Conjetura natural:",
        ["Será el cartero.", "Fue el cartero.", "Sea el cartero.", "Habría sido el cartero."],
        0,
        "Suposición sobre el presente → futuro."
      ),
      toEs("She's probably asleep.", "Estará dormida.", "Futuro de probabilidad.", ["Estará durmiendo.", "Ya estará dormida."]),
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
            "Respuesta también en futuro de conjetura."
          ),
        ]
      ),
    ],
    [
      fb("Completa la conjetura.", "—Siempre llega en taxi. —___ mucho dinero. (tener)", "Tendrá", "Tener → tendrá."),
      fb("Completa la conjetura.", "—Nunca está en casa. —___ viajando por trabajo. (estar)", "Estará", "Estar → estará."),
      fb("Completa.", "—¿Qué ___ haciendo ahí dentro tanto rato? (estar, él)", "estará", "Pregunta de conjetura."),
      mc(
        "¿Qué respuesta expresa ignorancia total?",
        ["Vete tú a saber.", "Seguro que sí.", "Claro que lo será.", "Lo es, sin duda."],
        0,
        "Vete tú a saber = nadie lo sabe."
      ),
      mc(
        "¿Qué frase NO es una conjetura?",
        ["Es médico, me lo dijo él.", "Será médico.", "Debe de ser médico.", "Será médico o algo así."],
        0,
        "«Me lo dijo él» indica certeza."
      ),
      toEs("Who could he be talking to?", "¿Con quién estará hablando?", "Futuro progresivo de conjetura.", ["¿Con quién hablará?"]),
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
            "Imperfecto probable → condicional."
          ),
        ]
      ),
    ],
    [
      fb("Transforma.", "Probablemente se ha perdido. → Se ___ perdido.", "habrá", "Pretérito perfecto probable → futuro perfecto."),
      fb("Transforma.", "Probablemente tenía veinte años entonces. → ___ veinte años entonces.", "Tendría", "Imperfecto probable → condicional."),
      fb("Transforma.", "Probablemente ya se habían ido. → Ya se ___ ido.", "habrían", "Pluscuamperfecto probable → condicional perfecto."),
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
        "Anterior a otro pasado → condicional perfecto."
      ),
      toEs("They must have missed the train.", "Habrán perdido el tren.", "Futuro perfecto de conjetura.", ["Habrán perdido el tren, seguramente.", "Debe de haber perdido el tren."]),
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
            "Conjetura sobre el pasado (ayer) → condicional."
          ),
        ]
      ),
    ],
    [
      fb("La inspectora razona.", "La ventana está abierta: alguien ___ salido por ahí. (haber, perfecto)", "habrá", "Pasado reciente → futuro perfecto."),
      fb("La inspectora razona.", "Hay carmín en la taza: la visita ___ una mujer. (ser, presente)", "será", "Conjetura sobre la identidad → futuro."),
      mc(
        "¿Qué deducción es más lógica por el barro?",
        ["Habrá llovido y alguien habrá entrado por la ventana.", "Llueve siempre en esa ciudad.", "La ventana será nueva.", "No habrá nadie en la casa nunca."],
        0,
        "Encadena conjeturas con futuro perfecto."
      ),
      ms(
        "¿Qué frases son conjeturas?",
        ["Serían dos personas.", "Habrán discutido.", "La cafetera está caliente.", "Estará escondido cerca."],
        [0, 1, 3],
        "«Está caliente» es un hecho observado."
      ),
      fb("Completa.", "Cuando llegó la policía, el sospechoso ya ___ huido. (haber, conjetura sobre pasado anterior)", "habría", "Condicional perfecto."),
      toEs("Someone must have warned him.", "Alguien lo habrá avisado.", "Futuro perfecto de conjetura.", ["Alguien le habrá avisado.", "Alguien le habría avisado."]),
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
            "Futuro concesivo."
          ),
        ]
      ),
    ],
    [
      fb("Concede en futuro.", "___ muy rápido, pero comete muchos errores. (ser)", "Será", "Futuro concesivo."),
      fb("Concede en pasado.", "___ mucha experiencia, pero aquella vez se equivocó. (tener)", "Tendría", "Condicional concesivo."),
      mc(
        "¿En qué frase el futuro es concesivo (no de probabilidad)?",
        ["Sabrá mucho, pero no sabe explicarlo.", "¿Dónde estará Luis?", "Serán las cinco.", "Tendrá unos treinta años."],
        0,
        "Futuro + pero = concesión."
      ),
      mc(
        "Parafrasea: «Habrá estudiado mucho, pero suspendió.»",
        ["Aunque haya estudiado mucho, suspendió.", "Como estudió mucho, suspendió.", "Porque estudió, suspendió.", "Si estudia, suspenderá."],
        0,
        "Equivale a una concesiva con aunque."
      ),
      fb("Completa la paráfrasis.", "Será rico, pero es tacaño. = ___ sea rico, es tacaño.", "Aunque", "Futuro concesivo ≈ aunque + subjuntivo."),
      toEs("He may be your friend, but he lied to you.", "Será tu amigo, pero te mintió.", "Futuro concesivo.", ["Será amigo tuyo, pero te mintió."]),
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
            "Puede que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (indicativo).", "A lo mejor ___ mañana. (llover)", "llueve", "A lo mejor + indicativo."),
      fb("Completa (deducción).", "Debe ___ ser muy tarde; ya no hay nadie.", "de", "Deber de + infinitivo = probabilidad."),
      fb("Completa (subjuntivo).", "Quizás no ___ la dirección. (saber, ellos)", "sepan", "Quizás + subjuntivo (duda)."),
      mc(
        "«Debes estudiar más» expresa…",
        ["obligación", "probabilidad", "concesión", "deseo"],
        0,
        "Deber + infinitivo = obligación."
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
      toEs("She must have forgotten.", "Se le habrá olvidado.", "Futuro perfecto de conjetura.", ["Debe de haberlo olvidado.", "Lo habrá olvidado.", "Debe de habérsele olvidado."]),
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
            "Imperativo negativo de usted: no se + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Pásalo a usted.", "Acompáñame, por favor. → ___, por favor.", "Acompáñeme", "Imperativo de usted + enclítico."),
      fb("Pásalo a usted.", "¿Puedo ir contigo? → ¿Puedo ir con ___?", "usted", "Contigo → con usted."),
      fb("Pásalo a usted.", "Te he traído tu informe. → Le he traído ___ informe.", "su", "Tu → su."),
      fb("Pásalo a usted.", "Dime qué necesitas. → ___ qué necesita.", "Dígame", "Decir → diga + me."),
      mc(
        "¿Qué versión en usted es coherente de principio a fin?",
        ["Disculpe, ¿me deja su bolígrafo? Se lo devuelvo enseguida.", "Disculpe, ¿me dejas su bolígrafo? Se lo devuelvo enseguida.", "Disculpa, ¿me deja tu bolígrafo? Te lo devuelvo enseguida.", "Disculpe, ¿me deja tu bolígrafo? Se lo devuelvo enseguida."],
        0,
        "Todo en 3.ª persona: disculpe, deja, su, se lo."
      ),
      toEs("Don't worry, I'll call you tomorrow. (usted)", "No se preocupe, lo llamo mañana.", "Usted: se preocupe, lo/le llamo.", ["No se preocupe, le llamo mañana.", "No se preocupe, lo llamaré mañana.", "No se preocupe, le llamaré mañana."]),
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
            "Al aceptar el tuteo, se pasa a tú de inmediato."
          ),
        ]
      ),
    ],
    [
      fb("Completa la propuesta.", "Por favor, no me hable de usted; puede ___. (tratar de tú)", "tutearme", "Tutear + me."),
      fb("Completa.", "—¿Nos ___? —Claro, será más cómodo.", "tuteamos", "Tutearse (recíproco)."),
      mc(
        "¿Qué respuesta rechaza el tuteo con cortesía?",
        ["Se lo agradezco, pero si no le importa, prefiero seguir tratándolo de usted.", "Ni hablar, no te tuteo.", "Vale, tú también.", "¿Por qué no?"],
        0,
        "Agradecer + preferencia + atenuación."
      ),
      mc(
        "¿Quién suele proponer el tuteo en una relación jerárquica?",
        ["La persona de mayor edad o rango.", "La persona de menor rango.", "Nadie; siempre se tutea.", "Siempre el cliente."],
        0,
        "Por convención, lo propone quien tiene más edad o jerarquía."
      ),
      ms(
        "¿Qué fórmulas proponen tutearse?",
        ["Trátame de tú.", "Puede tutearme.", "¿Nos tuteamos?", "Háblenos de usted."],
        [0, 1, 2],
        "«Háblenos de usted» mantiene la distancia."
      ),
      toEs("Please, call me tú.", "Por favor, trátame de tú.", "Tratar de tú = tutear.", ["Por favor, tutéame.", "Por favor, puedes tutearme."]),
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
            "Si se ustedea, el pronombre es le."
          ),
        ]
      ),
    ],
    [
      fb("Repara la coherencia.", "Estimado cliente: si tiene dudas, ___ con nosotros. (el alumno puso: contacta)", "contacte", "Imperativo de usted."),
      fb("Repara.", "Señores, pueden sentarse en ___ asientos. (el alumno puso: vuestros)", "sus", "Ustedes → su/sus."),
      fb("Repara.", "Doctora, gracias por ___ tiempo. (el alumno puso: tu)", "su", "Usted → su."),
      ms(
        "¿Qué frases son coherentes?",
        ["Profesora, ¿me puede revisar el examen? Se lo dejo en la mesa.", "Chicos, ¿habéis traído vuestros libros?", "Señor, ¿le importa si te hago una pregunta?", "Chicos, ¿han traído vuestros libros?"],
        [0, 1],
        "Las otras mezclan tratamientos."
      ),
      mc(
        "¿Qué versión es correcta en el Río de la Plata para un amigo?",
        ["Che, ¿vos querés venir con nosotros?", "Che, ¿vos quieres venir con nosotros?", "Che, ¿usted querés venir?", "Che, ¿vos quiera venir?"],
        0,
        "Vos + forma voseante (querés)."
      ),
      toEs("Madam, may I ask you a question? (usted)", "Señora, ¿le puedo hacer una pregunta?", "Usted → le.", ["Señora, ¿puedo hacerle una pregunta?", "Señora, ¿me permite hacerle una pregunta?"]),
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
            "El ustedeo puede ser afectivo o simplemente la norma local."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Dónde sonaría más extraño ustedear a un compañero de clase de tu edad?",
        ["En Madrid", "En Bogotá", "En San José de Costa Rica", "En Tunja (Boyacá)"],
        0,
        "En España el tuteo entre iguales es casi universal."
      ),
      fb("Completa (ustedeo afectivo).", "—Mi amor, ¿usted ___ frío? (tener)", "tiene", "Usted + 3.ª persona."),
      fb("Completa.", "—Mijo, cuídese mucho y ___ cuando llegue. (llamar, usted, imperativo + me)", "llámeme", "Imperativo de usted + me."),
      ms(
        "¿Qué factores deciden si el usted es distante o cercano?",
        ["la región", "la relación entre los hablantes", "la entonación y el vocabulario afectivo", "la longitud de la frase"],
        [0, 1, 2],
        "La longitud no tiene nada que ver."
      ),
      mc(
        "Un viajero español en Costa Rica oye «Tranquilo, usted sabe que aquí lo queremos». ¿Qué debe entender?",
        ["Cercanía: es un uso afectivo.", "Le están echando del país.", "Le tratan con frialdad.", "Hay un error de concordancia."],
        0,
        "El vocabulario (tranquilo, lo queremos) confirma la cercanía."
      ),
      toEs("Honey, are you coming to dinner? (usted, afectivo)", "Mi amor, ¿usted viene a cenar?", "Ustedeo afectivo.", ["Mi amor, ¿viene a cenar?", "Mijo, ¿usted viene a cenar?"]),
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
            "Voseo: podés, avisame (sin tilde)."
          ),
        ]
      ),
    ],
    [
      fb("A la jefa.", "Lamento ___ que la reunión del jueves queda cancelada. (comunicar + le)", "comunicarle", "Infinitivo + le (usted)."),
      fb("Al colega.", "¿___ bien el lunes a las diez? (ir, tú, + te)", "Te va", "Irle bien a alguien."),
      fb("Al amigo argentino.", "Si ___ el lunes, avisame. (poder, vos)", "podés", "Voseo: podés."),
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
        "Registro formal con usted."
      ),
      toEs("Would it be possible to move the meeting to Monday? (formal)", "¿Sería posible trasladar la reunión al lunes?", "Condicional de cortesía.", ["¿Sería posible cambiar la reunión al lunes?", "¿Sería posible pasar la reunión al lunes?", "¿Sería posible mover la reunión al lunes?"]),
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
            "Condicional + «tan amable de»."
          ),
        ]
      ),
    ],
    [
      fb("Completa (subjuntivo).", "Le agradecería que me ___ los documentos. (enviar, usted)", "enviara", "Condicional + que + imperfecto de subjuntivo."),
      fb("Completa (imperfecto de cortesía).", "Buenos días, ___ saber si queda alguna plaza. (querer, yo)", "quería", "Imperfecto de cortesía."),
      fb("Completa.", "¿Sería usted tan amable ___ indicarme la salida?", "de", "Tan amable de + infinitivo."),
      mc(
        "Ordena de menos a más cortés: (a) ¿Me pasas la sal? (b) Pásame la sal. (c) ¿Podrías pasarme la sal?",
        ["b, a, c", "a, b, c", "c, a, b", "b, c, a"],
        0,
        "Imperativo < pregunta en presente < condicional."
      ),
      ms(
        "¿Qué recursos suavizan una petición?",
        ["condicional (podría)", "imperfecto (quería)", "¿le importaría…?", "imperativo sin por favor"],
        [0, 1, 2],
        "El imperativo seco es lo más directo."
      ),
      toEs("Would you mind waiting a moment? (usted)", "¿Le importaría esperar un momento?", "Importar + condicional.", ["¿Le importaría esperar un momentito?", "¿No le importaría esperar un momento?"]),
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
            "Ser → sos."
          ),
        ]
      ),
    ],
    [
      fb("Pásalo a vos.", "¿Tú sabes dónde está? → ¿Vos ___ dónde está?", "sabés", "Saber → sabés."),
      fb("Pásalo a vos.", "Duermes muy poco. → ___ muy poco.", "Dormís", "Sin diptongo: dormís."),
      fb("Pásalo a vos (imperativo).", "Dime la verdad. → ___ la verdad.", "Decime", "Decí + me."),
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
      toEs("Do you want to come with me? (vos)", "¿Querés venir conmigo?", "Voseo: querés.", ["¿Vos querés venir conmigo?"]),
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
            "Decí + me = decime (llana terminada en vocal, sin tilde)."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Vos ___ razón. (el alumno puso: tienés)", "tenés", "Sin diptongo."),
      fb("Corrige.", "¿Vos ___ de Córdoba? (el alumno puso: eres)", "sos", "Ser → sos."),
      fb("Corrige.", "Este regalo es para ___. (el alumno puso: ti)", "vos", "Preposición + vos."),
      fb("Corrige la tilde.", "___, que te vas a caer. (el alumno puso: Agarráte)", "Agarrate", "Con enclítico, sin tilde."),
      ms(
        "¿Qué formas son correctas en el voseo rioplatense?",
        ["vos querés", "vos quieres", "vos jugás", "vos juegás"],
        [0, 2],
        "Sin diptongo: querés, jugás."
      ),
      mc(
        "¿Qué imperativo voseante de «ir» es el más usado en el Río de la Plata?",
        ["andá", "í", "vé", "vení"],
        0,
        "Para «ir» se usa «andá» (de andar)."
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
            "Dale = de acuerdo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (voseo).", "Che, ¿vos ___ algo de Martín? (saber)", "sabés", "Saber → sabés."),
      fb("Completa (imperativo).", "___ que te cuento lo que pasó. (esperar, vos)", "Esperá", "Imperativo voseante con tilde."),
      mc(
        "«—Ganó la lotería y se fue a vivir a la playa. —¡___!»",
        ["Mirá vos", "Dale", "Che", "Bárbaro, dale"],
        0,
        "Sorpresa → mirá vos."
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
      fb("Completa.", "Si ___ tiempo, pasá por casa. (tener, vos)", "tenés", "Tener → tenés."),
      toEs("Hey, are you coming tonight? (vos)", "Che, ¿venís esta noche?", "Venir → venís.", ["Che, ¿vos venís esta noche?", "Che, ¿venís hoy a la noche?"]),
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
            "Terminación -ís/-ái es voseo verbal chileno."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué voseo combina el pronombre tú con verbo voseante?",
        ["el chileno", "el rioplatense", "el centroamericano", "ninguno"],
        0,
        "Chile: tú + forma voseante."
      ),
      mc(
        "¿En qué zona el voseo es norma culta en medios y escuela?",
        ["Río de la Plata", "España", "Caribe insular", "México central"],
        0,
        "En Argentina y Uruguay es la norma."
      ),
      ms(
        "¿Qué países tienen voseo extendido?",
        ["Argentina", "Uruguay", "Nicaragua", "República Dominicana"],
        [0, 1, 2],
        "El Caribe insular es tuteante."
      ),
      fb("Completa (chileno coloquial).", "¿Cómo ___? (estar, tú, voseo chileno)", "estái", "Voseo verbal chileno."),
      fb("Completa (rioplatense).", "¿Vos ___ el colectivo o caminás? (tomar)", "tomás", "Tomar → tomás."),
      toEs("You know I'm right. (vos, rioplatense)", "Vos sabés que tengo razón.", "Saber → sabés.", ["Sabés que tengo razón."]),
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
            "Expensas = gastos comunes del edificio."
          ),
        ]
      ),
    ],
    [
      fb("Responde al dueño (voseo).", "Hola, sí, soy yo. ¿Mañana a las seis ___? (poder, vos)", "podés", "Poder → podés."),
      fb("Pregunta.", "¿Me ___ decir cuánto son las expensas? (poder, vos, condicional de cortesía)", "podrías", "El condicional de vos coincide con el de tú."),
      mc(
        "El dueño escribe: «Pasá cuando quieras». Significa…",
        ["Ven cuando quieras.", "Pasa de largo.", "No vengas.", "Pagá cuando quieras."],
        0,
        "Pasá = imperativo voseante de pasar."
      ),
      mc(
        "«Un dos ambientes» es…",
        ["un piso con salón y un dormitorio", "un piso de dos dormitorios", "dos pisos", "un estudio sin cocina"],
        0,
        "Se cuentan los ambientes: living + dormitorio."
      ),
      fb("Cierra el trato.", "Dale, ___ mañana. ¡Gracias! (verse, nosotros)", "nos vemos", "Nos vemos mañana."),
      toEs("Can you send me more photos? (vos)", "¿Me podés mandar más fotos?", "Poder → podés.", ["¿Podés mandarme más fotos?", "¿Me mandás más fotos?"]),
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
            "Imperativo negativo = subjuntivo; la norma culta prefiere llegues."
          ),
        ]
      ),
    ],
    [
      fb("Completa (imperativo afirmativo).", "___ cuidado con el perro. (tener, vos)", "Tené", "Tener → tené."),
      fb("Completa (subjuntivo, norma culta).", "Espero que ___ un buen viaje. (tener, vos)", "tengas", "Subjuntivo con forma tuteante."),
      fb("Completa (pretérito).", "¿Vos ___ la película que te recomendé? (ver)", "viste", "Pretérito igual que en tú."),
      mc(
        "«Si vos ___ más tiempo, ¿vendrías?» (tener)",
        ["tuvieras", "tenés", "tuviste", "tengás"],
        0,
        "Condicional irreal: imperfecto de subjuntivo (igual que tú)."
      ),
      ms(
        "¿Qué frases son correctas en el voseo culto?",
        ["Andá y decile que venga.", "No te olvides de llamarme.", "Vos hablastes muy bien.", "Ojalá que puedas venir."],
        [0, 1, 3],
        "«Hablastes» es una forma no estándar."
      ),
      toEs("Don't tell him anything. (vos)", "No le digas nada.", "Imperativo negativo = subjuntivo.", ["No le digás nada.", "No le cuentes nada."]),
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
            "En el Cono Sur: auto."
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
      fb("Adapta a México.", "Voy a aparcar el coche. → Voy a estacionar el ___.", "carro", "México: carro."),
      fb("Adapta a Argentina.", "Me compré unas gafas nuevas. → Me compré unos ___ nuevos.", "anteojos", "Argentina: anteojos (también lentes)."),
      mc(
        "¿Qué frase suena claramente española (de España)?",
        ["¿Me dejas tu ordenador un momento?", "¿Me prestás tu computadora?", "¿Me prestas tu computadora?", "¿Me prestás la compu?"],
        0,
        "Ordenador es propio de España."
      ),
      ms(
        "¿Qué palabras significan «teléfono portátil»?",
        ["móvil", "celular", "cel", "ordenador"],
        [0, 1, 2],
        "Ordenador es computadora."
      ),
      toEs("I'll drive; you look at the map. (América)", "Yo manejo; tú mira el mapa.", "Manejar = conducir en América.", ["Yo manejo, tú mira el mapa.", "Manejo yo; tú mira el mapa."]),
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
            "Chile: palta."
          ),
        ]
      ),
    ],
    [
      fb("Adapta a Chile.", "Medio kilo de fresas. → Medio kilo de ___.", "frutillas", "Cono Sur: frutilla."),
      fb("Adapta a México.", "Un kilo de judías negras. → Un kilo de ___ negros.", "frijoles", "México: frijoles."),
      fb("Adapta a América en general.", "Tres kilos de patatas. → Tres kilos de ___.", "papas", "América: papa."),
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
        "Durazno = melocotón."
      ),
      toEs("A kilo of peaches, please. (América)", "Un kilo de duraznos, por favor.", "América: durazno.", ["Un kilo de durazno, por favor.", "Me da un kilo de duraznos, por favor."]),
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
        "Tinto: vino tinto (España) / café solo (Colombia). Guagua: autobús (Cuba, Canarias) / bebé (Chile, Andes). Pena: tristeza (España) / vergüenza (México, Centroamérica, Colombia). Coger: tomar (España) / término vulgar (gran parte de América): allí se prefiere tomar o agarrar.",
        [
          ["¿Te tomas un tinto? (Bogotá = café)", "Would you like a coffee?"],
          ["Me da pena hablar en público. (México = vergüenza)", "I'm embarrassed to speak in public."],
        ],
        [
          mc(
            "Un chileno dice «La guagua está durmiendo». Se refiere a…",
            ["un bebé", "un autobús", "un perro", "un taxi"],
            0,
            "Chile: guagua = bebé."
          ),
        ]
      ),
    ],
    [
      mc(
        "Estás en Buenos Aires. ¿Qué frase es la adecuada para ir al centro?",
        ["Voy a tomar el colectivo.", "Voy a coger el colectivo.", "Voy a coger la guagua.", "Voy a tomar la guagua."],
        0,
        "En Argentina: tomar (no coger) + colectivo."
      ),
      fb("Adapta a México.", "Voy a coger un taxi. → Voy a ___ un taxi.", "tomar", "En América se evita coger."),
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
        "Tinto = café; tintico = diminutivo."
      ),
      ms(
        "¿Qué palabras conviene evitar o usar con cuidado según el país?",
        ["coger", "concha", "tomar", "caminar"],
        [0, 1],
        "Coger y concha son malsonantes en ciertas regiones."
      ),
      toEs("I was embarrassed to ask. (México)", "Me dio pena preguntar.", "Pena = vergüenza en México.", ["Me dio pena preguntarle.", "Me daba pena preguntar."]),
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
            "Venezuela: chévere."
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
        "En registro formal, adjetivos neutros."
      ),
      fb("Completa (México).", "¡Qué ___ está tu coche nuevo! (genial, adjetivo mexicano de 5 letras)", "padre", "Padre = genial en México."),
      fb("Completa (España).", "Esa peli es muy ___.", "guay", "España: guay."),
      ms(
        "¿Qué palabras significan «genial»?",
        ["bacán", "chévere", "fome", "copado"],
        [0, 1, 3],
        "Fome (Chile) = aburrido."
      ),
      toEs("The concert was awesome. (Chile)", "El concierto estuvo bacán.", "Chile: bacán.", ["El concierto fue bacán.", "El concierto estuvo muy bacán."]),
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
            "Güey + padre → México."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Tía, ¿habéis visto qué guay está el piso nuevo de Lucía?»",
        ["España", "México", "Colombia", "Uruguay"],
        0,
        "Tía, habéis, guay, piso → España."
      ),
      mc(
        "«Parce, ¿nos tomamos un tinto antes de coger el bus?»",
        ["Colombia", "Argentina", "España", "Cuba"],
        0,
        "Parce + tinto → Colombia (allí coger es neutro)."
      ),
      mc(
        "«Vos sabés que el partido estuvo re aburrido, ¿viste?»",
        ["Argentina o Uruguay", "México", "España", "Puerto Rico"],
        0,
        "Voseo + re + ¿viste? → Río de la Plata."
      ),
      mc(
        "«Oye, ¿cogemos la guagua o vamos a pie? Está brutal el calor, mano.»",
        ["Puerto Rico / Caribe", "Chile", "Argentina", "Perú"],
        0,
        "Guagua (autobús) + mano → Caribe."
      ),
      fb("Completa la pista chilena.", "¿Cachái lo que te digo, ___?", "po", "Po (pues) es muy chileno."),
      ms(
        "¿Qué pistas apuntan a España?",
        ["vosotros", "tío/tía como vocativo", "guay", "che"],
        [0, 1, 2],
        "Che apunta al Río de la Plata."
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
            "Usted + camión (México)."
          ),
        ]
      ),
    ],
    [
      fb("Buenos Aires, a un amigo.", "¿___ si hay subte a esta hora? (saber, vos)", "Sabés", "Voseo."),
      fb("Madrid, a unos amigos.", "¿___ venir a cenar el sábado? (querer, vosotros)", "Queréis", "España: vosotros."),
      fb("Bogotá, a un desconocido.", "Disculpe, ¿me ___ decir la hora? (poder, usted)", "puede", "Usted."),
      mc(
        "En Sevilla, a unos clientes en una tienda:",
        ["¿Qué desean ustedes?", "¿Qué deseáis vos?", "¿Qué querés?", "¿Qué desean vosotros?"],
        0,
        "Con clientes: ustedes (formal)."
      ),
      mc(
        "Un mensaje en español neutro para toda Latinoamérica evitaría…",
        ["el voseo y el vosotros", "el usted", "el presente", "los adjetivos"],
        0,
        "El neutro usa ustedes y tú/usted."
      ),
      toEs("Excuse me, sir, where can I catch a taxi? (América)", "Disculpe, señor, ¿dónde puedo tomar un taxi?", "Tomar (no coger) en América.", ["Disculpe, señor, ¿dónde tomo un taxi?", "Perdone, señor, ¿dónde puedo tomar un taxi?"]),
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
            "Un montón → una gran cantidad."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza.", "La profe nos explicó el examen. → La ___ nos explicó el examen.", "profesora", "Apócope → forma completa."),
      fb("Neutraliza.", "No pillo lo que dice. → No ___ lo que dice.", "entiendo", "Pillar → entender."),
      fb("Neutraliza.", "Está súper cansado. → Está ___ cansado.", "muy", "Súper → muy."),
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
        "Sin muletillas ni léxico regional."
      ),
      toEs("The meeting is next weekend. (neutral)", "La reunión es el próximo fin de semana.", "Sin apócope «finde».", ["La reunión será el próximo fin de semana."]),
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
            "Es que = justificación."
          ),
        ]
      ),
    ],
    [
      fb("Completa (reformular).", "No le gusta nada el trabajo, o ___, está buscando otro.", "sea", "O sea = reformulación."),
      mc(
        "«—¿Qué tal la película? —___, no estaba mal, pero esperaba más.»",
        ["Bueno", "Es que", "Por consiguiente", "O sea que no"],
        0,
        "Bueno = aceptación parcial."
      ),
      mc(
        "«No ha estudiado nada, no ha ido a clase… Que va a suspender, ___.»",
        ["vamos", "pues", "es que", "bueno"],
        0,
        "Vamos = conclusión enfática."
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
        "En la escritura formal se eliminan."
      ),
      toEs("Well, I don't know, I'm a bit tired.", "Pues no sé, es que estoy un poco cansado.", "Pues + es que.", ["Pues no sé, estoy un poco cansado.", "Bueno, no sé, es que estoy un poco cansado."]),
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
        "Metedura (Esp.) / metida (Am.) de pata → error: el coloquial añade complicidad o ironía. Estar hasta las narices → estar muy molesto. Costar un ojo de la cara → ser muy caro. Ponerse las pilas → esforzarse más. El registro formal es más distante y evaluativo.",
        [
          ["El ministro metió la pata. / El ministro cometió un error.", "The minister blundered. / The minister made a mistake."],
          ["Me costó un ojo de la cara. / Resultó muy costoso.", "It cost me an arm and a leg. / It was very expensive."],
        ],
        [
          mc(
            "Versión formal de «Tienes que ponerte las pilas»:",
            ["Debe usted esforzarse más.", "Tienes que cargar las pilas.", "Ponte las pilas ya.", "Tienes que ponerte a tope."],
            0,
            "Ponerse las pilas → esforzarse."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la expresión coloquial con su equivalente neutro.",
        [
          ["meter la pata", "equivocarse"],
          ["estar hasta las narices", "estar harto"],
          ["costar un ojo de la cara", "ser muy caro"],
          ["no pegar ojo", "no dormir"],
        ],
        "Coloquial → neutro."
      ),
      fb("Neutraliza.", "Esta noche no he pegado ojo. → Esta noche no he ___.", "dormido", "No pegar ojo = no dormir."),
      fb("Neutraliza.", "Estoy hasta las narices del ruido. → Estoy ___ del ruido.", "harto", "Estar harto de."),
      mc(
        "¿Qué efecto tiene decir «El Gobierno ha metido la pata» en un titular?",
        ["Tono irónico o crítico cercano al lector", "Mayor objetividad", "Tono técnico", "Ninguno; es neutro"],
        0,
        "El coloquialismo añade actitud."
      ),
      mc(
        "¿En qué contexto es adecuada «Me costó un ojo de la cara»?",
        ["contándoselo a un amigo", "en una factura", "en un contrato", "en un informe contable"],
        0,
        "Expresión coloquial."
      ),
      toEs("The company made a serious mistake. (neutral)", "La empresa cometió un error grave.", "Registro neutro.", ["La empresa cometió un grave error.", "La compañía cometió un error grave."]),
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
            "Info es apócope coloquial."
          ),
        ]
      ),
    ],
    [
      fb("Corrige para un aviso oficial.", "Se ruega a los vecinos que dejen el portal ___ limpio. (el alumno puso: súper)", "muy", "Súper → muy."),
      fb("Corrige para un correo formal.", "Nos vemos en la reunión del ___. (el alumno puso: finde)", "fin de semana", "Finde → fin de semana."),
      ms(
        "¿Qué elementos sobran en un artículo académico?",
        ["o sea", "a tope", "no obstante", "en plan"],
        [0, 1, 3],
        "No obstante es un conector formal."
      ),
      mc(
        "Versión adecuada para una reseña académica:",
        ["El autor defiende una tesis sólida y bien documentada.", "El autor se lo curra un montón.", "El libro está chido.", "El autor mola mogollón."],
        0,
        "Registro académico."
      ),
      mc(
        "¿Dónde es aceptable «¡Qué pasada de concierto!»?",
        ["en un mensaje a un amigo", "en una crónica de un periódico serio", "en una memoria anual", "en un contrato"],
        0,
        "Expresión coloquial de España."
      ),
      toEs("I'm attaching the requested information. (formal)", "Adjunto la información solicitada.", "Sin apócopes.", ["Le adjunto la información solicitada.", "Adjunto la información que me solicitó."]),
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
            "Ustedes + tomar."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza.", "Coged vuestras cosas. → Tomen ___ cosas.", "sus", "Ustedes → sus."),
      fb("Neutraliza.", "Voy a por el coche. → Voy por el ___.", "auto", "Neutro: auto o carro."),
      fb("Neutraliza.", "¡Qué guay! → ¡Qué ___!", "bien", "Expresión transparente."),
      mc(
        "¿Qué frase está en español neutro?",
        ["¿Ustedes quieren un jugo?", "¿Queréis un zumo?", "¿Vos querés un jugo?", "¿Queréis un jugo, güey?"],
        0,
        "Ustedes + jugo."
      ),
      ms(
        "¿Qué cambios exige el neutro?",
        ["vosotros → ustedes", "móvil → celular", "tío → (eliminar)", "usted → vos"],
        [0, 1, 2],
        "El neutro no introduce voseo."
      ),
      toEs("Are you guys ready? Let's go. (neutral)", "¿Están listos? Vámonos.", "Ustedes.", ["¿Ya están listos? Vámonos.", "¿Están listos? Vamos."]),
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
            "Flipar → sorprender; cara dura → descaro."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza (se mantiene la conjetura).", "Estará hecho polvo. → Estará muy ___.", "cansado", "Hecho polvo = muy cansado."),
      fb("Neutraliza (se mantiene la hendida).", "Lo que me mola de este trabajo es el horario. → Lo que me ___ de este trabajo es el horario.", "gusta", "Molar → gustar."),
      fb("Mantén el subjuntivo.", "Lo que me fastidia es que nadie ___ nada. (decir)", "diga", "Emoción + que + subjuntivo."),
      mc(
        "Versión coloquial (España) de «Habrá estado muy ocupado»:",
        ["Habrá estado liadísimo.", "Ha estado muy ocupado seguro.", "Estaría muy ocupado ahora.", "Estuvo ocupado."],
        0,
        "Se mantiene el futuro perfecto."
      ),
      mc(
        "Neutraliza sin perder el énfasis: «Esto sí que mola.»",
        ["Esto sí que me gusta.", "Esto me gusta.", "Esto es algo.", "Esto quizás me gusta."],
        0,
        "Sí que se mantiene; mola → me gusta."
      ),
      toEs("What bothers me is that he didn't warn us. (neutral)", "Lo que me molesta es que no nos haya avisado.", "Hendida + subjuntivo.", ["Lo que me molesta es que no nos avisara."]),
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
            "En español: Estimado señor Gil:"
          ),
        ]
      ),
    ],
    [
      mc(
        "Escribes por primera vez a un organismo público sin nombre de destinatario:",
        ["Estimados señores:", "Hola, equipo:", "Querido amigo:", "¡Buenas!"],
        0,
        "Fórmula formal genérica."
      ),
      mc(
        "Cierre más formal:",
        ["Le saluda atentamente,", "Un saludo,", "Besos,", "Nos vemos,"],
        0,
        "Fórmula más solemne del cierre."
      ),
      fb("Completa el cierre.", "Sin otro ___, le saluda atentamente.", "particular", "Fórmula fija."),
      fb("Completa la apertura.", "___ señora López: (apertura formal estándar)", "Estimada", "Estimada + señora + apellido."),
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
      toEs("Dear Mr. Ruiz, (formal opening)", "Estimado señor Ruiz:", "Dos puntos tras el saludo.", ["Estimado Sr. Ruiz:", "Distinguido señor Ruiz:"]),
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
            "Lamento comunicarle que…"
          ),
        ]
      ),
    ],
    [
      fb("Transforma.", "Quiero pedir información. → Me ___ a usted para solicitar información.", "dirijo", "Dirigirse a alguien."),
      fb("Transforma.", "Le escribo por lo del pedido. → Le escribo en ___ con el pedido.", "relación", "En relación con."),
      fb("Transforma.", "Contesto a su correo del lunes. → En ___ a su correo del lunes…", "respuesta", "En respuesta a."),
      fb("Buena noticia.", "Tengo el ___ de comunicarle que ha sido seleccionada.", "gusto", "Tener el gusto de."),
      mc(
        "¿Qué apertura NO es adecuada en un correo formal?",
        ["Te escribo porque quería preguntarte una cosa.", "Me pongo en contacto con usted para…", "Le escribo con relación a…", "Por medio de la presente…"],
        0,
        "Tuteo y tono conversacional."
      ),
      toEs("I am writing to request an appointment.", "Me dirijo a usted para solicitar una cita.", "Fórmula de apertura.", ["Le escribo para solicitar una cita.", "Me pongo en contacto con usted para solicitar una cita."]),
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
            "Petición clara + plazo + cortesía."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el tono.", "Les ___ que procedan a la sustitución del artículo. (rogar; el alumno puso: exijo a gritos)", "ruego", "Rogar que + subjuntivo."),
      fb("Precisa.", "El artículo llegó ___ (el alumno puso: fatal).", "dañado", "Adjetivo preciso y neutro."),
      fb("Completa.", "Les agradecería que me lo ___ a la mayor brevedad. (enviar)", "enviaran", "Condicional + imperfecto de subjuntivo."),
      ms(
        "¿Qué elementos debe tener una reclamación eficaz?",
        ["número de pedido o referencia", "fecha de los hechos", "petición concreta", "insultos para dejar clara la molestia"],
        [0, 1, 2],
        "Hechos, datos y petición."
      ),
      mc(
        "¿Qué frase es demasiado vaga?",
        ["Hace un tiempo les compré una cosa que no va bien.", "El 3 de junio adquirí una lavadora modelo X-200.", "La factura n.º 889 recoge un cargo duplicado.", "El técnico no acudió a la cita del día 8."],
        0,
        "Sin fecha, producto ni problema concreto."
      ),
      toEs("I would be grateful if you could refund the amount.", "Les agradecería que me reembolsaran el importe.", "Condicional + subjuntivo.", ["Le agradecería que me reembolsara el importe.", "Les agradecería que me devolvieran el importe."]),
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
            "Adjetivo: concuerda con documentos."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Le ___ el mensaje que recibí ayer del proveedor. (mandar a otro un mensaje recibido, yo)", "reenvío", "Reenviar."),
      fb("Completa.", "Su consulta ha sido ___ al servicio técnico. (derivar formalmente)", "remitida", "Remitir = derivar."),
      fb("Completa (concordancia).", "Revise las facturas ___, por favor.", "adjuntas", "Concuerda con facturas."),
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
        "Adjunto como adverbio/fórmula fija."
      ),
      toEs("I am attaching my CV and a cover letter.", "Adjunto mi currículum y una carta de presentación.", "Adjuntar.", ["Le adjunto mi currículum y una carta de presentación.", "Adjunto mi CV y una carta de presentación."]),
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
            "Reiterar = volver a expresar."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Quisiera ___ la oportunidad de conocer a su equipo. (agradecer + le)", "agradecerle", "Agradecer + le (usted)."),
      fb("Completa.", "Quedo a la ___ de sus noticias.", "espera", "Quedar a la espera de."),
      fb("Completa.", "Quedo a su ___ para cualquier información adicional.", "disposición", "Quedar a disposición de alguien."),
      mc(
        "Orden lógico de los párrafos:",
        ["agradecimiento → recuerdo concreto → interés → disponibilidad", "disponibilidad → agradecimiento → interés → recuerdo", "interés → cierre → agradecimiento", "cierre → saludo → agradecimiento"],
        0,
        "Estructura del seguimiento."
      ),
      mc(
        "¿Qué detalle hace el correo más memorable?",
        ["Mencionar un tema concreto de la entrevista.", "Repetir el CV entero.", "Preguntar el salario en la primera línea.", "Escribir todo en mayúsculas."],
        0,
        "El recuerdo concreto personaliza el mensaje."
      ),
      toEs("Thank you for your time yesterday. (formal)", "Le agradezco el tiempo que me dedicó ayer.", "Agradecer + le.", ["Le agradezco su tiempo ayer.", "Gracias por el tiempo que me dedicó ayer."]),
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
            "Rogar que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (conector de adición).", "Le adjunto el contrato. ___, le envío el anexo II.", "Asimismo", "Asimismo = además."),
      fb("Completa (subjuntivo).", "Le solicitamos que ___ el formulario antes del día 15. (rellenar)", "rellene", "Solicitar que + subjuntivo."),
      fb("Completa.", "Nos gustaría que nos ___ una nueva fecha. (proponer, usted)", "propusiera", "Condicional + imperfecto de subjuntivo."),
      mc(
        "«El plazo ha vencido. ___, estudiaremos su caso de forma excepcional.»",
        ["No obstante", "Asimismo", "Por consiguiente", "Es decir"],
        0,
        "Contraste → no obstante."
      ),
      mc(
        "«Necesitamos su firma. A tal ___, le enviamos el documento.»",
        ["efecto", "caso", "fin de", "manera"],
        0,
        "A tal efecto = con ese fin."
      ),
      toEs("We would be grateful if you could confirm your attendance.", "Le agradeceríamos que confirmara su asistencia.", "Condicional + subjuntivo.", ["Les agradeceríamos que confirmaran su asistencia.", "Agradeceríamos que confirmara su asistencia."]),
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
            "Se impersonal + nominalización."
          ),
        ]
      ),
    ],
    [
      fb("Despersonaliza.", "Yo pienso que es necesario revisar la ley. → ___ necesario revisar la ley.", "Resulta", "Resulta/Parece necesario…"),
      fb("Despersonaliza.", "Voy a demostrar que… → El presente trabajo ___ demostrar que…", "pretende", "Sujeto no humano."),
      fb("Despersonaliza.", "Tengo que señalar que… → ___ señalar que…", "Cabe", "Cabe + infinitivo."),
      mc(
        "¿Qué frase es propia del registro académico?",
        ["Los resultados sugieren una correlación positiva.", "Yo creo que hay correlación, la verdad.", "Me parece que está clarísimo.", "Obviamente, tengo razón."],
        0,
        "Sujeto no humano + verbo atenuado."
      ),
      ms(
        "¿Qué recursos despersonalizan el discurso?",
        ["se + verbo", "plural de modestia", "sujeto no humano (este estudio…)", "yo opino que…"],
        [0, 1, 2],
        "«Yo opino» es personal."
      ),
      toEs("It has been shown that sleep improves memory.", "Se ha demostrado que el sueño mejora la memoria.", "Pasiva refleja.", ["Se ha comprobado que el sueño mejora la memoria.", "Está demostrado que el sueño mejora la memoria."]),
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
            "Suposición que se somete a prueba."
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
        "Anticipar la objeción."
      ),
      mc(
        "¿Cuál es la mejor tesis (clara y discutible)?",
        ["Las redes sociales deberían regularse para proteger a los menores.", "Las redes sociales existen.", "Hay muchas redes sociales.", "Las redes sociales son un tema."],
        0,
        "Afirmación que admite una postura contraria."
      ),
      fb("Completa.", "Para refutar el contraargumento: «Sin ___, esta objeción no tiene en cuenta…»", "embargo", "Sin embargo = contraste."),
      fb("Completa.", "Los datos ___ esta hipótesis: el 80 % de los casos coincide. (apoyar)", "apoyan", "Apoyar/respaldar una hipótesis."),
      toEs("It could be argued that the cost is too high.", "Podría objetarse que el coste es demasiado alto.", "Anticipar objeciones.", ["Podría argumentarse que el coste es demasiado alto.", "Podría objetarse que el costo es demasiado alto."]),
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
            "Condicional + en parte."
          ),
        ]
      ),
    ],
    [
      fb("Atenúa.", "Los resultados demuestran una relación. → Los resultados ___ una relación.", "sugieren", "Sugerir (menos rotundo que demostrar)."),
      fb("Atenúa.", "Es la causa principal. → ___ ser la causa principal.", "Podría", "Condicional atenuador."),
      fb("Atenúa.", "Todo ___ indicar que el fenómeno se repetirá. (parecer)", "parece", "Todo parece indicar que."),
      ms(
        "¿Qué expresiones atenúan?",
        ["en cierta medida", "posiblemente", "sin lugar a dudas", "cabría pensar que"],
        [0, 1, 3],
        "«Sin lugar a dudas» es rotundo."
      ),
      mc(
        "¿Qué frase es excesivamente rotunda para un ensayo?",
        ["Todos los jóvenes son adictos al móvil.", "Un porcentaje considerable de jóvenes hace un uso intensivo del móvil.", "Parece existir una dependencia creciente.", "Los datos apuntan a un uso excesivo."],
        0,
        "Generalización absoluta."
      ),
      toEs("These results could be explained by the small sample size.", "Estos resultados podrían explicarse por el reducido tamaño de la muestra.", "Condicional atenuador.", ["Estos resultados podrían deberse al reducido tamaño de la muestra.", "Estos resultados podrían explicarse por el pequeño tamaño de la muestra."]),
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
            "En definitiva = cierre."
          ),
        ]
      ),
    ],
    [
      mc(
        "«El presente trabajo se propone examinar si la semana laboral de cuatro días es viable.»",
        ["introducción", "conclusión", "refutación", "desarrollo"],
        0,
        "Presenta el objetivo."
      ),
      mc(
        "«Podría argumentarse que reduciría la producción; no obstante, los estudios piloto indican lo contrario.»",
        ["refutación", "introducción", "conclusión", "título"],
        0,
        "Objeción + refutación."
      ),
      mc(
        "«En segundo lugar, cabe mencionar la mejora en la salud mental de los empleados.»",
        ["desarrollo", "introducción", "conclusión", "refutación"],
        0,
        "Enumeración de argumentos."
      ),
      fb("Completa (adición en el desarrollo).", "A ello se ___ el ahorro energético de las oficinas.", "suma", "A ello se suma."),
      fb("Completa (conclusión).", "En ___, la propuesta resulta viable a medio plazo.", "suma", "En suma = en resumen."),
      ms(
        "¿Qué marcadores son propios de la conclusión?",
        ["en definitiva", "a modo de conclusión", "en primer lugar", "en suma"],
        [0, 1, 3],
        "«En primer lugar» abre el desarrollo."
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
            "Método = qué se hizo."
          ),
        ]
      ),
    ],
    [
      fb("Completa (objetivo).", "El presente estudio tiene como ___ analizar los hábitos de lectura.", "objetivo", "Tener como objetivo."),
      fb("Completa (método).", "Para ___, se analizaron 50 artículos de prensa.", "ello", "Para ello = con ese fin."),
      fb("Completa (resultados).", "Los resultados ___ que la lectura digital ha aumentado. (mostrar)", "muestran", "Los resultados muestran que."),
      mc(
        "Orden correcto del resumen:",
        ["objetivo → método → resultados → conclusión", "conclusión → objetivo → método", "método → conclusión → objetivo", "resultados → objetivo → método"],
        0,
        "Estructura estándar."
      ),
      mc(
        "¿Qué NO debe aparecer en un resumen académico?",
        ["anécdotas personales", "el objetivo", "los resultados principales", "la conclusión"],
        0,
        "El resumen es sintético e impersonal."
      ),
      toEs("These findings suggest that further research is needed.", "Estos hallazgos sugieren que se necesita más investigación.", "Cierre del resumen.", ["Estos hallazgos sugieren que es necesaria más investigación.", "Estos resultados sugieren que se necesita más investigación.", "Estos hallazgos sugieren que hace falta más investigación."]),
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
            "Privatizar → privatización."
          ),
        ]
      ),
    ],
    [
      fb("Nominaliza.", "Porque bajaron los tipos de interés… → Debido al ___ de los tipos de interés…", "descenso", "Bajar → descenso."),
      fb("Nominaliza.", "Antes de que se publicara el informe… → Antes de la ___ del informe…", "publicación", "Publicar → publicación."),
      fb("Nominaliza.", "Si se reduce el gasto… → La ___ del gasto…", "reducción", "Reducir → reducción."),
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
        "Nominalización + léxico preciso."
      ),
      toEs("After the reform was implemented, costs fell.", "Tras la implantación de la reforma, los costes disminuyeron.", "Nominalización.", ["Tras la aplicación de la reforma, los costes disminuyeron.", "Tras la implementación de la reforma, los costos bajaron.", "Tras la implantación de la reforma, los costes bajaron."]),
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
            "Insistir en que + subjuntivo = exigir."
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
        "Comprender que + subjuntivo = considerar comprensible."
      ),
      mc(
        "«Al leer la carta, comprendió que lo ___ engañado durante años.»",
        ["habían", "hubieran", "hayan", "habrán"],
        0,
        "Comprender que + indicativo = darse cuenta."
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
            "Reduplicativa: llame quien llame."
          ),
        ]
      ),
    ],
    [
      fb("Completa la concesiva.", "Por muy cansado que ___, siempre termina el trabajo. (estar, él)", "esté", "Por muy + adjetivo + que + subjuntivo."),
      fb("Completa la fórmula.", "___ o no, mañana tenemos que madrugar. (querer, tú)", "Quieras", "Quieras o no."),
      fb("Completa (pasado).", "Por más que ___, nunca sacaba buenas notas. (estudiar, él)", "estudiaba", "Por más que + indicativo: hecho real y conocido."),
      mc(
        "Parafrasea «Cueste lo que cueste, lo conseguiremos».",
        ["Sin importar el precio o el esfuerzo, lo conseguiremos.", "Si cuesta poco, lo conseguiremos.", "Como cuesta mucho, no lo conseguiremos.", "Lo conseguiremos porque es barato."],
        0,
        "Concesiva universal."
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
      toEs("Whatever happens, call me.", "Pase lo que pase, llámame.", "Reduplicativa.", ["Pase lo que pase, llámame por favor.", "Ocurra lo que ocurra, llámame."]),
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
            "Como + subjuntivo = condición (amenaza)."
          ),
        ]
      ),
    ],
    [
      fb("Relativo.", "Necesitamos un piso que ___ ascensor. (tener)", "tenga", "Antecedente no concreto."),
      fb("Temporal.", "En cuanto ___ los resultados, os aviso. (saber, yo)", "sepa", "Acción futura → subjuntivo."),
      fb("No es que.", "No es que no te ___, es que necesito tiempo. (querer, yo)", "quiera", "No es que + subjuntivo."),
      fb("El hecho de que.", "El hecho de que ___ rico no le da derecho a todo. (ser, él)", "sea", "El hecho de que + subjuntivo."),
      mc(
        "«Te lo explico despacio para que lo ___.»",
        ["entiendas", "entiendes", "entender", "entenderás"],
        0,
        "Para que + subjuntivo (sujetos distintos)."
      ),
      mc(
        "«Como ___ tanto, nos quedamos en casa.»",
        ["llovía", "lloviera", "llueva", "haya llovido"],
        0,
        "Como causal (al inicio, con indicativo) = porque."
      ),
      toEs("It's not that I don't want to; I can't.", "No es que no quiera; es que no puedo.", "No es que + subjuntivo.", ["No es que no quiera, es que no puedo.", "No es que no quiera; no puedo."]),
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
            "Protestar → protesta."
          ),
        ]
      ),
    ],
    [
      fb("Comprime.", "Los precios del alquiler bajan. → ___ de los precios del alquiler.", "Bajada", "Bajar → bajada (o descenso)."),
      fb("Comprime.", "Han cerrado la frontera por la tormenta. → ___ la frontera por la tormenta.", "Cerrada", "Participio de titular, concuerda con frontera."),
      fb("Comprime.", "Dimite la ministra de Sanidad. → ___ de la ministra de Sanidad.", "Dimisión", "Dimitir → dimisión."),
      mc(
        "Descomprime: «Rescatados tres montañeros en los Pirineos»",
        ["Han rescatado a tres montañeros en los Pirineos.", "Tres montañeros rescatan en los Pirineos.", "Los Pirineos rescatan a tres montañeros.", "Rescatar tres montañeros es en los Pirineos."],
        0,
        "Participio → pasiva o activa impersonal."
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
      toEs("Rise in unemployment in the south.", "Aumento del paro en el sur.", "Titular nominal.", ["Subida del paro en el sur.", "Aumento del desempleo en el sur."]),
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
            "Verbo directo."
          ),
        ]
      ),
    ],
    [
      fb("Desnominaliza.", "Procedimos a la firma del contrato. → ___ el contrato.", "Firmamos", "Firma → firmar."),
      fb("Desnominaliza.", "Se hizo la entrega de los premios. → Se ___ los premios.", "entregaron", "Pasiva refleja plural."),
      fb("Desnominaliza.", "Tomaron la decisión de marcharse. → ___ marcharse.", "Decidieron", "Tomar la decisión → decidir."),
      mc(
        "¿Qué frase es más legible?",
        ["El comité aprobó el presupuesto.", "Por parte del comité se procedió a la aprobación del presupuesto.", "Se llevó a cabo la aprobación presupuestaria por parte del comité.", "La aprobación del presupuesto fue efectuada por el comité."],
        0,
        "Sujeto + verbo + objeto."
      ),
      ms(
        "¿Qué expresiones suelen inflar el texto innecesariamente?",
        ["proceder a la realización de", "llevar a cabo la ejecución de", "efectuar la limpieza de", "revisar"],
        [0, 1, 2],
        "«Revisar» es el verbo directo."
      ),
      toEs("They cancelled the meeting. (plain style)", "Cancelaron la reunión.", "Verbo directo.", ["Se canceló la reunión.", "Suspendieron la reunión."]),
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
            "Lo + adjetivo masculino singular."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "___ que dimitiera tan pronto sorprendió a todos.", "El", "El que + subjuntivo como sujeto."),
      fb("Completa.", "Lo ___ de todo fue la espera. (peor)", "peor", "Lo peor."),
      fb("Completa.", "El ___ de las olas me relaja. (sonar, infinitivo)", "sonar", "Infinitivo nominalizado."),
      mc(
        "«El que ___ tarde otra vez no es buena señal.» (llegar, él)",
        ["llegue", "llega", "llegará", "llegar"],
        0,
        "El que + subjuntivo."
      ),
      ms(
        "¿Qué frases contienen una nominalización?",
        ["Lo difícil fue empezar.", "Su constante mentir cansaba a todos.", "Me gusta la playa.", "El que lo supieras me alivió."],
        [0, 1, 3],
        "«La playa» es un sustantivo común."
      ),
      toEs("The best thing is that it's free.", "Lo mejor es que es gratis.", "Lo + adjetivo.", ["Lo mejor es que es gratuito."]),
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
            "Simultaneidad (entró mientras silbaba)."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Recibí una carta ___ informaba del cambio. (el alumno puso: carta informando)", "que", "Gerundio especificativo → relativo."),
      fb("Corrige.", "Se graduó en 2010 y ___ a trabajar en Chile en 2012. (el alumno puso: …, empezando a trabajar)", "empezó", "Posterioridad → verbo conjugado."),
      mc(
        "Versión correcta de «Hubo un incendio, resultando heridas tres personas»:",
        ["Hubo un incendio en el que resultaron heridas tres personas.", "Hubo un incendio resultando tres heridos.", "Resultando heridas tres personas, hubo un incendio.", "Hubo un incendio, resultado heridas tres."],
        0,
        "Se sustituye el gerundio por una oración conjugada."
      ),
      ms(
        "¿Qué gerundios son correctos?",
        ["Llegó sonriendo.", "Estando enfermo, no pudo venir.", "Una caja conteniendo joyas.", "Viendo el panorama, decidimos irnos."],
        [0, 1, 3],
        "«Caja conteniendo» es especificativo (incorrecto)."
      ),
      fb("Completa (causal, correcto).", "___ tan tarde, cogimos un taxi. (ser)", "Siendo", "Gerundio causal."),
      toEs("They published a decree that regulates prices.", "Publicaron un decreto que regula los precios.", "Relativo, no gerundio.", ["Se publicó un decreto que regula los precios.", "Publicaron un decreto que regulaba los precios."]),
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
            "Acabar + gerundio = resultado final."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Lleva dos horas ___ el teléfono. (buscar)", "buscando", "Llevar + gerundio."),
      fb("Completa.", "Cuando lo vio, se puso ___ llorar.", "a", "Ponerse a = inicio."),
      fb("Completa.", "Hace un año que dejó ___ fumar.", "de", "Dejar de = fin."),
      mc(
        "«Anda ___ mentiras sobre todo el mundo.»",
        ["contando", "a contar", "de contar", "contar"],
        0,
        "Andar + gerundio (con matiz peyorativo)."
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
      toEs("She has been working here for ten years.", "Lleva diez años trabajando aquí.", "Llevar + gerundio.", ["Lleva trabajando aquí diez años.", "Hace diez años que trabaja aquí."]),
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
            "Infinitivo como sujeto y tras preposición."
          ),
        ]
      ),
    ],
    [
      fb("Traduce el -ing.", "Después de ___ la noticia, llamó a su hermana. (leer)", "leer", "Preposición + infinitivo."),
      fb("Traduce el -ing.", "___ idiomas abre muchas puertas. (aprender)", "Aprender", "Infinitivo sujeto."),
      fb("Traduce el -ing.", "Estoy harto de ___ siempre lo mismo. (oír)", "oír", "De + infinitivo."),
      mc(
        "«Thank you for coming.»",
        ["Gracias por venir.", "Gracias por viniendo.", "Gracias para venir.", "Gracias de viniendo."],
        0,
        "Por + infinitivo."
      ),
      ms(
        "¿Qué frases están bien?",
        ["Nadar es mi deporte favorito.", "Nadando es mi deporte favorito.", "Me encanta cocinar para mis amigos.", "Antes de salir, apaga la luz."],
        [0, 2, 3],
        "El gerundio no puede ser sujeto."
      ),
      toEs("Learning a language takes time.", "Aprender un idioma lleva tiempo.", "Infinitivo sujeto.", ["Aprender un idioma requiere tiempo.", "Aprender una lengua lleva tiempo."]),
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
            "Concordancia con el sujeto paciente plural."
          ),
        ]
      ),
    ],
    [
      fb("Pasiva perifrástica.", "Los bomberos rescataron a la familia. → La familia fue ___ por los bomberos.", "rescatada", "Participio concuerda con familia."),
      fb("Pasiva refleja.", "El ayuntamiento abrirá dos parques. → Se ___ dos parques. (inaugurar, futuro)", "inaugurarán", "Pasiva refleja en plural."),
      fb("Impersonal con persona.", "Evacuaron a los vecinos. → Se ___ a los vecinos.", "evacuó", "Se + singular + a + persona."),
      mc(
        "«Las obras ___ terminadas en marzo.» (pasiva de resultado)",
        ["estarán", "serán estando", "se estarán", "habrán estando"],
        0,
        "Estar + participio = resultado."
      ),
      mc(
        "¿Qué versión omite el agente de forma natural?",
        ["Se aprobó la reforma por unanimidad.", "La reforma fue aprobada por el Congreso.", "El Congreso aprobó la reforma.", "El Congreso fue quien aprobó la reforma."],
        0,
        "Pasiva refleja sin agente."
      ),
      toEs("Three suspects were arrested yesterday.", "Tres sospechosos fueron detenidos ayer.", "Pasiva perifrástica.", ["Ayer fueron detenidos tres sospechosos.", "Ayer se detuvo a tres sospechosos.", "Se detuvo ayer a tres sospechosos."]),
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
            "Se + le + verbo en plural (las gafas)."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se ___ quemó la cena mientras hablaba por teléfono. (a mí)", "me", "Dativo de la persona afectada."),
      fb("Completa (concordancia).", "Se les ___ los billetes en el taxi. (perder, pretérito)", "perdieron", "Concuerda con billetes."),
      fb("Completa.", "¿Cómo se os ___ semejante idea? (ocurrir, pretérito)", "ocurrió", "Ocurrírsele algo a alguien."),
      mc(
        "¿Qué frase admite responsabilidad?",
        ["Rompí la ventana con la pelota.", "Se me rompió la ventana.", "Se rompió la ventana.", "Se nos rompió la ventana."],
        0,
        "Construcción activa transitiva."
      ),
      ms(
        "¿Cuáles están bien construidas?",
        ["Se me escapó el perro.", "Se me escaparon los perros.", "Se me escapé el perro.", "Me se escapó el perro."],
        [0, 1],
        "Orden: se + me; el verbo concuerda con el sujeto."
      ),
      toEs("I dropped my phone. (accidental)", "Se me cayó el móvil.", "Se accidental.", ["Se me cayó el celular.", "Se me cayó el teléfono."]),
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
            "Con pronominales se usa uno."
          ),
        ]
      ),
    ],
    [
      fb("3.ª plural indeterminada.", "___ que el restaurante ha cerrado. (decir)", "Dicen", "Agente indeterminado."),
      fb("Se impersonal.", "En este país ___ cena muy tarde.", "se", "Se impersonal."),
      fb("Uno.", "___ nunca sabe lo que puede pasar.", "Uno", "Impersonal que incluye al hablante."),
      mc(
        "¿Cuál es la forma más adecuada para un informe?",
        ["Se recomienda revisar los datos.", "Uno recomienda revisar los datos.", "Recomiendas revisar los datos.", "La gente recomienda revisar los datos."],
        0,
        "Se impersonal = registro formal."
      ),
      mc(
        "«Aquí trabajas doce horas y nadie te da las gracias.» El tú es…",
        ["genérico (cualquier persona)", "el interlocutor concreto", "un error", "plural"],
        0,
        "Tú genérico coloquial."
      ),
      toEs("They're knocking at the door.", "Llaman a la puerta.", "3.ª plural impersonal.", ["Están llamando a la puerta.", "Tocan a la puerta.", "Tocan la puerta."]),
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
            "Indefinido → pluscuamperfecto; ayer → el día anterior."
          ),
        ]
      ),
    ],
    [
      fb("Desplaza el deíctico.", "«Hoy no puedo» → Dijo que ___ día no podía.", "aquel", "Hoy → aquel día."),
      fb("Desplaza el tiempo.", "«Lo terminaré pronto» → Aseguró que lo ___ pronto.", "terminaría", "Futuro → condicional."),
      fb("Desplaza el imperativo.", "«Cierra la puerta» → Me pidió que ___ la puerta.", "cerrara", "Imperativo → imperfecto de subjuntivo."),
      fb("Desplaza el lugar.", "«Te espero aquí» → Me dijo que me esperaba ___.", "allí", "Aquí → allí."),
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
      toEs("She told me she would come back the next day.", "Me dijo que volvería al día siguiente.", "Futuro → condicional.", ["Me dijo que regresaría al día siguiente.", "Me contó que volvería al día siguiente."]),
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
            "Exclamación del personaje sin verbo introductor, en 3.ª persona e imperfecto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Juan dijo que no pensaba volver.»",
        ["indirecto", "directo", "indirecto libre", "monólogo en presente"],
        0,
        "Verbo introductor + que."
      ),
      mc(
        "«—No pienso volver —dijo Juan.»",
        ["directo", "indirecto", "indirecto libre", "narración pura"],
        0,
        "Guion y palabras literales."
      ),
      mc(
        "«Juan cerró la maleta. No, no pensaba volver. ¿Para qué? ¿Para que lo humillaran otra vez?»",
        ["indirecto libre", "directo", "indirecto", "resumen objetivo"],
        0,
        "Voz del personaje dentro de la narración."
      ),
      ms(
        "¿Qué marcas son típicas del estilo indirecto libre?",
        ["preguntas y exclamaciones del personaje", "tiempos del pasado del narrador", "ausencia de verbo introductor", "comillas y guiones"],
        [0, 1, 2],
        "Las comillas son del estilo directo."
      ),
      fb("Pasa a indirecto libre.", "Pensó: «¿Me habrá mentido?» → ¿Le ___ mentido?", "habría", "Futuro perfecto → condicional perfecto."),
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
            "Negar que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Elige el modo.", "«Deberías descansar» → Me aconsejó que ___. (descansar)", "descansara", "Aconsejar que + subjuntivo."),
      fb("Elige el modo.", "«Sí, fui yo» → Admitió que ___ sido él.", "había", "Admitir que + indicativo."),
      fb("Elige el modo.", "«Siempre llegas tarde» → Me reprochó que siempre ___ tarde. (llegar)", "llegara", "Reprochar que + subjuntivo."),
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
        "Proponer que + subjuntivo."
      ),
      toEs("He promised he would pay me back.", "Prometió que me devolvería el dinero.", "Prometer + condicional.", ["Me prometió que me devolvería el dinero.", "Prometió devolverme el dinero."]),
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
            "Estar verde = inexperto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Ese hombre ___ muy orgulloso: nunca pide ayuda.", "es", "Ser orgulloso = soberbio."),
      fb("Completa.", "Me tienes negra con tus retrasos: ya ___ negra.", "estoy", "Estar negro = harto."),
      fb("Completa.", "¿___ despierto? Te oigo moverte. (tú)", "Estás", "Estar despierto = no dormido."),
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
      toEs("This soup is delicious.", "Esta sopa está riquísima.", "Estar rico = sabroso.", ["Esta sopa está muy rica.", "Esta sopa está deliciosa.", "Esta sopa está rica."]),
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
            "Evento → ser."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En la fiesta ___ más de cien invitados. (haber, imperfecto)", "había", "Haber impersonal: singular."),
      fb("Completa.", "Tus gafas ___ en la mesilla.", "están", "Objeto identificado → estar."),
      fb("Completa.", "La boda ___ en una ermita junto al mar. (pretérito)", "fue", "Evento → ser."),
      fb("Completa.", "¿___ algún restaurante vegetariano en este barrio?", "Hay", "Existencia no identificada."),
      ms(
        "¿Qué frases son correctas?",
        ["Hubo varios accidentes ayer.", "Hubieron varios accidentes ayer.", "El accidente fue en la autopista.", "El accidente estuvo en la autopista."],
        [0, 2],
        "Haber impersonal en singular; evento → ser."
      ),
      toEs("There were a lot of people at the concert.", "Había mucha gente en el concierto.", "Haber impersonal.", ["Hubo mucha gente en el concierto.", "En el concierto había mucha gente."]),
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
            "Estado resultante → estar."
          ),
        ]
      ),
    ],
    [
      fb("Completa (acción).", "El ladrón ___ detenido por dos agentes. (pretérito)", "fue", "Pasiva de acción con agente."),
      fb("Completa (estado).", "El problema ya ___ resuelto; no te preocupes.", "está", "Estado resultante."),
      fb("Completa (acción).", "La ley ___ aprobada ayer por el Parlamento.", "fue", "Acción puntual + agente."),
      fb("Completa (estado).", "Todo el texto ___ escrito en latín.", "está", "Característica resultante."),
      mc(
        "¿Qué frase describe una acción, no un estado?",
        ["El edificio fue demolido en 2015.", "El edificio está demolido.", "El edificio estaba en ruinas.", "El edificio está vacío."],
        0,
        "Ser + participio + fecha puntual."
      ),
      toEs("The windows were broken when we arrived.", "Las ventanas estaban rotas cuando llegamos.", "Estado resultante.", ["Cuando llegamos, las ventanas estaban rotas."]),
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
            "Enamorarse de → de la que."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Esa es la ciudad ___ la que siempre he soñado.", "con", "Soñar con."),
      fb("Completa.", "Es un tema ___ el que no me gusta hablar.", "del", "Hablar de + el que → del que."),
      fb("Completa.", "Son los recursos ___ los que contamos.", "con", "Contar con."),
      fb("Completa.", "Es el error ___ el que más me arrepiento.", "del", "Arrepentirse de."),
      mc(
        "Corrige: «Es el amigo que te hablé.»",
        ["Es el amigo del que te hablé.", "Es el amigo que te hablé de.", "Es el amigo quien te hablé.", "Es el amigo cual te hablé."],
        0,
        "Hablar de alguien → del que."
      ),
      toEs("That's the job I applied for.", "Ese es el puesto al que me presenté.", "Presentarse a.", ["Ese es el trabajo al que me presenté.", "Ese es el puesto que solicité."]),
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
            "Acordarse de / recordar (sin de)."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se negó ___ firmar el acuerdo.", "a", "Negarse a."),
      fb("Completa.", "No te burles ___ él; lo está pasando mal.", "de", "Burlarse de."),
      fb("Completa.", "Se ha empeñado ___ estudiar medicina.", "en", "Empeñarse en."),
      fb("Completa.", "No me atrevo ___ decírselo.", "a", "Atreverse a."),
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
      toEs("I forgot to buy bread.", "Se me olvidó comprar pan.", "Olvidarse (accidental).", ["Me olvidé de comprar pan.", "Olvidé comprar pan."]),
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
            "«Todavía no me atrevo a conducir»."
          ),
        ]
      ),
    ],
    [
      fb("Completa como en la carta.", "Pienso mucho ___ ti.", "en", "Pensar en."),
      fb("Completa.", "Mi jefe confía ___ mí.", "en", "Confiar en."),
      fb("Completa.", "Me he acostumbrado ___ madrugar.", "a", "Acostumbrarse a."),
      fb("Completa.", "Sueño ___ volver a veros.", "con", "Soñar con."),
      mc(
        "«Sueño con que vengas» lleva subjuntivo porque…",
        ["expresa un deseo", "es una pregunta", "es un hecho pasado", "el sujeto es el mismo"],
        0,
        "Deseo con sujetos distintos → subjuntivo."
      ),
      toEs("I've finally decided to write to you.", "Por fin me he decidido a escribirte.", "Decidirse a.", ["Por fin me decidí a escribirte.", "Por fin he decidido escribirte."]),
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
            "Dos pronombres → esdrújula con tilde."
          ),
        ]
      ),
    ],
    [
      fb("Forma el imperativo.", "Vení y ___ a mi lado. (sentarse, vos)", "sentate", "Un pronombre → sin tilde."),
      fb("Forma el imperativo.", "Si tenés el libro, ___. (prestar + me + lo, vos)", "prestámelo", "Dos pronombres → tilde."),
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
        "Un pronombre sin tilde; dos con tilde."
      ),
      toEs("Tell me the truth. (vos)", "Decime la verdad.", "Decí + me.", ["Decime la verdad, por favor."]),
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
            "Laburar = trabajar."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué propone Martina?",
        ["Que Juli vaya a su casa el domingo.", "Cancelar el asado.", "Ir juntas al asado.", "Salir a cenar el sábado."],
        0,
        "«¿Vos por qué no venís a casa el domingo?»"
      ),
      mc(
        "«Tranqui» significa…",
        ["con calma", "rápido", "en silencio", "temprano"],
        0,
        "Apócope coloquial de tranquilo/tranquilamente."
      ),
      fb("Completa como en el audio.", "Mirá, te ___: al final no puedo ir. (contar, yo)", "cuento", "Contar → cuento."),
      fb("Completa como en el audio.", "¿Vos por qué no ___ a casa? (venir)", "venís", "Venir → venís."),
      ms(
        "¿Qué palabras son rioplatenses coloquiales?",
        ["laburar", "re", "dale", "vale"],
        [0, 1, 2],
        "«Vale» es típico de España."
      ),
      toEs("Let me know, okay? (vos)", "Avisame, ¿dale?", "Imperativo voseante + dale.", ["Avisame, ¿sí?", "Avisame, ¿de acuerdo?"]),
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
            "El futuro no cambia: podrás."
          ),
        ]
      ),
    ],
    [
      fb("Presente (cambia).", "¿Vos ___ ir mañana? (poder)", "podés", "Presente voseante."),
      fb("Imperfecto (no cambia).", "Cuando eras chico, ¿vos ___ en Rosario? (vivir)", "vivías", "Imperfecto igual que tú."),
      fb("Condicional (no cambia).", "¿Vos qué ___ en mi lugar? (hacer)", "harías", "Condicional igual que tú."),
      fb("Imperativo (cambia).", "___ paciencia, ya casi terminamos. (tener, vos)", "Tené", "Imperativo voseante."),
      ms(
        "¿Qué tiempos tienen forma propia en el voseo rioplatense culto?",
        ["presente de indicativo", "imperativo afirmativo", "futuro", "pretérito indefinido"],
        [0, 1],
        "El resto coincide con tú."
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
            "Aunque + subjuntivo si el hecho no está confirmado."
          ),
        ]
      ),
    ],
    [
      fb("Corrige (gerundio).", "Envió una carta que ___ su dimisión. (el alumno puso: carta anunciando)", "anunciaba", "Gerundio especificativo → relativo."),
      fb("Corrige (régimen).", "Se enamoró ___ su vecina. (el alumno puso: con)", "de", "Enamorarse de."),
      fb("Corrige (hendida).", "Fue en Quito ___ nos conocimos. (el alumno puso: que)", "donde", "Lugar → donde."),
      fb("Corrige (estilo indirecto).", "Me pidió que la ___ al día siguiente. (el alumno puso: llamo)", "llamara", "Pedir que + imperfecto de subjuntivo."),
      fb("Corrige (voseo).", "Vos ___ razón, che. (el alumno puso: tienes)", "tenés", "Voseo: tenés."),
      mc(
        "¿Dónde está el error? «Lo que me preocupan son las fechas.»",
        ["preocupan → preocupa", "Lo → Los", "son → es", "las → los"],
        0,
        "Lo que + verbo en singular."
      ),
      mc(
        "¿Dónde está el error? «Se vendió todos los pisos en una semana.»",
        ["vendió → vendieron", "Se → Le", "todos → todo", "en → por"],
        0,
        "Pasiva refleja: concordancia con pisos."
      ),
      ms(
        "¿Qué frases están bien?",
        ["Le agradecería que me respondiera pronto.", "Me acuerdo de aquel viaje.", "Siendo las diez, salimos.", "Pienso de que tienes razón."],
        [0, 1, 2],
        "«Pienso de que» es dequeísmo."
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
            "Nominalización + atenuación."
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
      fb("Registro formal.", "Lamento ___ que la entrega se retrasará. (comunicar + le)", "comunicarle", "Fórmula formal."),
      fb("Registro académico.", "La ___ de fondos explicaría el retraso. (faltar, sustantivo)", "falta", "Nominalización."),
      fb("Registro coloquial (España).", "No tenemos ni un duro, o ___, estamos sin dinero.", "sea", "O sea = reformulación coloquial."),
      mc(
        "¿Qué frase mezcla registros de forma inadecuada?",
        ["Estimada directora: el proyecto va fatal, tía.", "Estimada directora: el proyecto presenta dificultades.", "Oye, el proyecto va fatal.", "El proyecto presenta dificultades significativas."],
        0,
        "Apertura formal + cierre coloquial."
      ),
      mc(
        "Versión neutra para un comunicado de prensa:",
        ["La inauguración se aplaza hasta nuevo aviso.", "Lo de la inauguración se va al garete.", "Pues nada, sin inauguración.", "Mira, la inauguración, ni de coña."],
        0,
        "Registro neutro."
      ),
      toEs("We regret to inform you that the event has been cancelled.", "Lamentamos comunicarle que el evento ha sido cancelado.", "Registro formal.", ["Lamentamos informarle de que el evento ha sido cancelado.", "Lamentamos comunicarles que el evento se ha cancelado.", "Lamentamos informarle que el evento ha sido cancelado."]),
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
            "Por mucho que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      toEs("What surprises me is how calm she is.", "Lo que me sorprende es lo tranquila que está.", "Hendida + lo + adj + que.", ["Lo que me sorprende es lo tranquila que es.", "Me sorprende lo tranquila que está."]),
      toEs("I ran out of patience.", "Se me acabó la paciencia.", "Se accidental.", ["Se me agotó la paciencia."]),
      toEs("They must have left already.", "Ya se habrán ido.", "Futuro perfecto de conjetura.", ["Ya se habrán marchado.", "Ya deben de haberse ido.", "Se habrán ido ya."]),
      toEn("Es de eso de lo que quería hablarte.", "That's what I wanted to talk to you about.", "Hendida con preposición.", ["That is what I wanted to talk to you about.", "It's that that I wanted to talk to you about."]),
      toEn("Como no llegues a tiempo, nos vamos sin ti.", "If you don't arrive on time, we're leaving without you.", "Como + subjuntivo = condición.", ["If you're not on time, we're leaving without you.", "If you don't get here on time, we'll leave without you."]),
      toEn("Por más que lo intento, no me sale.", "However hard I try, I can't do it.", "Por más que + indicativo (hecho real).", ["No matter how hard I try, I can't do it.", "However much I try, I can't get it right."]),
      toEs("It's not that I don't care; I'm exhausted.", "No es que no me importe; es que estoy agotado.", "No es que + subjuntivo.", ["No es que no me importe, es que estoy agotado.", "No es que no me importe; estoy agotada."]),
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
            "Opinión negada → subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Me alegro de ___ aquí contigo. (estar, yo)", "estar", "Mismo sujeto → infinitivo."),
      fb("Elige.", "Me alegro de que ___ aquí conmigo. (estar, tú)", "estés", "Sujetos distintos + emoción."),
      fb("Elige.", "Está claro que nos ___ mentido. (haber, ellos)", "han", "Certeza → indicativo."),
      fb("Elige.", "No está claro que nos ___ mentido. (haber, ellos)", "hayan", "Certeza negada → subjuntivo."),
      fb("Elige.", "Conozco a alguien que ___ tres idiomas. (hablar)", "habla", "Antecedente real."),
      fb("Elige.", "¿Conoces a alguien que ___ japonés? (hablar)", "hable", "Antecedente desconocido."),
      mc(
        "«Cuando ___ jubilado, viajaré por Asia.»",
        ["esté", "estoy", "estaré", "estaría"],
        0,
        "Cuando + futuro → subjuntivo."
      ),
      mc(
        "«Ojalá me lo ___ antes; ahora ya es tarde.»",
        ["hubieras dicho", "has dicho", "dijeras", "dirás"],
        0,
        "Deseo imposible sobre el pasado → pluscuamperfecto de subjuntivo."
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
            "Consecuencia."
          ),
        ]
      ),
    ],
    [
      mc(
        "[4] introduce la conclusión:",
        ["Por todo ello,", "Aun así,", "Por ejemplo,", "En cambio,"],
        0,
        "Conclusión."
      ),
      mc(
        "[5] añade una restricción:",
        ["ahora bien", "por consiguiente", "en primer lugar", "así pues"],
        0,
        "Ahora bien = restricción u objeción."
      ),
      fb("Completa con un conector de reformulación.", "El turismo es estacional; es ___, se concentra en verano.", "decir", "Es decir."),
      fb("Completa con un conector de ejemplificación.", "Algunas ciudades, ___ ejemplo Ámsterdam, ya lo han regulado.", "por", "Por ejemplo."),
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
        "Por ende = consecuencia."
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
            "Ser + elemento + relativo + resto."
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
            "Concordancia en plural."
          ),
        ]
      ),
    ],
    [
      fb("Nominaliza.", "Cuando llegó el presidente… → Tras la ___ del presidente…", "llegada", "Llegar → llegada."),
      fb("Estilo indirecto.", "«No volveré» → Dijo que no ___.", "volvería", "Futuro → condicional."),
      fb("Tú → usted.", "Pasa, siéntate. → Pase, ___.", "siéntese", "Imperativo de usted."),
      fb("Tú → vos.", "¿Quieres venir? → ¿___ venir?", "Querés", "Voseo."),
      fb("Activa → pasiva perifrástica.", "El jurado premió la novela. → La novela fue ___ por el jurado.", "premiada", "Participio concordado."),
      fb("Neutra → hendida.", "Llegaron tarde por el tráfico. → Fue por el tráfico por lo ___ llegaron tarde.", "que", "Hendida causal: por lo que."),
      mc(
        "Probabilidad: «Probablemente estaba dormido.» →",
        ["Estaría dormido.", "Estará dormido.", "Habrá estado dormido mañana.", "Esté dormido."],
        0,
        "Pasado probable → condicional."
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
            "«Al día siguiente presentaría su dimisión»."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Quién se habría creído que era…?» es un ejemplo de…",
        ["estilo indirecto libre", "estilo directo", "pasiva refleja", "voseo"],
        0,
        "Pregunta del personaje sin verbo introductor."
      ),
      mc(
        "«Se habría creído» expresa…",
        ["indignación y conjetura sobre el pasado", "una orden", "una condición real", "un hecho seguro"],
        0,
        "Condicional perfecto de conjetura con matiz indignado."
      ),
      mc(
        "«Fue en ese momento cuando lo decidió» es una…",
        ["oración hendida", "pasiva refleja", "concesiva", "perífrasis"],
        0,
        "Ser + elemento + cuando."
      ),
      mc(
        "¿Por qué «esforzara» está en subjuntivo?",
        ["Por mucho que + subjuntivo (concesiva universal)", "Porque es una orden", "Porque es futuro", "Porque hay negación"],
        0,
        "Concesiva."
      ),
      fb("Completa según el texto.", "Lo que más le dolía era haber tardado tanto en darse ___.", "cuenta", "Darse cuenta."),
      ms(
        "¿Qué recursos del C1 aparecen en el texto?",
        ["hendida", "estilo indirecto libre", "concesiva con por mucho que", "voseo"],
        [0, 1, 2],
        "No hay voseo."
      ),
      toEn("Por mucho que se esforzara, nunca era suficiente.", "However hard she tried, it was never enough.", "Concesiva.", ["No matter how hard she tried, it was never enough.", "However much she tried, it was never enough."]),
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
            "Plazo → para."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Me cambió el libro ___ un disco.", "por", "Intercambio."),
      fb("Completa.", "___ ser tan joven, habla con mucha madurez.", "Para", "Contraste con lo esperable."),
      fb("Completa.", "El proyecto consiste ___ reducir el consumo.", "en", "Consistir en."),
      fb("Completa.", "Todo depende ___ lo que decida el comité.", "de", "Depender de."),
      fb("Completa.", "No me atrevo ___ preguntárselo.", "a", "Atreverse a."),
      fb("Completa.", "El cuadro fue pintado ___ Goya.", "por", "Agente de la pasiva."),
      fb("Completa.", "___ mí, es la mejor opción.", "Para", "Opinión."),
      fb("Completa.", "Paseamos ___ el casco antiguo toda la tarde.", "por", "A través de."),
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
            "Conjetura presente."
          ),
        ]
      ),
    ],
    [
      fb("Conjetura.", "—¿Por qué no vino ayer? —___ enfermo. (estar)", "Estaría", "Pasado → condicional."),
      fb("Conjetura.", "—La cocina huele a quemado. —Se le ___ quemado la cena. (haber)", "habrá", "Futuro perfecto."),
      fb("Concesión.", "___ muy famoso, pero conmigo es un encanto. (ser)", "Será", "Futuro concesivo."),
      fb("Énfasis.", "¡No te imaginas lo ___ que estaba la carretera! (peligroso)", "peligrosa", "Concordancia."),
      fb("Énfasis.", "Esto ___ que no lo pienso tolerar.", "sí", "Sí que enfático."),
      mc(
        "«—¿Lo hizo Marta? —No, ___ Pablo quien lo hizo.»",
        ["fue", "era", "es", "sería"],
        0,
        "Hendida en pretérito."
      ),
      toEs("They must have got lost.", "Se habrán perdido.", "Futuro perfecto de conjetura.", ["Se habrán perdido, seguro.", "Deben de haberse perdido."]),
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
            "Formal y colectivo."
          ),
        ]
      ),
    ],
    [
      fb("Motivo.", "Me ___ a ustedes para solicitar la beca.", "dirijo", "Dirigirse a."),
      fb("Argumento (adición).", "Cuento con experiencia en el sector. ___, he publicado dos artículos.", "Asimismo", "Adición formal."),
      fb("Petición.", "Les agradecería que ___ en cuenta mi solicitud. (tener)", "tuvieran", "Imperfecto de subjuntivo."),
      fb("Documentos.", "Encontrarán ___ mi currículum y dos cartas de recomendación.", "adjuntos", "Concordancia con currículum y cartas (masculino plural)."),
      fb("Cierre.", "Quedo a la ___ de su respuesta.", "espera", "Fórmula fija."),
      mc(
        "Despedida adecuada:",
        ["Atentamente,", "Besos,", "Chao,", "Nos vemos,"],
        0,
        "Cierre formal."
      ),
      mc(
        "¿Qué frase NO debería aparecer en este correo?",
        ["Sé que soy el mejor y me la tienen que dar.", "Considero que mi perfil se ajusta a los requisitos.", "Mi investigación podría contribuir al campo.", "Agradezco de antemano su atención."],
        0,
        "Tono arrogante y coloquial."
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
            "Voseo rioplatense."
          ),
        ]
      ),
    ],
    [
      mc(
        "En Madrid, a tres amigos:",
        ["¿Os apetece ir al cine?", "¿Les apetece ir al cine, che?", "¿Te apetecés ir al cine?", "¿Vos querés ir al cine?"],
        0,
        "España: vosotros (os)."
      ),
      mc(
        "En Ciudad de México, a tres amigos:",
        ["¿Quieren ir al cine?", "¿Queréis ir al cine?", "¿Querés ir al cine?", "¿Quieres ir al cine vosotros?"],
        0,
        "América: ustedes."
      ),
      fb("En Buenos Aires.", "Che, ___ acá que te muestro algo. (venir, vos)", "vení", "Imperativo voseante."),
      fb("En Bogotá, a un taxista.", "Señor, ¿me ___ en la esquina, por favor? (dejar, usted)", "deja", "Usted."),
      fb("En Chile, en el mercado.", "Un kilo de ___, por favor. (aguacates)", "paltas", "Chile: palta."),
      fb("Voseo, pretérito.", "¿Vos ___ la película ayer? (ver)", "viste", "Pretérito igual que tú."),
      mc(
        "En Colombia te ofrecen «un tinto». Es…",
        ["un café", "un vino", "un zumo", "un té"],
        0,
        "Tinto = café en Colombia."
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
            "Aunque + indicativo = hecho real que se admite."
          ),
        ]
      ),
    ],
    [
      mc(
        "Nominalización de «cuando se aprobó el plan»:",
        ["tras la aprobación del plan", "tras aprobando el plan", "tras aprobar el plan fue", "tras aprobado el plan de"],
        0,
        "Aprobar → aprobación."
      ),
      mc(
        "Gerundio correcto:",
        ["Entró en la sala temblando.", "Un paquete conteniendo libros.", "Se casó en 2001, divorciándose en 2005.", "Buscamos empleado hablando inglés."],
        0,
        "Simultaneidad."
      ),
      fb("Pasiva refleja.", "Se ___ a los heridos al hospital. (trasladar, pretérito)", "trasladó", "Se + singular + a + persona."),
      fb("Estilo indirecto.", "«Llámame mañana» → Me pidió que lo ___ al día siguiente.", "llamara", "Imperativo → subjuntivo."),
      fb("Ser/estar.", "La conferencia ___ en el aula magna.", "es", "Evento → ser."),
      fb("Régimen.", "Nunca se arrepintió ___ aquella decisión.", "de", "Arrepentirse de."),
      fb("Conjetura.", "No contesta; ___ en una reunión. (estar)", "estará", "Futuro de conjetura."),
      fb("Voseo.", "¿Vos ___ de acá? (ser)", "sos", "Ser → sos."),
    ]
  ),
];
