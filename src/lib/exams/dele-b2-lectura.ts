// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b2-lectura.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B2 practice exam -- Prueba 1: Comprensión de lectura.
// 70 minutes, 4 tasks, 36 items, as in the real exam.
const T2_PEOPLE = ["A. Irene", "B. Tomás", "C. Luciana", "D. Andrés"];

const T3_FRAGMENTS = [
  "A. Lo curioso es que, cuanto más aumentaba la oferta, menos satisfechos se declaraban los consumidores.",
  "B. Nadie discute, por tanto, que tener donde elegir sea mejor que no tener ninguna alternativa.",
  "C. Sin embargo, solo el 3 % de esos visitantes acabó comprando un tarro.",
  "D. Esta sensación tiene un nombre: el coste de oportunidad.",
  "E. Por eso la mayoría de los clientes prefiere hoy las tiendas con más variedad.",
  "F. Por eso los expertos recomiendan comprar siempre en tiendas pequeñas.",
  "G. A este fenómeno el psicólogo Barry Schwartz lo bautizó como \"la paradoja de la elección\".",
  "H. Así lo defendían los manuales de economía, y así actuaban las empresas, que no dejaban de ampliar su oferta.",
];

export const DELE_B2_LECTURA: ExamPaper = {
  id: "lectura",
  kind: "reading",
  title: "Comprensión de lectura",
  minutes: 70,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions: "Lea el texto y conteste a las preguntas (1-6). Seleccione la respuesta correcta (a, b o c).",
      texts: [
        {
          title: "Bibliotecas de semillas: guardar el pasado para sembrar el futuro",
          body:
            "En la antigua escuela de un pueblo de Teruel, entre mapas descoloridos y pupitres de madera, se conservan más de trescientas variedades de semillas que no se encuentran en ningún catálogo comercial. Tomates de colgar, judías de color violeta, una variedad de trigo que ya solo cultivaban dos familias de la comarca. Es la biblioteca de semillas de la Asociación Tierra Viva, una de las cerca de cuarenta que funcionan ya en España.\n\n" +
            "El funcionamiento es sencillo, aunque exige compromiso. Cualquier persona puede llevarse en préstamo un sobre de semillas, siempre que al final de la temporada devuelva, como mínimo, la misma cantidad que se llevó, procedente de su propia cosecha. \"No somos una tienda ni un banco genético de laboratorio\", explica Rosa Lanuza, una de las fundadoras. \"Las semillas solo se mantienen vivas si alguien las siembra. Guardarlas en un cajón durante veinte años es condenarlas a desaparecer\".\n\n" +
            "La iniciativa nació en 2015, cuando un grupo de agricultores jubilados se dio cuenta de que, al morir ellos, se perderían variedades que sus familias habían seleccionado durante generaciones. Muchas de esas plantas están adaptadas al clima seco y a los inviernos duros de la zona, algo que hoy, con el cambio climático, vuelve a tener un enorme valor. \"Durante décadas se nos dijo que lo moderno era comprar semillas híbridas cada año\", recuerda Joaquín, de 81 años. \"Rinden mucho, sí, pero necesitan más agua y más abono. Las nuestras dan menos, pero aguantan\".\n\n" +
            "El proyecto ha atraído también a un público inesperado: jóvenes urbanos que cultivan en huertos comunitarios o en el balcón. Para ellos, la biblioteca es además una forma de aprender. Cada sobre va acompañado de una ficha escrita a mano con consejos del donante: cuándo sembrar, cómo regar, incluso qué receta tradicional se preparaba con esa verdura. \"Es patrimonio, igual que una iglesia románica, solo que se come\", bromea Lanuza.\n\n" +
            "No todo son facilidades. La legislación europea limita la venta de semillas no registradas en los catálogos oficiales, y aunque el intercambio gratuito está permitido, las asociaciones se mueven en una zona que ellas mismas definen como \"gris\". Por eso reclaman una regulación específica que reconozca su labor. Mientras tanto, siguen organizando cada otoño una feria en la que los socios intercambian semillas, historias y, sobre todo, tiempo.",
        },
      ],
      items: [
        {
          n: 1,
          question: "Según el texto, las semillas de la biblioteca de Teruel…",
          options: [
            "se venden en tiendas especializadas de la comarca.",
            "no pueden conseguirse en el mercado habitual.",
            "proceden de un laboratorio de la universidad.",
          ],
          answer: 1,
          explanation: "\"No se encuentran en ningún catálogo comercial\".",
        },
        {
          n: 2,
          question: "Quien se lleva semillas de la biblioteca se compromete a…",
          options: [
            "devolver al menos la misma cantidad de su cosecha.",
            "pagar una pequeña cuota anual.",
            "guardarlas en buenas condiciones durante años.",
          ],
          answer: 0,
          explanation: "Debe devolver \"como mínimo, la misma cantidad que se llevó, procedente de su propia cosecha\". Guardarlas sin sembrar es justo lo que critica Lanuza.",
        },
        {
          n: 3,
          question: "El proyecto surgió porque…",
          options: [
            "el cambio climático había destruido muchas cosechas.",
            "los jóvenes del pueblo querían volver a la agricultura.",
            "había riesgo de que algunas variedades locales se perdieran.",
          ],
          answer: 2,
          explanation: "Los agricultores jubilados vieron que al morir ellos se perderían variedades seleccionadas durante generaciones.",
        },
        {
          n: 4,
          question: "Según Joaquín, las semillas tradicionales, frente a las híbridas,…",
          options: [
            "producen más cantidad.",
            "resisten mejor condiciones difíciles.",
            "necesitan más cuidados.",
          ],
          answer: 1,
          explanation: "\"Las nuestras dan menos, pero aguantan\"; las híbridas necesitan más agua y abono.",
        },
        {
          n: 5,
          question: "Las fichas que acompañan a cada sobre…",
          options: [
            "incluyen información práctica y cultural.",
            "son obligatorias según la ley.",
            "están escritas por expertos en agricultura.",
          ],
          answer: 0,
          explanation: "Dan consejos de siembra y riego y hasta recetas tradicionales; las escribe el donante.",
        },
        {
          n: 6,
          question: "En cuanto a la ley, las asociaciones…",
          options: [
            "tienen prohibido intercambiar semillas.",
            "han conseguido una regulación propia.",
            "piden normas que se adapten a su actividad.",
          ],
          answer: 2,
          explanation: "\"Reclaman una regulación específica que reconozca su labor\"; el intercambio gratuito sí está permitido.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Lea los textos en los que cuatro personas cuentan su experiencia al cambiar de profesión después de los cuarenta años. Relacione las preguntas (7-16) con los textos (A, B, C o D).",
      texts: [
        {
          label: "A",
          title: "Irene, de abogada a panadera",
          body:
            "Durante quince años trabajé en un despacho de abogados en Madrid. Ganaba bien, pero llegaba a casa a las diez de la noche y los fines de semana revisaba contratos. Cuando mi padre enfermó, me tomé unos meses para cuidarlo en el pueblo, y allí empecé a hacer pan con la receta de mi abuela. Los vecinos me lo pedían, así que me formé en una escuela de panadería y abrí un obrador. Gano la mitad que antes, me levanto a las cuatro de la mañana y, sin embargo, no he vuelto a tener dolor de cabeza. Mi único arrepentimiento es no haberlo hecho antes.",
        },
        {
          label: "B",
          title: "Tomás, de bancario a enfermero",
          body:
            "El banco cerró mi sucursal y me ofreció una prejubilación a los cuarenta y cinco. Mi mujer pensaba que me dedicaría a descansar, pero yo necesitaba sentirme útil. Siempre me había interesado la medicina, así que me matriculé en Enfermería. Fue durísimo: compañeros de veinte años, exámenes, prácticas en turnos de noche… Hubo un momento, en segundo, en que estuve a punto de dejarlo. Hoy trabajo en urgencias y, aunque el trabajo es agotador, siento que cada día sirve para algo. Eso sí, el sueldo no tiene nada que ver con lo que cobraba en el banco.",
        },
        {
          label: "C",
          title: "Luciana, de profesora a programadora",
          body:
            "Fui profesora de Historia en un instituto de Rosario durante veinte años. Me gustaba enseñar, pero estaba quemada: clases de treinta y cinco alumnos, burocracia, poco reconocimiento. Una amiga me habló de un curso intensivo de programación de seis meses y pensé: \"¿Por qué no?\". Lo pagué con mis ahorros y, al terminar, me contrató una empresa española que trabaja en remoto. Ahora gano el triple que antes y organizo mi horario. Lo que más echo de menos es el contacto con los chicos; por eso, dos tardes a la semana doy clases gratuitas de programación a adolescentes de mi barrio.",
        },
        {
          label: "D",
          title: "Andrés, de ingeniero a guía turístico",
          body:
            "Mi empresa se trasladó a otro país y me quedé en paro a los cincuenta y dos. Envié cientos de currículos sin respuesta: a mi edad, nadie quería contratarme como ingeniero. Mi hija me animó a convertir mi afición por la historia de Toledo en un trabajo. Me saqué el título de guía oficial y ahora hago rutas por la ciudad para grupos pequeños. No fue una decisión, fue una necesidad, y los primeros años fueron económicamente muy difíciles. Pero he descubierto que me encanta hablar en público, algo que jamás habría imaginado cuando estaba encerrado en una oficina.",
        },
      ],
      layout: "select",
      items: [
        { n: 7, question: "¿Quién cambió de profesión porque no encontraba trabajo en la suya?", options: T2_PEOPLE, answer: 3, explanation: "Andrés envió cientos de currículos sin respuesta: \"no fue una decisión, fue una necesidad\"." },
        { n: 8, question: "¿Quién pensó en abandonar la formación?", options: T2_PEOPLE, answer: 1, explanation: "Tomás: \"en segundo, estuve a punto de dejarlo\"." },
        { n: 9, question: "¿Quién gana más dinero ahora que antes?", options: T2_PEOPLE, answer: 2, explanation: "Luciana gana el triple que como profesora." },
        { n: 10, question: "¿Quién descubrió una habilidad que no sabía que tenía?", options: T2_PEOPLE, answer: 3, explanation: "Andrés descubrió que le encanta hablar en público." },
        { n: 11, question: "¿Quién empezó su nueva actividad por una situación familiar?", options: T2_PEOPLE, answer: 0, explanation: "Irene empezó a hacer pan mientras cuidaba a su padre enfermo." },
        { n: 12, question: "¿Quién sigue manteniendo algo de su antigua profesión?", options: T2_PEOPLE, answer: 2, explanation: "Luciana da clases gratuitas de programación dos tardes a la semana." },
        { n: 13, question: "¿Quién estudió junto a personas mucho más jóvenes?", options: T2_PEOPLE, answer: 1, explanation: "Tomás tenía \"compañeros de veinte años\"." },
        { n: 14, question: "¿Quién dice que ha mejorado su salud?", options: T2_PEOPLE, answer: 0, explanation: "Irene: \"no he vuelto a tener dolor de cabeza\"." },
        { n: 15, question: "¿Quién financió su formación con su propio dinero?", options: T2_PEOPLE, answer: 2, explanation: "Luciana pagó el curso con sus ahorros." },
        { n: 16, question: "¿Quién dejó su empleo anterior con una salida anticipada ofrecida por la empresa?", options: T2_PEOPLE, answer: 1, explanation: "El banco le ofreció a Tomás una prejubilación. A Andrés su empresa simplemente se fue del país." },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Lea el siguiente texto, del que se han extraído seis fragmentos. A continuación, lea los ocho fragmentos propuestos (A-H) y decida en qué lugar del texto (17-22) hay que colocar cada uno. Hay dos fragmentos que no tiene que elegir.",
      texts: [
        {
          title: "¿Demasiado donde elegir?",
          body:
            "Durante décadas, la economía partió de una idea aparentemente indiscutible: cuantas más opciones tenga una persona, más libre y más feliz será. (17) Pero ¿qué ocurre cuando las alternativas se cuentan por cientos?\n\n" +
            "En el año 2000, dos investigadores de las universidades de Columbia y Stanford montaron un puesto de mermeladas en un supermercado de California. Un día ofrecían veinticuatro sabores para probar; otro día, solo seis. El puesto grande atrajo a más curiosos, como era de esperar. (18) Entre quienes se habían acercado al puesto pequeño, en cambio, un 30 % acabó comprando.\n\n" +
            "El experimento se convirtió en un clásico. (19) Según el psicólogo estadounidense, el exceso de posibilidades no nos libera, sino que nos paraliza: tememos equivocarnos, dejamos la decisión para más tarde y, si finalmente elegimos, nos quedamos con la duda de si otra opción habría sido mejor.\n\n" +
            "Cada vez que optamos por algo, renunciamos a todo lo demás. (20) Cuantas más alternativas descartamos, más pesa en nuestra mente lo que hemos dejado atrás, y menos disfrutamos de lo que hemos elegido.\n\n" +
            "Los datos del consumo parecen confirmarlo. En las últimas décadas, el número de productos de un supermercado medio se ha multiplicado. (21) Algunas cadenas lo han entendido y han reducido las variedades de un mismo producto, con resultados positivos en sus ventas.\n\n" +
            "Otros estudios posteriores han matizado estas conclusiones: el efecto depende de si sabemos lo que queremos o de si las opciones son fáciles de comparar. (22) La clave estaría, más bien, en encontrar un número razonable de posibilidades.",
        },
      ],
      layout: "select",
      items: [
        { n: 17, question: "", options: T3_FRAGMENTS, answer: 7, explanation: "H desarrolla la idea inicial (más opciones, más felicidad) antes de que el \"Pero\" la cuestione." },
        { n: 18, question: "", options: T3_FRAGMENTS, answer: 2, explanation: "C da el dato del puesto grande (3 %), que contrasta con el 30 % del puesto pequeño (\"en cambio\")." },
        { n: 19, question: "", options: T3_FRAGMENTS, answer: 6, explanation: "G presenta a Barry Schwartz, a quien se refiere después \"el psicólogo estadounidense\"." },
        { n: 20, question: "", options: T3_FRAGMENTS, answer: 3, explanation: "D pone nombre a la renuncia que describe la frase anterior; la siguiente lo explica." },
        { n: 21, question: "", options: T3_FRAGMENTS, answer: 0, explanation: "A: más oferta y menos satisfacción, lo que explica que algunas cadenas reduzcan sus variedades." },
        { n: 22, question: "", options: T3_FRAGMENTS, answer: 1, explanation: "B matiza: elegir no es malo en sí; la clave es un número razonable de opciones. E y F contradicen el texto o no aparecen en él." },
      ],
    },
    {
      title: "Tarea 4",
      instructions: "Lea el texto y rellene los huecos (23-36) con la opción correcta (a, b o c).",
      texts: [
        {
          title: "La siesta, ¿mito o necesidad?",
          body:
            "Pocas costumbres se asocian tanto a España (23) la siesta. Sin embargo, según una encuesta reciente, solo uno de cada cinco españoles la duerme a diario, y la mayoría de ellos (24) jubilados o personas que trabajan desde casa.\n\n" +
            "Los médicos, curiosamente, llevan años defendiendo sus beneficios. Una siesta corta, de no más de veinte minutos, mejora la memoria y la concentración, (25) una siesta demasiado larga puede producir el efecto contrario: nos despertamos cansados y de mal humor. \"Lo ideal es acostarse (26) haber comido y no dormir en la cama, sino en un sillón\", recomienda la neuróloga Ana Ferrer. \"Así evitamos que el cuerpo (27) en un sueño profundo\".\n\n" +
            "El problema, (28) los expertos, es que el horario laboral español no facilita esta costumbre. La jornada partida, con dos o tres horas para comer, se ha ido sustituyendo (30) la jornada continua, y cada vez son (29) las empresas que dejan tiempo para descansar después del almuerzo. Es verdad que algunas compañías tecnológicas han instalado salas de descanso en sus oficinas, (31) se trata de casos aislados.\n\n" +
            "Hay quien (32) que la siesta es incompatible con la vida moderna. Otros, en cambio, creen que sería una buena idea recuperarla. \"Si (33) una pausa de veinte minutos después de comer, seríamos más productivos por la tarde\", asegura Ferrer. En países como Japón, (34) la cultura del trabajo es muy exigente, se ha puesto de moda el inemuri, una breve cabezada en el lugar de trabajo que se considera señal de dedicación.\n\n" +
            "Sea como sea, la siesta sigue formando parte del imaginario español. Y aunque no la (35) todos los días, pocos renuncian a ella los domingos de verano, cuando el calor no (36) hacer otra cosa.",
        },
      ],
      layout: "choice",
      items: [
        { n: 23, question: "", options: ["como", "que", "de"], answer: 0, explanation: "Tanto… como: comparación de igualdad." },
        { n: 24, question: "", options: ["están", "son", "sean"], answer: 1, explanation: "Ser + sustantivo que clasifica (jubilados). Indicativo, porque es un dato." },
        { n: 25, question: "", options: ["por lo tanto", "mientras que", "ya que"], answer: 1, explanation: "Mientras que contrapone la siesta corta a la larga." },
        { n: 26, question: "", options: ["después de", "antes que", "tras de"], answer: 0, explanation: "Después de + infinitivo." },
        { n: 27, question: "", options: ["entra", "entre", "entrará"], answer: 1, explanation: "Evitar que + subjuntivo." },
        { n: 28, question: "", options: ["según", "para", "sobre"], answer: 0, explanation: "Según introduce la fuente de una opinión." },
        { n: 29, question: "", options: ["más", "menos", "tantas"], answer: 1, explanation: "Si la jornada continua sustituye a la partida, cada vez hay menos empresas que dejan tiempo." },
        { n: 30, question: "", options: ["por", "para", "con"], answer: 0, explanation: "Sustituir algo por otra cosa." },
        { n: 31, question: "", options: ["sino", "pero", "aunque"], answer: 1, explanation: "Es verdad que…, pero…: se admite un hecho y se le opone otro. \"Sino\" necesita una negación antes." },
        { n: 32, question: "", options: ["piense", "piensa", "pensara"], answer: 1, explanation: "\"Hay quien\" + indicativo cuando se afirma que esas personas existen." },
        { n: 33, question: "", options: ["hacemos", "hiciéramos", "hubiéramos hecho"], answer: 1, explanation: "Condicional hipotética de presente: si + imperfecto de subjuntivo, condicional (seríamos)." },
        { n: 34, question: "", options: ["donde", "cuando", "que"], answer: 0, explanation: "Relativo de lugar referido a Japón." },
        { n: 35, question: "", options: ["duermen", "duerman", "dormirán"], answer: 1, explanation: "Aunque + subjuntivo cuando no importa si el hecho es cierto o se presenta como conocido." },
        { n: 36, question: "", options: ["deja", "hace", "impide"], answer: 0, explanation: "No dejar + infinitivo: el calor no deja hacer otra cosa. \"No impide\" diría lo contrario." },
      ],
    },
  ],
};
