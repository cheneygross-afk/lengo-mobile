// Synced from cheneygross-afk/lengo:src/lib/lessons/writing-tasks-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const C1_WRITING_TASKS: UnitWriting = {
  "subjunctive-mastery-review-2": [
    {
      "type": "write",
      "prompt": "Escribe una entrada de diario sobre una comida familiar que no salió como esperabas. Cuenta qué querías que pasara, qué te pidieron los demás y qué te dolió que hubiera ocurrido antes.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Imperfecto de subjuntivo tras un verbo principal en pasado (quería que fuera…)",
        "Pluscuamperfecto de subjuntivo para una acción anterior (me dolió que no hubiera llamado…)",
        "Verbos de petición o influencia en pasado (me pidió que…, insistió en que…)",
        "Registro personal propio de un diario"
      ],
      "modelAnswer": "Querido diario: Hoy ha sido un día extraño. Yo quería que la comida de cumpleaños de mamá fuera tranquila y que, por una vez, nadie discutiera de política. No hubo suerte. Mi tía me pidió que cambiara a los niños de mesa y mi hermano insistió en que pusiéramos música a todo volumen. Lo que más me dolió fue que Javier no hubiera llamado en toda la semana para disculparse. Mamá, en cambio, se alegró de que hubiéramos venido todos. Ojalá el año que viene lo celebremos solo los cuatro.",
      "explanation": "Con el verbo principal en pasado, el subjuntivo pasa a imperfecto para lo simultáneo o posterior (quería que fuera, me pidió que cambiara) y a pluscuamperfecto para lo anterior (me dolió que no hubiera llamado)."
    }
  ],
  "subjunctive-mastery-review-3": [
    {
      "type": "write",
      "prompt": "Escribe el brindis que pronunciarás en la boda de tu mejor amiga. Usa varias fórmulas concesivo-universales para expresar un apoyo incondicional.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos tres fórmulas concesivo-universales (pase lo que pase, cueste lo que cueste…)",
        "Una fórmula con adverbio o pronombre relativo (viváis donde viváis, sea quien sea…)",
        "El mismo verbo en subjuntivo en las dos partes de cada fórmula",
        "Tono emotivo y apelación directa a los novios"
      ],
      "modelAnswer": "Queridos Lucía y Andrés: Conozco a Lucía desde que teníamos seis años y, diga lo que diga ella, siempre fue la más valiente de las dos. Cuando conoció a Andrés, supe enseguida que había encontrado a alguien a su altura. Hoy solo quiero desearos una cosa: pase lo que pase, seguid riéndoos juntos como lo hacéis ahora. Viváis donde viváis, tendréis siempre una casa abierta en la mía. Y cueste lo que cueste, no dejéis nunca de viajar. Levantemos las copas por los novios. ¡Vivan los novios!",
      "explanation": "Las fórmulas concesivo-universales repiten el verbo en subjuntivo (diga lo que diga, pase lo que pase, viváis donde viváis, cueste lo que cueste) y presentan cualquier circunstancia posible como irrelevante para lo que se afirma."
    }
  ],
  "concessive-aunque-4": [
    {
      "type": "write",
      "prompt": "Escribe una intervención en un foro de opinión sobre si merece la pena dejar la ciudad para vivir en un pueblo. Reconoce los argumentos contrarios antes de defender tu postura.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Por más que o por mucho que con indicativo (hecho real) y con subjuntivo (hipótesis)",
        "Por mucho + sustantivo + que (por mucho dinero que…)",
        "Si bien o a pesar de que para conceder un obstáculo real",
        "Una postura final clara"
      ],
      "modelAnswer": "Llevo dos años viviendo en un pueblo de Teruel y no me arrepiento. Por más que mis amigos me dicen que me aburriré, cada día descubro algo nuevo. Si bien es cierto que faltan servicios, el centro de salud funciona mejor que el de mi antiguo barrio. A pesar de que tardo una hora en llegar al cine, he ganado tiempo para mí. Eso sí, por mucho que te guste la tranquilidad, el invierno aquí es duro. Y por mucho dinero que te ofrezcan en la ciudad, la calidad de vida no tiene precio. Mi consejo: probadlo al menos un año.",
      "explanation": "Por más que y por mucho que llevan indicativo cuando el hecho es real (por más que me dicen) y subjuntivo cuando es hipotético o general (por mucho que te guste); si bien y a pesar de que conceden un obstáculo cierto antes de mantener la tesis."
    }
  ],
  "nominalization-part-1-2": [
    {
      "type": "write",
      "prompt": "Escribe una reseña breve de una exposición que hayas visitado para el blog cultural de tu ciudad. Destaca distintos aspectos con «lo + adjetivo».",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cuatro estructuras con lo + adjetivo (lo mejor, lo curioso, lo más llamativo…)",
        "Lo + adjetivo + de + sustantivo o infinitivo (lo difícil de la visita…)",
        "Una valoración final",
        "Registro propio de una reseña cultural"
      ],
      "modelAnswer": "La exposición sobre Sorolla del Museo de Bellas Artes merece la visita. Lo mejor es, sin duda, la sala dedicada a sus playas valencianas, donde la luz parece salir de los cuadros. Lo curioso es que también se exponen sus cartas personales, que revelan a un pintor inseguro. Lo menos logrado es la iluminación de la última sala, demasiado tenue. Lo difícil de la visita es avanzar entre tanta gente los fines de semana, así que lo más sensato es ir un martes por la mañana. En suma, una muestra imprescindible.",
      "explanation": "Lo + adjetivo convierte una cualidad en un sustantivo abstracto que resume un aspecto (lo mejor, lo curioso, lo menos logrado); con de + sustantivo, precisa a qué se refiere (lo difícil de la visita)."
    }
  ],
  "nominalization-part-2-1": [
    {
      "type": "write",
      "prompt": "Redacta el acta resumida de una reunión de vecinos en la que se discutió la instalación de un ascensor. Condensa la información con nominalizaciones, sin caer en un estilo farragoso.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cinco sustantivos derivados de verbos (la aprobación, el aumento, la apertura…)",
        "Registro objetivo e impersonal (se acordó, se decidió…)",
        "Estructura de acta: fecha, asistentes, puntos tratados y cierre",
        "Equilibrio entre nominalizaciones y verbos, sin encadenar sustantivos abstractos"
      ],
      "modelAnswer": "Acta de la reunión ordinaria del 12 de marzo. Asistentes: catorce propietarios. Primer punto: la administradora presentó tres presupuestos para la instalación del ascensor. Tras un breve debate, se acordó la aprobación del presupuesto más económico, con el voto favorable de once vecinos. Segundo punto: varios propietarios expresaron su preocupación por el aumento de la cuota mensual durante la ejecución de las obras. Se decidió la apertura de un plazo de quince días para la presentación de alegaciones. Sin más asuntos que tratar, se levantó la sesión a las 21:30.",
      "explanation": "La nominalización (la instalación, la aprobación, el aumento, la ejecución, la apertura) compacta la información y da al acta un tono objetivo; alternarla con verbos conjugados (presentó, expresaron) evita el estilo farragoso."
    }
  ],
  "gerund-infinitive-advanced-part-1-2": [
    {
      "type": "write",
      "prompt": "Redacta el cartel con las normas de un espacio de coworking, precedido de un breve párrafo de bienvenida. Usa el infinitivo como sujeto y como mandato impersonal.",
      "minWords": 50,
      "maxWords": 110,
      "rubric": [
        "Al menos dos infinitivos como sujeto (Compartir el espacio exige…)",
        "Al menos cuatro mandatos impersonales en infinitivo (No comer en los puestos…)",
        "Ningún gerundio de posterioridad",
        "Estilo claro y conciso, propio de un cartel"
      ],
      "modelAnswer": "Bienvenidos a La Colmena. Trabajar rodeado de gente creativa es un privilegio, pero compartir el espacio exige respeto. Mantener un ambiente tranquilo depende de todos. Normas de uso: No hablar por teléfono en la zona de silencio. Reservar las salas de reuniones con antelación. No comer en los puestos de trabajo. Dejar la mesa libre al terminar la jornada. Apagar las luces al salir. Muchas gracias por vuestra colaboración.",
      "explanation": "El infinitivo funciona como sujeto (trabajar… es un privilegio; compartir el espacio exige respeto) y, en carteles y normas, como mandato impersonal que no se dirige a nadie en concreto (No comer, Reservar las salas)."
    }
  ],
  "gerund-infinitive-advanced-part-2-1": [
    {
      "type": "write",
      "prompt": "Escribe un correo a una amiga para contarle cómo te va con un proyecto personal de larga duración (aprender un instrumento, entrenar para una maratón…). Usa las perífrasis de gerundio para expresar duración, progresión y persistencia.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Llevar + gerundio para la duración (llevo seis meses entrenando)",
        "Ir + gerundio para el progreso gradual (voy mejorando)",
        "Venir + gerundio para algo que se repite desde el pasado (vengo notando)",
        "Estar + gerundio para una acción en curso"
      ],
      "modelAnswer": "¡Hola, Inés! ¿Qué tal todo por Lisboa? Te cuento: llevo ya seis meses entrenando para la maratón de Valencia y, aunque al principio sufría muchísimo, voy mejorando poco a poco. Ahora corro veinte kilómetros sin parar. Eso sí, vengo notando desde marzo un dolor en la rodilla, así que estoy acudiendo a una fisioterapeuta dos veces por semana. Mi entrenador dice que voy bien de tiempo y que en noviembre estaré lista. ¿Vendrás a animarme? Un beso enorme, Clara",
      "explanation": "Llevar + gerundio mide la duración (llevo seis meses entrenando); ir + gerundio, el avance gradual (voy mejorando); venir + gerundio, algo que se arrastra desde el pasado (vengo notando); estar + gerundio, la acción en curso (estoy acudiendo)."
    }
  ],
  "passive-impersonal-mastery-2": [
    {
      "type": "write",
      "prompt": "Escribe la receta de un plato típico para un recetario colectivo. Redáctala de forma impersonal, con el se pasivo.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cinco verbos con se pasivo (se pelan las patatas, se añade la sal…)",
        "Concordancia del verbo con el sujeto paciente en singular y en plural",
        "Conectores de secuencia (primero, a continuación, una vez que…)",
        "Registro impersonal, sin tú ni usted"
      ],
      "modelAnswer": "Tortilla de patatas para cuatro personas. Primero se pelan y se cortan en láminas finas cuatro patatas medianas. A continuación, se calienta abundante aceite en una sartén y se fríen las patatas a fuego medio junto con una cebolla picada. Mientras tanto, se baten seis huevos y se añade una pizca de sal. Una vez que las patatas están blandas, se escurren y se mezclan con el huevo. Se deja reposar la mezcla unos minutos y después se cuaja por ambos lados. Se sirve templada.",
      "explanation": "En el se pasivo, el verbo concuerda con el sujeto paciente: se pelan las patatas, se baten seis huevos, pero se añade una pizca de sal. Es el recurso típico de las recetas y de las instrucciones impersonales."
    }
  ],
  "passive-impersonal-mastery-4": [
    {
      "type": "write",
      "prompt": "Escribe la entrada de una guía turística sobre un edificio histórico. Distingue el proceso (ser + participio) del estado resultante (estar + participio).",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Ser + participio para los hechos históricos (fue construido, fue destruido…)",
        "Estar + participio para el estado actual (está rehabilitado, está abierta…)",
        "Al menos una pasiva refleja (se conservan, se puede visitar…)",
        "Descripción objetiva propia de una guía"
      ],
      "modelAnswer": "El castillo de San Felipe fue construido en el siglo XV para defender el puerto. Durante la guerra de la Independencia fue parcialmente destruido por las tropas francesas y durante décadas estuvo abandonado. En 1998 fue adquirido por el ayuntamiento y restaurado con fondos europeos. Hoy el edificio está totalmente rehabilitado y la torre del homenaje está abierta al público. En sus salas se conservan armas y mapas de la época. La entrada está incluida en la tarjeta turística de la ciudad.",
      "explanation": "Ser + participio narra el proceso y admite agente (fue destruido por las tropas francesas); estar + participio describe el estado resultante (está rehabilitado, está abierta). La pasiva refleja (se conservan) completa los recursos impersonales."
    }
  ],
  "free-indirect-style-part-1-2": [
    {
      "type": "write",
      "prompt": "Escribe un correo a un amigo para contarle cómo vivió tu abuelo su primer día de jubilación. Mezcla tu narración con sus pensamientos en estilo indirecto libre, desplazando los tiempos verbales.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Narración en tercera persona y en pasado",
        "Pensamientos del personaje en estilo indirecto libre, sin verbo introductor",
        "Desplazamientos temporales: presente → imperfecto, futuro → condicional (ahora podría…)",
        "Marco de correo informal (saludo y despedida)"
      ],
      "modelAnswer": "¡Hola, Marcos! Te cuento lo de mi abuelo, que ayer se jubiló después de cuarenta años en la imprenta. Se levantó a las seis, como siempre, y se quedó sentado en la cocina sin saber qué hacer. ¿Y ahora qué? Ya no tenía que coger el autobús de las siete. Por fin podría leer todos esos libros que guardaba desde hacía años. Pero ¿quién iba a revisar las pruebas del periódico? Ese chico nuevo no sabía distinguir ni una errata. Al final, mi abuela lo mandó a comprar el pan. ¡Ya te contaré cómo sigue! Un abrazo, Elena",
      "explanation": "El estilo indirecto libre reproduce los pensamientos del abuelo sin verbo introductor (¿Y ahora qué? Por fin podría leer…), pero con los tiempos del narrador: el presente pasa a imperfecto (ya no tenía que coger) y el futuro, a condicional (podría)."
    }
  ],
  "c1r-contrast-narrative-tenses": [
    {
      "type": "write",
      "prompt": "Describe una fotografía antigua de una estación de tren e imagina la historia de la mujer que aparece en ella. Usa cada tiempo del relato con su función e incluye una frase en estilo indirecto libre.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Imperfecto para describir el escenario y las circunstancias",
        "Pretérito indefinido para los hechos que hacen avanzar la acción",
        "Pluscuamperfecto para lo anterior y condicional para el futuro del pasado",
        "Al menos una frase en estilo indirecto libre"
      ],
      "modelAnswer": "En la fotografía, tomada en 1952, una mujer joven esperaba en el andén de la estación de Atocha. Llevaba un abrigo gris y sostenía una maleta pequeña. A su alrededor, los viajeros corrían hacia los vagones y un mozo empujaba un carro lleno de baúles. Ella había vendido sus muebles la semana anterior y nunca más volvería a su pueblo. Cuando sonó el silbato, dudó un instante. ¿De verdad iba a dejarlo todo por un trabajo en Buenos Aires? Respiró hondo y subió al tren.",
      "explanation": "El imperfecto pinta el fondo (esperaba, llevaba, corrían), el indefinido hace avanzar la acción (sonó, dudó, subió), el pluscuamperfecto retrocede (había vendido) y el condicional anticipa el futuro desde el pasado (nunca más volvería). La pregunta final es la voz de la mujer en estilo indirecto libre."
    }
  ],
  "por-para-precision-2": [
    {
      "type": "write",
      "prompt": "Redacta la justificación de un proyecto con el que la asociación de vecinos de tu barrio solicita una subvención municipal. Explica por qué es necesario y para qué servirá el dinero.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Por para la causa o el motivo (por la falta de…, por esta razón…)",
        "Para para la finalidad (para ello, para que + subjuntivo…)",
        "Al menos una expresión profesional con por o para (por consiguiente, para ello…)",
        "Registro formal propio de un proyecto"
      ],
      "modelAnswer": "Justificación del proyecto «Huerto Compartido». El barrio de San Isidro carece de zonas verdes y, por la falta de espacios de encuentro, muchos mayores pasan el día solos. Por esta razón, la asociación de vecinos propone transformar un solar abandonado en un huerto comunitario. La subvención solicitada se destinará a la compra de herramientas y a la instalación de un sistema de riego. Para ello, se contará con voluntarios del barrio. El objetivo es fomentar la convivencia entre generaciones y crear un espacio para que los niños aprendan a cultivar. Por consiguiente, el proyecto beneficiará a más de trescientas familias.",
      "explanation": "Por expresa la causa que motiva el proyecto (por la falta de espacios, por esta razón); para, la finalidad que se persigue (para ello, para que los niños aprendan). En un texto así, confundirlas altera la lógica del argumento."
    }
  ],
  "por-para-precision-4": [
    {
      "type": "write",
      "prompt": "Cuéntale a un compañero, en forma de anécdota, un viaje de trabajo en el que todo salió mal. Usa expresiones fijas con por y para.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Para colmo, para añadir el último contratiempo",
        "Por si acaso, para una precaución",
        "Estar por + infinitivo (estar tentado de hacer algo)",
        "Por lo visto o por lo pronto, en una narración ordenada en pasado"
      ],
      "modelAnswer": "El viaje a Bilbao fue un desastre de principio a fin. El vuelo salió con dos horas de retraso y, al llegar, la maleta con las muestras no apareció. Por lo visto, la habían enviado a Lisboa. Por suerte, yo había guardado un catálogo en la mochila por si acaso. Camino del hotel del cliente, el taxi pinchó una rueda y, para colmo, empezó a llover a cántaros. Llegué empapado y con media hora de retraso. Estuve por cancelar la reunión, pero al final firmamos el contrato. Por lo pronto, ya he pedido que el próximo viaje sea en tren.",
      "explanation": "Estas expresiones se aprenden como bloque: por lo visto (según parece), por si acaso (como precaución), para colmo (el último agravante), estar por + infinitivo (estar tentado de hacer algo) y por lo pronto (de momento)."
    }
  ],
  "ser-estar-haber-limits-part-1-2": [
    {
      "type": "write",
      "prompt": "Describe para un blog a un compañero de trabajo muy peculiar. Juega con adjetivos que cambian de significado con ser y con estar.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cuatro adjetivos que cambian de significado, con ser y con estar (listo, interesado, despierto…)",
        "Estar violento con el sentido de «sentirse incómodo»",
        "Ser para rasgos estables y estar para situaciones concretas",
        "Descripción coherente apoyada en anécdotas"
      ],
      "modelAnswer": "Mi compañero Ramón es la persona más lista de la oficina: resuelve en cinco minutos lo que a los demás nos lleva una tarde. Sin embargo, nunca está listo a la hora de salir hacia una reunión. No es nada interesado; al contrario, ayuda a todo el mundo sin esperar nada a cambio. Últimamente está muy interesado en la fotografía y nos enseña sus fotos en cada pausa. Es un hombre tranquilo, nada violento, pero el otro día, cuando el jefe lo felicitó delante de todos, estaba violentísimo y no sabía dónde meterse. Es muy despierto, aunque los lunes nunca está despierto antes del segundo café.",
      "explanation": "Con ser, el adjetivo atribuye un rasgo estable (es listo, no es interesado, es despierto); con estar cambia de significado (está listo = preparado, está interesado en algo, estaba violento = incómodo, está despierto = no dormido)."
    }
  ],
  "ser-estar-haber-limits-part-2-1": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo entre dos amigos que prueban los platos de un restaurante nuevo y comentan la experiencia. Contrasta es bueno / está bueno y usa está claro.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Es bueno (valoración general) frente a está bueno (impresión inmediata del sabor)",
        "Está claro que para presentar algo como evidente",
        "Otros adjetivos valorativos con estar (está salado, está frío…)",
        "Formato de diálogo con turnos"
      ],
      "modelAnswer": "—¿Qué tal el pulpo? —Está buenísimo, de verdad. Pruébalo. —Mmm, sí, pero está un poco salado, ¿no? —Puede ser. De todas formas, el pulpo es bueno para la salud, así que no me quejo. —El vino también es bueno: es un rioja de una bodega muy conocida. —Pues a mí me lo han servido demasiado frío. —Está claro que no te conformas con nada. —Lo que está claro es que el cocinero sabe lo que hace. Volveremos. —Eso sí, con más tiempo: los camareros están desbordados.",
      "explanation": "Ser bueno valora algo en general (es bueno para la salud, es un buen vino); estar bueno expresa la impresión inmediata al probarlo (está buenísimo). Está claro que presenta algo como evidente en esa situación concreta."
    }
  ],
  "prepositional-verbs-part-1-3": [
    {
      "type": "write",
      "prompt": "Escribe un correo a tus amigos para contarles cómo encontraste por fin piso después de meses de búsqueda. Usa verbos con preposición fija, sobre todo con «en» y «con».",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos tres verbos con en (insistir en, empeñarse en, quedar en, fijarse en, consistir en)",
        "Al menos dos verbos con con (dar con, contar con, encontrarse con)",
        "La preposición se mantiene ante que (insistió en que…), sin queísmo",
        "Tono informal de correo entre amigos"
      ],
      "modelAnswer": "¡Hola a todos! Por fin tengo piso. Después de cuatro meses buscando, la semana pasada di con un ático precioso en Lavapiés. La verdad es que me fijé en el anuncio por casualidad. La dueña insistió en que la visita fuera ese mismo día, y allí me encontré con otros diez interesados. Su condición consistía en pagar seis meses por adelantado, pero mi madre se empeñó en ayudarme. Quedamos en firmar el contrato el lunes. Para la mudanza cuento con vosotros, ¿vale? ¡Os invito a cenar! Besos, Laura",
      "explanation": "El régimen es fijo: fijarse en, insistir en que, consistir en, empeñarse en, quedar en; dar con (encontrar), encontrarse con y contar con. Ante una oración con que, la preposición se mantiene (insistió en que la visita fuera…)."
    }
  ],
  "advanced-discourse-markers-4": [
    {
      "type": "write",
      "prompt": "Como presidente o presidenta de tu comunidad de vecinos, redacta una circular sobre las nuevas normas de la piscina. Advierte de las consecuencias de incumplirlas con los marcadores de la lección.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "So pena de o bajo pena de para una sanción impuesta por la norma",
        "A riesgo de para un riesgo que asume quien escribe",
        "Al menos dos marcadores avanzados más (cabe señalar, ahora bien, en definitiva…)",
        "Registro formal propio de una circular"
      ],
      "modelAnswer": "Estimados vecinos: Con motivo de la apertura de la piscina el próximo 15 de junio, la junta ha aprobado nuevas normas de uso. Cabe señalar que el acceso será exclusivo para propietarios e inquilinos, que deberán presentar su tarjeta, so pena de que se les niegue la entrada. Queda prohibido introducir envases de cristal, bajo pena de multa. Ahora bien, se permitirá la entrada de dos invitados por vivienda los fines de semana. A riesgo de resultar reiterativo, insisto en que los niños deberán ir siempre acompañados. En definitiva, se trata de que todos disfrutemos del verano. Atentamente, Julián Ortega, presidente de la comunidad",
      "explanation": "So pena de y bajo pena de anuncian una sanción que impone la norma (bajo pena de multa); a riesgo de introduce un riesgo que asume quien escribe (a riesgo de resultar reiterativo). Cabe señalar, ahora bien y en definitiva destacan, matizan y cierran."
    }
  ],
  "emphatic-structures-2": [
    {
      "type": "write",
      "prompt": "Cuenta la anécdota de una persona de tu entorno que sorprendió a todos con una decisión inesperada. Destaca lo esencial con oraciones escindidas y pseudoescindidas.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos dos pseudoescindidas (lo que hizo fue…, lo que nadie esperaba era…)",
        "Al menos una escindida con ser + relativo (fue entonces cuando…, fue ella quien…)",
        "Concordancia de ser y relativo adecuado (quien, cuando, donde)",
        "Narración en pasado con un momento culminante"
      ],
      "modelAnswer": "Mi prima Alicia trabajaba en un banco y parecía feliz. Lo que nadie esperaba era que, a los cuarenta años, lo dejara todo. Un domingo, durante la comida familiar, anunció que tenía una noticia. Lo que hizo fue levantarse, servir el café y decir con toda tranquilidad que se iba a Perú a abrir una escuela. Fue entonces cuando mi tío dejó caer la taza. Fue mi abuela quien rompió el silencio: «Lo que tienes que hacer es llamarnos cada semana». Y así fue: lo que más ilusión nos hace ahora es leer sus correos desde Cuzco.",
      "explanation": "Las pseudoescindidas (lo que hizo fue…, lo que nadie esperaba era…) aplazan la información clave hasta el final; las escindidas con ser (fue entonces cuando, fue mi abuela quien) señalan el elemento destacado con el relativo adecuado."
    }
  ],
  "emphatic-structures-4": [
    {
      "type": "write",
      "prompt": "Escribe para una revista literaria la reseña de un libro que te haya marcado. Usa «no… sino que», «si algo…, eso es…» y el «sí» enfático.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "No (solo)… sino que para corregir o ampliar una idea con una oración completa",
        "Si algo…, eso es… para destacar la cualidad principal",
        "El sí enfático (yo sí que creo…, sí que me pareció…)",
        "Una valoración final con recomendación"
      ],
      "modelAnswer": "«Nada», de Carmen Laforet, no se limita a retratar la Barcelona de la posguerra, sino que convierte una casa sombría en el reflejo de todo un país. Si algo distingue a esta novela, eso es la voz de Andrea, una narradora que observa más de lo que juzga. Muchos lectores la consideran lenta; yo sí que creo que su ritmo es deliberado. Los personajes no son simplemente excéntricos, sino que encarnan el miedo y la miseria de la época. Al terminarla, la ciudad sí que me pareció otra. En definitiva, una lectura imprescindible.",
      "explanation": "No… sino que corrige una idea con una oración completa (no se limita a retratar…, sino que convierte…); si algo…, eso es… señala la cualidad más importante; el sí enfático (yo sí que creo) refuerza una afirmación frente a la opinión contraria."
    }
  ],
  "future-conditional-conjecture-2": [
    {
      "type": "write",
      "prompt": "En el desván has encontrado una foto de tus abuelos de jóvenes. Escribe en tu diario tus conjeturas sobre el momento en que la hicieron.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Condicional simple para conjeturas sobre el pasado (tendrían veinte años, serían las seis…)",
        "Condicional compuesto para algo anterior a ese momento (habrían ido…)",
        "Futuro o futuro perfecto para conjeturas sobre el presente (¿dónde estará…?, la habrá guardado…)",
        "Registro personal propio de un diario"
      ],
      "modelAnswer": "Querido diario: Hoy he encontrado en el desván una foto de los abuelos. Tendrían unos veinte años y estarían recién casados, porque ella todavía llevaba el ramo en la mano. Serían las seis o las siete de la tarde, a juzgar por las sombras. Detrás se ve un mar que no reconozco: habrían ido de viaje de novios a Galicia, como contaba siempre la abuela. ¿Quién les haría la foto? Algún amigo, supongo. La abuela la habrá guardado ahí para que no se estropeara. ¿Dónde estará el resto del álbum?",
      "explanation": "El condicional sitúa la conjetura en el pasado (tendrían veinte años, serían las seis, ¿quién les haría la foto?) y el condicional compuesto, en un momento anterior (habrían ido); el futuro y el futuro perfecto suponen sobre el presente (¿dónde estará…?, la habrá guardado)."
    }
  ],
  "future-conditional-conjecture-4": [
    {
      "type": "write",
      "prompt": "Escribe un mensaje al grupo de WhatsApp de tus amigos: la cena de esta noche está en el aire porque no sabes si llegarás a tiempo ni quién vendrá. Expresa distintos grados de probabilidad.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "A lo mejor + indicativo",
        "Quizás o tal vez con subjuntivo (más duda) y con indicativo (más seguridad)",
        "Deber de + infinitivo para una suposición",
        "Futuro de conjetura (estará…)"
      ],
      "modelAnswer": "¡Hola, chicos! Cambio de planes, o eso creo. Mi tren va con retraso, así que a lo mejor llego a las nueve y media. Quizás sea mejor reservar para las diez. Marta no contesta; debe de estar todavía en el gimnasio. Tal vez venga con su hermano, que está de visita estos días. Javi dijo ayer que tenía fiebre, así que estará en la cama. Si al final somos solo tres, quizás lo dejamos para el sábado. ¿Qué os parece? Decidme algo pronto.",
      "explanation": "A lo mejor va siempre con indicativo (a lo mejor llego); quizás y tal vez admiten subjuntivo para más duda (tal vez venga) e indicativo para más seguridad (quizás lo dejamos). Deber de + infinitivo y el futuro (estará en la cama) expresan suposición."
    }
  ],
  "formal-informal-register-2": [
    {
      "type": "write",
      "prompt": "Escribe un breve artículo para el blog de una academia de idiomas con consejos para un estudiante extranjero que no sabe cuándo usar tú o usted. Explica qué factores influyen.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos tres factores (edad, jerarquía, ámbito, confianza, país…)",
        "Ejemplos breves con tú y con usted",
        "Conectores para ordenar los consejos (en primer lugar, además, por último…)",
        "Registro divulgativo y cercano"
      ],
      "modelAnswer": "¿Tú o usted? Es la duda de muchos estudiantes. En primer lugar, fíjate en la edad: a una persona mayor desconocida es mejor decirle «¿Me puede ayudar?» que «¿Me puedes ayudar?». Además, la jerarquía y el ámbito importan: en un banco o en una entrevista de trabajo, el usted es lo esperable, aunque en muchas empresas jóvenes todos se tutean. También influye el país: en España se tutea con más facilidad que en Colombia o en México. Por último, si dudas, empieza con usted y deja que el otro te proponga el tú.",
      "explanation": "El artículo presenta los factores que deciden el tratamiento (edad, jerarquía, ámbito y país) con ejemplos contrastados (¿Me puede ayudar? / ¿Me puedes ayudar?) y los ordena con conectores; el consejo final recoge la norma de prudencia: empezar con usted."
    }
  ],
  "formal-informal-register-4": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo entre una consultora y un cliente nuevo que empiezan tratándose de usted y, a mitad de la conversación, pasan al tú.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Primera parte coherente con usted (le, su, siéntese…)",
        "Una propuesta explícita de tuteo y su aceptación",
        "Segunda parte coherente con tú (te, tu, mira…)",
        "Cambio de pronombres, posesivos e imperativos sin mezclas"
      ],
      "modelAnswer": "—Buenos días, señor Ibáñez. Pase, por favor. ¿Ha encontrado bien la oficina? —Sí, sin problema. Su secretaria me ha explicado el camino. —Me alegro. Siéntese. ¿Quiere un café? —Se lo agradezco. Por cierto, ¿le parece que nos tuteemos? Vamos a trabajar juntos muchos meses. —¡Claro! Yo soy Paula. —Y yo, Gonzalo. Mira, Paula, te he traído el informe de ventas. —Perfecto. Déjamelo aquí y cuéntame cuál es tu prioridad para este año. —Sobre todo, quiero que me ayudes a entrar en el mercado mexicano.",
      "explanation": "Con usted cambian también los pronombres, los posesivos y los imperativos (pase, siéntese, su secretaria, ¿le parece…?); tras la propuesta de tuteo todo pasa al tú (mira, te he traído, déjamelo, tu prioridad)."
    }
  ],
  "c1r-transform-tu-to-vos": [
    {
      "type": "write",
      "prompt": "Un amigo español va a pasar una semana en tu departamento de Buenos Aires mientras estás de viaje. Déjale una nota con instrucciones y recomendaciones, con el voseo rioplatense.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cuatro formas de presente con vos (tenés, querés, podés…)",
        "Al menos tres imperativos con vos (tomá, probá, andá…)",
        "Pronombres coherentes con el voseo (te, nunca ti ni tú)",
        "Léxico rioplatense (departamento, subte, colectivo…)"
      ],
      "modelAnswer": "¡Bienvenido, Pablo! Las llaves del departamento las tenés en el cajón de la entrada. Si querés ir al centro, tomá el subte en la esquina; el colectivo 152 también te deja cerca. Probá las medialunas de la panadería de enfrente: son las mejores del barrio. Podés usar mi bici, pero cerrala siempre con el candado. El domingo andá a la feria de San Telmo; seguro que te va a encantar. Si tenés algún problema, llamá a mi vecina Rosa, que es un amor. No te olvides de regar las plantas. ¡Disfrutá la ciudad! Abrazo, Martín",
      "explanation": "El voseo rioplatense acentúa la última sílaba en presente (tenés, querés, podés) y forma el imperativo sin la -d final (tomá, probá, andá, llamá); con un pronombre enclítico la tilde desaparece (cerrala). En el imperativo negativo, la norma culta usa la forma de tú: no te olvides."
    }
  ],
  "c1r-dialogue-lab-porteno": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo en un kiosco de Buenos Aires: el kiosquero atiende primero a un chico joven, al que vosea, y después a una señora mayor, a la que trata de usted. Incluye marcadores porteños.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Voseo coherente con el cliente joven (andás, querés, mirá…)",
        "Usted coherente con la señora (necesita, quiere, cuídese…)",
        "Al menos tres marcadores porteños (che, dale, ¿viste?, bárbaro…)",
        "Formato de diálogo con turnos"
      ],
      "modelAnswer": "—¡Hola, che! ¿Qué andás buscando? —Una carga para la tarjeta del subte y un alfajor. —Dale. ¿Querés de chocolate o de dulce de leche? —De chocolate. Tomá. —Gracias. Mirá que hoy hay paro de colectivos, ¿viste? —¿En serio? Gracias por avisar. —De nada, ¡suerte! (Entra una señora.) —Buenas tardes, señora. ¿Qué necesita? —El diario, por favor. —Acá tiene. ¿Quiere también la revista del domingo? —No, gracias, querido. —Bárbaro. Cuídese mucho y salude a su marido de mi parte.",
      "explanation": "En Buenos Aires, el vos es el trato de confianza (andás, querés, tomá, mirá) y el usted mantiene la distancia y el respeto (necesita, quiere, cuídese, salude). Che, dale, ¿viste? y bárbaro son marcadores típicos de la conversación porteña."
    }
  ],
  "c1r-word-web-everyday-objects": [
    {
      "type": "write",
      "prompt": "Estás de viaje por México. Escribe una postal a un amigo de España para contarle qué palabras cotidianas has tenido que cambiar.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cinco objetos cotidianos con su variante mexicana y española (carro / coche, celular / móvil…)",
        "Una anécdota breve de una confusión o una adaptación",
        "Pretérito perfecto para las experiencias del viaje (he tenido que…)",
        "Tono informal de postal, con saludo y despedida"
      ],
      "modelAnswer": "¡Hola, Dani! Te escribo desde Oaxaca. Aquí todo es precioso, pero he tenido que reaprender palabras. Ya no digo móvil, sino celular, y el coche es el carro. Ayer pedí un zumo de naranja y la mesera tardó un segundo en entender que quería un jugo. Los autobuses son camiones, y el piso que hemos alquilado es un departamento. Lo más divertido: para decir que algo es estupendo, aquí dicen que está padrísimo. ¡Te llevo mezcal! Un abrazo, Irene",
      "explanation": "Cada variante es correcta en su zona: celular, carro, jugo, camión y departamento en México; móvil, coche, zumo, autobús y piso en España. Al viajar, adoptar el vocabulario local facilita la comunicación."
    }
  ],
  "regional-lexical-variation-4": [
    {
      "type": "write",
      "prompt": "Cuenta una anécdota, real o inventada, en la que una palabra que en tu país es neutra provocó un malentendido en otro país hispanohablante.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos dos falsos amigos dialectales, con su significado en cada país",
        "Narración en pasado con desenlace",
        "Conectores narrativos (cuando, entonces, más tarde, desde entonces…)",
        "Una reflexión final sobre la variación léxica"
      ],
      "modelAnswer": "Cuando llegué a Bogotá para un congreso, un colega me preguntó si quería un tinto. Yo, que soy de Madrid, pensé que me ofrecía vino a las nueve de la mañana y le contesté, muy serio, que era demasiado pronto. Entonces se echó a reír: en Colombia, un tinto es un café solo. Más tarde, en el turno de preguntas, una asistente me dijo que le daba pena intervenir. Creí que estaba triste, pero en realidad le daba vergüenza. Desde entonces, antes de interpretar una palabra, pregunto qué significa allí.",
      "explanation": "Los falsos amigos dialectales cambian de significado según el país: en Colombia, un tinto es un café solo y dar pena significa dar vergüenza. Ante la duda, conviene preguntar en lugar de interpretar desde la propia variedad."
    }
  ],
  "neutral-vs-colloquial-2": [
    {
      "type": "write",
      "prompt": "Escribe la transcripción del audio de WhatsApp en el que le cuentas a tu mejor amiga una cita desastrosa. Usa a propósito los rasgos del habla coloquial.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Muletillas y marcadores conversacionales (o sea, pues nada, bueno, es que…)",
        "Al menos un diminutivo afectivo o irónico",
        "Hipérbole e ironía",
        "Interjecciones y exclamaciones"
      ],
      "modelAnswer": "¡Tía, no te lo vas a creer! O sea, lo de anoche fue de película, pero de terror. Pues nada, llego al restaurante y el chico ya estaba allí, con su camisita de cuadros, súper majo. Bueno, al principio bien, ¿eh? Pero es que se pasó dos horas hablando de su ex. ¡Dos horas! Yo ya me moría de aburrimiento, te lo juro. Y para rematar, cuando llega la cuenta, dice que se ha dejado la cartera en casa. ¡Qué morro! Total, que pagué yo. Mañana te cuento más, que me muero de sueño.",
      "explanation": "El registro coloquial se reconoce por las muletillas (o sea, pues nada, bueno, es que), el diminutivo irónico (camisita), la hipérbole (me moría de aburrimiento), la ironía (de película, pero de terror) y las interjecciones (¡Qué morro!)."
    }
  ],
  "neutral-vs-colloquial-4": [
    {
      "type": "write",
      "prompt": "Un compañero te ha contado que «el nuevo metió la pata hasta el fondo con el cliente y se armó la gorda». Redacta para la dirección un breve informe neutro sobre el incidente.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Expresiones coloquiales sustituidas por equivalentes neutros (cometer un error, generar un conflicto…)",
        "Registro objetivo, sin valoraciones personales ni intensificadores",
        "Estructura de informe: hechos, consecuencias y medidas propuestas",
        "Vocabulario preciso"
      ],
      "modelAnswer": "Asunto: incidencia con el cliente Grupo Lumen. El pasado martes, un empleado recién incorporado al departamento comercial cometió un error al enviar al cliente una oferta con precios desactualizados. El fallo se detectó al día siguiente, cuando el cliente solicitó explicaciones y manifestó su malestar por la falta de rigor. La situación generó un conflicto que requirió la intervención de la jefa de equipo. Para evitar que se repita, se propone revisar las ofertas antes de su envío y reforzar la formación de los nuevos empleados. Se adjunta la correspondencia intercambiada con el cliente.",
      "explanation": "El informe sustituye las expresiones coloquiales por equivalentes neutros: «meter la pata» pasa a «cometer un error» y «armarse la gorda», a «generar un conflicto». Sin intensificadores ni juicios personales, el mismo contenido resulta objetivo y adecuado para la dirección."
    }
  ],
  "formal-correspondence-2": [
    {
      "type": "write",
      "prompt": "Escribe una carta formal a la secretaría de tu facultad para solicitar la convalidación de dos asignaturas que cursaste en otra universidad.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Saludo adecuado para un destinatario institucional (A la atención de…, Estimados señores…)",
        "Presentación del solicitante y exposición del motivo",
        "Petición cortés con condicional o subjuntivo (les agradecería que…)",
        "Despedida formal acorde con el saludo"
      ],
      "modelAnswer": "A la atención de la Secretaría de la Facultad de Filología. Estimados señores: Me llamo Andrea Molina Ruiz y estoy matriculada en el segundo curso del grado en Estudios Hispánicos. Les escribo para solicitar la convalidación de las asignaturas «Latín I» y «Lingüística General», que cursé y aprobé el año pasado en la Universidad de Granada. Adjunto el certificado académico y los programas de ambas asignaturas. Les agradecería que me indicaran el plazo de resolución y si es necesario presentar algún documento adicional. Sin otro particular, les saluda atentamente, Andrea Molina Ruiz",
      "explanation": "Ante una institución se usa un saludo impersonal (A la atención de…, Estimados señores) y una despedida acorde (Sin otro particular, les saluda atentamente). La petición se suaviza con les agradecería que + imperfecto de subjuntivo."
    }
  ],
  "formal-correspondence-4": [
    {
      "type": "write",
      "prompt": "Escribe una carta de reclamación a una aerolínea que perdió tu maleta y lleva diez días sin darte respuesta. Sé firme, preciso y cortés a la vez.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Datos precisos (fecha, número de vuelo, número de expediente)",
        "Exposición de los hechos sin rodeos ni tono agresivo",
        "Petición concreta con plazo (solicito que…, en un plazo de…)",
        "Fórmulas formales de apertura y cierre"
      ],
      "modelAnswer": "Estimados señores: Me dirijo a ustedes en relación con el equipaje extraviado en el vuelo 3456 Madrid-Roma del pasado 3 de julio. Ese mismo día presenté la reclamación correspondiente, con número de expediente MAD-78123. Desde entonces han transcurrido diez días sin que haya recibido ninguna información, a pesar de mis tres llamadas al servicio de atención al cliente. Por ello, solicito que me indiquen, en un plazo de cinco días hábiles, la situación de mi maleta y el procedimiento para reclamar la indemnización de los gastos ocasionados. Adjunto los recibos de las compras de primera necesidad. Atentamente, Jorge Salas Medina",
      "explanation": "Una reclamación eficaz combina precisión (fecha, vuelo, número de expediente), firmeza sin agresividad (sin que haya recibido ninguna información) y una petición concreta con plazo (solicito que me indiquen, en un plazo de cinco días hábiles…)."
    }
  ],
  "academic-essay-writing-part-1-1": [
    {
      "type": "write",
      "prompt": "Escribe la introducción de un ensayo argumentativo sobre si las universidades deberían eliminar los exámenes finales. Presenta el debate y formula una tesis defendible que admita una postura contraria.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Contextualización del debate",
        "Una tesis clara y defendible, no una simple hipótesis ni un dato",
        "Reconocimiento de la postura contraria",
        "Anuncio de la estructura del ensayo en registro impersonal (se defenderá, se analizarán…)"
      ],
      "modelAnswer": "En los últimos años, numerosas universidades europeas han empezado a cuestionar el examen final como principal instrumento de evaluación. Sus detractores sostienen que premia la memorización y genera una ansiedad innecesaria; sus defensores, en cambio, lo consideran la única garantía de que el estudiante domina la materia en su conjunto. En este ensayo se defenderá que el examen final no debe eliminarse, sino perder peso a favor de la evaluación continua. Para ello, se analizarán en primer lugar sus limitaciones y, a continuación, las ventajas de un modelo mixto.",
      "explanation": "La introducción sitúa el debate, recoge las dos posturas y formula una tesis concreta y discutible (el examen no debe eliminarse, sino perder peso). Las construcciones impersonales (se defenderá, se analizarán) anuncian la estructura sin recurrir al yo."
    }
  ],
  "academic-essay-writing-part-2-1": [
    {
      "type": "write",
      "prompt": "Escribe una reseña crítica breve de un artículo académico imaginario que afirma que las redes sociales reducen la capacidad de atención de los adolescentes. Valora sus conclusiones con afirmaciones atenuadas.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos tres recursos de atenuación (los datos sugieren, parecería, cabría preguntarse…)",
        "Una objeción metodológica formulada con cautela",
        "Despersonalización (se analiza, cabe señalar…)",
        "Una valoración final equilibrada"
      ],
      "modelAnswer": "El artículo de Ruiz y Ortega analiza la relación entre el uso de redes sociales y la capacidad de atención en adolescentes. Los datos presentados sugieren una correlación negativa entre ambas variables, especialmente a partir de tres horas diarias de uso. No obstante, cabría preguntarse si la muestra, limitada a ochenta estudiantes de un solo centro, permite generalizar los resultados. Asimismo, parecería aventurado hablar de causalidad, ya que no se controlan otros factores, como las horas de sueño. Con todo, se trata de una aportación valiosa que, previsiblemente, abrirá nuevas líneas de investigación.",
      "explanation": "La atenuación (sugieren, cabría preguntarse, parecería aventurado, previsiblemente) permite formular objeciones sin afirmaciones rotundas; la impersonalidad (no se controlan, se trata de) mantiene la distancia propia de la reseña académica."
    }
  ]
};
