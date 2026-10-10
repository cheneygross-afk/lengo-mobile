// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b1-oral.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B1 practice exam -- Prueba 4: Expresión e interacción orales.
// 15 minutes with the examiner, after 15 minutes to prepare tasks 1 and 2.
// (The real exam shows a photograph for Tarea 3; here it's described.)
export const DELE_B1_ORAL: ExamPaper = {
  id: "oral",
  kind: "speaking",
  title: "Expresión e interacción orales",
  minutes: 15,
  prepMinutes: 15,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Presentación de un tema. Hable durante 2 o 3 minutos sobre el tema de la lámina. El entrevistador no intervendrá en esta parte.",
      speak: {
        prompt: "Hable de un trabajo o una actividad que le gustaría hacer en el futuro.",
        points: [
          "En qué consiste ese trabajo o actividad.",
          "Por qué le interesa y desde cuándo.",
          "Qué necesita para conseguirlo (estudios, experiencia, idiomas…).",
          "Qué ventajas e inconvenientes cree que tiene.",
          "Si conoce a alguien que lo haga y qué le ha contado.",
        ],
        prepMinutes: 8,
        speakMinutes: 3,
        modelAnswer:
          "Me gustaría trabajar como guía de montaña. Consiste en acompañar a grupos de personas en rutas por los Pirineos o los Alpes, explicarles el paisaje y, sobre todo, cuidar de su seguridad.\n\nMe interesa desde que era pequeño, porque mis padres me llevaban todos los veranos a caminar por Asturias. Me encanta estar al aire libre y conocer gente de otros países.\n\nPara conseguirlo tengo que hacer un curso oficial de dos años, aprender primeros auxilios y mejorar mi inglés y mi francés, porque muchos clientes son extranjeros.\n\nLa ventaja principal es que trabajaría en un lugar precioso y nunca me aburriría. El inconveniente es que es un trabajo de temporada y a veces peligroso: el tiempo en la montaña cambia muy rápido.\n\nUn amigo de mi hermano es guía y me ha contado que es muy duro físicamente, pero que no cambiaría su trabajo por una oficina.",
      },
    },
    {
      title: "Tarea 2",
      instructions:
        "Conversación. El entrevistador le hará preguntas sobre el tema de la Tarea 1 durante 3 o 4 minutos.",
      speak: {
        prompt: "Conversación sobre el trabajo y el futuro profesional.",
        points: [
          "Responda con detalle y dé ejemplos de su experiencia.",
          "Exprese opiniones y justifíquelas.",
          "Hable de hipótesis: qué haría si…",
        ],
        examinerQuestions: [
          "¿Qué trabajos ha hecho hasta ahora?",
          "¿Qué es más importante para usted en un trabajo: el sueldo, el horario o el ambiente?",
          "¿Cree que es fácil encontrar trabajo en su país para los jóvenes?",
          "¿Qué haría si no consiguiera trabajo de lo que le gusta?",
          "¿Le gustaría trabajar en otro país? ¿Por qué?",
        ],
        prepMinutes: 0,
        speakMinutes: 4,
        modelAnswer:
          "—¿Qué trabajos ha hecho hasta ahora?\n—He trabajado de camarero dos veranos y el año pasado di clases particulares de inglés a niños.\n—¿Qué es más importante para usted en un trabajo?\n—Para mí, el ambiente. He tenido un trabajo con buen sueldo y un jefe horrible, y no aguanté ni tres meses.\n—¿Es fácil encontrar trabajo para los jóvenes en su país?\n—No mucho. Hay trabajo, pero muchas veces los contratos son temporales y los sueldos, bajos.\n—¿Qué haría si no consiguiera trabajo de lo que le gusta?\n—Buscaría algo relacionado, por ejemplo en una tienda de deportes, y seguiría formándome por las tardes.\n—¿Le gustaría trabajar en otro país?\n—Sí, en Chile o en Argentina, porque tienen montañas increíbles y podría practicar el español.",
      },
    },
    {
      title: "Tarea 3",
      instructions:
        "Descripción de una fotografía. Describa la fotografía durante 1 o 2 minutos y después converse con el entrevistador sobre temas relacionados durante 2 o 3 minutos.",
      speak: {
        prompt: "Describa la fotografía: las personas, el lugar, lo que hacen y lo que cree que ha pasado antes o va a pasar después.",
        material: [
          {
            title: "La fotografía",
            body:
              "Una estación de tren. En el andén hay una pareja joven con dos maletas grandes y una mochila. La chica mira el panel de horarios con cara de preocupación; el chico habla por el móvil. Detrás de ellos, un grupo de turistas mayores sigue a una guía que levanta un paraguas rojo. En el panel se lee \"Retrasado\" junto a varios trenes. Al fondo hay una cafetería con gente sentada.",
          },
        ],
        points: [
          "¿Quiénes son las personas? ¿Qué relación tienen?",
          "¿Dónde están y qué hay a su alrededor?",
          "¿Qué están haciendo y cómo se sienten?",
          "¿Qué cree que ha pasado? ¿Qué van a hacer ahora?",
        ],
        examinerQuestions: [
          "¿Ha tenido alguna vez un problema durante un viaje? ¿Qué pasó?",
          "¿Prefiere viajar en tren, en avión o en coche? ¿Por qué?",
          "¿Qué lleva siempre en la maleta?",
          "¿Cómo organiza normalmente sus viajes?",
        ],
        prepMinutes: 0,
        speakMinutes: 4,
        modelAnswer:
          "En la foto veo una estación de tren bastante llena. En primer plano hay una pareja joven, de unos veinticinco años, con dos maletas enormes y una mochila; seguramente se van de vacaciones. La chica está mirando el panel de horarios y parece preocupada, y el chico está hablando por teléfono.\n\nCreo que su tren tiene retraso, porque en el panel pone \"Retrasado\" al lado de varios trenes. A lo mejor el chico está llamando al hotel para avisar de que van a llegar tarde, o está buscando otra forma de viajar.\n\nDetrás de ellos hay un grupo de turistas mayores que siguen a una guía con un paraguas rojo. Al fondo hay una cafetería con gente sentada.\n\nMe imagino que al final la pareja irá a la cafetería a tomar algo mientras espera. Seguro que es un viaje que no van a olvidar.",
      },
    },
    {
      title: "Tarea 4",
      instructions:
        "Situación simulada. Usted va a mantener una conversación con el entrevistador en una situación imaginaria durante 2 o 3 minutos.",
      speak: {
        prompt:
          "Usted llega a su hotel después de un viaje largo y descubre que su reserva no aparece en el sistema. El entrevistador es el recepcionista.",
        points: [
          "Explique el problema y dé los datos de su reserva.",
          "Muestre que tiene la confirmación y exprese su malestar con cortesía.",
          "Pregunte qué soluciones le pueden ofrecer.",
          "Negocie: acepte o rechace las propuestas y justifíquelo.",
          "Pida algún tipo de compensación.",
        ],
        examinerQuestions: [
          "Buenas noches. ¿En qué puedo ayudarle?",
          "Lo siento, no encuentro ninguna reserva a su nombre. ¿Cuándo la hizo?",
          "Esta noche solo nos queda una habitación individual sin vistas. ¿Le interesa?",
          "También puedo buscarle una habitación en otro hotel de la cadena, a quince minutos.",
          "¿Qué le parece si le invitamos al desayuno?",
        ],
        prepMinutes: 0,
        speakMinutes: 3,
        modelAnswer:
          "—Buenas noches. ¿En qué puedo ayudarle?\n—Buenas noches. Tengo una reserva a nombre de Julia Brown para tres noches, una habitación doble con vistas al mar.\n—Lo siento, no encuentro ninguna reserva a su nombre.\n—Pues es extraño, porque la hice hace dos meses por su página web. Mire, aquí tengo el correo de confirmación.\n—Esta noche solo nos queda una individual sin vistas.\n—Hombre, eso no es lo que reservé. Vengo con mi marido y hemos viajado doce horas. ¿No tienen otra solución?\n—Puedo buscarle una habitación en otro hotel de la cadena.\n—¿Está muy lejos? Preferiríamos quedarnos aquí. ¿Y si esta noche dormimos en otro hotel y mañana volvemos a una habitación doble con vistas?\n—Me parece bien. Le invitamos al desayuno.\n—Se lo agradezco. ¿Podrían pagarnos también el taxi? Creo que es lo justo.",
      },
    },
  ],
};
