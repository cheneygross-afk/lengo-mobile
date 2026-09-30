// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a2-escrita.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A2 practice exam -- Prueba 3: Expresión e interacción escritas.
// 45 minutes, 2 tasks, as in the real exam.
export const DELE_A2_ESCRITA: ExamPaper = {
  id: "escrita",
  kind: "writing",
  title: "Expresión e interacción escritas",
  minutes: 45,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted ha recibido este correo electrónico de un amigo. Lea el mensaje y conteste. Número de palabras: entre 60 y 70.",
      instructionsEn: "You've received this email from a friend. Read it and write a reply of 60-70 words.",
      write: [
        {
          prompt:
            "Conteste al correo de Álex. En su respuesta debe: saludar; decir si puede ir a la fiesta; explicar qué va a llevar; preguntar cómo llegar a la casa; despedirse.",
          input: {
            text: {
              title: "Correo de Álex",
              body:
                "¡Hola!\n\n¿Qué tal todo? El sábado 12 hago una fiesta en mi casa nueva para celebrar el cambio de piso. Empieza a las ocho de la tarde. Vienen compañeros del trabajo y algunos amigos del gimnasio. Cada persona trae algo de comer o de beber. ¿Puedes venir? Mi nueva dirección es calle de la Luna, 8, tercero B.\n\nUn abrazo,\nÁlex",
            },
          },
          minWords: 60,
          maxWords: 70,
          rubric: [
            "Greets Álex and says goodbye",
            "Says whether you can come to the party",
            "Says what food or drink you'll bring",
            "Asks how to get to the flat (bus, metro, directions)",
            "Uses the present and ir a + infinitive correctly",
          ],
          modelAnswer:
            "¡Hola, Álex!\n\nMuchas gracias por la invitación. ¡Qué bien que tienes piso nuevo! Sí, el sábado puedo ir a tu fiesta, pero voy a llegar un poco tarde, sobre las nueve, porque trabajo hasta las ocho. Voy a llevar una tortilla de patatas y una botella de vino. ¿Cómo puedo llegar a tu casa? ¿Hay una parada de metro cerca?\n\nNos vemos el sábado.\nUn beso,\nSara",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Elija solo una de las dos opciones que se le ofrecen y escriba un texto. Número de palabras: entre 70 y 80.",
      instructionsEn: "Choose one of the two options and write a text of 70-80 words.",
      write: [
        {
          label: "Opción 1",
          prompt:
            "Escriba un texto para el blog de su escuela de español sobre un viaje que recuerda especialmente. Hable de: adónde fue y cuándo; con quién fue; qué hizo allí; qué fue lo que más le gustó y por qué.",
          minWords: 70,
          maxWords: 80,
          rubric: [
            "Says where and when you went, and who with",
            "Tells what you did there, in the past (preterite)",
            "Says what you liked most and why",
            "Links ideas with y, pero, porque, después",
            "70-80 words",
          ],
          modelAnswer:
            "El verano pasado fui a Lisboa con mi hermana. Estuvimos allí cinco días en un hotel pequeño en el centro. Todos los días caminamos mucho por la ciudad, visitamos museos y comimos pescado en restaurantes baratos. Un día fuimos en tren a la playa de Cascais. Lo que más me gustó fue el tranvía amarillo, porque es muy antiguo y pasa por calles muy estrechas. Fue un viaje precioso y quiero volver pronto.",
        },
        {
          label: "Opción 2",
          prompt:
            "Una revista pregunta a sus lectores: \"¿Cómo es tu día perfecto?\". Escriba un texto para la revista. Hable de: a qué hora se levanta y qué desayuna; qué hace por la mañana y por la tarde; con quién pasa el día; dónde y qué cena.",
          minWords: 70,
          maxWords: 80,
          rubric: [
            "Describes the morning: getting up and breakfast",
            "Describes activities for the morning and the afternoon",
            "Says who you spend the day with",
            "Says where you have dinner and what you eat",
            "Uses the present tense and time expressions (por la mañana, después...)",
          ],
          modelAnswer:
            "Mi día perfecto empieza tarde: me levanto a las diez y desayuno café con tostadas en la terraza. Por la mañana voy en bici a la playa con mi novio y nadamos un rato. Después comemos paella en un restaurante del puerto. Por la tarde leo un libro en el sofá y duermo la siesta. Por la noche ceno con mis amigos en un restaurante italiano y comemos pizza. Luego vamos a bailar.",
        },
      ],
    },
  ],
};
