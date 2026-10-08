// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-writing-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each C1 unit's review lesson (unit-reviews.ts), keyed
// by the unit's first lesson (unit-defs.ts). Instructions in Spanish.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [60, 140], rubric, modelAnswer, explanation);

export const C1_UNIT_WRITING: Record<string, WriteExercise> = {
  "subjunctive-mastery-review-1": t(
    "Escribe un correo a un colega para rechazar con tacto una propuesta suya. Usa el subjuntivo para suavizar, una concesiva universal y la concordancia de tiempos.",
    ["Subjuntivo de cortesía (quisiera, no es que…, no digo que…)", "Una concesiva universal (sea cual sea, digan lo que digan…)", "Concordancia de tiempos correcta en pasado", "Tono diplomático"],
    "Hola, Andrés: Gracias por enviarme tu propuesta para la feria. No es que no me parezca interesante, sino que este año el presupuesto es muy limitado. Quisiera que lo habláramos con calma la semana que viene. Me habría gustado que la dirección nos hubiera dado más margen, pero, sea cual sea la decisión final, cuenta con mi apoyo para el año próximo. No digo que la idea no sea buena; digo que no es el momento. Un abrazo, Teresa",
    "No es que + subjuntivo niega una causa supuesta; quisiera suaviza; sea cual sea concede cualquier posibilidad; me habría gustado que + pluscuamperfecto de subjuntivo respeta la concordancia."
  ),
  "concessive-aunque-1": t(
    "Escribe la reseña de un restaurante con luces y sombras. Usa aunque con indicativo y con subjuntivo, y al menos tres estructuras concesivas más.",
    ["Aunque + indicativo (hecho real) y aunque + subjuntivo (hipótesis o hecho no relevante)", "Por más que / por mucho que", "Si bien, a pesar de que o pese a", "Valoración final matizada"],
    "El restaurante Lumbre tiene una carta original, aunque los precios son algo elevados. Si bien los entrantes resultan impecables, el plato principal llegó frío a la mesa. Por mucho que el camarero se disculpara, la espera de cuarenta minutos fue excesiva. A pesar de que el local estaba lleno, el ambiente era agradable y la música, discreta. En resumen, volveré, aunque tenga que reservar con semanas de antelación, porque el postre de chocolate merece la pena.",
    "Aunque + indicativo presenta un hecho (los precios son elevados); aunque + subjuntivo, una hipótesis o algo que no importa (aunque tenga que reservar). Si bien, a pesar de que y por mucho que son variantes más cultas."
  ),
  "nominalization-part-1-1": t(
    "Transforma en un párrafo formal una noticia coloquial: «El ayuntamiento ha decidido cerrar el puerto porque ha llovido mucho y los barcos no pueden salir». Amplíala con nominalizaciones.",
    ["Al menos cuatro nominalizaciones (el cierre, la decisión, las lluvias…)", "Registro formal, impersonal", "Conectores formales (debido a, tras, ante)", "Un dato más inventado y coherente"],
    "Ante la persistencia de las lluvias torrenciales, el ayuntamiento ha acordado el cierre temporal del puerto. La decisión, adoptada tras la reunión del comité de emergencias, responde a la imposibilidad de garantizar la salida segura de las embarcaciones. Según fuentes municipales, la reapertura de las instalaciones dependerá de la evolución del temporal. Asimismo, se ha recomendado la suspensión de las actividades náuticas hasta el fin de semana.",
    "La nominalización convierte acciones en sustantivos (cerrar → el cierre, decidir → la decisión, reabrir → la reapertura) y da al texto un tono objetivo y formal."
  ),
  "gerund-infinitive-advanced-part-1-1": t(
    "Describe la trayectoria de una persona constante que conoces. Usa perífrasis de gerundio (llevar, seguir, ir, venir) y de infinitivo (acabar de, volver a, dejar de, llegar a).",
    ["Al menos tres perífrasis de gerundio", "Al menos tres perífrasis de infinitivo", "Un infinitivo como sustantivo (el viajar…)", "Uso correcto, sin gerundio de posterioridad"],
    "Mi vecina Elvira lleva cuarenta años dando clases de piano en su casa. Empezó con dos alumnos y, poco a poco, fue ganando fama en el barrio. Aunque los médicos le recomendaron que dejara de trabajar, sigue enseñando todas las tardes. Viene diciendo desde hace años que se jubilará, pero siempre vuelve a aceptar alumnos nuevos. Para ella, el enseñar es una forma de vivir. Algunos de sus estudiantes han llegado a tocar en el Teatro Real, y acaba de recibir un homenaje del ayuntamiento.",
    "Llevar + gerundio (duración), ir + gerundio (progreso), seguir + gerundio (continuidad), venir + gerundio (repetición hasta ahora); dejar de, volver a, llegar a y acabar de + infinitivo."
  ),
  "passive-impersonal-mastery-1": t(
    "Redacta un comunicado oficial de una empresa sobre un fallo informático. Oculta al agente con la pasiva perifrástica, la pasiva refleja y el se impersonal.",
    ["Pasiva perifrástica (fue detectado…)", "Pasiva refleja (se han restablecido…)", "Se impersonal (se informa a los clientes de que…)", "Registro formal de comunicado"],
    "Comunicado oficial. Se informa a los clientes de que el pasado martes fue detectado un fallo en nuestro sistema de pagos. El problema fue resuelto en menos de cuatro horas y ya se han restablecido todos los servicios. No se han registrado accesos indebidos a los datos personales. Se ruega a los usuarios afectados que comprueben sus cuentas y, en caso de duda, se recomienda contactar con atención al cliente. Se lamentan las molestias ocasionadas.",
    "Tres formas de ocultar al agente: pasiva perifrástica (fue detectado), pasiva refleja (se han restablecido los servicios) y se impersonal (se informa a los clientes, se ruega)."
  ),
  "free-indirect-style-part-1-1": t(
    "Escribe un breve fragmento narrativo: un personaje espera una carta importante. Combina estilo directo, indirecto e indirecto libre.",
    ["Un fragmento en estilo directo (con raya o comillas)", "Un fragmento en estilo indirecto (pensó que…)", "Un fragmento en estilo indirecto libre (sin verbo introductor)", "Tiempos narrativos coherentes"],
    "Marta miraba el buzón por tercera vez aquella mañana. El cartero le había dicho que las cartas certificadas llegaban siempre antes de las doce. ¿Y si no la habían aceptado? ¿Y si había hecho el ridículo enviando aquel manuscrito? Pensó que debería salir a caminar para no volverse loca. Entonces oyó el timbre. —Carta para usted, señora —dijo el cartero con una sonrisa. Por fin. Ya no habría marcha atrás.",
    "Estilo indirecto: le había dicho que llegaban. Indirecto libre: las preguntas del personaje sin verbo introductor (¿Y si no la habían aceptado?). Directo: la intervención del cartero con raya."
  ),
  "por-para-precision-1": t(
    "Redacta un correo profesional para confirmar un encargo a un proveedor. Usa por y para con precisión en plazos, precios, finalidad, causa y medio.",
    ["Para + plazo o destinatario", "Por + precio, medio o causa", "Al menos dos expresiones fijas (por lo tanto, para entonces, por escrito…)", "Registro profesional"],
    "Estimado señor Ramos: Le confirmo el pedido de quinientas sillas para el nuevo auditorio. Según lo acordado por teléfono, el precio será de cuarenta euros por unidad. Necesitamos la mercancía para el 15 de junio, ya que la inauguración está prevista para el día 20. Le ruego que nos envíe la factura por correo electrónico. Por motivos de seguridad, el pago se realizará por transferencia. Le agradecería que nos lo confirmara por escrito. Atentamente, Lucía Gómez",
    "Para con destino y plazo (para el auditorio, para el 15 de junio); por con precio, medio y causa (por unidad, por transferencia, por motivos de seguridad)."
  ),
  "ser-estar-haber-limits-part-1-1": t(
    "Escribe la crónica de un congreso. Juega con los casos límite: ser para eventos, estar para resultados, adjetivos valorativos y haber frente a estar.",
    ["Ser para la celebración de eventos (el congreso fue en…)", "Estar con participios y resultados (estaba organizado…)", "Adjetivos valorativos con ser o estar justificados", "Haber / estar para existencia y ubicación"],
    "El congreso de lingüística fue en Salamanca del 3 al 5 de octubre. Estaba muy bien organizado y la sede, la antigua universidad, es espectacular. Hubo más de doscientas ponencias, aunque algunas estuvieron demasiado largas. La conferencia inaugural fue brillante: el ponente estuvo muy acertado al hablar del español en internet. Lo único negativo es que no había suficientes sillas en las salas pequeñas. Las actas ya están disponibles en la web.",
    "Ser localiza eventos (fue en Salamanca); estar valora una actuación concreta (estuvo acertado) o un resultado (estaba organizado). Hay/había presenta lo que existe; estar, lo que ya conocemos."
  ),
  "prepositional-verbs-part-1-1": t(
    "Escribe un breve testimonio sobre cómo cambiaste de profesión. Usa al menos seis verbos con preposición y evita el queísmo y el dequeísmo.",
    ["Al menos seis verbos preposicionales (dedicarse a, darse cuenta de, confiar en…)", "Me di cuenta de que / estoy seguro de que (sin queísmo)", "Pienso que / creo que (sin dequeísmo)", "Narración coherente"],
    "Durante diez años me dediqué a la contabilidad, pero nunca me acostumbré a pasar el día delante de una pantalla. Un día me di cuenta de que soñaba con trabajar al aire libre. Tardé en decidirme, porque dependía de mi sueldo. Mi pareja confió en mí y me animó a estudiar jardinería. Hoy me ocupo de los parques de mi ciudad y pienso que fue la mejor decisión. Estoy seguro de que nunca me arrepentiré de haber cambiado.",
    "Darse cuenta de que y estar seguro de que llevan de (evita el queísmo); pensar que y creer que no lo llevan (evita el dequeísmo)."
  ),
  "advanced-discourse-markers-1": t(
    "Escribe un párrafo argumentativo sobre la semana laboral de cuatro días. Usa marcadores discursivos avanzados para ordenar, matizar y concluir.",
    ["Marcadores de orden (en primer lugar, por otra parte…)", "Marcadores de matiz o contraste (ahora bien, con todo…)", "Un reformulador (es decir, dicho de otro modo…)", "Un marcador de conclusión (en definitiva, dicho esto…)"],
    "La semana laboral de cuatro días gana defensores en toda Europa. En primer lugar, varios estudios indican que la productividad no disminuye; es decir, se trabaja menos sin producir menos. Por otra parte, los empleados descansan más y faltan menos por enfermedad. Ahora bien, no todos los sectores pueden aplicarla: un hospital no puede cerrar los viernes. Con todo, la idea merece un debate serio. En definitiva, el reto será adaptarla a cada empresa.",
    "Ahora bien introduce una objeción; con todo concede y mantiene la tesis; es decir reformula; en definitiva cierra el argumento."
  ),
  "emphatic-structures-1": t(
    "Escribe una carta al director de un periódico para quejarte del ruido nocturno en tu barrio. Usa estructuras enfáticas para destacar lo importante.",
    ["Oraciones hendidas (es el ruido lo que…, fue en mayo cuando…)", "Lo + adjetivo + que", "Lo que + verbo + es / son", "Tono firme y formal"],
    "Señor director: Lo que los vecinos del casco antiguo sufrimos cada fin de semana es insoportable. No es la música lo que nos molesta, sino los gritos a las cuatro de la madrugada. Fue en mayo cuando empezaron a abrir los nuevos bares, y desde entonces nadie descansa. Las autoridades no imaginan lo agotador que resulta trabajar sin dormir. Lo que pedimos es simple: que se cumpla el horario de cierre. Atentamente, Pilar Vidal",
    "Las hendidas (fue en mayo cuando, no es la música lo que) y lo + adjetivo + que (lo agotador que resulta) dan relieve a la información clave."
  ),
  "future-conditional-conjecture-1": t(
    "Encuentras una casa abandonada con la mesa puesta y una carta a medio escribir. Escribe tus conjeturas sobre quién vivía allí y qué habrá ocurrido.",
    ["Futuro simple para conjeturas sobre el presente (será…)", "Futuro perfecto para el pasado reciente (habrá salido…)", "Condicional para el pasado (serían las ocho…)", "Condicional perfecto (habría tenido que…)"],
    "La casa estará abandonada desde hace años, a juzgar por el polvo. Sin embargo, la mesa está puesta para dos: alguien habrá tenido que marcharse de repente. Serían las ocho de la tarde, porque el reloj de la cocina se paró a esa hora. La carta estaría dirigida a un hijo, ya que empieza con «Querido Pablo». ¿Qué habrá pasado? Habría recibido una mala noticia y habría salido corriendo sin terminar la cena.",
    "Futuro y futuro perfecto suponen sobre el presente y lo recién pasado (estará, habrá tenido); condicional y condicional perfecto, sobre un momento pasado (serían las ocho, habría recibido)."
  ),
  "formal-informal-register-1": t(
    "Escribe dos mensajes con la misma petición (cambiar la fecha de una reunión): uno a tu jefa, a quien tratas de usted, y otro a un compañero, de tú.",
    ["Un mensaje formal con usted (le, su, podría…)", "Un mensaje informal con tú (te, tu, puedes…)", "Fórmulas de saludo y despedida adecuadas a cada registro", "Coherencia: sin mezclar tú y usted"],
    "Mensaje 1: Estimada señora Navarro: Le escribo para preguntarle si sería posible aplazar nuestra reunión del jueves al lunes, ya que ese día tengo una visita con un cliente. Le agradecería que me indicara si le viene bien. Un saludo cordial, Daniel. Mensaje 2: ¡Hola, Rubén! ¿Te importa si movemos la reunión del jueves al lunes? Es que ese día tengo un cliente. Dime si te va bien. ¡Gracias!",
    "Usted exige le, su y la tercera persona en todo el texto (le escribo, le agradecería); tú, te y tu (te importa, dime). Cambiar de registro a mitad es un error frecuente."
  ),
  "voseo-part-1-1": t(
    "Escribe un mensaje de WhatsApp de un argentino a un amigo para invitarlo a un asado. Usa el voseo en presente y en imperativo.",
    ["Al menos cuatro formas de voseo en presente (tenés, venís, querés…)", "Al menos dos imperativos de voseo (vení, traé…)", "Vocabulario rioplatense (che, asado, re…)", "Coherencia: sin formas de tú mezcladas"],
    "¡Che, Nico! ¿Qué hacés el sábado? Vamos a hacer un asado en lo de mi viejo y queremos que vengas. ¿Podés traer algo para tomar? Si tenés tiempo, vení temprano así me ayudás con el fuego. Traé también la guitarra, que la última vez estuvo re lindo. Ah, y si querés, decile a Sofi que también está invitada. Avisame cualquier cosa. ¡Abrazo!",
    "El voseo rioplatense acentúa la última sílaba en presente (hacés, podés, tenés) e imperativo (vení, traé, avisame). Vos convive con te: si querés, te espero."
  ),
  "regional-lexical-variation-1": t(
    "Escribe una breve guía para un viajero que va a recorrer México, Argentina y España, con al menos seis diferencias de vocabulario cotidiano.",
    ["Al menos seis pares de palabras regionales", "El país de cada variante", "Un consejo sobre una palabra que puede causar malentendidos", "Conectores para organizar la guía"],
    "Si viajas por el mundo hispano, prepárate para cambiar de vocabulario. En México dirás carro, en Argentina auto y en España coche. Para el autobús, en México se usa camión; en Argentina, colectivo. El móvil español es celular en América. Las palomitas de España son pochoclo en Argentina y palomitas también en México. Por último, ten cuidado con el verbo coger: en España es neutro, pero en México y Argentina conviene decir tomar o agarrar.",
    "El español es policéntrico: carro, auto y coche son igual de correctos en su zona. Ante la duda, elige la variante más extendida o neutra."
  ),
  "neutral-vs-colloquial-1": t(
    "Reescribe en español neutro, apto para toda Latinoamérica y España, este mensaje coloquial: «Tío, la peli fue una pasada, flipé en colores, ¿te vienes el finde?». Luego explica brevemente qué cambiaste.",
    ["Una versión neutra del mensaje", "Sin regionalismos ni muletillas", "Una breve explicación de los cambios", "Registro coherente"],
    "Versión neutra: «Amigo, la película estuvo increíble. Me sorprendió muchísimo. ¿Quieres venir conmigo el fin de semana?». Cambié «tío» por «amigo», porque «tío» como vocativo es propio de España. «Peli» y «finde» son abreviaciones coloquiales, así que usé las palabras completas. «Una pasada» y «flipar en colores» son expresiones españolas que no se entienden igual en América, por eso las sustituí por adjetivos neutros.",
    "El español neutro evita vocativos regionales (tío, che, güey), acortamientos coloquiales (peli, finde) y expresiones locales (flipar), sin perder el tono."
  ),
  "formal-correspondence-1": t(
    "Escribe un correo de seguimiento formal: hace dos semanas enviaste tu candidatura a un puesto y no has recibido respuesta.",
    ["Saludo formal (Estimado/a…)", "Referencia al envío anterior", "Petición cortés con condicional o subjuntivo", "Despedida formal (Atentamente, Reciba un cordial saludo…)"],
    "Estimada señora Lozano: Me pongo en contacto con usted en relación con la candidatura que envié el pasado 2 de mayo para el puesto de coordinadora de proyectos. Sigo muy interesada en la vacante y quisiera saber en qué fase se encuentra el proceso de selección. Le agradecería que me indicara si necesitan algún documento adicional. Quedo a su disposición para una entrevista. Reciba un cordial saludo. Marina Herrero",
    "En relación con, me pongo en contacto, quisiera saber, le agradecería que + imperfecto de subjuntivo y quedo a su disposición son fórmulas propias del correo formal."
  ),
  "academic-essay-writing-part-1-1": t(
    "Escribe el resumen (abstract) de un trabajo académico imaginario sobre el uso del móvil en clase. Usa un registro despersonalizado y atenuado.",
    ["Despersonalización (se analiza, el presente estudio…)", "Atenuación (parece, cabe pensar, podría…)", "Estructura: objetivo, método, resultados, conclusión", "Vocabulario académico"],
    "El presente estudio analiza la relación entre el uso del teléfono móvil en el aula y el rendimiento académico de estudiantes de secundaria. Para ello, se encuestó a 400 alumnos de cinco centros y se compararon sus calificaciones. Los resultados parecen indicar que el uso no regulado del móvil se asocia a una menor concentración. No obstante, cabe pensar que un uso guiado podría tener efectos positivos. Se concluye que es necesario establecer normas claras.",
    "El registro académico evita el yo (se analiza, el presente estudio) y atenúa las afirmaciones (parecen indicar, cabe pensar, podría)."
  ),
  "c1r-challenge-big-error-hunt": t(
    "Escribe un artículo breve para una revista de estudiantes con el título «Lo que nadie me dijo sobre el nivel C1». Combina varias estructuras avanzadas.",
    ["Una estructura enfática", "Un subjuntivo avanzado (concesiva, no es que…)", "Marcadores discursivos", "Al menos una nominalización o una perífrasis"],
    "Lo que nadie me dijo sobre el nivel C1 es que la gramática deja de ser el problema principal. No es que ya no cometa errores, sino que ahora me preocupan los matices: el registro, la entonación, la elección de una palabra. Llevo dos años leyendo prensa a diario y, aun así, sigo descubriendo expresiones nuevas. Ahora bien, el avance existe, aunque no se note de un día para otro. En definitiva, la clave es la constancia, por mucho que cueste mantenerla.",
    "Una hendida (lo que nadie me dijo es…), no es que + subjuntivo, una perífrasis (llevo dos años leyendo), marcadores (ahora bien, en definitiva) y una concesiva (por mucho que cueste)."
  ),
};
