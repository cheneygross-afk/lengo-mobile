// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b2-auditiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B2 practice exam -- Prueba 2: Comprensión auditiva.
// 40 minutes, 5 tasks, 30 items. Each recording can be heard twice,
// as in the real exam.
const T2_SPEAKERS = ["A. Diego", "B. Paula", "C. Ninguno de los dos"];

const T4_STATEMENTS = [
  "A. Le costó adaptarse al ritmo de trabajo.",
  "B. Considera que la experiencia le ayudó a encontrar empleo.",
  "C. Se arrepiente de haber elegido ese destino.",
  "D. Tuvo problemas con el alojamiento.",
  "E. Aprendió más fuera de clase que dentro.",
  "F. Decidió quedarse a vivir en el país.",
  "G. Le sorprendió la relación entre profesores y alumnos.",
  "H. Se sintió solo durante los primeros meses.",
  "I. Tuvo que cambiar sus planes por motivos económicos.",
  "J. Cree que la estancia fue demasiado corta.",
  "K. Viajó por todo el país los fines de semana.",
  "L. Descubrió una vocación profesional nueva.",
];

export const DELE_B2_AUDITIVA: ExamPaper = {
  id: "auditiva",
  kind: "listening",
  title: "Comprensión auditiva",
  minutes: 40,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar seis conversaciones breves. Escuchará cada conversación dos veces. Después, debe contestar a las preguntas (1-6). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Conversación 1",
          lines: [
            { voice: "f", text: "Oye, ¿al final firmaste el contrato del piso de la calle Serrano?" },
            { voice: "m", text: "Qué va. El casero pedía tres meses de fianza y, encima, no aceptaba mascotas. Con la perra, imposible." },
            { voice: "f", text: "¿Y ahora qué vas a hacer?" },
            { voice: "m", text: "Seguir en casa de mi hermano un par de semanas más, hasta que encuentre otra cosa." },
          ],
        },
        {
          label: "Conversación 2",
          lines: [
            { voice: "m", text: "¿Has visto el correo de recursos humanos? Van a cambiar el sistema de vacaciones." },
            { voice: "f", text: "Sí, a partir de enero hay que pedirlas con dos meses de antelación, no con uno." },
            { voice: "m", text: "Pues yo quería irme en febrero, así que tendré que darme prisa." },
            { voice: "f", text: "Tranquilo, si las pides antes de Navidad llegas a tiempo." },
          ],
        },
        {
          label: "Conversación 3",
          lines: [
            { voice: "f", text: "Buenas tardes, llamo porque el portátil que compré en su web me llegó ayer con la pantalla rota." },
            { voice: "m", text: "Lo lamento mucho. ¿Prefiere que le enviemos uno nuevo o que le devolvamos el importe?" },
            { voice: "f", text: "Prefiero el dinero; ya he encontrado otro modelo en una tienda de mi barrio." },
            { voice: "m", text: "De acuerdo. Un mensajero pasará a recoger el paquete el lunes y en cinco días tendrá el reembolso." },
          ],
        },
        {
          label: "Conversación 4",
          lines: [
            { voice: "m", text: "¿Qué te pareció la obra de teatro?" },
            { voice: "f", text: "Los actores estaban muy bien, sobre todo la protagonista. Lo que no me convenció fue el final: todo se resolvía demasiado deprisa, como si tuvieran prisa por terminar." },
            { voice: "m", text: "Pues a mí me pareció lo mejor, tan inesperado." },
          ],
        },
        {
          label: "Conversación 5",
          lines: [
            { voice: "f", text: "Doctor, llevo una semana con este dolor de espalda y las pastillas no me hacen nada." },
            { voice: "m", text: "Por lo que me cuenta, es muscular. Más que medicación, le vendría bien hacer ejercicios suaves. Le voy a mandar al fisioterapeuta y, si en quince días no mejora, le hacemos una resonancia." },
          ],
        },
        {
          label: "Conversación 6",
          lines: [
            { voice: "m", text: "Oye, ¿te importaría quedarte con las llaves de casa este fin de semana? Es que nos vamos y viene el técnico de la caldera el sábado." },
            { voice: "f", text: "Me encantaría ayudarte, pero el sábado estoy en Valencia en la boda de mi prima. Pregúntale a Julián, que se queda aquí todo el puente." },
          ],
        },
      ],
      items: [
        {
          n: 1,
          source: 0,
          question: "¿Por qué no alquiló el piso el hombre?",
          options: ["Porque era demasiado caro.", "Por las condiciones que ponía el propietario.", "Porque su hermano le ofreció vivir con él."],
          answer: 1,
          explanation: "El casero pedía tres meses de fianza y no aceptaba mascotas.",
        },
        {
          n: 2,
          source: 1,
          question: "Según la mujer, el hombre…",
          options: ["no podrá irse de vacaciones en febrero.", "debe pedir sus vacaciones antes de Navidad.", "tiene que hablar con recursos humanos."],
          answer: 1,
          explanation: "Con dos meses de antelación: si las pide antes de Navidad, llega a tiempo para febrero.",
        },
        {
          n: 3,
          source: 2,
          question: "¿Qué ha decidido la clienta?",
          options: ["Recibir otro portátil.", "Llevar el portátil a una tienda.", "Que le devuelvan el dinero."],
          answer: 2,
          explanation: "\"Prefiero el dinero\": ha encontrado otro modelo en una tienda.",
        },
        {
          n: 4,
          source: 3,
          question: "¿Qué opina la mujer de la obra?",
          options: ["El desenlace le pareció precipitado.", "Los actores no estuvieron a la altura.", "El final fue lo más sorprendente."],
          answer: 0,
          explanation: "\"Todo se resolvía demasiado deprisa\". Al hombre, en cambio, el final le pareció lo mejor.",
        },
        {
          n: 5,
          source: 4,
          question: "¿Qué le recomienda el médico?",
          options: ["Tomar unas pastillas más fuertes.", "Hacerse una resonancia enseguida.", "Hacer rehabilitación."],
          answer: 2,
          explanation: "La manda al fisioterapeuta; la resonancia, solo si en quince días no mejora.",
        },
        {
          n: 6,
          source: 5,
          question: "La mujer…",
          options: ["se ofrece a recibir al técnico.", "no puede hacer el favor que le piden.", "va a pasar el puente con Julián."],
          answer: 1,
          explanation: "Estará en Valencia en una boda y le sugiere preguntar a Julián.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a escuchar una conversación entre dos compañeros de trabajo, Diego y Paula. Escuchará la conversación dos veces. Después, debe decidir si los enunciados (7-12) se refieren a Diego (A), a Paula (B) o a ninguno de los dos (C).",
      audio: [
        {
          label: "Conversación",
          lines: [
            { voice: "m", text: "Paula, ¿tienes un minuto? Es sobre el proyecto de Chile. ¿Sabes ya quién va a viajar a Santiago en marzo?" },
            { voice: "f", text: "En principio iba a ir yo, pero me lo estoy replanteando. Mi hijo empieza el colegio justo esa semana y no quiero perdérmelo." },
            { voice: "m", text: "Te entiendo. Yo me ofrecería, pero no he trabajado nunca con ese cliente y me da miedo meter la pata." },
            { voice: "f", text: "Hombre, tú conoces el proyecto mejor que nadie. Fuiste tú el que preparó la propuesta. Además, hablas con ellos por videollamada casi todas las semanas." },
            { voice: "m", text: "Ya, pero no es lo mismo. Bueno, se lo comentaré a Marisa. ¿Y lo del curso de liderazgo? ¿Te apuntaste?" },
            { voice: "f", text: "Me apunté y lo dejé a la tercera sesión. Mucha teoría y poca práctica. Tú lo terminaste, ¿no?" },
            { voice: "m", text: "Sí, y no me arrepiento. Al principio pensaba como tú, pero la segunda parte, con casos reales, me sirvió muchísimo. De hecho, lo he recomendado a todo mi equipo." },
            { voice: "f", text: "Quizá lo retome el año que viene. Oye, cambiando de tema, ¿vas a la cena de empresa del viernes?" },
            { voice: "m", text: "Este año paso. El viernes me mudo, por fin, y tengo la casa llena de cajas." },
            { voice: "f", text: "¡Enhorabuena! Pues si necesitas ayuda el sábado, dímelo, que tengo furgoneta." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 7, source: 0, question: "Duda si hacer un viaje de trabajo por un motivo familiar.", options: T2_SPEAKERS, answer: 1, explanation: "Paula se lo replantea porque su hijo empieza el colegio." },
        { n: 8, source: 0, question: "Teme cometer un error con un cliente.", options: T2_SPEAKERS, answer: 0, explanation: "Diego: \"me da miedo meter la pata\"." },
        { n: 9, source: 0, question: "Ha viajado a Chile anteriormente.", options: T2_SPEAKERS, answer: 2, explanation: "Nadie dice haber estado en Chile; Diego habla con el cliente por videollamada." },
        { n: 10, source: 0, question: "Abandonó una formación.", options: T2_SPEAKERS, answer: 1, explanation: "Paula dejó el curso de liderazgo a la tercera sesión." },
        { n: 11, source: 0, question: "Ha animado a otras personas a hacer el curso.", options: T2_SPEAKERS, answer: 0, explanation: "Diego lo ha recomendado a todo su equipo." },
        { n: 12, source: 0, question: "Ofrece su ayuda para una mudanza.", options: T2_SPEAKERS, answer: 1, explanation: "Paula tiene furgoneta y se ofrece para el sábado." },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a escuchar una entrevista a una arquitecta. Escuchará la entrevista dos veces. Después, debe contestar a las preguntas (13-18). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Entrevista",
          lines: [
            { voice: "m", text: "Hoy nos acompaña Elena Ruiz, arquitecta especializada en rehabilitación de edificios. Elena, usted defiende que no hace falta construir más, sino aprovechar mejor lo que ya existe. ¿Por qué?" },
            { voice: "f", text: "Porque en España hay millones de viviendas vacías y, al mismo tiempo, mucha gente que no puede pagar un alquiler. Construir tiene un coste ambiental enorme: el cemento es uno de los materiales que más contamina. Rehabilitar un edificio antiguo genera mucho menos CO2 que levantar uno nuevo." },
            { voice: "m", text: "Pero rehabilitar suele ser más caro, ¿no?" },
            { voice: "f", text: "Es un mito que se repite mucho. Depende del estado del edificio, claro, pero en la mayoría de los casos que he estudiado, el coste final es parecido. Lo que ocurre es que es más complicado: hay que coordinar a los vecinos, pedir permisos especiales… A las constructoras les resulta más cómodo empezar de cero." },
            { voice: "m", text: "Usted empezó trabajando en grandes proyectos. ¿Qué le hizo cambiar?" },
            { voice: "f", text: "Trabajé seis años en un estudio que diseñaba torres de oficinas en Oriente Medio. Era un trabajo muy bien pagado, pero un día visité uno de nuestros edificios terminados y estaba medio vacío. Me pregunté para quién estaba trabajando. Volví a mi ciudad, Zaragoza, y empecé con un proyecto pequeño: convertir una antigua fábrica de chocolate en viviendas para jóvenes." },
            { voice: "m", text: "¿Y cómo reaccionaron los vecinos del barrio?" },
            { voice: "f", text: "Al principio, con desconfianza. Pensaban que iba a subir el precio de la zona y que tendrían que irse. Organizamos reuniones abiertas y dejamos que propusieran usos para la planta baja. Al final, allí hay ahora una biblioteca y un comedor social. Esa participación fue la clave del éxito." },
            { voice: "m", text: "¿Qué le pediría a las administraciones?" },
            { voice: "f", text: "Sobre todo, que simplifiquen los trámites. Hoy se tarda más en conseguir un permiso para rehabilitar que en hacer la obra. Y ayudas directas para las comunidades de vecinos con menos recursos, que son precisamente las que viven en los edificios más deteriorados." },
          ],
        },
      ],
      items: [
        {
          n: 13,
          source: 0,
          question: "Según Elena Ruiz, rehabilitar edificios es preferible porque…",
          options: ["es más rápido que construir.", "contamina menos que construir.", "crea más puestos de trabajo."],
          answer: 1,
          explanation: "Rehabilitar genera mucho menos CO2 que levantar un edificio nuevo.",
        },
        {
          n: 14,
          source: 0,
          question: "Sobre el coste de rehabilitar, la arquitecta afirma que…",
          options: ["normalmente es similar al de construir.", "siempre es más barato.", "depende sobre todo de los permisos."],
          answer: 0,
          explanation: "\"Es un mito… el coste final es parecido\" en la mayoría de los casos.",
        },
        {
          n: 15,
          source: 0,
          question: "Las constructoras prefieren construir de nuevo porque…",
          options: ["ganan más dinero.", "les resulta menos complicado.", "los vecinos lo piden."],
          answer: 1,
          explanation: "Rehabilitar exige coordinar vecinos y pedir permisos: \"les resulta más cómodo empezar de cero\".",
        },
        {
          n: 16,
          source: 0,
          question: "Elena dejó su trabajo en Oriente Medio porque…",
          options: ["le pagaban poco.", "echaba de menos su ciudad.", "dudó del sentido de lo que hacía."],
          answer: 2,
          explanation: "Vio un edificio suyo medio vacío y se preguntó para quién trabajaba.",
        },
        {
          n: 17,
          source: 0,
          question: "En el proyecto de la fábrica de chocolate, los vecinos…",
          options: ["participaron en las decisiones.", "se opusieron hasta el final.", "tuvieron que abandonar el barrio."],
          answer: 0,
          explanation: "Propusieron usos para la planta baja; la participación fue \"la clave del éxito\".",
        },
        {
          n: 18,
          source: 0,
          question: "A las administraciones, Elena les pide sobre todo…",
          options: ["que construyan más vivienda pública.", "que agilicen los trámites.", "que prohíban las viviendas vacías."],
          answer: 1,
          explanation: "\"Sobre todo, que simplifiquen los trámites\", y ayudas a las comunidades con menos recursos.",
        },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Usted va a escuchar a seis personas que hablan de su experiencia estudiando en el extranjero. Escuchará a cada persona dos veces. Seleccione el enunciado (A-L) que corresponde al tema del que habla cada persona (19-24). Hay doce enunciados; seleccione solamente seis.",
      audio: [
        {
          label: "Persona 19",
          lines: [
            { voice: "f", text: "Pasé un curso en Lyon con una beca Erasmus. Las clases estaban bien, pero lo que de verdad me cambió fue compartir piso con cinco estudiantes de cuatro países distintos. Discutíamos de política en la cocina, cocinábamos juntos… Eso no te lo enseña ninguna asignatura." },
          ],
        },
        {
          label: "Persona 20",
          lines: [
            { voice: "m", text: "Yo tenía pensado irme un año entero a Estados Unidos, pero la matrícula y el alojamiento eran carísimos y la beca no cubría ni la mitad. Al final me fui un semestre a Polonia, que era mucho más asequible, y la verdad es que no me arrepiento." },
          ],
        },
        {
          label: "Persona 21",
          lines: [
            { voice: "f", text: "En Finlandia llamaba a los profesores por su nombre y podías tomar un café con ellos después de clase para comentar un trabajo. En mi universidad eso era impensable; allí casi no nos atrevíamos a levantar la mano." },
          ],
        },
        {
          label: "Persona 22",
          lines: [
            { voice: "m", text: "Cuando llegué a Seúl no entendía nada: ni el idioma, ni la comida, ni cómo funcionaba el metro. Los primeros meses los pasé prácticamente encerrado en la residencia, hablando con mi familia por videollamada. Luego me uní a un club de fútbol y todo cambió." },
          ],
        },
        {
          label: "Persona 23",
          lines: [
            { voice: "f", text: "Fui a Berlín a estudiar Ingeniería, pero allí hice un voluntariado en un centro de refugiados y me di cuenta de que lo que quería era trabajar con personas. Al volver cambié de carrera y hoy soy trabajadora social." },
          ],
        },
        {
          label: "Persona 24",
          lines: [
            { voice: "m", text: "En todas las entrevistas de trabajo me preguntan por mi año en Dublín. Creo que a las empresas les interesa menos el inglés que el hecho de que supieras arreglártelas solo en otro país. Estoy convencido de que me contrataron por eso." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 19, source: 0, question: "Persona 19", options: T4_STATEMENTS, answer: 4, explanation: "Lo que la cambió fue la convivencia en el piso: \"eso no te lo enseña ninguna asignatura\"." },
        { n: 20, source: 1, question: "Persona 20", options: T4_STATEMENTS, answer: 8, explanation: "Estados Unidos era demasiado caro y se fue a Polonia." },
        { n: 21, source: 2, question: "Persona 21", options: T4_STATEMENTS, answer: 6, explanation: "Trato cercano con los profesores, impensable en su universidad." },
        { n: 22, source: 3, question: "Persona 22", options: T4_STATEMENTS, answer: 7, explanation: "Los primeros meses los pasó encerrado en la residencia." },
        { n: 23, source: 4, question: "Persona 23", options: T4_STATEMENTS, answer: 11, explanation: "Descubrió que quería trabajar con personas y cambió de carrera." },
        { n: 24, source: 5, question: "Persona 24", options: T4_STATEMENTS, answer: 1, explanation: "Cree que lo contrataron por su año en Dublín." },
      ],
    },
    {
      title: "Tarea 5",
      instructions:
        "Usted va a escuchar un fragmento de un programa de radio sobre el sueño. Escuchará el audio dos veces. Después, debe contestar a las preguntas (25-30). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Programa de radio",
          lines: [
            { voice: "f", text: "Buenas noches y bienvenidos a Mente sana. Hoy hablamos de algo que hacemos todos, cada día, y que sin embargo descuidamos: dormir. Según la Sociedad Española de Neurología, casi la mitad de los adultos duerme menos de las siete horas recomendadas, y uno de cada diez sufre insomnio crónico." },
            { voice: "f", text: "¿Por qué dormimos cada vez peor? Los especialistas coinciden en señalar a las pantallas. No tanto por la famosa luz azul, cuyo efecto, según los estudios más recientes, es menor de lo que se creía, sino porque el móvil nos mantiene mentalmente activos: contestamos mensajes, leemos noticias, vemos un vídeo más… y retrasamos la hora de acostarnos." },
            { voice: "f", text: "Otro factor es el horario. En España cenamos tarde, vemos la televisión hasta muy tarde y, sin embargo, nos levantamos a la misma hora que en el resto de Europa. Algunos expertos atribuyen parte del problema a que el país vive en un huso horario que no le corresponde geográficamente: el sol sale y se pone más tarde de lo que marcaría la hora solar." },
            { voice: "f", text: "Las consecuencias de dormir poco van mucho más allá del cansancio. La falta de sueño afecta a la memoria, al estado de ánimo y a la capacidad de tomar decisiones, y a largo plazo se relaciona con enfermedades cardiovasculares y con la obesidad. Curiosamente, quien duerme poco tiende a comer más, sobre todo alimentos ricos en azúcar." },
            { voice: "f", text: "¿Qué podemos hacer? La recomendación más repetida es mantener un horario regular, también los fines de semana. Dormir hasta mediodía el domingo no compensa las horas perdidas durante la semana; al contrario, desajusta el reloj interno y hace más difícil madrugar el lunes. También conviene dejar el móvil fuera del dormitorio y evitar el ejercicio intenso en las dos horas antes de acostarse." },
            { voice: "f", text: "Y un último consejo, que quizá les sorprenda: si llevan más de veinte minutos en la cama sin poder dormir, levántense. Hagan algo tranquilo, con poca luz, y vuelvan a acostarse cuando tengan sueño. Dar vueltas en la cama solo aumenta la ansiedad." },
          ],
        },
      ],
      items: [
        {
          n: 25,
          source: 0,
          question: "Según el programa, en España…",
          options: ["la mayoría de los adultos sufre insomnio.", "muchos adultos no duermen lo suficiente.", "se duerme más que en el resto de Europa."],
          answer: 1,
          explanation: "Casi la mitad duerme menos de siete horas; el insomnio crónico afecta a uno de cada diez.",
        },
        {
          n: 26,
          source: 0,
          question: "En cuanto a las pantallas, los expertos creen que el principal problema es que…",
          options: ["su luz impide que el cerebro descanse.", "nos hacen retrasar el momento de dormir.", "producen dolor de cabeza."],
          answer: 1,
          explanation: "El efecto de la luz azul es menor de lo que se creía; el móvil nos mantiene activos y retrasamos la hora de acostarnos.",
        },
        {
          n: 27,
          source: 0,
          question: "Según algunos expertos, parte del problema en España se debe a…",
          options: ["su huso horario.", "el clima caluroso.", "las jornadas laborales largas."],
          answer: 0,
          explanation: "El país vive en un huso horario que no le corresponde geográficamente.",
        },
        {
          n: 28,
          source: 0,
          question: "Según el programa, las personas que duermen poco…",
          options: ["suelen perder peso.", "tienden a comer más dulces.", "toman peores decisiones solo a largo plazo."],
          answer: 1,
          explanation: "\"Quien duerme poco tiende a comer más, sobre todo alimentos ricos en azúcar\".",
        },
        {
          n: 29,
          source: 0,
          question: "Sobre dormir más el fin de semana, la locutora dice que…",
          options: ["ayuda a recuperar el sueño perdido.", "es recomendable solo los domingos.", "empeora el problema."],
          answer: 2,
          explanation: "No compensa las horas perdidas y desajusta el reloj interno.",
        },
        {
          n: 30,
          source: 0,
          question: "Si una persona no consigue dormirse, se recomienda…",
          options: ["quedarse en la cama con los ojos cerrados.", "levantarse y hacer algo relajante.", "hacer ejercicio suave."],
          answer: 1,
          explanation: "Tras veinte minutos sin dormir, levantarse, hacer algo tranquilo y volver cuando haya sueño.",
        },
      ],
    },
  ],
};
