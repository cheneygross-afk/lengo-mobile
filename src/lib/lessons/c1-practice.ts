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
    fe("No digo que ___, solo que entiendo tu punto.", "tengas razón", "I'm not saying [you're right], just that I understand your point.", "«No digo que» + subjuntivo suaviza la afirmación y evita la confrontación directa.", ["lleves razón"]),
  ],
  "c1r-transform-universal-concessive": [
    fe("___, siempre lo reconocían.", "Fuera donde fuera", "[Wherever he went], people always recognized him.", "Con referencia pasada, la fórmula reduplicativa va en imperfecto de subjuntivo: «fuera donde fuera» (o «fuese donde fuese»).", ["Fuera adonde fuera", "Fuera a donde fuera"]),
  ],
  "c1r-workshop-attenuation": [
    fe("___ comentarle un asunto delicado.", "Quisiera", "[I'd like] to discuss a delicate matter with you.", "«Quisiera» (imperfecto de subjuntivo de cortesía) atenúa la petición frente a «quiero». «Me gustaría» y «querría» son igual de corteses.", ["Me gustaría", "Querría"]),
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
    fe("Aunque ___ toda la noche, no aprobó el examen.", "estudió", "Although she [studied] all night, she didn't pass the exam.", "En la narración de hechos pasados ya conocidos, «aunque» va con indicativo.", ["había estudiado", "estuvo estudiando"]),
    fe("Aunque ___ tarde, todavía podemos llegar.", "es", "Although it [is] late, we can still make it.", "Aunque + indicativo: el hablante afirma como hecho que ya es tarde."),
    fe("Aunque no lo ___, es una persona muy tímida.", "parece", "Although he doesn't [seem] like it, he is a very shy person.", "Indicativo: se presenta como hecho constatado, no como suposición.", ["aparenta"]),
  ],
  "concessive-aunque-2": [
    fe("Aunque ___ mi jefe, no voy a tolerar ese trato.", "sea", "Even if he [is] my boss, I'm not going to tolerate that treatment.", "El subjuntivo no pone en duda que sea el jefe: presenta ese hecho como irrelevante para la conclusión."),
    fe("Aunque ___ una fortuna, lo compraré.", "cueste", "Even if it [costs] a fortune, I'll buy it.", "Aunque + subjuntivo: el precio, sea cual sea, no altera la decisión.", ["valga"]),
  ],
  "c1r-error-hunt-concessives": [
    fe("Aunque ___ la respuesta, no la diría.", "supiera", "Even if I [knew] the answer, I wouldn't say it.", "En una concesiva hipotética, aunque + imperfecto de subjuntivo («supiera/supiese»), nunca condicional (✗ aunque sabría)."),
  ],
  "concessive-aunque-3": [
    fe("A pesar de que ___, llegamos a tiempo.", "llovía", "Even though it [was raining], we arrived on time.", "El obstáculo ya se enfrentó y quedó superado: a pesar de que + indicativo.", ["estaba lloviendo", "llovió"]),
    fe("A pesar de que ___ mañana, mantendremos el evento al aire libre.", "llueva", "Even if it [rains] tomorrow, we'll hold the event outdoors.", "Cuando el obstáculo se proyecta como posibilidad futura, «a pesar de que» lleva subjuntivo."),
  ],
  "concessive-aunque-4": [
    fe("Por más que ___, no cambiaré de opinión.", "insistas", "No matter how much you [insist], I won't change my mind.", "«Por más que» con valor hipotético o general exige subjuntivo."),
    fe("Por mucho dinero que ___, no podrás comprar su confianza.", "tengas", "No matter how much money you [have], you won't be able to buy his trust.", "Por mucho + sustantivo + que + subjuntivo: la cantidad, por elevada que sea, es irrelevante."),
    fe("Por más que lo ___, no lograba entenderlo.", "intentara", "However hard he [tried], he couldn't understand it.", "En pasado se usa el imperfecto de subjuntivo («intentara/intentase»); el indicativo («intentaba») también es posible si se presenta el esfuerzo como hecho real.", ["intentaba"]),
  ],
  "c1r-transform-concessive-connectors": [
    fe("___ su precio, merece la pena.", "Pese a", "[Despite] its price, it's worth it.", "«Pese a» (formal) va seguido de sustantivo o infinitivo; equivale a «a pesar de».", ["A pesar de"]),
  ],
  "concessive-aunque-5": [
    fe("Quiero ___ lo que dije ayer: no me opongo al proyecto, solo al calendario.", "matizar", "I want to [qualify] what I said yesterday: I'm not against the project, only the timetable.", "«Matizar» es precisar o suavizar una afirmación añadiendo detalles o salvedades.", ["precisar", "puntualizar", "aclarar"]),
    fe("Aceptó el contrato, aunque con ___: que se revisara al cabo de un año.", "una salvedad", "He accepted the contract, although with [one proviso]: that it be reviewed after a year.", "«La salvedad» es una excepción o condición que matiza una afirmación general.", ["una condición", "una excepción"]),
    fe("Tras ___ los pros y los contras, decidió quedarse.", "ponderar", "After [weighing up] the pros and cons, she decided to stay.", "«Ponderar» es evaluar con cuidado antes de decidir.", ["sopesar", "valorar", "evaluar", "considerar", "analizar"]),
    fe("Entre los dos informes hay una ___ importante en las cifras.", "discrepancia", "There's a significant [discrepancy] in the figures between the two reports.", "«La discrepancia» es una diferencia de opinión o, como aquí, entre datos que deberían coincidir.", ["diferencia", "divergencia"]),
  ],

  // ---- Nominalización ---------------------------------------------------
  "nominalization-part-1-1": [
    fe("___ los precios hayan subido preocupa a los economistas.", "El hecho de que", "[The fact that] prices have risen worries economists.", "«El hecho de que» convierte la oración en un bloque nominal que funciona como sujeto; la norma más extendida prefiere el subjuntivo («hayan subido»).", ["Que"]),
    fe("El hecho de que no ___ no significa que se haya olvidado.", "haya llamado", "The fact that he hasn't [called] doesn't mean he has forgotten.", "Dentro de «el hecho de que» se prefiere el subjuntivo; el indicativo («ha llamado») subraya la certeza del hecho.", ["ha llamado"]),
    fe("Nos sorprende ___ la propuesta haya sido aprobada tan rápido.", "el hecho de que", "We're surprised by [the fact that] the proposal was approved so quickly.", "La aprobación se nominaliza con «el hecho de que» y funciona como sujeto de «sorprender».", ["que"]),
  ],
  "nominalization-part-1-2": [
    fe("___ no es empezar, sino mantener la constancia.", "Lo difícil", "[The hard part] isn't starting, but staying consistent.", "Lo + adjetivo masculino singular convierte la cualidad en un aspecto concreto que funciona como sujeto.", ["Lo complicado", "Lo más difícil"]),
    fe("No entiendo ___ de este trámite.", "lo complicado", "I don't understand [what's so complicated] about this procedure.", "«Lo complicado de…» aísla un rasgo concreto del trámite sin buscar un sustantivo abstracto.", ["lo complejo", "lo enrevesado"]),
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
    fe("La ___ de la medida se retrasó varios meses.", "implementación", "The [implementation] of the measure was delayed by several months.", "La nominalización elimina el agente explícito y da un tono más objetivo e institucional.", ["implantación", "aplicación", "puesta en marcha"]),
    fe("El ___ de los plazos afectó a todo el proyecto.", "incumplimiento", "The [failure to meet] the deadlines affected the whole project.", "Incumplir → el incumplimiento: un verbo personal se convierte en sustantivo para condensar la información."),
    fe("La ___ del contrato quedó pendiente hasta nuevo aviso.", "revisión", "The [review] of the contract remained pending until further notice.", "Revisar → la revisión: el proceso se nominaliza para un tono más formal e impersonal."),
  ],
  "nominalization-part-2-2": [
    fe("La reciente ___ de la inversión extranjera ha generado un debate.", "reducción", "The recent [reduction] in foreign investment has sparked a debate.", "Sustantivo de proceso con complemento introducido por «de».", ["disminución", "caída", "bajada"]),
    fe("___ de esta tendencia no es su magnitud actual, sino su posible aceleración.", "Lo preocupante", "[What is worrying] about this trend isn't its current size but its possible acceleration.", "Lo + adjetivo + de… focaliza un aspecto concreto de la tendencia.", ["Lo inquietante", "Lo alarmante"]),
    fe("El ___ en la toma de decisiones tendrá un costo.", "retraso", "The [delay] in decision-making will have a cost.", "Retrasar → el retraso; «la toma de decisiones» es otra nominalización fija."),
    fe("Un buen informe debe ___ la información para que el público la entienda.", "sintetizar", "A good report must [summarize] the information so the public can understand it.", "«Sintetizar» es expresar algo de forma breve, reuniendo solo lo esencial.", ["resumir", "condensar"]),
  ],
  "c1r-workshop-formal-register": [
    fe("La ___ de inversión ha dificultado la modernización del sector.", "falta", "The [lack] of investment has hampered the modernization of the sector.", "Registro formal: un sintagma nominal (la falta de inversión) sustituye a una oración («como no se invierte…»).", ["escasez", "ausencia", "carencia"]),
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
    fe("«___ de un exalcalde por corrupción»", "Detención", "«[Arrest] of a former mayor for corruption»", "Titular nominal: detener → la detención; el sustantivo de proceso sustituye al verbo.", ["Arresto"]),
    fe("«___ de las ventas en el sector textil»", "Caída", "«[Drop] in sales in the textile sector»", "Titular nominal: caer → la caída. Equivale a «Las ventas caen en el sector textil».", ["Descenso", "Bajada", "Disminución"]),
  ],

  // ---- Gerundio e infinitivo -------------------------------------------
  "gerund-infinitive-advanced-part-1-1": [
    fe("Salió de la habitación ___ la puerta con cuidado.", "cerrando", "She left the room, [closing] the door carefully.", "Gerundio de simultaneidad, correcto: salir y cerrar la puerta son un mismo movimiento."),
    fe("Se cayó de la bicicleta y ___ el brazo.", "se rompió", "He fell off his bike and [broke] his arm.", "Una consecuencia posterior se coordina con «y» + verbo conjugado; ✗ «rompiéndose el brazo» sería un gerundio de posterioridad.", ["se fracturó"]),
  ],
  "gerund-infinitive-advanced-part-1-2": [
    fe("___ solo enseña más que cualquier libro.", "Viajar", "[Traveling] alone teaches you more than any book.", "El infinitivo funciona como sujeto: donde el inglés usa la forma en -ing, el español usa el infinitivo, no el gerundio.", ["El viajar"]),
    fe("No ___ en las instalaciones.", "fumar", "Do not [smoke] on the premises.", "En carteles y avisos, el infinitivo funciona como mandato impersonal, sin destinatario concreto."),
    fe("___ la distancia de seguridad.", "Mantener", "[Keep] a safe distance.", "Infinitivo de instrucción: formula una norma general, más distante que el imperativo.", ["Guardar", "Respetar"]),
  ],
  "gerund-infinitive-advanced-part-1-3": [
    fe("___ trabajando en el mismo proyecto desde hace meses.", "Sigue", "He's [still] working on the same project after months.", "Seguir + gerundio expresa la prolongación ininterrumpida de una acción ya iniciada.", ["Continúa"]),
    fe("___ de leer el libro antes de dormirse.", "Terminó", "She [finished] reading the book before falling asleep.", "Terminar de + infinitivo marca la conclusión natural y prevista de una acción.", ["Acabó"]),
  ],
  "c1r-error-hunt-gerund-posteriority": [
    fe("Se busca secretaria ___ inglés.", "que hable", "Secretary [who speaks] English wanted.", "El gerundio no puede funcionar como adjetivo de un sustantivo (✗ secretaria hablando inglés): se usa una oración de relativo, en subjuntivo porque la persona no está identificada.", ["que sepa"]),
  ],
  "gerund-infinitive-advanced-part-2-1": [
    fe("___ dos horas esperando el autobús.", "Llevo", "[I've been] waiting for the bus for two hours.", "Llevar + duración + gerundio mide una acción en curso hasta el presente; equivale al «have been -ing» del inglés."),
    fe("El paciente ___ mejorando poco a poco desde la operación.", "va", "The patient [has been] getting better bit by bit since the operation.", "Ir + gerundio añade la idea de progresión gradual hacia un resultado.", ["ha ido", "está", "sigue", "viene"]),
    fe("Mi vecino ___ quejándose del ruido desde hace semanas.", "viene", "My neighbor [has been] complaining about the noise for weeks.", "Venir + gerundio subraya la acumulación y persistencia de una actitud desde el pasado, a menudo con fastidio.", ["lleva", "ha estado", "está", "sigue"]),
  ],
  "gerund-infinitive-advanced-part-2-2": [
    fe("___ tres meses reformando la cocina.", "Llevo", "[I've been] renovating the kitchen for three months.", "Llevar + duración + gerundio: la acción empezó hace tres meses y continúa."),
    fe("La reforma ___ avanzando poco a poco.", "va", "The renovation [is] moving forward little by little.", "Ir + gerundio: progresión gradual hacia el resultado final.", ["está", "sigue"]),
    fe("No dejes de avisarle cuando ___ de instalar el suelo.", "termines", "Make sure to let him know when you [finish] installing the floor.", "Cuando + subjuntivo para un momento futuro; terminar de + infinitivo para el final de una tarea.", ["acabes"]),
    fe("Se observa un aumento ___ de los precios.", "paulatino", "A [gradual] rise in prices can be seen.", "«Paulatino» significa que ocurre poco a poco, de forma lenta y gradual.", ["gradual", "progresivo"]),
  ],
  "c1r-transform-infinitive-subject": [
    fe("___ antes de usar.", "Agitar", "[Shake] before use.", "Infinitivo de instrucción, típico de etiquetas y prospectos."),
  ],
  "gerund-infinitive-advanced-part-2-3": [
    fe("___, la inversión compensa.", "A la larga", "[In the long run], the investment pays off.", "«A la larga»: con el paso del tiempo, al final.", ["A largo plazo", "Con el tiempo"]),
    fe("Las negociaciones se ___ mañana a las diez.", "reanudarán", "The negotiations [will resume] tomorrow at ten.", "«Reanudar» es continuar algo que se había interrumpido.", ["retomarán", "reanudan", "retoman"]),
    fe("Conviene preparar las preguntas ___.", "de antemano", "It's a good idea to prepare the questions [in advance].", "«De antemano»: con anterioridad, antes de que ocurra algo.", ["con antelación", "por adelantado", "con anticipación"]),
    fe("El uso del casco es ___ en toda la obra.", "preceptivo", "Wearing a helmet is [mandatory] throughout the construction site.", "«Preceptivo»: obligatorio por estar ordenado por una norma.", ["obligatorio"]),
  ],

  // ---- Pasiva y se --------------------------------------------------------
  "passive-impersonal-mastery-1": [
    fe("El puente ___ por el ayuntamiento el mes pasado.", "fue inaugurado", "The bridge [was opened] by the city council last month.", "Pasiva perifrástica (ser + participio) con agente explícito introducido por «por»: registro formal y escrito.", ["fue abierto"]),
    fe("La ley ___ por unanimidad en el parlamento.", "fue aprobada", "The law [was passed] unanimously in parliament.", "Ser + participio, con el participio concordando con el sujeto paciente (la ley → aprobada).", ["ha sido aprobada"]),
    fe("El cuadro ___ por un equipo de especialistas.", "fue restaurado", "The painting [was restored] by a team of specialists.", "La pasiva con «ser» funciona bien cuando el agente aporta información relevante.", ["ha sido restaurado"]),
  ],
  "passive-impersonal-mastery-2": [
    fe("___ esta casa.", "Se vende", "This house [is for sale].", "Se pasivo: el verbo concuerda con el sujeto paciente singular (esta casa)."),
    fe("___ los contratos esta mañana.", "Se firmaron", "The contracts [were signed] this morning.", "Se pasivo en plural: el verbo concuerda con «los contratos».", ["Se han firmado"]),
    fe("Ayer ___ el nuevo hospital.", "se inauguró", "The new hospital [was opened] yesterday.", "El se pasivo sustituye de forma natural a «fue inaugurado» cuando el agente no interesa.", ["se abrió"]),
  ],
  "c1r-transform-three-passives": [
    fe("___ que las obras concluyan antes del verano.", "Se espera", "[It is expected] that the works will be completed before summer.", "Se impersonal con verbo de expectativa («esperar», «prever»); con «se espera que» la subordinada va en subjuntivo («concluyan»).", ["Se prevé"]),
  ],
  "c1r-error-hunt-se-agreement": [
    fe("___ habitaciones para estudiantes.", "Se alquilan", "Rooms [for rent] for students.", "Se pasivo: el verbo concuerda con la cosa (habitaciones), así que va en plural; ✗ «se alquila habitaciones»."),
  ],
  "passive-impersonal-mastery-3": [
    fe("___ a los vecinos sobre las obras.", "Se informó", "The residents [were informed] about the works.", "Complemento de persona con «a»: se impersonal, siempre en singular aunque sean muchos vecinos.", ["Se avisó", "Se ha informado"]),
    fe("___ a los especialistas en la materia.", "Se necesita", "The specialists in the field [are needed].", "Se impersonal con complemento de persona marcado por «a»: el verbo queda en singular.", ["Se busca", "Se requiere"]),
  ],
  "passive-impersonal-mastery-4": [
    fe("La puerta ___ por el vigilante a las diez.", "fue cerrada", "The door [was closed] by the guard at ten.", "Ser + participio narra un proceso con agente y momento concretos."),
    fe("El informe ya está ___.", "terminado", "The report is already [finished].", "Estar + participio describe el estado resultante, sin interés por el proceso ni el agente.", ["acabado", "hecho", "listo"]),
    fe("Las tiendas ___ los domingos.", "están cerradas", "The shops [are closed] on Sundays.", "Estado habitual: estar + participio, no un evento con agente.", ["cierran"]),
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
    fe("___ el vaso.", "Se me cayó", "[I dropped] the glass (by accident).", "Se accidental: se + pronombre de la persona afectada (me) + verbo concordado con la cosa. Presenta el hecho como involuntario."),
  ],

  // ---- Estilo indirecto libre --------------------------------------------
  "free-indirect-style-part-1-1": [
    fe("María miró el reloj. Ya ___ tarde; ¿por qué tardaba tanto el autobús?", "era", "María looked at the clock. It [was] already late; why was the bus taking so long?", "En el estilo indirecto libre, el presente del pensamiento («ya es tarde») pasa a imperfecto en la voz del narrador."),
    fe("Ya era tarde; ¿por qué ___ tanto el autobús?", "tardaba", "It was already late; why was the bus [taking] so long?", "La pregunta refleja el pensamiento de María sin verbo introductor ni comillas, con el verbo desplazado al imperfecto."),
    fe("Pensó que ya era tarde y ___ por qué tardaba tanto el autobús.", "se preguntó", "She thought it was already late and [wondered] why the bus was taking so long.", "Estilo indirecto tradicional: verbo introductor explícito (pensó que, se preguntó por qué)."),
  ],
  "free-indirect-style-part-1-2": [
    fe("No ___, estaba segura de ello.", "vendría", "He wouldn't [come], she was sure of it.", "El futuro del pensamiento original («no vendrá») se transforma en condicional dentro de la narración en pasado."),
    fe("Todo ___ perdido; nada tenía ya sentido.", "estaba", "Everything [was] lost; nothing made sense anymore.", "El presente de la conciencia del personaje («todo está perdido») se convierte en imperfecto narrativo."),
    fe("Mañana ___ un día distinto, pensó sin demasiada convicción.", "sería", "Tomorrow [would be] a different day, she thought without much conviction.", "Futuro del personaje → condicional del relato; el deíctico «mañana» se conserva desde su perspectiva."),
  ],
  "free-indirect-style-part-1-3": [
    fe("¡Qué ___ parecía todo ahora!", "ridículo", "How [ridiculous] it all seemed now!", "La exclamación y el adverbio «ahora» delatan la voz subjetiva del personaje.", ["absurdo"]),
    fe("¿Cómo ___ ser tan ingenua?", "había podido", "How [could she have] been so naive?", "La interrogación retórica revela el reproche interno; el pasado del pensamiento se desplaza a pluscuamperfecto."),
    fe("___, en este mismo lugar, todo había comenzado.", "Aquí", "[Here], in this very place, it had all begun.", "Los deícticos de proximidad (aquí, este) sitúan la perspectiva en el personaje, no en el narrador."),
  ],
  "c1r-transform-three-styles": [
    fe("Se preguntó por qué siempre le ___ eso a él.", "pasaba", "He wondered why that always [happened] to him.", "Estilo indirecto: el presente del original («me pasa») pasa a imperfecto tras un verbo introductor en pasado.", ["ocurría", "sucedía"]),
    fe("Dijo que no ___ volver a ese lugar.", "pensaba", "He said he wasn't [planning] to go back to that place.", "Estilo indirecto: «no pienso volver» → «no pensaba volver».", ["quería", "iba a"]),
  ],
  "free-indirect-style-part-2-1": [
    fe("Dijo: «No ___ volver a este lugar».", "pienso", "He said: \"I'm not [planning] to come back to this place.\"", "Estilo directo: se conservan el tiempo verbal y la persona originales.", ["quiero", "voy a"]),
    fe("Dijo que no pensaba volver a ___ lugar.", "ese", "He said he wasn't planning to go back to [that] place.", "En estilo indirecto, el demostrativo de proximidad del personaje (este) pasa a la perspectiva del narrador (ese).", ["aquel"]),
    fe("No, no pensaba volver a ese lugar, ___.", "nunca más", "No, he had no intention of going back to that place, [never again].", "El estilo indirecto libre conserva la energía expresiva del personaje sin verbo introductor.", ["jamás"]),
  ],
  "free-indirect-style-part-2-2": [
    fe("Qué absurdo ___ todo aquello, pensándolo bien.", "había sido", "How absurd it all [had been], come to think of it.", "El pasado del pensamiento se desplaza al pluscuamperfecto en el marco narrativo en pasado."),
    fe("Nadie la ___ de verdad en toda la tarde.", "había escuchado", "Nobody [had] really [listened] to her all afternoon.", "Pluscuamperfecto: anterioridad respecto al momento narrado."),
    fe("Tal vez mañana las cosas se ___ de otra manera.", "verían", "Perhaps tomorrow things [would look] different.", "Futuro del pensamiento («se verán») → condicional en la narración."),
    fe("Le hizo un reproche ___ que nadie más percibió.", "velado", "She made a [veiled] reproach that nobody else noticed.", "«Velado»: oculto o disimulado, no expresado abiertamente.", ["disimulado", "encubierto"]),
  ],
  "c1r-workshop-write-free-indirect": [
    fe("¡Otra vez tarde! ¿Qué ___ a decirle al jefe?", "iba", "Late again! What [was he going] to tell the boss?", "Monólogo «¿qué voy a decirle?» → estilo indirecto libre «¿qué iba a decirle?»: tercera persona e imperfecto, conservando la pregunta."),
  ],
  "free-indirect-style-part-2-3": [
    fe("La muerte de su padre fue el ___ de su vida.", "punto de inflexión", "Her father's death was the [turning point] in her life.", "«El punto de inflexión»: el momento en que algo cambia de dirección de forma decisiva."),
    fe("En sus ojos se podía ___ cierta tristeza.", "entrever", "In his eyes one could [glimpse] a certain sadness.", "«Entrever»: adivinar o intuir algo que no se muestra con claridad.", ["intuir", "adivinar", "percibir", "vislumbrar"]),
    fe("Habla de su pasado con un ___ sorprendente.", "desapego", "He talks about his past with surprising [detachment].", "«El desapego»: falta de implicación afectiva.", ["distanciamiento", "distancia"]),
    fe("El protagonista es un ___ del propio autor.", "trasunto", "The protagonist is a [thinly veiled portrait] of the author himself.", "«El trasunto»: el personaje que representa a una persona real, a menudo al propio autor.", ["alter ego"]),
  ],

  // ---- Por y para ---------------------------------------------------------
  "por-para-precision-1": [
    fe("Hoy trabajo ___ mi compañera, que está de baja.", "por", "Today I'm working [in place of] my colleague, who is on sick leave.", "Trabajar por alguien: sustituirlo temporalmente.", ["en lugar de", "en vez de"]),
    fe("Llevo cinco años trabajando ___ esta empresa.", "para", "I've been working [for] this company for five years.", "Trabajar para alguien: relación laboral estable de dependencia.", ["en"]),
    fe("Firmó el contrato ___ su jefe, que estaba de viaje.", "por", "She signed the contract [on behalf of] her boss, who was away.", "Firmar por alguien: actuar en su representación.", ["en nombre de", "en representación de", "en lugar de"]),
  ],
  "por-para-precision-2": [
    fe("Se le sancionó ___ incumplir el contrato.", "por", "He was penalized [for] breaching the contract.", "«Por» introduce la causa, el motivo ya dado de la sanción."),
    fe("Se redactó una cláusula ___ evitar futuros incumplimientos.", "para", "A clause was drafted [to] prevent future breaches.", "«Para» introduce la finalidad prospectiva de la cláusula.", ["con el fin de", "a fin de", "con objeto de"]),
    fe("La empresa fue multada ___ no respetar la normativa vigente.", "por", "The company was fined [for] not complying with current regulations.", "Causa retrospectiva de una sanción ya impuesta: «por»."),
  ],
  "c1r-error-hunt-por-para-c1": [
    fe("Queda mucho ___.", "por hacer", "There is still a lot [to do].", "Quedar / estar + por + infinitivo: algo que todavía no se ha realizado.", ["que hacer"]),
  ],
  "por-para-precision-3": [
    fe("El informe debe estar listo ___ el viernes.", "para", "The report must be ready [by] Friday.", "«Para» + fecha marca un plazo límite."),
    fe("Estaré fuera de la oficina ___ unos días.", "por", "I'll be out of the office [for] a few days.", "«Por» indica una duración aproximada, sin fecha exacta de regreso.", ["durante"]),
    fe("Necesitamos la propuesta ___ el lunes por la mañana.", "para", "We need the proposal [by] Monday morning.", "Plazo límite preciso: «para»."),
  ],
  "por-para-precision-4": [
    fe("La decisión todavía está ___.", "por tomar", "The decision is still [to be made].", "Estar por + infinitivo: la acción aún no se ha realizado.", ["por tomarse", "sin tomar"]),
    fe("Llevo un paraguas ___ llueve más tarde.", "por si acaso", "I'm taking an umbrella [in case] it rains later.", "«Por si acaso» (o «por si») + indicativo previene una eventualidad.", ["por si"]),
    fe("Perdimos el vuelo y, ___, empezó a llover.", "para colmo", "We missed the flight and, [to top it all off], it started raining.", "«Para colmo» introduce un agravante final, a menudo con ironía.", ["encima", "para colmo de males", "por si fuera poco"]),
  ],
  "c1r-mission-business-email-por-para": [
    fe("Le enviaremos el presupuesto ___ correo electrónico.", "por", "We'll send you the quote [by] email.", "«Por» indica el medio: por correo, por teléfono, por escrito."),
  ],
  "c1r-contrast-idiomatic-por-para": [
    fe("Llegó tarde y, ___, sin los documentos.", "para colmo", "He arrived late and, [to top it off], without the documents.", "Expresión fija: «para colmo» añade el último agravante.", ["encima", "para colmo de males", "por si fuera poco", "además"]),
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
    fe("La reunión ___ en la sala de juntas.", "es", "The meeting [is] in the boardroom.", "Los eventos se localizan con «ser» (tienen lugar), no con «estar».", ["será"]),
    fe("La sala de juntas ___ al fondo del pasillo.", "está", "The boardroom [is] at the end of the corridor.", "La ubicación de un lugar u objeto físico se expresa con «estar»."),
    fe("La boda ___ en el jardín de sus abuelos.", "será", "The wedding [will be] in her grandparents' garden.", "«Boda» es un evento: se localiza con «ser».", ["es"]),
  ],
  "ser-estar-haber-limits-part-1-2": [
    fe("Se puso muy ___ cuando le hicieron esa pregunta.", "violento", "He got very [uncomfortable] when they asked him that question.", "Estar/ponerse violento significa sentirse incómodo en una situación, no tener un carácter agresivo. También vale «incómodo».", ["incómodo", "tenso"]),
    fe("___ muy interesado en el proyecto que le propusiste.", "Está", "He [is] very interested in the project you proposed to him.", "Estar interesado: curiosidad puntual por algo concreto; ser interesado es un rasgo de carácter peyorativo."),
    fe("Es una persona ___ que solo busca su propio beneficio.", "interesada", "She is a [self-serving] person who only looks out for herself.", "Ser interesado/a: rasgo estable de actuar por el propio beneficio.", ["egoísta"]),
  ],
  "ser-estar-haber-limits-part-1-3": [
    fe("___ un problema con el pedido de esta semana.", "Hay", "[There's] a problem with this week's order.", "«Hay» introduce una entidad nueva, con artículo indefinido."),
    fe("El problema ___ en el envío, no en la fábrica.", "está", "The problem [is] in the shipping, not in the factory.", "«Estar» localiza una entidad ya identificada, con artículo definido."),
  ],
  "c1r-contrast-evaluative-estar": [
    fe("¡Qué alto ___ tu hijo!", "está", "How tall your son [has gotten]!", "Estar + adjetivo de cualidad expresa la percepción del hablante en el momento, a menudo sorpresa ante un cambio.", ["se ha puesto"]),
  ],
  "c1r-error-hunt-location-events": [
    fe("La conferencia ___ en el aula magna, pero el conferenciante todavía no ha llegado.", "es", "The lecture [is] in the main hall, but the speaker hasn't arrived yet.", "Evento → ser (tiene lugar); la ubicación del conferenciante iría con estar.", ["será"]),
  ],
  "ser-estar-haber-limits-part-2-1": [
    fe("___ claro que necesitamos más tiempo.", "Está", "It [is] clear that we need more time.", "«Está claro que» añade un matiz de evidencia inmediata; «es claro que» presenta una deducción más objetiva. Ambos son correctos.", ["Es"]),
    fe("Esta sopa ___ buenísima.", "está", "This soup [is] delicious.", "Estar bueno valora una experiencia puntual (lo que acabamos de probar)."),
    fe("Este restaurante ___ bueno en general.", "es", "This restaurant [is] good in general.", "Ser bueno valora una cualidad estable e inherente."),
  ],
  "ser-estar-haber-limits-part-2-2": [
    fe("¿Sabes dónde ___ la conferencia de mañana?", "es", "Do you know where tomorrow's lecture [is]?", "Evento → ser.", ["será"]),
    fe("Es en el auditorio principal, el que ___ al lado de la biblioteca.", "está", "It's in the main auditorium, the one that [is] next to the library.", "Lugar físico → estar."),
    fe("La boda ___ en la catedral el próximo sábado.", "se celebra", "The wedding [takes place] in the cathedral next Saturday.", "«Celebrarse» (tener lugar) es la alternativa formal a «ser» para eventos.", ["se celebrará", "tendrá lugar", "tiene lugar", "será", "es"]),
    fe("Tiene un ___ conciliador que facilita las negociaciones.", "talante", "She has a conciliatory [disposition] that makes negotiations easier.", "«El talante»: el carácter o la disposición habitual de una persona.", ["carácter"]),
  ],
  "c1r-contrast-hybrid-cases": [
    fe("Viajar a esa zona ___ seguro ahora.", "es", "Traveling to that area [is] safe now.", "Ser seguro: sin riesgo. Estar seguro: estar convencido."),
  ],
  "c1r-transform-haber-estar-tener": [
    fe("En la reunión ___ más gente de la esperada.", "había", "There [were] more people at the meeting than expected.", "«Haber» impersonal no tiene plural: había (o hubo) gente, había personas.", ["hubo"]),
  ],
  "ser-estar-haber-limits-part-2-3": [
    fe("Es tímido ___; no es que esté nervioso hoy.", "de por sí", "He's shy [by nature]; it's not that he's nervous today.", "«De por sí»: por su propia naturaleza, sin que influyan las circunstancias.", ["por naturaleza"]),
    fe("Se trata de un problema ___, no estructural.", "coyuntural", "It's a [temporary] problem, not a structural one.", "«Coyuntural»: que depende de una situación concreta y pasajera.", ["pasajero", "transitorio", "circunstancial", "temporal"]),
    fe("Los inspectores pudieron ___ que el edificio cumplía la normativa.", "constatar", "The inspectors were able to [confirm] that the building met the regulations.", "«Constatar»: comprobar un hecho y dejar constancia de él.", ["comprobar", "verificar", "confirmar"]),
    fe("Es un proveedor muy ___; nunca nos ha fallado.", "fiable", "He's a very [reliable] supplier; he's never let us down.", "«Fiable»: que merece confianza.", ["confiable", "de fiar", "serio", "formal"]),
  ],
  "c1r-mission-real-estate-listing": [
    fe("La vivienda ___ situada en pleno centro y tiene vistas al mar.", "está", "The home [is] located right in the center and has sea views.", "Ubicación de un objeto físico: estar situado."),
  ],

  // ---- Verbos preposicionales --------------------------------------------
  "prepositional-verbs-part-1-1": [
    fe("___ contigo para el proyecto de mañana.", "Cuento", "[I'm counting on] you for tomorrow's project.", "Contar con alguien: con + ti se funden en «contigo»."),
    fe("El plan ___ reducir los gastos innecesarios.", "consiste en", "The plan [consists of] cutting unnecessary expenses.", "Consistir en (✗ consistir de, calco del inglés)."),
    fe("___ vivir en otro país algún día.", "Sueño con", "[I dream of] living in another country someday.", "Soñar con (✗ soñar de)."),
  ],
  "prepositional-verbs-part-1-2": [
    fe("Por fin ___ la solución al problema.", "dimos con", "We finally [found] the solution to the problem.", "Dar con: encontrar algo tras una búsqueda activa.", ["encontramos", "hallamos"]),
    fe("___ un viejo amigo en el supermercado.", "Me encontré con", "[I ran into] an old friend at the supermarket.", "Encontrarse con: encuentro casual con alguien.", ["Me topé con", "Me crucé con", "Me encontré a"]),
    fe("Puedes ___ para lo que necesites.", "contar conmigo", "You can [count on me] for whatever you need.", "Contar con alguien: confiar en su apoyo; con + mí = conmigo."),
  ],
  "prepositional-verbs-part-1-3": [
    fe("___ vernos a las siete en la plaza.", "Quedamos en", "[We agreed] to meet at seven in the square.", "Quedar en + infinitivo: el contenido de un acuerdo.", ["Acordamos"]),
    fe("___ que revisáramos el contrato de nuevo.", "Insistió en", "[She insisted] that we go over the contract again.", "Insistir en que + subjuntivo (aquí imperfecto, porque «insistió» está en pasado)."),
  ],
  "prepositional-verbs-part-1-mastery-check": [
    fe("Tuvo que ___ las críticas de todo el equipo.", "enfrentarse con", "He had to [face up to] the criticism from the whole team.", "Enfrentarse con (o a): sostener una confrontación directa.", ["enfrentarse a", "afrontar", "hacer frente a"]),
  ],
  "c1r-sort-prepositional-verbs": [
    fe("___ firmar eso.", "Me niego a", "[I refuse to] sign that.", "Negarse a + infinitivo."),
  ],
  "c1r-contrast-meaning-by-preposition": [
    fe("La habitación ___ un patio interior muy tranquilo.", "da a", "The room [looks out onto] a very quiet inner courtyard.", "Dar a: tener vistas a. No confundir con dar con (encontrar)."),
  ],
  "prepositional-verbs-part-2-1": [
    fe("El resultado ___ varios factores externos.", "depende de", "The result [depends on] several external factors.", "Depender de (✗ depender en, calco de «depend on»)."),
    fe("La teoría ___ datos recogidos durante años.", "se basa en", "The theory [is based on] data collected over years.", "Basarse en (✗ basarse de).", ["se fundamenta en", "se apoya en", "está basada en"]),
    fe("¿Qué ___ la propuesta que presentamos?", "piensas de", "What [do you think of] the proposal we presented?", "Pensar de algo: pedir una opinión. Pensar en algo: tenerlo en la mente.", ["opinas de"]),
  ],
  "prepositional-verbs-part-2-2": [
    fe("¿Y ___ el apoyo de la dirección?", "cuentas con", "And [can you count on] management's support?", "Contar con algo: disponer de ello o confiar en su apoyo.", ["tienes"]),
    fe("___ presentarlo esta semana.", "Me he empeñado en", "[I'm determined to] present it this week.", "Empeñarse en: insistir con tenacidad en hacer algo.", ["Estoy decidida a", "Estoy decidido a", "Me he propuesto"]),
    fe("Hay que ___ el error antes de enviar el informe.", "subsanar", "We need to [correct] the error before sending the report.", "«Subsanar»: corregir un error o reparar un defecto.", ["corregir", "enmendar", "arreglar", "reparar"]),
    fe("___ practicar, acabó dominando el régimen verbal.", "A fuerza de", "[By dint of] practicing, he ended up mastering verb patterns.", "«A fuerza de» + infinitivo: a base de repetir mucho una acción.", ["A base de"]),
  ],
  "c1r-error-hunt-interference": [
    fe("Se enamoró ___ su profesor de música.", "de", "She fell in love [with] her music teacher.", "Enamorarse de (✗ enamorarse con, calco de «fall in love with»)."),
  ],
  "c1r-transform-queismo-dequeismo": [
    fe("___ que habían cancelado el vuelo.", "Me enteré de", "[I found out] that they had cancelled the flight.", "Enterarse de algo → enterarse de que (me enteré de eso → me enteré de que)."),
    fe("No cabe duda ___ es el mejor candidato.", "de que", "There's no doubt [that] he's the best candidate.", "No cabe duda de algo → no cabe duda de que; omitir «de» sería queísmo."),
  ],
  "prepositional-verbs-part-2-3": [
    fe("El plan ___ fundamento.", "carece de", "The plan [lacks] any basis.", "Carecer de: no tener algo necesario."),
    fe("___ tu análisis en un punto fundamental.", "Discrepo de", "[I disagree with] your analysis on one key point.", "Discrepar de (también se oye «discrepar con»).", ["Disiento de", "No estoy de acuerdo con", "Discrepo con"]),
    fe("Nos ___ lo pactado en el contrato.", "atenemos a", "We [abide by] what was agreed in the contract.", "Atenerse a: ajustarse a una norma o un acuerdo.", ["ceñimos a", "ajustamos a"]),
    fe("La organización ___ reducir la jornada laboral.", "aboga por", "The organization [advocates] reducing working hours.", "Abogar por: defender públicamente una idea.", ["defiende", "propugna"]),
  ],
  "prepositional-verbs-part-2-mastery-check": [
    fe("Antes de firmar, ___ que todas las cifras fueran correctas.", "se cercioró de", "Before signing, she [made sure] that all the figures were correct.", "Cerciorarse de que: comprobar algo para tener la seguridad de que es cierto.", ["se aseguró de", "comprobó"]),
  ],
  "c1r-mission-cover-letter-verbs": [
    fe("___ cinco años de experiencia en el sector.", "Cuento con", "[I have] five years' experience in the sector.", "En una carta de motivación, «contar con» es más formal que «tener».", ["Tengo"]),
  ],

  // ---- Conectores discursivos --------------------------------------------
  "advanced-discourse-markers-1": [
    fe("El plan es ambicioso. ___, su coste sigue siendo un obstáculo.", "Ahora bien", "The plan is ambitious. [That said], its cost is still an obstacle.", "«Ahora bien» introduce una salvedad tras aceptar lo dicho, de forma menos abrupta que «pero».", ["Dicho esto", "No obstante", "Sin embargo", "Con todo"]),
    fe("Reconozco que el argumento tiene fuerza. ___, no comparto la conclusión.", "Dicho esto", "I admit the argument is strong. [Having said that], I don't share the conclusion.", "«Dicho esto» cierra un bloque argumentativo y relativiza lo anterior.", ["Ahora bien", "No obstante", "Sin embargo", "Con todo"]),
    fe("Es cierto que mejoraron los resultados; ahora bien, todavía ___ del objetivo.", "están lejos", "It's true that results improved; however, they are still [far from] the target.", "Concesión parcial seguida de una matización relevante.", ["quedan lejos"]),
  ],
  "advanced-discourse-markers-2": [
    fe("___ que las ventas crecieron un veinte por ciento este trimestre.", "Cabe destacar", "[It is worth highlighting] that sales grew by twenty percent this quarter.", "«Cabe destacar» pone en primer plano un dato especialmente relevante.", ["Cabe señalar", "Conviene destacar", "Hay que destacar", "Cabe resaltar"]),
    fe("___ que persisten algunas dudas sobre la viabilidad del proyecto.", "Cabe señalar", "[It should be noted] that some doubts about the project's feasibility remain.", "«Cabe señalar» añade una observación pertinente, con menos énfasis que «cabe destacar».", ["Conviene señalar", "Cabe destacar", "Hay que señalar", "Cabe mencionar"]),
    fe("___ que esta cifra no incluye los gastos de mantenimiento.", "Conviene precisar", "[It should be made clear] that this figure does not include maintenance costs.", "«Conviene precisar» introduce una aclaración que evita una posible ambigüedad.", ["Cabe precisar", "Conviene aclarar", "Cabe aclarar", "Hay que precisar"]),
  ],
  "c1r-transform-ahora-bien": [
    fe("Puedes ir; ___, vuelve antes de las doce.", "eso sí", "You can go; [mind you], be back before twelve.", "«Eso sí» añade una condición o salvedad a lo que se acaba de conceder."),
  ],
  "advanced-discourse-markers-3": [
    fe("___, la decisión depende del presupuesto disponible.", "En última instancia", "[Ultimately], the decision depends on the available budget.", "«En última instancia» señala el criterio final tras considerar otros factores.", ["En último término", "En definitiva", "A fin de cuentas"]),
    fe("___, el proyecto cumplió con los objetivos previstos.", "En definitiva", "[In short], the project met its planned objectives.", "«En definitiva» ofrece una síntesis neutra de lo expuesto.", ["En resumen", "En suma", "En síntesis"]),
    fe("___, todos cometemos errores alguna vez.", "Al fin y al cabo", "[After all], we all make mistakes sometimes.", "«Al fin y al cabo» recuerda una verdad de sentido común que relativiza lo discutido.", ["A fin de cuentas", "Después de todo"]),
  ],
  "advanced-discourse-markers-4": [
    fe("Deberá abandonar el edificio, ___ ser sancionado.", "so pena de", "You must leave the building, [on pain of] being penalized.", "«So pena de» (muy formal, casi arcaico) introduce una sanción impuesta desde fuera.", ["bajo pena de"]),
    fe("Queda prohibido fumar en estas instalaciones, ___ multa.", "bajo pena de", "Smoking is prohibited on these premises, [on pain of a] fine.", "«Bajo pena de» + sustantivo: registro jurídico.", ["so pena de"]),
    fe("Lo diré con claridad, ___ que algunos se sientan incómodos.", "a riesgo de", "I'll say it clearly, [at the risk] that some people may feel uncomfortable.", "«A riesgo de» introduce un riesgo que el propio hablante asume; con «que» lleva subjuntivo.", ["aun a riesgo de"]),
  ],
  "c1r-contrast-conclusion-markers": [
    fe("___, la decisión es del consejo.", "En última instancia", "[Ultimately], the decision rests with the board.", "«En última instancia» señala quién o qué decide al final.", ["En último término", "A fin de cuentas", "Al fin y al cabo"]),
  ],
  "c1r-error-hunt-risk-markers": [
    fe("___ parecer pesado, lo repetiré.", "A riesgo de", "[At the risk of] sounding tiresome, I'll repeat it.", "A riesgo de + infinitivo: aceptando el riesgo de.", ["Aun a riesgo de"]),
  ],
  "advanced-discourse-markers-5": [
    fe("Los costos se recuperan a medio plazo; ___ el proyecto sea rentable.", "de ahí que", "The costs are recouped in the medium term; [hence] the project is profitable.", "«De ahí que» introduce una consecuencia y va seguido de subjuntivo («sea»)."),
    fe("Ningún proyecto está ___ de riesgos por completo.", "exento", "No project is entirely [free] of risks.", "«Exento de»: libre de una obligación, un riesgo o una carga.", ["libre"]),
    fe("Los ingresos han caído; ___, habrá que recortar gastos.", "por ende", "Revenue has fallen; [therefore], spending will have to be cut.", "«Por ende» (culto) equivale a «por lo tanto».", ["por consiguiente", "por lo tanto", "por tanto", "en consecuencia", "así pues"]),
    fe("___ el informe es extenso, sus conclusiones son claras.", "Si bien", "[Although] the report is long, its conclusions are clear.", "«Si bien» (culto) introduce una concesión con indicativo.", ["Aunque", "Pese a que", "A pesar de que"]),
  ],
  "advanced-discourse-markers-6": [
    fe("___ que la seguridad es lo primero.", "Huelga decir", "[Needless to say], safety comes first.", "«Huelga decir que»: no hace falta decir que; introduce algo evidente.", ["No hace falta decir", "Ni que decir tiene"]),
    fe("Hay que ___ las ventajas y los inconvenientes antes de decidir.", "sopesar", "We need to [weigh up] the pros and cons before deciding.", "«Sopesar»: considerar con cuidado ventajas e inconvenientes.", ["ponderar", "valorar", "evaluar", "considerar"]),
    fe("Los tres países fundadores, ___, Francia, Alemania e Italia, firmaron el acuerdo.", "a saber", "The three founding countries, [namely] France, Germany and Italy, signed the agreement.", "«A saber» introduce una enumeración o aclaración.", ["esto es", "es decir"]),
    fe("Hubo muchos problemas. ___, el balance es positivo.", "Con todo", "There were many problems. [Even so], the overall result is positive.", "«Con todo»: a pesar de lo dicho, aun así.", ["Aun así", "No obstante", "Sin embargo", "Pese a todo", "A pesar de todo"]),
  ],
  "c1r-build-cohesive-text": [
    fe("___, conviene analizar las causas.", "En primer lugar", "[First of all], it's worth analyzing the causes.", "Marcador de estructura que abre la enumeración de ideas.", ["Primero", "Ante todo", "Para empezar"]),
  ],

  // ---- Estructuras enfáticas ---------------------------------------------
  "emphatic-structures-1": [
    fe("___ esa decisión la que cambió el rumbo de la empresa.", "Fue", "[It was] that decision that changed the company's course.", "Oración escindida: ser concuerda en tiempo con el verbo de la subordinada (fue… cambió)."),
    fe("Fue él ___ tomó la decisión final.", "quien", "It was he [who] made the final decision.", "En la escindida, persona → quien o el que.", ["el que"]),
    fe("Fue en esa reunión ___ se acordaron los nuevos plazos.", "donde", "It was at that meeting [that] the new deadlines were agreed.", "Lugar focalizado → donde (o en la que). El inglés usa «that» para todo; el español elige el relativo según lo destacado.", ["en la que", "en que"]),
  ],
  "emphatic-structures-2": [
    fe("___ es más tiempo, no más dinero.", "Lo que necesitamos", "[What we need] is more time, not more money.", "Pseudoescindida: lo que + verbo + ser + elemento focalizado."),
    fe("Lo que deberíamos hacer ___ replantear todo el proyecto.", "es", "What we should do [is] rethink the whole project.", "En la pseudoescindida, «ser» va en presente cuando se habla del ahora, aunque el verbo anterior vaya en condicional."),
    fe("___ me preocupa es el plazo, no el precio.", "Lo que", "[What] worries me is the deadline, not the price.", "«Lo que» es el relativo neutro que abre la pseudoescindida."),
  ],
  "c1r-transform-cleft-sentences": [
    fe("Fue Marta ___ rompió el jarrón.", "quien", "It was Marta [who] broke the vase.", "Persona destacada → quien o la que.", ["la que"]),
  ],
  "c1r-dialogue-lab-correcting-with-emphasis": [
    fe("—¿Te llamó el jefe? —No, fue su secretaria ___ me llamó.", "la que", "—Did the boss call you? —No, it was his secretary [who] called me.", "La hendida corrige un dato concreto sin repetir toda la frase.", ["quien"]),
  ],
  "emphatic-structures-3": [
    fe("Ese proyecto, ___ terminamos entre todos.", "lo", "That project, we finished [it] among all of us.", "Al anteponer el complemento directo, un pronombre átono lo retoma (reduplicación)."),
    fe("A mi hermana ___ llamé primero que a nadie.", "la", "My sister, I called [her] before anyone else.", "Complemento directo de persona antepuesto, reduplicado con «la»."),
    fe("Eso ___ no lo esperaba.", "sí que", "That I [really] didn't expect.", "«Sí que» refuerza la afirmación del elemento antepuesto.", ["sí"]),
  ],
  "emphatic-structures-4": [
    fe("No es que no quiera ayudar, ___ no puede hacerlo ahora.", "sino que", "It's not that she doesn't want to help, [but rather that] she can't do it right now.", "«No… sino que» rechaza una posibilidad y afirma la correcta; ante un verbo conjugado se usa «sino que»."),
    fe("Si algo le sobra a este equipo, ___ talento.", "eso es", "If there's one thing this team has plenty of, [it's] talent.", "«Si algo…, eso es…» aísla el elemento focalizado tras una concesión mínima."),
    fe("Yo ___ se lo advertí, aunque no me hiciera caso.", "sí que", "I [did] warn him, even though he didn't listen to me.", "«Sí que» + verbo refuerza la veracidad frente a una suposición contraria; en inglés equivale al «did» enfático.", ["sí"]),
  ],
  "emphatic-structures-5": [
    fe("Fue en esa reunión ___ entendí que no podía seguir así.", "donde", "It was at that meeting [that] I realized I couldn't go on like that.", "Hendida que focaliza un lugar (donde) o un momento (cuando).", ["en la que", "cuando"]),
    fe("___ más me pesó fue sentir que nadie valoraba mi esfuerzo.", "Lo que", "[What] weighed on me most was feeling that nobody valued my effort.", "Pseudoescindida: lo que + verbo + ser."),
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
    fe("___ las tres de la tarde, más o menos.", "Serán", "[It must be] around three in the afternoon.", "Futuro de probabilidad: conjetura sobre el presente, no predicción.", ["Deben de ser", "Deben ser"]),
    fe("___ en casa a estas horas, imagino.", "Estará", "[She must be] at home by now, I imagine.", "Futuro simple = «probablemente está».", ["Debe de estar", "Debe estar"]),
    fe("___ unos cuarenta años, calculo.", "Tendrá", "[He must be] about forty, I reckon.", "La edad aproximada actual se estima con el futuro: tendrá (no «será»).", ["Debe de tener", "Debe tener"]),
  ],
  "future-conditional-conjecture-2": [
    fe("___ unos treinta años cuando lo conocí.", "Tendría", "[I must have been] about thirty when I met him.", "Condicional de probabilidad: conjetura sobre un momento pasado (= probablemente tenía).", ["Debía de tener", "Debía tener"]),
    fe("___ muy cansado, porque se durmió enseguida.", "Estaría", "He [must have been] very tired, because he fell asleep right away.", "Conjetura sobre un estado pasado, inferida de un indicio.", ["Debía de estar", "Debía estar"]),
    fe("¿Dónde ___ Juan anoche? No contestaba al teléfono.", "estaría", "Where [could] Juan [have been] last night? He wasn't answering the phone.", "En preguntas, el condicional expresa que el hablante se pregunta algo sobre el pasado.", ["andaría"]),
  ],
  "future-conditional-conjecture-3": [
    fe("___ ser muy tarde ya; mira cómo está la calle.", "Debe de", "[It must] be very late already; look at the street.", "Según la norma, deber de + infinitivo expresa conjetura. En el habla también se oye «debe» sin «de».", ["Debe"]),
    fe("___ entregar el informe antes del viernes.", "Debes", "[You must] hand in the report before Friday.", "Deber + infinitivo (sin «de») expresa obligación.", ["Tienes que", "Has de"]),
    fe("___ haber unas cien personas en la sala.", "Debe de", "[There must] be about a hundred people in the room.", "Estimación conjetural: deber de + haber.", ["Debe"]),
  ],
  "future-conditional-conjecture-4": [
    fe("A lo mejor ___ mañana a la reunión.", "viene", "Maybe she [is coming] to the meeting tomorrow.", "«A lo mejor» va siempre con indicativo.", ["va", "vendrá"]),
    fe("Tal vez ___ que replantear todo el plan.", "tengamos", "Perhaps we [will have] to rethink the whole plan.", "«Tal vez» admite subjuntivo (más incertidumbre) o indicativo.", ["tendremos", "tenemos"]),
    fe("Quizás no ___ tiempo de terminarlo hoy.", "tenga", "Maybe I won't [have] time to finish it today.", "Quizás + subjuntivo transmite más incertidumbre; con indicativo, algo más de probabilidad.", ["tengo", "tendré"]),
  ],
  "c1r-contrast-four-conjecture-tenses": [
    fe("No contesta; ___ ya.", "habrá salido", "He's not answering; he [must have gone out] already.", "Futuro perfecto = conjetura sobre un pasado reciente (probablemente ha salido).", ["debe de haber salido", "debe haber salido"]),
  ],
  "future-conditional-conjecture-5": [
    fe("¿Qué hora ___? No encuentro el reloj.", "será", "What time [could it be]? I can't find my watch.", "En preguntas, el futuro expresa que el hablante se pregunta algo sobre el presente.", ["puede ser"]),
    fe("___ todavía en el metro; a lo mejor hay algún retraso.", "Estará", "He [must be] still on the metro; maybe there's a delay.", "Futuro de probabilidad sobre el presente.", ["Debe de estar", "Debe estar"]),
    fe("Quizás ___ un camino distinto esta vez.", "haya tomado", "Maybe he [has taken] a different route this time.", "Quizás + perfecto de subjuntivo (o indicativo) para un hecho reciente incierto.", ["ha tomado", "haya cogido", "ha cogido"]),
    fe("El director ___ los cincuenta años.", "rondará", "The director [must be around] fifty.", "«Rondar» una cantidad: acercarse a ella. En futuro, añade conjetura.", ["ronda"]),
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
    fe("Tras ganar confianza, ambas partes decidieron ___.", "tutearse", "After gaining trust, both sides decided [to use tú with each other].", "«Tutearse» (recíproco): pasar del usted al tú.", ["tratarse de tú", "hablarse de tú"]),
    fe("Pasó al usted para ___ tras la discusión.", "marcar distancia", "He switched to usted to [put some distance between them] after the argument.", "El paso súbito del tú al usted señala alejamiento o disgusto.", ["marcar distancias", "guardar las distancias"]),
    fe("A medida que avanzaba la reunión, fueron ___ la formalidad.", "relajando", "As the meeting went on, they gradually [relaxed] the formality.", "Ir + gerundio: cambio gradual.", ["reduciendo", "dejando de lado", "abandonando"]),
  ],
  "formal-informal-register-5": [
    fe("Le agradezco que ___ recibirme con tan poca antelación.", "haya podido", "Thank you for [being able] to see me at such short notice.", "Agradecer que + subjuntivo; perfecto de subjuntivo para un hecho ya cumplido.", ["pudiera"]),
    fe("Tome asiento, por favor. ¿___ un café?", "Le ofrezco", "Have a seat, please. [Can I offer you] a coffee?", "Con usted, el pronombre es «le».", ["Le apetece", "Quiere", "Desea"]),
    fe("Se lo agradezco, pero no ___.", "se moleste", "Thank you, but please don't [go to any trouble].", "Imperativo negativo de usted: no se moleste."),
    fe("Si ___ la última cifra que te envié, verás que el potencial es mayor.", "revisas", "If you [check] the last figure I sent you, you'll see the potential is greater.", "Tras acordar el tuteo, la conversación sigue en tú: revisas, verás, te envié.", ["miras", "consultas"]),
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
    fe("Esto es para ___, che.", "vos", "This is for [you], mate. (vos)", "Tras preposición se usa vos (para vos, con vos), no ti ni contigo."),
  ],
  "c1r-transform-tu-to-vos": [
    fe("¿Por qué no te ___ un rato?", "sentás", "Why don't you [sit down] for a while? (vos)", "Presente voseante de sentarse: te sentás (tú te sientas)."),
  ],
  "voseo-part-2-1": [
    fe("Juzgar el voseo como inferior es un ___ lingüístico.", "prejuicio", "Judging voseo as inferior is a linguistic [prejudice].", "«El prejuicio lingüístico»: considerar inferior una variedad sin fundamento."),
    fe("Esa opinión carece de ___ objetivo.", "fundamento", "That opinion lacks any objective [basis].", "«Carecer de fundamento»: no tener base real.", ["base"]),
    fe("Vos ___, che.", "tenés razón", "[You're right], mate. (vos)", "Tener razón con vos: tenés razón."),
  ],
  "voseo-part-2-2": [
    fe("Che, ¿vos ___ de acá o estás de paso?", "sos", "Hey, [are] you from here or just passing through? (vos)", "Ser con vos: sos."),
    fe("Una vez que te ___, no cuesta nada entenderlo.", "acostumbrás", "Once you [get used to it], it's not hard at all to understand. (vos)", "Presente voseante de acostumbrarse: te acostumbrás."),
    fe("Las formas agudas del voseo, como «tenés», llevan ___.", "tilde", "Stressed-final voseo forms, like «tenés», carry [a written accent].", "Las formas voseantes son agudas terminadas en -s: llevan tilde.", ["acento gráfico", "acento"]),
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
    fe("El español es una lengua ___: ningún país es el centro de la norma.", "policéntrica", "Spanish is a [pluricentric] language: no country is the center of the norm.", "«Policéntrica»: con varias normas igualmente válidas."),
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
    fe("¿A cómo están los ___?", "elotes", "How much is the [corn on the cob]? (Mexico)", "Mazorca de maíz: elote (México), choclo (Cono Sur y Andes)."),
  ],
  "regional-lexical-variation-3": [
    fe("Las ___ que se comen en el cine se llaman cabritas en Chile.", "palomitas", "The [popcorn] people eat at the cinema is called cabritas in Chile.", "«Palomitas» es la forma de España y México.", ["palomitas de maíz"]),
    fe("El contraste entre guagua y autobús ya resulta ___.", "proverbial", "The contrast between guagua and autobús has become [proverbial].", "«Resultar proverbial»: ser tan conocido que se cita como ejemplo."),
    fe("Cada país usa una palabra distinta para ___ el mismo objeto.", "designar", "Each country uses a different word to [refer to] the same object.", "«Designar»: nombrar algo con una palabra concreta.", ["nombrar", "denominar"]),
  ],
  "regional-lexical-variation-4": [
    fe("Vamos a ___ un taxi.", "tomar", "Let's [take] a taxi. (Mexico)", "En México y Argentina, «coger» es malsonante: se dice «tomar» o «agarrar».", ["agarrar"]),
    fe("Ante la duda, conviene elegir la variante más ___.", "neutra", "When in doubt, it's best to choose the most [neutral] option.", "La variante neutra es la menos marcada regionalmente."),
    fe("Esa palabra resulta ___ en algunos países.", "malsonante", "That word is [offensive] in some countries.", "«Malsonante»: chocante o inapropiada por su connotación.", ["vulgar", "grosera", "ofensiva"]),
  ],
  "c1r-error-hunt-false-friends-dialectal": [
    fe("¿Te tomas un ___?", "tinto", "Would you like a [black coffee]? (Bogotá)", "En Colombia, un tinto es un café solo, no un vino.", ["tintico"]),
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
    fe("—¿Por qué no viniste? —___ tenía fiebre.", "Es que", "—Why didn't you come? —[Well, the thing is,] I had a fever.", "«Es que» introduce una justificación en la conversación.", ["Porque"]),
  ],
  "neutral-vs-colloquial-3": [
    fe("Un buen periodista sabe ___ con soltura entre registros.", "moverse", "A good journalist knows how to [move] comfortably between registers.", "«Moverse con soltura»: actuar con naturalidad entre opciones.", ["pasar", "cambiar"]),
    fe("Un registro coloquial en un informe no resulta ___.", "pertinente", "A colloquial register in a report isn't [appropriate].", "El criterio es la pertinencia, no la superioridad de un registro.", ["adecuado", "apropiado", "oportuno"]),
    fe("La publicidad suele ___ registros conscientemente.", "combinar", "Advertising often [combines] registers deliberately.", "Soler + infinitivo: acción habitual.", ["mezclar"]),
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
    fe("¿Ustedes ___ dónde dejé mi celular?", "saben", "Do you guys [know] where I left my phone? (neutral)", "En el español neutro se usa ustedes, no vosotros (sabéis)."),
  ],

  // ---- Correspondencia formal -----------------------------------------
  "formal-correspondence-1": [
    fe("Conviene ___ el asunto desde el primer párrafo.", "plantear", "It's best to [set out] the matter from the first paragraph.", "«Plantear el asunto»: exponer con claridad el motivo.", ["exponer", "presentar"]),
    fe("Evite las ___ y vaya al grano.", "digresiones", "Avoid [digressions] and get to the point.", "«La digresión»: desvío del tema principal."),
    fe("Estimada señora: por medio de ___ le comunico mi decisión.", "la presente", "Dear Madam: [by this letter] I wish to inform you of my decision.", "«Por medio de la presente» introduce el motivo de forma solemne."),
  ],
  "formal-correspondence-2": [
    fe("___ a su disposición para cualquier consulta.", "Quedo", "[I remain] at your disposal for any queries.", "Fórmula de cierre: «Quedo a su disposición».", ["Quedamos"]),
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
    fe("Le agradezco ___ su atención.", "de antemano", "Thank you [in advance] for your attention.", "«De antemano»: con anterioridad.", ["por anticipado", "anticipadamente"]),
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
    fe("___ una correlación clara entre ambas variables.", "Se observa", "A clear correlation [is observed] between the two variables.", "El se impersonal presenta el hallazgo sin atribuirlo a un sujeto.", ["Se aprecia", "Existe", "Hay"]),
    fe("Los datos ___ sostener que el modelo requiere una revisión.", "permiten", "The data [allow us to] argue that the model needs revising.", "Sujeto no humano (los datos) en lugar de «creo que».", ["nos permiten"]),
    fe("En este trabajo ___ los efectos de la medida.", "analizamos", "In this paper [we analyze] the effects of the measure.", "Plural de modestia (nosotros) en lugar de «yo».", ["se analizan"]),
  ],
  "academic-essay-writing-part-1-3": [
    fe("De estos datos ___ que la medida fue eficaz.", "se desprende", "[It follows] from these data that the measure was effective.", "«Desprenderse de»: deducirse de algo.", ["se deduce", "se infiere", "se concluye"]),
    fe("La muestra fue pequeña; ___, los resultados deben tomarse con cautela.", "por consiguiente", "The sample was small; [consequently], the results should be treated with caution.", "Conector de consecuencia.", ["en consecuencia", "por lo tanto", "por tanto", "por ende"]),
  ],
  "academic-essay-writing-part-1-mastery-check": [
    fe("___, conviene señalar las limitaciones metodológicas del estudio.", "Asimismo", "[Likewise], it is worth pointing out the study's methodological limitations.", "«Asimismo» añade un argumento sin contradecir el anterior.", ["Además", "Igualmente", "Del mismo modo"]),
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
    fe("___, los datos respaldan la tesis inicial.", "En suma", "[In sum], the data support the initial thesis.", "Marcador de conclusión.", ["En definitiva", "En resumen", "En síntesis", "En conclusión"]),
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
    fe("Tras la ___ de la ley, se observó un descenso del desempleo.", "aprobación", "After the [passing] of the law, a drop in unemployment was observed.", "Nominalización académica: «cuando se aprobó la ley» → «tras la aprobación de la ley»."),
  ],

  // ---- Desafíos C1 ---------------------------------------------------------
  "c1r-challenge-connector-chain": [
    fe("El turismo aporta riqueza. ___, su crecimiento descontrolado encarece la vivienda.", "No obstante", "Tourism brings wealth. [Nevertheless], its uncontrolled growth drives up housing costs.", "Conector de contraste.", ["Sin embargo", "Ahora bien", "Con todo"]),
    fe("Muchos vecinos abandonan el centro; ___, es necesario regularlo.", "por todo ello", "Many residents are leaving the center; [for all these reasons], it needs to be regulated.", "Conector de conclusión que recoge todo lo anterior.", ["por ello", "por eso", "por consiguiente", "por lo tanto", "en consecuencia"]),
  ],
  "c1r-challenge-build-the-sentence": [
    fe("___ es que no haya un plan B.", "Lo que más me preocupa", "[What worries me most] is that there's no plan B.", "Pseudoescindida; «preocupar que» lleva subjuntivo (haya)."),
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
