// Synced from cheneygross-afk/lengo:src/lib/lessons/writing-tasks-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const C2_WRITING_TASKS: UnitWriting = {
  "legal-administrative-spanish-part-1-3": [
    {
      "type": "write",
      "prompt": "Escribe una breve crónica de tribunales para un periódico local sobre la sentencia que resuelve el pleito entre una vecina y su comunidad de propietarios por la instalación de un ascensor.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Vocabulario del proceso (demandante, demandado, sentencia, fallo, recurso…)",
        "Datos precisos: órgano judicial, plazos y partes",
        "Estilo periodístico objetivo, en tercera persona",
        "Mención de la notificación y de la posibilidad de recurrir"
      ],
      "modelAnswer": "El Juzgado de Primera Instancia n.º 4 de Valencia ha dado la razón a una vecina del barrio de Benimaclet en el litigio que la enfrentaba a su comunidad de propietarios. La demandante, una mujer de 78 años con movilidad reducida, reclamaba la instalación de un ascensor que la junta había rechazado en dos ocasiones. En la sentencia, notificada a las partes el pasado viernes, el juez estima íntegramente la demanda y condena a la comunidad demandada a ejecutar la obra en un plazo de seis meses. El fallo se apoya en la normativa de accesibilidad vigente, que obliga a realizar estas obras cuando las solicita un propietario mayor de setenta años. Contra la resolución cabe recurso de apelación ante la Audiencia Provincial en el plazo de veinte días hábiles. La comunidad ha declinado hacer declaraciones.",
      "explanation": "La crónica de tribunales traduce el proceso a un lenguaje periodístico sin perder precisión: la demandante y la comunidad demandada, la sentencia que estima la demanda, el fallo y el recurso de apelación. Los plazos (seis meses, veinte días hábiles) y la fórmula «contra la resolución cabe recurso» son propios del género."
    }
  ],
  "c2r-contrast-solidaria-mancomunada": [
    {
      "type": "write",
      "prompt": "Un amigo te cuenta que va a firmar como avalista en el préstamo de su cuñado. Escríbele un correo informal en el que le expliques, con ejemplos, la diferencia entre la responsabilidad solidaria y la mancomunada antes de que firme.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Definición clara de obligación solidaria y mancomunada",
        "Un ejemplo con cifras que muestre la diferencia",
        "Registro informal pero preciso (tuteo, conectores coloquiales)",
        "Un consejo concreto antes de firmar"
      ],
      "modelAnswer": "Hola, Dani: Antes de que firmes nada, léete bien el contrato, porque hay una palabra que lo cambia todo. Si la deuda es mancomunada, cada uno responde solo de su parte: si el préstamo es de 20.000 euros y sois dos, a ti solo te podrían reclamar 10.000. Pero si dice que respondéis de forma solidaria, el banco puede exigirte la deuda entera a ti solo, sin ir primero contra tu cuñado. Es decir, si él deja de pagar, el banco puede reclamarte a ti los 20.000 euros, y luego ya te tocaría a ti pelearte con él para recuperar lo que es suyo. Así que pregunta en el banco si es solidaria y, sobre todo, si renuncias a algún beneficio. Si tienes dudas, que te lo mire un abogado. Un abrazo, Marta",
      "explanation": "La obligación mancomunada divide la deuda entre los obligados; la solidaria permite al acreedor reclamar el total a cualquiera de ellos. El ejemplo con cifras y los conectores (es decir, así que) hacen accesible un concepto técnico sin perder exactitud."
    }
  ],
  "c2r-spiral-legal-subjunctive-participle": [
    {
      "type": "write",
      "prompt": "Eres abogado de una clienta cuya reforma lleva tres meses de retraso. Redacta el requerimiento formal que envía a la empresa constructora para exigir que termine la obra en un plazo determinado.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Al menos un participio absoluto (transcurrido el plazo, vistos los hechos…)",
        "Futuro deóntico para las obligaciones (deberá, se procederá…)",
        "Subjuntivo en la condición (en caso de que no…)",
        "Fórmulas del requerimiento (por medio del presente, a los efectos oportunos)"
      ],
      "modelAnswer": "Muy señores míos: Por medio del presente escrito, y en nombre de mi representada, D.ª Carmen Ortiz Lago, les comunico lo siguiente. Firmado el contrato de obra el 2 de marzo, la empresa se comprometió a finalizar la reforma de la vivienda sita en la calle Laurel, n.º 8, antes del 30 de junio. Transcurridos más de tres meses desde dicha fecha, las obras siguen sin concluir y la vivienda resulta inhabitable. En consecuencia, les requiero formalmente para que finalicen los trabajos pendientes en el plazo improrrogable de quince días naturales desde la recepción de esta carta. En caso de que no lo hicieran, se procederá a resolver el contrato y se reclamarán los daños y perjuicios ocasionados, incluidos los gastos de alojamiento de mi clienta. Lo que les comunico a los efectos oportunos. Atentamente, Julián Prieto Sanz, abogado",
      "explanation": "El requerimiento concentra estructuras del registro jurídico: participios absolutos (firmado el contrato, transcurridos más de tres meses), futuro deóntico e impersonal (se procederá, se reclamarán) y subjuntivo en la condición (en caso de que no lo hicieran). La fórmula final «lo que les comunico a los efectos oportunos» cierra el escrito."
    }
  ],
  "c2r-dialogue-lab-anamnesis": [
    {
      "type": "write",
      "prompt": "Escribe el diálogo entre una médica de familia y un paciente nuevo durante la anamnesis: antecedentes familiares y personales, alergias, medicación habitual y hábitos.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Preguntas profesionales de anamnesis (¿Tiene antecedentes de…?, ¿Es alérgico a algún medicamento?)",
        "Vocabulario técnico: antecedentes, alergia medicamentosa, patología, tratamiento crónico",
        "Respuestas del paciente con detalles concretos",
        "Registro formal (usted) coherente"
      ],
      "modelAnswer": "—Buenos días, señor Martín. Antes de explorarle, necesito hacerle unas preguntas. ¿Tiene antecedentes familiares de alguna enfermedad importante? —Sí, mi padre era diabético y mi madre tuvo un infarto a los sesenta años. —¿Y usted padece alguna patología crónica? —Tengo la tensión alta desde hace cinco años. —¿Toma alguna medicación de forma habitual? —Enalapril, un comprimido por la mañana. —¿Es alérgico a algún medicamento? —A la penicilina; me salió una erupción por todo el cuerpo. —Lo anoto, es muy importante. ¿Le han operado alguna vez? —Del apéndice, de niño. —¿Fuma o consume alcohol? —Dejé de fumar hace dos años; bebo una copa de vino los fines de semana. —Muy bien. ¿Hace ejercicio? —Camino una hora al día. —Perfecto. Ahora vamos a tomarle la tensión.",
      "explanation": "La anamnesis sigue un orden fijo: antecedentes familiares, patologías crónicas, medicación, alergias medicamentosas, intervenciones previas y hábitos. La médica usa preguntas cerradas y el usted profesional; el paciente responde con datos concretos (fármaco, dosis, reacción alérgica)."
    }
  ],
  "c2r-contrast-technical-colloquial-medical": [
    {
      "type": "write",
      "prompt": "Tu madre ha recibido un informe médico lleno de tecnicismos. Escribe un correo a tu hermano, que vive fuera, explicándole en lenguaje llano lo que dice el informe y qué tiene que hacer ella a partir de ahora.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos tres tecnicismos del informe con su equivalente coloquial (cefalea = dolor de cabeza…)",
        "Registro familiar y cercano",
        "Explicación del diagnóstico y del tratamiento sin perder precisión",
        "Un tono tranquilizador sin minimizar el problema"
      ],
      "modelAnswer": "Hola, Pablo: Ya tenemos el informe de mamá y te lo traduzco, porque está escrito en jerga médica. Dice que tiene «hipertensión arterial», o sea, la tensión alta, y que eso explica la «cefalea» de las últimas semanas, que no es más que dolor de cabeza. También habla de «disnea de esfuerzo»: se ahoga un poco al subir escaleras. Lo de la «ausencia de alteraciones en el electrocardiograma» es una buena noticia: el corazón está bien. Le han recetado una pastilla diaria para la tensión y tiene que comer con menos sal y caminar media hora al día. No es grave, pero tiene que tomárselo en serio y volver a control dentro de un mes. Ya te iré contando. Un beso, Lucía",
      "explanation": "El correo pasa del registro técnico al coloquial: hipertensión arterial = tensión alta, cefalea = dolor de cabeza, disnea de esfuerzo = ahogarse al subir escaleras. Las comillas marcan las palabras del informe y o sea introduce la reformulación."
    }
  ],
  "c2r-idioms-register-choice": [
    {
      "type": "write",
      "prompt": "Un amigo te escribe diciendo que quiere dejar el máster a mitad de curso porque está agotado. Contéstale con un mensaje informal en el que le animes a seguir, usando modismos propios de un registro coloquial.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Al menos cuatro modismos coloquiales bien integrados (tirar la toalla, estar hasta las narices…)",
        "Registro informal coherente (tuteo, exclamaciones)",
        "Empatía con la situación del amigo",
        "Un consejo concreto"
      ],
      "modelAnswer": "¡Pero bueno, Andrés! Entiendo que estés hasta las narices, porque llevas meses a tope, pero no tires la toalla ahora que te quedan tres meses. Lo más difícil ya está hecho. Todos hemos metido la pata con algún trabajo y no pasa nada. Mi consejo: tómate el fin de semana libre, desconecta y el lunes vuelves con las pilas cargadas. Si quieres, quedamos el sábado, te invito a unas cañas y lo hablamos con calma. ¡Tú puedes con esto y con más!",
      "explanation": "Los modismos coloquiales (estar hasta las narices, estar a tope, tirar la toalla, meter la pata, cargar las pilas) son adecuados entre amigos, pero estarían fuera de lugar en un correo profesional. El registro informal se mantiene con el tuteo y las exclamaciones."
    }
  ],
  "c2r-idioms-dialogue-lab": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo entre dos compañeros de piso que discuten porque uno nunca limpia la cocina. Ambos deben usar modismos de forma natural.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Al menos cinco modismos distintos, con su forma fija",
        "Turnos de palabra realistas con réplica y contrarréplica",
        "Una resolución o acuerdo final",
        "Ningún calco del inglés"
      ],
      "modelAnswer": "—Carlos, esto ya pasa de castaño oscuro. La cocina lleva una semana hecha un desastre. —Venga, no te pongas así, que tampoco es para tanto. —¿Que no es para tanto? Siempre me toca a mí fregar, y estoy hasta la coronilla. —Vale, vale, reconozco que he metido la pata, pero con los exámenes no tengo tiempo ni para respirar. —Eso es lo que dices siempre. Me estás tomando el pelo. —Te lo juro. Mira, vamos a hacer borrón y cuenta nueva: yo limpio esta semana y la que viene. —¿Me lo prometes? —Palabra. Y para que no se me olvide, hacemos un cuadrante y lo colgamos en la nevera. —Trato hecho. Pero como no lo cumplas, te cantaré las cuarenta.",
      "explanation": "Los modismos mantienen su forma fija: pasar de castaño oscuro, estar hasta la coronilla, meter la pata, tomar el pelo, hacer borrón y cuenta nueva, cantar las cuarenta. En el diálogo funcionan como réplica y contrarréplica, y el acuerdo final cierra el conflicto."
    }
  ],
  "c2r-proverbs-complete": [
    {
      "type": "write",
      "prompt": "Escribe una breve fábula o anécdota cuya moraleja sea un refrán. El refrán debe aparecer completo al final y su sentido debe desprenderse de la historia.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Una narración breve en pasado con planteamiento, nudo y desenlace",
        "Un refrán citado completo y literalmente, con sus dos mitades",
        "Coherencia entre la historia y la enseñanza del refrán",
        "Una fórmula para introducir la moraleja"
      ],
      "modelAnswer": "Había en mi pueblo un panadero que se levantaba a las cuatro de la mañana para tener el pan listo antes que nadie. Su vecino, que también tenía horno, se reía de él: «¿Para qué tanto esfuerzo, si la gente compra igual?». Durante años, el vecino abrió tarde, cerró pronto y vivió tranquilo. Pero un invierno llegó al pueblo una cadena de supermercados con pan barato a todas horas. El panadero madrugador ya tenía una clientela fiel que lo prefería a cualquier otro; el vecino, en cambio, tuvo que cerrar en pocos meses. Cuando le preguntaron qué había pasado, se encogió de hombros. Su mujer, más sabia, lo resumió así: cría fama y échate a dormir.",
      "explanation": "La historia ilustra el refrán «Cría fama y échate a dormir»: la buena reputación ganada con esfuerzo protege después. El refrán se cita completo, con su estructura bimembre, y se introduce con una fórmula (lo resumió así)."
    }
  ],
  "c2r-proverbs-mission-advice": [
    {
      "type": "write",
      "prompt": "Eres la autora del consultorio de una revista. Una lectora te escribe porque no se decide entre aceptar un trabajo seguro en su ciudad o arriesgarse con una oferta en el extranjero. Respóndele con consejos apoyados en al menos tres refranes.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos tres refranes bien citados, uno de ellos solo con su primera mitad",
        "Fórmulas para introducirlos (como dice el refrán, ya sabes lo que dicen…)",
        "Consejos argumentados, no solo refranes",
        "Registro de consultorio: cercano pero respetuoso"
      ],
      "modelAnswer": "Querida Elena: Entiendo tus dudas, porque ninguna de las dos opciones es mala. Tu familia te dirá que más vale pájaro en mano que ciento volando, y no le falta razón: un contrato fijo no se encuentra todos los días. Sin embargo, tienes veintiocho años y ninguna atadura, y ya sabes lo que dicen: quien no se arriesga… Una experiencia en el extranjero puede abrirte puertas que aquí tardarían años en aparecer. Antes de decidirte, haz números, pregunta a quien haya trabajado en esa empresa y comprueba si podrías volver dentro de un tiempo. Como dice el refrán, a grandes males, grandes remedios, pero tu situación no es ningún mal: es una oportunidad. Elijas lo que elijas, hazlo sin miedo. Un abrazo, Marisa",
      "explanation": "Los refranes se integran con fórmulas (tu familia te dirá que…, ya sabes lo que dicen, como dice el refrán) y uno se cita solo a medias (quien no se arriesga…, no cruza el río), porque el lector conoce la segunda parte. Los refranes contradictorios reflejan las dos opciones del dilema."
    }
  ],
  "c2r-humor-irony-contrast": [
    {
      "type": "write",
      "prompt": "Escribe una reseña irónica en una web de viajes sobre un hotel que resultó ser un desastre. La ironía debe ser amable o mordaz, pero debe entenderse que la crítica es negativa.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Ironía sostenida: elogios que significan lo contrario",
        "Al menos un momento de sarcasmo más hiriente, bien distinguido de la ironía amable",
        "Datos concretos que permitan descodificar la ironía",
        "Una valoración final clara"
      ],
      "modelAnswer": "Hotel Brisa Marina, una experiencia inolvidable. Lo de «a cinco minutos de la playa» es rigurosamente cierto, siempre que uno vaya en coche y no haya tráfico. La habitación era tan acogedora que, si estirabas los brazos, tocabas las dos paredes. Agradecí especialmente el sistema de despertador natural: las obras de al lado empezaban puntualmente a las siete. El desayuno ofrecía una gran variedad de productos: pan de ayer, pan de anteayer y café. Y qué decir del personal de recepción, siempre tan atento a su móvil. En resumen, una estancia que no olvidaremos por mucho que lo intentemos. Si buscan un hotel para unas vacaciones relajantes, sigan buscando. Una estrella, porque no se pueden poner cero.",
      "explanation": "La ironía elogia lo que se critica (tan acogedora, despertador natural, gran variedad), y los datos concretos permiten descodificarla. El sarcasmo, más hiriente, aparece en «siempre tan atento a su móvil» y en «no olvidaremos por mucho que lo intentemos». La valoración final elimina cualquier ambigüedad."
    }
  ],
  "c2r-humor-regional-styles": [
    {
      "type": "write",
      "prompt": "Escribe un breve artículo para un blog cultural que presente a los lectores varios estilos de humor del mundo hispano y explique en qué se diferencian, con un ejemplo de cada uno.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Al menos tres estilos regionales con su nombre (retranca, choteo, albur, humor seco…)",
        "Una definición precisa de cada uno",
        "Un ejemplo breve que ilustre cada estilo",
        "Estructura de artículo divulgativo con introducción y cierre"
      ],
      "modelAnswer": "Se suele decir que el humor es lo último que se aprende de un idioma, y en español hay mucho que aprender. En Galicia reina la retranca, una ironía socarrona y ambigua: si preguntas a un gallego si va a llover, lo más probable es que te conteste «depende», y nunca sabrás si habla en serio. En Cuba, el choteo convierte en broma hasta lo más solemne, ya sea un discurso oficial o un funeral, como forma de quitar hierro a la vida. En México, el albur es un duelo verbal de dobles sentidos, a menudo picantes, en el que gana quien deja al otro sin respuesta. Y en Castilla abunda el humor seco: se dice la mayor barbaridad con la cara más seria del mundo. Entender estos estilos es, en el fondo, entender cómo se ríe cada comunidad.",
      "explanation": "El artículo presenta cada estilo con su nombre propio, una definición y un ejemplo: la retranca (ambigüedad socarrona), el choteo (burla de lo solemne), el albur (duelo de dobles sentidos) y el humor seco (seriedad aparente). La introducción y el cierre enmarcan la información."
    }
  ],
  "c2r-figurative-metaphor-simile": [
    {
      "type": "write",
      "prompt": "Escribe una postal a una amiga desde un pueblo de costa en otoño. Describe el lugar usando al menos un símil, una metáfora pura (sin «como») y una metáfora lexicalizada.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Al menos un símil con «como» o «parece»",
        "Al menos una metáfora pura que intensifique el símil",
        "Una metáfora lexicalizada de uso común (el pie de la montaña, la falda del monte…)",
        "Formato de postal: saludo, descripción, despedida"
      ],
      "modelAnswer": "Querida Inés: Te escribo desde Cudillero, que en otoño es otro pueblo. Las casas, pintadas de colores, bajan por la ladera como un rebaño que quisiera beber en el puerto. Por las tardes, el mar es una lámina de plomo y las gaviotas, puntadas blancas que lo cosen al cielo. He subido hasta la falda del monte para ver el atardecer y, desde allí, las barcas parecen juguetes olvidados en la orilla. Apenas quedan turistas y el silencio se oye. Te echo de menos. Un abrazo enorme, Teresa",
      "explanation": "El símil compara de forma explícita (como un rebaño, parecen juguetes); la metáfora pura identifica sin nexo (el mar es una lámina de plomo, las gaviotas, puntadas blancas). «La falda del monte» es una metáfora lexicalizada: ya no se percibe como figura."
    }
  ],
  "c2r-figurative-spiral-literature": [
    {
      "type": "write",
      "prompt": "Escribe un breve comentario de texto sobre estos versos de Quevedo: «Es hielo abrasador, es fuego helado, / es herida que duele y no se siente». Identifica las figuras y explica su efecto.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Identificación de al menos tres figuras (oxímoron, antítesis, anáfora, paradoja, metáfora)",
        "Explicación del efecto de cada figura, no solo su nombre",
        "Vocabulario crítico (el poeta recurre a, subraya, pone de relieve…)",
        "Una conclusión sobre el sentido del fragmento"
      ],
      "modelAnswer": "En estos versos, Quevedo intenta definir el amor y descubre que solo puede hacerlo mediante contradicciones. El poeta recurre al oxímoron en «hielo abrasador» y «fuego helado», donde el adjetivo niega la cualidad esencial del sustantivo. Ambas expresiones forman además una antítesis cruzada, pues el frío y el calor intercambian sus papeles. La anáfora de «es», repetida al comienzo de cada definición, crea un ritmo insistente, casi obsesivo, que pone de relieve la imposibilidad de dar con la palabra exacta. Por último, «herida que duele y no se siente» es una paradoja: una afirmación aparentemente absurda que encierra una verdad sobre la experiencia amorosa. En conjunto, las figuras subrayan que el amor es una vivencia contradictoria que escapa a la lógica.",
      "explanation": "El comentario no se limita a nombrar las figuras (oxímoron, antítesis, anáfora, paradoja), sino que explica su efecto. Los verbos del vocabulario crítico (recurre a, pone de relieve, subrayan) y la conclusión relacionan la forma con el sentido del poema."
    }
  ],
  "euphemisms-indirect-1": [
    {
      "type": "write",
      "prompt": "Tus amigos te proponen un viaje caro y no puedes permitírtelo. Escríbeles un mensaje en el grupo para rechazar la invitación sin decir abiertamente que no tienes dinero.",
      "minWords": 50,
      "maxWords": 110,
      "rubric": [
        "Al menos tres eufemismos del dinero (estar en números rojos, apretarse el cinturón, andar justo…)",
        "Un rechazo indirecto pero inequívoco",
        "Una propuesta alternativa",
        "Tono cercano y desenfadado"
      ],
      "modelAnswer": "¡Chicos, qué planazo! Me encantaría apuntarme, de verdad, pero este mes ando un poco justa: entre la mudanza y el arreglo del coche, la cuenta está en números rojos. Me toca apretarme el cinturón una temporada, así que esta vez lo voy a dejar pasar. Eso sí, quiero fotos de todo. Y cuando volváis, ¿qué os parece si hacemos una cena en mi casa y me lo contáis con detalle? Yo pongo el vino.",
      "explanation": "Los eufemismos suavizan la falta de dinero (andar justa, estar en números rojos, apretarse el cinturón), y «lo voy a dejar pasar» rechaza la invitación sin un «no» explícito. La propuesta alternativa mantiene la relación."
    }
  ],
  "c2r-euphemism-mission-condolences": [
    {
      "type": "write",
      "prompt": "Un compañero de trabajo acaba de perder a su padre. Escríbele una tarjeta de condolencia con tacto, usando eufemismos para referirte a la muerte.",
      "minWords": 50,
      "maxWords": 110,
      "rubric": [
        "Al menos dos eufemismos de la muerte (nos ha dejado, su pérdida, descansar en paz…)",
        "Fórmulas de condolencia (te acompaño en el sentimiento, mi más sentido pésame…)",
        "Un recuerdo o detalle personal",
        "Un ofrecimiento concreto de ayuda"
      ],
      "modelAnswer": "Querido Alberto: Me he enterado esta mañana de que tu padre nos ha dejado y quería hacerte llegar mi más sentido pésame. Recuerdo con cariño el día que vino a recogerte a la oficina y se quedó media hora charlando con todos; se notaba lo orgulloso que estaba de ti. Siento mucho tu pérdida. No te preocupes por el trabajo: Marta y yo nos encargamos de tus proyectos todo el tiempo que necesites. Si te apetece hablar o simplemente tomar un café, aquí me tienes. Un fuerte abrazo para ti y tu familia, Sergio",
      "explanation": "Los eufemismos (nos ha dejado, tu pérdida) evitan nombrar la muerte de forma directa. La fórmula «mi más sentido pésame», el recuerdo personal y el ofrecimiento concreto convierten la tarjeta en algo más que un trámite."
    }
  ],
  "c2r-exclamations-dialogue-reactions": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo en el que una persona cuenta a su amiga varias noticias seguidas (unas buenas y otras malas) y la amiga reacciona a cada una con la exclamación adecuada.",
      "minWords": 70,
      "maxWords": 130,
      "rubric": [
        "Al menos cinco exclamaciones con funciones distintas (sorpresa, acuerdo, fastidio, resignación, negativa)",
        "Exclamaciones adecuadas a cada noticia",
        "Intensidad graduada según la situación",
        "Registro coloquial coherente"
      ],
      "modelAnswer": "—¿Sabes qué? Me han dado el trabajo en Barcelona. —¡No me digas! ¡Enhorabuena! —Gracias. Lo malo es que tengo que empezar dentro de dos semanas. —¡Vaya tela! ¿Y el piso? —Pues ese es el problema: los alquileres allí están por las nubes. —Ya te digo. Mi prima paga mil euros por un estudio. —¿Y sabes lo peor? Que Javi no quiere venirse. —¡Anda ya! ¿En serio? —En serio. Dice que no deja su trabajo ni loco. —Bueno, ¡qué le vamos a hacer! Ya lo iréis hablando. —¿Y tú me ayudarías con la mudanza? —¡Y tanto! Cuenta conmigo.",
      "explanation": "Cada exclamación cumple una función: sorpresa (¡No me digas!, ¡Anda ya!), fastidio (¡Vaya tela!), acuerdo enfático (Ya te digo, ¡Y tanto!) y resignación (¡qué le vamos a hacer!). «Ni loco» gradúa una negativa rotunda."
    }
  ],
  "c2r-diminutive-values": [
    {
      "type": "write",
      "prompt": "Describe para un blog personal la casa de tu abuela en el pueblo. Usa diminutivos y aumentativos con distintos valores: cariño, cortesía, ironía y admiración.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Diminutivos afectivos (casita, cafecito…)",
        "Al menos un diminutivo irónico o despectivo",
        "Aumentativos o -azo de tamaño, admiración o golpe",
        "Descripción organizada del lugar"
      ],
      "modelAnswer": "La casa de mi abuela es una casita blanca al final del pueblo, con un patio lleno de macetas. Nada más entrar, te ofrece un cafecito y unas pastas, y siempre te dice que te sientes «un momentito», aunque luego te quedas toda la tarde. La cocina es pequeñita, pero de ella sale cada guisazo que da gusto. En el patio duerme Tobi, un perrazo enorme que solo sabe mover la cola. Mi tío dice que ha hecho «una reformita» en el baño, pero en realidad pegó dos azulejos torcidos. Y cuando sopla el viento, la puerta del corral se cierra de un portazo que asusta a todos. Es el lugar del mundo donde mejor duermo.",
      "explanation": "Los diminutivos expresan cariño (casita, cafecito, pequeñita), cortesía (un momentito) o ironía (una reformita). Los aumentativos indican admiración (guisazo), tamaño (perrazo) o golpe (portazo)."
    }
  ],
  "business-idioms-1": [
    {
      "type": "write",
      "prompt": "Tras una reunión en la que se aprobó un proyecto arriesgado, escribe un correo a tu equipo para contarles la decisión y motivarlos. Usa modismos del español profesional.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Al menos cuatro modismos empresariales (poner las cartas sobre la mesa, dar el visto bueno, apostar fuerte, sacar adelante…)",
        "Información clara: qué se ha decidido y qué se espera del equipo",
        "Registro profesional pero cercano",
        "Un cierre motivador"
      ],
      "modelAnswer": "Hola a todos: Os escribo con buenas noticias: la dirección ha dado luz verde al lanzamiento de la aplicación en Latinoamérica. No ha sido fácil, porque había quien pensaba que era tirarse a la piscina, pero al final hemos conseguido que nos den un voto de confianza. Ahora la pelota está en nuestro tejado. Tenemos tres meses para tener la versión lista, así que toca ponerse las pilas desde el lunes. Esta semana os enviaré el calendario con las tareas de cada uno. Sé que es un reto, pero también una oportunidad para demostrar de qué somos capaces. Si remamos todos en la misma dirección, lo sacaremos adelante. Un saludo, Nuria",
      "explanation": "Los modismos empresariales (dar luz verde, tirarse a la piscina, dar un voto de confianza, tener la pelota en el tejado, ponerse las pilas, remar en la misma dirección) aportan expresividad sin restar profesionalidad. El correo combina la información concreta con un cierre motivador."
    }
  ],
  "c1c2-vocabulary-practice-13": [
    {
      "type": "write",
      "prompt": "Escribe el breve discurso que pronuncia la directora en la cena anual de la empresa para agradecer el trabajo del año. Usa al menos cuatro locuciones cultas (en aras de, a ultranza, a destajo, de consuno, a la zaga…).",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos cuatro locuciones cultas bien usadas",
        "Estructura de discurso: saludo, balance, agradecimiento, brindis",
        "Registro formal pero cálido",
        "Datos concretos del año"
      ],
      "modelAnswer": "Queridos compañeros: Hace un año, muchos dudaban de que pudiéramos superar la crisis del sector. Hoy puedo decir, con orgullo, que hemos cerrado el ejercicio con un crecimiento del doce por ciento. Ese resultado no es fruto de la suerte. Durante meses, el equipo de producción trabajó a destajo para cumplir los plazos, y los departamentos de ventas y logística actuaron de consuno, como pocas veces había visto. En aras de la transparencia, os diré que también hubo errores, pero supimos corregirlos a tiempo. Ya no vamos a la zaga de la competencia: hoy marcamos el paso. Defenderé a ultranza que nuestro mayor activo sois vosotros. Por eso os pido que levantéis la copa: por el año que termina y por el que empieza. ¡Salud!",
      "explanation": "Las locuciones elevan el registro: a destajo (con mucho esfuerzo y rapidez), de consuno (de común acuerdo), en aras de (en beneficio de), a la zaga (detrás), a ultranza (con firmeza absoluta). El discurso sigue una estructura clara que culmina en el brindis."
    }
  ],
  "c2r-strategy-infer-unknown-word": [
    {
      "type": "write",
      "prompt": "Escribe una entrada de tu diario de aprendizaje en la que cuentes cómo, leyendo una novela, encontraste una palabra desconocida y conseguiste deducir su significado sin diccionario.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Narración en primera persona con marcas de diario (fecha, reflexión)",
        "Pistas usadas: contexto, morfología y tono",
        "La palabra desconocida y la hipótesis sobre su significado",
        "Una conclusión sobre la estrategia"
      ],
      "modelAnswer": "Martes, 14 de marzo. Hoy, leyendo una novela de Delibes, me he topado con la palabra «zascandil». El narrador decía que el sobrino era un zascandil que no paraba quieto y nunca terminaba nada. En lugar de buscarla, he intentado deducirla. El contexto me daba la primera pista: alguien inquieto e informal. El tono, además, era burlón pero cariñoso, así que no podía ser un insulto grave. Por la forma, me sonaba a palabra coloquial y antigua. Mi hipótesis: una persona enredadora, poco seria. Después lo he comprobado en el diccionario y había acertado casi del todo. Conclusión: merece la pena arriesgarse antes de consultar, porque así la palabra se queda grabada.",
      "explanation": "La entrada aplica las estrategias de inferencia: el contexto (no paraba quieto), el tono (burlón pero cariñoso) y la forma de la palabra. El pretérito perfecto (he intentado, he comprobado) sitúa los hechos en el día del diario."
    }
  ],
  "listening-reading-strategies-3": [
    {
      "type": "write",
      "prompt": "Escribe un breve relato en el que, en mitad de una conversación, un personaje pasa del tú al usted (o del registro coloquial al formal) para marcar distancia. El cambio debe notarse y tener consecuencias.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Un cambio de registro claro dentro del diálogo (tú → usted, coloquial → formal)",
        "Una intención comunicativa reconocible (enfado, distancia, ironía)",
        "Narración que muestre la reacción del otro personaje",
        "Coherencia de los pronombres y las formas verbales"
      ],
      "modelAnswer": "Marina y su jefe llevaban diez años trabajando juntos y siempre se habían tuteado. Aquella tarde, él entró en su despacho sin llamar. —Oye, Marina, ¿te importa quedarte hoy hasta las nueve? Necesito el informe para mañana. —Hoy no puedo, Luis. Ya te dije que tengo médico. Él sonrió como si no la hubiera oído. —Venga, mujer, si es un momento. Marina se levantó despacio y cerró la carpeta. —Mire, señor Ortega: le informé de esta cita hace dos semanas, por escrito. Si necesita el informe, puede pedírselo a otra persona. Él se quedó inmóvil. En diez años, nunca lo había llamado de usted. Comprendió, demasiado tarde, que acababa de perder algo más que un informe.",
      "explanation": "El paso del tú (te dije) al usted (Mire, le informé, puede pedírselo) y del nombre de pila al apellido marca una distancia deliberada: es una forma de enfado contenido. La reacción del jefe muestra que el cambio de registro comunica tanto como las palabras."
    }
  ],
  "c2r-strategy-skim-scan": [
    {
      "type": "write",
      "prompt": "Una compañera de clase te pide consejo para el examen de comprensión lectora. Escríbele un correo explicándole qué estrategia de lectura conviene usar en cada tipo de tarea: captar la idea general, localizar un dato y analizar un detalle.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Las tres estrategias nombradas y diferenciadas (lectura global, lectura selectiva, lectura intensiva)",
        "Un ejemplo de tarea para cada estrategia",
        "Conectores que organicen los consejos",
        "Registro informal entre compañeros"
      ],
      "modelAnswer": "Hola, Clara: Lo más importante es que no leas todos los textos igual, porque no te dará tiempo. Si la pregunta es sobre la idea principal o el título más adecuado, haz una lectura global: lee el primer párrafo, la primera frase de cada párrafo y el final, sin detenerte en las palabras que no conozcas. En cambio, si te piden una fecha, una cifra o un nombre, no leas: barre el texto con la vista hasta encontrar el dato y solo entonces lee la frase completa. Por último, para las preguntas sobre la actitud del autor o el sentido de una expresión, ahí sí tienes que leer despacio, fijándote en los adjetivos y en los conectores. Ya me contarás qué tal. ¡Mucha suerte! Pedro",
      "explanation": "El correo distingue la lectura global (captar la idea), la selectiva (localizar un dato) y la detallada (analizar actitud o matices), con un ejemplo de tarea para cada una. Los conectores (en cambio, por último) ordenan los consejos."
    }
  ],
  "c1c2-vocabulary-practice-14": [
    {
      "type": "write",
      "prompt": "Has escuchado en la radio una entrevista a una socióloga sobre el lenguaje de los jóvenes. Escribe un comentario en la web de la emisora en el que distingas los datos que aportó de sus opiniones y des tu propia valoración. Usa colocaciones cultas (albergar dudas, zanjar una polémica, sembrar la discordia…).",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Distinción explícita entre dato y opinión",
        "Al menos tres colocaciones cultas bien formadas",
        "Una valoración personal argumentada",
        "Registro cuidado propio de un comentario público"
      ],
      "modelAnswer": "Escuché con interés la entrevista de ayer a la socióloga Laura Benítez. Conviene separar lo que aportó como dato de lo que expresó como opinión. Los datos son claros: según su estudio, el ochenta por ciento de los adolescentes encuestados usa a diario anglicismos en sus mensajes. Su opinión, en cambio, es que eso no empobrece el idioma, sino que lo renueva. Confieso que albergo algunas dudas al respecto: una cosa es incorporar palabras nuevas y otra muy distinta perder las que ya tenemos. Aun así, creo que la entrevista tuvo el mérito de no sembrar la discordia entre generaciones, como suele ocurrir con este tema. No pretendo zanjar la polémica, pero sí pedir más estudios que comparen el vocabulario de los jóvenes de hoy con el de hace veinte años.",
      "explanation": "El comentario separa el dato (el ochenta por ciento de los encuestados) de la opinión (no empobrece el idioma, sino que lo renueva). Las colocaciones cultas (albergar dudas, sembrar la discordia, zanjar la polémica) elevan el registro y deben respetar su combinación fija."
    }
  ],
  "debate-persuasion-3": [
    {
      "type": "write",
      "prompt": "Un concejal ha declarado en la prensa que quienes se oponen a la nueva autopista «son los mismos que quieren volver a las cavernas». Escribe una carta al director en la que identifiques las falacias de su argumento y las desmontes.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos dos falacias nombradas con su término técnico (ad hominem, hombre de paja, falso dilema…)",
        "Una explicación de por qué el razonamiento es tramposo",
        "Un contraargumento basado en hechos",
        "Formato de carta al director, con registro formal"
      ],
      "modelAnswer": "Señor director: Leo con asombro las declaraciones del concejal de Urbanismo sobre la nueva autopista. Según él, quienes nos oponemos al proyecto «somos los mismos que quieren volver a las cavernas». Se trata de un ejemplo de manual del hombre de paja: nadie ha defendido renunciar al progreso, sino cuestionar el trazado, que atraviesa un humedal protegido. Además, el concejal plantea un falso dilema, como si solo existieran dos opciones: esta autopista o el atraso. Hay alternativas, como mejorar la línea de tren existente, que costaría la mitad. Y desacreditar a los vecinos en lugar de responder a sus argumentos es, simplemente, un ataque ad hominem. Pido al concejal que debata con datos y no con caricaturas. Atentamente, Ramón Gil Pardo (Burgos)",
      "explanation": "La carta nombra las falacias y explica el mecanismo de cada una: el hombre de paja deforma la postura del rival, el falso dilema reduce las opciones a dos y el ad hominem ataca a las personas en lugar de a sus argumentos. Los datos (el humedal, el coste del tren) sostienen la réplica."
    }
  ],
  "c2r-debate-disagree-scale": [
    {
      "type": "write",
      "prompt": "Un compañero propone en el chat del equipo eliminar el teletrabajo. Escríbele un correo en el que expreses tu desacuerdo con firmeza pero sin perder las formas, graduando el desacuerdo en los distintos puntos.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Al menos tres fórmulas de desacuerdo de distinta intensidad (matizaría, no comparto del todo, discrepo rotundamente)",
        "Reconocimiento de algún punto válido de la propuesta",
        "Argumentos concretos",
        "Registro profesional y respetuoso"
      ],
      "modelAnswer": "Hola, Íñigo: Gracias por abrir el debate; creo que es necesario. Comparto tu preocupación por la comunicación en el equipo, aunque matizaría la idea de que el teletrabajo sea su causa principal. Tampoco comparto del todo que la productividad haya bajado: los datos del último trimestre muestran que hemos cumplido todos los plazos. Donde discrepo rotundamente es en la propuesta de eliminarlo por completo. Varias personas del equipo viven a más de una hora de la oficina y han organizado su vida en función de este modelo. Propongo, en cambio, fijar dos días presenciales comunes para las reuniones. Me encantaría que lo comentáramos el lunes. Un saludo, Begoña",
      "explanation": "El desacuerdo se gradúa de menor a mayor intensidad: matizaría, no comparto del todo, discrepo rotundamente. Reconocer un punto válido (comparto tu preocupación) y proponer una alternativa mantiene las formas sin restar firmeza."
    }
  ],
  "c2r-debate-rhetorical-devices": [
    {
      "type": "write",
      "prompt": "Escribe una breve columna de opinión a favor de la semana laboral de cuatro días. Refuerza tu argumento con al menos una analogía, una tríada y un ejemplo concreto.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Una analogía que aclare el argumento",
        "Una tríada (tres elementos en serie) con efecto rítmico",
        "Un ejemplo concreto con datos",
        "Una tesis clara y un cierre contundente"
      ],
      "modelAnswer": "Durante un siglo hemos aceptado que la semana laboral tiene cinco días, como si fuera una ley de la naturaleza. No lo es. También la jornada de doce horas parecía inevitable y hoy nos resulta impensable. Trabajar más horas no significa trabajar mejor, del mismo modo que un estudiante no aprende más por pasar toda la noche delante de los libros: llega un punto en que el cansancio se come el esfuerzo. Los datos lo confirman. En el ensayo realizado en el Reino Unido en 2022, la mayoría de las empresas participantes mantuvo su productividad y decidió seguir con el modelo. Menos estrés, menos bajas, más talento: eso es lo que gana una empresa que se atreve. La pregunta ya no es si llegará la semana de cuatro días, sino quién se quedará atrás.",
      "explanation": "La analogía del estudiante hace visible el argumento; la tríada «menos estrés, menos bajas, más talento» condensa los beneficios con ritmo, y el ensayo británico de 2022 aporta el ejemplo concreto. El cierre con una antítesis (si llegará / quién se quedará atrás) refuerza la tesis."
    }
  ],
  "c2r-debate-spiral-subjunctive": [
    {
      "type": "write",
      "prompt": "Escribe un breve ensayo argumentativo, con argumentos a favor y en contra, sobre la implantación de una tasa turística en tu ciudad. Llega a una conclusión personal.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Subjuntivo tras negación de opinión (no creo que…, no es cierto que…)",
        "Al menos una oración concesiva (aunque, por mucho que, si bien)",
        "Una condicional irreal (si se hubiera…, habría…)",
        "Estructura de ensayo: planteamiento, argumentos a favor y en contra, conclusión"
      ],
      "modelAnswer": "La propuesta de cobrar una tasa a los turistas divide a la ciudad. Sus defensores sostienen que quien visita un lugar debe contribuir a mantenerlo: limpieza, transporte y patrimonio tienen un coste que hoy pagan solo los vecinos. Además, no parece que un euro o dos por noche vaya a disuadir a nadie de viajar. Los detractores, por su parte, temen que el sector hotelero pierda competitividad frente a otros destinos. Sin embargo, no es cierto que las ciudades que la aplican hayan perdido visitantes; Barcelona o Ámsterdam siguen recibiendo millones cada año. Por mucho que se critique, la tasa es una herramienta razonable, siempre que lo recaudado se destine a mejorar los barrios más afectados. Si se hubiera aplicado hace diez años, quizá hoy no habría tanto malestar vecinal.",
      "explanation": "El ensayo usa la gramática del debate: subjuntivo tras negación (no parece que vaya, no es cierto que hayan perdido), una concesiva (por mucho que se critique), una condicional (siempre que se destine) y una condicional irreal de pasado (si se hubiera aplicado…, no habría). La conclusión toma partido tras presentar ambas posturas."
    }
  ],
  "c2r-negotiation-counteroffer": [
    {
      "type": "write",
      "prompt": "Una empresa te ha ofrecido un puesto, pero el sueldo es inferior a lo que esperabas. Escribe el correo en el que agradeces la oferta, justificas tu postura y planteas una contraoferta que deje margen de maniobra.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Agradecimiento e interés explícito por el puesto",
        "Justificación objetiva de la contraoferta (experiencia, mercado)",
        "Una contraoferta concreta con alternativas (teletrabajo, formación, revisión salarial)",
        "Condicional de cortesía y atenuación"
      ],
      "modelAnswer": "Estimada Sra. Valdés: Muchas gracias por la oferta para el puesto de responsable de comunicación. Quiero confirmarle que el proyecto me entusiasma y que me encantaría incorporarme al equipo. No obstante, me gustaría plantearle una cuestión sobre la retribución. Teniendo en cuenta mis ocho años de experiencia en el sector y los salarios de referencia para puestos similares, la cifra propuesta queda algo por debajo de mis expectativas. Le propondría una retribución de 42.000 euros brutos anuales. Si esta cantidad no encajara en el presupuesto actual, estaría dispuesta a valorar alternativas, como dos días de teletrabajo semanales o una revisión salarial a los seis meses vinculada a objetivos. Confío en que podamos llegar a un acuerdo satisfactorio para ambas partes. Reciba un cordial saludo, Ana Ruiz",
      "explanation": "La contraoferta agradece antes de pedir, justifica con datos objetivos (experiencia, salarios de referencia) y ofrece alternativas para no cerrar la negociación. El condicional de cortesía (me gustaría, le propondría, estaría dispuesta) y el subjuntivo condicional (si no encajara) suavizan la petición."
    }
  ],
  "c2r-negotiation-deadlock": [
    {
      "type": "write",
      "prompt": "Escribe el diálogo entre dos responsables de compras de empresas distintas cuya negociación se ha atascado en el precio. Uno de ellos consigue desbloquearla reformulando, buscando intereses comunes y proponiendo una nueva opción.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Una reformulación de la postura del otro (si no le he entendido mal…)",
        "La identificación de un interés común",
        "Una propuesta nueva que desbloquee la negociación",
        "Registro profesional y fórmulas de atenuación"
      ],
      "modelAnswer": "—Lo siento, pero no podemos bajar de doce euros por unidad. Es nuestro último precio. —Entiendo. Si no le he entendido mal, lo que a ustedes les preocupa no es tanto el precio unitario como asegurar el volumen de producción durante todo el año, ¿no es así? —Exacto. Nuestras máquinas no pueden estar paradas en verano. —Pues ahí tenemos un interés común, porque a nosotros nos conviene tener suministro estable. ¿Y si cambiamos el planteamiento? Nos comprometemos a un pedido mínimo mensual durante dos años y, a cambio, ustedes nos aplican diez euros por unidad. —Mmm… Con un compromiso de volumen, quizá podríamos llegar a diez cincuenta. —Si incluyen el transporte, lo aceptamos. —De acuerdo. Lo pondremos por escrito esta misma semana.",
      "explanation": "El punto muerto se supera con tres técnicas: la reformulación (si no le he entendido mal…), la búsqueda del interés común (un suministro estable para ambos) y una nueva opción (pedido mínimo a cambio de precio). La pregunta «¿y si cambiamos el planteamiento?» abre el margen de maniobra."
    }
  ],
  "c2r-present-qa-session": [
    {
      "type": "write",
      "prompt": "Escribe la ronda de preguntas que sigue a la presentación de un nuevo producto ante la prensa. El presentador debe responder a preguntas difíciles: ganar tiempo, reconocer lo que no sabe y redirigir sin evadir.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Una fórmula para ganar tiempo (es una buena pregunta, permítame que…)",
        "Un reconocimiento honesto de lo que no se sabe, con un compromiso",
        "Una redirección que no evada la pregunta",
        "Registro formal y seguro"
      ],
      "modelAnswer": "—¿Por qué su patinete cuesta el doble que el de la competencia? —Es una pregunta muy pertinente. Permítame que la responda con un dato: nuestra batería dura tres veces más, y eso, a lo largo de cinco años, supone un ahorro considerable para el usuario. —¿Cuántas unidades esperan vender el primer año? —Le seré sincero: todavía no tenemos una previsión cerrada, porque dependerá de los acuerdos con los distribuidores. En cuanto la tengamos, se la haremos llegar a todos los medios. —¿Es cierto que la fábrica de Asia tiene problemas laborales? —Entiendo la preocupación, y es legítima. Nuestras fábricas pasan auditorías independientes cada año, y los informes son públicos en nuestra web. Lo que sí puedo decirle es que no trabajaremos con ningún proveedor que no las supere.",
      "explanation": "El presentador gana tiempo (es una pregunta muy pertinente, permítame que…), reconoce lo que no sabe y se compromete a informar (le seré sincero, en cuanto la tengamos…) y redirige hacia hechos verificables sin eludir la pregunta incómoda (las auditorías independientes)."
    }
  ],
  "presentations-negotiation-8": [
    {
      "type": "write",
      "prompt": "Cuenta a un amigo, en un correo informal, cómo negociaste la compra de un coche de segunda mano. Usa el vocabulario de la táctica negociadora: estrategia de anclaje, cesión mutua, límite infranqueable, as bajo la manga…",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos cuatro términos de la táctica negociadora bien usados",
        "Narración ordenada en pasado",
        "Registro informal y tono anecdótico",
        "Un desenlace claro: el acuerdo alcanzado"
      ],
      "modelAnswer": "¡Hola, Rober! Ya tengo coche, y te cuento cómo lo conseguí, porque me siento como un negociador profesional. El vendedor pedía 9.000 euros, una clásica estrategia de anclaje para que todo lo demás nos pareciera barato. Yo ya había decidido que mi límite infranqueable eran 8.000, pero no se lo dije, claro. Primero sondeé sus intenciones: me contó que se mudaba al extranjero y necesitaba venderlo pronto. Entonces saqué mi as bajo la manga: tenía visto otro coche parecido, a 7.800. Él bajó a 8.200 y yo subí a 7.500. Al final llegamos a una cesión mutua: 7.700, con las ruedas nuevas incluidas. Un trato beneficioso para ambas partes, como dicen los manuales. Este finde te llevo a dar una vuelta. Un abrazo, Hugo",
      "explanation": "La anécdota usa el vocabulario técnico en un registro informal: la estrategia de anclaje (un primer precio alto), el límite infranqueable, sondear las intenciones, el as bajo la manga y la cesión mutua. La narración en pretérito indefinido sigue el orden de la negociación hasta el acuerdo."
    }
  ],
  "c2r-cite-attribution-verbs": [
    {
      "type": "write",
      "prompt": "Escribe una breve noticia sobre un congreso en el que tres expertos discreparon sobre el uso de la inteligencia artificial en las aulas. Recoge sus opiniones con verbos de atribución que transmitan la actitud de cada uno.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos cuatro verbos de atribución distintos y bien elegidos (sostiene, advierte, admite, reconoce, insinúa…)",
        "Al menos una cita textual entre comillas y una indirecta",
        "Estructura de noticia: qué, quién, dónde y cuándo al principio",
        "Neutralidad del periodista, salvo en la elección de los verbos"
      ],
      "modelAnswer": "El uso de la inteligencia artificial en las aulas centró ayer el debate en el Congreso de Educación celebrado en Zaragoza. La pedagoga Irene Sáez sostuvo que estas herramientas «pueden personalizar el aprendizaje como nunca antes», aunque admitió que la mayoría de los docentes no ha recibido formación para usarlas. El catedrático Andrés Molina, más escéptico, advirtió de que los alumnos corren el riesgo de delegar en la máquina el esfuerzo de pensar. Por su parte, el inspector Jorge Llamas insinuó que algunas editoriales tienen intereses comerciales en promover su implantación, una acusación que los representantes del sector negaron tajantemente. Los tres coincidieron, eso sí, en que urge una regulación clara.",
      "explanation": "Los verbos de atribución no son neutros: sostener presenta una tesis firme, admitir una concesión, advertir un riesgo e insinuar una acusación velada. La cita textual va entre comillas y la indirecta se integra con «de que» o «que», según el verbo."
    }
  ],
  "c2r-cite-plagiarism-paraphrase": [
    {
      "type": "write",
      "prompt": "Eres profesor universitario. Un alumno ha entregado un trabajo con un párrafo copiado casi literalmente de un artículo, cambiando solo algunas palabras. Escríbele un correo explicándole por qué es plagio y cómo debe corregirlo.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Explicación clara de la diferencia entre paráfrasis legítima y plagio encubierto",
        "Pautas concretas para corregir el párrafo (citar, reformular, atribuir)",
        "Registro formal pero constructivo",
        "Mención de la fuente y del formato de cita"
      ],
      "modelAnswer": "Estimado Daniel: He leído con atención tu trabajo sobre la despoblación rural y quería comentarte un problema importante. El segundo párrafo reproduce casi palabra por palabra un fragmento del artículo de García (2019); solo has sustituido algunos términos por sinónimos y has cambiado el orden de dos frases. Aunque no fuera tu intención, esto constituye un plagio encubierto, porque presentas como propias la estructura y las ideas de otro autor sin citarlo. Para corregirlo tienes dos opciones: si la formulación original es especialmente precisa, cítala entre comillas, con el autor, el año y la página; si no, reformula la idea con tu propia estructura y añade la referencia, por ejemplo: «Según García (2019)…». Puedes entregarme la versión corregida antes del viernes. Un saludo, Prof. Luis Herrero",
      "explanation": "El correo distingue la paráfrasis legítima, que reformula con estructura propia y cita la fuente, del plagio encubierto, que solo cambia palabras sueltas. Las pautas (comillas con autor, año y página, o reformulación con «Según García (2019)…») son concretas y el tono es formal pero constructivo."
    }
  ],
  "c2r-cite-mission-lit-review": [
    {
      "type": "write",
      "prompt": "Escribe el párrafo del estado de la cuestión de un trabajo académico sobre los efectos de las redes sociales en la autoestima adolescente. Integra tres fuentes (pueden ser inventadas): coincidencias, discrepancias y el hueco que tu investigación pretende cubrir.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Tres fuentes citadas con autor y año",
        "Conectores que señalen coincidencia y discrepancia (en la misma línea, por el contrario…)",
        "Identificación explícita del hueco de investigación",
        "Registro académico impersonal"
      ],
      "modelAnswer": "Los efectos de las redes sociales en la autoestima adolescente han suscitado un interés creciente en la última década. Martínez (2018) observó una correlación negativa entre el tiempo de uso diario y la satisfacción con la propia imagen, sobre todo en chicas de entre trece y dieciséis años. En la misma línea, Ortega y Ruiz (2020) atribuyen este efecto a la comparación constante con perfiles idealizados. Por el contrario, Salas (2021) sostiene que la relación depende del tipo de uso: la participación activa en comunidades de intereses comunes se asocia incluso a una mayor autoestima. Sin embargo, ninguno de estos estudios distingue entre plataformas basadas en la imagen y plataformas basadas en el texto. Precisamente ese es el hueco que el presente trabajo pretende cubrir.",
      "explanation": "El estado de la cuestión no enumera fuentes, sino que las relaciona: en la misma línea marca la coincidencia y por el contrario la discrepancia. El párrafo culmina en el hueco de investigación (ninguno de estos estudios distingue…), que justifica el trabajo propio."
    }
  ],
  "c2r-cite-spiral-reported-speech": [
    {
      "type": "write",
      "prompt": "Asististe a una conferencia en nombre de tu departamento. Escribe un breve informe para tus compañeros en el que transmitas en estilo indirecto lo que dijeron los ponentes.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Estilo indirecto con la correlación de tiempos correcta (dijo que había…, afirmó que sería…)",
        "Variedad de verbos introductores (explicó, recalcó, propuso, preguntó si…)",
        "Subjuntivo tras verbos de petición o consejo (recomendó que…)",
        "Estructura de informe con asunto y conclusión"
      ],
      "modelAnswer": "Asunto: conferencia sobre accesibilidad digital (Madrid, 12 de mayo). La primera ponente, Silvia Ramos, explicó que más del setenta por ciento de las páginas web públicas no cumplía todavía la normativa vigente y recalcó que la situación había empeorado en los dos últimos años. A continuación, el ingeniero Tomás Varela afirmó que la inteligencia artificial sería clave para generar descripciones automáticas de imágenes, aunque advirtió de que esas herramientas aún cometían errores graves. En el turno de preguntas, una asistente preguntó si existían ayudas para las pequeñas empresas, y Ramos respondió que el ministerio las anunciaría en otoño. Por último, ambos recomendaron que las organizaciones realizaran auditorías anuales. Conclusión: convendría revisar nuestra web antes de fin de año.",
      "explanation": "El estilo indirecto traslada los tiempos al pasado (no cumplía, había empeorado, sería, anunciaría) y usa verbos introductores variados (explicó, recalcó, afirmó, advirtió, preguntó si). Tras recomendar, el verbo va en subjuntivo (recomendaron que realizaran)."
    }
  ],
  "c2r-rhetorical-identify": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo entre una madre y su hijo adolescente, que ha vuelto a casa a las cuatro de la madrugada sin avisar. La madre usa preguntas retóricas para reprochar, negar e indignarse; el hijo, preguntas reales.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Al menos cuatro preguntas retóricas con funciones distintas (reproche, negación, indignación)",
        "Al menos una pregunta real que busque información, bien diferenciada",
        "Entonación y puntuación adecuadas (¿Tú sabes qué hora es?, ¿Acaso…?)",
        "Registro familiar coherente"
      ],
      "modelAnswer": "—¿Tú sabes qué hora es? —Mamá, perdona, se me ha pasado. —¿Se te ha pasado? ¿Y para qué tienes el móvil, para adornar? —Se me quedó sin batería. —Claro, y en toda la ciudad no había un solo teléfono. ¿Acaso te parece normal tenernos en vela hasta las cuatro? —No, no me parece normal. ¿Habéis llamado a alguien? —A todos tus amigos, uno por uno. ¿Cuántas veces te lo hemos dicho? ¿Cuántas? —Ya lo sé. ¿Puedo explicarte qué ha pasado? —Mañana. Ahora, a la cama. ¿O es que quieres que encima te dé las gracias?",
      "explanation": "Las preguntas retóricas de la madre no esperan respuesta: reprochan (¿Tú sabes qué hora es?), ironizan (¿para adornar?), niegan (¿Acaso te parece normal…?) o expresan indignación (¿Cuántas veces te lo hemos dicho?). Las del hijo (¿Habéis llamado a alguien?, ¿Puedo explicarte…?) sí buscan información."
    }
  ],
  "c2r-rhetorical-feigned-doubt": [
    {
      "type": "write",
      "prompt": "Escribe una carta abierta al alcalde de tu ciudad, que se publicará en un periódico local, para protestar por el cierre del único centro de salud del barrio. Usa la interpelación directa y la duda fingida.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos una interpelación directa al destinatario (¿Y usted, señor alcalde…?)",
        "Al menos una duda fingida (¿Cómo decirlo sin ofender?, no sé si llamarlo…)",
        "Preguntas retóricas que refuercen la protesta",
        "Registro formal, firme y respetuoso"
      ],
      "modelAnswer": "Señor alcalde: Le escribo en nombre de los vecinos de San Blas, que desde el lunes no tenemos centro de salud. Nos dicen que el cierre es «temporal», pero nadie sabe cuándo volverá a abrir. ¿Cómo calificar una decisión así? No sé si llamarla imprudencia o simple desinterés. Lo cierto es que nuestros mayores tienen que tomar dos autobuses para que les tomen la tensión. Y usted, señor alcalde, ¿ha intentado alguna vez hacer ese trayecto con ochenta años y un andador? Durante la campaña nos prometió una sanidad cercana. ¿Era eso una promesa o un eslogan? Le pedimos que reciba a la asociación de vecinos esta misma semana y que se comprometa con una fecha de reapertura. Atentamente, Asociación Vecinal de San Blas",
      "explanation": "La interpelación dirige la pregunta al destinatario y lo obliga a responder (Y usted, señor alcalde, ¿ha intentado…?). La duda fingida (¿Cómo calificar…? No sé si llamarla…) permite sugerir una crítica dura sin formularla abiertamente. El registro se mantiene formal."
    }
  ],
  "c2r-rhetorical-dialogue-reply": [
    {
      "type": "write",
      "prompt": "Escribe un fragmento de un debate radiofónico en el que un tertuliano lanza a otro una pregunta retórica tramposa y este la desactiva con calma, sin caer en la trampa.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Una pregunta retórica tramposa o capciosa bien construida",
        "Una respuesta que la desactive (señalar la trampa, reformularla o devolverla)",
        "Argumentos concretos en la réplica",
        "Registro de debate público"
      ],
      "modelAnswer": "—Vamos a ver, señora Prieto: ¿de verdad cree usted que alguien en su sano juicio quiere pagar más impuestos? —Su pregunta ya trae la respuesta incorporada, así que permítame reformularla. La cuestión no es si a alguien le gusta pagar impuestos, sino qué servicios queremos tener y cómo los financiamos. —Pero no me ha contestado. —Le contesto encantada: a nadie le gusta pagar, igual que a nadie le gusta ir al dentista. Y, sin embargo, vamos, porque sabemos lo que cuesta no hacerlo. Lo que yo propongo es que paguen proporcionalmente más quienes más ganan. Y ahora le pregunto yo, sin trampa: ¿qué partidas recortaría usted para bajarlos? —Bueno, eso habría que estudiarlo. —Pues ahí está el debate.",
      "explanation": "La pregunta del tertuliano es capciosa: presupone la respuesta (nadie quiere pagar más). La interlocutora la desactiva señalando la trampa (ya trae la respuesta incorporada), la reformula y la devuelve con una pregunta real (¿qué partidas recortaría?)."
    }
  ],
  "c1c2-vocabulary-practice-19": [
    {
      "type": "write",
      "prompt": "Un periódico ha titulado «Los que desayunan chocolate son más inteligentes» a partir de un estudio. Escribe una carta al director en la que critiques la noticia con preguntas retóricas y el vocabulario de la metodología científica.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Vocabulario científico preciso (correlación, causalidad, muestra, grupo de control, sesgo…)",
        "Al menos tres preguntas retóricas, una de ellas en serie anafórica",
        "Una explicación clara del error de razonamiento",
        "Formato de carta al director"
      ],
      "modelAnswer": "Señor director: El titular de ayer, «Los que desayunan chocolate son más inteligentes», merece algunas preguntas. ¿Cuántos participantes tenía el estudio? Según la propia noticia, cuarenta, una muestra a todas luces insuficiente. ¿Hubo grupo de control? No se menciona. ¿Hubo seguimiento más allá de unas pocas semanas? Tampoco. ¿Hubo algún control del nivel socioeconómico de los participantes, que influye tanto en la dieta como en los resultados escolares? Nada de eso. El estudio, en el mejor de los casos, encuentra una correlación, pero el titular la convierte en causalidad. ¿Acaso los niños que comen más fruta son más altos porque la fruta hace crecer, o porque sus familias tienen más recursos? Divulgar ciencia exige rigor, no titulares llamativos. Atentamente, Clara Montes, profesora de Biología",
      "explanation": "La carta distingue correlación de causalidad y señala los problemas metodológicos (una muestra pequeña, la falta de grupo de control, un posible sesgo socioeconómico). Las preguntas retóricas, encadenadas en serie anafórica («¿Hubo…? ¿Hubo…? ¿Hubo…?»), guían al lector hacia la conclusión."
    }
  ],
  "c2r-interview-strengths-tone": [
    {
      "type": "write",
      "prompt": "Escribe el extracto profesional de tu perfil en una red de empleo. Presenta tus fortalezas con ejemplos concretos y un tono que equilibre confianza y humildad.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Al menos dos fortalezas respaldadas por logros concretos y cuantificables",
        "Tono seguro sin fanfarronería (evitar superlativos vacíos)",
        "Vocabulario profesional (trayectoria, competencias, liderar, gestionar)",
        "Una frase final sobre lo que buscas"
      ],
      "modelAnswer": "Soy ingeniera industrial con nueve años de trayectoria en logística y cadena de suministro. Mi principal fortaleza es la capacidad para detectar ineficiencias y convertirlas en ahorro: en mi último puesto, rediseñé el sistema de rutas de reparto y reduje los costes de transporte un dieciocho por ciento en un año. También me siento cómoda liderando equipos diversos; he coordinado a veinte personas de cuatro países, y he aprendido que escuchar suele ser más eficaz que dar órdenes. Sigo formándome en análisis de datos, un área en la que todavía tengo mucho que aprender. Busco un proyecto en el que pueda aportar mi experiencia en optimización y seguir creciendo profesionalmente.",
      "explanation": "Las fortalezas se demuestran con logros medibles (un dieciocho por ciento, veinte personas de cuatro países) en lugar de adjetivos vacíos. La humildad (he aprendido que escuchar…, todavía tengo mucho que aprender) equilibra la seguridad del tono."
    }
  ],
  "c2r-interview-closing-salary": [
    {
      "type": "write",
      "prompt": "Escribe el correo de agradecimiento que envías al día siguiente de una entrevista de trabajo. Retoma algún tema de la conversación, aclara tu expectativa salarial con aplomo y despídete con seguridad.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Agradecimiento concreto, no genérico",
        "Referencia a un tema tratado en la entrevista",
        "Una aclaración sobre la pretensión salarial con una horquilla razonada",
        "Cierre seguro y profesional"
      ],
      "modelAnswer": "Estimado Sr. Lozano: Quería agradecerle el tiempo que me dedicó ayer y la claridad con que me explicó los retos del departamento. Me quedé pensando en lo que comentó sobre la expansión a Portugal: en mi anterior empresa participé en la apertura de la oficina de Oporto y estaría encantado de aportar esa experiencia. Respecto a la pregunta sobre mis expectativas salariales, y tras revisar la descripción completa del puesto, considero razonable una horquilla de entre 38.000 y 42.000 euros brutos anuales, en línea con el mercado para un perfil como el mío. Quedo a su disposición para cualquier información adicional y espero tener noticias suyas próximamente. Reciba un cordial saludo, Martín Arce",
      "explanation": "El correo agradece de forma concreta, retoma un tema de la entrevista (la expansión a Portugal) para reforzar la candidatura y responde sobre el salario con una horquilla justificada (en línea con el mercado). Las fórmulas de cierre son profesionales y seguras."
    }
  ],
  "c2r-interview-error-hunt": [
    {
      "type": "write",
      "prompt": "Tu primo tiene mañana su primera entrevista importante y te ha contado lo que piensa responder. Escríbele un mensaje señalándole los errores que debe evitar y cómo reformularlos.",
      "minWords": 70,
      "maxWords": 130,
      "rubric": [
        "Al menos tres errores típicos identificados (criticar al antiguo jefe, respuestas vagas, registro inadecuado…)",
        "Una reformulación concreta para cada error",
        "Registro informal y tono de ánimo",
        "Imperativos y estructuras de consejo (no digas…, mejor di…)"
      ],
      "modelAnswer": "¡Ánimo para mañana, Rubén! Te doy tres consejos. Primero: no digas que te fuiste porque tu jefe era un desastre, aunque sea verdad. Mejor di algo como «buscaba un proyecto con más responsabilidad». Segundo: cuando te pregunten por tus fortalezas, nada de «soy muy trabajador y responsable», que eso lo dice todo el mundo. Cuenta un ejemplo: el inventario que organizaste en la tienda y que ahorró horas cada semana. Y tercero: trata de usted al entrevistador hasta que él te tutee, y olvídate de los «tío» y los «en plan». Por lo demás, sé tú mismo. ¡Ya me contarás!",
      "explanation": "El mensaje identifica errores típicos (criticar al antiguo jefe, dar respuestas vagas, usar un registro coloquial) y ofrece una reformulación para cada uno. Los imperativos negativos y afirmativos (no digas, mejor di, cuenta, trata de usted) estructuran los consejos."
    }
  ],
  "c2r-vocab-latinisms": [
    {
      "type": "write",
      "prompt": "Eres responsable de selección. Redacta el informe interno sobre la última candidata entrevistada para un puesto de jefa de proyecto. Usa al menos tres latinismos con su forma y sentido correctos.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Al menos tres latinismos bien usados (a priori, grosso modo, sine qua non, in situ, motu proprio…)",
        "Vocabulario de selección (perfil, trayectoria, competencias, incorporación, candidatura)",
        "Estructura de informe: valoración, puntos fuertes, reservas y recomendación",
        "Registro impersonal y objetivo"
      ],
      "modelAnswer": "Candidata: Sofía Navarro Gil. Puesto: jefa de proyecto. A priori, su perfil se ajusta bien a lo que buscamos: cuenta con una trayectoria de siete años en gestión de proyectos tecnológicos y con la certificación exigida, requisito sine qua non para el puesto. Durante la entrevista demostró sólidas competencias de comunicación y una notable capacidad de análisis. Resumió grosso modo los tres proyectos que ha liderado, con resultados verificables. Como dato relevante, se ofreció motu proprio a realizar una prueba práctica in situ, que resolvió con solvencia. Como reserva, su experiencia con equipos internacionales es limitada. Recomendación: pasar su candidatura a la fase final, con una posible incorporación en septiembre.",
      "explanation": "Los latinismos se usan sin preposición añadida (a priori, grosso modo, motu proprio, no «de motu proprio» ni «a grosso modo») y con su sentido exacto: sine qua non (imprescindible), in situ (en el lugar). El informe es impersonal y sigue la estructura de valoración, reservas y recomendación."
    }
  ],
  "c2r-conflict-middle-ground": [
    {
      "type": "write",
      "prompt": "Un vecino toca la batería por las tardes y una vecina que trabaja de noche necesita dormir a esas horas. Como presidente de la comunidad, redacta la propuesta de acuerdo que les enviarás a ambos para encontrar un término medio.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Delimitación del punto de fricción y de los intereses de cada parte",
        "Compromisos concretos y equilibrados para ambos",
        "Vocabulario de la mediación (término medio, pacto de convivencia, limar asperezas)",
        "Registro cordial y neutral"
      ],
      "modelAnswer": "Estimados Javier y Lucía: Tras hablar con cada uno de vosotros, creo que el punto de fricción está claro: Javier necesita practicar con la batería para sus conciertos, y Lucía, que trabaja de noche, necesita descansar por la tarde. Ambos intereses son legítimos. Para encontrar un término medio, os propongo el siguiente pacto de convivencia. Primero, Javier ensayará solo de 19:00 a 20:30, cuando Lucía ya se ha levantado, y usará la batería electrónica con auriculares el resto del tiempo. Segundo, Lucía avisará con antelación si algún día cambia su turno. Tercero, revisaremos el acuerdo dentro de un mes. Confío en que esto sirva para limar asperezas y recuperar la buena relación de siempre. Un saludo, Ernesto, presidente de la comunidad",
      "explanation": "La propuesta delimita el punto de fricción, reconoce los intereses legítimos de ambos y ofrece compromisos concretos y recíprocos. El vocabulario de la mediación (término medio, pacto de convivencia, limar asperezas) y el tono neutral facilitan que las dos partes acepten el acuerdo."
    }
  ],
  "c2r-conflict-apology-contrast": [
    {
      "type": "write",
      "prompt": "En una reunión criticaste delante de todos el trabajo de una compañera y ella se sintió humillada. Escríbele una nota de disculpa sincera, sin condicionantes ni excusas, que ayude a restaurar la relación.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Una disculpa que asuma la responsabilidad (siento haber…, no «siento que te hayas…»)",
        "Reconocimiento concreto del daño causado",
        "Ausencia de excusas y condicionantes (si te molestó…, pero…)",
        "Un compromiso o gesto de reparación"
      ],
      "modelAnswer": "Nerea: Quiero pedirte perdón por lo que pasó ayer en la reunión. Siento haber criticado tu informe delante de todo el equipo. Mis comentarios fueron injustos en la forma y te dejé en una situación muy incómoda que no merecías. Si tenía algo que decir, debería habértelo dicho a ti, en privado y con respeto. Entiendo que estés dolida. Mañana explicaré al equipo que mi crítica estuvo fuera de lugar, y me gustaría que habláramos con calma cuando te venga bien. Lo siento de verdad. Óscar",
      "explanation": "La disculpa sincera asume la responsabilidad con «siento haber + participio», a diferencia de «siento que te hayas sentido…», que la traslada al otro. No hay excusas ni condicionantes, y el compromiso de rectificar ante el equipo repara el daño de forma concreta."
    }
  ],
  "historical-narrative-3": [
    {
      "type": "write",
      "prompt": "Escribe la semblanza biográfica de una figura histórica imaginaria (una científica, un político, una pintora…) para una enciclopedia divulgativa. Anticipa desde el pasado lo que llegaría a ser y usa la construcción «el que fuera…».",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Futuro del pasado y perífrasis de anticipación (sería, habría de, estaba llamada a)",
        "Al menos una construcción «el/la que fuera…» con valor de pluscuamperfecto",
        "Narración cronológica con fechas",
        "Registro culto y objetivo"
      ],
      "modelAnswer": "Elvira Castaño nació en 1871 en un pueblo minero de León, hija de un capataz que apenas sabía leer. Nadie habría imaginado entonces que aquella niña estaba llamada a convertirse en la primera catedrática de Química de la universidad española. A los dieciséis años se trasladó a Madrid, donde estudió con permiso especial, pues las mujeres necesitaban entonces una autorización para matricularse. Allí conoció a Ramón Ibarra, el que fuera su maestro y, años después, su principal rival académico. Su tesis sobre los compuestos del hierro, publicada en 1898, habría de abrirle las puertas de los laboratorios europeos. Tres décadas más tarde, sería ella quien formara a la siguiente generación de químicas españolas. Murió en 1949, sin ver reconocida del todo su obra.",
      "explanation": "La semblanza anticipa el futuro desde el pasado con estaba llamada a, habría de y sería. «El que fuera su maestro» equivale a «el que había sido», un uso culto y periodístico de la forma en -ra con valor de indicativo (no de subjuntivo). La narración avanza con fechas y en un registro objetivo."
    }
  ],
  "historical-narrative-5": [
    {
      "type": "write",
      "prompt": "Escribe un fragmento de novela histórica, ambientado en el Madrid del 2 de mayo de 1808, en el que la voz del narrador se funda con los pensamientos de un personaje mediante el estilo indirecto libre.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Estilo indirecto libre con sus marcas (imperfecto, condicional, preguntas y exclamaciones del personaje sin verbo introductor)",
        "Narración en tercera persona en pasado",
        "Ambientación histórica verosímil",
        "Transición fluida entre la voz del narrador y la del personaje"
      ],
      "modelAnswer": "Aquella mañana, Manuela bajó a la calle con el cesto de la compra, como cada día. En la Puerta del Sol, la gente se arremolinaba frente a un grupo de soldados franceses. Se detuvo junto a una esquina. ¿Qué hacían todos allí, gritando? ¿Era verdad lo que contaban, que se llevaban a los infantes a Francia? No podía ser. Su madre siempre decía que el rey volvería, que todo aquello pasaría pronto. Un muchacho pasó corriendo a su lado con una navaja en la mano. Y su hermano, ¿dónde estaría su hermano a esas horas? Seguramente en el taller, pero ¿y si no? Apretó el asa del cesto y echó a andar hacia la calle Mayor. Tenía que encontrarlo antes de que empezaran los disparos.",
      "explanation": "El estilo indirecto libre funde la voz del narrador con la de Manuela: las preguntas y exclamaciones del personaje aparecen sin verbo introductor (¿Qué hacían todos allí?, No podía ser) y conservan el imperfecto y el condicional (¿dónde estaría su hermano?). La narración en tercera persona enmarca los pensamientos."
    }
  ],
  "historical-narrative-7": [
    {
      "type": "write",
      "prompt": "Escribe el texto de un panel informativo para un museo arqueológico que presenta una espada romana hallada en una excavación. Separa con claridad los hechos comprobados, las inferencias y las valoraciones.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Hechos presentados con indicativo y datos precisos",
        "Inferencias con verbos de modalización (cabe suponer, todo indica que, es probable que)",
        "Al menos una valoración explícita del historiador",
        "Registro divulgativo y objetivo, adecuado a un museo"
      ],
      "modelAnswer": "Espada de tipo gladius (siglo I d. C.). Esta espada fue hallada en 2019 durante las excavaciones del antiguo campamento militar de Legio, la actual León. Mide sesenta y dos centímetros y conserva restos de la vaina de madera. Todo indica que perteneció a un legionario de la Legio VII Gemina, ya que apareció junto a una inscripción con el nombre de esta unidad. Cabe suponer, por el desgaste del filo, que fue utilizada durante años. Es probable, además, que se enterrara de forma intencionada, pues estaba envuelta en un paño. Se trata, sin duda, de una de las piezas más valiosas de la colección, porque nos acerca a la vida cotidiana de los soldados que fundaron la ciudad.",
      "explanation": "El texto separa los hechos (fue hallada en 2019, mide sesenta y dos centímetros) de las inferencias, marcadas con verbos de modalización (todo indica que, cabe suponer, es probable que), y de la valoración final (una de las piezas más valiosas). Así el visitante sabe qué es seguro y qué es interpretación."
    }
  ],
  "historical-narrative-9": [
    {
      "type": "write",
      "prompt": "Escribe el discurso que pronuncia la alcaldesa de una ciudad minera en el cincuenta aniversario de la huelga que transformó la comarca. Usa vocabulario preciso para narrar el cambio histórico: hito, punto de inflexión, detonante, coyuntura…",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Al menos cuatro términos del vocabulario histórico bien usados (hito, punto de inflexión, detonante, coyuntura, parteaguas…)",
        "Narración del episodio con tiempos del pasado coherentes",
        "Estructura de discurso: saludo, evocación, valoración y llamamiento final",
        "Registro solemne pero cercano"
      ],
      "modelAnswer": "Vecinas y vecinos: Hoy hace cincuenta años, en la madrugada del 3 de marzo, trescientos mineros se negaron a bajar al pozo. El detonante fue un accidente que costó la vida a cuatro compañeros, pero la indignación venía de lejos: salarios de miseria, jornadas interminables y ninguna medida de seguridad. La coyuntura no era fácil. Hacer huelga entonces suponía arriesgar el empleo y, a veces, la libertad. Y, sin embargo, resistieron cuarenta y dos días. Aquella huelga fue un punto de inflexión para nuestra comarca: de ella nacieron las primeras normas de seguridad en las minas y el primer convenio colectivo. Fue, en definitiva, un hito que nos enseñó que unidos somos más fuertes. Honremos hoy su memoria no solo con flores, sino defendiendo cada derecho que conquistaron.",
      "explanation": "El discurso usa el vocabulario de los procesos históricos con precisión: el detonante (la causa inmediata), la coyuntura (las circunstancias), el punto de inflexión y el hito (el cambio decisivo). Los tiempos del pasado narran el episodio y el subjuntivo exhortativo (honremos) cierra con un llamamiento."
    }
  ],
  "c2r-science-hypothesis-language": [
    {
      "type": "write",
      "prompt": "Redacta el resumen (abstract) de un estudio, real o imaginario, sobre el efecto del ruido urbano en el sueño. Formula la hipótesis, el método, los resultados y las conclusiones con la cautela propia de la ciencia.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Estructura de resumen: objetivo o hipótesis, método, resultados y conclusión",
        "Lenguaje cauteloso (los resultados sugieren, parece indicar, cabe la posibilidad)",
        "Datos cuantitativos y vocabulario científico (muestra, variable, significativo)",
        "Registro impersonal (se analizó, se observó)"
      ],
      "modelAnswer": "El presente estudio tuvo como objetivo analizar la relación entre la exposición nocturna al ruido urbano y la calidad del sueño en adultos. Se partió de la hipótesis de que niveles superiores a 45 decibelios reducen la duración del sueño profundo. Para ello, se monitorizó durante dos semanas a una muestra de 240 voluntarios residentes en Madrid, mediante sensores de ruido y pulseras de actividad. Se observó una reducción media de 23 minutos de sueño profundo en las noches más ruidosas, una diferencia estadísticamente significativa. Los resultados sugieren que el ruido podría afectar al descanso incluso cuando no provoca despertares conscientes. No obstante, el tamaño de la muestra y la ausencia de un grupo de control aconsejan interpretar estos datos con prudencia y replicar el estudio en otras ciudades.",
      "explanation": "El resumen sigue la estructura científica (objetivo, hipótesis, método, resultados, conclusión) con verbos impersonales (se partió, se monitorizó, se observó). La cautela se expresa con verbos y modos de atenuación (sugieren, podría afectar) y con el reconocimiento explícito de las limitaciones."
    }
  ],
  "c2r-science-dialogue-interview": [
    {
      "type": "write",
      "prompt": "Escribe una entrevista breve para la sección de ciencia de un periódico con una investigadora que ha desarrollado un nuevo material biodegradable. Formula preguntas de periodista y respuestas matizadas.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Preguntas periodísticas variadas (abiertas, de aclaración, de repregunta)",
        "Respuestas matizadas, sin afirmaciones absolutas",
        "Vocabulario de innovación (prototipo, escalable, a escala industrial)",
        "Formato de entrevista con entradilla breve"
      ],
      "modelAnswer": "La química Nuria Esteve ha desarrollado en Valencia un plástico biodegradable a partir de cáscaras de naranja. —¿Qué tiene de novedoso su material? —Que se degrada en unos tres meses en contacto con la tierra, frente a los siglos que tarda un plástico convencional. Y que aprovecha un residuo que hoy se tira. —¿Podrá sustituir pronto a las bolsas de plástico? —Me gustaría decir que sí, pero sería precipitado. De momento tenemos un prototipo que funciona en el laboratorio; todavía no sabemos si el proceso es escalable. —¿Qué falta para producirlo a escala industrial? —Sobre todo, abaratar costes. Hoy es tres veces más caro que el plástico tradicional. —¿Es optimista? —Soy prudente. Creo que en unos cinco años podríamos verlo en algunos envases, pero dependerá de la inversión.",
      "explanation": "La entrevista combina preguntas abiertas y repreguntas, y las respuestas evitan las afirmaciones absolutas (sería precipitado, todavía no sabemos, soy prudente, dependerá). El vocabulario de la innovación (prototipo, escalable, a escala industrial) precisa en qué fase está el proyecto."
    }
  ],
  "c2r-politics-spiral-grammar": [
    {
      "type": "write",
      "prompt": "Redacta una noticia breve sobre la aprobación de una nueva ley de protección de costas en el parlamento regional. Usa la pasiva refleja, la nominalización y el condicional de rumor para la información no confirmada.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Pasiva refleja (se ha aprobado, se prohibirán…)",
        "Al menos dos nominalizaciones (la aprobación, la ampliación…)",
        "Condicional de rumor para datos no confirmados, atribuidos a una fuente",
        "Estructura de noticia: titular y entradilla con lo esencial"
      ],
      "modelAnswer": "El Parlamento aprueba la ley de costas con el apoyo de tres grupos. El Parlamento regional ha aprobado este jueves la nueva ley de protección del litoral, tras ocho meses de tramitación. La norma salió adelante con 48 votos a favor y 31 en contra. Con su entrada en vigor, se prohibirán las nuevas construcciones a menos de doscientos metros de la costa y se ampliará la superficie de dunas protegidas. La aprobación del texto ha sido recibida con satisfacción por las organizaciones ecologistas, aunque el sector hotelero ha reclamado la apertura de un periodo de diálogo para suavizar su aplicación. Según fuentes del Gobierno regional, la ley afectaría a más de trescientos proyectos urbanísticos ya autorizados, cuya revisión podría prolongarse durante años.",
      "explanation": "La noticia usa la pasiva refleja para las medidas (se prohibirán, se ampliará), nominalizaciones que condensan la información (la aprobación, la tramitación, la entrada en vigor, la revisión) y el condicional de rumor (afectaría), atribuido a una fuente, para un dato no confirmado."
    }
  ],
  "c2r-philosophy-free-will-debate": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo entre dos amigos que discuten si un hombre que robó comida para su familia es responsable de sus actos. Uno defiende el determinismo y el otro el libre albedrío.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Vocabulario filosófico preciso (determinismo, libre albedrío, responsabilidad moral, condicionante…)",
        "Argumentos y contraargumentos encadenados",
        "Al menos una distinción conceptual explícita (causa y justificación, condicionar y determinar…)",
        "Registro culto pero conversacional"
      ],
      "modelAnswer": "—Yo no lo culparía. Si no hubiera estado en la miseria, no habría robado. Sus circunstancias lo determinaron. —Lo condicionaron, que no es lo mismo. Otras personas en su situación no roban. —Porque tienen otra historia, otro carácter, otros genes. Todo lo que hacemos tiene una causa, y nadie elige sus causas. —Entonces, según tu determinismo, nadie sería responsable de nada: ni el ladrón ni el que lo detiene. —Exacto. La responsabilidad moral es una ficción útil. —Pues a mí me parece que confundes explicar con justificar. Que un acto tenga causas no significa que no haya habido una decisión. Él pudo pedir ayuda y no lo hizo. —¿Y si no sabía que existía esa opción? —Entonces su culpa sería menor, pero no nula. Ahí está el libre albedrío: en ese pequeño margen.",
      "explanation": "El diálogo opone determinismo y libre albedrío y se apoya en distinciones conceptuales: condicionar no es determinar, y explicar no es justificar. El condicional y el subjuntivo (si no hubiera estado…, no habría robado) permiten razonar sobre hipótesis."
    }
  ],
  "c2r-philosophy-argument-analysis": [
    {
      "type": "write",
      "prompt": "Analiza en un párrafo el siguiente razonamiento: «Todo lo natural es bueno; la agricultura ecológica es natural; por tanto, la agricultura ecológica es buena». Identifica las premisas, la conclusión y sus puntos débiles.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Identificación de las premisas y la conclusión",
        "Distinción entre validez y verdad",
        "Al menos una objeción con un contraejemplo",
        "Vocabulario lógico (premisa, silogismo, falacia, válido, inferir)"
      ],
      "modelAnswer": "El razonamiento adopta la forma de un silogismo: la primera premisa afirma que todo lo natural es bueno; la segunda, que la agricultura ecológica es natural; y de ambas se infiere la conclusión de que la agricultura ecológica es buena. Desde el punto de vista formal, el argumento es válido: si las premisas fueran verdaderas, la conclusión lo sería necesariamente. Sin embargo, validez no equivale a verdad. La primera premisa es claramente falsa: los terremotos o la cicuta son naturales y nadie los consideraría buenos. Se trata de la llamada apelación a la naturaleza (que no debe confundirse con la «falacia naturalista» de Moore). Además, la segunda premisa es discutible, ya que cualquier forma de agricultura supone una intervención humana. En consecuencia, el argumento, aunque válido, no es sólido.",
      "explanation": "El análisis distingue validez (la conclusión se sigue de las premisas) y verdad (las premisas son ciertas). Los contraejemplos (los terremotos, la cicuta) refutan la primera premisa, y el vocabulario lógico (silogismo, se infiere, falacia, sólido) da precisión al comentario."
    }
  ],
  "c2r-psych-ambivalence-dissonance": [
    {
      "type": "write",
      "prompt": "Escribe un breve artículo divulgativo para una revista de psicología que explique la diferencia entre ambivalencia y disonancia cognitiva, con un ejemplo de cada una.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Definiciones precisas de ambivalencia y disonancia cognitiva",
        "Un ejemplo cotidiano para cada concepto",
        "Conectores de contraste y de explicación (mientras que, es decir, en cambio)",
        "Registro divulgativo, claro pero riguroso"
      ],
      "modelAnswer": "A menudo se confunden, pero describen experiencias distintas. La ambivalencia consiste en sentir a la vez emociones opuestas hacia la misma persona o situación. Es lo que le ocurre a quien deja su ciudad para aceptar un buen trabajo: siente ilusión por la nueva etapa y, al mismo tiempo, tristeza por lo que abandona. Ninguna de las dos emociones es falsa; simplemente conviven. La disonancia cognitiva, en cambio, es el malestar que aparece cuando lo que hacemos contradice lo que pensamos. Un fumador que sabe que el tabaco es perjudicial vive esa tensión, y suele resolverla con justificaciones: «De algo hay que morir». Es decir, mientras que la ambivalencia es un conflicto entre sentimientos, la disonancia es un conflicto entre creencias y conductas.",
      "explanation": "El artículo define cada concepto, lo ilustra con un ejemplo cotidiano y cierra con una síntesis contrastiva (mientras que…). Los conectores (en cambio, es decir) ayudan a distinguir la ambivalencia (sentimientos opuestos) de la disonancia cognitiva (creencias frente a conductas)."
    }
  ],
  "c2r-psych-spiral-literary": [
    {
      "type": "write",
      "prompt": "Escribe el retrato literario de un personaje que regresa, después de veinte años, a la casa donde se crio. Describe su estado de ánimo con léxico preciso, alguna figura retórica y estilo indirecto libre.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Léxico emocional preciso (añoranza, desazón, melancolía, pesadumbre…)",
        "Al menos una figura retórica (metáfora, símil, personificación)",
        "Un pasaje en estilo indirecto libre",
        "Narración en tercera persona con coherencia temporal"
      ],
      "modelAnswer": "Cuando Andrés empujó la verja, el chirrido le pareció una voz conocida que lo saludaba con reproche. Veinte años. El jardín se había vuelto una selva y las contraventanas colgaban como párpados cansados. No sentía exactamente tristeza, sino una desazón difusa, una mezcla de añoranza y de culpa que no sabía nombrar. ¿Por qué había tardado tanto en volver? ¿Qué esperaba encontrar, si su madre ya no estaba? Recorrió el pasillo despacio. En la cocina aún flotaba, o eso quiso creer, el olor del bizcocho de los domingos. Entonces lo invadió una melancolía serena, casi dulce, que no dolía. Quizá, pensó, uno no regresa nunca a una casa, sino a la persona que fue en ella.",
      "explanation": "El retrato combina léxico emocional preciso (desazón, añoranza, melancolía), figuras retóricas (el chirrido como una voz que saluda, las contraventanas como párpados cansados) y estilo indirecto libre (¿Por qué había tardado tanto en volver?), que deja oír los pensamientos del personaje sin verbo introductor."
    }
  ],
  "art-film-literature-criticism-2": [
    {
      "type": "write",
      "prompt": "Escribe para la audioguía de un museo la descripción de «Paseo a orillas del mar» (1909), de Joaquín Sorolla. Comenta la composición, la pincelada y la paleta, y explica qué hace original el cuadro.",
      "minWords": 90,
      "maxWords": 150,
      "rubric": [
        "Vocabulario técnico de la pintura (composición, pincelada, paleta, encuadre, primer plano)",
        "Descripción ordenada de lo que se ve",
        "Análisis del efecto de los recursos pictóricos",
        "Una valoración sobre la originalidad de la obra"
      ],
      "modelAnswer": "Ante usted, dos mujeres vestidas de blanco pasean por la playa, con el mar al fondo. Son Clotilde, la esposa del pintor, y su hija María. Fíjese en la composición: Sorolla sitúa a las figuras en primer plano y prescinde casi por completo de la línea del horizonte, de modo que el mar se convierte en un fondo luminoso. La pincelada es rápida y suelta, sobre todo en la arena y en el agua, donde apenas se distinguen formas definidas. Pero lo más admirable es la paleta: el blanco de los vestidos no es blanco, sino un juego de azules, malvas y amarillos que capta el reflejo de la luz mediterránea. Observe también el velo, agitado por el viento. Pocas veces la pintura ha conseguido transmitir tan bien la sensación de un instante.",
      "explanation": "La descripción usa el vocabulario técnico de la crítica de arte (composición, primer plano, pincelada suelta, paleta) y explica su efecto en lugar de limitarse a enumerar. La valoración final (pocas veces la pintura ha conseguido…) sitúa la originalidad del cuadro en la captación de la luz y del instante."
    }
  ],
  "c2r-econ-supply-demand-cause": [
    {
      "type": "write",
      "prompt": "Tu abuelo no entiende por qué los alquileres de tu ciudad han subido tanto. Escríbele un correo en el que le expliques la cadena de causas y consecuencias con términos económicos sencillos.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Una cadena causal clara (oferta, demanda, precio)",
        "Verbos y conectores de causa y consecuencia (provocar, desencadenar, repercutir, derivarse, de ahí que)",
        "Vocabulario económico explicado con sencillez",
        "Registro familiar y cariñoso"
      ],
      "modelAnswer": "Querido abuelo: Me preguntabas el domingo por qué los pisos están tan caros, y te lo intento explicar. Todo empieza con la ley de la oferta y la demanda. En los últimos años ha llegado a la ciudad mucha gente a trabajar, lo que ha provocado un aumento de la demanda de vivienda. Al mismo tiempo, muchos propietarios han convertido sus pisos en apartamentos turísticos, porque les resulta más rentable, y eso ha reducido la oferta de alquiler. Cuando hay más gente buscando y menos pisos disponibles, los precios suben. De ahí que hoy un piso pequeño cueste casi el doble que hace diez años. Esta subida repercute sobre todo en los jóvenes, que destinan a veces la mitad del sueldo al alquiler. Un beso muy grande, Irene",
      "explanation": "El correo explica la cadena causal con verbos de causa y consecuencia (ha provocado, ha reducido, repercute) y el conector de ahí que, seguido de subjuntivo (cueste). La ley de la oferta y la demanda se ilustra con hechos cotidianos, en un registro familiar."
    }
  ],
  "c2r-econ-spiral-report": [
    {
      "type": "write",
      "prompt": "Redacta un breve informe trimestral para el consejo de administración de una cadena de librerías: resultados, causas y previsiones. Escribe con densidad y precisión.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Nominalizaciones que condensen la información (el descenso de, la apertura de…)",
        "Cifras precisas (porcentajes, comparaciones con el trimestre anterior)",
        "Atenuación en las previsiones (cabe esperar, previsiblemente)",
        "Conectores y estructura de informe"
      ],
      "modelAnswer": "Informe del tercer trimestre. Resultados: la facturación alcanzó los 4,2 millones de euros, lo que supone un incremento del 6 % respecto al trimestre anterior y del 9 % en términos interanuales. El margen bruto se mantuvo estable en el 31 %. Causas: el crecimiento se explica, fundamentalmente, por la apertura de las tiendas de Sevilla y Bilbao y por el buen comportamiento de la venta en línea, que ya representa el 22 % del total. En cambio, el descenso de las ventas de libros de texto, derivado de la gratuidad aprobada en varias comunidades, restó dos puntos al crecimiento. Previsiones: cabe esperar que la campaña navideña consolide esta tendencia, si bien el encarecimiento del papel podría presionar los márgenes. Previsiblemente, se cerrará el ejercicio con un beneficio superior al previsto.",
      "explanation": "El informe gana densidad con nominalizaciones (la apertura, el descenso, el encarecimiento) y cifras comparadas (respecto al trimestre anterior, en términos interanuales). Las previsiones se atenúan (cabe esperar que, podría, previsiblemente) y la estructura en apartados facilita la lectura."
    }
  ],
  "c2r-writing-editor-dialogue": [
    {
      "type": "write",
      "prompt": "Eres editor en una editorial. Escribe a una autora un correo con tus comentarios sobre el borrador de su novela: qué funciona y qué debería revisar en tensión narrativa, ritmo, diálogos y punto de vista.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Vocabulario de las técnicas narrativas (tensión narrativa, ritmo, focalización, prolepsis, narrador)",
        "Equilibrio entre elogios concretos y críticas constructivas",
        "Propuestas de revisión precisas",
        "Registro profesional y cordial"
      ],
      "modelAnswer": "Querida Laura: He terminado de leer el borrador y quiero felicitarte: la novela tiene una voz propia y un planteamiento muy sugerente. El primer tercio funciona de maravilla; la tensión narrativa crece capítulo a capítulo gracias a la prolepsis inicial, que anuncia la desaparición sin desvelar cómo ocurre. Sin embargo, en la parte central el ritmo decae: los capítulos del viaje a Lisboa se recrean en descripciones que no hacen avanzar la trama, y te sugeriría condensarlos. Los diálogos son ágiles, aunque a veces los personajes secundarios hablan todos igual; convendría darles un léxico más propio. Por último, revisa la focalización en el capítulo doce: el narrador, que hasta entonces se ceñía a la mirada de Elisa, de pronto sabe lo que piensa su hermano. ¿Lo hablamos el jueves? Un abrazo, Gonzalo",
      "explanation": "El correo combina elogios concretos y críticas constructivas con el vocabulario técnico de la narrativa (tensión narrativa, prolepsis, ritmo, focalización). Las propuestas se atenúan con el condicional y con verbos de sugerencia (te sugeriría, convendría), propios de una relación profesional cordial."
    }
  ],
  "c2r-challenge-register-chameleon": [
    {
      "type": "write",
      "prompt": "Tu vuelo se canceló y la aerolínea no te ofreció ni alojamiento ni comida. Escribe primero una reclamación formal a la compañía y después un mensaje breve a un amigo contándole lo mismo en registro coloquial.",
      "minWords": 100,
      "maxWords": 160,
      "rubric": [
        "Una reclamación en registro formal (fórmulas, tercera persona o usted, petición en subjuntivo)",
        "Un mensaje coloquial con modismos o exclamaciones",
        "Los mismos hechos en ambas versiones",
        "Contraste de léxico y sintaxis entre los dos registros"
      ],
      "modelAnswer": "Estimados señores: Por medio de la presente, les comunico que el vuelo IB3412 Madrid-Lima del 15 de octubre fue cancelado sin previo aviso. Pese a que la normativa europea obliga a la compañía a prestar asistencia, no se me ofreció alojamiento ni manutención, por lo que tuve que abonar una noche de hotel y la cena, por un importe de 186 euros. Por todo ello, solicito que se me reembolsen dichos gastos y que se me abone la compensación que corresponda. Adjunto las facturas. Atentamente, Julia Serrano. Mensaje a Leo: ¡Tío, menudo día! Me cancelan el vuelo a Lima y ni hotel ni cena ni nada. Me he tenido que pagar yo todo, casi doscientos pavos. Ya les he puesto una reclamación, pero no me hago ilusiones. ¡Vaya tela!",
      "explanation": "La reclamación usa fórmulas fijas (por medio de la presente, por todo ello), léxico formal (manutención, abonar, dicho) y subjuntivo en la petición (solicito que se me reembolsen). El mensaje coloquial cuenta los mismos hechos con exclamaciones (¡menudo día!, ¡vaya tela!), presente narrativo y léxico informal (pavos, no me hago ilusiones)."
    }
  ]
};
