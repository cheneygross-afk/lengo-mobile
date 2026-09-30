// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b1-auditiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B1 practice exam -- Prueba 2: Comprensión auditiva.
// 40 minutes, 5 tasks, 30 items. Each recording can be heard twice,
// as in the real exam.
const T4_STATEMENTS = [
  "A. Aprendió a cocinar por necesidad.",
  "B. Cocina sobre todo los fines de semana.",
  "C. Prefiere comer fuera de casa.",
  "D. Aprendió a cocinar con un familiar.",
  "E. Cocina para relajarse después del trabajo.",
  "F. Nunca sigue las recetas al pie de la letra.",
  "G. Aprendió gracias a internet.",
  "H. Cocina solo platos de su país.",
  "I. Ha convertido la cocina en su profesión.",
  "J. Intenta cocinar sin tirar comida.",
];

const T5_SPEAKERS = ["A. Pablo", "B. Nuria", "C. Ninguno de los dos"];

export const DELE_B1_AUDITIVA: ExamPaper = {
  id: "auditiva",
  kind: "listening",
  title: "Comprensión auditiva",
  minutes: 40,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar seis mensajes o conversaciones breves. Escuchará cada audio dos veces. Después, debe contestar a las preguntas (1-6). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Mensaje 1",
          lines: [
            {
              voice: "f",
              text: "Hola, Javier, soy Inés. Te llamo porque al final no puedo quedar esta tarde para el café: me han cambiado el turno en el hospital y entro a las cuatro. ¿Te viene bien mañana a la misma hora? Si no, el viernes estoy libre todo el día. Llámame cuando puedas.",
            },
          ],
        },
        {
          label: "Conversación 2",
          lines: [
            { voice: "m", text: "Perdone, ¿el autobús treinta y dos para en la plaza Mayor?" },
            { voice: "f", text: "Antes sí, pero desde que están de obras en el centro ha cambiado el recorrido. Tiene que bajarse en la calle Toledo y caminar unos cinco minutos." },
            { voice: "m", text: "Vaya. ¿Y no hay otro que me deje más cerca?" },
            { voice: "f", text: "El dieciocho, pero pasa cada media hora. Le compensa más el treinta y dos." },
          ],
        },
        {
          label: "Mensaje 3",
          lines: [
            {
              voice: "m",
              text: "Atención, clientes: les recordamos que este domingo, con motivo de la fiesta local, el centro comercial abrirá solo de once de la mañana a tres de la tarde. Los cines y los restaurantes de la planta superior mantendrán su horario habitual.",
            },
          ],
        },
        {
          label: "Conversación 4",
          lines: [
            { voice: "f", text: "¿Qué tal la entrevista de ayer?" },
            { voice: "m", text: "Pues mejor de lo que esperaba. Me preguntaron mucho sobre mi experiencia en el extranjero, y eso me vino bien. Lo único que no me convence es el horario: hay que trabajar dos sábados al mes." },
            { voice: "f", text: "Bueno, eso no es tanto." },
            { voice: "m", text: "Ya, pero los sábados juego al fútbol con el equipo del barrio. Ya veremos." },
          ],
        },
        {
          label: "Mensaje 5",
          lines: [
            {
              voice: "f",
              text: "Buenos días, le llamamos de la clínica dental Sonrisa. Le recordamos que tiene cita mañana a las diez y media con la doctora Méndez. Por favor, traiga la radiografía que le hicieron el mes pasado. Si no puede venir, avísenos con veinticuatro horas de antelación.",
            },
          ],
        },
        {
          label: "Conversación 6",
          lines: [
            { voice: "m", text: "Mamá, ¿puedo ir al concierto del sábado con Leo y su hermano?" },
            { voice: "f", text: "¿Hasta qué hora es?" },
            { voice: "m", text: "Termina a las doce, pero el padre de Leo nos recoge en la puerta." },
            { voice: "f", text: "Bueno, vale. Pero antes tienes que terminar el trabajo de historia, que lo tienes que entregar el lunes." },
          ],
        },
      ],
      items: [
        {
          n: 1,
          source: 0,
          question: "¿Por qué llama Inés a Javier?",
          options: ["Para cambiar el día de una cita.", "Para decirle que está enferma.", "Para invitarle al hospital."],
          answer: 0,
          explanation: "No puede quedar esta tarde por un cambio de turno y propone mañana o el viernes.",
        },
        {
          n: 2,
          source: 1,
          question: "¿Qué le recomienda la mujer al hombre?",
          options: ["Tomar el autobús dieciocho.", "Tomar el treinta y dos y caminar un poco.", "Ir andando desde allí."],
          answer: 1,
          explanation: "\"Le compensa más el treinta y dos\", aunque tenga que caminar cinco minutos.",
        },
        {
          n: 3,
          source: 2,
          question: "¿Qué pasa este domingo en el centro comercial?",
          options: ["Estará cerrado todo el día.", "Los cines cerrarán antes.", "Las tiendas tendrán un horario reducido."],
          answer: 2,
          explanation: "Abre solo de once a tres; los cines y restaurantes mantienen su horario.",
        },
        {
          n: 4,
          source: 3,
          question: "¿Qué le preocupa al hombre del nuevo trabajo?",
          options: ["Que no tiene experiencia.", "Que tendría que trabajar algunos sábados.", "Que la entrevista salió mal."],
          answer: 1,
          explanation: "Hay que trabajar dos sábados al mes, y los sábados juega al fútbol.",
        },
        {
          n: 5,
          source: 4,
          question: "¿Qué tiene que llevar el paciente a la cita?",
          options: ["Una radiografía.", "Una receta.", "Un informe del hospital."],
          answer: 0,
          explanation: "\"Traiga la radiografía que le hicieron el mes pasado.\"",
        },
        {
          n: 6,
          source: 5,
          question: "¿Qué condición le pone la madre a su hijo?",
          options: ["Que vuelva antes de las doce.", "Que vaya con su padre.", "Que acabe un trabajo del colegio."],
          answer: 2,
          explanation: "\"Antes tienes que terminar el trabajo de historia.\" El padre de Leo los recoge.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a escuchar a una mujer que cuenta una experiencia personal. Escuchará el audio dos veces. Después, debe contestar a las preguntas (7-12). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Un año en Galicia",
          lines: [
            { voice: "f", text: "Me llamo Clara y soy de Valencia. Hace tres años, cuando terminé la carrera de Biología, no encontraba trabajo en mi ciudad, así que acepté una beca en un centro de investigación marina en Vigo, en Galicia. Al principio pensaba quedarme solo seis meses." },
            { voice: "f", text: "Lo que más me costó fue el clima. Yo venía del Mediterráneo, con sol casi todo el año, y allí llovió durante semanas enteras. Los primeros meses me sentía un poco triste, sobre todo los domingos, cuando no conocía a nadie." },
            { voice: "f", text: "Todo cambió cuando me apunté a un coro. Mi compañera de piso cantaba en él y me insistió tanto que al final fui a un ensayo. No sé cantar muy bien, la verdad, pero allí conocí a gente de todas las edades que me invitaba a sus casas, a sus fiestas de pueblo… Gracias a ellos descubrí la Galicia de verdad." },
            { voice: "f", text: "También aprendí algo de gallego. No lo necesitaba para el trabajo, porque en el centro todo se hacía en español o en inglés, pero quería entender las canciones del coro y las conversaciones de las comidas familiares." },
            { voice: "f", text: "Al final no me quedé seis meses, sino casi dos años. Volví a Valencia porque me ofrecieron un contrato fijo en la universidad, y no podía decir que no. Pero cada verano vuelvo a Vigo para el concierto anual del coro. Siempre digo que me fui a estudiar el mar y volví sabiendo cantar… más o menos." },
          ],
        },
      ],
      items: [
        {
          n: 7,
          source: 0,
          question: "Clara se fue a Galicia porque…",
          options: ["quería conocer otra región.", "no encontraba empleo en Valencia.", "tenía familia allí."],
          answer: 1,
          explanation: "\"No encontraba trabajo en mi ciudad, así que acepté una beca.\"",
        },
        {
          n: 8,
          source: 0,
          question: "Al principio, lo más difícil para Clara fue…",
          options: ["el tiempo.", "el trabajo.", "la comida."],
          answer: 0,
          explanation: "\"Lo que más me costó fue el clima\": llovía durante semanas.",
        },
        {
          n: 9,
          source: 0,
          question: "Clara entró en el coro…",
          options: ["porque siempre le había gustado cantar.", "por un anuncio en el centro de investigación.", "animada por su compañera de piso."],
          answer: 2,
          explanation: "Su compañera de piso cantaba en él y le insistió mucho.",
        },
        {
          n: 10,
          source: 0,
          question: "Según Clara, gracias al coro…",
          options: ["mejoró mucho su voz.", "conoció mejor la cultura gallega.", "encontró un trabajo nuevo."],
          answer: 1,
          explanation: "\"Gracias a ellos descubrí la Galicia de verdad.\" Dice que no canta muy bien.",
        },
        {
          n: 11,
          source: 0,
          question: "Clara aprendió gallego…",
          options: ["porque lo exigían en su trabajo.", "para hacer los exámenes de la beca.", "para entender mejor a la gente de su entorno."],
          answer: 2,
          explanation: "No lo necesitaba para el trabajo; quería entender las canciones y las conversaciones.",
        },
        {
          n: 12,
          source: 0,
          question: "¿Por qué volvió Clara a Valencia?",
          options: ["Porque le ofrecieron un trabajo estable.", "Porque terminó la beca.", "Porque echaba de menos el sol."],
          answer: 0,
          explanation: "\"Me ofrecieron un contrato fijo en la universidad.\"",
        },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a escuchar seis noticias de un programa de radio. Escuchará el programa dos veces. Después, debe contestar a las preguntas (13-18). Seleccione la opción correcta (a, b o c).",
      audio: [
        {
          label: "Noticia 1",
          lines: [
            { voice: "m", text: "El Ayuntamiento de Zaragoza ha anunciado que, a partir del próximo lunes, los autobuses urbanos serán gratuitos para los menores de dieciocho años. Para viajar, los jóvenes tendrán que llevar una tarjeta que pueden solicitar en internet o en las oficinas municipales." },
          ],
        },
        {
          label: "Noticia 2",
          lines: [
            { voice: "f", text: "Un grupo de voluntarios ha recogido más de dos toneladas de basura en las playas de la costa de Almería durante el fin de semana. La mayor parte eran plásticos y restos de redes de pesca. Los organizadores piden a los bañistas que no dejen nada en la arena." },
          ],
        },
        {
          label: "Noticia 3",
          lines: [
            { voice: "m", text: "La biblioteca municipal de Salamanca abrirá también por las noches durante el mes de junio, cuando los estudiantes preparan sus exámenes. Estará abierta hasta las dos de la madrugada, de domingo a jueves." },
          ],
        },
        {
          label: "Noticia 4",
          lines: [
            { voice: "f", text: "Según una encuesta publicada hoy, siete de cada diez españoles prefieren pasar sus vacaciones en España en lugar de viajar al extranjero. Los destinos favoritos siguen siendo la playa, aunque cada vez más personas eligen el turismo rural." },
          ],
        },
        {
          label: "Noticia 5",
          lines: [
            { voice: "m", text: "El museo de Bellas Artes de Bilbao ha recibido este año un número récord de visitantes: casi medio millón. La directora del museo explica que el éxito se debe sobre todo a la exposición dedicada a la pintora mexicana Frida Kahlo, que se puede visitar hasta el mes de septiembre." },
          ],
        },
        {
          label: "Noticia 6",
          lines: [
            { voice: "f", text: "Y terminamos con el tiempo. Mañana las temperaturas bajarán en todo el norte de la península y habrá lluvias en Galicia y Asturias. En el resto del país el cielo estará despejado, aunque habrá viento fuerte en la costa mediterránea." },
          ],
        },
      ],
      items: [
        {
          n: 13,
          source: 0,
          question: "Según la noticia, los jóvenes de Zaragoza…",
          options: ["pagarán la mitad del billete.", "no pagarán el autobús con una tarjeta especial.", "tendrán autobuses nuevos."],
          answer: 1,
          explanation: "Los autobuses serán gratuitos para menores de 18 con una tarjeta que se solicita en internet o en oficinas.",
        },
        {
          n: 14,
          source: 1,
          question: "La mayoría de la basura recogida en Almería era…",
          options: ["de plástico y de redes.", "de vidrio.", "de restos de comida."],
          answer: 0,
          explanation: "\"La mayor parte eran plásticos y restos de redes de pesca.\"",
        },
        {
          n: 15,
          source: 2,
          question: "En junio, la biblioteca de Salamanca…",
          options: ["cerrará los fines de semana.", "tendrá un horario nocturno algunos días.", "organizará cursos para estudiantes."],
          answer: 1,
          explanation: "Abrirá hasta las dos de la madrugada de domingo a jueves.",
        },
        {
          n: 16,
          source: 3,
          question: "Según la encuesta, cada vez más españoles…",
          options: ["viajan al extranjero.", "van de vacaciones a la playa.", "eligen el turismo rural."],
          answer: 2,
          explanation: "La playa sigue siendo lo favorito, pero \"cada vez más personas eligen el turismo rural\".",
        },
        {
          n: 17,
          source: 4,
          question: "El museo de Bilbao ha tenido tantas visitas gracias a…",
          options: ["una exposición temporal.", "la entrada gratuita.", "su nuevo edificio."],
          answer: 0,
          explanation: "El éxito se debe a la exposición de Frida Kahlo, abierta hasta septiembre.",
        },
        {
          n: 18,
          source: 5,
          question: "Mañana, en la costa mediterránea…",
          options: ["lloverá.", "hará viento.", "subirán las temperaturas."],
          answer: 1,
          explanation: "\"Habrá viento fuerte en la costa mediterránea.\" La lluvia será en Galicia y Asturias.",
        },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Usted va a escuchar a seis personas que hablan sobre su relación con la cocina. Escuchará a cada persona dos veces. Seleccione el enunciado (A-J) que corresponde al tema del que habla cada persona (19-24). Hay cuatro enunciados que no debe seleccionar.",
      audio: [
        {
          label: "Persona 19",
          lines: [
            { voice: "m", text: "Yo no sabía ni freír un huevo hasta los veinticinco años. Pero cuando me fui a vivir solo, me cansé enseguida de la comida precocinada y de gastar tanto dinero. Así que no me quedó más remedio que aprender." },
          ],
        },
        {
          label: "Persona 20",
          lines: [
            { voice: "f", text: "Todo lo que sé me lo enseñó mi abuela. Pasaba los veranos en su casa del pueblo y me dejaba ayudarla: pelar patatas, amasar el pan… Todavía hago su cocido exactamente como ella." },
          ],
        },
        {
          label: "Persona 21",
          lines: [
            { voice: "m", text: "Llego a casa cansadísimo, con la cabeza llena de problemas de la oficina. Y en cuanto me pongo a cortar cebolla y a preparar la cena, me olvido de todo. Para mí es mejor que cualquier terapia." },
          ],
        },
        {
          label: "Persona 22",
          lines: [
            { voice: "f", text: "Aprendí viendo vídeos. Al principio buscaba cosas muy fáciles, como una tortilla o una ensalada, y poco a poco me atreví con platos más complicados. Hoy hay tutoriales para todo." },
          ],
        },
        {
          label: "Persona 23",
          lines: [
            { voice: "m", text: "Empecé cocinando para mis amigos, luego hice un curso, y hace dos años abrí un pequeño restaurante en mi barrio. Es mucho trabajo, pero no lo cambiaría por nada." },
          ],
        },
        {
          label: "Persona 24",
          lines: [
            { voice: "f", text: "En casa aprovechamos todo. Con el pan duro hago torrijas o migas, con las verduras que sobran, cremas… Me parece increíble la cantidad de comida que se tira a la basura." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 19, source: 0, question: "Persona 19", options: T4_STATEMENTS, answer: 0, explanation: "Se fue a vivir solo y \"no me quedó más remedio que aprender\"." },
        { n: 20, source: 1, question: "Persona 20", options: T4_STATEMENTS, answer: 3, explanation: "Aprendió con su abuela en el pueblo." },
        { n: 21, source: 2, question: "Persona 21", options: T4_STATEMENTS, answer: 4, explanation: "Cocinar le hace olvidar los problemas de la oficina." },
        { n: 22, source: 3, question: "Persona 22", options: T4_STATEMENTS, answer: 6, explanation: "Aprendió con vídeos y tutoriales." },
        { n: 23, source: 4, question: "Persona 23", options: T4_STATEMENTS, answer: 8, explanation: "Abrió un restaurante: la cocina es su profesión." },
        { n: 24, source: 5, question: "Persona 24", options: T4_STATEMENTS, answer: 9, explanation: "Aprovecha el pan duro y las verduras que sobran para no tirar comida." },
      ],
    },
    {
      title: "Tarea 5",
      instructions:
        "Usted va a escuchar una conversación entre dos amigos, Pablo y Nuria. Escuchará la conversación dos veces. Después, debe decidir si los enunciados (25-30) se refieren a Pablo (A), a Nuria (B) o a ninguno de los dos (C).",
      audio: [
        {
          label: "Conversación",
          lines: [
            { voice: "m", text: "¡Nuria! ¡Cuánto tiempo! ¿Qué tal te va en el piso nuevo?" },
            { voice: "f", text: "Muy bien, aunque la mudanza fue horrible. Tuve que subir todas las cajas a pie porque el ascensor estaba estropeado. Pero el barrio me encanta: hay mercado, parques, y estoy a diez minutos del trabajo." },
            { voice: "m", text: "Qué suerte. Yo tardo casi una hora en llegar a la oficina. Estoy pensando en comprarme una bici eléctrica, porque en coche hay unos atascos terribles." },
            { voice: "f", text: "Pues hazlo. Mi hermano se compró una el año pasado y está encantado. Oye, ¿y al final hiciste el viaje a Portugal?" },
            { voice: "m", text: "Sí, fuimos a Oporto en Semana Santa. Precioso, aunque comí tanto bacalao que no quiero verlo en un año. ¿Tú no ibas a ir a Italia?" },
            { voice: "f", text: "Tenía los billetes, pero con la mudanza lo tuve que dejar para otoño. Ahora estoy ahorrando para los muebles: el salón está casi vacío." },
            { voice: "m", text: "Si quieres, te doy la estantería que tengo en el trastero. Está nueva; no la uso desde que cambié de piso." },
            { voice: "f", text: "¿En serio? ¡Me vendría genial! El sábado hago una pequeña fiesta para inaugurar la casa. Vente y la traes." },
            { voice: "m", text: "El sábado tengo boda de un primo, pero el domingo por la mañana te la llevo, ¿vale?" },
            { voice: "f", text: "Perfecto. Te invito a comer." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 25, source: 0, question: "Vive cerca de su trabajo.", options: T5_SPEAKERS, answer: 1, explanation: "Nuria está a diez minutos del trabajo; Pablo tarda casi una hora." },
        { n: 26, source: 0, question: "Se ha comprado una bicicleta eléctrica.", options: T5_SPEAKERS, answer: 2, explanation: "Pablo solo lo está pensando; quien se la compró fue el hermano de Nuria." },
        { n: 27, source: 0, question: "Ha estado de viaje en primavera.", options: T5_SPEAKERS, answer: 0, explanation: "Pablo fue a Oporto en Semana Santa." },
        { n: 28, source: 0, question: "Ha aplazado unas vacaciones.", options: T5_SPEAKERS, answer: 1, explanation: "Nuria dejó el viaje a Italia para otoño por la mudanza." },
        { n: 29, source: 0, question: "Va a regalar un mueble.", options: T5_SPEAKERS, answer: 0, explanation: "Pablo le ofrece a Nuria su estantería." },
        { n: 30, source: 0, question: "No puede ir a la fiesta del sábado.", options: T5_SPEAKERS, answer: 0, explanation: "Pablo tiene la boda de un primo el sábado." },
      ],
    },
  ],
};
