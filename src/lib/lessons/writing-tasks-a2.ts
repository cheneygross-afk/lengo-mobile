// Synced from cheneygross-afk/lengo:src/lib/lessons/writing-tasks-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const A2_WRITING_TASKS: UnitWriting = {
  "preterite-regular-verbs-2": [
    {
      "type": "write",
      "prompt": "You're on a trip. Write a postcard to a friend about your first two days: when you arrived, what you visited, what you ate and what you bought.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Regular preterites in the yo and nosotros forms (llegué, visitamos…)",
        "Time expressions (el lunes, ayer, por la noche)",
        "Travel words (el hotel, visitar, los regalos…)",
        "A postcard greeting and closing"
      ],
      "modelAnswer": "¡Hola, Marta! Llegué a Granada el lunes por la tarde. Ese día descansé en el hotel y por la noche cené tapas con unos amigos. Ayer visitamos la Alhambra y caminamos por el Albaicín. Compré unos regalos para ti. ¡Me encantó todo! Un beso, Pablo",
      "explanation": "Yo forms end in -é (llegué, descansé, cené, compré) and nosotros forms in -amos (visitamos, caminamos), the same as the present: ayer tells you it's the past."
    }
  ],
  "a2d-speed-round-spelling-changes": [
    {
      "type": "write",
      "prompt": "You were very late to meet a friend at the cinema yesterday. Write a message to apologise and explain what happened, step by step.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "At least three -car/-gar/-zar yo forms (llegué, busqué, empecé, pagué…)",
        "Other regular preterites (salí, tomó…)",
        "An apology (lo siento, perdona…)",
        "Connectors (entonces, pero, al final)"
      ],
      "modelAnswer": "Lo siento mucho, Laura. Ayer salí tarde del trabajo y llegué a la estación a las ocho. Busqué mi tarjeta del metro, pero no apareció. Entonces pagué un taxi, pero el taxista tomó otra calle. Empecé a correr y al final llegué al cine a las nueve y media. ¿Me perdonas?",
      "explanation": "In the yo form, -gar, -car and -zar verbs change their spelling to keep the sound: llegué, busqué, empecé, pagué. The other forms are regular: tomó, apareció."
    }
  ],
  "preterite-irregular-verbs-2": [
    {
      "type": "write",
      "prompt": "You missed an important meeting at work yesterday. Write an email to a colleague: explain what happened to you and ask what happened at the meeting.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Tuve / pude / estuve for what happened to you",
        "At least two more irregular preterites (vino, hice, dijo…)",
        "A question about the meeting (¿Qué dijo…?, ¿Qué pasó?)",
        "An email greeting and closing"
      ],
      "modelAnswer": "Hola, Sergio: Te escribo por la reunión de ayer. Por la mañana tuve un problema con el coche y no pude llegar a tiempo. Vino un mecánico y estuve dos horas en la calle. Después hice el informe en casa. ¿Qué dijo la jefa? ¿Hubo alguna decisión importante? Gracias, Elena",
      "explanation": "Irregular preterites have their own stems and no accents: tuve, pude, estuve, vino, hice, dijo, hubo. Hubo is the past of hay."
    }
  ],
  "a2d-question-answer-irregulars": [
    {
      "type": "write",
      "prompt": "Write a dialogue between you and your mother the morning after a party. She asks who went, how you got there, what you did and when you came home.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Questions and answers in the right person (¿Fuiste? — Sí, fui…)",
        "At least four irregular preterites (fuimos, vinieron, puso, tuve…)",
        "Question words (¿quién?, ¿qué?, ¿a qué hora?)"
      ],
      "modelAnswer": "—¿Qué tal la fiesta? ¿Fuiste con Marcos? —Sí, fuimos juntos en metro. —¿Quién vino? —Vinieron todos mis compañeros. —¿Y qué hiciste? —Bailé mucho y Marcos puso música. —¿A qué hora volviste? —A la una. Tuve que esperar el último autobús.",
      "explanation": "Answer in the person the question needs: ¿Fuiste? → fuimos, ¿Qué hiciste? → bailé. Vinieron, puso and tuve are irregular; volver and bailar are regular."
    }
  ],
  "a2d-ser-ir-ver-imperfect": [
    {
      "type": "write",
      "prompt": "Write about a person who was important in your childhood: what they were like, where you used to go together and what you used to watch or see.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Era for what the person was like",
        "Iba / íbamos for places you used to go",
        "Veía / veíamos for what you used to watch",
        "Habitual time words (todos los veranos, siempre…)"
      ],
      "modelAnswer": "Mi abuela Rosa era una mujer alegre y muy trabajadora. Vivía en un pueblo cerca de Toledo. Todos los veranos yo iba a su casa con mis primos. Por las mañanas íbamos al mercado y por las tardes veíamos películas antiguas en la tele. Ella siempre era la primera en reírse.",
      "explanation": "Ser, ir and ver are the only irregular imperfects: era, iba, veía. Íbamos and veíamos carry an accent; every other verb follows -aba or -ía."
    }
  ],
  "a2d-describe-the-scene": [
    {
      "type": "write",
      "prompt": "Describe an old family photo: where you were, what the weather was like, how old you were, what people were wearing and what they were doing.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Hacía / había for the weather and the scene",
        "Tenía… años for age",
        "Imperfect for what people were doing (leía, dormía…)",
        "Llevaba for clothes"
      ],
      "modelAnswer": "En esta foto estamos en una playa de Málaga. Era agosto y hacía mucho calor. Yo tenía seis años y llevaba un sombrero enorme. Mi padre era muy delgado y tenía el pelo largo. Mi madre leía una revista y mi hermana dormía debajo de la sombrilla. Había mucha gente.",
      "explanation": "The imperfect paints the background: weather (hacía calor), age (tenía seis años), clothes (llevaba) and what was going on (leía, dormía). Había is the past of hay."
    }
  ],
  "a2d-interrupted-actions": [
    {
      "type": "write",
      "prompt": "Write an email to your landlord about the problems in your flat last week. For each problem, say what you were doing when it happened.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Estaba + gerund or the imperfect for the action in progress",
        "Cuando / mientras + the event in the preterite",
        "At least two different problems",
        "A formal greeting and a request (Estimado…, ¿Puede…?)"
      ],
      "modelAnswer": "Estimado señor Ruiz: Le escribo por los problemas del piso. El martes, mientras me duchaba, se acabó el agua caliente. El jueves estaba cocinando cuando se fue la luz. Y anoche, cuando dormía, empezó a caer agua del techo. ¿Puede enviar a alguien esta semana? Un saludo, Carmen López",
      "explanation": "The action in progress takes the imperfect (me duchaba, estaba cocinando, dormía) and the event that interrupts it the preterite (se acabó, se fue, empezó)."
    }
  ],
  "preterite-vs-imperfect-2": [
    {
      "type": "write",
      "prompt": "Write a short news report about a storm in your town yesterday: what the weather was like, what people were doing and what happened.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Imperfect for the weather and background (hacía, estaba, volvían)",
        "Preterite for the events (llegó, cayó, empezó)",
        "Weather words (la tormenta, el viento, la lluvia)",
        "When and where first, like a news report"
      ],
      "modelAnswer": "Ayer por la tarde una tormenta muy fuerte llegó a Valencia. El cielo estaba muy oscuro y hacía mucho viento. Muchas personas volvían del trabajo cuando empezó a llover. En el centro, un árbol cayó sobre dos coches, pero nadie resultó herido. La lluvia terminó a las nueve.",
      "explanation": "The imperfect sets the scene (estaba oscuro, hacía viento, volvían); the preterite moves the story forward (llegó, empezó, cayó, terminó)."
    }
  ],
  "a2-common-words-opinions": [
    {
      "type": "write",
      "prompt": "Your friend missed the last meeting of your book club. Write a message telling them what book you talked about, what people thought and whether you agree.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Opinion words (me parece, estar de acuerdo, supongo que, sin duda…)",
        "Preterite for what happened at the meeting",
        "Imperfect for how things were (había, estaba…)",
        "Your own opinion at the end"
      ],
      "modelAnswer": "¡Hola, Pilar! Ayer hablamos de la novela de Isabel Allende. Había mucha gente y el ambiente estaba muy animado. A Carlos le pareció aburrida, pero Elena dijo que era preciosa. Yo estoy de acuerdo con Elena: sin duda, es el mejor libro del año. Supongo que vas a leerlo pronto, ¿no?",
      "explanation": "Parecer works like gustar (a Carlos le pareció); estar de acuerdo con means to agree with; supongo que and sin duda show how sure you are. The imperfect describes the meeting (había, estaba), the preterite tells what happened."
    }
  ],
  "a2-common-words-praise-complaints": [
    {
      "type": "write",
      "prompt": "Write an online review of a hotel where you stayed: describe the room, say what went wrong one night and what the staff did, and give your final opinion.",
      "minWords": 25,
      "maxWords": 65,
      "rubric": [
        "Imperfect to describe the hotel (era, tenía…)",
        "Preterite for what happened (hubo, llamé…)",
        "Praise and complaint words (estupendo, impresionante, ridículo, aguantar…)",
        "A final recommendation"
      ],
      "modelAnswer": "Me quedé tres noches en el Hotel Sol. La habitación era estupenda y la vista era impresionante. Pero la segunda noche hubo una fiesta en el bar y no pude dormir. Llamé a recepción y nadie contestó. ¡Ridículo! No aguanté más y bajé a las dos. Al final el director me pidió perdón. Lo recomiendo, pero es mejor pedir una habitación tranquila.",
      "explanation": "Description in the imperfect (era estupenda), events in the preterite (hubo, llamé, bajé). Estupendo and impresionante praise; ridículo and no aguantar más complain."
    }
  ],
  "a2-perfect-irregular-participles": [
    {
      "type": "write",
      "prompt": "You're leaving for work. Write a note for your flatmate saying what you've done this morning and what has happened in the flat. Use at least four irregular participles.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "At least four irregular participles (hecho, puesto, abierto, roto, escrito, vuelto…)",
        "He / ha / han + participle",
        "Words for today (esta mañana, hoy)",
        "A note greeting and closing"
      ],
      "modelAnswer": "Hola, Sara: Esta mañana he hecho la compra y he puesto la leche en la nevera. He abierto las ventanas porque hace calor. ¡Cuidado! El gato ha roto un vaso en la cocina. He escrito el número del fontanero en un papel. Mamá ha vuelto de su viaje y ha dicho que viene a cenar. Besos, Ana",
      "explanation": "Hacer, poner, abrir, romper, escribir, volver and decir have irregular participles: hecho, puesto, abierto, roto, escrito, vuelto, dicho. Haber changes; the participle never does."
    }
  ],
  "a2-perfect-vs-preterite": [
    {
      "type": "write",
      "prompt": "Write a short email applying for a summer job at a youth hostel. Say what experience you have had and give two details from past jobs or studies with dates.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Present perfect for experience up to now (he trabajado…)",
        "Preterite with finished times (en 2023, el año pasado)",
        "At least one irregular participle (hecho, visto…)",
        "A formal greeting and closing"
      ],
      "modelAnswer": "Estimada señora Gil: Me llamo Tom y quiero trabajar en su albergue este verano. He trabajado en dos hoteles y he aprendido mucho. En 2023 trabajé seis meses en una recepción en Londres. Además, el año pasado viví en Madrid y estudié español. Este año he hecho un curso de primeros auxilios. Un saludo, Tom Baker",
      "explanation": "He trabajado and he hecho describe experience in a period that isn't over (este año); trabajé and viví go with finished times (en 2023, el año pasado)."
    }
  ],
  "a2d-me-te-nos-direct": [
    {
      "type": "write",
      "prompt": "Write an email to an old friend you haven't seen for years. Say who you are, that you're visiting their city and want to see them, and ask them to pick you up.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Me, te, nos as direct objects (¿me recuerdas?, te llamo…)",
        "A pronoun with an infinitive (verte, recogerme)",
        "Plans in the present or with ir a",
        "A friendly greeting and closing"
      ],
      "modelAnswer": "Querida Lucía: ¿Me recuerdas? Soy Marta, tu compañera de piso en Lyon. Voy a Bilbao en mayo y quiero verte. ¿Puedes recogerme en la estación? Mis padres vienen conmigo y te quieren conocer. Te llamo el domingo para hablar. ¡Te espero con muchas ganas! Un abrazo, Marta",
      "explanation": "Me, te and nos go before a conjugated verb (te llamo, te quieren conocer) or are attached to an infinitive (verte, recogerme)."
    }
  ],
  "direct-object-pronouns-2": [
    {
      "type": "write",
      "prompt": "Write a short dialogue in a clothes shop. You ask about a shirt and some shoes, try them, and decide what to buy. Use lo, la, los and las instead of repeating the nouns.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Lo, la, los, las that agree with the noun",
        "A pronoun attached to an infinitive (probarla, comprarlos…)",
        "Shopping words (la talla, el probador, en oferta…)",
        "Questions and answers between two people"
      ],
      "modelAnswer": "—Buenos días. ¿Tiene esta camisa en azul? —Sí, la tenemos en azul y en negro. —Quiero probarla. —Claro, el probador está al fondo. —Me queda bien. La compro. ¿Y estos zapatos? —Los tenemos en oferta. —¡Qué bien! Pues también los compro.",
      "explanation": "La replaces la camisa and los replaces los zapatos. The pronoun goes before a conjugated verb (la compro) or is attached to an infinitive (probarla)."
    }
  ],
  "indirect-object-pronouns-2": [
    {
      "type": "write",
      "prompt": "Your phone company sent you a wrong bill. Write a short email to complain: say what they sent you, what you did and what happened, and ask for an explanation.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Me, le, les with mandar, enviar, decir, contestar",
        "Preterite for what happened",
        "A polite request (¿Me pueden…?)",
        "A formal greeting and closing"
      ],
      "modelAnswer": "Buenos días: Les escribo porque el mes pasado me mandaron una factura incorrecta. Ayer les envié un correo, pero nadie me contestó. Mi hermano también llamó por teléfono y le dijeron que no había ningún problema. ¿Me pueden explicar la factura, por favor? Gracias. Daniel Ruiz",
      "explanation": "Indirect object pronouns say who receives the message: me mandaron, les envié, le dijeron. With a company you use les (ustedes)."
    }
  ],
  "a2d-gustar-family-drill": [
    {
      "type": "write",
      "prompt": "Write a short post for a travel forum about choosing holidays in your family: who likes what, what bothers or bores whom, and what you all like.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Gustar-type verbs (encantar, molestar, interesar, aburrir)",
        "Le / les with a + person to make it clear (a mi padre le…)",
        "The verb agreeing with what is liked (le gusta el mar, les gustan las playas)",
        "A question to the readers"
      ],
      "modelAnswer": "En mi familia elegir las vacaciones es complicado. A mi padre le encanta la montaña, pero a mi madre le molesta el frío. A mis hermanos les gustan las playas con mucha gente, y a mí me aburren. A todos nos interesa la comida, así que siempre elegimos un sitio con buenos restaurantes. ¿A ustedes les pasa lo mismo?",
      "explanation": "With gustar-type verbs the person goes in the indirect object (le, les, me, nos) and the verb agrees with the thing: le encanta la montaña, les gustan las playas."
    }
  ],
  "a2r-mission-yesterday-routine": [
    {
      "type": "write",
      "prompt": "Write the story of a morning when everything went wrong: when you woke up, what you did (or didn't do) and what happened when you arrived.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Reflexive verbs in the preterite (me desperté, me vestí…)",
        "One reflexive with an infinitive (ducharme)",
        "Imperfect for the background (había, era…)",
        "An ending"
      ],
      "modelAnswer": "Ayer fue un desastre. No oí la alarma y me desperté a las nueve. Me levanté muy rápido, pero no pude ducharme porque no había agua caliente. Me lavé la cara, me vestí y salí corriendo. En la oficina me di cuenta de algo terrible: ¡llevaba dos zapatos diferentes! Todos mis compañeros se rieron.",
      "explanation": "Reflexive verbs keep their pronoun in the past (me desperté, me vestí, se rieron), and with an infinitive it's attached at the end: ducharme."
    }
  ],
  "a2d-reflexive-infinitive-placement": [
    {
      "type": "write",
      "prompt": "A friend is waiting for you at a restaurant and you're late. Text them: say what you're doing right now and what you're going to do before you leave home.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Estoy + gerund with a reflexive pronoun (estoy duchándome / me estoy duchando)",
        "Voy a + reflexive infinitive in both positions (voy a secarme, me voy a poner)",
        "An apology",
        "When you'll arrive"
      ],
      "modelAnswer": "¡Perdona, Clara! Acabo de llegar a casa. Ahora estoy duchándome muy rápido. Después voy a secarme el pelo y me voy a poner el vestido nuevo. No me voy a maquillar mucho, lo prometo. Llego al restaurante a las nueve y cuarto. Puedes pedir algo para beber.",
      "explanation": "The reflexive pronoun can go before the whole phrase (me voy a poner) or be attached to the infinitive or gerund (voy a secarme, estoy duchándome). Attaching it to a gerund adds an accent."
    }
  ],
  "a2r-mission-comparing-apartments": [
    {
      "type": "write",
      "prompt": "You and your partner are choosing between two flats. Write them an email comparing size, price, location and light, and say which one you prefer.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Más / menos… que",
        "Tan… como or tanto… como",
        "A superlative (el más luminoso, el mejor…)",
        "Your choice with a reason"
      ],
      "modelAnswer": "Hola, Javi: He visto los dos pisos. El de la calle Sol es más grande que el del centro y tiene más luz, pero es menos céntrico. El del centro es tan caro como el otro y no tiene tantas habitaciones. Para mí, el de la calle Sol es el mejor y el más luminoso. ¿Lo alquilamos? Un beso, Elena",
      "explanation": "Más/menos… que compare two things; tan + adjective and tanto/a/os/as + noun make equal comparisons (tan caro como, tantas habitaciones). El mejor and el más luminoso single one out."
    }
  ],
  "a2d-irregular-comparatives": [
    {
      "type": "write",
      "prompt": "Describe yourself and a brother, sister or cousin: who is older, who is better or worse at things, and one way you're the same.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Mayor / menor for age",
        "Mejor / peor for skills",
        "Tan… como for one similarity",
        "Más / menos… que"
      ],
      "modelAnswer": "Mi hermana Laura es dos años mayor que yo. Ella es mucho más alta y cocina mejor que nadie en la familia. Yo soy peor en la cocina, pero juego al fútbol mejor que ella. Las dos somos tan desordenadas como nuestro padre. Laura es más seria que yo, pero es mi mejor amiga.",
      "explanation": "Mayor, menor, mejor and peor are the usual comparatives for age and quality (más joven is also fine; más viejo can sound blunt). Tan + adjective + como shows that two people are the same."
    }
  ],
  "a2r-mission-predictions": [
    {
      "type": "write",
      "prompt": "Write next week's horoscope for one star sign for a magazine: predict what will happen in love, at work and with money, and say what the weekend will bring.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "At least five verbs in the future (tendrás, conocerás, habrá…)",
        "At least two irregular future stems (tendr-, podr-, habr-, saldr-, har-…)",
        "Love, work and money",
        "Time words (el lunes, esta semana, el fin de semana)"
      ],
      "modelAnswer": "Leo: Esta semana será muy especial. En el amor, conocerás a una persona interesante el viernes. En el trabajo tendrás mucho que hacer, pero tu jefe valorará tu esfuerzo. Con el dinero, habrá una sorpresa: quizás recibirás un regalo inesperado. El fin de semana podrás descansar y saldrás con tus amigos.",
      "explanation": "The future adds -é, -ás, -á, -emos, -éis, -án to the whole infinitive (conocerás, valorará, recibirás). Some verbs have a special stem: tendr-, habr-, podr-, dir-."
    }
  ],
  "por-vs-para-2": [
    {
      "type": "write",
      "prompt": "You missed your Spanish class yesterday. Write a note to your teacher explaining why, what the doctor or dentist gave you, and ask about the homework.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Por for the cause (por un dolor de muelas…)",
        "Para for purpose (para una revisión) and a deadline (para el jueves)",
        "Por in a set phrase (por la mañana, gracias por…)",
        "A polite tone"
      ],
      "modelAnswer": "Hola, profesor: Ayer no fui a clase por un dolor de muelas muy fuerte. Por la mañana fui al dentista para una revisión. Me dio unas pastillas para el dolor y tengo que tomarlas cada ocho horas. ¿Tengo que hacer los ejercicios para el jueves? Gracias por su paciencia. Anna",
      "explanation": "Por gives the cause (por un dolor de muelas) and appears in set phrases (por la mañana, gracias por). Para gives the purpose (para una revisión, para el dolor) and a deadline (para el jueves)."
    }
  ],
  "a2d-minimal-pairs-por-para": [
    {
      "type": "write",
      "prompt": "Tell the story of a special present you bought for someone: who it was for, how much you paid, where you looked for it and why you did it.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Para for the person who receives it (para mi hermana)",
        "Por for the price (por cien euros)",
        "Por for the reason (por ella, por su trabajo)",
        "Para mí to give your opinion"
      ],
      "modelAnswer": "El mes pasado compré una guitarra para mi hermana. La compré por cien euros en una tienda de segunda mano. Busqué por todo el centro durante dos horas. Lo hice por ella, porque estaba triste por su trabajo. Cuando la vio, lloró de alegría. Para mí, fue el mejor regalo del año.",
      "explanation": "Para marks the receiver (para mi hermana) and an opinion (para mí). Por marks the price (por cien euros), movement through a place (por todo el centro) and the reason (por ella, por su trabajo)."
    }
  ],
  "a2-common-words-people": [
    {
      "type": "write",
      "prompt": "Tell the love story of two people you know (your grandparents, parents or friends): how they met, what they were like, and how their relationship has been.",
      "minWords": 25,
      "maxWords": 65,
      "rubric": [
        "Relationship words (el matrimonio, la relación, el amor, el corazón…)",
        "Preterite for the events (se conocieron, se casaron…)",
        "Imperfect to describe them (era, tenía…)",
        "Para mí to give your opinion"
      ],
      "modelAnswer": "Mis abuelos se conocieron en un baile en 1965. Mi abuelo era un muchacho tímido, pero mi abuela dice que tenía un corazón de oro. Él le escribía cartas todas las semanas. Se casaron dos años después y su matrimonio duró cincuenta años. Para mí, son el mejor ejemplo de amor: siempre tuvieron una relación muy bonita.",
      "explanation": "The preterite tells the milestones (se conocieron, se casaron, duró); the imperfect describes people and habits (era tímido, le escribía). Para mí introduces your opinion."
    }
  ],
  "a2r-spiral-pronouns-reflexives-por-para": [
    {
      "type": "write",
      "prompt": "Write a short opinion post for a forum: is it better to work for money or to do work you love? Give an example from your own life.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Por for the reason or exchange (por dinero, por el sueldo)",
        "Para for purpose or opinion (para vivir, para mí)",
        "A reflexive verb (me siento, me levanto…)",
        "A clear opinion (creo que…, para mí…)"
      ],
      "modelAnswer": "Muchas personas trabajan solo por dinero. Para mí, eso es un error. Yo trabajé tres años en un banco por el sueldo y me sentía fatal. Ahora trabajo para una ONG por mucho menos dinero, pero me levanto contento todos los días. Creo que trabajamos para vivir, y no vivimos para trabajar.",
      "explanation": "Por gives the reason or the exchange (por dinero, por el sueldo); para gives the purpose, the employer and the opinion (para vivir, para una ONG, para mí)."
    }
  ],
  "a2d-personal-a-sort": [
    {
      "type": "write",
      "prompt": "Your cat has disappeared. Write a notice for your building: describe the cat, say when you last saw it, and say you're also looking for someone to feed your other cats.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Personal a with a specific person or pet (busco a mi gato, vi a Bigotes)",
        "No a with someone non-specific (busco una persona…)",
        "A description of the pet",
        "Contact details"
      ],
      "modelAnswer": "¡Ayuda! Busco a mi gato, Bigotes. Es gris y blanco y tiene un collar rojo. Vi a Bigotes por última vez ayer por la tarde, en el jardín. ¿Alguien ha visto a mi gato? También busco una persona para cuidar a mis otros gatos este fin de semana. Vivo en el tercero B.",
      "explanation": "A specific person or pet takes a (busco a mi gato, vi a Bigotes, cuidar a mis gatos); someone you haven't found yet doesn't (busco una persona)."
    }
  ],
  "negation-words-2": [
    {
      "type": "write",
      "prompt": "Write a negative online review of a holiday flat. Say what was missing, what nobody did, and give your final verdict.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Ni… ni",
        "Tampoco",
        "Double negatives (no… nadie, no… nunca, no… ninguna)",
        "A final recommendation"
      ],
      "modelAnswer": "No recomiendo este apartamento. No había ni toallas ni sábanas, y la cocina tampoco tenía platos. No nos esperaba nadie en la entrada y nunca contestaron al teléfono. El anuncio decía que estaba cerca de la playa, pero no hay ninguna playa a menos de cinco kilómetros. ¡Nunca más!",
      "explanation": "Spanish needs no before the verb when the negative word comes after it: no nos esperaba nadie, no hay ninguna playa. Ni… ni joins two negatives, and tampoco means not… either."
    }
  ],
  "mente-adverbs-2": [
    {
      "type": "write",
      "prompt": "Describe your new flatmate: how they speak, cook, clean and get up. Use at least four -mente adverbs, and join two of them in one phrase once.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "At least four -mente adverbs (normalmente, perfectamente…)",
        "Two adverbs joined (lenta y tranquilamente)",
        "Feminine form + -mente (lentamente, perfectamente)",
        "One sentence with your opinion (sinceramente…)"
      ],
      "modelAnswer": "Mi nuevo compañero de piso, Leo, es un poco especial. Habla lenta y tranquilamente, pero cocina rapidísimo. Normalmente se levanta a las seis. Limpia la cocina perfectamente todos los días y, sinceramente, eso me encanta. Solo tiene un problema: canta constantemente en la ducha.",
      "explanation": "-Mente is added to the feminine form of the adjective (lenta → lentamente). When two adverbs go together, only the last one takes -mente: lenta y tranquilamente."
    }
  ],
  "asking-giving-directions-1": [
    {
      "type": "write",
      "prompt": "You're arriving late at night in a city you don't know. Write a short email to your hotel asking how to get there from the airport, how far it is and how long it takes.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "A polite request (¿Me pueden decir…?, ¿Podrían…?)",
        "Questions about distance and time (¿Está lejos?, ¿Cuánto se tarda?)",
        "How to get there (en autobús, en taxi…)",
        "A formal greeting and closing"
      ],
      "modelAnswer": "Estimados señores: Tengo una reserva en su hotel para el viernes 12. Llego al aeropuerto a las once de la noche. ¿Me pueden decir cómo llegar al hotel? ¿Hay un autobús a esa hora o es mejor tomar un taxi? ¿Está lejos del aeropuerto? ¿Cuánto se tarda? Muchas gracias. Un saludo, Mark Evans",
      "explanation": "¿Me pueden decir…? is a polite way to ask (ustedes, for a hotel). ¿Está lejos? and ¿Cuánto se tarda? are the set questions for distance and time."
    }
  ],
  "a2g-diminutives": [
    {
      "type": "write",
      "prompt": "Write a short letter to your grandmother about your new flat and a visit from your little sister. Use at least four diminutives.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "At least four diminutives (-ito, -ita, -cito)",
        "Abuelita or another affectionate form",
        "The preterite for what happened",
        "A warm closing (un besito…)"
      ],
      "modelAnswer": "Querida abuelita: ¿Cómo estás? Te escribo desde mi pisito nuevo. Es pequeñito, pero tiene una terracita llena de plantas. Ayer vino mi hermanita y tomamos un cafecito al sol. Hablamos mucho de ti. ¡Te echo de menos! Un besito muy grande. Tu nieta, Sofía",
      "explanation": "-Ito and -ita make things small or affectionate (abuelita, pisito, hermanita); words ending in -e or -n often take -cito (cafecito). Pequeño becomes pequeñito."
    }
  ],
  "a2g-hace-que-desde-hace": [
    {
      "type": "write",
      "prompt": "Write a profile for a language exchange website: where you live and since when, how long you've studied Spanish, when you arrived, and what you want to practise.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Hace… que + present",
        "Desde hace + time",
        "Hace + time with the preterite (ago)",
        "Present tense for something still going on"
      ],
      "modelAnswer": "¡Hola! Me llamo Kenji y soy de Osaka. Llegué a Valencia hace dos años por trabajo. Hace un año que estudio español en una academia, y desde hace tres meses voy a clases de conversación. Me gusta mucho hablar, pero todavía estoy muy nervioso al teléfono. ¡Busco a alguien para practicar!",
      "explanation": "Hace un año que estudio and voy desde hace tres meses describe something still going on (present tense); llegué hace dos años means ago (preterite)."
    }
  ],
  "a2s-hotel": [
    {
      "type": "write",
      "prompt": "Write a dialogue at a hotel reception: you check in with your booking, ask about breakfast and the wifi, and then report a problem with the room.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Tengo una reserva a nombre de…",
        "Questions about breakfast and wifi (¿A qué hora es…?, ¿Cuál es la contraseña?)",
        "A polite complaint (no funciona…, ¿podría…?)",
        "Usted forms with the receptionist"
      ],
      "modelAnswer": "—Buenas tardes. Tengo una reserva a nombre de Ana Ruiz. —Sí, habitación 305. —Gracias. ¿A qué hora es el desayuno? —De siete a diez. —¿Y cuál es la contraseña del wifi? —Está en la tarjeta. —Perdone, el aire acondicionado de la habitación no funciona. ¿Podría enviar a alguien? —Ahora mismo.",
      "explanation": "Tengo una reserva a nombre de… is the set phrase for checking in. Use usted with staff (perdone, ¿podría…?) and no funciona to report a problem politely."
    }
  ],
  "a2s-plans-invitations": [
    {
      "type": "write",
      "prompt": "Write a message to a friend inviting them to a concert on Saturday: say when and where to meet. Then turn down their plan for Sunday nicely and suggest another day.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "¿Te apetece…? or ¿Quieres…? to invite",
        "Quedar + time and place",
        "Saying no nicely (lo siento, no puedo…, me encantaría, pero…)",
        "Suggesting another day (¿Qué tal el…?)"
      ],
      "modelAnswer": "¡Hola, Nuria! ¿Te apetece ir al concierto de jazz el sábado? Empieza a las nueve en la plaza Mayor. Podemos quedar a las ocho y media en la puerta del bar Sol y tomar algo antes. Lo del domingo me encantaría, pero ese día no puedo: tengo que trabajar. ¿Qué tal el martes? ¡Dime algo!",
      "explanation": "¿Te apetece…? invites, quedar fixes the time and place, and me encantaría, pero no puedo says no nicely before you suggest another day (¿Qué tal el martes?)."
    }
  ],
  "a2r-word-web-tech": [
    {
      "type": "write",
      "prompt": "Your grandmother wants to send you photos from her new phone. Write her a short note explaining how, step by step.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Tú commands (abre, toca, busca…)",
        "Tech words (la aplicación, descargar, enviar, la pantalla…)",
        "Sequence words (primero, después, luego, al final)",
        "A pronoun attached to a command (envíala, llámame…)"
      ],
      "modelAnswer": "Abuela, es muy fácil. Primero, abre la aplicación de mensajes y busca mi nombre. Después, toca el clip en la parte de abajo de la pantalla. Luego, elige la foto y envíala con la flecha verde. Si tienes poca batería, carga el móvil antes. Al final, llámame y te digo si la he recibido.",
      "explanation": "Affirmative tú commands look like the él form of the present (abre, busca, toca, carga). Pronouns are attached to them: envíala, llámame."
    }
  ],
  "a2d-timeline-biography": [
    {
      "type": "write",
      "prompt": "Write a short biography of a famous person you admire: where and when they were born, what they were like as a child, and the main events of their life.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Preterite for milestones (nació, tuvo, se casó, murió)",
        "Imperfect for description and childhood (era, quería…)",
        "Dates (en 1907, en 1929…)",
        "One sentence about why they're famous today"
      ],
      "modelAnswer": "Frida Kahlo nació en Coyoacán, México, en 1907. De niña era muy curiosa y quería ser médica. En 1925 tuvo un terrible accidente de autobús y pasó meses en la cama. Allí empezó a pintar. En 1929 se casó con el pintor Diego Rivera. Sus cuadros eran muy personales y hoy son famosos en todo el mundo.",
      "explanation": "In a biography the preterite marks the milestones (nació, tuvo, empezó, se casó) and the imperfect describes the person (era curiosa, quería ser médica)."
    }
  ],
  "a2d-se-lo-pattern": [
    {
      "type": "write",
      "prompt": "Write about the presents you gave your family last Christmas: what you bought for each person and how you gave it to them. Avoid repeating the presents.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Se lo / se la / se los / se las (never le lo)",
        "Preterite verbs of giving (di, envié, llevé, compré)",
        "A + person to make clear who received it",
        "At least three different people"
      ],
      "modelAnswer": "El año pasado compré un libro de cocina para mi madre y se lo di en Nochebuena. A mi padre le regalé una bufanda y se la envié por correo, porque vive en Chile. Mis sobrinos querían unos videojuegos, así que se los compré en internet. Y para mi abuela hice unas galletas: se las llevé el día 25.",
      "explanation": "Le and les become se before lo, la, los, las: se lo di (a mi madre), se la envié (a mi padre). The second pronoun agrees with the thing: se las llevé (las galletas)."
    }
  ],
  "a2-double-pronouns-infinitive-command": [
    {
      "type": "write",
      "prompt": "You're going out and a babysitter is looking after your two children. Write a note with instructions about dinner, pyjamas and a story. Use commands with two pronouns.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "At least three commands with two pronouns (pónselo, léeselo…)",
        "Accents on the stressed syllable when pronouns are added",
        "Clear instructions for each child",
        "A friendly opening and closing"
      ],
      "modelAnswer": "Hola, Marta: Gracias por quedarte con los niños. La cena está en la nevera: caliéntasela a las siete. Lucas quiere su pijama azul; pónselo después del baño. Ana tiene un libro nuevo; léeselo antes de dormir, por favor. Si te piden chocolate, diles que no. ¡Llámame si necesitas algo! Carmen",
      "explanation": "With an affirmative command both pronouns attach in order (person, then thing) and the stressed vowel takes an accent: caliéntasela, pónselo, léeselo. Le/les become se."
    }
  ],
  "a2d-cumulative-circuit-2": [
    {
      "type": "write",
      "prompt": "Your Spanish class is choosing a place for an end-of-course trip. Write a proposal: compare two places, say what you'll do there and what it will cost.",
      "minWords": 25,
      "maxWords": 65,
      "rubric": [
        "Comparisons (más… que, tan… como, el mejor)",
        "The future for the plan (saldremos, visitaremos…)",
        "Por and para (por la mañana, por persona, para…)",
        "A clear proposal (Propongo…)"
      ],
      "modelAnswer": "Propongo ir a Toledo en vez de a Segovia. Toledo es más grande y tiene más museos que Segovia, y está tan cerca de Madrid como Segovia. Saldremos el sábado por la mañana y volveremos por la noche. Pasearemos por el casco antiguo y probaremos el mazapán. La entrada a la catedral cuesta unos doce euros por persona. ¡Será el mejor día del curso!",
      "explanation": "Comparisons weigh the options (más museos que, tan cerca como), the future describes the plan (saldremos, pasearemos, será), and por appears in time and price phrases (por la mañana, por persona)."
    }
  ],
  "a2d-say-it-yourself-introduce": [
    {
      "type": "write",
      "prompt": "It's the last day of your Spanish course. Write a short speech for your class: how your life was when you arrived, what you've done since, and your plans for the future.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Imperfect for how things were (no hablaba, no conocía…)",
        "Preterite for a past event (llegué, fueron…)",
        "Present perfect for what you've done (he aprendido…)",
        "The future for your plans (viviré, trabajaré…)"
      ],
      "modelAnswer": "Queridos compañeros: Hace un año, cuando llegué a Madrid, no hablaba nada de español y no conocía a nadie. Las primeras semanas fueron difíciles. Ahora tengo muchos amigos y he aprendido muchísimo. El año que viene viviré en Bogotá y trabajaré en un colegio. ¡Muchas gracias a todos por este año!",
      "explanation": "Each tense has its job: the imperfect for how things were (no hablaba), the preterite for an event (llegué), the present perfect for what you've achieved up to now (he aprendido) and the future for plans (viviré)."
    }
  ],
  "a2d-cumulative-circuit-5": [
    {
      "type": "write",
      "prompt": "Describe a relative or friend as they were as a child and as they are today. Compare the two and say how they do things now.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Imperfect for the past description (era, hablaba…)",
        "Present with ser and estar for today",
        "A comparison (más… que antes)",
        "A -mente adverb"
      ],
      "modelAnswer": "Mi primo Javier era un niño muy tímido. Hablaba poco y siempre estaba leyendo en su habitación. Era más bajo que todos sus compañeros. Hoy es un hombre alto y seguro. Es profesor de teatro y habla tranquilamente delante de cien personas. Ahora es mucho más simpático que antes, aunque todavía le encantan los libros.",
      "explanation": "The imperfect describes how he was (era tímido, hablaba poco); the present describes him today (es alto, habla tranquilamente). Más… que antes compares then and now."
    }
  ],
  "a2r-challenge-story-chain": [
    {
      "type": "write",
      "prompt": "Write a short story that begins: «Era medianoche y el último tren no llegaba…». Set the scene and say what happened next.",
      "minWords": 25,
      "maxWords": 65,
      "rubric": [
        "Imperfect for the scene (era, no había, miraba…)",
        "Preterite for the events (se levantó, empezó, seguí…)",
        "A signal word for a sudden event (de repente)",
        "An ending"
      ],
      "modelAnswer": "Era medianoche y el último tren no llegaba. En la estación no había nadie, solo un perro viejo que me miraba. De repente, el perro se levantó y empezó a caminar hacia la salida. Lo seguí por una calle oscura hasta una pequeña cafetería. Allí estaba el conductor del tren, tomando un café tranquilamente. ¡Nunca olvidaré esa noche!",
      "explanation": "The imperfect sets the scene (era, no llegaba, había, miraba); de repente introduces the events in the preterite (se levantó, empezó, seguí)."
    }
  ]
};
