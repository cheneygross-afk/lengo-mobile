// Synced from cheneygross-afk/lengo:src/lib/stories/nonfiction-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "./types";

export const B1_NONFICTION: Story[] = [
  {
    slug: "nf-b1-horario-espanol",
    level: "B1",
    genre: "Explainer",
    title: "¿Por qué los españoles cenan tan tarde?",
    subtitle:
      "Dinner at ten, prime-time TV at half past ten: the history of Spain's unusual daily timetable, and the debate about changing it.",
    paragraphs: [
      "Los turistas que visitan España suelen sorprenderse por los horarios. Muchos restaurantes no sirven la cena antes de las nueve, el programa más visto de la televisión empieza a las diez y media y en verano las calles están llenas a medianoche. ¿De dónde viene esta costumbre?",
      "Parte de la explicación está en el reloj. Por su posición geográfica, España debería tener la misma hora que Portugal y el Reino Unido. Sin embargo, en 1940 el país adelantó sus relojes una hora para tener la misma hora que Alemania y gran parte de Europa central, y nunca volvió a cambiarlos. Por eso, el sol sale y se pone más tarde que en otros países con la misma hora.",
      "Si miramos el sol y no el reloj, los españoles no comen tan tarde como parece. Comer a las dos en Madrid es como comer a la una en Londres. Pero la diferencia existe, y se nota sobre todo por la noche.",
      "La otra parte de la explicación es la historia económica. Durante las décadas de la posguerra, muchas personas tenían dos trabajos: uno por la mañana y otro por la tarde. Entre los dos había una pausa larga para comer, y la jornada terminaba muy tarde. Aunque hoy pocas personas tienen dos empleos, los horarios se quedaron.",
      "Algunos expertos creen que este horario tiene consecuencias negativas. Los españoles duermen, de media, menos que otros europeos, y muchas familias tienen dificultades para combinar el trabajo con la vida personal. Por eso, desde hace años hay asociaciones que piden volver a la hora de Greenwich y adelantar las jornadas laborales.",
      "Otros piensan que el problema no es el reloj, sino la cultura del trabajo, y que cambiar la hora no cambiaría nada. Mientras tanto, la mayoría de los españoles sigue haciendo lo mismo: comer a las dos, cenar a las nueve y media y pasear cuando, en otros países, la gente ya está durmiendo.",
    ],
    questions: [
      {
        question: "What happened to Spain's clocks in 1940?",
        options: ["They went back one hour", "They moved forward one hour to match Germany and central Europe", "They stopped changing in summer", "Nothing"],
        correctIndex: 1,
        explanation:
          "\"En 1940 el país adelantó sus relojes una hora para tener la misma hora que Alemania.\"",
      },
      {
        question: "According to the text, eating at two in Madrid is like eating at what time in London?",
        options: ["At one", "At three", "At two", "At midday"],
        correctIndex: 0,
        explanation:
          "\"Comer a las dos en Madrid es como comer a la una en Londres.\"",
      },
      {
        question: "What historical reason does the text give?",
        options: ["Hot weather", "In the post-war decades, many people had two jobs with a long lunch break between them", "Television schedules", "Tourism"],
        correctIndex: 1,
        explanation:
          "\"Muchas personas tenían dos trabajos... Entre los dos había una pausa larga para comer.\"",
      },
      {
        question: "What do some associations ask for?",
        options: ["Longer lunch breaks", "A return to Greenwich time and earlier working hours", "Later dinners", "More holidays"],
        correctIndex: 1,
        explanation:
          "\"Hay asociaciones que piden volver a la hora de Greenwich y adelantar las jornadas laborales.\"",
      },
    ],
  },
  {
    slug: "nf-b1-pueblo-teletrabajo",
    level: "B1",
    genre: "News",
    title: "El pueblo que pagó el internet para que volvieran los jóvenes",
    subtitle:
      "A report from a small village that installed fast broadband and offered cheap houses to remote workers. Two years later, has it worked?",
    paragraphs: [
      "Hace cinco años, en este pueblo de la montaña gallega solo quedaban ochenta vecinos, y la mayoría tenía más de setenta años. La escuela había cerrado en 2010 y la última tienda, un año después. Hoy viven aquí ciento veinte personas, y por primera vez en dos décadas han nacido tres niños en un mismo año.",
      "El cambio empezó con una decisión del ayuntamiento: instalar internet de fibra óptica en todas las casas, algo que en muchas zonas rurales todavía no existe. Después, el alcalde publicó un anuncio en las redes sociales: casas antiguas en alquiler por doscientos euros al mes para personas que pudieran trabajar a distancia.",
      "«Recibimos más de mil correos en una semana», cuenta el alcalde, que también es el dueño del único bar. «No podíamos creerlo. Había programadores de Barcelona, traductoras de Madrid, un ingeniero de Alemania…». Al final eligieron a veinte familias.",
      "Lucía Ferreiro, diseñadora web de treinta y cuatro años, fue una de las primeras en llegar. «En Madrid pagaba mil cien euros por un piso interior. Aquí tengo una casa con huerto y trabajo para los mismos clientes», explica. «Lo más difícil fue el primer invierno: llovía todos los días y oscurecía a las seis».",
      "No todo ha sido fácil. Algunos de los recién llegados se fueron después del primer año, y no todos los vecinos de toda la vida están contentos con los cambios. «Antes conocía a todo el mundo; ahora hay gente que no saluda», dice Manuel, de ochenta y un años.",
      "Aun así, el pueblo ha vuelto a abrir la escuela, con siete alumnos, y una pareja de Valencia ha abierto una pequeña tienda. Otros municipios de la zona ya han llamado al alcalde para preguntarle cómo lo hizo. Su consejo es sencillo: «Sin internet no viene nadie. Pero sin una comunidad, nadie se queda».",
    ],
    questions: [
      {
        question: "How many people lived in the village five years ago?",
        options: ["Eighty", "One hundred and twenty", "Twenty", "A thousand"],
        correctIndex: 0,
        explanation:
          "\"Hace cinco años... solo quedaban ochenta vecinos.\"",
      },
      {
        question: "What did the council do first?",
        options: ["Built new houses", "Installed fiber-optic internet in every house", "Opened a school", "Gave money to families"],
        correctIndex: 1,
        explanation:
          "\"Instalar internet de fibra óptica en todas las casas.\"",
      },
      {
        question: "What was hardest for Lucía Ferreiro?",
        options: ["Finding clients", "The first winter: rain every day and dark at six", "Paying the rent", "Learning Galician"],
        correctIndex: 1,
        explanation:
          "\"Lo más difícil fue el primer invierno: llovía todos los días y oscurecía a las seis.\"",
      },
      {
        question: "What is the mayor's advice?",
        options: ["Build a bar", "Internet brings people, but a community makes them stay", "Lower taxes", "Advertise on TV"],
        correctIndex: 1,
        explanation:
          "\"Sin internet no viene nadie. Pero sin una comunidad, nadie se queda.\"",
      },
    ],
  },
  {
    slug: "nf-b1-dia-de-muertos",
    level: "B1",
    genre: "Culture",
    title: "El Día de Muertos: una fiesta para recordar",
    subtitle:
      "Altars, marigolds and sugar skulls: what Mexico's Day of the Dead celebrates and where its traditions come from.",
    paragraphs: [
      "Cada año, el 1 y el 2 de noviembre, millones de familias mexicanas celebran el Día de Muertos. Aunque el nombre pueda parecer triste, no es una fiesta de luto: es una celebración alegre para recordar a los familiares y amigos que han muerto.",
      "La tradición mezcla creencias de los pueblos indígenas de México, como los mexicas, con las fiestas católicas de Todos los Santos y de los Fieles Difuntos que llegaron con los españoles. Según la creencia popular, esos días las almas de los muertos vuelven para visitar a sus familias.",
      "Para recibirlas, las familias preparan un altar en casa. En él ponen fotos de sus seres queridos, velas, agua, comida y las cosas que más les gustaban en vida: un plato de mole, una cerveza, unos cigarros o una canción. Las flores de cempasúchil, de un naranja intenso, marcan con su color y su olor el camino de las almas.",
      "En el altar no puede faltar el pan de muerto, un pan dulce y redondo decorado con formas que representan huesos. También son muy típicas las calaveras de azúcar o de chocolate, que muchas veces llevan escrito el nombre de una persona viva, como una broma cariñosa.",
      "En muchos lugares, las familias pasan la noche en el cementerio. Limpian y decoran las tumbas, comen, cantan y cuentan historias de los difuntos. En pueblos como los de la región del lago de Pátzcuaro, en Michoacán, las velas encendidas sobre las tumbas crean un paisaje impresionante.",
      "En 2008, la UNESCO incluyó la fiesta en su lista del Patrimonio Cultural Inmaterial de la Humanidad. Hoy, gracias al cine y a las redes sociales, el Día de Muertos es conocido en todo el mundo. Pero para los mexicanos sigue siendo, sobre todo, una forma de decir que la muerte no significa el olvido.",
    ],
    questions: [
      {
        question: "What is the Day of the Dead?",
        options: ["A day of mourning", "A happy celebration to remember loved ones who have died", "A Halloween party", "A religious fast"],
        correctIndex: 1,
        explanation:
          "\"No es una fiesta de luto: es una celebración alegre para recordar a los familiares y amigos que han muerto.\"",
      },
      {
        question: "What two traditions does it combine?",
        options: ["Spanish and French", "Indigenous Mexican beliefs and Catholic feasts brought by the Spanish", "Mayan and Inca", "Christmas and Easter"],
        correctIndex: 1,
        explanation:
          "\"La tradición mezcla creencias de los pueblos indígenas de México... con las fiestas católicas.\"",
      },
      {
        question: "What is the role of the cempasúchil flowers?",
        options: ["They are eaten", "Their color and smell mark the path for the souls", "They decorate the bread", "They are a gift to children"],
        correctIndex: 1,
        explanation:
          "\"Marcan con su color y su olor el camino de las almas.\"",
      },
      {
        question: "What is often written on sugar skulls?",
        options: ["A prayer", "The name of a living person, as an affectionate joke", "The date", "Nothing"],
        correctIndex: 1,
        explanation:
          "\"Muchas veces llevan escrito el nombre de una persona viva, como una broma cariñosa.\"",
      },
    ],
  },
  {
    slug: "nf-b1-machu-picchu",
    level: "B1",
    genre: "History",
    title: "Machu Picchu, la ciudad escondida de los incas",
    subtitle:
      "How a fifteenth-century Inca estate high in the Andes survived the Spanish conquest and became one of the most visited places in South America.",
    paragraphs: [
      "Machu Picchu está en Perú, a unos dos mil cuatrocientos metros de altura, sobre una montaña rodeada de valles profundos y del río Urubamba. Hoy es uno de los lugares más visitados de América del Sur, pero durante siglos casi nadie fuera de la región sabía que existía.",
      "Los historiadores creen que fue construida a mediados del siglo XV por orden del emperador inca Pachacútec, probablemente como residencia para él y su corte. Tenía templos, casas, plazas y terrazas para cultivar maíz y patatas en la ladera de la montaña.",
      "Lo más impresionante es su arquitectura. Los incas cortaban las piedras con tanta precisión que encajaban sin cemento: entre muchas de ellas no cabe ni una hoja de papel. Además, como la región tiene muchos terremotos, los muros se construyeron ligeramente inclinados, y gracias a eso siguen en pie después de más de quinientos años.",
      "Machu Picchu fue abandonada pocas décadas después de su construcción, más o menos en la época de la llegada de los españoles. Los conquistadores nunca la encontraron, y por eso no fue destruida como otras ciudades incas.",
      "Los campesinos de la zona siempre la conocieron, pero el mundo la descubrió en 1911, cuando el explorador estadounidense Hiram Bingham llegó a las ruinas guiado por un agricultor local. Sus fotografías, publicadas en una revista, la hicieron famosa.",
      "Hoy el número de visitantes está limitado para proteger el lugar. Muchos llegan en tren desde Cusco, y otros recorren durante cuatro días el antiguo Camino Inca. Todos coinciden en algo: ver aparecer la ciudad entre la niebla de la mañana es una experiencia inolvidable.",
    ],
    questions: [
      {
        question: "Who ordered Machu Picchu to be built?",
        options: ["Hiram Bingham", "The Inca emperor Pachacútec", "The Spanish conquistadors", "A local farmer"],
        correctIndex: 1,
        explanation:
          "\"Fue construida... por orden del emperador inca Pachacútec.\"",
      },
      {
        question: "Why are the walls slightly inclined?",
        options: ["For decoration", "Because the region has many earthquakes", "To collect rain", "By mistake"],
        correctIndex: 1,
        explanation:
          "\"Como la región tiene muchos terremotos, los muros se construyeron ligeramente inclinados.\"",
      },
      {
        question: "Why wasn't it destroyed by the Spanish?",
        options: ["It was protected by soldiers", "The conquistadors never found it", "It was too big", "The Incas hid it under the forest"],
        correctIndex: 1,
        explanation:
          "\"Los conquistadores nunca la encontraron, y por eso no fue destruida.\"",
      },
      {
        question: "How did Hiram Bingham reach the ruins in 1911?",
        options: ["By plane", "Guided by a local farmer", "On a train from Cusco", "Following a map"],
        correctIndex: 1,
        explanation:
          "\"Llegó a las ruinas guiado por un agricultor local.\"",
      },
    ],
  },
  {
    slug: "nf-b1-pulpos",
    level: "B1",
    genre: "Science",
    title: "El pulpo, una inteligencia muy diferente",
    subtitle:
      "Three hearts, blue blood and a brain spread through its arms: why scientists find octopuses so fascinating.",
    paragraphs: [
      "Si buscamos un animal inteligente, solemos pensar en perros, delfines o chimpancés. Pero uno de los animales más sorprendentes del planeta no tiene huesos, vive pocos años y está más cerca de un caracol que de nosotros: el pulpo.",
      "Su cuerpo es muy diferente al nuestro. Tiene tres corazones: dos bombean la sangre hacia las branquias y el tercero la envía al resto del cuerpo. Su sangre es azul, porque transporta el oxígeno con cobre y no con hierro, como la nuestra.",
      "Lo más extraño es su sistema nervioso. Un pulpo tiene unos quinientos millones de neuronas, una cifra parecida a la de un perro. Pero la mayoría no está en el cerebro, sino en los brazos. Cada brazo puede tocar, saborear y tomar pequeñas decisiones por sí mismo.",
      "En los laboratorios, los pulpos han demostrado que saben abrir frascos, resolver laberintos y reconocer a las personas. Algunos han escapado de sus acuarios por la noche para comer en el tanque de al lado y después han vuelto a su sitio. En el mar, ciertas especies usan cáscaras de coco como refugio portátil.",
      "También son maestros del camuflaje. Su piel tiene miles de células que cambian de color en una fracción de segundo, y algunos pueden cambiar incluso la textura para parecer una roca o un alga.",
      "Sin embargo, viven muy poco: la mayoría de las especies solo uno o dos años. Por eso los científicos se preguntan cómo un animal con una vida tan corta y casi sin contacto social ha desarrollado una inteligencia así. Estudiar al pulpo, dicen, es lo más parecido a conocer una mente de otro planeta.",
    ],
    questions: [
      {
        question: "Why is an octopus's blood blue?",
        options: ["Because of the cold water", "It carries oxygen with copper instead of iron", "Because it has three hearts", "Because of what it eats"],
        correctIndex: 1,
        explanation:
          "\"Transporta el oxígeno con cobre y no con hierro.\"",
      },
      {
        question: "Where are most of an octopus's neurons?",
        options: ["In its brain", "In its arms", "In its hearts", "In its skin"],
        correctIndex: 1,
        explanation:
          "\"La mayoría no está en el cerebro, sino en los brazos.\"",
      },
      {
        question: "What have some octopuses done in laboratories?",
        options: ["Spoken to people", "Escaped at night to eat in the next tank and then returned", "Built nests", "Learned to swim faster"],
        correctIndex: 1,
        explanation:
          "\"Algunos han escapado de sus acuarios por la noche para comer en el tanque de al lado y después han vuelto a su sitio.\"",
      },
      {
        question: "What puzzles scientists?",
        options: ["Why octopuses live so long", "How such a short-lived, mostly solitary animal became so intelligent", "Why they are blue", "How they swim"],
        correctIndex: 1,
        explanation:
          "\"Cómo un animal con una vida tan corta y casi sin contacto social ha desarrollado una inteligencia así.\"",
      },
    ],
  },
  {
    slug: "nf-b1-correo-profesional",
    level: "B1",
    genre: "Workplace",
    title: "Cómo escribir un correo profesional en español",
    subtitle:
      "Greetings, sign-offs and the tone that works in a work email in Spanish, with the most common mistakes English speakers make.",
    paragraphs: [
      "Escribir un correo de trabajo en otro idioma da miedo: no sabemos si sonamos demasiado formales o, al contrario, demasiado directos. En español hay algunas fórmulas que facilitan mucho la tarea.",
      "Para empezar, el saludo. Si no conoces a la persona o la situación es formal, usa «Estimado señor García:» o «Estimada Sra. López:». Fíjate en que en español el saludo termina con dos puntos, no con coma. Si ya tenéis confianza, basta con «Hola, Marta:» o simplemente «Buenos días:».",
      "Después del saludo, conviene explicar enseguida el motivo del correo. Frases como «Le escribo para…», «Me pongo en contacto con usted para…» o, en un tono más cercano, «Te escribo porque…» ayudan al lector a saber qué esperar.",
      "Cuando pides algo, el condicional suaviza la petición: «¿Podría enviarme el informe antes del viernes?» suena más amable que «Envíeme el informe». También es muy común usar «le agradecería que» seguido de subjuntivo: «Le agradecería que me confirmara la fecha».",
      "Para despedirte, las fórmulas más habituales son «Un saludo» o «Saludos cordiales» en un tono neutro, y «Atentamente» en uno muy formal. Entre compañeros, basta con «Un abrazo» o incluso «Gracias». Evita «Sinceramente», que es una traducción directa del inglés y no se usa así en español.",
      "Por último, cuidado con el «tú» y el «usted». En España, muchos correos de trabajo usan el tú desde el principio; en buena parte de América Latina, el usted es más frecuente. Si dudas, sigue el ejemplo de la otra persona: contesta con la misma forma que ella use contigo.",
    ],
    questions: [
      {
        question: "What punctuation follows the greeting in a Spanish email?",
        options: ["A comma", "A colon", "A full stop", "Nothing"],
        correctIndex: 1,
        explanation:
          "\"En español el saludo termina con dos puntos, no con coma.\"",
      },
      {
        question: "How does the text suggest softening a request?",
        options: ["Using the imperative", "Using the conditional, e.g. ¿Podría…?", "Writing in capitals", "Adding \"por favor\" three times"],
        correctIndex: 1,
        explanation:
          "\"El condicional suaviza la petición.\"",
      },
      {
        question: "Which sign-off should you avoid?",
        options: ["Un saludo", "Atentamente", "Sinceramente", "Un abrazo"],
        correctIndex: 2,
        explanation:
          "\"Evita «Sinceramente», que es una traducción directa del inglés.\"",
      },
      {
        question: "What should you do if unsure about tú or usted?",
        options: ["Always use usted", "Use the same form the other person uses with you", "Always use tú", "Avoid pronouns"],
        correctIndex: 1,
        explanation:
          "\"Contesta con la misma forma que ella use contigo.\"",
      },
    ],
  },
  {
    slug: "nf-b1-ir-al-medico",
    level: "B1",
    genre: "Practical guide",
    title: "Ir al médico en España: guía rápida",
    subtitle:
      "The health card, your family doctor, the health centre and A&E: how the Spanish public health system works for a newcomer.",
    paragraphs: [
      "España tiene un sistema de salud público y universal, y la mayoría de los servicios son gratuitos para las personas que trabajan, cotizan a la Seguridad Social o están empadronadas y cumplen ciertos requisitos. Si acabas de llegar, estos son los pasos básicos.",
      "Lo primero es conseguir la tarjeta sanitaria. Se pide en el centro de salud de tu barrio, normalmente con tu documento de identidad, el certificado de empadronamiento y el número de la Seguridad Social. Cada comunidad autónoma tiene su propia tarjeta, porque la sanidad está gestionada por las regiones.",
      "Con la tarjeta te asignan un médico de cabecera, o médico de familia. Es la persona a la que tienes que ir primero para casi todo: un resfriado, un dolor de espalda o una receta. Si necesitas un especialista, como un dermatólogo o un cardiólogo, él te enviará.",
      "Para pedir cita, puedes llamar por teléfono, usar la aplicación de tu comunidad o ir al centro en persona. En algunos lugares la espera para el médico de cabecera es de pocos días, pero para algunos especialistas puede ser de varios meses.",
      "Si tienes un problema urgente pero no grave, por ejemplo fiebre alta un domingo, puedes ir al servicio de urgencias de atención primaria. Para emergencias de verdad, como un accidente o un dolor fuerte en el pecho, ve directamente a las urgencias del hospital o llama al 112.",
      "Los medicamentos con receta se compran en la farmacia, que se reconoce por una cruz verde. No son gratis, pero el sistema paga una parte del precio. Y si una farmacia está cerrada, en la puerta siempre hay una lista con las farmacias de guardia, que abren por la noche y los festivos.",
    ],
    questions: [
      {
        question: "Where do you apply for the health card?",
        options: ["At the hospital", "At your local health centre", "At a pharmacy", "Online only"],
        correctIndex: 1,
        explanation:
          "\"Se pide en el centro de salud de tu barrio.\"",
      },
      {
        question: "Who should you see first for most problems?",
        options: ["A specialist", "Your family doctor (médico de cabecera)", "The pharmacist", "Hospital A&E"],
        correctIndex: 1,
        explanation:
          "\"Es la persona a la que tienes que ir primero para casi todo.\"",
      },
      {
        question: "What number do you call in a real emergency?",
        options: ["911", "112", "091", "061"],
        correctIndex: 1,
        explanation:
          "\"Llama al 112.\"",
      },
      {
        question: "How can you find a pharmacy open at night?",
        options: ["Call 112", "A list of on-duty pharmacies is posted on every pharmacy door", "Go to the health centre", "Pharmacies never close"],
        correctIndex: 1,
        explanation:
          "\"En la puerta siempre hay una lista con las farmacias de guardia.\"",
      },
    ],
  },
  {
    slug: "nf-b1-elogio-del-aburrimiento",
    level: "B1",
    genre: "Opinion column",
    title: "En defensa del aburrimiento",
    subtitle:
      "An opinion column: a journalist argues that we have lost the habit of being bored, and that our ideas are paying the price.",
    paragraphs: [
      "La semana pasada se me olvidó el móvil en casa. Tuve que esperar veinte minutos al dentista sin nada que hacer. Al principio fue horrible: miré las paredes, leí dos veces un cartel sobre la higiene dental y conté las sillas de la sala. Luego pasó algo que no me pasaba desde hacía años: me aburrí. Y, poco a poco, empecé a pensar.",
      "Cuando yo era pequeño, el aburrimiento formaba parte de la vida. Los domingos por la tarde eran largos, los viajes en coche interminables y las salas de espera, eternas. No me gustaba, claro. Pero en esos ratos vacíos inventaba juegos, recordaba conversaciones o imaginaba historias.",
      "Hoy, en cambio, ya no nos aburrimos nunca. En cuanto tenemos treinta segundos libres, sacamos el teléfono: en la cola del supermercado, en el ascensor, incluso en el semáforo. Llenamos cada minuto con mensajes, vídeos y noticias que olvidamos enseguida.",
      "Algunos psicólogos dicen que eso tiene un coste. Cuando la mente no tiene estímulos externos, empieza a divagar, y es en ese estado cuando conectamos ideas que parecían no tener relación. Muchas personas cuentan que sus mejores ideas les llegan en la ducha. No creo que sea una casualidad: es uno de los pocos sitios donde todavía no usamos pantallas.",
      "No propongo que tiremos los móviles al mar. Yo tampoco podría vivir sin el mío. Pero sí me gustaría que recuperáramos un poco de ese tiempo vacío. Que esperemos el autobús mirando la calle. Que dejemos el teléfono en otra habitación durante una hora.",
      "Al salir del dentista, por cierto, ya tenía la idea para esta columna. No sé si es buena. Pero sé que no la habría tenido con el móvil en la mano.",
    ],
    questions: [
      {
        question: "What happened to the writer at the dentist?",
        options: ["He was in pain", "He forgot his phone and got bored, then started thinking", "He met an old friend", "He read a magazine"],
        correctIndex: 1,
        explanation:
          "\"Se me olvidó el móvil en casa... me aburrí. Y, poco a poco, empecé a pensar.\"",
      },
      {
        question: "According to some psychologists, what happens when the mind has no external stimuli?",
        options: ["It sleeps", "It wanders and connects unrelated ideas", "It gets anxious", "It stops working"],
        correctIndex: 1,
        explanation:
          "\"La mente... empieza a divagar, y es en ese estado cuando conectamos ideas.\"",
      },
      {
        question: "Why does he think people have good ideas in the shower?",
        options: ["Because of the hot water", "It's one of the few places without screens", "Because they're relaxed", "Because of the noise"],
        correctIndex: 1,
        explanation:
          "\"Es uno de los pocos sitios donde todavía no usamos pantallas.\"",
      },
      {
        question: "What does the writer propose?",
        options: ["Throwing phones into the sea", "Recovering some empty time, like leaving the phone in another room for an hour", "Banning phones in public", "Going to the dentist more often"],
        correctIndex: 1,
        explanation:
          "\"Me gustaría que recuperáramos un poco de ese tiempo vacío... Que dejemos el teléfono en otra habitación durante una hora.\"",
      },
    ],
  },
];
