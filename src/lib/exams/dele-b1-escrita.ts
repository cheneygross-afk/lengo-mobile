// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b1-escrita.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B1 practice exam -- Prueba 3: Expresión e interacción escritas.
// 60 minutes, 2 tasks, as in the real exam.
export const DELE_B1_ESCRITA: ExamPaper = {
  id: "escrita",
  kind: "writing",
  title: "Expresión e interacción escritas",
  minutes: 60,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted ha recibido este correo electrónico de una amiga. Lea el mensaje y conteste. Número de palabras: entre 100 y 120.",
      write: [
        {
          prompt:
            "Conteste al correo de Marta. En su respuesta debe: saludar; felicitarla por su nuevo trabajo; contarle alguna experiencia suya de un cambio importante; darle consejos para sus primeras semanas; despedirse.",
          input: {
            text: {
              title: "Correo de Marta",
              body:
                "¡Hola!\n\n¡Tengo noticias! Me han dado el puesto en la editorial de Barcelona y empiezo el mes que viene. Estoy muy contenta, pero también un poco nerviosa: no conozco a nadie en la ciudad, tengo que buscar piso y nunca he trabajado en una oficina tan grande. Tú te mudaste a otra ciudad hace unos años, ¿verdad? ¿Cómo fue? ¿Qué me aconsejas?\n\nEscríbeme pronto,\nMarta",
            },
          },
          minWords: 100,
          maxWords: 120,
          rubric: [
            "Saluda y se despide de forma adecuada a un correo entre amigos.",
            "Felicita a Marta por el nuevo trabajo.",
            "Cuenta una experiencia personal de un cambio (con pretérito indefinido e imperfecto).",
            "Da al menos dos consejos (imperativo, te recomiendo que + subjuntivo, deberías…).",
            "El texto está bien organizado y conectado (primero, además, por eso, al final…).",
          ],
          modelAnswer:
            "¡Hola, Marta!\n\n¡Enhorabuena por el trabajo! Te lo mereces después de tanto esfuerzo.\n\nEntiendo muy bien tus nervios. Cuando me mudé a Sevilla hace cuatro años, tampoco conocía a nadie. Las primeras semanas me sentía bastante sola, pero me apunté a un club de senderismo y allí hice mis mejores amigos.\n\nTe recomiendo que busques piso compartido al principio: es más barato y así conoces gente. En el trabajo, no tengas miedo de preguntar; todo el mundo sabe que eres nueva. Y sal a comer con tus compañeros aunque estés cansada, porque es la mejor forma de integrarte.\n\nSi necesitas algo, llámame.\n\nUn abrazo muy fuerte,\nLaura",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Elija solo una de las dos opciones que se le ofrecen y escriba un texto. Número de palabras: entre 130 y 150.",
      write: [
        {
          label: "Opción 1",
          prompt:
            "Una revista de viajes organiza un concurso con el título \"El viaje que cambió mi vida\". Escriba un texto para participar. Hable de: adónde fue, cuándo y con quién; qué pasó durante el viaje; por qué fue tan importante para usted; qué ha cambiado en su vida desde entonces.",
          minWords: 130,
          maxWords: 150,
          rubric: [
            "Sitúa el viaje: lugar, fecha y acompañantes.",
            "Narra lo que pasó combinando bien el pretérito indefinido y el imperfecto.",
            "Explica por qué el viaje fue importante.",
            "Relaciona el pasado con el presente (desde entonces, ahora, he…).",
            "Vocabulario variado y texto organizado en párrafos.",
          ],
          modelAnswer:
            "Hace seis años, cuando tenía veintidós, hice un viaje de un mes por Perú con mi mejor amiga. Queríamos ver Machu Picchu, pero lo que más recuerdo no son los monumentos, sino las personas.\n\nUna semana antes de volver, mi amiga se puso enferma en un pueblo pequeño de los Andes. No había hospital, y una familia que no nos conocía de nada nos acogió en su casa durante cinco días. La madre la cuidaba como si fuera su hija, y los niños me enseñaban a hacer pan y a hablar un poco de quechua.\n\nAquel viaje me hizo entender que la generosidad no depende del dinero. Desde entonces trabajo como voluntaria en una asociación que ayuda a familias que acaban de llegar a mi ciudad. Además, he vuelto dos veces a visitar a aquella familia, y seguimos hablando todos los meses.",
        },
        {
          label: "Opción 2",
          prompt:
            "Lea este titular de un periódico: \"Cada vez más jóvenes prefieren vivir en el campo\". Escriba un texto de opinión para el foro del periódico. Hable de: por qué cree que ocurre este fenómeno; qué ventajas e inconvenientes tiene vivir en el campo; dónde prefiere vivir usted y por qué.",
          minWords: 130,
          maxWords: 150,
          rubric: [
            "Explica posibles causas del fenómeno.",
            "Presenta ventajas e inconvenientes de forma equilibrada.",
            "Expresa y justifica su opinión personal (creo que, en mi opinión, no creo que + subjuntivo).",
            "Usa conectores de contraste y causa (sin embargo, aunque, ya que, por eso).",
            "Registro adecuado para un foro de un periódico.",
          ],
          modelAnswer:
            "Creo que este fenómeno tiene varias causas. La primera es el precio de la vivienda: en las grandes ciudades un piso pequeño cuesta una fortuna, mientras que en un pueblo se puede alquilar una casa con jardín. Además, desde que muchas empresas permiten teletrabajar, ya no es necesario vivir cerca de la oficina.\n\nVivir en el campo tiene ventajas evidentes: hay menos ruido y contaminación, y la vida es más tranquila. Sin embargo, también tiene inconvenientes. En muchos pueblos no hay médico todos los días, el transporte público es escaso y la conexión a internet no siempre funciona bien.\n\nEn mi caso, prefiero vivir en una ciudad mediana. Me gusta tener cerca cines, bibliotecas y amigos, pero no soporto los atascos de las capitales. Aunque no creo que me mude a un pueblo pronto, entiendo perfectamente a quienes lo hacen.",
        },
      ],
    },
  ],
};
