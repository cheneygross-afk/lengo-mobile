// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a2-lectura.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A2 practice exam -- Prueba 1: Comprensión de lectura.
// 60 minutes, 4 tasks, 25 items, as in the real exam.
export const DELE_A2_LECTURA: ExamPaper = {
  id: "lectura",
  kind: "reading",
  title: "Comprensión de lectura",
  minutes: 60,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a leer un correo electrónico de una chica a su amiga. Después, debe contestar a las preguntas (1-5). Seleccione la opción correcta (a, b o c).",
      instructionsEn:
        "Read an email from a girl to her friend, then answer questions 1-5. Choose the right option (a, b or c).",
      texts: [
        {
          title: "Nuevo mensaje",
          body:
            "De: Lucía Romero\nPara: Carmen Vidal\nAsunto: ¡Ya estoy en Valencia!\n\n" +
            "¡Hola, Carmen!\n\n" +
            "¿Qué tal estás? Te escribo desde mi nuevo piso en Valencia. Llegué el lunes pasado y todavía tengo cajas por todas partes, pero estoy muy contenta. El piso es pequeño, tiene dos habitaciones y una cocina bastante grande, que es lo que más me gusta porque, como sabes, me encanta cocinar. Lo único malo es que no tiene ascensor y vivo en un cuarto piso, así que subo muchas escaleras todos los días.\n\n" +
            "Empiezo a trabajar en el hospital el próximo lunes. Mi horario va a ser de mañana, de ocho a tres, y por las tardes quiero apuntarme a clases de natación, porque hay una piscina municipal a diez minutos de casa. El hospital está un poco lejos, pero hay un autobús que para justo delante de mi portal.\n\n" +
            "Ayer conocí a mi vecina del tercero, Rosa. Es una señora mayor muy simpática que vive sola con su gato. Me invitó a un café y me explicó dónde están el mercado, la farmacia y el centro de salud. ¡Me ayudó mucho!\n\n" +
            "¿Por qué no vienes a visitarme en Semana Santa? Tengo una cama libre en la segunda habitación y podemos ir juntas a la playa, que está a veinte minutos en bici. Contéstame pronto.\n\n" +
            "Un abrazo muy fuerte,\nLucía",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 1,
          question: "Lucía está contenta con su piso porque…",
          options: ["tiene ascensor.", "la cocina es grande.", "tiene tres habitaciones."],
          answer: 1,
          explanation: "\"Una cocina bastante grande, que es lo que más me gusta.\" The flat has no lift and only two bedrooms.",
        },
        {
          n: 2,
          question: "En su nuevo trabajo, Lucía va a trabajar…",
          options: ["por las mañanas.", "por las tardes.", "los fines de semana."],
          answer: 0,
          explanation: "\"Mi horario va a ser de mañana, de ocho a tres.\"",
        },
        {
          n: 3,
          question: "Para ir al hospital, Lucía…",
          options: ["va andando.", "va en bicicleta.", "va en autobús."],
          answer: 2,
          explanation: "\"Hay un autobús que para justo delante de mi portal.\" The bike is for going to the beach.",
        },
        {
          n: 4,
          question: "Rosa, la vecina de Lucía,…",
          options: ["trabaja en la farmacia.", "le dio información sobre el barrio.", "vive con su familia."],
          answer: 1,
          explanation: "Rosa explained where the market, the pharmacy and the health centre are. She lives alone with her cat.",
        },
        {
          n: 5,
          question: "Lucía le propone a Carmen…",
          options: ["pasar unos días en su casa.", "buscar un piso en Valencia.", "hacer un curso de natación juntas."],
          answer: 0,
          explanation: "\"¿Por qué no vienes a visitarme en Semana Santa? Tengo una cama libre.\"",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a leer ocho textos breves: anuncios, avisos y mensajes. Después, debe contestar a las preguntas (6-13). Seleccione la opción correcta (a, b o c).",
      instructionsEn: "Read eight short texts (ads, notices and messages) and answer questions 6-13. Choose a, b or c.",
      texts: [
        {
          label: "Texto 1",
          body: "BIBLIOTECA MUNICIPAL\nDel 1 al 31 de agosto la biblioteca abre solo por las mañanas, de 9:00 a 14:00. Los libros se pueden devolver en el buzón de la entrada a cualquier hora.",
        },
        {
          label: "Texto 2",
          body: "Mamá: he ido al entrenamiento de baloncesto con Javi. Su padre nos trae a casa después, sobre las ocho. He dejado la ropa sucia en la lavadora. ¡Hasta luego! Pablo",
        },
        {
          label: "Texto 3",
          body: "SE ALQUILA habitación en piso compartido, a cinco minutos de la universidad. Solo para estudiantes. 300 € al mes con gastos de luz y agua incluidos. No se admiten animales. Llamar por las tardes: 654 321 987.",
        },
        {
          label: "Texto 4",
          body: "FARMACIA CENTRAL\nFarmacia de guardia este fin de semana: Farmacia López, calle Mayor, 12. Abierta sábado y domingo las 24 horas.",
        },
        {
          label: "Texto 5",
          body: "Hola, Ana. El dentista ha llamado para cambiar tu cita del jueves. Ahora es el viernes a la misma hora, a las cinco y media. Si no puedes ir, llama tú a la consulta. Besos, Marta",
        },
        {
          label: "Texto 6",
          body: "RESTAURANTE EL OLIVO\nMenú del día: 12 €. Primer plato, segundo plato, postre, pan y bebida. De lunes a viernes, de 13:00 a 16:00. Fines de semana: solo carta.",
        },
        {
          label: "Texto 7",
          body: "AVISO A LOS VECINOS\nEl martes 14 no habrá agua caliente en el edificio de 10:00 a 13:00 porque van a reparar la caldera. Perdonen las molestias. La administración.",
        },
        {
          label: "Texto 8",
          body: "CURSO DE FOTOGRAFÍA PARA PRINCIPIANTES\nOcho clases, los sábados de 10 a 12. No es necesario tener cámara: la escuela presta una a cada alumno. Inscripción en la web hasta el 30 de septiembre.",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 6,
          source: 0,
          question: "Texto 1. En agosto, en la biblioteca…",
          options: ["no se pueden devolver libros por la tarde.", "se pueden devolver libros aunque esté cerrada.", "no se pueden sacar libros."],
          answer: 1,
          explanation: "Books can be returned in the box at the entrance at any time.",
        },
        {
          n: 7,
          source: 1,
          question: "Texto 2. Pablo le dice a su madre que…",
          options: ["va a volver con el padre de Javi.", "necesita que lo recoja a las ocho.", "no ha lavado la ropa."],
          answer: 0,
          explanation: "\"Su padre nos trae a casa después, sobre las ocho\": Javi's father is bringing him home, so his mother doesn't need to pick him up.",
        },
        {
          n: 8,
          source: 2,
          question: "Texto 3. La habitación…",
          options: ["es para cualquier persona.", "cuesta más de 300 € con la luz.", "no es para personas con perro o gato."],
          answer: 2,
          explanation: "\"No se admiten animales.\" It's only for students, and 300 € already includes electricity and water.",
        },
        {
          n: 9,
          source: 3,
          question: "Texto 4. Este fin de semana, la Farmacia López…",
          options: ["está abierta día y noche.", "cierra el domingo.", "está en la Farmacia Central."],
          answer: 0,
          explanation: "\"Abierta sábado y domingo las 24 horas.\"",
        },
        {
          n: 10,
          source: 4,
          question: "Texto 5. La cita de Ana con el dentista…",
          options: ["es el jueves a las cinco y media.", "ha cambiado de día.", "se ha cancelado."],
          answer: 1,
          explanation: "It moved from Thursday to Friday at the same time.",
        },
        {
          n: 11,
          source: 5,
          question: "Texto 6. El menú del día…",
          options: ["no incluye la bebida.", "se sirve también los domingos.", "solo se sirve entre semana."],
          answer: 2,
          explanation: "\"De lunes a viernes\"; at weekends there's only the à la carte menu.",
        },
        {
          n: 12,
          source: 6,
          question: "Texto 7. El martes 14 por la mañana los vecinos…",
          options: ["no van a tener agua caliente.", "no van a tener agua.", "tienen que reparar la caldera."],
          answer: 0,
          explanation: "\"No habrá agua caliente... de 10:00 a 13:00.\" Only the hot water is affected.",
        },
        {
          n: 13,
          source: 7,
          question: "Texto 8. Para hacer el curso de fotografía…",
          options: ["hay que comprar una cámara.", "hay que apuntarse por internet.", "hay que tener experiencia."],
          answer: 1,
          explanation: "\"Inscripción en la web.\" The school lends each student a camera, and it's for beginners.",
        },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a leer tres textos de tres personas que hablan de su barrio. Después, debe relacionar las preguntas (14-19) con los textos (A, B o C).",
      instructionsEn: "Read three texts in which three people talk about their neighbourhood. Match questions 14-19 with the texts (A, B or C).",
      texts: [
        {
          label: "A",
          title: "Javier, 34 años",
          body:
            "Vivo en el centro de la ciudad, en una calle peatonal llena de tiendas y bares. Me gusta porque lo tengo todo cerca: voy andando al trabajo y nunca uso el coche. El problema es el ruido: los fines de semana hay gente en la calle hasta las tres de la mañana y es difícil dormir. Además, los pisos son muy caros y el mío es bastante pequeño.",
        },
        {
          label: "B",
          title: "Elena, 41 años",
          body:
            "Hace cinco años nos mudamos a un barrio nuevo en las afueras. Tenemos un piso grande con terraza y hay muchos parques, así que es ideal para mis hijos. Lo malo es que no hay muchas tiendas y para ir al centro tardo cuarenta minutos en autobús. Por eso hago la compra una vez a la semana en un supermercado grande, en coche.",
        },
        {
          label: "C",
          title: "Manuel, 68 años",
          body:
            "Vivo en el mismo barrio desde que nací. Es un barrio antiguo, con casas bajas y calles estrechas. Aquí todos nos conocemos: el panadero sabe cómo me llamo y los vecinos me ayudan si necesito algo. Por las tardes juego a las cartas en el centro de mayores. Lo único que no me gusta es que muchos jóvenes se van a vivir a otros sitios.",
        },
      ],
      layout: "select",
      items: [
        {
          n: 14,
          question: "¿Quién vive en la misma zona toda su vida?",
          options: ["A. Javier", "B. Elena", "C. Manuel"],
          answer: 2,
          explanation: "Manuel: \"Vivo en el mismo barrio desde que nací.\"",
        },
        {
          n: 15,
          question: "¿Quién dice que su casa es pequeña?",
          options: ["A. Javier", "B. Elena", "C. Manuel"],
          answer: 0,
          explanation: "Javier: \"el mío es bastante pequeño.\"",
        },
        {
          n: 16,
          question: "¿Quién necesita el coche para hacer la compra?",
          options: ["A. Javier", "B. Elena", "C. Manuel"],
          answer: 1,
          explanation: "Elena shops once a week at a big supermarket, by car.",
        },
        {
          n: 17,
          question: "¿Quién se queja de que hay mucha gente por la noche?",
          options: ["A. Javier", "B. Elena", "C. Manuel"],
          answer: 0,
          explanation: "Javier: at weekends there are people in the street until three in the morning.",
        },
        {
          n: 18,
          question: "¿Quién tiene una buena relación con la gente del barrio?",
          options: ["A. Javier", "B. Elena", "C. Manuel"],
          answer: 2,
          explanation: "Manuel: \"Aquí todos nos conocemos... los vecinos me ayudan.\"",
        },
        {
          n: 19,
          question: "¿Quién vive lejos del centro?",
          options: ["A. Javier", "B. Elena", "C. Manuel"],
          answer: 1,
          explanation: "Elena lives on the outskirts, forty minutes from the centre by bus.",
        },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Usted va a leer un texto sobre una cocinera. Después, debe contestar a las preguntas (20-25). Seleccione la opción correcta (a, b o c).",
      instructionsEn: "Read a text about a cook and answer questions 20-25. Choose a, b or c.",
      texts: [
        {
          title: "Carmen Ruiz: de la cocina de su abuela a la televisión",
          body:
            "Carmen Ruiz nació en 1985 en un pueblo pequeño de Asturias, en el norte de España. Aprendió a cocinar con su abuela, que tenía un restaurante pequeño en la plaza del pueblo. \"Cuando era niña, pasaba las tardes en esa cocina. Mi abuela no usaba recetas: lo tenía todo en la cabeza\", recuerda.\n\n" +
            "A los dieciocho años se fue a Madrid para estudiar Económicas, porque sus padres querían para ella un trabajo más seguro. Pero después de dos años dejó la universidad y empezó a estudiar en una escuela de cocina. Para pagar los estudios, trabajaba los fines de semana como camarera.\n\n" +
            "En 2010 abrió su primer restaurante en Madrid con dos amigos de la escuela. Al principio fue muy difícil y tuvieron pocos clientes, pero en 2014 un periódico publicó un artículo muy positivo sobre su cocina y todo cambió: empezaron a llegar clientes de toda España.\n\n" +
            "Hoy Carmen presenta un programa de cocina en la televisión los domingos, y en 2022 publicó su primer libro de recetas, dedicado a su abuela. Dice que su plato favorito sigue siendo el más sencillo: \"Una buena sopa de verduras, como la que hacía ella\".",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 20,
          question: "Según el texto, la abuela de Carmen…",
          options: ["escribía muchas recetas.", "cocinaba sin leer recetas.", "trabajaba en Madrid."],
          answer: 1,
          explanation: "\"Mi abuela no usaba recetas: lo tenía todo en la cabeza.\"",
        },
        {
          n: 21,
          question: "Carmen fue a Madrid para…",
          options: ["estudiar en una escuela de cocina.", "trabajar de camarera.", "estudiar en la universidad."],
          answer: 2,
          explanation: "She went to Madrid to study economics; the cookery school came two years later.",
        },
        {
          n: 22,
          question: "Carmen trabajaba de camarera porque…",
          options: ["necesitaba dinero para estudiar.", "no le gustaba la universidad.", "quería abrir un restaurante."],
          answer: 0,
          explanation: "\"Para pagar los estudios, trabajaba los fines de semana como camarera.\"",
        },
        {
          n: 23,
          question: "Los primeros años del restaurante…",
          options: ["tuvieron mucho éxito.", "no fueron fáciles.", "salieron en la televisión."],
          answer: 1,
          explanation: "\"Al principio fue muy difícil y tuvieron pocos clientes.\"",
        },
        {
          n: 24,
          question: "En 2014…",
          options: ["Carmen publicó un libro.", "un periódico habló bien del restaurante.", "Carmen empezó un programa de televisión."],
          answer: 1,
          explanation: "\"En 2014 un periódico publicó un artículo muy positivo sobre su cocina.\" The book came out in 2022.",
        },
        {
          n: 25,
          question: "El plato favorito de Carmen…",
          options: ["es muy fácil de preparar.", "es un plato de su restaurante.", "es de su libro."],
          answer: 0,
          explanation: "\"Su plato favorito sigue siendo el más sencillo\": a vegetable soup like her grandmother's.",
        },
      ],
    },
  ],
};
