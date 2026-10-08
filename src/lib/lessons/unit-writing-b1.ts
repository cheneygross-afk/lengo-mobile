// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-writing-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each B1 unit's review lesson (unit-reviews.ts), keyed
// by the unit's first lesson (unit-defs.ts). Instructions in Spanish; each
// task only needs the grammar and words of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [50, 100], rubric, modelAnswer, explanation);

export const B1_UNIT_WRITING: Record<string, WriteExercise> = {
  "present-perfect-1": t(
    "Escribe sobre tus experiencias: tres cosas que has hecho alguna vez, una que nunca has hecho y algo que ya has hecho o todavía no has hecho este año.",
    ["Pretérito perfecto (he viajado, he probado…)", "Alguna vez / nunca", "Ya y todavía no", "Al menos un participio irregular (visto, hecho, escrito, roto…)"],
    "He viajado a muchos países, pero nunca he estado en Asia. Alguna vez he probado comida muy rara: una vez comí hormigas en México y me gustaron. También he escrito un pequeño libro de cuentos para mis sobrinos. Este año ya he corrido una media maratón, pero todavía no he empezado las clases de guitarra que quería hacer.",
    "El pretérito perfecto habla de experiencias sin fecha (he viajado, nunca he estado). Con una fecha concreta se usa el indefinido: una vez comí."
  ),
  "present-subjunctive-formation-1": t(
    "Escribe una nota a tu compañero de piso con lo que quieres que haga esta semana. Usa quiero que, espero que y necesito que con al menos cinco verbos en subjuntivo.",
    ["Quiero / espero / necesito que + subjuntivo", "Al menos cinco formas de subjuntivo", "Al menos un verbo con cambio en el yo (tenga, haga, ponga…)", "Tono amable (por favor, gracias)"],
    "Hola, Dani: Esta semana no estoy en casa, así que necesito que riegues las plantas el martes. Quiero que saques la basura todas las noches y que pongas la lavadora el jueves. Espero que no hagas fiestas muy ruidosas, porque los vecinos se quejan. Si llega un paquete, necesito que lo guardes en mi habitación. ¡Gracias!",
    "El subjuntivo se forma desde el yo del presente: riego → riegues, pongo → pongas, hago → hagas. Va después de que cuando el sujeto cambia."
  ),
  "b1d-circuito-cambios-raiz": t(
    "Un amigo empieza un trabajo nuevo el lunes. Escríbele un mensaje con tus deseos y consejos usando subjuntivos irregulares: sea, esté, vaya, sepa, dé, haya.",
    ["Al menos cuatro subjuntivos irregulares (sea, esté, vaya, sepa, dé, haya)", "Expresiones de deseo (espero que, ojalá, que + subjuntivo)", "Un consejo (es mejor que, te recomiendo que)", "Despedida"],
    "¡Hola, Raúl! Espero que el lunes todo vaya muy bien. Ojalá que tu jefa sea simpática y que haya buen ambiente en la oficina. Te recomiendo que llegues pronto el primer día y que no estés nervioso: es normal que no sepas todo al principio. Que te den una buena mesa cerca de la ventana. ¡Mucha suerte y cuéntame!",
    "Seis subjuntivos irregulares que hay que saber de memoria: sea, esté, vaya, sepa, dé, haya. Que + subjuntivo solo también expresa un deseo: que te den una buena mesa."
  ),
  "subjunctive-wishes-doubt-emotion-1": t(
    "Tu ciudad va a cambiar: cerrarán el centro a los coches. Escribe tu reacción: qué te alegra, qué te preocupa, qué dudas tienes y qué quieres que haga el ayuntamiento.",
    ["Emoción + subjuntivo (me alegra que, me preocupa que)", "Duda + subjuntivo (dudo que, no creo que)", "Deseo + subjuntivo (quiero que, espero que)", "Una opinión con creo que + indicativo"],
    "Me alegra mucho que cierren el centro a los coches, porque habrá menos ruido. Sin embargo, me preocupa que los autobuses no sean suficientes. No creo que la gente mayor pueda caminar tanto y dudo que haya aparcamientos cerca. Creo que es una buena idea, pero quiero que el ayuntamiento escuche a los vecinos antes de empezar.",
    "Emoción, duda y deseo llevan subjuntivo (me alegra que cierren, dudo que haya). Creo que lleva indicativo (creo que es); no creo que, subjuntivo."
  ),
  "b1r-dialogue-advice-column": t(
    "Eres el autor de un consultorio sentimental. Un lector dice que su mejor amigo no le habla desde hace un mes. Escribe tu respuesta con consejos y reacciones.",
    ["Una reacción con subjuntivo (siento que, es normal que)", "Consejos (te aconsejo que, es mejor que)", "Un caso con infinitivo (es importante hablar…)", "Una frase con indicativo (es verdad que, está claro que)"],
    "Querido lector: Siento mucho que estés pasando por esto. Es normal que te sientas triste, porque un amigo es muy importante. Te aconsejo que le escribas un mensaje corto y sincero. Es mejor que no le reproches nada al principio. Es verdad que a veces la gente necesita tiempo, pero es importante hablar. Ojalá que pronto volváis a ser amigos.",
    "Valorar o aconsejar a otra persona: subjuntivo (es normal que te sientas). Sin persona concreta: infinitivo (es importante hablar). Verdad o certeza: indicativo (es verdad que necesita)."
  ),
  "subjunctive-impersonal-ojala-1": t(
    "Vas a hacer una excursión a la montaña con amigos. Escribe un mensaje al grupo con lo que es importante, necesario o posible, y tus deseos con ojalá.",
    ["Es importante / necesario que + subjuntivo", "Es posible / probable que + subjuntivo", "Al menos dos frases con ojalá", "Una frase con infinitivo (es mejor llevar…)"],
    "¡Hola a todos! Para el sábado es necesario que llevemos botas y agua. Es importante que salgamos temprano, porque la ruta es larga. Es posible que llueva por la tarde, así que es mejor llevar un chubasquero. Ojalá haga sol en la cima y ojalá que nadie se canse demasiado. ¡Nos vemos a las siete en la estación!",
    "Expresiones impersonales + que + subjuntivo cuando hay un sujeto (es necesario que llevemos); + infinitivo cuando es general (es mejor llevar). Ojalá siempre lleva subjuntivo."
  ),
  "b1d-corrige-impersonales": t(
    "Escribe una carta breve a tu yo de dentro de cinco años. Usa expresiones impersonales y ojalá para hablar de tus deseos y de lo que es importante para ti.",
    ["Ojalá + subjuntivo (al menos dos)", "Es importante / fundamental que + subjuntivo", "Una frase general con infinitivo", "Una frase con indicativo (es evidente que, es cierto que)"],
    "Querida Ana del futuro: Ojalá estés bien y sigas viviendo cerca del mar. Es importante que no dejes de pintar, aunque tengas mucho trabajo. Es fundamental que tu familia esté contigo. Es cierto que la vida cambia mucho, pero es bueno tener sueños. Ojalá hayas aprendido a tocar el piano por fin. Un abrazo de la Ana de hoy.",
    "Valoración con sujeto: subjuntivo (es importante que no dejes). Certeza: indicativo (es cierto que la vida cambia). Ojalá hayas aprendido: deseo sobre algo ya pasado."
  ),
  "commands-imperative-1": t(
    "Escribe las normas de una biblioteca para los usuarios. Usa mandatos de usted (afirmativos y negativos) y al menos uno de nosotros para invitar a todos.",
    ["Al menos tres mandatos de usted afirmativos (hable, apague…)", "Al menos tres mandatos negativos (no coma, no use…)", "Un mandato de nosotros (respetemos, cuidemos…)", "Un título o introducción"],
    "Normas de la biblioteca. Por favor, hable en voz baja y apague el móvil antes de entrar. No coma ni beba en las salas de lectura. Devuelva los libros antes de la fecha indicada. No use los ordenadores para juegos. Si necesita ayuda, pregunte en el mostrador. Cuidemos juntos este espacio para que todos puedan estudiar.",
    "Los mandatos de usted y los negativos usan el subjuntivo: hable, apague, no coma. Nosotros también: cuidemos, respetemos."
  ),
  "b1d-circuito-pronombres-mandatos": t(
    "Escribe una receta sencilla de un plato que te guste para un amigo. Usa mandatos de tú con pronombres: lávalas, córtalo, no lo dejes…",
    ["Al menos cuatro mandatos de tú afirmativos con pronombres (pélalas, échalo…)", "Al menos un mandato negativo con pronombre (no lo quemes)", "Tildes donde hacen falta (córtalas)", "Orden lógico (primero, después, al final)"],
    "Tortilla de patatas. Primero, pela cuatro patatas y córtalas en trozos finos. Pon aceite en la sartén y fríelas a fuego lento. Mientras, bate seis huevos y échales sal. Después, mezcla las patatas con los huevos. Pon todo en la sartén y, cuando esté dorada, dale la vuelta con un plato. No la dejes mucho tiempo: debe quedar jugosa.",
    "En el afirmativo los pronombres van detrás y pegados, a menudo con tilde: córtalas, fríelas. En el negativo van delante: no la dejes."
  ),
  "conditional-tense-1": t(
    "Escribe un correo formal a un hotel para pedir información. Usa el condicional para ser educado: ¿podría…?, me gustaría…, ¿sería posible…?",
    ["Saludo y despedida formales", "Al menos cuatro verbos en condicional", "Peticiones educadas (¿podría…?, ¿sería posible…?)", "Usted en todo el correo"],
    "Estimados señores: Me gustaría reservar una habitación doble del 3 al 6 de mayo. ¿Podrían decirme si el desayuno está incluido en el precio? También querría saber si tienen aparcamiento. Llegaremos tarde, sobre las once de la noche: ¿sería posible hacer el registro a esa hora? Les agradecería una respuesta pronto. Atentamente, María López",
    "El condicional suaviza las peticiones: me gustaría, podrían, querría, sería posible, les agradecería. Se forma con el infinitivo + -ía."
  ),
  "b1r-contrast-future-conditional": t(
    "¿Qué harías con un millón de euros? Escribe qué harías primero, a quién ayudarías y qué no cambiarías nunca. Termina con un consejo a un amigo con «yo que tú…».",
    ["Al menos cinco verbos en condicional", "Al menos dos condicionales irregulares (haría, tendría, podría, diría…)", "Yo que tú / yo en tu lugar + condicional", "Una frase con futuro para comparar (cuando tenga… / el año que viene…)"],
    "Con un millón de euros, primero dejaría de trabajar unos meses y viajaría por Sudamérica. Le compraría una casa a mi madre y ayudaría a una asociación de mi barrio. No cambiaría a mis amigos ni mi ciudad: seguiría viviendo aquí. Mi amigo Luis quiere gastarlo todo en coches. Yo que tú, guardaría una parte. Pero el año que viene, seguro que seguiremos sin millones.",
    "El condicional imagina (viajaría, compraría); el futuro predice lo real (seguiremos). Yo que tú + condicional para aconsejar: guardaría una parte."
  ),
  "si-clauses-simple-1": t(
    "Escribe consejos para un estudiante nuevo en tu ciudad con frases con si: qué pasa si hace algo y qué tiene que hacer en cada caso.",
    ["Al menos cuatro frases con si + presente", "Consecuencias en presente, futuro o imperativo", "Ningún futuro después de si", "Un vocabulario útil de la ciudad (transporte, barrios…)"],
    "Si llegas en invierno, trae un abrigo, porque hace mucho frío. Si vives en el centro, puedes ir a todas partes andando. Si compras el abono de transporte, ahorrarás mucho dinero. Si te pierdes, pregunta en cualquier tienda: la gente es muy amable. Y si tienes tiempo el domingo, visita el mercado: te encantará.",
    "Si + presente para condiciones reales: si llegas, si compras. Después de si nunca va el futuro; la consecuencia puede ir en presente (puedes), futuro (ahorrarás) o imperativo (trae)."
  ),
  "b1r-spiral-commands-conditional-si": t(
    "Tu hermano pequeño se queda solo en casa un fin de semana. Escríbele una nota con instrucciones, condiciones (si…) y lo que harías tú en su lugar.",
    ["Mandatos afirmativos y negativos", "Al menos dos frases con si + presente", "Una frase con condicional (yo en tu lugar…)", "Pronombres con los mandatos (llámame, no la abras…)"],
    "Pablo: este fin de semana estás solo, así que ten cuidado. Si tienes hambre, hay comida en la nevera; caliéntala en el microondas. No abras la puerta a nadie. Si pasa algo, llámame enseguida. Saca al perro dos veces al día. Yo en tu lugar no me quedaría despierto toda la noche jugando, porque el lunes tienes examen. ¡Pórtate bien!",
    "Mandatos con pronombres (caliéntala, llámame, pórtate), si + presente para condiciones y el condicional para el consejo: yo en tu lugar no me quedaría."
  ),
  "past-perfect-1": t(
    "Cuenta un día en el que todo salió mal porque algo ya había pasado antes: el tren ya había salido, alguien ya se había ido… Usa el pluscuamperfecto al menos tres veces.",
    ["Al menos tres verbos en pluscuamperfecto (había salido…)", "Indefinido para los hechos principales", "Imperfecto para describir", "Marcadores (ya, todavía no, cuando llegué…)"],
    "El viernes pasado fue un desastre. Cuando llegué a la estación, el tren ya había salido. Llamé a mi jefa, pero ella ya había empezado la reunión. Por la tarde fui al cine con Ana, pero no quedaban entradas porque un grupo de estudiantes las había comprado todas. Estaba tan cansada que me acosté a las nueve.",
    "El pluscuamperfecto (había salido) cuenta lo que pasó antes de otro momento pasado (cuando llegué). Indefinido para los hechos, imperfecto para la descripción."
  ),
  "b1d-cuento-boda-tarde": t(
    "Escribe un cuento corto que empiece así: «Cuando llegué a la boda, ya…». Mezcla los tiempos del pasado y termina con un deseo con ojalá.",
    ["Empieza con la frase dada", "Pluscuamperfecto, indefinido e imperfecto", "Al menos un pretérito perfecto o un comentario desde hoy", "Final con ojalá + subjuntivo"],
    "Cuando llegué a la boda, ya habían terminado la ceremonia. Todos estaban en el jardín y la novia sonreía, aunque me miró de forma rara. Yo había perdido el tren y había venido en taxi. Me disculpé con todos y bailé toda la noche para compensar. Desde entonces he llegado puntual a todas partes. Ojalá mi prima me haya perdonado.",
    "Pluscuamperfecto para lo anterior (habían terminado, había perdido), imperfecto para la escena (estaban, sonreía), indefinido para los hechos (llegué, bailé)."
  ),
  "relative-pronouns-1": t(
    "Describe a tres personas importantes de tu vida usando oraciones de relativo: que, quien, con quien, lo que, el que…",
    ["Al menos cinco pronombres relativos", "Preposición + relativo (con quien, en el que…)", "Lo que para una idea", "Variedad: que, quien, el que, donde"],
    "Mi abuela es la persona que más me ha enseñado. Es una mujer con quien puedo hablar de todo. Mi amigo Jorge, que vive en Chile, es el chico con el que hice mi primer viaje. La ciudad donde nos conocimos era muy pequeña. Mi profesora de piano, a quien veo cada semana, siempre dice lo que piensa, y eso es lo que más me gusta de ella.",
    "Que es el relativo más general; quien se usa para personas tras una preposición o entre comas (con quien, a quien). Lo que se refiere a una idea completa."
  ),
  "b1r-tema-camino": t(
    "Describe tu objeto favorito sin decir su nombre, con oraciones de relativo, para que otra persona lo adivine. Termina con la pregunta «¿Qué es?».",
    ["No dices el nombre del objeto", "Al menos cuatro oraciones de relativo", "Preposición + relativo (con el que, en la que…)", "La pregunta final"],
    "Es una cosa que uso todos los días. Es el objeto con el que me despierto por la mañana y en el que leo las noticias. Es algo que siempre llevo en el bolsillo. La persona a la que más llamo con él es mi madre. Lo que menos me gusta es que la batería dura poco. ¿Qué es?",
    "Preposición + artículo + que (con el que, en la que, a la que) cuando el verbo lleva preposición. Lo que + verbo para una idea: lo que menos me gusta."
  ),
  "b1-vocabulary-practice-7": t(
    "Tu madre te ha dado consejos por teléfono para tu viaje. Escribe a un amigo lo que te dijo y lo que quiere que hagas, usando el estilo indirecto: me dijo que…, quiere que…",
    ["Estilo indirecto: me dijo que + indicativo", "Me pidió / quiere que + subjuntivo", "Al menos un mandato de tú irregular para citar (ten, pon, sal, ven…)", "Al menos cinco frases"],
    "Mi madre me ha llamado esta mañana. Me ha dicho que el tiempo en Escocia es muy malo y que lleve un paraguas. Me ha pedido que la llame cuando llegue al hotel. Quiere que tenga cuidado con la cartera. Sus palabras exactas fueron: «Ten cuidado, pon el pasaporte en un sitio seguro y no salgas solo por la noche». Las madres son así.",
    "Al contar una orden o un deseo: me pidió / quiere que + subjuntivo (que la llame, que tenga). Al contar información: me dijo que + indicativo (es muy malo)."
  ),
  "passive-voice-se-1": t(
    "Escribe tres anuncios cortos para el tablón de tu barrio: uno para vender algo, uno para alquilar algo y uno para buscar a una persona. Usa la pasiva refleja y el se impersonal.",
    ["Se vende / se venden con concordancia correcta", "Se alquila / se busca", "Se + verbo para normas o costumbres (se habla, se necesita…)", "Datos de contacto o precio"],
    "Se vende bicicleta de montaña en buen estado. Solo se ha usado dos veces. Precio: 150 euros. Se alquilan dos habitaciones en piso compartido, cerca de la universidad. No se permiten mascotas. Se busca profesora de guitarra para niño de diez años. Se valora experiencia. Interesados, llamar al 600 123 456.",
    "Se + verbo en singular o plural según el sujeto: se vende una bicicleta, se alquilan dos habitaciones. Con personas se usa a: se busca a alguien."
  ),
  "b1r-contrast-se-pasivo-impersonal": t(
    "Escribe una breve noticia sobre un festival en tu ciudad sin decir quién hace las cosas. Usa la pasiva refleja y el se impersonal.",
    ["Al menos cinco construcciones con se", "Concordancia del verbo con el sujeto paciente", "Un se impersonal (se dice que, se espera que…)", "Estilo de noticia: qué, cuándo, dónde"],
    "Este fin de semana se celebra el festival de música del barrio. Se han instalado tres escenarios en la plaza mayor y se esperan más de diez mil personas. Se venderán entradas en la puerta, pero se recomienda comprarlas por internet. Se dice que este año vendrá un grupo muy famoso. Además, se cortarán varias calles al tráfico.",
    "Pasiva refleja: el verbo concuerda con lo que se hace (se han instalado tres escenarios). Se impersonal: verbo en singular sin sujeto (se dice que, se recomienda)."
  ),
  "b1g-future-perfect": t(
    "Imagina que un amigo no ha llegado a una cita importante. Escribe tus hipótesis sobre qué habrá pasado, qué le habrá ocurrido y dónde estará, y qué se te olvidó a ti.",
    ["Futuro perfecto para suposiciones sobre el pasado (habrá perdido…)", "Futuro simple para suposiciones sobre el presente (estará…)", "Una perífrasis (acaba de, sigue sin, vuelve a…)", "Se accidental (se me olvidó, se le perdió…)"],
    "Son las nueve y Mario sigue sin aparecer. ¿Qué habrá pasado? Habrá perdido el autobús, o se le habrá olvidado la cita. Quizá estará en el trabajo todavía. Acabo de llamarlo, pero no contesta: se le habrá acabado la batería. Lo peor es que a mí se me olvidó traer las entradas del concierto, así que también tengo que volver a casa.",
    "Futuro perfecto para suponer sobre el pasado reciente (habrá perdido); futuro simple sobre ahora (estará). El se accidental quita la culpa: se me olvidó."
  ),
  "b1-vocabulary-practice-8": t(
    "Un amigo quiere hacer su primera acampada. Dale consejos sobre el lugar, el equipo y la seguridad usando el condicional y algunas palabras de la naturaleza.",
    ["Al menos tres consejos con condicional (deberías, yo que tú, sería mejor…)", "Vocabulario de la naturaleza (el río, el bosque, la tienda de campaña…)", "Un mandato o una frase con si", "Un cierre amable"],
    "Para tu primera acampada, yo iría a un camping cerca de un río, no a la montaña. Deberías llevar una buena tienda de campaña y un saco de dormir caliente, porque por la noche en el bosque hace frío. Sería mejor no hacer fuego si no está permitido. Si ves nubes negras, recoge todo. ¡Seguro que lo pasarás genial!",
    "El condicional aconseja con suavidad: yo iría, deberías llevar, sería mejor. Si + presente con imperativo para una instrucción: si ves nubes, recoge todo."
  ),
  "combined-object-pronouns-1": t(
    "Has organizado una cena y tus amigos preguntan quién trae cada cosa. Contesta usando dos pronombres juntos: se lo, me la, te los…",
    ["Al menos cinco frases con dos pronombres", "Le / les → se delante de lo, la, los, las", "Pronombres con infinitivo o gerundio al menos una vez", "Concordancia correcta con la cosa"],
    "¿El vino? Te lo traigo yo. ¿Y el postre para Ana? Se lo compra su hermano en la pastelería. Las sillas me las presta mi vecina. ¿Los platos? Os los dejo yo, no os preocupéis. A los niños les encantan las pizzas, así que voy a hacérselas esta tarde. Y la música, ¿quién la pone? Nos la pone Luis.",
    "Primero el indirecto y luego el directo: te lo, me las, os los. Le y les se convierten en se: se lo compra (a Ana). Con infinitivo van pegados: hacérselas."
  ),
  "b1r-tema-activismo-vecinal": t(
    "Eres el presidente de la asociación de vecinos. Escribe instrucciones a los voluntarios para una campaña de limpieza, usando mandatos con dos pronombres.",
    ["Al menos tres mandatos afirmativos con dos pronombres (dáselo, tráemelas…)", "Al menos un mandato negativo con dos pronombres (no se lo des…)", "Tildes correctas", "Un saludo y una despedida"],
    "Queridos voluntarios: Mañana empieza la campaña de limpieza. Los guantes están en mi casa; si los necesitáis, pedídmelos. Las bolsas de basura dádselas a los niños del colegio. Los carteles, colocadlos en la plaza. Si un vecino quiere ayudar, explicádselo todo con paciencia. Las herramientas no se las prestéis a nadie de fuera. ¡Gracias por vuestra ayuda!",
    "En el afirmativo, los pronombres van pegados (con vosotros: pedídmelos, dádselas, explicádselo; con tú: pídemelos, dáselas). En el negativo van delante: no se las prestéis."
  ),
  "possessive-pronouns-1": t(
    "Tú y tu compañero de piso habéis mezclado vuestras cosas en la mudanza. Escribe un diálogo para decidir de quién es cada cosa usando el mío, la tuya, los suyos…",
    ["Al menos cinco pronombres posesivos (el mío, la tuya…)", "Concordancia en género y número con la cosa", "Contraste entre mi / tu y el mío / el tuyo", "Formato de diálogo"],
    "—¿Esta lámpara es tuya? —No, la mía es blanca. Esa es de Clara. —¿Y estos libros? —Son míos, pero el de cocina es tuyo. —Ah, sí, mi libro de cocina. ¿Y las toallas? —Las mías son azules; las tuyas, verdes. —¿Y la tele? —La nuestra está rota. Esa es de los vecinos: es la suya.",
    "El posesivo tónico concuerda con la cosa, no con el dueño: la mía (lámpara), los míos (libros). Mi libro antes del nombre; el mío sin nombre."
  ),
  "b1r-tema-convivencia-vecinos": t(
    "Escribe una nota a tu vecino porque ha dejado sus cosas en la escalera. Pregunta de quién son, explica qué ha pasado y pide que haga algo.",
    ["Una pregunta con ¿de quién es / son…?", "Posesivos (la suya, el nuestro…)", "Un pretérito perfecto (alguien ha dejado…)", "Una petición con subjuntivo o mandato"],
    "Hola, vecino del 3.º B: esta mañana alguien ha dejado dos bicicletas y unas cajas en la escalera. ¿De quién son? Creo que las bicis son suyas, porque las nuestras están en el garaje. Mi hijo casi se ha caído al bajar. Le pido por favor que las guarde en su casa o en el garaje. Muchas gracias, Elena (3.º A).",
    "¿De quién es / son? pregunta por el dueño. Las bicis son suyas: el posesivo concuerda con bicis. Le pido que + subjuntivo para una petición educada."
  ),
  "vosotros-commands-1": t(
    "Eres monitor de un campamento en España. Escribe las instrucciones para el primer día a un grupo de chicos usando mandatos de vosotros.",
    ["Al menos cinco mandatos afirmativos de vosotros (id, traed, levantaos…)", "Al menos dos negativos (no corráis, no os olvidéis…)", "Un verbo reflexivo en mandato (sentaos, levantaos)", "Saludo al grupo"],
    "¡Bienvenidos, chicos! Escuchad bien las normas. Primero, dejad las mochilas en las cabañas y venid al comedor. Después de comer, id a la piscina, pero no corráis por el borde. Por la noche, lavaos los dientes y acostaos a las diez. No os olvidéis de llamar a vuestros padres. Y sobre todo, ¡pasadlo bien!",
    "Vosotros afirmativo: infinitivo con -d (escuchad, venid, id). Con os la d desaparece: lavaos, acostaos. El negativo usa el subjuntivo: no corráis, no os olvidéis."
  ),
  "b1r-spiral-b1-first-half": t(
    "Escribe un mensaje al grupo de amigos para organizar un viaje en España: qué queréis que haga cada uno, condiciones con si y mandatos de vosotros.",
    ["Mandatos de vosotros (reservad, traed…)", "Quiero que / es importante que + subjuntivo", "Si + presente", "Una frase con condicional"],
    "¡Hola, chicos! Ya tenemos fecha: del 10 al 14 de julio en Cádiz. Reservad los billetes de tren esta semana, porque luego suben. Quiero que Marta busque el apartamento y que Luis organice las excursiones. Si hace calor, iremos a la playa todos los días. Traed crema y no os olvidéis del DNI. Yo que vosotros compraría las entradas del concierto ya.",
    "Mandatos de vosotros (reservad, traed, no os olvidéis), quiero que + subjuntivo, si + presente con futuro y un consejo en condicional."
  ),
  "b1s-polite-requests": t(
    "Escribe un correo a una agencia para preguntar por un piso de alquiler. Pregunta por el precio, los gastos y si puedes visitarlo, con fórmulas educadas.",
    ["Saludo y despedida formales", "Peticiones con condicional (¿podría…?, me gustaría…)", "Al menos tres preguntas concretas", "Usted en todo el correo"],
    "Estimada señora: He visto en su página web el anuncio del piso de la calle Mayor y me gustaría recibir más información. ¿Podría decirme si el precio incluye los gastos de comunidad? También querría saber cuánto es la fianza. ¿Sería posible visitar el piso este jueves por la tarde? Le agradecería mucho su respuesta. Un saludo cordial, Tomás Ruiz",
    "Fórmulas formales con condicional: me gustaría, ¿podría…?, querría saber, ¿sería posible…?, le agradecería."
  ),
  "b1s-paperwork": t(
    "Compraste unos auriculares por internet y llegaron rotos. Escribe una reclamación a la tienda: explica qué pasó y qué solución quieres.",
    ["Saludo formal y datos del pedido", "Indefinido para contar lo que pasó", "Una petición con subjuntivo (les ruego que, quiero que)", "Tono firme pero educado"],
    "Estimados señores: El pasado 5 de marzo compré unos auriculares en su tienda online (pedido n.º 4521). El paquete llegó ayer, pero uno de los auriculares no funciona y la caja estaba dañada. Les ruego que me envíen unos nuevos lo antes posible o que me devuelvan el dinero. Adjunto fotos del producto. Quedo a la espera de su respuesta. Atentamente, Irene Gil",
    "Una reclamación cuenta los hechos en indefinido (compré, llegó) y pide con les ruego que + subjuntivo (envíen, devuelvan)."
  ),
  "b1-vocabulary-practice-10": t(
    "Escribe tu opinión sobre la vida en el campo y en la ciudad. Habla de tus emociones, usa expresiones de opinión y algún vocabulario de la naturaleza.",
    ["Expresiones de opinión (en mi opinión, creo que, no creo que…)", "Vocabulario de emociones (me relaja, me agobia…)", "Vocabulario de la naturaleza", "Un contraste (sin embargo, en cambio)"],
    "En mi opinión, vivir en el campo es más sano. Me relaja mucho despertarme con el canto de los pájaros y pasear por el bosque. En cambio, la ciudad me agobia un poco por el ruido y la contaminación. Sin embargo, no creo que pueda vivir lejos de mis amigos ni de los cines. Por eso prefiero pasar los fines de semana en la naturaleza.",
    "Creo que + indicativo, no creo que + subjuntivo. Me relaja, me agobia funcionan como gustar."
  ),
  "b1r-word-web-kitchen": t(
    "Escribe una breve noticia sobre la subida de los precios de la comida. Explica qué se ha encarecido, cómo afecta a las familias y qué se recomienda hacer.",
    ["Vocabulario de comida y dinero (el precio, ahorrar, la compra…)", "Al menos dos construcciones con se", "Un pretérito perfecto (han subido…)", "Una recomendación"],
    "Los precios de los alimentos han subido un diez por ciento este año. Se han encarecido sobre todo el aceite, la fruta y el pescado. Muchas familias ya no llegan a fin de mes y han cambiado su forma de hacer la compra. Los expertos recomiendan comparar precios, comprar productos de temporada y no tirar comida. Se espera que los precios bajen en otoño.",
    "Pretérito perfecto para noticias recientes (han subido), se para no nombrar al agente (se han encarecido) y se espera que + subjuntivo."
  ),
  "b1d-rep-mezcla-habla-de-ti-final": t(
    "Describe tu trabajo ideal y la ciudad ideal para vivir. Usa el condicional, oraciones de relativo y vocabulario del trabajo y la ciudad.",
    ["Condicional para lo ideal (trabajaría, viviría…)", "Al menos dos oraciones de relativo", "Vocabulario del trabajo (el sueldo, el horario, los compañeros…)", "Vocabulario de la ciudad (el barrio, el transporte…)"],
    "Mi trabajo ideal sería en una empresa pequeña, con unos compañeros que se ayuden entre ellos. Tendría un horario flexible y un buen sueldo, con el que podría viajar dos veces al año. Trabajaría tres días en la oficina y dos desde casa. Viviría en una ciudad con buen transporte público, en un barrio tranquilo donde haya muchos parques en los que pasear con mi perro.",
    "El condicional describe lo ideal (sería, tendría, viviría). Las oraciones de relativo añaden detalles: con el que podría viajar, donde haya parques, en los que pasear. Como son lugares y personas imaginados, el relativo va en subjuntivo (que se ayuden, donde haya)."
  ),
  "b1-comprehensive-review-1": t(
    "Escribe sobre un cambio importante en tu vida: cómo era tu vida antes, qué pasó, cómo ha cambiado desde entonces y qué esperas del futuro.",
    ["Imperfecto e indefinido para el antes y el cambio", "Pretérito perfecto para desde entonces", "Espero que / ojalá + subjuntivo", "Al menos un conector (sin embargo, por eso, desde entonces)"],
    "Hace tres años vivía en una gran ciudad y trabajaba en un banco. Estaba siempre estresado y casi no veía a mi familia. Un día decidí dejarlo todo y me mudé a un pueblo cerca de la costa. Desde entonces he abierto una pequeña librería y he aprendido a vivir más despacio. Espero que el negocio siga creciendo y ojalá nunca tenga que volver.",
    "Antes (vivía, estaba), el cambio (decidí, me mudé), desde entonces (he abierto) y el futuro (espero que siga, ojalá no tenga)."
  ),
  "b1r-challenge-subjunctive-gauntlet": t(
    "Escribe una carta a un estudiante que va a empezar el nivel B1. Cuéntale qué te ha costado más, qué te ha ayudado y dale consejos con subjuntivo y mandatos.",
    ["Pretérito perfecto para tu experiencia", "Consejos con subjuntivo (te recomiendo que, es importante que)", "Mandatos de tú afirmativos y negativos", "Una frase con si + presente"],
    "Querido Sam: Este año he aprendido muchísimo, pero lo que más me ha costado es el subjuntivo. Me ha ayudado mucho leer cuentos y escuchar pódcast. Te recomiendo que hagas un poco cada día y que no tengas miedo a equivocarte. Es importante que hables con nativos. Si no entiendes algo, pregunta. Y no te rindas: ¡al final todo tiene sentido! Un abrazo, Lena",
    "Te recomiendo que / es importante que + subjuntivo (hagas, hables), mandatos de tú (pregunta, no te rindas) y si + presente."
  ),
};
