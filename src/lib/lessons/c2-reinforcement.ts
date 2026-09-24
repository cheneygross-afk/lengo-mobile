import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// C2 reinforcement lessons -- woven into C2_LESSONS right after the lesson
// each one reinforces (see weave.ts). Entirely in Spanish, like the base
// C2 lessons. Formats: register transformations, error hunts, contrast
// clinics, dialogue labs, text detectives, style workshops, real-world
// missions, spiral reviews that recycle C1 grammar inside C2 topics,
// extra-practice sets and a closing C2 Challenge series.
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("C2", after, slug, title, summary, duration, sections, exercises);

export const C2_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "legal-administrative-spanish-part-1-2",
    "c2r-translate-legalese-plain",
    "Transformaciones: del lenguaje jurídico al lenguaje claro",
    "Traduce fórmulas jurídicas al español de la calle y viceversa, sin perder precisión.",
    "7 min",
    [
      sec(
        "Dos idiomas dentro del mismo idioma",
        "El texto jurídico prefiere fórmulas fijas: «el suscrito» (yo, quien firma), «en virtud de» (según, gracias a), «a tenor de lo dispuesto en» (según lo que dice), «sin perjuicio de» (sin que eso impida), «dar fe» (certificar que algo es cierto). El lenguaje claro no las elimina por capricho: las traduce para el ciudadano.",
        [
          ["El suscrito declara… → Yo, quien firma, declaro…", "The undersigned declares… → I, the signatory, declare…"],
          ["A tenor de lo dispuesto en el artículo 5… → Según el artículo 5…", "Pursuant to article 5… → According to article 5…"],
        ],
        [
          mc(
            "«Sin perjuicio de las acciones legales que procedan» significa…",
            ["sin que esto impida emprender acciones legales", "sin causar ningún daño legal", "sin acciones legales", "con perjuicio legal"],
            0,
            "Sin perjuicio de = dejando a salvo, sin excluir."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la fórmula jurídica con su equivalente claro.",
        [
          ["en virtud de", "según / por"],
          ["dar fe", "certificar"],
          ["el suscrito", "quien firma"],
          ["a la mayor brevedad", "cuanto antes"],
        ],
        "Fórmulas jurídicas y su paráfrasis."
      ),
      fb("Traduce a lenguaje jurídico.", "Según lo que dice la ley… → A ___ de lo dispuesto en la ley…", "tenor", "A tenor de lo dispuesto en."),
      fb("Traduce a lenguaje jurídico.", "Yo, quien firma abajo… → El ___…", "suscrito", "El suscrito / la suscrita."),
      fb("Traduce a lenguaje claro.", "En virtud del contrato… → ___ el contrato…", "Según", "En virtud de = según / de acuerdo con."),
      mc(
        "«El notario da fe de que el documento es auténtico.»",
        ["El notario certifica que el documento es auténtico.", "El notario tiene fe en el documento.", "El notario duda del documento.", "El notario regala el documento."],
        0,
        "Dar fe = certificar oficialmente."
      ),
      toEs("Pursuant to article 12, the tenant must pay the deposit.", "A tenor de lo dispuesto en el artículo 12, el arrendatario deberá abonar la fianza.", "Fórmula jurídica + futuro deóntico.", ["Según el artículo 12, el arrendatario deberá pagar la fianza.", "Conforme al artículo 12, el arrendatario deberá abonar la fianza.", "En virtud del artículo 12, el arrendatario deberá abonar la fianza."]),
      wo("Sin perjuicio de lo anterior, ambas partes podrán rescindir el contrato.", "Fórmula jurídica de salvedad.", "Notwithstanding the foregoing, both parties may terminate the contract."),
    ]
  ),
  L(
    "legal-administrative-spanish-part-1-3",
    "c2r-sort-parties-roles",
    "Clasificación: quién es quién en un proceso",
    "Demandante, demandado, compareciente, otorgante, apoderado, fiscal, letrado: ordena los papeles del documento y del juicio.",
    "7 min",
    [
      sec(
        "Los papeles",
        "Documento: el otorgante (quien concede u otorga, p. ej., un poder), el apoderado (quien recibe el poder), el compareciente (quien se presenta ante notario o autoridad). Juicio civil: demandante (quien demanda) y demandado. Juicio penal: acusado, acusación, fiscal (Ministerio Público). Letrado/a = abogado/a. Procurador = representa a la parte ante el tribunal.",
        [
          ["El otorgante confiere poder al apoderado.", "The grantor gives power of attorney to the agent."],
          ["El demandado interpuso recurso contra la sentencia.", "The defendant filed an appeal against the ruling."],
        ],
        [
          mc(
            "En un poder notarial, quien recibe las facultades es…",
            ["el apoderado", "el otorgante", "el demandante", "el fiscal"],
            0,
            "Apoderado = representante."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada figura con su papel.",
        [
          ["demandante", "inicia la demanda civil"],
          ["fiscal", "ejerce la acusación pública"],
          ["letrado", "abogado que defiende"],
          ["compareciente", "se presenta ante la autoridad"],
        ],
        "Papeles procesales."
      ),
      fb("Completa.", "La empresa ___ alegó que no había recibido la notificación. (quien recibe la demanda)", "demandada", "Demandado/a."),
      fb("Completa.", "El ___ firmó el poder a favor de su hija. (quien concede)", "otorgante", "Otorgante."),
      mc(
        "¿Quién representa a una parte ante el tribunal en España, además del abogado?",
        ["el procurador", "el notario", "el fiscal", "el apoderado general"],
        0,
        "Procurador de los tribunales."
      ),
      ms(
        "¿Qué figuras pertenecen al proceso penal?",
        ["el acusado", "el fiscal", "la acusación particular", "el arrendatario"],
        [0, 1, 2],
        "Arrendatario es figura contractual."
      ),
      toEs("The plaintiff's lawyer requested a postponement.", "El letrado del demandante solicitó un aplazamiento.", "Letrado = abogado.", ["El abogado del demandante solicitó un aplazamiento.", "La letrada del demandante solicitó un aplazamiento.", "El abogado de la parte demandante solicitó un aplazamiento."]),
      wo("Compareció ante el juez acompañado de su letrada.", "Comparecer ante.", "He appeared before the judge accompanied by his lawyer."),
    ]
  ),
  L(
    "legal-administrative-spanish-part-1-mastery-check",
    "c2r-contrast-legal-near-synonyms",
    "Contraste: sentencia, fallo, auto, resolución",
    "Palabras que el hablante común usa como sinónimos y el jurista distingue con rigor.",
    "7 min",
    [
      sec(
        "Precisión terminológica",
        "Sentencia: resolución que pone fin al proceso decidiendo el fondo. Fallo: la parte dispositiva de la sentencia (lo que se decide). Auto: resolución motivada sobre cuestiones incidentales. Providencia: resolución de mero trámite. Resolución: término general (también administrativo). Firme: contra la que ya no cabe recurso.",
        [
          ["La sentencia es firme; no cabe recurso.", "The judgment is final; there is no appeal."],
          ["El juez dictó auto de prisión provisional.", "The judge issued an order for provisional detention."],
        ],
        [
          mc(
            "Una sentencia contra la que ya no cabe recurso es…",
            ["firme", "provisional", "cautelar", "nula"],
            0,
            "Sentencia firme."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El juez ___ sentencia absolutoria. (verbo técnico, pretérito)", "dictó", "Dictar sentencia."),
      fb("Completa.", "La parte condenada ___ recurso de apelación. (verbo técnico, pretérito)", "interpuso", "Interponer un recurso."),
      fb("Completa.", "El tribunal ___ el recurso por falta de fundamento. (rechazar, término técnico)", "desestimó", "Desestimar = rechazar."),
      mt(
        "Relaciona el término con su definición.",
        [
          ["auto", "resolución motivada sobre incidencias"],
          ["providencia", "resolución de trámite"],
          ["fallo", "parte dispositiva de la sentencia"],
        ],
        "Tipos de resolución judicial."
      ),
      mc(
        "Si el tribunal da la razón al recurrente, se dice que…",
        ["estima el recurso", "desestima el recurso", "archiva el recurso", "prescribe el recurso"],
        0,
        "Estimar = acoger la pretensión."
      ),
      ms(
        "¿Qué verbos colocan con «recurso»?",
        ["interponer", "estimar", "desestimar", "dictar"],
        [0, 1, 2],
        "Se dicta una sentencia o un auto, no un recurso."
      ),
      toEs("The court upheld the appeal.", "El tribunal estimó el recurso.", "Estimar = dar la razón.", ["El tribunal estimó el recurso de apelación.", "El tribunal admitió y estimó el recurso."]),
    ]
  ),
  L(
    "legal-administrative-spanish-part-1-mastery-check",
    "c2r-mission-instancia",
    "Misión real: redactar una instancia",
    "Solicita a tu ayuntamiento un permiso de obras con el formato clásico EXPONE / SOLICITA.",
    "8 min",
    [
      sec(
        "La estructura de la instancia",
        "Encabezamiento: «D./D.ª [nombre], con DNI…, y domicilio a efectos de notificaciones en…». EXPONE: hechos numerados («Que es propietario de…», «Que desea realizar…»). SOLICITA: «Que, previos los trámites oportunos, se le conceda…». Cierre: lugar, fecha, firma y destinatario («SR./SRA. ALCALDE/SA-PRESIDENTE/A DEL AYUNTAMIENTO DE…»).",
        [
          ["EXPONE: Que es titular de la vivienda sita en la calle Mayor, 3.", "STATES: That he is the owner of the dwelling located at 3 Calle Mayor."],
          ["SOLICITA: Que se le conceda licencia de obra menor.", "REQUESTS: That he be granted a minor works permit."],
        ],
        [
          mc(
            "Las oraciones del EXPONE empiezan tradicionalmente por…",
            ["Que", "Yo", "Hola", "Porque"],
            0,
            "Que + hecho, en tercera persona."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Con domicilio a ___ de notificaciones en la calle Luna, 8.", "efectos", "A efectos de notificaciones."),
      fb("Completa.", "Que es propietaria de la vivienda ___ en la avenida del Mar, 12. (situada, término jurídico)", "sita", "Sito/sita = situado/a."),
      fb("Completa.", "Que, previos los trámites ___, se le conceda la licencia.", "oportunos", "Fórmula fija."),
      mc(
        "¿En qué persona se redacta la instancia clásica?",
        ["en tercera persona", "en primera persona del plural", "en segunda persona", "en voseo"],
        0,
        "«Que es propietario…», «que se le conceda…»."
      ),
      mc(
        "¿Qué sección contiene la petición concreta?",
        ["SOLICITA", "EXPONE", "el encabezamiento", "la firma"],
        0,
        "SOLICITA = lo que se pide."
      ),
      toEs("That he be granted the requested permit.", "Que se le conceda la licencia solicitada.", "Subjuntivo de petición.", ["Que se le conceda el permiso solicitado.", "Que le sea concedida la licencia solicitada."]),
      wo("Que, previos los trámites oportunos, se le conceda la licencia solicitada.", "Fórmula del SOLICITA.", "That, after the appropriate procedures, the requested permit be granted."),
    ]
  ),
  L(
    "legal-administrative-spanish-part-2-2",
    "c2r-error-hunt-contract-clauses",
    "Caza de errores: cláusulas mal redactadas",
    "Ambigüedades, registros mezclados y términos imprecisos en cláusulas de contrato: localízalos y repáralos.",
    "8 min",
    [
      sec(
        "Qué exige una cláusula",
        "Sujeto claro (el arrendador, la parte contratante), obligación precisa (plazo, cantidad, forma), verbo en futuro deóntico o presente («El arrendatario abonará…»), y sin coloquialismos. Ambigüedad típica: «Se pagará pronto» → «se abonará dentro de los cinco primeros días de cada mes».",
        [
          ["✗ El inquilino pagará cuando pueda. → ✓ El arrendatario abonará la renta dentro de los cinco primeros días de cada mes.", "The tenant shall pay the rent within the first five days of each month."],
        ],
        [
          mc(
            "¿Qué cláusula es precisa?",
            ["La renta se abonará mediante transferencia antes del día 5 de cada mes.", "La renta se pagará más o menos a principios de mes.", "El inquilino pagará como siempre.", "Se paga la renta, ya se sabe cuándo."],
            0,
            "Forma y plazo exactos."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el registro.", "El ___ se compromete a mantener el inmueble en buen estado. (el alumno puso: inquilino)", "arrendatario", "Término contractual."),
      fb("Corrige la imprecisión.", "El contrato tendrá una ___ de doce meses. (el alumno puso: vida)", "duración", "Término preciso."),
      fb("Corrige el verbo.", "El incumplimiento de esta cláusula será causa de ___ del contrato. (el alumno puso: romper)", "resolución", "Resolución del contrato."),
      ms(
        "¿Qué problemas tiene «El dueño puede echar al inquilino si hace cosas raras»?",
        ["léxico coloquial (dueño, echar)", "condición imprecisa (cosas raras)", "falta de procedimiento", "exceso de tecnicismos"],
        [0, 1, 2],
        "No tiene exceso de tecnicismos; le faltan."
      ),
      mc(
        "Versión jurídica de «si alguno no cumple»:",
        ["en caso de incumplimiento por cualquiera de las partes", "si alguien pasa del contrato", "si no se hace", "si la cosa sale mal"],
        0,
        "Fórmula contractual."
      ),
      toEs("Either party may terminate the contract with two months' notice.", "Cualquiera de las partes podrá rescindir el contrato con un preaviso de dos meses.", "Futuro deóntico.", ["Cualquiera de las partes podrá resolver el contrato con un preaviso de dos meses.", "Cualquiera de las partes podrá rescindir el contrato con dos meses de preaviso."]),
      wo("El arrendatario abonará la renta dentro de los cinco primeros días de cada mes.", "Cláusula precisa.", "The tenant shall pay the rent within the first five days of each month."),
    ]
  ),
  L(
    "legal-administrative-spanish-part-2-2",
    "c2r-contrast-solidaria-mancomunada",
    "Contraste: responsabilidad solidaria y mancomunada",
    "Dos tipos de obligación compartida con consecuencias muy distintas; más rescindir, resolver y anular.",
    "7 min",
    [
      sec(
        "Deber a medias o deber por todos",
        "Solidaria: el acreedor puede exigir la totalidad de la deuda a cualquiera de los deudores. Mancomunada: cada deudor responde solo de su parte. Por eso el avalista solidario asume un gran riesgo. Otros pares: rescindir (dejar sin efecto por causa prevista) / anular (declarar nulo por vicio) / resolver (extinguir por incumplimiento).",
        [
          ["Los dos socios responden solidariamente de la deuda.", "Both partners are jointly and severally liable for the debt."],
          ["Cada heredero responde mancomunadamente, en proporción a su cuota.", "Each heir is liable only in proportion to their share."],
        ],
        [
          mc(
            "Si la responsabilidad es solidaria, el banco puede reclamar…",
            ["toda la deuda a cualquiera de los deudores", "solo la mitad a cada uno", "nada hasta que paguen todos", "solo al primero que firmó"],
            0,
            "Solidaridad = cada uno por el todo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Como avalista ___, tuvo que pagar la deuda entera de su hermano.", "solidario", "Responde por la totalidad."),
      fb("Completa.", "En la obligación ___, cada deudor paga solo su parte.", "mancomunada", "Mancomunidad."),
      fb("Completa.", "El juez declaró ___ el contrato por falta de consentimiento. (sin validez jurídica)", "nulo", "Nulidad por vicio."),
      mc(
        "Un contrato se extingue porque una parte no cumple. Se habla de…",
        ["resolución por incumplimiento", "nulidad de pleno derecho", "prescripción", "usufructo"],
        0,
        "Resolver por incumplimiento."
      ),
      mt(
        "Relaciona cada término con su definición.",
        [
          ["prescribir", "extinguirse un derecho por el paso del tiempo"],
          ["subsanar", "corregir un defecto"],
          ["notificar", "comunicar formalmente"],
          ["caducar", "perder vigencia por vencimiento"],
        ],
        "Vocabulario jurídico-administrativo."
      ),
      toEs("The debt has prescribed; it can no longer be claimed.", "La deuda ha prescrito; ya no puede reclamarse.", "Prescribir.", ["La deuda ha prescrito y ya no se puede reclamar.", "La deuda prescribió; ya no puede reclamarse."]),
      wo("Ambos firmantes responderán solidariamente de las obligaciones contraídas.", "Responsabilidad solidaria.", "Both signatories shall be jointly and severally liable for the obligations incurred."),
    ]
  ),
  L(
    "legal-administrative-spanish-part-2-4",
    "c2r-story-detective-notification",
    "Detective de textos: una notificación administrativa",
    "Lee una notificación de Hacienda y extrae plazos, obligaciones y consecuencias.",
    "8 min",
    [
      sec(
        "La notificación",
        "«Por medio de la presente se le notifica que, examinada su declaración, se han detectado defectos subsanables. Dispone de un plazo de diez días hábiles, a contar desde el día siguiente a la recepción de esta notificación, para subsanarlos. Transcurrido dicho plazo sin que se haya producido la subsanación, se le tendrá por desistido de su solicitud, sin perjuicio de las sanciones que pudieran corresponder.»",
        [
          ["Defectos subsanables.", "Errors that can be corrected."],
          ["Se le tendrá por desistido.", "You will be deemed to have withdrawn."],
        ],
        [
          mc(
            "¿Cuánto tiempo tiene el ciudadano?",
            ["diez días hábiles desde el día siguiente a recibirla", "diez días naturales desde la fecha del documento", "un mes", "hasta que quiera"],
            0,
            "Días hábiles, a contar desde el día siguiente."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué pasa si no corrige los defectos a tiempo?",
        ["Se considera que renuncia a su solicitud.", "Se le concede lo solicitado.", "Se amplía el plazo automáticamente.", "No pasa nada."],
        0,
        "Tener por desistido = considerar que ha renunciado."
      ),
      mc(
        "«Días hábiles» excluye…",
        ["sábados, domingos y festivos", "solo los domingos", "los lunes", "ningún día"],
        0,
        "En el procedimiento administrativo español."
      ),
      fb("Completa.", "Los defectos son ___: pueden corregirse.", "subsanables", "Subsanable."),
      fb("Completa.", "El plazo se cuenta a ___ desde el día siguiente.", "contar", "A contar desde."),
      mc(
        "«Sin perjuicio de las sanciones que pudieran corresponder» implica que…",
        ["además podría haber sanciones", "no habrá sanciones", "las sanciones sustituyen el plazo", "la sanción ya está decidida"],
        0,
        "Deja abierta la posibilidad de sancionar."
      ),
      ms(
        "¿Qué rasgos del estilo administrativo aparecen?",
        ["se impersonal (se le notifica)", "participio absoluto (examinada su declaración)", "subjuntivo en fórmula (pudieran corresponder)", "voseo"],
        [0, 1, 2],
        "No hay voseo."
      ),
      wo("Transcurrido dicho plazo, se le tendrá por desistido de su solicitud.", "Participio absoluto + fórmula.", "Once this period has elapsed, you will be deemed to have withdrawn your application."),
    ]
  ),
  L(
    "legal-administrative-spanish-part-2-mastery-check",
    "c2r-dialogue-lab-notary",
    "Laboratorio de diálogo: en la notaría",
    "Firma de un poder notarial: el notario explica, el cliente pregunta. Comprende y responde en el registro adecuado.",
    "7 min",
    [
      sec(
        "La escena",
        "—Notario: Usted, como otorgante, confiere a su hijo poder general para administrar sus bienes. ¿Comprende el alcance? —Cliente: ¿Podría revocarlo más adelante? —Notario: Sí, el poder es revocable en cualquier momento mediante nueva escritura. —Cliente: ¿Y mi hijo podría vender la casa? —Notario: Solo si el poder incluye facultades de disposición; este es de mera administración.",
        [
          ["El poder es revocable.", "The power of attorney can be revoked."],
          ["Facultades de disposición.", "Powers to sell or dispose of property."],
        ],
        [
          mc(
            "¿Puede el hijo vender la casa con este poder?",
            ["No, es un poder de mera administración.", "Sí, siempre.", "Solo con el permiso del notario.", "Sí, si la vende barata."],
            0,
            "Hace falta facultad de disposición."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El poder puede ___ en cualquier momento. (dejar sin efecto, infinitivo)", "revocarse", "Revocar un poder."),
      fb("Completa.", "Usted ___ poder a su hijo. (conceder, término notarial)", "confiere", "Conferir/otorgar poder."),
      mc(
        "¿Qué pregunta es adecuada ante el notario?",
        ["¿Podría explicarme el alcance de estas facultades?", "¿Esto qué es, tío?", "Venga, ¿dónde firmo y me piro?", "¿Me lo resumes rapidito?"],
        0,
        "Registro formal."
      ),
      mc(
        "«Escritura pública» es…",
        ["un documento autorizado por notario", "cualquier texto escrito", "un correo electrónico", "una carta privada"],
        0,
        "Documento notarial."
      ),
      mt(
        "Relaciona el término con su significado.",
        [
          ["otorgar", "conceder formalmente"],
          ["revocar", "anular una concesión"],
          ["facultad", "capacidad jurídica para actuar"],
        ],
        "Vocabulario notarial."
      ),
      toEs("Could I revoke the power of attorney later on?", "¿Podría revocar el poder más adelante?", "Condicional de cortesía.", ["¿Podría revocar el poder notarial más adelante?", "¿Podría revocar el poder en el futuro?"]),
      wo("El poder podrá revocarse en cualquier momento mediante nueva escritura.", "Revocación del poder.", "The power of attorney may be revoked at any time by a new deed."),
    ]
  ),
  L(
    "legal-administrative-spanish-part-2-mastery-check",
    "c2r-spiral-legal-subjunctive-participle",
    "Repaso en espiral: el jurídico con gramática del C1",
    "El estilo legal concentra estructuras del C1: participio absoluto, se impersonal, futuro deóntico y subjuntivo en condiciones.",
    "8 min",
    [
      sec(
        "La gramática del texto legal",
        "Participio absoluto: «Leída la presente, la firman…». Futuro deóntico (= deberá): «El arrendatario abonará…». Subjuntivo en condiciones hipotéticas: «En caso de que alguna de las partes incumpliere/incumpla…» (el futuro de subjuntivo —incumpliere— sobrevive solo en textos jurídicos). Se impersonal: «Se hace constar que…».",
        [
          ["Leído el presente documento, las partes lo firman.", "Having read this document, the parties sign it."],
          ["En caso de que el comprador no abone el precio…", "Should the buyer fail to pay the price…"],
        ],
        [
          mc(
            "«En caso de que el inquilino ___ la fianza…» (forma general moderna)",
            ["no abone", "no abona", "no abonará", "no abonaba"],
            0,
            "En caso de que + presente de subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Participio absoluto.", "___ el plazo, no se admitirán reclamaciones. (vencer)", "Vencido", "Participio absoluto."),
      fb("Futuro deóntico.", "El comprador ___ el precio en el acto de la firma. (pagar)", "pagará", "Futuro = obligación."),
      fb("Se impersonal.", "___ hace constar que el inmueble está libre de cargas.", "Se", "Fórmula notarial."),
      mc(
        "Futuro de subjuntivo propio de textos legales: «El que ___ daño a otro, estará obligado a repararlo.»",
        ["hiciere", "hiciera", "haga", "hace"],
        0,
        "Futuro de subjuntivo, hoy solo en textos jurídicos."
      ),
      mc(
        "¿Qué frase es propia de un contrato?",
        ["Firmado el acuerdo, ambas partes quedan obligadas.", "Una vez que firmamos, ya está.", "Firmamos y listo.", "Cuando firmemos, pues ya veremos."],
        0,
        "Participio absoluto."
      ),
      toEs("Once the documentation has been examined, the request is approved.", "Examinada la documentación, se aprueba la solicitud.", "Participio absoluto + se.", ["Una vez examinada la documentación, se aprueba la solicitud.", "Examinada la documentación, se estima la solicitud."]),
      wo("Leído el presente contrato, las partes lo firman por duplicado.", "Participio absoluto.", "Having read this contract, the parties sign it in duplicate."),
    ]
  ),
  L(
    "medical-health-spanish-2",
    "c2r-sort-pain-descriptors",
    "Clasificación: describir el dolor como un clínico",
    "Sordo, punzante, opresivo, lancinante, irradiado, intermitente: ordena los descriptores y úsalos con precisión.",
    "7 min",
    [
      sec(
        "Cualidad, localización y evolución",
        "Cualidad: sordo (continuo y poco intenso), punzante (como pinchazos), opresivo (como un peso), lancinante (agudo y desgarrador), urente (quemazón). Localización: localizado / difuso / irradiado (se extiende: «irradia al brazo izquierdo»). Evolución: continuo, intermitente, progresivo, de inicio súbito o insidioso.",
        [
          ["Un dolor opresivo en el pecho que irradia al brazo izquierdo.", "A crushing chest pain radiating to the left arm."],
          ["Un dolor sordo y continuo en la zona lumbar.", "A dull, constant pain in the lower back."],
        ],
        [
          mc(
            "Un dolor «como si me clavaran agujas» es…",
            ["punzante", "sordo", "opresivo", "difuso"],
            0,
            "Punzante = como pinchazos."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el descriptor con su definición.",
        [
          ["sordo", "continuo y poco intenso"],
          ["opresivo", "como un peso encima"],
          ["urente", "con sensación de quemazón"],
          ["irradiado", "se extiende a otra zona"],
        ],
        "Semiología del dolor."
      ),
      fb("Completa.", "El dolor empezó de golpe: fue de inicio ___.", "súbito", "Súbito ≠ insidioso."),
      fb("Completa.", "Va y viene: es un dolor ___.", "intermitente", "Intermitente."),
      fb("Completa.", "El dolor de la ciática ___ por toda la pierna. (extenderse, término clínico)", "irradia", "Irradiar."),
      mc(
        "¿Qué descripción es más útil para el médico?",
        ["Dolor punzante en el costado derecho desde hace tres días, que empeora al respirar.", "Me duele mucho por aquí.", "Me encuentro fatal.", "Tengo un dolor raro."],
        0,
        "Cualidad + localización + tiempo + factor agravante."
      ),
      toEs("I have a dull pain in my lower back that gets worse when I sit.", "Tengo un dolor sordo en la zona lumbar que empeora al sentarme.", "Descripción precisa.", ["Tengo un dolor sordo en la zona lumbar que empeora cuando me siento.", "Tengo un dolor sordo en la parte baja de la espalda que empeora al sentarme."]),
      wo("El dolor es de inicio insidioso y ha ido empeorando progresivamente.", "Evolución del dolor.", "The pain had a gradual onset and has been getting progressively worse."),
    ]
  ),
  L(
    "medical-health-spanish-2",
    "c2r-dialogue-lab-anamnesis",
    "Laboratorio de diálogo: la anamnesis",
    "Responde a las preguntas de una médica sobre antecedentes, alergias, medicación y hábitos.",
    "7 min",
    [
      sec(
        "Las preguntas del historial",
        "Motivo de consulta: «¿Qué le trae por aquí?». Enfermedad actual: «¿Desde cuándo…? ¿Ha tomado algo?». Antecedentes personales: «¿Padece alguna enfermedad crónica? ¿Le han operado alguna vez?». Antecedentes familiares: «¿Hay casos de… en su familia?». Alergias, medicación habitual y hábitos tóxicos (tabaco, alcohol).",
        [
          ["—¿Es alérgico a algún medicamento? —Sí, a la penicilina.", "—Are you allergic to any medication? —Yes, to penicillin."],
          ["—¿Toma alguna medicación de forma habitual? —Un antihipertensivo.", "—Do you take any regular medication? —A blood pressure drug."],
        ],
        [
          mc(
            "«¿Qué le trae por aquí?» pregunta por…",
            ["el motivo de consulta", "los antecedentes familiares", "las alergias", "la dirección"],
            0,
            "Motivo de consulta."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Hay antecedentes de diabetes en su familia?» Respuesta adecuada:",
        ["Sí, mi padre y mi abuela eran diabéticos.", "Sí, soy alérgico al polen.", "No, no fumo.", "Desde hace dos días."],
        0,
        "Antecedentes familiares."
      ),
      fb("Completa.", "Me ___ de apendicitis hace diez años. (operar, ellos)", "operaron", "Antecedentes quirúrgicos."),
      fb("Completa.", "___ de hipertensión desde los cuarenta. (sufrir una enfermedad crónica, yo, presente)", "Padezco", "Padecer."),
      fb("Completa.", "No, no tengo ___ hábito tóxico: ni fumo ni bebo.", "ningún", "Ningún + sustantivo masculino."),
      mt(
        "Relaciona la pregunta con la sección del historial.",
        [
          ["¿Le han operado alguna vez?", "antecedentes quirúrgicos"],
          ["¿Fuma usted?", "hábitos tóxicos"],
          ["¿Algún familiar ha tenido cáncer?", "antecedentes familiares"],
        ],
        "Estructura de la anamnesis."
      ),
      toEs("I'm allergic to penicillin and I take medication for blood pressure.", "Soy alérgico a la penicilina y tomo medicación para la tensión.", "Respuesta de anamnesis.", ["Soy alérgica a la penicilina y tomo medicación para la tensión.", "Soy alérgico a la penicilina y tomo medicación para la presión arterial.", "Soy alérgico a la penicilina y tomo pastillas para la tensión."]),
      wo("¿Desde cuándo tiene usted estas molestias?", "Pregunta clínica.", "How long have you had this discomfort?"),
    ]
  ),
  L(
    "medical-health-spanish-4",
    "c2r-contrast-technical-colloquial-medical",
    "Contraste: el término técnico y el de la calle",
    "Cefalea / dolor de cabeza, disnea / ahogo, hipertensión / tensión alta: aprende a moverte entre los dos registros.",
    "7 min",
    [
      sec(
        "Dos registros de la salud",
        "El profesional escribe cefalea, disnea, astenia, prurito, pirosis, epistaxis, febrícula; el paciente dice dolor de cabeza, ahogo/falta de aire, cansancio, picor, ardor de estómago, sangrado de nariz, unas décimas. Un buen comunicador sanitario traduce sin condescendencia.",
        [
          ["Presenta astenia y febrícula. → Está muy cansado y tiene unas décimas.", "He presents asthenia and low-grade fever."],
          ["Refiere pirosis tras las comidas. → Dice que le arde el estómago después de comer.", "She reports heartburn after meals."],
        ],
        [
          mc(
            "«Epistaxis» es…",
            ["sangrado por la nariz", "dolor de oído", "pérdida de visión", "tos seca"],
            0,
            "Epistaxis = hemorragia nasal."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el término técnico con el coloquial.",
        [
          ["cefalea", "dolor de cabeza"],
          ["disnea", "falta de aire"],
          ["prurito", "picor"],
          ["pirosis", "ardor de estómago"],
        ],
        "Técnico ↔ coloquial."
      ),
      fb("Traduce al registro técnico.", "Tiene unas décimas. → Presenta ___.", "febrícula", "Febrícula."),
      fb("Traduce al registro técnico.", "Está siempre muy cansado. → Refiere ___.", "astenia", "Astenia."),
      fb("Traduce al registro claro.", "Presenta hipertensión arterial. → Tiene la ___ alta.", "tensión", "Tensión (o presión) alta."),
      mc(
        "En el informe médico, «refiere» significa…",
        ["el paciente dice / cuenta", "el médico deriva", "se repite", "se refiere a otro paciente"],
        0,
        "Referir = manifestar el paciente."
      ),
      toEs("The patient reports shortness of breath on exertion.", "El paciente refiere disnea de esfuerzo.", "Registro clínico.", ["El paciente refiere disnea al esfuerzo.", "La paciente refiere disnea de esfuerzo."]),
      wo("Refiere cefalea intensa desde hace dos días.", "Registro clínico.", "Reports a severe headache for two days."),
    ]
  ),
  L(
    "medical-health-spanish-4",
    "c2r-mission-posology",
    "Misión real: explicar la posología",
    "Eres farmacéutico: explica a un paciente cómo tomar su tratamiento, con precisión y sin tecnicismos innecesarios.",
    "7 min",
    [
      sec(
        "Instrucciones claras",
        "Dosis: un comprimido de 500 mg. Frecuencia: cada ocho horas. Relación con las comidas: en ayunas / con las comidas / después de comer. Duración: durante siete días, aunque se encuentre mejor. Advertencias: puede producir somnolencia; no combinar con alcohol. Formas: comprimido, cápsula, jarabe, sobre, gotas, pomada.",
        [
          ["Tómese un comprimido cada ocho horas durante siete días.", "Take one tablet every eight hours for seven days."],
          ["No interrumpa el tratamiento aunque se encuentre mejor.", "Don't stop the treatment even if you feel better."],
        ],
        [
          mc(
            "«En ayunas» significa…",
            ["sin haber comido nada antes", "después de cenar", "con mucha agua", "por la noche"],
            0,
            "En ayunas = con el estómago vacío."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Tómese una cápsula ___ ocho horas.", "cada", "Cada + intervalo."),
      fb("Completa.", "No interrumpa el tratamiento aunque se ___ mejor. (encontrar, usted)", "encuentre", "Aunque + subjuntivo (hipótesis)."),
      fb("Completa.", "Este medicamento puede producir ___: no conduzca. (sueño, término técnico)", "somnolencia", "Somnolencia."),
      mc(
        "¿Qué instrucción es completa?",
        ["Un sobre disuelto en agua cada doce horas, durante cinco días, después de las comidas.", "Tómeselo cuando quiera.", "Un sobre, ya sabe.", "Tómese muchos sobres."],
        0,
        "Dosis + frecuencia + duración + relación con las comidas."
      ),
      ms(
        "¿Qué son formas farmacéuticas?",
        ["comprimido", "jarabe", "pomada", "posología"],
        [0, 1, 2],
        "Posología = pauta de dosificación."
      ),
      toEs("Take this on an empty stomach, half an hour before breakfast.", "Tómeselo en ayunas, media hora antes del desayuno.", "Imperativo de usted.", ["Tómelo en ayunas, media hora antes del desayuno.", "Tómeselo en ayunas, media hora antes de desayunar."]),
      wo("Evite el alcohol mientras dure el tratamiento.", "Mientras + subjuntivo.", "Avoid alcohol for as long as the treatment lasts."),
    ]
  ),
  L(
    "medical-health-spanish-6",
    "c2r-story-detective-medical-report",
    "Detective de textos: el informe de alta",
    "Lee un informe de alta hospitalaria y responde: diagnóstico, pruebas, tratamiento y recomendaciones.",
    "8 min",
    [
      sec(
        "Informe de alta",
        "«Paciente de 58 años que acude a Urgencias por dolor torácico opresivo de dos horas de evolución. Antecedentes: hipertensión y tabaquismo activo. Se realiza electrocardiograma y analítica, con elevación de marcadores cardíacos. Diagnóstico: infarto agudo de miocardio. Se practica cateterismo con implantación de stent. Evolución favorable. Tratamiento al alta: antiagregantes y estatinas. Recomendaciones: abandono del tabaco, dieta cardiosaludable y control por Cardiología en un mes.»",
        [
          ["Dolor torácico de dos horas de evolución.", "Chest pain for two hours."],
          ["Evolución favorable.", "Good progress."],
        ],
        [
          mc(
            "¿Cuál fue el diagnóstico?",
            ["infarto agudo de miocardio", "hipertensión", "neumonía", "ansiedad"],
            0,
            "Diagnóstico explícito."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué factor de riesgo debe eliminar el paciente?",
        ["el tabaco", "el ejercicio", "el agua", "el sueño"],
        0,
        "Tabaquismo activo → abandono del tabaco."
      ),
      mc(
        "«Evolución favorable» significa que…",
        ["el paciente ha mejorado", "el paciente ha empeorado", "hay que operar otra vez", "no hay cambios"],
        0,
        "Favorable = buena."
      ),
      ms(
        "¿Qué pruebas se hicieron?",
        ["electrocardiograma", "analítica", "cateterismo", "resonancia magnética"],
        [0, 1, 2],
        "No se menciona resonancia."
      ),
      fb("Completa.", "El paciente ___ a Urgencias por dolor torácico. (llegar, término del informe, presente)", "acude", "Acudir."),
      fb("Completa.", "Se ___ cateterismo con implantación de stent. (realizar, término del informe)", "practica", "Practicar una prueba."),
      mc(
        "¿Quién hará el seguimiento?",
        ["Cardiología, en un mes", "Urgencias, mañana", "el médico de familia, en un año", "nadie"],
        0,
        "Control por Cardiología en un mes."
      ),
      wo("Se recomienda control por su médico de familia en quince días.", "Recomendación del informe.", "Follow-up with the family doctor in two weeks is recommended."),
    ]
  ),
  L(
    "medical-health-spanish-6",
    "c2r-spiral-medical-hedging",
    "Repaso en espiral: dar malas noticias con tacto",
    "Comunicar un diagnóstico exige atenuación, subjuntivo y eufemismo: repásalos en contexto sanitario.",
    "8 min",
    [
      sec(
        "La comunicación compasiva",
        "Preparar: «Me gustaría hablar con usted de los resultados». Atenuar: «Los resultados no son todo lo buenos que esperábamos». Explicar sin tecnicismos. Abrir espacio: «¿Quiere que le explique algo más?». Subjuntivo de deseo y apoyo: «Es normal que se sienta así», «Haremos todo lo posible para que esté cómodo».",
        [
          ["Es normal que tenga miedo.", "It's normal for you to be afraid."],
          ["Los resultados no son todo lo buenos que esperábamos.", "The results are not as good as we had hoped."],
        ],
        [
          mc(
            "¿Qué frase es más compasiva?",
            ["Me temo que los resultados no son los que esperábamos.", "Tiene usted cáncer, siguiente.", "Esto pinta fatal.", "No hay nada que hacer."],
            0,
            "Atenuación: me temo que."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Es comprensible que ___ preocupado. (estar, usted)", "esté", "Valoración + subjuntivo."),
      fb("Completa.", "Haremos todo lo posible para que no ___ dolor. (tener, usted)", "tenga", "Para que + subjuntivo."),
      fb("Completa.", "Me ___ que tengo que darle una mala noticia. (temer)", "temo", "Me temo que = atenuación."),
      mc(
        "Eufemismo sanitario de «se va a morir pronto»:",
        ["Su pronóstico es reservado.", "Se va a morir pronto.", "Ya no hay remedio, lo siento.", "Esto se acaba."],
        0,
        "Pronóstico reservado."
      ),
      mc(
        "«¿Quiere que se lo ___ a su familia?»",
        ["expliquemos", "explicamos", "explicaremos", "explicar"],
        0,
        "Querer que + subjuntivo."
      ),
      toEs("It's normal for you to feel overwhelmed.", "Es normal que se sienta abrumado.", "Es normal que + subjuntivo.", ["Es normal que se sienta abrumada.", "Es normal que te sientas abrumado."]),
      wo("Vamos a hacer todo lo posible para que se encuentre bien.", "Para que + subjuntivo.", "We're going to do everything we can so that you feel well."),
    ]
  ),
  L(
    "everyday-idioms-1",
    "c2r-idioms-image-to-meaning",
    "Red de palabras: de la imagen al significado",
    "Agrupa modismos por la imagen que los sostiene (partes del cuerpo, comida, animales) y descubre su sentido.",
    "7 min",
    [
      sec(
        "Familias de imágenes",
        "Cuerpo: tomar el pelo (burlarse), no tener pelos en la lengua (hablar sin rodeos), costar un riñón (ser carísimo), echar una mano (ayudar). Comida: ser pan comido (muy fácil), importar un pimiento (no importar nada), dar calabazas (rechazar). Animales: estar como una cabra (loco), buscarle tres pies al gato (complicar las cosas).",
        [
          ["Ese examen fue pan comido.", "That exam was a piece of cake."],
          ["No tiene pelos en la lengua.", "She doesn't mince words."],
        ],
        [
          mc(
            "«Me estás tomando el pelo» significa…",
            ["te estás burlando de mí", "me estás cortando el pelo", "me estás ayudando", "me estás engañando con dinero"],
            0,
            "Tomar el pelo = burlarse."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el modismo con su significado.",
        [
          ["dar calabazas", "rechazar a un pretendiente"],
          ["estar como una cabra", "estar loco"],
          ["echar una mano", "ayudar"],
          ["importar un pimiento", "no importar nada"],
        ],
        "Modismos de imagen."
      ),
      fb("Completa.", "No le busques tres pies al ___: es más sencillo de lo que parece.", "gato", "Buscarle tres pies al gato."),
      fb("Completa.", "Este bolso me ha costado un ___.", "riñón", "Costar un riñón = ser carísimo."),
      fb("Completa.", "Para ella, aprobar fue pan ___.", "comido", "Ser pan comido."),
      mc(
        "¿Qué modismo describe a alguien muy directo?",
        ["no tener pelos en la lengua", "tomar el pelo", "estar como una cabra", "dar calabazas"],
        0,
        "Hablar sin rodeos."
      ),
      toEs("Can you give me a hand with the boxes?", "¿Me echas una mano con las cajas?", "Echar una mano.", ["¿Me puedes echar una mano con las cajas?", "¿Me echas una mano con estas cajas?"]),
      wo("Le dio calabazas delante de todos sus amigos.", "Dar calabazas.", "She turned him down in front of all his friends."),
    ]
  ),
  L(
    "everyday-idioms-1",
    "c2r-idioms-register-choice",
    "Contraste: ¿modismo o no? Registro y ocasión",
    "El mismo modismo puede ser simpático en un bar y desastroso en una reunión. Decide cuándo usarlo.",
    "7 min",
    [
      sec(
        "Pertinencia del modismo",
        "Coloquiales neutros (valen casi siempre entre conocidos): echar una mano, ser pan comido. Coloquiales marcados (solo con confianza): mandar a freír espárragos, ponerse las botas. Aptos para registro culto: poner los puntos sobre las íes, llevar la voz cantante, a grandes rasgos, en tela de juicio.",
        [
          ["Conviene poner los puntos sobre las íes antes de firmar.", "We should dot the i's before signing."],
          ["Su honestidad nunca se ha puesto en tela de juicio.", "Her honesty has never been called into question."],
        ],
        [
          mc(
            "¿Qué modismo encaja en un informe formal?",
            ["poner en tela de juicio", "mandar a freír espárragos", "ponerse las botas", "estar como una cabra"],
            0,
            "Registro culto."
          ),
        ]
      ),
    ],
    [
      fb("Completa (registro culto).", "El director llevó la voz ___ durante toda la negociación.", "cantante", "Llevar la voz cantante = dirigir."),
      fb("Completa (registro culto).", "A grandes ___, el plan consta de tres fases.", "rasgos", "A grandes rasgos = en líneas generales."),
      fb("Completa (coloquial).", "En la boda nos pusimos las ___: había comida para un regimiento.", "botas", "Ponerse las botas = comer mucho / aprovecharse."),
      mc(
        "¿Dónde sería inadecuado «Lo mandé a freír espárragos»?",
        ["en un correo a un cliente", "contándoselo a tu hermana", "en un chat con amigos", "en una conversación informal"],
        0,
        "Coloquial y algo brusco."
      ),
      ms(
        "¿Qué modismos son aptos para un registro formal?",
        ["poner los puntos sobre las íes", "en tela de juicio", "a grandes rasgos", "ponerse las botas"],
        [0, 1, 2],
        "«Ponerse las botas» es coloquial."
      ),
      toEs("His version was called into question.", "Su versión fue puesta en tela de juicio.", "Poner en tela de juicio.", ["Su versión se puso en tela de juicio.", "Pusieron en tela de juicio su versión."]),
      wo("Antes de seguir, conviene poner los puntos sobre las íes.", "Modismo culto.", "Before going on, we should make things perfectly clear."),
    ]
  ),
  L(
    "everyday-idioms-2",
    "c2r-idioms-error-hunt-mixed",
    "Caza de errores: modismos cruzados y calcos",
    "«Llover gatos y perros», «matar dos pájaros con una piedra», «tomar el toro por los cuernos»: repara las mezclas y calcos.",
    "7 min",
    [
      sec(
        "Mezclas frecuentes",
        "Calco del inglés: ✗ llover gatos y perros → ✓ llover a cántaros. ✗ romper el hielo con alguien (sí existe «romper el hielo», ¡cuidado con los calcos que coinciden!). Cruces: ✗ «matar dos pájaros con una piedra» → ✓ «matar dos pájaros de un tiro». ✗ «coger el toro por las astas y los cuernos» → ✓ «coger/agarrar el toro por los cuernos».",
        [
          ["Está lloviendo a cántaros.", "It's raining cats and dogs."],
          ["Mataremos dos pájaros de un tiro.", "We'll kill two birds with one stone."],
        ],
        [
          mc(
            "Forma correcta:",
            ["matar dos pájaros de un tiro", "matar dos pájaros con una piedra", "matar dos pájaros en un tiro", "matar pájaros de dos tiros"],
            0,
            "De un tiro."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Está lloviendo a ___. (el alumno puso: gatos y perros)", "cántaros", "Llover a cántaros."),
      fb("Corrige.", "Hay que coger el toro por los ___. (el alumno puso: pies)", "cuernos", "Coger el toro por los cuernos."),
      fb("Corrige.", "Esto no es mi taza de té → Esto no es lo ___. (calco de «not my cup of tea»)", "mío", "No es lo mío."),
      mc(
        "«Estar en la luna» significa…",
        ["estar distraído", "estar muy feliz", "ser astronauta", "estar lejos"],
        0,
        "Estar en la luna = despistado."
      ),
      ms(
        "¿Cuáles son calcos incorrectos en español?",
        ["llover gatos y perros", "es un pedazo de pastel (= muy fácil)", "romper el hielo", "costar un brazo y una pierna"],
        [0, 1, 3],
        "«Romper el hielo» sí existe en español."
      ),
      toEs("That's not really my thing.", "Eso no es lo mío.", "No ser lo mío.", ["Eso no es muy lo mío.", "No es lo mío."]),
      wo("Aprovechando el viaje, mataremos dos pájaros de un tiro.", "Modismo correcto.", "Taking advantage of the trip, we'll kill two birds with one stone."),
    ]
  ),
  L(
    "everyday-idioms-2",
    "c2r-idioms-dialogue-lab",
    "Laboratorio de diálogo: modismos en la conversación real",
    "Una charla entre compañeros de piso llena de modismos: comprende y responde con el modismo adecuado.",
    "7 min",
    [
      sec(
        "La conversación",
        "—Oye, ¿has pagado la luz? —Uy, se me fue el santo al cielo. —Siempre igual, ¡me tienes hasta la coronilla! —Perdona, mañana sin falta. No te pongas así, que no es para tanto. —Vale, pero a la próxima te leo la cartilla.",
        [
          ["Se me fue el santo al cielo.", "It completely slipped my mind."],
          ["Me tienes hasta la coronilla.", "I'm fed up with you."],
        ],
        [
          mc(
            "«Leerle la cartilla a alguien» significa…",
            ["regañarle seriamente", "enseñarle a leer", "leerle un cuento", "darle un regalo"],
            0,
            "Leer la cartilla = reprender."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Perdona, se me fue el santo al ___.", "cielo", "Irse el santo al cielo = olvidar."),
      fb("Completa.", "Estoy hasta la ___ de tanto ruido.", "coronilla", "Hasta la coronilla = harto."),
      mc(
        "«—Te has comido mi yogur. —Bueno, ___.» (quitar importancia)",
        ["no es para tanto", "me tienes hasta la coronilla", "te leo la cartilla", "se me fue el santo al cielo"],
        0,
        "No es para tanto = no es tan grave."
      ),
      mc(
        "«Me quedé de piedra» expresa…",
        ["sorpresa enorme", "cansancio", "frío", "aburrimiento"],
        0,
        "Quedarse de piedra = muy sorprendido."
      ),
      mt(
        "Relaciona el modismo con su sentido.",
        [
          ["meter la pata", "equivocarse"],
          ["dar la lata", "molestar"],
          ["hacer la vista gorda", "fingir no ver"],
        ],
        "Modismos cotidianos."
      ),
      toEs("It completely slipped my mind.", "Se me fue el santo al cielo.", "Modismo de olvido.", ["Se me fue completamente el santo al cielo.", "Se me olvidó por completo."]),
      wo("El jefe hizo la vista gorda con el retraso de ayer.", "Hacer la vista gorda.", "The boss turned a blind eye to yesterday's delay."),
    ]
  ),
  L(
    "proverbs-sayings-1",
    "c2r-proverbs-complete",
    "Transformaciones: completa el refrán",
    "Los refranes tienen dos mitades rítmicas: reconstruye la segunda parte y explica su sentido.",
    "7 min",
    [
      sec(
        "Estructura bimembre",
        "Muchos refranes tienen dos partes con rima o paralelismo: «A quien madruga, / Dios le ayuda». «Perro ladrador, / poco mordedor». «Dime con quién andas / y te diré quién eres». «Camarón que se duerme, / se lo lleva la corriente». En la conversación, a menudo basta con decir la primera mitad.",
        [
          ["Más vale pájaro en mano que ciento volando.", "A bird in the hand is worth two in the bush."],
          ["No por mucho madrugar amanece más temprano.", "Getting up early won't make the sun rise sooner."],
        ],
        [
          mc(
            "«Perro ladrador…»",
            ["…poco mordedor.", "…mucho cazador.", "…nunca duerme.", "…buen vecino."],
            0,
            "Quien amenaza mucho rara vez actúa."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Dime con quién andas y te diré quién ___.", "eres", "Refrán sobre las compañías."),
      fb("Completa.", "Camarón que se duerme, se lo lleva la ___.", "corriente", "Hay que estar atento."),
      fb("Completa.", "Al mal tiempo, buena ___.", "cara", "Afrontar las dificultades con optimismo."),
      mt(
        "Relaciona el comienzo con el final.",
        [
          ["A caballo regalado…", "…no le mires el diente."],
          ["En casa de herrero…", "…cuchillo de palo."],
          ["Ojos que no ven…", "…corazón que no siente."],
        ],
        "Refranes bimembres."
      ),
      mc(
        "«En casa de herrero, cuchillo de palo» critica…",
        ["que falte algo justo donde debería abundar", "a los herreros", "la madera", "la pobreza en general"],
        0,
        "Paradoja: el experto descuida lo suyo."
      ),
      toEs("Birds of a feather flock together.", "Dios los cría y ellos se juntan.", "Refrán equivalente.", []),
      wo("Quien siembra vientos recoge tempestades.", "Refrán sobre las consecuencias.", "Sow the wind and reap the whirlwind."),
    ]
  ),
  L(
    "proverbs-sayings-2",
    "c2r-proverbs-contradictory",
    "Contraste: refranes que se contradicen",
    "«A quien madruga, Dios le ayuda» frente a «No por mucho madrugar amanece más temprano»: elige el refrán según la situación.",
    "7 min",
    [
      sec(
        "Sabiduría situacional",
        "Pares opuestos: esfuerzo temprano (A quien madruga…) / no forzar (No por mucho madrugar…). Precaución (Más vale prevenir que curar) / audacia (Quien no se arriesga no cruza el río). Soledad (Más vale solo que mal acompañado) / compañía (Dos cabezas piensan mejor que una). El refrán no es verdad universal: es un argumento para un caso.",
        [
          ["Quien no se arriesga no cruza el río.", "Nothing ventured, nothing gained."],
          ["Más vale prevenir que curar.", "Better safe than sorry."],
        ],
        [
          mc(
            "Un amigo duda si montar su empresa. Para animarlo:",
            ["Quien no se arriesga no cruza el río.", "Más vale prevenir que curar.", "Más vale pájaro en mano que ciento volando.", "Zapatero, a tus zapatos."],
            0,
            "Refrán de audacia."
          ),
        ]
      ),
    ],
    [
      mc(
        "Tu hermana quiere dejar un trabajo estable por una promesa incierta. Para frenarla:",
        ["Más vale pájaro en mano que ciento volando.", "Quien no se arriesga no cruza el río.", "A quien madruga, Dios le ayuda.", "Dos cabezas piensan mejor que una."],
        0,
        "Prudencia."
      ),
      mc(
        "Alguien acaba de romper una relación tóxica:",
        ["Más vale solo que mal acompañado.", "Dos cabezas piensan mejor que una.", "El que la sigue la consigue.", "Perro ladrador, poco mordedor."],
        0,
        "Soledad preferible."
      ),
      fb("Completa.", "Más vale ___ que curar.", "prevenir", "Precaución."),
      fb("Completa.", "Dos cabezas piensan mejor que ___.", "una", "Colaboración."),
      mt(
        "Relaciona cada refrán con su opuesto.",
        [
          ["A quien madruga, Dios le ayuda.", "No por mucho madrugar amanece más temprano."],
          ["Más vale solo que mal acompañado.", "Dos cabezas piensan mejor que una."],
          ["Más vale prevenir que curar.", "Quien no se arriesga no cruza el río."],
        ],
        "Refranes contradictorios."
      ),
      toEs("Nothing ventured, nothing gained.", "Quien no se arriesga no cruza el río.", "Refrán equivalente.", ["Quien no arriesga no gana."]),
      wo("No por mucho madrugar amanece más temprano.", "Refrán de paciencia.", "Getting up early won't make the sun rise sooner."),
    ]
  ),
  L(
    "proverbs-sayings-2",
    "c2r-proverbs-quote-naturally",
    "Laboratorio de diálogo: citar un refrán con naturalidad",
    "«Como dice el refrán…», «ya sabes lo que dicen…», o solo la primera mitad: cómo insertar refranes sin sonar a libro.",
    "6 min",
    [
      sec(
        "Introductores y medias frases",
        "Introductores: «Como dice el refrán…», «Ya lo dice el refrán:…», «Ya sabes lo que dicen:…», «Como decía mi abuela:…». Truncamiento: basta con la primera mitad («Bueno, a caballo regalado…») porque el oyente la completa. Uso irónico: «Dime con quién andas…» dicho con retintín.",
        [
          ["—He aprobado sin estudiar. —Bueno, a quien madruga…", "—I passed without studying. —Well, the early bird…"],
          ["Ya lo dice el refrán: más vale tarde que nunca.", "As the saying goes: better late than never."],
        ],
        [
          mc(
            "¿Qué inserción suena más natural en una conversación?",
            ["Ya sabes lo que dicen: ojos que no ven…", "Procedo a citar el siguiente refrán tradicional:", "Refrán número tres:", "Según el diccionario de refranes…"],
            0,
            "Introductor coloquial + truncamiento."
          ),
        ]
      ),
    ],
    [
      fb("Completa el introductor.", "Como ___ el refrán, no hay mal que por bien no venga.", "dice", "Como dice el refrán."),
      fb("Completa el refrán.", "Cuando el río suena, agua ___.", "lleva", "Si se rumorea algo, algo de verdad habrá."),
      mc(
        "«—Mi vecino amenaza con demandarme cada semana. —Tranquilo: ___»",
        ["perro ladrador…", "a quien madruga…", "más vale prevenir…", "en casa de herrero…"],
        0,
        "Quien amenaza mucho no actúa."
      ),
      mc(
        "«—Perdí el tren y conocí a mi pareja en la estación. —¡___!»",
        ["No hay mal que por bien no venga", "Más vale prevenir que curar", "Perro ladrador, poco mordedor", "Zapatero, a tus zapatos"],
        0,
        "Algo malo trajo algo bueno."
      ),
      mc(
        "¿Por qué los hablantes a menudo dicen solo la mitad del refrán?",
        ["Porque el oyente la completa mentalmente.", "Porque la segunda parte es vulgar.", "Porque no la saben.", "Porque es obligatorio."],
        0,
        "Conocimiento compartido."
      ),
      toEs("Actions speak louder than words.", "Obras son amores, que no buenas razones.", "Refrán equivalente.", ["Obras son amores y no buenas razones."]),
      wo("Ya lo decía mi abuela: el que la sigue la consigue.", "Introductor + refrán.", "As my grandmother used to say: if at first you don't succeed, try again."),
    ]
  ),
  L(
    "proverbs-sayings-3",
    "c2r-proverbs-mission-advice",
    "Misión real: aconsejar con refranes",
    "Tres amigos te piden consejo: responde a cada uno con el refrán adecuado y una explicación propia.",
    "7 min",
    [
      sec(
        "Casos",
        "Marta quiere opinar sobre fontanería aunque es pintora (Zapatero, a tus zapatos). Luis siempre deja todo para el final (No dejes para mañana lo que puedas hacer hoy). Sara duda de aceptar un regalo algo feo (A caballo regalado no le mires el diente). Carlos presume de amigos poco recomendables (Dime con quién andas y te diré quién eres).",
        [
          ["Zapatero, a tus zapatos.", "Stick to what you know."],
          ["No dejes para mañana lo que puedas hacer hoy.", "Don't put off till tomorrow what you can do today."],
        ],
        [
          mc(
            "Para Luis, el procrastinador:",
            ["No dejes para mañana lo que puedas hacer hoy.", "Zapatero, a tus zapatos.", "A caballo regalado no le mires el diente.", "Más vale solo que mal acompañado."],
            0,
            "Contra la procrastinación."
          ),
        ]
      ),
    ],
    [
      fb("Completa el consejo a Marta.", "Zapatero, a tus ___.", "zapatos", "Cada uno a lo suyo."),
      fb("Completa (subjuntivo).", "No dejes para mañana lo que ___ hacer hoy. (poder, tú)", "puedas", "Relativo con valor hipotético."),
      mc(
        "¿Qué refrán le conviene a Carlos?",
        ["Dime con quién andas y te diré quién eres.", "Más vale tarde que nunca.", "Perro ladrador, poco mordedor.", "No hay mal que por bien no venga."],
        0,
        "Las compañías revelan quién eres."
      ),
      mc(
        "Explicación adecuada de «A caballo regalado no le mires el diente»:",
        ["Si te regalan algo, no le busques defectos.", "No aceptes regalos de desconocidos.", "Revisa bien lo que compras.", "Los caballos son caros."],
        0,
        "Agradecer sin criticar."
      ),
      ms(
        "¿Qué refranes aconsejan prudencia o reflexión?",
        ["Más vale prevenir que curar.", "Antes de que te cases, mira lo que haces.", "Quien no se arriesga no cruza el río.", "Del dicho al hecho hay mucho trecho."],
        [0, 1, 3],
        "«Quien no se arriesga…» anima a la audacia."
      ),
      toEs("Don't put off until tomorrow what you can do today.", "No dejes para mañana lo que puedas hacer hoy.", "Refrán equivalente.", []),
      wo("Del dicho al hecho hay mucho trecho.", "Refrán sobre promesas.", "Easier said than done."),
    ]
  ),
  L(
    "humor-wordplay-1",
    "c2r-humor-double-meaning",
    "Detective de textos: el doble sentido",
    "Chistes y titulares que juegan con la ambigüedad: identifica las dos lecturas que producen la gracia.",
    "7 min",
    [
      sec(
        "Dos lecturas a la vez",
        "Polisemia: una palabra con dos sentidos («—¿Qué le dice una iguana a su hermana gemela? —Somos iguanitas» → iguanas + igualitas). Homonimia y homofonía: «vaca / baca», «hola / ola». Dilogía en titulares: «El alcalde se queda sin banco» (entidad financiera / asiento). La gracia nace de activar ambas lecturas.",
        [
          ["—Papá, ¿qué se siente tener un hijo tan guapo? —No sé, pregúntale a tu abuelo.", "—Dad, how does it feel to have such a handsome son? —I don't know, ask your grandfather."],
        ],
        [
          mc(
            "«Iguanitas» mezcla…",
            ["iguanas e igualitas", "iguanas y ranitas", "igual y hermana", "agua y ranas"],
            0,
            "Juego fónico."
          ),
        ]
      ),
    ],
    [
      mc(
        "«El ministro de Pesca, en el ojo del huracán tras la subida del pescado.» ¿Dónde está el juego?",
        ["No hay juego: es una metáfora periodística habitual.", "En «pesca»: deporte y ministerio.", "En «huracán»: viento y equipo.", "En «subida»: escalera y precio."],
        0,
        "No todo titular metafórico es humorístico."
      ),
      mc(
        "«—¿Por qué el libro de matemáticas está triste? —Porque tiene muchos problemas.» El juego está en…",
        ["«problemas»: ejercicios y preocupaciones", "«libro»: objeto y persona", "«triste»: color y ánimo", "«matemáticas»: ciencia y deporte"],
        0,
        "Polisemia de problema."
      ),
      mc(
        "«—Camarero, hay una mosca en mi sopa. —Tranquilo, no se la va a comer toda.» El humor es…",
        ["absurdo: inversión de la lógica esperada", "de doble sentido léxico", "irónico por antífrasis", "un refrán"],
        0,
        "Respuesta que invierte la preocupación."
      ),
      fb("Completa el juego.", "Hola / ___: una se dice, la otra moja. (homófonos)", "ola", "Homofonía."),
      ms(
        "¿Qué mecanismos producen doble sentido?",
        ["polisemia", "homofonía", "dilogía", "sinónimos exactos"],
        [0, 1, 2],
        "Los sinónimos no crean ambigüedad."
      ),
      toEn("Tiene muchos problemas, como mi libro de matemáticas.", "He has a lot of problems, like my math book.", "Traducción que conserva el juego.", ["He's got a lot of problems, like my maths book."]),
      wo("La gracia del chiste está en que la palabra tiene dos sentidos.", "Explicación del mecanismo.", "The joke works because the word has two meanings."),
    ]
  ),
  L(
    "humor-wordplay-2",
    "c2r-humor-irony-contrast",
    "Contraste: ironía, sarcasmo y humor absurdo",
    "«¡Qué día más espléndido!» bajo la lluvia: aprende a distinguir la ironía amable, el sarcasmo hiriente y el absurdo.",
    "7 min",
    [
      sec(
        "Tres registros del humor",
        "Ironía (antífrasis): decir lo contrario de lo que se piensa, con complicidad («¡Qué puntual!» a quien llega tarde). Sarcasmo: ironía con intención de herir («Brillante idea, como todas las tuyas»). Absurdo: romper la lógica con total seriedad. Marcadores de ironía en español: «¡Qué bien!», «Menudo…», «Vaya…», «Para …, …»",
        [
          ["¡Menudo día de playa! (bajo una tormenta)", "What a beach day! (in a storm)"],
          ["Genial, otra reunión de tres horas.", "Great, another three-hour meeting."],
        ],
        [
          mc(
            "«¡Vaya, qué madrugador!» dicho a alguien que se levanta a mediodía es…",
            ["ironía", "un elogio sincero", "humor absurdo", "un refrán"],
            0,
            "Antífrasis."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Tu presentación ha sido tan brillante como todas tus ideas: ninguna.» Es…",
        ["sarcasmo", "ironía amable", "humor absurdo", "un eufemismo"],
        0,
        "Intención de herir."
      ),
      mc(
        "«Mi perro es tan listo que me corrige la declaración de la renta.» Es…",
        ["hipérbole con tono absurdo", "sarcasmo", "eufemismo", "un dato"],
        0,
        "Exageración disparatada."
      ),
      fb("Completa (ironía con menudo).", "¡___ suerte la mía! Otra vez me ha tocado guardia en Navidad.", "Menuda", "Menudo/a + sustantivo: ironía o énfasis."),
      fb("Completa (ironía).", "¡Qué ___! Has llegado solo una hora tarde. (que llega a la hora)", "puntual", "Antífrasis."),
      ms(
        "¿Qué pistas ayudan a detectar la ironía?",
        ["contradicción con la situación", "entonación marcada", "exclamaciones como «¡Qué bien!»", "la presencia de subjuntivo"],
        [0, 1, 2],
        "El modo verbal no indica ironía."
      ),
      toEs("Great, just what I needed: another bill.", "Genial, justo lo que necesitaba: otra factura.", "Ironía.", ["Estupendo, justo lo que me faltaba: otra factura.", "Genial, lo que me faltaba: otra factura."]),
      wo("¡Menudo favor me has hecho contándoselo a todos!", "Ironía con menudo.", "Some favor you did me telling everyone!"),
    ]
  ),
  L(
    "humor-wordplay-2",
    "c2r-humor-regional-styles",
    "Red de palabras: el humor según el país",
    "Retranca gallega, choteo cubano, humor seco castellano, albur mexicano: reconoce los estilos cómicos del mundo hispano.",
    "7 min",
    [
      sec(
        "Estilos con nombre propio",
        "Retranca (Galicia): ironía socarrona y ambigua, nunca se sabe si hablan en serio. Choteo (Cuba): burla desenfadada de todo, incluso de lo solemne. Albur (México): juego de doble sentido, a menudo picante, como duelo verbal. Humor seco o socarrón (Castilla): serio en apariencia. Tomadura de pelo: broma para engañar a alguien.",
        [
          ["—¿Va a llover? —Depende. (retranca)", "—Is it going to rain? —It depends."],
        ],
        [
          mc(
            "La respuesta «Depende» a cualquier pregunta es el tópico de…",
            ["la retranca gallega", "el albur mexicano", "el choteo cubano", "el humor británico"],
            0,
            "Ambigüedad socarrona."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el estilo con su origen.",
        [
          ["retranca", "Galicia"],
          ["albur", "México"],
          ["choteo", "Cuba"],
        ],
        "Estilos humorísticos."
      ),
      mc(
        "El albur se basa sobre todo en…",
        ["el doble sentido, a menudo picante", "la exageración", "la seriedad absoluta", "los refranes"],
        0,
        "Duelo de dobles sentidos."
      ),
      mc(
        "«Tomarle el pelo a alguien» es…",
        ["gastarle una broma haciéndole creer algo falso", "cortarle el pelo", "darle un consejo", "felicitarle"],
        0,
        "Burla amistosa."
      ),
      fb("Completa.", "Nunca sé si habla en serio: tiene mucha ___. (ironía gallega)", "retranca", "Retranca."),
      fb("Completa.", "Se lo dijo con una sonrisa ___, medio en broma medio en serio. (irónica y astuta)", "socarrona", "Socarrón/a."),
      toEs("Are you pulling my leg?", "¿Me estás tomando el pelo?", "Tomar el pelo.", ["¿Me tomas el pelo?"]),
      wo("En Cuba el choteo convierte en broma hasta lo más solemne.", "Choteo.", "In Cuba, choteo turns even the most solemn things into a joke."),
    ]
  ),
  L(
    "humor-wordplay-3",
    "c2r-humor-dialogue-lab",
    "Laboratorio de diálogo: responder a una broma",
    "Seguir la broma, devolverla, ponerse serio o no pillarla: practica las respuestas pragmáticas al humor.",
    "7 min",
    [
      sec(
        "Respuestas posibles",
        "Seguir la broma: «Sí, y yo soy la reina de Inglaterra». Devolverla: «Mira quién habla». Confesar que no la pillas: «Perdona, no la he pillado». Reírse: «¡Qué bueno!», «Me parto». Cortar: «Ya, muy gracioso, pero hablemos en serio». Suavizar tras una broma pesada: «Era broma, hombre».",
        [
          ["Mira quién habla.", "Look who's talking."],
          ["Perdona, no la he pillado.", "Sorry, I didn't get it."],
        ],
        [
          mc(
            "«—Tú cocinas fatal. —___» (devolver la broma a quien también cocina mal)",
            ["Mira quién habla.", "Me parto.", "No la he pillado.", "Era broma, hombre."],
            0,
            "Devolver la crítica."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—Mañana llego a las seis de la mañana, puntualísimo. —___» (incredulidad burlona)",
        ["Sí, y yo soy astronauta.", "Mira quién habla.", "Era broma, hombre.", "No es para tanto."],
        0,
        "Seguir la broma con ironía."
      ),
      mc(
        "Alguien se ofende por una broma tuya. Respondes:",
        ["Perdona, era broma, no quería molestarte.", "Me parto de risa.", "Sí, y yo soy la reina.", "Mira quién habla."],
        0,
        "Reparar la relación."
      ),
      fb("Completa.", "¡Qué bueno! Me ___ de risa. (partir)", "parto", "Partirse de risa."),
      fb("Completa.", "Perdona, no la he ___. (entender la broma, coloquial)", "pillado", "Pillar = entender."),
      mc(
        "«Ya, muy gracioso, pero ahora hablemos en serio» sirve para…",
        ["cortar la broma y volver al tema", "reírse mucho", "hacer otra broma", "pedir perdón"],
        0,
        "Reconducir la conversación."
      ),
      toEs("I'm cracking up!", "¡Me parto!", "Expresión coloquial de risa.", ["¡Me parto de risa!", "¡Me muero de risa!", "¡Me troncho!"]),
      wo("No te lo tomes a mal, solo era una broma.", "Suavizar.", "Don't take it the wrong way, it was just a joke."),
    ]
  ),
  L(
    "figurative-language-1",
    "c2r-figurative-metaphor-simile",
    "Transformaciones: del símil a la metáfora",
    "«Sus ojos son como dos luceros» → «Sus ojos son dos luceros» → «Los luceros de su cara»: intensifica la figura paso a paso.",
    "7 min",
    [
      sec(
        "De la comparación a la identificación",
        "Símil: nexo comparativo (como, cual, parecido a): «Tu risa es como una fuente». Metáfora: identidad directa («Tu risa es una fuente»). Metáfora pura (sin término real): «La fuente de tu cara» por la risa. Cuanto menos explícito el vínculo, más intensidad y más esfuerzo interpretativo.",
        [
          ["Su voz era como terciopelo. → Su voz era terciopelo.", "Her voice was like velvet. → Her voice was velvet."],
          ["Nuestras vidas son los ríos que van a dar en la mar. (Jorge Manrique)", "Our lives are the rivers that flow into the sea."],
        ],
        [
          mc(
            "«El tiempo es oro» es…",
            ["una metáfora", "un símil", "una hipérbole", "una personificación"],
            0,
            "Identificación sin nexo."
          ),
        ]
      ),
    ],
    [
      fb("Transforma en metáfora.", "Su mirada era como un cuchillo. → Su mirada ___ un cuchillo.", "era", "Se elimina el nexo."),
      fb("Transforma en símil.", "La ciudad es un hormiguero. → La ciudad es ___ un hormiguero.", "como", "Se añade el nexo."),
      mc(
        "«Las perlas de su boca» (por los dientes) es…",
        ["una metáfora pura", "un símil", "una comparación literal", "una metonimia"],
        0,
        "Solo aparece el término imaginario."
      ),
      mc(
        "¿Cuál es un símil?",
        ["Duerme como un tronco.", "Es un tronco.", "El tronco de la conversación.", "Troncos de silencio."],
        0,
        "Nexo «como»."
      ),
      ms(
        "¿Qué frases contienen metáfora?",
        ["Mi jefe es un ogro.", "La vida es sueño.", "Corre como el viento.", "Este mes voy a la playa."],
        [0, 1],
        "«Como el viento» es símil."
      ),
      toEs("His words were a slap in the face.", "Sus palabras fueron una bofetada.", "Metáfora.", ["Sus palabras fueron una bofetada en la cara.", "Sus palabras fueron como una bofetada."]),
      wo("La noticia cayó como un jarro de agua fría.", "Símil lexicalizado.", "The news came as a bucket of cold water."),
    ]
  ),
  L(
    "figurative-language-2",
    "c2r-figurative-metonymy-synecdoche",
    "Contraste: metonimia y sinécdoque",
    "«Tomarse un Rioja», «leer a Cervantes», «cien cabezas de ganado»: nombrar algo por lo que está junto a ello o por una parte.",
    "7 min",
    [
      sec(
        "Contigüidad frente a inclusión",
        "Metonimia (relación de contigüidad): autor por obra («Leí a Borges»), lugar por producto («un Rioja»), continente por contenido («tomarse un vaso»), lugar por institución («La Moncloa anunció…»). Sinécdoque (parte-todo): «cien cabezas de ganado», «tiene cuatro bocas que alimentar», «los mortales» por los humanos.",
        [
          ["La Casa Blanca ha respondido.", "The White House has responded."],
          ["Hay cuatro bocas que alimentar.", "There are four mouths to feed."],
        ],
        [
          mc(
            "«Me tomé dos copas» (por el vino que contienen) es…",
            ["metonimia continente por contenido", "sinécdoque parte-todo", "metáfora", "hipérbole"],
            0,
            "Continente por contenido."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Escuchamos a Mozart toda la tarde.»",
        ["metonimia autor por obra", "sinécdoque", "símil", "personificación"],
        0,
        "Autor por obra."
      ),
      mc(
        "«La empresa contrató a diez nuevos brazos para la cosecha.»",
        ["sinécdoque parte por todo", "metonimia lugar por producto", "metáfora pura", "ironía"],
        0,
        "Brazos = trabajadores."
      ),
      mc(
        "«Bruselas impone nuevas normas.»",
        ["metonimia lugar por institución", "sinécdoque", "hipérbole", "eufemismo"],
        0,
        "Bruselas = la Unión Europea."
      ),
      fb("Completa (lugar por producto).", "Pidió un ___ de Jerez para el aperitivo. (vino típico de Jerez)", "fino", "Tipo de vino de Jerez."),
      mt(
        "Relaciona cada expresión con su referente real.",
        [
          ["la Moncloa", "el Gobierno de España"],
          ["un Picasso", "un cuadro de Picasso"],
          ["cien cabezas", "cien animales"],
        ],
        "Metonimia y sinécdoque."
      ),
      toEs("Washington has not responded yet.", "Washington todavía no ha respondido.", "Metonimia.", ["Washington aún no ha respondido.", "Washington no ha respondido todavía."]),
      wo("En el museo había un Goya que nadie había visto antes.", "Autor por obra.", "In the museum there was a Goya nobody had seen before."),
    ]
  ),
  L(
    "figurative-language-2",
    "c2r-figurative-hyperbole-personification",
    "Taller de estilo: hipérbole y personificación",
    "Exagera y da vida a lo inanimado: reescribe descripciones planas con figuras expresivas.",
    "7 min",
    [
      sec(
        "Dos recursos de intensidad",
        "Hipérbole: exageración evidente, no se toma literalmente («Te lo he dicho mil veces», «Me muero de hambre»). Personificación (prosopopeya): atribuir cualidades humanas a lo inanimado («El viento susurraba», «La ciudad dormía»). En la escritura creativa, dosificarlas evita el efecto recargado.",
        [
          ["La casa lloraba por todas sus grietas.", "The house wept through all its cracks."],
          ["Hace un siglo que no te veo.", "I haven't seen you in ages."],
        ],
        [
          mc(
            "«El reloj nos miraba impaciente desde la pared.»",
            ["personificación", "hipérbole", "sinécdoque", "símil"],
            0,
            "Rasgos humanos a un objeto."
          ),
        ]
      ),
    ],
    [
      fb("Hipérbole.", "Había ___ de gente en el concierto. (exageración coloquial con «mar»)", "un mar", "Un mar de gente."),
      fb("Personificación.", "La luna ___ sobre los tejados dormidos. (vigilar, imperfecto)", "vigilaba", "Verbo humano para la luna."),
      mc(
        "Reescritura expresiva de «Hacía mucho calor»:",
        ["El sol mordía la piel de los transeúntes.", "Hacía bastante calor.", "La temperatura era alta.", "Había calor."],
        0,
        "Personificación del sol."
      ),
      mc(
        "¿Qué frase NO contiene hipérbole?",
        ["Tardó veinte minutos en llegar.", "Estoy muerto de cansancio.", "Tengo un millón de cosas que hacer.", "Te he llamado cien veces."],
        0,
        "Dato literal."
      ),
      ms(
        "¿Cuáles son personificaciones?",
        ["El mar rugía.", "Las hojas bailaban con el viento.", "Llovía mucho.", "La ciudad se despertaba lentamente."],
        [0, 1, 3],
        "«Llovía mucho» es literal."
      ),
      toEs("I've told you a thousand times.", "Te lo he dicho mil veces.", "Hipérbole.", ["Te lo he dicho mil veces ya.", "Te lo he repetido mil veces."]),
      wo("El viejo tren protestaba en cada curva del camino.", "Personificación.", "The old train complained at every bend."),
    ]
  ),
  L(
    "figurative-language-3",
    "c2r-figurative-spiral-literature",
    "Repaso en espiral: figuras en textos literarios",
    "Identifica varias figuras en versos y fragmentos clásicos y comenta su efecto con vocabulario crítico.",
    "8 min",
    [
      sec(
        "Comentar el efecto",
        "No basta con nombrar la figura: hay que explicar su efecto. Vocabulario útil: «La metáfora sugiere…», «La personificación dota de vida a…», «La hipérbole enfatiza…», «La antítesis contrapone…». Antítesis: oposición de ideas («Es hielo abrasador, es fuego helado», Quevedo). Oxímoron: contradicción en una misma expresión («fuego helado»).",
        [
          ["Es hielo abrasador, es fuego helado. (Quevedo)", "It is burning ice, it is frozen fire."],
          ["Volverán las oscuras golondrinas… (Bécquer)", "The dark swallows will return…"],
        ],
        [
          mc(
            "«Fuego helado» es…",
            ["un oxímoron", "una sinécdoque", "un símil", "una metonimia"],
            0,
            "Contradicción en la misma expresión."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Nuestras vidas son los ríos / que van a dar en la mar, / que es el morir» (Manrique). La metáfora sugiere que…",
        ["la vida fluye inevitablemente hacia la muerte", "los ríos son peligrosos", "el mar es la vida", "hay que viajar"],
        0,
        "Ríos = vidas; mar = muerte."
      ),
      mc(
        "«Yo soy un hombre sincero / de donde crece la palma» (Martí). «Donde crece la palma» alude a…",
        ["Cuba (metonimia/perífrasis)", "un desierto", "una iglesia", "el mar"],
        0,
        "Perífrasis por la patria."
      ),
      fb("Completa el comentario.", "La antítesis ___ dos ideas opuestas: amor y dolor. (contraponer)", "contrapone", "Verbo crítico."),
      fb("Completa el comentario.", "La hipérbole ___ la intensidad del sufrimiento. (subrayar)", "subraya", "Verbo crítico."),
      mt(
        "Relaciona la figura con su efecto típico.",
        [
          ["hipérbole", "intensificar"],
          ["antítesis", "contrastar"],
          ["personificación", "dar vida a lo inerte"],
        ],
        "Figuras y efectos."
      ),
      toEs("The metaphor suggests that life is a journey.", "La metáfora sugiere que la vida es un viaje.", "Comentario crítico.", ["La metáfora sugiere que la vida es un camino."]),
      wo("El poeta dota de vida al paisaje mediante la personificación.", "Comentario crítico.", "The poet brings the landscape to life through personification."),
    ]
  ),
  L(
    "euphemisms-indirect-1",
    "c2r-euphemism-decode",
    "Detective de textos: descifrar el eufemismo",
    "«Nos ha dejado», «persona de edad avanzada», «reajuste de plantilla»: traduce el eufemismo a lo que realmente dice.",
    "7 min",
    [
      sec(
        "Tres ámbitos del eufemismo",
        "Muerte: fallecer, dejarnos, irse, pasar a mejor vida, descansar en paz. Edad y cuerpo: persona mayor / de edad avanzada / de la tercera edad; entrado en carnes; con sobrepeso. Dinero y economía: desaceleración (crisis), crecimiento negativo (caída), ajuste de precios (subida), personas en situación de vulnerabilidad económica (pobres).",
        [
          ["Nuestro compañero nos dejó el pasado martes.", "Our colleague passed away last Tuesday."],
          ["La economía registra un crecimiento negativo.", "The economy is shrinking."],
        ],
        [
          mc(
            "«Crecimiento negativo» significa…",
            ["decrecimiento, caída", "crecimiento lento", "crecimiento pesimista", "estabilidad"],
            0,
            "Eufemismo económico."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el eufemismo con lo que oculta.",
        [
          ["pasar a mejor vida", "morir"],
          ["ajuste de precios", "subida de precios"],
          ["entrado en carnes", "gordo"],
          ["persona de edad avanzada", "anciano"],
        ],
        "Eufemismos cotidianos."
      ),
      fb("Traduce al lenguaje directo.", "Su padre falleció ayer. → Su padre ___ ayer.", "murió", "Fallecer = morir."),
      fb("Eufemiza.", "Es pobre. → Está en situación de ___ económica.", "vulnerabilidad", "Eufemismo institucional."),
      mc(
        "«Desaceleración económica» suele ocultar…",
        ["una crisis o recesión incipiente", "un crecimiento rápido", "una mejora", "una subida de salarios"],
        0,
        "Eufemismo económico."
      ),
      ms(
        "¿Qué expresiones son eufemismos de «morir»?",
        ["descansar en paz", "irse", "dejarnos", "despertar"],
        [0, 1, 2],
        "Despertar no."
      ),
      toEs("Her grandmother passed away last year.", "Su abuela falleció el año pasado.", "Eufemismo formal.", ["Su abuela nos dejó el año pasado.", "Su abuela murió el año pasado."]),
      wo("La empresa atraviesa un periodo de desaceleración.", "Eufemismo económico.", "The company is going through a slowdown."),
    ]
  ),
  L(
    "euphemisms-indirect-2",
    "c2r-euphemism-corporate-rewrite",
    "Taller de estilo: el comunicado corporativo",
    "Reescribe un anuncio de despidos en lenguaje corporativo… y luego descódificalo para los trabajadores.",
    "8 min",
    [
      sec(
        "El diccionario corporativo",
        "Despido masivo → expediente de regulación de empleo (ERE), reestructuración, ajuste de plantilla, optimización de recursos. Despedir → prescindir de los servicios de, desvincular. Recortar salarios → moderación salarial. Cerrar una planta → reorganizar la capacidad productiva. El eufemismo protege la imagen de la empresa, pero puede percibirse como opaco o cínico.",
        [
          ["La empresa ha decidido prescindir de sus servicios.", "The company has decided to let you go."],
          ["Se llevará a cabo un ajuste de plantilla.", "There will be layoffs."],
        ],
        [
          mc(
            "«Prescindir de los servicios de alguien» significa…",
            ["despedirlo", "ascenderlo", "contratarlo", "trasladarlo"],
            0,
            "Eufemismo laboral."
          ),
        ]
      ),
    ],
    [
      fb("Eufemiza.", "Vamos a despedir a 200 personas. → Vamos a llevar a cabo un ___ de plantilla.", "ajuste", "Ajuste de plantilla."),
      fb("Eufemiza.", "Bajaremos los sueldos. → Aplicaremos una ___ salarial.", "moderación", "Moderación salarial."),
      fb("Descodifica.", "Optimización de recursos humanos. → ___ de trabajadores.", "Despido", "Lectura directa."),
      mc(
        "¿Qué versión es la más transparente para los empleados?",
        ["Lamentablemente, 200 personas perderán su empleo en marzo.", "Se procederá a una optimización de la estructura.", "Se reorganizará la capacidad productiva.", "Habrá una reestructuración de recursos."],
        0,
        "Directa pero respetuosa."
      ),
      ms(
        "¿Qué expresiones son eufemismos de despedir?",
        ["desvincular", "prescindir de los servicios", "ajustar la plantilla", "contratar"],
        [0, 1, 2],
        "Contratar es lo contrario."
      ),
      toEs("The company has announced a restructuring.", "La empresa ha anunciado una reestructuración.", "Eufemismo corporativo.", ["La compañía ha anunciado una reestructuración.", "La empresa anunció una reestructuración."]),
      wo("La dirección ha decidido reorganizar la capacidad productiva de la planta.", "Eufemismo de cierre.", "Management has decided to reorganize the plant's production capacity."),
    ]
  ),
  L(
    "euphemisms-indirect-2",
    "c2r-indirect-requests-implicature",
    "Contraste: lo que se dice y lo que se quiere decir",
    "«Hace un poco de frío aquí, ¿no?» = cierra la ventana. Aprende a leer (y producir) peticiones y rechazos indirectos.",
    "7 min",
    [
      sec(
        "La implicatura",
        "Petición indirecta: «¿No tendrás un bolígrafo?» (= préstame uno). Rechazo indirecto: «Ya veremos», «Me lo pienso», «Es complicado» (= probablemente no). Crítica indirecta: «Interesante propuesta…» (con entonación dubitativa = no me convence). La interpretación depende del contexto y de la entonación.",
        [
          ["—¿Vienes el sábado? —Uf, ya veremos.", "—Are you coming Saturday? —Ugh, we'll see."],
          ["¿No tendrás un cargador por ahí?", "You wouldn't have a charger, would you?"],
        ],
        [
          mc(
            "«—¿Me ayudas con la mudanza? —Es que este finde lo tengo complicado.» Significa…",
            ["probablemente no", "sí, con gusto", "quizá el domingo seguro", "no entiende la pregunta"],
            0,
            "Rechazo indirecto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Uy, qué tarde se ha hecho…» dicho por el anfitrión a medianoche significa…",
        ["que los invitados deberían irse", "que quiere más café", "que el reloj va mal", "que está muy contento"],
        0,
        "Invitación indirecta a marcharse."
      ),
      mc(
        "«Tu informe es… interesante.» (con pausa) probablemente significa…",
        ["que no le ha convencido", "que le ha encantado", "que no lo ha leído", "que es perfecto"],
        0,
        "Crítica indirecta."
      ),
      fb("Petición indirecta.", "¿No ___ un paraguas de sobra? (tener, tú, futuro de cortesía)", "tendrás", "Futuro en pregunta negativa = petición suave."),
      fb("Rechazo indirecto.", "—¿Te apuntas? —Me lo ___ y te digo. (pensar)", "pienso", "Pensárselo = aplazar/rechazar suavemente."),
      ms(
        "¿Qué respuestas suelen ser rechazos indirectos?",
        ["Ya veremos.", "Es complicado.", "Me lo pienso.", "¡Claro que sí!"],
        [0, 1, 2],
        "«¡Claro que sí!» es aceptación."
      ),
      toEs("You wouldn't have a pen, would you?", "¿No tendrás un bolígrafo?", "Petición indirecta.", ["¿No tendrás un boli?", "¿No tendrías un bolígrafo?"]),
      wo("Hace un poco de frío aquí dentro, ¿no crees?", "Petición indirecta de cerrar la ventana.", "It's a bit cold in here, don't you think?"),
    ]
  ),
  L(
    "euphemisms-indirect-3",
    "c2r-euphemism-mission-condolences",
    "Misión real: dar el pésame y comunicar lo delicado",
    "Escribe un mensaje de condolencias y una nota a un empleado sobre su rendimiento: tacto sin ambigüedad.",
    "8 min",
    [
      sec(
        "Fórmulas de tacto",
        "Pésame: «Te acompaño en el sentimiento», «Siento mucho tu pérdida», «Mi más sentido pésame», «Aquí me tienes para lo que necesites». Crítica profesional: «Hay aspectos que convendría mejorar», «Me gustaría que revisáramos juntos…», «Sé que puedes dar más». Evita el eufemismo que oculta el mensaje: tacto no es vaguedad.",
        [
          ["Mi más sentido pésame por la pérdida de tu madre.", "My deepest condolences on the loss of your mother."],
          ["Hay algunos aspectos que convendría mejorar.", "There are some aspects that would be worth improving."],
        ],
        [
          mc(
            "Fórmula formal de pésame:",
            ["Mi más sentido pésame.", "Qué palo, tío.", "Bueno, así es la vida.", "Ánimo, que no es para tanto."],
            0,
            "Fórmula consolidada."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Te acompaño en el ___.", "sentimiento", "Fórmula de pésame."),
      fb("Completa.", "Aquí me tienes para lo que ___. (necesitar, tú)", "necesites", "Relativo + subjuntivo."),
      fb("Completa.", "Me gustaría que ___ juntos tus objetivos. (revisar, nosotros)", "revisáramos", "Condicional + imperfecto de subjuntivo."),
      mc(
        "¿Qué crítica tiene tacto y es clara?",
        ["Los tres últimos informes llegaron tarde; me gustaría que habláramos de cómo evitarlo.", "Todo bien, sigue así.", "Eres un desastre.", "Hay cositas por ahí que, bueno, ya sabes."],
        0,
        "Hecho concreto + propuesta."
      ),
      mc(
        "¿Qué frase evitar en un pésame?",
        ["Al menos vivió muchos años.", "Siento mucho tu pérdida.", "Pienso en ti y en tu familia.", "Cuenta conmigo para lo que sea."],
        0,
        "Minimiza el dolor ajeno."
      ),
      toEs("I'm very sorry for your loss.", "Siento mucho tu pérdida.", "Fórmula de pésame.", ["Siento mucho su pérdida.", "Lamento mucho tu pérdida."]),
      wo("Pienso mucho en ti y en tu familia en estos momentos tan difíciles.", "Mensaje de apoyo.", "I'm thinking of you and your family at this very difficult time."),
    ]
  ),
  L(
    "exclamations-emphasis-1",
    "c2r-exclamations-sort-function",
    "Clasificación: exclamaciones por su función",
    "¡Ni hablar!, ¡No me digas!, ¡Y tanto!, ¡Qué le vamos a hacer!: agrupa las exclamaciones por lo que hacen en la conversación.",
    "7 min",
    [
      sec(
        "Cuatro familias",
        "Negar con fuerza: ¡Ni hablar!, ¡Ni loco!, ¡Ni de broma!, ¡Qué va!, ¡Ni en sueños! Sorpresa: ¡No me digas!, ¡Anda!, ¡Hala!, ¡Madre mía!, ¡No puede ser! Reforzar: ¡Y tanto!, ¡Ya lo creo!, ¡Claro que sí!, ¡Por supuesto! Resignación: ¡Qué le vamos a hacer!, ¡Vaya por Dios!, ¡Lo que faltaba!, ¡Paciencia!",
        [
          ["—¿Te presto dinero para la moto? —¡Ni loca!", "—Shall I lend you money for the motorbike? —No way!"],
          ["—¿Estás cansado? —¡Y tanto!", "—Are you tired? —You bet!"],
        ],
        [
          mc(
            "«—Se ha vuelto a estropear la lavadora. —¡___!» (fastidio)",
            ["Lo que faltaba", "Y tanto", "No me digas que sí", "Ni en sueños"],
            0,
            "Lo que faltaba = fastidio ante un nuevo problema."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la exclamación con su función.",
        [
          ["¡Ni de broma!", "negar con fuerza"],
          ["¡No me digas!", "sorpresa"],
          ["¡Ya lo creo!", "reforzar una afirmación"],
          ["¡Qué le vamos a hacer!", "resignación"],
        ],
        "Funciones de las exclamaciones."
      ),
      mc(
        "«—¿Vas a volver con tu ex? —¡___!»",
        ["Ni en sueños", "Y tanto", "Vaya por Dios", "Anda"],
        0,
        "Negación enfática."
      ),
      mc(
        "«—Me han dado el Erasmus en Roma. —¡___! ¡Enhorabuena!»",
        ["Anda", "Ni hablar", "Lo que faltaba", "Qué le vamos a hacer"],
        0,
        "Sorpresa positiva."
      ),
      fb("Completa.", "—¿Te gustó la película? —¡Ya lo ___! La vería otra vez.", "creo", "¡Ya lo creo! = refuerzo."),
      fb("Completa.", "Se ha cancelado el vuelo. Bueno, ¡qué le ___ a hacer!", "vamos", "Resignación."),
      toEs("—Are you coming? —You bet!", "—¿Vienes? —¡Y tanto!", "Refuerzo enfático.", ["—¿Vienes? —¡Ya lo creo!", "—¿Vienes? —¡Claro que sí!", "—¿Vienes? —¡Por supuesto!"]),
      wo("¡Vaya por Dios, otra vez se ha ido la luz!", "Resignación.", "Oh great, the power's gone out again!"),
    ]
  ),
  L(
    "exclamations-emphasis-1",
    "c2r-exclamations-intensity-scale",
    "Contraste: la escala de intensidad del «no»",
    "No / Qué va / Ni hablar / Ni muerto: gradúa la negativa según la situación y el interlocutor.",
    "6 min",
    [
      sec(
        "Del «no» neutro al «ni muerto»",
        "Neutro: No, gracias. Coloquial suave: Qué va / Para nada (también niega una suposición: «—¿Estás enfadado? —Qué va»). Enfático: Ni hablar / De ninguna manera / En absoluto. Muy enfático y coloquial: Ni loco / Ni muerto / Ni de coña (vulgar, España). Con usted o en el trabajo: De ninguna manera / En absoluto.",
        [
          ["—¿Te molesta que abra la ventana? —Para nada.", "—Do you mind if I open the window? —Not at all."],
          ["De ninguna manera vamos a aceptar esas condiciones.", "We will by no means accept those conditions."],
        ],
        [
          mc(
            "En una reunión de trabajo, rechazo firme y adecuado:",
            ["De ninguna manera.", "Ni de coña.", "Ni muerto.", "Qué va, tío."],
            0,
            "Enfático pero formal."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—¿Te he despertado? —___, ya estaba levantada.» (niega la suposición sin dramatismo)",
        ["Qué va", "Ni muerta", "De ninguna manera", "Lo que faltaba"],
        0,
        "Qué va = no (suave)."
      ),
      mc(
        "«—¿Le importa que me siente aquí? —___»",
        ["En absoluto, siéntese.", "Ni loco.", "Ni de broma.", "Ni hablar, tío."],
        0,
        "En absoluto = de ningún modo (no me importa)."
      ),
      fb("Completa.", "—¿Vas a hacer puenting? —¡Ni ___! Me dan pánico las alturas.", "loco", "Ni loco/a."),
      fb("Completa.", "De ninguna ___ pienso firmar ese documento.", "manera", "De ninguna manera."),
      mc(
        "Ordena de menos a más enfático: (a) Ni muerto (b) No (c) Ni hablar",
        ["b, c, a", "a, b, c", "c, a, b", "b, a, c"],
        0,
        "No < Ni hablar < Ni muerto."
      ),
      toEs("—Do you mind? —Not at all.", "—¿Te importa? —Para nada.", "Negación suave.", ["—¿Te importa? —En absoluto.", "—¿Le importa? —En absoluto.", "—¿Te molesta? —Para nada."]),
      wo("En absoluto, puede usted quedarse el tiempo que quiera.", "En absoluto formal.", "Not at all, you can stay as long as you like."),
    ]
  ),
  L(
    "exclamations-emphasis-2",
    "c2r-exclamations-dialogue-reactions",
    "Laboratorio de diálogo: reaccionar como un nativo",
    "Ocho noticias, ocho reacciones: elige la exclamación que un hablante nativo usaría en cada caso.",
    "7 min",
    [
      sec(
        "Reaccionar es participar",
        "En español, el oyente reacciona constantemente: sorpresa (¿En serio?, ¡No me digas!), empatía (¡Qué pena!, ¡Pobre!), alegría (¡Qué bien!, ¡Genial!), indignación (¡Qué fuerte!, ¡Qué morro!), resignación (Paciencia, Qué se le va a hacer). No reaccionar suena frío o desinteresado.",
        [
          ["—Me han robado la bici. —¡Qué rabia! ¿Dónde?", "—My bike got stolen. —That's so annoying! Where?"],
          ["—Se coló delante de todos. —¡Qué morro!", "—He cut in front of everyone. —What nerve!"],
        ],
        [
          mc(
            "«—Mi jefe se lleva el mérito de mi trabajo. —¡___!»",
            ["Qué morro tiene", "Qué bien", "Y tanto", "Ni en sueños"],
            0,
            "Morro = descaro."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—Mi abuelo está en el hospital. —___»",
        ["¡Vaya, lo siento! ¿Cómo está?", "¡Qué fuerte, jaja!", "¡Y tanto!", "¡Ni hablar!"],
        0,
        "Empatía."
      ),
      mc(
        "«—¡Nos casamos en junio! —___»",
        ["¡Qué alegría! ¡Enhorabuena!", "¡Qué rabia!", "¡Lo que faltaba!", "¡Qué le vamos a hacer!"],
        0,
        "Alegría."
      ),
      mc(
        "«—Han subido el alquiler un 30 %. —___»",
        ["¡Qué fuerte! ¡Es un abuso!", "¡Qué bien!", "¡Ya lo creo!", "¡Anda, qué suerte!"],
        0,
        "Indignación."
      ),
      fb("Completa.", "—He perdido el tren. —Bueno, ___ se le va a hacer.", "qué", "Resignación."),
      fb("Completa.", "—Me ha tocado la lotería. —¿En ___? ¡No me lo creo!", "serio", "¿En serio? = sorpresa."),
      toEs("What nerve!", "¡Qué morro!", "Indignación coloquial (España).", ["¡Qué cara!", "¡Qué cara más dura!", "¡Qué descaro!"]),
      wo("¡No me digas que has vuelto a perder las llaves!", "Sorpresa con reproche.", "Don't tell me you've lost your keys again!"),
    ]
  ),
  L(
    "diminutives-augmentatives-1",
    "c2r-diminutive-values",
    "Contraste: el diminutivo que no empequeñece",
    "Un cafecito, un momentito, un pisito, un trabajillo: cariño, cortesía, ironía o desprecio según el contexto.",
    "7 min",
    [
      sec(
        "Valores del sufijo",
        "Afectivo: «mi abuelita», «¿Quieres un cafecito?». Atenuador/cortés: «Espere un momentito», «¿Me hace un favorcito?». Minimizador: «un trabajillo», «un problemilla». Despectivo o irónico: «Vaya pisito se ha comprado» (puede ser admiración irónica), «el abogadillo ese». Intensivo en América: «ahorita» (ahora mismo o dentro de un rato, según el país), «cerquita».",
        [
          ["¿Me esperas un momentito?", "Can you wait just a moment?"],
          ["Tengo un problemilla con el ordenador.", "I've got a little problem with the computer."],
        ],
        [
          mc(
            "«Espere un momentito, por favor» tiene valor…",
            ["atenuador/cortés", "despectivo", "de tamaño", "aumentativo"],
            0,
            "Suaviza la petición."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada ejemplo con su valor.",
        [
          ["mi abuelita", "afecto"],
          ["un problemilla", "minimizar"],
          ["el abogadillo ese", "desprecio"],
          ["un favorcito", "cortesía"],
        ],
        "Valores del diminutivo."
      ),
      fb("Suaviza.", "¿Me haces un favor? → ¿Me haces un ___?", "favorcito", "Diminutivo cortés."),
      fb("Minimiza.", "Tengo una duda. → Tengo una ___. (con -illa)", "dudilla", "Minimizador."),
      mc(
        "«Se ha comprado un cochecito…» (dicho de un deportivo carísimo) es…",
        ["ironía", "tamaño real", "desprecio literal", "afecto infantil"],
        0,
        "Diminutivo irónico."
      ),
      mc(
        "En México, «ahorita» puede significar…",
        ["ahora mismo o dentro de un rato", "nunca", "ayer", "muy tarde"],
        0,
        "Ambigüedad temporal según contexto."
      ),
      toEs("Would you like a little coffee? (affectionate)", "¿Quieres un cafecito?", "Diminutivo afectivo.", ["¿Te apetece un cafecito?", "¿Quiere un cafecito?"]),
      wo("Tengo un trabajillo los sábados para sacarme un dinerillo.", "Diminutivos minimizadores.", "I have a little job on Saturdays to earn a bit of money."),
    ]
  ),
  L(
    "diminutives-augmentatives-2",
    "c2r-augmentatives-azo-on",
    "Red de palabras: -ón, -azo, -ote, -ísimo",
    "Un cochazo, un golpazo, un portazo, un grandullón, un librote: aumentativos de tamaño, admiración, golpe y desprecio.",
    "7 min",
    [
      sec(
        "Aumentativos con valores distintos",
        "-azo: tamaño o admiración (cochazo, casaza), golpe (portazo, codazo, frenazo, martillazo). -ón/-ona: tamaño (cajón lexicalizado), persona que hace algo mucho (mirón, llorón, preguntón, comilón). -ote: tamaño con matiz despectivo o afectuoso (librote, grandote). -ísimo: superlativo absoluto (carísimo, rapidísimo).",
        [
          ["Dio un portazo y se fue.", "He slammed the door and left."],
          ["¡Menudo cochazo se ha comprado!", "What a car he's bought!"],
        ],
        [
          mc(
            "«Un frenazo» es…",
            ["una frenada brusca", "un freno grande", "un freno roto", "una marca de frenos"],
            0,
            "-azo = golpe/acción brusca."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la palabra con su significado.",
        [
          ["codazo", "golpe con el codo"],
          ["mirón", "persona que mira con curiosidad"],
          ["comilón", "persona que come mucho"],
          ["grandote", "muy grande (afectivo)"],
        ],
        "Aumentativos."
      ),
      fb("Completa.", "Se enfadó y dio un ___. (golpe de puerta)", "portazo", "Puerta + -azo."),
      fb("Completa.", "Mi sobrino es un ___: pregunta por todo. (preguntar + -ón)", "preguntón", "Persona que pregunta mucho."),
      fb("Completa.", "Esta chaqueta es ___: cuesta 800 euros. (caro, superlativo)", "carísima", "Superlativo absoluto."),
      ms(
        "¿Qué palabras en -azo indican un golpe?",
        ["martillazo", "puñetazo", "cochazo", "balonazo"],
        [0, 1, 3],
        "Cochazo = coche impresionante."
      ),
      toEs("He slammed on the brakes.", "Dio un frenazo.", "-azo = acción brusca.", ["Pegó un frenazo.", "Dio un frenazo en seco."]),
      wo("El bebé es un comilón y un llorón, pero es un encanto.", "Sufijo -ón.", "The baby eats a lot and cries a lot, but he's a delight."),
    ]
  ),
  L(
    "diminutives-augmentatives-2",
    "c2r-diminutive-regional-lexicalized",
    "Detective de textos: diminutivos regionales y lexicalizados",
    "-ico en Costa Rica, -ín en Asturias, -ito en México… y palabras como bolsillo o mesilla que ya no son diminutivos.",
    "7 min",
    [
      sec(
        "Geografía y lexicalización",
        "Regionales: -ico (Aragón, Murcia, Costa Rica, Cuba: «chiquitico»), -ín (Asturias, León: «guapín»), -ete (Cataluña, Levante: «amiguete»), -ito (general, muy intenso en México y Andes: «ahoritita»). Lexicalizados: palabras que ya no se sienten diminutivas: bolsillo, ventanilla, cigarrillo, mesilla, pañuelo, panecillo, bocadillo, zapatilla.",
        [
          ["Pura vida, mae, está todo tranquilico. (Costa Rica)", "All good, man, everything's nice and calm."],
          ["¿Dónde dejé el cargador? En la mesilla.", "Where did I leave the charger? On the nightstand."],
        ],
        [
          mc(
            "Los costarricenses son llamados «ticos» por…",
            ["su uso frecuente del diminutivo -ico", "su capital", "un plato típico", "su bandera"],
            0,
            "Chiquitico, momentico…"
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué palabra está lexicalizada (ya no significa «pequeño»)?",
        ["ventanilla", "casita", "perrito", "mesita"],
        0,
        "Ventanilla = ventana de un vehículo o de atención al público."
      ),
      mc(
        "«Qué guapín vas hoy» suena típico de…",
        ["Asturias", "Argentina", "México", "Canarias"],
        0,
        "Sufijo -ín."
      ),
      fb("Completa (lexicalizado).", "Guarda el móvil en el ___ del pantalón.", "bolsillo", "Bolsillo (de bolso)."),
      fb("Completa (lexicalizado).", "Me he comprado unas ___ para correr.", "zapatillas", "Zapatilla ≠ zapato pequeño."),
      ms(
        "¿Qué palabras son diminutivos lexicalizados?",
        ["cigarrillo", "bocadillo", "pañuelo", "gatito"],
        [0, 1, 2],
        "Gatito sigue siendo diminutivo productivo."
      ),
      mc(
        "«Espérame un momentico» es típico de…",
        ["Colombia o Costa Rica", "Argentina", "España central", "Chile"],
        0,
        "-ico en el Caribe y Centroamérica."
      ),
      wo("Tengo un amiguete que te puede echar una mano.", "Sufijo -ete.", "I've got a mate who can give you a hand."),
    ]
  ),
  L(
    "business-idioms-1",
    "c2r-business-idioms-meeting",
    "Laboratorio de diálogo: modismos en la reunión",
    "Una reunión de dirección llena de modismos: comprende la conversación y participa con el modismo justo.",
    "7 min",
    [
      sec(
        "La reunión",
        "—Directora: Vamos al grano: el proyecto está en números rojos. —Director financiero: Propongo cortar por lo sano y cerrar la línea. —Jefa de producto: No tiremos la toalla todavía; pongamos las cartas sobre la mesa con el cliente. —Directora: De acuerdo. Si en un mes no hay mejora, apretaremos el cinturón.",
        [
          ["Estar en números rojos.", "To be in the red."],
          ["Cortar por lo sano.", "To take drastic action to stop a problem."],
        ],
        [
          mc(
            "«Vamos al grano» significa…",
            ["hablemos directamente de lo importante", "vamos al campo", "hagamos una pausa", "vamos a comer"],
            0,
            "Ir al grano."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el modismo con su significado.",
        [
          ["tirar la toalla", "rendirse"],
          ["apretarse el cinturón", "reducir gastos"],
          ["poner las cartas sobre la mesa", "ser transparente"],
          ["estar en números rojos", "tener pérdidas"],
        ],
        "Modismos de negocios."
      ),
      fb("Completa.", "El consejo dio ___ verde al proyecto. (aprobar)", "luz", "Dar luz verde."),
      fb("Completa.", "Si no funciona, cortaremos por lo ___.", "sano", "Cortar por lo sano."),
      mc(
        "¿Quién «tiene la sartén por el mango» en una negociación?",
        ["quien tiene el control", "quien cocina", "quien pierde", "quien llega tarde"],
        0,
        "Tener el control."
      ),
      mc(
        "«Nos hemos lanzado a la piscina con este mercado» significa…",
        ["nos hemos arriesgado", "hemos fracasado", "hemos ganado mucho", "hemos ido de vacaciones"],
        0,
        "Lanzarse a la piscina = arriesgarse."
      ),
      toEs("Let's get straight to the point.", "Vayamos al grano.", "Ir al grano.", ["Vamos al grano.", "Vayamos directamente al grano."]),
      wo("La junta ha dado luz verde a la ampliación del almacén.", "Dar luz verde.", "The board has given the green light to the warehouse expansion."),
    ]
  ),
  L(
    "business-idioms-2",
    "c2r-business-idioms-crisis-rewrite",
    "Taller de estilo: del modismo al informe",
    "Convierte comentarios de pasillo llenos de modismos en frases de informe ejecutivo (y viceversa).",
    "7 min",
    [
      sec(
        "Pasillo frente a informe",
        "«Hemos dado un giro de 180 grados» → «Se ha producido un cambio radical de estrategia». «Hay que hacer borrón y cuenta nueva» → «Conviene empezar de cero, dejando atrás los errores». «Nos ha salvado los muebles» → «Ha evitado pérdidas mayores». «Ese producto es la gallina de los huevos de oro» → «Es nuestra principal fuente de ingresos».",
        [
          ["Salvar los muebles.", "To save what can be saved."],
          ["Dar un giro de 180 grados.", "To do a U-turn."],
        ],
        [
          mc(
            "Versión de informe de «Estamos con el agua al cuello»:",
            ["La empresa atraviesa graves dificultades financieras.", "Estamos mojados.", "Nos ahogamos, jefe.", "Tenemos problemas de fontanería."],
            0,
            "Registro ejecutivo."
          ),
        ]
      ),
    ],
    [
      fb("Al informe.", "Hicimos borrón y cuenta ___. → Empezamos de cero.", "nueva", "Hacer borrón y cuenta nueva."),
      fb("Al informe.", "La campaña salvó los ___. → Evitó pérdidas mayores.", "muebles", "Salvar los muebles."),
      fb("Al pasillo.", "Es nuestra principal fuente de ingresos. → Es la gallina de los huevos de ___.", "oro", "Modismo."),
      mc(
        "«Sacar las castañas del fuego a alguien» significa…",
        ["resolverle un problema que no es tuyo", "cocinar para alguien", "despedir a alguien", "ganar dinero rápido"],
        0,
        "Resolver problemas ajenos."
      ),
      mc(
        "«Ser un pez gordo» significa…",
        ["ser una persona importante e influyente", "estar gordo", "ser pescador", "ser un mal jefe"],
        0,
        "Persona poderosa."
      ),
      toEs("The company has made a U-turn in its strategy.", "La empresa ha dado un giro de 180 grados en su estrategia.", "Modismo.", ["La empresa ha dado un giro radical en su estrategia.", "La compañía ha dado un giro de 180 grados en su estrategia."]),
      wo("Nuestro socio nos sacó las castañas del fuego con ese contrato.", "Modismo.", "Our partner got us out of trouble with that contract."),
    ]
  ),
  L(
    "business-idioms-2",
    "c2r-business-idioms-error-hunt",
    "Caza de errores: modismos de empresa mal usados",
    "«Dar luz roja», «tirar la servilleta», «estar en números verdes»: repara los modismos alterados.",
    "6 min",
    [
      sec(
        "Formas fijas",
        "Los modismos no admiten cambios libres: dar luz verde (no «dar luz blanca»), tirar la toalla (no «la servilleta»), estar en números rojos (lo contrario no es «números verdes» sino «estar en positivo / tener beneficios»), apretarse el cinturón (no «los pantalones»).",
        [
          ["✗ Tiramos la servilleta. → ✓ Tiramos la toalla.", "We threw in the towel."],
        ],
        [
          mc(
            "Lo contrario de «estar en números rojos»:",
            ["tener beneficios / estar en positivo", "estar en números verdes", "estar en números azules", "tener números blancos"],
            0,
            "No existe «números verdes» como modismo fijo."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "La dirección dio luz ___ al proyecto. (el alumno puso: blanca)", "verde", "Dar luz verde."),
      fb("Corrige.", "No podemos tirar la ___ ahora. (el alumno puso: servilleta)", "toalla", "Tirar la toalla."),
      fb("Corrige.", "Toca apretarse el ___. (el alumno puso: pantalón)", "cinturón", "Apretarse el cinturón."),
      fb("Corrige.", "Hay que poner las ___ sobre la mesa. (el alumno puso: fichas)", "cartas", "Poner las cartas sobre la mesa."),
      mc(
        "¿Cuál es correcto?",
        ["ir al grano", "ir a la semilla", "ir al trigo", "ir al granito"],
        0,
        "Forma fija."
      ),
      ms(
        "¿Qué modismos están bien formados?",
        ["cortar por lo sano", "tener la sartén por el mango", "lanzarse a la bañera", "salvar los muebles"],
        [0, 1, 3],
        "Es «lanzarse a la piscina»."
      ),
      wo("Tras dos años en números rojos, la empresa por fin tiene beneficios.", "Modismo + registro neutro.", "After two years in the red, the company is finally making a profit."),
    ]
  ),
  L(
    "listening-reading-strategies-1",
    "c2r-strategy-infer-unknown-word",
    "Detective de textos: adivinar la palabra desconocida",
    "Palabras inventadas o rarísimas dentro de frases reales: deduce su significado por el contexto, la morfología y el tono.",
    "7 min",
    [
      sec(
        "Pistas para inferir",
        "Contexto inmediato (qué función cumple en la frase), morfología (prefijos, sufijos: des-, -ción, -ble, -azo), contraste y paráfrasis cercanos («es decir», «o sea», «sino»), y conocimiento del mundo. Ejemplo: «El guiso estaba tan desabrido que tuvimos que echarle sal» → desabrido = sin sabor.",
        [
          ["Estaba tan desabrido que tuvimos que echarle sal.", "It was so bland we had to add salt."],
          ["No era un simple enfado, sino una auténtica inquina.", "It wasn't just anger, but real animosity."],
        ],
        [
          mc(
            "«Era un hombre tan pusilánime que no se atrevía ni a devolver un plato frío.» Pusilánime =",
            ["cobarde, falto de ánimo", "valiente", "hambriento", "maleducado"],
            0,
            "El contexto describe falta de valor."
          ),
        ]
      ),
    ],
    [
      mc(
        "«La reunión fue un galimatías: nadie entendía qué se proponía.» Galimatías =",
        ["discurso confuso e incomprensible", "fiesta", "acuerdo claro", "pelea física"],
        0,
        "La segunda parte explica la primera."
      ),
      mc(
        "«Tras la riada, el pueblo quedó anegado durante días.» Anegado =",
        ["inundado", "seco", "abandonado", "quemado"],
        0,
        "Riada → agua."
      ),
      mc(
        "«Lejos de ser un vago, era un hombre diligente que nunca dejaba nada a medias.» Diligente =",
        ["trabajador y cuidadoso", "perezoso", "rico", "distraído"],
        0,
        "«Lejos de ser un vago» anuncia lo contrario."
      ),
      mc(
        "«Su tono displicente, casi de desprecio, molestó a todos.» Displicente =",
        ["desdeñoso, indiferente", "alegre", "tímido", "amable"],
        0,
        "Paráfrasis «casi de desprecio»."
      ),
      ms(
        "¿Qué pistas son útiles para inferir significados?",
        ["los conectores de contraste", "los prefijos y sufijos", "las paráfrasis cercanas", "el número de sílabas"],
        [0, 1, 2],
        "La longitud no informa."
      ),
      fb("Deduce por morfología.", "Algo que no se puede creer es ___. (in- + creer + -ble)", "increíble", "Prefijo + sufijo."),
      wo("No era timidez, sino una profunda desconfianza hacia los desconocidos.", "Contraste que aclara significado.", "It wasn't shyness but a deep mistrust of strangers."),
    ]
  ),
  L(
    "listening-reading-strategies-2",
    "c2r-strategy-register-shifts",
    "Laboratorio de diálogo: detectar el cambio de registro",
    "En mitad de una conversación, alguien pasa del tú al usted o del coloquial al formal: ¿qué está comunicando?",
    "7 min",
    [
      sec(
        "El cambio también significa",
        "Pasar de tú a usted en medio de una discusión puede marcar enfado o distancia («Mire usted, no le consiento…»). Pasar de formal a coloquial puede buscar complicidad («Entre nosotros, esto es un marrón»). La ironía también se construye con registros inesperados («Su Excelencia ha decidido levantarse a las doce»).",
        [
          ["—Oye, Luis… —Perdone, ¿desde cuándo nos tuteamos?", "—Hey, Luis… —Excuse me, since when are we on first-name terms?"],
          ["Entre tú y yo, el informe es un churro.", "Between you and me, the report is a mess."],
        ],
        [
          mc(
            "Una madre que suele tutear a su hijo le dice: «Usted se va a su cuarto ahora mismo.» Comunica…",
            ["enfado y autoridad", "respeto cariñoso", "que no lo conoce", "una broma sin importancia necesariamente"],
            0,
            "El cambio a usted marca distancia y enfado."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Su Majestad ha decidido por fin levantarse», dicho a un adolescente, es…",
        ["irónico", "respetuoso", "formal y serio", "un error de registro"],
        0,
        "Registro elevado con intención burlona."
      ),
      mc(
        "En una reunión formal, alguien dice: «Bueno, entre nosotros, esto es un marrón». Busca…",
        ["complicidad y sinceridad", "ofender", "cerrar la reunión", "cambiar de idioma"],
        0,
        "Registro coloquial para acercarse."
      ),
      fb("Completa.", "Mire ___, no le consiento que me hable así.", "usted", "Usted de distancia en una discusión."),
      fb("Completa (coloquial).", "Entre tú y yo, ese informe es un ___. (desastre, coloquial España)", "churro", "Churro = chapuza."),
      ms(
        "¿Qué puede indicar un cambio repentino de registro?",
        ["enfado o distancia", "complicidad", "ironía", "un cambio de idioma"],
        [0, 1, 2],
        "No implica cambiar de idioma."
      ),
      toEs("Since when are we on first-name terms?", "¿Desde cuándo nos tuteamos?", "Rechazo del tuteo.", ["¿Desde cuándo nos tuteamos usted y yo?"]),
      wo("Cuando se enfada con su hermano, de repente empieza a hablarle de usted.", "Cambio de registro.", "When she gets angry with her brother, she suddenly starts using usted with him."),
    ]
  ),
  L(
    "listening-reading-strategies-3",
    "c2r-strategy-implicit-connections",
    "Transformaciones: hacer explícitas las conexiones implícitas",
    "Textos yuxtapuestos sin conectores: descubre la relación lógica oculta y reescríbela con el conector adecuado.",
    "7 min",
    [
      sec(
        "Leer entre frases",
        "Los buenos ensayistas yuxtaponen: «Llovía a mares. El partido se jugó» (concesión: aunque llovía). «Había perdido el trabajo. Vendió el coche» (causa-consecuencia: como/así que). «Unos trabajan; otros cobran» (contraste: mientras que). El lector avanzado repone el conector mentalmente.",
        [
          ["Llovía a mares. El partido se jugó. → Aunque llovía a mares, el partido se jugó.", "Although it was pouring, the match was played."],
          ["No había estudiado. Suspendió. → Como no había estudiado, suspendió.", "Since he hadn't studied, he failed."],
        ],
        [
          mc(
            "«La empresa ganó millones. Despidió a cien empleados.» Relación implícita:",
            ["concesión/contraste (a pesar de ganar, despidió)", "causa", "finalidad", "condición"],
            0,
            "La yuxtaposición subraya la paradoja."
          ),
        ]
      ),
    ],
    [
      fb("Explicita.", "Tenía fiebre. Fue a trabajar. → ___ tenía fiebre, fue a trabajar.", "Aunque", "Concesión."),
      fb("Explicita.", "Se quedó sin batería. No pudo avisarnos. → Se quedó sin batería, ___ que no pudo avisarnos.", "así", "Consecuencia."),
      fb("Explicita.", "Unos se esfuerzan; otros se llevan el mérito. → Unos se esfuerzan, ___ que otros se llevan el mérito.", "mientras", "Contraste."),
      mc(
        "«Nadie contestó al teléfono. La oficina estaba cerrada.» La segunda frase…",
        ["explica la causa de la primera", "es una consecuencia", "contradice la primera", "es una condición"],
        0,
        "Causa implícita."
      ),
      mc(
        "«Prometió cambiar. Tres semanas después, volvió a las andadas.» Conector implícito:",
        ["sin embargo", "por eso", "es decir", "además"],
        0,
        "Contraste entre promesa y hecho."
      ),
      toEs("Although he had a fever, he went to work.", "Aunque tenía fiebre, fue a trabajar.", "Concesión explícita.", ["A pesar de que tenía fiebre, fue a trabajar.", "Pese a tener fiebre, fue a trabajar."]),
      wo("Como nadie había reservado mesa, acabamos cenando en casa.", "Causa explícita.", "Since nobody had booked a table, we ended up having dinner at home."),
    ]
  ),
  L(
    "listening-reading-strategies-4",
    "c2r-strategy-fast-speech",
    "Clasificación: el habla rápida real",
    "«Pa' que», «to' el mundo», «cansao», «¿qué pasó?» → «¿qué pasó'?»: reconoce las reducciones del español hablado.",
    "7 min",
    [
      sec(
        "Fenómenos del habla espontánea",
        "Pérdida de -d- intervocálica: cansado → cansao, nada → na. Apócope: para → pa, todo → to. Aspiración o pérdida de -s (Andalucía, Caribe, Cono Sur): «¿cómo estás?» → «¿cómo ehtá?». Contracciones: «para el» → «pal», «mira a ver» → «mirave». Reconocerlas es clave para entender; imitarlas depende del registro.",
        [
          ["Estoy cansao, no quiero na.", "I'm tired, I don't want anything."],
          ["Vamos pal centro.", "Let's go downtown."],
        ],
        [
          mc(
            "«Pa' que lo sepas» es…",
            ["para que lo sepas", "papá que lo sepas", "pasa que lo sepas", "pan que lo sepas"],
            0,
            "Apócope de para."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la forma oral con la estándar.",
        [
          ["to' el mundo", "todo el mundo"],
          ["na", "nada"],
          ["pal", "para el"],
          ["mojao", "mojado"],
        ],
        "Reducciones orales."
      ),
      fb("Restituye.", "Me he quedao dormío. → Me he quedado ___.", "dormido", "Pérdida de -d-."),
      fb("Restituye.", "Vente pa'cá. → Vente para ___.", "acá", "Pa'cá = para acá."),
      mc(
        "«¿Ehtá bien?» refleja…",
        ["aspiración de la -s", "error ortográfico", "voseo", "leísmo"],
        0,
        "Fenómeno meridional y caribeño."
      ),
      mc(
        "¿En qué contexto conviene evitar escribir «cansao»?",
        ["en un correo profesional", "en un chat con amigos", "al transcribir un diálogo coloquial en una novela", "en un meme"],
        0,
        "La escritura formal usa la forma plena."
      ),
      ms(
        "¿Qué formas son reducciones habituales del habla?",
        ["pa'", "na", "to'", "pasé"],
        [0, 1, 2],
        "«Pasé» es la forma estándar."
      ),
      wo("No te preocupes, que no ha pasado nada.", "Versión estándar de «no ha pasao na».", "Don't worry, nothing happened."),
    ]
  ),
  L(
    "listening-reading-strategies-5",
    "c2r-strategy-radio-interview",
    "Detective de textos: la entrevista radiofónica",
    "Una socióloga habla del lenguaje juvenil: idea principal, opinión frente a dato y actitud de la entrevistadora.",
    "8 min",
    [
      sec(
        "La transcripción",
        "Locutora: ¿Los jóvenes hablan peor que antes? — Socióloga: Hablan distinto, que no es lo mismo. Cada generación crea su jerga para diferenciarse; lo que hoy nos escandaliza, mañana estará en el diccionario. Los datos muestran que los adolescentes cambian de registro con enorme facilidad: hablan de una manera con sus amigos y de otra en un examen oral. — Locutora: Entonces, ¿no hay motivo de alarma? — Socióloga: Yo no hablaría de alarma. Hablaría, eso sí, de acompañarlos en la lectura.",
        [
          ["Hablan distinto, que no es lo mismo.", "They speak differently, which is not the same thing."],
          ["Yo no hablaría de alarma.", "I wouldn't talk about alarm."],
        ],
        [
          mc(
            "Idea principal de la socióloga:",
            ["Los jóvenes no hablan peor, sino de otra manera.", "Los jóvenes hablan fatal.", "Hay que prohibir la jerga.", "Los diccionarios están mal."],
            0,
            "«Hablan distinto, que no es lo mismo»."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué enunciado presenta un dato y no una opinión?",
        ["Los adolescentes cambian de registro con facilidad, según los datos.", "Yo no hablaría de alarma.", "Hablaría de acompañarlos.", "Hablan distinto."],
        0,
        "Se apoya en datos."
      ),
      mc(
        "«Yo no hablaría de alarma» es una forma de…",
        ["discrepar con atenuación", "aceptar la pregunta", "cambiar de tema", "hacer una broma"],
        0,
        "Condicional atenuador."
      ),
      mc(
        "La pregunta «¿Los jóvenes hablan peor que antes?» refleja…",
        ["un prejuicio frecuente que la entrevistadora plantea", "la opinión de la socióloga", "un dato", "una conclusión"],
        0,
        "Pregunta provocadora."
      ),
      fb("Completa según el texto.", "Lo que hoy nos escandaliza, mañana ___ en el diccionario. (estar)", "estará", "Futuro."),
      fb("Completa según el texto.", "Hablaría, eso ___, de acompañarlos en la lectura.", "sí", "Eso sí = matiz restrictivo."),
      ms(
        "¿Qué recursos de atenuación usa la socióloga?",
        ["condicional (no hablaría)", "eso sí", "reformulación (distinto, que no es lo mismo)", "insultos"],
        [0, 1, 2],
        "No insulta."
      ),
      wo("Cada generación crea su propia jerga para diferenciarse de la anterior.", "Idea del texto.", "Each generation creates its own slang to set itself apart from the previous one."),
    ]
  ),
  L(
    "listening-reading-strategies-6",
    "c2r-strategy-skim-scan",
    "Contraste: lectura global, selectiva e intensiva",
    "No todo se lee igual: elige la estrategia según el objetivo (captar la idea, encontrar un dato, analizar el detalle).",
    "7 min",
    [
      sec(
        "Tres modos de leer",
        "Lectura global (skimming): captar la idea general mirando título, primer y último párrafo, oraciones temáticas. Lectura selectiva (scanning): buscar un dato concreto (fecha, cifra, nombre) sin leer todo. Lectura intensiva: análisis detallado de un fragmento (matices, estructura, vocabulario). El lector experto alterna las tres.",
        [
          ["Para saber de qué trata el informe, leo la introducción y la conclusión.", "To know what the report is about, I read the introduction and conclusion."],
          ["Busco solo la fecha límite en el reglamento.", "I'm only looking for the deadline in the regulations."],
        ],
        [
          mc(
            "Buscas el horario de un museo en una web larga. Estrategia:",
            ["lectura selectiva", "lectura intensiva", "lectura global", "lectura en voz alta"],
            0,
            "Buscar un dato concreto."
          ),
        ]
      ),
    ],
    [
      mc(
        "Tienes que comentar el estilo de un poema.",
        ["lectura intensiva", "lectura selectiva", "lectura global", "leer solo el título"],
        0,
        "Análisis detallado."
      ),
      mc(
        "Decides si un artículo te sirve para tu trabajo.",
        ["lectura global", "lectura intensiva", "traducción completa", "lectura selectiva de cifras"],
        0,
        "Idea general primero."
      ),
      mt(
        "Relaciona la estrategia con su objetivo.",
        [
          ["global", "captar la idea general"],
          ["selectiva", "localizar un dato"],
          ["intensiva", "analizar el detalle"],
        ],
        "Modos de lectura."
      ),
      fb("Completa.", "La oración ___ suele resumir el contenido del párrafo. (del tema)", "temática", "Oración temática."),
      fb("Completa.", "Para una lectura global, conviene mirar primero el título y los ___ párrafos. (inicial y final)", "primeros", "Primer y últimos párrafos."),
      toEs("I skimmed the article to get the general idea.", "Hice una lectura global del artículo para captar la idea general.", "Vocabulario de estrategias.", ["Leí el artículo por encima para captar la idea general.", "Eché un vistazo al artículo para captar la idea general."]),
      wo("Una lectura selectiva basta para encontrar la fecha de entrega.", "Estrategia adecuada.", "Scanning is enough to find the due date."),
    ]
  ),
  L(
    "listening-reading-strategies-7",
    "c2r-strategy-note-taking",
    "Misión real: tomar notas de una conferencia",
    "Convierte un fragmento de conferencia en notas útiles: abreviaturas, jerarquía, palabras clave y marcadores del ponente.",
    "8 min",
    [
      sec(
        "Escuchar para anotar",
        "Los ponentes anuncian la estructura: «En primer lugar…», «Paso ahora a…», «Lo fundamental es…», «En resumen…». Esas señales indican qué anotar. Abreviaturas útiles: q (que), xq (porque), pq, tb (también), = (igual), → (produce), ≠ (distinto), ej. (ejemplo), s. (siglo). Anota palabras clave, no frases completas.",
        [
          ["«Lo fundamental es que…» → anotar con asterisco.", "Key point marker."],
          ["La inflación → ↓ poder adquisitivo.", "Inflation reduces purchasing power."],
        ],
        [
          mc(
            "¿Qué marcador anuncia una idea clave?",
            ["Lo fundamental es…", "Por cierto…", "Bueno…", "¿Me oyen bien?"],
            0,
            "Señal de importancia."
          ),
        ]
      ),
    ],
    [
      mc(
        "El ponente dice «Paso ahora al segundo punto». ¿Qué haces en tus notas?",
        ["Empiezo un nuevo apartado (2.)", "Dejo de escribir", "Lo copio literal", "Tacho lo anterior"],
        0,
        "Señal de estructura."
      ),
      mc(
        "Mejor nota para «El aumento de las temperaturas provoca una reducción de las cosechas»:",
        ["↑ temp. → ↓ cosechas", "El aumento de las temperaturas provoca una reducción de las cosechas", "temperaturas cosechas", "calor malo"],
        0,
        "Símbolos + palabras clave."
      ),
      fb("Completa.", "«En ___», dijo el ponente antes de sintetizar las ideas.", "resumen", "Marcador de síntesis."),
      fb("Completa.", "La abreviatura «xq» significa ___.", "porque", "Abreviatura informal."),
      ms(
        "¿Qué conviene anotar?",
        ["palabras clave", "cifras y fechas", "la estructura anunciada", "todas las muletillas del ponente"],
        [0, 1, 2],
        "Las muletillas no aportan contenido."
      ),
      toEs("Now I'll move on to the second point.", "Paso ahora al segundo punto.", "Marcador de estructura.", ["Paso ahora al segundo apartado.", "Ahora paso al segundo punto."]),
      wo("Lo fundamental es distinguir entre causas y consecuencias.", "Marcador de idea clave.", "The key thing is to distinguish between causes and consequences."),
    ]
  ),
  L(
    "listening-reading-strategies-8",
    "c2r-strategy-spiral-review",
    "Repaso en espiral: todas las estrategias en un texto",
    "Un texto breve con palabras difíciles, conexiones implícitas y cambio de registro: aplica todas las estrategias a la vez.",
    "8 min",
    [
      sec(
        "El texto",
        "«El nuevo alcalde prometió un urbanismo sostenible. A los seis meses, las grúas cercaban el último parque del barrio. Los vecinos, lejos de resignarse, organizaron una sentada. “Vamos, que nos han tomado el pelo”, resumía una jubilada ante las cámaras. El consistorio, por su parte, alegó que la obra era “estrictamente provisional”.»",
        [
          ["Las grúas cercaban el último parque.", "Cranes surrounded the last park."],
          ["El consistorio alegó que la obra era provisional.", "The town council claimed the works were temporary."],
        ],
        [
          mc(
            "Relación implícita entre las dos primeras frases:",
            ["contraste entre promesa y realidad", "causa", "finalidad", "ejemplo"],
            0,
            "Promesa sostenible vs. grúas en el parque."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Consistorio» significa aquí…",
        ["el ayuntamiento", "una iglesia", "un tribunal", "un partido político"],
        0,
        "Inferencia por contexto (alcalde, obra)."
      ),
      mc(
        "«Lejos de resignarse» indica que los vecinos…",
        ["protestaron activamente", "aceptaron la obra", "se mudaron", "no se enteraron"],
        0,
        "Lejos de = todo lo contrario."
      ),
      mc(
        "La cita de la jubilada introduce…",
        ["un cambio a registro coloquial", "un dato estadístico", "una cita académica", "un tecnicismo"],
        0,
        "«Vamos, que nos han tomado el pelo»."
      ),
      mc(
        "Las comillas en «estrictamente provisional» sugieren…",
        ["distancia irónica del periodista", "una cita científica", "un título de libro", "énfasis positivo"],
        0,
        "Comillas de distanciamiento."
      ),
      fb("Completa.", "Una ___ es una protesta en la que los manifestantes se sientan en el suelo.", "sentada", "Inferencia morfológica."),
      ms(
        "¿Qué estrategias has aplicado?",
        ["inferir palabras por el contexto", "reponer conexiones implícitas", "detectar el cambio de registro", "buscar cada palabra en el diccionario"],
        [0, 1, 2],
        "No hace falta consultar cada palabra."
      ),
      wo("Lejos de resignarse, los vecinos organizaron una protesta.", "Lejos de + infinitivo.", "Far from resigning themselves, the residents organized a protest."),
    ]
  ),
  L(
    "debate-persuasion-1",
    "c2r-debate-concede-refute",
    "Transformaciones: conceder antes de refutar",
    "Convierte una refutación brusca en una réplica que primero concede y después desmonta.",
    "7 min",
    [
      sec(
        "La estructura concesiva",
        "Concesión: «Es cierto que…», «No le falta razón en que…», «Admito que…», «Nadie discute que…». Giro: «sin embargo», «ahora bien», «pero», «no obstante». Refutación: «…lo que no se sostiene es…», «…eso no implica que…» (+ subjuntivo). El oponente se siente escuchado y el público percibe equilibrio.",
        [
          ["Es cierto que la medida es cara; ahora bien, el coste de no aplicarla sería mayor.", "It's true the measure is expensive; however, the cost of not applying it would be greater."],
          ["Nadie discute que haya problemas, pero eso no implica que haya que cerrar el centro.", "No one disputes there are problems, but that doesn't mean the center should close."],
        ],
        [
          mc(
            "¿Qué réplica concede antes de refutar?",
            ["No le falta razón en que es caro; sin embargo, es rentable a largo plazo.", "Está usted equivocado.", "Eso es mentira.", "No tiene ni idea."],
            0,
            "Concesión + giro + refutación."
          ),
        ]
      ),
    ],
    [
      fb("Completa (concesión).", "Nadie ___ que el problema exista; lo que discutimos es la solución.", "discute", "Nadie discute que + subjuntivo."),
      fb("Completa (subjuntivo).", "Eso no implica que ___ que renunciar al proyecto. (haber)", "haya", "No implicar que + subjuntivo."),
      fb("Completa (giro).", "Admito que el plan tiene riesgos. ___ bien, los beneficios los superan.", "Ahora", "Ahora bien."),
      mc(
        "Transforma «Su propuesta es absurda» en una réplica concesiva:",
        ["Entiendo la intención de su propuesta, pero dudo de su viabilidad.", "Su propuesta es muy absurda.", "No me gusta nada su propuesta.", "Su propuesta no vale."],
        0,
        "Concede la intención, cuestiona la viabilidad."
      ),
      ms(
        "¿Qué fórmulas sirven para conceder?",
        ["Es cierto que…", "Admito que…", "No le falta razón en…", "Es absurdo que…"],
        [0, 1, 2],
        "«Es absurdo» no concede."
      ),
      toEs("It is true that the plan is ambitious; however, it is feasible.", "Es cierto que el plan es ambicioso; sin embargo, es viable.", "Concesión + refutación.", ["Es verdad que el plan es ambicioso; no obstante, es viable.", "Es cierto que el plan es ambicioso; ahora bien, es viable."]),
      wo("Admito que tiene parte de razón, pero su conclusión no se sostiene.", "Conceder y refutar.", "I admit you're partly right, but your conclusion doesn't hold up."),
    ]
  ),
  L(
    "debate-persuasion-2",
    "c2r-debate-concession-dialogue",
    "Laboratorio de diálogo: el turno de réplica",
    "Un debate televisado: escucha el argumento del rival y elige la mejor réplica en cada turno.",
    "7 min",
    [
      sec(
        "Turnos del debate",
        "Exposición inicial → turno de réplica → contrarréplica → conclusión. En la réplica: resumir con justicia al rival («Si no le he entendido mal, usted sostiene que…»), conceder, refutar y aportar evidencia. Evitar interrumpir: «Permítame terminar», «Si me deja acabar…».",
        [
          ["Si no le he entendido mal, usted sostiene que…", "If I understood you correctly, you maintain that…"],
          ["Permítame terminar, por favor.", "Please let me finish."],
        ],
        [
          mc(
            "El rival le interrumpe. Usted dice:",
            ["Permítame terminar, por favor.", "¡Cállese ya!", "Qué pesado es usted.", "Vale, lo que usted diga."],
            0,
            "Firmeza cortés."
          ),
        ]
      ),
    ],
    [
      mc(
        "Mejor forma de empezar una réplica:",
        ["Si no le he entendido mal, usted defiende que…", "Usted no se entera.", "Eso que dice es ridículo.", "Bueno, paso de contestar."],
        0,
        "Reformular con justicia."
      ),
      fb("Completa.", "Si me ___ acabar, le explicaré por qué no estoy de acuerdo. (dejar, usted)", "deja", "Si + presente."),
      fb("Completa.", "Si no le he ___ mal, usted sostiene que…", "entendido", "Fórmula de reformulación."),
      mc(
        "«Los datos que usted cita son de 2010; los actuales dicen lo contrario.» Esta réplica refuta mediante…",
        ["la actualización de la evidencia", "un ataque personal", "una pregunta retórica", "una concesión"],
        0,
        "Contraevidencia."
      ),
      mt(
        "Relaciona la fase del debate con su función.",
        [
          ["exposición inicial", "presentar la postura"],
          ["réplica", "responder al rival"],
          ["conclusión", "sintetizar y cerrar"],
        ],
        "Estructura del debate."
      ),
      toEs("Please let me finish.", "Permítame terminar, por favor.", "Firmeza cortés.", ["Permítame acabar, por favor.", "Déjeme terminar, por favor."]),
      wo("Con todo respeto, los datos que usted menciona están desactualizados.", "Réplica cortés.", "With all due respect, the data you mention is out of date."),
    ]
  ),
  L(
    "debate-persuasion-3",
    "c2r-debate-fallacy-hunt",
    "Caza de errores: identifica la falacia",
    "Ad hominem, hombre de paja, falso dilema, pendiente resbaladiza, generalización apresurada: pon nombre al razonamiento tramposo.",
    "8 min",
    [
      sec(
        "Catálogo de falacias",
        "Ad hominem: atacar a la persona, no al argumento. Hombre de paja: deformar el argumento del rival para rebatirlo fácilmente. Falso dilema: presentar solo dos opciones cuando hay más. Pendiente resbaladiza: suponer una cadena de consecuencias catastróficas sin pruebas. Generalización apresurada: concluir a partir de pocos casos. Falsa causa (post hoc): «ocurrió después, luego fue por eso».",
        [
          ["¿Cómo va a saber de economía alguien que ni terminó la carrera?", "Ad hominem."],
          ["O estás con nosotros o estás contra nosotros.", "False dilemma."],
        ],
        [
          mc(
            "«Si permitimos que los alumnos usen el móvil en clase, pronto dejarán de leer, luego de escribir y acabarán sin saber pensar.»",
            ["pendiente resbaladiza", "ad hominem", "hombre de paja", "argumento de autoridad"],
            0,
            "Cadena catastrófica sin pruebas."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Mi rival quiere subir los impuestos para que nadie pueda llegar a fin de mes.» (el rival propuso subir un 1 % a las grandes fortunas)",
        ["hombre de paja", "falso dilema", "generalización apresurada", "post hoc"],
        0,
        "Deforma la propuesta."
      ),
      mc(
        "«Dos turistas me robaron en Lima; los limeños son unos ladrones.»",
        ["generalización apresurada", "ad hominem", "pendiente resbaladiza", "falso dilema"],
        0,
        "Pocos casos → conclusión general."
      ),
      mc(
        "«Desde que se instaló la antena, me duele la cabeza; la antena causa migrañas.»",
        ["falsa causa (post hoc)", "hombre de paja", "falso dilema", "ad hominem"],
        0,
        "Sucesión temporal ≠ causalidad."
      ),
      mc(
        "«O cerramos la fábrica o la empresa quiebra.» (existen otras opciones)",
        ["falso dilema", "generalización", "ad hominem", "argumento de autoridad"],
        0,
        "Solo dos opciones."
      ),
      fb("Completa.", "Atacar a la persona en lugar de su argumento es una falacia ___ hominem.", "ad", "Ad hominem."),
      mt(
        "Relaciona la falacia con su definición.",
        [
          ["hombre de paja", "deformar el argumento ajeno"],
          ["falso dilema", "reducir las opciones a dos"],
          ["ad hominem", "atacar a la persona"],
        ],
        "Falacias frecuentes."
      ),
      wo("Su argumento es una falacia porque ataca a la persona y no a la idea.", "Denunciar una falacia.", "Your argument is a fallacy because it attacks the person and not the idea."),
    ]
  ),
  L(
    "debate-persuasion-4",
    "c2r-debate-expose-fallacy",
    "Laboratorio de diálogo: desactivar una falacia en directo",
    "Tu rival usa una falacia: nómbrala sin agresividad y reconduce el debate hacia los argumentos.",
    "7 min",
    [
      sec(
        "Fórmulas para desactivar",
        "Contra el ad hominem: «Le agradecería que discutiéramos las ideas y no las personas». Contra el hombre de paja: «Yo no he dicho eso; lo que he propuesto es…». Contra el falso dilema: «Existen más alternativas que esas dos». Contra la pendiente resbaladiza: «No hay ninguna prueba de que una cosa lleve a la otra».",
        [
          ["Yo no he dicho eso; lo que he propuesto es…", "I didn't say that; what I proposed is…"],
          ["Existen más alternativas que esas dos.", "There are more alternatives than those two."],
        ],
        [
          mc(
            "El rival deforma su propuesta. Usted responde:",
            ["Yo no he dicho eso; lo que he propuesto es un aumento del 1 % para rentas altas.", "Usted miente siempre.", "Pues sí, tiene razón.", "Paso de responder."],
            0,
            "Contra el hombre de paja."
          ),
        ]
      ),
    ],
    [
      fb("Contra el ad hominem.", "Le agradecería que ___ las ideas y no las personas. (discutir, nosotros)", "discutiéramos", "Agradecería que + imperfecto de subjuntivo."),
      fb("Contra el falso dilema.", "Existen más ___ que esas dos.", "alternativas", "Abrir opciones."),
      fb("Contra la pendiente resbaladiza.", "No hay ninguna prueba de que una cosa ___ a la otra. (llevar)", "lleve", "Prueba de que + subjuntivo (negación)."),
      mc(
        "«Usted no puede opinar de educación porque no tiene hijos.» Respuesta adecuada:",
        ["Mis circunstancias personales no invalidan los datos que he presentado.", "¡Y usted es un maleducado!", "Tiene razón, me callo.", "Pues yo tengo tres perros."],
        0,
        "Separar persona y argumento."
      ),
      mc(
        "«Todos los expertos dicen que…» sin citar ninguno es un argumento…",
        ["de autoridad vago", "sólido", "estadístico", "concesivo"],
        0,
        "Falacia de autoridad difusa."
      ),
      toEs("I did not say that; what I said is quite different.", "Yo no he dicho eso; lo que he dicho es muy distinto.", "Contra el hombre de paja.", ["Yo no dije eso; lo que dije es muy diferente.", "No he dicho eso; lo que he dicho es bastante distinto."]),
      wo("No hay ninguna prueba de que esta medida vaya a provocar un desastre.", "Contra la pendiente resbaladiza.", "There's no evidence this measure will cause a disaster."),
    ]
  ),
  L(
    "debate-persuasion-5",
    "c2r-debate-disagree-scale",
    "Contraste: la escala del desacuerdo",
    "Desde «Matizaría…» hasta «Discrepo rotundamente»: gradúa el desacuerdo sin perder las formas.",
    "7 min",
    [
      sec(
        "Del matiz al rechazo",
        "Suave: «Yo matizaría…», «No estoy del todo de acuerdo», «Hasta cierto punto…». Medio: «No comparto esa opinión», «Me permito discrepar». Fuerte: «Discrepo rotundamente», «No puedo estar más en desacuerdo», «Eso no se sostiene». Con valoración del otro: «Respeto su postura, pero…».",
        [
          ["Yo matizaría esa afirmación.", "I would qualify that statement."],
          ["Discrepo rotundamente de lo que acaba de decir.", "I strongly disagree with what you've just said."],
        ],
        [
          mc(
            "La forma más suave de desacuerdo:",
            ["Yo matizaría un poco esa idea.", "Discrepo rotundamente.", "Eso no se sostiene.", "No puedo estar más en desacuerdo."],
            0,
            "Matizar = desacuerdo parcial."
          ),
        ]
      ),
    ],
    [
      mc(
        "Ordena de más suave a más fuerte: (a) No comparto esa opinión (b) Discrepo rotundamente (c) Hasta cierto punto",
        ["c, a, b", "a, b, c", "b, a, c", "c, b, a"],
        0,
        "Parcial < medio < rotundo."
      ),
      fb("Completa.", "Me ___ discrepar de su análisis. (permitir, yo)", "permito", "Me permito discrepar."),
      fb("Completa.", "No ___ esa opinión, aunque la respeto. (compartir, yo)", "comparto", "No compartir una opinión."),
      fb("Completa.", "Estoy de acuerdo hasta cierto ___.", "punto", "Desacuerdo parcial."),
      ms(
        "¿Qué fórmulas expresan desacuerdo total?",
        ["Discrepo rotundamente.", "No puedo estar más en desacuerdo.", "Eso no se sostiene.", "Yo lo matizaría."],
        [0, 1, 2],
        "Matizar es parcial."
      ),
      toEs("I respect your position, but I don't share it.", "Respeto su postura, pero no la comparto.", "Desacuerdo respetuoso.", ["Respeto tu postura, pero no la comparto.", "Respeto su posición, pero no la comparto."]),
      wo("Respeto su punto de vista, pero me permito discrepar.", "Desacuerdo cortés.", "I respect your point of view, but I beg to differ."),
    ]
  ),
  L(
    "debate-persuasion-6",
    "c2r-debate-rhetorical-devices",
    "Taller de estilo: recursos retóricos que convencen",
    "Analogía, tríada, anáfora, pregunta retórica y ejemplo concreto: refuerza un argumento plano.",
    "8 min",
    [
      sec(
        "Herramientas del orador",
        "Analogía: «Reducir la inversión en educación es como dejar de regar un árbol esperando frutos». Tríada: «Más empleo, más formación, más futuro». Anáfora: repetición al inicio («Hablamos de niños… Hablamos de familias… Hablamos de futuro»). Pregunta retórica: «¿Quién puede estar en contra de la salud pública?». Ejemplo concreto: un caso real que hace tangible el dato.",
        [
          ["Más empleo, más formación, más futuro.", "More jobs, more training, more future."],
          ["¿Acaso alguien cree que esto se arreglará solo?", "Does anyone really believe this will fix itself?"],
        ],
        [
          mc(
            "«Recortar en sanidad es como quitarle el paraguas a alguien en plena tormenta.»",
            ["analogía", "anáfora", "tríada", "pregunta retórica"],
            0,
            "Traslada la idea a un terreno familiar."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Queremos calles seguras. Queremos escuelas dignas. Queremos hospitales abiertos.»",
        ["anáfora", "analogía", "hipérbole", "falacia"],
        0,
        "Repetición inicial."
      ),
      mc(
        "«Igualdad, justicia y libertad.»",
        ["tríada", "anáfora", "analogía", "metonimia"],
        0,
        "Enumeración ternaria."
      ),
      fb("Completa la pregunta retórica.", "¿___ alguien cree que el problema desaparecerá solo?", "Acaso", "Acaso refuerza la pregunta retórica."),
      fb("Completa la analogía.", "Invertir en ciencia es ___ sembrar para las próximas generaciones.", "como", "Analogía."),
      mc(
        "¿Qué recurso hace tangible una estadística?",
        ["un ejemplo concreto con nombre y circunstancias", "una falacia", "un insulto", "un tecnicismo"],
        0,
        "El caso particular ilustra el dato."
      ),
      toEs("Who could be against clean air?", "¿Quién puede estar en contra del aire limpio?", "Pregunta retórica.", ["¿Quién podría estar en contra del aire limpio?", "¿Acaso alguien puede estar en contra del aire limpio?"]),
      wo("Más inversión, más empleo y más oportunidades para todos.", "Tríada.", "More investment, more jobs and more opportunities for everyone."),
    ]
  ),
  L(
    "debate-persuasion-7",
    "c2r-debate-mission-closing",
    "Misión real: la conclusión que se recuerda",
    "Escribe el cierre de un debate universitario: síntesis, contraste con el rival, llamamiento final.",
    "8 min",
    [
      sec(
        "Anatomía de una conclusión",
        "1) Anuncio: «Para concluir…», «Llegamos al final de este debate». 2) Síntesis de los propios argumentos (en tríada si es posible). 3) Contraste con el rival: «Frente a…, nosotros proponemos…». 4) Llamamiento final: pregunta retórica o imagen potente. No se introducen argumentos nuevos.",
        [
          ["Frente al miedo, proponemos información; frente a la prohibición, educación.", "Against fear, we propose information; against prohibition, education."],
          ["La pregunta no es si podemos permitírnoslo, sino si podemos permitirnos no hacerlo.", "The question is not whether we can afford it, but whether we can afford not to."],
        ],
        [
          mc(
            "¿Qué NO debe hacerse en la conclusión?",
            ["introducir un argumento nuevo", "sintetizar", "contrastar con el rival", "cerrar con fuerza"],
            0,
            "La conclusión recapitula."
          ),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "Para ___, repasemos lo que hemos demostrado.", "concluir", "Para concluir."),
      fb("Completa el contraste.", "___ a la prohibición, nosotros proponemos educación.", "Frente", "Frente a = en oposición a."),
      fb("Completa el quiasmo final.", "La pregunta no es si podemos hacerlo, ___ si podemos permitirnos no hacerlo.", "sino", "No es… sino…"),
      mc(
        "Mejor cierre:",
        ["La pregunta no es cuánto cuesta actuar, sino cuánto nos costará no hacerlo.", "Bueno, eso es todo, gracias.", "Y ya está, no sé qué más decir.", "Es todo lo que tengo, más o menos."],
        0,
        "Cierre memorable con contraste."
      ),
      ms(
        "¿Qué elementos debe tener la conclusión?",
        ["síntesis de argumentos", "contraste con la postura rival", "llamamiento final", "datos nuevos sin explicar"],
        [0, 1, 2],
        "No se añaden datos nuevos."
      ),
      toEs("To conclude, let's recall three key ideas.", "Para concluir, recordemos tres ideas clave.", "Anuncio de conclusión.", ["Para concluir, recordemos tres ideas fundamentales.", "En conclusión, recordemos tres ideas clave."]),
      wo("Frente al miedo, proponemos información y diálogo.", "Contraste final.", "Against fear, we propose information and dialogue."),
    ]
  ),
  L(
    "debate-persuasion-8",
    "c2r-debate-vocab-web",
    "Red de palabras: el léxico del debate",
    "Postura, argumento, contraargumento, réplica, falacia, premisa, conclusión, refutar, rebatir, sostener: organiza el vocabulario.",
    "7 min",
    [
      sec(
        "Sustantivos y verbos del debate",
        "Sostener / defender una postura. Esgrimir / aducir un argumento (presentarlo). Rebatir / refutar (demostrar que es falso). Matizar (precisar). Premisa (punto de partida) → conclusión. Tesis / antítesis. Contrincante / adversario / interlocutor. Moderador/a (dirige los turnos).",
        [
          ["Esgrimió argumentos económicos para defender su postura.", "He wielded economic arguments to defend his position."],
          ["Rebatió punto por punto las tesis del adversario.", "She refuted the opponent's theses point by point."],
        ],
        [
          mc(
            "«Aducir un argumento» significa…",
            ["presentarlo como razón", "rechazarlo", "olvidarlo", "copiarlo"],
            0,
            "Aducir = alegar, presentar."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el verbo con su significado.",
        [
          ["rebatir", "demostrar que algo es falso"],
          ["sostener", "mantener una postura"],
          ["matizar", "precisar con detalle"],
          ["esgrimir", "usar un argumento como arma"],
        ],
        "Verbos del debate."
      ),
      fb("Completa.", "El ___ dio la palabra al siguiente participante. (quien dirige el debate)", "moderador", "Moderador/a."),
      fb("Completa.", "Si la ___ es falsa, la conclusión no se sostiene. (punto de partida lógico)", "premisa", "Premisa."),
      fb("Completa.", "Rebatió las tesis de su ___ una por una. (rival)", "contrincante", "Contrincante."),
      ms(
        "¿Qué verbos significan «demostrar que un argumento es falso»?",
        ["refutar", "rebatir", "desmontar", "sostener"],
        [0, 1, 2],
        "Sostener = mantener."
      ),
      toEs("She refuted each of her opponent's arguments.", "Rebatió cada uno de los argumentos de su contrincante.", "Léxico del debate.", ["Refutó cada uno de los argumentos de su adversario.", "Rebatió uno por uno los argumentos de su rival."]),
      wo("La moderadora concedió un minuto de réplica a cada participante.", "Léxico del debate.", "The moderator gave each participant one minute of rebuttal."),
    ]
  ),
  L(
    "debate-persuasion-9",
    "c2r-debate-spiral-subjunctive",
    "Repaso en espiral: la gramática de la argumentación",
    "Subjuntivo tras negación de opinión, concesivas, condicionales irreales y hendidas: la gramática que sostiene un buen debate.",
    "8 min",
    [
      sec(
        "Gramática persuasiva",
        "Negar la opinión ajena: «No creo que sea así» (subjuntivo). Concesivas: «Por muy convincente que parezca…». Condicionales irreales: «Si hubiéramos invertido antes, no estaríamos aquí». Hendidas para focalizar: «Lo que está en juego es…». Valoración: «Es inaceptable que…» (subjuntivo).",
        [
          ["Por muy convincente que parezca, el argumento tiene un fallo.", "However convincing it may seem, the argument has a flaw."],
          ["Si hubiéramos actuado antes, no estaríamos en esta situación.", "If we had acted sooner, we wouldn't be in this situation."],
        ],
        [
          mc(
            "«No creo que esa medida ___ eficaz.»",
            ["sea", "es", "será", "fue"],
            0,
            "Opinión negada → subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Concesiva.", "Por muy razonable que ___ su propuesta, es inviable. (parecer)", "parezca", "Por muy… que + subjuntivo."),
      fb("Condicional irreal.", "Si ___ escuchado a los expertos, habríamos evitado la crisis. (haber, nosotros)", "hubiéramos", "Pluscuamperfecto de subjuntivo."),
      fb("Valoración.", "Es inaceptable que se ___ los datos. (ocultar)", "oculten", "Valoración + subjuntivo."),
      fb("Hendida.", "___ que está en juego es la credibilidad de la institución.", "Lo", "Lo que + verbo."),
      mc(
        "«Aunque los datos ___ a su favor, la conclusión sería la misma.» (hipótesis irreal)",
        ["estuvieran", "están", "estén", "estarán"],
        0,
        "Aunque + imperfecto de subjuntivo = hipótesis irreal."
      ),
      toEs("It is unacceptable that the data should be hidden.", "Es inaceptable que se oculten los datos.", "Valoración + subjuntivo.", ["Es inaceptable que se ocultaran los datos.", "Resulta inaceptable que se oculten los datos."]),
      wo("Lo que realmente está en juego es la confianza de los ciudadanos.", "Hendida.", "What's really at stake is citizens' trust."),
    ]
  ),
  L(
    "presentations-negotiation-1",
    "c2r-present-openings",
    "Contraste: aperturas que enganchan y aperturas que aburren",
    "Pregunta, dato sorprendente, anécdota o cita: elige el gancho adecuado para cada público.",
    "7 min",
    [
      sec(
        "Los primeros treinta segundos",
        "Aperturas eficaces: pregunta al público («¿Cuántos de ustedes han…?»), dato sorprendente («Cada minuto se pierden…»), anécdota breve, cita pertinente. Aperturas débiles: disculparse («Perdón, no soy muy buen orador»), leer el índice sin más, empezar con problemas técnicos. Tras el gancho: presentar el hilo conductor y la estructura.",
        [
          ["¿Cuántos de ustedes han perdido un vuelo por un error informático?", "How many of you have missed a flight due to a computer error?"],
          ["Cada minuto se tiran a la basura 2.000 kilos de comida en este país.", "Every minute, 2,000 kilos of food are thrown away in this country."],
        ],
        [
          mc(
            "¿Qué apertura resta credibilidad?",
            ["Perdonen, no he preparado mucho esto.", "¿Cuántos de ustedes usan el móvil antes de dormir?", "Les voy a contar lo que me pasó el martes.", "En España se tiran 1.300 millones de kilos de comida al año."],
            0,
            "Disculparse al inicio debilita."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la apertura con su tipo.",
        [
          ["¿Alguno de ustedes ha…?", "pregunta al público"],
          ["El 70 % de los proyectos fracasa.", "dato sorprendente"],
          ["El verano pasado, en una gasolinera…", "anécdota"],
        ],
        "Tipos de gancho."
      ),
      fb("Completa (estructura).", "Mi presentación consta de tres ___: el problema, la causa y la solución.", "partes", "Anunciar la estructura."),
      fb("Completa (hilo conductor).", "El hilo ___ de hoy será una sola pregunta: ¿qué harían ustedes?", "conductor", "Hilo conductor."),
      mc(
        "Tras el gancho, lo siguiente es…",
        ["anunciar el objetivo y la estructura", "enseñar la bibliografía", "despedirse", "hacer un descanso"],
        0,
        "Orientar al público."
      ),
      mc(
        "Para un público técnico y escéptico, el gancho más eficaz suele ser…",
        ["un dato contundente y verificable", "un chiste largo", "una disculpa", "una canción"],
        0,
        "Credibilidad."
      ),
      toEs("How many of you have ever…?", "¿Cuántos de ustedes han…?", "Pregunta al público.", ["¿Cuántos de ustedes alguna vez han…?"]),
      wo("Hoy quiero hablarles de algo que nos afecta a todos.", "Apertura.", "Today I want to talk to you about something that affects us all."),
    ]
  ),
  L(
    "presentations-negotiation-2",
    "c2r-present-transitions",
    "Transformaciones: transiciones entre partes",
    "Enlaza las secciones de una presentación con fórmulas que orientan al público.",
    "7 min",
    [
      sec(
        "Señales para el oyente",
        "Pasar de sección: «Una vez visto el problema, pasemos a sus causas». Retomar: «Como decía hace un momento…». Resumir lo parcial: «Recapitulando…». Anunciar un ejemplo: «Veámoslo con un caso concreto». Remitir a la diapositiva: «Como pueden ver en este gráfico…». Anunciar el final: «Y para terminar…».",
        [
          ["Una vez visto el diagnóstico, pasemos a las soluciones.", "Having seen the diagnosis, let's move on to the solutions."],
          ["Como pueden observar en este gráfico…", "As you can see in this chart…"],
        ],
        [
          mc(
            "Fórmula para pasar a la siguiente sección:",
            ["Una vez analizado el problema, pasemos a las causas.", "Bueno, y ahora otra cosa.", "Esto ya está.", "Siguiente."],
            0,
            "Participio absoluto + pasemos a."
          ),
        ]
      ),
    ],
    [
      fb("Transición.", "Una vez ___ el contexto, pasemos a los datos. (ver)", "visto", "Participio absoluto."),
      fb("Remisión.", "Como pueden ___ en esta diapositiva, las ventas crecieron. (ver con atención, infinitivo)", "observar", "Como pueden observar."),
      fb("Recapitulación.", "___, hemos visto tres causas principales. (resumiendo, gerundio de recapitular)", "Recapitulando", "Recapitular."),
      mc(
        "«Veámoslo con un caso concreto» anuncia…",
        ["un ejemplo", "el final", "una pausa", "una pregunta del público"],
        0,
        "Ejemplificación."
      ),
      mc(
        "«Como decía hace un momento…» sirve para…",
        ["retomar una idea anterior", "terminar", "cambiar de tema radicalmente", "saludar"],
        0,
        "Retomar."
      ),
      toEs("Having seen the causes, let's move on to the solutions.", "Una vez vistas las causas, pasemos a las soluciones.", "Transición.", ["Vistas las causas, pasemos a las soluciones.", "Una vez analizadas las causas, pasemos a las soluciones."]),
      wo("Y para terminar, me gustaría dejarles una pregunta.", "Anuncio del final.", "And to finish, I'd like to leave you with a question."),
    ]
  ),
  L(
    "presentations-negotiation-3",
    "c2r-negotiation-counteroffer",
    "Laboratorio de diálogo: la contraoferta",
    "Recibes una oferta insuficiente: agradece, justifica y propón una contraoferta que deje margen de maniobra.",
    "8 min",
    [
      sec(
        "Ceder con inteligencia",
        "Agradecer: «Le agradezco la propuesta». Justificar: «Sin embargo, teniendo en cuenta el volumen del pedido…». Contraofertar: «Estaríamos dispuestos a aceptar si…», «¿Qué le parecería…?». Condicionar cada concesión: «Podríamos ampliar el plazo, siempre y cuando…». Nunca ceder gratis.",
        [
          ["Estaríamos dispuestos a bajar el precio siempre y cuando el pedido sea anual.", "We'd be willing to lower the price provided the order is annual."],
          ["¿Qué le parecería un descuento del 5 % a cambio de pago anticipado?", "How about a 5% discount in exchange for payment in advance?"],
        ],
        [
          mc(
            "¿Qué respuesta condiciona la concesión?",
            ["Podemos rebajar un 3 %, siempre que se comprometan a dos años.", "Vale, lo que usted diga.", "Ni hablar.", "Rebajamos un 10 % sin más."],
            0,
            "Concesión a cambio de algo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Estaríamos dispuestos a aceptar siempre y cuando el plazo ___ de 60 días. (ser)", "sea", "Siempre y cuando + subjuntivo."),
      fb("Completa.", "¿Qué le ___ un descuento a cambio de exclusividad? (parecer, condicional)", "parecería", "Propuesta suavizada."),
      fb("Completa.", "Le ___ la propuesta, pero no se ajusta a nuestro presupuesto. (agradecer, yo)", "agradezco", "Agradecer antes de rechazar."),
      mc(
        "«Margen de maniobra» es…",
        ["el espacio para ceder o ajustar la postura", "el beneficio final", "un plazo de pago", "el contrato firmado"],
        0,
        "Término de negociación."
      ),
      ms(
        "¿Qué frases condicionan una concesión?",
        ["siempre que…", "a cambio de…", "con la condición de que…", "porque sí"],
        [0, 1, 2],
        "«Porque sí» no condiciona."
      ),
      toEs("We could extend the deadline, provided that you pay in advance.", "Podríamos ampliar el plazo, siempre y cuando paguen por adelantado.", "Concesión condicionada.", ["Podríamos ampliar el plazo siempre que paguen por adelantado.", "Podríamos ampliar el plazo, siempre y cuando pague por adelantado."]),
      wo("A cambio de un compromiso de dos años, podríamos mejorar las condiciones.", "Contraoferta.", "In exchange for a two-year commitment, we could improve the terms."),
    ]
  ),
  L(
    "presentations-negotiation-4",
    "c2r-negotiation-deadlock",
    "Misión real: desbloquear un punto muerto",
    "La negociación está atascada. Usa reformulación, intereses comunes y nuevas opciones para desbloquearla.",
    "8 min",
    [
      sec(
        "Técnicas para salir del atasco",
        "Resumir los acuerdos parciales: «Hemos avanzado en X e Y; solo nos queda Z». Pasar de posiciones a intereses: «¿Qué es lo que realmente les preocupa?». Ampliar el pastel: nuevas variables (plazos, volumen, servicios). Hipótesis: «¿Y si…?». Pausa estratégica: «Propongo que lo consultemos y retomemos mañana».",
        [
          ["¿Y si dividiéramos el pago en tres plazos?", "What if we split the payment into three installments?"],
          ["¿Qué es lo que realmente les preocupa de esta cláusula?", "What really worries you about this clause?"],
        ],
        [
          mc(
            "¿Qué pregunta busca los intereses de fondo?",
            ["¿Qué es lo que realmente les preocupa?", "¿Firman o no firman?", "¿Por qué son tan tozudos?", "¿Lo dejamos?"],
            0,
            "Intereses frente a posiciones."
          ),
        ]
      ),
    ],
    [
      fb("Hipótesis.", "¿Y si ___ el plazo de entrega a cambio de un precio menor? (ampliar, nosotros)", "ampliáramos", "¿Y si + imperfecto de subjuntivo?"),
      fb("Resumen.", "Hemos ___ mucho; solo nos queda cerrar el precio. (avanzar)", "avanzado", "Pretérito perfecto."),
      fb("Pausa.", "Propongo que lo ___ con nuestros equipos y lo retomemos mañana. (consultar, nosotros)", "consultemos", "Proponer que + subjuntivo."),
      mc(
        "«Ampliar el pastel» significa…",
        ["introducir nuevas variables para que ambos ganen", "comer más", "subir el precio", "romper la negociación"],
        0,
        "Crear valor."
      ),
      mc(
        "«Estamos en un punto muerto» significa que…",
        ["la negociación no avanza", "alguien ha muerto", "hay acuerdo", "falta un documento"],
        0,
        "Estancamiento."
      ),
      toEs("What if we met halfway?", "¿Y si nos encontráramos a medio camino?", "Hipótesis negociadora.", ["¿Y si llegáramos a un punto intermedio?", "¿Y si partiéramos la diferencia?"]),
      wo("Hemos avanzado mucho; solo nos falta acordar el calendario.", "Resumir acuerdos parciales.", "We've made a lot of progress; we only need to agree on the schedule."),
    ]
  ),
  L(
    "presentations-negotiation-5",
    "c2r-present-body-language",
    "Detective de textos: el lenguaje no verbal",
    "Lee la crónica de una presentación y detecta qué gestos transmiten seguridad y cuáles la minan.",
    "7 min",
    [
      sec(
        "La crónica",
        "«La ponente subió al estrado, recorrió la sala con la mirada y esperó a que se hiciera silencio. Hablaba despacio, con pausas deliberadas, y gesticulaba con las palmas abiertas. Solo al final, al recibir una pregunta incómoda, se cruzó de brazos y empezó a mirar el suelo; su voz se volvió apresurada.»",
        [
          ["Recorrió la sala con la mirada.", "She swept the room with her gaze."],
          ["Se cruzó de brazos.", "She crossed her arms."],
        ],
        [
          mc(
            "¿Qué gesto transmite apertura?",
            ["gesticular con las palmas abiertas", "cruzarse de brazos", "mirar al suelo", "hablar apresuradamente"],
            0,
            "Palmas abiertas = apertura."
          ),
        ]
      ),
    ],
    [
      ms(
        "¿Qué señales delatan inseguridad al final?",
        ["cruzarse de brazos", "mirar al suelo", "voz apresurada", "pausas deliberadas"],
        [0, 1, 2],
        "Las pausas deliberadas transmiten control."
      ),
      mc(
        "«Esperó a que se hiciera silencio» indica…",
        ["control de la situación", "nerviosismo", "falta de preparación", "enfado"],
        0,
        "Seguridad."
      ),
      fb("Completa según el texto.", "Recorrió la sala con la ___.", "mirada", "Contacto visual."),
      fb("Completa (subjuntivo).", "Esperó a que ___ silencio. (hacerse)", "se hiciera", "Esperar a que + subjuntivo."),
      mc(
        "¿Qué habría sido más eficaz ante la pregunta incómoda?",
        ["mantener la mirada y agradecer la pregunta", "cruzarse de brazos", "cambiar de tema sin responder", "salir de la sala"],
        0,
        "Mantener la postura abierta."
      ),
      toEs("She waited for silence before starting.", "Esperó a que se hiciera silencio antes de empezar.", "Esperar a que + subjuntivo.", ["Esperó a que hubiera silencio antes de empezar."]),
      wo("Hablaba despacio y hacía pausas para subrayar las ideas clave.", "Recursos no verbales.", "She spoke slowly and paused to highlight key ideas."),
    ]
  ),
  L(
    "presentations-negotiation-6",
    "c2r-present-qa-session",
    "Laboratorio de diálogo: el turno de preguntas",
    "Responde a preguntas difíciles: ganar tiempo, reconocer lo que no sabes y redirigir sin evadir.",
    "7 min",
    [
      sec(
        "Fórmulas para el turno de preguntas",
        "Agradecer: «Gracias por la pregunta, es muy pertinente». Ganar tiempo: «Déjeme pensarlo un segundo». Reformular: «Si le he entendido bien, me pregunta si…». Reconocer límites: «No dispongo de ese dato ahora mismo, pero se lo haré llegar». Redirigir sin evadir: «Es una cuestión importante; permítame responder primero a la parte que me toca».",
        [
          ["No dispongo de ese dato ahora, pero se lo haré llegar.", "I don't have that figure right now, but I'll send it to you."],
          ["Si le he entendido bien, me pregunta si…", "If I've understood correctly, you're asking whether…"],
        ],
        [
          mc(
            "No sabes la respuesta. Lo más profesional es:",
            ["Reconocerlo y comprometerse a enviar la información.", "Inventarse un dato.", "Ignorar la pregunta.", "Criticar a quien pregunta."],
            0,
            "Honestidad."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No ___ de ese dato ahora mismo. (disponer, yo)", "dispongo", "Disponer de."),
      fb("Completa.", "Se lo haré ___ esta misma semana. (enviar, perífrasis con hacer)", "llegar", "Hacer llegar."),
      fb("Completa.", "Gracias por la pregunta; es muy ___. (oportuna y relevante)", "pertinente", "Pertinente."),
      mc(
        "«Déjeme pensarlo un segundo» sirve para…",
        ["ganar tiempo", "terminar la charla", "rechazar la pregunta", "cambiar de idioma"],
        0,
        "Ganar tiempo."
      ),
      mc(
        "Alguien hace una pregunta hostil. La mejor respuesta empieza por…",
        ["Entiendo su preocupación; déjeme explicarle…", "Esa pregunta es estúpida.", "No pienso responder.", "Siguiente pregunta."],
        0,
        "Validar y responder."
      ),
      toEs("If I've understood you correctly, you're asking whether…", "Si le he entendido bien, me pregunta si…", "Reformulación.", ["Si le entiendo bien, me pregunta si…", "Si no le he entendido mal, me pregunta si…"]),
      wo("Es una cuestión muy pertinente y se la agradezco.", "Agradecer la pregunta.", "It's a very relevant question and I appreciate it."),
    ]
  ),
  L(
    "presentations-negotiation-7",
    "c2r-negotiation-closing-deal",
    "Misión real: cerrar el acuerdo por escrito",
    "Tras la reunión, redacta el correo que confirma lo acordado: resumen, compromisos, plazos y próximos pasos.",
    "8 min",
    [
      sec(
        "El correo de cierre",
        "«Estimado señor Durán: Le agradezco la reunión de ayer. Tal como acordamos: 1) el precio unitario será de 12 €; 2) el primer envío se realizará el 1 de marzo; 3) el pago se efectuará a 30 días. Le ruego que me confirme estos puntos para poder preparar el contrato. Quedo a la espera de su respuesta.»",
        [
          ["Tal como acordamos…", "As we agreed…"],
          ["Le ruego que me confirme estos puntos.", "Please confirm these points."],
        ],
        [
          mc(
            "¿Por qué enumerar los acuerdos?",
            ["para evitar malentendidos y dejar constancia", "para alargar el correo", "porque es obligatorio por ley", "para cambiar las condiciones"],
            0,
            "Dejar constancia."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Tal como ___ en la reunión, el plazo será de 30 días. (acordar, nosotros)", "acordamos", "Tal como acordamos."),
      fb("Completa.", "Le ruego que me ___ estos puntos. (confirmar)", "confirme", "Rogar que + subjuntivo."),
      fb("Completa.", "El pago se ___ a 30 días. (efectuar, futuro)", "efectuará", "Futuro formal."),
      mc(
        "Frase adecuada para próximos pasos:",
        ["Una vez recibida su confirmación, le enviaremos el borrador del contrato.", "Ya veremos qué pasa.", "Hablamos cuando sea.", "Bueno, ya está."],
        0,
        "Participio absoluto + futuro."
      ),
      ms(
        "¿Qué debe incluir el correo de cierre?",
        ["resumen de los acuerdos", "plazos", "próximos pasos", "críticas al negociador rival"],
        [0, 1, 2],
        "No se critica al otro."
      ),
      toEs("As agreed, the first shipment will be on March 1.", "Tal como acordamos, el primer envío será el 1 de marzo.", "Confirmación.", ["Según lo acordado, el primer envío será el 1 de marzo.", "Tal y como acordamos, el primer envío será el 1 de marzo."]),
      wo("Una vez recibida su confirmación, prepararemos el contrato.", "Próximos pasos.", "Once we receive your confirmation, we'll prepare the contract."),
    ]
  ),
  L(
    "presentations-negotiation-8",
    "c2r-negotiation-spiral-register",
    "Repaso en espiral: negociar con la gramática del C1",
    "Condicional de cortesía, subjuntivo condicional, eufemismo y atenuación: la gramática al servicio del acuerdo.",
    "8 min",
    [
      sec(
        "Suavizar sin ceder",
        "Condicional de cortesía: «Nos gustaría», «Sería conveniente». Imperfecto de cortesía: «Queríamos proponerles…». Condiciones: «En el supuesto de que…», «A no ser que…» (+ subjuntivo). Eufemismo: «un ajuste de precio» (subida). Atenuación: «quizá», «en cierta medida».",
        [
          ["Queríamos proponerles una revisión de las condiciones.", "We wanted to propose a review of the terms."],
          ["A no ser que mejoren la oferta, tendremos que buscar otro proveedor.", "Unless you improve the offer, we'll have to look for another supplier."],
        ],
        [
          mc(
            "«A no ser que ___ el precio, no firmaremos.»",
            ["rebajen", "rebajan", "rebajarán", "rebajaron"],
            0,
            "A no ser que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Imperfecto de cortesía.", "___ plantearles una pequeña modificación. (querer, nosotros)", "Queríamos", "Imperfecto de cortesía."),
      fb("Condicional.", "En el supuesto de que no ___ acuerdo, cada parte asumirá sus costes. (haber)", "haya", "En el supuesto de que + subjuntivo."),
      fb("Eufemismo.", "Nos vemos obligados a aplicar un ___ de tarifas. (subida, eufemismo)", "ajuste", "Ajuste = subida."),
      mc(
        "¿Qué versión es más diplomática?",
        ["Sería conveniente revisar el calendario de pagos.", "Tienen que cambiar los pagos.", "Los pagos están mal.", "Cambien los pagos ya."],
        0,
        "Condicional impersonal."
      ),
      mc(
        "«Nos gustaría que ___ la posibilidad de un descuento.»",
        ["valoraran", "valoran", "valorarán", "valorar"],
        0,
        "Condicional + imperfecto de subjuntivo."
      ),
      toEs("Unless you improve the offer, we won't be able to accept.", "A no ser que mejoren la oferta, no podremos aceptar.", "A no ser que + subjuntivo.", ["A menos que mejoren la oferta, no podremos aceptar.", "Salvo que mejoren la oferta, no podremos aceptar."]),
      wo("Nos gustaría que valoraran la posibilidad de ampliar el plazo.", "Petición diplomática.", "We would like you to consider extending the deadline."),
    ]
  ),
  L(
    "citations-references-1",
    "c2r-cite-direct-indirect",
    "Transformaciones: de cita textual a cita indirecta",
    "Convierte citas entre comillas en paráfrasis atribuidas y viceversa, sin alterar el sentido.",
    "7 min",
    [
      sec(
        "Dos formas de dar voz a la fuente",
        "Cita textual: palabras exactas entre comillas, con página si procede: Según Pérez (2019), «la lengua es un organismo vivo» (p. 12). Cita indirecta o paráfrasis: se reformula con palabras propias y se atribuye: Pérez (2019) sostiene que la lengua evoluciona como un organismo. En la indirecta se ajustan tiempos y pronombres como en el estilo indirecto.",
        [
          ["«El cambio lingüístico es inevitable» (Gómez, 2020, p. 5).", "Direct quote."],
          ["Gómez (2020) afirma que el cambio lingüístico resulta inevitable.", "Indirect quote."],
        ],
        [
          mc(
            "¿Cuál es una cita indirecta?",
            ["Ruiz (2018) señala que la migración transformó el léxico urbano.", "«La migración transformó el léxico urbano» (Ruiz, 2018).", "Ruiz dijo: «La migración…».", "«…» (p. 34)."],
            0,
            "Paráfrasis atribuida."
          ),
        ]
      ),
    ],
    [
      fb("A indirecta.", "Castro afirma: «Estoy convencida de ello». → Castro afirma que ___ convencida de ello.", "está", "Primera persona → tercera."),
      fb("A indirecta (pasado).", "Martín escribió: «Nuestros datos son provisionales». → Martín escribió que sus datos ___ provisionales.", "eran", "Presente → imperfecto."),
      fb("A indirecta.", "Luna advierte: «No hay que confiar en una sola fuente». → Luna advierte que no ___ que confiar en una sola fuente.", "hay", "Presente se mantiene con verbo introductor en presente."),
      mc(
        "En una cita textual larga (más de 40 palabras) se suele usar…",
        ["un bloque sangrado sin comillas", "comillas triples", "cursiva total", "negrita"],
        0,
        "Convención académica."
      ),
      ms(
        "¿Qué exige una cita textual?",
        ["reproducir las palabras exactas", "comillas o bloque sangrado", "indicar la fuente", "cambiar los tiempos verbales"],
        [0, 1, 2],
        "Los tiempos no se cambian en la cita textual."
      ),
      toEs("The author argues that the data are inconclusive.", "El autor sostiene que los datos no son concluyentes.", "Cita indirecta.", ["El autor sostiene que los datos no son concluyentes todavía.", "El autor argumenta que los datos no son concluyentes."]),
      wo("Según la autora, el fenómeno se remonta al siglo XVIII.", "Atribución.", "According to the author, the phenomenon dates back to the 18th century."),
    ]
  ),
  L(
    "citations-references-2",
    "c2r-cite-attribution-verbs",
    "Contraste: afirma, sostiene, sugiere, advierte, reconoce",
    "El verbo de atribución no es neutro: cada uno transmite la actitud del autor citado (y la tuya).",
    "7 min",
    [
      sec(
        "Verbos que interpretan",
        "Neutros: afirma, señala, indica, explica. De firmeza: sostiene, defiende, insiste en. De cautela: sugiere, apunta, plantea. De advertencia: advierte, alerta. De concesión: reconoce, admite. Con distancia del citador: pretende, alega (puede sugerir escepticismo). Fórmulas: según X, en palabras de X, a juicio de X, tal como señala X.",
        [
          ["López sugiere que podría existir una relación.", "López suggests there might be a relationship."],
          ["El autor alega que los datos fueron manipulados.", "The author claims the data were manipulated."],
        ],
        [
          mc(
            "¿Qué verbo expresa cautela?",
            ["sugiere", "sostiene", "demuestra", "insiste"],
            0,
            "Sugerir = afirmar con reservas."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el verbo con su matiz.",
        [
          ["advierte", "alerta de un riesgo"],
          ["reconoce", "admite un punto"],
          ["sostiene", "defiende con firmeza"],
          ["alega", "afirma (con posible escepticismo del citador)"],
        ],
        "Verbos de atribución."
      ),
      fb("Completa.", "En ___ de Octavio Paz, «la poesía es memoria hecha imagen».", "palabras", "En palabras de."),
      fb("Completa.", "A ___ de la autora, el modelo es insuficiente. (en opinión de)", "juicio", "A juicio de."),
      mc(
        "«El ministro pretende que la crisis ha terminado.» El citador…",
        ["muestra escepticismo", "está de acuerdo", "es neutral", "admira al ministro"],
        0,
        "Pretender = afirmar sin fundamento."
      ),
      mc(
        "Para citar con neutralidad:",
        ["Según el informe…", "El informe pretende…", "El informe alega…", "El informe se inventa…"],
        0,
        "Según = neutro."
      ),
      toEs("The study warns that sea levels could rise by a meter.", "El estudio advierte que el nivel del mar podría subir un metro.", "Advertir.", ["El estudio advierte de que el nivel del mar podría subir un metro.", "El estudio alerta de que el nivel del mar podría subir un metro."]),
      wo("La investigadora reconoce que la muestra es limitada.", "Reconocer.", "The researcher acknowledges the sample is limited."),
    ]
  ),
  L(
    "citations-references-3",
    "c2r-cite-apparatus",
    "Red de palabras: el aparato crítico",
    "Ibid., op. cit., cf., [sic], (…), et al.: las abreviaturas y signos que todo lector académico debe reconocer.",
    "7 min",
    [
      sec(
        "Signos y abreviaturas",
        "Ibid. (ibidem): la misma obra citada inmediatamente antes. Op. cit. (opere citato): obra ya citada del mismo autor. Cf. (confer): compárese, véase. [sic]: así en el original (se reproduce un error tal cual). […] o (…): omisión de un fragmento en la cita. et al.: y otros (autores). Fuente primaria (documento original) frente a fuente secundaria (estudio sobre ella).",
        [
          ["«Los ciudadanos […] exigieron justicia.»", "Omission in a quote."],
          ["«Hubieron [sic] muchos heridos.»", "Error reproduced as in the original."],
        ],
        [
          mc(
            "«[sic]» indica que…",
            ["el error está en el original", "hay una omisión", "es una traducción", "es la misma obra"],
            0,
            "Así en el original."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la abreviatura con su significado.",
        [
          ["ibid.", "en la misma obra recién citada"],
          ["cf.", "compárese"],
          ["et al.", "y otros autores"],
          ["op. cit.", "obra ya citada"],
        ],
        "Aparato crítico."
      ),
      mc(
        "Para omitir parte de una cita se usa…",
        ["[…]", "[sic]", "ibid.", "et al."],
        0,
        "Corchetes con puntos suspensivos."
      ),
      mc(
        "Una carta original de Bolívar es una fuente…",
        ["primaria", "secundaria", "terciaria", "digital"],
        0,
        "Documento original."
      ),
      fb("Completa.", "García ___ al. (2021) analizan 500 casos.", "et", "Et al. = y otros."),
      fb("Completa.", "Una biografía sobre Bolívar es una fuente ___.", "secundaria", "Estudio sobre la fuente."),
      toEs("Compare with the previous chapter.", "Cf. el capítulo anterior.", "Abreviatura cf.", ["Compárese con el capítulo anterior.", "Véase el capítulo anterior."]),
      wo("La cita reproduce el error original, marcado con sic entre corchetes.", "Uso de [sic].", "The quotation reproduces the original error, marked with sic in brackets."),
    ]
  ),
  L(
    "citations-references-4",
    "c2r-cite-plagiarism-paraphrase",
    "Caza de errores: paráfrasis o plagio",
    "Compara el original con varias reformulaciones y decide cuáles son paráfrasis legítimas y cuáles plagio encubierto.",
    "8 min",
    [
      sec(
        "El original",
        "Original (Vidal, 2017): «La expansión de las ciudades durante el siglo XX no solo transformó el paisaje, sino que alteró de forma irreversible las relaciones vecinales.» Paráfrasis legítima: reformula la estructura y el léxico y cita la fuente. Plagio: copiar o cambiar solo algunas palabras sin citar, o citar pero conservar casi toda la frase sin comillas.",
        [
          ["Vidal (2017) sostiene que el crecimiento urbano del siglo pasado modificó para siempre la convivencia entre vecinos.", "Legitimate paraphrase."],
        ],
        [
          mc(
            "«La expansión de las ciudades en el siglo XX no solo cambió el paisaje, sino que alteró irreversiblemente las relaciones vecinales.» (sin cita)",
            ["plagio", "paráfrasis legítima", "cita textual correcta", "resumen original"],
            0,
            "Cambios mínimos y sin atribución."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Según Vidal (2017), el crecimiento urbano del siglo pasado cambió para siempre la manera de convivir en los barrios.»",
        ["paráfrasis legítima", "plagio", "cita textual", "falacia"],
        0,
        "Léxico y estructura nuevos + cita."
      ),
      mc(
        "«La expansión de las ciudades durante el siglo XX no solo transformó el paisaje (Vidal, 2017).» (sin comillas)",
        ["plagio: texto literal sin comillas aunque se cite", "paráfrasis legítima", "cita indirecta correcta", "resumen propio"],
        0,
        "Si es literal, necesita comillas."
      ),
      fb("Completa.", "Una paráfrasis debe cambiar tanto el léxico como la ___ de la frase.", "estructura", "Reformular a fondo."),
      fb("Completa.", "Aunque se reformule, siempre hay que ___ la fuente. (atribuir)", "citar", "Atribución obligatoria."),
      ms(
        "¿Qué prácticas son plagio?",
        ["copiar sin comillas ni cita", "cambiar solo algunos sinónimos y no citar", "presentar ideas ajenas como propias", "parafrasear a fondo citando la fuente"],
        [0, 1, 2],
        "Parafrasear citando es legítimo."
      ),
      toEs("Even when paraphrasing, the source must be cited.", "Incluso al parafrasear, hay que citar la fuente.", "Norma académica.", ["Aunque se parafrasee, hay que citar la fuente.", "Incluso cuando se parafrasea, se debe citar la fuente."]),
      wo("La paráfrasis reformula la idea con palabras propias y cita la fuente.", "Definición.", "Paraphrase restates the idea in your own words and cites the source."),
    ]
  ),
  L(
    "citations-references-6",
    "c2r-cite-mission-lit-review",
    "Misión real: un párrafo de estado de la cuestión",
    "Integra tres fuentes en un párrafo coherente: coincidencias, discrepancias y hueco de investigación.",
    "8 min",
    [
      sec(
        "Dialogar con las fuentes",
        "Coincidencia: «Tanto X como Y coinciden en que…». Matiz: «Z, por su parte, matiza que…». Discrepancia: «Frente a esta postura, W sostiene que…». Hueco: «Sin embargo, ninguno de estos estudios aborda…», «Queda por explorar…». Así se justifica la aportación propia.",
        [
          ["Tanto Díaz (2015) como Soto (2019) coinciden en que el bilingüismo favorece la atención.", "Both Díaz (2015) and Soto (2019) agree that bilingualism improves attention."],
          ["Sin embargo, ninguno de estos estudios aborda a hablantes mayores de 70 años.", "However, none of these studies addresses speakers over 70."],
        ],
        [
          mc(
            "¿Qué frase señala un hueco de investigación?",
            ["Queda por explorar su efecto en la población rural.", "Tanto X como Y coinciden.", "Según Díaz…", "Soto matiza que…"],
            0,
            "Hueco = lo que falta por estudiar."
          ),
        ]
      ),
    ],
    [
      fb("Coincidencia.", "Tanto Pérez como Ruiz ___ en que el efecto es positivo. (coincidir)", "coinciden", "Coincidir en que."),
      fb("Matiz.", "Vega, por su ___, matiza que el efecto es temporal.", "parte", "Por su parte."),
      fb("Discrepancia.", "___ a esta postura, Ortiz sostiene lo contrario.", "Frente", "Frente a."),
      fb("Hueco.", "Sin embargo, ___ de estos estudios aborda a la población infantil.", "ninguno", "Ninguno + singular."),
      mc(
        "¿Para qué sirve señalar el hueco?",
        ["para justificar la investigación propia", "para criticar a los autores", "para rellenar espacio", "para terminar el trabajo"],
        0,
        "Justificación."
      ),
      toEs("Both authors agree that the effect is positive.", "Ambos autores coinciden en que el efecto es positivo.", "Coincidencia.", ["Los dos autores coinciden en que el efecto es positivo.", "Ambos autores concuerdan en que el efecto es positivo."]),
      wo("Queda por explorar la influencia de la edad en estos resultados.", "Hueco de investigación.", "The influence of age on these results remains to be explored."),
    ]
  ),
  L(
    "citations-references-8",
    "c2r-cite-spiral-reported-speech",
    "Repaso en espiral: citar es estilo indirecto",
    "Las citas indirectas aplican las reglas del estilo indirecto del C1: tiempos, modos y verbos introductores.",
    "7 min",
    [
      sec(
        "Del C1 al C2",
        "Si el verbo introductor está en pasado, los tiempos retroceden: «Los datos confirman…» → El autor afirmó que los datos confirmaban… Si el verbo es de influencia, subjuntivo: «Revisen la metodología» → El autor recomendó que se revisara la metodología. Con verbo en presente, no hay retroceso: El autor afirma que los datos confirman…",
        [
          ["Sánchez recomendó que se ampliara la muestra.", "Sánchez recommended that the sample be expanded."],
          ["La autora afirmó que el fenómeno había comenzado antes.", "The author stated that the phenomenon had begun earlier."],
        ],
        [
          mc(
            "«Amplíen la muestra.» → El autor recomendó que se ___ la muestra.",
            ["ampliara", "amplía", "ampliará", "amplió"],
            0,
            "Verbo de influencia en pasado → imperfecto de subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Retroceso temporal.", "«El método es fiable.» → Afirmó que el método ___ fiable.", "era", "Presente → imperfecto."),
      fb("Retroceso temporal.", "«Hemos encontrado pruebas.» → Declararon que ___ encontrado pruebas.", "habían", "Perfecto → pluscuamperfecto."),
      mc(
        "«Se necesita más investigación.» → La autora señala que…",
        ["se necesita más investigación.", "se necesitaba más investigación.", "se necesitara más investigación.", "se necesitaría más investigación."],
        0,
        "Con introductor en presente no hay retroceso temporal."
      ),
      fb("Influencia.", "«No generalicen.» → Advirtió que no ___. (generalizar, nosotros)", "generalizáramos", "Advertir (orden) + subjuntivo."),
      mc(
        "«Publicaremos los resultados.» → Anunciaron que ___ los resultados.",
        ["publicarían", "publicarán ya", "publicaran", "publicaban"],
        0,
        "Futuro → condicional."
      ),
      toEs("The authors stated that they had found no evidence.", "Los autores afirmaron que no habían encontrado pruebas.", "Estilo indirecto.", ["Los autores declararon que no habían encontrado pruebas.", "Los autores afirmaron que no habían encontrado ninguna prueba."]),
      wo("El comité recomendó que se repitiera el experimento.", "Influencia + subjuntivo.", "The committee recommended that the experiment be repeated."),
    ]
  ),
  L(
    "rhetorical-questions-1",
    "c2r-rhetorical-identify",
    "Clasificación: ¿pregunta real o retórica?",
    "Distingue las preguntas que buscan información de las que buscan un efecto: afirmar, negar, reprochar o indignar.",
    "7 min",
    [
      sec(
        "Qué afirma una pregunta retórica",
        "La pregunta retórica equivale a una afirmación de signo contrario: «¿Acaso no lo sabíamos?» = Lo sabíamos. «¿Quién no ha dudado alguna vez?» = Todos hemos dudado. «¿Cómo iba a saberlo yo?» = No podía saberlo. Marcas: acaso, cómo va/iba a, quién no, es que, a quién se le ocurre.",
        [
          ["¿Acaso alguien lo dudaba?", "Did anyone really doubt it? (= Nobody doubted it.)"],
          ["¿A quién se le ocurre salir sin paraguas?", "Who would think of going out without an umbrella? (= What a silly idea.)"],
        ],
        [
          mc(
            "«¿Cómo iba a imaginarme algo así?» equivale a…",
            ["No podía imaginármelo.", "Me lo imaginaba.", "¿Me lo imaginé?", "Quiero imaginarlo."],
            0,
            "Negación implícita."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿A qué hora sale el tren a Toledo?»",
        ["pregunta real", "pregunta retórica", "hipofora", "anáfora"],
        0,
        "Busca información."
      ),
      mc(
        "«¿Es que nadie piensa en los niños?»",
        ["pregunta retórica de reproche", "pregunta real", "petición de datos", "saludo"],
        0,
        "Indignación / reproche."
      ),
      mc(
        "«¿Quién no ha sentido miedo alguna vez?» equivale a…",
        ["Todos hemos sentido miedo.", "Nadie ha sentido miedo.", "¿Quién ha sentido miedo?", "Algunos no sienten miedo."],
        0,
        "Quién no = todos."
      ),
      fb("Completa (retórica).", "¿___ alguien puede negar la evidencia?", "Acaso", "Acaso."),
      fb("Completa (retórica).", "¿Cómo ___ a saberlo si nadie me avisó? (ir, yo, imperfecto)", "iba", "Cómo iba a + infinitivo."),
      ms(
        "¿Qué marcas suelen introducir preguntas retóricas?",
        ["acaso", "quién no", "cómo va a", "a qué hora"],
        [0, 1, 2],
        "«A qué hora» suele pedir información."
      ),
      wo("¿A quién se le ocurre dejar la puerta abierta en pleno invierno?", "Retórica de reproche.", "Who would think of leaving the door open in the middle of winter?"),
    ]
  ),
  L(
    "rhetorical-questions-2",
    "c2r-rhetorical-hypophora",
    "Transformaciones: afirmación → hipofora",
    "Convierte afirmaciones planas en hipoforas (me pregunto y me respondo) para ganar atención.",
    "7 min",
    [
      sec(
        "Preguntar para responder",
        "La hipofora plantea una pregunta y la responde el propio hablante: «¿Por qué fracasó el plan? Porque nadie escuchó a los vecinos». Estructura el discurso, anticipa la duda del público y crea expectación. Fórmulas: «¿Y qué ocurrió? Que…», «¿La razón? Muy sencilla:…», «¿El resultado? …».",
        [
          ["¿El resultado? Tres años perdidos.", "The result? Three wasted years."],
          ["¿Por qué importa esto? Porque afecta a todos.", "Why does this matter? Because it affects everyone."],
        ],
        [
          mc(
            "¿Cuál es una hipofora?",
            ["¿Y qué pasó? Que nadie se presentó.", "¿Qué hora es?", "¿Acaso no lo sabías?", "¿Quién no ha llorado?"],
            0,
            "Pregunta + respuesta propia."
          ),
        ]
      ),
    ],
    [
      fb("Completa la hipofora.", "¿Por qué fracasó el proyecto? ___ nadie escuchó a los vecinos.", "Porque", "Hipofora causal."),
      toEs("Why did it fail? Because nobody listened.", "¿Por qué fracasó? Porque nadie escuchó.", "Hipofora.", ["¿Por qué fracasó? Porque nadie hizo caso.", "¿Por qué salió mal? Porque nadie escuchó."]),
      fb("Transforma.", "Ocurrió que nadie se presentó. → ¿Y qué ocurrió? ___ nadie se presentó.", "Que", "¿Y qué ocurrió? Que…"),
      mc(
        "¿Qué efecto busca la hipofora?",
        ["crear expectación y ordenar el discurso", "obtener información del público", "cambiar de tema", "terminar el discurso"],
        0,
        "Función estructuradora."
      ),
      mc(
        "Hipofora eficaz para abrir un informe oral:",
        ["¿Qué ha cambiado en diez años? Casi todo.", "¿Alguien tiene un bolígrafo?", "¿Me oyen?", "¿Empiezo?"],
        0,
        "Pregunta + respuesta contundente."
      ),
      toEs("The result? Three years lost.", "¿El resultado? Tres años perdidos.", "Hipofora nominal.", ["¿El resultado? Tres años desperdiciados."]),
      wo("¿Y qué hicimos entonces? Empezar de nuevo.", "Hipofora.", "And what did we do then? Start again."),
    ]
  ),
  L(
    "rhetorical-questions-3",
    "c2r-rhetorical-anaphora-series",
    "Taller de estilo: la serie interrogativa",
    "Construye series de preguntas con anáfora («¿Cuántos…? ¿Cuántos…?») para cerrar un discurso con fuerza.",
    "7 min",
    [
      sec(
        "Repetición con ritmo",
        "La anáfora interrogativa repite el inicio de varias preguntas: «¿Cuántos jóvenes más tendrán que emigrar? ¿Cuántas familias más tendrán que separarse? ¿Cuántos años más vamos a esperar?». Funciona mejor en series de tres, con intensidad creciente, y seguida de una respuesta o llamamiento.",
        [
          ["¿Hasta cuándo vamos a mirar hacia otro lado? ¿Hasta cuándo vamos a callar?", "How long will we look the other way? How long will we stay silent?"],
        ],
        [
          mc(
            "¿Qué serie usa anáfora interrogativa?",
            ["¿Quién lo vio? ¿Quién lo denunció? ¿Quién hizo algo?", "¿Qué hora es? ¿Dónde vives?", "¿Vienes? No sé.", "¿Por qué? Porque sí."],
            0,
            "Repetición de «¿Quién…?»."
          ),
        ]
      ),
    ],
    [
      fb("Completa la serie.", "¿Cuántos jóvenes más ___ que emigrar? (tener, futuro)", "tendrán", "Futuro en la pregunta retórica."),
      fb("Completa la serie.", "¿Hasta cuándo ___ a mirar hacia otro lado? (ir, nosotros)", "vamos", "Ir a + infinitivo."),
      mc(
        "¿Cuántos elementos suele tener una serie anafórica eficaz?",
        ["tres", "uno", "diez", "veinte"],
        0,
        "La tríada tiene ritmo."
      ),
      mc(
        "Tras la serie interrogativa, lo más eficaz es…",
        ["una respuesta o llamamiento contundente", "cambiar de tema", "pedir perdón", "leer una lista de datos"],
        0,
        "Cierre."
      ),
      ms(
        "¿Qué rasgos tiene una buena serie anafórica?",
        ["repetición inicial", "intensidad creciente", "ritmo ternario", "preguntas sin relación entre sí"],
        [0, 1, 2],
        "Deben estar relacionadas."
      ),
      toEs("How much longer will we wait?", "¿Cuánto tiempo más vamos a esperar?", "Pregunta retórica.", ["¿Cuánto más vamos a esperar?", "¿Hasta cuándo vamos a esperar?"]),
      wo("¿Cuántas veces más tendremos que repetir lo mismo?", "Pregunta anafórica.", "How many more times will we have to say the same thing?"),
    ]
  ),
  L(
    "rhetorical-questions-4",
    "c2r-rhetorical-feigned-doubt",
    "Contraste: interpelación, duda fingida y pregunta retórica",
    "«¿Y usted, señor ministro, qué hizo?», «¿Cómo decirlo sin ofender?», «¿Acaso importa?»: tres recursos distintos.",
    "7 min",
    [
      sec(
        "Tres figuras cercanas",
        "Interpelación (apóstrofe): dirigirse directamente a alguien presente o ausente: «Y ustedes, señores del consejo, ¿dónde estaban?». Duda fingida (dubitación): el orador finge no saber cómo expresarse para destacar algo: «¿Cómo calificar semejante actitud? ¿Negligencia? ¿Desprecio?». Pregunta retórica: afirmación encubierta.",
        [
          ["¿Cómo calificar esta decisión? ¿Error? ¿Temeridad?", "How to describe this decision? A mistake? Recklessness?"],
          ["Y usted, señora alcaldesa, ¿qué piensa hacer?", "And you, Madam Mayor, what do you intend to do?"],
        ],
        [
          mc(
            "«¿Cómo describir lo que sentí? ¿Alivio? ¿Rabia? Quizá las dos cosas.»",
            ["duda fingida", "interpelación", "pregunta real", "hipofora simple"],
            0,
            "El orador simula buscar la palabra."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Y tú, conciencia, ¿por qué callas?»",
        ["interpelación (apóstrofe)", "duda fingida", "pregunta real", "anáfora"],
        0,
        "Dirigirse a alguien o algo."
      ),
      mc(
        "«¿Acaso importa lo que opinen?»",
        ["pregunta retórica", "interpelación", "duda fingida", "hipofora"],
        0,
        "= No importa."
      ),
      fb("Completa (duda fingida).", "¿Cómo ___ semejante despropósito? ¿Error? ¿Mala fe? (dar un nombre o adjetivo a algo, infinitivo)", "calificar", "Infinitivo en la duda fingida."),
      fb("Completa (interpelación).", "Y ___, señores del jurado, ¿qué habrían hecho en su lugar?", "ustedes", "Interpelación."),
      mt(
        "Relaciona la figura con su definición.",
        [
          ["interpelación", "dirigirse directamente a alguien"],
          ["duda fingida", "simular no saber cómo decir algo"],
          ["pregunta retórica", "afirmación en forma de pregunta"],
        ],
        "Figuras de énfasis."
      ),
      toEs("How can one describe such cruelty?", "¿Cómo describir semejante crueldad?", "Duda fingida.", ["¿Cómo calificar semejante crueldad?", "¿Cómo describir tanta crueldad?"]),
      wo("Y ustedes, señores diputados, ¿dónde estaban cuando se tomó la decisión?", "Interpelación.", "And you, members of parliament, where were you when the decision was taken?"),
    ]
  ),
  L(
    "rhetorical-questions-5",
    "c2r-rhetorical-dialogue-reply",
    "Laboratorio de diálogo: responder a una pregunta retórica",
    "Tu interlocutor te lanza una pregunta retórica tramposa: ¿la ignoras, la contestas o la desactivas?",
    "7 min",
    [
      sec(
        "Desactivar la retórica",
        "Una pregunta retórica puede esconder una afirmación discutible: «¿Quién va a querer vivir en un barrio así?». Estrategias: contestarla literalmente («Pues, según las encuestas, el 60 % de los vecinos»), desvelar la afirmación implícita («Usted da por hecho que nadie quiere, y los datos dicen otra cosa») o reconducir («La pregunta no es quién quiere, sino qué necesitan»).",
        [
          ["Usted da por hecho que…, pero los datos dicen otra cosa.", "You take it for granted that…, but the data say otherwise."],
          ["La pregunta no es esa, sino…", "That's not the question; the question is…"],
        ],
        [
          mc(
            "«¿Quién en su sano juicio apoyaría esta ley?» Respuesta que la desactiva:",
            ["Según la última encuesta, más de la mitad de la población.", "Nadie, tiene usted razón.", "¡Qué pregunta tan tonta!", "No sé."],
            0,
            "Responder literalmente con datos."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Usted da ___ hecho que nadie la apoya.", "por", "Dar por hecho."),
      fb("Completa.", "La pregunta no es cuánto cuesta, ___ cuánto nos ahorra.", "sino", "No… sino…"),
      mc(
        "«¿Acaso no es obvio que la privatización mejora todo?» Respuesta que desvela la premisa:",
        ["Esa pregunta presupone algo que habría que demostrar.", "Sí, es obvio.", "Me da igual.", "¿Y usted qué sabe?"],
        0,
        "Señalar la presuposición."
      ),
      mc(
        "¿Cuál es la respuesta menos eficaz?",
        ["Quedarse callado dando por buena la afirmación implícita.", "Responder con datos.", "Desvelar la presuposición.", "Reformular la pregunta."],
        0,
        "El silencio concede."
      ),
      ms(
        "¿Qué estrategias desactivan una pregunta retórica tramposa?",
        ["contestarla literalmente con datos", "desvelar la afirmación implícita", "reformular la pregunta", "insultar al interlocutor"],
        [0, 1, 2],
        "El insulto desacredita a quien lo usa."
      ),
      toEs("That question takes for granted something that needs proving.", "Esa pregunta da por hecho algo que habría que demostrar.", "Desvelar la presuposición.", ["Esa pregunta presupone algo que habría que demostrar.", "Esa pregunta da por sentado algo que habría que demostrar."]),
      wo("La cuestión no es quién tiene la culpa, sino cómo lo solucionamos.", "Reconducir.", "The issue is not who's to blame, but how we fix it."),
    ]
  ),
  L(
    "rhetorical-questions-6",
    "c2r-rhetorical-mission-speech",
    "Misión real: un discurso de un minuto",
    "Escribe un breve discurso contra el cierre de la biblioteca de tu barrio usando al menos cuatro recursos de énfasis.",
    "8 min",
    [
      sec(
        "Modelo de discurso",
        "«¿Qué es una biblioteca? ¿Un edificio con libros? No: es el único lugar del barrio donde un niño puede estudiar en silencio. ¿Cuántos de ustedes aprendieron a leer aquí? ¿Cuántos encontraron aquí su primer trabajo? Y usted, señor concejal, ¿de verdad cree que esto es un gasto? Lo que está en juego no es un presupuesto: es el futuro de nuestros hijos.»",
        [
          ["Lo que está en juego no es un presupuesto: es el futuro.", "What's at stake isn't a budget: it's the future."],
        ],
        [
          ms(
            "¿Qué recursos aparecen en el modelo?",
            ["hipofora", "anáfora interrogativa", "interpelación", "hendida"],
            [0, 1, 2, 3],
            "Los cuatro."
          ),
        ]
      ),
    ],
    [
      fb("Completa la hipofora.", "¿Qué es una biblioteca? ¿Un edificio con libros? ___: es un refugio.", "No", "Respuesta propia."),
      fb("Completa la anáfora.", "¿Cuántos de ustedes ___ aquí su primer libro? (leer, pretérito)", "leyeron", "Pretérito de leer."),
      fb("Completa la interpelación.", "Y ___, señor concejal, ¿qué propone?", "usted", "Interpelación."),
      fb("Completa la hendida.", "Lo que está en ___ es el futuro de nuestros hijos.", "juego", "Estar en juego."),
      mc(
        "Mejor final para el discurso:",
        ["Salvemos la biblioteca: salvemos el barrio.", "Bueno, pues eso.", "Gracias por nada.", "No sé, ya veremos."],
        0,
        "Llamamiento con paralelismo."
      ),
      toEs("What's at stake is our children's future.", "Lo que está en juego es el futuro de nuestros hijos.", "Hendida.", ["Lo que está en juego es el porvenir de nuestros hijos."]),
      wo("¿Cuántos de ustedes aprendieron a leer en esta biblioteca?", "Pregunta al público.", "How many of you learned to read in this library?"),
    ]
  ),
  L(
    "rhetorical-questions-7",
    "c2r-rhetorical-vocab-spiral",
    "Repaso en espiral: figuras retóricas del C2",
    "Metáfora, hipérbole, anáfora, hipofora, interpelación, antítesis: identifica cada figura en un fragmento breve.",
    "7 min",
    [
      sec(
        "Mapa de figuras",
        "De pensamiento: pregunta retórica, hipofora, interpelación, duda fingida, antítesis, hipérbole. De repetición: anáfora, tríada, paralelismo. De significado: metáfora, metonimia, sinécdoque. Saber nombrarlas permite analizar discursos y, sobre todo, usarlas con intención.",
        [
          ["Unos trabajan de sol a sol; otros viven de las rentas.", "Antithesis."],
        ],
        [
          mc(
            "«Unos lo tienen todo; otros, nada.»",
            ["antítesis", "hipérbole", "metonimia", "hipofora"],
            0,
            "Oposición de ideas."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Te he llamado un millón de veces.»",
        ["hipérbole", "antítesis", "interpelación", "anáfora"],
        0,
        "Exageración."
      ),
      mc(
        "«¿Qué nos queda? La esperanza.»",
        ["hipofora", "metáfora", "tríada", "interpelación"],
        0,
        "Pregunta + respuesta propia."
      ),
      mc(
        "«Queremos pan. Queremos trabajo. Queremos dignidad.»",
        ["anáfora", "antítesis", "metonimia", "duda fingida"],
        0,
        "Repetición inicial."
      ),
      mc(
        "«Oh, Madrid, ¿por qué me tratas así?»",
        ["interpelación (apóstrofe)", "hipofora", "sinécdoque", "tríada"],
        0,
        "Dirigirse a la ciudad."
      ),
      mt(
        "Relaciona la figura con su tipo.",
        [
          ["anáfora", "repetición"],
          ["metáfora", "significado"],
          ["hipofora", "pensamiento / diálogo"],
        ],
        "Clasificación de figuras."
      ),
      fb("Completa.", "La ___ contrapone dos ideas opuestas.", "antítesis", "Antítesis."),
      wo("Unos construyen puentes mientras otros levantan muros.", "Antítesis.", "Some build bridges while others raise walls."),
    ]
  ),
  L(
    "job-interview-spanish-1",
    "c2r-interview-strengths-tone",
    "Contraste: fortaleza, fanfarronería y falsa modestia",
    "Tres respuestas a «¿Cuál es su mayor fortaleza?»: elige la que equilibra confianza y humildad.",
    "7 min",
    [
      sec(
        "El punto justo",
        "Fanfarronería: «Soy el mejor en todo». Falsa modestia: «Bueno, no sé, no destaco en nada». Equilibrio: nombrar la fortaleza + evidencia concreta + beneficio para la empresa: «Diría que destaco en la organización: en mi último puesto reduje los plazos de entrega un 20 %». Verbos útiles: destacar en, se me da bien, tener facilidad para.",
        [
          ["Diría que destaco en la resolución de problemas.", "I'd say I stand out at problem-solving."],
          ["Se me da bien trabajar bajo presión.", "I'm good at working under pressure."],
        ],
        [
          mc(
            "¿Qué respuesta es equilibrada?",
            ["Tengo facilidad para negociar: cerré tres acuerdos clave el año pasado.", "Soy perfecto para este puesto y para cualquier otro.", "No sé, la verdad es que no tengo fortalezas.", "Todo se me da genial."],
            0,
            "Fortaleza + evidencia."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Diría que ___ en la gestión de equipos. (sobresalir, verbo con «en»)", "destaco", "Destacar en."),
      fb("Completa.", "Se me ___ bien comunicar ideas complejas. (dar)", "da", "Dársele bien algo a alguien."),
      fb("Completa.", "Tengo ___ para los idiomas. (habilidad natural)", "facilidad", "Tener facilidad para."),
      mc(
        "¿Qué añade credibilidad a una fortaleza?",
        ["un ejemplo cuantificable", "un adjetivo más", "repetirla tres veces", "decir que es innata"],
        0,
        "Evidencia."
      ),
      ms(
        "¿Qué respuestas suenan a fanfarronería?",
        ["Nadie trabaja mejor que yo.", "Soy un genio de la informática.", "Se me da bien analizar datos; mi último informe se adoptó como modelo.", "No tengo ningún defecto."],
        [0, 1, 3],
        "La tercera equilibra fortaleza y prueba."
      ),
      toEs("I'd say my main strength is adaptability.", "Diría que mi principal fortaleza es la capacidad de adaptación.", "Condicional atenuador.", ["Diría que mi mayor fortaleza es la adaptabilidad.", "Diría que mi principal fortaleza es la adaptabilidad."]),
      wo("En mi último puesto coordiné un equipo de ocho personas.", "Evidencia concreta.", "In my last job I coordinated a team of eight people."),
    ]
  ),
  L(
    "job-interview-spanish-2",
    "c2r-interview-weakness-rewrite",
    "Taller de estilo: hablar de un punto de mejora",
    "Reescribe respuestas torpes a la pregunta por las debilidades: honestidad, contexto y plan de mejora.",
    "7 min",
    [
      sec(
        "La fórmula honesta",
        "1) Nombrar un punto de mejora real pero no crítico para el puesto. 2) Contexto: cuándo se notó. 3) Acción: qué se está haciendo para mejorar. 4) Resultado. Ejemplo: «Me costaba delegar. Al asumir la coordinación me di cuenta de que me sobrecargaba, así que empecé a asignar tareas con plazos claros y ahora el equipo es más autónomo». Evitar: «Soy demasiado perfeccionista» (tópico) o «No tengo debilidades».",
        [
          ["Me costaba hablar en público, así que me apunté a un curso.", "Public speaking was hard for me, so I signed up for a course."],
        ],
        [
          mc(
            "¿Qué respuesta es la más creíble?",
            ["Me costaba delegar; ahora planifico con el equipo y reparto tareas desde el principio.", "Soy demasiado perfeccionista.", "No tengo ninguna debilidad.", "Llego tarde a menudo."],
            0,
            "Punto real + acción."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Me ___ organizar mi tiempo cuando empecé a trabajar. (costar, imperfecto)", "costaba", "Costarle algo a alguien."),
      fb("Completa.", "Para mejorarlo, me ___ a un curso de oratoria. (apuntarse, pretérito)", "apunté", "Acción concreta."),
      fb("Completa.", "Es un aspecto en el que sigo ___. (trabajar, gerundio)", "trabajando", "Seguir + gerundio."),
      mc(
        "¿Por qué evitar «Soy demasiado perfeccionista»?",
        ["porque es un tópico que suena preparado", "porque es un insulto", "porque es gramaticalmente incorrecto", "porque es demasiado honesto"],
        0,
        "Resta credibilidad."
      ),
      mc(
        "¿Qué punto de mejora es arriesgado para un puesto de atención al cliente?",
        ["Me pongo nervioso cuando trato con clientes.", "Me cuesta delegar.", "Me costaba usar hojas de cálculo avanzadas.", "Hablaba poco en reuniones grandes."],
        0,
        "Afecta a una competencia central."
      ),
      toEs("It used to be hard for me to say no, but I've learned to prioritize.", "Me costaba decir que no, pero he aprendido a priorizar.", "Punto de mejora + acción.", ["Antes me costaba decir que no, pero he aprendido a priorizar.", "Me resultaba difícil decir que no, pero he aprendido a priorizar."]),
      wo("Es un aspecto que he mejorado mucho en los últimos dos años.", "Mostrar evolución.", "It's something I've improved a lot over the last two years."),
    ]
  ),
  L(
    "job-interview-spanish-3",
    "c2r-interview-star-method",
    "Transformaciones: el relato por competencias (STAR)",
    "Ordena situación, tarea, acción y resultado para responder a «Hábleme de una vez en que…».",
    "8 min",
    [
      sec(
        "Situación → Tarea → Acción → Resultado",
        "Situación: «En mi anterior empresa, un cliente importante amenazó con rescindir el contrato». Tarea: «Me encargaron recuperar su confianza». Acción: «Organicé reuniones semanales y rediseñé el servicio». Resultado: «Renovó por tres años y amplió el pedido un 15 %». Tiempos: imperfecto para el contexto, indefinido para las acciones.",
        [
          ["Me encargaron recuperar la relación con el cliente.", "I was tasked with rebuilding the client relationship."],
          ["Como resultado, el cliente renovó el contrato.", "As a result, the client renewed the contract."],
        ],
        [
          mc(
            "«Organicé reuniones semanales con el cliente» corresponde a…",
            ["la acción", "la situación", "la tarea", "el resultado"],
            0,
            "Lo que hiciste."
          ),
        ]
      ),
    ],
    [
      mc(
        "«El equipo estaba desmotivado y los plazos se acumulaban.»",
        ["situación", "acción", "resultado", "tarea"],
        0,
        "Contexto en imperfecto."
      ),
      mc(
        "«Al final, entregamos el proyecto con una semana de antelación.»",
        ["resultado", "situación", "tarea", "acción"],
        0,
        "Desenlace."
      ),
      fb("Completa (contexto).", "Cuando entré en la empresa, el departamento ___ sin dirección. (estar)", "estaba", "Imperfecto de contexto."),
      fb("Completa (acción).", "___ un nuevo sistema de seguimiento. (implantar, yo)", "Implanté", "Indefinido de acción."),
      fb("Completa (resultado).", "Como ___, las ventas aumentaron un 20 %.", "resultado", "Como resultado."),
      mc(
        "Orden correcto del relato:",
        ["situación → tarea → acción → resultado", "resultado → acción → tarea → situación", "acción → situación → resultado", "tarea → resultado → situación"],
        0,
        "Método STAR."
      ),
      wo("Me encargaron reducir los costes sin despedir a nadie.", "Tarea.", "I was asked to cut costs without laying anyone off."),
    ]
  ),
  L(
    "job-interview-spanish-4",
    "c2r-interview-closing-salary",
    "Laboratorio de diálogo: preguntas propias y salario",
    "Cierra la entrevista con preguntas inteligentes y responde a la pregunta por tus expectativas salariales con aplomo.",
    "7 min",
    [
      sec(
        "El cierre",
        "Preguntas del candidato: «¿Cómo sería un día típico en este puesto?», «¿Qué retos tiene el equipo a corto plazo?», «¿Cuáles son los próximos pasos del proceso?». Salario: dar una horquilla basada en el mercado: «Según mi experiencia y el mercado, mis expectativas se sitúan entre 38.000 y 42.000 euros brutos anuales, aunque estoy abierto a valorar el paquete completo».",
        [
          ["¿Cuáles son los próximos pasos del proceso?", "What are the next steps in the process?"],
          ["Mis expectativas se sitúan en una horquilla de…", "My expectations are in a range of…"],
        ],
        [
          mc(
            "Pregunta que demuestra interés real:",
            ["¿Qué retos principales tiene el equipo este año?", "¿Cuántas vacaciones hay?", "¿Puedo salir antes los viernes?", "No tengo preguntas."],
            0,
            "Interés por el trabajo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis expectativas se ___ entre 35.000 y 40.000 euros brutos. (situar)", "sitúan", "Situarse."),
      fb("Completa.", "Estoy abierto a ___ el paquete completo. (considerar)", "valorar", "Valorar = considerar."),
      fb("Completa.", "¿Cómo ___ un día típico en este puesto? (ser, condicional)", "sería", "Condicional de cortesía."),
      mc(
        "«Horquilla salarial» significa…",
        ["un rango entre un mínimo y un máximo", "una cifra exacta", "un bonus", "un impuesto"],
        0,
        "Rango."
      ),
      mc(
        "¿Qué respuesta a «¿Tiene alguna pregunta?» es la peor?",
        ["No, ninguna.", "¿Cuáles son los próximos pasos?", "¿Cómo se mide el éxito en este puesto?", "¿Qué valoran más en su equipo?"],
        0,
        "Desaprovecha la oportunidad."
      ),
      toEs("What would a typical day look like in this role?", "¿Cómo sería un día típico en este puesto?", "Pregunta del candidato.", ["¿Cómo sería un día normal en este puesto?", "¿Cómo es un día típico en este puesto?"]),
      wo("Según mi experiencia, mis expectativas se sitúan en torno a los cuarenta mil euros.", "Expectativa salarial.", "Based on my experience, my expectations are around forty thousand euros."),
    ]
  ),
  L(
    "job-interview-spanish-5",
    "c2r-interview-error-hunt",
    "Caza de errores: frases que hunden una entrevista",
    "Críticas al antiguo jefe, respuestas vagas, registro inadecuado: detecta el fallo y reformula.",
    "7 min",
    [
      sec(
        "Errores frecuentes",
        "Criticar a la empresa anterior: ✗ «Mi jefe era un inútil» → ✓ «Buscaba un entorno con más oportunidades de desarrollo». Vaguedad: ✗ «Hice muchas cosas» → ✓ ejemplos concretos. Registro coloquial: ✗ «Pues nada, currando por ahí» → ✓ «He trabajado en…». Tutear sin invitación en una entrevista formal.",
        [
          ["Buscaba un entorno con más proyección.", "I was looking for an environment with more growth."],
        ],
        [
          mc(
            "¿Cómo explicar que dejaste tu trabajo por un mal ambiente?",
            ["Buscaba un entorno más colaborativo.", "Mi jefe era insoportable.", "Todos eran unos vagos.", "Me echaron por nada."],
            0,
            "Enfoque positivo."
          ),
        ]
      ),
    ],
    [
      fb("Reformula.", "✗ Allí no aprendía nada. → ✓ Buscaba nuevos ___ profesionales.", "retos", "Enfoque positivo."),
      fb("Reformula el registro.", "✗ Estuve currando en una tienda. → ✓ ___ en una tienda. (trabajar, pretérito)", "Trabajé", "Registro neutro."),
      fb("Reformula.", "✗ Hice cosas de marketing. → ✓ Me ___ de las campañas en redes sociales. (encargarse, pretérito)", "encargué", "Precisión."),
      ms(
        "¿Qué frases conviene evitar?",
        ["Mi anterior empresa era un desastre.", "Pues, no sé, lo que surja.", "Tío, ¿y cuánto se cobra aquí?", "Me motiva especialmente el proyecto de expansión."],
        [0, 1, 2],
        "La última muestra interés."
      ),
      mc(
        "¿Qué respuesta a «¿Por qué quiere trabajar aquí?» es mejor?",
        ["Me atrae su apuesta por la innovación y creo que mi experiencia en datos puede aportar valor.", "Porque necesito dinero.", "Me pilla cerca de casa.", "Porque no me cogieron en otro sitio."],
        0,
        "Encaje con la empresa."
      ),
      toEs("I was looking for new professional challenges.", "Buscaba nuevos retos profesionales.", "Motivo positivo.", ["Buscaba nuevos desafíos profesionales.", "Estaba buscando nuevos retos profesionales."]),
      wo("Creo que mi experiencia encaja perfectamente con lo que buscan.", "Encaje.", "I think my experience fits perfectly with what you're looking for."),
    ]
  ),
  L(
    "job-interview-spanish-6",
    "c2r-interview-vocab-web",
    "Red de palabras: el léxico del currículum y la entrevista",
    "Trayectoria, perfil, competencias, incorporación, candidatura, proceso de selección: organiza el vocabulario profesional.",
    "7 min",
    [
      sec(
        "Palabras clave",
        "Trayectoria profesional (recorrido laboral). Perfil (conjunto de rasgos del candidato). Competencias (capacidades demostrables): trabajo en equipo, liderazgo, orientación a resultados. Candidatura (solicitud). Proceso de selección. Incorporación inmediata (empezar ya). Periodo de prueba. Jornada completa / parcial. Retribución (salario).",
        [
          ["Cuento con una sólida trayectoria en el sector.", "I have a solid track record in the sector."],
          ["Tengo disponibilidad de incorporación inmediata.", "I'm available to start immediately."],
        ],
        [
          mc(
            "«Incorporación inmediata» significa…",
            ["poder empezar a trabajar enseguida", "un contrato indefinido", "un ascenso", "un despido"],
            0,
            "Disponibilidad."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el término con su significado.",
        [
          ["trayectoria", "recorrido profesional"],
          ["retribución", "salario"],
          ["candidatura", "solicitud a un puesto"],
          ["periodo de prueba", "fase inicial de evaluación"],
        ],
        "Léxico profesional."
      ),
      fb("Completa.", "Mi ___ encaja con los requisitos de la oferta. (conjunto de rasgos profesionales)", "perfil", "Perfil."),
      fb("Completa.", "Cuento con una amplia ___ en el sector financiero.", "trayectoria", "Trayectoria."),
      fb("Completa.", "Le agradezco que haya tenido en cuenta mi ___.", "candidatura", "Candidatura."),
      ms(
        "¿Qué son competencias?",
        ["trabajo en equipo", "orientación a resultados", "liderazgo", "jornada parcial"],
        [0, 1, 2],
        "La jornada es una condición laboral."
      ),
      toEs("I'm available to start immediately.", "Tengo disponibilidad de incorporación inmediata.", "Léxico profesional.", ["Puedo incorporarme de inmediato.", "Tengo disponibilidad inmediata."]),
      wo("El proceso de selección consta de tres entrevistas y una prueba práctica.", "Léxico del proceso.", "The selection process consists of three interviews and a practical test."),
    ]
  ),
  L(
    "job-interview-spanish-7",
    "c2r-interview-mission-mock",
    "Misión real: simulacro de entrevista completo",
    "De la presentación inicial al cierre: responde a cinco preguntas encadenadas usando todo lo aprendido.",
    "9 min",
    [
      sec(
        "El guion de la entrevista",
        "1) «Hábleme de usted» → trayectoria en 60 segundos, del pasado al presente y al puesto. 2) «¿Por qué este puesto?» → encaje. 3) «Una fortaleza» → fortaleza + evidencia. 4) «Un punto de mejora» → real + acción. 5) «¿Alguna pregunta?» → pregunta inteligente. Registro: usted, condicional de cortesía, sin coloquialismos.",
        [
          ["Soy ingeniera industrial y llevo seis años en logística.", "I'm an industrial engineer and I've spent six years in logistics."],
        ],
        [
          mc(
            "«Hábleme de usted» se responde mejor con…",
            ["un resumen profesional orientado al puesto", "la historia de tu infancia", "tus aficiones solamente", "tu salario actual"],
            0,
            "Trayectoria relevante."
          ),
        ]
      ),
    ],
    [
      fb("Presentación.", "___ seis años trabajando en el sector logístico. (llevar, yo)", "Llevo", "Llevar + tiempo + gerundio."),
      fb("Encaje.", "Me ___ especialmente su apuesta por la sostenibilidad. (atraer)", "atrae", "Atraer."),
      fb("Fortaleza.", "Diría que ___ en la planificación. (sobresalir)", "destaco", "Destacar en."),
      fb("Mejora.", "Antes me ___ delegar, pero he aprendido a confiar en el equipo. (costar)", "costaba", "Costar."),
      mc(
        "Pregunta final adecuada:",
        ["¿Cómo se mide el éxito en este puesto durante el primer año?", "¿Hay cafetería?", "¿Esto es todo?", "¿Cuándo cobro?"],
        0,
        "Interés profesional."
      ),
      toEs("I've been working in logistics for six years.", "Llevo seis años trabajando en logística.", "Llevar + gerundio.", ["Llevo seis años en el sector de la logística.", "Hace seis años que trabajo en logística."]),
      wo("Muchas gracias por su tiempo; quedo a la espera de sus noticias.", "Cierre.", "Thank you very much for your time; I look forward to hearing from you."),
    ]
  ),
  L(
    "conflict-resolution-1",
    "c2r-conflict-deescalate",
    "Transformaciones: de la frase que enciende a la que calma",
    "Convierte acusaciones en mensajes en primera persona que desactivan la tensión.",
    "7 min",
    [
      sec(
        "Del «tú siempre» al «yo siento»",
        "Frases que escalan: «Tú siempre…», «Nunca…», «Es que eres…», «¡Cálmate!». Frases que desactivan: mensaje en primera persona («Me siento… cuando… porque…»), validar la emoción («Entiendo que estés molesto»), bajar el ritmo («Vamos a hablarlo con calma»), pedir en positivo («Me ayudaría que…»).",
        [
          ["Tú nunca me escuchas. → Me siento ignorada cuando hablo y miras el móvil.", "You never listen to me. → I feel ignored when I talk and you look at your phone."],
          ["¡Cálmate! → Entiendo que estés enfadado; vamos a hablarlo.", "Calm down! → I understand you're angry; let's talk about it."],
        ],
        [
          mc(
            "¿Qué frase desactiva la tensión?",
            ["Entiendo que estés frustrado; ¿lo hablamos con calma?", "¡Siempre haces lo mismo!", "Cálmate ya.", "Eres imposible."],
            0,
            "Validar + proponer."
          ),
        ]
      ),
    ],
    [
      fb("Valida la emoción.", "Entiendo que ___ molesto. (estar, tú)", "estés", "Entender que + subjuntivo (valoración)."),
      fb("Pide en positivo.", "Me ayudaría que me ___ antes de cambiar el plan. (avisar, tú)", "avisaras", "Condicional + imperfecto de subjuntivo."),
      fb("Primera persona.", "Me siento ___ cuando no me consultas. (apartar, participio)", "apartado", "Mensaje yo."),
      mc(
        "Transforma «Eres un desordenado»:",
        ["Me agobia ver la cocina así; ¿podemos organizarnos?", "Eres un desastre total.", "Siempre lo dejas todo tirado.", "Nunca cambiarás."],
        0,
        "Mensaje en primera persona + propuesta."
      ),
      ms(
        "¿Qué expresiones suelen escalar un conflicto?",
        ["Tú siempre…", "Nunca…", "Cálmate.", "Entiendo lo que dices."],
        [0, 1, 2],
        "La última valida."
      ),
      toEs("I feel frustrated when plans change at the last minute.", "Me siento frustrado cuando los planes cambian en el último momento.", "Mensaje yo.", ["Me siento frustrada cuando los planes cambian en el último momento.", "Me frustra que los planes cambien en el último momento."]),
      wo("Vamos a tomarnos un momento y hablarlo con calma.", "Bajar el ritmo.", "Let's take a moment and talk about it calmly."),
    ]
  ),
  L(
    "conflict-resolution-2",
    "c2r-conflict-acknowledge-perspective",
    "Laboratorio de diálogo: reconocer sin ceder",
    "Reconoce la perspectiva del otro sin renunciar a la tuya: «Entiendo tu punto de vista; al mismo tiempo…».",
    "7 min",
    [
      sec(
        "Reconocer ≠ dar la razón",
        "Fórmulas: «Entiendo que desde tu posición lo veas así», «Tiene sentido que te moleste», «Veo tu punto; al mismo tiempo, para mí es importante…», «Los dos queremos lo mismo: …». Evitar el «pero» que anula todo lo anterior; mejor «y», «al mismo tiempo», «a la vez».",
        [
          ["Entiendo que desde tu lugar lo veas así; al mismo tiempo, yo necesito…", "I understand that from where you stand you see it that way; at the same time, I need…"],
          ["Los dos queremos que el proyecto salga bien.", "We both want the project to succeed."],
        ],
        [
          mc(
            "¿Qué frase reconoce sin ceder?",
            ["Tiene sentido que te preocupe el presupuesto; a la vez, necesitamos cumplir el plazo.", "Tienes razón, lo que tú digas.", "No tienes razón en nada.", "Pero eso da igual."],
            0,
            "Reconocimiento + postura propia."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Entiendo que desde tu posición lo ___ así. (ver, tú)", "veas", "Subjuntivo tras entender que (valoración)."),
      fb("Completa.", "Tiene sentido que te ___ esta decisión. (molestar)", "moleste", "Tener sentido que + subjuntivo."),
      fb("Completa.", "Veo tu punto; al ___ tiempo, para mí es clave la calidad.", "mismo", "Al mismo tiempo."),
      mc(
        "¿Por qué evitar «Te entiendo, pero…»?",
        ["porque el «pero» suele anular el reconocimiento", "porque es incorrecto gramaticalmente", "porque es demasiado formal", "porque es un insulto"],
        0,
        "Mejor «y» / «al mismo tiempo»."
      ),
      mc(
        "«Los dos queremos lo mismo: que el equipo funcione.» Esta frase busca…",
        ["un interés común", "cerrar la conversación", "culpar al otro", "cambiar de tema"],
        0,
        "Terreno compartido."
      ),
      toEs("I see your point, and at the same time I need you to see mine.", "Entiendo tu punto de vista y, al mismo tiempo, necesito que entiendas el mío.", "Reconocer sin ceder.", ["Veo tu punto y, al mismo tiempo, necesito que veas el mío.", "Entiendo tu punto de vista y a la vez necesito que entiendas el mío."]),
      wo("Tiene sentido que te sientas así después de lo que pasó.", "Validación.", "It makes sense that you feel that way after what happened."),
    ]
  ),
  L(
    "conflict-resolution-3",
    "c2r-conflict-middle-ground",
    "Misión real: mediar entre dos vecinos",
    "Un vecino toca la batería; otra vecina trabaja de noche. Media hasta encontrar un término medio aceptable.",
    "8 min",
    [
      sec(
        "Los pasos de la mediación",
        "1) Escuchar a cada parte sin interrumpir. 2) Reformular sus necesidades: «Si le entiendo bien, usted necesita descansar por las mañanas». 3) Separar posiciones («que deje de tocar») de intereses (descansar). 4) Proponer opciones: horarios, insonorización, avisos. 5) Concretar el acuerdo: quién, qué, cuándo.",
        [
          ["Si le entiendo bien, usted necesita descansar de 8 a 14 h.", "If I understand correctly, you need to rest from 8 to 2."],
          ["¿Qué le parecería tocar solo por las tardes?", "How would you feel about only playing in the afternoons?"],
        ],
        [
          mc(
            "¿Cuál es el interés de la vecina, más allá de su posición?",
            ["poder dormir por la mañana", "que el vecino se mude", "que venda la batería", "denunciarlo"],
            0,
            "Interés de fondo."
          ),
        ]
      ),
    ],
    [
      fb("Reformula.", "Si le ___ bien, usted solo puede ensayar en casa. (entender, yo)", "entiendo", "Reformulación."),
      fb("Propón.", "¿Qué le ___ ensayar solo de 17 a 20 h? (parecer, condicional)", "parecería", "Propuesta suavizada."),
      fb("Concreta.", "Queda acordado que el señor Ruiz ___ solo por las tardes. (tocar, futuro)", "tocará", "Acuerdo concreto."),
      mc(
        "¿Qué opción es un término medio?",
        ["Tocar por las tardes y colocar paneles aislantes.", "Prohibir la batería.", "Tocar cuando quiera.", "Que la vecina se mude."],
        0,
        "Ambas partes ceden algo."
      ),
      ms(
        "¿Qué hace un buen mediador?",
        ["escucha a ambas partes", "reformula necesidades", "propone opciones", "decide quién tiene razón"],
        [0, 1, 2],
        "No actúa como juez."
      ),
      toEs("What if we looked for a solution that works for both of you?", "¿Y si buscamos una solución que les sirva a los dos?", "Propuesta de mediación.", ["¿Y si buscáramos una solución que les sirva a ambos?", "¿Y si buscamos una solución que funcione para los dos?"]),
      wo("Queda acordado que el ensayo terminará cada día a las ocho.", "Concretar el acuerdo.", "It is agreed that rehearsal will end at eight every day."),
    ]
  ),
  L(
    "conflict-resolution-4",
    "c2r-conflict-apology-contrast",
    "Contraste: la disculpa sincera y la falsa disculpa",
    "«Siento que te hayas ofendido» frente a «Siento haberte ofendido»: detecta las disculpas que no asumen responsabilidad.",
    "7 min",
    [
      sec(
        "Anatomía de una disculpa",
        "Sincera: asumir («Me equivoqué»), nombrar el daño («Sé que te hice sentir…»), reparar («¿Qué puedo hacer para arreglarlo?»), comprometerse («No volverá a ocurrir»). Falsa: trasladar la culpa («Siento que te hayas ofendido», «Si te has sentido mal, lo siento»), justificarse («Lo siento, pero es que tú…»).",
        [
          ["Siento haberte gritado; no estuvo bien.", "I'm sorry I shouted at you; it wasn't right."],
          ["✗ Siento que te lo hayas tomado así.", "✗ I'm sorry you took it that way."],
        ],
        [
          mc(
            "¿Cuál asume la responsabilidad?",
            ["Siento haberte hablado así; fue injusto.", "Siento que te hayas molestado.", "Si te ofendí, perdona, pero…", "Lo siento, pero tú empezaste."],
            0,
            "Sentir + infinitivo compuesto = asumir el acto propio."
          ),
        ]
      ),
    ],
    [
      fb("Asume.", "Siento ___ olvidado tu cumpleaños. (haber)", "haber", "Sentir + haber + participio."),
      fb("Nombra el daño.", "Sé que te ___ sentir fuera de lugar. (hacer, pretérito)", "hice", "Nombrar el daño."),
      fb("Repara.", "¿Qué puedo hacer para ___? (reparar, coloquial)", "arreglarlo", "Ofrecer reparación."),
      mc(
        "«Lo siento, pero es que tú también…» es una disculpa…",
        ["falsa: se justifica y traslada la culpa", "sincera", "muy formal", "reparadora"],
        0,
        "El «pero» la invalida."
      ),
      mc(
        "¿Qué diferencia hay entre «Siento que te hayas ofendido» y «Siento haberte ofendido»?",
        ["La primera se centra en la reacción del otro; la segunda asume el acto propio.", "Son idénticas.", "La primera es más sincera.", "La segunda es incorrecta."],
        0,
        "Responsabilidad."
      ),
      toEs("I'm sorry I didn't tell you in time.", "Siento no habértelo dicho a tiempo.", "Disculpa sincera.", ["Siento no habértelo contado a tiempo.", "Lamento no habértelo dicho a tiempo."]),
      wo("Me equivoqué y te pido perdón; no volverá a ocurrir.", "Disculpa completa.", "I was wrong and I apologize; it won't happen again."),
    ]
  ),
  L(
    "conflict-resolution-5",
    "c2r-conflict-story-detective",
    "Detective de textos: una mediación laboral",
    "Lee la transcripción de una mediación entre dos compañeros y analiza qué técnicas usa la mediadora.",
    "8 min",
    [
      sec(
        "La transcripción",
        "Mediadora: Gracias a los dos por venir. Primero, cada uno contará cómo lo vive, sin interrupciones. — Ana: Siento que mi trabajo no se reconoce. — Mediadora: Si te entiendo bien, lo que te duele es no ver tu nombre en el informe. — Pablo: Yo no lo hice con mala intención; simplemente no pensé en ello. — Mediadora: Entonces, los dos queréis un reparto justo del reconocimiento. ¿Qué proponéis?",
        [
          ["Cada uno contará cómo lo vive, sin interrupciones.", "Each of you will say how you see it, without interruptions."],
          ["Los dos queréis un reparto justo.", "You both want a fair distribution."],
        ],
        [
          mc(
            "¿Qué hace la mediadora al principio?",
            ["establece reglas: hablar sin interrupciones", "da la razón a Ana", "sanciona a Pablo", "termina la sesión"],
            0,
            "Normas de la conversación."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Si te entiendo bien, lo que te duele es…» es una técnica de…",
        ["reformulación", "acusación", "evasión", "interrupción"],
        0,
        "Reformular."
      ),
      mc(
        "«Los dos queréis un reparto justo» busca…",
        ["un interés común", "culpar a Pablo", "cerrar el debate", "cambiar de tema"],
        0,
        "Terreno compartido."
      ),
      mc(
        "«¿Qué proponéis?» traslada…",
        ["la búsqueda de soluciones a las partes", "la culpa a Ana", "la decisión a la empresa", "el problema a otro día"],
        0,
        "Protagonismo de las partes."
      ),
      fb("Completa según el texto.", "Siento que mi trabajo no se ___. (reconocer)", "reconoce", "Sentir que + indicativo (percepción)."),
      fb("Completa según el texto.", "No lo hice con mala ___.", "intención", "Con mala intención."),
      ms(
        "¿Qué técnicas de mediación aparecen?",
        ["establecer normas", "reformular", "identificar el interés común", "imponer una sanción"],
        [0, 1, 2],
        "No hay sanción."
      ),
      wo("Si te entiendo bien, lo que te preocupa es no sentirte valorada.", "Reformulación.", "If I understand you correctly, what worries you is not feeling valued."),
    ]
  ),
  L(
    "conflict-resolution-6",
    "c2r-conflict-vocab-web",
    "Red de palabras: el léxico del conflicto y la mediación",
    "Desavenencia, rencilla, malentendido, rencor, tregua, zanjar, limar asperezas: organiza el vocabulario del conflicto.",
    "7 min",
    [
      sec(
        "Del conflicto a la reconciliación",
        "Conflicto: desavenencia (desacuerdo), rencilla (disputa menor y repetida), roce (fricción), malentendido. Emociones: rencor, resentimiento, agravio (ofensa). Resolución: mediar, zanjar (cerrar definitivamente), limar asperezas (suavizar diferencias), hacer las paces, tender la mano, llegar a un entendimiento, tregua.",
        [
          ["Decidieron zanjar la discusión y seguir adelante.", "They decided to settle the argument and move on."],
          ["Una cena sirvió para limar asperezas.", "A dinner helped smooth things over."],
        ],
        [
          mc(
            "«Limar asperezas» significa…",
            ["suavizar diferencias", "pulir madera", "discutir más", "romper la relación"],
            0,
            "Reducir tensiones."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el término con su significado.",
        [
          ["zanjar", "resolver definitivamente"],
          ["rencilla", "disputa menor y repetida"],
          ["agravio", "ofensa"],
          ["tregua", "pausa en un conflicto"],
        ],
        "Léxico del conflicto."
      ),
      fb("Completa.", "Todo fue un ___: nadie quiso ofender a nadie.", "malentendido", "Malentendido."),
      fb("Completa.", "Tras años sin hablarse, por fin hicieron las ___.", "paces", "Hacer las paces."),
      fb("Completa.", "Todavía le guarda ___ por aquella traición.", "rencor", "Guardar rencor."),
      ms(
        "¿Qué expresiones indican reconciliación?",
        ["tender la mano", "hacer las paces", "limar asperezas", "guardar rencor"],
        [0, 1, 2],
        "Guardar rencor es lo contrario."
      ),
      toEs("They decided to bury the hatchet.", "Decidieron hacer las paces.", "Reconciliación.", ["Decidieron enterrar el hacha de guerra.", "Decidieron hacer las paces de una vez."]),
      wo("Una conversación sincera bastó para limar asperezas.", "Limar asperezas.", "A sincere conversation was enough to smooth things over."),
    ]
  ),
  L(
    "conflict-resolution-7",
    "c2r-conflict-spiral-subjunctive",
    "Repaso en espiral: la gramática de la mediación",
    "Subjuntivo de valoración, condicional de cortesía, sentir + infinitivo compuesto e hipótesis con «¿y si…?».",
    "7 min",
    [
      sec(
        "Estructuras clave",
        "Valorar emociones: «Es normal que te sientas así». Proponer: «¿Y si probáramos…?», «Propongo que cada uno…». Disculparse: «Siento haber…». Condicionar: «Siempre que los dos estéis de acuerdo…». Deseo de futuro: «Ojalá podamos…».",
        [
          ["Propongo que cada uno exponga su punto de vista.", "I suggest each of you set out your point of view."],
          ["Ojalá podamos dejar esto atrás.", "I hope we can put this behind us."],
        ],
        [
          mc(
            "«Propongo que cada uno ___ su versión.»",
            ["cuente", "cuenta", "contará", "contar"],
            0,
            "Proponer que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Valoración.", "Es normal que ___ enfadados. (estar, vosotros)", "estéis", "Es normal que + subjuntivo."),
      fb("Hipótesis.", "¿Y si ___ un turno cada uno? (probar, nosotros)", "probáramos", "¿Y si + imperfecto de subjuntivo?"),
      fb("Deseo.", "Ojalá ___ llegar a un acuerdo hoy. (poder, nosotros)", "podamos", "Ojalá + presente de subjuntivo."),
      fb("Condición.", "Siempre que los dos ___ de acuerdo, lo firmamos. (estar, vosotros)", "estéis", "Siempre que + subjuntivo."),
      mc(
        "«Siento no ___ antes.» (escucharte)",
        ["haberte escuchado", "que te escuché", "escucharte habido", "te haber escuchado"],
        0,
        "Sentir + no + haber + participio."
      ),
      toEs("I hope we can put this behind us.", "Ojalá podamos dejar esto atrás.", "Ojalá + subjuntivo.", ["Ojalá podamos superar esto.", "Espero que podamos dejar esto atrás."]),
      wo("Es normal que os sintáis así después de tanta tensión.", "Valoración.", "It's normal for you to feel this way after so much tension."),
    ]
  ),
  L(
    "historical-narrative-1",
    "c2r-history-preterite-imperfect",
    "Transformaciones: indefinido e imperfecto en el relato histórico",
    "Reescribe una cronología plana distribuyendo acciones (indefinido) y marco (imperfecto).",
    "7 min",
    [
      sec(
        "Primer plano y fondo",
        "Indefinido: hechos que hacen avanzar el relato («En 1808 las tropas francesas entraron en Madrid»). Imperfecto: contexto, situaciones, causas de fondo («El país atravesaba una grave crisis; la monarquía carecía de apoyos»). Imperfecto narrativo (estilo periodístico e historiográfico): «Dos días después, el rey abdicaba en su hijo» — da dramatismo a un hecho puntual.",
        [
          ["La población vivía en la miseria cuando estalló la revuelta.", "The population lived in poverty when the revolt broke out."],
          ["Meses después, el general moría en el exilio.", "Months later, the general died in exile. (narrative imperfect)"],
        ],
        [
          mc(
            "«En 1492 Colón ___ a América.» (hecho puntual)",
            ["llegó", "llegaba siempre", "había llegado ya", "llegaría antes"],
            0,
            "Hecho que avanza el relato."
          ),
        ]
      ),
    ],
    [
      fb("Marco.", "El imperio ___ una crisis económica profunda. (atravesar)", "atravesaba", "Imperfecto de contexto."),
      fb("Hecho.", "En 1810 ___ la revolución de Mayo. (estallar)", "estalló", "Indefinido de acción."),
      fb("Marco + hecho.", "Mientras la corte ___ en Aranjuez, estalló el motín. (residir)", "residía", "Imperfecto de fondo."),
      mc(
        "«Tres días después, el presidente dimitía.» Este imperfecto…",
        ["es un imperfecto narrativo que dramatiza un hecho puntual", "indica costumbre", "es un error", "expresa cortesía"],
        0,
        "Uso historiográfico y periodístico."
      ),
      ms(
        "¿Qué verbos son de marco (fondo)?",
        ["La ciudad contaba con 50.000 habitantes.", "Reinaba un clima de desconfianza.", "El ejército cruzó la frontera.", "La nobleza temía perder sus privilegios."],
        [0, 1, 3],
        "«Cruzó» es un hecho puntual."
      ),
      toEs("The country was going through a crisis when the war broke out.", "El país atravesaba una crisis cuando estalló la guerra.", "Marco + hecho.", ["El país vivía una crisis cuando estalló la guerra.", "El país atravesaba una crisis cuando comenzó la guerra."]),
      wo("La monarquía carecía de apoyos cuando estalló la revolución.", "Imperfecto + indefinido.", "The monarchy lacked support when the revolution broke out."),
    ]
  ),
  L(
    "historical-narrative-2",
    "c2r-history-error-hunt-tenses",
    "Caza de errores: tiempos cruzados en un relato histórico",
    "Un párrafo sobre la independencia de México con tiempos mal elegidos: localiza y corrige cada uno.",
    "7 min",
    [
      sec(
        "Errores típicos",
        "Usar imperfecto para una acción puntual que avanza el relato: ✗ «El 16 de septiembre de 1810, Hidalgo lanzaba el Grito de Dolores» (válido solo como imperfecto narrativo, con intención estilística). Usar indefinido para una situación de fondo: ✗ «La sociedad novohispana estuvo dividida en castas» → mejor «estaba dividida» si es marco. Perder el pluscuamperfecto para lo anterior.",
        [
          ["La sociedad novohispana estaba dividida en castas.", "New Spain's society was divided into castes."],
          ["Hidalgo, que había estudiado teología, lanzó el Grito.", "Hidalgo, who had studied theology, issued the Cry."],
        ],
        [
          mc(
            "Corrige: «Cuando Hidalgo lanzó el Grito, ya conspiró durante meses.»",
            ["conspiró → llevaba meses conspirando / había conspirado", "lanzó → lanzaba", "Cuando → Mientras", "No hay error"],
            0,
            "Anterioridad → pluscuamperfecto o llevar + gerundio."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Los criollos ___ excluidos de los altos cargos. (el alumno puso: fueron; es un marco)", "estaban", "Situación de fondo → imperfecto."),
      fb("Corrige.", "En 1821 México ___ su independencia. (el alumno puso: conseguía; hecho sin intención estilística)", "consiguió", "Hecho puntual → indefinido."),
      fb("Corrige.", "Cuando llegó la noticia, el virrey ya ___ huido. (el alumno puso: huyó)", "había", "Anterioridad → pluscuamperfecto."),
      mc(
        "«La guerra duró once años.» ¿Por qué indefinido aunque sea largo?",
        ["porque se presenta como un periodo cerrado y delimitado", "porque es un error", "porque es una costumbre", "porque es futuro"],
        0,
        "Duración delimitada."
      ),
      mc(
        "¿Qué frase está bien?",
        ["Durante la colonia, el comercio estaba controlado por la Corona.", "Durante la colonia, el comercio estuvo controlando siempre la Corona.", "Durante la colonia, el comercio controló a la Corona siempre.", "Durante la colonia, el comercio había estado controlaba."],
        0,
        "Marco en imperfecto."
      ),
      toEs("The war lasted eleven years.", "La guerra duró once años.", "Periodo cerrado.", ["La guerra se prolongó durante once años."]),
      wo("Hidalgo, que había estudiado teología, encabezó la rebelión.", "Pluscuamperfecto en relativa.", "Hidalgo, who had studied theology, led the rebellion."),
    ]
  ),
  L(
    "historical-narrative-3",
    "c2r-history-pluperfect-depth",
    "Laboratorio de textos: profundidad temporal con el pluscuamperfecto",
    "Inserta antecedentes en un relato: lo que ya había ocurrido antes del momento principal.",
    "7 min",
    [
      sec(
        "Mirar hacia atrás desde el pasado",
        "Momento principal (indefinido): «En 1936 estalló la guerra». Antecedente (pluscuamperfecto): «La República había aprobado reformas que habían dividido al país». Marcadores: ya, antes, previamente, hacía x años que, hasta entonces. Pretérito anterior (hubo + participio) en textos literarios: «Apenas hubo terminado el discurso, estalló el aplauso».",
        [
          ["Cuando estalló la guerra, el país ya había vivido años de tensión.", "When the war broke out, the country had already lived through years of tension."],
          ["Apenas hubo firmado el tratado, se retiró.", "No sooner had he signed the treaty than he withdrew."],
        ],
        [
          mc(
            "«Cuando llegaron los refuerzos, la ciudad ya ___.» (rendirse)",
            ["se había rendido", "se rindió", "se rendía", "se rendirá"],
            0,
            "Anterior a otro pasado."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Hasta entonces, nadie ___ cuestionado la autoridad del rey. (haber)", "había", "Pluscuamperfecto."),
      fb("Completa.", "Hacía diez años que el país no ___ elecciones libres. (celebrar, imperfecto)", "celebraba", "Hacía + tiempo + que + imperfecto."),
      fb("Completa (pretérito anterior).", "Apenas ___ terminado la batalla, comenzó el saqueo. (haber, pretérito anterior)", "hubo", "Hubo + participio."),
      mc(
        "El pretérito anterior (hubo llegado) aparece sobre todo en…",
        ["textos literarios o muy formales", "conversaciones informales", "mensajes de texto", "el habla infantil"],
        0,
        "Uso culto."
      ),
      ms(
        "¿Qué marcadores acompañan al pluscuamperfecto?",
        ["ya", "previamente", "hasta entonces", "mañana"],
        [0, 1, 2],
        "Mañana es futuro."
      ),
      toEs("By then, the king had already abdicated.", "Para entonces, el rey ya había abdicado.", "Pluscuamperfecto.", ["Para entonces el rey ya había abdicado.", "En aquel momento, el rey ya había abdicado."]),
      wo("Cuando se firmó la paz, miles de personas ya habían abandonado el país.", "Profundidad temporal.", "When peace was signed, thousands had already left the country."),
    ]
  ),
  L(
    "historical-narrative-4",
    "c2r-history-historical-present",
    "Contraste: el presente histórico",
    "«En 1492 Colón llega a América»: el presente que acerca el pasado. Cuándo se usa y cómo mantener la coherencia.",
    "7 min",
    [
      sec(
        "Acercar el pasado",
        "El presente histórico narra hechos pasados en presente para darles viveza: «En 1519 Cortés desembarca en Veracruz». Frecuente en cronologías, divulgación y biografías. Regla: coherencia; si el eje es presente, lo anterior va en perfecto/indefinido y lo posterior en futuro: «Cortés, que ha perdido a sus hombres, llegará a Tenochtitlan meses después».",
        [
          ["En 1605 se publica la primera parte del Quijote.", "In 1605 the first part of Don Quixote is published."],
          ["Cervantes, que ha combatido en Lepanto, escribirá su obra maestra años después.", "Cervantes, who has fought at Lepanto, will write his masterpiece years later."],
        ],
        [
          mc(
            "Con presente histórico, un hecho posterior se expresa en…",
            ["futuro", "pluscuamperfecto", "imperfecto", "presente de subjuntivo"],
            0,
            "Futuro de posterioridad."
          ),
        ]
      ),
    ],
    [
      fb("Presente histórico.", "En 1969 el ser humano ___ a la Luna. (llegar)", "llega", "Presente histórico."),
      fb("Posterioridad.", "Frida Kahlo, que sufre un grave accidente en 1925, ___ a pintar durante su convalecencia. (empezar, futuro)", "empezará", "Futuro de posterioridad."),
      fb("Anterioridad.", "Bolívar, que ___ estudiado en Europa, regresa a Venezuela. (haber, presente)", "ha", "Perfecto como anterioridad al eje presente."),
      mc(
        "¿Dónde es más frecuente el presente histórico?",
        ["cronologías y textos divulgativos", "contratos", "recetas", "cartas de reclamación"],
        0,
        "Viveza narrativa."
      ),
      mc(
        "¿Qué fragmento es incoherente?",
        ["En 1810 estalla la revolución y el virrey huyó.", "En 1810 estalla la revolución y el virrey huye.", "En 1810 estalló la revolución y el virrey huyó.", "En 1810 estalla la revolución; el virrey huirá días después."],
        0,
        "Mezcla presente e indefinido sin motivo."
      ),
      toEs("In 1936 the war breaks out.", "En 1936 estalla la guerra.", "Presente histórico.", ["En 1936 comienza la guerra."]),
      wo("En 1605 se publica la primera parte del Quijote.", "Presente histórico.", "In 1605 the first part of Don Quixote is published."),
    ]
  ),
  L(
    "historical-narrative-5",
    "c2r-history-simultaneous-lines",
    "Taller de estilo: narrar líneas temporales simultáneas",
    "Mientras en Madrid…, en Buenos Aires…: organiza hechos paralelos en distintos lugares con marcadores precisos.",
    "8 min",
    [
      sec(
        "Marcadores de simultaneidad y cambio de escenario",
        "Simultaneidad: mientras (tanto), entretanto, al mismo tiempo, paralelamente, simultáneamente. Cambio de escenario: al otro lado del Atlántico, en la metrópoli, entre tanto en… Retomar un hilo: volviendo a…, de regreso a… Secuencia: poco después, a raíz de, a partir de entonces.",
        [
          ["Mientras en Cádiz se redactaba la Constitución, en América estallaban las revueltas.", "While the Constitution was being drafted in Cádiz, revolts broke out in America."],
          ["Entretanto, al otro lado del Atlántico, el virrey reunía tropas.", "Meanwhile, across the Atlantic, the viceroy was gathering troops."],
        ],
        [
          mc(
            "Marcador para cambiar de escenario:",
            ["Al otro lado del Atlántico,", "Por consiguiente,", "Es decir,", "En resumen,"],
            0,
            "Cambio de lugar."
          ),
        ]
      ),
    ],
    [
      fb("Simultaneidad.", "___ en Europa estallaba la guerra, América vivía un periodo de expansión.", "Mientras", "Mientras + imperfecto."),
      fb("Simultaneidad.", "Entre___, el Gobierno negociaba en secreto.", "tanto", "Entretanto."),
      fb("Retomar.", "___ a Madrid, la situación se había vuelto insostenible.", "Volviendo", "Volviendo a…"),
      mc(
        "«A raíz de la derrota, el rey convocó las Cortes.» «A raíz de» indica…",
        ["causa y origen temporal", "simultaneidad", "contraste", "finalidad"],
        0,
        "A raíz de = como consecuencia de."
      ),
      ms(
        "¿Qué marcadores expresan simultaneidad?",
        ["paralelamente", "al mismo tiempo", "entretanto", "a raíz de"],
        [0, 1, 2],
        "A raíz de = causa."
      ),
      toEs("Meanwhile, on the other side of the Atlantic, the colonies were rebelling.", "Entretanto, al otro lado del Atlántico, las colonias se sublevaban.", "Simultaneidad + escenario.", ["Mientras tanto, al otro lado del Atlántico, las colonias se rebelaban.", "Entretanto, al otro lado del Atlántico, las colonias se rebelaban."]),
      wo("Paralelamente, en la capital crecía el descontento popular.", "Simultaneidad.", "At the same time, popular discontent was growing in the capital."),
    ]
  ),
  L(
    "historical-narrative-6",
    "c2r-history-timeline-mission",
    "Misión real: de la cronología al relato",
    "Convierte una tabla de fechas en un párrafo histórico coherente con conectores, tiempos y profundidad temporal.",
    "8 min",
    [
      sec(
        "La cronología",
        "1808: invasión napoleónica de España. 1810: comienzan los movimientos de independencia en América. 1812: se aprueba la Constitución de Cádiz. 1814: Fernando VII regresa y la anula. 1824: batalla de Ayacucho, fin del dominio español en Sudamérica. Tarea: narrar con causa-efecto, simultaneidad y anterioridad.",
        [
          ["A raíz de la invasión napoleónica, estallaron movimientos independentistas.", "As a result of the Napoleonic invasion, independence movements broke out."],
        ],
        [
          mc(
            "¿Qué relación hay entre 1808 y 1810?",
            ["causa-efecto", "simultaneidad", "contraste", "ninguna"],
            0,
            "El vacío de poder favoreció las independencias."
          ),
        ]
      ),
    ],
    [
      fb("Relato.", "Cuando Fernando VII regresó en 1814, las Cortes ya ___ aprobado la Constitución. (haber)", "habían", "Anterioridad."),
      fb("Relato.", "___ de la invasión de 1808, se produjo un vacío de poder. (como consecuencia, dos palabras)", "A raíz", "Causa-origen."),
      fb("Relato.", "Diez años después, en Ayacucho, ___ el dominio español en Sudamérica. (terminar, indefinido)", "terminó", "Hecho puntual."),
      mc(
        "¿Qué conector enlaza 1812 y 1814 mostrando contraste?",
        ["Sin embargo, apenas dos años después, el rey la anuló.", "Por ejemplo, el rey la anuló.", "Es decir, el rey la anuló.", "Asimismo, el rey la anuló."],
        0,
        "Contraste."
      ),
      mc(
        "Mejor frase de cierre del relato:",
        ["La batalla de Ayacucho puso fin, en 1824, a tres siglos de dominio español en Sudamérica.", "Y así fue todo.", "Luego pasaron más cosas.", "Ayacucho, 1824, fin."],
        0,
        "Cierre con perspectiva."
      ),
      toEs("Barely two years later, the king annulled it.", "Apenas dos años después, el rey la anuló.", "Relato histórico.", ["Apenas dos años más tarde, el rey la anuló.", "Solo dos años después, el rey la derogó."]),
      wo("La invasión napoleónica provocó un vacío de poder en las colonias.", "Causa-efecto.", "The Napoleonic invasion caused a power vacuum in the colonies."),
    ]
  ),
  L(
    "historical-narrative-7",
    "c2r-history-hindsight-perspective",
    "Contraste: la perspectiva del historiador",
    "«Aquel día, sin saberlo, firmaba su sentencia»: el narrador que conoce el desenlace. Futuro del pasado, anticipación y valoración.",
    "7 min",
    [
      sec(
        "Narrar sabiendo el final",
        "Anticipación (prolepsis): «Aquella decisión le costaría el trono». Condicional como futuro del pasado: «Años después, lo reconocería en sus memorias». Iba a + infinitivo: «Nadie imaginaba que aquella guerra iba a durar tres años». Valoración: «paradójicamente», «a la postre» (al final), «como se vería más tarde».",
        [
          ["Aquella decisión le costaría el trono.", "That decision would cost him the throne."],
          ["A la postre, la reforma fracasó.", "In the end, the reform failed."],
        ],
        [
          mc(
            "«Nadie sabía entonces que aquella tregua ___ solo un mes.»",
            ["duraría", "duró antes", "dura", "durase ya"],
            0,
            "Futuro del pasado → condicional."
          ),
        ]
      ),
    ],
    [
      fb("Anticipación.", "Aquel error le ___ la vida. (costar, condicional)", "costaría", "Condicional de posterioridad."),
      fb("Anticipación.", "Nadie imaginaba que la guerra ___ a durar tanto. (ir, imperfecto)", "iba", "Iba a + infinitivo."),
      fb("Valoración.", "A la ___, la reforma resultó un fracaso.", "postre", "A la postre = al final."),
      mc(
        "«Paradójicamente, el tratado de paz sembró la semilla de la siguiente guerra.» El adverbio expresa…",
        ["una valoración del historiador", "una fecha", "un lugar", "una cita"],
        0,
        "Perspectiva."
      ),
      mc(
        "«Como se vería más tarde» introduce…",
        ["una anticipación de hechos posteriores", "un recuerdo del pasado", "una hipótesis irreal", "una cita textual"],
        0,
        "Prolepsis."
      ),
      toEs("Years later, he would admit it in his memoirs.", "Años después, lo reconocería en sus memorias.", "Condicional de posterioridad.", ["Años más tarde, lo admitiría en sus memorias.", "Años después lo reconocería en sus memorias."]),
      wo("Aquel día, sin saberlo, estaba firmando su propia sentencia.", "Perspectiva retrospectiva.", "That day, without knowing it, he was signing his own sentence."),
    ]
  ),
  L(
    "historical-narrative-8",
    "c2r-history-story-detective",
    "Detective de textos: análisis de un fragmento historiográfico",
    "Lee un fragmento y analiza la función de cada tiempo verbal y la postura del historiador.",
    "8 min",
    [
      sec(
        "El fragmento",
        "«La ciudad vivía un periodo de calma aparente cuando, en la primavera de 1871, estalló la epidemia. Las autoridades, que habían ignorado los informes médicos durante meses, reaccionaron tarde. En pocas semanas, un tercio de la población abandonaba la capital. Nadie podía prever entonces que aquella crisis transformaría para siempre el urbanismo de la ciudad.»",
        [
          ["La ciudad vivía un periodo de calma aparente.", "The city was living through a period of apparent calm."],
          ["Aquella crisis transformaría para siempre el urbanismo.", "That crisis would transform urban planning forever."],
        ],
        [
          mc(
            "«Vivía» cumple la función de…",
            ["marco o fondo", "hecho puntual", "anticipación", "anterioridad"],
            0,
            "Imperfecto de contexto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Habían ignorado» expresa…",
        ["anterioridad respecto al estallido", "posterioridad", "simultaneidad", "hipótesis"],
        0,
        "Pluscuamperfecto."
      ),
      mc(
        "«Un tercio de la población abandonaba la capital» es…",
        ["un imperfecto narrativo que dramatiza", "un marco descriptivo neutro", "una costumbre", "un error"],
        0,
        "Imperfecto narrativo."
      ),
      mc(
        "«Transformaría» indica…",
        ["anticipación desde la perspectiva del historiador", "cortesía", "condición", "probabilidad presente"],
        0,
        "Futuro del pasado."
      ),
      mc(
        "¿Qué critica implícitamente el historiador?",
        ["la tardanza de las autoridades", "a los médicos", "a los ciudadanos que huyeron", "el urbanismo moderno"],
        0,
        "«Habían ignorado los informes… reaccionaron tarde»."
      ),
      fb("Completa según el texto.", "La ciudad vivía un periodo de calma ___. (que parece pero no es)", "aparente", "Calma aparente."),
      ms(
        "¿Qué tiempos aparecen y con qué función?",
        ["imperfecto de marco", "indefinido de acción", "pluscuamperfecto de anterioridad", "futuro de subjuntivo"],
        [0, 1, 2],
        "No hay futuro de subjuntivo."
      ),
      wo("Las autoridades, que habían ignorado los informes, reaccionaron tarde.", "Pluscuamperfecto en relativa.", "The authorities, who had ignored the reports, reacted late."),
    ]
  ),
  L(
    "historical-narrative-9",
    "c2r-history-vocab-web",
    "Red de palabras: el léxico de la historia",
    "Auge, declive, apogeo, ocaso, sublevación, abdicación, tratado, hegemonía: organiza el vocabulario de los procesos históricos.",
    "7 min",
    [
      sec(
        "Procesos y acontecimientos",
        "Ciclo: surgimiento → auge → apogeo → declive → ocaso / caída. Conflicto: sublevación, levantamiento, insurrección, golpe de Estado, contienda. Poder: hegemonía, dinastía, abdicación, sucesión, regencia. Paz: tratado, armisticio, tregua, capitulación. Cambio: reforma, ruptura, transición.",
        [
          ["El imperio alcanzó su apogeo en el siglo XVI.", "The empire reached its peak in the 16th century."],
          ["Tras la derrota, el ejército firmó la capitulación.", "After the defeat, the army signed the surrender."],
        ],
        [
          mc(
            "El momento de máximo esplendor es el…",
            ["apogeo", "ocaso", "declive", "armisticio"],
            0,
            "Apogeo = cumbre."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el término con su definición.",
        [
          ["abdicación", "renuncia al trono"],
          ["armisticio", "suspensión de hostilidades"],
          ["hegemonía", "supremacía de un Estado sobre otros"],
          ["ocaso", "decadencia final"],
        ],
        "Léxico histórico."
      ),
      fb("Completa.", "Tras siglos de esplendor, comenzó el lento ___ del imperio. (decadencia)", "declive", "Declive."),
      fb("Completa.", "El ___ de Versalles puso fin a la Primera Guerra Mundial. (acuerdo de paz)", "tratado", "Tratado."),
      fb("Completa.", "La ___ militar fracasó en pocas horas. (levantamiento armado)", "sublevación", "Sublevación."),
      mc(
        "Ordena: (a) apogeo (b) surgimiento (c) ocaso (d) auge",
        ["b, d, a, c", "a, b, c, d", "d, a, b, c", "c, a, d, b"],
        0,
        "Ciclo histórico."
      ),
      toEs("The empire reached its peak in the 16th century.", "El imperio alcanzó su apogeo en el siglo XVI.", "Léxico histórico.", ["El imperio alcanzó su máximo esplendor en el siglo XVI.", "El imperio llegó a su apogeo en el siglo XVI."]),
      wo("Tras la abdicación del rey, se abrió un periodo de regencia.", "Léxico del poder.", "After the king's abdication, a period of regency began."),
    ]
  ),
  L(
    "historical-narrative-10",
    "c2r-history-spiral-review",
    "Repaso en espiral: narrar la historia con todo el C2",
    "Tiempos del pasado, pasiva, participio absoluto, estilo indirecto y conectores en un solo relato histórico.",
    "8 min",
    [
      sec(
        "Recursos combinados",
        "Participio absoluto: «Firmada la paz, las tropas regresaron». Pasiva de acción: «La ciudad fue tomada en 1492». Se impersonal: «Se decretó el estado de sitio». Estilo indirecto: «El general declaró que no se rendiría». Anticipación: «Aquella promesa no se cumpliría jamás».",
        [
          ["Firmada la paz, las tropas regresaron a sus cuarteles.", "Once peace was signed, the troops returned to their barracks."],
          ["El general declaró que no se rendiría.", "The general declared that he would not surrender."],
        ],
        [
          mc(
            "«___ la paz, comenzó la reconstrucción.» (firmar)",
            ["Firmada", "Firmando", "Firmó", "Firmaba"],
            0,
            "Participio absoluto."
          ),
        ]
      ),
    ],
    [
      fb("Pasiva.", "Granada ___ tomada por los Reyes Católicos en 1492.", "fue", "Pasiva perifrástica."),
      fb("Se impersonal.", "Se ___ el toque de queda en toda la ciudad. (decretar, indefinido)", "decretó", "Pasiva refleja."),
      fb("Estilo indirecto.", "«No me rendiré.» → Declaró que no se ___.", "rendiría", "Futuro → condicional."),
      fb("Anticipación.", "Aquella promesa no se ___ jamás. (cumplir, condicional)", "cumpliría", "Futuro del pasado."),
      mc(
        "«Derrotado el ejército, el rey huyó.» equivale a…",
        ["Una vez que el ejército fue derrotado, el rey huyó.", "El rey derrotó al ejército y huyó.", "El ejército huyó del rey.", "El rey fue derrotado por el ejército."],
        0,
        "Participio absoluto = una vez que…"
      ),
      toEs("Once the treaty was signed, the war ended.", "Firmado el tratado, la guerra terminó.", "Participio absoluto.", ["Una vez firmado el tratado, la guerra terminó.", "Firmado el tratado, terminó la guerra."]),
      wo("Tomada la capital, los rebeldes proclamaron la república.", "Participio absoluto.", "Once the capital was taken, the rebels proclaimed the republic."),
    ]
  ),
  L(
    "science-technology-spanish-1",
    "c2r-science-hypothesis-language",
    "Transformaciones: el lenguaje de la hipótesis",
    "Convierte afirmaciones categóricas en hipótesis falsables y resultados con la cautela propia de la ciencia.",
    "7 min",
    [
      sec(
        "Formular, contrastar, concluir",
        "Hipótesis: «Se plantea la hipótesis de que…», «Cabe suponer que…», «Si X, entonces cabría esperar Y». Contraste: «Los datos corroboran / refutan / no permiten descartar…». Conclusión cautelosa: «Los resultados apuntan a…», «Se requieren estudios adicionales». Falsable = que puede demostrarse falsa con un experimento.",
        [
          ["Se plantea la hipótesis de que el compuesto reduce la inflamación.", "It is hypothesized that the compound reduces inflammation."],
          ["Los datos no permiten descartar un efecto placebo.", "The data do not rule out a placebo effect."],
        ],
        [
          mc(
            "¿Qué enunciado es una hipótesis falsable?",
            ["Si el fármaco es eficaz, el grupo tratado mostrará menos síntomas que el grupo control.", "El fármaco es mágico.", "La ciencia lo sabe todo.", "Quizá algo pase algún día."],
            0,
            "Predice un resultado contrastable."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Los resultados ___ la hipótesis inicial. (confirmar, término científico)", "corroboran", "Corroborar."),
      fb("Completa.", "Los datos no permiten ___ otras explicaciones. (excluir)", "descartar", "Descartar."),
      fb("Completa.", "Cabe ___ que el efecto sea mayor en pacientes jóvenes. (pensar como hipótesis)", "suponer", "Cabe suponer."),
      mc(
        "Transforma «Este gen causa la enfermedad» en conclusión cautelosa:",
        ["Los resultados apuntan a una posible relación entre este gen y la enfermedad.", "Este gen causa la enfermedad seguro.", "Está clarísimo que es el gen.", "El gen es culpable."],
        0,
        "Atenuación científica."
      ),
      mt(
        "Relaciona el verbo con su sentido.",
        [
          ["corroborar", "confirmar"],
          ["refutar", "demostrar que es falso"],
          ["replicar", "repetir un experimento"],
        ],
        "Léxico científico."
      ),
      toEs("Further studies are required to confirm these results.", "Se requieren estudios adicionales para confirmar estos resultados.", "Cautela científica.", ["Se necesitan más estudios para confirmar estos resultados.", "Son necesarios estudios adicionales para confirmar estos resultados."]),
      wo("Si la hipótesis es correcta, cabría esperar una reducción de los síntomas.", "Predicción.", "If the hypothesis is correct, a reduction in symptoms would be expected."),
    ]
  ),
  L(
    "science-technology-spanish-2",
    "c2r-tech-disruption-vocab",
    "Red de palabras: innovación y disrupción",
    "Disruptivo, obsolescencia, escalable, prototipo, brecha digital, algoritmo: organiza el léxico de la tecnología.",
    "7 min",
    [
      sec(
        "Palabras de la innovación",
        "Innovación incremental (mejora) frente a disruptiva (cambia las reglas del mercado). Obsolescencia (programada): envejecimiento de un producto (provocado). Escalable: que puede crecer sin perder eficiencia. Prototipo, versión beta. Brecha digital: desigualdad en el acceso a la tecnología. Algoritmo, inteligencia artificial, aprendizaje automático, macrodatos.",
        [
          ["La plataforma es fácilmente escalable.", "The platform is easily scalable."],
          ["La brecha digital afecta sobre todo a las personas mayores.", "The digital divide mainly affects older people."],
        ],
        [
          mc(
            "Una innovación que redefine las reglas de un sector es…",
            ["disruptiva", "incremental", "obsoleta", "escalable"],
            0,
            "Disrupción."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el término con su definición.",
        [
          ["obsolescencia programada", "vida útil limitada a propósito"],
          ["escalable", "capaz de crecer sin perder eficiencia"],
          ["brecha digital", "desigualdad en el acceso tecnológico"],
          ["prototipo", "primer modelo de prueba"],
        ],
        "Léxico tecnológico."
      ),
      fb("Completa.", "El móvil dejó de funcionar a los dos años: sospecho de la obsolescencia ___.", "programada", "Obsolescencia programada."),
      fb("Completa.", "Los ___ (grandes volúmenes de datos) permiten predecir tendencias de consumo.", "macrodatos", "Macrodatos = big data."),
      fb("Completa.", "El aprendizaje ___ permite a las máquinas mejorar con la experiencia.", "automático", "Aprendizaje automático = machine learning."),
      mc(
        "¿Qué innovación es incremental?",
        ["una batería que dura un 10 % más", "el primer teléfono inteligente", "internet", "la imprenta"],
        0,
        "Mejora de lo existente."
      ),
      toEs("Artificial intelligence could widen the digital divide.", "La inteligencia artificial podría ampliar la brecha digital.", "Léxico tecnológico.", ["La inteligencia artificial podría agrandar la brecha digital.", "La IA podría ampliar la brecha digital."]),
      wo("La empresa lanzó una versión beta para probar el prototipo con usuarios reales.", "Léxico.", "The company launched a beta version to test the prototype with real users."),
    ]
  ),
  L(
    "science-technology-spanish-3",
    "c2r-science-popularize",
    "Taller de estilo: divulgar sin simplificar en exceso",
    "Traduce un resumen técnico a un texto divulgativo para el gran público sin traicionar el contenido.",
    "8 min",
    [
      sec(
        "Del paper al periódico",
        "Técnico: «Se observó una reducción estadísticamente significativa de la expresión génica asociada a la senescencia celular». Divulgativo: «Los investigadores comprobaron que ciertos genes relacionados con el envejecimiento de las células se activaban menos». Recursos: sustituir tecnicismos, usar analogías, preferir la voz activa, añadir el «para qué sirve».",
        [
          ["Senescencia celular → envejecimiento de las células.", "Cellular senescence → cell ageing."],
          ["Estadísticamente significativo → no se debe al azar.", "Statistically significant → not due to chance."],
        ],
        [
          mc(
            "Versión divulgativa de «in vitro»:",
            ["en el laboratorio, fuera de un organismo vivo", "en el cuerpo humano", "en la naturaleza", "en un ordenador"],
            0,
            "Explicar el término."
          ),
        ]
      ),
    ],
    [
      fb("Divulga.", "Estadísticamente significativo → que no se debe al ___.", "azar", "Explicación."),
      fb("Divulga.", "Se observó una reducción → Los investigadores ___ que había menos… (comprobar, indefinido)", "comprobaron", "Voz activa."),
      mc(
        "¿Qué analogía divulga bien el sistema inmunitario?",
        ["un ejército que defiende el cuerpo de invasores", "una cuenta bancaria", "un poema", "un mapa de carreteras"],
        0,
        "Analogía clara."
      ),
      mc(
        "¿Qué error debe evitar el divulgador?",
        ["convertir un resultado preliminar en una cura milagrosa", "usar ejemplos", "explicar tecnicismos", "citar la fuente"],
        0,
        "Sensacionalismo."
      ),
      ms(
        "¿Qué recursos ayudan a divulgar?",
        ["analogías", "voz activa", "explicar para qué sirve", "acumular siglas sin explicar"],
        [0, 1, 2],
        "Las siglas sin explicar alejan al lector."
      ),
      toEs("Researchers found that these genes were less active.", "Los investigadores comprobaron que estos genes estaban menos activos.", "Divulgación.", ["Los investigadores descubrieron que estos genes se activaban menos.", "Los investigadores comprobaron que estos genes se activaban menos."]),
      wo("El hallazgo es prometedor, pero todavía queda mucho por investigar.", "Cautela divulgativa.", "The finding is promising, but there is still much to research."),
    ]
  ),
  L(
    "science-technology-spanish-3",
    "c2r-science-dialogue-interview",
    "Laboratorio de diálogo: entrevista a una científica",
    "Formula preguntas de periodista científico y comprende respuestas matizadas.",
    "7 min",
    [
      sec(
        "Preguntas de periodista",
        "Contexto: «¿En qué consiste exactamente su hallazgo?». Relevancia: «¿Qué implicaciones podría tener?». Límites: «¿Qué no dice este estudio?». Futuro: «¿Cuáles son los próximos pasos?». La científica matiza: «Todavía es pronto para hablar de…», «Hay que ser prudentes», «En modelos animales, sí; en humanos, está por ver».",
        [
          ["Todavía es pronto para hablar de aplicaciones clínicas.", "It's still too early to talk about clinical applications."],
          ["En humanos, está por ver.", "In humans, it remains to be seen."],
        ],
        [
          mc(
            "Pregunta que aborda los límites del estudio:",
            ["¿Qué no dice este estudio?", "¿Cuánto cobra usted?", "¿Le gusta su trabajo?", "¿Es usted famosa?"],
            0,
            "Límites."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "¿Qué ___ podría tener este hallazgo para los pacientes? (consecuencias)", "implicaciones", "Implicaciones."),
      fb("Completa.", "En ratones funciona; en humanos, está por ___.", "ver", "Está por ver = no se sabe aún."),
      fb("Completa.", "Todavía es ___ para hablar de un tratamiento.", "pronto", "Es pronto para."),
      mc(
        "«Hay que ser prudentes» busca…",
        ["evitar falsas expectativas", "negar el estudio", "promocionar un producto", "cambiar de tema"],
        0,
        "Cautela."
      ),
      mc(
        "¿Qué titular respeta las palabras de la científica?",
        ["Un estudio en ratones abre una nueva vía contra el envejecimiento celular", "Descubierta la cura del envejecimiento", "Ya podemos vivir 200 años", "Los científicos no saben nada"],
        0,
        "Titular riguroso."
      ),
      toEs("What are the next steps of your research?", "¿Cuáles son los próximos pasos de su investigación?", "Pregunta periodística.", ["¿Cuáles son los siguientes pasos de su investigación?"]),
      wo("Es pronto para hablar de aplicaciones clínicas, pero los resultados son alentadores.", "Respuesta matizada.", "It's too early to talk about clinical applications, but the results are encouraging."),
    ]
  ),
  L(
    "environment-politics-spanish-1",
    "c2r-climate-vocab-web",
    "Red de palabras: clima y responsabilidad",
    "Mitigación, adaptación, huella de carbono, emisiones netas cero, transición justa: organiza el léxico ambiental.",
    "7 min",
    [
      sec(
        "Conceptos clave",
        "Mitigación: reducir las causas (emisiones). Adaptación: prepararse para los efectos (diques, cultivos resistentes). Huella de carbono: emisiones asociadas a una actividad. Emisiones netas cero: equilibrio entre lo emitido y lo absorbido. Transición justa: cambio de modelo sin dejar atrás a trabajadores y regiones. Responsabilidad común pero diferenciada: todos deben actuar, pero no en igual medida.",
        [
          ["La mitigación exige reducir drásticamente las emisiones.", "Mitigation requires drastically reducing emissions."],
          ["Las regiones mineras reclaman una transición justa.", "Mining regions demand a just transition."],
        ],
        [
          mc(
            "Construir diques contra la subida del mar es una medida de…",
            ["adaptación", "mitigación", "emisión", "compensación fiscal"],
            0,
            "Prepararse para los efectos."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el concepto con su definición.",
        [
          ["mitigación", "reducir las causas"],
          ["adaptación", "prepararse para los efectos"],
          ["huella de carbono", "emisiones asociadas a una actividad"],
          ["transición justa", "cambio sin abandonar a los afectados"],
        ],
        "Léxico climático."
      ),
      fb("Completa.", "El objetivo es alcanzar las emisiones netas ___ en 2050.", "cero", "Emisiones netas cero."),
      fb("Completa.", "Los países ricos tienen una responsabilidad común pero ___.", "diferenciada", "Principio de la diplomacia climática."),
      fb("Completa.", "Volar a menudo aumenta mucho tu ___ de carbono.", "huella", "Huella de carbono."),
      mc(
        "¿Qué medida es de mitigación?",
        ["sustituir centrales de carbón por energía solar", "construir diques", "plantar cultivos resistentes a la sequía", "trasladar poblaciones costeras"],
        0,
        "Reduce emisiones."
      ),
      toEs("Rich countries should bear a greater share of the responsibility.", "Los países ricos deberían asumir una mayor parte de la responsabilidad.", "Léxico político.", ["Los países ricos deberían asumir una parte mayor de la responsabilidad.", "Los países ricos deberían cargar con una mayor parte de la responsabilidad."]),
      wo("La transición energética no puede dejar atrás a las regiones mineras.", "Transición justa.", "The energy transition cannot leave mining regions behind."),
    ]
  ),
  L(
    "environment-politics-spanish-2",
    "c2r-politics-polarization-register",
    "Contraste: lenguaje polarizado y lenguaje deliberativo",
    "«Los otros quieren destruir el país» frente a «Discrepamos en el diagnóstico»: detecta y neutraliza el discurso polarizador.",
    "7 min",
    [
      sec(
        "Marcas de polarización",
        "Nosotros/ellos absoluto, deshumanización del adversario, atribución de malas intenciones, léxico bélico («enemigos», «traidores»), generalizaciones («todos los de ese partido»). Lenguaje deliberativo: separar ideas de personas, reconocer objetivos compartidos, precisar el desacuerdo («Coincidimos en el objetivo; discrepamos en los medios»).",
        [
          ["Coincidimos en el objetivo; discrepamos en los medios.", "We agree on the goal; we disagree on the means."],
          ["✗ Son unos traidores a la patria.", "✗ They're traitors to the country."],
        ],
        [
          mc(
            "¿Qué frase es deliberativa?",
            ["Compartimos la preocupación por el empleo, pero proponemos otra vía.", "Ellos quieren hundir el país.", "Son todos unos corruptos.", "El enemigo está en el Parlamento."],
            0,
            "Reconoce objetivo compartido."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza.", "Coincidimos en el ___; discrepamos en los medios.", "objetivo", "Separar fines y medios."),
      fb("Neutraliza.", "✗ Quieren arruinarnos. → ✓ Su propuesta, a nuestro ___, tendría efectos negativos.", "juicio", "A nuestro juicio."),
      mc(
        "¿Qué rasgo es típico del discurso polarizador?",
        ["atribuir malas intenciones al adversario", "citar datos", "reconocer matices", "proponer alternativas"],
        0,
        "Juicio de intenciones."
      ),
      ms(
        "¿Qué expresiones polarizan?",
        ["los enemigos del pueblo", "todos los de ese partido son iguales", "traidores", "discrepamos respetuosamente"],
        [0, 1, 2],
        "La última es deliberativa."
      ),
      mc(
        "«El electorado se agrupa en bandos cada vez más cerrados» describe…",
        ["la polarización", "el consenso", "la abstención", "la mayoría absoluta"],
        0,
        "Definición."
      ),
      toEs("We share the goal, but we propose a different path.", "Compartimos el objetivo, pero proponemos otro camino.", "Lenguaje deliberativo.", ["Compartimos el objetivo, aunque proponemos otro camino.", "Compartimos el objetivo, pero proponemos una vía distinta."]),
      wo("A nuestro juicio, esa medida tendría consecuencias no deseadas.", "Discrepancia argumentada.", "In our view, that measure would have unintended consequences."),
    ]
  ),
  L(
    "environment-politics-spanish-3",
    "c2r-politics-opinion-column",
    "Misión real: una columna de opinión equilibrada",
    "Escribe una columna sobre una ley de emisiones que afecta a una región minera: tesis, concesión, propuesta.",
    "8 min",
    [
      sec(
        "Estructura de la columna",
        "Titular con tesis. Entrada con un caso humano («En Villablino, Juan lleva treinta años en la mina…»). Tesis: «La descarbonización es inevitable, pero no puede hacerse a costa de…». Concesión al otro bando. Datos. Propuesta concreta (formación, inversión, plazos). Cierre con imagen o pregunta.",
        [
          ["La descarbonización es inevitable, pero no puede hacerse a costa de los de siempre.", "Decarbonization is inevitable, but it cannot be done at the expense of the usual people."],
        ],
        [
          mc(
            "¿Qué entrada engancha más al lector?",
            ["Juan lleva treinta años bajando a la mina y teme que su hijo no pueda hacerlo.", "La ley 7/2024 regula las emisiones.", "Hoy hablaré de una ley.", "Hay muchas leyes en este país."],
            0,
            "Caso humano."
          ),
        ]
      ),
    ],
    [
      fb("Tesis.", "La descarbonización es inevitable, pero no puede hacerse a ___ de los trabajadores.", "costa", "A costa de."),
      fb("Concesión.", "Es innegable que la ley ___ necesaria. (ser)", "es", "Es innegable que + indicativo."),
      fb("Propuesta.", "Propongo que parte de los fondos se ___ a formar a los mineros. (destinar)", "destine", "Proponer que + subjuntivo."),
      mc(
        "¿Qué cierre es más eficaz?",
        ["¿Qué país queremos: uno que cierra minas o uno que abre futuros?", "Bueno, eso es todo.", "Ya veremos qué pasa.", "Fin de la columna."],
        0,
        "Pregunta retórica con antítesis."
      ),
      ms(
        "¿Qué elementos tiene una columna equilibrada?",
        ["tesis clara", "concesión al otro punto de vista", "propuesta concreta", "insultos al Gobierno"],
        [0, 1, 2],
        "El insulto resta credibilidad."
      ),
      toEs("It is undeniable that the law is necessary, but it must be fair.", "Es innegable que la ley es necesaria, pero debe ser justa.", "Concesión + tesis.", ["Es indudable que la ley es necesaria, pero tiene que ser justa.", "Es innegable que la ley es necesaria, aunque debe ser justa."]),
      wo("Propongo que parte de los fondos se destine a la formación de los trabajadores.", "Propuesta.", "I propose that part of the funds go to training workers."),
    ]
  ),
  L(
    "environment-politics-spanish-3",
    "c2r-politics-spiral-grammar",
    "Repaso en espiral: gramática del discurso político",
    "Pasiva refleja, subjuntivo de valoración, condicional de rumor y nominalización en noticias políticas.",
    "7 min",
    [
      sec(
        "Recursos del periodismo político",
        "Condicional de rumor (no confirmado): «El ministro habría dimitido esta mañana». Pasiva refleja: «Se aprobó la ley por mayoría». Nominalización: «La aprobación de la reforma…». Valoración: «Es preocupante que se reduzca…». Estilo indirecto: «La portavoz aseguró que no habría recortes».",
        [
          ["Según fuentes del partido, el líder habría presentado su dimisión.", "According to party sources, the leader has reportedly resigned."],
          ["Es preocupante que se reduzca la inversión en ciencia.", "It is worrying that investment in science is being cut."],
        ],
        [
          mc(
            "«El ministro habría dimitido» significa…",
            ["según se dice, sin confirmar, ha dimitido", "el ministro dimitiría si pudiera", "el ministro dimitió seguro", "el ministro no dimitirá"],
            0,
            "Condicional de rumor."
          ),
        ]
      ),
    ],
    [
      fb("Rumor.", "Según fuentes no oficiales, el Gobierno ___ un acuerdo. (alcanzar, condicional compuesto)", "habría alcanzado", "Condicional de rumor."),
      fb("Valoración.", "Es preocupante que ___ la abstención. (aumentar)", "aumente", "Valoración + subjuntivo."),
      fb("Estilo indirecto.", "«No habrá recortes.» → Aseguró que no ___ recortes.", "habría", "Futuro → condicional."),
      fb("Nominalización.", "Cuando se aprobó la ley… → Tras la ___ de la ley…", "aprobación", "Aprobar → aprobación."),
      mc(
        "¿Por qué usa el periodista el condicional de rumor?",
        ["para no presentar como seguro un dato no confirmado", "por cortesía", "por error", "para expresar deseo"],
        0,
        "Responsabilidad informativa."
      ),
      toEs("The minister has reportedly resigned.", "El ministro habría dimitido.", "Condicional de rumor.", ["Al parecer, el ministro ha dimitido.", "Según fuentes, el ministro habría dimitido."]),
      wo("Según fuentes del Gobierno, la reforma se aprobaría antes del verano.", "Condicional de rumor.", "According to government sources, the reform would be approved before summer."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-1",
    "c2r-philosophy-free-will-debate",
    "Laboratorio de diálogo: libre albedrío y determinismo",
    "Dos amigos debaten si somos responsables de nuestros actos: comprende los argumentos y responde con precisión conceptual.",
    "7 min",
    [
      sec(
        "Posturas",
        "Determinismo: todo suceso es efecto necesario de causas anteriores. Libre albedrío: capacidad de elegir entre alternativas. Compatibilismo: libertad y determinismo son compatibles si actuamos según nuestros deseos sin coacción. Incompatibilismo: si todo está determinado, no hay libertad real. Consecuencia moral: la responsabilidad.",
        [
          ["Si todo está determinado, ¿puede alguien ser responsable de sus actos?", "If everything is determined, can anyone be responsible for their actions?"],
          ["Para el compatibilismo, ser libre es actuar sin coacción.", "For compatibilism, being free means acting without coercion."],
        ],
        [
          mc(
            "«Somos libres si actuamos según nuestros deseos, aunque estos estén causados.» Es la postura…",
            ["compatibilista", "incompatibilista", "idealista", "nihilista"],
            0,
            "Compatibilismo."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la postura con su tesis.",
        [
          ["determinismo", "todo tiene una causa necesaria"],
          ["libre albedrío", "podemos elegir entre alternativas"],
          ["compatibilismo", "libertad y causalidad pueden coexistir"],
        ],
        "Posturas filosóficas."
      ),
      fb("Completa.", "Si todo estuviera determinado, nadie ___ responsable de nada. (ser, condicional)", "sería", "Condicional irreal."),
      fb("Completa.", "La ___ (fuerza externa que obliga) anula la libertad.", "coacción", "Coacción."),
      mc(
        "«—Mi crianza lo explica todo. —Explicar no es lo mismo que justificar.» La segunda réplica…",
        ["distingue causa y responsabilidad moral", "acepta el determinismo total", "cambia de tema", "es una falacia"],
        0,
        "Distinción conceptual."
      ),
      ms(
        "¿Qué términos pertenecen a este debate?",
        ["causalidad", "responsabilidad moral", "coacción", "inflación"],
        [0, 1, 2],
        "Inflación es economía."
      ),
      toEs("Explaining an action is not the same as justifying it.", "Explicar una acción no es lo mismo que justificarla.", "Distinción filosófica.", ["Explicar un acto no es lo mismo que justificarlo."]),
      wo("Aunque nuestras decisiones tengan causas, seguimos siendo responsables de ellas.", "Postura compatibilista.", "Even if our decisions have causes, we are still responsible for them."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-2",
    "c2r-philosophy-abstract-nouns",
    "Red de palabras: sustantivos abstractos",
    "Esencia, apariencia, sustancia, trascendencia, inmanencia, a priori, a posteriori: el léxico de la filosofía.",
    "7 min",
    [
      sec(
        "Pares conceptuales",
        "Esencia (lo que algo es) / accidente (lo que puede variar). Apariencia / realidad. Idealismo (la realidad depende de la mente) / materialismo (la realidad es materia). A priori (independiente de la experiencia) / a posteriori (basado en la experiencia). Inmanente (dentro del mundo) / trascendente (más allá). Ontología (estudio del ser), epistemología (del conocimiento), ética.",
        [
          ["Las matemáticas se consideran un conocimiento a priori.", "Mathematics is considered a priori knowledge."],
          ["La epistemología estudia cómo conocemos.", "Epistemology studies how we know."],
        ],
        [
          mc(
            "«Todo soltero es no casado» es un conocimiento…",
            ["a priori", "a posteriori", "empírico", "sensorial"],
            0,
            "Verdadero por definición."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la disciplina con su objeto.",
        [
          ["ontología", "el ser"],
          ["epistemología", "el conocimiento"],
          ["ética", "la conducta moral"],
          ["estética", "la belleza y el arte"],
        ],
        "Ramas de la filosofía."
      ),
      fb("Completa.", "Para el ___, la realidad última es la materia.", "materialismo", "Materialismo."),
      fb("Completa.", "Saber que llueve mirando por la ventana es un conocimiento a ___.", "posteriori", "Basado en la experiencia."),
      fb("Completa.", "No confundas la apariencia con la ___.", "realidad", "Par clásico."),
      mc(
        "«Lo trascendente» se refiere a…",
        ["lo que está más allá del mundo sensible", "lo que es muy importante", "lo que ocurre a diario", "lo material"],
        0,
        "Sentido filosófico."
      ),
      toEs("Epistemology studies the limits of knowledge.", "La epistemología estudia los límites del conocimiento.", "Léxico filosófico.", ["La epistemología estudia los límites del saber."]),
      wo("Para el idealismo, la realidad depende de la mente que la percibe.", "Idealismo.", "For idealism, reality depends on the mind that perceives it."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-3",
    "c2r-philosophy-argument-analysis",
    "Detective de textos: analizar un argumento filosófico",
    "Identifica premisas, conclusión y posibles objeciones en un breve razonamiento.",
    "8 min",
    [
      sec(
        "El argumento",
        "«Si nuestras decisiones fueran completamente aleatorias, no serían nuestras. Si estuvieran completamente determinadas, tampoco lo serían. Por tanto, la libertad no puede consistir ni en el azar ni en la necesidad absoluta.» Premisa 1, premisa 2, conclusión. Objeción posible: ¿existen otras opciones además del azar y la necesidad?",
        [
          ["Por tanto, la libertad no puede consistir ni en el azar ni en la necesidad.", "Therefore, freedom cannot consist in either chance or necessity."],
        ],
        [
          mc(
            "¿Cuál es la conclusión?",
            ["La libertad no consiste ni en el azar ni en la necesidad absoluta.", "Las decisiones son aleatorias.", "Todo está determinado.", "No existe la libertad."],
            0,
            "Introducida por «por tanto»."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Si nuestras decisiones fueran aleatorias, no serían nuestras» es…",
        ["una premisa condicional", "la conclusión", "una objeción", "un ejemplo"],
        0,
        "Premisa."
      ),
      mc(
        "La objeción «¿existen otras opciones?» acusa al argumento de…",
        ["posible falso dilema", "ad hominem", "circularidad", "argumento de autoridad"],
        0,
        "Solo contempla dos opciones."
      ),
      fb("Completa (condicional irreal).", "Si nuestras decisiones ___ aleatorias, no serían nuestras. (ser)", "fueran", "Si + imperfecto de subjuntivo."),
      fb("Completa (conector).", "Por ___, la libertad no puede ser puro azar.", "tanto", "Por tanto = conclusión."),
      ms(
        "¿Qué conectores introducen una conclusión?",
        ["por tanto", "en consecuencia", "luego", "sin embargo"],
        [0, 1, 2],
        "Sin embargo = contraste."
      ),
      toEs("If our choices were random, they would not be ours.", "Si nuestras decisiones fueran aleatorias, no serían nuestras.", "Condicional irreal.", ["Si nuestras elecciones fueran aleatorias, no serían nuestras.", "Si nuestras decisiones fuesen aleatorias, no serían nuestras."]),
      wo("Luego la libertad requiere algo más que la simple ausencia de causas.", "Conclusión con luego.", "Therefore freedom requires more than the mere absence of causes."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-3",
    "c2r-philosophy-mission-essay-paragraph",
    "Misión real: un párrafo de ensayo filosófico",
    "Escribe un párrafo sobre si la tecnología nos hace más libres: tesis, distinción conceptual, ejemplo y objeción.",
    "8 min",
    [
      sec(
        "El párrafo filosófico",
        "Tesis: «Cabe preguntarse si la tecnología amplía nuestra libertad o solo nuestras opciones». Distinción: «Conviene distinguir entre libertad negativa (ausencia de obstáculos) y libertad positiva (capacidad de autodeterminarse)». Ejemplo. Objeción y respuesta: «Podría objetarse que…; sin embargo…».",
        [
          ["Conviene distinguir entre tener opciones y ser libre.", "It's worth distinguishing between having options and being free."],
        ],
        [
          mc(
            "«Libertad negativa» significa…",
            ["ausencia de obstáculos externos", "libertad mala", "falta de libertad", "libertad de expresión"],
            0,
            "Distinción clásica (Berlin)."
          ),
        ]
      ),
    ],
    [
      fb("Tesis.", "Cabe ___ si la tecnología nos hace más libres.", "preguntarse", "Cabe preguntarse."),
      fb("Distinción.", "Conviene ___ entre libertad negativa y positiva.", "distinguir", "Distinguir entre."),
      fb("Objeción.", "Podría ___ que los algoritmos solo nos ayudan a elegir.", "objetarse", "Podría objetarse que."),
      mc(
        "Ejemplo que ilustra la tesis:",
        ["Un algoritmo que decide qué noticias vemos amplía opciones, pero puede reducir nuestra autonomía.", "Me gusta mi móvil.", "Hay muchos ordenadores.", "La tecnología es cara."],
        0,
        "Ejemplo pertinente."
      ),
      mc(
        "¿Qué conector responde a la objeción?",
        ["sin embargo", "asimismo", "por ejemplo", "en primer lugar"],
        0,
        "Contraste."
      ),
      toEs("It is worth distinguishing between having options and being free.", "Conviene distinguir entre tener opciones y ser libre.", "Distinción conceptual.", ["Conviene diferenciar entre tener opciones y ser libre.", "Cabe distinguir entre tener opciones y ser libre."]),
      wo("Tener más opciones no implica necesariamente ser más libre.", "Tesis matizada.", "Having more options does not necessarily mean being freer."),
    ]
  ),
  L(
    "psychology-emotions-1",
    "c2r-psych-ambivalence-dissonance",
    "Contraste: ambivalencia y disonancia cognitiva",
    "Querer y odiar a la vez frente a pensar una cosa y hacer otra: dos conceptos que el hablante culto distingue.",
    "7 min",
    [
      sec(
        "Dos tensiones internas",
        "Ambivalencia: coexistencia de sentimientos opuestos hacia lo mismo («Siento admiración y resentimiento hacia mi hermana»). Disonancia cognitiva: malestar por la contradicción entre creencias y actos, que lleva a justificarse («Sé que fumar mata, pero mi abuelo fumó y vivió 90 años»). Mecanismos: racionalización, negación, proyección.",
        [
          ["Siento una mezcla de alivio y culpa.", "I feel a mixture of relief and guilt."],
          ["Se justificaba para reducir la disonancia.", "He justified himself to reduce the dissonance."],
        ],
        [
          mc(
            "«Sé que debería ahorrar, pero me lo merezco» ilustra…",
            ["disonancia cognitiva y racionalización", "ambivalencia afectiva", "melancolía", "nostalgia"],
            0,
            "Justificar una conducta contradictoria."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Echo de menos a mi ex y a la vez me alegro de que se fuera» es…",
        ["ambivalencia", "disonancia", "negación", "proyección"],
        0,
        "Sentimientos opuestos."
      ),
      fb("Completa.", "Buscar excusas razonables para una conducta es ___. (racionalizar, sustantivo)", "racionalización", "Racionalización."),
      fb("Completa.", "Atribuir a otros los propios sentimientos se llama ___.", "proyección", "Proyección."),
      fb("Completa.", "Siento una ___ de alivio y culpa.", "mezcla", "Mezcla de emociones."),
      mt(
        "Relaciona el mecanismo con su definición.",
        [
          ["negación", "no reconocer una realidad dolorosa"],
          ["racionalización", "justificar con razones aparentes"],
          ["proyección", "atribuir a otros lo propio"],
        ],
        "Mecanismos de defensa."
      ),
      toEs("I feel a mixture of pride and fear.", "Siento una mezcla de orgullo y miedo.", "Ambivalencia.", ["Siento una mezcla de orgullo y temor.", "Tengo una mezcla de orgullo y miedo."]),
      wo("Para reducir la disonancia, se convenció de que no había otra opción.", "Racionalización.", "To reduce the dissonance, he convinced himself there was no other option."),
    ]
  ),
  L(
    "psychology-emotions-2",
    "c2r-psych-nuanced-emotions",
    "Red de palabras: matices de la tristeza y el anhelo",
    "Melancolía, nostalgia, añoranza, morriña, desazón, pesadumbre, anhelo: elige la palabra exacta.",
    "7 min",
    [
      sec(
        "Una emoción, muchos matices",
        "Tristeza: general. Melancolía: tristeza difusa y persistente, sin causa clara. Nostalgia: tristeza por un tiempo pasado. Añoranza: pena por la ausencia de alguien o algo. Morriña (Galicia, coloquial): nostalgia de la tierra. Desazón: inquietud, malestar indefinido. Pesadumbre: tristeza pesada por un hecho. Anhelo: deseo intenso de algo.",
        [
          ["Siento nostalgia de los veranos de mi infancia.", "I feel nostalgic for the summers of my childhood."],
          ["Una desazón que no sabía explicar.", "An unease she couldn't explain."],
        ],
        [
          mc(
            "Tristeza por un tiempo pasado que no volverá:",
            ["nostalgia", "desazón", "anhelo", "euforia"],
            0,
            "Nostalgia."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la palabra con su matiz.",
        [
          ["melancolía", "tristeza difusa y persistente"],
          ["añoranza", "pena por una ausencia"],
          ["desazón", "inquietud indefinida"],
          ["anhelo", "deseo intenso"],
        ],
        "Matices emocionales."
      ),
      fb("Completa.", "Los gallegos emigrados sentían ___ de su tierra.", "morriña", "Morriña."),
      fb("Completa.", "Vivía con el ___ de volver a verla algún día. (deseo intenso)", "anhelo", "Anhelo."),
      fb("Completa.", "Una profunda ___ lo invadió tras la noticia. (tristeza pesada)", "pesadumbre", "Pesadumbre."),
      mc(
        "«Sentía una tristeza sin motivo aparente cada otoño.»",
        ["melancolía", "añoranza de alguien concreto", "euforia", "rencor"],
        0,
        "Sin causa clara."
      ),
      toEs("She felt a strange unease she couldn't explain.", "Sentía una extraña desazón que no sabía explicar.", "Desazón.", ["Sentía una desazón extraña que no sabía explicar.", "Sentía una extraña inquietud que no sabía explicar."]),
      wo("La añoranza de su país crecía con cada Navidad lejos de casa.", "Añoranza.", "Her longing for her country grew with each Christmas away from home."),
    ]
  ),
  L(
    "psychology-emotions-3",
    "c2r-psych-therapy-dialogue",
    "Laboratorio de diálogo: poner nombre a lo que se siente",
    "Una sesión de terapia: el paciente pasa de lo vago a lo preciso con ayuda de preguntas abiertas.",
    "7 min",
    [
      sec(
        "Preguntas que ayudan a precisar",
        "Abiertas: «¿Cómo describirías eso que sientes?», «¿Cuándo aparece?», «¿Qué te dice esa emoción?». Reflejo: «Parece que te sientes dividido». Validar: «Es comprensible que te sientas así». El paciente precisa: «No es exactamente tristeza; es más bien una especie de vacío».",
        [
          ["No es exactamente enfado; es más bien decepción.", "It's not exactly anger; it's more like disappointment."],
          ["Parece que te sientes dividido.", "It sounds like you feel torn."],
        ],
        [
          mc(
            "¿Qué pregunta es abierta?",
            ["¿Cómo describirías lo que sientes?", "¿Estás triste, sí o no?", "¿Te enfadaste?", "¿Lloraste?"],
            0,
            "Invita a elaborar."
          ),
        ]
      ),
    ],
    [
      fb("Precisa.", "No es exactamente tristeza; es más ___ una especie de vacío.", "bien", "Más bien = corrección matizada."),
      fb("Valida.", "Es comprensible que te ___ así. (sentir)", "sientas", "Valoración + subjuntivo."),
      fb("Refleja.", "Parece que te sientes ___ entre dos lealtades. (con sentimientos opuestos)", "dividido", "Sentirse dividido."),
      mc(
        "«Siento que por un lado la admiro y por otro me molesta.» El terapeuta responde:",
        ["Parece que sientes ambivalencia hacia ella.", "Eso está mal.", "Deberías quererla.", "Olvídalo."],
        0,
        "Nombrar la emoción."
      ),
      ms(
        "¿Qué intervenciones ayudan al paciente?",
        ["preguntas abiertas", "reflejar lo que dice", "validar la emoción", "juzgar sus sentimientos"],
        [0, 1, 2],
        "Juzgar no ayuda."
      ),
      toEs("It's not exactly anger; it's more like disappointment.", "No es exactamente enfado; es más bien decepción.", "Precisión emocional.", ["No es exactamente rabia; es más bien decepción.", "No es enfado exactamente; es más bien decepción."]),
      wo("Por un lado la admiro y, por otro, me cuesta perdonarla.", "Ambivalencia.", "On the one hand I admire her, and on the other I find it hard to forgive her."),
    ]
  ),
  L(
    "psychology-emotions-3",
    "c2r-psych-spiral-literary",
    "Repaso en espiral: emociones en la literatura",
    "Describe estados de ánimo de personajes con léxico preciso, figuras retóricas y estilo indirecto libre.",
    "8 min",
    [
      sec(
        "Mostrar, no decir",
        "Decir: «Estaba triste». Mostrar: «Dejó el café enfriarse sin probarlo. ¿Para qué levantarse, si nadie la esperaba?» (gesto + indirecto libre). Metáfora emocional: «Una niebla le pesaba en el pecho». Léxico preciso: melancolía, desazón, añoranza. La literatura prefiere sugerir la emoción mediante gestos y pensamientos.",
        [
          ["Dejó el café enfriarse sin probarlo.", "She let the coffee go cold without tasting it."],
          ["Una niebla le pesaba en el pecho.", "A fog weighed on her chest."],
        ],
        [
          mc(
            "¿Qué frase muestra la emoción en lugar de decirla?",
            ["Guardó la carta sin abrirla y se quedó mirando la lluvia.", "Estaba muy triste.", "Sentía tristeza.", "Era una persona triste."],
            0,
            "Gesto significativo."
          ),
        ]
      ),
    ],
    [
      fb("Indirecto libre.", "¿Para qué ___, si nadie la esperaba? (salir de la cama, infinitivo pronominal)", "levantarse", "Pregunta del personaje."),
      fb("Metáfora.", "Una ___ le pesaba en el pecho. (vapor que impide ver)", "niebla", "Metáfora emocional."),
      fb("Léxico.", "La ___ del otoño la volvía silenciosa. (tristeza difusa)", "melancolía", "Melancolía."),
      mc(
        "«¿Y si nunca volvía? ¿Y si aquella había sido la última vez?» expresa…",
        ["angustia en estilo indirecto libre", "alegría", "narración objetiva", "un diálogo directo"],
        0,
        "Pensamiento del personaje."
      ),
      ms(
        "¿Qué técnicas muestran emociones?",
        ["gestos significativos", "estilo indirecto libre", "metáforas", "nombrar la emoción con un adjetivo genérico"],
        [0, 1, 2],
        "Nombrarla genéricamente es «decir»."
      ),
      toEs("She let the coffee go cold without tasting it.", "Dejó que el café se enfriara sin probarlo.", "Mostrar.", ["Dejó el café enfriarse sin probarlo.", "Dejó enfriar el café sin probarlo."]),
      wo("Guardó la carta sin abrirla y se quedó mirando la lluvia.", "Mostrar, no decir.", "She put the letter away unopened and stood watching the rain."),
    ]
  ),
  L(
    "art-film-literature-criticism-1",
    "c2r-critic-plot-character",
    "Red de palabras: trama, personaje, verosimilitud",
    "Peripecia, desenlace, arco del personaje, deus ex machina, verosimilitud: el vocabulario del crítico literario.",
    "7 min",
    [
      sec(
        "Léxico del análisis narrativo",
        "Trama / argumento. Planteamiento, nudo, desenlace. Peripecia (giro de la acción). Clímax. Arco del personaje (su transformación). Personaje plano (sin evolución) / redondo (complejo). Verosimilitud: coherencia interna que hace creíble la historia. Deus ex machina: solución forzada que cae del cielo. Narrador omnisciente / en primera persona / testigo.",
        [
          ["El desenlace resulta inverosímil: un deus ex machina en toda regla.", "The ending is implausible: a deus ex machina through and through."],
          ["El arco de la protagonista está muy bien trazado.", "The protagonist's arc is very well drawn."],
        ],
        [
          mc(
            "Un personaje que no cambia a lo largo de la obra es…",
            ["plano", "redondo", "omnisciente", "verosímil"],
            0,
            "Personaje plano."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el término con su definición.",
        [
          ["peripecia", "giro inesperado de la acción"],
          ["verosimilitud", "credibilidad interna"],
          ["deus ex machina", "solución forzada y externa"],
          ["arco del personaje", "evolución a lo largo de la obra"],
        ],
        "Léxico crítico."
      ),
      fb("Completa.", "El ___ llega en el capítulo final, cuando todo se resuelve.", "desenlace", "Desenlace."),
      fb("Completa.", "El narrador ___ conoce los pensamientos de todos los personajes.", "omnisciente", "Omnisciente."),
      fb("Completa.", "La novela pierde ___ cuando el héroe sobrevive a todo sin explicación. (credibilidad)", "verosimilitud", "Verosimilitud."),
      mc(
        "«Un tío rico desconocido muere y deja al protagonista la herencia justo a tiempo.» Es…",
        ["un deus ex machina", "un arco del personaje", "una prolepsis", "un personaje redondo"],
        0,
        "Solución forzada."
      ),
      toEs("The ending feels forced and implausible.", "El desenlace resulta forzado e inverosímil.", "Crítica literaria.", ["El final resulta forzado e inverosímil.", "El desenlace parece forzado e inverosímil."]),
      wo("La protagonista es un personaje redondo con un arco muy bien construido.", "Léxico crítico.", "The protagonist is a round character with a very well-built arc."),
    ]
  ),
  L(
    "art-film-literature-criticism-2",
    "c2r-critic-film-language",
    "Detective de textos: la crítica cinematográfica",
    "Lee una reseña de cine y descodifica su vocabulario técnico: plano, encuadre, montaje, fotografía, puesta en escena.",
    "8 min",
    [
      sec(
        "La reseña",
        "«La directora apuesta por planos fijos y largos que obligan al espectador a mirar. La fotografía, de tonos fríos, subraya el aislamiento de la protagonista, y el montaje, pausado hasta la exasperación, solo se acelera en el último tercio. La puesta en escena, casi teatral, puede resultar contenida en exceso para algunos; para otros, es su mayor virtud.»",
        [
          ["Planos fijos y largos.", "Long, static shots."],
          ["El montaje solo se acelera en el último tercio.", "The editing only speeds up in the final third."],
        ],
        [
          mc(
            "¿Qué función cumplen los tonos fríos?",
            ["subrayar el aislamiento de la protagonista", "mostrar el verano", "abaratar la película", "confundir al espectador"],
            0,
            "Fotografía expresiva."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el término con su definición.",
        [
          ["montaje", "organización y ritmo de los planos"],
          ["encuadre", "lo que abarca la cámara"],
          ["puesta en escena", "disposición de todo lo que aparece ante la cámara"],
          ["fotografía", "luz, color y textura de la imagen"],
        ],
        "Léxico cinematográfico."
      ),
      mc(
        "«Pausado hasta la exasperación» es una valoración…",
        ["ambivalente, con matiz crítico", "totalmente positiva", "técnica neutra", "sobre el guion"],
        0,
        "Exasperación = impaciencia extrema."
      ),
      mc(
        "¿Cómo presenta el crítico la opinión dividida?",
        ["para algunos… para otros…", "sin duda alguna…", "todo el mundo piensa…", "nadie cree…"],
        0,
        "Contraste de recepciones."
      ),
      fb("Completa según el texto.", "La directora ___ por planos fijos y largos. (elegir con decisión)", "apuesta", "Apostar por."),
      fb("Completa.", "Un plano ___ (en movimiento) acompaña a la protagonista por el pasillo.", "secuencia", "Plano secuencia = plano largo sin cortes."),
      toEs("The editing only speeds up in the final third.", "El montaje solo se acelera en el último tercio.", "Crítica de cine.", ["El montaje solo gana ritmo en el último tercio."]),
      wo("La fotografía de tonos fríos subraya la soledad de la protagonista.", "Análisis de la fotografía.", "The cold-toned cinematography underlines the protagonist's loneliness."),
    ]
  ),
  L(
    "art-film-literature-criticism-3",
    "c2r-critic-evaluative-adjectives",
    "Contraste: la escala de la valoración crítica",
    "De «fallida» a «magistral», pasando por «irregular», «estimable» y «notable»: gradúa tu juicio con precisión.",
    "7 min",
    [
      sec(
        "Adjetivos del crítico",
        "Negativos: fallida, prescindible, plana, pretenciosa, efectista. Intermedios: irregular (con altibajos), correcta, estimable (con méritos modestos), desigual. Positivos: notable, sólida, lograda, conmovedora. Superlativos: magistral, deslumbrante, imprescindible, una obra maestra. Matizadores: «con todo», «pese a sus defectos», «sin llegar a…».",
        [
          ["Una película irregular, pero con momentos de gran belleza.", "An uneven film, but with moments of great beauty."],
          ["Pese a sus defectos, es una novela estimable.", "Despite its flaws, it's a worthy novel."],
        ],
        [
          mc(
            "«Pretenciosa» critica una obra que…",
            ["aspira a más de lo que consigue, con afectación", "es muy barata", "es demasiado corta", "está bien hecha"],
            0,
            "Afectación y ambición no cumplida."
          ),
        ]
      ),
    ],
    [
      mc(
        "Ordena de peor a mejor: (a) notable (b) fallida (c) magistral (d) correcta",
        ["b, d, a, c", "c, a, d, b", "d, b, c, a", "a, b, c, d"],
        0,
        "Escala crítica."
      ),
      fb("Completa.", "Es una obra ___: tiene momentos brillantes y otros muy flojos. (con altibajos)", "irregular", "Irregular."),
      fb("Completa.", "Pese a sus ___, la película emociona.", "defectos", "Pese a sus defectos."),
      fb("Completa.", "Un final ___ que busca el impacto fácil. (que abusa de los efectos)", "efectista", "Efectista."),
      ms(
        "¿Qué adjetivos son elogiosos?",
        ["magistral", "lograda", "conmovedora", "prescindible"],
        [0, 1, 2],
        "Prescindible es negativo."
      ),
      toEs("Despite its flaws, it's a moving film.", "Pese a sus defectos, es una película conmovedora.", "Valoración matizada.", ["A pesar de sus defectos, es una película conmovedora.", "Pese a sus fallos, es una película conmovedora."]),
      wo("Sin llegar a ser una obra maestra, la novela es notable.", "Valoración matizada.", "Without being a masterpiece, the novel is remarkable."),
    ]
  ),
  L(
    "art-film-literature-criticism-3",
    "c2r-critic-mission-review",
    "Misión real: escribe una reseña de 150 palabras",
    "Reseña una película o novela: ficha, síntesis sin destripar, análisis de un aspecto técnico y valoración matizada.",
    "9 min",
    [
      sec(
        "Estructura de la reseña",
        "1) Entrada que sitúa la obra (autor, género, contexto). 2) Síntesis del argumento sin destripar el final (sin spoilers). 3) Análisis de uno o dos aspectos (fotografía, estructura, personajes, estilo). 4) Valoración con matices («pese a…», «con todo…»). 5) Recomendación: «Imprescindible para…», «Solo para incondicionales de…».",
        [
          ["Sin desvelar el final, basta decir que…", "Without revealing the ending, suffice it to say that…"],
          ["Imprescindible para los amantes del cine social.", "A must for lovers of social cinema."],
        ],
        [
          mc(
            "¿Qué debe evitar la síntesis del argumento?",
            ["desvelar el desenlace", "mencionar el género", "situar la época", "presentar al protagonista"],
            0,
            "Sin destripar."
          ),
        ]
      ),
    ],
    [
      fb("Síntesis.", "Sin ___ el final, basta decir que nada es lo que parece. (revelar)", "desvelar", "Desvelar."),
      fb("Valoración.", "Con ___, la película se hace larga en su segunda mitad.", "todo", "Con todo = a pesar de ello."),
      fb("Recomendación.", "___ para los amantes de la novela negra. (que no debe faltar)", "Imprescindible", "Imprescindible para."),
      mc(
        "Mejor entrada para una reseña:",
        ["Tras su celebrada ópera prima, la directora chilena vuelve con un drama íntimo sobre la memoria.", "Esta película es de 2023.", "Fui al cine el sábado.", "No sé qué decir de esta película."],
        0,
        "Sitúa obra y autora."
      ),
      ms(
        "¿Qué elementos debe tener una buena reseña?",
        ["contexto de la obra", "análisis de algún aspecto técnico", "valoración matizada", "el final completo explicado"],
        [0, 1, 2],
        "No se destripa."
      ),
      toEs("A must-see for lovers of social cinema.", "Imprescindible para los amantes del cine social.", "Recomendación.", []),
      wo("Tras su celebrada ópera prima, el director vuelve con un drama más ambicioso.", "Entrada de reseña.", "After his celebrated debut, the director returns with a more ambitious drama."),
    ]
  ),
  L(
    "business-economics-spanish-1",
    "c2r-econ-supply-demand-cause",
    "Transformaciones: causa y efecto en economía",
    "Encadena fenómenos económicos con conectores y verbos de causa: provocar, desencadenar, repercutir, derivarse.",
    "7 min",
    [
      sec(
        "Verbos y conectores causales",
        "Verbos: provocar, generar, desencadenar, repercutir en, incidir en, traducirse en, derivarse de. Conectores: debido a, a raíz de, como consecuencia de, lo que se traduce en, de ahí que (+ subjuntivo). Ejemplo: «La sequía redujo la oferta de aceite, lo que se tradujo en una subida de precios; de ahí que las ventas cayeran».",
        [
          ["La subida de tipos repercute en el consumo.", "The interest-rate rise affects consumption."],
          ["La escasez de chips desencadenó retrasos en toda la industria.", "The chip shortage triggered delays across the industry."],
        ],
        [
          mc(
            "«De ahí que las ventas ___.» (caer, pasado)",
            ["cayeran", "cayeron", "caen", "caerán"],
            0,
            "De ahí que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "La escasez de oferta ___ en precios más altos. (traducirse, indefinido)", "se tradujo", "Traducirse en."),
      fb("Completa.", "La crisis energética ___ en toda la economía. (tener efecto, presente)", "repercute", "Repercutir en."),
      fb("Completa.", "De ___ que muchas empresas hayan reducido plantilla.", "ahí", "De ahí que + subjuntivo."),
      mc(
        "Si aumenta la demanda y la oferta se mantiene, el precio tiende a…",
        ["subir", "bajar", "desaparecer", "mantenerse siempre igual"],
        0,
        "Ley de la oferta y la demanda."
      ),
      mt(
        "Relaciona el verbo con su matiz.",
        [
          ["desencadenar", "iniciar una serie de efectos"],
          ["derivarse de", "proceder de"],
          ["incidir en", "afectar a"],
        ],
        "Verbos causales."
      ),
      toEs("The drought caused a rise in olive oil prices.", "La sequía provocó una subida del precio del aceite.", "Causa-efecto.", ["La sequía provocó un aumento del precio del aceite.", "La sequía causó una subida del precio del aceite de oliva."]),
      wo("La caída de la demanda se tradujo en una bajada generalizada de precios.", "Traducirse en.", "The drop in demand translated into a general fall in prices."),
    ]
  ),
  L(
    "business-economics-spanish-2",
    "c2r-econ-inflation-news",
    "Detective de textos: una noticia sobre inflación",
    "Lee una noticia económica y distingue datos, previsiones y valoraciones; domina IPC, tipos de interés y poder adquisitivo.",
    "8 min",
    [
      sec(
        "La noticia",
        "«El IPC interanual se situó en marzo en el 3,2 %, dos décimas por debajo del mes anterior. El Banco Central mantuvo los tipos de interés en el 4 %, aunque no descarta rebajarlos en verano si la inflación subyacente sigue moderándose. Los sindicatos advierten de la pérdida de poder adquisitivo de los salarios, que apenas han crecido un 2 %.»",
        [
          ["El IPC interanual se situó en el 3,2 %.", "Year-on-year CPI stood at 3.2%."],
          ["La pérdida de poder adquisitivo.", "The loss of purchasing power."],
        ],
        [
          mc(
            "¿Por qué pierden poder adquisitivo los salarios?",
            ["porque crecen menos que los precios", "porque bajan los tipos", "porque sube el IPC dos décimas", "porque los sindicatos lo dicen"],
            0,
            "2 % < 3,2 %."
          ),
        ]
      ),
    ],
    [
      mc(
        "«No descarta rebajarlos en verano» es…",
        ["una previsión condicionada", "un dato confirmado", "una valoración sindical", "una cita textual"],
        0,
        "Posibilidad futura."
      ),
      mc(
        "La inflación subyacente excluye…",
        ["los precios más volátiles, como energía y alimentos frescos", "los salarios", "los impuestos", "los tipos de interés"],
        0,
        "Definición técnica."
      ),
      fb("Completa según el texto.", "El IPC bajó dos ___ respecto al mes anterior.", "décimas", "Décimas de punto."),
      fb("Completa.", "Si los tipos de interés bajan, las hipotecas se ___. (hacerse más baratas)", "abaratan", "Abaratarse."),
      mt(
        "Relaciona el término con su definición.",
        [
          ["IPC", "índice de precios de consumo"],
          ["poder adquisitivo", "capacidad de compra del dinero"],
          ["tipos de interés", "precio del dinero prestado"],
        ],
        "Léxico económico."
      ),
      toEs("Wages have barely grown by 2%.", "Los salarios apenas han crecido un 2 %.", "Dato económico.", ["Los sueldos apenas han subido un 2 %.", "Los salarios apenas han crecido un dos por ciento."]),
      wo("El banco central no descarta bajar los tipos de interés en verano.", "Previsión.", "The central bank doesn't rule out cutting interest rates in summer."),
    ]
  ),
  L(
    "business-economics-spanish-3",
    "c2r-econ-merger-dialogue",
    "Laboratorio de diálogo: analizar una fusión",
    "Un analista explica en la radio una fusión entre aerolíneas: sinergias, cuota de mercado, competencia y consumidores.",
    "7 min",
    [
      sec(
        "Léxico corporativo",
        "Fusión (dos empresas se unen) / adquisición (una compra a otra) / opa (oferta pública de adquisición). Sinergias (ahorros al combinar). Cuota de mercado. Posición dominante. Autoridad de la competencia. Accionistas, cotización, capitalización bursátil. Efectos para el consumidor: precios, oferta de rutas.",
        [
          ["La fusión generará sinergias de 200 millones.", "The merger will generate synergies of 200 million."],
          ["La autoridad de la competencia podría imponer condiciones.", "The competition authority could impose conditions."],
        ],
        [
          mc(
            "Cuando una empresa compra otra lanzando una oferta a sus accionistas, se habla de…",
            ["una opa", "una fusión amistosa necesariamente", "un ERE", "una quiebra"],
            0,
            "Oferta pública de adquisición."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Juntas controlarán el 60 % de la ___ de mercado.", "cuota", "Cuota de mercado."),
      fb("Completa.", "La competencia teme que la nueva empresa ocupe una posición ___.", "dominante", "Posición dominante."),
      fb("Completa.", "Tras el anuncio, la ___ de ambas compañías subió en bolsa. (valor en bolsa)", "cotización", "Cotización."),
      mc(
        "«Sinergias» en una fusión son…",
        ["ahorros y ventajas al combinar recursos", "despidos obligatorios", "impuestos nuevos", "rutas cerradas"],
        0,
        "Definición."
      ),
      mc(
        "¿Qué riesgo corre el consumidor si hay posición dominante?",
        ["precios más altos y menos opciones", "precios siempre más bajos", "más competencia", "ninguno"],
        0,
        "Menos competencia."
      ),
      toEs("The competition authority could block the merger.", "La autoridad de la competencia podría bloquear la fusión.", "Léxico corporativo.", ["La autoridad de competencia podría bloquear la fusión.", "Las autoridades de competencia podrían bloquear la fusión."]),
      wo("La operación dará lugar a la mayor aerolínea del país.", "Dar lugar a.", "The deal will give rise to the country's largest airline."),
    ]
  ),
  L(
    "business-economics-spanish-3",
    "c2r-econ-spiral-report",
    "Repaso en espiral: el informe económico",
    "Nominalización, atenuación, conectores y cifras en un informe trimestral: escribe con densidad y precisión.",
    "8 min",
    [
      sec(
        "Rasgos del informe",
        "Nominalización: «El aumento de las ventas…». Cifras con precisión: «un 12 % más que en el mismo periodo del año anterior». Atenuación: «previsiblemente», «cabe esperar». Conectores: «no obstante», «en este sentido», «cabe destacar». Impersonalidad: «Se prevé un crecimiento moderado».",
        [
          ["Las ventas crecieron un 12 % respecto al mismo periodo del año anterior.", "Sales grew 12% compared with the same period last year."],
          ["Se prevé un crecimiento moderado en el segundo semestre.", "Moderate growth is expected in the second half."],
        ],
        [
          mc(
            "Versión de informe de «vendimos mucho más»:",
            ["Se registró un notable aumento de las ventas.", "Vendimos un montón.", "Las ventas molaron.", "Vendimos más que nunca, tío."],
            0,
            "Nominalización + impersonalidad."
          ),
        ]
      ),
    ],
    [
      fb("Nominaliza.", "Los costes bajaron → Se produjo una ___ de los costes.", "reducción", "Reducción."),
      fb("Atenúa.", "___, la demanda se recuperará en otoño. (de forma previsible, adverbio)", "Previsiblemente", "Adverbio atenuador."),
      fb("Impersonal.", "Se ___ un crecimiento del 2 % para el próximo año. (prever, presente)", "prevé", "Se prevé."),
      fb("Comparación.", "Las ventas crecieron un 5 % ___ al mismo trimestre del año anterior.", "respecto", "Respecto a."),
      mc(
        "«Cabe destacar el buen comportamiento del mercado asiático.» Sirve para…",
        ["resaltar un dato", "atenuar una pérdida", "cambiar de tema", "cerrar el informe"],
        0,
        "Énfasis formal."
      ),
      toEs("Moderate growth is expected in the second half of the year.", "Se prevé un crecimiento moderado en el segundo semestre del año.", "Informe.", ["Se espera un crecimiento moderado en el segundo semestre.", "Se prevé un crecimiento moderado en la segunda mitad del año."]),
      wo("Cabe destacar el aumento de las exportaciones durante el último trimestre.", "Informe económico.", "The rise in exports during the last quarter is worth highlighting."),
    ]
  ),
  L(
    "creative-writing-techniques-1",
    "c2r-writing-foreshadowing",
    "Taller de estilo: sembrar indicios (prefiguración)",
    "Añade pistas discretas a un relato para que el final resulte sorprendente pero inevitable.",
    "8 min",
    [
      sec(
        "La pistola de Chéjov",
        "Si aparece un detalle significativo al principio (una pistola en la pared, una llave que no abre nada), debe cumplir una función después. La prefiguración siembra indicios discretos: objetos, frases ambiguas, gestos, el tiempo atmosférico. Riesgo: si es demasiado evidente, el lector adivina el final; si no existe, el giro parece arbitrario.",
        [
          ["En el cajón seguía aquella llave que no abría ninguna puerta de la casa.", "In the drawer lay that key that opened none of the doors in the house."],
          ["«Algún día te contaré por qué no vuelvo nunca a Sevilla», dijo riendo.", "“Someday I'll tell you why I never go back to Seville,” she said, laughing."],
        ],
        [
          mc(
            "¿Qué detalle funciona como prefiguración discreta?",
            ["Una cicatriz en la mano que el personaje esconde al saludar.", "El personaje dice: «Al final de esta historia yo seré el asesino».", "Una descripción del cielo azul sin más.", "El número de páginas del libro."],
            0,
            "Indicio sutil."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "La ___ consiste en anticipar discretamente lo que ocurrirá. (anticipación narrativa)", "prefiguración", "Prefiguración."),
      fb("Completa.", "El giro final parece ___ si no se ha sembrado ningún indicio. (sin motivo)", "arbitrario", "Arbitrario."),
      mc(
        "¿Qué pasa si la pista es demasiado evidente?",
        ["El lector adivina el final.", "El relato mejora siempre.", "El giro parece arbitrario.", "Nada."],
        0,
        "Se pierde la sorpresa."
      ),
      mc(
        "«La pistola de Chéjov» enseña que…",
        ["todo detalle relevante debe tener una función", "hay que escribir sobre armas", "los finales deben ser violentos", "no hay que describir objetos"],
        0,
        "Economía narrativa."
      ),
      ms(
        "¿Qué recursos sirven para prefigurar?",
        ["objetos significativos", "frases ambiguas de un personaje", "cambios atmosféricos simbólicos", "resumir el final en la primera página"],
        [0, 1, 2],
        "Resumir el final no es prefigurar."
      ),
      toEs("There was a key in the drawer that opened no door.", "En el cajón había una llave que no abría ninguna puerta.", "Indicio.", ["En el cajón había una llave que no abría ninguna puerta de la casa.", "Había en el cajón una llave que no abría ninguna puerta."]),
      wo("Nadie reparó entonces en la maleta que esperaba junto a la puerta.", "Prefiguración.", "Nobody noticed then the suitcase waiting by the door."),
    ]
  ),
  L(
    "creative-writing-techniques-2",
    "c2r-writing-imagery-rewrite",
    "Transformaciones: de la frase plana a la imagen literaria",
    "Reescribe frases descriptivas con símil, metáfora, sinestesia y personificación, sin recargar.",
    "7 min",
    [
      sec(
        "Recursos de la imagen",
        "Símil: «El silencio era como una manta». Metáfora: «El silencio era una manta». Sinestesia (mezcla de sentidos): «un verde chillón», «una voz áspera y dulce», «el sabor amarillo de la tarde». Personificación: «La casa respiraba». Consejo: una imagen potente vale más que tres acumuladas.",
        [
          ["Un verde chillón.", "A screaming green."],
          ["La casa respiraba en la oscuridad.", "The house breathed in the dark."],
        ],
        [
          mc(
            "«Un silencio blanco» es…",
            ["sinestesia", "hipérbole", "sinécdoque", "símil"],
            0,
            "Mezcla oído y vista."
          ),
        ]
      ),
    ],
    [
      fb("Metáfora.", "El mar era como un espejo. → El mar ___ un espejo.", "era", "Se elimina el nexo."),
      fb("Personificación.", "Las persianas ___ con el viento. (quejarse, imperfecto)", "se quejaban", "Verbo humano."),
      fb("Sinestesia.", "Tenía una voz ___: suave al tacto de las palabras. (como el terciopelo)", "aterciopelada", "Voz aterciopelada."),
      mc(
        "¿Qué versión está recargada?",
        ["El sol, como una naranja furiosa, un ojo de fuego, un rey de oro, un volcán colgado, ardía.", "El sol ardía sobre los tejados.", "El sol mordía la piel.", "Un sol de plomo aplastaba el pueblo."],
        0,
        "Acumulación excesiva."
      ),
      ms(
        "¿Cuáles son sinestesias?",
        ["un color estridente", "una música dulce", "un perfume azul", "un árbol alto"],
        [0, 1, 2],
        "«Árbol alto» es literal."
      ),
      toEs("The house breathed in the darkness.", "La casa respiraba en la oscuridad.", "Personificación.", ["La casa respiraba en lo oscuro."]),
      wo("Un sol de plomo aplastaba las calles vacías del pueblo.", "Metáfora.", "A leaden sun crushed the village's empty streets."),
    ]
  ),
  L(
    "creative-writing-techniques-3",
    "c2r-writing-editor-dialogue",
    "Laboratorio de diálogo: la editora y el escritor",
    "Recibe y responde a críticas de un borrador: tensión narrativa, ritmo, diálogos y punto de vista.",
    "7 min",
    [
      sec(
        "El lenguaje de la edición",
        "Críticas habituales: «El clímax llega sin preparación», «Los diálogos suenan artificiales», «Hay un salto de punto de vista», «El ritmo decae en el segundo acto», «Sobran adjetivos». Respuestas del escritor: «Tienes razón; ¿qué propondrías?», «Lo he hecho a propósito para…», «Voy a podar el capítulo tres».",
        [
          ["El ritmo decae en el segundo acto.", "The pace flags in the second act."],
          ["Voy a podar el capítulo tres.", "I'm going to trim chapter three."],
        ],
        [
          mc(
            "«Podar un texto» significa…",
            ["recortar lo que sobra", "ampliarlo", "traducirlo", "publicarlo"],
            0,
            "Metáfora editorial."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El ___ decae en la parte central de la novela. (velocidad narrativa)", "ritmo", "Ritmo."),
      fb("Completa.", "Hay un salto de punto de ___: de repente sabemos lo que piensa otro personaje.", "vista", "Punto de vista."),
      fb("Completa.", "Lo he hecho a ___ para desconcertar al lector.", "propósito", "A propósito = deliberadamente."),
      mc(
        "«Los diálogos suenan acartonados» significa que…",
        ["son rígidos y poco naturales", "son muy divertidos", "son demasiado cortos", "tienen errores ortográficos"],
        0,
        "Acartonado = artificial."
      ),
      mc(
        "Mejor respuesta a una crítica con la que estás de acuerdo:",
        ["Tienes razón; ¿qué propondrías para prepararlo mejor?", "No sabes leer.", "Así se queda.", "Me da igual."],
        0,
        "Colaboración."
      ),
      toEs("The climax arrives without any build-up.", "El clímax llega sin ninguna preparación.", "Crítica editorial.", ["El clímax llega sin preparación.", "El clímax llega sin nada que lo prepare."]),
      wo("Voy a recortar el capítulo tres para mejorar el ritmo.", "Respuesta del escritor.", "I'm going to cut chapter three to improve the pacing."),
    ]
  ),
  L(
    "creative-writing-techniques-3",
    "c2r-writing-mission-microstory",
    "Misión real: un microrrelato de 100 palabras",
    "Escribe un microrrelato con título significativo, elipsis, final abierto o giro, y una sola imagen poderosa.",
    "9 min",
    [
      sec(
        "Claves del microrrelato",
        "Título que aporta información («El dinosaurio», de Monterroso: «Cuando despertó, el dinosaurio todavía estaba allí»). Elipsis: lo no dicho pesa tanto como lo dicho. Empezar in medias res (en mitad de la acción). Final con giro o abierto. Cada palabra cuenta: sin adjetivos superfluos.",
        [
          ["Cuando despertó, el dinosaurio todavía estaba allí. (Augusto Monterroso)", "When he woke up, the dinosaur was still there."],
        ],
        [
          mc(
            "¿Por qué funciona «El dinosaurio»?",
            ["por la elipsis: el lector imagina todo lo anterior y posterior", "porque describe mucho al dinosaurio", "porque es largo", "porque tiene diálogo"],
            0,
            "Poder de lo no dicho."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Empezar in medias ___ significa comenzar en plena acción.", "res", "In medias res."),
      fb("Completa.", "La ___ omite información que el lector debe reconstruir.", "elipsis", "Elipsis."),
      mc(
        "¿Qué inicio es in medias res?",
        ["Soltó el cuchillo cuando oyó la llave en la cerradura.", "Había una vez, hace mucho tiempo, un reino lejano.", "Me llamo Juan y voy a contar mi vida.", "Este relato trata de una familia."],
        0,
        "En plena acción."
      ),
      mc(
        "¿Qué título aporta más al microrrelato de una mujer que espera a alguien que nunca llega?",
        ["Andén 3, treinta años", "Una historia", "La mujer", "Relato número 1"],
        0,
        "Añade tiempo y lugar significativos."
      ),
      ms(
        "¿Qué rasgos definen el microrrelato?",
        ["brevedad extrema", "elipsis", "final con giro o abierto", "muchos personajes y subtramas"],
        [0, 1, 2],
        "No caben muchas subtramas."
      ),
      toEs("When she opened the door, nobody was there. Again.", "Cuando abrió la puerta, no había nadie. Otra vez.", "Microrrelato.", ["Cuando abrió la puerta, no había nadie. De nuevo."]),
      wo("Guardó la última carta sin abrirla, como todas las anteriores.", "Giro final por elipsis.", "She put the last letter away unopened, like all the ones before."),
    ]
  ),
  L(
    "modismos-expresiones-idiomaticas-drill-3",
    "c2r-extra-idioms-situations",
    "Práctica extra: el modismo justo para cada situación",
    "Ocho situaciones cotidianas: elige el modismo que usaría un nativo.",
    "7 min",
    [
      sec(
        "De la situación al modismo",
        "Alguien se equivoca en público → meter la pata. Alguien dice lo que piensa sin filtros → no tener pelos en la lengua. Algo es facilísimo → ser pan comido. Algo es carísimo → costar un ojo de la cara. Estás harto → estar hasta las narices. Alguien exagera un problema pequeño → ahogarse en un vaso de agua.",
        [
          ["No te ahogues en un vaso de agua: tiene solución.", "Don't make a mountain out of a molehill: it can be fixed."],
        ],
        [
          mc(
            "Tu amigo se agobia porque ha perdido un bolígrafo barato:",
            ["Te estás ahogando en un vaso de agua.", "Eso es pan comido.", "No tienes pelos en la lengua.", "Te ha costado un riñón."],
            0,
            "Exagerar un problema menor."
          ),
        ]
      ),
    ],
    [
      mc(
        "Tu compañera le dice al director exactamente lo que piensa:",
        ["No tiene pelos en la lengua.", "Está en la luna.", "Se ahoga en un vaso de agua.", "Tira la toalla."],
        0,
        "Franqueza."
      ),
      mc(
        "Estás distraído y no oyes la pregunta:",
        ["Perdona, estaba en las nubes.", "Perdona, estaba hasta las narices.", "Perdona, me costó un riñón.", "Perdona, era pan comido."],
        0,
        "Estar en las nubes = distraído."
      ),
      fb("Completa.", "Llevo tres horas esperando; estoy hasta las ___.", "narices", "Estar harto."),
      fb("Completa.", "No te ahogues en un vaso de ___.", "agua", "Exagerar."),
      fb("Completa.", "Contó el secreto sin querer: metió la ___.", "pata", "Equivocarse."),
      mc(
        "«Tirar la casa por la ventana» significa…",
        ["gastar mucho dinero en una celebración", "mudarse", "limpiar a fondo", "enfadarse"],
        0,
        "Derrochar."
      ),
      wo("Para la boda de su hija tiraron la casa por la ventana.", "Modismo de derroche.", "They spared no expense for their daughter's wedding."),
    ]
  ),
  L(
    "modismos-expresiones-idiomaticas-drill-3",
    "c2r-extra-idioms-translate-equivalents",
    "Práctica extra: equivalentes, no traducciones",
    "Busca el modismo español equivalente a expresiones inglesas, evitando el calco literal.",
    "7 min",
    [
      sec(
        "Equivalencia funcional",
        "Break a leg → ¡Mucha mierda! (teatro, coloquial) / ¡Suerte! Once in a blue moon → De Pascuas a Ramos / muy de vez en cuando. To beat around the bush → andarse por las ramas / irse por los cerros de Úbeda. To spill the beans → irse de la lengua. It's all Greek to me → me suena a chino.",
        [
          ["Deja de andarte por las ramas.", "Stop beating around the bush."],
          ["Esto me suena a chino.", "It's all Greek to me."],
        ],
        [
          mc(
            "«To spill the beans» →",
            ["irse de la lengua", "derramar las judías", "tirar los frijoles", "comer habas"],
            0,
            "Revelar un secreto."
          ),
        ]
      ),
    ],
    [
      toEs("Stop beating around the bush.", "Deja de andarte por las ramas.", "Modismo equivalente.", ["No te andes por las ramas.", "Deja de irte por las ramas.", "Deja de irte por los cerros de Úbeda."]),
      toEs("It's all Greek to me.", "Me suena a chino.", "Modismo equivalente.", ["Esto me suena a chino.", "Para mí es chino."]),
      fb("Equivalente.", "Nos vemos de Pascuas a ___. (muy de vez en cuando)", "Ramos", "De Pascuas a Ramos."),
      fb("Equivalente.", "Se fue de la ___ y contó la sorpresa. (reveló el secreto)", "lengua", "Irse de la lengua."),
      mc(
        "«To kill time» →",
        ["matar el tiempo", "asesinar el reloj", "perder la hora", "romper el tiempo"],
        0,
        "Este sí coincide."
      ),
      mc(
        "«To be in hot water» →",
        ["estar en apuros / en un lío", "estar en agua caliente", "tener fiebre", "bañarse"],
        0,
        "Equivalente funcional."
      ),
      toEn("Se fue por los cerros de Úbeda.", "He went off on a tangent.", "Divagar.", ["He went off topic.", "He wandered off the point.", "He beat around the bush."]),
    ]
  ),
  L(
    "modismos-expresiones-idiomaticas-drill-3",
    "c2r-extra-idioms-story-cloze",
    "Práctica extra: una historia llena de modismos",
    "Completa un relato breve con el modismo exacto en cada hueco.",
    "8 min",
    [
      sec(
        "La historia de Pedro",
        "«Pedro llevaba semanas con la mosca detrás de la oreja: su socio actuaba raro. Un día, lo pilló con las manos en la masa, vendiendo información a la competencia. En lugar de montar un escándalo, prefirió cortar por lo sano: rompió la sociedad y empezó de cero. Al principio las pasó canutas, pero al final salió adelante.»",
        [
          ["Estar con la mosca detrás de la oreja.", "To be suspicious."],
          ["Pasarlas canutas.", "To have a really hard time."],
        ],
        [
          mc(
            "«Pillar a alguien con las manos en la masa» significa…",
            ["sorprenderlo en plena falta", "ayudarlo a cocinar", "saludarlo", "despedirlo"],
            0,
            "In fraganti."
          ),
        ]
      ),
    ],
    [
      fb("Completa según el texto.", "Llevaba semanas con la mosca detrás de la ___.", "oreja", "Sospechar."),
      fb("Completa según el texto.", "Prefirió cortar por lo ___.", "sano", "Solución drástica."),
      fb("Completa según el texto.", "Al principio las pasó ___.", "canutas", "Pasarlo muy mal."),
      mc(
        "¿Qué sentía Pedro al principio?",
        ["sospecha", "alegría", "indiferencia", "gratitud"],
        0,
        "Mosca detrás de la oreja."
      ),
      mc(
        "«Salir adelante» significa…",
        ["superar las dificultades", "salir de casa", "adelantar a otro coche", "ir al frente"],
        0,
        "Superación."
      ),
      toEs("They caught him red-handed.", "Lo pillaron con las manos en la masa.", "Modismo.", ["Le pillaron con las manos en la masa.", "Lo agarraron con las manos en la masa.", "Lo pillaron in fraganti."]),
      wo("Al final, a pesar de todo, consiguió salir adelante.", "Salir adelante.", "In the end, despite everything, he managed to get through it."),
    ]
  ),
  L(
    "refranes-dichos-populares-drill-3",
    "c2r-extra-proverbs-meaning",
    "Práctica extra: del refrán a su enseñanza",
    "Refranes menos conocidos: interpreta su mensaje y relaciónalo con situaciones.",
    "7 min",
    [
      sec(
        "Refranes para interpretar",
        "Quien mucho abarca, poco aprieta (quien intenta demasiado, no hace nada bien). A buen entendedor, pocas palabras bastan. Quien calla, otorga (el silencio se interpreta como consentimiento). Cada loco con su tema. Genio y figura hasta la sepultura (el carácter no cambia). Tanto va el cántaro a la fuente que al final se rompe (el riesgo repetido acaba mal).",
        [
          ["Quien mucho abarca, poco aprieta.", "Jack of all trades, master of none."],
          ["A buen entendedor, pocas palabras bastan.", "A word to the wise is enough."],
        ],
        [
          mc(
            "Tu amigo se apunta a cinco cursos a la vez y no termina ninguno:",
            ["Quien mucho abarca, poco aprieta.", "Quien calla, otorga.", "Genio y figura hasta la sepultura.", "Cada loco con su tema."],
            0,
            "Exceso de frentes."
          ),
        ]
      ),
    ],
    [
      mc(
        "Nadie protesta en la reunión y el jefe da la propuesta por aprobada:",
        ["Quien calla, otorga.", "A buen entendedor, pocas palabras bastan.", "Tanto va el cántaro a la fuente…", "Quien mucho abarca…"],
        0,
        "Silencio = consentimiento."
      ),
      mc(
        "Tu abuelo, a los 90, sigue igual de terco que siempre:",
        ["Genio y figura hasta la sepultura.", "Quien calla, otorga.", "Cada loco con su tema.", "Más vale tarde que nunca."],
        0,
        "El carácter no cambia."
      ),
      fb("Completa.", "Tanto va el cántaro a la fuente que al final se ___.", "rompe", "Riesgo repetido."),
      fb("Completa.", "A buen entendedor, pocas ___ bastan.", "palabras", "Refrán."),
      fb("Completa.", "Cada loco con su ___.", "tema", "Cada uno con su manía."),
      mt(
        "Relaciona el refrán con su enseñanza.",
        [
          ["Quien mucho abarca, poco aprieta.", "No intentes hacer demasiado a la vez."],
          ["Quien calla, otorga.", "El silencio implica aceptación."],
          ["Tanto va el cántaro a la fuente…", "Quien se arriesga a menudo acaba mal."],
        ],
        "Refranes."
      ),
      wo("Ya sabes lo que dicen: quien mucho abarca, poco aprieta.", "Citar un refrán.", "You know what they say: don't bite off more than you can chew."),
    ]
  ),
  L(
    "refranes-dichos-populares-drill-3",
    "c2r-extra-proverbs-rhythm",
    "Práctica extra: rima y ritmo del refrán",
    "Reconstruye refranes por su rima y su paralelismo, y crea variantes humorísticas.",
    "7 min",
    [
      sec(
        "La música del refrán",
        "Rima: «Al pan, pan, y al vino, vino» (llamar las cosas por su nombre). «En abril, aguas mil». «Donde fueres, haz lo que vieres». Paralelismo: «Unos nacen con estrella y otros nacen estrellados». Juego humorístico: el hablante culto a veces deforma refranes con ironía («A quien madruga… le entra sueño a mediodía»).",
        [
          ["Donde fueres, haz lo que vieres.", "When in Rome, do as the Romans do."],
          ["Unos nacen con estrella y otros nacen estrellados.", "Some are born lucky and others are born unlucky."],
        ],
        [
          mc(
            "«Al pan, pan, y al vino, vino» aconseja…",
            ["hablar claro, sin rodeos", "comer bien", "no beber", "compartir la comida"],
            0,
            "Llamar a las cosas por su nombre."
          ),
        ]
      ),
    ],
    [
      fb("Completa (rima).", "En abril, aguas ___.", "mil", "Rima con abril: abril / mil."),
      fb("Completa (rima).", "Donde fueres, haz lo que ___.", "vieres", "Futuro de subjuntivo arcaico."),
      fb("Completa (paralelismo).", "Unos nacen con estrella y otros nacen ___.", "estrellados", "Juego de palabras."),
      mc(
        "«Fueres» y «vieres» son formas de…",
        ["futuro de subjuntivo", "pretérito indefinido", "condicional", "presente de subjuntivo"],
        0,
        "Arcaísmo conservado en refranes."
      ),
      mc(
        "«A quien madruga… le entra sueño a mediodía» es…",
        ["una deformación humorística del refrán", "el refrán original", "un error", "una cita de un filósofo"],
        0,
        "Juego irónico."
      ),
      toEs("When in Rome, do as the Romans do.", "Donde fueres, haz lo que vieres.", "Refrán equivalente.", ["Allá donde fueres, haz lo que vieres."]),
      wo("Al pan, pan, y al vino, vino: habla claro de una vez.", "Refrán con repetición.", "Call a spade a spade: speak plainly for once."),
    ]
  ),
  L(
    "refranes-dichos-populares-drill-3",
    "c2r-extra-proverbs-debate",
    "Práctica extra: refranes como argumento",
    "Usa y rebate refranes en una discusión: el refrán apoya, pero no demuestra.",
    "7 min",
    [
      sec(
        "El refrán en la argumentación",
        "Apoyo: «Como dice el refrán, más vale prevenir que curar». Rebatirlo: «El refranero también dice lo contrario», «Eso será en tu pueblo», «Los refranes no son datos». Usarlo con ironía: «Sí, sí, a quien madruga Dios le ayuda… y luego se duerme en la reunión». Un refrán es un recurso de autoridad popular, no una prueba.",
        [
          ["El refranero también dice lo contrario.", "Proverbs also say the opposite."],
          ["Los refranes no son datos.", "Proverbs aren't data."],
        ],
        [
          mc(
            "«—Más vale prevenir que curar. —Ya, pero quien no se arriesga no cruza el río.» La réplica…",
            ["opone un refrán contrario", "acepta el argumento", "cambia de tema", "es un insulto"],
            0,
            "Refranes contradictorios."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Los refranes no son ___: son sabiduría popular. (pruebas objetivas)", "datos", "Límite del refrán."),
      fb("Completa.", "El ___ también dice lo contrario. (conjunto de refranes)", "refranero", "Refranero."),
      mc(
        "¿Por qué un refrán no demuestra nada?",
        ["porque es una generalización popular, no una evidencia", "porque es antiguo", "porque rima", "porque es corto"],
        0,
        "Autoridad popular."
      ),
      mc(
        "Uso adecuado de un refrán en un debate formal:",
        ["Como apunta el refrán, más vale prevenir que curar, y los datos lo confirman.", "El refrán lo dice y punto.", "Refrán, luego verdad.", "Mi abuela lo decía, así que es cierto."],
        0,
        "Refrán + evidencia."
      ),
      ms(
        "¿Qué réplicas rebaten un refrán?",
        ["El refranero también dice lo contrario.", "Los refranes no son datos.", "Eso depende del contexto.", "Totalmente de acuerdo."],
        [0, 1, 2],
        "La última acepta."
      ),
      toEs("Proverbs are not evidence.", "Los refranes no son pruebas.", "Límite del refrán.", ["Los refranes no son datos.", "Un refrán no es una prueba."]),
      wo("El refranero también dice lo contrario, así que no nos sirve de mucho.", "Rebatir un refrán.", "The proverbs also say the opposite, so it's not much help to us."),
    ]
  ),
  L(
    "espanol-juridico-administrativo-drill-3",
    "c2r-extra-legal-verbs-collocations",
    "Práctica extra: colocaciones del lenguaje jurídico",
    "Interponer un recurso, dictar sentencia, incoar un expediente, elevar a público: verbo y sustantivo que van juntos.",
    "7 min",
    [
      sec(
        "Colocaciones fijas",
        "Interponer un recurso / una demanda. Dictar sentencia / un auto. Incoar (iniciar) un expediente / un procedimiento. Elevar a público un contrato (formalizarlo ante notario). Formular alegaciones. Levantar acta. Prestar declaración. Otorgar escritura / poder. Incurrir en una infracción.",
        [
          ["Se incoó un expediente sancionador.", "Disciplinary proceedings were opened."],
          ["El testigo prestó declaración ante el juez.", "The witness gave evidence before the judge."],
        ],
        [
          mc(
            "Se ___ acta de la reunión.",
            ["levantó", "dictó", "interpuso", "otorgó"],
            0,
            "Levantar acta."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el verbo con su colocación.",
        [
          ["incoar", "un expediente"],
          ["formular", "alegaciones"],
          ["prestar", "declaración"],
          ["incurrir en", "una infracción"],
        ],
        "Colocaciones jurídicas."
      ),
      fb("Completa.", "El juez ___ sentencia condenatoria. (pretérito)", "dictó", "Dictar sentencia."),
      fb("Completa.", "Tienen diez días para ___ alegaciones.", "formular", "Formular alegaciones."),
      fb("Completa.", "El contrato se elevó a ___ ante notario.", "público", "Elevar a público."),
      mc(
        "«Incoar» significa…",
        ["iniciar un procedimiento", "cerrar un caso", "pagar una multa", "firmar un contrato"],
        0,
        "Término técnico."
      ),
      toEs("The witness gave a statement to the police.", "El testigo prestó declaración ante la policía.", "Colocación.", ["El testigo declaró ante la policía.", "El testigo prestó declaración en comisaría."]),
      wo("La Administración incoó un expediente sancionador contra la empresa.", "Colocación jurídica.", "The Administration opened disciplinary proceedings against the company."),
    ]
  ),
  L(
    "espanol-juridico-administrativo-drill-3",
    "c2r-extra-legal-plain-rewrite",
    "Práctica extra: explicar una carta oficial a un familiar",
    "Tu abuela recibe una carta del ayuntamiento: explícasela en español claro, sin perder los datos importantes.",
    "8 min",
    [
      sec(
        "La carta",
        "«Se le requiere para que, en el plazo improrrogable de quince días hábiles, aporte la documentación acreditativa de su empadronamiento, apercibiéndole de que, de no hacerlo, se procederá al archivo de su solicitud de ayuda, previa resolución dictada al efecto.»",
        [
          ["Plazo improrrogable = plazo que no se puede ampliar.", "Non-extendable deadline."],
          ["Apercibir = advertir de una consecuencia.", "To warn of a consequence."],
        ],
        [
          mc(
            "¿Qué tiene que hacer la abuela?",
            ["llevar un certificado de empadronamiento en 15 días hábiles", "pagar una multa", "presentarse ante el juez", "mudarse"],
            0,
            "Aportar documentación acreditativa."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué pasa si no lo hace?",
        ["archivan (cierran) su solicitud de ayuda", "le dan la ayuda igualmente", "le amplían el plazo", "la multan"],
        0,
        "Archivo de la solicitud."
      ),
      mc(
        "«Improrrogable» significa…",
        ["que no se puede ampliar", "que es muy largo", "que empieza mañana", "que es opcional"],
        0,
        "Prórroga = ampliación."
      ),
      fb("Explica con palabras claras.", "Apercibiéndole de que… → ___ de que… (avisándole)", "Advirtiéndole", "Apercibir = advertir."),
      fb("Explica con palabras claras.", "Documentación acreditativa → documentos que lo ___. (demostrar)", "demuestren", "Relativo + subjuntivo."),
      fb("Explica.", "Tienes quince días ___, así que no cuentan los fines de semana.", "hábiles", "Días hábiles."),
      toEs("Grandma, you have fifteen working days to bring the certificate.", "Abuela, tienes quince días hábiles para llevar el certificado.", "Lenguaje claro.", ["Abuela, tienes quince días hábiles para entregar el certificado.", "Abuela, tienes 15 días hábiles para llevar el certificado."]),
      wo("Si no llevas el papel a tiempo, te cierran la solicitud.", "Explicación clara.", "If you don't take the paper in on time, they'll close your application."),
    ]
  ),
  L(
    "espanol-juridico-administrativo-drill-3",
    "c2r-extra-legal-rental-contract",
    "Práctica extra: el contrato de alquiler",
    "Arrendador, arrendatario, fianza, prórroga tácita, desistimiento, renta: lee cláusulas y responde a casos prácticos.",
    "8 min",
    [
      sec(
        "Cláusulas clave",
        "Duración: «un año, prorrogable tácitamente por periodos anuales» (se renueva si nadie dice nada). Renta: cantidad mensual; actualización según IPC. Fianza: un mes de renta, se devuelve al final si no hay daños. Desistimiento: el arrendatario puede irse tras seis meses avisando con treinta días de antelación. Obras: requieren consentimiento escrito del arrendador.",
        [
          ["El contrato se prorrogará tácitamente por periodos anuales.", "The contract will be tacitly renewed for annual periods."],
          ["El arrendatario podrá desistir avisando con treinta días de antelación.", "The tenant may withdraw by giving thirty days' notice."],
        ],
        [
          mc(
            "Nadie comunica nada al terminar el año. ¿Qué ocurre?",
            ["El contrato se renueva automáticamente otro año.", "El contrato se anula.", "Hay que firmar ante notario.", "Se pierde la fianza."],
            0,
            "Prórroga tácita."
          ),
        ]
      ),
    ],
    [
      mc(
        "El inquilino quiere pintar la casa de negro. ¿Qué necesita?",
        ["consentimiento escrito del arrendador", "nada", "permiso del ayuntamiento", "una sentencia"],
        0,
        "Cláusula de obras."
      ),
      mc(
        "El inquilino se va a los cuatro meses. ¿Puede desistir según la cláusula?",
        ["No, debe haber pasado al menos seis meses.", "Sí, sin condiciones.", "Sí, pero pierde el doble de fianza.", "Solo con abogado."],
        0,
        "Mínimo seis meses."
      ),
      fb("Completa.", "La ___ equivale a un mes de renta y se devuelve al final.", "fianza", "Fianza."),
      fb("Completa.", "El ___ es quien alquila la vivienda a otro (el propietario).", "arrendador", "Arrendador."),
      fb("Completa.", "La renta se ___ anualmente según el IPC. (poner al día)", "actualizará", "Actualizar."),
      toEs("The tenant must give thirty days' notice.", "El arrendatario deberá avisar con treinta días de antelación.", "Cláusula.", ["El arrendatario deberá preavisar con treinta días de antelación.", "El inquilino deberá avisar con treinta días de antelación."]),
      wo("La fianza se devolverá al finalizar el contrato si no hay desperfectos.", "Cláusula de fianza.", "The deposit will be returned at the end of the contract if there is no damage."),
    ]
  ),
  L(
    "espanol-medico-drill-3",
    "c2r-extra-medical-prefixes",
    "Práctica extra: descifrar términos médicos por su forma",
    "Prefijos y sufijos griegos y latinos (-itis, -algia, -ectomía, hiper-, hipo-, taqui-, bradi-) para entender términos nuevos.",
    "7 min",
    [
      sec(
        "Morfología médica",
        "-itis: inflamación (gastritis, otitis). -algia: dolor (neuralgia, mialgia). -ectomía: extirpación (apendicectomía). -scopia: observación (endoscopia). Hiper- / hipo-: exceso / defecto (hipertensión, hipoglucemia). Taqui- / bradi-: rápido / lento (taquicardia, bradicardia). Cardi-: corazón; gastr-: estómago; derm-: piel; neur-: nervio; hepat-: hígado.",
        [
          ["Hepatitis = inflamación del hígado.", "Inflammation of the liver."],
          ["Taquicardia = latido rápido del corazón.", "Fast heartbeat."],
        ],
        [
          mc(
            "«Mialgia» significa…",
            ["dolor muscular", "inflamación del ojo", "extirpación de un músculo", "exceso de azúcar"],
            0,
            "Mi- (músculo) + -algia (dolor)."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el afijo con su significado.",
        [
          ["-itis", "inflamación"],
          ["-ectomía", "extirpación"],
          ["bradi-", "lento"],
          ["hipo-", "por debajo de lo normal"],
        ],
        "Morfología médica."
      ),
      fb("Deduce.", "Inflamación de la piel: ___. (derm- + -itis)", "dermatitis", "Dermatitis."),
      fb("Deduce.", "Nivel bajo de azúcar en sangre: ___. (hipo- + glucemia)", "hipoglucemia", "Hipoglucemia."),
      fb("Deduce.", "Ritmo cardíaco lento: ___. (bradi- + cardia)", "bradicardia", "Bradicardia."),
      mc(
        "«Gastroscopia» es…",
        ["observación del estómago con un instrumento", "extirpación del estómago", "dolor de estómago", "inflamación del estómago"],
        0,
        "Gastr- + -scopia."
      ),
      ms(
        "¿Qué términos indican inflamación?",
        ["otitis", "artritis", "neuralgia", "conjuntivitis"],
        [0, 1, 3],
        "Neuralgia = dolor."
      ),
      wo("Le extirparon la vesícula en una colecistectomía sin complicaciones.", "Sufijo -ectomía.", "They removed her gallbladder in an uncomplicated cholecystectomy."),
    ]
  ),
  L(
    "espanol-medico-drill-3",
    "c2r-extra-medical-pharmacy-leaflet",
    "Práctica extra: el prospecto del medicamento",
    "Lee un prospecto y responde a preguntas prácticas: indicaciones, contraindicaciones, posología y efectos adversos.",
    "8 min",
    [
      sec(
        "El prospecto",
        "«Indicaciones: alivio sintomático del dolor leve o moderado. Contraindicaciones: no tomar en caso de úlcera gástrica ni durante el tercer trimestre de embarazo. Posología: adultos, un comprimido cada 8 horas; no superar los tres comprimidos al día. Efectos adversos frecuentes: náuseas y ardor de estómago. Si los síntomas persisten más de cinco días, consulte a su médico.»",
        [
          ["Contraindicaciones: situaciones en que no se debe tomar.", "Contraindications."],
          ["No superar los tres comprimidos al día.", "Do not exceed three tablets a day."],
        ],
        [
          mc(
            "¿Puede tomarlo una persona con úlcera gástrica?",
            ["No, está contraindicado.", "Sí, sin problemas.", "Sí, pero solo por la noche.", "Solo si es adulta."],
            0,
            "Contraindicación."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Cuál es la dosis máxima diaria?",
        ["tres comprimidos", "uno cada hora", "ocho comprimidos", "no hay máximo"],
        0,
        "No superar tres al día."
      ),
      mc(
        "El dolor sigue al sexto día. ¿Qué hay que hacer?",
        ["consultar al médico", "duplicar la dosis", "seguir otra semana", "cambiar de farmacia"],
        0,
        "Persistencia > 5 días."
      ),
      fb("Completa.", "Las ___ indican para qué sirve el medicamento.", "indicaciones", "Indicaciones."),
      fb("Completa.", "Los efectos ___ más frecuentes son náuseas y ardor.", "adversos", "Efectos adversos."),
      fb("Completa (imperativo usted).", "Si los síntomas persisten, ___ a su médico. (consultar)", "consulte", "Imperativo formal."),
      mt(
        "Relaciona la sección del prospecto con su contenido.",
        [
          ["posología", "dosis y frecuencia"],
          ["contraindicaciones", "cuándo no tomarlo"],
          ["efectos adversos", "reacciones no deseadas"],
        ],
        "Secciones del prospecto."
      ),
      wo("No supere la dosis recomendada sin consultar antes a su médico.", "Advertencia del prospecto.", "Do not exceed the recommended dose without consulting your doctor first."),
    ]
  ),
  L(
    "espanol-medico-drill-3",
    "c2r-extra-medical-emergency-call",
    "Práctica extra: llamar a emergencias",
    "Describe una urgencia al 112 con precisión: qué pasa, dónde, estado de la persona y qué has hecho.",
    "7 min",
    [
      sec(
        "Información esencial",
        "Qué: «Un hombre de unos 60 años se ha desplomado en la calle». Dónde: dirección exacta y referencias. Estado: «Está consciente / inconsciente», «respira / no respira», «sangra abundantemente». Qué has hecho: «Le he puesto de lado (posición lateral de seguridad)», «Estoy haciendo compresiones». Seguir las instrucciones del operador.",
        [
          ["Está inconsciente pero respira.", "He's unconscious but breathing."],
          ["Lo he puesto en posición lateral de seguridad.", "I've put him in the recovery position."],
        ],
        [
          mc(
            "¿Qué dato es imprescindible dar primero?",
            ["la ubicación exacta", "tu profesión", "la marca del coche", "la hora de tu cita"],
            0,
            "Para que lleguen."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Un señor se ha ___ en plena calle. (caerse de golpe, participio)", "desplomado", "Desplomarse."),
      fb("Completa.", "Está ___: no responde cuando le hablo.", "inconsciente", "Estado de conciencia."),
      fb("Completa.", "Lo he puesto en posición lateral de ___.", "seguridad", "Posición lateral de seguridad (PLS)."),
      mc(
        "El operador pregunta: «¿Respira?». Respuesta útil:",
        ["Sí, respira, pero con dificultad.", "No sé, creo que sí, no sé.", "Está en la calle.", "Tiene 60 años."],
        0,
        "Precisa el estado."
      ),
      ms(
        "¿Qué información es relevante en la llamada?",
        ["dirección exacta", "si la persona respira", "si está consciente", "tu opinión sobre el tráfico"],
        [0, 1, 2],
        "Lo último es irrelevante."
      ),
      toEs("He's unconscious but he's breathing.", "Está inconsciente, pero respira.", "Estado del paciente.", ["Está inconsciente pero respira.", "Está inconsciente, pero está respirando."]),
      wo("Estamos en la esquina de la calle Mayor con la plaza del Carmen.", "Ubicación precisa.", "We're on the corner of Calle Mayor and Plaza del Carmen."),
    ]
  ),
  L(
    "metaforas-eufemismos-lenguaje-figurado-drill-3",
    "c2r-extra-figurative-everyday-metaphors",
    "Práctica extra: metáforas que ya no vemos",
    "«El pie de la montaña», «la cabeza de la lista», «invertir tiempo»: metáforas lexicalizadas del día a día.",
    "7 min",
    [
      sec(
        "Metáforas conceptuales",
        "El tiempo es dinero: invertir, gastar, ahorrar, perder tiempo. Las discusiones son guerras: atacar un argumento, defender una postura, ganar/perder un debate. Las ideas son alimentos: digerir una noticia, tragarse una mentira, una idea indigesta. El cuerpo en los objetos: el pie de la montaña, el brazo del sillón, la boca del metro.",
        [
          ["Me costó digerir la noticia.", "It was hard to take in the news."],
          ["Atacó cada punto de mi argumento.", "He attacked every point of my argument."],
        ],
        [
          mc(
            "«No me trago esa excusa» se basa en la metáfora…",
            ["las ideas son alimentos", "el tiempo es dinero", "las discusiones son guerras", "la vida es un viaje"],
            0,
            "Tragar = aceptar."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la expresión con su metáfora conceptual.",
        [
          ["invertir tiempo", "el tiempo es dinero"],
          ["defender una postura", "discutir es guerrear"],
          ["una idea indigesta", "las ideas son alimentos"],
          ["estar en una encrucijada", "la vida es un viaje"],
        ],
        "Metáforas conceptuales."
      ),
      fb("Completa.", "No quiero ___ más tiempo en esta discusión. (desperdiciar, metáfora económica)", "perder", "Perder tiempo."),
      fb("Completa.", "Nos vemos en la ___ del metro. (entrada, parte del cuerpo)", "boca", "Boca del metro."),
      fb("Completa.", "Su argumento no resistió el primer ___. (asalto bélico)", "ataque", "Metáfora bélica."),
      mc(
        "«Estoy en una encrucijada» significa…",
        ["tengo que tomar una decisión importante", "estoy perdido en la ciudad", "estoy en un cruce de calles literalmente siempre", "estoy de viaje"],
        0,
        "La vida es un viaje."
      ),
      ms(
        "¿Qué expresiones usan la metáfora «el tiempo es dinero»?",
        ["ahorrar tiempo", "gastar el tiempo", "invertir tiempo", "matar el tiempo"],
        [0, 1, 2],
        "«Matar el tiempo» es otra imagen."
      ),
      wo("Tardé días en digerir lo que me había contado.", "Metáfora alimentaria.", "It took me days to take in what he had told me."),
    ]
  ),
  L(
    "metaforas-eufemismos-lenguaje-figurado-drill-3",
    "c2r-extra-euphemism-dysphemism",
    "Práctica extra: eufemismo y disfemismo",
    "Suavizar o endurecer: «falleció» frente a «la palmó», «persona sin hogar» frente a términos despectivos.",
    "7 min",
    [
      sec(
        "Dos direcciones",
        "Eufemismo: suaviza (fallecer, invidente, persona sin hogar, interrupción del embarazo). Disfemismo: endurece o ridiculiza, a menudo con humor o desprecio (palmarla, estirar la pata, criar malvas, la caja tonta por la televisión). Término neutro: morir, ciego, mendigo, televisión. Elegir uno u otro revela la actitud del hablante.",
        [
          ["Estiró la pata a los noventa. (disfemismo coloquial)", "He kicked the bucket at ninety."],
          ["Falleció a los noventa años. (eufemismo formal)", "He passed away at ninety."],
        ],
        [
          mc(
            "«La caja tonta» por «la televisión» es…",
            ["un disfemismo", "un eufemismo", "un término técnico", "un tecnicismo médico"],
            0,
            "Ridiculiza."
          ),
        ]
      ),
    ],
    [
      mt(
        "Clasifica cada expresión (sobre la muerte).",
        [
          ["fallecer", "eufemismo"],
          ["estirar la pata", "disfemismo"],
          ["morir", "término neutro"],
        ],
        "Eufemismo / disfemismo / neutro."
      ),
      fb("Eufemiza.", "Es ciego. → Es ___. (que no ve, término cortés)", "invidente", "Invidente."),
      fb("Eufemiza.", "Un mendigo → una persona sin ___.", "hogar", "Persona sin hogar."),
      mc(
        "¿En qué contexto sería inapropiado «la palmó»?",
        ["en una esquela", "en un chiste entre amigos", "en una novela de humor negro", "en una conversación informal"],
        0,
        "Registro inadecuado."
      ),
      mc(
        "«Criar malvas» significa…",
        ["estar muerto (disfemismo humorístico)", "ser jardinero", "tener mascotas", "trabajar en el campo"],
        0,
        "Disfemismo."
      ),
      ms(
        "¿Qué expresiones son disfemismos?",
        ["estirar la pata", "la caja tonta", "palmarla", "fallecer"],
        [0, 1, 2],
        "Fallecer es eufemismo."
      ),
      wo("Lamentamos comunicar que nuestro compañero falleció anoche.", "Eufemismo formal.", "We regret to announce that our colleague passed away last night."),
    ]
  ),
  L(
    "metaforas-eufemismos-lenguaje-figurado-drill-3",
    "c2r-extra-figurative-headline-analysis",
    "Práctica extra: el lenguaje figurado en los titulares",
    "Titulares de prensa llenos de metáforas, metonimias y eufemismos: descodifícalos y reescríbelos en lenguaje literal.",
    "7 min",
    [
      sec(
        "Titulares figurados",
        "«La Moncloa mueve ficha» (metonimia + metáfora del ajedrez: el Gobierno actúa). «Tormenta en los mercados» (metáfora: fuerte inestabilidad). «Ajuste de plantilla en la automoción» (eufemismo: despidos). «El Bernabéu enmudece» (metonimia: el público del estadio calla). «Luz verde a los presupuestos» (metáfora: aprobación).",
        [
          ["La Moncloa mueve ficha.", "The government makes its move."],
          ["Tormenta en los mercados.", "Turmoil in the markets."],
        ],
        [
          mc(
            "«El Bernabéu enmudece» significa…",
            ["el público del estadio se queda en silencio", "el estadio se rompe", "un jugador deja de hablar", "cierran el estadio"],
            0,
            "Metonimia: lugar por personas."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Luz verde a los presupuestos» →",
        ["Se aprueban los presupuestos.", "Se rechazan los presupuestos.", "Se ilumina el Parlamento.", "Se retrasan los presupuestos."],
        0,
        "Metáfora del semáforo."
      ),
      mc(
        "«Ajuste de plantilla en la automoción» oculta…",
        ["despidos en el sector del automóvil", "contrataciones", "subidas de sueldo", "nuevas fábricas"],
        0,
        "Eufemismo laboral."
      ),
      fb("Literaliza.", "Washington endurece el tono. → El Gobierno de Estados ___ endurece el tono.", "Unidos", "Metonimia: ciudad por Gobierno."),
      fb("Literaliza.", "Tormenta en los mercados. → Fuerte ___ en los mercados. (falta de estabilidad)", "inestabilidad", "Metáfora meteorológica."),
      mc(
        "«La Moncloa mueve ficha» combina…",
        ["metonimia y metáfora", "hipérbole y sinestesia", "eufemismo y oxímoron", "símil y anáfora"],
        0,
        "Lugar por institución + ajedrez."
      ),
      ms(
        "¿Qué titulares usan metonimia?",
        ["Bruselas advierte a Madrid", "El Bernabéu enmudece", "La Casa Rosada responde", "Sube el precio del pan"],
        [0, 1, 2],
        "El último es literal."
      ),
      wo("Bruselas da luz verde al nuevo plan de ayudas.", "Metonimia + metáfora.", "Brussels gives the green light to the new aid plan."),
    ]
  ),
  L(
    "registro-argumentacion-debate-negociacion-drill-3",
    "c2r-extra-argument-structure-order",
    "Práctica extra: ordena la argumentación",
    "Frases sueltas de una intervención: ordénalas en tesis, argumentos, concesión, refutación y conclusión.",
    "8 min",
    [
      sec(
        "Esqueleto argumentativo",
        "1) Tesis: «Defenderé que…». 2) Argumento 1: «En primer lugar…». 3) Argumento 2: «Además…». 4) Concesión: «Es cierto que…». 5) Refutación: «Sin embargo…». 6) Conclusión: «Por todo ello…». Los marcadores son la pista para reconstruir el orden.",
        [
          ["Defenderé que la jornada de cuatro días es viable.", "I will argue that the four-day week is viable."],
          ["Por todo ello, merece la pena ensayarla.", "For all these reasons, it's worth trying."],
        ],
        [
          mc(
            "«Es cierto que algunos sectores no podrán aplicarla.» ocupa el lugar de…",
            ["la concesión", "la tesis", "la conclusión", "el primer argumento"],
            0,
            "Es cierto que = concesión."
          ),
        ]
      ),
    ],
    [
      mc(
        "«En primer lugar, los estudios piloto muestran un aumento de la productividad.»",
        ["primer argumento", "conclusión", "concesión", "refutación"],
        0,
        "En primer lugar."
      ),
      mc(
        "«Sin embargo, esos sectores podrían adoptar turnos rotativos.»",
        ["refutación", "tesis", "primer argumento", "conclusión"],
        0,
        "Sin embargo tras la concesión."
      ),
      mc(
        "«Por todo ello, merece la pena ensayar la medida.»",
        ["conclusión", "concesión", "tesis", "argumento"],
        0,
        "Por todo ello."
      ),
      fb("Completa.", "___ que la medida es viable y beneficiosa. (anunciar la tesis, futuro)", "Defenderé", "Anuncio de tesis."),
      fb("Completa.", "___, reduce el absentismo laboral. (segundo argumento, adición)", "Además", "Adición."),
      mc(
        "Orden correcto:",
        ["tesis → argumentos → concesión → refutación → conclusión", "conclusión → tesis → refutación", "concesión → conclusión → tesis", "refutación → tesis → argumentos"],
        0,
        "Esqueleto clásico."
      ),
      wo("Por todo ello, considero que merece la pena ensayar la medida.", "Conclusión.", "For all these reasons, I think the measure is worth trying."),
    ]
  ),
  L(
    "registro-argumentacion-debate-negociacion-drill-3",
    "c2r-extra-negotiation-phrases-sort",
    "Práctica extra: clasifica las frases de negociación",
    "Abrir, explorar, proponer, ceder, presionar, cerrar: agrupa las fórmulas según la fase de la negociación.",
    "7 min",
    [
      sec(
        "Fases y fórmulas",
        "Abrir: «Gracias por recibirnos; nos gustaría exponer…». Explorar: «¿Qué margen tienen en el precio?». Proponer: «Nuestra propuesta es…». Ceder condicionando: «Podríamos aceptarlo siempre que…». Presionar con cortesía: «Me temo que es nuestra última oferta». Cerrar: «Entonces, ¿estamos de acuerdo en…?».",
        [
          ["Me temo que esta es nuestra última oferta.", "I'm afraid this is our final offer."],
          ["Entonces, ¿estamos de acuerdo en los tres puntos?", "So, do we agree on the three points?"],
        ],
        [
          mc(
            "«¿Qué margen tienen en los plazos?» pertenece a la fase de…",
            ["exploración", "cierre", "apertura", "presión"],
            0,
            "Explorar."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la frase con la fase.",
        [
          ["Nuestra propuesta es la siguiente…", "proponer"],
          ["Podríamos aceptarlo siempre que…", "ceder condicionando"],
          ["Entonces, ¿estamos de acuerdo en…?", "cerrar"],
          ["Me temo que es nuestra última oferta.", "presionar"],
        ],
        "Fases de negociación."
      ),
      fb("Completa (presión cortés).", "Me ___ que no podemos bajar más. (temer)", "temo", "Me temo que."),
      fb("Completa (ceder).", "Podríamos aceptarlo siempre ___ ustedes asuman el transporte.", "que", "Siempre que + subjuntivo."),
      fb("Completa (subjuntivo).", "Aceptaríamos con tal de que el pago se ___ en 30 días. (realizar)", "realice", "Con tal de que + subjuntivo."),
      ms(
        "¿Qué fórmulas cierran una negociación?",
        ["Entonces, ¿cerramos el acuerdo así?", "Les enviaré el borrador mañana.", "¿Estamos de acuerdo en estos puntos?", "¿Qué margen tienen?"],
        [0, 1, 2],
        "La última explora."
      ),
      toEs("I'm afraid this is our final offer.", "Me temo que esta es nuestra última oferta.", "Presión cortés.", ["Me temo que esta es nuestra oferta final.", "Me temo que es nuestra última oferta."]),
      wo("Podríamos ceder en el precio siempre que ampliaran el pedido.", "Ceder condicionando.", "We could give way on price provided you increased the order."),
    ]
  ),
  L(
    "registro-argumentacion-debate-negociacion-drill-3",
    "c2r-extra-register-shift-debate",
    "Práctica extra: tres registros, un argumento",
    "Formula el mismo argumento en un debate televisado, en una reunión con amigos y en un artículo académico.",
    "7 min",
    [
      sec(
        "Adaptar sin perder fuerza",
        "Argumento: las redes sociales polarizan. TV (formal oral): «Los datos indican que las redes sociales contribuyen a la polarización». Amigos: «Las redes nos tienen a todos a la gresca». Académico: «Diversos estudios sugieren una correlación entre el uso intensivo de redes sociales y el aumento de la polarización afectiva».",
        [
          ["Las redes nos tienen a todos a la gresca.", "Social media has us all at each other's throats."],
          ["Diversos estudios sugieren una correlación…", "Various studies suggest a correlation…"],
        ],
        [
          mc(
            "¿Qué versión es académica?",
            ["Diversos estudios sugieren una correlación entre ambas variables.", "Las redes nos vuelven locos.", "Todo el mundo sabe que las redes son malas.", "Las redes, ¡qué desastre!"],
            0,
            "Atenuación + léxico técnico."
          ),
        ]
      ),
    ],
    [
      fb("Coloquial.", "Las redes nos tienen a todos a la ___. (peleados)", "gresca", "A la gresca."),
      fb("Académico.", "Diversos estudios ___ una correlación entre ambas variables. (indicar con cautela)", "sugieren", "Sugerir."),
      fb("Formal oral.", "Los datos ___ que las redes contribuyen a la polarización.", "indican", "Los datos indican."),
      mt(
        "Relaciona cada versión con su contexto.",
        [
          ["Las redes nos tienen a la gresca.", "charla con amigos"],
          ["Los datos indican que las redes polarizan.", "debate televisado"],
          ["Se observa una correlación significativa.", "artículo académico"],
        ],
        "Registro y contexto."
      ),
      mc(
        "¿Qué rasgo NO es propio del registro académico?",
        ["expresiones como «a la gresca»", "atenuación", "impersonalidad", "citas de estudios"],
        0,
        "Coloquialismo."
      ),
      toEs("Various studies suggest a link between both phenomena.", "Diversos estudios sugieren una relación entre ambos fenómenos.", "Registro académico.", ["Varios estudios sugieren una relación entre ambos fenómenos.", "Diversos estudios apuntan a una relación entre ambos fenómenos."]),
      wo("Los datos indican que el uso intensivo de redes favorece la polarización.", "Registro formal.", "The data indicate that heavy social media use fosters polarization."),
    ]
  ),
  L(
    "negocios-economia-drill-3",
    "c2r-extra-business-false-friends",
    "Práctica extra: falsos amigos del inglés de negocios",
    "Actual, eventual, librería, carpeta, compromiso, asistir: evita los calcos del inglés en el español empresarial.",
    "7 min",
    [
      sec(
        "Trampas frecuentes",
        "Actually → en realidad (no «actualmente» = currently). Eventually → al final (no «eventualmente» = posiblemente). Library → biblioteca (librería = bookshop). To assist → ayudar (asistir = estar presente, aunque también ayudar en registro culto). Compromise → acuerdo / término medio (compromiso = obligación / commitment). Application → solicitud (aplicación = app). Sensible → sensato (sensible = sensitive).",
        [
          ["En realidad, el proyecto va bien.", "Actually, the project is going well."],
          ["Al final firmaron el contrato.", "Eventually they signed the contract."],
        ],
        [
          mc(
            "«Eventually we reached an agreement.»",
            ["Al final llegamos a un acuerdo.", "Eventualmente llegamos a un compromiso.", "Actualmente llegamos a un acuerdo.", "Posiblemente llegamos a un compromiso."],
            0,
            "Eventually = al final."
          ),
        ]
      ),
    ],
    [
      fb("Evita el calco.", "Actually, the numbers are good. → En ___, las cifras son buenas.", "realidad", "Actually = en realidad."),
      fb("Evita el calco.", "Fill in the application. → Rellene la ___.", "solicitud", "Application = solicitud."),
      fb("Evita el calco.", "It's a sensible decision. → Es una decisión ___.", "sensata", "Sensible = sensato."),
      mc(
        "«We reached a compromise» →",
        ["Llegamos a un acuerdo intermedio.", "Llegamos a un compromiso matrimonial.", "Nos comprometimos a nada.", "Llegamos a un compromiso obligatorio."],
        0,
        "Compromise = término medio."
      ),
      mt(
        "Relaciona el falso amigo con su traducción real.",
        [
          ["actualmente", "currently"],
          ["eventualmente", "possibly / occasionally"],
          ["librería", "bookshop"],
          ["sensible", "sensitive"],
        ],
        "Falsos amigos."
      ),
      toEs("Actually, the meeting has been cancelled.", "En realidad, la reunión se ha cancelado.", "Falso amigo.", ["En realidad, la reunión ha sido cancelada.", "De hecho, la reunión se ha cancelado."]),
      wo("Al final, ambas empresas llegaron a un acuerdo intermedio.", "Evitar calcos.", "Eventually, both companies reached a compromise."),
    ]
  ),
  L(
    "negocios-economia-drill-3",
    "c2r-extra-business-numbers-talk",
    "Práctica extra: hablar de cifras con precisión",
    "Crecer un 5 %, caer tres puntos, duplicarse, estancarse, tocar fondo: el vocabulario de la evolución de los datos.",
    "7 min",
    [
      sec(
        "Verbos de tendencia",
        "Subir: aumentar, crecer, repuntar (subir tras bajar), dispararse (subir mucho y rápido), duplicarse. Bajar: disminuir, caer, desplomarse (caer bruscamente), tocar fondo (llegar al mínimo). Estable: mantenerse, estancarse (sin avanzar). Preposiciones: crecer un 5 % (cantidad), crecer hasta el 8 % (nivel final), pasar del 3 al 5 %.",
        [
          ["Las ventas se dispararon en diciembre.", "Sales soared in December."],
          ["El paro pasó del 12 al 10 %.", "Unemployment went from 12 to 10%."],
        ],
        [
          mc(
            "«Tras meses de caída, las ventas ___ en marzo.» (subir de nuevo)",
            ["repuntaron", "se desplomaron", "se estancaron", "tocaron fondo"],
            0,
            "Repuntar = recuperarse."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el verbo con su significado.",
        [
          ["desplomarse", "caer bruscamente"],
          ["dispararse", "subir mucho y rápido"],
          ["estancarse", "no avanzar"],
          ["tocar fondo", "llegar al punto más bajo"],
        ],
        "Tendencias."
      ),
      fb("Completa.", "Las exportaciones crecieron ___ 7 %. (cantidad)", "un", "Crecer un x %."),
      fb("Completa.", "La inflación pasó ___ 4 al 2 %.", "del", "Pasar del… al…"),
      fb("Completa.", "Los beneficios se ___: de 10 a 20 millones. (multiplicar por dos)", "duplicaron", "Duplicarse."),
      mc(
        "«El mercado inmobiliario tocó fondo en 2013» significa que…",
        ["llegó a su punto más bajo", "alcanzó su máximo", "se mantuvo estable", "desapareció"],
        0,
        "Tocar fondo."
      ),
      toEs("Sales soared in December.", "Las ventas se dispararon en diciembre.", "Tendencia.", ["Las ventas se dispararon en el mes de diciembre."]),
      wo("Tras tocar fondo en enero, la demanda empezó a repuntar.", "Verbos de tendencia.", "After hitting bottom in January, demand started to pick up."),
    ]
  ),
  L(
    "negocios-economia-drill-3",
    "c2r-extra-business-pitch",
    "Práctica extra: presentar un proyecto a inversores",
    "Un pitch de dos minutos: problema, solución, mercado, modelo de negocio, equipo y petición.",
    "8 min",
    [
      sec(
        "Estructura del pitch",
        "Problema: «Cada año se desperdician…». Solución: «Nuestra aplicación conecta…». Mercado: «Un mercado de 2.000 millones que crece un 15 % anual». Modelo de negocio: «Cobramos una comisión del 5 % por transacción». Tracción: «Ya tenemos 10.000 usuarios». Equipo. Petición: «Buscamos 500.000 euros a cambio del 10 % del capital».",
        [
          ["Buscamos 500.000 euros a cambio del 10 % del capital.", "We're seeking 500,000 euros in exchange for 10% equity."],
          ["Ya contamos con 10.000 usuarios activos.", "We already have 10,000 active users."],
        ],
        [
          mc(
            "«Cobramos una comisión del 5 % por transacción» describe…",
            ["el modelo de negocio", "el problema", "el equipo", "la petición"],
            0,
            "Cómo se gana dinero."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Ya contamos con 10.000 usuarios activos» demuestra…",
        ["tracción", "el problema", "la competencia", "el capital"],
        0,
        "Tracción = evidencia de demanda."
      ),
      fb("Completa.", "Buscamos 300.000 euros a ___ del 8 % del capital.", "cambio", "A cambio de."),
      fb("Completa.", "Nuestra aplicación ___ a pequeños productores con restaurantes. (poner en contacto)", "conecta", "Conectar."),
      fb("Completa.", "Es un mercado que ___ un 12 % anual. (aumentar)", "crece", "Crecer."),
      mc(
        "Orden lógico del pitch:",
        ["problema → solución → mercado → modelo → tracción → petición", "petición → equipo → problema", "modelo → petición → problema → solución", "equipo → petición → mercado"],
        0,
        "Estructura estándar."
      ),
      toEs("We are seeking half a million euros to expand.", "Buscamos medio millón de euros para expandirnos.", "Petición.", ["Buscamos quinientos mil euros para expandirnos.", "Buscamos medio millón de euros para crecer."]),
      wo("Cada año se desperdician toneladas de alimentos en perfecto estado.", "Planteamiento del problema.", "Every year, tons of perfectly good food are wasted."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-2",
    "c2r-vocab-replace-wildcard-verbs",
    "Vocabulario en contexto: sustituir los verbos comodín",
    "Hacer, poner, tener, decir, dar: sustitúyelos por verbos precisos para elevar el registro.",
    "7 min",
    [
      sec(
        "Precisión léxica",
        "Hacer un informe → elaborar / redactar. Hacer una pregunta → formular / plantear. Poner un ejemplo → citar / aportar. Tener un problema → afrontar / padecer. Decir una opinión → expresar / manifestar. Dar una explicación → ofrecer / proporcionar. Tener éxito → lograr / cosechar éxito.",
        [
          ["Elaboró un informe detallado.", "She drew up a detailed report."],
          ["El ministro manifestó su preocupación.", "The minister expressed his concern."],
        ],
        [
          mc(
            "Sustituye: «hacer una pregunta»",
            ["formular una pregunta", "realizar una pregunta a hecho", "poner una pregunta", "tener una pregunta hecha"],
            0,
            "Formular / plantear."
          ),
        ]
      ),
    ],
    [
      fb("Sustituye «hacer».", "El equipo ___ un informe de cuarenta páginas. (redactar, indefinido)", "redactó", "Redactar."),
      fb("Sustituye «poner».", "Para ilustrarlo, ___ un ejemplo concreto. (citar, yo, futuro)", "citaré", "Citar un ejemplo."),
      fb("Sustituye «dar».", "La empresa ___ una explicación insuficiente. (ofrecer, indefinido)", "ofreció", "Ofrecer una explicación."),
      mt(
        "Relaciona la expresión comodín con su versión precisa.",
        [
          ["tener éxito", "cosechar éxito"],
          ["decir una opinión", "manifestar una opinión"],
          ["hacer un esfuerzo", "realizar un esfuerzo"],
          ["tener un problema", "afrontar un problema"],
        ],
        "Verbos precisos."
      ),
      mc(
        "Versión más precisa de «Tuvo muchos problemas en la empresa»:",
        ["Afrontó numerosas dificultades en la empresa.", "Hizo muchos problemas en la empresa.", "Puso muchos problemas.", "Dio muchos problemas."],
        0,
        "Verbo + sustantivo precisos."
      ),
      toEs("The report was drawn up by an independent committee.", "El informe fue elaborado por un comité independiente.", "Verbo preciso.", ["El informe lo elaboró un comité independiente.", "Un comité independiente elaboró el informe."]),
      wo("La directora manifestó su satisfacción por los resultados obtenidos.", "Registro elevado.", "The director expressed her satisfaction with the results obtained."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-5",
    "c2r-vocab-collocations",
    "Vocabulario en contexto: colocaciones que suenan nativas",
    "Cometer un error, desempeñar un papel, entablar una conversación, contraer deudas: las combinaciones fijas del español culto.",
    "7 min",
    [
      sec(
        "Palabras que van juntas",
        "Cometer un error / un delito. Desempeñar un papel / un cargo. Entablar una conversación / una relación. Contraer matrimonio / deudas / una enfermedad. Conciliar el sueño. Acatar una orden. Zanjar una polémica. Albergar esperanzas / dudas. Suscitar interés / polémica.",
        [
          ["No conseguía conciliar el sueño.", "He couldn't get to sleep."],
          ["La propuesta suscitó una gran polémica.", "The proposal sparked great controversy."],
        ],
        [
          mc(
            "«___ un papel fundamental en el proceso.»",
            ["Desempeñó", "Hizo", "Cometió", "Contrajo"],
            0,
            "Desempeñar un papel."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el verbo con su colocación.",
        [
          ["conciliar", "el sueño"],
          ["acatar", "una orden"],
          ["albergar", "esperanzas"],
          ["suscitar", "polémica"],
        ],
        "Colocaciones."
      ),
      fb("Completa.", "En el tren ___ conversación con una desconocida. (entablar, indefinido)", "entabló", "Entablar una conversación."),
      fb("Completa.", "La empresa ___ deudas que no pudo pagar. (contraer, indefinido)", "contrajo", "Contraer deudas."),
      fb("Completa.", "El ministro quiso ___ la polémica con una rueda de prensa. (cerrar definitivamente)", "zanjar", "Zanjar una polémica."),
      ms(
        "¿Qué colocaciones son correctas?",
        ["cometer un delito", "contraer matrimonio", "desempeñar un cargo", "cometer un éxito"],
        [0, 1, 2],
        "Se cosecha o se logra un éxito."
      ),
      toEs("The decision sparked widespread interest.", "La decisión suscitó un gran interés.", "Colocación.", ["La decisión despertó un gran interés.", "La decisión suscitó un interés generalizado."]),
      wo("Aún albergamos la esperanza de encontrar supervivientes.", "Albergar esperanzas.", "We still hold out hope of finding survivors."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-7",
    "c2r-vocab-word-families",
    "Vocabulario en contexto: familias de palabras",
    "Del verbo al sustantivo, al adjetivo y al adverbio: amplía tu vocabulario activo derivando con precisión.",
    "7 min",
    [
      sec(
        "Derivación",
        "Sufijos de sustantivo: -ción (resolver → resolución), -miento (conocer → conocimiento), -dad (capaz → capacidad), -ez (sencillo → sencillez), -ura (hermoso → hermosura), -anza (confiar → confianza). Adjetivo: -ble (creíble), -oso (peligroso), -ivo (decisivo). Adverbio: -mente. Irregularidades: escribir → escritura; pedir → petición.",
        [
          ["La lucidez de su análisis sorprendió a todos.", "The lucidity of her analysis surprised everyone."],
          ["Actuó con gran determinación.", "He acted with great determination."],
        ],
        [
          mc(
            "Sustantivo de «sencillo»:",
            ["sencillez", "sencillidad", "sencillamiento", "sencillura"],
            0,
            "Sufijo -ez: sencillo → sencillez."
          ),
        ]
      ),
    ],
    [
      fb("Deriva.", "Confiar → la ___.", "confianza", "Sufijo -anza: confiar → confianza."),
      fb("Deriva.", "Ser lúcido → la ___.", "lucidez", "Sufijo -ez: lúcido → lucidez."),
      fb("Deriva.", "Decidir → un momento ___. (adjetivo en -ivo)", "decisivo", "Sufijo -ivo: decidir → decisivo."),
      fb("Deriva.", "Pedir → una ___ formal.", "petición", "Derivación irregular."),
      mt(
        "Relaciona verbo y sustantivo.",
        [
          ["conocer", "conocimiento"],
          ["resolver", "resolución"],
          ["escribir", "escritura"],
          ["crecer", "crecimiento"],
        ],
        "Familias léxicas."
      ),
      mc(
        "Adjetivo de «creer» con el sentido «que se puede creer»:",
        ["creíble", "creyente", "creído", "creedor"],
        0,
        "-ble = que puede ser."
      ),
      wo("Su capacidad de adaptación resultó decisiva para el proyecto.", "Derivados.", "Her adaptability proved decisive for the project."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-10",
    "c2r-vocab-paronyms",
    "Vocabulario en contexto: parónimos traicioneros",
    "Actitud / aptitud, infligir / infringir, prever / proveer, absolver / absorber: palabras que se parecen y no significan lo mismo.",
    "7 min",
    [
      sec(
        "Casi iguales",
        "Actitud (disposición de ánimo) / aptitud (capacidad). Infligir (causar un daño o castigo) / infringir (violar una norma). Prever (ver con antelación) / proveer (suministrar). Absolver (declarar inocente) / absorber (empapar). Especia (condimento) / especie (clase). Adoptar (tomar) / adaptar (ajustar). Perjuicio (daño) / prejuicio (juicio previo).",
        [
          ["Infringió la ley de tráfico.", "He broke the traffic law."],
          ["Le infligieron una dura derrota.", "They inflicted a heavy defeat on him."],
        ],
        [
          mc(
            "«El jurado ___ al acusado por falta de pruebas.»",
            ["absolvió", "absorbió", "adoptó", "infringió"],
            0,
            "Absolver = declarar inocente."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Tiene una gran ___ para las matemáticas. (capacidad)", "aptitud", "Aptitud ≠ actitud."),
      fb("Elige.", "Quien ___ las normas será sancionado. (violar)", "infrinja", "Infringir + subjuntivo en relativa."),
      fb("Elige.", "No ___ que el proyecto se retrasara tanto. (anticipar, yo, indefinido)", "preví", "Prever."),
      mt(
        "Relaciona cada parónimo con su significado.",
        [
          ["perjuicio", "daño"],
          ["prejuicio", "idea preconcebida"],
          ["especia", "condimento"],
          ["especie", "clase o tipo"],
        ],
        "Parónimos."
      ),
      mc(
        "«Hay que ___ el texto a un público infantil.» (ajustar)",
        ["adaptar", "adoptar", "adeptar", "aceptar"],
        0,
        "Adaptar = ajustar."
      ),
      toEs("Her positive attitude made the difference.", "Su actitud positiva marcó la diferencia.", "Actitud.", ["Su actitud positiva fue la diferencia.", "Su actitud positiva marcó toda la diferencia."]),
      wo("La esponja absorbió toda el agua derramada.", "Absorber.", "The sponge soaked up all the spilled water."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-12",
    "c2r-vocab-verbs-of-saying",
    "Vocabulario en contexto: verbos de habla con matiz",
    "Susurrar, balbucear, espetar, recalcar, farfullar, replicar: cómo se dice algo cuenta tanto como lo que se dice.",
    "7 min",
    [
      sec(
        "Más allá de «decir»",
        "Volumen: susurrar, murmurar (bajo) / gritar, vociferar (alto). Dificultad: balbucear, tartamudear, farfullar (hablar rápido y mal). Actitud: espetar (decir algo brusco a la cara), recalcar (insistir), replicar (responder oponiéndose), sentenciar (afirmar con rotundidad), musitar (hablar muy bajo, casi sin voz).",
        [
          ["«No vuelvas nunca», le espetó.", "“Never come back,” she snapped at him."],
          ["Recalcó que la decisión era definitiva.", "He stressed that the decision was final."],
        ],
        [
          mc(
            "Nervioso, el niño ___ una excusa incomprensible.",
            ["balbuceó", "recalcó", "sentenció", "vociferó"],
            0,
            "Balbucear = hablar con dificultad."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el verbo con su matiz.",
        [
          ["espetar", "decir algo brusco a la cara"],
          ["recalcar", "insistir en algo"],
          ["susurrar", "hablar muy bajo"],
          ["replicar", "responder oponiéndose"],
        ],
        "Verbos de habla."
      ),
      fb("Completa.", "«Te lo advertí», ___ con frialdad. (decir algo cortante, indefinido)", "espetó", "Espetar."),
      fb("Completa.", "Me ___ al oído que no me fiara de él. (decir en voz muy baja, indefinido)", "susurró", "Susurrar."),
      fb("Completa.", "El profesor ___ la importancia de citar las fuentes. (insistir, indefinido)", "recalcó", "Recalcar."),
      mc(
        "«Farfulló algo y se marchó» significa que…",
        ["habló de forma rápida y confusa", "gritó con fuerza", "cantó", "habló muy claro"],
        0,
        "Farfullar."
      ),
      toEs("“That's not true,” she replied.", "«Eso no es verdad», replicó.", "Replicar.", ["«Eso no es cierto», replicó.", "—Eso no es verdad —replicó."]),
      wo("La anciana musitó una oración antes de dormirse.", "Musitar.", "The old woman murmured a prayer before falling asleep."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-15",
    "c2r-vocab-character-adjectives",
    "Vocabulario en contexto: adjetivos de carácter",
    "Tenaz, afable, altivo, taciturno, mezquino, ecuánime, pusilánime: describe personas con precisión literaria.",
    "7 min",
    [
      sec(
        "Retratos precisos",
        "Positivos: tenaz (persistente), afable (amable y cercano), ecuánime (justo, equilibrado), íntegro (honrado), perspicaz (que capta lo sutil). Negativos: altivo / soberbio (orgulloso), mezquino (tacaño o ruin), pusilánime (cobarde), taciturno (callado y triste), arisco (poco sociable), voluble (cambiante).",
        [
          ["Era un hombre afable y de trato sencillo.", "He was a friendly, easy-going man."],
          ["Su carácter voluble desconcertaba a todos.", "His fickle nature baffled everyone."],
        ],
        [
          mc(
            "Una jueza que decide con justicia y equilibrio es…",
            ["ecuánime", "voluble", "altiva", "pusilánime"],
            0,
            "Ecuánime."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el adjetivo con su definición.",
        [
          ["tenaz", "que no se rinde"],
          ["taciturno", "callado y melancólico"],
          ["perspicaz", "que percibe lo sutil"],
          ["mezquino", "ruin, tacaño"],
        ],
        "Adjetivos de carácter."
      ),
      fb("Completa.", "Cambia de opinión cada día: es muy ___. (inconstante)", "voluble", "Voluble."),
      fb("Completa.", "Nunca aceptó sobornos: era un funcionario ___. (honrado)", "íntegro", "Íntegro."),
      fb("Completa.", "Mira a todos por encima del hombro: es muy ___. (orgulloso)", "altivo", "Altivo."),
      ms(
        "¿Qué adjetivos son positivos?",
        ["afable", "perspicaz", "tenaz", "arisco"],
        [0, 1, 2],
        "Arisco = poco sociable."
      ),
      toEs("She was a tenacious and perceptive researcher.", "Era una investigadora tenaz y perspicaz.", "Adjetivos precisos.", ["Fue una investigadora tenaz y perspicaz."]),
      wo("Detrás de su aspecto arisco se escondía un hombre afable.", "Contraste de adjetivos.", "Behind his gruff appearance was a kindly man."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-17",
    "c2r-vocab-gender-meaning",
    "Vocabulario en contexto: el género que cambia el significado",
    "El capital / la capital, el cura / la cura, el orden / la orden, el frente / la frente, el cólera / la cólera.",
    "7 min",
    [
      sec(
        "Mismo sustantivo, dos sentidos",
        "El capital (dinero) / la capital (ciudad). El cura (sacerdote) / la cura (curación). El orden (disposición) / la orden (mandato; congregación religiosa). El frente (primera línea; parte delantera) / la frente (parte de la cara). El cólera (enfermedad) / la cólera (ira). El pendiente (joya) / la pendiente (cuesta).",
        [
          ["El capital inicial fue de un millón.", "The initial capital was one million."],
          ["Recibió la orden de evacuar.", "He received the order to evacuate."],
        ],
        [
          mc(
            "«Subimos ___ pendiente más empinada del puerto.»",
            ["la", "el", "lo", "los"],
            0,
            "La pendiente = cuesta."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Lima es ___ capital de Perú.", "la", "Ciudad."),
      fb("Completa.", "Pon los libros en ___ orden alfabético.", "el", "Disposición."),
      fb("Completa.", "Todavía no existe ___ cura para esa enfermedad.", "una", "Curación."),
      fb("Completa.", "Se golpeó ___ frente contra la puerta.", "la", "Parte de la cara."),
      mc(
        "«Montó en cólera» significa…",
        ["se enfureció", "enfermó de cólera", "se subió a un caballo", "se tranquilizó"],
        0,
        "La cólera = ira."
      ),
      mt(
        "Relaciona cada forma con su significado.",
        [
          ["el cura", "sacerdote"],
          ["la orden", "mandato"],
          ["el frente", "línea de combate"],
          ["el capital", "dinero invertido"],
        ],
        "Género y significado."
      ),
      wo("El cura del pueblo recibió la orden de trasladarse a la capital.", "Varios cambios de género.", "The village priest received the order to move to the capital."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-20",
    "c2r-vocab-latinisms",
    "Vocabulario en contexto: latinismos del español culto",
    "A priori, grosso modo, in situ, per cápita, sine qua non, motu proprio, ipso facto: uso correcto y errores frecuentes.",
    "7 min",
    [
      sec(
        "Latinismos vivos",
        "A priori (antes de examinarlo). Grosso modo (a grandes rasgos; ✗ «a grosso modo»). In situ (en el lugar). Per cápita (por persona). Condición sine qua non (imprescindible). Motu proprio (por propia iniciativa; ✗ «de motu propio»). Ipso facto (inmediatamente). Statu quo (situación actual; ✗ «status quo» en norma académica, aunque se oye). Déficit, superávit, currículum.",
        [
          ["Grosso modo, el plan tiene tres fases.", "Roughly speaking, the plan has three phases."],
          ["Dimitió motu proprio.", "He resigned of his own accord."],
        ],
        [
          mc(
            "Forma correcta:",
            ["grosso modo", "a grosso modo", "a grosso modos", "grossa moda"],
            0,
            "Sin preposición."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el latinismo con su significado.",
        [
          ["in situ", "en el lugar mismo"],
          ["per cápita", "por persona"],
          ["sine qua non", "imprescindible"],
          ["ipso facto", "inmediatamente"],
        ],
        "Latinismos."
      ),
      fb("Completa.", "Lo hizo motu ___, sin que nadie se lo pidiera.", "proprio", "Motu proprio (no «propio»)."),
      fb("Completa.", "A ___, la idea parece buena, pero habrá que estudiarla.", "priori", "A priori."),
      fb("Completa.", "La renta ___ cápita aumentó un 3 %.", "per", "Per cápita."),
      mc(
        "¿Cuál es incorrecto según la norma?",
        ["de motu propio", "motu proprio", "grosso modo", "in situ"],
        0,
        "Ni «de» ni «propio»."
      ),
      toEs("Speaking a second language is a sine qua non for this job.", "Hablar un segundo idioma es condición sine qua non para este puesto.", "Latinismo.", ["Hablar una segunda lengua es condición sine qua non para este trabajo.", "Hablar otro idioma es condición sine qua non para este puesto."]),
      wo("Los técnicos analizaron los daños in situ.", "In situ.", "The technicians analyzed the damage on site."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-22",
    "c2r-vocab-prefixes",
    "Vocabulario en contexto: prefijos que multiplican el vocabulario",
    "Des-, in-, re-, sobre-, sub-, contra-, pre-, pos-, anti-: entiende y crea palabras nuevas.",
    "7 min",
    [
      sec(
        "Prefijos productivos",
        "Des- / in- (negación): deshacer, incapaz, irreal, ilegal. Re- (repetición o intensidad): releer, rebuscar. Sobre- (exceso): sobrecargar, sobrevalorar. Sub- (debajo / insuficiente): subestimar, subdesarrollo. Contra- (oposición): contraataque, contraproducente. Pre- / pos- (antes / después): prever, posguerra. Anti- (contra): antivirus. Ortografía: pre- se une sin guion (precampaña, exministro).",
        [
          ["No subestimes a tu rival.", "Don't underestimate your opponent."],
          ["Esa medida resultó contraproducente.", "That measure turned out to be counterproductive."],
        ],
        [
          mc(
            "Valorar algo por encima de lo que vale:",
            ["sobrevalorar", "subvalorar", "revalorar", "contravalorar"],
            0,
            "Sobre- = exceso."
          ),
        ]
      ),
    ],
    [
      fb("Deriva.", "Algo que produce el efecto contrario al buscado es ___.", "contraproducente", "Prefijo contra-: oposición."),
      fb("Deriva.", "Valorar por debajo de lo que merece: ___.", "subestimar", "Prefijo sub-: por debajo."),
      fb("Deriva.", "El periodo después de una guerra es la ___.", "posguerra", "Prefijo pos-: después de."),
      fb("Deriva.", "Que no es legal: ___.", "ilegal", "Prefijo in- → il- ante l."),
      ms(
        "¿Qué palabras tienen prefijo de negación?",
        ["irreal", "deshacer", "incapaz", "releer"],
        [0, 1, 2],
        "Re- = repetición."
      ),
      mc(
        "Grafía correcta según la norma actual:",
        ["exministro", "ex-ministro", "ex ministro de", "Ex-Ministro"],
        0,
        "Prefijo unido a una sola palabra."
      ),
      wo("Los expertos advierten de que no conviene sobrecargar el sistema.", "Prefijo sobre-.", "Experts warn that the system should not be overloaded."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-25",
    "c2r-vocab-register-synonyms",
    "Vocabulario en contexto: sinónimos según el registro",
    "Empezar / comenzar / iniciar / dar comienzo; acabar / terminar / finalizar / concluir: elige según el contexto.",
    "7 min",
    [
      sec(
        "Escalera de formalidad",
        "Coloquial → neutro → formal → solemne. Empezar → comenzar → iniciar → dar comienzo. Acabar → terminar → finalizar → concluir / dar por concluido. Pedir → solicitar → requerir. Mirar → examinar → analizar. Enseñar → mostrar → exhibir. Ayudar → colaborar → contribuir. Arreglar → reparar → subsanar.",
        [
          ["El acto dará comienzo a las diez.", "The ceremony will begin at ten."],
          ["Se requiere la presencia de todos los socios.", "The presence of all members is required."],
        ],
        [
          mc(
            "En una invitación oficial:",
            ["El acto dará comienzo a las 19:00 h.", "El acto empieza a las siete, más o menos.", "Arrancamos a las siete.", "Empezamos cuando lleguéis."],
            0,
            "Registro solemne."
          ),
        ]
      ),
    ],
    [
      fb("Registro formal.", "Se ___ a los asistentes que apaguen el móvil. (pedir formalmente)", "ruega", "Rogar."),
      fb("Registro formal.", "La sesión ___ a las 20:00 h. (terminar, formal, indefinido)", "finalizó", "Finalizar."),
      fb("Registro formal.", "Es necesario ___ los errores detectados. (arreglar, formal)", "subsanar", "Subsanar."),
      mc(
        "Ordena de menos a más formal: (a) solicitar (b) pedir (c) requerir",
        ["b, a, c", "c, a, b", "a, b, c", "b, c, a"],
        0,
        "Pedir < solicitar < requerir."
      ),
      mt(
        "Relaciona el verbo coloquial con su equivalente formal.",
        [
          ["mirar", "examinar"],
          ["enseñar", "exhibir"],
          ["ayudar", "contribuir"],
        ],
        "Sinónimos de registro."
      ),
      toEs("The meeting will begin at nine.", "La reunión dará comienzo a las nueve.", "Registro formal.", ["La reunión comenzará a las nueve.", "La reunión se iniciará a las nueve."]),
      wo("Se ruega a los asistentes que ocupen sus asientos.", "Registro formal.", "Attendees are requested to take their seats."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-27",
    "c2r-vocab-change-verbs",
    "Vocabulario en contexto: verbos de cambio",
    "Ponerse, volverse, hacerse, quedarse, convertirse en, llegar a ser: el español distingue matices que el inglés resume en «become».",
    "7 min",
    [
      sec(
        "Become en seis verbos",
        "Ponerse (cambio temporal de estado o aspecto): ponerse rojo, nervioso. Volverse (cambio de carácter, a menudo repentino y duradero): volverse loco, desconfiado. Hacerse (cambio por voluntad o proceso): hacerse rico, médico, famoso. Quedarse (resultado, a menudo pérdida): quedarse ciego, viudo, sin trabajo. Convertirse en (transformación con sustantivo). Llegar a ser (culminación tras esfuerzo).",
        [
          ["Se puso pálido al oír la noticia.", "He went pale when he heard the news."],
          ["Tras años de esfuerzo, llegó a ser directora.", "After years of effort, she became director."],
        ],
        [
          mc(
            "«Con los años, ___ muy desconfiado.» (cambio de carácter)",
            ["se volvió", "se puso", "se quedó", "llegó a ser"],
            0,
            "Volverse."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se ___ rojo cuando le preguntaron. (cambio momentáneo, indefinido)", "puso", "Ponerse."),
      fb("Completa.", "Se ___ sin trabajo tras el cierre de la fábrica. (resultado, indefinido)", "quedó", "Quedarse."),
      fb("Completa.", "Se ___ vegetariana por convicción. (decisión propia, indefinido)", "hizo", "Hacerse."),
      fb("Completa.", "El pequeño pueblo se ___ en un destino turístico. (transformación, indefinido)", "convirtió", "Convertirse en."),
      mt(
        "Relaciona el verbo con el tipo de cambio.",
        [
          ["ponerse", "estado pasajero"],
          ["hacerse", "cambio voluntario o gradual"],
          ["quedarse", "resultado final"],
          ["llegar a ser", "culminación tras esfuerzo"],
        ],
        "Verbos de cambio."
      ),
      toEs("He went pale when he saw the bill.", "Se puso pálido al ver la cuenta.", "Ponerse.", ["Se puso pálido cuando vio la cuenta.", "Se quedó pálido al ver la cuenta."]),
      wo("Nunca imaginó que llegaría a ser presidenta del club.", "Llegar a ser.", "She never imagined she would become president of the club."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-30",
    "c2r-vocab-light-verb-idioms",
    "Vocabulario en contexto: locuciones con dar, echar y llevar",
    "Dar por sentado, echar en cara, llevar a cabo, dar pie a, echar a perder, llevarse un chasco: locuciones verbales de alta frecuencia.",
    "7 min",
    [
      sec(
        "Locuciones verbales",
        "Dar por sentado (suponer sin comprobar). Dar pie a (provocar, dar ocasión). Dar con (encontrar). Echar en cara (reprochar). Echar a perder (estropear). Echar en falta (notar la ausencia). Llevar a cabo (realizar). Llevarse un chasco (sufrir una decepción). Llevar la contraria (oponerse siempre).",
        [
          ["Dio por sentado que yo lo sabía.", "He took it for granted that I knew."],
          ["Me echó en cara que no la llamara.", "She reproached me for not calling her."],
        ],
        [
          mc(
            "«Su comentario dio ___ a una larga discusión.»",
            ["pie", "mano", "cabo", "cara"],
            0,
            "Dar pie a."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la locución con su significado.",
        [
          ["llevar a cabo", "realizar"],
          ["echar a perder", "estropear"],
          ["echar en falta", "notar la ausencia"],
          ["llevarse un chasco", "decepcionarse"],
        ],
        "Locuciones verbales."
      ),
      fb("Completa.", "No lo des por ___: primero compruébalo.", "sentado", "Dar por sentado."),
      fb("Completa.", "Siempre me echa en ___ mis errores del pasado.", "cara", "Echar en cara."),
      fb("Completa.", "La lluvia echó a ___ la cosecha.", "perder", "Echar a perder."),
      mc(
        "«Le encanta llevar la contraria» describe a alguien que…",
        ["siempre se opone a lo que dicen los demás", "siempre ayuda", "siempre llega tarde", "siempre tiene razón"],
        0,
        "Llevar la contraria."
      ),
      toEs("The project was carried out in record time.", "El proyecto se llevó a cabo en un tiempo récord.", "Llevar a cabo.", ["El proyecto fue llevado a cabo en tiempo récord.", "El proyecto se llevó a cabo en tiempo récord."]),
      wo("Esperaba un ascenso y se llevó un buen chasco.", "Llevarse un chasco.", "She was expecting a promotion and was badly disappointed."),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-error-hunt",
    "Desafío C2: la gran caza de errores",
    "Empieza el desafío final del C2: cada frase esconde un error de un tema distinto del nivel.",
    "8 min",
    [
      sec(
        "Cómo funciona el desafío",
        "Las siete lecciones del Desafío C2 mezclan todo el nivel: lenguaje jurídico y médico, fraseología, refranes, humor, figuras retóricas, eufemismos, argumentación, negociación, citas, narración histórica y vocabulario culto. Aquí, cada frase tiene un único error: localízalo y corrígelo.",
        [
          ["✗ Lo hizo de motu propio. → ✓ Lo hizo motu proprio.", "He did it of his own accord."],
          ["✗ Está lloviendo gatos y perros. → ✓ Está lloviendo a cántaros.", "It's raining cats and dogs."],
        ],
        [
          mc(
            "¿Dónde está el error? «El juez dictó el recurso de apelación.»",
            ["dictó → se interpone un recurso; se dicta una sentencia", "juez → fiscal", "apelación → casación", "No hay error"],
            0,
            "Colocación jurídica."
          ),
        ]
      ),
    ],
    [
      fb("Corrige (parónimo).", "Quien ___ la norma será sancionado. (el alumno puso: inflija)", "infrinja", "Infringir = violar una norma."),
      fb("Corrige (modismo).", "Mataremos dos pájaros de un ___. (el alumno puso: piedra)", "tiro", "De un tiro."),
      fb("Corrige (latinismo).", "___ modo, el plan tiene tres fases. (el alumno escribió: A grosso modo)", "Grosso", "Grosso modo, sin la preposición «a»."),
      fb("Corrige (cita).", "El autor recomendó que se ___ la muestra. (el alumno puso: amplía)", "ampliara", "Influencia en pasado → imperfecto de subjuntivo."),
      fb("Corrige (verbo de cambio).", "Se ___ viudo muy joven. (el alumno puso: puso)", "quedó", "Quedarse = resultado."),
      mc(
        "¿Dónde está el error? «Siento que te hayas ofendido por mi culpa, pero tú empezaste.»",
        ["Es una falsa disculpa: traslada la culpa.", "hayas → has", "ofendido → ofendida", "No hay error"],
        0,
        "Error pragmático."
      ),
      ms(
        "¿Qué frases están bien?",
        ["La cólera lo invadió al oír la noticia.", "Le infligieron una derrota humillante.", "Hubieron muchos heridos.", "Dimitió motu proprio."],
        [0, 1, 3],
        "Haber impersonal va en singular: hubo."
      ),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-register-chameleon",
    "Desafío C2: el camaleón del registro",
    "Un mismo hecho contado por un notario, una médica, un periodista y un amigo: identifica y produce cada registro.",
    "8 min",
    [
      sec(
        "El hecho",
        "Un vecino se cayó de una escalera, se fracturó la muñeca y demanda a la comunidad porque la escalera estaba en mal estado. Notario/abogado: «El demandante sufrió una fractura como consecuencia del deficiente estado de la escalera». Médica: «Presenta fractura distal de radio». Periodista: «Un vecino denuncia a su comunidad tras romperse la muñeca». Amigo: «Se pegó un castañazo y se rompió la muñeca».",
        [
          ["Presenta fractura distal de radio.", "He presents a distal radius fracture."],
          ["Se pegó un castañazo.", "He took a nasty tumble."],
        ],
        [
          mc(
            "«Un vecino denuncia a su comunidad tras romperse la muñeca» es registro…",
            ["periodístico", "médico", "jurídico", "coloquial"],
            0,
            "Titular de prensa."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada versión con su registro.",
        [
          ["El demandante sufrió una fractura…", "jurídico"],
          ["Presenta fractura distal de radio.", "médico"],
          ["Se pegó un castañazo.", "coloquial"],
        ],
        "Registros."
      ),
      fb("Jurídico.", "El demandante ___ una fractura como consecuencia del accidente. (padecer, indefinido)", "sufrió", "Sufrir una lesión."),
      fb("Médico.", "El paciente ___ dolor intenso en la muñeca. (manifestar, término clínico)", "refiere", "Referir."),
      fb("Coloquial.", "Se pegó un ___ tremendo bajando la escalera. (caída fuerte, coloquial España)", "castañazo", "Castañazo = golpe fuerte."),
      mc(
        "¿Qué frase mezcla registros de forma inadecuada?",
        ["El demandante se pegó un castañazo como consecuencia del deficiente estado de la escalera.", "El demandante sufrió una caída.", "Se cayó por la escalera.", "Presenta una fractura."],
        0,
        "Coloquialismo en texto jurídico."
      ),
      toEs("The plaintiff suffered a fracture as a result of the fall.", "El demandante sufrió una fractura como consecuencia de la caída.", "Registro jurídico.", ["El demandante sufrió una fractura a consecuencia de la caída.", "El demandante sufrió una fractura como resultado de la caída."]),
      wo("Un vecino denuncia a su comunidad tras romperse la muñeca en la escalera.", "Titular periodístico.", "Resident sues his building after breaking his wrist on the stairs."),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-translation-relay",
    "Desafío C2: relevo de traducción",
    "Traduce en ambas direcciones frases que concentran fraseología, eufemismos, registro formal y gramática fina.",
    "9 min",
    [
      sec(
        "Traducir sentido, no palabras",
        "A nivel C2 se traduce la función: «He kicked the bucket» → «Estiró la pata»; «Notwithstanding the foregoing» → «Sin perjuicio de lo anterior»; «It's all Greek to me» → «Me suena a chino»; «The company let him go» → «La empresa prescindió de sus servicios».",
        [
          ["Sin perjuicio de lo anterior…", "Notwithstanding the foregoing…"],
          ["La empresa prescindió de sus servicios.", "The company let him go."],
        ],
        [
          mc(
            "«To take something for granted» →",
            ["dar algo por sentado", "tomar algo por concedido", "coger algo gratis", "dar algo por hecho gratis"],
            0,
            "Locución verbal."
          ),
        ]
      ),
    ],
    [
      toEs("Stop beating around the bush and get to the point.", "Deja de andarte por las ramas y ve al grano.", "Dos modismos.", ["No te andes por las ramas y ve al grano.", "Deja de irte por las ramas y ve al grano."]),
      toEs("Should the tenant fail to pay, the contract shall be terminated.", "En caso de que el arrendatario no pague, el contrato quedará resuelto.", "Registro jurídico.", ["En caso de que el arrendatario no abone la renta, el contrato quedará resuelto.", "Si el arrendatario no paga, el contrato se resolverá."]),
      toEs("It is worth distinguishing between explaining and justifying.", "Conviene distinguir entre explicar y justificar.", "Registro académico.", ["Cabe distinguir entre explicar y justificar.", "Conviene diferenciar entre explicar y justificar."]),
      toEn("Se llevó un chasco tremendo.", "He was bitterly disappointed.", "Locución.", ["She was really let down.", "He was terribly disappointed.", "She got a big disappointment."]),
      toEn("Me temo que esta es nuestra última oferta.", "I'm afraid this is our final offer.", "Presión cortés.", ["I'm afraid this is our last offer."]),
      toEn("Firmada la paz, las tropas regresaron.", "Once peace was signed, the troops returned.", "Participio absoluto.", ["After peace was signed, the troops returned.", "With peace signed, the troops went back."]),
      toEs("Everything seems to indicate that the trend will continue.", "Todo parece indicar que la tendencia se mantendrá.", "Atenuación.", ["Todo parece indicar que la tendencia continuará.", "Todo indica que la tendencia se mantendrá."]),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-phraseology-no-hints",
    "Desafío C2: fraseología sin pistas",
    "Modismos, refranes, locuciones y colocaciones: completa sin paréntesis ni explicaciones previas.",
    "8 min",
    [
      sec(
        "Última ronda de fraseología",
        "Sin pistas: cada hueco exige una palabra de una expresión fija estudiada en el C2. Recuerda que las formas fijas no admiten variación: «llover a cántaros», «de Pascuas a Ramos», «hacer borrón y cuenta nueva», «conciliar el sueño», «dar luz verde».",
        [
          ["Hicimos borrón y cuenta nueva.", "We wiped the slate clean."],
        ],
        [
          mc(
            "«Poner los puntos sobre las ___.»",
            ["íes", "letras", "palabras", "tildes"],
            0,
            "Forma fija."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No consigo conciliar el ___.", "sueño", "Colocación."),
      fb("Completa.", "El consejo dio luz ___ al proyecto.", "verde", "Aprobar."),
      fb("Completa.", "Hicieron borrón y cuenta ___.", "nueva", "Empezar de cero."),
      fb("Completa.", "Genio y figura hasta la ___.", "sepultura", "El carácter no cambia."),
      fb("Completa.", "Lo pillaron con las manos en la ___.", "masa", "In fraganti."),
      fb("Completa.", "Nos vemos de Pascuas a ___.", "Ramos", "Muy de vez en cuando."),
      fb("Completa.", "No le busques tres pies al ___.", "gato", "Complicar las cosas."),
      fb("Completa.", "Se le fue el santo al ___.", "cielo", "Olvidarse."),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-text-detective",
    "Desafío C2: detective de textos",
    "Una columna de opinión con ironía, figuras retóricas, citas y argumentación: análisis completo.",
    "10 min",
    [
      sec(
        "La columna",
        "«Nos dicen que la ciudad es para las personas. Magnífico. Por eso, supongo, el último parque del barrio será un aparcamiento. ¿Quién necesita árboles teniendo plazas de garaje? El concejal, en palabras textuales, afirmó que el proyecto “mejorará la movilidad”. Es cierto que el tráfico es un problema; ahora bien, convertir el pulmón del barrio en asfalto no parece la cura, sino la enfermedad.»",
        [
          ["El pulmón del barrio.", "The neighborhood's lungs (green space)."],
          ["No parece la cura, sino la enfermedad.", "It seems not the cure, but the disease."],
        ],
        [
          mc(
            "«Magnífico.» en la segunda frase es…",
            ["ironía", "un elogio sincero", "una cita", "un eufemismo"],
            0,
            "Antífrasis."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Quién necesita árboles teniendo plazas de garaje?» es…",
        ["una pregunta retórica irónica", "una pregunta real", "una hipofora", "una cita"],
        0,
        "Afirmación implícita contraria."
      ),
      mc(
        "«El pulmón del barrio» es…",
        ["una metáfora", "una metonimia", "un eufemismo", "una hipérbole"],
        0,
        "Parque = pulmón."
      ),
      mc(
        "«Es cierto que el tráfico es un problema; ahora bien…» es…",
        ["concesión seguida de refutación", "un falso dilema", "un ad hominem", "una tríada"],
        0,
        "Estructura concesiva."
      ),
      mc(
        "Las comillas en «mejorará la movilidad» indican…",
        ["cita textual con distancia crítica", "un título", "un tecnicismo", "una traducción"],
        0,
        "Cita + ironía."
      ),
      mc(
        "«No parece la cura, sino la enfermedad» usa…",
        ["antítesis con metáfora médica", "sinestesia", "anáfora", "eufemismo"],
        0,
        "Oposición cura/enfermedad."
      ),
      fb("Completa según el texto.", "En palabras ___, el concejal afirmó que…", "textuales", "Cita literal."),
      ms(
        "¿Qué recursos usa el columnista?",
        ["ironía", "pregunta retórica", "concesión", "estadísticas detalladas"],
        [0, 1, 2],
        "No aporta estadísticas."
      ),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-argue-to-the-limit",
    "Desafío C2: argumentar al límite",
    "Un debate con falacias, preguntas retóricas y presión: responde en cada turno con la herramienta exacta.",
    "9 min",
    [
      sec(
        "Herramientas finales",
        "Concesión + refutación. Desactivar falacias (ad hominem, hombre de paja, falso dilema, pendiente resbaladiza). Responder a preguntas retóricas con datos. Mantener el registro bajo presión: «Permítame terminar», «Con todo respeto». Cerrar con síntesis y llamamiento.",
        [
          ["Con todo respeto, eso no es lo que he dicho.", "With all due respect, that's not what I said."],
        ],
        [
          mc(
            "«Usted defiende esto porque su empresa se beneficia.» Es…",
            ["ad hominem", "falso dilema", "pendiente resbaladiza", "argumento sólido"],
            0,
            "Ataque a la persona."
          ),
        ]
      ),
    ],
    [
      mc(
        "Respuesta adecuada al ataque anterior:",
        ["Mis intereses no invalidan los datos; analicémoslos.", "¡Y usted es un mentiroso!", "Pues sí, me beneficio, ¿y qué?", "No pienso contestar."],
        0,
        "Separar persona y argumento."
      ),
      mc(
        "«Si aprobamos esto, mañana nos prohibirán hasta respirar.» Es…",
        ["pendiente resbaladiza", "concesión", "analogía válida", "dato"],
        0,
        "Cadena catastrófica."
      ),
      mc(
        "El rival interrumpe por tercera vez. Usted:",
        ["Permítame terminar; luego le escucho con gusto.", "¡Cállese!", "Me voy.", "Hable usted, que yo ya no digo nada."],
        0,
        "Firmeza cortés."
      ),
      fb("Concesión.", "Nadie ___ que el problema sea grave; la cuestión es cómo abordarlo.", "discute", "Nadie discute que + subjuntivo."),
      fb("Contra el hombre de paja.", "Con todo ___, eso no es lo que he propuesto.", "respeto", "Con todo respeto."),
      fb("Cierre.", "La pregunta no es si podemos permitírnoslo, ___ si podemos permitirnos no hacerlo.", "sino", "No… sino…"),
      toEs("With all due respect, that is not what I said.", "Con todo respeto, eso no es lo que he dicho.", "Firmeza cortés.", ["Con todo el respeto, eso no es lo que he dicho.", "Con todo respeto, no es eso lo que he dicho."]),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-exit-ticket",
    "Desafío C2: examen de maestría",
    "La prueba final del curso: una pregunta por cada gran bloque del C2. Si la superas, dominas el español a nivel de maestría.",
    "10 min",
    [
      sec(
        "La última prueba",
        "Este examen recorre el C2 completo. Si fallas una pregunta, vuelve a la práctica extra o al repaso en espiral de ese bloque. Recuerda: el nivel de maestría no es la ausencia de errores, sino la capacidad de elegir, con intención, la forma exacta para cada situación.",
        [
          ["Dominar una lengua es elegir con intención.", "Mastering a language is choosing with intent."],
        ],
        [
          mc(
            "Jurídico: «El tribunal ___ el recurso y confirmó la sentencia.»",
            ["desestimó", "estimó", "dictó", "incoó"],
            0,
            "Desestimar = rechazar."
          ),
        ]
      ),
    ],
    [
      mc(
        "Médico: «Cefalea» es…",
        ["dolor de cabeza", "falta de aire", "picor", "fiebre alta"],
        0,
        "Término clínico."
      ),
      mc(
        "Fraseología: «Irse de la lengua» significa…",
        ["revelar un secreto", "hablar otro idioma", "callarse", "mentir"],
        0,
        "Modismo."
      ),
      mc(
        "Figuras: «Leí a Neruda todo el verano» contiene…",
        ["una metonimia (autor por obra)", "una hipérbole", "un oxímoron", "una sinestesia"],
        0,
        "Autor por obra."
      ),
      mc(
        "Eufemismo: «Ajuste de plantilla» significa…",
        ["despidos", "contrataciones", "subida de sueldos", "cambio de horario"],
        0,
        "Eufemismo laboral."
      ),
      fb("Historia.", "Cuando llegaron los refuerzos, la ciudad ya se ___ rendido.", "había", "Pluscuamperfecto."),
      fb("Citas.", "El autor ___ que los datos no son concluyentes. (afirmar con firmeza, presente)", "sostiene", "Verbo de atribución."),
      fb("Negociación.", "Aceptaríamos siempre que el plazo ___ de 60 días. (ser)", "fuera", "Condicional + siempre que + imperfecto de subjuntivo."),
    ]
  ),
];
