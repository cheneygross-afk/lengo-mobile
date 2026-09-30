// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { dict, lc, spk, wr } from "./skills-authoring";

// B2 listening, speaking and writing practice, appended to the named
// lessons' final reviews by withSkills() (skills.ts). Instructions in
// Spanish. The "Habla de ti" lessons get record-and-compare shadowing;
// listening questions use short dialogues, messages and announcements.
export const B2_SKILLS: Record<string, Exercise[]> = {
  "b2d-habla-de-ti-pareja-ideal": [
    spk("Quiero un trabajo que me deje tiempo libre.", "Une «que me deje» sin pausas; la d de «deje» va tras vocal y es suave.", "Relativa en subjuntivo (deje): el trabajo todavía no existe o no lo conozco."),
    spk("Busco un piso que tenga terraza y que no esté lejos del centro.", "La voz se mantiene arriba en «terraza» (la frase sigue) y baja al final en «centro».", "Dos relativas en subjuntivo coordinadas: que tenga, que no esté."),
  ],
  "b2d-habla-de-ti-planes": [
    spk("En cuanto ahorre lo suficiente, viajaré a Perú.", "Sinalefa: «cuanto ahorre» suena «cuan-toa-HO-rre» (la h no suena); rr fuerte.", "En cuanto + subjuntivo para una acción futura."),
    spk("Cuando termine la carrera, me tomaré un año sabático.", "Sabático es esdrújula: sa-BÁ-ti-co.", "Cuando + subjuntivo para el futuro; nunca «cuando terminaré»."),
  ],
  "b2d-habla-de-ti-normas-infancia": [
    spk("Mis padres me pedían que ordenara mi cuarto todos los sábados.", "Or-de-NA-ra: el acento cae en la penúltima en el imperfecto de subjuntivo.", "Pedían que + imperfecto de subjuntivo: secuencia de tiempos en pasado."),
    spk("No me dejaban que viera la tele entre semana.", "Viera: la v es una b suave tras «que».", "Dejar que + subjuntivo; en pasado, viera."),
  ],
  "b2d-habla-de-ti-si-fueras": [
    spk("Si no tuviera miedo, haría paracaidismo.", "Sube la voz al final de la condición (miedo) y baja al final (paracaidismo).", "Si + imperfecto de subjuntivo, condicional: una hipótesis sobre el presente."),
    spk("Si viviera en la costa, iría a nadar cada mañana.", "«Iría a nadar»: las dos a se unen en una sola, algo más larga.", "Si viviera…, iría…: situación imaginaria."),
  ],
  "b2d-habla-de-ti-arrepentimientos": [
    spk("Si no me hubiera mudado, no habría conocido a mi pareja.", "Hubiera y habría: la h es muda, «u-BIE-ra», «a-BRÍ-a».", "Irreal de pasado: si + pluscuamperfecto de subjuntivo, condicional compuesto."),
    spk("Ojalá hubiera aprendido a tocar el piano de niño.", "Une «hubiera aprendido»: «u-bie-raa-pren-DI-do».", "Ojalá + pluscuamperfecto de subjuntivo: un deseo sobre el pasado que ya no puede cumplirse."),
  ],
  "b2d-habla-de-ti-conversacion": [
    spk("Me contó que había cambiado de trabajo y que estaba muy contento.", "Ritmo de narración: pequeña pausa antes del segundo «que».", "Estilo indirecto: ha cambiado → había cambiado; está → estaba."),
    spk("Me preguntó si quería ir con ella al concierto.", "La pregunta indirecta no sube al final: es una afirmación.", "Pregunta indirecta con si: ¿Quieres venir? → me preguntó si quería ir."),
  ],
  "b2d-habla-de-ti-caracter-estado": [
    spk("Soy bastante tranquilo, pero hoy estoy de los nervios.", "Contraste: marca «soy» y «estoy» con un poco más de fuerza.", "Ser para el carácter (soy tranquilo), estar para el estado de hoy (estoy de los nervios)."),
  ],
  "b2d-habla-de-ti-busque-encontre": [
    spk("Buscaba un piso que no costara mucho y encontré uno que tiene un balcón precioso.", "Balcón: b firme tras la n de «un»; acento en la última.", "Buscaba… que costara (no sabía si existía) frente a encontré uno que tiene (ya existe): cambia el modo."),
  ],
  "b2d-habla-de-ti-recuerdos-cuando": [
    spk("Cuando era pequeña, quería ser astronauta.", "Astronauta: «au» en una sola sílaba, as-tro-NAU-ta.", "Cuando + indicativo para el pasado habitual."),
    spk("Cuando sea mayor, viviré en el campo.", "Sea: dos sílabas, «SE-a», sin convertirlo en «sía».", "Cuando + subjuntivo para el futuro."),
  ],
  "b2d-habla-de-ti-deseos-irreales": [
    spk("Me gustaría que mis amigos vivieran más cerca.", "Vivieran: las dos v son b suaves entre vocales.", "Me gustaría que + imperfecto de subjuntivo: un deseo sobre el presente."),
  ],
  "b2d-habla-de-ti-dilemas": [
    spk("Si encontrara una cartera en la calle, la llevaría a la policía.", "«La llevaría a la»: une todo, «la-lle-va-rí-a-la».", "Si + imperfecto de subjuntivo, condicional."),
  ],
  "b2d-habla-de-ti-otra-epoca": [
    spk("Si hubiera nacido en 1900, no habría ido a la universidad.", "1900 se dice «mil novecientos».", "Irreal de pasado: hubiera nacido, habría ido."),
  ],
  "b2d-habla-de-ti-cambios": [
    spk("Con los años me he vuelto más paciente.", "En «me he vuelto» la v va tras vocal, así que es una b suave; la h de «he» no suena.", "Volverse para un cambio de carácter gradual e involuntario."),
  ],
  "b2d-habla-de-ti-opinion": [
    spk("Si bien es cierto que el teletrabajo tiene ventajas, no todos pueden trabajar desde casa.", "Pausa breve en la coma; la voz queda suspendida en «ventajas».", "Si bien es cierto que: concesión formal antes del argumento principal."),
  ],
  "b2d-habla-de-ti-enfasis": [
    spk("Fue mi abuela quien me enseñó a cocinar.", "Da más fuerza a «abuela»: es la información nueva.", "Oración hendida: fue + persona + quien, para destacar quién lo hizo."),
    spk("No te imaginas lo difícil que fue aprobar ese examen.", "Sube en «difícil» y baja al final.", "Lo + adjetivo + que para enfatizar: lo difícil que fue."),
  ],
  "b2r-dialogue-parents-wanted": [
    lc(
      "—Mis padres querían que estudiara Derecho, pero yo quería ser actriz. —¿Y al final? —Al final hice Periodismo.",
      "Escucha. ¿Qué estudió ella?",
      ["Periodismo", "Derecho", "Arte dramático", "No llegó a estudiar"],
      0,
      "«Al final hice Periodismo». Derecho era lo que querían sus padres y ser actriz lo que quería ella, pero ninguna de las dos cosas fue lo que hizo."
    ),
    spk("Mis padres querían que estudiara Derecho.", "Es-tu-DIA-ra: «dia» en una sola sílaba.", "Querían que + imperfecto de subjuntivo."),
  ],
  "b2r-dialogue-regrets": [
    lc(
      "—Si hubiera estudiado Medicina, ahora sería médico. —Pues yo me alegro de que no lo hicieras: te desmayas cuando ves sangre.",
      "Escucha. ¿Por qué se alegra el amigo?",
      ["Porque su amigo no soporta ver sangre", "Porque la Medicina está mal pagada", "Porque su amigo es feliz en su trabajo actual", "Porque él también quería ser médico"],
      0,
      "«Te desmayas cuando ves sangre»: no sería buen médico. No se habla del sueldo, ni de su trabajo actual, ni de los deseos del amigo."
    ),
    spk("Si hubiera estudiado Medicina, ahora sería médico.", "Contraste de tiempos: «hubiera estudiado» (pasado) y «ahora sería» (presente).", "Condicional mixta: condición en el pasado, consecuencia en el presente."),
  ],
  "b2r-mission-gossip": [
    lc(
      "Oye, que me ha dicho Luis que se muda a Valencia el mes que viene y que quiere hacer una fiesta de despedida el sábado.",
      "Escucha el audio. ¿Qué va a hacer Luis el sábado?",
      ["Dar una fiesta de despedida", "Mudarse a Valencia", "Visitar a unos amigos en Valencia", "Celebrar su cumpleaños"],
      0,
      "La mudanza es «el mes que viene»; el sábado es la fiesta de despedida. No se habla de visitas ni de cumpleaños."
    ),
  ],
  "b2r-mission-plan-event": [
    lc(
      "La fiesta será en el jardín, a menos que llueva. En ese caso, la haremos en el garaje. Y apagad las luces antes de que llegue Ana.",
      "Escucha. ¿Dónde será la fiesta si llueve?",
      ["En el garaje", "En el jardín", "En casa de Ana", "La cancelarán"],
      0,
      "«A menos que llueva […] la haremos en el garaje». El jardín es la opción si no llueve; no se cancela ni se cambia a casa de Ana, que es la invitada sorpresa."
    ),
  ],
  "b2r-challenge-dialogue-marathon": [
    lc(
      "—Firmamos hoy con tal de que nos hagan un descuento del diez por ciento. —Podríamos hacerlo, siempre que el pedido fuera mayor.",
      "Escucha. ¿Qué condición pone el vendedor?",
      ["Que el cliente compre más", "Que firmen hoy mismo", "Que paguen por adelantado", "Ninguna: acepta el descuento"],
      0,
      "«Siempre que el pedido fuera mayor»: acepta el descuento solo si compran más. Firmar hoy es la oferta del cliente, no del vendedor, y no habla de pagar por adelantado."
    ),
    spk("¡Cuánto has cambiado! Te has vuelto mucho más tranquilo.", "Exclamación: empieza alto en «cuánto» y baja; luego tono normal.", "Volverse + adjetivo para un cambio de carácter."),
  ],
  "b2r-challenge-mexico-city-1": [
    lc(
      "Llegué anoche. Me recomendaron que no tomara un taxi en la calle, así que pedí uno por la aplicación.",
      "Escucha. ¿Cómo llegó Laura al hotel?",
      ["En un taxi que pidió por la aplicación", "En un taxi que paró en la calle", "En metro", "La recogió un amigo"],
      0,
      "Le recomendaron que no tomara un taxi en la calle, «así que pedí uno por la aplicación». No se mencionan el metro ni un amigo."
    ),
  ],
  "b2r-challenge-mexico-city-2": [
    lc(
      "Se ha activado la alerta sísmica. Mantenga la calma, aléjese de las ventanas y diríjase a la zona de seguridad más cercana.",
      "Escucha el aviso. ¿Qué hay que hacer?",
      ["Ir con calma a la zona de seguridad, lejos de las ventanas", "Quedarse junto a las ventanas", "Salir corriendo a la calle", "Esperar instrucciones sin moverse"],
      0,
      "Pide mantener la calma, alejarse de las ventanas y dirigirse a la zona de seguridad. Correr contradice «mantenga la calma», y el aviso sí pide moverse."
    ),
    wr(
      "Eres Laura. Escribe la crónica de tu último día en Ciudad de México para la revista de tu periódico: qué pasó, qué te contaron los vecinos y qué te llevas de la ciudad.",
      [150, 180],
      [
        "Narración en pasado con indefinido, imperfecto y pluscuamperfecto",
        "Al menos dos frases en estilo indirecto (me contaron que…, me dijo que…)",
        "Una descripción con como si + imperfecto de subjuntivo",
        "Una reflexión final sobre la experiencia",
      ],
      "Mi último día en Ciudad de México empezó con un buen susto. Estaba escribiendo en el hotel cuando sonó la alerta sísmica. Bajé a la calle con los demás huéspedes y, para mi sorpresa, todos caminaban tranquilos, como si se tratara de un simulacro más. Una señora me explicó que en la ciudad están acostumbrados y que lo importante es no perder la calma. Por la tarde fui a la colonia Roma para terminar mi reportaje. Los vecinos me contaron que, después del terremoto de 2017, el barrio se había llenado de galerías y cafés, y que muchos edificios dañados se habían convertido en centros culturales. Un joven pintor me dijo que la tragedia había unido a la gente como nunca. Al anochecer, desde una azotea, vi la ciudad entera iluminada hasta el horizonte. Me voy con la sensación de haber conocido un lugar enorme, caótico y, sobre todo, profundamente solidario.",
      "La crónica alterna el indefinido para los hechos (sonó, bajé, fui), el imperfecto para el fondo (estaba escribiendo, caminaban) y el pluscuamperfecto para lo anterior (se había llenado). El estilo indirecto traslada los tiempos (están → están, porque sigue siendo verdad; ha unido → había unido)."
    ),
  ],
  "b2d-rep-cuyo-dictado-final": [
    dict("Un huérfano es un niño cuyos padres han muerto.", "Se escribe: Un huérfano es un niño cuyos padres han muerto. Cuyos concuerda con padres (masculino plural), no con niño."),
    dict("Es una escritora cuya obra conozco muy bien.", "Se escribe: Es una escritora cuya obra conozco muy bien. Cuya concuerda con obra."),
    dict("Visitamos un pueblo cuyas calles son muy estrechas.", "Se escribe: Visitamos un pueblo cuyas calles son muy estrechas. Cuyas concuerda con calles, lo poseído."),
  ],
  "b2-comprehensive-review-1": [
    lc(
      "Se informa a los pasajeros del vuelo 2317 con destino a Bogotá de que, debido a la niebla, el embarque se realizará por la puerta B12.",
      "Escucha el aviso. ¿Qué ha cambiado?",
      ["La puerta de embarque", "El destino del vuelo", "El número del vuelo", "Nada: el vuelo está cancelado"],
      0,
      "El embarque «se realizará por la puerta B12» debido a la niebla: cambia la puerta. Destino y número se mantienen, y no se habla de cancelación."
    ),
  ],
  "b2-comprehensive-review-2": [
    lc(
      "—¿Qué te dijo el médico? —Que no era nada grave, pero que descansara una semana y que volviera si seguía con fiebre.",
      "Escucha. ¿Qué le dijo el médico?",
      ["Que descansara y volviera si seguía la fiebre", "Que era grave y tenía que operarse", "Que volviera dentro de una semana en cualquier caso", "Que podía trabajar normalmente"],
      0,
      "Estilo indirecto: «que descansara una semana y que volviera si seguía con fiebre». Solo debe volver si sigue con fiebre, no en cualquier caso, y no es grave."
    ),
    dict("Me dijo que volvería cuando terminara el curso.", "Se escribe: Me dijo que volvería cuando terminara el curso. Estilo indirecto: volveré → volvería; cuando termine → cuando terminara."),
  ],
  "b2-comprehensive-review-3": [
    lc(
      "Aunque el hotel estaba muy bien situado, las habitaciones eran tan ruidosas que no pegamos ojo. No volveremos.",
      "Escucha. ¿Qué opina esta persona del hotel?",
      ["Buena ubicación, pero no pudieron dormir", "Mala ubicación, pero habitaciones tranquilas", "Todo perfecto: volverán", "Lo peor fue la comida"],
      0,
      "Aunque concede lo positivo (bien situado), «no pegamos ojo» significa que no durmieron nada, y «no volveremos». No se menciona la comida."
    ),
  ],
  "b2r-exit-ticket": [
    lc(
      "Te lo cuento para que no te enteres por otros: me han ofrecido un puesto en Chile y, aunque me cueste dejaros, lo voy a aceptar.",
      "Escucha. ¿Qué ha decidido esta persona?",
      ["Aceptar el trabajo en Chile", "Rechazar el puesto para no dejar a sus amigos", "Pensárselo unos días", "Pedir a sus amigos que se vayan con ella"],
      0,
      "«Aunque me cueste dejaros, lo voy a aceptar»: la concesión no cambia la decisión. No lo rechaza, no duda y no pide nada a sus amigos."
    ),
  ],
  "b2r-challenge-opinion-essay": [
    wr(
      "Escribe un ensayo argumentativo sobre esta afirmación: «Las ciudades deberían prohibir los coches en el centro». Presenta tu tesis, dos argumentos, una concesión al punto de vista contrario y una conclusión.",
      [150, 180],
      [
        "Una tesis clara en el primer párrafo",
        "Dos argumentos desarrollados, con conectores (en primer lugar, además, por consiguiente…)",
        "Una concesión (si bien es cierto que…, aunque…) y su refutación",
        "Una conclusión con una propuesta (es necesario que + subjuntivo)",
        "Registro formal e impersonal, sin expresiones coloquiales",
      ],
      "En los últimos años, cada vez más ciudades se plantean cerrar su centro al tráfico. En mi opinión, se trata de una medida necesaria, siempre que se aplique de forma gradual. En primer lugar, la contaminación del aire es uno de los principales problemas de salud en las grandes ciudades, y los coches son responsables de buena parte de ella. Reducir el tráfico supondría, por consiguiente, una mejora inmediata de la calidad de vida. Además, un centro sin coches recupera el espacio público para los peatones: las calles se llenan de terrazas, de niños y de comercio local. Si bien es cierto que muchos comerciantes temen perder clientes, la experiencia de ciudades como Pontevedra demuestra lo contrario: las ventas aumentaron cuando se peatonalizó el centro. En conclusión, prohibir los coches en el centro no es un capricho, sino una inversión en salud. Ahora bien, para que funcione, es imprescindible que las autoridades mejoren antes el transporte público.",
      "Un ensayo B2 se sostiene en su estructura: tesis, argumentos enlazados con conectores (en primer lugar, además, por consiguiente), una concesión (si bien es cierto que…) que se refuta y una conclusión. Para que y es imprescindible que exigen subjuntivo (funcione, mejoren)."
    ),
  ],
  "b2r-mission-formal-text": [
    wr(
      "Escribe un correo formal al ayuntamiento de tu ciudad para solicitar que se instale un parque infantil en un solar abandonado de tu barrio. Explica la situación, justifica la petición y propón una solución.",
      [150, 180],
      [
        "Encabezado y despedida formales (Estimado/a señor/a…, Atentamente)",
        "Presentación y motivo del correo en el primer párrafo",
        "Descripción del problema con datos concretos",
        "Petición formal con solicitar que / rogar que + subjuntivo",
        "Conectores formales (asimismo, por consiguiente, dado que…)",
      ],
      "Estimada señora concejala: Me dirijo a usted en nombre de la asociación de vecinos del barrio de San Andrés, cuyo objetivo es mejorar la vida de las familias de la zona. Le escribo para exponerle la situación del solar situado en la calle Olmo, que lleva más de diez años abandonado. En la actualidad, el terreno está lleno de basura y se ha convertido en un foco de ratas, lo cual preocupa especialmente a los padres, dado que hay dos colegios a menos de cien metros. Asimismo, el barrio no cuenta con ningún parque infantil, por lo que los niños juegan en la calle. Por consiguiente, le solicitamos que el ayuntamiento limpie el solar y que estudie la posibilidad de instalar en él un parque con zona verde. Los vecinos estamos dispuestos a colaborar en su mantenimiento. Quedamos a su disposición para una reunión en la que podamos presentarle nuestra propuesta con más detalle. Atentamente, Julia Serrano, presidenta de la asociación",
      "El correo formal se organiza en bloques: presentación y motivo, exposición del problema con datos, petición y cierre. Los conectores formales (asimismo, dado que, por consiguiente) y los relativos (cuyo, lo cual, en la que) dan cohesión; solicitar que exige subjuntivo (limpie, estudie)."
    ),
  ],
  "b2r-mission-passionate-review": [
    wr(
      "Escribe una crítica para un blog cultural sobre un concierto, una película o una obra de teatro que te haya impresionado (para bien o para mal). Usa recursos de énfasis.",
      [150, 180],
      [
        "Datos básicos: qué, quién, dónde y cuándo",
        "Una valoración con al menos dos estructuras de énfasis (lo + adjetivo + que, fue… quien, jamás había…)",
        "Un aspecto positivo y uno negativo, o una comparación",
        "Una recomendación final al lector",
      ],
      "El sábado pasado, la joven cantante chilena Rosa Aguirre llenó por completo el Palacio de los Deportes de Madrid, y lo que vivimos allí fue mucho más que un concierto. Desde la primera canción quedó claro lo bien que se entiende con su banda: cada tema sonaba distinto al disco, más crudo y más íntimo. Jamás había oído un silencio así en un recinto con quince mil personas. Fue en «Agua de mar» cuando el público entero se puso de pie; ella la cantó casi a capela, con una voz que parecía romperse y que, sin embargo, nunca falló. No todo fue perfecto: el sonido de las primeras filas era demasiado fuerte y algunas letras se perdían. Aun así, lo que más recuerdo no es el volumen, sino la emoción. Si tenéis la oportunidad de verla en directo, no lo dudéis ni un segundo. Es de esas noches que no se olvidan.",
      "La crítica combina información (quién, dónde, cuándo) con valoración. El énfasis se consigue con lo + adverbio + que (lo bien que se entiende), las hendidas (fue en… cuando), jamás había + participio y la estructura lo que más… no es…, sino…"
    ),
  ],
};
