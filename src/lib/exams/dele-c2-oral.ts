// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c2-oral.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C2 practice exam -- speaking: the real Prueba 3, "Destrezas
// integradas: comprensión de lectura y expresión e interacción orales"
// (20 minutes with the examiners, after 30 minutes to prepare Tarea 1).
export const DELE_C2_ORAL: ExamPaper = {
  id: "oral",
  kind: "speaking",
  title: "Destrezas integradas: comprensión de lectura y expresión oral",
  minutes: 20,
  prepMinutes: 30,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Lea los textos sobre el tema propuesto y prepare una presentación. Exponga durante 3 a 5 minutos la información principal, contraste los puntos de vista y dé su opinión argumentada.",
      speak: {
        prompt: "La semana laboral de cuatro días: ¿utopía o futuro inmediato?",
        material: [
          {
            title: "Texto 1: un experimento en el Reino Unido",
            body: "En 2022, sesenta y una empresas británicas redujeron la jornada a cuatro días sin rebajar el sueldo. Al cabo de seis meses, el 92 % decidió mantener el modelo; las bajas por enfermedad cayeron un 65 % y la facturación se mantuvo estable.",
          },
          {
            title: "Texto 2: la opinión de una patronal",
            body: "Las organizaciones empresariales advierten de que lo que funciona en una consultora no es trasladable a un hospital, un comercio o una fábrica, donde reducir horas implica contratar más personal. Reclaman flexibilidad sector por sector en lugar de una ley general.",
          },
          {
            title: "Texto 3: un estudio sobre la salud laboral",
            body: "Un estudio sobre jornadas comprimidas detectó que concentrar el mismo trabajo en menos días puede aumentar el estrés y la fatiga si no se reducen también las tareas. Los autores insisten en que el debate no debe ser solo de horas, sino de organización.",
          },
        ],
        points: [
          "Presente el tema y resuma los datos de los tres textos.",
          "Contraste las posturas: beneficios, límites por sectores, riesgos para la salud.",
          "Dé su opinión argumentada y una propuesta.",
          "Use conectores de organización y de contraste propios de un registro culto.",
        ],
        prepMinutes: 30,
        speakMinutes: 5,
        modelAnswer:
          "El tema que voy a tratar es la semana laboral de cuatro días, una propuesta que ha pasado en pocos años de parecer una utopía a ensayarse en empresas reales. Los datos del experimento británico son, en principio, contundentes: más del noventa por ciento de las empresas participantes quiso mantener el modelo, las bajas se redujeron de forma notable y la facturación no se resintió. Ahora bien, conviene leer esas cifras con cautela. Como recuerda la patronal, lo que funciona en una consultora difícilmente puede trasladarse a un hospital o a un comercio, donde reducir horas obliga a contratar. Y el tercer texto añade un matiz decisivo: comprimir el mismo trabajo en menos días no libera tiempo, sino que lo intensifica, con el consiguiente coste para la salud. A mi juicio, el debate está mal planteado cuando se reduce a un número de días. La cuestión de fondo es cómo organizamos el trabajo. Por ello, me inclinaría por una implantación gradual, negociada sector por sector y acompañada de una revisión real de las tareas. De lo contrario, corremos el riesgo de cambiar el calendario sin cambiar nada más.",
      },
    },
    {
      title: "Tarea 2",
      instructions:
        "Conversación con el entrevistador sobre el tema de la Tarea 1. Defienda su postura, matícela y responda a las objeciones. Duración: 5 o 6 minutos.",
      speak: {
        prompt: "Conversación sobre la semana laboral de cuatro días.",
        points: ["Defienda y matice su postura.", "Responda a las objeciones con argumentos.", "Conceda lo razonable sin perder el hilo de su opinión."],
        examinerQuestions: [
          "¿No cree que una medida así perjudicaría sobre todo a las pequeñas empresas?",
          "Si funciona en algunos sectores, ¿por qué no hacerla obligatoria?",
          "¿Qué papel deberían tener los sindicatos en esta negociación?",
          "¿Cómo cree que cambiaría la vida de las ciudades con un día libre más?",
        ],
        prepMinutes: 0,
        speakMinutes: 6,
        modelAnswer:
          "—¿No cree que perjudicaría a las pequeñas empresas?\n—Es un riesgo real, no lo niego. Por eso hablaba de una implantación gradual y con ayudas, y no de una imposición. Una pyme con cinco empleados no tiene el margen de una gran empresa.\n—Si funciona, ¿por qué no hacerla obligatoria?\n—Porque «funciona» depende de dónde. Generalizar a partir de un experimento con empresas voluntarias es, cuando menos, precipitado: las que se apuntaron eran precisamente las que creían que podían lograrlo.\n—¿Y los sindicatos?\n—Deberían ser protagonistas. Son quienes conocen mejor la organización real del trabajo en cada sector.",
      },
    },
    {
      title: "Tarea 3",
      instructions:
        "Conversación con el entrevistador a partir de varios titulares de prensa. Elija uno, comente su contenido y conversen durante 4 o 5 minutos.",
      speak: {
        prompt: "Comente uno de los titulares y conversen sobre él.",
        material: [
          { title: "Titular 1", body: "«Las librerías de barrio resisten gracias a los clubes de lectura»" },
          { title: "Titular 2", body: "«Una ciudad prohíbe los anuncios publicitarios en la calle»" },
          { title: "Titular 3", body: "«Los jóvenes vuelven a escuchar discos de vinilo»" },
        ],
        points: ["Explique por qué ha elegido ese titular.", "Interprételo y relacione el fenómeno con su contexto.", "Exprese su opinión y responda a las preguntas."],
        examinerQuestions: [
          "¿Por qué ha elegido este titular?",
          "¿Cree que es una moda pasajera o un cambio duradero?",
          "¿Ocurre algo parecido en su país?",
        ],
        prepMinutes: 0,
        speakMinutes: 5,
        modelAnswer:
          "—He elegido el titular sobre las librerías de barrio porque me parece que desmiente un pronóstico que dábamos por cumplido: que la venta en línea acabaría con ellas. Lo interesante es cómo resisten: no compitiendo en precio, que es una batalla perdida, sino ofreciendo lo que una plataforma no puede dar, que es comunidad. Un club de lectura convierte la librería en un lugar de encuentro.\n—¿Moda pasajera o cambio duradero?\n—Me inclino por lo segundo, aunque con matices. Mientras haya libreros dispuestos a ejercer de anfitriones, tendrán una razón de ser. Ahora bien, sin alquileres asequibles, ni el mejor club de lectura los salvará.",
      },
    },
  ],
};
