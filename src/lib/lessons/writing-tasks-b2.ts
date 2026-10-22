// Synced from cheneygross-afk/lengo:src/lib/lessons/writing-tasks-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const B2_WRITING_TASKS: UnitWriting = {
  "b2d-circuito-no-hay-nadie-que": [
    {
      "type": "write",
      "prompt": "Llevas una semana viviendo en una ciudad nueva donde todavía no conoces a nadie. Escribe una entrada de diario sobre lo que echas de menos y lo que aún no has encontrado, con oraciones de relativo negativas.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "No hay nadie que / no conozco a nadie que + subjuntivo",
        "No hay nada / ningún sitio que + subjuntivo",
        "Al menos un relativo en indicativo para algo que sí existe",
        "Un deseo o plan final (espero encontrar algo que…)"
      ],
      "modelAnswer": "Domingo, 12 de octubre. Llevo siete días en Bilbao y todavía no conozco a nadie que me invite a un café. En el trabajo no hay nadie que hable de algo que no sea el fútbol. Tampoco he encontrado ningún sitio que abra los domingos por la mañana, ni una panadería que haga el pan como en mi pueblo. Por suerte, el piso tiene una terraza que me encanta. Espero encontrar pronto un grupo de senderismo que salga los fines de semana. Mañana será otro día.",
      "explanation": "Con un antecedente negado (no hay nadie que, ningún sitio que), el relativo va en subjuntivo: no hay nadie que hable. Lo que sí existe va en indicativo: una terraza que me encanta."
    }
  ],
  "b2d-preguntas-hay-alguien": [
    {
      "type": "write",
      "prompt": "Escribe un mensaje para el grupo de vecinos de tu edificio. La semana que viene necesitas varias cosas (alguien que cuide a tu perro, una escalera, un buen fontanero) y preguntas si alguien puede ayudarte.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "¿Hay alguien que…? / ¿Conocéis a alguien que…? + subjuntivo",
        "¿Alguien tiene algo que…? + subjuntivo",
        "Una oración con antecedente conocido en indicativo",
        "Fórmulas de cortesía de un mensaje a vecinos"
      ],
      "modelAnswer": "¡Hola, vecinos! Soy Marta, del tercero B. La semana que viene me voy de viaje y necesito ayuda. ¿Hay alguien que pueda sacar a mi perro dos veces al día? Pagaría, claro. ¿Alguno tiene una escalera que llegue al techo del salón? Solo la necesito una tarde. Por último, ¿conocéis a algún fontanero que sea serio y que no cobre una fortuna? El que vino el mes pasado me dejó el grifo peor de lo que estaba. ¡Muchas gracias de antemano!",
      "explanation": "En las preguntas sobre algo que no sabemos si existe, el relativo va en subjuntivo: ¿hay alguien que pueda…?, ¿conocéis a algún fontanero que sea…? El fontanero que ya conocemos va en indicativo: el que vino."
    }
  ],
  "b2d-cuento-galeria": [
    {
      "type": "write",
      "prompt": "Escribe un relato breve, en presente, sobre una coleccionista que recorre la ciudad buscando un objeto muy especial. Cuenta qué busca, qué encuentra en las tiendas y cómo acaba la historia.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Busca un/una… que + subjuntivo",
        "Relativas en indicativo para lo que sí encuentra",
        "No hay nada / ninguno que + subjuntivo",
        "Un final con el objeto encontrado (encuentra uno que…)"
      ],
      "modelAnswer": "Elena colecciona relojes antiguos. Esta mañana sale de casa porque busca un reloj que tenga más de cien años y que todavía funcione. En la primera tienda le enseñan uno que es precioso, pero que no da la hora. En el mercado hay un vendedor que tiene cientos de relojes, aunque ninguno que sea tan viejo. «No hay nada en esta ciudad que me sirva», piensa. Al final, en una tienda pequeña que nunca había visto, encuentra un reloj de bolsillo que funciona perfectamente. Elena sonríe: es justo lo que buscaba.",
      "explanation": "Lo que Elena busca y no sabe si existe va en subjuntivo (un reloj que tenga…); lo que ve en las tiendas, en indicativo (uno que es precioso). Con negación vuelve el subjuntivo: no hay nada que me sirva."
    }
  ],
  "b2d-habla-de-ti-pareja-ideal": [
    {
      "type": "write",
      "prompt": "Un foro de viajeros pregunta: «¿Cómo es tu ciudad ideal?». Escribe tu respuesta comparando la ciudad donde vives con la ciudad con la que sueñas.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Busco / quiero una ciudad que + subjuntivo",
        "Relativas en indicativo para tu ciudad real",
        "Una relativa con donde o en el que + subjuntivo",
        "Un conector de contraste (en cambio, sin embargo)"
      ],
      "modelAnswer": "Vivo en Madrid, una ciudad que tiene muchísima vida pero que es demasiado ruidosa. Mi ciudad ideal, en cambio, es una ciudad que esté cerca del mar y que no sea muy grande. Quiero un lugar donde se pueda ir en bici a todas partes y en el que los alquileres no cuesten medio sueldo. Busco también un barrio que tenga mercado, librerías y bares donde la gente se conozca. Sin embargo, no quiero renunciar a los teatros que hay en Madrid. ¿Existe una ciudad que lo tenga todo?",
      "explanation": "La ciudad ideal todavía no existe, así que sus relativas van en subjuntivo (una ciudad que esté cerca del mar, un lugar donde se pueda…). Madrid es real: indicativo (una ciudad que tiene, los teatros que hay)."
    }
  ],
  "b2d-circuito-conjunciones-temporales": [
    {
      "type": "write",
      "prompt": "Te vas de vacaciones y una amiga va a cuidar tu casa y tu gato. Escríbele una nota con instrucciones usando conjunciones temporales con subjuntivo.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "En cuanto / tan pronto como + subjuntivo",
        "Hasta que + subjuntivo",
        "Después de que + subjuntivo",
        "Imperativos para las instrucciones"
      ],
      "modelAnswer": "¡Hola, Sara! Gracias por quedarte con Misi. Tan pronto como entres, apaga la alarma con el código que te mandé. En cuanto llegues, dale de comer: la comida está en el armario de la cocina. No abras la ventana del salón hasta que el gato esté dentro, porque se escapa. Después de que pase el cartero, recoge las cartas del buzón, por favor. Cuando te vayas, cierra con las dos llaves. Volveré el domingo por la noche. ¡Un abrazo!",
      "explanation": "En cuanto, tan pronto como, hasta que y después de que funcionan como cuando: si la acción es futura, llevan subjuntivo (en cuanto llegues, hasta que el gato esté dentro)."
    }
  ],
  "b2d-pares-aunque": [
    {
      "type": "write",
      "prompt": "Eres el capitán o la capitana de tu equipo y mañana jugáis la final. Escribe un breve discurso para animar a tus compañeros, usando aunque con indicativo y con subjuntivo.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Aunque + indicativo para un hecho que conocéis",
        "Aunque + subjuntivo para una posibilidad",
        "Para que + subjuntivo",
        "Cuando + subjuntivo para el futuro"
      ],
      "modelAnswer": "Compañeros, mañana es el día. Aunque el otro equipo es favorito, nosotros hemos entrenado más que nadie esta temporada. Aunque llueva, aunque el campo esté lleno de barro, vamos a jugar como siempre. Aunque perdamos, quiero que salgamos del campo con la cabeza alta. Os pido una cosa: hablad mucho entre vosotros para que nadie se sienta solo. Y cuando suene el pitido final, pase lo que pase, lo celebraremos juntos. ¡Vamos a por ello!",
      "explanation": "Aunque + indicativo presenta un hecho que admitimos (aunque el otro equipo es favorito); aunque + subjuntivo, una posibilidad que no cambia nada (aunque llueva, aunque perdamos)."
    }
  ],
  "b2d-cuento-debate-ley": [
    {
      "type": "write",
      "prompt": "El Gobierno prepara una nueva ley de vivienda. Escribe una carta al director de un periódico explicando para qué debería servir la ley y qué esperas que ocurra cuando entre en vigor.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Para + infinitivo y para que + subjuntivo",
        "Cuando + subjuntivo para el futuro",
        "Antes de que + subjuntivo",
        "Registro formal (Señor director…, Atentamente)"
      ],
      "modelAnswer": "Señor director: Le escribo para dar mi opinión sobre la nueva ley de vivienda. Creo que debería servir para que los jóvenes puedan independizarse antes de los treinta años. Para conseguirlo, es necesario limitar los precios en las zonas más caras. Cuando la ley entre en vigor, espero que los alquileres dejen de subir cada año. Sin embargo, conviene aprobarla pronto, antes de que más familias tengan que abandonar sus barrios. Ojalá los diputados lleguen a un acuerdo. Atentamente, Luis Herrera.",
      "explanation": "Mismo sujeto: para + infinitivo (para dar mi opinión). Sujeto distinto: para que + subjuntivo (para que los jóvenes puedan). Cuando y antes de que llevan subjuntivo porque hablan del futuro."
    }
  ],
  "b2d-preguntas-cuando-vas-a": [
    {
      "type": "write",
      "prompt": "Tu madre te hace muchas preguntas sobre tus planes: ¿cuándo vas a terminar la carrera?, ¿cuándo vas a buscar piso?… Escribe el diálogo con tus respuestas.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Preguntas con ¿cuándo vas a…?",
        "Respuestas con cuando / en cuanto + subjuntivo",
        "Al menos una respuesta con hasta que o antes de que",
        "Formato de diálogo con guiones"
      ],
      "modelAnswer": "—¿Cuándo vas a terminar la carrera?\n—Cuando apruebe las dos asignaturas que me quedan, mamá. En junio, espero.\n—¿Y cuándo vas a buscar piso?\n—En cuanto encuentre un trabajo estable. No quiero mudarme hasta que tenga un sueldo fijo.\n—¿Y cuándo vas a presentarnos a tu novia?\n—Cuando vengáis a verme a Sevilla. Pero llamadme antes de que compréis los billetes, ¿vale?\n—Bueno, pero no tardes mucho en decidirte.\n—Tranquila, cuando tenga noticias, serás la primera en saberlo.",
      "explanation": "La pregunta con ¿cuándo? va en indicativo, pero la respuesta sobre el futuro lleva subjuntivo: cuando apruebe, en cuanto encuentre, hasta que tenga, antes de que compréis."
    }
  ],
  "b2d-pares-quiero-queria": [
    {
      "type": "write",
      "prompt": "Organizaste una cena sorpresa para el cumpleaños de tu hermano, pero nada salió como esperabas. Escribe un correo a una amiga que no pudo venir contándole qué querías que pasara y qué ocurrió en realidad.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Quería / esperaba que + imperfecto de subjuntivo",
        "Les pedí que + imperfecto de subjuntivo",
        "Contraste con lo que pasó (indefinido e imperfecto)",
        "Al menos dos irregulares (fuera, supiera, hiciera…)"
      ],
      "modelAnswer": "¡Hola, Nuria! Te cuento lo de la cena de Álex. Yo quería que fuera una sorpresa total, así que les pedí a todos que llegaran a las nueve y que no le dijeran nada. Esperaba que mi hermano no supiera nada hasta el último momento. Pues bien: mi madre se lo contó por la mañana sin querer. Además, le pedí al restaurante que hiciera una tarta de chocolate y trajeron una de fresa. Aun así, Álex se rio muchísimo y lo pasamos genial. ¡La próxima vez tienes que venir!",
      "explanation": "Con el verbo principal en pasado (quería, pedí, esperaba), la subordinada pasa al imperfecto de subjuntivo: quería que fuera, les pedí que llegaran. Lo que pasó de verdad va en indicativo: mi madre se lo contó."
    }
  ],
  "b2r-transform-sequence-of-tenses": [
    {
      "type": "write",
      "prompt": "Eres el secretario o la secretaria de tu comunidad de vecinos. Escribe el resumen de la última reunión: qué propuso cada vecino, qué se decidió y qué se le pidió al administrador.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Propuso / pidió / decidió que + imperfecto de subjuntivo",
        "Era necesario / importante que + imperfecto de subjuntivo",
        "Al menos cinco formas de imperfecto de subjuntivo",
        "Registro neutro de informe"
      ],
      "modelAnswer": "Resumen de la reunión del 3 de marzo. Asistieron doce vecinos. La señora Gómez propuso que se pintara la fachada antes del verano. El vecino del segundo pidió que se instalara un ascensor, pero la mayoría consideró que era demasiado caro. Se decidió que cada familia pagara cincuenta euros más al mes durante un año. También se acordó que era necesario que alguien revisara las luces del garaje. Por último, se le pidió al administrador que enviara los presupuestos antes de que terminara el mes.",
      "explanation": "En un resumen en pasado, propuso que, pidió que y era necesario que llevan imperfecto de subjuntivo: propuso que se pintara, era necesario que alguien revisara. Es la secuencia de tiempos."
    }
  ],
  "b2d-mezcla-secuencia-cortesia": [
    {
      "type": "write",
      "prompt": "El horario de tu grupo en la escuela de idiomas ya no te viene bien. Escribe un correo formal a la coordinadora para pedir un cambio de grupo de forma educada.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Quisiera + infinitivo",
        "Le agradecería que / me gustaría que + imperfecto de subjuntivo",
        "Sería mejor que + imperfecto de subjuntivo",
        "Saludo y despedida formales"
      ],
      "modelAnswer": "Estimada señora Ruiz: Le escribo porque soy alumno del grupo B2 de los lunes y miércoles por la tarde. Desde este mes tengo un horario de trabajo nuevo y ya no llego a tiempo a clase. Quisiera cambiarme al grupo de los martes y jueves por la mañana, si todavía quedan plazas. Le agradecería mucho que me informara de las opciones disponibles. En caso de que no haya plazas, me gustaría que me pusieran en lista de espera para el próximo trimestre. Quizá sería mejor que lo habláramos en persona. Atentamente, Javier Molina.",
      "explanation": "Quisiera, le agradecería que y me gustaría que suavizan una petición. Tras un condicional, la subordinada va en imperfecto de subjuntivo: le agradecería que me informara, sería mejor que lo habláramos."
    }
  ],
  "b2d-elige-ojala-presente-imperfecto": [
    {
      "type": "write",
      "prompt": "Es la noche antes de un examen muy importante. Escribe una entrada de diario con tus deseos: algunos son posibles y otros casi imposibles. Usa ojalá con presente y con imperfecto de subjuntivo.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Ojalá + presente de subjuntivo para deseos posibles",
        "Ojalá + imperfecto de subjuntivo para deseos improbables",
        "Al menos cuatro deseos con ojalá",
        "Una reflexión final sobre cómo te sientes"
      ],
      "modelAnswer": "Jueves, once de la noche. Mañana tengo el examen de conducir y no puedo dormir. Ojalá no llueva, porque con lluvia me pongo nerviosísima. Ojalá me toque el examinador simpático del que habla todo el mundo. Ojalá tuviera un mes más de prácticas, pero ya no hay tiempo. Ojalá mi padre no fuera tan exigente: dice que, si no apruebo, no me deja el coche en verano. Bueno, he estudiado mucho y conduzco bien. Ojalá mañana a estas horas esté celebrándolo.",
      "explanation": "Ojalá + presente de subjuntivo expresa un deseo posible (ojalá no llueva); ojalá + imperfecto, un deseo improbable o contrario a la realidad (ojalá tuviera un mes más)."
    }
  ],
  "b2d-circuito-como-si": [
    {
      "type": "write",
      "prompt": "Describe a un compañero de trabajo, un vecino o un familiar que se comporta de una manera muy peculiar. Usa como si para comparar su actitud con algo que no es verdad.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Al menos tres oraciones con como si + imperfecto de subjuntivo",
        "Como si + pluscuamperfecto de subjuntivo al menos una vez",
        "Descripción del aspecto o del carácter en presente",
        "Una opinión personal al final"
      ],
      "modelAnswer": "En mi oficina trabaja Ramón, un hombre de unos cincuenta años que siempre lleva corbata. Ramón habla como si fuera el director de la empresa, aunque es contable, como yo. Por las mañanas entra saludando a todos como si estuviera en un desfile. En las reuniones opina sobre todo, como si supiera más que nadie. Y cuando alguien comete un error, lo mira como si hubiera cometido un crimen. A pesar de todo, me cae bien: en el fondo es generoso y muy trabajador.",
      "explanation": "Como si compara con algo irreal y siempre va con subjuntivo: imperfecto para lo simultáneo (como si fuera el director) y pluscuamperfecto para lo anterior (como si hubiera cometido un crimen)."
    }
  ],
  "b2r-mission-hypothetical-interview": [
    {
      "type": "write",
      "prompt": "Una revista entrevista a una cantante famosa con preguntas imposibles. Escribe la entrevista: las preguntas del periodista y las respuestas de la cantante.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Preguntas con ¿qué harías si…? + imperfecto de subjuntivo",
        "Respuestas con si + imperfecto de subjuntivo, condicional",
        "Al menos tres verbos irregulares (pudieras, fueras, tuvieras…)",
        "Formato de entrevista con guiones"
      ],
      "modelAnswer": "—Si pudieras cantar con cualquier artista de la historia, ¿con quién cantarías?\n—Sin duda, con Mercedes Sosa. Si estuviera viva, le pediría un dúo mañana mismo.\n—¿Qué harías si un día perdieras la voz?\n—Escribiría canciones para otros. Si no pudiera cantar, seguiría componiendo.\n—Y si fueras invisible durante un día, ¿adónde irías?\n—Iría a uno de mis conciertos para escuchar lo que dice el público de verdad.\n—¿Qué cambiarías de tu vida si tuvieras la oportunidad?\n—Nada. Bueno, dormiría más.",
      "explanation": "Para situaciones imposibles o improbables: si + imperfecto de subjuntivo en la condición y condicional en la consecuencia (si pudieras cantar…, ¿con quién cantarías?)."
    }
  ],
  "b2d-cuento-debate-ia": [
    {
      "type": "write",
      "prompt": "En un foro se debate esta pregunta: «¿Qué pasaría si la inteligencia artificial escribiera todos nuestros textos?». Escribe tu intervención, distinguiendo lo que ya es probable de lo que todavía es hipotético.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Si + presente, futuro para lo probable",
        "Si + imperfecto de subjuntivo, condicional para lo hipotético",
        "Una concesión (aunque, sin embargo)",
        "Una conclusión con tu postura"
      ],
      "modelAnswer": "Creo que tenemos que distinguir dos cosas. Si seguimos usando la IA para corregir correos, escribiremos más rápido y cometeremos menos errores; eso ya está pasando. Pero si las máquinas escribieran todos nuestros textos, perderíamos algo importante. Si nadie redactara sus propias cartas, ¿cómo aprenderían los niños a ordenar sus ideas? Aunque la tecnología es muy útil, no debería sustituir nuestra voz. En mi opinión, si la usamos con cuidado, será una herramienta excelente; si dejáramos de pensar por nosotros mismos, sería un desastre.",
      "explanation": "Si + presente con futuro presenta algo real o probable (si seguimos usando…, escribiremos). Si + imperfecto de subjuntivo con condicional, algo hipotético (si las máquinas escribieran…, perderíamos)."
    }
  ],
  "b2d-habla-de-ti-si-fueras": [
    {
      "type": "write",
      "prompt": "Te presentas como delegado o delegada de tu clase. Escribe un breve discurso de campaña: qué harás si te eligen y qué cambiarías si tuvieras más poder del que tiene un delegado.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Si me elegís / si conseguimos + futuro",
        "Si + imperfecto de subjuntivo, condicional para lo irreal",
        "Si yo fuera… + condicional",
        "Apelación directa al público (vosotros)"
      ],
      "modelAnswer": "Queridos compañeros: me llamo Irene y quiero ser vuestra delegada. Si me elegís, hablaré con los profesores para que los exámenes no coincidan en la misma semana. Si conseguimos dinero en la fiesta de fin de curso, organizaremos una excursión. Ahora bien, si yo fuera la directora, cambiaría muchas más cosas: abriría la biblioteca por las tardes y pondría ordenadores nuevos en todas las aulas. Si tuviera ese poder, también haría la cafetería más barata. Pero no lo tengo, así que empecemos por lo posible. ¡Votadme!",
      "explanation": "Lo que puede pasar de verdad va con si + presente y futuro (si me elegís, hablaré). Lo irreal, con si + imperfecto de subjuntivo y condicional (si yo fuera la directora, cambiaría)."
    }
  ],
  "b2d-circuito-participios-habria": [
    {
      "type": "write",
      "prompt": "Tus vacaciones con una agencia de viajes fueron un desastre. Escribe una reseña negativa en su página web explicando qué falló y qué habría pasado si la agencia hubiera hecho bien su trabajo.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Si + pluscuamperfecto de subjuntivo, condicional perfecto",
        "Al menos tres participios irregulares (dicho, hecho, puesto…)",
        "Contexto en pasado (indefinido e imperfecto)",
        "Una recomendación final a otros clientes"
      ],
      "modelAnswer": "Una estrella. Contratamos un viaje a Lanzarote con esta agencia y fue un desastre. El hotel estaba a cuarenta minutos de la playa, aunque en la web ponía «primera línea». Si nos hubieran dicho la verdad, habríamos elegido otro hotel. El primer día cancelaron la excursión al volcán y nadie nos avisó. Si hubieran puesto un aviso en la recepción, no habríamos esperado el autobús durante una hora. Si la agencia hubiera hecho bien su trabajo, no tendríamos que reclamar nada ahora; todavía estamos esperando que nos devuelvan el dinero. No la recomiendo.",
      "explanation": "Hipótesis sobre el pasado: si + hubiera + participio, habría + participio. Cuidado con los participios irregulares: dicho, puesto, hecho, devuelto."
    }
  ],
  "b2d-cuento-conversacion-decisiones": [
    {
      "type": "write",
      "prompt": "Dos socios cerraron su pequeño restaurante el año pasado. Escribe el diálogo en el que comentan qué habrían hecho de otra manera.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Yo habría + participio para opinar sobre el pasado",
        "Si + pluscuamperfecto de subjuntivo, condicional perfecto",
        "Una consecuencia en el presente (si…, ahora tendríamos…)",
        "Formato de diálogo con dos voces"
      ],
      "modelAnswer": "—¿Sabes qué pienso a veces, Carla? Que habríamos tenido que abrir en el centro.\n—Puede ser. Si hubiéramos alquilado el local de la plaza, habríamos tenido más clientes.\n—Y yo no habría puesto precios tan bajos al principio.\n—Tienes razón. Si hubiéramos cobrado lo justo, ahora tendríamos el restaurante abierto.\n—¿Y tú? ¿Qué habrías hecho de otra manera?\n—Yo habría contratado antes a un cocinero. Lo hicimos todo nosotros y acabamos agotados.\n—Bueno, por lo menos aprendimos mucho.\n—Eso sí. Si no lo hubiéramos intentado, nunca lo habríamos sabido.",
      "explanation": "Si hubiéramos + participio, habríamos + participio para un pasado que no fue. Si la consecuencia llega hasta hoy, condicional simple: ahora tendríamos el restaurante abierto."
    }
  ],
  "b2d-rep-condicional-perfecto-reproches": [
    {
      "type": "write",
      "prompt": "Ayer tu amigo te dejó plantado en la puerta del cine sin avisar. Escribe un mensaje de móvil reprochándole lo que pasó, pero sin romper la amistad.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Podrías / deberías haber + participio",
        "Habría preferido que + pluscuamperfecto de subjuntivo",
        "Si me hubieras…, habría…",
        "Un cierre conciliador"
      ],
      "modelAnswer": "Oye, Dani, ¿qué pasó ayer? Te estuve esperando cuarenta minutos en la puerta del cine. Podrías haberme mandado un mensaje, aunque fuera de dos palabras. Si me hubieras avisado, me habría quedado en casa o habría quedado con otra persona. Habría preferido que me hubieras dicho la verdad, aunque fuera que no te apetecía. Además, las entradas las pagué yo. En fin, espero que estés bien. Ya me contarás, y la próxima vez invitas tú, ¿vale?",
      "explanation": "Para reprochar algo del pasado: podrías haber + participio, habría preferido que + pluscuamperfecto de subjuntivo y si me hubieras avisado, me habría quedado."
    }
  ],
  "b2r-error-hunt-type-three": [
    {
      "type": "write",
      "prompt": "En tu empresa, un pedido importante llegó tarde a un cliente. Escribe un breve informe para tu jefa explicando qué falló y qué habría pasado si el equipo hubiera actuado de otra manera.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Si + pluscuamperfecto de subjuntivo, condicional perfecto (nunca «si habría»)",
        "Ojalá + pluscuamperfecto de subjuntivo",
        "Una consecuencia actual con condicional simple",
        "Una propuesta final para el futuro"
      ],
      "modelAnswer": "Informe sobre el retraso del pedido 2048. El pedido salió del almacén el viernes, tres días después de lo previsto. El problema empezó cuando el proveedor nos envió menos material del acordado. Si lo hubiéramos revisado al recibirlo, habríamos detectado el error a tiempo. Además, si el departamento de ventas hubiera avisado al cliente, este no habría cancelado el siguiente pedido. Ojalá hubiéramos tenido un sistema de control más claro. Si lo tuviéramos, ahora no estaríamos hablando de este problema. Propongo revisar cada entrega el mismo día en que llegue.",
      "explanation": "En la cláusula con si nunca va habría: si lo hubiéramos revisado, habríamos detectado. Ojalá + pluscuamperfecto lamenta el pasado, y «si lo tuviéramos, no estaríamos…» se refiere al presente."
    }
  ],
  "b2d-cadena-mandatos-indirectos": [
    {
      "type": "write",
      "prompt": "Ayer el casero te llamó con varias instrucciones para tus compañeros de piso, que no estaban en casa. Escribe una nota para la nevera transmitiendo lo que dijo y lo que pidió.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Dijo que + cambio de tiempo (vendría, se habían quejado…)",
        "Nos pidió que + imperfecto de subjuntivo para los mandatos",
        "Al menos tres mandatos transmitidos",
        "Expresiones de tiempo adaptadas al día en que escribes"
      ],
      "modelAnswer": "Chicos, ayer por la noche llamó el casero. Dijo que el técnico de la caldera vendría hoy entre las diez y las doce y nos pidió que alguien se quedara en casa para abrirle. También dijo que los vecinos se habían quejado del ruido del sábado, así que nos pidió que no pusiéramos música después de las once. Además, quería que le enviáramos una foto del contador de la luz antes del viernes. Por último, nos dijo que no nos olvidáramos de pagar el alquiler a tiempo. ¡Yo hoy no puedo quedarme! ¿Alguien puede?",
      "explanation": "Las informaciones cambian de tiempo (vendrá → vendría, se han quejado → se habían quejado) y los mandatos pasan a que + imperfecto de subjuntivo: «Quedaos» → nos pidió que alguien se quedara."
    }
  ],
  "b2r-mission-gossip": [
    {
      "type": "write",
      "prompt": "Cuenta la historia de un rumor que corrió por tu oficina o tu clase: quién dijo qué, cómo cambió la noticia de persona en persona y qué era verdad al final.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Verbos introductores variados (contó, aseguró, comentó, explicó…)",
        "Retroceso de tiempos (se iba a…, había…, tomaría…)",
        "Una pregunta indirecta (me preguntó si…)",
        "Un final que aclare la verdad"
      ],
      "modelAnswer": "El mes pasado, Lucía me contó que nuestra jefa se iba a jubilar. Me aseguró que lo había oído en la cafetería. Esa misma tarde, Pablo le comentó a todo el mundo que la jefa ya había presentado su renuncia y que la empresa iba a cerrar la oficina. Al día siguiente, un cliente me preguntó si era verdad que nos íbamos todos a la calle. Al final, la jefa nos reunió y nos explicó que solo se tomaría unas vacaciones de un mes. ¡Así nacen los rumores!",
      "explanation": "Con verbos introductores en pasado, los tiempos retroceden: se va → se iba, lo he oído → lo había oído, se tomará → se tomaría. Las preguntas de sí o no se transmiten con si."
    }
  ],
  "b2d-cuento-declaracion-oficial": [
    {
      "type": "write",
      "prompt": "La alcaldesa de tu ciudad dio ayer una rueda de prensa sobre el nuevo plan de transporte. Escribe una breve noticia para un periódico local resumiendo lo que anunció, lo que le preguntaron y lo que pidió a los ciudadanos.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Verbos de comunicación variados (anunció, aseguró, explicó, respondió)",
        "Retroceso de tiempos (habría, sería, había firmado…)",
        "Una pregunta indirecta de un periodista",
        "Una petición con pidió que + imperfecto de subjuntivo"
      ],
      "modelAnswer": "La alcaldesa presentó ayer el nuevo plan de transporte de la ciudad. Anunció que a partir de enero habría diez líneas de autobús nuevas y aseguró que el billete sería gratuito para los menores de dieciocho años. También explicó que el Ayuntamiento había firmado un acuerdo con la región para ampliar el metro. Un periodista le preguntó cuánto costaría el proyecto, pero ella respondió que todavía no podía dar cifras. Al final, pidió a los vecinos que dejaran el coche en casa y que probaran el transporte público.",
      "explanation": "Una noticia resume con verbos de comunicación variados y retroceso de tiempos (habrá → habría, ha firmado → había firmado). La pregunta conserva el interrogativo (cuánto costaría) y la petición va en imperfecto de subjuntivo."
    }
  ],
  "b2d-habla-de-ti-conversacion": [
    {
      "type": "write",
      "prompt": "Ayer tuviste una larga conversación con tu abuela o tu abuelo. Escribe una entrada de diario contando lo que te contó, lo que te preguntó y los consejos que te dio.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Me contó / me dijo que + retroceso de tiempos",
        "Me preguntó si / cuándo…",
        "Me aconsejó / me pidió que + imperfecto de subjuntivo",
        "Una reflexión personal al final"
      ],
      "modelAnswer": "Domingo. Ayer comí con la abuela Pilar y estuvimos hablando toda la tarde. Me contó que de joven había trabajado en una fábrica de chocolate y que allí había conocido al abuelo. Me dijo que aquellos años habían sido los más felices de su vida. Luego me preguntó si yo estaba contenta con mi trabajo y cuándo pensaba irme de casa de mis padres. Me aconsejó que no tuviera prisa y que viajara todo lo posible. Al despedirse, me pidió que fuera a verla más a menudo. Creo que lo haré.",
      "explanation": "Lo que contó la abuela retrocede al pluscuamperfecto (había trabajado, habían sido). Las preguntas van con si o con el interrogativo, y los consejos, con que + imperfecto de subjuntivo (me aconsejó que no tuviera prisa)."
    }
  ],
  "b2d-circuito-hay-esta": [
    {
      "type": "write",
      "prompt": "Una amiga va a pasar un fin de semana en tu piso mientras tú estás de viaje. Escríbele un correo explicando qué hay en el barrio y dónde está cada cosa.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Hay + artículo indeterminado para presentar lugares nuevos",
        "Estar para situar lugares concretos (el mercado está…)",
        "Ser para eventos (el concierto es en…)",
        "Al menos un adjetivo con ser y otro con estar"
      ],
      "modelAnswer": "¡Hola, Clara! Te explico un poco el barrio. Al lado de mi portal hay una panadería muy buena y, enfrente, hay una farmacia que abre los domingos. El mercado está en la calle de atrás; es pequeño, pero siempre está lleno. Si quieres correr, el parque está a cinco minutos. Por cierto, el sábado hay fiesta en el barrio: el concierto es en la plaza a las diez. Los vecinos son muy simpáticos, así que no dudes en preguntarles. Las llaves están en el buzón. ¡Disfruta!",
      "explanation": "Hay presenta algo nuevo (hay una panadería); estar sitúa algo conocido (el mercado está en la calle de atrás). Para el lugar de un evento se usa ser: el concierto es en la plaza."
    }
  ],
  "b2r-contrast-meaning-adjectives": [
    {
      "type": "write",
      "prompt": "Escribe una reseña de un restaurante en el que cenaste hace poco. Juega con adjetivos que cambian de significado con ser y estar (rico, listo, verde, aburrido…).",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Al menos tres adjetivos que cambian de significado con ser y estar",
        "Estar + adjetivo para la comida y el estado del momento",
        "Ser + adjetivo para el carácter o las cualidades",
        "Una valoración final con recomendación"
      ],
      "modelAnswer": "Cenamos el viernes en La Encina y la experiencia fue desigual. La carne estaba riquísima, pero las patatas estaban frías. El camarero era muy listo: en dos minutos supo qué vino nos iba a gustar. Sin embargo, la cocina no estaba lista a tiempo y esperamos casi una hora el segundo plato. Los tomates de la ensalada estaban verdes, y eso en verano no tiene excusa. A los postres, mi amigo estaba tan aburrido que casi se duerme, ¡y eso que él no es nada aburrido! Volvería, pero entre semana.",
      "explanation": "Algunos adjetivos cambian de significado: estar rico (sabroso), ser listo (inteligente) / estar listo (preparado), estar verde (sin madurar), estar aburrido (sentir aburrimiento) / ser aburrido (no ser divertido)."
    }
  ],
  "b2d-cuento-psicologo": [
    {
      "type": "write",
      "prompt": "Escribe una carta al consultorio de una revista. Explica cómo eres normalmente, cómo estás últimamente y qué hay en tu vida que te preocupa, y pide un consejo.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Ser para el carácter (soy una persona…)",
        "Estar para el estado de ánimo actual (estoy agotada…)",
        "Haber para presentar problemas o situaciones (hay días en que…)",
        "Una petición de consejo al final"
      ],
      "modelAnswer": "Querida Elena: Te escribo porque no sé qué hacer. Normalmente soy una persona alegre y bastante sociable, pero últimamente estoy triste y siempre estoy cansada. En mi trabajo hay mucha presión y hay días en que no tengo tiempo ni para comer. Mi jefe es buena persona, pero está muy nervioso por los resultados y nos lo transmite. Además, mi novio vive en otra ciudad y lo echo mucho de menos. ¿Es normal sentirse así? ¿Qué me aconsejas? Un abrazo, Marta.",
      "explanation": "Ser describe cómo es alguien (soy alegre, es buena persona); estar, cómo se siente ahora (estoy triste, está nervioso). Hay presenta las situaciones: hay mucha presión, hay días en que…"
    }
  ],
  "b2d-habla-de-ti-caracter-estado": [
    {
      "type": "write",
      "prompt": "Llevas dos semanas en un curso de idiomas en el extranjero. Escribe una postal a tu familia contando cómo es el lugar, cómo es la gente, cómo estás tú y qué hay que hacer allí.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Ser para describir el lugar y la gente",
        "Estar para tu estado y para la ubicación",
        "Hay para presentar actividades o cosas",
        "Al menos un adjetivo que cambia de significado con ser o estar"
      ],
      "modelAnswer": "¡Hola, familia! Os escribo desde Galway. La ciudad es pequeña pero preciosa, y está al lado del mar. La gente es muy abierta: mis compañeros de residencia son irlandeses y franceses, y todos son muy divertidos. Yo estoy muy bien, aunque un poco cansada, porque hay clases por la mañana y excursiones casi todas las tardes. Hoy el cielo está gris, pero aquí eso es normal. Ya estoy lista para el examen final del viernes. ¡Os echo de menos! Besos, Inés.",
      "explanation": "Ser para las cualidades (la ciudad es preciosa, la gente es abierta), estar para la ubicación y el estado (está al lado del mar, estoy cansada) y hay para lo que se presenta (hay clases). Estar lista significa estar preparada."
    }
  ],
  "b2d-patron-ponerse": [
    {
      "type": "write",
      "prompt": "Escribe una entrada de diario sobre una entrevista de trabajo que hiciste ayer. Cuenta cómo reaccionasteis tú y la persona que te entrevistó en cada momento, con ponerse + adjetivo.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Al menos cuatro casos de ponerse + adjetivo",
        "Cambios físicos y emocionales (me puse rojo, se puso seria…)",
        "Indefinido e imperfecto para narrar",
        "Una valoración final"
      ],
      "modelAnswer": "Miércoles, por la noche. Ayer tuve la entrevista en la editorial. Al llegar me puse nerviosísimo, porque la entrevistadora parecía muy seria. Cuando me preguntó por mi experiencia, me puse rojo y empecé a hablar demasiado rápido. Ella se puso un poco seria al oír que nunca había trabajado con libros infantiles. Pero luego le hablé de mis traducciones y se puso muy contenta. Al final, con uno de sus comentarios, me puse de buen humor y me relajé. Hoy estoy más tranquilo: creo que salió bien.",
      "explanation": "Ponerse + adjetivo expresa cambios rápidos y temporales, sobre todo emociones y reacciones físicas: me puse nervioso, me puse rojo, se puso contenta."
    }
  ],
  "b2r-tema-oficios-perdidos": [
    {
      "type": "write",
      "prompt": "Escribe un breve artículo para la revista de tu barrio sobre un oficio que casi ha desaparecido (afilador, zapatero, sereno…). Cuenta cómo cambió con el tiempo y qué fue de las personas que lo ejercían.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Llegar a ser / hacerse / convertirse en para cambios de profesión o estatus",
        "Volverse para un cambio duradero",
        "Tiempos del pasado bien combinados"
      ],
      "modelAnswer": "El último afilador del barrio. Durante décadas, el silbato del afilador formaba parte de la banda sonora de nuestras calles. Manuel empezó a trabajar con su padre a los quince años y llegó a ser el afilador más conocido de la zona. Sin embargo, con la llegada de los cuchillos baratos, el oficio se volvió poco rentable y muchos compañeros perdieron su trabajo. Algunos se hicieron cerrajeros; otros emigraron. Manuel, en cambio, convirtió su vieja bicicleta en un pequeño museo ambulante. Hoy su silbato se ha convertido en el recuerdo de otra época.",
      "explanation": "Llegar a ser indica un cambio que cuesta esfuerzo; hacerse, un cambio de profesión o ideas; volverse, un cambio duradero."
    }
  ],
  "b2r-tema-volver-a-la-rutina": [
    {
      "type": "write",
      "prompt": "Acabas de volver de seis meses de voluntariado en otro país y la vida normal te parece extraña. Escribe un correo a una persona que conociste allí contándole cómo te sientes y cómo has cambiado.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Al menos tres verbos de cambio distintos (ponerse, volverse, hacerse, quedarse…)",
        "Como si + imperfecto de subjuntivo",
        "Un contraste entre antes y ahora (antes…; en cambio, ahora…)",
        "Registro de correo informal"
      ],
      "modelAnswer": "¡Hola, Amaru! Llevo dos semanas en Valencia y todo me parece extraño. Voy a la oficina como si fuera un turista en mi propia vida. Antes me ponía nervioso por cualquier tontería; en cambio, ahora me he vuelto mucho más paciente. Mis amigos dicen que me he hecho más serio, y quizá tienen razón. Ayer, en el supermercado, me quedé mirando las estanterías durante diez minutos: hay demasiadas cosas. Echo de menos las mañanas en la escuela y vuestras risas. ¿Cómo están los niños? Escríbeme pronto.",
      "explanation": "Ponerse para reacciones pasajeras (me ponía nervioso), volverse y hacerse para cambios de carácter más duraderos (me he vuelto más paciente). Como si + imperfecto de subjuntivo compara con algo irreal."
    }
  ],
  "b2r-transform-adjective-to-change": [
    {
      "type": "write",
      "prompt": "Dos antiguos compañeros de clase se encuentran veinte años después en una reunión de exalumnos. Escribe su diálogo comentando cómo han cambiado ellos y sus compañeros.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Ponerse para cambios momentáneos y volverse para cambios de carácter",
        "Hacerse o llegar a ser para la profesión o el éxito",
        "Quedarse + adjetivo (calvo, sordo…)",
        "Formato de diálogo con dos voces"
      ],
      "modelAnswer": "—¡Alberto! Estás igual. Bueno, te has quedado un poco calvo.\n—Ja, ja, gracias. Tú, en cambio, te has vuelto muy elegante.\n—Es por el trabajo. ¿Te acuerdas de Marina? Se hizo abogada y ahora tiene su propio despacho.\n—¿Marina? ¡Si siempre se ponía roja cuando la profesora le preguntaba!\n—Pues ha llegado a ser una de las mejores abogadas de Madrid.\n—Increíble. ¿Y Jaime, el tímido?\n—Se volvió muy hablador en la universidad. Ahora es locutor de radio.\n—Esta reunión me está poniendo nostálgico. ¿Brindamos?",
      "explanation": "Un estado se convierte en cambio con el verbo adecuado: es abogada → se hizo abogada; está roja → se ponía roja; es elegante → se ha vuelto elegante; está calvo → se ha quedado calvo."
    }
  ],
  "b2r-tema-negocio-familiar": [
    {
      "type": "write",
      "prompt": "Tus padres quieren que continúes con el negocio familiar (una feria ambulante, una tienda, un taller…). Escribe una carta explicándoles tu decisión, con sus ventajas e inconvenientes.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Conectores de causa (ya que, puesto que)",
        "Conectores de consecuencia (por lo tanto, así que)",
        "Conectores de contraste o concesión (sin embargo, a pesar de que, aunque)",
        "Una decisión final clara"
      ],
      "modelAnswer": "Queridos papá y mamá: He pensado mucho en lo que me dijisteis sobre la feria. Sé que es vuestra vida y que el abuelo la empezó con mucho esfuerzo. Sin embargo, ya que me lo preguntáis, os diré la verdad: no quiero pasar el año viajando de pueblo en pueblo. A pesar de que me encantan las atracciones, prefiero una vida más estable. Además, puesto que ya tengo trabajo en el colegio, no puedo dejarlo ahora. Por lo tanto, he decidido no continuar con el negocio, aunque os ayudaré en verano. Os quiero mucho. Lucas.",
      "explanation": "Ya que y puesto que introducen la causa; por lo tanto, la consecuencia; sin embargo, a pesar de que y aunque, el contraste o la concesión. Ordenan los argumentos de la carta."
    }
  ],
  "b2r-tema-patrimonio": [
    {
      "type": "write",
      "prompt": "El ayuntamiento quiere derribar un antiguo cine de tu barrio para construir un aparcamiento. Escribe una propuesta breve en nombre de la asociación de vecinos para darle otro uso al edificio.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Al menos un conector de causa y otro de consecuencia",
        "Un conector para añadir argumentos (además, asimismo)",
        "Una concesión (si bien, aunque)",
        "La voz pasiva o la pasiva refleja (fue construido, se podrían…)"
      ],
      "modelAnswer": "Propuesta de la Asociación de Vecinos del Carmen. El cine Goya fue construido en 1932 y forma parte de la historia del barrio. Si bien entendemos que faltan plazas de aparcamiento, creemos que derribarlo sería un error, puesto que es uno de los pocos edificios de su época que se conservan. Proponemos convertirlo en un centro cultural donde se podrían organizar proyecciones, conciertos y talleres para mayores. Además, el edificio atraería visitantes y, por lo tanto, beneficiaría a los comercios cercanos. Pedimos al Ayuntamiento que estudie esta alternativa antes de tomar una decisión.",
      "explanation": "Si bien concede un punto al otro lado; puesto que da la causa; además añade y por lo tanto saca la consecuencia. La pasiva (fue construido, se podrían organizar) da un tono formal."
    }
  ],
  "b2r-tema-identidad-dos-paises": [
    {
      "type": "write",
      "prompt": "Escribe un artículo para la revista de tu escuela sobre lo que significa crecer entre dos países y dos idiomas. Organiza las ideas con conectores y usa al menos una hipótesis.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Conectores para ordenar el texto (en primer lugar, por otra parte, en definitiva)",
        "Una concesión (si bien, aunque, a pesar de que)",
        "Si + imperfecto de subjuntivo o como si",
        "Un registro cuidado, propio de un artículo"
      ],
      "modelAnswer": "Crecer entre dos orillas. Nací en Lyon, pero mis padres son de Murcia. En primer lugar, crecer con dos idiomas es una suerte: pienso en uno y sueño en otro sin darme cuenta. Por otra parte, a veces me siento extranjera en los dos países. En Francia me ven como la española y, cuando llego a Murcia, mis primos me hablan como si fuera una turista. Si bien al principio me dolía, con el tiempo me he acostumbrado. Si tuviera que elegir un solo país, no podría. En definitiva, mi identidad no es una mitad más otra: es algo nuevo.",
      "explanation": "En primer lugar, por otra parte y en definitiva estructuran el artículo; si bien introduce una concesión. Como si y si tuviera… no podría expresan comparaciones e hipótesis irreales."
    }
  ],
  "b2r-tema-etica-datos": [
    {
      "type": "write",
      "prompt": "Escribe un ensayo breve con argumentos a favor y en contra sobre esta pregunta: ¿deberían las empresas poder usar nuestros datos personales a cambio de servicios gratuitos?",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Conectores para presentar argumentos (por un lado, por otro lado, además)",
        "Conectores de contraste y concesión (no obstante, si bien)",
        "Una condicional (si + imperfecto de subjuntivo, condicional)",
        "Una conclusión con en conclusión o en definitiva"
      ],
      "modelAnswer": "Hoy en día, millones de personas usan aplicaciones gratuitas sin leer las condiciones. Por un lado, compartir nuestros datos permite que estas empresas ofrezcan servicios útiles sin cobrar nada. Además, la publicidad personalizada puede resultar más interesante que la tradicional. Por otro lado, no sabemos exactamente quién tiene nuestra información ni para qué la utiliza. Si bien la ley exige nuestro consentimiento, pocos usuarios entienden lo que aceptan. No obstante, si las empresas fueran más transparentes, el problema sería menor. En conclusión, el intercambio puede ser aceptable, siempre que el usuario sepa qué está entregando.",
      "explanation": "Por un lado y por otro lado presentan las dos posturas; si bien y no obstante matizan; en conclusión cierra. Siempre que + subjuntivo pone una condición a la conclusión."
    }
  ],
  "b2d-cadena-hendidas": [
    {
      "type": "write",
      "prompt": "Acabas de recibir un premio (a la mejor novela joven, al mejor proyecto de fin de carrera…). Escribe un breve discurso de agradecimiento destacando a quién se lo debes, con oraciones hendidas.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Fue + persona + quien…",
        "Fue + lugar o tiempo + donde / cuando…",
        "Lo que más… es…",
        "Anteposición con pronombre (este premio se lo dedico a…)"
      ],
      "modelAnswer": "Muchísimas gracias. No esperaba este premio, de verdad. Fue mi profesora de Literatura, la señora Arranz, quien me animó a escribir cuando tenía quince años. Fue en su clase donde descubrí que contar historias era lo mío. Y fue durante un verano difícil cuando empecé esta novela, en la cocina de mis abuelos. Lo que más me emociona es que la hayan leído personas que no me conocen. Este premio se lo dedico a mi madre, que fue quien leyó cada borrador sin quejarse. Gracias a todos.",
      "explanation": "Las oraciones hendidas ponen el foco en una persona (fue mi profesora quien…), un lugar (fue en su clase donde…) o un momento (fue durante un verano cuando…). Al anteponer el complemento, se repite con pronombre: este premio se lo dedico."
    }
  ],
  "b2d-circuito-lo-adjetivo-que": [
    {
      "type": "write",
      "prompt": "Estás de viaje en un lugar que te ha impresionado. Escribe una postal a un amigo usando lo + adjetivo/adverbio + que para expresar tu entusiasmo.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Al menos tres estructuras con lo + adjetivo + que",
        "Al menos una con lo + adverbio + que (lo bien que…)",
        "No te imaginas / no sabes + lo… que",
        "Un saludo y una despedida de postal"
      ],
      "modelAnswer": "¡Hola, Teo! Te escribo desde Granada. No te imaginas lo bonita que es la Alhambra al atardecer. Tampoco sabes lo bien que se come aquí: con cada bebida te ponen una tapa gratis. Lo único malo es lo empinadas que son las calles del Albaicín; tengo las piernas destrozadas. Me sorprende lo amable que es la gente: todo el mundo te ayuda. ¡Tienes que venir conmigo la próxima vez! Un abrazo, Rocío.",
      "explanation": "Lo + adjetivo + que enfatiza el grado, y el adjetivo concuerda con el sustantivo: lo bonita que es la Alhambra, lo empinadas que son las calles. Con adverbio no hay concordancia: lo bien que se come."
    }
  ],
  "b2r-tema-arte-efimero": [
    {
      "type": "write",
      "prompt": "Describe una obra de arte efímero que hayas visto: un mural que van a borrar, una escultura de arena, una instalación de hielo… Explica cómo era y por qué merece la pena aunque desaparezca.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Descripción de la obra (representaba…, había…)",
        "Aunque + subjuntivo para la concesión",
        "Para que + subjuntivo para la finalidad",
        "Una estructura enfática (lo que más…, lo + adjetivo + que)"
      ],
      "modelAnswer": "El verano pasado vi en una playa de Cádiz una escultura de arena enorme. Representaba a una mujer dormida sobre una ola, y a su alrededor había decenas de peces y conchas. Lo que más me impresionó fue lo detallado que estaba el pelo. El artista nos contó que la había hecho para que la gente se parara a mirar el mar. Al día siguiente, la marea se la llevó. Aunque una obra así desaparezca en unas horas, merece la pena, porque lo que queda es el recuerdo de quienes la vieron.",
      "explanation": "Para que + subjuntivo expresa la finalidad (para que la gente se parara); aunque + subjuntivo concede sin que importe (aunque desaparezca). Lo que más… y lo detallado que estaba ponen el foco."
    }
  ],
  "b2r-tema-tradiciones-rurales": [
    {
      "type": "write",
      "prompt": "Escribe un texto para una guía turística sobre una fiesta tradicional de un pueblo. Usa relativos formales para unir la información.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Cuyo / cuya / cuyos / cuyas concordando con lo poseído",
        "Preposición + el cual / la cual",
        "En el que / en la que para lugares",
        "Registro descriptivo e informativo"
      ],
      "modelAnswer": "La Fiesta de la Trashumancia se celebra cada octubre en Valdelagua, un pueblo cuyas calles se llenan ese día de ovejas. Los pastores, cuya ruta empieza en las montañas del norte, atraviesan el pueblo antes de bajar a los pastos de invierno. La plaza mayor, en la que se reúnen todos los vecinos, acoge una comida popular durante la cual se sirven platos tradicionales. La fiesta termina junto al puente romano, delante del cual los niños bailan con campanillas. Es una tradición gracias a la cual el pueblo sigue vivo.",
      "explanation": "Cuyo concuerda con lo poseído, no con el poseedor: un pueblo cuyas calles, los pastores cuya ruta. Tras preposiciones largas o compuestas se prefiere el cual: durante la cual, delante del cual, gracias a la cual."
    }
  ],
  "b2r-tema-pueblos-pesqueros": [
    {
      "type": "write",
      "prompt": "Escribe un breve informe para una fundación cultural sobre un pueblo pesquero que se está quedando vacío. Describe la situación y propón una medida, usando relativos formales.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Cuyo / cuya para indicar posesión",
        "Según el cual / la cual para citar una fuente",
        "Lo cual para comentar una idea anterior",
        "Una propuesta final en condicional o con subjuntivo"
      ],
      "modelAnswer": "Informe sobre Puerto Viejo. Puerto Viejo es un pueblo cuya población ha pasado de dos mil a trescientos habitantes en treinta años. La mayoría de los jóvenes se ha ido a la ciudad, lo cual ha provocado el cierre de la escuela y de dos tiendas. Existe un estudio reciente según el cual la pesca solo da trabajo a veinte familias. Las fiestas del mar, cuyo origen se remonta al siglo XVI, ya casi no se celebran. Proponemos crear una escuela de oficios del mar en la antigua lonja, gracias a la cual los jóvenes podrían quedarse. Sería importante que el proyecto contara con ayuda pública.",
      "explanation": "Cuyo une al poseedor con lo poseído (un pueblo cuya población). Lo cual retoma toda la idea anterior, y según el cual introduce el contenido de una fuente."
    }
  ],
  "b2r-tema-casa-infancia": [
    {
      "type": "write",
      "prompt": "Describe la casa en la que creciste como si fuera el comienzo de una novela. Usa relativos formales y tiempos del pasado.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Cuyo / cuya para describir partes de la casa o su entorno",
        "Preposición + el cual / la cual o en la que",
        "Imperfecto para describir y pluscuamperfecto para lo anterior",
        "Un tono nostálgico"
      ],
      "modelAnswer": "La casa en la que crecí estaba al final de un camino de tierra, junto a un río cuyo ruido nos acompañaba por las noches. Tenía un patio enorme, en medio del cual había una higuera que había plantado mi bisabuelo. La cocina, cuyas paredes estaban siempre calientes, era el centro de todo. Allí mi abuela contaba historias durante las cuales nadie se atrevía a hablar. Hace años que la vendimos, pero a veces, cuando cierro los ojos, todavía huelo los higos de aquellos veranos.",
      "explanation": "Los relativos formales dan un tono literario: un río cuyo ruido, en medio del cual, durante las cuales. El imperfecto describe la casa y el pluscuamperfecto marca lo anterior (había plantado)."
    }
  ],
  "b2r-tema-aprendiz": [
    {
      "type": "write",
      "prompt": "Un taller de guitarras artesanales busca un aprendiz. Escribe una carta de presentación explicando por qué quieres aprender el oficio y qué puedes aportar.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Fórmulas de una carta formal (Estimado/a…, Le saluda atentamente)",
        "Una relativa en subjuntivo (busco un taller donde…, un maestro que…)",
        "Verbos de cambio para tu trayectoria (se convirtió en, me hice…)",
        "Un condicional de cortesía (estaría dispuesto, me gustaría…)"
      ],
      "modelAnswer": "Estimado señor Ortega: Me dirijo a usted para solicitar el puesto de aprendiz que anuncia en su página web. Toco la guitarra desde niño, pero hace dos años la música se convirtió en algo más que una afición: me hice ebanista para entender cómo funciona la madera. Ahora busco un taller donde pueda aprender el oficio con un maestro que me exija y me corrija. Soy paciente, preciso y no me importa repetir una pieza diez veces. Estaría dispuesto a empezar cuando usted lo considere oportuno. Le saluda atentamente, Daniel Prieto.",
      "explanation": "La carta combina fórmulas formales con estructuras del nivel: relativas en subjuntivo para lo que buscas (un taller donde pueda), verbos de cambio para tu trayectoria (me hice ebanista) y condicional de cortesía (estaría dispuesto)."
    }
  ],
  "b2r-tema-vigilancia": [
    {
      "type": "write",
      "prompt": "Tu comunidad de vecinos quiere instalar cámaras con reconocimiento facial en el portal. Escribe un mensaje para el grupo de vecinos dando tu opinión razonada.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Una hipótesis con si + imperfecto de subjuntivo, condicional",
        "Una concesión (es cierto que…, sin embargo; aunque)",
        "Opinión con creo que + indicativo / no creo que + subjuntivo",
        "Una propuesta alternativa"
      ],
      "modelAnswer": "Hola a todos. Entiendo la preocupación por los robos del mes pasado y es cierto que unas cámaras darían más seguridad. Sin embargo, no creo que el reconocimiento facial sea la solución. Si instaláramos ese sistema, una empresa tendría las caras de todos nosotros, incluidos los niños, y no sabríamos qué hace con ellas. Además, me preocupa que cualquier visita quede registrada. Aunque la intención es buena, el precio es nuestra privacidad. Propongo que cambiemos la cerradura del portal y pongamos una cámara normal en el garaje. ¿Lo votamos el jueves?",
      "explanation": "No creo que y me preocupa que llevan subjuntivo (no creo que sea la solución). Si instaláramos…, tendría plantea una hipótesis, y es cierto que…, sin embargo concede antes de argumentar."
    }
  ],
  "b2r-word-web-art-literature": [
    {
      "type": "write",
      "prompt": "Escribe una reseña breve de una exposición para el blog cultural de tu ciudad. Usa vocabulario del arte y al menos una relativa en subjuntivo.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Vocabulario específico (obra, retrato, óleo, boceto, lienzo, técnica…)",
        "Una relativa en subjuntivo (para quien busque…, falta una obra que…)",
        "Una valoración con argumentos",
        "Una recomendación final"
      ],
      "modelAnswer": "«Luz de invierno», en el Museo de Bellas Artes, reúne cuarenta obras de la pintora Ana Lozano. La mayoría son retratos y paisajes al óleo, aunque también hay acuarelas y bocetos inéditos. Lo más interesante es la técnica: la artista aplica la pintura en capas muy finas, de modo que la luz parece salir del lienzo. Quizá falte alguna obra que explique su etapa más abstracta. Aun así, es una exposición imprescindible para quien busque una pintura que emocione sin necesidad de palabras. Hasta el 15 de enero.",
      "explanation": "El vocabulario del arte (óleo, acuarela, boceto, lienzo) da precisión a la reseña. Las relativas en subjuntivo hablan de algo no concreto: alguna obra que explique, quien busque una pintura que emocione."
    }
  ],
  "b2r-word-web-politics": [
    {
      "type": "write",
      "prompt": "Ayer se celebró en tu ciudad el debate entre los candidatos a la alcaldía. Escribe una breve crónica para un periódico digital: qué propuso cada candidato y cómo reaccionó el público.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Vocabulario político (candidato, programa electoral, elecciones, alcaldía…)",
        "Estilo indirecto (prometió que…, aseguró que…)",
        "La voz pasiva o la pasiva refleja (fue criticado, se debatió…)",
        "Una conjunción con subjuntivo (en cuanto, para que…)"
      ],
      "modelAnswer": "El debate electoral de anoche fue seguido por miles de vecinos. La candidata de Avanza Ciudad prometió que, en cuanto llegara a la alcaldía, bajaría los impuestos municipales. Su rival aseguró que su programa electoral incluía más zonas verdes y un tranvía para que los barrios del sur estuvieran mejor comunicados. Se debatió también sobre vivienda, aunque ninguno presentó medidas concretas. El momento más tenso llegó cuando el candidato independiente fue criticado por haber cambiado de partido dos veces. Las elecciones se celebrarán el próximo domingo.",
      "explanation": "La crónica usa vocabulario político, estilo indirecto (prometió que bajaría) y pasivas (fue seguido, se debatió). En estilo indirecto, en cuanto y para que pasan al imperfecto de subjuntivo: en cuanto llegara, para que estuvieran."
    }
  ],
  "b2r-tema-identidad-online": [
    {
      "type": "write",
      "prompt": "Escribe un relato breve sobre alguien que descubre que la persona con la que chateaba desde hacía meses no era quien decía ser.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Pluscuamperfecto de indicativo para lo anterior (había conocido…)",
        "Como si + imperfecto o pluscuamperfecto de subjuntivo",
        "Si + pluscuamperfecto de subjuntivo para lamentar o imaginar",
        "Un final con un consejo o una reflexión"
      ],
      "modelAnswer": "Lucía había conocido a «Marcos» en un foro de fotografía. Durante seis meses hablaron cada noche, y él la escuchaba como si la conociera de toda la vida. Le había contado que vivía en Lisboa y que era fotógrafo. Un día, Lucía buscó una de sus fotos en internet y descubrió que pertenecía a otro artista. Se sintió como si le hubieran robado algo. Si hubiera desconfiado antes, no le habría contado tantas cosas. Ahora siempre aconseja a sus amigas que pidan una videollamada antes de abrir el corazón.",
      "explanation": "El pluscuamperfecto sitúa lo anterior (había conocido). Como si compara con algo irreal (como si la conociera, como si le hubieran robado algo), y si hubiera desconfiado, no le habría contado expresa el lamento."
    }
  ],
  "b2r-word-web-media": [
    {
      "type": "write",
      "prompt": "Un periódico ha publicado un artículo sobre tu asociación con datos falsos. Escribe una carta formal a la directora para quejarte y pedir una rectificación.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Vocabulario de los medios (titular, fuente, rectificación, contrastar…)",
        "Estilo indirecto para citar el artículo (afirmaba que…)",
        "Pedir / lamentar que + subjuntivo",
        "Registro formal"
      ],
      "modelAnswer": "Estimada señora directora: Le escribo en nombre de la Asociación Huerto Vivo en relación con el artículo publicado el pasado lunes. El titular afirmaba que nuestra asociación había recibido cien mil euros de dinero público, y el texto aseguraba que no rendíamos cuentas. Ambas informaciones son falsas: la subvención fue de diez mil euros y nuestras cuentas son públicas. Lamentamos que el periodista no contrastara los datos ni citara ninguna fuente. Por todo ello, le pedimos que publique una rectificación con la misma visibilidad que el artículo original. Atentamente, Carmen Vidal, presidenta.",
      "explanation": "Para citar el artículo se usa el estilo indirecto (afirmaba que había recibido). Lamentamos que + imperfecto de subjuntivo valora un hecho pasado, y le pedimos que + presente de subjuntivo hace la petición formal."
    }
  ],
  "b2r-word-web-personal-growth": [
    {
      "type": "write",
      "prompt": "Escribe una entrada de blog sobre un hábito que cambió tu vida (correr, levantarte temprano, dejar el móvil…). Cuenta cómo empezaste, qué te costó y cómo has cambiado.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Vocabulario del crecimiento personal (meta, hábito, constancia, rendirse…)",
        "Al menos dos verbos de cambio (convertirse en, volverse, hacerse…)",
        "Conjunciones temporales (en cuanto, hasta que)",
        "Un consejo final para los lectores"
      ],
      "modelAnswer": "Hace dos años me propuse una meta sencilla: correr veinte minutos tres veces por semana. Al principio me costaba muchísimo; me ahogaba en cuanto subía una cuesta. Sin embargo, no me rendí hasta que correr se convirtió en un hábito. Poco a poco me volví más constante también en otras cosas: dejé de fumar y empecé a dormir mejor. Mis amigos dicen que me he hecho otra persona. Mi consejo es este: no busquéis un cambio enorme. Elegid algo pequeño y repetidlo hasta que ya no os cueste.",
      "explanation": "Convertirse en y volverse narran cambios duraderos (se convirtió en un hábito, me volví más constante). Hasta que lleva indicativo para el pasado (hasta que se convirtió) y subjuntivo para el futuro (hasta que no os cueste)."
    }
  ],
  "b2r-word-web-performing-arts": [
    {
      "type": "write",
      "prompt": "Tu grupo de teatro aficionado estrena una obra esta noche. Escribe el breve discurso de bienvenida que darás al público antes de que se levante el telón.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Vocabulario del escenario (estreno, ensayos, reparto, telón, función…)",
        "Estructuras de énfasis (fue… quien, lo que más…, lo + adjetivo + que)",
        "Para que / antes de que + subjuntivo",
        "Apelación directa al público"
      ],
      "modelAnswer": "Buenas noches y bienvenidos a nuestro estreno. Antes de que se levante el telón, quería deciros unas palabras. Esta obra la hemos preparado durante ocho meses de ensayos, casi siempre después del trabajo. No os imagináis lo difícil que ha sido coincidir todos los martes. Fue nuestra directora, Elvira, quien creyó en este reparto cuando nadie más lo hacía. Lo que más deseamos esta noche es que disfrutéis tanto como nosotros. Por favor, apagad los móviles para que los actores puedan concentrarse. ¡Que empiece la función!",
      "explanation": "El discurso usa el vocabulario del teatro y estructuras de énfasis: anteposición (esta obra la hemos preparado), hendidas (fue nuestra directora quien) y lo difícil que ha sido. Para que y antes de que llevan subjuntivo."
    }
  ],
  "b2d-rep-mezcla-subjuntivo-universo": [
    {
      "type": "write",
      "prompt": "Una compañía aérea perdió tu maleta y nadie te ha dado una solución. Escribe un correo formal de reclamación combinando las estructuras de subjuntivo del nivel.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Exigir / solicitar que + presente de subjuntivo",
        "Una relativa en subjuntivo (no he encontrado a nadie que…)",
        "Una oración temporal o final con subjuntivo (en cuanto, para que)",
        "Si + pluscuamperfecto de subjuntivo, condicional perfecto"
      ],
      "modelAnswer": "Estimados señores: El pasado 2 de agosto viajé de Madrid a Lima con su compañía y mi maleta no llegó a destino. Desde entonces he llamado seis veces, pero no he encontrado a nadie que me dé una respuesta clara. Si me hubieran informado desde el principio, habría podido comprar lo necesario sin tanta angustia. Les exijo que localicen mi equipaje y que me lo envíen a casa en cuanto aparezca. Asimismo, solicito que me reembolsen los gastos, para que esta experiencia no me cueste dinero. Quedo a la espera de su respuesta. Atentamente, Sofía Marín.",
      "explanation": "La reclamación reúne el subjuntivo del nivel: relativa con antecedente negado (nadie que me dé), influencia (les exijo que localicen), tiempo y finalidad (en cuanto aparezca, para que no me cueste) e hipótesis pasada (si me hubieran informado, habría podido)."
    }
  ],
  "b2-comprehensive-review-3": [
    {
      "type": "write",
      "prompt": "Escribe una propuesta para la dirección de tu escuela de idiomas: quieres organizar un intercambio semanal de conversación con estudiantes universitarios. Usa conectores, énfasis y al menos un verbo de cambio.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Conectores de causa, consecuencia y adición (ya que, por lo tanto, además)",
        "Una estructura enfática (lo que proponemos es…, lo + adjetivo + que)",
        "Al menos un verbo de cambio (convertirse en, llegar a ser…)",
        "Estructura clara: situación, propuesta y beneficios"
      ],
      "modelAnswer": "Propuesta: intercambio de conversación. Muchos alumnos de nivel avanzado dicen que en clase hablan poco, ya que los grupos son grandes. Lo que proponemos es un intercambio semanal con estudiantes de la universidad que aprenden nuestro idioma. Las sesiones serían los jueves por la tarde en la biblioteca. Además, no supondrían ningún gasto, puesto que los voluntarios participarían gratis. Por lo tanto, el intercambio podría convertirse en una actividad fija de la escuela. Sabemos lo importante que es practicar fuera del aula; por eso esperamos contar con su apoyo.",
      "explanation": "Ya que y puesto que dan la causa, además añade y por lo tanto concluye. Lo que proponemos es… y lo importante que es ponen el foco, y podría convertirse en expresa el cambio que se espera."
    }
  ]
};
