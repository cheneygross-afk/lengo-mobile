// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { dict, lc, spk, wr } from "./skills-authoring";

// C2 listening, speaking and writing practice, appended to the named
// lessons' final reviews by withSkills() (skills.ts). Instructions in
// Spanish. Listening at this level tests implicature, irony, register
// and fast speech; speaking goes to the dialogue labs and spoken
// missions.
export const C2_SKILLS: Record<string, Exercise[]> = {
  "c2r-dialogue-lab-notary": [
    spk("Los comparecientes manifiestan haber leído el documento y estar conformes con su contenido.", "Ritmo lento y regular, sin subir la voz: es lenguaje notarial. «Comparecientes»: com-pa-re-CIEN-tes.", "Fórmula notarial: manifestar + infinitivo compuesto (haber leído)."),
  ],
  "c2r-dialogue-lab-anamnesis": [
    lc(
      "—¿Desde cuándo tiene el dolor? —Desde el martes. Al principio era sordo, pero desde anoche es punzante y no me deja dormir.",
      "Escucha. ¿Cómo ha cambiado el dolor?",
      ["Ha pasado de sordo a punzante", "Ha pasado de punzante a sordo", "Ha desaparecido por la noche", "Es igual desde el martes"],
      0,
      "«Al principio era sordo, pero desde anoche es punzante»: ha empeorado de sordo a punzante. No ha desaparecido (no le deja dormir) ni se ha mantenido igual."
    ),
    spk("¿El dolor se le irradia hacia el brazo o se queda localizado en el pecho?", "Pregunta disyuntiva: sube en «brazo» y baja en «pecho».", "Pregunta clínica con irradiarse y localizado: registro médico ante el paciente."),
  ],
  "c2r-idioms-dialogue-lab": [
    lc(
      "—¿Al final le dijiste a tu jefe lo del ascenso? —Qué va, me eché atrás en el último momento. Ya me conoces: mucho ruido y pocas nueces.",
      "Escucha. ¿Qué hizo la segunda persona?",
      ["No se atrevió a hablar con su jefe", "Consiguió el ascenso", "Discutió con su jefe", "Habló con su jefe, pero sin éxito"],
      0,
      "«Me eché atrás» = se arrepintió de hacerlo, y «mucho ruido y pocas nueces» se lo aplica a sí misma: mucha intención, ningún resultado. No habló con el jefe, así que no hubo ascenso, discusión ni negativa."
    ),
    spk("Me eché atrás en el último momento; ya me conoces, mucho ruido y pocas nueces.", "Pausa en el punto y coma; el refrán final va en tono más bajo, casi resignado.", "Echarse atrás (desistir) y un refrán usado sobre uno mismo con autoironía."),
    spk("No te preocupes, que no es para tanto; ya verás como se arregla.", "«No es para tanto» con acento en «tanto»; «ya verás» sube ligeramente.", "Fórmulas coloquiales para quitar hierro a un problema."),
  ],
  "c2r-proverbs-quote-naturally": [
    lc(
      "—Me han despedido, pero me ofrecen otro trabajo mejor pagado. —Bueno, no hay mal que por bien no venga.",
      "Escucha. ¿Qué quiere decir la segunda persona?",
      ["Que algo malo ha traído algo bueno", "Que el nuevo trabajo será peor", "Que no debería aceptar la oferta", "Que el despido era merecido"],
      0,
      "«No hay mal que por bien no venga»: de una desgracia sale algo positivo. No juzga el despido ni desaconseja la oferta; al contrario, ve el lado bueno."
    ),
    spk("Bueno, como dice mi abuela, al mal tiempo, buena cara.", "Introduce el refrán con una pequeña pausa tras «abuela», y di el refrán con ritmo binario.", "Citar un refrán con naturalidad: como dice…, + refrán."),
  ],
  "c2r-humor-dialogue-lab": [
    spk("¡Hombre, qué puntualidad! Solo llegas una hora tarde.", "Ironía: exagera el tono de elogio en «qué puntualidad» para que se note que es broma.", "La ironía se apoya en la entonación: se dice lo contrario de lo que se piensa."),
  ],
  "c2r-humor-irony-contrast": [
    lc(
      "¡Genial! Justo hoy, que tenía la presentación, se me ha roto el portátil. Mi día de suerte.",
      "Escucha. ¿Cómo se siente el hablante?",
      ["Molesto: usa la ironía", "Contento de verdad", "Indiferente", "Aliviado por no tener que presentar"],
      0,
      "«¡Genial!» y «mi día de suerte» dicen lo contrario de lo que pasa: es ironía, y el hablante está molesto. Nada indica alegría real, indiferencia ni alivio."
    ),
  ],
  "c2r-indirect-requests-implicature": [
    lc(
      "Uf, qué calor hace aquí dentro, ¿no? Y eso que la ventana está justo a tu lado…",
      "Escucha. ¿Qué quiere realmente el hablante?",
      ["Que la otra persona abra la ventana", "Informar sobre la temperatura", "Que la otra persona se cambie de sitio", "Quejarse del tiempo en general"],
      0,
      "La mención de la ventana «justo a tu lado» convierte el comentario en una petición indirecta: que la abra. No es solo información, no pide que se cambie de sitio y habla del calor de dentro, no del tiempo."
    ),
  ],
  "c2r-euphemism-decode": [
    lc(
      "La empresa ha anunciado un proceso de reestructuración que afectará a cerca de doscientos puestos de trabajo.",
      "Escucha. ¿Qué significa en realidad el anuncio?",
      ["Que va a despedir a unas doscientas personas", "Que va a contratar a doscientas personas", "Que va a cambiar de oficina", "Que va a subir los sueldos"],
      0,
      "«Reestructuración que afectará a […] puestos de trabajo» es un eufemismo corporativo de despidos. Afectar a puestos nunca se usa para contratar ni para mejoras salariales."
    ),
  ],
  "c2r-exclamations-dialogue-reactions": [
    spk("¡No me digas! ¿En serio te ha tocado la lotería?", "Sorpresa: «¡No me digas!» con tono alto y descendente; la pregunta sube al final.", "Reacción nativa de sorpresa antes de pedir confirmación."),
    spk("¡Anda ya! Eso no te lo crees ni tú.", "«¡Anda ya!» con fuerza en «ya»; la segunda frase, más baja y rápida.", "Incredulidad coloquial (España): anda ya, no te lo crees ni tú."),
  ],
  "c2r-business-idioms-meeting": [
    lc(
      "Vamos a ver, no nos andemos por las ramas: o recortamos gastos este trimestre o no llegamos a fin de año.",
      "Escucha. ¿Qué pide la persona que habla?",
      ["Ir directamente al problema", "Aplazar la decisión", "Contratar a más gente", "Hablar de otros temas primero"],
      0,
      "«No nos andemos por las ramas» = no demos rodeos. Plantea el dilema sin rodeos; no propone aplazar, contratar ni cambiar de tema."
    ),
    spk("No nos andemos por las ramas: hay que tomar una decisión hoy.", "Tras los dos puntos, pausa y tono firme.", "Andarse por las ramas: dar rodeos. En negativo, pide ir al grano."),
  ],
  "c2r-strategy-register-shifts": [
    lc(
      "Estimados asistentes, bienvenidos a esta jornada. Bueno, y ahora que ya he dicho lo que tocaba, ¡vamos al lío, que se nos hace tarde!",
      "Escucha. ¿Qué hace el orador?",
      ["Pasa de un registro formal a uno coloquial", "Mantiene un registro formal", "Pasa de un registro coloquial a uno formal", "Habla en registro técnico"],
      0,
      "Empieza con una fórmula formal (estimados asistentes) y cambia a lo coloquial (lo que tocaba, vamos al lío). Es un cambio de registro buscado para acercarse al público."
    ),
  ],
  "c2r-strategy-fast-speech": [
    lc(
      "Pa' que lo sepas, ¿eh? Yo no he dicho na' de eso.",
      "Escucha. ¿Qué dice el hablante?",
      ["Que él no ha dicho nada de eso", "Que lo ha dicho para que lo sepas", "Que no sabe nada de eso", "Que lo dirá más tarde"],
      0,
      "En el habla rápida, «pa'» es para y «na'» es nada: «Para que lo sepas, yo no he dicho nada de eso». No afirma haberlo dicho ni habla de lo que sabe."
    ),
    spk("Pa' que lo sepas, yo no he dicho na' de eso.", "Imita la reducción: «pa'», «na'». En un registro cuidado dirías «para» y «nada».", "Apócope coloquial del habla rápida; entiéndela, pero úsala solo en contextos informales."),
  ],
  "c2r-strategy-radio-interview": [
    lc(
      "—¿Cree que la medida llega tarde? —Hombre, tarde no diría yo; digamos que llega cuando ya no quedaba más remedio.",
      "Escucha. ¿Qué opina la entrevistada de la medida?",
      ["Que se ha tomado por obligación, no por convicción", "Que llega demasiado pronto", "Que es una medida innecesaria", "Que llega justo a tiempo y por convicción"],
      0,
      "Evita la palabra «tarde», pero «cuando ya no quedaba más remedio» implica que se tomó por necesidad. No dice que sea pronto ni innecesaria, y no habla de convicción."
    ),
    lc(
      "Y con esto nos vamos a una breve pausa. Volvemos en unos minutos con el resumen de la actualidad deportiva.",
      "Escucha. ¿Qué va a pasar ahora en el programa?",
      ["Una pausa y después las noticias deportivas", "El final del programa", "Una entrevista a un deportista", "El parte meteorológico"],
      0,
      "«Breve pausa» y «volvemos […] con el resumen de la actualidad deportiva». El programa no termina y no se anuncian entrevistas ni el tiempo."
    ),
  ],
  "c2r-strategy-note-taking": [
    dict("En primer lugar, conviene distinguir entre crecimiento y desarrollo.", "Se escribe: En primer lugar, conviene distinguir entre crecimiento y desarrollo. Crecimiento con c (seseo: suena como s)."),
  ],
  "c2r-debate-concession-dialogue": [
    spk("Le concedo que los datos son preocupantes, pero de ahí a hablar de catástrofe hay un trecho.", "Pausa tras «preocupantes»; marca «de ahí a» como giro.", "Conceder y refutar: le concedo que…, pero de ahí a… hay un trecho."),
  ],
  "c2r-debate-mission-closing": [
    spk("Podemos seguir mirando hacia otro lado, o podemos empezar hoy. La decisión es nuestra.", "Dos opciones en paralelo con la misma melodía; la última frase, corta y descendente.", "Cierre retórico: disyuntiva y frase breve final."),
  ],
  "c2r-rhetorical-mission-speech": [
    spk("¿Quién no ha sentido alguna vez que el tiempo se le escapa? Todos. Y precisamente por eso estamos aquí.", "La pregunta retórica sube; el «Todos» cae seco, tras una pausa.", "Hipófora: el orador pregunta y se responde."),
    spk("¿Vamos a resignarnos? ¿Vamos a esperar a que otros decidan por nosotros? No. Rotundamente, no.", "Serie interrogativa: cada pregunta, un poco más alta; el «no» final, bajo y firme.", "Anáfora (¿Vamos a…?) y respuesta enfática."),
  ],
  "c2r-interview-mission-mock": [
    spk("Uno de mis puntos de mejora es la delegación; me cuesta soltar las tareas, aunque estoy aprendiendo a hacerlo.", "Tono sereno, sin disculparse: pausa en el punto y coma.", "Hablar de un punto débil con honestidad y mostrar cómo se trabaja en él."),
    spk("En mi último puesto lideré un equipo de ocho personas y logramos reducir los plazos de entrega un veinte por ciento.", "Ritmo seguro; destaca el dato final (veinte por ciento).", "Método STAR: situación, acción y resultado cuantificado."),
  ],
  "c2r-conflict-acknowledge-perspective": [
    spk("Entiendo perfectamente que esto le moleste, y quiero que sepa que lo vamos a resolver.", "Tono bajo y pausado para calmar; nada de subidas bruscas.", "Reconocer la emoción del otro sin ceder: entiendo que + subjuntivo."),
  ],
  "c2r-present-openings": [
    spk("Imaginen por un momento que mañana desaparecieran todas las abejas del planeta.", "Pausa después de «por un momento»; baja la voz en «abejas del planeta» para crear expectación.", "Apertura que engancha: una hipótesis con imperfecto de subjuntivo."),
  ],
  "c2r-psych-therapy-dialogue": [
    spk("No es exactamente tristeza; es más bien una especie de nostalgia por algo que nunca tuve.", "Pausa reflexiva tras «tristeza»; ritmo lento.", "Matizar una emoción: no es exactamente…, es más bien…"),
  ],
  "c2r-science-dialogue-interview": [
    spk("Los resultados son prometedores, pero todavía es pronto para hablar de una cura.", "Contraste: «prometedores» con tono positivo; «todavía es pronto» más bajo.", "Divulgación responsable: entusiasmo matizado con cautela."),
  ],
  "c2r-econ-inflation-news": [
    lc(
      "La inflación se moderó en septiembre hasta el 3,2 %, tres décimas menos que en agosto, gracias sobre todo al abaratamiento de los carburantes.",
      "Escucha la noticia. ¿Qué ha pasado con la inflación?",
      ["Ha bajado ligeramente por la gasolina más barata", "Ha subido por la gasolina más cara", "Se ha mantenido igual", "Ha bajado por los alimentos"],
      0,
      "«Se moderó […] tres décimas menos» = bajó un poco, y la causa es «el abaratamiento de los carburantes» (combustible más barato). No subió, no se mantuvo y no se mencionan los alimentos."
    ),
  ],
  "c2r-story-detective-notification": [
    dict("Se le notifica que dispone de un plazo de diez días hábiles para presentar alegaciones.", "Se escribe: Se le notifica que dispone de un plazo de diez días hábiles para presentar alegaciones. Hábiles con h y tilde."),
  ],
  "c2r-history-spiral-review": [
    dict("Cuando estalló la guerra, la ciudad ya había perdido la mitad de su población.", "Se escribe: Cuando estalló la guerra, la ciudad ya había perdido la mitad de su población. Estalló (indefinido) frente a había perdido (pluscuamperfecto)."),
  ],
  "c2r-challenge-exit-ticket": [
    lc(
      "No es que el plan sea malo, ojo; es que, tal y como está planteado, me temo que no va a ninguna parte.",
      "Escucha. ¿Qué opina realmente el hablante del plan?",
      ["Que, tal como está, no funcionará", "Que es un plan excelente", "Que es malo desde la base", "Que no tiene opinión"],
      0,
      "«No es que sea malo» rechaza la crítica absoluta, pero «tal y como está planteado […] no va a ninguna parte» dice que así no funcionará. No lo elogia ni es neutral."
    ),
  ],
  "c2r-politics-opinion-column": [
    wr(
      "Escribe una columna de opinión para un periódico digital sobre esta cuestión: «¿Debería rebajarse la edad de voto a los dieciséis años?». Toma partido, anticipa las objeciones y ciérrala con una idea que se recuerde.",
      [200, 260],
      [
        "Un arranque que enganche (anécdota, pregunta, dato)",
        "Una tesis explícita y argumentos jerarquizados",
        "Anticipación y refutación de al menos una objeción",
        "Recursos retóricos propios de la columna (ironía, pregunta retórica, paralelismo…)",
        "Un cierre memorable y un registro culto pero cercano",
      ],
      "Mi sobrina tiene dieciséis años. Trabaja los fines de semana, paga impuestos cada vez que se compra unas zapatillas y sabe más de cambio climático que buena parte del Congreso. Sin embargo, cuando se decida quién gobernará el país en el que vivirá los próximos sesenta años, ella no tendrá nada que decir. Cuesta encontrar un argumento serio para justificarlo. Se dice, por ejemplo, que a esa edad no se tiene la madurez suficiente. Puede ser. Pero nadie exige un examen de madurez a los votantes de cuarenta, ni de ochenta, y sería difícil sostener que todos lo aprobarían. Se dice también que los jóvenes votarían lo que les dicten sus padres o las redes sociales, como si los adultos fuéramos inmunes a la propaganda. Lo cierto es que los países que ya han dado el paso, como Austria, no han sufrido ningún cataclismo; al contrario, los estudios indican que quien vota pronto tiende a seguir votando toda la vida. Ahí está, a mi juicio, la clave del asunto: la participación es un hábito, y los hábitos se adquieren antes de los dieciocho o, con frecuencia, no se adquieren nunca. Rebajar la edad de voto no resolverá la desafección política, pero sí puede impedir que se herede. Al fin y al cabo, les pedimos a los jóvenes que se preocupen por el futuro. Lo mínimo sería dejarles votarlo.",
      "La columna combina argumentación y estilo: arranque narrativo, refutación de objeciones con ironía (como si los adultos fuéramos inmunes), datos (Austria), una tesis matizada (no resolverá…, pero sí puede…) y un cierre en quiasmo o paralelismo que se recuerda (preocuparse por el futuro / votarlo)."
    ),
  ],
  "c2r-critic-mission-review": [
    wr(
      "Escribe una reseña crítica de 150 a 180 palabras de una novela, película o exposición reciente (real o imaginaria) para el suplemento cultural de un periódico. Debe informar, valorar con precisión y justificar la valoración.",
      [150, 180],
      [
        "Datos esenciales de la obra integrados con naturalidad",
        "Valoración precisa con adjetivos evaluativos matizados (no solo bueno o malo)",
        "Al menos un aspecto analizado con detalle (estructura, estilo, puesta en escena…)",
        "Una conclusión que sitúe la obra en su contexto o frente a otras",
      ],
      "Con «El invierno de los otros», su cuarta novela, Marta Iglesias abandona el tono intimista que la dio a conocer y se adentra en el territorio, siempre resbaladizo, de la novela coral. La apuesta es arriesgada y, en buena medida, acertada. A lo largo de una sola noche de nevada, seis vecinos de un edificio madrileño quedan incomunicados, y la autora aprovecha el encierro para ir desvelando, capítulo a capítulo, lo que cada uno oculta a los demás. Lo más logrado es la construcción de las voces: cada narrador tiene un ritmo y un léxico propios, hasta el punto de que el lector reconoce quién habla antes de leer su nombre. Menos convincente resulta el desenlace, que resuelve con prisa y cierta complacencia las tensiones acumuladas durante trescientas páginas. Aun así, estamos ante una novela ambiciosa, de prosa depurada y mirada compasiva, que confirma a Iglesias como una de las voces más interesantes de su generación.",
      "La reseña de nivel C2 informa sin resumir en exceso, analiza un aspecto con precisión (las voces narrativas) y matiza la valoración: arriesgada y acertada en buena medida, menos convincente el desenlace, aun así ambiciosa. Los adjetivos evaluativos (depurada, compasiva, complaciente) evitan el vago «bueno»."
    ),
  ],
  "c2r-mission-instancia": [
    wr(
      "Redacta una instancia dirigida al ayuntamiento para solicitar la licencia de ocupación de la vía pública con una terraza para tu cafetería. Sigue la estructura tradicional: identificación, EXPONE, SOLICITA, lugar, fecha y firma.",
      [120, 180],
      [
        "Identificación completa del solicitante en tercera persona",
        "Apartado EXPONE con los hechos numerados o en párrafos breves",
        "Apartado SOLICITA con una petición precisa en subjuntivo",
        "Fórmulas administrativas (que, en virtud de…, a los efectos oportunos…)",
        "Lugar, fecha y destinatario al final",
      ],
      "D.ª Lucía Fernández Mora, con DNI 12345678-Z y domicilio a efectos de notificaciones en la calle Mayor, n.º 14, 2.º B, de Alcalá de Henares, en calidad de titular del establecimiento «Café del Arco», EXPONE: Primero, que es titular de la licencia de actividad de cafetería concedida por este Ayuntamiento el 3 de marzo de 2021. Segundo, que desea instalar en la acera frente a dicho establecimiento una terraza de cuatro mesas y dieciséis sillas, que ocuparía una superficie aproximada de doce metros cuadrados. Tercero, que adjunta plano de situación y justificante del pago de la tasa correspondiente. Por todo lo expuesto, SOLICITA: Que, previos los trámites oportunos, se le conceda la licencia de ocupación de la vía pública para la temporada comprendida entre el 1 de abril y el 31 de octubre del presente año. En Alcalá de Henares, a 10 de febrero de 2026. Firmado: Lucía Fernández Mora. SR. ALCALDE-PRESIDENTE DEL AYUNTAMIENTO DE ALCALÁ DE HENARES",
      "La instancia tiene una estructura fija: el solicitante se presenta en tercera persona, EXPONE los hechos (que es titular…, que desea…) y SOLICITA en subjuntivo (que se le conceda). Las fórmulas (a efectos de notificaciones, previos los trámites oportunos, por todo lo expuesto) son propias del registro administrativo."
    ),
  ],
  "c2r-writing-mission-microstory": [
    wr(
      "Escribe un microrrelato de unas cien palabras. Debe tener un título, sembrar un indicio al principio que cobre sentido al final y cerrar con un giro.",
      [90, 115],
      [
        "Un título que forme parte del relato",
        "Un indicio temprano (prefiguración) que el final ilumina",
        "Economía de lenguaje: ninguna palabra sobra",
        "Un giro final que obligue a releer",
      ],
      "Mudanza. La casa nueva olía a pintura y a promesas. Colocamos los muebles, colgamos los cuadros y, por la noche, mi hija me preguntó por qué había un reloj de más en el pasillo. No le di importancia: los niños ven cosas. Durante semanas, el reloj marcó una hora distinta de la nuestra, siempre adelantada, siempre la misma: las cuatro y diez. Hoy, a las cuatro y diez, ha sonado el timbre. Al otro lado de la puerta, una familia idéntica a la nuestra sonreía con las cajas en la mano. —Venimos a entrar —dijo el hombre, con mi voz.",
      "El microrrelato vive de la economía y del giro: el reloj que nadie colocó es el indicio sembrado al principio y la hora repetida lo carga de tensión, hasta que el final (una familia idéntica que viene a entrar) obliga a releerlo. El título, «Mudanza», cambia de sentido al acabar."
    ),
  ],
};
