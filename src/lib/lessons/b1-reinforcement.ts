import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// B1 reinforcement lessons -- woven into B1_LESSONS right after the lesson
// each one reinforces (see weave.ts). Like the base B1 lessons, they're
// written mostly in Spanish. They re-present material already covered in
// formats the base lessons don't use: dialogue labs, error hunts
// ("Caza de errores"), contrast clinics, transformations, real-world
// missions, spiral reviews, vocabulary word webs, a closing B1 Challenge
// series, and themed spiral reviews placed between the reading stories so
// that retrieval practice keeps going through the story block.
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("B1", after, slug, title, summary, duration, sections, exercises);

export const B1_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "present-subjunctive-formation-2",
    "b1r-transform-indicative-subjunctive",
    "Transformaciones: del indicativo al subjuntivo",
    "Toma verbos en presente de indicativo y pásalos al subjuntivo, paso a paso: forma yo, quita la -o, cambia la vocal.",
    "7 min",
    [
      sec(
        "La receta en tres pasos",
        "1) Busca la forma yo del presente: hablo, tengo, pido. 2) Quita la -o: habl-, teng-, pid-. 3) Añade la vocal «contraria»: -AR → -e; -ER/-IR → -a.",
        [
          ["hablo → habl- → hable", "I speak → (that) I speak"],
          ["tengo → teng- → tenga", "I have → (that) I have"],
          ["pido → pid- → pida", "I ask for → (that) I ask for"],
        ],
        [
          fb("Pasa al subjuntivo (yo).", "salgo → que yo ___", "salga", "Salgo → salg- → salga. La irregularidad de la forma yo pasa al subjuntivo."),
        ]
      ),
      sec(
        "Los cambios ortográficos",
        "Para conservar el sonido, algunos verbos cambian la consonante: -car → -que (busque), -gar → -gue (llegue), -zar → -ce (empiece), -ger → -ja (escoja).",
        [
          ["buscar → que yo busque", "that I look for"],
          ["pagar → que tú pagues", "that you pay"],
        ],
        [
          fb("Pasa al subjuntivo (él).", "empieza → que él ___", "empiece", "Empezar: e→ie y z→c delante de e."),
        ]
      ),
    ],
    [
      fb("Pasa al subjuntivo (nosotros).", "comemos → que nosotros ___", "comamos", "-ER → -amos."),
      fb("Pasa al subjuntivo (ellos).", "conocen → que ellos ___", "conozcan", "Conozco → conozc- → conozcan."),
      fb("Pasa al subjuntivo (tú).", "duermes → que tú ___", "duermas", "o→ue se mantiene en tú: duermas."),
      fb("Pasa al subjuntivo (nosotros).", "dormimos → que nosotros ___", "durmamos", "En nosotros, dormir cambia o→u: durmamos."),
      mt(
        "Relaciona cada forma yo con su subjuntivo.",
        [
          ["hago", "haga"],
          ["digo", "diga"],
          ["pongo", "ponga"],
          ["vengo", "venga"],
        ],
        "Todos estos verbos tienen una -g- en la forma yo, y la conservan en el subjuntivo."
      ),
      mc(
        "¿Cuál es el subjuntivo de «escoger» para yo?",
        ["escoja", "escoga", "escojo", "escoge"],
        0,
        "-ger → -ja para conservar el sonido: escoja."
      ),
      wo("Espero que ustedes lleguen a tiempo.", "Llegar → lleguen (g → gu delante de e).", "I hope you all arrive on time."),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1r-error-hunt-subjunctive-forms",
    "Caza de errores: las formas del subjuntivo",
    "Formas inventadas, vocales equivocadas y los seis irregulares — encuentra y corrige cada error.",
    "7 min",
    [
      sec(
        "Los seis irregulares",
        "Seis verbos no siguen la receta de la forma yo: ser (sea), estar (esté), ir (vaya), saber (sepa), haber (haya), dar (dé). Los errores típicos inventan formas como «esa» o «sabe».",
        [
          ["✗ Quiero que tú eres feliz. → ✓ Quiero que tú seas feliz.", "I want you to be happy."],
          ["✗ Ojalá que ella sabe la verdad. → ✓ Ojalá que ella sepa la verdad.", "I hope she knows the truth."],
        ],
        [
          mc(
            "Corrige: «Es importante que vas al médico.»",
            ["Es importante que vayas al médico.", "Es importante que vaas al médico.", "Es importante que ires al médico.", "No hay error."],
            0,
            "Ir → vaya, vayas, vaya…"
          ),
        ]
      ),
      sec(
        "La vocal equivocada",
        "El error más común es usar la vocal del indicativo: «que él habla» en vez de «que él hable».",
        [
          ["✗ Espero que me escribes. → ✓ Espero que me escribas.", "I hope you write to me."],
        ],
        [
          fb("Corrige el verbo.", "Prefiero que nosotros ___ en casa. (el alumno escribió: cenamos)", "cenemos", "-AR → vocal e: cenemos."),
        ]
      ),
    ],
    [
      fb("Corrige el verbo.", "Dudo que ellos ___ aquí. (el alumno escribió: están)", "estén", "Estar → esté, estés, esté, estemos, estéis, estén."),
      fb("Corrige el verbo.", "No creo que ___ tiempo. (haber; el alumno escribió: hay)", "haya", "Haber → haya."),
      fb("Corrige el verbo.", "Quiero que me ___ tu opinión. (dar; el alumno escribió: das)", "des", "Dar → dé, des, dé, demos, deis, den."),
      ms(
        "¿Qué frases tienen un error?",
        ["Ojalá que llueva mañana.", "Es necesario que tú sabes esto.", "Me alegro de que estés aquí.", "Quiero que vosotros vengáis."],
        [1],
        "Saber → sepas: es necesario que tú sepas esto."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Espero que el examen sea fácil.", "Espero que el examen es fácil.", "Espero que el examen esé fácil.", "Espero que el examen está fácil."],
        0,
        "Ser → sea."
      ),
      toEs("I hope you (tú) have a good day.", "Espero que tengas un buen día.", "Tener → tenga → tengas.", ["Ojalá que tengas un buen día.", "Espero que tú tengas un buen día.", "Ojalá tengas un buen día."]),
      wo("Mis padres quieren que yo sea médico.", "Querer que + subjuntivo irregular de ser.", "My parents want me to be a doctor."),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1r-contrast-indicative-subjunctive",
    "Contraste: ¿hecho o deseo?",
    "La misma frase en indicativo y en subjuntivo: aprende a oír la diferencia entre lo que es y lo que se quiere.",
    "7 min",
    [
      sec(
        "Pares mínimos",
        "El indicativo afirma una realidad. El subjuntivo presenta algo como deseo, duda o emoción — no como un hecho.",
        [
          ["Sé que Ana viene.", "I know Ana is coming. (fact)"],
          ["Quiero que Ana venga.", "I want Ana to come. (wish)"],
          ["Veo que estás bien.", "I see that you're fine. (fact)"],
          ["Espero que estés bien.", "I hope you're fine. (wish)"],
        ],
        [
          mc(
            "«Creo que ___ razón.» (tú)",
            ["tienes", "tengas", "tener", "tuvieras"],
            0,
            "Creer (afirmativo) expresa lo que consideras un hecho → indicativo."
          ),
        ]
      ),
      sec(
        "Formas que se parecen",
        "Algunas formas se confunden fácilmente: habla (indicativo) / hable (subjuntivo); come (indicativo) / coma (subjuntivo). Mira la vocal final.",
        [
          ["Él habla. / Que él hable.", "He speaks. / That he speak."],
          ["Ella come. / Que ella coma.", "She eats. / That she eat."],
        ],
        [
          ms(
            "¿Qué formas son de subjuntivo?",
            ["trabaje", "trabaja", "viva", "vive"],
            [0, 2],
            "-AR en subjuntivo lleva -e; -IR/-ER llevan -a."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Sé que viene.", "I know he's coming."],
          ["Quiero que venga.", "I want him to come."],
          ["Es verdad que viene.", "It's true he's coming."],
          ["Dudo que venga.", "I doubt he's coming."],
        ],
        "Saber y es verdad → indicativo. Querer y dudar → subjuntivo."
      ),
      fb("¿Indicativo o subjuntivo?", "Es obvio que Marta ___ cansada. (estar)", "está", "Es obvio que expresa certeza → indicativo."),
      fb("¿Indicativo o subjuntivo?", "Es posible que Marta ___ cansada. (estar)", "esté", "Es posible que expresa posibilidad → subjuntivo."),
      fb("¿Indicativo o subjuntivo?", "Pienso que el tren ___ a las ocho. (salir)", "sale", "Pensar (afirmativo) → indicativo."),
      mc(
        "«No pienso que el tren ___ a las ocho.»",
        ["salga", "sale", "saldrá", "salir"],
        0,
        "No pensar expresa duda → subjuntivo."
      ),
      toEn("Quiero que me llames esta noche.", "I want you to call me tonight.", "Querer que + subjuntivo = want someone to do something.", ["I want you to phone me tonight."]),
      wo("Es cierto que Juan trabaja mucho.", "Es cierto que expresa certeza → indicativo.", "It's true that Juan works a lot."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1r-dialogue-advice-column",
    "Laboratorio de diálogo: el consultorio sentimental",
    "Lee cartas a un consultorio y responde como la consejera: deseos, recomendaciones y emociones.",
    "8 min",
    [
      sec(
        "Carta 1: «Mi compañero de piso no limpia»",
        "La consejera responde con verbos de deseo y recomendación: te recomiendo que, te sugiero que, es mejor que.",
        [
          ["«Mi compañero nunca lava los platos y me molesta mucho.»", "My roommate never washes the dishes and it bothers me a lot."],
          ["«Te recomiendo que hables con él con calma.»", "I recommend you talk to him calmly."],
          ["«Sugiero que hagáis una lista de tareas.»", "I suggest you (both) make a chore list."],
        ],
        [
          fb("Completa la respuesta de la consejera.", "Me molesta que tu compañero no ___ nada en casa. (hacer)", "haga", "Emoción (me molesta que) → subjuntivo: haga."),
        ]
      ),
      sec(
        "Carta 2: «No sé si mi novia me quiere»",
        "La duda pide subjuntivo; la certeza, indicativo.",
        [
          ["«Dudo que ella te quiera menos. Creo que solo está estresada.»", "I doubt she loves you less. I think she's just stressed."],
        ],
        [
          mc(
            "¿Por qué la consejera usa «quiera» pero «está»?",
            ["Dudo que → subjuntivo; creo que → indicativo.", "Quiera es pasado.", "Está es subjuntivo.", "No hay diferencia."],
            0,
            "Dudar exige subjuntivo; creer afirmativo, indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Completa la respuesta.", "Te sugiero que le ___ un mensaje sincero. (escribir)", "escribas", "Sugerir que + subjuntivo."),
      fb("Completa la respuesta.", "Me alegro de que ___ ayuda. (pedir, tú)", "pidas", "Alegrarse de que + subjuntivo; pedir (e→i) → pidas."),
      fb("Completa la respuesta.", "Es normal que ___ nervioso antes de una cita. (estar, tú)", "estés", "Es normal que + subjuntivo."),
      mt(
        "Relaciona cada problema con un buen consejo.",
        [
          ["Duermo muy poco.", "Te recomiendo que te acuestes antes."],
          ["Mi jefe me grita.", "Es importante que hables con Recursos Humanos."],
          ["Echo de menos a mi familia.", "Te sugiero que los llames más a menudo."],
          ["Estoy aburrido del trabajo.", "Quizás es hora de que busques algo nuevo."],
        ],
        "Todos los consejos usan un verbo de influencia + que + subjuntivo."
      ),
      ms(
        "¿Qué respuestas son correctas?",
        ["Siento que estés triste.", "Creo que tienes razón.", "Te aconsejo que no dices nada.", "Ojalá que todo salga bien."],
        [0, 1, 3],
        "Aconsejar que → subjuntivo: no digas nada."
      ),
      toEs("I recommend that you (tú) rest more.", "Te recomiendo que descanses más.", "Recomendar que + subjuntivo.", ["Te recomiendo descansar más.", "Recomiendo que descanses más."]),
      wo("No creo que sea buena idea mudarte ahora.", "No creer que + subjuntivo (sea).", "I don't think it's a good idea for you to move now."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1r-error-hunt-creer-dudar",
    "Caza de errores: creo que, no creo que, dudo que",
    "La trampa más común del B1: los verbos de opinión y de duda. Encuentra cada error.",
    "7 min",
    [
      sec(
        "La regla del «no»",
        "Creer y pensar llevan indicativo en afirmativo y subjuntivo en negativo. Dudar funciona al revés: dudar → subjuntivo; no dudar → indicativo.",
        [
          ["Creo que es verdad. / No creo que sea verdad.", "I think it's true. / I don't think it's true."],
          ["Dudo que venga. / No dudo que viene.", "I doubt he's coming. / I don't doubt he's coming."],
        ],
        [
          mc(
            "Corrige: «Creo que ella esté en casa.»",
            ["Creo que ella está en casa.", "Creo que ella estuviera en casa.", "No creo que ella está en casa.", "No hay error."],
            0,
            "Creer afirmativo → indicativo."
          ),
        ]
      ),
      sec(
        "Las preguntas",
        "En preguntas con ¿crees que…?, las dos opciones son posibles: el indicativo es neutral, el subjuntivo muestra más duda.",
        [
          ["¿Crees que va a llover?", "Do you think it's going to rain? (neutral)"],
          ["¿Crees que llueva?", "Do you really think it'll rain? (more doubt)"],
        ],
        [
          ms(
            "¿Qué frases son correctas?",
            ["¿Crees que es buena idea?", "¿Crees que sea buena idea?", "Creo que sea buena idea.", "No creo que es buena idea."],
            [0, 1],
            "En preguntas, ambas. En afirmativo, indicativo; en negativo, subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el verbo.", "No pienso que Luis ___ razón. (el alumno escribió: tiene)", "tenga", "No pensar → subjuntivo."),
      fb("Corrige el verbo.", "Pienso que el museo ___ cerrado los lunes. (el alumno escribió: esté)", "está", "Pensar afirmativo → indicativo."),
      fb("Corrige el verbo.", "Dudo que mis padres ___ el viaje. (pagar; el alumno escribió: pagan)", "paguen", "Dudar → subjuntivo; g → gu delante de e."),
      fb("Corrige el verbo.", "No dudo que ella ___ la mejor candidata. (el alumno escribió: sea)", "es", "No dudar expresa certeza → indicativo."),
      mc(
        "¿Cuál es correcta?",
        ["No es verdad que haya examen mañana.", "No es verdad que hay examen mañana.", "Es verdad que haya examen mañana.", "Es verdad que hubiera examen mañana."],
        0,
        "No es verdad que niega → subjuntivo."
      ),
      toEs("I don't believe that he knows the answer.", "No creo que sepa la respuesta.", "No creer → subjuntivo; saber → sepa.", ["No creo que él sepa la respuesta.", "Yo no creo que sepa la respuesta."]),
      wo("Estoy seguro de que mañana hará sol.", "Estar seguro de que expresa certeza → indicativo (futuro).", "I'm sure it'll be sunny tomorrow."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1r-mission-reacting-to-news",
    "Misión real: reaccionar a las noticias",
    "Tus amigos te cuentan noticias buenas y malas. Reacciona con emoción — y con el subjuntivo.",
    "7 min",
    [
      sec(
        "Buenas noticias",
        "Las reacciones emocionales llevan subjuntivo: ¡Qué bien que…!, Me alegro de que…, Me encanta que…",
        [
          ["—¡Tengo un trabajo nuevo! —¡Me alegro mucho de que tengas trabajo!", "I have a new job! — I'm so happy you have work!"],
          ["—Vamos a tener un bebé. —¡Qué ilusión que seáis padres!", "We're having a baby. — How exciting that you'll be parents!"],
        ],
        [
          fb("Reacciona.", "—Mi hermana se casa. —¡Qué bien que se ___! (casar)", "case", "¡Qué bien que! + subjuntivo."),
        ]
      ),
      sec(
        "Malas noticias",
        "Siento que…, Qué pena que…, Me preocupa que… también piden subjuntivo.",
        [
          ["—Estoy enfermo. —Siento que estés enfermo. ¡Que te mejores!", "I'm sick. — I'm sorry you're sick. Get well soon!"],
        ],
        [
          mc(
            "«¡Que te mejores!» significa…",
            ["Get well soon!", "You're better!", "I'm better!", "Be careful!"],
            0,
            "Que + subjuntivo sin verbo principal expresa un deseo: ¡que te mejores!"
          ),
        ]
      ),
    ],
    [
      fb("Reacciona.", "—Perdí el móvil. —¡Qué pena que no lo ___! (encontrar, tú)", "encuentres", "Qué pena que + subjuntivo; encontrar (o→ue) → encuentres."),
      fb("Reacciona.", "—Mañana no hay clase. —¡Me encanta que no ___ clase! (haber)", "haya", "Haber → haya."),
      mt(
        "Relaciona cada noticia con la mejor reacción.",
        [
          ["Por fin tengo vacaciones.", "¡Qué bien que puedas descansar!"],
          ["Mi abuelo está en el hospital.", "Siento mucho que esté enfermo."],
          ["Me voy a vivir a Japón.", "¡Qué sorpresa que te vayas tan lejos!"],
          ["Nadie viene a mi fiesta.", "Qué pena que nadie venga."],
        ],
        "Todas las reacciones usan emoción + que + subjuntivo."
      ),
      ms(
        "¿Qué reacciones son correctas?",
        ["¡Qué bueno que estés aquí!", "Me sorprende que no lo sabes.", "Me preocupa que trabajes tanto.", "¡Que tengas buen viaje!"],
        [0, 2, 3],
        "Me sorprende que → subjuntivo: no lo sepas."
      ),
      toEs("What a shame that you can't come!", "¡Qué pena que no puedas venir!", "Qué pena que + subjuntivo.", ["¡Qué lástima que no puedas venir!", "Qué pena que no puedas venir."]),
      toEn("¡Que lo pases bien en la fiesta!", "Have a good time at the party!", "Que + subjuntivo = a wish for someone.", ["Have fun at the party!", "Enjoy the party!"]),
      wo("Me preocupa que mi hermano no duerma bien.", "Me preocupa que + subjuntivo (dormir → duerma).", "It worries me that my brother isn't sleeping well."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1r-mission-ojala-wishes",
    "Misión real: deseos para todos",
    "Escribe mensajes de despedida, de cumpleaños y de ánimo — con ojalá, que + subjuntivo y expresiones impersonales.",
    "7 min",
    [
      sec(
        "Mensajes con ojalá",
        "Ojalá (que) siempre lleva subjuntivo, con o sin que.",
        [
          ["¡Ojalá que te guste el regalo!", "I hope you like the gift!"],
          ["Ojalá haga buen tiempo en tu viaje.", "I hope the weather's good on your trip."],
        ],
        [
          fb("Completa el mensaje de cumpleaños.", "¡Ojalá que ___ todos tus deseos! (cumplirse)", "se cumplan", "Ojalá + subjuntivo; los deseos (plural) → se cumplan."),
        ]
      ),
      sec(
        "Mensajes con que + subjuntivo",
        "Sin verbo principal, que + subjuntivo funciona como un deseo breve: ¡Que te vaya bien! ¡Que descanses!",
        [
          ["¡Que tengas un buen viaje!", "Have a good trip!"],
          ["¡Que duermas bien!", "Sleep well!"],
        ],
        [
          mt(
            "Relaciona cada situación con el mensaje adecuado.",
            [
              ["Un amigo tiene un examen.", "¡Que tengas suerte!"],
              ["Tu madre se va a dormir.", "¡Que descanses!"],
              ["Unos amigos van a cenar.", "¡Que aproveche!"],
              ["Tu jefe se va de vacaciones.", "¡Que lo pase bien!"],
            ],
            "Fórmulas fijas muy frecuentes: que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa el mensaje de ánimo.", "Es importante que no ___ la esperanza. (perder, tú)", "pierdas", "Perder (e→ie) → pierdas."),
      fb("Completa el mensaje de despedida.", "Ojalá que nos ___ pronto. (ver, nosotros)", "veamos", "Ver → vea → veamos."),
      fb("Completa el mensaje.", "Es necesario que ___ mucha agua. (beber, usted)", "beba", "Usted → beba."),
      mc(
        "¿Cuál es el mensaje correcto para un amigo enfermo?",
        ["¡Que te mejores pronto!", "¡Que te mejoras pronto!", "¡Ojalá te mejoras pronto!", "¡Que mejorarte pronto!"],
        0,
        "Que + subjuntivo: te mejores."
      ),
      ms(
        "¿Qué deseos están bien escritos?",
        ["Ojalá llueva esta noche.", "Ojalá que vienes a la boda.", "¡Que cumplas muchos más!", "Es mejor que salgamos temprano."],
        [0, 2, 3],
        "Ojalá → subjuntivo: vengas."
      ),
      toEs("I hope you (tú) have a great time in Mexico!", "¡Ojalá que lo pases genial en México!", "Ojalá + subjuntivo; pasarlo genial = to have a great time.", ["¡Ojalá lo pases genial en México!", "¡Que lo pases genial en México!", "¡Ojalá que lo pases muy bien en México!", "¡Que lo pases muy bien en México!"]),
      wo("Ojalá que el año que viene podamos viajar juntos.", "Ojalá que + subjuntivo (poder → podamos).", "I hope that next year we can travel together."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1r-contrast-impersonal-expressions",
    "Contraste: es verdad que / es posible que",
    "Expresiones impersonales de certeza frente a expresiones de opinión, posibilidad y necesidad.",
    "7 min",
    [
      sec(
        "Dos familias",
        "Certeza (es verdad, es cierto, es obvio, es evidente, está claro) → indicativo. Opinión, posibilidad o necesidad (es importante, es posible, es raro, es mejor, es necesario) → subjuntivo.",
        [
          ["Es evidente que tienes talento.", "It's evident that you have talent."],
          ["Es raro que no tengas hambre.", "It's strange that you're not hungry."],
        ],
        [
          fb("Completa.", "Está claro que el equipo ___ mejor este año. (jugar)", "juega", "Certeza → indicativo."),
        ]
      ),
      sec(
        "La negación cambia la familia",
        "Negar una certeza la convierte en duda: No es verdad que… → subjuntivo.",
        [
          ["Es cierto que llueve. / No es cierto que llueva.", "It's true it's raining. / It's not true it's raining."],
        ],
        [
          mc(
            "«No es obvio que él ___ culpable.»",
            ["sea", "es", "está", "será"],
            0,
            "Al negarse, la certeza desaparece → subjuntivo."
          ),
        ]
      ),
    ],
    [
      ms(
        "¿Qué expresiones llevan subjuntivo?",
        ["Es verdad que…", "Es probable que…", "Está claro que…", "Es raro que…"],
        [1, 3],
        "Certeza (es verdad, está claro) → indicativo; probabilidad y reacción (es probable, es raro) → subjuntivo."
      ),
      fb("Completa.", "Es mejor que ___ en taxi; es muy tarde. (ir, nosotros)", "vayamos", "Es mejor que → subjuntivo; ir → vayamos."),
      fb("Completa.", "Es cierto que ___ muchos turistas en verano. (haber)", "hay", "Certeza → indicativo."),
      fb("Completa.", "Es increíble que nadie ___ la respuesta. (saber)", "sepa", "Reacción/opinión → subjuntivo."),
      ms(
        "¿Qué frases son correctas?",
        ["Es evidente que estás cansado.", "Es posible que llueva.", "Es obvio que sepa la verdad.", "Es necesario que todos participen."],
        [0, 1, 3],
        "Es obvio que → indicativo: sabe la verdad."
      ),
      toEs("It's important that we arrive early.", "Es importante que lleguemos temprano.", "Es importante que + subjuntivo; llegar → lleguemos.", ["Es importante que lleguemos pronto.", "Es importante llegar temprano."]),
      wo("Es una lástima que no haya entradas para el concierto.", "Es una lástima que + subjuntivo (haber → haya).", "It's a shame there aren't tickets for the concert."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1r-spiral-subjunctive-foundations",
    "Repaso en espiral: los cimientos del subjuntivo",
    "Formación, deseo, duda, emoción, expresiones impersonales y ojalá — todo junto, y con el pasado del A2.",
    "8 min",
    [
      sec(
        "Un correo de una amiga",
        "Lee el correo de Laura. Mezcla el subjuntivo con los tiempos del pasado que ya dominas.",
        [
          ["Ayer fui al médico porque me dolía la espalda.", "Yesterday I went to the doctor because my back hurt."],
          ["Me dijo que es importante que haga ejercicio y que no levante cosas pesadas.", "He told me it's important that I exercise and not lift heavy things."],
          ["Ojalá que me recupere pronto, porque quiero que vayamos a la playa en julio.", "I hope I recover soon, because I want us to go to the beach in July."],
        ],
        [
          ms(
            "¿Qué verbos del correo están en subjuntivo?",
            ["haga", "dolía", "recupere", "vayamos"],
            [0, 2, 3],
            "Dolía es imperfecto de indicativo."
          ),
          fb("Responde a Laura.", "Siento mucho que te ___ la espalda. (doler)", "duela", "Emoción → subjuntivo; doler (o→ue) → duela."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me alegro de que el médico te ___ tan bien. (tratar)", "trate", "Emoción → subjuntivo: trate."),
      fb("Completa.", "Creo que ___ una buena idea ir a la playa. (ser)", "es", "Creer afirmativo → indicativo."),
      fb("Completa.", "Cuando era niña, Laura ___ al mar cada verano. (ir)", "iba", "Hábito en el pasado → imperfecto."),
      mc(
        "«Quiero que me ___ cuando llegues.»",
        ["llames", "llamas", "llamaste", "llamarás"],
        0,
        "Querer que + subjuntivo."
      ),
      mt(
        "Relaciona cada principio con su final.",
        [
          ["Es evidente que", "Laura necesita descansar."],
          ["Es posible que", "Laura no pueda ir en julio."],
          ["Laura sabe que", "el médico tiene razón."],
          ["Laura duda que", "el dolor desaparezca pronto."],
        ],
        "Certeza y saber → indicativo; posibilidad y duda → subjuntivo."
      ),
      toEs("I hope you (tú) feel better. We'll go to the beach when you can.", "Espero que te sientas mejor. Iremos a la playa cuando puedas.", "Esperar que + subjuntivo; cuando + subjuntivo para el futuro.", ["Ojalá que te sientas mejor. Iremos a la playa cuando puedas.", "Espero que te sientas mejor. Vamos a ir a la playa cuando puedas."]),
      wo("No creo que Laura pueda nadar este verano.", "No creer que + subjuntivo (poder → pueda).", "I don't think Laura will be able to swim this summer."),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1r-mission-recipe",
    "Misión real: escribe la receta",
    "Convierte las notas de una abuela en una receta con mandatos de usted — y luego explícasela a un amigo con tú.",
    "8 min",
    [
      sec(
        "Las notas de la abuela",
        "Las recetas en español suelen usar mandatos de usted (forma del subjuntivo): corte, añada, mezcle, sirva.",
        [
          ["Pelar las patatas y cortarlas en rodajas. → Pele las patatas y córtelas en rodajas.", "Peel the potatoes and slice them."],
          ["Batir los huevos con sal. → Bata los huevos con sal.", "Beat the eggs with salt."],
        ],
        [
          fb("Convierte la nota en mandato de usted.", "Freír las patatas. → ___ las patatas.", "Fría", "Freír (e→i) → fría."),
        ]
      ),
      sec(
        "Ahora, con tú",
        "Para un amigo, usa el mandato afirmativo de tú (igual que la forma él del presente): pela, corta, bate. Los pronombres se pegan al final.",
        [
          ["Pela las patatas y córtalas.", "Peel the potatoes and cut them."],
          ["No las cortes muy finas.", "Don't cut them too thin."],
        ],
        [
          fb("Da la instrucción con tú.", "___ los huevos con las patatas. (mezclar)", "Mezcla", "Tú afirmativo = forma él del presente: mezcla."),
        ]
      ),
    ],
    [
      fb("Mandato de usted.", "___ la sartén en el fuego. (poner)", "Ponga", "Poner → ponga."),
      fb("Mandato de tú.", "___ la vuelta a la tortilla con un plato. (dar, tú + le)", "Dale", "Dar → da + le → dale."),
      fb("Mandato negativo de tú.", "No ___ demasiado aceite. (echar)", "eches", "Negativo = subjuntivo: no eches."),
      mt(
        "Relaciona cada mandato de usted con su versión de tú.",
        [
          ["Añada la sal.", "Añade la sal."],
          ["Sirva caliente.", "Sirve caliente."],
          ["Haga la masa.", "Haz la masa."],
          ["Ponga el horno a 180°.", "Pon el horno a 180°."],
        ],
        "Hacer → haz, poner → pon: mandatos de tú irregulares."
      ),
      mc(
        "«Cut it (the onion) into small pieces» — con tú:",
        ["Córtala en trozos pequeños.", "Cortala en trozos pequeños.", "La corta en trozos pequeños.", "Córtela en trozos pequeños."],
        0,
        "Pronombre pegado + tilde para mantener el acento: córtala. (Córtela sería usted.)"
      ),
      toEs("Don't open the oven while it's cooking. (tú)", "No abras el horno mientras se cocina.", "Negativo de tú → subjuntivo: no abras.", ["No abras el horno mientras se está cocinando.", "No abras el horno mientras cocina."]),
      wo("Sírvala con una ensalada verde y pan.", "Mandato de usted + pronombre pegado + tilde.", "Serve it with a green salad and bread."),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1r-transform-commands",
    "Transformaciones: del sí al no",
    "Convierte mandatos afirmativos en negativos (y al revés) sin perder los pronombres por el camino.",
    "7 min",
    [
      sec(
        "Los pronombres se mueven",
        "Afirmativo: el pronombre va pegado al final (dímelo). Negativo: va delante del verbo (no me lo digas).",
        [
          ["Cómpralo. → No lo compres.", "Buy it. → Don't buy it."],
          ["Siéntese. → No se siente.", "Sit down. → Don't sit down."],
        ],
        [
          fb("Hazlo negativo.", "Llámame. → No ___ llames.", "me", "Negativo: pronombre delante."),
        ]
      ),
      sec(
        "Los verbos también cambian",
        "El negativo de tú usa el subjuntivo: ven → no vengas; sal → no salgas; ten → no tengas.",
        [
          ["Ven aquí. → No vengas aquí.", "Come here. → Don't come here."],
          ["Hazlo ahora. → No lo hagas ahora.", "Do it now. → Don't do it now."],
        ],
        [
          fb("Hazlo negativo.", "Sal de casa. → No ___ de casa.", "salgas", "Salir → salgas."),
        ]
      ),
    ],
    [
      fb("Hazlo afirmativo.", "No te preocupes. → ___.", "Preocúpate", "Afirmativo: preocupa + te, con tilde."),
      fb("Hazlo afirmativo.", "No se lo digas. → ___.", "Díselo", "Di (tú) + se + lo → díselo."),
      fb("Hazlo negativo.", "Pónganlo aquí. → No lo ___ aquí.", "pongan", "Ustedes: no lo pongan."),
      fb("Hazlo negativo.", "Vámonos. → No nos ___.", "vayamos", "Nosotros: vámonos → no nos vayamos."),
      mc(
        "El negativo de «Dímelo» es…",
        ["No me lo digas.", "No dímelo.", "No me lo dices.", "No lo me digas."],
        0,
        "Subjuntivo + pronombres delante, indirecto primero."
      ),
      ms(
        "¿Qué pares afirmativo/negativo son correctos?",
        ["Ve → No vayas", "Sé → No seas", "Pon → No pongas", "Di → No dices"],
        [0, 1, 2],
        "Di → no digas."
      ),
      wo("No te vayas todavía, quédate un rato más.", "Negativo (no te vayas) + afirmativo (quédate).", "Don't leave yet, stay a bit longer."),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1r-error-hunt-commands",
    "Caza de errores: los mandatos",
    "Mandatos negativos con la forma afirmativa, pronombres mal colocados y tú mezclado con usted.",
    "7 min",
    [
      sec(
        "Tres errores típicos",
        "(1) Usar la forma afirmativa en negativo: ✗ no habla → ✓ no hables. (2) Poner el pronombre al final en negativo: ✗ no dígalo → ✓ no lo diga. (3) Mezclar tú y usted en el mismo mensaje.",
        [
          ["✗ ¡No toca eso! → ✓ ¡No toques eso!", "Don't touch that!"],
          ["✗ Señora, pasa y siéntese. → ✓ Señora, pase y siéntese.", "Ma'am, come in and sit down."],
        ],
        [
          mc(
            "Corrige: «No olvidas las llaves.» (tú)",
            ["No olvides las llaves.", "No olvidar las llaves.", "No las olvidas.", "No hay error."],
            0,
            "Negativo de tú → subjuntivo: no olvides."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el mandato.", "Por favor, ___ la puerta. (usted; el alumno escribió: cierra)", "cierre", "Usted → subjuntivo: cierre."),
      fb("Corrige el mandato.", "¡No ___ tan rápido! (conducir, tú; el alumno escribió: conduces)", "conduzcas", "Negativo → subjuntivo: conduzcas."),
      fb("Corrige el mandato.", "___, por favor. (sentarse, tú; el alumno escribió: Siéntate te)", "Siéntate", "Un solo pronombre, pegado al final."),
      ms(
        "¿Qué mandatos tienen un error?",
        ["No me mires así.", "Tráigamelo, por favor.", "No lo toca.", "Id a dormir."],
        [2],
        "No lo toques (tú) o no lo toque (usted). «Tráigamelo» e «Id» son correctos."
      ),
      mc(
        "Un cartel en un museo dice… ¿cuál es correcto?",
        ["No toquen las obras.", "No tocan las obras.", "No tocad las obras.", "No toquen las obras de."],
        0,
        "Ustedes negativo → subjuntivo: no toquen."
      ),
      mt(
        "Relaciona el infinitivo con el mandato afirmativo de tú.",
        [
          ["tener", "ten"],
          ["ir", "ve"],
          ["ser", "sé"],
          ["decir", "di"],
        ],
        "Ocho mandatos irregulares de tú: di, haz, ve, pon, sal, sé, ten, ven."
      ),
      toEs("Don't worry, sir, sit down here.", "No se preocupe, señor, siéntese aquí.", "Todo en usted: no se preocupe, siéntese.", ["No se preocupe, señor, siéntese acá."]),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1r-dialogue-polite-requests",
    "Laboratorio de diálogo: peticiones corteses",
    "En el hotel, en la oficina y en casa de tus suegros: suaviza cada petición con el condicional.",
    "7 min",
    [
      sec(
        "Del mandato a la cortesía",
        "El condicional convierte una orden en una petición educada: Tráeme agua → ¿Me traerías agua? → ¿Podría traerme agua?",
        [
          ["¿Podría decirme la hora?", "Could you tell me the time?"],
          ["¿Te importaría cerrar la ventana?", "Would you mind closing the window?"],
          ["Me gustaría hablar con el gerente.", "I'd like to speak with the manager."],
        ],
        [
          fb("Suaviza la petición.", "Quiero un café. → ___ un café, por favor. (querer, yo)", "Querría", "Querer en condicional: querría (también se oye quisiera)."),
        ]
      ),
      sec(
        "Consejos suaves",
        "Yo que tú… / Deberías… / Sería mejor… son formas suaves de aconsejar.",
        [
          ["Yo que tú, hablaría con ella.", "If I were you, I'd talk to her."],
          ["Deberías descansar un poco.", "You should rest a bit."],
        ],
        [
          mc(
            "«Yo que tú, no ___ nada.»",
            ["diría", "diré", "digo", "decirías"],
            0,
            "Decir → dir- + -ía."
          ),
        ]
      ),
    ],
    [
      fb("Petición cortés.", "¿___ ayudarme con la maleta? (poder, usted)", "Podría", "Poder → podr- + -ía."),
      fb("Petición cortés.", "¿Te ___ venir un poco antes? (importar)", "importaría", "¿Te importaría + infinitivo?"),
      fb("Consejo suave.", "___ estudiar más si quieres aprobar. (deber, tú)", "Deberías", "Deber → deberías."),
      mt(
        "Relaciona cada situación con una petición adecuada.",
        [
          ["En un hotel, necesitas otra toalla.", "¿Podría traerme otra toalla?"],
          ["Tu compañero pone la música alta.", "¿Te importaría bajar la música?"],
          ["En una tienda, quieres ver un reloj.", "Me gustaría ver ese reloj."],
          ["Tu amiga está muy estresada.", "Deberías tomarte unos días libres."],
        ],
        "Todas usan el condicional para sonar amables."
      ),
      mc(
        "¿Cuál es la forma más cortés?",
        ["¿Sería tan amable de firmar aquí?", "Firme aquí.", "Tienes que firmar aquí.", "Firma aquí ya."],
        0,
        "¿Sería tan amable de…? es muy formal y cortés."
      ),
      toEs("Would you (usted) mind waiting a moment?", "¿Le importaría esperar un momento?", "Le importaría (usted) + infinitivo.", ["¿Le importaría esperar un momentito?", "¿Podría esperar un momento?"]),
      wo("Nos gustaría reservar una mesa para cuatro personas.", "Gustar en condicional para peticiones.", "We'd like to book a table for four."),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1r-mission-million",
    "Misión real: ¿qué harías con un millón?",
    "Un concurso de televisión te hace preguntas hipotéticas. Responde con el condicional.",
    "7 min",
    [
      sec(
        "La primera pregunta",
        "El condicional describe lo que harías en una situación imaginaria.",
        [
          ["—¿Qué harías con un millón de euros?", "What would you do with a million euros?"],
          ["—Primero, le compraría una casa a mi madre. Después, viajaría por todo el mundo.", "First, I'd buy my mother a house. Then I'd travel around the world."],
        ],
        [
          fb("Responde.", "Yo ___ la mitad a una ONG. (dar)", "daría", "Dar → daría."),
        ]
      ),
      sec(
        "Más preguntas imposibles",
        "Las raíces irregulares son las mismas que las del futuro: tendría, saldría, haría, podría, sabría…",
        [
          ["—¿Dónde vivirías? —Viviría en una isla.", "Where would you live? — I'd live on an island."],
          ["—¿Dejarías tu trabajo? —No, no lo dejaría.", "Would you quit your job? — No, I wouldn't quit it."],
        ],
        [
          fb("Responde.", "Mis amigos y yo ___ una fiesta enorme. (hacer)", "haríamos", "Hacer → har- + -íamos."),
        ]
      ),
    ],
    [
      fb("Responde.", "¿Tú ___ un coche de lujo? (tener)", "tendrías", "Tener → tendr- + -ías."),
      fb("Responde.", "Mi hermana ___ del país inmediatamente. (salir)", "saldría", "Salir → saldr- + -ía."),
      fb("Responde.", "Nadie ___ qué decir. (saber)", "sabría", "Saber → sabr- + -ía."),
      mt(
        "Relaciona cada infinitivo con su condicional (yo).",
        [
          ["poner", "pondría"],
          ["venir", "vendría"],
          ["querer", "querría"],
          ["decir", "diría"],
        ],
        "Mismas raíces que el futuro, terminaciones de -ía."
      ),
      ms(
        "¿Qué respuestas son correctas?",
        ["Yo compraría una granja.", "Nosotros viajaríamos en barco.", "Ellos podrían ayudar a su familia.", "Tú haceríais una fiesta."],
        [0, 1, 2],
        "Hacer → harías (tú)."
      ),
      toEs("I would never work again.", "Nunca volvería a trabajar.", "Volver a + infinitivo = to do again; condicional volvería.", ["No volvería a trabajar nunca.", "Nunca trabajaría otra vez.", "Nunca más trabajaría."]),
      wo("¿Qué le regalarías a tu mejor amigo?", "Le (a tu amigo) + condicional.", "What would you give your best friend?"),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1r-contrast-future-conditional",
    "Contraste: iré / iría",
    "Futuro para lo que va a pasar, condicional para lo que pasaría. Una letra de diferencia, dos mundos distintos.",
    "7 min",
    [
      sec(
        "Mismas raíces, terminaciones diferentes",
        "Futuro: -é, -ás, -á, -emos, -éis, -án. Condicional: -ía, -ías, -ía, -íamos, -íais, -ían. Las raíces irregulares son idénticas.",
        [
          ["Mañana saldré temprano.", "Tomorrow I will leave early. (plan)"],
          ["Con más tiempo, saldría más.", "With more time, I would go out more. (hypothetical)"],
        ],
        [
          ms(
            "¿Qué formas son condicionales?",
            ["podría", "podrá", "haríamos", "haremos"],
            [0, 2],
            "Las terminaciones en -ía son del condicional."
          ),
        ]
      ),
      sec(
        "¿Realidad o hipótesis?",
        "Pregúntate: ¿es un plan o una predicción (futuro), o algo imaginado, cortés o condicionado (condicional)?",
        [
          ["El sábado iremos a la playa.", "On Saturday we'll go to the beach."],
          ["Me encantaría ir a la playa, pero tengo que trabajar.", "I'd love to go to the beach, but I have to work."],
        ],
        [
          mc(
            "«Con un coche nuevo, ___ al trabajo en diez minutos.» (hipótesis)",
            ["llegaría", "llegaré", "llego", "llegué"],
            0,
            "Situación imaginada → condicional."
          ),
        ]
      ),
    ],
    [
      fb("¿Futuro o condicional?", "El año que viene ___ a la universidad. (ir, yo)", "iré", "Plan decidido → futuro."),
      fb("¿Futuro o condicional?", "Yo en tu lugar no ___ ese coche. (comprar)", "compraría", "Consejo hipotético → condicional."),
      fb("¿Futuro o condicional?", "¿___ usted repetir la pregunta, por favor? (poder)", "Podría", "Petición cortés → condicional."),
      fb("¿Futuro o condicional?", "Te prometo que te ___ mañana. (llamar)", "llamaré", "Promesa sobre el futuro → futuro."),
      mt(
        "Relaciona cada frase con su función.",
        [
          ["Lloverá mañana.", "predicción"],
          ["¿Me ayudarías?", "petición cortés"],
          ["Deberías dormir más.", "consejo"],
          ["Me casaré en junio.", "plan"],
        ],
        "Futuro: predicciones y planes. Condicional: cortesía, consejos e hipótesis."
      ),
      toEn("Dijo que vendría, pero no vino.", "He said he would come, but he didn't.", "El condicional también es el «futuro del pasado».", ["He said he'd come, but he didn't come."]),
      wo("Me gustaría saber qué harás después de graduarte.", "Condicional cortés + futuro para el plan.", "I'd like to know what you'll do after graduating."),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1r-mission-if-then-plans",
    "Misión real: planes con condiciones",
    "Organiza un fin de semana que depende del tiempo, del dinero y de los amigos: si + presente, luego futuro o mandato.",
    "7 min",
    [
      sec(
        "Plan A y plan B",
        "Si + presente → presente, futuro o mandato. Nunca futuro después de si.",
        [
          ["Si hace sol, iremos a la montaña.", "If it's sunny, we'll go to the mountains."],
          ["Si llueve, nos quedamos en casa y vemos una película.", "If it rains, we stay home and watch a movie."],
        ],
        [
          fb("Completa el plan.", "Si ___ tiempo, visitaremos el museo. (tener, nosotros)", "tenemos", "Si + presente, nunca futuro."),
        ]
      ),
      sec(
        "Instrucciones para tu compañero",
        "Si + presente → mandato: para dar instrucciones condicionadas.",
        [
          ["Si llega el paquete, ábrelo.", "If the package arrives, open it."],
          ["Si ves a Marta, dile que la llamo luego.", "If you see Marta, tell her I'll call her later."],
        ],
        [
          fb("Completa la instrucción.", "Si tienes hambre, ___ algo de la nevera. (coger, tú)", "coge", "Mandato de tú: coge."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si el tren ___ tarde, perderemos la conexión. (llegar)", "llega", "Si + presente."),
      fb("Completa.", "Si no encuentras las llaves, ___ al portero. (llamar, tú)", "llama", "Resultado como mandato."),
      fb("Completa.", "Si mis padres vienen, ___ paella. (hacer, yo, futuro)", "haré", "Resultado en futuro."),
      mc(
        "¿Cuál es correcta?",
        ["Si me llamas, te contaré todo.", "Si me llamarás, te contaré todo.", "Si me llames, te contaré todo.", "Si me llamarías, te cuento todo."],
        0,
        "Después de si (real) → presente de indicativo."
      ),
      mt(
        "Relaciona cada condición con su resultado lógico.",
        [
          ["Si hace frío,", "ponte un abrigo."],
          ["Si estás cansado,", "vete a dormir."],
          ["Si no hay pan,", "compraré en la esquina."],
          ["Si terminas pronto,", "llámame."],
        ],
        "Condición en presente; resultado en mandato o futuro."
      ),
      toEs("If you (tú) need help, call me.", "Si necesitas ayuda, llámame.", "Si + presente + mandato con pronombre pegado.", ["Si necesitas ayuda, me llamas.", "Si tú necesitas ayuda, llámame."]),
      wo("Si no nos damos prisa, perderemos el autobús.", "Si + presente, futuro.", "If we don't hurry, we'll miss the bus."),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1r-error-hunt-si-cuando",
    "Caza de errores: si, cuando y el futuro",
    "«Si lloverá», «cuando llegaré», «si llegues» — los errores más comunes con las condiciones.",
    "7 min",
    [
      sec(
        "Si no lleva ni futuro ni subjuntivo presente",
        "Después de si (condición real) va presente de indicativo. ✗ Si lloverá / ✗ Si llueva → ✓ Si llueve.",
        [
          ["✗ Si tendré tiempo, iré. → ✓ Si tengo tiempo, iré.", "If I have time, I'll go."],
        ],
        [
          mc(
            "Corrige: «Si vengas, trae vino.»",
            ["Si vienes, trae vino.", "Si vendrás, trae vino.", "Si venías, trae vino.", "No hay error."],
            0,
            "Si + presente de indicativo: vienes."
          ),
        ]
      ),
      sec(
        "Cuando con futuro: subjuntivo",
        "Cuando + presente de indicativo = hábito (cuando llueve, me quedo en casa). Cuando + algo futuro → subjuntivo (cuando llegues, llámame).",
        [
          ["Cuando llego a casa, ceno.", "When I get home, I have dinner. (habit)"],
          ["Cuando llegues a casa, avísame.", "When you get home, let me know. (future)"],
        ],
        [
          fb("Corrige el verbo.", "Cuando ___ mayor, seré piloto. (ser, yo; el alumno escribió: seré)", "sea", "Cuando + futuro → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Corrige el verbo.", "Si ___ mucho, te dolerá la cabeza. (beber, tú; el alumno escribió: beberás)", "bebes", "Si + presente."),
      fb("Corrige el verbo.", "Mañana te llamo cuando ___ del trabajo. (salir, yo; el alumno escribió: salgo)", "salga", "Futuro después de cuando → subjuntivo."),
      fb("Corrige el verbo.", "Siempre que ___ a Madrid, visito a mis tíos. (ir, yo)", "voy", "Hábito → indicativo."),
      ms(
        "¿Qué frases son correctas?",
        ["Si llueve, no saldremos.", "Cuando termine, te aviso.", "Si estaría libre, te ayudaría mañana.", "Cuando era niño, comía mucho."],
        [0, 1, 3],
        "Si + presente para condiciones reales: si estoy libre, te ayudaré."
      ),
      mc(
        "«Si / cuando» — ¿cuál encaja? «___ me toca la lotería, me compro una casa.»",
        ["Si", "Cuando", "Aunque", "Para que"],
        0,
        "Ganar la lotería es incierto → si."
      ),
      toEs("When you (tú) finish, send me the file.", "Cuando termines, mándame el archivo.", "Cuando + subjuntivo para el futuro; mandato con pronombre.", ["Cuando termines, envíame el archivo.", "Cuando acabes, mándame el archivo."]),
      wo("Si mañana no llueve, iremos al lago en bici.", "Si + presente + futuro.", "If it doesn't rain tomorrow, we'll go to the lake by bike."),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1r-spiral-commands-conditional-si",
    "Repaso en espiral: mandatos, condicional y condiciones",
    "Lecciones 8–13 juntas, con el subjuntivo de las lecciones 1–7 de fondo.",
    "8 min",
    [
      sec(
        "Mensajes de un compañero de piso",
        "Lee los mensajes que Pablo te dejó en la nevera.",
        [
          ["Si llega mi madre, ábrele la puerta y dile que vuelvo a las seis.", "If my mom arrives, open the door for her and tell her I'll be back at six."],
          ["No toques la tarta; es para ella.", "Don't touch the cake; it's for her."],
          ["¿Podrías comprar leche? Te lo agradecería mucho.", "Could you buy milk? I'd really appreciate it."],
          ["Ojalá que no llueva, porque quiero que salgamos a cenar.", "I hope it doesn't rain, because I want us to go out to dinner."],
        ],
        [
          mt(
            "Relaciona cada forma de los mensajes con su estructura.",
            [
              ["ábrele", "mandato afirmativo de tú"],
              ["no toques", "mandato negativo de tú"],
              ["podrías", "condicional de cortesía"],
              ["no llueva", "subjuntivo tras ojalá"],
            ],
            "Cuatro estructuras del B1 en cuatro líneas."
          ),
        ]
      ),
    ],
    [
      fb("Responde a Pablo.", "Si tengo tiempo, te ___ la leche. (comprar, futuro)", "compraré", "Si + presente, futuro."),
      fb("Responde a Pablo.", "Yo que tú, no ___ una tarta tan grande. (hacer)", "haría", "Consejo → condicional."),
      fb("Responde a Pablo.", "Espero que tu madre ___ bien el viaje. (pasar)", "pase", "Esperar que + subjuntivo."),
      mc(
        "«Tell her (usted) that I'm arriving late.»",
        ["Dígale que llego tarde.", "Dile que llego tarde a usted.", "Le diga que llego tarde.", "Dígala que llego tarde."],
        0,
        "Mandato de usted + le pegado: dígale."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["No me lo digas.", "Si tendrás frío, ponte el abrigo.", "Te lo agradecería mucho.", "Es mejor que no salgas."],
        [0, 2, 3],
        "Si + presente: si tienes frío, ponte el abrigo."
      ),
      toEs("If you (tú) see Pablo, tell him to call me.", "Si ves a Pablo, dile que me llame.", "Si + presente + mandato; decir que + subjuntivo para una orden indirecta.", ["Si ves a Pablo, dile que me llame, por favor."]),
      wo("Deberíamos salir ya porque va a llover pronto.", "Condicional de consejo + ir a + infinitivo.", "We should leave now because it's going to rain soon."),
    ]
  ),
  L(
    "present-perfect-2",
    "b1r-dialogue-have-you-ever",
    "Laboratorio de diálogo: ¿alguna vez has…?",
    "Un juego de preguntas sobre experiencias de vida: responde con el pretérito perfecto y cuenta los detalles.",
    "7 min",
    [
      sec(
        "El juego",
        "¿Alguna vez has…? pregunta por experiencias de toda la vida. La respuesta usa el mismo tiempo: Sí, he… / No, nunca he…",
        [
          ["—¿Alguna vez has comido pulpo? —Sí, lo he comido varias veces.", "Have you ever eaten octopus? — Yes, I've eaten it several times."],
          ["—¿Has estado en México? —No, nunca he estado allí.", "Have you been to Mexico? — No, I've never been there."],
        ],
        [
          fb("Responde.", "—¿Alguna vez has visto una ballena? —Sí, ___ vista dos veces.", "la he", "Pronombre (la ballena → la) + haber + participio."),
        ]
      ),
      sec(
        "Los detalles van en pretérito",
        "Cuando das detalles concretos de una experiencia (cuándo, dónde), cambias al pretérito indefinido.",
        [
          ["He estado en Perú. Fui en 2019 con mi hermana.", "I've been to Peru. I went in 2019 with my sister."],
        ],
        [
          mc(
            "«He viajado a Italia. ___ en barco desde Barcelona.»",
            ["Fui", "He ido", "Iba", "Iré"],
            0,
            "El detalle concreto de una ocasión pasada → pretérito."
          ),
        ]
      ),
    ],
    [
      fb("Completa la pregunta.", "¿Alguna vez ___ un maratón? (correr, tú)", "has corrido", "Tú → has + participio."),
      fb("Completa la respuesta.", "No, nunca ___ en un avión. (subir, yo)", "he subido", "Yo → he + participio."),
      fb("Completa con el participio irregular.", "¿Habéis ___ el último libro de esa autora? (leer)", "leído", "Leer → leído (con tilde)."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Has probado el mate?", "Sí, lo probé en Argentina."],
          ["¿Habéis visto la película?", "No, todavía no la hemos visto."],
          ["¿Ha llamado alguien?", "Sí, ha llamado tu madre."],
          ["¿Han vuelto los niños?", "No, aún no han vuelto."],
        ],
        "El pretérito perfecto conecta el pasado con el presente; los detalles concretos van en pretérito."
      ),
      mc(
        "«I've never written a poem.»",
        ["Nunca he escrito un poema.", "Nunca he escribido un poema.", "Nunca escrito he un poema.", "Nunca he escrita un poema."],
        0,
        "Escribir → escrito (irregular, y no concuerda)."
      ),
      toEs("Have you (tú) ever been to Spain?", "¿Alguna vez has estado en España?", "Experiencia de vida → pretérito perfecto.", ["¿Has estado alguna vez en España?", "¿Has estado en España alguna vez?", "¿Alguna vez has ido a España?", "¿Has ido alguna vez a España?"]),
      wo("Mis padres nunca han salido de su pueblo.", "Nunca + haber + participio.", "My parents have never left their village."),
    ]
  ),
  L(
    "present-perfect-2",
    "b1r-contrast-perfect-preterite",
    "Contraste: he comido / comí",
    "Hoy frente a ayer, esta semana frente a la semana pasada — cuándo usar cada pasado.",
    "7 min",
    [
      sec(
        "La frontera del tiempo",
        "En España, el pretérito perfecto se usa para acciones dentro de un periodo que incluye el presente (hoy, esta semana, este año). El pretérito, para periodos terminados (ayer, la semana pasada, en 2010).",
        [
          ["Esta mañana he desayunado tarde.", "This morning I had breakfast late. (still today)"],
          ["Ayer desayuné tarde.", "Yesterday I had breakfast late. (finished period)"],
        ],
        [
          mc(
            "«Este año ___ mucho.» (viajar, nosotros)",
            ["hemos viajado", "viajamos ayer", "viajábamos", "viajaremos ayer"],
            0,
            "Este año incluye el presente → pretérito perfecto."
          ),
        ]
      ),
      sec(
        "La variación en América",
        "En gran parte de Latinoamérica, el pretérito se usa también para hoy: Hoy comí mucho. Ambos usos son correctos en su región; en los ejercicios de esta lección seguimos el uso de España.",
        [
          ["España: Hoy he visto a Juan.", "Today I've seen/I saw Juan."],
          ["México: Hoy vi a Juan.", "Today I saw Juan."],
        ],
        [
          ms(
            "¿Qué expresiones suelen ir con el pretérito perfecto (en España)?",
            ["hoy", "esta semana", "ayer", "el año pasado"],
            [0, 1],
            "Ayer y el año pasado son periodos terminados → pretérito."
          ),
        ]
      ),
    ],
    [
      fb("¿Perfecto o pretérito? (uso de España)", "Hoy ___ un correo importante. (recibir, yo)", "he recibido", "Hoy → pretérito perfecto."),
      fb("¿Perfecto o pretérito? (uso de España)", "El lunes pasado ___ un correo importante. (recibir, yo)", "recibí", "El lunes pasado → pretérito."),
      fb("¿Perfecto o pretérito? (uso de España)", "En 2015 mis padres ___ a Canadá. (mudarse)", "se mudaron", "Fecha terminada → pretérito."),
      fb("¿Perfecto o pretérito? (uso de España)", "Esta semana no ___ nada. (hacer, yo)", "he hecho", "Esta semana → pretérito perfecto; hacer → hecho."),
      ms(
        "¿Qué marcadores suelen llevar pretérito perfecto (en España)?",
        ["últimamente", "anoche", "este mes", "hace dos años"],
        [0, 2],
        "Últimamente y este mes incluyen el presente; anoche y hace dos años están terminados."
      ),
      toEs("This week I've worked a lot, but last week I rested.", "Esta semana he trabajado mucho, pero la semana pasada descansé.", "Periodo abierto → perfecto; periodo cerrado → pretérito.", ["Esta semana he trabajado mucho pero la semana pasada descansé."]),
      wo("¿Ya has terminado el informe que te pedí ayer?", "Ya + perfecto (conectado con ahora) + pretérito (ayer).", "Have you finished the report I asked you for yesterday yet?"),
    ]
  ),
  L(
    "present-perfect-2",
    "b1r-error-hunt-participles",
    "Caza de errores: participios y pronombres",
    "«Hacido», «he lo visto», «hemos abrido» — corrige los errores típicos del pretérito perfecto.",
    "7 min",
    [
      sec(
        "Participios irregulares",
        "Los más frecuentes: hecho, dicho, escrito, visto, puesto, vuelto, roto, muerto, abierto, cubierto, descubierto. Los compuestos siguen el mismo patrón: devuelto, deshecho, supuesto.",
        [
          ["✗ He hacido la cena. → ✓ He hecho la cena.", "I've made dinner."],
          ["✗ Han abrido la tienda. → ✓ Han abierto la tienda.", "They've opened the store."],
        ],
        [
          fb("Corrige el participio.", "¿Quién ha ___ el vaso? (romper; el alumno escribió: rompido)", "roto", "Romper → roto."),
        ]
      ),
      sec(
        "Nada entre haber y el participio",
        "Los pronombres y el no van antes de haber, nunca en medio: ✗ He lo visto → ✓ Lo he visto.",
        [
          ["✗ Hemos no comido. → ✓ No hemos comido.", "We haven't eaten."],
          ["✗ Has te duchado? → ✓ ¿Te has duchado?", "Have you showered?"],
        ],
        [
          mc(
            "Corrige: «Ella ha se levantado temprano.»",
            ["Ella se ha levantado temprano.", "Ella ha levantádose temprano.", "Ella ha levantado se temprano.", "No hay error."],
            0,
            "El reflexivo va delante de haber."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el participio.", "Todavía no han ___ de vacaciones. (volver; el alumno escribió: volvido)", "vuelto", "Volver → vuelto."),
      fb("Corrige el participio.", "¿Qué te ha ___ el médico? (decir; el alumno escribió: decido)", "dicho", "Decir → dicho."),
      fb("Corrige el participio.", "Hemos ___ la mesa para la cena. (poner; el alumno escribió: ponido)", "puesto", "Poner → puesto."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se lo he explicado dos veces.", "Nunca he visto el mar.", "Habéis descubrido algo?", "¿Por qué no me lo has dicho?"],
        [2],
        "Descubrir → descubierto (y faltan los signos de interrogación)."
      ),
      mt(
        "Relaciona cada infinitivo con su participio.",
        [
          ["cubrir", "cubierto"],
          ["morir", "muerto"],
          ["devolver", "devuelto"],
          ["satisfacer", "satisfecho"],
        ],
        "Los compuestos heredan la irregularidad: devolver → devuelto, satisfacer → satisfecho."
      ),
      toEs("They haven't told me anything yet.", "Todavía no me han dicho nada.", "No + pronombre + haber + participio irregular.", ["Aún no me han dicho nada.", "No me han dicho nada todavía."]),
      wo("¿Dónde has puesto las llaves del coche?", "Poner → puesto.", "Where have you put the car keys?"),
    ]
  ),
  L(
    "past-perfect-2",
    "b1r-story-past-before-past",
    "Detective de historias: el pasado antes del pasado",
    "Una historia contada desordenada: descubre qué había pasado antes de qué.",
    "8 min",
    [
      sec(
        "El misterio del pastel",
        "El pluscuamperfecto (había + participio) marca lo que ya había ocurrido antes de otro momento del pasado.",
        [
          ["Cuando Marta llegó a la fiesta, alguien ya se había comido el pastel.", "When Marta got to the party, someone had already eaten the cake."],
          ["Nadie sabía quién había sido.", "Nobody knew who it had been."],
          ["Luego descubrieron que el perro había entrado por la ventana.", "Then they found out that the dog had come in through the window."],
        ],
        [
          mc(
            "¿Qué pasó primero?",
            ["El perro entró por la ventana.", "Marta llegó a la fiesta.", "Descubrieron al culpable.", "Todos buscaron el pastel."],
            0,
            "Había entrado → ocurrió antes que todo lo demás."
          ),
        ]
      ),
      sec(
        "Ordena los hechos",
        "Ya y todavía no son las palabras clave del pluscuamperfecto.",
        [
          ["Cuando llamé, ya habían salido.", "When I called, they had already left."],
          ["Todavía no había amanecido cuando nos fuimos.", "The sun hadn't come up yet when we left."],
        ],
        [
          fb("Completa.", "Cuando llegamos al cine, la película ya ___ empezado.", "había", "Ella → había + participio."),
        ]
      ),
    ],
    [
      fb("Completa.", "No pude entrar porque ___ las llaves en casa. (dejar, yo)", "había dejado", "Dejar las llaves ocurrió antes de no poder entrar."),
      fb("Completa.", "Los niños estaban cansados porque no ___ en toda la noche. (dormir)", "habían dormido", "Ellos → habían + participio."),
      fb("Completa.", "Nunca ___ un lugar tan bonito hasta ese viaje. (ver, yo)", "había visto", "Ver → visto."),
      mc(
        "«When I got to the station, the train had already left.»",
        ["Cuando llegué a la estación, el tren ya había salido.", "Cuando llegaba a la estación, el tren ya salió.", "Cuando había llegado a la estación, el tren ya salió.", "Cuando llegué a la estación, el tren ya ha salido."],
        0,
        "Pretérito para el momento de referencia; pluscuamperfecto para lo anterior."
      ),
      mt(
        "Relaciona las dos partes.",
        [
          ["Aprobé el examen porque", "había estudiado mucho."],
          ["No tenía hambre porque", "ya había comido."],
          ["Estaba nervioso porque", "nunca había hablado en público."],
          ["Me reconoció porque", "nos habíamos conocido antes."],
        ],
        "La causa ocurrió antes → pluscuamperfecto."
      ),
      toEs("She told me that she had lost her passport.", "Me dijo que había perdido el pasaporte.", "Estilo indirecto en el pasado → pluscuamperfecto.", ["Me dijo que había perdido su pasaporte.", "Ella me dijo que había perdido el pasaporte."]),
      wo("Al final descubrimos que el perro había sido el culpable.", "Pretérito (descubrimos) + pluscuamperfecto (había sido).", "In the end we found out the dog had been the culprit."),
    ]
  ),
  L(
    "past-perfect-2",
    "b1r-timeline-three-pasts",
    "Línea del tiempo: los tres pasados",
    "Pretérito, imperfecto y pluscuamperfecto en una sola historia: cada uno con su trabajo.",
    "8 min",
    [
      sec(
        "Tres trabajos distintos",
        "Pretérito: lo que pasó (la acción principal). Imperfecto: cómo era la escena. Pluscuamperfecto: lo que ya había pasado antes.",
        [
          ["Era de noche. Llegué a casa y vi que alguien había abierto la ventana.", "It was night. I got home and saw that someone had opened the window."],
        ],
        [
          mt(
            "Relaciona cada verbo con su función.",
            [
              ["era", "la escena"],
              ["llegué", "la acción principal"],
              ["había abierto", "algo anterior"],
            ],
            "Tres pasados, tres funciones."
          ),
        ]
      ),
      sec(
        "La historia de Andrés",
        "Lee y completa con el pasado adecuado.",
        [
          ["Andrés estaba muy contento: por fin había terminado la carrera.", "Andrés was very happy: he had finally finished his degree."],
          ["Esa noche salió a celebrarlo con sus amigos.", "That night he went out to celebrate with his friends."],
        ],
        [
          fb("Completa.", "Sus amigos le ___ una sorpresa. (preparar, pluscuamperfecto)", "habían preparado", "La sorpresa se preparó antes → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Elige el pasado adecuado.", "Mientras Andrés ___ en el restaurante, empezó a llover. (cenar)", "cenaba", "Acción en curso → imperfecto."),
      fb("Elige el pasado adecuado.", "De repente, ___ su ex novia. (entrar)", "entró", "Acción puntual → pretérito."),
      fb("Elige el pasado adecuado.", "No la ___ desde hacía cinco años. (ver, él)", "había visto", "Anterior al momento de la historia → pluscuamperfecto."),
      mc(
        "«Andrés was nervous because he had never talked to her about it.»",
        ["Andrés estaba nervioso porque nunca le había hablado de eso.", "Andrés estuvo nervioso porque nunca le habló de eso.", "Andrés estaba nervioso porque nunca le ha hablado de eso.", "Andrés era nervioso porque nunca le había hablado de eso."],
        0,
        "Estado → imperfecto (estaba); lo anterior → pluscuamperfecto."
      ),
      ms(
        "¿Qué frases usan bien los tiempos?",
        ["Cuando salimos, ya había dejado de llover.", "Hacía frío y llevábamos abrigos.", "Ayer había comido paella.", "Cuando llegó, ya nos fuimos."],
        [0, 1],
        "«Ayer había comido» necesita otro momento de referencia; «cuando llegó, ya nos habíamos ido»."
      ),
      toEs("When we arrived, the concert had already started and it was raining.", "Cuando llegamos, el concierto ya había empezado y llovía.", "Pretérito + pluscuamperfecto + imperfecto.", ["Cuando llegamos, el concierto ya había empezado y estaba lloviendo.", "Cuando llegamos, ya había empezado el concierto y llovía."]),
      wo("Nunca había visto a mi padre tan emocionado.", "Nunca + pluscuamperfecto.", "I had never seen my father so moved."),
    ]
  ),
  L(
    "past-perfect-2",
    "b1r-transform-perfect-to-pluperfect",
    "Transformaciones: de «ha hecho» a «había hecho»",
    "Pasa frases del presente al pasado: el pretérito perfecto se convierte en pluscuamperfecto.",
    "7 min",
    [
      sec(
        "Un paso atrás en el tiempo",
        "Si cuentas algo desde el pasado, todo retrocede: ha salido → había salido; dice que ha terminado → dijo que había terminado.",
        [
          ["Ana dice: «He terminado.» → Ana dijo que había terminado.", "Ana said she had finished."],
          ["Veo que has limpiado. → Vi que habías limpiado.", "I saw that you had cleaned."],
        ],
        [
          fb("Pasa al pasado.", "Sé que han llegado. → Sabía que ___ llegado.", "habían", "Han → habían."),
        ]
      ),
    ],
    [
      fb("Pasa al pasado.", "Me dice que ha perdido el tren. → Me dijo que ___ el tren.", "había perdido", "Ha perdido → había perdido."),
      fb("Pasa al pasado.", "Creo que hemos ganado. → Creía que ___.", "habíamos ganado", "Hemos → habíamos."),
      fb("Pasa al pasado.", "Nunca he estado aquí. → Nunca ___ aquí antes de aquel día.", "había estado", "He → había."),
      fb("Pasa al pasado.", "Veo que te has cortado el pelo. → Vi que te ___ el pelo.", "habías cortado", "Te has cortado → te habías cortado."),
      mc(
        "El jefe dice: «Ya he enviado el correo». En pasado:",
        ["El jefe dijo que ya había enviado el correo.", "El jefe dijo que ya ha enviado el correo.", "El jefe dice que ya había enviado el correo.", "El jefe dijo que ya enviaba el correo."],
        0,
        "Dijo + había enviado."
      ),
      toEs("I didn't know that you (tú) had lived in Chile.", "No sabía que habías vivido en Chile.", "Sabía (imperfecto) + habías vivido (pluscuamperfecto).", ["Yo no sabía que habías vivido en Chile.", "No sabía que tú habías vivido en Chile."]),
      wo("Me contó que nunca había montado en avión.", "Contar en pretérito + pluscuamperfecto.", "He told me he had never been on a plane."),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1r-build-combine-sentences",
    "Construye frases: une dos en una",
    "Convierte pares de frases cortas en una sola con que, quien, donde o lo que.",
    "7 min",
    [
      sec(
        "Con que",
        "Que une dos frases que comparten un sustantivo: Tengo un amigo. El amigo vive en Roma. → Tengo un amigo que vive en Roma.",
        [
          ["Compré un libro. El libro es muy largo. → Compré un libro que es muy largo.", "I bought a book that is very long."],
        ],
        [
          fb("Une las frases.", "Esta es la casa. Mi abuelo construyó la casa. → Esta es la casa ___ construyó mi abuelo.", "que", "Que sustituye a «la casa»."),
        ]
      ),
      sec(
        "Con preposición: quien, el que, donde",
        "Tras una preposición, para personas usa quien o el/la que; para cosas, el/la que. Para lugares, donde.",
        [
          ["Hablé con una chica. La chica es de Cuba. → La chica con quien hablé es de Cuba.", "The girl I spoke with is from Cuba."],
          ["Es el pueblo. Nací en el pueblo. → Es el pueblo donde nací.", "It's the town where I was born."],
        ],
        [
          fb("Une las frases.", "Es mi profesora. Aprendí mucho con ella. → Es la profesora con ___ aprendí mucho.", "quien", "Persona + preposición → quien (o la que)."),
        ]
      ),
    ],
    [
      fb("Une las frases.", "Visitamos un museo. En el museo hay obras de Goya. → Visitamos un museo ___ hay obras de Goya.", "donde", "Lugar → donde (o en el que)."),
      fb("Une las frases.", "No entendí algo. Dijo algo. → No entendí ___ dijo.", "lo que", "Algo no específico → lo que."),
      fb("Une las frases.", "Son los amigos. Viajé con ellos a Perú. → Son los amigos con los ___ viajé a Perú.", "que", "Con los que (personas plurales con preposición)."),
      wo("La película que vimos anoche fue muy aburrida.", "Relativa con que dentro del sujeto.", "The movie we saw last night was very boring."),
      wo("El hotel en el que nos quedamos tenía piscina.", "Preposición + el que para cosas.", "The hotel we stayed at had a pool."),
      mc(
        "«Lo que más me gusta de ti es tu sinceridad.» — ¿qué significa «lo que»?",
        ["What", "Who", "Where", "Which one"],
        0,
        "Lo que = what (the thing that)."
      ),
      toEs("The woman who lives upstairs is a doctor.", "La mujer que vive arriba es médica.", "Que para personas sin preposición.", ["La mujer que vive arriba es doctora.", "La señora que vive arriba es médica."]),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1r-error-hunt-relatives",
    "Caza de errores: los pronombres relativos",
    "«La chica quien vi», «lo cual que», «el cual que» — los relativos mal usados, corregidos uno a uno.",
    "7 min",
    [
      sec(
        "Quien sin preposición",
        "En relativas especificativas sin preposición, se usa que, no quien: ✗ La chica quien vi → ✓ La chica que vi.",
        [
          ["✗ El hombre quien trabaja aquí… → ✓ El hombre que trabaja aquí…", "The man who works here…"],
          ["✓ La persona con quien hablé…", "The person I spoke with… (with a preposition, quien is fine)"],
        ],
        [
          mc(
            "Corrige: «Tengo una vecina quien canta ópera.»",
            ["Tengo una vecina que canta ópera.", "Tengo una vecina la quien canta ópera.", "Tengo una vecina cual canta ópera.", "No hay error."],
            0,
            "Sin preposición → que."
          ),
        ]
      ),
      sec(
        "Que vs. lo que",
        "Que necesita un sustantivo antes. Lo que se refiere a una idea completa o a algo no nombrado.",
        [
          ["✗ No sé que quieres. → ✓ No sé lo que quieres. / No sé qué quieres.", "I don't know what you want."],
          ["Llegó tarde, lo que me molestó.", "He arrived late, which annoyed me."],
        ],
        [
          fb("Corrige.", "Todo ___ dices es verdad. (el alumno escribió: que)", "lo que", "Todo lo que = everything that."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El chico ___ te presenté ayer es mi primo. (el alumno escribió: quien)", "que", "Sin preposición → que (o a quien, con la a personal)."),
      fb("Corrige.", "Perdió el tren, ___ significa que llegará tarde. (el alumno escribió: que)", "lo que", "Se refiere a toda la idea anterior → lo que."),
      fb("Corrige.", "La empresa para ___ trabajo es alemana. (el alumno escribió: que)", "la que", "Tras preposición, con cosas → la que."),
      ms(
        "¿Qué frases son correctas?",
        ["Los amigos con quienes salgo son simpáticos.", "Es la ciudad donde me enamoré.", "El libro que me prestaste es genial.", "Haz lo cual quieras."],
        [0, 1, 2],
        "Haz lo que quieras."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Lo que necesito es dormir.", "Que necesito es dormir.", "El que necesito es dormir.", "Quien necesito es dormir."],
        0,
        "Algo no específico al principio → lo que."
      ),
      toEs("I don't understand what you (tú) are saying.", "No entiendo lo que dices.", "Lo que = what (the thing that).", ["No entiendo qué dices.", "No entiendo lo que estás diciendo."]),
      wo("Esa es la razón por la que no vine.", "Preposición + la que con razón (femenino).", "That's the reason why I didn't come."),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1r-mission-describe-without-word",
    "Misión real: descríbelo sin decirlo",
    "Un juego de adivinanzas: define objetos, personas y lugares con relativas — sin decir la palabra.",
    "7 min",
    [
      sec(
        "Cómo jugar",
        "Define con relativas: Es una cosa que…, Es una persona que…, Es un lugar donde…, Es lo que…",
        [
          ["Es una persona que trabaja en un hospital y cuida a los enfermos. → un enfermero", "It's a person who works in a hospital and looks after the sick."],
          ["Es un lugar donde se compran medicinas. → una farmacia", "It's a place where you buy medicine."],
        ],
        [
          mc(
            "«Es una cosa que usas para abrir una puerta.»",
            ["una llave", "una ventana", "un coche", "una silla"],
            0,
            "Una llave (key)."
          ),
        ]
      ),
      sec(
        "Tu turno de definir",
        "Ahora completa las definiciones con el relativo correcto.",
        [
          ["Es algo con lo que escribes.", "It's something you write with."],
        ],
        [
          fb("Completa la definición de «biblioteca».", "Es un lugar ___ puedes leer y pedir libros prestados.", "donde", "Lugar → donde."),
        ]
      ),
    ],
    [
      fb("Completa la definición de «cartero».", "Es la persona ___ reparte las cartas.", "que", "Persona sin preposición → que."),
      fb("Completa la definición de «tijeras».", "Es la herramienta con la ___ cortas papel.", "que", "Con la que."),
      fb("Completa la definición de «cumpleaños».", "Es el día en el ___ celebras que naciste.", "que", "En el que (día)."),
      mt(
        "Relaciona cada definición con la palabra.",
        [
          ["Es lo que haces cuando tienes sueño.", "dormir"],
          ["Es la persona con quien te casas.", "el esposo / la esposa"],
          ["Es el lugar donde aterrizan los aviones.", "el aeropuerto"],
          ["Es la cosa que te protege de la lluvia.", "el paraguas"],
        ],
        "Lo que, con quien, donde, que."
      ),
      mc(
        "¿Qué definición describe una «nevera»?",
        ["Es el aparato en el que guardas la comida fría.", "Es la persona que cocina.", "Es el lugar donde duermes.", "Es lo que comes por la noche."],
        0,
        "En el que = in which."
      ),
      toEs("It's the person who teaches you to drive.", "Es la persona que te enseña a conducir.", "Que para personas sin preposición.", ["Es la persona que te enseña a manejar."]),
      wo("Es la época del año en la que caen las hojas.", "En la que para época (femenino).", "It's the time of year when the leaves fall."),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1r-mission-signs-ads",
    "Misión real: carteles y anuncios",
    "Pasea por una ciudad y descifra sus carteles: se vende, se alquila, se busca, se habla inglés.",
    "7 min",
    [
      sec(
        "Lo que dicen las paredes",
        "Los carteles usan el se pasivo: se + verbo en tercera persona, que concuerda con lo que se vende, alquila o busca.",
        [
          ["Se vende piso.", "Apartment for sale."],
          ["Se alquilan habitaciones.", "Rooms for rent."],
          ["Se necesitan camareros.", "Waiters needed."],
          ["Se habla inglés.", "English spoken."],
        ],
        [
          fb("Completa el cartel.", "Se ___ bicicletas usadas. (vender)", "venden", "Bicicletas es plural → se venden."),
        ]
      ),
      sec(
        "Normas y prohibiciones",
        "Para normas generales sin objeto concreto, se usa el se impersonal (verbo en singular): No se puede fumar. Se prohíbe el paso.",
        [
          ["No se puede aparcar aquí.", "No parking here."],
          ["Se ruega silencio.", "Silence, please."],
        ],
        [
          mc(
            "«___ prohibido tocar las obras.»",
            ["Está", "Se", "Es", "Son"],
            0,
            "Estar prohibido + infinitivo. (También: Se prohíbe tocar las obras.)"
          ),
        ]
      ),
    ],
    [
      fb("Completa el cartel.", "Se ___ clases particulares de matemáticas. (dar)", "dan", "Clases → se dan."),
      fb("Completa el cartel.", "Se ___ perro perdido; responde al nombre de Toby. (buscar)", "busca", "Perro (singular) → se busca."),
      fb("Completa el cartel.", "En este restaurante se ___ muy bien. (comer)", "come", "Impersonal, sin objeto → singular."),
      mt(
        "Relaciona cada cartel con su lugar.",
        [
          ["Se reparan móviles.", "una tienda de tecnología"],
          ["Se aceptan tarjetas.", "una caja"],
          ["No se admiten mascotas.", "un hotel"],
          ["Se hacen fotocopias.", "una papelería"],
        ],
        "Se + tercera persona que concuerda con el sustantivo."
      ),
      ms(
        "¿Qué carteles son correctos?",
        ["Se venden coches.", "Se alquila apartamentos.", "Se busca profesora.", "Se habla francés y alemán."],
        [0, 2, 3],
        "Apartamentos es plural → se alquilan."
      ),
      toEs("Spanish is spoken in twenty-one countries.", "Se habla español en veintiún países.", "Se pasivo; veintiún delante de un sustantivo masculino.", ["El español se habla en veintiún países.", "Se habla español en veintiun países."]),
      wo("En esta tienda no se aceptan devoluciones.", "Se pasivo en plural con devoluciones.", "Returns are not accepted in this store."),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1r-transform-active-passive-se",
    "Transformaciones: activa, pasiva y se",
    "Una misma noticia contada de tres maneras: activa, pasiva con ser y con se.",
    "8 min",
    [
      sec(
        "Tres versiones",
        "Activa: El ayuntamiento construyó el puente. Pasiva con ser: El puente fue construido por el ayuntamiento. Con se: Se construyó el puente (sin agente).",
        [
          ["Los vecinos pintaron el mural.", "The neighbors painted the mural. (active)"],
          ["El mural fue pintado por los vecinos.", "The mural was painted by the neighbors. (passive)"],
          ["Se pintó el mural.", "The mural was painted. (se, no agent)"],
        ],
        [
          fb("Pasa a la pasiva con ser.", "La policía detuvo a los ladrones. → Los ladrones fueron ___ por la policía.", "detenidos", "El participio concuerda con el sujeto: detenidos."),
        ]
      ),
      sec(
        "Concordancia en la pasiva",
        "En la pasiva con ser, el participio concuerda en género y número con el sujeto. Con se, el verbo concuerda con el sustantivo.",
        [
          ["Las cartas fueron enviadas ayer. / Se enviaron las cartas ayer.", "The letters were sent yesterday."],
        ],
        [
          fb("Pasa a la construcción con se.", "Las entradas fueron vendidas en una hora. → ___ las entradas en una hora.", "Se vendieron", "Se + verbo en plural (entradas)."),
        ]
      ),
    ],
    [
      fb("Pasa a la pasiva con ser.", "Cervantes escribió el Quijote. → El Quijote fue ___ por Cervantes.", "escrito", "Escribir → escrito (masculino, singular)."),
      fb("Pasa a la pasiva con ser.", "El jurado eligió a las ganadoras. → Las ganadoras fueron ___ por el jurado.", "elegidas", "Femenino plural: elegidas."),
      fb("Pasa a la construcción con se.", "Abrieron una nueva biblioteca. → ___ una nueva biblioteca.", "Se abrió", "Singular → se abrió."),
      mc(
        "¿Cuál es la versión con se de «Los resultados serán publicados mañana»?",
        ["Se publicarán los resultados mañana.", "Se publicará los resultados mañana.", "Se publican los resultados ayer.", "Los resultados se publicó mañana."],
        0,
        "Futuro plural: se publicarán."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La casa fue vendida en marzo.", "Los premios fueron entregado ayer.", "Se construyeron dos hospitales.", "El edificio fue diseñado por una arquitecta."],
        [0, 2, 3],
        "Los premios fueron entregados (concordancia)."
      ),
      toEs("The bridge was built in 1920.", "El puente fue construido en 1920.", "Pasiva con ser; también: Se construyó el puente en 1920.", ["Se construyó el puente en 1920.", "El puente se construyó en 1920."]),
      wo("La noticia fue confirmada por el gobierno esta mañana.", "Ser + participio concordado + por + agente.", "The news was confirmed by the government this morning."),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1r-contrast-se-pasivo-impersonal",
    "Contraste: se pasivo / se impersonal",
    "¿Se vende o se venden? ¿Se busca o se buscan? Aprende a decidir en un segundo.",
    "7 min",
    [
      sec(
        "La prueba del sustantivo",
        "Si hay un sustantivo sin preposición que recibe la acción, el verbo concuerda con él (se pasivo). Si no hay sustantivo, o hay una persona con a, el verbo va en singular (se impersonal).",
        [
          ["Se venden casas.", "Houses are sold. (pasivo: concuerda con casas)"],
          ["Se vive bien aquí.", "One lives well here. (impersonal: sin sustantivo)"],
          ["Se busca a los testigos.", "The witnesses are being sought. (impersonal: a + personas)"],
        ],
        [
          mc(
            "«En Argentina ___ mucha carne.»",
            ["se come", "se comen", "se comemos", "se comes"],
            0,
            "Carne (singular) → se come."
          ),
        ]
      ),
    ],
    [
      fb("¿Singular o plural?", "Aquí se ___ muchos idiomas. (hablar)", "hablan", "Idiomas (plural) → se hablan."),
      fb("¿Singular o plural?", "En verano se ___ muy tarde en España. (cenar)", "cena", "Sin sustantivo → impersonal singular."),
      fb("¿Singular o plural?", "Se ___ a los ganadores por teléfono. (llamar)", "llamará", "A + personas → impersonal singular (futuro: se llamará)."),
      fb("¿Singular o plural?", "Se ___ tres pisos en el centro. (alquilar)", "alquilan", "Tres pisos → plural."),
      ms(
        "¿Qué frases son correctas?",
        ["Se necesita paciencia.", "Se necesitan voluntarios.", "Se trabaja mucho en esta oficina.", "Se ayudan a los ancianos."],
        [0, 1, 2],
        "A + personas → singular: se ayuda a los ancianos."
      ),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Se dice que va a nevar.", "They say it's going to snow."],
          ["Se prohíbe fumar.", "Smoking is prohibited."],
          ["Se venden entradas.", "Tickets on sale."],
          ["¿Cómo se escribe tu nombre?", "How do you spell your name?"],
        ],
        "El se impersonal suele traducirse con «they», «one» o la pasiva en inglés."
      ),
      wo("En esta ciudad se sale mucho por la noche.", "Impersonal: sin sustantivo, verbo en singular.", "In this city people go out a lot at night."),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1r-dialogue-combined-pronouns",
    "Laboratorio de diálogo: ¿me lo prestas?",
    "Préstamos, regalos y favores entre compañeros de piso — sin repetir ni un solo sustantivo.",
    "7 min",
    [
      sec(
        "Pedir y prestar",
        "Orden: indirecto + directo. Le/les + lo/la/los/las → se lo/se la/se los/se las.",
        [
          ["—¿Me prestas tu cargador? —Claro, te lo presto.", "Can you lend me your charger? — Sure, I'll lend it to you."],
          ["—¿Le devolviste el libro a Sara? —Sí, se lo devolví ayer.", "Did you give Sara back her book? — Yes, I gave it back to her yesterday."],
        ],
        [
          fb("Responde.", "—¿Me dejas tus apuntes? —Sí, te ___ dejo.", "los", "Los apuntes → los."),
        ]
      ),
      sec(
        "Con infinitivos",
        "Con infinitivos puedes poner los dos pronombres antes del verbo conjugado o pegados al infinitivo (con tilde).",
        [
          ["Te lo voy a traer. = Voy a traértelo.", "I'm going to bring it to you."],
        ],
        [
          fb("Responde pegando los pronombres.", "—¿Le vas a dar la noticia a tu madre? —Sí, voy a ___ esta noche.", "dársela", "Dar + se + la → dársela (con tilde)."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Nos traes las bebidas? —Sí, ahora ___ las traigo.", "os", "A vosotros → os."),
      fb("Responde.", "—¿Les mandaste las fotos a tus padres? —Sí, ___ las mandé.", "se", "Les + las → se las."),
      fb("Responde.", "—¿Te han devuelto el dinero? —No, todavía no me ___ han devuelto.", "lo", "El dinero → lo."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Me explicas el problema?", "Sí, te lo explico."],
          ["¿Le regalaste la bufanda?", "Sí, se la regalé."],
          ["¿Os dieron las llaves?", "Sí, nos las dieron."],
          ["¿Les contaste los planes?", "Sí, se los conté."],
        ],
        "Indirecto + directo, y le/les → se."
      ),
      mc(
        "«I'm going to send it to them.» (el paquete)",
        ["Voy a mandárselo.", "Voy a mandarleslo.", "Se lo voy mandar.", "Les lo voy a mandar."],
        0,
        "Les + lo → se lo, pegados al infinitivo con tilde."
      ),
      toEs("Can you (tú) explain it to me again?", "¿Me lo puedes explicar otra vez?", "Me + lo antes del verbo conjugado.", ["¿Puedes explicármelo otra vez?", "¿Me lo puedes explicar de nuevo?", "¿Puedes explicármelo de nuevo?"]),
      wo("Si necesitas el coche, te lo presto el sábado.", "Te lo delante del verbo conjugado.", "If you need the car, I'll lend it to you on Saturday."),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1r-transform-double-pronouns",
    "Transformaciones: sustituye todo",
    "Frases llenas de sustantivos → frases con dos pronombres. Paso a paso.",
    "7 min",
    [
      sec(
        "Paso 1: el directo. Paso 2: el indirecto.",
        "Doy el libro a Ana. → Paso 1: Lo doy a Ana. → Paso 2: Le lo doy → Se lo doy.",
        [
          ["Compro flores a mi madre. → Se las compro.", "I buy flowers for my mother. → I buy them for her."],
          ["Mandé el correo al jefe. → Se lo mandé.", "I sent the email to the boss. → I sent it to him."],
        ],
        [
          fb("Sustituye los dos objetos.", "Explico la lección a los alumnos. → ___ la explico.", "Se", "Les + la → se la."),
        ]
      ),
    ],
    [
      fb("Sustituye los dos objetos.", "Traigo el café a ti. → ___ lo traigo.", "Te", "A ti → te."),
      fb("Sustituye los dos objetos.", "Dimos los regalos a los niños. → ___ los dimos.", "Se", "Les + los → se los."),
      fb("Sustituye los dos objetos.", "Nos enseñaron las fotos. → Nos ___ enseñaron.", "las", "Las fotos → las."),
      fb("Sustituye y pega al mandato.", "Da la llave a Pedro. → ___.", "Dásela", "Da + se + la → dásela."),
      mc(
        "«Estoy preparando la cena para mis suegros.» → con pronombres:",
        ["Se la estoy preparando.", "Les la estoy preparando.", "La se estoy preparando.", "Estoy preparándoles la."],
        0,
        "Se la delante, o pegado: estoy preparándosela."
      ),
      ms(
        "¿Qué transformaciones son correctas?",
        ["Pido un favor a mi hermano. → Se lo pido.", "Leo un cuento a mi hija. → Le lo leo.", "Me enviaron el paquete. → Me lo enviaron.", "Cuento el secreto a vosotros. → Os lo cuento."],
        [0, 2, 3],
        "Le lo nunca existe: se lo leo."
      ),
      wo("¿La verdad? Todavía no se la he dicho a nadie.", "Se la delante de haber.", "The truth? I haven't told it to anyone yet."),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1r-error-hunt-se-lo",
    "Caza de errores: le lo, se los, lo me",
    "Los errores más frecuentes con dos pronombres: orden, le lo y concordancia.",
    "7 min",
    [
      sec(
        "Tres reglas, tres errores",
        "(1) Indirecto antes que directo: ✗ lo me → ✓ me lo. (2) Nunca le lo / les la: → se lo / se la. (3) Se no muestra el plural del destinatario; el plural va en el directo: se los = them (things) to him/her/them.",
        [
          ["✗ Lo te doy. → ✓ Te lo doy.", "I give it to you."],
          ["✗ Les lo dije. → ✓ Se lo dije.", "I told it to them."],
        ],
        [
          mc(
            "Corrige: «Le la compré ayer.»",
            ["Se la compré ayer.", "La le compré ayer.", "Le compré la ayer.", "No hay error."],
            0,
            "Le + la → se la."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿Las entradas? Ya ___ las di a tus amigos. (el alumno escribió: les)", "se", "Les + las → se las."),
      fb("Corrige.", "Mi abuela ___ lo contó a mí. (el alumno escribió: lo me)", "me", "Me lo: indirecto primero."),
      fb("Corrige.", "¿El informe? Voy a ___ ahora. (enviar, a ti; el alumno escribió: enviartelo)", "enviártelo", "Tres sílabas añadidas → tilde: enviártelo."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se lo expliqué a mis padres.", "Me los prestó mi vecino.", "Lo le di.", "¿Nos la traes?"],
        [2],
        "Se lo di."
      ),
      mc(
        "«I gave them (the books) to her.»",
        ["Se los di.", "Le los di.", "Se lo di.", "Los le di."],
        0,
        "Libros → los; a ella → le → se."
      ),
      toEs("Don't tell it to him! (tú)", "¡No se lo digas!", "Negativo: pronombres delante; le + lo → se lo.", ["¡No se lo cuentes!"]),
      wo("Necesito tu bici; ¿me la prestas mañana?", "Me la delante del verbo conjugado.", "I need your bike; can you lend it to me tomorrow?"),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1r-mission-lost-and-found",
    "Misión real: objetos perdidos",
    "En la oficina de objetos perdidos de un aeropuerto: ¿de quién es cada cosa? El mío, el tuyo, el suyo.",
    "7 min",
    [
      sec(
        "¿Es tuyo?",
        "Los pronombres posesivos concuerdan con el objeto poseído: el mío, la mía, los míos, las mías. Después de ser, el artículo suele omitirse: Es mío.",
        [
          ["—¿Esta maleta es suya? —No, la mía es azul.", "Is this suitcase yours? — No, mine is blue."],
          ["—¿Son vuestras estas gafas? —Sí, son nuestras.", "Are these glasses yours? — Yes, they're ours."],
        ],
        [
          fb("Responde.", "—¿Este paraguas es tuyo? —Sí, es ___.", "mío", "Paraguas es masculino singular → mío."),
        ]
      ),
      sec(
        "Aclarar el suyo",
        "Suyo puede ser de él, de ella, de usted, de ellos… Si hay ambigüedad, se usa de + persona: la de él, el de ella.",
        [
          ["—¿Es el abrigo de Laura o el de Pedro? —Es el de ella.", "Is it Laura's coat or Pedro's? — It's hers."],
        ],
        [
          mc(
            "«Mi móvil es negro. ¿Y ___?» (tú)",
            ["el tuyo", "la tuya", "tu", "tuyo el"],
            0,
            "Móvil (masculino) → el tuyo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Tus maletas están aquí, pero las ___ no han llegado. (nosotros)", "nuestras", "Maletas → las nuestras."),
      fb("Completa.", "Ese pasaporte no es de Ana; el ___ es rojo. (de ella)", "suyo", "Pasaporte → el suyo."),
      fb("Completa.", "—¿Estas llaves son de ustedes? —Sí, son ___.", "nuestras", "Llaves (femenino plural) → nuestras."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Es mío.", "It's mine."],
          ["Es el mío.", "It's mine (the one that's mine, among others)."],
          ["Un amigo mío.", "A friend of mine."],
          ["Lo mío es la música.", "My thing is music."],
        ],
        "El posesivo sin artículo después de ser, con artículo para identificar, detrás del nombre y con lo neutro."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La tuya es más grande.", "Estos zapatos son míos.", "Es un primo tuyo.", "Mía mochila es verde."],
        [0, 1, 2],
        "Delante del sustantivo se usa el adjetivo: mi mochila."
      ),
      toEs("Your (tú) suitcase is here, but mine is lost.", "Tu maleta está aquí, pero la mía está perdida.", "Adjetivo (tu) delante; pronombre (la mía) solo.", ["Tu maleta está aquí, pero la mía se ha perdido."]),
      wo("Perdona, creo que ese asiento es el nuestro.", "El nuestro concuerda con asiento.", "Excuse me, I think that seat is ours."),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1r-contrast-mi-mio",
    "Contraste: mi / mío, tu / tuyo",
    "Adjetivo delante del nombre o pronombre en su lugar — elige la forma correcta en cada contexto.",
    "7 min",
    [
      sec(
        "Dos formas para cada persona",
        "Delante del sustantivo: mi, tu, su, nuestro, vuestro, su. En lugar del sustantivo o detrás: mío, tuyo, suyo, nuestro, vuestro, suyo.",
        [
          ["mi casa / la mía", "my house / mine"],
          ["tus libros / los tuyos", "your books / yours"],
          ["un amigo mío", "a friend of mine"],
        ],
        [
          mc(
            "«¡Dios ___!»",
            ["mío", "mi", "el mío", "mía"],
            0,
            "Expresión fija con el posesivo detrás: ¡Dios mío!"
          ),
        ]
      ),
    ],
    [
      fb("Elige mi/tu o mío/tuyo.", "Querida ___: te escribo desde París.", "mía", "Detrás del sustantivo implícito (querida amiga mía) → mía."),
      fb("Elige la forma correcta.", "Este no es ___ coche; es el de mi hermano.", "mi", "Delante del sustantivo → mi."),
      fb("Elige la forma correcta.", "Tu casa es grande, pero la ___ tiene jardín. (yo)", "mía", "En lugar del sustantivo → la mía."),
      fb("Elige la forma correcta.", "Unos compañeros ___ me ayudaron. (yo)", "míos", "Detrás del sustantivo → míos."),
      mt(
        "Relaciona cada adjetivo con su pronombre.",
        [
          ["mis gafas", "las mías"],
          ["tu hermano", "el tuyo"],
          ["su idea", "la suya"],
          ["nuestros hijos", "los nuestros"],
        ],
        "El pronombre toma el género y número del objeto."
      ),
      mc(
        "«That's not your fault.»",
        ["No es culpa tuya.", "No es tuya culpa.", "No es culpa tu.", "No es la tu culpa."],
        0,
        "Culpa tuya (o tu culpa)."
      ),
      wo("Un vecino nuestro nos regaló estas plantas.", "Posesivo detrás del nombre: un vecino nuestro.", "A neighbor of ours gave us these plants."),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-mission-spain-house-rules",
    "Misión real: las normas del piso en Madrid",
    "Escribe las normas de un piso compartido en España con mandatos de vosotros — afirmativos y negativos.",
    "7 min",
    [
      sec(
        "Normas afirmativas",
        "Vosotros afirmativo: infinitivo sin -r + -d: limpiad, sacad, respetad. Con reflexivos, se pierde la -d: acostaos, duchaos (excepto idos).",
        [
          ["Limpiad la cocina después de cocinar.", "Clean the kitchen after cooking."],
          ["Sacad la basura los martes.", "Take out the trash on Tuesdays."],
        ],
        [
          fb("Escribe la norma.", "___ la música a partir de las once. (bajar)", "Bajad", "Bajar → bajad."),
        ]
      ),
      sec(
        "Normas negativas",
        "Vosotros negativo = subjuntivo: no dejéis, no uséis, no traigáis.",
        [
          ["No dejéis platos sucios en el fregadero.", "Don't leave dirty dishes in the sink."],
          ["No uséis mi champú.", "Don't use my shampoo."],
        ],
        [
          fb("Escribe la norma.", "No ___ la puerta abierta. (dejar)", "dejéis", "Negativo de vosotros → subjuntivo: dejéis."),
        ]
      ),
    ],
    [
      fb("Escribe la norma.", "___ antes de medianoche los días de diario. (acostarse)", "Acostaos", "Reflexivo: acostad + os → acostaos."),
      fb("Escribe la norma.", "No ___ fiestas sin avisar. (hacer)", "hagáis", "Hacer → hagáis."),
      fb("Escribe la norma.", "___ las facturas a tiempo. (pagar)", "Pagad", "Pagar → pagad."),
      mt(
        "Relaciona cada norma afirmativa con su versión negativa.",
        [
          ["Venid pronto.", "No vengáis pronto."],
          ["Poneos el abrigo.", "No os pongáis el abrigo."],
          ["Decídselo.", "No se lo digáis."],
          ["Idos ya.", "No os vayáis todavía."],
        ],
        "El negativo usa el subjuntivo y pone los pronombres delante."
      ),
      ms(
        "¿Qué normas están bien escritas?",
        ["Respetad el silencio.", "No fumad en el balcón.", "Lavaos las manos.", "No traigáis animales."],
        [0, 2, 3],
        "Negativo → subjuntivo: no fuméis."
      ),
      toEs("Kids, don't touch that and sit down! (vosotros)", "Niños, ¡no toquéis eso y sentaos!", "Negativo: no toquéis. Afirmativo reflexivo: sentaos.", ["¡Niños, no toquéis eso y sentaos!", "Niños, no toquéis eso y sentaos."]),
      wo("Por favor, cerrad la puerta con llave al salir.", "Mandato de vosotros afirmativo.", "Please lock the door when you leave."),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-transform-tu-vosotros",
    "Transformaciones: de tú a vosotros",
    "Pasa instrucciones de una persona a un grupo (en España): come → comed, no comas → no comáis.",
    "7 min",
    [
      sec(
        "Afirmativo",
        "Tú → vosotros: habla → hablad; ven → venid; sal → salid. Siempre regular: infinitivo sin -r + -d.",
        [
          ["Escucha. → Escuchad.", "Listen."],
          ["Haz los deberes. → Haced los deberes.", "Do your homework."],
        ],
        [
          fb("Pasa a vosotros.", "Pon la mesa. → ___ la mesa.", "Poned", "Poner → poned (sin irregularidad)."),
        ]
      ),
      sec(
        "Negativo y reflexivo",
        "No + subjuntivo de vosotros: no hables → no habléis. Reflexivo: levántate → levantaos.",
        [
          ["No grites. → No gritéis.", "Don't shout."],
          ["Cállate. → Callaos.", "Be quiet."],
        ],
        [
          fb("Pasa a vosotros.", "Siéntate. → ___.", "Sentaos", "Sentad + os → sentaos."),
        ]
      ),
    ],
    [
      fb("Pasa a vosotros.", "Ven aquí. → ___ aquí.", "Venid", "Venir → venid."),
      fb("Pasa a vosotros.", "No corras. → No ___.", "corráis", "Correr → corráis."),
      fb("Pasa a vosotros.", "Vístete. → ___.", "Vestíos", "Vestid + os → vestíos (con tilde en la í)."),
      fb("Pasa a vosotros.", "No te preocupes. → No ___ preocupéis.", "os", "Te → os."),
      mc(
        "«Vete.» → vosotros:",
        ["Idos.", "Íos.", "Ivos.", "Vayaos."],
        0,
        "La única excepción: irse conserva la -d → idos (en el habla se oye también iros)."
      ),
      ms(
        "¿Qué transformaciones son correctas?",
        ["Di la verdad. → Decid la verdad.", "Sé bueno. → Sed buenos.", "No mientas. → No mentís.", "Lávate. → Lavaos."],
        [0, 1, 3],
        "Negativo → subjuntivo: no mintáis."
      ),
      wo("Chicos, no os olvidéis de llamar a la abuela.", "Negativo reflexivo: no os olvidéis.", "Guys, don't forget to call Grandma."),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-spiral-b1-first-half",
    "Repaso en espiral: el subjuntivo, los mandatos y el condicional",
    "Primera mitad del B1 (lecciones 1–13) en una sola sesión de práctica mezclada.",
    "9 min",
    [
      sec(
        "La carta de un abuelo",
        "Lee la carta que un abuelo le escribe a su nieta antes de que se vaya a estudiar al extranjero.",
        [
          ["Querida Lucía: me alegro mucho de que vayas a estudiar a Berlín.", "Dear Lucía: I'm very glad you're going to study in Berlin."],
          ["Si necesitas algo, llámanos. Yo que tú, aprendería alemán cuanto antes.", "If you need anything, call us. If I were you, I'd learn German as soon as possible."],
          ["No gastes todo el dinero el primer mes y ojalá que hagas buenos amigos.", "Don't spend all the money in the first month, and I hope you make good friends."],
        ],
        [
          ms(
            "¿Qué formas de la carta están en subjuntivo?",
            ["vayas", "llámanos", "gastes", "hagas"],
            [0, 2, 3],
            "Llámanos es mandato afirmativo de tú (no subjuntivo)."
          ),
          fb("Responde al abuelo.", "Te prometo que te ___ todas las semanas. (escribir, futuro)", "escribiré", "Promesa → futuro."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es importante que ___ la lengua del país. (aprender, tú)", "aprendas", "Es importante que + subjuntivo."),
      fb("Completa.", "Si hace frío, ___ ropa de abrigo. (comprar, tú, mandato)", "compra", "Si + presente + mandato."),
      fb("Completa.", "¿___ enviarme fotos de la ciudad? (poder, tú, condicional)", "Podrías", "Petición cortés."),
      mc(
        "«I doubt it's easy.»",
        ["Dudo que sea fácil.", "Dudo que es fácil.", "No dudo que sea fácil.", "Dudo que fue fácil mañana."],
        0,
        "Dudar → subjuntivo."
      ),
      mt(
        "Relaciona cada frase con su estructura.",
        [
          ["Ojalá llueva.", "deseo + subjuntivo"],
          ["No lo toques.", "mandato negativo"],
          ["Me encantaría ir.", "condicional"],
          ["Si puedo, iré.", "si + presente + futuro"],
        ],
        "Cuatro estructuras clave de la primera mitad del B1."
      ),
      toEs("I'm glad that you (tú) are happy there.", "Me alegro de que estés contenta allí.", "Emoción → subjuntivo de estar.", ["Me alegro de que estés feliz allí.", "Me alegro de que estés contento allí.", "Me alegra que estés contenta allí.", "Me alegro de que estés contenta ahí."]),
      wo("Espero que no te olvides de nosotros.", "Esperar que + subjuntivo reflexivo.", "I hope you don't forget about us."),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-spiral-b1-second-half",
    "Repaso en espiral: los perfectos, los relativos y los pronombres",
    "Segunda mitad del B1 (lecciones 14–28) en una sola sesión, con guiños a la primera mitad.",
    "9 min",
    [
      sec(
        "Un correo de trabajo",
        "Lee el correo que Marta le manda a su equipo.",
        [
          ["Hola a todos: ya he enviado el informe que me pedisteis.", "Hi all: I've already sent the report you asked me for."],
          ["Cuando llegué a la oficina, alguien ya había cambiado la presentación.", "When I got to the office, someone had already changed the presentation."],
          ["¿Quién fue? Si fuisteis vosotros, decídmelo, por favor.", "Who was it? If it was you, tell me, please."],
          ["Por cierto, se busca voluntario para la reunión del viernes.", "By the way, a volunteer is needed for Friday's meeting."],
        ],
        [
          mt(
            "Relaciona cada forma del correo con su estructura.",
            [
              ["he enviado", "pretérito perfecto"],
              ["había cambiado", "pluscuamperfecto"],
              ["decídmelo", "mandato de vosotros + dos pronombres"],
              ["se busca", "se pasivo"],
            ],
            "Cuatro estructuras de la segunda mitad del B1."
          ),
        ]
      ),
    ],
    [
      fb("Responde a Marta.", "Fui yo; la cambié porque ___ un error en los datos. (haber, pluscuamperfecto)", "había habido", "Haber en pluscuamperfecto: había habido."),
      fb("Completa con un relativo.", "El informe ___ enviaste está perfecto.", "que", "Que sin preposición."),
      fb("Completa con dos pronombres.", "¿La presentación nueva? ___ la mando ahora mismo a todos. (a ellos)", "Se", "Les + la → se la."),
      fb("Completa con un posesivo.", "Mi parte está lista. ¿Y la ___? (vosotros)", "vuestra", "La parte → la vuestra."),
      ms(
        "¿Qué frases son correctas?",
        ["Todavía no lo he leído.", "Se venden dos oficinas.", "El compañero con quien trabajo es muy amable.", "Nunca había vido algo así."],
        [0, 1, 2],
        "Ver → visto: nunca había visto."
      ),
      toEs("Nobody had told me it, so I didn't know it.", "Nadie me lo había dicho, así que no lo sabía.", "Pluscuamperfecto + dos pronombres + imperfecto.", ["Nadie me lo había dicho, por eso no lo sabía.", "Nadie me lo había dicho y no lo sabía."]),
      wo("Lo que más me ha gustado del proyecto es el equipo.", "Lo que + pretérito perfecto.", "What I've liked most about the project is the team."),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1r-transform-stem-changes-nosotros",
    "Transformaciones: los cambios de raíz en nosotros",
    "Pensemos, durmamos, pidamos, sintamos — la parte del subjuntivo que más se olvida.",
    "7 min",
    [
      sec(
        "-AR y -ER: nosotros sin cambio",
        "Los verbos -AR y -ER con cambio de raíz no cambian en nosotros y vosotros: piense → pensemos; vuelva → volvamos.",
        [
          ["que yo piense / que nosotros pensemos", "that I think / that we think"],
          ["que tú vuelvas / que vosotros volváis", "that you return / that you all return"],
        ],
        [
          fb("Pasa a nosotros.", "que yo cierre → que nosotros ___", "cerremos", "-AR: sin cambio en nosotros."),
        ]
      ),
      sec(
        "-IR: un cambio pequeño en nosotros",
        "Los verbos -IR con cambio sí cambian en nosotros y vosotros, pero solo e→i u o→u: sienta → sintamos; duerma → durmamos; pida → pidamos.",
        [
          ["que yo sienta / que nosotros sintamos", "that I feel / that we feel"],
          ["que yo muera / que nosotros muramos", "that I die / that we die"],
        ],
        [
          fb("Pasa a nosotros.", "que yo prefiera → que nosotros ___", "prefiramos", "-IR e→ie: en nosotros e→i."),
        ]
      ),
    ],
    [
      fb("Pasa a nosotros.", "que yo encuentre → que nosotros ___", "encontremos", "-AR o→ue: sin cambio en nosotros."),
      fb("Pasa a nosotros.", "que yo sirva → que nosotros ___", "sirvamos", "-IR e→i: mantiene la i."),
      fb("Pasa a vosotros.", "que yo mienta → que vosotros ___", "mintáis", "-IR: e→i en vosotros."),
      fb("Pasa a nosotros.", "que yo pueda → que nosotros ___", "podamos", "-ER: sin cambio en nosotros."),
      mt(
        "Relaciona cada infinitivo con su forma de nosotros.",
        [
          ["divertirse", "nos divirtamos"],
          ["acostarse", "nos acostemos"],
          ["vestirse", "nos vistamos"],
          ["entender", "entendamos"],
        ],
        "Solo los verbos -IR cambian en nosotros."
      ),
      mc(
        "«Es mejor que ___ temprano esta noche.» (dormir, nosotros)",
        ["durmamos", "duermamos", "dormamos", "dormimos"],
        0,
        "-IR o→ue → u en nosotros: durmamos."
      ),
      wo("Ojalá que nos divirtamos en el viaje.", "Divertirse (-IR) → nos divirtamos.", "I hope we have fun on the trip."),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1r-contrast-spelling-verbs",
    "Contraste: conozca, escoja, siga, construya",
    "Verbos en -cer, -ger, -guir y -uir: el sonido se mantiene, la letra cambia.",
    "7 min",
    [
      sec(
        "Cuatro familias",
        "-cer/-cir → -zca (conozca, traduzca). -ger/-gir → -ja (escoja, dirija). -guir → -ga (siga, consiga). -uir → -ya (construya, huya).",
        [
          ["conocer → que conozca", "that (I/he) know"],
          ["elegir → que elija", "that (I/he) choose"],
          ["seguir → que siga", "that (I/he) follow"],
          ["incluir → que incluya", "that (I/he) include"],
        ],
        [
          fb("Forma el subjuntivo (yo).", "proteger → que yo ___", "proteja", "-ger → -ja."),
        ]
      ),
    ],
    [
      fb("Forma el subjuntivo (ellos).", "traducir → que ellos ___", "traduzcan", "-cir → -zc-."),
      fb("Forma el subjuntivo (tú).", "conseguir → que tú ___", "consigas", "-guir → -g- y e→i."),
      fb("Forma el subjuntivo (usted).", "construir → que usted ___", "construya", "-uir → -y-."),
      fb("Forma el subjuntivo (nosotros).", "recoger → que nosotros ___", "recojamos", "-ger → -j-."),
      mt(
        "Relaciona cada infinitivo con su subjuntivo (yo).",
        [
          ["parecer", "parezca"],
          ["dirigir", "dirija"],
          ["distinguir", "distinga"],
          ["destruir", "destruya"],
        ],
        "Cuatro cambios ortográficos que mantienen el sonido."
      ),
      ms(
        "¿Qué formas son correctas?",
        ["ofrezca", "escoga", "siga", "huiga"],
        [0, 2],
        "Escoger → escoja; huir → huya."
      ),
      wo("Espero que el gobierno construya más escuelas.", "Construir → construya.", "I hope the government builds more schools."),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1r-mission-childs-wish-list",
    "Misión real: la carta a los Reyes Magos",
    "Ayuda a un niño a escribir su carta: quiero que me traigáis…, espero que…, ojalá…",
    "7 min",
    [
      sec(
        "La tradición",
        "En España y otros países, los niños escriben a los Reyes Magos el 5 de enero. Las cartas están llenas de subjuntivo.",
        [
          ["Queridos Reyes Magos: este año he sido muy bueno.", "Dear Three Kings: this year I've been very good."],
          ["Quiero que me traigáis una bici roja.", "I want you to bring me a red bike."],
          ["Espero que mi hermana no reciba carbón.", "I hope my sister doesn't get coal."],
        ],
        [
          fb("Completa la carta.", "También quiero que mis padres ___ más tiempo libre. (tener)", "tengan", "Querer que + subjuntivo: tengan."),
        ]
      ),
      sec(
        "Las peticiones más difíciles",
        "Los deseos que no dependen de los Reyes se expresan con ojalá.",
        [
          ["Ojalá que nieve en Navidad.", "I hope it snows at Christmas."],
        ],
        [
          fb("Completa la carta.", "Ojalá que mi abuelo ___ pronto del hospital. (salir)", "salga", "Ojalá + subjuntivo: salga."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Os pido que ___ un regalo a los niños que no tienen nada. (dar, vosotros)", "deis", "Pedir que + subjuntivo; dar → deis."),
      fb("Completa la carta.", "Espero que ___ fácil encontrar mi casa. (ser)", "sea", "Esperar que + subjuntivo."),
      fb("Completa la carta.", "Prefiero que no me ___ ropa. (traer, vosotros)", "traigáis", "Traer → traigáis."),
      mc(
        "¿Cuál es la frase correcta para la carta?",
        ["Quiero que mi perro se ponga bueno.", "Quiero que mi perro se pone bueno.", "Quiero mi perro se ponga bueno.", "Quiero que mi perro ponerse bueno."],
        0,
        "Querer que + subjuntivo: se ponga."
      ),
      ms(
        "¿Qué deseos están bien escritos?",
        ["Ojalá que haya mucha nieve.", "Quiero que venís pronto.", "Espero que os guste mi dibujo.", "Deseo que todos estén felices."],
        [0, 2, 3],
        "Venir → vengáis."
      ),
      toEs("I want you (vosotros) to bring me a book.", "Quiero que me traigáis un libro.", "Querer que + subjuntivo de vosotros.", ["Quiero que me traigáis un libro, por favor."]),
      wo("Espero que este año me traigáis muchos juegos.", "Esperar que + subjuntivo.", "I hope you bring me lots of games this year."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1r-dialogue-family-debate",
    "Laboratorio de diálogo: el debate familiar",
    "La familia discute las vacaciones: cada uno opina, duda, desea y se queja.",
    "8 min",
    [
      sec(
        "¿Playa o montaña?",
        "Fíjate en qué verbos llevan indicativo (opinión afirmativa, certeza) y cuáles subjuntivo (deseo, duda, emoción).",
        [
          ["Papá: Creo que la playa es mejor para los niños.", "I think the beach is better for the kids."],
          ["Mamá: No creo que haya sitio en ningún hotel.", "I don't think there's room in any hotel."],
          ["Hija: Quiero que vayamos a la montaña. Me molesta que siempre elijáis vosotros.", "I want us to go to the mountains. It bothers me that you always choose."],
          ["Hijo: A mí me da igual, pero ojalá que tenga wifi.", "I don't care, but I hope it has wifi."],
        ],
        [
          mt(
            "Relaciona cada persona con lo que quiere.",
            [
              ["Papá", "ir a la playa"],
              ["Mamá", "duda que haya hotel"],
              ["La hija", "ir a la montaña"],
              ["El hijo", "tener wifi"],
            ],
            "Cada uno expresa una actitud diferente."
          ),
        ]
      ),
      sec(
        "Mismo sujeto: infinitivo",
        "Si el sujeto no cambia, se usa el infinitivo: Quiero ir (yo quiero, yo voy). Si cambia, que + subjuntivo: Quiero que vayas.",
        [
          ["Prefiero quedarme en casa.", "I prefer to stay home."],
          ["Prefiero que te quedes en casa.", "I prefer that you stay home."],
        ],
        [
          fb("Completa.", "La hija quiere ___ a la montaña. (ir, ella misma)", "ir", "Mismo sujeto → infinitivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mamá teme que el viaje ___ muy caro. (ser)", "sea", "Temer que + subjuntivo."),
      fb("Completa.", "Papá está seguro de que los niños lo ___ bien. (pasar)", "pasarán", "Certeza → indicativo (futuro)."),
      fb("Completa.", "Al hijo le da igual que ___ a la playa o a la montaña. (ir, ellos)", "vayan", "Dar igual que + subjuntivo."),
      mc(
        "«La hija se alegra de ___ elegir esta vez.» (ella misma)",
        ["poder", "que pueda", "que puede", "puede"],
        0,
        "Mismo sujeto → infinitivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Prefiero que decidamos juntos.", "Espero ir a la playa.", "Quiero que tú vienes.", "No creo que tengamos tiempo."],
        [0, 1, 3],
        "Querer que → vengas."
      ),
      toEs("I'm sorry that you (vosotros) always argue.", "Siento que siempre discutáis.", "Emoción → subjuntivo de vosotros.", ["Siento que discutáis siempre.", "Me da pena que siempre discutáis."]),
      wo("Al final decidieron que irían a la costa norte.", "Decidir que + condicional (futuro en el pasado).", "In the end they decided they would go to the north coast."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1r-transform-infinitive-subjunctive",
    "Transformaciones: ¿infinitivo o que + subjuntivo?",
    "Cambia el sujeto de la segunda parte de la frase y observa cómo cambia la estructura.",
    "7 min",
    [
      sec(
        "La regla del sujeto",
        "Quiero viajar (yo… yo). Quiero que viajes (yo… tú). Lo mismo con esperar, preferir, necesitar, alegrarse de, tener miedo de…",
        [
          ["Me alegro de estar aquí. → Me alegro de que estés aquí.", "I'm glad to be here. → I'm glad you're here."],
          ["Necesito descansar. → Necesito que descanses.", "I need to rest. → I need you to rest."],
        ],
        [
          fb("Cambia el sujeto (tú).", "Espero aprobar. → Espero que ___.", "apruebes", "Aprobar (o→ue) → apruebes."),
        ]
      ),
    ],
    [
      fb("Cambia el sujeto (ellos).", "Prefiero cenar en casa. → Prefiero que ___ en casa.", "cenen", "Cenar → cenen."),
      fb("Cambia el sujeto (nosotros).", "Tengo miedo de llegar tarde. → Tengo miedo de que ___ tarde.", "lleguemos", "Llegar → lleguemos."),
      fb("Vuelve al mismo sujeto (yo).", "Quiero que salgas. → Quiero ___.", "salir", "Mismo sujeto → infinitivo."),
      fb("Cambia el sujeto (usted).", "Siento molestar. → Siento que usted ___ que esperar. (tener)", "tenga", "Sentir que + subjuntivo."),
      mc(
        "«She's afraid of being alone.»",
        ["Tiene miedo de estar sola.", "Tiene miedo de que esté sola.", "Tiene miedo que está sola.", "Tiene miedo estar sola."],
        0,
        "Mismo sujeto → de + infinitivo."
      ),
      mc(
        "«She's afraid that her son is alone.»",
        ["Tiene miedo de que su hijo esté solo.", "Tiene miedo de su hijo estar solo.", "Tiene miedo de que su hijo está solo.", "Tiene miedo que su hijo estar solo."],
        0,
        "Sujeto diferente → de que + subjuntivo."
      ),
      wo("Me encanta que mis amigos vengan a cenar.", "Sujeto diferente → que + subjuntivo.", "I love it when my friends come to dinner."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1r-mission-restaurant-review",
    "Misión real: reseñas con emoción",
    "Escribe reseñas de un restaurante — lo que te encantó, lo que te molestó y lo que esperas que mejoren.",
    "7 min",
    [
      sec(
        "Una reseña de cinco estrellas",
        "Las reseñas combinan hechos (indicativo) con reacciones (subjuntivo).",
        [
          ["El restaurante está en el centro y es muy bonito.", "The restaurant is downtown and it's very pretty."],
          ["Me encanta que el chef salga a saludar a los clientes.", "I love that the chef comes out to greet the customers."],
          ["Me alegra que sigan usando productos locales.", "I'm glad they keep using local products."],
        ],
        [
          fb("Completa la reseña.", "Me sorprende que los precios ___ tan razonables. (ser)", "sean", "Sorprender que + subjuntivo."),
        ]
      ),
      sec(
        "Una reseña de una estrella",
        "Las quejas también piden subjuntivo: Me molesta que…, No me parece normal que…, Espero que…",
        [
          ["Me molesta que no acepten tarjetas.", "It bothers me that they don't take cards."],
          ["Espero que contraten a más camareros.", "I hope they hire more waiters."],
        ],
        [
          fb("Completa la queja.", "No me parece normal que la comida ___ fría. (llegar)", "llegue", "No parecer normal que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa la reseña.", "Es una pena que no ___ opciones vegetarianas. (haber)", "haya", "Es una pena que + subjuntivo."),
      fb("Completa la reseña.", "Recomiendo que ___ con antelación. (reservar, ustedes)", "reserven", "Recomendar que + subjuntivo."),
      fb("Completa la reseña.", "Estoy seguro de que ___ a volver. (ir, yo)", "voy", "Certeza → indicativo."),
      mt(
        "Relaciona cada reacción con su estrella.",
        [
          ["Me encanta que el pan sea casero.", "5 estrellas"],
          ["Me molesta que la música esté tan alta.", "2 estrellas"],
          ["Es increíble que tarden una hora en servir.", "1 estrella"],
          ["Me gusta que tengan terraza, aunque es caro.", "3 estrellas"],
        ],
        "Todas las reacciones llevan subjuntivo."
      ),
      ms(
        "¿Qué frases de reseña son correctas?",
        ["Me gusta que el personal sea amable.", "Es obvio que el chef tiene talento.", "Me molesta que no hay aparcamiento.", "Ojalá que abran otro local."],
        [0, 1, 3],
        "Molestar que → subjuntivo: no haya aparcamiento."
      ),
      toEs("I'm surprised that there are so few people.", "Me sorprende que haya tan poca gente.", "Sorprender que + subjuntivo; gente es singular.", ["Me sorprende que haya tan pocas personas."]),
      wo("Espero que el próximo año mantengan la calidad.", "Esperar que + subjuntivo (mantener → mantengan).", "I hope next year they keep up the quality."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1r-mission-letter-city-council",
    "Misión real: carta al ayuntamiento",
    "Escribe una carta formal a tu ayuntamiento con propuestas para el barrio — es necesario que, es urgente que, sería bueno…",
    "8 min",
    [
      sec(
        "El problema",
        "Una carta formal combina hechos (es evidente que + indicativo) con peticiones (es necesario que + subjuntivo).",
        [
          ["Es evidente que el parque está abandonado.", "It's evident that the park is neglected."],
          ["Es urgente que el ayuntamiento lo limpie.", "It's urgent that the city council clean it."],
          ["Es fundamental que haya más iluminación.", "It's essential that there be more lighting."],
        ],
        [
          fb("Completa la carta.", "Es necesario que ___ más papeleras en la plaza. (poner, ustedes)", "pongan", "Es necesario que + subjuntivo."),
        ]
      ),
      sec(
        "El cierre",
        "Las cartas formales terminan con deseos corteses.",
        [
          ["Espero que tengan en cuenta nuestra propuesta.", "I hope you take our proposal into account."],
          ["Atentamente, los vecinos del barrio.", "Sincerely, the neighborhood residents."],
        ],
        [
          mc(
            "¿Qué cierre es el más adecuado para una carta formal?",
            ["Atentamente,", "Besos,", "¡Chao!", "Un abrazote,"],
            0,
            "Atentamente es la despedida formal estándar."
          ),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Es importante que los niños ___ jugar con seguridad. (poder)", "puedan", "Es importante que + subjuntivo."),
      fb("Completa la carta.", "Es cierto que el tráfico ___ mucho en los últimos años. (aumentar, pretérito perfecto)", "ha aumentado", "Certeza → indicativo."),
      fb("Completa la carta.", "Es conveniente que el autobús ___ por nuestra calle. (pasar)", "pase", "Es conveniente que + subjuntivo: pase."),
      mt(
        "Relaciona cada problema con una propuesta.",
        [
          ["Hay mucha basura.", "Es necesario que se limpie más a menudo."],
          ["Los coches van muy rápido.", "Es urgente que pongan badenes."],
          ["No hay sitio para los niños.", "Es fundamental que se construya un parque."],
          ["Las calles están oscuras.", "Es importante que haya más farolas."],
        ],
        "Expresiones impersonales de necesidad + subjuntivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Es obvio que falta un centro de salud.", "Es imprescindible que actúen ya.", "Es verdad que los vecinos estén preocupados.", "Es lógico que la gente se queje."],
        [0, 1, 3],
        "Es verdad que → indicativo: están preocupados."
      ),
      toEs("It is essential that you (ustedes) listen to the residents.", "Es fundamental que escuchen a los vecinos.", "Es fundamental que + subjuntivo; a personal.", ["Es imprescindible que escuchen a los vecinos.", "Es esencial que escuchen a los vecinos."]),
      wo("Esperamos que nos respondan lo antes posible.", "Esperar que + subjuntivo.", "We hope you will reply as soon as possible."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1r-error-hunt-ojala-impersonal",
    "Caza de errores: ojalá y las expresiones impersonales",
    "«Ojalá que vienes», «es verdad que sea», «es importante de que» — corrige cada uno.",
    "7 min",
    [
      sec(
        "Tres trampas",
        "(1) Ojalá siempre con subjuntivo. (2) Expresiones de certeza con indicativo. (3) Nada de «de» entre la expresión y que: ✗ es importante de que → ✓ es importante que.",
        [
          ["✗ Ojalá que puedes venir. → ✓ Ojalá que puedas venir.", "I hope you can come."],
          ["✗ Es necesario de que estudies. → ✓ Es necesario que estudies.", "It's necessary that you study."],
        ],
        [
          mc(
            "Corrige: «Es cierto que tenga razón.»",
            ["Es cierto que tiene razón.", "Es cierto de que tiene razón.", "Es cierto que tuviera razón.", "No hay error."],
            0,
            "Certeza → indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Ojalá que no ___ tráfico. (haber; el alumno escribió: hay)", "haya", "Ojalá + subjuntivo."),
      fb("Corrige.", "Es mejor que no le ___ nada. (decir, tú; el alumno escribió: dices)", "digas", "Es mejor que + subjuntivo."),
      fb("Corrige.", "Es evidente que ___ cansados. (estar, ellos; el alumno escribió: estén)", "están", "Certeza → indicativo."),
      ms(
        "¿Qué frases tienen un error?",
        ["Es posible que llueva.", "Es importante de que comas bien.", "Ojalá tengas suerte.", "Está claro que no quiere venir."],
        [1],
        "Sin «de»: es importante que."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Es raro que no conteste.", "Es raro que no contesta.", "Es raro de que no conteste.", "Raro es que no contesta."],
        0,
        "Es raro que + subjuntivo."
      ),
      mt(
        "Relaciona el principio con el final correcto.",
        [
          ["Es verdad que", "estudia mucho."],
          ["Es bueno que", "estudie mucho."],
          ["Ojalá", "estudie más."],
          ["No es verdad que", "estudie tanto."],
        ],
        "Solo la certeza afirmativa lleva indicativo."
      ),
      wo("Es una suerte que hayamos encontrado sitio.", "Es una suerte que + perfecto de subjuntivo.", "It's lucky that we found a spot."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1r-transform-personal-impersonal",
    "Transformaciones: de «creo que» a «es importante que»",
    "Convierte opiniones personales en frases impersonales — y decide si el modo cambia.",
    "7 min",
    [
      sec(
        "Personal → impersonal",
        "«Creo que debes descansar» → «Es importante que descanses». El verbo de opinión desaparece y el modo cambia a subjuntivo.",
        [
          ["Pienso que tienes que dormir más. → Es necesario que duermas más.", "It's necessary that you sleep more."],
          ["Sé que tienes razón. → Es verdad que tienes razón.", "It's true you're right."],
        ],
        [
          fb("Transforma.", "Creo que debemos salir ya. → Es mejor que ___ ya.", "salgamos", "Es mejor que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Sé que el examen es mañana. → Es seguro que el examen ___ mañana.", "es", "Certeza → se queda en indicativo."),
      fb("Transforma.", "Pienso que hace falta más tiempo. → Es posible que ___ falta más tiempo.", "haga", "Posibilidad → subjuntivo."),
      fb("Transforma.", "Me parece que tienes que llamarla. → Es importante que la ___.", "llames", "Es importante que + subjuntivo."),
      fb("Transforma.", "Creo que no vienen. → Es probable que no ___.", "vengan", "Probabilidad → subjuntivo."),
      mc(
        "«Todo el mundo sabe que fumar es malo.» → impersonal:",
        ["Es sabido que fumar es malo.", "Es sabido que fumar sea malo.", "Es posible que fumar es malo.", "Es sabido de que fumar es malo."],
        0,
        "Es sabido que expresa un hecho → indicativo."
      ),
      ms(
        "¿Qué transformaciones mantienen el indicativo?",
        ["Es verdad que…", "Es obvio que…", "Es probable que…", "Está claro que…"],
        [0, 1, 3],
        "La probabilidad pide subjuntivo."
      ),
      wo("Es normal que estés nervioso antes de la entrevista.", "Es normal que + subjuntivo.", "It's normal for you to be nervous before the interview."),
    ]
  ),
  L(
    "commands-drill-3",
    "b1r-mission-tour-guide",
    "Misión real: el guía turístico",
    "Eres guía en Toledo. Da instrucciones a un grupo con mandatos de ustedes — y avisos con negativos.",
    "7 min",
    [
      sec(
        "Instrucciones al grupo",
        "Ustedes: subjuntivo en afirmativo y negativo. Los pronombres se pegan en afirmativo: síganme, fíjense.",
        [
          ["Síganme, por favor, y no se separen del grupo.", "Follow me, please, and don't get separated from the group."],
          ["Fíjense en los detalles de la puerta.", "Notice the details on the door."],
        ],
        [
          fb("Completa la instrucción.", "___ las cámaras; aquí no se pueden hacer fotos. (guardar)", "Guarden", "Ustedes → guarden."),
        ]
      ),
      sec(
        "Avisos",
        "Para prohibir o advertir: No + subjuntivo, con los pronombres delante.",
        [
          ["No toquen las paredes, por favor.", "Please don't touch the walls."],
          ["No se olviden de volver al autobús a las cinco.", "Don't forget to come back to the bus at five."],
        ],
        [
          fb("Completa el aviso.", "No ___ comida dentro de la catedral. (traer)", "traigan", "Traer → traigan."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ aquí un momento, por favor. (sentarse)", "Siéntense", "Sienten + se → siéntense."),
      fb("Completa.", "No ___ prisa; tenemos tiempo. (darse)", "se den", "Negativo: no se den."),
      fb("Completa.", "___ a la derecha al salir. (girar)", "Giren", "Girar → giren."),
      mt(
        "Relaciona cada situación con el mandato del guía.",
        [
          ["Hace calor.", "Beban agua."],
          ["El suelo está mojado.", "Tengan cuidado."],
          ["Van a entrar a la iglesia.", "Hablen en voz baja."],
          ["Termina la visita.", "Disfruten del resto del día."],
        ],
        "Mandatos de ustedes = subjuntivo."
      ),
      mc(
        "«Don't lose your tickets.» (ustedes)",
        ["No pierdan las entradas.", "No pierden las entradas.", "No perded las entradas.", "No las pierdan sus entradas."],
        0,
        "Perder (e→ie) → pierdan."
      ),
      toEs("Look at (ustedes) this painting and tell me what you see.", "Miren este cuadro y díganme qué ven.", "Mandatos de ustedes; pronombre pegado: díganme.", ["Miren este cuadro y díganme lo que ven.", "Observen este cuadro y díganme qué ven."]),
      wo("Por favor, no se acerquen demasiado a las obras.", "Negativo de ustedes con reflexivo.", "Please don't get too close to the artworks."),
    ]
  ),
  L(
    "commands-drill-3",
    "b1r-contrast-direct-polite",
    "Contraste: directo o cortés",
    "¡Cierra la puerta! / ¿Podrías cerrar la puerta? / ¿Cierras la puerta? — cuándo usar cada forma.",
    "7 min",
    [
      sec(
        "Una escalera de cortesía",
        "Del más directo al más cortés: mandato (Cierra la puerta) → presente como pregunta (¿Cierras la puerta?) → poder (¿Puedes cerrar…?) → condicional (¿Podrías cerrar…?) → ¿Te importaría cerrar…?",
        [
          ["Pásame la sal.", "Pass me the salt. (family, fine)"],
          ["¿Me pasas la sal?", "Could you pass the salt? (casual, friendly)"],
          ["¿Le importaría pasarme la sal?", "Would you mind passing me the salt? (very polite)"],
        ],
        [
          mc(
            "Con un desconocido en el tren, ¿qué es más adecuado?",
            ["¿Le importaría bajar la voz?", "¡Baja la voz!", "Baja la voz ya.", "¡Cállate!"],
            0,
            "Con desconocidos, lo más cortés."
          ),
        ]
      ),
    ],
    [
      fb("Hazlo más cortés (tú).", "Ayúdame. → ¿Me ___ ayudar? (poder, condicional)", "podrías", "Condicional → más cortés."),
      fb("Hazlo más cortés (usted).", "Espere aquí. → ¿Le ___ esperar aquí? (importar)", "importaría", "¿Le importaría + infinitivo?"),
      fb("Hazlo más directo (tú).", "¿Podrías traer pan? → ___ pan.", "Trae", "Mandato de tú: trae."),
      mt(
        "Relaciona cada situación con la forma adecuada.",
        [
          ["Tu hermano pequeño deja la puerta abierta.", "¡Cierra la puerta!"],
          ["Tu compañera de trabajo está cerca de la ventana.", "¿Puedes abrir la ventana?"],
          ["Una señora mayor en el autobús.", "¿Le importaría dejarme pasar?"],
          ["Tu amigo en la cena.", "¿Me pasas el agua?"],
        ],
        "La relación y la situación deciden el nivel de cortesía."
      ),
      ms(
        "¿Qué peticiones son corteses?",
        ["¿Sería tan amable de ayudarme?", "¿Me dejas tu boli un momento?", "¡Dame eso!", "¿Podría decirme dónde está el baño?"],
        [0, 1, 3],
        "¡Dame eso! es muy directo."
      ),
      toEs("Would you mind turning off your phone? (usted)", "¿Le importaría apagar el móvil?", "¿Le importaría + infinitivo?", ["¿Le importaría apagar su móvil?", "¿Le importaría apagar el celular?", "¿Le importaría apagar su teléfono?"]),
      wo("¿Me harías un favor muy grande?", "Condicional para una petición cortés.", "Would you do me a big favor?"),
    ]
  ),
  L(
    "commands-drill-3",
    "b1r-dialogue-personal-trainer",
    "Laboratorio de diálogo: el entrenador personal",
    "Un entrenador da órdenes, anima y corrige a su cliente — mandatos de tú en acción.",
    "7 min",
    [
      sec(
        "En el gimnasio",
        "Los entrenadores usan mandatos cortos y directos: levanta, baja, respira, no pares.",
        [
          ["—Levanta los brazos y respira hondo.", "Raise your arms and breathe deeply."],
          ["—No dobles las rodillas. ¡Así, muy bien!", "Don't bend your knees. Like that, very good!"],
          ["—Ahora túmbate y haz diez abdominales.", "Now lie down and do ten sit-ups."],
        ],
        [
          fb("Completa la orden.", "___ la espalda recta. (mantener)", "Mantén", "Mantener → mantén (como tener → ten)."),
        ]
      ),
      sec(
        "Ánimos",
        "Para animar: ¡Vamos!, ¡Sigue!, ¡No te rindas!, ¡Dale!",
        [
          ["¡Sigue, que ya casi terminas!", "Keep going, you're almost done!"],
          ["¡No te rindas ahora!", "Don't give up now!"],
        ],
        [
          fb("Anima al cliente.", "¡No ___ ahora! (parar)", "pares", "Negativo de tú → subjuntivo: pares."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ el peso despacio. (bajar)", "Baja", "Mandato de tú = forma él."),
      fb("Completa.", "___ agua cada quince minutos. (beber)", "Bebe", "Beber → bebe."),
      fb("Completa.", "No ___ el desayuno antes de entrenar. (saltarse)", "te saltes", "Negativo reflexivo: no te saltes."),
      mt(
        "Relaciona cada orden con su significado.",
        [
          ["Estira las piernas.", "Stretch your legs."],
          ["Aguanta diez segundos.", "Hold for ten seconds."],
          ["Relájate.", "Relax."],
          ["No te muevas.", "Don't move."],
        ],
        "Mandatos de tú, afirmativos y negativos."
      ),
      mc(
        "El cliente dice: «Estoy muy cansado.» El entrenador responde…",
        ["Descansa un minuto y sigue.", "Descansas un minuto y sigues ayer.", "Descanse un minuto, señor Presidente.", "No descansa."],
        0,
        "Mandatos de tú, coherentes con el tono del gimnasio."
      ),
      toEs("Breathe in, hold the air and breathe out slowly. (tú)", "Inspira, aguanta el aire y espira despacio.", "Tres mandatos afirmativos de tú.", ["Respira, aguanta el aire y suéltalo despacio.", "Inspira, aguanta el aire y suéltalo despacio."]),
      wo("Ponte las zapatillas y sal a correr conmigo.", "Ponerse → ponte; salir → sal.", "Put on your sneakers and come out running with me."),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1r-error-hunt-conditional",
    "Caza de errores: el condicional",
    "Raíces inventadas, terminaciones de futuro y el condicional después de si — corrige cada error.",
    "7 min",
    [
      sec(
        "Las raíces del futuro",
        "El condicional usa las mismas raíces irregulares que el futuro: ✗ teneríamos → ✓ tendríamos; ✗ haceríais → ✓ haríais.",
        [
          ["✗ Yo diciría que sí. → ✓ Yo diría que sí.", "I would say yes."],
          ["✗ ¿Poderías ayudarme? → ✓ ¿Podrías ayudarme?", "Could you help me?"],
        ],
        [
          fb("Corrige.", "Nosotros ___ antes, pero hay tráfico. (salir; el alumno escribió: saliríamos)", "saldríamos", "Salir → saldr-."),
        ]
      ),
      sec(
        "Nunca después de si",
        "El condicional va en la otra parte de la frase, nunca justo después de si: ✗ Si tendría dinero… (Para condiciones irreales verás el imperfecto de subjuntivo en el B2: Si tuviera dinero…)",
        [
          ["✗ Si podría, iría. → ✓ Si puedo, iré.", "If I can, I'll go."],
        ],
        [
          mc(
            "Corrige: «Si me llamarías, te contaría todo.»",
            ["Si me llamas, te lo contaré todo.", "Si me llamarías, te lo contarías.", "Si me llamaré, te lo contaría.", "No hay error."],
            0,
            "Con B1: si + presente, futuro en la otra parte."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿___ usted repetirlo? (poder; el alumno escribió: Podería)", "Podría", "Poder → podr-."),
      fb("Corrige.", "Yo en tu lugar no ___ nada. (decir; el alumno escribió: deciría)", "diría", "Decir → dir-."),
      fb("Corrige.", "¿Qué ___ vosotros en mi situación? (hacer; el alumno escribió: haceríais)", "haríais", "Hacer → har-."),
      ms(
        "¿Qué frases tienen un error?",
        ["Me gustaría viajar más.", "¿Querríais venir a cenar?", "Él sabería la respuesta.", "Nosotros poneríamos la mesa."],
        [3],
        "Poner → pondr-: pondríamos."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Dijo que vendría a las ocho.", "Dijo que veniría a las ocho.", "Dijo que vendrá a las ocho ayer.", "Dijo que vendríe a las ocho."],
        0,
        "Venir → vendr- + -ía."
      ),
      toEs("It would be better to leave now.", "Sería mejor salir ahora.", "Ser → sería.", ["Sería mejor irnos ahora.", "Sería mejor irse ahora.", "Sería mejor marcharnos ahora."]),
      wo("En tu lugar yo no le contaría nada a nadie.", "Condicional + doble negación.", "In your place I wouldn't tell anyone anything."),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1r-mission-moral-dilemmas",
    "Misión real: dilemas morales",
    "¿Devolverías una cartera llena de dinero? ¿Mentirías por un amigo? Responde y justifica con el condicional.",
    "8 min",
    [
      sec(
        "Dilema 1: la cartera",
        "Encuentras una cartera con 500 euros y el carné de su dueño. ¿Qué harías?",
        [
          ["Yo la devolvería, pero me quedaría con un poco de dinero. — ¡Eso no estaría bien!", "I'd return it, but I'd keep a bit of the money. — That wouldn't be right!"],
          ["La llevaría a la policía inmediatamente.", "I'd take it to the police immediately."],
        ],
        [
          fb("Responde.", "Yo ___ al dueño para devolvérsela. (llamar)", "llamaría", "Condicional regular."),
        ]
      ),
      sec(
        "Dilema 2: la mentira",
        "Tu mejor amigo te pide que mientas a su novia. ¿Lo harías?",
        [
          ["No, no mentiría. Le aconsejaría hablar con ella.", "No, I wouldn't lie. I'd advise him to talk to her."],
        ],
        [
          fb("Responde.", "Yo no le ___ nada a su novia, pero tampoco mentiría. (decir)", "diría", "Decir → diría."),
        ]
      ),
    ],
    [
      fb("Dilema 3: ves a alguien robar en una tienda. ¿Qué harías?", "Yo ___ al guardia de seguridad. (avisar)", "avisaría", "Condicional."),
      fb("Dilema 4: ¿aceptarías un trabajo que odias por mucho dinero?", "Sí, pero solo lo ___ un año. (hacer)", "haría", "Hacer → haría."),
      fb("Dilema 5: ¿qué le dirías a un amigo que canta fatal?", "Le ___ la verdad con cariño. (decir)", "diría", "Decir → diría."),
      mt(
        "Relaciona cada dilema con una respuesta lógica.",
        [
          ["¿Leerías el diario de tu hermana?", "No, nunca lo leería."],
          ["¿Saldrías con el ex de tu amiga?", "No, no le haría eso."],
          ["¿Te irías a vivir a Marte?", "Sí, me encantaría."],
          ["¿Cambiarías algo de tu pasado?", "No cambiaría nada."],
        ],
        "Pregunta en condicional → respuesta en condicional."
      ),
      ms(
        "¿Qué respuestas son correctas?",
        ["Yo no podría hacerlo.", "Mis padres nunca lo aceptarían.", "Nosotros lo devolveríamos.", "Tú no lo harías nunca ayer."],
        [0, 1, 2],
        "Ayer no encaja con una situación hipotética."
      ),
      toEs("I would never lie to my best friend.", "Nunca le mentiría a mi mejor amigo.", "Nunca + condicional; le + a mi mejor amigo.", ["Nunca le mentiría a mi mejor amiga.", "No le mentiría nunca a mi mejor amigo.", "Yo nunca le mentiría a mi mejor amigo."]),
      wo("¿Tú qué harías en mi lugar?", "Condicional para una situación imaginada.", "What would you do in my place?"),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1r-dialogue-travel-agency",
    "Laboratorio de diálogo: en la agencia de viajes",
    "Un cliente indeciso y una agente paciente: sugerencias, preferencias y peticiones en condicional.",
    "7 min",
    [
      sec(
        "Las opciones",
        "La agente sugiere con el condicional; el cliente responde con me gustaría, preferiría, no me importaría.",
        [
          ["—¿Adónde le gustaría ir?", "Where would you like to go?"],
          ["—Preferiría un sitio tranquilo, con playa.", "I'd prefer a quiet place with a beach."],
          ["—Le recomendaría la costa de Oaxaca. Podría quedarse en una cabaña.", "I'd recommend the Oaxaca coast. You could stay in a cabin."],
        ],
        [
          fb("Completa la respuesta del cliente.", "No me ___ pagar un poco más por las vistas. (importar)", "importaría", "No me importaría + infinitivo."),
        ]
      ),
      sec(
        "Cerrar el trato",
        "Las peticiones finales también suenan mejor en condicional.",
        [
          ["¿Podría enviarme el presupuesto por correo?", "Could you email me the quote?"],
          ["¿Sería posible pagar a plazos?", "Would it be possible to pay in installments?"],
        ],
        [
          mc(
            "«Would it be possible to change the date?»",
            ["¿Sería posible cambiar la fecha?", "¿Será posible cambiar la fecha ayer?", "¿Es posible que cambiaría la fecha?", "¿Sería posible cambiaría la fecha?"],
            0,
            "Sería posible + infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo en su lugar ___ en temporada baja. (viajar)", "viajaría", "Consejo → condicional."),
      fb("Completa.", "¿Le ___ bien salir el día 3? (venir)", "vendría", "Venir → vendría (¿le vendría bien…? = would it suit you?)."),
      fb("Completa.", "Con el paquete completo, ustedes no ___ que preocuparse de nada. (tener)", "tendrían", "Tener → tendrían."),
      mt(
        "Relaciona cada pregunta de la agente con la respuesta del cliente.",
        [
          ["¿Viajaría solo?", "No, iría con mi pareja."],
          ["¿Cuánto querría gastar?", "Unos dos mil euros."],
          ["¿Le interesaría una excursión?", "Sí, me encantaría."],
          ["¿Preferiría hotel o apartamento?", "Preferiría un apartamento."],
        ],
        "Pregunta y respuesta en condicional."
      ),
      ms(
        "¿Qué frases son correctas y corteses?",
        ["Me gustaría reservar dos noches.", "¿Podría darme más información?", "Quiero que usted me dará un folleto.", "¿Tendrían habitaciones libres?"],
        [0, 1, 3],
        "Querer que + subjuntivo: quiero que me dé un folleto (y aun así suena brusco; mejor: ¿Podría darme un folleto?)."
      ),
      toEs("I'd like a room with a sea view.", "Me gustaría una habitación con vistas al mar.", "Me gustaría + sustantivo.", ["Querría una habitación con vista al mar.", "Me gustaría una habitación con vista al mar.", "Querría una habitación con vistas al mar."]),
      wo("¿Qué me recomendaría para una luna de miel?", "Condicional de cortesía con usted.", "What would you recommend for a honeymoon?"),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1r-chain-of-conditions",
    "Cadena de condiciones",
    "Si esto, entonces aquello; y si aquello, entonces… Construye cadenas de consecuencias lógicas.",
    "7 min",
    [
      sec(
        "Una cadena",
        "Cada resultado se convierte en la condición siguiente: Si llueve, no iremos a la playa. Si no vamos a la playa, iremos al cine. Si vamos al cine, veremos la nueva película.",
        [
          ["Si me levanto tarde, pierdo el autobús.", "If I get up late, I miss the bus."],
          ["Si pierdo el autobús, llego tarde al trabajo.", "If I miss the bus, I'm late for work."],
          ["Si llego tarde, mi jefe se enfada.", "If I'm late, my boss gets angry."],
        ],
        [
          fb("Continúa la cadena.", "Si mi jefe se enfada, no me ___ el aumento. (dar, futuro)", "dará", "Si + presente, futuro."),
        ]
      ),
    ],
    [
      fb("Continúa la cadena.", "Si no me dan el aumento, no ___ viajar este verano. (poder, yo, futuro)", "podré", "Poder → podré."),
      fb("Continúa la cadena.", "Si no viajo, ___ en casa y leeré mucho. (quedarse, yo, futuro)", "me quedaré", "Reflexivo en futuro."),
      fb("Empieza otra cadena.", "Si ___ la lotería, dejaré de trabajar. (ganar, yo)", "gano", "Si + presente."),
      mc(
        "Ordena la cadena: (A) Si como mucho, me duele el estómago. (B) Si voy a la fiesta, como mucho. (C) Si me duele el estómago, no duermo.",
        ["B → A → C", "A → B → C", "C → A → B", "A → C → B"],
        0,
        "Fiesta → comer mucho → dolor → no dormir."
      ),
      mt(
        "Relaciona cada condición con su consecuencia lógica.",
        [
          ["Si estudias,", "aprobarás."],
          ["Si no riegas las plantas,", "se morirán."],
          ["Si calientas el hielo,", "se derrite."],
          ["Si tienes sed,", "bebe agua."],
        ],
        "Resultado en futuro, presente (verdades generales) o mandato."
      ),
      toEs("If you (tú) don't sleep, you'll be tired; and if you're tired, you won't work well.", "Si no duermes, estarás cansado; y si estás cansado, no trabajarás bien.", "Dos condiciones encadenadas: si + presente, futuro.", ["Si no duermes, estarás cansada; y si estás cansada, no trabajarás bien.", "Si no duermes, vas a estar cansado; y si estás cansado, no vas a trabajar bien."]),
      wo("Si no sales ahora, no llegarás a tiempo.", "Si + presente + futuro.", "If you don't leave now, you won't get there on time."),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1r-mission-emergency-instructions",
    "Misión real: instrucciones de emergencia",
    "Lee y completa el cartel de seguridad de un edificio: si hay fuego, si suena la alarma, si alguien se hace daño.",
    "7 min",
    [
      sec(
        "El cartel",
        "Las instrucciones de emergencia usan si + presente + mandato (de usted o ustedes, o infinitivo).",
        [
          ["Si suena la alarma, salga por la escalera más cercana.", "If the alarm sounds, exit by the nearest stairs."],
          ["Si hay humo, agáchese y cúbrase la boca.", "If there's smoke, get down low and cover your mouth."],
          ["Si alguien se hace daño, llame al 112.", "If someone gets hurt, call 112."],
        ],
        [
          fb("Completa el cartel.", "Si hay fuego, no ___ el ascensor. (usar, usted)", "use", "Negativo de usted → no use."),
        ]
      ),
    ],
    [
      fb("Completa el cartel.", "Si la puerta está caliente, no la ___. (abrir, usted)", "abra", "No + subjuntivo; pronombre delante."),
      fb("Completa el cartel.", "Si se queda atrapado, ___ una toalla mojada bajo la puerta. (poner, usted)", "ponga", "Poner → ponga."),
      fb("Completa el cartel.", "Si ven a alguien herido, ___ a los bomberos. (avisar, ustedes)", "avisen", "Ustedes → avisen."),
      mt(
        "Relaciona cada situación con la instrucción correcta.",
        [
          ["Si tiembla la tierra,", "póngase debajo de una mesa."],
          ["Si se va la luz,", "use una linterna."],
          ["Si huele a gas,", "no encienda ninguna luz."],
          ["Si alguien se desmaya,", "llame a una ambulancia."],
        ],
        "Si + presente + mandato de usted."
      ),
      ms(
        "¿Qué instrucciones están bien escritas?",
        ["Si suena la alarma, mantenga la calma.", "Si hay fuego, no corre.", "Si está herido, no se mueva.", "Si necesita ayuda, grite."],
        [0, 2, 3],
        "No corra (usted) o no corras (tú)."
      ),
      toEs("If the alarm goes off, leave the building calmly. (ustedes)", "Si suena la alarma, salgan del edificio con calma.", "Si + presente + mandato de ustedes.", ["Si suena la alarma, salgan del edificio tranquilamente.", "Si se activa la alarma, salgan del edificio con calma."]),
      wo("Si ve humo, no utilice el ascensor bajo ningún concepto.", "Si + presente + mandato negativo de usted.", "If you see smoke, do not use the elevator under any circumstances."),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1r-transform-command-to-condition",
    "Transformaciones: de mandato a condición",
    "«Estudia y aprobarás» → «Si estudias, aprobarás». Reescribe consejos y advertencias con si.",
    "7 min",
    [
      sec(
        "Dos maneras de decir lo mismo",
        "Mandato + y + futuro = si + presente + futuro. Mandato + o + futuro = si no + presente + futuro.",
        [
          ["Come y te sentirás mejor. → Si comes, te sentirás mejor.", "Eat and you'll feel better. → If you eat, you'll feel better."],
          ["Date prisa o perderás el tren. → Si no te das prisa, perderás el tren.", "Hurry or you'll miss the train. → If you don't hurry, you'll miss the train."],
        ],
        [
          fb("Transforma con si.", "Llama y te abrirán. → Si ___, te abrirán.", "llamas", "Mandato → si + presente."),
        ]
      ),
    ],
    [
      fb("Transforma con si.", "Duerme más y estarás menos cansado. → Si ___ más, estarás menos cansado.", "duermes", "Si + presente: duermes."),
      fb("Transforma con si.", "Abrígate o te resfriarás. → Si no ___, te resfriarás.", "te abrigas", "Si no + presente reflexivo."),
      fb("Transforma con si.", "Estudiad o suspenderéis. → Si no ___, suspenderéis.", "estudiáis", "Vosotros: estudiáis."),
      fb("Transforma al mandato.", "Si practicas, mejorarás. → ___ y mejorarás.", "Practica", "Si + presente → mandato de tú."),
      mc(
        "«Si no te callas, te vas a quedar sin postre.» → con mandato:",
        ["Cállate o te quedarás sin postre.", "Cállate y te quedarás sin postre.", "No te calles o te quedarás sin postre.", "Callarse o quedarse sin postre."],
        0,
        "Si no… → mandato + o."
      ),
      ms(
        "¿Qué pares tienen el mismo significado?",
        ["Corre y llegarás. = Si corres, llegarás.", "Descansa o te enfermarás. = Si no descansas, te enfermarás.", "Ven y verás. = Si no vienes, verás.", "Pregunta y te ayudarán. = Si preguntas, te ayudarán."],
        [0, 1, 3],
        "Ven y verás = si vienes, verás (sin no)."
      ),
      wo("Termina los deberes y podrás salir a jugar.", "Mandato + y + futuro.", "Finish your homework and you'll be able to go out and play."),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1r-mission-cv",
    "Misión real: el currículum y la entrevista",
    "Presenta tu experiencia en una entrevista: lo que has hecho, lo que hiciste y lo que ya habías hecho antes.",
    "8 min",
    [
      sec(
        "Experiencia general",
        "En una entrevista, el pretérito perfecto resume tu experiencia hasta hoy.",
        [
          ["He trabajado en tres empresas internacionales.", "I've worked at three international companies."],
          ["He dirigido equipos de hasta diez personas.", "I've led teams of up to ten people."],
        ],
        [
          fb("Completa.", "___ proyectos en cinco países distintos. (coordinar, yo)", "He coordinado", "Experiencia hasta hoy → pretérito perfecto."),
        ]
      ),
      sec(
        "Detalles y antecedentes",
        "Los detalles concretos van en pretérito; lo que ya habías hecho antes de un momento pasado, en pluscuamperfecto.",
        [
          ["En 2019 empecé en una startup en Lima.", "In 2019 I started at a startup in Lima."],
          ["Antes de eso, ya había trabajado dos años como becario.", "Before that, I had already worked two years as an intern."],
        ],
        [
          fb("Completa.", "Cuando me contrataron, ya ___ el máster. (terminar, yo)", "había terminado", "Anterior a otro pasado → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Responde al entrevistador.", "—¿Ha usado alguna vez este programa? —Sí, lo ___ en mi último trabajo. (usar, pretérito)", "usé", "Detalle concreto → pretérito."),
      fb("Responde al entrevistador.", "—¿Por qué dejó su último empleo? —Porque la empresa ___ a otra ciudad. (mudarse)", "se mudó", "Un hecho puntual → pretérito."),
      fb("Responde al entrevistador.", "Nunca ___ en el sector público hasta ahora. (trabajar, yo)", "he trabajado", "Hasta ahora → pretérito perfecto."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Qué ha aprendido en su último trabajo?", "He aprendido a trabajar bajo presión."],
          ["¿Cuándo terminó la carrera?", "La terminé en 2020."],
          ["¿Había vivido en el extranjero antes?", "Sí, había vivido un año en Canadá."],
          ["¿Ha tenido algún problema con un jefe?", "No, nunca he tenido problemas."],
        ],
        "La pregunta indica el tiempo de la respuesta."
      ),
      ms(
        "¿Qué frases de entrevista son correctas?",
        ["He gestionado presupuestos grandes.", "En 2018 he empezado a trabajar.", "Antes de la universidad, ya había hecho prácticas.", "Siempre me ha gustado trabajar en equipo."],
        [0, 2, 3],
        "Con una fecha terminada (en 2018) → pretérito: empecé."
      ),
      toEs("I have always wanted to work in this company.", "Siempre he querido trabajar en esta empresa.", "Siempre + pretérito perfecto (hasta hoy).", ["Siempre he querido trabajar para esta empresa."]),
      wo("Cuando llegué a la empresa, el proyecto ya había empezado.", "Pretérito + pluscuamperfecto.", "When I joined the company, the project had already started."),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1r-error-hunt-perfects",
    "Caza de errores: he, había y los participios",
    "«He ido ayer», «había escribido», «ya lo he hacido» — corrige los errores de los tiempos compuestos.",
    "7 min",
    [
      sec(
        "Marcadores incompatibles",
        "En España, con ayer, el año pasado o una fecha concreta no se usa el pretérito perfecto: ✗ Ayer he ido → ✓ Ayer fui.",
        [
          ["✗ El lunes he visto a Pedro. → ✓ El lunes vi a Pedro.", "On Monday I saw Pedro."],
          ["✓ Esta semana he visto a Pedro.", "This week I've seen Pedro."],
        ],
        [
          fb("Corrige el tiempo.", "Anoche ___ muy tarde. (acostarse, yo; el alumno escribió: me he acostado)", "me acosté", "Anoche → pretérito."),
        ]
      ),
      sec(
        "El pluscuamperfecto necesita un pasado de referencia",
        "El pluscuamperfecto expresa algo anterior a otro pasado. Sin ese segundo pasado, suele sobrar.",
        [
          ["✗ Había comido paella en Valencia. (¿antes de qué?)", "(needs another past moment)"],
          ["✓ Cuando llegaste, ya había comido.", "When you arrived, I had already eaten."],
        ],
        [
          mc(
            "¿Cuál es correcta?",
            ["Cuando llamaste, ya había salido.", "Cuando había llamado, ya salí.", "Cuando llamaste, ya he salido.", "Ya había salido ayer que llamaste."],
            0,
            "El pluscuamperfecto indica lo anterior a «llamaste»."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el participio.", "Todavía no he ___ la carta. (abrir; el alumno escribió: abrido)", "abierto", "Abrir → abierto."),
      fb("Corrige el participio.", "Nunca había ___ tanto. (reír; el alumno escribió: reido)", "reído", "Reír → reído (con tilde)."),
      fb("Corrige el tiempo.", "En 2010 ___ a Japón. (ir, nosotros; el alumno escribió: hemos ido)", "fuimos", "Fecha terminada → pretérito."),
      ms(
        "¿Qué frases tienen un error?",
        ["Este año he leído veinte libros.", "La semana pasada he estado enfermo.", "Me dijo que había perdido las llaves.", "Hoy he desayunado tarde."],
        [1],
        "La semana pasada → estuve enfermo."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Ya lo he hecho.", "Ya he lo hecho.", "Ya lo he hacido.", "Lo ya he hecho."],
        0,
        "Pronombre delante de haber; participio irregular hecho."
      ),
      toEs("When the police arrived, the thieves had already escaped.", "Cuando llegó la policía, los ladrones ya se habían escapado.", "Pretérito + pluscuamperfecto.", ["Cuando la policía llegó, los ladrones ya se habían escapado.", "Cuando llegó la policía, los ladrones ya habían escapado."]),
      wo("¿Has visto alguna vez un eclipse de sol?", "Experiencia de vida → pretérito perfecto.", "Have you ever seen a solar eclipse?"),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1r-story-crime-scene",
    "Detective de historias: la escena del crimen",
    "Un inspector reconstruye lo que había pasado antes de que llegara la policía. Resuelve el caso con el pluscuamperfecto.",
    "8 min",
    [
      sec(
        "La escena",
        "Cuando la policía llegó al museo, encontró pistas de todo lo que había ocurrido antes.",
        [
          ["Alguien había roto la ventana del segundo piso.", "Someone had broken the second-floor window."],
          ["El ladrón había desconectado la alarma.", "The thief had disconnected the alarm."],
          ["El vigilante se había dormido en su silla.", "The guard had fallen asleep in his chair."],
        ],
        [
          mc(
            "¿Por qué no sonó la alarma?",
            ["El ladrón la había desconectado.", "El vigilante la había roto.", "No había alarma.", "La policía la apagó."],
            0,
            "El ladrón había desconectado la alarma."
          ),
        ]
      ),
      sec(
        "Las declaraciones",
        "Los testigos cuentan lo que vieron (pretérito) y lo que ya había pasado (pluscuamperfecto).",
        [
          ["La limpiadora: «Cuando entré, el cuadro ya había desaparecido».", "The cleaner: \"When I went in, the painting had already disappeared.\""],
        ],
        [
          fb("Completa la declaración del vigilante.", "Cuando me desperté, el ladrón ya se ___ ido. (haber)", "había", "Había + participio."),
        ]
      ),
    ],
    [
      fb("Completa el informe.", "El ladrón ___ por la ventana que había roto. (entrar)", "entró", "La acción principal → pretérito."),
      fb("Completa el informe.", "Antes del robo, el ladrón ___ el museo varias veces. (visitar, pluscuamperfecto)", "había visitado", "Anterior al robo → pluscuamperfecto."),
      fb("Completa el informe.", "Esa noche ___ mucha niebla y no se veía nada. (haber, imperfecto)", "había", "Descripción de la escena → imperfecto."),
      mt(
        "Relaciona cada pista con lo que revela.",
        [
          ["huellas en la ventana", "El ladrón había tocado el cristal."],
          ["un café frío en la mesa", "El vigilante no se lo había tomado."],
          ["una puerta abierta", "Alguien la había dejado abierta."],
          ["barro en el suelo", "El ladrón había llegado del jardín."],
        ],
        "Cada pista revela una acción anterior → pluscuamperfecto."
      ),
      mc(
        "El inspector concluye: «El ladrón ___ el museo antes, porque conocía el camino.»",
        ["había visitado", "visitaba ayer", "ha visitado", "visitará"],
        0,
        "Anterior a los hechos → pluscuamperfecto."
      ),
      toEs("The inspector discovered that the guard had lied.", "El inspector descubrió que el vigilante había mentido.", "Pretérito + pluscuamperfecto.", []),
      wo("Nadie se había dado cuenta de que faltaba el cuadro.", "Pluscuamperfecto reflexivo + imperfecto.", "Nobody had noticed that the painting was missing."),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1r-mission-flat-ads",
    "Misión real: anuncios de pisos",
    "Escribe y lee anuncios inmobiliarios llenos de relativas: un piso que tiene, un barrio donde, una zona en la que…",
    "7 min",
    [
      sec(
        "Leer anuncios",
        "Los anuncios describen con relativas para dar mucha información en poco espacio.",
        [
          ["Piso luminoso que tiene tres habitaciones y terraza.", "Bright apartment that has three bedrooms and a terrace."],
          ["Situado en un barrio donde hay colegios y parques.", "Located in a neighborhood where there are schools and parks."],
          ["Ideal para familias que buscan tranquilidad.", "Ideal for families looking for peace and quiet."],
        ],
        [
          fb("Completa el anuncio.", "Estudio pequeño ___ está a dos minutos del metro.", "que", "Que + verbo, sin preposición."),
        ]
      ),
      sec(
        "Buscar piso",
        "Cuando buscas algo que no sabes si existe, la relativa va en subjuntivo (lo verás a fondo en el B2): Busco un piso que tenga ascensor.",
        [
          ["Busco un piso que tenga jardín.", "I'm looking for an apartment that has a garden. (I don't know if one exists)"],
          ["Vivo en un piso que tiene jardín.", "I live in an apartment that has a garden. (it exists)"],
        ],
        [
          mc(
            "«Alquilo una habitación ___ da al parque.» (la habitación existe)",
            ["que", "quien", "donde que", "lo que"],
            0,
            "Cosa, sin preposición → que."
          ),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "Chalet con jardín en el ___ pueden jugar los niños.", "que", "Preposición + el que."),
      fb("Completa el anuncio.", "Zona ___ se puede aparcar fácilmente.", "donde", "Lugar → donde."),
      fb("Completa el anuncio.", "Todo ___ necesitas, a cinco minutos a pie.", "lo que", "Todo lo que = everything (that)."),
      mt(
        "Relaciona cada frase con su final.",
        [
          ["Es un piso", "que tiene mucha luz."],
          ["Es una calle", "donde hay poco ruido."],
          ["Es el vecino", "con quien comparto el jardín."],
          ["Es la zona", "en la que crecí."],
        ],
        "Que, donde, con quien, en la que."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La casa en la que vivo es antigua.", "El dueño quien me alquila el piso es simpático.", "El barrio donde trabajo es caro.", "Lo que más me gusta es la terraza."],
        [0, 2, 3],
        "Sin preposición → que: el dueño que me alquila el piso."
      ),
      toEs("It's the neighborhood where I grew up.", "Es el barrio donde crecí.", "Donde para lugares.", ["Es el barrio en el que crecí.", "Es el barrio en donde crecí."]),
      wo("Alquilo una habitación que tiene baño propio.", "Relativa con que (la habitación existe → indicativo).", "I'm renting out a room that has its own bathroom."),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1r-contrast-que-lo-que-el-que",
    "Contraste: que, lo que, el que",
    "Tres relativos que se parecen mucho — elige el correcto según lo que sustituyen.",
    "7 min",
    [
      sec(
        "Lo que sustituyen",
        "Que: un sustantivo mencionado (el libro que leo). El que / la que: un sustantivo implícito (el que está en la mesa = el libro). Lo que: una idea o algo sin nombre (lo que dices).",
        [
          ["El coche que compré es rojo.", "The car I bought is red."],
          ["¿Qué coche? El que está aparcado ahí.", "Which car? The one parked there."],
          ["Lo que compré fue un coche.", "What I bought was a car."],
        ],
        [
          mc(
            "«De todos los vestidos, me gusta ___ es azul.»",
            ["el que", "que", "lo que", "quien"],
            0,
            "Sustantivo implícito (el vestido) → el que."
          ),
        ]
      ),
    ],
    [
      fb("Elige que, lo que, el que o la que.", "No entiendo ___ quieres decir.", "lo que", "Una idea → lo que."),
      fb("Elige que, lo que, el que o la que.", "La película ___ vimos ayer era de terror.", "que", "Sustantivo mencionado → que."),
      fb("Elige que, lo que, el que o la que.", "De las dos chaquetas, prefiero ___ tiene capucha.", "la que", "La chaqueta (implícita) → la que."),
      fb("Elige que, lo que, el que o la que.", "Los ___ lleguen tarde no podrán entrar.", "que", "Los que = those who."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Lo que necesito es tiempo.", "What I need is time."],
          ["El que necesito es este.", "The one I need is this one."],
          ["El libro que necesito…", "The book I need…"],
          ["Todo lo que necesito…", "Everything I need…"],
        ],
        "Lo que = what; el que = the one that; que = that/which."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Haz lo que quieras.", "Los que estudian aprueban.", "La que me gusta es la roja.", "Me dijo el que pasó."],
        [0, 1, 2],
        "Una idea → me dijo lo que pasó."
      ),
      wo("Lo que más echo de menos es la comida de mi madre.", "Lo que + superlativo.", "What I miss most is my mother's cooking."),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1r-dialogue-who-is-who",
    "Laboratorio de diálogo: ¿quién es quién en la foto?",
    "Identifica a la gente de una foto de boda: el que lleva gafas, la que está sentada, los que se ríen…",
    "7 min",
    [
      sec(
        "La foto de la boda",
        "Para identificar a personas se usa el/la/los/las que + verbo.",
        [
          ["—¿Quién es el que lleva corbata roja? —Es mi tío Paco.", "Who's the one wearing the red tie? — That's my uncle Paco."],
          ["—¿Y la que está a su lado? —Es su mujer, con quien lleva treinta años casado.", "And the woman next to him? — His wife, to whom he's been married for thirty years."],
          ["—¿Y los que se ríen al fondo? —Son mis primos, que siempre están de broma.", "And the ones laughing at the back? — My cousins, who are always joking."],
        ],
        [
          fb("Completa.", "—¿Quién es la ___ lleva el vestido verde? —Mi hermana.", "que", "La que = the one who."),
        ]
      ),
    ],
    [
      fb("Completa.", "El chico con ___ baila mi prima es su novio.", "quien", "Preposición + persona → quien (o el que)."),
      fb("Completa.", "Las ___ están sentadas son mis abuelas.", "que", "Las que = the ones who."),
      fb("Completa.", "El señor ___ está al lado de la novia es su padre.", "que", "Persona sin preposición → que."),
      mt(
        "Relaciona cada descripción con la persona.",
        [
          ["El que toca la guitarra", "mi primo Luis"],
          ["La que lleva sombrero", "mi tía Rosa"],
          ["Los que bailan", "los novios"],
          ["Con quien hablo en la foto", "mi mejor amiga"],
        ],
        "El/la/los que + verbo para identificar."
      ),
      mc(
        "«The ones who arrived late sat at the back.»",
        ["Los que llegaron tarde se sentaron al fondo.", "Quienes que llegaron tarde se sentaron al fondo.", "Lo que llegaron tarde se sentaron al fondo.", "Los cuales llegaron tarde se sentaron al fondo."],
        0,
        "Los que = the ones who."
      ),
      toEs("The one who is laughing is my brother.", "El que se ríe es mi hermano.", "El que + verbo.", ["El que se está riendo es mi hermano.", "El que está riéndose es mi hermano."]),
      wo("La mujer con quien habla mi padre es la madre del novio.", "Con quien para personas tras preposición.", "The woman my father is talking to is the groom's mother."),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1r-mission-newspaper",
    "Misión real: la noticia del periódico",
    "Redacta titulares y noticias con la pasiva con ser y el se pasivo, como un periodista.",
    "8 min",
    [
      sec(
        "Titulares",
        "Los titulares prefieren la pasiva y el se: el foco está en lo que pasó, no en quién lo hizo.",
        [
          ["Detenidos dos ladrones en el centro.", "Two thieves arrested downtown."],
          ["Se inaugura el nuevo hospital.", "New hospital opens."],
          ["El premio fue entregado por la reina.", "The prize was presented by the queen."],
        ],
        [
          fb("Completa el titular.", "Se ___ las obras del metro. (terminar, pretérito)", "terminaron", "Las obras (plural) → se terminaron."),
        ]
      ),
      sec(
        "El cuerpo de la noticia",
        "La noticia da detalles con la pasiva con ser + por + agente cuando el agente importa.",
        [
          ["El edificio fue diseñado por un equipo de arquitectas.", "The building was designed by a team of architects."],
        ],
        [
          fb("Completa la noticia.", "Los heridos fueron ___ al hospital. (trasladar)", "trasladados", "Participio concordado: trasladados."),
        ]
      ),
    ],
    [
      fb("Completa la noticia.", "La exposición será ___ por el alcalde. (inaugurar)", "inaugurada", "La exposición → inaugurada."),
      fb("Completa la noticia.", "Se ___ más de mil entradas en una hora. (vender, pretérito)", "vendieron", "Mil entradas → plural."),
      fb("Completa la noticia.", "El incendio fue ___ por los bomberos en dos horas. (apagar)", "apagado", "El incendio → apagado."),
      mt(
        "Relaciona cada titular con su versión activa.",
        [
          ["Se aprueba la nueva ley.", "El Congreso aprueba la nueva ley."],
          ["Rescatados tres montañeros.", "Los bomberos rescatan a tres montañeros."],
          ["El récord fue batido por una joven.", "Una joven bate el récord."],
          ["Se cierra la fábrica.", "La empresa cierra la fábrica."],
        ],
        "La pasiva y el se quitan el foco del agente."
      ),
      ms(
        "¿Qué titulares son correctos?",
        ["Se buscan testigos del accidente.", "Fueron encontrados los niños perdidos.", "Se abrió dos nuevas tiendas.", "La carretera fue cortada por la nieve."],
        [0, 1, 3],
        "Dos tiendas → se abrieron."
      ),
      toEs("The museum was visited by two million people.", "El museo fue visitado por dos millones de personas.", "Pasiva con ser + por.", []),
      wo("Según la policía, el coche fue robado durante la noche.", "Pasiva con ser en pretérito.", "According to the police, the car was stolen during the night."),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1r-error-hunt-se-possessives",
    "Caza de errores: se y posesivos",
    "«Se vende pisos», «el mío casa», «la de ella libro» — corrige los errores de las lecciones 21–26.",
    "7 min",
    [
      sec(
        "Concordancia con se",
        "Con el se pasivo, el verbo concuerda con el sustantivo: ✗ Se vende pisos → ✓ Se venden pisos.",
        [
          ["✗ Se necesita camareros. → ✓ Se necesitan camareros.", "Waiters needed."],
        ],
        [
          fb("Corrige.", "Se ___ ordenadores. (reparar; el alumno escribió: repara)", "reparan", "Ordenadores → plural."),
        ]
      ),
      sec(
        "Posesivos fuera de lugar",
        "Delante del sustantivo: mi, tu, su. Solos o detrás: mío, tuyo, suyo (con artículo si sustituyen al sustantivo).",
        [
          ["✗ Es mío libro. → ✓ Es mi libro. / Es mío.", "It's my book. / It's mine."],
          ["✗ Tu coche es rojo y mi es azul. → ✓ … y el mío es azul.", "…and mine is blue."],
        ],
        [
          fb("Corrige.", "Tus padres son de Lima y los ___ son de Quito. (yo; el alumno escribió: mis)", "míos", "Sustituye a padres → los míos."),
        ]
      ),
    ],
    [
      fb("Corrige.", "La reunión fue ___ para el lunes. (cancelar; el alumno escribió: cancelado)", "cancelada", "La reunión → cancelada."),
      fb("Corrige.", "—¿Esta mochila es de tu hermano? —No, es ___. (tú; el alumno escribió: tu)", "tuya", "Después de ser, solo → tuya."),
      fb("Corrige.", "En esta academia se ___ clases de cocina. (dar; el alumno escribió: da)", "dan", "Clases → plural: se dan."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se alquilan bicicletas.", "Los nuestros hijos son mayores.", "El premio fue ganado por una niña.", "Esta idea es suya."],
        [1],
        "Delante del sustantivo: nuestros hijos (sin artículo)."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Mi opinión es diferente de la tuya.", "Mi opinión es diferente de tu.", "Mía opinión es diferente de la tuya.", "Mi opinión es diferente de la tu."],
        0,
        "La tuya sustituye a «tu opinión»."
      ),
      toEs("These keys aren't mine; they're his.", "Estas llaves no son mías; son suyas.", "Posesivos solos después de ser; o: son de él.", ["Estas llaves no son mías, son de él.", "Estas llaves no son mías; son de él.", "Estas llaves no son mías, son suyas."]),
      wo("Se busca a la dueña de este perro.", "Se impersonal con a + persona.", "The owner of this dog is being sought."),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1r-dialogue-moving-day",
    "Laboratorio de diálogo: el día de la mudanza",
    "Tres compañeros de piso se separan y reparten las cosas. ¿De quién es cada una?",
    "7 min",
    [
      sec(
        "El reparto",
        "Los posesivos evitan repetir: —¿Esta lámpara es tuya? —No, la mía es la blanca.",
        [
          ["—¿De quién son estos platos? —Son míos, me los regaló mi madre.", "Whose are these plates? — They're mine, my mother gave them to me."],
          ["—¿Y el sofá? —El sofá es de Lucas, pero los cojines son nuestros.", "And the sofa? — The sofa is Lucas's, but the cushions are ours."],
        ],
        [
          fb("Completa.", "—¿Es tuya esta planta? —No, es de Ana. La ___ está en el balcón. (yo)", "mía", "La planta → la mía."),
        ]
      ),
    ],
    [
      fb("Completa.", "—¿Son vuestros los libros? —Sí, son ___.", "nuestros", "Libros → nuestros."),
      fb("Completa.", "—¿La tele es de Lucas? —Sí, es ___.", "suya", "La tele (femenino) → suya."),
      fb("Completa.", "Tus toallas son azules y las ___ son verdes. (nosotros)", "nuestras", "Toallas → las nuestras."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿De quién es la bici?", "Es mía."],
          ["¿Son tuyas las tazas?", "No, son de Ana."],
          ["¿Este es vuestro espejo?", "Sí, es nuestro."],
          ["¿El microondas es suyo?", "Sí, es de ellos."],
        ],
        "Posesivos y de + persona para aclarar."
      ),
      mc(
        "«That chair is yours (usted), not his.»",
        ["Esa silla es suya, no de él.", "Esa silla es su, no de él.", "Esa silla es la suya de usted, no la de él suya.", "Esa silla es tuya de usted."],
        0,
        "Suya para usted, de él para aclarar."
      ),
      toEs("Your (vosotros) cups are in the box; ours are on the table.", "Vuestras tazas están en la caja; las nuestras están en la mesa.", "Adjetivo delante, pronombre con artículo.", ["Vuestras tazas están en la caja, las nuestras están en la mesa."]),
      wo("Al final nos quedamos con lo mejor de cada uno.", "Lo + adjetivo = the best (things).", "In the end we kept the best of each person's things."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-emotions",
    "Red de palabras: emociones y reacciones",
    "Clasifica emociones, busca opuestos y reacciona a situaciones con el subjuntivo.",
    "7 min",
    [
      sec(
        "Positivas y negativas",
        "Muchas emociones tienen un verbo pronominal (alegrarse, enfadarse, preocuparse) y un adjetivo (alegre, enfadado, preocupado).",
        [
          ["Me alegro de que estés aquí. / Estoy alegre.", "I'm glad you're here. / I'm cheerful."],
          ["Se enfadó porque llegamos tarde. / Está enfadado.", "He got angry because we were late. / He's angry."],
        ],
        [
          ms(
            "¿Qué emociones son negativas?",
            ["la rabia", "el orgullo", "la vergüenza", "la envidia"],
            [0, 2, 3],
            "El orgullo puede ser positivo (estar orgulloso de alguien)."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada emoción con su opuesto.",
        [
          ["la alegría", "la tristeza"],
          ["la calma", "los nervios"],
          ["la confianza", "la desconfianza"],
          ["el entusiasmo", "el aburrimiento"],
        ],
        "Pares de opuestos del vocabulario de emociones."
      ),
      mc("¿Cuál no encaja?", ["asustado", "aterrorizado", "tranquilo", "nervioso"], 2, "Tranquilo es el único que expresa calma."),
      fb("Completa.", "Me da mucha ___ hablar en público; me pongo rojo.", "vergüenza", "Dar vergüenza = to be embarrassed."),
      fb("Completa.", "Mis padres están muy ___ de mí porque terminé la carrera.", "orgullosos", "Estar orgulloso de alguien."),
      fb("Completa con subjuntivo.", "Me pone nerviosa que la gente ___ tarde. (llegar)", "llegue", "Poner nervioso que + subjuntivo."),
      toEs("It scares me that you (tú) drive so fast.", "Me da miedo que conduzcas tan rápido.", "Dar miedo que + subjuntivo.", ["Me asusta que conduzcas tan rápido.", "Me da miedo que manejes tan rápido."]),
      wo("Siento una mezcla de alegría y nostalgia.", "Sentir + sustantivos de emoción.", "I feel a mixture of joy and nostalgia."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-opinions",
    "Red de palabras: opiniones y certezas",
    "De «estoy seguro» a «lo dudo»: ordena las expresiones de opinión según su nivel de certeza.",
    "7 min",
    [
      sec(
        "La escala de certeza",
        "Seguro → estoy convencido, sin duda, es evidente (indicativo). Posible → quizás, tal vez, puede que, es posible (subjuntivo con puede que y es posible).",
        [
          ["Sin duda es la mejor opción.", "It's undoubtedly the best option."],
          ["Puede que llueva esta tarde.", "It might rain this afternoon."],
        ],
        [
          mc(
            "¿Qué expresión indica más certeza?",
            ["Estoy convencido de que…", "Puede que…", "No sé si…", "Dudo que…"],
            0,
            "Estar convencido = estar muy seguro."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["A mi modo de ver", "In my view"],
          ["Me da la impresión de que", "I get the impression that"],
          ["No me cabe duda de que", "I have no doubt that"],
          ["Estoy de acuerdo con", "I agree with"],
        ],
        "Expresiones frecuentes para opinar."
      ),
      mc("¿Cuál no encaja?", ["opino", "considero", "pienso", "olvido"], 3, "Olvidar no es un verbo de opinión."),
      fb("Completa.", "No me cabe duda de que ___ razón. (tener, tú)", "tienes", "Certeza → indicativo."),
      fb("Completa.", "Puede que mañana ___ más frío. (hacer)", "haga", "Puede que + subjuntivo."),
      fb("Completa.", "No estoy de ___ con tu propuesta.", "acuerdo", "Estar de acuerdo con."),
      toEs("In my opinion, it's a good idea.", "En mi opinión, es una buena idea.", "En mi opinión + indicativo.", ["Para mí, es una buena idea.", "A mi parecer, es una buena idea.", "Desde mi punto de vista, es una buena idea."]),
      wo("Me da la impresión de que no está contento.", "Dar la impresión de que + indicativo.", "I get the impression he isn't happy."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-nature",
    "Red de palabras: la naturaleza y el medio ambiente",
    "Paisajes, animales y problemas ambientales — y deseos para el planeta con ojalá.",
    "7 min",
    [
      sec(
        "Paisajes y problemas",
        "Agrupa: paisajes (la sierra, el valle, la costa, la selva), problemas (la contaminación, la sequía, el calentamiento global), soluciones (reciclar, ahorrar energía, proteger).",
        [
          ["La sequía afecta a los agricultores del sur.", "The drought affects farmers in the south."],
          ["Ojalá que protejan la selva.", "I hope they protect the rainforest."],
        ],
        [
          ms(
            "¿Qué palabras son problemas ambientales?",
            ["la deforestación", "la contaminación", "la cordillera", "la sequía"],
            [0, 1, 3],
            "La cordillera es un paisaje (una cadena de montañas)."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada problema con una solución.",
        [
          ["la contaminación del aire", "usar el transporte público"],
          ["la basura de plástico", "reciclar"],
          ["la deforestación", "plantar árboles"],
          ["la sequía", "ahorrar agua"],
        ],
        "Vocabulario del medio ambiente."
      ),
      mc("¿Cuál no encaja?", ["el río", "el lago", "el mar", "el desierto"], 3, "Los otros tres tienen agua."),
      fb("Completa.", "Es necesario que todos ___ agua. (ahorrar, nosotros)", "ahorremos", "Es necesario que + subjuntivo."),
      fb("Completa.", "Las especies en peligro de ___ necesitan protección.", "extinción", "En peligro de extinción = endangered."),
      fb("Completa.", "Ojalá que el gobierno ___ más parques naturales. (crear)", "cree", "Crear → cree."),
      toEs("It's important that we recycle more.", "Es importante que reciclemos más.", "Es importante que + subjuntivo.", ["Es importante que nosotros reciclemos más."]),
      wo("Los incendios forestales han destruido miles de hectáreas.", "Pretérito perfecto con participio irregular (destruido es regular).", "Forest fires have destroyed thousands of hectares."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-kitchen",
    "Red de palabras: la cocina",
    "Utensilios, verbos de cocina y alimentos — y una receta dictada con mandatos.",
    "7 min",
    [
      sec(
        "Utensilios y acciones",
        "Relaciona cada utensilio con su acción: la sartén (freír), la olla (hervir), el horno (hornear), el cuchillo (cortar), la batidora (batir).",
        [
          ["Fríe los huevos en la sartén.", "Fry the eggs in the frying pan."],
          ["Hierve el agua en una olla grande.", "Boil the water in a big pot."],
        ],
        [
          mt(
            "Relaciona cada utensilio con su acción.",
            [
              ["la sartén", "freír"],
              ["el horno", "hornear"],
              ["el rallador", "rallar"],
              ["el cuchillo", "cortar"],
            ],
            "Vocabulario de cocina."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["pelar", "trocear", "picar", "fregar"], 3, "Fregar es lavar los platos; los otros son formas de preparar alimentos."),
      fb("Completa la receta (tú).", "___ la cebolla muy fina. (picar)", "Pica", "Mandato de tú: pica."),
      fb("Completa la receta (usted).", "___ el horno a 200 grados. (precalentar)", "Precaliente", "Precalentar (e→ie) → precaliente."),
      fb("Completa.", "Añade una ___ de sal. (a pinch)", "pizca", "Una pizca = a pinch."),
      ms(
        "¿Qué verbos se usan con huevos?",
        ["batir", "freír", "cocer", "pelar"],
        [0, 1, 2],
        "Pelar un huevo cocido es posible, pero aquí se piden formas de cocinarlos: batir, freír, cocer."
      ),
      toEs("Don't burn the rice! (tú)", "¡No quemes el arroz!", "Negativo de tú → subjuntivo; quemar → quemes.", ["¡No se te queme el arroz!"]),
      wo("Sirve la sopa caliente con un poco de perejil.", "Mandato de tú (servir → sirve).", "Serve the soup hot with a little parsley."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-money",
    "Red de palabras: el dinero y las finanzas",
    "Ahorrar, gastar, pedir un préstamo — el vocabulario del dinero con el condicional y el subjuntivo.",
    "7 min",
    [
      sec(
        "Verbos del dinero",
        "Ahorrar (to save), gastar (to spend), prestar (to lend), pedir prestado (to borrow), deber (to owe), cobrar (to charge / get paid), invertir (to invest).",
        [
          ["Si ahorras un poco cada mes, podrás viajar.", "If you save a little each month, you'll be able to travel."],
          ["Le debo cincuenta euros a mi hermano.", "I owe my brother fifty euros."],
        ],
        [
          mt(
            "Relaciona cada verbo con su significado.",
            [
              ["cobrar", "to charge / get paid"],
              ["invertir", "to invest"],
              ["gastar", "to spend"],
              ["deber", "to owe"],
            ],
            "Verbos básicos de finanzas."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["la tarjeta", "el efectivo", "el cheque", "el cajero"], 3, "Los tres primeros son formas de pago; el cajero es la máquina (o la persona)."),
      fb("Completa.", "Con un millón de euros, yo ___ en una casa. (invertir, condicional)", "invertiría", "Condicional: invertiría."),
      fb("Completa.", "¿Me ___ diez euros hasta mañana? (prestar, tú, presente)", "prestas", "Petición informal: ¿me prestas?"),
      fb("Completa.", "El banco me ___ una comisión por sacar dinero. (cobrar, pretérito)", "cobró", "Cobrar = to charge."),
      ms(
        "¿Qué frases son correctas?",
        ["¿Puedo pagar con tarjeta?", "Pedí prestado dinero a mi padre.", "Tengo que ahorrar para el verano.", "Me prestó dinero de mí."],
        [0, 1, 2],
        "Me prestó dinero (sin «de mí»)."
      ),
      toEs("I would save more, but everything is very expensive.", "Ahorraría más, pero todo es muy caro.", "Condicional para lo que harías + presente para la realidad.", ["Ahorraría más pero todo es muy caro.", "Yo ahorraría más, pero todo es muy caro."]),
      wo("Es mejor que no gastes todo tu sueldo.", "Es mejor que + subjuntivo.", "It's better not to spend your whole salary."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-education",
    "Red de palabras: la educación",
    "Asignaturas, exámenes, notas y títulos — la vida estudiantil con condiciones y consejos.",
    "7 min",
    [
      sec(
        "La vida de estudiante",
        "Aprobar / suspender (to pass / to fail), sacar buena nota (to get a good grade), matricularse (to enroll), la beca (scholarship), el título (degree).",
        [
          ["Si estudias, aprobarás.", "If you study, you'll pass."],
          ["Me dieron una beca para el máster.", "They gave me a scholarship for the master's."],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["suspender", "to fail"],
              ["la beca", "scholarship"],
              ["matricularse", "to enroll"],
              ["la asignatura", "subject"],
            ],
            "Vocabulario de la educación."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["la matrícula", "el examen", "la nota", "la receta"], 3, "La receta no tiene que ver con la educación."),
      fb("Completa.", "Si no estudias, ___ el examen. (suspender, futuro)", "suspenderás", "Si + presente, futuro."),
      fb("Completa.", "Mi profesora quiere que ___ el trabajo antes del viernes. (entregar, nosotros)", "entreguemos", "Querer que + subjuntivo; g → gu."),
      fb("Completa.", "Este año he ___ un diez en matemáticas. (sacar)", "sacado", "Sacar nota; pretérito perfecto."),
      ms(
        "¿Qué frases son correctas?",
        ["Aprobé todas las asignaturas.", "Me matriculé en tres cursos.", "Saqué una nota muy alta.", "Suspendí el examen de bueno."],
        [0, 1, 2],
        "«De bueno» no tiene sentido aquí."
      ),
      toEs("If you (tú) get a scholarship, you will study in Madrid.", "Si consigues una beca, estudiarás en Madrid.", "Si + presente, futuro.", ["Si te dan una beca, estudiarás en Madrid.", "Si obtienes una beca, estudiarás en Madrid."]),
      wo("Nunca había sacado tan buena nota en química.", "Pluscuamperfecto + tan + adjetivo.", "I had never gotten such a good grade in chemistry."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-life-experiences",
    "Red de palabras: experiencias de vida",
    "Logros, primeras veces y momentos clave — en pretérito perfecto y pluscuamperfecto.",
    "7 min",
    [
      sec(
        "Logros y primeras veces",
        "Lograr / conseguir (to achieve), cumplir un sueño (to fulfill a dream), la primera vez, atreverse a (to dare to), superar un miedo (to overcome a fear).",
        [
          ["Por fin he cumplido mi sueño de viajar a Japón.", "I've finally fulfilled my dream of traveling to Japan."],
          ["Nunca me había atrevido a saltar en paracaídas.", "I had never dared to go skydiving."],
        ],
        [
          fb("Completa.", "Este año he ___ mi miedo a volar. (superar)", "superado", "Pretérito perfecto."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["cumplir un sueño", "to fulfill a dream"],
          ["atreverse a", "to dare to"],
          ["lograr", "to achieve"],
          ["valer la pena", "to be worth it"],
        ],
        "Expresiones de experiencias."
      ),
      mc("¿Cuál no encaja?", ["lograr", "conseguir", "alcanzar", "fracasar"], 3, "Fracasar es lo contrario: no lograr algo."),
      fb("Completa.", "¿Alguna vez te has ___ a cantar en público? (atreverse)", "atrevido", "Atreverse → te has atrevido."),
      fb("Completa.", "Fue la primera vez que ___ un maratón. (correr, yo, pretérito)", "corrí", "La primera vez que + pretérito."),
      fb("Completa.", "Antes de ese viaje, nunca ___ fuera de mi país. (estar, pluscuamperfecto)", "había estado", "Anterior a otro pasado."),
      toEs("It was worth it.", "Valió la pena.", "Valer la pena = to be worth it; pretérito para una experiencia terminada.", ["Mereció la pena.", "Ha valido la pena.", "Ha merecido la pena."]),
      wo("Aprender a nadar de adulto ha sido mi mayor logro.", "Infinitivo como sujeto + pretérito perfecto.", "Learning to swim as an adult has been my biggest achievement."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-news",
    "Red de palabras: noticias y sucesos",
    "Accidentes, robos, elecciones y catástrofes — el vocabulario de las noticias con la pasiva.",
    "7 min",
    [
      sec(
        "Secciones del periódico",
        "Sucesos (accidentes, robos), política (elecciones, el gobierno), economía (la crisis, el paro), deportes, cultura.",
        [
          ["Detenido un hombre por robar en una joyería.", "Man arrested for robbing a jewelry store."],
          ["El paro ha bajado un dos por ciento.", "Unemployment has dropped by two percent."],
        ],
        [
          ms(
            "¿Qué palabras pertenecen a la sección de sucesos?",
            ["el atraco", "el incendio", "las elecciones", "el accidente"],
            [0, 1, 3],
            "Las elecciones son de política."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el paro", "unemployment"],
          ["el atraco", "robbery / hold-up"],
          ["el herido", "injured person"],
          ["el testigo", "witness"],
        ],
        "Vocabulario de noticias."
      ),
      mc("¿Cuál no encaja?", ["el terremoto", "la inundación", "el huracán", "el titular"], 3, "El titular es el título de una noticia; los otros son catástrofes."),
      fb("Completa.", "Tres personas resultaron ___ en el accidente.", "heridas", "Resultar herido/a."),
      fb("Completa.", "El ladrón fue ___ por la policía. (detener)", "detenido", "Pasiva con ser."),
      fb("Completa.", "Se ___ las elecciones para noviembre. (convocar, pretérito)", "convocaron", "Se pasivo plural."),
      toEs("According to the witnesses, the driver had been drinking.", "Según los testigos, el conductor había bebido.", "Pluscuamperfecto para lo anterior.", ["Según los testigos, el conductor había estado bebiendo."]),
      wo("La inundación ha obligado a evacuar a cien familias.", "Obligar a + infinitivo; a personal.", "The flood has forced a hundred families to evacuate."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-city",
    "Red de palabras: la ciudad",
    "Calles, edificios y servicios — describe tu ciudad con relativas.",
    "7 min",
    [
      sec(
        "Lugares y servicios",
        "El ayuntamiento (city hall), el barrio (neighborhood), la acera (sidewalk), el paso de peatones (crosswalk), la rotonda (roundabout), las afueras (outskirts).",
        [
          ["Vivo en un barrio donde hay muchos parques.", "I live in a neighborhood where there are many parks."],
          ["El ayuntamiento es el edificio que está en la plaza.", "City hall is the building that's on the square."],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["la acera", "sidewalk"],
              ["el paso de peatones", "crosswalk"],
              ["la rotonda", "roundabout"],
              ["las afueras", "outskirts"],
            ],
            "Vocabulario de la ciudad."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el semáforo", "la esquina", "la cuadra", "la almohada"], 3, "La almohada es de la cama."),
      fb("Completa con un relativo.", "Es la plaza ___ nos conocimos.", "donde", "Lugar → donde."),
      fb("Completa con un relativo.", "El puente ___ cruzamos es del siglo XV.", "que", "Que sin preposición."),
      fb("Completa.", "Cruza siempre por el ___ de peatones.", "paso", "El paso de peatones."),
      ms(
        "¿Qué frases describen bien una ciudad?",
        ["Tiene un casco antiguo precioso.", "Las afueras son más baratas que el centro.", "Hay mucho tráfico en hora punta.", "La acera cocina muy bien."],
        [0, 1, 2],
        "La acera no cocina."
      ),
      toEs("It's the street where the market is.", "Es la calle donde está el mercado.", "Donde + estar para ubicación.", ["Es la calle en la que está el mercado.", "Es la calle en donde está el mercado."]),
      wo("En el centro histórico se prohíbe circular en coche.", "Se impersonal/pasivo con prohibir.", "Driving is prohibited in the historic center."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-business",
    "Red de palabras: el mundo del trabajo",
    "Empresas, reuniones y contratos — el vocabulario profesional con la pasiva y los pronombres.",
    "7 min",
    [
      sec(
        "La oficina",
        "La empresa, la plantilla (staff), el departamento, el jefe / la jefa, el cliente, el contrato, la reunión, el plazo (deadline).",
        [
          ["El contrato fue firmado ayer.", "The contract was signed yesterday."],
          ["Se lo mandé al cliente antes del plazo.", "I sent it to the client before the deadline."],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["la plantilla", "staff"],
              ["el plazo", "deadline"],
              ["el ascenso", "promotion"],
              ["la jornada", "working day"],
            ],
            "Vocabulario profesional."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el contrato", "la factura", "el presupuesto", "el paraguas"], 3, "El paraguas no es un documento de negocios."),
      fb("Completa.", "La reunión fue ___ para el jueves. (aplazar)", "aplazada", "La reunión → aplazada."),
      fb("Completa.", "¿El presupuesto? Ya ___ lo envié al cliente.", "se", "Le + lo → se lo."),
      fb("Completa.", "Trabajo a jornada ___: ocho horas al día.", "completa", "Jornada completa = full-time."),
      ms(
        "¿Qué frases son correctas?",
        ["Me han ofrecido un ascenso.", "Se necesitan nuevos empleados.", "Firmamos el contrato ayer.", "El plazo se termina ayer mañana."],
        [0, 1, 2],
        "«Ayer mañana» es contradictorio."
      ),
      toEs("The company was founded in 1998.", "La empresa fue fundada en 1998.", "Pasiva con ser; también: La empresa se fundó en 1998.", ["La empresa se fundó en 1998."]),
      wo("Si terminamos antes del plazo, nos darán un bonus.", "Si + presente + futuro.", "If we finish before the deadline, they'll give us a bonus."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-big-error-hunt",
    "Desafío B1: la gran caza de errores",
    "Empieza el desafío final del B1: un error por frase, de todos los temas del nivel.",
    "9 min",
    [
      sec(
        "Tu lista de control",
        "Para cada frase: ¿indicativo o subjuntivo? ¿mandato bien formado? ¿condicional o futuro? ¿perfecto, pretérito o pluscuamperfecto? ¿relativo correcto? ¿pronombres en orden? ¿se concordado?",
        [
          ["✗ Espero que vienes. → ✓ Espero que vengas.", "I hope you come."],
          ["✗ Le lo dije. → ✓ Se lo dije.", "I told him."],
        ],
        [
          mc(
            "«Si tendré tiempo, te llamaré.» ¿Qué falla?",
            ["Después de si va presente: si tengo tiempo.", "Te llamaré debería ser te llamaría.", "Tiempo debería ser el tiempo.", "Nada."],
            0,
            "Si + presente."
          ),
          mc(
            "«La chica quien conocí es de Perú.» ¿Qué falla?",
            ["Sin preposición se usa que: la chica que conocí.", "Conocí debería ser conocía.", "Es debería ser está.", "Nada."],
            0,
            "Quien solo tras preposición (o en explicativas)."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "No creo que ___ razón. (tener, él; el alumno escribió: tiene)", "tenga", "No creer → subjuntivo."),
      fb("Corrige.", "¡No me ___ eso! (decir, tú; el alumno escribió: dices)", "digas", "Negativo → subjuntivo."),
      fb("Corrige.", "Ayer ___ a mis primos. (ver, yo; el alumno escribió: he visto)", "vi", "Ayer → pretérito."),
      fb("Corrige.", "Se ___ muchos pisos en esta zona. (construir, pretérito; el alumno escribió: construyó)", "construyeron", "Pisos → plural."),
      ms(
        "¿Qué frases son correctas?",
        ["Me alegro de que hayas venido.", "Nunca había visto algo así.", "Sentaos, por favor.", "Te lo he dicho mil veces."],
        [0, 1, 2, 3],
        "Las cuatro son correctas."
      ),
      mc(
        "¿Cuál NO tiene errores?",
        ["Es obvio que está cansado.", "Es obvio que esté cansado.", "Es posible que está cansado.", "Ojalá que está cansado."],
        0,
        "Es obvio → indicativo."
      ),
      toEs("I would tell it to her, but I don't want her to get angry.", "Se lo diría, pero no quiero que se enfade.", "Condicional + se lo + querer que + subjuntivo.", ["Se lo diría, pero no quiero que se enoje.", "Yo se lo diría, pero no quiero que se enfade."]),
      wo("Lo que más me molesta es que nadie me haya avisado.", "Lo que + molestar que + perfecto de subjuntivo.", "What bothers me most is that nobody warned me."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-dialogue-marathon",
    "Desafío B1: maratón de diálogos",
    "Cuatro escenas seguidas: una entrevista, una queja, un consejo y una despedida.",
    "9 min",
    [
      sec(
        "Escena 1: la entrevista",
        "Experiencia con pretérito perfecto, planes con futuro y condicional.",
        [
          ["—¿Ha trabajado alguna vez en atención al cliente? —Sí, he trabajado tres años en una tienda.", "Have you ever worked in customer service? — Yes, I've worked three years in a store."],
          ["—¿Qué haría con un cliente enfadado? —Lo escucharía con calma.", "What would you do with an angry customer? — I'd listen to him calmly."],
        ],
        [
          fb("Completa la respuesta.", "Después le ___ una solución rápida. (ofrecer, condicional)", "ofrecería", "Condicional para una situación hipotética."),
        ]
      ),
      sec(
        "Escena 2: la queja",
        "Emociones y peticiones con subjuntivo.",
        [
          ["—Me molesta mucho que el pedido no haya llegado.", "It really bothers me that the order hasn't arrived."],
          ["—Lo siento. Le prometo que se lo enviaremos mañana.", "I'm sorry. I promise we'll send it to you tomorrow."],
        ],
        [
          fb("Completa.", "Exijo que me ___ el dinero. (devolver, ustedes)", "devuelvan", "Exigir que + subjuntivo."),
        ]
      ),
      sec(
        "Escena 3: el consejo",
        "Recomendaciones con subjuntivo y condicional.",
        [
          ["—No sé si aceptar el trabajo en Londres. —Yo que tú, lo aceptaría. Es importante que pienses en tu futuro.", "I don't know whether to take the job in London. — If I were you, I'd take it. It's important you think about your future."],
        ],
        [
          mc(
            "«Yo que tú, lo ___.»",
            ["aceptaría", "acepto", "acepte", "aceptaré"],
            0,
            "Yo que tú + condicional."
          ),
        ]
      ),
    ],
    [
      mc(
        "Escena 4: la despedida. «¡Que te vaya muy bien!» significa…",
        ["All the best! / Good luck!", "Go away!", "It went very well!", "Go well yesterday!"],
        0,
        "Que + subjuntivo como deseo."
      ),
      fb("Completa la despedida.", "Cuando ___ a Londres, mándame fotos. (llegar, tú)", "llegues", "Cuando + futuro → subjuntivo."),
      fb("Completa la despedida.", "Ojalá que nos ___ a ver pronto. (volver, nosotros)", "volvamos", "Ojalá + subjuntivo: volvamos."),
      mt(
        "Relaciona cada frase con su respuesta.",
        [
          ["¿Has visto mis gafas?", "Sí, las he dejado en la mesa."],
          ["¿Me prestas tu coche?", "Sí, te lo presto."],
          ["¿Podrías ayudarme?", "Claro, ¿qué necesitas?"],
          ["Me han despedido.", "¡Cuánto siento que te hayan despedido!"],
        ],
        "Cuatro situaciones típicas del B1."
      ),
      toEs("Call me (tú) when you get home.", "Llámame cuando llegues a casa.", "Mandato + cuando + subjuntivo.", ["Llámame cuando llegues a tu casa.", "Llámame cuando estés en casa."]),
      wo("Me encantaría verte en mi boda el año que viene.", "Condicional de cortesía + infinitivo con pronombre.", "I'd love to see you at my wedding next year."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-translation-relay",
    "Desafío B1: relevo de traducción",
    "Traduce en las dos direcciones, un tema del B1 tras otro.",
    "9 min",
    [
      sec(
        "Calentamiento",
        "Antes de traducir, identifica la trampa: ¿subjuntivo? ¿pronombres dobles? ¿qué pasado? ¿se?",
        [
          ["I want you to come. → Quiero que vengas.", "(want + different subject → subjuntivo)"],
          ["I had already eaten. → Ya había comido.", "(pluscuamperfecto)"],
        ],
        [
          toEs("I hope it doesn't rain tomorrow.", "Espero que no llueva mañana.", "Esperar que + subjuntivo.", ["Ojalá que no llueva mañana.", "Ojalá no llueva mañana.", "Espero que mañana no llueva."]),
        ]
      ),
    ],
    [
      toEs("Don't tell it to them! (tú)", "¡No se lo digas!", "Negativo + se lo.", ["¡No se lo cuentes!"]),
      toEs("The book that you (tú) lent me is fantastic.", "El libro que me prestaste es fantástico.", "Relativo que + pretérito.", ["El libro que me dejaste es fantástico."]),
      toEs("Houses are sold here.", "Aquí se venden casas.", "Se pasivo plural.", ["Se venden casas aquí."]),
      toEn("Si me necesitas, llámame.", "If you need me, call me.", "Si + presente + mandato.", ["Call me if you need me."]),
      toEn("No creo que lo sepa todavía.", "I don't think he knows yet.", "No creer que + subjuntivo = I don't think.", ["I don't think she knows yet.", "I don't believe he knows it yet."]),
      toEn("Cuando me desperté, mis padres ya habían salido de casa.", "When I woke up, my parents had already left home.", "Pretérito + pluscuamperfecto.", ["When I woke up, my parents had already left the house.", "When I woke up, my parents had already gone out."]),
      toEn("¿Te importaría cerrar la ventana?", "Would you mind closing the window?", "¿Te importaría + infinitivo?", []),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-build-a-sentence",
    "Desafío B1: construye la frase",
    "Frases largas del B1 con subjuntivo, pronombres dobles y relativos — pon cada pieza en su sitio.",
    "8 min",
    [
      sec(
        "La arquitectura del B1",
        "Las frases del B1 unen cláusulas: principal + que + subjuntivo, principal + relativa, condición + resultado.",
        [
          ["Quiero que me expliques lo que pasó.", "I want you to explain to me what happened."],
          ["Si ves a la chica que trabaja aquí, dáselo.", "If you see the girl who works here, give it to her."],
        ],
        [
          wo("Es importante que le digas la verdad a tu madre.", "Es importante que + subjuntivo + le … a tu madre.", "It's important that you tell your mother the truth."),
        ]
      ),
    ],
    [
      wo("No creo que el restaurante que nos recomendaste esté abierto.", "No creer + subjuntivo con una relativa dentro.", "I don't think the restaurant you recommended to us is open."),
      wo("Ya se lo había contado a mis padres cuando llamaste.", "Se lo + pluscuamperfecto + pretérito.", "I had already told my parents when you called."),
      wo("Si tienes tiempo esta tarde, ¿me ayudarías con la mudanza?", "Si + presente + condicional de cortesía.", "If you have time this afternoon, would you help me with the move?"),
      wo("Ojalá que encontremos un piso que tenga terraza.", "Ojalá + subjuntivo + relativa en subjuntivo.", "I hope we find an apartment that has a terrace."),
      wo("Me alegro mucho de que por fin hayáis vuelto a casa.", "Alegrarse de que + perfecto de subjuntivo.", "I'm so glad you've finally come back home."),
      mc(
        "¿Qué frase está bien construida?",
        ["Dile que me lo traiga mañana.", "Dile que me lo trae mañana.", "Dile que lo me traiga mañana.", "Le di que me lo traiga mañana."],
        0,
        "Mandato + que + subjuntivo (orden indirecta) + me lo."
      ),
      fb("Termina la frase.", "El chico con ___ salgo se llama Diego.", "quien", "Con quien (persona tras preposición)."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-subjunctive-gauntlet",
    "Desafío B1: el subjuntivo sin pistas",
    "Doce decisiones rápidas: ¿indicativo o subjuntivo? Sin ayudas, sin pistas.",
    "8 min",
    [
      sec(
        "A toda velocidad",
        "Deseo, duda, emoción, necesidad, ojalá, cuando + futuro → subjuntivo. Certeza, opinión afirmativa, hábito → indicativo.",
        [
          ["Sé que vienes. / Quiero que vengas.", "I know you're coming. / I want you to come."],
        ],
        [
          fb("¿Indicativo o subjuntivo?", "Estoy seguro de que ___ bien. (salir, todo)", "saldrá", "Certeza → indicativo (futuro)."),
          fb("¿Indicativo o subjuntivo?", "Me sorprende que no ___ nadie. (haber)", "haya", "Emoción → subjuntivo."),
        ]
      ),
    ],
    [
      fb("¿Indicativo o subjuntivo?", "Creo que ___ en casa. (estar, ellos)", "están", "Creer afirmativo → indicativo."),
      fb("¿Indicativo o subjuntivo?", "Te pido que no ___ ruido. (hacer, tú)", "hagas", "Pedir que → subjuntivo."),
      fb("¿Indicativo o subjuntivo?", "Cuando ___ mayor, viviré en el campo. (ser, yo)", "sea", "Cuando + futuro → subjuntivo."),
      fb("¿Indicativo o subjuntivo?", "Siempre que ___, me mojo. (llover)", "llueve", "Hábito → indicativo."),
      fb("¿Indicativo o subjuntivo?", "Es evidente que no ___ la verdad. (decir, él)", "dice", "Certeza → indicativo."),
      fb("¿Indicativo o subjuntivo?", "Es una pena que ___ tan lejos. (vivir, tú)", "vivas", "Reacción → subjuntivo."),
      fb("¿Indicativo o subjuntivo?", "Necesito que me ___ un favor. (hacer, tú)", "hagas", "Necesitar que → subjuntivo."),
      mc(
        "«No es que no ___, es que no puedo.»",
        ["quiera", "quiero", "querré", "quería"],
        0,
        "No es que + subjuntivo (niega la razón)."
      ),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-past-perfects-gauntlet",
    "Desafío B1: pasados y perfectos",
    "Pretérito, imperfecto, pretérito perfecto y pluscuamperfecto — elige el tiempo en cada frase.",
    "8 min",
    [
      sec(
        "Cuatro pasados",
        "Pretérito: acción cerrada. Imperfecto: escena o hábito. Pretérito perfecto: conectado con el presente (hoy, esta semana, alguna vez). Pluscuamperfecto: anterior a otro pasado.",
        [
          ["Hoy he visto a Juan. Ayer vi a Ana. De niño veía mucho la tele. Ya había visto la película.", "Four pasts in four sentences."],
        ],
        [
          fb("Elige el tiempo.", "Esta mañana ___ un café con mi jefe. (tomar, yo)", "he tomado", "Esta mañana → perfecto (uso de España)."),
          fb("Elige el tiempo.", "El año pasado ___ a Cuba. (viajar, nosotros)", "viajamos", "Periodo cerrado → pretérito."),
        ]
      ),
    ],
    [
      fb("Elige el tiempo.", "Cuando ___ pequeña, vivía en un pueblo. (ser, yo)", "era", "Etapa de la vida → imperfecto."),
      fb("Elige el tiempo.", "Cuando llegamos, el tren ya ___. (salir)", "había salido", "Anterior → pluscuamperfecto."),
      fb("Elige el tiempo.", "¿Alguna vez ___ paella? (comer, tú)", "has comido", "Experiencia → perfecto."),
      fb("Elige el tiempo.", "Mientras ___ la cena, sonó el timbre. (preparar, yo)", "preparaba", "Acción en curso → imperfecto."),
      fb("Elige el tiempo.", "Me dijo que nunca ___ en avión. (volar)", "había volado", "Estilo indirecto → pluscuamperfecto."),
      mc(
        "«I've lost my keys and I can't get in.»",
        ["He perdido las llaves y no puedo entrar.", "Perdía las llaves y no puedo entrar.", "Había perdido las llaves y no puedo entrar.", "Pierdo las llaves y no podía entrar."],
        0,
        "Resultado presente → pretérito perfecto."
      ),
      toEs("When I was a child, I had never seen the sea.", "Cuando era niño, nunca había visto el mar.", "Imperfecto + pluscuamperfecto.", ["Cuando era niña, nunca había visto el mar.", "De niño, nunca había visto el mar.", "De niña, nunca había visto el mar."]),
      wo("Esta semana he dormido muy poco porque he tenido exámenes.", "Pretérito perfecto (esta semana).", "This week I've slept very little because I've had exams."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-pronoun-gauntlet",
    "Desafío B1: pronombres de todo tipo",
    "Pronombres dobles, relativos y posesivos — el trío que más cuesta del B1.",
    "8 min",
    [
      sec(
        "Tres familias",
        "Dobles: me lo, te la, se los… Relativos: que, quien, el que, lo que, donde. Posesivos: el mío, la tuya, los suyos…",
        [
          ["¿Tu móvil? Se lo di a Marta, la que vive arriba.", "Your phone? I gave it to Marta, the one who lives upstairs."],
          ["El mío está roto.", "Mine is broken."],
        ],
        [
          fb("Completa.", "¿Las fotos? Ya ___ las mandé a tus padres.", "se", "Les + las → se las."),
        ]
      ),
    ],
    [
      fb("Completa con un relativo.", "Esta es la canción ___ más me gusta.", "que", "Que sin preposición."),
      fb("Completa con un relativo.", "No sé ___ quieres para tu cumpleaños.", "lo que", "Lo que = what."),
      fb("Completa con un posesivo.", "Mi coche es viejo; el ___ es nuevo, ¿verdad? (tú)", "tuyo", "El tuyo."),
      fb("Completa con dos pronombres.", "¿El secreto? No ___ lo cuentes a nadie. (tú)", "se", "A nadie → le → se lo."),
      ms(
        "¿Qué frases son correctas?",
        ["Te lo explico luego.", "La casa en la que nací ya no existe.", "Esas llaves son suyas.", "Me los prestó quien lo conocí."],
        [0, 1, 2],
        "La última no tiene sentido: «quien lo conocí»."
      ),
      mc(
        "«Give it (the book) to the woman who is at reception.» (tú)",
        ["Dáselo a la señora que está en recepción.", "Dálelo a la señora quien está en recepción.", "Dáselo a la señora lo que está en recepción.", "Se lo da a la señora que está en recepción."],
        0,
        "Mandato + se lo + relativa con que."
      ),
      wo("¿Es tuya esta chaqueta o es la de Pedro?", "Posesivo después de ser + la de + persona.", "Is this jacket yours or is it Pedro's?"),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-seville-1",
    "Desafío B1: una semana en Sevilla (1)",
    "Emma se muda a Sevilla para trabajar. Sigue sus primeros días: el piso, la oficina y los vecinos.",
    "8 min",
    [
      sec(
        "Lunes: el piso",
        "La casera le explica las normas con mandatos y subjuntivo.",
        [
          ["—Es importante que cierres bien la puerta. Y no dejes la basura en el rellano.", "It's important that you lock the door properly. And don't leave the trash on the landing."],
          ["—Si tienes cualquier problema, llámame.", "If you have any problem, call me."],
        ],
        [
          fb("Completa la norma.", "Te pido que no ___ ruido después de las once. (hacer)", "hagas", "Pedir que + subjuntivo."),
        ]
      ),
      sec(
        "Martes: la oficina",
        "Su jefe le presenta al equipo con relativas.",
        [
          ["—Esta es Carmen, la que lleva los clientes internacionales. Y ese es Luis, con quien vas a compartir despacho.", "This is Carmen, who handles international clients. And that's Luis, whom you'll share an office with."],
        ],
        [
          fb("Completa.", "El proyecto en el ___ trabajarás empieza la semana que viene.", "que", "En el que."),
        ]
      ),
      sec(
        "Miércoles: los vecinos",
        "Los vecinos la invitan a cenar.",
        [
          ["—¿Te gustaría cenar con nosotros el viernes? —¡Me encantaría!", "Would you like to have dinner with us on Friday? — I'd love to!"],
        ],
        [
          mc(
            "¿Por qué los vecinos dicen «¿te gustaría…?»?",
            ["Es una invitación cortés en condicional.", "Es un mandato.", "Es un pasado.", "Es un error."],
            0,
            "El condicional suaviza la invitación."
          ),
        ]
      ),
    ],
    [
      fb("Completa el diario de Emma.", "Hoy ___ a mis compañeros. Son muy simpáticos. (conocer, perfecto)", "he conocido", "Hoy → pretérito perfecto."),
      fb("Completa el diario de Emma.", "Nunca ___ en una ciudad tan bonita. (vivir, perfecto)", "había vivido", "Hasta ese momento (anterior) → pluscuamperfecto."),
      fb("Completa el diario de Emma.", "Ojalá que el calor no ___ tan fuerte en verano. (ser)", "sea", "Ojalá + subjuntivo."),
      mt(
        "Relaciona cada día con lo que pasó.",
        [
          ["el lunes", "La casera le explicó las normas."],
          ["el martes", "Conoció al equipo."],
          ["el miércoles", "Los vecinos la invitaron."],
        ],
        "Pretérito para los hechos de cada día."
      ),
      toEs("I'm glad that my neighbors are so friendly.", "Me alegro de que mis vecinos sean tan simpáticos.", "Alegrarse de que + subjuntivo.", ["Me alegra que mis vecinos sean tan simpáticos.", "Me alegro de que mis vecinos sean tan amables."]),
      wo("Luis me ha dicho que me enseñará la ciudad el sábado.", "Pretérito perfecto + futuro en estilo indirecto.", "Luis told me he'll show me the city on Saturday."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-seville-2",
    "Desafío B1: una semana en Sevilla (2)",
    "Termina la semana de Emma: la cena con los vecinos, una excursión y una llamada a casa.",
    "8 min",
    [
      sec(
        "Viernes: la cena",
        "En la cena, los vecinos le dan consejos.",
        [
          ["—Yo que tú, iría a la feria de abril. Es algo que tienes que ver.", "If I were you, I'd go to the April Fair. It's something you have to see."],
          ["—Y no te pierdas las tapas de la calle Feria.", "And don't miss the tapas on Feria Street."],
        ],
        [
          fb("Completa el consejo.", "Es mejor que ___ en bici; en coche es imposible aparcar. (moverse, tú)", "te muevas", "Es mejor que + subjuntivo reflexivo."),
        ]
      ),
      sec(
        "Sábado: la excursión",
        "Luis le enseña la ciudad.",
        [
          ["Visitamos la catedral, que fue construida sobre una antigua mezquita.", "We visited the cathedral, which was built on top of an old mosque."],
          ["Se dice que la Giralda es el símbolo de la ciudad.", "It's said that the Giralda is the city's symbol."],
        ],
        [
          fb("Completa.", "El Alcázar ___ usado como palacio por los reyes. (ser, pretérito)", "fue", "Pasiva con ser en pretérito."),
        ]
      ),
    ],
    [
      fb("Domingo: la llamada a casa.", "Mamá, no te ___; estoy muy bien. (preocupar, tú, negativo)", "preocupes", "No te preocupes."),
      fb("Domingo: la llamada a casa.", "Si vienes en mayo, te ___ la ciudad. (enseñar, yo, futuro)", "enseñaré", "Si + presente + futuro."),
      fb("Domingo: la llamada a casa.", "Quiero que ___ a mis vecinos; son encantadores. (conocer, tú)", "conozcas", "Querer que + subjuntivo."),
      mc(
        "«The cathedral, which I visited on Saturday, is enormous.»",
        ["La catedral, que visité el sábado, es enorme.", "La catedral, quien visité el sábado, es enorme.", "La catedral, lo que visité el sábado, es enorme.", "La catedral, donde visité el sábado, es enorme."],
        0,
        "Relativa explicativa con que."
      ),
      ms(
        "¿Qué frases de Emma son correctas?",
        ["Esta semana he aprendido muchísimo.", "Me encanta que la gente sea tan abierta.", "Se comen tapas en todas partes.", "Ojalá que me quedo aquí para siempre."],
        [0, 1, 2],
        "Ojalá + subjuntivo: me quede."
      ),
      toEs("I never imagined that I would like Seville so much.", "Nunca imaginé que me gustaría tanto Sevilla.", "Pretérito + condicional como «futuro del pasado».", ["Nunca me imaginé que me gustaría tanto Sevilla.", "Nunca pensé que me gustaría tanto Sevilla."]),
      wo("Ha sido la mejor semana de mi vida.", "Pretérito perfecto + superlativo.", "It's been the best week of my life."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-formal-complaint",
    "Desafío B1: escribe una reclamación",
    "Redacta un correo formal de queja a una aerolínea — hechos en pasado, emociones y exigencias en subjuntivo.",
    "8 min",
    [
      sec(
        "El modelo",
        "Una reclamación eficaz tiene tres partes: lo que pasó (pasados), cómo te afectó (emoción + subjuntivo), lo que pides (exigir/solicitar que + subjuntivo).",
        [
          ["Estimados señores: el pasado 3 de mayo viajé en el vuelo IB345.", "Dear Sirs: on May 3rd I traveled on flight IB345."],
          ["Cuando llegué a Madrid, mi maleta no había llegado.", "When I arrived in Madrid, my suitcase hadn't arrived."],
          ["Me parece inaceptable que nadie me haya dado una explicación.", "I find it unacceptable that nobody has given me an explanation."],
          ["Solicito que me devuelvan el dinero de los gastos.", "I request that you refund my expenses."],
        ],
        [
          ms(
            "¿Qué tiempos usa la carta?",
            ["pretérito", "pluscuamperfecto", "subjuntivo", "imperativo de tú"],
            [0, 1, 2],
            "Una carta formal no usa mandatos de tú."
          ),
        ]
      ),
      sec(
        "Tu reclamación",
        "Completa la reclamación de Tomás a un hotel: la habitación estaba sucia, el aire acondicionado no funcionaba y nadie lo arregló.",
        [
          ["Estimada directora:", "Dear Director,"],
        ],
        [
          fb("La reclamación de Tomás.", "Cuando ___ a la habitación, estaba sucia. (entrar, yo)", "entré", "Acción puntual → pretérito."),
        ]
      ),
    ],
    [
      fb("La reclamación de Tomás.", "El aire acondicionado no ___ en toda la semana. (funcionar)", "funcionó", "Periodo cerrado → pretérito (también: no funcionaba, como descripción)."),
      fb("La reclamación de Tomás.", "Me molesta que nadie lo ___ arreglado. (haber)", "haya", "Molestar que + perfecto de subjuntivo."),
      fb("La reclamación de Tomás.", "Les pido que me ___ una parte del importe. (reembolsar)", "reembolsen", "Pedir que + subjuntivo."),
      mc(
        "¿Qué despedida es la adecuada?",
        ["A la espera de su respuesta, les saluda atentamente,", "¡Un besito y hasta luego!", "Chao, pescado.", "Bueno, pues nada."],
        0,
        "Fórmula formal estándar."
      ),
      mc(
        "¿Qué frase es demasiado informal para la carta?",
        ["¡Oye, arreglad esto ya!", "Les ruego que revisen mi caso.", "Espero que tomen medidas.", "Agradezco de antemano su atención."],
        0,
        "Un mandato de vosotros con «oye» no encaja en una carta formal."
      ),
      toEs("I hope you (ustedes) answer me soon.", "Espero que me respondan pronto.", "Esperar que + subjuntivo.", ["Espero que me contesten pronto.", "Espero que me respondan pronto, gracias."]),
      wo("Espero que este problema no vuelva a repetirse.", "Esperar que + subjuntivo.", "I hope this problem doesn't happen again."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-city-or-country",
    "Desafío B1: debate — ¿ciudad o campo?",
    "Argumenta a favor y en contra: opiniones, dudas, condiciones e hipótesis en un solo debate.",
    "8 min",
    [
      sec(
        "Los argumentos",
        "Un buen debate combina opinión (creo que + indicativo), duda (no creo que + subjuntivo), hipótesis (yo en tu lugar, viviría…) y condiciones reales (si vives en el campo, tendrás…).",
        [
          ["Creo que la vida en el campo es más sana.", "I think life in the country is healthier."],
          ["No creo que sea tan fácil encontrar trabajo allí.", "I don't think it's that easy to find work there."],
          ["Si vives en la ciudad, tienes más oportunidades.", "If you live in the city, you have more opportunities."],
        ],
        [
          fb("Argumenta.", "Es verdad que en la ciudad ___ más contaminación. (haber)", "hay", "Certeza → indicativo."),
        ]
      ),
    ],
    [
      fb("Argumenta.", "Dudo que en el campo ___ buenos hospitales. (haber)", "haya", "Duda → subjuntivo."),
      fb("Argumenta.", "Si te mudas al campo, ___ menos estrés. (tener, futuro)", "tendrás", "Si + presente + futuro."),
      fb("Argumenta.", "Es fundamental que los pueblos ___ internet rápido. (tener)", "tengan", "Necesidad → subjuntivo."),
      mt(
        "Relaciona cada argumento con su postura.",
        [
          ["En el campo se respira aire puro.", "a favor del campo"],
          ["En la ciudad hay más vida cultural.", "a favor de la ciudad"],
          ["Me preocupa que los pueblos se queden vacíos.", "preocupación por el campo"],
          ["El transporte público es mejor en la ciudad.", "ventaja de la ciudad"],
        ],
        "Argumentos típicos del debate."
      ),
      ms(
        "¿Qué argumentos están bien construidos?",
        ["Me parece que el campo es aburrido.", "No me parece que el campo sea aburrido.", "Opino que la ciudad sea mejor.", "Es posible que me mude pronto."],
        [0, 1, 3],
        "Opinar afirmativo → indicativo: opino que la ciudad es mejor."
      ),
      toEs("In my opinion, the ideal would be to live in a small town near a city.", "En mi opinión, lo ideal sería vivir en un pueblo pequeño cerca de una ciudad.", "Lo ideal + condicional.", ["Para mí, lo ideal sería vivir en un pueblo pequeño cerca de una ciudad.", "En mi opinión, lo ideal sería vivir en un pueblo cerca de una ciudad."]),
      wo("Aunque me encanta la ciudad, necesito escaparme al campo.", "Aunque + indicativo (hecho real).", "Although I love the city, I need to escape to the country."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-exit-ticket",
    "Billete de salida del B1: ¿listo para el B2?",
    "La última lección del B1: diez destrezas que el B2 da por sabidas, una pregunta cada una, sin pistas.",
    "9 min",
    [
      sec(
        "Las diez destrezas",
        "(1) formación del subjuntivo (2) deseo/duda/emoción (3) expresiones impersonales y ojalá (4) mandatos (5) condicional (6) si + presente (7) perfecto (8) pluscuamperfecto (9) relativos (10) se, pronombres dobles y posesivos.",
        [
          ["¡A por el B2!", "On to B2!"],
        ],
        [
          fb("Destreza 1: formación.", "que nosotros ___ (dormir)", "durmamos", "-IR o→u en nosotros."),
          fb("Destreza 2: deseo/duda/emoción.", "Me alegra que ___ aquí. (estar, vosotros)", "estéis", "Emoción → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Destreza 3: ojalá.", "Ojalá que ___ suerte en la entrevista. (tener, tú)", "tengas", "Ojalá + subjuntivo."),
      fb("Destreza 4: mandatos.", "No ___ lo digas a nadie.", "se", "No se lo digas."),
      fb("Destreza 5: condicional.", "¿___ abrir la ventana, por favor? (poder, usted)", "Podría", "Cortesía."),
      fb("Destreza 6: si.", "Si ___ tiempo, pasaré por tu casa. (tener, yo)", "tengo", "Si + presente."),
      fb("Destreza 7: perfecto.", "Todavía no he ___ el correo. (abrir)", "abierto", "Participio irregular."),
      fb("Destreza 8: pluscuamperfecto.", "Cuando llegué, ya se ___ ido. (haber, ellos)", "habían", "Habían + participio."),
      fb("Destreza 9: relativos.", "Esa es la razón por la ___ me fui.", "que", "Por la que."),
      mc(
        "Destreza 10: se. «___ alquilan apartamentos.»",
        ["Se", "Le", "Lo", "Les"],
        0,
        "Se pasivo."
      ),
    ]
  ),
  // ---- Themed spiral reviews between the reading stories (lessons 69+). ----
  // Each one takes the theme of the story it follows and drills mixed B1
  // grammar through it -- it never depends on the story's plot details.
  L(
    "el-sendero-perdido",
    "b1r-tema-montana",
    "Repaso temático: perdidos en la montaña",
    "Excursiones, mapas y decisiones difíciles — subjuntivo, mandatos y pasados en un contexto de montaña.",
    "7 min",
    [
      sec(
        "Antes de la excursión",
        "Los consejos para ir a la montaña mezclan mandatos, necesidad y condiciones.",
        [
          ["Lleva siempre agua y un mapa.", "Always carry water and a map."],
          ["Es importante que no salgas del sendero marcado.", "It's important that you don't leave the marked trail."],
          ["Si se hace de noche, no sigas caminando.", "If it gets dark, don't keep walking."],
        ],
        [
          fb("Completa el consejo.", "Es mejor que ___ a alguien adónde vas. (avisar, tú)", "avises", "Es mejor que + subjuntivo."),
          fb("Completa el consejo.", "___ calzado cómodo y resistente. (ponerse, tú)", "Ponte", "Mandato de tú: ponte."),
        ]
      ),
    ],
    [
      fb("Completa la historia.", "Cuando nos dimos cuenta, ya ___ el camino. (perder, nosotros, pluscuamperfecto)", "habíamos perdido", "Anterior a darse cuenta."),
      fb("Completa la historia.", "Mientras ___ el mapa, empezó a llover. (mirar, nosotros)", "mirábamos", "Acción en curso → imperfecto."),
      mc(
        "«If we don't find the trail, we'll call the rescue team.»",
        ["Si no encontramos el sendero, llamaremos a los rescatistas.", "Si no encontraremos el sendero, llamamos a los rescatistas.", "Si no encontremos el sendero, llamaremos a los rescatistas.", "Si no encontrábamos el sendero, llamaremos a los rescatistas."],
        0,
        "Si + presente, futuro."
      ),
      ms(
        "¿Qué consejos son correctos?",
        ["No bebas agua de los ríos.", "Ojalá que no llueva.", "Es necesario que llevas linterna.", "Yo que tú, volvería."],
        [0, 1, 3],
        "Es necesario que + subjuntivo: lleves."
      ),
      toEs("I've never been so scared in my life.", "Nunca he tenido tanto miedo en mi vida.", "Pretérito perfecto + tanto miedo.", ["Nunca en mi vida he tenido tanto miedo.", "Nunca había tenido tanto miedo en mi vida."]),
      wo("El guardabosques nos aconsejó seguir el río hasta el pueblo.", "Aconsejar + infinitivo.", "The ranger advised us to follow the river to the village."),
    ]
  ),
  L(
    "primer-concierto",
    "b1r-tema-miedo-escenico",
    "Repaso temático: el miedo escénico",
    "Nervios, ánimos y actuaciones — reacciones emocionales, consejos y experiencias.",
    "7 min",
    [
      sec(
        "Los nervios",
        "Para hablar del miedo escénico se usan verbos de emoción (con subjuntivo si cambia el sujeto) y consejos.",
        [
          ["Me da miedo que el público se ría de mí.", "I'm scared the audience will laugh at me."],
          ["Respira hondo y no mires al público al principio.", "Breathe deeply and don't look at the audience at first."],
        ],
        [
          fb("Completa.", "Me pone nervioso que mis amigos me ___ tocar. (ver)", "vean", "Poner nervioso que + subjuntivo."),
          fb("Completa el consejo.", "No ___ en los errores; sigue tocando. (pensar, tú)", "pienses", "Negativo de tú: no pienses."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿Alguna vez ___ en un escenario? (actuar, tú)", "has actuado", "Experiencia → pretérito perfecto."),
      fb("Completa.", "Antes del concierto, nunca ___ delante de tanta gente. (tocar, yo)", "había tocado", "Anterior → pluscuamperfecto."),
      mc(
        "«I hope everything goes well for you!»",
        ["¡Ojalá que te salga todo bien!", "¡Ojalá que te sale todo bien!", "¡Ojalá te saldrá todo bien!", "¡Ojalá salirte todo bien!"],
        0,
        "Ojalá + subjuntivo: salga."
      ),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["¡Mucha mierda!", "Break a leg! (teatro)"],
          ["Me quedé en blanco.", "My mind went blank."],
          ["Me temblaban las manos.", "My hands were shaking."],
          ["¡Lo has bordado!", "You nailed it!"],
        ],
        "Expresiones típicas del mundo del espectáculo."
      ),
      toEs("If you practice a lot, you'll be less nervous.", "Si practicas mucho, estarás menos nervioso.", "Si + presente + futuro.", ["Si practicas mucho, estarás menos nerviosa.", "Si ensayas mucho, estarás menos nervioso."]),
      wo("Cuando terminé la canción, todo el mundo aplaudió.", "Dos acciones puntuales en pretérito.", "When I finished the song, everyone applauded."),
    ]
  ),
  L(
    "el-concurso-de-cocina",
    "b1r-tema-competicion",
    "Repaso temático: la competición",
    "Concursos, jueces y resultados — el condicional, la pasiva y las expresiones de opinión.",
    "7 min",
    [
      sec(
        "En el concurso",
        "Los jueces opinan con creer que / no creer que, y los resultados se anuncian con la pasiva.",
        [
          ["Creo que tu plato tiene mucha personalidad.", "I think your dish has a lot of personality."],
          ["No creo que el postre esté terminado.", "I don't think the dessert is finished."],
          ["El premio fue concedido a la concursante más joven.", "The prize was awarded to the youngest contestant."],
        ],
        [
          fb("Opina como un juez.", "No me parece que la salsa ___ suficiente sal. (tener)", "tenga", "No parecer que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Los ganadores ___ anunciados al final del programa. (ser, futuro)", "serán", "Pasiva con ser en futuro."),
      fb("Completa.", "Yo en tu lugar ___ menos picante. (poner)", "pondría", "Consejo → condicional."),
      fb("Completa.", "Es increíble que ___ en solo treinta minutos. (cocinarlo, tú)", "lo cocines", "Es increíble que + subjuntivo, pronombre delante."),
      mc(
        "«The contestant who won is only sixteen.»",
        ["La concursante que ganó tiene solo dieciséis años.", "La concursante quien ganó tiene solo dieciséis años.", "La concursante lo que ganó tiene solo dieciséis años.", "La concursante que ganó es solo dieciséis años."],
        0,
        "Relativo que; edad con tener."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me sorprende que no hayas ganado.", "Se eligió al mejor plato.", "Ojalá gano el año que viene.", "Estoy seguro de que ganarás."],
        [0, 1, 3],
        "Ojalá + subjuntivo: gane."
      ),
      toEs("I want you (tú) to taste my recipe.", "Quiero que pruebes mi receta.", "Querer que + subjuntivo: pruebes (probar, o→ue).", ["Quiero que tú pruebes mi receta.", "Quiero que pruebes mi plato."]),
      wo("Lo que más valoraron los jueces fue la originalidad.", "Lo que + pretérito.", "What the judges valued most was originality."),
    ]
  ),
  L(
    "la-estudiante-de-intercambio",
    "b1r-tema-choque-cultural",
    "Repaso temático: el choque cultural",
    "Costumbres nuevas, familias de acogida y malentendidos — con el se impersonal y la emoción.",
    "7 min",
    [
      sec(
        "Costumbres diferentes",
        "Para describir costumbres se usa el se impersonal; para reaccionar, verbos de emoción + subjuntivo.",
        [
          ["En Argentina se saluda con un beso.", "In Argentina people greet each other with a kiss."],
          ["Me sorprende que la gente cene tan tarde.", "It surprises me that people eat dinner so late."],
        ],
        [
          fb("Describe la costumbre.", "En España se ___ la siesta en verano. (dormir)", "duerme", "Se impersonal/pasivo singular."),
          fb("Reacciona.", "Me extraña que todo el mundo ___ tan alto. (hablar)", "hable", "Extrañar que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Al principio, no ___ las bromas de mi familia de acogida. (entender, yo)", "entendía", "Situación continuada en el pasado → imperfecto."),
      fb("Completa.", "Ahora ya ___ a sus costumbres. (acostumbrarse, yo, perfecto)", "me he acostumbrado", "Resultado presente → pretérito perfecto."),
      mt(
        "Relaciona cada costumbre con el país donde es típica.",
        [
          ["tomar mate", "Argentina"],
          ["comer las doce uvas", "España"],
          ["celebrar el Día de Muertos", "México"],
          ["bailar cumbia en las fiestas", "Colombia"],
        ],
        "Costumbres del mundo hispano."
      ),
      mc(
        "«It's normal for you to miss your family.»",
        ["Es normal que eches de menos a tu familia.", "Es normal que echas de menos a tu familia.", "Es normal de que eches de menos a tu familia.", "Es normal echar de menos a tu familia ayer."],
        0,
        "Es normal que + subjuntivo."
      ),
      toEs("They told me that it's rude to arrive on time to a party.", "Me dijeron que es de mala educación llegar puntual a una fiesta.", "Decir que + indicativo (información).", ["Me dijeron que es de mala educación llegar a tiempo a una fiesta.", "Me dijeron que es maleducado llegar puntual a una fiesta."]),
      wo("Lo que más me costó fue acostumbrarme a los horarios.", "Lo que + costar + infinitivo reflexivo.", "What was hardest for me was getting used to the schedules."),
    ]
  ),
  L(
    "el-negocio-de-paseos",
    "b1r-tema-primer-negocio",
    "Repaso temático: mi primer negocio",
    "Clientes, precios y responsabilidades — el condicional, el si y los pronombres dobles.",
    "7 min",
    [
      sec(
        "Montar un negocio",
        "Los planes de negocio combinan condiciones reales (si + presente) e hipótesis (condicional).",
        [
          ["Si consigo diez clientes, ganaré lo suficiente.", "If I get ten clients, I'll earn enough."],
          ["Yo cobraría un poco más por los fines de semana.", "I'd charge a bit more for weekends."],
        ],
        [
          fb("Completa el plan.", "Si los clientes están contentos, se lo ___ a sus amigos. (recomendar, futuro)", "recomendarán", "Si + presente + futuro."),
          fb("Completa el consejo.", "Yo en tu lugar ___ publicidad en el barrio. (hacer)", "haría", "Consejo hipotético → condicional."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿El dinero? El cliente ya ___ lo ha pagado. (a mí)", "me", "Me lo ha pagado."),
      fb("Completa.", "Es necesario que ___ puntual con los clientes. (ser, tú)", "seas", "Es necesario que + subjuntivo."),
      mc(
        "«I've earned more money this month than last month.»",
        ["Este mes he ganado más dinero que el mes pasado.", "Este mes gané más dinero de el mes pasado.", "Este mes había ganado más dinero que el mes pasado.", "Este mes he ganado más dinero como el mes pasado."],
        0,
        "Este mes → perfecto; más … que."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se buscan clientes responsables.", "Te lo cobro mañana.", "Ojalá que el negocio funcione.", "Si tendré más tiempo, crecerá."],
        [0, 1, 2],
        "Si + presente: si tengo más tiempo."
      ),
      toEs("Don't worry (tú), I'll return it to you tomorrow.", "No te preocupes, te lo devuelvo mañana.", "Mandato negativo + te lo.", ["No te preocupes, te lo devolveré mañana.", "Tranquilo, te lo devuelvo mañana."]),
      wo("Nunca pensé que sería tan difícil tener un negocio.", "Pretérito + condicional como futuro del pasado.", "I never thought having a business would be so hard."),
    ]
  ),
  L(
    "el-primer-campamento",
    "b1r-tema-sin-tecnologia",
    "Repaso temático: la vida sin tecnología",
    "Acampar sin móvil, sin wifi y sin enchufes — hipótesis, quejas y descubrimientos.",
    "7 min",
    [
      sec(
        "Sin pantallas",
        "Quejarse y reaccionar: me molesta que, no soporto que, echo de menos. Imaginar: ¿qué harías sin móvil?",
        [
          ["No soporto que no haya cobertura.", "I can't stand that there's no signal."],
          ["Sin móvil, leería más y hablaría más con mi familia.", "Without a phone, I'd read more and talk more with my family."],
        ],
        [
          fb("Quéjate.", "Me molesta que no ___ enchufes. (haber)", "haya", "Molestar que + subjuntivo."),
          fb("Imagina.", "Sin internet, yo ___ más tiempo al aire libre. (pasar)", "pasaría", "Hipótesis → condicional."),
        ]
      ),
    ],
    [
      fb("Completa.", "El primer día ___ muy aburridos. (estar, nosotros)", "estábamos", "Estado en el pasado → imperfecto."),
      fb("Completa.", "Al final, ___ que no necesitábamos tanto. (descubrir, nosotros)", "descubrimos", "Descubrimiento puntual → pretérito."),
      fb("Completa.", "Nunca ___ tantas estrellas. (ver, yo, pluscuamperfecto)", "había visto", "Hasta ese momento → pluscuamperfecto."),
      mt(
        "Relaciona cada objeto con su uso en el campamento.",
        [
          ["la linterna", "para ver de noche"],
          ["el saco de dormir", "para dormir"],
          ["la brújula", "para orientarse"],
          ["la hoguera", "para calentarse y cocinar"],
        ],
        "Vocabulario de acampada con para + infinitivo."
      ),
      toEs("I hope we do it again next year.", "Ojalá que lo repitamos el año que viene.", "Ojalá + subjuntivo.", ["Espero que lo repitamos el año que viene.", "Ojalá lo repitamos el año que viene.", "Ojalá que lo volvamos a hacer el año que viene."]),
      wo("Fue el fin de semana más tranquilo que habíamos tenido en años.", "Superlativo + relativa en pluscuamperfecto.", "It was the most peaceful weekend we'd had in years."),
    ]
  ),
  L(
    "la-escritora-persistente",
    "b1r-tema-rechazo",
    "Repaso temático: aprender del rechazo",
    "Rechazos, segundas oportunidades y perseverancia — dar ánimos con el subjuntivo y el condicional.",
    "7 min",
    [
      sec(
        "Dar ánimos",
        "Frases para animar: no te rindas, es normal que, estoy seguro de que, yo que tú.",
        [
          ["No te rindas; es normal que te rechacen al principio.", "Don't give up; it's normal for them to reject you at first."],
          ["Estoy seguro de que la próxima vez lo conseguirás.", "I'm sure you'll make it next time."],
        ],
        [
          fb("Anima a tu amiga.", "No ___ el primer rechazo como algo personal. (tomarse, tú)", "te tomes", "Negativo de tú reflexivo."),
          fb("Anima a tu amiga.", "Estoy convencido de que ___ talento. (tener, tú)", "tienes", "Certeza → indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me han ___ tres veces, pero sigo escribiendo. (rechazar)", "rechazado", "Pretérito perfecto."),
      fb("Completa.", "Yo que tú, lo ___ a otra revista. (enviar)", "enviaría", "Yo que tú + condicional."),
      mc(
        "«It's a shame they didn't publish your story.»",
        ["Es una pena que no hayan publicado tu cuento.", "Es una pena que no han publicado tu cuento.", "Es una pena que no publicarán tu cuento.", "Es una pena de que no publicaron tu cuento."],
        0,
        "Es una pena que + perfecto de subjuntivo."
      ),
      ms(
        "¿Qué frases animan correctamente?",
        ["¡Sigue intentándolo!", "Ojalá que la próxima vez tengas suerte.", "No te preocupas.", "Estoy segura de que lo lograrás."],
        [0, 1, 3],
        "Negativo → subjuntivo: no te preocupes."
      ),
      toEs("Many famous writers were rejected before they succeeded.", "Muchos escritores famosos fueron rechazados antes de tener éxito.", "Pasiva con ser + antes de + infinitivo.", ["Muchos escritores famosos fueron rechazados antes de triunfar."]),
      wo("Lo importante es que nunca dejes de escribir.", "Lo importante es que + subjuntivo.", "The important thing is that you never stop writing."),
    ]
  ),
  L(
    "el-refugio-de-animales",
    "b1r-tema-voluntariado-animales",
    "Repaso temático: el refugio de animales",
    "Adoptar, cuidar y ayudar — relativas, mandatos y la voz pasiva en un refugio.",
    "7 min",
    [
      sec(
        "En el refugio",
        "Describe a los animales con relativas y da instrucciones a los voluntarios con mandatos.",
        [
          ["Buscamos a alguien que pueda pasear a los perros.", "We're looking for someone who can walk the dogs."],
          ["Este es el perro que fue abandonado en la carretera.", "This is the dog that was abandoned on the road."],
          ["Acércate despacio y no le grites.", "Approach slowly and don't shout at him."],
        ],
        [
          fb("Completa la instrucción.", "___ agua limpia a los gatos cada mañana. (poner, tú)", "Pon", "Mandato irregular de tú."),
          fb("Completa.", "La perra ___ encontrada por unos niños. (ser, pretérito)", "fue", "Pasiva con ser."),
        ]
      ),
    ],
    [
      fb("Completa con un relativo.", "El gato ___ adoptamos se llama Mishi.", "que", "Que sin preposición."),
      fb("Completa.", "Es importante que los perros ___ ejercicio todos los días. (hacer)", "hagan", "Es importante que + subjuntivo."),
      fb("Completa.", "¿La correa? ___ a la voluntaria nueva. (dar, tú + se + la)", "Dásela", "Da + se + la → dásela (con tilde)."),
      mc(
        "«Adopt, don't buy.» (ustedes)",
        ["Adopten, no compren.", "Adoptan, no compran.", "Adoptad, no compren.", "Adopten, no compran."],
        0,
        "Mandatos de ustedes = subjuntivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se buscan familias de acogida.", "El perro que adopté es muy cariñoso.", "Ojalá que todos encuentren un hogar.", "Los gatos fueron vacunado ayer."],
        [0, 1, 2],
        "Concordancia: fueron vacunados."
      ),
      toEs("Since I adopted him, my dog has changed a lot.", "Desde que lo adopté, mi perro ha cambiado mucho.", "Desde que + pretérito + perfecto.", ["Desde que lo adopté, mi perro cambió mucho."]),
      wo("Nunca había visto un perro tan asustado como aquel.", "Pluscuamperfecto + tan … como.", "I had never seen a dog as frightened as that one."),
    ]
  ),
  L(
    "las-clases-de-conducir",
    "b1r-tema-conducir",
    "Repaso temático: aprender a conducir",
    "Instrucciones, nervios y el examen práctico — mandatos, si y reacciones emocionales.",
    "7 min",
    [
      sec(
        "En el coche",
        "Un instructor usa mandatos cortos; un padre nervioso, muchos más.",
        [
          ["Mira por el retrovisor antes de girar.", "Check the mirror before turning."],
          ["¡No frenes tan fuerte!", "Don't brake so hard!"],
          ["Si ves un peatón, para.", "If you see a pedestrian, stop."],
        ],
        [
          fb("Da la instrucción.", "___ el cinturón antes de arrancar. (ponerse, tú)", "Ponte", "Mandato reflexivo irregular."),
          fb("Da la instrucción.", "No ___ el móvil mientras conduces. (usar, tú)", "uses", "Negativo → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ el examen, te regalaré el coche viejo. (aprobar, tú)", "apruebas", "Si + presente."),
      fb("Completa.", "Me pone nerviosa que mi padre me ___ todo el rato. (corregir)", "corrija", "Corregir → corrija."),
      fb("Completa.", "Cuando por fin ___ el carné, lo celebramos. (sacarse, yo, pretérito)", "me saqué", "Sacarse el carné; c → qu."),
      mt(
        "Relaciona cada señal con su significado.",
        [
          ["Ceda el paso", "Yield"],
          ["Prohibido aparcar", "No parking"],
          ["Dirección prohibida", "Do not enter"],
          ["Obras", "Road work"],
        ],
        "Señales de tráfico en español."
      ),
      toEs("I'd drive more slowly if I were you.", "Yo que tú, conduciría más despacio.", "Yo que tú + condicional.", ["Yo en tu lugar, conduciría más despacio.", "Yo que tú, manejaría más despacio."]),
      wo("Nunca había conducido de noche hasta aquel día.", "Pluscuamperfecto con hasta aquel día.", "I had never driven at night until that day."),
    ]
  ),
  L(
    "el-teatro-comunitario",
    "b1r-tema-teatro",
    "Repaso temático: salvar la obra de teatro",
    "Un imprevisto antes del estreno — soluciones en condicional, peticiones y el se.",
    "7 min",
    [
      sec(
        "El imprevisto",
        "Cuando algo sale mal, se proponen soluciones con el condicional y se piden favores con cortesía.",
        [
          ["¿Podrías aprenderte el papel en tres días?", "Could you learn the part in three days?"],
          ["Se necesita un actor urgentemente.", "An actor is urgently needed."],
          ["Sería mejor cancelar la función.", "It would be better to cancel the show."],
        ],
        [
          fb("Propón una solución.", "Yo ___ el estreno una semana. (retrasar)", "retrasaría", "Propuesta → condicional."),
          fb("Pide un favor.", "¿Te ___ ayudarnos con los decorados? (importar)", "importaría", "¿Te importaría + infinitivo?"),
        ]
      ),
    ],
    [
      fb("Completa.", "Es increíble que ___ el papel en tan poco tiempo. (aprenderse, ella)", "se aprenda", "Es increíble que + subjuntivo reflexivo."),
      fb("Completa.", "Las entradas ___ vendidas en dos días. (ser, pretérito)", "fueron", "Pasiva con ser."),
      mc(
        "«The actor who dropped out broke his leg.»",
        ["El actor que abandonó se rompió la pierna.", "El actor quien abandonó se rompió su pierna.", "El actor lo que abandonó se rompió la pierna.", "El actor que abandonó rompió su la pierna."],
        0,
        "Relativo que; artículo con partes del cuerpo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["¡Que salga todo bien!", "Se ensayó hasta medianoche.", "No creo que estemos listos.", "Ojalá el público nos aplaude."],
        [0, 1, 2],
        "Ojalá + subjuntivo: aplauda."
      ),
      toEs("When the curtain went up, the audience had already filled the theater.", "Cuando se levantó el telón, el público ya había llenado el teatro.", "Pretérito + pluscuamperfecto.", ["Cuando subió el telón, el público ya había llenado el teatro."]),
      wo("Al final, la función fue un éxito que nadie esperaba.", "Pretérito + relativa en imperfecto.", "In the end, the show was a success nobody expected."),
    ]
  ),
  L(
    "el-trabajo-en-equipo",
    "b1r-tema-trabajo-en-grupo",
    "Repaso temático: el trabajo en grupo",
    "Repartir tareas, quejarse con tacto y llegar a acuerdos — subjuntivo, mandatos de nosotros y condicional.",
    "7 min",
    [
      sec(
        "Organizar el grupo",
        "Para proponer algo al grupo: mandato de nosotros (hagamos, repartamos) o vamos a + infinitivo.",
        [
          ["Repartamos el trabajo de forma justa.", "Let's divide up the work fairly."],
          ["Propongo que cada uno haga una parte.", "I propose that each person do one part."],
        ],
        [
          fb("Propón al grupo.", "___ una reunión el lunes. (hacer, nosotros)", "Hagamos", "Mandato de nosotros = subjuntivo."),
          fb("Propón al grupo.", "Sugiero que ___ un calendario. (crear, nosotros)", "creemos", "Sugerir que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Quéjate con tacto.", "Me molesta un poco que no ___ a las reuniones. (venir, tú)", "vengas", "Molestar que + subjuntivo."),
      fb("Completa.", "¿Podrías encargar___ de la presentación? (te)", "te", "Encargarse → ¿podrías encargarte?"),
      fb("Completa.", "Hasta ahora, solo Ana ___ su parte. (terminar, perfecto)", "ha terminado", "Hasta ahora → perfecto."),
      mc(
        "«Let's not argue.»",
        ["No discutamos.", "No discutimos.", "No discutáis.", "No discutir nosotros."],
        0,
        "Nosotros negativo = subjuntivo."
      ),
      ms(
        "¿Qué frases son buenas para llegar a un acuerdo?",
        ["¿Qué os parece si dividimos las tareas?", "Yo haría la introducción, si os parece bien.", "Es mejor que todos participemos.", "Haz tú todo."],
        [0, 1, 2],
        "La última es un mandato poco colaborativo."
      ),
      toEs("It's fair that everyone works the same.", "Es justo que todos trabajen lo mismo.", "Es justo que + subjuntivo.", ["Es justo que todo el mundo trabaje lo mismo.", "Es justo que todos trabajemos lo mismo."]),
      wo("Al final entregamos el proyecto que habíamos preparado juntos.", "Pretérito + relativa en pluscuamperfecto.", "In the end we handed in the project we had prepared together."),
    ]
  ),
  L(
    "la-reunion-familiar",
    "b1r-tema-reunion-familiar",
    "Repaso temático: la reunión familiar",
    "Reencuentros, viejos conflictos y reconciliaciones — pasados, emociones y deseos.",
    "7 min",
    [
      sec(
        "Después de muchos años",
        "Hablar de un reencuentro mezcla lo que había pasado, lo que ha cambiado y lo que deseas.",
        [
          ["Hacía diez años que no veía a mi hermano.", "I hadn't seen my brother in ten years."],
          ["Me alegro de que por fin estemos todos juntos.", "I'm glad we're finally all together."],
        ],
        [
          fb("Completa.", "Mis primos ___ mucho desde la última vez. (cambiar, perfecto)", "han cambiado", "Resultado hasta hoy → perfecto."),
          fb("Completa.", "Ojalá que ___ más a menudo. (verse, nosotros)", "nos veamos", "Ojalá + subjuntivo reflexivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando llegué, mi abuela ya ___ la comida. (preparar, pluscuamperfecto)", "había preparado", "Anterior → pluscuamperfecto."),
      fb("Completa.", "De niños, mi hermano y yo ___ mucho. (pelearse)", "nos peleábamos", "Hábito pasado → imperfecto."),
      fb("Completa.", "Siento que no ___ hablado antes. (haber, nosotros)", "hayamos", "Sentir que + perfecto de subjuntivo."),
      mt(
        "Relaciona cada familiar con su definición.",
        [
          ["mi cuñado", "el marido de mi hermana"],
          ["mi suegra", "la madre de mi pareja"],
          ["mi sobrina", "la hija de mi hermano"],
          ["mi bisabuelo", "el padre de mi abuelo"],
        ],
        "Vocabulario de la familia extendida."
      ),
      toEs("I hope you (vosotros) stay a few more days.", "Espero que os quedéis unos días más.", "Esperar que + subjuntivo de vosotros.", ["Ojalá que os quedéis unos días más.", "Espero que se queden unos días más."]),
      wo("Nos abrazamos y nos prometimos no esperar tanto otra vez.", "Pretérito recíproco (nos abrazamos, nos prometimos) + infinitivo.", "We hugged and promised each other not to wait so long again."),
    ]
  ),
  L(
    "el-periodico-escolar",
    "b1r-tema-rumores",
    "Repaso temático: rumores y verdades",
    "Periodismo escolar: distinguir lo que es cierto de lo que se dice — se dice que, es verdad que, dudo que.",
    "7 min",
    [
      sec(
        "Rumor o noticia",
        "Se dice que + indicativo informa de un rumor. Para cuestionarlo: no es cierto que, dudo que (subjuntivo).",
        [
          ["Se dice que van a cerrar la cafetería.", "They say they're going to close the cafeteria."],
          ["Dudo que la cierren; es muy popular.", "I doubt they'll close it; it's very popular."],
        ],
        [
          fb("Cuestiona el rumor.", "No es verdad que el director ___ a dimitir. (ir)", "vaya", "Negar una certeza → subjuntivo."),
          fb("Confirma el hecho.", "Es verdad que ___ una nueva profesora. (llegar, futuro)", "llegará", "Certeza → indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Según las fuentes, el rumor ___ en las redes sociales. (empezar, pretérito)", "empezó", "Hecho puntual → pretérito."),
      fb("Completa.", "El artículo ___ publicado el lunes. (ser, futuro)", "será", "Pasiva con ser."),
      fb("Completa.", "Es importante que los periodistas ___ la información. (comprobar)", "comprueben", "Comprobar → comprueben."),
      mc(
        "«Someone had invented the whole story.»",
        ["Alguien se había inventado toda la historia.", "Alguien se ha inventado toda la historia ayer.", "Alguien inventaba toda la historia una vez.", "Alguien se había inventando toda la historia."],
        0,
        "Pluscuamperfecto reflexivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se rumorea que habrá examen sorpresa.", "Dudo que sea cierto.", "Creo que sea mentira.", "No creo que sea mentira."],
        [0, 1, 3],
        "Creer afirmativo → indicativo: creo que es mentira."
      ),
      toEs("What they told me wasn't true.", "Lo que me contaron no era verdad.", "Lo que + pretérito + imperfecto.", ["Lo que me dijeron no era verdad.", "Lo que me contaron no era cierto."]),
      wo("El periodista que descubrió la verdad es de mi clase.", "Relativa con que.", "The journalist who discovered the truth is in my class."),
    ]
  ),
  L(
    "el-jardin-comunitario",
    "b1r-tema-activismo-vecinal",
    "Repaso temático: salvar el barrio",
    "Recogida de firmas, protestas y propuestas — expresiones impersonales, pasiva y mandatos de ustedes.",
    "7 min",
    [
      sec(
        "La campaña",
        "Una campaña vecinal combina hechos, exigencias y llamamientos.",
        [
          ["Es inaceptable que quieran destruir el jardín.", "It's unacceptable that they want to destroy the garden."],
          ["Firmen la petición y compártanla.", "Sign the petition and share it."],
          ["Ya se han recogido más de mil firmas.", "More than a thousand signatures have already been collected."],
        ],
        [
          fb("Completa el cartel.", "¡___ a la reunión del jueves! (venir, ustedes)", "Vengan", "Mandato de ustedes."),
          fb("Completa el cartel.", "Es urgente que el ayuntamiento nos ___. (escuchar)", "escuche", "Es urgente que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "El jardín ___ creado por los vecinos hace veinte años. (ser, pretérito)", "fue", "Pasiva con ser."),
      fb("Completa.", "Si no hacemos nada, lo ___ en un aparcamiento. (convertir, ellos, futuro)", "convertirán", "Si + presente + futuro."),
      fb("Completa.", "Exigimos que ___ el proyecto. (paralizar, ustedes)", "paralicen", "Exigir que + subjuntivo; z → c."),
      mt(
        "Relaciona cada acción con su propósito.",
        [
          ["recoger firmas", "demostrar el apoyo vecinal"],
          ["hablar con la prensa", "dar visibilidad"],
          ["organizar una fiesta en el jardín", "atraer a más gente"],
          ["pedir una reunión", "negociar con el ayuntamiento"],
        ],
        "Acciones típicas de una campaña."
      ),
      toEs("It's important that everyone participates.", "Es importante que todo el mundo participe.", "Todo el mundo = singular.", ["Es importante que todos participen.", "Es importante que participe todo el mundo."]),
      wo("Gracias a la campaña, el jardín no será destruido.", "Pasiva con ser en futuro.", "Thanks to the campaign, the garden won't be destroyed."),
    ]
  ),
  L(
    "factura-que-nunca-llega",
    "b1r-tema-reclamar-pago",
    "Repaso temático: reclamar un pago",
    "Correos firmes pero educados: pedir, recordar y exigir — cortesía, subjuntivo y pretérito perfecto.",
    "7 min",
    [
      sec(
        "Del recordatorio a la exigencia",
        "Primer correo: cortés (le agradecería…, ¿podría…?). Segundo: más directo (le ruego que…). Tercero: firme (exijo que…).",
        [
          ["¿Podría confirmarme la fecha de pago?", "Could you confirm the payment date?"],
          ["Le ruego que realice el pago cuanto antes.", "I ask that you make the payment as soon as possible."],
          ["Todavía no he recibido el pago de la factura de marzo.", "I still haven't received payment for the March invoice."],
        ],
        [
          fb("Completa el recordatorio.", "Le ruego que me ___ el pago esta semana. (hacer)", "haga", "Rogar que + subjuntivo."),
          fb("Completa el recordatorio.", "Todavía no ___ la transferencia. (recibir, yo, perfecto)", "he recibido", "Todavía no + perfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Le ___ tres correos y no me ha contestado. (enviar, yo, perfecto)", "he enviado", "Hasta ahora → perfecto."),
      fb("Completa.", "Es necesario que ___ la situación antes del viernes. (resolver, usted)", "resuelva", "Resolver (o→ue) → resuelva."),
      fb("Completa.", "Si no recibo el pago, ___ que tomar medidas. (tener, yo, futuro)", "tendré", "Si + presente + futuro."),
      mc(
        "¿Qué frase es la más cortés?",
        ["Le agradecería que revisara la factura.", "¡Pague ya!", "Me debe dinero.", "Revise la factura, rápido."],
        0,
        "Condicional de cortesía (con imperfecto de subjuntivo, avance del B2)."
      ),
      ms(
        "¿Qué frases son correctas en un correo formal?",
        ["Adjunto le envío la factura.", "Quedo a la espera de su respuesta.", "Oye, págame ya.", "Le recuerdo que el plazo venció ayer."],
        [0, 1, 3],
        "«Oye, págame ya» es demasiado informal."
      ),
      toEs("I have sent you (usted) the invoice again.", "Le he enviado la factura otra vez.", "Le (a usted) + perfecto.", ["Le he vuelto a enviar la factura.", "Le he enviado otra vez la factura.", "Le he mandado la factura otra vez."]),
      wo("Espero que podamos resolverlo sin problemas.", "Esperar que + subjuntivo + infinitivo con pronombre.", "I hope we can resolve it without problems."),
    ]
  ),
  L(
    "error-del-becario",
    "b1r-tema-admitir-errores",
    "Repaso temático: admitir un error",
    "Confesar, disculparse y proponer soluciones — pasados, pronombres dobles y subjuntivo.",
    "7 min",
    [
      sec(
        "La confesión",
        "Para admitir un error: explicar lo que pasó (pretérito/pluscuamperfecto), disculparse (siento que + subjuntivo) y proponer (podría…).",
        [
          ["Tengo que decirle algo: he borrado el archivo por error.", "I have to tell you something: I deleted the file by mistake."],
          ["Siento mucho que haya pasado esto.", "I'm very sorry this happened."],
          ["Podría recuperarlo con la copia de seguridad.", "I could recover it with the backup."],
        ],
        [
          fb("Completa la confesión.", "No me di cuenta de que ya lo ___ enviado. (haber, yo)", "había", "Pluscuamperfecto."),
          fb("Completa la disculpa.", "Siento que ___ que trabajar el fin de semana por mi culpa. (tener, ustedes)", "tengan", "Sentir que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿El informe? Se ___ mandé al cliente equivocado. (lo)", "lo", "Se lo mandé."),
      fb("Completa.", "Es mejor que ___ la verdad cuanto antes. (decir, tú)", "digas", "Es mejor que + subjuntivo."),
      fb("Completa.", "Si lo ocultas, será peor cuando lo ___. (descubrir, ellos)", "descubran", "Cuando + futuro → subjuntivo."),
      mt(
        "Relaciona cada frase con su función.",
        [
          ["Ha sido culpa mía.", "admitir"],
          ["Lo siento muchísimo.", "disculparse"],
          ["Lo arreglaré hoy mismo.", "prometer"],
          ["No volverá a pasar.", "tranquilizar"],
        ],
        "Pasos de una buena disculpa."
      ),
      mc(
        "Tu jefa responde: «Gracias por decírmelo.» ¿Qué significa?",
        ["Thanks for telling me.", "Thanks for saying it to them.", "Tell me thanks.", "Thanks, tell it."],
        0,
        "Decírmelo = decir + me + lo."
      ),
      toEs("I didn't know that the file was so important.", "No sabía que el archivo era tan importante.", "Imperfecto para estados en el pasado.", ["Yo no sabía que el archivo era tan importante."]),
      wo("Lo importante es que aprendas de tus errores.", "Lo importante es que + subjuntivo.", "The important thing is that you learn from your mistakes."),
    ]
  ),
  L(
    "competencia-por-el-ascenso",
    "b1r-tema-ascenso",
    "Repaso temático: el ascenso",
    "Competir con un amigo, entrevistas internas y felicitaciones — comparaciones, subjuntivo y condicional.",
    "7 min",
    [
      sec(
        "Dos candidatos",
        "Comparar a dos personas y reaccionar ante el resultado.",
        [
          ["Ana tiene más experiencia que Luis, pero Luis es tan creativo como ella.", "Ana has more experience than Luis, but Luis is as creative as she is."],
          ["Me alegro de que te hayan elegido a ti.", "I'm glad they chose you."],
        ],
        [
          fb("Compara.", "Luis ha trabajado aquí ___ tiempo que Ana. (menos)", "menos", "Menos … que."),
          fb("Reacciona.", "¡Enhorabuena! Me alegro mucho de que ___ el puesto. (conseguir, tú, perfecto)", "hayas conseguido", "Alegrarse de que + perfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo en tu lugar ___ por el puesto. (presentarse)", "me presentaría", "Condicional reflexivo."),
      fb("Completa.", "No creo que la amistad ___ por esto. (cambiar)", "cambie", "No creer → subjuntivo."),
      fb("Completa.", "La decisión ___ tomada por el comité. (ser, pretérito)", "fue", "Pasiva con ser."),
      mc(
        "«Congratulations! You deserve it.»",
        ["¡Enhorabuena! Te lo mereces.", "¡Enhorabuena! Te lo merezcas.", "¡Enhorabuena! Lo te mereces.", "¡Enhorabuena! Se lo mereces."],
        0,
        "Merecerse algo → te lo mereces."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Es la persona más trabajadora del equipo.", "Ojalá que me elijan a mí.", "Tiene tanta experiencia como yo.", "Es más mejor candidato."],
        [0, 1, 2],
        "Mejor ya es comparativo."
      ),
      toEs("Whatever happens, we will still be friends.", "Pase lo que pase, seguiremos siendo amigos.", "Pase lo que pase = whatever happens (subjuntivo fijo).", ["Pase lo que pase, seguiremos siendo amigas.", "Pase lo que pase, vamos a seguir siendo amigos."]),
      wo("Lo que más me importa es que sigamos siendo amigos.", "Lo que + importar que + subjuntivo.", "What matters most to me is that we stay friends."),
    ]
  ),
  L(
    "ruido-piso-arriba",
    "b1r-tema-convivencia-vecinos",
    "Repaso temático: problemas de convivencia",
    "Ruidos, normas del edificio y soluciones pactadas — peticiones corteses, se impersonal y subjuntivo.",
    "7 min",
    [
      sec(
        "Hablar con el vecino",
        "Una queja educada: saludo, problema (me molesta que…), petición (¿podrías…?), propuesta (¿qué te parece si…?).",
        [
          ["Perdona que te moleste, pero se oye mucho ruido por la noche.", "Sorry to bother you, but a lot of noise can be heard at night."],
          ["¿Podrías poner la música más baja después de las once?", "Could you turn the music down after eleven?"],
        ],
        [
          fb("Completa la queja.", "Perdona que te ___ tan tarde. (llamar, yo)", "llame", "Perdonar que + subjuntivo."),
          fb("Completa la propuesta.", "¿Qué te parece si ___ unas normas para todo el edificio? (hacer, nosotros)", "hacemos", "¿Qué te parece si + presente?"),
        ]
      ),
    ],
    [
      fb("Completa las normas.", "No se ___ hacer obras los domingos. (poder)", "puede", "Se impersonal."),
      fb("Completa las normas.", "Es necesario que todos ___ el descanso de los demás. (respetar)", "respeten", "Es necesario que + subjuntivo."),
      fb("Completa.", "Desde que hablamos, no ___ ningún problema. (haber, perfecto)", "ha habido", "Haber en perfecto: ha habido."),
      mt(
        "Relaciona cada problema con una petición adecuada.",
        [
          ["El perro ladra todo el día.", "¿Podrías sacarlo más a menudo?"],
          ["Los tacones suenan mucho.", "¿Te importaría usar zapatillas en casa?"],
          ["Tiran basura al patio.", "Les ruego que usen los contenedores."],
          ["Aparcan en mi plaza.", "Por favor, no aparquen aquí."],
        ],
        "Peticiones con condicional, subjuntivo o mandato."
      ),
      toEs("I'm sorry, I didn't know that you could hear it.", "Lo siento, no sabía que se oía.", "Se impersonal en imperfecto.", ["Lo siento, no sabía que se escuchaba.", "Perdona, no sabía que se oía."]),
      wo("Al final nos hicimos amigos del vecino de arriba.", "Hacerse amigos + del (de + el).", "In the end we became friends with the upstairs neighbor."),
    ]
  ),
  L(
    "la-vecina-nueva",
    "b1r-tema-inmigracion",
    "Repaso temático: empezar en un país nuevo",
    "Adaptarse, echar de menos y hacer amigos — emociones, pasados y relativas.",
    "7 min",
    [
      sec(
        "Los primeros meses",
        "Contar una experiencia de adaptación mezcla lo que era difícil (imperfecto), lo que pasó (pretérito) y lo que has conseguido (perfecto).",
        [
          ["Al principio no conocía a nadie y echaba de menos a mi familia.", "At first I didn't know anyone and I missed my family."],
          ["Un día una vecina me invitó a tomar café.", "One day a neighbor invited me for coffee."],
          ["Desde entonces he hecho muchos amigos.", "Since then I've made many friends."],
        ],
        [
          fb("Completa.", "Lo que más me ___ era el idioma. (costar)", "costaba", "Dificultad continuada → imperfecto."),
          fb("Completa.", "Me alegra que la gente ___ tan acogedora. (ser)", "sea", "Alegrar que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "La vecina ___ me ayudó se llama Pilar.", "que", "Relativo que."),
      fb("Completa.", "Cuando llegué, nunca ___ comido tortilla de patatas. (haber, yo)", "había", "Pluscuamperfecto."),
      fb("Completa.", "Espero que mis padres ___ a visitarme pronto. (venir)", "vengan", "Esperar que + subjuntivo."),
      mc(
        "«I miss the food from my country.»",
        ["Echo de menos la comida de mi país.", "Echo de menos a la comida de mi país.", "Extraño de la comida de mi país.", "Me echa de menos la comida de mi país."],
        0,
        "Echar de menos + cosa (sin a)."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me he adaptado muy bien.", "Echo de menos a mis amigos.", "Es normal que te sientas solo al principio.", "Cuando llegaré, no hablaba español."],
        [0, 1, 2],
        "Cuando llegué (pretérito)."
      ),
      toEs("It's the neighbor with whom I cook every Sunday.", "Es la vecina con quien cocino todos los domingos.", "Con quien para personas.", ["Es la vecina con la que cocino todos los domingos.", "Es la vecina con quien cocino cada domingo."]),
      wo("Nunca pensé que me sentiría en casa tan pronto.", "Pretérito + condicional (futuro del pasado).", "I never thought I would feel at home so soon."),
    ]
  ),
  L(
    "aviso-de-desalojo",
    "b1r-tema-derechos-inquilinos",
    "Repaso temático: los derechos de los inquilinos",
    "Contratos, abogados y asambleas de vecinos — la voz pasiva, el subjuntivo de necesidad y las condiciones.",
    "7 min",
    [
      sec(
        "La asamblea",
        "En una asamblea se informa (se ha convocado, fue enviado) y se exige (es necesario que, pedimos que).",
        [
          ["El aviso fue enviado a todos los inquilinos.", "The notice was sent to all tenants."],
          ["Es necesario que consultemos a un abogado.", "It's necessary that we consult a lawyer."],
          ["Si nos unimos, tendremos más fuerza.", "If we unite, we'll be stronger."],
        ],
        [
          fb("Completa.", "Pedimos que el propietario ___ nuestros derechos. (respetar)", "respete", "Pedir que + subjuntivo."),
          fb("Completa.", "Se ___ una reunión para el martes. (convocar, perfecto)", "ha convocado", "Se pasivo en perfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Según el contrato, no nos ___ echar antes de junio. (poder, ellos)", "pueden", "Hecho del contrato → indicativo."),
      fb("Completa.", "Si el propietario vende, los nuevos dueños ___ que respetar el contrato. (tener, futuro)", "tendrán", "Si + presente + futuro."),
      fb("Completa.", "Es injusto que ___ subir el alquiler tanto. (querer, ellos)", "quieran", "Es injusto que + subjuntivo."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el inquilino", "tenant"],
          ["el propietario", "landlord"],
          ["el desalojo", "eviction"],
          ["la fianza", "deposit"],
        ],
        "Vocabulario de la vivienda."
      ),
      mc(
        "«The lawyer we hired says we're right.»",
        ["El abogado que contratamos dice que tenemos razón.", "El abogado quien contratamos dice que tengamos razón.", "El abogado lo que contratamos dice que tenemos razón.", "El abogado que contratamos dice que tengamos razón."],
        0,
        "Relativo que; decir (informar) + indicativo."
      ),
      toEs("We will not leave until they listen to us.", "No nos iremos hasta que nos escuchen.", "Hasta que + subjuntivo para el futuro.", ["No nos vamos a ir hasta que nos escuchen.", "No nos iremos hasta que nos oigan."]),
      wo("Gracias a la asamblea, ningún vecino tuvo que irse.", "Pretérito + ningún + infinitivo reflexivo.", "Thanks to the meeting, no tenant had to leave."),
    ]
  ),
  L(
    "las-fotos-perfectas",
    "b1r-tema-redes-sociales",
    "Repaso temático: la vida en las redes",
    "Fotos perfectas, seguidores y autenticidad — opiniones, dudas y consejos sobre las redes sociales.",
    "7 min",
    [
      sec(
        "Opinar sobre las redes",
        "Opiniones con indicativo (creo que, me parece que) y dudas o críticas con subjuntivo (no creo que, me preocupa que).",
        [
          ["Me parece que la gente solo publica lo bueno.", "It seems to me people only post the good stuff."],
          ["Me preocupa que los jóvenes se comparen tanto.", "It worries me that young people compare themselves so much."],
        ],
        [
          fb("Opina.", "No creo que las fotos ___ la realidad. (mostrar)", "muestren", "No creer → subjuntivo; mostrar (o→ue)."),
          fb("Opina.", "Creo que ___ importante ser auténtico. (ser)", "es", "Creer afirmativo → indicativo."),
        ]
      ),
    ],
    [
      fb("Aconseja.", "No ___ tu vida con la de los demás. (comparar, tú)", "compares", "Negativo → subjuntivo."),
      fb("Completa.", "Esta semana ___ más de cien fotos. (subir, yo, perfecto)", "he subido", "Esta semana → perfecto."),
      fb("Completa.", "Si publicas algo real, la gente te lo ___. (agradecer, futuro)", "agradecerá", "Si + presente + futuro."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["los seguidores", "followers"],
          ["publicar", "to post"],
          ["dar me gusta", "to like"],
          ["el filtro", "filter"],
        ],
        "Vocabulario de redes sociales."
      ),
      mc(
        "«It's sad that people only show the perfect side.»",
        ["Es triste que la gente solo muestre el lado perfecto.", "Es triste que la gente solo muestra el lado perfecto.", "Es triste de que la gente solo muestre el lado perfecto.", "Es triste la gente solo muestre el lado perfecto."],
        0,
        "Es triste que + subjuntivo; gente es singular."
      ),
      toEs("I've decided to post something real for the first time.", "He decidido publicar algo real por primera vez.", "Perfecto + infinitivo.", ["Decidí publicar algo real por primera vez.", "He decidido subir algo real por primera vez."]),
      wo("Lo que ves en las redes no siempre es verdad.", "Lo que + indicativo.", "What you see on social media isn't always true."),
    ]
  ),
  L(
    "llamadas-de-los-domingos",
    "b1r-tema-familia-a-distancia",
    "Repaso temático: la familia a distancia",
    "Videollamadas, nostalgia y reencuentros — deseos, emociones y pasados para hablar de la distancia.",
    "7 min",
    [
      sec(
        "Echar de menos",
        "Hablar de la distancia: echo de menos que…, me gustaría que…, ojalá…, cuando vuelvas…",
        [
          ["Echo de menos que cenemos juntas.", "I miss us having dinner together."],
          ["Cuando vuelvas, haremos una fiesta.", "When you come back, we'll have a party."],
        ],
        [
          fb("Completa.", "Ojalá que ___ pronto a casa. (volver, tú)", "vuelvas", "Ojalá + subjuntivo."),
          fb("Completa.", "Cuando ___ en agosto, iremos a la playa. (llegar, tú)", "llegues", "Cuando + futuro → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Antes hablábamos todos los días, pero últimamente no ___ mucho. (hablar, perfecto)", "hemos hablado", "Últimamente → perfecto."),
      fb("Completa.", "Me molesta que siempre ___ mirando el móvil durante la llamada. (estar, tú)", "estés", "Molestar que + subjuntivo."),
      fb("Completa.", "¿Te ___ llamarme los miércoles también? (importar, condicional)", "importaría", "Petición cortés."),
      mc(
        "«When I was your age, I also wanted to be independent.»",
        ["Cuando tenía tu edad, yo también quería ser independiente.", "Cuando tuve tu edad, yo también quise ser independiente.", "Cuando tenga tu edad, quería ser independiente.", "Cuando tenía tu edad, también he querido ser independiente."],
        0,
        "Etapa de la vida y deseo continuado → imperfecto."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Te echo mucho de menos.", "Me alegro de que te vaya bien.", "Espero que me llamas pronto.", "Cuéntame qué has hecho esta semana."],
        [0, 1, 3],
        "Esperar que + subjuntivo: me llames."
      ),
      toEs("I want you (tú) to tell me everything.", "Quiero que me lo cuentes todo.", "Querer que + subjuntivo + me lo.", ["Quiero que me cuentes todo.", "Quiero que me lo digas todo."]),
      wo("Aunque estamos lejos, siempre te llevo en el corazón.", "Aunque + indicativo (hecho real).", "Although we're far apart, I always carry you in my heart."),
    ]
  ),
  L(
    "la-oficina-vacia",
    "b1r-tema-teletrabajo",
    "Repaso temático: teletrabajo u oficina",
    "Ventajas, desventajas y preferencias — comparaciones, condicional e hipótesis sobre el trabajo remoto.",
    "7 min",
    [
      sec(
        "Pros y contras",
        "Comparar y opinar: es más cómodo que…, echo de menos…, preferiría…",
        [
          ["Trabajar desde casa es más cómodo, pero me siento más solo.", "Working from home is more comfortable, but I feel lonelier."],
          ["Preferiría ir a la oficina dos días a la semana.", "I'd prefer to go to the office two days a week."],
        ],
        [
          fb("Compara.", "En casa tengo ___ distracciones que en la oficina. (more)", "más", "Más … que."),
          fb("Expresa una preferencia.", "Yo ___ un modelo híbrido. (elegir, condicional)", "elegiría", "Condicional."),
        ]
      ),
    ],
    [
      fb("Completa.", "Desde que teletrabajo, ___ más tiempo con mi familia. (pasar, perfecto)", "he pasado", "Desde que + perfecto."),
      fb("Completa.", "Mi jefe quiere que ___ a la oficina los lunes. (ir, nosotros)", "vayamos", "Querer que + subjuntivo."),
      fb("Completa.", "Antes de la pandemia, nunca ___ desde casa. (trabajar, pluscuamperfecto)", "había trabajado", "Anterior → pluscuamperfecto."),
      ms(
        "¿Qué frases son ventajas del teletrabajo?",
        ["No pierdo tiempo en el transporte.", "Veo a mis compañeros cara a cara.", "Tengo un horario más flexible.", "Separo mejor el trabajo de la vida personal."],
        [0, 2],
        "Ver a los compañeros y separar trabajo y vida personal son ventajas de la oficina."
      ),
      toEs("It's important that we see each other at least once a week.", "Es importante que nos veamos al menos una vez a la semana.", "Es importante que + subjuntivo recíproco.", ["Es importante que nos veamos por lo menos una vez por semana.", "Es importante que nos veamos al menos una vez por semana."]),
      wo("Lo que más echo de menos son los cafés con mis compañeros.", "Lo que + echar de menos.", "What I miss most are the coffees with my coworkers."),
    ]
  ),
  L(
    "treinta-dias-sin-notificaciones",
    "b1r-tema-desconexion-digital",
    "Repaso temático: la desconexión digital",
    "Un reto de un mes sin móvil: propósitos, dificultades y descubrimientos.",
    "7 min",
    [
      sec(
        "El reto",
        "Los propósitos van en futuro; los consejos, en subjuntivo o mandato; las reflexiones, en perfecto.",
        [
          ["Durante un mes, no miraré el móvil antes de las diez.", "For a month, I won't look at my phone before ten."],
          ["Es importante que desactives las notificaciones.", "It's important that you turn off notifications."],
          ["Esta semana he leído dos libros.", "This week I've read two books."],
        ],
        [
          fb("Completa el propósito.", "No ___ las redes sociales por la noche. (usar, yo, futuro)", "usaré", "Propósito → futuro."),
          fb("Completa el consejo.", "___ el móvil en otra habitación mientras trabajas. (dejar, tú)", "Deja", "Mandato de tú."),
        ]
      ),
    ],
    [
      fb("Completa.", "Al principio, ___ el móvil cada cinco minutos sin darme cuenta. (buscar, yo)", "buscaba", "Hábito pasado → imperfecto."),
      fb("Completa.", "Nunca ___ lo dependiente que era. (imaginar, pluscuamperfecto)", "había imaginado", "Pluscuamperfecto."),
      fb("Completa.", "Me sorprende que el tiempo ___ tanto sin pantallas. (cundir)", "cunda", "Sorprender que + subjuntivo (cundir = to go a long way)."),
      mc(
        "«If you get bored, go for a walk.»",
        ["Si te aburres, sal a pasear.", "Si te aburrirás, sal a pasear.", "Si te aburras, sales a pasear.", "Si aburres, sal a pasear."],
        0,
        "Si + presente reflexivo + mandato."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["He dormido mejor este mes.", "Ojalá que aguante hasta el final.", "No mires el móvil en la cama.", "Es difícil que no lo miro."],
        [0, 1, 2],
        "Es difícil + infinitivo (no mirarlo) o que + subjuntivo (que no lo mire)."
      ),
      toEs("Since I turned off my phone, I've had more time for myself.", "Desde que apagué el móvil, he tenido más tiempo para mí.", "Desde que + pretérito + perfecto.", ["Desde que apagué el teléfono, he tenido más tiempo para mí.", "Desde que apagué el celular, he tenido más tiempo para mí."]),
      wo("Nunca pensé que un mes sin notificaciones cambiaría tanto mi vida.", "Pretérito + condicional (futuro del pasado).", "I never thought a month without notifications would change my life so much."),
    ]
  ),
  L(
    "los-arboles-de-la-plaza",
    "b1r-tema-arboles-ciudad",
    "Repaso temático: la naturaleza en la ciudad",
    "Árboles, parques y aire limpio — argumentar con expresiones impersonales y condiciones.",
    "7 min",
    [
      sec(
        "Argumentos verdes",
        "Hechos con indicativo (está demostrado que), exigencias con subjuntivo (es fundamental que).",
        [
          ["Está demostrado que los árboles reducen la temperatura.", "It's proven that trees reduce temperatures."],
          ["Es fundamental que se protejan los parques.", "It's essential that parks are protected."],
        ],
        [
          fb("Argumenta.", "Está claro que los árboles ___ el aire. (limpiar)", "limpian", "Certeza → indicativo."),
          fb("Argumenta.", "Es fundamental que no se ___ ningún árbol. (cortar)", "corte", "Es fundamental que + subjuntivo (se pasivo)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si cortan los árboles, la plaza ___ un horno en verano. (ser, futuro)", "será", "Si + presente + futuro."),
      fb("Completa.", "Estos árboles ___ plantados hace cien años. (ser, pretérito)", "fueron", "Pasiva con ser."),
      fb("Completa.", "Pedimos al ayuntamiento que ___ otra solución para el aparcamiento. (buscar)", "busque", "Pedir que + subjuntivo; c → qu."),
      mt(
        "Relaciona cada beneficio con su explicación.",
        [
          ["dar sombra", "bajar la temperatura"],
          ["absorber CO₂", "mejorar el aire"],
          ["reducir el ruido", "hacer la calle más tranquila"],
          ["atraer pájaros", "aumentar la biodiversidad"],
        ],
        "Beneficios de los árboles urbanos."
      ),
      mc(
        "«It would be a mistake to cut them down.»",
        ["Sería un error cortarlos.", "Será un error cortarlos ayer.", "Sería un error que los cortar.", "Sería un error de cortarlos."],
        0,
        "Condicional + infinitivo con pronombre."
      ),
      toEs("The trees that you see in the square are older than the church.", "Los árboles que ves en la plaza son más antiguos que la iglesia.", "Relativa + comparación.", ["Los árboles que ves en la plaza son más viejos que la iglesia."]),
      wo("Gracias a los vecinos, los árboles siguen en pie.", "Seguir en pie = to still be standing.", "Thanks to the neighbors, the trees are still standing."),
    ]
  ),
  L(
    "supermercado-sin-plastico",
    "b1r-tema-residuo-cero",
    "Repaso temático: comprar sin plástico",
    "Hábitos de consumo, reciclaje y cambios pequeños — se impersonal, mandatos y el si real.",
    "7 min",
    [
      sec(
        "Un supermercado diferente",
        "Instrucciones con mandatos de usted/ustedes y el se impersonal.",
        [
          ["Traigan sus propios envases.", "Bring your own containers."],
          ["Aquí se vende todo a granel.", "Everything is sold in bulk here."],
          ["Si no tiene bolsa, le prestamos una de tela.", "If you don't have a bag, we'll lend you a cloth one."],
        ],
        [
          fb("Completa el cartel.", "___ los frascos antes de traerlos. (lavar, ustedes)", "Laven", "Mandato de ustedes."),
          fb("Completa el cartel.", "Aquí no se ___ bolsas de plástico. (dar)", "dan", "Se pasivo plural."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es increíble que ___ tanto plástico en un solo día. (usar, nosotros)", "usemos", "Es increíble que + subjuntivo."),
      fb("Completa.", "Desde que compro aquí, ___ la basura a la mitad. (reducir, perfecto)", "he reducido", "Desde que + perfecto."),
      fb("Completa.", "Si todos hacemos un pequeño esfuerzo, ___ una gran diferencia. (haber, futuro)", "habrá", "Si + presente + futuro."),
      mt(
        "Relaciona cada producto con su alternativa sin plástico.",
        [
          ["la botella de plástico", "la botella de vidrio"],
          ["la bolsa de plástico", "la bolsa de tela"],
          ["el champú en bote", "la pastilla de champú"],
          ["el film transparente", "el envoltorio de cera"],
        ],
        "Alternativas de residuo cero."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se aceptan envases reutilizables.", "Recomiendo que traigas tu bolsa.", "Ojalá que más tiendas hacen lo mismo.", "No compres lo que no necesitas."],
        [0, 1, 3],
        "Ojalá + subjuntivo: hagan."
      ),
      toEs("I hope other shops copy the idea.", "Espero que otras tiendas copien la idea.", "Esperar que + subjuntivo.", ["Ojalá que otras tiendas copien la idea.", "Ojalá otras tiendas copien la idea."]),
      wo("Lo que empezó como un experimento se ha convertido en un éxito.", "Lo que + pretérito + perfecto.", "What started as an experiment has become a success."),
    ]
  ),
  L(
    "la-energia-del-futuro",
    "b1r-tema-energia",
    "Repaso temático: la energía del futuro",
    "Paneles solares, escepticismo y cambio — predicciones, dudas y la voz pasiva.",
    "7 min",
    [
      sec(
        "Convencer a un escéptico",
        "Predicciones en futuro, dudas en subjuntivo, hechos en indicativo.",
        [
          ["—Dudo que esos paneles funcionen en invierno.", "I doubt those panels work in winter."],
          ["—Está comprobado que producen energía incluso con nubes.", "It's proven they produce energy even with clouds."],
          ["—En diez años, todo el pueblo usará energía solar.", "In ten years, the whole village will use solar energy."],
        ],
        [
          fb("Responde al escéptico.", "Es verdad que al principio ___ caros. (ser, presente)", "son", "Certeza → indicativo."),
          fb("Predice.", "Dentro de poco, las facturas ___ mucho. (bajar, futuro)", "bajarán", "Predicción → futuro."),
        ]
      ),
    ],
    [
      fb("Completa.", "Los paneles ___ instalados la semana pasada. (ser, pretérito)", "fueron", "Pasiva con ser."),
      fb("Completa.", "No creo que ___ vuelta atrás. (haber)", "haya", "No creer → subjuntivo."),
      fb("Completa.", "Si el proyecto funciona, se ___ a otros pueblos. (extender, futuro)", "extenderá", "Si + presente + futuro."),
      mt(
        "Relaciona cada fuente de energía con su descripción.",
        [
          ["la energía solar", "viene del sol"],
          ["la energía eólica", "viene del viento"],
          ["la energía hidráulica", "viene del agua"],
          ["la energía geotérmica", "viene del calor de la Tierra"],
        ],
        "Energías renovables."
      ),
      mc(
        "«I had never seen a solar panel up close.»",
        ["Nunca había visto un panel solar de cerca.", "Nunca he visto un panel solar de cerca ayer.", "Nunca he vido un panel solar de cerca.", "Nunca había vido un panel solar de cerca."],
        0,
        "Pluscuamperfecto; ver → visto."
      ),
      toEs("It's necessary that we invest in renewable energy.", "Es necesario que invirtamos en energías renovables.", "Invertir (-IR) → invirtamos.", ["Es necesario que invirtamos en energía renovable."]),
      wo("El técnico que dudaba al principio ahora es el más entusiasta.", "Relativa en imperfecto + superlativo.", "The technician who had doubts at first is now the most enthusiastic."),
    ]
  ),
  L(
    "la-mochila-que-pesaba-menos",
    "b1r-tema-camino",
    "Repaso temático: el Camino de Santiago",
    "Peregrinos, albergues y reflexiones — consejos, experiencias y el pretérito perfecto.",
    "7 min",
    [
      sec(
        "Consejos para el Camino",
        "Consejos con subjuntivo y mandatos; experiencia con perfecto.",
        [
          ["Te recomiendo que no lleves más de siete kilos.", "I recommend you don't carry more than seven kilos."],
          ["Sal temprano para evitar el calor.", "Leave early to avoid the heat."],
          ["He hecho el Camino tres veces.", "I've done the Camino three times."],
        ],
        [
          fb("Aconseja.", "Es mejor que ___ botas ya usadas. (llevar, tú)", "lleves", "Es mejor que + subjuntivo."),
          fb("Aconseja.", "___ agua en cada fuente. (beber, tú)", "Bebe", "Mandato de tú."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿Alguna vez ___ el Camino de Santiago? (hacer, tú)", "has hecho", "Experiencia → perfecto."),
      fb("Completa.", "El albergue en el ___ dormimos era muy sencillo.", "que", "En el que."),
      fb("Completa.", "Cuando ___ a Santiago, lloré de emoción. (llegar, yo)", "llegué", "Acción puntual → pretérito."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el peregrino", "pilgrim"],
          ["el albergue", "hostel"],
          ["la etapa", "stage (of the route)"],
          ["la ampolla", "blister"],
        ],
        "Vocabulario del Camino."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Ojalá que no te salgan ampollas.", "Si te cansas, descansa.", "Lo que más me gustó fue la gente.", "Te recomiendo que llevas poco peso."],
        [0, 1, 2],
        "Recomendar que + subjuntivo: lleves."
      ),
      toEs("I've learned that I need much less than I thought.", "He aprendido que necesito mucho menos de lo que pensaba.", "Perfecto + menos de lo que (con una cláusula).", ["He aprendido que necesito mucho menos de lo que creía."]),
      wo("Nunca había caminado tanto en mi vida.", "Pluscuamperfecto + tanto.", "I had never walked so much in my life."),
    ]
  ),
  L(
    "las-manos-en-el-barro",
    "b1r-tema-aficiones",
    "Repaso temático: una nueva afición",
    "Cerámica, pintura o baile — hablar de aficiones con experiencias, deseos y recomendaciones.",
    "7 min",
    [
      sec(
        "Descubrir una pasión",
        "Hablar de cómo empezó una afición (pretérito), qué ha cambiado (perfecto) y qué recomiendas (subjuntivo).",
        [
          ["Empecé a hacer cerámica hace un año.", "I started doing pottery a year ago."],
          ["Desde entonces, he aprendido a relajarme.", "Since then, I've learned to relax."],
          ["Te recomiendo que pruebes una clase.", "I recommend you try a class."],
        ],
        [
          fb("Completa.", "Me encanta que en la clase no ___ exámenes. (haber)", "haya", "Encantar que + subjuntivo."),
          fb("Completa.", "Hace un año que ___ a pintar. (empezar, yo, pretérito)", "empecé", "Hace + tiempo + que + pretérito."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si tienes tiempo libre, ___ algo con las manos. (hacer, tú, mandato)", "haz", "Mandato irregular."),
      fb("Completa.", "Antes de empezar, nunca ___ tocado el barro. (haber, yo)", "había", "Pluscuamperfecto."),
      fb("Completa.", "Me gustaría ___ mis piezas en una feria. (vender)", "vender", "Mismo sujeto → infinitivo."),
      mt(
        "Relaciona cada afición con su material.",
        [
          ["la cerámica", "el barro"],
          ["la pintura", "los pinceles"],
          ["la costura", "la aguja y el hilo"],
          ["la fotografía", "la cámara"],
        ],
        "Aficiones y sus herramientas."
      ),
      mc(
        "«What I like most is that nobody judges me.»",
        ["Lo que más me gusta es que nadie me juzgue.", "Lo que más me gusta es de que nadie me juzgue.", "El que más me gusta es que nadie me juzgue.", "Lo que más me gusta es nadie me juzgue."],
        0,
        "Lo que + gustar que + subjuntivo."
      ),
      toEs("Pottery has changed my life.", "La cerámica me ha cambiado la vida.", "Perfecto + artículo con vida.", ["La cerámica ha cambiado mi vida."]),
      wo("El jarrón que hice la primera semana está un poco torcido.", "Relativa en pretérito + estar torcido.", "The vase I made the first week is a bit crooked."),
    ]
  ),
  L(
    "la-cena-de-los-martes",
    "b1r-tema-voluntariado",
    "Repaso temático: el voluntariado",
    "Ayudar a los demás: motivos, experiencias y deseos — con todo el B1.",
    "7 min",
    [
      sec(
        "¿Por qué ser voluntario?",
        "Explicar motivos (porque, para + infinitivo, para que + subjuntivo — avance del B2) y reacciones.",
        [
          ["Me hice voluntario para sentirme útil.", "I became a volunteer to feel useful."],
          ["Me emociona que la gente me dé las gracias.", "It moves me when people thank me."],
        ],
        [
          fb("Completa.", "Es importante que nadie ___ solo en Navidad. (estar)", "esté", "Es importante que + subjuntivo."),
          fb("Completa.", "Desde que soy voluntario, ___ a gente increíble. (conocer, perfecto)", "he conocido", "Desde que + perfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cada martes ___ la cena para cincuenta personas. (preparar, nosotros)", "preparamos", "Hábito presente."),
      fb("Completa.", "El señor con ___ hablo siempre era profesor de historia.", "quien", "Con quien."),
      fb("Completa.", "Si quieres ayudar, ___ al comedor el martes. (venir, tú)", "ven", "Mandato irregular."),
      mt(
        "Relaciona cada tarea con su lugar.",
        [
          ["servir comidas", "el comedor social"],
          ["leer a los ancianos", "la residencia"],
          ["clasificar ropa", "el banco de ropa"],
          ["dar clases de apoyo", "el centro juvenil"],
        ],
        "Tipos de voluntariado."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me alegra que vengas a ayudar.", "Ojalá haya más voluntarios el año que viene.", "Nunca había cocinado para tanta gente.", "Es necesario que todos colaboran."],
        [0, 1, 2],
        "Es necesario que + subjuntivo: colaboren."
      ),
      toEs("I have received more than I have given.", "He recibido más de lo que he dado.", "Más de lo que + cláusula.", ["Recibí más de lo que di."]),
      wo("Lo que empezó como un favor se convirtió en una amistad.", "Lo que + pretérito + convertirse en.", "What began as a favor became a friendship."),
    ]
  ),
  L(
    "aprender-a-flotar",
    "b1r-tema-superar-miedos",
    "Repaso temático: superar un miedo",
    "Miedos de la infancia y cómo enfrentarlos — emociones, experiencias y consejos.",
    "7 min",
    [
      sec(
        "Hablar de los miedos",
        "Tener miedo de + infinitivo (mismo sujeto) o de que + subjuntivo (sujeto diferente).",
        [
          ["Tenía miedo de meter la cabeza en el agua.", "I was afraid of putting my head under water."],
          ["Me daba miedo soltarme del borde de la piscina.", "I was scared to let go of the edge of the pool."],
          ["Por fin he superado mi miedo.", "I've finally overcome my fear."],
        ],
        [
          fb("Completa.", "De pequeña, ___ miedo al agua. (tener, yo)", "tenía", "Estado en el pasado → imperfecto."),
          fb("Completa.", "Tengo miedo de ___ en público. (hablar, yo mismo)", "hablar", "Mismo sujeto → infinitivo."),
        ]
      ),
    ],
    [
      fb("Aconseja.", "No ___ prisa; ve poco a poco. (tener, tú)", "tengas", "No tengas prisa."),
      fb("Aconseja.", "Es normal que ___ nervioso la primera vez. (estar, tú)", "estés", "Es normal que + subjuntivo."),
      fb("Completa.", "Nunca ___ que a los treinta años aprendería a nadar. (imaginar, pluscuamperfecto)", "había imaginado", "Pluscuamperfecto."),
      mc(
        "«If you face your fear, it will get smaller.»",
        ["Si te enfrentas a tu miedo, se hará más pequeño.", "Si te enfrentarás a tu miedo, se hace más pequeño.", "Si te enfrentes a tu miedo, se hará más pequeño.", "Si enfrentas tu miedo, se hacía más pequeño."],
        0,
        "Si + presente + futuro."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me da miedo la oscuridad.", "Me dan miedo las arañas.", "Tengo miedo que me vean.", "He conseguido flotar sola."],
        [0, 1, 3],
        "Tener miedo de que + subjuntivo: tengo miedo de que me vean."
      ),
      toEs("I'm proud that I didn't give up.", "Estoy orgullosa de no haberme rendido.", "Mismo sujeto → de + infinitivo compuesto.", ["Estoy orgulloso de no haberme rendido.", "Estoy orgullosa de que no me rendí."]),
      wo("Lo más difícil fue dar el primer paso.", "Lo más + adjetivo + pretérito.", "The hardest thing was taking the first step."),
    ]
  ),
  L(
    "la-banda-de-garaje",
    "b1r-tema-musica-grupo",
    "Repaso temático: formar una banda",
    "Buscar músicos, ensayar y dar el primer concierto — relativas, subjuntivo y planes.",
    "7 min",
    [
      sec(
        "El anuncio",
        "Buscar a alguien que no conoces: relativa con subjuntivo (avance del B2). Describir a alguien que ya conoces: relativa con indicativo.",
        [
          ["Buscamos un batería que tenga experiencia.", "We're looking for a drummer who has experience."],
          ["Tenemos una cantante que compone sus propias canciones.", "We have a singer who writes her own songs."],
        ],
        [
          fb("Completa.", "Tenemos un guitarrista ___ toca muy bien.", "que", "Relativo que (persona que existe → indicativo)."),
          fb("Completa.", "Es importante que todos ___ a los ensayos. (venir)", "vengan", "Es importante que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ensayamos cada semana, ___ listos para el concierto. (estar, futuro)", "estaremos", "Si + presente + futuro."),
      fb("Completa.", "Desde que tocamos juntos, ___ diez canciones. (escribir, perfecto)", "hemos escrito", "Escribir → escrito."),
      fb("Completa.", "Yo que tú, ___ el volumen del bajo. (bajar)", "bajaría", "Consejo → condicional."),
      mt(
        "Relaciona cada músico con su instrumento.",
        [
          ["el batería", "la batería"],
          ["el bajista", "el bajo"],
          ["la teclista", "el teclado"],
          ["el guitarrista", "la guitarra"],
        ],
        "Músicos e instrumentos (ojo: el batería = drummer, la batería = drums)."
      ),
      mc(
        "«Let's play that song again.»",
        ["Toquemos esa canción otra vez.", "Tocamos esa canción otra vez ayer.", "Toquéis esa canción otra vez.", "Tocar esa canción otra vez nosotros."],
        0,
        "Mandato de nosotros = subjuntivo; c → qu."
      ),
      toEs("I hope a lot of people come to the concert.", "Espero que venga mucha gente al concierto.", "Esperar que + subjuntivo; gente singular.", ["Ojalá que venga mucha gente al concierto.", "Ojalá venga mucha gente al concierto."]),
      wo("La música es lo que nos une a pesar de las diferencias.", "Lo que + a pesar de.", "Music is what unites us despite our differences."),
    ]
  ),
  L(
    "la-cumbre-del-teide",
    "b1r-tema-decisiones-dificiles",
    "Repaso temático: seguir o volver",
    "En la montaña, a veces hay que renunciar — hipótesis, consejos y el valor de decir que no.",
    "7 min",
    [
      sec(
        "La decisión",
        "Para valorar opciones: si + presente (condición real), yo que tú + condicional, es mejor que + subjuntivo.",
        [
          ["Si seguimos, llegaremos de noche.", "If we continue, we'll arrive at night."],
          ["Es mejor que volvamos; el tiempo está empeorando.", "It's better that we go back; the weather is getting worse."],
        ],
        [
          fb("Completa.", "Yo que tú, ___ ahora. (volver)", "volvería", "Consejo → condicional."),
          fb("Completa.", "No creo que ___ fuerzas para llegar arriba. (tener, tú)", "tengas", "No creer → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando llegamos al refugio, ya ___ oscuro. (ser, imperfecto)", "era", "Descripción de la escena → imperfecto."),
      fb("Completa.", "Mis amigos ___ a la cima al día siguiente. (subir, pretérito)", "subieron", "Acción puntual → pretérito."),
      fb("Completa.", "Me alegro de que ___ la decisión correcta. (tomar, tú, perfecto)", "hayas tomado", "Alegrarse de que + perfecto de subjuntivo."),
      mc(
        "«The mountain will still be there next year.»",
        ["La montaña seguirá ahí el año que viene.", "La montaña seguiría ahí el año pasado.", "La montaña siga ahí el año que viene.", "La montaña ha seguido ahí el año que viene."],
        0,
        "Predicción → futuro."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Renunciar también es una forma de valor.", "Si te duele la cabeza, bajamos.", "Es importante que escuches a tu cuerpo.", "Ojalá que llegamos a la cima."],
        [0, 1, 2],
        "Ojalá + subjuntivo: lleguemos."
      ),
      toEs("I would like to try again next year.", "Me gustaría intentarlo otra vez el año que viene.", "Condicional de deseo + infinitivo con pronombre.", ["Me gustaría intentarlo de nuevo el año que viene.", "Me gustaría volver a intentarlo el año que viene.", "Me gustaría intentarlo otra vez el próximo año."]),
      wo("A veces lo más valiente es saber cuándo parar.", "Lo más + adjetivo + saber cuándo + infinitivo.", "Sometimes the bravest thing is knowing when to stop."),
    ]
  ),
  L(
    "el-silencio-del-retiro",
    "b1r-tema-estres",
    "Repaso temático: el estrés y el descanso",
    "Trabajo, agotamiento y pausas necesarias — consejos, reacciones y cambios de hábitos.",
    "7 min",
    [
      sec(
        "Señales de alarma",
        "Hablar del estrés: estoy agotado, no paro, me cuesta desconectar. Aconsejar: deberías, te recomiendo que, no trabajes tanto.",
        [
          ["Últimamente me cuesta mucho dormir.", "Lately I find it very hard to sleep."],
          ["Deberías tomarte unos días libres.", "You should take a few days off."],
        ],
        [
          fb("Aconseja.", "Te recomiendo que ___ el ordenador a las siete. (apagar)", "apagues", "Recomendar que + subjuntivo; g → gu."),
          fb("Aconseja.", "No ___ correos el fin de semana. (contestar, tú)", "contestes", "Negativo → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Este año ___ más de sesenta horas a la semana. (trabajar, perfecto)", "he trabajado", "Este año → perfecto."),
      fb("Completa.", "Me preocupa que no ___ tiempo para ti misma. (tener, tú)", "tengas", "Preocupar que + subjuntivo."),
      fb("Completa.", "Si no descansas, ___ enfermo. (ponerse, tú, futuro)", "te pondrás", "Ponerse → te pondrás."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["estar quemado", "to be burned out"],
          ["desconectar", "to switch off"],
          ["no dar abasto", "to be overwhelmed"],
          ["tomarse un respiro", "to take a breather"],
        ],
        "Expresiones sobre el estrés."
      ),
      ms(
        "¿Qué consejos son correctos?",
        ["Tómate un descanso.", "Es mejor que duermas ocho horas.", "Yo que tú, iría a un retiro.", "No trabajas tanto."],
        [0, 1, 2],
        "Negativo de tú → subjuntivo: no trabajes tanto."
      ),
      toEs("I had never been in silence for so many hours.", "Nunca había estado en silencio tantas horas.", "Pluscuamperfecto + tantas horas.", ["Nunca había pasado tantas horas en silencio.", "Nunca había estado tantas horas en silencio."]),
      wo("Lo que necesito es aprender a decir que no.", "Lo que + necesitar + infinitivo.", "What I need is to learn to say no."),
    ]
  ),
  L(
    "la-playa-despues-de-la-tormenta",
    "b1r-tema-limpieza-playa",
    "Repaso temático: después de la tormenta",
    "Organizar una limpieza colectiva: llamamientos, instrucciones y resultados con la pasiva.",
    "7 min",
    [
      sec(
        "El llamamiento",
        "Invitar a la gente: mandatos de ustedes, es necesario que, ojalá.",
        [
          ["Vengan el sábado a las nueve y traigan guantes.", "Come on Saturday at nine and bring gloves."],
          ["Es necesario que seamos muchos.", "We need a lot of people."],
          ["Ojalá que no llueva.", "I hope it doesn't rain."],
        ],
        [
          fb("Completa el llamamiento.", "___ a vuestros amigos. (traer, vosotros)", "Traed", "Mandato de vosotros."),
          fb("Completa el llamamiento.", "Es importante que nadie ___ solo cerca de las rocas. (trabajar)", "trabaje", "Es importante que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa el informe.", "Se ___ más de dos toneladas de basura. (recoger, pretérito)", "recogieron", "Se pasivo plural."),
      fb("Completa el informe.", "La basura ___ separada para reciclarla. (ser, pretérito)", "fue", "Pasiva con ser."),
      fb("Completa.", "Nunca ___ tanta gente en una limpieza. (ver, yo, pluscuamperfecto)", "había visto", "Pluscuamperfecto."),
      mc(
        "«Thanks to everyone who came!»",
        ["¡Gracias a todos los que vinieron!", "¡Gracias a todos quienes vinieron que!", "¡Gracias a todos lo que vinieron!", "¡Gracias por todos los que venían!"],
        0,
        "Los que = those who."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se encontraron muchas botellas.", "Me alegra que tantos vecinos hayan participado.", "Si hay otra tormenta, volveremos.", "Es necesario que reciclamos más."],
        [0, 1, 2],
        "Es necesario que + subjuntivo: reciclemos."
      ),
      toEs("What began as a cleanup has become a tradition.", "Lo que empezó como una limpieza se ha convertido en una tradición.", "Lo que + pretérito + perfecto.", ["Lo que comenzó como una limpieza se ha convertido en una tradición."]),
      wo("La playa quedó más limpia que antes de la tormenta.", "Quedar + comparativo.", "The beach ended up cleaner than before the storm."),
    ]
  ),
  L(
    "quince-dias-en-kioto",
    "b1r-tema-viajar-solo",
    "Repaso temático: viajar solo",
    "Salir de la zona de confort: miedos, descubrimientos y consejos para el primer viaje en solitario.",
    "7 min",
    [
      sec(
        "Antes y después",
        "Antes del viaje: miedos (me daba miedo que…, tenía miedo de…). Después: lo que has aprendido (perfecto).",
        [
          ["Tenía miedo de sentirme sola.", "I was afraid of feeling lonely."],
          ["He aprendido a pedir ayuda a desconocidos.", "I've learned to ask strangers for help."],
        ],
        [
          fb("Completa.", "Antes de ese viaje, nunca ___ sola. (viajar, pluscuamperfecto)", "había viajado", "Pluscuamperfecto."),
          fb("Completa.", "Ahora sé que ___ capaz de todo. (ser, yo)", "soy", "Saber que + indicativo."),
        ]
      ),
    ],
    [
      fb("Aconseja.", "Si viajas sola, ___ a alguien tu itinerario. (dejar, tú)", "deja", "Si + presente + mandato."),
      fb("Aconseja.", "Es mejor que ___ unas palabras del idioma local. (aprender, tú)", "aprendas", "Es mejor que + subjuntivo."),
      fb("Completa.", "El templo que más me ___ fue el del Pabellón de Oro. (gustar, pretérito)", "gustó", "Pretérito."),
      mt(
        "Relaciona cada situación con un buen consejo.",
        [
          ["Te pierdes.", "Pregunta en una tienda."],
          ["Te sientes sola.", "Únete a una visita guiada."],
          ["No entiendes el menú.", "Señala lo que come otra persona."],
          ["Estás cansada.", "Tómate una tarde libre."],
        ],
        "Mandatos de tú."
      ),
      mc(
        "«I hope you (tú) dare to travel alone one day.»",
        ["Espero que algún día te atrevas a viajar sola.", "Espero que algún día te atreves a viajar sola.", "Espero que algún día atreverte a viajar sola.", "Espero algún día que te atrevas viajar sola."],
        0,
        "Esperar que + subjuntivo; atreverse a + infinitivo."
      ),
      toEs("It was the best decision I have ever made.", "Fue la mejor decisión que he tomado nunca.", "Superlativo + relativa con perfecto.", ["Ha sido la mejor decisión que he tomado nunca.", "Fue la mejor decisión que he tomado en mi vida."]),
      wo("Volví a casa siendo una persona un poco diferente.", "Volver + gerundio.", "I came home a slightly different person."),
    ]
  ),
  L(
    "la-bicicleta-de-mi-padre",
    "b1r-tema-memoria-familiar",
    "Repaso temático: la memoria de un padre",
    "Recuerdos, herencias y viajes en honor de alguien — los tres pasados y el estilo indirecto.",
    "7 min",
    [
      sec(
        "Lo que él contaba",
        "Contar lo que alguien decía: me contaba que + imperfecto; me dijo que + pluscuamperfecto; me prometió que + condicional.",
        [
          ["Mi padre me contaba que había cruzado el país en bici.", "My father used to tell me he had crossed the country by bike."],
          ["Me prometió que algún día lo haríamos juntos.", "He promised me that one day we'd do it together."],
        ],
        [
          fb("Completa.", "Siempre decía que ___ el mejor viaje de su vida. (ser, pluscuamperfecto)", "había sido", "Estilo indirecto → pluscuamperfecto."),
          fb("Completa.", "Me prometió que me ___ a montar en bici. (enseñar, condicional)", "enseñaría", "Promesa en el pasado → condicional."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando ___ niño, mi padre me llevaba en su bici. (ser, yo)", "era", "Etapa de la vida → imperfecto."),
      fb("Completa.", "El año pasado ___ su antigua bicicleta en el garaje. (encontrar, yo)", "encontré", "Hecho puntual → pretérito."),
      fb("Completa.", "Ojalá que él ___ orgulloso de mí. (estar)", "esté", "Ojalá + subjuntivo."),
      mc(
        "«The bike that my father left me is forty years old.»",
        ["La bici que me dejó mi padre tiene cuarenta años.", "La bici quien me dejó mi padre tiene cuarenta años.", "La bici que me dejaba mi padre es cuarenta años.", "La bici lo que me dejó mi padre tiene cuarenta años."],
        0,
        "Relativo que; edad con tener."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me dijo que nunca había sido tan feliz.", "Me contaba que de joven vivía en el norte.", "Me prometió que vendría a verme.", "Me dijo que ha llegado ayer."],
        [0, 1, 2],
        "Estilo indirecto en pasado: me dijo que había llegado el día anterior."
      ),
      toEs("I've done this trip for him.", "He hecho este viaje por él.", "Por = on behalf of / in honor of.", ["Hice este viaje por él."]),
      wo("Cada kilómetro me recordaba las historias que me contaba.", "Imperfecto + relativa en imperfecto.", "Every kilometer reminded me of the stories he used to tell me."),
    ]
  ),
  L(
    "el-primer-paso-de-salsa",
    "b1r-tema-timidez",
    "Repaso temático: vencer la timidez",
    "Clases de baile, conversaciones con desconocidos y pequeños logros — emociones y consejos.",
    "7 min",
    [
      sec(
        "Ser tímido",
        "Hablar de la timidez: me cuesta + infinitivo, me da vergüenza que + subjuntivo, me pongo nervioso cuando + indicativo.",
        [
          ["Me cuesta hablar con gente que no conozco.", "I find it hard to talk to people I don't know."],
          ["Me da vergüenza que me miren cuando bailo.", "I'm embarrassed when people look at me dancing."],
        ],
        [
          fb("Completa.", "Me pongo rojo cuando alguien me ___ la palabra. (dirigir)", "dirige", "Cuando + hábito → indicativo."),
          fb("Completa.", "Me da vergüenza que la gente ___ mis errores. (ver)", "vea", "Dar vergüenza que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Aconseja.", "No ___ tanto en lo que piensan los demás. (pensar, tú)", "pienses", "Negativo → subjuntivo."),
      fb("Aconseja.", "___ un paso cada día, aunque sea pequeño. (dar, tú)", "Da", "Mandato de tú."),
      fb("Completa.", "Desde que voy a clases de salsa, ___ a mucha gente. (conocer, perfecto)", "he conocido", "Desde que + perfecto."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["romper el hielo", "to break the ice"],
          ["tener dos pies izquierdos", "to have two left feet"],
          ["soltarse", "to loosen up"],
          ["sacar a bailar", "to ask to dance"],
        ],
        "Expresiones del baile y la vida social."
      ),
      mc(
        "«I never thought I would dance in public.»",
        ["Nunca pensé que bailaría en público.", "Nunca pensé que bailaré en público.", "Nunca pienso que bailaba en público.", "Nunca pensé que baile en público."],
        0,
        "Futuro del pasado → condicional."
      ),
      toEs("It's normal that you (tú) feel shy at first.", "Es normal que te sientas tímido al principio.", "Es normal que + subjuntivo reflexivo.", ["Es normal que te sientas tímida al principio.", "Es normal sentirse tímido al principio."]),
      wo("Lo que más me ayudó fue reírme de mí mismo.", "Lo que + pretérito + infinitivo reflexivo.", "What helped me most was laughing at myself."),
    ]
  ),
  L(
    "el-aula-bajo-el-puente",
    "b1r-tema-ensenar",
    "Repaso temático: enseñar y aprender",
    "Una profesora jubilada y sus nuevos alumnos — instrucciones de clase, deseos y experiencias.",
    "7 min",
    [
      sec(
        "En clase",
        "Una profesora da instrucciones (mandatos de vosotros/ustedes) y expresa deseos (quiero que, espero que).",
        [
          ["Abrid el cuaderno y escribid la fecha.", "Open your notebook and write the date."],
          ["Quiero que cada uno lea una frase en voz alta.", "I want each of you to read a sentence aloud."],
        ],
        [
          fb("Da la instrucción.", "___ atención, por favor. (prestar, vosotros)", "Prestad", "Mandato de vosotros."),
          fb("Expresa un deseo.", "Espero que todos ___ a leer este año. (aprender)", "aprendan", "Esperar que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "En cuarenta años de profesión, ___ a miles de alumnos. (enseñar, perfecto)", "he enseñado", "Perfecto para una trayectoria hasta hoy."),
      fb("Completa.", "Cuando me jubilé, pensé que ya no ___ a dar clase. (volver, condicional)", "volvería", "Futuro del pasado → condicional."),
      fb("Completa.", "No habléis mientras ___ vuestros compañeros. (hablar)", "hablan", "Mientras + acción simultánea presente → indicativo."),
      mc(
        "«The children who come to class have taught me a lot.»",
        ["Los niños que vienen a clase me han enseñado mucho.", "Los niños quienes vienen a clase me han enseñado mucho.", "Los niños que vienen a clase me enseñaban mucho ayer.", "Los niños lo que vienen a clase me han enseñado mucho."],
        0,
        "Relativo que + perfecto."
      ),
      ms(
        "¿Qué instrucciones son correctas?",
        ["No copiéis del compañero.", "Levantad la mano para hablar.", "Sentaos en círculo.", "No gritad."],
        [0, 1, 2],
        "Negativo de vosotros → subjuntivo: no gritéis."
      ),
      toEs("I didn't know that teaching again would make me so happy.", "No sabía que volver a enseñar me haría tan feliz.", "Imperfecto + condicional (futuro del pasado).", ["No sabía que enseñar otra vez me haría tan feliz."]),
      wo("Nunca es tarde para aprender algo nuevo.", "Nunca es tarde para + infinitivo.", "It's never too late to learn something new."),
    ]
  ),
  L(
    "el-fotografo-accidental",
    "b1r-tema-talento-oculto",
    "Repaso temático: un talento inesperado",
    "Aficiones que se convierten en algo más — sorpresas, logros y el reconocimiento de los demás.",
    "7 min",
    [
      sec(
        "La sorpresa",
        "Reaccionar ante un éxito inesperado: no me puedo creer que…, me sorprende que…, nunca había pensado que…",
        [
          ["No me puedo creer que mi foto esté en una galería.", "I can't believe my photo is in a gallery."],
          ["Nunca había enseñado mis fotos a nadie.", "I had never shown my photos to anyone."],
        ],
        [
          fb("Reacciona.", "Me sorprende que alguien ___ comprar mi foto. (querer)", "quiera", "Sorprender que + subjuntivo."),
          fb("Reacciona.", "Estoy seguro de que ___ más oportunidades. (tener, tú, futuro)", "tendrás", "Certeza → indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "La foto ___ tomada desde la furgoneta de reparto. (ser, pretérito)", "fue", "Pasiva con ser."),
      fb("Completa.", "Llevo años haciendo fotos, pero nunca las ___ enseñado a nadie. (haber, yo, perfecto)", "he", "Perfecto: nunca las he enseñado."),
      fb("Completa.", "Si sigues así, algún día ___ tu propia exposición. (tener, futuro)", "tendrás", "Si + presente + futuro."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la exposición", "exhibition"],
          ["el encuadre", "framing"],
          ["revelar", "to develop (photos)"],
          ["la galería", "gallery"],
        ],
        "Vocabulario de fotografía."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me encanta que te reconozcan por fin.", "La foto que más me gusta es la del mercado.", "Te recomiendo que te presentes a un concurso.", "Ojalá que ganarás el premio."],
        [0, 1, 2],
        "Ojalá + subjuntivo: ganes."
      ),
      toEs("The photo that changed everything was taken by accident.", "La foto que lo cambió todo fue tomada por casualidad.", "Relativa + pasiva con ser.", ["La foto que cambió todo fue tomada por casualidad.", "La foto que lo cambió todo se tomó por casualidad.", "La foto que lo cambió todo fue hecha por accidente."]),
      wo("A veces el talento aparece donde menos lo esperas.", "Donde + subjuntivo/indicativo; aquí indicativo general (esperas).", "Sometimes talent turns up where you least expect it."),
    ]
  ),
];
