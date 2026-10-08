// Synced from cheneygross-afk/lengo:src/lib/lessons/level-test-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import { authoring } from "./authoring";
import { dict, wr } from "./skills-authoring";
import { listeningItems, readingSection, type LevelTest } from "./level-test-authoring";

// The B2 level test (see level-tests.ts): only B2 material -- the
// subjunctive in relative and adverbial clauses, the imperfect and
// pluperfect subjunctive, si-clauses and como si, reported speech, ser,
// estar and haber nuances, verbs of change, connectors, cleft sentences,
// lo + adjective + que, and cuyo / el cual.
const { fe, sec } = authoring("es");

export const LEVEL_TEST_B2: LevelTest = {
  title: "Prueba de nivel Avanzado: ¿listo para el nivel Maestría?",
  summary:
    "La prueba final del nivel Avanzado: comprensión de lectura y auditiva, gramática y vocabulario escribiendo en español, y un texto de opinión. 46 preguntas sobre lo que enseña de nivel Avanzado; se aprueba con un 70%.",
  duration: "55 min",
  sections: [
    readingSection(
      "Parte 1 · Lectura: un artículo de opinión",
      "Lee el artículo y contesta las cinco preguntas.",
      [
        "Desde que varias empresas españolas empezaron a probar la semana laboral de cuatro días, el debate no ha dejado de crecer. Sus defensores sostienen que, siempre que se mantenga el sueldo, los empleados trabajan más concentrados y faltan menos por enfermedad.",
        "Sin embargo, no todos los sectores pueden adaptarse con la misma facilidad: un hospital o un restaurante no pueden cerrar un día más a la semana sin contratar a más personal. Por lo tanto, quienes critican la medida advierten de que podría aumentar los costes de las pequeñas empresas.",
        "Lo que parece claro es que, si los resultados de las pruebas hubieran sido negativos, nadie estaría hablando ya de ampliarlas. Aunque todavía es pronto para sacar conclusiones, muchos trabajadores ya se preguntan cuándo les llegará el turno.",
      ],
      [
        [
          "Según sus defensores, la semana de cuatro días funciona…",
          ["si no se reduce el sueldo", "solo en los hospitales", "aunque baje el sueldo", "únicamente en las empresas grandes"],
          "«Siempre que se mantenga el sueldo»: siempre que + subjuntivo expresa una condición.",
        ],
        [
          "¿Por qué algunos sectores lo tienen más difícil?",
          ["Necesitarían contratar a más personal", "Sus empleados no quieren", "Ganan menos dinero", "Ya trabajan cuatro días"],
          "«No pueden cerrar un día más a la semana sin contratar a más personal.»",
        ],
        [
          "¿Qué temen los críticos?",
          ["Que suban los costes de las pequeñas empresas", "Que los empleados se pongan enfermos", "Que bajen los sueldos", "Que cierren los hospitales"],
          "«Advierten de que podría aumentar los costes de las pequeñas empresas.»",
        ],
        [
          "¿Qué se deduce de «si los resultados hubieran sido negativos, nadie estaría hablando ya de ampliarlas»?",
          ["Que los resultados han sido positivos", "Que los resultados fueron negativos", "Que todavía no hay resultados", "Que nadie habla de las pruebas"],
          "Es una condición irreal sobre el pasado: los resultados no fueron negativos, y por eso se habla de ampliarlas.",
        ],
        [
          "¿Cuál es la conclusión del texto?",
          ["Es pronto para sacar conclusiones, pero hay mucho interés", "La medida ha sido un fracaso", "Todas las empresas deberían aplicarla ya", "Los trabajadores no la quieren"],
          "«Aunque todavía es pronto para sacar conclusiones, muchos trabajadores ya se preguntan cuándo les llegará el turno.»",
        ],
      ]
    ),
    readingSection(
      "Parte 1 · Lectura: un relato",
      "Lee el relato y contesta las preguntas.",
      [
        "Cuando mi abuela tenía veinte años, se fue a vivir a Buenos Aires. Siempre nos contaba que el primer día se perdió en el puerto y que un desconocido, cuyo nombre nunca supo, la acompañó hasta la pensión.",
        "Allí conoció a una costurera que le dijo que, si quería trabajar, fuera a verla al día siguiente. Mi abuela aprendió el oficio tan bien que, con los años, se convirtió en la modista más solicitada del barrio.",
        "Lo curioso es que ella nunca había querido coser: soñaba con ser maestra. Cuando le preguntábamos si se arrepentía, contestaba que no, que la vida la había llevado por otro camino y que había sido feliz.",
      ],
      [
        ["¿Quién ayudó a la abuela el primer día?", ["Un desconocido", "La costurera", "Un policía", "Su marido"], "«Un desconocido, cuyo nombre nunca supo, la acompañó hasta la pensión.»"],
        [
          "¿Qué le dijo la costurera?",
          ["Que fuera a verla al día siguiente si quería trabajar", "Que no tenía trabajo para ella", "Que volviera a su país", "Que estudiara para ser maestra"],
          "En estilo indirecto, la orden pasa a imperfecto de subjuntivo: «que fuera a verla al día siguiente».",
        ],
        [
          "¿En qué se convirtió la abuela?",
          ["En la modista más solicitada del barrio", "En maestra", "En la dueña de la pensión", "En una costurera del puerto"],
          "«Se convirtió en la modista más solicitada del barrio.»",
        ],
        [
          "¿Qué es «lo curioso» de su historia?",
          ["Que nunca había querido coser", "Que nunca aprendió el oficio", "Que volvió a su pueblo", "Que no le gustaba Buenos Aires"],
          "«Lo curioso es que ella nunca había querido coser: soñaba con ser maestra.»",
        ],
        [
          "¿Se arrepentía de su vida?",
          ["No: decía que había sido feliz", "Sí, porque quería ser maestra", "Sí, porque se perdió", "El texto no lo dice"],
          "«Contestaba que no… y que había sido feliz.»",
        ],
      ]
    ),
    {
      heading: "Parte 2 · Comprensión auditiva",
      body: [
        "Activa el sonido. Cada pregunta reproduce una parte de una grabación: escúchala las veces que quieras y elige la respuesta. Las dos últimas son dictados: escribe exactamente lo que oyes.",
      ],
      checkpoint: [
        ...listeningItems(
          [
            "Buenas tardes. Hoy hablamos con una investigadora que ha estudiado cómo usamos el móvil.",
            "Según sus datos, consultamos el teléfono una media de ochenta veces al día, aunque la mayoría de la gente cree que lo hace menos de veinte.",
            "Lo más preocupante, dice, no es el tiempo total, sino las interrupciones: cada vez que miramos una notificación, tardamos varios minutos en volver a concentrarnos.",
            "Su consejo es sencillo: que desactivemos las notificaciones que no sean urgentes y que dejemos el móvil en otra habitación mientras trabajamos.",
          ],
          [
            [
              1,
              "Escucha. ¿Cuántas veces al día miramos el móvil, según el estudio?",
              ["Unas ochenta", "Menos de veinte", "Unas cuarenta", "Más de cien"],
              "«Una media de ochenta veces al día.»",
            ],
            [
              1,
              "¿Qué cree la mayoría de la gente?",
              ["Que lo mira menos de veinte veces", "Que lo mira ochenta veces", "Que no lo usa por la noche", "Que las notificaciones no molestan"],
              "«La mayoría de la gente cree que lo hace menos de veinte.»",
            ],
            [2, "Según la investigadora, ¿qué es lo más preocupante?", ["Las interrupciones", "El tiempo total", "El precio de los móviles", "La luz de la pantalla"], "«Lo más preocupante no es el tiempo total, sino las interrupciones.»"],
            [
              3,
              "¿Qué recomienda?",
              ["Desactivar las notificaciones no urgentes y alejar el móvil al trabajar", "No usar nunca el móvil", "Comprar un móvil más sencillo", "Mirar el móvil cada veinte minutos"],
              "«Que desactivemos las notificaciones que no sean urgentes y que dejemos el móvil en otra habitación.»",
            ],
          ]
        ),
        ...listeningItems(
          [
            "Si hubiera sabido lo difícil que era montar un restaurante, quizá no lo habría hecho. Pero no me arrepiento. El primer año perdimos dinero, y mi socio estuvo a punto de abandonar.",
            "Fue entonces cuando decidimos cambiar la carta: en lugar de platos caros, empezamos a ofrecer un menú del día a buen precio. Desde entonces, el local se llena todos los mediodías.",
            "Lo que aprendí es que no hay que empeñarse en una idea, sino escuchar a los clientes.",
          ],
          [
            [0, "Escucha. ¿Se arrepiente de haber abierto el restaurante?", ["No", "Sí, totalmente", "Sí, porque perdió a su socio", "No lo dice"], "«Pero no me arrepiento.»"],
            [0, "¿Qué pasó el primer año?", ["Perdieron dinero", "Ganaron mucho dinero", "Cerraron el local", "Cambiaron de socio"], "«El primer año perdimos dinero.»"],
            [
              1,
              "¿Qué cambio hicieron?",
              ["Ofrecer un menú del día a buen precio", "Subir los precios", "Abrir solo por la noche", "Contratar a un chef famoso"],
              "«En lugar de platos caros, empezamos a ofrecer un menú del día a buen precio.»",
            ],
            [
              2,
              "¿Qué aprendió?",
              ["Que hay que escuchar a los clientes", "Que hay que mantener la idea original", "Que es mejor trabajar solo", "Que los platos caros dan más dinero"],
              "«No hay que empeñarse en una idea, sino escuchar a los clientes.»",
            ],
          ]
        ),
        dict("Me pidió que la llamara en cuanto llegara.", "Me pidió que la llamara en cuanto llegara. Pedir que en pasado + imperfecto de subjuntivo.", ["Me pidió que la llamase en cuanto llegase."]),
        dict("Fue mi hermano quien lo descubrió.", "Fue mi hermano quien lo descubrió. Una oración hendida que destaca quién lo hizo."),
      ],
    },
    sec(
      "Parte 3 · Gramática y vocabulario",
      "Escribe en español las palabras en negrita. Se aceptan pequeños errores de tildes, con una nota.",
      [],
      [
        fe("Busco a alguien que ___ chino.", "hable", "I'm looking for someone who [speaks] Chinese.", "Alguien desconocido o que quizá no existe: subjuntivo, hable."),
        fe("No hay nadie que ___ la respuesta.", "sepa", "There's no one who [knows] the answer.", "Antecedente negativo (nadie): subjuntivo, sepa."),
        fe("Te lo digo para que lo ___.", "sepas", "I'm telling you so that [you know].", "Para que + subjuntivo: sepas."),
        fe("Cuando ___ mayor, viviré en el campo.", "sea", "When [I'm] older, I'll live in the country.", "Cuando + futuro: subjuntivo, sea."),
        fe("Aunque ___ mañana, iremos a la playa.", "llueva", "Even if [it rains] tomorrow, we'll go to the beach.", "Aunque + algo hipotético: subjuntivo, llueva."),
        fe("Antes de que ___ los invitados, limpia la casa.", "lleguen", "Before the guests [arrive], clean the house.", "Antes de que siempre pide subjuntivo: lleguen.", ["vengan"]),
        fe("Mi madre quería que yo ___ medicina.", "estudiara", "My mother wanted me [to study] medicine.", "Verbo principal en pasado: imperfecto de subjuntivo, estudiara (o estudiase).", ["estudiase"]),
        fe("Ojalá ___ aquí ahora.", "estuvieras", "I wish [you were] here now.", "Deseo poco probable o imposible: ojalá + imperfecto de subjuntivo.", ["estuvieses", "estuviera", "estuviese"]),
        fe("Si ___ dinero, viajaría por todo el mundo.", "tuviera", "If [I had] money, I would travel all over the world.", "Condición irreal: si + imperfecto de subjuntivo.", ["tuviese"]),
        fe("Habla como si lo ___ todo.", "supiera", "He talks as if [he knew] everything.", "Como si siempre lleva imperfecto (o pluscuamperfecto) de subjuntivo.", ["supiese"]),
        fe(
          "Si me lo hubieras dicho, te ___.",
          "habría ayudado",
          "If you had told me, [I would have helped] you.",
          "Irreal en el pasado: si + pluscuamperfecto de subjuntivo, condicional compuesto (o hubiera ayudado).",
          ["hubiera ayudado", "hubiese ayudado"]
        ),
        fe(
          "Si hubiéramos salido antes, no ___ el tren.",
          "habríamos perdido",
          "If we had left earlier, we wouldn't [have missed] the train.",
          "Condicional compuesto (o pluscuamperfecto de subjuntivo): no habríamos perdido.",
          ["hubiéramos perdido", "hubiésemos perdido"]
        ),
        fe("Me dijo que ___ cansado.", "estaba", "He told me that [he was] tired.", "«Estoy cansado» en estilo indirecto pasado: estaba."),
        fe("Me preguntó si ___ ir con ellos.", "quería", "She asked me if [I wanted] to go with them.", "Pregunta indirecta en pasado: quería."),
        fe("Me pidió que la ___ al día siguiente.", "llamara", "She asked me [to call] her the next day.", "Pedir que en pasado: imperfecto de subjuntivo, llamara.", ["llamase"]),
        fe("La fiesta ___ en casa de Luis.", "es", "The party [is] at Luis's house.", "Para el lugar de un evento se usa ser: la fiesta es en casa de Luis."),
        fe("Esta manzana todavía no ___ madura.", "está", "This apple [is] not ripe yet.", "Estado: estar maduro (ser maduro es una cualidad de una persona)."),
        fe("Al oír la noticia, ___ muy nervioso.", "se puso", "When he heard the news, [he got] very nervous.", "Cambio rápido y pasajero de estado: ponerse."),
        fe("Después de años de estudio, ___ médica.", "se hizo", "After years of study, [she became] a doctor.", "Cambio por esfuerzo propio: hacerse (o llegar a ser).", ["llegó a ser"]),
        fe("La rana ___ en un príncipe.", "se convirtió", "The frog [turned] into a prince.", "Transformación completa: convertirse en.", ["se transformó"]),
        fe("Está lloviendo; ___, saldremos.", "sin embargo", "It's raining; [however], we'll go out.", "Contraste: sin embargo (no obstante, aun así).", ["no obstante", "aun así"]),
        fe("___ estaba enfermo, no fue a clase.", "Como", "[Since] he was ill, he didn't go to class.", "Causa al principio de la frase: como (ya que, puesto que, dado que).", ["Ya que", "Puesto que", "Dado que"]),
        fe("___ rompió el jarrón fue el gato.", "Quien", "[The one who] broke the vase was the cat.", "Oración hendida: quien (o el que) rompió el jarrón fue el gato.", ["El que"]),
        fe("La casa, ___ dueño vive en París, está en venta.", "cuyo", "The house, [whose] owner lives in Paris, is for sale.", "Cuyo concuerda con lo poseído: cuyo dueño."),
        fe("No sabes lo ___ que es este examen.", "difícil", "You don't know how [difficult] this exam is.", "Lo + adjetivo + que: lo difícil que es."),
      ]
    ),
  ],
  exercises: [
    wr(
      "Parte 4 · Expresión escrita. Escribe un texto de opinión para el blog de tu escuela: ¿deberían prohibirse los móviles en los institutos? Da tu opinión con argumentos, considera la postura contraria y termina con una conclusión.",
      [140, 190],
      [
        "Presenta tu opinión con claridad al principio",
        "Da al menos dos argumentos unidos con conectores (además, por lo tanto, ya que...)",
        "Reconoce la postura contraria (aunque, sin embargo, es cierto que...)",
        "Usa al menos una oración condicional irreal (si + imperfecto de subjuntivo)",
        "Termina con una conclusión (en conclusión, por todo ello...)",
      ],
      "En mi opinión, los móviles no deberían prohibirse en los institutos, sino regularse. Es cierto que muchos alumnos se distraen con las redes sociales y que, en ocasiones, el móvil se usa para molestar a otros compañeros. Sin embargo, prohibirlo por completo sería ignorar que es una herramienta muy útil: con él podemos buscar información, usar diccionarios o grabar una explicación para repasarla en casa. Además, si los profesores enseñaran a usarlo con responsabilidad, los alumnos aprenderían algo que necesitarán toda la vida. Por lo tanto, creo que la solución es establecer normas claras: el móvil debería estar en la mochila salvo cuando el profesor pida que lo usemos para una actividad concreta. Aunque esta medida no resuelva todos los problemas, al menos evitaría que el instituto se quedara atrás. En conclusión, prohibir es más fácil que educar, pero educar es más eficaz.",
      "Los conectores ordenan el argumento (sin embargo, además, por lo tanto, en conclusión); «si enseñaran… aprenderían» es una condición irreal, y «aunque no resuelva» una concesión con subjuntivo."
    ),
  ],
};
