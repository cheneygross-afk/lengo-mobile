// Synced from cheneygross-afk/lengo:src/lib/lessons/c1-practice.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { authoring } from "./authoring";

// Extra English-to-Spanish practice for C1 lessons that had too few
// questions (see practice.ts). Keyed by lesson slug; appended to the
// lesson's final exercises. Grammar notes go in the explanation, shown
// after the learner answers.
const { fe } = authoring("es");

export const C1_PRACTICE: Record<string, Exercise[]> = {
  // ---- Subjuntivo: repaso y matices -------------------------------------
  "subjunctive-mastery-review-1": [
    fe("Me alegra que por fin ___ el informe.", "hayas terminado", "I'm glad you've finally [finished] the report.", "Con el verbo principal en presente, un hecho ya concluido va en perfecto de subjuntivo: «hayas terminado» lo presenta como cerrado antes del momento del habla.", ["hayas acabado"]),
    fe("Espero que mañana ___ buen tiempo para la excursión.", "haga", "I hope the weather [is] good tomorrow for the excursion.", "La acción todavía no ha ocurrido y se proyecta hacia el futuro: presente de subjuntivo («haga»), no perfecto."),
  ],
  "subjunctive-mastery-review-2": [
    fe("Quería que me ___ con la mudanza el sábado.", "ayudaras", "I wanted you [to help] me with the move on Saturday.", "Con el verbo principal en pasado (quería), la acción simultánea o posterior va en imperfecto de subjuntivo: «ayudaras» (o «ayudases»)."),
    fe("Dudaba que ___ el informe antes de la reunión.", "hubiera terminado", "I doubted that she [had finished] the report before the meeting.", "La terminación es anterior al momento de la duda, que ya está en pasado: pluscuamperfecto de subjuntivo («hubiera/hubiese terminado»).", ["hubiera acabado"]),
    fe("Le pedí que ___ un rato más.", "se quedara", "I asked him [to stay] a little longer.", "Pedir que + subjuntivo; con «pedí» en pasado, la permanencia (posterior al pedido) va en imperfecto de subjuntivo: «se quedara» o «se quedase»."),
  ],
  "c1r-error-hunt-tense-concordance": [
    fe("Me molestó que nadie me ___ del cambio de horario.", "hubiera avisado", "It bothered me that nobody [had told] me about the schedule change.", "El aviso (que no llegó) es anterior a la molestia, que está en pasado: pluscuamperfecto de subjuntivo. El imperfecto («avisara») también es habitual aquí.", ["hubiera informado", "avisara", "informara"]),
  ],
  "subjunctive-mastery-review-3": [
    fe("___, terminaremos el proyecto a tiempo.", "Cueste lo que cueste", "[Whatever it takes], we'll finish the project on time.", "Fórmula reduplicativa concesivo-universal: verbo en subjuntivo + lo que + el mismo verbo. Nunca admite indicativo.", ["Cueste lo que nos cueste"]),
    fe("___, no perderemos la calma.", "Pase lo que pase", "[Whatever happens], we won't lose our cool.", "«Pase lo que pase» declara irrelevante cualquier eventualidad; la estructura exige siempre subjuntivo.", ["Ocurra lo que ocurra", "Suceda lo que suceda"]),
  ],
  "subjunctive-mastery-review-4": [
    fe("Eso no significa que ___ la única solución.", "sea", "That doesn't mean it [is] the only solution.", "«No significa que» niega una implicación lógica, no un hecho: en el registro culto lleva subjuntivo («sea»)."),
    fe("No es que no ___ ayudarte; es que hoy no puedo.", "quiera", "It's not that I don't [want] to help you; it's that I can't today.", "«No es que» + subjuntivo descarta una interpretación y atenúa una posible acusación."),
    fe("No digo que ___, solo que entiendo tu punto de vista.", "tengas razón", "I'm not saying [you're right], just that I understand your point of view.", "«No digo que» + subjuntivo suaviza la afirmación y evita la confrontación directa.", ["lleves razón", "estés en lo cierto"]),
  ],
  "c1r-transform-universal-concessive": [
    fe("___, siempre encontraba trabajo.", "Fuera donde fuera", "[Wherever he went], he always found work.", "Con referencia pasada, la fórmula reduplicativa va en imperfecto de subjuntivo: «fuera donde fuera» (o «fuese donde fuese»).", ["Fuera adonde fuera", "Fuera a donde fuera"]),
  ],
  "c1r-workshop-attenuation": [
    fe("___ consultarle una duda sobre la factura.", "Quisiera", "[I'd like] to ask you a question about the invoice.", "«Quisiera» (imperfecto de subjuntivo de cortesía) atenúa la petición frente a «quiero». «Me gustaría» y «querría» son igual de corteses.", ["Me gustaría", "Querría"]),
  ],
  "subjunctive-mastery-review-5": [
    fe("No creo que ___ todas las opciones antes de decidir.", "hayamos evaluado", "I don't think we [have evaluated] all the options before deciding.", "«No creo que» + subjuntivo; el hecho ya concluido respecto al presente va en perfecto de subjuntivo.", ["hayamos valorado", "hayamos considerado", "hayamos estudiado", "hayamos analizado"]),
    fe("Me habría gustado que lo ___ con más calma.", "discutiéramos", "I would have liked us [to discuss] it more calmly.", "Tras un condicional (me habría gustado), la subordinada va en imperfecto o pluscuamperfecto de subjuntivo.", ["hubiéramos discutido", "habláramos", "hubiéramos hablado", "debatiéramos", "hubiéramos debatido"]),
    fe("No creo que el resultado ___ mucho.", "hubiera cambiado", "I don't think the result [would have changed] much.", "En la subordinada de «no creo que», el «would have changed» hipotético se expresa con pluscuamperfecto de subjuntivo («hubiera/hubiese cambiado»)."),
    fe("Temía que ___ improvisando indefinidamente.", "siguiéramos", "I was afraid we [would keep on] improvising indefinitely.", "Temer que + subjuntivo; con el verbo principal en pasado, la acción posterior va en imperfecto de subjuntivo.", ["continuáramos"]),
  ],
  "subjunctive-mastery-review-6": [
    fe("No lo sé ___, pero creo que llegarán el lunes.", "a ciencia cierta", "I don't know [for certain], but I think they'll arrive on Monday.", "«A ciencia cierta» significa «con total seguridad» y aparece casi siempre en frases negativas.", ["con certeza", "con seguridad", "con total seguridad", "seguro"]),
    fe("___ que el vuelo se retrase por la niebla.", "Cabe la posibilidad de", "[There's a chance] that the flight will be delayed by the fog.", "«Cabe la posibilidad de que» va seguido de subjuntivo («se retrase»).", ["Existe la posibilidad de", "Es posible", "Puede"]),
    fe("El director ___ que el plazo era innegociable.", "recalcó", "The director [stressed] that the deadline was non-negotiable.", "«Recalcar» es subrayar o repetir algo para que quede claro.", ["subrayó", "insistió en", "enfatizó", "remarcó", "destacó"]),
    fe("Nos presentaron la fusión como un ___.", "hecho consumado", "They presented the merger to us as a [done deal].", "«Un hecho consumado» es algo ya realizado que no tiene vuelta atrás."),
  ],

  // ---- Aunque y otras concesivas ---------------------------------------
  "concessive-aunque-1": [
    fe("Aunque ___ toda la tarde, no terminó el informe.", "trabajó", "Although she [worked] all afternoon, she didn't finish the report.", "Se narra un hecho pasado cuyo desenlace ya se conoce: «aunque» + indicativo (trabajó). El subjuntivo («trabajara») lo convertiría en una hipótesis.", ["estuvo trabajando", "había trabajado"]),
    fe("Aunque ya ___ las once, la tienda sigue abierta.", "son", "Although it['s] already eleven, the shop is still open.", "El hablante informa de la hora como un hecho: «aunque» + indicativo. Con «sean» le restaría importancia a algo que el otro ya sabe."),
    fe("Aunque no lo ___, habla cinco idiomas.", "parece", "Although he doesn't [seem] like it, he speaks five languages.", "Indicativo: se presenta como dato constatado. También es muy frecuente «aunque no lo parezca», que resta importancia a la apariencia.", ["aparenta", "parezca", "aparente"]),
  ],
  "concessive-aunque-2": [
    fe("Aunque ___ tu hermano, no tiene derecho a leer tus mensajes.", "sea", "He may well [be] your brother, but he has no right to read your messages.", "Los dos saben que es su hermano: el subjuntivo no pone el hecho en duda, lo presenta como irrelevante para la conclusión. «Es» lo daría como información nueva."),
    fe("Aunque ___ una fortuna, lo compraré.", "cueste", "Even if it [costs] a fortune, I'll buy it.", "Aunque + subjuntivo: el precio, sea cual sea, no altera la decisión.", ["valga"]),
  ],
  "c1r-error-hunt-concessives": [
    fe("Aunque ___ su número, no te lo daría.", "supiera", "Even if I [knew] his number, I wouldn't give it to you.", "En una concesiva hipotética, aunque + imperfecto de subjuntivo («supiera/supiese»), nunca condicional (✗ aunque sabría)."),
  ],
  "concessive-aunque-3": [
    fe("A pesar de que ___, el concierto empezó puntual.", "llovía", "Even though it [was raining], the concert started on time.", "El obstáculo ya se enfrentó y quedó superado: a pesar de que + indicativo.", ["estaba lloviendo", "llovió"]),
    fe("A pesar de que mañana ___ huelga de metro, la feria abrirá.", "haya", "Even if there [is] a metro strike tomorrow, the fair will open.", "Cuando el obstáculo se proyecta como posibilidad futura, «a pesar de que» lleva subjuntivo (haya); «hay» daría la huelga por confirmada."),
  ],
  "concessive-aunque-4": [
    fe("Por más que ___, no te voy a dar la razón.", "grites", "No matter how much you [shout], I'm not going to say you're right.", "«Por más que» con valor hipotético o general exige subjuntivo (grites); el futuro «gritarás» es imposible tras «que»."),
    fe("Por mucha prisa que nos ___, no llegaremos a tiempo.", "demos", "No matter how much we [hurry], we won't get there on time.", "Por mucho + sustantivo + que + subjuntivo: «mucha» concuerda con «prisa» (femenino) y la cantidad, por elevada que sea, no cambia el resultado."),
    fe("Por más que ___ la casa, siempre había polvo.", "limpiaba", "However much I [cleaned] the house, there was always dust.", "En pasado, si el esfuerzo se presenta como hecho real y repetido, va en indicativo (limpiaba); el imperfecto de subjuntivo («limpiara») lo presenta como concesión general.", ["limpiara", "limpiase"]),
  ],
  "c1r-transform-concessive-connectors": [
    fe("___ las críticas, la película fue un éxito.", "Pese a", "[Despite] the criticism, the film was a success.", "«Pese a» (formal) va seguido de sustantivo o infinitivo; equivale a «a pesar de».", ["A pesar de"]),
  ],
  "concessive-aunque-5": [
    fe("Quiero ___ lo que dije ayer: no me opongo al proyecto, solo al calendario.", "matizar", "I want to [qualify] what I said yesterday: I'm not against the project, only the timetable.", "«Matizar» es precisar o suavizar una afirmación añadiendo detalles o salvedades.", ["precisar", "puntualizar", "aclarar"]),
    fe("Aceptó el contrato, aunque con ___: que se revisara al cabo de un año.", "una salvedad", "He accepted the contract, although with [one proviso]: that it be reviewed after a year.", "«La salvedad» es una excepción o condición que matiza una afirmación general.", ["una condición", "una excepción"]),
    fe("Tras ___ los pros y los contras, decidió quedarse.", "ponderar", "After [weighing up] the pros and cons, she decided to stay.", "«Ponderar» es evaluar con cuidado antes de decidir.", ["sopesar", "valorar", "evaluar", "considerar", "analizar"]),
    fe("Entre los dos informes hay una ___ importante en las cifras.", "discrepancia", "There's a significant [discrepancy] in the figures between the two reports.", "«La discrepancia» es una diferencia de opinión o, como aquí, entre datos que deberían coincidir.", ["diferencia", "divergencia"]),
  ],

  // ---- Nominalización ---------------------------------------------------
  "nominalization-part-1-1": [
    fe("___ la fábrica haya cerrado preocupa a todo el pueblo.", "El hecho de que", "[The fact that] the factory has closed worries the whole town.", "«El hecho de que» convierte la oración en un bloque nominal que funciona como sujeto; la norma más extendida prefiere el subjuntivo («hayan subido»).", ["Que"]),
    fe("El hecho de que no ___ no significa que esté enfadada.", "haya contestado", "The fact that she hasn't [answered] doesn't mean she's angry.", "Dentro de «el hecho de que» se prefiere el subjuntivo; el indicativo («ha contestado») subraya la certeza del hecho.", ["ha contestado", "haya respondido", "ha respondido"]),
    fe("Nos alegra ___ el proyecto haya recibido financiación.", "el hecho de que", "We're pleased about [the fact that] the project has received funding.", "La financiación recibida se nominaliza con «el hecho de que» y funciona como sujeto de «alegrar».", ["que"]),
  ],
  "nominalization-part-1-2": [
    fe("___ no es aprobar, sino entender la materia.", "Lo importante", "[The important thing] isn't passing, but understanding the subject.", "Lo + adjetivo masculino singular convierte la cualidad en un aspecto concreto que funciona como sujeto.", ["Lo más importante", "Lo esencial"]),
    fe("Me sorprendió ___ de su respuesta.", "lo rápido", "I was surprised by [how quick] her answer was.", "«Lo rápido de…» aísla un rasgo concreto de la respuesta sin buscar un sustantivo abstracto («la rapidez»); el adjetivo queda en masculino aunque «respuesta» sea femenino."),
  ],
  "nominalization-part-1-3": [
    fe("La ___ del sistema exige un equipo especializado.", "complejidad", "The [complexity] of the system requires a specialized team.", "Complejo → la complejidad: el sufijo culto -dad forma sustantivos abstractos a partir de adjetivos."),
    fe("El ___ de la nueva sede llevará dos años.", "establecimiento", "The [establishment] of the new headquarters will take two years.", "Establecer → el establecimiento: -miento se combina con verbos de las tres conjugaciones (también nombrar → nombramiento)."),
    fe("Nos impresionó la ___ del paisaje.", "belleza", "We were struck by the [beauty] of the landscape.", "Bello → la belleza: -eza, de raíz patrimonial, nominaliza adjetivos con un matiz más cotidiano.", ["hermosura"]),
  ],
  "c1r-transform-verb-to-noun": [
    fe("El ___ de la economía se ha ralentizado este año.", "crecimiento", "The [growth] of the economy has slowed this year.", "Crecer → el crecimiento (-miento)."),
    fe("La ___ de las emisiones es una prioridad del gobierno.", "reducción", "The [reduction] of emissions is a government priority.", "Reducir → la reducción (-ción).", ["disminución"]),
  ],
  "nominalization-part-2-1": [
    fe("La ___ de la nueva tarifa se aplazó hasta enero.", "aplicación", "The [application] of the new rate was postponed until January.", "La nominalización elimina el agente explícito y da un tono más objetivo e institucional.", ["implantación", "aplicación", "puesta en marcha"]),
    fe("El ___ de las normas de seguridad provocó el accidente.", "incumplimiento", "The [failure to comply with] the safety rules caused the accident.", "Incumplir → el incumplimiento: un verbo personal se convierte en sustantivo para condensar la información."),
    fe("La ___ de las cuentas se encargó a una auditora externa.", "revisión", "The [review] of the accounts was entrusted to an external auditor.", "Revisar → la revisión: el proceso se nominaliza para un tono más formal e impersonal."),
  ],
  "nominalization-part-2-2": [
    fe("La reciente ___ de la inversión extranjera ha generado un debate.", "reducción", "The recent [reduction] in foreign investment has sparked a debate.", "Sustantivo de proceso con complemento introducido por «de».", ["disminución", "caída", "bajada"]),
    fe("___ de esta tendencia no es su magnitud actual, sino su posible aceleración.", "Lo preocupante", "[What is worrying] about this trend isn't its current size but its possible acceleration.", "Lo + adjetivo + de… focaliza un aspecto concreto de la tendencia.", ["Lo inquietante", "Lo alarmante"]),
    fe("El ___ en la toma de decisiones tendrá un costo.", "retraso", "The [delay] in decision-making will have a cost.", "Retrasar → el retraso; «la toma de decisiones» es otra nominalización fija."),
    fe("Un buen informe debe ___ la información para que el público la entienda.", "sintetizar", "A good report must [summarize] the information so the public can understand it.", "«Sintetizar» es expresar algo de forma breve, reuniendo solo lo esencial.", ["resumir", "condensar"]),
  ],
  "c1r-workshop-formal-register": [
    fe("La ___ de personal ha retrasado la apertura del centro.", "falta", "The [lack] of staff has delayed the opening of the centre.", "Registro formal: un sintagma nominal (la falta de personal) sustituye a una oración («como no hay personal…»).", ["escasez", "ausencia", "carencia"]),
  ],
  "c1r-error-hunt-derivation": [
    fe("Envié mi ___ para el puesto de analista.", "solicitud", "I sent my [application] for the analyst position.", "«Application» en este sentido es «solicitud» (o «candidatura»); ✗ «aplicación» es un calco del inglés.", ["candidatura"]),
  ],
  "nominalization-part-2-3": [
    fe("El informe es tan ___ que nadie lo ha terminado de leer.", "farragoso", "The report is so [convoluted] that nobody has finished reading it.", "«Farragoso» se dice de un texto pesado y confuso por acumular demasiados elementos, a menudo por exceso de nominalizaciones.", ["enrevesado", "denso", "confuso", "pesado"]),
    fe("Conviene ___ la información en un solo párrafo.", "condensar", "It's advisable to [condense] the information into a single paragraph.", "«Condensar» es reducir una idea extensa sin perder su contenido esencial.", ["sintetizar", "resumir"]),
    fe("Te pido que ___ la pregunta; no la he entendido.", "reformules", "Please [rephrase] the question; I didn't understand it.", "Pedir que + subjuntivo: «reformules».", ["replantees", "vuelvas a formular"]),
    fe("Déjate de ___ y dime claramente qué ha pasado.", "circunloquios", "Stop [beating around the bush] and tell me clearly what happened.", "«El circunloquio» es un rodeo de palabras para decir algo que podría expresarse más brevemente.", ["rodeos"]),
  ],
  "c1r-text-detective-headlines": [
    fe("«___ de un concejal por cohecho»", "Detención", "«[Arrest] of a councillor for bribery»", "Titular nominal: detener → la detención; el sustantivo de proceso sustituye al verbo.", ["Arresto"]),
    fe("«___ de las exportaciones de aceite»", "Caída", "«[Drop] in olive oil exports»", "Titular nominal: caer → la caída. Equivale a «Las exportaciones de aceite caen».", ["Descenso", "Bajada", "Disminución"]),
  ],

  // ---- Gerundio e infinitivo -------------------------------------------
  "gerund-infinitive-advanced-part-1-1": [
    fe("Bajó las escaleras ___ la barandilla.", "sujetando", "She went down the stairs [holding] the banister.", "Gerundio de simultaneidad, correcto: bajar y sujetar la barandilla ocurren a la vez, en un mismo fotograma.", ["agarrando"]),
    fe("Se cayó de la bicicleta y ___ el brazo.", "se rompió", "He fell off his bike and [broke] his arm.", "Una consecuencia posterior se coordina con «y» + verbo conjugado; ✗ «rompiéndose el brazo» sería un gerundio de posterioridad.", ["se fracturó"]),
  ],
  "gerund-infinitive-advanced-part-1-2": [
    fe("___ en público le cuesta muchísimo.", "Hablar", "[Speaking] in public is really hard for him.", "El infinitivo funciona como sujeto: donde el inglés usa la forma en -ing, el español usa el infinitivo, no el gerundio.", ["El hablar"]),
    fe("No ___ fotos con flash.", "hacer", "Do not [take] flash photos.", "En carteles y avisos, el infinitivo funciona como mandato impersonal, sin destinatario concreto.", ["sacar", "tomar"]),
    fe("___ el cinturón abrochado durante el vuelo.", "Mantener", "[Keep] your seatbelt fastened during the flight.", "Infinitivo de instrucción: formula una norma general, más distante que el imperativo.", ["Llevar"]),
  ],
  "gerund-infinitive-advanced-part-1-3": [
    fe("___ estudiando chino aunque ya no va a clase.", "Sigue", "She's [still] studying Chinese even though she doesn't go to class anymore.", "Seguir + gerundio expresa la prolongación ininterrumpida de una acción ya iniciada.", ["Continúa"]),
    fe("___ de pintar la valla antes de que oscureciera.", "Terminó", "He [finished] painting the fence before it got dark.", "Terminar de + infinitivo marca la conclusión natural y prevista de una tarea.", ["Acabó"]),
  ],
  "c1r-error-hunt-gerund-posteriority": [
    fe("Se busca camarero ___ experiencia.", "que tenga", "Waiter [who has] experience wanted.", "El gerundio no puede funcionar como adjetivo de un sustantivo (✗ secretaria hablando inglés): se usa una oración de relativo, en subjuntivo porque la persona no está identificada.", ["que sepa"]),
  ],
  "gerund-infinitive-advanced-part-2-1": [
    fe("___ toda la mañana limpiando el garaje.", "Llevo", "[I've been] cleaning the garage all morning.", "Llevar + duración + gerundio mide una acción en curso hasta el presente; equivale al «have been -ing» del inglés."),
    fe("Mi abuelo ___ recuperándose poco a poco desde la caída.", "va", "My grandfather [has been] recovering bit by bit since the fall.", "Ir + gerundio añade la idea de progresión gradual hacia un resultado.", ["ha ido"]),
    fe("Mi vecino ___ quejándose del ruido desde hace semanas.", "viene", "My neighbor [has been] complaining about the noise for weeks.", "Venir + gerundio subraya la acumulación y persistencia de una actitud desde el pasado hasta el presente; «lleva» mediría la duración, «está» no marca esa acumulación.", ["lleva"]),
  ],
  "gerund-infinitive-advanced-part-2-2": [
    fe("___ tres meses reformando la cocina.", "Llevo", "[I've been] renovating the kitchen for three months.", "Llevar + duración + gerundio: la acción empezó hace tres meses y continúa."),
    fe("La reforma ___ avanzando poco a poco.", "va", "The renovation [is] moving forward little by little.", "Ir + gerundio: progresión gradual hacia el resultado final.", ["está", "sigue"]),
    fe("No dejes de avisarle cuando ___ de instalar el suelo.", "termines", "Make sure to let him know when you [finish] installing the floor.", "Cuando + subjuntivo para un momento futuro; terminar de + infinitivo para el final de una tarea.", ["acabes"]),
    fe("Se observa un aumento ___ de los precios.", "paulatino", "A [gradual] rise in prices can be seen.", "«Paulatino» significa que ocurre poco a poco, de forma lenta y gradual.", ["gradual", "progresivo"]),
  ],
  "c1r-transform-infinitive-subject": [
    fe("___ en lugar fresco y seco.", "Conservar", "[Store] in a cool, dry place.", "Infinitivo de instrucción, típico de etiquetas y prospectos: se dirige a cualquier lector. El imperativo «Conserva» interpelaría a una persona concreta.", ["Guardar", "Almacenar"]),
  ],
  "gerund-infinitive-advanced-part-2-3": [
    fe("___, la inversión compensa.", "A la larga", "[In the long run], the investment pays off.", "«A la larga»: con el paso del tiempo, al final.", ["A largo plazo", "Con el tiempo"]),
    fe("Las negociaciones se ___ mañana a las diez.", "reanudarán", "The negotiations [will resume] tomorrow at ten.", "«Reanudar» es continuar algo que se había interrumpido.", ["retomarán", "reanudan", "retoman"]),
    fe("Conviene preparar las preguntas ___.", "de antemano", "It's a good idea to prepare the questions [in advance].", "«De antemano»: con anterioridad, antes de que ocurra algo.", ["con antelación", "por adelantado", "con anticipación"]),
    fe("El uso del casco es ___ en toda la obra.", "preceptivo", "Wearing a helmet is [mandatory] throughout the construction site.", "«Preceptivo»: obligatorio por estar ordenado por una norma.", ["obligatorio"]),
  ],

  // ---- Pasiva y se --------------------------------------------------------
  "passive-impersonal-mastery-1": [
    fe("El acueducto ___ por los romanos en el siglo I.", "fue construido", "The aqueduct [was built] by the Romans in the first century.", "Pasiva perifrástica con agente explícito («por los romanos»): ser en pretérito + participio concordado con «acueducto» (masculino singular).", ["fue levantado", "fue edificado"]),
    fe("La propuesta ___ por la mayoría de los socios.", "fue rechazada", "The proposal [was rejected] by most of the members.", "Ser + participio, con el participio en femenino porque concuerda con el sujeto paciente «la propuesta», no con el agente «la mayoría».", ["ha sido rechazada"]),
    fe("Los heridos ___ por los servicios de emergencia.", "fueron atendidos", "The injured [were treated] by the emergency services.", "Con agente explícito se usa ser + participio; el participio concuerda en masculino plural con «los heridos». Con «se» no podría aparecer «por los servicios de emergencia».", ["han sido atendidos"]),
  ],
  "passive-impersonal-mastery-2": [
    fe("En esta tienda ___ ropa de segunda mano.", "se vende", "Second-hand clothes [are sold] in this shop.", "Se pasivo: el verbo concuerda con el sujeto paciente. «Ropa» es un sustantivo singular (aunque en inglés sea «clothes»), así que «se vende».", ["se compra"]),
    fe("Esta mañana ___ los resultados de las elecciones.", "se publicaron", "The election results [were published] this morning.", "Se pasivo en plural: el verbo concuerda con el sujeto paciente «los resultados», aunque vaya detrás.", ["se han publicado", "se dieron a conocer", "se han dado a conocer"]),
    fe("El mes pasado ___ una nueva línea de metro.", "se inauguró", "A new metro line [was opened] last month.", "Se pasivo en singular, concordado con «una nueva línea»: es la opción natural cuando el agente no interesa; «fue inaugurada» sonaría más formal.", ["se abrió"]),
  ],
  "c1r-transform-three-passives": [
    fe("___ que el nuevo aeropuerto abra en primavera.", "Se prevé", "[It is expected] that the new airport will open in spring.", "Se impersonal con verbo de previsión: va en singular porque lo que sigue es una oración («que el aeropuerto abra»), y esa subordinada va en subjuntivo por tratarse de algo futuro y no comprobado.", ["Se espera", "Está previsto"]),
  ],
  "c1r-error-hunt-se-agreement": [
    fe("___ habitaciones para estudiantes.", "Se alquilan", "Rooms [for rent] for students.", "Se pasivo: el verbo concuerda con la cosa (habitaciones), así que va en plural; ✗ «se alquila habitaciones»."),
  ],
  "passive-impersonal-mastery-3": [
    fe("___ a los pasajeros del retraso por megafonía.", "Se informó", "The passengers [were informed] of the delay over the loudspeaker.", "Complemento de persona con «a» (a los pasajeros): se impersonal, siempre en singular aunque sean muchos pasajeros.", ["Se avisó", "Se ha informado", "Se ha avisado"]),
    fe("___ a dos expertos en ciberseguridad para el nuevo proyecto.", "Se contrató", "Two cybersecurity experts [were hired] for the new project.", "Personas concretas con «a»: se impersonal en singular. Sin «a» («se contrataron dos expertos») sería pasiva refleja, posible con personas indeterminadas; con «a» el plural es un error.", ["Se ha contratado", "Se fichó"]),
  ],
  "passive-impersonal-mastery-4": [
    fe("El museo ___ en 1902 por un arquitecto catalán.", "fue construido", "The museum [was built] in 1902 by a Catalan architect.", "Proceso con agente y fecha: ser + participio. «Está construido» describiría solo el estado actual del edificio y no admitiría «en 1902 por…».", ["fue edificado", "fue levantado"]),
    fe("Ya puedes pasar: la habitación está ___.", "preparada", "You can come in now: the room is [ready].", "Estado resultante: estar + participio concordado con «habitación» (femenino singular). No importa quién la preparó ni cuándo.", ["lista", "arreglada", "ordenada"]),
    fe("Lo siento, este asiento ___ ocupado.", "está", "Sorry, this seat [is] taken.", "Estado: estar + participio. «Es ocupado» narraría un proceso (alguien lo ocupa) y aquí solo se describe la situación actual."),
  ],
  "passive-impersonal-mastery-5": [
    fe("El nuevo puente ___ ayer por las autoridades municipales.", "fue inaugurado", "The new bridge [was opened] yesterday by the municipal authorities.", "Pasiva perifrástica con agente explícito, propia del registro periodístico.", ["fue abierto"]),
    fe("Durante la ceremonia, ___ a varios vecinos a cruzar el puente.", "se invitó", "During the ceremony, several residents [were invited] to cross the bridge.", "Se impersonal: con complemento de persona introducido por «a», el verbo va en singular."),
    fe("___ cámaras de seguridad a lo largo de todo el recorrido.", "Se instalaron", "Security cameras [were installed] along the whole route.", "Se pasivo: el verbo concuerda en plural con «cámaras».", ["Se colocaron", "Se pusieron"]),
    fe("Los responsables afirmaron que ___ el impacto de la obra.", "se evaluará", "Those in charge stated that the impact of the project [will be assessed].", "Se pasivo en futuro, concordando con «el impacto». En estilo indirecto también vale el condicional («se evaluaría»).", ["se evaluaría", "se analizará", "se valorará", "se estudiará"]),
  ],
  "passive-impersonal-mastery-6": [
    fe("La reforma ___ en 2020.", "se llevó a cabo", "The reform [was carried out] in 2020.", "«Llevarse a cabo» (realizarse) es muy frecuente en informes con se pasivo.", ["se realizó", "se hizo", "se efectuó"]),
    fe("El informe ___ la falta de recursos del hospital.", "pone de relieve", "The report [highlights] the hospital's lack of resources.", "«Poner de relieve»: destacar algo para que se note su importancia.", ["destaca", "subraya", "pone de manifiesto", "resalta", "evidencia"]),
    fe("Las obras, que estaban ___ desde marzo, se retomaron en otoño.", "paralizadas", "The works, which had been [at a standstill] since March, resumed in the autumn.", "Estar + participio (paralizadas) describe el estado resultante; concuerda en género y número con «las obras».", ["detenidas", "paradas", "suspendidas"]),
    fe("Buscamos al candidato ___ para el puesto.", "idóneo", "We are looking for the [ideal] candidate for the position.", "«Idóneo»: perfectamente adecuado para un propósito.", ["ideal", "adecuado", "más adecuado", "perfecto"]),
  ],
  "c1r-contrast-se-functions": [
    fe("Con las prisas ___ las llaves dentro del coche.", "se me olvidaron", "In the rush [I left] the keys in the car (by accident).", "Se accidental: la cosa («las llaves», plural) es el sujeto y el verbo concuerda con ella; «me» marca a la persona afectada y presenta el olvido como involuntario.", ["se me quedaron"]),
  ],

  // ---- Estilo indirecto libre --------------------------------------------
  "free-indirect-style-part-1-1": [
    fe("Andrés colgó el teléfono. ¿Por qué no lo ___ nadie?", "entendía", "Andrés hung up the phone. Why did nobody [understand] him?", "Estilo indirecto libre: la pregunta del personaje («¿por qué no me entiende nadie?») va sin verbo introductor ni comillas, en tercera persona y con el presente desplazado al imperfecto.", ["comprendía"]),
    fe("Abrió la nevera. Otra vez vacía; ¿quién se ___ comido todo?", "había", "She opened the fridge. Empty again; who [had] eaten everything?", "El perfecto del pensamiento («¿quién se ha comido todo?») pasa a pluscuamperfecto: la pregunta conserva la voz del personaje pero se integra en el pasado del relato."),
    fe("Se preguntó ___ alguien había leído su carta.", "si", "She wondered [whether] anyone had read her letter.", "Estilo indirecto tradicional: una pregunta de sí o no («¿alguien ha leído mi carta?») se introduce con «si» tras el verbo «preguntarse»; el estilo indirecto libre suprimiría ese nexo."),
  ],
  "free-indirect-style-part-1-2": [
    fe("No ___ a tiempo, lo sabía de sobra.", "llegarían", "They wouldn't [arrive] in time, she knew it only too well.", "Futuro del pensamiento («no llegarán») → condicional en el relato en pasado, sin verbo introductor que lo anuncie."),
    fe("Ya no ___ nada que hacer; era demasiado tarde.", "había", "There [was] nothing left to do; it was too late.", "El presente del pensamiento («ya no hay nada que hacer») pasa a imperfecto en el estilo indirecto libre, igual que «es» → «era»."),
    fe("El lunes ___ a empezar de cero, se prometió.", "volvería", "On Monday he [would start] again from scratch, he promised himself.", "Futuro del personaje («volveré a empezar») → condicional del relato. El verbo introductor puede aparecer al final como inciso sin romper el efecto."),
  ],
  "free-indirect-style-part-1-3": [
    fe("¡Qué ___ había sido al creerle!", "tonta", "How [stupid] she had been to believe him!", "La exclamación con «qué» + adjetivo valorativo es la voz del personaje, no la del narrador; el adjetivo concuerda con ella (femenino).", ["ingenua", "estúpida", "boba"]),
    fe("¿Por qué demonios ___ aceptado aquella invitación?", "había", "Why on earth [had she] accepted that invitation?", "La interrogación retórica («por qué demonios») revela el reproche interno; el pasado del pensamiento («¿por qué he aceptado?») se desplaza a pluscuamperfecto."),
    fe("___ entendía por qué nadie quería hablar de aquello.", "Ahora", "[Now] she understood why nobody wanted to talk about that.", "El deíctico «ahora» (y no el «entonces» del narrador) sitúa la perspectiva en el personaje, aunque el verbo esté en imperfecto narrativo."),
  ],
  "c1r-transform-three-styles": [
    fe("Se preguntó por qué nadie le ___ la verdad.", "había dicho", "She wondered why nobody [had told] her the truth.", "Estilo indirecto: el perfecto del original («¿por qué nadie me ha dicho la verdad?») pasa a pluscuamperfecto tras el verbo introductor en pasado, y «me» pasa a «le».", ["había contado", "decía", "contaba"]),
    fe("Dijo que no ___ volver a ese lugar.", "pensaba", "He said he wasn't [planning] to go back to that place.", "Estilo indirecto: «no pienso volver» → «no pensaba volver».", ["quería", "iba a"]),
  ],
  "free-indirect-style-part-2-1": [
    fe("Le escribió: «Te ___ de menos cada día».", "echo", "She wrote to him: \"I [miss] you every day.\"", "Estilo directo: entre comillas se conservan la persona y el tiempo originales (yo, presente: «te echo de menos»)."),
    fe("Le escribió que lo ___ de menos cada día.", "echaba", "She wrote to him that she [missed] him every day.", "Estilo indirecto: tras un verbo introductor en pasado, el presente pasa a imperfecto (echo → echaba) y «te» pasa a «lo» (o «le»)."),
    fe("¿Y él? Él ni siquiera ___ sus cartas. ¡Qué cruel!", "contestaba", "And him? He didn't even [answer] her letters. How cruel!", "Estilo indirecto libre: sin verbo introductor, con la pregunta y la exclamación de ella; el presente del pensamiento («ni siquiera contesta») pasa a imperfecto.", ["respondía"]),
  ],
  "free-indirect-style-part-2-2": [
    fe("Qué absurdo ___ todo aquello, pensándolo bien.", "había sido", "How absurd it all [had been], come to think of it.", "El pasado del pensamiento se desplaza al pluscuamperfecto en el marco narrativo en pasado."),
    fe("Nadie la ___ de verdad en toda la tarde.", "había escuchado", "Nobody [had] really [listened] to her all afternoon.", "Pluscuamperfecto: anterioridad respecto al momento narrado."),
    fe("Tal vez mañana las cosas se ___ de otra manera.", "verían", "Perhaps tomorrow things [would look] different.", "Futuro del pensamiento («se verán») → condicional en la narración."),
    fe("Le hizo un reproche ___ que nadie más percibió.", "velado", "She made a [veiled] reproach that nobody else noticed.", "«Velado»: oculto o disimulado, no expresado abiertamente.", ["disimulado", "encubierto"]),
  ],
  "c1r-workshop-write-free-indirect": [
    fe("¡Por fin viernes! ¿Qué ___ a hacer el fin de semana?", "iba", "Friday at last! What [was she going] to do at the weekend?", "Monólogo «¿qué voy a hacer?» → estilo indirecto libre «¿qué iba a hacer?»: «ir a» pasa al imperfecto y se conservan la exclamación y la pregunta del personaje."),
  ],
  "free-indirect-style-part-2-3": [
    fe("La muerte de su padre fue el ___ de su vida.", "punto de inflexión", "Her father's death was the [turning point] in her life.", "«El punto de inflexión»: el momento en que algo cambia de dirección de forma decisiva."),
    fe("En sus ojos se podía ___ cierta tristeza.", "entrever", "In his eyes one could [glimpse] a certain sadness.", "«Entrever»: adivinar o intuir algo que no se muestra con claridad.", ["intuir", "adivinar", "percibir", "vislumbrar"]),
    fe("Habla de su pasado con un ___ sorprendente.", "desapego", "He talks about his past with surprising [detachment].", "«El desapego»: falta de implicación afectiva.", ["distanciamiento", "distancia"]),
    fe("El protagonista es un ___ del propio autor.", "trasunto", "The protagonist is a [thinly veiled portrait] of the author himself.", "«El trasunto»: el personaje que representa a una persona real, a menudo al propio autor.", ["alter ego"]),
  ],

  // ---- Por y para ---------------------------------------------------------
  "por-para-precision-1": [
    fe("Esta semana hago el turno de noche ___ Marcos, que está de viaje.", "por", "This week I'm doing the night shift [in place of] Marcos, who is away.", "Hacer algo por alguien: ocupar su lugar mientras no está. «Para Marcos» diría que él es el beneficiario o el jefe.", ["en lugar de", "en vez de"]),
    fe("Mi padre trabajó cuarenta años ___ la misma compañía de seguros.", "para", "My father worked [for] the same insurance company for forty years.", "Trabajar para una empresa: relación laboral estable con el empleador. «Por la compañía» indicaría sustitución o motivación.", ["en"]),
    fe("Como el presidente estaba enfermo, el vicepresidente habló ___ él en la rueda de prensa.", "por", "As the president was ill, the vice-president spoke [on his behalf] at the press conference.", "Hablar por alguien: en su lugar o en su representación, igual que firmar o trabajar por alguien.", ["en lugar de", "en vez de"]),
  ],
  "por-para-precision-2": [
    fe("Lo multaron ___ aparcar en una plaza reservada.", "por", "They fined him [for] parking in a reserved space.", "«Por» + infinitivo introduce la causa, ya ocurrida, de la multa. «Para aparcar» sería su objetivo."),
    fe("Se instalaron cámaras ___ reducir los robos en el aparcamiento.", "para", "Cameras were installed [to] reduce thefts in the car park.", "«Para» + infinitivo introduce la finalidad, todavía por cumplir, de la instalación.", ["con el fin de", "a fin de", "con objeto de"]),
    fe("La obra se paralizó ___ falta de permisos.", "por", "The building work was halted [due to] a lack of permits.", "«Por» + sustantivo sin artículo expresa la causa de algo ya ocurrido (por falta de, por impago de, por enfermedad)."),
  ],
  "c1r-error-hunt-por-para-c1": [
    fe("Queda mucho ___.", "por hacer", "There is still a lot [to do].", "Quedar / estar + por + infinitivo: algo que todavía no se ha realizado.", ["que hacer"]),
  ],
  "por-para-precision-3": [
    fe("La traducción tiene que estar terminada ___ el día 15.", "para", "The translation has to be finished [by] the 15th.", "«Para» + fecha marca el plazo límite: como muy tarde ese día."),
    fe("Viví en Lima ___ unos meses cuando era estudiante.", "por", "I lived in Lima [for] a few months when I was a student.", "«Por» + periodo indica una duración aproximada, sin fecha exacta.", ["durante"]),
    fe("¿Puedes tenerme el presupuesto ___ mañana a primera hora?", "para", "Can you have the quote ready for me [by] first thing tomorrow?", "Plazo límite: «para». Fíjate en que el «por» de «por la mañana» es otra cosa: solo sitúa en una parte del día."),
  ],
  "por-para-precision-4": [
    fe("El proyecto sigue ___: nadie lo ha mirado todavía.", "por revisar", "The project is still [to be reviewed]: nobody has looked at it yet.", "Estar / seguir / quedar por + infinitivo: la acción todavía no se ha realizado, está pendiente.", ["sin revisar"]),
    fe("Guarda el recibo ___ tienes que devolver el regalo.", "por si acaso", "Keep the receipt [in case] you have to return the present.", "«Por si (acaso)» + indicativo previene una eventualidad posible; nunca se forma con «para».", ["por si"]),
    fe("Se me rompió el móvil y, ___, perdí las llaves.", "para colmo", "My phone broke and, [to top it all], I lost my keys.", "«Para colmo» añade el último agravante de una serie, a menudo con ironía.", ["encima", "para colmo de males", "por si fuera poco"]),
  ],
  "c1r-mission-business-email-por-para": [
    fe("Le enviaremos el presupuesto ___ correo electrónico.", "por", "We'll send you the quote [by] email.", "«Por» indica el medio: por correo, por teléfono, por escrito."),
  ],
  "c1r-contrast-idiomatic-por-para": [
    fe("___, los bancos cierran a las dos los viernes.", "Por lo general", "[As a rule], banks close at two on Fridays.", "«Por lo general» (= normalmente) es una locución fija con «por»; no se deduce de la regla causa / finalidad, se aprende entera.", ["Normalmente", "En general", "Generalmente"]),
  ],
  "por-para-precision-5": [
    fe("¿___ tendremos lista la propuesta final?", "Para cuándo", "[By when] will we have the final proposal ready?", "«¿Para cuándo?» pregunta por un plazo límite."),
    fe("Lo firmé yo ___ Marta, que sigue de baja.", "por", "I signed it [on behalf of] Marta, who is still on sick leave.", "Firmar por alguien: en su lugar o en su representación.", ["en nombre de", "en lugar de", "en representación de"]),
    fe("Firmó ___ la empresa.", "en nombre de", "She signed [on behalf of] the company.", "«En nombre de»: en representación de otra persona o entidad.", ["en representación de", "por"]),
    fe("Decidieron ___ el contrato un año más.", "prorrogar", "They decided to [extend] the contract for another year.", "«Prorrogar»: alargar la duración o el plazo de algo.", ["prolongar", "ampliar", "renovar", "alargar"]),
  ],
  "por-para-precision-6": [
    fe("Envíe la documentación el viernes ___.", "a más tardar", "Send the documents by Friday [at the latest].", "«A más tardar» fija la fecha u hora límite.", ["como muy tarde", "como máximo"]),
    fe("La empresa decidió ___ el contrato por incumplimiento.", "rescindir", "The company decided to [terminate] the contract for breach.", "«Rescindir»: dejar sin efecto un contrato.", ["resolver", "anular", "cancelar"]),
    fe("El acuerdo es ___ para ambas partes.", "vinculante", "The agreement is [binding] on both parties.", "«Vinculante»: que obliga legalmente a cumplir algo.", ["obligatorio"]),
    fe("Asistió a la reunión ___ asesora externa.", "en calidad de", "She attended the meeting [as] an external advisor.", "«En calidad de»: con el carácter o la función de.", ["como"]),
  ],
  "c1r-text-detective-contract": [
    fe("El contrato podrá rescindirse ___ cualquiera de las partes.", "por", "The contract may be terminated [by] either party.", "«Por» introduce el agente de la pasiva (rescindirse por las partes)."),
  ],
  "c1r-spiral-prepositions-register": [
    fe("La propuesta fue presentada ___ el equipo técnico.", "por", "The proposal was submitted [by] the technical team.", "Pasiva perifrástica: el agente va con «por»."),
  ],

  // ---- Ser, estar y haber -------------------------------------------------
  "ser-estar-haber-limits-part-1-1": [
    fe("El congreso ___ en el palacio de exposiciones.", "es", "The conference [is] at the exhibition centre.", "Un congreso es un evento: se localiza con «ser» (= tiene lugar, se celebra), no con «estar».", ["será"]),
    fe("El palacio de exposiciones ___ junto a la estación.", "está", "The exhibition centre [is] next to the station.", "Un edificio es un lugar físico: su ubicación se expresa con «estar».", ["se encuentra"]),
    fe("¿Dónde ___ el funeral? No sé si en la iglesia o en el tanatorio.", "es", "Where [is] the funeral? I don't know if it's at the church or at the funeral home.", "Un funeral es un acto, un evento: se pregunta por su lugar con «ser».", ["será"]),
  ],
  "ser-estar-haber-limits-part-1-2": [
    fe("Cuando empezaron a hablar de su divorcio delante de todos, ___ muy violenta.", "estaba", "When they started talking about her divorce in front of everyone, she [was] very uncomfortable.", "Incomodidad en una situación concreta: «estar violento/a» (sobre todo en España). «Era violenta» la describiría como agresiva.", ["estuvo", "se puso"]),
    fe("Mi hermana ___ muy interesada en hacer un máster en el extranjero.", "está", "My sister [is] very interested in doing a master's abroad.", "Interés por algo concreto: «estar interesado/a en». «Es interesada» sería un juicio sobre su carácter."),
    fe("No le pidas favores: ___ muy interesado y siempre quiere algo a cambio.", "es", "Don't ask him for favours: he [is] very self-serving and always wants something in return.", "Rasgo estable y peyorativo: «ser interesado» (actuar solo por el propio beneficio)."),
  ],
  "ser-estar-haber-limits-part-1-3": [
    fe("___ un problema con el pedido de esta semana.", "Hay", "[There's] a problem with this week's order.", "«Hay» introduce una entidad nueva, con artículo indefinido."),
    fe("El problema ___ en el envío, no en la fábrica.", "está", "The problem [is] in the shipping, not in the factory.", "«Estar» localiza una entidad ya identificada, con artículo definido."),
  ],
  "c1r-contrast-evaluative-estar": [
    fe("¡Qué alto ___ tu hijo!", "está", "How tall your son [has gotten]!", "Estar + adjetivo de cualidad expresa la percepción del hablante en el momento, a menudo sorpresa ante un cambio.", ["se ha puesto"]),
  ],
  "c1r-error-hunt-location-events": [
    {"type": "translate", "direction": "en-es", "prompt": "Pasa la frase al pretérito indefinido.", "source": "La boda es en una finca a las afueras y los invitados están en el jardín.", "answer": "La boda fue en una finca a las afueras y los invitados estuvieron en el jardín.", "altAnswers": ["La boda fue en una finca a las afueras y los invitados estaban en el jardín."], "explanation": "En pasado el evento sigue localizándose con ser: «fue en una finca», nunca «estuvo». Los invitados son personas y conservan estar: «estuvieron» (o «estaban», si describes la escena)."},
  ],
  "ser-estar-haber-limits-part-2-1": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Este cocinero está muy bueno: lleva treinta años ganando premios.", "answer": "Este cocinero es muy bueno: lleva treinta años ganando premios.", "explanation": "Su calidad profesional es estable y se demuestra con treinta años de premios: ser. Además, «está bueno» referido a una persona se entiende como «es atractivo», un sentido que aquí no se busca."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia el juicio general por una valoración de lo que acabas de probar hoy.", "source": "Este café es bueno.", "answer": "Hoy este café está bueno.", "altAnswers": ["Este café está bueno hoy.", "Hoy el café está bueno.", "El café está bueno hoy."], "explanation": "Al pasar de la calidad general («es bueno») a la experiencia concreta de hoy, ser se convierte en estar."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia al registro formal y deductivo de un informe.", "source": "Está claro que el presupuesto no alcanza.", "answer": "Es claro que el presupuesto no alcanza.", "altAnswers": ["Es evidente que el presupuesto no alcanza.", "Resulta evidente que el presupuesto no alcanza.", "Resulta claro que el presupuesto no alcanza."], "explanation": "«Es claro que» es la variante formal y deductiva, propia de la escritura; «está claro que» es la habitual en la conversación. En un informe también valen «resulta evidente que» o «es evidente que»."},
    {"type": "multiple-choice", "question": "«La mermelada de mi abuela ___ siempre buenísima, pero la de este año ___ un poco ácida.»", "options": ["es … está", "está … es", "es … es", "está … está"], "correctIndex": 0, "explanation": "«Siempre» habla de la calidad habitual de la mermelada: ser («es buenísima»). «La de este año» es lo que se ha probado ahora: estar («está un poco ácida»). Invertirlos convertiría la excepción en la norma."},
  ],
  "ser-estar-haber-limits-part-2-2": [
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «es» por un verbo más formal.", "source": "La gala de los premios es en el Teatro Real.", "answer": "La gala de los premios se celebra en el Teatro Real.", "altAnswers": ["La gala de los premios tiene lugar en el Teatro Real."], "explanation": "La gala es un evento: el «es» de localización se sustituye por «se celebra» o «tiene lugar», no por «se halla», que es el equivalente de estar."},
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «están» por un verbo más formal.", "source": "Los archivos históricos están en el sótano del ayuntamiento.", "answer": "Los archivos históricos se hallan en el sótano del ayuntamiento.", "altAnswers": ["Los archivos históricos se encuentran en el sótano del ayuntamiento."], "explanation": "Los archivos son objetos: el «están» de ubicación se sustituye por «se hallan» o «se encuentran». «Se celebran» solo vale para eventos."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "El congreso se halla en Sevilla este año.", "answer": "El congreso se celebra en Sevilla este año.", "altAnswers": ["Este año el congreso se celebra en Sevilla.", "El congreso tiene lugar en Sevilla este año.", "Este año el congreso tiene lugar en Sevilla.", "El congreso es en Sevilla este año."], "explanation": "Un congreso es un evento: se localiza con ser o con su equivalente culto «celebrarse/tener lugar». «Hallarse» es el equivalente de estar y presenta el congreso como un objeto que ocupa un lugar."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "El portavoz calificó a la reforma de improvisada.", "answer": "El portavoz calificó la reforma de improvisada.", "altAnswers": ["El portavoz calificó la reforma como improvisada."], "explanation": "«Calificar algo de + adjetivo»: cuando el complemento directo es una cosa, no lleva la «a» personal. Con una persona sí: «calificó al ministro de imprudente»."},
  ],
  "c1r-contrast-hybrid-cases": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "No soy seguro de que el museo abra los lunes.", "answer": "No estoy seguro de que el museo abra los lunes.", "altAnswers": ["No estoy segura de que el museo abra los lunes."], "explanation": "Expresar convicción o duda es describir un estado mental: «estar seguro de que». «Ser seguro» se dice de lugares o acciones sin riesgo («es seguro viajar allí»)."},
  ],
  "c1r-transform-haber-estar-tener": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "En la sala habían más sillas de las necesarias.", "answer": "En la sala había más sillas de las necesarias.", "explanation": "«Haber» existencial es impersonal: se usa siempre en singular, aunque lo que existe sea plural («había más sillas»). «Habían sillas» es un error frecuente, también en hablantes nativos, pero la norma culta lo rechaza."},
  ],
  "ser-estar-haber-limits-part-2-3": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con un adjetivo en -al.", "source": "Es un problema que depende de la coyuntura, no de la estructura.", "answer": "Es un problema coyuntural, no estructural.", "altAnswers": ["Se trata de un problema coyuntural, no estructural."], "explanation": "El sufijo -al condensa «que depende de / relativo a» + sustantivo: coyuntura → coyuntural, estructura → estructural."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Este libro se trata de la guerra civil.", "answer": "Este libro trata de la guerra civil.", "altAnswers": ["Este libro trata sobre la guerra civil.", "Este libro habla de la guerra civil."], "explanation": "«Se trata de» es impersonal: no admite sujeto («Se trata de un libro sobre la guerra»). Si hay sujeto, se usa «tratar de» o «tratar sobre» sin «se»."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "La incertidumbre es inherente de cualquier negociación.", "answer": "La incertidumbre es inherente a cualquier negociación.", "explanation": "«Inherente» rige la preposición «a»: algo es inherente a otra cosa, igual que «propio de» rige «de». No se mezclan."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con un adjetivo en -al.", "source": "Fue un éxito que no es normal, fuera de lo común.", "answer": "Fue un éxito excepcional.", "altAnswers": ["Fue un éxito excepcional, fuera de lo común."], "explanation": "Excepción → excepcional: el sufijo -al convierte el sustantivo en adjetivo. Es el mismo patrón de circunstancia → circunstancial."},
  ],
  "c1r-mission-real-estate-listing": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "El chalé es rodeado de pinos y está de estilo mediterráneo.", "answer": "El chalé está rodeado de pinos y es de estilo mediterráneo.", "explanation": "Dos verbos cruzados: «rodeado» es un participio que describe la situación resultante (estar), mientras que el estilo clasifica la vivienda (ser: «es de estilo mediterráneo»)."},
  ],

  // ---- Verbos preposicionales --------------------------------------------
  "prepositional-verbs-part-1-1": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "El taller consiste de tres sesiones de dos horas.", "answer": "El taller consiste en tres sesiones de dos horas.", "explanation": "«Consistir» rige siempre «en». «Consistir de» es un calco del inglés consist of."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia el complemento por una oración con «que»: «… que tú me ayudes».", "source": "Cuento con tu ayuda.", "answer": "Cuento con que me ayudes.", "altAnswers": ["Cuento con que tú me ayudes."], "explanation": "La preposición del régimen se mantiene delante de que: «contar con que» + subjuntivo, porque se trata de algo que se espera. Quitarla («cuento que me ayudes») es queísmo."},
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «mi hermano» por «yo» y haz los cambios necesarios.", "source": "Mis padres siempre han contado con mi hermano.", "answer": "Mis padres siempre han contado conmigo.", "explanation": "Tras «con», el pronombre de primera persona se funde con la preposición: «conmigo» (y «contigo» para tú). «Con mí» no existe."},
  ],
  "prepositional-verbs-part-1-2": [
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «encontré» por «dar con».", "source": "Por fin encontré el restaurante que me recomendaste.", "answer": "Por fin di con el restaurante que me recomendaste.", "explanation": "«Dar con» equivale a «encontrar tras buscar» y exige «con» delante de lo encontrado; el verbo se conjuga como dar: «di con»."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Siempre puedes contar en tus amigos.", "answer": "Siempre puedes contar con tus amigos.", "explanation": "«Contar» con el sentido de confiar en el apoyo de alguien rige «con». «Contar en» es un calco de count on."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia «enfrentarse con» por «afrontar».", "source": "El Gobierno tendrá que enfrentarse con una crisis energética.", "answer": "El Gobierno tendrá que afrontar una crisis energética.", "altAnswers": ["El gobierno tendrá que afrontar una crisis energética."], "explanation": "«Afrontar» es transitivo: el problema pasa a ser complemento directo, sin preposición. Solo el pronominal «enfrentarse» necesita «con» o «a»."},
  ],
  "prepositional-verbs-part-1-3": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Quedamos que tú traerías las bebidas.", "answer": "Quedamos en que tú traerías las bebidas.", "altAnswers": ["Quedamos en que traerías las bebidas."], "explanation": "«Quedar» con el sentido de acordar rige «en», también delante de que: «quedamos en que…». Suprimir la preposición es queísmo."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia el infinitivo por una oración con «que»: «… que nosotros pagáramos».", "source": "El director insistió en pagar la cena.", "answer": "El director insistió en que nosotros pagáramos la cena.", "altAnswers": ["El director insistió en que pagáramos la cena.", "El director insistió en que nosotros pagásemos la cena.", "El director insistió en que pagásemos la cena."], "explanation": "Al cambiar el sujeto de la acción, el infinitivo pasa a oración con que, pero la preposición «en» se queda. Como es una petición en pasado, el verbo va en imperfecto de subjuntivo."},
  ],
  "prepositional-verbs-part-1-mastery-check": [
    fe("Tuvo que ___ las críticas de todo el equipo.", "enfrentarse con", "He had to [face up to] the criticism from the whole team.", "Enfrentarse con (o a): sostener una confrontación directa.", ["enfrentarse a", "afrontar", "hacer frente a"]),
  ],
  "c1r-sort-prepositional-verbs": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Mi hermano no se atreve de pedirle el coche a mi padre.", "answer": "Mi hermano no se atreve a pedirle el coche a mi padre.", "explanation": "«Atreverse» rige «a» ante infinitivo, como los demás verbos que apuntan hacia una acción (negarse a, decidirse a). «De» es un cruce con «tratar de»."},
  ],
  "c1r-contrast-meaning-by-preposition": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Esta tarde he quedado en Marta para tomar un café.", "answer": "Esta tarde he quedado con Marta para tomar un café.", "explanation": "Citarse con una persona es «quedar con»; «quedar en» significa acordar algo («quedamos en vernos a las cinco»)."},
  ],
  "prepositional-verbs-part-2-1": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "La duración del viaje depende en el tráfico.", "answer": "La duración del viaje depende del tráfico.", "explanation": "«Depender» rige «de» («de + el» = «del»). «Depender en» es un calco del inglés depend on."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia «depender de» por «basarse en».", "source": "Su decisión depende de los resultados del análisis.", "answer": "Su decisión se basa en los resultados del análisis.", "explanation": "Al cambiar de verbo cambia también el régimen: «depender de», pero «basarse en». Arrastrar la «de» al nuevo verbo es el error de analogía interna."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "El guion se basa de una novela poco conocida.", "answer": "El guion se basa en una novela poco conocida.", "explanation": "«Basarse» rige «en». La «de» se copia de «depender de», un verbo de sentido parecido: es un error de analogía interna."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia la pregunta para pedir una opinión con «pensar de».", "source": "¿Piensas mucho en tu nuevo trabajo?", "answer": "¿Qué piensas de tu nuevo trabajo?", "explanation": "Para pedir una opinión se usa «¿qué piensas de…?»; «pensar en» solo pregunta si algo ocupa tu mente."},
  ],
  "prepositional-verbs-part-2-2": [
    {"type": "translate", "direction": "en-es", "prompt": "Transforma el verbo en sustantivo: «La insistencia de su jefe…».", "source": "Su jefe insiste en la puntualidad y eso agobia al equipo.", "answer": "La insistencia de su jefe en la puntualidad agobia al equipo.", "altAnswers": ["La insistencia de su jefe en la puntualidad agobia a todo el equipo."], "explanation": "El sustantivo «insistencia» conserva la preposición del verbo: insistir en → la insistencia en. El sujeto del verbo pasa a complemento con «de»: «de su jefe»."},
    {"type": "fill-blank", "prompt": "Completa con la preposición que hereda el sustantivo (interesarse por).", "sentence": "Su interés ___ la arqueología empezó en un viaje a México.", "answer": "por", "explanation": "El sustantivo hereda el régimen del verbo: interesarse por → el interés por. «Interés en» también se oye, pero con este patrón no te equivocas."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Es propensa de resfriarse en cuanto cambia el tiempo.", "answer": "Es propensa a resfriarse en cuanto cambia el tiempo.", "explanation": "«Propenso» rige «a», como indica la propia entrada del vocabulario («propenso a»). Se aprende con su preposición, en bloque."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "A fuerza repetir los ejercicios, acabó haciéndolos sin pensar.", "answer": "A fuerza de repetir los ejercicios, acabó haciéndolos sin pensar.", "explanation": "La locución es «a fuerza de» + infinitivo o sustantivo: la «de» forma parte de ella y no se puede omitir."},
  ],
  "c1r-error-hunt-interference": [
    {"type": "translate", "direction": "en-es", "prompt": "Cambia «gustar mucho» por «enamorarse».", "source": "Nos gustó mucho Lisboa desde el primer día.", "answer": "Nos enamoramos de Lisboa desde el primer día.", "explanation": "Con «enamorarse», lo que gusta deja de ser el sujeto y pasa a complemento con «de»: «nos enamoramos de Lisboa». «Enamorarse con» calca el inglés fall in love with."},
  ],
  "c1r-transform-queismo-dequeismo": [
    {"type": "translate", "direction": "en-es", "prompt": "Cambia «creo» por «estoy convencido».", "source": "Creo que el proyecto saldrá adelante.", "answer": "Estoy convencido de que el proyecto saldrá adelante.", "altAnswers": ["Estoy convencida de que el proyecto saldrá adelante."], "explanation": "Prueba de eso: «estoy convencido de eso» → «de que»; en cambio, «creo eso» → «que» solo. Cambiar de verbo obliga a revisar la preposición."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia «me acuerdo de» por «recuerdo».", "source": "Me acuerdo de que aquel verano llovió mucho.", "answer": "Recuerdo que aquel verano llovió mucho.", "explanation": "«Recordar» es transitivo: «recuerdo eso» → «recuerdo que», sin «de». Mantener la «de» de «acordarse» sería dequeísmo."},
  ],
  "prepositional-verbs-part-2-3": [
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «no tiene» por «carecer».", "source": "La propuesta no tiene un presupuesto detallado.", "answer": "La propuesta carece de un presupuesto detallado.", "altAnswers": ["La propuesta carece de presupuesto detallado."], "explanation": "«Carecer» rige «de»: lo que falta se introduce con esa preposición, mientras que con «tener» es complemento directo."},
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «cometió» por «incurrir».", "source": "El testigo cometió varias contradicciones durante el juicio.", "answer": "El testigo incurrió en varias contradicciones durante el juicio.", "explanation": "«Incurrir» rige «en» (incurrir en un error, en una falta, en una contradicción). «Cometer» es transitivo y no lleva preposición."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "El sindicato aboga en una subida de los salarios.", "answer": "El sindicato aboga por una subida de los salarios.", "explanation": "«Abogar» rige «por»: se aboga por una idea o una causa. Es el equivalente culto de «defender», que es transitivo."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Antes de firmar, cerciórate que el texto es correcto.", "answer": "Antes de firmar, cerciórate de que el texto es correcto.", "explanation": "«Cerciorarse» rige «de» también delante de que: «cerciórate de eso» → «de que». Omitirla es queísmo."},
  ],
  "prepositional-verbs-part-2-mastery-check": [
    fe("Antes de firmar, ___ que todas las cifras eran correctas.", "se cercioró de", "Before signing, she [made sure] that all the figures were correct.", "Cerciorarse de que: comprobar algo para tener la seguridad de que es cierto.", ["se aseguró de", "comprobó"]),
  ],
  "c1r-mission-cover-letter-verbs": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Aspiro un puesto de responsabilidad en su empresa.", "answer": "Aspiro a un puesto de responsabilidad en su empresa.", "explanation": "Con el sentido de pretender o desear, «aspirar» rige «a». Sin preposición, «aspirar algo» significa inhalarlo (aspirar el aire), así que la frase dice otra cosa."},
  ],

  // ---- Conectores discursivos --------------------------------------------
  "advanced-discourse-markers-1": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con «ahora bien» en lugar de «pero».", "source": "El piso es luminoso, pero está lejos del centro.", "answer": "El piso es luminoso; ahora bien, está lejos del centro.", "altAnswers": ["El piso es luminoso. Ahora bien, está lejos del centro."], "explanation": "«Ahora bien» va tras una pausa fuerte (punto o punto y coma) y seguido de coma. Primero se concede la ventaja (luminoso) y luego se restringe (lejos del centro)."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con «dicho esto».", "source": "Entiendo tus motivos, pero no puedo aceptar tu propuesta.", "answer": "Entiendo tus motivos. Dicho esto, no puedo aceptar tu propuesta.", "altAnswers": ["Entiendo tus motivos; dicho esto, no puedo aceptar tu propuesta."], "explanation": "«Dicho esto» cierra lo que se concede (entiendo tus motivos) y abre la objeción. Como «ahora bien», no va tras coma simple, sino tras punto o punto y coma."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "El candidato tiene mucha experiencia. Ahora bien, habla tres idiomas.", "answer": "El candidato tiene mucha experiencia. Además, habla tres idiomas.", "altAnswers": ["El candidato tiene mucha experiencia. Asimismo, habla tres idiomas.", "El candidato tiene mucha experiencia y, además, habla tres idiomas."], "explanation": "«Ahora bien» anuncia una restricción tras conceder algo, pero aquí la segunda frase suma otro mérito. Un argumento que se añade pide un conector aditivo: «además» o «asimismo»."},
  ],
  "advanced-discourse-markers-2": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con «cabe destacar».", "source": "Es muy importante resaltar que la participación se duplicó.", "answer": "Cabe destacar que la participación se duplicó.", "explanation": "«Cabe destacar que» condensa en una fórmula impersonal y formal la idea de «es importante resaltar que». El verbo «caber» va en singular y lleva «que» sin «de»."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Cabe señalar de que el estudio tiene algunas limitaciones.", "answer": "Cabe señalar que el estudio tiene algunas limitaciones.", "explanation": "Prueba de eso: «cabe señalar eso», sin preposición. Por tanto, «cabe señalar que»: añadir «de» es dequeísmo."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con «conviene precisar» para evitar un malentendido.", "source": "Ojo: el precio no incluye el transporte.", "answer": "Conviene precisar que el precio no incluye el transporte.", "explanation": "«Ojo» es coloquial; en un texto formal, la aclaración que previene un error se introduce con «conviene precisar que»."},
  ],
  "c1r-transform-ahora-bien": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la condición con «eso sí».", "source": "Te dejo la bici si me la devuelves mañana.", "answer": "Te dejo la bici; eso sí, devuélvemela mañana.", "altAnswers": ["Te dejo la bici; eso sí, me la devuelves mañana.", "Te dejo la bici; eso sí, tienes que devolvérmela mañana."], "explanation": "«Eso sí» introduce la condición o salvedad después de conceder algo; suele ir seguido de un imperativo o de la condición expresa."},
  ],
  "advanced-discourse-markers-3": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "No te enfades con ella; en última instancia, es tu mejor amiga.", "answer": "No te enfades con ella; al fin y al cabo, es tu mejor amiga.", "altAnswers": ["No te enfades con ella; a fin de cuentas, es tu mejor amiga."], "explanation": "Recordar una verdad de fondo que justifica la petición es la función de «al fin y al cabo». «En última instancia» señalaría el factor que decide al final, algo que no encaja aquí."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con «en última instancia».", "source": "Al final, quien decide es el consejo de administración.", "answer": "En última instancia, quien decide es el consejo de administración.", "altAnswers": ["En última instancia, decide el consejo de administración."], "explanation": "«En última instancia» nombra la autoridad o el factor que tiene la última palabra, tras considerar los demás. Es más preciso y formal que «al final»."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe el cierre con «en definitiva».", "source": "Resumiendo: el plan es barato, rápido y eficaz.", "answer": "En definitiva, el plan es barato, rápido y eficaz.", "explanation": "«En definitiva» resume y concluye, igual que «resumiendo», pero en un registro más cuidado."},
  ],
  "advanced-discourse-markers-4": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Los socios deberán pagar la cuota antes del día 5, so pena perder sus derechos.", "answer": "Los socios deberán pagar la cuota antes del día 5, so pena de perder sus derechos.", "explanation": "La locución completa es «so pena de» + infinitivo o sustantivo; la «de» no se puede omitir."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe el aviso con «bajo pena de».", "source": "Prohibido aparcar. Quien lo haga será multado.", "answer": "Prohibido aparcar, bajo pena de multa.", "altAnswers": ["Queda prohibido aparcar, bajo pena de multa.", "Prohibido aparcar bajo pena de multa."], "explanation": "«Bajo pena de» + sustantivo condensa la sanción en un aviso formal y jurídico; la segunda oración desaparece."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia el riesgo para que afecte a «mis compañeros» (enfadarse).", "source": "Lo diré sin rodeos, a riesgo de parecer antipático.", "answer": "Lo diré sin rodeos, a riesgo de que mis compañeros se enfaden.", "explanation": "Cuando el riesgo recae sobre otra persona, el infinitivo se convierte en «de que» + subjuntivo. La «de» se mantiene: «a riesgo de que»."},
  ],
  "c1r-contrast-conclusion-markers": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Será el árbitro, al fin y al cabo, quien tenga la última palabra.", "answer": "Será el árbitro, en última instancia, quien tenga la última palabra.", "explanation": "Se nombra a quien decide al final: «en última instancia». «Al fin y al cabo» recordaría una verdad de fondo para justificar algo, que no es lo que se dice aquí."},
  ],
  "c1r-error-hunt-risk-markers": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la advertencia con «so pena de».", "source": "Hay que renovar el pasaporte antes de junio; si no, no podrás viajar.", "answer": "Hay que renovar el pasaporte antes de junio, so pena de no poder viajar.", "altAnswers": ["Hay que renovar el pasaporte antes de junio so pena de no poder viajar."], "explanation": "«So pena de» + infinitivo condensa la consecuencia negativa («si no, no podrás…») en una advertencia formal. Se mantiene la «de» y el infinitivo no lleva sujeto propio."},
  ],
  "advanced-discourse-markers-5": [
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «por eso» por «de ahí que».", "source": "Los costes se recuperan a medio plazo; por eso el proyecto es rentable.", "answer": "Los costes se recuperan a medio plazo; de ahí que el proyecto sea rentable.", "altAnswers": ["Los costos se recuperan a medio plazo; de ahí que el proyecto sea rentable."], "explanation": "«De ahí que» presenta una consecuencia en registro culto y exige subjuntivo: «sea», no «es»."},
    fe("Ningún proyecto está ___ de riesgos por completo.", "exento", "No project is entirely [free] of risks.", "«Exento de»: libre de una obligación, un riesgo o una carga.", ["libre"]),
    fe("Los ingresos han caído; ___, habrá que recortar gastos.", "por ende", "Revenue has fallen; [therefore], spending will have to be cut.", "«Por ende» (culto) equivale a «por lo tanto».", ["por consiguiente", "por lo tanto", "por tanto", "en consecuencia", "así pues"]),
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Si bien el informe sea extenso, sus conclusiones son claras.", "answer": "Si bien el informe es extenso, sus conclusiones son claras.", "explanation": "«Si bien» es concesivo de registro culto y va con indicativo: concede un hecho real («es extenso»). A diferencia de «aunque», no admite subjuntivo."},
  ],
  "advanced-discourse-markers-6": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Huelga decir de que la seguridad es lo primero.", "answer": "Huelga decir que la seguridad es lo primero.", "explanation": "«Huelga decir eso», sin preposición: por tanto, «huelga decir que». La «de» es dequeísmo."},
    fe("Hay que ___ las ventajas y los inconvenientes antes de decidir.", "sopesar", "We need to [weigh up] the pros and cons before deciding.", "«Sopesar»: considerar con cuidado ventajas e inconvenientes.", ["ponderar", "valorar", "evaluar", "considerar"]),
    fe("Los tres países fundadores, ___, Francia, Alemania e Italia, firmaron el acuerdo.", "a saber", "The three founding countries, [namely] France, Germany and Italy, signed the agreement.", "«A saber» introduce una enumeración o aclaración.", ["esto es", "es decir"]),
    {"type": "translate", "direction": "en-es", "prompt": "Sustituye «aun así» por un conector culto equivalente.", "source": "Hubo muchos problemas. Aun así, el balance es positivo.", "answer": "Hubo muchos problemas. Con todo, el balance es positivo.", "altAnswers": ["Hubo muchos problemas. No obstante, el balance es positivo."], "explanation": "«Con todo» y «no obstante» equivalen a «aun así» en registro culto: conceden lo anterior y mantienen la conclusión contraria."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con «en lo que respecta a».", "source": "Sobre los plazos, la dirección no ha dicho nada.", "answer": "En lo que respecta a los plazos, la dirección no ha dicho nada.", "explanation": "«En lo que respecta a» introduce el tema en registro formal y rige «a»; con un sustantivo masculino singular se contrae: «al plazo»."},
  ],
  "c1r-build-cohesive-text": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe el texto con marcadores: «En primer lugar…; por otra parte…».", "source": "Hay que reducir el tráfico. También hay que ampliar las zonas verdes.", "answer": "En primer lugar, hay que reducir el tráfico; por otra parte, hay que ampliar las zonas verdes.", "altAnswers": ["En primer lugar, hay que reducir el tráfico. Por otra parte, hay que ampliar las zonas verdes."], "explanation": "«En primer lugar» ordena el primer argumento y «por otra parte» añade el segundo; los dos van seguidos de coma. «También» desaparece porque «por otra parte» ya expresa la adición."},
  ],

  // ---- Estructuras enfáticas ---------------------------------------------
  "emphatic-structures-1": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase destacando a la persona.", "source": "Mi vecino encontró a tu perro.", "answer": "Fue mi vecino quien encontró a tu perro.", "altAnswers": ["Fue mi vecino el que encontró a tu perro."], "explanation": "Para destacar a una persona: ser (en el tiempo del verbo, «fue») + la persona + «quien» o «el que» + el resto de la oración."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase destacando el momento.", "source": "Me enteré de la noticia al salir del trabajo.", "answer": "Fue al salir del trabajo cuando me enteré de la noticia.", "explanation": "El momento destacado («al salir del trabajo») va tras «fue» y lo retoma el relativo de tiempo «cuando»."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Fueron los alumnos quien organizó la protesta.", "answer": "Fueron los alumnos quienes organizaron la protesta.", "altAnswers": ["Fueron los alumnos los que organizaron la protesta."], "explanation": "Lo destacado es plural («los alumnos»), así que el relativo y el verbo concuerdan en plural: «quienes organizaron» (o «los que organizaron»)."},
  ],
  "emphatic-structures-2": [
    {"type": "translate", "direction": "en-es", "prompt": "Transforma la frase en pseudoescindida para destacar la acción: «Lo que hizo…».", "source": "Se fue de la reunión sin decir nada.", "answer": "Lo que hizo fue irse de la reunión sin decir nada.", "altAnswers": ["Lo que hizo fue marcharse de la reunión sin decir nada."], "explanation": "La acción destacada pasa al final, en infinitivo, tras «lo que hizo fue». El pronombre se une al infinitivo: «irse»."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Lo que hizo el árbitro fue anuló el gol.", "answer": "Lo que hizo el árbitro fue anular el gol.", "explanation": "En la pseudoescindida, la acción destacada tras «ser» va en infinitivo: «fue anular». Dos verbos conjugados seguidos («fue anuló») no forman oración."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Lo que más echo de menos son el mar.", "answer": "Lo que más echo de menos es el mar.", "explanation": "«Ser» concuerda con lo destacado: «el mar» es singular, así que «es». El plural solo aparece con un elemento plural («lo que más echo de menos son mis amigos»)."},
  ],
  "c1r-transform-cleft-sentences": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase destacando la causa.", "source": "Me despertó el ruido de la obra.", "answer": "Fue el ruido de la obra lo que me despertó.", "altAnswers": ["Fue el ruido de la obra el que me despertó."], "explanation": "La causa destacada es una cosa: «lo que» o «el que» (concordando con «el ruido»). «Ser» va en pasado porque «despertó» está en pasado."},
  ],
  "c1r-dialogue-lab-correcting-with-emphasis": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la réplica para rectificar con una oración hendida.", "source": "No, lo eligió Inés.", "answer": "No, fue Inés quien lo eligió.", "altAnswers": ["No, fue Inés la que lo eligió."], "explanation": "Al rectificar, el dato nuevo («Inés») va tras «fue» y el resto («lo eligió») se retoma con «quien» o «la que»."},
  ],
  "emphatic-structures-3": [
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase anteponiendo el complemento directo.", "source": "Nunca he probado el gazpacho.", "answer": "El gazpacho no lo he probado nunca.", "altAnswers": ["El gazpacho nunca lo he probado."], "explanation": "Al anteponer «el gazpacho», hay que retomarlo con «lo». Con «nunca» detrás del verbo se necesita «no» delante; también vale «el gazpacho nunca lo he probado»."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "A la nueva directora le conocí ayer en la reunión.", "answer": "A la nueva directora la conocí ayer en la reunión.", "explanation": "«Conocer a alguien» lleva complemento directo; si es femenino, el pronombre es «la». «Le» con referente femenino es un leísmo que la norma no admite."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "Ese informe ya entregué ayer.", "answer": "Ese informe ya lo entregué ayer.", "explanation": "El complemento directo antepuesto y conocido («ese informe») se retoma con un pronombre átono: «lo entregué». Sin él, la frase suena incompleta."},
  ],
  "emphatic-structures-4": [
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "No es que no me gusta tu idea, sino que no tenemos presupuesto.", "answer": "No es que no me guste tu idea, sino que no tenemos presupuesto.", "explanation": "«No es que» descarta una interpretación que no se afirma, así que exige subjuntivo: «no me guste». La parte con «sino que» sí afirma y va en indicativo."},
    {"type": "translate", "direction": "en-es", "prompt": "Corrige la frase.", "source": "No es que sea difícil, sino requiere mucha práctica.", "answer": "No es que sea difícil, sino que requiere mucha práctica.", "explanation": "Cuando tras «sino» viene un verbo conjugado, se necesita «sino que»: «sino que requiere». «Sino» solo, sin «que», va ante sustantivos o infinitivos."},
    {"type": "translate", "direction": "en-es", "prompt": "Reescribe la frase con «si algo…, eso es…».", "source": "Lo que más valoro en un amigo es la lealtad.", "answer": "Si algo valoro en un amigo, eso es la lealtad.", "altAnswers": ["Si hay algo que valoro en un amigo, eso es la lealtad."], "explanation": "«Si algo + verbo…, eso es…» presenta lo destacado como lo único que cumple la condición; la idea de «lo que más» queda implícita."},
    {"type": "translate", "direction": "en-es", "prompt": "Cambia la segunda parte a la forma enfática con «sí que».", "source": "Tú no lo sabías, pero yo lo sabía.", "answer": "Tú no lo sabías, pero yo sí que lo sabía.", "altAnswers": ["Tú no lo sabías, pero yo sí lo sabía."], "explanation": "«Sí que» delante del verbo refuerza la afirmación frente al contraste con «tú no lo sabías». También vale «sí» solo: «yo sí lo sabía»."},
  ],
  "emphatic-structures-5": [
    fe("Fue entonces ___ comprendí que tenía que irme.", "cuando", "It was then [that] I understood I had to leave.", "En la escindida, el relativo depende de qué se focaliza: un momento → «cuando», un lugar → «donde», una persona → «quien», una manera → «como». En el español de América también se oye «fue entonces que», pero en registro cuidado se prefiere el relativo que concuerda con el foco.", ["que"]),
    fe("___ más me sorprendió fue la calma con la que habló.", "Lo que", "[What] surprised me most was how calmly she spoke.", "Pseudoescindida: «lo que» + verbo + «ser» + foco. Se usa el neutro «lo que» porque no se refiere a un sustantivo concreto; «el que» exigiría un sustantivo masculino sobrentendido.", ["Lo que a mí"]),
    fe("El ministro se apresuró a ___ la noticia.", "desmentir", "The minister rushed to [deny] the news.", "«Desmentir»: negar la verdad de algo que se ha dicho o publicado.", ["negar"]),
    fe("Quiero ___ en la importancia de la puntualidad.", "hacer hincapié", "I want to [stress] the importance of punctuality.", "«Hacer hincapié en»: insistir en algo para destacar su importancia.", ["insistir"]),
  ],
  "emphatic-structures-6": [
    fe("La respuesta fue un no ___.", "rotundo", "The answer was a [flat] no.", "«Rotundo»: claro y categórico, sin lugar a dudas.", ["tajante", "categórico"]),
    fe("Hemos ___ esa opción por su coste.", "descartado", "We have [ruled out] that option because of its cost.", "«Descartar»: rechazar una posibilidad.", ["desechado", "rechazado"]),
    fe("La seguridad de los pacientes es ___.", "primordial", "Patient safety is [paramount].", "«Primordial»: lo más importante o fundamental.", ["fundamental", "lo primero", "esencial", "prioritaria"]),
    fe("Quiero ___ un aspecto que nadie ha mencionado.", "resaltar", "I want to [highlight] an aspect that nobody has mentioned.", "«Resaltar»: hacer que algo destaque.", ["destacar", "subrayar", "enfatizar", "recalcar"]),
  ],

  // ---- Futuro y condicional de conjetura ------------------------------
  "future-conditional-conjecture-1": [
    fe("___ las diez y media; ya ha empezado el telediario.", "Serán", "[It must be] about half past ten; the news has already started.", "La hora actual se estima con el futuro de «ser», que concuerda con la hora: «serán las diez y media», pero «será la una».", ["Deben de ser", "Deben ser"]),
    fe("Con este tráfico, Inés ___ todavía en la autopista.", "estará", "With this traffic, Inés [must still be] on the motorway.", "Conjetura sobre dónde está alguien ahora: futuro de «estar». «Estaría» desplazaría la suposición al pasado.", ["debe de estar", "debe estar"]),
    fe("Ese edificio ___ más de cien años; mira la fachada.", "tendrá", "That building [must be] over a hundred years old; look at the façade.", "La antigüedad se dice con «tener», también en la conjetura: «tendrá más de cien años», no «será».", ["debe de tener", "debe tener"]),
  ],
  "future-conditional-conjecture-2": [
    fe("Mi bisabuela ___ unos quince años cuando emigró a Argentina.", "tendría", "My great-grandmother [must have been] about fifteen when she emigrated to Argentina.", "Edad aproximada en un momento pasado: condicional de «tener» (= probablemente tenía). «Tendrá» situaría la conjetura en el presente.", ["debía de tener", "debía tener"]),
    fe("___ prisa, porque se fue sin despedirse.", "Tendría", "He [must have been] in a hurry, because he left without saying goodbye.", "Se deduce un estado pasado a partir de un indicio pasado (se fue sin despedirse): condicional de conjetura.", ["Debía de tener", "Debía tener"]),
    fe("¿Por qué ___ tan enfadada ayer la directora?", "estaría", "Why [could] the director [have been] so angry yesterday?", "En una pregunta sobre el pasado, el condicional expresa que el hablante se lo pregunta sin saber la respuesta (= me pregunto por qué estaba)."),
  ],
  "future-conditional-conjecture-3": [
    fe("Mira qué cola: ese concierto ___ estar agotado.", "debe de", "Look at that queue: that concert [must] be sold out (assumption).", "Conjetura deducida de un indicio (la cola): «deber de» + infinitivo. Sin «de» también se admite hoy con este valor.", ["debe"]),
    fe("Para votar, ___ presentar el DNI en la mesa electoral.", "debes", "To vote, you [must] show your ID at the polling station (obligation).", "Es un requisito, una obligación: «deber» sin «de». «Debes de presentar» sería el uso que la norma censura.", ["tienes que", "hay que"]),
    fe("No ___ haber nadie en la oficina; no contesta nadie.", "debe de", "There [must] be nobody in the office (assumption); nobody's answering.", "Conjetura negativa: «no debe de haber». «Haber» impersonal no se pluraliza y la negación va delante de «deber».", ["debe"]),
  ],
  "future-conditional-conjecture-4": [
    fe("A lo mejor ___ el examen el martes; aún no lo sé.", "hacemos", "Maybe we['ll take] the exam on Tuesday; I don't know yet.", "«A lo mejor» va siempre con indicativo (hacemos, haremos); «hagamos» sería un error.", ["haremos", "tenemos"]),
    fe("Tal vez ___ que cambiar de proveedor el año que viene.", "tengamos", "Perhaps we [will have] to change supplier next year.", "«Tal vez» delante del verbo admite subjuntivo (más incertidumbre: tengamos) o indicativo (más probabilidad: tendremos).", ["tendremos", "tenemos"]),
    fe("Quizás tu jefe no ___ el cambio.", "apruebe", "Perhaps your boss won't [approve] the change.", "Quizás + subjuntivo transmite más duda (apruebe); con indicativo («aprueba», «aprobará») el hablante lo ve más probable.", ["aprueba", "aprobará", "acepte", "acepta"]),
  ],
  "c1r-contrast-four-conjecture-tenses": [
    fe("No contesta; ___ ya.", "habrá salido", "He's not answering; he [must have gone out] already.", "Futuro perfecto = conjetura sobre un pasado reciente (probablemente ha salido).", ["debe de haber salido", "debe haber salido"]),
  ],
  "future-conditional-conjecture-5": [
    fe("¿Cuánto ___ un piso así en el centro? Ni idea.", "costará", "How much [could] a flat like that in the centre [cost]? No idea.", "En una pregunta sobre el presente, el futuro expresa que el hablante se lo pregunta sin saberlo (= me pregunto cuánto cuesta).", ["valdrá"]),
    fe("No contesta al teléfono; ___ conduciendo.", "estará", "He isn't answering the phone; he [must be] driving.", "Conjetura sobre una acción en curso ahora: futuro de «estar» + gerundio.", ["debe de estar", "debe estar"]),
    fe("Tal vez ya ___ la noticia y por eso está tan seria.", "haya oído", "Perhaps she [has heard] the news already, and that's why she's so serious.", "«Tal vez» + perfecto de subjuntivo para un hecho reciente del que se duda; con indicativo («ha oído») el hablante lo ve más probable.", ["ha oído", "se haya enterado de", "sepa"]),
    fe("La factura de la reforma ___ los diez mil euros.", "rondará", "The bill for the renovation [will be around] ten thousand euros.", "«Rondar» + cifra = acercarse a ella; en futuro, la cifra es además una estimación.", ["ronda"]),
  ],
  "future-conditional-conjecture-6": [
    fe("___ su cara, no le gustó la propuesta.", "A juzgar por", "[Judging by] his face, he didn't like the proposal.", "«A juzgar por»: según lo que se deduce de algo."),
    fe("Tendrá, ___, veinte años.", "a lo sumo", "She must be twenty [at most].", "«A lo sumo»: como máximo.", ["como mucho", "como máximo"]),
    fe("La reunión empezará ___ las diez.", "en torno a", "The meeting will start [around] ten.", "«En torno a»: aproximadamente.", ["hacia", "sobre", "alrededor de"]),
    fe("Estamos ___ dos hipótesis.", "barajando", "We are [considering] two hypotheses.", "«Barajar»: considerar varias posibilidades antes de decidir.", ["considerando", "contemplando", "manejando", "sopesando"]),
  ],

  // ---- Registro: tú, usted y vos --------------------------------------
  "formal-informal-register-1": [
    fe("¿Le importa si ___?", "nos tuteamos", "Do you mind if [we use tú with each other]?", "«Tutearse»: tratarse de tú mutuamente.", ["nos hablamos de tú", "nos tratamos de tú"]),
    fe("Una buena anécdota ayuda a ___ en una primera reunión.", "romper el hielo", "A good anecdote helps to [break the ice] at a first meeting.", "«Romper el hielo»: reducir la formalidad inicial."),
    fe("Con los clientes nuevos prefiere ___ y tratarlos de usted.", "guardar las distancias", "With new clients she prefers to [keep her distance] and address them as usted.", "«Guardar las distancias»: mantener un trato formal.", ["mantener las distancias", "guardar la distancia", "mantener la distancia"]),
  ],
  "formal-informal-register-2": [
    fe("Tratar de usted a una persona mayor es ___ de deferencia.", "un gesto", "Addressing an older person as usted is [a gesture] of deference.", "«Un gesto de deferencia»: una muestra de respeto por edad o rango.", ["una muestra", "una señal"]),
    fe("Antes de tutear a tu jefe, conviene ___ la situación.", "calibrar", "Before using tú with your boss, it's wise to [weigh up] the situation.", "«Calibrar una situación»: evaluarla con cuidado antes de actuar.", ["evaluar", "valorar", "sopesar", "analizar"]),
    fe("En un hospital, el tratamiento suele reflejar la ___ institucional.", "jerarquía", "In a hospital, forms of address usually reflect the institutional [hierarchy].", "La jerarquía institucional condiciona el trato, como la edad."),
  ],
  "c1r-transform-tu-to-usted": [
    fe("___ y siéntese, por favor.", "Pase", "[Come in] and sit down, please. (usted)", "Imperativo de usted: pasa → pase; siéntate → siéntese.", ["Entre"]),
  ],
  "formal-informal-register-3": [
    fe("En España, ___ es habitual incluso entre desconocidos.", "el tuteo", "In Spain, [using tú] is common even between strangers.", "«El tuteo»: el uso de tú."),
    fe("Ante un desconocido, muchos hispanoamericanos usan usted ___.", "por defecto", "With a stranger, many Latin Americans use usted [by default].", "«Por defecto»: como opción habitual si nada indica lo contrario."),
    fe("Tutear a un profesor universitario puede considerarse ___.", "una falta de educación", "Using tú with a university professor can be considered [rude].", "Según la norma regional, el tuteo puede sonar irrespetuoso.", ["una falta de respeto", "de mala educación", "descortés", "maleducado"]),
  ],
  "formal-informal-register-4": [
    fe("Después de tres reuniones, la abogada y su cliente empezaron a ___.", "tutearse", "After three meetings, the lawyer and her client began [to use tú with each other].", "«Tutearse» es recíproco: los dos se tratan de tú. Con «empezar a» el pronombre se une al infinitivo.", ["tratarse de tú"]),
    fe("Pasó al usted para ___ tras la discusión.", "marcar distancia", "He switched to usted to [put some distance between them] after the argument.", "El paso súbito del tú al usted señala alejamiento o disgusto.", ["marcar distancias", "guardar las distancias"]),
    fe("A medida que avanzaba la reunión, fueron ___ la formalidad.", "relajando", "As the meeting went on, they gradually [relaxed] the formality.", "Ir + gerundio: cambio gradual.", ["reduciendo", "dejando de lado", "abandonando"]),
  ],
  "formal-informal-register-5": [
    fe("Le agradezco que ___ venir a pesar de la lluvia.", "haya podido", "Thank you for [being able] to come despite the rain.", "«Agradecer que» + subjuntivo; para algo ya ocurrido, perfecto de subjuntivo. En usted es «haya» (con tú sería «hayas»).", ["haya querido"]),
    fe("Siéntese, por favor. ¿Le ___ algo de beber?", "traigo", "Sit down, please. [Shall I bring] you something to drink?", "Para ofrecer algo se usa el presente de indicativo en pregunta («¿le traigo?»); «le» mantiene el usted del «siéntese».", ["sirvo", "ofrezco"]),
    fe("Muchas gracias, pero no se ___ por mí.", "preocupe", "Thank you very much, but don't [worry] about me.", "Imperativo negativo de usted: «no se preocupe» (presente de subjuntivo + se). Con tú sería «no te preocupes»."),
    fe("Si ___ el documento que te mandé, verás que todo cuadra.", "lees", "If you [read] the document I sent you, you'll see that everything adds up.", "Tras acordar el tuteo, los verbos van en segunda persona (lees, verás) y el pronombre es «te».", ["revisas", "miras"]),
  ],
  "formal-informal-register-6": [
    fe("Hablaron ___, sin jerarquías.", "de tú a tú", "They spoke [as equals], without hierarchies.", "«De tú a tú»: de igual a igual.", ["de igual a igual"]),
    fe("No te ___ con el director; apenas lo conoces.", "tomes confianzas", "Don't [get too familiar] with the director; you barely know him.", "«Tomarse confianzas»: tratar a alguien con una familiaridad que no corresponde.", ["tomes tantas confianzas"]),
    fe("Me habló con una ___ que me resultó ofensiva.", "condescendencia", "He spoke to me with a [condescension] that I found offensive.", "«La condescendencia»: superioridad disfrazada de amabilidad.", ["superioridad", "prepotencia"]),
    fe("Su discurso fue tan ___ que nadie conectó con él.", "encorsetado", "His speech was so [stiff] that nobody connected with him.", "«Encorsetado»: rígido, falto de naturalidad.", ["rígido", "acartonado", "forzado"]),
  ],

  // ---- Voseo ---------------------------------------------------------------
  "voseo-part-1-1": [
    fe("Vos ___ de Buenos Aires, ¿no?", "sos", "You [are] from Buenos Aires, aren't you? (vos)", "Ser con vos: vos sos (tú eres)."),
    fe("En Argentina, el voseo ___ de prestigio en todos los registros.", "goza", "In Argentina, voseo [enjoys] prestige in all registers.", "«Gozar de prestigio»: estar socialmente bien considerado.", ["disfruta"]),
    fe("En algunos países, el voseo ___ el tuteo según el contexto.", "convive con", "In some countries, voseo [coexists with] tú depending on the context.", "«Convivir con»: usarse alternadamente junto a otra forma.", ["coexiste con", "alterna con"]),
  ],
  "voseo-part-1-2": [
    fe("___ acá, que te quiero mostrar algo.", "Vení", "[Come] here, I want to show you something. (vos)", "Imperativo voseante: se quita la -r del infinitivo y se acentúa la última sílaba (venir → vení)."),
    fe("¿Vos ___ tiempo mañana?", "tenés", "[Do you have] time tomorrow? (vos)", "Presente voseante: forma aguda y sin diptongo (tenés, no tienes)."),
  ],
  "voseo-part-1-3": [
    fe("¿Vos ___ que va a llover?", "pensás", "[Do you think] it's going to rain? (vos)", "Presente voseante sin diptongo: pensás (tú piensas).", ["creés"]),
    fe("Señora, ¿___ dónde queda la estación?", "sabe", "Ma'am, [do you know] where the station is? (usted)", "El voseo no elimina el usted: con desconocidos o mayores se sigue usando."),
    fe("Esto es para ___, che.", "vos", "This is for [you], mate. (Buenos Aires, informal)", "Tras preposición se usa vos (para vos, con vos), no ti ni contigo."),
  ],
  "c1r-transform-tu-to-vos": [
    fe("¿Por qué no te ___ un rato?", "sentás", "Why don't you [sit down] for a while? (vos)", "Presente voseante de sentarse: te sentás (tú te sientas)."),
  ],
  "voseo-part-2-1": [
    fe("Juzgar el voseo como inferior es un ___ lingüístico.", "prejuicio", "Judging voseo as inferior is a linguistic [prejudice].", "«El prejuicio lingüístico»: considerar inferior una variedad sin fundamento."),
    fe("Esa opinión carece de ___ objetivo.", "fundamento", "That opinion lacks any objective [basis].", "«Carecer de fundamento»: no tener base real."),
    fe("Vos ___, che.", "tenés razón", "[You're right], mate. (vos)", "Tener razón con vos: tenés razón."),
  ],
  "voseo-part-2-2": [
    fe("Che, ¿vos ___ argentina o uruguaya?", "sos", "Hey, [are] you Argentinian or Uruguayan?", "Presente voseante de «ser»: vos sos (la única forma especial del presente)."),
    fe("«Al tiro» es un ___: así dicen «enseguida» en Chile.", "chilenismo", "«Al tiro» is a [Chileanism]: that's how they say «right away» in Chile.", "-ismo nombra un rasgo lingüístico propio de un lugar: Chile → chilenismo, como Uruguay → uruguayismo."),
    fe("Las formas agudas del voseo, como «tenés», llevan ___.", "tilde", "Stressed-final voseo forms, like «tenés», carry [a written accent].", "Las formas voseantes de varias sílabas son agudas terminadas en -s: llevan tilde (los monosílabos como «sos» no).", ["acento gráfico", "acento"]),
    fe("En Costa Rica también ___.", "voseamos", "In Costa Rica we [use vos] too.", "«Vosear»: usar vos.", ["usamos el vos", "usamos vos"]),
  ],
  "voseo-part-2-3": [
    fe("En Uruguay ___ el tú y el vos.", "coexisten", "In Uruguay tú and vos [coexist].", "«Coexistir»: existir al mismo tiempo que otra cosa.", ["conviven"]),
    fe("Muchas palabras del ___ porteño vienen del italiano.", "lunfardo", "Many words in Buenos Aires [lunfardo slang] come from Italian.", "«El lunfardo»: jerga porteña con aportes de las lenguas de inmigración."),
    fe("El vos no es un ___, sino una forma viva.", "arcaísmo", "Vos is not an [archaism], but a living form.", "«El arcaísmo»: palabra o construcción antigua conservada en el uso."),
    fe("En Paraguay, el español convive con el ___.", "guaraní", "In Paraguay, Spanish coexists with [Guarani].", "El guaraní es lengua oficial en Paraguay junto al español."),
  ],

  // ---- Variación léxica regional --------------------------------------
  "regional-lexical-variation-1": [
    fe("Dejé el ___ en el estacionamiento.", "auto", "I left the [car] in the parking lot. (Argentina)", "Coche (España), carro (México, Colombia, Caribe), auto (Cono Sur)."),
    fe("El español es una lengua ___: ningún país es el centro de la norma.", "policéntrica", "Spanish is a [pluricentric] language: no country is the center of the norm.", "«Policéntrica»: con varias normas igualmente válidas.", ["pluricéntrica"]),
    fe("En Santiago, para ir al centro tomo la ___.", "micro", "In Santiago, I take the [bus] to go downtown. (Chile)", "En Chile el autobús urbano es «la micro»."),
  ],
  "regional-lexical-variation-2": [
    fe("En el cine de Lima pedimos ___ con gaseosa.", "canchita", "At the cinema in Lima we order [popcorn] with soda. (Peru)", "Palomitas (España), pochoclo (Argentina), cabritas (Chile), canchita (Perú)."),
    fe("En La Habana esperamos la ___ en la parada.", "guagua", "In Havana we waited for the [bus] at the stop. (Cuba)", "En Cuba y Canarias, «guagua» es el autobús."),
    fe("La ___ de mi hermana ya tiene seis meses.", "guagua", "My sister's [baby] is already six months old. (Chile)", "En Chile y los Andes, «guagua» significa bebé: un falso amigo dialectal."),
    fe("En Buenos Aires siempre pido ___ en el cine.", "pochoclo", "In Buenos Aires I always order [popcorn] at the movies.", "En Argentina las palomitas son «pochoclo»."),
  ],
  "c1r-word-web-everyday-objects": [
    fe("Se me olvidó el ___ en el carro.", "celular", "I left my [phone] in the car. (Mexico)", "Móvil (España) / celular (América).", ["teléfono"]),
  ],
  "c1r-mission-market-shopping": [
    fe("Quiero dos ___ con chile y limón.", "elotes", "I want two [corn on the cob] with chili and lime. (Mexico)", "La mazorca de maíz es elote en México y choclo en el Cono Sur y los Andes. Elote viene del náhuatl, como aguacate y chile."),
  ],
  "regional-lexical-variation-3": [
    fe("Las ___ que se comen en el cine se llaman cabritas en Chile.", "palomitas", "The [popcorn] people eat at the cinema is called cabritas in Chile.", "«Palomitas» es la forma de España y México.", ["palomitas de maíz"]),
    fe("El contraste entre guagua y autobús ya resulta ___.", "proverbial", "The contrast between guagua and autobús has become [proverbial].", "«Resultar proverbial»: ser tan conocido que se cita como ejemplo."),
    fe("Cada país usa una palabra distinta para ___ el mismo objeto.", "designar", "Each country uses a different word to [refer to] the same object.", "«Designar»: nombrar algo con una palabra concreta.", ["nombrar", "denominar"]),
  ],
  "regional-lexical-variation-4": [
    fe("Vamos a ___ un taxi.", "tomar", "Let's [take] a taxi. (Mexico)", "En México y Argentina, «coger» es malsonante: se dice «tomar» o «agarrar».", ["agarrar"]),
    fe("Para un público internacional, lo prudente es usar la palabra más ___.", "neutra", "For an international audience, the prudent thing is to use the most [neutral] word.", "La variante neutra es la menos marcada regionalmente: la que no suena extraña ni malsonante en ningún país."),
    fe("Esa palabra resulta ___ en algunos países.", "malsonante", "That word is [offensive] in some countries.", "«Malsonante»: chocante o inapropiada por su connotación.", ["vulgar", "grosera", "ofensiva"]),
  ],
  "c1r-error-hunt-false-friends-dialectal": [
    fe("Todas las mañanas me tomo un ___ antes de entrar a la oficina.", "tinto", "Every morning I have a [black coffee] before going into the office. (Bogotá)", "En Colombia un tinto es un café solo, no un vino; en España, un tinto es una copa de vino tinto.", ["tintico"]),
  ],
  "regional-lexical-variation-5": [
    fe("Si no entiendes una palabra local, pregunta ___.", "sin reparos", "If you don't understand a local word, ask [without hesitation].", "«Sin reparos»: sin vergüenza ni temor.", ["sin vergüenza", "sin miedo"]),
    fe("Adoptar el vocabulario local demuestra ___ hacia la cultura de acogida.", "sensibilidad", "Adopting the local vocabulary shows [sensitivity] toward the host culture.", "«Mostrar sensibilidad»: demostrar consideración y respeto.", ["respeto", "consideración"]),
    fe("Conviene ___ el término de mayor alcance geográfico.", "priorizar", "It's best to [prioritize] the term with the widest geographic reach.", "«Priorizar un término»: darle preferencia.", ["preferir", "elegir"]),
  ],
  "regional-lexical-variation-6": [
    fe("¿Tomamos un ___ o vamos caminando?", "colectivo", "Shall we take a [bus] or walk? (Argentina)", "En Argentina el autobús urbano es «el colectivo»."),
    fe("Voy a tomar el ___ para ir al trabajo.", "camión", "I'm going to take the [bus] to work. (Mexico)", "En México, «camión» es también el autobús urbano."),
    fe("Lo mejor es preguntar sin ___ cuando algo no te cierra.", "pena", "It's best to ask [without feeling embarrassed] when something doesn't add up.", "En México y Centroamérica, «pena» significa vergüenza.", ["vergüenza", "miedo", "reparos"]),
    fe("Nadie espera que ___ todas las palabras de cada país.", "sepas", "Nobody expects you [to know] every word from every country.", "Esperar que + subjuntivo.", ["conozcas"]),
  ],
  "regional-lexical-variation-7": [
    fe("Usó un lenguaje ___ que escandalizó a todos.", "soez", "He used [crude] language that shocked everyone.", "«Soez»: grosero, de mal gusto.", ["grosero", "vulgar", "malsonante"]),
    fe("Para un público internacional conviene evitar los ___.", "regionalismos", "For an international audience it's best to avoid [regionalisms].", "«El regionalismo léxico»: palabra propia de una región.", ["localismos", "dialectalismos"]),
  ],
  "c1r-story-detective-where-am-i": [
    fe("Che, ¿vamos en colectivo o en ___?", "subte", "Hey, shall we go by bus or by [subway]? (Buenos Aires)", "En Buenos Aires el metro es «el subte».", ["metro"]),
    fe("¿Me pasás el celular? Lo dejé arriba de la ___.", "heladera", "Can you pass me my phone? I left it on top of the [fridge]. (Argentina)", "Nevera (España), refrigerador (México), heladera (Río de la Plata).", ["nevera", "refrigerador", "refrigeradora"]),
  ],

  // ---- Español neutro y coloquial -------------------------------------
  "neutral-vs-colloquial-1": [
    fe("El español neutro es una construcción ___, no la lengua materna de nadie.", "deliberada", "Neutral Spanish is a [deliberate] construct, nobody's mother tongue.", "«Una construcción deliberada»: creada conscientemente con un propósito.", ["artificial", "consciente"]),
    fe("En el doblaje conviene ___ los modismos muy locales.", "prescindir de", "In dubbing it's best to [do without] very local idioms.", "«Prescindir de»: renunciar a algo o arreglárselas sin ello.", ["evitar"]),
    fe("Se prefiere siempre la palabra de mayor ___.", "difusión", "The word with the widest [currency] is always preferred.", "«La palabra de mayor difusión»: la más ampliamente entendida.", ["alcance", "uso"]),
  ],
  "neutral-vs-colloquial-2": [
    fe("«O sea» es una ___ muy frecuente.", "muletilla", "«O sea» is a very common [filler word].", "«La muletilla»: palabra repetida por costumbre sin aportar mucho significado.", ["coletilla", "palabra de relleno"]),
    fe("Entre amigos se ___ muchas ideas gracias al contexto compartido.", "sobreentienden", "Among friends, many ideas [go without saying] thanks to shared context.", "«Sobreentender»: dar algo por comprendido sin expresarlo.", ["sobrentienden", "dan por sentadas"]),
    fe("El habla coloquial no es una versión ___ de la lengua.", "empobrecida", "Colloquial speech is not an [impoverished] version of the language.", "El registro coloquial tiene una riqueza expresiva propia.", ["pobre", "inferior", "descuidada"]),
  ],
  "c1r-style-workshop-colloquial-to-neutral": [
    fe("Mucha gente ___ con la película.", "se sorprendió", "Many people [were amazed] by the film. (neutral)", "Neutro: «sorprenderse» en lugar del coloquial «flipar».", ["quedó sorprendida", "se quedó sorprendida", "se asombró"]),
  ],
  "c1r-dialogue-lab-filler-words": [
    fe("—¿No vas a cenar? —___ comí muy tarde.", "Es que", "—Aren't you having dinner? —[Well, the thing is,] I ate very late.", "Es que introduce una justificación en la respuesta: explica por qué no va a cenar. En un texto formal se diría «porque»."),
  ],
  "neutral-vs-colloquial-3": [
    fe("Un buen periodista sabe ___ con soltura entre registros.", "moverse", "A good journalist knows how to [move] comfortably between registers.", "«Moverse con soltura»: actuar con naturalidad entre opciones.", ["pasar", "cambiar"]),
    fe("Un registro coloquial en un informe no resulta ___.", "pertinente", "A colloquial register in a report isn't [appropriate].", "El criterio es la pertinencia, no la superioridad de un registro.", ["adecuado", "apropiado", "oportuno"]),
    fe("La publicidad suele ___ registros conscientemente.", "combinar", "Advertising often [combines] registers deliberately.", "«Combinar registros»: mezclar a propósito lo formal y lo coloquial para lograr un efecto, como cercanía sin perder claridad.", ["mezclar"]),
  ],
  "neutral-vs-colloquial-4": [
    fe("Lo que hizo fue una auténtica ___ de pata.", "metida", "What he did was a real [blunder].", "«Una metida de pata» (América) o «metedura de pata» (España): un error torpe, dicho con complicidad.", ["metedura"]),
    fe("Una ironía escrita puede malinterpretarse si se ___ de contexto.", "saca", "Written irony can be misunderstood if it's [taken] out of context.", "«Sacar algo de contexto»: interpretarlo sin tener en cuenta la situación."),
    fe("Sus palabras tenían una fuerte ___ emocional.", "carga", "His words had a strong emotional [charge].", "«La carga emocional»: el componente afectivo de un mensaje."),
  ],
  "c1r-contrast-same-meaning-different-tone": [
    fe("Tienes que ___ si quieres aprobar.", "ponerte las pilas", "You need to [get your act together] if you want to pass.", "«Ponerse las pilas» (coloquial) = esforzarse más.", ["esforzarte más", "esforzarte"]),
  ],
  "neutral-vs-colloquial-5": [
    fe("La situación se ___ durante la noche.", "agravó", "The situation [worsened] during the night. (formal)", "Formal: «se agravó»; coloquial: «la cosa se puso fea».", ["empeoró", "complicó"]),
    fe("Habla un inglés ___, pero se hace entender.", "de andar por casa", "He speaks [basic, everyday] English, but he gets by.", "«De andar por casa»: sencillo, sin pretensiones.", ["básico", "sencillo"]),
    fe("Los diálogos de la serie suenan ___.", "acartonados", "The dialogue in the series sounds [stiff].", "«Acartonado»: rígido y sin vida.", ["artificiosos", "rígidos", "forzados", "impostados"]),
    fe("Prefiero un lenguaje ___, sin adornos.", "llano", "I prefer [plain] language, without frills.", "«Llano»: sencillo, sin afectación.", ["sencillo", "claro"]),
  ],
  "neutral-vs-colloquial-6": [
    fe("«Te lo he dicho mil veces» es una ___.", "hipérbole", "«I've told you a thousand times» is a [hyperbole].", "«La hipérbole»: exageración con fines expresivos.", ["exageración"]),
    fe("Se le escapó un ___ delante de su abuela.", "taco", "He let slip a [swear word] in front of his grandmother.", "«El taco»: palabrota.", ["palabrota"]),
    fe("Termina todas las frases con la ___ «¿sabes?».", "coletilla", "He ends every sentence with the [tag] «¿sabes?».", "«La coletilla»: lo que alguien añade por costumbre al final.", ["muletilla"]),
    fe("Sus críticas escondían un ___ velado.", "sarcasmo", "His criticism hid a thinly veiled [sarcasm].", "«El sarcasmo velado»: una burla disimulada."),
  ],
  "c1r-mission-subtitle-neutral": [
    fe("¿Ustedes ___ a qué hora empieza la película?", "saben", "Do you guys [know] what time the movie starts? (neutral)", "En el español neutro se usa ustedes con el verbo en tercera persona del plural (saben), no vosotros (sabéis)."),
  ],

  // ---- Correspondencia formal -----------------------------------------
  "formal-correspondence-1": [
    fe("Conviene ___ el asunto desde el primer párrafo.", "plantear", "It's best to [set out] the matter from the first paragraph.", "«Plantear el asunto»: exponer con claridad el motivo.", ["exponer", "presentar"]),
    fe("Evite las ___ y vaya al grano.", "digresiones", "Avoid [digressions] and get to the point.", "«La digresión»: desvío del tema principal."),
    fe("Estimada señora: por medio de ___ le comunico mi decisión.", "la presente", "Dear Madam: [by this letter] I wish to inform you of my decision.", "«Por medio de la presente» introduce el motivo de forma solemne."),
  ],
  "formal-correspondence-2": [
    fe("___ a su disposición si necesita más información.", "Quedo", "[I remain] at your disposal should you need further information.", "Fórmula de cierre: «Quedo a su disposición» añade una nota de cortesía antes de la despedida. Si escribe una empresa, «Quedamos».", ["Quedamos"]),
    fe("___ señora Gómez:", "Estimada", "[Dear] Mrs. Gómez:", "«Estimado/a» + apellido es una apertura segura; en español va seguida de dos puntos.", ["Apreciada", "Distinguida"]),
  ],
  "c1r-transform-email-openers": [
    fe("___ comunicarle que su solicitud no ha sido aceptada.", "Lamento", "[I regret to] inform you that your application has not been accepted.", "Para una mala noticia: «Lamento comunicarle que…».", ["Lamentamos", "Siento", "Sentimos"]),
  ],
  "formal-correspondence-3": [
    fe("Quisiera ___ de mi desacuerdo con la decisión.", "dejar constancia", "I would like to [put on record] my disagreement with the decision.", "«Dejar constancia de algo»: hacerlo explícito por escrito."),
    fe("En relación con el asunto de ___, le confirmo los datos.", "la referencia", "With regard to [the above] matter, I confirm the details.", "«El asunto de la referencia» retoma un intercambio previo."),
    fe("Abusar de fórmulas produce un texto ___.", "hueco", "Overusing set phrases produces a [hollow] text.", "«Un texto hueco»: cargado de fórmulas pero sin contenido.", ["vacío"]),
  ],
  "formal-correspondence-4": [
    fe("Una petición con exceso de ___ puede resultar ineficaz.", "rodeos", "A request that [beats around the bush] too much can be ineffective.", "«Un exceso de rodeos»: dar demasiadas vueltas antes de llegar al punto.", ["circunloquios"]),
    fe("Elimine cualquier información ___ para el propósito del escrito.", "irrelevante", "Remove any information that is [irrelevant] to the purpose of the letter.", "La concisión exige eliminar lo irrelevante.", ["innecesaria", "superflua"]),
    fe("Le ___ que me enviara el contrato antes del viernes.", "agradecería", "[I would be grateful if] you could send me the contract before Friday.", "Fórmula atenuadora: condicional + que + imperfecto de subjuntivo.", ["agradeceríamos"]),
  ],
  "formal-correspondence-5": [
    fe("La documentación solicitada ha sido ___ como adjunto.", "remitida", "The requested documents have been [sent] as an attachment.", "«Remitir»: enviar, sobre todo un documento; el participio concuerda con «documentación».", ["enviada"]),
    fe("Le agradezco ___ su atención.", "de antemano", "Thank you [in advance] for your attention.", "«De antemano» (o «por anticipado») significa «antes de que ocurra»: se da las gracias antes de recibir la respuesta.", ["por anticipado", "anticipadamente"]),
    fe("___, aprovecho la ocasión para saludarla atentamente.", "Sin otro particular", "[With nothing further to add], I take this opportunity to send you my regards.", "Fórmula fija de cierre antes de la despedida."),
    fe("Le ruego que confirme la recepción ___.", "a la mayor brevedad", "Please confirm receipt [as soon as possible].", "«A la mayor brevedad (posible)» es la fórmula formal de «cuanto antes».", ["lo antes posible", "cuanto antes", "a la mayor brevedad posible"]),
  ],
  "formal-correspondence-6": [
    fe("Le ___ la factura por correo electrónico.", "remito", "I [am sending] you the invoice by email.", "«Remitir» es el verbo formal de «enviar».", ["envío", "adjunto"]),
    fe("Un ___ saludo.", "cordial", "[Kind] regards.", "«Un cordial saludo»: despedida amable y formal.", ["afectuoso"]),
    fe("El director envió una ___ a todos los empleados.", "circular", "The director sent a [circular] to all employees.", "«La circular»: comunicado dirigido a varios destinatarios.", ["nota"]),
    fe("La ___ es tan importante como la cortesía en un correo formal.", "concisión", "[Conciseness] is as important as politeness in a formal email.", "«La concisión»: brevedad y precisión.", ["brevedad"]),
  ],

  // ---- Lenguaje académico ---------------------------------------------
  "academic-essay-writing-part-1-1": [
    fe("Los nuevos datos permiten ___ la hipótesis inicial.", "refutar", "The new data make it possible to [refute] the initial hypothesis.", "«Refutar una hipótesis»: demostrar que era falsa.", ["rebatir", "descartar"]),
    fe("Los resultados parecen ___ la hipótesis de partida.", "confirmar", "The results seem to [confirm] the starting hypothesis.", "«Confirmar una hipótesis»: demostrar que era cierta.", ["corroborar", "respaldar", "avalar"]),
    fe("Una buena tesis debe ser ___.", "defendible", "A good thesis must be [defensible].", "Una tesis defendible admite una postura contraria razonable.", ["sostenible", "argumentable"]),
  ],
  "academic-essay-writing-part-1-2": [
    fe("___ una correlación clara entre ambas variables.", "Se observa", "A clear correlation [is observed] between the two variables.", "El «se» de pasiva refleja presenta el hallazgo sin atribuirlo a un sujeto.", ["Se aprecia", "Se advierte", "Se detecta"]),
    fe("Los datos ___ sostener que el modelo requiere una revisión.", "permiten", "The data [allow us to] argue that the model needs revising.", "Sujeto no humano (los datos) en lugar de «creo que».", ["nos permiten"]),
    fe("En este trabajo ___ los efectos de la medida.", "analizamos", "In this paper [we analyze] the effects of the measure.", "Plural de modestia (nosotros) en lugar de «yo».", ["se analizan"]),
  ],
  "academic-essay-writing-part-1-3": [
    fe("De estos datos ___ que la medida fue eficaz.", "se desprende", "[It follows] from these data that the measure was effective.", "«Desprenderse de»: deducirse de algo.", ["se deduce", "se infiere", "se concluye"]),
    fe("La muestra fue pequeña; ___, los resultados deben tomarse con cautela.", "por consiguiente", "The sample was small; [consequently], the results should be treated with caution.", "La muestra pequeña es la causa y la cautela su consecuencia, así que va un conector consecutivo («por consiguiente»), no uno de contraste como «sin embargo».", ["en consecuencia", "por lo tanto", "por tanto", "por ende"]),
  ],
  "academic-essay-writing-part-1-mastery-check": [
    fe("El estudio aporta datos nuevos; ___, propone un método de análisis original.", "asimismo", "The study provides new data; [likewise], it proposes an original method of analysis.", "«Asimismo» añade un argumento sin contradecir el anterior.", ["además", "igualmente", "del mismo modo"]),
  ],
  "c1r-transform-depersonalize": [
    fe("___ los efectos del cambio climático en la agricultura.", "Este ensayo analiza", "[This essay analyzes] the effects of climate change on agriculture.", "Sujeto no humano en lugar de «En este ensayo voy a analizar».", ["El presente ensayo analiza", "Este trabajo analiza", "En este ensayo se analizan"]),
  ],
  "academic-essay-writing-part-2-1": [
    fe("___ que la medida tuvo un efecto positivo.", "Todo indica", "[Everything suggests] that the measure had a positive effect.", "Expresión de atenuación: conclusión sostenida por la evidencia, sin presentarla como incuestionable.", ["Todo parece indicar", "Los datos sugieren"]),
    fe("___ razonable pensar que la tendencia continuará.", "Parecería", "[It would seem] reasonable to think that the trend will continue.", "El condicional atenúa todavía más la afirmación.", ["Parece", "Resulta"]),
    fe("Evite las afirmaciones ___ sin matices.", "categóricas", "Avoid [categorical] statements without nuance.", "«Una afirmación categórica»: presentada como absolutamente cierta.", ["absolutas", "tajantes", "rotundas"]),
  ],
  "academic-essay-writing-part-2-2": [
    fe("El presente ensayo ___ que el comercio digital ha modificado los hábitos de consumo.", "sostiene", "This essay [argues] that digital commerce has changed consumer habits.", "«Sostener» presenta la tesis del ensayo.", ["defiende", "plantea", "mantiene"]),
    fe("___ reconocer que existen interpretaciones alternativas.", "Conviene", "[It is advisable] to acknowledge that there are alternative interpretations.", "Construcción impersonal que evita la primera persona.", ["Cabe", "Es preciso", "Es necesario", "Hay que"]),
    fe("Ambos factores actúan de manera complementaria, más que ___.", "excluyente", "Both factors act in a complementary rather than [mutually exclusive] way.", "«Excluyente»: que excluye a la otra posibilidad."),
    fe("Este ensayo no pretende ___ la discusión.", "agotar", "This essay does not aim to [exhaust] the discussion.", "«Agotar la discusión»: tratarla por completo, sin dejar nada.", ["cerrar", "zanjar", "concluir"]),
  ],
  "c1r-story-detective-essay-structure": [
    fe("___ que reduciría la producción; no obstante, los estudios indican lo contrario.", "Podría objetarse", "[It could be objected] that it would reduce production; however, studies indicate the opposite.", "Marcador de refutación: se presenta la objeción antes de rebatirla.", ["Podría argumentarse", "Cabría objetar", "Podría alegarse"]),
    fe("___, las pruebas reunidas confirman la hipótesis de partida.", "En suma", "[In sum], the evidence gathered confirms the starting hypothesis.", "Marcador de conclusión: recoge lo argumentado y lo cierra. «En primer lugar» o «asimismo» no sirven aquí, porque ordenan o suman argumentos dentro del desarrollo.", ["En definitiva", "En resumen", "En síntesis", "En conclusión"]),
  ],
  "academic-essay-writing-part-2-3": [
    fe("Conviene tomar estos datos ___.", "con reservas", "These data should be taken [with caution].", "«Con reservas»: con cautela, sin aceptar algo del todo.", ["con cautela", "con precaución"]),
    fe("El estudio se apoya en un sólido ___ teórico.", "marco", "The study rests on a solid theoretical [framework].", "«El marco teórico»: conceptos y autores que sustentan una investigación."),
    fe("La investigación se basa en un ___ de doscientas entrevistas.", "corpus", "The research is based on a [corpus] of two hundred interviews.", "«El corpus»: conjunto de textos o datos de una investigación."),
    fe("Conviene ___ esta afirmación con algún matiz.", "atenuar", "This statement should be [toned down] with some nuance.", "«Atenuar»: suavizar la fuerza de una afirmación.", ["suavizar", "matizar", "moderar"]),
  ],
  "academic-essay-writing-part-2-4": [
    fe("El tribunal ___ todos los argumentos de la defensa.", "desestimó", "The court [dismissed] all of the defense's arguments.", "«Desestimar»: rechazar un argumento o una petición.", ["rechazó"]),
    fe("Ese razonamiento parece válido, pero es una ___.", "falacia", "That reasoning seems valid, but it's a [fallacy].", "«La falacia»: razonamiento que parece válido sin serlo."),
  ],
  "c1r-spiral-academic-nominalization": [
    fe("Tras la ___ del decreto, aumentaron las contrataciones.", "aprobación", "After the [approval] of the decree, hiring increased.", "Nominalización académica: «cuando se aprobó el decreto» → «tras la aprobación del decreto». El verbo en -ar da el sustantivo en -ación."),
  ],

  // ---- Desafíos C1 ---------------------------------------------------------
  "c1r-challenge-connector-chain": [
    fe("El turismo aporta riqueza. ___, su crecimiento descontrolado encarece la vivienda.", "No obstante", "Tourism brings wealth. [Nevertheless], its uncontrolled growth drives up housing costs.", "La segunda idea (encarece la vivienda) se opone a la primera (aporta riqueza), así que hace falta un conector de contraste como «no obstante» o «sin embargo», seguido de coma.", ["Sin embargo", "Ahora bien", "Con todo"]),
    fe("Muchos vecinos abandonan el centro; ___, es necesario regularlo.", "por todo ello", "Many residents are leaving the center; [for all these reasons], it needs to be regulated.", "Conector de conclusión que recoge todo lo anterior.", ["por ello", "por eso", "por consiguiente", "por lo tanto", "en consecuencia"]),
  ],
  "c1r-challenge-build-the-sentence": [
    fe("___ es que no haya un plan B.", "Lo que más me preocupa", "[What worries me most] is that there's no plan B.", "Pseudoescindida; «preocupar que» lleva subjuntivo (haya).", ["Lo que me preocupa más"]),
    fe("Es a tu hermana ___ deberías pedirle perdón.", "a quien", "It's your sister [whom] you should apologize to.", "En la hendida, la preposición se repite ante el relativo: a tu hermana… a quien.", ["a la que"]),
  ],
  "c1r-challenge-express-transformations": [
    fe("El puente ___ en 1900.", "fue construido", "The bridge [was built] in 1900.", "Pasiva perifrástica: construyeron el puente → el puente fue construido.", ["se construyó"]),
    fe("Me pidió que ___ a su casa.", "fuera", "She asked me [to come] to her house.", "Estilo indirecto: «Ven» → me pidió que fuera (imperfecto de subjuntivo).", ["viniera"]),
  ],
  "c1r-challenge-text-detective": [
    fe("Por mucho que ___, nunca era suficiente.", "se esforzara", "However hard [she tried], it was never enough.", "Por mucho que + imperfecto de subjuntivo en un relato en pasado.", ["lo intentara", "se esforzaba"]),
    fe("Al día siguiente ___ su dimisión.", "presentaría", "The next day she [would hand in] her resignation.", "Futuro del personaje → condicional en el relato (estilo indirecto libre)."),
  ],
  "c1r-challenge-prepositions-no-hints": [
    fe("Lo hice ___ ti, porque me lo pediste.", "por", "I did it [because of] you, because you asked me to.", "«Por» indica causa o motivo."),
    fe("Este regalo es ___ ti.", "para", "This present is [for] you.", "«Para» indica destinatario."),
  ],
  "c1r-challenge-final-formal-email": [
    fe("Les agradecería que ___ mi candidatura.", "consideraran", "I would be grateful if you would [consider] my application.", "Condicional de cortesía + que + imperfecto de subjuntivo.", ["tuvieran en cuenta", "valoraran", "estudiaran"]),
  ],
};
