// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c2-auditiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C2 practice exam -- listening: the listening tasks (4-6) of the
// real Prueba 1, laid out as their own paper (see dele-c2.ts). Each
// recording can be heard twice.
const SPEAKERS = ["A. Lo dice Marta.", "B. Lo dice Julián.", "C. No lo dice ninguno de los dos."];

export const DELE_C2_AUDITIVA: ExamPaper = {
  id: "auditiva",
  kind: "listening",
  title: "Comprensión auditiva",
  minutes: 45,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar dos veces un fragmento de una conferencia sobre la memoria. Después, conteste a las preguntas (1-6). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Conferencia",
          lines: [
            { voice: "f", text: "Solemos imaginar la memoria como un archivo: guardamos un recuerdo y, cuando lo necesitamos, lo sacamos intacto del cajón. Nada más lejos de la realidad." },
            { voice: "f", text: "Cada vez que evocamos un recuerdo, lo reconstruimos, y en esa reconstrucción intervienen nuestras emociones presentes, lo que hemos aprendido después e incluso lo que otros nos han contado." },
            { voice: "f", text: "Los experimentos sobre testigos presenciales lo ilustran de manera inquietante: basta con formular una pregunta de un modo u otro para que una parte de los participantes recuerde cristales rotos que nunca existieron." },
            { voice: "f", text: "¿Significa esto que la memoria no es fiable? No exactamente. Es fiable para lo que fue diseñada: no para conservar el pasado con exactitud notarial, sino para ayudarnos a anticipar el futuro." },
            { voice: "f", text: "Un recuerdo que se actualiza con la experiencia es, desde el punto de vista evolutivo, más útil que uno congelado. El precio que pagamos es la certeza." },
            { voice: "f", text: "De ahí mi advertencia a los juristas presentes: la seguridad con la que un testigo declara no guarda relación alguna con la exactitud de lo que declara." },
          ],
        },
      ],
      layout: "choice",
      items: [
        { n: 1, question: "Según la conferenciante, la imagen de la memoria como un archivo es…", options: ["acertada.", "errónea.", "útil para los juristas."], answer: 1, explanation: "«Nada más lejos de la realidad.»" },
        { n: 2, question: "Al evocar un recuerdo…", options: ["lo reconstruimos con influencias del presente.", "lo recuperamos tal como se guardó.", "solo intervienen las emociones del momento original."], answer: 0, explanation: "Intervienen las emociones presentes, lo aprendido después y lo que otros nos han contado." },
        { n: 3, question: "Los experimentos con testigos muestran que…", options: ["los testigos mienten a menudo.", "la forma de preguntar puede crear recuerdos falsos.", "nadie recuerda los detalles de un accidente."], answer: 1, explanation: "Una pregunta formulada de cierto modo hace recordar «cristales rotos que nunca existieron»." },
        { n: 4, question: "Para la conferenciante, la memoria sirve sobre todo para…", options: ["conservar el pasado con exactitud.", "olvidar lo desagradable.", "anticipar el futuro."], answer: 2, explanation: "«No para conservar el pasado con exactitud notarial, sino para ayudarnos a anticipar el futuro.»" },
        { n: 5, question: "«El precio que pagamos es la certeza» significa que…", options: ["un recuerdo adaptable nunca es del todo seguro.", "recordar exige mucho esfuerzo.", "la certeza es el recuerdo más valioso."], answer: 0, explanation: "La ventaja de un recuerdo que se actualiza tiene un coste: no podemos estar seguros de su exactitud." },
        { n: 6, question: "¿Qué advierte a los juristas?", options: ["Que no deben fiarse de ningún testigo.", "Que la seguridad de un testigo no prueba que tenga razón.", "Que los testigos más seguros son los más exactos."], answer: 1, explanation: "«La seguridad con la que un testigo declara no guarda relación alguna con la exactitud de lo que declara.»" },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a escuchar dos veces una conversación entre Marta y Julián sobre el teletrabajo en su empresa. Indique si los enunciados (7-14) los dice Marta (A), Julián (B) o ninguno de los dos (C).",
      audio: [
        {
          label: "Conversación",
          lines: [
            { voice: "f", text: "Julián, ¿has leído la circular? A partir de enero, tres días presenciales como mínimo. A mí me parece un paso atrás." },
            { voice: "m", text: "Pues a mí no me disgusta tanto. Llevo dos años hablando con una pantalla y echo de menos tomar un café con alguien de carne y hueso." },
            { voice: "f", text: "Ya, pero el café te lo tomas igual un día a la semana. Lo que no tiene sentido es pasarme hora y media en el tren para hacer videollamadas desde la oficina." },
            { voice: "m", text: "En eso te doy la razón: si vamos a la oficina, que sea para trabajar juntos, no para lo mismo de casa. Habría que organizar los equipos por días." },
            { voice: "f", text: "Exacto. Y que lo decidan los equipos, no recursos humanos con una tabla de Excel. Además, la productividad no ha bajado; las cifras lo dicen." },
            { voice: "m", text: "Las cifras dicen lo que se mide. Lo que no se mide es la formación de los nuevos: a los que entraron durante el teletrabajo les ha costado mucho más integrarse." },
            { voice: "f", text: "Eso es verdad, no lo niego. Pero para eso bastaría con un plan de acogida, no con obligar a todos." },
            { voice: "m", text: "Bueno, ya veremos. De todas formas, yo no pienso protestar: prefiero proponer algo concreto en la próxima reunión." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 7, question: "La nueva norma supone un retroceso.", options: SPEAKERS, answer: 0, explanation: "Marta: «A mí me parece un paso atrás.»" },
        { n: 8, question: "Echa de menos el contacto personal con los compañeros.", options: SPEAKERS, answer: 1, explanation: "Julián: «Echo de menos tomar un café con alguien de carne y hueso.»" },
        { n: 9, question: "El trayecto hasta la oficina es demasiado largo.", options: SPEAKERS, answer: 0, explanation: "Marta: «Pasarme hora y media en el tren para hacer videollamadas.»" },
        { n: 10, question: "Los días presenciales deberían coordinarse por equipos.", options: SPEAKERS, answer: 1, explanation: "Julián: «Habría que organizar los equipos por días.» (Marta está de acuerdo, pero lo propone él.)" },
        { n: 11, question: "Los datos muestran que se rinde igual en casa.", options: SPEAKERS, answer: 0, explanation: "Marta: «La productividad no ha bajado; las cifras lo dicen.»" },
        { n: 12, question: "Los empleados nuevos han tenido más dificultades.", options: SPEAKERS, answer: 1, explanation: "Julián: «A los que entraron durante el teletrabajo les ha costado mucho más integrarse.»" },
        { n: 13, question: "La empresa debería pagar el transporte.", options: SPEAKERS, answer: 2, explanation: "Nadie habla de pagar el transporte." },
        { n: 14, question: "Piensa llevar una propuesta a la próxima reunión.", options: SPEAKERS, answer: 1, explanation: "Julián: «Prefiero proponer algo concreto en la próxima reunión.»" },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a escuchar dos veces seis fragmentos de un programa de radio. Después, conteste a las preguntas (15-20). Seleccione la opción correcta (a, b o c).",
      audio: [
        { label: "Fragmento 1", lines: [{ voice: "m", text: "El ayuntamiento ha dado luz verde al proyecto, aunque con la boca pequeña: la mitad del pleno votó a favor por pura disciplina de partido." }] },
        { label: "Fragmento 2", lines: [{ voice: "f", text: "Lo de la nueva ley es para echarse a temblar: todo el mundo habla de ella y nadie se la ha leído." }] },
        { label: "Fragmento 3", lines: [{ voice: "m", text: "El director dimitió ayer. Oficialmente, por motivos personales; extraoficialmente, ya saben ustedes cómo funcionan estas cosas." }] },
        { label: "Fragmento 4", lines: [{ voice: "f", text: "No es que la obra sea mala, ojo. Es que le sobran cuarenta minutos y le falta una idea." }] },
        { label: "Fragmento 5", lines: [{ voice: "m", text: "Los vecinos llevan meses clamando en el desierto: nadie en la consejería ha contestado a una sola de sus cartas." }] },
        { label: "Fragmento 6", lines: [{ voice: "f", text: "El acuerdo se firmó in extremis, a las tres de la madrugada, cuando ya nadie daba un duro por él." }] },
      ],
      layout: "choice",
      items: [
        { n: 15, question: "Fragmento 1. El proyecto se aprobó…", options: ["con entusiasmo.", "sin convicción.", "por unanimidad."], answer: 1, source: 0, explanation: "«Con la boca pequeña»: sin convicción, por compromiso." },
        { n: 16, question: "Fragmento 2. La locutora critica que…", options: ["se opine sin conocer la ley.", "la ley sea muy larga.", "nadie hable de la ley."], answer: 0, source: 1, explanation: "«Todo el mundo habla de ella y nadie se la ha leído.»" },
        { n: 17, question: "Fragmento 3. El locutor insinúa que…", options: ["el director estaba enfermo.", "la dimisión tuvo otras causas no declaradas.", "el director volverá pronto."], answer: 1, source: 2, explanation: "«Oficialmente… extraoficialmente, ya saben ustedes»: sugiere motivos ocultos." },
        { n: 18, question: "Fragmento 4. Sobre la obra, la crítica opina que…", options: ["es demasiado larga y poco original.", "es muy mala.", "es perfecta pero corta."], answer: 0, source: 3, explanation: "«Le sobran cuarenta minutos y le falta una idea.»" },
        { n: 19, question: "Fragmento 5. «Clamar en el desierto» significa…", options: ["protestar sin que nadie haga caso.", "vivir en un lugar aislado.", "gritar muy alto."], answer: 0, source: 4, explanation: "Pedir algo sin obtener respuesta: nadie ha contestado a sus cartas." },
        { n: 20, question: "Fragmento 6. El acuerdo…", options: ["se firmó con mucha antelación.", "se firmó en el último momento.", "no llegó a firmarse."], answer: 1, source: 5, explanation: "«In extremis»: en el último momento, cuando nadie lo esperaba." },
      ],
    },
  ],
};
