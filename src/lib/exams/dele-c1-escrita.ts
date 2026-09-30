// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c1-escrita.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C1 practice exam -- Prueba 3: Destrezas integradas: comprensión
// auditiva y expresión e interacción escritas. 80 minutes, 2 tasks.
// Tarea 1 starts from a recorded talk, as the real one does.
export const DELE_C1_ESCRITA: ExamPaper = {
  id: "escrita",
  kind: "writing",
  title: "Destrezas integradas: comprensión auditiva y expresión e interacción escritas",
  minutes: 80,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar dos veces una conferencia. Tome notas y, a continuación, redacte un texto. Número de palabras: entre 220 y 250.",
      write: [
        {
          prompt:
            "Usted colabora con una revista universitaria y le han pedido un artículo sobre la semana laboral de cuatro días. Redacte un texto en el que: resuma las experiencias y los datos que presenta la conferenciante; exponga los argumentos a favor y en contra que menciona; dé su opinión razonada sobre si esta medida sería adecuada en su país o en su sector.",
          input: {
            audio: {
              label: "Conferencia",
              lines: [
                {
                  voice: "f",
                  text: "Buenas tardes. En los últimos años, la semana laboral de cuatro días ha pasado de ser una utopía a convertirse en un experimento real en varios países. El caso más citado es el del Reino Unido, donde en 2022 sesenta y una empresas redujeron la jornada a cuatro días sin rebajar los salarios durante seis meses.",
                },
                {
                  voice: "f",
                  text: "Los resultados fueron llamativos: la gran mayoría de las empresas decidió mantener el modelo al terminar la prueba. Las bajas por enfermedad se redujeron en torno a dos tercios, y la rotación de personal cayó de forma notable. Los ingresos, por su parte, se mantuvieron estables o incluso aumentaron ligeramente.",
                },
                {
                  voice: "f",
                  text: "En España, el Gobierno puso en marcha un programa de ayudas para pequeñas empresas industriales que quisieran probar la medida. La participación fue, sin embargo, muy baja. Muchos empresarios alegaron que en sectores como la hostelería, la sanidad o la industria, donde se trabaja por turnos, reducir la jornada exige contratar a más personal, y eso encarece los costes.",
                },
                {
                  voice: "f",
                  text: "Hay también críticas desde el lado de los trabajadores. Algunos estudios señalan que comprimir las mismas tareas en menos días puede aumentar el estrés y la intensidad del trabajo. Y existe el riesgo de que la medida amplíe la brecha entre los empleados de oficina, que pueden beneficiarse de ella, y los de sectores donde resulta mucho más difícil aplicarla.",
                },
                {
                  voice: "f",
                  text: "En mi opinión, la cuestión no es si la semana de cuatro días funciona, porque en muchos contextos claramente funciona, sino cómo adaptarla a cada sector sin crear trabajadores de primera y de segunda.",
                },
              ],
            },
          },
          minWords: 220,
          maxWords: 250,
          rubric: [
            "Recoge con precisión los datos y experiencias de la conferencia (Reino Unido, España).",
            "Expone de forma equilibrada los argumentos a favor y en contra.",
            "Formula una opinión propia bien argumentada, relacionada con su país o sector.",
            "Organiza el texto con cohesión (introducción, desarrollo, conclusión; conectores variados).",
            "Usa un léxico preciso y estructuras complejas propias de C1, sin reproducir literalmente la conferencia.",
          ],
          modelAnswer:
            "¿Trabajar menos para trabajar mejor?\n\nLa semana laboral de cuatro días ha dejado de ser una idea lejana. Según expuso la conferenciante, en 2022 más de sesenta empresas británicas la probaron durante seis meses sin reducir salarios, y la gran mayoría decidió mantenerla: las bajas médicas disminuyeron considerablemente, la rotación de personal cayó y los ingresos no se resintieron.\n\nNo obstante, la experiencia española ha sido mucho menos entusiasta. Pese a las ayudas públicas, pocas empresas se animaron a participar, sobre todo en sectores que funcionan por turnos, como la hostelería o la sanidad, donde reducir la jornada obliga a contratar a más personal. A ello se suman las objeciones de algunos trabajadores, que temen que concentrar las mismas tareas en menos días acabe generando más estrés.\n\nA mi juicio, el argumento más sólido de la conferencia es el último: el riesgo de crear una nueva desigualdad entre quienes trabajan en una oficina y quienes no pueden permitirse ese lujo. En mi país, donde buena parte del empleo se concentra en el turismo, una aplicación generalizada resultaría, de momento, poco realista.\n\nAun así, no creo que debamos descartar la medida. Sería conveniente empezar por los sectores en los que ya se ha demostrado eficaz y, al mismo tiempo, diseñar fórmulas específicas para el resto, como jornadas más cortas o descansos más largos. Solo así la reducción del tiempo de trabajo será un avance para todos, y no un privilegio de unos pocos.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Elija solo una de las dos opciones que se le ofrecen y escriba un texto. Número de palabras: entre 220 y 250.",
      write: [
        {
          label: "Opción 1",
          prompt:
            "Usted forma parte de la asociación de vecinos de su barrio. El ayuntamiento ha anunciado que cerrará la biblioteca municipal por falta de presupuesto. Escriba una carta formal a la alcaldesa en la que: exponga la importancia de la biblioteca para el barrio, con ejemplos concretos; rebata el argumento económico; proponga alternativas para mantenerla abierta; solicite una reunión.",
          minWords: 220,
          maxWords: 250,
          rubric: [
            "Formato y registro de carta formal a una autoridad, sostenidos en todo el texto.",
            "Argumenta la importancia de la biblioteca con ejemplos concretos.",
            "Rebate el argumento económico de manera razonada y cortés.",
            "Propone alternativas viables y solicita una reunión.",
            "Uso preciso de estructuras formales (le rogamos que, en caso de que, cabe señalar…).",
          ],
          modelAnswer:
            "Sra. Alcaldesa:\n\nMe dirijo a usted en nombre de la Asociación de Vecinos del barrio de La Estación para manifestarle nuestra profunda preocupación ante el anunciado cierre de la biblioteca municipal.\n\nCabe señalar que la biblioteca no es solo un lugar de préstamo de libros. Cada tarde, decenas de estudiantes que no disponen de un espacio tranquilo en casa acuden a sus salas; los martes acoge un club de lectura para personas mayores, y es el único punto del barrio con ordenadores de acceso gratuito, imprescindibles para quienes buscan empleo o realizan trámites en línea.\n\nComprendemos las dificultades presupuestarias del Ayuntamiento. Sin embargo, consideramos que el ahorro que supondría el cierre es mínimo en comparación con el coste social que tendría para el barrio. Además, la inversión en cultura y educación suele ahorrar, a medio plazo, gastos en otros servicios públicos.\n\nPor ello, le proponemos varias alternativas: reducir el horario de apertura en lugar de cerrar, compartir el edificio con otros servicios municipales o contar con la colaboración de voluntarios de la asociación para determinadas actividades. También estaríamos dispuestos a colaborar en la búsqueda de patrocinio de empresas de la zona.\n\nLe rogamos que tenga a bien recibirnos en una reunión antes de que se tome una decisión definitiva. Quedamos a la espera de su respuesta.\n\nAtentamente,\n\nElena Domínguez\nPresidenta de la Asociación de Vecinos de La Estación",
        },
        {
          label: "Opción 2",
          prompt:
            "Una revista cultural le ha pedido una reseña de una exposición, una película o un libro que le haya impresionado recientemente. Escriba una reseña en la que: presente la obra y su contexto; describa sus aspectos más destacados; valore sus puntos fuertes y débiles; recomiende o no la obra, justificándolo.",
          minWords: 220,
          maxWords: 250,
          rubric: [
            "Presenta la obra con la información básica (autor, género, contexto).",
            "Describe con detalle y precisión sus aspectos más relevantes.",
            "Valora de forma matizada, con puntos fuertes y débiles.",
            "Concluye con una recomendación justificada.",
            "Léxico variado y preciso, propio del lenguaje de la crítica cultural.",
          ],
          modelAnswer:
            "La memoria de los objetos\n\nEl Museo de Historia de la ciudad acoge hasta enero \"Lo que dejamos\", una exposición que reúne más de doscientos objetos cedidos por vecinos: cartas, juguetes, fotografías, herramientas de trabajo. Su comisaria, la historiadora Irene Castaño, se propuso contar el último siglo de la ciudad no a través de sus grandes acontecimientos, sino de la vida cotidiana.\n\nEl resultado es tan sencillo como conmovedor. Cada pieza va acompañada de un breve testimonio de su propietario, y es ahí donde la muestra alcanza su mayor fuerza: la máquina de coser con la que una abuela sacó adelante a sus cinco hijos o la maleta de cartón de un emigrante adquieren una dimensión casi literaria. Especialmente acertada resulta la última sala, en la que los visitantes pueden grabar su propio recuerdo.\n\nNo todo, sin embargo, está a la misma altura. El recorrido resulta algo desordenado en la parte central, donde la acumulación de vitrinas termina por cansar, y se echa en falta un mayor contexto histórico que permita a los visitantes más jóvenes comprender ciertas referencias.\n\nCon todo, se trata de una exposición que merece la pena. Más allá de su valor documental, invita a reflexionar sobre qué objetos guardamos y por qué, y sobre la memoria que vamos a dejar a quienes vengan después. La recomiendo sin reservas, especialmente para visitarla en compañía de alguien mayor: la conversación posterior es, quizá, la mejor parte de la visita.",
        },
      ],
    },
  ],
};
