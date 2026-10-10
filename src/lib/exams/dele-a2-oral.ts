// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a2-oral.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A2 practice exam -- Prueba 4: Expresión e interacción orales.
// 15 minutes with the examiner, after 15 minutes to prepare tasks 1 and 2.
// (The real exam shows a photograph for Tarea 2; here it's described.)
export const DELE_A2_ORAL: ExamPaper = {
  id: "oral",
  kind: "speaking",
  title: "Expresión e interacción orales",
  minutes: 15,
  prepMinutes: 15,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions: "Presentación de un tema. Hable durante 2 o 3 minutos sobre el tema de la lámina.",
      instructionsEn: "Talk about the topic on the card for 2-3 minutes.",
      speak: {
        prompt: "Mi tiempo libre",
        points: [
          "Qué le gusta hacer en su tiempo libre y con quién.",
          "Cuándo y dónde lo hace.",
          "Qué hacía en su tiempo libre cuando era niño o niña.",
          "Una actividad que quiere probar en el futuro.",
        ],
        prepMinutes: 7,
        speakMinutes: 3,
        modelAnswer:
          "En mi tiempo libre me gusta mucho hacer deporte y leer. Normalmente juego al fútbol con mis amigos los martes y los jueves por la tarde, en un campo cerca de mi casa. Los fines de semana, si hace buen tiempo, voy en bici al parque con mi pareja, y por la noche leo novelas policíacas en el sofá. Cuando era niño pasaba mucho tiempo en la calle: jugaba al fútbol con mis vecinos y veía dibujos animados en la tele. No leía mucho, ¡me aburrían los libros! En el futuro quiero aprender a bailar salsa, porque me encanta la música latina y es una buena manera de conocer gente.",
      },
    },
    {
      title: "Tarea 2",
      instructions: "Descripción de una fotografía. Describa la fotografía durante 2 o 3 minutos.",
      instructionsEn: "Describe the photograph for 2-3 minutes.",
      speak: {
        prompt: "Describa la fotografía: las personas, el lugar, los objetos y lo que están haciendo.",
        material: [
          {
            title: "La fotografía",
            body:
              "Una cocina de una casa. Es de día y entra mucha luz por la ventana. Una familia prepara la comida: un hombre de unos cuarenta años corta verduras en la mesa; una niña de unos ocho años lava tomates en el fregadero; una mujer mayor, la abuela, remueve algo en una olla grande en el fuego. En la mesa hay pan, una botella de aceite y un plato con queso. Todos sonríen.",
          },
        ],
        points: [
          "¿Quiénes son las personas? ¿Cómo son? ¿Qué ropa llevan?",
          "¿Dónde están? ¿Qué hay en el lugar?",
          "¿Qué están haciendo?",
          "¿Qué cree que van a hacer después?",
        ],
        examinerQuestions: [
          "¿Usted cocina en casa? ¿Qué cocina?",
          "¿Cuál es su plato favorito?",
          "¿Con quién come normalmente los fines de semana?",
        ],
        prepMinutes: 8,
        speakMinutes: 3,
        modelAnswer:
          "En la fotografía veo una cocina muy luminosa, con una ventana grande. Hay tres personas; creo que son una familia. A la izquierda hay un hombre de unos cuarenta años con una camisa azul: está cortando verduras en la mesa. En el centro hay una niña pequeña que está lavando tomates en el fregadero. A la derecha hay una señora mayor; creo que es la abuela. Está cocinando algo en una olla grande, tal vez una sopa. En la mesa hay pan, aceite y queso. Todos están contentos y sonríen. Creo que es domingo y que después van a comer todos juntos en el comedor.",
      },
    },
    {
      title: "Tarea 3",
      instructions:
        "Diálogo en una situación simulada. Usted va a hablar con el entrevistador en una situación imaginaria durante 3 o 4 minutos.",
      instructionsEn: "Role play: talk with the examiner in an imaginary situation for 3-4 minutes.",
      speak: {
        prompt:
          "Usted está en una tienda de ropa y quiere comprar un regalo para un amigo. El entrevistador es el dependiente o la dependienta.",
        points: [
          "Salude y explique qué busca y para quién.",
          "Diga la talla y el color que quiere.",
          "Pregunte el precio y si hay descuentos.",
          "Pregunte si puede cambiar el regalo después.",
          "Decida y pague.",
        ],
        examinerQuestions: [
          "Buenos días, ¿qué desea?",
          "¿Qué talla usa su amigo?",
          "Tenemos este en azul y en negro. ¿Cuál prefiere?",
          "¿Va a pagar con tarjeta o en efectivo?",
        ],
        prepMinutes: 0,
        speakMinutes: 4,
        modelAnswer:
          "—Buenos días. Busco un regalo para un amigo; es su cumpleaños el sábado. Quiero un jersey.\n—¿Qué talla usa?\n—Creo que usa la talla M. Le gustan los colores oscuros.\n—Tenemos este en azul y en negro.\n—Me gusta el azul. ¿Cuánto cuesta?\n—Treinta y cinco euros.\n—¿Hay algún descuento?\n—Esta semana hay un diez por ciento de descuento.\n—¡Qué bien! Y si no le queda bien, ¿puede cambiarlo?\n—Sí, tiene treinta días con el tique.\n—Perfecto, me lo llevo. ¿Puede envolverlo para regalo? Pago con tarjeta.",
      },
    },
    {
      title: "Tarea 4",
      instructions:
        "Conversación con el entrevistador. El entrevistador le va a hacer preguntas sobre el tema de la Tarea 1 durante 3 o 4 minutos.",
      instructionsEn: "Conversation: the examiner asks you questions about the topic of Task 1 for 3-4 minutes.",
      speak: {
        prompt: "Conversación sobre el tiempo libre.",
        points: [
          "Responda con frases completas y dé ejemplos.",
          "Hable de gustos, costumbres del pasado y planes.",
          "Si no entiende una pregunta, pida que la repita.",
        ],
        examinerQuestions: [
          "¿Tiene mucho tiempo libre durante la semana?",
          "¿Prefiere hacer actividades solo o con otras personas? ¿Por qué?",
          "¿Qué hizo el fin de semana pasado?",
          "¿Qué hace la gente de su país en su tiempo libre?",
          "¿Qué va a hacer en las próximas vacaciones?",
        ],
        prepMinutes: 0,
        speakMinutes: 4,
        modelAnswer:
          "—¿Tiene mucho tiempo libre durante la semana?\n—No mucho. Trabajo de nueve a seis, pero por las tardes tengo dos o tres horas libres.\n—¿Prefiere hacer actividades solo o con otras personas?\n—Prefiero hacer deporte con amigos porque es más divertido, pero leer me gusta más solo, en silencio.\n—¿Qué hizo el fin de semana pasado?\n—El sábado fui al cine con mi hermana y el domingo comí en casa de mis padres. Por la tarde descansé.\n—¿Qué va a hacer en las próximas vacaciones?\n—Voy a ir a la playa con unos amigos. Vamos a alquilar una casa en el sur.",
      },
    },
  ],
};
