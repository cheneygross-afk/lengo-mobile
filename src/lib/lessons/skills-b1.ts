// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { dict, lc, spk, wr } from "./skills-authoring";

// B1 listening, speaking and writing practice, appended to the named
// lessons' final reviews by withSkills() (skills.ts). Instructions in
// Spanish. The "Habla de ti" lessons get record-and-compare shadowing;
// listening questions use short dialogues and announcements and test
// comprehension, not word-matching.
export const B1_SKILLS: Record<string, Exercise[]> = {
  "b1d-habla-de-ti-alguna-vez": [
    spk("¿Alguna vez has comido pulpo? Sí, varias veces.", "Une has y comido sin pausa: «has-co-MI-do». La voz sube al final de la pregunta.", "«¿Alguna vez has comido pulpo?» pregunta por experiencias: pretérito perfecto."),
    spk("Nunca he estado en Asia.", "Sinalefa: «he estado» suena casi «hes-TA-do», y «en Asia» se une: «e-NA-sia».", "Nunca + pretérito perfecto para una experiencia que no has tenido."),
  ],
  "b1d-habla-de-ti-reacciones": [
    spk("¡Qué bien que tengas vacaciones!", "Exclamación: empieza alto y baja al final. La v de vacaciones es una b suave.", "¡Qué bien que + subjuntivo! para alegrarse por otra persona."),
    spk("Me alegro mucho de que te hayan dado el trabajo.", "En «alegro», la r va tras g: un solo toque, como en «tres». «Hayan» se dice con la y de «yo».", "Me alegro de que + subjuntivo (aquí, perfecto de subjuntivo: hayan dado)."),
  ],
  "b1d-habla-de-ti-ojala": [
    spk("Ojalá encuentre un piso cerca del trabajo.", "Ojalá lleva el acento en la última: o-ja-LÁ. Une «ojalá encuentre»: sin pausa.", "Ojalá + presente de subjuntivo para un deseo posible."),
    spk("Ojalá que mi familia esté bien este año.", "Esté, con acento: es-TÉ. Sin acento sería «este» (demostrativo), como en «este año».", "Ojalá (que) + subjuntivo: esté, no está."),
  ],
  "b1d-habla-de-ti-consejos": [
    spk("No te pierdas el mercado del domingo.", "La d de «del domingo» es suave tras vocal; la de «domingo» también.", "Mandato negativo de tú: no + te + subjuntivo (pierdas)."),
    spk("Pruébalo todo y cómprate unas empanadas.", "Esdrújulas: PRUÉ-ba-lo, CÓM-pra-te. El acento se mantiene al añadir el pronombre.", "Mandatos afirmativos con pronombres pegados: pruébalo, cómprate."),
    wr(
      "Un amigo va a vivir unos meses en tu ciudad. Escríbele un correo informal: salúdalo, dale consejos sobre dónde vivir, qué visitar y qué evitar, y despídete.",
      [100, 130],
      [
        "Saludo y despedida informales (¡Hola, Juan!, Un abrazo…)",
        "Al menos tres mandatos de tú, afirmativos y negativos",
        "Al menos un mandato con pronombre (visítalo, no lo olvides…)",
        "Un consejo con te recomiendo que / es mejor que + subjuntivo",
        "Registro de tú en todo el correo",
      ],
      "¡Hola, Juan! ¡Qué alegría que vengas a Valencia! Te doy algunos consejos. Para vivir, busca un piso en Ruzafa o en el Carmen: son barrios bonitos y con mucha vida. No alquiles nada sin verlo antes, porque hay muchos anuncios falsos. Te recomiendo que compres una bici, porque la ciudad es plana y hay carriles por todas partes. El primer domingo, ve al Mercado Central y prueba la horchata. Y no te pierdas la playa de la Malvarrosa al atardecer: es preciosa. Ah, y no comas paella por la noche, ¡aquí eso solo lo hacen los turistas! Si necesitas algo, llámame. Un abrazo muy fuerte, Carlos",
      "Los consejos directos usan el imperativo de tú: afirmativo (busca, ve, prueba) y negativo con subjuntivo (no alquiles, no comas). Los pronombres se pegan al afirmativo (llámame) y van delante en el negativo (no te pierdas). Te recomiendo que va con subjuntivo: compres."
    ),
  ],
  "b1d-habla-de-ti-millon": [
    spk("Con un millón de euros, dejaría de trabajar.", "El condicional lleva el acento en la í: de-ja-RÍ-a.", "El condicional para planes imaginarios: dejaría."),
    spk("Viajaría por toda Sudamérica y ayudaría a mi familia.", "Une «ayudaría a mi»: «a-yu-da-ría-a-mi», sin cortes.", "Dos condicionales: viajaría, ayudaría."),
  ],
  "b1d-habla-de-ti-planes-condiciones": [
    spk("Si me dan vacaciones en agosto, iré a Perú.", "La voz sube al final de la condición (agosto) y baja al final de la frase (Perú).", "Si + presente, futuro: una condición real."),
    spk("Si no llueve el sábado, iremos a la sierra.", "Llueve con ll = y; sierra con rr fuerte.", "Si + presente, futuro: nunca «si lloverá»."),
  ],
  "b1d-habla-de-ti-primera-vez": [
    spk("Nunca había subido a un avión hasta los dieciocho.", "Había: la h no suena, «a-BÍ-a». Avión: una b suave, «a-BIÓN».", "Pluscuamperfecto (había subido) para algo anterior a otro momento del pasado."),
    spk("Fue la primera vez que vi el mar.", "Vez y vi empiezan con una b suave porque van tras vocal.", "«Fue la primera vez que» + pretérito indefinido."),
    wr(
      "Cuenta una «primera vez» importante en tu vida: la primera vez que viajaste solo, que hablaste en público, que viviste fuera… Explica qué no habías hecho nunca antes, qué pasó y cómo te sentiste.",
      [100, 130],
      [
        "Sitúa la historia en el tiempo (hace cinco años, cuando tenía…)",
        "Usa el pluscuamperfecto para lo que no habías hecho antes",
        "Cuenta los hechos en indefinido y describe en imperfecto",
        "Di cómo te sentiste y qué aprendiste",
      ],
      "La primera vez que viajé sola fue hace seis años, cuando tenía diecinueve. Hasta entonces nunca había salido de mi país y nunca había subido a un avión. Estaba muy nerviosa y casi no dormí la noche anterior. Volé a Lisboa para visitar a una amiga que estudiaba allí. En el aeropuerto me perdí dos veces y un señor muy amable me ayudó a encontrar la salida. Pero cuando llegué a la ciudad y vi el río desde un mirador, me sentí libre y muy orgullosa de mí misma. Aquel viaje me cambió: aprendí que puedo resolver problemas sola y desde entonces viajo siempre que puedo.",
      "Nunca había salido / nunca había subido: el pluscuamperfecto marca lo anterior a la historia. Los hechos van en indefinido (volé, me perdí, llegué) y el fondo en imperfecto (estaba nerviosa, estudiaba). Desde entonces enlaza el pasado con el presente."
    ),
  ],
  "b1d-habla-de-ti-personas-importantes": [
    spk("Mi abuela es la persona que más me ha enseñado.", "Enseñado: ñ como «ny», en-se-ÑA-do.", "Relativo que tras «la persona»: la que más me ha enseñado."),
    spk("El pueblo donde crecí está en las montañas.", "Crecí: seseo «cre-SÍ» o distinción «cre-ZÍ»; las dos son correctas.", "Donde como relativo de lugar."),
  ],
  "b1d-habla-de-ti-instrucciones-grupo": [
    spk("Llevad zapatos cómodos y no olvidéis el agua.", "La d final de llevad es muy suave, casi no se oye.", "Mandatos de vosotros (España): afirmativo llevad, negativo no olvidéis."),
    spk("Llamadme si os perdéis.", "Llamadme: la d antes de m es suave; la ll suena como y.", "Pronombre pegado al imperativo de vosotros: llamadme."),
  ],
  "b1d-habla-de-ti-deseos": [
    spk("Quiero que mis padres viajen más.", "Viajen: la j es suave en América, más áspera en España.", "Querer que + otra persona + subjuntivo (viajen)."),
    spk("Mi jefa quiere que termine el informe hoy.", "Informe: in-FOR-me, la r antes de m es una vibrante simple.", "Querer que + subjuntivo: termine."),
  ],
  "b1d-habla-de-ti-dudas": [
    spk("No creo que el tráfico mejore pronto.", "Tráfico es esdrújula: TRÁ-fi-co.", "No creo que + subjuntivo (mejore): expresa duda."),
    spk("Me parece que el tráfico va a empeorar.", "Une «va a empeorar»: «va-em-pe-o-RAR».", "Me parece que + indicativo: una opinión afirmativa."),
  ],
  "b1d-habla-de-ti-normas-casa": [
    spk("Quítate los zapatos en la entrada, por favor.", "QUÍ-ta-te: la u de «qui» no suena.", "Mandato afirmativo de tú con pronombre: quítate."),
  ],
  "b1d-habla-de-ti-logros": [
    spk("Este año he conseguido correr diez kilómetros.", "Correr: dos erres fuertes; la r final, simple.", "Pretérito perfecto (he conseguido) con «este año»: un periodo que no ha terminado."),
  ],
  "b1d-habla-de-ti-objetos": [
    spk("La caja en la que guardo mis cartas es de madera.", "Guardo: la u se pronuncia, «GWAR-do».", "Preposición + artículo + que: en la que."),
  ],
  "b1d-habla-de-ti-receta-se": [
    spk("Primero se lavan las verduras y luego se calienta el aceite.", "Aceite: a-CEI-te, «ei» en una sola sílaba.", "Se pasiva: se lavan (plural, las verduras), se calienta (singular, el aceite)."),
  ],
  "b1r-dialogue-have-you-ever": [
    lc(
      "—¿Has estado en México? —Sí, fui en 2019 con mi hermana, pero nunca he estado en Cancún.",
      "Escucha. ¿Qué sabemos de esta persona?",
      ["Conoce México, pero no Cancún", "Nunca ha viajado a México", "Ha estado en Cancún dos veces", "Va a ir a México con su hermana"],
      0,
      "Fue a México en 2019, pero «nunca he estado en Cancún». No es que no haya ido a México, no se habla de dos visitas a Cancún, y el viaje con su hermana ya pasó: no es un plan."
    ),
    spk("He estado en Perú. Fui en 2019 con mi hermana.", "Cambia de tiempo con la frase: «he estado» (experiencia) y «fui» (el detalle con fecha).", "La experiencia va en pretérito perfecto; los detalles con fecha, en indefinido."),
  ],
  "b1r-dialogue-advice-column": [
    lc(
      "Te recomiendo que hables con él con calma y que hagáis una lista de tareas para la casa.",
      "Escucha. ¿Qué aconseja la consejera?",
      ["Hablar tranquilamente y repartir las tareas", "Cambiar de piso cuanto antes", "Limpiar ella sola para evitar problemas", "Escribirle una carta a su compañero"],
      0,
      "Recomienda «que hables con él con calma» y «que hagáis una lista de tareas»: hablar tranquilamente y repartir el trabajo. No propone mudarse, ni limpiar sola, ni escribir una carta."
    ),
    spk("Te recomiendo que hables con él con calma.", "Une «con él con calma» en un solo grupo: «co-nél-con-CAL-ma».", "Recomendar que + subjuntivo (hables)."),
  ],
  "b1r-dialogue-polite-requests": [
    lc(
      "—¿Te importaría cerrar la ventana? Es que tengo un poco de frío. —Claro, ahora mismo.",
      "Escucha. ¿Por qué pide que cierren la ventana?",
      ["Porque tiene frío", "Porque hay mucho ruido", "Porque va a llover", "Porque entra polvo"],
      0,
      "«Es que tengo un poco de frío»: la razón es el frío. «Es que» introduce una justificación. No se menciona ruido, lluvia ni polvo."
    ),
    spk("¿Podría decirme dónde está la estación, por favor?", "Tono amable: sube suavemente al final. Podría: po-DRÍ-a.", "El condicional (podría) suaviza la petición."),
    spk("Yo que tú, hablaría con ella.", "Pausa breve tras «yo que tú»; luego «ha-bla-RÍ-a-con-E-lla» sin cortes.", "«Yo que tú» + condicional para dar un consejo suave."),
  ],
  "b1r-dialogue-combined-pronouns": [
    lc(
      "—¿Le devolviste el libro a Sara? —Sí, se lo devolví ayer.",
      "Escucha. ¿Qué pasó con el libro?",
      ["Sara ya lo tiene otra vez", "Sara todavía no lo tiene", "Sara se lo prestó a otra persona", "El libro se perdió"],
      0,
      "«Se lo devolví ayer»: se = a Sara, lo = el libro. Ya se lo ha devuelto, así que Sara lo tiene. No hay otra persona ni se habla de perderlo."
    ),
    spk("—¿Me prestas tu cargador? —Claro, te lo presto.", "«Te lo presto» es un solo bloque: te-lo-PRES-to.", "Te (a ti) + lo (el cargador): el indirecto va antes del directo."),
  ],
  "b1r-challenge-dialogue-marathon": [
    lc(
      "—No sé si aceptar el trabajo en Londres. —Yo que tú, lo aceptaría. Es importante que pienses en tu futuro.",
      "Escucha. ¿Qué opina el amigo?",
      ["Que debe aceptar el trabajo", "Que debe quedarse donde está", "Que no piense tanto en el futuro", "Que no le importa lo que haga"],
      0,
      "«Yo que tú, lo aceptaría»: le aconseja aceptar. Y añade que piense en su futuro, lo contrario de la tercera opción. No es indiferente."
    ),
    lc(
      "—Me molesta mucho que el pedido no haya llegado. —Lo siento. Le prometo que se lo enviaremos mañana.",
      "Escucha. ¿Qué promete la empresa?",
      ["Enviar el pedido mañana", "Devolver el dinero hoy", "Enviar un pedido nuevo la semana que viene", "Llamar al cliente mañana"],
      0,
      "«Le prometo que se lo enviaremos mañana»: se = al cliente, lo = el pedido. No se habla de devolver el dinero ni de llamar."
    ),
  ],
  "b1r-challenge-seville-1": [
    lc(
      "Atención, por favor. El tren con destino a Sevilla saldrá con veinte minutos de retraso desde la vía cuatro.",
      "Escucha el aviso. ¿Qué ha cambiado?",
      ["El tren sale veinte minutos más tarde", "El tren sale desde otra vía", "El tren está cancelado", "El tren sale veinte minutos antes"],
      0,
      "«Saldrá con veinte minutos de retraso»: sale más tarde. La vía cuatro es la de salida, no un cambio, y no se cancela."
    ),
  ],
  "b1r-challenge-seville-2": [
    lc(
      "Se dice que la Giralda es el símbolo de Sevilla. Fue construida como minarete de una mezquita y hoy es el campanario de la catedral.",
      "Escucha. ¿Qué era la Giralda al principio?",
      ["El minarete de una mezquita", "El campanario de la catedral", "Un palacio real", "Una torre de defensa"],
      0,
      "«Fue construida como minarete de una mezquita». Hoy es el campanario de la catedral, pero no al principio. No se menciona un palacio ni una torre defensiva."
    ),
    dict("Visitamos la catedral, que fue construida sobre una antigua mezquita.", "Visitamos la catedral, que fue construida sobre una antigua mezquita. Construida con c y d; mezquita con z y qu."),
  ],
  "b1-comprehensive-review-1": [
    lc(
      "Hola, soy Marta. Si no te viene bien quedar el jueves, llámame y lo dejamos para el viernes.",
      "Escucha el mensaje. ¿Qué propone Marta?",
      ["Cambiar la cita al viernes si el jueves no va bien", "Cancelar la cita", "Quedar el jueves y el viernes", "Que la otra persona le escriba el jueves"],
      0,
      "«Si no te viene bien quedar el jueves, […] lo dejamos para el viernes»: cambiar al viernes si hace falta. No cancela, no propone dos días, y pide una llamada (llámame), no un mensaje."
    ),
    dict("Si tienes tiempo, llámame esta tarde.", "Si tienes tiempo, llámame esta tarde. Llámame lleva tilde: es esdrújula al añadir el pronombre."),
  ],
  "b1-comprehensive-review-2": [
    lc(
      "Ojalá haga buen tiempo mañana, porque hemos organizado una comida en el jardín para cuarenta personas.",
      "Escucha. ¿Por qué le preocupa el tiempo?",
      ["Porque la comida es al aire libre", "Porque tiene que viajar", "Porque no sabe cuántos invitados vienen", "Porque ayer llovió en el jardín"],
      0,
      "La comida es «en el jardín»: si llueve, hay problema. No habla de viajar, sabe el número de invitados (cuarenta) y no menciona el día anterior."
    ),
  ],
  "b1-comprehensive-review-3": [
    dict("Me alegro de que hayáis venido a verme.", "Me alegro de que hayáis venido a verme. Hayáis (vosotros) lleva tilde; verme, sin tilde."),
    lc(
      "Cuando llegué a la fiesta, todos se habían ido ya.",
      "Escucha. ¿Qué pasó?",
      ["Llegó tarde y no había nadie", "Llegó antes que los demás", "Se fue antes de que llegaran todos", "Todos llegaron al mismo tiempo"],
      0,
      "«Se habían ido ya» cuando llegó: el pluscuamperfecto indica que la salida de los demás fue anterior a su llegada. Así que llegó tarde."
    ),
  ],
  "b1r-exit-ticket": [
    lc(
      "Estimados clientes: les informamos de que la tienda cerrará dentro de diez minutos. Se ruega que se dirijan a las cajas.",
      "Escucha el aviso. ¿Qué deben hacer los clientes?",
      ["Ir a pagar, porque la tienda va a cerrar", "Salir inmediatamente sin pagar", "Esperar diez minutos a que abran las cajas", "Ir a la sección de ofertas"],
      0,
      "La tienda cierra en diez minutos y «se ruega que se dirijan a las cajas»: que vayan a pagar. No dicen que salgan sin pagar, ni que esperen, ni hablan de ofertas."
    ),
  ],
  "b1r-challenge-formal-complaint": [
    wr(
      "Escribe un correo formal de reclamación a una tienda en línea. Hiciste un pedido hace tres semanas, te llegó un producto equivocado y nadie contesta tus mensajes. Explica qué pasó, cómo te sientes y qué solución pides.",
      [100, 140],
      [
        "Saludo y despedida formales (Estimados señores…, Atentamente)",
        "Los hechos en pasado, con fechas (hice un pedido, recibí…)",
        "Tu reacción con una expresión + subjuntivo (me parece inaceptable que…)",
        "Una petición clara con solicito que / les ruego que + subjuntivo",
        "Registro de usted en todo el texto",
      ],
      "Estimados señores: Me dirijo a ustedes para presentar una reclamación. El pasado 2 de marzo hice un pedido en su tienda en línea: una cafetera eléctrica de color negro. El paquete llegó el día 10, pero dentro había una tostadora. Desde entonces les he escrito tres correos y todavía no he recibido ninguna respuesta. Me parece inaceptable que nadie me haya contestado en casi tres semanas. Por ello, les ruego que me envíen la cafetera que pedí lo antes posible y que recojan la tostadora sin coste para mí. Si no es posible, solicito que me devuelvan el importe completo. Quedo a la espera de su respuesta. Atentamente, Laura Méndez",
      "Una reclamación eficaz separa los hechos (indefinido y pretérito perfecto: hice, llegó, he escrito) de la valoración (me parece inaceptable que + subjuntivo) y termina con una petición concreta (les ruego que me envíen). El usted se mantiene en todo el texto."
    ),
  ],
  "b1r-challenge-city-or-country": [
    wr(
      "¿Es mejor vivir en la ciudad o en el campo? Escribe un texto de opinión: da tu opinión, dos argumentos a favor, uno en contra y una conclusión.",
      [120, 150],
      [
        "Una opinión clara al principio (creo que, en mi opinión…)",
        "Dos argumentos a favor, con conectores (además, por otro lado…)",
        "Un argumento en contra con no creo que / no es verdad que + subjuntivo",
        "Una condición con si + presente",
        "Una conclusión (en conclusión, por eso…)",
      ],
      "En mi opinión, vivir en el campo es mejor que vivir en la ciudad, al menos para una familia con niños. En primer lugar, creo que la vida en el campo es más sana: el aire está más limpio, hay menos ruido y los niños pueden jugar en la calle sin peligro. Además, la vivienda es mucho más barata, así que se puede tener una casa con jardín. Por otro lado, es verdad que en la ciudad hay más oportunidades de trabajo y más cultura. Sin embargo, no creo que eso sea tan importante hoy, porque muchas personas trabajan desde casa. Si tienes una buena conexión a internet, puedes trabajar desde cualquier lugar. En conclusión, para mí el campo ofrece una vida más tranquila y feliz.",
      "Un texto de opinión B1 se organiza con conectores (en primer lugar, además, por otro lado, sin embargo, en conclusión). Creo que va con indicativo (es más sana), pero no creo que pide subjuntivo (sea). Si + presente expresa una condición real."
    ),
  ],
};
