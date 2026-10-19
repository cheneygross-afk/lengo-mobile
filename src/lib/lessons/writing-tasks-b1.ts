// Synced from cheneygross-afk/lengo:src/lib/lessons/writing-tasks-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const B1_WRITING_TASKS: UnitWriting = {
  "b1d-circuito-participios-irregulares": [
    {
      "type": "write",
      "prompt": "Tu pareja vuelve hoy de un viaje. Escríbele un mensaje para contarle todo lo que has hecho en casa esta semana, lo bueno y lo malo. Usa al menos cinco participios irregulares.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Pretérito perfecto con marcadores de tiempo no terminado (esta semana, esta mañana…)",
        "Al menos cinco participios irregulares (hecho, puesto, roto, abierto, vuelto…)",
        "Pronombres delante de haber (lo he dejado, me ha contestado)",
        "Un saludo y una despedida"
      ],
      "modelAnswer": "¡Hola, cariño! Esta semana he hecho muchas cosas en casa. He pintado la cocina y he puesto las cortinas nuevas. También he escrito a la dueña del piso por lo de la calefacción, pero todavía no me ha contestado. Lo malo: he roto tu taza favorita, lo siento. Esta mañana he abierto todas las ventanas y he limpiado a fondo. Ah, y tu hermano ha vuelto de Londres y te ha traído un regalo: lo he dejado en tu mesa. ¡Te espero!",
      "explanation": "Con esta semana y esta mañana se usa el pretérito perfecto. Hecho, puesto, escrito, roto, abierto y vuelto son participios irregulares, y los pronombres van siempre delante de haber: lo he dejado."
    }
  ],
  "b1d-rep-perfecto-ya-todavia": [
    {
      "type": "write",
      "prompt": "Tu jefa te pregunta cómo van los preparativos del congreso de la semana que viene. Escríbele un correo con lo que ya has hecho y lo que todavía no has hecho, y explica por qué.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Ya + pretérito perfecto (ya he reservado…)",
        "Todavía no + pretérito perfecto (todavía no he recibido…)",
        "Un pronombre de objeto con el perfecto (lo he elegido)",
        "Saludo y despedida de un correo de trabajo"
      ],
      "modelAnswer": "Hola, Marta: Te cuento cómo van los preparativos del congreso. Ya he reservado la sala grande del hotel y ya he enviado las invitaciones a todos los participantes. El menú también lo he elegido ya. Todavía no he recibido los carteles: la imprenta me ha dicho que llegan el jueves. Tampoco he hablado todavía con el técnico de sonido, porque está de vacaciones hasta el lunes. Te escribo otra vez el lunes. Un saludo, Javier",
      "explanation": "Ya + pretérito perfecto dice lo que está hecho (ya he reservado); todavía no, lo que falta (todavía no he recibido). Cuando el objeto va delante, se repite con un pronombre: el menú lo he elegido."
    }
  ],
  "b1d-patron-subjuntivo-ar": [
    {
      "type": "write",
      "prompt": "Tu amiga Lucía termina la carrera y se va de viaje por Europa. Escríbele una tarjeta con tus deseos. Usa espero que y que + subjuntivo con al menos cinco verbos en -ar.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Espero que + subjuntivo",
        "Que + subjuntivo para un deseo (que lo pases bien)",
        "Al menos cinco verbos en -ar en subjuntivo (disfrutes, visites, hables…)",
        "Una felicitación y una despedida"
      ],
      "modelAnswer": "¡Querida Lucía! ¡Enhorabuena por terminar la carrera! Espero que disfrutes mucho de tu viaje por Europa. Que visites muchos museos, que pruebes la comida de cada país y que hables con mucha gente. Espero que descanses, porque te lo mereces después de tantos exámenes. Y, por favor, que nos mandes fotos de vez en cuando. ¡Que lo pases genial! Un beso enorme, Carmen",
      "explanation": "Los verbos en -ar cambian la -a por -e en el subjuntivo: disfrutar → disfrutes, visitar → visites, probar → pruebes. Que + subjuntivo solo, sin verbo principal, también expresa un deseo: ¡que lo pases genial!"
    }
  ],
  "present-subjunctive-formation-2": [
    {
      "type": "write",
      "prompt": "Escribe una entrada de tu diario sobre tu familia: cuenta qué cosas te alegran, cuáles te preocupan y qué te molesta de lo que hacen los demás.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Me alegra que + subjuntivo",
        "Me preocupa que / me molesta que + subjuntivo",
        "Al menos cinco formas de subjuntivo, alguna con cambio en el yo (venga, salga, ponga…)",
        "Vocabulario de emociones (contento, nervioso, triste…)"
      ],
      "modelAnswer": "Querido diario: Hoy estoy contenta. Me alegra mucho que mi hermana viva otra vez cerca de casa y que venga a comer los domingos. Sin embargo, me preocupa que mi padre trabaje tantas horas: siempre está cansado y nervioso. También me pone triste que mi abuela no salga casi nunca de casa. Y me molesta un poco que mi hermano pequeño ponga la música tan alta por la noche. Mañana hablo con él.",
      "explanation": "Los verbos de emoción (me alegra, me preocupa, me molesta) llevan que + subjuntivo cuando hablan de otra persona. Las formas salen del yo del presente: vengo → venga, salgo → salga, pongo → ponga."
    }
  ],
  "b1d-ronda-ortografia-subjuntivo": [
    {
      "type": "write",
      "prompt": "Trabajas en una escuela de idiomas. Escribe un correo formal a los estudiantes nuevos con recomendaciones para el primer día. Usa les recomendamos que, les pedimos que y verbos con cambios ortográficos (lleguen, busquen, empiecen, paguen…).",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Les recomendamos / les pedimos que + subjuntivo",
        "Al menos tres verbos con cambio ortográfico (lleguen, busquen, comiencen, paguen…)",
        "Ustedes en todo el correo",
        "Saludo y despedida formales"
      ],
      "modelAnswer": "Estimados estudiantes: Bienvenidos a la Escuela Sol. El curso empieza el lunes a las nueve. Les recomendamos que lleguen quince minutos antes para hacer la prueba de nivel. Les pedimos que paguen la matrícula en recepción antes de la primera clase. Al entrar, les aconsejamos que busquen su nombre en la lista del tablón. Si tienen preguntas, pueden escribirnos a este correo. Esperamos que comiencen el curso con muchas ganas. Atentamente, la dirección",
      "explanation": "En el subjuntivo, -car, -gar y -zar cambian la letra para mantener el sonido: busquen, lleguen, paguen, comiencen. Recomendar, pedir y aconsejar + que llevan subjuntivo, aquí en la forma de ustedes."
    }
  ],
  "b1d-rep-formacion-irregulares-seis": [
    {
      "type": "write",
      "prompt": "Tu hijo de dieciséis años quiere ir a un festival de música con sus amigos. Escribe un diálogo entre él y su madre o su padre, con condiciones y deseos. Usa al menos cuatro de los seis irregulares: sea, esté, vaya, sepa, dé, haya.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Formato de diálogo con dos personas",
        "Al menos cuatro irregulares (sea, esté, vaya, sepa, dé, haya)",
        "Quiero que / no quiero que / necesito que + subjuntivo",
        "Espero que + subjuntivo"
      ],
      "modelAnswer": "—Mamá, ¿puedo ir al festival el sábado? —¿Con quién vas? —Con Leo y Marta. —Vale, pero quiero que estés en casa a la una. —¡Pero el último concierto termina a las dos! —No quiero que vuelvas solo de noche. Necesito que me des el teléfono de Leo. —Vale. —Y espero que haya autobuses a esa hora. —Hay uno a las dos y media. —Bueno… Quiero que sepas que confío en ti. Espero que sea un día genial. —¡Gracias, mamá!",
      "explanation": "Estos verbos no forman el subjuntivo desde el yo: estés, des, haya, sepas, sea. Van después de quiero que, necesito que y espero que porque el sujeto de los dos verbos es distinto."
    }
  ],
  "b1d-patron-creo-no-creo": [
    {
      "type": "write",
      "prompt": "Tú y un amigo acabáis de ver una película y no estáis de acuerdo. Escribe el diálogo: cada uno da su opinión sobre la historia, los actores y el final.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Creo que / pienso que + indicativo",
        "No creo que + subjuntivo",
        "Dudo que + subjuntivo",
        "Formato de diálogo"
      ],
      "modelAnswer": "—¿Qué te ha parecido? —Creo que es la mejor película del año. La historia es muy original. —Pues yo no creo que sea tan original. Es igual que otra que vimos el mes pasado. —Bueno, pero los actores son buenísimos. —Pienso que la protagonista actúa bien, pero no creo que el chico tenga mucho talento. —¿Y el final? Yo creo que tiene sentido. —Dudo que alguien lo entienda a la primera. —Entonces tendremos que verla otra vez.",
      "explanation": "Creo que y pienso que afirman y llevan indicativo (es, actúa, tiene); no creo que y dudo que expresan duda y llevan subjuntivo (sea, tenga, entienda)."
    }
  ],
  "b1d-habla-de-ti-reacciones": [
    {
      "type": "write",
      "prompt": "Tu amiga Elena te ha escrito con muchas noticias: se casa en verano, su hermano se ha quedado sin trabajo y ella se muda a Valencia. Contéstale con tus reacciones a cada noticia.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Me alegro de que / me encanta que + subjuntivo",
        "Siento que / me da pena que + subjuntivo",
        "Un deseo con espero que + subjuntivo",
        "Saludo y despedida de un correo informal"
      ],
      "modelAnswer": "¡Hola, Elena! ¡Qué de noticias! Me alegro muchísimo de que te cases en verano. ¡Me encanta que por fin tengáis fecha! Siento mucho que tu hermano esté sin trabajo; espero que encuentre algo pronto, porque es un chico muy trabajador. Y me da un poco de pena que te vayas a Valencia, porque vamos a estar más lejos, pero me alegra que vivas cerca del mar. Espero que me invites pronto. Un abrazo muy fuerte, Pablo",
      "explanation": "Las reacciones a lo que hacen otros llevan que + subjuntivo: me alegro de que te cases, siento que esté sin trabajo. Ojo: me alegro de que, pero me alegra que, sin de."
    }
  ],
  "b1d-cuento-carta-madre": [
    {
      "type": "write",
      "prompt": "Tu hijo o tu hija se va a estudiar un año a otro país. Escríbele una carta antes del viaje con tus deseos, tus dudas y lo que sientes.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Deseos con espero que / quiero que + subjuntivo",
        "Dudas con no creo que / dudo que + subjuntivo",
        "Emociones con me alegra que / me da miedo que + subjuntivo",
        "Al menos una frase con infinitivo por mismo sujeto (quiero decirte…)"
      ],
      "modelAnswer": "Querida Inés: Mañana te vas a Dublín y quiero decirte algunas cosas antes del viaje. Me alegra mucho que tengas esta oportunidad, aunque me da un poco de miedo que estés tan lejos. Dudo que la comida allí sea tan buena como la de casa, pero no creo que te importe mucho. Espero que hagas buenos amigos y que aprendas muchísimo. Solo quiero que me llames los domingos. Te vamos a echar mucho de menos. Con todo mi cariño, mamá",
      "explanation": "Deseo (espero que hagas), duda (dudo que sea) y emoción (me alegra que tengas) llevan subjuntivo porque hablan de otra persona. Con el mismo sujeto se usa el infinitivo: quiero decirte."
    }
  ],
  "b1d-practica-mezclada-deseo-duda": [
    {
      "type": "write",
      "prompt": "Eres jefe de un equipo y la empresa va a cambiar el horario de trabajo. Escribe un correo a tu equipo: explica el cambio, cómo te sientes, qué dudas tienes y qué quieres que hagan.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Una información con indicativo (sé que, como sabéis…)",
        "Emoción o duda + subjuntivo (me preocupa que, no creo que…)",
        "Una petición con quiero que / os pido que + subjuntivo",
        "Registro de trabajo, cordial"
      ],
      "modelAnswer": "Hola a todos: Como sabéis, a partir de octubre la oficina abrirá a las ocho. Sé que es un cambio grande para muchos de vosotros. Me alegra que podamos salir antes por la tarde, pero me preocupa que algunos tengan problemas con el transporte. No creo que el horario nuevo sea perfecto, así que quiero que me digáis vuestra opinión. Os pido que rellenéis la encuesta antes del viernes. Gracias por vuestra paciencia. Un saludo, Andrés",
      "explanation": "Sé que da información y lleva indicativo (es); me alegra que, me preocupa que y no creo que llevan subjuntivo. Quiero que y os pido que también, porque el jefe pide algo a otras personas."
    }
  ],
  "b1d-patron-es-importante-que": [
    {
      "type": "write",
      "prompt": "Trabajas en la piscina municipal. Escribe un cartel con las normas para los usuarios usando es obligatorio que, es necesario que, es importante que y es mejor que.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Al menos cuatro expresiones impersonales + que + subjuntivo",
        "Una expresión con infinitivo para una norma general (es mejor no…)",
        "Ustedes en todo el texto",
        "Un título"
      ],
      "modelAnswer": "Normas de la piscina. Es obligatorio que todos los usuarios se duchen antes de entrar en el agua. Es necesario que usen gorro de baño. Es importante que los niños menores de diez años estén siempre con un adulto. Es mejor que dejen sus cosas de valor en las taquillas. Y recuerden: es mejor no comer justo antes de nadar. Gracias por su colaboración.",
      "explanation": "Es + adjetivo + que + subjuntivo cuando la norma es para alguien concreto (es necesario que usen); es + adjetivo + infinitivo cuando es general (es mejor no comer)."
    }
  ],
  "b1r-mission-ojala-wishes": [
    {
      "type": "write",
      "prompt": "Una compañera de trabajo se jubila después de treinta años en la empresa. Escribe un mensaje para su tarjeta de despedida con tus deseos y recuerdos.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Al menos tres deseos con ojalá + subjuntivo",
        "Que + subjuntivo para un deseo (que disfrutes…)",
        "Una expresión impersonal (es una pena que, es normal que…)",
        "Tono cariñoso"
      ],
      "modelAnswer": "Querida Pilar: Es una pena que te vayas, porque la oficina no va a ser igual sin ti. Gracias por tu ayuda y por tus cafés de los lunes. Ojalá tengas mucho tiempo para viajar y ojalá puedas por fin aprender a pintar. Que disfrutes de tus nietos y de tu jardín. Ojalá vengas a visitarnos de vez en cuando. ¡Te vamos a echar de menos! Un abrazo, Rosa",
      "explanation": "Ojalá siempre lleva subjuntivo (ojalá tengas, ojalá vengas). Las valoraciones como es una pena que también lo piden, y que + subjuntivo solo es un deseo corto: que disfrutes."
    }
  ],
  "b1d-cadena-infinitivo-subjuntivo": [
    {
      "type": "write",
      "prompt": "Escribe un artículo breve para la revista de tu escuela con consejos para dormir mejor. Da consejos generales para todos y consejos personales para los estudiantes.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Es importante / es mejor + infinitivo para consejos generales",
        "Es necesario / es mejor que + subjuntivo para consejos personales",
        "Una certeza con es verdad que + indicativo",
        "Un título y una conclusión"
      ],
      "modelAnswer": "Dormir bien: la clave para aprender. Es verdad que muchos estudiantes duermen menos de siete horas. Los médicos dicen que es importante dormir ocho horas cada noche y que es mejor acostarse siempre a la misma hora. Si estudias por la noche, es necesario que apagues el móvil una hora antes de dormir. También es mejor que no tomes café después de las cinco. Y si tienes exámenes, es fundamental que descanses bien. En resumen: dormir no es perder el tiempo.",
      "explanation": "Un consejo general usa el infinitivo (es importante dormir); un consejo para alguien usa que + subjuntivo (es necesario que apagues). Es verdad que afirma algo y lleva indicativo: duermen."
    }
  ],
  "b1-common-words-supernatural": [
    {
      "type": "write",
      "prompt": "Un amigo te escribe asustado: dice que en su casa nueva hay un fantasma, porque oye ruidos todas las noches. Contéstale con posibles explicaciones y tus dudas.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Es posible que / puede que + subjuntivo",
        "No creo que / dudo que + subjuntivo",
        "Una certeza con es verdad que + indicativo",
        "Vocabulario de lo sobrenatural (el fantasma, el espíritu, la leyenda…)"
      ],
      "modelAnswer": "¡Tranquilo, Álex! Yo no creo que haya un fantasma en tu casa. Es posible que sea el viento, porque es una casa muy vieja. También puede que los vecinos de arriba se acuesten tarde. Es verdad que muchas casas antiguas tienen leyendas, pero dudo que un espíritu te quiera molestar. ¿Por qué no grabas los ruidos esta noche? Y si tienes miedo, ven a dormir a mi casa.",
      "explanation": "Las posibilidades y las dudas llevan subjuntivo: es posible que sea, puede que se acuesten, dudo que te quiera. Es verdad que afirma un hecho y lleva indicativo: tienen."
    }
  ],
  "b1d-patron-tu-afirmativo": [
    {
      "type": "write",
      "prompt": "Un amigo va a cuidar tu casa y tu gato este fin de semana. Escríbele una nota con instrucciones. Usa mandatos de tú, entre ellos al menos tres irregulares (ven, pon, haz, sal, ten…).",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cinco mandatos de tú afirmativos",
        "Al menos tres irregulares (ven, pon, ten, haz…)",
        "Al menos un mandato negativo (no abras, no dejes…)",
        "Un saludo y un agradecimiento"
      ],
      "modelAnswer": "¡Hola, Marcos! Gracias por cuidar a Simba. Ven por la mañana y por la noche. Pon comida en su plato y cambia el agua todos los días. Riega también las plantas del balcón. Cuando salgas, cierra bien la puerta, y no abras la ventana del salón, porque el gato se escapa. Ten paciencia: al principio se esconde. Haz lo que quieras en casa y come lo que hay en la nevera. ¡Mil gracias!",
      "explanation": "El mandato de tú afirmativo es igual que el presente de él (cambia, riega, cierra), pero hay irregulares: ven, pon, ten, haz. El negativo usa el subjuntivo: no abras."
    }
  ],
  "b1d-ronda-nosotros-vamos": [
    {
      "type": "write",
      "prompt": "Eres el capitán de un equipo de fútbol y mañana jugáis la final. Escribe el breve discurso que das en el vestuario para animar a tus compañeros. Usa mandatos de nosotros.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Al menos cuatro mandatos de nosotros afirmativos (salgamos, juguemos…)",
        "Al menos dos negativos (no perdamos, no nos rindamos…)",
        "¡Vamos! como mandato de ir",
        "Tono de ánimo"
      ],
      "modelAnswer": "Compañeros, hoy es el día. Hemos trabajado todo el año para llegar aquí. Salgamos al campo con calma y juguemos como sabemos. Pasemos el balón rápido y defendamos juntos. No perdamos la concentración y no protestemos al árbitro. Si nos marcan un gol, no nos rindamos. Pensemos en nuestra gente, que está en las gradas. ¡Vamos, equipo! ¡A ganar!",
      "explanation": "El mandato de nosotros es el subjuntivo: salgamos, juguemos, defendamos; el negativo es igual con no delante: no perdamos, no nos rindamos. Ir es la excepción en afirmativo: ¡vamos!"
    }
  ],
  "b1d-cadena-tu-usted": [
    {
      "type": "write",
      "prompt": "Alquilas tu apartamento a turistas. Escribe las instrucciones para los huéspedes, tratándolos de usted: dónde están las llaves, cómo funcionan las cosas y qué no deben hacer. Usa mandatos con pronombres.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro mandatos de usted afirmativos con pronombre (ábrala, enciéndalo…)",
        "Al menos dos mandatos negativos con pronombre (no la deje…)",
        "Tildes correctas en los mandatos con pronombre",
        "Usted en todo el texto (su, le)"
      ],
      "modelAnswer": "Bienvenido a su apartamento. Las llaves están en una caja junto a la puerta: ábrala con el código 1234. Para el agua caliente, busque el botón rojo de la cocina y enciéndalo diez minutos antes de ducharse. La contraseña del wifi está en la nevera; apúntela, por favor. Si usa la lavadora, no la deje cerrada después. El día de la salida, deje las llaves en la mesa y no las meta en el buzón. Si tiene algún problema, llámeme.",
      "explanation": "Con usted, los pronombres se pegan al mandato afirmativo y aparece una tilde (ábrala, enciéndalo, llámeme); en el negativo van delante: no la deje, no las meta."
    }
  ],
  "b1d-patron-condicional": [
    {
      "type": "write",
      "prompt": "Describe tu día perfecto: dónde te despertarías, qué harías por la mañana y por la tarde, con quién estarías y qué comerías. Usa el condicional.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos seis verbos en condicional",
        "Al menos dos condicionales irregulares (haría, saldría, vendría, podría…)",
        "Marcadores de tiempo (por la mañana, después, por la noche)",
        "Varias personas (yo, nosotros, mis amigos…)"
      ],
      "modelAnswer": "Mi día perfecto empezaría en una casa al lado del mar. Me despertaría sin despertador y desayunaría en la terraza con mi pareja. Por la mañana saldríamos a nadar y después daríamos un paseo por el puerto. Mis amigos vendrían a comer y haríamos una paella enorme. Por la tarde dormiría la siesta y leería un buen libro. Por la noche iríamos a un concierto al aire libre. Sería un día sin prisas y sin móvil.",
      "explanation": "El condicional imagina situaciones: infinitivo + -ía (despertaría, leería). Algunos verbos cambian la raíz, como en el futuro: saldríamos, vendrían, haríamos."
    }
  ],
  "b1r-dialogue-polite-requests": [
    {
      "type": "write",
      "prompt": "Pasas el fin de semana en casa de los padres de tu pareja y necesitas varias cosas. Escribe el diálogo con tu suegra: pídele cosas con mucha educación y responde a sus ofertas.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos tres peticiones con condicional (¿le importaría…?, ¿podría…?, ¿sería posible…?)",
        "Usted con la suegra",
        "Una respuesta educada a una oferta (me encantaría, preferiría…)",
        "Formato de diálogo"
      ],
      "modelAnswer": "—Buenos días, Carmen. ¿Le importaría dejarme una toalla? Se me ha olvidado la mía. —Claro, ahora te la traigo. ¿Quieres café? —Me encantaría, gracias. ¿Podría ponerme un poco de leche fría? —Por supuesto. ¿Y unas tostadas? —No, gracias, preferiría solo fruta. Y otra cosa: ¿sería posible usar el wifi? Tengo que enviar un correo. —Sí, la contraseña está detrás del router. —Muchas gracias, es usted muy amable.",
      "explanation": "El condicional suaviza las peticiones (¿le importaría…?, ¿podría…?, ¿sería posible…?) y las respuestas (me encantaría, preferiría). Con la familia de la pareja es habitual usar usted al principio."
    }
  ],
  "b1d-cadena-consejos-yo-que-tu": [
    {
      "type": "write",
      "prompt": "En un foro, una persona cuenta que le han ofrecido un trabajo mejor pagado en otra ciudad, pero no quiere dejar a sus amigos. Escribe una respuesta con tus consejos.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Deberías / podrías + infinitivo",
        "Yo que tú / yo en tu lugar + condicional",
        "Al menos un condicional irregular (haría, diría, tendría…)",
        "Un saludo o una reacción al principio"
      ],
      "modelAnswer": "Hola, Nuria: Entiendo muy bien tu situación, porque a mí me pasó lo mismo hace dos años. Yo que tú, aceptaría el trabajo. Es una oportunidad que no tendrías todos los días. Primero deberías visitar la ciudad un fin de semana para conocerla. También podrías hablar con la empresa y pedir trabajar desde casa algunos días. Yo en tu lugar no diría que no sin pensarlo bien. Los amigos de verdad no desaparecen por unos kilómetros. ¡Suerte!",
      "explanation": "Tres maneras de aconsejar con el condicional: deberías visitar, podrías hablar y yo que tú aceptaría. Diría y tendría son irregulares, como en el futuro."
    }
  ],
  "b1-common-words-heroes": [
    {
      "type": "write",
      "prompt": "Has visto una película de aventuras con un caballero, una princesa y un dragón, pero el final no te ha gustado. Escribe una reseña: resume la historia y explica cómo la cambiarías tú.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Vocabulario de los cuentos (el caballero, la princesa, la espada, el castillo…)",
        "Al menos cuatro verbos en condicional para tus cambios (cambiaría, lucharía…)",
        "Pretérito perfecto para tu experiencia (he visto, me ha gustado…)",
        "Una recomendación final"
      ],
      "modelAnswer": "Este fin de semana he visto «El último caballero». La historia es sencilla: un caballero con una espada mágica tiene que salvar a una princesa que vive en un castillo con un dragón. Los efectos especiales me han gustado mucho, pero el final es muy aburrido. Yo lo cambiaría: la princesa no esperaría a nadie, lucharía contra el dragón con su propia espada y después se haría amiga de él. Así la película sería más original. La recomiendo, pero solo para niños.",
      "explanation": "El condicional sirve para imaginar otra versión de la historia: yo lo cambiaría, la princesa lucharía, sería más original. El pretérito perfecto cuenta la experiencia reciente: he visto, me han gustado."
    }
  ],
  "b1d-patron-si-presente-futuro": [
    {
      "type": "write",
      "prompt": "Quieres ser delegado o delegada de tu clase. Escribe un breve discurso para tus compañeros con tus promesas: qué harás si te votan.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro frases con si + presente y futuro",
        "Ningún futuro después de si",
        "Vocabulario de la escuela (los exámenes, las notas, la biblioteca…)",
        "Un saludo y una petición final"
      ],
      "modelAnswer": "Hola a todos: Me llamo Sergio y quiero ser vuestro delegado. Si me votáis, hablaré con los profesores para no tener tres exámenes el mismo día. Si el director está de acuerdo, la biblioteca abrirá por las tardes y podremos estudiar allí. Si alguien tiene un problema con las notas, yo lo acompañaré a hablar con el tutor. Y si ganamos la liga de fútbol, organizaremos una fiesta. Por eso os pido vuestro voto el viernes. ¡Gracias!",
      "explanation": "Si + presente presenta una condición real (si me votáis, si alguien tiene) y el resultado va en futuro (hablaré, abrirá, organizaremos). Después del si de condición nunca va el futuro."
    }
  ],
  "b1r-mission-if-then-plans": [
    {
      "type": "write",
      "prompt": "Un amigo viene a visitarte el fin de semana, pero todavía no sabes qué tiempo hará ni quién estará libre. Escríbele un correo con los planes posibles según las condiciones.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro condiciones con si + presente",
        "Resultados en futuro, presente o mandato",
        "Si no… para una alternativa",
        "Saludo y despedida de un correo informal"
      ],
      "modelAnswer": "¡Hola, Tomás! ¡Qué ganas de verte! Te cuento los planes para el fin de semana. Si hace sol el sábado, iremos a la playa en tren. Si llueve, podemos ir al museo de ciencias, que es gratis los sábados. Por la noche, si Laura y Diego están libres, cenaremos en un restaurante peruano. Si no, cocinamos en casa y vemos una película. Y si te apetece ver fútbol el domingo, compra las entradas por internet. ¡Hasta el viernes!",
      "explanation": "Si + presente para cada condición (si hace sol, si llueve), con el resultado en futuro (iremos), presente (podemos) o mandato (compra). Si no introduce el plan alternativo."
    }
  ],
  "b1d-habla-de-ti-planes-condiciones": [
    {
      "type": "write",
      "prompt": "Es 31 de diciembre. Escribe una entrada de tu diario con tus planes para el año que viene; cada plan depende de una condición.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro frases con si + presente",
        "Futuro o ir a + infinitivo en el resultado",
        "Una cadena de consecuencias (si ahorro…, viajaré…; si viajo…)",
        "Marcadores de tiempo (en primavera, este verano…)"
      ],
      "modelAnswer": "Querido diario: Mañana empieza un año nuevo y tengo muchos planes. Si consigo un trabajo a tiempo completo, ahorraré un poco cada mes. Si ahorro lo suficiente, este verano viajaré a México con mi hermana. En primavera voy a apuntarme a un gimnasio, si encuentro uno barato cerca de casa. Si aprendo a cocinar mejor, invitaré a mis amigos más a menudo. Y si todo sale bien, a final de año me mudaré a un piso más grande.",
      "explanation": "Cada plan depende de una condición real: si + presente (si consigo, si ahorro) y el resultado en futuro (ahorraré, viajaré). Una consecuencia puede ser la condición de la siguiente: ahorraré → si ahorro…"
    }
  ],
  "b1d-ronda-si-imperativo": [
    {
      "type": "write",
      "prompt": "Te vas de vacaciones y un compañero nuevo te va a sustituir en la tienda. Escríbele un correo con instrucciones para cada problema posible: si pasa esto, haz esto.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro frases con si + presente + mandato",
        "Mandatos afirmativos y negativos de tú",
        "Al menos un mandato con pronombre (guárdalo, no le devuelvas…)",
        "Saludo y despedida"
      ],
      "modelAnswer": "Hola, Iván: Te dejo unas instrucciones para estas dos semanas. Si un cliente quiere devolver algo, pídele el tique y revisa el producto. Si no tiene tique, no le devuelvas el dinero: ofrécele un vale. Si la caja no funciona, llama al técnico; su número está en la pared. Si viene el proveedor el martes, firma el albarán y guárdalo en el cajón. Y si tienes dudas, escríbeme sin miedo. ¡Mucho ánimo! Un abrazo, Clara",
      "explanation": "Si + presente seguido de un mandato da instrucciones para cada caso: si no funciona, llama. Con pronombres, el afirmativo los pega (pídele, guárdalo) y el negativo los pone delante (no le devuelvas)."
    }
  ],
  "b1d-linea-tiempo-antes-despues": [
    {
      "type": "write",
      "prompt": "Ayer fue tu cumpleaños y tus amigos te prepararon una fiesta sorpresa. Escribe una entrada de diario: cuenta qué encontraste al llegar a casa y qué habían hecho tus amigos antes.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos tres verbos en pluscuamperfecto (habían decorado…)",
        "Indefinido para lo que pasó cuando llegaste",
        "Ya con el pluscuamperfecto",
        "Al menos un participio irregular (puesto, hecho, escrito…)"
      ],
      "modelAnswer": "Querido diario: Ayer fue mi cumpleaños y fue increíble. Cuando abrí la puerta de casa, todos gritaron: «¡Sorpresa!». Mis amigos ya habían decorado el salón con globos y habían puesto música de los noventa. Marta había hecho una tarta de chocolate y Luis había escrito una canción para mí. Mi hermano les había dado la llave por la mañana. Yo no había sospechado nada en todo el día. ¡Fue el mejor cumpleaños de mi vida!",
      "explanation": "El pluscuamperfecto cuenta lo que pasó antes de llegar (habían decorado, había hecho); el indefinido, lo que pasó en ese momento (abrí, gritaron). Puesto, hecho y escrito son participios irregulares."
    }
  ],
  "past-perfect-2": [
    {
      "type": "write",
      "prompt": "Escribe una noticia breve para un periódico local sobre un incendio en un edificio de tu ciudad. Cuenta qué pasó y qué había ocurrido antes de la llegada de los bomberos.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Título y estilo de noticia: qué, cuándo, dónde",
        "Al menos tres verbos en pluscuamperfecto",
        "Indefinido para los hechos principales",
        "Vocabulario de sucesos (el incendio, los bomberos, los vecinos, los heridos…)"
      ],
      "modelAnswer": "Incendio en un edificio del centro. Ayer por la tarde hubo un incendio en el tercer piso de un edificio de la calle Mayor. Cuando llegaron los bomberos, los vecinos ya habían salido a la calle. Un joven había ayudado a una mujer mayor a bajar por la escalera. Según la policía, el fuego había empezado en la cocina porque alguien había dejado una sartén encendida. No hubo heridos graves, pero tres familias pasaron la noche en un hotel.",
      "explanation": "En una noticia, el indefinido cuenta los hechos principales (hubo, llegaron, pasaron) y el pluscuamperfecto lo que había pasado antes (habían salido, había empezado, había dejado)."
    }
  ],
  "b1d-pares-he-habia": [
    {
      "type": "write",
      "prompt": "Estás de viaje por Andalucía. Escribe una postal a un amigo: cuenta lo que has hecho hoy y esta semana, y compáralo con lo que nunca habías hecho antes del viaje.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Pretérito perfecto para hoy y esta semana (he visitado…)",
        "Pluscuamperfecto para antes del viaje (nunca había estado…)",
        "Al menos un participio irregular (visto, hecho…)",
        "Saludo y despedida de postal"
      ],
      "modelAnswer": "¡Hola, Sara! Te escribo desde Granada. Esta semana he visitado Sevilla y Córdoba, y esta mañana he visto la Alhambra. ¡Es preciosa! Antes de este viaje nunca había estado en el sur de España y nunca había probado el salmorejo: ¡me encanta! Hoy también he hecho un curso de flamenco. Yo nunca había bailado delante de nadie, así que he pasado un poco de vergüenza. ¡Mil besos y hasta pronto! Ana",
      "explanation": "El pretérito perfecto cuenta lo hecho hasta ahora (he visitado, he visto, he hecho); el pluscuamperfecto, lo que no había pasado hasta un momento anterior (nunca había estado antes de este viaje)."
    }
  ],
  "b1d-circuito-preposicion-relativo": [
    {
      "type": "write",
      "prompt": "Quieres alquilar una habitación de tu piso. Escribe un anuncio para una web: describe la habitación, el piso, el barrio y a tus compañeros. Usa relativos con preposición.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos dos relativos con preposición (en el que, con quien, desde el que…)",
        "Que para personas y cosas",
        "Lo que para una idea",
        "Precio o datos de contacto"
      ],
      "modelAnswer": "Alquilo habitación en piso céntrico. La habitación, que tiene mucha luz, da a un balcón desde el que se ve el parque. El piso tiene dos baños y una cocina en la que cabemos todos. Vivo con Marta, una chica con quien es muy fácil convivir, y con un gato que se llama Tito. En el barrio hay un mercado en el que compramos los sábados. Lo que más nos gusta es la tranquilidad. Precio: 400 euros al mes. Teléfono: 600 123 456.",
      "explanation": "Detrás de una preposición se usa el que / la que (desde el que, en la que) o quien para personas (con quien). Que solo va sin preposición, y lo que se refiere a una idea: lo que más nos gusta."
    }
  ],
  "relative-pronouns-2": [
    {
      "type": "write",
      "prompt": "Un amigo viene a tu casa por primera vez. Escríbele un correo con las indicaciones desde la estación de metro hasta tu portal, usando relativos para describir los lugares.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Indicaciones con mandatos (sal, sigue, gira, cruza…)",
        "Al menos cuatro relativos (que, donde, en la que, el que…)",
        "Vocabulario de la ciudad (la plaza, el semáforo, la fuente…)",
        "Saludo y despedida"
      ],
      "modelAnswer": "¡Hola, Pedro! Te explico cómo llegar. Baja en la estación de Sol y sal por la salida que da a la calle Preciados. Sigue recto hasta la plaza donde hay una fuente grande. Gira a la izquierda en la calle en la que está el banco y cruza en el segundo semáforo. Mi portal es el que tiene la puerta verde, justo al lado de la panadería de la que te hablé. Llama al tercero B. ¡Hasta luego!",
      "explanation": "Los relativos describen los lugares mientras das indicaciones: la plaza donde hay una fuente, la calle en la que está el banco, el que tiene la puerta verde. Hablar lleva de, por eso: la panadería de la que te hablé."
    }
  ],
  "b1d-habla-de-ti-personas-importantes": [
    {
      "type": "write",
      "prompt": "Describe un lugar muy importante para ti: dónde está, cómo es, quién vive o trabaja allí y por qué es especial. Usa oraciones de relativo.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro oraciones de relativo",
        "Un relativo con preposición (en el que, con quien, al que…)",
        "Lo que para una idea (lo que más me gusta…)",
        "Imperfecto o presente para describir"
      ],
      "modelAnswer": "El lugar más importante para mí es el pueblo de mis abuelos, que está en las montañas de León. Es un pueblo pequeño en el que viven solo cien personas. Allí está la casa donde pasaba todos los veranos de niño. En la plaza hay un bar que lleva Tomás, un señor con quien mi abuelo jugaba a las cartas cada tarde. Lo que más me gusta del pueblo es el silencio de la noche. Es un lugar al que siempre quiero volver.",
      "explanation": "Las oraciones de relativo describen sin repetir: un pueblo en el que viven, un señor con quien jugaba, un lugar al que quiero volver. Lo que más me gusta resume una idea."
    }
  ],
  "b1r-tema-redes-sociales": [
    {
      "type": "write",
      "prompt": "Escribe una entrada para un blog con tu opinión sobre las redes sociales: qué te gusta, qué te molesta y qué consejo darías. Usa oraciones de relativo.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Al menos cuatro oraciones de relativo (la gente que…, las personas a las que…)",
        "Lo que para una idea",
        "Una opinión con creo que / no creo que",
        "Un consejo final"
      ],
      "modelAnswer": "¿Redes sociales? Sí, pero con cuidado. Creo que las redes son útiles para hablar con los amigos que viven lejos. Lo que más me gusta es ver las fotos de mi familia, que vive en Argentina. Sin embargo, lo que me molesta es la gente que solo sube fotos perfectas. Las personas a las que sigo parecen siempre felices, y no creo que eso sea real. Mi consejo es sencillo: sigue solo a quienes te hacen sentir bien y apaga el móvil por la noche.",
      "explanation": "Que se refiere a personas o cosas (los amigos que viven lejos); lo que, a una idea (lo que me molesta). Con preposición se usa a las que o a quienes. No creo que lleva subjuntivo: sea."
    }
  ],
  "b1d-rep-imperativo-usted-ustedes": [
    {
      "type": "write",
      "prompt": "Trabajas en la recepción de un hotel pequeño. Escribe una nota de bienvenida para los grupos de turistas, con instrucciones en la forma de ustedes.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cinco mandatos de ustedes afirmativos (bajen, dejen…)",
        "Al menos dos mandatos negativos (no fumen, no pongan…)",
        "Al menos un mandato con pronombre pegado (siéntense, pregúntennos…)",
        "Saludo de bienvenida"
      ],
      "modelAnswer": "Bienvenidos al Hotel Las Rosas. Esperamos que disfruten de su estancia. El desayuno se sirve de siete a diez en el comedor: bajen cuando quieran y siéntense donde prefieran. Si salen por la noche, dejen la llave en recepción. No fumen en las habitaciones y no pongan toallas en el balcón. Para excursiones o taxis, pregúntennos sin problema. Por favor, cierren las ventanas si encienden el aire acondicionado. ¡Feliz estancia!",
      "explanation": "El mandato de ustedes usa el subjuntivo en afirmativo y en negativo: bajen, dejen, no fumen. Los pronombres se pegan al afirmativo con tilde: siéntense, pregúntennos."
    }
  ],
  "b1r-tema-reunion-familiar": [
    {
      "type": "write",
      "prompt": "Organizas una gran reunión familiar en el pueblo. Escribe un correo a tu primo, que hace años que no viene, para convencerlo. Usa mandatos irregulares de tú.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro mandatos irregulares de tú (ven, ten, haz, di, pon…)",
        "Al menos un mandato negativo (no te preocupes, no digas…)",
        "Hace + tiempo + que para hablar del pasado",
        "Saludo y despedida cariñosos"
      ],
      "modelAnswer": "¡Hola, Rubén! ¿Cómo estás? El 15 de agosto hacemos una comida en el pueblo con toda la familia. Hace cinco años que no vienes, así que esta vez ven, por favor. Ten en cuenta que la abuela cumple noventa años. Haz un hueco en tu agenda y diles a tus hijos que traigan el bañador, porque hay piscina. No te preocupes por el tío Paco: ya no está enfadado contigo. Pon la fecha en el calendario. ¡Un abrazo enorme! Lucía",
      "explanation": "Ocho mandatos de tú son irregulares: ven, ten, haz, di, pon, sal, sé, ve. Con pronombre se pegan (diles), y el negativo usa el subjuntivo: no te preocupes."
    }
  ],
  "b1d-pares-pasivo-impersonal": [
    {
      "type": "write",
      "prompt": "Una revista para estudiantes extranjeros te pide un texto sobre las costumbres de tu país: cómo se saluda, cuándo se come, qué se hace los domingos. Usa el se pasivo y el se impersonal.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Se impersonal sin sustantivo o con a + persona (se come tarde, se visita a los abuelos…)",
        "Se pasivo con concordancia (se preparan comidas, se celebran fiestas…)",
        "Al menos seis construcciones con se",
        "Un título"
      ],
      "modelAnswer": "Costumbres de España. En España se saluda con dos besos a los amigos y a la familia. Se come muy tarde, sobre las dos y media, y se cena a las nueve o a las diez. Los domingos se visita a los abuelos y se preparan comidas largas, como la paella. En verano se celebran fiestas en todos los pueblos. En los bares se habla muy alto, pero no es de mala educación. En general, aquí se vive mucho en la calle.",
      "explanation": "Sin sustantivo, o con a + persona, el se es impersonal y el verbo va en singular (se come, se visita a los abuelos). Con un sustantivo, el verbo concuerda con él: se preparan comidas, se celebran fiestas."
    }
  ],
  "passive-voice-se-2": [
    {
      "type": "write",
      "prompt": "Eres el secretario de una pequeña empresa. Escribe el resumen de la reunión de hoy: qué se presentó, qué se decidió y qué se hará el mes que viene, sin decir quién lo hizo.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cinco construcciones con se en varios tiempos (se aprobó, se contratarán…)",
        "Concordancia del verbo con el sustantivo",
        "Vocabulario de empresa (el presupuesto, las ventas, los clientes…)",
        "Formato de resumen: fecha y puntos en orden"
      ],
      "modelAnswer": "Resumen de la reunión del 12 de marzo. Primero, se presentaron los resultados del trimestre: las ventas han subido un ocho por ciento. Después se aprobó el presupuesto para la nueva campaña de publicidad. También se decidió abrir una oficina en Valencia, y se contratarán dos comerciales en abril. Se habló de las quejas de algunos clientes y se acordó mejorar el servicio de atención telefónica. La próxima reunión se celebrará el 9 de abril.",
      "explanation": "El se pasivo esconde quién hace la acción y es típico de los informes: se presentaron los resultados, se aprobó el presupuesto, se contratarán dos comerciales. El verbo concuerda con el sustantivo en todos los tiempos."
    }
  ],
  "b1d-circuito-anuncios-trabajo": [
    {
      "type": "write",
      "prompt": "Tienes un restaurante y necesitas personal para el verano. Escribe una oferta de empleo con el lenguaje típico de los anuncios: se busca, se ofrece, se requiere, se valorará.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Se busca(n) / se necesita(n) + puesto",
        "Se ofrece(n) / se requiere(n) con concordancia",
        "Se valorará + experiencia o idiomas",
        "Datos de contacto"
      ],
      "modelAnswer": "Se buscan camareros para el verano. Restaurante en la playa de Salou necesita dos camareros y un ayudante de cocina de junio a septiembre. Se requiere experiencia mínima de un año y disponibilidad para trabajar los fines de semana. Se valorará el conocimiento de inglés o francés. Se ofrece contrato de tres meses, buen ambiente y comida incluida. Los interesados pueden enviar su currículum a empleo@lamarina.es.",
      "explanation": "Los anuncios de trabajo usan el se pasivo y el verbo concuerda con el sustantivo: se buscan camareros, se requiere experiencia. Con varios sustantivos en singular detrás del verbo, lo normal es el singular: se ofrece contrato, buen ambiente y comida."
    }
  ],
  "b1r-tema-reclamar-pago": [
    {
      "type": "write",
      "prompt": "Hiciste un trabajo de traducción para una empresa hace dos meses y todavía no te han pagado. Escribe un correo firme pero educado para reclamar el pago.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Indefinido y pretérito perfecto para los hechos (se entregó, no se ha recibido…)",
        "Al menos dos construcciones con se (se acordó, se ha recibido…)",
        "Una petición con le ruego que + subjuntivo",
        "Saludo y despedida formales"
      ],
      "modelAnswer": "Estimado señor Ruiz: Le escribo en relación con la traducción del catálogo de su empresa. El trabajo se entregó el 3 de septiembre y, como se acordó en el contrato, el pago debía hacerse en un plazo de treinta días. Sin embargo, hasta hoy no se ha recibido ninguna transferencia. Le he enviado dos correos y todavía no he tenido respuesta. Le ruego que revise la factura y que realice el pago esta semana. Le agradecería una respuesta lo antes posible. Atentamente, Clara Gil",
      "explanation": "El se pasivo presenta los hechos sin acusar a nadie (se entregó, no se ha recibido). Le ruego que + subjuntivo hace la petición firme, y el condicional (le agradecería) mantiene la cortesía."
    }
  ],
  "b1g-periphrases-gerund": [
    {
      "type": "write",
      "prompt": "Hace cinco años que no hablas con un antiguo compañero de clase. Escríbele un correo para contarle cómo te va. Usa perífrasis: seguir + gerundio, llevar + gerundio, acabar de, dejar de, volver a.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Seguir + gerundio (sigo viviendo…)",
        "Llevar + tiempo + gerundio (llevo tres años trabajando…)",
        "Al menos dos perífrasis de infinitivo (acabo de, he dejado de, he vuelto a…)",
        "Saludo y despedida informales"
      ],
      "modelAnswer": "¡Hola, Diego! ¡Cuánto tiempo! Te escribo porque acabo de encontrar una foto de nuestro viaje de fin de curso. ¿Qué tal estás? Yo sigo viviendo en Zaragoza, pero ahora en otro barrio. Llevo tres años trabajando en una empresa de diseño y estoy muy contento. He dejado de fumar, por fin, y he vuelto a jugar al baloncesto los martes. ¿Sigues tocando la guitarra? Escríbeme y cuéntamelo todo. ¡Un abrazo! Javi",
      "explanation": "Seguir + gerundio indica que algo continúa (sigo viviendo) y llevar + tiempo + gerundio, cuánto dura (llevo tres años trabajando). Acabar de, dejar de y volver a + infinitivo dicen que algo acaba de pasar, se interrumpe o se repite."
    }
  ],
  "b1g-subjunctive-relative-clauses": [
    {
      "type": "write",
      "prompt": "Buscas compañera o compañero de piso. Escribe un anuncio para el tablón de la universidad describiendo el piso que tienes y la persona que buscas.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Busco a alguien que + subjuntivo",
        "Relativo con indicativo para lo que existe (un piso que está…)",
        "No quiero a nadie que + subjuntivo",
        "Datos de contacto"
      ],
      "modelAnswer": "Se busca compañera de piso. Tengo un piso que está a diez minutos de la universidad y que tiene una habitación libre con baño propio. Busco a una chica que sea ordenada, que no fume y que respete las horas de estudio. Prefiero a alguien que sepa cocinar un poco, porque los domingos cenamos juntas. No quiero a nadie que haga fiestas entre semana. Precio: 350 euros. Escríbeme a lucia.piso@correo.es.",
      "explanation": "El piso existe y lo conoces: indicativo (un piso que está, que tiene). La persona todavía no existe para ti: subjuntivo (una chica que sea, alguien que sepa, nadie que haga)."
    }
  ],
  "b1r-tema-aficiones": [
    {
      "type": "write",
      "prompt": "Has hecho un curso de cerámica de tres meses. Escribe una reseña para la web de la escuela: tu experiencia, lo que te ha gustado, lo que cambiarías y una recomendación.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Pretérito perfecto para tu experiencia (he aprendido, he hecho…)",
        "Condicional para lo que cambiarías (cambiaría, pondría…)",
        "Una recomendación con te recomiendo que + subjuntivo",
        "Una valoración final"
      ],
      "modelAnswer": "Cinco estrellas. Este año he hecho el curso de cerámica de los jueves y ha sido una experiencia genial. Nunca había tocado el barro y ahora ya he hecho tres tazas y un jarrón. La profesora, Amaia, explica todo con mucha paciencia. Lo único que cambiaría es el horario: yo pondría las clases un poco más tarde. Si vas a apuntarte, te recomiendo que lleves ropa vieja, porque te vas a manchar. ¡Totalmente recomendable!",
      "explanation": "El pretérito perfecto cuenta la experiencia (he hecho, ha sido), el condicional suaviza la crítica (cambiaría, pondría) y te recomiendo que + subjuntivo da el consejo (lleves)."
    }
  ],
  "b1-common-words-outdoors": [
    {
      "type": "write",
      "prompt": "Cuenta una anécdota de una noche de acampada que no salió como esperabas. Usa los tiempos del pasado y vocabulario del campo: el campamento, la tienda de campaña, las piedras, el polvo, los rayos…",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Indefinido para los hechos e imperfecto para describir",
        "Al menos cuatro palabras del campo (el campamento, la piedra, el agujero, los rayos…)",
        "Un pluscuamperfecto (no habíamos mirado…)",
        "Un final con una conclusión o un comentario"
      ],
      "modelAnswer": "El verano pasado fui de acampada con mis primos. Montamos el campamento junto a un río, en un sitio lleno de piedras y de polvo. Por la noche hacía calor y estábamos tranquilos alrededor del fuego. De repente empezó una tormenta enorme y cayeron rayos muy cerca. Entonces descubrimos que la tienda de campaña tenía un agujero y que no habíamos mirado el tiempo antes de salir. Dormimos en el coche, mojados y sin cenar. Ahora siempre miro el pronóstico.",
      "explanation": "Imperfecto para la escena (hacía calor, estábamos), indefinido para los hechos (empezó, cayeron) y pluscuamperfecto para lo anterior (no habíamos mirado). En una tormenta, los rayos son la luz eléctrica del cielo, no los del sol."
    }
  ],
  "b1d-circuito-se-lo": [
    {
      "type": "write",
      "prompt": "Cuenta la historia de un regalo que pasó por muchas manos: quién te lo dio, a quién se lo diste tú y qué pasó al final. Usa dos pronombres juntos en cada paso.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cinco frases con dos pronombres (me lo, se lo…)",
        "Le / les → se delante de lo, la, los, las",
        "Concordancia del pronombre con la cosa",
        "Indefinido para contar la historia"
      ],
      "modelAnswer": "Hace dos años mi tía me regaló un jarrón horrible. Me lo dio en Navidad y yo sonreí. Como no me gustaba, se lo regalé a mi amiga Sara por su cumpleaños. Ella tampoco lo quería, así que se lo dio a su hermano. Su hermano se lo regaló a su novia, que lo llevó a una tienda de segunda mano. ¿Y quién lo compró allí? ¡Mi tía! Esta Navidad me lo ha vuelto a regalar.",
      "explanation": "Primero va la persona y después la cosa: me lo dio. Le y les se convierten en se delante de lo, la, los, las: se lo regalé a Sara, nunca «le lo»."
    }
  ],
  "b1r-dialogue-combined-pronouns": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo entre dos compañeros de piso que se piden cosas prestadas antes de salir: ropa, dinero, el coche… No repitas los sustantivos: usa dos pronombres juntos.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Formato de diálogo",
        "Al menos cinco frases con dos pronombres",
        "Pronombres pegados al mandato al menos una vez (devuélvemela…)",
        "Concordancia con la cosa (la chaqueta → la, los zapatos → los)"
      ],
      "modelAnswer": "—Oye, Clara, ¿me prestas tu chaqueta negra? —Sí, te la presto, pero devuélvemela mañana. —Claro. ¿Y los zapatos rojos? —No, esos no te los dejo: son nuevos. —Vale. Otra cosa: ¿tienes diez euros? —Ya te los di la semana pasada. —Lo sé, te los devuelvo todos el viernes. ¿Y el coche? —El coche se lo he prestado a mi hermano. —Bueno, pues iré en metro. —¡Que lo pases bien!",
      "explanation": "Los pronombres concuerdan con la cosa (la chaqueta → te la presto; los zapatos → te los dejo). En el mandato afirmativo se pegan con tilde (devuélvemela), y le se convierte en se: se lo he prestado."
    }
  ],
  "b1d-patron-pegados-infinitivo": [
    {
      "type": "write",
      "prompt": "Has comprado con tu hermano un regalo sorpresa para el cumpleaños de vuestra madre. Escríbele un mensaje para organizar cuándo y cómo dárselo. Usa pronombres pegados al infinitivo y al gerundio.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Al menos tres infinitivos con dos pronombres pegados (dárselo, enseñártelo…)",
        "Tilde correcta en los infinitivos con dos pronombres",
        "Una frase con gerundio + pronombre (estoy envolviéndolo…)",
        "Un plan con día u hora"
      ],
      "modelAnswer": "¡Hola, Pablo! Ya tengo el collar para mamá. Quiero enseñártelo antes del domingo: ¿puedo llevártelo esta noche? Ahora mismo estoy envolviéndolo con un papel muy bonito. Creo que deberíamos dárselo a la hora del postre, cuando esté toda la familia. Y, por favor, no vayas a contárselo a la tía Marisa: ¡siempre se lo cuenta todo a mamá! ¿Te parece bien?",
      "explanation": "Con infinitivo, los dos pronombres se pegan al final y el verbo lleva tilde: enseñártelo, llevártelo, dárselo, contárselo. Con gerundio pasa lo mismo: envolviéndolo."
    }
  ],
  "b1r-tema-teletrabajo": [
    {
      "type": "write",
      "prompt": "Escribe un texto con argumentos a favor y en contra del teletrabajo, y termina con tu opinión personal.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Conectores (por un lado, además, por otro lado, en mi opinión)",
        "Al menos dos comparaciones (más cómodo que, tan útiles como…)",
        "Una propuesta con condicional (lo ideal sería…, yo trabajaría…)",
        "Una conclusión con no creo que + subjuntivo"
      ],
      "modelAnswer": "¿Teletrabajo u oficina? Por un lado, trabajar desde casa es más cómodo que ir a la oficina: no se pierde tiempo en el transporte y se ahorra dinero. Además, mucha gente se concentra mejor en silencio. Por otro lado, en casa uno se siente más solo y es difícil separar la vida personal del trabajo. Las reuniones por vídeo tampoco son tan útiles como las reuniones en persona. En mi opinión, lo ideal sería un sistema mixto: yo trabajaría tres días en casa y dos en la oficina. No creo que el teletrabajo total sea bueno para todos.",
      "explanation": "Los conectores ordenan los argumentos (por un lado, además, por otro lado). Las comparaciones (más cómodo que, tan útiles como) y el condicional para la propuesta (sería, trabajaría) son típicos de este tipo de texto."
    }
  ],
  "b1d-pares-mi-el-mio": [
    {
      "type": "write",
      "prompt": "Tienes un nuevo amigo por correspondencia en otro país. Escríbele un correo comparando tu vida con la suya: vuestras familias, vuestras casas y vuestros colegios.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cinco pronombres posesivos (la mía, el tuyo, los míos…)",
        "Contraste entre adjetivo y pronombre (tu casa / la nuestra)",
        "Concordancia con la cosa, no con el dueño",
        "Saludo y despedida informales"
      ],
      "modelAnswer": "¡Hola, Marco! Gracias por tu correo y por las fotos. Tu familia es muy grande; la mía es pequeña: solo somos mis padres, mi hermano y yo. Tu casa tiene jardín, pero la nuestra es un piso en el centro de Bilbao. Mi colegio está muy cerca, a cinco minutos andando. ¿El tuyo está lejos? Tus profesores parecen muy simpáticos; los míos son un poco estrictos. Mis aficiones son el fútbol y la música. ¿Cuáles son las tuyas? ¡Escríbeme pronto! Iker",
      "explanation": "Mi, tu y nuestra van delante del sustantivo; la mía, el tuyo y los míos lo sustituyen y concuerdan con la cosa: tu casa → la nuestra, tus profesores → los míos."
    }
  ],
  "b1r-mission-lost-and-found": [
    {
      "type": "write",
      "prompt": "En el aeropuerto, otro pasajero se llevó tu maleta por error y te dejó la suya, que es igual. Escribe un correo formal a la compañía aérea para explicar el problema y describir las dos maletas.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro posesivos (la mía, la suya…)",
        "El de / la de + persona para aclarar el suyo",
        "Indefinido para contar qué pasó",
        "Saludo y despedida formales"
      ],
      "modelAnswer": "Estimados señores: Ayer llegué a Madrid en el vuelo IB 3456 desde Lisboa. Al llegar a casa, vi que la maleta que tenía no era la mía. Otro pasajero se llevó la mía por error y me dejó la suya, que es igual: negra y del mismo tamaño. La mía tiene una cinta roja en el asa; la de ese señor no tiene nada. Dentro de la suya hay una etiqueta con un nombre. Les ruego que me ayuden a recuperar mi maleta. Atentamente, Elena Ruiz",
      "explanation": "Los posesivos evitan repetir maleta: la mía, la suya. Como la suya puede ser ambiguo, se aclara con la de + persona: la de ese señor."
    }
  ],
  "b1d-cuento-mudanza": [
    {
      "type": "write",
      "prompt": "Hoy has vaciado el piso que compartías con dos amigos. Escribe una entrada de diario: cuenta cómo habéis repartido las cosas y de quién era cada una.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "¿De quién era…? y respuestas con posesivos",
        "Al menos cuatro posesivos (nuestro, mía, los míos, suya…)",
        "Pretérito perfecto para lo que ha pasado hoy",
        "Al menos una aclaración con el de / los de + persona"
      ],
      "modelAnswer": "Querido diario: Hoy hemos vaciado el piso de la calle Luna. Ha sido más difícil de lo que pensaba. ¿De quién era el sofá? Lo compramos entre los tres, así que era nuestro, y al final se lo ha llevado Marcos. Las sartenes eran de Irene, pero la cafetera era mía. Hemos discutido por los libros: los de Marcos y los míos estaban mezclados. La lámpara azul era suya, de Irene, y se la ha quedado. ¡Qué pena dejar esta casa!",
      "explanation": "Después de ser, el posesivo va sin artículo para decir de quién es algo (era nuestro, era mía); con artículo sustituye al sustantivo (los míos). Los de Marcos aclara de quién son sin repetir libros."
    }
  ],
  "b1r-tema-admitir-errores": [
    {
      "type": "write",
      "prompt": "En el trabajo has enviado por error un informe con datos equivocados a un cliente. Escribe un correo a tu jefa: admite el error, explica qué ha pasado y propón una solución.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Pretérito perfecto para lo que ha pasado (he enviado, me he equivocado…)",
        "Pronombres combinados (se lo he explicado, se lo mando…)",
        "Una disculpa con siento que + subjuntivo",
        "Una propuesta de solución"
      ],
      "modelAnswer": "Hola, Begoña: Te escribo para contarte un error. Esta mañana he enviado al cliente de Sevilla el informe con los datos del año pasado. Ha sido culpa mía: tenía dos archivos abiertos y me he equivocado. Ya he llamado al cliente y se lo he explicado todo. Esta tarde preparo el informe correcto y se lo mando antes de las seis. Siento mucho que tengas que dar explicaciones por mi culpa. No volverá a pasar. Un saludo, Rubén",
      "explanation": "El pretérito perfecto cuenta lo que ha pasado hoy (he enviado, he llamado); los pronombres combinados evitan repetir (se lo he explicado, se lo mando) y siento que + subjuntivo expresa la disculpa (tengas)."
    }
  ],
  "b1d-cadena-tu-a-vosotros": [
    {
      "type": "write",
      "prompt": "Tienes tres hijos y hoy vuelves tarde del trabajo. Escríbeles una nota para la nevera con lo que tienen que hacer por la tarde. Usa mandatos afirmativos de vosotros.",
      "minWords": 40,
      "maxWords": 80,
      "rubric": [
        "Al menos cinco mandatos afirmativos de vosotros (haced, poned, sacad…)",
        "Saludo y despedida"
      ],
      "modelAnswer": "¡Hola, chicos! Hoy llego a las nueve. Al volver del colegio, merendad algo sano: hay fruta en la nevera. Haced los deberes antes de jugar y apagad la tele a las siete. Sacad al perro a las seis y compartid el ordenador. Poned la mesa a las ocho y media. Antes de cenar, recoged vuestra habitación, por favor. ¡Os quiero mucho! Mamá",
      "explanation": "El afirmativo de vosotros cambia la -r del infinitivo por -d (haced, sacad, poned, apagad, recoged). El negativo y los reflexivos (no veáis, duchaos) los verás en la parte 2 de los mandatos de vosotros."
    }
  ],
  "b1r-tema-estres": [
    {
      "type": "write",
      "prompt": "Eres profesor y tus alumnos tienen exámenes finales la semana que viene. Escribe un breve discurso para la clase con consejos para no estresarse. Usa mandatos de vosotros.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cuatro mandatos afirmativos de vosotros (organizad, dormid…)",
        "Al menos dos consejos con «es mejor que / os recomiendo que» + subjuntivo (os recomiendo que durmáis…)",
        "Tono de ánimo"
      ],
      "modelAnswer": "Chicos, sé que estáis nerviosos por los exámenes, así que escuchadme un momento. Organizad bien el tiempo y haced una pausa cada hora. Os recomiendo que no estudiéis toda la noche y que durmáis ocho horas. Comed bien y salid a pasear un rato cada día. Es mejor que no os comparéis con los demás, porque cada uno tiene su ritmo. Y el día del examen, respirad hondo y leed bien las preguntas. Habéis trabajado mucho este año. ¡Confío en vosotros!",
      "explanation": "Mandatos afirmativos de vosotros: organizad, haced, comed, leed. Para aconsejar sin mandato, «os recomiendo que / es mejor que» + subjuntivo: que no estudiéis, que durmáis, que no os comparéis."
    }
  ],
  "b1d-rep-mezcla-correo-casero": [
    {
      "type": "write",
      "prompt": "La calefacción de tu piso no funciona desde hace una semana. Escribe un correo formal al casero: explica el problema, lo que ya has hecho y lo que necesitas que haga.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Peticiones con condicional (¿podría…?, le agradecería…)",
        "Necesito que + subjuntivo",
        "Pretérito perfecto para lo que ya has hecho (ya he llamado…)",
        "Pronombres (se la envío…) y usted en todo el correo"
      ],
      "modelAnswer": "Estimado señor Martín: Le escribo porque la calefacción del piso no funciona desde el lunes pasado. Ya he revisado la caldera y he llamado al servicio técnico, pero me han dicho que la reparación la tiene que pedir el propietario. Como hace mucho frío, necesito que se ponga en contacto con ellos lo antes posible. ¿Podría llamarlos hoy mismo? Si necesita la factura de la última revisión, se la envío por correo. Le agradecería una respuesta rápida. Un saludo cordial, Ana Torres",
      "explanation": "En un correo formal se pide con el condicional (¿podría…?, le agradecería) y con necesito que + subjuntivo (se ponga). El pretérito perfecto cuenta lo que ya has hecho, y se la envío evita repetir la factura."
    }
  ],
  "b1r-tema-desconexion-digital": [
    {
      "type": "write",
      "prompt": "Llevas una semana sin móvil por un reto de desconexión digital. Escribe una entrada de diario: qué ha sido difícil, qué has descubierto y qué esperas del resto del mes.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Pretérito perfecto para la semana (he leído, he dormido…)",
        "Emociones con subjuntivo (me molesta que, me sorprende que…)",
        "Ojalá o espero que + subjuntivo",
        "Una frase con si + presente"
      ],
      "modelAnswer": "Querido diario: Hoy hace una semana que empecé el reto sin móvil. Los primeros días han sido horribles: he buscado el móvil en el bolsillo cien veces. Me molesta que mis amigos no me llamen al fijo. Pero también he descubierto cosas buenas: he leído dos libros y he dormido mejor que nunca. Me sorprende que el día parezca tan largo. Si sigo así, voy a terminar el mes sin problemas. Ojalá no vuelva a usarlo tanto cuando termine el reto.",
      "explanation": "El pretérito perfecto resume la semana (han sido, he leído) y las emociones sobre otros llevan subjuntivo (me molesta que no me llamen, me sorprende que parezca). Si + presente expresa una condición real."
    }
  ],
  "b1r-tema-voluntariado": [
    {
      "type": "write",
      "prompt": "Has hecho un año de voluntariado en un comedor social. La organización te pide un texto para su blog: cuenta tu experiencia, qué has aprendido y anima a otras personas a participar.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Pretérito perfecto para la experiencia (he conocido, he aprendido…)",
        "Al menos una oración de relativo (la gente que…, lo que más…)",
        "Ánimos con mandatos o os recomiendo que + subjuntivo",
        "Un título"
      ],
      "modelAnswer": "Un año en el comedor. Hace un año empecé a ayudar en el comedor social de mi barrio los sábados. En este tiempo he servido cientos de comidas y he conocido a personas increíbles. Lo que más me ha sorprendido es la generosidad de la gente que menos tiene. También he aprendido a escuchar sin juzgar. Al principio tenía miedo de no saber qué decir, pero los otros voluntarios me ayudaron mucho. Si tenéis unas horas libres, venid a conocernos. Os recomiendo que lo probéis: os cambiará la vida.",
      "explanation": "El pretérito perfecto resume la experiencia hasta hoy (he servido, he aprendido). Lo que y la gente que son relativos, y para animar se usan mandatos (venid) y os recomiendo que + subjuntivo (lo probéis)."
    }
  ],
  "b1s-phone-calls": [
    {
      "type": "write",
      "prompt": "Llamas a la consulta de tu dentista para cambiar una cita, pero el dentista no puede ponerse. Escribe el diálogo con la recepcionista: preséntate, explica qué quieres y deja un mensaje.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Fórmulas de teléfono (¿dígame?, ¿de parte de quién?, no se retire…)",
        "Peticiones con condicional (¿podría…?, querría…)",
        "Un mensaje para otra persona (¿le podría decir que…?)",
        "Usted en toda la conversación"
      ],
      "modelAnswer": "—Clínica Dental Sonrisa, ¿dígame? —Buenos días. ¿Podría hablar con el doctor Gómez? —Lo siento, ahora mismo está con un paciente. ¿De parte de quién? —De Laura Sánchez. Tengo cita el jueves a las diez, pero querría cambiarla. —Un momento, no se retire… Tengo un hueco el viernes a las doce. —Perfecto. ¿Y le podría decir al doctor que me sigue doliendo la muela? —Claro, se lo digo. —Muchas gracias. Adiós.",
      "explanation": "Al teléfono hay fórmulas fijas: ¿dígame?, ¿de parte de quién?, no se retire. El condicional (podría, querría) suaviza las peticiones, y ¿le podría decir que…? sirve para dejar un mensaje."
    }
  ],
  "b1s-home-repairs": [
    {
      "type": "write",
      "prompt": "Esta mañana se ha estropeado la lavadora y hay agua en el suelo de la cocina. Escribe un mensaje a tu casera para explicarle la avería y pedirle que envíe a un técnico.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Pretérito perfecto para la avería (se ha estropeado, ha salido agua…)",
        "Vocabulario de averías (la fuga, el grifo, no funciona…)",
        "Una petición educada con condicional (¿podría…?)",
        "Usted y un tono cordial"
      ],
      "modelAnswer": "Buenos días, Rosa. Siento molestarla tan temprano. Esta mañana se ha estropeado la lavadora: hace un ruido muy raro y ha salido mucha agua por debajo. Creo que hay una fuga en el tubo. He cerrado el grifo del agua y he secado el suelo, pero no me atrevo a usarla otra vez. ¿Podría enviar a un técnico esta semana? Estoy en casa todas las tardes a partir de las cuatro. Muchas gracias. Un saludo, Daniel",
      "explanation": "El pretérito perfecto cuenta lo que acaba de pasar hoy (se ha estropeado, ha salido, he cerrado). Con la casera se usa usted y el condicional para pedir: ¿podría enviar a un técnico?"
    }
  ],
  "b1s-job-interview": [
    {
      "type": "write",
      "prompt": "Has visto una oferta de trabajo de recepcionista en un hotel. Escribe una carta de presentación: tu experiencia, tus puntos fuertes y por qué quieres el puesto.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Saludo y despedida formales",
        "Llevar + tiempo + gerundio o pretérito perfecto para la experiencia (llevo tres años trabajando…)",
        "Puntos fuertes (se me da bien…, soy una persona que…)",
        "Una frase con condicional (me gustaría…)"
      ],
      "modelAnswer": "Estimada señora: Le escribo para presentar mi candidatura al puesto de recepcionista que han publicado en su web. Llevo tres años trabajando en la recepción de un hostal en Málaga, donde he atendido a clientes de todo el mundo. Hablo inglés y francés, y se me da bien resolver problemas con calma. Soy una persona que trabaja bien en equipo y no me importa trabajar por la noche. Me gustaría formar parte de su hotel porque admiro su trato al cliente. Quedo a su disposición para una entrevista. Atentamente, Sofía Marín",
      "explanation": "Llevar + tiempo + gerundio (llevo tres años trabajando) y el pretérito perfecto (he atendido) presentan la experiencia; el condicional (me gustaría) y el usted mantienen el tono formal."
    }
  ],
  "b1r-word-web-emotions": [
    {
      "type": "write",
      "prompt": "Escribe una entrada de diario sobre un día con muchas emociones: algo que te alegró, algo que te enfadó y algo que te dio miedo. Usa vocabulario variado de emociones.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos cinco palabras de emociones (agobiada, orgullosa, me puse nerviosa…)",
        "Una reacción con subjuntivo (me da rabia que…)",
        "Indefinido e imperfecto para contar el día",
        "Un contraste (al principio…, pero luego…)"
      ],
      "modelAnswer": "Querido diario: ¡Qué día! Por la mañana estaba agobiada porque tenía una presentación muy importante. Al principio me puse nerviosa, pero luego hablé con seguridad y mi jefe me felicitó. Me sentí muy orgullosa. Por la tarde me enfadé con mi hermano, porque otra vez llegó tarde a recogerme. Me da mucha rabia que nunca sea puntual. Y por la noche pasé miedo: oí un ruido en la cocina, ¡pero era el gato! Ahora estoy tranquila y contenta.",
      "explanation": "Para hablar de emociones hay adjetivos (agobiada, orgullosa, tranquila) y verbos (me puse nerviosa, me enfadé, pasé miedo). Me da rabia que + subjuntivo reacciona a lo que hace otra persona: nunca sea puntual."
    }
  ],
  "b1r-tema-limpieza-playa": [
    {
      "type": "write",
      "prompt": "Después de una tormenta, la playa de tu pueblo está llena de basura. Escribe un llamamiento para el tablón del ayuntamiento invitando a los vecinos a una limpieza colectiva.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Al menos tres construcciones con se (se necesitan voluntarios, se darán…)",
        "Mandatos de ustedes o de nosotros (traigan, vengan, salvemos…)",
        "Un deseo con ojalá + subjuntivo",
        "Datos prácticos: día, hora y lugar"
      ],
      "modelAnswer": "¡Salvemos nuestra playa! La tormenta del martes ha dejado la playa llena de plásticos, ramas y basura. Por eso se organiza una limpieza colectiva el sábado 14 a las diez de la mañana. Nos vemos en el paseo marítimo. Se necesitan voluntarios de todas las edades. Se darán guantes y bolsas, pero traigan agua y protección para el sol. Los residuos se llevarán al punto limpio. Vengan con su familia y sus amigos: entre todos lo conseguiremos. ¡Ojalá seamos muchos!",
      "explanation": "La pasiva con se presenta la información sin decir quién la organiza (se organiza, se necesitan, se darán). Los mandatos de ustedes (traigan, vengan) y de nosotros (salvemos) animan a participar, y ojalá lleva subjuntivo: seamos."
    }
  ],
  "b1r-word-web-money": [
    {
      "type": "write",
      "prompt": "Tu hermano pequeño ha empezado a trabajar y gasta todo su sueldo. Escríbele un correo con consejos para ahorrar, usando el condicional y el subjuntivo.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Vocabulario del dinero (ahorrar, el sueldo, la cuenta, gastar, el préstamo…)",
        "Consejos con condicional (yo que tú, deberías…)",
        "Es importante que / te recomiendo que + subjuntivo",
        "Saludo y despedida informales"
      ],
      "modelAnswer": "¡Hola, Guille! Mamá me ha dicho que ya no te queda dinero a mitad de mes. Te doy algunos consejos de hermana mayor. Yo que tú, abriría una cuenta de ahorro y pondría allí cien euros cada mes, justo al cobrar el sueldo. También deberías apuntar todo lo que gastas durante un mes. Es importante que no pagues todo con tarjeta, porque así no ves el dinero. Y te recomiendo que nunca pidas un préstamo para un capricho. ¡Ánimo! Un beso, Marta",
      "explanation": "Yo que tú y deberías aconsejan con el condicional (abriría, pondría, deberías apuntar). Es importante que y te recomiendo que llevan subjuntivo porque el consejo es para otra persona: pagues, pidas."
    }
  ],
  "b1r-word-web-education": [
    {
      "type": "write",
      "prompt": "En un foro de estudiantes, alguien pregunta cómo aprobar los exámenes finales sin estrés. Escribe tu respuesta con tu experiencia y tus consejos.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Vocabulario de la educación (la asignatura, los apuntes, la nota, aprobar, suspender…)",
        "Si + presente para condiciones",
        "Consejos con mandatos o con te aconsejo que + subjuntivo",
        "Una experiencia personal en pasado"
      ],
      "modelAnswer": "¡Hola! El año pasado suspendí dos asignaturas porque lo dejé todo para el final. Este año he cambiado de método y he sacado buenas notas. Mi consejo: haz un calendario y repasa los apuntes un poco cada día. Si tienes dudas, pregunta al profesor antes del examen, no después. Te aconsejo que hagas exámenes de otros años para practicar. Y si suspendes alguna, no te agobies: siempre hay una segunda convocatoria. ¡Mucha suerte!",
      "explanation": "Si + presente plantea situaciones reales (si tienes dudas, si suspendes), y los mandatos (haz, repasa, no te agobies) o te aconsejo que + subjuntivo (hagas) dan los consejos."
    }
  ],
  "b1r-word-web-city": [
    {
      "type": "write",
      "prompt": "Una revista de viajes te pide un artículo breve titulado «Mi ciudad en un día». Describe qué puede ver un visitante, usando relativos y vocabulario de la ciudad.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Al menos cuatro oraciones de relativo (que, donde, en la que, lo que…)",
        "Vocabulario de la ciudad (el casco antiguo, la catedral, el puente…)",
        "Recomendaciones (empieza…, te recomiendo que…)",
        "Un título y un orden (por la mañana, después, por la tarde…)"
      ],
      "modelAnswer": "Salamanca en un día. Empieza por la mañana en la Plaza Mayor, que es una de las más bonitas de España. Después pasea por el casco antiguo hasta la universidad, donde los turistas buscan una pequeña rana en la fachada. Para comer, te recomiendo que vayas a una calle que está detrás de la catedral, en la que hay bares baratos. Por la tarde, cruza el puente romano, desde el que se ve toda la ciudad. Lo que nadie debe perderse es la plaza iluminada por la noche.",
      "explanation": "Los relativos describen los lugares sin repetirlos: donde los turistas buscan, en la que hay bares, desde el que se ve. Lo que nadie debe perderse destaca la idea más importante."
    }
  ],
  "b1r-word-web-business": [
    {
      "type": "write",
      "prompt": "Trabajas en una empresa de muebles. Escribe un correo formal a un cliente para informarle de un retraso en su pedido y de lo que se va a hacer para solucionarlo.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Vocabulario de empresa (el pedido, la factura, el proveedor, la entrega…)",
        "Construcciones con se (se ha retrasado, se le aplicará…)",
        "Pronombres combinados (se las enviamos…)",
        "Disculpa y despedida formales"
      ],
      "modelAnswer": "Estimado señor Pérez: Le escribimos en relación con su pedido número 2875. Lamentamos informarle de que la entrega de la mesa de roble se ha retrasado por un problema con nuestro proveedor. La nueva fecha de entrega es el 20 de mayo. Como compensación, se le aplicará un descuento del diez por ciento en la factura. Las sillas ya están listas: si lo desea, se las enviamos esta semana. Le pedimos disculpas por las molestias. Atentamente, el departamento de atención al cliente",
      "explanation": "En un correo de empresa, el se presenta los hechos de forma impersonal (se ha retrasado, se le aplicará), y los pronombres combinados evitan repetir: se las enviamos (las sillas, a usted)."
    }
  ],
  "b1-comprehensive-review-1": [
    {
      "type": "write",
      "prompt": "En un foro de padres se discute si los niños de diez años deben tener móvil. Escribe tu opinión con argumentos, dudas y deseos.",
      "minWords": 60,
      "maxWords": 100,
      "rubric": [
        "Creo que + indicativo y no creo que / dudo que + subjuntivo",
        "Es importante / es mejor que + subjuntivo",
        "Ojalá + subjuntivo",
        "Conectores (por un lado, sin embargo, en conclusión)"
      ],
      "modelAnswer": "En mi opinión, un niño de diez años no necesita un móvil propio. Por un lado, creo que es útil para hablar con los padres. Sin embargo, no creo que un niño sepa controlar el tiempo que pasa delante de la pantalla, y dudo que las redes sociales sean seguras a esa edad. Si un niño necesita llamar, es mejor que tenga un teléfono sencillo. Además, es importante que los padres hablen con sus hijos sobre internet. En conclusión, ojalá las familias esperen un poco más y los niños jueguen más en la calle.",
      "explanation": "Creo que afirma y lleva indicativo (es útil); no creo que y dudo que expresan duda y llevan subjuntivo (sepa, sean). Es mejor que, es importante que y ojalá también piden subjuntivo: tenga, hablen, esperen."
    }
  ],
  "b1-comprehensive-review-3": [
    {
      "type": "write",
      "prompt": "Escribe una noticia curiosa para la web de tu barrio: alguien encontró algo que otra persona había perdido hace muchos años. Usa el pluscuamperfecto, oraciones de relativo y el se.",
      "minWords": 50,
      "maxWords": 90,
      "rubric": [
        "Pluscuamperfecto para lo anterior (lo había perdido…)",
        "Al menos dos oraciones de relativo",
        "Al menos dos construcciones con se (se encontró, se cree que…)",
        "Título y estilo de noticia"
      ],
      "modelAnswer": "Un anillo vuelve a casa cuarenta años después. El lunes se encontró un anillo de oro en el jardín de una casa de la calle Olmo. Lo descubrió Pablo, un niño que estaba jugando con su perro. Dentro del anillo había un nombre: Carmen. Los vecinos, que conocen a todo el barrio, encontraron enseguida a la dueña. Carmen, que ahora tiene ochenta años, lo había perdido en 1984 y nunca lo había buscado allí. Se cree que el perro de entonces lo había enterrado.",
      "explanation": "El pluscuamperfecto cuenta lo que pasó antes de la noticia (lo había perdido, lo había enterrado). Los relativos añaden información sobre las personas (un niño que estaba jugando), y el se cuenta los hechos sin decir quién (se encontró, se cree que)."
    }
  ]
};
