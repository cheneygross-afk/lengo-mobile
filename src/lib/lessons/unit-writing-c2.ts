// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-writing-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each C2 unit's review lesson (unit-reviews.ts), keyed
// by the unit's first lesson (unit-defs.ts). Instructions in Spanish.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [70, 160], rubric, modelAnswer, explanation);

export const C2_UNIT_WRITING: Record<string, WriteExercise> = {
  "legal-administrative-spanish-part-1-1": t(
    "Explica con lenguaje claro a un amigo que no es abogado qué significa haber recibido una citación judicial como testigo y qué debe hacer.",
    ["Al menos tres términos jurídicos explicados (citación, comparecer, juzgado…)", "Lenguaje llano para un lector no especialista", "Instrucciones concretas", "Un término latino o una fórmula jurídica bien usada"],
    "Tranquilo, Óscar: una citación judicial como testigo no significa que te acusen de nada. Es simplemente una orden del juzgado para que acudas a declarar lo que viste. Tienes la obligación de comparecer, es decir, de presentarte el día y la hora indicados; si no vas sin una causa justificada, te pueden multar. Lleva tu DNI y la propia citación. Allí te preguntarán el juez y los abogados de las partes, y deberás decir la verdad. No necesitas abogado propio, porque no eres parte en el proceso, sino un tercero que ayuda a esclarecer los hechos. Es un trámite que se hace de oficio.",
    "El lenguaje claro explica cada término (comparecer: presentarse) sin perder precisión. De oficio: por iniciativa del propio juzgado."
  ),
  "legal-administrative-spanish-part-2-1": t(
    "Redacta una cláusula de un contrato de alquiler sobre los desperfectos y la fianza, y después explícala en dos frases sencillas para el inquilino.",
    ["Una cláusula con lenguaje contractual (el arrendatario, se obliga a, en caso de…)", "Condiciones y plazos precisos", "Una explicación en lenguaje llano", "Coherencia entre ambas versiones"],
    "Cláusula séptima. El arrendatario se obliga a conservar la vivienda en el estado en que la recibe y a responder de los desperfectos causados por su negligencia, salvo el desgaste derivado del uso ordinario. A la firma del presente contrato, el arrendatario entrega una fianza equivalente a dos mensualidades, que le será devuelta en el plazo de treinta días desde la entrega de las llaves, una vez descontados, en su caso, los importes de las reparaciones. En otras palabras: si rompes algo por descuido, lo pagas tú, pero no el desgaste normal. Te devolveremos la fianza en un mes, menos lo que cueste arreglar los daños.",
    "El estilo contractual usa la tercera persona (el arrendatario se obliga), fórmulas fijas (salvo, en su caso, a la firma del presente contrato) y precisión en plazos e importes."
  ),
  "medical-health-spanish-1": t(
    "Eres médico. Escribe el informe breve de una consulta: motivo, síntomas, exploración, diagnóstico y tratamiento con la posología.",
    ["Estructura de informe clínico", "Terminología médica (cefalea, febrícula, auscultación…)", "Posología precisa (cada ocho horas, durante cinco días…)", "Registro objetivo e impersonal"],
    "Motivo de consulta: paciente de 34 años que acude por tos seca y cefalea de cinco días de evolución. Refiere febrícula vespertina y malestar general, sin dificultad respiratoria. Exploración: buen estado general; temperatura de 37,6 °C; auscultación pulmonar con leves sibilancias en la base derecha. Orientación diagnóstica: bronquitis aguda de probable origen vírico. Tratamiento: paracetamol de 1 gramo cada ocho horas si hay fiebre o dolor, abundante hidratación y reposo relativo durante cinco días. Se recomienda volver a consulta si aparece fiebre alta o dificultad para respirar.",
    "El informe clínico es impersonal (acude, refiere, se recomienda), usa términos técnicos (cefalea, febrícula, sibilancias) y una posología sin ambigüedad (dosis, frecuencia y duración)."
  ),
  "everyday-idioms-1": t(
    "Cuenta una anécdota laboral en la que algo salió mal, usando al menos cinco modismos de forma natural y sin calcos del inglés.",
    ["Al menos cinco modismos bien integrados", "Formas fijas respetadas (no cambiar palabras del modismo)", "Narración coherente en pasado", "Sin calcos (p. ej., no «al final del día» por «en definitiva»)"],
    "El lunes pasado mi jefe me pidió una presentación para el día siguiente. Me pilló con el pie cambiado, porque tenía la agenda a tope, pero no quise quedar mal. Me pasé la noche en vela y, por supuesto, al día siguiente estaba hecho polvo. Lo peor fue que, en plena reunión, se fue la luz y no pude enseñar ni una diapositiva. Tuve que improvisar sobre la marcha. Al final, mi jefe me felicitó, así que no hay mal que por bien no venga. Eso sí, la próxima vez no me comprometo a nada sin consultar mi agenda: no quiero volver a estar con el agua al cuello.",
    "Los modismos tienen forma fija: pillar con el pie cambiado, pasar la noche en vela, estar hecho polvo, sobre la marcha, estar con el agua al cuello. Cambiar una palabra los desnaturaliza."
  ),
  "proverbs-sayings-1": t(
    "Escribe un breve texto de opinión sobre si los refranes siguen vigentes hoy. Cita, completa o contradice al menos cuatro refranes.",
    ["Al menos cuatro refranes bien citados", "Uno contradicho o matizado con ironía", "Introducción de la cita (como dice el refrán, ya lo dice el dicho…)", "Postura personal clara"],
    "Hay quien piensa que los refranes son cosa de abuelos, pero basta escuchar una conversación cualquiera para comprobar lo contrario. Cuando alguien madruga para llegar el primero, siempre hay quien recuerda que a quien madruga, Dios le ayuda; aunque otro responderá, con sorna, que no por mucho madrugar amanece más temprano. Ese es el encanto del refranero: tiene una respuesta para cada situación, incluso contradictoria. Como dice el dicho, más vale prevenir que curar, y por eso muchos padres los repiten a sus hijos. En mi opinión, mientras sigamos diciendo que de tal palo, tal astilla, los refranes estarán vivos.",
    "Se introducen con fórmulas (como dice el dicho, hay quien recuerda que…) y se respetan literalmente. El refranero se contradice a sí mismo, lo que permite usarlo con ironía."
  ),
  "humor-wordplay-1": t(
    "Escribe un breve texto humorístico (un diálogo o una anécdota) basado en un doble sentido o un juego de palabras en español, y explica después en qué consiste el juego.",
    ["Un juego de palabras o un doble sentido real del español", "Un pequeño contexto narrativo o dialogado", "La explicación del mecanismo", "Registro adecuado al humor"],
    "—Doctor, doctor, vengo porque me siento como una cabra. —¿Y desde cuándo le pasa? —Desde que era un cabrito. —Pues tranquilo, que eso tiene cura. El más cabreado de la consulta, al final, fue el médico. Explicación: «estar como una cabra» significa estar loco; el paciente, en cambio, lo toma al pie de la letra y responde que se siente así desde que era un cabrito, es decir, una cría de cabra. Además, el chiste remata con «cabreado», que significa enfadado y comparte la raíz con cabra.",
    "El humor verbal juega con la lectura literal de una frase hecha (estar como una cabra) y con palabras emparentadas por la forma (cabrito, cabreado)."
  ),
  "figurative-language-1": t(
    "Describe una ciudad de noche en un texto literario breve que contenga al menos una metáfora, una metonimia, una personificación y un eufemismo.",
    ["Una metáfora", "Una metonimia (p. ej., la ciudad duerme por sus habitantes)", "Una personificación", "Un eufemismo"],
    "La ciudad apaga sus mil ojos amarillos a medianoche. Las calles, cansadas de pisadas, bostezan bajo las farolas. Solo algunas ventanas siguen despiertas: allí trabaja alguien que no puede permitirse dormir. Una ambulancia cruza la avenida, rumbo al hospital donde un anciano está a punto de dejarnos. Todo Madrid duerme, salvo los barrenderos y los poetas, que recogen lo que el día ha dejado caer. Al amanecer, el río de coches volverá a correr por sus venas de asfalto.",
    "Metáfora: los mil ojos amarillos (las ventanas), el río de coches. Personificación: las calles bostezan. Metonimia: todo Madrid duerme (sus habitantes). Eufemismo: estar a punto de dejarnos (morir)."
  ),
  "euphemisms-indirect-1": t(
    "Eres responsable de recursos humanos. Escribe un correo para comunicar a un empleado que su contrato no será renovado, con tacto y lenguaje indirecto.",
    ["Eufemismos profesionales (no renovación, reestructuración…)", "Atenuación (lamentamos, nos vemos en la necesidad de…)", "Reconocimiento del trabajo del empleado", "Información clara pese al tono indirecto"],
    "Estimado Rafael: Tras un periodo de reflexión sobre la reorganización del departamento, nos vemos en la necesidad de comunicarte que no será posible prorrogar tu contrato más allá del 30 de junio. Queremos subrayar que esta decisión no responde en absoluto a tu desempeño, que ha sido excelente, sino a un ajuste de la plantilla motivado por la situación económica. Lamentamos sinceramente no poder contar contigo en esta nueva etapa. Nos ofrecemos a redactarte una carta de recomendación y a facilitarte el contacto con empresas de nuestro sector. Un cordial saludo, Elena Ruiz, Recursos Humanos",
    "El eufemismo profesional suaviza sin ocultar: no será posible prorrogar (= te despedimos), ajuste de la plantilla (= recortes). La información clave (la fecha) debe quedar clara."
  ),
  "exclamations-emphasis-1": t(
    "Escribe un mensaje a un amigo contándole una boda a la que fuiste. Usa exclamaciones, diminutivos y aumentativos para expresar emoción, cariño o ironía.",
    ["Al menos tres exclamaciones variadas (¡qué…!, ¡menudo…!, ¡vaya…!)", "Diminutivos con valor afectivo o irónico", "Aumentativos o -azo con valor ponderativo", "Registro coloquial coherente"],
    "¡Pero qué boda, Jaime! ¡Menudo fiestón montaron los novios! La iglesia era una cosita preciosa, de piedra, en lo alto de un pueblito de Asturias. La novia estaba guapísima y el novio, con un trajazo azul, parecía un actor. Eso sí, ¡vaya discursito nos soltó el padrino! Cuarenta minutos hablando de su perro. Luego hubo un banquetazo y bailamos hasta las seis. ¡Qué pena que no pudieras venir! La próxima vez, te vienes sí o sí.",
    "Los diminutivos expresan cariño (cosita, pueblito) o ironía (discursito); los aumentativos y -azo ponderan (fiestón, trajazo, banquetazo). ¡Menudo…! y ¡vaya…! intensifican."
  ),
  "c1c2-vocabulary-practice-11": t(
    "Redacta un breve informe para la dirección sobre una crisis de reputación de tu empresa. Usa modismos del mundo empresarial y al menos una locución latina.",
    ["Al menos cuatro expresiones del ámbito empresarial (capear el temporal, poner sobre la mesa…)", "Al menos una locución latina bien usada (grosso modo, a priori, de facto…)", "Estructura de informe", "Registro profesional"],
    "Asunto: crisis en redes sociales. Grosso modo, la situación es la siguiente: un vídeo viral sobre un retraso en nuestras entregas ha dañado la imagen de la marca. A priori, el problema parecía menor, pero en 48 horas se ha convertido en tendencia. Para capear el temporal, propongo tres medidas: dar la cara con un comunicado oficial, poner sobre la mesa un plan de compensación para los clientes afectados y reforzar el equipo de logística. Si actuamos con rapidez, podremos darle la vuelta a la tortilla y salir reforzados. Quedo a disposición de la dirección para tratar los detalles.",
    "Locuciones latinas: grosso modo (aproximadamente), a priori (de antemano). Expresiones empresariales: capear el temporal, dar la cara, poner sobre la mesa, darle la vuelta a la tortilla."
  ),
  "listening-reading-strategies-1": t(
    "Escribe un breve texto con consejos para entender a hablantes nativos que hablan muy rápido o en un registro muy coloquial.",
    ["Al menos cuatro estrategias concretas", "Ejemplos de fenómenos del habla rápida (pa', to', -ao…)", "Conectores para organizar los consejos", "Registro divulgativo"],
    "Entender a un nativo que habla deprisa es uno de los mayores retos para cualquier estudiante avanzado. En primer lugar, conviene acostumbrarse a las reducciones típicas de la lengua oral: «pa'» por «para», «to'» por «todo» o «cansao» por «cansado». En segundo lugar, no hay que intentar entender cada palabra; es más útil captar las palabras clave y deducir el resto por el contexto. Además, las muletillas, como «o sea» o «bueno», no aportan información y pueden ignorarse. Por último, escuchar pódcast y series con subtítulos en español ayuda a entrenar el oído de forma progresiva.",
    "El habla rápida reduce sílabas (pa', to', cansao) y llena pausas con muletillas (o sea, bueno). Inferir por el contexto es más eficaz que traducir palabra por palabra."
  ),
  "listening-reading-strategies-5": t(
    "Escuchaste una conferencia sobre el futuro de las ciudades. Redacta tus notas convertidas en un resumen de un párrafo, con las ideas principales y un dato concreto.",
    ["Ideas principales jerarquizadas", "Al menos un dato concreto (cifra, fecha, nombre)", "Estilo de resumen: impersonal y condensado", "Conectores de síntesis (en primer lugar, asimismo, en conclusión)"],
    "La conferencia abordó los principales retos de las ciudades en las próximas décadas. En primer lugar, la ponente señaló que en 2050 casi el setenta por ciento de la población mundial vivirá en zonas urbanas, lo que exigirá repensar la vivienda y el transporte. Asimismo, subrayó la necesidad de crear más espacios verdes para combatir las olas de calor. Por otra parte, defendió el modelo de la «ciudad de quince minutos», en la que los servicios básicos quedan a poca distancia a pie. En conclusión, planteó que el urbanismo del futuro deberá priorizar a las personas frente a los coches.",
    "Un resumen condensa y jerarquiza: ideas clave, un dato que las respalde (el setenta por ciento en 2050) y verbos de habla variados (señaló, subrayó, defendió, planteó)."
  ),
  "debate-persuasion-1": t(
    "Escribe tu intervención en un debate sobre si deberían prohibirse los coches en el centro de las ciudades. Concede un argumento contrario y refútalo.",
    ["Una concesión (es cierto que…, no niego que…)", "Una refutación (sin embargo, ahora bien…)", "Conectores cultos (por consiguiente, en consecuencia…)", "Una conclusión persuasiva"],
    "Señoras y señores: no niego que la prohibición de los coches en el centro pueda perjudicar a algunos comerciantes a corto plazo. Es cierto que muchos clientes llegan en coche. Ahora bien, los datos de ciudades como Pontevedra demuestran lo contrario a medio plazo: el comercio local ha crecido desde la peatonalización, porque la gente pasea y compra más. Por consiguiente, el argumento económico no se sostiene. Además, la contaminación causa miles de muertes prematuras al año. En consecuencia, la pregunta no es si podemos permitirnos cerrar el centro al tráfico, sino si podemos permitirnos no hacerlo.",
    "Conceder (no niego que + subjuntivo, es cierto que) antes de refutar (ahora bien) hace el argumento más sólido. Por consiguiente y en consecuencia marcan las conclusiones."
  ),
  "debate-persuasion-6": t(
    "Escribe la conclusión de un discurso a favor de la lectura en las escuelas. Usa al menos tres recursos retóricos: anáfora, pregunta retórica, tricolon o antítesis.",
    ["Una anáfora (repetición al inicio de frases)", "Una pregunta retórica", "Un tricolon (serie de tres)", "Un cierre contundente"],
    "Por eso, termino como empecé. Leer es viajar sin moverse. Leer es dialogar con los muertos y con los que aún no han nacido. Leer es aprender a pensar por uno mismo. ¿Qué sociedad queremos construir si nuestros hijos no saben concentrarse más de dos minutos? Necesitamos bibliotecas abiertas, profesores motivados y familias implicadas. No pido que todos los niños sean lectores apasionados; pido que todos tengan la oportunidad de serlo. Porque un niño que lee hoy será un ciudadano libre mañana.",
    "Anáfora: leer es… repetido. Pregunta retórica: ¿Qué sociedad queremos construir…? Tricolon: bibliotecas, profesores y familias. Antítesis final: hoy / mañana, niño / ciudadano."
  ),
  "presentations-negotiation-1": t(
    "Escribe la apertura y la primera transición de una presentación para convencer a unos inversores de financiar tu aplicación de idiomas.",
    ["Una apertura que capte la atención (pregunta, dato, anécdota)", "Presentación del objetivo de la charla", "Una transición explícita (una vez visto…, pasemos a…)", "Registro formal pero cercano"],
    "Buenos días a todos y gracias por su tiempo. ¿Cuántos de ustedes han empezado a estudiar un idioma y lo han abandonado a los tres meses? Según nuestros datos, eso le ocurre a siete de cada diez personas. Hoy les voy a presentar una aplicación que pretende cambiar esa cifra. En los próximos quince minutos les explicaré el problema, nuestra solución y el modelo de negocio. Empecemos por el problema: la falta de constancia. Una vez visto por qué la gente abandona, pasemos a cómo nuestra aplicación lo evita.",
    "Una apertura eficaz implica al público (¿Cuántos de ustedes…?), da un dato y anuncia la estructura. Las transiciones (una vez visto…, pasemos a…) guían al oyente."
  ),
  "presentations-negotiation-5": t(
    "Escribe el correo que resume por escrito los acuerdos alcanzados en una negociación con un proveedor: precio, plazos, condiciones y próximos pasos.",
    ["Referencia a la reunión", "Acuerdos enumerados con precisión", "Fórmulas para dejar constancia (según lo acordado, tal como quedamos…)", "Petición de confirmación"],
    "Estimado señor Varela: Tal como quedamos en la reunión de ayer, le resumo los acuerdos alcanzados. En primer lugar, el precio por unidad será de doce euros, siempre y cuando el pedido anual supere las diez mil unidades. En segundo lugar, las entregas se realizarán cada quince días, con un plazo máximo de cinco días hábiles desde el pedido. En caso de retraso, se aplicará un descuento del cinco por ciento. Por último, firmaremos el contrato antes del 30 de abril. Le ruego que me confirme estos puntos para dejar constancia por escrito. Un cordial saludo, Inés Molina",
    "Dejar constancia por escrito evita malentendidos: tal como quedamos, según lo acordado, siempre y cuando + subjuntivo para las condiciones y le ruego que me confirme."
  ),
  "citations-references-1": t(
    "Escribe un párrafo académico sobre la importancia del sueño que incluya una cita directa, una indirecta y verbos de atribución variados.",
    ["Una cita directa con comillas y referencia", "Una cita indirecta con verbo de atribución", "Al menos tres verbos de atribución distintos (sostiene, advierte, matiza…)", "Registro académico"],
    "La importancia del sueño para la salud ha sido ampliamente estudiada. Walker (2017) sostiene que dormir menos de seis horas de forma habitual aumenta el riesgo de enfermedades cardiovasculares. En la misma línea, García (2020) advierte de que «la privación de sueño afecta a la memoria y a la toma de decisiones» (p. 45). No obstante, otros autores matizan estas conclusiones: según López (2019), la calidad del descanso resulta tan relevante como su duración. Cabe señalar, por tanto, que las recomendaciones deben adaptarse a cada persona.",
    "La cita directa reproduce las palabras con comillas y página; la indirecta las reformula. Los verbos de atribución matizan la postura: sostener, advertir, matizar, señalar."
  ),
  "citations-references-5": t(
    "Parafrasea con tus palabras esta idea sin plagiarla y cita la fuente: «La lectura en papel favorece una comprensión más profunda que la lectura en pantalla» (Mangen, 2013). Después, añade una frase que la ponga en relación con otro estudio.",
    ["Una paráfrasis real (cambio de estructura y vocabulario)", "La fuente citada correctamente", "Una frase de relación con otra investigación", "Registro académico"],
    "Según Mangen (2013), los lectores que leen un texto impreso tienden a comprenderlo con mayor profundidad que quienes lo leen en un dispositivo digital. Esta conclusión coincide con la de otros estudios posteriores, que atribuyen la diferencia a la menor distracción y a la orientación espacial que ofrece el papel. Sin embargo, investigaciones más recientes apuntan a que la brecha se reduce cuando los lectores están habituados a las pantallas. Así pues, el estado de la cuestión sigue abierto y requiere nuevos trabajos que tengan en cuenta los hábitos de lectura de las nuevas generaciones.",
    "Parafrasear es reformular la idea con otra estructura y otras palabras, y citar igualmente la fuente. Copiar cambiando solo algunas palabras es plagio."
  ),
  "rhetorical-questions-1": t(
    "Escribe un breve artículo de opinión sobre el consumo de ropa barata en el que uses preguntas retóricas, una hipófora (pregunta que tú mismo respondes) y una serie interrogativa.",
    ["Al menos una pregunta retórica", "Una hipófora", "Una serie de preguntas encadenadas", "Postura clara"],
    "¿Cuántas camisetas necesita realmente una persona? La pregunta parece sencilla, pero pocos se la hacen antes de comprar. ¿Por qué una prenda cuesta menos que un café? Porque alguien, en algún lugar, la ha cosido por un salario miserable. ¿Quién paga entonces el precio real? ¿Los trabajadores? ¿El planeta? ¿Nuestros hijos? Seguramente, todos ellos. No se trata de dejar de comprar, sino de comprar mejor: menos prendas, de más calidad y de origen conocido. ¿Acaso no merece la pena?",
    "La pregunta retórica no espera respuesta (¿Acaso no merece la pena?); la hipófora la responde el propio autor (¿Por qué…? Porque…); la serie interrogativa acumula tensión."
  ),
  "rhetorical-questions-5": t(
    "Escribe un discurso de un minuto (unas cien palabras) para defender ante tu ayuntamiento la creación de un huerto urbano, usando preguntas retóricas.",
    ["Saludo al público", "Al menos dos preguntas retóricas", "Argumentos concretos", "Cierre con llamada a la acción"],
    "Buenas tardes, señor alcalde, vecinos y vecinas. ¿Quién no recuerda el sabor de un tomate recién cogido? ¿Cuántos de nuestros niños saben de dónde viene lo que comen? El solar abandonado de la calle Olmo lleva diez años lleno de basura. Les proponemos convertirlo en un huerto urbano gestionado por los vecinos. Costaría poco, uniría a las generaciones y llenaría de verde un barrio gris. ¿Qué perdemos por intentarlo? Nada. ¿Qué podemos ganar? Un barrio más vivo. Por eso les pedimos hoy que voten a favor. Muchas gracias.",
    "En un discurso breve, las preguntas retóricas implican al público (¿Quién no recuerda…?) y la pareja pregunta-respuesta (¿Qué perdemos? Nada.) refuerza la conclusión."
  ),
  "job-interview-spanish-1": t(
    "Responde por escrito a la pregunta de entrevista «Hábleme de una situación difícil que haya resuelto en el trabajo», siguiendo el método STAR.",
    ["Situación", "Tarea", "Acción (en primera persona, con verbos concretos)", "Resultado medible"],
    "En mi anterior empresa, una semana antes del lanzamiento de un producto, el proveedor principal nos comunicó que no podría entregar los envases a tiempo. Como responsable de compras, mi tarea era encontrar una solución sin retrasar la fecha ni superar el presupuesto. Contacté con cinco proveedores alternativos en dos días, negocié un precio similar con uno de ellos y organicé un transporte urgente. Además, mantuve informada a la dirección en todo momento. Como resultado, el producto salió a la venta en la fecha prevista y el sobrecoste fue inferior al tres por ciento.",
    "STAR: Situación (el proveedor falló), Tarea (encontrar una solución), Acción (contacté, negocié, organicé) y Resultado medible (en fecha, menos del tres por ciento de sobrecoste)."
  ),
  "job-interview-spanish-5": t(
    "Escribe una carta de presentación breve para un puesto de traductor en una editorial, destacando tu formación, tu experiencia y por qué encajas en el puesto.",
    ["Saludo y despedida formales", "Formación y experiencia con vocabulario de CV", "Motivación concreta por la empresa", "Petición de entrevista"],
    "Estimada señora Ferrer: Me dirijo a usted para presentar mi candidatura al puesto de traductor literario publicado en su página web. Soy licenciado en Traducción e Interpretación por la Universidad de Granada y cuento con seis años de experiencia en la traducción de novela del inglés y el francés. He traducido once títulos para distintas editoriales, entre ellos dos finalistas del Premio Nacional. Admiro desde hace años su catálogo de narrativa contemporánea, y me encantaría contribuir a él. Quedo a su disposición para ampliar esta información en una entrevista. Atentamente, Hugo Serrano",
    "Me dirijo a usted para, cuento con, quedo a su disposición: fórmulas de la carta de presentación. La experiencia se concreta con datos (seis años, once títulos)."
  ),
  "conflict-resolution-1": t(
    "Eres mediador entre dos compañeros de trabajo enfrentados por el reparto de tareas. Escribe tu intervención para rebajar la tensión y proponer una solución.",
    ["Reconocer las emociones sin dar la razón a nadie (entiendo que…)", "Reformular el problema de forma neutral", "Una propuesta concreta", "Lenguaje que evita culpas (en lugar de tú siempre…)"],
    "Gracias a los dos por venir. Entiendo que estéis molestos: Marta siente que asume más trabajo del que le corresponde, y Pedro tiene la impresión de que no se valoran sus tareas. Las dos percepciones son comprensibles. Si lo resumo, el problema no es quién trabaja más, sino que el reparto no está claro para nadie. Os propongo lo siguiente: durante dos semanas, anotaremos todas las tareas en un tablero común y el viernes revisaremos juntos si la carga es equilibrada. ¿Os parece un buen punto de partida?",
    "Reconocer sin conceder (entiendo que estéis molestos), reformular en neutro (el problema no es quién…, sino…) y proponer algo verificable desactiva el conflicto."
  ),
  "historical-narrative-1": t(
    "Narra un episodio histórico que conozcas (real) en un párrafo, usando el imperfecto narrativo o el presente histórico, y al menos un pretérito anterior o pluscuamperfecto.",
    ["Presente histórico o imperfecto narrativo", "Pretérito anterior (hubo + participio) o pluscuamperfecto", "Marcadores temporales precisos", "Tono de relato histórico"],
    "El 12 de octubre de 1492, tras más de dos meses de travesía, la tripulación de Colón divisa tierra. Nada más amanecer, los marineros desembarcan en una pequeña isla del Caribe, que los taínos llamaban Guanahaní. Colón está convencido de que ha llegado a las Indias, a las que había prometido llegar navegando hacia el oeste. Nunca sabrá que había alcanzado un continente desconocido para los europeos. Aquel encuentro cambiará para siempre la historia de ambos mundos.",
    "El presente histórico (divisa, desembarcan) acerca el relato; el pretérito anterior (apenas hubo amanecido) marca la anterioridad inmediata; el futuro de perspectiva (nunca sabrá, cambiará) anticipa desde el pasado."
  ),
  "historical-narrative-6": t(
    "Escribe un párrafo de un ensayo histórico sobre la llegada de la imprenta a España, con conectores narrativos, voz del historiador y registro culto.",
    ["Conectores narrativos (a raíz de, por aquel entonces, a partir de…)", "La voz del historiador (cabe destacar, conviene recordar…)", "Periodización (finales del siglo XV…)", "Registro culto"],
    "La imprenta llegó a la península ibérica a finales del siglo XV, apenas dos décadas después de que Gutenberg la perfeccionara en Maguncia. Por aquel entonces, los primeros talleres se establecieron en ciudades como Segovia, Valencia y Barcelona, a menudo de la mano de impresores alemanes. Conviene recordar que el libro manuscrito no desapareció de inmediato, sino que convivió durante décadas con el impreso. A raíz de esta transformación, la circulación de ideas se aceleró notablemente. Cabe destacar, en este sentido, el papel de las universidades, principales clientes de los nuevos talleres.",
    "La voz del historiador comenta el relato (conviene recordar, cabe destacar); los conectores (por aquel entonces, a raíz de) encadenan los hechos en el tiempo."
  ),
  "science-technology-spanish-1": t(
    "Escribe un breve texto de divulgación científica sobre la edición genética con CRISPR, con lenguaje preciso pero accesible y alguna hipótesis prudente.",
    ["Explicación clara del concepto", "Vocabulario científico (gen, secuencia, ensayo clínico…)", "Lenguaje de hipótesis (podría, se espera que, todo apunta a…)", "Una reflexión sobre límites o riesgos"],
    "Imagine unas tijeras moleculares capaces de cortar un gen defectuoso y sustituirlo por una versión correcta. Eso es, en esencia, CRISPR, una herramienta descubierta a partir del sistema de defensa de ciertas bacterias. Gracias a ella, los científicos pueden modificar secuencias de ADN con una precisión sin precedentes. Los primeros ensayos clínicos ya han tratado con éxito enfermedades de la sangre, y todo apunta a que podría aplicarse a muchas otras. Sin embargo, la técnica plantea dilemas éticos: ¿hasta dónde debería permitirse modificar el genoma humano?",
    "La divulgación usa una imagen (unas tijeras moleculares), define los términos y expresa la incertidumbre con prudencia (todo apunta a que podría…)."
  ),
  "environment-politics-spanish-1": t(
    "Escribe dos versiones de una misma frase sobre una política climática: una con lenguaje polarizado y otra con lenguaje deliberativo. Luego comenta la diferencia en un párrafo.",
    ["Una versión polarizada (descalificaciones, absolutos)", "Una versión deliberativa (matices, reconocimiento del otro)", "Vocabulario del clima (emisiones, transición energética…)", "Un comentario sobre el efecto de cada una"],
    "Versión polarizada: «Este impuesto al carbono es un robo descarado de unos fanáticos que quieren arruinar a las familias». Versión deliberativa: «Entiendo la preocupación por el coste del impuesto al carbono, pero creo que, con ayudas a las rentas bajas, podría acelerar la transición energética». La primera recurre a la descalificación (fanáticos, robo) y a los absolutos, lo que cierra el diálogo. La segunda reconoce la postura contraria, aporta matices y propone una solución, de modo que facilita el debate sobre la reducción de emisiones.",
    "El lenguaje polarizado descalifica y generaliza; el deliberativo reconoce al otro (entiendo la preocupación), matiza (podría) y propone."
  ),
  "philosophy-abstract-concepts-1": t(
    "¿Somos realmente libres al tomar decisiones? Escribe un párrafo argumentativo sobre el libre albedrío con sustantivos abstractos y una objeción a tu propia tesis.",
    ["Una tesis clara", "Sustantivos abstractos (la voluntad, el determinismo, la responsabilidad…)", "Una objeción y su respuesta", "Conectores de argumentación"],
    "Defiendo que la libertad humana existe, aunque no sea absoluta. Es innegable que nuestra voluntad está condicionada por la genética, la educación y las circunstancias. Sin embargo, el determinismo radical choca con una experiencia universal: la de deliberar entre opciones. Podría objetarse que esa sensación es una ilusión producida por el cerebro. Aun así, si renunciáramos a la idea de libertad, también tendríamos que renunciar a la de responsabilidad moral, y con ella a la justicia. Por tanto, la libertad es, al menos, una condición necesaria de la ética.",
    "Una buena argumentación filosófica presenta la tesis, anticipa la objeción (podría objetarse que) y la responde (aun así), con sustantivos abstractos precisos."
  ),
  "psychology-emotions-1": t(
    "Describe una situación en la que sentiste emociones contradictorias (por ejemplo, al mudarte o al terminar una etapa). Nombra las emociones con precisión.",
    ["Al menos cuatro emociones nombradas con precisión (nostalgia, alivio, desasosiego…)", "Expresión de la ambivalencia (a la vez, por un lado…)", "Narración en primera persona", "Reflexión final"],
    "El día que dejé mi primer piso, sentí una mezcla extraña de alivio y nostalgia. Por un lado, me alegraba de abandonar aquel cuarto húmedo y oscuro; por otro, me invadía una melancolía difícil de explicar, porque allí había pasado cinco años de mi vida. Mientras cerraba la puerta, me asaltó un ligero desasosiego: ¿y si la nueva etapa no salía bien? A la vez, sentía una ilusión casi infantil por empezar de cero. Con el tiempo he entendido que esa ambivalencia es normal: toda despedida es también un comienzo.",
    "Nombrar con precisión (alivio, nostalgia, melancolía, desasosiego, ilusión) y expresar la ambivalencia (por un lado… por otro, a la vez) es propio del registro C2."
  ),
  "art-film-literature-criticism-1": t(
    "Escribe la crítica breve de una película que hayas visto: argumento, personajes, lenguaje cinematográfico y valoración, con adjetivos valorativos precisos.",
    ["Resumen del argumento sin revelar el final", "Comentario sobre los personajes", "Al menos un elemento de lenguaje cinematográfico (planos, montaje, fotografía…)", "Valoración con adjetivos precisos"],
    "Roma, de Alfonso Cuarón, narra la vida cotidiana de Cleo, una trabajadora doméstica en el México de los años setenta. Lejos de ser una protagonista heroica, Cleo es un personaje contenido, casi silencioso, cuya dignidad conmueve sin necesidad de grandes discursos. La fotografía en blanco y negro, con largos planos secuencia, dota a la película de una belleza sobria y casi documental. Quizá el ritmo resulte pausado para algunos espectadores, pero esa lentitud es deliberada. En conjunto, se trata de una obra conmovedora, honesta e imprescindible.",
    "La crítica combina descripción y juicio: un personaje contenido, una belleza sobria, un ritmo pausado; y una valoración final (conmovedora, imprescindible)."
  ),
  "business-economics-spanish-1": t(
    "Redacta una breve noticia económica sobre la fusión de dos empresas: causas, cifras y posibles consecuencias para los consumidores.",
    ["Vocabulario económico (fusión, cuota de mercado, facturación…)", "Relaciones de causa y efecto (debido a, lo que provocará…)", "Al menos dos cifras", "Registro periodístico"],
    "Las aerolíneas Vuelasur y Aeronorte, dos compañías ficticias para este ejercicio, han anunciado hoy su fusión, una operación valorada en mil millones de euros. Según fuentes del sector, el acuerdo responde a la necesidad de ganar tamaño ante la competencia de las compañías de bajo coste. La nueva empresa controlará cerca del cuarenta por ciento del mercado nacional y superará los cinco mil millones de facturación anual. Las asociaciones de consumidores, sin embargo, temen que la reducción de la competencia provoque una subida de los precios de los billetes. La operación deberá ser aprobada por las autoridades europeas.",
    "Debido a, responder a y provocar expresan causa y efecto; las cifras (mil millones, el cuarenta por ciento) dan credibilidad al texto periodístico."
  ),
  "creative-writing-techniques-1": t(
    "Escribe un microrrelato de entre 80 y 120 palabras con un título, una imagen sensorial potente y un final sorpresivo que se anticipe con un detalle sutil (prefiguración).",
    ["Un título sugerente", "Al menos una imagen sensorial (olor, sonido, textura…)", "Un detalle que prefigure el final", "Un final sorpresivo"],
    "La última clienta. Cada noche, a las doce menos cinco, la anciana entraba en la panadería y pedía lo mismo: una barra pequeña y caliente. Olía a lavanda y a lluvia, aunque nunca llevaba paraguas. Pagaba siempre con monedas antiguas, de esas que ya no circulan, y Julián, por cariño, nunca se las rechazaba. Una noche, al cerrar la caja, encontró entre las monedas una fotografía en blanco y negro: la misma panadería, la misma anciana, mucho más joven, detrás del mostrador. Al pie, una fecha: 1953. Y una palabra: «Gracias».",
    "Las monedas antiguas y el paraguas ausente prefiguran el final; el olor a lavanda y a lluvia es la imagen sensorial; la fotografía revela la sorpresa sin explicarla del todo."
  ),
  "c1c2-comprehensive-review-1": t(
    "Escribe un texto reflexivo titulado «Lo que significa para mí dominar un idioma», combinando registro culto, recursos retóricos y matices de significado.",
    ["Una tesis personal clara", "Al menos dos recursos retóricos (pregunta retórica, antítesis, metáfora…)", "Vocabulario abstracto y preciso", "Conclusión elaborada"],
    "¿Qué significa dominar un idioma? Durante años pensé que la respuesta era sencilla: no cometer errores. Hoy sé que me equivocaba. Dominar una lengua no es conocer todas sus reglas, sino saber cuándo romperlas; no es hablar como un diccionario, sino como una persona. Es entender la ironía de un amigo, el doble sentido de un titular, la tristeza escondida en un diminutivo. Una lengua es una casa con infinitas habitaciones, y uno nunca termina de recorrerla. Quizá por eso dominar un idioma no es una meta, sino una forma de habitar el mundo.",
    "Pregunta retórica inicial, antítesis (no es…, sino…), metáfora (una casa con infinitas habitaciones) y tricolon (la ironía, el doble sentido, la tristeza) estructuran el texto."
  ),
};
