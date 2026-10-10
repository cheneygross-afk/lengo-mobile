// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c2-escrita.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C2 practice exam -- writing: the real Prueba 2, "Destrezas
// integradas: comprensión auditiva y de lectura y expresión e
// interacción escritas" (150 minutes, three tasks). The real Tarea 1 asks
// for 400-450 words; here it asks for 200-250 so the whole text fits the
// writing-feedback route.
export const DELE_C2_ESCRITA: ExamPaper = {
  id: "escrita",
  kind: "writing",
  title: "Destrezas integradas: comprensión auditiva y de lectura y expresión escrita",
  minutes: 150,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar dos veces una intervención y a leer un informe. Tome notas y, a continuación, redacte un artículo de opinión. Número de palabras: entre 200 y 250.",
      write: [
        {
          prompt:
            "Una revista universitaria le pide un artículo sobre el uso de la inteligencia artificial en la enseñanza superior. Redacte un texto en el que: resuma las posturas y los datos de la intervención y del informe; valore los riesgos y las oportunidades; y proponga, de forma argumentada, una línea de actuación para las universidades.",
          input: {
            audio: {
              label: "Intervención de una profesora universitaria",
              lines: [
                { voice: "f", text: "Prohibir la inteligencia artificial en las aulas me parece tan ingenuo como lo fue prohibir las calculadoras. Nuestros estudiantes ya la usan; la pregunta es si les enseñamos a usarla bien." },
                { voice: "f", text: "En mi asignatura he cambiado la evaluación: ya no pido ensayos que una máquina pueda escribir, sino defensas orales y trabajos en los que el alumno debe justificar cada decisión." },
                { voice: "f", text: "Me preocupa, eso sí, la desigualdad: quien sabe formular buenas preguntas saca mucho más partido de estas herramientas, y esa habilidad no está repartida por igual." },
              ],
            },
            text: {
              title: "Informe sobre el uso de la IA en la universidad (extracto)",
              body:
                "Según una encuesta realizada a 3.000 estudiantes, el 78 % utiliza herramientas de inteligencia artificial al menos una vez por semana, pero solo el 21 % ha recibido orientación de su universidad sobre cómo hacerlo. El 64 % del profesorado considera que estas herramientas favorecen el plagio, y apenas un 30 % ha modificado sus métodos de evaluación. El informe recomienda elaborar guías institucionales y formar al profesorado antes de imponer restricciones.",
            },
          },
          minWords: 200,
          maxWords: 250,
          rubric: [
            "Resume con precisión la intervención y el informe, con los datos clave.",
            "Valora riesgos y oportunidades, no solo una de las dos caras.",
            "Propone una línea de actuación concreta y argumentada.",
            "Organiza el texto en párrafos, con conectores cultos.",
            "Usa un registro preciso y variado, propio de C2, sin errores que dificulten la lectura.",
          ],
          modelAnswer:
            "La inteligencia artificial ya forma parte de la vida universitaria, lo admitan o no los reglamentos. Según un informe reciente, el 78 % de los estudiantes recurre a ella cada semana, aunque solo uno de cada cinco ha recibido orientación institucional. El profesorado, por su parte, se muestra receloso: casi dos tercios la asocian al plagio, pero apenas un 30 % ha revisado su manera de evaluar.\n\n" +
            "Esa brecha entre el uso real y la respuesta académica es, a mi juicio, el verdadero problema. Como señalaba una profesora en una intervención reciente, prohibir estas herramientas resulta tan ingenuo como lo fue vetar las calculadoras. Más sensato parece rediseñar la evaluación: defensas orales, trabajos en los que el alumno justifique cada decisión, tareas que exijan criterio y no mera producción de texto.\n\n" +
            "No se trata, con todo, de abrazar la tecnología sin reservas. La misma docente advertía de un riesgo menos visible que el plagio: la desigualdad entre quienes saben formular buenas preguntas y quienes no. Si la universidad no enseña esa destreza, la delegará en el capital cultural de cada familia.\n\n" +
            "Por consiguiente, propongo una estrategia en dos tiempos: primero, guías claras y formación del profesorado; después, y solo después, las restricciones que la experiencia aconseje. Legislar desde el miedo nunca ha sido buena pedagogía.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Lea el siguiente mensaje y reescríbalo en el registro adecuado para el destinatario indicado. Número de palabras: entre 150 y 180.",
      write: [
        {
          prompt:
            "La presidenta de su asociación de vecinos ha escrito este mensaje en el grupo de la asociación. Usted debe convertirlo en una carta formal dirigida a la concejala de Urbanismo del ayuntamiento, con la misma información y una petición clara.",
          input: {
            text: {
              title: "Mensaje en el grupo de vecinos",
              body:
                "¡Hola a todos! Esto ya no hay quien lo aguante. Llevamos TRES meses con la calle levantada por las obras del aparcamiento y nadie nos dice nada. Los de la frutería y la farmacia están que trinan porque no les entra ni un cliente, y la señora Pilar casi se mata el martes con una zanja sin vallar. He llamado mil veces al ayuntamiento y me pasan de un lado a otro. Propongo que les mandemos algo por escrito ya: que nos digan cuándo acaban, que pongan vallas y luz por la noche y que hagan algo por los comercios, que lo están pasando fatal. ¿Quién se apunta a firmar?",
            },
          },
          minWords: 150,
          maxWords: 180,
          rubric: [
            "Mantiene todos los datos: tres meses de obras, perjuicio a los comercios, el accidente, la falta de respuesta por teléfono.",
            "Formula peticiones claras: fecha de finalización, vallas e iluminación, ayudas para los negocios.",
            "Respeta las convenciones de la carta formal (saludo, despedida, tratamiento de usted).",
            "Sustituye los coloquialismos por equivalentes formales y neutros.",
          ],
          modelAnswer:
            "Estimada señora concejala:\n\n" +
            "Me dirijo a usted en nombre de la Asociación de Vecinos del barrio de San Lorenzo para trasladarle nuestra preocupación por las obras del aparcamiento de la calle Mayor, que se prolongan ya desde hace tres meses sin que los vecinos hayamos recibido información alguna sobre su duración.\n\n" +
            "Las obras están causando un grave perjuicio a los comercios de la zona, que han visto disminuir drásticamente su clientela. Además, la seguridad de los peatones se encuentra comprometida: el pasado martes, una vecina de avanzada edad sufrió una caída a causa de una zanja que carecía de vallado. Pese a nuestras reiteradas llamadas, no hemos obtenido una respuesta concreta de los servicios municipales.\n\n" +
            "Por todo ello, le solicitamos que nos informe del plazo previsto para la finalización de las obras, que se instalen vallas e iluminación nocturna y que se estudien medidas de apoyo para los comercios afectados.\n\n" +
            "Quedamos a la espera de su respuesta.\n\nAtentamente,\nLa Asociación de Vecinos de San Lorenzo",
        },
      ],
    },
    {
      title: "Tarea 3",
      instructions: "Elija una de las dos opciones y escriba un texto. Número de palabras: entre 150 y 180.",
      write: [
        {
          label: "Opción 1",
          prompt:
            "Un periódico local le invita a escribir una columna de opinión sobre esta cuestión: ¿deberían las ciudades costeras limitar la llegada de cruceros? Exponga su postura con argumentos y un estilo personal.",
          minWords: 150,
          maxWords: 180,
          rubric: [
            "Adopta una postura clara y la mantiene.",
            "Argumenta con ejemplos y se adelanta a una objeción.",
            "Tiene una voz personal de columnista (ironía, preguntas retóricas, imágenes).",
            "Termina con una conclusión memorable.",
          ],
          modelAnswer:
            "Cada mañana de verano, un edificio de quince plantas atraca en nuestro puerto y vierte sobre el casco antiguo a cinco mil personas con cuatro horas por delante. Se les llama turistas, aunque apenas tienen tiempo de serlo: recorren la misma calle, se fotografían en la misma plaza y regresan a bordo para comer. ¿Qué deja en la ciudad semejante visita? Poco más que aglomeraciones y un aire más denso.\n\n" +
            "Se dirá que los cruceros generan empleo y que limitar su llegada es dar la espalda a una fuente de ingresos. Ahora bien, las cifras desmienten el entusiasmo: el gasto medio del crucerista es muy inferior al del viajero que pernocta, y los costes —limpieza, transporte, contaminación— los asumen los vecinos.\n\n" +
            "No propongo cerrar el puerto, sino poner un límite diario y una tasa que revierta en el barrio. Una ciudad que no sabe decir que no acaba convertida en decorado. Y los decorados, por bonitos que sean, no se habitan.",
        },
        {
          label: "Opción 2",
          prompt:
            "Una revista cultural le pide la reseña de un libro, una película o una exposición que le haya impresionado. Sitúe la obra, valórela con argumentos y recomiéndela (o no) a los lectores.",
          minWords: 150,
          maxWords: 180,
          rubric: [
            "Sitúa brevemente la obra (autor, género, contexto).",
            "Valora la obra con argumentos concretos, tanto sus virtudes como sus defectos.",
            "Usa un vocabulario valorativo preciso.",
            "Termina con una recomendación clara.",
          ],
          modelAnswer:
            "En «Los girasoles ciegos», Alberto Méndez reunió cuatro relatos sobre la posguerra española que, publicados poco antes de su muerte, se convirtieron en un pequeño clásico contemporáneo. No hay en ellos grandes batallas ni héroes, sino derrotados: un capitán que se rinde el día en que su bando gana la guerra, un poeta adolescente que muere en el monte, un preso que se niega a mentir para salvarse.\n\n" +
            "El mayor acierto del libro es su contención. Méndez renuncia al melodrama y deja que el horror se insinúe en los detalles, con una prosa precisa que nunca subraya. Esa misma sobriedad, sin embargo, puede desconcertar al lector que busque una trama trepidante: los relatos avanzan despacio y exigen atención.\n\n" +
            "Quien acepte ese pacto encontrará una de las reflexiones más lúcidas sobre la dignidad y la derrota que ha dado nuestra literatura reciente. Un libro breve que deja una huella larga: imprescindible.",
        },
      ],
    },
  ],
};
