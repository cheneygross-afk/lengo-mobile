// Synced from cheneygross-afk/lengo:src/lib/lessons/c2-practice.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { authoring } from "./authoring";

// Extra English-to-Spanish practice for C2 lessons that had too few
// questions (see practice.ts). Keyed by lesson slug; appended to the
// lesson's final exercises. Grammar notes go in the explanation, shown
// after the learner answers.
const { fe } = authoring("es");

export const C2_PRACTICE: Record<string, Exercise[]> = {
  // ---- Español jurídico y administrativo -------------------------------
  "legal-administrative-spanish-part-1-1": [
    fe("___ declaro que los datos aportados son ciertos.", "Por la presente", "[I hereby] declare that the information provided is true.", "«Por la presente» introduce formalmente una declaración, remitiendo al propio documento.", ["Mediante la presente", "Por medio de la presente"]),
    fe("Actúa ___ de las facultades que le confiere el poder notarial.", "en virtud", "He acts [by virtue] of the powers granted to him by the power of attorney.", "«En virtud de» indica el fundamento o la autoridad que justifica una acción."),
    fe("Un contrato es un documento ___ para ambas partes.", "vinculante", "A contract is a [binding] document for both parties.", "«Vinculante»: genera obligaciones legales exigibles.", ["obligatorio"]),
  ],
  "legal-administrative-spanish-part-1-2": [
    fe("El notario ___ de que las firmas son auténticas.", "da fe", "The notary [certifies] that the signatures are genuine.", "«Dar fe de algo»: certificar oficialmente que es cierto.", ["certifica"]),
    fe("El ___ concedió un poder a su sobrino para vender la casa.", "otorgante", "The [grantor] gave his nephew a power of attorney to sell the house.", "«El otorgante» concede algo mediante un documento, como un poder."),
    fe("La compraventa es un ___ jurídico con efectos legales.", "negocio", "A sale is a legal [transaction] with legal effects.", "«Un negocio jurídico»: acuerdo entre partes que produce efectos legales."),
  ],
  "c2r-translate-legalese-plain": [
    fe("___ las acciones legales que procedan, se le requiere el pago.", "Sin perjuicio de", "[Without prejudice to] any legal action that may apply, you are required to pay.", "«Sin perjuicio de»: sin que eso impida algo más; fórmula jurídica de salvedad."),
  ],
  "legal-administrative-spanish-part-1-3": [
    fe("El ___ reclama una indemnización a la empresa.", "demandante", "The [plaintiff] is claiming compensation from the company.", "«El demandante» inicia la acción legal; «el demandado» la recibe.", ["actor"]),
    fe("El tribunal dictó ___ a favor del demandado.", "sentencia", "The court [ruled] in favor of the defendant.", "«Dictar sentencia»: emitir la resolución que pone fin al litigio.", ["un fallo", "una sentencia"]),
    fe("Dispone de un plazo ___ de diez días para recurrir.", "perentorio", "You have a [strict] ten-day deadline to appeal.", "«Un plazo perentorio»: su vencimiento extingue el derecho a actuar.", ["improrrogable"]),
  ],
  "legal-administrative-spanish-part-1-mastery-check": [
    fe("La administración envió una notificación ___ al interesado.", "fehaciente", "The administration sent [formal, verifiable] notice to the person concerned.", "«Fehaciente»: que acredita sin duda que el aviso ha llegado."),
  ],
  "c2r-mission-instancia": [
    fe("Que es propietario de la vivienda ___ en la calle Mayor, 3.", "sita", "That he is the owner of the dwelling [located] at 3 Calle Mayor.", "«Sito/a» es el término jurídico para «situado/a».", ["situada", "ubicada"]),
  ],
  "legal-administrative-spanish-part-2-1": [
    fe("El contrato incluye una ___ de confidencialidad.", "cláusula", "The contract includes a confidentiality [clause].", "«La cláusula»: disposición concreta de un contrato."),
    fe("El impago constituye un ___ contractual.", "incumplimiento", "Non-payment constitutes a [breach] of contract.", "«El incumplimiento contractual»: no cumplir lo pactado."),
    fe("Los socios responden de forma ___ de las deudas.", "solidaria", "The partners are [jointly and severally] liable for the debts.", "Responsabilidad solidaria: se puede exigir el total a cualquiera de los obligados."),
    fe("El ___ firmó en nombre de la empresa.", "apoderado", "The [authorized representative] signed on behalf of the company.", "«El apoderado» actúa en representación de otra persona gracias a un poder.", ["representante"]),
  ],
  "legal-administrative-spanish-part-2-2": [
    fe("Necesito un ___ para que mi hermano firme por mí.", "poder notarial", "I need a [power of attorney] so that my brother can sign for me.", "«El poder notarial» autoriza a otra persona a actuar en tu nombre.", ["poder"]),
    fe("Antes de enviar el documento al extranjero, pida la ___ de firma.", "legalización", "Before sending the document abroad, ask for the [legalization] of the signature.", "«La legalización de firma» certifica que la firma es auténtica."),
    fe("___, firman los comparecientes en presencia del notario.", "En prueba de conformidad", "[In witness whereof], the parties sign in the presence of the notary.", "Fórmula fija de cierre de escrituras y contratos."),
  ],
  "legal-administrative-spanish-part-2-3": [
    fe("La ___ resolutoria permite extinguir el contrato si una parte incumple.", "cláusula", "The termination [clause] allows the contract to be ended if one party defaults.", "«La cláusula resolutoria» autoriza a resolver el contrato."),
    fe("Este acto se ajusta a la normativa ___.", "vigente", "This act complies with [current] regulations.", "«La normativa vigente»: las normas aplicables en este momento.", ["actual", "en vigor"]),
    fe("El caso corresponde a la jurisdicción ___.", "competente", "The case falls under the [competent] jurisdiction.", "«La jurisdicción competente»: el ámbito facultado para conocer el asunto."),
    fe("El ___ entre las dos empresas duró cinco años.", "litigio", "The [lawsuit] between the two companies lasted five years.", "«El litigio»: controversia sometida a un tribunal.", ["pleito", "juicio", "proceso"]),
  ],
  "legal-administrative-spanish-part-2-4": [
    fe("Solicitó una ___ de plazo para presentar los documentos.", "prórroga", "She requested an [extension] of the deadline to submit the documents.", "«La prórroga de plazo»: ampliación de un límite temporal ya fijado.", ["ampliación"]),
    fe("Para completar el trámite hace falta pagar el ___ fiscal.", "timbre", "To complete the procedure you need to pay the [stamp duty].", "«El timbre fiscal»: comprobante de pago exigido para ciertos trámites.", ["impuesto"]),
  ],
  "c2r-story-detective-notification": [
    fe("Dispone de un plazo de diez días ___ para subsanar los defectos.", "hábiles", "You have ten [working] days to correct the errors.", "«Días hábiles» excluye sábados, domingos y festivos.", ["laborables"]),
    fe("Transcurrido dicho plazo, se le tendrá por ___ de su solicitud.", "desistido", "Once that period has passed, you will be deemed to have [withdrawn] your application.", "«Tener por desistido»: considerar que el interesado renuncia."),
  ],
  "legal-administrative-spanish-part-2-mastery-check": [
    fe("Cualquier incumplimiento de esta cláusula ___ la resolución del contrato.", "dará lugar a", "Any breach of this clause [will result in] the termination of the contract.", "«Dar lugar a»: provocar, tener como consecuencia.", ["conllevará", "supondrá", "implicará", "provocará"]),
  ],

  // ---- Español médico ------------------------------------------------------
  "medical-health-spanish-1": [
    fe("Siento un dolor ___ en el pecho, como un pinchazo.", "punzante", "I feel a [stabbing] pain in my chest, like a pinprick.", "«Un dolor punzante»: agudo y repentino.", ["agudo"]),
    fe("Tras el tratamiento, la enfermedad entró en ___.", "remisión", "After the treatment, the disease went into [remission].", "«Entrar en remisión»: los síntomas desaparecen total o parcialmente."),
    fe("Después de meses sin síntomas, sufrió una ___.", "recaída", "After months without symptoms, she had a [relapse].", "«La recaída»: reaparición de la enfermedad tras una mejoría."),
  ],
  "medical-health-spanish-2": [
    fe("¿Tiene alguna ___ a algún medicamento?", "alergia", "Do you have any [allergy] to any medication?", "«La alergia medicamentosa»: reacción adversa a un fármaco."),
    fe("Hay ___ familiares de diabetes.", "antecedentes", "There is a family [history] of diabetes.", "«Los antecedentes familiares»: enfermedades en familiares directos.", ["casos"]),
    fe("El embarazo es una ___ para este fármaco.", "contraindicación", "Pregnancy is a [contraindication] for this drug.", "«La contraindicación»: circunstancia que desaconseja un tratamiento."),
  ],
  "medical-health-spanish-3": [
    fe("La ___ de los pulmones no reveló nada anormal.", "auscultación", "[Listening to] the lungs revealed nothing abnormal.", "«La auscultación»: escuchar los sonidos internos del cuerpo."),
    fe("Le harán una ___ para examinar el tejido.", "biopsia", "They'll do a [biopsy] to examine the tissue.", "Biopsia: extracción de tejido para analizarlo."),
    fe("El médico pidió un ___ de sangre para descartar una infección.", "análisis", "The doctor ordered a blood [test] to rule out an infection.", "«El análisis de sangre» (o «la analítica» en España).", ["examen", "analítica"]),
  ],
  "medical-health-spanish-4": [
    fe("Consulte la ___ en el prospecto antes de tomarlo.", "posología", "Check the [dosage] on the leaflet before taking it.", "«La posología»: dosis, frecuencia y duración de un medicamento.", ["dosis"]),
    fe("Este fármaco puede producir ___ como somnolencia.", "efectos secundarios", "This drug can cause [side effects] such as drowsiness.", "«El efecto secundario»: consecuencia no buscada de un medicamento.", ["efectos adversos"]),
    fe("Antes de operarse, el paciente firmó el consentimiento ___.", "informado", "Before the operation, the patient signed the [informed] consent form.", "«El consentimiento informado» certifica que el paciente conoce riesgos y beneficios."),
  ],
  "c2r-contrast-technical-colloquial-medical": [
    fe("El paciente refiere ___ en la piel.", "prurito", "The patient reports [itching] on the skin." , "Registro técnico: prurito = picor.", ["picazón", "comezón"]),
  ],
  "medical-health-spanish-5": [
    fe("Desde hace diez días tengo un dolor ___ en el costado.", "sordo", "For ten days I've had a [dull] pain in my side.", "«Un dolor sordo»: continuo y de intensidad moderada."),
    fe("Últimamente ha habido una ___ de los síntomas por las noches.", "exacerbación", "Lately there has been a [worsening] of the symptoms at night.", "«La exacerbación»: empeoramiento notable de un síntoma.", ["agravación", "empeoramiento"]),
    fe("Voy a solicitar un análisis para ___ una infección.", "descartar", "I'm going to order a test to [rule out] an infection.", "«Descartar»: excluir una posibilidad."),
    fe("Siga la ___ indicada: una pastilla cada ocho horas.", "pauta", "Follow the prescribed [regimen]: one tablet every eight hours.", "«La pauta»: dosis, frecuencia y duración prescritas.", ["posología", "dosis"]),
  ],
  "medical-health-spanish-6": [
    fe("La ___ quirúrgica duró tres horas.", "intervención", "The surgical [procedure] lasted three hours.", "«La intervención quirúrgica»: operación.", ["operación"]),
    fe("Durante el ___ deberá guardar reposo.", "postoperatorio", "During the [post-operative period] you must rest.", "«Postoperatorio»: periodo que sigue a una operación.", ["posoperatorio"]),
    fe("La artritis es una afección ___.", "crónica", "Arthritis is a [chronic] condition.", "Crónico: de larga duración, frente a agudo."),
    fe("Las autoridades confirmaron un ___ epidémico en la región.", "brote", "The authorities confirmed an epidemic [outbreak] in the region.", "«Brote»: aparición repentina de una enfermedad.", ["foco"]),
  ],
  "c2r-story-detective-medical-report": [
    fe("El paciente presentó una evolución ___ y recibió el alta.", "favorable", "The patient made [good] progress and was discharged.", "«Evolución favorable»: el paciente ha mejorado.", ["buena", "positiva"]),
  ],

  // ---- Modismos -----------------------------------------------------------
  "everyday-idioms-1": [
    fe("El profesor ___ cuando vio que copiábamos.", "hizo la vista gorda", "The teacher [turned a blind eye] when he saw us copying.", "«Hacer la vista gorda»: fingir no notar algo indebido."),
    fe("Con ese comentario solo vas a ___.", "echar leña al fuego", "With that comment you're only going to [add fuel to the fire].", "«Echar leña al fuego»: agravar una situación ya conflictiva.", ["empeorar las cosas"]),
  ],
  "c2r-idioms-image-to-meaning": [
    fe("No te creo: me estás ___.", "tomando el pelo", "I don't believe you: you're [pulling my leg].", "«Tomar el pelo»: burlarse haciendo creer algo falso.", ["vacilando"]),
  ],
  "c2r-idioms-register-choice": [
    fe("Su honestidad nunca se ha puesto en ___.", "tela de juicio", "Her honesty has never been [called into question].", "«Poner en tela de juicio» es un modismo apto para el registro culto.", ["duda", "entredicho"]),
  ],
  "everyday-idioms-2": [
    fe("Con este viaje ___: visito a mi familia y cierro el negocio.", "mato dos pájaros de un tiro", "With this trip [I kill two birds with one stone]: I visit my family and close the deal.", "«Matar dos pájaros de un tiro»: resolver dos asuntos con una acción."),
    fe("Cuando oyó la noticia, ___.", "se quedó de piedra", "When he heard the news, [he was stunned].", "«Quedarse de piedra»: quedarse paralizado por la sorpresa.", ["se quedó helado", "se quedó atónito"]),
  ],
  "c2r-idioms-dialogue-lab": [
    fe("Mi compañero de piso ___ por no fregar nunca los platos.", "me tiene hasta la coronilla", "My flatmate [has me fed up] by never washing the dishes.", "«Tener a alguien hasta la coronilla»: tenerlo harto.", ["me tiene harto", "me tiene harta", "me tiene hasta las narices"]),
  ],
  "proverbs-sayings-1": [
    fe("No le cuentes nada a tu jefe: ___.", "en boca cerrada no entran moscas", "Don't tell your boss anything: [silence is golden].", "«En boca cerrada no entran moscas»: callar a tiempo evita problemas."),
    fe("Quiso hacerlo todo a la vez y no terminó nada: ___.", "quien mucho abarca poco aprieta", "He wanted to do everything at once and finished nothing: [he bit off more than he could chew].", "«Quien mucho abarca poco aprieta»: abarcar demasiado impide hacerlo bien.", ["el que mucho abarca poco aprieta"]),
  ],
  "c2r-proverbs-complete": [
    fe("Acepta la oferta: más vale pájaro en mano que ___.", "ciento volando", "Take the offer: a bird in the hand is [worth two in the bush].", "El refrán completo es «Más vale pájaro en mano que ciento volando».", ["cien volando"]),
  ],
  "proverbs-sayings-2": [
    fe("No opines de medicina si eres arquitecto: ___.", "zapatero, a tus zapatos", "Don't give opinions on medicine if you're an architect: [stick to what you know].", "«Zapatero, a tus zapatos»: cada uno debe ocuparse de lo que domina.", ["zapatero a tus zapatos"]),
    fe("Habla bajito, que ___.", "las paredes oyen", "Speak quietly, because [the walls have ears].", "«Las paredes oyen»: alguien podría estar escuchando."),
  ],
  "c2r-proverbs-contradictory": [
    fe("No dejes ese trabajo fijo por una promesa: ___.", "más vale pájaro en mano que ciento volando", "Don't leave that steady job for a promise: [a bird in the hand is worth two in the bush].", "Este refrán aconseja prudencia frente a «Quien no se arriesga no cruza el río»."),
  ],
  "c2r-proverbs-quote-naturally": [
    fe("Ya lo dice el refrán: ___.", "más vale tarde que nunca", "As the saying goes: [better late than never].", "Fórmulas como «ya lo dice el refrán» introducen la cita con naturalidad."),
  ],
  "proverbs-sayings-3": [
    fe("Si no protestaste en la reunión, todos entenderán que aceptas: ___.", "quien calla otorga", "If you didn't object in the meeting, everyone will assume you agree: [silence gives consent].", "«Quien calla otorga»: no oponerse equivale a aceptar."),
    fe("Hay rumores de despidos, y ___.", "cuando el río suena, agua lleva", "There are rumors of layoffs, and [where there's smoke, there's fire].", "«Cuando el río suena, agua lleva»: un rumor persistente suele tener algo de verdad.", ["cuando el río suena agua lleva"]),
    fe("Ya firmaste el contrato; ahora, ___.", "a lo hecho, pecho", "You've already signed the contract; now [you have to face the consequences].", "«A lo hecho, pecho»: afrontar con entereza lo que ya se hizo.", ["a lo hecho pecho"]),
  ],
  "humor-wordplay-1": [
    fe("Su comentario estaba lleno de ___: decía lo contrario de lo que pensaba.", "ironía", "His comment was full of [irony]: he said the opposite of what he thought.", "La ironía dice lo contrario de lo que se piensa y confía en el contexto."),
    fe("El chiste funciona gracias al ___ de la palabra «banco».", "doble sentido", "The joke works thanks to the [double meaning] of the word «banco».", "«Doble sentido»: una palabra o frase admite dos interpretaciones.", ["doble significado"]),
  ],
  "c2r-humor-double-meaning": [
    fe("El titular tiene dos ___ y por eso hace gracia.", "lecturas", "The headline has two [readings], and that's why it's funny.", "En el análisis del humor se habla de «lecturas» o «interpretaciones».", ["interpretaciones", "sentidos"]),
    fe("La gracia del chiste está en la ___ de la palabra «problemas».", "ambigüedad", "The humor of the joke lies in the [ambiguity] of the word «problemas».", "La ambigüedad es el motor del doble sentido."),
  ],
  "humor-wordplay-2": [
    fe("Soltó un ___ tan grande que todos se partieron de risa.", "disparate", "He came out with such [nonsense] that everyone cracked up.", "«Disparate»: idea absurda dicha con naturalidad.", ["despropósito"]),
    fe("Su humor tiene una ___ que no perdona a nadie.", "mordacidad", "His humor has a [biting sharpness] that spares no one.", "«Mordacidad»: crítica ingeniosa y sin piedad."),
  ],
  "humor-wordplay-3": [
    fe("El ___ del chiste llegó tarde y nadie se rió.", "remate", "The [punchline] of the joke came too late and nobody laughed.", "«Remate»: frase final que provoca el efecto cómico."),
    fe("Esconderle las llaves fue una ___ que no le hizo ninguna gracia.", "broma pesada", "Hiding his keys was a [practical joke gone too far] that he didn't find funny at all.", "«Broma pesada»: burla que se pasa de la medida."),
    fe("Al oír la ocurrencia, soltó una ___.", "carcajada", "When he heard the witty remark, he let out a [loud laugh].", "«Soltar una carcajada»: reír fuerte de repente.", ["risotada"]),
  ],
  "c2r-vocab-word-families": [
    fe("Su ___ para resolver conflictos es admirable.", "capacidad", "Her [ability] to resolve conflicts is admirable.", "«Capacidad» (de «capaz») + para + infinitivo.", ["habilidad"]),
    fe("Lo explicó con tanta ___ que todos lo entendieron.", "sencillez", "He explained it with such [simplicity] that everyone understood.", "«Sencillo» → «sencillez»: el sufijo -ez forma sustantivos de cualidad.", ["claridad"]),
  ],
  "figurative-language-1": [
    fe("Decir que «el tiempo es oro» es usar una ___.", "metáfora", "Saying that «time is gold» is using a [metaphor].", "La metáfora identifica dos realidades sin partícula comparativa."),
    fe("«Duerme como un tronco» es un ___, porque usa «como».", "símil", "«He sleeps like a log» is a [simile], because it uses «como».", "El símil compara con un nexo explícito («como», «cual»).", ["simil", "comparación"]),
  ],
  "c2r-figurative-metaphor-simile": [
    fe("Sus palabras fueron ___ para todos.", "un jarro de agua fría", "His words were [a bucket of cold water] for everyone.", "Metáfora lexicalizada: «un jarro de agua fría» es una decepción repentina.", ["una ducha de agua fría"]),
  ],
  "figurative-language-2": [
    fe("Te lo he dicho ___ veces.", "un millón de", "I've told you [a million] times.", "Hipérbole: exageración deliberada para dar énfasis.", ["mil", "cien mil", "un millón"]),
    fe("Aquí tienes ___: nos faltan manos para terminar.", "trabajo de sobra", "Here you've got [more than enough work]: we're short of hands to finish.", "«Faltan manos» es una sinécdoque: la parte (las manos) por el todo (los trabajadores).", ["trabajo de sobras", "mucho trabajo"]),
  ],
  "c2r-figurative-metonymy-synecdoche": [
    fe("Esta noche vamos a escuchar ___.", "a Mozart", "Tonight we're going to listen to [Mozart].", "Metonimia autor por obra; delante de persona va la «a» personal.", ["Mozart"]),
  ],
  "figurative-language-3": [
    fe("La ciudad ___ bajo la lluvia.", "dormía", "The city [was sleeping] in the rain.", "Personificación: atribuye una acción humana a algo inanimado.", ["duerme", "dormía tranquila"]),
    fe("Este libro es ___ para el alma.", "un bálsamo", "This book is [a balm] for the soul.", "Metáfora: el libro se identifica con algo que alivia.", ["bálsamo", "una medicina"]),
    fe("Su voz era ___ en medio del ruido.", "como un susurro", "Her voice was [like a whisper] amid the noise.", "Símil con «como»: compara de forma explícita.", ["un susurro"]),
  ],
  "euphemisms-indirect-1": [
    fe("Su abuelo ___ el invierno pasado.", "pasó a mejor vida", "His grandfather [passed away] last winter.", "Eufemismo para «murió»; también «falleció», «nos dejó».", ["falleció", "nos dejó", "murió"]),
    fe("Este mes tendremos que ___.", "apretarnos el cinturón", "This month we'll have to [tighten our belts].", "Eufemismo de dificultades económicas.", ["apretarnos el cinto"]),
  ],
  "c2r-euphemism-decode": [
    fe("Han anunciado un ___ de precios, es decir, una subida.", "ajuste", "They've announced a price [adjustment], meaning an increase.", "«Ajuste de precios» suele encubrir una subida.", ["reajuste"]),
  ],
  "euphemisms-indirect-2": [
    fe("La empresa ha decidido ___ de sus servicios.", "prescindir", "The company has decided to [dispense with] his services.", "«Prescindir de los servicios» es un eufemismo de despedir."),
    fe("Al final prefirió no ___ por su nombre.", "llamar a las cosas", "In the end she preferred not to [call things] by their name.", "«Llamar a las cosas por su nombre»: hablar sin eufemismos."),
  ],
  "c2r-euphemism-corporate-rewrite": [
    fe("La empresa va a llevar a cabo una ___ de plantilla.", "reducción", "The company is going to carry out a staff [reduction].", "«Reducción de plantilla» suaviza «despidos».", ["reestructuración", "ajuste", "reorganización"]),
  ],
  "euphemisms-indirect-3": [
    fe("El médico dijo que la paciente estaba ___ de salud.", "delicada", "The doctor said the patient's health was [fragile].", "«Estar delicado de salud» suaviza una situación grave.", ["delicadita"]),
    fe("Es una persona ___, aunque muy activa.", "de edad avanzada", "She is an [elderly] person, though very active.", "«De edad avanzada» evita «vieja» o «anciana».", ["mayor", "de la tercera edad"]),
    fe("Despidieron a cincuenta empleados, aunque lo llamaron «___».", "optimización de recursos", "They fired fifty employees, though they called it «[resource optimization]».", "Lenguaje corporativo que encubre despidos.", ["optimización de recursos humanos"]),
  ],
  "exclamations-emphasis-1": [
    fe("¿Cancelar el viaje ahora? ¡___!", "Ni hablar", "Cancel the trip now? [No way]!", "«¡Ni hablar!» es una negación rotunda.", ["ni de broma", "de ninguna manera", "ni loco", "ni loca"]),
    fe("—Me caso en mayo. —¡___! ¡Qué sorpresa!", "No me digas", "—I'm getting married in May. —[You don't say]! What a surprise!", "«¡No me digas!» expresa sorpresa e incredulidad.", ["no puede ser", "no me lo puedo creer", "anda"]),
  ],
  "c2r-exclamations-sort-function": [
    fe("—Se ha vuelto a ir la luz. —¡___!", "Lo que faltaba", "—The power's gone out again. —[That's all we needed]!", "«¡Lo que faltaba!» expresa fastidio.", ["vaya por Dios", "lo que nos faltaba"]),
  ],
  "c2r-exclamations-intensity-scale": [
    fe("—¿Te he molestado? —___, pasa.", "Qué va", "—Have I bothered you? —[Not at all], come in.", "«Qué va» niega sin dramatismo.", ["Para nada", "En absoluto", "Nada", "No"]),
  ],
  "exclamations-emphasis-2": [
    fe("—Por fin han arreglado el ascensor. —¡___!", "Ya era hora", "—They've finally fixed the elevator. —[About time]!", "«¡Ya era hora!» expresa alivio ante algo muy esperado.", ["Ya iba siendo hora"]),
    fe("No me queda otra que trabajar el sábado. ¡Qué ___!", "remedio", "I have no choice but to work on Saturday. [Oh well]!", "«¡Qué remedio!» expresa aceptación resignada.", ["le vamos a hacer"]),
  ],
  "c2r-exclamations-dialogue-reactions": [
    fe("—Se ha quedado con mi bocadillo sin preguntar. —¡Qué ___ tiene!", "morro", "—He took my sandwich without asking. —[What a nerve he has]!", "«¡Qué morro tiene!» (España, coloquial) critica el descaro.", ["cara", "jeta", "caradura"]),
  ],
  "diminutives-augmentatives-1": [
    fe("Espere un ___, por favor; ahora le atiendo.", "momentito", "Wait [just a moment], please; I'll be right with you.", "Diminutivo atenuador o cortés, no de tamaño.", ["momentico", "segundito", "momento"]),
    fe("Menudo ___ hizo al confundir el nombre del cliente.", "papelón", "He [made a fool of himself] when he mixed up the client's name.", "Aumentativo con matiz de ridículo: «hacer un papelón».", ["ridículo", "papelazo"]),
  ],
  "c2r-diminutive-values": [
    fe("¿Me haces un ___? Solo es un minuto.", "favorcito", "Can you do me [a little favor]? It only takes a minute.", "El diminutivo suaviza la petición por cortesía.", ["favorcillo", "favor"]),
  ],
  "diminutives-augmentatives-2": [
    fe("La película ha sido un ___ de taquilla.", "exitazo", "The film has been a [huge success] at the box office.", "El aumentativo -azo expresa admiración o gran magnitud.", ["éxito enorme", "gran éxito", "bombazo"]),
    fe("Eres un ___: has vuelto a romper el vaso.", "manazas", "You're [so clumsy]: you've broken the glass again.", "«Manazas»: persona torpe con las manos.", ["torpe", "patoso", "patosa"]),
  ],
  "c2r-diminutive-regional-lexicalized": [
    fe("Abre la ___ del coche, que hace calor.", "ventanilla", "Open the car [window], it's hot.", "«Ventanilla» está lexicalizada: no significa «ventana pequeña».", ["ventana"]),
    fe("Deja las gafas en la ___, junto a la cama.", "mesilla", "Leave your glasses on the [nightstand], next to the bed.", "«Mesilla» (de noche) es un diminutivo lexicalizado.", ["mesita", "mesita de noche", "mesilla de noche"]),
  ],
  "business-idioms-1": [
    fe("La dirección ya ha dado ___ al proyecto.", "luz verde", "Management has already given the project [the green light].", "«Dar luz verde»: aprobar algo para que avance.", ["el visto bueno"]),
    fe("Antes de negociar, conviene ___ sobre la mesa.", "poner las cartas", "Before negotiating, it's best to [lay your cards] on the table.", "«Poner las cartas sobre la mesa»: mostrar las intenciones con claridad.", ["poner todas las cartas"]),
  ],
  "business-idioms-2": [
    fe("Para este lanzamiento vamos a ___.", "tirar la casa por la ventana", "For this launch we're going to [spare no expense].", "«Tirar la casa por la ventana»: gastar sin escatimar.", ["echar la casa por la ventana"]),
    fe("Tras la crisis, la empresa ___ en su estrategia.", "dio un giro de ciento ochenta grados", "After the crisis, the company [made a complete U-turn] in its strategy.", "«Dar un giro de 180 grados»: cambiar radicalmente.", ["dio un giro de 180 grados", "dio un giro radical"]),
  ],
  "c2r-business-idioms-crisis-rewrite": [
    fe("Con tantas deudas, estamos ___.", "con el agua al cuello", "With so much debt, we're [up to our necks in trouble].", "«Estar con el agua al cuello»: en graves apuros, sobre todo económicos.", ["con la soga al cuello"]),
  ],
  "listening-reading-strategies-1": [
    fe("Aunque no conocía la palabra, pudo ___ su significado por el contexto.", "deducir", "Although he didn't know the word, he was able to [work out] its meaning from the context.", "«Deducir» o «inferir» el significado a partir del contexto.", ["inferir", "adivinar"]),
    fe("Un buen lector no ___ cada palabra en el diccionario.", "busca", "A good reader doesn't [look up] every word in the dictionary.", "«Buscar en el diccionario»: consultar una palabra.", ["consulta"]),
    fe("El ___ de la frase te ayuda a entender la palabra desconocida.", "contexto", "The [context] of the sentence helps you understand the unknown word.", "El contexto es la principal pista para inferir significados.", ["sentido"]),
    fe("Fíjate en el ___ de la palabra: «des-» suele indicar lo contrario.", "prefijo", "Pay attention to the word's [prefix]: «des-» often indicates the opposite.", "La morfología (prefijos y sufijos) ayuda a deducir significados."),
  ],
  "c2r-strategy-infer-unknown-word": [
    fe("Lo que no se puede leer es ___.", "ilegible", "What can't be read is [illegible].", "Prefijo «i-» (negación) + «legible»."),
  ],
  "listening-reading-strategies-2": [
    fe("Si una palabra no es clave, es mejor ___ y seguir leyendo.", "pasarla por alto", "If a word isn't key, it's better to [skip over it] and keep reading.", "«Pasar por alto»: no detenerse en algo.", ["ignorarla", "saltarla", "dejarla pasar"]),
    fe("Los nativos hablan tan rápido que a veces se ___ sílabas.", "comen", "Native speakers talk so fast that sometimes they [swallow] syllables.", "«Comerse» sílabas o letras: no pronunciarlas.", ["tragan"]),
    fe("No hace falta entender todo para captar la ___ general.", "idea", "You don't need to understand everything to grasp the general [idea].", "«Captar la idea general» o «el sentido global».", ["idea principal", "esencia"]),
  ],
  "c2r-strategy-register-shifts": [
    fe("Cuando se enfadó, empezó a ___ de usted.", "hablarme", "When he got angry, he started [addressing me] formally.", "«Hablar (o tratar) de usted»: usar el registro formal.", ["tratarme"]),
  ],
  "listening-reading-strategies-3": [
    fe("En pocos segundos pasó del registro formal al ___.", "coloquial", "In a few seconds he went from formal register to [colloquial].", "Registro coloquial frente a formal o culto.", ["informal", "familiar"]),
    fe("Ese cambio de tono revela su verdadera ___.", "intención", "That change of tone reveals his true [intention].", "El cambio de registro suele tener una intención comunicativa.", ["actitud"]),
    fe("En los textos cultos, el lector debe deducir la ___ entre las ideas.", "relación", "In formal texts, the reader must work out the [connection] between ideas.", "Las conexiones lógicas a menudo están implícitas.", ["conexión", "relación lógica"]),
    fe("Este artículo no usa ___: las ideas aparecen simplemente yuxtapuestas.", "conectores", "This article doesn't use [connectors]: the ideas are simply juxtaposed.", "Conectores como «sin embargo» o «por tanto» explicitan la relación lógica.", ["nexos", "marcadores", "marcadores discursivos"]),
  ],
  "c2r-strategy-implicit-connections": [
    fe("Prometió cambiar; ___, a las tres semanas volvió a las andadas.", "sin embargo", "He promised to change; [however], three weeks later he was back to his old ways.", "El conector explicita el contraste implícito.", ["no obstante", "aun así", "pero"]),
  ],
  "listening-reading-strategies-4": [
    fe("De repente cambió de ___ y se puso muy serio.", "tono", "Suddenly he changed his [tone] and became very serious.", "«Cambiar de tono»: señal de una nueva intención comunicativa.", ["registro"]),
    fe("No lo dijo directamente, pero lo dio a ___.", "entender", "He didn't say it directly, but he [implied it].", "«Dar a entender»: comunicar algo de forma implícita.", ["entenderlo"]),
    fe("Hay que leer ___ para captar la crítica.", "entre líneas", "You have to read [between the lines] to catch the criticism.", "«Leer entre líneas»: captar lo implícito."),
  ],
  "c2r-strategy-fast-speech": [
    fe("En el habla rápida, mucha gente pronuncia «cansado» como «___».", "cansao", "In fast speech, many people pronounce «cansado» as «[cansao]».", "Caída de la -d- intervocálica en los participios en -ado.", ["cansa'o"]),
    fe("Ese ___ no te sirve en un correo formal.", "registro", "That [register] isn't suitable for a formal email.", "Las reducciones orales pertenecen al registro coloquial.", ["estilo"]),
  ],
  "listening-reading-strategies-5": [
    fe("Bajo sus palabras amables había un ___ de reproche.", "subtexto", "Beneath his kind words there was a [subtext] of reproach.", "«Subtexto»: significado implícito bajo lo literal.", ["trasfondo", "tono"]),
    fe("El texto da por ___ que el lector conoce el contexto.", "sentado", "The text [takes for granted] that the reader knows the context.", "«Dar por sentado»: presuponer algo.", ["supuesto", "hecho"]),
    fe("Para entender a hablantes de otros países, conviene escuchar ___ variedades.", "distintas", "To understand speakers from other countries, it's good to listen to [different] varieties.", "«Variedades» del español: andaluza, rioplatense, caribeña…", ["diferentes", "diversas", "varias"]),
  ],
  "c2r-strategy-radio-interview": [
    fe("Yo no ___ de alarma, sino de cambio.", "hablaría", "I [wouldn't speak] of alarm, but of change.", "El condicional atenúa la discrepancia.", ["diría"]),
  ],
  "listening-reading-strategies-6": [
    fe("Escuchar pódcast de distintos países ayuda a ___ el oído.", "entrenar", "Listening to podcasts from different countries helps [train] your ear.", "«Entrenar» o «educar el oído».", ["educar", "acostumbrar"]),
    fe("Al principio el acento ___ me costaba mucho.", "rioplatense", "At first the [River Plate] accent was really hard for me.", "Variedad del español hablada en Argentina y Uruguay.", ["argentino", "porteño"]),
    fe("Si te pierdes, no te ___: quédate con las palabras clave.", "agobies", "If you get lost, [don't panic]: hold on to the key words.", "Imperativo negativo con subjuntivo: «no te agobies».", ["bloquees", "preocupes", "pongas nervioso", "pongas nerviosa"]),
  ],
  "listening-reading-strategies-7": [
    fe("De su silencio se puede ___ que no está de acuerdo.", "deducir", "From his silence one can [infer] that he doesn't agree.", "«Colegir», «deducir» e «inferir» son sinónimos en registro culto.", ["inferir", "colegir"]),
    fe("Más allá de la denotación, la palabra tiene una ___ negativa.", "connotación", "Beyond its denotation, the word has a negative [connotation].", "Connotación: valor subjetivo o asociativo de una palabra."),
  ],
  "c2r-strategy-note-taking": [
    fe("Al tomar notas, conviene usar ___ para ir más rápido.", "abreviaturas", "When taking notes, it's best to use [abbreviations] to go faster.", "Abreviaturas como «xq» (porque) o «tb» (también).", ["abreviaciones", "siglas"]),
  ],
  "listening-reading-strategies-8": [
    fe("«O sea» introduce una ___ de lo que acabas de decir.", "reformulación", "«O sea» introduces a [rephrasing] of what you just said.", "Marcadores de reformulación: «es decir», «o sea», «dicho de otro modo».", ["aclaración", "paráfrasis"]),
    fe("«Anamnesis» es un ___ propio del lenguaje médico.", "tecnicismo", "«Anamnesis» is a [technical term] typical of medical language.", "Tecnicismo: palabra propia de una disciplina.", ["término técnico"]),
  ],
  "c2r-strategy-spiral-review": [
    fe("Lejos de ___, los vecinos organizaron una sentada.", "resignarse", "Far from [giving up], the residents organized a sit-in.", "«Lejos de + infinitivo» expresa lo contrario de lo esperado.", ["rendirse", "conformarse"]),
    fe("El ___ prometió reparar la plaza, pero no hizo nada.", "ayuntamiento", "The [town council] promised to repair the square, but did nothing.", "«Consistorio» es sinónimo culto de «ayuntamiento».", ["consistorio", "municipio"]),
  ],
  "debate-persuasion-1": [
    fe("Reconozco que tiene parte de ___, pero no comparto su conclusión.", "razón", "I admit you're partly [right], but I don't share your conclusion.", "Conceder antes de refutar: «tener (parte de) razón».", ["verdad"]),
    fe("Es cierto que la medida es cara; ___, a largo plazo nos ahorrará dinero.", "no obstante", "It's true that the measure is expensive; [nevertheless], in the long run it will save us money.", "Concesión + conector contraargumentativo.", ["sin embargo", "aun así", "con todo"]),
    fe("Conceder un punto secundario transmite ___ intelectual.", "honestidad", "Conceding a minor point conveys intellectual [honesty].", "La concesión estratégica refuerza la credibilidad.", ["honradez"]),
    fe("Si bien sus datos son correctos, la ___ que saca es dudosa.", "conclusión", "While his data are correct, the [conclusion] he draws is questionable.", "«Si bien» introduce una concesión en registro culto."),
  ],
  "debate-persuasion-2": [
    fe("Le concedo ese punto, pero eso no ___ su tesis.", "demuestra", "I'll grant you that point, but it doesn't [prove] your thesis.", "Conceder no equivale a rendirse.", ["prueba"]),
    fe("Atacar al rival en lugar de a sus ideas es una ___.", "falacia", "Attacking your opponent instead of their ideas is a [fallacy].", "Falacia ad hominem.", ["falacia ad hominem"]),
    fe("Admito que hay ___ a mi propuesta, pero las ventajas son mayores.", "inconvenientes", "I admit there are [drawbacks] to my proposal, but the advantages are greater.", "«Admito que» + indicativo para conceder.", ["objeciones", "desventajas", "riesgos"]),
  ],
  "debate-persuasion-3": [
    fe("Esa generalización es ___: no puedes juzgar a todo un país por dos personas.", "apresurada", "That generalization is [hasty]: you can't judge a whole country by two people.", "Falacia de la generalización apresurada.", ["precipitada"]),
    fe("Deformar el argumento del rival se llama falacia del hombre de ___.", "paja", "Distorting your opponent's argument is called the [straw man] fallacy.", "Hombre de paja: atacar una versión caricaturizada."),
    fe("Me presentas un falso ___: hay más opciones que esas dos.", "dilema", "You're presenting me with a false [dilemma]: there are more options than those two.", "Falso dilema: reducir las opciones a dos."),
    fe("Su argumento no se ___ en ningún dato.", "apoya", "His argument isn't [supported] by any data.", "«Apoyarse/basarse/sustentarse en» datos.", ["basa", "sustenta", "fundamenta"]),
  ],
  "c2r-debate-fallacy-hunt": [
    fe("Que ocurra después no significa que sea la ___.", "causa", "The fact that it happens afterwards doesn't mean it's the [cause].", "Falacia post hoc: confundir sucesión con causalidad."),
    fe("Eso es un ataque ___, no un argumento.", "personal", "That's a [personal] attack, not an argument.", "Ad hominem: atacar a la persona.", ["ad hominem"]),
  ],
  "debate-persuasion-4": [
    fe("Si cedemos en esto, ¿dónde vamos a ___?", "parar", "If we give in on this, where will we [stop]?", "Fórmula típica de la pendiente resbaladiza.", ["acabar", "detenernos"]),
    fe("Eso es una petición de ___: das por demostrado lo que quieres probar.", "principio", "That's [begging the question]: you take for granted what you want to prove.", "Petición de principio: razonamiento circular."),
    fe("Su razonamiento es ___: la conclusión ya está en la premisa.", "circular", "His reasoning is [circular]: the conclusion is already in the premise.", "Razonamiento circular = petición de principio."),
  ],
  "debate-persuasion-5": [
    fe("Con todo el ___, discrepo de lo que acaba de decir.", "respeto", "With all due [respect], I disagree with what you just said.", "Fórmula cortés para discrepar."),
    fe("No ___ en absoluto con esa propuesta.", "estoy de acuerdo", "I don't [agree] at all with that proposal.", "Desacuerdo firme y respetuoso.", ["coincido"]),
    fe("Entiendo su postura, pero me ___ discrepar.", "permito", "I understand your position, but [allow me to] disagree.", "«Permítame discrepar» / «me permito discrepar».", ["va a permitir"]),
  ],
  "debate-persuasion-6": [
    fe("Recortar en sanidad es ___ quitarle el paraguas a alguien en plena tormenta.", "como", "Cutting health spending is [like] taking someone's umbrella away in the middle of a storm.", "Analogía: hace comprensible un argumento abstracto."),
    fe("Abusar del llamamiento ___ resta credibilidad.", "emocional", "Overusing [emotional] appeals undermines credibility.", "Pathos: apelar a las emociones del público.", ["a las emociones", "sentimental"]),
    fe("Una buena ___ hace tangible una estadística.", "anécdota", "A good [anecdote] makes a statistic tangible.", "El ejemplo concreto convence más que el dato abstracto.", ["historia", "ejemplo"]),
    fe("¿___ alguien puede estar en contra de la educación pública?", "Acaso", "[Can] anyone [really] be against public education?", "Pregunta retórica: no espera respuesta.", ["De verdad"]),
  ],
  "c2r-debate-rhetorical-devices": [
    fe("Queremos ___ dignos. Queremos escuelas abiertas.", "salarios", "We want decent [wages]. We want open schools.", "Anáfora: repetición de «Queremos» al inicio de cada frase.", ["sueldos", "trabajos", "empleos"]),
  ],
  "debate-persuasion-7": [
    fe("Permítanme ___ la idea central una vez más.", "reiterar", "Allow me to [reiterate] the central idea once more.", "«Reiterar»: repetir con intención enfática.", ["repetir", "subrayar", "recalcar"]),
    fe("Si exageras demasiado, ___ credibilidad.", "pierdes", "If you exaggerate too much, [you lose] credibility.", "La hipérbole excesiva resta crédito.", ["perderás"]),
    fe("Conviene ___ los datos con un ejemplo cercano.", "ilustrar", "It's a good idea to [illustrate] the data with a relatable example.", "«Ilustrar» un dato con un caso concreto.", ["acompañar", "completar"]),
    fe("Fue un discurso ___, pero sin argumentos.", "brillante", "It was a [brilliant] speech, but without arguments.", "La retórica no sustituye a la argumentación.", ["elocuente", "precioso"]),
  ],
  "c2r-debate-mission-closing": [
    fe("La pregunta no es cuánto cuesta actuar, ___ cuánto nos costará no hacerlo.", "sino", "The question isn't how much it costs to act, [but] how much it will cost us not to.", "«No… sino…» contrapone y corrige."),
  ],
  "debate-persuasion-8": [
    fe("Su ___ me convenció más que sus datos.", "elocuencia", "His [eloquence] convinced me more than his data.", "«Elocuencia»: capacidad de expresarse con eficacia persuasiva.", ["oratoria"]),
    fe("Eso no es un argumento, es un ___.", "sofisma", "That's not an argument, it's a [sophism].", "«Sofisma»: argumento engañoso con apariencia de válido.", ["falacia"]),
  ],
  "debate-persuasion-9": [
    fe("Tras un largo debate, llegaron a una ___.", "avenencia", "After a long debate, they reached an [agreement].", "«Avenencia»: acuerdo alcanzado tras discrepar.", ["acuerdo", "conciliación"]),
    fe("Su ___ impidió cualquier acuerdo.", "intransigencia", "His [intransigence] prevented any agreement.", "«Intransigencia»: negativa a ceder."),
  ],
  "c2r-present-openings": [
    fe("Hoy quiero ___ de algo que nos afecta a todos.", "hablarles", "Today I want to [talk to you] about something that affects us all.", "«Hablarles» (ustedes): registro formal ante un público.", ["hablaros", "hablar"]),
  ],
  "presentations-negotiation-2": [
    fe("Para ___, les dejo con una pregunta.", "terminar", "To [finish], I'll leave you with a question.", "Fórmulas de cierre: «para terminar», «para concluir», «en definitiva».", ["concluir", "cerrar", "acabar", "finalizar"]),
    fe("Muchas gracias por su ___. ¿Alguna pregunta?", "atención", "Thank you very much for your [attention]. Any questions?", "Fórmula de cortesía al cerrar una presentación."),
    fe("En el ___, la ponente situó el tema y captó la atención del auditorio.", "preámbulo", "In the [introduction], the speaker set out the topic and caught the audience's attention.", "«Preámbulo»: introducción de una exposición.", ["introducción", "inicio"]),
  ],
  "presentations-negotiation-3": [
    fe("Nos han hecho una ___ con un precio un 10 % más bajo.", "contraoferta", "They've made us a [counteroffer] with a price 10% lower.", "«Contraoferta»: respuesta a una oferta con condiciones distintas."),
    fe("Estamos dispuestos a ___ en el plazo, pero no en el precio.", "ceder", "We're willing to [give way] on the deadline, but not on the price.", "«Ceder en algo»: hacer una concesión.", ["transigir", "negociar"]),
    fe("Cedimos en lo accesorio para proteger lo ___.", "esencial", "We gave way on the minor points to protect what was [essential].", "Lo accesorio frente a lo esencial.", ["fundamental", "importante", "principal"]),
  ],
  "presentations-negotiation-4": [
    fe("Las negociaciones han llegado a un ___.", "punto muerto", "The negotiations have reached a [deadlock].", "«Punto muerto»: fase sin avances.", ["callejón sin salida", "impasse"]),
    fe("Tenemos poco ___ de maniobra.", "margen", "We have little [room] for manoeuvre.", "«Margen de maniobra»: flexibilidad para negociar."),
    fe("Por fin ___ un acuerdo que satisface a ambas partes.", "hemos alcanzado", "We have finally [reached] an agreement that satisfies both sides.", "«Alcanzar / llegar a un acuerdo».", ["alcanzamos", "hemos llegado a", "llegamos a", "hemos cerrado", "cerramos"]),
  ],
  "presentations-negotiation-5": [
    fe("Mantener el ___ visual transmite seguridad.", "contacto", "Keeping [eye contact] conveys confidence.", "«Contacto visual»: mirar al interlocutor."),
    fe("Cruzar los brazos puede parecer una postura ___.", "defensiva", "Crossing your arms can look like a [defensive] posture.", "Lenguaje corporal: posturas abiertas frente a defensivas.", ["cerrada"]),
    fe("Empezaron pidiendo una cifra altísima: es la estrategia de ___.", "anclaje", "They began by asking for a very high figure: it's the [anchoring] strategy.", "Anclaje: fijar una cifra inicial que condicione la negociación."),
    fe("Habla despacio y ___ las pausas.", "aprovecha", "Speak slowly and [make use of] pauses.", "Las pausas refuerzan la seguridad del ponente.", ["usa", "utiliza", "no temas"]),
  ],
  "presentations-negotiation-6": [
    fe("Guardaba un as bajo la ___ para el final.", "manga", "She had an [ace up her sleeve] for the end.", "«Tener un as bajo la manga»: un recurso decisivo oculto."),
    fe("Escuchar con ___ es la mejor forma de descubrir lo que quiere la otra parte.", "atención", "Listening [carefully] is the best way to find out what the other side wants.", "Escucha activa en la negociación.", ["atención plena", "interés"]),
    fe("Conviene dejar el acuerdo por ___.", "escrito", "It's best to put the agreement [in writing].", "«Por escrito»: formalizar evita ambigüedades."),
  ],
  "presentations-negotiation-7": [
    fe("Es hora de ___ esta cuestión de una vez.", "zanjar", "It's time to [settle] this issue once and for all.", "«Zanjar»: resolver definitivamente.", ["resolver", "cerrar"]),
    fe("El precio fue el principal ___ de la negociación.", "escollo", "Price was the main [stumbling block] in the negotiation.", "«Escollo»: obstáculo, dificultad.", ["obstáculo"]),
  ],
  "presentations-negotiation-8": [
    fe("Este es nuestro límite ___: no podemos ceder más.", "infranqueable", "This is our [absolute] limit: we can't give way any further.", "«Límite infranqueable»: punto a partir del cual no se cede."),
    fe("La ___ rechazó todas nuestras propuestas.", "contraparte", "The [other party] rejected all our proposals.", "«Contraparte»: la otra parte de una negociación.", ["otra parte"]),
  ],
  "citations-references-1": [
    fe("Una cita ___ reproduce las palabras exactas del autor.", "textual", "A [verbatim] quotation reproduces the author's exact words.", "Cita textual o literal frente a cita indirecta.", ["literal"]),
    fe("Según ___ la autora, el fenómeno es reciente.", "señala", "As the author [points out], the phenomenon is recent.", "Verbos de atribución: señalar, afirmar, sostener.", ["afirma", "sostiene", "indica", "apunta"]),
    fe("En una ___ indirecta se reformulan las ideas del autor.", "cita", "In an indirect [quotation], the author's ideas are reworded.", "La cita indirecta parafrasea y atribuye."),
    fe("La cita textual debe ir entre ___.", "comillas", "A verbatim quotation must go in [quotation marks].", "En español se prefieren las comillas angulares « »."),
  ],
  "c2r-cite-direct-indirect": [
    fe("Martín escribió que sus datos ___ provisionales.", "eran", "Martín wrote that his data [were] provisional.", "En estilo indirecto con verbo en pasado, el presente pasa a imperfecto.", ["son"]),
  ],
  "citations-references-2": [
    fe("Cuando la formulación exacta es importante, conviene citar ___.", "literalmente", "When the exact wording matters, it's best to quote [word for word].", "La cita literal conserva la formulación original.", ["textualmente"]),
    fe("Las notas y referencias forman el ___ crítico.", "aparato", "Notes and references make up the critical [apparatus].", "«Aparato crítico»: conjunto de notas y referencias."),
    fe("La nota al ___ aclara el origen del dato.", "pie", "The [footnote] clarifies the origin of the data.", "«Nota al pie (de página)».", ["pie de página"]),
  ],
  "citations-references-3": [
    fe("___ señala la investigadora, el fenómeno afecta a varias regiones.", "Como", "[As] the researcher points out, the phenomenon affects several regions.", "«Como señala X» es una fórmula de atribución.", ["Tal como", "Según"]),
    fe("El autor ___ que los datos no son concluyentes.", "sostiene", "The author [maintains] that the data are inconclusive.", "«Sostener»: defender una tesis.", ["afirma", "mantiene", "defiende"]),
    fe("De acuerdo ___ el informe, el paro ha bajado.", "con", "[According to] the report, unemployment has fallen.", "«De acuerdo con» / «según» introducen la fuente."),
    fe("La autora ___ que el estudio tiene limitaciones.", "reconoce", "The author [acknowledges] that the study has limitations.", "«Reconocer», «admitir»: verbos de atribución que conceden.", ["admite"]),
  ],
  "c2r-cite-apparatus": [
    fe("Una biografía de Bolívar es una fuente ___.", "secundaria", "A biography of Bolívar is a [secondary] source.", "Las fuentes secundarias interpretan o comentan las primarias."),
  ],
  "citations-references-4": [
    fe("El autor ___ que el método era fiable, aunque no aporta pruebas.", "pretende", "The author [claims] the method was reliable, though he provides no evidence.", "«Pretender» como verbo de atribución expresa distancia crítica.", ["asegura", "alega"]),
    fe("Todas las fuentes del estudio forman su ___ documental.", "corpus", "All the study's sources make up its documentary [corpus].", "«Corpus»: conjunto de documentos analizados."),
    fe("Una buena paráfrasis ___ la estructura del original.", "reorganiza", "A good paraphrase [reorganizes] the structure of the original.", "Parafrasear no es cambiar solo algunas palabras.", ["cambia", "modifica", "transforma"]),
  ],
  "citations-references-5": [
    fe("Copiar ideas ajenas sin citarlas es ___.", "plagio", "Copying other people's ideas without citing them is [plagiarism].", "«Plagio»: apropiarse de ideas o textos ajenos.", ["plagiar", "un plagio"]),
    fe("El estudio se apoya en un sólido marco ___.", "teórico", "The study is based on a solid [theoretical] framework.", "«Marco teórico»: base conceptual de una investigación."),
    fe("Una carta original es una fuente ___.", "primaria", "An original letter is a [primary] source.", "Fuente primaria: documento de primera mano."),
  ],
  "citations-references-6": [
    fe("Esa paráfrasis está demasiado ___ al original.", "pegada", "That paraphrase is too [close] to the original.", "«Pegado/cercano al original»: casi una copia.", ["cercana", "próxima", "apegada"]),
    fe("Basarse en una sola ___ es arriesgado.", "fuente", "Relying on a single [source] is risky.", "Conviene cotejar varias fuentes."),
    fe("No basta con cambiar algunas palabras: hay que ___ la idea.", "reformular", "It's not enough to change a few words: you have to [rephrase] the idea.", "«Reformular»: expresar con otras palabras y estructura.", ["parafrasear", "reelaborar"]),
  ],
  "citations-references-7": [
    fe("Para más detalles, ___ al lector al capítulo tercero.", "remito", "For more details, [I refer] the reader to chapter three.", "«Remitir a»: enviar al lector a otra fuente.", ["remitimos"]),
    fe("La ___ académica exige citar siempre las fuentes.", "integridad", "Academic [integrity] requires always citing sources.", "«Integridad académica»: honestidad en el trabajo intelectual.", ["honestidad", "ética"]),
  ],
  "citations-references-8": [
    fe("Antes de publicar el dato, hay que ___ varias fuentes.", "cotejar", "Before publishing the data, you have to [cross-check] several sources.", "«Cotejar»: comparar para verificar.", ["contrastar", "comparar"]),
    fe("Citar a Platón sin haberlo leído es una cita de segunda ___.", "mano", "Quoting Plato without having read him is a [second-hand] quotation.", "«De segunda mano»: tomado de otra fuente."),
  ],
  "c2r-cite-spiral-reported-speech": [
    fe("El comité recomendó que se ___ el experimento.", "repitiera", "The committee recommended that the experiment [be repeated].", "Verbo de influencia en pasado + imperfecto de subjuntivo.", ["repitiese"]),
  ],
  "c2r-vocab-gender-meaning": [
    fe("La empresa necesita más ___ para crecer.", "capital", "The company needs more [capital] to grow.", "«El capital» (dinero) frente a «la capital» (ciudad).", ["el capital", "dinero"]),
    fe("El general dio ___ de retirada.", "la orden", "The general gave [the order] to retreat.", "«La orden» (mandato) frente a «el orden» (disposición).", ["orden"]),
  ],
  "rhetorical-questions-1": [
    fe("¿Quién no ha sentido ___ alguna vez?", "miedo", "Who hasn't felt [fear] at some point?", "Pregunta retórica: equivale a «todos hemos sentido miedo»."),
    fe("¿Cómo iba a ___ algo así?", "imaginarme", "How was I supposed to [imagine] something like that?", "Pregunta retórica que equivale a una negación.", ["imaginar", "saber"]),
    fe("¿Acaso no lo ___ todos?", "sabemos", "Don't we all [know] it?", "«Acaso» refuerza el carácter retórico.", ["vemos"]),
    fe("La pregunta retórica no espera ___.", "respuesta", "A rhetorical question doesn't expect an [answer].", "Es una afirmación disfrazada de pregunta.", ["una respuesta", "contestación"]),
  ],
  "c2r-rhetorical-identify": [
    fe("¿Es que ___ piensa en los niños?", "nadie", "Does [nobody] think about the children?", "«¿Es que…?» introduce una pregunta retórica de reproche."),
  ],
  "rhetorical-questions-2": [
    fe("¿Qué nos queda? ___.", "La esperanza", "What do we have left? [Hope].", "Hipófora: el propio hablante formula la pregunta y la responde.", ["Esperanza"]),
    fe("¿No le parece que ya hemos esperado ___?", "bastante", "Don't you think we've waited [long enough]?", "Pregunta que da la respuesta por hecha.", ["suficiente", "demasiado"]),
    fe("¿Y por qué ___ esto? Porque nadie más lo hará.", "hacemos", "And why [are we doing] this? Because nobody else will.", "Hipófora: pregunta y respuesta inmediata.", ["hago"]),
  ],
  "rhetorical-questions-3": [
    fe("¿Hasta cuándo vamos a ___ con los brazos cruzados?", "seguir", "How much longer are we going to [keep] sitting idly by?", "Pregunta retórica de indignación.", ["estar", "quedarnos"]),
    fe("Usada sin ___, la hipófora resulta monótona.", "medida", "Used [excessively], hypophora becomes monotonous.", "«Con / sin medida»: con o sin moderación.", ["moderación", "mesura"]),
    fe("¿Dónde estaban ustedes? ¿Dónde estaban ___ los necesitábamos?", "cuando", "Where were you? Where were you [when] we needed you?", "Reiteración interrogativa (anáfora)."),
  ],
  "rhetorical-questions-4": [
    fe("¿Y usted, señor ministro, qué ___ hecho por nosotros?", "ha", "And you, Minister, what [have] you done for us?", "Interpelación: pregunta dirigida directamente a alguien."),
    fe("¿Me equivoco? Quizá. Pero ___ que no.", "creo", "Am I wrong? Perhaps. But [I think] not.", "Duda fingida: el hablante finge vacilar para reforzar su postura.", ["sospecho", "diría"]),
    fe("Repetir la misma pregunta crea un ___ que el público recuerda.", "eco", "Repeating the same question creates an [echo] that the audience remembers.", "La anáfora interrogativa refuerza la memoria del mensaje.", ["efecto", "ritmo"]),
  ],
  "rhetorical-questions-5": [
    fe("No sé si ___ llamarlo error o descaro.", "debería", "I don't know whether I [should] call it a mistake or cheek.", "Duda retórica: finge incertidumbre para insinuar.", ["debo"]),
    fe("Me dirijo a ustedes, los jóvenes: ¿qué ___ que les dejemos?", "quieren", "I'm speaking to you, the young: what [do you want] us to leave you?", "Interpelación a un colectivo.", ["esperan"]),
    fe("Con esa pregunta quiso ___ a todo el auditorio.", "implicar", "With that question he wanted to [engage] the whole audience.", "La interpelación compromete emocionalmente al oyente.", ["interpelar", "involucrar", "comprometer"]),
  ],
  "c2r-rhetorical-dialogue-reply": [
    fe("Esa pregunta da por ___ algo que habría que demostrar.", "hecho", "That question takes [for granted] something that needs proving.", "«Dar por hecho / por sentado»: presuponer.", ["sentado", "supuesto"]),
  ],
  "rhetorical-questions-6": [
    fe("Su discurso estaba lleno de preguntas ___.", "retóricas", "His speech was full of [rhetorical] questions.", "Pregunta retórica: no espera respuesta."),
    fe("¿A quién se le ___ dejar la puerta abierta en invierno?", "ocurre", "Who [would think of] leaving the door open in winter?", "Pregunta retórica de reproche: «¿A quién se le ocurre…?»."),
    fe("Abusar de la hipófora genera ___.", "monotonía", "Overusing hypophora creates [monotony].", "La repetición mecánica cansa al oyente.", ["aburrimiento", "cansancio"]),
    fe("La pregunta era una ___ disfrazada.", "afirmación", "The question was a disguised [statement].", "La pregunta retórica funciona como una aseveración.", ["aseveración", "crítica"]),
  ],
  "rhetorical-questions-7": [
    fe("No lo dijo claramente; fue solo una ___.", "insinuación", "He didn't say it clearly; it was just an [insinuation].", "«Insinuación»: idea sugerida de forma indirecta.", ["indirecta"]),
    fe("Lo que importa es la fuerza ___ del enunciado: su intención real.", "ilocutiva", "What matters is the [illocutionary] force of the utterance: its real intention.", "Término de pragmática."),
  ],
  "c2r-rhetorical-vocab-spiral": [
    fe("Unos lo tienen todo; otros, ___.", "nada", "Some have everything; others, [nothing].", "Antítesis: contrapone ideas opuestas."),
    fe("Queremos pan. ___ trabajo. Queremos dignidad.", "Queremos", "We want bread. [We want] work. We want dignity.", "Anáfora: repetición al inicio de frases sucesivas."),
  ],
  "job-interview-spanish-1": [
    fe("Una de mis ___ es la capacidad de organización.", "fortalezas", "One of my [strengths] is my ability to organize.", "«Fortalezas» frente a «puntos de mejora».", ["virtudes", "puntos fuertes"]),
    fe("En mi último puesto ___ un equipo de ocho personas.", "dirigí", "In my last position [I managed] a team of eight people.", "Pretérito indefinido para logros concretos.", ["coordiné", "lideré", "gestioné"]),
    fe("Me gustaría ___ mi experiencia al puesto que ofrecen.", "aportar", "I'd like to [bring] my experience to the position you're offering.", "«Aportar»: contribuir con algo valioso.", ["adaptar", "aplicar"]),
  ],
  "job-interview-spanish-2": [
    fe("Un punto de ___ es que me cuesta delegar.", "mejora", "One [area for improvement] is that I find it hard to delegate.", "Eufemismo profesional de «debilidad»."),
    fe("Estoy ___ en ello con un curso de gestión del tiempo.", "trabajando", "I'm [working] on it with a time-management course.", "Muestra acciones concretas para mejorar."),
    fe("Gracias a ese cambio, ___ los plazos de entrega en un 20 %.", "redujimos", "Thanks to that change, [we cut] delivery times by 20%.", "Resultado medible: verbo en indefinido + dato.", ["reducimos", "acortamos"]),
  ],
  "job-interview-spanish-3": [
    fe("Le pondré un ___ concreto.", "ejemplo", "I'll give you a concrete [example].", "En la entrevista por competencias, siempre ejemplos concretos.", ["caso"]),
    fe("La ___ era complicada: el cliente amenazaba con irse.", "situación", "The [situation] was complicated: the client was threatening to leave.", "Relato estructurado: situación, tarea, acción, resultado."),
    fe("Como ___, conseguimos retener al cliente.", "resultado", "As a [result], we managed to keep the client.", "Cierre del relato con el resultado obtenido.", ["consecuencia"]),
  ],
  "job-interview-spanish-4": [
    fe("¿Qué posibilidades de ___ ofrece el puesto?", "crecimiento", "What opportunities for [growth] does the position offer?", "Preguntar por el desarrollo profesional muestra motivación.", ["desarrollo", "promoción", "ascenso"]),
    fe("Mi pretensión ___ está en torno a los 40 000 euros.", "salarial", "My [salary] expectation is around 40,000 euros.", "«Pretensión salarial»: sueldo que se aspira a cobrar.", ["económica"]),
    fe("Quedo a la ___ de su respuesta.", "espera", "I [look forward] to your reply.", "Fórmula de despedida formal."),
  ],
  "job-interview-spanish-5": [
    fe("A lo largo de mi ___ he trabajado en tres países.", "trayectoria", "Throughout my [career] I have worked in three countries.", "«Trayectoria laboral/profesional».", ["carrera", "trayectoria profesional", "vida laboral"]),
    fe("Me considero una persona ___: me anticipo a los problemas.", "proactiva", "I consider myself a [proactive] person: I anticipate problems.", "«Proactivo/a»: que actúa por iniciativa propia.", ["proactivo", "previsora", "previsor"]),
    fe("Me motiva ___ en un entorno internacional.", "trabajar", "I'm motivated by [working] in an international environment.", "«Me motiva + infinitivo»."),
    fe("Valoro mucho el trabajo en ___.", "equipo", "I really value [team]work.", "«Trabajo en equipo»: competencia muy valorada."),
  ],
  "c2r-interview-error-hunt": [
    fe("Me ___ de las campañas en redes sociales.", "encargué", "I [was in charge] of the social media campaigns.", "Formula con precisión en lugar de «hice cosas de marketing».", ["ocupé", "encargaba"]),
  ],
  "job-interview-spanish-6": [
    fe("Le adjunto mi ___ actualizado.", "currículum", "I attach my updated [CV].", "También «currículum vítae» o «CV».", ["currículo", "CV", "curriculum", "currículum vítae"]),
    fe("Puedo darle dos ___ de mis anteriores jefes.", "referencias", "I can give you two [references] from my former bosses.", "«Referencia laboral»: persona que avala tu trabajo."),
    fe("Decir «soy demasiado perfeccionista» suena a ___.", "tópico", "Saying «I'm too much of a perfectionist» sounds like a [cliché].", "Las respuestas de manual restan credibilidad.", ["cliché", "excusa", "respuesta de manual"]),
    fe("Estoy acostumbrado a trabajar con plazos ___.", "ajustados", "I'm used to working with [tight] deadlines.", "«Plazos ajustados»: con poco tiempo.", ["ajustadísimos", "cortos", "apretados"]),
  ],
  "job-interview-spanish-7": [
    fe("Supe ___ el obstáculo y entregamos a tiempo.", "sortear", "I managed to [get around] the obstacle and we delivered on time.", "«Sortear un obstáculo»: evitarlo con habilidad.", ["superar", "salvar"]),
  ],
  "c2r-vocab-latinisms": [
    fe("Lo hizo ___, sin que nadie se lo pidiera.", "motu proprio", "He did it [of his own accord], without anyone asking him.", "Se escribe «motu proprio», sin «de» y con «proprio».", ["por iniciativa propia"]),
  ],
  "conflict-resolution-1": [
    fe("Antes de nada, intentemos ___ los ánimos.", "calmar", "First of all, let's try to [calm] tempers.", "«Calmar / templar los ánimos»: reducir la tensión.", ["templar", "serenar", "tranquilizar"]),
    fe("Entiendo que estés ___; es normal.", "molesto", "I understand you're [upset]; it's normal.", "Validar la emoción desactiva la tensión.", ["molesta", "enfadado", "enfadada", "dolido", "dolida"]),
    fe("Hablemos con calma y sin ___ la voz.", "levantar", "Let's talk calmly and without [raising] our voices.", "«Levantar / alzar la voz».", ["alzar", "subir"]),
  ],
  "conflict-resolution-2": [
    fe("Intenta ___ en su lugar antes de responder.", "ponerte", "Try to [put yourself] in their shoes before answering.", "«Ponerse en el lugar del otro»: empatizar.", ["meterte"]),
    fe("Comprendo tu ___, aunque no la comparto.", "postura", "I understand your [position], although I don't share it.", "Reconocer la perspectiva ajena sin renunciar a la propia.", ["posición", "opinión", "perspectiva"]),
    fe("Busquemos una solución en la que ___ ganemos.", "todos", "Let's look for a solution where [we all] win.", "Negociación colaborativa: todos ganan.", ["los dos", "ambos"]),
  ],
  "conflict-resolution-3": [
    fe("Busquemos un término ___.", "medio", "Let's look for a [middle ground].", "«Término medio»: solución intermedia."),
    fe("Al final llegaron a un ___ mutuo.", "acuerdo", "In the end they reached a mutual [agreement].", "«Acuerdo mutuo»: aceptado por ambas partes.", ["entendimiento"]),
    fe("Siento ___ hecho daño.", "haberte", "I'm sorry [I hurt you].", "Disculpa sincera: «siento + infinitivo compuesto».", ["haberle"]),
    fe("Los dos tendréis que ___ un poco.", "ceder", "You'll both have to [give a little].", "«Ceder»: renunciar a parte de lo que se pide.", ["transigir"]),
  ],
  "conflict-resolution-4": [
    fe("El acuerdo debe ser ___ para ambas partes.", "justo", "The agreement must be [fair] to both sides.", "Un acuerdo percibido como justo es más duradero.", ["equitativo"]),
    fe("Quiero ___ la relación, no ganar la discusión.", "restaurar", "I want to [repair] the relationship, not win the argument.", "«Restaurar / recomponer la relación».", ["recuperar", "salvar", "arreglar", "recomponer"]),
    fe("Te pido ___ por lo que dije.", "perdón", "I [apologize] for what I said.", "«Pedir perdón / disculpas».", ["disculpas", "disculpa"]),
  ],
  "conflict-resolution-5": [
    fe("Todo fue un ___: entendí mal su mensaje.", "malentendido", "It was all a [misunderstanding]: I misread his message.", "«Malentendido»: interpretación equivocada."),
    fe("La confianza tarda en ___.", "recuperarse", "Trust takes time to [be restored].", "La reconciliación lleva tiempo.", ["reconstruirse", "recobrarse"]),
    fe("Una disculpa con «pero» ___ la responsabilidad.", "diluye", "An apology with a «but» [dilutes] responsibility.", "La disculpa sincera no traslada la culpa.", ["traslada", "reduce"]),
  ],
  "c2r-conflict-story-detective": [
    fe("Si te ___ bien, lo que te duele es no sentirte valorada.", "entiendo", "If I [understand] you correctly, what hurts is not feeling valued.", "Reformulación: técnica de escucha activa.", ["he entendido"]),
  ],
  "conflict-resolution-6": [
    fe("Reconocer la responsabilidad ___ rompe la dinámica de culpas.", "compartida", "Acknowledging [shared] responsibility breaks the cycle of blame.", "«Responsabilidad compartida»: ambas partes asumen su parte.", ["mutua"]),
    fe("La mediadora propuso una ___ de una semana.", "tregua", "The mediator proposed a one-week [truce].", "«Tregua»: pausa en un conflicto."),
    fe("El principal punto de ___ es el reparto de tareas.", "fricción", "The main [point of friction] is how tasks are divided.", "«Punto de fricción»: aspecto que provoca tensión.", ["conflicto", "discordia"]),
    fe("Practicar la escucha ___ ayuda a desactivar el conflicto.", "activa", "Practicing [active] listening helps defuse conflict.", "«Escucha activa / empática».", ["empática"]),
  ],
  "c2r-conflict-vocab-web": [
    fe("Una conversación sincera bastó para ___.", "limar asperezas", "An honest conversation was enough to [smooth things over].", "«Limar asperezas»: suavizar diferencias.", ["hacer las paces"]),
  ],
  "conflict-resolution-7": [
    fe("El mediador intentó ___ entre las dos partes.", "tender puentes", "The mediator tried to [build bridges] between the two sides.", "«Tender puentes»: crear vías de entendimiento."),
    fe("Firmaron un pacto de ___ entre los vecinos.", "convivencia", "They signed a [coexistence] agreement among the neighbors.", "«Pacto de convivencia»: normas para vivir juntos en armonía."),
  ],
  "c2r-history-simultaneous-lines": [
    fe("___, en la capital crecía el descontento popular.", "Paralelamente", "[At the same time], discontent was growing in the capital.", "Marcador de simultaneidad.", ["Mientras tanto", "Entretanto", "Al mismo tiempo", "Simultáneamente"]),
  ],
  "c2r-history-story-detective": [
    fe("Las autoridades, que ___ ignorado los informes, reaccionaron tarde.", "habían", "The authorities, who [had] ignored the reports, reacted late.", "Pluscuamperfecto: anterioridad respecto a otro hecho pasado."),
  ],
  "c2r-vocab-prefixes": [
    fe("No conviene ___ la capacidad del rival.", "subestimar", "It's not wise to [underestimate] your rival's ability.", "Prefijo «sub-»: por debajo.", ["infravalorar", "menospreciar", "subvalorar"]),
    fe("Esa medida resultó ___: empeoró el problema.", "contraproducente", "That measure turned out to be [counterproductive]: it made the problem worse.", "Prefijo «contra-»: oposición."),
  ],
  "science-technology-spanish-1": [
    fe("Una hipótesis científica debe ser ___.", "falsable", "A scientific hypothesis must be [falsifiable].", "Falsable: que pueda demostrarse errónea.", ["refutable"]),
    fe("Los resultados no se pudieron ___ en otros laboratorios.", "reproducir", "The results could not be [reproduced] in other labs.", "Reproducibilidad: clave del método científico.", ["replicar"]),
  ],
  "science-technology-spanish-2": [
    fe("Es una innovación ___: cambia por completo las reglas del mercado.", "disruptiva", "It's a [disruptive] innovation: it completely changes the rules of the market.", "Innovación disruptiva frente a incremental.", ["radical", "rompedora"]),
    fe("La inteligencia artificial plantea serios dilemas ___.", "éticos", "Artificial intelligence raises serious [ethical] dilemmas.", "Dilemas éticos: privacidad, sesgo, responsabilidad.", ["morales"]),
  ],
  "c2r-tech-disruption-vocab": [
    fe("El modelo de negocio es ___: puede crecer sin perder eficiencia.", "escalable", "The business model is [scalable]: it can grow without losing efficiency.", "«Escalable»: capaz de crecer manteniendo la eficiencia."),
  ],
  "science-technology-spanish-3": [
    fe("El algoritmo reproduce un ___ presente en los datos.", "sesgo", "The algorithm reproduces a [bias] present in the data.", "«Sesgo algorítmico».", ["prejuicio"]),
    fe("Nadie entiende cómo decide: es una caja ___.", "negra", "Nobody understands how it decides: it's a [black box].", "«Caja negra»: sistema cuyo funcionamiento interno es opaco."),
    fe("La doctora publica sus ___ para que otros puedan comprobarlos.", "protocolos", "The doctor publishes her [protocols] so that others can check them.", "Ciencia abierta: publicar métodos y datos.", ["datos", "métodos", "resultados"]),
  ],
  "c2r-science-popularize": [
    fe("El hallazgo es prometedor, pero todavía queda mucho por ___.", "investigar", "The finding is promising, but there's still a lot to [research].", "«Quedar mucho por + infinitivo».", ["hacer", "estudiar"]),
  ],
  "environment-politics-spanish-1": [
    fe("Necesitamos un modelo de desarrollo ___.", "sostenible", "We need a [sustainable] development model.", "Desarrollo sostenible: no compromete a las generaciones futuras."),
    fe("Reducir las ___ de gases es urgente.", "emisiones", "Reducing gas [emissions] is urgent.", "«Emisiones de gases de efecto invernadero»."),
  ],
  "c2r-climate-vocab-web": [
    fe("Plantar árboles en la ciudad es una medida de ___.", "adaptación", "Planting trees in the city is an [adaptation] measure.", "Adaptación: prepararse para los efectos del cambio climático."),
  ],
  "environment-politics-spanish-2": [
    fe("La ___ política dificulta cualquier acuerdo.", "polarización", "Political [polarization] makes any agreement difficult.", "Polarización: división en bandos enfrentados."),
    fe("Los gobernantes deben rendir ___ ante los ciudadanos.", "cuentas", "Those in power must be [accountable] to citizens.", "«Rendir cuentas»: responder de la propia gestión."),
  ],
  "c2r-politics-polarization-register": [
    fe("Coincidimos en el objetivo, pero ___ en los medios.", "discrepamos", "We agree on the goal, but [we disagree] on the means.", "Lenguaje deliberativo: discrepar sin descalificar.", ["diferimos"]),
  ],
  "environment-politics-spanish-3": [
    fe("El ___ enfrenta a un pueblo virtuoso con una élite corrupta.", "populismo", "[Populism] pits a virtuous people against a corrupt elite.", "Definición clásica del populismo."),
    fe("Sin metas ___, los compromisos climáticos no sirven de nada.", "verificables", "Without [verifiable] targets, climate commitments are useless.", "«Verificable»: que puede comprobarse.", ["medibles", "comprobables"]),
    fe("La transición energética debe ser ___ con las regiones mineras.", "justa", "The energy transition must be [fair] to mining regions.", "«Transición justa»: no dejar atrás a nadie.", ["equitativa", "solidaria"]),
  ],
  "philosophy-abstract-concepts-1": [
    fe("¿Tenemos libre ___ o todo está determinado?", "albedrío", "Do we have free [will] or is everything determined?", "«Libre albedrío» frente a «determinismo».", ["albedrio"]),
    fe("Según el ___, todo acontecimiento tiene una causa previa.", "determinismo", "According to [determinism], every event has a prior cause.", "Determinismo: todo está causalmente determinado."),
  ],
  "philosophy-abstract-concepts-2": [
    fe("Para el ___, la realidad fundamental es de naturaleza mental.", "idealismo", "For [idealism], fundamental reality is mental in nature.", "Idealismo frente a materialismo."),
    fe("El argumento es válido, pero sus ___ son falsas.", "premisas", "The argument is valid, but its [premises] are false.", "Validez formal frente a verdad de las premisas."),
  ],
  "c2r-philosophy-abstract-nouns": [
    fe("No confundas la apariencia con la ___.", "esencia", "Don't confuse appearance with [essence].", "Par conceptual: apariencia / esencia (o realidad).", ["realidad"]),
  ],
  "philosophy-abstract-concepts-3": [
    fe("El ___ niega que la vida tenga un sentido objetivo.", "nihilismo", "[Nihilism] denies that life has an objective meaning.", "Nihilismo: negación de valores o sentido absolutos."),
    fe("No fue un sofisma, sino un ___: se equivocó sin querer.", "paralogismo", "It wasn't a sophism but a [paralogism]: he was wrong without meaning to be.", "Paralogismo: razonamiento falso sin intención de engañar."),
    fe("La moral de una época no siempre ___ un examen ético riguroso.", "resiste", "The morality of an era doesn't always [withstand] rigorous ethical scrutiny.", "«Resistir un examen»: superarlo.", ["supera", "aguanta", "soporta"]),
  ],
  "c2r-philosophy-mission-essay-paragraph": [
    fe("Tener más opciones no ___ necesariamente ser más libre.", "implica", "Having more options doesn't necessarily [mean] being freer.", "«Implicar»: tener como consecuencia lógica.", ["significa", "supone", "equivale a"]),
  ],
  "psychology-emotions-1": [
    fe("Siente una profunda ___ hacia su padre: lo admira y le guarda rencor a la vez.", "ambivalencia", "He feels a deep [ambivalence] towards his father: he admires and resents him at the same time.", "Ambivalencia: sentimientos opuestos hacia lo mismo."),
    fe("Fumar sabiendo que es dañino genera disonancia ___.", "cognitiva", "Smoking while knowing it's harmful creates cognitive [dissonance].", "«Disonancia cognitiva»: malestar entre creencia y conducta."),
  ],
  "psychology-emotions-2": [
    fe("Superó la pérdida con una ___ admirable.", "resiliencia", "She got over the loss with admirable [resilience].", "Resiliencia: capacidad de rehacerse tras la adversidad.", ["entereza", "fortaleza"]),
    fe("Siente ___ de su infancia en el pueblo.", "nostalgia", "She feels [nostalgia] for her childhood in the village.", "Nostalgia: añoranza de un recuerdo concreto.", ["añoranza", "morriña"]),
  ],
  "psychology-emotions-3": [
    fe("Mostrar ___ puede fortalecer los vínculos.", "vulnerabilidad", "Showing [vulnerability] can strengthen bonds.", "La vulnerabilidad posibilita la intimidad emocional."),
    fe("Le invade una ___ difusa que no sabe explicar.", "melancolía", "He's overcome by a vague [melancholy] he can't explain.", "Melancolía: tristeza difusa sin causa concreta.", ["tristeza"]),
    fe("Tras la ruptura, adoptó una actitud de ___.", "desapego", "After the breakup, he adopted an attitude of [detachment].", "Desapego: distancia emocional.", ["indiferencia", "distanciamiento"]),
  ],
  "art-film-literature-criticism-1": [
    fe("La trama carece de ___: los personajes actúan sin lógica.", "verosimilitud", "The plot lacks [plausibility]: the characters act without logic.", "Verosimilitud: coherencia con las reglas del propio mundo narrativo.", ["coherencia", "credibilidad"]),
    fe("La ___ en escena de la película es impecable.", "puesta", "The film's [mise-en-scène] is impeccable.", "«Puesta en escena»: todo lo que el director dispone ante la cámara."),
  ],
  "art-film-literature-criticism-2": [
    fe("La ___ del cuadro guía la mirada hacia el centro.", "composición", "The painting's [composition] draws the eye towards the center.", "Composición: disposición de los elementos en la obra."),
    fe("La fotografía es vistosa, pero no está al ___ de la historia.", "servicio", "The cinematography is striking, but it isn't at the [service] of the story.", "«Estar al servicio de»: subordinarse a un fin."),
  ],
  "art-film-literature-criticism-3": [
    fe("Publicó una ___ muy dura de la novela.", "reseña", "She published a very harsh [review] of the novel.", "«Reseña (crítica)»: texto breve que valora una obra.", ["crítica"]),
    fe("El ___ de la película me pareció forzado.", "desenlace", "I found the film's [ending] forced.", "«Desenlace»: resolución final de la trama.", ["final"]),
    fe("Su juicio ___ se basa en argumentos, no en gustos.", "crítico", "His [critical] judgment is based on arguments, not on tastes.", "«Juicio crítico»: valoración razonada."),
  ],
  "business-economics-spanish-1": [
    fe("Si la oferta supera a la ___, los precios bajan.", "demanda", "If supply exceeds [demand], prices fall.", "Ley de la oferta y la demanda."),
    fe("La empresa anunció la ___ de una startup tecnológica.", "adquisición", "The company announced the [acquisition] of a tech startup.", "Adquisición: compra de una empresa por otra.", ["compra"]),
  ],
  "business-economics-spanish-2": [
    fe("La inflación erosiona el poder ___.", "adquisitivo", "Inflation erodes [purchasing] power.", "«Poder adquisitivo»: capacidad de compra."),
    fe("El Gobierno impuso un ___ a las importaciones de acero.", "arancel", "The government imposed a [tariff] on steel imports.", "Arancel: impuesto sobre importaciones; instrumento proteccionista.", ["impuesto"]),
  ],
  "business-economics-spanish-3": [
    fe("Este año el Estado ha cerrado con ___: ha gastado más de lo que ha ingresado.", "déficit", "This year the state ended with a [deficit]: it spent more than it took in.", "Déficit frente a superávit."),
    fe("La fusión podría crear un ___ en algunas rutas.", "monopolio", "The merger could create a [monopoly] on some routes.", "Monopolio: un solo proveedor domina el mercado."),
    fe("El banco central ha subido los tipos de ___.", "interés", "The central bank has raised interest [rates].", "«Tipos de interés» (España) o «tasas de interés» (América).", ["interes"]),
  ],
  "creative-writing-techniques-1": [
    fe("Desde el primer capítulo, el autor ___ el final con pequeños indicios.", "prefigura", "From the first chapter, the author [foreshadows] the ending with small clues.", "Prefigurar: anticipar sutilmente un hecho posterior.", ["anticipa", "presagia"]),
    fe("El ___ omnisciente conoce los pensamientos de todos los personajes.", "narrador", "The omniscient [narrator] knows the thoughts of all the characters.", "Tipos de narrador: omnisciente, protagonista, testigo."),
  ],
  "creative-writing-techniques-2": [
    fe("El ___ de la novela llega en el último capítulo.", "clímax", "The novel's [climax] comes in the last chapter.", "Clímax: punto de máxima tensión.", ["climax"]),
    fe("«Un silencio amarillo» es un ejemplo de ___.", "sinestesia", "«A yellow silence» is an example of [synesthesia].", "Sinestesia: mezcla de percepciones de distintos sentidos."),
  ],
  "creative-writing-techniques-3": [
    fe("El paraguas rojo es un símbolo ___ en toda la novela.", "recurrente", "The red umbrella is a [recurring] symbol throughout the novel.", "«Recurrente»: que vuelve a aparecer.", ["reiterado"]),
    fe("Un narrador poco ___ encaja con un protagonista que se engaña a sí mismo.", "confiable", "An [unreliable] narrator fits a protagonist who deceives himself.", "«Narrador poco confiable / no fiable».", ["fiable"]),
    fe("La editora le pidió que ___ el arco del personaje.", "reforzara", "The editor asked her to [strengthen] the character arc.", "Pedir que + imperfecto de subjuntivo.", ["reforzase", "desarrollara", "desarrollase", "trabajara"]),
  ],
  "c2r-writing-mission-microstory": [
    fe("Guardó la última carta sin ___.", "abrirla", "She put away the last letter without [opening it].", "«Sin + infinitivo» con pronombre enclítico."),
  ],
  "c2r-vocab-light-verb-idioms": [
    fe("Esperaba un ascenso y se ___ un buen chasco.", "llevó", "He was expecting a promotion and [got] a nasty disappointment.", "«Llevarse un chasco»: decepcionarse."),
  ],
  "c1c2-comprehensive-review-3": [
    fe("En la reunión fuimos directamente ___.", "al grano", "In the meeting we went straight [to the point].", "«Ir al grano»: hablar sin rodeos."),
    fe("Puedes ___ el significado a partir del contexto.", "inferir", "You can [infer] the meaning from the context.", "Estrategia de comprensión: inferir por el contexto.", ["deducir"]),
  ],
  "c2r-challenge-phraseology-no-hints": [
    fe("Hay que poner los puntos sobre las ___.", "íes", "We need to [dot the i's and cross the t's].", "«Poner los puntos sobre las íes»: aclarar algo con precisión.", ["ies"]),
    fe("Lo pillaron con las manos en la ___.", "masa", "They caught him [red-handed].", "«Con las manos en la masa»: en flagrante delito."),
  ],
  "c2r-challenge-text-detective": [
    fe("En palabras ___, el concejal afirmó que el proyecto mejorará la movilidad.", "textuales", "In his [exact] words, the councillor stated that the project will improve mobility.", "«En palabras textuales»: cita literal.", ["literales"]),
    fe("Es cierto que el tráfico es un problema; ___, talar el parque no es la solución.", "ahora bien", "It's true that traffic is a problem; [that said], cutting down the park is not the solution.", "Concesión seguida de refutación.", ["sin embargo", "no obstante", "pero"]),
  ],
  "c2r-challenge-argue-to-the-limit": [
    fe("Mis intereses no ___ los datos.", "invalidan", "My interests don't [invalidate] the data.", "Respuesta a un ataque ad hominem.", ["anulan", "desmienten"]),
  ],
  "presentations-negotiation-1": [
    fe("Mi presentación ___ de tres partes.", "consta", "My presentation [consists] of three parts.", "«Constar de»: estar formado por.", ["se compone"]),
    fe("En primer ___, analizaremos el problema.", "lugar", "In the first [place], we'll analyze the problem.", "Marcadores de estructura: en primer lugar, a continuación, por último."),
    fe("A ___, veremos las posibles soluciones.", "continuación", "[Next], we'll look at the possible solutions.", "«A continuación»: marcador de transición."),
    fe("Un buen cierre deja una impresión ___.", "memorable", "A good closing leaves a [memorable] impression.", "El cierre debe ser recordado por el público.", ["duradera", "inolvidable"]),
  ],
};
