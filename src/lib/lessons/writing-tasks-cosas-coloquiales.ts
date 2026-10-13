// Synced from cheneygross-afk/lengo:src/lib/lessons/writing-tasks-cosas-coloquiales.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const COSAS_COLOQUIALES_WRITING_TASKS: UnitWriting = {
  "festivals-traditions-hispanic-world-2": [
    {
      "type": "write",
      "prompt": "Escribe una entrada de tu diario sobre tu primera Nochevieja con una familia española: la cena, las doce uvas y lo que pasó después de medianoche. Usa al menos cuatro expresiones coloquiales de la lección.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cuatro expresiones festivas (echar la casa por la ventana, ponerse las botas, las doce uvas, armar la fiesta…)",
        "Pretérito indefinido para la secuencia de la noche e imperfecto para el ambiente",
        "Una reacción personal o una reflexión sobre el sentido del ritual",
        "Registro íntimo y espontáneo propio de un diario"
      ],
      "modelAnswer": "1 de enero. Todavía no me lo creo: anoche los Ortega echaron la casa por la ventana. Cenamos marisco, cordero y turrón, y yo, claro, me puse las botas. A las doce menos cinco todo el mundo estaba pendiente de la tele, con las doce uvas preparadas. Yo me atraganté con la sexta y casi pierdo el ritmo de las campanadas, pero nadie se rio de mí; al contrario, me aplaudieron. Después llegaron los primos y armaron la fiesta hasta las cinco. Lo que más me impresionó fue la sensación de estar de fiesta en todo el barrio a la vez, como si el país entero se pusiera de acuerdo para empezar el año juntos.",
      "explanation": "Echar la casa por la ventana (gastar sin medida), ponerse las botas (comer en abundancia) y armar la fiesta (animarla) dan el tono coloquial; el indefinido narra la noche y el imperfecto describe el ambiente (estaba pendiente)."
    }
  ],
  "ccr-festival-mission-explain": [
    {
      "type": "write",
      "prompt": "Un amigo extranjero te escribe: «¿El Día de Muertos no es básicamente el Halloween mexicano?». Contéstale con un correo informal en el que le expliques el sentido de la fiesta sin caer en el tópico.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Rebatir el tópico con una estructura de contraste (no se trata de…, sino de…)",
        "Vocabulario específico (la ofrenda, el pan de muerto, el cempasúchil, las calaveras literarias)",
        "Explicar la función del humor ante la muerte",
        "Tono cercano de correo entre amigos"
      ],
      "modelAnswer": "¡Qué va, Tom! Entiendo la confusión por las calaveras y los disfraces, pero no se trata de dar miedo, sino de recordar a los que se fueron. Cada familia pone una ofrenda con fotos, flores de cempasúchil, pan de muerto y la comida favorita del difunto, porque se cree que esa noche el alma vuelve a casa. Por eso la gente va al panteón, vela a sus muertos y les lleva música. Y lo de las calaveras literarias te va a encantar: son versos en broma que imaginan la muerte de alguien que está vivo. No es falta de respeto; es una forma de quitarle el miedo a la muerte. Ven en noviembre y lo ves con tus propios ojos. Un abrazo, Lupita",
      "explanation": "No se trata de…, sino de… desmonta el tópico; la ofrenda, el pan de muerto y velar a alguien muestran el sentido del ritual, y las calaveras literarias ilustran el humor como forma culturalmente aceptada de enfrentarse a la muerte."
    }
  ],
  "food-culture-sobremesa-2": [
    {
      "type": "write",
      "prompt": "Una amiga extranjera va a comer el domingo con la familia de su novio, en España. Escríbele una pequeña guía práctica con consejos para no meter la pata en la mesa ni en la sobremesa.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Consejos con imperativo y estructuras de recomendación (te aconsejo que…, ni se te ocurra…)",
        "Al menos cuatro expresiones de la mesa (repetir, estoy que reviento, hacer sobremesa, llevarse las sobras…)",
        "Al menos una norma tácita explicada con su motivo",
        "Registro cercano, con algún toque de humor"
      ],
      "modelAnswer": "Guía de supervivencia para el domingo: 1. Llega con algo: un postre o una botella de vino. 2. Cuando te sirvan, di «¡Que aproveche!» y no empieces hasta que lo haga la anfitriona. 3. Si te ofrecen repetir, acepta al menos una vez: rechazarlo todo se interpreta como que no te ha gustado. 4. Cuando ya no puedas más, di «Estoy que reviento, de verdad», con una sonrisa. 5. Ni se te ocurra levantarte de la mesa al terminar el café: ahí empieza la sobremesa, que puede alargarse hasta la merienda. 6. Si al final te quieren dar un táper con las sobras, llévatelo; es un gesto de cariño. ¡Y suerte!",
      "explanation": "Los imperativos (llega, acepta, llévatelo) y ni se te ocurra + infinitivo dan consejos directos; repetir, estoy que reviento, la sobremesa y llevarse las sobras recogen las normas tácitas de la mesa, explicadas con su motivo (se interpreta como…)."
    }
  ],
  "soccer-popular-passion-2": [
    {
      "type": "write",
      "prompt": "Escribe un correo a un compañero de trabajo que no pudo ir a la reunión con un cliente difícil. Cuéntale cómo fue usando al menos cuatro metáforas futbolísticas de la lección.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cuatro metáforas futbolísticas (remontar, echar balones fuera, jugarse todo a una carta, estar en fuera de juego, pasar la pelota…)",
        "Narración en pasado con conectores (al principio, entonces, al final)",
        "Una valoración del resultado",
        "Registro informal de oficina"
      ],
      "modelAnswer": "Hola, Marcos: Te cuento, porque fue un partido de infarto. Al principio el cliente nos metió un gol: dijo que el presupuesto le parecía carísimo y que tenía otra oferta. Luis intentó echar balones fuera hablando de plazos, pero el cliente no se lo tragó. Entonces Ana se jugó todo a una carta y propuso un mes de prueba gratis. El jefe, que estaba completamente en fuera de juego, intentó pasarme la pelota a mí con las cifras, pero por suerte las tenía preparadas. Al final conseguimos remontar y firmaron. El lunes te lo explico con calma. Un abrazo, Irene",
      "explanation": "Las metáforas trasladan el fútbol a la oficina: meter un gol (engañar o sorprender), echar balones fuera (eludir), jugarse todo a una carta (arriesgarlo todo), estar en fuera de juego (desorientado), pasar la pelota (delegar) y remontar (darle la vuelta al resultado)."
    }
  ],
  "music-dance-regional-identity-1": [
    {
      "type": "write",
      "prompt": "Cuenta en una anécdota tu primera clase de tango en Buenos Aires: el lugar, la música, tu pareja de baile y lo que te salió mal. Usa el vocabulario de la lección.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Vocabulario del tango (el compás, el bandoneón, bailar pegado, tanguear…)",
        "Al menos una expresión coloquial sobre el baile (no tener oído, tener sabor…)",
        "Contraste entre indefinido e imperfecto en la narración",
        "Un final con humor o con una conclusión personal"
      ],
      "modelAnswer": "Mi primera clase de tango fue un desastre glorioso. Era un salón antiguo de San Telmo, con un bandoneón que sonaba tan triste que daban ganas de llorar. Me tocó bailar con Mirta, una señora de ochenta años que llevaba tangueando desde los quince. Yo no tengo oído, así que perdí el compás a los diez segundos y le pisé el pie tres veces. Ella, muy digna, me susurró: «Querido, el tango se baila pegado, no a la defensiva». Al final de la noche ya me atrevía a abrazarla de verdad. No aprendí a bailar, pero entendí por qué dicen que el tango es un pensamiento triste que se baila.",
      "explanation": "El imperfecto describe el escenario (era, sonaba, llevaba tangueando) y el indefinido los hechos (me tocó, perdí, le pisé); no tener oído, perder el compás y bailar pegado son el léxico coloquial del baile."
    }
  ],
  "music-dance-regional-identity-2": [
    {
      "type": "write",
      "prompt": "Escribe una reseña para un blog de ocio sobre una noche de salsa y reguetón en una discoteca latina de tu ciudad: el ambiente, la música, el DJ y el público. Da tu valoración final.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Léxico de la fiesta y el baile (prender la fiesta / animar la fiesta, soltarse el pelo, la pista de baile, el perreo…)",
        "Valoraciones matizadas (lo mejor fue…, aunque…, eso sí…)",
        "Descripción del ambiente y del público",
        "Una recomendación final con puntuación o veredicto"
      ],
      "modelAnswer": "Noche latina en La Habanera: cuatro estrellas de cinco. Llegamos a las doce y la pista de baile estaba medio vacía, pero en cuanto el DJ puso la primera bachata, el local se llenó. Lo mejor fue el público: había desde parejas de sesenta años que bailaban salsa con un sabor impresionante hasta grupos de universitarios entregados al perreo. A la una el DJ prendió la fiesta con los temas que suenan en todos lados este verano, y hasta los más tímidos se soltaron el pelo. Eso sí, el sonido saturaba un poco y las copas eran carísimas. Aun así, si queréis bailar sin complejos, es el sitio.",
      "explanation": "Prender la fiesta (en España, animar la fiesta), soltarse el pelo y tener sabor describen el ambiente; lo mejor fue, eso sí y aun así matizan la valoración, como en cualquier reseña."
    }
  ],
  "superstitions-folk-beliefs-2": [
    {
      "type": "write",
      "prompt": "Escribe un artículo de opinión breve para la revista de tu academia con el título «Yo no creo en las supersticiones, pero…». Usa al menos cinco expresiones de la lección.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Al menos cinco expresiones (tocar madera, por si las moscas, cruzar los dedos, traer mala suerte, ser gafe, estar en racha…)",
        "Una tesis clara y algún ejemplo personal",
        "Conectores argumentativos (sin embargo, al fin y al cabo, en el fondo)",
        "Un cierre irónico o reflexivo"
      ],
      "modelAnswer": "Yo no creo en las supersticiones, pero… Lo confieso: soy racional, pero cuando alguien me dice que todo me va bien, toco madera por si las moscas. Nunca he pensado que un gato negro traiga mala suerte; sin embargo, si se me cruza uno un martes trece, cambio de acera sin pensarlo. Y en mi oficina hay un compañero al que todos consideramos un poco gafe: cuando él está, la impresora se estropea. En el fondo, estas costumbres no tienen que ver con la lógica, sino con la sensación de control. Cruzar los dedos antes de un examen no cambia la nota, pero calma los nervios. Al fin y al cabo, ¿qué perdemos?",
      "explanation": "Tocar madera, por si las moscas, ser gafe y cruzar los dedos muestran el «creer sin creer del todo»; sin embargo, en el fondo y al fin y al cabo organizan el argumento hacia un cierre irónico."
    }
  ],
  "piropos-cortesia-trato-social-1": [
    {
      "type": "write",
      "prompt": "La madre de tu pareja, a la que todavía no conoces, os ha invitado a comer el domingo. Escríbele un mensaje para darle las gracias, decidir cómo tratarla y ofrecerte a llevar algo.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "Una forma de trato coherente (usted) y la pregunta sobre el tuteo",
        "Fórmulas de cortesía para agradecer y ofrecer ayuda (¿puedo traer algo?, se lo agradezco…)",
        "Un cumplido sincero y no exagerado",
        "Registro respetuoso pero cálido"
      ],
      "modelAnswer": "Buenas tardes, Carmen: Soy Daniel, el novio de Laura. Muchísimas gracias por la invitación del domingo; Laura me ha hablado tanto de usted y de su cocina que tengo muchas ganas de conocerla. Me encantaría colaborar con algo: ¿puedo traer el postre o una botella de vino? Dígame lo que prefiera, de verdad que no es ninguna molestia. Ah, y no sé si prefiere que le hable de usted o que nos tuteemos; usted manda. Un saludo muy cordial y hasta el domingo, Daniel",
      "explanation": "Empezar con usted y preguntar por el tuteo (¿prefiere que le hable de usted?) es la opción segura con alguien mayor; ¿puedo traer algo? y no es ninguna molestia son las fórmulas típicas del buen invitado."
    }
  ],
  "piropos-cortesia-trato-social-2": [
    {
      "type": "write",
      "prompt": "Escribe un diálogo en el que un invitado y su anfitriona se despiden al final de una cena: hay cumplidos, respuestas que restan importancia, un favor y una despedida que no termina nunca.",
      "minWords": 60,
      "maxWords": 130,
      "rubric": [
        "El ping-pong del cumplido: elogio y respuesta que le resta importancia",
        "Una petición de favor suavizada (no sé si podrías…, si no es mucha molestia…)",
        "La despedida en fases (bueno, ya me voy yendo…, ¿ya te vas?)",
        "Turnos breves y naturales"
      ],
      "modelAnswer": "—Bueno, ya me voy yendo, que mañana madrugo. —¿Ya te vas? ¡Si es prontísimo! —De verdad, Elena, la paella estaba buenísima. —Ay, qué va, si es una receta facilísima. Me salió un poco seca. —¿Seca? Me he puesto las botas. Oye, no sé si podrías pasarme la receta, si no es mucha molestia. —¡Claro! Te la mando mañana. —Te lo agradecería muchísimo. Bueno, ahora sí que me voy. —Espera, que te doy un táper con lo que ha sobrado. —Que no, que no hace falta… —Que sí, hombre. Y cualquier cosa me avisas, ¿eh? —Gracias por todo. ¡Un beso!",
      "explanation": "Qué va, si es facilísima resta importancia al cumplido; no sé si podrías y si no es mucha molestia suavizan la petición; ya me voy yendo, ¿ya te vas? y cualquier cosa me avisas marcan las fases de una despedida larga."
    }
  ]
};
