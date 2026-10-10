// Synced from cheneygross-afk/lengo:src/lib/stories/nonfiction-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "./types";

export const B2_NONFICTION: Story[] = [
  {
    slug: "nf-b2-inflacion-cafe",
    level: "B2",
    genre: "Explainer",
    title: "La inflación, explicada con un café",
    subtitle:
      "Why the price of your morning coffee goes up, what central banks do about it, and why a little inflation is considered healthy.",
    paragraphs: [
      "Hace diez años, un café con leche en el bar de abajo costaba un euro con veinte. Hoy cuesta casi dos. El café no ha cambiado; lo que ha cambiado es el valor del dinero. A eso, en pocas palabras, lo llamamos inflación: la subida general y sostenida de los precios, que hace que con el mismo billete podamos comprar menos cosas.",
      "Para medirla, los institutos de estadística eligen una «cesta» de productos y servicios que representan el consumo de una familia media: alimentos, alquiler, electricidad, transporte, ropa, ocio. Cada mes comparan cuánto cuesta esa cesta con lo que costaba un año antes. Si cuesta un tres por ciento más, la inflación interanual es del tres por ciento.",
      "Las causas pueden ser muy distintas. A veces suben los costes de producción: si el petróleo se encarece, transportar los granos de café y calentar la leche cuesta más, y el bar acaba repercutiéndolo en el precio. Otras veces la demanda crece más rápido que la oferta: si todo el mundo quiere salir a tomar algo después de una crisis y hay los mismos bares, los precios suben.",
      "La inflación no afecta a todos por igual. Quienes tienen ahorros en el banco ven cómo pierden valor, y quienes cobran un sueldo fijo pierden poder adquisitivo si su salario no sube al mismo ritmo. En cambio, quien tiene una hipoteca a tipo fijo sale ganando, porque su deuda vale, en términos reales, cada vez menos.",
      "Para controlarla, los bancos centrales, como el Banco Central Europeo, suben los tipos de interés. Así, pedir un préstamo resulta más caro, las empresas y las familias gastan menos y los precios tienden a moderarse. El problema es que, si frenan demasiado, pueden provocar una recesión.",
      "Curiosamente, el objetivo no es que la inflación sea cero. La mayoría de los bancos centrales busca una inflación en torno al dos por ciento, porque una ligera subida de precios anima a consumir e invertir. Lo contrario, la deflación, puede ser peor: si todos esperamos que el café sea más barato el mes que viene, dejamos de comprarlo hoy, y la economía se paraliza.",
    ],
    questions: [
      {
        question: "How do statistics institutes measure inflation?",
        options: ["By asking shop owners", "By comparing the cost of a basket of goods and services with a year earlier", "By counting banknotes", "By measuring salaries"],
        correctIndex: 1,
        explanation:
          "\"Cada mes comparan cuánto cuesta esa cesta con lo que costaba un año antes.\"",
      },
      {
        question: "Who benefits from inflation, according to the text?",
        options: ["People with savings", "People with a fixed-rate mortgage", "People with fixed salaries", "Nobody"],
        correctIndex: 1,
        explanation:
          "\"Quien tiene una hipoteca a tipo fijo sale ganando, porque su deuda vale, en términos reales, cada vez menos.\"",
      },
      {
        question: "What do central banks do to control inflation?",
        options: ["Print more money", "Raise interest rates", "Lower salaries", "Fix the price of coffee"],
        correctIndex: 1,
        explanation:
          "\"Los bancos centrales... suben los tipos de interés.\"",
      },
      {
        question: "Why is deflation considered dangerous?",
        options: ["Prices rise too fast", "People delay purchases expecting lower prices, and the economy stalls", "Banks close", "Coffee becomes free"],
        correctIndex: 1,
        explanation:
          "\"Si todos esperamos que el café sea más barato el mes que viene, dejamos de comprarlo hoy, y la economía se paraliza.\"",
      },
    ],
  },
  {
    slug: "nf-b2-ola-de-calor",
    level: "B2",
    genre: "News",
    title: "Trabajar a 44 grados: la ola de calor obliga a cambiar los horarios",
    subtitle:
      "A news feature: builders, delivery riders and farm workers adapt to longer, hotter summers, and the debate over who should protect them.",
    paragraphs: [
      "A las seis y media de la mañana, cuando el termómetro todavía marca veintiséis grados, la cuadrilla de Antonio ya está colocando ladrillos en una obra a las afueras de Córdoba. A la una, cuando la temperatura supera los cuarenta, recogen las herramientas y se van a casa. «Antes trabajábamos hasta las tres», explica este albañil de cincuenta y dos años. «Ahora sería una locura».",
      "La escena se repite este verano en buena parte del sur y del centro del país, donde la tercera ola de calor de la temporada ha dejado máximas de hasta cuarenta y cuatro grados. Tras la muerte de varios trabajadores por golpes de calor en los últimos años, la normativa obliga ahora a las empresas a adaptar o suspender las tareas al aire libre cuando las autoridades emiten un aviso naranja o rojo.",
      "En el campo, muchas explotaciones han adelantado la recogida de la fruta a la madrugada, e incluso hay quien trabaja de noche con focos. En las ciudades, las empresas de reparto a domicilio son las más criticadas. «Nos dicen que bebamos agua y descansemos a la sombra, pero si tardas más, la aplicación te penaliza», denuncia Kevin, repartidor en bicicleta en Sevilla.",
      "Las asociaciones empresariales reconocen el problema, pero advierten de que reducir la jornada en plena campaña puede poner en riesgo la producción y el empleo, sobre todo en las pequeñas empresas. Piden ayudas públicas para compensar las horas perdidas.",
      "Los sindicatos, por su parte, reclaman que el calor extremo se reconozca como un riesgo laboral más, igual que el ruido o los productos químicos, y que se instalen termómetros en todos los lugares de trabajo. «No es una cuestión de comodidad, es una cuestión de vida o muerte», afirma una portavoz.",
      "Los meteorólogos coinciden en que los veranos serán cada vez más largos y más intensos. Para muchos expertos, la pregunta ya no es si habrá que cambiar la manera de trabajar en verano, sino cuánto tiempo tardaremos en hacerlo.",
    ],
    questions: [
      {
        question: "Why does Antonio's crew now stop at one o'clock?",
        options: ["Because of a strike", "Because the temperature goes above forty degrees", "Because they start later", "Because of new machines"],
        correctIndex: 1,
        explanation:
          "\"A la una, cuando la temperatura supera los cuarenta, recogen las herramientas.\"",
      },
      {
        question: "What does the regulation require when a red or orange warning is issued?",
        options: ["Workers must go to hospital", "Companies must adapt or suspend outdoor tasks", "Shops must close", "Nothing"],
        correctIndex: 1,
        explanation:
          "\"La normativa obliga ahora a las empresas a adaptar o suspender las tareas al aire libre.\"",
      },
      {
        question: "What does Kevin, the delivery rider, complain about?",
        options: ["His bike", "The app penalizes him if he takes longer", "His salary", "The customers"],
        correctIndex: 1,
        explanation:
          "\"Si tardas más, la aplicación te penaliza.\"",
      },
      {
        question: "What do trade unions demand?",
        options: ["Higher salaries", "That extreme heat be recognized as an occupational risk", "Fewer working days", "Air conditioning in all homes"],
        correctIndex: 1,
        explanation:
          "\"Reclaman que el calor extremo se reconozca como un riesgo laboral más.\"",
      },
    ],
  },
  {
    slug: "nf-b2-flamenco",
    level: "B2",
    genre: "Culture",
    title: "Flamenco: más que un baile",
    subtitle:
      "Song, guitar, dance and handclaps: what flamenco really is, where it comes from and why purists and innovators keep arguing about it.",
    paragraphs: [
      "Para mucha gente, el flamenco es una mujer con vestido de lunares que baila con castañuelas. Esa imagen, repetida en carteles turísticos durante décadas, se queda muy corta. El flamenco es un arte complejo en el que el cante, el toque de la guitarra y el baile tienen el mismo peso, y en el que las palmas y los jaleos del público forman parte de la música.",
      "Sus orígenes no están del todo claros. La mayoría de los estudiosos coincide en que nació en Andalucía, a finales del siglo XVIII y principios del XIX, a partir de la mezcla de tradiciones gitanas, andaluzas, árabes, judías y quizás africanas y americanas. Durante mucho tiempo se transmitió de forma oral, en familias y en reuniones privadas, antes de llegar a los cafés cantantes, los teatros y, más tarde, los tablaos.",
      "El flamenco se organiza en «palos», es decir, estilos con su propio ritmo, tono y carácter. La soleá es solemne y profunda; las bulerías, rápidas y festivas; las alegrías, luminosas, como su nombre indica; la seguiriya expresa un dolor casi insoportable. Muchos palos se basan en un compás de doce tiempos que resulta muy difícil para el oído no acostumbrado.",
      "En el siglo XX, figuras como Camarón de la Isla y Paco de Lucía revolucionaron el género. Paco de Lucía incorporó armonías del jazz y de la música brasileña, e incluso popularizó el cajón peruano, que hoy parece un instrumento flamenco de toda la vida. Sus innovaciones fueron muy criticadas por los puristas, que temían que el flamenco perdiera su esencia.",
      "Ese debate sigue vivo. Hoy hay artistas que mezclan el flamenco con la electrónica, el reguetón o el hip hop y llenan estadios, mientras otros defienden un cante tradicional sin concesiones. Para unos, la mezcla es una traición; para otros, es precisamente lo que el flamenco ha hecho siempre: absorber influencias y transformarlas.",
      "En 2010, la UNESCO declaró el flamenco Patrimonio Cultural Inmaterial de la Humanidad. Pero quizá la mejor manera de entenderlo no es leer sobre él, sino ir a una peña o a un pequeño tablao, sentarse cerca y esperar ese momento, difícil de explicar, que los flamencos llaman «duende».",
    ],
    questions: [
      {
        question: "Which three elements of flamenco have equal weight?",
        options: ["Costume, dance and castanets", "Song, guitar and dance", "Guitar, piano and drums", "Dance, poetry and theater"],
        correctIndex: 1,
        explanation:
          "\"El cante, el toque de la guitarra y el baile tienen el mismo peso.\"",
      },
      {
        question: "What is a \"palo\"?",
        options: ["A guitar", "A style with its own rhythm, tone and character", "A dance step", "A type of venue"],
        correctIndex: 1,
        explanation:
          "\"«Palos», es decir, estilos con su propio ritmo, tono y carácter.\"",
      },
      {
        question: "What did Paco de Lucía bring into flamenco?",
        options: ["Castanets", "Jazz and Brazilian harmonies and the Peruvian cajón", "Electronic music", "The piano"],
        correctIndex: 1,
        explanation:
          "\"Incorporó armonías del jazz y de la música brasileña... popularizó el cajón peruano.\"",
      },
      {
        question: "What is the debate between purists and innovators about?",
        options: ["Ticket prices", "Whether mixing flamenco with other genres betrays it or continues its tradition", "Who invented flamenco", "UNESCO's decision"],
        correctIndex: 1,
        explanation:
          "\"Para unos, la mezcla es una traición; para otros, es precisamente lo que el flamenco ha hecho siempre.\"",
      },
    ],
  },
  {
    slug: "nf-b2-imprenta-america",
    level: "B2",
    genre: "History",
    title: "La primera imprenta de América",
    subtitle:
      "How a printing press arrived in Mexico City in 1539, a century before the first one in the English colonies, and what it printed.",
    paragraphs: [
      "Cuando pensamos en los primeros libros impresos en América, solemos imaginar las colonias inglesas del norte. Sin embargo, un siglo antes de que se instalara la primera imprenta en Massachusetts, en 1639, ya se imprimían libros en la Ciudad de México.",
      "La historia comienza con fray Juan de Zumárraga, primer obispo de México, que llevaba años pidiendo a la Corona una imprenta. Su objetivo era práctico: los frailes necesitaban catecismos, gramáticas y manuales para evangelizar a una población enorme que hablaba decenas de lenguas distintas. Copiar todos esos textos a mano era lento y caro.",
      "En 1539, un impresor de Sevilla, Juan Cromberger, firmó un contrato para enviar un taller a Nueva España. Al frente estaba su empleado Juan Pablos, un italiano de Brescia que cruzó el Atlántico con su mujer, unas cuantas cajas de tipos de metal y una prensa de madera. Se instaló cerca de la plaza mayor, en una casa que todavía puede visitarse.",
      "Los primeros títulos fueron sobre todo religiosos, pero no solo en castellano. La imprenta mexicana publicó pronto obras en náhuatl, la lengua de los mexicas, y más tarde en purépecha, otomí y otras lenguas indígenas. Algunos de esos vocabularios y gramáticas son hoy fuentes valiosísimas para los lingüistas.",
      "La actividad, en cambio, estaba muy controlada. Durante décadas, imprimir requería una licencia de las autoridades, y la Inquisición vigilaba que no circularan ideas consideradas peligrosas. Aun así, a finales del siglo XVI ya funcionaban varias imprentas en la ciudad, y en 1584 se instaló otra en Lima.",
      "De aquellos primeros años se conservan muy pocos ejemplares. Algunos de los libros impresos por Juan Pablos solo se conocen por referencias en documentos de la época. Los que sobreviven, repartidos entre bibliotecas de México, España y Estados Unidos, recuerdan que la historia del libro en América empezó en español, y también en las lenguas que ya se hablaban allí.",
    ],
    questions: [
      {
        question: "When was the first printing press installed in Mexico City?",
        options: ["1492", "1539", "1639", "1584"],
        correctIndex: 1,
        explanation:
          "\"En 1539, un impresor de Sevilla... firmó un contrato para enviar un taller a Nueva España.\"",
      },
      {
        question: "Why did Bishop Zumárraga want a printing press?",
        options: ["To print newspapers", "To produce religious and language texts for evangelization", "To print money", "To sell books in Spain"],
        correctIndex: 1,
        explanation:
          "\"Los frailes necesitaban catecismos, gramáticas y manuales para evangelizar.\"",
      },
      {
        question: "Who ran the Mexico City workshop?",
        options: ["Juan Cromberger", "Juan Pablos, an Italian from Brescia", "Fray Juan de Zumárraga", "A Mexica scribe"],
        correctIndex: 1,
        explanation:
          "\"Al frente estaba su empleado Juan Pablos, un italiano de Brescia.\"",
      },
      {
        question: "Why are some early books valuable to linguists today?",
        options: ["They are beautifully illustrated", "They include vocabularies and grammars of indigenous languages", "They are very large", "They were banned"],
        correctIndex: 1,
        explanation:
          "\"Algunos de esos vocabularios y gramáticas son hoy fuentes valiosísimas para los lingüistas.\"",
      },
    ],
  },
  {
    slug: "nf-b2-cerebro-bilingue",
    level: "B2",
    genre: "Science",
    title: "¿Qué le pasa al cerebro cuando hablamos dos idiomas?",
    subtitle:
      "What research says, and doesn't say, about the advantages of being bilingual, from attention to ageing.",
    paragraphs: [
      "Más de la mitad de la población mundial usa más de una lengua a diario. Durante buena parte del siglo XX, sin embargo, muchos padres y maestros creían que criar a un niño en dos idiomas lo confundiría y retrasaría su desarrollo. Hoy sabemos que esa preocupación no tenía fundamento: los niños bilingües aprenden a hablar más o menos al mismo ritmo que los demás.",
      "Lo que ocurre en el cerebro de una persona bilingüe es fascinante. Los estudios con resonancia magnética muestran que las dos lenguas están activas al mismo tiempo, incluso cuando solo usamos una. Para no mezclarlas, el cerebro tiene que seleccionar constantemente la palabra adecuada y frenar la otra, un trabajo que realizan las mismas redes que controlan la atención.",
      "A partir de esa observación, algunos investigadores propusieron que los bilingües tendrían ventajas en tareas que exigen concentrarse e ignorar distracciones. Los primeros experimentos parecían confirmarlo. Sin embargo, estudios posteriores, con muestras más grandes, han obtenido resultados contradictorios, y hoy la comunidad científica está dividida: la ventaja, si existe, parece pequeña y depende mucho de cómo y cuánto se usen las lenguas.",
      "El terreno más prometedor es el del envejecimiento. Varios trabajos han observado que, entre las personas que desarrollan alzhéimer, las bilingües empiezan a mostrar síntomas algunos años más tarde que las monolingües. No significa que hablar dos idiomas impida la enfermedad, sino que podría contribuir a una «reserva cognitiva» que ayuda al cerebro a compensar el daño durante más tiempo.",
      "Tampoco hay que idealizar el bilingüismo. Los bilingües suelen tener un vocabulario algo menor en cada lengua por separado y, a veces, tardan unos milisegundos más en encontrar una palabra. Es lógico: reparten su experiencia entre dos sistemas.",
      "¿Y quienes aprendemos un idioma de adultos? Las investigaciones sugieren que también nuestro cerebro cambia: aumenta la conectividad entre ciertas áreas y mejora la memoria de trabajo. No hace falta ser bilingüe de nacimiento para beneficiarse. Lo importante, como en el ejercicio físico, es la constancia.",
    ],
    questions: [
      {
        question: "What did many people believe in the twentieth century about raising bilingual children?",
        options: ["It made them smarter", "It would confuse them and delay their development", "It was only possible for rich families", "It was illegal"],
        correctIndex: 1,
        explanation:
          "\"Creían que criar a un niño en dos idiomas lo confundiría y retrasaría su desarrollo.\"",
      },
      {
        question: "What do brain scans show about bilinguals?",
        options: ["Only one language is active at a time", "Both languages are active at the same time", "They use a different part of the brain", "Their brains are larger"],
        correctIndex: 1,
        explanation:
          "\"Las dos lenguas están activas al mismo tiempo, incluso cuando solo usamos una.\"",
      },
      {
        question: "What is the current view on the attention advantage?",
        options: ["It is proven and large", "The scientific community is divided; the advantage, if any, seems small", "It has been completely disproven", "It only exists in children"],
        correctIndex: 1,
        explanation:
          "\"Hoy la comunidad científica está dividida: la ventaja, si existe, parece pequeña.\"",
      },
      {
        question: "What has been observed about bilingualism and Alzheimer's?",
        options: ["Bilinguals never get it", "Symptoms tend to appear a few years later in bilinguals", "It makes it worse", "There is no connection at all"],
        correctIndex: 1,
        explanation:
          "\"Las bilingües empiezan a mostrar síntomas algunos años más tarde que las monolingües.\"",
      },
    ],
  },
  {
    slug: "nf-b2-semana-cuatro-dias",
    level: "B2",
    genre: "Workplace",
    title: "La semana de cuatro días: lo que dicen las primeras pruebas",
    subtitle:
      "Companies in several countries have tried a four-day week without cutting pay. What happened to productivity, health and the business?",
    paragraphs: [
      "La idea parece demasiado buena para ser verdad: trabajar cuatro días a la semana, cobrar lo mismo y producir igual. Sin embargo, en los últimos años cientos de empresas de Europa, América y Oceanía la han puesto a prueba, y algunos gobiernos, incluido el español, han financiado proyectos piloto.",
      "El modelo más extendido es el llamado «100-80-100»: el cien por cien del sueldo, el ochenta por ciento del tiempo y el compromiso de mantener el cien por cien de la productividad. Para conseguirlo, las empresas no se limitan a cerrar los viernes. Revisan cómo se trabaja: reducen las reuniones, eliminan tareas inútiles y protegen bloques de tiempo sin interrupciones.",
      "Los resultados publicados hasta ahora son, en general, positivos. La mayoría de las empresas participantes en las pruebas más conocidas decidió mantener la jornada reducida al terminar el experimento. Los empleados declaraban menos estrés y cansancio, dormían mejor y faltaban menos por enfermedad. En muchas compañías los ingresos se mantuvieron estables o incluso aumentaron, y fue más fácil contratar y retener talento.",
      "Los críticos, sin embargo, señalan varias limitaciones. Las empresas que se presentan voluntarias a estas pruebas suelen ser pequeñas, del sector tecnológico o de servicios profesionales, y están convencidas de antemano de que funcionará. No está claro que el modelo pueda aplicarse igual en un hospital, una fábrica o un supermercado, donde alguien tiene que estar presente todos los días.",
      "Otros advierten de un efecto secundario: la intensificación. Si hay que hacer en cuatro días lo que antes se hacía en cinco, el ritmo puede volverse agotador, y el día libre acaba dedicado a recuperarse. Algunas empresas que abandonaron la experiencia citaron precisamente ese motivo.",
      "Por ahora, la semana de cuatro días parece menos una revolución inmediata que un laboratorio. Lo más interesante, quizá, no es el día libre, sino la pregunta que obliga a hacerse a cualquier organización: ¿cuántas de nuestras horas de trabajo son realmente necesarias?",
    ],
    questions: [
      {
        question: "What does the \"100-80-100\" model mean?",
        options: ["100% pay, 80% time, 100% productivity", "100 workers, 80 hours, 100 days", "Pay cut of 20%", "80% of companies, 100% success"],
        correctIndex: 0,
        explanation:
          "\"El cien por cien del sueldo, el ochenta por ciento del tiempo y el compromiso de mantener el cien por cien de la productividad.\"",
      },
      {
        question: "What did most companies in the best-known trials decide?",
        options: ["To return to five days", "To keep the shorter week", "To cut salaries", "To close on Mondays"],
        correctIndex: 1,
        explanation:
          "\"La mayoría... decidió mantener la jornada reducida al terminar el experimento.\"",
      },
      {
        question: "What limitation do critics point out?",
        options: ["The trials were too long", "Participating companies are usually small, tech or professional services, and already convinced", "Workers didn't like it", "It is illegal in Spain"],
        correctIndex: 1,
        explanation:
          "\"Las empresas que se presentan voluntarias... suelen ser pequeñas... y están convencidas de antemano.\"",
      },
      {
        question: "What is \"intensification\"?",
        options: ["Working more days", "Doing five days' work in four, which can be exhausting", "Hiring more staff", "Longer holidays"],
        correctIndex: 1,
        explanation:
          "\"Si hay que hacer en cuatro días lo que antes se hacía en cinco, el ritmo puede volverse agotador.\"",
      },
    ],
  },
  {
    slug: "nf-b2-reclamar-vuelo",
    level: "B2",
    genre: "Practical guide",
    title: "Te han cancelado el vuelo: cómo reclamar",
    subtitle:
      "Your rights under EU rules when a flight is cancelled or badly delayed, how much compensation you can claim and how to do it.",
    paragraphs: [
      "Llegas al aeropuerto, miras la pantalla y ves la palabra que nadie quiere ver: «cancelado». Antes de resignarte, conviene saber que, si tu vuelo sale de un aeropuerto de la Unión Europea, o llega a uno con una aerolínea europea, la normativa comunitaria te protege.",
      "Lo primero es la asistencia. Mientras esperas, la compañía debe ofrecerte comida y bebida en proporción al tiempo de espera, la posibilidad de comunicarte y, si tienes que pasar la noche, alojamiento y transporte hasta el hotel. Si no lo hace y pagas tú, guarda todos los tiques: podrás reclamar esos gastos más tarde.",
      "Además, puedes elegir entre el reembolso del billete o un transporte alternativo hasta tu destino lo antes posible. No aceptes un bono para otro viaje si prefieres el dinero: el reembolso en efectivo o en la tarjeta es un derecho, no un favor.",
      "En muchos casos, también tienes derecho a una compensación económica, que depende de la distancia: 250 euros para vuelos de hasta 1.500 kilómetros, 400 euros para vuelos de entre 1.500 y 3.500 kilómetros y 600 euros para distancias mayores. Lo mismo se aplica si llegas a tu destino con más de tres horas de retraso. La aerolínea solo se libra de pagar si demuestra que hubo «circunstancias extraordinarias», como una tormenta o el cierre del espacio aéreo, o si te avisó de la cancelación con más de catorce días de antelación.",
      "Para reclamar, dirígete primero a la aerolínea por escrito, a través de su formulario web o en el mostrador del aeropuerto, donde puedes pedir la hoja de reclamaciones. Indica el número de vuelo, la fecha, lo que ocurrió y la cantidad que solicitas. Si en un plazo razonable no responde o rechaza la reclamación sin justificarlo, puedes acudir al organismo nacional de aviación civil o a un servicio de consumo.",
      "Existen también empresas que reclaman por ti a cambio de un porcentaje de la indemnización. Pueden ahorrarte trabajo, pero no son imprescindibles: con paciencia y los documentos adecuados, la mayoría de los pasajeros puede hacerlo por su cuenta.",
    ],
    questions: [
      {
        question: "What must the airline provide while you wait?",
        options: ["A free future flight", "Food and drink, a way to communicate, and a hotel if you must stay overnight", "Only water", "Nothing"],
        correctIndex: 1,
        explanation:
          "\"La compañía debe ofrecerte comida y bebida... y, si tienes que pasar la noche, alojamiento.\"",
      },
      {
        question: "How much compensation for a flight of 2,000 km?",
        options: ["250 euros", "400 euros", "600 euros", "Nothing"],
        correctIndex: 1,
        explanation:
          "\"400 euros para vuelos de entre 1.500 y 3.500 kilómetros.\"",
      },
      {
        question: "When doesn't the airline have to pay compensation?",
        options: ["If the flight was cheap", "If there were extraordinary circumstances or it warned you more than fourteen days ahead", "If you complain by email", "If you were late to the airport"],
        correctIndex: 1,
        explanation:
          "\"Si demuestra que hubo «circunstancias extraordinarias»... o si te avisó... con más de catorce días de antelación.\"",
      },
      {
        question: "What does the text say about voucher offers?",
        options: ["Always accept them", "A cash refund is your right; you don't have to accept a voucher", "Vouchers are worth more", "They are illegal"],
        correctIndex: 1,
        explanation:
          "\"No aceptes un bono para otro viaje si prefieres el dinero: el reembolso... es un derecho.\"",
      },
    ],
  },
  {
    slug: "nf-b2-pisos-turisticos",
    level: "B2",
    genre: "Opinion column",
    title: "Mi barrio ya no es mío",
    subtitle:
      "An opinion column: a resident of a historic city centre on tourist flats, rising rents and what a city is for.",
    paragraphs: [
      "En mi escalera había doce viviendas. Hoy solo quedan tres vecinos de verdad: una señora de noventa años, una pareja con un bebé y yo. Las otras nueve son pisos turísticos. Cada jueves, a las cuatro de la tarde, el portal se llena de maletas con ruedas, y cada domingo, a las once, se vacía otra vez. No sé cómo se llama nadie. Ellos tampoco saben cómo me llamo yo.",
      "No escribo esto contra los turistas. Yo también viajo, y entiendo que alguien prefiera alojarse en un piso con cocina antes que en un hotel. Tampoco culpo a todos los propietarios: conozco a jubilados que complementan una pensión miserable alquilando el piso de sus padres. El problema no es cada caso individual, sino la suma.",
      "Cuando un piso rinde en tres semanas de verano lo mismo que en un año de alquiler tradicional, el cálculo es fácil. Los inversores compran edificios enteros, los alquileres para residentes se disparan y los que vivíamos aquí nos vamos marchando. Con nosotros desaparecen la mercería, la ferretería y el bar de siempre, sustituidos por tiendas de recuerdos y locales de brunch con precios para extranjeros.",
      "Los defensores del sector dicen que el turismo crea empleo y que nadie obliga a nadie a vender. Es cierto que genera riqueza. Pero conviene preguntarse para quién y a qué precio. Un barrio no es solo un conjunto de inmuebles; es una red de relaciones, de favores, de saludos en la escalera. Eso no aparece en las estadísticas de ocupación, y, sin embargo, es lo que hace que una ciudad merezca ser visitada.",
      "Algunas ciudades ya han empezado a actuar: limitan las licencias, obligan a registrar cada vivienda turística o prohíben nuevos pisos en las zonas más saturadas. No creo que haya una solución perfecta, y sería un error convertir al visitante en enemigo. Pero sí creo que una ciudad debe decidir, antes que nada, si quiere ser un lugar para vivir o un decorado para visitar.",
      "La señora de noventa años me dijo el otro día que, cuando ella falte, su piso también se convertirá en turístico. Lo dijo sin rencor, casi con resignación. Yo no supe qué contestar. Solo pensé que, cuando ya no quede nadie que se acuerde de cómo era el barrio, los turistas vendrán a ver algo que ya no existe.",
    ],
    questions: [
      {
        question: "How many of the twelve flats in the writer's stairwell are tourist flats?",
        options: ["Three", "Nine", "Twelve", "None"],
        correctIndex: 1,
        explanation:
          "\"Las otras nueve son pisos turísticos.\"",
      },
      {
        question: "Who does the writer say he does NOT blame?",
        options: ["Investors", "Tourists and all owners individually", "The city council", "His neighbors"],
        correctIndex: 1,
        explanation:
          "\"No escribo esto contra los turistas... Tampoco culpo a todos los propietarios.\"",
      },
      {
        question: "According to the writer, what doesn't appear in occupancy statistics?",
        options: ["Tourist numbers", "The network of relationships that makes a neighborhood", "Prices", "Hotel jobs"],
        correctIndex: 1,
        explanation:
          "\"Un barrio... es una red de relaciones, de favores, de saludos en la escalera. Eso no aparece en las estadísticas.\"",
      },
      {
        question: "What should a city decide, in his view?",
        options: ["How many hotels to build", "Whether it wants to be a place to live or a set to visit", "Which tourists to allow", "The price of rent"],
        correctIndex: 1,
        explanation:
          "\"Una ciudad debe decidir... si quiere ser un lugar para vivir o un decorado para visitar.\"",
      },
    ],
  },
];
