// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b1-lectura.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B1 practice exam -- Prueba 1: Comprensión de lectura.
// 70 minutes, 5 tasks, 30 items, as in the real exam.
const ACTIVITIES = [
  "A. Club de lectura",
  "B. Taller de cocina vegetariana",
  "C. Senderismo de fin de semana",
  "D. Coro municipal",
  "E. Voluntariado con mayores",
  "F. Curso de fotografía con el móvil",
  "G. Clases de baile para parejas",
  "H. Huerto urbano",
  "I. Intercambio de idiomas",
  "J. Taller de reparación de bicicletas",
];

const FRAGMENTS = [
  "A. Además, los clientes se quejaron de que nadie respondía los viernes.",
  "B. Sin embargo, no todas las empresas están preparadas para este cambio.",
  "C. Por eso, la mayoría de los trabajadores prefiere volver a la oficina cinco días.",
  "D. El resultado fue sorprendente: la productividad no bajó, sino que subió un 8 %.",
  "E. Algunas personas, en cambio, dicen que tienen más estrés que antes.",
  "F. Esa es la pregunta que se hicieron hace dos años en una empresa de Valencia.",
  "G. Otros prefieren usar el día libre para hacer trámites o ir al médico.",
  "H. Por último, la empresa ha ahorrado dinero en luz y calefacción.",
];

