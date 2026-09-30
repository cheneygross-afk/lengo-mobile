// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a2-auditiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A2 practice exam -- Prueba 2: Comprensión auditiva.
// 40 minutes, 4 tasks, 25 items. Each recording can be heard twice,
// as in the real exam. (The real Tarea 1 answers with pictures; here the
// options describe them in words.)
const WEEK_ACTIVITIES = [
  "A. ir al cine",
  "B. ir al médico",
  "C. cenar con los padres",
  "D. ir al gimnasio",
  "E. estudiar para un examen",
  "F. comprar un regalo",
  "G. jugar al tenis",
  "H. trabajar hasta tarde",
  "I. ir a un concierto",
];

const MESSAGES = [
  "A. Un cambio de horario.",
  "B. Una invitación a una fiesta.",
  "C. Un producto en oferta.",
  "D. Un retraso en un viaje.",
  "E. Una llamada de un médico.",
  "F. Un objeto perdido.",
  "G. Una reunión de trabajo cancelada.",
  "H. Unas entradas de regalo.",
  "I. Una reserva confirmada.",
  "J. Un pedido que ya ha llegado.",
];

export const DELE_A2_AUDITIVA: ExamPaper = {
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
      instructionsEn: "You'll hear six short conversations, each twice. Answer questions 1-6: choose a, b or c.",
      audio: [
        {
          label: "Conversación 1",
          lines: [
            { voice: "m", text: "Hola, buenos días. Quería un billete para Sevilla para el tren de las diez." },
            { voice: "f", text: "Lo siento, el de las diez ya está completo. Tiene uno a las once y media o a las doce y cuarto." },
            { voice: "m", text: "Pues el de las once y media, por favor. Ida y vuelta." },
          ],
        },
        {
          label: "Conversación 2",
          lines: [
            { voice: "f", text: "¿Qué le pongo?" },
            { voice: "m", text: "Un kilo de tomates y medio kilo de fresas. Ah, y una lechuga." },
            { voice: "f", text: "Las fresas se me han terminado esta mañana, lo siento. ¿Quiere unas cerezas? Están muy buenas." },
            { voice: "m", text: "No, gracias. Entonces solo los tomates y la lechuga." },
          ],
        },
        {
          label: "Conversación 3",
          lines: [
            { voice: "f", text: "Carlos, ¿dónde has dejado las llaves del coche? No las encuentro." },
            { voice: "m", text: "Creo que están en la mesa de la cocina, al lado del teléfono." },
            { voice: "f", text: "Aquí no están." },
            { voice: "m", text: "Ah, perdona, las tengo yo en el bolsillo del abrigo." },
          ],
        },
        {
          label: "Conversación 4",
          lines: [
            { voice: "m", text: "¿Qué tiempo va a hacer el fin de semana? Queremos ir a la montaña." },
            { voice: "f", text: "El sábado va a llover todo el día, pero el domingo dicen que va a hacer sol y bastante calor." },
            { voice: "m", text: "Entonces vamos el domingo." },
          ],
        },
        {
          label: "Conversación 5",
          lines: [
            { voice: "f", text: "Perdone, ¿para ir al museo de arte?" },
            { voice: "m", text: "Siga todo recto por esta calle, y en la segunda calle gire a la izquierda. El museo está enfrente de un parque." },
            { voice: "f", text: "¿Está lejos?" },
            { voice: "m", text: "No, a unos cinco minutos andando." },
          ],
        },
        {
          label: "Conversación 6",
          lines: [
            { voice: "m", text: "¿Qué le regalamos a Laura por su cumpleaños? ¿Un libro?" },
            { voice: "f", text: "Ya tiene muchos libros. Le encanta la música; podemos regalarle entradas para un concierto." },
            { voice: "m", text: "Son muy caras… ¿Y una camiseta de su grupo favorito?" },
            { voice: "f", text: "Vale, es buena idea, y es más barata." },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 1,
          source: 0,
          question: "¿A qué hora sale el tren del hombre?",
          options: ["A las diez.", "A las once y media.", "A las doce y cuarto."],
          answer: 1,
          explanation: "The ten o'clock train is full, so he takes the 11:30.",
        },
        {
          n: 2,
          source: 1,
          question: "¿Qué compra el hombre?",
          options: ["Tomates y fresas.", "Tomates, lechuga y cerezas.", "Tomates y lechuga."],
          answer: 2,
          explanation: "There are no strawberries left and he says no to the cherries.",
        },
        {
          n: 3,
          source: 2,
          question: "¿Dónde están las llaves del coche?",
          options: ["En la cocina.", "En el abrigo de Carlos.", "Al lado del teléfono."],
          answer: 1,
          explanation: "\"Las tengo yo en el bolsillo del abrigo.\"",
        },
        {
          n: 4,
          source: 3,
          question: "¿Qué tiempo va a hacer el domingo?",
          options: ["Va a llover.", "Va a hacer frío.", "Va a hacer sol."],
          answer: 2,
          explanation: "Saturday: rain all day; Sunday: sunny and quite hot.",
        },
        {
          n: 5,
          source: 4,
          question: "¿Dónde está el museo?",
          options: ["Enfrente de un parque.", "Al lado de un parque.", "Dentro de un parque."],
          answer: 0,
          explanation: "\"El museo está enfrente de un parque\": opposite a park, a five-minute walk away.",
        },
        {
          n: 6,
          source: 5,
          question: "¿Qué van a regalarle a Laura?",
          options: ["Un libro.", "Una camiseta.", "Entradas para un concierto."],
          answer: 1,
          explanation: "The tickets are too expensive, so they choose a T-shirt of her favourite band.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a escuchar seis noticias de un programa de radio. Escuchará el programa dos veces. Después, debe contestar a las preguntas (7-12). Seleccione la opción correcta (a, b o c).",
      instructionsEn: "You'll hear six news items from a radio programme, twice. Answer questions 7-12: choose a, b or c.",
      audio: [
        {
          label: "Noticia 1",
          lines: [
            {
              voice: "f",
              text: "Buenos días. Empezamos con el tiempo: hoy las temperaturas van a bajar en todo el país y en el norte puede nevar a partir de mil metros. Mañana, en cambio, vuelve el sol.",
            },
          ],
        },
        {
          label: "Noticia 2",
          lines: [
            {
              voice: "f",
              text: "Desde el próximo lunes, los autobuses urbanos van a ser gratis para los menores de dieciocho años. Solo tienen que pedir una tarjeta especial en las oficinas del ayuntamiento.",
            },
          ],
        },
        {
          label: "Noticia 3",
          lines: [
            {
              voice: "f",
              text: "La biblioteca central celebra su cincuenta aniversario con una semana de actividades: cuentacuentos para niños por las mañanas y conciertos gratuitos por la tarde en el patio.",
            },
          ],
        },
        {
          label: "Noticia 4",
          lines: [
            {
              voice: "f",
              text: "Buenas noticias para los deportistas: el nuevo polideportivo del barrio de San Pedro abre sus puertas el sábado. Tiene piscina cubierta, dos pistas de tenis y un gimnasio.",
            },
          ],
        },
        {
          label: "Noticia 5",
          lines: [
            {
              voice: "f",
              text: "Atención a los conductores: la calle Mayor va a estar cerrada al tráfico durante todo el mes de julio por obras. Se recomienda usar el transporte público.",
            },
          ],
        },
        {
          label: "Noticia 6",
          lines: [
            {
              voice: "f",
              text: "Y terminamos con cultura: el cantante Luis Marín presenta su nuevo disco el viernes en el teatro Principal. Las entradas cuestan veinte euros y ya se pueden comprar por internet.",
            },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 7,
          source: 0,
          question: "Según la noticia, hoy…",
          options: ["va a hacer más frío.", "va a hacer sol.", "va a nevar en todo el país."],
          answer: 0,
          explanation: "Temperatures are going down; snow only in the north above 1,000 m. The sun comes back tomorrow.",
        },
        {
          n: 8,
          source: 1,
          question: "Los jóvenes que quieren viajar gratis en autobús…",
          options: ["tienen que comprar una tarjeta.", "tienen que ir al ayuntamiento.", "pueden viajar desde hoy."],
          answer: 1,
          explanation: "They have to ask for a special card at the town hall offices; it starts next Monday.",
        },
        {
          n: 9,
          source: 2,
          question: "En la biblioteca, por la tarde, hay…",
          options: ["actividades para niños.", "música.", "cursos."],
          answer: 1,
          explanation: "Free concerts in the afternoon; storytelling for children is in the morning.",
        },
        {
          n: 10,
          source: 3,
          question: "El nuevo polideportivo…",
          options: ["no tiene piscina.", "abre el fin de semana.", "tiene dos gimnasios."],
          answer: 1,
          explanation: "It opens on Saturday.",
        },
        {
          n: 11,
          source: 4,
          question: "En julio, en la calle Mayor…",
          options: ["no pueden pasar coches.", "hay más autobuses.", "no hay transporte público."],
          answer: 0,
          explanation: "The street will be closed to traffic for the whole of July.",
        },
        {
          n: 12,
          source: 5,
          question: "Las entradas para el concierto de Luis Marín…",
          options: ["son gratis.", "se venden solo en el teatro.", "se pueden comprar en internet."],
          answer: 2,
          explanation: "They cost twenty euros and can be bought online.",
        },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a escuchar una conversación entre dos amigos, Sara y Diego. Escuchará la conversación dos veces. Después, debe relacionar los días de la semana (13-18) con lo que va a hacer Diego (A-I). Hay tres letras que no debe seleccionar.",
      instructionsEn:
        "You'll hear a conversation between two friends, Sara and Diego, twice. Match each day (13-18) with what Diego is going to do (A-I). Three letters are not used.",
      audio: [
        {
          label: "Conversación",
          lines: [
            { voice: "f", text: "Diego, ¿quedamos esta semana para jugar al tenis?" },
            { voice: "m", text: "Uf, Sara, tengo una semana complicadísima. El lunes tengo que ir al médico por la tarde, a revisarme la rodilla." },
            { voice: "f", text: "¿Y el martes?" },
            { voice: "m", text: "El martes tengo una reunión importante y voy a salir de la oficina muy tarde, seguro que después de las nueve." },
            { voice: "f", text: "Vaya. ¿Y el miércoles?" },
            { voice: "m", text: "El miércoles es el cumpleaños de mi hermana y todavía no tengo nada para ella, así que por la tarde voy a ir a las tiendas." },
            { voice: "f", text: "¿El jueves, entonces?" },
            { voice: "m", text: "El jueves ceno en casa de mis padres, como todas las semanas. Pero el viernes estoy libre… ah, no, espera: el viernes voy al cine con mis compañeros de trabajo." },
            { voice: "f", text: "¡Qué vida social! ¿Y el sábado por la mañana?" },
            { voice: "m", text: "El sábado sí. Juego contigo al tenis a las diez, ¿vale? Y el domingo me quedo en casa estudiando, porque el lunes tengo el examen de inglés." },
            { voice: "f", text: "Perfecto, el sábado a las diez." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 13, question: "Lunes", options: WEEK_ACTIVITIES, answer: 1, explanation: "Monday: the doctor, for his knee." },
        { n: 14, question: "Martes", options: WEEK_ACTIVITIES, answer: 7, explanation: "Tuesday: a meeting, he'll leave the office after nine." },
        { n: 15, question: "Miércoles", options: WEEK_ACTIVITIES, answer: 5, explanation: "Wednesday: shopping for his sister's birthday present." },
        { n: 16, question: "Jueves", options: WEEK_ACTIVITIES, answer: 2, explanation: "Thursday: dinner at his parents' house." },
        { n: 17, question: "Viernes", options: WEEK_ACTIVITIES, answer: 0, explanation: "Friday: the cinema with his colleagues." },
        { n: 18, question: "Sábado", options: WEEK_ACTIVITIES, answer: 6, explanation: "Saturday: tennis with Sara at ten. (Sunday he studies; the gym and the concert aren't mentioned.)" },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Usted va a escuchar siete mensajes. Escuchará cada mensaje dos veces. Después, debe relacionar los mensajes (19-25) con los enunciados (A-J). Hay tres enunciados que no debe seleccionar.",
      instructionsEn: "You'll hear seven messages, each twice. Match messages 19-25 with statements A-J. Three statements are not used.",
      audio: [
        {
          label: "Mensaje 19",
          lines: [
            {
              voice: "f",
              text: "Hola, soy Marta, de la tienda de muebles. Le llamo para decirle que la mesa que pidió ya está aquí. Puede venir a recogerla cuando quiera, de lunes a sábado.",
            },
          ],
        },
        {
          label: "Mensaje 20",
          lines: [
            {
              voice: "m",
              text: "Señores pasajeros: el vuelo con destino a Roma sale con cuarenta y cinco minutos de retraso. Les rogamos que esperen en la puerta de embarque.",
            },
          ],
        },
        {
          label: "Mensaje 21",
          lines: [
            {
              voice: "m",
              text: "Hola, Ana, soy Pedro. El sábado hago una cena en mi casa para celebrar que tengo trabajo nuevo. ¿Te vienes? Trae a tu novio si quieres.",
            },
          ],
        },
        {
          label: "Mensaje 22",
          lines: [
            {
              voice: "f",
              text: "Buenas tardes, le llamamos del hotel Miramar para confirmarle su habitación doble para las noches del cuatro y el cinco de agosto. Muchas gracias.",
            },
          ],
        },
        {
          label: "Mensaje 23",
          lines: [
            {
              voice: "m",
              text: "Esta semana, en supermercados Día a Día, el aceite de oliva está a mitad de precio. ¡No lo deje pasar!",
            },
          ],
        },
        {
          label: "Mensaje 24",
          lines: [
            {
              voice: "f",
              text: "Hola, soy Luisa, de la academia. Desde la semana que viene, las clases de los martes empiezan a las siete en vez de a las seis. Hasta pronto.",
            },
          ],
        },
        {
          label: "Mensaje 25",
          lines: [
            {
              voice: "m",
              text: "Hola, te llamo de la estación de autobuses. Hemos encontrado una cartera con tu carné de identidad. Puedes pasar a buscarla por la oficina de información.",
            },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 19, source: 0, question: "Mensaje 19", options: MESSAGES, answer: 9, explanation: "The table the customer ordered has arrived." },
        { n: 20, source: 1, question: "Mensaje 20", options: MESSAGES, answer: 3, explanation: "The flight to Rome is 45 minutes late." },
        { n: 21, source: 2, question: "Mensaje 21", options: MESSAGES, answer: 1, explanation: "Pedro invites Ana to a dinner at his house." },
        { n: 22, source: 3, question: "Mensaje 22", options: MESSAGES, answer: 8, explanation: "The hotel confirms a double room." },
        { n: 23, source: 4, question: "Mensaje 23", options: MESSAGES, answer: 2, explanation: "Olive oil is half price this week." },
        { n: 24, source: 5, question: "Mensaje 24", options: MESSAGES, answer: 0, explanation: "Tuesday classes start at seven instead of six." },
        { n: 25, source: 6, question: "Mensaje 25", options: MESSAGES, answer: 5, explanation: "Someone found a wallet with an ID card." },
      ],
    },
  ],
};
