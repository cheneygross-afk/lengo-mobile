// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-writing-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each B2 unit's review lesson (unit-reviews.ts), keyed
// by the unit's first lesson (unit-defs.ts). Instructions in Spanish; each
// task only needs the grammar and words of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [60, 120], rubric, modelAnswer, explanation);

export const B2_UNIT_WRITING: Record<string, WriteExercise> = {
  "subjunctive-adjective-clauses-1": t(
    "Escribe un anuncio para buscar compañero de piso. Describe a la persona que buscas y lo que no quieres, con oraciones de relativo en subjuntivo.",
    ["Busco a alguien que + subjuntivo", "No quiero a nadie que + subjuntivo", "Una descripción del piso en indicativo (tiene, está…)", "Al menos cuatro oraciones de relativo"],
    "Se busca compañero de piso. El piso tiene tres habitaciones, está en el centro y es muy luminoso. Busco a alguien que sea ordenado, que trabaje o estudie y que respete el descanso de los demás. Preferiría una persona a la que le guste cocinar y que quiera compartir la compra. No quiero a nadie que fume dentro de casa ni que tenga más de una mascota. Si conoces a alguien que encaje, escríbeme.",
    "Si la persona no existe todavía o no la conocemos, el relativo lleva subjuntivo: busco a alguien que sea ordenado. Lo que ya existe, indicativo: el piso tiene."
  ),
  "b2r-contrast-antecedent": t(
    "Compara a dos profesores: uno que tuviste de verdad y el profesor ideal que te gustaría tener. Alterna indicativo y subjuntivo en las oraciones de relativo.",
    ["Relativos en indicativo para el profesor real (tuve una profesora que…)", "Relativos en subjuntivo para el ideal (quiero un profesor que…)", "Al menos un caso de no hay nadie que / no conozco a nadie que", "Un conector de contraste"],
    "En el instituto tuve una profesora de Historia que contaba anécdotas increíbles y que nos hacía pensar. Nunca he conocido a nadie que explique tan bien. En cambio, mi profesor ideal de idiomas sería alguien que hable poco y que deje hablar a los alumnos, que corrija sin interrumpir y que proponga temas que nos interesen de verdad. No hay ningún método que funcione para todos, pero un buen profesor es aquel que se adapta.",
    "Antecedente conocido: indicativo (una profesora que contaba). Antecedente buscado, ideal o negado: subjuntivo (alguien que hable, no hay ningún método que funcione)."
  ),
  "subjunctive-adverbial-clauses-1": t(
    "Escribe un correo a un amigo que va a mudarse a tu ciudad. Cuéntale qué haréis cuando llegue, qué le prestarás para que esté cómodo y qué hará aunque no le guste.",
    ["Cuando + subjuntivo para el futuro", "Para que + subjuntivo", "Aunque + subjuntivo o indicativo con sentido claro", "Antes de que / hasta que + subjuntivo"],
    "¡Hola, Iker! Qué ganas tengo de que llegues. Cuando bajes del tren, te recogeré en la estación y te llevaré a cenar. Te dejaré mi bici para que puedas moverte por la ciudad sin gastar. Puedes quedarte en mi casa hasta que encuentres piso. Eso sí, aunque no te guste madrugar, tendrás que levantarte pronto para hacer los trámites antes de que cierren las oficinas. ¡Nos vemos pronto!",
    "Cuando, hasta que y antes de que llevan subjuntivo si hablan del futuro (cuando bajes). Para que siempre (para que puedas). Aunque + subjuntivo: no importa si es verdad."
  ),
  "b2r-transform-infinitive-que": t(
    "Explica cómo preparas un viaje largo. Usa conectores de finalidad y de tiempo, alternando infinitivo (mismo sujeto) y subjuntivo (sujeto distinto).",
    ["Para + infinitivo y para que + subjuntivo", "Antes de + infinitivo y antes de que + subjuntivo", "Después de / después de que", "Al menos otro conector (en cuanto, sin que, a menos que…)"],
    "Antes de viajar, siempre hago una lista para no olvidar nada. Le dejo una copia de las llaves a mi vecina para que riegue las plantas. Intento cambiar dinero antes de que suban las comisiones del aeropuerto. Después de hacer la maleta, la peso, porque no quiero pagar de más. En cuanto llego al destino, aviso a mi familia para que no se preocupen. Nunca me voy sin que alguien sepa dónde estaré.",
    "Mismo sujeto: preposición + infinitivo (para no olvidar, antes de viajar). Sujeto distinto: conjunción + que + subjuntivo (para que riegue, antes de que suban)."
  ),
  "imperfect-subjunctive-sequence-1": t(
    "Recuerda tu infancia: ¿qué querían tus padres que hicieras? ¿Qué te prohibían? ¿Qué te pedían tus profesores? Usa el imperfecto de subjuntivo.",
    ["Querían / me pedían que + imperfecto de subjuntivo", "Al menos cinco formas de imperfecto de subjuntivo", "Al menos dos irregulares (fuera, tuviera, hiciera, dijera…)", "Concordancia de tiempos correcta"],
    "Cuando era pequeña, mis padres querían que fuera médica, como mi abuelo. Me pedían que estudiara todas las tardes y no me dejaban que viera la tele entre semana. Mi madre siempre insistía en que hiciera deporte, aunque yo prefería leer. Mis profesores esperaban que tuviera buenas notas y que no hablara en clase. Hoy soy música y mis padres están orgullosos, aunque al principio no les gustó que eligiera ese camino.",
    "Verbo principal en pasado + que + imperfecto de subjuntivo: querían que fuera, me pedían que estudiara. Se forma desde la 3.ª persona plural del indefinido: fueron → fuera."
  ),
  "b2r-dialogue-parents-wanted": t(
    "Escribe un mensaje a una amiga para contarle una conversación difícil con tu jefe la semana pasada: qué te pidió, qué te sorprendió y qué deseos tienes ahora.",
    ["Me pidió / me dijo que + imperfecto de subjuntivo", "Me sorprendió / me molestó que + imperfecto de subjuntivo", "Ojalá + imperfecto de subjuntivo", "Quisiera para una petición educada"],
    "Paula, tengo que contarte algo. El jueves mi jefe me llamó a su despacho y me pidió que me encargara del proyecto de Laura. Me sorprendió que no me lo dijera antes, porque ya tengo mucho trabajo. Le contesté: «Quisiera hablarlo antes con el equipo». Me molestó un poco que no me preguntara mi opinión. Ojalá tuviera más tiempo, porque el proyecto me interesa. ¿Quedamos y te cuento?",
    "Reacción en pasado + imperfecto de subjuntivo (me sorprendió que no me lo dijera). Ojalá + imperfecto de subjuntivo: deseo poco probable ahora. Quisiera suaviza una petición."
  ),
  "hypothetical-si-clauses-1": t(
    "¿Qué harías si pudieras vivir un año en cualquier país del mundo? Escribe dónde vivirías, qué harías y qué echarías de menos. Usa también como si.",
    ["Si + imperfecto de subjuntivo, condicional", "Al menos cuatro condicionales", "Como si + imperfecto de subjuntivo", "Al menos un verbo irregular (pudiera, tuviera, fuera…)"],
    "Si pudiera vivir un año en cualquier país, elegiría Japón. Si tuviera tiempo, estudiaría japonés antes de ir. Viviría en Kioto, en una casa tradicional, y trabajaría como profesora de español. Si fuera posible, viajaría a Hokkaido en invierno para ver la nieve. Echaría de menos a mi familia y el pan de mi barrio. Mis amigos me miran como si estuviera loca, pero es mi sueño desde niña.",
    "Condición poco probable: si + imperfecto de subjuntivo, consecuencia en condicional (si pudiera, elegiría). Como si siempre lleva imperfecto de subjuntivo: como si estuviera loca."
  ),
  "b2r-contrast-si-tengo-tuviera": t(
    "Un amigo duda entre aceptar un trabajo en otra ciudad o quedarse. Escríbele dos escenarios (si acepta / si no acepta) y tu consejo con «si yo fuera tú».",
    ["Si + presente para lo probable", "Si + imperfecto de subjuntivo para lo hipotético", "Si yo fuera tú / yo en tu lugar + condicional", "Al menos un conector (sin embargo, por otro lado)"],
    "Si aceptas el trabajo, ganarás más y podrás crecer profesionalmente. Si te quedas, seguirás cerca de tu familia, pero quizá te arrepentirás. Por otro lado, si el sueldo fuera el mismo, la decisión sería más fácil. Sin embargo, no es así. Si yo fuera tú, aceptaría la oferta durante un año y, si no te gustara, siempre podrías volver. Además, la ciudad nueva está solo a dos horas.",
    "Si + presente cuando es posible (si aceptas, ganarás); si + imperfecto de subjuntivo cuando es irreal o poco probable (si fuera el mismo, sería)."
  ),
  "conditional-perfect-pluperfect-subjunctive-1": t(
    "Piensa en un momento clave de tu vida. ¿Qué habría pasado si hubieras tomado otra decisión? Escribe al menos tres hipótesis sobre el pasado.",
    ["Si + pluscuamperfecto de subjuntivo, condicional perfecto", "Al menos tres hipótesis sobre el pasado", "Una consecuencia en el presente (ahora estaría…)", "Contexto en pasado (indefinido e imperfecto)"],
    "Hace diez años me ofrecieron una beca para estudiar en Alemania y no la acepté porque tenía miedo. Si hubiera ido, habría aprendido alemán y quizá me habría quedado allí. Si no hubiera rechazado la beca, no habría conocido a mi pareja en Valencia. Si me hubiera quedado en Alemania, ahora estaría trabajando en una gran empresa, pero no tendría la familia que tengo. Por eso no me arrepiento.",
    "Hipótesis sobre el pasado: si + hubiera + participio, habría + participio. Si la consecuencia es actual, condicional simple: ahora estaría."
  ),
  "b2-vocabulary-practice-3": t(
    "Escribe sobre algo de lo que te arrepientes y sobre un acontecimiento histórico que, si hubiera sido diferente, habría cambiado el mundo.",
    ["Ojalá / me arrepiento de + pasado", "Si hubiera…, habría… para la historia", "Hubiera como alternativa a habría al menos una vez", "Un cierre con una reflexión"],
    "Me arrepiento de no haber pasado más tiempo con mi abuelo. Ojalá le hubiera preguntado más por su vida, porque tenía historias increíbles. En cuanto a la historia, a menudo pienso en la imprenta. Si Gutenberg no la hubiera inventado, los libros habrían seguido siendo un lujo y mucha menos gente habría aprendido a leer. Quizá la ciencia hubiera avanzado mucho más despacio. Las pequeñas decisiones cambian el mundo.",
    "Ojalá + pluscuamperfecto de subjuntivo para lamentar el pasado. En la consecuencia también vale hubiera: la ciencia hubiera avanzado (= habría avanzado)."
  ),
  "reported-speech-1": t(
    "Ayer hablaste con un amigo que te contó muchas novedades. Escribe lo que te dijo en estilo indirecto, cambiando los tiempos y las expresiones de tiempo.",
    ["Dijo que + cambios de tiempo verbal (estaba, había, iría…)", "Cambios de expresiones de tiempo (ese día, al día siguiente…)", "Una pregunta indirecta (me preguntó si…)", "Una petición indirecta (me pidió que + imperfecto de subjuntivo)"],
    "Ayer me encontré con Daniel. Me dijo que estaba muy contento porque había conseguido un trabajo nuevo y que empezaría al mes siguiente. También me contó que su hermana se iba a casar ese verano. Me preguntó si yo seguía viviendo en el mismo piso y si tenía planes para las vacaciones. Al final me pidió que lo llamara el fin de semana para quedar.",
    "En estilo indirecto con verbo en pasado: presente → imperfecto (estaba), indefinido → pluscuamperfecto (había conseguido), futuro → condicional (empezaría), mandato → imperfecto de subjuntivo (que lo llamara)."
  ),
  "b2r-transform-voice-messages": t(
    "Tu compañera de trabajo ha dejado tres mensajes de voz para tu jefe, que está fuera. Escríbele un correo resumiendo lo que dijo, preguntó y pidió.",
    ["Dice / ha dicho que… o dijo que… con los tiempos correctos", "Preguntas indirectas (pregunta si…, quiere saber cuándo…)", "Peticiones indirectas (pide que…)", "Registro de correo profesional"],
    "Hola, Javier: Marta ha dejado tres mensajes esta mañana. En el primero dice que el cliente de Bilbao ha retrasado la reunión al jueves. En el segundo pregunta si puedes revisar el presupuesto antes del viernes y quiere saber cuándo vuelves a la oficina. En el último pide que la llames cuanto antes, porque necesita tu firma para enviar el contrato. Un saludo, Lucía",
    "Si el verbo introductor está en presente (dice, pregunta, pide) no cambian los tiempos; las peticiones van en presente de subjuntivo: pide que la llames."
  ),
  "ser-estar-haber-nuanced-1": t(
    "Describe una fiesta a la que fuiste: dónde fue, cómo estaba la gente, qué había y cómo era el anfitrión. Juega con los cambios de significado de ser y estar.",
    ["Ser para eventos (la fiesta fue en…)", "Estar para el estado (estaba aburrido, estaba lleno)", "Hay / había para la existencia", "Al menos un adjetivo que cambia con ser y estar (listo, aburrido, rico…)"],
    "La fiesta fue en casa de Álvaro, que es muy listo pero bastante aburrido. El salón estaba lleno de gente y había comida por todas partes. La tarta estaba riquísima, aunque la música era horrible. Al principio yo estaba aburrida, pero luego llegó Clara, que es la persona más divertida que conozco. A las dos todavía había gente bailando y Álvaro ya estaba listo para dormir.",
    "Ser para dónde ocurre un evento (fue en casa de Álvaro) y para cómo es alguien (es listo); estar para cómo está (estaba lista para dormir). Había para lo que existía."
  ),
  "b2r-error-hunt-ser-estar-haber": t(
    "Escribe un retrato de una persona que conoces bien: su carácter, cómo está últimamente y dónde está ahora. Usa ser, estar y haber con precisión.",
    ["Ser para el carácter y la identidad", "Estar para el estado actual y la ubicación", "Haber para la existencia (hay, había…)", "Al menos un contraste de significado (es rico / está rico, es malo / está malo…)"],
    "Mi tía Rosa es una mujer muy generosa y alegre. Es enfermera y siempre ha sido la persona que cuida de todos. Últimamente está un poco cansada, porque hay mucho trabajo en el hospital. Ahora está en Galicia de vacaciones y dice que la comida allí está buenísima. Es muy despistada: el otro día no sabía dónde estaba su coche. Aunque está mayor, sigue siendo la más divertida de la familia.",
    "Es generosa (carácter) / está cansada (estado). Estar para la ubicación de algo concreto (dónde estaba su coche); hay para lo que existe (hay mucho trabajo)."
  ),
  "verbs-of-change-1": t(
    "Cuenta cómo ha cambiado una persona famosa o alguien que conoces: su carácter, su profesión y su situación. Usa al menos cuatro verbos de cambio distintos.",
    ["Ponerse para cambios de humor rápidos", "Volverse para cambios de carácter", "Hacerse o llegar a ser para la profesión o un cambio voluntario", "Convertirse en + sustantivo"],
    "Mi primo Andrés era un chico tímido que se ponía rojo cada vez que hablaba en público. Después de un viaje por América se volvió mucho más abierto. Estudió Derecho, pero se hizo cocinero porque era su pasión. Tras años de trabajo, llegó a ser jefe de cocina en un restaurante famoso y su local se convirtió en uno de los más conocidos de la ciudad. Ahora se pone nervioso solo antes de abrir.",
    "Ponerse: cambio rápido de estado (se ponía rojo). Volverse: cambio de carácter (se volvió abierto). Hacerse: profesión o ideología elegida. Llegar a ser: tras un esfuerzo. Convertirse en + sustantivo."
  ),
  "b2-vocabulary-practice-7": t(
    "Escribe una breve biografía de un lugar que ha cambiado mucho (un barrio, un pueblo, una ciudad). Usa verbos de cambio y tiempos del pasado.",
    ["Al menos tres verbos de cambio (se convirtió en, se volvió, llegó a ser…)", "Imperfecto para cómo era antes", "Indefinido para los cambios", "Una valoración final"],
    "Hace cincuenta años, mi barrio era una zona industrial llena de fábricas y casi nadie vivía allí. En los años noventa las fábricas cerraron y muchos edificios se quedaron vacíos. Poco a poco, los artistas empezaron a alquilar los almacenes y el barrio se volvió más creativo. Con el tiempo se convirtió en una zona de moda y llegó a ser uno de los lugares más caros de la ciudad. Hoy los vecinos de siempre ya no pueden pagar el alquiler.",
    "Quedarse + adjetivo para un cambio que resulta de algo (se quedaron vacíos); convertirse en y llegar a ser para transformaciones graduales."
  ),
  "advanced-connectors-1": t(
    "Escribe un párrafo de opinión sobre el teletrabajo. Presenta ventajas e inconvenientes y una conclusión, usando conectores variados.",
    ["Conectores de causa (ya que, puesto que, dado que)", "Conectores de contraste (sin embargo, no obstante, aunque)", "Conectores de consecuencia (por lo tanto, por consiguiente)", "Una conclusión (en resumen, en definitiva)"],
    "El teletrabajo se ha extendido mucho en los últimos años, ya que permite ahorrar tiempo y dinero. Por un lado, los empleados no pierden horas en el transporte y, por lo tanto, tienen más tiempo libre. Sin embargo, trabajar desde casa puede provocar aislamiento, puesto que se pierde el contacto diario con los compañeros. Además, no todo el mundo tiene un espacio adecuado. En definitiva, creo que la mejor opción es un modelo mixto.",
    "Ya que y puesto que introducen la causa; sin embargo y no obstante, el contraste; por lo tanto, la consecuencia; en definitiva, la conclusión."
  ),
  "b2d-rep-adverbiales-mezcla-final": t(
    "Escribe una carta formal al ayuntamiento para pedir más carriles bici en tu ciudad. Argumenta con conectores y un registro formal.",
    ["Saludo y despedida formales", "Al menos cuatro conectores (en primer lugar, además, no obstante, por consiguiente…)", "Una petición con subjuntivo (les solicito que…)", "Registro formal, sin coloquialismos"],
    "Estimados señores: me dirijo a ustedes para solicitar la ampliación de la red de carriles bici. En primer lugar, cada vez más vecinos utilizan la bicicleta para ir al trabajo. Además, la ciudad no dispone de vías seguras en el centro, por lo que los accidentes han aumentado. No obstante, soy consciente del coste de esta medida. Por consiguiente, les solicito que estudien un plan gradual. Atentamente, Carmen Ortiz",
    "Un texto formal ordena los argumentos (en primer lugar, además), matiza (no obstante) y concluye (por consiguiente). Les solicito que + subjuntivo."
  ),
  "emphasis-word-order-1": t(
    "Hubo un malentendido en tu oficina: todo el mundo cree que fuiste tú quien rompió la impresora. Escribe un mensaje aclarando qué pasó, con oraciones enfáticas.",
    ["Oraciones hendidas (fue Ana quien…, lo que pasó fue que…)", "Objeto adelantado con pronombre (la impresora la rompió…)", "Al menos cuatro frases enfáticas", "Tono claro pero educado"],
    "Hola a todos: quiero aclarar lo que pasó ayer. No fui yo quien rompió la impresora. Lo que ocurrió fue que el papel se atascó y yo intenté sacarlo. La impresora ya la había usado Marcos antes y fue él quien me avisó de que hacía ruidos raros. Lo que necesitamos es que alguien de mantenimiento la revise, no buscar culpables. Gracias por entenderlo.",
    "Fue + persona + quien destaca al sujeto; lo que + verbo + fue destaca la acción. Al adelantar el objeto se repite con un pronombre: la impresora ya la había usado."
  ),
  "b2r-contrast-neutral-emphatic": t(
    "Escribe un breve texto sobre lo difícil que es aprender un idioma de adulto. Usa estructuras enfáticas como lo + adjetivo + que, lo que más…, es… lo que…",
    ["Lo + adjetivo / adverbio + que (lo difícil que es…)", "Lo que más / lo que menos…", "Una oración hendida (es la práctica lo que…)", "Una frase neutra para contrastar"],
    "Nadie te dice lo difícil que es aprender un idioma de adulto. Lo que más cuesta no es la gramática, sino perder el miedo a hablar. Al principio no te imaginas lo lento que vas a avanzar, ni lo cansado que termina uno después de una conversación. Sin embargo, es la práctica diaria lo que marca la diferencia. Yo estudio media hora cada día. Lo bueno es que, poco a poco, todo empieza a sonar natural.",
    "Lo + adjetivo + que intensifica (lo difícil que es). Lo que más / lo bueno destacan una idea. Es + elemento + lo que pone el foco en él."
  ),
  "cuyo-el-cual-1": t(
    "Escribe una breve reseña de un libro o una película. Usa relativos formales: cuyo, el cual, la cual, según el cual, en el que…",
    ["Cuyo / cuya concordando con lo poseído", "El cual / la cual tras preposición", "Según el cual u otro relativo formal", "Una valoración final"],
    "La sombra del viento es una novela de Carlos Ruiz Zafón cuya acción transcurre en la Barcelona de posguerra. El protagonista, Daniel, descubre un libro misterioso, a partir del cual su vida cambia por completo. Existe una leyenda según la cual alguien quema todos los libros de su autor, de modo que ese ejemplar sería el último. La novela tiene una atmósfera oscura, en la cual los personajes se mueven entre el misterio y el amor. Una lectura absorbente.",
    "Cuyo concuerda con lo poseído (cuya acción). El cual, la cual se usan sobre todo tras preposición (a partir del cual, en la cual) y en registro formal."
  ),
  "b2r-transform-join-cuyo": t(
    "Presenta a tres personajes históricos o famosos en un texto formal, uniendo la información con cuyo, el cual, quien y donde.",
    ["Al menos dos usos de cuyo / cuya / cuyos", "El cual o la cual con preposición", "Quien o donde al menos una vez", "Registro formal"],
    "Frida Kahlo, cuyas obras reflejan su dolor físico, es una de las pintoras más conocidas del siglo XX. Vivió en Coyoacán, donde hoy se encuentra su museo. Gabriel García Márquez, a quien muchos consideran el padre del realismo mágico, escribió Cien años de soledad, novela con la cual ganó fama mundial. Por último, Rosalía de Castro, cuyos poemas están escritos en gallego, fue clave para la cultura de Galicia.",
    "Cuyo une a un poseedor con lo poseído y concuerda con este último (cuyas obras, cuyos poemas). Quien para personas tras coma o preposición; el cual tras preposición."
  ),
  "b2r-tema-tierra-familia": t(
    "Escribe sobre la historia de tu familia: de dónde venían tus abuelos, por qué se mudaron y qué habría pasado si no lo hubieran hecho.",
    ["Tiempos del pasado bien combinados", "Una hipótesis sobre el pasado (si no hubieran…, habría…)", "Un relativo (cuyo, el cual, que…)", "Un verbo de cambio o un conector avanzado"],
    "Mis abuelos maternos vivían en un pueblo de Extremadura cuya economía dependía del campo. En los años sesenta no había trabajo, así que decidieron emigrar a Alemania, donde mi abuelo trabajó en una fábrica de coches. Allí nació mi madre, la cual volvió a España con veinte años. Si mis abuelos no se hubieran ido, mi madre no habría conocido a mi padre en Madrid y yo no existiría. Por eso valoro tanto su valentía.",
    "Indefinido e imperfecto para la historia, si + pluscuamperfecto de subjuntivo con condicional perfecto o simple (no existiría) para la hipótesis."
  ),
  "b2-vocabulary-practice-10": t(
    "Escribe sobre un sueño que tienes y el papel que tiene el arte o la política en tu vida. Usa vocabulario de la unidad y alguna estructura con subjuntivo.",
    ["Vocabulario del arte o de la política", "Una expresión de deseo (ojalá, me gustaría que…)", "Una oración con subjuntivo de relativo o adverbial", "Conectores para organizar el texto"],
    "Desde pequeña sueño con exponer mis cuadros en una galería. Para mí, el arte es una forma de expresar lo que no consigo decir con palabras. Sin embargo, también me interesa la política, ya que creo que la cultura debe ser accesible para todos. Me gustaría que hubiera más ayudas para los artistas jóvenes y que los museos fueran gratuitos. Ojalá algún día pueda abrir un taller en el que enseñe pintura a niños.",
    "Me gustaría que + imperfecto de subjuntivo (que hubiera más ayudas); ojalá + presente para un deseo posible (pueda abrir); relativo con subjuntivo para algo que aún no existe (un taller en el que enseñe)."
  ),
  "b2r-word-web-technology-ai": t(
    "Escribe un texto de opinión sobre la inteligencia artificial en la educación: ventajas, riesgos y tu postura personal.",
    ["Vocabulario de tecnología y medios (los algoritmos, los datos…)", "Al menos tres conectores de argumentación", "Una estructura con subjuntivo (es necesario que, no creo que…)", "Conclusión con tu opinión"],
    "La inteligencia artificial ya forma parte de las aulas. Por un lado, permite adaptar los ejercicios al ritmo de cada alumno y corregir en segundos. Por otro lado, muchos expertos advierten de que los algoritmos pueden cometer errores y de que los datos de los estudiantes no siempre están protegidos. No creo que la tecnología vaya a sustituir a los profesores, pero es necesario que aprendamos a usarla de forma crítica. En definitiva, es una herramienta, no una solución mágica.",
    "Advertir de que + indicativo (información); no creo que y es necesario que + subjuntivo. Por un lado / por otro lado y en definitiva organizan el argumento."
  ),
  "b2r-tema-aprender-idioma-nino": t(
    "¿Es mejor aprender un idioma de niño o de adulto? Escribe un texto argumentativo con al menos dos argumentos para cada postura y una conclusión.",
    ["Introducción del tema", "Argumentos a favor y en contra con conectores", "Una hipótesis (si hubiera empezado…, si los niños tuvieran…)", "Conclusión clara"],
    "Se suele decir que los niños aprenden idiomas mejor que los adultos. Es cierto que los pequeños imitan la pronunciación con facilidad y que no tienen miedo a equivocarse. Sin embargo, los adultos tienen otras ventajas: entienden la gramática y saben organizar su estudio. Si yo hubiera empezado a estudiar inglés de niño, probablemente tendría mejor acento, pero no creo que lo hablara mejor. En conclusión, la edad importa menos que la motivación.",
    "Es cierto que + indicativo para conceder; sin embargo para contrastar; si + pluscuamperfecto de subjuntivo + condicional simple para un pasado con efecto actual."
  ),
  "b2-comprehensive-review-1": t(
    "Escribe una carta a ti mismo de hace cinco años: cuéntale qué ha pasado, qué consejos le darías y qué habrías hecho diferente.",
    ["Pretérito perfecto e indefinido para contar lo ocurrido", "Consejos con subjuntivo o condicional (te aconsejaría que…)", "Una hipótesis sobre el pasado (si hubiera…, habría…)", "Un cierre personal"],
    "Querido yo de hace cinco años: han pasado muchas cosas. Terminaste la carrera, te mudaste a Barcelona y encontraste un trabajo que te gusta. Te aconsejaría que no te preocuparas tanto por los exámenes y que disfrutaras más de tus amigos. Si hubieras ahorrado un poco más, habrías viajado a Perú antes. Aun así, estoy orgulloso de ti. Sigue siendo curioso y no dejes nunca de aprender. Un abrazo desde el futuro.",
    "Te aconsejaría que + imperfecto de subjuntivo (concordancia con el condicional). Si hubieras ahorrado, habrías viajado: hipótesis sobre el pasado."
  ),
  "b2r-challenge-subjunctive-gauntlet": t(
    "Escribe un correo a un estudiante de B2 para contarle cómo superaste las dificultades del nivel. Incluye subjuntivo, condicionales y estilo indirecto.",
    ["Subjuntivo (te recomiendo que, aunque, cuando…)", "Una oración condicional irreal", "Estilo indirecto (mi profesora me dijo que…)", "Registro informal y bien organizado"],
    "Hola, Leo: me preguntaste cómo superé el B2 y te cuento. Lo más difícil para mí fueron las oraciones condicionales. Mi profesora me dijo que leyera mucho y que escribiera un diario en español, y funcionó. Si no lo hubiera hecho, seguiría confundiendo tuviera y tendría. Te recomiendo que escuches pódcast cuando vayas en el transporte y que no te desanimes aunque cometas errores. ¡Ánimo, que lo vas a conseguir!",
    "Estilo indirecto con petición: me dijo que leyera. Condicional mixta: si no lo hubiera hecho, seguiría. Cuando y aunque + subjuntivo para lo futuro o no comprobado."
  ),
};
