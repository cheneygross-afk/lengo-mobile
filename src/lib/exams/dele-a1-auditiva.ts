// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a1-auditiva.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A1 practice exam -- Prueba 2: Comprensión auditiva.
// 20 minutes, 4 tasks, 25 items. Each recording can be heard twice, as
// in the real exam. (The real Tarea 1 answers with pictures; here the
// options describe them in words.)
const FAMILY_INFO = [
  "A. Es médico.",
  "B. Vive en Argentina.",
  "C. Tiene un gato.",
  "D. Estudia en la universidad.",
  "E. Toca el piano.",
  "F. Trabaja en un banco.",
  "G. Tiene tres años.",
  "H. Cocina muy bien.",
  "I. Juega al fútbol.",
  "J. Es profesora de inglés.",
  "K. Habla francés.",
];

const STATEMENTS = [
  "A. Una cita con el médico.",
  "B. Una invitación a cenar.",
  "C. Un cambio de hora de una clase.",
  "D. Una tienda con precios más baratos.",
  "E. Un tren con retraso.",
  "F. Unas llaves perdidas.",
  "G. Un cumpleaños.",
  "H. Una mesa reservada en un restaurante.",
  "I. Un piso en alquiler.",
  "J. Una película nueva en el cine.",
];

export const DELE_A1_AUDITIVA: ExamPaper = {
  id: "auditiva",
  kind: "listening",
  title: "Comprensión auditiva",
  minutes: 20,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar cinco conversaciones breves. Escuchará cada conversación dos veces. Después, debe contestar a las preguntas (1-5). Seleccione la opción correcta (a, b o c).",
      instructionsEn: "You'll hear five short conversations, each twice. Answer questions 1-5: choose a, b or c.",
      audio: [
        {
          label: "Conversación 1",
          lines: [
            { voice: "f", text: "¿Qué quieres tomar?" },
            { voice: "m", text: "Un café con leche, por favor. Y un bocadillo de queso." },
          ],
        },
        {
          label: "Conversación 2",
          lines: [
            { voice: "m", text: "Perdone, ¿qué hora es?" },
            { voice: "f", text: "Son las tres y media." },
          ],
        },
        {
          label: "Conversación 3",
          lines: [
            { voice: "f", text: "¿Dónde están mis gafas?" },
            { voice: "m", text: "Están en la mesa, al lado del ordenador." },
          ],
        },
        {
          label: "Conversación 4",
          lines: [
            { voice: "m", text: "¿Cuánto cuesta esta camiseta?" },
            { voice: "f", text: "Quince euros. La azul y la blanca también cuestan quince." },
          ],
        },
        {
          label: "Conversación 5",
          lines: [
            { voice: "f", text: "¿Qué haces los domingos?" },
            { voice: "m", text: "Normalmente voy a la piscina por la mañana y por la tarde veo la tele." },
          ],
        },
      ],
      layout: "choice",
      items: [
        { n: 1, question: "¿Qué pide el hombre?", options: ["Un café con leche y un bocadillo.", "Un té y un bocadillo.", "Un café solo."], answer: 0, source: 0, explanation: "\"Un café con leche, por favor. Y un bocadillo de queso.\"" },
        { n: 2, question: "¿Qué hora es?", options: ["Las tres y cuarto.", "Las tres y media.", "Las cuatro y media."], answer: 1, source: 1, explanation: "\"Son las tres y media\": half past three." },
        { n: 3, question: "¿Dónde están las gafas?", options: ["En la mesa.", "En el ordenador.", "Debajo de la mesa."], answer: 0, source: 2, explanation: "\"En la mesa, al lado del ordenador.\"" },
        { n: 4, question: "¿Cuánto cuesta la camiseta?", options: ["Cincuenta euros.", "Cinco euros.", "Quince euros."], answer: 2, source: 3, explanation: "\"Quince euros.\"" },
        { n: 5, question: "¿Qué hace el hombre los domingos por la mañana?", options: ["Va a la piscina.", "Ve la tele.", "Trabaja."], answer: 0, source: 4, explanation: "\"Voy a la piscina por la mañana y por la tarde veo la tele.\"" },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a escuchar cinco anuncios. Escuchará cada anuncio dos veces. Después, debe contestar a las preguntas (6-10). Seleccione la opción correcta (a, b o c).",
      instructionsEn: "You'll hear five announcements, each twice. Answer questions 6-10: choose a, b or c.",
      audio: [
        { label: "Anuncio 1", lines: [{ voice: "f", text: "Señores pasajeros, el tren a Toledo sale de la vía cuatro a las doce y diez." }] },
        { label: "Anuncio 2", lines: [{ voice: "m", text: "Supermercado Día a Día: esta semana, la fruta y la verdura, a mitad de precio." }] },
        { label: "Anuncio 3", lines: [{ voice: "f", text: "Atención: la biblioteca cierra en quince minutos. Por favor, dejen los libros en las mesas." }] },
        { label: "Anuncio 4", lines: [{ voice: "m", text: "Bienvenidos al museo. Está prohibido hacer fotos en las salas. Gracias." }] },
        { label: "Anuncio 5", lines: [{ voice: "f", text: "Hola, soy Marta, de la academia. Mañana no hay clase. Nos vemos el lunes a las seis." }] },
      ],
      layout: "choice",
      items: [
        { n: 6, question: "El tren a Toledo sale…", options: ["de la vía cuatro.", "a las doce menos diez.", "de la vía dos."], answer: 0, source: 0, explanation: "\"Sale de la vía cuatro a las doce y diez.\"" },
        { n: 7, question: "Esta semana en el supermercado…", options: ["la fruta es más barata.", "la carne es gratis.", "cierran temprano."], answer: 0, source: 1, explanation: "\"La fruta y la verdura, a mitad de precio.\"" },
        { n: 8, question: "La biblioteca…", options: ["cierra pronto.", "abre en quince minutos.", "tiene libros nuevos."], answer: 0, source: 2, explanation: "\"La biblioteca cierra en quince minutos.\"" },
        { n: 9, question: "En el museo no se puede…", options: ["hacer fotos.", "hablar.", "comer."], answer: 0, source: 3, explanation: "\"Está prohibido hacer fotos en las salas.\"" },
        { n: 10, question: "La próxima clase es…", options: ["el lunes.", "mañana.", "el sábado."], answer: 0, source: 4, explanation: "\"Mañana no hay clase. Nos vemos el lunes a las seis.\"" },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a escuchar a Javier hablando de su familia. Lo escuchará dos veces. Relacione a las personas (11-18) con la información (A-K). Hay tres letras que no debe seleccionar.",
      instructionsEn: "You'll hear Javier talking about his family, twice. Match each person (11-18) with the information (A-K). Three letters are not used.",
      audio: [
        {
          label: "Javier",
          lines: [
            { voice: "m", text: "Hola, me llamo Javier. Os presento a mi familia. Mi padre se llama Antonio y es médico." },
            { voice: "m", text: "Mi madre, Isabel, es profesora de inglés en un colegio. Mi hermana Clara estudia en la universidad." },
            { voice: "m", text: "Mi hermano Pablo juega al fútbol todos los días. Mi abuela Rosa cocina muy bien: ¡su paella es la mejor!" },
            { voice: "m", text: "Mi tío Raúl vive en Argentina, en Buenos Aires. Mi prima Sofía tiene tres años." },
            { voice: "m", text: "Y mi tía Elena trabaja en un banco." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 11, question: "Antonio, el padre", options: FAMILY_INFO, answer: 0, explanation: "\"Mi padre se llama Antonio y es médico.\"" },
        { n: 12, question: "Isabel, la madre", options: FAMILY_INFO, answer: 9, explanation: "\"Isabel, es profesora de inglés.\"" },
        { n: 13, question: "Clara, la hermana", options: FAMILY_INFO, answer: 3, explanation: "\"Mi hermana Clara estudia en la universidad.\"" },
        { n: 14, question: "Pablo, el hermano", options: FAMILY_INFO, answer: 8, explanation: "\"Mi hermano Pablo juega al fútbol.\"" },
        { n: 15, question: "Rosa, la abuela", options: FAMILY_INFO, answer: 7, explanation: "\"Mi abuela Rosa cocina muy bien.\"" },
        { n: 16, question: "Raúl, el tío", options: FAMILY_INFO, answer: 1, explanation: "\"Mi tío Raúl vive en Argentina.\"" },
        { n: 17, question: "Sofía, la prima", options: FAMILY_INFO, answer: 6, explanation: "\"Mi prima Sofía tiene tres años.\"" },
        { n: 18, question: "Elena, la tía", options: FAMILY_INFO, answer: 5, explanation: "\"Mi tía Elena trabaja en un banco.\" The cat, the piano and French are not mentioned." },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Usted va a escuchar siete mensajes. Escuchará cada mensaje dos veces. Relacione los mensajes (19-25) con los enunciados (A-J). Hay tres enunciados que no debe seleccionar.",
      instructionsEn: "You'll hear seven messages, each twice. Match each message (19-25) with a statement (A-J). Three statements are not used.",
      audio: [
        { label: "Mensaje 1", lines: [{ voice: "f", text: "Hola, Luis. El sábado es mi cumpleaños y hago una fiesta en casa. ¿Vienes?" }] },
        { label: "Mensaje 2", lines: [{ voice: "m", text: "Buenos días. Le llamo del centro de salud. Su cita con la doctora es el jueves a las diez." }] },
        { label: "Mensaje 3", lines: [{ voice: "f", text: "Hola, soy Teresa. Esta tarde la clase de baile no es a las seis, es a las siete." }] },
        { label: "Mensaje 4", lines: [{ voice: "m", text: "Restaurante Casa Pepe. Su mesa para cuatro personas, el viernes a las nueve, está confirmada." }] },
        { label: "Mensaje 5", lines: [{ voice: "f", text: "Mamá, no encuentro las llaves de casa. ¿Están en tu bolso?" }] },
        { label: "Mensaje 6", lines: [{ voice: "m", text: "Hola, Carmen. ¿Cenamos juntos esta noche? Hay un restaurante mexicano nuevo cerca de tu casa." }] },
        { label: "Mensaje 7", lines: [{ voice: "f", text: "Información: el tren de las ocho llega cuarenta minutos tarde." }] },
      ],
      layout: "select",
      items: [
        { n: 19, question: "Mensaje 1", options: STATEMENTS, answer: 6, source: 0, explanation: "\"El sábado es mi cumpleaños\": a birthday (G)." },
        { n: 20, question: "Mensaje 2", options: STATEMENTS, answer: 0, source: 1, explanation: "\"Su cita con la doctora\": a doctor's appointment (A)." },
        { n: 21, question: "Mensaje 3", options: STATEMENTS, answer: 2, source: 2, explanation: "The dance class moves from six to seven (C)." },
        { n: 22, question: "Mensaje 4", options: STATEMENTS, answer: 7, source: 3, explanation: "\"Su mesa para cuatro personas… está confirmada\" (H)." },
        { n: 23, question: "Mensaje 5", options: STATEMENTS, answer: 5, source: 4, explanation: "\"No encuentro las llaves de casa\" (F)." },
        { n: 24, question: "Mensaje 6", options: STATEMENTS, answer: 1, source: 5, explanation: "\"¿Cenamos juntos esta noche?\": an invitation to dinner (B)." },
        { n: 25, question: "Mensaje 7", options: STATEMENTS, answer: 4, source: 6, explanation: "\"El tren de las ocho llega cuarenta minutos tarde\" (E). D, I and J are not used." },
      ],
    },
  ],
};
