// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { dict, lc, spk, wr } from "./skills-authoring";

// C1 listening, speaking and writing practice, appended to the named
// lessons' final reviews by withSkills() (skills.ts). Instructions in
// Spanish. Speaking goes to the dialogue labs and spoken missions;
// listening tests inference, register and regional cues.
export const C1_SKILLS: Record<string, Exercise[]> = {
  "c1r-dialogue-concessive-debate": [
    lc(
      "—Reconozco que el proyecto es caro. Ahora bien, por mucho que cueste, nos ahorrará dinero a largo plazo. —Ya, pero aun así no tenemos el presupuesto.",
      "Escucha. ¿En qué están de acuerdo los dos?",
      ["En que el proyecto es caro", "En que hay que aprobarlo ya", "En que ahorrará dinero", "En que el presupuesto alcanza"],
      0,
      "El primero concede que «es caro» y el segundo no lo discute: su objeción es el presupuesto. El ahorro solo lo defiende el primero, y el segundo niega que haya dinero."
    ),
    spk("Reconozco que el proyecto es caro. Ahora bien, por mucho que cueste, nos ahorrará dinero.", "Pausa marcada tras «ahora bien»: anuncia el giro del argumento.", "Conceder primero y matizar después: reconozco que…, ahora bien…"),
    spk("Aun admitiendo que tenga razón, no creo que sea el momento.", "«Aun» sin tilde (= incluso) se pronuncia en una sola sílaba: «aun».", "Aun + gerundio concesivo, seguido de no creo que + subjuntivo."),
  ],
  "c1r-mission-persuasive-speech": [
    spk("No se trata de gastar más, sino de gastar mejor.", "Dale fuerza a «más» y a «mejor»: la antítesis es el núcleo de la frase.", "No se trata de… sino de…: estructura de contraste típica de la persuasión."),
    spk("Lo que está en juego no es un presupuesto, es el futuro de nuestros hijos.", "Sube en «presupuesto», pausa, y baja con peso en «hijos».", "Hendida con lo que + estar en juego para focalizar."),
    spk("Por eso les pido, hoy más que nunca, que apoyen esta propuesta.", "El inciso «hoy más que nunca» va entre pausas, en un tono algo más bajo.", "Pedir que + subjuntivo (apoyen), con el inciso como énfasis."),
  ],
  "c1r-dialogue-lab-correcting-with-emphasis": [
    spk("No, no fue Marta quien lo dijo; fue su jefe.", "Acento contrastivo fuerte en «Marta» y en «jefe».", "Hendida para corregir: no fue X quien…, fue Y."),
    spk("Lo que te pedí fue que lo revisaras, no que lo reescribieras entero.", "Marca el contraste entre «revisaras» y «reescribieras».", "Lo que + verbo + fue: focaliza lo pedido."),
  ],
  "c1r-dialogue-lab-guessing": [
    lc(
      "—Marcos no contesta al teléfono. —Estará en el metro; a estas horas siempre va sin cobertura.",
      "Escucha. ¿Qué expresa la segunda persona?",
      ["Una suposición sobre dónde está Marcos ahora", "Un plan: Marcos irá en metro más tarde", "Una orden para que Marcos vaya en metro", "Un hecho seguro: sabe dónde está"],
      0,
      "«Estará en el metro» es futuro de conjetura: supone algo sobre el presente. No habla del futuro real, no es una orden y no es seguro (lo deduce de su costumbre)."
    ),
    spk("¿Dónde se habrá metido Lucía? Habrá perdido el tren.", "Dos conjeturas sobre el pasado: «ha-BRÁ».", "Futuro compuesto de conjetura: suposición sobre algo ya ocurrido."),
    spk("Serían las tres cuando sonó el teléfono.", "«Serían» con acento en la í: se-RÍ-an.", "Condicional de conjetura sobre el pasado: más o menos las tres."),
  ],
  "c1r-dialogue-lab-invitation-to-tutear": [
    spk("Oye, ¿por qué no nos tuteamos? Me haces sentir mayor.", "Tono cálido; «tuteamos» en cuatro sílabas: tu-te-A-mos.", "Una invitación típica a pasar del usted al tú."),
    spk("Disculpe, ¿sería tan amable de indicarme la salida?", "Cortesía máxima: tono bajo y suave, con leve subida final.", "¿Sería tan amable de…? es una fórmula de usted muy cortés."),
  ],
  "c1r-dialogue-lab-porteno": [
    lc(
      "—¿Vos venís a la juntada del sábado? —Dale, pero llevo algo para tomar, ¿qué querés?",
      "Escucha. ¿Qué responde la segunda persona?",
      ["Que irá y llevará algo de beber", "Que no puede ir el sábado", "Que prefiere quedarse en casa", "Que no sabe qué es una juntada"],
      0,
      "«Dale» es un «sí» rioplatense, y «llevo algo para tomar» ofrece bebida. Juntada es una reunión de amigos; nadie la rechaza."
    ),
    spk("¿Vos sabés dónde queda la calle Florida?", "Voseo: «sa-BÉS», acento en la última. En Buenos Aires, «calle» suena «ca-she».", "Voseo rioplatense: vos sabés en lugar de tú sabes."),
    spk("Dale, nos vemos mañana. ¡Cuidate!", "«Cuidate» sin tilde en el voseo: cui-DA-te.", "Imperativo de vos: cuidate (tú: cuídate)."),
    spk("Tenés que probar las medialunas de acá.", "«Te-NÉS»; «medialunas» en cuatro sílabas: me-dia-LU-nas.", "Voseo (tenés) y léxico rioplatense (medialunas = croissants)."),
  ],
  "c1r-dialogue-lab-filler-words": [
    lc(
      "O sea, no es que no me guste, ¿eh?, es que no me convence del todo, ¿me explico?",
      "Escucha. ¿Qué función cumple aquí «o sea»?",
      ["Introduce una reformulación de lo dicho", "Expresa una conclusión lógica rotunda", "Marca un cambio de tema", "Pide permiso para hablar"],
      0,
      "«O sea» anuncia que el hablante va a reformular o matizar su idea: no es rechazo, sino que no le convence. No cierra un razonamiento, no cambia de tema ni pide la palabra."
    ),
    spk("Bueno, pues nada, a ver si nos vemos un día de estos.", "Ritmo relajado; «a ver si» se une: «a-ber-si».", "Muletillas de cierre (bueno, pues nada) y la fórmula a ver si… para despedirse."),
  ],
  "c1r-story-detective-where-am-i": [
    lc(
      "¿Me pasás el celular? Lo dejé arriba de la heladera, ¡qué cabeza la mía!",
      "Escucha. ¿De dónde es probablemente quien habla?",
      ["De Argentina o Uruguay", "De España", "De México", "De Colombia"],
      0,
      "El voseo (pasás), heladera (nevera) y «arriba de» por «encima de» son rasgos rioplatenses. En España diría móvil y nevera; en México, celular y refrigerador, con tú."
    ),
    lc(
      "¡Qué chévere! Mañana vamos a la playa con mis parceros.",
      "Escucha. ¿De dónde es probablemente quien habla?",
      ["De Colombia", "De Argentina", "De España", "De Chile"],
      0,
      "«Chévere» y sobre todo «parceros» (amigos) apuntan a Colombia. En Argentina serían copado y amigos; en España, guay y colegas; en Chile, bacán."
    ),
  ],
  "c1r-contrast-voseo-varieties": [
    spk("Vos tenés razón, pero ¿querés venir o no?", "Voseo rioplatense: pronombre vos y terminación -és (tenés, querés). En Chile, en cambio, se oiría «tú tenís razón, pero ¿querís venir o no?».", "Tenés y querés (Río de la Plata, con vos) frente a tenís y querís (Chile, informal, con tú)."),
  ],
  "c1r-mission-press-release": [
    lc(
      "La empresa ha anunciado hoy la apertura de dos nuevas plantas, lo que supondrá la creación de trescientos empleos a lo largo del próximo año.",
      "Escucha la noticia. ¿Cuál es la consecuencia principal del anuncio?",
      ["Se crearán trescientos puestos de trabajo", "Se cerrarán dos plantas", "Se despedirá a trescientas personas", "La empresa cambiará de sede"],
      0,
      "«Lo que supondrá la creación de trescientos empleos»: la consecuencia es el empleo. Se abren plantas, no se cierran, y no se habla de despidos ni de sede."
    ),
    dict("El edificio fue inaugurado en 1998 y reformado en 2020.", "Se escribe: El edificio fue inaugurado en 1998 y reformado en 2020. Pasiva perifrástica con ser: el participio concuerda con edificio. (Puedes escribir los años en cifras.)", ["El edificio fue inaugurado en mil novecientos noventa y ocho y reformado en dos mil veinte."]),
  ],
  "c1r-text-detective-headlines": [
    dict("Aprobada la reforma de la ley de vivienda", "Se escribe: Aprobada la reforma de la ley de vivienda. El titular omite el verbo auxiliar (ha sido) y usa solo el participio."),
  ],
  "c1r-mission-job-follow-up": [
    lc(
      "Buenos días, le llamo de Recursos Humanos. Quería agradecerle su tiempo en la entrevista y comunicarle que ha pasado a la fase final. Le escribiremos para concertar una segunda reunión.",
      "Escucha el mensaje. ¿Qué pasará ahora?",
      ["Le escribirán para fijar otra reunión", "Empezará a trabajar la semana que viene", "Tiene que llamar para confirmar", "No ha sido seleccionado"],
      0,
      "Ha pasado a la fase final y «le escribiremos para concertar una segunda reunión». Aún no le contratan, no le piden que llame y sí ha sido seleccionado para la siguiente fase."
    ),
    spk("Quería agradecerle de nuevo el tiempo que me dedicó ayer en la entrevista.", "El imperfecto de cortesía (quería) suaviza; tono cordial.", "Imperfecto de cortesía: quería agradecerle en lugar de quiero."),
  ],
  "c1r-challenge-register-marathon": [
    spk("Le agradecería que me enviara el informe antes del viernes.", "Registro formal: ritmo pausado, sin subidas bruscas.", "Le agradecería que + imperfecto de subjuntivo: petición formal y atenuada."),
    spk("Oye, ¿me pasas el informe cuando puedas? Sin prisa, ¿eh?", "Registro coloquial: tono más alto y rápido, con «¿eh?» ascendente.", "El mismo contenido en registro informal: tú, presente, muletillas."),
  ],
  "c1r-spiral-academic-nominalization": [
    dict("Los resultados sugieren que la hipótesis inicial debe matizarse.", "Se escribe: Los resultados sugieren que la hipótesis inicial debe matizarse. Hipótesis con h y tilde; matizarse con z."),
  ],
  "c1r-challenge-exit-ticket": [
    lc(
      "Si bien los datos del trimestre son alentadores, conviene no lanzar las campanas al vuelo: buena parte del crecimiento se debe a factores puntuales.",
      "Escucha. ¿Qué actitud transmite el hablante?",
      ["Optimismo prudente", "Euforia sin reservas", "Pesimismo total", "Indiferencia"],
      0,
      "Reconoce que los datos son «alentadores», pero «no lanzar las campanas al vuelo» pide prudencia. No es euforia (hay reservas), ni pesimismo (los datos son buenos), ni indiferencia."
    ),
  ],
  "c1r-mission-cover-letter-verbs": [
    wr(
      "Redacta una carta de motivación para un puesto de coordinador/a de proyectos en una ONG de cooperación internacional. Presenta tu perfil, relaciona tu experiencia con el puesto, explica tu motivación y cierra solicitando una entrevista.",
      [180, 240],
      [
        "Encabezado, saludo y despedida formales",
        "Experiencia concreta relacionada con el puesto (no una lista de todo el currículum)",
        "Verbos con su preposición correcta (contar con, dedicarse a, consistir en, interesarse por…)",
        "Motivación personal argumentada, sin tópicos vacíos",
        "Cierre con una petición atenuada (quedo a su disposición, me gustaría tener la oportunidad de…)",
      ],
      "Estimada señora Ortega: Me pongo en contacto con ustedes para presentar mi candidatura al puesto de coordinadora de proyectos publicado en su página web. Soy licenciada en Ciencias Políticas y cuento con cinco años de experiencia en el ámbito de la cooperación. Durante los tres últimos, me he dedicado a coordinar un programa de acceso al agua potable en el norte de Guatemala, que consistía en construir pozos junto con las comunidades y formar a los técnicos locales para su mantenimiento. Aquella experiencia me enseñó que un proyecto solo perdura si quienes lo reciben participan en su diseño desde el principio. Me intereso por su organización precisamente porque comparto ese enfoque: he seguido de cerca sus programas en Centroamérica y valoro especialmente la transparencia con la que rinden cuentas a sus socios. Además, hablo inglés con fluidez y tengo un nivel intermedio de portugués, lo que me permitiría apoyar sus nuevos proyectos en Mozambique. Estoy convencida de que mi experiencia sobre el terreno, unida a mi capacidad para trabajar con equipos diversos, podría aportar valor a su equipo. Quedo a su entera disposición para ampliar cualquier información y me encantaría tener la oportunidad de conversar con ustedes en una entrevista. Atentamente, Clara Beltrán Ruiz",
      "Una buena carta de motivación conecta la experiencia con el puesto en lugar de repetir el currículum. Fíjate en el régimen de los verbos: contar con, dedicarse a, consistir en, interesarse por. El cierre se atenúa con el condicional (podría aportar, me encantaría)."
    ),
  ],
  "c1r-mission-report-highlighting": [
    wr(
      "Redacta un informe breve para la dirección de tu empresa sobre los resultados de una encuesta interna acerca del teletrabajo. Presenta los datos principales, destaca lo más relevante, señala un problema y formula recomendaciones.",
      [200, 250],
      [
        "Estructura de informe: objetivo, resultados, análisis y recomendaciones",
        "Registro impersonal (se observa, cabe destacar, conviene…)",
        "Marcadores para destacar y matizar (cabe subrayar, ahora bien, en definitiva…)",
        "Datos concretos (porcentajes, cifras) integrados en el texto",
        "Recomendaciones con subjuntivo (se recomienda que…, es aconsejable que…)",
      ],
      "Informe sobre la encuesta de teletrabajo. El presente informe tiene como objetivo analizar los resultados de la encuesta interna realizada en marzo entre los 240 empleados de la empresa, con una tasa de respuesta del 78 %. En líneas generales, la valoración del modelo híbrido es muy positiva: el 82 % de la plantilla afirma que su productividad se ha mantenido o ha aumentado, y el 71 % considera que ha mejorado la conciliación entre su vida laboral y familiar. Cabe subrayar, además, que el absentismo se ha reducido un 15 % respecto al año anterior. Ahora bien, los datos revelan también un problema que no conviene pasar por alto: casi la mitad de los encuestados menores de treinta años declara sentirse aislada y echa en falta el aprendizaje informal que se produce en la oficina. Este dato resulta especialmente preocupante en los equipos que se han incorporado recientemente. A la vista de estos resultados, se recomienda que se mantenga el modelo híbrido, pero que se establezcan dos días presenciales comunes por equipo. Asimismo, sería aconsejable que cada nuevo empleado contara con un mentor durante sus primeros seis meses. En definitiva, el teletrabajo funciona, siempre que no se descuide la dimensión humana del trabajo.",
      "El informe se apoya en la impersonalidad (se recomienda, cabe subrayar, conviene), en datos concretos y en marcadores que organizan el razonamiento: en líneas generales, ahora bien, asimismo, en definitiva. Las recomendaciones van en subjuntivo (que se mantenga, que contara)."
    ),
  ],
  "c1r-challenge-final-formal-email": [
    wr(
      "Escribe un correo formal completo a la Fundación Lumen para solicitar su beca de investigación. Preséntate y expón el motivo, justifica tu candidatura con argumentos bien enlazados, formula tu petición con cortesía, menciona los documentos adjuntos y cierra adecuadamente.",
      [180, 230],
      [
        "Asunto, saludo y despedida adecuados (Estimados miembros del comité:, Atentamente)",
        "Motivo del correo con una fórmula de apertura formal (me dirijo a ustedes para…)",
        "Argumentos enlazados con conectores (en primer lugar, asimismo, además, por último…)",
        "Petición cortés con condicional + subjuntivo (les agradecería que…)",
        "Mención de los documentos adjuntos y fórmula de cierre (quedo a la espera de…)",
      ],
      "Asunto: Solicitud de la beca de investigación Lumen. Estimados miembros del comité: Me dirijo a ustedes para solicitar la beca de investigación que convoca la Fundación Lumen para el próximo curso. Soy licenciada en Biología por la Universidad de Granada y actualmente curso un máster en Ecología Marina. Considero que mi perfil se ajusta a los requisitos de la convocatoria por varias razones. En primer lugar, cuento con dos años de experiencia en un proyecto sobre la conservación de las praderas de posidonia. Asimismo, he publicado dos artículos en revistas especializadas y he presentado mis resultados en un congreso internacional. Además, domino el inglés y el francés, lo que me permitiría colaborar con los equipos internacionales que apoya la Fundación. Por último, el proyecto que propongo, centrado en el impacto del turismo en el litoral andaluz, podría contribuir de forma directa a los objetivos de la Fundación. Por todo ello, les agradecería que tuvieran en cuenta mi candidatura. Encontrarán adjuntos mi currículum, el proyecto de investigación y dos cartas de recomendación. Quedo a la espera de su respuesta y a su disposición para cualquier aclaración. Agradezco de antemano su atención. Atentamente, Lucía Ortega Marín",
      "El correo sigue el orden de la misión: saludo colectivo formal, motivo («me dirijo a ustedes para…»), argumentos enlazados (en primer lugar, asimismo, por último), petición cortés con condicional + imperfecto de subjuntivo («les agradecería que tuvieran en cuenta…»), documentos adjuntos (concordancia: «adjuntos mi currículum… y dos cartas») y cierre fijo («quedo a la espera de…», «Atentamente»)."
    ),
  ],
  "c1r-mission-concessive-review": [
    wr(
      "Escribe una reseña matizada de un libro, una serie o una película que te haya dejado sentimientos encontrados. Reconoce sus méritos, señala sus defectos y ofrece una valoración final equilibrada.",
      [180, 230],
      [
        "Presentación de la obra (título, autor o director, género)",
        "Al menos tres estructuras concesivas distintas (aunque, si bien, por mucho que, pese a…)",
        "Méritos y defectos concretos, con ejemplos",
        "Una valoración final que no sea ni elogio ni condena absolutos",
      ],
      "«La casa del acantilado», la nueva serie de la directora Irene Solís, llega precedida de una enorme expectación, y lo cierto es que en muchos aspectos está a la altura. La fotografía es sencillamente espectacular: cada plano de la costa gallega parece un cuadro, y la banda sonora acompaña sin imponerse. Las interpretaciones, además, son sobresalientes, en especial la de la actriz protagonista, que construye con muy pocos gestos a una madre devorada por la culpa. Ahora bien, por mucho que uno admire su factura, cuesta no impacientarse a partir del cuarto episodio. Si bien el ritmo pausado resulta hipnótico al principio, la trama se estanca y algunas subtramas, como la del hermano periodista, no llevan a ninguna parte. Pese a que el desenlace intenta atar todos los cabos, lo hace de forma tan apresurada que deja una sensación de trampa. Aunque no sea la obra maestra que se nos prometía, se trata de una serie cuidada, valiente y, a ratos, conmovedora. La recomendaría a quienes disfruten del drama psicológico y no tengan prisa; los que busquen un thriller trepidante, en cambio, probablemente se sentirán decepcionados.",
      "La reseña matizada alterna elogio y crítica mediante concesivas: por mucho que + subjuntivo, si bien + indicativo, pese a que, aunque + subjuntivo (aunque no sea…, que resta importancia al hecho). Ahora bien y en cambio marcan el contraste."
    ),
  ],
  "c1r-mission-subtitle-neutral": [
    spk("¿Me puedes ayudar con esto? Es que no entiendo nada.", "Registro neutro: sin muletillas regionales; «es que» introduce la justificación con tono bajo.", "Una frase válida en toda Latinoamérica y en España, sin coloquialismos locales."),
  ],
  "c1r-mission-buenos-aires-flat": [
    spk("Buenas, llamo por el departamento de Palermo. ¿Sigue disponible?", "Buenas: saludo rioplatense corto. Departamento: de-par-ta-MEN-to.", "En Argentina se dice departamento (en España, piso) y se saluda con un breve «buenas»."),
  ],
  "c1r-mission-three-messages": [
    spk("Estimado señor López: le escribo para confirmarle la reunión del jueves.", "Registro formal: ritmo pausado; «le escribo» sin sinalefa forzada.", "Apertura de un mensaje formal con usted y le."),
  ],
};
