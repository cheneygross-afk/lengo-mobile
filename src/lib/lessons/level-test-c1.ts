// Synced from cheneygross-afk/lengo:src/lib/lessons/level-test-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import { authoring } from "./authoring";
import { dict, wr } from "./skills-authoring";
import { listeningItems, readingSection, type LevelTest } from "./level-test-authoring";

// The C1 level test (see level-tests.ts): only C1 material -- advanced
// subjunctive and concessives, nominalization, gerund and infinitive,
// passive constructions, free indirect style, por and para in fixed
// expressions, verbs with prepositions (queísmo, dequeísmo), discourse
// markers, emphasis, conjecture with the future and conditional, voseo,
// formal letters and academic hedging.
const { fe, sec } = authoring("es");

export const LEVEL_TEST_C1: LevelTest = {
  title: "Prueba de nivel Maestría: ¿listo para el nivel Profesional y Académico?",
  summary:
    "La prueba final del nivel Maestría: comprensión de lectura y auditiva, gramática y vocabulario escribiendo en español, y un texto argumentativo. 46 preguntas sobre lo que se enseña en el nivel Maestría; se aprueba con un 70%.",
  duration: "60 min",
  sections: [
    readingSection(
      "Parte 1 · Lectura: un ensayo",
      "Lea el fragmento de ensayo y conteste las cinco preguntas.",
      [
        "La generalización del teletrabajo ha traído consigo una transformación de los hábitos urbanos cuya magnitud apenas empezamos a calibrar. Ahora bien, conviene no caer en el determinismo: no es que la tecnología haya vaciado los centros de las ciudades, sino que ha acelerado tendencias que ya estaban en marcha, como el encarecimiento de la vivienda o la búsqueda de espacios más amplios.",
        "Dicho esto, sería ingenuo negar sus efectos. La reducción de los desplazamientos diarios ha supuesto un alivio para miles de familias; en cambio, el pequeño comercio de las zonas de oficinas ha visto caer sus ventas de forma drástica.",
        "En definitiva, el reto para las administraciones no radica tanto en frenar el fenómeno como en gestionar sus consecuencias de manera equitativa.",
      ],
      [
        [
          "Según el autor, la tecnología…",
          ["ha acelerado tendencias que ya existían", "es la única causa del cambio urbano", "no ha tenido ningún efecto", "ha abaratado la vivienda"],
          "«No es que la tecnología haya vaciado los centros…, sino que ha acelerado tendencias que ya estaban en marcha.»",
        ],
        [
          "¿Qué función cumple «Dicho esto»?",
          ["Matizar lo anterior sin negarlo", "Introducir un ejemplo", "Expresar una consecuencia inevitable", "Cambiar por completo de tema"],
          "«Dicho esto» acepta lo dicho y añade una matización: aunque no hay determinismo, los efectos existen.",
        ],
        [
          "¿Quién ha salido perjudicado?",
          ["El pequeño comercio de las zonas de oficinas", "Las familias que se desplazan menos", "Las administraciones", "Las grandes empresas tecnológicas"],
          "«El pequeño comercio de las zonas de oficinas ha visto caer sus ventas de forma drástica.»",
        ],
        [
          "¿Cuál es, para el autor, el reto de las administraciones?",
          ["Gestionar las consecuencias de forma equitativa", "Frenar el teletrabajo", "Bajar el precio de la vivienda", "Volver a llenar las oficinas"],
          "«El reto… no radica tanto en frenar el fenómeno como en gestionar sus consecuencias de manera equitativa.»",
        ],
        [
          "«No radica tanto en frenar el fenómeno como en gestionarlo» significa que…",
          ["lo importante es gestionarlo más que frenarlo", "hay que frenarlo y gestionarlo por igual", "es imposible gestionarlo", "lo principal es frenarlo"],
          "«No tanto A como B» da más peso a B.",
        ],
      ]
    ),
    readingSection(
      "Parte 1 · Lectura: un fragmento narrativo",
      "Lea el fragmento y conteste las preguntas.",
      [
        "Elena dobló la carta y la guardó en el bolsillo del abrigo. Así que se iba. Después de veinte años, se iba sin más, con cuatro líneas escritas a toda prisa. ¿Y ella qué? ¿Iba a quedarse esperando, como siempre, a que él decidiera por los dos?",
        "Miró por la ventana: seguía lloviendo sobre los tejados del barrio, igual que la tarde en que se conocieron. No lloraría. Mañana llamaría a su hermana, vendería el piso y, quién sabe, quizá por fin haría aquel viaje que llevaba años posponiendo.",
      ],
      [
        [
          "¿Qué técnica predomina en «Así que se iba… ¿Y ella qué?»?",
          ["El estilo indirecto libre: los pensamientos de Elena sin verbo introductor", "El estilo directo, con comillas", "Un narrador en primera persona", "Un diálogo entre Elena y su hermana"],
          "La voz del narrador adopta los pensamientos y las preguntas de Elena sin «pensó que»: estilo indirecto libre.",
        ],
        [
          "¿Qué noticia trae la carta?",
          ["Que él la deja", "Una invitación a un viaje", "La venta del piso", "Noticias de su hermana"],
          "«Así que se iba. Después de veinte años, se iba sin más.»",
        ],
        [
          "¿Cómo reacciona Elena?",
          ["Decide no llorar y tomar sus propias decisiones", "Se echa a llorar", "Sale a buscarlo", "Le escribe una respuesta"],
          "«No lloraría. Mañana llamaría a su hermana, vendería el piso…»",
        ],
        [
          "¿Qué valor tienen «llamaría» y «vendería»?",
          ["Futuro visto desde el pasado del personaje", "Cortesía", "Hipótesis imposible", "Conjetura sobre el pasado"],
          "En el estilo indirecto libre, el condicional expresa lo que el personaje piensa hacer: el futuro desde su pasado.",
        ],
        [
          "¿Qué le recuerda la lluvia a Elena?",
          ["La tarde en que se conocieron", "Su infancia", "El viaje que hizo", "La casa de su hermana"],
          "«Igual que la tarde en que se conocieron.»",
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
            "Cuando hablamos de la sostenibilidad del turismo, solemos centrarnos en el número de visitantes.",
            "Sin embargo, el factor decisivo no es tanto cuántos llegan como la forma en que se distribuyen en el tiempo y en el espacio.",
            "Una ciudad puede absorber millones de turistas al año si estos no se concentran en los mismos tres barrios y en los mismos dos meses.",
            "De ahí que las políticas más eficaces no sean las que limitan la llegada de visitantes, sino las que diversifican la oferta y desestacionalizan la demanda.",
          ],
          [
            [
              1,
              "Escuche. Según la ponente, ¿cuál es el factor decisivo?",
              ["Cómo se distribuyen los visitantes en el tiempo y en el espacio", "El número total de visitantes", "El precio de los hoteles", "La nacionalidad de los turistas"],
              "«El factor decisivo no es tanto cuántos llegan como la forma en que se distribuyen en el tiempo y en el espacio.»",
            ],
            [
              2,
              "¿Qué problema describe?",
              ["La concentración en pocos barrios y pocos meses", "La falta de turistas", "El exceso de hoteles en el campo", "La contaminación de los aviones"],
              "«Si estos no se concentran en los mismos tres barrios y en los mismos dos meses.»",
            ],
            [
              3,
              "¿Qué políticas considera más eficaces?",
              ["Las que diversifican la oferta y reparten la demanda a lo largo del año", "Las que limitan la llegada de visitantes", "Las que suben los impuestos", "Las que cierran barrios al turismo"],
              "«Las que diversifican la oferta y desestacionalizan la demanda.»",
            ],
            [3, "¿Qué introduce «De ahí que»?", ["Una consecuencia", "Una condición", "Una concesión", "Un ejemplo"], "«De ahí que» (+ subjuntivo) introduce una consecuencia de lo dicho."],
          ]
        ),
        ...listeningItems(
          [
            "¿Has visto que la oficina está cerrada? Habrán tenido algún problema con la luz, porque ayer ya parpadeaban las lámparas.",
            "O a lo mejor el jefe ha decidido darnos el día libre, aunque eso sería un milagro. Sea como sea, digan lo que digan, yo no me voy a quedar aquí esperando: me vuelvo a casa y trabajo desde allí.",
          ],
          [
            [
              0,
              "Escuche. ¿Qué supone el hablante sobre la oficina cerrada?",
              ["Que ha habido un problema con la luz", "Que es festivo", "Que el jefe está enfermo", "Que han cambiado la cerradura"],
              "«Habrán tenido algún problema con la luz»: futuro compuesto de conjetura.",
            ],
            [
              1,
              "¿Qué opina de que el jefe les dé el día libre?",
              ["Que sería muy raro", "Que es lo más probable", "Que ya lo había anunciado", "Que es lo justo"],
              "«Aunque eso sería un milagro.»",
            ],
            [1, "¿Qué decide hacer?", ["Volver a casa y trabajar desde allí", "Esperar a que abran", "Llamar al jefe", "Ir a otra oficina"], "«Me vuelvo a casa y trabajo desde allí.»"],
            [
              0,
              "«Habrán tenido algún problema» expresa…",
              ["una suposición sobre el pasado reciente", "un hecho seguro", "una orden", "un deseo"],
              "El futuro compuesto (habrán tenido) expresa conjetura sobre algo ya ocurrido.",
            ],
          ]
        ),
        dict("Por mucho que insistas, no pienso cambiar de opinión.", "Por mucho que insistas, no pienso cambiar de opinión. Por mucho que + subjuntivo: concesiva."),
        dict("No es que no quiera ayudarte, es que no puedo.", "No es que no quiera ayudarte, es que no puedo. «No es que» + subjuntivo niega una causa para dar la verdadera."),
      ],
    },
    sec(
      "Parte 3 · Gramática y vocabulario",
      "Escriba en español las palabras en negrita. Se aceptan pequeños errores de tildes, con una nota.",
      [],
      [
        fe("Por mucho que ___, no conseguirás convencerla.", "insistas", "However much [you insist], you won't manage to convince her.", "Por mucho que + subjuntivo: insistas."),
        fe("Pase lo que ___, te apoyaré.", "pase", "Whatever [happens], I'll support you.", "Fórmula concesiva universal: pase lo que pase."),
        fe("Aunque ___ razón, no se lo diría.", "tuviera", "Even if [he were] right, I wouldn't tell him.", "Aunque + imperfecto de subjuntivo: hipótesis poco probable.", ["tuviese"]),
        fe("El gobierno anunció la ___ de los impuestos.", "subida", "The government announced the [rise] in taxes.", "Nominalización: subir → la subida.", ["elevación"]),
        fe("Tras la ___ del acuerdo, ambas partes se reunieron.", "firma", "After the [signing] of the agreement, both parties met.", "Nominalización: firmar → la firma."),
        fe("Lo vi ___ la calle.", "cruzando", "I saw him [crossing] the street.", "Con verbos de percepción: gerundio (acción en curso) o infinitivo (acción completa).", ["cruzar"]),
        fe(
          "___ de casa, me di cuenta de que había olvidado las llaves.",
          "Al salir",
          "[On leaving] the house, I realised I had forgotten my keys.",
          "Al + infinitivo expresa simultaneidad: al salir."
        ),
        fe(
          "Los resultados ___ la semana próxima.",
          "serán publicados",
          "The results [will be published] next week.",
          "Pasiva con ser (registro formal) o pasiva refleja: se publicarán.",
          ["se publicarán"]
        ),
        fe(
          "___ al presupuesto, no hay cambios.",
          "Por lo que respecta",
          "[As far as] the budget [is concerned], there are no changes.",
          "Locución formal: por lo que respecta a (o en lo que respecta a, con respecto a).",
          ["En lo que respecta", "En lo que se refiere", "Con respecto", "Respecto"]
        ),
        fe("Estoy convencido ___ tiene razón.", "de que", "I'm convinced [that] he's right.", "Se está convencido de algo: de que. Omitir el de sería queísmo."),
        fe("Pienso ___ deberíamos esperar.", "que", "I think [that] we should wait.", "Se piensa algo: pienso que. «Pienso de que» es dequeísmo."),
        fe("Me acuerdo ___ vivíamos en Sevilla.", "de que", "I remember [that] we used to live in Seville.", "Acordarse de algo: me acuerdo de que."),
        fe("Insistió ___ pagar él.", "en", "He insisted [on] paying himself.", "Insistir en."),
        fe(
          "Es una propuesta interesante; ___, no tenemos presupuesto.",
          "ahora bien",
          "It's an interesting proposal; [that said], we have no budget.",
          "Marcador contraargumentativo: ahora bien (no obstante, sin embargo, dicho esto, con todo).",
          ["no obstante", "sin embargo", "dicho esto", "con todo", "aun así"]
        ),
        fe(
          "Has trabajado mucho; ___, mereces descansar.",
          "por consiguiente",
          "You've worked hard; [consequently], you deserve a rest.",
          "Marcador consecutivo: por consiguiente (por lo tanto, en consecuencia, así pues).",
          ["por lo tanto", "por tanto", "en consecuencia", "así pues", "así que"]
        ),
        fe("No contesta. ___ dormido.", "Estará", "He's not answering. [He must be] asleep.", "Conjetura sobre el presente: futuro simple, estará."),
        fe("Cuando llegamos, ___ las doce.", "serían", "When we arrived, [it must have been] twelve o'clock.", "Conjetura sobre el pasado: condicional, serían."),
        fe(
          "¿Dónde ___ las llaves? No las encuentro.",
          "habré puesto",
          "Where [can I have put] my keys? I can't find them.",
          "Conjetura sobre un pasado reciente: futuro compuesto, habré puesto.",
          ["habré dejado"]
        ),
        fe("Fue entonces ___ comprendí todo.", "cuando", "It was then [that] I understood everything.", "En la oración hendida con un adverbio de tiempo, el relativo es cuando (no «que»)."),
        fe("¡Lo ___ que es tu hermano!", "alto", "How [tall] your brother is!", "Lo + adjetivo + que, con valor ponderativo: ¡lo alto que es!"),
        fe("Vos ___ muy buena persona.", "sos", "You [are] a very good person. (vos)", "Voseo: vos sos (tú eres)."),
        fe("Vos ___ razón.", "tenés", "You [are] right. (vos)", "Voseo: vos tenés razón (tú tienes)."),
        fe(
          "Le ruego que me ___ a la mayor brevedad.",
          "conteste",
          "I would ask you to [reply] as soon as possible.",
          "Rogar que + subjuntivo, de usted: me conteste (o me responda).",
          ["responda"]
        ),
        fe("___ señora: Le escribo para presentar una reclamación.", "Estimada", "[Dear] Madam: I am writing to make a complaint.", "Saludo formal: Estimada señora (o Distinguida señora), seguido de dos puntos.", ["Distinguida", "Apreciada"]),
        fe(
          "Los datos ___ que la hipótesis es correcta.",
          "parecen indicar",
          "The data [seem to indicate] that the hypothesis is correct.",
          "Atenuación académica: parecen indicar (sugieren, apuntan a).",
          ["sugieren", "apuntan a", "indican", "parecen sugerir"]
        ),
      ]
    ),
  ],
  exercises: [
    wr(
      "Parte 4 · Expresión escrita. Redacte un texto argumentativo para una revista: ¿debería limitarse el número de pisos turísticos en el centro de las ciudades? Plantee una tesis, defiéndala con argumentos, refute una objeción y concluya. Cuide el registro formal.",
      [170, 220],
      [
        "Una tesis clara al principio",
        "Argumentos ordenados con marcadores (en primer lugar, asimismo, por consiguiente...)",
        "Una concesión y su refutación (si bien..., ahora bien...; aunque + subjuntivo)",
        "Registro formal: nominalizaciones y estructuras impersonales",
        "Una conclusión que retome la tesis (en definitiva, en suma...)",
      ],
      "La proliferación de pisos turísticos en los centros urbanos plantea un dilema que las administraciones ya no pueden eludir. A mi juicio, su número debería limitarse, si bien no con prohibiciones generales, sino mediante una regulación por barrios. En primer lugar, la conversión de viviendas en alojamientos de corta estancia reduce la oferta de alquiler residencial y, por consiguiente, encarece los precios para quienes viven y trabajan en la ciudad. Asimismo, la sustitución de vecinos por visitantes transforma el tejido comercial: las tiendas de proximidad ceden su lugar a negocios orientados exclusivamente al turista. Cabe objetar que estos pisos generan ingresos para pequeños propietarios y dinamizan la economía local. Ahora bien, dichos beneficios se concentran en unos pocos, mientras que los costes recaen sobre el conjunto de la población. Por mucho que se defienda la libertad de mercado, la vivienda no es un bien cualquiera, sino la condición misma de la vida en común. En definitiva, limitar los pisos turísticos no supone rechazar el turismo, sino garantizar que la ciudad siga siendo habitable para quienes la sostienen a diario.",
      "Marcadores como «en primer lugar», «asimismo», «ahora bien» y «en definitiva» estructuran el texto; «si bien», «cabe objetar» y «por mucho que se defienda» introducen la concesión, y las nominalizaciones (la proliferación, la conversión, la sustitución) dan el registro formal."
    ),
  ],
};