export const DELE_B1_LECTURA: ExamPaper = {
  id: "lectura",
  kind: "reading",
  title: "Comprensión de lectura",
  minutes: 70,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a leer seis textos en los que unas personas explican qué actividad buscan en su ciudad y diez anuncios de actividades. Relacione a las personas (1-6) con los anuncios (A-J). Hay cuatro anuncios que no debe seleccionar.",
      texts: [
        {
          label: "Personas",
          body:
            "1. BEATRIZ: Acabo de jubilarme y tengo mucho tiempo libre. Me gustaría hacer algo útil para los demás, sobre todo para personas de mi edad que viven solas.\n\n" +
            "2. RAÚL: Trabajo toda la semana en una oficina y los sábados necesito salir de la ciudad, respirar aire limpio y hacer ejercicio en la naturaleza.\n\n" +
            "3. NURIA: Me encanta cantar, pero solo lo hago en la ducha. Quiero perder la vergüenza y cantar con otras personas.\n\n" +
            "4. TOMÁS: Mi mujer y yo nos casamos en junio y en la boda queremos sorprender a los invitados con un buen vals.\n\n" +
            "5. INÉS: Estudio alemán y necesito practicar la conversación. A cambio, puedo ayudar a otras personas con su español.\n\n" +
            "6. MARCOS: Voy al trabajo en bici todos los días y siempre tengo algún problema: una rueda pinchada, los frenos… Quiero aprender a arreglarla yo mismo.",
        },
        {
          label: "A",
          title: "Club de lectura",
          body: "Nos reunimos el primer martes de cada mes en la biblioteca para comentar una novela. Este mes: \"Nada\", de Carmen Laforet.",
        },
        {
          label: "B",
          title: "Taller de cocina vegetariana",
          body: "Aprende a preparar platos sin carne sanos y baratos. Cuatro sesiones los jueves por la tarde. Ingredientes incluidos.",
        },
        {
          label: "C",
          title: "Senderismo de fin de semana",
          body: "Cada sábado, una ruta diferente por la sierra, de 10 a 15 kilómetros. Salida en autobús a las 8:00 desde la plaza de España.",
        },
        {
          label: "D",
          title: "Coro municipal",
          body: "Buscamos voces nuevas. No hace falta saber leer música ni tener experiencia: solo ganas de pasarlo bien cantando en grupo.",
        },
        {
          label: "E",
          title: "Voluntariado con mayores",
          body: "¿Tienes dos horas a la semana? Acompaña a personas mayores que viven solas: pasear, charlar, ayudarles con la compra.",
        },
        {
          label: "F",
          title: "Fotografía con el móvil",
          body: "Saca el máximo partido a la cámara de tu teléfono. Curso online de seis semanas, a tu ritmo.",
        },
        {
          label: "G",
          title: "Baile para parejas",
          body: "Salsa, tango y vals. Preparamos también coreografías especiales para bodas. Grupos reducidos, horario de tarde.",
        },
        {
          label: "H",
          title: "Huerto urbano",
          body: "Cultiva tus propias verduras en el huerto del barrio. Parcelas de diez metros cuadrados para vecinos.",
        },
        {
          label: "I",
          title: "Intercambio de idiomas",
          body: "Todos los miércoles en el café Central: media hora en español y media hora en otro idioma. Inglés, francés, alemán e italiano.",
        },
        {
          label: "J",
          title: "Taller de bicicletas",
          body: "Te enseñamos a hacer tú mismo el mantenimiento básico de tu bici: cambiar una cámara, ajustar los frenos y la cadena.",
        },
      ],
      layout: "select",
      items: [
        { n: 1, question: "Beatriz", options: ACTIVITIES, answer: 4, explanation: "Beatriz quiere ayudar a personas mayores que viven solas: el voluntariado (E)." },
        { n: 2, question: "Raúl", options: ACTIVITIES, answer: 2, explanation: "Raúl quiere salir de la ciudad los sábados y hacer ejercicio en la naturaleza: senderismo (C)." },
        { n: 3, question: "Nuria", options: ACTIVITIES, answer: 3, explanation: "Nuria quiere cantar con otras personas y no tiene experiencia: el coro (D)." },
        { n: 4, question: "Tomás", options: ACTIVITIES, answer: 6, explanation: "Tomás quiere bailar un vals en su boda: baile para parejas, con coreografías para bodas (G)." },
        { n: 5, question: "Inés", options: ACTIVITIES, answer: 8, explanation: "Inés quiere practicar alemán y ayudar con el español: intercambio de idiomas (I)." },
        { n: 6, question: "Marcos", options: ACTIVITIES, answer: 9, explanation: "Marcos quiere aprender a arreglar su bici: el taller (J)." },
      ],
    },
    {
      title: "Tarea 2",
      instructions: "Usted va a leer un texto sobre un pueblo que ha recuperado población. Después, debe contestar a las preguntas (7-12). Seleccione la opción correcta (a, b o c).",
      texts: [
        {
          title: "El pueblo que volvió a tener escuela",
          body:
            "Hace diez años, Valdelinares, un pueblo de la provincia de Teruel, tenía solo cuarenta habitantes, casi todos mayores de sesenta y cinco años. La escuela había cerrado en 2009 porque no había niños y el último bar abría solo en verano, cuando volvían los hijos de los antiguos vecinos. Hoy el pueblo tiene ciento veinte habitantes y la escuela ha vuelto a abrir con catorce alumnos.\n\n" +
            "El cambio empezó con una idea de la alcaldesa, Pilar Gómez. \"Teníamos casas vacías y buena conexión a internet gracias a un proyecto europeo. Pensamos que había mucha gente en las ciudades que podía trabajar desde cualquier sitio\", explica. El ayuntamiento compró cinco casas abandonadas, las reformó y empezó a alquilarlas a precios muy bajos, con una condición: los nuevos vecinos tenían que vivir en el pueblo todo el año.\n\n" +
            "Entre los primeros en llegar estuvieron Andrés y Lucía, una pareja de diseñadores gráficos de Barcelona. \"En la ciudad pagábamos mil doscientos euros por un piso pequeño y pasábamos una hora al día en el metro. Aquí pagamos trescientos por una casa con jardín\", cuenta Lucía. Reconoce que el primer invierno fue duro: \"Nieva mucho y la tienda más cercana está a veinte kilómetros. Tuvimos que aprender a planificar la compra\".\n\n" +
            "Los vecinos de toda la vida recibieron a los recién llegados con curiosidad y, al principio, con algo de desconfianza. \"Pensábamos que se iban a ir en unos meses\", admite Julián, de setenta y ocho años. Ahora es él quien enseña a los niños a cuidar el huerto de la escuela. El bar abre todo el año y este verano se ha inaugurado un pequeño espacio de trabajo compartido. La próxima meta, dice la alcaldesa, es conseguir que un médico pase consulta en el pueblo dos días por semana en vez de uno.",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 7,
          question: "Según el texto, hace diez años en Valdelinares…",
          options: ["no había ningún bar.", "la mayoría de los vecinos eran mayores.", "había una escuela con pocos alumnos."],
          answer: 1,
          explanation: "Tenía cuarenta habitantes, \"casi todos mayores de sesenta y cinco años\". La escuela estaba cerrada y el bar abría en verano.",
        },
        {
          n: 8,
          question: "La idea de la alcaldesa fue…",
          options: ["atraer a personas que trabajan a distancia.", "vender las casas vacías.", "pedir dinero a Europa para la escuela."],
          answer: 0,
          explanation: "\"Había mucha gente en las ciudades que podía trabajar desde cualquier sitio.\" El ayuntamiento alquila las casas, no las vende.",
        },
        {
          n: 9,
          question: "Para alquilar una casa del ayuntamiento hay que…",
          options: ["tener hijos en edad escolar.", "reformar la casa.", "vivir en el pueblo todo el año."],
          answer: 2,
          explanation: "\"Con una condición: los nuevos vecinos tenían que vivir en el pueblo todo el año.\"",
        },
        {
          n: 10,
          question: "Lucía cuenta que el primer invierno…",
          options: ["pensaron en volver a Barcelona.", "tuvieron que organizarse mejor para comprar.", "no pudieron trabajar por la nieve."],
          answer: 1,
          explanation: "\"Tuvimos que aprender a planificar la compra\", porque la tienda está a veinte kilómetros.",
        },
        {
          n: 11,
          question: "Al principio, algunos vecinos antiguos…",
          options: ["no creían que los nuevos se fueran a quedar.", "no querían hablar con los nuevos.", "se fueron del pueblo."],
          answer: 0,
          explanation: "Julián: \"Pensábamos que se iban a ir en unos meses\".",
        },
        {
          n: 12,
          question: "Ahora el ayuntamiento quiere…",
          options: ["abrir otra escuela.", "tener más horas de médico en el pueblo.", "construir un espacio de trabajo."],
          answer: 1,
          explanation: "Quiere que el médico pase consulta dos días por semana en vez de uno. El espacio de trabajo ya se ha inaugurado.",
        },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a leer tres textos en los que tres personas cuentan cómo aprendieron un idioma. Relacione las preguntas (13-18) con los textos (A, B o C).",
      texts: [
        {
          label: "A",
          title: "Olga (Ucrania)",
          body:
            "Llegué a Madrid sin saber ni una palabra de español. Durante los primeros meses trabajé en un restaurante y aprendí escuchando a mis compañeros; al principio solo entendía los números y los nombres de los platos. Después me apunté a clases gratuitas en una asociación del barrio. Lo que más me costó fue la pronunciación de la erre, y todavía hoy algunos clientes me preguntan de dónde soy.",
        },
        {
          label: "B",
          title: "James (Escocia)",
          body:
            "Estudié español cinco años en el instituto, pero cuando viajé a México por primera vez no entendía casi nada: la gente hablaba muy rápido y usaba palabras que yo no conocía. Decidí quedarme un año como profesor de inglés y vivir con una familia mexicana. Ellos me corregían con mucha paciencia. Ahora sueño en español y, curiosamente, se me han olvidado algunas palabras de mi propia lengua.",
        },
        {
          label: "C",
          title: "Mei (China)",
          body:
            "Yo aprendí español sin salir de mi país, en la universidad de Pekín. Nuestros profesores eran muy exigentes y estudiábamos gramática muchas horas al día. Para practicar la conversación, veía series españolas con subtítulos y hablaba por videollamada con una chica de Sevilla que estudiaba chino. Cuando por fin viajé a España, me sorprendió lo mucho que entendía.",
        },
      ],
      layout: "select",
      items: [
        { n: 13, question: "¿Quién aprendió el idioma en su propio país?", options: ["A. Olga", "B. James", "C. Mei"], answer: 2, explanation: "Mei: \"aprendí español sin salir de mi país\"." },
        { n: 14, question: "¿Quién aprendió al principio en su trabajo, sin clases?", options: ["A. Olga", "B. James", "C. Mei"], answer: 0, explanation: "Olga aprendió escuchando a sus compañeros del restaurante." },
        { n: 15, question: "¿Quién dice que habla peor su lengua materna?", options: ["A. Olga", "B. James", "C. Mei"], answer: 1, explanation: "James: \"se me han olvidado algunas palabras de mi propia lengua\"." },
        { n: 16, question: "¿Quién tuvo problemas con un sonido?", options: ["A. Olga", "B. James", "C. Mei"], answer: 0, explanation: "A Olga le costó la pronunciación de la erre." },
        { n: 17, question: "¿Quién entendió más de lo que esperaba en su primer viaje?", options: ["A. Olga", "B. James", "C. Mei"], answer: 2, explanation: "Mei: \"me sorprendió lo mucho que entendía\". A James le pasó lo contrario." },
        { n: 18, question: "¿Quién vivió con nativos que le ayudaban con el idioma?", options: ["A. Olga", "B. James", "C. Mei"], answer: 1, explanation: "James vivió con una familia mexicana que lo corregía." },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Lea el siguiente texto, del que se han extraído seis fragmentos. A continuación, lea los ocho fragmentos propuestos (A-H) y decida en qué lugar del texto (19-24) hay que colocar cada uno. Hay dos fragmentos que no tiene que elegir.",
      texts: [
        {
          title: "¿Y si trabajáramos cuatro días a la semana?",
          body:
            "¿Es posible trabajar menos y producir lo mismo? (19) La empresa, dedicada al diseño de páginas web, decidió probar durante seis meses una semana laboral de cuatro días, sin bajar los sueldos.\n\n" +
            "Los directivos tenían miedo de perder clientes, así que midieron con cuidado los resultados. (20) Según los responsables, el motivo es sencillo: la gente llega descansada el lunes y se concentra más durante las horas de trabajo.\n\n" +
            "Los empleados, por su parte, están encantados. Muchos dedican el viernes a su familia o a sus aficiones. (21) \"Antes pedía horas libres para cualquier gestión; ahora lo hago todo el viernes\", explica una programadora.\n\n" +
            "Pero la experiencia no ha sido perfecta. (22) Tienen que hacer en cuatro días las tareas de cinco y sienten que no tienen tiempo para descansar durante la jornada.\n\n" +
            "Los expertos piden prudencia. (23) En un hospital o en una tienda, por ejemplo, alguien tiene que estar presente todos los días, y organizar los turnos puede ser muy complicado.\n\n" +
            "En cualquier caso, la empresa valenciana ha decidido mantener el nuevo horario. (24) \"Hemos ganado en todo\", resume su director.",
        },
      ],
      layout: "select",
      items: [
        { n: 19, question: "", options: FRAGMENTS, answer: 5, explanation: "F responde a la pregunta inicial y presenta la empresa de Valencia de la que se habla a continuación." },
        { n: 20, question: "", options: FRAGMENTS, answer: 3, explanation: "D da el resultado de las mediciones; la frase siguiente explica \"el motivo\"." },
        { n: 21, question: "", options: FRAGMENTS, answer: 6, explanation: "G continúa la lista de usos del viernes libre y anticipa el ejemplo de las gestiones." },
        { n: 22, question: "", options: FRAGMENTS, answer: 4, explanation: "E introduce a quienes tienen más estrés, y la frase siguiente explica por qué." },
        { n: 23, question: "", options: FRAGMENTS, answer: 1, explanation: "B: no todas las empresas pueden hacerlo, como muestran los ejemplos del hospital y la tienda." },
        { n: 24, question: "", options: FRAGMENTS, answer: 7, explanation: "H añade una última ventaja antes de la conclusión del director. A contradice «Hemos ganado en todo» y C contradice el texto." },
      ],
    },
    {
      title: "Tarea 5",
      instructions: "Lea el texto y rellene los huecos (25-30) con la opción correcta (a, b o c).",
      texts: [
        {
          title: "Correo a una amiga",
          body:
            "Querida Elena:\n\n" +
            "¡Por fin tengo un momento para escribirte! Perdona que no (25) antes, pero este mes he tenido muchísimo trabajo. La semana pasada (26) a Santiago para una reunión y aproveché para ver a tu hermano; me dijo que estás muy contenta en tu nuevo trabajo.\n\n" +
            "Te escribo porque en agosto quiero hacer el Camino de Santiago y me encantaría que vinieras (27) nosotros: voy con mi primo Luis. Serían unos diez días, (28) Sarria hasta Santiago. Si te apetece, dímelo antes del día 15, (29) tengo que reservar los albergues pronto.\n\n" +
            "Espero que (30) todo bien por allí. Un abrazo muy fuerte,\n\nMarta",
        },
      ],
      layout: "choice",
      items: [
        { n: 25, question: "", options: ["te escribí", "te haya escrito", "te escribo"], answer: 1, explanation: "\"Perdona que\" pide subjuntivo; el perfecto (haya escrito) se refiere a algo ya pasado." },
        { n: 26, question: "", options: ["fui", "iba", "he ido"], answer: 0, explanation: "\"La semana pasada\" marca una acción terminada: pretérito indefinido." },
        { n: 27, question: "", options: ["en", "con", "de"], answer: 1, explanation: "Venir con alguien: acompañar a alguien. Ojo: con + mí se dice conmigo." },
        { n: 28, question: "", options: ["desde", "entre", "hacia"], answer: 0, explanation: "Desde... hasta marca el punto de partida y el de llegada." },
        { n: 29, question: "", options: ["aunque", "porque", "sino"], answer: 1, explanation: "Da la causa: tiene que reservar pronto." },
        { n: 30, question: "", options: ["va", "vaya", "irá"], answer: 1, explanation: "\"Espero que\" expresa un deseo y lleva subjuntivo." },
      ],
    },
  ],
};
