// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b2-oral.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B2 practice exam -- Prueba 4: Expresión e interacción orales.
// 20 minutes with the examiner, after 20 minutes to prepare tasks 1 and 2.
// (The real exam shows a photograph for Tarea 2 and a chart for Tarea 3;
// here they're described.)
export const DELE_B2_ORAL: ExamPaper = {
  id: "oral",
  kind: "speaking",
  title: "Expresión e interacción orales",
  minutes: 20,
  prepMinutes: 20,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Valorar propuestas. Le proponemos un tema con algunas propuestas para una situación. Hable durante 3 o 4 minutos: valore las propuestas, diga cuál le parece mejor y por qué, y proponga alguna otra. Después, converse con el entrevistador sobre el tema durante 2 o 3 minutos.",
      speak: {
        prompt:
          "En muchas ciudades el centro histórico se ha llenado de pisos turísticos y los vecinos se quejan de que ya no pueden vivir allí. Estas son algunas propuestas de un grupo de expertos:",
        material: [
          {
            title: "Propuestas",
            body:
              "1. Prohibir los nuevos pisos turísticos en el centro histórico.\n2. Cobrar un impuesto a los turistas y usar el dinero en vivienda para los vecinos.\n3. Limitar el número de noches al año que se puede alquilar un piso a turistas.\n4. Ofrecer ayudas a los propietarios que alquilen a largo plazo.\n5. Dejar que el mercado se regule solo: el turismo crea empleo.",
          },
        ],
        points: [
          "Valore cada propuesta: ventajas e inconvenientes.",
          "Diga cuál le parece la mejor y justifíquelo.",
          "Proponga alguna medida más.",
          "Use: me parece que…, no creo que…, yo propondría que…, en el caso de que…",
        ],
        examinerQuestions: [
          "¿Existe este problema en su ciudad?",
          "¿Usted ha alquilado alguna vez un piso turístico? ¿Por qué?",
          "¿Cree que el turismo beneficia más o perjudica más a una ciudad?",
          "¿Qué propuesta le parece menos realista?",
        ],
        prepMinutes: 10,
        speakMinutes: 6,
        modelAnswer:
          "Me parece un tema muy actual. La primera propuesta, prohibir los nuevos pisos, es clara, pero no creo que sea suficiente: los que ya existen seguirían ahí. La segunda me gusta más, porque el dinero del turismo volvería a los vecinos, aunque habría que controlar bien en qué se gasta.\n\nLa tercera, limitar las noches, es interesante, pero sería muy difícil de vigilar. Las ayudas a los propietarios que alquilen a largo plazo me parecen una buena idea, porque no castigan a nadie: premian a quien ayuda al barrio. La última, dejar que el mercado se regule solo, no me convence en absoluto; es precisamente lo que nos ha llevado a esta situación.\n\nEn mi opinión, la mejor solución sería combinar la segunda y la cuarta. Además, yo propondría que el ayuntamiento comprara algunos edificios para crear vivienda pública en el centro, para que los jóvenes y las familias no tengan que irse.",
      },
    },
    {
      title: "Tarea 2",
      instructions:
        "Describir una situación. Describa la fotografía durante 2 o 3 minutos: imagine qué está pasando, qué ha pasado antes y qué va a pasar. Después, converse con el entrevistador sobre temas relacionados durante 3 minutos.",
      speak: {
        prompt: "Describa la fotografía e imagine la situación.",
        material: [
          {
            title: "La fotografía",
            body:
              "Una oficina moderna con grandes ventanales. Alrededor de una mesa hay cinco personas en una reunión. Una mujer de unos cincuenta años, de pie, señala un gráfico en una pantalla. Dos hombres jóvenes se miran con cara de sorpresa. Otra mujer toma notas en un portátil, y un hombre mayor tiene los brazos cruzados y el ceño fruncido. En la mesa hay tazas de café y documentos.",
          },
        ],
        points: [
          "¿Quiénes cree que son estas personas y qué relación tienen?",
          "¿Qué están haciendo? ¿De qué cree que están hablando?",
          "¿Qué ha podido pasar antes de la reunión?",
          "¿Cómo cree que va a terminar la situación?",
        ],
        examinerQuestions: [
          "¿Ha estado alguna vez en una reunión así? ¿Cómo fue?",
          "¿Cree que las reuniones de trabajo son útiles o una pérdida de tiempo?",
          "¿Cómo reacciona usted cuando recibe una mala noticia en el trabajo o en los estudios?",
          "¿Qué cualidades debe tener un buen jefe?",
        ],
        prepMinutes: 10,
        speakMinutes: 6,
        modelAnswer:
          "En la foto se ve una reunión de trabajo en una oficina bastante moderna. Supongo que son compañeros de una empresa y que la mujer que está de pie es la directora, porque es la que dirige la reunión y señala un gráfico en la pantalla.\n\nPor la cara de los dos chicos jóvenes, parece que acaba de dar una noticia inesperada. Quizá el gráfico muestra que las ventas han bajado mucho, o que la empresa va a cambiar de estrategia. El señor mayor, con los brazos cruzados, no parece nada convencido; a lo mejor lleva muchos años en la empresa y no está de acuerdo con los cambios. La mujer del portátil, en cambio, está tranquila, tomando notas; puede que ya lo supiera.\n\nMe imagino que antes de la reunión han circulado rumores y todos estaban nerviosos. Creo que la reunión terminará con una discusión, pero que al final llegarán a un acuerdo y se repartirán las tareas.",
      },
    },
    {
      title: "Tarea 3",
      instructions:
        "Opinar sobre unos datos. Lea los resultados de una encuesta y coméntelos con el entrevistador durante 3 o 4 minutos: diga si coinciden con su experiencia, qué le llama la atención y por qué.",
      speak: {
        prompt: "Encuesta: ¿qué es lo más importante para ser feliz? (respuestas de españoles de 18 a 65 años)",
        material: [
          {
            title: "Resultados",
            body:
              "La salud: 38 %\nLa familia y la pareja: 27 %\nLos amigos: 12 %\nTener un buen trabajo: 10 %\nEl dinero: 8 %\nTener tiempo libre: 5 %",
          },
        ],
        points: [
          "Compare los datos con lo que usted habría respondido.",
          "Comente qué dato le sorprende y por qué.",
          "Diga si cree que los resultados serían iguales en su país.",
        ],
        examinerQuestions: [
          "¿Qué respondería usted? ¿Por qué?",
          "¿Le sorprende que el dinero esté tan abajo?",
          "¿Cree que los jóvenes y los mayores responderían lo mismo?",
          "¿Y en su país? ¿Qué cree que respondería la gente?",
        ],
        prepMinutes: 0,
        speakMinutes: 4,
        modelAnswer:
          "Yo coincido con la mayoría: pondría la salud en primer lugar, porque sin ella todo lo demás pierde importancia. Lo que me sorprende es que el dinero esté tan abajo, solo un ocho por ciento. Sospecho que mucha gente no ha sido del todo sincera; es difícil ser feliz si no llegas a fin de mes.\n\nTambién me llama la atención que el tiempo libre tenga solo un cinco por ciento. Para mí es fundamental, y creo que si la encuesta se hiciera solo entre jóvenes, ese porcentaje sería mucho mayor. Los mayores, en cambio, seguramente darían más importancia a la familia.\n\nEn mi país creo que los resultados serían parecidos, aunque quizá el trabajo estaría más arriba, porque allí la identidad de las personas depende mucho de su profesión.",
      },
    },
  ],
};
