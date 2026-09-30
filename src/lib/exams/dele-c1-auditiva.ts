// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c1-auditiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C1 practice exam -- Prueba 2: Comprensión auditiva y uso de la
// lengua. 50 minutes, 4 tasks, 30 items. Each recording can be heard
// twice, as in the real exam.
export const DELE_C1_AUDITIVA: ExamPaper = {
  id: "auditiva",
  kind: "listening",
  title: "Comprensión auditiva y uso de la lengua",
  minutes: 50,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar un fragmento de una conferencia. Escuchará la conferencia dos veces. Mientras escucha, complete las notas (1-6) con la opción correcta (a, b o c).",
      audio: [
        {
          label: "Conferencia: los mapas que nos engañan",
          lines: [
            { voice: "m", text: "Buenas tardes. Hoy quiero hablarles de un objeto que todos hemos tenido delante desde la infancia y que rara vez cuestionamos: el mapa del mundo. En concreto, de la proyección de Mercator, diseñada en 1569 por un cartógrafo flamenco con un objetivo muy concreto: facilitar la navegación." },
            { voice: "m", text: "La gran virtud de este mapa es que conserva los ángulos. Un marinero podía trazar una línea recta entre dos puertos y seguir un rumbo constante con la brújula. Ahora bien, el precio de esa ventaja es enorme: las superficies se deforman a medida que nos alejamos del ecuador. Groenlandia aparece casi del tamaño de África, cuando en realidad África es unas catorce veces mayor." },
            { voice: "m", text: "Durante siglos, esta distorsión no se consideró un problema, porque el mapa se usaba para navegar, no para comparar territorios. El problema surge cuando se convierte en la imagen escolar del planeta. Varios estudios han mostrado que los estudiantes que aprenden con este mapa tienden a sobrestimar el tamaño de Europa y de Norteamérica, y a subestimar el de África y Sudamérica." },
            { voice: "m", text: "En los años setenta, el historiador alemán Arno Peters presentó una proyección alternativa que respetaba las superficies. Su mapa fue adoptado por varias organizaciones internacionales, pero los cartógrafos lo criticaron con dureza, porque deformaba mucho las formas de los continentes. En realidad, no existe un mapa plano perfecto: es matemáticamente imposible representar una esfera sin distorsionar algo." },
            { voice: "m", text: "Hoy muchos especialistas recomiendan proyecciones de compromiso, que no conservan exactamente ni las áreas ni los ángulos, pero reducen ambos errores. Y, sobre todo, recomiendan enseñar a los alumnos que todo mapa es una elección, y que detrás de cada elección hay un propósito." },
          ],
        },
      ],
      items: [
        { n: 1, source: 0, question: "La proyección de Mercator se creó para…", options: ["la enseñanza.", "la navegación.", "la administración colonial."], answer: 1, explanation: "\"Con un objetivo muy concreto: facilitar la navegación\"." },
        { n: 2, source: 0, question: "La principal ventaja del mapa es que mantiene…", options: ["los ángulos.", "las superficies.", "las distancias."], answer: 0, explanation: "\"La gran virtud de este mapa es que conserva los ángulos\"." },
        { n: 3, source: 0, question: "En el mapa, las áreas se deforman más cuanto más lejos están del…", options: ["polo norte.", "meridiano de Greenwich.", "ecuador."], answer: 2, explanation: "\"A medida que nos alejamos del ecuador\"." },
        { n: 4, source: 0, question: "Los alumnos que estudian con este mapa suelen creer que África es…", options: ["más grande de lo que es.", "más pequeña de lo que es.", "del mismo tamaño que Europa."], answer: 1, explanation: "Tienden a subestimar el tamaño de África y Sudamérica." },
        { n: 5, source: 0, question: "Los cartógrafos criticaron el mapa de Peters porque…", options: ["alteraba las formas.", "no respetaba las superficies.", "era demasiado caro."], answer: 0, explanation: "\"Deformaba mucho las formas de los continentes\"." },
        { n: 6, source: 0, question: "Los especialistas recomiendan sobre todo enseñar que los mapas…", options: ["deben ser siempre esféricos.", "responden a una finalidad.", "son imposibles de mejorar."], answer: 1, explanation: "\"Todo mapa es una elección, y detrás de cada elección hay un propósito\"." },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a escuchar cuatro conversaciones. Escuchará cada conversación dos veces. Después, debe contestar a las preguntas (7-14). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Conversación 1",
          lines: [
            { voice: "f", text: "¿Has leído el informe que mandó Gerardo anoche? Dice que el lanzamiento se retrasa otra vez." },
            { voice: "m", text: "Lo he visto por encima. Si te soy sincero, ya me lo esperaba. Llevamos meses sin los permisos del laboratorio y nadie ha querido asumir que el calendario era irreal." },
            { voice: "f", text: "Ya, pero a mí lo que me molesta es enterarme por un correo a las once de la noche. Podría habernos reunido." },
            { voice: "m", text: "En eso tienes toda la razón. Mañana se lo planteo en el comité, a ver si al menos cambiamos la forma de comunicar estas cosas." },
          ],
        },
        {
          label: "Conversación 2",
          lines: [
            { voice: "m", text: "Entonces, ¿al final te quedas con el piso de Lavapiés o con el de las afueras?" },
            { voice: "f", text: "Me tira más Lavapiés, no te voy a engañar: el ambiente, los bares, todo a mano. Pero el de las afueras tiene cuarenta metros más y un alquiler que puedo pagar sin agobiarme." },
            { voice: "m", text: "¿Y el transporte?" },
            { voice: "f", text: "Hay tren de cercanías cada quince minutos. Supongo que me acabaré acostumbrando. Firmo el lunes." },
          ],
        },
        {
          label: "Conversación 3",
          lines: [
            { voice: "f", text: "Mira, no es que la novela sea mala; está bien escrita, eso no se lo discute nadie. Pero a mitad de libro tuve la sensación de que el autor se había enamorado de su propia prosa y se había olvidado de la historia." },
            { voice: "m", text: "Pues a mí es precisamente lo que me atrapó. La trama es lo de menos; lo interesante es cómo mira las cosas." },
            { voice: "f", text: "Será eso. Yo necesito que pase algo." },
          ],
        },
        {
          label: "Conversación 4",
          lines: [
            { voice: "m", text: "Doctora, lo que no entiendo es por qué no me opera ya, si la rodilla me sigue doliendo." },
            { voice: "f", text: "Porque en su caso la cirugía no garantiza un resultado mejor que la rehabilitación, y tiene riesgos. Le propongo tres meses de fisioterapia intensiva. Si no hay mejora, lo volvemos a valorar, y entonces sí estudiaríamos la intervención." },
            { voice: "m", text: "Tres meses es mucho tiempo." },
            { voice: "f", text: "Lo sé, pero créame: la mayoría de los pacientes como usted no llega a necesitar el quirófano." },
          ],
        },
      ],
      items: [
        { n: 7, source: 0, question: "Conversación 1. Al hombre, el retraso…", options: ["le ha sorprendido.", "le parecía previsible.", "le parece injustificado."], answer: 1, explanation: "\"Si te soy sincero, ya me lo esperaba\"." },
        { n: 8, source: 0, question: "Conversación 1. Lo que más molesta a la mujer es…", options: ["la manera en que se les ha informado.", "que no tengan los permisos.", "tener que ir al comité."], answer: 0, explanation: "Le molesta enterarse por un correo a las once de la noche." },
        { n: 9, source: 1, question: "Conversación 2. La mujer prefiere el piso de Lavapiés por…", options: ["su precio.", "su tamaño.", "su entorno."], answer: 2, explanation: "\"El ambiente, los bares, todo a mano\"." },
        { n: 10, source: 1, question: "Conversación 2. Finalmente, la mujer…", options: ["alquilará el piso de las afueras.", "no ha decidido todavía.", "alquilará el de Lavapiés."], answer: 0, explanation: "Habla del tren de cercanías y dice que se acostumbrará: \"Firmo el lunes\"." },
        { n: 11, source: 2, question: "Conversación 3. La mujer critica de la novela…", options: ["su estilo.", "la falta de acción.", "sus personajes."], answer: 1, explanation: "Reconoce que está bien escrita, pero \"necesito que pase algo\"." },
        { n: 12, source: 2, question: "Conversación 3. Al hombre le gustó la novela por…", options: ["la mirada del autor.", "su trama.", "su final."], answer: 0, explanation: "\"La trama es lo de menos; lo interesante es cómo mira las cosas\"." },
        { n: 13, source: 3, question: "Conversación 4. La doctora descarta de momento la operación porque…", options: ["la lista de espera es larga.", "no está claro que sea más eficaz.", "el paciente es demasiado mayor."], answer: 1, explanation: "\"La cirugía no garantiza un resultado mejor que la rehabilitación\"." },
        { n: 14, source: 3, question: "Conversación 4. Según la doctora, la mayoría de los pacientes como él…", options: ["acaban operándose.", "mejoran sin cirugía.", "abandonan la fisioterapia."], answer: 1, explanation: "\"La mayoría no llega a necesitar el quirófano\"." },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a escuchar una entrevista a una investigadora. Escuchará la entrevista dos veces. Después, debe contestar a las preguntas (15-20). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Entrevista",
          lines: [
            { voice: "m", text: "Nos acompaña Carmen Oliva, lingüista, que acaba de publicar un estudio sobre cómo hablan los adolescentes en las redes. Carmen, ¿están los jóvenes empobreciendo el idioma, como se oye a menudo?" },
            { voice: "f", text: "Es una queja que se repite en cada generación. Ya en el siglo XVIII había quien se lamentaba de que los jóvenes hablaban peor que sus padres. Lo que observamos no es empobrecimiento, sino adaptación: los adolescentes manejan registros distintos según el contexto, y lo hacen con bastante habilidad." },
            { voice: "m", text: "Pero las faltas de ortografía en los mensajes son evidentes." },
            { voice: "f", text: "Son intencionadas en muchos casos. Escribir \"q\" en lugar de \"que\" no significa que no sepan escribirlo; significa que en ese contexto la rapidez importa más que la norma. Lo preocupante sería que trasladaran esos usos a un examen o a una solicitud de empleo, y en nuestro estudio eso ocurre mucho menos de lo que se cree." },
            { voice: "m", text: "¿Qué es lo que más le sorprendió de la investigación?" },
            { voice: "f", text: "La creatividad léxica. Inventan palabras, las adaptan del inglés con una morfología perfectamente española, las cambian de categoría gramatical… Eso requiere un conocimiento intuitivo de la lengua muy sólido. Lo que sí detectamos es que leen menos textos largos, y eso tiene consecuencias en la comprensión de estructuras complejas." },
            { voice: "m", text: "¿Qué recomendaría entonces a los profesores?" },
            { voice: "f", text: "Que no demonicen las redes. Pueden usarlas como punto de partida: analizar un mensaje, compararlo con un texto formal, reflexionar sobre por qué cambian las formas. Y, a la vez, que no renuncien a la lectura de libros completos, que es insustituible." },
          ],
        },
      ],
      items: [
        { n: 15, source: 0, question: "Según Carmen Oliva, la idea de que los jóvenes hablan peor…", options: ["es nueva.", "se ha repetido a lo largo de la historia.", "está demostrada por su estudio."], answer: 1, explanation: "\"Es una queja que se repite en cada generación\", ya en el siglo XVIII." },
        { n: 16, source: 0, question: "La investigadora afirma que los adolescentes…", options: ["cambian su forma de hablar según la situación.", "solo dominan el registro informal.", "hablan igual que sus padres."], answer: 0, explanation: "\"Manejan registros distintos según el contexto\"." },
        { n: 17, source: 0, question: "Sobre las abreviaturas en los mensajes, Carmen Oliva dice que…", options: ["demuestran que no conocen la norma.", "se usan con frecuencia en exámenes.", "en muchos casos son deliberadas."], answer: 2, explanation: "\"Son intencionadas en muchos casos\"." },
        { n: 18, source: 0, question: "Lo que más le sorprendió del estudio fue…", options: ["la influencia del inglés.", "la capacidad de crear palabras.", "el número de faltas."], answer: 1, explanation: "\"La creatividad léxica\"." },
        { n: 19, source: 0, question: "Un aspecto negativo que detectó el estudio es que los jóvenes…", options: ["leen menos textos extensos.", "usan demasiados anglicismos.", "escriben muy poco."], answer: 0, explanation: "\"Leen menos textos largos\", con consecuencias en la comprensión." },
        { n: 20, source: 0, question: "A los profesores les aconseja…", options: ["prohibir el móvil en clase.", "aprovechar las redes para reflexionar sobre la lengua.", "sustituir los libros por textos breves."], answer: 1, explanation: "Usarlas como punto de partida para comparar y reflexionar, sin renunciar a los libros." },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Usted va a escuchar diez diálogos breves. Escuchará cada diálogo dos veces. Después, debe contestar a las preguntas (21-30). Seleccione la opción correcta (a, b o c).",
      audio: [
        { label: "Diálogo 21", lines: [{ voice: "f", text: "¿Vienes al final a la presentación del libro de Andrés?" }, { voice: "m", text: "Hombre, ni que decir tiene. Con lo que me ayudó él con mi tesis." }] },
        { label: "Diálogo 22", lines: [{ voice: "m", text: "¿Qué tal con el nuevo jefe?" }, { voice: "f", text: "Bueno… digamos que no es santo de mi devoción." }] },
        { label: "Diálogo 23", lines: [{ voice: "f", text: "Te dije que el restaurante estaría lleno un sábado a estas horas." }, { voice: "m", text: "Vale, vale, no hace falta que me lo restriegues." }] },
        { label: "Diálogo 24", lines: [{ voice: "m", text: "¿Has terminado el informe?" }, { voice: "f", text: "Estoy en ello, pero me faltan los datos de ventas, y sin ellos no puedo cerrar nada." }] },
        { label: "Diálogo 25", lines: [{ voice: "f", text: "¿Le has contado a Lucía lo del viaje?" }, { voice: "m", text: "Todavía no. Estoy esperando el momento oportuno, que ya sabes cómo se pone." }] },
        { label: "Diálogo 26", lines: [{ voice: "m", text: "Qué bien te ha quedado la presentación." }, { voice: "f", text: "Gracias, aunque me ha costado lo mío. Tres noches sin dormir." }] },
        { label: "Diálogo 27", lines: [{ voice: "f", text: "¿Compramos el sofá gris o el verde?" }, { voice: "m", text: "A mí me da igual, la verdad. Lo que tú veas." }] },
        { label: "Diálogo 28", lines: [{ voice: "m", text: "Dicen que van a subir otra vez el precio del abono de transporte." }, { voice: "f", text: "Pues como sigan así, me compro una bici y santas pascuas." }] },
        { label: "Diálogo 29", lines: [{ voice: "f", text: "¿Te ha dicho ya Marcos si acepta el puesto en Lisboa?" }, { voice: "m", text: "Está hecho un lío. Por un lado le hace mucha ilusión, pero por otro no quiere dejar a su madre sola." }] },
        { label: "Diálogo 30", lines: [{ voice: "m", text: "Oye, perdona por lo del otro día; estuve bastante borde." }, { voice: "f", text: "No te preocupes, agua pasada. Todos tenemos un mal día." }] },
      ],
      items: [
        { n: 21, source: 0, question: "El hombre…", options: ["irá seguro a la presentación.", "no sabe si podrá ir.", "no quiere ir."], answer: 0, explanation: "\"Ni que decir tiene\": por supuesto que irá." },
        { n: 22, source: 1, question: "A la mujer, su nuevo jefe…", options: ["le parece muy religioso.", "no le cae especialmente bien.", "le parece admirable."], answer: 1, explanation: "\"No ser santo de la devoción\" de alguien: no gustarle esa persona." },
        { n: 23, source: 2, question: "El hombre…", options: ["le pide a la mujer que no insista en que ella tenía razón.", "cree que la mujer se equivocaba.", "quiere reservar en otro restaurante."], answer: 0, explanation: "\"No hace falta que me lo restriegues\": no me lo recuerdes más." },
        { n: 24, source: 3, question: "La mujer…", options: ["ya ha terminado el informe.", "no puede acabar el informe todavía.", "no ha empezado el informe."], answer: 1, explanation: "\"Estoy en ello\", pero le faltan los datos de ventas." },
        { n: 25, source: 4, question: "El hombre no le ha contado lo del viaje a Lucía porque…", options: ["lo ha olvidado.", "teme su reacción.", "el viaje no es seguro."], answer: 1, explanation: "\"Ya sabes cómo se pone\": espera el momento oportuno." },
        { n: 26, source: 5, question: "La mujer dice que la presentación…", options: ["le exigió mucho esfuerzo.", "le salió mal.", "la hizo otra persona."], answer: 0, explanation: "\"Me ha costado lo mío\": mucho trabajo." },
        { n: 27, source: 6, question: "El hombre…", options: ["prefiere el sofá verde.", "deja la decisión a la mujer.", "no quiere comprar un sofá."], answer: 1, explanation: "\"Lo que tú veas\": decide tú." },
        { n: 28, source: 7, question: "La mujer…", options: ["piensa usar la bicicleta si el abono sube.", "ya se ha comprado una bicicleta.", "está de acuerdo con la subida."], answer: 0, explanation: "\"Como sigan así, me compro una bici y santas pascuas\": y se acabó el problema." },
        { n: 29, source: 8, question: "Marcos…", options: ["ha rechazado el puesto.", "está indeciso.", "se va a Lisboa con su madre."], answer: 1, explanation: "\"Estar hecho un lío\": no saber qué hacer." },
        { n: 30, source: 9, question: "La mujer…", options: ["sigue enfadada.", "ya ha olvidado el asunto.", "exige una explicación."], answer: 1, explanation: "\"Agua pasada\": ya no tiene importancia." },
      ],
    },
  ],
};
